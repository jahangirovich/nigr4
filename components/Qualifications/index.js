import styles from "./Qualifications.module.css";
import { withNamespaces } from "react-i18next";

import cn from "classnames";

const Qualifications = ({ t }) => {
  return (
    <section className={styles.qualifications}>
      <div className={styles.left}>
        <div className={styles.title}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z"
              stroke="#81CEFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 4.21002L12 6.81002L16.5 4.21002"
              stroke="#81CEFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 19.79V14.6L3 12"
              stroke="#81CEFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 12L16.5 14.6V19.79"
              stroke="#81CEFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.27002 6.96002L12 12.01L20.73 6.96002"
              stroke="#81CEFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 22.08V12"
              stroke="#81CEFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

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
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.33341 1.33331H4.00008C3.64646 1.33331 3.30732 1.47379 3.05727 1.72384C2.80722 1.97389 2.66675 2.31302 2.66675 2.66665V13.3333C2.66675 13.6869 2.80722 14.0261 3.05727 14.2761C3.30732 14.5262 3.64646 14.6666 4.00008 14.6666H12.0001C12.3537 14.6666 12.6928 14.5262 12.9429 14.2761C13.1929 14.0261 13.3334 13.6869 13.3334 13.3333V5.33331L9.33341 1.33331Z"
              stroke="#81CEFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.33325 1.33331V5.33331H13.3333"
              stroke="#81CEFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.6666 8.66669H5.33325"
              stroke="#81CEFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.6666 11.3333H5.33325"
              stroke="#81CEFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.66658 6H5.99992H5.33325"
              stroke="#81CEFF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Образовательные программы</span>
        </div>
      </div>
    </section>
  );
};

export default withNamespaces()(Qualifications);
