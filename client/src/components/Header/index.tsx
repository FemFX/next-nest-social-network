import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../types/post";
import Button from "../Button";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>("");
  const search = async (e: any) => {
    if (e.key === "Enter") {
      console.log(value);

      const { data } = await axios.post<IPost[]>(
        "http://localhost:4000/post/search",
        {
          query: value,
        }
      );
      if (data) {
        return navigate(`/post/${data[0].id}`);
      }

      setValue("");
    }
  };
  return (
    <header>
      <Link to={"/"} className="">
        Reddit
      </Link>
      <div>
        <input
          className="search"
          placeholder="Search Post"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={search}
        />
      </div>
      <div>
        <Button appearence="outlined">Log In</Button>
      </div>
      <div>
        <Button appearence="primary">Sign Up</Button>
      </div>
      <div>Profile</div>
    </header>
  );
};

export default Header;
