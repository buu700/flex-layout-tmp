/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/flex-layout/core'), require('@angular/flex-layout/extended'), require('@angular/flex-layout/flex'), require('@angular/flex-layout/grid')) :
	typeof define === 'function' && define.amd ? define('@angular/flex-layout', ['exports', '@angular/core', '@angular/common', '@angular/flex-layout/core', '@angular/flex-layout/extended', '@angular/flex-layout/flex', '@angular/flex-layout/grid'], factory) :
	(factory((global.ng = global.ng || {}, global.ng['flex-layout'] = {}),global.ng.core,global.ng.common,global.ng.flexLayout.core,global.ng.flexLayout.extended,global.ng.flexLayout.flex,global.ng.flexLayout.grid));
}(this, (function (exports,core,common,core$1,extended,flex,grid) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Current version of Angular Flex-Layout.
 */
var /** @type {?} */ VERSION = new core.Version('6.0.0-beta.16');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 *
 */
var FlexLayoutModule = /** @class */ (function () {
    function FlexLayoutModule(serverModuleLoaded, platformId) {
        if (common.isPlatformServer(platformId) && !serverModuleLoaded) {
            console.warn('Warning: Flex Layout loaded on the server without FlexLayoutServerModule');
        }
    }
    /**
     * Initialize the FlexLayoutModule with a set of config options,
     * which sets the corresponding tokens accordingly
     */
    /**
     * Initialize the FlexLayoutModule with a set of config options,
     * which sets the corresponding tokens accordingly
     * @param {?} configOptions
     * @param {?=} breakpoints
     * @return {?}
     */
    FlexLayoutModule.withConfig = /**
     * Initialize the FlexLayoutModule with a set of config options,
     * which sets the corresponding tokens accordingly
     * @param {?} configOptions
     * @param {?=} breakpoints
     * @return {?}
     */
    function (configOptions, breakpoints) {
        var /** @type {?} */ config = Object.assign({}, core$1.DEFAULT_CONFIG);
        var /** @type {?} */ moduleProviders = [];
        for (var /** @type {?} */ key in configOptions) {
            // If the setting is different and not undefined or null, change it
            if (configOptions[key] !== config[key] &&
                (configOptions[key] === false || configOptions[key] === true)) {
                config[key] = configOptions[key];
            }
        }
        if (configOptions.serverLoaded) {
            moduleProviders.push({ provide: core$1.SERVER_TOKEN, useValue: true });
        }
        if (Array.isArray(breakpoints)) {
            moduleProviders.push({ provide: core$1.BREAKPOINT, useValue: breakpoints, multi: true });
        }
        moduleProviders.push({ provide: core$1.LAYOUT_CONFIG, useValue: config });
        return {
            ngModule: FlexLayoutModule,
            providers: moduleProviders
        };
    };
    FlexLayoutModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [flex.FlexModule, extended.ExtendedModule, grid.GridModule],
                    exports: [flex.FlexModule, extended.ExtendedModule, grid.GridModule]
                },] },
    ];
    /** @nocollapse */
    FlexLayoutModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [core$1.SERVER_TOKEN,] },] },
        { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] },] },
    ]; };
    return FlexLayoutModule;
}());

