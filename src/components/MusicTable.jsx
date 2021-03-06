import React from 'react';
import './MusicTable.css'

const MusicTable = (props) => {
    return (
        <div>
            <h1 className="header">Welcome Music Lover</h1>
            <table className="music-table">
                <tr>
                    <th>title</th>
                    <th>artist</th>
                    <th>album</th>
                    <th>release_date</th>
                </tr>

                {props.songs.map((song, index,) =>
                    <tr key={index}>
                        <td className="music-table__title">{song.title}</td>
                        <td className="music-table__artist">{song.artist}</td>
                        <td className="music-table__album">{song.album}</td>
                        <td className="music-table__song_release_date">{song.release_date}</td>
                        <td>
                        <button onClick={() => props.deleteRow(song.id)}>Delete</button>
                        </td>
                    </tr>)}


            </table>
        </div>
    )
}

export default MusicTable;

