import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/board" element={<Board />} />
      </Routes>
      {/* <Profile />
      <Board /> */}
    </div>
  );
}

export default App;
