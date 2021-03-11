import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  Header,
  Template,
  Footer,
} from "../components";

export default function PhotoGallery() {
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
        Photo gallery
      </Template>
      <Footer />
    </div>
  );
}
