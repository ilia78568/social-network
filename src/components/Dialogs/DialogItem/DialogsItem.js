import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../Dialogs.module.css'


const DialogsItem = (props) => {
    return (
        <NavLink to={'/dialogs/' + props.id} className={styles.dialog}>
             {props.name}
        </NavLink>
    )
}

export default DialogsItem