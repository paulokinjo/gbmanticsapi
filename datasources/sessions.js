const sessions = require('../data/sessions.json');
const { DataSource } = require('apollo-datasource');
const _ = require('lodash');

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSessions = (args) => _.filter(sessions, args);

  getSessionById = (id) => _.filter(sessions, { id: parseInt(id) })[0];

  toggleFavoriteSession = (id) => {
    const session = _.filter(sessions, { id: parseInt(id) });
    session[0].favorite = !session[0].favorite;
    return session[0];
  };

  addSession = (session) => {
    session.id = Number.parseInt(Math.random() * 99999);
    return session;
  }
}

module.exports = SessionAPI;
