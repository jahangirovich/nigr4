import styles from "./AboutProgram.module.css";
import { withNamespaces } from "react-i18next";

import { Card } from "..";

const AboutProgram = ({ t }) => {
  return (
    <section className={styles.aboutProgram}>
      <div className={styles.titles}>
        <div className={styles.title}>
          о программе нравственно- духовного образования “Самопознание”
        </div>
      </div>
      <div className={styles.cards}>
        <Card>
          <div
            className={styles.cardImage}
            style={{
              backgroundImage: 'url("/img/about-program-1.jpg")',
            }}
          ></div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>Об авторе программы</div>
            <div className={styles.cardText}>
              Судьба автора Программы нравственно-духовного образования
              «Самопознание» Сары Алпысовны Назарбаевой – это жизнь, наполненная
              искренней заботой о детях, пример высокого служения людям...
            </div>
            <a className={styles.more} href="#">
              Подробнее
            </a>
          </div>
        </Card>
        <Card>
          <div
            className={styles.cardImage}
            style={{
              backgroundImage: 'url("/img/about-program-2.jpg")',
            }}
          ></div>
          <div className={styles.cardContent}>
            <div className={styles.cardTitle}>История развития</div>
            <div className={styles.cardText}>
              Программа нравственно-духовного образования «Самопознание» в своем
              развитии прошла следующие этапы: I – разработка концепции и
              теоретической основы: Руководство разработкой программы НДО
              «Самопознание» ведущими учеными страны...
            </div>
            <a className={styles.more} href="#">
              Подробнее
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default withNamespaces()(AboutProgram);
