const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'laundry'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/laundry-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'laundry'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/laundry-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'laundry'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/laundry-production'
  }
};

module.exports = config[env];
