import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Header, Partners, Footer } from "../components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.main}>123</main>

      <Partners />
      <Footer />
    </div>
  );
}
