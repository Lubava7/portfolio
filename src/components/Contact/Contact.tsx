import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import Box from "@mui/material/Box";

import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <Box>
      <p>Contact me</p>
      <Icon icon="mdi:user" color="#a5a8aa" />

      <Icon icon="ri:mail-send-line" color="#a5a8aa" />
      <a target="_blank" rel="noreferrer" href="https://t.me/liubava_dev">
        <Icon icon="icon-park-outline:telegram" />
        <p> @liubava_dev</p>
      </a>

      <div>
        <p>
          <Icon icon="bi:envelope-heart" color="#fbfcfc" />
          <a href="#send_email">liubava.k@bk.ru</a>
        </p>
        <p>
          <Icon icon="ic:round-local-phone" color="#fbfcfc" />
          <a href="tel:+79773255335">+7 9773255335</a>
        </p>

        <p>
          <Icon icon="carbon:logo-github" color="#fbfcfc" />
          <a target="_blank" rel="noreferrer" href="https://github.com/Lubava7">
            GitHub
          </a>
        </p>
        <p>
          <Icon icon="carbon:letter-hh" color="#fbfcfc" />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://hh.ru/applicant/resumes/view?resume=d5f45eb6ff08d8d9930039ed1f69654b635352"
          >
            Resume HH
          </a>
        </p>
      </div>
    </Box>
  );
};

export default Contact;
