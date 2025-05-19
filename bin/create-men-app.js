#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync} = require('child_process')

const appName = process.argv[2];

if(!appName) {
  console.error('Please specify a project name:');
  console.error('   npx create-mrn-app my-app');
  process.exit(1);
}

const targetDir = path.join(process.cwd(), appName);
const templateDir = path.join(__dirname, '../template');

fs.mkdirSync(targetDir, {recursive: true});
fs.cpSync(templateDir, targetDir, {recursive: true});

console.log('Installing Dependencies...');
execSync('npm install', {cwd: targetDir, stdio: 'inherit'});

console.log(`Project ${appName} created`);
console.log(`cd ${appName} && npm run dev`);