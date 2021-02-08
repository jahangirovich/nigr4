import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Header, Hero, Partners, Footer, Gallery, FAQ, News, Reviews, Project } from "../components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <main className={styles.main}>123</main>
      <Project/>
      <Reviews/>
      <News/>
      <FAQ/>
      <Gallery/>
      <Partners />
      <Footer />
    </div>
  );
}
