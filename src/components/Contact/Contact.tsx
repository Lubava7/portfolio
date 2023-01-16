import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import contact from "./Contact.module.css";
import { styled } from "@mui/system";

import { TextField, Button, Typography, InputAdornment } from "@mui/material";

import Textarea from "@mui/joy/Textarea";
import SendIcon from "@mui/icons-material/Send";

import { Icon } from "@iconify/react";

// import contact from "./Contact.module.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xdovovkj");

  if (state.succeeded) {
    return (
      <div className={contact.if_success}>
        <Typography
          variant="h4"
          sx={{ margin: "20% 0 5% 0", textAlign: "center" }}
        >
          Thanks for your feedback!
        </Typography>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          (refresh to resend)
        </Typography>
      </div>
    );
  }
  const WrapperBox = styled("div")({
    width: "100%",
    height: "100%",
    backgroundColor: "#1f3345",
    color: "#a5a8aa",
    // position: "relative",
    zIndex: 1,
  });
  const CustomTextField = styled(TextField)({
    color: "#a5a8aa",
    "& label.MuiFormLabel-root": {
      color: "#a5a8aa",
    },
    "& label.Mui-focused": {
      color: "#a5a8aa",
    },
  });
  return (
    <WrapperBox>
      <form
        id="send_email"
        className="form"
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xdovovkj"
        method="POST"
      >
        <Typography
          variant="h4"
          sx={{ margin: "20px", textAlign: "center", color: "#a5a8aa" }}
        >
          Leave your feedback, wishes and complaints here!
        </Typography>
        <CustomTextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon icon="mdi:user" color="#a5a8aa" />
              </InputAdornment>
            ),
          }}
          sx={{
            width: "93%",
            margin: "20px",
            boxShadow: "2px 2px 2px 2px #1f2731",
            borderRadius: "6px",
            color: "#a5a8aa",
          }}
          color="success"
          label="your name"
          variant="filled"
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
          sx={{
            width: "93%",
            margin: "20px",
            boxShadow: "2px 2px 2px 2px #1f2731",
            borderRadius: "6px",
            color: "#a5a8aa",
            backgroundColor: "#1f3345",
          }}
          color="success"
          label="your email address"
          variant="filled"
          id="email"
          type="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <Textarea
          sx={{
            margin: "20px",
            width: "93%",
            boxShadow: "2px 2px 2px 2px #1f2731",
            color: "#a5a8aa",
          }}
          color="success"
          disabled={false}
          minRows={6}
          placeholder="type your message here ..."
          size="lg"
          variant="soft"
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Button
          sx={{ margin: "20px", width: "200px" }}
          color="success"
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
