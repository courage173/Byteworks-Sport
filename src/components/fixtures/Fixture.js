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

class Fixture extends Component {
    state = {
        data: []
    }
    componentDidMount(){
         this.props.getFix().then(res=> this.setState({data: res.payload}))
         // this.props.getTable().then(res => console.log(res))
         // this.props.getHighlight().then(res => console.log(res))
     }

render(){
    const {classes} = this.props
  
  const bull = <span className={classes.bullet}>•</span>;
    const fixtures = this.state.data.map((data,index) => (
        <Card className={classes.root}>
        <CardContent className={classes.content}>
        <Typography className={classes.league} variant="h5" component="h4">
            {data.tournament_name}
          </Typography>
          <Typography id='text' className={classes.name} variant="body2" style={{color: 'rgba(216, 14, 14, 0.82)'}}>
            {dayjs(data.date).format('h:mm a, MMMM DD YYYY')}
          </Typography>
          <Typography className={classes.pos} style={{color: 'rgba(216, 14, 14, 0.82)'}}>
            <span>{data.home_team.full} </span> vs <span> {data.visitant_team.full} </span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Show More</Button>
        </CardActions>
      </Card>  
    ))
  return (
      <Fragment>
        {fixtures}
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

export default  connect(mapStateToProps,{getFix,getTable,getHighlight})(withStyles(styles)( Fixture))