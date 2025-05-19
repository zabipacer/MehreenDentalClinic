import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './animations.css';

const slides = [
  {
    title: "Painless Wisdom Tooth Extraction in Faisalabad",
    description: "Get your wisdom tooth removed safely with zero pain and fast recovery. Trusted by 1,000+ patients.",
    image: "slider.png",
  },
  {
    title: "Braces & Aligners for Perfect Smile",
    description: "Affordable orthodontic treatment in Faisalabad with clear aligners and metal braces. Monthly plans available.",
    image: "slider.png",
  },
  {
    title: "Root Canal Treatment with Zero Pain",
    description: "Save your natural teeth with our advanced root canal procedures. Quick, painless, and highly rated.",
    image: "slider.png",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((current + 1) % slides.length);
  };
  
  const prevSlide = () => {
    setDirection(-1);
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    let timer;
    if (!isHovered) {
      timer = setInterval(() => {
        setDirection(1);
        setCurrent(prev => (prev + 1) % slides.length);
      }, 6000);
    }
    return () => clearInterval(timer);
  }, [isHovered, current]);

  // ... (keep schemaData the same)
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
  // Responsive animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100vw' : '-100vw',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        duration: 0.5 
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100vw' : '100vw',
      opacity: 0
    })
  };

  // Improved animation variants

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const { title, description, image } = slides[current];

  return (
    <section 
      className="relative bg-black min-h-screen w-full overflow-hidden font-sans"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <title>{title} | Doctor Teeth Clinic</title>
        <meta name="description" content={description} />
      </Helmet>

      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 z-0"
        >
          <motion.img
            key={image} // Add key to force re-render
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
            loading="eager"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-transparent md:bg-gradient-to-r" />
        </motion.div>
      </AnimatePresence>

      {/* Improved Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between z-10 px-4">
        <motion.button
          className="p-2 md:p-3 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm"
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous slide"
        >
          <FaArrowLeft className="w-6 h-6 md:w-8 md:h-8" />
        </motion.button>
        
        <motion.button
          className="p-2 md:p-3 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm"
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next slide"
        >
          <FaArrowRight className="w-6 h-6 md:w-8 md:h-8" />
        </motion.button>
      </div>

      {/* Optimized Content */}
      <div className="relative z-10 px-4 md:px-6 pt-40 md:pt-60 pb-12 text-center md:text-left text-white container mx-auto">
        <div className="max-w-2xl xl:max-w-3xl mx-auto md:ml-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={textVariants}
            >
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight md:leading-snug drop-shadow-lg">
                {title}
              </h1>
              <p className="mt-3 md:mt-4 text-base md:text-xl text-white/90 max-w-2xl">
                {description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* ... (keep buttons section the same) */}
            <motion.div 
              className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.a
                href="https://wa.me/923216739504"
                className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold text-base md:text-lg shadow-xl flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>📅</span> Book Appointment
              </motion.a>
              <motion.a
                href="#services"
                className="border border-white hover:bg-white hover:text-black px-5 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold text-base md:text-lg shadow flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>💼</span> View Services
              </motion.a>
            </motion.div>

          <motion.p 
            className="mt-3 md:mt-4 text-xs md:text-sm text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            ✅ First Consultation Free • Only 3 Slots Left This Week
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;