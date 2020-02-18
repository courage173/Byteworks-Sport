import React from 'react'
import Grid from '@material-ui/core/Grid';
import Fixture from './fixtures/Fixture';
import Highlight from './feed/Highlight';
import Standing from './standing/Standing'
import Livescores from './standing/Livescores'

import './index.css'


const CombineBody = () => {
    
    return (
        <Grid container className='mainWrap' spacing={3} style={{marginTop: '50px'}}>
            <Grid id='gridWrap' item xs={8} sm={3}>
                <Fixture  />
            </Grid>
            <Grid id='gridWrap' item xs={8} sm={6}>
                <Highlight/> 
            </Grid>
            <Grid id='gridWrap' item xs={8} sm={3}>
                <Standing />
                <Livescores />
               
            </Grid>
        </Grid>
    )
}

export default CombineBody
