import useAuthContext from "../../context/store/auth/useAuth";
import LogoutBtn from "../LogoutBtn/LogoutBtn";

export default function UserPanel() {
  const { authState } = useAuthContext();

  return (
    <div>
      <LogoutBtn />
      <h2>Recuerda que estos son las empresas a las cuales tienes acceso</h2>
      {authState.user?.isAuth.map((company) => {
        return <li>{company}</li>;
      })}
    </div>
  );
}
