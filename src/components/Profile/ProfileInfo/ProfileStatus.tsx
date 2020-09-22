import React from "react";

type ProfileStatusPropsType = {
  status: string;
};

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  state = {
    editMode: false,
  };

  activatedMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivatedMode = () => {
    this.setState({
      editMode: false,
    });
  };

  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activatedMode}>{this.props.status}</span>
          </div>
        ) : (
          <div>
            <input autoFocus type="text" value={this.props.status} onBlur={this.deactivatedMode} />
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
