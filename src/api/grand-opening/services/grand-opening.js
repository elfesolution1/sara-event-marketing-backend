'use strict';

/**
 * grand-opening service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::grand-opening.grand-opening');
