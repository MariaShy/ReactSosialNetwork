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

    let dialogsData = [
        {id: 1, name: 'Nick'},
        {id: 2, name: 'Mike'},
        {id: 3, name: 'Lukas'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Why are you so sad?'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>
            <div className={s.messages}>
                <Message text={messagesData[0].message} />
                <Message text={messagesData[1].message} />
                <Message text={messagesData[2].message} />
            </div>
        </div>
    );
}

export default Dialogs;