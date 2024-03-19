import { FC } from "react";
import "./styles/contact.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact: FC = () => {
  return (
    <div className="contact link">
      <div style={{ display: "flex" }}>
        <FaLinkedin size={30} style={{ marginRight: "5px" }} />
        <a href="https://www.linkedin.com/in/s%C3%A9bastien-kerbourc-h-13bb74176/">
          LinkedIn
        </a>
      </div>
      <div style={{ display: "flex" }}>
        <FaGithub size={30} style={{ marginRight: "5px" }} />
        <a href="https://github.com/Seb-sti1">GitHub</a>
      </div>
    </div>
  );
};

export default Contact;
