import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import FilmSatu from './Card/FilmSatu';
import FilmDua from './Card/FilmDua';
import FilmTiga from './Card/FilmTiga';
import FilmEmpat from './Card/FilmEmpat';
import FilmLima from './Card/FilmLima';
import FilmEnam from './Card/FilmEnam';
import FilmTujuh from './Card/FilmTujuh';



class Gridding extends Component {
    render() {
        return (

            <div className="grid-1">
                <h3><strong>List of Films and Characters</strong></h3>
                <hr/>
                <Grid className="grid-2">
                    <Cell col={4}><FilmSatu/></Cell>
                    <Cell col={4}><FilmDua/></Cell>
                    <Cell col={4}><FilmTiga/></Cell>
                    <Cell col={4}><FilmEmpat/></Cell>
                    <Cell col={4}><FilmLima/></Cell>
                    <Cell col={4}><FilmEnam/></Cell>
                    <Cell col={4}><FilmTujuh/></Cell>
                </Grid>
            </div>

        )
    }
}

export default Gridding