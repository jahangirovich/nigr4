import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiYoutube, FiChevronRight } from "react-icons/fi";
import i18n from "../../i18n";
import { withNamespaces } from "react-i18next";
import useComponentVisibility from "../../hooks/useComponentVisibility";

const langs = [
  { name: "kz", icon: "/img/kaz_lang.png", text: "Қаз" },
  { name: "ru", icon: "/img/rus_lang.png", text: "Рус" },
];

const Dropdown = ({ className, control, items, showOnload = false }) => {
  const { ref, isVisible, setIsVisible } = useComponentVisibility(showOnload);
  return (
    <div
      ref={ref}
      className={styles.dropdownbtn}
      onClick={() => setIsVisible(!isVisible)}
    >
      {control}
      {isVisible ? <div className={className}>{items}</div> : null}
    </div>
  );
};

const Footer = ({ t }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const currentLang = langs.find((l) => l.name === i18n.language);
  const otherLangs = langs.filter((l) => l.name !== i18n.language);

  return (
    <footer className={styles.footer}>
      <div className={styles.logotype}>
        <div className={styles.subtitle}>{t("logotype")}</div>
      </div>

      <Dropdown
        className={`${styles.dropdown}`}
        control={
          <div
            className={styles.lang}
            onClick={() => changeLanguage(currentLang.name)}
          >
            <img src={currentLang.icon} />
            {currentLang.text}
            <FiChevronRight />
          </div>
        }
        items={
          <>
            {otherLangs.map((l, i) => (
              <div
                key={i}
                className={styles.lang}
                onClick={() => changeLanguage(l.name)}
              >
                <img src={l.icon} />
                {l.text}
                <FiChevronRight />
              </div>
            ))}
          </>
        }
      />


      <div className={styles.contacts}>
        <div className={styles.address}>
          <div>{t("ourAddress")}</div> {t("address")}
        </div>
        <div className={styles.phone}>
          <div>{t("phoneNumber")}</div>
          <a href="tel:+77272997172"> +7 (727) 299-71-72</a>
        </div>
        <div className={styles.email}>
          <div>E-mail:</div> <a href="mailto:nigrch@mail.ru">nigrch@mail.ru</a>
        </div>
      </div>

      <div>
        <div className={styles.socials}>
          <a href="https://www.instagram.com/p/CK3eksPDZik/?igshid=1kzvjo0g7wdav">
            <div className={styles.socialLogo}>
              <FaInstagram color="#ffffff" size={30} />
            </div>
          </a>
          <a href="https://www.facebook.com/bobek.samopoznanie">
            <div className={styles.socialLogo}>
              <FiFacebook color="#ffffff" size={30} />
            </div>
          </a>
          <a href="https://www.youtube.com/c/ВИДЕОУРОКИСАМОПОЗНАНИЯ/featured">
            <div className={styles.socialLogo}>
              <FiYoutube color="#ffffff" size={30} />
            </div>
          </a>
        </div>
        <div className={styles.copyright}>© 2021 Самопознание</div>
      </div>
      <div className={styles.toTop} onClick={scrollTop}>
        <svg
          width="24"
          height="31"
          viewBox="0 0 24 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 12L12 1L23 12"
            stroke="#0077C0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <line
            x1="12"
            y1="30"
            x2="12"
            y2="2"
            stroke="#0077C0"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        {t("toUp")}
      </div>
    </footer>
  );
};

export default withNamespaces()(Footer);
