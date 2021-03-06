import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: '700',
    },
    title: {
        marginTop: theme.spacing(2),
    }
}));

class Review extends Component {

    constructor() {
        super();

        let products = [
            { name: 'Product 1', desc: 'A nice thing', price: '$19.99' },
            { name: 'Product 2', desc: 'Another thing', price: '$13.45' },
            { name: 'Product 3', desc: 'Something else', price: '$16.51' },
            { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
            { name: 'Shipping', desc: '', price: 'Free' },
        ];
        let addresses = ['Via Viminale 3', 'Milan', 'Lombardia', '20131', 'Italy'];
        
        let payments = [
            { name: 'Card type', detail: 'Visa' },
            { name: 'Card holder', detail: 'Mr Amitesh Singh' },
            { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
            { name: 'Expiry date', detail: '04/2023' },
        ];

        this.state = {
            products: products,
            addresses: addresses,
            payments: payments
        }        
    }

    render() {
        let classes = this.props;

        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Order summary
                </Typography>
                <List disablePadding>
                    {this.state.products.map(product => (
                    <ListItem className={classes.listItem} key={product.name}>
                        <ListItemText primary={product.name} secondary={product.desc} />
                        <Typography variant="body2">{product.price}</Typography>
                    </ListItem>
                    ))}
                    <ListItem className={classes.listItem}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" className={classes.total}>
                        $64.06
                    </Typography>
                    </ListItem>
                </List>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom className={classes.title}>
                            Shipping
                        </Typography>
                        <Typography gutterBottom>Amitesh Singh</Typography>
                        <Typography gutterBottom>{this.state.addresses.join(', ')}</Typography>
                    </Grid>
                    <Grid item container direction="column" xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom className={classes.title}>
                            Payment details
                        </Typography>
                        <Grid container>
                            { this.state.payments.map(payment => (

                                <React.Fragment key={payment.name}>
                                    <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                    </Grid>
                                </React.Fragment>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>            
            </React.Fragment>
        );   
    }
}


Review.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Review);
