import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import contact from "./Contact.module.css";
import { styled } from "@mui/system";

import { TextField, Button, Typography, InputAdornment } from "@mui/material";

import { Textarea } from "@mui/joy";
import SendIcon from "@mui/icons-material/Send";

import { Icon } from "@iconify/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xdovovkj");

  const SuccessTypography = styled(Typography)({
    margin: "20% 0 5% 0",
    fontSize: " 1.5em",
  });
  if (state.succeeded) {
    return (
      <div className={contact.if_success}>
        <SuccessTypography className={contact.h4_succes} variant="h4">
          Thanks for your feedback!
        </SuccessTypography>
        <SuccessTypography className={contact.h4_succes} variant="h4">
          (refresh to resend)
        </SuccessTypography>
      </div>
    );
  }
  const WrapperBox = styled("div")({
    width: "100%",
    height: "100%",
    backgroundColor: "#c8cac85a",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  });
  const CustomTextField = styled(TextField)({
    width: "93%",
    margin: "20px",
    borderRadius: "6px",
    border: "1px solid #bfa9a9",
    "& label.MuiFormLabel-root": {
      color: "#babdbe",
      fontFamily: "Amatic SC, cursive",
      fontSize: "25px",
    },
    "& .MuiInputBase-input": {
      color: "#babdbe",
      fontFamily: "Amatic SC, cursive",
    },
  });
  const H4Typography = styled(Typography)({
    fontFamily: "Amatic SC, cursive",
    fontSize: "1.5em",
    margin: "20px",
    textAlign: "center",
    color: "#babdbe",
  });
  const CustomTextarea = styled(Textarea)({
    margin: "20px",
    width: "93%",
    color: "#babdbe",
    fontSize: "25px",
    border: "1px solid #bfa9a9",
  });
  return (
    <WrapperBox>
      <form
        id="send_email"
        className={contact.main_form}
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xdovovkj"
        method="POST"
      >
        <H4Typography variant="h4">
          Wishes? Complaints? Any comments?Leave it here.. I'll deal with it.
        </H4Typography>
        <CustomTextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon icon="mdi:user" color="#a5a8aa" />
              </InputAdornment>
            ),
          }}
          color="success"
          label="your name"
          variant="outlined"
          id="name"
          type="name"
          name="name"
        />
        <CustomTextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon icon="ri:mail-send-line" color="#a5a8aa" />
              </InputAdornment>
            ),
          }}
          color="success"
          label="your email address"
          variant="outlined"
          id="email"
          type="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <CustomTextarea
          className={contact.textarea}
          color="success"
          minRows={3}
          placeholder="type your message here ..."
          size="lg"
          id="message"
          name="message"
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Button
          sx={{
            margin: "20px",
            width: "200px",
            backgroundColor: "#e34127",
            color: "#babdbe",
          }}
          // color="success"
          variant="contained"
          endIcon={<SendIcon />}
          type="submit"
          disabled={state.submitting}
        >
          Send
        </Button>
      </form>
    </WrapperBox>
  );
};

export default Contact;
