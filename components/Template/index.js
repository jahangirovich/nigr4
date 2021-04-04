import styles from "./Template.module.css";
import { withNamespaces } from "react-i18next";
import { useRouter } from "next/router";
import { FiArrowLeftCircle } from "react-icons/fi";

const Template = ({ t, children }) => {
  const router = useRouter();

  return (
    <main className={styles.template}>
      <div className={styles.back} onClick={() => router.back()}>
        <FiArrowLeftCircle color="#0077c0" size={40} />
      </div>
      <div className={styles.content}>{children}</div>
    </main>
  );
};

export default withNamespaces()(Template);
