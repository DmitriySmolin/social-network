import { DialogsActionsTypes, sendMessageAC, updateNewMessageBodyAC } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { Dispatch } from "react";
import { connect } from "react-redux";
import { RootStateType } from "../../redux/redux-store";

let mapStateToProps = (state: RootStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch: Dispatch<DialogsActionsTypes>) => {
  return {
    updateNewMessageBody: (body: string) => {
      let action = updateNewMessageBodyAC(body);
      dispatch(action);
    },
    sendMessage: () => {
      dispatch(sendMessageAC());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
