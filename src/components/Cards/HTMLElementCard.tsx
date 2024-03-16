import { FC, ReactNode } from "react";
import "./styles/card.scss";
import { FaRegCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

interface HTMLElementCardProps {
  title: ReactNode;
  description: ReactNode;
  dates?: string;
  link?: string;
  location?: string;
  tags?: string[];
}

const HTMLElementCard: FC<HTMLElementCardProps> = ({
  title,
  description,
  dates,
  link,
  location,
  tags,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <a href={link} target="_blank">
          <h3>{title}</h3>
        </a>
      </div>
      <div className="card-sub-header">
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
