'use strict';

/**
 * camp-config service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::camp-config.camp-config');
