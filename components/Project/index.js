import styles from "./Project.module.css";
import { withNamespaces } from "react-i18next";
import { useState } from "react";
import cn from "classnames";
import Tabs from "../Tabs";
import {
  FiChevronRight,
  FiChevronLeft,
  FiBriefcase,
  FiBookOpen,
  FiFeather,
  FiClipboard,
  FiFolder,
  FiCodesandbox,
} from "react-icons/fi";
import Button from "../Button";
import i18n from "../../i18n";


const tabs = [
  {
    value: "pilot",
    label: "Пилотный проект",
    labelKz: "Пилоттық жоба",
  },
  {
    value: "seminar",
    label: "Мероприятия",
    labelKz: "Іс-шаралар",
  },
];

const items = [
  {
    title: "О проекте",
    titleKz: "Проект туралы",
    icon: <FiBriefcase size={40} />,
    link: "/about-project",
    locale:
      "aboutProject",
  },
  {
    title: "Базовые организации образования",
    titleKz: "Базалық білім беру ұйымдары",
    icon: <FiBookOpen size={40} />,
    link: "basic-school",
    locale: "baseSchools",
  },
  {
    title: "Пилотные организации образования",
    titleKz: "Пилоттық білім беру ұйымдары",
    icon: <FiFeather size={40} />,
    link: "pilot-school",
    locale: "pilotSchools",
  },
];

const items2 = [
  // {
  //   title: "План мероприятий",
  //   icon: <FiClipboard size={40} />,
  //   link: "#",
  //   text:
  //     "Цель пилотного проекта - создание в организациях образования целостной воспитывающей среды, основанной на общечеловеческих  ценностях. Целостная воспитывающая среда - это результат деятельности субъектов педагогического процесса с учетом единства физической, психической и духовной природы человека и социально-бытовых условий, в которых протекает жизнедеятельность и становление личности.",
  // },
  {
    title: "Материалы",
    titleKz: "Материалдар",
    icon: <FiFolder size={40} />,      
    locale: "materials",
    link: "/materials",
  },
];

const Project = ({ t }) => {
  const [tab, setTab] = useState("pilot");
  const [itemProject, setItemProject] = useState(0);
  const [itemEvent, setItemEvent] = useState(0);
  return (
    <div className={styles.project}>
      <div className={styles.tabs}>
        <Tabs value={tab} onChange={setTab} lang={i18n.language} theme="default" items={tabs} />
      </div>
      <div className={cn(styles.body, {
        [styles.mobileShow]: tab === "pilot"
      })}>
        <div className={styles.title}>
          <FiCodesandbox size={40} />
          <span>{t("pilotProject")}</span>
        </div>
        {items.map((o, i) => (
          <div
            className={cn(styles.item, {
              [styles.active]: itemProject === i,
            })}
          >
            <div onClick={() => setItemProject(i)} className={styles.itemTitle}>
              {o.icon}
              <span>{i18n.language === "ru" ? o.title : o.titleKz}</span>
            </div>
            <div className={styles.itemContent}>
              <p>{o.text || t(o.locale)}</p>
              {o.link ? (
                <a href={o.link}>
                  <Button>{t("more")}</Button>
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <div className={cn(styles.body2, {
        [styles.mobileShow]: tab === "seminar"
      })}>
        <div className={styles.title}>
          <FiCodesandbox size={40} />
          <span>{t("events")}</span>
        </div>
        {items2.map((o, i) => (
          <div
            className={cn(styles.item, {
              [styles.active]: itemEvent === i,
            })}
          >
            <div onClick={() => setItemEvent(i)} className={styles.itemTitle}>
              {o.icon}
              <span>{i18n.language === "ru" ? o.title : o.titleKz}</span>
            </div>
            <div className={styles.itemContent}>
              <p>{o.text || t(o.locale)}</p>
              {o.link ? (
                <a href={o.link}>
                  <Button>{t("more")}</Button>
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withNamespaces()(Project);
