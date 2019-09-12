import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

class CopyRight extends Component {

    constructor() {
        super();

        let useStyles = makeStyles(theme => ({
            '@global': {
                body: {
                backgroundColor: theme.palette.common.white,
                },
            }
        }));

        this.state = {
            useStyles: useStyles
        }
    }

    render() {
        const classes = this.state.useStyles;

        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://github.com/amitesh786/">
                    Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }    
}

export default CopyRight;
