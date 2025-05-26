import React from 'react';

const LocalSEOSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12" id="location">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl tracking-wide  text-[#A6BF39] mb-8">
          OUR LOCATIONS
        </h2>

        {/* Map + Info */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Google Map */}
          <div className="w-full lg:w-4/5 h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Dr. Teeth Dental Care Faisalabad Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13616.123456789!2d73.1040157!3d31.4015913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922677a4d131f8f%3A0x502ed6b52d5002c8!2sDr.%20Teeth%20Dental%20Care!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Clinic Info */}
        <div className="mt-10 max-w-3xl mx-auto text-left">
          <p className="text-lg text-gray-700 mb-4">
            <strong>Address:</strong> Doctor Teeth Dental Clinic, Ajmal Center, opposite Gourmet Bakery, near Nadra Executive, Batala Colony, Faisalabad.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Phone:</strong>{' '}
            <a href="tel:+923216739504" className="text-blue-600 hover:underline">
              +92 321-6739504
            </a>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Service Areas:</strong> Eden Valley, Jinnah Colony, Batala Colony, Peoples Colony, Gulberg, and nearby areas.
          </p>
          <a
            href="https://g.co/kgs/dnjVekN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 md:ml-50 px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition duration-300"
          >
            Need Help Finding our Clinic in Faisalabad?
          </a>
        </div>

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "Dr. Teeth Dental Care",
            "image": "https://example.com/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "208 Chak Road, Jinnah Avenue, Eden Valley",
              "addressLocality": "Faisalabad",
              "addressRegion": "Punjab",
              "postalCode": "38000",
              "addressCountry": "PK"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 31.4015913,
              "longitude": 73.1040157
            },
            "url": "https://yourwebsite.com",
            "telephone": "+92-321-6739504",
            "openingHours": "Mo-Su 09:00-23:00"
          })}
        </script>
      </div>
    </section>
  );
};

export default LocalSEOSection;
