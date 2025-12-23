import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyButtons from "@/components/StickyButtons";
import { BUSINESS_NAME, BUSINESS_DESCRIPTION, SEO_KEYWORDS } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://applegraphics.in"),
  title: {
    default: `${BUSINESS_NAME} - Printing & Graphic Design Shop in Chirala`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description: BUSINESS_DESCRIPTION,
  keywords: SEO_KEYWORDS,
  authors: [{ name: BUSINESS_NAME }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://applegraphics.in",
    siteName: BUSINESS_NAME,
    title: `${BUSINESS_NAME} - Printing & Graphic Design Shop in Chirala`,
    description: BUSINESS_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: BUSINESS_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_NAME} - Printing & Graphic Design Shop in Chirala`,
    description: BUSINESS_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

// LocalBusiness Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://applegraphics.in",
  name: BUSINESS_NAME,
  description: BUSINESS_DESCRIPTION,
  url: "https://applegraphics.in",
  telephone: "+918247494622",
  email: "contact@applegraphics.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Main Road, Near Bus Stand",
    addressLocality: "Chirala",
    addressRegion: "Andhra Pradesh",
    postalCode: "523155",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "15.83",
    longitude: "80.33",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  priceRange: "₹₹",
  image: "https://applegraphics.in/og-image.jpg",
  sameAs: [
    "https://facebook.com/applegraphicschirala",
    "https://instagram.com/applegraphicschirala",
  ],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "15.83",
      longitude: "80.33",
    },
    geoRadius: "50000",
  },
  serviceType: [
    "Flex Printing",
    "Vinyl Printing",
    "Banner Printing",
    "Visiting Card Printing",
    "Signboard Making",
    "Logo Design",
    "Graphic Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col">
        {/* Schema.org markup for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
