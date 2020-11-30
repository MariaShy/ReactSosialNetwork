import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div>
                    <NavLink to="/dialogs/1" activeClassName={s.dialog + ' ' + s.active}>Mike</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/2" activeClassName={s.dialog + ' ' + s.active}>Nick</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs/3" activeClassName={s.dialog + ' ' + s.active}>Lukas</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}> How are you? </div>
            </div>
        </div>
    );
}

export default Dialogs;