import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <h2 className={styles.logoH2}>
        <span className={styles.logoSpan}>KP</span>ortfolio
      </h2>
    </Link>
  );
}

export default Logo;
