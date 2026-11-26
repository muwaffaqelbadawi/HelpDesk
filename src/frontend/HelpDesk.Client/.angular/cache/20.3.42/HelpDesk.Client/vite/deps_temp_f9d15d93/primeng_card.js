import {
  BaseComponent,
  PARENT_INSTANCE
} from "./chunk-5MPHY4WI.js";
import {
  BaseStyle
} from "./chunk-TXBF5NQ3.js";
import {
  Footer,
  Header,
  PrimeTemplate,
  SharedModule
} from "./chunk-IFC3AVWP.js";
import {
  Bind,
  BindModule
} from "./chunk-B7SCZAZL.js";
import {
  k2 as k
} from "./chunk-DNW5GNAL.js";
import {
  CommonModule,
  NgIf,
  NgTemplateOutlet
} from "./chunk-ZBPAMAWO.js";
import "./chunk-VBEFACLT.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-24SGBLIH.js";
import "./chunk-GEBJETWL.js";
import "./chunk-R2QGWZ7S.js";

// node_modules/@primeuix/styles/dist/card/index.mjs
var style = "\n    .p-card {\n        background: dt('card.background');\n        color: dt('card.color');\n        box-shadow: dt('card.shadow');\n        border-radius: dt('card.border.radius');\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-card-caption {\n        display: flex;\n        flex-direction: column;\n        gap: dt('card.caption.gap');\n    }\n\n    .p-card-body {\n        padding: dt('card.body.padding');\n        display: flex;\n        flex-direction: column;\n        gap: dt('card.body.gap');\n    }\n\n    .p-card-title {\n        font-size: dt('card.title.font.size');\n        font-weight: dt('card.title.font.weight');\n    }\n\n    .p-card-subtitle {\n        color: dt('card.subtitle.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-card.mjs
var _c0 = ["header"];
var _c1 = ["title"];
var _c2 = ["subtitle"];
var _c3 = ["content"];
var _c4 = ["footer"];
var _c5 = ["*", [["p-header"]], [["p-footer"]]];
var _c6 = ["*", "p-header", "p-footer"];
function Card_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Card_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵprojection(1, 1);
    ɵɵtemplate(2, Card_div_0_ng_container_2_Template, 1, 0, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("header"));
    ɵɵproperty("pBind", ctx_r0.ptm("header"));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate || ctx_r0._headerTemplate);
  }
}
function Card_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.header);
  }
}
function Card_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Card_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, Card_div_2_ng_container_1_Template, 2, 1, "ng-container", 3)(2, Card_div_2_ng_container_2_Template, 1, 0, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("title"));
    ɵɵproperty("pBind", ctx_r0.ptm("title"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.header && !ctx_r0._titleTemplate && !ctx_r0.titleTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.titleTemplate || ctx_r0._titleTemplate);
  }
}
function Card_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.subheader);
  }
}
function Card_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Card_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, Card_div_3_ng_container_1_Template, 2, 1, "ng-container", 3)(2, Card_div_3_ng_container_2_Template, 1, 0, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("subtitle"));
    ɵɵproperty("pBind", ctx_r0.ptm("subtitle"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.subheader && !ctx_r0._subtitleTemplate && !ctx_r0.subtitleTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.subtitleTemplate || ctx_r0._subtitleTemplate);
  }
}
function Card_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Card_div_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Card_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵprojection(1, 2);
    ɵɵtemplate(2, Card_div_7_ng_container_2_Template, 1, 0, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("footer"));
    ɵɵproperty("pBind", ctx_r0.ptm("footer"));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.footerTemplate || ctx_r0._footerTemplate);
  }
}
var style2 = (
  /*css*/
  `
    ${style}

    .p-card {
        display: block;
    }
`
);
var classes = {
  root: "p-card p-component",
  header: "p-card-header",
  body: "p-card-body",
  caption: "p-card-caption",
  title: "p-card-title",
  subtitle: "p-card-subtitle",
  content: "p-card-content",
  footer: "p-card-footer"
};
var CardStyle = class _CardStyle extends BaseStyle {
  name = "card";
  style = style2;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵCardStyle_BaseFactory;
    return function CardStyle_Factory(__ngFactoryType__) {
      return (ɵCardStyle_BaseFactory || (ɵCardStyle_BaseFactory = ɵɵgetInheritedFactory(_CardStyle)))(__ngFactoryType__ || _CardStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _CardStyle,
    factory: _CardStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardStyle, [{
    type: Injectable
  }], null, null);
})();
var CardClasses;
(function(CardClasses2) {
  CardClasses2["root"] = "p-card";
  CardClasses2["header"] = "p-card-header";
  CardClasses2["body"] = "p-card-body";
  CardClasses2["caption"] = "p-card-caption";
  CardClasses2["title"] = "p-card-title";
  CardClasses2["subtitle"] = "p-card-subtitle";
  CardClasses2["content"] = "p-card-content";
  CardClasses2["footer"] = "p-card-footer";
})(CardClasses || (CardClasses = {}));
var CARD_INSTANCE = new InjectionToken("CARD_INSTANCE");
var Card = class _Card extends BaseComponent {
  $pcCard = inject(CARD_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  _componentStyle = inject(CardStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Header of the card.
   * @group Props
   */
  header;
  /**
   * Subheader of the card.
   * @group Props
   */
  subheader;
  /**
   * Inline style of the element.
   * @group Props
   */
  set style(value) {
    if (!k(this._style(), value)) {
      this._style.set(value);
      if (this.el?.nativeElement) {
        if (value) {
          Object.keys(value).forEach((key) => {
            this.el.nativeElement.style[key] = value[key];
          });
        }
      }
    }
  }
  get style() {
    return this._style();
  }
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  headerFacet;
  footerFacet;
  headerTemplate;
  titleTemplate;
  subtitleTemplate;
  contentTemplate;
  footerTemplate;
  _headerTemplate;
  _titleTemplate;
  _subtitleTemplate;
  _contentTemplate;
  _footerTemplate;
  _style = signal(null, ...ngDevMode ? [{
    debugName: "_style"
  }] : []);
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  templates;
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this._headerTemplate = item.template;
          break;
        case "title":
          this._titleTemplate = item.template;
          break;
        case "subtitle":
          this._subtitleTemplate = item.template;
          break;
        case "content":
          this._contentTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵCard_BaseFactory;
    return function Card_Factory(__ngFactoryType__) {
      return (ɵCard_BaseFactory || (ɵCard_BaseFactory = ɵɵgetInheritedFactory(_Card)))(__ngFactoryType__ || _Card);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Card,
    selectors: [["p-card"]],
    contentQueries: function Card_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, Header, 5);
        ɵɵcontentQuery(dirIndex, Footer, 5);
        ɵɵcontentQuery(dirIndex, _c0, 4);
        ɵɵcontentQuery(dirIndex, _c1, 4);
        ɵɵcontentQuery(dirIndex, _c2, 4);
        ɵɵcontentQuery(dirIndex, _c3, 4);
        ɵɵcontentQuery(dirIndex, _c4, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerFacet = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerFacet = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.titleTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.subtitleTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 4,
    hostBindings: function Card_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleMap(ctx._style());
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      header: "header",
      subheader: "subheader",
      style: "style",
      styleClass: "styleClass"
    },
    features: [ɵɵProvidersFeature([CardStyle, {
      provide: CARD_INSTANCE,
      useExisting: _Card
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Card
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c6,
    decls: 8,
    vars: 11,
    consts: [[3, "pBind", "class", 4, "ngIf"], [3, "pBind"], [4, "ngTemplateOutlet"], [4, "ngIf"]],
    template: function Card_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c5);
        ɵɵtemplate(0, Card_div_0_Template, 3, 4, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵtemplate(2, Card_div_2_Template, 3, 5, "div", 0)(3, Card_div_3_Template, 3, 5, "div", 0);
        ɵɵelementStart(4, "div", 1);
        ɵɵprojection(5);
        ɵɵtemplate(6, Card_ng_container_6_Template, 1, 0, "ng-container", 2);
        ɵɵelementEnd();
        ɵɵtemplate(7, Card_div_7_Template, 3, 4, "div", 0);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.headerFacet || ctx.headerTemplate || ctx._headerTemplate);
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("body"));
        ɵɵproperty("pBind", ctx.ptm("body"));
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.header || ctx.titleTemplate || ctx._titleTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.subheader || ctx.subtitleTemplate || ctx._subtitleTemplate);
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("content"));
        ɵɵproperty("pBind", ctx.ptm("content"));
        ɵɵadvance(2);
        ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.footerFacet || ctx.footerTemplate || ctx._footerTemplate);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Card, [{
    type: Component,
    args: [{
      selector: "p-card",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      template: `
        <div [pBind]="ptm('header')" [class]="cx('header')" *ngIf="headerFacet || headerTemplate || _headerTemplate">
            <ng-content select="p-header"></ng-content>
            <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
        </div>
        <div [pBind]="ptm('body')" [class]="cx('body')">
            <div [pBind]="ptm('title')" [class]="cx('title')" *ngIf="header || titleTemplate || _titleTemplate">
                <ng-container *ngIf="header && !_titleTemplate && !titleTemplate">{{ header }}</ng-container>
                <ng-container *ngTemplateOutlet="titleTemplate || _titleTemplate"></ng-container>
            </div>
            <div [pBind]="ptm('subtitle')" [class]="cx('subtitle')" *ngIf="subheader || subtitleTemplate || _subtitleTemplate">
                <ng-container *ngIf="subheader && !_subtitleTemplate && !subtitleTemplate">{{ subheader }}</ng-container>
                <ng-container *ngTemplateOutlet="subtitleTemplate || _subtitleTemplate"></ng-container>
            </div>
            <div [pBind]="ptm('content')" [class]="cx('content')">
                <ng-content></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            </div>
            <div [pBind]="ptm('footer')" [class]="cx('footer')" *ngIf="footerFacet || footerTemplate || _footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [CardStyle, {
        provide: CARD_INSTANCE,
        useExisting: Card
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Card
      }],
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[style]": "_style()"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    header: [{
      type: Input
    }],
    subheader: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    headerFacet: [{
      type: ContentChild,
      args: [Header]
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    titleTemplate: [{
      type: ContentChild,
      args: ["title", {
        descendants: false
      }]
    }],
    subtitleTemplate: [{
      type: ContentChild,
      args: ["subtitle", {
        descendants: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var CardModule = class _CardModule {
  static ɵfac = function CardModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CardModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _CardModule,
    imports: [Card, SharedModule, BindModule],
    exports: [Card, SharedModule, BindModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Card, SharedModule, BindModule, SharedModule, BindModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CardModule, [{
    type: NgModule,
    args: [{
      imports: [Card, SharedModule, BindModule],
      exports: [Card, SharedModule, BindModule]
    }]
  }], null, null);
})();
export {
  Card,
  CardClasses,
  CardModule,
  CardStyle
};
//# sourceMappingURL=primeng_card.js.map
