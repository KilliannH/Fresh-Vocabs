const config = require("./config.example");

const PROXY_CONFIG = [
  {
    context: [
      "/api",
      "/login"
    ],
    target: `${config.backendProtocol}://${config.backendHost}:${config.backendPort}`,
    secure: false,
    changeOrigin: true
  }
]

module.exports = PROXY_CONFIG;
