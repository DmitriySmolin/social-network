import React from 'react';
import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

type DialogItemPropsType = {
  id: number;
  name: string;
};

const DialogItem = (props: DialogItemPropsType) => {
  let path = `/dialogs/${props.id}`;
  return (
    <div className={`${classes.dialog} ${classes.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
