import React from 'react';

import styleClasses from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addNewMessageActionCreator, sendNewMessageActionCreator } from '../../redux/state/state';

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.messagesData.map((messagesArray) => (
    <Message message={messagesArray.message} />
  ));
  let newMessageText = props.newMessageTextData

  let newMessageElement = React.createRef();
  const onMessageChange = (e) => {
    let text = e.target.value
    props.dispatch(addNewMessageActionCreator(text))
  }
  const sendNewMessage = () => {
    props.dispatch(sendNewMessageActionCreator())
  }

  return (
    <div className={styleClasses.dialogs}>
      <div className={styleClasses.dialogsitems}>{dialogsElements}</div>
      <div className={styleClasses.messagesTab}>
        <div className={styleClasses.messages}>
          {messagesElements}
          <div>
          <textarea
          ref={newMessageElement}
          onChange={onMessageChange}
          className={styleClasses.dialogsTextArea}
          value={newMessageText}
          >
          </textarea>
          </div>
          <div>
          <button
          className={styleClasses.sendMessageButton}
          onClick={sendNewMessage}
          >
            Send Message
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
