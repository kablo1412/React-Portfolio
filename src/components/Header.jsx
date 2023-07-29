import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={styles.lista}>
        <li className={styles.link}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.link}>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <a
          href="https://github.com/kablo1412"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            style={{ fontSize: "1.4rem", color: "var(--svijetla)" }}
            icon={faGithub}
          />
        </a>
      </ul>
    </nav>
  );
}
