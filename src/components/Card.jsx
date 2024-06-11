import { useSelector } from "react-redux";
import profile from "../assets/img/profile.jpg";

const Card = () => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        width: "200px",
        border: darkMode ? "2px solid white" : "2px solid black",
        padding: "20px",
        fontFamily: darkMode ? "sans-serif" : "monospace",
        borderRadius: "10px",
        boxShadow: darkMode ? "0 0 10px white" : "0 0 10px black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "all 0.3s ease",
      }}
    >
      <h2
        style={{
          fontSize: darkMode ? "20px" : "16px",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        My Profile
      </h2>
      <img
        src={profile}
        alt="avatar"
        style={{
          width: "100px",
          borderRadius: "50%",
          boxShadow: darkMode ? "0 0 10px white" : "0 0 10px black",
        }}
      />
      <p
        style={{
          textAlign: "center",
          fontSize: darkMode ? "14px" : "12px",
          marginTop: "10px",
        }}
      >
        Name: Orlando Dacosta
      </p>
    </div>
  );
};
export default Card;
