import styles from "./AboutProgram.module.css";
import { withNamespaces } from "react-i18next";

import { Card } from "..";

const AboutProgram = ({ t }) => {
  return (
    <section className={styles.aboutProgram}>
      <div className={styles.titles}>
        <div className={styles.title}>{t("aboutProgramFull")}</div>
      </div>
      <div className={styles.cards}>
        <Card>
          <div
            className={styles.cardImage}
            style={{
              backgroundImage: 'url("/img/about-program-1.jpg")',
            }}
          ></div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>{t("aboutAuthor")}</div>
            <div className={styles.cardText}>{t("aboutAuthorText")}</div>
            <a className={styles.more} href="/program">
              {t("more")}
            </a>
          </div>
        </Card>
        <Card>
          <div
            className={styles.cardImage}
            style={{
              backgroundImage: 'url("/img/about-program-2.jpg")',
            }}
          ></div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>{t("stagesFormation")}</div>
            <div className={styles.cardText}>{t("stagesFormationText")}</div>
            <a className={styles.more} href="/steps">
              {t("more")}
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default withNamespaces()(AboutProgram);
