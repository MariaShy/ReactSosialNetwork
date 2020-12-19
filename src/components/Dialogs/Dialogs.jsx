import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogsItem from "./DialogsItem/DialogsItem";

const Dialogs = (props) => {


    let dialogs = props.state.dialogsData.map(
        d => <DialogsItem name={d.name} id={d.id}/>
    )

    let messages = props.state.messagesData.map(
       m => <Message text={m.message} />
    )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
        </div>
    );
}

export default Dialogs;