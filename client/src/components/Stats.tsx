import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Stats() {
  const dispatch = useDispatch();
  const stat = useSelector((state: RootState) => state.stats);

  useEffect(() => {
    dispatch({ type: "FETCH_STATS" });
  }, [dispatch]);

  console.log(stat);

  return (
    <div>
      <h2>Overall Statistics</h2>
      <p>Total Songs: {stat.overall.totalSongs}</p>
      <p>Total Artists: {stat.overall.totalArtists}</p>
      <p>Total Albums: {stat.overall.totalAlbums}</p>
      <p>Total Genres: {stat.overall.totalGenres}</p>

      <h3>Songs in Each Genre</h3>
      <ul>
        {stat.genreStats.map((genre) => (
          <li key={genre._id}>
            {genre._id}: {genre.songsInGenre}
          </li>
        ))}
      </ul>

      <h3>Songs and Albums Each Artist Has</h3>
      <ul>
        {stat.artistStats.map((artist) => (
          <li key={artist._id}>
            {artist._id}: {artist.songsCount} songs, {artist.albumsCount} albums
          </li>
        ))}
      </ul>

      <h3>Songs in Each Album</h3>
      <ul>
        {stat.albumStats.map((album) => (
          <li key={album._id}>
            {album._id}: {album.songsInAlbum}
          </li>
        ))}
      </ul>
    </div>
  );
}
