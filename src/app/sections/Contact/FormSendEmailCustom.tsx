"use client";

import React, { useState } from "react";

import * as yup from "yup";
import { useFormik } from "formik";
import { enqueueSnackbar } from "notistack";
import { CircularProgress, Grid } from "@mui/material";

import TextFieldCustom from "@/components/TextFieldCustom";
import ButtonCustom from "@/components/ButtonCustom";

import {
  EmailGoogleForm,
  SendEmailWithGoogleForm,
} from "@/module/googleForm/SendEmailWithGoogleForm";
import { ReCaptchaCustom } from "@/components/Recaptcha";

interface FormSendEmailCustomProps {
  children?: React.ReactNode;
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Email é obrigatório"),
  subject: yup
    .string()
    .max(250, "O assunto deve ter no máximo 250 caracteres")
    .required("Assunto é obrigatório"),
  message: yup
    .string()
    .min(10, "Mensagem muito curta")
    .required("Mensagem é obrigatória"),
});

const FormSendEmailCustom: React.FC<FormSendEmailCustomProps> = ({
  children,
}) => {
  const [loadEmail, setLoadEmail] = useState(false);
  const [isCaptchaSuccessful, setIsCaptchaSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, actions) => {
      try {
        if (!isCaptchaSuccessful) {
          enqueueSnackbar("Você deve resolver o reCAPTCHA antes de enviar.", {
            variant: "warning",
          });
          return;
        }

        setLoadEmail(true);

        const EmailDataGoogleForm: EmailGoogleForm = {
          email: values.email,
          subject: values.subject,
          message: values.message,
        };

        await SendEmailWithGoogleForm(EmailDataGoogleForm);

        enqueueSnackbar("Email enviado com sucesso!", { variant: "success" });
        actions.resetForm();
        setIsCaptchaSuccess(false);
      } catch (error) {
        console.error("Erro ao enviar o email:", error);

        const message =
          error instanceof Error
            ? error.message
            : typeof error === "string"
            ? error
            : "Erro desconhecido ao enviar o Email.";

        // ⚠️ Enfileira um erro visual e evita propagar exceções não tratadas
        enqueueSnackbar(message, { variant: "error" });

        // ✅ Impede que o Turbopack crashe por erro não tratado
        return;
      } finally {
        setLoadEmail(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <Grid
        container
        className="FormSendEmailCustom"
        spacing={4}
        sx={{
          px: { xs: 1, lg: 2 },
          py: 2,
          textAlign: "center",
        }}
      >
        {/* Campo E-mail */}
        <Grid item xs={12} md={6}>
          <TextFieldCustom
            fullWidth
            id="email"
            name="email"
            label="E-mail"
            aria-label="Campo de e-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            isdarkmode={"true"}
          />
        </Grid>

        {/* Campo Assunto */}
        <Grid item xs={12} md={6}>
          <TextFieldCustom
            fullWidth
            id="subject"
            name="subject"
            label="Assunto"
            aria-label="Campo de assunto"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.subject && Boolean(formik.errors.subject)}
            helperText={formik.touched.subject && formik.errors.subject}
            isdarkmode={"true"}
          />
        </Grid>

        {/* Campo Mensagem */}
        <Grid item xs={12}>
          <TextFieldCustom
            fullWidth
            multiline
            rows={4}
            id="message"
            name="message"
            label="Mensagem"
            aria-label="Campo de mensagem"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            isdarkmode={"true"}
          />
        </Grid>

        {/* reCAPTCHA */}
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <ReCaptchaCustom
            onVerify={(success) => setIsCaptchaSuccess(success)}
          />
        </Grid>

        {/* Botão */}
        <Grid item xs={12}>
          {loadEmail ? (
            <CircularProgress />
          ) : (
            <ButtonCustom
              type="submit"
              variant="contained"
              color="primary"
              sx={{ px: 6 }}
              disabled={loadEmail}
            >
              Enviar Mensagem
            </ButtonCustom>
          )}
        </Grid>

        {/* Children extra (ex: alerta, instruções) */}
        {children}
      </Grid>
    </form>
  );
};

export default FormSendEmailCustom;
