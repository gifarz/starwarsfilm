import React, {Component} from 'react';

class Character extends Component {

    constructor(props) {
        super(props) ;
        this.state = {
            items : [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch("https://swapi.co/api/people")
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
                            <li key={item.height}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
    }
}

export default Character;