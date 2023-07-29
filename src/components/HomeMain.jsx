import styles from "./HomeMain.module.css";
import { Link } from "react-router-dom";

function HomeMain() {
  return (
    <div className={styles.HomeMain}>
      <div className={styles.about}>
        <h1>
          KP<span className={styles.ortfolio}>ortfolio</span>
          <span className={styles.quote}>
            - Creative Force Behind The Screen.
          </span>
        </h1>
        <div className={styles.skills}>
          <img
            className={styles.skillLogo}
            src="/data/html-5.png"
            alt="HTML5"
          />
          <img className={styles.skillLogo} src="/data/css-3.png" alt="CSS" />
          <img className={styles.skillLogo} src="/data/sass.png" alt="SASS" />

          <img
            className={styles.skillLogo}
            src="/data/js.png"
            alt="JAVASCRIPT"
          />
          <img
            className={styles.skillLogo}
            src="/data/physics.png"
            alt="REACT"
          />
          <img className={styles.skillLogo} src="/data/git.png" alt="GIT" />
        </div>
      </div>
      <div className={styles.buttonsDiv}>
        <Link to="/projects">
          <button className="button">CHECK MY PROJECTS</button>
        </Link>
        <p className={styles.email}>CONTACT : karlo796@gmail.com</p>
      </div>
    </div>
  );
}

export default HomeMain;
