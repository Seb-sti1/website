import { FC, ReactNode } from "react";
import "./styles/card.scss";
import { FaExternalLinkAlt, FaRegCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

interface SimpleCardProps {
  title: string;
  description: string;
  diploma?: string;
  dates?: string;
  image?: string;
  link?: string;
  location?: string;
  tags?: string[];
  children?: ReactNode[];
}

const SimpleCard: FC<SimpleCardProps> = ({
  title,
  description,
  dates,
  diploma,
  image,
  link,
  location,
  tags,
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
          </>
        ) : (
          <h3>{title}</h3>
        )}
      </div>
      <div className="card-sub-header">
        {diploma && <h4>{diploma}</h4>}
        <div className="card-sub-header-right">
          {link && (
            <a href={link} target="_blank">
              <FaExternalLinkAlt size={30} />
            </a>
          )}
          {location && (
            <div style={{ display: "flex" }}>
              <FaLocationDot size={30} />
              <p>{location}</p>
            </div>
          )}
          {dates && (
            <div style={{ display: "flex" }}>
              <FaRegCalendarAlt size={30} />
              <p>{dates}</p>
            </div>
          )}
        </div>
      </div>
      <p>{description}</p>

      {tags && (
        <div className="card-tags">
          {tags && tags.map((tag, idx) => <p key={idx}>{tag}</p>)}
        </div>
      )}

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
