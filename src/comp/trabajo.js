import React, { Component } from 'react';
import Titulo from './elementos/titulo';
import Grid from '@material-ui/core/Grid';

class Trabajo extends Component {
    render() {
        return (
            <div className="Trabajo">
                <Titulo texto="Experiencia laboral" />
                <Grid container direction="row"
                    justify="space-around"
                    alignItems="stretch"
                    spacing={3}>
                    <Grid item sm={3} xs={12}>
                        <h3>Sodimac</h3>
                        Senior software engineer<br />
                        Junio 2022 - Hoy
                    </Grid>
                    <Grid item sm={9} xs={12}>
                    Trabajo remoto en el area de gerencia retail digital corp.<br/>
                    Miembro clave del equipo de personalización corporativo en Retail Digital Corp. Dirigí el desarrollo y mantenimiento de experiencias personalizadas para cinco países de Latinoamérica. Mis responsabilidades incluyen la creación de librerías y módulos frontend utilizando JavaScript y Dynamic Yield, seguir el ciclo de vida de cada proyecto y mejorarlo utilizando a/b testing, así como la coordinación con equipos multidisciplinarios para garantizar la entrega exitosa de proyectos.
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <h3>Transparentia SpA</h3>
                        Desarrollador Full stack.<br />
                        Octubre 2020 - Junio 2022.
                    </Grid>
                    <Grid item sm={9} xs={12}>
                    Trabajo remoto<br/>
                    Desarrollador PHP (Yii2) con sólida experiencia en bases de datos MS SQL y MySQL. Especializado en el desarrollo de soluciones personalizadas, implementando mejoras y nuevas funcionalidades en sistemas críticos para la organización.                       
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <h3>CETIUC</h3>
                        Ingeniero de desarrollo.<br />
                        Mayo 2012 - Julio 2020.
                    </Grid>
                    <Grid item sm={9} xs={12}>
                        Trabajo en forma presencial y remota.<br />
                        Fui el principal responsable de todas las plataformas y servicios que ofrece CETIUC<br />
                        Utilicé PHP, MySQL, jQuery, Symfony, git, CSS, Highcharts, Protovis.
                        <br/>Mis principales labores fueron:
                        <ul>
                            <li>Responsable de plataformas, software y operatividad</li>
                            <li>Programar y actualizar los <a href="https://cetiuc.com/apps" target="_blank" rel="noopener noreferrer">Benchmarks</a> que ofrece CETIUC</li>
                            <li>Crear gráficos en protovis y higcharts, librerías para tareas a fines en jQuery.</li>
                            <li>Ingreso, transformación  y depuración de datos para los Benchmarks.</li>
                            <li>Plataforma de votación en PHP y MySQL con presentaciones de proyectos para los Clubes CIO y CPO.</li>
                            <li>Desarrollar la página anterior de <a href=" https://cetiuc.com" target="_blank" rel="noopener noreferrer">CETIUC</a>.</li>
                            <li>Mantener operativa  la infraestructura (aws, ecs, dominios, servidores svn y apache).</li>
                        </ul>
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <h3>IPG Sede Panguipulli</h3>
                        Docente.<br />
                        Marzo a Julio 2018.
                    </Grid>
                    <Grid item sm={9} xs={12} >

                        Docente en horario vespertino, impartí las asignaturas:

                        <ul>
                            <li>Computación Básica.</li>
                            <li>Computación I.</li>
                            <li>Taller de aplicaciones computacionales.</li>
                        </ul>
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <h3>INGELOG</h3>
                        Técnico en Informática.<br />
                        7 de Junio a Noviembre del 2011.
                        </Grid>
                    <Grid item sm={9} xs={12}>
                        Proyectos de Desarrollo Indígena TEMUCO.<br /><br />
                        Encargado de desarrollo y mantención de sistemas y bases de datos relacionados con solicitudes de puentes y caminos por parte de comunidades indígenas.
                    </Grid>
                </Grid>
        </div>
        );
    }
}

export default Trabajo;