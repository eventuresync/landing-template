'use client';

export default function Autocuidarse() {
  return (
    <section className="pb-16 pt-8 max-w-[960px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="">
          <h2 className="text-xl md:text-2xl font-black text-center mb-2">
            Pues tengo buenas noticias: esa metodología <br/>
            que estabas buscando ya existe.
          </h2>
          <p className="text-l py-4 text-center text-gray-600  max-w-2xl mx-auto">
            Y hoy quiero darte la bienvenida a…
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-center">
            ✨ Autocuidarse 50+ ✨
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="flex items-start space-x-4">
            <img src="/autocuidarse.png" className=" md:max-w-xl" />
          </div>
        </div>
        <p className="text-l py-4 text-center text-gray-600  max-w-2xl mx-auto">
        He volcado mis 25 años trabajando con mujeres, junto con mi conocimiento en nutrición energética y cambio de hábitos, en una <span className="font-bold">metodología</span> amable y eficiente, pensada para esta etapa de la vida. Para ayudarte a recuperar tu energía, sentirte bien en tu piel y vivir tus 50+ con equilibrio. 💛
        </p>
      </div>
    </section>
  );
}
