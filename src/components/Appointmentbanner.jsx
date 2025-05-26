import React from 'react';

const AppointmentBanner = () => {
  return (
    <section
      className="w-full py-16 px-4 text-center text-white"
      style={{
        background: `
          repeating-linear-gradient(
            45deg,
            #a6bf39,
            #a6bf39 2px,
            #90aa32 2px,
            #90aa32 4px
          )
        `,
        textShadow: '0 1px 3px rgba(0, 0, 0, 0.7)',
      }}
    >
      <h2 className="sm:text-4xl text-3xl font-semibold mb-2">
        Doctor Teeth Clinic is accepting new patients!
      </h2>
      <p className="text-xl">
        Schedule your appointment today:&nbsp;
        <a
          href="tel:+923216739504"
          className="underline hover:text-yellow-300 font-medium"
        >
          +92 321-6739504
        </a>
      </p>
    </section>
  );
};

export default AppointmentBanner;
