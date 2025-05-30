import React from 'react';
import {
  FaTooth,
  FaTeethOpen,
  FaSmile,
  FaUserMd,
  FaXRay,
  FaChild,
  FaTeeth,
  FaRegGrinBeam,
  FaProcedures,
  FaClinicMedical,
  FaFirstAid,
  FaShieldAlt,
  FaHeadSideVirus,
  FaBriefcaseMedical,
  FaLaptopMedical,
  FaRegLaughBeam,
} from 'react-icons/fa';

const services = [
  // Preventive Care
  {
    title: 'Dental Checkup in Faisalabad',
    description: 'Professional dental exams with advanced diagnostics including oral cancer screening and digital X-rays for complete oral health assessment.',
    image: '/assets/images/dc.png',
    link: '/dental-checkup-faisalabad',
  },
  {
    title: 'Scaling & Polishing',
    description: 'Advanced ultrasonic cleaning to remove tartar and plaque buildup, preventing gum disease and ensuring long-term dental health.',
    image: '/assets/images/Scp.png',
    link: '/scaling-and-polishing-in-faisalabad',
  },
  {
    title: 'Fluoride Treatment',
    description: 'Professional fluoride application to strengthen tooth enamel and prevent cavities in adults and children.',
    image: '/assets/images/ft.png',
    link: '/Fluoride-Treatment-in-faisalabad',
  },

  // Cosmetic Dentistry
  {
    title: 'Teeth Whitening Faisalabad',
    description: 'Chairside LED-accelerated whitening treatment for 8 shades brighter smile in under an hour, using enamel-safe solutions.',
    image: '/assets/images/tw.png',
    link: '/Teeth-whitening-in-faisalabad',
  },
  {
    title: 'Smile Makeover',
    description: 'Custom cosmetic dentistry plans combining veneers, crowns, and whitening for complete smile transformation.',
    image: '/assets/images/sm.png',
    link: '/Smile-Makeover-faisalabad',
  },
  {
    title: 'Veneers in Faisalabad',
    description: 'Custom-crafted porcelain veneers to correct chips, gaps, and discoloration with natural-looking results.',
    image: '/assets/images/v.png',
    link: '/veneers-faisalabad',
  },

  // Restorative Dentistry
  {
    title: 'Dental Fillings',
    description: 'Tooth-colored composite fillings that match your natural tooth enamel and prevent future decay.',
    image: '/assets/images/fil.png',
    link: '/Dental-Fillings-faisalabad',
  },
  {
    title: 'Dental Crowns & Bridges',
    description: 'CEREC same-day ceramic crowns and fixed bridges to restore functionality and aesthetics of damaged teeth.',
    image: '/assets/images/dcb.png',
    link: '/Dental-Crown-Bridges-Faisalabad',
  },
  {
    title: 'Dental Implants in Faisalabad',
    description: 'Permanent titanium implant solutions with natural-looking crowns, restoring 100% chewing function.',
    image: '/assets/images/dental-implants.png',
    link: '/Dental-implants-Faisalabad',
  },
   // Orthodontics
  {
    title: 'Braces & Aligners',
    description: 'Straighten your teeth with fixed or removable options.',
    image: '/assets/images/braces.png',
    link: '/braces-aligners-faisalabad',
  },

  // Root Canal & Surgery
  {
    title: 'Root Canal Treatment (RCT)',
    description: 'Pain-free root canal procedures.',
    image: '/assets/images/root-canal.png',
    link: '/root-canal-faisalabad',
  },
  {
    title: 'Wisdom Tooth Extraction',
    description: 'Safe removal of impacted wisdom teeth.',
    image: '/assets/images/wisdom.png',
    link: '/wisdom-tooth-extraction',
  },

  // Kids Dentistry
  {
    title: 'Pediatric Dentistry in Faisalabad',
    description: 'Gentle dental care for children.',
    image: '/assets/images/pediatric.png',
    link: '/kids-dentist-faisalabad',
  },

  // Gum & Periodontal
  {
    title: 'Gum Disease Treatment',
    description: 'Treat gingivitis & advanced gum issues.',
    image: '/assets/images/gum.png',
    link: '/gum-disease-treatment',
  },

  // Emergency Dental Care
  {
    title: 'Emergency Dentist in Faisalabad',
    description: '24/7 urgent dental care.',
    image: '/assets/images/emergency.png',
    link: '/emergency-dentist-faisalabad',
  },

  // Specialty
  {
    title: 'Maxillofacial Surgery',
    description: 'Advanced facial and jaw surgeries.',
    image: '/assets/images/max.png',
    link: '/maxillofacial-surgery',
  },
  {
    title: 'TMJ / Jaw Pain Treatment',
    description: 'Relieve chronic jaw pain with expert care.',
    image: '/assets/images/jaw.png',
    link: '/tmj-treatment-faisalabad',
  },
{
title:"Zarconia crown",
description:"Restore your smile with our realistic looking zirconia crown",
image:"/assets/images/zirconia1.png",
link:"/tmj-treatment-faisalabad"
}
  // ... (Update other service objects similarly with images and enhanced descriptions)
];

const FeaturedServices = () => {
  return ( <section className="bg-fixed bg-white py-16"  style={{
        backgroundImage: `url('/assets/images/office.jpg')`, // Replace with actual image path
        marginTop: 0,
        marginBottom: 0,
      }} id="services">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
          Dental Services in Faisalabad
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, description, image, link }) => (
            <a
              href={link}
              key={title}
              className="group p-6 border border-gray-200 rounded-xl shadow-md hover:shadow-xl hover:border-teal-500 transition-all duration-300 bg-transparent text-center"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-lg group-hover:shadow-teal-200 transition-shadow duration-300">
                  <img 
                    src={image} 
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 group-hover:text-teal-600 transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;