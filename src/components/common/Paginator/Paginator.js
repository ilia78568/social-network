import React, { useState } from 'react'
import styles from './Paginator.module.css'

let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
    let pages = [];
    
    for(let i=1; i<= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount/ props.portionSize)
    let [portionNumber,setPortionNumber]= useState(1)
    let leftNum = (portionNumber - 1)* props.portionSize + 1
    let rightNum = portionNumber* props.portionSize    
    
    return (    
                <div>
                    { portionNumber >1 &&
                    <button onClick={() => setPortionNumber(portionNumber-1)}>Left</button>}
                    {pages
                    .filter(p => p >= leftNum && p<=rightNum)
                    .map(p => {
                        return <span onClick={() => { props.onPageChanged(p)}}
                        className={props.currentPage === p  && styles.selectedPage}>{p}</span>
                    })}
                    {portionCount > portionNumber &&
                    <button onClick={() => setPortionNumber(portionNumber+1)}>Next</button>}
                   
                </div>

        )
    }

export default Paginator