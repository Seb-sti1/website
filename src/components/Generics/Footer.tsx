import { FC } from "react";
import Contact from "./Contact";

import "./styles/footer.scss";
import HorizontalLine from "../Cards/HorizontalLine";
import { Trans, useTranslation } from "react-i18next";

const Footer: FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <HorizontalLine
        height={"0px"}
        width={"80%"}
        marginTop={"50px"}
        marginBottom={"20px"}
        color={"grey"}
      />
      <p className="centered italic">
        <Trans
          t={t}
          i18nKey="footer.desc"
          components={{
            src: (
              <a href="https://github.com/Seb-sti1/website" target="_blank" />
            ),
          }}
        />
      </p>
      <Contact />
    </footer>
  );
};

export default Footer;
