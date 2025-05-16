import React from 'react';
import { Helmet } from 'react-helmet';

const HeroSection = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Doctor Teeth Dental Clinic",
    "image": "https://doctorteethclinic.com/hero.jpg",
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
      "longitude":  73.10403581167874
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "00:00",
        
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "00:00",
        
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
        "actionPlatform": [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Dental Appointment"
      }
    }
  };

  return (
<section className="relative pt-24 min-h-screen w-full flex items-center justify-center text-white overflow-hidden">
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
  </Helmet>

  {/* Background */}
  <div className="absolute inset-0">
    <img
      src="hero.jpg"
      alt="Dentist with patient smiling"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-transparent" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 lg:px-12 py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
    
    {/* Left Content */}
    <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white drop-shadow-md">
        🦷 Pain-Free Smiles in Faisalabad
      </h1>

      <p className="text-xl sm:text-2xl font-medium text-green-300">
        Trusted by 5,000+ Patients Since 2008
      </p>

      <p className="text-base sm:text-lg text-gray-200 max-w-lg mx-auto lg:mx-0">
        Modern, award-winning dental care — gentle treatments, same-day appointments, and a smile-first experience.
      </p>

      {/* Features - trust badges */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 text-sm">
        {[
          { icon: "⭐", text: "4.9/5 Google Rating" },
          { icon: "🧪", text: "Pain-Free Technology" },
          { icon: "🏅", text: "15+ Years Experience" },
        ].map((item, i) => (
          <div
            key={i}
            className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-lg px-4 py-3 flex items-center gap-2 justify-center shadow-md"
          >
            <span>{item.icon}</span> <span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* CTAs */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <a
          href="#booking"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-base sm:text-lg font-semibold shadow-xl flex items-center justify-center gap-2 transition"
        >
          📅 Book Free Appointment
        </a>
        <a
          href="#services"
          className="border border-white text-white px-6 py-3 rounded-xl text-base sm:text-lg font-semibold hover:bg-white hover:text-black transition shadow"
        >
          💼 View Our Services
        </a>
      </div>

      <p className="mt-4 text-sm text-gray-300">
        ✅ First Consultation is 100% Free • Only 3 Slots Left This Week
      </p>
    </div>

    {/* Right Side - doctor image or branding */}
    <div className="hidden lg:flex items-center justify-center lg:w-1/2">
      <img
        src="https://doctorteethclinic.com/DL.jpeg"
        alt="Doctor Teeth"
        className="w-[400px] rounded-xl shadow-2xl border-4 border-white/20"
      />
    </div>
  </div>
</section>

);
};

export default HeroSection;
