import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="home">
      <h1>Welcome to the App</h1>
      <button onClick={handleLogout}>
        Explore More...
      </button>
    </div>
  );
}

export default Home;
