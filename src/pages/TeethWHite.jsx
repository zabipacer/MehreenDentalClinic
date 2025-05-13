import React from "react";
import { FaPhoneAlt, FaSmileBeam, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import LocalSEOSection from "../components/LocalMAp";

export default function TeethWhiteningPage() {
  return (
    <div className="max-w-5xl pt-24 mx-auto px-4 text-gray-800">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4">🦷 Professional Teeth Whitening in Faisalabad</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Brighten your smile safely and instantly at Doctor Teeth Dental Clinic – your trusted choice for teeth whitening in Faisalabad.</p>
      </header>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 text-center">
        <a href="tel:+923216739504" className="bg-blue-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700 transition shadow-lg">
          <FaPhoneAlt /> Call Now: +92 321 6739504
        </a>
        <div className="flex items-center gap-2 text-gray-600 text-sm max-w-xs">
          <FaMapMarkerAlt /> Ajmal Center, near Nadra Executive Office, opp. Gourmet Bakers, Batala Colony Faisalabad
        </div>
      </div>

      <LocalSEOSection />

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-3">✨ Say Goodbye to Yellow Teeth</h2>
        <p className="mb-2">Looking for <strong>teeth whitening in Faisalabad</strong>? At Doctor Teeth, our advanced whitening system helps you achieve a radiant smile—up to 7 shades brighter in just one visit.</p>
        <p className="mb-2">We use <strong>dentist-approved, enamel-safe</strong> whitening formulas that work effectively on stains caused by tea, coffee, smoking, or aging.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">🪥 Our 3-Step Whitening Process</h2>
        <div className="bg-gray-50 p-6 rounded-xl shadow-sm space-y-3">
          <p><strong>Step 1:</strong> Prep – Gentle cleaning and vitamin-rich gel to protect enamel.</p>
          <p><strong>Step 2:</strong> Whiten – Our LED technology activates the formula to lift stains deeply.</p>
          <p><strong>Step 3:</strong> Seal – Remineralizing gel seals the glow and keeps your teeth strong.</p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-3">💸 Teeth Whitening Cost in Faisalabad</h2>
        <p>We offer <strong>affordable teeth whitening treatments</strong> starting from <strong>Rs. 3,000</strong>. Transparent pricing. Guaranteed results.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-3">🎯 Why Choose Doctor Teeth?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Top-rated dental clinic in Faisalabad with 5-star Google reviews.</li>
          <li>Quick, pain-free, and lasting results with no sensitivity.</li>
          <li>Advanced LED whitening system used by professionals worldwide.</li>
          <li>Free consultation for first-time patients.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-3">📍 Ideal for</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>People with yellow or stained teeth</li>
          <li>Wedding or graduation events</li>
          <li>Job interviews and confident first impressions</li>
          <li>Smokers and coffee/tea lovers</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-3">🧼 Post-Whitening Care Tips</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Avoid colored drinks (tea, coffee, soda) for 48 hours</li>
          <li>No smoking for 2 days post-treatment</li>
          <li>Brush with non-abrasive toothpaste</li>
          <li>Use a straw for dark liquids</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-3">⭐ What Patients Say</h2>
        <blockquote className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500 mb-2">
          “I got my teeth whitened before my engagement and they looked amazing! Everyone noticed.” – <em>Ayesha, Madina Town</em>
        </blockquote>
        <blockquote className="bg-gray-100 p-4 rounded-md border-l-4 border-green-500">
          “Zero sensitivity and better than any home kit I tried.” – <em>Usman, Jinnah Colony</em>
        </blockquote>
      </section>

      <section className="mb-12 text-center">
        <h2 className="text-3xl font-semibold mb-3">📅 Book Your Whitening Today</h2>
        <p className="mb-4">Slots fill up fast – especially before Eid, weddings, or graduation events.</p>
        <a href="tel:+923216739504" className="bg-green-600 text-white px-8 py-4 rounded-full text-lg hover:bg-green-700 transition shadow-lg">
          <FaSmileBeam className="inline-block mr-2" /> Call or WhatsApp: +92 321 6739504
        </a>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-3">🙋‍♀️ FAQs – Teeth Whitening in Faisalabad</h2>
        <div className="space-y-4">
          <div>
            <strong>Is it safe?</strong>
            <p>Yes. We use enamel-safe, dentist-grade whitening systems approved by global dental bodies.</p>
          </div>
          <div>
            <strong>Will it cause sensitivity?</strong>
            <p>Almost all patients report zero sensitivity thanks to our post-whitening desensitizer.</p>
          </div>
          <div>
            <strong>How long does it last?</strong>
            <p>Results can last up to 6 months with good oral hygiene and limited colored drinks.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-gray-500 mt-16 border-t pt-6 text-sm">
        <p>Doctor Teeth Dental Clinic – Ajmal Center, near Nadra Executive Office, opp. Gourmet Bakers, Batala Colony Faisalabad</p>
        <p>Phone/WhatsApp: +92 321 6739504</p>
        <p>© {new Date().getFullYear()} Doctor Teeth. All rights reserved.</p>
      </footer>
    </div>
  );
}
