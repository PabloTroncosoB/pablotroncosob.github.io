import React, { Component } from 'react';
import Titulo from './elementos/titulo';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/Star';

class Habilidades extends Component {
    hab = {
        "AWS": 5,
        "Bootstrap":4,
        "CSS": 4,
        "GIT": 5,
        "Highcharts": 4,
        "HTML": 5,
        "Java": 3,
        "JavaScript": 4,
        "Material UI": 4,
        "MySQL": 5,
        "PHP": 5,
        "React": 4
    };
    idiomas = {
        "Inglés": 5,
        "Español": 5
    }

    render() {
        return (
            <div className="Habilidades">
                <Titulo texto="Habilidades" />
                <Grid container alignItems="flex-start" justify="space-evenly" spacing={2}>
                    {Object.keys(this.hab).map((tec) => (
                        <Grid container justify="space-evenly" spacing={2} key={"cont"+tec}>
                            <Grid item xs={4}  key={"nam" + tec}>
                            <b>{tec}:</b>
                            </Grid>
                            <Grid item xs={6} key={"str" + tec}>
                                {[...Array(parseInt(this.hab[tec]))].map((ob,i) => (
                                    <StarIcon color="primary" key={tec+i} />
                                ))}
                                {[...Array(parseInt(5-this.hab[tec]))].map((ob,o) => (
                                    <StarIcon color="disabled" key={tec + o + o} />
                                ))}
                               
                            </Grid>
                        </Grid>
                     ))}
                </Grid>
                <Titulo texto="Idiomas" />
                <Grid container alignItems="flex-start" justify="space-evenly" spacing={2}>
                    {Object.keys(this.idiomas).map((lang) => (
                        <Grid container justify="space-evenly" spacing={2} key={"cont" + lang}>
                            <Grid item xs={4} key={"nam" + lang}>
                                <b>{lang}:</b>
                            </Grid>
                            <Grid item xs={6} key={"str" + lang}>
                                {[...Array(parseInt(this.idiomas[lang]))].map((ob, i) => (
                                    <StarIcon color="primary" key={lang + i} />
                                ))}
                                {[...Array(parseInt(5 - this.idiomas[lang]))].map((ob, o) => (
                                    <StarIcon color="disabled" key={lang + o + o} />
                                ))}

                            </Grid>
                        </Grid>
                    ))}
                </Grid>
        </div>
        );
    }
}

export default Habilidades;