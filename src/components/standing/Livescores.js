import React, { Fragment } from 'react'
import {connect} from "react-redux"
import dayjs from 'dayjs';
//mui stuffs
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const styles = {
    root: {
      minWidth: 275,
      marginTop: '1vh',
      width: '90%'
    },
}


const Livescores = (props) => {
        const {lives,classes} = props
        const row = 20
        const liveMatch = lives ? lives.map((data,index)=>{
            if(index <= row){
                return(
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
                    <span>{data.event_home_team} </span> {data.event_final_result} <span> {data.event_away_team} </span> <span>{data.event_status}</span>
                      </Typography>
                      <hr />
                    </CardContent> 
                )
            }
        }) : null
    return (
        <Fragment>
            
            <Card id='standWrap' className={classes.root}>
            <Typography style={{fontSize: '20px',marginButtom: '5px' ,textAlign:'center', backgroundColor: '#a270d4', fontWeight: 'bold'}} variant='h5'>
                Live Scores</Typography>
                {liveMatch}
            </Card>
        </Fragment>
    )
}


const mapStateToProps =(state) =>{
    const lives = state.Highlight.payload
    return {
        lives
    }
  }

export default  connect(mapStateToProps,{})(withStyles(styles)(Livescores))
