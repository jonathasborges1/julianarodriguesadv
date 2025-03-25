import Link from "next/link";

type Props = {
  onLinkClick: () => void;
};

export function MobileMenu({ onLinkClick }: Props) {
  const style =
    "text-gray-800 text-lg font-medium hover:text-blue-600 transition";

  return (
    <>
      <Link href="#home" className={style} onClick={onLinkClick}>
        Home
      </Link>
      <Link href="#sobre" className={style} onClick={onLinkClick}>
        Sobre
      </Link>
      <Link href="#localizacao" className={style} onClick={onLinkClick}>
        Localização
      </Link>
      <Link href="#contato" className={style} onClick={onLinkClick}>
        Contato
      </Link>
    </>
  );
}
