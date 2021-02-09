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
} from "react-icons/fi";

const tabs = [
  {
    value: "pilot",
    label: "Пилотный проект",
  },
  {
    value: "seminar",
    label: "Семинары",
  },
];

const items = [
  {
    title: "О проекте",
    icon: <FiBriefcase size={24} />,
    text:
      "Цель пилотного проекта - создание в организациях образования целостной воспитывающей среды, основанной на общечеловеческих  ценностях. Целостная воспитывающая среда - это результат деятельности субъектов педагогического процесса с учетом единства физической, психической и духовной природы человека и социально-бытовых условий, в которых протекает жизнедеятельность и становление личности.",
  },
  {
    title: "Базовые школы",
    icon: <FiBookOpen size={24} />,
    text:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    title: "Пилотные школы",
    icon: <FiFeather size={24} />,
    text:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
];

const Project = ({ t }) => {
  const [tab, setTab] = useState("pilot");
  const [item, setItem] = useState(0);
  return (
    <div className={styles.project}>
      <div className={styles.tabs}>
        <Tabs value={tab} onChange={setTab} theme="default" items={tabs} />
      </div>
      <div className={styles.body}>
        {items.map((o, i) => (
          <div
            className={cn(styles.item, {
              [styles.active]: item === i,
            })}
          >
            <div onClick={() => setItem(i)} className={styles.itemTitle}>
              {o.icon}
              <span>{o.title}</span>
            </div>
            <p>{o.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withNamespaces()(Project);
