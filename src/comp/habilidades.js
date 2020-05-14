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
        "MySQL": 5,
        "PHP": 5,
        "React": 4


    };

    render() {
        return (
            <div className="Habilidades">
                <Titulo texto="Habilidades" />
                <Grid container alignItems="flex-start" justify="space-evenly" spacing={2}>
                    {Object.keys(this.hab).map((tec) => (
                        <Grid container justify="space-evenly" spacing={2}>
                        <Grid item xs={4}>
                            <b>{tec}:</b>
                        </Grid>
                        <Grid item xs={6}  alignContent="right">
                                {[...Array(parseInt(this.hab[tec]))].map((i) => (
                                    <StarIcon color="Primary" />
                                ))}
                                {[...Array(parseInt(5-this.hab[tec]))].map((i) => (
                                    <StarIcon color="disabled" />
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