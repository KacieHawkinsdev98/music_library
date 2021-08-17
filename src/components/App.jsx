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
        try{
            let response = await axios.get('http://127.0.0.1:8000/music/');
            console.log(response)
            this.setState({
                songs: response.data
            });
        }
        catch(except){
            alert('Not Valid')
        }
    }

    deleteRow = async(id) => {
        try{
            await axios.delete('http://127.0.0.1:8000/music/${id}/')
            this.getSongs()
        }
        catch(event){
            console.log(event)
        }
    }

<<<<<<< HEAD
    filterResults = (field, searchWord) =>{
        console.log(field, searchWord)
        let results = this.state.songs.filterResults(function(event){
            if(event[field] == searchWord){
                return true
            }
        })
        this.setState({
            songs: results
        })
=======
    deleteRow = (id) => {
        axios.delete(`http://127.0.0.1:8000/music/${id}/`)
        .then(() => this.setState({ status: 'Delete Complete'}))
        window.location.reload();
>>>>>>> c0bd3f8d8f05923f9c53b9918a864c4aa81c31ae
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
<<<<<<< HEAD
                <SearchBar />
                <MusicTable songs ={this.state.songs} filter={this.filterResults} songs={this.state.songs} />
                <SongForm createNewSong={this.songCreator.bind(this)} />
=======
                 <MusicTable songs ={this.state.songs} delete={this.deleteRow}/>
                 <SongForm createNewSong={this.songCreator.bind(this)} />
>>>>>>> c0bd3f8d8f05923f9c53b9918a864c4aa81c31ae
            </div>
        );
    }
}

export default App
