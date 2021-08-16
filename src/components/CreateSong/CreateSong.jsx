import React, { Component } from 'react';

class CreateSong extends Component {
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
                <input name="title" onChange={this.handleChange} value={this.state.title} />
                <lable>Album</lable>
                <input name="album" onChange={this.handleChange} value={this.state.album} />
                <lable>Artist</lable>
                <input name="artist" onChange={this.handleChange} value={this.state.artist} />
                <lable>Release Date</lable>
                <input name="release_date" onChange={this.handleChange} value={this.state.release_date} />
                <button onClick={this.handleSubmit}>Submit</button>                       
            </form>
         );
    }
}
 
export default CreateSong;