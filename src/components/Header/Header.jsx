import styles from "./Header.module.scss";
import Switch from "react-switch";
// import { useState } from "react";

const Header = ({ checked, setCheked }) => {
  return (
    <div className={styles["header"]}>
      <span className={styles["name"]}>Dedottag</span>
      <div className={styles["dark-mode"]}>
        <span>Темная тема</span>
        <div className={styles["toggle"]}>
          <div className={styles["toggles"]}>
            <label className={styles["label"]}>
              <Switch
                checked={checked}
                onChange={() => {
                  setCheked(!checked);
                }}
                width={100}
                height={50}
                uncheckedIcon={false}
                checkedIcon={false}
                offColor={"#bcbfc2"}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
