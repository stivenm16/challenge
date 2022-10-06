import React, { useState } from "react";
import { db, dbCompanies } from "../../utils/db";
import CustomLi from "../CustomLi/CustomLi";
import CustomLu from "../CustomLu/CustomLu";

export default function AdminPanel() {
  const [isCheck, setIsCheck] = useState<Boolean>();
  const check = () => {
    setIsCheck(!isCheck);
  };
  console.log(isCheck, "state");
  return (
    <div className="grid-companies">
      {dbCompanies.map((company) => (
        <CustomLu check={check} company={company} />
      ))}
    </div>
  );
}
