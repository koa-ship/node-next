'use strict';

let plugins = [
  'syntax-async-functions',
  'syntax-async-generators',
  'transform-async-to-generator',
  'transform-es2015-modules-commonjs',
  'transform-es2015-sticky-regex',
  'transform-es2015-unicode-regex'
];

if (process.version.match(/v4/)) {
  plugins.push('transform-es2015-spread');
  plugins.push('transform-es2015-destructuring');
  plugins.push('transform-es2015-parameters');
}

if (process.version.match(/v5/)) {
  plugins.push('transform-es2015-destructuring');
  plugins.push('transform-es2015-parameters');
}

require('babel-core/register')({
  'plugins': plugins
});