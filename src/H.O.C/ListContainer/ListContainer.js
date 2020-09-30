import React from 'react'
import classes from './ListContainer.module.css'

function ListContainer(props) {

    const listItems = props.items
    return (
        <div className={classes.listCon}>
            <h2 className={classes.heading}>{props.title}</h2>
            <ul className={classes.ul}>{
                listItems.map((item, idx) => {
                    return (
                       <a className={classes.linkTag} href='blank'key={idx} ><li > {item}</li></a> )
                })
            }</ul>
        </div>
    )
}

export default ListContainer
