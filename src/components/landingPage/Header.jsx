import * as React from "react";

export default function Header() {
  return (
    <nav
      className="flex flex-col self-end w-full max-w-[1320px] max-md:max-w-full"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex gap-10 items-center w-full text-xl max-w-[1200px] max-md:max-w-full">
        <div className="grow shrink self-stretch my-auto text-3xl font-bold text-zinc-800 w-[99px]">
          <span className="text-slate-900">E-</span>
          <span className="text-blue-700">sheba</span>
        </div>
        <div className="flex gap-7 self-stretch my-auto whitespace-nowrap text-sky-950">
          <a href="#home" className="grow font-medium text-blue-700">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#application" className="basis-auto">
            Application
          </a>
          <a href="#history">History</a>
        </div>
        <div className="flex gap-5 self-stretch font-semibold">
          <button className="px-9 py-3.5 text-blue-700 border border-blue-700 border-solid rounded-[50px] max-md:px-5">
            Log in
          </button>
          <button className="px-7 py-3.5 text-white bg-blue-700 rounded-[50px] max-md:px-5">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}
