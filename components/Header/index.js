import styles from "./Header.module.css";
import { withNamespaces } from "react-i18next";

const Header = ({ t }) => {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logotype}>
          <div className={styles.subtitle}>{t("logotype")}</div>
        </div>
        <div className={styles.links}>
          <a href="#">О программе «Самопознание»</a>
          <a href="#">О нас</a>
          <a href="#">Образовательные программы</a>
          <a href="#">Пилотный проект</a>
          <a href="#">Новости</a>
          <a href="#">Галерея</a>
        </div>
        <div className={styles.menu}>
          <svg
            width="30"
            height="23"
            viewBox="0 0 30 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="30"
              y1="1.5"
              x2="-1.31134e-07"
              y2="1.5"
              stroke="#3d3d3d"
              stroke-width="3"
            />
            <line
              x1="30"
              y1="21.5"
              x2="-1.31134e-07"
              y2="21.5"
              stroke="#3d3d3d"
              stroke-width="3"
            />
            <line
              x1="30"
              y1="11.5"
              x2="10"
              y2="11.5"
              stroke="#3d3d3d"
              stroke-width="3"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default withNamespaces()(Header);
