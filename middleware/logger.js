const moment = require("moment");

const logger = (req, res, next) => {
  console.log(`${req.protocol}`);
  console.log(`${moment.format()}`);
  next();
};

module.exports = logger;
