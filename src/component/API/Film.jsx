import React, {Component} from 'react';

class Film extends Component {

    constructor(props) {
        super(props) ;
        this.state = {
            items : [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch("https://swapi.co/api/films")
        .then(res => res.json())
        .then((json) => {
            this.setState({ 
                items: json.results,
                isLoaded: true
            })
        })
    }

    render() {

        var {items, isLoaded} = this.state;

        if(!isLoaded) {
            return <h1>Loading...</h1> 
        }
        else {

            return (
                <div>
                    <ul>
                        {items.map(item => (
                            <li key={item.episode_id}>
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
    }
}

export default Film;