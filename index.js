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

module.exports = HeraldaPlugin;
