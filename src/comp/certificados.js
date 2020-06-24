import React, { Component } from 'react';
import Titulo from './elementos/titulo';
import Grid from '@material-ui/core/Grid';

class Certificados extends Component {
    cert = {
        "Ingeniero Civil en Informática": "titulocivil.pdf",
        "Ingeniero en Informática":"tituloingeniero.pdf",
        "TOEIC": "toeic.png",
        "English Advanced Course": "adv.pdf",
        "English Upper Intermediate Course": "intermedio.pdf",
        "React esencial": "react.pdf",
        "Desarrollador de videojuegos": "vgd.pdf",
        "Lógica de programación": "logicaProgramacion.pdf",
        "Analista de proyectos BI": "analistaProyectosBI.pdf"
    }
    render() {
        return (
            <div className="Certificados">
                <Titulo texto="Certificados" />
                <Grid container direction="row"
                    justify="space-around"
                    alignItems="center"
                    spacing={1}>
                    {Object.keys(this.cert).map((lecrt) => (
                        <Grid container justify="space-evenly" spacing={1} key={"cont" + lecrt}>
                            <Grid item xs={10} >
                                {lecrt}
                            </Grid>
                            <Grid item xs={2} >
                                <a href={"../cursos/"+ this.cert[lecrt]}>ver</a>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
        </div>
        );
    }
}

export default Certificados;