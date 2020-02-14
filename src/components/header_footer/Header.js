import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <MenuIcon />
            </Toolbar>
        </AppBar>
    )
}

export default Header
