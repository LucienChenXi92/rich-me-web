import React from "react";
import propType from "prop-types";
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";

const pageItems = [
    {label: "个人简历", url: "#"},
    {label: "学习笔记", url: "#"},
    {label: "常用工具", url: "#"},
];

class NavigationBar extends React.Component {
    static propTypes = {
        classes: propType.object
    };

    render() {
        const classes = this.props.classes;
        return <Grid className={classes.navLayout} container justify='space-around' alignItems='center'>
            {pageItems.map(item => <Grid item>{item.label}</Grid>)}
        </Grid>
    }
}

const styles = {
    navLayout: {
        height: 40,
    }
};
export default withStyles(styles)(NavigationBar);