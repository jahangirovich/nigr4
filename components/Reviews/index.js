import { useState, useEffect } from "react";
import styles from "./Reviews.module.css";
import { withNamespaces } from "react-i18next";
import cn from "classnames";
import Tabs from "../Tabs";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FiThumbsUp, FiStar } from "react-icons/fi";
import BigTab from "../BigTab";
import reviews from "./reviews";

const tabs = [
  {
    value: "reviews",
    label: "Отзывы",
  },
  {
    value: "about",
    label: "СМИ о нас",
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
      if (current === reviews.length - 1) {
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
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [dot]);
  return (
    <div className={styles.reviews}>
      <div className={styles.tabs}>
        <Tabs value={tab} onChange={setTab} theme="white" items={tabs} />
      </div>
      <div className={styles.desktop}>
        <BigTab value={tab} onClick={setTab} theme="white" tab="reviews">
          <FiThumbsUp size={24} />
          <span>Отзывы</span>
        </BigTab>
        <p></p>
        <BigTab value={tab} onClick={setTab} theme="white" tab="about">
          <FiStar size={24} />
          <span>СМИ о нас</span>
        </BigTab>
      </div>
      <div className={styles.card}>
        <div className={styles.review}>
          <div className={styles.content}>
            <div className={styles.quote} />
            <p>
              Прохожу курсы с 1 февраля. Несмотря на такой небольшой срок, уже
              сейчас могу сказать, что в процессе обучения получила для себя
              очень много нужной, полезной и очень важной информации. Занятия
              проходят в теплой, уютной и очень доброжелательной атмосфере. Все
              наши лекторы очень тактичны, открыты для общения и умеют
              заинтересовать. Хочу им выразить за это огромную благодарность!
              Очень нравятся лекции Татьяны Викторовны Рудьковой: интересно,
              хочется слушать и слушать. Лекции всех педагогов проходят в
              интересной форме.
            </p>
            <div className={styles.quote} />
          </div>
          <div className={styles.person}>
            <div
              className={styles.personPhoto}
              style={{
                backgroundImage: 'url("/img/avatar.jpeg")',
              }}
            />
            <div className={styles.personName}>
              Авдеева Наталья Владимировна
            </div>
            <div className={styles.personTitle}>
              учитель самопознания школы № 29 г.Алматы
            </div>
          </div>
        </div>
        <div className={styles.controls}>
          <button className={styles.arrow}>
            <FiChevronLeft />
          </button>
          <div className={styles.dots}>
            <div className={dot === 1 ? styles.selected : ""}></div>
            <div className={dot === 2 ? styles.selected : ""}></div>
            <div className={dot === 3 ? styles.selected : ""}></div>
            <div className={dot === 4 ? styles.selected : ""}></div>
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={cn(styles.dot, styles.active)} />
            <div className={styles.dot} />
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
