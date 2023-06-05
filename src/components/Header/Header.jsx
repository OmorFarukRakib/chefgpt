import React from "react";
import styles from "./header.module.css";
import chefLogo from "./../../assets/chefLogo.png";
const Header = () => {
  return (
    <div className={styles["header-wrapper"]}>
      <img src={chefLogo} alt="chefLogo" />
      <div>
        <h1 className={styles["header-title-wrapper"]}>ChefGPT</h1>
        <h2 className={styles["header-subtitle-wrapper"]}>To the rescue</h2>
      </div>
    </div>
  );
};

export default Header;
