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
  return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
             <DialogItem name="Dima" id="1"/>
             <DialogItem name="Sema" id="2"/>
             <DialogItem name="Gena" id="3"/>
             <DialogItem name="Yaro" id="4"/>
         </div>
          <div className={s.messages}>
              <MessagesItem message="Hi"/>
              <MessagesItem message="Yeee"/>
              <MessagesItem message="YesYo"/>
          </div>
      </div>
  )
};

export default Dialogs;