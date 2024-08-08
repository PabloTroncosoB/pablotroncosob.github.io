import React, { Component } from 'react';
import Titulo from './elementos/titulo';
import Grid from '@material-ui/core/Grid';

class Certificados extends Component {
    cert = {
        "TOEIC": "toeic.png",
        "English Advanced Course": "adv.pdf",
        "English Upper Intermediate Course": "intermedio.pdf",
        "React esencial": "react.pdf",
        "Desarrollador de videojuegos": "vgd.pdf",
        "Lógica de programación": "logicaProgramacion.pdf",
        "Analista de proyectos BI": "analistaProyectosBI.pdf"
    };
    titulos = {
        "Ingeniero Civil en Informática": "IngCivil.pdf",
        "Ingeniero en Informática":"Ing.pdf"
    }

    
    render() {
        
        return (
            <div className="Certificados">
        
                <span class="esp"><Titulo texto="Certificados" /></span>
                <span class="en"><Titulo texto="Certs" /></span>
                <Grid container direction="row"
                    justify="space-around"
                    alignItems="center"
                    spacing={1}>
                    {Object.keys(this.titulos).map((letitulos) => (
                        <Grid container justify="space-evenly" spacing={1} key={"cont" + letitulos}>
                            <Grid item xs={10} >
                                {letitulos}
                            </Grid>
                            <Grid item xs={2} >
                                <a href={"../titulos/"+ this.titulos[letitulos]} target="_blank" rel="noopener noreferrer">ver</a>
                            </Grid>
                        </Grid>
                    ))}
                    {Object.keys(this.cert).map((lecrt) => (
                        <Grid container justify="space-evenly" spacing={1} key={"cont" + lecrt}>
                            <Grid item xs={10} >
                                {lecrt}
                            </Grid>
                            <Grid item xs={2} >
                                <a href={"../cursos/"+ this.cert[lecrt]} target="_blank" rel="noopener noreferrer">ver</a>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
                
        </div>
        );
    }
}

export default Certificados;