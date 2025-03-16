import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "bordered" | "outline" | "disabled"; // Definição das variantes
  color?: "blue" | "red" | "green" | "gray"; // Cores personalizáveis
}

export const Button: React.FC<ButtonProps> = ({
  variant = "bordered",
  color = "blue", // Cor padrão azul
  className,
  children,
  ...props
}) => {
  // Definição da classe base do botão
  let buttonClasses =
    "px-6 py-3 text-lg font-semibold rounded-lg transition-all shadow-md ";

  const colors = {
    blue: "bg-blue-600 text-white border-blue-600 hover:bg-blue-700",
    red: "bg-red-600 text-white border-red-600 hover:bg-red-700",
    green: "bg-green-600 text-white border-green-600 hover:bg-green-700",
    gray: "bg-gray-600 text-white border-gray-600 hover:bg-gray-700",
  };

  const outlineColors = {
    blue: "border-blue-600 text-blue-600 bg-transparent hover:bg-blue-100",
    red: "border-red-600 text-red-600 bg-transparent hover:bg-red-100",
    green: "border-green-600 text-green-600 bg-transparent hover:bg-green-100",
    gray: "border-gray-600 text-gray-600 bg-transparent hover:bg-gray-100",
  };

  // Adicionando classes com base na variante usando switch case
  switch (variant) {
    case "bordered":
      buttonClasses += ` ${colors[color]}`;
      break;
    case "outline":
      buttonClasses += ` ${outlineColors[color]}`;
      break;
    case "disabled":
      buttonClasses +=
        " bg-gray-300 text-gray-500 cursor-not-allowed border-gray-300";
      break;
    default:
      break;
  }

  return (
    <button
      {...props}
      disabled={variant === "disabled"}
      className={`${buttonClasses} ${className || ""}`} // Permite adicionar classes extras
    >
      {children}
    </button>
  );
};
