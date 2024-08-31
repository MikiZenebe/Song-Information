import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

// Register the components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

export default function Stats() {
  const dispatch = useDispatch();
  const stat = useSelector((state: RootState) => state.stats);

  useEffect(() => {
    dispatch({ type: "FETCH_STATS" });
  }, [dispatch]);

  const { overall, genreStats, artistStats, albumStats } = stat;

  const genreData = {
    labels: genreStats.map((genre) => genre._id),
    datasets: [
      {
        label: "# of Songs by Genre",
        data: genreStats.map((genre) => genre.songsInGenre),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
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
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "# of Albums by Artist",
        data: artistStats.map((artist) => artist.albumsCount),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
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
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

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
        backgroundColor: [
          "rgba(255, 206, 86, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Overall Statistics</h2>
      <Pie data={overallData} />

      <h3>Songs by Genre</h3>
      <Pie data={genreData} />

      <h3>Songs and Albums by Artist</h3>
      <Bar data={artistData} />

      <h3>Songs in Each Album</h3>
      <Bar data={albumData} />
    </div>
  );
}
