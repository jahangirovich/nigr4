import styles from "./Qualifications.module.css";
import { withNamespaces } from "react-i18next";
import { FiCodesandbox, FiFileText } from "react-icons/fi";

import cn from "classnames";

const Qualifications = ({ t }) => {
  return (
    <section className={styles.qualifications}>
      <div className={styles.left}>
        <div className={styles.icon}>
          <FiCodesandbox size={40} />
        </div>

        <div className={styles.title}>
          <span>{t("qualifications")}</span>
        </div>
      </div>

      <div className={styles.eduProgram}>
        <div className={styles.text}>{t("qualText1")}</div>
        {/* <div className={styles.button}>График курсов</div> */}

        <div className={styles.text}>{t("qualText2")}</div>
        
          <div className={styles.eduProgramButton}>
            <a href="/edu-program" className={styles.eduProgramButton}>
              <div>
                  <FiFileText size={30} />
              </div>
              <span>{t("eduProgram")}</span>
            </a>
          </div>
      </div>
    </section>
  );
};

export default withNamespaces()(Qualifications);
