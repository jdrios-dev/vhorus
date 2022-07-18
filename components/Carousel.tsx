import Image from "next/image";
import React, { useState } from "react";
import { flag } from "../data";
import styles from "../styles/Home.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";

const Carousel = () => {
  const [activeImg, setActiveImg] = useState(flag[0]);

  return (
    <div>
      <h1>vHorus Team</h1>
      <div className={styles.mainImageCont}>
        <Image
          src={activeImg.image}
          layout="fill"
          className={styles.mainImage}
          alt={activeImg.title}
        />
      </div>

      <div className={styles.imagesContainer}>
        {flag.map((item) => (
          <div
            key={item.image}
            className={styles.imagesItem}
            onClick={() => setActiveImg(item)}
          >
            <Image
              src={item.image}
              layout="fill"
              alt={item.title}
              style={{ borderRadius: "10px" }}
            />
          </div>
        ))}
      </div>

      <p
        style={{
          width: "800px",
        }}
      >
        {activeImg.text}
      </p>
    </div>
  );
};

export default Carousel;
