/**
 * Copies config.example.json → config.json when config.json is missing (first-time setup).
 */
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '..', 'src', 'assets');
const examplePath = path.join(assetsDir, 'config.example.json');
const configPath = path.join(assetsDir, 'config.json');

if (!fs.existsSync(configPath) && fs.existsSync(examplePath)) {
  fs.copyFileSync(examplePath, configPath);
  console.log('Created src/assets/config.json from config.example.json.');
  console.log('Add your Firebase web app settings before running the app.');
}
