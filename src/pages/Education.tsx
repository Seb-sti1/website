import { FC } from "react";
import Topbar from "../components/Generics/Topbar";
import Footer from "../components/Generics/Footer";
import SimpleCard from "../components/Cards/SimpleCard";
import { useTranslation } from "react-i18next";
import HorizontalLine from "../components/Cards/HorizontalLine";

const Education: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Topbar />
      <div className="content">
        <SimpleCard
          title={t("education.dtu")}
          description={t("education.dtu.desc")}
          diploma={t("education.dtu.diploma")}
          location="Lyngby, Danmark"
          dates="2023-2025"
          link={
            "https://www.dtu.dk/english/education/graduate/msc-programmes/autonomous-systems"
          }
        />
        <HorizontalLine />
        <SimpleCard
          title={"ENSTA Paris (IP Paris)"}
          description={t("education.ensta.desc")}
          diploma={t("education.ensta.diploma")}
          location="Palaiseau, France"
          dates="2021-2024"
          link={t("education.ensta.link")}
        >
          {[
            <SimpleCard
              key={"stage-pre"}
              title={t("internship.pre")}
              description={t("internship.pre.desc")}
              location="Aldebaran Robotics"
              dates={t("internship.pre.dates")}
            />,
            <SimpleCard
              key={"stage-op"}
              title={t("internship.stage-op")}
              location="Aldes Aéraulique"
              description={t("internship.stage-op.desc")}
              dates={t("internship.stage-op.dates")}
            />,
          ]}
        </SimpleCard>
      </div>
      <Footer />
    </>
  );
};

export default Education;
