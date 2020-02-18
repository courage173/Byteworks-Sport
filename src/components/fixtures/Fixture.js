import React,{Component, Fragment} from 'react';
import {connect} from "react-redux";
import {getFix,getTable,getHighlight} from '../../redux-stuffs/Actions/callAction';
import dayjs from 'dayjs';

//stles stuff
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles ={
  root: {
    minWidth: 275,
    marginLeft: '1vh',
    marginRight: '1vh',
    marginTop: '3vh'
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
      
      alignItems: "center"
  },
  content: {
      alignItems: 'center',
      alignContent: 'center'
  }
};

class Fixture extends Component {
    state = {
        data: [],
        loading: false
    }
    componentDidMount(){
         this.props.getFix().then(res=> this.setState({data: this.props.fixture,loading: true}))
         
     }

render(){
    const {classes} = this.props
    console.log(this.state.data)
    const row = 24
    const fixtures =<CircularProgress size={25}/> && this.state.data.map((data,index) => {
      if(index <= row){
        return (
          
        <CardContent className={classes.content}>
        <Typography className={classes.league} variant="h5" component="h4">
            {data.country_name}
          </Typography>
        <Typography className={classes.league} variant="h5" component="h4">
            {data.league_name}
          </Typography>
          <Typography id='text' className={classes.name} variant="body2" style={{color: 'rgba(216, 14, 14, 0.82)'}}>
            {dayjs(data.event_date + ' ' + data.event_time).format('h:mm a, MMMM DD YYYY')}
          </Typography>
          <Typography className={classes.pos} style={{color: 'rgba(216, 14, 14, 0.82)'}}>
            <span>{data.event_home_team} </span> vs <span> {data.event_away_team} </span>
          </Typography>
          <hr />
        </CardContent>
      
      
        )
      }
    })
  return (
      <Fragment>
        <Card className={classes.root}>
        <Typography style={{fontSize: '20px',marginButtom: '5px' ,textAlign:'center', backgroundColor: '#a270d4', fontWeight: 'bold'}} variant='h5'>
                Fixtures</Typography>
           {fixtures}
        </Card>
      </Fragment>
    
  );
}
  
}

//getting fixture from the store
const mapStateToProps =(state) =>{
    const fixture = state.Fix.payload
    return {
        fixture
    }
  }

export default  connect(mapStateToProps,{getFix,getTable,getHighlight})(withStyles(styles)( Fixture))