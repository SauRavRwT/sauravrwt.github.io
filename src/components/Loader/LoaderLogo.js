import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const { theme } = this.props;
    return (
      <svg
        className="raw_logo logo-animation"
        width="50%"
        height="40%"
        viewBox="0 0 440 310"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="myHexagon"
          d="M293.545 167.405L229.5 204.381C227.025 205.81 223.975 205.81 221.5 204.381L157.455 167.405C154.98 165.976 153.455 163.335 153.455 160.476L153.455 86.5234C153.455 83.6653 154.98 81.0243 157.455 79.5952L221.5 42.6187C223.975 41.1896 227.025 41.1897 229.5 42.6187L293.545 79.5952C296.02 81.0243 297.545 83.6653 297.545 86.5234L297.545 160.476C297.545 163.335 296.02 165.976 293.545 167.405Z"
          stroke={theme.body}
          strokeWidth="4"
        />
        <path
          className="myHexagon"
          d="M147.455 73.5953L211.5 36.6188C213.975 35.1898 217.025 35.1898 219.5 36.6188L283.545 73.5953C286.02 75.0244 287.545 77.6654 287.545 80.5235L287.545 154.477C287.545 157.335 286.02 159.976 283.545 161.405L219.5 198.381C217.025 199.81 213.975 199.81 211.5 198.381L147.455 161.405C144.98 159.976 143.455 157.335 143.455 154.477L143.455 80.5235C143.455 77.6654 144.98 75.0244 147.455 73.5953Z"
          stroke={theme.body}
          strokeWidth="4"
        />
        <text
          x="220"
          y="124"
          textAnchor="middle"
          fontSize="35"
          fontWeight="600"
          fill={theme.body}
          fontFamily="Agustina Regular"
        >
          SR
        </text>
        <text
          x="220"
          y="279"
          textAnchor="middle"
          fontSize="60"
          fill={theme.body}
          fontFamily="Agustina Regular"
        >
          Saurav Rawat
        </text>
      </svg>
    );
  }
}

export default LogoLoader;
