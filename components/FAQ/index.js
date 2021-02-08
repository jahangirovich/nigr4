import styles from "./FAQ.module.css";
import { withNamespaces } from "react-i18next";
import { FiChevronRight, FiHelpCircle } from "react-icons/fi";

const FAQ = ({ t }) => {
  return (
    <div className={styles.faq}>
      <div className={styles.header}>
        <div className={styles.title}>
          <FiHelpCircle size={24} />
          <span>FAQ / Часто задаваемые вопросы</span>
        </div>
      </div>
      <div className={styles.body}>
          <div className={styles.item}>
              <div className={styles.itemNumber}>1</div>
              <div className={styles.itemTitle}>«Сознательное поколение - светлое будущее»</div>
              <div className={styles.itemChevron}><FiChevronRight size={24}/></div>
          </div>
          <div className={styles.item}>
              <div className={styles.itemNumber}>2</div>
              <div className={styles.itemTitle}>До свидания "Бобек"! До новых встреч, друзья!</div>
              <div className={styles.itemChevron}><FiChevronRight size={24}/></div>
          </div>
          <div className={styles.item}>
              <div className={styles.itemNumber}>3</div>
              <div className={styles.itemTitle}>«Один народ–одна семья»</div>
              <div className={styles.itemChevron}><FiChevronRight size={24}/></div>
          </div>
          <div className={styles.item}>
              <div className={styles.itemNumber}>4</div>
              <div className={styles.itemTitle}>Кадеты из Индии в гимназии "Самопознание"</div>
              <div className={styles.itemChevron}><FiChevronRight size={24}/></div>
          </div>
      </div>
    </div>
  );
};

export default withNamespaces()(FAQ);
