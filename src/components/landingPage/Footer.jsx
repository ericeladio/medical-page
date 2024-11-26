import * as React from "react";

export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center px-20 pt-24 pb-6 mt-36 w-full bg-blue-700 max-md:px-5 max-md:mt-10 max-md:max-w-full"
      role="contentinfo"
    >
      <div className="flex flex-col w-full max-w-[1202px] max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start text-white max-md:mt-10">
                <div className="text-2xl font-semibold">E-sheba</div>
                <p className="self-stretch mt-8 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec
                  risus feugiat lectus risus sed ullamcorper. Auctor semper
                  fermentum
                  <br />
                  <br />
                  volutpat integer vel. In rhoncus elementum nunc, malesuada mi
                  sed. Nibh est sit lobortis id semper.
                </p>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bff9bdad2e8f5ae57b82fda1b4b396f00a2ffda6e2c54fd1e5ddc60087eae17?placeholderIfAbsent=true&apiKey=db395f39bd3c4701b0287a0a79b559c3"
                  className="object-contain mt-5 aspect-[4.5] w-[72px]"
                  alt="Social media icons"
                />
              </div>
            </div>
            <nav
              className="flex flex-col ml-5 w-[16%] max-md:ml-0 max-md:w-full"
              aria-label="Footer navigation"
            >
              <div className="flex flex-col items-start text-base font-medium text-white max-md:mt-10">
                <h3 className="self-stretch text-2xl font-semibold">
                  Useful Links
                </h3>
                <a href="#about" className="mt-8">
                  About Us
                </a>
                <a href="#privacy" className="mt-1.5">
                  Privacy Policy
                </a>
                <a href="#mission" className="mt-1.5">
                  Our Mission
                </a>
                <a href="#team" className="mt-1.5">
                  Our Team
                </a>
              </div>
            </nav>
            <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-2xl font-semibold text-white whitespace-nowrap max-md:mt-10">
                <h3 className="self-start">Address</h3>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f402370b72c24e9ab46ce44376018e8b6fd226fd4a1fa000450f22a71bfa13b8?placeholderIfAbsent=true&apiKey=db395f39bd3c4701b0287a0a79b559c3"
                  className="object-contain mt-8 w-full rounded-xl aspect-[2.29]"
                  alt="Location map"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-20 w-full border-t border-white/20 max-md:mt-10 max-md:max-w-full" />
        <div className="flex gap-1 self-center mt-6 max-w-full text-base text-center text-white w-[189px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6dd70f0fc9ffde8755ee97855b48c33f7e3161acc72725d785540ee3b977bcd0?placeholderIfAbsent=true&apiKey=db395f39bd3c4701b0287a0a79b559c3"
            className="object-contain shrink-0 my-auto w-3.5 aspect-square"
            alt="Copyright icon"
          />
          <p className="grow shrink w-[168px]">2022 All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
}
