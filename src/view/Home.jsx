import React from "react";
import propType from "prop-types";
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import Header from "../common/Header";
import banner from "../static/img/coffee.jpg";

class Home extends React.Component {
    static propTypes = {
        classes: propType.object
    };

    render() {
        const classes = this.props.classes;
        return <Grid className={classes.layout}>
            <Grid className={classes.background}>
                <Header />
            </Grid>
        </Grid>
    }
}

const styles = {
    layout: {
        height: 800,
    },
    background: {
        height: 300,
        width: '100%',
        backgroundImage: 'url(' + banner + ')',
    }
};
export default withStyles(styles)(Home);