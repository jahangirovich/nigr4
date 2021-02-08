import Head from "next/head";
import styles from "../styles/Home.module.css";

import {
  Header,
  Hero,
  AboutUs,
  AboutProgram,
  Partners,
  Footer,
} from "../components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <AboutProgram />
      <AboutUs />

      <Partners />
      <Footer />
    </div>
  );
}
