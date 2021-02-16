import styles from "./Template.module.css";
import { withNamespaces } from "react-i18next";
import { useRouter } from 'next/router'


const Template = ({ t, children }) => {
  const router = useRouter()


  return (
    <main className={styles.Template}>
      <div onClick={() => router.back()}>Back</div>
      {children}
    </main>
  );
};

export default withNamespaces()(Template);
