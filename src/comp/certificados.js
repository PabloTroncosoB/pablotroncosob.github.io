import React, { Component } from 'react';
import Titulo from './elementos/titulo';

class Certificados extends Component {
    render() {
        return (
            <div className="Certificados">
                <Titulo texto="Certificados" />
                <div align="left">Desarrollador de videojuegos</div>
                <div align="right">empresa extraña</div>
        </div>
        );
    }
}

export default Certificados;