import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const WhyChooseMehreen = () => {
  return (
    <section
      id="why-us"
      className="bg-gradient-to-b from-white to-gray-100 py-16 font-sans"
      aria-labelledby="why-us-title"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <motion.h2
            id="why-us-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl lg:text-5xl font-extrabold text-blue-900 mb-6 leading-tight"
          >
            Why Rawalpindi Chooses Mehreen Dental Clinic
          </motion.h2>

          <ul className="space-y-6 text-gray-800 text-lg leading-relaxed">
            <motion.li
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start"
            >
              <CheckCircle className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
              <p className="ml-4">
                <strong className="font-semibold">
                  Advanced Pain-Free Technology:
                </strong>{" "}
                Our clinic uses the latest digital anesthetic tools and
                laser-guided treatments to ensure every procedure is virtually
                painless—perfect for anxious or first-time patients.
              </p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-start"
            >
              <CheckCircle className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
              <p className="ml-4">
                <strong className="font-semibold">
                  Rapid Emergency Care:
                </strong>{" "}
                As a top-rated{" "}
                <span className="text-blue-900 font-medium">
                  emergency dentist in Rawalpindi
                </span>
                , we provide same-day appointments—even after hours—so you’re
                never left waiting in pain.
              </p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-start"
            >
              <CheckCircle className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
              <p className="ml-4">
                <strong className="font-semibold">
                  FDA-Certified Materials & Safety:
                </strong>{" "}
                We only use globally approved, biocompatible composites,
                implants, and crowns to give you lasting results with zero
                compromise on safety.
              </p>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-start"
            >
              <CheckCircle className="w-6 h-6 text-teal-500 mt-1 flex-shrink-0" />
              <p className="ml-4">
                <strong className="font-semibold">
                  Personalized Smile Solutions:
                </strong>{" "}
                From custom veneers to orthodontic aligners, our specialists
                design treatment plans around your unique facial structure and
                lifestyle goals.
              </p>
            </motion.li>
          </ul>
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden rounded-2xl shadow-2xl">
          <motion.img
            src="/mehreenInterior.jpg"
            alt="Inside view of Mehreen Dental Clinic, Rawalpindi"
            className="w-full object-cover"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Semantic SEO JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Mehreen Dental Clinic",
            description:
              "Mehreen Dental Clinic in Rawalpindi offers pain-free dental care, same-day emergency appointments, and FDA-certified materials for families.",
            url: "https://mehreendental.com",
            telephone: "+92 333 1936193",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Chaudhry Bostan Khan Rd, above Allied Bank, Gulrez Housing Scheme",
              addressLocality: "Rawalpindi",
              addressRegion: "Punjab",
              postalCode: "46000",
              addressCountry: "PK",
            },
            medicalSpecialty: ["Dentistry", "Emergency Dentistry", "Cosmetic Dentistry"],
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "09:00",
                closes: "22:00",
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "36",
            },
          }),
        }}
      />
    </section>
  );
};

export default WhyChooseMehreen;
