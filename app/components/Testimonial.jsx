"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode } from "swiper/modules";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonial() {
  return (
    <>
      <div className="container py-20 px-4">
        <div className="grid md:grid-cols-6 text-center md:py-10">
          <div
            className="col-start-2 col-span-4"
            data-aos="fade-down"
            data-aos-duration="1200"
          >
            <h1 className="text-3xl md:text-5xl font-bold">
              Client Testimonials
            </h1>
            <p className="py-4 md:w-2/4 mx-auto text-gray-500 text-lg mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              dolore quias repellat, rerum molestias, doloribus, quae quos quod
              quibusdam quidem quia.
            </p>
            {/* ****************** */}
            <div className="mt-2 flex items-center justify-center gap-x-6">
              <div className="hidden sm:block -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                  alt=""
                />
              </div>
              <div className="sm:border-l-2 border-black sm:pl-8">
                <div className="flex justify-center sm:justify-start items-center">
                  <h3 className="text-2xl font-semibold mr-2">4.6</h3>
                  <Star width={20} className="text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-sm">Rated by 25k on google.</h3>
                </div>
              </div>
            </div>
            {/* ****************** */}
          </div>
        </div>
        <div className="md:flex hidden">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div
                className="rounded-md bg-white dark:bg-gray-800 shadow-md hover:shadow-xl duration-500 md:m-7 cursor-pointer hover:scale-105 transition-all"
                data-aos="fade-left"
                data-aos-duration="1400"
                data-aos-easing="ease-in-out-back"
              >
                <div className="bg-gray-200">
                  <Image
                    src="/coffee/girl1.png"
                    alt="Person"
                    width={320}
                    height={320}
                    className="rounded-t-md object-cover mx-auto"
                  />
                </div>
                <div className="p-7">
                  <div className="grid grid-cols-2 items-center gap-3">
                    <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                      About Macbook
                    </h1>
                    <div className="flex gap-1">
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                    </div>
                  </div>

                  <p className="text-gray-500 text-lg pt-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, consequuntur. Unde accusamus sed beatae voluptatem.
                    Ab consectetur consequuntur dicta nostrum expedita,
                    voluptates in obcaecati labore.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="rounded-md bg-white dark:bg-gray-800 shadow-md hover:shadow-xl duration-500 md:m-7 cursor-pointer hover:scale-105 transition-all"
                data-aos="fade-left"
                data-aos-duration="1600"
                data-aos-easing="ease-in-out-back"
              >
                <div className="bg-gray-200">
                  <Image
                    src="/coffee/girl2.png"
                    alt="Person"
                    width={320}
                    height={320}
                    className="rounded-t-md object-cover mx-auto"
                  />
                </div>
                <div className="p-7">
                  <div className="grid grid-cols-2 items-center gap-3">
                    <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                      About Macbook
                    </h1>
                    <div className="flex gap-1">
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                    </div>
                  </div>

                  <p className="text-gray-500 text-lg pt-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, consequuntur. Unde accusamus sed beatae voluptatem.
                    Ab consectetur consequuntur dicta nostrum expedita,
                    voluptates in obcaecati labore.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="rounded-md bg-white dark:bg-gray-800 shadow-md hover:shadow-xl duration-500 md:m-7 cursor-pointer hover:scale-105 transition-all"
                data-aos="fade-left"
                data-aos-duration="1800"
                data-aos-easing="ease-in-out-back"
              >
                <div className="bg-gray-200">
                  <Image
                    src="/coffee/man.png"
                    alt="Person"
                    width={320}
                    height={320}
                    className="rounded-t-md object-cover mx-auto"
                  />
                </div>
                <div className="p-7">
                  <div className="grid grid-cols-2 items-center gap-3">
                    <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                      About Macbook
                    </h1>
                    <div className="flex gap-1">
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                    </div>
                  </div>

                  <p className="text-gray-500 text-lg pt-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, consequuntur. Unde accusamus sed beatae voluptatem.
                    Ab consectetur consequuntur dicta nostrum expedita,
                    voluptates in obcaecati labore.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md bg-white dark:bg-gray-800 shadow-md hover:shadow-xl duration-500 md:m-7 cursor-pointer hover:scale-105 transition-all">
                <div className="bg-gray-200">
                  <Image
                    src="/coffee/girl1.png"
                    alt="Person"
                    width={320}
                    height={320}
                    className="rounded-t-md object-cover mx-auto"
                  />
                </div>
                <div className="p-7">
                  <div className="grid grid-cols-2 items-center gap-3">
                    <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                      About Macbook
                    </h1>
                    <div className="flex gap-1">
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                    </div>
                  </div>

                  <p className="text-gray-500 text-lg pt-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, consequuntur. Unde accusamus sed beatae voluptatem.
                    Ab consectetur consequuntur dicta nostrum expedita,
                    voluptates in obcaecati labore.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* ************************ */}
        <div className="md:hidden flex mt-5">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div
                className="rounded-md bg-white dark:bg-gray-800 shadow-md hover:shadow-xl duration-500 md:m-7 cursor-pointer hover:scale-105 transition-all"
                data-aos="fade-left"
                data-aos-duration="1400"
                data-aos-easing="ease-in-out-back"
              >
                <div className="bg-gray-200">
                  <Image
                    src="/coffee/girl1.png"
                    alt="Person"
                    width={320}
                    height={320}
                    className="rounded-t-md object-cover mx-auto"
                  />
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 items-center gap-2">
                    <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                      About Macbook
                    </h1>
                    <div className="flex gap-1">
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                    </div>
                  </div>

                  <p className="text-gray-500 text-lg pt-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, consequuntur. Unde accusamus sed beatae voluptatem.
                    Ab consectetur consequuntur dicta nostrum expedita,
                    voluptates in obcaecati labore.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md bg-white dark:bg-gray-800 shadow-md hover:shadow-xl duration-500 md:m-7 cursor-pointer hover:scale-105 transition-all">
                <div className="bg-gray-200">
                  <Image
                    src="/coffee/girl1.png"
                    alt="Person"
                    width={320}
                    height={320}
                    className="rounded-t-md object-cover mx-auto"
                  />
                </div>
                <div className="p-7">
                  <div className="grid grid-cols-2 items-center gap-3">
                    <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                      About Macbook
                    </h1>
                    <div className="flex gap-1">
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                    </div>
                  </div>

                  <p className="text-gray-500 text-lg pt-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, consequuntur. Unde accusamus sed beatae voluptatem.
                    Ab consectetur consequuntur dicta nostrum expedita,
                    voluptates in obcaecati labore.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md bg-white dark:bg-gray-800 shadow-md hover:shadow-xl duration-500 md:m-7 cursor-pointer hover:scale-105 transition-all">
                <div className="bg-gray-200">
                  <Image
                    src="/coffee/girl1.png"
                    alt="Person"
                    width={320}
                    height={320}
                    className="rounded-t-md object-cover mx-auto"
                  />
                </div>
                <div className="p-7">
                  <div className="grid grid-cols-2 items-center gap-3">
                    <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                      About Macbook
                    </h1>
                    <div className="flex gap-1">
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                    </div>
                  </div>

                  <p className="text-gray-500 text-lg pt-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, consequuntur. Unde accusamus sed beatae voluptatem.
                    Ab consectetur consequuntur dicta nostrum expedita,
                    voluptates in obcaecati labore.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-md bg-white dark:bg-gray-800 shadow-md hover:shadow-xl duration-500 md:m-7 cursor-pointer hover:scale-105 transition-all">
                <div className="bg-gray-200">
                  <Image
                    src="/coffee/girl1.png"
                    alt="Person"
                    width={320}
                    height={320}
                    className="rounded-t-md object-cover mx-auto"
                  />
                </div>
                <div className="p-7">
                  <div className="grid grid-cols-2 items-center gap-3">
                    <h1 className="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-gray-100">
                      About Macbook
                    </h1>
                    <div className="flex gap-1">
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                      <Star width={20} className="text-yellow-500" />
                    </div>
                  </div>

                  <p className="text-gray-500 text-lg pt-6">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, consequuntur. Unde accusamus sed beatae voluptatem.
                    Ab consectetur consequuntur dicta nostrum expedita,
                    voluptates in obcaecati labore.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* ************************ */}
      </div>
    </>
  );
}
