import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header, Template, Footer , Gallery } from "../components";

export default function VideoGallery() {
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
      <div className={styles.galleryContainer}>
        <Gallery item="video"/>
      </div>
      <Footer />
    </div>
  );
}
