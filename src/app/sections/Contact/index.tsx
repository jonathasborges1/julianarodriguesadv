"use client";

import "./style-contact.css";
import Image from "next/image";
import FormSendEmailCustom from "./FormSendEmailCustom";
import {
  GmailIcon,
  LocationIcon,
  ScheduleIcon,
  WhatsappIcon,
} from "@/components/Icons/";

export const Contact = () => {
  const warnBoard = [
    {
      icon: <GmailIcon />,
      title: "E-mail",
      subTitle: "julianasouzarodrigues.adv@gmail.com",
    },
    {
      icon: <WhatsappIcon />,
      title: "WhatsApp",
      subTitle: "+55 92 98230 1415",
    },
    {
      icon: <ScheduleIcon />,
      title: "Horário de Atendimento",
      subTitle: "Segunda a Sábado das 08:00 às 18:00",
    },
    {
      icon: <LocationIcon />,
      title: "Endereço Físico",
      subTitle:
        "R. Salvador, 120 - Adrianópolis, Manaus - AM, 69057-040 - Vieiralves Business Center",
    },
  ];

  return (
    <section
      id="contato"
      className="bg-zinc-900 text-white py-12 px-4 sm:px-6 md:px-10 xl:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-9 xl:gap-10">
        {/* Título */}
        <div className="col-span-full mb-2 md:mb-0 text-left lg:text-left">
          <h2 className="text-3xl sm:text-3xl md:text-4xl xl:text-5xl font-bold relative inline-block pb-4">
            Fale Conosco
            <span className="absolute left-0 bottom-0 w-20 h-1 bg-yellow-500" />
          </h2>
        </div>

        {/* Quadro de Contato */}
        <div className="relative bg-zinc-800 rounded-xl shadow-md p-5 sm:p-6 md:p-8 xl:p-10 flex flex-col gap-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
            Informações para Contato
          </h3>

          {warnBoard.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 text-sm sm:text-base"
            >
              <div className="text-yellow-500 shrink-0">{item.icon}</div>
              <div className="w-full">
                <p className="text-zinc-400">{item.title}</p>
                <p className="font-semibold text-xs sm:text-sm md:text-base break-all">
                  {item.subTitle}
                </p>
              </div>
            </div>
          ))}

          {/* Imagem decorativa apenas para telas md+ */}
          <div className="absolute bottom-4 right-4 opacity-40 max-w-[260px] hidden md:block">
            <Image
              src="/images/gmail-background-fale-conosco-juliana-rodrigues.png"
              alt="Gmail decorativo"
              width={320}
              height={320}
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Formulário */}
        <div className="bg-zinc-800 rounded-xl shadow-md p-5 sm:p-6 md:p-8 xl:p-10 flex flex-col gap-6">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
            Formulário de Contato
          </h3>
          <FormSendEmailCustom />
        </div>
      </div>
    </section>
  );
};
