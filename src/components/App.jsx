import axios from 'axios';
import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import MusicTable from './MusicTable';
import SongForm from './SongForm/SongForm';




class App extends Component {
    state = {
        songs: []
    }

    componentDidMount() {
        this.getSongs();


    }

    async getSongs() {
        try {
            let response = await axios.get('http://127.0.0.1:8000/music/');
            console.log(response)
            this.setState({
                songs: response.data
            });
        }
        catch (except) {
            alert('Not Valid')
        }
    }



    filterResults = (field, searchWord) => {
        console.log(field, searchWord)
        let results = this.state.songs.filterResults(function (event) {
            if (event[field] == searchWord) {
                return true
            }
        })
        this.setState({
            songs: results
        })
    }

        deleteRow = (id) => {
            axios.delete(`http://127.0.0.1:8000/music/${id}/`)
                .then(() => this.setState({ status: 'Delete Complete' }))
            window.location.reload();
        }
    

    songCreator = (newSong) => {
        this.state.songs.push(newSong);
        axios.post('http://127.0.0.1:8000/music/', newSong)
            .then(response => this.setState = ({
                newSong: response.data
            }));
        window.location.reload();
    }

    render() {
        return (
            <div>
                <SearchBar />
                <MusicTable songs={this.state.songs} filter={this.filterResults} songs={this.state.songs} delete={this.deleteRow} />
                <SongForm createNewSong={this.songCreator.bind(this)} />


            </div>
        )
    }
}

export default App;
