// @ts-ignore
const config = require("config");

const constants = {
  urlPrefix: `${config.backendProtocol}://${config.backendHost}:${config.backendPort}`,
};

export default constants;
