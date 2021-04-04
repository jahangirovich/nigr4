import React, { useState } from "react";
import styles from "./AboutUs.module.css";
import { withNamespaces } from "react-i18next";

import useWindowSize from "../../hooks/useWindowSize";

import cn from "classnames";

const AboutUs = ({ t }) => {
  const size = useWindowSize();
  const sections = [
    { name: "mission", desc: "mission_desc", link: "/mission" },
    { name: "tasks", desc: "tasks_desc", link: "/tasks" },
    { name: "structure", desc: "structure_desc", link: "/structure" },
    {
      name: "directions",
      desc: "directions_desc",
      link: "/direction",
    },
  ];

  const renderMobile = () => (
    <>
      <div className={styles.title}>
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 19L8 14L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19Z"
            stroke="#0077C0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>{t("aboutUs")}</span>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.links}>
          {sections.map((item, index) => (
            <div
              className={cn(styles.linkTag, {
                [styles.selected]: index === current,
              })}
              onClick={() => setCurrent(index)}
            >
              {t(`${item.name}_name`)}
            </div>
          ))}
        </div>

        <div className={styles.mission}>
          <div className={styles.missionTitle}>
            <svg
              width="16"
              height="25"
              viewBox="0 0 16 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 15.9341C11.866 15.9341 15 12.7746 15 8.87709C15 4.9796 11.866 1.82007 8 1.82007C4.13401 1.82007 1 4.9796 1 8.87709C1 12.7746 4.13401 15.9341 8 15.9341Z"
                stroke="#0077C0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.21 14.8151L3 24.0001L8 20.9754L13 24.0001L11.79 14.8051"
                stroke="#0077C0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>{t(`${sections[current].name}_name`)}</span>
          </div>
          <div className={styles.missionText}>{t(sections[current].desc)}</div>
        </div>
        <a className={styles.more} href={sections[current].link}>
          {t("more")}
        </a>
      </div>
    </>
  );

  const renderDesktop = () => (
    <>
      <div className={styles.title}>
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 19L8 14L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H13C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3V19Z"
            stroke="#0077C0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>{t("aboutUs")}</span>
      </div>
      <div className={styles.gridAboutUs}>
        <div className={styles.links}>
          {sections.map((item, index) => (
            <div
              className={cn(styles.linkTag, {
                [styles.selected]: index === current,
              })}
              onClick={() => setCurrent(index)}
            >
              <img src={`/img/icons/${item.name}.svg`} />
              <span>{t(`${item.name}_name`)}</span>
            </div>
          ))}
        </div>

        <div className={styles.card}>
          <div className={styles.mission}>
            <div className={styles.missionTitle}>
              <span>{t(`${sections[current].name}_name`)}</span>
            </div>
            <div className={styles.quote} />
            <div className={styles.missionText}>
              {t(sections[current].desc)}
            </div>
            <div className={styles.quote} />

          </div>
          <a className={styles.more} href={sections[current].link}>
            {t("more")}
          </a>
        </div>
      </div>
    </>
  );

  const [current, setCurrent] = useState(0);
  return (
    <section className={styles.aboutUs}>
      {size.width > 450 ? renderDesktop() : renderMobile()}
    </section>
  );
};

export default withNamespaces()(AboutUs);
