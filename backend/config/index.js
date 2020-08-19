require('dotenv').config();
const logger = require('./../util/logger');
const crypto = require('crypto');

if (!process.env.DB_URI) logger.error('DATABASE_URI was not found!');
if (!process.env.JWT_SECRET) logger.error(`JWT_SECRET was not found! Generate 64 random bytes such as ${crypto.randomBytes(64).toString('hex')}`);

const config = {
	PORT: process.env.PORT || 3001,
	DB_URI: process.env.DB_URI,
	JWT_SECRET: process.env.JWT_SECRET,
	LOGGER_LEVEL: process.env.LOGGER_LEVEL || 'info'
};

logger.silly({ config });

module.exports = config;
