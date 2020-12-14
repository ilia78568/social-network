import React from 'react'
import styles from './users.module.css'
import * as axios from 'axios'
import userPhoto from '../assets/images/user.jpg'

const Users = (props) => {
    
    if (props.users.length === 0) {
        
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                props.setUsers(res.data.items)
            })
        
        // props.setUsers([
        //     {id: 1,  followed: false, fullName: 'ILIA', status: 'ima boss', location: {city: 'Minsk', country: 'Belarus'}, photoUrl: 'https://vokrug-tv.ru/pic/person/6/e/0/2/6e02e4d5202366442710552912e7a10f.jpg' },
        //     {id: 2,  followed: true, fullName: 'ILIA', status: 'ima boss', location: {city: 'Minsk', country: 'Belarus'}, photoUrl: 'https://vokrug-tv.ru/pic/person/6/e/0/2/6e02e4d5202366442710552912e7a10f.jpg' },
        //     {id: 3,  followed: true, fullName: 'ILIA', status: 'ima boss', location: {city: 'Minsk', country: 'Belarus'}, photoUrl: 'https://vokrug-tv.ru/pic/person/6/e/0/2/6e02e4d5202366442710552912e7a10f.jpg' },
        //     {id: 4,  followed: false, fullName: 'ILIA', status: 'ima boss', location: {city: 'Minsk', country: 'Belarus'}, photoUrl: 'https://vokrug-tv.ru/pic/person/6/e/0/2/6e02e4d5202366442710552912e7a10f.jpg' },
        //     ])
    }
    

    return (
        <div>
               {props.users.map(elem => {
                   return <div key={elem.id}>
                       <span>
                           <div>
                               <img src={elem.photos.small != null ? elem.photos.small : userPhoto} className={styles.userPhoto}/>
                           </div>
                           <div>
                               {elem.followed 
                               ? <button onClick={ () => props.unfollow(elem.id) }>Unfollow</button> 
                               : <button onClick={ () => props.follow(elem.id) }>Follow</button>}
                               
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