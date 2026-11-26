import {
  NgTemplateOutlet
} from "./chunk-ZBPAMAWO.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  DestroyRef,
  Directive,
  ElementRef,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  Pipe,
  TemplateRef,
  ViewContainerRef,
  assertInInjectionContext,
  computed,
  contentChildren,
  effect,
  forwardRef,
  inject,
  input,
  setClassMetadata,
  signal,
  untracked,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuerySignal,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefinePipe,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵgetInheritedFactory,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-24SGBLIH.js";
import {
  EMPTY,
  Observable,
  ReplaySubject,
  Subject,
  catchError,
  concat,
  concatMap,
  defaultIfEmpty,
  defer,
  filter,
  finalize,
  firstValueFrom,
  forkJoin,
  isObservable,
  map,
  merge,
  of,
  retry,
  share,
  switchMap,
  take,
  takeUntil,
  tap,
  throwError,
  timer
} from "./chunk-GEBJETWL.js";
import {
  __objRest,
  __restKey,
  __spreadProps,
  __spreadValues
} from "./chunk-R2QGWZ7S.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    ngDevMode && assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((subscriber) => {
    if (destroyRef.destroyed) {
      subscriber.next();
      return;
    }
    const unregisterFn = destroyRef.onDestroy(subscriber.next.bind(subscriber));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}

