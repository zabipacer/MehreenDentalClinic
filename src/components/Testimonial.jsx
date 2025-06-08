import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Amina K.",
    role: "Software Engineer",
    text: "Mehreen Dental Clinic gave me the confidence to smile again. Their painless veneer procedure was flawless and the staff made me feel at ease the entire time.",
    image: "/T1.jpg",
    rating: 5,
  },
  {
    name: "Bilal S.",
    role: "School Teacher",
    text: "I needed a same-day emergency extraction and Mehreen’s team accommodated me within hours. Their gentle approach and professionalism were exceptional.",
    image: "/T2.jpg",
    rating: 5,
  },
  {
    name: "Zara N.",
    role: "Freelance Designer",
    text: "I struggled with yellow teeth for years—after their in-office whitening, my smile is brighter than ever. Highly recommend their cosmetic services!",
    image: "/T3.jpg",
    rating: 5,
  },
  {
    name: "Hassan R.",
    role: "Entrepreneur",
    text: "Their Zirconia crown fit perfectly and feels natural—no one can tell it’s not my real tooth. Best investment I’ve made for my dental health.",
    image: "/kashif.png",
    rating: 5,
  },
  {
    name: "Sadia A.",
    role: "Content Writer",
    text: "Dr. Mehreen’s gentle pediatric care put my child at ease immediately. We’ll never go anywhere else—entire family is now a patient here!",
    image: "/ibrahim.png",
    rating: 5,
  },
  {
    name: "Imran T.",
    role: "Bank Manager",
    text: "Their root canal was completely pain-free. I even fell asleep during the procedure—absolutely zero discomfort. Truly state-of-the-art clinic.",
    image: "/faisal.png",
    rating: 5,
  },
];

const MehreenTestimonials = () => {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="relative bg-gradient-to-b from-white to-gray-50 py-20"
    >
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.33,22.82,99.65,35.06,150,39.08C249.8,91.65,298.93,73.42,350,58.45c52.65-15.79,104.19-34.22,156-23.37C590.79,47.49,641.68,74.17,689,90.69c50.13,17,100.26,21.79,150,3.21,30.66-11.94,59.77-31.19,90-44.72V0Z"
            opacity=".25"
            className="fill-current text-gray-200"
          ></path>
          <path
            d="M0,0V15.81C64,33.65,128,54.11,192,49.13,256,44.06,320,13.51,384,17.19,447.67,20.77,511.33,57.63,576,69.9,640,82.7,704,69.32,768,57.06,831.14,45.14,894.28,33.22,958,39.86c62.94,6.53,124.84,33.37,188,34.15V0Z"
            opacity=".5"
            className="fill-current text-gray-100"
          ></path>
          <path
            d="M0,0V5.63C120,23.29,240,45.38,360,43.19c120-2.1,240-38.38,360-29.6,102.89,8,205.78,37.26,308,41.21,88.27,3.49,176.53-9.61,264-23.4V0Z"
            className="fill-current text-white"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2
          id="testimonials-title"
          className="text-4xl lg:text-5xl font-extrabold text-center text-blue-900 mb-12"
        >
          Hear From Our Happy Patients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="p-6 flex flex-col items-center text-center">
                <img
                  src={r.image}
                  alt={`Photo of ${r.name}`}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md mt-16 mb-4"
                />
                <div className="flex items-center mb-2">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic text-base leading-relaxed mb-4 px-2">
                  “{r.text}”
                </p>
                <h3 className="text-xl font-semibold text-blue-800">
                  {r.name}
                </h3>
                <span className="text-gray-500 text-sm">{r.role}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/923331936193"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300"
          >
            Book Your Appointment
          </a>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.33,22.82,99.65,35.06,150,39.08C249.8,91.65,298.93,73.42,350,58.45c52.65-15.79,104.19-34.22,156-23.37C590.79,47.49,641.68,74.17,689,90.69c50.13,17,100.26,21.79,150,3.21,30.66-11.94,59.77-31.19,90-44.72V0Z"
            opacity=".25"
            className="fill-current text-gray-200"
          ></path>
          <path
            d="M0,0V15.81C64,33.65,128,54.11,192,49.13,256,44.06,320,13.51,384,17.19,447.67,20.77,511.33,57.63,576,69.9,640,82.7,704,69.32,768,57.06,831.14,45.14,894.28,33.22,958,39.86c62.94,6.53,124.84,33.37,188,34.15V0Z"
            opacity=".5"
            className="fill-current text-gray-100"
          ></path>
          <path
            d="M0,0V5.63C120,23.29,240,45.38,360,43.19c120-2.1,240-38.38,360-29.6,102.89,8,205.78,37.26,308,41.21,88.27,3.49,176.53-9.61,264-23.4V0Z"
            className="fill-current text-white"
          ></path>
        </svg>
      </div>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Mehreen Dental Clinic",
            description:
              "Mehreen Dental Clinic in Rawalpindi is praised for its pain-free dentistry, emergency services, and cosmetic dental expertise.",
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
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "36",
            },
            review: reviews.map((r) => ({
              "@type": "Review",
              author: { "@type": "Person", name: r.name },
              reviewBody: r.text,
              reviewRating: {
                "@type": "Rating",
                ratingValue: r.rating.toString(),
                bestRating: "5",
              },
            })),
          }),
        }}
      />
    </section>
  );
};

export default MehreenTestimonials;
