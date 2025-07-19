"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import atlasLogo from "@/assets/atlas-logo.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: "דף הבית", path: "/" },
        { name: "אודות", path: "/about" },
        { name: "השירותים שלנו", path: "/services" },
        { name: "שאלות נפוצות", path: "/faq" },
        { name: "לקוחות ממליצים", path: "/customers" },
    ];

    const isActivePath = (path: string) => pathname === path;

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50 border-b">
            <div className="atlas-container">
                <div className="flex justify-between items-center h-24">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center space-x-reverse space-x-2"
                    >
                        <Image
                            src={atlasLogo}
                            alt="אטלס שילוח והפצה"
                            className="h-24 w-auto"
                            height={96}
                            // width={auto} is not allowed, so set width to a reasonable value or use atlasLogo.width
                            width={atlasLogo.width}
                        />

                        <h2 className="text-2xl font-bold text-[#6189BD]">
                            אטלס שילוח והפצה
                        </h2>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-reverse space-x-12">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`text-md font-medium transition-colors hover:text-primary ${
                                    isActivePath(item.path)
                                        ? "text-primary border-b-2 border-primary pb-1"
                                        : "text-gray-600"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link href="/contact">
                            <Button className="btn-hero flex items-center space-x-reverse space-x-2">
                                <Phone className="h-4 w-4" />
                                <span className="font-md">צור קשר</span>
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden pb-4">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`text-sm font-medium transition-colors hover:text-primary ${
                                        isActivePath(item.path)
                                            ? "text-primary"
                                            : "text-gray-600"
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                            >
                                <Button className="btn-hero w-full flex items-center justify-center space-x-reverse space-x-2">
                                    <Phone className="h-4 w-4" />
                                    <span>צור קשר</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
