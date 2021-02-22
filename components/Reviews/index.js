import { useState, useEffect } from "react";
import styles from "./Reviews.module.css";
import { withNamespaces } from "react-i18next";
import cn from "classnames";
import Tabs from "../Tabs";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FiThumbsUp, FiStar } from "react-icons/fi";
import BigTab from "../BigTab";
import { reviews_kz, reviews_ru } from "./reviews";
import i18n from "../../i18n";

const tabs = [
  {
    value: "reviews",
    label: "Отзывы",
    labelKz: "Пікірлер",
  },
  {
    value: "about",
    label: "СМИ о нас",
    labelKz: "БАҚ біз туралы",
  },
];

const News = ({ t }) => {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const [tab, setTab] = useState("reviews");
  const [dot, setDot] = useState(1);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handeChange();
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [dot]);

  const handeChange = () => {
    const length =
      i18n.language === "ru" ? reviews_ru.length : reviews_kz.length;
    if (current === length - 1) {
      setCurrent(0);
      setDot(1);
    } else {
      setCurrent(current + 1);
    }

    if (dot < 4) {
      setDot(dot + 1);
    } else {
      setDot(1);
    }
  };

  return (
    <div className={styles.reviews}>
      <div className={styles.tabs}>
        <Tabs
          value={tab}
          onChange={setTab}
          lang={i18n.language}
          theme="white"
          items={tabs}
        />
      </div>
      <div className={styles.desktop}>
        <BigTab value={tab} onClick={setTab} theme="white" tab="reviews">
          <FiThumbsUp size={24} />
          <span>{i18n.language === "ru" ? "Отзывы" : "Пікірлер"}</span>
        </BigTab>
        <p></p>
        <BigTab value={tab} onClick={setTab} theme="white" tab="about">
          <FiStar size={24} />
          <span>{i18n.language === "ru" ? "СМИ о нас" : "БАҚ біз туралы"}</span>
        </BigTab>
      </div>
      <div className={styles.card}>
        {i18n.language === "ru" ? (
          <div className={styles.review} key={reviews_ru[current].id}>
            <div className={styles.content}>
              <div className={styles.quote} />
              <p>{reviews_ru[current].text}</p>
              <div className={styles.quote} />
            </div>
            <div className={styles.person}>
              <div
                className={styles.personPhoto}
                style={{
                  backgroundImage: `url(${reviews_ru[current].img})`,
                }}
              />
              <div className={styles.personName}>
                {reviews_ru[current].name}
              </div>
              <div className={styles.personTitle}>
                {reviews_ru[current].place}
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.review} key={reviews_kz[current].id}>
            <div className={styles.content}>
              <div className={styles.quote} />
              <p>{reviews_kz[current].text}</p>
              <div className={styles.quote} />
            </div>
            <div className={styles.person}>
              <div
                className={styles.personPhoto}
                style={{
                  backgroundImage: `url(${reviews_kz[current].img})`,
                }}
              />
              <div className={styles.personName}>
                {reviews_kz[current].name}
              </div>
              <div className={styles.personTitle}>
                {reviews_kz[current].place}
              </div>
            </div>
          </div>
        )}

        <div className={styles.controls}>
          <button className={styles.arrow}>
            <FiChevronLeft />
          </button>
          <div className={styles.dots}>
            {i18n.language === "ru"
              ? reviews_ru.map((item, index) => (
                  <div
                    className={cn(styles.dot, {
                      [styles.active]: current === index,
                    })}
                  />
                ))
              : reviews_kz.map((item, index) => (
                  <div
                    className={cn(styles.dot, {
                      [styles.active]: current === index,
                    })}
                  />
                ))}
          </div>
          <button className={styles.arrow}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(News);
