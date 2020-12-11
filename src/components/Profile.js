import React from 'react'
import styles from './Profile.module.css'


const Profile = () => {
  return (
    <div className={styles.content}>
    <div>
      <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"/>
    </div>
    <div>
      ava+descr
    </div>
    <div className="posts">
      My post
      <div className={styles.item}>
        Pos1
      </div>
      <div className={styles.item}>
        Pos2
      </div>
    </div>
  </div>
  )
}

export default Profile;
