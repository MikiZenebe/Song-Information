import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { filterSongStart, setFilters } from "../redux/reducer/songSlice";

export default function Filter() {
  const dispatch = useDispatch();
  const { filters } = useSelector((state: RootState) => state.songs);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    dispatch(setFilters({ [name]: value }));
    dispatch(filterSongStart());
  };

  return (
    <Container>
      <select name="genre" value={filters.genre} onChange={handleFilterChange}>
        <option value="">All Genres</option>
        <option value="Rock">Rock</option>
        <option value="Pop">Pop</option>
        <option value="Jazz">Jazz</option>
      </select>
    </Container>
  );
}

export const Container = styled.div`
  select {
    width: 100px;
    cursor: pointer;
    padding: 5px;
  }
`;
