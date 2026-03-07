import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Sunrise, Zap } from "lucide-react";
import Link from "next/link";

import heroImage from "@/assets/hero-image.png";

const Hero = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImage.src})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/70 to-transparent"></div>
            </div>

            <div className="relative atlas-container z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="text-white space-y-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            <span className="block">משלוחים</span>
                            <span className="gradient-text">מקצועיים</span>
                            <span className="block">מדלת לדלת</span>
                        </h1>

                        <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
                            עם אטלס שילוח והפצה תקבלו שירות משלוחים מהיר, אמין
                            ומקצועי. אנחנו כאן כדי להעביר את החבילות שלכם בבטחה
                            ובמהירות הרבה ביותר.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <Link href="/order">
                                <Button className="btn-hero text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center space-x-reverse space-x-2">
                                    <span>הזמן משלוח עכשיו</span>
                                    <ArrowLeft className="h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button
                                    variant="outline"
                                    className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border-white text-white hover:bg-white hover:text-gray-900"
                                >
                                    השירותים שאנו מציעים
                                </Button>
                            </Link>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6 pt-3 sm:pt-8">
                            <div className="flex items-center space-x-reverse space-x-2">
                                <Zap className="h-4 w-4 text-secondary" />
                                <div>
                                    <h3 className="font-semibold text-sm">
                                        משלוח מהיר
                                    </h3>
                                    <p className="text-sm text-gray-300">
                                        עד 3 שעות
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-reverse space-x-2">
                                <Clock className="h-4 w-4 text-secondary" />
                                <div>
                                    <h3 className="font-semibold text-sm">
                                        משלוח מהיום להיום
                                    </h3>
                                    <p className="text-sm text-gray-300">
                                        משלוח באותו יום
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-reverse space-x-2">
                                <Sunrise className="h-4 w-4 text-secondary" />
                                <div>
                                    <h3 className="font-semibold text-sm">
                                        משלוח מהיום למחר
                                    </h3>
                                    <p className="text-sm text-gray-300">
                                        עד יום עסקים אחד
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-reverse space-x-2">
                                <Calendar className="h-4 w-4 text-secondary" />
                                <div>
                                    <h3 className="font-semibold text-sm">
                                        משלוח עד 3 ימים
                                    </h3>
                                    <p className="text-sm text-gray-300">
                                        עפ״י דרישת הלקוח
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
