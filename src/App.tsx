import "./App.css";
import { Route, Routes } from "react-router";
import { About } from "./components/About";
import { News } from "./components/News";
import { Authors } from "./components/Authors";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="news" element={<News />} />
        <Route path="authors" element={<Authors />} />
        <Route path="*" element={<h1>We dont have such page</h1>} />
      </Routes>
    </>
  );
}

export default App;
