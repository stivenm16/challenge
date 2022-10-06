import { useEffect, useState } from "react";
import { setUser } from "../../context/actions/auth.action";
import { db } from "../../utils/db";

type Props = {
  user: User;
  check: () => void;
  company: Companies;
};

export default function CustomLi({ user, check, company }: Props) {
  //Arr companies auth
  const { isAuth } = user;
  const [auth, setAuth] = useState("");

  //Auth State validation
  useEffect(() => {
    const response = validate();
    response ? setAuth("Autorizado") : setAuth("No autorizado");
  }, [isAuth]);

  const validate = () => {
    return isAuth.includes(company);
  };

  const toggleAuth = () => {
    const response = validate();

    if (response) {
      const index = isAuth.indexOf(company);
      if (index > -1) {
        isAuth.splice(index, 1);
        setAuth("No autorizado");
      }
    } else {
      isAuth.push(company);
      setAuth("Autorizado");
    }
  };

  return (
    <div className="custom-li">
      <li>{user.email}</li>
      <button onClick={toggleAuth}>{auth}</button>
    </div>
  );
}
