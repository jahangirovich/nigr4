import Head from "next/head";
import styles from "../styles/Home.module.css";
import { withNamespaces } from "react-i18next";

import {
  Header,
  Template,
  Footer,
  Gallery
} from "../components";

function PhotoGallery( { t } ) {
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
      {/* <Template> */}
        <div className={styles.galleryContainer}>
          {/* <div className={styles.title}>{t("gallery")}</div> */}
          <Gallery item="photo"/>
        </div>
      {/* </Template> */}
      <Footer />
    </div>
  );
}
export default withNamespaces()(PhotoGallery);
