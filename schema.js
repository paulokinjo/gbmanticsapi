const { gql } = require('apollo-server');
module.exports = gql`
  type Query {
    sessions(
      id: ID
      title: String
      description: String
      startsAt: String
      endsAt: String
      room: Room
      day: String
      format: String
      track: String
      level: String
    ): [Session]
    sessionById(id: ID): Session
    speakers(id: ID, bio: String, name: String): [Speaker]
    speakerById(id: ID): Speaker
  }

  type Session {
    id: ID!
    title: String
    description: String
    startsAt: String
    endsAt: String
    room: Room
    day: String
    format: String
    favorite: Boolean
    track: String
    level: String
    speakers: [Speaker]
  }

  type Speaker {
    id: ID!
    bio: String
    name: String
    sessions: [Session]
  }

  type Mutation {
    toggleFavoriteSession(id: ID): Session
    addNewSession(session: SessionInput): Session
  }

  input SessionInput {
    title: String
    description: String
    startsAt: String
    endsAt: String
    room: Room
    day: String
    format: String
    favorite: Boolean
    track: String
    level: String
  }

  enum Room {
    EUROPA
    SOL
    SATURN
  }
`;
