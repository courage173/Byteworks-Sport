import React from 'react'
import Grid from '@material-ui/core/Grid';
import Fixture from './fixtures/Fixture';
import Highlight from './feed/Highlight';
import Standing from './standing/Standing'
import Livescores from './standing/Livescores'
import {Element} from 'react-scroll'

import './index.css'


const CombineBody = () => {
    
    return (
        <Grid container className='mainWrap' spacing={3} style={{marginTop: '50px'}}>
            <Grid id='gridWrap' item xs={8} sm={3}>
                <Element name='fixture'>
                     <Fixture  />
                </Element>
                
            </Grid>
            <Grid id='gridWrap' item xs={8} sm={6}>
                <Element name='news'>
                    <Highlight/> 
                </Element>
                
            </Grid>
            <Grid id='gridWrap' item xs={8} sm={3}>
                <Element name='standing'>
                `    <Standing />
                </Element>
                <Element name='livescore'>
                     <Livescores />
                </Element>

                
               
            </Grid>
        </Grid>
    )
}

export default CombineBody
