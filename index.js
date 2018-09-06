const Responder = require("./classes/responder.js");

let defaultConfig = {};

try {
  defaultConfig = require.resolve('./config.json');
}
catch (err) {
  console.log('No default configuration found.')
}

class HeraldaPlugin {
  constructor(client, config) {
    this.client = client;
    this.responder = new Responder(client);
    this.config = mergeConfigs(config);

    this.init(client, config);
  }
}

function mergeConfigs(clientConfig) {
  let finalConfig = defaultConfig;
  for (let key in clientConfig) {
    finalConfig[key] = clientConfig[key];
  }

  return finalConfig;
}

HeraldaPlugin.Responder = Responder;

module.exports = HeraldaPlugin;
