import React from 'react';
import './App.css';
import Container from "./common/Container";
import RootRouter from "./RootRouter";
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends React.Component{
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container>
                    <RootRouter />
                </Container>
            </React.Fragment>
        );
    }
}

export default App;
