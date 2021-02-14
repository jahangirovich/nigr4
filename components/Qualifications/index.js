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
        <div className={styles.text}>
          Образовательная программа курсов повышения квалификации педагогов
          «Научно-методологические основы предмета «Самопознание» (далее –
          Программа) предназначена для руководителей организаций образования, их
          заместителей.
        </div>
        {/* <div className={styles.button}>График курсов</div> */}

        <div className={styles.text}>
          Программа направлена на получение руководителями, заместителями
          руководителей организаций образования знаний по организации
          деятельности в рамках программы нравственно-духовного образования
          «Самопознание» в организациях образования.
        </div>
        <div className={styles.eduProgramButton}>
          <div>
            <FiFileText size={30} />
          </div>
          <span>Образовательные программы</span>
        </div>
      </div>
    </section>
  );
};

export default withNamespaces()(Qualifications);
