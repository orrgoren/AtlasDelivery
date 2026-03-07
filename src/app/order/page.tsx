import Order from "@/pages/Order";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "הזמנת משלוח - אטלס שילוח והפצה",
    description: "הזמן משלוח בקלות ובמהירות. בחר גודל חבילה, סוג רכב ודחיפות וקבל הצעת מחיר מיידית.",
};

export default function OrderPage() {
    return <Order />;
}
