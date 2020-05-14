import React, { Component } from 'react';
import './App.css';
import Head from './comp/head';
import Contacto from './comp/contacto';
import Educacion from './comp/educacion';
import Habilidades from './comp/habilidades.jsx';
import Trabajo from './comp/trabajo';
import Certificados from './comp/certificados';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class App extends Component {
    render() {
        return (
            <Container maxWidth="lg" className="App">
                <Grid container spacing={2} alignItems='flex-start' justify="center">
                    <Grid item xs={12} sm={8} md={8}>
                        <Paper ><Head /></Paper>
                    </Grid>
                    <Grid item xs={12} sm={8} md={4} >
                        <Paper ><Contacto /></Paper>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8}>
                        <Paper ><Trabajo /></Paper>
                    </Grid>
                    <Grid item xs={12} sm={8} md={4} >
                        <Paper ><Habilidades /></Paper>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} >
                        <Paper spacing={4}><Educacion /></Paper>
                    </Grid>
                    <Grid item xs={12} sm={8} md={4} >
                        <Paper ><Certificados /></Paper>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

export default App;
