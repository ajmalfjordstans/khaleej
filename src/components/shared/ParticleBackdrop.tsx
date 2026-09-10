'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createRadialTexture } from '@/lib/particleTexture';

// "Arabic coffee & incense" — two point clouds evoking qahwa (cardamom coffee) and
// bakhoor/oud incense smoke, replacing the donor's spice/rice pair with the same
// two-cloud architecture: a sparse colored cloud + a dense single-tone cloud.
const COFFEE_COLORS = [
  [107, 94, 58],  // cardamom green-brown
  [140, 92, 54],  // cinnamon brown
  [26, 18, 14],   // dark roast near-black
  [181, 122, 39], // gold-flecked amber
];

export default function ParticleBackdrop() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Respect the visitor's motion preference — skip the WebGL scene entirely
    // rather than mounting a canvas that then never animates.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#89182E');
    scene.fog = new THREE.FogExp2('#89182E', 0.05);

    // mount is `fixed inset-0`, so its box is always the viewport — reading
    // window.innerWidth/Height instead of mount.clientWidth/Height sidesteps a
    // hydration-timing race where the div hasn't been through layout yet when
    // this effect runs, which was leaving the canvas permanently sized at 0x0.
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 60);
    camera.position.set(0, 0.2, 9);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // coffee: sparse, colored, slow ambient drift (cardamom coffee grounds)
    const coffeeCount = 420;
    const coffeeGeo = new THREE.BufferGeometry();
    const coffeeAttrArray = new Float32Array(coffeeCount * 3);
    const coffeeBase = new Float32Array(coffeeCount * 3);
    const coffeeColor = new Float32Array(coffeeCount * 3);
    const coffeePhase = new Float32Array(coffeeCount);
    for (let i = 0; i < coffeeCount; i++) {
      const r = 3 + Math.random() * 7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      coffeeBase[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      coffeeBase[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.7;
      coffeeBase[i * 3 + 2] = r * Math.cos(phi) - 3;
      coffeePhase[i] = Math.random() * Math.PI * 2;
      const c = COFFEE_COLORS[i % COFFEE_COLORS.length];
      coffeeColor[i * 3] = c[0] / 255;
      coffeeColor[i * 3 + 1] = c[1] / 255;
      coffeeColor[i * 3 + 2] = c[2] / 255;
    }
    coffeeGeo.setAttribute('position', new THREE.BufferAttribute(coffeeAttrArray, 3));
    coffeeGeo.setAttribute('color', new THREE.BufferAttribute(coffeeColor, 3));
    const dotTexture = createRadialTexture('rgba(255,255,255,1)', 'rgba(255,255,255,0)');
    const coffeeMat = new THREE.PointsMaterial({
      size: 0.18,
      map: dotTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
    });
    const coffeePoints = new THREE.Points(coffeeGeo, coffeeMat);
    scene.add(coffeePoints);

    // incense: dense, fine, rising-smoke field — a wider, slower-breathing cloud
    // than a tight orbiting ring, so it reads as wisps of smoke rather than a band.
    const smokeCount = 1600;
    const smokeGeo = new THREE.BufferGeometry();
    const smokeAttrArray = new Float32Array(smokeCount * 3);
    const smokeAngle = new Float32Array(smokeCount);
    const smokeRadius = new Float32Array(smokeCount);
    const smokeY = new Float32Array(smokeCount);
    const smokeSpeed = new Float32Array(smokeCount);
    const smokePhase = new Float32Array(smokeCount);
    for (let i = 0; i < smokeCount; i++) {
      smokeAngle[i] = Math.random() * Math.PI * 2;
      smokeRadius[i] = 1 + Math.random() * 7;
      smokeY[i] = (Math.random() - 0.5) * 10;
      smokeSpeed[i] = 0.01 + Math.random() * 0.03;
      smokePhase[i] = Math.random() * Math.PI * 2;
    }
    smokeGeo.setAttribute('position', new THREE.BufferAttribute(smokeAttrArray, 3));
    const smokeTexture = createRadialTexture('rgba(253,245,230,1)', 'rgba(253,245,230,0)');
    const smokeMat = new THREE.PointsMaterial({
      size: 0.06,
      map: smokeTexture,
      color: '#FDF5E6',
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
    });
    const smokePoints = new THREE.Points(smokeGeo, smokeMat);
    scene.add(smokePoints);

    const clock = new THREE.Clock();
    let rafId = 0;

    function animate() {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFrac = scrollMax > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollMax)) : 0;

      const coffeePosAttr = coffeeGeo.getAttribute('position') as THREE.BufferAttribute;
      for (let i = 0; i < coffeeCount; i++) {
        const bx = coffeeBase[i * 3];
        const by = coffeeBase[i * 3 + 1];
        const bz = coffeeBase[i * 3 + 2];
        const jx = Math.sin(t * 0.15 + coffeePhase[i]) * 0.3;
        const jy = Math.cos(t * 0.12 + coffeePhase[i]) * 0.3;
        coffeePosAttr.setXYZ(i, bx + jx, by + jy, bz);
      }
      coffeePosAttr.needsUpdate = true;

      // Slow breathing radius + gentle vertical drift instead of a fixed orbit —
      // continuous/periodic (no reset pop) but reads as loose rising smoke.
      const smokePosAttr = smokeGeo.getAttribute('position') as THREE.BufferAttribute;
      for (let i = 0; i < smokeCount; i++) {
        const angle = smokeAngle[i] + t * smokeSpeed[i];
        const radius = smokeRadius[i] * (1 + 0.35 * Math.sin(t * 0.05 + smokePhase[i]));
        const y = smokeY[i] + Math.sin(t * 0.08 + smokePhase[i]) * 1.4;
        smokePosAttr.setXYZ(i, Math.cos(angle) * radius, y, Math.sin(angle) * radius - 4);
      }
      smokePosAttr.needsUpdate = true;

      camera.position.y = 0.2 - scrollFrac * 0.6;
      coffeePoints.rotation.y = t * 0.01 + scrollFrac * 0.4;
      smokePoints.rotation.y = -t * 0.012 - scrollFrac * 0.3;

      renderer.render(scene, camera);
    }
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      coffeeGeo.dispose();
      smokeGeo.dispose();
      coffeeMat.dispose();
      smokeMat.dispose();
      dotTexture.dispose();
      smokeTexture.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10"
      // Forces this fixed WebGL canvas onto its own compositor layer explicitly —
      // without it, some Chromium builds fail to repaint the (very tall) sticky
      // scroll-story content behind it correctly while scrolling, leaving blank
      // white frames. See canvas's own style below for the same hint.
      style={{ transform: 'translateZ(0)', willChange: 'transform' }}
      aria-hidden="true"
    />
  );
}
