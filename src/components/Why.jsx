import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-50 py-16" id="why-us">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-extrabold text-blue-800 mb-6 leading-tight">
            Why Faisalabad Trusts Doctor Teeth Dental Clinic
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <div className="flex items-start">
              <span className="text-teal-600 mr-4 text-2xl mt-1">✓</span>
              <p>
                <strong>Pain-Free Technology:</strong> We use the latest tools and techniques to ensure every visit is smooth, calm, and comfortable — especially for nervous patients.
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-600 mr-4 text-2xl mt-1">✓</span>
              <p>
                <strong>Same-Day Appointments:</strong> As a reliable <span className="text-blue-800 font-semibold">emergency dentist in Faisalabad</span>, we're ready when you need us most — even on short notice.
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-teal-600 mr-4 text-2xl mt-1">✓</span>
              <p>
                <strong>FDA-Approved Materials:</strong> We prioritize your safety by using only globally certified, top-tier dental products and equipment.
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full">
          <img
            src="/assets/images/modern.jpg"
            alt="Modern dental clinic in Faisalabad"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>
      </div>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalOrganization",
            "name": "Doctor Teeth Dental Clinic",
            "medicalSpecialty": ["Dentistry", "Emergency", "Cosmetic"],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Faisalabad",
              "addressRegion": "Punjab",
              "addressCountry": "PK"
            },
            
            "url": "https://doctorteethclinic.com",
            "description": "A modern dental clinic in Faisalabad offering pain-free dentistry, same-day emergency appointments, and FDA-approved treatments."
          }),
        }}
      />
    </section>
  );
};

export default WhyChooseUs;
