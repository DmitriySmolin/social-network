import { DialogsActionsTypes, sendMessageAC } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { RootStateType } from "../../redux/redux-store";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";
import { Dispatch } from "react";

let mapStateToProps = (state: RootStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch: Dispatch<DialogsActionsTypes>) => {
  return {
    sendMessage: (newMessageBody: string) => {
      dispatch(sendMessageAC(newMessageBody));
    },
  };
};

export default compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogs);
