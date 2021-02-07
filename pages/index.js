import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Footer } from "../components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>123</main>

      <Footer />
    </div>
  );
}
