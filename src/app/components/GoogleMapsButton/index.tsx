// components/GoogleMapsButton.tsx
"use client";

import { useState } from "react";

type Props = {
  destination: {
    lat: number;
    lng: number;
  };
};

export function GoogleMapsButton({ destination }: Props) {
  const [origin, setOrigin] = useState<{ lat: number; lng: number } | null>(
    null
  );

  const openGoogleMaps = () => {
    const base = "https://www.google.com/maps/dir/?api=1";
    const dest = `&destination=${destination.lat},${destination.lng}`;

    if (origin) {
      const orig = `&origin=${origin.lat},${origin.lng}`;
      window.open(base + orig + dest, "_blank");
    } else {
      window.open(base + dest, "_blank");
    }
  };

  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setOrigin({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Erro ao obter localização:", error.message);
        }
      );
    }
  };

  return (
    <>
      <button
        onClick={requestLocation}
        className="hidden mt-3 bg-gray-500 text-white px-4 py-2 rounded"
      >
        Detectar Localização
      </button>
      <button
        onClick={openGoogleMaps}
        className="mt-3 inline-block bg-[#00274B] text-white px-5 py-2 rounded-full text-sm font-semibold shadow hover:bg-blue-800 transition"
      >
        Abrir no Google Maps
      </button>
    </>
  );
}
