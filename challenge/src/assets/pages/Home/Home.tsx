import AdminPanel from "../../../components/AdminPanel/AdminPanel";
import UserPanel from "../../../components/UserPanel/UserPanel";
import useAuthContext from "../../../context/store/auth/useAuth";

export default function Home() {
  const { authState, dispatchAuthState } = useAuthContext();

  return (
    <div>{authState.user?.rol == "admin" ? <AdminPanel /> : <UserPanel />}</div>
  );
}
