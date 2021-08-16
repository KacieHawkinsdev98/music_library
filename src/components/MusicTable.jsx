import React from 'react';
import './MusicTable.css'

const MusicTable = (props) => {
    return (
        <div>
            <h1>Welcome Music Lover</h1>
            <table>
            <ul>
                {props.songs.map((song, index) => <li key={index}>{song.title}</li>)}
            </ul>
            </table>
        </div>
    )
}

export default MusicTable;