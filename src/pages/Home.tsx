import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
    Truck,
    Clock,
    Shield,
    MapPin,
    Zap,
    Users,
    Star,
    CheckCircle,
    ArrowLeft,
} from "lucide-react";

const Home = () => {
    const services = [
        {
            icon: Zap,
            title: "זמני איסוף ומסירה מהירים",
            description: "מסירה תוך 3 שעות מרגע ההזמנה",
        },
        {
            icon: Clock,
            title: "משלוח באותו יום",
            description: "הגעה ליעד באותו יום עסקים",
        },
        {
            icon: Truck,
            title: "שליחויות לעסקים",
            description: "פתרונות משלוח מותאמים לעסקים",
        },
        {
            icon: MapPin,
            title: "אימות מסירה ב-SMS",
            description: "עדכונים שוטפים על מיקום החבילה",
        },
    ];

    const advantages = [
        {
            icon: Shield,
            title: "אמינות מלאה",
            description: "טיפול זהיר בכל חבילה",
        },
        {
            icon: Zap,
            title: "מהירות שירות",
            description: "זמני אספקה קצרים ועמידה בלוחות זמנים",
        },
        {
            icon: Users,
            title: "שירות לקוחות מעולה",
            description: "זמינות 24/7 ומענה מקצועי",
        },
    ];

    const testimonials = [
        {
            name: "תומר שושן",
            position: 'מנכ"ל',
            company: "פרסום תמיר",
            text: "השירות של אטלס שילוח והפצה מצוין! תמיד בזמן ותמיד מקצועי. הם השותפים המושלמים לעסק שלנו. מאז שאנחנו עובדים איתם, הלקוחות שלנו מרוצים יותר מהמשלוחים ואנחנו יכולים להתרכז בעסק.",
            rating: 5,
            type: "business",
        },
        {
            name: "מיכל כהן",
            position: "מפיקת אירועים",
            company: "מיכל כהן הפקות",
            text: "מאז שאנחנו עובדים עם אטלס שילוח והפצה, הלקוחות שלנו מרוצים יותר מהמשלוחים. שירות יוצא מן הכלל! הם מספקים פתרונות מותאמים אישית שעוזרים לנו לגדול.",
            rating: 5,
            type: "business",
        },
        {
            name: "ירין עוקשי",
            position: "בעלים",
            company: "מרכז החשמל - ראש העין",
            text: "אמינות ומהירות - בדיוק מה שאנחנו צריכים למסמכים חשובים. ממליץ בחום! אטלס שילוח והפצה הם הכתובת הראשונה שלנו לכל משלוח חשוב.",
            rating: 5,
            type: "business",
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <Hero />

            {/* Services Section */}
            <section className="atlas-section bg-gray-50">
                <div className="atlas-container">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                            השירותים שלנו
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                            מגוון שירותי משלוח מותאמים לכל צורך - מאיסוף מהיר
                            ועד משלוח עסקי מקצועי
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {services.map((service, index) => (
                            <Card
                                key={index}
                                className="atlas-card text-center"
                            >
                                <CardContent className="p-6">
                                    <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                                    <h3 className="text-xl font-semibold mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-6 sm:mt-8">
                        <Link href="/services">
                            <Button className="btn-hero px-6 py-3 sm:px-8 sm:py-4">
                                צפה בכל השירותים
                                <ArrowLeft className="mr-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="atlas-section">
                <div className="atlas-container">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                            למה לבחור באטלס שילוח והפצה?
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                            אנחנו מתחייבים לספק שירות משלוחים ברמה הגבוהה ביותר
                            עם תשומת לב לכל פרט
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                        {advantages.map((advantage, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <advantage.icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    {advantage.title}
                                </h3>
                                <p className="text-gray-600">
                                    {advantage.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="atlas-section bg-gray-50">
                <div className="atlas-container">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                            מה אומרים הלקוחות שלנו
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 px-4">
                            חוות דעת של לקוחות מרוצים שבחרו באטלס שילוח והפצה
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="atlas-card">
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4">
                                        {[...Array(testimonial.rating)].map(
                                            (_, i) => (
                                                <Star
                                                    key={i}
                                                    className="h-5 w-5 text-yellow-400 fill-current"
                                                />
                                            )
                                        )}
                                    </div>
                                    <p className="text-gray-600 mb-4 italic">
                                        &ldquo;{testimonial.text}&rdquo;
                                    </p>
                                    <div>
                                        <h4 className="font-semibold">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-gray-500">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link href="/customers">
                            <Button className="btn-hero">
                                עוד חוות דעת לקוחות
                                <ArrowLeft className="mr-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="atlas-section bg-gradient-to-r from-primary to-secondary text-white">
                <div className="atlas-container text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        מוכנים להתחיל?
                    </h2>
                    <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 px-4">
                        צרו קשר עכשיו וקבלו הצעת מחיר מותאמת אישית לצרכים שלכם
                    </p>
                    <div className="flex flex-row sm:flex-row gap-3 sm:gap-4 justify-center">
                        <Link href="/contact">
                            <Button
                                variant="outline"
                                className="bg-white text-primary hover:bg-gray-100 hover:text-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                            >
                                הזמנת משלוח
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button className="bg-white text-primary hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 flex items-center space-x-reverse space-x-2">
                                <span>צרו קשר</span>
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
