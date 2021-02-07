import styles from "./Header.module.css";
import { withNamespaces } from "react-i18next";

const Header = ({ t }) => {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logotype}>
          <div className={styles.subtitle}>{t("logotype")}</div>
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
              stroke="white"
              stroke-width="3"
            />
            <line
              x1="30"
              y1="21.5"
              x2="-1.31134e-07"
              y2="21.5"
              stroke="white"
              stroke-width="3"
            />
            <line
              x1="30"
              y1="11.5"
              x2="10"
              y2="11.5"
              stroke="white"
              stroke-width="3"
            />
          </svg>
        </div>
      </nav>

      <hr className={styles.line} />
    </header>
  );
};

export default withNamespaces()(Header);
