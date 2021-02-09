import cn from "classnames";
import styles from "./Button.module.css";

const Button = ({children, className}) => (
    <button className={cn(styles.button, className)}>{children}</button>
)

export default Button;