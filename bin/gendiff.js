#!/usr/bin/env node

import program from 'commander';
import { version, description } from '../package.json';

program
  .version(version)
  .description(description)
  .option('-f, --format [type]', 'output format', 'stylish');
program.parse(process.argv);
