import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({
  config: originalConfig,
}: {
  config: webpack.Configuration;
}) => {
  // Создаём копию, чтобы не мутировать параметр
  const config: webpack.Configuration = {
    ...originalConfig,
    resolve: {
      modules: [
        'node_modules',
        path.resolve(__dirname, '..', '..', 'src'),
        ...(originalConfig.resolve?.modules || []),
      ],
      extensions: [
        '.js',
        '.json',
        '.ts',
        '.tsx',
        ...(originalConfig.resolve?.extensions || []),
      ],
      ...originalConfig.resolve,
    },
    module: {
      rules: [],
      ...originalConfig.module,
    },
  };

  // Фильтруем существующие правила
  const baseRules = (
    config.module!.rules as unknown as Array<RuleSetRule | any>
  ).filter((r): r is RuleSetRule => typeof r === 'object' && r !== null);

  // Обновляем правило для svg (исключаем из старого лоадера)
  const updatedRules: RuleSetRule[] = baseRules.map((rule) => {
    if (rule.test instanceof RegExp && rule.test.test('.svg')) {
      return {
        ...rule,
        exclude: /\.svg$/i,
      };
    }
    return rule;
  });

  // Добавляем SCSS/CSS лоадер и SVGR
  updatedRules.push(buildCssLoader(true));
  updatedRules.push({
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  });

  // Собираем окончательный config
  return {
    ...config,
    module: {
      ...config.module,
      rules: updatedRules,
    },
  };
};
