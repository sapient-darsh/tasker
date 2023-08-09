'use strict';

/**
 * daily-task service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::daily-task.daily-task');
