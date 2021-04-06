import Head from "next/head";
import styles from "../styles/Program.module.css";
import { withNamespaces } from "react-i18next";

import { Header, Template, Footer } from "../components";
import i18n from "../i18n";

function Steps({ t }) {
  const getText = (val) => {
    let item = t(val)
    return { __html: item }
  }
  
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
          <img src="/img/steps.jpg" />
          <div className={styles.subtitle} dangerouslySetInnerHTML={getText("stepsSubtitle")}>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.title} dangerouslySetInnerHTML={getText("stepsTitle")}></div>
          <p className={styles.text} dangerouslySetInnerHTML={getText("stepsText")}></p>
        </div>
      </Template>
      <Footer />
    </div>
  );
}

export default withNamespaces()(Steps);
