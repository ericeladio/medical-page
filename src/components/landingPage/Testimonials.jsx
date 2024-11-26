import * as React from "react";

export default function Testimonials() {
  return (
    <section
      className="flex flex-col justify-center items-center px-16 py-40 mt-40 w-full bg-sky-100 max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full"
      aria-labelledby="testimonials-title"
    >
      <div className="mb-0 w-full max-w-[1200px] max-md:mb-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full text-base text-zinc-800 max-md:mt-10 max-md:max-w-full">
              <h2
                id="testimonials-title"
                className="text-5xl font-bold max-md:max-w-full max-md:text-4xl"
              >
                <span className="text-slate-900">What </span>
                <span className="text-blue-700">Our Member's</span>
                <br />
                <span className="text-slate-900">Saying About Us</span>
              </h2>
              <p className="mt-6 mr-6 max-md:mr-2.5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                velit viverra amet faucibus.
              </p>
              <div className="flex gap-7 self-start mt-9 font-semibold">
                <div
                  className="flex shrink-0 w-56 rounded-full h-[52px]"
                  role="img"
                  aria-label="Reviews illustration"
                />
                <div className="my-auto basis-auto">100+ Reviews</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
            <article className="flex flex-col px-14 py-16 mx-auto w-full bg-white rounded-3xl border border-solid border-neutral-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-wrap gap-5 justify-between w-full max-md:mr-1 max-md:max-w-full">
                <div className="flex gap-5 text-zinc-800">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/82e42031d76a5cd1c5f4b47a3199176cbdcc2807b560700ef70312411a15e30a?placeholderIfAbsent=true&apiKey=db395f39bd3c4701b0287a0a79b559c3"
                    className="object-contain shrink-0 rounded-full aspect-square w-[52px]"
                    alt="Jane Cooper profile"
                  />
                  <div className="flex flex-col my-auto">
                    <div className="text-base font-semibold">Jane Cooper</div>
                    <time className="self-start text-xs">12/4/17</time>
                  </div>
                </div>
                <div
                  className="flex gap-2 my-auto"
                  role="group"
                  aria-label="5 star rating"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <img
                      key={star}
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/be13017220164ee60d63707dd0beec98cde393c7d3823fa796c162c380402aed?placeholderIfAbsent=true&apiKey=db395f39bd3c4701b0287a0a79b559c3"
                      className="object-contain shrink-0 w-8 rounded-sm aspect-[1.03]"
                      alt="Star"
                    />
                  ))}
                </div>
              </div>
              <p className="mt-11 text-base text-zinc-800 max-md:mt-10 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                velit viverra amet faucibus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sem velit viverra amet faucibus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                velit viverra amet faucibus.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
