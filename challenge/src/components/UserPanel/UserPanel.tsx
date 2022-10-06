import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../context/store/auth/useAuth";

export default function UserPanel() {
  const { authState } = useAuthContext();
  const navigate = useNavigate();
  const handlerLogout = () => {
    navigate("/");
  };
  return (
    <div>
      <button className="logout" onClick={handlerLogout}>
        Cierra sesión
      </button>
      <h2>Recuerda que estos son las empresas a las cuales tienes acceso</h2>
      {authState.user?.isAuth.map((company) => {
        return <li>{company}</li>;
      })}
    </div>
  );
}
