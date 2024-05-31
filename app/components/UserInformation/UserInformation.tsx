import React from "react";
import UserRegister from "../UserRegister";

import styles from "./UserInformation.module.css";
const UserInformation = () => {
  return (
    <div className="p-10 my-5 bg-sky-400 text-white text-xl hover:bg-slate-500">
      UserInformation
      <UserRegister />
    </div>
  );
};

export default UserInformation;
