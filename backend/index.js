const config = require('./config');
const logger = require('./util/logger');
const express = require('express');
const app = express();
require('express-async-errors');
const { requestLogger, errorHandler } = require('./util/middleware');

const cors = require('cors');

require('./config/database');

process.on('unhandledRejection', e => {
	logger.error(e);
	process.exit(1);
});

app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.use(express.static('build'));

app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users', require('./routes/api/users'));

// Add 404 route here

app.use(errorHandler);

app.listen(config.PORT, () => {
	logger.info(`Server started on http://localhost:${config.PORT}`);
});
