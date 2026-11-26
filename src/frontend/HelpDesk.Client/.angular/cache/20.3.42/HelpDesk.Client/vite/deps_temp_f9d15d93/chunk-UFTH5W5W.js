import {
  Scroller
} from "./chunk-YSVS4VZO.js";
import {
  BaseModelHolder,
  InputText
} from "./chunk-NYTSX6XG.js";
import {
  AutoFocus,
  ConnectedOverlayScrollHandler,
  DomHandler,
  unblockBodyScroll
} from "./chunk-P2CXEK45.js";
import {
  Fluid
} from "./chunk-XG76DNSE.js";
import {
  animate,
  animation,
  style,
  transition,
  trigger,
  useAnimation
} from "./chunk-LNYW3TTT.js";
import {
  Ripple
} from "./chunk-FFMHGGP3.js";
import {
  BlankIcon,
  CheckIcon,
  ChevronDownIcon,
  SearchIcon,
  TimesIcon
} from "./chunk-N5QPV64T.js";
import {
  BaseComponent,
  PARENT_INSTANCE
} from "./chunk-5MPHY4WI.js";
import {
  BaseStyle
} from "./chunk-TXBF5NQ3.js";
import {
  FilterService,
  OverlayService,
  PrimeTemplate,
  SharedModule,
  TranslationKeys
} from "./chunk-IFC3AVWP.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-YPLNGY7L.js";
import {
  Bind,
  BindModule
} from "./chunk-B7SCZAZL.js";
import {
  $,
  C,
  Gt,
  J,
  Kt,
  Lt,
  M,
  P,
  R,
  U,
  W,
  Yt,
  b,
  bt,
  h,
  ht,
  j,
  k,
  k2,
  l,
  p,
  s2 as s,
  s3 as s2,
  ut,
  v,
  vt,
  y,
  z
} from "./chunk-DNW5GNAL.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-ZBPAMAWO.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  effect,
  forwardRef,
  inject,
  input,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-24SGBLIH.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-R2QGWZ7S.js";

// node_modules/primeng/fesm2022/primeng-baseeditableholder.mjs
var BaseEditableHolder = class _BaseEditableHolder extends BaseModelHolder {
  /**
   * There must be a value (if set).
   * @defaultValue false
   * @group Props
   */
  required = input(void 0, ...ngDevMode ? [{
    debugName: "required",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * When present, it specifies that the component should have invalid state style.
   * @defaultValue false
   * @group Props
   */
  invalid = input(void 0, ...ngDevMode ? [{
    debugName: "invalid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * When present, it specifies that the component should have disabled state style.
   * @defaultValue false
   * @group Props
   */
  disabled = input(void 0, ...ngDevMode ? [{
    debugName: "disabled",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * When present, it specifies that the name of the input.
   * @defaultValue undefined
   * @group Props
   */
  name = input(...ngDevMode ? [void 0, {
    debugName: "name"
  }] : []);
  _disabled = signal(false, ...ngDevMode ? [{
    debugName: "_disabled"
  }] : []);
  $disabled = computed(() => this.disabled() || this._disabled(), ...ngDevMode ? [{
    debugName: "$disabled"
  }] : []);
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  writeDisabledState(value) {
    this._disabled.set(value);
  }
  writeControlValue(value, setModelValue) {
  }
  /**** Angular ControlValueAccessors ****/
  writeValue(value) {
    this.writeControlValue(value, this.writeModelValue.bind(this));
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.writeDisabledState(val);
    this.cd.markForCheck();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵBaseEditableHolder_BaseFactory;
    return function BaseEditableHolder_Factory(__ngFactoryType__) {
      return (ɵBaseEditableHolder_BaseFactory || (ɵBaseEditableHolder_BaseFactory = ɵɵgetInheritedFactory(_BaseEditableHolder)))(__ngFactoryType__ || _BaseEditableHolder);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _BaseEditableHolder,
    inputs: {
      required: [1, "required"],
      invalid: [1, "invalid"],
      disabled: [1, "disabled"],
      name: [1, "name"]
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseEditableHolder, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, {
    required: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "required",
        required: false
      }]
    }],
    invalid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "invalid",
        required: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    name: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "name",
        required: false
      }]
    }]
  });
})();

// node_modules/primeng/fesm2022/primeng-baseinput.mjs
var BaseInput = class _BaseInput extends BaseEditableHolder {
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue false
   * @group Props
   */
  fluid = input(void 0, ...ngDevMode ? [{
    debugName: "fluid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * Specifies the input variant of the component.
   * @defaultValue 'outlined'
   * @group Props
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : []);
  /**
   * Specifies the size of the component.
   * @defaultValue undefined
   * @group Props
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : []);
  /**
   * Specifies the visible width of the input element in characters.
   * @defaultValue undefined
   * @group Props
   */
  inputSize = input(...ngDevMode ? [void 0, {
    debugName: "inputSize"
  }] : []);
  /**
   * Specifies the value must match the pattern.
   * @defaultValue undefined
   * @group Props
   */
  pattern = input(...ngDevMode ? [void 0, {
    debugName: "pattern"
  }] : []);
  /**
   * The value must be greater than or equal to the value.
   * @defaultValue undefined
   * @group Props
   */
  min = input(...ngDevMode ? [void 0, {
    debugName: "min"
  }] : []);
  /**
   * The value must be less than or equal to the value.
   * @defaultValue undefined
   * @group Props
   */
  max = input(...ngDevMode ? [void 0, {
    debugName: "max"
  }] : []);
  /**
   * Unless the step is set to the any literal, the value must be min + an integral multiple of the step.
   * @defaultValue undefined
   * @group Props
   */
  step = input(...ngDevMode ? [void 0, {
    debugName: "step"
  }] : []);
  /**
   * The number of characters (code points) must not be less than the value of the attribute, if non-empty.
   * @defaultValue undefined
   * @group Props
   */
  minlength = input(...ngDevMode ? [void 0, {
    debugName: "minlength"
  }] : []);
  /**
   * The number of characters (code points) must not exceed the value of the attribute.
   * @defaultValue undefined
   * @group Props
   */
  maxlength = input(...ngDevMode ? [void 0, {
    debugName: "maxlength"
  }] : []);
  $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{
    debugName: "$variant"
  }] : []);
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵBaseInput_BaseFactory;
    return function BaseInput_Factory(__ngFactoryType__) {
      return (ɵBaseInput_BaseFactory || (ɵBaseInput_BaseFactory = ɵɵgetInheritedFactory(_BaseInput)))(__ngFactoryType__ || _BaseInput);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _BaseInput,
    inputs: {
      fluid: [1, "fluid"],
      variant: [1, "variant"],
      size: [1, "size"],
      inputSize: [1, "inputSize"],
      pattern: [1, "pattern"],
      min: [1, "min"],
      max: [1, "max"],
      step: [1, "step"],
      minlength: [1, "minlength"],
      maxlength: [1, "maxlength"]
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseInput, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, {
    fluid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fluid",
        required: false
      }]
    }],
    variant: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "variant",
        required: false
      }]
    }],
    size: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }],
    inputSize: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "inputSize",
        required: false
      }]
    }],
    pattern: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "pattern",
        required: false
      }]
    }],
    min: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "min",
        required: false
      }]
    }],
    max: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "max",
        required: false
      }]
    }],
    step: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "step",
        required: false
      }]
    }],
    minlength: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "minlength",
        required: false
      }]
    }],
    maxlength: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "maxlength",
        required: false
      }]
    }]
  });
})();

// node_modules/@primeuix/styles/dist/iconfield/index.mjs
var style2 = "\n    .p-iconfield {\n        position: relative;\n        display: block;\n    }\n\n    .p-inputicon {\n        position: absolute;\n        top: 50%;\n        margin-top: calc(-1 * (dt('icon.size') / 2));\n        color: dt('iconfield.icon.color');\n        line-height: 1;\n        z-index: 1;\n    }\n\n    .p-iconfield .p-inputicon:first-child {\n        inset-inline-start: dt('form.field.padding.x');\n    }\n\n    .p-iconfield .p-inputicon:last-child {\n        inset-inline-end: dt('form.field.padding.x');\n    }\n\n    .p-iconfield .p-inputtext:not(:first-child),\n    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {\n        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-iconfield .p-inputtext:not(:last-child) {\n        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {\n        font-size: dt('form.field.sm.font.size');\n        width: dt('form.field.sm.font.size');\n        height: dt('form.field.sm.font.size');\n        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));\n    }\n\n    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {\n        font-size: dt('form.field.lg.font.size');\n        width: dt('form.field.lg.font.size');\n        height: dt('form.field.lg.font.size');\n        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));\n    }\n";

