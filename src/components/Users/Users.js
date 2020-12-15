import React from 'react'
import styles from './users.module.css'
import userPhoto from '../../images/user.jpg'
import {NavLink} from 'react-router-dom'
import * as axios from 'axios'

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    
    for(let i=1; i<= pagesCount; i++) {
        pages.push(i)
    }
        return (    
            <div>
                <div>
                    {pages.map(p => {
                        return <span onClick={() => { props.onPageChanged(p)}}
                        className={props.currentPage === p  && styles.selectedPage}>{p}</span>
                    })}
                   
                </div>
                   {props.users.map(elem => {
                       return <div key={elem.id}>
                           <span>
                               <div>
                                   <NavLink to={'/profile/' + elem.id}>
                                        <img src={elem.photos.small != null ? elem.photos.small : userPhoto} className={styles.userPhoto}/>
                                   </NavLink>
                               </div>
                               <div>
                                   {elem.followed 
                                   ? <button onClick={ () => {
                                       
                                       
                                       axios.delete(`https://social-network.samuraijs.com/api/1.0/users/follow/${elem.id}`,  {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY' : '3214a09a-b287-4d4d-9d6d-14a050c8456a'
                                        }
                                      })
                                       .then(res => {
                                           if(res.data.resultCode === 0) {
                                            props.unfollow(elem.id)
                                           }
                                           
                                       })
                                    
                                    } }>Unfollow</button> 
                                   : <button onClick={ () => {                       
                                    
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/users/follow/${elem.id}`, {} , {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY' : '3214a09a-b287-4d4d-9d6d-14a050c8456a'
                                        }
                                      })
                                       .then(res => {
                                           if(res.data.resultCode === 0) {
                                            props.follow(elem.id)
                                           }
                                           
                                       })
                                       
                                       
                                       
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
                   })
                }
            </div>
        )
    }

export default Users