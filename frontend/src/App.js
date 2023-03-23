import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import MainNavbar from "./components/Header/MainNavbar";
import HeadingNavbar from "./components/Header/HeadingNavbar";

export default function App() {
  return (
    <>
      <HeadingNavbar />
      <MainNavbar />
      <Routes>
        <Route path="/" element={<h1>Main page</h1>} />
      </Routes>
      <Footer />
    </>
  );
}
