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
        //closes the drawer after scrolling
        props.onClose(false)
    }
    return (
        <Drawer
            anchor="right"
            open={props.open}
           onClose={()=>{props.onClose(false)}}
        >
            <List component='nav'>
                <ListItem button onClick={() => scrollToelement('')}>
                    Home
                </ListItem>
                <ListItem button onClick={() => scrollToelement('fixture')}>
                     Fixtures
                </ListItem>
                <ListItem button onClick={() => scrollToelement('news')}>
                    News
                </ListItem>
                <ListItem button onClick={() => scrollToelement('standing')}>
                    Standing
                </ListItem>
                <ListItem button onClick={() => scrollToelement('livescore')}>
                    Livescores
                </ListItem>
                
            </List>
        </Drawer>
    )
}

export default SideDrawer
