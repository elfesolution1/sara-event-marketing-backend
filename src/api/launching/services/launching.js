'use strict';

/**
 * launching service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::launching.launching');
