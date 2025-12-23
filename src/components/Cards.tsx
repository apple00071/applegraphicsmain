import {
    Printer,
    Sticker,
    SquareStack,
    CreditCard,
    Image,
    Palette,
    MapPin,
    Award,
    Clock,
    IndianRupee,
    Users,
    ThumbsUp,
    LucideIcon
} from "lucide-react";

// Map icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
    Printer,
    Sticker,
    SquareStack,
    CreditCard,
    Image,
    Palette,
    MapPin,
    Award,
    Clock,
    IndianRupee,
    Users,
    ThumbsUp
};

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    href?: string;
}

export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
    const IconComponent = iconMap[icon] || Printer;

    return (
        <div className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-yellow-200 group-hover:to-orange-200 transition-colors">
                <IconComponent className="w-7 h-7 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            {href && (
                <a
                    href={href}
                    className="text-orange-500 font-semibold hover:text-orange-600 inline-flex items-center gap-1"
                >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            )}
        </div>
    );
}

interface WhyChooseCardProps {
    title: string;
    description: string;
    icon: string;
}

export function WhyChooseCard({ title, description, icon }: WhyChooseCardProps) {
    const IconComponent = iconMap[icon] || Award;

    return (
        <div className="flex gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
}
