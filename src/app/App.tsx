import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
  if (user) {
    dispatch(userActions.setAuthData(JSON.parse(user)));
  }
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<div>...Loading</div>}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
export default App;
