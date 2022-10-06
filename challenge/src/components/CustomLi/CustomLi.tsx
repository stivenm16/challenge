type Props = {
  user: User;
  check: () => void;
  company: Companies;
};

type Rmv = {
  arr: Companies[];
  value: Companies;
};

export default function CustomLi({ user, check, company }: Props) {
  const userCompanies = user.isAuth;
  const validate = (company: Companies) => {
    return userCompanies.includes(company);
  };

  const removeItem = ({ arr, value }: Rmv) => {
    const index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  };
  const handlerCheck = (e: any) => {
    e.preventDefault();
    const response = validate(company);
    if (response) {
    }
  };
  return (
    <div className="custom-li">
      <li>{user.email}</li>
      <button onClick={(e) => handlerCheck(e)}>button</button>
    </div>
  );
}
