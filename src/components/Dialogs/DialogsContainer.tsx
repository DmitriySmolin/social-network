import { DialogsActionsTypes, sendMessageAC, updateNewMessageBodyAC } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RootStateType } from "../../redux/redux-store";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state: RootStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch: any) => {
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

export default compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(Dialogs);

// const AuthRedirectComponent: any = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

// export default DialogsContainer;
