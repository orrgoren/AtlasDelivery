import Blog from "@/pages/Blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "בלוג אטלס שילוח והפצה - מאמרים וטיפים",
  description: "מאמרים, טיפים וחדשות מעולם המשלוחים והלוגיסטיקה. כל מה שרציתם לדעת על משלוחים ושילוח.",
};

export default function BlogPage() {
  return <Blog />;
}