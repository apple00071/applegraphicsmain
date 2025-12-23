import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import {
    BUSINESS_NAME,
    NAV_LINKS,
    FULL_ADDRESS,
    PHONE_NUMBER,
    EMAIL,
    WORKING_HOURS,
    PHONE_URL,
} from "@/lib/constants";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-950 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">

                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-black text-xl">A</span>
                            </div>
                            <span className="font-bold text-2xl text-white">Applegraphics</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Chirala's leading destination for high-quality printing and creative design solutions. Established in 2014.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest text-xs">Quick Links</h3>
                        <ul className="space-y-4">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-1 group">
                                        {link.label}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all font-bold" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest text-xs">Our Services</h3>
                        <ul className="space-y-4">
                            <li><Link href="/services#flex" className="text-gray-400 hover:text-orange-500 transition-colors">Flex Printing</Link></li>
                            <li><Link href="/services#vinyl" className="text-gray-400 hover:text-orange-500 transition-colors">Vinyl Printing</Link></li>
                            <li><Link href="/services#branding" className="text-gray-400 hover:text-orange-500 transition-colors">Business Branding</Link></li>
                            <li><Link href="/services#cards" className="text-gray-400 hover:text-orange-500 transition-colors">Visiting Cards</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest text-xs">Reach Us</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                                <span className="text-gray-400 text-sm">{FULL_ADDRESS}</span>
                            </li>
                            <li className="flex gap-4">
                                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                                <a href={PHONE_URL} className="text-gray-400 text-sm hover:text-white transition-colors">{PHONE_NUMBER}</a>
                            </li>
                            <li className="flex gap-4">
                                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                                <span className="text-gray-400 text-sm">{EMAIL}</span>
                            </li>
                            <li className="flex gap-4">
                                <Clock className="w-5 h-5 text-orange-500 shrink-0" />
                                <span className="text-gray-400 text-sm">Mon-Sat: {WORKING_HOURS.weekdays}</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm font-medium">
                        © {currentYear} {BUSINESS_NAME}. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-gray-500 hover:text-white text-xs font-bold uppercase tracking-widest">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white text-xs font-bold uppercase tracking-widest">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
