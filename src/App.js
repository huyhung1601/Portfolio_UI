import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile'
import Portfolio from './pages/Portfolio/Portfolio'
import Resume from './pages/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
const useStyles = makeStyles ((theme)=>({
  root:{
    paddingTop: theme.spacing(5)
  }
}))
function App() {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Grid container spacing={5}>        
        <Grid item xs={12} sm={12} md={4} lg={3} >
          <Profile/>
        </Grid>
        <Grid item xs >          
          <Router>
          <Header/>
            <Switch>
              <Route path='/portfolio'>
                <Portfolio/>
              </Route>  
              <Route path='/'>
                  <Resume/>
              </Route>
            </Switch> 
          </Router>       
          <Footer/>
        </Grid>
        
      </Grid>
    </Container>
  );
}

export default App;
