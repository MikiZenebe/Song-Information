import {
  Container,
  Table,
  DetailBtn,
  BtnContainer,
} from "../styles/tableStyle";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Song } from "../types/SongType";
import { getSingleSongUrl } from "../api/index";
import { css } from "@emotion/react";
import axios from "axios";

export default function DetailSong() {
  const { id } = useParams<{ id: string }>();
  const [song, setSong] = useState<Song | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSingleSong = async () => {
      try {
        const res = await axios.get(`${getSingleSongUrl}/${id}`);
        setSong(res.data);
      } catch (error) {
        setError("Failed to fetch song" + error);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleSong();
  }, [id]);
  console.log(song);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>{error}</p>;
  if (!song) return <p>Song not found</p>;

  interface btnProps {
    success: string;
  }

  return (
    <Container>
      <div>
        <div>
          <h1>Detail about {song.title}</h1>
        </div>
        {/* {loading && <h1>Loading...</h1>} */}
        {error && <h1>{error}</h1>}

        <Table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.genre}</td>
            </tr>
          </tbody>
        </Table>

        <BtnContainer>
          <DetailBtn update>Update</DetailBtn>
          <DetailBtn delete>Delete</DetailBtn>
        </BtnContainer>
      </div>
    </Container>
  );
}
