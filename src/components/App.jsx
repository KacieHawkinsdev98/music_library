import axios from 'axios';
import React, { Component } from 'react';
import MusicTable from './MusicTable';


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

    deleteSong(id) {
        axios.delete(`http://127.0.0.1:8000/music/${id}/`)
        window.location.reload()
    }
    // async deleteSongs() {
    //     let response = await axios.delete('http://127.0.0.1:8000/music/')
    //     console.log(response)
    //     this.setState({
    //         songs: response.data
    //     })
    // }



    render() {
        return (
            <div>
                 < MusicTable songs ={this.state.songs}/>
            </div>

        );

    }

}

export default App
