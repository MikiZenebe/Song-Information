import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { getSongsFetch } from "../redux/reducer/songSlice";

export default function SongList() {
  const dispatch = useDispatch();
  const { songs, error } = useSelector((state: RootState) => state.songs);

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch, songs]);

  return (
    <Container>
      <div>
        <div>
          <h1>Genres</h1>

          <Genre>
            {/* {songs.map((song) => {
              return <p>{song.genre}</p>;
            })} */}
          </Genre>
        </div>
        {/* {loading && <h1>Loading...</h1>} */}
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
                  <tr>
                    <td>{song.title}</td>
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

const Container = styled.div`
  max-width: 600px;
  background-color: #18151f;
  color: #ffffff;
  width: auto;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px;

  @media (max-width: 850px) {
    padding: 50px 30px;
  }
`;
const Table = styled.div`
  margin-top: 10%;
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #493f3f87;
  cursor: pointer;

  td,
  th {
    padding: 15px 25px;

    @media (max-width: 750px) {
      padding: 15px 25px;
    }
  }

  tr:nth-child(even) {
    background-color: #493f3f87;
  }
  tr:hover {
    background-color: #f8426f;
    transition: all 0.4s ease-in-out;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #3a3349;
  }
`;

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
