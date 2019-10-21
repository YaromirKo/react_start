import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
};

const MessagesItem = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};

const Dialogs = (props) => {
// eslint-disable-next-line
    let dialogsData = [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Sema' },
        { id: 3, name: 'Gena' },
        { id: 4, name: 'Yaro' }
    ];

    let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    // eslint-disable-next-line
    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hi Sema' },
        { id: 3, message: 'Yeee' },
        { id: 4, message: 'YesYo' }
    ];

    let messagesElements = messagesData.map(message => <MessagesItem message={message.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
};

export default Dialogs;