import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const AppointmentBanner = () => {
  return (
    <section
      aria-labelledby="mehreen-banner-title"
      className="w-full py-16 px-4 font-sans"
      style={{
        background: `
          linear-gradient(135deg, #a6bf39 0%, #a6bf39 40%, #90aa32 100%)
        `,
      }}
    >
      <div className="max-w-3xl mx-auto text-center text-white">
        <AnimatePresence>
          <motion.h2
            id="mehreen-banner-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4"
          >
            Mehreen Dental Clinic Is Accepting New Patients!
          </motion.h2>
        </AnimatePresence>

        <AnimatePresence>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl leading-relaxed"
          >
            Ready for a healthy, confident smile? Schedule your appointment today:
            <br />
            <a
              href="tel:+923331936193"
              className="underline hover:text-yellow-300 font-medium"
            >
              +92 333 1936193
            </a>
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AppointmentBanner;
