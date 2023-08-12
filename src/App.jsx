import { Routes, Route, BrowserRouter } from "react-router-dom"
import HomePage from "./pages/hohepage";
import RegPage from "./pages/registration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<HomePage />} />
          <Route path = "reg" element = {<RegPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
