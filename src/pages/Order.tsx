"use client";

import { useState, useEffect, useRef } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Package,
    Bike,
    Car,
    Truck,
    Zap,
    Clock,
    Calendar,
    CalendarDays,
    CheckCircle,
    MapPin,
    ChevronLeft,
    ChevronRight,
    Loader2,
    Phone,
    X,
} from "lucide-react";

type PackageSize = "small" | "big";
type VehicleType = "motorcycle" | "car" | "van";
type UrgencyType = "sameday" | "express" | "tomorrow" | "threedays";

interface OrderState {
    packageSize: PackageSize | null;
    vehicleType: VehicleType | null;
    urgency: UrgencyType | null;
    pickupAddress: string;
    deliveryAddress: string;
}

interface ContactInfo {
    name: string;
    phone: string;
    comments: string;
}

const STEPS = ["גודל חבילה", "סוג רכב", "דחיפות", "כתובות", "סיכום"];

const VEHICLE_BASE: Record<VehicleType, number> = {
    motorcycle: 80,
    car: 120,
    van: 400,
};

const KM_RATE: Record<UrgencyType, number> = {
    express: 5.5,
    sameday: 4,
    tomorrow: 3.5,
    threedays: 2.5,
};

const packageSizeOptions = [
    {
        id: "small" as PackageSize,
        title: "קטן / בינוני",
        description: "עד 30×30×30 ס״מ, עד 5 ק״ג",
        subtitle: "מעטפות, קופסאות קטנות, מסמכים",
    },
    {
        id: "big" as PackageSize,
        title: "גדול",
        description: "עד 60×60×60 ס״מ, עד 20 ק״ג",
        subtitle: "קופסאות גדולות, מוצרי חשמל, ציוד",
    },
];

const vehicleOptions = [
    {
        id: "motorcycle" as VehicleType,
        icon: Bike,
        title: "קטנוע",
        description: "מהיר ביותר, מתאים לחבילות קטנות/בינוניות",
    },
    {
        id: "car" as VehicleType,
        icon: Car,
        title: "רכב",
        description: "מתאים לחבילות קטנות ובינוניות",
    },
    {
        id: "van" as VehicleType,
        icon: Truck,
        title: "מסחרי",
        description: "מתאים לכל הגדלים, כולל חבילות גדולות",
    },
];

const urgencyOptions = [
    {
        id: "sameday" as UrgencyType,
        icon: Zap,
        title: "באותו יום",
        description: "איסוף ומסירה עד 23:00 היום",
        badge: "הכי מהיר",
        badgeColor: "bg-green-100 text-green-700",
    },
    {
        id: "express" as UrgencyType,
        icon: Clock,
        title: "אקספרס / דחוף",
        description: "מסירה תוך 3 שעות מרגע האיסוף",
        badge: "מומלץ",
        badgeColor: "bg-primary/10 text-primary",
    },
    {
        id: "tomorrow" as UrgencyType,
        icon: Calendar,
        title: "מהיום למחר",
        description: "מסירה ביום העסקים הבא",
        badge: null,
        badgeColor: "",
    },
    {
        id: "threedays" as UrgencyType,
        icon: CalendarDays,
        title: "עד 3 ימי עסקים",
        description: "משלוח כלכלי תוך 1-3 ימי עסקים",
        badge: "חסכוני",
        badgeColor: "bg-blue-100 text-blue-700",
    },
];

