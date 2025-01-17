"use client";

export default function Autocuidarse() {
  return (
    <section className="pb-8 pt-12 max-w-[960px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="">
          <p className="text-[1rem] sm:text-[1.2rem] leading-tight text-[#444] text-l py-4 text-center max-w-2xl mx-auto">
            Hoy quiero darte la bienvenida a…
          </p>
          <h2 className="text-[2rem] sm:text-[2.5rem] text-[#444] leading-tight text-center">
            ✨ Deshincharse 50+ ✨
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="flex items-start space-x-4">
            <img src="/autocuidarse.png" className=" md:max-w-xl" />
          </div>
        </div>
        <p className="hidden sm:block tracking-wider text-xl py-4 mt-4 text-center text-gray-600  max-w-2xl mx-auto">
          Son mis más de 25 años trabajando con <br /> mujeres, comprimidos en
          una{" "}
          <span className="font-bold">
            metodología de <br /> alimentación paso a paso
          </span>
          , para que logres <br /> deshincharte, recuperar tu energía y vivir
          tus 50+ <br />
          con equilibrio. 💛
        </p>
        <p className="sm:hidden text-25anios tracking-wider text-xl py-4 mt-4 text-center text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Son mis más de 25 años trabajando con mujeres, comprimidos en una{" "}
          <span className="font-bold">
            metodología de alimentación paso a paso,
          </span>
          para que logres deshincharte, recuperar tu energía y vivir tus 50+ con
          equilibrio. 💛
        </p>
      </div>
    </section>
  );
}
