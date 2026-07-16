"use client";
import { useEffect } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Explore from "./components/explore";
import OrderCoffee from "./components/OrderCoffee";
import SellingCoffee from "./components/SellingCoffee";
import InstantCoffee from "./components/InstantCoffee";
import Testimonial from "./components/Testimonial";
import Footer from "./components/footer";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <Explore />
      <OrderCoffee />
      <SellingCoffee />
      <InstantCoffee />
      <Testimonial />
      <About />
      <Footer />
    </>
  );
}
