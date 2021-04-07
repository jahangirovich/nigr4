import Head from "next/head";
import styles from "../styles/Program.module.css";
import { withNamespaces } from "react-i18next";
import axios from "axios";
import { Header, Template, Footer } from "../components";
import i18n from "../i18n";
import {useRouter} from 'next/router'
import {useEffect,useState} from 'react'


function NewsReview({ t }) {
  const router = useRouter()
  const {id} = router.query
  const [item , setListOfItem] = useState([])
  useEffect(async () => {
    const val = await axios.get(`https://api.nigrch.kz/ghost/api/v3/content/posts/${id}/?key=26a5cee97b2078f355b708967f`)
    setListOfItem(val.data.posts[0])
  }, [i18n.language])
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
            <img src={item.feature_image}/>
        </div>
        <div className={styles.content}>
            <div className={styles.title}>{item.title}</div>
            <p className={styles.text} dangerouslySetInnerHTML={{__html : item.html }}></p>
        </div>
      </Template>
      <Footer />
    </div>
  );
}

export default withNamespaces()(NewsReview);
