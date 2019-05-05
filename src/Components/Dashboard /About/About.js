import React from "react";
import family from "../../../Photo.jpg";

const About = () => {
  let divstyle = {
    background: "pink",
    color: "white",
    width: "500px",
    height: "500px"
  };

  let pstyle = {
    fontSize: "25px"
  };
  return (
    <div style={divstyle}>
      <img scr={family} alt="family" />
      <p style={pstyle}>
        The reason I created this place for discussion is based off family. My
        father had a liver transplant, the time before and after was a life
        changing experience for my whole my family. My local transplant support
        group not only save my fathers life but my life as well. With out the
        love and support I was able to experience we would not be here today.
        Beyond being thankful I want to give back by creating a space for people
        who are going through the same thing, to know you are not alone.
      </p>
    </div>
  );
};

export default About;
