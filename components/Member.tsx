import Image from "next/image";
import React from "react";

type MemberProps = {
  name: string;
  image: string;
};

const Member = ({ name, image }: MemberProps) => {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "1rem",
        padding: "1rem",
      }}
    >
      <h3>{name}</h3>
      <div
        style={{
          position: "relative",
          width: "160px",
          height: "160px",
        }}
      >
        <Image
          style={{ borderRadius: "50%" }}
          // width={100}
          // height={100}
          objectFit="cover"
          layout="fill"
          src={image}
          alt={name}
        />
      </div>
    </div>
  );
};

export default Member;
