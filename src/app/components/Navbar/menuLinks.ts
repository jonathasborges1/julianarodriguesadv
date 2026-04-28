// src/components/Navbar/menuLinks.ts
import {
  Home,
  User,
  MapPin,
  Mail,
  Briefcase,
  FileWarning,
  Gavel,
  BookOpen,
  Newspaper,
  Plane,
  HeartPulse,
} from "lucide-react";

export const menuLinks = [
  { label: "Home", href: "/#home", icon: Home },
  { label: "Sobre", href: "/#sobre", icon: User },
  { label: "Localização", href: "/#localizacao", icon: MapPin },
  { label: "Contato", href: "/#contato", icon: Mail },
  {
    label: "Blog",
    href: "#",
    icon: BookOpen,
    children: [
      {
        label: "Todos os artigos",
        href: "/blog",
        icon: Newspaper,
      },
      {
        label: "Overbooking",
        href: "/blog/overbooking",
        icon: Plane,
      },
      {
        label: "Reintegração",
        href: "/blog/reintegracao-no-emprego",
        icon: Briefcase,
      },
      {
        label: "Rescisão Indireta",
        href: "/blog/rescisao-indireta",
        icon: FileWarning,
      },
      {
        label: "Justa Causa",
        href: "/blog/justa-causa",
        icon: Gavel,
      },
      {
        label: "Plano de Saúde",
        href: "/blog/plano-de-saude-negou-exame",
        icon: HeartPulse,
      },
    ],
  },
];
