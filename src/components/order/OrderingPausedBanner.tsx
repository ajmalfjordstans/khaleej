'use client';
import { PauseCircle } from 'lucide-react';
import { ORDERING_PAUSED_MESSAGE } from '@/lib/order/config';
import { useOrderingPaused } from '@/lib/order/useOrderingPaused';

export default function OrderingPausedBanner() {
  if (!useOrderingPaused()) return null;
  return (
    <div role="status" className="mb-5 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-900">
      <PauseCircle size={20} className="mt-0.5 flex-shrink-0" />
      <div className="text-sm">
        <p className="font-bold">Online ordering is paused</p>
        <p>{ORDERING_PAUSED_MESSAGE} You can still browse the menu.</p>
      </div>
    </div>
  );
}
