import Link from "next/link";

export function DesktopMenu() {
  return (
    <>
      <Link
        href="#home"
        className="text-gray-800 hover:text-blue-600 font-medium transition"
      >
        Home
      </Link>
      <Link
        href="#sobre"
        className="text-gray-800 hover:text-blue-600 font-medium transition"
      >
        Sobre
      </Link>
      <Link
        href="#localizacao"
        className="text-gray-800 hover:text-blue-600 font-medium transition"
      >
        Localização
      </Link>
      <Link
        href="#contato"
        className="text-gray-800 hover:text-blue-600 font-medium transition"
      >
        Contato
      </Link>
    </>
  );
}
