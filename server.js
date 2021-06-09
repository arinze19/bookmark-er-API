const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const config = require('./config');
const Routes = require('./routes');

const bootstrapApp = async () => {
  await mongoose.connect(config.database.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  app.use(morgan('dev'));
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api/v1/', Routes.route(router));

  await app.listen(config.port);
};

bootstrapApp().then(() =>
  console.log(`app is running on post: ${config.port}`)
);
