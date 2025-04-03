import { useTranslation } from 'react-i18next';
import { PageLoader } from 'widgets/PageLoader';

const MainPage = () => {
  const { t } = useTranslation('main');
  return <div>{t('Главная страница')}</div>;
};
export default MainPage;
