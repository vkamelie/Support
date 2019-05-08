import React from "react";
import "./Res.css";

export default function Resources() {
  return (
    <div className="r-image">
      <div class="hero-image">
        <div class="hero-text">
          <h1>Resources</h1>
          <h3>It's Okay to Reach Out.</h3>
        </div>
      </div>
      <ul>
        <li>
          <a href={"https://transplantliving.org/community/support-groups/"}>
            {" "}
            Support Groups By State{" "}
          </a>
        </li>
        <br />
        <li>
          <a href={"http://suicidepreventionlifeline.org/"}>
            National Suicide Prevention Lifeline
          </a>
        </li>
        <li>1-800-273-8255</li>
      </ul>
    </div>
  );
}
