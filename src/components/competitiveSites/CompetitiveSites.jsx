import React from "react";
import "./CompetitiveSites.css";
import Tooltip from "../tooltip/Tooltip";

class CompetitiveSites extends React.Component {
  render() {
    return (
      <div className="competitive-sites-main-div">
        <ul className="dev-icons">
          {this.props.logos.map((logo) => {
            return (
              <Tooltip
                key={logo.siteName}
                content={logo.siteName}
                placement={"top"}
                style={{ marginBottom: "5px" }}
              >
                <li className="competitive-sites-inline" name={logo.siteName}>
                  <a
                    href={logo.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {logo.iconifyClassname && (
                      <span
                        className="iconify"
                        data-icon={logo.iconifyClassname}
                        style={logo.style}
                        data-inline="false"
                      ></span>
                    )}
                    {!logo.iconifyClassname && logo.imageSrc && (
                      <img
                        className="skill-image"
                        style={logo.style}
                        src={`${import.meta.env.BASE_URL}skills/${logo.imageSrc}`}
                        alt={logo.siteName}
                      />
                    )}
                  </a>
                </li>
              </Tooltip>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CompetitiveSites;
