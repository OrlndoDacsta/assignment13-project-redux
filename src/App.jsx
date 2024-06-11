import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { light, dark } from "./redux/slices/darkModeSlice";
import Card from "./components/Card";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

function App() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const handleClick = () => {
    if (darkMode) {
      dispatch(light());
    } else {
      dispatch(dark());
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: darkMode ? "black" : "white",
          height: "100vh",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card />
        {darkMode ? (
          <button className="btn" onClick={handleClick}>
            {" "}
            <MdOutlineLightMode style={{ marginRight: "5px" }} />
            Light Mode
          </button>
        ) : (
          <button className="btn" onClick={handleClick}>
            {" "}
            <MdDarkMode style={{ marginRight: "5px" }} />
            Dark Mode
          </button>
        )}
      </div>
    </>
  );
}

export default App;
