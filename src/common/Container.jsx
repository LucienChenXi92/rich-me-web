import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";

class Container extends React.Component{
    render() {
        return (
            <Grid className={this.props.classes.baseLayout} >
                {this.props.children}
            </Grid>
        );
    }
}
const styles = {
    baseLayout: {
        width: '100%',
        maxWidth: 1280,
        minHeight: 800,
        margin: 'auto',
        backgroundColor: '#fff'
    },
};
export default withStyles(styles)(Container);
