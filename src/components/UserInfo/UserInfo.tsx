import React from "react";
import styles from "./UserInfo.module.css";

const UserInfo = () => {
  return (
    <div className={styles.user}>
      <img src={require("../../assets/images/user-profile.png")} alt="" />
      <p>John Doe</p>
    </div>
  );
};

export default UserInfo;
