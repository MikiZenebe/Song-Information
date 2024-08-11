import { Routes, Route } from "react-router-dom";
import AddSongs from "./pages/AddSongs";
import WelcomePage from "./pages/WelcomePage";
import UpdateSongs from "./pages/UpdateSongs";
import SongList from "./pages/SongList";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/list" element={<SongList />} />
      <Route path="/add" element={<AddSongs />} />
      <Route path="/update" element={<UpdateSongs />} />
    </Routes>
  );
}
