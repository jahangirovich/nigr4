import Head from "next/head";
import styles from "../styles/Program.module.css";
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
        <div className={styles.image}>
          <img src="/img/program.jpg" />
          <div className={styles.name}>{t("first_lady")}</div>
          <div className={styles.subtitle}>Автор программы “Самопознание”</div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>{t("aboutAuthor")}</div>
          <p className={styles.text}>{t("aboutAuthorTextFull")}</p>
        </div>
      </Template>
      <Footer />
    </div>
  );
}

export default withNamespaces()(Program);
