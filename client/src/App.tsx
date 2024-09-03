import { Routes, Route, useLocation } from "react-router-dom";
import AddSongs from "./pages/AddSongs";
import WelcomePage from "./pages/WelcomePage";
import UpdateSongs from "./pages/UpdateSongs";
import SongList from "./pages/SongList";
import Navbar from "./components/Navbar";
import DetailSong from "./pages/DetailSong";

export default function App() {
  const location = useLocation();

  return (
    <div className="app">
      {/* Conditionally render Navbar if the current path is not "/" */}
      {location.pathname !== "/welcome" && <Navbar />}

      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/" element={<SongList />} />
        <Route path="/song/:id" element={<DetailSong />} />
        <Route path="/add" element={<AddSongs />} />
        <Route path="/update/:id" element={<UpdateSongs />} />
      </Routes>
    </div>
  );
}
