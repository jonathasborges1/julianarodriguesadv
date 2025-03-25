"use client";
import Image from "next/image";

import gmailIcon from "@/assets/gmail-icon.svg";
import whatsappIcon from "@/assets/whatsapp-icon.svg";
import scheduleIcon from "@/assets/schedule-icon.svg";
import locationIcon from "@/assets/location-icon.svg";
import gavelIcon from "@/assets/gavel-icon.svg";
import balanceIcon from "@/assets/balance-icon.svg";
import courtIcon from "@/assets/court-icon.svg";

type IconProps = {
  alt?: string;
  className?: string;
};

export const GmailIcon = ({
  alt = "Ícone Gmail",
  className = "w-6 h-6",
}: IconProps) => <Image src={gmailIcon} alt={alt} className={className} />;

export const WhatsappIcon = ({
  alt = "Ícone WhatsApp",
  className = "w-6 h-6",
}: IconProps) => <Image src={whatsappIcon} alt={alt} className={className} />;

export const ScheduleIcon = ({
  alt = "Ícone Horário",
  className = "w-6 h-6",
}: IconProps) => <Image src={scheduleIcon} alt={alt} className={className} />;

export const LocationIcon = ({
  alt = "Ícone Localização",
  className = "w-6 h-6",
}: IconProps) => <Image src={locationIcon} alt={alt} className={className} />;

export const GavelIcon = ({
  alt = "Ícone Martelo",
  className = "w-8 h-8",
}: IconProps) => <Image src={gavelIcon} alt={alt} className={className} />;

export const BalanceIcon = ({
  alt = "Ícone Balança",
  className = "w-8 h-8",
}: IconProps) => <Image src={balanceIcon} alt={alt} className={className} />;

export const CourtIcon = ({
  alt = "Ícone Tribunal",
  className = "w-8 h-8",
}: IconProps) => <Image src={courtIcon} alt={alt} className={className} />;
