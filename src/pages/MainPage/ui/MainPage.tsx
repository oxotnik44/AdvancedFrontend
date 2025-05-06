import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <div>
      <BugButton />
      <Counter />
      <Input placeholder={t('Введите текст')} />
      {t('Главная страница')}
    </div>
  );
};
export default MainPage;
