import * as React from "react";

export default function Hero() {
  return (
    <section className="pt-10 max-md:mt-10 max-md:max-w-full bg-secondary" role="banner" >
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full ml-10 mt-10">
          <div className="flex z-10  grow-2 flex-col w-full text-base text-black max-md:mr-0 max-md:max-w-full">
            <h1 className="text-6xl font-medium max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
              <span className="font-bold text-slate-900">
                Find & Search Your
              </span>
              <span className="font-bold text-blue-700">Favourite</span>{" "}
              <span className="font-bold text-slate-900">Doctor</span>
            </h1>
            <p className="mt-5 text-sky-950 w-[419px]">
              We're committed to Your Health, Our Priority. From preventive care to advanced treatments
            </p>
            <div className="flex flex-wrap py-7 pl-9 my-10 w-full bg-white rounded-[50px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-3">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/16d793d9ddb71af0a63947f9c32ab151472254a78ec52c56ecdb50fa4c474a51?placeholderIfAbsent=true&apiKey=db395f39bd3c4701b0287a0a79b559c3"
                  className="object-contain shrink-0 self-start mt-1 w-4 aspect-square"
                  alt="Doctor icon"
                />
                <div className="basis-auto">Doctor's Name</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/006b247e927e071540eea83427dd251e304b26ba6e47ccfbece29d806fc9cedd?placeholderIfAbsent=true&apiKey=db395f39bd3c4701b0287a0a79b559c3"
                  className="object-contain shrink-0 my-auto aspect-[1.8] w-[9px]"
                  alt="Dropdown arrow"
                />
              </div>
              <div className="flex gap-2.5 whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc8c42197e10df4ef22df77043612f64ce63e3a27fa1ee16d258e2b6cc1408e7?placeholderIfAbsent=true&apiKey=db395f39bd3c4701b0287a0a79b559c3"
                  className="object-contain shrink-0 self-start mt-1 w-4 aspect-square"
                  alt="Location icon"
                />
                <div>Location</div>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full  bg-img-doctor bg-no-repeat bg-potion-doctor bg-[length:586px_270px] ">
          <img
            loading="lazy"
            src="doctor.png"
            className="  z-20 absolute  object-cover transform -translate-y-5 right-16 h-[600px]  aspect-[2] max-md:mt-10 max-md:max-w-full"
            alt="Hero illustration"
          />
        </div>
      </div>
    </section>
  );
}
