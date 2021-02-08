import styles from "./AboutUs.module.css";
import { withNamespaces } from "react-i18next";

import { Card } from "..";

const AboutUs = ({ t }) => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.title}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.6666 35L20 26.6667L8.33331 35V8.33333C8.33331 7.44928 8.6845 6.60143 9.30962 5.97631C9.93474 5.35119 10.7826 5 11.6666 5H28.3333C29.2174 5 30.0652 5.35119 30.6903 5.97631C31.3155 6.60143 31.6666 7.44928 31.6666 8.33333V35Z"
            stroke="#0077C0"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>{t("aboutUs")}</span>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.links}>
          <div></div>
        </div>
        <div>123</div>
      </div>
    </section>
  );
};

export default withNamespaces()(AboutUs);
