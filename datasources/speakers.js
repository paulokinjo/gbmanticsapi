const speakers = require('../data/speakers.json');
const { DataSource } = require('apollo-datasource');
const _ = require('lodash');

class SpeakerAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSpeakers = (args) => _.filter(speakers, args);

  getSpeakerById = (id) => _.filter(speakers, { id: parseInt(id) })[0];
}

module.exports = SpeakerAPI;
