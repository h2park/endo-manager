import React from 'react';
// import styles from './index.css';

const UserDevice = ({device, onDelete}) => {
  const onClickDelete = () => onDelete(device)

  return (
    <li>
      {device.uuid}
      <button onClick={onClickDelete}>x</button>
    </li>
  )
}

export default UserDevice;
