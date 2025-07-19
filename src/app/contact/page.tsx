import Contact from "@/pages/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "צרו קשר - אטלס שילוח והפצה",
  description: "צרו איתנו קשר לקבלת הצעת מחיר או לכל שאלה. אנו כאן לעזור לכם עם כל צרכי המשלוח שלכם.",
};

export default function ContactPage() {
  return <Contact />;
}