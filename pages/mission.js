import Head from "next/head";
import styles from "../styles/Program.module.css";
import { withNamespaces } from "react-i18next";

import { Header, Template, Footer } from "../components";
import i18n from "../i18n";

function Mission({ t }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Некомерческое акционерное общество “Национальный институ гармоничного
          развития человека”
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header blue={true} />
      <Template>
        <div className={styles.image}>
          <div className={styles.title}>Миссия</div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>{t("mission_full_text")}</p>
        </div>
      </Template>
      <Footer />
    </div>
  );
}

export default withNamespaces()(Mission);
