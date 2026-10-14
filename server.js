const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');

const publicDirectory = path.join(__dirname, 'public');
const port = Number(process.env.PORT || 3000);
const host = '127.0.0.1';
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

if (!Number.isInteger(port) || port < 0 || port > 65535) {
  console.error('PORT must be an integer between 0 and 65535.');
  process.exit(1);
}

function insidePublic(filePath) {
  const relative = path.relative(publicDirectory, filePath);
  return relative !== '..' && !relative.startsWith('..' + path.sep) && !path.isAbsolute(relative);
}

const server = http.createServer(async (request, response) => {
  function reply(status, message, headers = {}) {
    response.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8', ...headers });
    response.end(request.method === 'HEAD' ? undefined : message);
  }
  if (!['GET', 'HEAD'].includes(request.method)) {
    reply(405, 'Method not allowed', { Allow: 'GET, HEAD' });
    return;
  }
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (pathname.includes('\0') || pathname.includes('\\')) throw new Error('Invalid path');
  } catch {
    reply(400, 'Bad request');
    return;
  }
  let filePath = path.resolve(publicDirectory, '.' + pathname);
  if (!insidePublic(filePath)) { reply(403, 'Forbidden'); return; }
  try {
    if ((await fs.stat(filePath)).isDirectory()) filePath = path.join(filePath, 'index.html');
    filePath = await fs.realpath(filePath);
    if (!insidePublic(filePath)) { reply(403, 'Forbidden'); return; }
    const content = await fs.readFile(filePath);
    response.writeHead(200, {
      'Content-Type': types[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
      'Content-Length': content.length,
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff',
    });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch (error) {
    const missing = ['ENOENT', 'ENOTDIR', 'EISDIR'].includes(error.code);
    if (!missing) console.error('Unable to serve file:', error.message);
    reply(missing ? 404 : 500, missing ? 'Not found' : 'Internal server error');
  }
});

server.on('error', error => {
  console.error(error.code === 'EADDRINUSE'
    ? `Port ${port} is in use. Set PORT to another port and try again.`
    : error.message);
  process.exitCode = 1;
});
server.listen(port, host, () => {
  console.log(`Local server: http://${host}:${server.address().port}`);
  console.log('Press Ctrl+C to stop.');
});
