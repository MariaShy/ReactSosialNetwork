import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog + ' ' + s.active}>Mike</div>
                <div className={s.dialog}>Nick</div>
                <div className={s.dialog}>Lukas</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}> How are you? </div>
            </div>
        </div>
    );
}

export default Dialogs;