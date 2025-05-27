import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Ayesha R.",
    text: "Dr. Ali gave me my confidence back! Best veneers in Faisalabad!",
    image: "/T1.jpg",
  },
  {
    name: "Hamza T.",
    text: "Finally found a pain-free dentist in Faisalabad. Amazing root canal experience.",
    image: "/T2.jpg",
  },
  {
    name: "Sara M.",
    text: "The smile makeover was life-changing. Best cosmetic dentist in Faisalabad!",
    image: "/T3.jpg",
  },
  {
    name: "Muhammad Ibrahim",
    text: "Very competent and humble doctor.",
    image: "/ibrahim.png",
  },
  {
    name: "Dr. Urooj Muddasar",
    text: "I went to doctor for the solution of my broken teeth. He treated me very well; the procedure he opted was professional.",
    image: "/urooj.png",
  },
  {
    name: "Faisal Ramzii",
    text: "Keepin' it simple, I came to Pak from KSA and visited Dr. Tajwer. After consulting and getting quotes from others, I chose them.",
    image: "/faisal.png",
  },
  {
    name: "Amir James",
    text: "Doctor Mohsin Refique is very nice. He provided exceptional care and service.",
    image: "/amir1.png",
  },
  {
    name: "Shahid Rasool",
    text: "Extraordinary satisfaction! Very friendly and experienced doctor. Highly recommended.",
    image: "/shahid.png",
  },
  {
    name: "Nauman Sabir",
    text: "Doc was very friendly and walked me through the entire process. Great experience!",
    image: "/nauman.png",
  },
  {
    name: "Areej Kashif",
    text: "Excellent experience with my family. Doctor was very friendly and efficient. Highly recommended Dr. Tajwer!",
    image: "/areej.png",
  },
  {
    name: "Kashif Ali",
    text: "Best in town. Affordable, excellent, and quick service. Highly recommended.",
    image: "/kashif.png",
  },
  {
    name: "Kiran Kashif",
    text: "Very professional. Satisfied Alhamdulillah.",
    image: "/kiran.png",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20" id="testimonials">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-teal-700 mb-12 tracking-tight">What Our Patients Say</h2>

        <div className="relative h-80">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out transform ${
                i === index
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-95 z-0 pointer-events-none"
              }`}
            >
              <div className="bg-gray-50 px-8 py-6 rounded-2xl shadow-xl border border-gray-100 max-w-xl mx-auto">
                <img
                  src={t.image}
                  alt={`Photo of ${t.name}`}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
                />
                <p className="text-gray-700 italic text-lg leading-relaxed mb-3">"{t.text}"</p>
                <span className="text-teal-600 font-semibold text-base block">– {t.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                i === index ? "bg-teal-600 scale-110" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Video Testimonial */}
        <div className="mt-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Real Results: Smile Makeover in Faisalabad
          </h2>

          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Watch how we transformed a patient’s smile with expert cosmetic dentistry. Discover why people trust us with their confidence.
          </p>

          <div className="rounded-xl overflow-hidden shadow-lg aspect-video border border-gray-200 mb-8">
            <video
              className="w-full h-full"
              controls
              poster="/poster.png"
            >
              <source src="smile-journey.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 text-left shadow-sm max-w-2xl mx-auto">
            <strong className="block mb-2 text-blue-700">Transcript:</strong>
            “I searched everywhere for a <strong>cosmetic dentist in Faisalabad</strong>, and when I found Dr. Tajwer Hussain, everything changed. From the initial consultation to the final smile reveal, every step was smooth, professional, and surprisingly comfortable. If you're looking for the <strong>best smile makeover in Faisalabad</strong>, this is where you go.”
          </div>

          <a
            href="https://wa.me/923216739504"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-teal-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-teal-700 transition-all duration-300"
          >
            Book Your Consultation Now
          </a>
        </div>

        {/* Schema.org SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: testimonials.map((t, i) => ({
                "@type": "Review",
                "author": { "@type": "Person", "name": t.name },
                "reviewBody": t.text,
                "itemReviewed": {
                  "@type": "MedicalClinic",
                  "name": "Doctor Teeth Dental Clinic",
                  "medicalSpecialty": "Dentistry",
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                },
                position: i + 1,
              })),
            }),
          }}
        />
      </div>
    </section>
  );
};

export default Testimonials;
