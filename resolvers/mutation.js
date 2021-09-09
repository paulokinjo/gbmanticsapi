module.exports = {
  toggleFavoriteSession: (parent, { id }, { dataSources }, info) =>
    dataSources.sessionsAPI.toggleFavoriteSession(id),

  addNewSession: (parent, { session }, { dataSources }, info) =>
    dataSources.sessionsAPI.addSession(session),
};
