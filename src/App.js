import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import Tool from "./components/Tool";
import Toolbox from "./components/Toolbox";
import Contacts from "./components/Contacts";
import About from "./components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Toolbox />} />
              <Route path="/:slug" element={<Tool />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
