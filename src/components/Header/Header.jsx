import styles from "./Header.module.scss";
import Switch from "react-ios-switch";
// import { useState } from "react";

const Header = ({ checked, setCheked }) => {
  return (
    <div className={styles["header"]}>
      <span className={styles["name"]}>Dedottag</span>
      <div className={styles["dark-mode"]}>
        <span>Темная тема</span>
        <div className={styles["toggle"]}>
          <div className={styles["toggles"]}>
            <Switch
              checked={checked}
              onChange={() => {
                setCheked(!checked);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
