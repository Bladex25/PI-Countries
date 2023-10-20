import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import Landing from "./components/landing/Landing";
import Detail from "./components/detail/Detail";
import Create from "./components/create/Create";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCountries } from "./redux/countriesSlice";
import Navbar from "./components/navbar/NavBar";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    async function fetchData() {
      const response = await axios("http://localhost:3001/countries");
      dispatch(setCountries(response.data));
    }
    fetchData();
  }, []);

  return (
    <div>
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
