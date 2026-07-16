import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function OrderCoffee() {
  return (
    <>
      <div id="order" className="bg-gray-100 md:py-16 md:my-10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
            <div className="" data-aos="fade-down" data-aos-duration="1400">
              <Image
                src="/coffee/coffee-mid.png"
                alt=""
                width={600}
                height={600}
                className="object-cover md:w-full"
              />
            </div>
            <div
              className="md:pe-40 py-10 md:py-0"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <h1 className="text-3xl md:text-5xl font-bold">
                Order Your Favorite Coffee
              </h1>
              <p className="text-gray-500 text-lg py-4 md:py-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
                consequuntur. Unde accusamus sed beatae voluptatem. Ab
                consectetur consequuntur dicta nostrum expedita, voluptates in
                obcaecati labore.
              </p>
              <Button className="p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
