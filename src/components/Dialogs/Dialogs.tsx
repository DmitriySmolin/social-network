import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { DialogPageType } from "../../redux/redux-store";
import { Field, reduxForm } from "redux-form";
import { Redirect } from "react-router-dom";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthAC, required } from "../../utils/validators/validators";

type DialogsPropsType = {
  dialogsPage: DialogPageType;
  sendMessage: (newMessageBody: string) => void;
  isAuth: boolean;
};

const Dialogs: React.FC<DialogsPropsType> = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => <DialogItem key={d.id} id={d.id} name={d.name} />);

  let messagesElements = props.dialogsPage.messages.map((m) => <Message key={m.id} message={m.message} />);

  if (!props.isAuth) return <Redirect to={"/login"} />;
  const addNewMessage = (value: any) => {
    props.sendMessage(value.newMessageBody);
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_items}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

const maxLength10 = maxLengthAC(50);

const AddMessageForm: React.FC<any> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newMessageBody"
          placeholder="Enter your message"
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm",
})(AddMessageForm);

export default Dialogs;
