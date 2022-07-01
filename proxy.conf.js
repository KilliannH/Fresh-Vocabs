const config = require("./config");

const PROXY_CONFIG = [
  {
    context: [
      "/api"
    ],
    target: `${config.backendProtocol}://${config.backendHost}:${config.backendPort}`,
    secure: false,
    changeOrigin: true
  }
]

module.exports = PROXY_CONFIG;
