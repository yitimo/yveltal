'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, service } = this;
    ctx.body = await service.home.hello();
  }
}

module.exports = HomeController;
