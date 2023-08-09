'use strict';

/**
 * user-s service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-s.user-s');
