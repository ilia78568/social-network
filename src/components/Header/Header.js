import React from 'react'
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"/>
  
      <div className={styles.loginBlock}>
        {props.isAuth ? <div>{props.login}  <button onClick={props.logout}>Logout</button></div> 
        :  <NavLink to={'/login'}>Login</NavLink>}
       

      </div>
  </header>
  )
}

export default Header;
