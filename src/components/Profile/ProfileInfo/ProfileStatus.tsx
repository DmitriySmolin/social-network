import React from "react";

type ProfileStatusPropsType = {
  status: string;
  updateStatusThunk: (status: string) => void;
};

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  state = {
    editMode: false,
    status: this.props.status,
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
    this.props.updateStatusThunk(this.state.status);
  };

  onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps: any, prevState: any) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.activatedMode}>{this.props.status}</span>
          </div>
        ) : (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus
              type="text"
              value={this.state.status}
              onBlur={this.deactivatedMode}
            />
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
