'use client';

export default function Header() {
  return (
    <header className="flex flex-col items-center pt-8 pb-4">
      <div className="relative">
        <img
          src="/pilar_profile.png"
          alt="Pilar Benitez - Perfil Instagram"
          className="w-48"
        />
      </div>
      <h2 className="mt-4 text-xl font-semibold">
        Sólo para mujeres ambiciosas de 50+ años:
      </h2>
      <p className="mt-2 text-md px-4">
        Ex-perfeccionista recuperada y autora de 5 libros sobre salud femenina,
        te revela:
      </p>
    </header>
  );
}
