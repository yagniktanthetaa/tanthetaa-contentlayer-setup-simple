import Image from "next/image";
import React from "react";
import { Mail } from "@/public/Img/Footer";

export const dynamic = "force-dynamic";

const ContactMail = () => {
  return (
    <>
      <a
        href="mailto:solve@tanthetaa.com"
        target="_blank"
        className="flex items-center"
      >
        <Image src={Mail} alt="mail" className="pr-2" />
        <span className="lowercase">solve@tanthetaa.com</span>
      </a>
    </>
  );
};

export default ContactMail;
