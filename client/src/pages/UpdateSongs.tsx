import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Divs, Form } from "../styles/formStyle";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { Song } from "../types/SongType";
import { updateSongStart } from "../redux/reducer/songSlice";
import toast from "react-hot-toast";
import Loading from "../components/Loading";

export default function UpdateSongs() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { songs, loading, error } = useSelector(
    (state: RootState) => state.songs
  );
  const song = songs.find((song) => song._id === id);

  const [formData, setFormData] = useState<Song>({
    _id: id || "",
    title: song?.title || "",
    artist: song?.artist || "",
    album: song?.album || "",
    genre: song?.genre || "",
  });

  useEffect(() => {
    if (song) {
      setFormData(song);
    }
  }, [song]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if ((formData.title, formData.artist, formData.album, formData.genre)) {
      dispatch(updateSongStart(formData));

      toast.success("Song Updated 🚀🚀🚀");
      navigate("/");
    } else {
      toast.error(error);
    }
  };

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <Container>
      <div>
        <div>
          <h1>Update {formData.title} song Info</h1>
        </div>

        <div>
          <Form onSubmit={handleSubmit}>
            <Divs>
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </Divs>
            <Divs>
              <label>Artist</label>
              <input
                type="text"
                name="artist"
                value={formData.artist}
                onChange={handleChange}
              />
            </Divs>{" "}
            <Divs>
              <label>Album</label>
              <input
                type="text"
                name="album"
                value={formData.album}
                onChange={handleChange}
              />
            </Divs>{" "}
            <Divs>
              <label>Genre</label>
              <input
                type="text"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
              />
            </Divs>
            <Button type="submit">Update Song</Button>
          </Form>
        </div>
      </div>
    </Container>
  );
}
