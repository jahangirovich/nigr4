import styles from "./News.module.css";
import { withNamespaces } from "react-i18next";
import { useState } from "react";
import Tabs from "../Tabs";
import {
  FiChevronRight,
  FiChevronLeft,
  FiThumbsUp,
  FiStar,
} from "react-icons/fi";
import useWindowSize from "../../hooks/useWindowSize";

import BigTab from "../BigTab";
import cn from "classnames";

const tabs = [
  {
    value: "news",
    label: "Новости",
  },
  {
    value: "board",
    label: "Объявления",
  },
];

const News = ({ t }) => {
  const [tab, setTab] = useState("news");
  const size = useWindowSize();
  return (
    <div className={styles.news}>
      <div className={styles.tabs}>
        <Tabs value={tab} onChange={setTab} theme="default" items={tabs} />
      </div>
      {size.width > 450 && (
        <div className={styles.desktop}>
          <BigTab value={tab} onClick={setTab} theme="default" tab="news">
            <FiThumbsUp size={24} />
            <span>Новости</span>
          </BigTab>
          <p></p>
          <BigTab value={tab} onClick={setTab} theme="default" tab="board">
            <FiStar size={24} />
            <psan>Объявления</psan>
          </BigTab>
        </div>
      )}

      <div className={styles.wrap}>
        <div className={styles.posts}>
          <div className={styles.post}>
            <img src="/img/news-1.jpg" alt="Пост" />
            <div className={styles.content}>
              <p>
                Как будет строиться деятельность средней школы им. К. Макпалеева
                в качестве базовой организации по программе
                нравственно-духовного образования «Самопознание»? Какой опыт
                педагогический коллектив, ученики школы, родительская
                общественность приобрели за время пилотного проекта?
              </p>
              <a href="#">Подробнее</a>
            </div>
            {/*<div className={styles.tag}>Направления деятельности</div>*/}
          </div>
          <div className={cn(styles.post, styles.extra)}>
            <img src="/img/news-2.jpg" alt="Пост" />
            <div className={styles.content}>
              <p>
                11 февраля 2021 года пройдет торжественное открытие НАО
                «Национальный институт гармоничного развития человека». В
                торжественной церемонии открытия НАО «Национальный институт
                гармоничного развития человека» примут участие Министр
                образования и науки Республики Казахстан Аймагамбетов Асхат
                Канатович, Аким города Алматы Сагинтаев Бакытжан Абдирович.
              </p>
              <a href="#">Подробнее</a>
            </div>
            {/*<div className={styles.tag}>Направления деятельности</div>*/}
          </div>
          <div className={cn(styles.post, styles.extra)}>
            <img src="/img/news-3.jpg" alt="Пост" />
            <div className={styles.content}>
              <p>
                В НАО «Национальном институте гармоничного развития человека» с
                1 по 11 февраля 2021 начались платные краткосрочные курсы
                повышения квалификации в формате
              </p>
              <a href="#">Подробнее</a>
            </div>
            {/*<div className={styles.tag}>Направления деятельности</div>*/}
          </div>
        </div>
        <div className={styles.down}>
          <div className={styles.controls}>
            <button className={styles.arrow}>
              <FiChevronLeft />
            </button>
            <div className={styles.count}>
              <span className={styles.countCurrent}>4</span>
              <span> / </span>
              <span className={styles.countTotal}>8</span>
            </div>
            <button className={styles.arrow}>
              <FiChevronRight />
            </button>
          </div>
          <a href="#" className={styles.more}>
            Все новости
          </a>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(News);
