import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { withNamespaces } from "react-i18next";
import quotes from "./quotes";

const Hero = ({ t }) => {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };
  const [dot, setDot] = useState(1);
  const [current, setCurrent] = useState(getRandomInt(16));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(getRandomInt(16));
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <div className={styles.heroImage}></div>
        <img src="/img/hero-symbol.png" className={styles.heroSymbol} />
      </div>

      <div>
        <div className={styles.quote}>{quotes[current].text_ru}</div>
        <div className={styles.author}>Сара Алпысовна Назарбаева</div>
        <div className={styles.subtitle}>Автор программы “Самопознание”</div>
        <div className={styles.controls}>
          <div onClick={() => setCurrent(getRandomInt(16))}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.5 15C29.5 23.0081 23.0081 29.5 15 29.5C6.99187 29.5 0.500001 23.0081 0.500001 15C0.5 6.99188 6.99187 0.500004 15 0.500003C23.0081 0.500003 29.5 6.99187 29.5 15Z"
                stroke="#81CEFF"
              />
              <path
                d="M16.5518 18.6206L12.4138 14.9999L16.5518 11.3792"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className={styles.dots}>
            <div className={dot === 1 ? styles.selected : ""}></div>
            <div className={dot === 2 ? styles.selected : ""}></div>
            <div className={dot === 3 ? styles.selected : ""}></div>
            <div className={dot === 4 ? styles.selected : ""}></div>
          </div>
          <div onClick={() => setCurrent(getRandomInt(16))}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 15C0.5 6.99187 6.99187 0.5 15 0.5C23.0081 0.5 29.5 6.99187 29.5 15C29.5 23.0081 23.0081 29.5 15 29.5C6.99187 29.5 0.5 23.0081 0.5 15Z"
                stroke="#81CEFF"
              />
              <path
                d="M13.4482 11.3794L17.5862 15.0001L13.4482 18.6208"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withNamespaces()(Hero);
