import React,{Component, Fragment} from 'react';
import {connect} from "react-redux"
import {getFix,getTable,getHighlight} from '../../redux-stuffs/Actions/callAction';
import dayjs from 'dayjs';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const data = [
    {
        title: "Klopp shocked by Man City's Champions League ban",
        image: "https://images.daznservices.com/di/library/GOAL/32/d9/jurgen-klopp-liverpool-2019-20_1oehvlvr085ns1nxsxqk8qwhjo.jpg?t=1331416704&quality=60&w=1600",
        content: "The German coach was taken back by the news that his side's rivals will be absent from Europe for the next two seasons. Jurgen Klopp says he was shocked by the news of Manchester City's two-year suspension from the Champions League and says he sympathises with coach Pep Guardiola."
    },
    {
        title: "Chukwueze helps Villarreal climb to Europa League spot with Levante win",
        image: "https://images.daznservices.com/di/library/GOAL/68/a8/samuel-chukwueze-villarreal-2019-20_160yo6q912hsf1an3w6prp0t3y.jpg?t=861249344&quality=60&w=1600",
        content: "The Nigeria international made a second-half appearance as the Yellow Submarine secured a narrow win at Estadio de la Ceramica. Samuel Chukwueze was in action as Villarreal clinched a hard-fought 2-1 victory against Levante in Saturday’s La Liga game."
    },
    {
        title: "Klopp shocked by Man City's Champions League ban",
        image: "https://images.daznservices.com/di/library/GOAL/32/d9/jurgen-klopp-liverpool-2019-20_1oehvlvr085ns1nxsxqk8qwhjo.jpg?t=1331416704&quality=60&w=1600",
        content: "The German coach was taken back by the news that his side's rivals will be absent from Europe for the next two seasons. Jurgen Klopp says he was shocked by the news of Manchester City's two-year suspension from the Champions League and says he sympathises with coach Pep Guardiola."
    },
    {
        title: "Chukwueze helps Villarreal climb to Europa League spot with Levante win",
        image: "https://images.daznservices.com/di/library/GOAL/68/a8/samuel-chukwueze-villarreal-2019-20_160yo6q912hsf1an3w6prp0t3y.jpg?t=861249344&quality=60&w=1600",
        content: "The Nigeria international made a second-half appearance as the Yellow Submarine secured a narrow win at Estadio de la Ceramica. Samuel Chukwueze was in action as Villarreal clinched a hard-fought 2-1 victory against Levante in Saturday’s La Liga game."
    },
]
const styles ={
  root: {
    minWidth: 275,
    margin: '1vh'
  },
  wrapper: {
    border: "1px solid #e2d7d7",
    width: '90%',
    margin: '4vh',
    boxShadow: '2px 2px #e2d7d7'
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: '10px'
},
title: {
    width: '100%',
    height: 'auto',
    textOverflow: 'clip',
    whiteSpace: 'normal',
    fontWeight: '600',
    fontSize: '2rem',
    lineHeight: '2.5rem',
    margin: '0',
    padding: '1.875rem 0.2rem',
    wordWrap: 'break-word'
},
content: {
    lineHeight: '2.125rem',
    fontSize: '1rem',
    padding: '1.25rem 0.2rem',
    width: '100%'
}
  
};

class Highlight extends Component {
    state = {
        data: []
    }
    componentDidMount(){
         //this.props.getFix().then(res=> this.setState({data: this.props.fixture}))
         // this.props.getTable().then(res => console.log(res))
         //this.props.getHighlight().then(res =>this.setState({data: this.props.highlight}))
     }

render(){
    const {classes} = this.props
   const news = data.map((res,index) => (
       <div className={classes.wrapper}>
           <Typography variant="h1" className={classes.title}>{res.title}</Typography>
           <img className={classes.image} alt="Photo" src={res.image} />
           <Typography variant="body2" className={classes.content}> {res.content} </Typography>
       </div>
   ))
    
  return (
      <Fragment>
         
         {news}
      </Fragment>
    
  );
}
  
}


const mapStateToProps =(state) =>{
    const highlight = state.Highlight.payload
    return {
        highlight
    }
  }

export default  connect(mapStateToProps,{getFix,getTable,getHighlight})(withStyles(styles)(Highlight))