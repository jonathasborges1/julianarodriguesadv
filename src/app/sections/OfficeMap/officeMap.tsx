import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { GoogleMapsButton } from "@/components/GoogleMapsButton";

export const OfficeMap = () => {
  const destination = {
    lat: -3.1079797,
    lng: -60.0147917,
  };

  return (
    <section
      id="localizacao"
      className="relative bg-[#C8C8C8] py-16 px-4 sm:px-6 md:px-12 flex flex-col items-center"
    >
      <div className="max-w-7xl w-full flex flex-col bg-white p-6 sm:p-8 shadow-xl rounded-xl gap-8 sm:gap-10">
        <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-900 relative pb-4">
          Mapa do Escritório
          <span className="block w-20 sm:w-24 h-1 bg-[#00274B] absolute bottom-0 left-0"></span>
        </h2>

        <div className="w-full h-[280px] sm:h-[350px] md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9498121829893!2d-60.01479169999999!3d-3.107979700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6dd1fa2003c0bec5%3A0xf4c05aa28567bade!2sJuliana%20Rodrigues%20-%20Escrit%C3%B3rio%20de%20Advocacia%20-%20Advogado%20Manaus!5e0!3m2!1spt-BR!2sbr!4v1742776042943!5m2!1spt-BR!2sbr"
            className="w-full h-full rounded-xl shadow-md"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 md:gap-10 mt-10 bg-white p-6 sm:p-8 shadow-xl rounded-xl">
        {/* Endereço */}
        <div className="flex flex-col sm:flex-row flex-1 items-start gap-4">
          <FaMapMarkerAlt className="text-[#00274B] text-3xl shrink-0" />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Manaus - AM
            </h3>
            <p className="text-gray-700 mt-1 text-sm sm:text-base leading-relaxed">
              R. Salvador, 120 - Adrianópolis
              <br />
              Manaus - AM, 69057-040
            </p>

            {/* Botões dinâmicos separados */}
            <GoogleMapsButton destination={destination} />
          </div>
        </div>

        {/* Contato */}
        <div className="flex flex-col sm:flex-row flex-1 items-start gap-4">
          <FaWhatsapp className="text-green-500 text-3xl shrink-0" />
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              Contato
            </h3>
            <p className="text-gray-700 mt-1 text-sm sm:text-base">
              55 92 9 8230 1415
            </p>
            <a
              href="https://wa.me/5592982301415"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-[#25D366] text-white px-5 py-2 rounded-full text-sm font-semibold shadow hover:bg-green-600 transition"
            >
              Falar com um advogado
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
