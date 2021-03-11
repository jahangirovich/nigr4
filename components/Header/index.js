import { useState } from "react";
import styles from "./Header.module.css";
import { withNamespaces } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiYoutube, FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import i18n from "../../i18n";
import { slide as Menu } from "react-burger-menu";
import cn from "classnames";

const Header = ({ t, blue }) => {
  var menuStyles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      right: "20px",
      top: "30px",
    },
    bmBurgerBars: {
      background: blue ? "#ffffff" : "#0077C0",
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
  const [isOpenProgram, setOpenProgram] = useState(false);
  const [isOpenAboutUs, setOpenAboutUs] = useState(false);
  const [isOpenCourses, setOpenCourses] = useState(false);
  const [isOpenPilot, setOpenPilot] = useState(false);
  const [isOpenNews, setOpenNews] = useState(false);
  const [isOpenGallery, setOpenGallery] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const openFirstLink = () => {
    setOpenProgram(true);
  };
  const closeFirstLink = () => {
    setOpenProgram(false);
  };

  const openSecondLink = () => {
    setOpenAboutUs(true);
  };
  const closeSecondLink = () => {
    setOpenAboutUs(false);
  };

  const openThirdLink = () => {
    setOpenCourses(true);
  };
  const closeThirdLink = () => {
    setOpenCourses(false);
  };

  const openFourthLink = () => {
    setOpenPilot(true);
  };
  const closeFourthLink = () => {
    setOpenPilot(false);
  };

  const openFifthLink = () => {
    setOpenNews(true);
  };
  const closeFifthLink = () => {
    setOpenNews(false);
  };

  const openSixthLink = () => {
    setOpenGallery(true);
  };
  const closeSixthLink = () => {
    setOpenGallery(false);
  };

  return (
    <header className={cn(styles.header, { [styles.blueHeader]: blue })}>
      <nav>
        <div className={styles.logotype}>
          <Link href="/">
            <a>
              <img src="img/logo.png" />
            </a>
          </Link>

          <Link href="/">
            <a className={styles.home}>{t("logotype")}</a>
          </Link>
        </div>
        <div className={styles.links}>
          <div
            className={styles.dropdown}
            onMouseEnter={() => openFirstLink()}
            onMouseLeave={() => closeFirstLink()}
          >
            <a className={styles.link}>{t("aboutProgram")}</a>

            {isOpenProgram ? (
              <div className={styles.dropdownLink}>
                <Link href="/program">
                  <a className={styles.dropdownLinkItem}>{t("aboutAuthor")}</a>
                </Link>
                <Link href="/steps">
                  <a className={styles.dropdownLinkItem}>{t("stagesFormation")}</a>
                </Link>
              </div>
            ) : null}
          </div>

          <div
            className={styles.dropdown}
            onMouseEnter={() => openSecondLink()}
            onMouseLeave={() => closeSecondLink()}
          >
            <div>
              <a className={styles.link}>{t("aboutUs")}</a>
            </div>

            {isOpenAboutUs ? (
              <div className={styles.dropdownLink}>
                <Link href="/mission">
                  <a className={styles.dropdownLinkItem}>{t("mission_name")}</a>
                </Link>
                <Link href="/tasks">
                  <a className={styles.dropdownLinkItem}>{t("tasks_name")}</a>
                </Link>
                <Link href="/structure">
                  <a className={styles.dropdownLinkItem}>
                    {t("structure_name")}
                  </a>
                </Link>
                <Link href="/direction">
                  <a className={styles.dropdownLinkItem}>
                    {t("directions_name")}
                  </a>
                </Link>
              </div>
            ) : null}
          </div>

          <div
            className={styles.dropdown}
            onMouseEnter={() => openThirdLink()}
            onMouseLeave={() => closeThirdLink()}
          >
            <div>
              <a className={styles.link}>{t("courses")}</a>
            </div>

            {isOpenCourses ? (
              <div className={styles.dropdownLink}>
                <Link href="/edu-program">
                  <a className={styles.dropdownLinkItem}>{t("eduProgram")}</a>
                </Link>
                <Link href="/tasks">
                  <a className={styles.dropdownLinkItem}>{t("reviews")}</a>
                </Link>
              </div>
            ) : null}
          </div>

          <div
            className={styles.dropdown}
            onMouseEnter={() => openFourthLink()}
            onMouseLeave={() => closeFourthLink()}
          >
            <div>
              <a className={styles.link}>{t("pilotProject")}</a>
            </div>

            {isOpenPilot ? (
              <div className={styles.dropdownLink}>
                <Link href="/about-project">
                  <a className={styles.dropdownLinkItem}>
                    {t("aboutProjectMenu")}
                  </a>
                </Link>
                <Link href="/basic-school">
                  <a className={styles.dropdownLinkItem}>
                    {t("basicSchoolsMenu")}
                  </a>
                </Link>
                <Link href="/pilot-school">
                  <a className={styles.dropdownLinkItem}>
                    {t("pilotSchoolsMenu")}
                  </a>
                </Link>
                <Link href="/event-plan">
                  <a className={styles.dropdownLinkItem}>
                    {t("eventsPlanMenu")}
                  </a>
                </Link>
                <Link href="/materials">
                  <a className={styles.dropdownLinkItem}>
                    {t("materialsMenu")}
                  </a>
                </Link>
              </div>
            ) : null}
          </div>

          <div
            className={styles.dropdown}
            onMouseEnter={() => openFifthLink()}
            onMouseLeave={() => closeFifthLink()}
          >
            <div>
              <a className={styles.link}>{t("news")}</a>
            </div>

            {isOpenNews ? (
              <div className={styles.dropdownLink}>
                <Link href="/news">
                  <a className={styles.dropdownLinkItem}>{t("newsMenu")}</a>
                </Link>
                <Link href="/announcements">
                  <a className={styles.dropdownLinkItem}>
                    {t("announcementsMenu")}
                  </a>
                </Link>
                <Link href="/press">
                  <a className={styles.dropdownLinkItem}>{t("pressMenu")}</a>
                </Link>
                <Link href="/faq">
                  <a className={styles.dropdownLinkItem}>{t("faqMenu")}</a>
                </Link>
              </div>
            ) : null}
          </div>

          <div
            className={styles.dropdown}
            onMouseEnter={() => openSixthLink()}
            onMouseLeave={() => closeSixthLink()}
          >
            <div>
              <a className={styles.link}>{t("gallery")}</a>
            </div>

            {isOpenGallery ? (
              <div className={styles.dropdownLink}>
                <Link href="/photo-gallery">
                  <a className={styles.dropdownLinkItem}>Фотогалерея</a>
                </Link>
                <Link href="/video-gallery">
                  <a className={styles.dropdownLinkItem}>Видеогалерея</a>
                </Link>
              </div>
            ) : null}
          </div>

          <div className={styles.langs}>
            <div
              onClick={() => changeLanguage("kz")}
              className={i18n.language === "kz" && styles.activeLang}
            >
              Қаз
            </div>
            <div
              onClick={() => changeLanguage("ru")}
              className={i18n.language === "ru" && styles.activeLang}
            >
              Рус
            </div>
          </div>
        </div>

        <div className={styles.menu}>
          <Menu styles={menuStyles} right={true}>
            <div className={styles.logotype}>
              <Link href="/">
                <a className={styles.home}>{t("logotype")}</a>
              </Link>
            </div>
            <div className={styles.mobileLinks}>
              <div className={styles.mobileLink}>
                <a
                  className={styles.link}
                  onClick={() => {
                    if (isOpenProgram) {
                      closeFirstLink();
                    } else {
                      openFirstLink();
                    }
                  }}
                >
                  {t("aboutProgram")}
                </a>
                {isOpenProgram ? (
                  <div className={styles.mobileDropdownMenu}>
                    <Link href="/program">
                      <a className={styles.dropdownLinkItem}>
                        {t("aboutAuthor")}
                      </a>
                    </Link>
                    <Link href="/steps">
                      <a className={styles.dropdownLinkItem}>
                        {t("stepsTitle")}
                      </a>
                    </Link>
                  </div>
                ) : null}
              </div>
              <div className={styles.mobileLink}>
                <a
                  className={styles.link}
                  onClick={() => {
                    if (isOpenAboutUs) {
                      closeSecondLink();
                    } else {
                      openSecondLink();
                    }
                  }}
                >
                  {t("aboutUs")}
                </a>
                {isOpenAboutUs ? (
                  <div className={styles.mobileDropdownMenu}>
                    <Link href="/mission">
                      <a className={styles.dropdownLinkItem}>
                        {t("mission_name")}
                      </a>
                    </Link>
                    <Link href="/tasks">
                      <a className={styles.dropdownLinkItem}>
                        {t("tasks_name")}
                      </a>
                    </Link>
                    <Link href="/structure">
                      <a className={styles.dropdownLinkItem}>
                        {t("structure_name")}
                      </a>
                    </Link>
                    <Link href="/direction">
                      <a className={styles.dropdownLinkItem}>
                        {t("directions_name")}
                      </a>
                    </Link>
                  </div>
                ) : null}
              </div>

              <div className={styles.mobileLink}>
                <a
                  className={styles.link}
                  onClick={() => {
                    if (isOpenCourses) {
                      closeThirdLink();
                    } else {
                      openThirdLink();
                    }
                  }}
                >
                  {t("courses")}
                </a>
                {isOpenCourses ? (
                  <div className={styles.mobileDropdownMenu}>
                    <Link href="/edu-program">
                      <a className={styles.dropdownLinkItem}>
                        {t("eduProgram")}
                      </a>
                    </Link>
                    <Link href="/tasks">
                      <a className={styles.dropdownLinkItem}>{t("reviews")}</a>
                    </Link>
                  </div>
                ) : null}
              </div>

              <div className={styles.mobileLink}>
                <a
                  className={styles.link}
                  onClick={() => {
                    if (isOpenPilot) {
                      closeFourthLink();
                    } else {
                      openFourthLink();
                    }
                  }}
                >
                  {t("pilotProject")}
                </a>
                {isOpenPilot ? (
                  <div className={styles.mobileDropdownMenu}>
                    <Link href="/about-project">
                      <a className={styles.dropdownLinkItem}>
                        {t("aboutProjectMenu")}
                      </a>
                    </Link>
                    <Link href="/basic-school">
                      <a className={styles.dropdownLinkItem}>
                        {t("basicSchoolsMenu")}
                      </a>
                    </Link>
                    <Link href="/pilot-school">
                      <a className={styles.dropdownLinkItem}>
                        {t("pilotSchoolsMenu")}
                      </a>
                    </Link>
                    <Link href="/event-plan">
                      <a className={styles.dropdownLinkItem}>
                        {t("eventsPlanMenu")}
                      </a>
                    </Link>
                    <Link href="/materials">
                      <a className={styles.dropdownLinkItem}>
                        {t("materialsMenu")}
                      </a>
                    </Link>
                  </div>
                ) : null}
              </div>

              <div className={styles.mobileLink}>
                <a
                  className={styles.link}
                  onClick={() => {
                    if (isOpenNews) {
                      closeFifthLink();
                    } else {
                      openFifthLink();
                    }
                  }}
                >
                  {t("news")}
                </a>
                {isOpenNews ? (
                  <div className={styles.mobileDropdownMenu}>
                    <Link href="/news">
                      <a className={styles.dropdownLinkItem}>{t("newsMenu")}</a>
                    </Link>
                    <Link href="/announcements">
                      <a className={styles.dropdownLinkItem}>
                        {t("announcementsMenu")}
                      </a>
                    </Link>
                    <Link href="/press">
                      <a className={styles.dropdownLinkItem}>
                        {t("pressMenu")}
                      </a>
                    </Link>
                    <Link href="/faq">
                      <a className={styles.dropdownLinkItem}>{t("faqMenu")}</a>
                    </Link>
                  </div>
                ) : null}
              </div>

              <div className={styles.mobileLink}>
                <a
                  className={styles.link}
                  onClick={() => {
                    if (isOpenGallery) {
                      closeSixthLink();
                    } else {
                      openSixthLink();
                    }
                  }}
                >
                  {t("gallery")}
                </a>
                {isOpenGallery ? (
                  <div className={styles.mobileDropdownMenu}>
                    <Link href="/photo-gallery">
                      <a className={styles.dropdownLinkItem}>Фотогалерея</a>
                    </Link>
                    <Link href="/video-gallery">
                      <a className={styles.dropdownLinkItem}>Видеогалерея</a>
                    </Link>
                  </div>
                ) : null}
              </div>
            </div>

            <div className={styles.linkFooter}>
              <div className={styles.socials}>
                <a href="https://www.instagram.com/p/CK3eksPDZik/?igshid=1kzvjo0g7wdav">
                  <div className={styles.socialLogo}>
                    <FaInstagram color="#454545" size={30} />
                  </div>
                </a>
                <a href="https://www.facebook.com/bobek.samopoznanie">
                  <div className={styles.socialLogo}>
                    <FiFacebook color="#454545" size={30} />
                  </div>
                </a>
                <a href="https://www.youtube.com/c/ВИДЕОУРОКИСАМОПОЗНАНИЯ/featured">
                  <div className={styles.socialLogo}>
                    <FiYoutube color="#454545" size={30} />
                  </div>
                </a>
              </div>
              <div className={styles.langs}>
                <div
                  className={`${styles.lang} ${
                    i18n.language === "ru" ? styles.activeLang : ""
                  }`}
                  onClick={() => {
                    changeLanguage("ru");
                  }}
                >
                  Рус
                </div>
                <div
                  className={`${styles.lang} ${
                    i18n.language === "kz" ? styles.activeLang : ""
                  }`}
                  onClick={() => {
                    changeLanguage("kz");
                  }}
                >
                  Қаз
                </div>
              </div>
            </div>
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default withNamespaces()(Header);
