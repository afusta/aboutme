import React from "react";
import { siteConfig } from "../config/layout";
import Image from "next/image";
import style from "../styles/HomeContainers.module.css";
import contactStyle from "../styles/contact.module.css";

//images
import linkedInLogo from "../../public/images/LogoLinkedIn.png";
import Link from "next/link";
const Contacts: React.FC = () => {
  return (
    <div
      className={style.flexContainer}
      style={{
        padding: "30px",
        flexDirection: "column",
        gap: "10px",
        fontSize: "32px",
        fontWeight: "bold",
      }}
    >
      <p style={{ fontSize: "26px", color: "white" }}>Contact</p>
      <p>Got a problem to solve ?</p>
      <div
        style={{
          display: "flex",
          fontSize: "28px",
          justifyContent: "space-between",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <a className={contactStyle.link} href={`mailto:${siteConfig.email}`}>
          ✉️ {siteConfig.email}
        </a>
        <a className={contactStyle.link} href={`tel:${siteConfig.phoneTag}`}>
          📞 {siteConfig.phoneDisplay}
        </a>
        <a
          target="_blank"
          href={siteConfig.linkedInLink}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0px",
            gap: "5px",
            color: "white",
          }}
        >
          <img
            src={linkedInLogo.src}
            width={30}
            height={30}
            alt="LinkedIn Logo"
            style={{ margin: "0px", padding: "0px" }}
          ></img>
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contacts;
