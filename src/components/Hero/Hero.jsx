import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Guillaume</h1>
        <h4 className={styles.subTitle}>(Or UnMars online)</h4>
        <p className={styles.description}>I'm a <span className={styles.franceFlagGradient}>French</span> CS student who loves coding. <br/>Reach out if you you'd like to learn more!</p>
        <a
          href="mailto:guillaume_roboam@hotmail.fr"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
