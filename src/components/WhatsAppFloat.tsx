"use client";

import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const phoneNumber = "972552626640"; // Your phone number in international format (without + sign)
  const message = "שלום! אני מעוניין בשירותי משלוח של אטלס שילוח והפצה";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="fixed bottom-6 left-6 z-50 cursor-pointer group"
      onClick={handleWhatsAppClick}
    >
      <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 animate-pulse">
        <MessageCircle className="h-6 w-6" />
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
          שלח הודעה בוואטסאפ
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;