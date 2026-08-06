import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Room from "./pages/Room.jsx";
import FireAsh from "./pages/FireAsh.jsx";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomCode" element={<Room />} />
        <Route path="/fireash" element={<FireAsh />} />
      </Routes>
    </HashRouter>
  );
}
