import React, { Component } from 'react';

class Titulo extends Component {
    render() {
        return (
            <div className="titulo">
                <h2>{this.props.texto}</h2><hr />
            </div>
        );
    }
}

export default Titulo;