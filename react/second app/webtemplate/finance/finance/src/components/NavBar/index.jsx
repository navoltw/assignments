﻿import React from "react";
import styles from "./navbar.module.css";

//TODO Web Template Studio: Add a new link in the NavBar for your page here.
// A skip link is included as an accesibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
export default function NavBar() {
  return (
    <React.Fragment>
      <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div>
      <nav className="navbar navbar-expand-sm navbar-light border-bottom justify-content-between">
        <a className="navbar-brand" href="/">
          finance
        </a>
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="Master_Detail">
            Master_Detail
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
}
