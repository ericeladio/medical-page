import * as React from "react";

export default function Specialists() {
  return (
    <section className="flex flex-col items-center pt-10  w-full  max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="flex z-10 flex-col items-start -mb-36 w-full max-w-[1200px] max-md:mb-2.5 max-md:max-w-full">
        <h2 className="text-5xl font-bold text-zinc-800 max-md:max-w-full max-md:text-4xl">
          Our Consulting Specialists
        </h2>
        <div className="self-stretch mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col mb-10">
            {[
              { title: "Covid-19 Test", highlighted: false },
              { title: "Heart Lungs", highlighted: true },
              { title: "Suppliment", highlighted: false },
              { title: "Mental Health", highlighted: false },
            ].map((specialist, index) => (
              <div
                key={index}
                className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
              >
                <div
                  className={`flex flex-col items-start px-7 py-11 rounded-3xl ${
                    specialist.highlighted
                      ? "text-white bg-blue-700"
                      : "border border-solid border-slate-900"
                  } max-md:px-5 max-md:mt-5`}
                >
                  <div
                    className="flex shrink-0 bg-sky-100 rounded-full h-[92px] w-[92px]"
                    role="img"
                    aria-label={specialist.title + " icon"}
                  />
                  <h3
                    className={`mt-3 text-2xl font-bold ${
                      specialist.highlighted ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {specialist.title}
                  </h3>
                  <p
                    className={`self-stretch mt-4 text-base ${
                      specialist.highlighted ? "text-white" : "text-sky-950"
                    }`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                    velit viverra amet faucibus.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
