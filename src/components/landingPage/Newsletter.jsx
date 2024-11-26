import * as React from "react";

export default function Newsletter() {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <section
      className="flex flex-col justify-center items-center self-center px-20 py-24 mt-36 w-full bg-blue-700 rounded-3xl max-w-[1200px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
      aria-labelledby="newsletter-title"
    >
      <div className="flex flex-col max-w-full w-[956px]">
        <h2
          id="newsletter-title"
          className="self-center text-4xl font-semibold text-white max-md:max-w-full"
        >
          Subscribe To Our Newsletter
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-end px-20 py-4 mt-9 bg-white rounded-[150px] max-md:pl-5 max-md:max-w-full"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-4 border-none outline-none"
            aria-label="Email subscription"
            required
          />
          <button
            type="submit"
            className="flex shrink-0 w-14 h-14 bg-blue-700 rounded-full"
            aria-label="Subscribe"
          >
            <span className="sr-only">Subscribe to newsletter</span>
          </button>
        </form>
      </div>
    </section>
  );
}
