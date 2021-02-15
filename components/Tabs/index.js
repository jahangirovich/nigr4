import styles from "./Tabs.module.css";
import cn from "classnames"

const Tabs = ({value, onChange, lang, items = [], theme = "default"}) => (
    <div className={cn(styles.tabs, theme)}>
        {items.map((tab) => (
            <div onClick={() => onChange(tab.value)} key={tab.value} className={cn(styles.tab, {
                [styles.active]: tab.value === value
            })}>
                {lang === "ru" ? tab.label : tab.labelKz}
            </div>
        ))}
    </div>
)

export default Tabs;