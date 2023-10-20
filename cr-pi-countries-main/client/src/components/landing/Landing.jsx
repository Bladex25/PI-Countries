import { Navigate, useNavigate } from "react-router-dom";
import "./landing.style.css";

const Landing = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="container">
      <h1 className="title">Welcome</h1>
      <button onClick={handleClick}>START</button>
    </div>
  );
};

export default Landing;
