import React, { Component } from 'react';
import './SongForm.css'   

class SongForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            artist:"",
            album:"",
            release_date:""
        }
    }

    handleChange = (event) => {
        this.setState({
         [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createNewSong(this.state)
    }

    render() { 
        return ( 
            <form>
                <lable>Title</lable>
                <input name="title" onChange={this.handleChange} value={this.state.title} placeholder="Title" />
                <lable>Album</lable>
                <input name="album" onChange={this.handleChange} value={this.state.album} placeholder="Album" />
                <lable>Artist</lable>
                <input name="artist" onChange={this.handleChange} value={this.state.artist} placeholder="Artist" />
                <lable>Release Date</lable>
                <input name="release_date" onChange={this.handleChange} value={this.state.release_date} placeholder="yyyy-mm-dd" />
                <button onClick={this.handleSubmit}>Submit</button>                       
            </form>
         );
    }
}
 
export default SongForm;