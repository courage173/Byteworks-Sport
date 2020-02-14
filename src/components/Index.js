import React from 'react'
import Grid from '@material-ui/core/Grid'

const CombineBody = () => {
    return (
        <Grid container spacing={3} style={{    marginTop: '50px'}}>
            <Grid item xs={8} sm={3}><h1>me</h1></Grid>
            <Grid item xs={8} sm={6}><h1>I</h1></Grid>
            <Grid item xs={8} sm={3}><h1>Knowk</h1></Grid>
        </Grid>
    )
}

export default CombineBody
