import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { withNamespaces } from "react-i18next";
import quotes from "./quotes";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import i18n from "../../i18n";

const Hero = ({ t }) => {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };
  const [dot, setDot] = useState(1);
  const [current, setCurrent] = useState(getRandomInt(quotes.length));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(getRandomInt(quotes.length));
      if (dot < 4) {
        setDot(dot + 1);
      } else {
        setDot(1);
      }
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [dot]);

  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <div className={styles.heroImage}></div>
        <img src="/img/hero-symbol.png" className={styles.heroSymbol} />
      </div>

      <div className={styles.content}>
        <div>
          <div className={styles.quote}>
            {i18n.language === "ru"
              ? quotes[current].text_ru
              : quotes[current].text_kz}
          </div>
          <div className={styles.credentialsMobile}>
            <div className={styles.author}>{t("first_lady")}</div>
          </div>
          <div className={styles.controls}>
            <div
              className={styles.arrow}
              onClick={() => {
                setCurrent(getRandomInt(quotes.length));
                if (dot > 1) {
                  setDot(dot - 1);
                } else {
                  setDot(4);
                }
              }}
            >
              <FiChevronLeft />
            </div>
            <div className={styles.dots}>
              <div className={dot === 1 ? styles.selected : ""}></div>
              <div className={dot === 2 ? styles.selected : ""}></div>
              <div className={dot === 3 ? styles.selected : ""}></div>
              <div className={dot === 4 ? styles.selected : ""}></div>
            </div>
            <div
              className={styles.arrow}
              onClick={() => {
                setCurrent(getRandomInt(quotes.length));
                if (dot < 4) {
                  setDot(dot + 1);
                } else {
                  setDot(1);
                }
              }}
            >
              <FiChevronRight />
            </div>
          </div>
        </div>
        <div className={styles.credentials}>
          <div className={styles.author}>Сара Алпысовна Назарбаева</div>
        </div>
      </div>
    </section>
  );
};

export default withNamespaces()(Hero);
