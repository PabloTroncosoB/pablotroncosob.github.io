import React, { Component } from 'react';
import Titulo from './elementos/titulo';
import Grid from '@mui/material/Grid';

class Trabajo extends Component {
    render() {
        return (
            <div>
            <div className="Trabajo" class="esp">
                <Titulo texto="Experiencia laboral" />

                <Grid container direction="row"
                    justify="space-around"
                    alignItems="stretch"
                    spacing={3}>
                      <Grid item sm={3} xs={12}>
                        <h3>Falabella - FTC</h3>
                        Senior backend engineer<br />
                        Diciembre 2024 - Hoy
                    </Grid>
                    <Grid item sm={9} xs={12}>
                    Trabajo remoto.<br/>
                    Parte del equipo de pre-sales, He desarrollado y
                    mejorado microservicios criticos utilizando Nodejs,
                    Go, Java, GCP, pub/sub, PosgtreSQL, CI/CD flows,
                    pipelines, kubernetes, datadog, docker, gcp
                    workloads.
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <h3>Sodimac</h3>
                        Senior software engineer<br />
                        Junio 2022 - Diciembre 2024
                    </Grid>
                    <Grid item sm={9} xs={12}>
                    Trabajo remoto.<br/>
                    Miembro clave del equipo de personalización corporativo en Retail Digital Corp. <ul>
                        <li>Dirijo el desarrollo y mantenimiento de experiencias personalizadas para cinco países de Latinoamérica. </li>
                        <li>Creación de librerías y módulos frontend utilizando JavaScript y Dynamic Yield.</li>
                        <li>Seguir el ciclo de vida de cada proyecto y mejorarlo utilizando A/B testing.</li>
                        <li>Coordinación con equipos multidisciplinarios para garantizar la entrega exitosa de proyectos.</li>
                        </ul>
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <h3>Transparentia SpA</h3>
                        Desarrollador Full stack.<br />
                        Octubre 2020 - Junio 2022.
                    </Grid>
                    <Grid item sm={9} xs={12}>
                    Trabajo remoto.<br/>
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
                            <li>Programar y actualizar los Benchmarks que ofrece CETIUC</li>
                            <li>Crear gráficos en protovis y higcharts, librerías para tareas a fines en jQuery.</li>
                            <li>Ingreso, transformación  y depuración de datos para los Benchmarks.</li>
                            <li>Plataforma de votación en PHP y MySQL con presentaciones de proyectos para los Clubes CIO y CPO.</li>
                            <li>Desarrollar la página anterior de CETIUC.</li>
                            <li>Mantener operativa la infraestructura (aws, ecs, dominios, servidores svn y apache).</li>
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
        <div className="Trabajo" class="en">

  <Titulo texto="Work Experience" />
  <Grid container direction="row"
         justify="space-around"
         alignItems="stretch"
         spacing={3}>
    <Grid item sm={3} xs={12}>
        <h3>Falabella - FTC</h3>
        Senior backend engineer<br />
        December 2024 - Present
    </Grid>
    <Grid item sm={9} xs={12}>
      Remote work.<br/>
      Part of the pre-sales team, I developed and improved critical microservices using Nodejs,
      Go, Java, GCP, pub/sub, PosgtreSQL, CI/CD flows,
      pipelines, kubernetes, datadog, docker, gcp
      workloads.
    </Grid>
    <Grid item sm={3} xs={12}>
      <h3>Sodimac</h3>
      Senior software engineer<br />
      June 2022 - December 2024
    </Grid>
    <Grid item sm={9} xs={12}>
      Remote work.<br/>
      Key member of the corporate personalization team at Retail Digital Corp. <ul>
        <li>Lead the development and maintenance of personalized experiences for five Latin American countries. </li>
        <li>Creation of frontend libraries and modules using JavaScript and Dynamic Yield.</li>
        <li>Follow the lifecycle of each project and improve it using A/B testing.</li>
        <li>Coordination with multidisciplinary teams to ensure successful project delivery.</li>
      </ul>
    </Grid>
    <Grid item sm={3} xs={12}>
      <h3>Transparentia SpA</h3>
      Full Stack Developer<br />
      October 2020 - June 2022.
    </Grid>
    <Grid item sm={9} xs={12}>
      Remote work.<br/>
      PHP (Yii2) developer with solid experience in MS SQL and MySQL databases. Specialized in developing custom solutions, implementing improvements and new functionalities in critical organizational systems. 
    </Grid>
    <Grid item sm={3} xs={12}>
      <h3>CETIUC</h3>
      Development Engineer<br />
      May 2012 - July 2020.
    </Grid>
    <Grid item sm={9} xs={12}>
      On-site and remote work.<br />
      I was the main responsible for all CETIUC platforms and services<br />
      I used PHP, MySQL, jQuery, Symfony, git, CSS, Highcharts, Protovis.<br />
      My main tasks were:
      <ul>
        <li>Responsible for platforms, software and operability</li>
        <li>Program and update CETIUC's Benchmarks</li>
        <li>Create graphics in Protovis and Highcharts, libraries for related tasks in jQuery.</li>
        <li>Data entry, transformation and cleaning for Benchmarks.</li>
        <li>Voting platform in PHP and MySQL with project presentations for CIO and CPO Clubs.</li>
        <li>Develop the previous CETIUC website.</li>
        <li>Maintain operational infrastructure (AWS, ECS, domains, SVN and Apache servers).</li>
      </ul>
    </Grid>
    <Grid item sm={3} xs={12}>
      <h3>IPG Sede Panguipulli</h3>
      Teacher<br />
      March to July 2018.
    </Grid>
    <Grid item sm={9} xs={12}>
      Afternoon teacher, taught the following subjects:
      <ul>
        <li>Basic Computing.</li>
        <li>Computing I.</li>
        <li>Computer applications workshop.</li>
      </ul>
    </Grid>
    <Grid item sm={3} xs={12}>
      <h3>INGELOG</h3>
      IT Technician<br />
      June 7 to November 2011.
    </Grid>
    <Grid item sm={9} xs={12}>
      Indigenous Development Projects TEMUCO.<br /><br />
      In charge of development and maintenance of systems and databases related to bridge and road requests by indigenous communities.
    </Grid>
  </Grid>
</div>
</div>
        
        );
    }
}

export default Trabajo;