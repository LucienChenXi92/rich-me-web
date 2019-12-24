import React from "react";
import propType from "prop-types";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";

class Header extends React.Component {
    static propTypes = {
        classes: propType.object
    };

    render() {
        const classes = this.props.classes;
        return <Grid className={classes.headerLayout} container justify='flex-start' alignItems='center'>
            <Typography variant='body1' className={classes.siteName}>Lucienの小站</Typography>
        </Grid>
    }
}

const styles = {
    headerLayout: {
        height: 48,
        padding: 12
    },
    siteName: {
        color: '#fff'
    }
};
export default withStyles(styles)(Header);