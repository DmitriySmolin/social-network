import React, { useEffect, useState } from 'react';

type ProfileStatusWithHooks = {
  status: string;
  updateStatusThunk: (status: string) => void;
};

const ProfileStatusWithHooks = (props: ProfileStatusWithHooks) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activatedMode = () => {
    setEditMode(true);
  };
  const deactivatedMode = () => {
    setEditMode(false);
    props.updateStatusThunk(status);
  };

  const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode ? (
        <div>
          <span onDoubleClick={activatedMode}>{props.status}</span>
        </div>
      ) : (
        <div>
          <input onChange={onStatusChange} autoFocus type="text" value={status} onBlur={deactivatedMode} />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
