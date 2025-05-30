import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import { useIsMobile } from "./IsMobile";

const slides = [
  {
    title: "Painless Wisdom Tooth Extraction in Faisalabad",
    text: "Get your wisdom tooth removed safely with zero pain and fast recovery. Trusted by 1,000+ patients.",
    image: "/public/assets/images/b2-min.png",
    mobileImage: "/public/assets/images/mobile1.jpg",
  },
  {
    title: "Braces & Aligners for Perfect Smile",
    text: "Affordable orthodontic treatment in Faisalabad with clear aligners and metal braces. Monthly plans available.",
    image: "/public/assets/images/b2-min.png",
    mobileImage: "/public/assets/images/mobile1.jpg",
  },
  {
    title: "Root Canal Treatment with Zero Pain",
    text: "Save your natural teeth with our advanced root canal procedures. Quick, painless, and highly rated.",
    image: "/public/assets/images/b2-min.png",
    mobileImage: "/public/assets/images/mobile1.jpg",
  },
];


const schemaData = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Doctor Teeth Dental Clinic",
  "image": slides[0].image,
  "url": "https://doctorteethclinic.com",
  "telephone": "+92-321-6739504",
  "priceRange": "PKR 500 - 5000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ajmal Center, near Nadra Executive Office, opp. Gourmet Bakers, Batala Colony",
    "addressLocality": "Faisalabad",
    "addressRegion": "Punjab",
    "postalCode": "38000",
    "addressCountry": "PK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 31.401600145559254,
    "longitude": 73.10403581167874
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "00:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "00:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "21"
  },
  "sameAs": [
    "https://www.facebook.com/doctorteethdental",
    "https://www.instagram.com/doctorteethclinic/"
  ],
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://wa.me/923216739504",
      "inLanguage": "en",
      "actionPlatform": ["https://schema.org/DesktopWebPlatform", "https://schema.org/MobileWebPlatform"]
    },
    "result": {
      "@type": "Reservation",
      "name": "Dental Appointment"
    }
  }
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
const isMobile = useIsMobile();

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <AnimatePresence mode="wait">
        <motion.img
             key={(isMobile ? slides[current].mobileImage : slides[current].image) + current}
    src={isMobile ? slides[current].mobileImage : slides[current].image}
          alt={slides[current].title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </AnimatePresence>
<div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

      <div className="absolute inset-0  z-10"></div>

      <div className="absolute left-10 top-1/2 transform -translate-y-1/2 z-20 max-w-xl space-y-4">
        <motion.h1
          key={slides[current].title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-sans md:text-5xl font-bold"
        >
          {slides[current].title}
        </motion.h1>
        <p className="text-lg md:text-xl">{slides[current].text}</p>
        <div className="flex space-x-4">
          <a
            href="https://wa.me/923216739504"
            className="bg-green-500 mt-5 hover:bg-green-600 text-white px-6 py-2 rounded-xl text-lg"
          >
            Book on WhatsApp
          </a>
         
        </div>
      </div>

      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30">
        <button
          onClick={prevSlide}
          className="bg-white/60 hover:bg-white text-black p-2 rounded-full shadow"
        >
          ◀
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30">
        <button
          onClick={nextSlide}
          className="bg-white/60 hover:bg-white text-black p-2 rounded-full shadow"
        >
          ▶
        </button>
      </div>
    </section>
  );
}