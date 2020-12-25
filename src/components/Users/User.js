import React from 'react'
import styles from './users.module.css'
import userPhoto from '../../images/user.jpg'
import {NavLink} from 'react-router-dom'

let User = (props) => {
    let elem = props.user;
        return (    
            <div>
              
                 <div key={elem.id}>
                           <span>
                               <div>
                                   <NavLink to={'/profile/' + elem.id}>
                                        <img src={elem.photos.small != null ? elem.photos.small : userPhoto} className={styles.userPhoto}/>
                                   </NavLink>
                               </div>
                               <div>
                                   {elem.followed 
                                   ? <button disabled={props.followingInProgress.some(id=> id === elem.id)} onClick={ () => {       
                                       props.unfollow(elem.id)
                                    } }>Unfollow</button> 

                                   : <button disabled={props.followingInProgress.some(id=> id === elem.id)} onClick={ () => {                       
                                    
                                       props.follow(elem.id)
                                       
                                       
                                       
                                       } }>Follow</button>}
                                   
                               </div>
                           </span>
                           <span>
                               <span>
                                    <div>{elem.name}</div>
                                    <div>{elem.status}</div>
                               </span>
                               <span>
                                    <div>{"elem.location.city"}</div>
                                    <div>{"elem.location.country"}</div>
                               </span>
                           </span>
                       </div>
            </div>
        )
    }

export default User