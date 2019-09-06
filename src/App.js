import React from 'react';
import './App.css';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

import AddressForm from './pages/AddressForm/index';
import Checkout from './pages/Checkout/index';

function App() {
  return (
      <Grid container spacing={2}>

        <Grid item sm={6} md={4} className="app-item">
          <Card className="app-card">
            <CardMedia>
                <AddressForm />
            </CardMedia>
          </Card>
        </Grid>
        <CardActions>
              <Button href={Checkout} size="small" color="primary">
                    Next
              </Button>
        </CardActions>
      
    </Grid>
  );
}

export default App;
