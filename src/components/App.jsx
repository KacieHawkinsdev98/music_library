import axios from 'axios';
import React, { Component } from 'react';


class App extends Component {
    state = {
        songs: []
    }

    componentDidMount() {
        this.getSongs();


    }

    async getSongs() {
        let response = await axios.get('http://127.0.0.1:8000/music/');
        console.log(response)
        this.setState({
            songs: response.data

        });
    }

    render() {
        return (
            <div>
                <h1>Welcome Music Lover</h1>
                <h1>{this.state.songs}</h1>
            </div>
        );

    }

}

export default App
