"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export default function ContactForm() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Redirect to WhatsApp
        window.open(WHATSAPP_URL, "_blank");
    };

    return (
        <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    required
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    required
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="I'd like to inquire about..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    required
                />
            </div>

            <button
                type="submit"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors w-full justify-center"
            >
                <MessageCircle className="w-5 h-5" />
                Send via WhatsApp
            </button>
        </form>
    );
}
