import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  CLEAR_INVERTED = 'clearInverted',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}
export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    theme,
    size = ButtonSize.M,
    square,
    disabled,
    ...outherProps
  } = props;
  const mods: Record<string, boolean> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
  };
  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[theme]])}
      disabled={disabled}
      {...outherProps}
    >
      {children}
    </button>
  );
};
