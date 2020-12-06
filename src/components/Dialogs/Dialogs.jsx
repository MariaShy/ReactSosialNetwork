import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogsItem from "./DialogsItem/DialogsItem";

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Nick'},
        {id: 2, name: 'Mike'},
        {id: 3, name: 'Lukas'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Why are you so sad?'},
        {id: 4, message: 'Nevermind!'}
    ]

    let dialogs = dialogsData.map(
        d => <DialogsItem name={d.name} id={d.id}/>
    )

    let messages = messagesData.map(
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