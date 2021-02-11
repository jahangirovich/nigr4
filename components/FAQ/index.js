import styles from "./FAQ.module.css";
import { withNamespaces } from "react-i18next";
import { FiChevronRight, FiChevronDown, FiHelpCircle } from "react-icons/fi";
import { useState } from "react";

const faqs = [
  {
    question:
      "Где можно найти электронный вариант учебника по самопознанию для второго класса?",
    link: "#",
    response: `Все электронные учебники с 1-11 классов можете посмотреть и скачать на портале ozin-ozi-tanu.kz, в разделе ученикам (электронные учебники) http://school.ozin-ozi-tanu.kz/library/show/id/63`,
    isOpen: false,
  },
  {
    question:
      " Как можно подписаться на республиканский научно-методический журнал «Самопознание.kz?",
    link: "#",
    response:
      "Подписка на республиканский научно-методический журнал «Самопознание.kz» производится на Казпочте по местожительству, индекс журнала «Самопознание.kz» – 74286.",
    isOpen: false,
  },
  {
    question:
      "Какие требования предъявляются для публикации в республиканском научно-методическом журнале «Самопознание.kz»?",
    link: "#",
    response:
      "1. Предоставляемые статьи должны являться оригинальными, неопубликованными ранее в других печатных или электронных изданиях. 2. Статья предоставляется в электронном виде как файл «Microsoft Word» (на электронном носителе или по электронной почте) на казахском/русском языке. 3. Объём текста статьи: 3 - 5 стр. 4. Технические требования к оформлению текста:",
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
          <FiHelpCircle size={24} />
          <span>FAQ / Часто задаваемые вопросы</span>
        </div>
      </div>
      <div className={styles.body}>
        {faqState.map((item, i) => (
          <div className={styles.item} onClick={() => handleOpen(i)}>
            <div className={styles.question}>
              <div className={styles.itemNumber}>{i + 1}</div>
              <div className={styles.itemTitle}>{item.question}</div>
              <div className={styles.itemChevron}>
                {item.isOpen ? (
                  <FiChevronDown size={24} />
                ) : (
                  <FiChevronRight size={24} />
                )}
              </div>
            </div>
            {item.isOpen && (
              <div className={styles.response}>
                {item.response}

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
