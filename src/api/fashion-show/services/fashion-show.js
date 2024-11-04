'use strict';

/**
 * fashion-show service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fashion-show.fashion-show');
