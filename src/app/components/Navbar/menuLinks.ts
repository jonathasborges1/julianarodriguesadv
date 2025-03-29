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
    ],
  },
];
