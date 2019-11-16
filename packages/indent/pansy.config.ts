import { Config } from '@walrus/pansy';
import { lodash } from '@walrus/shared-utils';

interface AnyObject {
  [key: string]: any
}

/**
 * 判断是否是pansy的包
 * @param name
 */
function isPansyPackage(name: string): boolean {
  return /^@pansy\/[\w+]/.test(name);
}

/**
 * 获取所有需要导出的包
 */
function getGlobals(): AnyObject {
  // 获取所有依赖项
  const dependencies = require('./package.json').dependencies;

  const globals: AnyObject = {};

  Object.keys(dependencies).forEach((item: string) => {
    if (isPansyPackage(item)) {
      globals[item] = lodash.camelCase(item.split('/')[1]);
    }
  })

  return globals;
}

const config: Config = {
  input: 'src/index.ts',
  output: {
    format: ['cjs', 'es', 'umd', 'umd-min'],
    moduleName: 'indent',
    sourceMap: true,
  },
  globals: getGlobals()
}

export default config