// node_modules/@ngx-translate/core/fesm2022/ngx-translate-core.mjs
var _c0 = ["translateSlots", ""];
var _forTrack0 = ($index, $item) => $item.id;
function TranslateSlotsComponent_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 0);
  }
  if (rf & 2) {
    const part_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("ngTemplateOutlet", part_r1.template);
  }
}
function TranslateSlotsComponent_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const part_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(part_r1.text);
  }
}
function TranslateSlotsComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, TranslateSlotsComponent_For_1_Conditional_0_Template, 1, 1, "ng-container", 0)(1, TranslateSlotsComponent_For_1_Conditional_1_Template, 2, 1, "ng-container");
  }
  if (rf & 2) {
    const part_r1 = ctx.$implicit;
    ɵɵconditional(part_r1.template ? 0 : 1);
  }
}
function _(key) {
  return key;
}
function omit(map2, key) {
  const next = {};
  for (const k of Object.keys(map2)) if (k !== key) next[k] = map2[k];
  return next;
}
var LoadingTranslationsRegistry = class {
  state = signal({}, ...ngDevMode ? [{
    debugName: "state"
  }] : (
    /* istanbul ignore next */
    []
  ));
  hasAny = computed(() => Object.keys(this.state()).length > 0, ...ngDevMode ? [{
    debugName: "hasAny"
  }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading(lang) {
    return this.state()[lang] !== void 0;
  }
  get(lang) {
    return this.state()[lang];
  }
  set(lang, obs) {
    this.state.update((m) => __spreadProps(__spreadValues({}, m), {
      [lang]: obs
    }));
  }
  clear(lang) {
    this.state.update((m) => omit(m, lang));
  }
  clearIfOwner(lang, token) {
    this.state.update((m) => m[lang] === token ? omit(m, lang) : m);
  }
};
var MissingTranslationHandler = class {
};
var DefaultMissingTranslationHandler = class DefaultMissingTranslationHandler2 {
  handle(params) {
    return params.key;
  }
  static ɵfac = function DefaultMissingTranslationHandler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || DefaultMissingTranslationHandler2)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: DefaultMissingTranslationHandler2,
    factory: DefaultMissingTranslationHandler2.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultMissingTranslationHandler, [{
    type: Injectable
  }], null, null);
})();
var TranslateCompiler = class {
};
var TranslateNoOpCompiler = class TranslateNoOpCompiler2 extends TranslateCompiler {
  compile(value, lang) {
    return value;
  }
  compileTranslations(translations, lang) {
    return translations;
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTranslateNoOpCompiler_BaseFactory;
    return function TranslateNoOpCompiler_Factory(__ngFactoryType__) {
      return (ɵTranslateNoOpCompiler_BaseFactory || (ɵTranslateNoOpCompiler_BaseFactory = ɵɵgetInheritedFactory(TranslateNoOpCompiler2)))(__ngFactoryType__ || TranslateNoOpCompiler2);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: TranslateNoOpCompiler2,
    factory: TranslateNoOpCompiler2.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateNoOpCompiler, [{
    type: Injectable
  }], null, null);
})();
var TranslateLoader = class {
};
var TranslateNoOpLoader = class TranslateNoOpLoader2 extends TranslateLoader {
  getTranslation(lang) {
    return of({});
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTranslateNoOpLoader_BaseFactory;
    return function TranslateNoOpLoader_Factory(__ngFactoryType__) {
      return (ɵTranslateNoOpLoader_BaseFactory || (ɵTranslateNoOpLoader_BaseFactory = ɵɵgetInheritedFactory(TranslateNoOpLoader2)))(__ngFactoryType__ || TranslateNoOpLoader2);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: TranslateNoOpLoader2,
    factory: TranslateNoOpLoader2.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateNoOpLoader, [{
    type: Injectable
  }], null, null);
})();
function equals(o1, o2) {
  if (o1 === o2) return true;
  if (o1 === null || o2 === null) return false;
  if (o1 !== o1 && o2 !== o2) return true;
  if (o1 instanceof Date || o2 instanceof Date) return o1 instanceof Date && o2 instanceof Date && equals(o1.getTime(), o2.getTime());
  const t1 = typeof o1, t2 = typeof o2;
  let length;
  if (t1 == t2 && t1 == "object") {
    if (Array.isArray(o1)) {
      if (!Array.isArray(o2)) return false;
      if ((length = o1.length) == o2.length) {
        for (let key = 0; key < length; key++) if (!equals(o1[key], o2[key])) return false;
        return true;
      }
    } else {
      if (Array.isArray(o2)) return false;
      if (isDict(o1) && isDict(o2)) {
        const keySet = /* @__PURE__ */ Object.create(null);
        for (const key in o1) {
          if (!equals(o1[key], o2[key])) return false;
          keySet[key] = true;
        }
        for (const key in o2) if (!(key in keySet) && typeof o2[key] !== "undefined") return false;
        return true;
      }
    }
  }
  return false;
}
function isDefinedAndNotNull(value) {
  return typeof value !== "undefined" && value !== null;
}
function isDefined(value) {
  return value !== void 0;
}
function isDict(value) {
  return isObject(value) && !isArray(value) && value !== null;
}
function isObject(value) {
  return typeof value === "object" && value !== null;
}
function isArray(value) {
  return Array.isArray(value);
}
function isString(value) {
  return typeof value === "string";
}
function isFunction(value) {
  return typeof value === "function";
}
function cloneDeep(value) {
  if (isArray(value)) return value.map((item) => cloneDeep(item));
  else if (isDict(value)) {
    const cloned = {};
    Object.keys(value).forEach((key) => {
      cloned[key] = cloneDeep(value[key]);
    });
    return cloned;
  } else return value;
}
function mergeDeep(target, source) {
  if (!isObject(target)) return cloneDeep(source);
  const output = cloneDeep(target);
  if (isObject(output) && isObject(source)) Object.keys(source).forEach((key) => {
    if (isDict(source[key])) {
      if (key in target) output[key] = mergeDeep(target[key], source[key]);
      else Object.assign(output, {
        [key]: source[key]
      });
    } else Object.assign(output, {
      [key]: source[key]
    });
  });
  return output;
}
function getValue(target, key) {
  const originalTarget = target;
  const originalKey = key;
  const keys = key.split(".");
  key = "";
  do {
    key += keys.shift();
    const isLastKey = !keys.length;
    if (isDefinedAndNotNull(target)) {
      if (isDict(target) && isDefined(target[key]) && (isDict(target[key]) || isArray(target[key]) || isLastKey)) {
        target = target[key];
        key = "";
        continue;
      }
      if (isArray(target)) {
        if (key === "length" && isLastKey) {
          target = target.length;
          key = "";
          continue;
        }
        if (/^\d+$/.test(key)) {
          const index = parseInt(key, 10);
          if (isDefined(target[index]) && (isDict(target[index]) || isArray(target[index]) || isLastKey)) {
            target = target[index];
            key = "";
            continue;
          }
        }
      }
    }
    if (isLastKey) {
      target = void 0;
      continue;
    }
    key += ".";
  } while (keys.length);
  if (typeof target === "undefined" && isDict(originalTarget) && isDefined(originalTarget[originalKey])) return originalTarget[originalKey];
  return target;
}
function insertValue(target, key, value) {
  return mergeDeep(target, createNestedObject(key, value));
}
function createNestedObject(dotSeparatedKey, value) {
  return dotSeparatedKey.split(".").reduceRight((acc, key) => ({
    [key]: acc
  }), value);
}
var TranslateParser = class {
};
var TranslateDefaultParser = class TranslateDefaultParser2 extends TranslateParser {
  templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
  interpolate(expr, params, context) {
    if (isString(expr)) return this.interpolateString(expr, params, context);
    else if (isFunction(expr)) return this.interpolateFunction(expr, params, context);
  }
  interpolateFunction(fn, params, context) {
    return fn(params, context);
  }
  interpolateString(expr, params, context) {
    if (!params) return expr;
    return expr.replace(this.templateMatcher, (substring, key) => {
      const replacement = this.getInterpolationReplacement(params, key, context);
      return replacement !== void 0 ? replacement : substring;
    });
  }
  getInterpolationReplacement(params, key, context) {
    return this.formatValue(getValue(params, key), context);
  }
  formatValue(value, context) {
    if (isString(value)) return value;
    if (typeof value === "number" || typeof value === "boolean") return value.toString();
    if (value === null) return "null";
    if (isArray(value)) return value.join(", ");
    if (isObject(value)) {
      if (typeof value.toString === "function" && value.toString !== Object.prototype.toString) return value.toString();
      return JSON.stringify(value);
    }
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTranslateDefaultParser_BaseFactory;
    return function TranslateDefaultParser_Factory(__ngFactoryType__) {
      return (ɵTranslateDefaultParser_BaseFactory || (ɵTranslateDefaultParser_BaseFactory = ɵɵgetInheritedFactory(TranslateDefaultParser2)))(__ngFactoryType__ || TranslateDefaultParser2);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: TranslateDefaultParser2,
    factory: TranslateDefaultParser2.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateDefaultParser, [{
    type: Injectable
  }], null, null);
})();
var TranslateStore = class TranslateStore2 {
  _translations = signal({}, ...ngDevMode ? [{
    debugName: "_translations"
  }] : (
    /* istanbul ignore next */
    []
  ));
  translations = this._translations.asReadonly();
  _languages = signal([], ...ngDevMode ? [{
    debugName: "_languages"
  }] : (
    /* istanbul ignore next */
    []
  ));
  languages = this._languages.asReadonly();
  _lastTranslationChange = signal(null, ...ngDevMode ? [{
    debugName: "_lastTranslationChange"
  }] : (
    /* istanbul ignore next */
    []
  ));
  lastTranslationChange = this._lastTranslationChange.asReadonly();
  _translationChange$ = new Subject();
  translationChange$ = this._translationChange$.asObservable();
  constructor() {
    inject(DestroyRef).onDestroy(() => {
      this._translationChange$.complete();
    });
  }
  getTranslations(language) {
    return this.translations()[language];
  }
  setTranslations(language, translations, extend) {
    untracked(() => {
      this._translations.update((current) => __spreadProps(__spreadValues({}, current), {
        [language]: extend && this.hasTranslationFor(language) ? mergeDeep(current[language], translations) : translations
      }));
      this.addLanguages([language]);
      const event = {
        lang: language,
        translations: this.getTranslations(language)
      };
      this._lastTranslationChange.set(event);
      this._translationChange$.next(event);
    });
  }
  getLanguages() {
    return this.languages();
  }
  addLanguages(langs) {
    this._languages.update((current) => Array.from(/* @__PURE__ */ new Set([...current, ...langs])));
  }
  removeLanguages(langs) {
    this._languages.update((current) => current.filter((lang) => !langs.includes(lang)));
  }
  hasTranslationFor(lang) {
    return typeof this.translations()[lang] !== "undefined";
  }
  deleteTranslations(lang) {
    untracked(() => {
      if (!this.hasTranslationFor(lang)) return;
      this._translations.update((current) => {
        const _a = current, {
          [lang]: _2
        } = _a, rest = __objRest(_a, [
          __restKey(lang)
        ]);
        return rest;
      });
      const event = {
        lang,
        translations: {}
      };
      this._lastTranslationChange.set(event);
      this._translationChange$.next(event);
    });
  }
  getTranslationValue(language, key) {
    return getValue(this.getTranslations(language), key);
  }
  static ɵfac = function TranslateStore_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TranslateStore2)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: TranslateStore2,
    factory: TranslateStore2.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateStore, [{
    type: Injectable
  }], () => [], null);
})();
var TRANSLATE_SERVICE_CONFIG = new InjectionToken("TRANSLATE_CONFIG");
var makeObservable = (value) => {
  return isObservable(value) ? value : of(value);
};
var RETRY_DELAY_MS = 100;
var MAX_RETRY_DELAY_MS = 2 ** 31 - 1;
var TranslateService = class TranslateService2 {
  loadingTranslations = new LoadingTranslationsRegistry();
  loadCancellation = /* @__PURE__ */ new Map();
  languageRequestSequence = 0;
  lastFallbackRequest = 0;
  languageRequestIds = /* @__PURE__ */ new WeakMap();
  deletedLanguageRequests = /* @__PURE__ */ new Map();
  lastUseLanguage = null;
  retry;
  currentLoader = inject(TranslateLoader);
  compiler = inject(TranslateCompiler);
  parser = inject(TranslateParser);
  missingTranslationHandler = inject(MissingTranslationHandler);
  store = inject(TranslateStore);
  destroyRef = inject(DestroyRef);
  parent;
  get isRoot() {
    return this.parent === null;
  }
  _onLangChange = new Subject();
  _onFallbackLangChange = new Subject();
  _currentLang = signal(null, ...ngDevMode ? [{
    debugName: "_currentLang"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _fallbackLang = signal(null, ...ngDevMode ? [{
    debugName: "_fallbackLang"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _additionalFallbackLangs = signal([], ...ngDevMode ? [{
    debugName: "_additionalFallbackLangs"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _fallbackLangs = computed(() => {
    const first = this._fallbackLang();
    return first === null ? [] : [first, ...this._additionalFallbackLangs()];
  }, ...ngDevMode ? [{
    debugName: "_fallbackLangs"
  }] : (
    /* istanbul ignore next */
    []
  ));
  _onTranslationRefresh = null;
  _isLoading = computed(() => this.loadingTranslations.hasAny() || (this.parent?.isLoading() ?? false), ...ngDevMode ? [{
    debugName: "_isLoading"
  }] : (
    /* istanbul ignore next */
    []
  ));
  getRoot() {
    let svc = this;
    while (svc.parent) svc = svc.parent;
    return svc;
  }
  getParent() {
    return this.parent;
  }
  getActiveRequestedLang() {
    return this.getRoot().lastUseLanguage;
  }
  hasTranslationInChain(lang) {
    for (let svc = this; svc; svc = svc.parent) if (svc.store.hasTranslationFor(lang)) return true;
    return false;
  }
  chainTranslationChange$() {
    const streams = [];
    for (let svc = this; svc; svc = svc.parent) streams.push(svc.store.translationChange$);
    return streams.length === 1 ? streams[0] : merge(...streams);
  }
  get onTranslationChange() {
    return this.store.translationChange$;
  }
  get onLangChange() {
    if (this.isRoot) return this._onLangChange.asObservable();
    return this.parent ? this.parent.onLangChange : EMPTY;
  }
  get onFallbackLangChange() {
    if (this.isRoot) return this._onFallbackLangChange.asObservable();
    return this.parent ? this.parent.onFallbackLangChange : EMPTY;
  }
  get onTranslationRefresh() {
    if (!this._onTranslationRefresh) {
      const refresh$ = merge(this.onTranslationChange.pipe(filter((event) => event.lang === this.getCurrentLang() || this.getFallbackLangs().includes(event.lang))), this.onLangChange, this.onFallbackLangChange).pipe(map(() => void 0));
      if (this.isRoot) this._onTranslationRefresh = refresh$;
      else this._onTranslationRefresh = this.parent ? merge(refresh$, this.parent.onTranslationRefresh) : refresh$;
    }
    return this._onTranslationRefresh;
  }
  constructor() {
    const config = __spreadValues({
      isRoot: true,
      fallbackLang: null
    }, inject(TRANSLATE_SERVICE_CONFIG, {
      optional: true
    }));
    this.parent = config.isRoot ? null : inject(TranslateService2, {
      optional: true,
      skipSelf: true
    });
    if (typeof config.retry === "object") {
      const {
        count,
        delay,
        shouldRetry
      } = config.retry;
      this.retry = {
        count,
        delay: typeof delay === "function" ? delay.bind(config.retry) : delay,
        shouldRetry: shouldRetry?.bind(config.retry)
      };
    } else this.retry = Math.max(0, config.retry ?? 0);
    const destroyRef = inject(DestroyRef);
    if (this.isRoot) {
      if (config.langs?.length) this.addLangs(config.langs);
      if (config.lang) this.use(config.lang);
      if (config.fallbackLangs !== void 0) this.setFallbackLangs(config.fallbackLangs);
      else if (config.fallbackLang) this.setFallbackLang(config.fallbackLang);
    } else {
      const currentLang = this.getCurrentLang();
      if (currentLang) this.loadOrExtendLanguage(currentLang)?.pipe(takeUntilDestroyed(destroyRef)).subscribe({
        error: (err) => {
          console.warn(`@ngx-translate/core: child failed to load "${currentLang}". Cause:`, err);
        }
      });
      for (const fallbackLang of this.getFallbackLangs()) if (fallbackLang && fallbackLang !== currentLang) this.loadOrExtendLanguage(fallbackLang)?.pipe(takeUntilDestroyed(destroyRef)).subscribe({
        error: (err) => {
          console.warn(`@ngx-translate/core: child failed to load "${fallbackLang}". Cause:`, err);
        }
      });
    }
    this.onLangChange.pipe(takeUntilDestroyed(destroyRef)).subscribe((event) => {
      if (!this.isRoot && this.shouldLoadLanguage(event)) this.loadOrExtendLanguage(event.lang)?.pipe(takeUntilDestroyed(destroyRef)).subscribe({
        error: (err) => {
          console.warn(`@ngx-translate/core: child failed to load "${event.lang}". Cause:`, err);
        }
      });
    });
    this.onFallbackLangChange.pipe(takeUntilDestroyed(destroyRef)).subscribe((event) => {
      if (this.isRoot) return;
      for (const lang of event.langs ?? [event.lang]) if (this.shouldLoadLanguage(event, lang)) this.loadOrExtendLanguage(lang)?.pipe(takeUntilDestroyed(destroyRef)).subscribe({
        error: (err) => {
          console.warn(`@ngx-translate/core: child failed to load "${lang}". Cause:`, err);
        }
      });
    });
    destroyRef.onDestroy(() => {
      this._onLangChange.complete();
      this._onFallbackLangChange.complete();
    });
  }
  shouldLoadLanguage(event, lang = event.lang) {
    const deletedAt = this.deletedLanguageRequests.get(lang);
    const requestId = this.getRoot().languageRequestIds.get(event);
    return deletedAt === void 0 || requestId === void 0 || requestId > deletedAt;
  }
  setFallbackLang(lang) {
    if (!this.isRoot) return this.parent.setFallbackLang(lang);
    return this.setFallbackLangs([lang]).pipe(map((translations) => translations[0]));
  }
  setFallbackLangs(languages) {
    if (!this.isRoot) return this.parent.setFallbackLangs(languages);
    return untracked(() => {
      const langs = [...new Set(languages)];
      const requestId = ++this.languageRequestSequence;
      this.lastFallbackRequest = requestId;
      if (this._fallbackLang() === null) this.setFallbackLanguageState(langs);
      const pending = langs.length ? forkJoin(langs.map((lang) => (this.loadOrExtendLanguage(lang) ?? of(this.store.getTranslations(lang))).pipe(take(1)))) : of([]);
      pending.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
        next: (translations) => {
          if (this.lastFallbackRequest !== requestId || langs.some((lang) => (this.deletedLanguageRequests.get(lang) ?? -1) >= requestId)) return;
          this.setFallbackLanguageState(langs);
          const event = __spreadValues({
            lang: langs[0] ?? "",
            translations: translations[0] ?? {}
          }, langs.length !== 1 && {
            langs: this.getFallbackLangs()
          });
          this.languageRequestIds.set(event, requestId);
          this._onFallbackLangChange.next(event);
        },
        error: (err) => {
          console.warn(`@ngx-translate/core: failed to load fallback "${langs.join(", ")}". Cause:`, err);
        }
      });
      return pending;
    });
  }
  setFallbackLanguageState(langs) {
    this._additionalFallbackLangs.set(langs.slice(1));
    this._fallbackLang.set(langs[0] ?? null);
  }
  get isLoading() {
    return this._isLoading;
  }
  use(lang) {
    if (!this.isRoot) return this.parent.use(lang);
    return untracked(() => {
      const requestId = ++this.languageRequestSequence;
      const prevLang = this._currentLang();
      const prevLastUseLang = this.lastUseLanguage;
      this.lastUseLanguage = lang;
      if (!this._currentLang()) this._currentLang.set(lang);
      const pending = this.loadOrExtendLanguage(lang);
      if (!isObservable(pending)) {
        this.changeLang(lang, requestId);
        return of(this.store.getTranslations(lang));
      }
      pending.pipe(take(1)).subscribe({
        next: () => {
          this.changeLang(lang, requestId);
        },
        error: (err) => {
          if (this.lastUseLanguage === lang && (typeof this.retry === "number" || !this.store.hasTranslationFor(lang))) {
            this._currentLang.set(prevLang);
            this.lastUseLanguage = prevLastUseLang;
          }
          console.warn(`@ngx-translate/core: failed to load "${lang}". currentLang was NOT changed; remains "${prevLang ?? "null"}". Cause:`, err);
        }
      });
      return pending;
    });
  }
  loadOrExtendLanguage(lang) {
    if (!this.store.hasTranslationFor(lang)) return this.loadAndCompileTranslations(lang);
    return of(this.store.getTranslations(lang));
  }
  getTranslations(language) {
    return this.store.getTranslations(language);
  }
  changeLang(lang, requestId) {
    if (lang !== this.lastUseLanguage) return;
    this._currentLang.set(lang);
    const event = {
      lang,
      translations: this.store.getTranslations(lang)
    };
    if (requestId !== void 0) this.languageRequestIds.set(event, requestId);
    this._onLangChange.next(event);
  }
  getCurrentLang() {
    return this.isRoot ? this._currentLang() : this.parent?.getCurrentLang() ?? null;
  }
  loadAndCompileTranslations(lang) {
    const existing = this.loadingTranslations.get(lang);
    if (existing) return existing;
    const retryConfig = typeof this.retry === "number" ? {
      count: this.retry
    } : this.retry;
    let cancellation = this.loadCancellation.get(lang);
    if (!cancellation) {
      cancellation = new ReplaySubject(1);
      this.loadCancellation.set(lang, cancellation);
    }
    const source$ = defer(() => {
      const source = this.currentLoader.getTranslation(lang);
      return retryConfig.count > 0 ? source.pipe(retry({
        count: retryConfig.count,
        delay: (error, retryAttempt) => {
          if (retryConfig.shouldRetry && !retryConfig.shouldRetry(error)) return throwError(() => error);
          const delay = retryConfig.delay ?? RETRY_DELAY_MS;
          const delayMs = typeof delay === "function" ? delay(error, retryAttempt) : delay;
          if (!Number.isFinite(delayMs) || delayMs < 0 || delayMs > MAX_RETRY_DELAY_MS) throw new RangeError("@ngx-translate/core: retry delay must be a finite number between 0 and 2147483647 milliseconds.");
          return timer(delayMs);
        }
      })) : source;
    });
    let completed = false;
    const shared$ = source$.pipe(map((res) => this.compiler.compileTranslations(res, lang)), filter(() => this.loadCancellation.get(lang) === cancellation), tap({
      next: (compiled) => {
        this.store.setTranslations(lang, compiled, false);
        this.loadingTranslations.clearIfOwner(lang, translations$);
      },
      error: () => {
        if (typeof this.retry !== "number") this.loadingTranslations.clearIfOwner(lang, translations$);
      }
    }), catchError((error) => this.loadCancellation.get(lang) === cancellation ? throwError(() => error) : EMPTY), tap({
      complete: () => {
        completed = this.loadCancellation.get(lang) === cancellation;
      }
    }), takeUntil(cancellation), finalize(() => this.loadingTranslations.clearIfOwner(lang, translations$)), share({
      connector: () => new ReplaySubject(1),
      resetOnError: typeof this.retry === "number",
      resetOnComplete: false,
      resetOnRefCountZero: true
    }));
    const translations$ = defer(() => completed || this.loadCancellation.get(lang) === cancellation ? shared$ : EMPTY);
    this.loadingTranslations.set(lang, translations$);
    translations$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      error: () => {
      }
    });
    return translations$;
  }
  setTranslation(lang, translations, shouldMerge = false) {
    const interpolatableTranslations = this.compiler.compileTranslations(translations, lang);
    this.store.setTranslations(lang, interpolatableTranslations, shouldMerge);
  }
  setCompiledTranslation(lang, translations, shouldMerge = false) {
    this.store.setTranslations(lang, translations, shouldMerge);
  }
  getLangs() {
    return this.store.getLanguages();
  }
  addLangs(languages) {
    this.store.addLanguages(languages);
  }
  getParsedResultForKey(key, interpolateParams, lang) {
    let lookup;
    const translation = this.getTextToInterpolate(key, lang, (result) => {
      lookup = result;
    });
    if (isDefinedAndNotNull(translation)) {
      const context = lookup?.translation === translation ? lookup.context : {
        key
      };
      return this.runInterpolation(translation, interpolateParams, context);
    }
    const res = this.getMissingTranslationHandler().handle(__spreadValues({
      key,
      translateService: this
    }, interpolateParams !== void 0 && {
      interpolateParams
    }));
    return res !== void 0 ? res : key;
  }
  getMissingTranslationHandler() {
    return this.missingTranslationHandler;
  }
  getFallbackLang() {
    return this.isRoot ? this._fallbackLang() : this.parent?.getFallbackLang() ?? null;
  }
  getFallbackLangs() {
    return this.fallbackLangs();
  }
  getTextToInterpolate(key, lang, onLookup) {
    if (lang) {
      const res2 = this.store.getTranslationValue(lang, key);
      if (res2 !== void 0) {
        onLookup?.({
          translation: res2,
          context: {
            key,
            lang
          }
        });
        return res2;
      }
      return this.parent?.getTextToInterpolate(key, lang, onLookup);
    }
    const currentLang = this.getCurrentLang();
    let res;
    let resLang;
    if (currentLang) {
      res = this.store.getTranslationValue(currentLang, key);
      resLang = currentLang;
    }
    for (const fallbackLang of this.getFallbackLangs()) {
      if (isDefinedAndNotNull(res)) break;
      if (fallbackLang !== currentLang) {
        res = this.store.getTranslationValue(fallbackLang, key);
        resLang = fallbackLang;
      }
    }
    if (res !== void 0) {
      onLookup?.({
        translation: res,
        context: resLang === void 0 ? {
          key
        } : {
          key,
          lang: resLang
        }
      });
      return res;
    }
    return this.parent?.getTextToInterpolate(key, lang, onLookup);
  }
  runInterpolation(translations, interpolateParams, context) {
    if (!isDefinedAndNotNull(translations)) return;
    if (isArray(translations)) return this.runInterpolationOnArray(translations, interpolateParams, context);
    if (isDict(translations)) return this.runInterpolationOnDict(translations, interpolateParams, context);
    return this.parser.interpolate(translations, interpolateParams, context);
  }
  runInterpolationOnArray(translations, interpolateParams, context) {
    return translations.map((translation) => this.runInterpolation(translation, interpolateParams, context));
  }
  runInterpolationOnDict(translations, interpolateParams, context) {
    const result = {};
    for (const key in translations) {
      const res = this.runInterpolation(translations[key], interpolateParams, context);
      if (res !== void 0) result[key] = res;
    }
    return result;
  }
  getParsedResult(key, interpolateParams, lang) {
    return key instanceof Array ? this.getParsedResultForArray(key, interpolateParams, lang) : this.getParsedResultForKey(key, interpolateParams, lang);
  }
  getParsedResultForArray(key, interpolateParams, lang) {
    const result = {};
    let observables = false;
    for (const k of key) {
      result[k] = this.getParsedResultForKey(k, interpolateParams, lang);
      observables = observables || isObservable(result[k]);
    }
    if (!observables) return result;
    const sources = key.map((k) => makeObservable(result[k]));
    return forkJoin(sources).pipe(map((arr) => {
      const obj = {};
      arr.forEach((value, index) => {
        obj[key[index]] = value;
      });
      return obj;
    }));
  }
  get(key, interpolateParams, lang) {
    if (!isDefinedAndNotNull(key) || !key.length) return of("");
    const effectiveLang = lang ?? this.getActiveRequestedLang() ?? this.getCurrentLang();
    const observed = /* @__PURE__ */ new Set();
    const waitForTranslations = () => {
      const languages = /* @__PURE__ */ new Set([...effectiveLang ? [effectiveLang] : [], ...lang ? [] : this.getFallbackLangs()]);
      const pending = [];
      for (let service = this; service; service = service.parent) for (const language of languages) {
        const load = service.loadingTranslations.get(language);
        if (load && !observed.has(load)) {
          observed.add(load);
          pending.push(load.pipe(take(1), defaultIfEmpty(void 0)));
        }
      }
      return pending.length ? forkJoin(pending).pipe(concatMap(waitForTranslations)) : makeObservable(this.getParsedResult(key, interpolateParams, lang));
    };
    return waitForTranslations();
  }
  getAsync(key, interpolateParams, lang) {
    return firstValueFrom(this.get(key, interpolateParams, lang));
  }
  getStreamOnTranslationChange(key, interpolateParams, lang) {
    if (!isDefinedAndNotNull(key) || !key.length) throw new Error(`Parameter "key" is required and cannot be empty`);
    return concat(defer(() => this.get(key, interpolateParams, lang)), this.onTranslationChange.pipe(switchMap(() => {
      const res = this.getParsedResult(key, interpolateParams, lang);
      return makeObservable(res);
    })));
  }
  stream(key, interpolateParams, lang) {
    if (!isDefinedAndNotNull(key) || !key.length) throw new Error(`Parameter "key" required`);
    const reemit$ = lang ? merge(this.onLangChange, this.chainTranslationChange$().pipe(filter((e) => e.lang === lang))) : this.onLangChange;
    return concat(defer(() => this.get(key, interpolateParams, lang)), reemit$.pipe(switchMap(() => {
      const res = this.getParsedResult(key, interpolateParams, lang);
      return makeObservable(res);
    })));
  }
  instant(key, interpolateParams, lang) {
    if (!isDefinedAndNotNull(key) || key.length === 0) return "";
    if (lang && !this.hasTranslationInChain(lang)) this.warnUnloadedInstantLang(lang);
    const result = this.getParsedResult(key, interpolateParams, lang);
    return isObservable(result) ? this.keyToObject(key) : result;
  }
  warnedUnloadedInstantLangs = /* @__PURE__ */ new Set();
  warnUnloadedInstantLang(lang) {
    const root = this.getRoot();
    if (root !== this) {
      root.warnUnloadedInstantLang(lang);
      return;
    }
    if (this.warnedUnloadedInstantLangs.has(lang)) return;
    untracked(() => {
      this.warnedUnloadedInstantLangs.add(lang);
      console.warn(`@ngx-translate/core: instant() called with lang="${lang}" but no translations are loaded for that language. Returning the key as fallback. Load with use("${lang}") or setTranslation("${lang}", ...) first.`);
    });
  }
  hasTranslationKey(key, lang) {
    if (!isDefinedAndNotNull(key) || key.length === 0) return false;
    return isDefinedAndNotNull(this.getTextToInterpolate(key, lang));
  }
  translate(key, params, lang) {
    return computed(() => {
      const currentKey = typeof key === "function" ? key() : key;
      const currentParams = typeof params === "function" ? params() : params;
      const currentLang = typeof lang === "function" ? lang() : lang;
      return this.instant(currentKey, currentParams, currentLang);
    });
  }
  keyToObject(key) {
    if (Array.isArray(key)) return key.reduce((acc, currKey) => {
      acc[currKey] = currKey;
      return acc;
    }, {});
    return key;
  }
  set(key, translation, lang) {
    untracked(() => {
      const targetLang = lang ?? this.getCurrentLang();
      this.store.setTranslations(targetLang, insertValue(this.store.getTranslations(targetLang), key, isString(translation) ? this.compiler.compile(translation, targetLang) : this.compiler.compileTranslations(translation, targetLang)), false);
    });
  }
  reloadLang(lang) {
    return untracked(() => {
      this.resetLang(lang);
      return this.loadAndCompileTranslations(lang);
    });
  }
  resetLang(lang) {
    this.loadingTranslations.clear(lang);
    this.store.deleteTranslations(lang);
  }
  deleteLanguage(lang) {
    untracked(() => {
      this.deletedLanguageRequests.set(lang, this.getRoot().languageRequestSequence);
      const cancellation = this.loadCancellation.get(lang);
      this.loadCancellation.delete(lang);
      this.loadingTranslations.clear(lang);
      this.store.removeLanguages([lang]);
      this.store.deleteTranslations(lang);
      cancellation?.next();
      cancellation?.complete();
    });
  }
  static getBrowserLang() {
    if (typeof window === "undefined" || !window.navigator) return;
    const browserLang = this.getBrowserCultureLang();
    return browserLang ? browserLang.split(/[-_]/)[0] : void 0;
  }
  static getBrowserCultureLang() {
    if (typeof window === "undefined" || typeof window.navigator === "undefined") return;
    return window.navigator.languages ? window.navigator.languages[0] : window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
  }
  getBrowserLang() {
    return TranslateService2.getBrowserLang();
  }
  getBrowserCultureLang() {
    return TranslateService2.getBrowserCultureLang();
  }
  get currentLang() {
    return this.isRoot ? this._currentLang.asReadonly() : this.parent.currentLang;
  }
  get fallbackLang() {
    return this.isRoot ? this._fallbackLang.asReadonly() : this.parent.fallbackLang;
  }
  get fallbackLangs() {
    return this.isRoot ? this._fallbackLangs : this.parent.fallbackLangs;
  }
  static ɵfac = function TranslateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TranslateService2)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: TranslateService2,
    factory: TranslateService2.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateService, [{
    type: Injectable
  }], () => [], null);
})();
function translate(key, params, lang) {
  return inject(TranslateService).translate(key, params, lang);
}
var TranslateBlockContext = class {
  $implicit;
  constructor($implicit) {
    this.$implicit = $implicit;
  }
};
var TranslateBlockDirective = class TranslateBlockDirective2 {
  templateRef = inject(TemplateRef);
  viewContainer = inject(ViewContainerRef);
  translateService = inject(TranslateService);
  ngOnInit() {
    const translateFn = (key, params) => {
      return this.translateService.instant(key, params);
    };
    this.viewContainer.createEmbeddedView(this.templateRef, new TranslateBlockContext(translateFn));
  }
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  static ɵfac = function TranslateBlockDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TranslateBlockDirective2)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: TranslateBlockDirective2,
    selectors: [["", "translateBlock", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateBlockDirective, [{
    type: Directive,
    args: [{
      selector: "[translateBlock]",
      standalone: true
    }]
  }], null, null);
})();
var ContentKeyHandler = class {
  element;
  changeDetectorRef;
  translateService;
  lastParams;
  constructor(element, changeDetectorRef, translateService) {
    this.element = element;
    this.changeDetectorRef = changeDetectorRef;
    this.translateService = translateService;
    console.warn(`@ngx-translate/core: Using element content as a translation key is deprecated and will be removed in v19. Use [translate]="'KEY'" or *translateBlock="let t" instead.`, this.element?.nativeElement);
  }
  checkNodes(currentParams, forceUpdate = false) {
    const nodes = this.element.nativeElement.childNodes;
    if (!nodes.length) return;
    nodes.forEach((n) => {
      const node = n;
      if (node.nodeType === 3) {
        let key;
        if (forceUpdate) node.lastKey = null;
        if (isDefinedAndNotNull(node.lookupKey)) key = node.lookupKey;
        else {
          const content = this.getContent(node);
          const trimmedContent = content.trim();
          if (trimmedContent.length) {
            node.lookupKey = trimmedContent;
            if (content !== node.currentValue) {
              key = trimmedContent;
              node.originalContent = content || node.originalContent;
            } else if (node.originalContent) key = node.originalContent.trim();
          }
        }
        this.updateValue(key, node, currentParams);
      }
    });
  }
  updateValue(key, node, currentParams) {
    if (!key) return;
    if (node.lastKey === key && this.lastParams === currentParams) return;
    this.lastParams = currentParams;
    const res = this.translateService.instant(key, currentParams);
    if (res !== key || !node.lastKey) node.lastKey = key;
    if (!node.originalContent) node.originalContent = this.getContent(node);
    if (isString(res)) node.currentValue = res;
    else if (!isDefinedAndNotNull(res)) node.currentValue = node.originalContent || key;
    else node.currentValue = JSON.stringify(res);
    this.setContent(node, node.originalContent.replace(key, node.currentValue));
    this.changeDetectorRef.markForCheck();
  }
  getContent(node) {
    return isDefinedAndNotNull(node.textContent) ? node.textContent : node.data;
  }
  setContent(node, content) {
    if (isDefinedAndNotNull(node.textContent)) node.textContent = content;
    else node.data = content;
  }
};
var TranslateDirective = class TranslateDirective2 {
  translateService = inject(TranslateService);
  element = inject(ElementRef);
  destroyRef = inject(DestroyRef);
  changeDetectorRef = inject(ChangeDetectorRef);
  injector = inject(Injector);
  key;
  currentParams;
  keySignal = null;
  paramsSignal = null;
  translationSignal = null;
  effectCreated = false;
  contentKeyHandler = null;
  set translate(key) {
    if (key) {
      this.key = key;
      if (!this.keySignal) {
        this.keySignal = signal(key, ...ngDevMode ? [{
          debugName: "keySignal"
        }] : (
          /* istanbul ignore next */
          []
        ));
        this.paramsSignal = signal(this.currentParams, ...ngDevMode ? [{
          debugName: "paramsSignal"
        }] : (
          /* istanbul ignore next */
          []
        ));
        this.translationSignal = this.translateService.translate(this.keySignal, this.paramsSignal);
        this.setupEffect();
      } else this.keySignal.set(key);
    }
  }
  set ngxTranslate(key) {
    this.translate = key;
  }
  set translateParams(params) {
    if (!equals(this.currentParams, params)) {
      this.currentParams = params;
      if (this.paramsSignal) this.paramsSignal.set(params);
      else if (this.contentKeyHandler) this.contentKeyHandler.checkNodes(params, true);
    }
  }
  constructor() {
    this.translateService.onTranslationRefresh.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      if (this.translationSignal) this.writeTranslationToDOM();
      else if (this.contentKeyHandler) this.contentKeyHandler.checkNodes(this.currentParams, true);
    });
  }
  ngAfterViewChecked() {
    if (!this.keySignal && !this.contentKeyHandler) this.contentKeyHandler = new ContentKeyHandler(this.element, this.changeDetectorRef, this.translateService);
    if (this.contentKeyHandler) this.contentKeyHandler.checkNodes(this.currentParams);
  }
  setupEffect() {
    if (this.effectCreated) return;
    this.effectCreated = true;
    effect(() => {
      const value = this.translationSignal();
      this.writeToDOM(value);
    }, {
      injector: this.injector
    });
  }
  writeTranslationToDOM() {
    if (this.translationSignal) {
      const value = this.translationSignal();
      this.writeToDOM(value);
    }
  }
  writeToDOM(value) {
    const el = this.element.nativeElement;
    let text;
    if (isString(value)) text = value;
    else if (!isDefinedAndNotNull(value)) text = this.key;
    else text = JSON.stringify(value);
    el.textContent = text;
    this.changeDetectorRef.markForCheck();
  }
  static ɵfac = function TranslateDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TranslateDirective2)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: TranslateDirective2,
    selectors: [["", "translate", ""], ["", "ngx-translate", ""], ["", "ngxTranslate", ""]],
    inputs: {
      translate: "translate",
      ngxTranslate: "ngxTranslate",
      translateParams: "translateParams"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateDirective, [{
    type: Directive,
    args: [{
      selector: "[translate],[ngx-translate],[ngxTranslate]",
      standalone: true
    }]
  }], () => [], {
    translate: [{
      type: Input
    }],
    ngxTranslate: [{
      type: Input
    }],
    translateParams: [{
      type: Input
    }]
  });
})();
var TranslateSlotDirective = class TranslateSlotDirective2 {
  name = input.required(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "name"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "translateSlot"
  }));
  template = inject(TemplateRef);
  static ɵfac = function TranslateSlotDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TranslateSlotDirective2)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: TranslateSlotDirective2,
    selectors: [["ng-template", "translateSlot", ""]],
    inputs: {
      name: [1, "translateSlot", "name"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateSlotDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[translateSlot]",
      standalone: true
    }]
  }], null, {
    name: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "translateSlot",
        required: true
      }]
    }]
  });
})();
var TranslateSlotsComponent = class TranslateSlotsComponent2 {
  key = input.required(__spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "key"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    alias: "translateSlots"
  }));
  translateParams = input(...ngDevMode ? [void 0, {
    debugName: "translateParams"
  }] : (
    /* istanbul ignore next */
    []
  ));
  translate = inject(TranslateService);
  slots = contentChildren(TranslateSlotDirective, ...ngDevMode ? [{
    debugName: "slots"
  }] : (
    /* istanbul ignore next */
    []
  ));
  marker = `${Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)}`;
  parts = computed(() => {
    const slots = this.slots();
    const translateParams = this.translateParams();
    const params = __spreadValues({}, translateParams);
    const names = /* @__PURE__ */ new Set();
    for (const [index, slot] of slots.entries()) {
      const name = slot.name();
      if (names.has(name)) throw new Error(`@ngx-translate/core: duplicate translateSlot "${name}".`);
      if (getValue(translateParams, name) !== void 0) throw new Error(`@ngx-translate/core: translateSlot "${name}" is also passed in translateParams.`);
      names.add(name);
      params[name] = `${this.marker}${index}${this.marker}`;
    }
    const translation = this.translate.instant(this.key(), params);
    const occurrences = /* @__PURE__ */ new Map();
    return (isString(translation) ? translation : this.key()).split(this.marker).flatMap((chunk, index) => {
      if (index % 2 === 0) return chunk ? [{
        id: `text:${index}`,
        text: chunk
      }] : [];
      const slot = slots[Number(chunk)];
      const occurrence = occurrences.get(slot.name()) ?? 0;
      occurrences.set(slot.name(), occurrence + 1);
      return [{
        id: `slot:${slot.name()}:${occurrence}`,
        template: slot.template
      }];
    });
  }, ...ngDevMode ? [{
    debugName: "parts"
  }] : (
    /* istanbul ignore next */
    []
  ));
  static ɵfac = function TranslateSlotsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TranslateSlotsComponent2)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: TranslateSlotsComponent2,
    selectors: [["", "translateSlots", ""]],
    contentQueries: function TranslateSlotsComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuerySignal(dirIndex, ctx.slots, TranslateSlotDirective, 4);
      }
      if (rf & 2) {
        ɵɵqueryAdvance();
      }
    },
    inputs: {
      key: [1, "translateSlots", "key"],
      translateParams: [1, "translateParams"]
    },
    attrs: _c0,
    decls: 2,
    vars: 0,
    consts: [[3, "ngTemplateOutlet"]],
    template: function TranslateSlotsComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵrepeaterCreate(0, TranslateSlotsComponent_For_1_Template, 2, 1, null, null, _forTrack0);
      }
      if (rf & 2) {
        ɵɵrepeater(ctx.parts());
      }
    },
    dependencies: [NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslateSlotsComponent, [{
    type: Component,
    args: [{
      selector: "[translateSlots]",
      standalone: true,
      imports: [NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: '@for (part of parts(); track part.id) {\n    @if (part.template) {\n        <ng-container [ngTemplateOutlet]="part.template" />\n    } @else {\n        <ng-container>{{ part.text }}</ng-container>\n    }\n}\n'
    }]
  }], null, {
    key: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "translateSlots",
        required: true
      }]
    }],
    translateParams: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "translateParams",
        required: false
      }]
    }],
    slots: [{
      type: ContentChildren,
      args: [forwardRef(() => TranslateSlotDirective), {
        isSignal: true
      }]
    }]
  });
})();
var TranslatePipe = class TranslatePipe2 {
  translateService = inject(TranslateService);
  cachedSignal = null;
  lastKey = null;
  lastParams;
  transform(query, ...args) {
    if (!query || !query.length) return query;
    const interpolateParams = this.parseArgs(args);
    if (query !== this.lastKey || !equals(interpolateParams, this.lastParams)) {
      this.cachedSignal = this.translateService.translate(query, interpolateParams);
      this.lastKey = query;
      this.lastParams = interpolateParams;
    }
    return this.cachedSignal();
  }
  parseArgs(args) {
    if (!isDefinedAndNotNull(args[0]) || !args.length) return;
    if (isString(args[0]) && args[0].length) {
      const validArgs = args[0].replace(/(')?([a-zA-Z0-9_]+)(')?(\s)?:/g, '"$2":').replace(/:(\s)?(')(.*?)(')/g, ':"$3"');
      try {
        return JSON.parse(validArgs);
      } catch (e) {
        throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${args[0]}`, {
          cause: e
        });
      }
    }
    if (isDict(args[0])) return args[0];
  }
  static ɵfac = function TranslatePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TranslatePipe2)();
  };
  static ɵpipe = ɵɵdefinePipe({
    name: "translate",
    type: TranslatePipe2,
    pure: false
  });
  static ɵprov = ɵɵdefineInjectable({
    token: TranslatePipe2,
    factory: TranslatePipe2.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TranslatePipe, [{
    type: Injectable
  }, {
    type: Pipe,
    args: [{
      name: "translate",
      standalone: true,
      pure: false
    }]
  }], null, null);
})();
function isClass(fn) {
  return /^class[{\s]/.test(Function.prototype.toString.call(fn));
}
function toProvider(token, value) {
  return isClass(value) ? {
    provide: token,
    useClass: value
  } : {
    provide: token,
    useFactory: value
  };
}
function provideTranslateLoader(loaderOrFactory) {
  return toProvider(TranslateLoader, loaderOrFactory);
}
function provideTranslateCompiler(compilerOrFactory) {
  return toProvider(TranslateCompiler, compilerOrFactory);
}
function provideTranslateParser(parserOrFactory) {
  return toProvider(TranslateParser, parserOrFactory);
}
function provideMissingTranslationHandler(handlerOrFactory) {
  return toProvider(MissingTranslationHandler, handlerOrFactory);
}
function provideTranslateService(config = {}) {
  return defaultProviders(__spreadProps(__spreadValues({}, config), {
    isRoot: true
  }));
}
function provideChildTranslateService(config = {}) {
  return defaultProviders(__spreadProps(__spreadValues({}, config), {
    isRoot: false
  }));
}
function resolvePluginProvider(token, value, defaultClass, fieldName, helperName) {
  if (value === void 0) return toProvider(token, defaultClass);
  if (typeof value === "function") {
    if (isClass(value)) {
      const className = value.name || "YourClass";
      console.warn(`@ngx-translate/core: "${fieldName}" received a bare class (${className}); auto-wrapping with ${helperName}(). For clarity, prefer ${fieldName}: ${helperName}(${className}).`);
    }
    return toProvider(token, value);
  }
  return value;
}
function defaultProviders(config) {
  const providers = [];
  const loader = resolvePluginProvider(TranslateLoader, config.loader, TranslateNoOpLoader, "loader", "provideTranslateLoader");
  const compiler = resolvePluginProvider(TranslateCompiler, config.compiler, TranslateNoOpCompiler, "compiler", "provideTranslateCompiler");
  const parser = resolvePluginProvider(TranslateParser, config.parser, TranslateDefaultParser, "parser", "provideTranslateParser");
  const missingTranslationHandler = resolvePluginProvider(MissingTranslationHandler, config.missingTranslationHandler, DefaultMissingTranslationHandler, "missingTranslationHandler", "provideMissingTranslationHandler");
  providers.push(loader, compiler, parser, missingTranslationHandler);
  providers.push(TranslateStore);
  const serviceConfig = __spreadProps(__spreadValues({
    fallbackLang: config.fallbackLang ?? null
  }, config.fallbackLangs !== void 0 && {
    fallbackLangs: config.fallbackLangs
  }), {
    lang: config.lang,
    retry: config.retry,
    langs: config.langs,
    isRoot: config.isRoot
  });
  providers.push({
    provide: TRANSLATE_SERVICE_CONFIG,
    useValue: serviceConfig
  });
  providers.push({
    provide: TranslateService,
    useClass: TranslateService
  });
  return providers;
}
var ITranslateService = class {
};

export {
  _,
  MissingTranslationHandler,
  DefaultMissingTranslationHandler,
  TranslateCompiler,
  TranslateNoOpCompiler,
  TranslateLoader,
  TranslateNoOpLoader,
  equals,
  isDefinedAndNotNull,
  isDefined,
  isDict,
  isObject,
  isArray,
  isString,
  isFunction,
  mergeDeep,
  getValue,
  insertValue,
  TranslateParser,
  TranslateDefaultParser,
  TranslateStore,
  TRANSLATE_SERVICE_CONFIG,
  TranslateService,
  translate,
  TranslateBlockContext,
  TranslateBlockDirective,
  TranslateDirective,
  TranslateSlotDirective,
  TranslateSlotsComponent,
  TranslatePipe,
  provideTranslateLoader,
  provideTranslateCompiler,
  provideTranslateParser,
  provideMissingTranslationHandler,
  provideTranslateService,
  provideChildTranslateService,
  ITranslateService
};
//# sourceMappingURL=chunk-ZW3ANBSO.js.map
