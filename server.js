const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const config = require('./config');
const Routes = require('./routes');
const { handleError } = require('./helpers/ErrorHelper');

const bootstrapApp = async () => {
  await mongoose.connect(config.database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  app.use(morgan('dev'));
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // handle routing
  app.use('/api/v1/', Routes.route(router));

  // handle general errors
  app.use((err, req, res, next) => {
    handleError(err, res);
    next();
  });
 
  await app.listen(config.port);
};

bootstrapApp().then(() =>
  console.log(`app is running on post: ${config.port}`)
);
