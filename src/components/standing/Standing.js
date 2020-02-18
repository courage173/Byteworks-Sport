import React,{Component, Fragment} from 'react';
import {connect} from "react-redux"
import {getFix,getTable,getHighlight} from '../../redux-stuffs/Actions/callAction';

//styles stuff
import './standing.css'
import { withStyles } from '@material-ui/core/styles';
import Slide from 'react-reveal/Slide'


const styles ={
  root: {
    minWidth: 275,
    marginTop: '1vh'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
      //padding: '2vh',
    marginBottom: 12,
  },
  league: {
      marginTop: "5vh",
      alignItems: "center"
  },
  content: {
      
  }
};

class Standing extends Component {
    state = {
        data: [],
        load: false,
    }
    componentDidMount(){
         
         this.props.getTable().then(res => this.setState({data: res.payload}))
         this.props.getHighlight().then(res => this.setState({load: true}))
     }

render(){
    
    //console.log(this.state.data)
    const table = this.state.data.map((res,index) => {
        if(index % 2 === 0){
          return  (
            <Slide right>
            <tr className='rowColour'>
            <td> {res.standing_team} </td>
            <td>{res.standing_P}</td>
            <td>{res.standing_W}</td>
            <td>{res.standing_D}</td>
            <td>{res.standing_L}</td>
            <td>{res.standing_PTS}</td>
           
            </tr>
            </Slide>
          )
        }else{
            return(
              <Slide right>
                <tr >
                 <td> {res.standing_team} </td>
                <td>{res.standing_P}</td>
                <td>{res.standing_W}</td>
                <td>{res.standing_D}</td>
                <td>{res.standing_L}</td>
                <td>{res.standing_PTS}</td>
               
                </tr>
                </Slide>
            )
        }
    })
  return (
      <Fragment>
        
        <table className='wrapper' id='standWrap' border="0" cellspacing="0" cellpadding="4px" style={{width:'90%',marginTop: '1vh'}}>
            <tr>
                <th align="left">team</th>
                <th>M</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>P</th>
            </tr>
           {table}
       
        </table>
        
       
      </Fragment>
    
  );
}
  
}

//getting fixtures from the redux store
const mapStateToProps =(state) =>{
    const fixture = state.Fix.payload
    return {
        fixture
    }
  }

export default  connect(mapStateToProps,{getFix,getTable,getHighlight})(withStyles(styles)(Standing))