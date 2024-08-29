import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { getSongsFetch } from "../redux/reducer/songSlice";
import { Link } from "react-router-dom";
import { Container, Table } from "../styles/tableStyle";
import Filter from "../components/Filter";

export default function SongList() {
  const dispatch = useDispatch();
  const { songs, error, loading } = useSelector(
    (state: RootState) => state.songs
  );

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch]);

  console.log(songs);
  return (
    <Container>
      <div>
        <div className="genre">
          <h1>Filter By Genre</h1>
          <Filter />
        </div>
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        <div>
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
              {songs.map((song) => {
                return (
                  <tr key={song._id}>
                    <td>
                      <Link
                        to={`/song/${song._id}`}
                        style={{ color: "#18151f" }}
                      >
                        {song.title}
                      </Link>
                    </td>
                    <td>{song.artist}</td>
                    <td>{song.album}</td>
                    <td>{song.genre}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </Container>
  );
}

const Genre = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  p {
    border: 1px solid #f8426f;
    padding: 5px;
    border-radius: 5%;
  }
  p:hover {
    background-color: #f8426f;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
  }
`;
