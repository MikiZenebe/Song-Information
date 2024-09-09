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

    toast.success("Song Created 🚀🚀🚀");
    navigate("/");

    if (newSong) {
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

// const Container = styled.div`
//   max-width: 600px;
//   background-color: white;
//   color: #18151f;
//   width: auto;
//   margin: 50px auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   padding: 30px 30px;
//   border: 1px solid #695d8561;

//   @media (max-width: 850px) {
//     padding: 50px 30px;
//   }
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 13px;
// `;

// const Button = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   margin: auto;
//   padding: 5px;
//   cursor: pointer;
//   border: 1px solid #f8426f;
//   transition: all 0.4s ease-in-out;
//   border-radius: 5px;
//   font-weight: 600;
//   background: #f8426f;

//   &:hover {
//     width: 100%;
//     background: #f8426f;
//     color: white;
//   }
// `;

// const Divs = styled.form`
//   display: flex;
//   flex-direction: column;

//   label {
//     color: #b9a7ac;
//   }

//   input {
//     width: 100%;
//     padding: 10px;
//     outline: none;
//     border: 1px solid #f842707a;
//     transition: all 0.4s ease-in-out;
//     border-radius: 5px;
//     background-color: transparent;
//     color: #18151f;
//   }

//   input:focus {
//     width: 100%;
//     border: 1px solid #f8426f;
//     transition: all 0.4s ease-in-out;
//   }
// `;
