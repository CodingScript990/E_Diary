import "./App.css";
// react-router-dom@6
import { BrowserRouter as Container, Routes, Route } from "react-router-dom";
// url
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import New from "./pages/New";

function App() {
  return (
    <Container>
      <div className="App">
        <h2>hi?</h2>

        <i className="fa-solid fa-face-kiss-wink-heart" />
        <i className="fa-solid fa-face-grin-wide" />
        <i className="fa-solid fa-face-meh-blank" />
        <i className="fa-solid fa-face-rolling-eyes" />
        <i className="fa-solid fa-face-frown" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
