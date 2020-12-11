import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Dialogs.module.css'


const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
           <div className={styles.dialogsItems}>
                <NavLink to='/dialogs/1' className={styles.dialog}>
                    Ilia
                </NavLink>
                <NavLink to='/dialogs/2' className={styles.dialog}>
                    Петя
                </NavLink>
                <NavLink to='/dialogs/3' className={styles.dialog}>
                    Грыща
                </NavLink>
                <NavLink to='/dialogs/4' className={styles.dialog}>
                    Салам
                </NavLink>
           </div>
            <div className={styles.messages}>
                <div className="message">Hi people</div>
                <div className="message">do u like reading</div>
                <div className="message">i love us</div>
            </div>
        </div>
    )
}

export default Dialogs