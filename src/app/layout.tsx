import type { Metadata, Viewport } from "next";
import { Providers } from "@/components/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "@/index.css";

export const metadata: Metadata = {
  title: "אטלס שילוח והפצה - שירותי משלוחים מקצועיים מדלת לדלת",
  description: "אטלס שילוח והפצה - שירותי משלוחים מהירים ואמינים בכל רחבי הארץ. איסוף מהיר, משלוח באותו יום ופתרונות עסקיים מותאמים אישית.",
  authors: [{ name: "אטלס שילוח והפצה" }],
  keywords: ["משלוחים", "שילוח", "הפצה", "איסוף", "משלוח מהיר", "ישראל"],
  openGraph: {
    title: "אטלס שילוח והפצה - שירותי משלוחים מקצועיים",
    description: "שירותי משלוחים מהירים ואמינים מדלת לדלת בכל רחבי הארץ",
    type: "website",
    locale: "he_IL",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <WhatsAppFloat />
          </div>
        </Providers>
      </body>
    </html>
  );
}