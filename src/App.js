import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import "./App.css";

function App() {
  const darkmode = useSelector((state) => state.darkmode);

  let darkmodeStyle = {};

  if (darkmode === "ON") {
    darkmodeStyle = {
      backgroundColor: "#2d2d2d",
      color: "whitesmoke",
    };
  }
  return (
    <>
      <Navbar />
      <div className="container p-3" style={darkmodeStyle}>
        <Shop />
      </div>
    </>
  );
}
export default App;
