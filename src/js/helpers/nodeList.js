const body = document.querySelector('body');
const date = new Date();
const currentYear = date.getFullYear();
const header = document.querySelector('header.header');
const html = document.documentElement;
const lockPaddings = document.querySelectorAll('[data-lp]');

export { body, date, currentYear, header, html, lockPaddings };
