const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 9966;
const HOST = 'localhost'
const BANNER = `http://${HOST}:9800/`;
const DESCRIPTION = `http://${HOST}:9006/`;
const RESERVATIONS = `http://${HOST}:9001/`;
const REVIEWS = `http://${HOST}:9999/`;


app.use(createProxyMiddleware(`${BANNER}api/photos`, { changeOrigin: true }));
app.use(createProxyMiddleware(`${DESCRIPTION}api/description`, { changeOrigin: true }));
app.use(createProxyMiddleware(`${RESERVATIONS}api/room`, { changeOrigin: true }));
app.use(createProxyMiddleware(`${REVIEWS}api/reviews`, { changeOrigin: true }));
app.use('/', express.static('public'));
app.use(express.urlencoded());

app.listen(PORT, () => { console.log(`Listening on port http://${HOST}:${PORT}/?1`); });

