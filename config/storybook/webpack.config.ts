import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config: originalConfig }: { config: webpack.Configuration }) => {
  // Клонируем исходный конфиг, чтобы не мутировать оригинал
  const config: webpack.Configuration = {
    ...originalConfig,
    resolve: {
      modules: [
        'node_modules',
        path.resolve(__dirname, '..', '..', 'src'),
        ...(originalConfig.resolve?.modules || []),
      ],
      extensions: ['.js', '.json', '.ts', '.tsx', ...(originalConfig.resolve?.extensions || [])],
      ...originalConfig.resolve,
    },
    module: {
      rules: [],
      ...originalConfig.module,
    },
    // Если в originalConfig уже есть плагины — сохраняем их, иначе создаём новый массив
    plugins: [...(originalConfig.plugins || [])],
  };

  // Извлекаем из конфига существующие правила (фильтруем только объекты‑RuleSetRule)
  const baseRules = (config.module!.rules as unknown as Array<RuleSetRule | any>).filter(
    (r): r is RuleSetRule => typeof r === 'object' && r !== null,
  );

  // Обновляем правило для SVG: исключаем из старого лоадера файлы *.svg
  const updatedRules: RuleSetRule[] = baseRules.map((rule) => {
    if (rule.test instanceof RegExp && rule.test.test('.svg')) {
      return {
        ...rule,
        exclude: /\.svg$/i,
      };
    }
    return rule;
  });

  // Добавляем CSS/SCSS-лоадер (buildCssLoader(true) возвращает RuleSetRule)
  updatedRules.push(buildCssLoader(true));

  // Добавляем правило для обработки SVG через @svgr/webpack
  updatedRules.push({
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  });

  // Заменяем module.rules на обновлённый массив
  config.module = {
    ...config.module,
    rules: updatedRules,
  };

  // Добавляем DefinePlugin в секцию plugins
  config.plugins!.push(
    new DefinePlugin({
      __IS_DEV__: true,
    }),
  );

  return config;
};
