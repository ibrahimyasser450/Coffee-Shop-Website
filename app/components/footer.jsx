import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
          <div className="p-5 sm:w-8/12">
            <Image
              alt=""
              src="/coffee/logo.png"
              className="h-8 w-auto"
              width={150}
              height={80}
            />

            <div className="flex grid uppercase gap-2 md:gap-8 pt-8">
              <a
                href="#"
                className="text-lg font-medium text-gray-900"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-back"
              >
                Cafe Menu
              </a>
              <a
                href="#"
                className="text-lg font-medium text-gray-900"
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-easing="ease-in-out-back"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-lg font-medium text-gray-900"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out-back"
              >
                Find Us
              </a>
              <a
                href="#"
                className="text-lg font-medium text-gray-900"
                data-aos="fade-up"
                data-aos-duration="1300"
                data-aos-easing="ease-in-out-back"
              >
                Alowishus Catering
              </a>
            </div>
          </div>
          <div className="p-5 sm:w-4/12">
            <h3 className="font-medium text-lg text-gray-900 mb-4">
              Subscribe to our Newsletter
            </h3>
            <form className="mt-4">
              <input
                className="border rounded w-full px-4 py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="username@email.com"
              />
            </form>
          </div>
        </div>
        <div className="flex py-5 px-3 md:px-0 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
          <p>© Copyright 2024 IbrahimYasser. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}
