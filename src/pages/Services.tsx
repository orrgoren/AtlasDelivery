import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Zap,
    Clock,
    Truck,
    Package,
    Gift,
    Shield,
    MapPin,
    Phone,
    Briefcase,
    Home,
    CheckCircle,
    ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const Services = () => {
    const mainServices = [
        {
            icon: Zap,
            title: "משלוח מהיר",
            description: "מסירה תוך 3 שעות מרגע ההזמנה",
            features: [
                "מסירה תוך 3 שעות",
                "זמינות 7 ימים בשבוע",
                "עדכון SMS באישור מסירה",
                "אפשרות לתיאום מראש",
            ],
            price: "החל מ-90₪",
        },
        {
            icon: Clock,
            title: "משלוח מהיום להיום",
            description: "איסוף ומסירה באותו יום עסקים",
            features: [
                "משלוח עד 23:00 באותו יום",
                "זמינות בימי א'-ה'",
                "עדכון SMS באישור מסירה",
                "אפשרות לתיאום מראש",
            ],
            price: "החל מ-80₪",
        },
        {
            icon: Truck,
            title: "שליחויות לעסקים",
            description: "פתרונות משלוח מותאמים לעסקים",
            features: [
                "מחירים מיוחדים לעסקים",
                "חשבונית מס",
                "איסוף קבוע שבועי",
                "דוח משלוחים חודשי",
            ],
            price: "הצעת מחיר אישית",
        },
        {
            icon: Package,
            title: "משלוח רגיל",
            description: "משלוח תוך 1-3 ימי עסקים",
            features: [
                "משלוח תוך 1-3 ימים",
                "מחיר זול ביותר",
                "עדכון SMS באישור מסירה",
                "אפשרות לתיאום מראש",
            ],
            price: "החל מ-70₪",
        },
    ];

    const additionalServices = [
        {
            icon: Gift,
            title: "הפצת מתנות ומארזים",
            description: "הפצת מתנות ומארזים בהתאמה אישית",
        },
        {
            icon: Shield,
            title: "מסירות משפטיות",
            description: "מסירות משפטיות הכוללות אישור מסירה",
        },
        {
            icon: Phone,
            title: "שירות לקוחות 24/7",
            description: "זמינות מלאה בכל שעות היום",
        },
        {
            icon: Briefcase,
            title: "משלוחים עסקיים",
            description: "פתרונות מותאמים לעסקים גדולים",
        },
        {
            icon: Home,
            title: "משלוח עד הבית",
            description: "הגעה עד לדלת הבית או המשרד",
        },
        {
            icon: CheckCircle,
            title: "אישור מסירה",
            description: "אישור דיגיטלי ותמונה של המסירה",
        },
    ];

    const coverage = [
        "תל אביב והמרכז",
        "ירושלים והסביבה",
        "חיפה והצפון",
        "באר שבע והדרום",
        "אזור השרון",
        "הגליל העליון והתחתון",
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="atlas-section bg-gradient-to-r from-primary to-secondary text-white">
                <div className="atlas-container text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        השירותים שלנו
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                        מגוון רחב של שירותי משלוח מותאמים לכל צורך ותקציב
                    </p>
                </div>
            </section>

            {/* Main Services */}
            <section className="atlas-section">
                <div className="atlas-container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            השירותים המרכזיים שלנו
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            בחרו את השירות המתאים ביותר לצרכים שלכם
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {mainServices.map((service, index) => (
                            <Card key={index} className="atlas-card">
                                <CardContent className="p-8">
                                    <div className="flex items-start space-x-reverse space-x-4 mb-6">
                                        <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                                            <service.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold mb-2">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4">
                                                {service.description}
                                            </p>
                                            <div className="text-lg font-semibold text-primary mb-4">
                                                {service.price}
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="space-y-2 mb-6">
                                        {service.features.map(
                                            (feature, featureIndex) => (
                                                <li
                                                    key={featureIndex}
                                                    className="flex items-center space-x-reverse space-x-2"
                                                >
                                                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                                                    <span className="text-gray-600">
                                                        {feature}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>

                                    <Link href="/contact">
                                        <Button className="w-full btn-hero">
                                            הזמן עכשיו
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="atlas-section bg-gray-50">
                <div className="atlas-container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            שירותים נוספים
                        </h2>
                        <p className="text-xl text-gray-600">
                            שירותים משלימים לחוויה מושלמת
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {additionalServices.map((service, index) => (
                            <Card
                                key={index}
                                className="atlas-card text-center"
                            >
                                <CardContent className="p-6">
                                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                                        <service.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Coverage Area */}
            <section className="atlas-section">
                <div className="atlas-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                אזורי כיסוי
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                אנחנו מספקים שירותי משלוח בכל רחבי הארץ. האזורים
                                המרכזיים שלנו כוללים:
                            </p>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                {coverage.map((area, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-reverse space-x-2"
                                    >
                                        <CheckCircle className="h-5 w-5 text-success" />
                                        <span>{area}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-600">
                                לא מצאתם את האזור שלכם? צרו קשר ונבדוק אפשרות
                                משלוח מיוחדת.
                            </p>
                        </div>

                        <Card className="atlas-card">
                            <CardContent className="p-8 text-center">
                                <MapPin className="h-16 w-16 text-primary mx-auto mb-6" />
                                <h3 className="text-xl font-semibold mb-4">
                                    זמני פעילות
                                </h3>
                                <div className="space-y-2 text-gray-600">
                                    <p>
                                        <strong>ימי א&apos;-ה&apos;:</strong> 07:00 -
                                        23:00
                                    </p>
                                    <p>
                                        <strong>יום ו&apos;:</strong> 07:00 - 14:00
                                    </p>
                                    <p>
                                        <strong>יום ש&apos;:</strong> מצאת השבת -
                                        23:00
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="atlas-section bg-gradient-to-r from-primary to-secondary text-white">
                <div className="atlas-container text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        מוכנים להזמין משלוח?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        צרו קשר עכשיו וקבלו הצעת מחיר מותאמת אישית
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button
                                variant="outline"
                                className="bg-white text-primary hover:bg-gray-100 hover:text-primary text-lg px-8 py-4"
                            >
                                הזמנת משלוח
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 flex items-center space-x-reverse space-x-2">
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

export default Services;
