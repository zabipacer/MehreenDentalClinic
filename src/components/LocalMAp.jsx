import React from "react";

const LocalSEOSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12" id="location">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl tracking-wide text-teal-600 mb-8">
          FIND US AT MEHREEN DENTAL CLINIC
        </h2>

        {/* Map + Info */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
          {/* Google Map */}
          <div className="w-full lg:w-4/5 h-96 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Mehreen Dental Clinic Rawalpindi Location"
              src="https://www.google.com/maps?q=33.6073,73.0515&z=15&output=embed"
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
            <strong>Address:</strong> Mehreen Dental Clinic, Chaudhry Bostan Khan Rd,
            above Allied Bank, Gulrez Housing Scheme, Rawalpindi, Punjab 46000, PK.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Phone:</strong>{" "}
            <a href="tel:+923331936193" className="text-blue-600 hover:underline">
              +92 333 1936193
            </a>
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Service Areas:</strong> Gulrez Housing Scheme, Saddar Rawalpindi,
            Satellite Town, Bahria Town, Murree Road neighborhoods, and surrounding areas.
          </p>
          <a
            href="https://maps.app.goo.gl/NUTnD75KLKcZ2v1k8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition duration-300"
          >
            Open in Google Maps
          </a>
        </div>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Mehreen Dental Clinic",
              image: "https://mehreendental.com/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Chaudhry Bostan Khan Rd, above Allied Bank, Gulrez Housing Scheme",
                addressLocality: "Rawalpindi",
                addressRegion: "Punjab",
                postalCode: "46000",
                addressCountry: "PK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 33.6073,
                longitude: 73.0515,
              },
              url: "https://mehreendental.com",
              telephone: "+923331936193",
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
            }),
          }}
        />
      </div>
    </section>
  );
};

export default LocalSEOSection;
