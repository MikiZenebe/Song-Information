/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSongStart } from "../redux/reducer/songSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Button, Container, Divs, Form } from "../styles/formStyle";

export default function AddSongs() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newSong: any = { _id: "", title, artist, album, genre };
    dispatch(addSongStart(newSong));

    if (newSong) {
      toast.success("Song Created 🚀🚀🚀");
      navigate("/");

      setTitle("");
      setArtist("");
      setAlbum("");
      setGenre("");
    }
  };

  return (
    <Container>
      <div>
        <div>
          <h1>Add Songs</h1>
        </div>

        <div>
          <Form onSubmit={handleSubmit}>
            <Divs>
              <label>Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Divs>
            <Divs>
              <label>Artist</label>
              <input
                type="text"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
              />
            </Divs>{" "}
            <Divs>
              <label>Album</label>
              <input
                type="text"
                value={album}
                onChange={(e) => setAlbum(e.target.value)}
              />
            </Divs>{" "}
            <Divs>
              <label>Genre</label>
              <input
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </Divs>
            <Button type="submit">Add Song</Button>
          </Form>
        </div>
      </div>
    </Container>
  );
}
