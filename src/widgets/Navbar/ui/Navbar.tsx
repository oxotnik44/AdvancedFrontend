import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to="/">
        Главная
      </AppLink>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        className={cls.mainLink}
        to="/about"
      >
        О сайте
      </AppLink>
    </div>
  </div>
);
