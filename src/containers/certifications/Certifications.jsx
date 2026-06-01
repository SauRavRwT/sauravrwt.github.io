import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "../../components/motion";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import CertificationCardStack from "../../components/certificationCard/CertificationCardStack";

class Certifications extends Component {
  groupCertificationsBySubtitle = () => {
    const normalize = (s) =>
      (s || "")
        .replace(/^[\s-]+/, "") // remove leading spaces/hyphens
        .trim()
        .toLowerCase();

    const grouped = {};
    certifications.certifications.forEach((cert) => {
      const key = normalize(cert.subtitle);
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(cert);
    });
    return grouped;
  };

  render() {
    const theme = this.props.theme;
    const groupedCerts = this.groupCertificationsBySubtitle();

    return (
      <div className="main-certs" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Certifications
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {Object.keys(groupedCerts).map((subtitle, groupIndex) => {
            const groupCerts = groupedCerts[subtitle];

            // If only one certificate in group, show as single card
            if (groupCerts.length === 1) {
              return (
                <CertificationCard
                  key={groupIndex}
                  certificate={groupCerts[0]}
                  theme={theme}
                />
              );
            }

            // If multiple certificates with same subtitle, use stack
            return (
              <CertificationCardStack
                key={groupIndex}
                certificates={groupCerts}
                theme={theme}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Certifications;
