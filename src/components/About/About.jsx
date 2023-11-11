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
              <h3>AI Enjoyer</h3>
              <p>
                I'm very interested in AI domains. Currently reading <a className={styles.aboutBookCitation} href="https://aima.cs.berkeley.edu/">Artificial Intelligence - A Modern Approach by Russell Stuart and Peter Norvig</a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
