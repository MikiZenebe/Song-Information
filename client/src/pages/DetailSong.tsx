import {
  Container,
  Table,
  DetailBtn,
  BtnContainer,
} from "../styles/tableStyle";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { deleteSongStart } from "../redux/reducer/songSlice";
import toast from "react-hot-toast";
import Loading from "../components/Loading";

export default function DetailSong() {
  const { id } = useParams<{ id: string }>();
  // const [song, setSong] = useState<Song | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { songs, loading, error } = useSelector(
    (state: RootState) => state.songs
  );

  const song = songs.find((song) => song._id === id);

  const handleDelete = () => {
    if (id) {
      dispatch(deleteSongStart(id));
      toast.success("song deleted 🚀🚀🚀");
      navigate("/");
    } else {
      toast.error(error);
    }
  };

  console.log(song);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>{error}</p>;
  if (!song) return <p>Song not found</p>;

  return (
    <Container detail>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div>
            <div>
              <h1 className="detail">Detail about {song.title}</h1>
            </div>

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
          </div>
          <BtnContainer>
            <DetailBtn update delete={false}>
              <Link to={`/update/${song._id}`}> Update</Link>
            </DetailBtn>
            <DetailBtn onClick={handleDelete} delete update={false}>
              Delete
            </DetailBtn>
          </BtnContainer>
        </>
      )}
    </Container>
  );
}
