import { useState } from "react";
import cls from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwither } from "widgets/ThemeSwither";
import { LangSwitcher } from "widgets/LangSwitcher/ui/LangSwitcher";
interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={toggleCollapsed}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwither />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
