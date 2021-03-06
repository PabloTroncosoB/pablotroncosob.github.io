import React from 'react';
import Grid from '@material-ui/core/Grid';
import GetAppIcon from '@material-ui/icons/GetApp';
import Link from '@material-ui/core/Link';

function Head() {
    return (
        <div className="Head">
            
            <Grid container  direction="row"  justify="space-between"  alignItems="center">
				<Grid item xs={8}>
					<h1>Pablo Troncoso</h1>
				</Grid>
				<Grid item xs={4} >
					<Link href="../cv/desarrollador%20Pablo%20Troncoso.pdf"><GetAppIcon color="primary" fontSize = "large" style={{verticalAlign:"middle"}} />Descargar CV</Link>
				</Grid>
			</Grid>
            
			<h2>Ingeniero de software full stack</h2>
            Profesional con 9 años de experiencia en desarrollo de software, apasionado por las nuevas tecnologías y lenguajes de programación.
            <br/>Mis motivaciones son: ampliar mi perfil profesional, aprender, capacitarme, ganar experiencia, crear software robusto y escalable que marque la diferencia.
        </div>
    );
}

export default Head;