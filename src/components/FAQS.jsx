import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'How much do dental implants cost at Mehreen Dental Clinic in Rawalpindi?',
    answer: (
      <>
        At Mehreen Dental Clinic, the cost for a single dental implant typically ranges from PKR 35,000 to 50,000 depending on the implant type and any necessary preparatory procedures. For a detailed breakdown, please visit our{' '}
        <Link
          to="/dental-implants-rawalpindi"
          className="text-teal-600 underline hover:text-teal-800 transition-colors duration-200"
        >
          Dental Implants in Rawalpindi
        </Link>{' '}
        page.
      </>
    ),
  },
  {
    question: 'Does Mehreen Dental Clinic offer installment plans for major dental treatments?',
    answer: (
      <>
        Yes. We provide flexible financing options for treatments like implants, orthodontics, and cosmetic smile makeovers. Our goal is to make advanced dental care accessible—ask our front desk about customized installment plans when you book your consultation.
      </>
    ),
  },
  {
    question: 'How often should I schedule a routine check-up at Mehreen Dental Clinic?',
    answer: (
      <>
        We recommend visiting Mehreen Dental Clinic once every six months for a comprehensive exam and professional cleaning. Regular semi-annual check-ups help detect issues early—preventing costly or invasive treatments down the line.
      </>
    ),
  },
  {
    question: 'Is professional teeth whitening safe at Mehreen Dental Clinic?',
    answer: (
      <>
        Absolutely. Our in-office whitening uses LED-accelerated, enamel-safe gels administered by licensed professionals. We customize each treatment to minimize sensitivity and deliver predictable results. Learn more on our{' '}
        <Link
          to="/teeth-whitening-rawalpindi"
          className="text-teal-600 underline hover:text-teal-800 transition-colors duration-200"
        >
          Teeth Whitening
        </Link>{' '}
        page.
      </>
    ),
  },
  {
    question: 'What tooth-replacement options does Mehreen Dental Clinic provide?',
    answer: (
      <>
        We offer dental implants, ceramic bridges, and removable partial dentures—each tailored to your jawbone health, budget, and esthetic goals. Our implant-supported crowns are favored for durability and a natural look. Schedule a consultation to determine which solution suits you best.
      </>
    ),
  },
  {
    question: 'Does Mehreen Dental Clinic provide emergency dental care in Rawalpindi?',
    answer: (
      <>
        Yes—our emergency dentistry service operates seven days a week from 9 AM to 10 PM. Whether it’s a chipped tooth, severe toothache, or trauma, call us immediately at{' '}
        <a href="tel:+923331936193" className="text-blue-600 hover:underline">
          +92 333 1936193
        </a>
        . We’ll fit you in the same day.
      </>
    ),
  },
  {
    question: 'What is the process for getting braces or aligners at Mehreen Dental Clinic?',
    answer: (
      <>
        Your journey begins with a 3D scan and orthodontic assessment. If braces or clear aligners are right for you, our orthodontist designs a phased treatment plan—typically 12–18 months. We monitor progress every 6–8 weeks until your perfect smile is achieved.
      </>
    ),
  },
  {
    question: 'Will root canal therapy at Mehreen Dental Clinic be painful?',
    answer: (
      <>
        Modern root canal treatment at Mehreen Dental Clinic is performed under local anesthesia, making the procedure virtually painless. We also offer nitrous sedation for extra comfort. Our experienced endodontist ensures a smooth, anxiety-free experience.
      </>
    ),
  },
  {
    question: 'Do you offer pediatric dentistry services for children at Mehreen Dental Clinic?',
    answer: (
      <>
        Yes, we specialize in child-friendly dentistry—from fluoride varnish and sealants to habit counseling. Our pediatric team creates a comforting environment and uses gentle techniques to ensure your child’s first dental visits are positive.
      </>
    ),
  },
  {
    question: 'What infection-control measures does Mehreen Dental Clinic follow?',
    answer: (
      <>
        We adhere to strict sterilization protocols: autoclaved instruments, disposable barriers, and medical-grade disinfectants. All operatories are cleaned and sanitized between patients to meet and exceed WHO guidelines for patient safety.
      </>
    ),
  },
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section
      className="bg-gray-50 py-20 px-6 md:px-8 lg:px-16"
      id="faq"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl bg-white shadow-md overflow-hidden transition-all duration-300"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <span itemProp="name">{faq.question}</span>
                <span className="text-2xl transition-transform duration-300">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <div
                className={`px-6 text-gray-700 text-sm transition-all duration-300 ${
                  openIndex === index ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
                }`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div itemProp="text">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
