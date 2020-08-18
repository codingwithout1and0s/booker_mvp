const logger = require('./logger');

const requestLogger = (req, res, next) => {
	logger.silly(`${req.method} ${req.path} ${JSON.stringify(req.body)}`);
	next();
};

module.exports = {
	requestLogger,
};
