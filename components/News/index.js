import styles from "./News.module.css";
import { withNamespaces } from "react-i18next";
import { useState, useEffect } from "react";
import Tabs from "../Tabs";
import {
  FiChevronRight,
  FiChevronLeft,
  FiThumbsUp,
  FiStar,
} from "react-icons/fi";
import useWindowSize from "../../hooks/useWindowSize";
import i18n from "../../i18n";

import axios from "axios";
import BigTab from "../BigTab";
import cn from "classnames";

const tabs = [
  {
    value: "news",
    label: "Новости",
    labelKz: "Жаңалықтар",
  },
  {
    value: "board",
    label: "Объявления",
    labelKz: "Хабарландыру",
  },
];

const News = ({ t }) => {
  const [tab, setTab] = useState("news");
  const size = useWindowSize();
  const [news, setNews] = useState([]);
  const [current, setCurrent] = useState(1);

  useEffect(async () => {
    const result = await axios(
      `https://nigrch.que.kz/ghost/api/v3/content/posts/?key=26a5cee97b2078f355b708967f&filter=tag:${i18n.language}`
    );

    setNews(result.data.posts);
  }, [false]);

  console.log(news);

  return (
    <div className={styles.news}>
      <div className={styles.tabs}>
        <Tabs value={tab} onChange={setTab} theme="default" items={tabs} />
      </div>
      {size.width > 450 && (
        <div className={styles.desktop}>
          <BigTab value={tab} onClick={setTab} theme="default" tab="news">
            <FiThumbsUp size={24} />
            <span>
              {i18n.language === "ru" ? tabs[0].label : tabs[0].labelKz}
            </span>
          </BigTab>
          <p></p>
          <BigTab value={tab} onClick={setTab} theme="default" tab="board">
            <FiStar size={24} />
            <span>
              {i18n.language === "ru" ? tabs[1].label : tabs[1].labelKz}
            </span>
          </BigTab>
        </div>
      )}

      <div className={styles.wrap}>
        <div className={styles.posts}>
          {news.map((item, i) => {
            if (i < 3) {
              return (
                <div key={item.id} className={cn(styles.post, styles.extra)}>
                  {item.feature_image ? (
                    <img src={item.feature_image} alt="Пост" />
                  ) : (
                    <img src="/img/no-img.png" alt="Пост" />
                  )}
                  <div className={styles.content}>
                    <p>{item.excerpt}</p>
                    <a href="#">Подробнее</a>
                  </div>
                  {/* <div className={styles.tag}>Направления деятельности</div> */}
                </div>
              );
            } else {
              return false;
            }
          })}
        </div>
        <div className={styles.down}>
          <div className={styles.controls}>
            <button className={styles.arrow}>
              <FiChevronLeft />
            </button>
            <div className={styles.count}>
              <span className={styles.countCurrent}>{current}</span>
              <span> / </span>
              <span className={styles.countTotal}>
                {Math.ceil(news.length / 3)}
              </span>
            </div>
            <button className={styles.arrow}>
              <FiChevronRight />
            </button>
          </div>
          <a href="#" className={styles.more}>
            {t("allNews")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(News);
