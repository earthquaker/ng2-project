/*
 * Providers provided by Angular
 */
var ngCore = require('angular2/core');
var browser = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
/*
 * App Environment Providers
 * providers that only live in certain environment
 */
var ENV_PROVIDERS = [];
if ('production' === process.env.ENV) {
    ngCore.enableProdMode();
    ENV_PROVIDERS.push(browser.ELEMENT_PROBE_PROVIDERS_PROD_MODE);
}
else {
    ENV_PROVIDERS.push(browser.ELEMENT_PROBE_PROVIDERS);
}
/*
 * App Component
 * our top level component that holds all of our components
 */
var app_1 = require('./app/app');
/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
function main() {
    return browser.bootstrap(app_1.App, ENV_PROVIDERS.concat(http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, [
        ngCore.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
    ]))
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
/*
 * Vendors
 * For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
 * Also see custom_typings.d.ts as you also need to do `typings install x` where `x` is your module
 */
/*
 * Hot Module Reload
 * experimental version by @gdi2290
 */
function bootstrapDomReady() {
    // bootstrap after document is ready
    return document.addEventListener('DOMContentLoaded', main);
}
if ('development' === process.env.ENV) {
    // activate hot module reload
    if (process.env.HMR) {
        if (document.readyState === 'complete') {
            main();
        }
        else {
            bootstrapDomReady();
        }
        module.hot.accept();
    }
    else {
        bootstrapDomReady();
    }
}
else {
    bootstrapDomReady();
}
//# sourceMappingURL=main.js.map