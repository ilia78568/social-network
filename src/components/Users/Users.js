import React from 'react'
import styles from './users.module.css'
import * as axios from 'axios'
import userPhoto from '../assets/images/user.jpg'

class Users extends React.Component {
    constructor(props) {
        super(props)

        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(res => {
                    this.props.setUsers(res.data.items)
                })
            }  

    }

    render() {
        return (    
            <div>
                {/* <button onClick={this.getUsers}>Get Users</button> */}
                   {this.props.users.map(elem => {
                       return <div key={elem.id}>
                           <span>
                               <div>
                                   <img src={elem.photos.small != null ? elem.photos.small : userPhoto} className={styles.userPhoto}/>
                               </div>
                               <div>
                                   {elem.followed 
                                   ? <button onClick={ () => this.props.unfollow(elem.id) }>Unfollow</button> 
                                   : <button onClick={ () => this.props.follow(elem.id) }>Follow</button>}
                                   
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
}

export default Users