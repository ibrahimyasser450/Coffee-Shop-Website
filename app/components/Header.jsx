"use client";
import Image from "next/image";

import { useState } from "react";
import { Button, Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";
import NavLink from "./Nav/NavLink";
import DialogLink from "./Dialog/DialogLink";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-100">
      <header className="fixed top-0 z-50 bg-gray-800 bg-opacity-50 w-full border-b border-black">
        <nav
          aria-label="Global"
          className="mx-auto flex items-center justify-between py-6 container"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                src="/coffee/logo.png"
                className="h-8 w-auto"
                width={120}
                height={80}
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <PopoverGroup className="hidden ml-28 lg:flex lg:gap-x-9">
            <NavLink
              href="#"
              dataAos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-back"
            >
              Cafe Menu
            </NavLink>
            <NavLink
              href="#about"
              dataAos="fade-left"
              data-aos-duration="1200"
              data-aos-easing="ease-in-out-back"
            >
              About Us
            </NavLink>
            <NavLink
              href="#order"
              dataAos="fade-left"
              data-aos-duration="1400"
              data-aos-easing="ease-in-out-back"
            >
              Order Coffee
            </NavLink>
            <NavLink
              href="#explore"
              dataAos="fade-left"
              data-aos-duration="1600"
              data-aos-easing="ease-in-out-back"
            >
              Explore Our App
            </NavLink>
            <NavLink
              href="#selling"
              dataAos="fade-left"
              data-aos-duration="1800"
              data-aos-easing="ease-in-out-back"
            >
              Best Coffee
            </NavLink>
          </PopoverGroup>
          <div
            className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-5"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out-back"
          >
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              <ShoppingBagIcon
                width={35}
                className="bg-gray-50 hover:bg-gray-100 p-2 rounded-full shadow-lg shadow-gray-300 hover:cursor-pointer hover:scale-105 transition-all"
              />
            </a>
            <Button className="bg-gray-900 text-white p-3 rounded-md shadow-lg hover:scale-105 transition-all hover:bg-gray-900">
              Buy Gift Vouchers
            </Button>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  alt=""
                  src="/coffee/logo.png"
                  className="h-8 w-auto"
                  width={120}
                  height={80}
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <DialogLink href="#">Cafe Menu</DialogLink>
                  <DialogLink href="#">About Us</DialogLink>
                  <DialogLink href="#order">Order Coffee</DialogLink>
                  <DialogLink href="#explore">Explore Our App</DialogLink>
                  <DialogLink href="#selling">Best Coffee</DialogLink>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
