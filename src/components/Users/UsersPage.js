import React from "react";
import style from "./Users.module.css";
import UsersContainer from "./UsersContainer";

let UsersPage = (props) => {
  return (
    <div className={style.content}>
      <UsersContainer />
    </div>
  );
};

export default UsersPage;
