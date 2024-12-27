'use client';

export default function Autocuidarse() {
  return (
    <section className="pb-16 pt-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="">
          <h2 className="text-xl md:text-2xl font-black text-center mb-2">
            Pues tengo buenas noticias: esa metodología que estabas buscando ya
            existe.
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
            <img src="/autocuidarse.png" />
          </div>
        </div>
        <p className="text-l py-4 text-center text-gray-600  max-w-2xl mx-auto">
          He volcado mis más de{' '}
          <span className="font-bold">
            25 años de experiencia trabajando con mujeres,
          </span>
          junto con mi conocimiento en nutrición energética, cambio de hábitos y
          cocina terapéutica, en una{' '}
          <span className="font-bold">metodología amable, muy eficiente</span> y
          pensada para esta etapa de la vida. Una forma cercana y práctica de
          ayudarte a recuperar tu energía, sentirte bien en tu piel y vivir tus
          50+ con equilibrio. 💛
        </p>
      </div>
    </section>
  );
}
