import * as React from "react";

export default function QualityHealth() {
  return (
    <section
      className="self-center mt-36 w-full max-w-[1200px] max-md:mt-10 max-md:max-w-full"
      aria-labelledby="quality-health"
    >
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full text-base text-zinc-800 max-md:mt-10 max-md:max-w-full">
            <h2
              id="quality-health"
              className="self-start text-5xl font-bold text-blue-700 max-md:text-4xl"
            >
              <span className="text-zinc-800">The Future </span>
              <br />
              <span className="text-zinc-800">of </span>
              <span className="text-blue-700">Quality Health</span>
            </h2>
            <p className="mt-2.5 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
              feugiat lectus risus sed ullamcorper. Auctor semper fermentum
              volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed.
              Nibh est sit lobortis id semper.
            </p>
            <p className="mt-3.5 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
              feugiat lectus risus sed ullamcorper. sed. Nibh est sit lobortis
              id semper.
            </p>
            <button className="flex gap-2.5 self-start mt-7 font-medium text-blue-700">
              <span>Learn More</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb2e5e23e03ae84c082bce010ac66412690a10ddd5ae9c6cfaefe74a5185f524?placeholderIfAbsent=true&apiKey=db395f39bd3c4701b0287a0a79b559c3"
                className="object-contain shrink-0 my-auto w-3.5 aspect-[1.17]"
                alt="Arrow right"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/566eec6a7cad5f9eb7823969b8d80250e41d67f916e22388428842c313f514e5?placeholderIfAbsent=true&apiKey=db395f39bd3c4701b0287a0a79b559c3"
            className="object-contain grow w-full rounded-3xl aspect-[1.45] max-md:mt-10 max-md:max-w-full"
            alt="Quality health illustration"
          />
        </div>
      </div>
    </section>
  );
}
