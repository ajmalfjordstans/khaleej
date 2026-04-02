'use client'

import React from 'react'
import menuData from '@/app/menu/menu.json'
import { Typography, Card, CardBody } from "@material-tailwind/react"
const LeafIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-green-600 fill-green-600"
    >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a7 7 0 0 1-10 10Z" />
        <path d="M11 20a10 10 0 0 1-1-7" />
    </svg>
)

const MenuGrid = () => {
    return (
        <div className="bg-[#FFFAFA] py-12 container-px">
            <div className="container mx-auto">
                {menuData.menu.map((category, idx) => (
                    <div key={idx} className="mb-16 scroll-mt-20" id={category.category.toLowerCase().replace(/\s+/g, '-')}>
                        {/* Category Heading */}
                        <div className="text-center mb-8">
                            <h2 className="font-julius text-primary text-3xl md:text-5xl uppercase tracking-widest mb-2 font-bold">
                                {category.category}
                            </h2>
                            <div className="h-1 w-24 bg-secondary mx-auto mb-4"></div>
                            {category.notes && (
                                <p className="font-source italic text-primary/70 text-sm md:text-base">
                                    {category.notes}
                                </p>
                            )}
                            {category.pricing_notes && (
                                <div className="flex flex-wrap justify-center gap-4 mt-4 font-source font-semibold text-primary">
                                    {Object.entries(category.pricing_notes).map(([label, price], pIdx) => (
                                        <span key={pIdx} className="bg-secondary/20 px-3 py-1 rounded-full text-xs md:text-sm border border-secondary/50">
                                            {label}: {price}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Items Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            {category.items.map((item, iIdx) => (
                                <div key={iIdx} className="group border-b border-primary/5 pb-6 transition-premium hover:-translate-y-1 hover:shadow-premium p-4 rounded-lg hover:bg-white">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-julius font-bold text-lg md:text-xl text-primary flex items-center gap-2">
                                                {item.title}
                                                {item.is_vegetarian && (
                                                    <LeafIcon />
                                                )}
                                            </h3>
                                        </div>
                                        
                                        {/* Price display */}
                                        <div className="text-right">
                                            {item.price ? (
                                                <span className="font-source font-bold text-lg text-primary bg-secondary/30 px-2 py-0.5 rounded">
                                                    {item.price}
                                                </span>
                                            ) : item.pricing ? (
                                                <div className="flex flex-col items-end gap-1">
                                                    {Object.entries(item.pricing).map(([label, price], prIdx) => (
                                                        <span key={prIdx} className="text-sm font-source font-semibold text-primary/80">
                                                            <span className="text-xs uppercase opacity-70 mr-1">{label}:</span>
                                                            <span className="bg-secondary/20 px-1.5 py-0.5 rounded">{price}</span>
                                                        </span>
                                                    ))}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>

                                    {/* Description and metadata */}
                                    {item.description && (
                                        <p className="font-source text-gray-700 text-sm md:text-base leading-relaxed mb-2 opacity-90 group-hover:opacity-100">
                                            {item.description}
                                        </p>
                                    )}
                                    {item.quantity && (
                                        <p className="text-xs font-source font-bold text-primary/60 uppercase tracking-tighter">
                                            Serving: {item.quantity}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Legend */}
            <div className="mt-20 border-t border-primary/20 pt-8 flex justify-center items-center gap-4 text-sm font-source text-primary/70">
                <div className="flex items-center gap-1.5">
                    <LeafIcon />
                    <span>Vegetarian Option</span>
                </div>
            </div>
        </div>
    )
}

export default MenuGrid