const Order = () => {
    const [step, setStep] = useState(0);
    const [order, setOrder] = useState<OrderState>({
        packageSize: null,
        vehicleType: null,
        urgency: null,
        pickupAddress: "",
        deliveryAddress: "",
    });
    const [mapsLoaded, setMapsLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [distance, setDistance] = useState<number | null>(null);
    const [distanceError, setDistanceError] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [pickupContact, setPickupContact] = useState<ContactInfo>({ name: "", phone: "", comments: "" });
    const [deliveryContact, setDeliveryContact] = useState<ContactInfo>({ name: "", phone: "", comments: "" });

    const pickupInputRef = useRef<HTMLInputElement>(null);
    const deliveryInputRef = useRef<HTMLInputElement>(null);
    const pickupAutocomplete = useRef<google.maps.places.Autocomplete | null>(null);
    const deliveryAutocomplete = useRef<google.maps.places.Autocomplete | null>(null);
    const pickupPlaceId = useRef<string | null>(null);
    const deliveryPlaceId = useRef<string | null>(null);

    // Initialize autocomplete when on address step and Maps is loaded
    useEffect(() => {
        if (!mapsLoaded || step !== 3) return;

        const options: google.maps.places.AutocompleteOptions = {
            componentRestrictions: { country: "il" },
            fields: ["place_id", "formatted_address"],
            types: ["address"],
        };

        if (pickupInputRef.current && !pickupAutocomplete.current) {
            pickupAutocomplete.current = new google.maps.places.Autocomplete(
                pickupInputRef.current,
                options
            );
            pickupAutocomplete.current.addListener("place_changed", () => {
                const place = pickupAutocomplete.current!.getPlace();
                if (place.formatted_address) {
                    setOrder((o) => ({ ...o, pickupAddress: place.formatted_address! }));
                    pickupPlaceId.current = place.place_id ?? null;
                }
            });
        }

        if (deliveryInputRef.current && !deliveryAutocomplete.current) {
            deliveryAutocomplete.current = new google.maps.places.Autocomplete(
                deliveryInputRef.current,
                options
            );
            deliveryAutocomplete.current.addListener("place_changed", () => {
                const place = deliveryAutocomplete.current!.getPlace();
                if (place.formatted_address) {
                    setOrder((o) => ({ ...o, deliveryAddress: place.formatted_address! }));
                    deliveryPlaceId.current = place.place_id ?? null;
                }
            });
        }
    }, [mapsLoaded, step]);

    // Reset autocomplete refs when leaving address step
    useEffect(() => {
        if (step !== 3) {
            pickupAutocomplete.current = null;
            deliveryAutocomplete.current = null;
        }
    }, [step]);

    const getDistanceKm = async (): Promise<number | null> => {
        if (!pickupPlaceId.current || !deliveryPlaceId.current) return null;
        try {
            const service = new google.maps.DistanceMatrixService();
            const response = await service.getDistanceMatrix({
                origins: [{ placeId: pickupPlaceId.current }],
                destinations: [{ placeId: deliveryPlaceId.current }],
                travelMode: google.maps.TravelMode.DRIVING,
            });
            const element = response.rows[0].elements[0];
            if (element.status === google.maps.DistanceMatrixElementStatus.OK) {
                // Round to 1 decimal place
                return Math.round(element.distance.value / 100) / 10;
            }
            return null;
        } catch {
            return null;
        }
    };

    const canProceed = () => {
        switch (step) {
            case 0: return order.packageSize !== null;
            case 1: return order.vehicleType !== null;
            case 2: return order.urgency !== null;
            case 3: return order.pickupAddress.trim().length > 3 && order.deliveryAddress.trim().length > 3;
            default: return true;
        }
    };

    const handleNext = async () => {
        if (step === 3) {
            setLoading(true);
            setDistanceError(null);
            const km = await getDistanceKm();
            if (km !== null) {
                setDistance(km);
            } else {
                setDistanceError("לא ניתן לחשב מרחק. בחר כתובות מהרשימה או פנה אלינו לאישור מחיר ידני.");
                setDistance(null);
            }
            setLoading(false);
        }
        setStep((s) => s + 1);
    };

    const calculatePrice = () => {
        if (!order.vehicleType || !order.urgency) return 0;
        const base = VEHICLE_BASE[order.vehicleType];
        const rate = KM_RATE[order.urgency];
        return Math.round(base + (distance ?? 0) * rate);
    };

    const summaryRows = [
        {
            label: "גודל חבילה",
            value: order.packageSize === "small" ? "קטן / בינוני" : "גדול",
        },
        {
            label: "סוג רכב",
            value:
                order.vehicleType === "motorcycle"
                    ? "אופנוע"
                    : order.vehicleType === "car"
                    ? "רכב"
                    : "מסחרי",
        },
        {
            label: "דחיפות",
            value: urgencyOptions.find((u) => u.id === order.urgency)?.title ?? "",
        },
        { label: "כתובת איסוף", value: order.pickupAddress },
        { label: "כתובת מסירה", value: order.deliveryAddress },
    ];

    return (
        <>
            <Script
                src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&language=he&region=IL`}
                onLoad={() => setMapsLoaded(true)}
            />

            <div className="min-h-screen">
                {/* Hero */}
                <section className="atlas-section bg-gradient-to-r from-primary to-secondary text-white">
                    <div className="atlas-container text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">הזמנת משלוח</h1>
                        <p className="text-lg sm:text-xl opacity-90">מלאו את הפרטים ונדאג לשאר</p>
                    </div>
                </section>

                {/* Stepper + Form */}
                <section className="atlas-section bg-gray-50">
                    <div className="atlas-container max-w-3xl">
                        {/* Step indicator */}
                        <div className="mb-8 sm:mb-12">
                            <div className="flex items-center justify-between relative">
                                <div className="absolute top-4 right-0 left-0 h-0.5 bg-gray-200 z-0">
                                    <div
                                        className="h-full bg-primary transition-all duration-500"
                                        style={{ width: `${(step / (STEPS.length - 1)) * 100}%` }}
                                    />
                                </div>
                                {STEPS.map((stepName, i) => (
                                    <button
                                        key={i}
                                        onClick={() => i <= step && setStep(i)}
                                        disabled={i > step}
                                        className="flex flex-col items-center z-10 group disabled:cursor-default"
                                    >
                                        <div
                                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                                                i < step
                                                    ? "bg-primary text-white group-hover:scale-110"
                                                    : i === step
                                                    ? "bg-primary text-white ring-4 ring-primary/20"
                                                    : "bg-white border-2 border-gray-300 text-gray-400"
                                            }`}
                                        >
                                            {i < step ? <CheckCircle className="h-4 w-4" /> : i + 1}
                                        </div>
                                        <span
                                            className={`mt-2 text-xs hidden sm:block ${
                                                i === step
                                                    ? "text-primary font-semibold"
                                                    : i < step
                                                    ? "text-gray-500 group-hover:text-primary"
                                                    : "text-gray-400"
                                            }`}
                                        >
                                            {stepName}
                                        </span>
                                    </button>
                                ))}
                            </div>
                            <p className="text-center text-sm text-gray-500 mt-4 sm:hidden">
                                שלב {step + 1} מתוך {STEPS.length}: {STEPS[step]}
                            </p>
                        </div>

                        {/* Card */}
                        <Card className="atlas-card">
                            <CardContent className="p-6 sm:p-8">

                                {/* Step 0: Package Size */}
                                {step === 0 && (
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-bold mb-2">גודל החבילה</h2>
                                        <p className="text-gray-500 mb-6">בחר את גודל החבילה שברצונך לשלוח</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {packageSizeOptions.map((option) => (
                                                <button
                                                    key={option.id}
                                                    onClick={() =>
                                                        setOrder((o) => ({ ...o, packageSize: option.id }))
                                                    }
                                                    className={`text-right p-5 rounded-xl border-2 transition-all duration-200 ${
                                                        order.packageSize === option.id
                                                            ? "border-primary bg-primary/5"
                                                            : "border-gray-200 hover:border-primary/40 bg-white"
                                                    }`}
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div
                                                            className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                                                                order.packageSize === option.id
                                                                    ? "bg-primary/10"
                                                                    : "bg-gray-100"
                                                            }`}
                                                        >
                                                            <Package
                                                                className={`h-5 w-5 ${
                                                                    order.packageSize === option.id
                                                                        ? "text-primary"
                                                                        : "text-gray-500"
                                                                }`}
                                                            />
                                                        </div>
                                                        <div>
                                                            <h3 className="font-semibold text-lg">{option.title}</h3>
                                                            <p className="text-primary text-sm font-medium">
                                                                {option.description}
                                                            </p>
                                                            <p className="text-gray-500 text-sm mt-1">
                                                                {option.subtitle}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Step 1: Vehicle Type */}
                                {step === 1 && (
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-bold mb-2">סוג רכב</h2>
                                        <p className="text-gray-500 mb-6">בחר את סוג הרכב המתאים למשלוח שלך</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                            {vehicleOptions.map((option) => (
                                                <button
                                                    key={option.id}
                                                    onClick={() =>
                                                        setOrder((o) => ({ ...o, vehicleType: option.id }))
                                                    }
                                                    className={`text-center p-5 rounded-xl border-2 transition-all duration-200 ${
                                                        order.vehicleType === option.id
                                                            ? "border-primary bg-primary/5"
                                                            : "border-gray-200 hover:border-primary/40 bg-white"
                                                    }`}
                                                >
                                                    <div
                                                        className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 ${
                                                            order.vehicleType === option.id
                                                                ? "bg-primary/10"
                                                                : "bg-gray-100"
                                                        }`}
                                                    >
                                                        <option.icon
                                                            className={`h-7 w-7 ${
                                                                order.vehicleType === option.id
                                                                    ? "text-primary"
                                                                    : "text-gray-500"
                                                            }`}
                                                        />
                                                    </div>
                                                    <h3 className="font-semibold text-lg mb-1">{option.title}</h3>
                                                    <p className="text-gray-500 text-sm">{option.description}</p>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Urgency */}
                                {step === 2 && (
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-bold mb-2">דחיפות המשלוח</h2>
                                        <p className="text-gray-500 mb-6">בחר את מועד המסירה הרצוי</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {urgencyOptions.map((option) => (
                                                <button
                                                    key={option.id}
                                                    onClick={() =>
                                                        setOrder((o) => ({ ...o, urgency: option.id }))
                                                    }
                                                    className={`text-right p-5 rounded-xl border-2 transition-all duration-200 ${
                                                        order.urgency === option.id
                                                            ? "border-primary bg-primary/5"
                                                            : "border-gray-200 hover:border-primary/40 bg-white"
                                                    }`}
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <div
                                                            className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                                                                order.urgency === option.id
                                                                    ? "bg-primary/10"
                                                                    : "bg-gray-100"
                                                            }`}
                                                        >
                                                            <option.icon
                                                                className={`h-5 w-5 ${
                                                                    order.urgency === option.id
                                                                        ? "text-primary"
                                                                        : "text-gray-500"
                                                                }`}
                                                            />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-2 flex-wrap">
                                                                <h3 className="font-semibold text-lg">
                                                                    {option.title}
                                                                </h3>
                                                                {option.badge && (
                                                                    <span
                                                                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${option.badgeColor}`}
                                                                    >
                                                                        {option.badge}
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <p className="text-gray-500 text-sm mt-1">
                                                                {option.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Addresses (pickup + delivery on same page) */}
                                {step === 3 && (
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-bold mb-2">כתובות איסוף ומסירה</h2>
                                        <p className="text-gray-500 mb-6">הכנס את שתי הכתובות ובחר מהרשימה לחישוב מרחק מדויק</p>
                                        <div className="space-y-5">
                                            {/* Pickup */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    כתובת איסוף
                                                </label>
                                                <div className="relative">
                                                    <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary pointer-events-none z-10" />
                                                    <Input
                                                        ref={pickupInputRef}
                                                        className="pr-10 h-12 text-base"
                                                        placeholder="למשל: רחוב הרצל 15, תל אביב"
                                                        value={order.pickupAddress}
                                                        onChange={(e) => {
                                                            setOrder((o) => ({ ...o, pickupAddress: e.target.value }));
                                                            // If user types manually, clear saved place_id
                                                            pickupPlaceId.current = null;
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Divider with arrow */}
                                            <div className="flex items-center gap-3 text-gray-300">
                                                <div className="flex-1 h-px bg-gray-200" />
                                                <div className="bg-primary/10 rounded-full p-2">
                                                    <ChevronLeft className="h-4 w-4 text-primary" />
                                                </div>
                                                <div className="flex-1 h-px bg-gray-200" />
                                            </div>

                                            {/* Delivery */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    כתובת מסירה
                                                </label>
                                                <div className="relative">
                                                    <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none z-10" />
                                                    <Input
                                                        ref={deliveryInputRef}
                                                        className="pr-10 h-12 text-base"
                                                        placeholder="למשל: שדרות בן גוריון 8, חיפה"
                                                        value={order.deliveryAddress}
                                                        onChange={(e) => {
                                                            setOrder((o) => ({ ...o, deliveryAddress: e.target.value }));
                                                            deliveryPlaceId.current = null;
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            {!mapsLoaded && (
                                                <p className="text-xs text-gray-400 flex items-center gap-1">
                                                    <Loader2 className="h-3 w-3 animate-spin" />
                                                    טוען השלמה אוטומטית...
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Step 4: Summary */}
                                {step === 4 && (
                                    <div>
                                        <h2 className="text-xl sm:text-2xl font-bold mb-6">סיכום הזמנה</h2>

                                        <div className="space-y-1 mb-6 rounded-xl border border-gray-100 overflow-hidden">
                                            {summaryRows.map(({ label, value }) => (
                                                <div
                                                    key={label}
                                                    className="flex justify-between items-start px-4 py-3 odd:bg-gray-50"
                                                >
                                                    <span className="text-gray-500 text-sm">{label}</span>
                                                    <span className="font-medium text-right max-w-[58%] text-sm">
                                                        {value}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {distanceError && (
                                            <p className="text-amber-600 text-sm mb-4 bg-amber-50 px-4 py-3 rounded-lg">
                                                {distanceError}
                                            </p>
                                        )}

                                        {/* Price box */}
                                        <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white mb-6">
                                            {distance !== null && (
                                                <div className="flex justify-between items-center mb-3 opacity-90">
                                                    <span>מרחק נסיעה</span>
                                                    <span className="font-semibold">{distance} ק״מ</span>
                                                </div>
                                            )}
                                            <div className="flex justify-between items-center">
                                                <span className="text-lg opacity-90">מחיר משוער</span>
                                                <span className="text-3xl font-bold">₪{calculatePrice()}</span>
                                            </div>
                                            <p className="text-xs opacity-70 mt-3">
                                                * המחיר הסופי ייקבע בעת אישור ההזמנה עם נציג
                                            </p>
                                        </div>

                                        <Button
                                            className="btn-hero w-full text-base flex items-center justify-center gap-2"
                                            onClick={() => setShowModal(true)}
                                        >
                                            <Phone className="h-4 w-4" />
                                            אשר הזמנה ופנה אלינו
                                        </Button>
                                    </div>
                                )}

                                {/* Navigation */}
                                <div
                                    className={`flex mt-8 pt-6 border-t border-gray-100 ${
                                        step === 0 ? "justify-end" : "justify-between"
                                    }`}
                                >
                                    {step > 0 && (
                                        <Button
                                            variant="outline"
                                            onClick={() => setStep((s) => s - 1)}
                                            className="flex items-center gap-2"
                                        >
                                            <ChevronRight className="h-4 w-4" />
                                            הקודם
                                        </Button>
                                    )}
                                    {step < STEPS.length - 1 && (
                                        <Button
                                            className="btn-hero flex items-center gap-2"
                                            disabled={!canProceed() || loading}
                                            onClick={handleNext}
                                        >
                                            {loading ? (
                                                <>
                                                    <Loader2 className="h-4 w-4 animate-spin" />
                                                    מחשב מרחק...
                                                </>
                                            ) : (
                                                <>
                                                    הבא
                                                    <ChevronLeft className="h-4 w-4" />
                                                </>
                                            )}
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </div>

            {/* Contact Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setShowModal(false)}
                    />

                    {/* Modal */}
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
                        {/* Header */}
                        <div className="sticky top-0 bg-white rounded-t-2xl border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
                            <h2 className="text-lg font-bold">פרטי יצירת קשר</h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Order Summary */}
                            <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-4 text-white">
                                <p className="text-xs opacity-70 mb-3 font-medium uppercase tracking-wide">סיכום הזמנה</p>
                                <div className="grid grid-cols-2 gap-y-1.5 text-sm">
                                    <span className="opacity-80">גודל חבילה</span>
                                    <span className="font-medium text-left">
                                        {order.packageSize === "small" ? "קטן / בינוני" : "גדול"}
                                    </span>
                                    <span className="opacity-80">סוג רכב</span>
                                    <span className="font-medium text-left">
                                        {order.vehicleType === "motorcycle" ? "קטנוע" : order.vehicleType === "car" ? "רכב" : "מסחרי"}
                                    </span>
                                    <span className="opacity-80">דחיפות</span>
                                    <span className="font-medium text-left">
                                        {urgencyOptions.find((u) => u.id === order.urgency)?.title}
                                    </span>
                                    {distance !== null && (
                                        <>
                                            <span className="opacity-80">מרחק</span>
                                            <span className="font-medium text-left">{distance} ק״מ</span>
                                        </>
                                    )}
                                </div>
                                <div className="mt-3 pt-3 border-t border-white/20 flex justify-between items-center">
                                    <span className="opacity-80 text-sm">מחיר משוער</span>
                                    <span className="text-2xl font-bold">₪{calculatePrice()}</span>
                                </div>
                            </div>

                            {/* Pickup Contact */}
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="bg-primary/10 rounded-full p-1.5">
                                        <MapPin className="h-4 w-4 text-primary" />
                                    </div>
                                    <h3 className="font-semibold">פרטי איסוף</h3>
                                </div>
                                <p className="text-xs text-gray-400 mb-3">{order.pickupAddress}</p>
                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">שם מלא *</label>
                                        <Input
                                            placeholder="ישראל ישראלי"
                                            value={pickupContact.name}
                                            onChange={(e) => setPickupContact((c) => ({ ...c, name: e.target.value }))}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">טלפון *</label>
                                        <Input
                                            placeholder="050-0000000"
                                            type="tel"
                                            value={pickupContact.phone}
                                            onChange={(e) => setPickupContact((c) => ({ ...c, phone: e.target.value }))}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            הערות <span className="text-gray-400 font-normal">(קומה, דירה, כניסה וכו׳)</span>
                                        </label>
                                        <Textarea
                                            placeholder="למשל: קומה 3, דירה 12, כניסה ב׳"
                                            className="min-h-[72px] resize-none"
                                            value={pickupContact.comments}
                                            onChange={(e) => setPickupContact((c) => ({ ...c, comments: e.target.value }))}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-100" />

                            {/* Delivery Contact */}
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="bg-gray-100 rounded-full p-1.5">
                                        <MapPin className="h-4 w-4 text-gray-500" />
                                    </div>
                                    <h3 className="font-semibold">פרטי מסירה</h3>
                                </div>
                                <p className="text-xs text-gray-400 mb-3">{order.deliveryAddress}</p>
                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">שם מלא *</label>
                                        <Input
                                            placeholder="ישראל ישראלי"
                                            value={deliveryContact.name}
                                            onChange={(e) => setDeliveryContact((c) => ({ ...c, name: e.target.value }))}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">טלפון *</label>
                                        <Input
                                            placeholder="050-0000000"
                                            type="tel"
                                            value={deliveryContact.phone}
                                            onChange={(e) => setDeliveryContact((c) => ({ ...c, phone: e.target.value }))}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            הערות <span className="text-gray-400 font-normal">(קומה, דירה, כניסה וכו׳)</span>
                                        </label>
                                        <Textarea
                                            placeholder="למשל: קומה 1, כניסה א׳, צלצל פעמיים"
                                            className="min-h-[72px] resize-none"
                                            value={deliveryContact.comments}
                                            onChange={(e) => setDeliveryContact((c) => ({ ...c, comments: e.target.value }))}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Send to WhatsApp */}
                            <Button
                                className="btn-hero w-full text-base flex items-center justify-center gap-2"
                                disabled={
                                    !pickupContact.name.trim() ||
                                    !pickupContact.phone.trim() ||
                                    !deliveryContact.name.trim() ||
                                    !deliveryContact.phone.trim()
                                }
                                onClick={() => {
                                    const vehicleLabel =
                                        order.vehicleType === "motorcycle" ? "קטנוע" : order.vehicleType === "car" ? "רכב" : "מסחרי";
                                    const sizeLabel = order.packageSize === "small" ? "קטן / בינוני" : "גדול";
                                    const urgencyLabel = urgencyOptions.find((u) => u.id === order.urgency)?.title ?? "";
                                    const price = calculatePrice();
                                    const distanceText = distance !== null ? `${distance} ק״מ` : "לא זמין";

                                    const message = [
                                        "*הזמנת משלוח חדשה - אטלס שילוח והפצה*",
                                        "",
                                        "*פרטי המשלוח*",
                                        `גודל חבילה: ${sizeLabel}`,
                                        `סוג רכב: ${vehicleLabel}`,
                                        `דחיפות: ${urgencyLabel}`,
                                        `מרחק: ${distanceText}`,
                                        `מחיר משוער: ${price} ש"ח`,
                                        "",
                                        "*פרטי איסוף*",
                                        `כתובת: ${order.pickupAddress}`,
                                        `שם: ${pickupContact.name}`,
                                        `טלפון: ${pickupContact.phone}`,
                                        ...(pickupContact.comments.trim()
                                            ? [`הערות: ${pickupContact.comments.trim()}`]
                                            : []),
                                        "",
                                        "*פרטי מסירה*",
                                        `כתובת: ${order.deliveryAddress}`,
                                        `שם: ${deliveryContact.name}`,
                                        `טלפון: ${deliveryContact.phone}`,
                                        ...(deliveryContact.comments.trim()
                                            ? [`הערות: ${deliveryContact.comments.trim()}`]
                                            : []),
                                        "",
                                        "_המחיר הסופי ייקבע בעת אישור ההזמנה עם נציג_",
                                    ].join("\n");

                                    const url = `https://wa.me/972552626640?text=${encodeURIComponent(message)}`;
                                    window.open(url, "_blank");
                                }}
                            >
                                <Phone className="h-4 w-4" />
                                שלח הזמנה בוואטסאפ
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Order;
