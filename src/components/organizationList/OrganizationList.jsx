import React, { Component } from "react";
import "./OrganizationList.css";
import Tooltip from "../tooltip/Tooltip";
import { Fade } from "../motion";

class OrganizationList extends Component {
  render() {
    return (
      <div className="organizations-main-div">
        <ul className="dev-icons-orgs">
          {this.props.logos.map((logo) => {
            return (
              <Tooltip
                key={logo["login"]}
                content={logo["login"]}
                placement={"top"}
                style={{ marginBottom: "5px" }}
              >
                <li className="organizations-inline" name={logo["login"]}>
                  <Fade bottom duration={2000} distance="40px">
                    <img
                      className="organizations-img"
                      src={logo["avatarUrl"]}
                      alt={logo["login"]}
                    />
                  </Fade>
                </li>
              </Tooltip>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default OrganizationList;
