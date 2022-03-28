import Button from "../Button";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="">Reddit</div>
      <div>
        <input type="text" />
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
