import * as React from "react";

export default function WhyChooseUs() {
  return (
    <section
      className="mt-40 px-20 w-full max-w-[1112px] max-md:mt-10 max-md:max-w-full"
      aria-labelledby="why-choose-us"
    >
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2716e87f08e93a2aa819baa42fabe1fb114324f00704c4357530d3f589e2f31?placeholderIfAbsent=true&apiKey=db395f39bd3c4701b0287a0a79b559c3"
            className="object-contain grow w-full rounded-3xl aspect-[1.73] max-md:mt-10 max-md:max-w-full"
            alt="Why choose us illustration"
          />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start w-full text-base text-zinc-800 max-md:mt-10 max-md:max-w-full">
            <h2
              id="why-choose-us"
              className="self-stretch text-5xl font-bold max-md:max-w-full max-md:text-4xl"
            >
              Why You Choose Us?
            </h2>
            <div className="flex gap-4 mt-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7aa1b06824ed3c1280e8a9eeffc061a2298236661d2ba24a4b4cafc4e31e91c4?placeholderIfAbsent=true&apiKey=db395f39bd3c4701b0287a0a79b559c3"
                className="object-contain shrink-0 my-auto w-4 aspect-square"
                alt="Checkmark icon"
              />
              <div className="flex-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div className="flex gap-4 mt-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/70b989f8aa704ecbf32998744a9dd414ed88962d07d0f6f1f8cdf5d76ce30780?placeholderIfAbsent=true&apiKey=db395f39bd3c4701b0287a0a79b559c3"
                className="object-contain shrink-0 self-start mt-1.5 w-4 aspect-square"
                alt="Checkmark icon"
              />
              <div className="flex-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
