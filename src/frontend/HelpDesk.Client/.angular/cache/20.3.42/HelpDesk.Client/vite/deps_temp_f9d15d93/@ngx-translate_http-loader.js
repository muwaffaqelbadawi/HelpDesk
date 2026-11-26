import {
  HttpBackend,
  HttpClient
} from "./chunk-C3HZJTES.js";
import {
  TranslateLoader,
  mergeDeep
} from "./chunk-ZW3ANBSO.js";
import "./chunk-ZBPAMAWO.js";
import "./chunk-VBEFACLT.js";
import {
  Injectable,
  InjectionToken,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-24SGBLIH.js";
import {
  catchError,
  defer,
  forkJoin,
  map,
  of,
  throwError
} from "./chunk-GEBJETWL.js";
import {
  __spreadValues
} from "./chunk-R2QGWZ7S.js";

// node_modules/@ngx-translate/http-loader/fesm2022/ngx-translate-http-loader.mjs
var DOT_SEGMENT = /^\.{1,2}$/;
var TRANSLATE_HTTP_LOADER_CONFIG = new InjectionToken("TRANSLATE_HTTP_LOADER_CONFIG");
var TranslateHttpLoader = class TranslateHttpLoader2 {
  http;
  config;
  constructor() {
    this.config = __spreadValues({
      resources: [],
      enforceLoading: false,
      useHttpBackend: false
    }, inject(TRANSLATE_HTTP_LOADER_CONFIG));
    this.http = this.config.useHttpBackend ? new HttpClient(inject(HttpBackend)) : inject(HttpClient);
  }
  getTranslation(lang) {
    const cacheBuster = this.config.enforceLoading ? `?enforceLoading=${Date.now()}` : "";
    const requests = this.config.resources.map((resource) => {
      let url;
      return defer(() => {
        const langSegment = encodeURIComponent(lang);
        url = `${typeof resource === "string" ? `${resource}${langSegment}.json` : `${resource.prefix}${langSegment}${resource.suffix ?? ".json"}`}${cacheBuster}`;
        return DOT_SEGMENT.test(lang) ? throwError(() => new Error(`"${lang}" is a path segment, not a language`)) : this.http.get(url);
      }).pipe(catchError((error) => {
        this.reportError({
          lang,
          resource,
          url,
          error
        });
        return this.config.failOnError ? throwError(() => error) : of({});
      }));
    });
    if (requests.length === 0) return of({});
    return forkJoin(requests).pipe(map((response) => response.reduce((acc, curr) => this.config.flatten ? __spreadValues(__spreadValues({}, acc), flattenTranslations(curr ?? {})) : mergeDeep(acc, curr), {})));
  }
  reportError(failure) {
    if (this.config.onLoadError) try {
      this.config.onLoadError(failure);
    } catch (error) {
      console.warn("@ngx-translate/http-loader: onLoadError callback failed:", error);
    }
    else if (!this.config.failOnError) console.warn(`@ngx-translate/http-loader: error loading translation for ${failure.lang}:`, failure.error);
  }
  static ɵfac = function TranslateHttpLoader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TranslateHttpLoader2)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: TranslateHttpLoader2,
    factory: TranslateHttpLoader2.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateHttpLoader, [{
    type: Injectable
  }], () => [], null);
})();
function flattenTranslations(translations) {
  return Object.fromEntries(Object.entries(translations).flatMap(([key, value]) => value !== null && typeof value === "object" && !Array.isArray(value) && Object.keys(value).length ? Object.entries(flattenTranslations(value)).map(([child, translation]) => [`${key}.${child}`, translation]) : [[key, value]]));
}
function provideTranslateHttpLoader(config = {}) {
  if ("resources" in config && config.resources) return provideTranslateMultiHttpLoader(config);
  const singleConfig = config;
  return provideTranslateMultiHttpLoader({
    enforceLoading: singleConfig.enforceLoading ?? false,
    useHttpBackend: singleConfig.useHttpBackend ?? false,
    failOnError: singleConfig.failOnError ?? false,
    flatten: singleConfig.flatten ?? false,
    onLoadError: singleConfig.onLoadError,
    resources: [{
      prefix: singleConfig.prefix ?? "/assets/i18n/",
      suffix: singleConfig.suffix ?? ".json"
    }]
  });
}
function provideTranslateMultiHttpLoader(config = {}) {
  return [{
    provide: TRANSLATE_HTTP_LOADER_CONFIG,
    useValue: __spreadValues({
      resources: ["/assets/i18n/"]
    }, config)
  }, {
    provide: TranslateLoader,
    useClass: TranslateHttpLoader
  }];
}
export {
  TRANSLATE_HTTP_LOADER_CONFIG,
  TranslateHttpLoader,
  provideTranslateHttpLoader,
  provideTranslateMultiHttpLoader
};
//# sourceMappingURL=@ngx-translate_http-loader.js.map
