import * as React from "react";

export default function Stats() {
  return (
    <section
      className="flex z-10 flex-col justify-center items-start px-16 py-4 mt-0 w-full text-white bg-blue-700 max-md:px-5 max-md:max-w-full"
      aria-label="Statistics"
    >
      <div className="flex flex-wrap gap-10">
        <div className="flex flex-col">
          <div className="text-6xl font-bold max-md:text-4xl">24 / 7</div>
          <div className="self-center text-base">Online Support</div>
        </div>
        <div className="object-contain shrink-0 my-auto w-px aspect-[0.01] bg-white"></div>
        <div className="flex flex-col whitespace-nowrap">
          <div className="text-6xl font-bold max-md:text-4xl">100+</div>
          <div className="self-center text-base">Doctors</div>
        </div>
        <div className="object-contain shrink-0 my-auto w-px aspect-[0.01] bg-white"></div>
        <div className="flex flex-col">
          <div className="text-6xl font-bold max-md:text-4xl">1M+</div>
          <div className="mx-3 text-base max-md:mx-2.5">Active Patients</div>
        </div>
      </div>
    </section>
  );
}
