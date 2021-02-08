import styles from "./Reviews.module.css";
import { withNamespaces } from "react-i18next";
import { useState } from "react";
import cn from "classnames"
import Tabs from "../Tabs";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const tabs = [
    {
        value: "reviews",
        label: "Отзывы"
    }, {
        value: "about",
        label: "СМИ о нас"
    }
]

const News = ({t}) => {
    const [tab, setTab] = useState("reviews");
    return(
        <div className={styles.reviews}>
            <div className={styles.tabs}>
            <Tabs value={tab} onChange={setTab} theme="white" items={tabs}/>
            </div>
            <div className={styles.review}>
                <div className={styles.content}>
                    <div className={styles.quote}/>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <div className={styles.quote}/>
                </div>
                <div className={styles.person}>
                    <div className={styles.personPhoto}/>
                    <div className={styles.personName}>Абдрахманов Даулет</div>
                    <div className={styles.personTitle}>Студент</div>
                </div>
            </div>
            <div className={styles.controls}>
                <button className={styles.arrow}>
                    <FiChevronLeft/>
                </button>
                <div className={styles.dots}>
                    <div className={styles.dot}/>
                    <div className={styles.dot}/>
                    <div className={cn(styles.dot, styles.active)}/>
                    <div className={styles.dot}/>
                </div>
                <button className={styles.arrow}>
                    <FiChevronRight/>
                </button>
            </div>
        </div>
    )
}

export default withNamespaces()(News);