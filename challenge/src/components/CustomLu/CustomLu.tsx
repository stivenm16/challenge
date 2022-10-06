import React from "react";
import { db } from "../../utils/db";
import CustomLi from "../CustomLi/CustomLi";

type Props = {
  check: () => void;
  company: Companies;
};

export default function CustomLu({ check, company }: Props) {
  return (
    <div className="grid-ul">
      <h2>{company}</h2>
      <ul className="custom-lu">
        {db.map((user) => (
          <CustomLi user={user} check={check} company={company} />
        ))}
      </ul>
    </div>
  );
}
