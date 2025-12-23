import { WHATSAPP_URL, PHONE_URL, BUSINESS_NAME } from "@/lib/constants";
import { MessageSquare, Phone } from "lucide-react";

export default function ComingSoonPage() {
    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center p-8 relative overflow-hidden text-center">
            {/* Decorative background branding */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.01]">
                <span className="text-[50vw] font-black select-none leading-none">A</span>
            </div>

            <div className="relative z-10 w-full max-w-4xl flex flex-col items-center animate-fade-in">

                {/* Logo Section */}
                <div className="mb-20 flex items-center justify-center">
                    <span className="text-[#f97316] font-bold text-3xl md:text-3xl tracking-tighter">Apple</span>
                    <span className="text-gray-900 font-bold text-3xl md:text-3xl tracking-tighter">graphics</span>
                </div>

                {/* Heading Section - Using font-bold (700) instead of extrabold (800) for a lighter feel */}
                <div className="mb-12 flex flex-col items-center w-full">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-8">
                        Coming <span className="text-[#f97316]">Soon</span>.
                    </h1>
                    {/* Centered Decorative Line */}
                    <div className="h-1 w-16 bg-[#f97316] rounded-full"></div>
                </div>

                {/* Description Section - Lighter weight (medium 500) and cleaner line height */}
                <p className="text-gray-500 text-lg md:text-lg mb-16 font-medium leading-relaxed max-w-xl mx-auto px-4">
                    We are currently crafting a more vibrant digital experience for you.
                    Our shop in Chirala remains open and ready to handle all your printing requirements.
                </p>

                {/* CTA Section */}
                <div className="w-full flex flex-col items-center">
                    <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.5em] mb-10">Instant Support</p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-5 w-full max-w-md">
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-orange w-full sm:px-10 py-4 text-base font-bold flex items-center justify-center rounded-xl"
                        >
                            <MessageSquare className="w-5 h-5 mr-3" />
                            WhatsApp
                        </a>
                        <a
                            href={PHONE_URL}
                            className="btn-white w-full sm:px-10 py-4 text-base font-bold flex items-center justify-center rounded-xl"
                        >
                            <Phone className="w-5 h-5 mr-3" />
                            Call Now
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer - Since 1997 */}
            <div className="absolute bottom-12 text-center w-full px-6">
                <p className="text-gray-400 text-[9px] font-bold uppercase tracking-[0.4em] flex flex-wrap justify-center items-center gap-x-3 gap-y-2">
                    <span className="text-gray-600">{BUSINESS_NAME}</span>
                    <span className="opacity-20 hidden sm:inline">•</span>
                    <span>Chirala, AP</span>
                    <span className="opacity-20 hidden sm:inline">•</span>
                    <span>Since 1997</span>
                </p>
            </div>
        </main>
    );
}
