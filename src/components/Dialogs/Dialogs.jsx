import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let dialogPath = "/dialogs/" + props.id;
    return (
        <div>
            <NavLink to={dialogPath} activeClassName={s.dialog + ' ' + s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.text}
        </div>
    )
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItem name="Mike" id="1"/>
                <DialogsItem name="Nick" id="2"/>
                <DialogsItem name="Lukas" id="3"/>
            </div>
            <div className={s.messages}>
                <Message text="Hi" />
                <Message text="How are you?" />
                <Message text="Why are you so sad?" />
            </div>
        </div>
    );
}

export default Dialogs;