import React from "react";
import classes from "./../Dialogs.module.css";

type MessagePropsType = {
  message: string;
};

const Message: React.FC<MessagePropsType> = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

export default Message;
