import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function InstantCoffee() {
  return (
    <>
      <div className="bg-gray-100 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 md:gap-20 gap-8 items-center">
            <div
              className="order-2 flex relative mx-auto mb-10 mr-20 md:mr-44"
              data-aos="fade-left"
              data-aos-duration="1400"
              data-aos-easing="ease-in-out"
            >
              <Image
                src="/coffee/coffee-banner.png"
                alt=""
                width={250}
                height={250}
                className="border-2 border-gray-100 rounded-2xl absolute top-0 md:left-20 left-14 z-20 w-[9rem] md:w-[16rem]"
              />
              <Image
                src="/coffee/coffee-banner.png"
                alt=""
                width={250}
                height={250}
                className="border-2 border-gray-100 rounded-2xl -rotate-12 z-10 w-[9rem] md:w-[16rem]"
              />
              <img
                src="/coffee/hand-drawn.png"
                alt=""
                className="absolute top-20 md:-left-16 -left-3 md:max-w-md max-w-56"
              />
            </div>
            <div
              className="order-1 md:ps-40 py-10"
              data-aos="fade-right"
              data-aos-duration="1400"
              data-aos-easing="ease-in-out"
            >
              <h1 className="text-3xl md:text-5xl font-bold">
                Instant Coffee At Your Home
              </h1>
              <p className="text-gray-500 text-lg py-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                consequuntur. Unde accusamus sed beatae voluptatem. Ab
                consectetur consequuntur dicta nostrum expedita, voluptates in
                obcaecati labore.
              </p>
              <Button className="p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                Download Our App
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
