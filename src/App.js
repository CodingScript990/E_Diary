import "./App.css";
// react-router-dom@6
import { BrowserRouter as Container, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import New from "./pages/New";
import RouterTest from "./components/RouterTest";

function App() {
  return (
    <Container>
      <div className="App">
        <h2>hi?</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diary/:id" element={<Diary />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/new" element={<New />} />
        </Routes>
        <RouterTest />
      </div>
    </Container>
  );
}

export default App;
