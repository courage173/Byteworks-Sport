import React,{Component, Fragment} from 'react';
import {connect} from "react-redux"
import {getFix,getTable,getHighlight} from '../../redux-stuffs/Actions/callAction';
import data from './data'
import dayjs from 'dayjs';

import './standing.css'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles ={
  root: {
    minWidth: 275,
    margin: '1vh'
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
        data: []
    }
    componentDidMount(){
         //this.props.getFix().then(res=> this.setState({data: this.props.fixture}))
         // this.props.getTable().then(res => this.setState({data: res.payload.league.standings[0]}))
         // this.props.getHighlight().then(res => console.log(res))
     }

render(){
    const {classes} = this.props
    console.log(this.state.data)
    const table = data.map((res,index) => {
        if(index % 2 === 0){
          return  (
            <tr className='rowColour'>
            <td> {res.name} </td>
            <td>{res.matches}</td>
            <td>{res.won}</td>
            <td>{res.drawn}</td>
            <td>{res.lost}</td>
            <td>{res.points}</td>
           
            </tr>
          )
        }else{
            return(
                <tr >
                <td> {res.name} </td>
                <td>{res.matches}</td>
                <td>{res.won}</td>
                <td>{res.drawn}</td>
                <td>{res.lost}</td>
                <td>{res.points}</td>
               
                </tr>
            )
        }
    })
  return (
      <Fragment>
        <table className='wrapper' border="0" cellspacing="0" cellpadding="4px" style={{width:'90%',marginTop: '4vh'}}>
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


const mapStateToProps =(state) =>{
    const fixture = state.Fix.payload
    return {
        fixture
    }
  }

export default  connect(mapStateToProps,{getFix,getTable,getHighlight})(withStyles(styles)(Standing))