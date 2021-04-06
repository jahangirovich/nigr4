import Head from "next/head";
import styles from "../styles/Home.module.css";
import program_style from "../styles/Program.module.css";
import {useState} from 'react'
import { Header, Template, Footer, FileComponent } from "../components";
import { withNamespaces } from "react-i18next";

function PilotSchool({t}) {
  const [items, setItems] = useState([{
    name: "25 от 18.01.21.pdf",
    url : "https://drive.google.com/file/d/1WKB9JbYwp-ogqvw4I-njgbJMIoer2wOx/view"
  },
  {
    name: "Список пилотных организаций образования.doc.pdf",
    url: "https://drive.google.com/file/d/1l_rvcb57UqouklF3TEUElnvyE88GKKMX/view" 
  },
  {
    name: "Приказ №25 рус.pdf",
    url: "https://drive.google.com/file/d/1vsrux3vd6cGeNDSnJXgz5fmXD6ssuV2U/view"
  }])
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
        <div className={program_style.image}>
          <div className={program_style.title}>{t("pilotSchoolsMenu")}</div>
        </div>
        <FileComponent items={items}/>
        
      </Template>
      <Footer />
    </div>
  );
}

export default withNamespaces()(PilotSchool);