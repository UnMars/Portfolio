import styles from "./CTFs.module.css";

import ctfs from "../../data/ctfs.json";
import { CTFCard } from "./CTFCard";

export const CTFs = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>CTFs</h2>
      <h3 className={styles.subtitle}>
        I have participated in the following CTFs:
      </h3>
      <div className={styles.ctfs}>
        {ctfs.map((CTF, id) => {
          return <CTFCard key={id} CTF={CTF} />;
        })}
      </div>
    </section>
  );
};
