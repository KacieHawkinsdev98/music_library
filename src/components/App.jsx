import axios from 'axios';
import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import MusicTable from './MusicTable';
import SongForm from './SongForm/SongForm';




class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            songs: [
                {
                    title: '',
                    album: '',
                    artist: '',
                    release_date: '',
                }
            ]
        }
    }

    componentDidMount() {
        this.getSong();


    }

    async getSong() {
        try {
            let response = await axios.get('http://127.0.0.1:8000/music/');
            this.setState({
                songs: response.data
            });
        }
        catch (except) {
            alert('Not Valid')
        }
    }


    filterResults = (field, searchTerm) => {
        console.log(field)
        console.log(searchTerm)
        let results = this.state.songs.filter(function (el) {
            if (el[field] == searchTerm) {
                return true
            }
        })
        this.setState({
            songs: results
        })
    }

        deleteRow = async(id) => {
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
                <SearchBar filter={this.filterResults} songs={this.state.songs} filterSong={this.filterSong}/>
                <MusicTable songs={this.state.songs}  deleteRow={this.deleteRow} />
                <SongForm createNewSong={this.songCreator.bind(this)} />


            </div>
        )
    }
}

export default App;
