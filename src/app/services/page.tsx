import Services from "@/pages/Services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "השירותים שלנו - אטלס שילוח והפצה",
  description: "מגוון שירותי משלוח: איסוף מהיר, משלוח באותו יום, שליחויות לעסקים, מעקב בזמן אמת ועוד. גלו את כל השירותים שלנו.",
};

export default function ServicesPage() {
  return <Services />;
}