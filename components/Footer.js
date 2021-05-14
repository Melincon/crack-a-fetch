import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Copyright from './Copyright';

const useStyles = makeStyles((theme) => ({
    footer: {
        bakgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(8),
        pading: theme.spacing(6, 0),
    },
}));

export default function Footer(props) {
    const classes = useStyles();
    const { title } = props;

    return (
        <footer className={classes.footer}>
            <Container maxwidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Copyright />
            </Container>
        </footer>
    )
}

Footer.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
}