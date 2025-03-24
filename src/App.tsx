import { Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", { selected: true }, [theme])}>
      <Suspense fallback={<div>...Loading</div>}>
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>About</Link>
        <button onClick={toggleTheme}>qwe</button>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
      qweq
      <Counter />
    </div>
  );
};
export default App;
