/*
 * notion-enhancer core: api
 * (c) 2021 dragonwocky <thedragonring.bod@gmail.com> (https://dragonwocky.me/)
 * (https://notion-enhancer.github.io/) under the MIT license
 */

'use strict';

/**
 * environment-specific methods and constants
 * @module notion-enhancer/api/env
 */

/**
 * the environment/platform name code is currently being executed in
 * @constant
 * @type {string}
 */
export const name = window.__enhancerElectronApi.platform;

/**
 * the current version of the enhancer
 * @constant
 * @type {string}
 */
export const version = window.__enhancerElectronApi.version;

/**
 * open the enhancer's menu
 * @type {function}
 */
export const focusMenu = () =>
  window.__enhancerElectronApi.sendMessage({ action: 'focusMenu' });

/**
 * focus an active notion tab
 * @type {function}
 */
export const focusNotion = () =>
  window.__enhancerElectronApi.sendMessage({ action: 'focusNotion' });

/**
 * reload all notion and enhancer menu tabs to apply changes
 * @type {function}
 */
export const reload = () => window.__enhancerElectronApi.sendMessage({ action: 'reload' });
