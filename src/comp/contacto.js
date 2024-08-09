import React, { Component } from 'react';
import Titulo from './elementos/titulo';
import Grid from '@material-ui/core/Grid';

class Contacto extends Component {
	render() {
		return (
			<div className="Contacto">
                <span class="esp"><Titulo texto="Información de Contacto" /></span>
                <span class="en"><Titulo texto="Contact Information" /></span>
                <Grid container alignItems="flex-start" justify="space-evenly" spacing={1}>
                    <span class="esp"style={{width: '-webkit-fill-available',padding: "4px"}}>
                        <Grid item xs={12}>
                            <b>Teléfono:</b>
                            <br/>
                            <a href="tel:+56990627472">+56 9 9062 7472</a>
                        </Grid>
                    </span>
                    <span class="en" style={{width: '-webkit-fill-available'}}>
                        <Grid item xs={12}>
                            <b>Phone:</b>
                            <br/>
                            <a href="tel:+56990627472">+56 9 9062 7472</a>
                        </Grid>
                    </span>
                    <Grid item xs={12}  >
                        <b>Email:</b><br />
                        <a href="mailto:pablotroncosob@gmail.com" rel="noopener noreferrer">pablotroncosob@gmail.com</a>
                    </Grid >
                    <Grid item xs={12} >
                        <b>LinkedIn:</b><br />
                        <a href="https://www.linkedin.com/in/pablo-troncoso-barrera-24807332" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/pablo-troncoso-barrera-24807332</a>
                    </Grid >
                </Grid>
			</div>
		);
	}
}

export default Contacto;