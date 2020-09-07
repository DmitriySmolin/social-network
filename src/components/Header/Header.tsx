import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
type HeaderPropsType = {
  isAuth: boolean;
  login: string | null;
};

const Header: React.FC<HeaderPropsType> = (props) => {
  return (
    <header className={classes.header}>
      <img src="https://www.quizony.com/company-name-generator/company-name-generator-small.jpg" alt="" />
      <div className={classes.loginBlock}>
        {props.isAuth ? <span>{props.login}</span> : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
