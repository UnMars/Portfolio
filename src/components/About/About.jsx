import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Script Developer</h3>
              <p>
                I have experience developing scripts and bots for various usages to automate tasks
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
                I have experience developing responsive websites communicating with databases
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>CyberSec Enjoyer</h3>
              <p>
                I&apos;m interested in cybersecurity domains. In my spare time, I&apos;m also doing various <a className={styles.aboutBookCitation} href="https://en.wikipedia.org/wiki/Capture_the_flag_(cybersecurity)">CTFs</a>  with my friends.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
