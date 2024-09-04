import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Bar, Pie } from "react-chartjs-2";
import { StatContainer } from "../styles/statStyle";

export default function Stats() {
  const dispatch = useDispatch();
  const stat = useSelector((state: RootState) => state.stats);

  useEffect(() => {
    dispatch({ type: "FETCH_STATS" });
  }, [dispatch]);

  const { overall, genreStats, artistStats, albumStats } = stat;

  const overallData = {
    labels: ["Total Songs", "Total Artists", "Total Albums", "Total Genres"],
    datasets: [
      {
        label: "Overall Statistics",
        data: [
          overall.totalSongs,
          overall.totalArtists,
          overall.totalAlbums,
          overall.totalGenres,
        ],
        backgroundColor: ["#00BBD8", "#F8426F", "#0c6989", "#fff2f2"],
        borderColor: ["#00BBD8", "#F8426F", "#0c6989", "#fff2f2"],
        borderWidth: 1,
      },
    ],
  };

  const genreData = {
    labels: genreStats.map((genre) => genre._id),
    datasets: [
      {
        label: "# of Songs by Genre",
        data: genreStats.map((genre) => genre.songsInGenre),
        backgroundColor: "#00BBD8",
        borderColor: "#039bb3",
        borderWidth: 1,
      },
    ],
  };
  const artistData = {
    labels: artistStats.map((artist) => artist._id),
    datasets: [
      {
        label: "# of Songs by Artist",
        data: artistStats.map((artist) => artist.songsCount),
        backgroundColor: "#2c3e66",
        borderColor: "#2c3e66",
        borderWidth: 1,
      },
      {
        label: "# of Albums by Artist",
        data: artistStats.map((artist) => artist.albumsCount),
        backgroundColor: "#00BBD8",
        borderColor: "#00BBD8",
        borderWidth: 1,
      },
    ],
  };

  const albumData = {
    labels: albumStats.map((album) => album._id),
    datasets: [
      {
        label: "# of Songs in Album",
        data: albumStats.map((album) => album.songsInAlbum),
        backgroundColor: "#00BBD8",
        borderColor: "#00BBD8",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      {" "}
      <StatContainer>
        <div>
          {" "}
          <h3>Overall Statistics</h3>
          <Pie data={overallData} />
        </div>

        <div>
          {" "}
          <h3>Songs by Genre</h3>
          <Pie data={genreData} />
        </div>

        <div>
          {" "}
          <h3>Songs and Albums by Artist</h3>
          <Bar data={artistData} />
        </div>

        <div>
          {" "}
          <h3>Songs in Each Album</h3>
          <Bar data={albumData} />
        </div>
      </StatContainer>
    </>
  );
}
