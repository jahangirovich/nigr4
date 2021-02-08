import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  Header,
  Hero,
  Partners,
  AboutUs,
  AboutProgram,
  Footer,
  Gallery,
  FAQ,
  News,
  Reviews, Project
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
      <Partners />
      <Footer />
      <AboutProgram />
      <AboutUs />
      <Project/>
      <Reviews/>
      <News />
      <FAQ />
      <Gallery />
    </div>
  );
}
