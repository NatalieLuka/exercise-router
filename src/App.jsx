import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar />
      <main>
        <h2>Welcome to Campus Talents Movies!</h2>
      </main>
      <Outlet />
      <Footer />
    </>
  );
}

export default Home;
