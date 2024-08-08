import React from 'react';
import Grid from '@material-ui/core/Grid';
import GetAppIcon from '@material-ui/icons/GetApp';
import Link from '@material-ui/core/Link';

function Head() {
	const expYears = new Date().getFullYear()-2012;
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
            
			<h2>Senior full stack software engineer</h2>
            Con {expYears} años de experiencia en desarrollo, me enfoco en crear software de alta calidad que genere un impacto positivo. Mi curiosidad por las nuevas tecnologías me impulsa a estar siempre actualizado y a buscar soluciones innovadoras.
        </div>
    );
}

export default Head;