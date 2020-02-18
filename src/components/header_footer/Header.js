import React,{Component} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import SideDrawer from './SideDrawer'

class  Header extends Component {
    state = {
        drawerOpen: false,
       
    }
    //drawer toggler
    toggleDrawer = (value) => {
        this.setState({drawerOpen: value})
    }
    render(){
        return (
            <AppBar>
                <Toolbar>
                <div className='header_logo'>
                            <div className='font_righteous header_logo_venue'>ByteSport</div>
                </div>
                <IconButton
                            aria-label='menu'
                            color="inherit"
                            onClick={()=> this.toggleDrawer(true)}
                        >
                            <MenuIcon/>
                </IconButton>
                <SideDrawer
                        open={this.state.drawerOpen}
                        onClose={(value)=> this.toggleDrawer(value)}
                    />
                </Toolbar>
            </AppBar>
        )
    }
   
}

export default Header
