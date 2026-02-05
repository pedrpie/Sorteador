import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NomesPage from "./pages/NomesPage";
import NumerosPage from "./pages/NumerosPage";
import Background from "./components/Background";
import "./App.css";

function App() {
  return (
    <>
      <div className="background-container">
        <Background
          colorStops={["#7cff67","#B19EEF","#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/nomes" element={<NomesPage />}></Route>
        <Route path="/numeros" element={<NumerosPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
