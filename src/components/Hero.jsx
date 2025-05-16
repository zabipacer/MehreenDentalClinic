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
    <section className="relative pt-20 w-full min-h-screen flex items-center justify-center text-white overflow-hidden">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="hero.jpg"
          alt="Dentist with patient smiling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-12 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            🦷 Pain-Free Smiles in Faisalabad  
          </h1>
          <p className="text-lg sm:text-xl font-medium">
            Trusted by 5,000+ Patients Since 2008
          </p>
          <p className="text-base sm:text-lg text-gray-200">
            Modern, award-winning dental care — gentle treatments, same-day appointments, and a smile-first experience.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start text-sm text-gray-100">
            <div className="flex items-center gap-2">
              ⭐ <span>4.9/5 Google Rating</span>
            </div>
            <div className="flex items-center gap-2">
              🧪 <span>Pain-Free Tech</span>
            </div>
            <div className="flex items-center gap-2">
              🏅 <span>15+ Years Experience</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#booking"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl text-base sm:text-lg font-semibold shadow-lg transition"
            >
              Book Free Appointment
            </a>
            <a
              href="#services"
              className="border border-white text-white px-6 py-3 rounded-xl text-base sm:text-lg font-semibold hover:bg-white hover:text-black transition"
            >
              View Our Services
            </a>
          </div>

          <div className="mt-3 text-sm text-gray-300">
            ✅ First Consultation is 100% Free • Only 3 Slots Left This Week
          </div>
        </div>

        {/* Right Content / Image placeholder */}
        <div className="hidden lg:block lg:w-1/2">{/* Could insert doctor image here later */}</div>
      </div>
    </section>
  );
};

export default HeroSection;
