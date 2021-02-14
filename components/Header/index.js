import styles from "./Header.module.css";
import { withNamespaces } from "react-i18next";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

const Header = ({ t }) => {
  var menuStyles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      right: "20px",
      top: "30px",
    },
    bmBurgerBars: {
      background: "#0077C0",
      height: "4px",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "32px",
      width: "32px",
      right: "15px",
      top: "15px",
    },
    bmCross: {
      background: "#ffffff",
      height: "32px",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
      width: "100%",
      marginTop: "-50px",
    },
    bmMenu: {
      background: "#0077C0",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#ffffff",
      display: "flex",
      flexDirection: "column",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logotype}>
          <Link href="/">
            <a className={styles.home}>{t("logotype")}</a>
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/">
            <a className={styles.link}>О программе «Самопознание»</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>О нас</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Образовательные программы</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Пилотный проект</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Новости</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Галерея</a>
          </Link>
        </div>
        <div className={styles.menu}>
          <Menu styles={menuStyles} right={true}>
            <div className={styles.logotype}>
              <Link href="/">
                <a className={styles.home}>{t("logotype")}</a>
              </Link>
            </div>
            <div className={styles.mobileLinks}>
              <Link href="/">
                <a className={styles.link}>О программе «Самопознание»</a>
              </Link>
              <Link href="/">
                <a className={styles.link}>О нас</a>
              </Link>
              <Link href="/">
                <a className={styles.link}>Образовательные программы</a>
              </Link>
              <Link href="/">
                <a className={styles.link}>Пилотный проект</a>
              </Link>
              <Link href="/">
                <a className={styles.link}>Новости</a>
              </Link>
              <Link href="/">
                <a className={styles.link}>Галерея</a>
              </Link>
            </div>

            <div>
              
            </div>
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default withNamespaces()(Header);
