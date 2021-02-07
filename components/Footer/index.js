import styles from "./Footer.module.css";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { BsArrowUp } from "react-icons/bs";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.logotype}>
        <div className={styles.title}>НАО НИГРЧ</div>
        <div className={styles.subtitle}>
          Некомерческое акционерное общество “Национальный институ гармоничного
          развития человека”
        </div>
      </div>
      <div className={styles.lang}>Рус</div>

      <div>
        <div className={styles.socials}>
          <div className={styles.socialLogo}>
            <FaInstagram color="#ffffff" />
          </div>
          <div className={styles.socialLogo}>
            <FiFacebook color="#ffffff" />
          </div>
          <div className={styles.socialLogo}>
            <FiYoutube color="#ffffff" />
          </div>
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
        Вверх страницы
      </div>
    </footer>
  );
}
