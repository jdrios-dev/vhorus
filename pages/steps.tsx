import Image from "next/image";
import React, { useState } from "react";
import Home from ".";
import { stepsData } from "../data/index";

const steps = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeUser, setActiveUser] = useState("");
  console.log(activeUser);

  return (
    <Home>
      <>
        <h1 style={{ marginBottom: "5rem" }}>160.000 steps closer to Egypt</h1>
        <div className="table">
          <div className="th">
            <div className="td">Name</div>
            <div className="td">14-07-22</div>
            <div className="td">15-07-22</div>
            <div className="td">16-07-22</div>
            <div className="td">17-07-22</div>
          </div>
          {stepsData.map((item) => (
            <div className="tr" key={item.user}>
              <div className="td" style={{ display: "flex" }}>
                <div
                  onClick={() => setActiveUser(item.user)}
                  style={{
                    position: "relative",
                    width: "20px",
                    height: "20px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                >
                  <Image alt="file" layout="fill" src="/file.png" />
                </div>
                {item.user}
              </div>
              <div className="td">{item.steps[0].steps}</div>
              <div className="td">{item.steps[1].steps}</div>
              <div className="td">{item.steps[2].steps}</div>
              <div className="td">{item.steps[3].steps}</div>
            </div>
          ))}
        </div>

        {activeUser !== "" ? (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {stepsData.map((item, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  width: "150px",
                  height: "300px",
                  margin: "0.5rem",
                }}
              >
                <Image
                  layout="fill"
                  alt={activeUser}
                  src={`/steps/${activeUser}/${item.steps[index].date}.jpeg`}
                />
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: "grey" }}>
            * Please click on the image icon to see the screenshots
          </p>
        )}
      </>
    </Home>
  );
};

export default steps;
