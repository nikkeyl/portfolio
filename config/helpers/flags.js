import { argv } from 'node:process';

const updateFlag = argv.includes('--update');

export { updateFlag };
