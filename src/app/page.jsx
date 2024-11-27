"use client";

import * as React from "react";
import Header from "../components/landingPage/Header";
import Hero from "../components/landingPage/Hero";
import Stats from "../components/landingPage/Stats";
import Specialists from "../components/landingPage/Specialists";
import WhyChooseUs from "../components/landingPage/WhyChooseUs";
import Testimonials from "../components/landingPage/Testimonials";
import QualityHealth from "../components/landingPage/QualityHealth";
import Newsletter from "../components/landingPage/Newsletter";
import Footer from "../components/landingPage/Footer";

export default function LandingPage() {
  return (
    <div className="flex overflow-hidden flex-col  bg-white">
      <Header />
      <Hero />
      <Stats />
      <Specialists />
      <WhyChooseUs />
      <Testimonials />
      <QualityHealth />
      <Newsletter />
      <Footer />
    </div>
  );
}
