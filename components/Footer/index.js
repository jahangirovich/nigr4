import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiYoutube, FiChevronRight } from "react-icons/fi";
import { withNamespaces } from "react-i18next";

const Footer = ({ t }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.logotype}>
        <div className={styles.subtitle}>{t("logotype")}</div>
      </div>
      <div className={styles.lang}>
        <img src="/img/rus_lang.png" />
        {t("lang")}
        <FiChevronRight />
      </div>

      <div className={styles.contacts}>
        <div className={styles.address}>
          <div>Наш адрес:</div> город Алматы,Бостандыкский р-н,микрорайон
          Дарын-1,дом 47
        </div>
        <div className={styles.phone}>
          <div>Контактный номер телефона:</div>
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
