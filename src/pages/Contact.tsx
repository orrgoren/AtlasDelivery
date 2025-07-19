"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock, Send, CheckCircle, Truck } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast("הודעה נשלחה בהצלחה!", {
                    description: "אחד מנציגנו יחזור אליכם בהקדם.",
                });
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    service: "",
                    message: "",
                });
            } else {
                throw new Error("Failed to send email");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            toast("שגיאה בשליחת ההודעה", {
                description: "אנא נסו שוב או צרו איתנו קשר טלפונית.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const contactInfo = [
        {
            icon: Phone,
            title: "טלפון",
            info: "055-2626-640",
            description: "זמינים 24/7 לכל שאלה ובקשה",
            action: "התקשרו עכשיו",
        },
        {
            icon: Mail,
            title: "אימייל",
            info: "atlas.delivery03@gmail.com",
            description: "נענה תוך 24 שעות מקסימום",
            action: "שלחו מייל",
        },
    ];

    const workingHours = [
        { day: "ימי א'-ה'", hours: "07:00 - 23:00" },
        { day: "יום ו'", hours: "07:00 - 14:00" },
        { day: "שבת", hours: "מצאת השבת - 23:00" },
        { day: "שירות לקוחות", hours: "24/7" },
    ];

    const services = [
        "משלוח רגיל",
        "איסוף מהיר",
        "משלוח באותו יום",
        "שליחויות עסקיות",
        "משלוח מיוחד",
        "אחר",
    ];

    function handleClick(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void {
        window.open("https://wa.me/972552626640", "_blank");
    }

    function handlePhoneClick(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void {
        window.open("tel:+972552626640", "_blank");
    }

    function handleEmailClick(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void {
        window.open("mailto:atlas.delivery03@gmail.com", "_blank");
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="atlas-section bg-gradient-to-r from-primary to-secondary text-white">
                <div className="atlas-container text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        צרו קשר
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                        אנחנו כאן כדי לענות על כל השאלות שלכם ולעזור לכם עם
                        שירותי המשלוח
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="atlas-section">
                <div className="atlas-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                שלחו לנו הודעה
                            </h2>
                            <p className="text-gray-600 mb-8">
                                מלאו את הטופס ונחזור אליכם תוך 24 שעות
                            </p>

                            <Card className="atlas-card">
                                <CardContent className="p-8">
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">
                                                    שם מלא *
                                                </label>
                                                <Input
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="השם המלא שלכם"
                                                    required
                                                    className="text-right"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">
                                                    טלפון *
                                                </label>
                                                <Input
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="050-1234567"
                                                    required
                                                    className="text-right"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2">
                                                    אימייל *
                                                </label>
                                                <Input
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="your@email.com"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2">
                                                    חברה/עסק
                                                </label>
                                                <Input
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    placeholder="שם החברה (אופציונלי)"
                                                    className="text-right"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                סוג השירות
                                            </label>
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full p-3 border border-input rounded-md bg-background text-right"
                                            >
                                                <option value="">
                                                    בחרו סוג שירות
                                                </option>
                                                {services.map(
                                                    (service, index) => (
                                                        <option
                                                            key={index}
                                                            value={service}
                                                        >
                                                            {service}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                הודעה *
                                            </label>
                                            <Textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="ספרו לנו על הצרכים שלכם..."
                                                rows={5}
                                                required
                                                className="text-right"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full btn-hero text-lg py-3 flex items-center justify-center space-x-reverse space-x-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                                    <span>שולח...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="h-5 w-5" />
                                                    <span>שלחו הודעה</span>
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                פרטי התקשרות
                            </h2>
                            <p className="text-gray-600 mb-8">
                                כמה דרכים ליצור קשר - בחרו את הנוחה לכם ביותר
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((contact, index) => (
                                    <Card key={index} className="atlas-card">
                                        <CardContent className="p-6">
                                            <div className="flex items-start space-x-reverse space-x-4">
                                                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                                                    <contact.icon className="h-6 w-6 text-primary" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-semibold mb-1">
                                                        {contact.title}
                                                    </h3>
                                                    <p className="text-primary font-medium mb-2">
                                                        {contact.info}
                                                    </p>
                                                    <p className="text-gray-600 text-sm mb-3">
                                                        {contact.description}
                                                    </p>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="text-primary"
                                                        onClick={
                                                            contact.title ===
                                                            "טלפון"
                                                                ? handlePhoneClick
                                                                : handleEmailClick
                                                        }
                                                    >
                                                        {contact.action}
                                                    </Button>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Working Hours */}
            <section className="atlas-section bg-gray-50">
                <div className="atlas-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                שעות פעילות
                            </h2>
                            <p className="text-gray-600 mb-8">
                                אנחנו זמינים עבורכם ברוב שעות היום. שירות לקוחות
                                זמין 24/7
                            </p>

                            <div className="space-y-4">
                                {workingHours.map((schedule, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center p-4 bg-white rounded-lg border"
                                    >
                                        <span className="font-medium">
                                            {schedule.day}
                                        </span>
                                        <span className="text-primary font-semibold">
                                            {schedule.hours}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Card className="atlas-card">
                            <CardContent className="p-8 text-center">
                                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                                    <Clock className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">
                                    זמן תגובה מהיר
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    אנחנו מתחייבים לחזור אליכם תוך 24 שעות מרגע
                                    פנייתכם
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-center space-x-reverse space-x-2">
                                        <CheckCircle className="h-5 w-5 text-success" />
                                        <span>מענה טלפוני מיידי</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-reverse space-x-2">
                                        <CheckCircle className="h-5 w-5 text-success" />
                                        <span>מענה למייל תוך 24 שעות</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-reverse space-x-2">
                                        <CheckCircle className="h-5 w-5 text-success" />
                                        <span>תמיכה טכנית זמינה</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Emergency Contact */}
            <section className="atlas-section bg-gradient-to-r from-primary to-secondary text-white">
                <div className="atlas-container text-center">
                    <div className="max-w-2xl mx-auto">
                        <Truck className="h-16 w-16 mx-auto mb-6" />
                        <h2 className="text-3xl font-bold mb-4">
                            צריכים משלוח דחוף?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            בשירות החירום שלנו זמינים 24/7 למשלוחים דחופים
                            ומיוחדים
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
                                onClick={handlePhoneClick}
                            >
                                חיוג בטלפון
                            </Button>
                            <Button
                                variant="outline"
                                className="border-white text-primary hover:bg-white hover:text-primary text-lg px-8 py-4"
                                onClick={handleClick}
                            >
                                למענה מהיר בWhatsApp
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
