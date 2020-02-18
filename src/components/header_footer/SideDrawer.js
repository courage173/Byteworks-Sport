import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import {scroller} from 'react-scroll'

const SideDrawer = (props)=> {

    const scrollToelement = (element) =>{
        scroller.scrollTo(element,{
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150
        })
        props.onClose(false)
    }
    return (
        <Drawer
            anchor="right"
            open={props.open}
           onClose={()=>{props.onClose(false)}}
        >
            <List component='nav'>
                <ListItem button onClick={() => scrollToelement('featured')}>
                    Home
                </ListItem>
                <ListItem button onClick={() => scrollToelement('venuenfo')}>
                     Fixtures
                </ListItem>
                <ListItem button onClick={() => scrollToelement('venuenfo')}>
                    News
                </ListItem>
                <ListItem button onClick={() => scrollToelement('venuenfo')}>
                    Livescores
                </ListItem>
                
            </List>
        </Drawer>
    )
}

export default SideDrawer
