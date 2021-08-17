import axios from 'axios';
import React, { Component } from 'react';
import CreateSong from './CreateSong/CreateSong';
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

    deleteRow = (id) => {
        axios.delete(`http://127.0.0.1:8000/music/${id}/`)
        .then(() => this.setState({ status: 'Delete Complete'}))
        window.location.reload();
    }

    songCreator = (newSong) => {
        this.state.songs.push(newSong);
        axios.post('http://127.0.0.1:8000/music/', newSong)
        .then(response => this.setState=({
            newSong: response.data
        }));
        window.location.reload();
    }

    render() {
        return (
            <div>
                 <MusicTable songs ={this.state.songs} delete={this.deleteRow}/>
                 <CreateSong createNewSong={this.songCreator.bind(this)} />
            </div>

        );

    }

}

export default App
