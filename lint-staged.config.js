export default {
  '*': 'prettier --write',
  'src/**/*.tsx': 'eslint --fix',
  'src/**/*.scss': 'stylelint --fix',
};
