import styles from "./FAQ.module.css";
import { withNamespaces } from "react-i18next";
import { FiChevronRight, FiChevronDown, FiHelpCircle } from "react-icons/fi";
import { useState } from "react";
import cn from "classnames";
import i18n from "../../i18n";

const faqs = [
  {
    question:
      "Где можно найти электронный вариант учебника по самопознанию для второго класса?",
    questionKz:
      "Екінші сыныпқа арналған Өзін-өзі тану оқулығының электронды нұсқасын қайдан табуға болады?",

    link: "#",
    response: `Все электронные учебники с 1-11 классов можете посмотреть и скачать на портале ozin-ozi-tanu.kz, в разделе ученикам (электронные учебники) http://school.ozin-ozi-tanu.kz/library/show/id/63`,
    responseKz: `1-11 сыныптардағы барлық электронды оқулықтарды порталдан жүктеп, көре аласыздар ozin-ozi-tanu.kz, оқушыларға арналған бөлімде (электрондық оқулықтар) http://school.ozin-ozi-tanu.kz/library/show/id/63`,
    isOpen: false,
  },
  {
    question:
      "Как можно подписаться на республиканский научно-методический журнал «Самопознание.kz?",
    questionKz:
      'Республикалық ғылыми-әдістемелік журналға қалай жазылуға болады "Самопознание.kz?"',
    link: "#",
    response:
      "Подписка на республиканский научно-методический журнал «Самопознание.kz» производится на Казпочте по местожительству, индекс журнала «Самопознание.kz» – 74286.",
    responseKz:
      'Республикалық ғылыми-әдістемелік журналға жазылу "Самопознание.kz"Қазпоштада тұрғылықты жері бойынша жүргізіледі, журналдың индексі "Самопознание.kz" – 74286.',
    isOpen: false,
  },
  {
    question:
      "Какие требования предъявляются для публикации в республиканском научно-методическом журнале «Самопознание.kz»?",
    questionKz:
      'Республикалық ғылыми-әдістемелік журналда жариялау үшін қандай талаптар қойылады "Самопознание.kz"?',

    link: "#",
    response:
      "1. Предоставляемые статьи должны являться оригинальными, неопубликованными ранее в других печатных или электронных изданиях. 2. Статья предоставляется в электронном виде как файл «Microsoft Word» (на электронном носителе или по электронной почте) на казахском/русском языке. 3. Объём текста статьи: 3 - 5 стр. 4. Технические требования к оформлению текста:",
    responseKz:
      "1. Ұсынылған мақалалар түпнұсқа, бұрын басқа баспа немесе электронды басылымдарда жарияланбаған болуы керек. 2. Мақала қазақ/орыс тілінде «Microsoft Word» файлы ретінде (электрондық тасығышта немесе электрондық пошта арқылы) электрондық түрде ұсынылады. 3. Мақала мәтінінің көлемі: 3-5 бет 4. Мәтінді ресімдеуге қойылатын техникалық талаптар:",
    isOpen: false,
  },
];

const FAQ = ({ t }) => {
  const [faqState, setFaqState] = useState(faqs);

  function handleOpen(i) {
    const newFaqState = faqState;
    newFaqState[i].isOpen = !newFaqState[i].isOpen;
    setFaqState([...newFaqState]);
  }

  return (
    <div className={styles.faq}>
      <div className={styles.header}>
        <div className={styles.title}>
          <FiHelpCircle size={40} />
          <span>{t("faq")}</span>
        </div>
      </div>
      <div className={styles.body}>
        {faqState.map((item, i) => (
          <div className={styles.item} onClick={() => handleOpen(i)}>
            <div className={styles.question}>
              <div className={styles.itemNumber}>{i + 1}</div>
              <div
                className={cn(styles.itemTitle, {
                  [styles.isOpen]: item.isOpen,
                })}
              >
                {i18n.language === "ru" ? item.question : item.questionKz}
              </div>
              <div
                className={cn(styles.itemChevron, {
                  [styles.isOpen]: item.isOpen,
                })}
              >
                {item.isOpen ? (
                  <FiChevronDown size={24} />
                ) : (
                  <FiChevronRight size={24} />
                )}
              </div>
            </div>
            {item.isOpen && (
              <div className={styles.response}>
                {i18n.language === "ru" ? item.response : item.responseKz}

                <a className={styles.more} href={item.link}>
                  {t("more")}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default withNamespaces()(FAQ);
