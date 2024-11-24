import { FC } from "react";
import "./styles/bigcontact.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const BigContact: FC = () => {
  return (
    <div className="contact link">
      <a href="https://www.linkedin.com/in/s%C3%A9bastien-kerbourc-h-13bb74176/">
        <div>
          <FaLinkedin
            size={50}
            style={{ marginRight: "5px" }}
            color={"#0077b5"}
          />
          <br />
          LinkedIn
        </div>
      </a>
      <a href="https://github.com/Seb-sti1">
        <div>
          <FaGithub
            size={50}
            style={{ marginRight: "5px" }}
            color={"#1f2328"}
          />
          <br />
          GitHub
        </div>
      </a>
    </div>
  );
};

export default BigContact;
