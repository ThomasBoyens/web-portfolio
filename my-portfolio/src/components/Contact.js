import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto bg-gray-50 px-8 py-28 md:flex-row flex-col">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:text-left mb-16 md:mb-0 ">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-800">
            Contact
            {/* Hi, I'm Thomas. */}
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed pt-4 text-gray-500 font-medium">
             Thomas Boyens<br></br>

            {/* Result-driven IT student at AP Hogeschool. I am based in Antwerp, Belgium. I am a quick learner who constantly strives to learn new technologies. */}
          </p>
        </div>
      </div>
    </section>
  );
}