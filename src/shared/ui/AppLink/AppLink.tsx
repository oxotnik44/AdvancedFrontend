import { Link, LinkProps } from "react-router-dom";
import cls from "./AppLink.module.scss";
import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...outherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      {...outherProps}
    >
      {children}
    </Link>
  );
};
