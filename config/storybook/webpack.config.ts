import { BuildPaths } from '../build/types/config';
import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  // ==== resolve ====
  config.resolve = config.resolve || {};
  config.resolve.modules = config.resolve.modules || ['node_modules'];
  config.resolve.extensions = config.resolve.extensions || ['.js', '.json'];
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');

  // ==== module.rules ====
  config.module = config.module || { rules: [] };

  // 1) фильтруем все валидные RuleSetRule
  const rules = (config.module.rules || []).filter(
    (r): r is RuleSetRule => typeof r === 'object' && r !== null,
  );

  // 2) модифицируем существующие svg-лоадер, чтобы он не брал .svg
  const updatedRules = rules.map((rule) => {
    // если тест соответствует svg-файлам
    if (rule.test instanceof RegExp && rule.test.test('.svg')) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  // 3) добавляем ваш scss/css-лоадер
  updatedRules.push(buildCssLoader(true));

  // 4) отдельно ставим @svgr/webpack для svg
  updatedRules.push({
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  });

  // и кладём обратно в config
  config.module.rules = updatedRules;

  return config;
};
