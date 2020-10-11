import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
type HeaderPropsType = {
  isAuth: boolean;
  login: string | null;
  logout: (isAuth: boolean, login: string | null) => void
};

const Header: React.FC<any> = (props) => {
  return (
    <header className={classes.header}>
      <img src="https://www.quizony.com/company-name-generator/company-name-generator-small.jpg" alt="" />
      <div className={classes.loginBlock}>
        {props.isAuth ? <div><span>{props.login}</span> - <button onClick={props.logout}>Log out</button></div> : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
