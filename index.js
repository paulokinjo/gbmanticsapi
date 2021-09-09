const { ApolloServer } = require('apollo-server');
const SessionAPI = require('./datasources/sessions');
const SpeakerAPI = require('./datasources/speakers');

const config = {
  typeDefs: require('./schema.js'),
  resolvers: require('./resolvers.js'),
  dataSources: () => ({
    sessionsAPI: new SessionAPI(),
    speakersAPI: new SpeakerAPI(),
  }),
};
const server = new ApolloServer(config);

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => console.log(`graphQL running at ${url}`));
