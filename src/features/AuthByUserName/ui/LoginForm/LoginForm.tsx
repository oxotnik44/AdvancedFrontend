import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input placeholder="Введите username" type="text" className={cls.input} autofocus />
      <Input placeholder="Введите пароль" type="text" className={cls.input} />

      <Button className={cls.loginBtn}>Войти</Button>
    </div>
  );
};
