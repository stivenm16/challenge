import React from "react";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const navigate = useNavigate();
  const handlerLogout = () => {
    navigate("/");
  };
  return (
    <button className="logout" onClick={handlerLogout}>
      Cierra sesión
    </button>
  );
}

export default LogoutBtn;
