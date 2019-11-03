import React from "react";
import s from './Dialogs.module.css';
import MessagesItem from "./Message/Message"
import DialogItem from "./DialogItem/DialogItem"


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.state.messages.map(message => <MessagesItem message={message.message} />);

    let txt = React.createRef();

    let sendMessage = () => {
        console.log(txt.current.value);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
            <textarea ref={txt}/>
            <button onClick={sendMessage}>send</button>
        </div>
    )
};

export default Dialogs;