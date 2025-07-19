import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Star,
    Quote,
    Building2,
    Users,
    Award,
    TrendingUp,
    ArrowLeft,
} from "lucide-react";
import Link from "next/link";

const Customers = () => {
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
        {
            name: "ימית חזן",
            position: "בעלת עסק",
            company: "מתוקים בעיניים",
            text: "כעסק קטן, חשוב לי שירות אישי ומחירים הוגנים. אטלס שילוח והפצה נותנים בדיוק את זה. הם מבינים את הצרכים שלי ותמיד זמינים לעזור.",
            rating: 5,
            type: "small_business",
        },
        {
            name: "בן פלדבאו",
            position: "מנהל מסעדה",
            company: "ברנרד",
            text: "משתמש בשירותים שלהם כבר שנתיים. תמיד מקצועיים, אמינים ובזמן. המחירים הוגנים והשירות מעולה. בהחלט אמשיך להשתמש בשירותים שלהם.",
            rating: 5,
            type: "personal",
        },
        {
            name: "שרון לוזון",
            position: "בעלים",
            company: "Odel Boutique",
            text: "עובדים עם אטלס שילוח והפצה כבר 3 שנים. הם מטפלים בכל המשלוחים בין הסניפים שלנו בצורה מושלמת. שירות אמין, מהיר ומקצועי ברמה הגבוהה ביותר.",
            rating: 5,
            type: "business",
        },
    ];

    const companyLogos = [
        { name: "Urbanico", sector: "קמעונאות" },
        { name: "מתוקים בעיניים", sector: "מגשי אירוח" },
        { name: "Odel Boutique", sector: "ביגוד" },
        { name: "פרסום תמיר", sector: "מוצרי קידום מכירות" },
        { name: "מרכז החשמל", sector: "מוצרי חשמל" },
        { name: "מיכל כהן הפקות", sector: "חברת הפגות" },
        { name: "ברנרד", sector: "מסעדנות" },
        { name: "ארד הבונה", sector: "חברת בנייה" },
    ];

    const stats = [
        { icon: Users, number: "500+", label: "לקוחות מרוצים" },
        { icon: Building2, number: "150+", label: "עסקים שותפים" },
        { icon: Award, number: "99.8%", label: "שביעות רצון לקוחות" },
        { icon: TrendingUp, number: "95%", label: "לקוחות חוזרים" },
    ];

    const caseStudies = [
        {
            company: "חברת הטכנולוגיה ABC",
            challenge: "צורך במשלוחים מהירים של ציוד טכנולוגי יקר ועדין",
            solution: "פיתחנו פתרון משלוח מיוחד עם אריזה מותאמת וביטוח מורחב",
            result: "50% הפחתה בזמני משלוח ו-100% שביעות רצון לקוחות",
        },
        {
            company: "רשת חנויות דוידוב",
            challenge: "ניהול משלוחים בין 15 סניפים ברחבי הארץ",
            solution: "מערכת לוגיסטיקה מותאמת עם לוחות זמנים קבועים",
            result: "30% חיסכון בעלויות ושיפור משמעותי בזמינות מוצרים",
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="atlas-section bg-gradient-to-r from-primary to-secondary text-white">
                <div className="atlas-container text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        הלקוחות שלנו ממליצים
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                        מאות לקוחות מרוצים בוחרים באטלס שילוח והפצה כשותף
                        המשלוחים שלהם
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="atlas-section">
                <div className="atlas-container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="h-8 w-8 text-primary" />
                                </div>
                                <div className="text-3xl font-bold text-primary mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="atlas-section bg-gray-50">
                <div className="atlas-container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            מה אומרים הלקוחות שלנו
                        </h2>
                        <p className="text-xl text-gray-600">
                            חוות דעת אמיתיות מלקוחות מרוצים
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="atlas-card h-full">
                                <CardContent className="p-6 flex flex-col h-full">
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

                                    <Quote className="h-8 w-8 text-primary/20 mb-4" />

                                    <p className="text-gray-600 mb-6 flex-1 italic leading-relaxed">
                                        "{testimonial.text}"
                                    </p>

                                    <div className="border-t pt-4">
                                        <h4 className="font-semibold text-lg">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-primary font-medium">
                                            {testimonial.position}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Logos */}
            <section className="atlas-section">
                <div className="atlas-container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            עובדים עם המובילים בתחום
                        </h2>
                        <p className="text-xl text-gray-600">
                            חברות ועסקים מכל הגדלים בוחרים בנו
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {companyLogos.map((company, index) => (
                            <Card
                                key={index}
                                className="atlas-card text-center"
                            >
                                <CardContent className="p-6">
                                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                                        <Building2 className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-sm mb-1">
                                        {company.name}
                                    </h3>
                                    <p className="text-xs text-gray-500">
                                        {company.sector}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="atlas-section bg-gray-50">
                <div className="atlas-container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        הצטרפו למאות הלקוחות המרוצים שלנו
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        התחילו ליהנות משירות משלוחים מקצועי ואמין עוד היום
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
                            <Button
                                variant="outline"
                                className="bg-white text-primary hover:bg-gray-100 hover:text-primary text-lg px-8 py-4 flex items-center space-x-reverse space-x-2"
                            >
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

export default Customers;
