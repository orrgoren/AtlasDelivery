import Link from "next/link";
import Image from "next/image";
import { Truck, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import atlasLogo from "@/assets/atlas-logo.png";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="atlas-container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link
                            href="/"
                            className="flex items-center space-x-reverse space-x-2"
                        >
                            <Image
                                src={atlasLogo}
                                width={64}
                                height={64}
                                alt="atlas logo"
                            />
                            <span className="text-2xl font-bold">
                                אטלס שילוח והפצה
                            </span>
                        </Link>
                        <p className="text-gray-300 leading-relaxed">
                            שירותי משלוחים מקצועיים ומהירים מדלת לדלת. אמינות,
                            מהירות ושירות מעולה - זה מה שמבדיל אותנו.
                        </p>
                        <div className="flex space-x-reverse space-x-4">
                            <a
                                href="https://www.instagram.com/atlas.deli"
                                className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 group"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-12" />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=61575583020885"
                                className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300 group"
                                aria-label="Facebook"
                                target="_blank"
                            >
                                <Facebook className="w-12" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">
                            קישורים מהירים
                        </h3>
                        <div className="space-y-2">
                            <Link
                                href="/"
                                className="block text-gray-300 hover:text-primary transition-colors"
                            >
                                דף הבית
                            </Link>
                            <Link
                                href="/about"
                                className="block text-gray-300 hover:text-primary transition-colors"
                            >
                                אודות
                            </Link>
                            <Link
                                href="/contact"
                                className="block text-gray-300 hover:text-primary transition-colors"
                            >
                                הזמנת משלוח
                            </Link>
                            <Link
                                href="/services"
                                className="block text-gray-300 hover:text-primary transition-colors"
                            >
                                השירותים שלנו
                            </Link>
                            <Link
                                href="/faq"
                                className="block text-gray-300 hover:text-primary transition-colors"
                            >
                                שאלות נפוצות
                            </Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">השירותים שלנו</h3>
                        <div className="space-y-2">
                            <p className="text-gray-300">איסוף מהיר</p>
                            <p className="text-gray-300">משלוח באותו יום</p>
                            <p className="text-gray-300">שליחויות לעסקים</p>
                            <p className="text-gray-300">
                                עדכון SMS לאישור מסירה
                            </p>
                            <p className="text-gray-300">הפצת מתנות ומארזים</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">פרטי התקשרות</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-reverse space-x-2">
                                <Phone className="h-4 w-4 text-primary" />
                                <span className="text-gray-300">
                                    055-2626-640
                                </span>
                            </div>
                            <div className="flex items-center space-x-reverse space-x-2">
                                <Mail className="h-4 w-4 text-primary" />
                                <span className="text-gray-300">
                                    atlas.delivery03@gmail.com
                                </span>
                            </div>
                            <div className="flex items-center space-x-reverse space-x-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span className="text-gray-300">
                                    ראשון לציון, ישראל
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2025 אטלס שילוח והפצה. כל הזכויות שמורות.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
