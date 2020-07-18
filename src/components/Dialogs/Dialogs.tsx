import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { DialogType, MessageType } from '../../redux/state';


type PropsType = {
  state: {
    dialogs: Array<DialogType>;
    messages: Array<MessageType>;
  };
}

const Dialogs = (props: PropsType) => {
  let dialogsElements = props.state.dialogs.map((d: any) => (
    <DialogItem key={d.id} id={d.id} name={d.name} />
  ));

  let messagesElements = props.state.messages.map((m: any) => (
    <Message key={m.id} message={m.message} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>{dialogsElements}</div>
      <div className={classes.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
