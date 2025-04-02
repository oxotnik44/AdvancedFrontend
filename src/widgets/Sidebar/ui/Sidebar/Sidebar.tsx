import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwither } from 'widgets/ThemeSwither';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button type="button" onClick={toggleCollapsed}>
        toggle
      </button>
      <div className={cls.switchers}>
        <ThemeSwither />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
