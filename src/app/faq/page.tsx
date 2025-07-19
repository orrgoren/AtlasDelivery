import FAQ from "@/pages/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "שאלות נפוצות - אטלס שילוח והפצה",
  description: "מצאו תשובות לשאלות הנפוצות על שירותי המשלוח שלנו: מחירים, זמני משלוח, אזורי שירות ועוד.",
};

export default function FAQPage() {
  return <FAQ />;
}