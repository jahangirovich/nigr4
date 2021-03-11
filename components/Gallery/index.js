import styles from "./Gallery.module.css";
import { withNamespaces } from "react-i18next";
import Tabs from "../Tabs";
import BigTab from "../BigTab";
import { useState } from "react";
import i18n from "../../i18n";
import { FiChevronRight, FiChevronLeft, FiZoomIn, FiAperture, FiFilm } from "react-icons/fi";

const tabs = [
  {
    value: "photo",
    label: "Фотогалерея",
    labelKz: "Фотогалерея",
  },
  {
    value: "video",
    label: "Фотогалерея",
    labelKz: "Видеогалерея",
  },
];

const Gallery = ({ t }) => {
  const [tab, setTab] = useState("photo");
  return (
    <div className={styles.gallery}>
      <div className={styles.mobile}>
        <Tabs theme="white" onChange={setTab}  lang={i18n.language} value={tab} items={tabs} />
        <p>
          4 февраля 2021 года Гуманитарный колледж «Самопознание» ННПООЦ «Бөбек»
          при поддержке Министерства образования и науки Республики Казахстан,
          Комитета по охране прав детей МОН РК прошли Республиканские
          педагогические чтения в онлайн-формате для организаций технического и
          профессионального образования по теме: «Педагогика любви и
          творчества».{" "}
        </p>
        <div className={styles.select}>
          <span>Открытие гимназии / 20.01.09</span>
          <FiChevronRight size={24} />
        </div>
      </div>
      <div className={styles.desktop}>
        <BigTab theme="white" onClick={setTab} value={tab} tab="photo">
          <FiAperture size={24}/>
          <span>Фотогалерея</span>
        </BigTab>
        <p>
          4 февраля 2021 года Гуманитарный колледж «Самопознание» ННПООЦ «Бөбек»
          при поддержке Министерства образования и науки Республики Казахстан,
          Комитета по охране прав детей МОН РК прошли Республиканские
          педагогические чтения в онлайн-формате для организаций технического и
          профессионального образования по теме: «Педагогика любви и
          творчества».{" "}
        </p>
        <div className={styles.select}>
          <span>Открытие гимназии / 20.01.09</span>
          <FiChevronRight size={24} />
        </div>
        <BigTab theme="white" onClick={setTab} value={tab} tab="video">
          <FiFilm size={24}/>
          <span>Видеогалерея</span>
        </BigTab>
      </div>
      <div className={styles.wrap}>
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
    </div>
  );
};

export default withNamespaces()(Gallery);
