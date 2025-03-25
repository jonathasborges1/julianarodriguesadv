import React from "react";
import { OutlinedTextFieldProps, TextField } from "@mui/material";

interface TextFieldCustomProps extends Omit<OutlinedTextFieldProps, "variant"> {
  isdarkmode?: string;
}

const TextFieldCustom: React.FC<TextFieldCustomProps> = ({
  isdarkmode,
  sx,
  ...props
}) => {
  const isDark = isdarkmode === "true";

  return (
    <TextField
      {...props}
      variant="outlined"
      InputProps={{
        style: {
          color: isDark ? "#fff" : "#000", // cor do texto digitado
        },
      }}
      InputLabelProps={{
        style: {
          color: isDark ? "#ccc" : "#555", // cor da label (estado normal)
        },
      }}
      sx={{
        "& label.Mui-focused": {
          color: isDark ? "#fff" : "#000", // cor da label quando está focada
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: isDark ? "#aaa" : "#333",
          },
          "&:hover fieldset": {
            borderColor: isDark ? "#fff" : "#000",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#daa520",
          },
        },
        backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "#fff",
        borderRadius: 1,
        ...sx,
      }}
    />
  );
};

export default TextFieldCustom;
