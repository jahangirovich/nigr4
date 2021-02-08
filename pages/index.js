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
  Qualifications,
  Reviews,
  Project,
} from "../components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Некомерческое акционерное общество “Национальный институ гармоничного
          развития человека”
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <AboutProgram />
      <AboutUs />
      <Qualifications />
      <Project />
      <Reviews />
      <News />
      <FAQ />
      <Gallery />
      <Partners />
      <Footer />
    </div>
  );
}
