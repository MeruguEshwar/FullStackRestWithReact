import "./App.css";
import Header from "./Components/Header";
import { Router, Route, Link, BrowserRouter, Routes } from "react-router-dom";
import LogIn from "./Components/LogIn";
import Register from "./Components/Register";
import VendorHeader from "../src/Vendor/VendorHeader";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header /> */}
        <Routes>
          {/* <Route path="/" element={<Header />}></Route> */}
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/vendor" element={<VendorHeader />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
