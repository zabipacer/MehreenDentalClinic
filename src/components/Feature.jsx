import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Clock, Award } from 'lucide-react';

const services = [
  // Preventive Care
  {
    title: 'Dental Checkup in Rawalpindi',
    description: 'Professional dental exams with advanced diagnostics including oral cancer screening and digital X-rays for complete oral health assessment.',
    image: '/assets/images/dc.webp',
    link: '/dental-checkup-rawalpindi',
    category: 'Preventive Care',
    featured: true
  },
  {
    title: 'Scaling & Polishing',
    description: 'Advanced ultrasonic cleaning to remove tartar and plaque buildup, preventing gum disease and ensuring long-term dental health.',
    image: '/assets/images/Scp.webp',
    link: '/scaling-and-polishing-in-rawalpindi',
    category: 'Preventive Care'
  },
  {
    title: 'Fluoride Treatment',
    description: 'Professional fluoride application to strengthen tooth enamel and prevent cavities in adults and children.',
    image: '/assets/images/ft.webp',
    link: '/fluoride-treatment-in-rawalpindi',
    category: 'Preventive Care'
  },
  {
    title: 'X-Rays & Digital Imaging',
    description: 'Advanced digital radiography for precise diagnosis with minimal radiation exposure and instant results.',
    image: '/xray.jpg',
    link: '/dental-xrays-rawalpindi',
    category: 'Diagnostic'
  },

  // Cosmetic Dentistry
  {
    title: 'Teeth Whitening Rawalpindi',
    description: 'Chairside LED-accelerated whitening treatment for 8 shades brighter smile in under an hour, using enamel-safe solutions.',
    image: '/assets/images/tw.webp',
    link: '/teeth-whitening-in-rawalpindi',
    category: 'Cosmetic',
    featured: true
  },
  {
    title: 'Smile Makeover',
    description: 'Custom cosmetic dentistry plans combining veneers, crowns, and whitening for complete smile transformation.',
    image: '/assets/images/sm.webp',
    link: '/smile-makeover-rawalpindi',
    category: 'Cosmetic'
  },
  {
    title: 'Veneers in Rawalpindi',
    description: 'Custom-crafted porcelain veneers to correct chips, gaps, and discoloration with natural-looking results.',
    image: '/assets/images/v.webp',
    link: '/veneers-rawalpindi',
    category: 'Cosmetic'
  },
  {
    title: 'Dental Jewellery',
    description: 'Sparkling tooth gems and dental jewelry for a unique, dazzling smile enhancement that\'s safe and removable.',
    image: '/jewlery.jpg',
    link: '/dental-jewellery-rawalpindi',
    category: 'Cosmetic'
  },

  // Restorative Dentistry
  {
    title: 'Dental Fillings',
    description: 'Tooth-colored composite fillings that match your natural tooth enamel and prevent future decay.',
    image: '/assets/images/fil.webp',
    link: '/dental-fillings-rawalpindi',
    category: 'Restorative'
  },
  {
    title: 'Zirconia Crown & Bridges',
    description: 'Premium zirconia crowns and bridges offering superior strength, natural aesthetics, and long-lasting durability.',
    image: '/assets/images/zirconia1.webp',
    link: '/zirconia-crowns-bridges-rawalpindi',
    category: 'Restorative',
    featured: true
  },
  {
    title: 'Porcelain Crowns & Bridges',
    description: 'High-quality porcelain crowns and bridges that blend seamlessly with your natural teeth for optimal function and beauty.',
    image: '/assets/images/dcb.webp',
    link: '/porcelain-crown-bridges-rawalpindi',
    category: 'Restorative'
  },
  {
    title: 'Dental Implants in Rawalpindi',
    description: 'Permanent titanium implant solutions with natural-looking crowns, restoring 100% chewing function.',
    image: '/assets/images/dental-implants.webp',
    link: '/dental-implants-rawalpindi',
    category: 'Restorative',
    featured: true
  },

  // Orthodontics
  {
    title: 'Orthodontic Treatment',
    description: 'Comprehensive orthodontic solutions to straighten teeth and correct bite issues for all ages.',
    image: '/assets/images/emergency.webp',
    link: '/orthodontic-treatment-rawalpindi',
    category: 'Orthodontics'
  },
  {
    title: 'Fixed Braces',
    description: 'Traditional metal and ceramic braces for effective teeth straightening with proven results.',
    image: '/assets/images/braces.webp',
    link: '/fixed-braces-rawalpindi',
    category: 'Orthodontics'
  },

  // Root Canal & Surgery
  {
    title: 'Root Canal with Rotary Method',
    description: 'Advanced rotary endodontic treatment for faster, more comfortable root canal procedures with higher success rates.',
    image: '/assets/images/root-canal.webp',
    link: '/rotary-root-canal-rawalpindi',
    category: 'Endodontics',
    featured: true
  },
  {
    title: 'Surgical Extraction',
    description: 'Expert surgical removal of impacted teeth and complex extractions with minimal discomfort and faster healing.',
    image: '/assets/images/wisdom.webp',
    link: '/surgical-extraction-rawalpindi',
    category: 'Oral Surgery'
  },

  // Kids Dentistry
  {
    title: 'Pediatric Dentistry in Rawalpindi',
    description: 'Gentle dental care for children in a fun, comfortable environment designed to build positive dental experiences.',
    image: '/assets/images/pediatric.webp',
    link: '/kids-dentist-rawalpindi',
    category: 'Pediatric'
  },

  // Gum & Periodontal
  {
    title: 'Gum Disease Treatment',
    description: 'Comprehensive periodontal therapy to treat gingivitis and advanced gum disease with modern techniques.',
    image: '/assets/images/gum.webp',
    link: '/gum-disease-treatment-rawalpindi',
    category: 'Periodontics'
  },

  // Emergency Dental Care
  {
    title: 'Emergency Dentist in Rawalpindi',
    description: '24/7 urgent dental care for dental emergencies, trauma, and severe pain relief.',
    image: '/assets/images/emergency.webp',
    link: '/emergency-dentist-rawalpindi',
    category: 'Emergency'
  },

  // Specialty
  {
    title: 'Maxillofacial Surgery',
    description: 'Advanced facial and jaw surgeries performed by specialized oral and maxillofacial surgeons.',
    image: '/assets/images/max.webp',
    link: '/maxillofacial-surgery-rawalpindi',
    category: 'Specialty'
  },
  {
    title: 'TMJ / Jaw Pain Treatment',
    description: 'Comprehensive treatment for temporomandibular joint disorders and chronic jaw pain relief.',
    image: '/assets/images/jaw.webp',
    link: '/tmj-treatment-rawalpindi',
    category: 'Specialty'
  }
];

const FeaturedServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(services.length - itemsPerPage, 0);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [itemsPerPage, isAutoPlaying]);

  const maxIndex = Math.max(services.length - itemsPerPage, 0);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const cardWidthPercent = 100 / itemsPerPage;

  return (
    <section
      id="services"
      className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-teal-600/5"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Premium Dental Care
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Dental Services in 
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> Rawalpindi</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive dental solutions with state-of-the-art technology and personalized care
          </p>
        </div>

        {/* Navigation Arrows */}
        <button
          aria-label="Previous services"
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white text-blue-700 hover:text-blue-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          aria-label="Next services"
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white text-blue-700 hover:text-blue-800 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <ChevronRight size={28} />
        </button>

        {/* Carousel Container */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * cardWidthPercent}%)`
            }}
          >
            {services.map((service, idx) => (
              <div
                key={idx}
                className="px-4"
                style={{ minWidth: `${cardWidthPercent}%` }}
              >
                <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
                  {/* Featured Badge */}
                  {service.featured && (
                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {service.category}
                  </div>

                  <a href={service.link} className="block">
                    {/* Image Container with Overlay */}
                    <div className="relative w-full h-56 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300 mb-3 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {service.description}
                      </p>
                      
                      {/* CTA Section */}
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                          Learn More
                          <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="flex items-center text-gray-400 text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          Book Now
                        </div>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-colors duration-300"></div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentIndex(i);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 8000);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex 
                  ? 'w-8 bg-blue-600' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
            <div className="text-gray-600">Dental Services</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-teal-600 mb-2">5000+</div>
            <div className="text-gray-600">Happy Patients</div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-md">
            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServicesCarousel;