import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const MehreenIntro = () => {
  return (
    <section
      aria-labelledby="mehreen-intro-title"
      className="w-full py-16 px-4 text-white font-sans"
      style={{
        background: `
          linear-gradient(135deg, #0d3b66 0%, #0d3b66 40%, #144b5b 100%)
        `,
      }}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center">
          <AnimatePresence>
            <motion.h1
              id="mehreen-intro-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Welcome to Mehreen Dental Clinic
            </motion.h1>
          </AnimatePresence>
          <AnimatePresence>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-2 text-lg md:text-xl text-teal-200"
            >
              Your Trusted Dentist in Rawalpindi for Pain-Free, Family-Friendly Care
            </motion.p>
          </AnimatePresence>
        </header>

        <article className="space-y-6">
          <AnimatePresence>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg leading-relaxed"
            >
              Mehreen Dental Clinic in Rawalpindi offers comprehensive dental services—
              from routine cleanings and preventive checkups to advanced restorative
              treatments. Our experienced team blends cutting-edge technology (digital
              X-rays, intraoral cameras) with a warm, patient-centered approach to ensure
              your comfort and confidence every step of the way.
            </motion.p>
          </AnimatePresence>

          <AnimatePresence>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg leading-relaxed"
            >
              Whether you’re looking for cosmetic enhancements, pediatric dentistry,
              or pain-free extractions, we craft personalized treatment plans that
              address your unique needs. If dental anxiety is a concern, our gentle
              sedation options and serene treatment rooms will help you feel relaxed
              from start to finish.
            </motion.p>
          </AnimatePresence>

          <AnimatePresence>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-base md:text-lg leading-relaxed"
            >
              We pride ourselves on quick, efficient appointments—so you spend less
              time in the chair and more time enjoying a healthy, confident smile.
              Accepting most insurance plans and offering flexible financing, we make
              quality dental care accessible for the whole family.
            </motion.p>
          </AnimatePresence>

          <AnimatePresence>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-base md:text-lg leading-relaxed font-semibold"
            >
              Now welcoming new patients! Open late evenings and weekends to accommodate
              your busy schedule.{" "}
              <a
                href="https://wa.me/923331936193"
                className="underline hover:text-teal-300"
              >
                Click here to book via WhatsApp.
              </a>
            </motion.p>
          </AnimatePresence>
        </article>
      </div>
    </section>
  );
};

export default MehreenIntro;
