import React from "react";
import Hero from "../components/Hero";
import Booking from "../components/Booking";
import Plan from "../components/Plan";
import CarModel from "../components/CarModel";
import ChooseUs from "../components/ChooseUs";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Download from "../components/Download";
import { useRef } from "preact/hooks";

const Home = () => {
  const bookingRef = useRef(null);
  return (
    <div style={{ overflowY: "hidden" }}>
      <Hero bookingRef={bookingRef} />
      <Booking ref={bookingRef} />
      <Plan />
      <CarModel bookingRef={bookingRef} />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
    </div>
  );
};

export default Home;
