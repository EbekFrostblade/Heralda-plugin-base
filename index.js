const Responder = require("./classes/responder.js");

class HeraldaPlugin {
  constructor(client, config) {
    this.client = client;
    this.responder = new Responder(client);
    this.config = config;

    this.init(client, config);
  }
}

HeraldaPlugin.Responder = Responder;
HeraldaPlugin.mergeConfigs = (clientConfig, defaultConfig) => {
  let finalConfig = defaultConfig;
  for (let key in clientConfig) {
    if (finalConfig[key] && typeof(finalConfig[key]) === 'object' && !Array.isArray(finalConfig[key])) {
      finalConfig[key] = HeraldaPlugin.mergeConfigs(clientConfig[key], finalConfig[key]);
    }
    else {
      finalConfig[key] = clientConfig[key];
    }
  }

  return finalConfig;
};

module.exports = HeraldaPlugin;
