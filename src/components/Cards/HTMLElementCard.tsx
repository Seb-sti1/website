import { FC, ReactNode } from "react";
import "./styles/card.scss";
import { ReactComponent as LinkLogo } from "./logos/link.svg";
import { ReactComponent as CalendarLogo } from "./logos/calendar.svg";

interface HTMLElementCardProps {
  title: ReactNode;
  description: ReactNode;
  diploma?: string;
  dates?: string;
  image?: string;
  link?: string;
  tags?: string[];
}

const HTMLElementCard: FC<HTMLElementCardProps> = ({
  title,
  description,
  dates,
  diploma,
  image,
  link,
  tags,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        {image && <img src={image} alt={"card image"} />}
        <a href={link} target="_blank">
          <h3>{title}</h3>
        </a>
        {link && (
          <a href={link} target="_blank">
            <LinkLogo width={50} height={50} />
          </a>
        )}
      </div>
      <div className="card-sub-header">
        {diploma && <h4>{diploma}</h4>}
        {dates && (
          <>
            <CalendarLogo width={33} height={33} />
            <p>{dates}</p>
          </>
        )}
      </div>
      <div>{description}</div>

      {tags && (
        <div className="card-tags">
          {tags && tags.map((tag, idx) => <p key={idx}>{tag}</p>)}
        </div>
      )}
    </div>
  );
};

export default HTMLElementCard;
