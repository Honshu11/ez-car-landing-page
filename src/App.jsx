import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/home";
import Blogs from "./pages/blogs";
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/blogs" exact element={<Blogs />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
