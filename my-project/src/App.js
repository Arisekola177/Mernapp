import BlogDetails from "./Pages/BlogDetails";
import Create from "./Pages/Create";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
         <Navbar />
          <Routes>
            <Route path="/"  element={<Home />}  />
            <Route path="/register"  element={<Register />}  />
            <Route path="/login"  element={<Login />}  />
            <Route path="/create"  element={<Create />}  />
            <Route path="/blogs/:id"  element={<BlogDetails />}  />
          </Routes>
          <Footer/>
     </BrowserRouter> 
    </div>
  );
}

export default App;
