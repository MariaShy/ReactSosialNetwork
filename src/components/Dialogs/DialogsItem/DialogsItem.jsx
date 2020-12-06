import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
    let dialogPath = "/dialogs/" + props.id;
    return (
        <div>
            <NavLink to={dialogPath} activeClassName={s.dialog + ' ' + s.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogsItem;