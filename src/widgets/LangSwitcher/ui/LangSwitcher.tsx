import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <Button
      onClick={toggleLang}
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
    >
      {t("Язык")}
    </Button>
  );
};
