import React from 'react';
import './MusicTable.css'

const MusicTable = (props) => {
    return (
        <div>
            <h1>Welcome Music Lover</h1>
            <table className="music-table">
                <tr>
                    <th>title</th>
                    <th>artist</th>
                    <th>album</th>
                    <th>release_date</th>



                    <td className="title">{props.songs.title}</td>
                    <td className="artist">{props.songs.artist}</td>
                    <td className="album">{props.songs.album}</td>
                    <td className="release_date">{props.songs.release_date}</td>
                </tr>
            </table>

            <ul>
                {props.songs.map((song, index) => <li key={index}>{song.title}{song.artist}
                    {song.album}{song.release_date}</li>)}
            </ul>

        </div>
    )
}

export default MusicTable;

