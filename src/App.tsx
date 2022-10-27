import React from 'react';
import Body from './component/body/body'
import { RightMenu } from './component/right-menu/right-menu'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { leagues } from './data/leagues';

function App() {

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={7} lg={9}>
        <Grid container>
          <Grid item xs>
            <Body leagues={leagues} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={5} lg={3}>
        <RightMenu />
      </Grid>
    </Grid>

  )
}

export default App;
