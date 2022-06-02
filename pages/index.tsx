import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div
          className={`${styles.chrome80s} ${styles.chrome80s}::before ${styles.chrome80s}::after ${styles.centered} ${styles.centered}::before ${styles.centered}::after`}
          data-text="Coming Soon"
        >
          Coming Soon
        </div>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="bevel">
              <feMorphology
                operator="dilate"
                radius="3"
                in="SourceGraphic"
                result="bevel"
              />
            </filter>
            <filter id="noise" x="0vw" y="0vh" width="100vw" height="100vh">
              <feFlood floodColor="#808080" result="neutral-gray" />
              <feTurbulence
                in="neutral-gray"
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="10"
                stitchTiles="stitch"
                result="noise"
              />
              <feColorMatrix
                in="noise"
                type="saturate"
                values="0"
                result="destaturatedNoise"
              ></feColorMatrix>
              <feComponentTransfer in="desaturatedNoise" result="theNoise">
                <feFuncA type="table" tableValues="0 0 0.2 0"></feFuncA>
              </feComponentTransfer>
              <feBlend
                in="SourceGraphic"
                in2="theNoise"
                mode="soft-light"
                result="noisy-image"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <video loop={true} autoPlay={true} muted={true} className={styles.video}>
        <source src="./videos/RetroGrid.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
