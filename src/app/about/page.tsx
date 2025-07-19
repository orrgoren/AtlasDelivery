import About from "@/pages/About";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "אודות אטלס שילוח והפצה - הסיפור שלנו",
  description: "חברת אטלס שילוח והפצה מתמחה במתן פתרונות שילוח למגזר העסקי והפרטי. למדו על הסיפור שלנו, הערכים והחזון שלנו.",
};

export default function AboutPage() {
  return <About />;
}