import Head from "next/head";
import styles from "../styles/Home.module.css";
import { withNamespaces } from "react-i18next";

import { Header, Template, Footer } from "../components";
import i18n from "../i18n";

function Program({ t }) {
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
        <h1>{t("programTitle")}</h1>
        <p>{t("programText")}</p>
      </Template>
      <Footer />
    </div>
  );
}

export default withNamespaces()(Program);
