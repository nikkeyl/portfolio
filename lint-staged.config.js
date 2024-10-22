export default {
  '*': 'prettier --write',
  'src/**/*.{tsx,ts}': 'eslint --fix',
  'src/**/*.scss': 'stylelint --fix',
};
