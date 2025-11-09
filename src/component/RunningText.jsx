import React from "react";
import "./RunningText.css";

const RunningText = () => {
  return (
    <section className="running-section">
      <div className="running-text">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="running-item">
            Contact <span className="highlight">Me</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default RunningText;
