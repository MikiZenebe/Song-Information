import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { filterSongStart, setFilters } from "../redux/reducer/songSlice";
import { useEffect } from "react";

export default function Filter() {
  const dispatch = useDispatch();
  const { filters, artists, genres } = useSelector(
    (state: RootState) => state.songs
  );

  useEffect(() => {
    dispatch({ type: "FETCH_ARTISTS" });
    dispatch({ type: "FETCH_GENRES" });
  }, [dispatch]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    dispatch(setFilters({ [name]: value }));
    dispatch(filterSongStart());
  };

  return (
    <Container>
      <h1>Filter By</h1>
      <div>
        <select
          className="grad"
          name="genre"
          value={filters.genre}
          onChange={handleFilterChange}
        >
          <option value="">All Genres</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <select
          className="grad"
          name="artist"
          value={filters.artist}
          onChange={handleFilterChange}
        >
          <option value="">All Artists</option>
          {artists.map((artist) => (
            <option key={artist} value={artist}>
              {artist}
            </option>
          ))}
        </select>
      </div>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  margin: auto;
  gap: 10px;

  h1 {
    color: #18151f;
    text-align: center;
  }
  select {
    width: 100px;

    cursor: pointer;
    padding: 5px;
    border: none;
    border-radius: 5px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    margin-bottom: 10px;
    gap: 0px;
  }
`;
