import { FC } from "react";

import Topbar from "../components/Generics/Topbar";
import Footer from "../components/Generics/Footer";
import { Trans, useTranslation } from "react-i18next";
import HTMLElementCard from "../components/Cards/HTMLElementCard";
import HorizontalLine from "../components/Cards/HorizontalLine";

const Projects: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Topbar />
      <div className="content">
        <HTMLElementCard
          title={t("cohoma.title")}
          description={
            <Trans
              t={t}
              i18nKey="cohoma.desc"
              components={{
                ul: <ul />,
                li: <li />,
                move_base_flex: (
                  <a href="https://github.com/magazino/move_base_flex">
                    move_base_flex
                  </a>
                ),
              }}
            />
          }
          dates={t("cohoma.date")}
          link="https://www.defense.gouv.fr/terre/actualites/cohoma-cooperation-homme-machine"
          location="ENSTA Paris"
          tags={[
            "ROS",
            "Git",
            "C++",
            t("cnc"),
            t("i3d"),
            "Linux",
            "Inventor/Fusion 360",
          ]}
        />
        <HorizontalLine />
        <HTMLElementCard
          title={t("etal.title")}
          description={
            <Trans
              t={t}
              i18nKey="etal.desc"
              components={{
                ul: <ul />,
                li: <li />,
                etal: <a href="https://etal.data-ensta.fr/" />,
              }}
            />
          }
          dates={t("etal.date")}
          link="https://etal.data-ensta.fr/"
          location="ENSTA Paris"
          tags={["Google Sheets", "Typescript (Vue.js, Express)", "Git"]}
        />
        <HorizontalLine />
        <HTMLElementCard
          title={
            <Trans
              t={t}
              i18nKey="cdfr.title"
              components={{ italic: <span className={"italic"} /> }}
            />
          }
          description={<Trans t={t} i18nKey="cdfr.desc" />}
          location="ENSTA Paris"
          dates={t("cdfr.dates")}
          link={t("cdfr.link")}
          tags={["ROS", "Git", "Python", "Inventor/Fusion 360"]}
        />
        <HorizontalLine />
        <HTMLElementCard
          title="La Zone C"
          description={
            <Trans
              t={t}
              i18nKey="lzc.desc"
              components={{
                ul: <ul />,
                li: <li />,
                lazonec: <a href="https://lazonec.fr" />,
              }}
            />
          }
          dates={t("lzc.dates")}
          link="https://lazonec.fr"
          tags={["PHP", "HTML/CSS", "JavaScript"]}
        />
        <HorizontalLine />
        <HTMLElementCard
          title={
            <Trans
              t={t}
              i18nKey="cdfrj.title"
              components={{ italic: <span className={"italic"} /> }}
            />
          }
          description={<Trans t={t} i18nKey="cdfrj.desc" />}
          dates={t("cdfrj.dates")}
          link={t("cdfrj.link")}
        />
      </div>
      <Footer />
    </>
  );
};

export default Projects;
