import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Hook for mobile detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

const slides = [
  {
    title: "Modern Dental Care in Rawalpindi",
    subtitle: "Cutting-Edge Techniques, Gentle Touch",
    text:
      "Discover top-notch dental services with the latest technology delivered by our caring professionals. Our commitment to your smile has made us a trusted part of the community.",
    image: "h1.jpg",
    mobileImage: "h1.jpg",
    cta: "Schedule Consultation",
  },
  {
    title: "Comprehensive Oral Health Services",
    subtitle: "From Cleanings to Restorations",
    text:
      "Whether it’s a routine checkup or a complex procedure, our skilled team crafts personalized treatment plans to keep your smile healthy and bright.",
    image: "h2c.jpg",
    mobileImage: "h2c.jpg",
    cta: "View Services",
  },
  {
    title: "Trusted by 36 Happy Patients",
    subtitle: "4.8★ Average Rating",
    text:
      "Join the many patients who rely on us for friendly, high-quality dental care in a comfortable, modern environment.",
    image: "h3.jpg",
    mobileImage: "h3.jpg",
    cta: "Meet Our Team",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "DentalClinic",
  "name": "Mehreen Dental Clinic",
  "telephone": "+923331936193",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Chaudhry Bostan Khan Rd, above Allied Bank",
    "addressLocality": "Gulrez Housing Scheme, Rawalpindi",
    "addressCountry": "PK"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "36"
  }
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const isMobile = useIsMobile();

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrent(index);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  return (
    <section className="relative w-full min-h-screen bg-white">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={isMobile ? slides[current].mobileImage : slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-slate-900/30"></div>
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div className="absolute inset-0 z-20">
        <div className="container mx-auto h-full flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-0">
          {/* Left Content */}
          <div className="w-full lg:w-7/12 space-y-4 sm:space-y-6 order-1 lg:order-1 mt-0 lg:mt-0">
            {/* Clinic Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 sm:space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 border border-white/20"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-xs sm:text-sm font-medium">MEHREEN DENTAL CLINIC</span>
            </motion.div>

            {/* Main Heading & Subtitle */}
            <div className="space-y-2">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={slides[current].title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
                >
                  {slides[current].title}
                </motion.h1>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.h2
                  key={slides[current].subtitle}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-300 font-medium"
                >
                  {slides[current].subtitle}
                </motion.h2>
              </AnimatePresence>
            </div>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={slides[current].text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-full lg:max-w-2xl"
              >
                {slides[current].text}
              </motion.p>
            </AnimatePresence>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col space-y-3 sm:space-y-4"
            >
              <motion.a
                href="tel:+923331936193"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                📞 Call Now: +92 333 1936193
              </motion.a>

              <motion.a
                href="https://wa.me/923331936193"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 backdrop-blur-sm text-center"
              >
                💬 {slides[current].cta}
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side – Clinic Info */}
          <div className="w-full lg:w-5/12 order-2 lg:order-2 mt-6 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/20"
            >
              <div className="space-y-4 sm:space-y-6">
                {/* Header */}
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-2">
                    Visit Our Clinic
                  </h3>
                  <div className="flex items-center justify-center space-x-1 mb-3 sm:mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-slate-600 font-medium ml-2 text-sm sm:text-base">
                      4.8 (36 reviews)
                    </span>
                  </div>
                </div>

                {/* Clinic Information */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm sm:text-base">Location</h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        Chaudhry Bostan Khan Rd, above Allied Bank
                        <br />
                        Gulrez Housing Scheme, Rawalpindi
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm sm:text-base">Hours</h4>
                      <p className="text-slate-600 text-xs sm:text-sm">
                        <span className="text-green-600 font-medium">Open Now</span>{" "}
                        • Closes 10:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm sm:text-base">Contact</h4>
                      <p className="text-slate-600 text-xs sm:text-sm">+92 333 1936193</p>
                    </div>
                  </div>
                </div>

                {/* Quick Action */}
                <div className="pt-3 sm:pt-4 border-t border-slate-200">
                  <a
                    href="https://wa.me/923331936193"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2.5 sm:py-3 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688" />
                    </svg>
                    <span>Book via WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 left-2 sm:left-4 lg:left-6 transform -translate-y-1/2 z-30">
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full border border-white/30 transition-all duration-300"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
      </div>
      <div className="absolute top-1/2 right-2 sm:right-4 lg:right-6 transform -translate-y-1/2 z-30">
        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full border border-white/30 transition-all duration-300"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === current ? "bg-white w-4 sm:w-6 lg:w-8" : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </section>
  );
}