import React from 'react';
import Grid from '@material-ui/core/Grid';
import GetAppIcon from '@material-ui/icons/GetApp';
import Link from '@material-ui/core/Link';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function Head() {
	const expYears = new Date().getFullYear()-2012;
	var espEngBol=1;
	document.querySelectorAll(".esp").forEach(e=>e.style.display="block");
	document.querySelectorAll(".en").forEach(e=>e.style.display="none");
	const espEng=()=>{
		if(espEngBol===0){
			document.querySelectorAll(".esp").forEach(e=>e.style.display="block");
			document.querySelectorAll(".en").forEach(e=>e.style.display="none");
			espEngBol=1;
		}else{
			document.querySelectorAll(".esp").forEach(e=>e.style.display="none");
			document.querySelectorAll(".en").forEach(e=>e.style.display="block");
			espEngBol=0;
		}
	}
    return (
        <div className="Head">
            
            <Grid container  direction="row"  justify="space-between"  alignItems="center">
				<Grid item xs={8}>
					<h1>Pablo Troncoso</h1>
				</Grid>
				<Grid item xs={4} class="descargaCV">
					<Link href="../cv/desarrollador%20Pablo%20Troncoso.pdf" target="_blank" rel="noopener"><GetAppIcon color="primary" fontSize = "large" style={{verticalAlign:"middle"}} />Descargar CV</Link>
						<FormControlLabel
							control={<Switch size="small" onChange={espEng} />}
							label="Eng"
						/>

				</Grid>
			</Grid>
			<h2>Senior full stack software engineer</h2>
			<div class="esp">
            	Con {expYears} años de experiencia en desarrollo, me enfoco en crear software de alta calidad que genere un impacto positivo. Mi curiosidad por las nuevas tecnologías me impulsa a estar siempre actualizado y a buscar soluciones innovadoras.
			</div>
			<div class="en">
				With {expYears} years of development experience, I'm dedicated to creating high-quality software that makes a positive impact. My passion for new technologies drives me to stay up-to-date and find innovative solutions
			</div>
        </div>
    );
}

export default Head;