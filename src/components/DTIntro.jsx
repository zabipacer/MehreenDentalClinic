import React from 'react';

const DoctorTeethIntro = () => {
  return (
    <section
      className="w-full py-16 px-4 text-white text-center"
      style={{
        background: `
          repeating-linear-gradient(
            45deg,
            #2f2f2f,
            #2f2f2f 2px,
            #3a3a3a 2px,
            #3a3a3a 4px
          )
        `,
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.6)',
      }}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Welcome to Doctor Teeth Dental Clinic
        </h2>
        <p className="text-lg leading-relaxed">
          Doctor Teeth is a patient-centered dental clinic in Faisalabad dedicated to your comfort and care.
          When you visit us, you’ll receive complete attention from our experienced team, including general dentists,
          hygienists, and friendly staff.
        </p>
        <p className="text-lg leading-relaxed">
          We take pride in delivering virtually pain-free treatments with a personal touch. If dental visits make
          you anxious, rest assured — we prioritize your peace of mind with calm surroundings, comfortable seating,
          and clear communication at every step.
        </p>
        <p className="text-lg leading-relaxed">
          Our clinic is equipped with modern dental technology like digital X-rays and advanced surgical tools
          to make your visits fast, safe, and effective — so you spend less time in the chair, and more time smiling.
        </p>
        <p className="text-lg leading-relaxed font-semibold">
          Doctor Teeth Clinic is now accepting new patients! We’re open on evenings and weekends to fit your busy schedule.
          <br />
          <a href="https://wa.me/923216739504" className="underline hover:text-yellow-300">
            Contact us today to book your first appointment.
          </a>
        </p>
      </div>
    </section>
  );
};

export default DoctorTeethIntro;
