import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-gray-100 md:py-16 md:my-10">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
          {/* Image */}
          <div
            className="order-2 md:order-1"
            data-aos="fade-right"
            data-aos-duration="1400"
            data-aos-easing="ease-in-out"
          >
            <Image
              src="/coffee/hero.png"
              alt="About our coffee"
              width={600}
              height={600}
              className="object-cover rounded-2xl"
            />
          </div>

          {/* Content */}
          <div
            className="order-1 md:order-2 md:pe-20 py-10"
            data-aos="fade-left"
            data-aos-duration="1400"
            data-aos-easing="ease-in-out"
          >
            <h1 className="text-3xl md:text-5xl font-bold">
              About Our Coffee Shop
            </h1>

            <p className="text-gray-500 text-lg py-4 md:py-8">
              We believe every cup of coffee tells a story. Our mission is to
              provide high-quality coffee made from carefully selected beans and
              delivered with passion.
            </p>

            <p className="text-gray-500 text-lg">
              From the first sip in the morning to relaxing moments with
              friends, we create coffee experiences that bring people together.
            </p>

            <div className="grid grid-cols-3 gap-5 mt-8">
              <div>
                <h2 className="text-3xl font-bold">10+</h2>
                <p className="text-gray-500">Years Experience</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">50+</h2>
                <p className="text-gray-500">Coffee Types</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">5K+</h2>
                <p className="text-gray-500">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
