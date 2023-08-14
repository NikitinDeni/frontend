import { Routes, Route, BrowserRouter } from "react-router-dom"
import HomePage from "./pages/hohepage";
import RegPage from "./pages/registration";
import SignIn from "./pages/signin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<HomePage />} />
          <Route path = "reg" element = {<RegPage />} />
          <Route path = "signin" element = {<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
