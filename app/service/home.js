'use strict';

const Service = require('egg').Service;

// app/service/user.js
class HomeService extends Service {
  async hello() {
    return 'Hello yveltal!';
  }
}

module.exports = HomeService;
