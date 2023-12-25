import { FC, ReactNode } from "react";
import "./styles/simple-card.scss";
import { ReactComponent as LinkLogo } from "./logos/link.svg";
import { ReactComponent as CalendarLogo } from "./logos/calendar.svg";

interface SimpleCardProps {
  title: string;
  description: string;
  diploma?: string;
  dates?: string;
  image?: string;
  link?: string;
  children?: ReactNode[];
}

const SimpleCard: FC<SimpleCardProps> = ({
  title,
  description,
  dates,
  diploma,
  image,
  link,
  children,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        {image && <img src={image} alt={title} />}
        {link ? (
          <>
            <a href={link} target="_blank">
              <h3>{title}</h3>
            </a>
            <a href={link} target="_blank">
              <LinkLogo width={50} height={50} />
            </a>
          </>
        ) : (
          <h3>{title}</h3>
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
      <p>{description}</p>

      {children && (
        <ul className="card-children">
          {children.map((child, idx) => (
            <li key={idx}>{child}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SimpleCard;
