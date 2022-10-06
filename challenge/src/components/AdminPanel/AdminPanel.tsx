import React, { useState } from "react";
import { db, dbCompanies } from "../../utils/db";
import CustomLi from "../CustomLi/CustomLi";
import CustomLu from "../CustomLu/CustomLu";
import LogoutBtn from "../LogoutBtn/LogoutBtn";

export default function AdminPanel() {
  const [isCheck, setIsCheck] = useState<Boolean>();
  const check = () => {
    setIsCheck(!isCheck);
  };
  return (
    <div className="grid-companies">
      <LogoutBtn />
      {dbCompanies.map((company) => (
        <CustomLu check={check} company={company} />
      ))}
    </div>
  );
}
