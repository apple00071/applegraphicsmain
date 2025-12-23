"use client";

import { useState } from "react";
import { GALLERY_CATEGORIES } from "@/lib/constants";

interface GalleryWork {
    id: number;
    title: string;
    category: string;
    image: string;
}

interface WorkGalleryProps {
    works: GalleryWork[];
    showFilters?: boolean;
    maxItems?: number;
}

const categoryColors: Record<string, string> = {
    "flex-banners": "border-orange-100 bg-orange-50/30",
    "visiting-cards": "border-blue-100 bg-blue-50/30",
    "sign-boards": "border-green-100 bg-green-50/30",
    "branding": "border-purple-100 bg-purple-50/30",
};

export default function WorkGallery({ works, showFilters = true, maxItems }: WorkGalleryProps) {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredWorks = activeCategory === "all"
        ? works
        : works.filter(work => work.category === activeCategory);

    const displayWorks = maxItems ? filteredWorks.slice(0, maxItems) : filteredWorks;

    return (
        <div>
            {/* Filters - Clean Minimal Style */}
            {showFilters && (
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {GALLERY_CATEGORIES.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${activeCategory === category.id
                                    ? "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/20"
                                    : "bg-white text-gray-500 border-gray-200 hover:border-orange-300 hover:text-orange-500"
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {displayWorks.map((work) => {
                    const styleClass = categoryColors[work.category] || "border-gray-100 bg-gray-50/50";

                    return (
                        <div
                            key={work.id}
                            className={`group relative overflow-hidden rounded-3xl border ${styleClass} aspect-square p-8 transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer`}
                        >
                            {/* Fake Image Placeholder with Brand Logo */}
                            <div className="absolute inset-4 bg-white rounded-2xl flex items-center justify-center border border-dashed border-gray-200 group-hover:border-orange-200 transition-colors">
                                <div className="text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mx-auto mb-4 font-black text-3xl group-hover:bg-orange-500 group-hover:text-white transition-all">
                                        A
                                    </div>
                                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Image Coming Soon</p>
                                </div>
                            </div>

                            {/* Overlay with Title */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                <p className="text-gray-900 font-bold text-sm text-center truncate">{work.title}</p>
                                <div className="flex justify-center mt-1">
                                    <span className="text-[10px] font-black text-orange-500 uppercase tracking-widest">{work.category.replace('-', ' ')}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
