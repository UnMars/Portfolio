import styles from "./CTFCard.module.css";
import { getImageUrl } from "../../utils";

export const CTFCard = ({
  CTF: { title, imageSrc, ctfSrc, ctfTimeLink, certificate, score, totalTeams },
}) => {
  return (
    <div className={styles.card}>
    <a href={ctfSrc}>
      <img
        className={styles.cardMedia}
        alt={title}
        src={getImageUrl(imageSrc)}
        title={title}
      />
      </a>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardText}>Ranked <strong>{score} out of {totalTeams}</strong> teams</div>
        <div className={styles.buttonsContainer}>
          <a
            className={styles.cardButton}
            href={ctfTimeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            CTF Time
          </a>
          {certificate && (
            <a
              className={styles.cardButton}
              href={certificate}
              target="_blank"
              rel="noopener noreferrer"
            >
              Certificate
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
