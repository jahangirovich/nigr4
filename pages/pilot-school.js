import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header, Template, Footer } from "../components";

export default function PilotSchool() {
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
        <div className={styles.divStyle}>
          <embed src="https://drive.google.com/file/d/1WKB9JbYwp-ogqvw4I-njgbJMIoer2wOx/preview" type="application/pdf" className={styles.embedStyle} />

          <embed src="https://drive.google.com/file/d/1vsrux3vd6cGeNDSnJXgz5fmXD6ssuV2U/preview" type="application/pdf" className={styles.embedStyle} />

          <embed src="https://drive.google.com/file/d/1l_rvcb57UqouklF3TEUElnvyE88GKKMX/preview" type="application/pdf" className={styles.embedStyle} />
        </div>
      </Template>
      <Footer />
    </div>
  );
}
