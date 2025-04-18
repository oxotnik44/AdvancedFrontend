import { FC, useMemo, useState } from 'react';
import { Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem('theme') as Theme) || Theme.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
