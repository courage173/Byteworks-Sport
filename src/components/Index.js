import React from 'react'
import Grid from '@material-ui/core/Grid';
import Fixture from './fixtures/Fixture';
import Highlight from './feed/Highlight';
import Standing from './standing/Standing'

const CombineBody = () => {
    
    return (
        <Grid container spacing={3} style={{    marginTop: '50px'}}>
            <Grid item xs={8} sm={3}>
                <Fixture  />
            </Grid>
            <Grid item xs={8} sm={6}>
                <Highlight/> 
            </Grid>
            <Grid item xs={8} sm={3}>
                <Standing />
            </Grid>
        </Grid>
    )
}

export default CombineBody
