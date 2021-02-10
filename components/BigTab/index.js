import styles from "./BigTab.module.css";
import cn from "classnames";
const BigTab = ({ children, value, onClick, tab, theme = "default" }) => (
  <button onClick={() => onClick(tab)} className={cn(styles.bigTab, { [styles.active]: value === tab }, theme)}>
    {children}
  </button>
);
export default BigTab;
