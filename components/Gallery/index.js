import styles from "./Gallery.module.css";
import { withNamespaces } from "react-i18next";
import Tabs from "../Tabs";
import { useState } from "react";
import { FiChevronRight, FiChevronLeft, FiZoomIn } from "react-icons/fi";

const tabs = [
  {
    value: "photo",
    label: "Фотогалерея",
  },
  {
    value: "video",
    label: "Видеогалерея",
  },
];

const Gallery = ({ t }) => {
  const [tab, setTab] = useState("photo");
  return (
    <div className={styles.gallery}>
      <Tabs theme="white" onChange={setTab} value={tab} items={tabs} />
      <p>
        4 февраля 2021 года Гуманитарный колледж «Самопознание» ННПООЦ «Бөбек»
        при поддержке Министерства образования и науки Республики Казахстан,
        Комитета по охране прав детей МОН РК прошли Республиканские
        педагогические чтения в онлайн-формате для организаций технического и
        профессионального образования по теме: «Педагогика любви и творчества».{" "}
      </p>
      <div className={styles.select}>
        <span>Открытие гимназии / 20.01.09</span>
        <FiChevronRight size={24} />
      </div>
      <div className={styles.photoBlock}>
        <img alt="Изображение" src="/img/gallery-placeholder.jpg" />
        <div className={styles.zoom}>
          <FiZoomIn size={24} />
        </div>
      </div>
      <div className={styles.photoBlockControls}>
        <div className={styles.photoLabel}>
          Открытие гимназии «Самопознание», 2009 год
        </div>
        <div className={styles.photoBlockArrows}>
          <div className={styles.arrow}>
            <FiChevronLeft />
          </div>
          <div className={styles.arrow}>
            <FiChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withNamespaces()(Gallery);
