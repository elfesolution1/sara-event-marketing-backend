'use strict';

/**
 * products-and-movie service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::products-and-movie.products-and-movie');
