import React from 'react'
import styles from './users.module.css'
import * as axios from 'axios'
import userPhoto from '../assets/images/user.jpg'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(res => {
            this.props.setUsers(res.data.items)
            this.props.setTotalUsersCount(res.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(res => {
            this.props.setUsers(res.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];
        
        for(let i=1; i<= pagesCount; i++) {
            pages.push(i)
        }

        return (  
              
            <div>
                <div>
                    {pages.map(p => {
                        return <span onClick={() => { this.onPageChanged(p)}}
                        className={this.props.currentPage === p  && styles.selectedPage}>{p}</span>
                    })}
                   
                </div>
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