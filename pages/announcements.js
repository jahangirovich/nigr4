import Head from "next/head";
import styles from "../styles/Program.module.css";
import { withNamespaces } from "react-i18next";

import { Header, Template, Footer, News } from "../components";

function Announcements({ t }) {
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
          <div className={styles.title}>{t("announcementsMenu")}</div>
        </div>
        <div className={styles.content}>
          <News page={true} announcements={true} />
        </div>
      </Template>
      <Footer />
    </div>
  );
}
export default withNamespaces()(Announcements);
