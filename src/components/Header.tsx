"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const NAV_ANCHORS = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Our Works", href: "#gallery" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white sticky top-0 z-[100] border-b border-gray-100 py-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo - Matching Reference */}
                    <Link href="#home" className="flex items-center group">
                        <span className="text-[#f97316] font-extrabold text-2xl tracking-tighter">Apple</span>
                        <span className="text-gray-900 font-extrabold text-2xl tracking-tighter">graphics</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {NAV_ANCHORS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 rounded-lg text-sm font-bold text-gray-800 hover:text-[#f97316] transition-all"
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Action CTA - Matching Reference */}
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 nav-btn-orange"
                        >
                            WhatsApp Us
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl overflow-hidden animate-fade-in">
                        <nav className="flex flex-col p-4 gap-1">
                            {NAV_ANCHORS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="px-4 py-3 rounded-lg text-base font-semibold text-gray-800 hover:bg-orange-50"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 bg-orange-500 text-black px-6 py-4 rounded-lg text-center font-bold"
                            >
                                WhatsApp Us
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
