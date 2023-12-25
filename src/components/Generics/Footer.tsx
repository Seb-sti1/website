import { FC } from "react";
import Contact from "./Contact";

import "./styles/footer.scss";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <Contact />
    </footer>
  );
};

export default Footer;
