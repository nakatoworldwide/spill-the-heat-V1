const fs = require('fs');
const b64 = fs.readFileSync('node_modules/@fontsource/archivo-black/files/archivo-black-latin-400-normal.woff2').toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 580">
  <defs>
    <style>
      @font-face {
        font-family: "Archivo Black";
        src: url("data:font/woff2;base64,${b64}") format("woff2");
        font-weight: 400;
      }
    </style>
    <linearGradient id="flame" x1="100%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFB300"/>
      <stop offset="30%" stop-color="#FF8F50"/>
      <stop offset="100%" stop-color="#FF5A1F"/>
    </linearGradient>
  </defs>
  <text x="0" y="190" font-family="Archivo Black" font-size="178" letter-spacing="2" fill="url(#flame)">SPILL</text>
  <text x="0" y="385" font-family="Archivo Black" font-size="178" letter-spacing="2" fill="url(#flame)">THE</text>
  <text x="0" y="575" font-family="Archivo Black" font-size="178" letter-spacing="2" fill="url(#flame)">HEAT</text>
</svg>`;
fs.writeFileSync('public/logo.svg', svg, 'utf8');
console.log('Done. Size:', fs.readFileSync('public/logo.svg').length, 'bytes');