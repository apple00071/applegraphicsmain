import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center px-4">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-4xl">404</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Page Not Found
                </h1>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all"
                >
                    <Home className="w-5 h-5" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
