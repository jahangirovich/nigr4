import styles from "./News.module.css";
import { withNamespaces } from "react-i18next";
import { useState } from "react";
import Tabs from "../Tabs";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const tabs = [
    {
        value: "news",
        label: "Новости"
    }, {
        value: "board",
        label: "Объявления"
    }
]

const News = ({t}) => {
    const [tab, setTab] = useState("news");
    return(
        <div className={styles.news}>
            <div className={styles.tabs}>
            <Tabs value={tab} onChange={setTab} theme="default" items={tabs}/>
            </div>
            <div className={styles.post}>
                <img src="/post-placeholder.jpg" alt="Пост"/>
                <div className={styles.content}>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <a href="#">Подробнее</a>
                </div>
                <div className={styles.tag}>Направления деятельности</div>
            </div>
            <div className={styles.controls}>
                <button className={styles.arrow}>
                    <FiChevronLeft/>
                </button>
                <div className={styles.count}>
                    <span className={styles.countCurrent}>4</span>
                    <span> / </span>
                    <span className={styles.countTotal}>8</span>
                </div>
                <button className={styles.arrow}>
                    <FiChevronRight/>
                </button>
            </div>
            <a href="#" className={styles.more}>Все новости</a>
        </div>
    )
}

export default withNamespaces()(News);