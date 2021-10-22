import { breakStatement } from "@babel/types";
import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto  px-8 py-72 md:flex-row flex-col">
        <div className=" lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-800">
            > Hallo, Ik ben Thomas.
            {/* Hi, I'm Thomas. */}
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed pt-4 text-gray-500 font-medium">
             Mijn naam is Thomas Boyens. Ik ben een resultaatgerichte IT student <br></br>
             aan de AP Hogeschool Antwerpen. Hier volg ik een traject dat zich focust op <br></br> 
             business IT. Ik streef constant naar het leren van nieuwe technologieën <br></br>
              en leer heel snel dingen bij.
            {/* Result-driven IT student at AP Hogeschool. I am based in Antwerp, Belgium. I am a quick learner who constantly strives to learn new technologies. */}
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contacteer mij
            </a>
            {/* <a
              href="#contact"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Contacteer mij
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}