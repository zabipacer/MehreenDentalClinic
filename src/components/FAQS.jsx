import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: 'What is the cost of dental implants in Faisalabad?',
    answer: (
      <>
        The cost of dental implants in Faisalabad varies based on the clinic and the specific requirements of the patient. On average, the fee ranges from PKR 300 to 2,000 per consultation. For detailed pricing, please refer to our{' '}
        <Link to="/dental-implants-faisalabad" className="text-teal-600 underline hover:text-teal-800 transition-colors duration-200">
          Dental Implants in Faisalabad
        </Link>{' '}
        page.
      </>
    ),
  },
  {
    question: 'Do you offer payment plans for dental treatments?',
    answer: <>Yes, we provide flexible payment plans for various treatments, including implants, braces, and cosmetic procedures. Our goal is to make quality dental care accessible to everyone in Faisalabad.</>,
  },
  {
    question: 'How often should I visit the dentist for a check-up?',
    answer: <>It's recommended to visit the dentist every six months for a routine check-up and cleaning. Regular visits help in early detection and prevention of dental issues.</>,
  },
  {
    question: 'Are teeth whitening procedures safe?',
    answer: <>Professional teeth whitening procedures are safe when performed under the supervision of qualified dental professionals. We use approved methods to ensure effective and safe results.</>,
  },
  {
    question: 'What are the options for replacing missing teeth?',
    answer: <>Options for replacing missing teeth include dental implants, bridges, and dentures. The best option depends on individual needs and oral health status. Consult our specialists to determine the most suitable solution for you.</>,
  },
  {
    question: 'Do you provide emergency dental services in Faisalabad?',
    answer: <>Yes, we offer emergency dental services to address urgent dental issues promptly. Please contact our clinic immediately if you require emergency care.</>,
  },
  {
    question: 'What is the process for getting braces?',
    answer: <>The process begins with a consultation to assess your dental alignment. If braces are suitable, we'll develop a personalized treatment plan. Regular follow-up visits are essential to monitor progress.</>,
  },
  {
    question: 'Is root canal treatment painful?',
    answer: <>Modern root canal treatments are performed under local anesthesia, making the procedure relatively painless. Our experienced dentists ensure patient comfort throughout the process.</>,
  },
  {
    question: 'Do you offer pediatric dental services?',
    answer: <>Yes, we provide comprehensive dental care for children, focusing on preventive measures and creating a comfortable environment for young patients.</>,
  },
  {
    question: 'What precautions are taken for infection control?',
    answer: <>We adhere to strict sterilization protocols and use disposable instruments where applicable to ensure the highest standards of infection control.</>,
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
