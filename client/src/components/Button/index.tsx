import { IButtonProps } from "./Button.props";
import cn from "classnames";
import "./Button.scss";

const Button: React.FC<IButtonProps> = ({
  children,
  className,
  appearence,
  ...props
}): JSX.Element => {
  return (
    <button
      className={cn("button", className, {
        primary: appearence === "primary",
        outlined: appearence === "outlined",
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
