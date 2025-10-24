import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="font-bold text-2xl text-primary">Vanessa Machado</h1>
      <nav className="space-x-6 font-semibold text-gray-700">
        <Link href="/">Inicio</Link>
        <Link href="/projects">Proyectos</Link>
        <Link href="/contact">Contáctame</Link>
      </nav>
    </header>
  );
}
