import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import CopyRight from '../../common/CopyRight/index';

import { SignUp } from '../../signup/SignUp/index';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
        backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));

class SignIn extends Component {

    constructor() {
        super();

        this.state = {
            verifyCredential: this.verifyCredential(),
            data: []
        }
    }

    verifyCredential() {

        fetch('http://localhost:4000/users')
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    data: resp
                });
            });
        
            // fetch('http://localhost:4000/users', {
            //     method: 'POST',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(payload)
            // }).then(data => {
            //     debugger;
            //     this.notifications.show({
            //         message: ''
            //     });
            // });
    }

    render() {
        let { classes } = this.props;

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            verification={ this.state.verifyCredential }
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to='/signup' variant="body2">
                                    Forgot password ?
                                </Link>
                            </Grid>

                            <Grid item>
                                <Link to='/signup' >
                                    { "Don't have an account? Sign Up" }
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <CopyRight />
                </Box>
            </Container>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(SignIn);
