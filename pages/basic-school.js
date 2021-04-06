import Head from "next/head";
import styles from "../styles/Home.module.css";
import program_style from "../styles/Program.module.css";
import {useState} from 'react';
import { Header, Template, Footer, FileComponent } from "../components";
import { withNamespaces } from "react-i18next";

function BasicSchool2( { t } ) {
  const [items, setItems] = useState([{
    name: "приказ 26 от 18.0121 (рус).pdf",
    url : "https://drive.google.com/file/d/1xy9-7zioPlWpMBzN9CX3ceWMPU6Ycqnd/view"
  },
  {
    name: "Список базовых организаций образования по реализации программы.pdf",
    url: "https://drive.google.com/file/d/1VeQ8vh_Pzl-sl6TJ3NPiG_M_AeZBRhLy/view" 
  },
  {
    name: "Приказ №26 рус.pdf",
    url: "https://drive.google.com/file/d/1qRn1pgOUwGG_aUGAxLo4F4GK5-116SOL/view"
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

          <div className={program_style.title}>{t("basicSchoolsMenu")}</div>
        </div>
        <FileComponent items={items}/>
      </Template>
      <Footer />
    </div>
  );
}
export default withNamespaces()(BasicSchool2);