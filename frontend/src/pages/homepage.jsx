import { useState } from "react";
import Login from "../components/login";
import Signup from "../components/signup";
import "./Homepage.css";

function Homepage() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("Doctor");

  return (
    <div className="homepage-container">
      <h1>Welcome to Our Healthcare Portal</h1>
      <div className="role-selector">
        <label>Select Role: </label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Doctor">Doctor</option>
          <option value="Patient">Patient</option>
        </select>
      </div>
      <div className="toggle-buttons">
        <button
          onClick={() => setIsLogin(true)}
          className={isLogin ? "active" : ""}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={!isLogin ? "active" : ""}
        >
          Signup
        </button>
      </div>
      {isLogin ? <Login role={role} /> : <Signup role={role} />}
    </div>
  );
}

export default Homepage;
