import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

const FAQ = () => {
    const faqCategories = [
        {
            title: "הזמנה ותשלום",
            questions: [
                {
                    question: "איך אני מזמין משלוח?",
                    answer: "ניתן להזמין משלוח בכמה דרכים: דרך האתר שלנו או בטלפון 055-2626-640. פשוט מלאו את פרטי השולח, הנמען וסוג השירות הרצוי.",
                },
                {
                    question: "אילו אמצעי תשלום אתם מקבלים?",
                    answer: "אנחנו מקבלים תשלום במזומן, כרטיסי אשראי, העברה בנקאית, צ'ק ותשלום דרך אפליקציות תשלום כגון: ביט, פייבוקס.",
                },
                {
                    question: "האם יש הנחות לעסקים?",
                    answer: "כן! אנחנו מציעים מחירים מיוחדים ותוכניות הנחה לעסקים עם נפח משלוחים גבוה. צרו קשר לקבלת הצעת מחיר מותאמת אישית.",
                },
                {
                    question: "מתי אני משלם על המשלוח?",
                    answer: "ניתן לשלם מראש בזמן ההזמנה, או במזומן לשליח בזמן האיסוף. לעסקים אנחנו מציעים גם תשלום חודשי.",
                },
            ],
        },
        {
            title: "זמנים ומסירה",
            questions: [
                {
                    question: "מה זמני המסירה שלכם?",
                    answer: "אנחנו פועלים בימי א'-ה' בין השעות 07:00-23:00, ביום ו' עד 14:00, ביום ש׳ מצאת השבת עד 23:00.",
                },
                {
                    question: "כמה זמן לוקח משלוח רגיל?",
                    answer: "משלוח רגיל לוקח 1-3 ימי עסקים, תלוי ביעד. למשלוחים דחופים אנחנו מציעים שירות באותו יום או איסוף מהיר ומסירה תוך 3 שעות.",
                },
                {
                    question: "מה קורה אם אני לא נמצא בבית בזמן המסירה?",
                    answer: "השליח ינסה להתקשר אליכם מראש. אם לא תהיו זמינים, נשאיר פתק וננסה שוב למחרת, או שנתאם זמן מסירה חדש.",
                },
            ],
        },
        {
            title: "ביטולים והחזרות",
            questions: [
                {
                    question: "האם אפשר לבטל משלוח לאחר ההזמנה?",
                    answer: "ניתן לבטל משלוח עד שעה לפני זמן האיסוף הקבוע ללא עלות. לאחר מכן יתכן שיחוייבו דמי ביטול.",
                },
                {
                    question: "האם אפשר לשנות כתובת מסירה אחרי ההזמנה?",
                    answer: "ניתן לשנות כתובת מסירה עד לרגע האיסוף. לאחר מכן, ישנה תוספת תשלום עבור שינוי יעד.",
                },
                {
                    question: "מה קורה אם הנמען מסרב לקבל את החבילה?",
                    answer: "נחזיר את החבילה לשולח ונגבה דמי משלוח חזרה. מומלץ לתאם מראש עם הנמען.",
                },
            ],
        },
    ];

    const contactMethods = [
        {
            icon: Phone,
            title: "צרו קשר טלפוני",
            description: "זמינים 24/7 לכל שאלה",
            contact: "055-2626-640",
            action: "התקשרו עכשיו",
        },
        {
            icon: Mail,
            title: "שלחו מייל",
            description: "נענה תוך 24 שעות",
            contact: "atlas.delivery03@gmail.com",
            action: "שלחו דוא׳׳ל",
        },
        {
            icon: MessageCircle,
            title: "הזמינו דרך האתר",
            description: "ביצוע הזמנה באופן מיידי",
            contact: "דרך האתר שלנו",
            action: "הזמנת משלוח",
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="atlas-section bg-gradient-to-r from-primary to-secondary text-white">
                <div className="atlas-container text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        שאלות נפוצות
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                        מצאו תשובות לשאלות הנפוצות ביותר על שירותי המשלוח שלנו
                    </p>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="atlas-section">
                <div className="atlas-container max-w-4xl mx-auto">
                    {faqCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 text-center">
                                {category.title}
                            </h2>

                            <Accordion
                                type="single"
                                collapsible
                                className="space-y-4"
                            >
                                {category.questions.map((faq, faqIndex) => (
                                    <AccordionItem
                                        key={faqIndex}
                                        value={`${categoryIndex}-${faqIndex}`}
                                        className="atlas-card border-none"
                                    >
                                        <AccordionTrigger className="text-right hover:no-underline p-6 pb-4 text-lg font-medium">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="px-6 pb-6 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    ))}
                </div>
            </section>

            {/* Still Have Questions */}
            <section className="atlas-section bg-gray-50">
                <div className="atlas-container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            עדיין יש לכם שאלות?
                        </h2>
                        <p className="text-xl text-gray-600">
                            הצוות שלנו כאן כדי לעזור לכם בכל דרך שתרצו
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contactMethods.map((method, index) => (
                            <Card
                                key={index}
                                className="atlas-card text-center"
                            >
                                <CardContent className="p-8">
                                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                        <method.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        {method.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {method.description}
                                    </p>
                                    <p className="text-primary font-medium mb-6">
                                        {method.contact}
                                    </p>
                                    <Link href="/contact">
                                        <Button className="w-full btn-hero">
                                            {method.action}
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Tips */}
            <section className="atlas-section">
                <div className="atlas-container">
                    <Card className="atlas-card bg-gradient-to-r from-primary to-secondary text-white">
                        <CardContent className="p-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">
                                טיפים למשלוח מוצלח
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                                <div>
                                    <h3 className="font-semibold mb-2">
                                        אריזה נכונה
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        ארזו היטב ברפידות כדי למנוע נזקים
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">
                                        פרטים מדויקים
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        ודאו שכל הפרטים נכונים ומעודכנים
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">
                                        זמינות לאיסוף
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        היו זמינים בזמן האיסוף הקבוע
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">
                                        תיאום מראש
                                    </h3>
                                    <p className="text-sm opacity-90">
                                        תאמו מראש עם הנמען את זמן המסירה
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
