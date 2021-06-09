const dotenv = require('dotenv');

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3001;
const isProduction = env === 'production';

if (!isProduction) {
  dotenv.config({ silent: true });
}

const config = {
  database: {
    url: process.env.MONGO_URL
  },
  environment: env,
  secret: process.env.SECRET,
  port
};

module.exports = config;
