#!/usr/bin/env node

// Dummy build script - just creates dist directories
const fs = require('fs');
const path = require('path');

const distCjs = path.join(process.cwd(), 'dist', 'cjs');
const distEsm = path.join(process.cwd(), 'dist', 'esm');

fs.mkdirSync(distCjs, { recursive: true });
fs.mkdirSync(distEsm, { recursive: true });

// Create dummy index files
fs.writeFileSync(
  path.join(distCjs, 'index.js'),
  'module.exports = { hello: "world" };'
);
fs.writeFileSync(
  path.join(distCjs, 'index.d.ts'),
  'export declare const hello: string;'
);
fs.writeFileSync(
  path.join(distEsm, 'index.js'),
  'export const hello = "world";'
);

console.log('✓ Build complete');