exports.removeStyles = core$1.removeStyles;
exports.BROWSER_PROVIDER = core$1.BROWSER_PROVIDER;
exports.CLASS_NAME = core$1.CLASS_NAME;
exports.CoreModule = core$1.CoreModule;
exports.MediaChange = core$1.MediaChange;
exports.StylesheetMap = core$1.StylesheetMap;
exports.STYLESHEET_MAP_PROVIDER_FACTORY = core$1.STYLESHEET_MAP_PROVIDER_FACTORY;
exports.STYLESHEET_MAP_PROVIDER = core$1.STYLESHEET_MAP_PROVIDER;
exports.DEFAULT_CONFIG = core$1.DEFAULT_CONFIG;
exports.LAYOUT_CONFIG = core$1.LAYOUT_CONFIG;
exports.SERVER_TOKEN = core$1.SERVER_TOKEN;
exports.BREAKPOINT = core$1.BREAKPOINT;
exports.BaseDirective = core$1.BaseDirective;
exports.BaseDirectiveAdapter = core$1.BaseDirectiveAdapter;
exports.BaseFxDirective = core$1.BaseFxDirective;
exports.RESPONSIVE_ALIASES = core$1.RESPONSIVE_ALIASES;
exports.DEFAULT_BREAKPOINTS = core$1.DEFAULT_BREAKPOINTS;
exports.ScreenTypes = core$1.ScreenTypes;
exports.ORIENTATION_BREAKPOINTS = core$1.ORIENTATION_BREAKPOINTS;
exports.BreakPointRegistry = core$1.BreakPointRegistry;
exports.BREAKPOINTS = core$1.BREAKPOINTS;
exports.MatchMedia = core$1.MatchMedia;
exports.MockMatchMedia = core$1.MockMatchMedia;
exports.MockMediaQueryList = core$1.MockMediaQueryList;
exports.MockMatchMediaProvider = core$1.MockMatchMediaProvider;
exports.ServerMediaQueryList = core$1.ServerMediaQueryList;
exports.ServerMatchMedia = core$1.ServerMatchMedia;
exports.MediaMonitor = core$1.MediaMonitor;
exports.MEDIA_MONITOR_PROVIDER_FACTORY = core$1.MEDIA_MONITOR_PROVIDER_FACTORY;
exports.MEDIA_MONITOR_PROVIDER = core$1.MEDIA_MONITOR_PROVIDER;
exports.ObservableMedia = core$1.ObservableMedia;
exports.MediaService = core$1.MediaService;
exports.ObservableMediaProvider = core$1.ObservableMediaProvider;
exports.OBSERVABLE_MEDIA_PROVIDER_FACTORY = core$1.OBSERVABLE_MEDIA_PROVIDER_FACTORY;
exports.OBSERVABLE_MEDIA_PROVIDER = core$1.OBSERVABLE_MEDIA_PROVIDER;
exports.KeyOptions = core$1.KeyOptions;
exports.ResponsiveActivation = core$1.ResponsiveActivation;
exports.StyleUtils = core$1.StyleUtils;
exports.validateBasis = core$1.validateBasis;
exports.ExtendedModule = extended.ExtendedModule;
exports.ClassDirective = extended.ClassDirective;
exports.ImgSrcDirective = extended.ImgSrcDirective;
exports.negativeOf = extended.negativeOf;
exports.ShowHideDirective = extended.ShowHideDirective;
exports.StyleDirective = extended.StyleDirective;
exports.FlexModule = flex.FlexModule;
exports.FlexDirective = flex.FlexDirective;
exports.FlexAlignDirective = flex.FlexAlignDirective;
exports.FlexFillDirective = flex.FlexFillDirective;
exports.FlexOffsetDirective = flex.FlexOffsetDirective;
exports.FlexOrderDirective = flex.FlexOrderDirective;
exports.LayoutDirective = flex.LayoutDirective;
exports.LayoutAlignDirective = flex.LayoutAlignDirective;
exports.LayoutGapDirective = flex.LayoutGapDirective;
exports.ɵb = grid.ɵb;
exports.ɵc = grid.ɵc;
exports.ɵd = grid.ɵd;
exports.ɵe = grid.ɵe;
exports.ɵf = grid.ɵf;
exports.ɵg = grid.ɵg;
exports.ɵh = grid.ɵh;
exports.ɵi = grid.ɵi;
exports.ɵa = grid.ɵa;
exports.ɵj = grid.ɵj;
exports.ɵk = grid.ɵk;
exports.GridModule = grid.GridModule;
exports.VERSION = VERSION;
exports.FlexLayoutModule = FlexLayoutModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=flex-layout.umd.js.map
