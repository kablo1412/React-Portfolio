import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} by KPortfolio.
      </p>
    </footer>
  );
}

export default Footer;
