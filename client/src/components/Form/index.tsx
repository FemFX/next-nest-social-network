import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { loginUserAction } from "../../features/user/actionCreator";
import { IFormProps } from "./Form.props";
import "./Form.scss";

const Form: React.FC<IFormProps> = ({
  isRegister = false,
  text,
}): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleSumbit = (e: any) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    dispatch(loginUserAction({ email, password }));
  };
  return (
    <form method="POST" onSubmit={handleSumbit}>
      <h1 className="text-center">{text}</h1>
      <div className="form-control">
        {isRegister && (
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" />
      </div>
    </form>
  );
};

export default Form;
