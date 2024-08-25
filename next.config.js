const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "harjobanpreet15",
        mongodb_password: "ckoQ2CKIA7PgnMOt",
        mongodb_database: "messages-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "harjobanpreet15",
      mongodb_password: "ckoQ2CKIA7PgnMOt",
      mongodb_database: "messages",
    },
  };
};
