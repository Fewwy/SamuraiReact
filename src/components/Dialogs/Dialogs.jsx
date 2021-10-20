import React from "react";

import styleClasses from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.messagesData.map((messagesArray) => (
    <Message message={messagesArray.message} />
  ));

  return (
    <div className={styleClasses.dialogs}>
      <div className={styleClasses.dialogsitems}>{dialogsElements}</div>
      <div className={styleClasses.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
