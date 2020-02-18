import React,{Component, Fragment} from 'react';
import {connect} from "react-redux"
import {getFix,getTable,getHighlight} from '../../redux-stuffs/Actions/callAction';

//styles stuff
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './Feed.css'

//mock data
const data = [
    {
        title: "‘Pogba isn’t poisonous & remains Man Utd’s best player’ – World Cup winner should stay put, says Sharpe",
        image: "https://images.daznservices.com/di/library/GOAL/c4/45/paul-pogba-man-utd-vs-arsenal-2019-20_1tx7t58dsbb3p16vc02qok1wwl.jpg?t=-1994290675&quality=60&w=1600",
        content: "The former Red Devils winger hopes ongoing transfer talk can be brought to a close, allowing the Frenchman to star alongside Bruno Fernandes Paul Pogba is not a “poisonous” presence at Manchester United and should be retained as he remains the club’s “best player”, says Lee Sharpe."
    },
    {
        title: "Mourinho doesn't expect Son to play again for Tottenham this season",
        image: "https://images.daznservices.com/di/library/GOAL/45/d1/son-heung-min-tottenham-2019-20_1wvh3yh80an0g1xvizmltp3qst.jpg?t=-1319594689&quality=60&w=1600",
        content: "The Portuguese boss expressed his frustration over a lack of attacking options after losing another prized asset due to injury on Tuesday Tottenham boss Jose Mourinho says he won't be counting on Son Heung-min again this season after seeing the forward sidelined with a fractured arm."
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
    {
        title: "Man Utd's Bailly needed a 'few minutes to settle' against Chelsea due to nerves",
        image: "https://images.daznservices.com/di/library/GOAL/8d/6e/eric-bailly-manchester-united-2019-20_irvwd7z907n1n9qfl1ibj1lb.jpg?t=-1200474689&quality=60&w=1600",
        content: "Manchester United defender Eric Bailly has conceded that he felt nervous during the opening few minutes of Monday night's clash with Chelsea, having only just returned to action following a lengthy injury lay-off."
    },
]
const styles ={
  root: {
    minWidth: 275,
    margin: '1vh',
    
  },
  wrapper: {
   // border: "1px solid #e2d7d7",
    width: '90%',
    margin: '3.2vh 4vh 2vh 3vh',
    backgroundColor: 'white',
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
       <div id='wra' className={classes.wrapper}>
           <Typography variant="h1" className={classes.title}>{res.title}</Typography>
           <img className={classes.image} alt="plaayer_photo" src={res.image} />
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

//getting hightlighs from the store
const mapStateToProps =(state) =>{
    const highlight = state.Highlight.payload
    return {
        highlight
    }
  }

export default  connect(mapStateToProps,{getFix,getTable,getHighlight})(withStyles(styles)(Highlight))