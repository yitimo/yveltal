/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_202010092025';

  // add your middleware config here
  config.middleware = [ ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    security: {
      csrf: {
        enable: false,
      },
      domainWhiteList: [ '127.0.0.1:4000', '0.0.0.0:4000', 'localhost:4000', 'blog.yitimo.com' ],
    },
    multipart: {
      mode: 'file',
      fileExtensions: [
        '.pdf',
      ],
    },
    cors: {
      package: 'egg-cors',
      origin: '*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    },
    // mysql: {
    //   client: {
    //     host: '148.70.171.15',
    //     port: '13306',
    //     user: 'meal-distribution',
    //     password: 'meal-distribution-123',
    //     database: 'meal_distribution',
    //   },
    // },
  };

  return {
    ...config,
    ...userConfig,
  };
};
