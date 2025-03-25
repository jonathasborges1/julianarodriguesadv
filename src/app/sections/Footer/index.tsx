const Footer = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 text-center text-sm md:text-base px-4">
      <span>
        Verificar mais informações sobre Dra. Juliana Rodrigues no perfil do
        Instagram
      </span>
      <a
        href="https://www.instagram.com/julianarodrigues.advogada"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition font-semibold"
      >
        @julianarodrigues.advogada
      </a>
    </div>
  );
};

export { Footer };
