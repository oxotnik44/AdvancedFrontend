import { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
export enum ButtonTheme {
  CLEAR = "clear",
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, theme, ...outherProps } = props;
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...outherProps}
    >
      {children}
    </button>
  );
};
