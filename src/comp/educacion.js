import React, { Component } from 'react';
import Titulo from './elementos/titulo';

class Educacion extends Component {
    render() {
        return (
            <div className="Educacion">
                <span class="esp">
                    <Titulo texto="Educación" />
                </span>
                <span class="en">
                    <Titulo texto="Education" />
                </span>
                <b>Ingeniería Civil Informática:</b> Universidad Tecnológica INACAP Temuco. Titulado
                el año 2011.<br /><br/>
                <b>Ingeniería en Informática:</b> Universidad Tecnológica INACAP Temuco.
                    Titulado el año 2010.<br /><br />
                <b>Analista Programador:</b> INACAP Temuco 2006-2008. (Egresado).<br /><br />
                <b>Arquitectura:</b> 4 semestres Universidad Austral 2004-2005.<br/>
        </div>
        );
    }
}

export default Educacion;