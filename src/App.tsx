import "./App.css";
import { Route, Routes } from "react-router";
import { About } from "./components/About";
import { Authors } from "./components/Authors";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { News } from "./pages/News";

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
      <Footer />
    </>
  );
}

export default App;
