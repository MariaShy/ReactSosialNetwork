import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
    let dialogPath = "/dialogs/" + props.id;
    return (
        <div className={s.item}>
            <img src='https://sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg' />
            <div>
                <NavLink to={dialogPath} activeClassName={s.dialog + ' ' + s.active}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogsItem;