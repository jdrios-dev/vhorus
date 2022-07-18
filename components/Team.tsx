import React from "react";
import Member from "./Member";

const Team = () => {
  const team = ["Johanna", "Ericka", "Santiago", "Daniel"];
  return (
    <>
      <h1>vHorus Team</h1>
      <h2>Ventura golden god</h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {team.map((item) => (
          <Member
            key={item}
            name={item}
            image={`/static/team/${item.toLowerCase()}.webp`}
          />
        ))}
      </div>
    </>
  );
};

export default Team;
