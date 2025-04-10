import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Machine Learning",
          "Data Analytics",
          "Python Developer",
          "MERN Stack Developer",
          "Artificial Intelligence",
          // "Blockchain",
          // "Open Source Contributor"

        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
