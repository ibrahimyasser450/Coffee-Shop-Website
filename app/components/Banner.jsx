"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";

import { Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";

export default function Banner() {
  return (
    <>
      <div className="bg-gray-100">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="cursor-pointer">
            <div className="container md:pt-20 md:pb-16 ">
              {/* ****************** */}
              <div className="grid md:grid-cols-2">
                {/* ****************** */}
                <div className="relative">
                  {/* ****************** */}
                  <h1
                    className="text-5xl md:text-8xl font-bold py-4"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  >
                    Alowishus Delicious Coffee
                  </h1>
                  <p
                    className="py-4"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Debitis fuga incidunt dicta inventore natus aut? Voluptates
                    cupiditate doloremque asperiores? Dolore doloremque
                    reprehenderit libero iste, sequi impedit ratione nam sint
                    atque!
                  </p>
                  {/* ****************** */}
                  <div className="md:flex gap-4 py-6 grid">
                    <Button
                      className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide"
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                    >
                      Download App
                    </Button>
                    <Button
                      className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                      variant="outline"
                    >
                      Shop Coffee
                    </Button>
                  </div>
                  {/* ****************** */}
                </div>
                {/* ****************** */}
                <div className="py-10 md:py-0" data-aos="fade-left">
                  <Image
                    src="/coffee/hero.png"
                    alt=""
                    width={600}
                    height={600}
                  />
                </div>
                {/* ****************** */}
              </div>
              {/* ****************** */}
            </div>
          </SwiperSlide>
          {/* *************************************/}

          <SwiperSlide className="cursor-pointer">
            <div className="container md:pt-20 md:pb-16 ">
              {/* ****************** */}
              <div className="grid md:grid-cols-2">
                {/* ****************** */}
                <div className="relative">
                  {/* ****************** */}
                  <h1 className="text-5xl md:text-8xl font-bold py-4">
                    Alowishus Delicious Coffee
                  </h1>
                  <div className="absolute top-56 mt-1 right-64 md:flex hidden">
                    <Image
                      src="/coffee/cafe.png"
                      alt=""
                      width={80}
                      height={80}
                    />
                  </div>
                  <p className="py-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Debitis fuga incidunt dicta inventore natus aut? Voluptates
                    cupiditate doloremque asperiores? Dolore doloremque
                    reprehenderit libero iste, sequi impedit ratione nam sint
                    atque!
                  </p>
                  {/* ****************** */}
                  <div className="md:flex gap-4 py-6 grid">
                    <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                      Download App
                    </Button>
                    <Button
                      className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide"
                      variant="outline"
                    >
                      Shop Coffee
                    </Button>
                  </div>
                  {/* ****************** */}
                </div>
                {/* ****************** */}
                <div className="py-10 md:py-0">
                  <Image
                    src="/coffee/coffee-mid.png"
                    alt=""
                    width={1000}
                    height={1000}
                  />
                </div>
                {/* ****************** */}
              </div>
              {/* ****************** */}
            </div>
          </SwiperSlide>
          {/* *************************************/}

          <SwiperSlide className="cursor-pointer">
            <div className="container md:pt-20 md:pb-16 ">
              {/* ****************** */}
              <div className="grid md:grid-cols-2">
                {/* ****************** */}
                <div className="relative">
                  {/* ****************** */}
                  <h1 className="text-5xl md:text-8xl font-bold py-4">
                    Alowishus Delicious Coffee
                  </h1>
                  <div className="absolute top-56 mt-1 right-64 md:flex hidden">
                    <Image
                      src="/coffee/cafe.png"
                      alt=""
                      width={80}
                      height={80}
                    />
                  </div>
                  <p className="py-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Debitis fuga incidunt dicta inventore natus aut? Voluptates
                    cupiditate doloremque asperiores? Dolore doloremque
                    reprehenderit libero iste, sequi impedit ratione nam sint
                    atque!
                  </p>
                  {/* ****************** */}
                  <div className="md:flex gap-4 py-6 grid">
                    <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                      Download App
                    </Button>
                    <Button
                      className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide"
                      variant="outline"
                    >
                      Shop Coffee
                    </Button>
                  </div>
                  {/* ****************** */}
                </div>
                {/* ****************** */}
                <div className="py-10 md:py-0">
                  <Image
                    src="/coffee/alowishus-coffee.png"
                    alt=""
                    width={600}
                    height={600}
                  />
                </div>
                {/* ****************** */}
              </div>
              {/* ****************** */}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
