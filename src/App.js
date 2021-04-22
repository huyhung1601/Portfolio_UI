import { Container, Grid } from '@material-ui/core';
import React from 'react'
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile'
import Portfolio from './pages/Portfolio/Portfolio'
import Resume from './pages/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

function App() {
  return (
    <Container>
      <Grid container >        
        <Grid item xs={12} sm={12} md={4} lg={3} style={{backgroundColor: 'blue'}}>
          <Profile/>
        </Grid>
        <Grid item xs style={{backgroundColor: 'red'}}>
          <Header/>
          <Router>
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
