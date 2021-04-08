import styles from "./News.module.css";
import buttonStyle from '../Button/Button.module.css'
import { withNamespaces } from "react-i18next";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Tabs from "../Tabs";
import {
  FiChevronRight,
  FiChevronLeft,
  FiThumbsUp,
  FiStar,
} from "react-icons/fi";
import useWindowSize from "../../hooks/useWindowSize";
import i18n from "../../i18n";
import Link from "next/link";
import axios from "axios";
import BigTab from "../BigTab";
import cn from "classnames";
import Slider from "react-slick";

const tabs = [
  {
    value: "news",
    label: "Новости",
    labelKz: "Жаңалықтар",
  },
  {
    value: "announcement",
    label: "Объявления",
    labelKz: "Хабарландыру",
  },
];

const News = ({ t, page, announcements }) => {
  const [tab, setTab] = useState('news');
  const size = useWindowSize();
  const [news, setNews] = useState([]);
  const [current, setCurrent] = useState(0);
  const [width, setWidth] = useState(process.browser && window.innerWidth);

  useEffect(async () => {
    // const lang = i18n.language === "ru" ? "ru" : "kk";
    // const result = await axios(
    //   `https://api.nigrch.kz/ghost/api/v3/content/posts/?key=26a5cee97b2078f355b708967f&filter=tag:${lang}%2Btag:${tab}`
    // );

    // setNews(result.data.posts);
    // setCurrent(0);
  }, [tab, i18n.language]);

  useEffect( () => {
    setTab(announcements ? "announcement" : "news")
  }, [announcements]);

  const setPostsWidth = () => {
    setWidth(window.innerWidth);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", setPostsWidth);
    return () => {
      window.removeEventListener("resize", setPostsWidth);
    };
  }, []);

  const mobile = width < 768;
  return (
    <div className={!page ? styles.news : styles.newsPage}>
      {!page && (
        <>
          <div className={styles.tabs}>
            <Tabs
              value={tab}
              onChange={setTab}
              lang={i18n.language}
              theme="default"
              items={tabs}
            />
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
              <BigTab
                value={tab}
                onClick={setTab}
                theme="default"
                tab="announcement"
              >
                <FiStar size={24} />
                <span>
                  {i18n.language === "ru" ? tabs[1].label : tabs[1].labelKz}
                </span>
              </BigTab>
            </div>
          )}
        </>
      )}
      <div className={styles.wrap}>
        <div className={styles.posts}>
          <Carousel page={current} onChange={setCurrent} mobile={mobile}>
            {news.map((item, i) => (
              <div key={item.id} className={cn(styles.post, styles.extra)}>
                {item.feature_image ? (
                  <img src={item.feature_image} alt="Пост" />
                ) : (
                  <img src="/img/no-img.png" alt="Пост" />
                )}
                <div className={styles.content}>
                  <p>{item.excerpt}</p>
                  <Link href={`/news-review?id=${item.id}`} className={styles.moreStyle}>
                    Подробнее
                  </Link>
                  {/* <a href="/news-review" className={styles.moreStyle}>Подробнее</a> */}
                </div>
                {/* <div className={styles.tag}>Направления деятельности</div> */}
              </div>
            ))}
          </Carousel>
        </div>
        <div className={styles.down}>
          <div className={styles.controls}>
            <button
              onClick={() => {
                if (current > 0) {
                  setCurrent(current - 1);
                }
              }}
              className={styles.arrow}
            >
              <FiChevronLeft />
            </button>
            <div className={styles.count}>
              <span className={styles.countCurrent}>{current + 1}</span>
              <span> / </span>
              <span className={styles.countTotal}>
                {Math.ceil(news.length / (mobile ? 1 : 3))}
              </span>
            </div>
            <button
              onClick={() => {
                if (current < Math.ceil(news.length / (mobile ? 1 : 3)) - 1) {
                  setCurrent(current + 1);
                }
              }}
              className={styles.arrow}
            >
              <FiChevronRight />
            </button>
          </div>
          {!page && (
            <a href="/news" className={styles.more}>
              {t("allNews")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const Carousel = ({ children, mobile, page, onChange }) => {
  const [ready, setReady] = useState(false);
  const slider = useRef();
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    afterChange: onChange,
    slidesToShow: mobile ? 1 : 3,
    slidesToScroll: mobile ? 1 : 3,
  };
  useEffect(() => {
    if (slider.current && ready) {
      slider.current.slickGoTo(page);
    }
    setReady(true);
  }, [page]);
  return (
    <Slider ref={slider} {...settings} >
      {children}
    </Slider>
  );
};

export default withNamespaces()(News);
