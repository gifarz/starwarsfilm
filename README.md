# Tunaiku Technical Test for Frontend Developer

## Star Wars Movies and Characters

## This is the step by step I make this website

I used ReactJS with Material Design Lite (react-mdl) to build the website of Starwars Movies and Characters. There are 3 type of method I used : 
- Navigation Bar
- Header
- Card List

To display kind of movies and characters I took the API from the website <https://swapi.co> using the fetch method. In displaying the API I'm having problem with CORS (Cross Origin Resource Sharing) errors, but I solved it just install the extension of CORS in Google Chrome. Here is the code to get API from the website :

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
