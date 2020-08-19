const config = require('./../config');
const logger = require('./logger');
const jwt = require('jsonwebtoken');

const requestLogger = (req, res, next) => {
	logger.silly(`${req.method} ${req.path} ${JSON.stringify(req.body)}`);
	next();
};


const errorHandler = (err, req, res) => {
	if (err.name === 'JsonWebTokenError') return res.status(401).json({ error: 'Invalid JWT'});
	
	// Add errors here while we find them
	logger.error(`${req.method} ${req.path} - ${JSON.stringify(req.body)}`, err);
	res.status(500).json({ error: err.message, errorname: err.name });
};

module.exports = {
	requestLogger,
	checkAuthToken,
	errorHandler,
};
