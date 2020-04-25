import React, { Component } from "react";
import AddIcon from '@material-ui/icons/Add';
import {Fab, TextField} from '@material-ui/core';

class Botonmas extends Component{
	nuevoElemento= React.createRef();

	adder=event=>{
		console.log(this.nuevoElemento.value);
		this.nuevoElemento.value="";
		event.preventDefault();
	}
	render(){
		return(
			<form autoComplete="off"  onSubmit={this.adder}>
				<TextField
					id="texto"
					label="Agregar elemento..."
					type="text"
					inputRef={e => (this.nuevoElemento =e)}

				/>
				<Fab
					color="primary"
					size="small"
					onClick={this.adder}
				><AddIcon />
				</Fab>
			</form>
		)
	}
}

export default Botonmas