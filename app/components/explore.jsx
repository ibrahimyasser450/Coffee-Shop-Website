import { Button } from "@/components/ui/button";
import Image from "next/image";

Image;
export default function Explore() {
  return (
    <>
      <div id="explore">
        <div className="container py-20">
          {/* ****************** */}
          <div className="grid md:grid-cols-6 text-center md:py-16">
            <div className="md:col-start-2 col-span-4" data-aos="fade-up">
              <h1 className="md:text-5xl text-3xl font-bold">
                Explore Our Alowishus
              </h1>
              <p className="py-4 md:w-2/4 mx-auto text-gray-500 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                dolore quias repellat, rerum molestias, doloribus, quae quos
                quod quibusdam quidem quia.
              </p>
            </div>
          </div>
          {/* ****************** */}
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:gap-10 md:w-4/5 mx-auto">
            <div
              className="shadow-lg hover:shadow-xl rounded-lg cursor-pointer px-6 py-10 hover:scale-105 transition-all"
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out-back"
            >
              <h1 className="text-3xl text-gray-700 font-semibold">
                Our Catering
              </h1>
              <p className="py-2 text-gray-500 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="text-center">
                <Image
                  src="/coffee/icon1.png"
                  alt=""
                  width={200}
                  height={200}
                  className="py-6"
                />
                <Button className="p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                  Order Catering
                </Button>
              </div>
            </div>
            <div
              className="shadow-lg hover:shadow-xl rounded-lg cursor-pointer px-6 py-10 hover:scale-105 transition-all"
              data-aos="fade-left"
              data-aos-duration="1400"
              data-aos-easing="ease-in-out-back"
            >
              <h1 className="text-3xl text-gray-700 font-semibold">The Food</h1>
              <p className="py-2 text-gray-500 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="text-center">
                <Image
                  src="/coffee/icon2.png"
                  alt=""
                  width={200}
                  height={200}
                  className="py-6"
                />
                <Button className="p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                  Food Menu
                </Button>
              </div>
            </div>
            <div
              className="shadow-lg hover:shadow-xl rounded-lg cursor-pointer px-6 py-10 hover:scale-105 transition-all"
              data-aos="fade-left"
              data-aos-duration="1600"
              data-aos-easing="ease-in-out-back"
            >
              <h1 className="text-3xl text-gray-700 font-semibold">
                The Gelato
              </h1>
              <p className="py-2 text-gray-500 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="text-center">
                <Image
                  src="/coffee/icon3.png"
                  alt=""
                  width={200}
                  height={200}
                  className="py-6"
                />
                <Button className="p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                  Discover More
                </Button>
              </div>
            </div>
          </div>
          {/* ****************** */}
        </div>
      </div>
    </>
  );
}
