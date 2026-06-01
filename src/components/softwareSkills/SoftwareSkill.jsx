import React from "react";
import "./SoftwareSkill.css";
import Tooltip from "../tooltip/Tooltip";

class SoftwareSkill extends React.Component {
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {/* {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
              </li>
            );
          })} */}
            {this.props.logos.map((logo) => {
              return (
                <Tooltip
                  key={logo.skillName}
                  content={logo.skillName}
                  placement={"top"}
                >
                  <li className="software-skill-inline" name={logo.skillName}>
                    {logo.fontAwesomeClassname && (
                      <span
                        className="iconify"
                        data-icon={logo.fontAwesomeClassname}
                        style={logo.style}
                        data-inline="false"
                      ></span>
                    )}
                    {!logo.fontAwesomeClassname && logo.imageSrc && (
                      <img
                        className="skill-image"
                        style={logo.style}
                        src={`${import.meta.env.BASE_URL}skills/${logo.imageSrc}`}
                        alt={logo.skillName}
                      />
                    )}
                  </li>
                </Tooltip>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SoftwareSkill;
