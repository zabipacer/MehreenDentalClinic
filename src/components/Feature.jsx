import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  // Preventive Care
  {
    title: 'Dental Checkup in Faisalabad',
    description:
      'Professional dental exams with advanced diagnostics including oral cancer screening and digital X-rays for complete oral health assessment.',
    image: '/assets/images/dc.webp',
    link: '/dental-checkup-faisalabad',
  },
  {
    title: 'Scaling & Polishing',
    description:
      'Advanced ultrasonic cleaning to remove tartar and plaque buildup, preventing gum disease and ensuring long-term dental health.',
    image: '/assets/images/Scp.webp',
    link: '/scaling-and-polishing-in-faisalabad',
  },
  {
    title: 'Fluoride Treatment',
    description:
      'Professional fluoride application to strengthen tooth enamel and prevent cavities in adults and children.',
    image: '/assets/images/ft.webp',
    link: '/Fluoride-Treatment-in-faisalabad',
  },

  // Cosmetic Dentistry
  {
    title: 'Teeth Whitening Faisalabad',
    description:
      'Chairside LED-accelerated whitening treatment for 8 shades brighter smile in under an hour, using enamel-safe solutions.',
    image: '/assets/images/tw.webp',
    link: '/Teeth-whitening-in-faisalabad',
  },
  {
    title: 'Smile Makeover',
    description:
      'Custom cosmetic dentistry plans combining veneers, crowns, and whitening for complete smile transformation.',
    image: '/assets/images/sm.webp',
    link: '/Smile-Makeover-faisalabad',
  },
  {
    title: 'Veneers in Faisalabad',
    description:
      'Custom-crafted porcelain veneers to correct chips, gaps, and discoloration with natural-looking results.',
    image: '/assets/images/v.webp',
    link: '/veneers-faisalabad',
  },

  // Restorative Dentistry
  {
    title: 'Dental Fillings',
    description:
      'Tooth-colored composite fillings that match your natural tooth enamel and prevent future decay.',
    image: '/assets/images/fil.webp',
    link: '/Dental-Fillings-faisalabad',
  },
  {
    title: 'Dental Crowns & Bridges',
    description:
      'CEREC same-day ceramic crowns and fixed bridges to restore functionality and aesthetics of damaged teeth.',
    image: '/assets/images/dcb.webp',
    link: '/Dental-Crown-Bridges-Faisalabad',
  },
  {
    title: 'Dental Implants in Faisalabad',
    description:
      'Permanent titanium implant solutions with natural-looking crowns, restoring 100% chewing function.',
    image: '/assets/images/dental-implants.webp',
    link: '/Dental-implants-Faisalabad',
  },

  // Orthodontics
  {
    title: 'Braces & Aligners',
    description: 'Straighten your teeth with fixed or removable options.',
    image: '/assets/images/braces.webp',
    link: '/braces-aligners-faisalabad',
  },

  // Root Canal & Surgery
  {
    title: 'Root Canal Treatment (RCT)',
    description: 'Pain-free root canal procedures.',
    image: '/assets/images/root-canal.webp',
    link: '/root-canal-faisalabad',
  },
  {
    title: 'Wisdom Tooth Extraction',
    description: 'Safe removal of impacted wisdom teeth.',
    image: '/assets/images/wisdom.webp',
    link: '/wisdom-tooth-extraction',
  },

  // Kids Dentistry
  {
    title: 'Pediatric Dentistry in Faisalabad',
    description: 'Gentle dental care for children.',
    image: '/assets/images/pediatric.webp',
    link: '/kids-dentist-faisalabad',
  },

  // Gum & Periodontal
  {
    title: 'Gum Disease Treatment',
    description: 'Treat gingivitis & advanced gum issues.',
    image: '/assets/images/gum.webp',
    link: '/gum-disease-treatment',
  },

  // Emergency Dental Care
  {
    title: 'Emergency Dentist in Faisalabad',
    description: '24/7 urgent dental care.',
    image: '/assets/images/emergency.webp',
    link: '/emergency-dentist-faisalabad',
  },

  // Specialty
  {
    title: 'Maxillofacial Surgery',
    description: 'Advanced facial and jaw surgeries.',
    image: '/assets/images/max.webp',
    link: '/maxillofacial-surgery',
  },
  {
    title: 'TMJ / Jaw Pain Treatment',
    description: 'Relieve chronic jaw pain with expert care.',
    image: '/assets/images/jaw.webp',
    link: '/tmj-treatment-faisalabad',
  },
  {
    title: 'Zirconia Crown',
    description:
      'Restore your smile with our realistic-looking zirconia crown.',
    image: '/assets/images/zirconia1.webp',
    link: '/zirconia-crowns-faisalabad',
  },
];

const FeaturedServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Determine items-per-page based on window width
  useEffect(() => {
    const updateItemsPerPage = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setItemsPerPage(1);
      } else if (w < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const maxIndex = Math.max(services.length - itemsPerPage, 0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Width percentage for each card
  const cardWidthPercent = 100 / itemsPerPage;

  return (
    <section
      id="services"
      className="relative bg-white py-16 overflow-hidden"
      style={{
        backgroundImage: `url('/assets/images/office.webp')`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
          Dental Services in Faisalabad
        </h2>

        {/* Arrow Left */}
        <button
          aria-label="Previous services"
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-blue-800 rounded-full p-2 shadow-lg transition-colors"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Arrow Right */}
        <button
          aria-label="Next services"
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-white/70 hover:bg-white text-blue-800 rounded-full p-2 shadow-lg transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        {/* Carousel Track */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: `-${currentIndex * cardWidthPercent}%`,
            }}
            transition={{ type: 'tween', duration: 0.6, ease: 'easeInOut' }}
          >
            {services.map(({ title, description, image, link }, idx) => (
              <div
                key={idx}
                className="px-4"
                style={{ minWidth: `${cardWidthPercent}%` }}
              >
                <a
                  href={link}
                  className="group block bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                >
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-blue-800 group-hover:text-teal-600 transition-colors duration-200">
                      {title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </a>
              </div>
            ))}

            {/* If wrap-around needed, duplicate first items to maintain sliding continuity */}
            {currentIndex + itemsPerPage > services.length && (
              services.slice(0, itemsPerPage).map(({ title, description, image, link }, idx) => (
                <div
                  key={`dup-${idx}`}
                  className="px-4"
                  style={{ minWidth: `${cardWidthPercent}%` }}
                >
                  <a
                    href={link}
                    className="group block bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="w-full h-48 overflow-hidden">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold text-blue-800 group-hover:text-teal-600 transition-colors duration-200">
                        {title}
                      </h3>
                      <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </a>
                </div>
              ))
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServicesCarousel;
