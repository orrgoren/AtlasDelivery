import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";

const Blog = () => {
    const blogPosts = [
        {
            title: "טיפים למשלוח חבילות בטוח ויעיל",
            excerpt: "גלו את הסודות לאריזה נכונה ומשלוח בטוח של החבילות שלכם",
            content:
                "אריזה נכונה היא המפתח למשלוח מוצלח. חשוב להשתמש בחומרי אריזה איכותיים, לרפד היטב פריטים שבירים, ולוודא שהחבילה סגורה בצורה יציבה. כמו כן, חשוב לרשום בבירור את פרטי השולח והנמען.",
            date: "15 דצמבר 2024",
            author: "צוות אטלס שילוח והפצה",
            category: "טיפים",
            readTime: "5 דקות קריאה",
        },
        {
            title: "איך לבחור את שירות המשלוח המתאים לעסק שלכם",
            excerpt: "מדריך מקיף לבחירת שירות משלוח שיתאים לצרכים העסקיים שלכם",
            content:
                "כל עסק צריך שירות משלוח שונה. עסקים קטנים עשויים להתאים להם משלוחים רגילים, בעוד שעסקים גדולים יותר זקוקים לפתרונות מותאמים אישית עם מחירים מיוחדים ושירותי מעקב מתקדמים.",
            date: "10 דצמבר 2024",
            author: "אבי רוזן",
            category: "עסקים",
            readTime: "7 דקות קריאה",
        },
        {
            title: "חדשות מעולם הלוגיסטיקה - דצמבר 2024",
            excerpt: "עדכונים על טכנולוגיות חדשות ושיפורים בתחום המשלוחים",
            content:
                "החודש הוספנו מערכת מעקב בזמן אמת משופרת ושירותי משלוח חדשים לאזורי הפריפריה. כמו כן, אנחנו גאים להכריז על שותפות חדשה עם חברות טכנולוגיה מובילות לשיפור השירות.",
            date: "5 דצמבר 2024",
            author: "דני לוי",
            category: "חדשות",
            readTime: "4 דקות קריאה",
        },
        {
            title: "מדריך משלוחים לחגי תשרי",
            excerpt: "הכנו עבורכם מדריך מיוחד לתכנון משלוחים בתקופת החגים",
            content:
                "תקופת החגים מצריכה תכנון מיוחד. אנחנו ממליצים להזמין משלוחים מראש, לבדוק זמני פעילות מיוחדים בחגים, ולהקפיד על אריזה מתאימה למתנות ומוצרי מזון מיוחדים.",
            date: "20 ספטמבר 2024",
            author: "שרה כהן",
            category: "מדריכים",
            readTime: "6 דקות קריאה",
        },
        {
            title: "יתרונות המעקב בזמן אמת למשלוחים",
            excerpt:
                "למה מעקב בזמן אמת הוא כל כך חשוב ואיך הוא משפר את חוויית הלקוח",
            content:
                "מעקב בזמן אמת מאפשר ללקוחות לדעת בדיוק איפה נמצאת החבילה שלהם, מתי היא תגיע, ולתכנן בהתאם. זה מפחית חרדה ומשפר את חוויית הלקוח משמעותית.",
            date: "15 אוגוסט 2024",
            author: "צוות אטלס שילוח והפצה",
            category: "טכנולוגיה",
            readTime: "5 דקות קריאה",
        },
        {
            title: "כיצד להתכונן למשלוח חבילות גדולות ומיוחדות",
            excerpt: "טיפים מעשיים למשלוח פריטים גדולים, כבדים או עדינים",
            content:
                "משלוח פריטים מיוחדים דורש הכנה מיוחדת. חשוב לתאם מראש את סוג הרכב הנדרש, להכין אריזה מתאימה, ולוודא שהנמען מוכן לקבלת משלוח מיוחד. אנחנו מציעים שירותי משלוח מותאמים לכל סוג של פריט.",
            date: "10 יולי 2024",
            author: "אבי רוזן",
            category: "משלוחים מיוחדים",
            readTime: "8 דקות קריאה",
        },
    ];

    const categories = [
        "הכל",
        "טיפים",
        "עסקים",
        "חדשות",
        "מדריכים",
        "טכנולוגיה",
        "משלוחים מיוחדים",
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="atlas-section bg-gradient-to-r from-primary to-secondary text-white">
                <div className="atlas-container text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        בלוג אטלס שילוח והפצה
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                        מאמרים, טיפים וחדשות מעולם המשלוחים והלוגיסטיקה
                    </p>
                </div>
            </section>

            {/* Categories Filter */}
            <section className="py-8 bg-gray-50 border-b">
                <div className="atlas-container">
                    <div className="flex flex-wrap justify-center gap-2">
                        {categories.map((category, index) => (
                            <Button
                                key={index}
                                variant={index === 0 ? "default" : "outline"}
                                className={index === 0 ? "btn-hero" : ""}
                                size="sm"
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section className="atlas-section">
                <div className="atlas-container">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-2">מאמר מומלץ</h2>
                        <p className="text-gray-600">
                            המאמר הפופולרי ביותר השבוע
                        </p>
                    </div>

                    <Card className="atlas-card mb-12">
                        <CardContent className="p-8 md:p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="flex items-center space-x-reverse space-x-4 mb-4">
                                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                                            {blogPosts[0].category}
                                        </span>
                                        <span className="text-gray-500 text-sm">
                                            {blogPosts[0].readTime}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">
                                        {blogPosts[0].title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {blogPosts[0].content.substring(0, 200)}
                                        ...
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-reverse space-x-4 text-sm text-gray-500">
                                            <div className="flex items-center space-x-reverse space-x-1">
                                                <User className="h-4 w-4" />
                                                <span>
                                                    {blogPosts[0].author}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-reverse space-x-1">
                                                <Calendar className="h-4 w-4" />
                                                <span>{blogPosts[0].date}</span>
                                            </div>
                                        </div>
                                        <Button className="btn-hero flex items-center space-x-reverse space-x-2">
                                            <span>קרא עוד</span>
                                            <ArrowLeft className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
                                    <Tag className="h-16 w-16 text-primary mx-auto mb-4" />
                                    <h4 className="text-lg font-semibold">
                                        מאמר מומלץ
                                    </h4>
                                    <p className="text-gray-600">
                                        הכי פופולרי השבוע
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="atlas-section bg-gray-50">
                <div className="atlas-container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            מאמרים נוספים
                        </h2>
                        <p className="text-xl text-gray-600">
                            כל המאמרים שלנו במקום אחד
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.slice(1).map((post, index) => (
                            <Card
                                key={index}
                                className="atlas-card h-full flex flex-col"
                            >
                                <CardContent className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center space-x-reverse space-x-4 mb-4">
                                        <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">
                                            {post.category}
                                        </span>
                                        <span className="text-gray-500 text-sm">
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t">
                                        <div className="flex items-center space-x-reverse space-x-4 text-sm text-gray-500">
                                            <div className="flex items-center space-x-reverse space-x-1">
                                                <User className="h-3 w-3" />
                                                <span>{post.author}</span>
                                            </div>
                                            <div className="flex items-center space-x-reverse space-x-1">
                                                <Calendar className="h-3 w-3" />
                                                <span>{post.date}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <Button className="w-full mt-4 btn-hero flex items-center justify-center space-x-reverse space-x-2">
                                        <span>קרא עוד</span>
                                        <ArrowLeft className="h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <Button variant="outline" size="lg">
                            טען עוד מאמרים
                        </Button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="atlas-section">
                <div className="atlas-container">
                    <Card className="atlas-card bg-gradient-to-r from-primary to-secondary text-white">
                        <CardContent className="p-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">
                                הישארו מעודכנים
                            </h2>
                            <p className="text-lg opacity-90 mb-6">
                                הירשמו לניוזלטר שלנו וקבלו מאמרים חדשים וטיפים
                                ישירות למייל
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="כתובת המייל שלכם"
                                    className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                                />
                                <Button className="bg-white text-primary hover:bg-gray-100">
                                    הירשמו
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default Blog;
