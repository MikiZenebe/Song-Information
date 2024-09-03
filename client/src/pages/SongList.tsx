import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { getSongsFetch, setPage } from "../redux/reducer/songSlice";
import { Link } from "react-router-dom";
import { Container, Table } from "../styles/tableStyle";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Filter from "../components/Filter";
import Stats from "../components/Stats";

export default function SongList() {
  const dispatch = useDispatch();
  const { songs, filters, pagination, error, loading } = useSelector(
    (state: RootState) => state.songs
  );

  useEffect(() => {
    dispatch(getSongsFetch());
  }, [dispatch, pagination.currentPage, filters]);

  const handleChange = (newPage: number) => {
    dispatch(setPage(newPage));
  };

  return (
    <Container>
      <div>
        <div className="genre">
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
              {Array.isArray(songs) &&
                songs.map((song) => {
                  return (
                    <tr key={song._id}>
                      <td>
                        <Link to={`/song/${song._id}`}>{song.title}</Link>
                      </td>
                      <td>{song.artist}</td>
                      <td>{song.album}</td>
                      <td>{song.genre}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>

          <div className="page-btn">
            <button
              disabled={pagination.currentPage === 1}
              onClick={() => handleChange(pagination.currentPage - 1)}
            >
              <IoIosArrowBack size={18} />
            </button>
            <span>
              Page {pagination.currentPage} of {pagination.totalPages}
            </span>
            <button
              disabled={pagination.currentPage === pagination.totalPages}
              onClick={() => handleChange(pagination.currentPage + 1)}
            >
              <IoIosArrowForward size={18} />
            </button>
          </div>
        </div>

        <div>
          <Stats />
        </div>
      </div>
    </Container>
  );
}
