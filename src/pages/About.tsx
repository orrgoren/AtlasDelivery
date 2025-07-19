import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Truck } from "lucide-react";
import aboutImage from "@/assets/about-image.png";

const About = () => {
    const values = [
        {
            icon: Target,
            title: "המשימה שלנו",
            description:
                "לספק שירותי משלוח מהירים ואמינים שמתאימים לצרכים הייחודיים של כל לקוח, תוך שמירה על איכות שירות גבוהה ומחירים תחרותיים.",
        },
        {
            icon: Award,
            title: "החזון שלנו",
            description:
                "להיות חברת המשלוחים המובילה בישראל, הידועה באמינותה, במהירותה ובחדשנותה הטכנולוגית.",
        },
        {
            icon: Users,
            title: "הערכים שלנו",
            description:
                "אמינות, מקצועיות, שירות לקוחות מעולה, חדשנות טכנולוגית ואחריות סביבתית - אלו הערכים המנחים אותנו בכל פעילותנו.",
        },
    ];

    const stats = [
        { number: "10,000+", label: "חבילות נמסרו בחודש האחרון" },
        { number: "500+", label: "לקוחות מרוצים" },
        { number: "99.8%", label: "אחוז הצלחה במשלוחים" },
        { number: "24/7", label: "שירות לקוחות זמין" },
    ];

    const team = [
        {
            name: "אבי רוזן",
            position: 'מנכ"ל ומייסד',
            description: "בעל ניסיון של 15 שנה בתחום הלוגיסטיקה והמשלוחים",
        },
        {
            name: "שרה כהן",
            position: "מנהלת התפעול",
            description: "מומחית בייעול תהליכים ושיפור שירות הלקוחות",
        },
        {
            name: "דני לוי",
            position: "מנהל הטכנולוגיה",
            description: "מוביל את הפיתוח הטכנולוגי ומערכות המעקב המתקדמות",
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[75vh] flex items-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${aboutImage.src})` }}
                >
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative atlas-container z-10 text-white text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        אודות אטלס שילוח והפצה
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        החברה המובילה בישראל לשירותי משלוח מדלת לדלת
                    </p>
                </div>
            </section>

            {/* Company Story */}
            <section className="atlas-section">
                <div className="atlas-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                הסיפור שלנו
                            </h2>
                            <div className="space-y-4 text-lg text-gray-600">
                                <p>
                                    חברת אטלס שילוח והפצה מתמחה במתן פתרונות
                                    שילוח למגזר העסקי והפרטי. החל מחבילות קטנות
                                    ועד הובלות של משטחים גדולים, מעטפות, מסירות
                                    משפטיות, בלדרות, משלוחי תרופות ועוד. לאטלס
                                    שילוח והפצה צי שליחים רחב בפריסה ארצית,
                                    הנותן שירות על קטנועים, רכבים פרטיים, רכבים
                                    מסחריים ומשאיות.
                                </p>
                                <p>
                                    כ-8 שנות נסיון בתחום ומוניטין של עשרות
                                    לקוחות, חברתנו נחשבת לבין המובילות בתחום.
                                    לאטלס שילוח והפצה יש מגוון רחב של סוגי
                                    משלוחים: משלוחים מהרגע להרגע, מהיום למחר,
                                    משלוחים ללא תלות בזמן, כל אלה ומספר גורמים
                                    נוספים הם אלה שיגרמו לנו לתת לכם את המחיר
                                    והשירות הכי טובים שקיימים היום בתחום.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                {stats.map((stat, index) => (
                                    <Card
                                        key={index}
                                        className="atlas-card text-center"
                                    >
                                        <CardContent className="p-6">
                                            <div className="text-2xl font-bold text-primary mb-2">
                                                {stat.number}
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                {stat.label}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="atlas-section bg-gray-50">
                <div className="atlas-container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            המשימה, החזון והערכים שלנו
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            אלו הערכים והעקרונות המנחים אותנו בכל פעילותנו
                            היומיומית
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <Card
                                key={index}
                                className="atlas-card text-center"
                            >
                                <CardContent className="p-8">
                                    <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                        <value.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {value.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
