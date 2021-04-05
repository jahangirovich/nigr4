import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header, Template, Footer } from "../components";
export default function BasicSchool() {
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

          <embed src="https://drive.google.com/file/d/1xy9-7zioPlWpMBzN9CX3ceWMPU6Ycqnd/preview" type="application/pdf" className={styles.embedStyle} />

          <embed src="https://drive.google.com/file/d/1qRn1pgOUwGG_aUGAxLo4F4GK5-116SOL/preview" type="application/pdf" className={styles.embedStyle} />

          <embed src="https://drive.google.com/file/d/1VeQ8vh_Pzl-sl6TJ3NPiG_M_AeZBRhLy/preview" type="application/pdf" className={styles.embedStyle} />
        </div>
      </Template>
      <Footer />
    </div>
  );
}
