import Customers from "@/pages/Customers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "לקוחות ממליצים - אטלס שילוח והפצה",
  description: "קראו חוות דעת של לקוחות מרוצים שבחרו באטלס שילוח והפצה. ראו למה מאות לקוחות בוחרים בנו.",
};

export default function CustomersPage() {
  return <Customers />;
}