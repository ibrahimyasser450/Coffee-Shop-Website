import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SellingCoffee() {
  return (
    <>
      <div className="py-20" id="selling">
        {/* ****************** */}
        <div className="grid md:grid-cols-6 text-center md:py-16">
          <div className="md:col-start-2 col-span-4" data-aos="fade-up">
            <h1 className="md:text-5xl text-3xl font-bold">
              Best Selling Coffee
            </h1>
            <p className="py-4 md:w-2/4 mx-auto text-gray-500 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              dolore quias repellat, rerum molestias, doloribus, quae quos quod
              quibusdam quidem quia.
            </p>
          </div>
        </div>
        {/* ****************** */}
        <div className="container md:pb-10 py-20 px-2 md:pt-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-11/12 mx-auto">
            {/* ****************** */}
            <div
              className="shadow-lg hover:shadow-xl rounded-lg cursor-pointer px-8 md:px-8 py-8 hover:scale-105 transition-all relative"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out-back"
            >
              {/* ****************** */}
              <div className="grid grid-cols-2 gap-6 items-end">
                <Image
                  src="/coffee/mid1.png"
                  alt=""
                  width={280}
                  height={280}
                  className="absolute -right-8 bottom-80 md:bottom-64 w-2/3"
                />
                <div className="">
                  <p className="text-gray-500 text-lg">#1 Selling</p>
                  <h1 className="text-3xl py-2 font-semibold text-gray-700">
                    Double Espresso
                  </h1>
                </div>
              </div>
              {/* ****************** */}
              <p className="py-3 text-gray-500 text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
                excepturi veniam reprehenderit nemo deleniti vel, atque
                consequatur labore dolor obcaecati!
              </p>
              {/* ****************** */}
              <div className="grid md:grid-cols-2 gap-6 items-center py-2">
                <h1 className="text-2xl font-semibold">$ 59.99</h1>
                <Button className="p-6 px-10 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                  Order Now
                </Button>
              </div>
            </div>
            {/* ****************** */}
            <div
              className="shadow-lg hover:shadow-xl rounded-lg cursor-pointer px-8 md:px-8 py-8 hover:scale-105 transition-all relative"
              data-aos="fade-right"
              data-aos-duration="1400"
              data-aos-easing="ease-in-out-back"
            >
              {/* ****************** */}
              <div className="grid grid-cols-2 gap-6 items-end">
                <Image
                  src="/coffee/mid1.png"
                  alt=""
                  width={280}
                  height={280}
                  className="absolute -right-8 bottom-80 md:bottom-64 w-2/3"
                />
                <div className="">
                  <p className="text-gray-500 text-lg">#1 Selling</p>
                  <h1 className="text-3xl py-2 font-semibold text-gray-700">
                    Double Espresso
                  </h1>
                </div>
              </div>
              {/* ****************** */}
              <p className="py-3 text-gray-500 text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
                excepturi veniam reprehenderit nemo deleniti vel, atque
                consequatur labore dolor obcaecati!
              </p>
              {/* ****************** */}
              <div className="grid md:grid-cols-2 gap-6 items-center py-2">
                <h1 className="text-2xl font-semibold">$ 59.99</h1>
                <Button className="p-6 px-10 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                  Order Now
                </Button>
              </div>
            </div>
            {/* ****************** */}
            <div
              className="shadow-lg hover:shadow-xl rounded-lg cursor-pointer px-8 md:px-8 py-8 hover:scale-105 transition-all relative"
              data-aos="fade-right"
              data-aos-duration="1600"
              data-aos-easing="ease-in-out-back"
            >
              {/* ****************** */}
              <div className="grid grid-cols-2 gap-6 items-end">
                <Image
                  src="/coffee/mid1.png"
                  alt=""
                  width={280}
                  height={280}
                  className="absolute -right-8 bottom-80 md:bottom-64 w-2/3"
                />
                <div className="">
                  <p className="text-gray-500 text-lg">#1 Selling</p>
                  <h1 className="text-3xl py-2 font-semibold text-gray-700">
                    Double Espresso
                  </h1>
                </div>
              </div>
              {/* ****************** */}
              <p className="py-3 text-gray-500 text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
                excepturi veniam reprehenderit nemo deleniti vel, atque
                consequatur labore dolor obcaecati!
              </p>
              {/* ****************** */}
              <div className="grid md:grid-cols-2 gap- items-center py-2">
                <h1 className="text-2xl font-semibold">$ 59.99</h1>
                <Button className="p-6 px-10 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