// node_modules/primeng/fesm2022/primeng-iconfield.mjs
var _c0 = ["*"];
var classes = {
  root: ({
    instance
  }) => ["p-iconfield", {
    "p-iconfield-left": instance.iconPosition == "left",
    "p-iconfield-right": instance.iconPosition == "right"
  }]
};
var IconFieldStyle = class _IconFieldStyle extends BaseStyle {
  name = "iconfield";
  style = style2;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵIconFieldStyle_BaseFactory;
    return function IconFieldStyle_Factory(__ngFactoryType__) {
      return (ɵIconFieldStyle_BaseFactory || (ɵIconFieldStyle_BaseFactory = ɵɵgetInheritedFactory(_IconFieldStyle)))(__ngFactoryType__ || _IconFieldStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _IconFieldStyle,
    factory: _IconFieldStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconFieldStyle, [{
    type: Injectable
  }], null, null);
})();
var IconFieldClasses;
(function(IconFieldClasses2) {
  IconFieldClasses2["root"] = "p-iconfield";
})(IconFieldClasses || (IconFieldClasses = {}));
var ICONFIELD_INSTANCE = new InjectionToken("ICONFIELD_INSTANCE");
var IconField = class _IconField extends BaseComponent {
  hostName = "";
  _componentStyle = inject(IconFieldStyle);
  $pcIconField = inject(ICONFIELD_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Position of the icon.
   * @group Props
   */
  iconPosition = "left";
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵIconField_BaseFactory;
    return function IconField_Factory(__ngFactoryType__) {
      return (ɵIconField_BaseFactory || (ɵIconField_BaseFactory = ɵɵgetInheritedFactory(_IconField)))(__ngFactoryType__ || _IconField);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _IconField,
    selectors: [["p-iconfield"], ["p-iconField"], ["p-icon-field"]],
    hostVars: 2,
    hostBindings: function IconField_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      hostName: "hostName",
      iconPosition: "iconPosition",
      styleClass: "styleClass"
    },
    features: [ɵɵProvidersFeature([IconFieldStyle, {
      provide: ICONFIELD_INSTANCE,
      useExisting: _IconField
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _IconField
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IconField_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    dependencies: [CommonModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconField, [{
    type: Component,
    args: [{
      selector: "p-iconfield, p-iconField, p-icon-field",
      standalone: true,
      imports: [CommonModule, BindModule],
      template: ` <ng-content></ng-content>`,
      providers: [IconFieldStyle, {
        provide: ICONFIELD_INSTANCE,
        useExisting: IconField
      }, {
        provide: PARENT_INSTANCE,
        useExisting: IconField
      }],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    hostName: [{
      type: Input
    }],
    iconPosition: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }]
  });
})();
var IconFieldModule = class _IconFieldModule {
  static ɵfac = function IconFieldModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _IconFieldModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _IconFieldModule,
    imports: [IconField],
    exports: [IconField]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [IconField]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IconFieldModule, [{
    type: NgModule,
    args: [{
      imports: [IconField],
      exports: [IconField]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-inputicon.mjs
var _c02 = ["*"];
var classes2 = {
  root: "p-inputicon"
};
var InputIconStyle = class _InputIconStyle extends BaseStyle {
  name = "inputicon";
  classes = classes2;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵInputIconStyle_BaseFactory;
    return function InputIconStyle_Factory(__ngFactoryType__) {
      return (ɵInputIconStyle_BaseFactory || (ɵInputIconStyle_BaseFactory = ɵɵgetInheritedFactory(_InputIconStyle)))(__ngFactoryType__ || _InputIconStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _InputIconStyle,
    factory: _InputIconStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputIconStyle, [{
    type: Injectable
  }], null, null);
})();
var INPUTICON_INSTANCE = new InjectionToken("INPUTICON_INSTANCE");
var InputIcon = class _InputIcon extends BaseComponent {
  hostName = "";
  /**
   * Style class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  _componentStyle = inject(InputIconStyle);
  $pcInputIcon = inject(INPUTICON_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵInputIcon_BaseFactory;
    return function InputIcon_Factory(__ngFactoryType__) {
      return (ɵInputIcon_BaseFactory || (ɵInputIcon_BaseFactory = ɵɵgetInheritedFactory(_InputIcon)))(__ngFactoryType__ || _InputIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _InputIcon,
    selectors: [["p-inputicon"], ["p-inputIcon"]],
    hostVars: 2,
    hostBindings: function InputIcon_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      hostName: "hostName",
      styleClass: "styleClass"
    },
    features: [ɵɵProvidersFeature([InputIconStyle, {
      provide: INPUTICON_INSTANCE,
      useExisting: _InputIcon
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _InputIcon
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function InputIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    dependencies: [CommonModule, SharedModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputIcon, [{
    type: Component,
    args: [{
      selector: "p-inputicon, p-inputIcon",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: `<ng-content></ng-content>`,
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [InputIconStyle, {
        provide: INPUTICON_INSTANCE,
        useExisting: InputIcon
      }, {
        provide: PARENT_INSTANCE,
        useExisting: InputIcon
      }],
      hostDirectives: [Bind],
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      }
    }]
  }], null, {
    hostName: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }]
  });
})();
var InputIconModule = class _InputIconModule {
  static ɵfac = function InputIconModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputIconModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _InputIconModule,
    imports: [InputIcon, SharedModule],
    exports: [InputIcon, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [InputIcon, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputIconModule, [{
    type: NgModule,
    args: [{
      imports: [InputIcon, SharedModule],
      exports: [InputIcon, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-utils.mjs
var ObjectUtils = class _ObjectUtils {
  static isArray(value, empty = true) {
    return Array.isArray(value) && (empty || value.length !== 0);
  }
  static isObject(value, empty = true) {
    return typeof value === "object" && !Array.isArray(value) && value != null && (empty || Object.keys(value).length !== 0);
  }
  static equals(obj1, obj2, field) {
    if (field)
      return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);
    else
      return this.equalsByValue(obj1, obj2);
  }
  static equalsByValue(obj1, obj2) {
    if (obj1 === obj2)
      return true;
    if (obj1 && obj2 && typeof obj1 == "object" && typeof obj2 == "object") {
      var arrA = Array.isArray(obj1), arrB = Array.isArray(obj2), i, length, key;
      if (arrA && arrB) {
        length = obj1.length;
        if (length != obj2.length)
          return false;
        for (i = length; i-- !== 0; )
          if (!this.equalsByValue(obj1[i], obj2[i]))
            return false;
        return true;
      }
      if (arrA != arrB)
        return false;
      var dateA = this.isDate(obj1), dateB = this.isDate(obj2);
      if (dateA != dateB)
        return false;
      if (dateA && dateB)
        return obj1.getTime() == obj2.getTime();
      var regexpA = obj1 instanceof RegExp, regexpB = obj2 instanceof RegExp;
      if (regexpA != regexpB)
        return false;
      if (regexpA && regexpB)
        return obj1.toString() == obj2.toString();
      var keys = Object.keys(obj1);
      length = keys.length;
      if (length !== Object.keys(obj2).length)
        return false;
      for (i = length; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(obj2, keys[i]))
          return false;
      for (i = length; i-- !== 0; ) {
        key = keys[i];
        if (!this.equalsByValue(obj1[key], obj2[key]))
          return false;
      }
      return true;
    }
    return obj1 !== obj1 && obj2 !== obj2;
  }
  static resolveFieldData(data, field) {
    if (data && field) {
      if (this.isFunction(field)) {
        return field(data);
      } else if (field.indexOf(".") == -1) {
        return data[field];
      } else {
        let fields = field.split(".");
        let value = data;
        for (let i = 0, len = fields.length; i < len; ++i) {
          if (value == null) {
            return null;
          }
          value = value[fields[i]];
        }
        return value;
      }
    } else {
      return null;
    }
  }
  static isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  }
  static reorderArray(value, from, to) {
    let target;
    if (value && from !== to) {
      if (to >= value.length) {
        to %= value.length;
        from %= value.length;
      }
      value.splice(to, 0, value.splice(from, 1)[0]);
    }
  }
  static insertIntoOrderedArray(item, index, arr, sourceArr) {
    if (arr.length > 0) {
      let injected = false;
      for (let i = 0; i < arr.length; i++) {
        let currentItemIndex = this.findIndexInList(arr[i], sourceArr);
        if (currentItemIndex > index) {
          arr.splice(i, 0, item);
          injected = true;
          break;
        }
      }
      if (!injected) {
        arr.push(item);
      }
    } else {
      arr.push(item);
    }
  }
  static findIndexInList(item, list) {
    let index = -1;
    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] == item) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  static contains(value, list) {
    if (value != null && list && list.length) {
      for (let val of list) {
        if (this.equals(value, val))
          return true;
      }
    }
    return false;
  }
  static removeAccents(str) {
    if (str) {
      str = str.normalize("NFKD").replace(new RegExp("\\p{Diacritic}", "gu"), "");
    }
    return str;
  }
  static isDate(input2) {
    return Object.prototype.toString.call(input2) === "[object Date]";
  }
  static isEmpty(value) {
    return value === null || value === void 0 || value === "" || Array.isArray(value) && value.length === 0 || !this.isDate(value) && typeof value === "object" && Object.keys(value).length === 0;
  }
  static isNotEmpty(value) {
    return !this.isEmpty(value);
  }
  static compare(value1, value2, locale, order = 1) {
    let result = -1;
    const emptyValue1 = this.isEmpty(value1);
    const emptyValue2 = this.isEmpty(value2);
    if (emptyValue1 && emptyValue2)
      result = 0;
    else if (emptyValue1)
      result = order;
    else if (emptyValue2)
      result = -order;
    else if (typeof value1 === "string" && typeof value2 === "string")
      result = value1.localeCompare(value2, locale, { numeric: true });
    else
      result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
    return result;
  }
  static sort(value1, value2, order = 1, locale, nullSortOrder = 1) {
    const result = _ObjectUtils.compare(value1, value2, locale, order);
    let finalSortOrder = order;
    if (_ObjectUtils.isEmpty(value1) || _ObjectUtils.isEmpty(value2)) {
      finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
    }
    return finalSortOrder * result;
  }
  static merge(obj1, obj2) {
    if (obj1 == void 0 && obj2 == void 0) {
      return void 0;
    } else if ((obj1 == void 0 || typeof obj1 === "object") && (obj2 == void 0 || typeof obj2 === "object")) {
      return __spreadValues(__spreadValues({}, obj1 || {}), obj2 || {});
    } else if ((obj1 == void 0 || typeof obj1 === "string") && (obj2 == void 0 || typeof obj2 === "string")) {
      return [obj1 || "", obj2 || ""].join(" ");
    }
    return obj2 || obj1;
  }
  static isPrintableCharacter(char = "") {
    return this.isNotEmpty(char) && char.length === 1 && char.match(/\S| /);
  }
  static getItemValue(obj, ...params) {
    return this.isFunction(obj) ? obj(...params) : obj;
  }
  static findLastIndex(arr, callback) {
    let index = -1;
    if (this.isNotEmpty(arr)) {
      try {
        index = arr.findLastIndex(callback);
      } catch {
        index = arr.lastIndexOf([...arr].reverse().find(callback));
      }
    }
    return index;
  }
  static findLast(arr, callback) {
    let item;
    if (this.isNotEmpty(arr)) {
      try {
        item = arr.findLast(callback);
      } catch {
        item = [...arr].reverse().find(callback);
      }
    }
    return item;
  }
  static deepEquals(a, b2) {
    if (a === b2)
      return true;
    if (a && b2 && typeof a == "object" && typeof b2 == "object") {
      var arrA = Array.isArray(a), arrB = Array.isArray(b2), i, length, key;
      if (arrA && arrB) {
        length = a.length;
        if (length != b2.length)
          return false;
        for (i = length; i-- !== 0; )
          if (!this.deepEquals(a[i], b2[i]))
            return false;
        return true;
      }
      if (arrA != arrB)
        return false;
      var dateA = a instanceof Date, dateB = b2 instanceof Date;
      if (dateA != dateB)
        return false;
      if (dateA && dateB)
        return a.getTime() == b2.getTime();
      var regexpA = a instanceof RegExp, regexpB = b2 instanceof RegExp;
      if (regexpA != regexpB)
        return false;
      if (regexpA && regexpB)
        return a.toString() == b2.toString();
      var keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b2).length)
        return false;
      for (i = length; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(b2, keys[i]))
          return false;
      for (i = length; i-- !== 0; ) {
        key = keys[i];
        if (!this.deepEquals(a[key], b2[key]))
          return false;
      }
      return true;
    }
    return a !== a && b2 !== b2;
  }
  static minifyCSS(css) {
    return css ? css.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":") : css;
  }
  static toFlatCase(str) {
    return this.isString(str) ? str.replace(/(-|_)/g, "").toLowerCase() : str;
  }
  static isString(value, empty = true) {
    return typeof value === "string" && (empty || value !== "");
  }
};
var lastId = 0;
function UniqueComponentId(prefix = "pn_id_") {
  lastId++;
  return `${prefix}${lastId}`;
}
function ZIndexUtils() {
  let zIndexes = [];
  const generateZIndex = (key, baseZIndex) => {
    let lastZIndex = zIndexes.length > 0 ? zIndexes[zIndexes.length - 1] : { key, value: baseZIndex };
    let newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 2;
    zIndexes.push({ key, value: newZIndex });
    return newZIndex;
  };
  const revertZIndex = (zIndex) => {
    zIndexes = zIndexes.filter((obj) => obj.value !== zIndex);
  };
  const getCurrentZIndex = () => {
    return zIndexes.length > 0 ? zIndexes[zIndexes.length - 1].value : 0;
  };
  const getZIndex = (el) => {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: (key, el, baseZIndex) => {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, baseZIndex));
      }
    },
    clear: (el) => {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = "";
      }
    },
    getCurrent: () => getCurrentZIndex(),
    generateZIndex,
    revertZIndex
  };
}
var zindexutils = ZIndexUtils();

// node_modules/primeng/fesm2022/primeng-overlay.mjs
var _c03 = ["content"];
var _c1 = ["overlay"];
var _c2 = ["*"];
var _c3 = (a0, a1, a2) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1,
  transform: a2
});
var _c4 = (a0) => ({
  value: "visible",
  params: a0
});
var _c5 = (a0) => ({
  mode: a0
});
var _c6 = (a0) => ({
  $implicit: a0
});
function Overlay_div_0_div_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Overlay_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3, 1);
    ɵɵlistener("click", function Overlay_div_0_div_2_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onOverlayContentClick($event));
    })("@overlayContentAnimation.start", function Overlay_div_0_div_2_Template_div_animation_overlayContentAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onOverlayContentAnimationStart($event));
    })("@overlayContentAnimation.done", function Overlay_div_0_div_2_Template_div_animation_overlayContentAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onOverlayContentAnimationDone($event));
    });
    ɵɵprojection(2);
    ɵɵtemplate(3, Overlay_div_0_div_2_ng_container_3_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("content"), ctx_r1.contentStyleClass));
    ɵɵproperty("pBind", ctx_r1.ptm("content"))("@overlayContentAnimation", ɵɵpureFunction1(10, _c4, ɵɵpureFunction3(6, _c3, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions, ctx_r1.transformOptions[ctx_r1.modal ? ctx_r1.overlayResponsiveDirection : "default"])));
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(14, _c6, ɵɵpureFunction1(12, _c5, ctx_r1.overlayMode)));
  }
}
function Overlay_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3, 0);
    ɵɵlistener("click", function Overlay_div_0_Template_div_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayClick());
    });
    ɵɵtemplate(2, Overlay_div_0_div_2_Template, 4, 16, "div", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass));
    ɵɵproperty("pBind", ctx_r1.ptm("root"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.visible);
  }
}
var style3 = (
  /*css*/
  `
.p-overlay {
    position: absolute;
    top: 0;
}

.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
}

/* Github Issue #18560 */
.p-component-overlay.p-component {
    position: relative;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}

.p-overlay-content ~ .p-overlay-content {
    display: none;
}
`
);
var classes3 = {
  host: "p-overlay-host",
  root: ({
    instance
  }) => ["p-overlay p-component", {
    "p-overlay-modal p-overlay-mask p-overlay-mask-enter": instance.modal,
    "p-overlay-center": instance.modal && instance.overlayResponsiveDirection === "center",
    "p-overlay-top": instance.modal && instance.overlayResponsiveDirection === "top",
    "p-overlay-top-start": instance.modal && instance.overlayResponsiveDirection === "top-start",
    "p-overlay-top-end": instance.modal && instance.overlayResponsiveDirection === "top-end",
    "p-overlay-bottom": instance.modal && instance.overlayResponsiveDirection === "bottom",
    "p-overlay-bottom-start": instance.modal && instance.overlayResponsiveDirection === "bottom-start",
    "p-overlay-bottom-end": instance.modal && instance.overlayResponsiveDirection === "bottom-end",
    "p-overlay-left": instance.modal && instance.overlayResponsiveDirection === "left",
    "p-overlay-left-start": instance.modal && instance.overlayResponsiveDirection === "left-start",
    "p-overlay-left-end": instance.modal && instance.overlayResponsiveDirection === "left-end",
    "p-overlay-right": instance.modal && instance.overlayResponsiveDirection === "right",
    "p-overlay-right-start": instance.modal && instance.overlayResponsiveDirection === "right-start",
    "p-overlay-right-end": instance.modal && instance.overlayResponsiveDirection === "right-end"
  }],
  content: "p-overlay-content"
};
var OverlayStyle = class _OverlayStyle extends BaseStyle {
  name = "overlay";
  style = style3;
  classes = classes3;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵOverlayStyle_BaseFactory;
    return function OverlayStyle_Factory(__ngFactoryType__) {
      return (ɵOverlayStyle_BaseFactory || (ɵOverlayStyle_BaseFactory = ɵɵgetInheritedFactory(_OverlayStyle)))(__ngFactoryType__ || _OverlayStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _OverlayStyle,
    factory: _OverlayStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayStyle, [{
    type: Injectable
  }], null, null);
})();
var OVERLAY_INSTANCE = new InjectionToken("OVERLAY_INSTANCE");
var showOverlayContentAnimation = animation([style({
  transform: "{{transform}}",
  opacity: 0
}), animate("{{showTransitionParams}}")]);
var hideOverlayContentAnimation = animation([animate("{{hideTransitionParams}}", style({
  transform: "{{transform}}",
  opacity: 0
}))]);
var Overlay = class _Overlay extends BaseComponent {
  overlayService;
  zone;
  $pcOverlay = inject(OVERLAY_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  hostName = "";
  /**
   * The visible property is an input that determines the visibility of the component.
   * @defaultValue false
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible && !this.modalVisible) {
      this.modalVisible = true;
    }
  }
  /**
   * The mode property is an input that determines the overlay mode type or string.
   * @defaultValue null
   * @group Props
   */
  get mode() {
    return this._mode || this.overlayOptions?.mode;
  }
  set mode(value) {
    this._mode = value;
  }
  /**
   * The style property is an input that determines the style object for the component.
   * @defaultValue null
   * @group Props
   */
  get style() {
    return ObjectUtils.merge(this._style, this.modal ? this.overlayResponsiveOptions?.style : this.overlayOptions?.style);
  }
  set style(value) {
    this._style = value;
  }
  /**
   * The styleClass property is an input that determines the CSS class(es) for the component.
   * @defaultValue null
   * @group Props
   */
  get styleClass() {
    return ObjectUtils.merge(this._styleClass, this.modal ? this.overlayResponsiveOptions?.styleClass : this.overlayOptions?.styleClass);
  }
  set styleClass(value) {
    this._styleClass = value;
  }
  /**
   * The contentStyle property is an input that determines the style object for the content of the component.
   * @defaultValue null
   * @group Props
   */
  get contentStyle() {
    return ObjectUtils.merge(this._contentStyle, this.modal ? this.overlayResponsiveOptions?.contentStyle : this.overlayOptions?.contentStyle);
  }
  set contentStyle(value) {
    this._contentStyle = value;
  }
  /**
   * The contentStyleClass property is an input that determines the CSS class(es) for the content of the component.
   * @defaultValue null
   * @group Props
   */
  get contentStyleClass() {
    return ObjectUtils.merge(this._contentStyleClass, this.modal ? this.overlayResponsiveOptions?.contentStyleClass : this.overlayOptions?.contentStyleClass);
  }
  set contentStyleClass(value) {
    this._contentStyleClass = value;
  }
  /**
   * The target property is an input that specifies the target element or selector for the component.
   * @defaultValue null
   * @group Props
   */
  get target() {
    const value = this._target || this.overlayOptions?.target;
    return value === void 0 ? "@prev" : value;
  }
  set target(value) {
    this._target = value;
  }
  /**
   * The autoZIndex determines whether to automatically manage layering. Its default value is 'false'.
   * @defaultValue false
   * @group Props
   */
  get autoZIndex() {
    const value = this._autoZIndex || this.overlayOptions?.autoZIndex;
    return value === void 0 ? true : value;
  }
  set autoZIndex(value) {
    this._autoZIndex = value;
  }
  /**
   * The baseZIndex is base zIndex value to use in layering.
   * @defaultValue null
   * @group Props
   */
  get baseZIndex() {
    const value = this._baseZIndex || this.overlayOptions?.baseZIndex;
    return value === void 0 ? 0 : value;
  }
  set baseZIndex(value) {
    this._baseZIndex = value;
  }
  /**
   * Transition options of the show or hide animation.
   * @defaultValue .12s cubic-bezier(0, 0, 0.2, 1)
   * @group Props
   */
  get showTransitionOptions() {
    const value = this._showTransitionOptions || this.overlayOptions?.showTransitionOptions;
    return value === void 0 ? ".12s cubic-bezier(0, 0, 0.2, 1)" : value;
  }
  set showTransitionOptions(value) {
    this._showTransitionOptions = value;
  }
  /**
   * The hideTransitionOptions property is an input that determines the CSS transition options for hiding the component.
   * @defaultValue .1s linear
   * @group Props
   */
  get hideTransitionOptions() {
    const value = this._hideTransitionOptions || this.overlayOptions?.hideTransitionOptions;
    return value === void 0 ? ".1s linear" : value;
  }
  set hideTransitionOptions(value) {
    this._hideTransitionOptions = value;
  }
  /**
   * The listener property is an input that specifies the listener object for the component.
   * @defaultValue null
   * @group Props
   */
  get listener() {
    return this._listener || this.overlayOptions?.listener;
  }
  set listener(value) {
    this._listener = value;
  }
  /**
   * It is the option used to determine in which mode it should appear according to the given media or breakpoint.
   * @defaultValue null
   * @group Props
   */
  get responsive() {
    return this._responsive || this.overlayOptions?.responsive;
  }
  set responsive(val) {
    this._responsive = val;
  }
  /**
   * The options property is an input that specifies the overlay options for the component.
   * @defaultValue null
   * @group Props
   */
  get options() {
    return this._options;
  }
  set options(val) {
    this._options = val;
  }
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input(void 0, ...ngDevMode ? [{
    debugName: "appendTo"
  }] : []);
  /**
   * This EventEmitter is used to notify changes in the visibility state of a component.
   * @param {Boolean} boolean - Value of visibility as boolean.
   * @group Emits
   */
  visibleChange = new EventEmitter();
  /**
   * Callback to invoke before the overlay is shown.
   * @param {OverlayOnBeforeShowEvent} event - Custom overlay before show event.
   * @group Emits
   */
  onBeforeShow = new EventEmitter();
  /**
   * Callback to invoke when the overlay is shown.
   * @param {OverlayOnShowEvent} event - Custom overlay show event.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke before the overlay is hidden.
   * @param {OverlayOnBeforeHideEvent} event - Custom overlay before hide event.
   * @group Emits
   */
  onBeforeHide = new EventEmitter();
  /**
   * Callback to invoke when the overlay is hidden
   * @param {OverlayOnHideEvent} event - Custom hide event.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when the animation is started.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onAnimationStart = new EventEmitter();
  /**
   * Callback to invoke when the animation is done.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onAnimationDone = new EventEmitter();
  overlayViewChild;
  contentViewChild;
  /**
   * Content template of the component.
   * @group Templates
   */
  contentTemplate;
  templates;
  hostAttrSelector = input(...ngDevMode ? [void 0, {
    debugName: "hostAttrSelector"
  }] : []);
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : []);
  _contentTemplate;
  _visible = false;
  _mode;
  _style;
  _styleClass;
  _contentStyle;
  _contentStyleClass;
  _target;
  _autoZIndex;
  _baseZIndex;
  _showTransitionOptions;
  _hideTransitionOptions;
  _listener;
  _responsive;
  _options;
  modalVisible = false;
  isOverlayClicked = false;
  isOverlayContentClicked = false;
  scrollHandler;
  documentClickListener;
  documentResizeListener;
  _componentStyle = inject(OverlayStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  documentKeyboardListener;
  window;
  transformOptions = {
    default: "scaleY(0.8)",
    center: "scale(0.7)",
    top: "translate3d(0px, -100%, 0px)",
    "top-start": "translate3d(0px, -100%, 0px)",
    "top-end": "translate3d(0px, -100%, 0px)",
    bottom: "translate3d(0px, 100%, 0px)",
    "bottom-start": "translate3d(0px, 100%, 0px)",
    "bottom-end": "translate3d(0px, 100%, 0px)",
    left: "translate3d(-100%, 0px, 0px)",
    "left-start": "translate3d(-100%, 0px, 0px)",
    "left-end": "translate3d(-100%, 0px, 0px)",
    right: "translate3d(100%, 0px, 0px)",
    "right-start": "translate3d(100%, 0px, 0px)",
    "right-end": "translate3d(100%, 0px, 0px)"
  };
  get modal() {
    if (isPlatformBrowser(this.platformId)) {
      return this.mode === "modal" || this.overlayResponsiveOptions && this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media", "") || `(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches;
    }
  }
  get overlayMode() {
    return this.mode || (this.modal ? "modal" : "overlay");
  }
  get overlayOptions() {
    return __spreadValues(__spreadValues({}, this.config?.overlayOptions), this.options);
  }
  get overlayResponsiveOptions() {
    return __spreadValues(__spreadValues({}, this.overlayOptions?.responsive), this.responsive);
  }
  get overlayResponsiveDirection() {
    return this.overlayResponsiveOptions?.direction || "center";
  }
  get overlayEl() {
    return this.overlayViewChild?.nativeElement;
  }
  get contentEl() {
    return this.contentViewChild?.nativeElement;
  }
  get targetEl() {
    return j(this.target, this.el?.nativeElement);
  }
  constructor(overlayService, zone) {
    super();
    this.overlayService = overlayService;
    this.zone = zone;
  }
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        // TODO: new template types may be added.
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("host"));
  }
  show(overlay, isFocus = false) {
    this.onVisibleChange(true);
    this.handleEvents("onShow", {
      overlay: overlay || this.overlayEl,
      target: this.targetEl,
      mode: this.overlayMode
    });
    isFocus && bt(this.targetEl);
    this.modal && W(this.document?.body, "p-overflow-hidden");
  }
  hide(overlay, isFocus = false) {
    if (!this.visible) {
      return;
    } else {
      this.onVisibleChange(false);
      this.handleEvents("onHide", {
        overlay: overlay || this.overlayEl,
        target: this.targetEl,
        mode: this.overlayMode
      });
      isFocus && bt(this.targetEl);
      this.modal && P(this.document?.body, "p-overflow-hidden");
    }
  }
  alignOverlay() {
    !this.modal && DomHandler.alignOverlay(this.overlayEl, this.targetEl, this.$appendTo());
  }
  onVisibleChange(visible) {
    this._visible = visible;
    this.visibleChange.emit(visible);
  }
  onOverlayClick() {
    this.isOverlayClicked = true;
  }
  onOverlayContentClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.targetEl
    });
    this.isOverlayContentClicked = true;
  }
  onOverlayContentAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.handleEvents("onBeforeShow", {
          overlay: this.overlayEl,
          target: this.targetEl,
          mode: this.overlayMode
        });
        if (this.autoZIndex) {
          zindexutils.set(this.overlayMode, this.overlayEl, this.baseZIndex + this.config?.zIndex[this.overlayMode]);
        }
        this.hostAttrSelector() && this.overlayEl && this.overlayEl.setAttribute(this.hostAttrSelector(), "");
        DomHandler.appendOverlay(this.overlayEl, this.$appendTo() === "body" ? this.document.body : this.$appendTo(), this.$appendTo());
        this.alignOverlay();
        break;
      case "void":
        this.handleEvents("onBeforeHide", {
          overlay: this.overlayEl,
          target: this.targetEl,
          mode: this.overlayMode
        });
        this.modal && W(this.overlayEl, "p-overlay-mask-leave");
        break;
    }
    this.handleEvents("onAnimationStart", event);
  }
  onOverlayContentAnimationDone(event) {
    const container = this.overlayEl || event.element.parentElement;
    switch (event.toState) {
      case "visible":
        if (this.visible) {
          this.show(container, true);
          this.bindListeners();
        }
        break;
      case "void":
        if (!this.visible) {
          this.hide(container, true);
          this.modalVisible = false;
          this.unbindListeners();
          DomHandler.appendOverlay(this.overlayEl, this.targetEl, this.$appendTo());
          zindexutils.clear(container);
          this.cd.markForCheck();
          break;
        }
    }
    this.handleEvents("onAnimationDone", event);
  }
  handleEvents(name, params) {
    this[name].emit(params);
    this.options && this.options[name] && this.options[name](params);
    this.config?.overlayOptions && (this.config?.overlayOptions)[name] && (this.config?.overlayOptions)[name](params);
  }
  bindListeners() {
    this.bindScrollListener();
    this.bindDocumentClickListener();
    this.bindDocumentResizeListener();
    this.bindDocumentKeyboardListener();
  }
  unbindListeners() {
    this.unbindScrollListener();
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindDocumentKeyboardListener();
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.targetEl, (event) => {
        const valid = this.listener ? this.listener(event, {
          type: "scroll",
          mode: this.overlayMode,
          valid: true
        }) : true;
        valid && this.hide(event, true);
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      this.documentClickListener = this.renderer.listen(this.document, "click", (event) => {
        const isTargetClicked = this.targetEl && (this.targetEl.isSameNode(event.target) || !this.isOverlayClicked && this.targetEl.contains(event.target));
        const isOutsideClicked = !isTargetClicked && !this.isOverlayContentClicked;
        const valid = this.listener ? this.listener(event, {
          type: "outside",
          mode: this.overlayMode,
          valid: event.which !== 3 && isOutsideClicked
        }) : isOutsideClicked;
        valid && this.hide(event);
        this.isOverlayClicked = this.isOverlayContentClicked = false;
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener) {
      this.documentResizeListener = this.renderer.listen(this.document.defaultView, "resize", (event) => {
        const valid = this.listener ? this.listener(event, {
          type: "resize",
          mode: this.overlayMode,
          valid: !Yt()
        }) : !Yt();
        valid && this.hide(event, true);
      });
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindDocumentKeyboardListener() {
    if (this.documentKeyboardListener) {
      return;
    }
    this.zone.runOutsideAngular(() => {
      this.documentKeyboardListener = this.renderer.listen(this.document.defaultView, "keydown", (event) => {
        if (this.overlayOptions.hideOnEscape === false || event.code !== "Escape") {
          return;
        }
        const valid = this.listener ? this.listener(event, {
          type: "keydown",
          mode: this.overlayMode,
          valid: !Yt()
        }) : !Yt();
        if (valid) {
          this.zone.run(() => {
            this.hide(event, true);
          });
        }
      });
    });
  }
  unbindDocumentKeyboardListener() {
    if (this.documentKeyboardListener) {
      this.documentKeyboardListener();
      this.documentKeyboardListener = null;
    }
  }
  onDestroy() {
    this.hide(this.overlayEl, true);
    if (this.overlayEl && this.$appendTo() !== "self") {
      this.renderer.appendChild(this.el.nativeElement, this.overlayEl);
      zindexutils.clear(this.overlayEl);
    }
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    this.unbindListeners();
  }
  static ɵfac = function Overlay_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Overlay)(ɵɵdirectiveInject(OverlayService), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Overlay,
    selectors: [["p-overlay"]],
    contentQueries: function Overlay_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c03, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Overlay_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c1, 5);
        ɵɵviewQuery(_c03, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlayViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentViewChild = _t.first);
      }
    },
    inputs: {
      hostName: "hostName",
      visible: "visible",
      mode: "mode",
      style: "style",
      styleClass: "styleClass",
      contentStyle: "contentStyle",
      contentStyleClass: "contentStyleClass",
      target: "target",
      autoZIndex: "autoZIndex",
      baseZIndex: "baseZIndex",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      listener: "listener",
      responsive: "responsive",
      options: "options",
      appendTo: [1, "appendTo"],
      hostAttrSelector: [1, "hostAttrSelector"]
    },
    outputs: {
      visibleChange: "visibleChange",
      onBeforeShow: "onBeforeShow",
      onShow: "onShow",
      onBeforeHide: "onBeforeHide",
      onHide: "onHide",
      onAnimationStart: "onAnimationStart",
      onAnimationDone: "onAnimationDone"
    },
    features: [ɵɵProvidersFeature([OverlayStyle, {
      provide: OVERLAY_INSTANCE,
      useExisting: _Overlay
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Overlay
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c2,
    decls: 1,
    vars: 1,
    consts: [["overlay", ""], ["content", ""], [3, "class", "pBind", "click", 4, "ngIf"], [3, "click", "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function Overlay_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, Overlay_div_0_Template, 3, 4, "div", 2);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.modalVisible);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, SharedModule, Bind],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayContentAnimation", [transition(":enter", [useAnimation(showOverlayContentAnimation)]), transition(":leave", [useAnimation(hideOverlayContentAnimation)])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Overlay, [{
    type: Component,
    args: [{
      selector: "p-overlay",
      standalone: true,
      imports: [CommonModule, SharedModule, Bind],
      hostDirectives: [Bind],
      template: `
        <div *ngIf="modalVisible" #overlay [class]="cn(cx('root'), styleClass)" [pBind]="ptm('root')" (click)="onOverlayClick()">
            <div
                *ngIf="visible"
                #content
                [class]="cn(cx('content'), contentStyleClass)"
                [pBind]="ptm('content')"
                (click)="onOverlayContentClick($event)"
                [@overlayContentAnimation]="{
                    value: 'visible',
                    params: {
                        showTransitionParams: showTransitionOptions,
                        hideTransitionParams: hideTransitionOptions,
                        transform: transformOptions[modal ? overlayResponsiveDirection : 'default']
                    }
                }"
                (@overlayContentAnimation.start)="onOverlayContentAnimationStart($event)"
                (@overlayContentAnimation.done)="onOverlayContentAnimationDone($event)"
            >
                <ng-content></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: { mode: overlayMode } }"></ng-container>
            </div>
        </div>
    `,
      animations: [trigger("overlayContentAnimation", [transition(":enter", [useAnimation(showOverlayContentAnimation)]), transition(":leave", [useAnimation(hideOverlayContentAnimation)])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [OverlayStyle, {
        provide: OVERLAY_INSTANCE,
        useExisting: Overlay
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Overlay
      }]
    }]
  }], () => [{
    type: OverlayService
  }, {
    type: NgZone
  }], {
    hostName: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    contentStyle: [{
      type: Input
    }],
    contentStyleClass: [{
      type: Input
    }],
    target: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    listener: [{
      type: Input
    }],
    responsive: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    appendTo: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "appendTo",
        required: false
      }]
    }],
    visibleChange: [{
      type: Output
    }],
    onBeforeShow: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onBeforeHide: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onAnimationStart: [{
      type: Output
    }],
    onAnimationDone: [{
      type: Output
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    hostAttrSelector: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "hostAttrSelector",
        required: false
      }]
    }]
  });
})();
var OverlayModule = class _OverlayModule {
  static ɵfac = function OverlayModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _OverlayModule,
    imports: [Overlay, SharedModule],
    exports: [Overlay, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Overlay, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayModule, [{
    type: NgModule,
    args: [{
      imports: [Overlay, SharedModule],
      exports: [Overlay, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/tooltip/index.mjs
var style4 = "\n    .p-tooltip {\n        position: absolute;\n        display: none;\n        max-width: dt('tooltip.max.width');\n    }\n\n    .p-tooltip-right,\n    .p-tooltip-left {\n        padding: 0 dt('tooltip.gutter');\n    }\n\n    .p-tooltip-top,\n    .p-tooltip-bottom {\n        padding: dt('tooltip.gutter') 0;\n    }\n\n    .p-tooltip-text {\n        white-space: pre-line;\n        word-break: break-word;\n        background: dt('tooltip.background');\n        color: dt('tooltip.color');\n        padding: dt('tooltip.padding');\n        box-shadow: dt('tooltip.shadow');\n        border-radius: dt('tooltip.border.radius');\n    }\n\n    .p-tooltip-arrow {\n        position: absolute;\n        width: 0;\n        height: 0;\n        border-color: transparent;\n        border-style: solid;\n    }\n\n    .p-tooltip-right .p-tooltip-arrow {\n        margin-top: calc(-1 * dt('tooltip.gutter'));\n        border-width: dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter') 0;\n        border-right-color: dt('tooltip.background');\n    }\n\n    .p-tooltip-left .p-tooltip-arrow {\n        margin-top: calc(-1 * dt('tooltip.gutter'));\n        border-width: dt('tooltip.gutter') 0 dt('tooltip.gutter') dt('tooltip.gutter');\n        border-left-color: dt('tooltip.background');\n    }\n\n    .p-tooltip-top .p-tooltip-arrow {\n        margin-left: calc(-1 * dt('tooltip.gutter'));\n        border-width: dt('tooltip.gutter') dt('tooltip.gutter') 0 dt('tooltip.gutter');\n        border-top-color: dt('tooltip.background');\n        border-bottom-color: dt('tooltip.background');\n    }\n\n    .p-tooltip-bottom .p-tooltip-arrow {\n        margin-left: calc(-1 * dt('tooltip.gutter'));\n        border-width: 0 dt('tooltip.gutter') dt('tooltip.gutter') dt('tooltip.gutter');\n        border-top-color: dt('tooltip.background');\n        border-bottom-color: dt('tooltip.background');\n    }\n";

// node_modules/primeng/fesm2022/primeng-tooltip.mjs
var classes4 = {
  root: "p-tooltip p-component",
  arrow: "p-tooltip-arrow",
  text: "p-tooltip-text"
};
var TooltipStyle = class _TooltipStyle extends BaseStyle {
  name = "tooltip";
  style = style4;
  classes = classes4;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTooltipStyle_BaseFactory;
    return function TooltipStyle_Factory(__ngFactoryType__) {
      return (ɵTooltipStyle_BaseFactory || (ɵTooltipStyle_BaseFactory = ɵɵgetInheritedFactory(_TooltipStyle)))(__ngFactoryType__ || _TooltipStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _TooltipStyle,
    factory: _TooltipStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipStyle, [{
    type: Injectable
  }], null, null);
})();
var TooltipClasses;
(function(TooltipClasses2) {
  TooltipClasses2["root"] = "p-tooltip";
  TooltipClasses2["arrow"] = "p-tooltip-arrow";
  TooltipClasses2["text"] = "p-tooltip-text";
})(TooltipClasses || (TooltipClasses = {}));
var TOOLTIP_INSTANCE = new InjectionToken("TOOLTIP_INSTANCE");
var Tooltip = class _Tooltip extends BaseComponent {
  zone;
  viewContainer;
  $pcTooltip = inject(TOOLTIP_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition;
  /**
   * Event to show the tooltip.
   * @group Props
   */
  tooltipEvent = "hover";
  /**
   * Type of CSS position.
   * @group Props
   */
  positionStyle;
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Whether the z-index should be managed automatically to always go on top or have a fixed value.
   * @group Props
   */
  tooltipZIndex;
  /**
   * By default the tooltip contents are rendered as text. Set to false to support html tags in the content.
   * @group Props
   */
  escape = true;
  /**
   * Delay to show the tooltip in milliseconds.
   * @group Props
   */
  showDelay;
  /**
   * Delay to hide the tooltip in milliseconds.
   * @group Props
   */
  hideDelay;
  /**
   * Time to wait in milliseconds to hide the tooltip even it is active.
   * @group Props
   */
  life;
  /**
   * Specifies the additional vertical offset of the tooltip from its default position.
   * @group Props
   */
  positionTop;
  /**
   * Specifies the additional horizontal offset of the tooltip from its default position.
   * @group Props
   */
  positionLeft;
  /**
   * Whether to hide tooltip when hovering over tooltip content.
   * @group Props
   */
  autoHide = true;
  /**
   * Automatically adjusts the element position when there is not enough space on the selected position.
   * @group Props
   */
  fitContent = true;
  /**
   * Whether to hide tooltip on escape key press.
   * @group Props
   */
  hideOnEscape = true;
  /**
   * Content of the tooltip.
   * @group Props
   */
  content;
  /**
   * When present, it specifies that the component should be disabled.
   * @defaultValue false
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(val) {
    this._disabled = val;
    this.deactivate();
  }
  /**
   * Specifies the tooltip configuration options for the component.
   * @group Props
   */
  tooltipOptions;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input(void 0, ...ngDevMode ? [{
    debugName: "appendTo"
  }] : []);
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : []);
  _tooltipOptions = {
    tooltipLabel: null,
    tooltipPosition: "right",
    tooltipEvent: "hover",
    appendTo: "body",
    positionStyle: null,
    tooltipStyleClass: null,
    tooltipZIndex: "auto",
    escape: true,
    disabled: null,
    showDelay: null,
    hideDelay: null,
    positionTop: null,
    positionLeft: null,
    life: null,
    autoHide: true,
    hideOnEscape: true,
    id: s2("pn_id_") + "_tooltip"
  };
  _disabled;
  container;
  styleClass;
  tooltipText;
  rootPTClasses = "";
  showTimeout;
  hideTimeout;
  active;
  mouseEnterListener;
  mouseLeaveListener;
  containerMouseleaveListener;
  clickListener;
  focusListener;
  blurListener;
  documentEscapeListener;
  scrollHandler;
  resizeListener;
  _componentStyle = inject(TooltipStyle);
  interactionInProgress = false;
  ptTooltip = input(...ngDevMode ? [void 0, {
    debugName: "ptTooltip"
  }] : []);
  constructor(zone, viewContainer) {
    super();
    this.zone = zone;
    this.viewContainer = viewContainer;
    effect(() => {
      this.ptTooltip() && this.directivePT.set(this.ptTooltip());
    });
  }
  onAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        const tooltipEvent = this.getOption("tooltipEvent");
        if (tooltipEvent === "hover" || tooltipEvent === "both") {
          this.mouseEnterListener = this.onMouseEnter.bind(this);
          this.mouseLeaveListener = this.onMouseLeave.bind(this);
          this.clickListener = this.onInputClick.bind(this);
          this.el.nativeElement.addEventListener("mouseenter", this.mouseEnterListener);
          this.el.nativeElement.addEventListener("click", this.clickListener);
          this.el.nativeElement.addEventListener("mouseleave", this.mouseLeaveListener);
        }
        if (tooltipEvent === "focus" || tooltipEvent === "both") {
          this.focusListener = this.onFocus.bind(this);
          this.blurListener = this.onBlur.bind(this);
          let target = this.el.nativeElement.querySelector(".p-component");
          if (!target) {
            target = this.getTarget(this.el.nativeElement);
          }
          target.addEventListener("focus", this.focusListener);
          target.addEventListener("blur", this.blurListener);
        }
      });
    }
  }
  onChanges(simpleChange) {
    if (simpleChange.tooltipPosition) {
      this.setOption({
        tooltipPosition: simpleChange.tooltipPosition.currentValue
      });
    }
    if (simpleChange.tooltipEvent) {
      this.setOption({
        tooltipEvent: simpleChange.tooltipEvent.currentValue
      });
    }
    if (simpleChange.appendTo) {
      this.setOption({
        appendTo: simpleChange.appendTo.currentValue
      });
    }
    if (simpleChange.positionStyle) {
      this.setOption({
        positionStyle: simpleChange.positionStyle.currentValue
      });
    }
    if (simpleChange.tooltipStyleClass) {
      this.setOption({
        tooltipStyleClass: simpleChange.tooltipStyleClass.currentValue
      });
    }
    if (simpleChange.tooltipZIndex) {
      this.setOption({
        tooltipZIndex: simpleChange.tooltipZIndex.currentValue
      });
    }
    if (simpleChange.escape) {
      this.setOption({
        escape: simpleChange.escape.currentValue
      });
    }
    if (simpleChange.showDelay) {
      this.setOption({
        showDelay: simpleChange.showDelay.currentValue
      });
    }
    if (simpleChange.hideDelay) {
      this.setOption({
        hideDelay: simpleChange.hideDelay.currentValue
      });
    }
    if (simpleChange.life) {
      this.setOption({
        life: simpleChange.life.currentValue
      });
    }
    if (simpleChange.positionTop) {
      this.setOption({
        positionTop: simpleChange.positionTop.currentValue
      });
    }
    if (simpleChange.positionLeft) {
      this.setOption({
        positionLeft: simpleChange.positionLeft.currentValue
      });
    }
    if (simpleChange.disabled) {
      this.setOption({
        disabled: simpleChange.disabled.currentValue
      });
    }
    if (simpleChange.content) {
      this.setOption({
        tooltipLabel: simpleChange.content.currentValue
      });
      if (this.active) {
        if (simpleChange.content.currentValue) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
    if (simpleChange.autoHide) {
      this.setOption({
        autoHide: simpleChange.autoHide.currentValue
      });
    }
    if (simpleChange.id) {
      this.setOption({
        id: simpleChange.id.currentValue
      });
    }
    if (simpleChange.tooltipOptions) {
      this._tooltipOptions = __spreadValues(__spreadValues({}, this._tooltipOptions), simpleChange.tooltipOptions.currentValue);
      this.deactivate();
      if (this.active) {
        if (this.getOption("tooltipLabel")) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
  }
  isAutoHide() {
    return this.getOption("autoHide");
  }
  onMouseEnter(e) {
    if (!this.container && !this.showTimeout) {
      this.activate();
    }
  }
  onMouseLeave(e) {
    if (!this.isAutoHide()) {
      const valid = R(e.relatedTarget, "p-tooltip") || R(e.relatedTarget, "p-tooltip-text") || R(e.relatedTarget, "p-tooltip-arrow");
      !valid && this.deactivate();
    } else {
      this.deactivate();
    }
  }
  onFocus(e) {
    this.activate();
  }
  onBlur(e) {
    this.deactivate();
  }
  onInputClick(e) {
    this.deactivate();
  }
  activate() {
    if (!this.interactionInProgress) {
      this.active = true;
      this.clearHideTimeout();
      if (this.getOption("showDelay")) this.showTimeout = setTimeout(() => {
        this.show();
      }, this.getOption("showDelay"));
      else this.show();
      if (this.getOption("life")) {
        let duration = this.getOption("showDelay") ? this.getOption("life") + this.getOption("showDelay") : this.getOption("life");
        this.hideTimeout = setTimeout(() => {
          this.hide();
        }, duration);
      }
      if (this.getOption("hideOnEscape")) {
        this.documentEscapeListener = this.renderer.listen("document", "keydown.escape", () => {
          this.deactivate();
          this.documentEscapeListener?.();
        });
      }
      this.interactionInProgress = true;
    }
  }
  deactivate() {
    this.interactionInProgress = false;
    this.active = false;
    this.clearShowTimeout();
    if (this.getOption("hideDelay")) {
      this.clearHideTimeout();
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, this.getOption("hideDelay"));
    } else {
      this.hide();
    }
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
    }
  }
  create() {
    if (this.container) {
      this.clearHideTimeout();
      this.remove();
    }
    this.container = U("div", {
      class: this.cx("root"),
      role: "tooltip",
      "p-bind": this.ptm("root"),
      "data-pc-section": "root"
    });
    let tooltipArrow = U("div", {
      class: "p-tooltip-arrow",
      "p-bind": this.ptm("arrow"),
      "data-pc-section": "arrow"
    });
    this.container.appendChild(tooltipArrow);
    this.tooltipText = U("div", {
      class: "p-tooltip-text",
      "p-bind": this.ptm("text"),
      "data-pc-section": "text"
    });
    this.updateText();
    if (this.getOption("positionStyle")) {
      this.container.style.position = this.getOption("positionStyle");
    }
    this.container.appendChild(this.tooltipText);
    if (this.getOption("appendTo") === "body") document.body.appendChild(this.container);
    else if (this.getOption("appendTo") === "target") ut(this.container, this.el.nativeElement);
    else ut(this.getOption("appendTo"), this.container);
    this.container.style.display = "none";
    if (this.fitContent) {
      this.container.style.width = "fit-content";
    }
    if (this.isAutoHide()) {
      this.container.style.pointerEvents = "none";
    } else {
      this.container.style.pointerEvents = "unset";
      this.bindContainerMouseleaveListener();
    }
  }
  bindContainerMouseleaveListener() {
    if (!this.containerMouseleaveListener) {
      const targetEl = this.container ?? this.container.nativeElement;
      this.containerMouseleaveListener = this.renderer.listen(targetEl, "mouseleave", (e) => {
        this.deactivate();
      });
    }
  }
  unbindContainerMouseleaveListener() {
    if (this.containerMouseleaveListener) {
      this.bindContainerMouseleaveListener();
      this.containerMouseleaveListener = null;
    }
  }
  show() {
    if (!this.getOption("tooltipLabel") || this.getOption("disabled")) {
      return;
    }
    this.create();
    const nativeElement = this.el.nativeElement;
    const pDialogWrapper = nativeElement.closest("p-dialog");
    if (pDialogWrapper) {
      setTimeout(() => {
        this.container && (this.container.style.display = "inline-block");
        this.container && this.align();
      }, 100);
    } else {
      this.container.style.display = "inline-block";
      this.align();
    }
    ht(this.container, 250);
    if (this.getOption("tooltipZIndex") === "auto") zindexutils.set("tooltip", this.container, this.config.zIndex.tooltip);
    else this.container.style.zIndex = this.getOption("tooltipZIndex");
    this.bindDocumentResizeListener();
    this.bindScrollListener();
  }
  hide() {
    if (this.getOption("tooltipZIndex") === "auto") {
      zindexutils.clear(this.container);
    }
    this.remove();
  }
  updateText() {
    const content = this.getOption("tooltipLabel");
    if (content && typeof content.createEmbeddedView === "function") {
      const embeddedViewRef = this.viewContainer.createEmbeddedView(content);
      embeddedViewRef.detectChanges();
      embeddedViewRef.rootNodes.forEach((node) => this.tooltipText.appendChild(node));
    } else if (this.getOption("escape")) {
      this.tooltipText.innerHTML = "";
      this.tooltipText.appendChild(document.createTextNode(content));
    } else {
      this.tooltipText.innerHTML = content;
    }
  }
  align() {
    const position = this.getOption("tooltipPosition");
    const positionPriority = {
      top: [this.alignTop, this.alignBottom, this.alignRight, this.alignLeft],
      bottom: [this.alignBottom, this.alignTop, this.alignRight, this.alignLeft],
      left: [this.alignLeft, this.alignRight, this.alignTop, this.alignBottom],
      right: [this.alignRight, this.alignLeft, this.alignTop, this.alignBottom]
    };
    const alignFns = positionPriority[position] || [];
    for (let [index, alignmentFn] of alignFns.entries()) {
      if (index === 0) alignmentFn.call(this);
      else if (this.isOutOfBounds()) alignmentFn.call(this);
      else break;
    }
  }
  getHostOffset() {
    if (this.getOption("appendTo") === "body" || this.getOption("appendTo") === "target") {
      let offset = this.el.nativeElement.getBoundingClientRect();
      let targetLeft = offset.left + k();
      let targetTop = offset.top + $();
      return {
        left: targetLeft,
        top: targetTop
      };
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  get activeElement() {
    return this.el.nativeElement.nodeName.startsWith("P-") ? z(this.el.nativeElement, ".p-component") : this.el.nativeElement;
  }
  alignRight() {
    this.preAlign("right");
    const el = this.activeElement;
    const offsetLeft = v(el);
    const offsetTop = (C(el) - C(this.container)) / 2;
    this.alignTooltip(offsetLeft, offsetTop);
    let arrowElement = this.getArrowElement();
    arrowElement.style.top = "50%";
    arrowElement.style.right = null;
    arrowElement.style.bottom = null;
    arrowElement.style.left = "0";
  }
  alignLeft() {
    this.preAlign("left");
    let arrowElement = this.getArrowElement();
    let offsetLeft = v(this.container);
    let offsetTop = (C(this.el.nativeElement) - C(this.container)) / 2;
    this.alignTooltip(-offsetLeft, offsetTop);
    arrowElement.style.top = "50%";
    arrowElement.style.right = "0";
    arrowElement.style.bottom = null;
    arrowElement.style.left = null;
  }
  alignTop() {
    this.preAlign("top");
    let arrowElement = this.getArrowElement();
    let hostOffset = this.getHostOffset();
    let elementWidth = v(this.container);
    let offsetLeft = (v(this.el.nativeElement) - v(this.container)) / 2;
    let offsetTop = C(this.container);
    this.alignTooltip(offsetLeft, -offsetTop);
    let elementRelativeCenter = hostOffset.left - this.getHostOffset().left + elementWidth / 2;
    arrowElement.style.top = null;
    arrowElement.style.right = null;
    arrowElement.style.bottom = "0";
    arrowElement.style.left = elementRelativeCenter + "px";
  }
  getArrowElement() {
    return z(this.container, '[data-pc-section="arrow"]');
  }
  alignBottom() {
    this.preAlign("bottom");
    let arrowElement = this.getArrowElement();
    let elementWidth = v(this.container);
    let hostOffset = this.getHostOffset();
    let offsetLeft = (v(this.el.nativeElement) - v(this.container)) / 2;
    let offsetTop = C(this.el.nativeElement);
    this.alignTooltip(offsetLeft, offsetTop);
    let elementRelativeCenter = hostOffset.left - this.getHostOffset().left + elementWidth / 2;
    arrowElement.style.top = "0";
    arrowElement.style.right = null;
    arrowElement.style.bottom = null;
    arrowElement.style.left = elementRelativeCenter + "px";
  }
  alignTooltip(offsetLeft, offsetTop) {
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + offsetLeft;
    let top = hostOffset.top + offsetTop;
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  setOption(option) {
    this._tooltipOptions = __spreadValues(__spreadValues({}, this._tooltipOptions), option);
  }
  getOption(option) {
    return this._tooltipOptions[option];
  }
  getTarget(el) {
    return R(el, "p-inputwrapper") ? z(el, "input") : el;
  }
  preAlign(position) {
    this.container.style.left = "-999px";
    this.container.style.top = "-999px";
    this.container.className = this.cn(this.cx("root"), this.ptm("root")?.class, "p-tooltip-" + position, this.getOption("tooltipStyleClass"));
  }
  isOutOfBounds() {
    let offset = this.container.getBoundingClientRect();
    let targetTop = offset.top;
    let targetLeft = offset.left;
    let width = v(this.container);
    let height = C(this.container);
    let viewport = h();
    return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
  }
  onWindowResize(e) {
    this.hide();
  }
  bindDocumentResizeListener() {
    this.zone.runOutsideAngular(() => {
      this.resizeListener = this.onWindowResize.bind(this);
      window.addEventListener("resize", this.resizeListener);
    });
  }
  unbindDocumentResizeListener() {
    if (this.resizeListener) {
      window.removeEventListener("resize", this.resizeListener);
      this.resizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
        if (this.container) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unbindEvents() {
    const tooltipEvent = this.getOption("tooltipEvent");
    if (tooltipEvent === "hover" || tooltipEvent === "both") {
      this.el.nativeElement.removeEventListener("mouseenter", this.mouseEnterListener);
      this.el.nativeElement.removeEventListener("mouseleave", this.mouseLeaveListener);
      this.el.nativeElement.removeEventListener("click", this.clickListener);
    }
    if (tooltipEvent === "focus" || tooltipEvent === "both") {
      let target = this.el.nativeElement.querySelector(".p-component");
      if (!target) {
        target = this.getTarget(this.el.nativeElement);
      }
      target.removeEventListener("focus", this.focusListener);
      target.removeEventListener("blur", this.blurListener);
    }
    this.unbindDocumentResizeListener();
  }
  remove() {
    if (this.container && this.container.parentElement) {
      if (this.getOption("appendTo") === "body") document.body.removeChild(this.container);
      else if (this.getOption("appendTo") === "target") this.el.nativeElement.removeChild(this.container);
      else Gt(this.getOption("appendTo"), this.container);
    }
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.unbindContainerMouseleaveListener();
    this.clearTimeouts();
    this.container = null;
    this.scrollHandler = null;
  }
  clearShowTimeout() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
  }
  clearHideTimeout() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
  clearTimeouts() {
    this.clearShowTimeout();
    this.clearHideTimeout();
  }
  onDestroy() {
    this.unbindEvents();
    if (this.container) {
      zindexutils.clear(this.container);
    }
    this.remove();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
    }
  }
  static ɵfac = function Tooltip_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Tooltip)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ViewContainerRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Tooltip,
    selectors: [["", "pTooltip", ""]],
    inputs: {
      tooltipPosition: "tooltipPosition",
      tooltipEvent: "tooltipEvent",
      positionStyle: "positionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      tooltipZIndex: "tooltipZIndex",
      escape: [2, "escape", "escape", booleanAttribute],
      showDelay: [2, "showDelay", "showDelay", numberAttribute],
      hideDelay: [2, "hideDelay", "hideDelay", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      positionTop: [2, "positionTop", "positionTop", numberAttribute],
      positionLeft: [2, "positionLeft", "positionLeft", numberAttribute],
      autoHide: [2, "autoHide", "autoHide", booleanAttribute],
      fitContent: [2, "fitContent", "fitContent", booleanAttribute],
      hideOnEscape: [2, "hideOnEscape", "hideOnEscape", booleanAttribute],
      content: [0, "pTooltip", "content"],
      disabled: [0, "tooltipDisabled", "disabled"],
      tooltipOptions: "tooltipOptions",
      appendTo: [1, "appendTo"],
      ptTooltip: [1, "ptTooltip"]
    },
    features: [ɵɵProvidersFeature([TooltipStyle, {
      provide: TOOLTIP_INSTANCE,
      useExisting: _Tooltip
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Tooltip
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tooltip, [{
    type: Directive,
    args: [{
      selector: "[pTooltip]",
      standalone: true,
      providers: [TooltipStyle, {
        provide: TOOLTIP_INSTANCE,
        useExisting: Tooltip
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Tooltip
      }]
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ViewContainerRef
  }], {
    tooltipPosition: [{
      type: Input
    }],
    tooltipEvent: [{
      type: Input
    }],
    positionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    tooltipZIndex: [{
      type: Input
    }],
    escape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    hideDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    positionTop: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    positionLeft: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    autoHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fitContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    content: [{
      type: Input,
      args: ["pTooltip"]
    }],
    disabled: [{
      type: Input,
      args: ["tooltipDisabled"]
    }],
    tooltipOptions: [{
      type: Input
    }],
    appendTo: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "appendTo",
        required: false
      }]
    }],
    ptTooltip: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "ptTooltip",
        required: false
      }]
    }]
  });
})();
var TooltipModule = class _TooltipModule {
  static ɵfac = function TooltipModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TooltipModule,
    imports: [Tooltip, BindModule],
    exports: [Tooltip, BindModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [BindModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipModule, [{
    type: NgModule,
    args: [{
      imports: [Tooltip, BindModule],
      exports: [Tooltip, BindModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/select/index.mjs
var style5 = "\n    .p-select {\n        display: inline-flex;\n        cursor: pointer;\n        position: relative;\n        user-select: none;\n        background: dt('select.background');\n        border: 1px solid dt('select.border.color');\n        transition:\n            background dt('select.transition.duration'),\n            color dt('select.transition.duration'),\n            border-color dt('select.transition.duration'),\n            outline-color dt('select.transition.duration'),\n            box-shadow dt('select.transition.duration');\n        border-radius: dt('select.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('select.shadow');\n    }\n\n    .p-select:not(.p-disabled):hover {\n        border-color: dt('select.hover.border.color');\n    }\n\n    .p-select:not(.p-disabled).p-focus {\n        border-color: dt('select.focus.border.color');\n        box-shadow: dt('select.focus.ring.shadow');\n        outline: dt('select.focus.ring.width') dt('select.focus.ring.style') dt('select.focus.ring.color');\n        outline-offset: dt('select.focus.ring.offset');\n    }\n\n    .p-select.p-variant-filled {\n        background: dt('select.filled.background');\n    }\n\n    .p-select.p-variant-filled:not(.p-disabled):hover {\n        background: dt('select.filled.hover.background');\n    }\n\n    .p-select.p-variant-filled:not(.p-disabled).p-focus {\n        background: dt('select.filled.focus.background');\n    }\n\n    .p-select.p-invalid {\n        border-color: dt('select.invalid.border.color');\n    }\n\n    .p-select.p-disabled {\n        opacity: 1;\n        background: dt('select.disabled.background');\n    }\n\n    .p-select-clear-icon {\n        align-self: center;\n        color: dt('select.clear.icon.color');\n        inset-inline-end: dt('select.dropdown.width');\n    }\n\n    .p-select-dropdown {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        background: transparent;\n        color: dt('select.dropdown.color');\n        width: dt('select.dropdown.width');\n        border-start-end-radius: dt('select.border.radius');\n        border-end-end-radius: dt('select.border.radius');\n    }\n\n    .p-select-label {\n        display: block;\n        white-space: nowrap;\n        overflow: hidden;\n        flex: 1 1 auto;\n        width: 1%;\n        padding: dt('select.padding.y') dt('select.padding.x');\n        text-overflow: ellipsis;\n        cursor: pointer;\n        color: dt('select.color');\n        background: transparent;\n        border: 0 none;\n        outline: 0 none;\n        font-size: 1rem;\n    }\n\n    .p-select-label.p-placeholder {\n        color: dt('select.placeholder.color');\n    }\n\n    .p-select.p-invalid .p-select-label.p-placeholder {\n        color: dt('select.invalid.placeholder.color');\n    }\n\n    .p-select.p-disabled .p-select-label {\n        color: dt('select.disabled.color');\n    }\n\n    .p-select-label-empty {\n        overflow: hidden;\n        opacity: 0;\n    }\n\n    input.p-select-label {\n        cursor: default;\n    }\n\n    .p-select-overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: dt('select.overlay.background');\n        color: dt('select.overlay.color');\n        border: 1px solid dt('select.overlay.border.color');\n        border-radius: dt('select.overlay.border.radius');\n        box-shadow: dt('select.overlay.shadow');\n        min-width: 100%;\n    }\n\n    .p-select-header {\n        padding: dt('select.list.header.padding');\n    }\n\n    .p-select-filter {\n        width: 100%;\n    }\n\n    .p-select-list-container {\n        overflow: auto;\n    }\n\n    .p-select-option-group {\n        cursor: auto;\n        margin: 0;\n        padding: dt('select.option.group.padding');\n        background: dt('select.option.group.background');\n        color: dt('select.option.group.color');\n        font-weight: dt('select.option.group.font.weight');\n    }\n\n    .p-select-list {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n        padding: dt('select.list.padding');\n        gap: dt('select.list.gap');\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-select-option {\n        cursor: pointer;\n        font-weight: normal;\n        white-space: nowrap;\n        position: relative;\n        overflow: hidden;\n        display: flex;\n        align-items: center;\n        padding: dt('select.option.padding');\n        border: 0 none;\n        color: dt('select.option.color');\n        background: transparent;\n        transition:\n            background dt('select.transition.duration'),\n            color dt('select.transition.duration'),\n            border-color dt('select.transition.duration'),\n            box-shadow dt('select.transition.duration'),\n            outline-color dt('select.transition.duration');\n        border-radius: dt('select.option.border.radius');\n    }\n\n    .p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {\n        background: dt('select.option.focus.background');\n        color: dt('select.option.focus.color');\n    }\n\n    .p-select-option.p-select-option-selected {\n        background: dt('select.option.selected.background');\n        color: dt('select.option.selected.color');\n    }\n\n    .p-select-option.p-select-option-selected.p-focus {\n        background: dt('select.option.selected.focus.background');\n        color: dt('select.option.selected.focus.color');\n    }\n\n    .p-select-option-blank-icon {\n        flex-shrink: 0;\n    }\n\n    .p-select-option-check-icon {\n        position: relative;\n        flex-shrink: 0;\n        margin-inline-start: dt('select.checkmark.gutter.start');\n        margin-inline-end: dt('select.checkmark.gutter.end');\n        color: dt('select.checkmark.color');\n    }\n\n    .p-select-empty-message {\n        padding: dt('select.empty.message.padding');\n    }\n\n    .p-select-fluid {\n        display: flex;\n        width: 100%;\n    }\n\n    .p-select-sm .p-select-label {\n        font-size: dt('select.sm.font.size');\n        padding-block: dt('select.sm.padding.y');\n        padding-inline: dt('select.sm.padding.x');\n    }\n\n    .p-select-sm .p-select-dropdown .p-icon {\n        font-size: dt('select.sm.font.size');\n        width: dt('select.sm.font.size');\n        height: dt('select.sm.font.size');\n    }\n\n    .p-select-lg .p-select-label {\n        font-size: dt('select.lg.font.size');\n        padding-block: dt('select.lg.padding.y');\n        padding-inline: dt('select.lg.padding.x');\n    }\n\n    .p-select-lg .p-select-dropdown .p-icon {\n        font-size: dt('select.lg.font.size');\n        width: dt('select.lg.font.size');\n        height: dt('select.lg.font.size');\n    }\n\n    .p-floatlabel-in .p-select-filter {\n        padding-block-start: dt('select.padding.y');\n        padding-block-end: dt('select.padding.y');\n    }\n";

// node_modules/primeng/fesm2022/primeng-select.mjs
var _c04 = (a0) => ({
  height: a0
});
var _c12 = (a0) => ({
  $implicit: a0
});
function SelectItem_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r0.cx("optionCheckIcon"));
    ɵɵproperty("pBind", ctx_r0.$pcSelect == null ? null : ctx_r0.$pcSelect.ptm("optionCheckIcon"));
  }
}
function SelectItem_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r0.cx("optionBlankIcon"));
    ɵɵproperty("pBind", ctx_r0.$pcSelect == null ? null : ctx_r0.$pcSelect.ptm("optionBlankIcon"));
  }
}
function SelectItem_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SelectItem_ng_container_1__svg_svg_1_Template, 1, 3, "svg", 4)(2, SelectItem_ng_container_1__svg_svg_2_Template, 1, 3, "svg", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.selected);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.selected);
  }
}
function SelectItem_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("pBind", ctx_r0.$pcSelect == null ? null : ctx_r0.$pcSelect.ptm("optionLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.label ?? "empty");
  }
}
function SelectItem_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c22 = ["item"];
var _c32 = ["group"];
var _c42 = ["loader"];
var _c52 = ["selectedItem"];
var _c62 = ["header"];
var _c7 = ["filter"];
var _c8 = ["footer"];
var _c9 = ["emptyfilter"];
var _c10 = ["empty"];
var _c11 = ["dropdownicon"];
var _c122 = ["loadingicon"];
var _c13 = ["clearicon"];
var _c14 = ["filtericon"];
var _c15 = ["onicon"];
var _c16 = ["officon"];
var _c17 = ["cancelicon"];
var _c18 = ["focusInput"];
var _c19 = ["editableInput"];
var _c20 = ["items"];
var _c21 = ["scroller"];
var _c222 = ["overlay"];
var _c23 = ["firstHiddenFocusableEl"];
var _c24 = ["lastHiddenFocusableEl"];
var _c25 = (a0) => ({
  class: a0
});
var _c26 = (a0) => ({
  options: a0
});
var _c27 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c28 = () => ({});
function Select_span_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.label() === "p-emptylabel" ? " " : ctx_r2.label());
  }
}
function Select_span_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 24);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.selectedItemTemplate || ctx_r2._selectedItemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c12, ctx_r2.selectedOption));
  }
}
function Select_span_0_ng_template_4_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.label() === "p-emptylabel" ? " " : ctx_r2.label());
  }
}
function Select_span_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select_span_0_ng_template_4_span_0_Template, 2, 1, "span", 18);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r2.isSelectedOptionEmpty());
  }
}
function Select_span_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 22, 3);
    ɵɵlistener("focus", function Select_span_0_Template_span_focus_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputFocus($event));
    })("blur", function Select_span_0_Template_span_blur_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputBlur($event));
    })("keydown", function Select_span_0_Template_span_keydown_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onKeyDown($event));
    });
    ɵɵtemplate(2, Select_span_0_ng_container_2_Template, 2, 1, "ng-container", 20)(3, Select_span_0_ng_container_3_Template, 1, 4, "ng-container", 23)(4, Select_span_0_ng_template_4_Template, 1, 1, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const defaultPlaceholder_r4 = ɵɵreference(5);
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("label"));
    ɵɵproperty("pBind", ctx_r2.ptm("label"))("pTooltip", ctx_r2.tooltip)("tooltipPosition", ctx_r2.tooltipPosition)("positionStyle", ctx_r2.tooltipPositionStyle)("tooltipStyleClass", ctx_r2.tooltipStyleClass)("pAutoFocus", ctx_r2.autofocus);
    ɵɵattribute("aria-disabled", ctx_r2.$disabled())("id", ctx_r2.inputId)("aria-label", ctx_r2.ariaLabel || (ctx_r2.label() === "p-emptylabel" ? void 0 : ctx_r2.label()))("aria-labelledby", ctx_r2.ariaLabelledBy)("aria-haspopup", "listbox")("aria-expanded", ctx_r2.overlayVisible ?? false)("aria-controls", ctx_r2.overlayVisible ? ctx_r2.id + "_list" : null)("tabindex", !ctx_r2.$disabled() ? ctx_r2.tabindex : -1)("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : void 0)("aria-required", ctx_r2.required())("required", ctx_r2.required() ? "" : void 0)("disabled", ctx_r2.$disabled() ? "" : void 0);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r2.selectedItemTemplate && !ctx_r2._selectedItemTemplate)("ngIfElse", defaultPlaceholder_r4);
    ɵɵadvance();
    ɵɵproperty("ngIf", (ctx_r2.selectedItemTemplate || ctx_r2._selectedItemTemplate) && !ctx_r2.isSelectedOptionEmpty());
  }
}
function Select_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 25, 5);
    ɵɵlistener("input", function Select_input_1_Template_input_input_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onEditableInput($event));
    })("keydown", function Select_input_1_Template_input_keydown_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onKeyDown($event));
    })("focus", function Select_input_1_Template_input_focus_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputFocus($event));
    })("blur", function Select_input_1_Template_input_blur_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onInputBlur($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("label"));
    ɵɵproperty("pBind", ctx_r2.ptm("label"))("pAutoFocus", ctx_r2.autofocus);
    ɵɵattribute("id", ctx_r2.inputId)("aria-haspopup", "listbox")("placeholder", ctx_r2.modelValue() === void 0 || ctx_r2.modelValue() === null ? ctx_r2.placeholder() : void 0)("aria-label", ctx_r2.ariaLabel || (ctx_r2.label() === "p-emptylabel" ? void 0 : ctx_r2.label()))("aria-activedescendant", ctx_r2.focused ? ctx_r2.focusedOptionId : void 0)("name", ctx_r2.name())("minlength", ctx_r2.minlength())("min", ctx_r2.min())("max", ctx_r2.max())("pattern", ctx_r2.pattern())("size", ctx_r2.inputSize())("maxlength", ctx_r2.maxlength())("required", ctx_r2.required() ? "" : void 0)("readonly", ctx_r2.readonly ? "" : void 0)("disabled", ctx_r2.$disabled() ? "" : void 0);
  }
}
function Select_ng_container_2__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 28);
    ɵɵlistener("click", function Select_ng_container_2__svg_svg_1_Template_svg_click_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.clear($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.cx("clearIcon"));
    ɵɵproperty("pBind", ctx_r2.ptm("clearIcon"));
    ɵɵattribute("data-pc-section", "clearicon");
  }
}
function Select_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Select_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Select_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 29);
    ɵɵlistener("click", function Select_ng_container_2_span_2_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.clear($event));
    });
    ɵɵtemplate(1, Select_ng_container_2_span_2_1_Template, 1, 0, null, 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.cx("clearIcon"));
    ɵɵproperty("pBind", ctx_r2.ptm("clearIcon"));
    ɵɵattribute("data-pc-section", "clearicon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.clearIconTemplate || ctx_r2._clearIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c25, ctx_r2.cx("clearIcon")));
  }
}
function Select_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Select_ng_container_2__svg_svg_1_Template, 1, 4, "svg", 26)(2, Select_ng_container_2_span_2_Template, 2, 8, "span", 27);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.clearIconTemplate && !ctx_r2._clearIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.clearIconTemplate || ctx_r2._clearIconTemplate);
  }
}
function Select_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Select_ng_container_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 31);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.loadingIconTemplate || ctx_r2._loadingIconTemplate);
  }
}
function Select_ng_container_4_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 33);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("loadingIcon"), "pi-spin" + ctx_r2.loadingIcon));
    ɵɵproperty("pBind", ctx_r2.ptm("loadingIcon"));
  }
}
function Select_ng_container_4_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 33);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("loadingIcon"), "pi pi-spinner pi-spin"));
    ɵɵproperty("pBind", ctx_r2.ptm("loadingIcon"));
  }
}
function Select_ng_container_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Select_ng_container_4_ng_container_2_span_1_Template, 1, 3, "span", 32)(2, Select_ng_container_4_ng_container_2_span_2_Template, 1, 3, "span", 32);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.loadingIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.loadingIcon);
  }
}
function Select_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Select_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 18)(2, Select_ng_container_4_ng_container_2_Template, 3, 2, "ng-container", 18);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.loadingIconTemplate || ctx_r2._loadingIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.loadingIconTemplate && !ctx_r2._loadingIconTemplate);
  }
}
function Select_ng_template_5_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 36);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("dropdownIcon"), ctx_r2.dropdownIcon));
    ɵɵproperty("pBind", ctx_r2.ptm("dropdownIcon"));
  }
}
function Select_ng_template_5_ng_container_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 37);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r2.cx("dropdownIcon"));
    ɵɵproperty("pBind", ctx_r2.ptm("dropdownIcon"));
  }
}
function Select_ng_template_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Select_ng_template_5_ng_container_0_span_1_Template, 1, 3, "span", 34)(2, Select_ng_template_5_ng_container_0__svg_svg_2_Template, 1, 3, "svg", 35);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.dropdownIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.dropdownIcon);
  }
}
function Select_ng_template_5_span_1_1_ng_template_0_Template(rf, ctx) {
}
function Select_ng_template_5_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select_ng_template_5_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Select_ng_template_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 36);
    ɵɵtemplate(1, Select_ng_template_5_span_1_1_Template, 1, 0, null, 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.cx("dropdownIcon"));
    ɵɵproperty("pBind", ctx_r2.ptm("dropdownIcon"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.dropdownIconTemplate || ctx_r2._dropdownIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c25, ctx_r2.cx("dropdownIcon")));
  }
}
function Select_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select_ng_template_5_ng_container_0_Template, 3, 2, "ng-container", 18)(1, Select_ng_template_5_span_1_Template, 2, 7, "span", 34);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngIf", !ctx_r2.dropdownIconTemplate && !ctx_r2._dropdownIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.dropdownIconTemplate || ctx_r2._dropdownIconTemplate);
  }
}
function Select_ng_template_9_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select_ng_template_9_div_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select_ng_template_9_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Select_ng_template_9_div_4_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 30);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.filterTemplate || ctx_r2._filterTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c26, ctx_r2.filterOptions));
  }
}
function Select_ng_template_9_div_4_ng_template_2__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 45);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵproperty("pBind", ctx_r2.ptm("filterIcon"));
  }
}
function Select_ng_template_9_div_4_ng_template_2_span_5_1_ng_template_0_Template(rf, ctx) {
}
function Select_ng_template_9_div_4_ng_template_2_span_5_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select_ng_template_9_div_4_ng_template_2_span_5_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Select_ng_template_9_div_4_ng_template_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 36);
    ɵɵtemplate(1, Select_ng_template_9_div_4_ng_template_2_span_5_1_Template, 1, 0, null, 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵproperty("pBind", ctx_r2.ptm("filterIcon"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.filterIconTemplate || ctx_r2._filterIconTemplate);
  }
}
function Select_ng_template_9_div_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-iconfield", 41)(1, "input", 42, 10);
    ɵɵlistener("input", function Select_ng_template_9_div_4_ng_template_2_Template_input_input_1_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onFilterInputChange($event));
    })("keydown", function Select_ng_template_9_div_4_ng_template_2_Template_input_keydown_1_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onFilterKeyDown($event));
    })("blur", function Select_ng_template_9_div_4_ng_template_2_Template_input_blur_1_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onFilterBlur($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "p-inputicon", 41);
    ɵɵtemplate(4, Select_ng_template_9_div_4_ng_template_2__svg_svg_4_Template, 1, 1, "svg", 43)(5, Select_ng_template_9_div_4_ng_template_2_span_5_Template, 2, 2, "span", 44);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("pt", ctx_r2.ptm("pcFilterContainer"));
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.cx("pcFilter"));
    ɵɵproperty("pSize", ctx_r2.size())("value", ctx_r2._filterValue() || "")("variant", ctx_r2.$variant())("pt", ctx_r2.ptm("pcFilter"));
    ɵɵattribute("placeholder", ctx_r2.filterPlaceholder)("aria-owns", ctx_r2.id + "_list")("aria-label", ctx_r2.ariaFilterLabel)("aria-activedescendant", ctx_r2.focusedOptionId);
    ɵɵadvance(2);
    ɵɵproperty("pt", ctx_r2.ptm("pcFilterIconContainer"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.filterIconTemplate && !ctx_r2._filterIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.filterIconTemplate || ctx_r2._filterIconTemplate);
  }
}
function Select_ng_template_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 29);
    ɵɵlistener("click", function Select_ng_template_9_div_4_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r9);
      return ɵɵresetView($event.stopPropagation());
    });
    ɵɵtemplate(1, Select_ng_template_9_div_4_ng_container_1_Template, 2, 4, "ng-container", 20)(2, Select_ng_template_9_div_4_ng_template_2_Template, 6, 14, "ng-template", null, 9, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const builtInFilterElement_r11 = ɵɵreference(3);
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.cx("header"));
    ɵɵproperty("pBind", ctx_r2.ptm("header"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.filterTemplate || ctx_r2._filterTemplate)("ngIfElse", builtInFilterElement_r11);
  }
}
function Select_ng_template_9_p_scroller_6_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select_ng_template_9_p_scroller_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select_ng_template_9_p_scroller_6_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 30);
  }
  if (rf & 2) {
    const items_r13 = ctx.$implicit;
    const scrollerOptions_r14 = ctx.options;
    ɵɵnextContext(2);
    const buildInItems_r15 = ɵɵreference(9);
    ɵɵproperty("ngTemplateOutlet", buildInItems_r15)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c27, items_r13, scrollerOptions_r14));
  }
}
function Select_ng_template_9_p_scroller_6_ng_container_4_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select_ng_template_9_p_scroller_6_ng_container_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select_ng_template_9_p_scroller_6_ng_container_4_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 30);
  }
  if (rf & 2) {
    const scrollerOptions_r16 = ctx.options;
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.loaderTemplate || ctx_r2._loaderTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c26, scrollerOptions_r16));
  }
}
function Select_ng_template_9_p_scroller_6_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Select_ng_template_9_p_scroller_6_ng_container_4_ng_template_1_Template, 1, 4, "ng-template", null, 12, ɵɵtemplateRefExtractor);
    ɵɵelementContainerEnd();
  }
}
function Select_ng_template_9_p_scroller_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-scroller", 46, 11);
    ɵɵlistener("onLazyLoad", function Select_ng_template_9_p_scroller_6_Template_p_scroller_onLazyLoad_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onLazyLoad.emit($event));
    });
    ɵɵtemplate(2, Select_ng_template_9_p_scroller_6_ng_template_2_Template, 1, 5, "ng-template", null, 2, ɵɵtemplateRefExtractor)(4, Select_ng_template_9_p_scroller_6_ng_container_4_Template, 3, 0, "ng-container", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleMap(ɵɵpureFunction1(9, _c04, ctx_r2.scrollHeight));
    ɵɵproperty("items", ctx_r2.visibleOptions())("itemSize", ctx_r2.virtualScrollItemSize)("autoSize", true)("lazy", ctx_r2.lazy)("options", ctx_r2.virtualScrollOptions)("pt", ctx_r2.ptm("virtualScroller"));
    ɵɵadvance(4);
    ɵɵproperty("ngIf", ctx_r2.loaderTemplate || ctx_r2._loaderTemplate);
  }
}
function Select_ng_template_9_ng_container_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select_ng_template_9_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Select_ng_template_9_ng_container_7_ng_container_1_Template, 1, 0, "ng-container", 30);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const buildInItems_r15 = ɵɵreference(9);
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", buildInItems_r15)("ngTemplateOutletContext", ɵɵpureFunction2(3, _c27, ctx_r2.visibleOptions(), ɵɵpureFunction0(2, _c28)));
  }
}
function Select_ng_template_9_ng_template_8_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 36);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r17 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r2.cx("optionGroupLabel"));
    ɵɵproperty("pBind", ctx_r2.ptm("optionGroupLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getOptionGroupLabel(option_r17.optionGroup));
  }
}
function Select_ng_template_9_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select_ng_template_9_ng_template_8_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "li", 50);
    ɵɵtemplate(2, Select_ng_template_9_ng_template_8_ng_template_2_ng_container_0_span_2_Template, 2, 4, "span", 34)(3, Select_ng_template_9_ng_template_8_ng_template_2_ng_container_0_ng_container_3_Template, 1, 0, "ng-container", 30);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = ɵɵnextContext();
    const option_r17 = ctx_r17.$implicit;
    const i_r19 = ctx_r17.index;
    const scrollerOptions_r20 = ɵɵnextContext().options;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.cx("optionGroup"));
    ɵɵproperty("ngStyle", ɵɵpureFunction1(8, _c04, scrollerOptions_r20.itemSize + "px"))("pBind", ctx_r2.ptm("optionGroup"));
    ɵɵattribute("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.groupTemplate && !ctx_r2._groupTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.groupTemplate || ctx_r2._groupTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(10, _c12, option_r17.optionGroup));
  }
}
function Select_ng_template_9_ng_template_8_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "p-selectItem", 51);
    ɵɵlistener("onClick", function Select_ng_template_9_ng_template_8_ng_template_2_ng_container_1_Template_p_selectItem_onClick_1_listener($event) {
      ɵɵrestoreView(_r21);
      const option_r17 = ɵɵnextContext().$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onOptionSelect($event, option_r17));
    })("onMouseEnter", function Select_ng_template_9_ng_template_8_ng_template_2_ng_container_1_Template_p_selectItem_onMouseEnter_1_listener($event) {
      ɵɵrestoreView(_r21);
      const i_r19 = ɵɵnextContext().index;
      const scrollerOptions_r20 = ɵɵnextContext().options;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onOptionMouseEnter($event, ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20)));
    });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = ɵɵnextContext();
    const option_r17 = ctx_r17.$implicit;
    const i_r19 = ctx_r17.index;
    const scrollerOptions_r20 = ɵɵnextContext().options;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r2.id + "_" + ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20))("option", option_r17)("checkmark", ctx_r2.checkmark)("selected", ctx_r2.isSelected(option_r17))("label", ctx_r2.getOptionLabel(option_r17))("disabled", ctx_r2.isOptionDisabled(option_r17))("template", ctx_r2.itemTemplate || ctx_r2._itemTemplate)("focused", ctx_r2.focusedOptionIndex() === ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20))("ariaPosInset", ctx_r2.getAriaPosInset(ctx_r2.getOptionIndex(i_r19, scrollerOptions_r20)))("ariaSetSize", ctx_r2.ariaSetSize)("index", i_r19)("scrollerOptions", scrollerOptions_r20);
  }
}
function Select_ng_template_9_ng_template_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select_ng_template_9_ng_template_8_ng_template_2_ng_container_0_Template, 4, 12, "ng-container", 18)(1, Select_ng_template_9_ng_template_8_ng_template_2_ng_container_1_Template, 2, 12, "ng-container", 18);
  }
  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ctx_r2.isOptionGroup(option_r17));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.isOptionGroup(option_r17));
  }
}
function Select_ng_template_9_ng_template_8_li_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵtextInterpolate1(" ", ctx_r2.emptyFilterMessageLabel, " ");
  }
}
function Select_ng_template_9_ng_template_8_li_3_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, null, 14);
  }
}
function Select_ng_template_9_ng_template_8_li_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select_ng_template_9_ng_template_8_li_3_Conditional_2_ng_container_0_Template, 2, 0, "ng-container", 31);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.emptyFilterTemplate || ctx_r2._emptyFilterTemplate || ctx_r2.emptyTemplate || ctx_r2._emptyTemplate);
  }
}
function Select_ng_template_9_ng_template_8_li_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 50);
    ɵɵconditionalCreate(1, Select_ng_template_9_ng_template_8_li_3_Conditional_1_Template, 1, 1)(2, Select_ng_template_9_ng_template_8_li_3_Conditional_2_Template, 1, 1, "ng-container");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r20 = ɵɵnextContext().options;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.cx("emptyMessage"));
    ɵɵproperty("ngStyle", ɵɵpureFunction1(5, _c04, scrollerOptions_r20.itemSize + "px"))("pBind", ctx_r2.ptm("emptyMessage"));
    ɵɵadvance();
    ɵɵconditional(!ctx_r2.emptyFilterTemplate && !ctx_r2._emptyFilterTemplate && !ctx_r2.emptyTemplate ? 1 : 2);
  }
}
function Select_ng_template_9_ng_template_8_li_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵtextInterpolate1(" ", ctx_r2.emptyMessageLabel || ctx_r2.emptyFilterMessageLabel, " ");
  }
}
function Select_ng_template_9_ng_template_8_li_4_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, null, 15);
  }
}
function Select_ng_template_9_ng_template_8_li_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select_ng_template_9_ng_template_8_li_4_Conditional_2_ng_container_0_Template, 2, 0, "ng-container", 31);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.emptyTemplate || ctx_r2._emptyTemplate);
  }
}
function Select_ng_template_9_ng_template_8_li_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 50);
    ɵɵconditionalCreate(1, Select_ng_template_9_ng_template_8_li_4_Conditional_1_Template, 1, 1)(2, Select_ng_template_9_ng_template_8_li_4_Conditional_2_Template, 1, 1, "ng-container");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r20 = ɵɵnextContext().options;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.cx("emptyMessage"));
    ɵɵproperty("ngStyle", ɵɵpureFunction1(5, _c04, scrollerOptions_r20.itemSize + "px"))("pBind", ctx_r2.ptm("emptyMessage"));
    ɵɵadvance();
    ɵɵconditional(!ctx_r2.emptyTemplate && !ctx_r2._emptyTemplate ? 1 : 2);
  }
}
function Select_ng_template_9_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 47, 13);
    ɵɵtemplate(2, Select_ng_template_9_ng_template_8_ng_template_2_Template, 2, 2, "ng-template", 48)(3, Select_ng_template_9_ng_template_8_li_3_Template, 3, 7, "li", 49)(4, Select_ng_template_9_ng_template_8_li_4_Template, 3, 7, "li", 49);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const items_r22 = ctx.$implicit;
    const scrollerOptions_r20 = ctx.options;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵstyleMap(scrollerOptions_r20.contentStyle);
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("list"), scrollerOptions_r20.contentStyleClass));
    ɵɵproperty("pBind", ctx_r2.ptm("list"));
    ɵɵattribute("id", ctx_r2.id + "_list")("aria-label", ctx_r2.listLabel);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", items_r22);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.filterValue && ctx_r2.isEmpty());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.filterValue && ctx_r2.isEmpty());
  }
}
function Select_ng_template_9_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 38)(1, "span", 39, 6);
    ɵɵlistener("focus", function Select_ng_template_9_Template_span_focus_1_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onFirstHiddenFocus($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(3, Select_ng_template_9_ng_container_3_Template, 1, 0, "ng-container", 31)(4, Select_ng_template_9_div_4_Template, 4, 5, "div", 27);
    ɵɵelementStart(5, "div", 36);
    ɵɵtemplate(6, Select_ng_template_9_p_scroller_6_Template, 5, 11, "p-scroller", 40)(7, Select_ng_template_9_ng_container_7_Template, 2, 6, "ng-container", 18)(8, Select_ng_template_9_ng_template_8_Template, 5, 10, "ng-template", null, 7, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵtemplate(10, Select_ng_template_9_ng_container_10_Template, 1, 0, "ng-container", 31);
    ɵɵelementStart(11, "span", 39, 8);
    ɵɵlistener("focus", function Select_ng_template_9_Template_span_focus_11_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onLastHiddenFocus($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("overlay"), ctx_r2.panelStyleClass));
    ɵɵproperty("ngStyle", ctx_r2.panelStyle)("pBind", ctx_r2.ptm("overlay"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r2.ptm("hiddenFirstFocusableEl"));
    ɵɵattribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.headerTemplate || ctx_r2._headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.filter);
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.cx("listContainer"));
    ɵɵstyleProp("max-height", ctx_r2.virtualScroll ? "auto" : ctx_r2.scrollHeight || "auto");
    ɵɵproperty("pBind", ctx_r2.ptm("listContainer"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.virtualScroll);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.virtualScroll);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.footerTemplate || ctx_r2._footerTemplate);
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r2.ptm("hiddenLastFocusableEl"));
    ɵɵattribute("tabindex", 0)("data-p-hidden-accessible", true)("data-p-hidden-focusable", true);
  }
}
var style6 = (
  /*css*/
  `
    ${style5}

    /* For PrimeNG */
    .p-select-label.p-placeholder {
        color: dt('select.placeholder.color');
    }

    .p-select.ng-invalid.ng-dirty {
        border-color: dt('select.invalid.border.color');
    }

    .p-dropdown.ng-invalid.ng-dirty .p-dropdown-label.p-placeholder,
    .p-select.ng-invalid.ng-dirty .p-select-label.p-placeholder {
        color: dt('select.invalid.placeholder.color');
    }
`
);
var classes5 = {
  root: ({
    instance
  }) => ["p-select p-component p-inputwrapper", {
    "p-disabled": instance.$disabled(),
    "p-variant-filled": instance.$variant() === "filled",
    "p-focus": instance.focused,
    "p-invalid": instance.invalid(),
    "p-inputwrapper-filled": instance.$filled(),
    "p-inputwrapper-focus": instance.focused || instance.overlayVisible,
    "p-select-open": instance.overlayVisible,
    "p-select-fluid": instance.hasFluid,
    "p-select-sm p-inputfield-sm": instance.size() === "small",
    "p-select-lg p-inputfield-lg": instance.size() === "large"
  }],
  label: ({
    instance
  }) => ["p-select-label", {
    "p-placeholder": instance.placeholder() && instance.label() === instance.placeholder(),
    "p-select-label-empty": !instance.editable && !instance.selectedItemTemplate && (instance.label() === void 0 || instance.label() === null || instance.label() === "p-emptylabel" || instance.label().length === 0)
  }],
  clearIcon: "p-select-clear-icon",
  dropdown: "p-select-dropdown",
  loadingIcon: "p-select-loading-icon",
  dropdownIcon: "p-select-dropdown-icon",
  overlay: "p-select-overlay p-component-overlay p-component",
  header: "p-select-header",
  pcFilter: "p-select-filter",
  listContainer: "p-select-list-container",
  list: "p-select-list",
  optionGroup: "p-select-option-group",
  optionGroupLabel: "p-select-option-group-label",
  option: ({
    instance
  }) => ["p-select-option", {
    "p-select-option-selected": instance.selected && !instance.checkmark,
    "p-disabled": instance.disabled,
    "p-focus": instance.focused
  }],
  optionLabel: "p-select-option-label",
  optionCheckIcon: "p-select-option-check-icon",
  optionBlankIcon: "p-select-option-blank-icon",
  emptyMessage: "p-select-empty-message"
};
var SelectStyle = class _SelectStyle extends BaseStyle {
  name = "select";
  style = style6;
  classes = classes5;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSelectStyle_BaseFactory;
    return function SelectStyle_Factory(__ngFactoryType__) {
      return (ɵSelectStyle_BaseFactory || (ɵSelectStyle_BaseFactory = ɵɵgetInheritedFactory(_SelectStyle)))(__ngFactoryType__ || _SelectStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _SelectStyle,
    factory: _SelectStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectStyle, [{
    type: Injectable
  }], null, null);
})();
var SelectClasses;
(function(SelectClasses2) {
  SelectClasses2["root"] = "p-select";
  SelectClasses2["label"] = "p-select-label";
  SelectClasses2["clearIcon"] = "p-select-clear-icon";
  SelectClasses2["dropdown"] = "p-select-dropdown";
  SelectClasses2["loadingIcon"] = "p-select-loading-icon";
  SelectClasses2["dropdownIcon"] = "p-select-dropdown-icon";
  SelectClasses2["overlay"] = "p-select-overlay";
  SelectClasses2["header"] = "p-select-header";
  SelectClasses2["pcFilter"] = "p-select-filter";
  SelectClasses2["listContainer"] = "p-select-list-container";
  SelectClasses2["list"] = "p-select-list";
  SelectClasses2["optionGroup"] = "p-select-option-group";
  SelectClasses2["optionGroupLabel"] = "p-select-option-group-label";
  SelectClasses2["option"] = "p-select-option";
  SelectClasses2["optionLabel"] = "p-select-option-label";
  SelectClasses2["optionCheckIcon"] = "p-select-option-check-icon";
  SelectClasses2["optionBlankIcon"] = "p-select-option-blank-icon";
  SelectClasses2["emptyMessage"] = "p-select-empty-message";
})(SelectClasses || (SelectClasses = {}));
var SELECT_INSTANCE = new InjectionToken("SELECT_INSTANCE");
var SELECT_ITEM_INSTANCE = new InjectionToken("SELECT_ITEM_INSTANCE");
var SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Select),
  multi: true
};
var SelectItem = class _SelectItem extends BaseComponent {
  hostName = "select";
  $pcSelectItem = inject(SELECT_ITEM_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  $pcSelect = inject(SELECT_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  id;
  option;
  selected;
  focused;
  label;
  disabled;
  visible;
  itemSize;
  ariaPosInset;
  ariaSetSize;
  template;
  checkmark;
  index;
  scrollerOptions;
  onClick = new EventEmitter();
  onMouseEnter = new EventEmitter();
  _componentStyle = inject(SelectStyle);
  onOptionClick(event) {
    this.onClick.emit(event);
  }
  onOptionMouseEnter(event) {
    this.onMouseEnter.emit(event);
  }
  getPTOptions() {
    return this.$pcSelect?.getPTItemOptions?.(this.option, this.scrollerOptions, this.index ?? 0, "option") ?? this.$pcSelect?.ptm("option", {
      context: {
        option: this.option,
        selected: this.selected,
        focused: this.focused,
        disabled: this.disabled
      }
    });
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSelectItem_BaseFactory;
    return function SelectItem_Factory(__ngFactoryType__) {
      return (ɵSelectItem_BaseFactory || (ɵSelectItem_BaseFactory = ɵɵgetInheritedFactory(_SelectItem)))(__ngFactoryType__ || _SelectItem);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _SelectItem,
    selectors: [["p-selectItem"]],
    inputs: {
      id: "id",
      option: "option",
      selected: [2, "selected", "selected", booleanAttribute],
      focused: [2, "focused", "focused", booleanAttribute],
      label: "label",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      visible: [2, "visible", "visible", booleanAttribute],
      itemSize: [2, "itemSize", "itemSize", numberAttribute],
      ariaPosInset: "ariaPosInset",
      ariaSetSize: "ariaSetSize",
      template: "template",
      checkmark: [2, "checkmark", "checkmark", booleanAttribute],
      index: "index",
      scrollerOptions: "scrollerOptions"
    },
    outputs: {
      onClick: "onClick",
      onMouseEnter: "onMouseEnter"
    },
    features: [ɵɵProvidersFeature([SelectStyle, {
      provide: PARENT_INSTANCE,
      useExisting: _SelectItem
    }]), ɵɵInheritDefinitionFeature],
    decls: 4,
    vars: 20,
    consts: [["role", "option", "pRipple", "", 3, "click", "mouseenter", "id", "pBind", "ngStyle"], [4, "ngIf"], [3, "pBind", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-p-icon", "check", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "blank", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "check", 3, "pBind"], ["data-p-icon", "blank", 3, "pBind"], [3, "pBind"]],
    template: function SelectItem_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "li", 0);
        ɵɵlistener("click", function SelectItem_Template_li_click_0_listener($event) {
          return ctx.onOptionClick($event);
        })("mouseenter", function SelectItem_Template_li_mouseenter_0_listener($event) {
          return ctx.onOptionMouseEnter($event);
        });
        ɵɵtemplate(1, SelectItem_ng_container_1_Template, 3, 2, "ng-container", 1)(2, SelectItem_span_2_Template, 2, 2, "span", 2)(3, SelectItem_ng_container_3_Template, 1, 0, "ng-container", 3);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.cx("option"));
        ɵɵproperty("id", ctx.id)("pBind", ctx.getPTOptions())("ngStyle", ɵɵpureFunction1(16, _c04, ctx.itemSize + "px"));
        ɵɵattribute("aria-label", ctx.label)("aria-setsize", ctx.ariaSetSize)("aria-posinset", ctx.ariaPosInset)("aria-selected", ctx.selected)("data-p-focused", ctx.focused)("data-p-highlight", ctx.selected)("data-p-disabled", ctx.disabled);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.checkmark);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.template);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", ɵɵpureFunction1(18, _c12, ctx.option));
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, NgStyle, SharedModule, Ripple, CheckIcon, BlankIcon, BindModule, Bind],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectItem, [{
    type: Component,
    args: [{
      selector: "p-selectItem",
      standalone: true,
      imports: [CommonModule, SharedModule, Ripple, CheckIcon, BlankIcon, BindModule],
      template: `
        <li
            [id]="id"
            [pBind]="getPTOptions()"
            (click)="onOptionClick($event)"
            (mouseenter)="onOptionMouseEnter($event)"
            role="option"
            pRipple
            [attr.aria-label]="label"
            [attr.aria-setsize]="ariaSetSize"
            [attr.aria-posinset]="ariaPosInset"
            [attr.aria-selected]="selected"
            [attr.data-p-focused]="focused"
            [attr.data-p-highlight]="selected"
            [attr.data-p-disabled]="disabled"
            [ngStyle]="{ height: itemSize + 'px' }"
            [class]="cx('option')"
        >
            <ng-container *ngIf="checkmark">
                <svg data-p-icon="check" *ngIf="selected" [class]="cx('optionCheckIcon')" [pBind]="$pcSelect?.ptm('optionCheckIcon')" />
                <svg data-p-icon="blank" *ngIf="!selected" [class]="cx('optionBlankIcon')" [pBind]="$pcSelect?.ptm('optionBlankIcon')" />
            </ng-container>
            <span *ngIf="!template" [pBind]="$pcSelect?.ptm('optionLabel')">{{ label ?? 'empty' }}</span>
            <ng-container *ngTemplateOutlet="template; context: { $implicit: option }"></ng-container>
        </li>
    `,
      providers: [SelectStyle, {
        provide: PARENT_INSTANCE,
        useExisting: SelectItem
      }]
    }]
  }], null, {
    id: [{
      type: Input
    }],
    option: [{
      type: Input
    }],
    selected: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    focused: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    visible: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    itemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    ariaPosInset: [{
      type: Input
    }],
    ariaSetSize: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    checkmark: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    index: [{
      type: Input
    }],
    scrollerOptions: [{
      type: Input
    }],
    onClick: [{
      type: Output
    }],
    onMouseEnter: [{
      type: Output
    }]
  });
})();
var Select = class _Select extends BaseInput {
  zone;
  filterService;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  /**
   * Unique identifier of the component
   * @group Props
   */
  id;
  /**
   * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  scrollHeight = "200px";
  /**
   * When specified, displays an input field to filter the items on keyup.
   * @group Props
   */
  filter;
  /**
   * Inline style of the overlay panel element.
   * @group Props
   */
  panelStyle;
  /**
   * Style class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the overlay panel element.
   * @group Props
   */
  panelStyleClass;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * When present, custom value instead of predefined options can be entered using the editable input field.
   * @group Props
   */
  editable;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Default text to display when no option is selected.
   * @group Props
   */
  set placeholder(val) {
    this._placeholder.set(val);
  }
  get placeholder() {
    return this._placeholder.asReadonly();
  }
  /**
   * Icon to display in loading state.
   * @group Props
   */
  loadingIcon;
  /**
   * Placeholder text to show when filter input is empty.
   * @group Props
   */
  filterPlaceholder;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Identifier of the accessible input element.
   * @group Props
   */
  inputId;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
   * @group Props
   */
  filterBy;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  filterFields;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Clears the filter value when hiding the select.
   * @group Props
   */
  resetFilterOnHide = false;
  /**
   * Whether the selected option will be shown with a check mark.
   * @group Props
   */
  checkmark = false;
  /**
   * Icon class of the select icon.
   * @group Props
   */
  dropdownIcon;
  /**
   * Whether the select is in loading state.
   * @group Props
   */
  loading = false;
  /**
   * Name of the label field of an option.
   * @group Props
   */
  optionLabel;
  /**
   * Name of the value field of an option.
   * @group Props
   */
  optionValue;
  /**
   * Name of the disabled field of an option.
   * @group Props
   */
  optionDisabled;
  /**
   * Name of the label field of an option group.
   * @group Props
   */
  optionGroupLabel = "label";
  /**
   * Name of the options field of an option group.
   * @group Props
   */
  optionGroupChildren = "items";
  /**
   * Whether to display options as grouped when nested options are provided.
   * @group Props
   */
  group;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear;
  /**
   * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyFilterMessage = "";
  /**
   * Text to display when there is no data. Defaults to global value in i18n translation configuration.
   * @group Props
   */
  emptyMessage = "";
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Height of an item in the list for VirtualScrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
   * @group Props
   */
  overlayOptions;
  /**
   * Defines a string that labels the filter input.
   * @group Props
   */
  ariaFilterLabel;
  /**
   * Used to define a aria label attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Defines how the items are filtered.
   * @group Props
   */
  filterMatchMode = "contains";
  /**
   * Advisory information to display in a tooltip on hover.
   * @group Props
   */
  tooltip = "";
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition = "right";
  /**
   * Type of CSS position.
   * @group Props
   */
  tooltipPositionStyle = "absolute";
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Fields used when filtering the options, defaults to optionLabel.
   * @group Props
   */
  focusOnHover = true;
  /**
   * Determines if the option will be selected on focus.
   * @group Props
   */
  selectOnFocus = false;
  /**
   * Whether to focus on the first visible or selected element when the overlay panel is shown.
   * @group Props
   */
  autoOptionFocus = false;
  /**
   * Applies focus to the filter element when the overlay is shown.
   * @group Props
   */
  autofocusFilter = true;
  /**
   * When specified, filter displays with this value.
   * @group Props
   */
  get filterValue() {
    return this._filterValue();
  }
  set filterValue(val) {
    setTimeout(() => {
      this._filterValue.set(val);
    });
  }
  /**
   * An array of objects to display as the available options.
   * @group Props
   */
  get options() {
    const options = this._options();
    return options;
  }
  set options(val) {
    if (!y(val, this._options())) {
      this._options.set(val);
    }
  }
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input(void 0, ...ngDevMode ? [{
    debugName: "appendTo"
  }] : []);
  /**
   * Callback to invoke when value of select changes.
   * @param {SelectChangeEvent} event - custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {SelectFilterEvent} event - custom filter event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  /**
   * Callback to invoke when select gets focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when select loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when component is clicked.
   * @param {MouseEvent} event - Mouse event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when select overlay gets visible.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when select overlay gets hidden.
   * @param {AnimationEvent} event - Animation event.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when select clears the value.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke in lazy mode to load new data.
   * @param {SelectLazyLoadEvent} event - Lazy load event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  _componentStyle = inject(SelectStyle);
  filterViewChild;
  focusInputViewChild;
  editableInputViewChild;
  itemsViewChild;
  scroller;
  overlayViewChild;
  firstHiddenFocusableElementOnOverlay;
  lastHiddenFocusableElementOnOverlay;
  itemsWrapper;
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : []);
  /**
   * Custom item template.
   * @group Templates
   */
  itemTemplate;
  /**
   * Custom group template.
   * @group Templates
   */
  groupTemplate;
  /**
   * Custom loader template.
   * @group Templates
   */
  loaderTemplate;
  /**
   * Custom selected item template.
   * @group Templates
   */
  selectedItemTemplate;
  /**
   * Custom header template.
   * @group Templates
   */
  headerTemplate;
  /**
   * Custom filter template.
   * @group Templates
   */
  filterTemplate;
  /**
   * Custom footer template.
   * @group Templates
   */
  footerTemplate;
  /**
   * Custom empty filter template.
   * @group Templates
   */
  emptyFilterTemplate;
  /**
   * Custom empty template.
   * @group Templates
   */
  emptyTemplate;
  /**
   * Custom dropdown icon template.
   * @group Templates
   */
  dropdownIconTemplate;
  /**
   * Custom loading icon template.
   * @group Templates
   */
  loadingIconTemplate;
  /**
   * Custom clear icon template.
   * @group Templates
   */
  clearIconTemplate;
  /**
   * Custom filter icon template.
   * @group Templates
   */
  filterIconTemplate;
  /**
   * Custom on icon template.
   * @group Templates
   */
  onIconTemplate;
  /**
   * Custom off icon template.
   * @group Templates
   */
  offIconTemplate;
  /**
   * Custom cancel icon template.
   * @group Templates
   */
  cancelIconTemplate;
  templates;
  _itemTemplate;
  _selectedItemTemplate;
  _headerTemplate;
  _filterTemplate;
  _footerTemplate;
  _emptyFilterTemplate;
  _emptyTemplate;
  _groupTemplate;
  _loaderTemplate;
  _dropdownIconTemplate;
  _loadingIconTemplate;
  _clearIconTemplate;
  _filterIconTemplate;
  _cancelIconTemplate;
  _onIconTemplate;
  _offIconTemplate;
  filterOptions;
  _options = signal(null, ...ngDevMode ? [{
    debugName: "_options"
  }] : []);
  _placeholder = signal(void 0, ...ngDevMode ? [{
    debugName: "_placeholder"
  }] : []);
  value;
  hover;
  focused;
  overlayVisible;
  optionsChanged;
  panel;
  dimensionsUpdated;
  hoveredItem;
  selectedOptionUpdated;
  _filterValue = signal(null, ...ngDevMode ? [{
    debugName: "_filterValue"
  }] : []);
  searchValue;
  searchIndex;
  searchTimeout;
  previousSearchChar;
  currentSearchChar;
  preventModelTouched;
  focusedOptionIndex = signal(-1, ...ngDevMode ? [{
    debugName: "focusedOptionIndex"
  }] : []);
  labelId;
  listId;
  clicked = signal(false, ...ngDevMode ? [{
    debugName: "clicked"
  }] : []);
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
  }
  get emptyFilterMessageLabel() {
    return this.emptyFilterMessage || this.config.getTranslation(TranslationKeys.EMPTY_FILTER_MESSAGE);
  }
  get isVisibleClearIcon() {
    return this.modelValue() != null && this.hasSelectedOption() && this.showClear && !this.$disabled();
  }
  get listLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)["listLabel"];
  }
  get focusedOptionId() {
    return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
  }
  visibleOptions = computed(() => {
    const options = this.getAllVisibleAndNonVisibleOptions();
    if (this._filterValue()) {
      const _filterBy = this.filterBy || this.optionLabel;
      const filteredOptions = !_filterBy && !this.filterFields && !this.optionValue ? this.options?.filter((option) => {
        if (option.label) {
          return option.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
        }
        return option.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
      }) : this.filterService.filter(options, this.searchFields(), this._filterValue().trim(), this.filterMatchMode, this.filterLocale);
      if (this.group) {
        const optionGroups = this.options || [];
        const filtered = [];
        optionGroups.forEach((group) => {
          const groupChildren = this.getOptionGroupChildren(group);
          const filteredItems = groupChildren.filter((item) => filteredOptions?.includes(item));
          if (filteredItems.length > 0) filtered.push(__spreadProps(__spreadValues({}, group), {
            [typeof this.optionGroupChildren === "string" ? this.optionGroupChildren : "items"]: [...filteredItems]
          }));
        });
        return this.flatOptions(filtered);
      }
      return filteredOptions;
    }
    return options;
  }, ...ngDevMode ? [{
    debugName: "visibleOptions"
  }] : []);
  label = computed(() => {
    const options = this.getAllVisibleAndNonVisibleOptions();
    const selectedOptionIndex = options.findIndex((option) => {
      const isEqual = this.isOptionValueEqualsModelValue(option);
      return isEqual;
    });
    if (selectedOptionIndex !== -1) {
      const selectedOption = options[selectedOptionIndex];
      return this.getOptionLabel(selectedOption);
    }
    return this.placeholder() || "p-emptylabel";
  }, ...ngDevMode ? [{
    debugName: "label"
  }] : []);
  selectedOption;
  constructor(zone, filterService) {
    super();
    this.zone = zone;
    this.filterService = filterService;
    effect(() => {
      const modelValue = this.modelValue();
      const visibleOptions = this.visibleOptions();
      if (visibleOptions && s(visibleOptions)) {
        const selectedOptionIndex = this.findSelectedOptionIndex();
        if (selectedOptionIndex !== -1 || modelValue === void 0 || typeof modelValue === "string" && modelValue.length === 0 || this.isModelValueNotSet() || this.editable) {
          this.selectedOption = visibleOptions[selectedOptionIndex];
        } else {
          const disabledSelectedIndex = visibleOptions.findIndex((option) => this.isSelected(option));
          if (disabledSelectedIndex !== -1) {
            this.selectedOption = visibleOptions[disabledSelectedIndex];
          }
        }
      }
      if (l(visibleOptions) && (modelValue === void 0 || this.isModelValueNotSet()) && s(this.selectedOption)) {
        this.selectedOption = null;
      }
      if (modelValue !== void 0 && this.editable) {
        this.updateEditableLabel();
      }
      this.cd.markForCheck();
    });
  }
  isModelValueNotSet() {
    return this.modelValue() === null && !this.isOptionValueEqualsModelValue(this.selectedOption);
  }
  getAllVisibleAndNonVisibleOptions() {
    return this.group ? this.flatOptions(this.options) : this.options || [];
  }
  onInit() {
    this.id = this.id || s2("pn_id_");
    this.autoUpdateModel();
    if (this.filterBy) {
      this.filterOptions = {
        filter: (value) => this.onFilterInputChange(value),
        reset: () => this.resetFilter()
      };
    }
  }
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this._itemTemplate = item.template;
          break;
        case "selectedItem":
          this._selectedItemTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
          break;
        case "filter":
          this._filterTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "emptyfilter":
          this._emptyFilterTemplate = item.template;
          break;
        case "empty":
          this._emptyTemplate = item.template;
          break;
        case "group":
          this._groupTemplate = item.template;
          break;
        case "loader":
          this._loaderTemplate = item.template;
          break;
        case "dropdownicon":
          this._dropdownIconTemplate = item.template;
          break;
        case "loadingicon":
          this._loadingIconTemplate = item.template;
          break;
        case "clearicon":
          this._clearIconTemplate = item.template;
          break;
        case "filtericon":
          this._filterIconTemplate = item.template;
          break;
        case "cancelicon":
          this._cancelIconTemplate = item.template;
          break;
        case "onicon":
          this._onIconTemplate = item.template;
          break;
        case "officon":
          this._offIconTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
    if (this.optionsChanged && this.overlayVisible) {
      this.optionsChanged = false;
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          if (this.overlayViewChild) {
            this.overlayViewChild.alignOverlay();
          }
        }, 1);
      });
    }
    if (this.selectedOptionUpdated && this.itemsWrapper) {
      let selectedItem = z(this.overlayViewChild?.overlayViewChild?.nativeElement, "li.p-select-option-selected");
      if (selectedItem) {
        Kt(this.itemsWrapper, selectedItem);
      }
      this.selectedOptionUpdated = false;
    }
  }
  flatOptions(options) {
    return (options || []).reduce((result, option, index) => {
      result.push({
        optionGroup: option,
        group: true,
        index
      });
      const optionGroupChildren = this.getOptionGroupChildren(option);
      optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));
      return result;
    }, []);
  }
  autoUpdateModel() {
    if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
      this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());
      this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()], false);
    }
  }
  onOptionSelect(event, option, isHide = true, preventChange = false) {
    if (this.isOptionDisabled(option)) {
      return;
    }
    if (!this.isSelected(option)) {
      const value = this.getOptionValue(option);
      this.updateModel(value, event);
      this.focusedOptionIndex.set(this.findSelectedOptionIndex());
      preventChange === false && this.onChange.emit({
        originalEvent: event,
        value
      });
    }
    if (isHide) {
      this.hide(true);
    }
  }
  onOptionMouseEnter(event, index) {
    if (this.focusOnHover) {
      this.changeFocusedOptionIndex(event, index);
    }
  }
  updateModel(value, event) {
    this.value = value;
    this.onModelChange(value);
    this.writeModelValue(value);
    this.selectedOptionUpdated = true;
  }
  allowModelChange() {
    return !!this.modelValue() && !this.placeholder() && (this.modelValue() === void 0 || this.modelValue() === null) && !this.editable && this.options && this.options.length;
  }
  isSelected(option) {
    return this.isOptionValueEqualsModelValue(option);
  }
  isOptionValueEqualsModelValue(option) {
    return option !== void 0 && option !== null && !this.isOptionGroup(option) && k2(this.modelValue(), this.getOptionValue(option), this.equalityKey());
  }
  onAfterViewInit() {
    if (this.editable) {
      this.updateEditableLabel();
    }
    this.updatePlaceHolderForFloatingLabel();
  }
  updatePlaceHolderForFloatingLabel() {
    const parentElement = this.el.nativeElement.parentElement;
    const isInFloatingLabel = parentElement?.classList.contains("p-float-label");
    if (parentElement && isInFloatingLabel && !this.selectedOption) {
      const label = parentElement.querySelector("label");
      if (label) {
        this._placeholder.set(label.textContent);
      }
    }
  }
  updateEditableLabel() {
    if (this.editableInputViewChild) {
      this.editableInputViewChild.nativeElement.value = this.getOptionLabel(this.selectedOption) || this.modelValue() || "";
    }
  }
  clearEditableLabel() {
    if (this.editableInputViewChild) {
      this.editableInputViewChild.nativeElement.value = "";
    }
  }
  getOptionIndex(index, scrollerOptions) {
    return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)["index"];
  }
  getOptionLabel(option) {
    return this.optionLabel !== void 0 && this.optionLabel !== null ? p(option, this.optionLabel) : option && option.label !== void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue && this.optionValue !== null ? p(option, this.optionValue) : !this.optionLabel && option && option.value !== void 0 ? option.value : option;
  }
  getPTItemOptions(option, itemOptions, index, key) {
    return this.ptm(key, {
      context: {
        option,
        index,
        selected: this.isSelected(option),
        focused: this.focusedOptionIndex() === this.getOptionIndex(index, itemOptions),
        disabled: this.isOptionDisabled(option)
      }
    });
  }
  isSelectedOptionEmpty() {
    return l(this.selectedOption);
  }
  isOptionDisabled(option) {
    return this.optionDisabled ? p(option, this.optionDisabled) : option && option.disabled !== void 0 ? option.disabled : false;
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel !== void 0 && this.optionGroupLabel !== null ? p(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label !== void 0 ? optionGroup.label : optionGroup;
  }
  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren !== void 0 && this.optionGroupChildren !== null ? p(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }
  getAriaPosInset(index) {
    return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
  }
  get ariaSetSize() {
    return this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length;
  }
  /**
   * Callback to invoke on filter reset.
   * @group Method
   */
  resetFilter() {
    this._filterValue.set(null);
    if (this.filterViewChild && this.filterViewChild.nativeElement) {
      this.filterViewChild.nativeElement.value = "";
    }
  }
  onContainerClick(event) {
    if (this.$disabled() || this.readonly || this.loading) {
      return;
    }
    if (event.target.tagName === "INPUT" || event.target.getAttribute("data-pc-section") === "clearicon" || event.target.closest('[data-pc-section="clearicon"]')) {
      return;
    } else if (!this.overlayViewChild || !this.overlayViewChild.el.nativeElement.contains(event.target)) {
      this.overlayVisible ? this.hide(true) : this.show(true);
    }
    this.focusInputViewChild?.nativeElement.focus({
      preventScroll: true
    });
    this.onClick.emit(event);
    this.clicked.set(true);
    this.cd.detectChanges();
  }
  isEmpty() {
    return !this._options() || this.visibleOptions() && this.visibleOptions().length === 0;
  }
  onEditableInput(event) {
    const value = event.target.value;
    this.searchValue = "";
    const matched = this.searchOptions(event, value);
    !matched && this.focusedOptionIndex.set(-1);
    this.onModelChange(value);
    this.updateModel(value || null, event);
    setTimeout(() => {
      this.onChange.emit({
        originalEvent: event,
        value
      });
    }, 1);
    !this.overlayVisible && s(value) && this.show();
  }
  /**
   * Displays the panel.
   * @group Method
   */
  show(isFocus) {
    this.overlayVisible = true;
    this.focusedOptionIndex.set(this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.editable ? -1 : this.findSelectedOptionIndex());
    if (isFocus) {
      bt(this.focusInputViewChild?.nativeElement);
    }
    this.cd.markForCheck();
  }
  onOverlayAnimationStart(event) {
    if (event.toState === "visible") {
      this.itemsWrapper = z(this.overlayViewChild?.overlayViewChild?.nativeElement, this.virtualScroll ? ".p-scroller" : ".p-select-list-container");
      this.virtualScroll && this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
      if (this.options && this.options.length) {
        if (this.virtualScroll) {
          const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
          if (selectedIndex !== -1) {
            this.scroller?.scrollToIndex(selectedIndex);
          }
        } else {
          let selectedListItem = z(this.itemsWrapper, ".p-select-option.p-select-option-selected");
          if (selectedListItem) {
            selectedListItem.scrollIntoView({
              block: "nearest",
              inline: "nearest"
            });
          }
        }
      }
      if (this.filterViewChild && this.filterViewChild.nativeElement) {
        this.preventModelTouched = true;
        if (this.autofocusFilter && !this.editable) {
          this.filterViewChild.nativeElement.focus();
        }
      }
      this.onShow.emit(event);
    }
    if (event.toState === "void") {
      this.itemsWrapper = null;
      this.onModelTouched();
      this.onHide.emit(event);
    }
  }
  /**
   * Hides the panel.
   * @group Method
   */
  hide(isFocus) {
    this.overlayVisible = false;
    this.focusedOptionIndex.set(-1);
    this.clicked.set(false);
    this.searchValue = "";
    if (this.overlayOptions?.mode === "modal") {
      unblockBodyScroll();
    }
    if (this.filter && this.resetFilterOnHide) {
      this.resetFilter();
    }
    if (isFocus) {
      if (this.focusInputViewChild) {
        bt(this.focusInputViewChild?.nativeElement);
      }
      if (this.editable && this.editableInputViewChild) {
        bt(this.editableInputViewChild?.nativeElement);
      }
    }
    this.cd.markForCheck();
  }
  onInputFocus(event) {
    if (this.$disabled()) {
      return;
    }
    this.focused = true;
    const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
    this.focusedOptionIndex.set(focusedOptionIndex);
    this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit(event);
    if (!this.preventModelTouched && !this.overlayVisible) {
      this.onModelTouched();
    }
    this.preventModelTouched = false;
  }
  onKeyDown(event, search = false) {
    if (this.$disabled() || this.readonly || this.loading) {
      return;
    }
    switch (event.code) {
      //down
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      //up
      case "ArrowUp":
        this.onArrowUpKey(event, this.editable);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        this.onArrowLeftKey(event, this.editable);
        break;
      case "Delete":
        this.onDeleteKey(event);
        break;
      case "Home":
        this.onHomeKey(event, this.editable);
        break;
      case "End":
        this.onEndKey(event, this.editable);
        break;
      case "PageDown":
        this.onPageDownKey(event);
        break;
      case "PageUp":
        this.onPageUpKey(event);
        break;
      //space
      case "Space":
        this.onSpaceKey(event, search);
        break;
      //enter
      case "Enter":
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      //escape and tab
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "Backspace":
        this.onBackspaceKey(event, this.editable);
        break;
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        if (!event.metaKey && J(event.key)) {
          !this.overlayVisible && this.show();
          !this.editable && this.searchOptions(event, event.key);
        }
        break;
    }
    this.clicked.set(false);
  }
  onFilterKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event, true);
        break;
      case "ArrowLeft":
      case "ArrowRight":
        this.onArrowLeftKey(event, true);
        break;
      case "Home":
        this.onHomeKey(event, true);
        break;
      case "End":
        this.onEndKey(event, true);
        break;
      case "Enter":
      case "NumpadEnter":
        this.onEnterKey(event, true);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event, true);
        break;
      default:
        break;
    }
  }
  onFilterBlur(event) {
    this.focusedOptionIndex.set(-1);
  }
  onArrowDownKey(event) {
    if (!this.overlayVisible) {
      this.show();
      this.editable && this.changeFocusedOptionIndex(event, this.findSelectedOptionIndex());
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
    }
    event.preventDefault();
    event.stopPropagation();
  }
  changeFocusedOptionIndex(event, index) {
    if (this.focusedOptionIndex() !== index) {
      this.focusedOptionIndex.set(index);
      this.scrollInView();
      if (this.selectOnFocus) {
        const option = this.visibleOptions()[index];
        this.onOptionSelect(event, option, false);
      }
    }
  }
  get virtualScrollerDisabled() {
    return !this.virtualScroll;
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
    if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
      const element = z(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
      if (element) {
        element.scrollIntoView && element.scrollIntoView({
          block: "nearest",
          inline: "nearest"
        });
      } else if (!this.virtualScrollerDisabled) {
        setTimeout(() => {
          this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
        }, 0);
      }
    }
  }
  hasSelectedOption() {
    return this.modelValue() !== void 0;
  }
  isValidSelectedOption(option) {
    return this.isValidOption(option) && this.isSelected(option);
  }
  equalityKey() {
    return this.optionValue ? void 0 : this.dataKey;
  }
  findFirstFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
  }
  findFirstOptionIndex() {
    return this.visibleOptions().findIndex((option) => this.isValidOption(option));
  }
  findSelectedOptionIndex() {
    return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
  }
  findNextOptionIndex(index) {
    const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
  }
  findPrevOptionIndex(index) {
    const matchedOptionIndex = index > 0 ? M(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
    return matchedOptionIndex > -1 ? matchedOptionIndex : index;
  }
  findLastOptionIndex() {
    return M(this.visibleOptions(), (option) => this.isValidOption(option));
  }
  findLastFocusedOptionIndex() {
    const selectedIndex = this.findSelectedOptionIndex();
    return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
  }
  isValidOption(option) {
    return option !== void 0 && option !== null && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
  }
  isOptionGroup(option) {
    return this.optionGroupLabel !== void 0 && this.optionGroupLabel !== null && option.optionGroup !== void 0 && option.optionGroup !== null && option.group;
  }
  onArrowUpKey(event, pressedInInputText = false) {
    if (event.altKey && !pressedInInputText) {
      if (this.focusedOptionIndex() !== -1) {
        const option = this.visibleOptions()[this.focusedOptionIndex()];
        this.onOptionSelect(event, option);
      }
      this.overlayVisible && this.hide();
    } else {
      const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
      this.changeFocusedOptionIndex(event, optionIndex);
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
    event.stopPropagation();
  }
  onArrowLeftKey(event, pressedInInputText = false) {
    pressedInInputText && this.focusedOptionIndex.set(-1);
  }
  onDeleteKey(event) {
    if (this.showClear) {
      this.clear(event);
      event.preventDefault();
    }
  }
  onHomeKey(event, pressedInInputText = false) {
    if (pressedInInputText && event.currentTarget && event.currentTarget.setSelectionRange) {
      const target = event.currentTarget;
      if (event.shiftKey) {
        target.setSelectionRange(0, target.value.length);
      } else {
        target.setSelectionRange(0, 0);
        this.focusedOptionIndex.set(-1);
      }
    } else {
      this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onEndKey(event, pressedInInputText = false) {
    if (pressedInInputText && event.currentTarget && event.currentTarget.setSelectionRange) {
      const target = event.currentTarget;
      if (event.shiftKey) {
        target.setSelectionRange(0, target.value.length);
      } else {
        const len = target.value.length;
        target.setSelectionRange(len, len);
        this.focusedOptionIndex.set(-1);
      }
    } else {
      this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
      !this.overlayVisible && this.show();
    }
    event.preventDefault();
  }
  onPageDownKey(event) {
    this.scrollInView(this.visibleOptions().length - 1);
    event.preventDefault();
  }
  onPageUpKey(event) {
    this.scrollInView(0);
    event.preventDefault();
  }
  onSpaceKey(event, pressedInInputText = false) {
    !this.editable && !pressedInInputText && this.onEnterKey(event);
  }
  onEnterKey(event, pressedInInput = false) {
    if (!this.overlayVisible) {
      this.focusedOptionIndex.set(-1);
      this.onArrowDownKey(event);
    } else {
      if (this.focusedOptionIndex() !== -1) {
        const option = this.visibleOptions()[this.focusedOptionIndex()];
        this.onOptionSelect(event, option);
      }
      !pressedInInput && this.hide();
    }
    event.preventDefault();
  }
  onEscapeKey(event) {
    if (this.overlayVisible) {
      this.hide(true);
      event.preventDefault();
      event.stopPropagation();
    }
  }
  onTabKey(event, pressedInInputText = false) {
    if (!pressedInInputText) {
      if (this.overlayVisible && this.hasFocusableElements()) {
        bt(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay?.nativeElement : this.firstHiddenFocusableElementOnOverlay?.nativeElement);
        event.preventDefault();
      } else {
        if (this.focusedOptionIndex() !== -1 && this.overlayVisible) {
          const option = this.visibleOptions()[this.focusedOptionIndex()];
          this.onOptionSelect(event, option);
        }
        this.overlayVisible && this.hide(this.filter);
      }
    }
    event.stopPropagation();
  }
  onFirstHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? vt(this.overlayViewChild?.el?.nativeElement, ":not(.p-hidden-focusable)") : this.focusInputViewChild?.nativeElement;
    bt(focusableEl);
  }
  onLastHiddenFocus(event) {
    const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? Lt(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
    bt(focusableEl);
  }
  hasFocusableElements() {
    return b(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])').length > 0;
  }
  onBackspaceKey(event, pressedInInputText = false) {
    if (pressedInInputText) {
      !this.overlayVisible && this.show();
    }
  }
  searchFields() {
    return this.filterBy?.split(",") || this.filterFields || [this.optionLabel];
  }
  searchOptions(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let optionIndex = -1;
    let matched = false;
    optionIndex = this.visibleOptions().findIndex((option) => this.isOptionMatched(option));
    if (optionIndex !== -1) {
      matched = true;
    }
    if (optionIndex === -1 && this.focusedOptionIndex() === -1) {
      optionIndex = this.findFirstFocusedOptionIndex();
    }
    if (optionIndex !== -1) {
      setTimeout(() => {
        this.changeFocusedOptionIndex(event, optionIndex);
      });
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  isOptionMatched(option) {
    return this.isValidOption(option) && this.getOptionLabel(option).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue?.toLocaleLowerCase(this.filterLocale));
  }
  onFilterInputChange(event) {
    let value = event.target.value;
    this._filterValue.set(value);
    this.focusedOptionIndex.set(-1);
    this.onFilter.emit({
      originalEvent: event,
      filter: this._filterValue()
    });
    !this.virtualScrollerDisabled && this.scroller?.scrollToIndex(0);
    setTimeout(() => {
      this.overlayViewChild?.alignOverlay();
    });
    this.cd.markForCheck();
  }
  applyFocus() {
    if (this.editable) z(this.el.nativeElement, ".p-dropdown-label.p-inputtext").focus();
    else bt(this.focusInputViewChild?.nativeElement);
  }
  /**
   * Applies focus.
   * @group Method
   */
  focus() {
    this.applyFocus();
  }
  /**
   * Clears the model.
   * @group Method
   */
  clear(event) {
    this.updateModel(null, event);
    this.clearEditableLabel();
    this.onModelTouched();
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    this.onClear.emit(event);
    this.resetFilter();
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    if (this.filter) {
      this.resetFilter();
    }
    this.value = value;
    this.allowModelChange() && this.onModelChange(value);
    setModelValue(this.value);
    this.updateEditableLabel();
    this.cd.markForCheck();
  }
  static ɵfac = function Select_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Select)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(FilterService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Select,
    selectors: [["p-select"]],
    contentQueries: function Select_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c22, 4);
        ɵɵcontentQuery(dirIndex, _c32, 4);
        ɵɵcontentQuery(dirIndex, _c42, 4);
        ɵɵcontentQuery(dirIndex, _c52, 4);
        ɵɵcontentQuery(dirIndex, _c62, 4);
        ɵɵcontentQuery(dirIndex, _c7, 4);
        ɵɵcontentQuery(dirIndex, _c8, 4);
        ɵɵcontentQuery(dirIndex, _c9, 4);
        ɵɵcontentQuery(dirIndex, _c10, 4);
        ɵɵcontentQuery(dirIndex, _c11, 4);
        ɵɵcontentQuery(dirIndex, _c122, 4);
        ɵɵcontentQuery(dirIndex, _c13, 4);
        ɵɵcontentQuery(dirIndex, _c14, 4);
        ɵɵcontentQuery(dirIndex, _c15, 4);
        ɵɵcontentQuery(dirIndex, _c16, 4);
        ɵɵcontentQuery(dirIndex, _c17, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.groupTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loaderTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.selectedItemTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.emptyFilterTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.emptyTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdownIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.clearIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.onIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.offIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cancelIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Select_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c7, 5);
        ɵɵviewQuery(_c18, 5);
        ɵɵviewQuery(_c19, 5);
        ɵɵviewQuery(_c20, 5);
        ɵɵviewQuery(_c21, 5);
        ɵɵviewQuery(_c222, 5);
        ɵɵviewQuery(_c23, 5);
        ɵɵviewQuery(_c24, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.focusInputViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editableInputViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemsViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scroller = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlayViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.firstHiddenFocusableElementOnOverlay = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.lastHiddenFocusableElementOnOverlay = _t.first);
      }
    },
    hostVars: 3,
    hostBindings: function Select_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function Select_click_HostBindingHandler($event) {
          return ctx.onContainerClick($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("id", ctx.id);
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      id: "id",
      scrollHeight: "scrollHeight",
      filter: [2, "filter", "filter", booleanAttribute],
      panelStyle: "panelStyle",
      styleClass: "styleClass",
      panelStyleClass: "panelStyleClass",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      editable: [2, "editable", "editable", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      placeholder: "placeholder",
      loadingIcon: "loadingIcon",
      filterPlaceholder: "filterPlaceholder",
      filterLocale: "filterLocale",
      inputId: "inputId",
      dataKey: "dataKey",
      filterBy: "filterBy",
      filterFields: "filterFields",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      resetFilterOnHide: [2, "resetFilterOnHide", "resetFilterOnHide", booleanAttribute],
      checkmark: [2, "checkmark", "checkmark", booleanAttribute],
      dropdownIcon: "dropdownIcon",
      loading: [2, "loading", "loading", booleanAttribute],
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionDisabled: "optionDisabled",
      optionGroupLabel: "optionGroupLabel",
      optionGroupChildren: "optionGroupChildren",
      group: [2, "group", "group", booleanAttribute],
      showClear: [2, "showClear", "showClear", booleanAttribute],
      emptyFilterMessage: "emptyFilterMessage",
      emptyMessage: "emptyMessage",
      lazy: [2, "lazy", "lazy", booleanAttribute],
      virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
      virtualScrollOptions: "virtualScrollOptions",
      overlayOptions: "overlayOptions",
      ariaFilterLabel: "ariaFilterLabel",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      filterMatchMode: "filterMatchMode",
      tooltip: "tooltip",
      tooltipPosition: "tooltipPosition",
      tooltipPositionStyle: "tooltipPositionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      focusOnHover: [2, "focusOnHover", "focusOnHover", booleanAttribute],
      selectOnFocus: [2, "selectOnFocus", "selectOnFocus", booleanAttribute],
      autoOptionFocus: [2, "autoOptionFocus", "autoOptionFocus", booleanAttribute],
      autofocusFilter: [2, "autofocusFilter", "autofocusFilter", booleanAttribute],
      filterValue: "filterValue",
      options: "options",
      appendTo: [1, "appendTo"]
    },
    outputs: {
      onChange: "onChange",
      onFilter: "onFilter",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClick: "onClick",
      onShow: "onShow",
      onHide: "onHide",
      onClear: "onClear",
      onLazyLoad: "onLazyLoad"
    },
    features: [ɵɵProvidersFeature([SELECT_VALUE_ACCESSOR, SelectStyle, {
      provide: SELECT_INSTANCE,
      useExisting: _Select
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Select
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 11,
    vars: 16,
    consts: [["elseBlock", ""], ["overlay", ""], ["content", ""], ["focusInput", ""], ["defaultPlaceholder", ""], ["editableInput", ""], ["firstHiddenFocusableEl", ""], ["buildInItems", ""], ["lastHiddenFocusableEl", ""], ["builtInFilterElement", ""], ["filter", ""], ["scroller", ""], ["loader", ""], ["items", ""], ["emptyFilter", ""], ["empty", ""], ["role", "combobox", 3, "class", "pBind", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "pAutoFocus", "focus", "blur", "keydown", 4, "ngIf"], ["type", "text", 3, "class", "pBind", "pAutoFocus", "input", "keydown", "focus", "blur", 4, "ngIf"], [4, "ngIf"], ["role", "button", "aria-label", "dropdown trigger", "aria-haspopup", "listbox", 3, "pBind"], [4, "ngIf", "ngIfElse"], ["hostName", "select", 3, "visibleChange", "onAnimationStart", "onHide", "hostAttrSelector", "pt", "visible", "options", "target", "appendTo"], ["role", "combobox", 3, "focus", "blur", "keydown", "pBind", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", "pAutoFocus"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "text", 3, "input", "keydown", "focus", "blur", "pBind", "pAutoFocus"], ["data-p-icon", "times", 3, "class", "pBind", "click", 4, "ngIf"], [3, "class", "pBind", "click", 4, "ngIf"], ["data-p-icon", "times", 3, "click", "pBind"], [3, "click", "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], ["aria-hidden", "true", 3, "class", "pBind", 4, "ngIf"], ["aria-hidden", "true", 3, "pBind"], [3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "chevron-down", 3, "class", "pBind", 4, "ngIf"], [3, "pBind"], ["data-p-icon", "chevron-down", 3, "pBind"], [3, "ngStyle", "pBind"], ["role", "presentation", 1, "p-hidden-accessible", "p-hidden-focusable", 3, "focus", "pBind"], ["hostName", "select", 3, "items", "style", "itemSize", "autoSize", "lazy", "options", "pt", "onLazyLoad", 4, "ngIf"], [3, "pt"], ["pInputText", "", "type", "text", "role", "searchbox", "autocomplete", "off", 3, "input", "keydown", "blur", "pSize", "value", "variant", "pt"], ["data-p-icon", "search", 3, "pBind", 4, "ngIf"], [3, "pBind", 4, "ngIf"], ["data-p-icon", "search", 3, "pBind"], ["hostName", "select", 3, "onLazyLoad", "items", "itemSize", "autoSize", "lazy", "options", "pt"], ["role", "listbox", 3, "pBind"], ["ngFor", "", 3, "ngForOf"], ["role", "option", 3, "class", "ngStyle", "pBind", 4, "ngIf"], ["role", "option", 3, "ngStyle", "pBind"], [3, "onClick", "onMouseEnter", "id", "option", "checkmark", "selected", "label", "disabled", "template", "focused", "ariaPosInset", "ariaSetSize", "index", "scrollerOptions"]],
    template: function Select_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵtemplate(0, Select_span_0_Template, 6, 23, "span", 16)(1, Select_input_1_Template, 2, 19, "input", 17)(2, Select_ng_container_2_Template, 3, 2, "ng-container", 18);
        ɵɵelementStart(3, "div", 19);
        ɵɵtemplate(4, Select_ng_container_4_Template, 3, 2, "ng-container", 20)(5, Select_ng_template_5_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementStart(7, "p-overlay", 21, 1);
        ɵɵtwoWayListener("visibleChange", function Select_Template_p_overlay_visibleChange_7_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.overlayVisible, $event) || (ctx.overlayVisible = $event);
          return ɵɵresetView($event);
        });
        ɵɵlistener("onAnimationStart", function Select_Template_p_overlay_onAnimationStart_7_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onOverlayAnimationStart($event));
        })("onHide", function Select_Template_p_overlay_onHide_7_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.hide());
        });
        ɵɵtemplate(9, Select_ng_template_9_Template, 13, 22, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        const elseBlock_r23 = ɵɵreference(6);
        ɵɵproperty("ngIf", !ctx.editable);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.editable);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.isVisibleClearIcon);
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("dropdown"));
        ɵɵproperty("pBind", ctx.ptm("dropdown"));
        ɵɵattribute("aria-expanded", ctx.overlayVisible ?? false)("data-pc-section", "trigger");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.loading)("ngIfElse", elseBlock_r23);
        ɵɵadvance(3);
        ɵɵproperty("hostAttrSelector", ctx.$attrSelector)("pt", ctx.ptm("pcOverlay"));
        ɵɵtwoWayProperty("visible", ctx.overlayVisible);
        ɵɵproperty("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.$appendTo());
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, SelectItem, Overlay, Tooltip, AutoFocus, TimesIcon, ChevronDownIcon, SearchIcon, InputText, IconField, InputIcon, Scroller, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Select, [{
    type: Component,
    args: [{
      selector: "p-select",
      standalone: true,
      imports: [CommonModule, SelectItem, Overlay, Tooltip, AutoFocus, TimesIcon, ChevronDownIcon, SearchIcon, InputText, IconField, InputIcon, Scroller, SharedModule, BindModule],
      template: `
        <span
            #focusInput
            [class]="cx('label')"
            *ngIf="!editable"
            [pBind]="ptm('label')"
            [pTooltip]="tooltip"
            [tooltipPosition]="tooltipPosition"
            [positionStyle]="tooltipPositionStyle"
            [tooltipStyleClass]="tooltipStyleClass"
            [attr.aria-disabled]="$disabled()"
            [attr.id]="inputId"
            role="combobox"
            [attr.aria-label]="ariaLabel || (label() === 'p-emptylabel' ? undefined : label())"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-haspopup]="'listbox'"
            [attr.aria-expanded]="overlayVisible ?? false"
            [attr.aria-controls]="overlayVisible ? id + '_list' : null"
            [attr.tabindex]="!$disabled() ? tabindex : -1"
            [pAutoFocus]="autofocus"
            [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            (keydown)="onKeyDown($event)"
            [attr.aria-required]="required()"
            [attr.required]="required() ? '' : undefined"
            [attr.disabled]="$disabled() ? '' : undefined"
        >
            <ng-container *ngIf="!selectedItemTemplate && !_selectedItemTemplate; else defaultPlaceholder">{{ label() === 'p-emptylabel' ? '&nbsp;' : label() }}</ng-container>
            <ng-container *ngIf="(selectedItemTemplate || _selectedItemTemplate) && !isSelectedOptionEmpty()" [ngTemplateOutlet]="selectedItemTemplate || _selectedItemTemplate" [ngTemplateOutletContext]="{ $implicit: selectedOption }"></ng-container>
            <ng-template #defaultPlaceholder>
                <span *ngIf="isSelectedOptionEmpty()">{{ label() === 'p-emptylabel' ? '&nbsp;' : label() }}</span>
            </ng-template>
        </span>
        <input
            *ngIf="editable"
            #editableInput
            type="text"
            [attr.id]="inputId"
            [class]="cx('label')"
            [pBind]="ptm('label')"
            [attr.aria-haspopup]="'listbox'"
            [attr.placeholder]="modelValue() === undefined || modelValue() === null ? placeholder() : undefined"
            [attr.aria-label]="ariaLabel || (label() === 'p-emptylabel' ? undefined : label())"
            (input)="onEditableInput($event)"
            (keydown)="onKeyDown($event)"
            [pAutoFocus]="autofocus"
            [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            [attr.name]="name()"
            [attr.minlength]="minlength()"
            [attr.min]="min()"
            [attr.max]="max()"
            [attr.pattern]="pattern()"
            [attr.size]="inputSize()"
            [attr.maxlength]="maxlength()"
            [attr.required]="required() ? '' : undefined"
            [attr.readonly]="readonly ? '' : undefined"
            [attr.disabled]="$disabled() ? '' : undefined"
        />
        <ng-container *ngIf="isVisibleClearIcon">
            <svg data-p-icon="times" [class]="cx('clearIcon')" [pBind]="ptm('clearIcon')" (click)="clear($event)" *ngIf="!clearIconTemplate && !_clearIconTemplate" [attr.data-pc-section]="'clearicon'" />
            <span [class]="cx('clearIcon')" [pBind]="ptm('clearIcon')" (click)="clear($event)" *ngIf="clearIconTemplate || _clearIconTemplate" [attr.data-pc-section]="'clearicon'">
                <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate; context: { class: cx('clearIcon') }"></ng-template>
            </span>
        </ng-container>

        <div [class]="cx('dropdown')" [pBind]="ptm('dropdown')" role="button" aria-label="dropdown trigger" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible ?? false" [attr.data-pc-section]="'trigger'">
            <ng-container *ngIf="loading; else elseBlock">
                <ng-container *ngIf="loadingIconTemplate || _loadingIconTemplate">
                    <ng-container *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate"></ng-container>
                </ng-container>
                <ng-container *ngIf="!loadingIconTemplate && !_loadingIconTemplate">
                    <span *ngIf="loadingIcon" [class]="cn(cx('loadingIcon'), 'pi-spin' + loadingIcon)" [pBind]="ptm('loadingIcon')" aria-hidden="true"></span>
                    <span *ngIf="!loadingIcon" [class]="cn(cx('loadingIcon'), 'pi pi-spinner pi-spin')" [pBind]="ptm('loadingIcon')" aria-hidden="true"></span>
                </ng-container>
            </ng-container>

            <ng-template #elseBlock>
                <ng-container *ngIf="!dropdownIconTemplate && !_dropdownIconTemplate">
                    <span [class]="cn(cx('dropdownIcon'), dropdownIcon)" [pBind]="ptm('dropdownIcon')" *ngIf="dropdownIcon"></span>
                    <svg data-p-icon="chevron-down" *ngIf="!dropdownIcon" [class]="cx('dropdownIcon')" [pBind]="ptm('dropdownIcon')" />
                </ng-container>
                <span *ngIf="dropdownIconTemplate || _dropdownIconTemplate" [class]="cx('dropdownIcon')" [pBind]="ptm('dropdownIcon')">
                    <ng-template *ngTemplateOutlet="dropdownIconTemplate || _dropdownIconTemplate; context: { class: cx('dropdownIcon') }"></ng-template>
                </span>
            </ng-template>
        </div>

        <p-overlay
            #overlay
            [hostAttrSelector]="$attrSelector"
            hostName="select"
            [pt]="ptm('pcOverlay')"
            [(visible)]="overlayVisible"
            [options]="overlayOptions"
            [target]="'@parent'"
            [appendTo]="$appendTo()"
            (onAnimationStart)="onOverlayAnimationStart($event)"
            (onHide)="hide()"
        >
            <ng-template #content>
                <div [class]="cn(cx('overlay'), panelStyleClass)" [ngStyle]="panelStyle" [pBind]="ptm('overlay')">
                    <span
                        #firstHiddenFocusableEl
                        role="presentation"
                        class="p-hidden-accessible p-hidden-focusable"
                        [attr.tabindex]="0"
                        (focus)="onFirstHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                        [pBind]="ptm('hiddenFirstFocusableEl')"
                    >
                    </span>
                    <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                    <div [class]="cx('header')" *ngIf="filter" (click)="$event.stopPropagation()" [pBind]="ptm('header')">
                        <ng-container *ngIf="filterTemplate || _filterTemplate; else builtInFilterElement">
                            <ng-container *ngTemplateOutlet="filterTemplate || _filterTemplate; context: { options: filterOptions }"></ng-container>
                        </ng-container>
                        <ng-template #builtInFilterElement>
                            <p-iconfield [pt]="ptm('pcFilterContainer')">
                                <input
                                    #filter
                                    pInputText
                                    [pSize]="size()"
                                    type="text"
                                    role="searchbox"
                                    autocomplete="off"
                                    [value]="_filterValue() || ''"
                                    [class]="cx('pcFilter')"
                                    [variant]="$variant()"
                                    [attr.placeholder]="filterPlaceholder"
                                    [attr.aria-owns]="id + '_list'"
                                    (input)="onFilterInputChange($event)"
                                    [attr.aria-label]="ariaFilterLabel"
                                    [attr.aria-activedescendant]="focusedOptionId"
                                    (keydown)="onFilterKeyDown($event)"
                                    (blur)="onFilterBlur($event)"
                                    [pt]="ptm('pcFilter')"
                                />
                                <p-inputicon [pt]="ptm('pcFilterIconContainer')">
                                    <svg data-p-icon="search" *ngIf="!filterIconTemplate && !_filterIconTemplate" [pBind]="ptm('filterIcon')" />
                                    <span *ngIf="filterIconTemplate || _filterIconTemplate" [pBind]="ptm('filterIcon')">
                                        <ng-template *ngTemplateOutlet="filterIconTemplate || _filterIconTemplate"></ng-template>
                                    </span>
                                </p-inputicon>
                            </p-iconfield>
                        </ng-template>
                    </div>
                    <div [class]="cx('listContainer')" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'" [pBind]="ptm('listContainer')">
                        <p-scroller
                            *ngIf="virtualScroll"
                            hostName="select"
                            #scroller
                            [items]="visibleOptions()"
                            [style]="{ height: scrollHeight }"
                            [itemSize]="virtualScrollItemSize"
                            [autoSize]="true"
                            [lazy]="lazy"
                            (onLazyLoad)="onLazyLoad.emit($event)"
                            [options]="virtualScrollOptions"
                            [pt]="ptm('virtualScroller')"
                        >
                            <ng-template #content let-items let-scrollerOptions="options">
                                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                            </ng-template>
                            <ng-container *ngIf="loaderTemplate || _loaderTemplate">
                                <ng-template #loader let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="loaderTemplate || _loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                                </ng-template>
                            </ng-container>
                        </p-scroller>
                        <ng-container *ngIf="!virtualScroll">
                            <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                        </ng-container>

                        <ng-template #buildInItems let-items let-scrollerOptions="options">
                            <ul #items [attr.id]="id + '_list'" [attr.aria-label]="listLabel" [class]="cn(cx('list'), scrollerOptions.contentStyleClass)" [style]="scrollerOptions.contentStyle" role="listbox" [pBind]="ptm('list')">
                                <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                    <ng-container *ngIf="isOptionGroup(option)">
                                        <li [class]="cx('optionGroup')" [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option" [pBind]="ptm('optionGroup')">
                                            <span *ngIf="!groupTemplate && !_groupTemplate" [class]="cx('optionGroupLabel')" [pBind]="ptm('optionGroupLabel')">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                            <ng-container *ngTemplateOutlet="groupTemplate || _groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                        </li>
                                    </ng-container>
                                    <ng-container *ngIf="!isOptionGroup(option)">
                                        <p-selectItem
                                            [id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                            [option]="option"
                                            [checkmark]="checkmark"
                                            [selected]="isSelected(option)"
                                            [label]="getOptionLabel(option)"
                                            [disabled]="isOptionDisabled(option)"
                                            [template]="itemTemplate || _itemTemplate"
                                            [focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                            [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                            [ariaSetSize]="ariaSetSize"
                                            [index]="i"
                                            [scrollerOptions]="scrollerOptions"
                                            (onClick)="onOptionSelect($event, option)"
                                            (onMouseEnter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                        ></p-selectItem>
                                    </ng-container>
                                </ng-template>
                                <li *ngIf="filterValue && isEmpty()" [class]="cx('emptyMessage')" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option" [pBind]="ptm('emptyMessage')">
                                    @if (!emptyFilterTemplate && !_emptyFilterTemplate && !emptyTemplate) {
                                        {{ emptyFilterMessageLabel }}
                                    } @else {
                                        <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || _emptyFilterTemplate || emptyTemplate || _emptyTemplate"></ng-container>
                                    }
                                </li>
                                <li *ngIf="!filterValue && isEmpty()" [class]="cx('emptyMessage')" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option" [pBind]="ptm('emptyMessage')">
                                    @if (!emptyTemplate && !_emptyTemplate) {
                                        {{ emptyMessageLabel || emptyFilterMessageLabel }}
                                    } @else {
                                        <ng-container #empty *ngTemplateOutlet="emptyTemplate || _emptyTemplate"></ng-container>
                                    }
                                </li>
                            </ul>
                        </ng-template>
                    </div>
                    <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                    <span
                        #lastHiddenFocusableEl
                        role="presentation"
                        class="p-hidden-accessible p-hidden-focusable"
                        [pBind]="ptm('hiddenLastFocusableEl')"
                        [attr.tabindex]="0"
                        (focus)="onLastHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                    ></span>
                </div>
            </ng-template>
        </p-overlay>
    `,
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.id]": "id",
        "(click)": "onContainerClick($event)"
      },
      providers: [SELECT_VALUE_ACCESSOR, SelectStyle, {
        provide: SELECT_INSTANCE,
        useExisting: Select
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Select
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: NgZone
  }, {
    type: FilterService
  }], {
    id: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    filter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    panelStyle: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    panelStyleClass: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    editable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }],
    loadingIcon: [{
      type: Input
    }],
    filterPlaceholder: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    filterBy: [{
      type: Input
    }],
    filterFields: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    resetFilterOnHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    checkmark: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dropdownIcon: [{
      type: Input
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    optionLabel: [{
      type: Input
    }],
    optionValue: [{
      type: Input
    }],
    optionDisabled: [{
      type: Input
    }],
    optionGroupLabel: [{
      type: Input
    }],
    optionGroupChildren: [{
      type: Input
    }],
    group: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    emptyFilterMessage: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    virtualScrollItemSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    overlayOptions: [{
      type: Input
    }],
    ariaFilterLabel: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    filterMatchMode: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    tooltipPosition: [{
      type: Input
    }],
    tooltipPositionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    focusOnHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoOptionFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocusFilter: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterValue: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    appendTo: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "appendTo",
        required: false
      }]
    }],
    onChange: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    filterViewChild: [{
      type: ViewChild,
      args: ["filter"]
    }],
    focusInputViewChild: [{
      type: ViewChild,
      args: ["focusInput"]
    }],
    editableInputViewChild: [{
      type: ViewChild,
      args: ["editableInput"]
    }],
    itemsViewChild: [{
      type: ViewChild,
      args: ["items"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    firstHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["firstHiddenFocusableEl"]
    }],
    lastHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["lastHiddenFocusableEl"]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    groupTemplate: [{
      type: ContentChild,
      args: ["group", {
        descendants: false
      }]
    }],
    loaderTemplate: [{
      type: ContentChild,
      args: ["loader", {
        descendants: false
      }]
    }],
    selectedItemTemplate: [{
      type: ContentChild,
      args: ["selectedItem", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    filterTemplate: [{
      type: ContentChild,
      args: ["filter", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    emptyFilterTemplate: [{
      type: ContentChild,
      args: ["emptyfilter", {
        descendants: false
      }]
    }],
    emptyTemplate: [{
      type: ContentChild,
      args: ["empty", {
        descendants: false
      }]
    }],
    dropdownIconTemplate: [{
      type: ContentChild,
      args: ["dropdownicon", {
        descendants: false
      }]
    }],
    loadingIconTemplate: [{
      type: ContentChild,
      args: ["loadingicon", {
        descendants: false
      }]
    }],
    clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon", {
        descendants: false
      }]
    }],
    filterIconTemplate: [{
      type: ContentChild,
      args: ["filtericon", {
        descendants: false
      }]
    }],
    onIconTemplate: [{
      type: ContentChild,
      args: ["onicon", {
        descendants: false
      }]
    }],
    offIconTemplate: [{
      type: ContentChild,
      args: ["officon", {
        descendants: false
      }]
    }],
    cancelIconTemplate: [{
      type: ContentChild,
      args: ["cancelicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var SelectModule = class _SelectModule {
  static ɵfac = function SelectModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SelectModule,
    imports: [Select, SharedModule],
    exports: [Select, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Select, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectModule, [{
    type: NgModule,
    args: [{
      imports: [Select, SharedModule],
      exports: [Select, SharedModule]
    }]
  }], null, null);
})();

export {
  BaseEditableHolder,
  BaseInput,
  ObjectUtils,
  UniqueComponentId,
  zindexutils,
  SelectStyle,
  SelectClasses,
  SELECT_VALUE_ACCESSOR,
  SelectItem,
  Select,
  SelectModule
};
//# sourceMappingURL=chunk-UFTH5W5W.js.map
