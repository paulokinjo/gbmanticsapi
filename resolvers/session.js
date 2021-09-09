const _ = require('lodash');
module.exports = {
  speakers: (session, args, { dataSources }) => {
    const speakers = dataSources.speakersAPI.getSpeakers();
    return speakers.filter(
      (speaker) => _.filter(session.speakers, { id: speaker.id }).length > 0,
    );
  },
};
