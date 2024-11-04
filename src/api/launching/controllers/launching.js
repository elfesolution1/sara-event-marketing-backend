'use strict';

/**
 * launching controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::launching.launching');
