import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-50 top-0 z-10">
      <div className="container mx-auto px-5 flex flex-wrap flex-col md:flex-row items-center">
        <a className="title-font font-sans font-medium pt-3 pb-4 mb-4 md:mb-0">
          <a className="ml-3 text-2xl text-gray-800">
            Thomas Boyens
          </a>
        </a>
        <a className="md:mr-auto md:ml-1 md:py-1 md:pl-4 	flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 font-sans text-gray-400 uppercase pt-1 text-sm">
            IT Student
          </a>
        </a>
      </div>
    </header>
  );
}