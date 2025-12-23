import { GOOGLE_MAPS_EMBED_URL } from "@/lib/constants";

interface GoogleMapProps {
    className?: string;
    height?: string;
}

export default function GoogleMap({ className = "", height = "400px" }: GoogleMapProps) {
    return (
        <div className={`relative rounded-2xl overflow-hidden shadow-lg ${className}`} style={{ height }}>
            <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Applegraphics Location - Chirala, Andhra Pradesh"
            />
        </div>
    );
}
