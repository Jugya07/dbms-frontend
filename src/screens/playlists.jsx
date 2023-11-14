import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../shared/globalStyle.css";
import "./playlists.css";

export default function Favorites() {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/playlists")
      .then(function (response) {
        console.log(response.data.data);
        setPlaylists(response.data.data);
        console.log(playlists[0]);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
      <div className="screen-container">
        <div className="library-body">
          {playlists ? (
            playlists.map((playlist, index) => (
              <div class="card">
                <p className="playlist-title">{playlist.Title}</p>
                <p className="playlist-subtitle">Songs: {playlist.totalSongs}</p>
              </div>
            ))
          ) : (
            <p className="loading">Loading....</p>
          )}
        </div>
      </div>
  );
}
