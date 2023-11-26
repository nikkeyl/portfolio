import { join } from 'path';

import CopyPlugin from 'copy-webpack-plugin';
import fs from 'fs';
import gulp from 'gulp';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ifPlugin from 'gulp-if';
import TerserPlugin from 'terser-webpack-plugin';

import isTypeChecker from '../helpers/isTypeChecker.js';
import notifier from '../helpers/Notifier.js';
import status from '../helpers/Status.js';
import trimString from '../helpers/trimString.js';

const PLUGINS = {
	CopyPlugin,
	fs,
	gulp,
	HtmlWebpackPlugin,
	isTypeChecker,
	join,
	notifier,
	status,
	TerserPlugin,
	trimString,
	if: ifPlugin
};

export default PLUGINS;
