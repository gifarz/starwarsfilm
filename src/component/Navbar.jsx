import React, {Component} from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import './css/style.css';
import ButtonFilm from './Button/ButtonFilm'


class Navbar extends Component {
    render() {
        return (

            <div className="navbar">
                <Layout>
                    <Header transparent title="Star Wars Films And Characters">
                        <Navigation>
                            <Link to="/"></Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Star Wars Films">
                        <Navigation>
                            <Link to="/"></Link>
                        </Navigation>
                    </Drawer>
                    <Content/>
                </Layout>
                <ButtonFilm/>
                <h1 className="text-nav">List Of All The Star Wars Films And Characters Are Here !</h1>
            </div>

        )
    }
}

export default Navbar;