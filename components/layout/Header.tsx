'use client';

export default function Header() {
  return (
    <div className="max-w-[960px] mx-auto">
      <header className="flex flex-col items-center pt-6 pb-2">
        <div className="relative mb-4">
          <img
            src="/pilar_profile.png"
            alt="Pilar Benitez - Perfil Instagram"
            className="w-48"
          />
        </div>
        <p className="mt-2 text-md text-center px-4">
          Ex-perfeccionista recuperada y autora de 5 libros 
          <br />
          sobre salud femenina, te revela:
        </p>
      </header>
    </div>
  );
}
