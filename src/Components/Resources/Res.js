import React from "react";
import "./Res.css";

export default function Resources() {
  return (
    <div className="rec">
      <header>Resources</header>
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
          <br />
          1-800-273-8255
        </li>
      </ul>
    </div>
  );
}
