'use strict';

/**
 * launching router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::launching.launching');
