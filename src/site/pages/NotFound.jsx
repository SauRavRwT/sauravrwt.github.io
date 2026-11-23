import React from "react";
import { Link } from "react-router-dom";
import DotGrid from "../components/DotGrid";

export default function NotFound() {
  return (
    <section className="notfound">
      <DotGrid />
      <div className="wrap">
        <h1 className="notfound-code">
          4<span className="serif">0</span>4
        </h1>
        <p className="lead">
          This page wandered off into the hills. Let's get you back.
        </p>
        <Link to="/home" className="btn btn-primary">
          Back home <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  );
}
