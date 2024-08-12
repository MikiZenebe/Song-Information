import { Routes, Route, useLocation } from "react-router-dom";
import AddSongs from "./pages/AddSongs";
import WelcomePage from "./pages/WelcomePage";
import UpdateSongs from "./pages/UpdateSongs";
import SongList from "./pages/SongList";
import Navbar from "./components/Navbar";

export default function App() {
  const location = useLocation();

  return (
    <>
      {/* Conditionally render Navbar if the current path is not "/" */}
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/list" element={<SongList />} />
        <Route path="/add" element={<AddSongs />} />
        <Route path="/update" element={<UpdateSongs />} />
      </Routes>
    </>
  );
}
