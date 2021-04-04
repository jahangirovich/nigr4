import styles from "./Partners.module.css";
import { withNamespaces } from "react-i18next";
import { FiCodesandbox } from "react-icons/fi";
const Partners = ({ t }) => {
  return (
    <section className={styles.partners}>
      <div className={styles.title}>
        <FiCodesandbox size={40} />
        <span>{t("ourPartners")}</span>
      </div>
      <div className={styles.logos}>
        <a href={`http://orleu-edu.kz`} className={styles.logo}>
          <img src="/img/partner-1.png" />
        </a>
        <a href={`http://daryn.kz`} className={styles.logo}>
          <img src="/img/partner-2.png" />
        </a>
        <a
          href={`http://www.gumannajapedagogika.by/teacher/kurs`}
          className={styles.logo}
        >
          <img src="/img/partner-3.png" />
        </a>
        <a href={`https://bobek.kz/#bobek`} className={styles.logo}>
          <img src="/img/partner-4.png" />
        </a>
        <a href={`https://nao.kz`} className={styles.logo}>
          <img src="/img/partner-7.png" />
        </a>
        <a href={`https://foundation.kz/ru/`} className={styles.logo}>
          <img src="/img/partner-5.jpg" />
        </a>
        <a
          href={`https://www.gov.kz/memleket/entities/edu?lang=kk`}
          className={styles.logo}
        >
          <img src="/img/partner-6.jpg" />
        </a>
      </div>
    </section>
  );
};

export default withNamespaces()(Partners);
