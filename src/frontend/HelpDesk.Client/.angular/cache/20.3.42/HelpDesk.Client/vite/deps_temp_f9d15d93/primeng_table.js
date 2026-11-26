import {
  BaseEditableHolder,
  BaseInput,
  ObjectUtils,
  Select,
  SelectModule,
  UniqueComponentId,
  zindexutils
} from "./chunk-UFTH5W5W.js";
import {
  Scroller,
  ScrollerModule
} from "./chunk-YSVS4VZO.js";
import {
  InputText,
  InputTextModule
} from "./chunk-NYTSX6XG.js";
import {
  Badge,
  BadgeModule,
  Button,
  ButtonModule
} from "./chunk-2KNTLR3U.js";
import {
  AutoFocus,
  ConnectedOverlayScrollHandler,
  DomHandler,
  blockBodyScroll,
  unblockBodyScroll
} from "./chunk-P2CXEK45.js";
import "./chunk-XG76DNSE.js";
import "./chunk-3TPBOFTS.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-LNYW3TTT.js";
import {
  Ripple
} from "./chunk-FFMHGGP3.js";
import {
  AngleDoubleLeftIcon,
  AngleDoubleRightIcon,
  AngleDownIcon,
  AngleLeftIcon,
  AngleRightIcon,
  AngleUpIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  BaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  FilterIcon,
  FilterSlashIcon,
  MinusIcon,
  PlusIcon,
  SortAltIcon,
  SortAmountDownIcon,
  SortAmountUpAltIcon,
  SpinnerIcon,
  TimesIcon,
  TrashIcon
} from "./chunk-N5QPV64T.js";
import {
  BaseComponent,
  PARENT_INSTANCE
} from "./chunk-5MPHY4WI.js";
import {
  BaseStyle
} from "./chunk-TXBF5NQ3.js";
import {
  FilterMatchMode,
  FilterOperator,
  FilterService,
  OverlayService,
  PrimeTemplate,
  SharedModule,
  TranslationKeys
} from "./chunk-IFC3AVWP.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgModel,
  RequiredValidator
} from "./chunk-YPLNGY7L.js";
import {
  Bind,
  BindModule
} from "./chunk-B7SCZAZL.js";
import {
  D,
  Ht,
  I,
  Mt,
  O,
  R,
  S,
  W,
  Y,
  Yt,
  _t,
  b,
  k2 as k,
  p,
  q,
  s2 as s,
  s3 as s2,
  ut,
  v,
  z
} from "./chunk-DNW5GNAL.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-ZBPAMAWO.js";
import "./chunk-VBEFACLT.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
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
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomProperty,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵpureFunction6,
  ɵɵpureFunction7,
  ɵɵpureFunctionV,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-24SGBLIH.js";
import {
  Subject
} from "./chunk-GEBJETWL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-R2QGWZ7S.js";

// node_modules/@primeuix/styles/dist/datatable/index.mjs
var style2 = "\n    .p-datatable {\n        position: relative;\n        display: block;\n    }\n\n    .p-datatable-table {\n        border-spacing: 0;\n        border-collapse: separate;\n        width: 100%;\n    }\n\n    .p-datatable-scrollable > .p-datatable-table-container {\n        position: relative;\n    }\n\n    .p-datatable-scrollable-table > .p-datatable-thead {\n        inset-block-start: 0;\n        z-index: 1;\n    }\n\n    .p-datatable-scrollable-table > .p-datatable-frozen-tbody {\n        position: sticky;\n        z-index: 1;\n    }\n\n    .p-datatable-scrollable-table > .p-datatable-tfoot {\n        inset-block-end: 0;\n        z-index: 1;\n    }\n\n    .p-datatable-scrollable .p-datatable-frozen-column {\n        position: sticky;\n    }\n\n    .p-datatable-scrollable th.p-datatable-frozen-column {\n        z-index: 1;\n    }\n\n    .p-datatable-scrollable td.p-datatable-frozen-column {\n        background: inherit;\n    }\n\n    .p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-thead,\n    .p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-thead {\n        background: dt('datatable.header.cell.background');\n    }\n\n    .p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-tfoot,\n    .p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-tfoot {\n        background: dt('datatable.footer.cell.background');\n    }\n\n    .p-datatable-flex-scrollable {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n    }\n\n    .p-datatable-flex-scrollable > .p-datatable-table-container {\n        display: flex;\n        flex-direction: column;\n        flex: 1;\n        height: 100%;\n    }\n\n    .p-datatable-scrollable-table > .p-datatable-tbody > .p-datatable-row-group-header {\n        position: sticky;\n        z-index: 1;\n    }\n\n    .p-datatable-resizable-table > .p-datatable-thead > tr > th,\n    .p-datatable-resizable-table > .p-datatable-tfoot > tr > td,\n    .p-datatable-resizable-table > .p-datatable-tbody > tr > td {\n        overflow: hidden;\n        white-space: nowrap;\n    }\n\n    .p-datatable-resizable-table > .p-datatable-thead > tr > th.p-datatable-resizable-column:not(.p-datatable-frozen-column) {\n        background-clip: padding-box;\n        position: relative;\n    }\n\n    .p-datatable-resizable-table-fit > .p-datatable-thead > tr > th.p-datatable-resizable-column:last-child .p-datatable-column-resizer {\n        display: none;\n    }\n\n    .p-datatable-column-resizer {\n        display: block;\n        position: absolute;\n        inset-block-start: 0;\n        inset-inline-end: 0;\n        margin: 0;\n        width: dt('datatable.column.resizer.width');\n        height: 100%;\n        padding: 0;\n        cursor: col-resize;\n        border: 1px solid transparent;\n    }\n\n    .p-datatable-column-header-content {\n        display: flex;\n        align-items: center;\n        gap: dt('datatable.header.cell.gap');\n    }\n\n    .p-datatable-column-resize-indicator {\n        width: dt('datatable.resize.indicator.width');\n        position: absolute;\n        z-index: 10;\n        display: none;\n        background: dt('datatable.resize.indicator.color');\n    }\n\n    .p-datatable-row-reorder-indicator-up,\n    .p-datatable-row-reorder-indicator-down {\n        position: absolute;\n        display: none;\n    }\n\n    .p-datatable-reorderable-column,\n    .p-datatable-reorderable-row-handle {\n        cursor: move;\n    }\n\n    .p-datatable-mask {\n        position: absolute;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        z-index: 2;\n    }\n\n    .p-datatable-inline-filter {\n        display: flex;\n        align-items: center;\n        width: 100%;\n        gap: dt('datatable.filter.inline.gap');\n    }\n\n    .p-datatable-inline-filter .p-datatable-filter-element-container {\n        flex: 1 1 auto;\n        width: 1%;\n    }\n\n    .p-datatable-filter-overlay {\n        background: dt('datatable.filter.overlay.select.background');\n        color: dt('datatable.filter.overlay.select.color');\n        border: 1px solid dt('datatable.filter.overlay.select.border.color');\n        border-radius: dt('datatable.filter.overlay.select.border.radius');\n        box-shadow: dt('datatable.filter.overlay.select.shadow');\n        min-width: 12.5rem;\n    }\n\n    .p-datatable-filter-constraint-list {\n        margin: 0;\n        list-style: none;\n        display: flex;\n        flex-direction: column;\n        padding: dt('datatable.filter.constraint.list.padding');\n        gap: dt('datatable.filter.constraint.list.gap');\n    }\n\n    .p-datatable-filter-constraint {\n        padding: dt('datatable.filter.constraint.padding');\n        color: dt('datatable.filter.constraint.color');\n        border-radius: dt('datatable.filter.constraint.border.radius');\n        cursor: pointer;\n        transition:\n            background dt('datatable.transition.duration'),\n            color dt('datatable.transition.duration'),\n            border-color dt('datatable.transition.duration'),\n            box-shadow dt('datatable.transition.duration');\n    }\n\n    .p-datatable-filter-constraint-selected {\n        background: dt('datatable.filter.constraint.selected.background');\n        color: dt('datatable.filter.constraint.selected.color');\n    }\n\n    .p-datatable-filter-constraint:not(.p-datatable-filter-constraint-selected):not(.p-disabled):hover {\n        background: dt('datatable.filter.constraint.focus.background');\n        color: dt('datatable.filter.constraint.focus.color');\n    }\n\n    .p-datatable-filter-constraint:focus-visible {\n        outline: 0 none;\n        background: dt('datatable.filter.constraint.focus.background');\n        color: dt('datatable.filter.constraint.focus.color');\n    }\n\n    .p-datatable-filter-constraint-selected:focus-visible {\n        outline: 0 none;\n        background: dt('datatable.filter.constraint.selected.focus.background');\n        color: dt('datatable.filter.constraint.selected.focus.color');\n    }\n\n    .p-datatable-filter-constraint-separator {\n        border-block-start: 1px solid dt('datatable.filter.constraint.separator.border.color');\n    }\n\n    .p-datatable-popover-filter {\n        display: inline-flex;\n        margin-inline-start: auto;\n    }\n\n    .p-datatable-filter-overlay-popover {\n        background: dt('datatable.filter.overlay.popover.background');\n        color: dt('datatable.filter.overlay.popover.color');\n        border: 1px solid dt('datatable.filter.overlay.popover.border.color');\n        border-radius: dt('datatable.filter.overlay.popover.border.radius');\n        box-shadow: dt('datatable.filter.overlay.popover.shadow');\n        min-width: 12.5rem;\n        padding: dt('datatable.filter.overlay.popover.padding');\n        display: flex;\n        flex-direction: column;\n        gap: dt('datatable.filter.overlay.popover.gap');\n    }\n\n    .p-datatable-filter-operator-dropdown {\n        width: 100%;\n    }\n\n    .p-datatable-filter-rule-list,\n    .p-datatable-filter-rule {\n        display: flex;\n        flex-direction: column;\n        gap: dt('datatable.filter.overlay.popover.gap');\n    }\n\n    .p-datatable-filter-rule {\n        border-block-end: 1px solid dt('datatable.filter.rule.border.color');\n        padding-bottom: dt('datatable.filter.overlay.popover.gap');\n    }\n\n    .p-datatable-filter-rule:last-child {\n        border-block-end: 0 none;\n        padding-bottom: 0;\n    }\n\n    .p-datatable-filter-add-rule-button {\n        width: 100%;\n    }\n\n    .p-datatable-filter-remove-rule-button {\n        width: 100%;\n    }\n\n    .p-datatable-filter-buttonbar {\n        padding: 0;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n    }\n\n    .p-datatable-virtualscroller-spacer {\n        display: flex;\n    }\n\n    .p-datatable .p-virtualscroller .p-virtualscroller-loading {\n        transform: none !important;\n        min-height: 0;\n        position: sticky;\n        inset-block-start: 0;\n        inset-inline-start: 0;\n    }\n\n    .p-datatable-paginator-top {\n        border-color: dt('datatable.paginator.top.border.color');\n        border-style: solid;\n        border-width: dt('datatable.paginator.top.border.width');\n    }\n\n    .p-datatable-paginator-bottom {\n        border-color: dt('datatable.paginator.bottom.border.color');\n        border-style: solid;\n        border-width: dt('datatable.paginator.bottom.border.width');\n    }\n\n    .p-datatable-header {\n        background: dt('datatable.header.background');\n        color: dt('datatable.header.color');\n        border-color: dt('datatable.header.border.color');\n        border-style: solid;\n        border-width: dt('datatable.header.border.width');\n        padding: dt('datatable.header.padding');\n    }\n\n    .p-datatable-footer {\n        background: dt('datatable.footer.background');\n        color: dt('datatable.footer.color');\n        border-color: dt('datatable.footer.border.color');\n        border-style: solid;\n        border-width: dt('datatable.footer.border.width');\n        padding: dt('datatable.footer.padding');\n    }\n\n    .p-datatable-header-cell {\n        padding: dt('datatable.header.cell.padding');\n        background: dt('datatable.header.cell.background');\n        border-color: dt('datatable.header.cell.border.color');\n        border-style: solid;\n        border-width: 0 0 1px 0;\n        color: dt('datatable.header.cell.color');\n        font-weight: normal;\n        text-align: start;\n        transition:\n            background dt('datatable.transition.duration'),\n            color dt('datatable.transition.duration'),\n            border-color dt('datatable.transition.duration'),\n            outline-color dt('datatable.transition.duration'),\n            box-shadow dt('datatable.transition.duration');\n    }\n\n    .p-datatable-column-title {\n        font-weight: dt('datatable.column.title.font.weight');\n    }\n\n    .p-datatable-tbody > tr {\n        outline-color: transparent;\n        background: dt('datatable.row.background');\n        color: dt('datatable.row.color');\n        transition:\n            background dt('datatable.transition.duration'),\n            color dt('datatable.transition.duration'),\n            border-color dt('datatable.transition.duration'),\n            outline-color dt('datatable.transition.duration'),\n            box-shadow dt('datatable.transition.duration');\n    }\n\n    .p-datatable-tbody > tr > td {\n        text-align: start;\n        border-color: dt('datatable.body.cell.border.color');\n        border-style: solid;\n        border-width: 0 0 1px 0;\n        padding: dt('datatable.body.cell.padding');\n    }\n\n    .p-datatable-hoverable .p-datatable-tbody > tr:not(.p-datatable-row-selected):hover {\n        background: dt('datatable.row.hover.background');\n        color: dt('datatable.row.hover.color');\n    }\n\n    .p-datatable-tbody > tr.p-datatable-row-selected {\n        background: dt('datatable.row.selected.background');\n        color: dt('datatable.row.selected.color');\n    }\n\n    .p-datatable-tbody > tr:has(+ .p-datatable-row-selected) > td {\n        border-block-end-color: dt('datatable.body.cell.selected.border.color');\n    }\n\n    .p-datatable-tbody > tr.p-datatable-row-selected > td {\n        border-block-end-color: dt('datatable.body.cell.selected.border.color');\n    }\n\n    .p-datatable-tbody > tr:focus-visible,\n    .p-datatable-tbody > tr.p-datatable-contextmenu-row-selected {\n        box-shadow: dt('datatable.row.focus.ring.shadow');\n        outline: dt('datatable.row.focus.ring.width') dt('datatable.row.focus.ring.style') dt('datatable.row.focus.ring.color');\n        outline-offset: dt('datatable.row.focus.ring.offset');\n    }\n\n    .p-datatable-tfoot > tr > td {\n        text-align: start;\n        padding: dt('datatable.footer.cell.padding');\n        border-color: dt('datatable.footer.cell.border.color');\n        border-style: solid;\n        border-width: 0 0 1px 0;\n        color: dt('datatable.footer.cell.color');\n        background: dt('datatable.footer.cell.background');\n    }\n\n    .p-datatable-column-footer {\n        font-weight: dt('datatable.column.footer.font.weight');\n    }\n\n    .p-datatable-sortable-column {\n        cursor: pointer;\n        user-select: none;\n        outline-color: transparent;\n    }\n\n    .p-datatable-column-title,\n    .p-datatable-sort-icon,\n    .p-datatable-sort-badge {\n        vertical-align: middle;\n    }\n\n    .p-datatable-sort-icon {\n        color: dt('datatable.sort.icon.color');\n        font-size: dt('datatable.sort.icon.size');\n        width: dt('datatable.sort.icon.size');\n        height: dt('datatable.sort.icon.size');\n        transition: color dt('datatable.transition.duration');\n    }\n\n    .p-datatable-sortable-column:not(.p-datatable-column-sorted):hover {\n        background: dt('datatable.header.cell.hover.background');\n        color: dt('datatable.header.cell.hover.color');\n    }\n\n    .p-datatable-sortable-column:not(.p-datatable-column-sorted):hover .p-datatable-sort-icon {\n        color: dt('datatable.sort.icon.hover.color');\n    }\n\n    .p-datatable-column-sorted {\n        background: dt('datatable.header.cell.selected.background');\n        color: dt('datatable.header.cell.selected.color');\n    }\n\n    .p-datatable-column-sorted .p-datatable-sort-icon {\n        color: dt('datatable.header.cell.selected.color');\n    }\n\n    .p-datatable-sortable-column:focus-visible {\n        box-shadow: dt('datatable.header.cell.focus.ring.shadow');\n        outline: dt('datatable.header.cell.focus.ring.width') dt('datatable.header.cell.focus.ring.style') dt('datatable.header.cell.focus.ring.color');\n        outline-offset: dt('datatable.header.cell.focus.ring.offset');\n    }\n\n    .p-datatable-hoverable .p-datatable-selectable-row {\n        cursor: pointer;\n    }\n\n    .p-datatable-tbody > tr.p-datatable-dragpoint-top > td {\n        box-shadow: inset 0 2px 0 0 dt('datatable.drop.point.color');\n    }\n\n    .p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {\n        box-shadow: inset 0 -2px 0 0 dt('datatable.drop.point.color');\n    }\n\n    .p-datatable-loading-icon {\n        font-size: dt('datatable.loading.icon.size');\n        width: dt('datatable.loading.icon.size');\n        height: dt('datatable.loading.icon.size');\n    }\n\n    .p-datatable-gridlines .p-datatable-header {\n        border-width: 1px 1px 0 1px;\n    }\n\n    .p-datatable-gridlines .p-datatable-footer {\n        border-width: 0 1px 1px 1px;\n    }\n\n    .p-datatable-gridlines .p-datatable-paginator-top {\n        border-width: 1px 1px 0 1px;\n    }\n\n    .p-datatable-gridlines .p-datatable-paginator-bottom {\n        border-width: 0 1px 1px 1px;\n    }\n\n    .p-datatable-gridlines .p-datatable-thead > tr > th {\n        border-width: 1px 0 1px 1px;\n    }\n\n    .p-datatable-gridlines .p-datatable-thead > tr > th:last-child {\n        border-width: 1px;\n    }\n\n    .p-datatable-gridlines .p-datatable-tbody > tr > td {\n        border-width: 1px 0 0 1px;\n    }\n\n    .p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {\n        border-width: 1px 1px 0 1px;\n    }\n\n    .p-datatable-gridlines .p-datatable-tbody > tr:last-child > td {\n        border-width: 1px 0 1px 1px;\n    }\n\n    .p-datatable-gridlines .p-datatable-tbody > tr:last-child > td:last-child {\n        border-width: 1px;\n    }\n\n    .p-datatable-gridlines .p-datatable-tfoot > tr > td {\n        border-width: 1px 0 1px 1px;\n    }\n\n    .p-datatable-gridlines .p-datatable-tfoot > tr > td:last-child {\n        border-width: 1px 1px 1px 1px;\n    }\n\n    .p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td {\n        border-width: 0 0 1px 1px;\n    }\n\n    .p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td:last-child {\n        border-width: 0 1px 1px 1px;\n    }\n\n    .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td {\n        border-width: 0 0 1px 1px;\n    }\n\n    .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td:last-child {\n        border-width: 0 1px 1px 1px;\n    }\n\n    .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td {\n        border-width: 0 0 0 1px;\n    }\n\n    .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td:last-child {\n        border-width: 0 1px 0 1px;\n    }\n\n    .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd {\n        background: dt('datatable.row.striped.background');\n    }\n\n    .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-datatable-row-selected {\n        background: dt('datatable.row.selected.background');\n        color: dt('datatable.row.selected.color');\n    }\n\n    .p-datatable-striped.p-datatable-hoverable .p-datatable-tbody > tr:not(.p-datatable-row-selected):hover {\n        background: dt('datatable.row.hover.background');\n        color: dt('datatable.row.hover.color');\n    }\n\n    .p-datatable.p-datatable-sm .p-datatable-header {\n        padding: dt('datatable.header.sm.padding');\n    }\n\n    .p-datatable.p-datatable-sm .p-datatable-thead > tr > th {\n        padding: dt('datatable.header.cell.sm.padding');\n    }\n\n    .p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {\n        padding: dt('datatable.body.cell.sm.padding');\n    }\n\n    .p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {\n        padding: dt('datatable.footer.cell.sm.padding');\n    }\n\n    .p-datatable.p-datatable-sm .p-datatable-footer {\n        padding: dt('datatable.footer.sm.padding');\n    }\n\n    .p-datatable.p-datatable-lg .p-datatable-header {\n        padding: dt('datatable.header.lg.padding');\n    }\n\n    .p-datatable.p-datatable-lg .p-datatable-thead > tr > th {\n        padding: dt('datatable.header.cell.lg.padding');\n    }\n\n    .p-datatable.p-datatable-lg .p-datatable-tbody > tr > td {\n        padding: dt('datatable.body.cell.lg.padding');\n    }\n\n    .p-datatable.p-datatable-lg .p-datatable-tfoot > tr > td {\n        padding: dt('datatable.footer.cell.lg.padding');\n    }\n\n    .p-datatable.p-datatable-lg .p-datatable-footer {\n        padding: dt('datatable.footer.lg.padding');\n    }\n\n    .p-datatable-row-toggle-button {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n        width: dt('datatable.row.toggle.button.size');\n        height: dt('datatable.row.toggle.button.size');\n        color: dt('datatable.row.toggle.button.color');\n        border: 0 none;\n        background: transparent;\n        cursor: pointer;\n        border-radius: dt('datatable.row.toggle.button.border.radius');\n        transition:\n            background dt('datatable.transition.duration'),\n            color dt('datatable.transition.duration'),\n            border-color dt('datatable.transition.duration'),\n            outline-color dt('datatable.transition.duration'),\n            box-shadow dt('datatable.transition.duration');\n        outline-color: transparent;\n        user-select: none;\n    }\n\n    .p-datatable-row-toggle-button:enabled:hover {\n        color: dt('datatable.row.toggle.button.hover.color');\n        background: dt('datatable.row.toggle.button.hover.background');\n    }\n\n    .p-datatable-tbody > tr.p-datatable-row-selected .p-datatable-row-toggle-button:hover {\n        background: dt('datatable.row.toggle.button.selected.hover.background');\n        color: dt('datatable.row.toggle.button.selected.hover.color');\n    }\n\n    .p-datatable-row-toggle-button:focus-visible {\n        box-shadow: dt('datatable.row.toggle.button.focus.ring.shadow');\n        outline: dt('datatable.row.toggle.button.focus.ring.width') dt('datatable.row.toggle.button.focus.ring.style') dt('datatable.row.toggle.button.focus.ring.color');\n        outline-offset: dt('datatable.row.toggle.button.focus.ring.offset');\n    }\n\n    .p-datatable-row-toggle-icon:dir(rtl) {\n        transform: rotate(180deg);\n    }\n";

// node_modules/@primeuix/styles/dist/checkbox/index.mjs
var style3 = "\n    .p-checkbox {\n        position: relative;\n        display: inline-flex;\n        user-select: none;\n        vertical-align: bottom;\n        width: dt('checkbox.width');\n        height: dt('checkbox.height');\n    }\n\n    .p-checkbox-input {\n        cursor: pointer;\n        appearance: none;\n        position: absolute;\n        inset-block-start: 0;\n        inset-inline-start: 0;\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        margin: 0;\n        opacity: 0;\n        z-index: 1;\n        outline: 0 none;\n        border: 1px solid transparent;\n        border-radius: dt('checkbox.border.radius');\n    }\n\n    .p-checkbox-box {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: dt('checkbox.border.radius');\n        border: 1px solid dt('checkbox.border.color');\n        background: dt('checkbox.background');\n        width: dt('checkbox.width');\n        height: dt('checkbox.height');\n        transition:\n            background dt('checkbox.transition.duration'),\n            color dt('checkbox.transition.duration'),\n            border-color dt('checkbox.transition.duration'),\n            box-shadow dt('checkbox.transition.duration'),\n            outline-color dt('checkbox.transition.duration');\n        outline-color: transparent;\n        box-shadow: dt('checkbox.shadow');\n    }\n\n    .p-checkbox-icon {\n        transition-duration: dt('checkbox.transition.duration');\n        color: dt('checkbox.icon.color');\n        font-size: dt('checkbox.icon.size');\n        width: dt('checkbox.icon.size');\n        height: dt('checkbox.icon.size');\n    }\n\n    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {\n        border-color: dt('checkbox.hover.border.color');\n    }\n\n    .p-checkbox-checked .p-checkbox-box {\n        border-color: dt('checkbox.checked.border.color');\n        background: dt('checkbox.checked.background');\n    }\n\n    .p-checkbox-checked .p-checkbox-icon {\n        color: dt('checkbox.icon.checked.color');\n    }\n\n    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {\n        background: dt('checkbox.checked.hover.background');\n        border-color: dt('checkbox.checked.hover.border.color');\n    }\n\n    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {\n        color: dt('checkbox.icon.checked.hover.color');\n    }\n\n    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {\n        border-color: dt('checkbox.focus.border.color');\n        box-shadow: dt('checkbox.focus.ring.shadow');\n        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');\n        outline-offset: dt('checkbox.focus.ring.offset');\n    }\n\n    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {\n        border-color: dt('checkbox.checked.focus.border.color');\n    }\n\n    .p-checkbox.p-invalid > .p-checkbox-box {\n        border-color: dt('checkbox.invalid.border.color');\n    }\n\n    .p-checkbox.p-variant-filled .p-checkbox-box {\n        background: dt('checkbox.filled.background');\n    }\n\n    .p-checkbox-checked.p-variant-filled .p-checkbox-box {\n        background: dt('checkbox.checked.background');\n    }\n\n    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {\n        background: dt('checkbox.checked.hover.background');\n    }\n\n    .p-checkbox.p-disabled {\n        opacity: 1;\n    }\n\n    .p-checkbox.p-disabled .p-checkbox-box {\n        background: dt('checkbox.disabled.background');\n        border-color: dt('checkbox.checked.disabled.border.color');\n    }\n\n    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {\n        color: dt('checkbox.icon.disabled.color');\n    }\n\n    .p-checkbox-sm,\n    .p-checkbox-sm .p-checkbox-box {\n        width: dt('checkbox.sm.width');\n        height: dt('checkbox.sm.height');\n    }\n\n    .p-checkbox-sm .p-checkbox-icon {\n        font-size: dt('checkbox.icon.sm.size');\n        width: dt('checkbox.icon.sm.size');\n        height: dt('checkbox.icon.sm.size');\n    }\n\n    .p-checkbox-lg,\n    .p-checkbox-lg .p-checkbox-box {\n        width: dt('checkbox.lg.width');\n        height: dt('checkbox.lg.height');\n    }\n\n    .p-checkbox-lg .p-checkbox-icon {\n        font-size: dt('checkbox.icon.lg.size');\n        width: dt('checkbox.icon.lg.size');\n        height: dt('checkbox.icon.lg.size');\n    }\n";

// node_modules/primeng/fesm2022/primeng-checkbox.mjs
var _c0 = ["icon"];
var _c1 = ["input"];
var _c2 = (a0, a1) => ({
  checked: a0,
  class: a1
});
function Checkbox_ng_container_3_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cx("icon"));
    ɵɵproperty("ngClass", ctx_r1.checkboxIcon)("pBind", ctx_r1.ptm("icon"));
  }
}
function Checkbox_ng_container_3_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cx("icon"));
    ɵɵproperty("pBind", ctx_r1.ptm("icon"));
  }
}
function Checkbox_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Checkbox_ng_container_3_ng_container_1_span_1_Template, 1, 4, "span", 6)(2, Checkbox_ng_container_3_ng_container_1__svg_svg_2_Template, 1, 3, "svg", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.checkboxIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.checkboxIcon);
  }
}
function Checkbox_ng_container_3__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 10);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.cx("icon"));
    ɵɵproperty("pBind", ctx_r1.ptm("icon"));
  }
}
function Checkbox_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Checkbox_ng_container_3_ng_container_1_Template, 3, 2, "ng-container", 3)(2, Checkbox_ng_container_3__svg_svg_2_Template, 1, 3, "svg", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.checked);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1._indeterminate());
  }
}
function Checkbox_4_ng_template_0_Template(rf, ctx) {
}
function Checkbox_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Checkbox_4_ng_template_0_Template, 0, 0, "ng-template");
  }
}
var style4 = (
  /*css*/
  `
    ${style3}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`
);
var classes = {
  root: ({
    instance
  }) => ["p-checkbox p-component", {
    "p-checkbox-checked p-highlight": instance.checked,
    "p-disabled": instance.$disabled(),
    "p-invalid": instance.invalid(),
    "p-variant-filled": instance.$variant() === "filled",
    "p-checkbox-sm p-inputfield-sm": instance.size() === "small",
    "p-checkbox-lg p-inputfield-lg": instance.size() === "large"
  }],
  box: "p-checkbox-box",
  input: "p-checkbox-input",
  icon: "p-checkbox-icon"
};
var CheckboxStyle = class _CheckboxStyle extends BaseStyle {
  name = "checkbox";
  style = style4;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵCheckboxStyle_BaseFactory;
    return function CheckboxStyle_Factory(__ngFactoryType__) {
      return (ɵCheckboxStyle_BaseFactory || (ɵCheckboxStyle_BaseFactory = ɵɵgetInheritedFactory(_CheckboxStyle)))(__ngFactoryType__ || _CheckboxStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _CheckboxStyle,
    factory: _CheckboxStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxStyle, [{
    type: Injectable
  }], null, null);
})();
var CheckboxClasses;
(function(CheckboxClasses2) {
  CheckboxClasses2["root"] = "p-checkbox";
  CheckboxClasses2["box"] = "p-checkbox-box";
  CheckboxClasses2["input"] = "p-checkbox-input";
  CheckboxClasses2["icon"] = "p-checkbox-icon";
})(CheckboxClasses || (CheckboxClasses = {}));
var CHECKBOX_INSTANCE = new InjectionToken("CHECKBOX_INSTANCE");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Checkbox),
  multi: true
};
var Checkbox = class _Checkbox extends BaseEditableHolder {
  hostName = "";
  /**
   * Value of the checkbox.
   * @group Props
   */
  value;
  /**
   * Allows to select a boolean value instead of multiple values.
   * @group Props
   */
  binary;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Used to define a string that labels the input element.
   * @group Props
   */
  ariaLabel;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Inline style of the input element.
   * @group Props
   */
  inputStyle;
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the input element.
   * @group Props
   */
  inputClass;
  /**
   * When present, it specifies input state as indeterminate.
   * @group Props
   */
  indeterminate = false;
  /**
   * Form control value.
   * @group Props
   */
  formControl;
  /**
   * Icon class of the checkbox icon.
   * @group Props
   */
  checkboxIcon;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Value in checked state.
   * @group Props
   */
  trueValue = true;
  /**
   * Value in unchecked state.
   * @group Props
   */
  falseValue = false;
  /**
   * Specifies the input variant of the component.
   * @defaultValue undefined
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
   * Callback to invoke on value change.
   * @param {CheckboxChangeEvent} event - Custom value change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when the receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  inputViewChild;
  get checked() {
    return this._indeterminate() ? false : this.binary ? this.modelValue() === this.trueValue : q(this.value, this.modelValue());
  }
  _indeterminate = signal(void 0, ...ngDevMode ? [{
    debugName: "_indeterminate"
  }] : []);
  /**
   * The template of the checkbox icon.
   * @group Templates
   */
  checkboxIconTemplate;
  templates;
  _checkboxIconTemplate;
  focused = false;
  _componentStyle = inject(CheckboxStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcCheckbox = inject(CHECKBOX_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{
    debugName: "$variant"
  }] : []);
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._checkboxIconTemplate = item.template;
          break;
        case "checkboxicon":
          this._checkboxIconTemplate = item.template;
          break;
      }
    });
  }
  onChanges(changes) {
    if (changes.indeterminate) {
      this._indeterminate.set(changes.indeterminate.currentValue);
    }
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  updateModel(event2) {
    let newModelValue;
    const selfControl = this.injector.get(NgControl, null, {
      optional: true,
      self: true
    });
    const currentModelValue = selfControl && !this.formControl ? selfControl.value : this.modelValue();
    if (!this.binary) {
      if (this.checked || this._indeterminate()) newModelValue = currentModelValue.filter((val) => !k(val, this.value));
      else newModelValue = currentModelValue ? [...currentModelValue, this.value] : [this.value];
      this.onModelChange(newModelValue);
      this.writeModelValue(newModelValue);
      if (this.formControl) {
        this.formControl.setValue(newModelValue);
      }
    } else {
      newModelValue = this._indeterminate() ? this.trueValue : this.checked ? this.falseValue : this.trueValue;
      this.writeModelValue(newModelValue);
      this.onModelChange(newModelValue);
    }
    if (this._indeterminate()) {
      this._indeterminate.set(false);
    }
    this.onChange.emit({
      checked: newModelValue,
      originalEvent: event2
    });
  }
  handleChange(event2) {
    if (!this.readonly) {
      this.updateModel(event2);
    }
  }
  onInputFocus(event2) {
    this.focused = true;
    this.onFocus.emit(event2);
  }
  onInputBlur(event2) {
    this.focused = false;
    this.onBlur.emit(event2);
    this.onModelTouched();
  }
  focus() {
    this.inputViewChild?.nativeElement.focus();
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    setModelValue(value);
    this.cd.markForCheck();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵCheckbox_BaseFactory;
    return function Checkbox_Factory(__ngFactoryType__) {
      return (ɵCheckbox_BaseFactory || (ɵCheckbox_BaseFactory = ɵɵgetInheritedFactory(_Checkbox)))(__ngFactoryType__ || _Checkbox);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Checkbox,
    selectors: [["p-checkbox"], ["p-checkBox"], ["p-check-box"]],
    contentQueries: function Checkbox_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.checkboxIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.templates = _t2);
      }
    },
    viewQuery: function Checkbox_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.inputViewChild = _t2.first);
      }
    },
    hostVars: 5,
    hostBindings: function Checkbox_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("data-p-highlight", ctx.checked)("data-p-checked", ctx.checked)("data-p-disabled", ctx.$disabled());
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      hostName: "hostName",
      value: "value",
      binary: [2, "binary", "binary", booleanAttribute],
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      inputStyle: "inputStyle",
      styleClass: "styleClass",
      inputClass: "inputClass",
      indeterminate: [2, "indeterminate", "indeterminate", booleanAttribute],
      formControl: "formControl",
      checkboxIcon: "checkboxIcon",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      trueValue: "trueValue",
      falseValue: "falseValue",
      variant: [1, "variant"],
      size: [1, "size"]
    },
    outputs: {
      onChange: "onChange",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [ɵɵProvidersFeature([CHECKBOX_VALUE_ACCESSOR, CheckboxStyle, {
      provide: CHECKBOX_INSTANCE,
      useExisting: _Checkbox
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Checkbox
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 5,
    vars: 24,
    consts: [["input", ""], ["type", "checkbox", 3, "focus", "blur", "change", "checked", "pBind"], [3, "pBind"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-p-icon", "minus", 3, "class", "pBind", 4, "ngIf"], [3, "class", "ngClass", "pBind", 4, "ngIf"], ["data-p-icon", "check", 3, "class", "pBind", 4, "ngIf"], [3, "ngClass", "pBind"], ["data-p-icon", "check", 3, "pBind"], ["data-p-icon", "minus", 3, "pBind"]],
    template: function Checkbox_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "input", 1, 0);
        ɵɵlistener("focus", function Checkbox_Template_input_focus_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputFocus($event));
        })("blur", function Checkbox_Template_input_blur_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputBlur($event));
        })("change", function Checkbox_Template_input_change_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleChange($event));
        });
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 2);
        ɵɵtemplate(3, Checkbox_ng_container_3_Template, 3, 2, "ng-container", 3)(4, Checkbox_4_Template, 1, 0, null, 4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵstyleMap(ctx.inputStyle);
        ɵɵclassMap(ctx.cn(ctx.cx("input"), ctx.inputClass));
        ɵɵproperty("checked", ctx.checked)("pBind", ctx.ptm("input"));
        ɵɵattribute("id", ctx.inputId)("value", ctx.value)("name", ctx.name())("tabindex", ctx.tabindex)("required", ctx.required() ? "" : void 0)("readonly", ctx.readonly ? "" : void 0)("disabled", ctx.$disabled() ? "" : void 0)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel);
        ɵɵadvance(2);
        ɵɵclassMap(ctx.cx("box"));
        ɵɵproperty("pBind", ctx.ptm("box"));
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.checkboxIconTemplate && !ctx._checkboxIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.checkboxIconTemplate || ctx._checkboxIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(21, _c2, ctx.checked, ctx.cx("icon")));
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, SharedModule, CheckIcon, MinusIcon, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Checkbox, [{
    type: Component,
    args: [{
      selector: "p-checkbox, p-checkBox, p-check-box",
      standalone: true,
      imports: [CommonModule, SharedModule, CheckIcon, MinusIcon, BindModule],
      template: `
        <input
            #input
            [attr.id]="inputId"
            type="checkbox"
            [attr.value]="value"
            [attr.name]="name()"
            [checked]="checked"
            [attr.tabindex]="tabindex"
            [attr.required]="required() ? '' : undefined"
            [attr.readonly]="readonly ? '' : undefined"
            [attr.disabled]="$disabled() ? '' : undefined"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-label]="ariaLabel"
            [style]="inputStyle"
            [class]="cn(cx('input'), inputClass)"
            [pBind]="ptm('input')"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            (change)="handleChange($event)"
        />
        <div [class]="cx('box')" [pBind]="ptm('box')">
            <ng-container *ngIf="!checkboxIconTemplate && !_checkboxIconTemplate">
                <ng-container *ngIf="checked">
                    <span *ngIf="checkboxIcon" [class]="cx('icon')" [ngClass]="checkboxIcon" [pBind]="ptm('icon')"></span>
                    <svg data-p-icon="check" *ngIf="!checkboxIcon" [class]="cx('icon')" [pBind]="ptm('icon')" />
                </ng-container>
                <svg data-p-icon="minus" *ngIf="_indeterminate()" [class]="cx('icon')" [pBind]="ptm('icon')" />
            </ng-container>
            <ng-template *ngTemplateOutlet="checkboxIconTemplate || _checkboxIconTemplate; context: { checked: checked, class: cx('icon') }"></ng-template>
        </div>
    `,
      providers: [CHECKBOX_VALUE_ACCESSOR, CheckboxStyle, {
        provide: CHECKBOX_INSTANCE,
        useExisting: Checkbox
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Checkbox
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-p-highlight]": "checked",
        "[attr.data-p-checked]": "checked",
        "[attr.data-p-disabled]": "$disabled()"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    hostName: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    binary: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    inputClass: [{
      type: Input
    }],
    indeterminate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    formControl: [{
      type: Input
    }],
    checkboxIcon: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    trueValue: [{
      type: Input
    }],
    falseValue: [{
      type: Input
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
    onChange: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input"]
    }],
    checkboxIconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var CheckboxModule = class _CheckboxModule {
  static ɵfac = function CheckboxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckboxModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _CheckboxModule,
    imports: [Checkbox, SharedModule],
    exports: [Checkbox, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Checkbox, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [Checkbox, SharedModule],
      exports: [Checkbox, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/datepicker/index.mjs
var style5 = "\n    .p-datepicker {\n        display: inline-flex;\n        max-width: 100%;\n    }\n\n    .p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-input {\n        border-start-end-radius: 0;\n        border-end-end-radius: 0;\n    }\n\n    .p-datepicker-dropdown {\n        cursor: pointer;\n        display: inline-flex;\n        user-select: none;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n        width: dt('datepicker.dropdown.width');\n        border-start-end-radius: dt('datepicker.dropdown.border.radius');\n        border-end-end-radius: dt('datepicker.dropdown.border.radius');\n        background: dt('datepicker.dropdown.background');\n        border: 1px solid dt('datepicker.dropdown.border.color');\n        border-inline-start: 0 none;\n        color: dt('datepicker.dropdown.color');\n        transition:\n            background dt('datepicker.transition.duration'),\n            color dt('datepicker.transition.duration'),\n            border-color dt('datepicker.transition.duration'),\n            outline-color dt('datepicker.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-datepicker-dropdown:not(:disabled):hover {\n        background: dt('datepicker.dropdown.hover.background');\n        border-color: dt('datepicker.dropdown.hover.border.color');\n        color: dt('datepicker.dropdown.hover.color');\n    }\n\n    .p-datepicker-dropdown:not(:disabled):active {\n        background: dt('datepicker.dropdown.active.background');\n        border-color: dt('datepicker.dropdown.active.border.color');\n        color: dt('datepicker.dropdown.active.color');\n    }\n\n    .p-datepicker-dropdown:focus-visible {\n        box-shadow: dt('datepicker.dropdown.focus.ring.shadow');\n        outline: dt('datepicker.dropdown.focus.ring.width') dt('datepicker.dropdown.focus.ring.style') dt('datepicker.dropdown.focus.ring.color');\n        outline-offset: dt('datepicker.dropdown.focus.ring.offset');\n    }\n\n    .p-datepicker:has(.p-datepicker-input-icon-container) {\n        position: relative;\n    }\n\n    .p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-input {\n        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-datepicker-input-icon-container {\n        cursor: pointer;\n        position: absolute;\n        top: 50%;\n        inset-inline-end: dt('form.field.padding.x');\n        margin-block-start: calc(-1 * (dt('icon.size') / 2));\n        color: dt('datepicker.input.icon.color');\n        line-height: 1;\n        z-index: 1;\n    }\n\n    .p-datepicker:has(.p-datepicker-input:disabled) .p-datepicker-input-icon-container {\n        cursor: default;\n    }\n\n    .p-datepicker-fluid {\n        display: flex;\n    }\n\n    .p-datepicker-fluid:has(.p-datepicker-dropdown) .p-datepicker-input {\n        flex: 1 1 auto;\n        width: 1%;\n    }\n\n    .p-datepicker .p-datepicker-panel {\n        min-width: 100%;\n    }\n\n    .p-datepicker-panel {\n        width: auto;\n        padding: dt('datepicker.panel.padding');\n        background: dt('datepicker.panel.background');\n        color: dt('datepicker.panel.color');\n        border: 1px solid dt('datepicker.panel.border.color');\n        border-radius: dt('datepicker.panel.border.radius');\n        box-shadow: dt('datepicker.panel.shadow');\n    }\n\n    .p-datepicker-panel-inline {\n        display: inline-block;\n        overflow-x: auto;\n        box-shadow: none;\n    }\n\n    .p-datepicker-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        padding: dt('datepicker.header.padding');\n        background: dt('datepicker.header.background');\n        color: dt('datepicker.header.color');\n        border-block-end: 1px solid dt('datepicker.header.border.color');\n    }\n\n    .p-datepicker-next-button:dir(rtl) {\n        order: -1;\n    }\n\n    .p-datepicker-prev-button:dir(rtl) {\n        order: 1;\n    }\n\n    .p-datepicker-title {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: dt('datepicker.title.gap');\n        font-weight: dt('datepicker.title.font.weight');\n    }\n\n    .p-datepicker-select-year,\n    .p-datepicker-select-month {\n        border: none;\n        background: transparent;\n        margin: 0;\n        cursor: pointer;\n        font-weight: inherit;\n        transition:\n            background dt('datepicker.transition.duration'),\n            color dt('datepicker.transition.duration'),\n            border-color dt('datepicker.transition.duration'),\n            outline-color dt('datepicker.transition.duration'),\n            box-shadow dt('datepicker.transition.duration');\n    }\n\n    .p-datepicker-select-month {\n        padding: dt('datepicker.select.month.padding');\n        color: dt('datepicker.select.month.color');\n        border-radius: dt('datepicker.select.month.border.radius');\n    }\n\n    .p-datepicker-select-year {\n        padding: dt('datepicker.select.year.padding');\n        color: dt('datepicker.select.year.color');\n        border-radius: dt('datepicker.select.year.border.radius');\n    }\n\n    .p-datepicker-select-month:enabled:hover {\n        background: dt('datepicker.select.month.hover.background');\n        color: dt('datepicker.select.month.hover.color');\n    }\n\n    .p-datepicker-select-year:enabled:hover {\n        background: dt('datepicker.select.year.hover.background');\n        color: dt('datepicker.select.year.hover.color');\n    }\n\n    .p-datepicker-select-month:focus-visible,\n    .p-datepicker-select-year:focus-visible {\n        box-shadow: dt('datepicker.date.focus.ring.shadow');\n        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');\n        outline-offset: dt('datepicker.date.focus.ring.offset');\n    }\n\n    .p-datepicker-calendar-container {\n        display: flex;\n    }\n\n    .p-datepicker-calendar-container .p-datepicker-calendar {\n        flex: 1 1 auto;\n        border-inline-start: 1px solid dt('datepicker.group.border.color');\n        padding-inline-end: dt('datepicker.group.gap');\n        padding-inline-start: dt('datepicker.group.gap');\n    }\n\n    .p-datepicker-calendar-container .p-datepicker-calendar:first-child {\n        padding-inline-start: 0;\n        border-inline-start: 0 none;\n    }\n\n    .p-datepicker-calendar-container .p-datepicker-calendar:last-child {\n        padding-inline-end: 0;\n    }\n\n    .p-datepicker-day-view {\n        width: 100%;\n        border-collapse: collapse;\n        font-size: 1rem;\n        margin: dt('datepicker.day.view.margin');\n    }\n\n    .p-datepicker-weekday-cell {\n        padding: dt('datepicker.week.day.padding');\n    }\n\n    .p-datepicker-weekday {\n        font-weight: dt('datepicker.week.day.font.weight');\n        color: dt('datepicker.week.day.color');\n    }\n\n    .p-datepicker-day-cell {\n        padding: dt('datepicker.date.padding');\n    }\n\n    .p-datepicker-day {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        cursor: pointer;\n        margin: 0 auto;\n        overflow: hidden;\n        position: relative;\n        width: dt('datepicker.date.width');\n        height: dt('datepicker.date.height');\n        border-radius: dt('datepicker.date.border.radius');\n        transition:\n            background dt('datepicker.transition.duration'),\n            color dt('datepicker.transition.duration'),\n            border-color dt('datepicker.transition.duration'),\n            box-shadow dt('datepicker.transition.duration'),\n            outline-color dt('datepicker.transition.duration');\n        border: 1px solid transparent;\n        outline-color: transparent;\n        color: dt('datepicker.date.color');\n    }\n\n    .p-datepicker-day:not(.p-datepicker-day-selected):not(.p-disabled):hover {\n        background: dt('datepicker.date.hover.background');\n        color: dt('datepicker.date.hover.color');\n    }\n\n    .p-datepicker-day:focus-visible {\n        box-shadow: dt('datepicker.date.focus.ring.shadow');\n        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');\n        outline-offset: dt('datepicker.date.focus.ring.offset');\n    }\n\n    .p-datepicker-day-selected {\n        background: dt('datepicker.date.selected.background');\n        color: dt('datepicker.date.selected.color');\n    }\n\n    .p-datepicker-day-selected-range {\n        background: dt('datepicker.date.range.selected.background');\n        color: dt('datepicker.date.range.selected.color');\n    }\n\n    .p-datepicker-today > .p-datepicker-day {\n        background: dt('datepicker.today.background');\n        color: dt('datepicker.today.color');\n    }\n\n    .p-datepicker-today > .p-datepicker-day-selected {\n        background: dt('datepicker.date.selected.background');\n        color: dt('datepicker.date.selected.color');\n    }\n\n    .p-datepicker-today > .p-datepicker-day-selected-range {\n        background: dt('datepicker.date.range.selected.background');\n        color: dt('datepicker.date.range.selected.color');\n    }\n\n    .p-datepicker-weeknumber {\n        text-align: center;\n    }\n\n    .p-datepicker-month-view {\n        margin: dt('datepicker.month.view.margin');\n    }\n\n    .p-datepicker-month {\n        width: 33.3%;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        overflow: hidden;\n        position: relative;\n        padding: dt('datepicker.month.padding');\n        transition:\n            background dt('datepicker.transition.duration'),\n            color dt('datepicker.transition.duration'),\n            border-color dt('datepicker.transition.duration'),\n            box-shadow dt('datepicker.transition.duration'),\n            outline-color dt('datepicker.transition.duration');\n        border-radius: dt('datepicker.month.border.radius');\n        outline-color: transparent;\n        color: dt('datepicker.date.color');\n    }\n\n    .p-datepicker-month:not(.p-disabled):not(.p-datepicker-month-selected):hover {\n        color: dt('datepicker.date.hover.color');\n        background: dt('datepicker.date.hover.background');\n    }\n\n    .p-datepicker-month-selected {\n        color: dt('datepicker.date.selected.color');\n        background: dt('datepicker.date.selected.background');\n    }\n\n    .p-datepicker-month:not(.p-disabled):focus-visible {\n        box-shadow: dt('datepicker.date.focus.ring.shadow');\n        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');\n        outline-offset: dt('datepicker.date.focus.ring.offset');\n    }\n\n    .p-datepicker-year-view {\n        margin: dt('datepicker.year.view.margin');\n    }\n\n    .p-datepicker-year {\n        width: 50%;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        overflow: hidden;\n        position: relative;\n        padding: dt('datepicker.year.padding');\n        transition:\n            background dt('datepicker.transition.duration'),\n            color dt('datepicker.transition.duration'),\n            border-color dt('datepicker.transition.duration'),\n            box-shadow dt('datepicker.transition.duration'),\n            outline-color dt('datepicker.transition.duration');\n        border-radius: dt('datepicker.year.border.radius');\n        outline-color: transparent;\n        color: dt('datepicker.date.color');\n    }\n\n    .p-datepicker-year:not(.p-disabled):not(.p-datepicker-year-selected):hover {\n        color: dt('datepicker.date.hover.color');\n        background: dt('datepicker.date.hover.background');\n    }\n\n    .p-datepicker-year-selected {\n        color: dt('datepicker.date.selected.color');\n        background: dt('datepicker.date.selected.background');\n    }\n\n    .p-datepicker-year:not(.p-disabled):focus-visible {\n        box-shadow: dt('datepicker.date.focus.ring.shadow');\n        outline: dt('datepicker.date.focus.ring.width') dt('datepicker.date.focus.ring.style') dt('datepicker.date.focus.ring.color');\n        outline-offset: dt('datepicker.date.focus.ring.offset');\n    }\n\n    .p-datepicker-buttonbar {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: dt('datepicker.buttonbar.padding');\n        border-block-start: 1px solid dt('datepicker.buttonbar.border.color');\n    }\n\n    .p-datepicker-buttonbar .p-button {\n        width: auto;\n    }\n\n    .p-datepicker-time-picker {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-block-start: 1px solid dt('datepicker.time.picker.border.color');\n        padding: 0;\n        gap: dt('datepicker.time.picker.gap');\n    }\n\n    .p-datepicker-calendar-container + .p-datepicker-time-picker {\n        padding: dt('datepicker.time.picker.padding');\n    }\n\n    .p-datepicker-time-picker > div {\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n        gap: dt('datepicker.time.picker.button.gap');\n    }\n\n    .p-datepicker-time-picker span {\n        font-size: 1rem;\n    }\n\n    .p-datepicker-timeonly .p-datepicker-time-picker {\n        border-block-start: 0 none;\n    }\n\n    .p-datepicker-time-picker:dir(rtl) {\n        flex-direction: row-reverse;\n    }\n\n    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown {\n        width: dt('datepicker.dropdown.sm.width');\n    }\n\n    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown .p-icon,\n    .p-datepicker:has(.p-inputtext-sm) .p-datepicker-input-icon {\n        font-size: dt('form.field.sm.font.size');\n        width: dt('form.field.sm.font.size');\n        height: dt('form.field.sm.font.size');\n    }\n\n    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown {\n        width: dt('datepicker.dropdown.lg.width');\n    }\n\n    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown .p-icon,\n    .p-datepicker:has(.p-inputtext-lg) .p-datepicker-input-icon {\n        font-size: dt('form.field.lg.font.size');\n        width: dt('form.field.lg.font.size');\n        height: dt('form.field.lg.font.size');\n    }\n\n    .p-datepicker-clear-icon {\n        position: absolute;\n        top: 50%;\n        margin-top: -0.5rem;\n        cursor: pointer;\n        color: dt('form.field.icon.color');\n        inset-inline-end: dt('form.field.padding.x');\n    }\n\n    .p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-clear-icon {\n        inset-inline-end: calc(dt('datepicker.dropdown.width') + dt('form.field.padding.x'));\n    }\n\n    .p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-clear-icon {\n        inset-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-datepicker:has(.p-datepicker-clear-icon) .p-datepicker-input {\n        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-datepicker:has(.p-datepicker-input-icon-container):has(.p-datepicker-clear-icon) .p-datepicker-input {\n        padding-inline-end: calc((dt('form.field.padding.x') * 3) + calc(dt('icon.size') * 2));\n    }\n\n    .p-inputgroup .p-datepicker-dropdown {\n        border-radius: 0;\n    }\n\n    .p-inputgroup > .p-datepicker:last-child:has(.p-datepicker-dropdown) > .p-datepicker-input {\n        border-start-end-radius: 0;\n        border-end-end-radius: 0;\n    }\n\n    .p-inputgroup > .p-datepicker:last-child .p-datepicker-dropdown {\n        border-start-end-radius: dt('datepicker.dropdown.border.radius');\n        border-end-end-radius: dt('datepicker.dropdown.border.radius');\n    }\n";

// node_modules/primeng/fesm2022/primeng-datepicker.mjs
var _c02 = ["date"];
var _c12 = ["header"];
var _c22 = ["footer"];
var _c3 = ["disabledDate"];
var _c4 = ["decade"];
var _c5 = ["previousicon"];
var _c6 = ["nexticon"];
var _c7 = ["triggericon"];
var _c8 = ["clearicon"];
var _c9 = ["decrementicon"];
var _c10 = ["incrementicon"];
var _c11 = ["inputicon"];
var _c122 = ["buttonbar"];
var _c13 = ["inputfield"];
var _c14 = ["contentWrapper"];
var _c15 = [[["p-header"]], [["p-footer"]]];
var _c16 = ["p-header", "p-footer"];
var _c17 = (a0) => ({
  clickCallBack: a0
});
var _c18 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c19 = (a0) => ({
  value: "visible",
  params: a0
});
var _c20 = (a0) => ({
  visibility: a0
});
var _c21 = (a0) => ({
  $implicit: a0
});
var _c222 = (a0) => ({
  date: a0
});
var _c23 = (a0, a1) => ({
  month: a0,
  index: a1
});
var _c24 = (a0) => ({
  year: a0
});
var _c25 = (a0, a1) => ({
  todayCallback: a0,
  clearCallback: a1
});
function DatePicker_ng_template_0_ng_container_2__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 10);
    ɵɵlistener("click", function DatePicker_ng_template_0_ng_container_2__svg_svg_1_Template_svg_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.clear());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cx("clearIcon"));
    ɵɵproperty("pBind", ctx_r1.ptm("inputIcon"));
  }
}
function DatePicker_ng_template_0_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_ng_template_0_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_ng_template_0_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_ng_template_0_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 11);
    ɵɵlistener("click", function DatePicker_ng_template_0_ng_container_2_span_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.clear());
    });
    ɵɵtemplate(1, DatePicker_ng_template_0_ng_container_2_span_2_1_Template, 1, 0, null, 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cx("clearIcon"));
    ɵɵproperty("pBind", ctx_r1.ptm("inputIcon"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.clearIconTemplate || ctx_r1._clearIconTemplate);
  }
}
function DatePicker_ng_template_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DatePicker_ng_template_0_ng_container_2__svg_svg_1_Template, 1, 3, "svg", 8)(2, DatePicker_ng_template_0_ng_container_2_span_2_Template, 2, 4, "span", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.clearIconTemplate && !ctx_r1._clearIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.clearIconTemplate || ctx_r1._clearIconTemplate);
  }
}
function DatePicker_ng_template_0_button_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 15);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r1.icon)("pBind", ctx_r1.ptm("dropdownIcon"));
  }
}
function DatePicker_ng_template_0_button_3_ng_container_2__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 17);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("pBind", ctx_r1.ptm("dropdownIcon"));
  }
}
function DatePicker_ng_template_0_button_3_ng_container_2_2_ng_template_0_Template(rf, ctx) {
}
function DatePicker_ng_template_0_button_3_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_ng_template_0_button_3_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_ng_template_0_button_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DatePicker_ng_template_0_button_3_ng_container_2__svg_svg_1_Template, 1, 1, "svg", 16)(2, DatePicker_ng_template_0_button_3_ng_container_2_2_Template, 1, 0, null, 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.triggerIconTemplate && !ctx_r1._triggerIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.triggerIconTemplate || ctx_r1._triggerIconTemplate);
  }
}
function DatePicker_ng_template_0_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 13);
    ɵɵlistener("click", function DatePicker_ng_template_0_button_3_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r5);
      ɵɵnextContext();
      const inputfield_r6 = ɵɵreference(1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onButtonClick($event, inputfield_r6));
    });
    ɵɵtemplate(1, DatePicker_ng_template_0_button_3_span_1_Template, 1, 2, "span", 14)(2, DatePicker_ng_template_0_button_3_ng_container_2_Template, 3, 2, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.cx("dropdown"));
    ɵɵproperty("disabled", ctx_r1.$disabled())("pBind", ctx_r1.ptm("dropdown"));
    ɵɵattribute("aria-label", ctx_r1.iconButtonAriaLabel)("aria-expanded", ctx_r1.overlayVisible ?? false)("aria-controls", ctx_r1.overlayVisible ? ctx_r1.panelId : null);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.icon);
  }
}
function DatePicker_ng_template_0_ng_container_4__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 21);
    ɵɵlistener("click", function DatePicker_ng_template_0_ng_container_4__svg_svg_2_Template_svg_click_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onButtonClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cx("inputIcon"));
    ɵɵproperty("pBind", ctx_r1.ptm("inputIcon"));
  }
}
function DatePicker_ng_template_0_ng_container_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DatePicker_ng_template_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 18);
    ɵɵtemplate(2, DatePicker_ng_template_0_ng_container_4__svg_svg_2_Template, 1, 3, "svg", 19)(3, DatePicker_ng_template_0_ng_container_4_ng_container_3_Template, 1, 0, "ng-container", 20);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.cx("inputIconContainer"));
    ɵɵproperty("pBind", ctx_r1.ptm("inputIconContainer"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.inputIconTemplate && !ctx_r1._inputIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.inputIconTemplate || ctx_r1._inputIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c17, ctx_r1.onButtonClick.bind(ctx_r1)));
  }
}
function DatePicker_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 5, 0);
    ɵɵlistener("focus", function DatePicker_ng_template_0_Template_input_focus_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onInputFocus($event));
    })("keydown", function DatePicker_ng_template_0_Template_input_keydown_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onInputKeydown($event));
    })("click", function DatePicker_ng_template_0_Template_input_click_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onInputClick());
    })("blur", function DatePicker_ng_template_0_Template_input_blur_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onInputBlur($event));
    })("input", function DatePicker_ng_template_0_Template_input_input_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onUserInput($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(2, DatePicker_ng_template_0_ng_container_2_Template, 3, 2, "ng-container", 6)(3, DatePicker_ng_template_0_button_3_Template, 3, 9, "button", 7)(4, DatePicker_ng_template_0_ng_container_4_Template, 4, 8, "ng-container", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("pcInputText"), ctx_r1.inputStyleClass));
    ɵɵproperty("pSize", ctx_r1.size())("value", ctx_r1.inputFieldValue)("ngStyle", ctx_r1.inputStyle)("pAutoFocus", ctx_r1.autofocus)("variant", ctx_r1.$variant())("fluid", ctx_r1.hasFluid)("invalid", ctx_r1.invalid())("pt", ctx_r1.ptm("pcInputText"));
    ɵɵattribute("size", ctx_r1.inputSize())("id", ctx_r1.inputId)("name", ctx_r1.name())("aria-required", ctx_r1.required())("aria-expanded", ctx_r1.overlayVisible ?? false)("aria-controls", ctx_r1.overlayVisible ? ctx_r1.panelId : null)("aria-labelledby", ctx_r1.ariaLabelledBy)("aria-label", ctx_r1.ariaLabel)("required", ctx_r1.required() ? "" : void 0)("readonly", ctx_r1.readonlyInput ? "" : void 0)("disabled", ctx_r1.$disabled() ? "" : void 0)("placeholder", ctx_r1.placeholder)("tabindex", ctx_r1.tabindex)("inputmode", ctx_r1.touchUI ? "off" : null);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.showClear && !ctx_r1.$disabled() && (ctx_r1.inputfieldViewChild == null ? null : ctx_r1.inputfieldViewChild.nativeElement == null ? null : ctx_r1.inputfieldViewChild.nativeElement.value));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showIcon && ctx_r1.iconDisplay === "button");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.iconDisplay === "input" && ctx_r1.showIcon);
  }
}
function DatePicker_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DatePicker_div_1_ng_container_4_div_2_ng_template_3__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 30);
  }
}
function DatePicker_div_1_ng_container_4_div_2_ng_template_3_span_1_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_1_ng_container_4_div_2_ng_template_3_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_1_ng_container_4_div_2_ng_template_3_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_1_ng_container_4_div_2_ng_template_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, DatePicker_div_1_ng_container_4_div_2_ng_template_3_span_1_1_Template, 1, 0, null, 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.previousIconTemplate || ctx_r1._previousIconTemplate);
  }
}
function DatePicker_div_1_ng_container_4_div_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_1_ng_container_4_div_2_ng_template_3__svg_svg_0_Template, 1, 0, "svg", 29)(1, DatePicker_div_1_ng_container_4_div_2_ng_template_3_span_1_Template, 2, 1, "span", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngIf", !ctx_r1.previousIconTemplate && !ctx_r1._previousIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.previousIconTemplate || ctx_r1._previousIconTemplate);
  }
}
function DatePicker_div_1_ng_container_4_div_2_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 31);
    ɵɵlistener("click", function DatePicker_div_1_ng_container_4_div_2_button_6_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.switchToMonthView($event));
    })("keydown", function DatePicker_div_1_ng_container_4_div_2_button_6_Template_button_keydown_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const month_r11 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cx("selectMonth"));
    ɵɵproperty("pBind", ctx_r1.ptm("selectMonth"));
    ɵɵattribute("disabled", ctx_r1.switchViewButtonDisabled() ? "" : void 0)("aria-label", ctx_r1.getTranslation("chooseMonth"))("data-pc-group-section", "navigator");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.getMonthName(month_r11.month), " ");
  }
}
function DatePicker_div_1_ng_container_4_div_2_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 31);
    ɵɵlistener("click", function DatePicker_div_1_ng_container_4_div_2_button_7_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.switchToYearView($event));
    })("keydown", function DatePicker_div_1_ng_container_4_div_2_button_7_Template_button_keydown_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const month_r11 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cx("selectYear"));
    ɵɵproperty("pBind", ctx_r1.ptm("selectYear"));
    ɵɵattribute("disabled", ctx_r1.switchViewButtonDisabled() ? "" : void 0)("aria-label", ctx_r1.getTranslation("chooseYear"))("data-pc-group-section", "navigator");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.getYear(month_r11), " ");
  }
}
function DatePicker_div_1_ng_container_4_div_2_span_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵtextInterpolate2("", ctx_r1.yearPickerValues()[0], " - ", ctx_r1.yearPickerValues()[ctx_r1.yearPickerValues().length - 1]);
  }
}
function DatePicker_div_1_ng_container_4_div_2_span_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DatePicker_div_1_ng_container_4_div_2_span_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 18);
    ɵɵtemplate(1, DatePicker_div_1_ng_container_4_div_2_span_8_ng_container_1_Template, 2, 2, "ng-container", 6)(2, DatePicker_div_1_ng_container_4_div_2_span_8_ng_container_2_Template, 1, 0, "ng-container", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.cx("decade"));
    ɵɵproperty("pBind", ctx_r1.ptm("decade"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.decadeTemplate && !ctx_r1._decadeTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.decadeTemplate || ctx_r1._decadeTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c21, ctx_r1.yearPickerValues));
  }
}
function DatePicker_div_1_ng_container_4_div_2_ng_template_10__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 33);
  }
}
function DatePicker_div_1_ng_container_4_div_2_ng_template_10_ng_container_1_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_1_ng_container_4_div_2_ng_template_10_ng_container_1_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_1_ng_container_4_div_2_ng_template_10_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_1_ng_container_4_div_2_ng_template_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DatePicker_div_1_ng_container_4_div_2_ng_template_10_ng_container_1_1_Template, 1, 0, null, 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.nextIconTemplate || ctx_r1._nextIconTemplate);
  }
}
function DatePicker_div_1_ng_container_4_div_2_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_1_ng_container_4_div_2_ng_template_10__svg_svg_0_Template, 1, 0, "svg", 32)(1, DatePicker_div_1_ng_container_4_div_2_ng_template_10_ng_container_1_Template, 2, 1, "ng-container", 6);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngIf", !ctx_r1.nextIconTemplate && !ctx_r1._nextIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.nextIconTemplate || ctx_r1._nextIconTemplate);
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_th_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 18)(1, "span", 18);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵclassMap(ctx_r1.cx("weekHeader"));
    ɵɵproperty("pBind", ctx_r1.ptm("weekHeader"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r1.ptm("weekHeaderLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.getTranslation("weekHeader"));
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_th_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 37)(1, "span", 18);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const weekDay_r13 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵclassMap(ctx_r1.cx("weekDayCell"));
    ɵɵproperty("pBind", ctx_r1.ptm("weekDayCell"));
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.cx("weekDay"));
    ɵɵproperty("pBind", ctx_r1.ptm("weekDay"));
    ɵɵadvance();
    ɵɵtextInterpolate(weekDay_r13);
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 18)(1, "span", 18);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const j_r14 = ɵɵnextContext().index;
    const month_r11 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cx("weekNumber"));
    ɵɵproperty("pBind", ctx_r1.ptm("weekNumber"));
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.cx("weekLabelContainer"));
    ɵɵproperty("pBind", ctx_r1.ptm("weekLabelContainer"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", month_r11.weekNumbers[j_r14], " ");
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const date_r16 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(date_r16.day);
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 20);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const date_r16 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.dateTemplate || ctx_r1._dateTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c21, date_r16));
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 20);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const date_r16 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.disabledDateTemplate || ctx_r1._disabledDateTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c21, date_r16));
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 40);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const date_r16 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", date_r16.day, " ");
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 38);
    ɵɵlistener("click", function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_Template_span_click_1_listener($event) {
      ɵɵrestoreView(_r15);
      const date_r16 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(6);
      return ɵɵresetView(ctx_r1.onDateSelect($event, date_r16));
    })("keydown", function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_Template_span_keydown_1_listener($event) {
      ɵɵrestoreView(_r15);
      const date_r16 = ɵɵnextContext().$implicit;
      const i_r17 = ɵɵnextContext(3).index;
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onDateCellKeydown($event, date_r16, i_r17));
    });
    ɵɵtemplate(2, DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 6)(3, DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_3_Template, 2, 4, "ng-container", 6)(4, DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_ng_container_4_Template, 2, 4, "ng-container", 6);
    ɵɵelementEnd();
    ɵɵtemplate(5, DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_div_5_Template, 2, 1, "div", 39);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const date_r16 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r1.dayClass(date_r16))("pBind", ctx_r1.ptm("day"));
    ɵɵattribute("data-date", ctx_r1.formatDateKey(ctx_r1.formatDateMetaToDate(date_r16)));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.dateTemplate && !ctx_r1._dateTemplate && (date_r16.selectable || !ctx_r1.disabledDateTemplate && !ctx_r1._disabledDateTemplate));
    ɵɵadvance();
    ɵɵproperty("ngIf", date_r16.selectable || !ctx_r1.disabledDateTemplate && !ctx_r1._disabledDateTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !date_r16.selectable);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isSelected(date_r16));
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 18);
    ɵɵtemplate(1, DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_ng_container_1_Template, 6, 7, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const date_r16 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵclassMap(ctx_r1.cx("dayCell", ɵɵpureFunction1(5, _c222, date_r16)));
    ɵɵproperty("pBind", ctx_r1.ptm("dayCell"));
    ɵɵattribute("aria-label", date_r16.day);
    ɵɵadvance();
    ɵɵproperty("ngIf", date_r16.otherMonth ? ctx_r1.showOtherMonths : true);
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 18);
    ɵɵtemplate(1, DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_1_Template, 3, 7, "td", 23)(2, DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_td_2_Template, 2, 7, "td", 24);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const week_r18 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("pBind", ctx_r1.ptm("tableBodyRow"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showWeek);
    ɵɵadvance();
    ɵɵproperty("ngForOf", week_r18);
  }
}
function DatePicker_div_1_ng_container_4_div_2_table_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "table", 34)(1, "thead", 18)(2, "tr", 18);
    ɵɵtemplate(3, DatePicker_div_1_ng_container_4_div_2_table_12_th_3_Template, 3, 5, "th", 23)(4, DatePicker_div_1_ng_container_4_div_2_table_12_th_4_Template, 3, 7, "th", 35);
    ɵɵelementEnd()();
    ɵɵelementStart(5, "tbody", 18);
    ɵɵtemplate(6, DatePicker_div_1_ng_container_4_div_2_table_12_tr_6_Template, 3, 3, "tr", 36);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const month_r11 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cx("dayView"));
    ɵɵproperty("pBind", ctx_r1.ptm("table"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r1.ptm("tableHeader"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r1.ptm("tableHeaderRow"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showWeek);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.weekDays);
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r1.ptm("tableBody"));
    ɵɵadvance();
    ɵɵproperty("ngForOf", month_r11.dates);
  }
}
function DatePicker_div_1_ng_container_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 18)(1, "div", 18)(2, "p-button", 25);
    ɵɵlistener("keydown", function DatePicker_div_1_ng_container_4_div_2_Template_p_button_keydown_2_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("onClick", function DatePicker_div_1_ng_container_4_div_2_Template_p_button_onClick_2_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onPrevButtonClick($event));
    });
    ɵɵtemplate(3, DatePicker_div_1_ng_container_4_div_2_ng_template_3_Template, 2, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 18);
    ɵɵtemplate(6, DatePicker_div_1_ng_container_4_div_2_button_6_Template, 2, 7, "button", 26)(7, DatePicker_div_1_ng_container_4_div_2_button_7_Template, 2, 7, "button", 26)(8, DatePicker_div_1_ng_container_4_div_2_span_8_Template, 3, 8, "span", 23);
    ɵɵelementEnd();
    ɵɵelementStart(9, "p-button", 27);
    ɵɵlistener("keydown", function DatePicker_div_1_ng_container_4_div_2_Template_p_button_keydown_9_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("onClick", function DatePicker_div_1_ng_container_4_div_2_Template_p_button_onClick_9_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onNextButtonClick($event));
    });
    ɵɵtemplate(10, DatePicker_div_1_ng_container_4_div_2_ng_template_10_Template, 2, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
    ɵɵtemplate(12, DatePicker_div_1_ng_container_4_div_2_table_12_Template, 7, 9, "table", 28);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r17 = ctx.index;
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cx("calendar"));
    ɵɵproperty("pBind", ctx_r1.ptm("calendar"));
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.cx("header"));
    ɵɵproperty("pBind", ctx_r1.ptm("header"));
    ɵɵadvance();
    ɵɵproperty("styleClass", ctx_r1.cx("pcPrevButton"))("ngStyle", ɵɵpureFunction1(23, _c20, i_r17 === 0 ? "visible" : "hidden"))("ariaLabel", ctx_r1.prevIconAriaLabel)("pt", ctx_r1.ptm("pcPrevButton"));
    ɵɵattribute("data-pc-group-section", "navigator");
    ɵɵadvance(3);
    ɵɵclassMap(ctx_r1.cx("title"));
    ɵɵproperty("pBind", ctx_r1.ptm("title"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.currentView === "date");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.currentView !== "year");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.currentView === "year");
    ɵɵadvance();
    ɵɵproperty("styleClass", ctx_r1.cx("pcNextButton"))("ngStyle", ɵɵpureFunction1(25, _c20, i_r17 === ctx_r1.months.length - 1 ? "visible" : "hidden"))("ariaLabel", ctx_r1.nextIconAriaLabel)("pt", ctx_r1.ptm("pcNextButton"));
    ɵɵattribute("data-pc-group-section", "navigator");
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.currentView === "date");
  }
}
function DatePicker_div_1_ng_container_4_div_3_span_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 40);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const m_r21 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", m_r21, " ");
  }
}
function DatePicker_div_1_ng_container_4_div_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 42);
    ɵɵlistener("click", function DatePicker_div_1_ng_container_4_div_3_span_1_Template_span_click_0_listener($event) {
      const i_r20 = ɵɵrestoreView(_r19).index;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onMonthSelect($event, i_r20));
    })("keydown", function DatePicker_div_1_ng_container_4_div_3_span_1_Template_span_keydown_0_listener($event) {
      const i_r20 = ɵɵrestoreView(_r19).index;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onMonthCellKeydown($event, i_r20));
    });
    ɵɵtext(1);
    ɵɵtemplate(2, DatePicker_div_1_ng_container_4_div_3_span_1_div_2_Template, 2, 1, "div", 39);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const m_r21 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.cx("month", ɵɵpureFunction2(5, _c23, m_r21, i_r20)));
    ɵɵproperty("pBind", ctx_r1.ptm("month"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", m_r21, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isMonthSelected(i_r20));
  }
}
function DatePicker_div_1_ng_container_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtemplate(1, DatePicker_div_1_ng_container_4_div_3_span_1_Template, 3, 8, "span", 41);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cx("monthView"));
    ɵɵproperty("pBind", ctx_r1.ptm("monthView"));
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.monthPickerValues());
  }
}
function DatePicker_div_1_ng_container_4_div_4_span_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 40);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const y_r23 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", y_r23, " ");
  }
}
function DatePicker_div_1_ng_container_4_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 42);
    ɵɵlistener("click", function DatePicker_div_1_ng_container_4_div_4_span_1_Template_span_click_0_listener($event) {
      const y_r23 = ɵɵrestoreView(_r22).$implicit;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onYearSelect($event, y_r23));
    })("keydown", function DatePicker_div_1_ng_container_4_div_4_span_1_Template_span_keydown_0_listener($event) {
      const y_r23 = ɵɵrestoreView(_r22).$implicit;
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onYearCellKeydown($event, y_r23));
    });
    ɵɵtext(1);
    ɵɵtemplate(2, DatePicker_div_1_ng_container_4_div_4_span_1_div_2_Template, 2, 1, "div", 39);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const y_r23 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.cx("year", ɵɵpureFunction1(5, _c24, y_r23)));
    ɵɵproperty("pBind", ctx_r1.ptm("year"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", y_r23, " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isYearSelected(y_r23));
  }
}
function DatePicker_div_1_ng_container_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵtemplate(1, DatePicker_div_1_ng_container_4_div_4_span_1_Template, 3, 7, "span", 41);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cx("yearView"));
    ɵɵproperty("pBind", ctx_r1.ptm("yearView"));
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.yearPickerValues());
  }
}
function DatePicker_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 18);
    ɵɵtemplate(2, DatePicker_div_1_ng_container_4_div_2_Template, 13, 27, "div", 24);
    ɵɵelementEnd();
    ɵɵtemplate(3, DatePicker_div_1_ng_container_4_div_3_Template, 2, 4, "div", 23)(4, DatePicker_div_1_ng_container_4_div_4_Template, 2, 4, "div", 23);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.cx("calendarContainer"));
    ɵɵproperty("pBind", ctx_r1.ptm("calendarContainer"));
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.months);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.currentView === "month");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.currentView === "year");
  }
}
function DatePicker_div_1_div_5_ng_template_3__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 46);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("pBind", ctx_r1.ptm("pcIncrementButton")["icon"]);
  }
}
function DatePicker_div_1_div_5_ng_template_3_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_1_div_5_ng_template_3_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_1_div_5_ng_template_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_1_div_5_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_1_div_5_ng_template_3__svg_svg_0_Template, 1, 1, "svg", 45)(1, DatePicker_div_1_div_5_ng_template_3_1_Template, 1, 0, null, 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", !ctx_r1.incrementIconTemplate && !ctx_r1._incrementIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.incrementIconTemplate || ctx_r1._incrementIconTemplate);
  }
}
function DatePicker_div_1_div_5_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "0");
    ɵɵelementContainerEnd();
  }
}
function DatePicker_div_1_div_5_ng_template_9__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 48);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("pBind", ctx_r1.ptm("pcDecrementButton")["icon"]);
  }
}
function DatePicker_div_1_div_5_ng_template_9_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_1_div_5_ng_template_9_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_1_div_5_ng_template_9_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_1_div_5_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_1_div_5_ng_template_9__svg_svg_0_Template, 1, 1, "svg", 47)(1, DatePicker_div_1_div_5_ng_template_9_1_Template, 1, 0, null, 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", !ctx_r1.decrementIconTemplate && !ctx_r1._decrementIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.decrementIconTemplate || ctx_r1._decrementIconTemplate);
  }
}
function DatePicker_div_1_div_5_ng_template_16__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 46);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("pBind", ctx_r1.ptm("pcIncrementButton")["icon"]);
  }
}
function DatePicker_div_1_div_5_ng_template_16_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_1_div_5_ng_template_16_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_1_div_5_ng_template_16_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_1_div_5_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_1_div_5_ng_template_16__svg_svg_0_Template, 1, 1, "svg", 45)(1, DatePicker_div_1_div_5_ng_template_16_1_Template, 1, 0, null, 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", !ctx_r1.incrementIconTemplate && !ctx_r1._incrementIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.incrementIconTemplate || ctx_r1._incrementIconTemplate);
  }
}
function DatePicker_div_1_div_5_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "0");
    ɵɵelementContainerEnd();
  }
}
function DatePicker_div_1_div_5_ng_template_22__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 48);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("pBind", ctx_r1.ptm("pcDecrementButton")["icon"]);
  }
}
function DatePicker_div_1_div_5_ng_template_22_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_1_div_5_ng_template_22_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_1_div_5_ng_template_22_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_1_div_5_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_1_div_5_ng_template_22__svg_svg_0_Template, 1, 1, "svg", 47)(1, DatePicker_div_1_div_5_ng_template_22_1_Template, 1, 0, null, 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", !ctx_r1.decrementIconTemplate && !ctx_r1._decrementIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.decrementIconTemplate || ctx_r1._decrementIconTemplate);
  }
}
function DatePicker_div_1_div_5_div_24_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18)(1, "span", 18);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cx("separator"));
    ɵɵproperty("pBind", ctx_r1.ptm("separatorContainer"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r1.ptm("separator"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.timeSeparator);
  }
}
function DatePicker_div_1_div_5_div_25_ng_template_2__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 46);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("pBind", ctx_r1.ptm("pcIncrementButton")["icon"]);
  }
}
function DatePicker_div_1_div_5_div_25_ng_template_2_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_1_div_5_div_25_ng_template_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_1_div_5_div_25_ng_template_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_1_div_5_div_25_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_1_div_5_div_25_ng_template_2__svg_svg_0_Template, 1, 1, "svg", 45)(1, DatePicker_div_1_div_5_div_25_ng_template_2_1_Template, 1, 0, null, 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngIf", !ctx_r1.incrementIconTemplate && !ctx_r1._incrementIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.incrementIconTemplate || ctx_r1._incrementIconTemplate);
  }
}
function DatePicker_div_1_div_5_div_25_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, "0");
    ɵɵelementContainerEnd();
  }
}
function DatePicker_div_1_div_5_div_25_ng_template_8__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 48);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("pBind", ctx_r1.ptm("pcDecrementButton")["icon"]);
  }
}
function DatePicker_div_1_div_5_div_25_ng_template_8_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_1_div_5_div_25_ng_template_8_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_1_div_5_div_25_ng_template_8_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_1_div_5_div_25_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_1_div_5_div_25_ng_template_8__svg_svg_0_Template, 1, 1, "svg", 47)(1, DatePicker_div_1_div_5_div_25_ng_template_8_1_Template, 1, 0, null, 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngIf", !ctx_r1.decrementIconTemplate && !ctx_r1._decrementIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.decrementIconTemplate || ctx_r1._decrementIconTemplate);
  }
}
function DatePicker_div_1_div_5_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 18)(1, "p-button", 43);
    ɵɵlistener("keydown", function DatePicker_div_1_div_5_div_25_Template_p_button_keydown_1_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_1_div_5_div_25_Template_p_button_keydown_enter_1_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.incrementSecond($event));
    })("keydown.space", function DatePicker_div_1_div_5_div_25_Template_p_button_keydown_space_1_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.incrementSecond($event));
    })("mousedown", function DatePicker_div_1_div_5_div_25_Template_p_button_mousedown_1_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseDown($event, 2, 1));
    })("mouseup", function DatePicker_div_1_div_5_div_25_Template_p_button_mouseup_1_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_1_div_5_div_25_Template_p_button_keyup_enter_1_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_1_div_5_div_25_Template_p_button_keyup_space_1_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_1_div_5_div_25_Template_p_button_mouseleave_1_listener() {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    ɵɵtemplate(2, DatePicker_div_1_div_5_div_25_ng_template_2_Template, 2, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 18);
    ɵɵtemplate(5, DatePicker_div_1_div_5_div_25_ng_container_5_Template, 2, 0, "ng-container", 6);
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "p-button", 43);
    ɵɵlistener("keydown", function DatePicker_div_1_div_5_div_25_Template_p_button_keydown_7_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_1_div_5_div_25_Template_p_button_keydown_enter_7_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.decrementSecond($event));
    })("keydown.space", function DatePicker_div_1_div_5_div_25_Template_p_button_keydown_space_7_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.decrementSecond($event));
    })("mousedown", function DatePicker_div_1_div_5_div_25_Template_p_button_mousedown_7_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseDown($event, 2, -1));
    })("mouseup", function DatePicker_div_1_div_5_div_25_Template_p_button_mouseup_7_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_1_div_5_div_25_Template_p_button_keyup_enter_7_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_1_div_5_div_25_Template_p_button_keyup_space_7_listener($event) {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_1_div_5_div_25_Template_p_button_mouseleave_7_listener() {
      ɵɵrestoreView(_r25);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    ɵɵtemplate(8, DatePicker_div_1_div_5_div_25_ng_template_8_Template, 2, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cx("secondPicker"));
    ɵɵproperty("pBind", ctx_r1.ptm("secondPicker"));
    ɵɵadvance();
    ɵɵproperty("styleClass", ctx_r1.cx("pcIncrementButton"))("pt", ctx_r1.ptm("pcIncrementButton"));
    ɵɵattribute("aria-label", ctx_r1.getTranslation("nextSecond"))("data-pc-group-section", "timepickerbutton");
    ɵɵadvance(3);
    ɵɵproperty("pBind", ctx_r1.ptm("second"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.currentSecond < 10);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.currentSecond);
    ɵɵadvance();
    ɵɵproperty("styleClass", ctx_r1.cx("pcDecrementButton"))("pt", ctx_r1.ptm("pcDecrementButton"));
    ɵɵattribute("aria-label", ctx_r1.getTranslation("prevSecond"))("data-pc-group-section", "timepickerbutton");
  }
}
function DatePicker_div_1_div_5_div_26_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18)(1, "span", 18);
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cx("separator"));
    ɵɵproperty("pBind", ctx_r1.ptm("separatorContainer"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r1.ptm("separator"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.timeSeparator);
  }
}
function DatePicker_div_1_div_5_div_27_ng_template_2__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 46);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("pBind", ctx_r1.ptm("pcIncrementButton")["icon"]);
  }
}
function DatePicker_div_1_div_5_div_27_ng_template_2_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_1_div_5_div_27_ng_template_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_1_div_5_div_27_ng_template_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_1_div_5_div_27_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_1_div_5_div_27_ng_template_2__svg_svg_0_Template, 1, 1, "svg", 45)(1, DatePicker_div_1_div_5_div_27_ng_template_2_1_Template, 1, 0, null, 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngIf", !ctx_r1.incrementIconTemplate && !ctx_r1._incrementIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.incrementIconTemplate || ctx_r1._incrementIconTemplate);
  }
}
function DatePicker_div_1_div_5_div_27_ng_template_7__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 48);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("pBind", ctx_r1.ptm("pcDecrementButton")["icon"]);
  }
}
function DatePicker_div_1_div_5_div_27_ng_template_7_1_ng_template_0_Template(rf, ctx) {
}
function DatePicker_div_1_div_5_div_27_ng_template_7_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_1_div_5_div_27_ng_template_7_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function DatePicker_div_1_div_5_div_27_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_1_div_5_div_27_ng_template_7__svg_svg_0_Template, 1, 1, "svg", 47)(1, DatePicker_div_1_div_5_div_27_ng_template_7_1_Template, 1, 0, null, 12);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngIf", !ctx_r1.decrementIconTemplate && !ctx_r1._decrementIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.decrementIconTemplate || ctx_r1._decrementIconTemplate);
  }
}
function DatePicker_div_1_div_5_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 18)(1, "p-button", 49);
    ɵɵlistener("keydown", function DatePicker_div_1_div_5_div_27_Template_p_button_keydown_1_listener($event) {
      ɵɵrestoreView(_r26);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("onClick", function DatePicker_div_1_div_5_div_27_Template_p_button_onClick_1_listener($event) {
      ɵɵrestoreView(_r26);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.toggleAMPM($event));
    })("keydown.enter", function DatePicker_div_1_div_5_div_27_Template_p_button_keydown_enter_1_listener($event) {
      ɵɵrestoreView(_r26);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.toggleAMPM($event));
    });
    ɵɵtemplate(2, DatePicker_div_1_div_5_div_27_ng_template_2_Template, 2, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 18);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "p-button", 50);
    ɵɵlistener("keydown", function DatePicker_div_1_div_5_div_27_Template_p_button_keydown_6_listener($event) {
      ɵɵrestoreView(_r26);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("click", function DatePicker_div_1_div_5_div_27_Template_p_button_click_6_listener($event) {
      ɵɵrestoreView(_r26);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.toggleAMPM($event));
    })("keydown.enter", function DatePicker_div_1_div_5_div_27_Template_p_button_keydown_enter_6_listener($event) {
      ɵɵrestoreView(_r26);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.toggleAMPM($event));
    });
    ɵɵtemplate(7, DatePicker_div_1_div_5_div_27_ng_template_7_Template, 2, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cx("ampmPicker"));
    ɵɵproperty("pBind", ctx_r1.ptm("ampmPicker"));
    ɵɵadvance();
    ɵɵproperty("styleClass", ctx_r1.cx("pcIncrementButton"))("pt", ctx_r1.ptm("pcIncrementButton"));
    ɵɵattribute("aria-label", ctx_r1.getTranslation("am"))("data-pc-group-section", "timepickerbutton");
    ɵɵadvance(3);
    ɵɵproperty("pBind", ctx_r1.ptm("ampm"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.pm ? "PM" : "AM");
    ɵɵadvance();
    ɵɵproperty("styleClass", ctx_r1.cx("pcDecrementButton"))("pt", ctx_r1.ptm("pcDecrementButton"));
    ɵɵattribute("aria-label", ctx_r1.getTranslation("pm"))("data-pc-group-section", "timepickerbutton");
  }
}
function DatePicker_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 18)(1, "div", 18)(2, "p-button", 43);
    ɵɵlistener("keydown", function DatePicker_div_1_div_5_Template_p_button_keydown_2_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_1_div_5_Template_p_button_keydown_enter_2_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.incrementHour($event));
    })("keydown.space", function DatePicker_div_1_div_5_Template_p_button_keydown_space_2_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.incrementHour($event));
    })("mousedown", function DatePicker_div_1_div_5_Template_p_button_mousedown_2_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseDown($event, 0, 1));
    })("mouseup", function DatePicker_div_1_div_5_Template_p_button_mouseup_2_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_1_div_5_Template_p_button_keyup_enter_2_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_1_div_5_Template_p_button_keyup_space_2_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_1_div_5_Template_p_button_mouseleave_2_listener() {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    ɵɵtemplate(3, DatePicker_div_1_div_5_ng_template_3_Template, 2, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementStart(5, "span", 18);
    ɵɵtemplate(6, DatePicker_div_1_div_5_ng_container_6_Template, 2, 0, "ng-container", 6);
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementStart(8, "p-button", 43);
    ɵɵlistener("keydown", function DatePicker_div_1_div_5_Template_p_button_keydown_8_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_1_div_5_Template_p_button_keydown_enter_8_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.decrementHour($event));
    })("keydown.space", function DatePicker_div_1_div_5_Template_p_button_keydown_space_8_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.decrementHour($event));
    })("mousedown", function DatePicker_div_1_div_5_Template_p_button_mousedown_8_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseDown($event, 0, -1));
    })("mouseup", function DatePicker_div_1_div_5_Template_p_button_mouseup_8_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_1_div_5_Template_p_button_keyup_enter_8_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_1_div_5_Template_p_button_keyup_space_8_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_1_div_5_Template_p_button_mouseleave_8_listener() {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    ɵɵtemplate(9, DatePicker_div_1_div_5_ng_template_9_Template, 2, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
    ɵɵelementStart(11, "div", 44)(12, "span", 18);
    ɵɵtext(13);
    ɵɵelementEnd()();
    ɵɵelementStart(14, "div", 18)(15, "p-button", 43);
    ɵɵlistener("keydown", function DatePicker_div_1_div_5_Template_p_button_keydown_15_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_1_div_5_Template_p_button_keydown_enter_15_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.incrementMinute($event));
    })("keydown.space", function DatePicker_div_1_div_5_Template_p_button_keydown_space_15_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.incrementMinute($event));
    })("mousedown", function DatePicker_div_1_div_5_Template_p_button_mousedown_15_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseDown($event, 1, 1));
    })("mouseup", function DatePicker_div_1_div_5_Template_p_button_mouseup_15_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_1_div_5_Template_p_button_keyup_enter_15_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_1_div_5_Template_p_button_keyup_space_15_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_1_div_5_Template_p_button_mouseleave_15_listener() {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    ɵɵtemplate(16, DatePicker_div_1_div_5_ng_template_16_Template, 2, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵelementStart(18, "span", 18);
    ɵɵtemplate(19, DatePicker_div_1_div_5_ng_container_19_Template, 2, 0, "ng-container", 6);
    ɵɵtext(20);
    ɵɵelementEnd();
    ɵɵelementStart(21, "p-button", 43);
    ɵɵlistener("keydown", function DatePicker_div_1_div_5_Template_p_button_keydown_21_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("keydown.enter", function DatePicker_div_1_div_5_Template_p_button_keydown_enter_21_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.decrementMinute($event));
    })("keydown.space", function DatePicker_div_1_div_5_Template_p_button_keydown_space_21_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.decrementMinute($event));
    })("mousedown", function DatePicker_div_1_div_5_Template_p_button_mousedown_21_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseDown($event, 1, -1));
    })("mouseup", function DatePicker_div_1_div_5_Template_p_button_mouseup_21_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.enter", function DatePicker_div_1_div_5_Template_p_button_keyup_enter_21_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("keyup.space", function DatePicker_div_1_div_5_Template_p_button_keyup_space_21_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseUp($event));
    })("mouseleave", function DatePicker_div_1_div_5_Template_p_button_mouseleave_21_listener() {
      ɵɵrestoreView(_r24);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTimePickerElementMouseLeave());
    });
    ɵɵtemplate(22, DatePicker_div_1_div_5_ng_template_22_Template, 2, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
    ɵɵtemplate(24, DatePicker_div_1_div_5_div_24_Template, 3, 5, "div", 23)(25, DatePicker_div_1_div_5_div_25_Template, 10, 14, "div", 23)(26, DatePicker_div_1_div_5_div_26_Template, 3, 5, "div", 23)(27, DatePicker_div_1_div_5_div_27_Template, 9, 13, "div", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.cx("timePicker"));
    ɵɵproperty("pBind", ctx_r1.ptm("timePicker"));
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.cx("hourPicker"));
    ɵɵproperty("pBind", ctx_r1.ptm("hourPicker"));
    ɵɵadvance();
    ɵɵproperty("styleClass", ctx_r1.cx("pcIncrementButton"))("pt", ctx_r1.ptm("pcIncrementButton"));
    ɵɵattribute("aria-label", ctx_r1.getTranslation("nextHour"))("data-pc-group-section", "timepickerbutton");
    ɵɵadvance(3);
    ɵɵproperty("pBind", ctx_r1.ptm("hour"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.currentHour < 10);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.currentHour);
    ɵɵadvance();
    ɵɵproperty("styleClass", ctx_r1.cx("pcDecrementButton"))("pt", ctx_r1.ptm("pcDecrementButton"));
    ɵɵattribute("aria-label", ctx_r1.getTranslation("prevHour"))("data-pc-group-section", "timepickerbutton");
    ɵɵadvance(3);
    ɵɵproperty("pBind", ctx_r1.ptm("separatorContainer"));
    ɵɵadvance();
    ɵɵproperty("pBind", ctx_r1.ptm("separator"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.timeSeparator);
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.cx("minutePicker"));
    ɵɵproperty("pBind", ctx_r1.ptm("minutePicker"));
    ɵɵadvance();
    ɵɵproperty("styleClass", ctx_r1.cx("pcIncrementButton"))("pt", ctx_r1.ptm("pcIncrementButton"));
    ɵɵattribute("aria-label", ctx_r1.getTranslation("nextMinute"))("data-pc-group-section", "timepickerbutton");
    ɵɵadvance(3);
    ɵɵproperty("pBind", ctx_r1.ptm("minute"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.currentMinute < 10);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.currentMinute);
    ɵɵadvance();
    ɵɵproperty("styleClass", ctx_r1.cx("pcDecrementButton"))("pt", ctx_r1.ptm("pcDecrementButton"));
    ɵɵattribute("aria-label", ctx_r1.getTranslation("prevMinute"))("data-pc-group-section", "timepickerbutton");
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.showSeconds);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showSeconds);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.hourFormat == "12");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.hourFormat == "12");
  }
}
function DatePicker_div_1_div_6_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DatePicker_div_1_div_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DatePicker_div_1_div_6_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.buttonBarTemplate || ctx_r1._buttonBarTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c25, ctx_r1.onTodayButtonClick.bind(ctx_r1), ctx_r1.onClearButtonClick.bind(ctx_r1)));
  }
}
function DatePicker_div_1_div_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 51);
    ɵɵlistener("keydown", function DatePicker_div_1_div_6_Conditional_2_Template_p_button_keydown_0_listener($event) {
      ɵɵrestoreView(_r27);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("onClick", function DatePicker_div_1_div_6_Conditional_2_Template_p_button_onClick_0_listener($event) {
      ɵɵrestoreView(_r27);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onTodayButtonClick($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(1, "p-button", 51);
    ɵɵlistener("keydown", function DatePicker_div_1_div_6_Conditional_2_Template_p_button_keydown_1_listener($event) {
      ɵɵrestoreView(_r27);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onContainerButtonKeydown($event));
    })("onClick", function DatePicker_div_1_div_6_Conditional_2_Template_p_button_onClick_1_listener($event) {
      ɵɵrestoreView(_r27);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onClearButtonClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("styleClass", ctx_r1.cx("pcTodayButton"))("label", ctx_r1.getTranslation("today"))("ngClass", ctx_r1.todayButtonStyleClass)("pt", ctx_r1.ptm("pcTodayButton"));
    ɵɵattribute("data-pc-group-section", "button");
    ɵɵadvance();
    ɵɵproperty("styleClass", ctx_r1.cx("pcClearButton"))("label", ctx_r1.getTranslation("clear"))("ngClass", ctx_r1.clearButtonStyleClass)("pt", ctx_r1.ptm("pcClearButton"));
    ɵɵattribute("data-pc-group-section", "button");
  }
}
function DatePicker_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 18);
    ɵɵconditionalCreate(1, DatePicker_div_1_div_6_Conditional_1_Template, 1, 5, "ng-container")(2, DatePicker_div_1_div_6_Conditional_2_Template, 2, 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.cx("buttonbar"));
    ɵɵproperty("pBind", ctx_r1.ptm("buttonbar"));
    ɵɵadvance();
    ɵɵconditional(ctx_r1.buttonBarTemplate || ctx_r1._buttonBarTemplate ? 1 : 2);
  }
}
function DatePicker_div_1_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function DatePicker_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 22, 1);
    ɵɵlistener("@overlayAnimation.start", function DatePicker_div_1_Template_div_animation_overlayAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function DatePicker_div_1_Template_div_animation_overlayAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayAnimationDone($event));
    })("click", function DatePicker_div_1_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOverlayClick($event));
    });
    ɵɵprojection(2);
    ɵɵtemplate(3, DatePicker_div_1_ng_container_3_Template, 1, 0, "ng-container", 12)(4, DatePicker_div_1_ng_container_4_Template, 5, 6, "ng-container", 6)(5, DatePicker_div_1_div_5_Template, 28, 38, "div", 23)(6, DatePicker_div_1_div_6_Template, 3, 4, "div", 23);
    ɵɵprojection(7, 1);
    ɵɵtemplate(8, DatePicker_div_1_ng_container_8_Template, 1, 0, "ng-container", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("panel"), ctx_r1.panelStyleClass));
    ɵɵproperty("ngStyle", ctx_r1.panelStyle)("@overlayAnimation", ɵɵpureFunction1(18, _c19, ɵɵpureFunction2(15, _c18, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("@.disabled", ctx_r1.inline === true)("pBind", ctx_r1.ptm("panel"));
    ɵɵattribute("id", ctx_r1.panelId)("aria-label", ctx_r1.getTranslation("chooseDate"))("role", ctx_r1.inline ? null : "dialog")("aria-modal", ctx_r1.inline ? null : "true");
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate || ctx_r1._headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.timeOnly);
    ɵɵadvance();
    ɵɵproperty("ngIf", (ctx_r1.showTime || ctx_r1.timeOnly) && ctx_r1.currentView === "date");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.showButtonBar);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.footerTemplate || ctx_r1._footerTemplate);
  }
}
var style6 = (
  /*css*/
  `
    ${style5}

    /* For PrimeNG */
    .p-datepicker.ng-invalid.ng-dirty .p-inputtext {
        border-color: dt('inputtext.invalid.border.color');
    }
`
);
var inlineStyles = {
  root: () => ({
    position: "relative"
  })
};
var classes2 = {
  root: ({
    instance
  }) => ["p-datepicker p-component p-inputwrapper", {
    "p-invalid": instance.invalid(),
    "p-datepicker-fluid": instance.hasFluid,
    "p-inputwrapper-filled": instance.$filled(),
    "p-variant-filled": instance.$variant() === "filled",
    "p-inputwrapper-focus": instance.focus || instance.overlayVisible,
    "p-focus": instance.focus || instance.overlayVisible
  }],
  pcInputText: "p-datepicker-input",
  dropdown: "p-datepicker-dropdown",
  inputIconContainer: "p-datepicker-input-icon-container",
  inputIcon: "p-datepicker-input-icon",
  panel: ({
    instance
  }) => ["p-datepicker-panel p-component", {
    "p-datepicker-panel p-component": true,
    "p-datepicker-panel-inline": instance.inline,
    "p-disabled": instance.$disabled(),
    "p-datepicker-timeonly": instance.timeOnly
  }],
  calendarContainer: "p-datepicker-calendar-container",
  calendar: "p-datepicker-calendar",
  header: "p-datepicker-header",
  pcPrevButton: "p-datepicker-prev-button",
  title: "p-datepicker-title",
  selectMonth: "p-datepicker-select-month",
  selectYear: "p-datepicker-select-year",
  decade: "p-datepicker-decade",
  pcNextButton: "p-datepicker-next-button",
  dayView: "p-datepicker-day-view",
  weekHeader: "p-datepicker-weekheader p-disabled",
  weekNumber: "p-datepicker-weeknumber",
  weekLabelContainer: "p-datepicker-weeklabel-container p-disabled",
  weekDayCell: "p-datepicker-weekday-cell",
  weekDay: "p-datepicker-weekday",
  dayCell: ({
    date
  }) => ["p-datepicker-day-cell", {
    "p-datepicker-other-month": date.otherMonth,
    "p-datepicker-today": date.today
  }],
  day: ({
    instance,
    date
  }) => {
    let selectedDayClass = "";
    if (instance.isRangeSelection() && instance.isSelected(date) && date.selectable) {
      const startDate = instance.value[0];
      const endDate = instance.value[1];
      const isStart = startDate && date.year === startDate.getFullYear() && date.month === startDate.getMonth() && date.day === startDate.getDate();
      const isEnd = endDate && date.year === endDate.getFullYear() && date.month === endDate.getMonth() && date.day === endDate.getDate();
      selectedDayClass = isStart || isEnd ? "p-datepicker-day-selected" : "p-datepicker-day-selected-range";
    }
    return {
      "p-datepicker-day": true,
      "p-datepicker-day-selected": !instance.isRangeSelection() && instance.isSelected(date) && date.selectable,
      "p-disabled": instance.$disabled() || !date.selectable,
      [selectedDayClass]: true
    };
  },
  monthView: "p-datepicker-month-view",
  month: ({
    instance,
    index
  }) => ["p-datepicker-month", {
    "p-datepicker-month-selected": instance.isMonthSelected(index),
    "p-disabled": instance.isMonthDisabled(index)
  }],
  yearView: "p-datepicker-year-view",
  year: ({
    instance,
    year
  }) => ["p-datepicker-year", {
    "p-datepicker-year-selected": instance.isYearSelected(year),
    "p-disabled": instance.isYearDisabled(year)
  }],
  timePicker: "p-datepicker-time-picker",
  hourPicker: "p-datepicker-hour-picker",
  pcIncrementButton: "p-datepicker-increment-button",
  pcDecrementButton: "p-datepicker-decrement-button",
  separator: "p-datepicker-separator",
  minutePicker: "p-datepicker-minute-picker",
  secondPicker: "p-datepicker-second-picker",
  ampmPicker: "p-datepicker-ampm-picker",
  buttonbar: "p-datepicker-buttonbar",
  pcTodayButton: "p-datepicker-today-button",
  pcClearButton: "p-datepicker-clear-button",
  clearIcon: "p-datepicker-clear-icon"
};
var DatePickerStyle = class _DatePickerStyle extends BaseStyle {
  name = "datepicker";
  style = style6;
  classes = classes2;
  inlineStyles = inlineStyles;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵDatePickerStyle_BaseFactory;
    return function DatePickerStyle_Factory(__ngFactoryType__) {
      return (ɵDatePickerStyle_BaseFactory || (ɵDatePickerStyle_BaseFactory = ɵɵgetInheritedFactory(_DatePickerStyle)))(__ngFactoryType__ || _DatePickerStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _DatePickerStyle,
    factory: _DatePickerStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerStyle, [{
    type: Injectable
  }], null, null);
})();
var DatePickerClasses;
(function(DatePickerClasses2) {
  DatePickerClasses2["root"] = "p-datepicker";
  DatePickerClasses2["pcInputText"] = "p-datepicker-input";
  DatePickerClasses2["dropdown"] = "p-datepicker-dropdown";
  DatePickerClasses2["inputIconContainer"] = "p-datepicker-input-icon-container";
  DatePickerClasses2["inputIcon"] = "p-datepicker-input-icon";
  DatePickerClasses2["panel"] = "p-datepicker-panel";
  DatePickerClasses2["calendarContainer"] = "p-datepicker-calendar-container";
  DatePickerClasses2["calendar"] = "p-datepicker-calendar";
  DatePickerClasses2["header"] = "p-datepicker-header";
  DatePickerClasses2["pcPrevButton"] = "p-datepicker-prev-button";
  DatePickerClasses2["title"] = "p-datepicker-title";
  DatePickerClasses2["selectMonth"] = "p-datepicker-select-month";
  DatePickerClasses2["selectYear"] = "p-datepicker-select-year";
  DatePickerClasses2["decade"] = "p-datepicker-decade";
  DatePickerClasses2["pcNextButton"] = "p-datepicker-next-button";
  DatePickerClasses2["dayView"] = "p-datepicker-day-view";
  DatePickerClasses2["weekHeader"] = "p-datepicker-weekheader";
  DatePickerClasses2["weekNumber"] = "p-datepicker-weeknumber";
  DatePickerClasses2["weekLabelContainer"] = "p-datepicker-weeklabel-container";
  DatePickerClasses2["weekDayCell"] = "p-datepicker-weekday-cell";
  DatePickerClasses2["weekDay"] = "p-datepicker-weekday";
  DatePickerClasses2["dayCell"] = "p-datepicker-day-cell";
  DatePickerClasses2["day"] = "p-datepicker-day";
  DatePickerClasses2["monthView"] = "p-datepicker-month-view";
  DatePickerClasses2["month"] = "p-datepicker-month";
  DatePickerClasses2["yearView"] = "p-datepicker-year-view";
  DatePickerClasses2["year"] = "p-datepicker-year";
  DatePickerClasses2["timePicker"] = "p-datepicker-time-picker";
  DatePickerClasses2["hourPicker"] = "p-datepicker-hour-picker";
  DatePickerClasses2["pcIncrementButton"] = "p-datepicker-increment-button";
  DatePickerClasses2["pcDecrementButton"] = "p-datepicker-decrement-button";
  DatePickerClasses2["separator"] = "p-datepicker-separator";
  DatePickerClasses2["minutePicker"] = "p-datepicker-minute-picker";
  DatePickerClasses2["secondPicker"] = "p-datepicker-second-picker";
  DatePickerClasses2["ampmPicker"] = "p-datepicker-ampm-picker";
  DatePickerClasses2["buttonbar"] = "p-datepicker-buttonbar";
  DatePickerClasses2["pcTodayButton"] = "p-datepicker-today-button";
  DatePickerClasses2["pcClearButton"] = "p-datepicker-clear-button";
  DatePickerClasses2["clearIcon"] = "p-datepicker-clear-icon";
})(DatePickerClasses || (DatePickerClasses = {}));
var DATEPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DatePicker),
  multi: true
};
var DATEPICKER_INSTANCE = new InjectionToken("DATEPICKER_INSTANCE");
var DatePicker = class _DatePicker extends BaseInput {
  zone;
  overlayService;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcDatePicker = inject(DATEPICKER_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  iconDisplay = "button";
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the input field.
   * @group Props
   */
  inputStyle;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Style class of the input field.
   * @group Props
   */
  inputStyleClass;
  /**
   * Placeholder text for the input.
   * @group Props
   */
  placeholder;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Defines a string that labels the icon button for accessibility.
   * @group Props
   */
  iconAriaLabel;
  /**
   * Format of the date which can also be defined at locale settings.
   * @group Props
   */
  get dateFormat() {
    return this._dateFormat;
  }
  set dateFormat(value) {
    this._dateFormat = value;
    if (this.initialized) {
      this.updateInputfield();
    }
  }
  /**
   * Separator for multiple selection mode.
   * @group Props
   */
  multipleSeparator = ",";
  /**
   * Separator for joining start and end dates on range selection mode.
   * @group Props
   */
  rangeSeparator = "-";
  /**
   * When enabled, displays the datepicker as inline. Default is false for popup mode.
   * @group Props
   */
  inline = false;
  /**
   * Whether to display dates in other months (non-selectable) at the start or end of the current month. To make these days selectable use the selectOtherMonths option.
   * @group Props
   */
  showOtherMonths = true;
  /**
   * Whether days in other months shown before or after the current month are selectable. This only applies if the showOtherMonths option is set to true.
   * @group Props
   */
  selectOtherMonths;
  /**
   * When enabled, displays a button with icon next to input.
   * @group Props
   */
  showIcon;
  /**
   * Icon of the datepicker button.
   * @group Props
   */
  icon;
  /**
   * When specified, prevents entering the date manually with keyboard.
   * @group Props
   */
  readonlyInput;
  /**
   * The cutoff year for determining the century for a date.
   * @group Props
   */
  shortYearCutoff = "+10";
  /**
   * Specifies 12 or 24 hour format.
   * @group Props
   */
  get hourFormat() {
    return this._hourFormat;
  }
  set hourFormat(value) {
    this._hourFormat = value;
    if (this.initialized) {
      this.updateInputfield();
    }
  }
  /**
   * Whether to display timepicker only.
   * @group Props
   */
  timeOnly;
  /**
   * Hours to change per step.
   * @group Props
   */
  stepHour = 1;
  /**
   * Minutes to change per step.
   * @group Props
   */
  stepMinute = 1;
  /**
   * Seconds to change per step.
   * @group Props
   */
  stepSecond = 1;
  /**
   * Whether to show the seconds in time picker.
   * @group Props
   */
  showSeconds = false;
  /**
   * When disabled, datepicker will not be visible with input focus.
   * @group Props
   */
  showOnFocus = true;
  /**
   * When enabled, datepicker will show week numbers.
   * @group Props
   */
  showWeek = false;
  /**
   * When enabled, datepicker will start week numbers from first day of the year.
   * @group Props
   */
  startWeekFromFirstDayOfYear = false;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * Type of the value to write back to ngModel, default is date and alternative is string.
   * @group Props
   */
  dataType = "date";
  /**
   * Defines the quantity of the selection, valid values are "single", "multiple" and "range".
   * @group Props
   */
  selectionMode = "single";
  /**
   * Maximum number of selectable dates in multiple mode.
   * @group Props
   */
  maxDateCount;
  /**
   * Whether to display today and clear buttons at the footer
   * @group Props
   */
  showButtonBar;
  /**
   * Style class of the today button.
   * @group Props
   */
  todayButtonStyleClass;
  /**
   * Style class of the clear button.
   * @group Props
   */
  clearButtonStyleClass;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Style class of the datetimepicker container element.
   * @group Props
   */
  panelStyleClass;
  /**
   * Inline style of the datetimepicker container element.
   * @group Props
   */
  panelStyle;
  /**
   * Keep invalid value when input blur.
   * @group Props
   */
  keepInvalid = false;
  /**
   * Whether to hide the overlay on date selection.
   * @group Props
   */
  hideOnDateTimeSelect = true;
  /**
   * When enabled, datepicker overlay is displayed as optimized for touch devices.
   * @group Props
   */
  touchUI;
  /**
   * Separator of time selector.
   * @group Props
   */
  timeSeparator = ":";
  /**
   * When enabled, can only focus on elements inside the datepicker.
   * @group Props
   */
  focusTrap = true;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * The minimum selectable date.
   * @group Props
   */
  get minDate() {
    return this._minDate;
  }
  set minDate(date) {
    this._minDate = date;
    if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * The maximum selectable date.
   * @group Props
   */
  get maxDate() {
    return this._maxDate;
  }
  set maxDate(date) {
    this._maxDate = date;
    if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * Array with dates that should be disabled (not selectable).
   * @group Props
   */
  get disabledDates() {
    return this._disabledDates;
  }
  set disabledDates(disabledDates) {
    this._disabledDates = disabledDates;
    if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * Array with weekday numbers that should be disabled (not selectable).
   * @group Props
   */
  get disabledDays() {
    return this._disabledDays;
  }
  set disabledDays(disabledDays) {
    this._disabledDays = disabledDays;
    if (this.currentMonth != void 0 && this.currentMonth != null && this.currentYear) {
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  /**
   * Whether to display timepicker.
   * @group Props
   */
  get showTime() {
    return this._showTime;
  }
  set showTime(showTime) {
    this._showTime = showTime;
    if (this.currentHour === void 0) {
      this.initTime(this.value || /* @__PURE__ */ new Date());
    }
    this.updateInputfield();
  }
  /**
   * An array of options for responsive design.
   * @group Props
   */
  get responsiveOptions() {
    return this._responsiveOptions;
  }
  set responsiveOptions(responsiveOptions) {
    this._responsiveOptions = responsiveOptions;
    this.destroyResponsiveStyleElement();
    this.createResponsiveStyle();
  }
  /**
   * Number of months to display.
   * @group Props
   */
  get numberOfMonths() {
    return this._numberOfMonths;
  }
  set numberOfMonths(numberOfMonths) {
    this._numberOfMonths = numberOfMonths;
    this.destroyResponsiveStyleElement();
    this.createResponsiveStyle();
  }
  /**
   * Defines the first of the week for various date calculations.
   * @group Props
   */
  get firstDayOfWeek() {
    return this._firstDayOfWeek;
  }
  set firstDayOfWeek(firstDayOfWeek) {
    this._firstDayOfWeek = firstDayOfWeek;
    this.createWeekDays();
  }
  /**
   * Type of view to display, valid values are "date" for datepicker and "month" for month picker.
   * @group Props
   */
  get view() {
    return this._view;
  }
  set view(view) {
    this._view = view;
    this.currentView = this._view;
  }
  /**
   * Set the date to highlight on first opening if the field is blank.
   * @group Props
   */
  get defaultDate() {
    return this._defaultDate;
  }
  set defaultDate(defaultDate) {
    this._defaultDate = defaultDate;
    if (this.initialized) {
      const date = defaultDate || /* @__PURE__ */ new Date();
      this.currentMonth = date.getMonth();
      this.currentYear = date.getFullYear();
      this.initTime(date);
      this.createMonths(this.currentMonth, this.currentYear);
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
   * Callback to invoke on focus of input field.
   * @param {Event} event - browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke on blur of input field.
   * @param {Event} event - browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when date panel closed.
   * @param {Event} event - Mouse event
   * @group Emits
   */
  onClose = new EventEmitter();
  /**
   * Callback to invoke on date select.
   * @param {Date} date - date value.
   * @group Emits
   */
  onSelect = new EventEmitter();
  /**
   * Callback to invoke when input field cleared.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke when input field is being typed.
   * @param {Event} event - browser event
   * @group Emits
   */
  onInput = new EventEmitter();
  /**
   * Callback to invoke when today button is clicked.
   * @param {Date} date - today as a date instance.
   * @group Emits
   */
  onTodayClick = new EventEmitter();
  /**
   * Callback to invoke when clear button is clicked.
   * @param {Event} event - browser event.
   * @group Emits
   */
  onClearClick = new EventEmitter();
  /**
   * Callback to invoke when a month is changed using the navigators.
   * @param {DatePickerMonthChangeEvent} event - custom month change event.
   * @group Emits
   */
  onMonthChange = new EventEmitter();
  /**
   * Callback to invoke when a year is changed using the navigators.
   * @param {DatePickerYearChangeEvent} event - custom year change event.
   * @group Emits
   */
  onYearChange = new EventEmitter();
  /**
   * Callback to invoke when clicked outside of the date panel.
   * @group Emits
   */
  onClickOutside = new EventEmitter();
  /**
   * Callback to invoke when datepicker panel is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  inputfieldViewChild;
  set content(content) {
    this.contentViewChild = content;
    if (this.contentViewChild) {
      if (this.isMonthNavigate) {
        Promise.resolve(null).then(() => this.updateFocus());
        this.isMonthNavigate = false;
      } else {
        if (!this.focus && !this.inline) {
          this.initFocusableCell();
        }
      }
    }
  }
  _componentStyle = inject(DatePickerStyle);
  contentViewChild;
  value;
  dates;
  months;
  weekDays;
  currentMonth;
  currentYear;
  currentHour;
  currentMinute;
  currentSecond;
  p;
  pm;
  mask;
  maskClickListener;
  overlay;
  responsiveStyleElement;
  overlayVisible;
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : []);
  calendarElement;
  timePickerTimer;
  documentClickListener;
  animationEndListener;
  ticksTo1970;
  yearOptions;
  focus;
  isKeydown;
  _minDate;
  _maxDate;
  _dateFormat;
  _hourFormat = "24";
  _showTime;
  _yearRange;
  preventDocumentListener;
  dayClass(date) {
    return this._componentStyle.classes.day({
      instance: this,
      date
    });
  }
  /**
   * Custom template for date cells.
   * @group Templates
   */
  dateTemplate;
  /**
   * Custom template for header section.
   * @group Templates
   */
  headerTemplate;
  /**
   * Custom template for footer section.
   * @group Templates
   */
  footerTemplate;
  /**
   * Custom template for disabled date cells.
   * @group Templates
   */
  disabledDateTemplate;
  /**
   * Custom template for decade view.
   * @group Templates
   */
  decadeTemplate;
  /**
   * Custom template for previous month icon.
   * @group Templates
   */
  previousIconTemplate;
  /**
   * Custom template for next month icon.
   * @group Templates
   */
  nextIconTemplate;
  /**
   * Custom template for trigger icon.
   * @group Templates
   */
  triggerIconTemplate;
  /**
   * Custom template for clear icon.
   * @group Templates
   */
  clearIconTemplate;
  /**
   * Custom template for decrement icon.
   * @group Templates
   */
  decrementIconTemplate;
  /**
   * Custom template for increment icon.
   * @group Templates
   */
  incrementIconTemplate;
  /**
   * Custom template for input icon.
   * @group Templates
   */
  inputIconTemplate;
  /**
   * Custom template for button bar.
   * @group Templates
   */
  buttonBarTemplate;
  _dateTemplate;
  _headerTemplate;
  _footerTemplate;
  _disabledDateTemplate;
  _decadeTemplate;
  _previousIconTemplate;
  _nextIconTemplate;
  _triggerIconTemplate;
  _clearIconTemplate;
  _decrementIconTemplate;
  _incrementIconTemplate;
  _inputIconTemplate;
  _buttonBarTemplate;
  _disabledDates;
  _disabledDays;
  selectElement;
  todayElement;
  focusElement;
  scrollHandler;
  documentResizeListener;
  navigationState = null;
  isMonthNavigate;
  initialized;
  translationSubscription;
  _locale;
  _responsiveOptions;
  currentView;
  attributeSelector;
  panelId;
  _numberOfMonths = 1;
  _firstDayOfWeek;
  _view = "date";
  preventFocus;
  _defaultDate;
  _focusKey = null;
  window;
  get locale() {
    return this._locale;
  }
  get iconButtonAriaLabel() {
    return this.iconAriaLabel ? this.iconAriaLabel : this.getTranslation("chooseDate");
  }
  get prevIconAriaLabel() {
    return this.currentView === "year" ? this.getTranslation("prevDecade") : this.currentView === "month" ? this.getTranslation("prevYear") : this.getTranslation("prevMonth");
  }
  get nextIconAriaLabel() {
    return this.currentView === "year" ? this.getTranslation("nextDecade") : this.currentView === "month" ? this.getTranslation("nextYear") : this.getTranslation("nextMonth");
  }
  constructor(zone, overlayService) {
    super();
    this.zone = zone;
    this.overlayService = overlayService;
    this.window = this.document.defaultView;
  }
  onInit() {
    this.attributeSelector = s2("pn_id_");
    this.panelId = this.attributeSelector + "_panel";
    const date = this.defaultDate || /* @__PURE__ */ new Date();
    this.createResponsiveStyle();
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();
    this.yearOptions = [];
    this.currentView = this.view;
    if (this.view === "date") {
      this.createWeekDays();
      this.initTime(date);
      this.createMonths(this.currentMonth, this.currentYear);
      this.ticksTo1970 = ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 1e7;
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.createWeekDays();
      this.cd.markForCheck();
    });
    this.initialized = true;
  }
  onAfterViewInit() {
    if (this.inline) {
      this.contentViewChild && this.contentViewChild.nativeElement.setAttribute(this.attributeSelector, "");
      if (!this.$disabled() && !this.inline) {
        this.initFocusableCell();
        if (this.numberOfMonths === 1) {
          if (this.contentViewChild && this.contentViewChild.nativeElement) {
            this.contentViewChild.nativeElement.style.width = v(this.el?.nativeElement) + "px";
          }
        }
      }
    }
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  templates;
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "date":
          this._dateTemplate = item.template;
          break;
        case "decade":
          this._decadeTemplate = item.template;
          break;
        case "disabledDate":
          this._disabledDateTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
          break;
        case "inputicon":
          this._inputIconTemplate = item.template;
          break;
        case "buttonbar":
          this._buttonBarTemplate = item.template;
          break;
        case "previousicon":
          this._previousIconTemplate = item.template;
          break;
        case "nexticon":
          this._nextIconTemplate = item.template;
          break;
        case "triggericon":
          this._triggerIconTemplate = item.template;
          break;
        case "clearicon":
          this._clearIconTemplate = item.template;
          break;
        case "decrementicon":
          this._decrementIconTemplate = item.template;
          break;
        case "incrementicon":
          this._incrementIconTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        default:
          this._dateTemplate = item.template;
          break;
      }
    });
  }
  getTranslation(option) {
    return this.config.getTranslation(option);
  }
  populateYearOptions(start, end) {
    this.yearOptions = [];
    for (let i = start; i <= end; i++) {
      this.yearOptions.push(i);
    }
  }
  createWeekDays() {
    this.weekDays = [];
    let dayIndex = this.getFirstDateOfWeek();
    let dayLabels = this.getTranslation(TranslationKeys.DAY_NAMES_MIN);
    for (let i = 0; i < 7; i++) {
      this.weekDays.push(dayLabels[dayIndex]);
      dayIndex = dayIndex == 6 ? 0 : ++dayIndex;
    }
  }
  monthPickerValues() {
    let monthPickerValues = [];
    for (let i = 0; i <= 11; i++) {
      monthPickerValues.push(this.config.getTranslation("monthNamesShort")[i]);
    }
    return monthPickerValues;
  }
  yearPickerValues() {
    let yearPickerValues = [];
    let base = this.currentYear - this.currentYear % 10;
    for (let i = 0; i < 10; i++) {
      yearPickerValues.push(base + i);
    }
    return yearPickerValues;
  }
  createMonths(month, year) {
    this.months = this.months = [];
    for (let i = 0; i < this.numberOfMonths; i++) {
      let m = month + i;
      let y = year;
      if (m > 11) {
        m = m % 12;
        y = year + Math.floor((month + i) / 12);
      }
      this.months.push(this.createMonth(m, y));
    }
  }
  getWeekNumber(date) {
    let checkDate = new Date(date.getTime());
    if (this.startWeekFromFirstDayOfYear) {
      let firstDayOfWeek = +this.getFirstDateOfWeek();
      checkDate.setDate(checkDate.getDate() + 6 + firstDayOfWeek - checkDate.getDay());
    } else {
      checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
    }
    let time = checkDate.getTime();
    checkDate.setMonth(0);
    checkDate.setDate(1);
    return Math.floor(Math.round((time - checkDate.getTime()) / 864e5) / 7) + 1;
  }
  createMonth(month, year) {
    let dates = [];
    let firstDay = this.getFirstDayOfMonthIndex(month, year);
    let daysLength = this.getDaysCountInMonth(month, year);
    let prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
    let dayNo = 1;
    let today = /* @__PURE__ */ new Date();
    let weekNumbers = [];
    let monthRows = Math.ceil((daysLength + firstDay) / 7);
    for (let i = 0; i < monthRows; i++) {
      let week = [];
      if (i == 0) {
        for (let j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
          let prev = this.getPreviousMonthAndYear(month, year);
          week.push({
            day: j,
            month: prev.month,
            year: prev.year,
            otherMonth: true,
            today: this.isToday(today, j, prev.month, prev.year),
            selectable: this.isSelectable(j, prev.month, prev.year, true)
          });
        }
        let remainingDaysLength = 7 - week.length;
        for (let j = 0; j < remainingDaysLength; j++) {
          week.push({
            day: dayNo,
            month,
            year,
            today: this.isToday(today, dayNo, month, year),
            selectable: this.isSelectable(dayNo, month, year, false)
          });
          dayNo++;
        }
      } else {
        for (let j = 0; j < 7; j++) {
          if (dayNo > daysLength) {
            let next = this.getNextMonthAndYear(month, year);
            week.push({
              day: dayNo - daysLength,
              month: next.month,
              year: next.year,
              otherMonth: true,
              today: this.isToday(today, dayNo - daysLength, next.month, next.year),
              selectable: this.isSelectable(dayNo - daysLength, next.month, next.year, true)
            });
          } else {
            week.push({
              day: dayNo,
              month,
              year,
              today: this.isToday(today, dayNo, month, year),
              selectable: this.isSelectable(dayNo, month, year, false)
            });
          }
          dayNo++;
        }
      }
      if (this.showWeek) {
        weekNumbers.push(this.getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));
      }
      dates.push(week);
    }
    return {
      month,
      year,
      dates,
      weekNumbers
    };
  }
  initTime(date) {
    this.pm = date.getHours() > 11;
    if (this.showTime) {
      this.currentMinute = date.getMinutes();
      this.currentSecond = this.showSeconds ? date.getSeconds() : 0;
      this.setCurrentHourPM(date.getHours());
    } else if (this.timeOnly) {
      this.currentMinute = 0;
      this.currentHour = 0;
      this.currentSecond = 0;
    }
  }
  navBackward(event2) {
    if (this.$disabled()) {
      event2.preventDefault();
      return;
    }
    this.isMonthNavigate = true;
    if (this.currentView === "month") {
      this.decrementYear();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else if (this.currentView === "year") {
      this.decrementDecade();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.decrementYear();
      } else {
        this.currentMonth--;
      }
      this.onMonthChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  navForward(event2) {
    if (this.$disabled()) {
      event2.preventDefault();
      return;
    }
    this.isMonthNavigate = true;
    if (this.currentView === "month") {
      this.incrementYear();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else if (this.currentView === "year") {
      this.incrementDecade();
      setTimeout(() => {
        this.updateFocus();
      }, 1);
    } else {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.incrementYear();
      } else {
        this.currentMonth++;
      }
      this.onMonthChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
      this.createMonths(this.currentMonth, this.currentYear);
    }
  }
  decrementYear() {
    this.currentYear--;
    let _yearOptions = this.yearOptions;
    if (this.currentYear < _yearOptions[0]) {
      let difference = _yearOptions[_yearOptions.length - 1] - _yearOptions[0];
      this.populateYearOptions(_yearOptions[0] - difference, _yearOptions[_yearOptions.length - 1] - difference);
    }
  }
  decrementDecade() {
    this.currentYear = this.currentYear - 10;
  }
  incrementDecade() {
    this.currentYear = this.currentYear + 10;
  }
  incrementYear() {
    this.currentYear++;
    let _yearOptions = this.yearOptions;
    if (this.currentYear > _yearOptions[_yearOptions.length - 1]) {
      let difference = _yearOptions[_yearOptions.length - 1] - _yearOptions[0];
      this.populateYearOptions(_yearOptions[0] + difference, _yearOptions[_yearOptions.length - 1] + difference);
    }
  }
  switchToMonthView(event2) {
    this.setCurrentView("month");
    event2.preventDefault();
  }
  switchToYearView(event2) {
    this.setCurrentView("year");
    event2.preventDefault();
  }
  onDateSelect(event2, dateMeta) {
    if (this.$disabled() || !dateMeta.selectable) {
      event2.preventDefault();
      return;
    }
    if (this.isMultipleSelection() && this.isSelected(dateMeta)) {
      this.value = this.value.filter((date, i) => {
        return !this.isDateEquals(date, dateMeta);
      });
      if (this.value.length === 0) {
        this.value = null;
      }
      this.updateModel(this.value);
    } else {
      if (this.shouldSelectDate(dateMeta)) {
        this.selectDate(dateMeta);
      }
    }
    if (this.hideOnDateTimeSelect && (this.isSingleSelection() || this.isRangeSelection() && this.value[1])) {
      setTimeout(() => {
        event2.preventDefault();
        this.hideOverlay();
        if (this.mask) {
          this.disableModality();
        }
        this.cd.markForCheck();
      }, 150);
    }
    this.updateInputfield();
    event2.preventDefault();
  }
  shouldSelectDate(dateMeta) {
    if (this.isMultipleSelection()) return this.maxDateCount != null ? this.maxDateCount > (this.value ? this.value.length : 0) : true;
    else return true;
  }
  onMonthSelect(event2, index) {
    if (this.view === "month") {
      this.onDateSelect(event2, {
        year: this.currentYear,
        month: index,
        day: 1,
        selectable: true
      });
    } else {
      this.currentMonth = index;
      this.createMonths(this.currentMonth, this.currentYear);
      this.setCurrentView("date");
      this.onMonthChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    }
  }
  onYearSelect(event2, year) {
    if (this.view === "year") {
      this.onDateSelect(event2, {
        year,
        month: 0,
        day: 1,
        selectable: true
      });
    } else {
      this.currentYear = year;
      this.setCurrentView("month");
      this.onYearChange.emit({
        month: this.currentMonth + 1,
        year: this.currentYear
      });
    }
  }
  updateInputfield() {
    let formattedValue = "";
    if (this.value) {
      if (this.isSingleSelection()) {
        formattedValue = this.formatDateTime(this.value);
      } else if (this.isMultipleSelection()) {
        for (let i = 0; i < this.value.length; i++) {
          let dateAsString = this.formatDateTime(this.value[i]);
          formattedValue += dateAsString;
          if (i !== this.value.length - 1) {
            formattedValue += this.multipleSeparator + " ";
          }
        }
      } else if (this.isRangeSelection()) {
        if (this.value && this.value.length) {
          let startDate = this.value[0];
          let endDate = this.value[1];
          formattedValue = this.formatDateTime(startDate);
          if (endDate) {
            formattedValue += " " + this.rangeSeparator + " " + this.formatDateTime(endDate);
          }
        }
      }
    }
    this.writeModelValue(formattedValue);
    this.inputFieldValue = formattedValue;
    if (this.inputfieldViewChild && this.inputfieldViewChild.nativeElement) {
      this.inputfieldViewChild.nativeElement.value = this.inputFieldValue;
    }
  }
  inputFieldValue = null;
  formatDateTime(date) {
    let formattedValue = this.keepInvalid ? date : null;
    const isDateValid = this.isValidDateForTimeConstraints(date);
    if (this.isValidDate(date)) {
      if (this.timeOnly) {
        formattedValue = this.formatTime(date);
      } else {
        formattedValue = this.formatDate(date, this.getDateFormat());
        if (this.showTime) {
          formattedValue += " " + this.formatTime(date);
        }
      }
    } else if (this.dataType === "string") {
      formattedValue = date;
    }
    formattedValue = isDateValid ? formattedValue : "";
    return formattedValue;
  }
  formatDateMetaToDate(dateMeta) {
    return new Date(dateMeta.year, dateMeta.month, dateMeta.day);
  }
  formatDateKey(date) {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  }
  setCurrentHourPM(hours) {
    if (this.hourFormat == "12") {
      this.pm = hours > 11;
      if (hours >= 12) {
        this.currentHour = hours == 12 ? 12 : hours - 12;
      } else {
        this.currentHour = hours == 0 ? 12 : hours;
      }
    } else {
      this.currentHour = hours;
    }
  }
  setCurrentView(currentView) {
    this.currentView = currentView;
    this.cd.detectChanges();
    this.alignOverlay();
  }
  selectDate(dateMeta) {
    let date = this.formatDateMetaToDate(dateMeta);
    if (this.showTime) {
      if (this.hourFormat == "12") {
        if (this.currentHour === 12) date.setHours(this.pm ? 12 : 0);
        else date.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
      } else {
        date.setHours(this.currentHour);
      }
      date.setMinutes(this.currentMinute);
      date.setSeconds(this.currentSecond);
    }
    if (this.minDate && this.minDate > date) {
      date = this.minDate;
      this.setCurrentHourPM(date.getHours());
      this.currentMinute = date.getMinutes();
      this.currentSecond = date.getSeconds();
    }
    if (this.maxDate && this.maxDate < date) {
      date = this.maxDate;
      this.setCurrentHourPM(date.getHours());
      this.currentMinute = date.getMinutes();
      this.currentSecond = date.getSeconds();
    }
    if (this.isSingleSelection()) {
      this.updateModel(date);
    } else if (this.isMultipleSelection()) {
      this.updateModel(this.value ? [...this.value, date] : [date]);
    } else if (this.isRangeSelection()) {
      if (this.value && this.value.length) {
        let startDate = this.value[0];
        let endDate = this.value[1];
        if (!endDate && date.getTime() >= startDate.getTime()) {
          endDate = date;
        } else {
          startDate = date;
          endDate = null;
        }
        this.updateModel([startDate, endDate]);
      } else {
        this.updateModel([date, null]);
      }
    }
    this.onSelect.emit(date);
  }
  updateModel(value) {
    this.value = value;
    if (this.dataType == "date") {
      this.writeModelValue(this.value);
      this.onModelChange(this.value);
    } else if (this.dataType == "string") {
      if (this.isSingleSelection()) {
        this.onModelChange(this.formatDateTime(this.value));
      } else {
        let stringArrValue = null;
        if (Array.isArray(this.value)) {
          stringArrValue = this.value.map((date) => this.formatDateTime(date));
        }
        this.writeModelValue(stringArrValue);
        this.onModelChange(stringArrValue);
      }
    }
  }
  getFirstDayOfMonthIndex(month, year) {
    let day = /* @__PURE__ */ new Date();
    day.setDate(1);
    day.setMonth(month);
    day.setFullYear(year);
    let dayIndex = day.getDay() + this.getSundayIndex();
    return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
  }
  getDaysCountInMonth(month, year) {
    return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
  }
  getDaysCountInPrevMonth(month, year) {
    let prev = this.getPreviousMonthAndYear(month, year);
    return this.getDaysCountInMonth(prev.month, prev.year);
  }
  getPreviousMonthAndYear(month, year) {
    let m, y;
    if (month === 0) {
      m = 11;
      y = year - 1;
    } else {
      m = month - 1;
      y = year;
    }
    return {
      month: m,
      year: y
    };
  }
  getNextMonthAndYear(month, year) {
    let m, y;
    if (month === 11) {
      m = 0;
      y = year + 1;
    } else {
      m = month + 1;
      y = year;
    }
    return {
      month: m,
      year: y
    };
  }
  getSundayIndex() {
    let firstDayOfWeek = this.getFirstDateOfWeek();
    return firstDayOfWeek > 0 ? 7 - firstDayOfWeek : 0;
  }
  isSelected(dateMeta) {
    if (this.value) {
      if (this.isSingleSelection()) {
        return this.isDateEquals(this.value, dateMeta);
      } else if (this.isMultipleSelection()) {
        let selected = false;
        for (let date of this.value) {
          selected = this.isDateEquals(date, dateMeta);
          if (selected) {
            break;
          }
        }
        return selected;
      } else if (this.isRangeSelection()) {
        if (this.value[1]) return this.isDateEquals(this.value[0], dateMeta) || this.isDateEquals(this.value[1], dateMeta) || this.isDateBetween(this.value[0], this.value[1], dateMeta);
        else return this.isDateEquals(this.value[0], dateMeta);
      }
    } else {
      return false;
    }
  }
  isComparable() {
    return this.value != null && typeof this.value !== "string";
  }
  isMonthSelected(month) {
    if (!this.isComparable()) return false;
    if (this.isMultipleSelection()) {
      return this.value.some((currentValue) => currentValue.getMonth() === month && currentValue.getFullYear() === this.currentYear);
    } else if (this.isRangeSelection()) {
      if (!this.value[1]) {
        return this.value[0]?.getFullYear() === this.currentYear && this.value[0]?.getMonth() === month;
      } else {
        const currentDate = new Date(this.currentYear, month, 1);
        const startDate = new Date(this.value[0].getFullYear(), this.value[0].getMonth(), 1);
        const endDate = new Date(this.value[1].getFullYear(), this.value[1].getMonth(), 1);
        return currentDate >= startDate && currentDate <= endDate;
      }
    } else {
      return this.value.getMonth() === month && this.value.getFullYear() === this.currentYear;
    }
  }
  isMonthDisabled(month, year) {
    const yearToCheck = year ?? this.currentYear;
    for (let day = 1; day < this.getDaysCountInMonth(month, yearToCheck) + 1; day++) {
      if (this.isSelectable(day, month, yearToCheck, false)) {
        return false;
      }
    }
    return true;
  }
  isYearDisabled(year) {
    return Array(12).fill(0).every((v2, month) => this.isMonthDisabled(month, year));
  }
  isYearSelected(year) {
    if (this.isComparable()) {
      let value = this.isRangeSelection() ? this.value[0] : this.value;
      return !this.isMultipleSelection() ? value.getFullYear() === year : false;
    }
    return false;
  }
  isDateEquals(value, dateMeta) {
    if (value && O(value)) return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;
    else return false;
  }
  isDateBetween(start, end, dateMeta) {
    let between = false;
    if (O(start) && O(end)) {
      let date = this.formatDateMetaToDate(dateMeta);
      return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
    }
    return between;
  }
  isSingleSelection() {
    return this.selectionMode === "single";
  }
  isRangeSelection() {
    return this.selectionMode === "range";
  }
  isMultipleSelection() {
    return this.selectionMode === "multiple";
  }
  isToday(today, day, month, year) {
    return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
  }
  isSelectable(day, month, year, otherMonth) {
    let validMin = true;
    let validMax = true;
    let validDate = true;
    let validDay = true;
    if (otherMonth && !this.selectOtherMonths) {
      return false;
    }
    if (this.minDate) {
      if (this.minDate.getFullYear() > year) {
        validMin = false;
      } else if (this.minDate.getFullYear() === year && this.currentView != "year") {
        if (this.minDate.getMonth() > month) {
          validMin = false;
        } else if (this.minDate.getMonth() === month) {
          if (this.minDate.getDate() > day) {
            validMin = false;
          }
        }
      }
    }
    if (this.maxDate) {
      if (this.maxDate.getFullYear() < year) {
        validMax = false;
      } else if (this.maxDate.getFullYear() === year) {
        if (this.maxDate.getMonth() < month) {
          validMax = false;
        } else if (this.maxDate.getMonth() === month) {
          if (this.maxDate.getDate() < day) {
            validMax = false;
          }
        }
      }
    }
    if (this.disabledDates) {
      validDate = !this.isDateDisabled(day, month, year);
    }
    if (this.disabledDays) {
      validDay = !this.isDayDisabled(day, month, year);
    }
    return validMin && validMax && validDate && validDay;
  }
  isDateDisabled(day, month, year) {
    if (this.disabledDates) {
      for (let disabledDate of this.disabledDates) {
        if (disabledDate.getFullYear() === year && disabledDate.getMonth() === month && disabledDate.getDate() === day) {
          return true;
        }
      }
    }
    return false;
  }
  isDayDisabled(day, month, year) {
    if (this.disabledDays) {
      let weekday = new Date(year, month, day);
      let weekdayNumber = weekday.getDay();
      return this.disabledDays.indexOf(weekdayNumber) !== -1;
    }
    return false;
  }
  onInputFocus(event2) {
    this.focus = true;
    if (this.showOnFocus) {
      this.showOverlay();
    }
    this.onFocus.emit(event2);
  }
  onInputClick() {
    if (this.showOnFocus && !this.overlayVisible) {
      this.showOverlay();
    }
  }
  onInputBlur(event2) {
    this.focus = false;
    this.onBlur.emit(event2);
    if (!this.keepInvalid) {
      this.updateInputfield();
    }
    this.onModelTouched();
  }
  onButtonClick(event2, inputfield = this.inputfieldViewChild?.nativeElement) {
    if (this.$disabled()) {
      return;
    }
    if (!this.overlayVisible) {
      inputfield.focus();
      this.showOverlay();
    } else {
      this.hideOverlay();
    }
  }
  clear() {
    this.value = null;
    this.inputFieldValue = null;
    this.writeModelValue(this.value);
    this.onModelChange(this.value);
    this.updateInputfield();
    this.onClear.emit();
  }
  onOverlayClick(event2) {
    this.overlayService.add({
      originalEvent: event2,
      target: this.el.nativeElement
    });
  }
  getMonthName(index) {
    return this.config.getTranslation("monthNames")[index];
  }
  getYear(month) {
    return this.currentView === "month" ? this.currentYear : month.year;
  }
  switchViewButtonDisabled() {
    return this.numberOfMonths > 1 || this.$disabled();
  }
  onPrevButtonClick(event2) {
    this.navigationState = {
      backward: true,
      button: true
    };
    this.navBackward(event2);
  }
  onNextButtonClick(event2) {
    this.navigationState = {
      backward: false,
      button: true
    };
    this.navForward(event2);
  }
  onContainerButtonKeydown(event2) {
    switch (event2.which) {
      //tab
      case 9:
        if (!this.inline) {
          this.trapFocus(event2);
        }
        if (this.inline) {
          const headerElements = z(this.el?.nativeElement, ".p-datepicker-header");
          const element = event2.target;
          if (this.timeOnly) {
            return;
          } else {
            if (element == headerElements?.children[headerElements?.children?.length - 1]) {
              this.initFocusableCell();
            }
          }
        }
        break;
      //escape
      case 27:
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
        break;
      default:
        break;
    }
  }
  onInputKeydown(event2) {
    this.isKeydown = true;
    if (event2.keyCode === 40 && this.contentViewChild) {
      this.trapFocus(event2);
    } else if (event2.keyCode === 27) {
      if (this.overlayVisible) {
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
      }
    } else if (event2.keyCode === 13) {
      if (this.overlayVisible) {
        this.overlayVisible = false;
        event2.preventDefault();
      }
    } else if (event2.keyCode === 9 && this.contentViewChild) {
      b(this.contentViewChild.nativeElement).forEach((el) => el.tabIndex = "-1");
      if (this.overlayVisible) {
        this.overlayVisible = false;
      }
    }
  }
  onDateCellKeydown(event2, dateMeta, groupIndex) {
    const cellContent = event2.currentTarget;
    const cell = cellContent.parentElement;
    const currentDate = this.formatDateMetaToDate(dateMeta);
    switch (event2.which) {
      //down arrow
      case 40: {
        cellContent.tabIndex = "-1";
        let cellIndex = Ht(cell);
        let nextRow = cell.parentElement.nextElementSibling;
        if (nextRow) {
          let focusCell = nextRow.children[cellIndex].children[0];
          if (R(focusCell, "p-disabled")) {
            this.navigationState = {
              backward: false
            };
            this.navForward(event2);
          } else {
            nextRow.children[cellIndex].children[0].tabIndex = "0";
            nextRow.children[cellIndex].children[0].focus();
          }
        } else {
          this.navigationState = {
            backward: false
          };
          this.navForward(event2);
        }
        event2.preventDefault();
        break;
      }
      //up arrow
      case 38: {
        cellContent.tabIndex = "-1";
        let cellIndex = Ht(cell);
        let prevRow = cell.parentElement.previousElementSibling;
        if (prevRow) {
          let focusCell = prevRow.children[cellIndex].children[0];
          if (R(focusCell, "p-disabled")) {
            this.navigationState = {
              backward: true
            };
            this.navBackward(event2);
          } else {
            focusCell.tabIndex = "0";
            focusCell.focus();
          }
        } else {
          this.navigationState = {
            backward: true
          };
          this.navBackward(event2);
        }
        event2.preventDefault();
        break;
      }
      //left arrow
      case 37: {
        cellContent.tabIndex = "-1";
        let prevCell = cell.previousElementSibling;
        if (prevCell) {
          let focusCell = prevCell.children[0];
          if (R(focusCell, "p-disabled") || R(focusCell.parentElement, "p-datepicker-weeknumber")) {
            this.navigateToMonth(true, groupIndex);
          } else {
            focusCell.tabIndex = "0";
            focusCell.focus();
          }
        } else {
          this.navigateToMonth(true, groupIndex);
        }
        event2.preventDefault();
        break;
      }
      //right arrow
      case 39: {
        cellContent.tabIndex = "-1";
        let nextCell = cell.nextElementSibling;
        if (nextCell) {
          let focusCell = nextCell.children[0];
          if (R(focusCell, "p-disabled")) {
            this.navigateToMonth(false, groupIndex);
          } else {
            focusCell.tabIndex = "0";
            focusCell.focus();
          }
        } else {
          this.navigateToMonth(false, groupIndex);
        }
        event2.preventDefault();
        break;
      }
      //enter
      //space
      case 13:
      case 32: {
        this.onDateSelect(event2, dateMeta);
        event2.preventDefault();
        break;
      }
      //escape
      case 27: {
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
        break;
      }
      //tab
      case 9: {
        if (!this.inline) {
          this.trapFocus(event2);
        }
        break;
      }
      // page up
      case 33: {
        cellContent.tabIndex = "-1";
        const dateToFocus = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
        const focusKey = this.formatDateKey(dateToFocus);
        this.navigateToMonth(true, groupIndex, `span[data-date='${focusKey}']:not(.p-disabled):not(.p-ink)`);
        event2.preventDefault();
        break;
      }
      // page down
      case 34: {
        cellContent.tabIndex = "-1";
        const dateToFocus = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());
        const focusKey = this.formatDateKey(dateToFocus);
        this.navigateToMonth(false, groupIndex, `span[data-date='${focusKey}']:not(.p-disabled):not(.p-ink)`);
        event2.preventDefault();
        break;
      }
      //home
      case 36:
        cellContent.tabIndex = "-1";
        const firstDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const firstDayDateKey = this.formatDateKey(firstDayDate);
        const firstDayCell = z(cellContent.offsetParent, `span[data-date='${firstDayDateKey}']:not(.p-disabled):not(.p-ink)`);
        if (firstDayCell) {
          firstDayCell.tabIndex = "0";
          firstDayCell.focus();
        }
        event2.preventDefault();
        break;
      //end
      case 35:
        cellContent.tabIndex = "-1";
        const lastDayDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const lastDayDateKey = this.formatDateKey(lastDayDate);
        const lastDayCell = z(cellContent.offsetParent, `span[data-date='${lastDayDateKey}']:not(.p-disabled):not(.p-ink)`);
        if (lastDayDate) {
          lastDayCell.tabIndex = "0";
          lastDayCell.focus();
        }
        event2.preventDefault();
        break;
      default:
        break;
    }
  }
  onMonthCellKeydown(event2, index) {
    const cell = event2.currentTarget;
    switch (event2.which) {
      //arrows
      case 38:
      case 40: {
        cell.tabIndex = "-1";
        var cells = cell.parentElement.children;
        var cellIndex = Ht(cell);
        let nextCell = cells[event2.which === 40 ? cellIndex + 3 : cellIndex - 3];
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        }
        event2.preventDefault();
        break;
      }
      //left arrow
      case 37: {
        cell.tabIndex = "-1";
        let prevCell = cell.previousElementSibling;
        if (prevCell) {
          prevCell.tabIndex = "0";
          prevCell.focus();
        } else {
          this.navigationState = {
            backward: true
          };
          this.navBackward(event2);
        }
        event2.preventDefault();
        break;
      }
      //right arrow
      case 39: {
        cell.tabIndex = "-1";
        let nextCell = cell.nextElementSibling;
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        } else {
          this.navigationState = {
            backward: false
          };
          this.navForward(event2);
        }
        event2.preventDefault();
        break;
      }
      //enter
      //space
      case 13:
      case 32: {
        this.onMonthSelect(event2, index);
        event2.preventDefault();
        break;
      }
      //escape
      case 27: {
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
        break;
      }
      //tab
      case 9: {
        if (!this.inline) {
          this.trapFocus(event2);
        }
        break;
      }
      default:
        break;
    }
  }
  onYearCellKeydown(event2, index) {
    const cell = event2.currentTarget;
    switch (event2.which) {
      //arrows
      case 38:
      case 40: {
        cell.tabIndex = "-1";
        var cells = cell.parentElement.children;
        var cellIndex = Ht(cell);
        let nextCell = cells[event2.which === 40 ? cellIndex + 2 : cellIndex - 2];
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        }
        event2.preventDefault();
        break;
      }
      //left arrow
      case 37: {
        cell.tabIndex = "-1";
        let prevCell = cell.previousElementSibling;
        if (prevCell) {
          prevCell.tabIndex = "0";
          prevCell.focus();
        } else {
          this.navigationState = {
            backward: true
          };
          this.navBackward(event2);
        }
        event2.preventDefault();
        break;
      }
      //right arrow
      case 39: {
        cell.tabIndex = "-1";
        let nextCell = cell.nextElementSibling;
        if (nextCell) {
          nextCell.tabIndex = "0";
          nextCell.focus();
        } else {
          this.navigationState = {
            backward: false
          };
          this.navForward(event2);
        }
        event2.preventDefault();
        break;
      }
      //enter
      //space
      case 13:
      case 32: {
        this.onYearSelect(event2, index);
        event2.preventDefault();
        break;
      }
      //escape
      case 27: {
        this.inputfieldViewChild?.nativeElement.focus();
        this.overlayVisible = false;
        event2.preventDefault();
        break;
      }
      //tab
      case 9: {
        this.trapFocus(event2);
        break;
      }
      default:
        break;
    }
  }
  navigateToMonth(prev, groupIndex, focusKey) {
    if (prev) {
      if (this.numberOfMonths === 1 || groupIndex === 0) {
        this.navigationState = {
          backward: true
        };
        this._focusKey = focusKey;
        this.navBackward(event);
      } else {
        let prevMonthContainer = this.contentViewChild.nativeElement.children[groupIndex - 1];
        if (focusKey) {
          const firstDayCell = z(prevMonthContainer, focusKey);
          firstDayCell.tabIndex = "0";
          firstDayCell.focus();
        } else {
          let cells = Y(prevMonthContainer, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
          let focusCell = cells[cells.length - 1];
          focusCell.tabIndex = "0";
          focusCell.focus();
        }
      }
    } else {
      if (this.numberOfMonths === 1 || groupIndex === this.numberOfMonths - 1) {
        this.navigationState = {
          backward: false
        };
        this._focusKey = focusKey;
        this.navForward(event);
      } else {
        let nextMonthContainer = this.contentViewChild.nativeElement.children[groupIndex + 1];
        if (focusKey) {
          const firstDayCell = z(nextMonthContainer, focusKey);
          firstDayCell.tabIndex = "0";
          firstDayCell.focus();
        } else {
          let focusCell = z(nextMonthContainer, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
          focusCell.tabIndex = "0";
          focusCell.focus();
        }
      }
    }
  }
  updateFocus() {
    let cell;
    if (this.navigationState) {
      if (this.navigationState.button) {
        this.initFocusableCell();
        if (this.navigationState.backward) z(this.contentViewChild.nativeElement, ".p-datepicker-prev-button").focus();
        else z(this.contentViewChild.nativeElement, ".p-datepicker-next-button").focus();
      } else {
        if (this.navigationState.backward) {
          let cells;
          if (this.currentView === "month") {
            cells = Y(this.contentViewChild.nativeElement, ".p-datepicker-month-view .p-datepicker-month:not(.p-disabled)");
          } else if (this.currentView === "year") {
            cells = Y(this.contentViewChild.nativeElement, ".p-datepicker-year-view .p-datepicker-year:not(.p-disabled)");
          } else {
            cells = Y(this.contentViewChild.nativeElement, this._focusKey || ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
          }
          if (cells && cells.length > 0) {
            cell = cells[cells.length - 1];
          }
        } else {
          if (this.currentView === "month") {
            cell = z(this.contentViewChild.nativeElement, ".p-datepicker-month-view .p-datepicker-month:not(.p-disabled)");
          } else if (this.currentView === "year") {
            cell = z(this.contentViewChild.nativeElement, ".p-datepicker-year-view .p-datepicker-year:not(.p-disabled)");
          } else {
            cell = z(this.contentViewChild.nativeElement, this._focusKey || ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
          }
        }
        if (cell) {
          cell.tabIndex = "0";
          cell.focus();
        }
      }
      this.navigationState = null;
      this._focusKey = null;
    } else {
      this.initFocusableCell();
    }
  }
  initFocusableCell() {
    const contentEl = this.contentViewChild?.nativeElement;
    let cell;
    if (this.currentView === "month") {
      let cells = Y(contentEl, ".p-datepicker-month-view .p-datepicker-month:not(.p-disabled)");
      let selectedCell = z(contentEl, ".p-datepicker-month-view .p-datepicker-month.p-highlight");
      cells.forEach((cell2) => cell2.tabIndex = -1);
      cell = selectedCell || cells[0];
      if (cells.length === 0) {
        let disabledCells = Y(contentEl, '.p-datepicker-month-view .p-datepicker-month.p-disabled[tabindex = "0"]');
        disabledCells.forEach((cell2) => cell2.tabIndex = -1);
      }
    } else if (this.currentView === "year") {
      let cells = Y(contentEl, ".p-datepicker-year-view .p-datepicker-year:not(.p-disabled)");
      let selectedCell = z(contentEl, ".p-datepicker-year-view .p-datepicker-year.p-highlight");
      cells.forEach((cell2) => cell2.tabIndex = -1);
      cell = selectedCell || cells[0];
      if (cells.length === 0) {
        let disabledCells = Y(contentEl, '.p-datepicker-year-view .p-datepicker-year.p-disabled[tabindex = "0"]');
        disabledCells.forEach((cell2) => cell2.tabIndex = -1);
      }
    } else {
      cell = z(contentEl, "span.p-highlight");
      if (!cell) {
        let todayCell = z(contentEl, "td.p-datepicker-today span:not(.p-disabled):not(.p-ink)");
        if (todayCell) cell = todayCell;
        else cell = z(contentEl, ".p-datepicker-calendar td span:not(.p-disabled):not(.p-ink)");
      }
    }
    if (cell) {
      cell.tabIndex = "0";
      if (!this.preventFocus && (!this.navigationState || !this.navigationState.button)) {
        setTimeout(() => {
          if (!this.$disabled()) {
            cell.focus();
          }
        }, 1);
      }
      this.preventFocus = false;
    }
  }
  trapFocus(event2) {
    let focusableElements = b(this.contentViewChild.nativeElement);
    if (focusableElements && focusableElements.length > 0) {
      if (!focusableElements[0].ownerDocument.activeElement) {
        focusableElements[0].focus();
      } else {
        let focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
        if (event2.shiftKey) {
          if (focusedIndex == -1 || focusedIndex === 0) {
            if (this.focusTrap) {
              focusableElements[focusableElements.length - 1].focus();
            } else {
              if (focusedIndex === -1) return this.hideOverlay();
              else if (focusedIndex === 0) return;
            }
          } else {
            focusableElements[focusedIndex - 1].focus();
          }
        } else {
          if (focusedIndex == -1) {
            if (this.timeOnly) {
              focusableElements[0].focus();
            } else {
              let spanIndex = 0;
              for (let i = 0; i < focusableElements.length; i++) {
                if (focusableElements[i].tagName === "SPAN") spanIndex = i;
              }
              focusableElements[spanIndex].focus();
            }
          } else if (focusedIndex === focusableElements.length - 1) {
            if (!this.focusTrap && focusedIndex != -1) return this.hideOverlay();
            focusableElements[0].focus();
          } else {
            focusableElements[focusedIndex + 1].focus();
          }
        }
      }
    }
    event2.preventDefault();
  }
  onMonthDropdownChange(m) {
    this.currentMonth = parseInt(m);
    this.onMonthChange.emit({
      month: this.currentMonth + 1,
      year: this.currentYear
    });
    this.createMonths(this.currentMonth, this.currentYear);
  }
  onYearDropdownChange(y) {
    this.currentYear = parseInt(y);
    this.onYearChange.emit({
      month: this.currentMonth + 1,
      year: this.currentYear
    });
    this.createMonths(this.currentMonth, this.currentYear);
  }
  convertTo24Hour(hours, pm) {
    if (this.hourFormat == "12") {
      if (hours === 12) {
        return pm ? 12 : 0;
      } else {
        return pm ? hours + 12 : hours;
      }
    }
    return hours;
  }
  constrainTime(hour, minute, second, pm) {
    let returnTimeTriple = [hour, minute, second];
    let minHoursExceeds12 = false;
    let value = this.value;
    const convertedHour = this.convertTo24Hour(hour, pm);
    const isRange = this.isRangeSelection(), isMultiple = this.isMultipleSelection(), isMultiValue = isRange || isMultiple;
    if (isMultiValue) {
      if (!this.value) {
        this.value = [/* @__PURE__ */ new Date(), /* @__PURE__ */ new Date()];
      }
      if (isRange) {
        value = this.value[1] || this.value[0];
      }
      if (isMultiple) {
        value = this.value[this.value.length - 1];
      }
    }
    const valueDateString = value ? value.toDateString() : null;
    let isMinDate = this.minDate && valueDateString && this.minDate.toDateString() === valueDateString;
    let isMaxDate = this.maxDate && valueDateString && this.maxDate.toDateString() === valueDateString;
    if (isMinDate) {
      minHoursExceeds12 = this.minDate.getHours() >= 12;
    }
    switch (true) {
      case (isMinDate && minHoursExceeds12 && this.minDate.getHours() === 12 && this.minDate.getHours() > convertedHour):
        returnTimeTriple[0] = 11;
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute):
        returnTimeTriple[1] = this.minDate.getMinutes();
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second):
        returnTimeTriple[2] = this.minDate.getSeconds();
        break;
      case (isMinDate && !minHoursExceeds12 && this.minDate.getHours() - 1 === convertedHour && this.minDate.getHours() > convertedHour):
        returnTimeTriple[0] = 11;
        this.pm = true;
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute):
        returnTimeTriple[1] = this.minDate.getMinutes();
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second):
        returnTimeTriple[2] = this.minDate.getSeconds();
        break;
      case (isMinDate && minHoursExceeds12 && this.minDate.getHours() > convertedHour && convertedHour !== 12):
        this.setCurrentHourPM(this.minDate.getHours());
        returnTimeTriple[0] = this.currentHour || 0;
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute):
        returnTimeTriple[1] = this.minDate.getMinutes();
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second):
        returnTimeTriple[2] = this.minDate.getSeconds();
        break;
      case (isMinDate && this.minDate.getHours() > convertedHour):
        returnTimeTriple[0] = this.minDate.getHours();
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() > minute):
        returnTimeTriple[1] = this.minDate.getMinutes();
      case (isMinDate && this.minDate.getHours() === convertedHour && this.minDate.getMinutes() === minute && this.minDate.getSeconds() > second):
        returnTimeTriple[2] = this.minDate.getSeconds();
        break;
      case (isMaxDate && this.maxDate.getHours() < convertedHour):
        returnTimeTriple[0] = this.maxDate.getHours();
      case (isMaxDate && this.maxDate.getHours() === convertedHour && this.maxDate.getMinutes() < minute):
        returnTimeTriple[1] = this.maxDate.getMinutes();
      case (isMaxDate && this.maxDate.getHours() === convertedHour && this.maxDate.getMinutes() === minute && this.maxDate.getSeconds() < second):
        returnTimeTriple[2] = this.maxDate.getSeconds();
        break;
    }
    return returnTimeTriple;
  }
  incrementHour(event2) {
    const prevHour = this.currentHour ?? 0;
    let newHour = (this.currentHour ?? 0) + this.stepHour;
    let newPM = this.pm;
    if (this.hourFormat == "24") newHour = newHour >= 24 ? newHour - 24 : newHour;
    else if (this.hourFormat == "12") {
      if (prevHour < 12 && newHour > 11) {
        newPM = !this.pm;
      }
      newHour = newHour >= 13 ? newHour - 12 : newHour;
    }
    this.toggleAMPMIfNotMinDate(newPM);
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(newHour, this.currentMinute, this.currentSecond, newPM);
    event2.preventDefault();
  }
  toggleAMPMIfNotMinDate(newPM) {
    let value = this.value;
    const valueDateString = value ? value.toDateString() : null;
    let isMinDate = this.minDate && valueDateString && this.minDate.toDateString() === valueDateString;
    if (isMinDate && this.minDate.getHours() >= 12) {
      this.pm = true;
    } else {
      this.pm = newPM;
    }
  }
  onTimePickerElementMouseDown(event2, type, direction) {
    if (!this.$disabled()) {
      this.repeat(event2, null, type, direction);
      event2.preventDefault();
    }
  }
  onTimePickerElementMouseUp(event2) {
    if (!this.$disabled()) {
      this.clearTimePickerTimer();
      this.updateTime();
    }
  }
  onTimePickerElementMouseLeave() {
    if (!this.$disabled() && this.timePickerTimer) {
      this.clearTimePickerTimer();
      this.updateTime();
    }
  }
  repeat(event2, interval, type, direction) {
    let i = interval || 500;
    this.clearTimePickerTimer();
    this.timePickerTimer = setTimeout(() => {
      this.repeat(event2, 100, type, direction);
      this.cd.markForCheck();
    }, i);
    switch (type) {
      case 0:
        if (direction === 1) this.incrementHour(event2);
        else this.decrementHour(event2);
        break;
      case 1:
        if (direction === 1) this.incrementMinute(event2);
        else this.decrementMinute(event2);
        break;
      case 2:
        if (direction === 1) this.incrementSecond(event2);
        else this.decrementSecond(event2);
        break;
    }
    this.updateInputfield();
  }
  clearTimePickerTimer() {
    if (this.timePickerTimer) {
      clearTimeout(this.timePickerTimer);
      this.timePickerTimer = null;
    }
  }
  decrementHour(event2) {
    let newHour = (this.currentHour ?? 0) - this.stepHour;
    let newPM = this.pm;
    if (this.hourFormat == "24") newHour = newHour < 0 ? 24 + newHour : newHour;
    else if (this.hourFormat == "12") {
      if (this.currentHour === 12) {
        newPM = !this.pm;
      }
      newHour = newHour <= 0 ? 12 + newHour : newHour;
    }
    this.toggleAMPMIfNotMinDate(newPM);
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(newHour, this.currentMinute, this.currentSecond, newPM);
    event2.preventDefault();
  }
  incrementMinute(event2) {
    let newMinute = (this.currentMinute ?? 0) + this.stepMinute;
    newMinute = newMinute > 59 ? newMinute - 60 : newMinute;
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour || 0, newMinute, this.currentSecond, this.pm);
    event2.preventDefault();
  }
  decrementMinute(event2) {
    let newMinute = (this.currentMinute ?? 0) - this.stepMinute;
    newMinute = newMinute < 0 ? 60 + newMinute : newMinute;
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour || 0, newMinute, this.currentSecond || 0, this.pm);
    event2.preventDefault();
  }
  incrementSecond(event2) {
    let newSecond = this.currentSecond + this.stepSecond;
    newSecond = newSecond > 59 ? newSecond - 60 : newSecond;
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour || 0, this.currentMinute || 0, newSecond, this.pm);
    event2.preventDefault();
  }
  decrementSecond(event2) {
    let newSecond = this.currentSecond - this.stepSecond;
    newSecond = newSecond < 0 ? 60 + newSecond : newSecond;
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour || 0, this.currentMinute || 0, newSecond, this.pm);
    event2.preventDefault();
  }
  updateTime() {
    let value = this.value;
    if (this.isRangeSelection()) {
      value = this.value[1] || this.value[0];
    }
    if (this.isMultipleSelection()) {
      value = this.value[this.value.length - 1];
    }
    value = value ? new Date(value.getTime()) : /* @__PURE__ */ new Date();
    if (this.hourFormat == "12") {
      if (this.currentHour === 12) value.setHours(this.pm ? 12 : 0);
      else value.setHours(this.pm ? this.currentHour + 12 : this.currentHour);
    } else {
      value.setHours(this.currentHour);
    }
    value.setMinutes(this.currentMinute);
    value.setSeconds(this.currentSecond);
    if (this.isRangeSelection()) {
      if (this.value[1]) value = [this.value[0], value];
      else value = [value, null];
    }
    if (this.isMultipleSelection()) {
      value = [...this.value.slice(0, -1), value];
    }
    this.updateModel(value);
    this.onSelect.emit(value);
    this.updateInputfield();
  }
  toggleAMPM(event2) {
    const newPM = !this.pm;
    this.pm = newPM;
    [this.currentHour, this.currentMinute, this.currentSecond] = this.constrainTime(this.currentHour || 0, this.currentMinute || 0, this.currentSecond || 0, newPM);
    this.updateTime();
    event2.preventDefault();
  }
  onUserInput(event2) {
    if (!this.isKeydown) {
      return;
    }
    this.isKeydown = false;
    let val = event2.target.value;
    try {
      let value = this.parseValueFromString(val);
      if (this.isValidSelection(value)) {
        this.updateModel(value);
        this.updateUI();
      } else if (this.keepInvalid) {
        this.updateModel(value);
      }
    } catch (err) {
      let value = this.keepInvalid ? val : null;
      this.updateModel(value);
    }
    this.onInput.emit(event2);
  }
  isValidSelection(value) {
    if (this.isSingleSelection()) {
      return this.isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false);
    }
    let isValid = value.every((v2) => this.isSelectable(v2.getDate(), v2.getMonth(), v2.getFullYear(), false));
    if (isValid && this.isRangeSelection()) {
      isValid = value.length === 1 || value.length > 1 && value[1] >= value[0];
    }
    return isValid;
  }
  parseValueFromString(text) {
    if (!text || text.trim().length === 0) {
      return null;
    }
    let value;
    if (this.isSingleSelection()) {
      value = this.parseDateTime(text);
    } else if (this.isMultipleSelection()) {
      let tokens = text.split(this.multipleSeparator);
      value = [];
      for (let token of tokens) {
        value.push(this.parseDateTime(token.trim()));
      }
    } else if (this.isRangeSelection()) {
      let tokens = text.split(" " + this.rangeSeparator + " ");
      value = [];
      for (let i = 0; i < tokens.length; i++) {
        value[i] = this.parseDateTime(tokens[i].trim());
      }
    }
    return value;
  }
  parseDateTime(text) {
    let date;
    let parts = text.split(" ");
    if (this.timeOnly) {
      date = /* @__PURE__ */ new Date();
      this.populateTime(date, parts[0], parts[1]);
    } else {
      const dateFormat = this.getDateFormat();
      if (this.showTime) {
        let ampm = this.hourFormat == "12" ? parts.pop() : null;
        let timeString = parts.pop();
        date = this.parseDate(parts.join(" "), dateFormat);
        this.populateTime(date, timeString, ampm);
      } else {
        date = this.parseDate(text, dateFormat);
      }
    }
    return date;
  }
  populateTime(value, timeString, ampm) {
    if (this.hourFormat == "12" && !ampm) {
      throw "Invalid Time";
    }
    this.pm = ampm === "PM" || ampm === "pm";
    let time = this.parseTime(timeString);
    value.setHours(time.hour);
    value.setMinutes(time.minute);
    value.setSeconds(time.second);
  }
  isValidDate(date) {
    return O(date) && s(date);
  }
  updateUI() {
    let propValue = this.value;
    if (Array.isArray(propValue)) {
      propValue = propValue.length === 2 ? propValue[1] : propValue[0];
    }
    let val = this.defaultDate && this.isValidDate(this.defaultDate) && !this.value ? this.defaultDate : propValue && this.isValidDate(propValue) ? propValue : /* @__PURE__ */ new Date();
    this.currentMonth = val.getMonth();
    this.currentYear = val.getFullYear();
    this.createMonths(this.currentMonth, this.currentYear);
    if (this.showTime || this.timeOnly) {
      this.setCurrentHourPM(val.getHours());
      this.currentMinute = val.getMinutes();
      this.currentSecond = this.showSeconds ? val.getSeconds() : 0;
    }
  }
  showOverlay() {
    if (!this.overlayVisible) {
      this.updateUI();
      if (!this.touchUI) {
        this.preventFocus = true;
      }
      this.overlayVisible = true;
    }
  }
  hideOverlay() {
    this.inputfieldViewChild?.nativeElement.focus();
    this.overlayVisible = false;
    this.clearTimePickerTimer();
    if (this.touchUI) {
      this.disableModality();
    }
    this.cd.markForCheck();
  }
  toggle() {
    if (!this.inline) {
      if (!this.overlayVisible) {
        this.showOverlay();
        this.inputfieldViewChild?.nativeElement.focus();
      } else {
        this.hideOverlay();
      }
    }
  }
  onOverlayAnimationStart(event2) {
    switch (event2.toState) {
      case "visible":
      case "visibleTouchUI":
        if (!this.inline) {
          this.overlay = event2.element;
          this.$attrSelector && this.overlay.setAttribute(this.$attrSelector, "");
          const styles = !this.inline ? {
            position: "absolute",
            top: "0"
          } : void 0;
          S(this.overlay, styles || {});
          this.appendOverlay();
          this.updateFocus();
          if (this.autoZIndex) {
            if (this.touchUI) zindexutils.set("modal", this.overlay, this.baseZIndex || this.config.zIndex.modal);
            else zindexutils.set("overlay", this.overlay, this.baseZIndex || this.config.zIndex.overlay);
          }
          this.alignOverlay();
          this.onShow.emit(event2);
        }
        break;
      case "void":
        this.onOverlayHide();
        this.onClose.emit(event2);
        break;
    }
  }
  onOverlayAnimationDone(event2) {
    switch (event2.toState) {
      case "visible":
      case "visibleTouchUI":
        if (!this.inline) {
          this.bindDocumentClickListener();
          this.bindDocumentResizeListener();
          this.bindScrollListener();
        }
        break;
      case "void":
        if (this.autoZIndex) {
          zindexutils.clear(event2.element);
        }
        break;
    }
  }
  appendOverlay() {
    if (this.$appendTo() && this.$appendTo() !== "self") {
      if (this.$appendTo() === "body") this.document.body.appendChild(this.overlay);
      else ut(this.$appendTo(), this.overlay);
    }
  }
  restoreOverlayAppend() {
    if (this.overlay && this.$appendTo() !== "self") {
      this.el.nativeElement.appendChild(this.overlay);
    }
  }
  alignOverlay() {
    if (this.touchUI) {
      this.enableModality(this.overlay);
    } else if (this.overlay) {
      if (this.view === "date") {
        if (!this.overlay.style.width) {
          this.overlay.style.width = v(this.overlay) + "px";
        }
        if (!this.overlay.style.minWidth) {
          this.overlay.style.minWidth = v(this.inputfieldViewChild?.nativeElement) + "px";
        }
      } else {
        if (!this.overlay.style.width) {
          this.overlay.style.width = v(this.inputfieldViewChild?.nativeElement) + "px";
        }
      }
      if (this.$appendTo() && this.$appendTo() !== "self") {
        D(this.overlay, this.inputfieldViewChild?.nativeElement);
      } else {
        I(this.overlay, this.inputfieldViewChild?.nativeElement);
      }
    }
  }
  enableModality(element) {
    if (!this.mask && this.touchUI) {
      this.mask = this.renderer.createElement("div");
      this.renderer.setStyle(this.mask, "zIndex", String(parseInt(element.style.zIndex) - 1));
      let maskStyleClass = "p-overlay-mask p-datepicker-mask p-datepicker-mask-scrollblocker p-overlay-mask p-overlay-mask-enter";
      W(this.mask, maskStyleClass);
      this.maskClickListener = this.renderer.listen(this.mask, "click", (event2) => {
        this.disableModality();
        this.overlayVisible = false;
      });
      this.renderer.appendChild(this.document.body, this.mask);
      blockBodyScroll();
    }
  }
  disableModality() {
    if (this.mask) {
      W(this.mask, "p-overlay-mask-leave");
      if (!this.animationEndListener) {
        this.animationEndListener = this.renderer.listen(this.mask, "animationend", this.destroyMask.bind(this));
      }
    }
  }
  destroyMask() {
    if (!this.mask) {
      return;
    }
    this.renderer.removeChild(this.document.body, this.mask);
    let bodyChildren = this.document.body.children;
    let hasBlockerMasks;
    for (let i = 0; i < bodyChildren.length; i++) {
      let bodyChild = bodyChildren[i];
      if (R(bodyChild, "p-datepicker-mask-scrollblocker")) {
        hasBlockerMasks = true;
        break;
      }
    }
    if (!hasBlockerMasks) {
      unblockBodyScroll();
    }
    this.unbindAnimationEndListener();
    this.unbindMaskClickListener();
    this.mask = null;
  }
  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }
  unbindAnimationEndListener() {
    if (this.animationEndListener && this.mask) {
      this.animationEndListener();
      this.animationEndListener = null;
    }
  }
  getDateFormat() {
    return this.dateFormat || this.getTranslation("dateFormat");
  }
  getFirstDateOfWeek() {
    return this._firstDayOfWeek || this.getTranslation(TranslationKeys.FIRST_DAY_OF_WEEK);
  }
  // Ported from jquery-ui datepicker formatDate
  formatDate(date, format) {
    if (!date) {
      return "";
    }
    let iFormat;
    const lookAhead = (match) => {
      const matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
      if (matches) {
        iFormat++;
      }
      return matches;
    }, formatNumber = (match, value, len) => {
      let num = "" + value;
      if (lookAhead(match)) {
        while (num.length < len) {
          num = "0" + num;
        }
      }
      return num;
    }, formatName = (match, value, shortNames, longNames) => {
      return lookAhead(match) ? longNames[value] : shortNames[value];
    };
    let output = "";
    let literal = false;
    if (date) {
      for (iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
            literal = false;
          } else {
            output += format.charAt(iFormat);
          }
        } else {
          switch (format.charAt(iFormat)) {
            case "d":
              output += formatNumber("d", date.getDate(), 2);
              break;
            case "D":
              output += formatName("D", date.getDay(), this.getTranslation(TranslationKeys.DAY_NAMES_SHORT), this.getTranslation(TranslationKeys.DAY_NAMES));
              break;
            case "o":
              output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 864e5), 3);
              break;
            case "m":
              output += formatNumber("m", date.getMonth() + 1, 2);
              break;
            case "M":
              output += formatName("M", date.getMonth(), this.getTranslation(TranslationKeys.MONTH_NAMES_SHORT), this.getTranslation(TranslationKeys.MONTH_NAMES));
              break;
            case "y":
              output += lookAhead("y") ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? "0" : "") + date.getFullYear() % 100;
              break;
            case "@":
              output += date.getTime();
              break;
            case "!":
              output += date.getTime() * 1e4 + this.ticksTo1970;
              break;
            case "'":
              if (lookAhead("'")) {
                output += "'";
              } else {
                literal = true;
              }
              break;
            default:
              output += format.charAt(iFormat);
          }
        }
      }
    }
    return output;
  }
  formatTime(date) {
    if (!date) {
      return "";
    }
    let output = "";
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (this.hourFormat == "12" && hours > 11 && hours != 12) {
      hours -= 12;
    }
    if (this.hourFormat == "12") {
      output += hours === 0 ? 12 : hours < 10 ? "0" + hours : hours;
    } else {
      output += hours < 10 ? "0" + hours : hours;
    }
    output += ":";
    output += minutes < 10 ? "0" + minutes : minutes;
    if (this.showSeconds) {
      output += ":";
      output += seconds < 10 ? "0" + seconds : seconds;
    }
    if (this.hourFormat == "12") {
      output += date.getHours() > 11 ? " PM" : " AM";
    }
    return output;
  }
  parseTime(value) {
    let tokens = value.split(":");
    let validTokenLength = this.showSeconds ? 3 : 2;
    if (tokens.length !== validTokenLength) {
      throw "Invalid time";
    }
    let h = parseInt(tokens[0]);
    let m = parseInt(tokens[1]);
    let s3 = this.showSeconds ? parseInt(tokens[2]) : null;
    if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || this.hourFormat == "12" && h > 12 || this.showSeconds && (isNaN(s3) || s3 > 59)) {
      throw "Invalid time";
    } else {
      if (this.hourFormat == "12") {
        if (h !== 12 && this.pm) {
          h += 12;
        } else if (!this.pm && h === 12) {
          h -= 12;
        }
      }
      return {
        hour: h,
        minute: m,
        second: s3
      };
    }
  }
  // Ported from jquery-ui datepicker parseDate
  parseDate(value, format) {
    if (format == null || value == null) {
      throw "Invalid arguments";
    }
    value = typeof value === "object" ? value.toString() : value + "";
    if (value === "") {
      return null;
    }
    let iFormat, dim, extra, iValue = 0, shortYearCutoff = typeof this.shortYearCutoff !== "string" ? this.shortYearCutoff : (/* @__PURE__ */ new Date()).getFullYear() % 100 + parseInt(this.shortYearCutoff, 10), year = -1, month = -1, day = -1, doy = -1, literal = false, date, lookAhead = (match) => {
      let matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
      if (matches) {
        iFormat++;
      }
      return matches;
    }, getNumber = (match) => {
      let isDoubled = lookAhead(match), size = match === "@" ? 14 : match === "!" ? 20 : match === "y" && isDoubled ? 4 : match === "o" ? 3 : 2, minSize = match === "y" ? size : 1, digits = new RegExp("^\\d{" + minSize + "," + size + "}"), num = value.substring(iValue).match(digits);
      if (!num) {
        throw "Missing number at position " + iValue;
      }
      iValue += num[0].length;
      return parseInt(num[0], 10);
    }, getName = (match, shortNames, longNames) => {
      let index = -1;
      let arr = lookAhead(match) ? longNames : shortNames;
      let names = [];
      for (let i = 0; i < arr.length; i++) {
        names.push([i, arr[i]]);
      }
      names.sort((a, b2) => {
        return -(a[1].length - b2[1].length);
      });
      for (let i = 0; i < names.length; i++) {
        let name = names[i][1];
        if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
          index = names[i][0];
          iValue += name.length;
          break;
        }
      }
      if (index !== -1) {
        return index + 1;
      } else {
        throw "Unknown name at position " + iValue;
      }
    }, checkLiteral = () => {
      if (value.charAt(iValue) !== format.charAt(iFormat)) {
        throw "Unexpected literal at position " + iValue;
      }
      iValue++;
    };
    if (this.view === "month") {
      day = 1;
    }
    for (iFormat = 0; iFormat < format.length; iFormat++) {
      if (literal) {
        if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
          literal = false;
        } else {
          checkLiteral();
        }
      } else {
        switch (format.charAt(iFormat)) {
          case "d":
            day = getNumber("d");
            break;
          case "D":
            getName("D", this.getTranslation(TranslationKeys.DAY_NAMES_SHORT), this.getTranslation(TranslationKeys.DAY_NAMES));
            break;
          case "o":
            doy = getNumber("o");
            break;
          case "m":
            month = getNumber("m");
            break;
          case "M":
            month = getName("M", this.getTranslation(TranslationKeys.MONTH_NAMES_SHORT), this.getTranslation(TranslationKeys.MONTH_NAMES));
            break;
          case "y":
            year = getNumber("y");
            break;
          case "@":
            date = new Date(getNumber("@"));
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            break;
          case "!":
            date = new Date((getNumber("!") - this.ticksTo1970) / 1e4);
            year = date.getFullYear();
            month = date.getMonth() + 1;
            day = date.getDate();
            break;
          case "'":
            if (lookAhead("'")) {
              checkLiteral();
            } else {
              literal = true;
            }
            break;
          default:
            checkLiteral();
        }
      }
    }
    if (iValue < value.length) {
      extra = value.substr(iValue);
      if (!/^\s+/.test(extra)) {
        throw "Extra/unparsed characters found in date: " + extra;
      }
    }
    if (year === -1) {
      year = (/* @__PURE__ */ new Date()).getFullYear();
    } else if (year < 100) {
      year += (/* @__PURE__ */ new Date()).getFullYear() - (/* @__PURE__ */ new Date()).getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
    }
    if (doy > -1) {
      month = 1;
      day = doy;
      do {
        dim = this.getDaysCountInMonth(year, month - 1);
        if (day <= dim) {
          break;
        }
        month++;
        day -= dim;
      } while (true);
    }
    if (this.view === "year") {
      month = month === -1 ? 1 : month;
      day = day === -1 ? 1 : day;
    }
    date = this.daylightSavingAdjust(new Date(year, month - 1, day));
    if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
      throw "Invalid date";
    }
    return date;
  }
  daylightSavingAdjust(date) {
    if (!date) {
      return null;
    }
    date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
    return date;
  }
  isValidDateForTimeConstraints(selectedDate) {
    if (this.keepInvalid) {
      return true;
    }
    return (!this.minDate || selectedDate >= this.minDate) && (!this.maxDate || selectedDate <= this.maxDate);
  }
  onTodayButtonClick(event2) {
    const date = /* @__PURE__ */ new Date();
    const dateMeta = {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
      otherMonth: date.getMonth() !== this.currentMonth || date.getFullYear() !== this.currentYear,
      today: true,
      selectable: true
    };
    this.createMonths(date.getMonth(), date.getFullYear());
    this.onDateSelect(event2, dateMeta);
    this.onTodayClick.emit(date);
  }
  onClearButtonClick(event2) {
    this.updateModel(null);
    this.updateInputfield();
    this.hideOverlay();
    this.onClearClick.emit(event2);
  }
  createResponsiveStyle() {
    if (this.numberOfMonths > 1 && this.responsiveOptions) {
      if (!this.responsiveStyleElement) {
        this.responsiveStyleElement = this.renderer.createElement("style");
        this.responsiveStyleElement.type = "text/css";
        _t(this.responsiveStyleElement, "nonce", this.config?.csp()?.nonce);
        this.renderer.appendChild(this.document.body, this.responsiveStyleElement);
      }
      let innerHTML = "";
      if (this.responsiveOptions) {
        let responsiveOptions = [...this.responsiveOptions].filter((o) => !!(o.breakpoint && o.numMonths)).sort((o1, o2) => -1 * o1.breakpoint.localeCompare(o2.breakpoint, void 0, {
          numeric: true
        }));
        for (let i = 0; i < responsiveOptions.length; i++) {
          let {
            breakpoint,
            numMonths
          } = responsiveOptions[i];
          let styles = `
                        .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${numMonths}) .p-datepicker-next {
                            display: inline-flex !important;
                        }
                    `;
          for (let j = numMonths; j < this.numberOfMonths; j++) {
            styles += `
                            .p-datepicker[${this.attributeSelector}] .p-datepicker-group:nth-child(${j + 1}) {
                                display: none !important;
                            }
                        `;
          }
          innerHTML += `
                        @media screen and (max-width: ${breakpoint}) {
                            ${styles}
                        }
                    `;
        }
      }
      this.responsiveStyleElement.innerHTML = innerHTML;
      _t(this.responsiveStyleElement, "nonce", this.config?.csp()?.nonce);
    }
  }
  destroyResponsiveStyleElement() {
    if (this.responsiveStyleElement) {
      this.responsiveStyleElement.remove();
      this.responsiveStyleElement = null;
    }
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      this.zone.runOutsideAngular(() => {
        const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
        this.documentClickListener = this.renderer.listen(documentTarget, "mousedown", (event2) => {
          if (this.isOutsideClicked(event2) && this.overlayVisible) {
            this.zone.run(() => {
              this.hideOverlay();
              this.onClickOutside.emit(event2);
              this.cd.markForCheck();
            });
          }
        });
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
    if (!this.documentResizeListener && !this.touchUI) {
      this.documentResizeListener = this.renderer.listen(this.window, "resize", this.onWindowResize.bind(this));
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.el?.nativeElement, () => {
        if (this.overlayVisible) {
          this.hideOverlay();
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
  isOutsideClicked(event2) {
    return !(this.el.nativeElement.isSameNode(event2.target) || this.isNavIconClicked(event2) || this.el.nativeElement.contains(event2.target) || this.overlay && this.overlay.contains(event2.target));
  }
  isNavIconClicked(event2) {
    return R(event2.target, "p-datepicker-prev-button") || R(event2.target, "p-datepicker-prev-icon") || R(event2.target, "p-datepicker-next-button") || R(event2.target, "p-datepicker-next-icon");
  }
  onWindowResize() {
    if (this.overlayVisible && !Yt()) {
      this.hideOverlay();
    }
  }
  onOverlayHide() {
    this.currentView = this.view;
    if (this.mask) {
      this.destroyMask();
    }
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.overlay = null;
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value) {
    this.value = value;
    if (this.value && typeof this.value === "string") {
      try {
        this.value = this.parseValueFromString(this.value);
      } catch {
        if (this.keepInvalid) {
          this.value = value;
        }
      }
    }
    this.updateInputfield();
    this.updateUI();
    this.cd.markForCheck();
  }
  onDestroy() {
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    if (this.overlay && this.autoZIndex) {
      zindexutils.clear(this.overlay);
    }
    this.destroyResponsiveStyleElement();
    this.clearTimePickerTimer();
    this.restoreOverlayAppend();
    this.onOverlayHide();
  }
  static ɵfac = function DatePicker_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DatePicker)(ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(OverlayService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DatePicker,
    selectors: [["p-datePicker"], ["p-datepicker"], ["p-date-picker"]],
    contentQueries: function DatePicker_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c02, 4);
        ɵɵcontentQuery(dirIndex, _c12, 4);
        ɵɵcontentQuery(dirIndex, _c22, 4);
        ɵɵcontentQuery(dirIndex, _c3, 4);
        ɵɵcontentQuery(dirIndex, _c4, 4);
        ɵɵcontentQuery(dirIndex, _c5, 4);
        ɵɵcontentQuery(dirIndex, _c6, 4);
        ɵɵcontentQuery(dirIndex, _c7, 4);
        ɵɵcontentQuery(dirIndex, _c8, 4);
        ɵɵcontentQuery(dirIndex, _c9, 4);
        ɵɵcontentQuery(dirIndex, _c10, 4);
        ɵɵcontentQuery(dirIndex, _c11, 4);
        ɵɵcontentQuery(dirIndex, _c122, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.dateTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.headerTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.footerTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.disabledDateTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.decadeTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.previousIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.nextIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.triggerIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.clearIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.decrementIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.incrementIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.inputIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.buttonBarTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.templates = _t2);
      }
    },
    viewQuery: function DatePicker_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c13, 5);
        ɵɵviewQuery(_c14, 5);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.inputfieldViewChild = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.content = _t2.first);
      }
    },
    hostVars: 4,
    hostBindings: function DatePicker_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleMap(ctx.sx("root"));
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      iconDisplay: "iconDisplay",
      styleClass: "styleClass",
      inputStyle: "inputStyle",
      inputId: "inputId",
      inputStyleClass: "inputStyleClass",
      placeholder: "placeholder",
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      iconAriaLabel: "iconAriaLabel",
      dateFormat: "dateFormat",
      multipleSeparator: "multipleSeparator",
      rangeSeparator: "rangeSeparator",
      inline: [2, "inline", "inline", booleanAttribute],
      showOtherMonths: [2, "showOtherMonths", "showOtherMonths", booleanAttribute],
      selectOtherMonths: [2, "selectOtherMonths", "selectOtherMonths", booleanAttribute],
      showIcon: [2, "showIcon", "showIcon", booleanAttribute],
      icon: "icon",
      readonlyInput: [2, "readonlyInput", "readonlyInput", booleanAttribute],
      shortYearCutoff: "shortYearCutoff",
      hourFormat: "hourFormat",
      timeOnly: [2, "timeOnly", "timeOnly", booleanAttribute],
      stepHour: [2, "stepHour", "stepHour", numberAttribute],
      stepMinute: [2, "stepMinute", "stepMinute", numberAttribute],
      stepSecond: [2, "stepSecond", "stepSecond", numberAttribute],
      showSeconds: [2, "showSeconds", "showSeconds", booleanAttribute],
      showOnFocus: [2, "showOnFocus", "showOnFocus", booleanAttribute],
      showWeek: [2, "showWeek", "showWeek", booleanAttribute],
      startWeekFromFirstDayOfYear: "startWeekFromFirstDayOfYear",
      showClear: [2, "showClear", "showClear", booleanAttribute],
      dataType: "dataType",
      selectionMode: "selectionMode",
      maxDateCount: [2, "maxDateCount", "maxDateCount", numberAttribute],
      showButtonBar: [2, "showButtonBar", "showButtonBar", booleanAttribute],
      todayButtonStyleClass: "todayButtonStyleClass",
      clearButtonStyleClass: "clearButtonStyleClass",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      panelStyleClass: "panelStyleClass",
      panelStyle: "panelStyle",
      keepInvalid: [2, "keepInvalid", "keepInvalid", booleanAttribute],
      hideOnDateTimeSelect: [2, "hideOnDateTimeSelect", "hideOnDateTimeSelect", booleanAttribute],
      touchUI: [2, "touchUI", "touchUI", booleanAttribute],
      timeSeparator: "timeSeparator",
      focusTrap: [2, "focusTrap", "focusTrap", booleanAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      minDate: "minDate",
      maxDate: "maxDate",
      disabledDates: "disabledDates",
      disabledDays: "disabledDays",
      showTime: "showTime",
      responsiveOptions: "responsiveOptions",
      numberOfMonths: "numberOfMonths",
      firstDayOfWeek: "firstDayOfWeek",
      view: "view",
      defaultDate: "defaultDate",
      appendTo: [1, "appendTo"]
    },
    outputs: {
      onFocus: "onFocus",
      onBlur: "onBlur",
      onClose: "onClose",
      onSelect: "onSelect",
      onClear: "onClear",
      onInput: "onInput",
      onTodayClick: "onTodayClick",
      onClearClick: "onClearClick",
      onMonthChange: "onMonthChange",
      onYearChange: "onYearChange",
      onClickOutside: "onClickOutside",
      onShow: "onShow"
    },
    features: [ɵɵProvidersFeature([DATEPICKER_VALUE_ACCESSOR, DatePickerStyle, {
      provide: DATEPICKER_INSTANCE,
      useExisting: _DatePicker
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _DatePicker
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c16,
    decls: 2,
    vars: 2,
    consts: [["inputfield", ""], ["contentWrapper", ""], ["icon", ""], [3, "ngIf"], [3, "ngStyle", "class", "pBind", "click", 4, "ngIf"], ["pInputText", "", "type", "text", "role", "combobox", "aria-autocomplete", "none", "aria-haspopup", "dialog", "autocomplete", "off", 3, "focus", "keydown", "click", "blur", "input", "pSize", "value", "ngStyle", "pAutoFocus", "variant", "fluid", "invalid", "pt"], [4, "ngIf"], ["type", "button", "aria-haspopup", "dialog", "tabindex", "0", 3, "class", "disabled", "pBind", "click", 4, "ngIf"], ["data-p-icon", "times", 3, "class", "pBind", "click", 4, "ngIf"], [3, "class", "pBind", "click", 4, "ngIf"], ["data-p-icon", "times", 3, "click", "pBind"], [3, "click", "pBind"], [4, "ngTemplateOutlet"], ["type", "button", "aria-haspopup", "dialog", "tabindex", "0", 3, "click", "disabled", "pBind"], [3, "ngClass", "pBind", 4, "ngIf"], [3, "ngClass", "pBind"], ["data-p-icon", "calendar", 3, "pBind", 4, "ngIf"], ["data-p-icon", "calendar", 3, "pBind"], [3, "pBind"], ["data-p-icon", "calendar", 3, "class", "pBind", "click", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-p-icon", "calendar", 3, "click", "pBind"], [3, "click", "ngStyle", "pBind"], [3, "class", "pBind", 4, "ngIf"], [3, "class", "pBind", 4, "ngFor", "ngForOf"], ["rounded", "", "variant", "text", "severity", "secondary", "type", "button", 3, "keydown", "onClick", "styleClass", "ngStyle", "ariaLabel", "pt"], ["type", "button", "pRipple", "", 3, "class", "pBind", "click", "keydown", 4, "ngIf"], ["rounded", "", "variant", "text", "severity", "secondary", 3, "keydown", "onClick", "styleClass", "ngStyle", "ariaLabel", "pt"], ["role", "grid", 3, "class", "pBind", 4, "ngIf"], ["data-p-icon", "chevron-left", 4, "ngIf"], ["data-p-icon", "chevron-left"], ["type", "button", "pRipple", "", 3, "click", "keydown", "pBind"], ["data-p-icon", "chevron-right", 4, "ngIf"], ["data-p-icon", "chevron-right"], ["role", "grid", 3, "pBind"], ["scope", "col", 3, "class", "pBind", 4, "ngFor", "ngForOf"], [3, "pBind", 4, "ngFor", "ngForOf"], ["scope", "col", 3, "pBind"], ["draggable", "false", "pRipple", "", 3, "click", "keydown", "ngClass", "pBind"], ["class", "p-hidden-accessible", "aria-live", "polite", 4, "ngIf"], ["aria-live", "polite", 1, "p-hidden-accessible"], ["pRipple", "", 3, "class", "pBind", "click", "keydown", 4, "ngFor", "ngForOf"], ["pRipple", "", 3, "click", "keydown", "pBind"], ["rounded", "", "variant", "text", "severity", "secondary", 3, "keydown", "keydown.enter", "keydown.space", "mousedown", "mouseup", "keyup.enter", "keyup.space", "mouseleave", "styleClass", "pt"], [1, "p-datepicker-separator", 3, "pBind"], ["data-p-icon", "chevron-up", 3, "pBind", 4, "ngIf"], ["data-p-icon", "chevron-up", 3, "pBind"], ["data-p-icon", "chevron-down", 3, "pBind", 4, "ngIf"], ["data-p-icon", "chevron-down", 3, "pBind"], ["text", "", "rounded", "", "severity", "secondary", 3, "keydown", "onClick", "keydown.enter", "styleClass", "pt"], ["text", "", "rounded", "", "severity", "secondary", 3, "keydown", "click", "keydown.enter", "styleClass", "pt"], ["size", "small", "severity", "secondary", "variant", "text", "size", "small", 3, "keydown", "onClick", "styleClass", "label", "ngClass", "pt"]],
    template: function DatePicker_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c15);
        ɵɵtemplate(0, DatePicker_ng_template_0_Template, 5, 27, "ng-template", 3)(1, DatePicker_div_1_Template, 9, 20, "div", 4);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.inline);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.inline || ctx.overlayVisible);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Button, Ripple, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, TimesIcon, CalendarIcon, AutoFocus, InputText, SharedModule, BindModule, Bind],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [state("visibleTouchUI", style({
        transform: "translate(-50%,-50%)",
        opacity: 1
      })), transition("void => visible", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}", style({
        opacity: 1,
        transform: "*"
      }))]), transition("visible => void", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))]), transition("void => visibleTouchUI", [style({
        opacity: 0,
        transform: "translate3d(-50%, -40%, 0) scale(0.9)"
      }), animate("{{showTransitionParams}}")]), transition("visibleTouchUI => void", [animate("{{hideTransitionParams}}", style({
        opacity: 0,
        transform: "translate3d(-50%, -40%, 0) scale(0.9)"
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePicker, [{
    type: Component,
    args: [{
      selector: "p-datePicker, p-datepicker, p-date-picker",
      standalone: true,
      imports: [CommonModule, Button, Ripple, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, TimesIcon, CalendarIcon, AutoFocus, InputText, SharedModule, BindModule],
      hostDirectives: [Bind],
      template: `
        <ng-template [ngIf]="!inline">
            <input
                #inputfield
                pInputText
                [pSize]="size()"
                [attr.size]="inputSize()"
                type="text"
                role="combobox"
                [attr.id]="inputId"
                [attr.name]="name()"
                [attr.aria-required]="required()"
                aria-autocomplete="none"
                aria-haspopup="dialog"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? panelId : null"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-label]="ariaLabel"
                [value]="inputFieldValue"
                (focus)="onInputFocus($event)"
                (keydown)="onInputKeydown($event)"
                (click)="onInputClick()"
                (blur)="onInputBlur($event)"
                [attr.required]="required() ? '' : undefined"
                [attr.readonly]="readonlyInput ? '' : undefined"
                [attr.disabled]="$disabled() ? '' : undefined"
                (input)="onUserInput($event)"
                [ngStyle]="inputStyle"
                [class]="cn(cx('pcInputText'), inputStyleClass)"
                [attr.placeholder]="placeholder"
                [attr.tabindex]="tabindex"
                [attr.inputmode]="touchUI ? 'off' : null"
                autocomplete="off"
                [pAutoFocus]="autofocus"
                [variant]="$variant()"
                [fluid]="hasFluid"
                [invalid]="invalid()"
                [pt]="ptm('pcInputText')"
            />
            <ng-container *ngIf="showClear && !$disabled() && inputfieldViewChild?.nativeElement?.value">
                <svg data-p-icon="times" *ngIf="!clearIconTemplate && !_clearIconTemplate" [class]="cx('clearIcon')" [pBind]="ptm('inputIcon')" (click)="clear()" />
                <span *ngIf="clearIconTemplate || _clearIconTemplate" [class]="cx('clearIcon')" [pBind]="ptm('inputIcon')" (click)="clear()">
                    <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
                </span>
            </ng-container>
            <button
                type="button"
                [attr.aria-label]="iconButtonAriaLabel"
                aria-haspopup="dialog"
                [attr.aria-expanded]="overlayVisible ?? false"
                [attr.aria-controls]="overlayVisible ? panelId : null"
                *ngIf="showIcon && iconDisplay === 'button'"
                (click)="onButtonClick($event, inputfield)"
                [class]="cx('dropdown')"
                [disabled]="$disabled()"
                tabindex="0"
                [pBind]="ptm('dropdown')"
            >
                <span *ngIf="icon" [ngClass]="icon" [pBind]="ptm('dropdownIcon')"></span>
                <ng-container *ngIf="!icon">
                    <svg data-p-icon="calendar" *ngIf="!triggerIconTemplate && !_triggerIconTemplate" [pBind]="ptm('dropdownIcon')" />
                    <ng-template *ngTemplateOutlet="triggerIconTemplate || _triggerIconTemplate"></ng-template>
                </ng-container>
            </button>
            <ng-container *ngIf="iconDisplay === 'input' && showIcon">
                <span [class]="cx('inputIconContainer')" [pBind]="ptm('inputIconContainer')">
                    <svg data-p-icon="calendar" (click)="onButtonClick($event)" *ngIf="!inputIconTemplate && !_inputIconTemplate" [class]="cx('inputIcon')" [pBind]="ptm('inputIcon')" />

                    <ng-container *ngTemplateOutlet="inputIconTemplate || _inputIconTemplate; context: { clickCallBack: onButtonClick.bind(this) }"></ng-container>
                </span>
            </ng-container>
        </ng-template>
        <div
            #contentWrapper
            [attr.id]="panelId"
            [ngStyle]="panelStyle"
            [class]="cn(cx('panel'), panelStyleClass)"
            [@overlayAnimation]="{
                value: 'visible',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            [attr.aria-label]="getTranslation('chooseDate')"
            [attr.role]="inline ? null : 'dialog'"
            [attr.aria-modal]="inline ? null : 'true'"
            [@.disabled]="inline === true"
            (@overlayAnimation.start)="onOverlayAnimationStart($event)"
            (@overlayAnimation.done)="onOverlayAnimationDone($event)"
            (click)="onOverlayClick($event)"
            *ngIf="inline || overlayVisible"
            [pBind]="ptm('panel')"
        >
            <ng-content select="p-header"></ng-content>
            <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
            <ng-container *ngIf="!timeOnly">
                <div [class]="cx('calendarContainer')" [pBind]="ptm('calendarContainer')">
                    <div [class]="cx('calendar')" *ngFor="let month of months; let i = index" [pBind]="ptm('calendar')">
                        <div [class]="cx('header')" [pBind]="ptm('header')">
                            <p-button
                                rounded
                                variant="text"
                                severity="secondary"
                                (keydown)="onContainerButtonKeydown($event)"
                                [styleClass]="cx('pcPrevButton')"
                                (onClick)="onPrevButtonClick($event)"
                                [ngStyle]="{ visibility: i === 0 ? 'visible' : 'hidden' }"
                                type="button"
                                [ariaLabel]="prevIconAriaLabel"
                                [pt]="ptm('pcPrevButton')"
                                [attr.data-pc-group-section]="'navigator'"
                            >
                                <ng-template #icon>
                                    <svg data-p-icon="chevron-left" *ngIf="!previousIconTemplate && !_previousIconTemplate" />
                                    <span *ngIf="previousIconTemplate || _previousIconTemplate">
                                        <ng-template *ngTemplateOutlet="previousIconTemplate || _previousIconTemplate"></ng-template>
                                    </span>
                                </ng-template>
                            </p-button>
                            <div [class]="cx('title')" [pBind]="ptm('title')">
                                <button
                                    *ngIf="currentView === 'date'"
                                    type="button"
                                    (click)="switchToMonthView($event)"
                                    (keydown)="onContainerButtonKeydown($event)"
                                    [class]="cx('selectMonth')"
                                    [attr.disabled]="switchViewButtonDisabled() ? '' : undefined"
                                    [attr.aria-label]="this.getTranslation('chooseMonth')"
                                    pRipple
                                    [pBind]="ptm('selectMonth')"
                                    [attr.data-pc-group-section]="'navigator'"
                                >
                                    {{ getMonthName(month.month) }}
                                </button>
                                <button
                                    *ngIf="currentView !== 'year'"
                                    type="button"
                                    (click)="switchToYearView($event)"
                                    (keydown)="onContainerButtonKeydown($event)"
                                    [class]="cx('selectYear')"
                                    [attr.disabled]="switchViewButtonDisabled() ? '' : undefined"
                                    [attr.aria-label]="getTranslation('chooseYear')"
                                    pRipple
                                    [pBind]="ptm('selectYear')"
                                    [attr.data-pc-group-section]="'navigator'"
                                >
                                    {{ getYear(month) }}
                                </button>
                                <span [class]="cx('decade')" *ngIf="currentView === 'year'" [pBind]="ptm('decade')">
                                    <ng-container *ngIf="!decadeTemplate && !_decadeTemplate">{{ yearPickerValues()[0] }} - {{ yearPickerValues()[yearPickerValues().length - 1] }}</ng-container>
                                    <ng-container *ngTemplateOutlet="decadeTemplate || _decadeTemplate; context: { $implicit: yearPickerValues }"></ng-container>
                                </span>
                            </div>
                            <p-button
                                rounded
                                variant="text"
                                severity="secondary"
                                (keydown)="onContainerButtonKeydown($event)"
                                [styleClass]="cx('pcNextButton')"
                                (onClick)="onNextButtonClick($event)"
                                [ngStyle]="{ visibility: i === months.length - 1 ? 'visible' : 'hidden' }"
                                [ariaLabel]="nextIconAriaLabel"
                                [pt]="ptm('pcNextButton')"
                                [attr.data-pc-group-section]="'navigator'"
                            >
                                <ng-template #icon>
                                    <svg data-p-icon="chevron-right" *ngIf="!nextIconTemplate && !_nextIconTemplate" />
                                    <ng-container *ngIf="nextIconTemplate || _nextIconTemplate">
                                        <ng-template *ngTemplateOutlet="nextIconTemplate || _nextIconTemplate"></ng-template>
                                    </ng-container>
                                </ng-template>
                            </p-button>
                        </div>
                        <table [class]="cx('dayView')" role="grid" *ngIf="currentView === 'date'" [pBind]="ptm('table')">
                            <thead [pBind]="ptm('tableHeader')">
                                <tr [pBind]="ptm('tableHeaderRow')">
                                    <th *ngIf="showWeek" [class]="cx('weekHeader')" [pBind]="ptm('weekHeader')">
                                        <span [pBind]="ptm('weekHeaderLabel')">{{ getTranslation('weekHeader') }}</span>
                                    </th>
                                    <th [class]="cx('weekDayCell')" scope="col" *ngFor="let weekDay of weekDays; let begin = first; let end = last" [pBind]="ptm('weekDayCell')">
                                        <span [class]="cx('weekDay')" [pBind]="ptm('weekDay')">{{ weekDay }}</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody [pBind]="ptm('tableBody')">
                                <tr *ngFor="let week of month.dates; let j = index" [pBind]="ptm('tableBodyRow')">
                                    <td *ngIf="showWeek" [class]="cx('weekNumber')" [pBind]="ptm('weekNumber')">
                                        <span [class]="cx('weekLabelContainer')" [pBind]="ptm('weekLabelContainer')">
                                            {{ month.weekNumbers[j] }}
                                        </span>
                                    </td>
                                    <td *ngFor="let date of week" [attr.aria-label]="date.day" [class]="cx('dayCell', { date })" [pBind]="ptm('dayCell')">
                                        <ng-container *ngIf="date.otherMonth ? showOtherMonths : true">
                                            <span
                                                [ngClass]="dayClass(date)"
                                                (click)="onDateSelect($event, date)"
                                                draggable="false"
                                                [attr.data-date]="formatDateKey(formatDateMetaToDate(date))"
                                                (keydown)="onDateCellKeydown($event, date, i)"
                                                pRipple
                                                [pBind]="ptm('day')"
                                            >
                                                <ng-container *ngIf="!dateTemplate && !_dateTemplate && (date.selectable || (!disabledDateTemplate && !_disabledDateTemplate))">{{ date.day }}</ng-container>
                                                <ng-container *ngIf="date.selectable || (!disabledDateTemplate && !_disabledDateTemplate)">
                                                    <ng-container *ngTemplateOutlet="dateTemplate || _dateTemplate; context: { $implicit: date }"></ng-container>
                                                </ng-container>
                                                <ng-container *ngIf="!date.selectable">
                                                    <ng-container *ngTemplateOutlet="disabledDateTemplate || _disabledDateTemplate; context: { $implicit: date }"></ng-container>
                                                </ng-container>
                                            </span>
                                            <div *ngIf="isSelected(date)" class="p-hidden-accessible" aria-live="polite">
                                                {{ date.day }}
                                            </div>
                                        </ng-container>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div [class]="cx('monthView')" *ngIf="currentView === 'month'" [pBind]="ptm('monthView')">
                    <span *ngFor="let m of monthPickerValues(); let i = index" (click)="onMonthSelect($event, i)" (keydown)="onMonthCellKeydown($event, i)" [class]="cx('month', { month: m, index: i })" pRipple [pBind]="ptm('month')">
                        {{ m }}
                        <div *ngIf="isMonthSelected(i)" class="p-hidden-accessible" aria-live="polite">
                            {{ m }}
                        </div>
                    </span>
                </div>
                <div [class]="cx('yearView')" *ngIf="currentView === 'year'" [pBind]="ptm('yearView')">
                    <span *ngFor="let y of yearPickerValues()" (click)="onYearSelect($event, y)" (keydown)="onYearCellKeydown($event, y)" [class]="cx('year', { year: y })" pRipple [pBind]="ptm('year')">
                        {{ y }}
                        <div *ngIf="isYearSelected(y)" class="p-hidden-accessible" aria-live="polite">
                            {{ y }}
                        </div>
                    </span>
                </div>
            </ng-container>
            <div [class]="cx('timePicker')" *ngIf="(showTime || timeOnly) && currentView === 'date'" [pBind]="ptm('timePicker')">
                <div [class]="cx('hourPicker')" [pBind]="ptm('hourPicker')">
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcIncrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="incrementHour($event)"
                        (keydown.space)="incrementHour($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 0, 1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('nextHour')"
                        [pt]="ptm('pcIncrementButton')"
                        [attr.data-pc-group-section]="'timepickerbutton'"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-up" *ngIf="!incrementIconTemplate && !_incrementIconTemplate" [pBind]="ptm('pcIncrementButton')['icon']" />
                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <span [pBind]="ptm('hour')"><ng-container *ngIf="currentHour < 10">0</ng-container>{{ currentHour }}</span>
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcDecrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="decrementHour($event)"
                        (keydown.space)="decrementHour($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 0, -1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('prevHour')"
                        [pt]="ptm('pcDecrementButton')"
                        [attr.data-pc-group-section]="'timepickerbutton'"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-down" *ngIf="!decrementIconTemplate && !_decrementIconTemplate" [pBind]="ptm('pcDecrementButton')['icon']" />
                            <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                </div>
                <div class="p-datepicker-separator" [pBind]="ptm('separatorContainer')">
                    <span [pBind]="ptm('separator')">{{ timeSeparator }}</span>
                </div>
                <div [class]="cx('minutePicker')" [pBind]="ptm('minutePicker')">
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcIncrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="incrementMinute($event)"
                        (keydown.space)="incrementMinute($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 1, 1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('nextMinute')"
                        [pt]="ptm('pcIncrementButton')"
                        [attr.data-pc-group-section]="'timepickerbutton'"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-up" *ngIf="!incrementIconTemplate && !_incrementIconTemplate" [pBind]="ptm('pcIncrementButton')['icon']" />
                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <span [pBind]="ptm('minute')"><ng-container *ngIf="currentMinute < 10">0</ng-container>{{ currentMinute }}</span>
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcDecrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="decrementMinute($event)"
                        (keydown.space)="decrementMinute($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 1, -1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('prevMinute')"
                        [pt]="ptm('pcDecrementButton')"
                        [attr.data-pc-group-section]="'timepickerbutton'"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-down" *ngIf="!decrementIconTemplate && !_decrementIconTemplate" [pBind]="ptm('pcDecrementButton')['icon']" />
                            <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                </div>
                <div [class]="cx('separator')" *ngIf="showSeconds" [pBind]="ptm('separatorContainer')">
                    <span [pBind]="ptm('separator')">{{ timeSeparator }}</span>
                </div>
                <div [class]="cx('secondPicker')" *ngIf="showSeconds" [pBind]="ptm('secondPicker')">
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcIncrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="incrementSecond($event)"
                        (keydown.space)="incrementSecond($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 2, 1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('nextSecond')"
                        [pt]="ptm('pcIncrementButton')"
                        [attr.data-pc-group-section]="'timepickerbutton'"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-up" *ngIf="!incrementIconTemplate && !_incrementIconTemplate" [pBind]="ptm('pcIncrementButton')['icon']" />
                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <span [pBind]="ptm('second')"><ng-container *ngIf="currentSecond < 10">0</ng-container>{{ currentSecond }}</span>
                    <p-button
                        rounded
                        variant="text"
                        severity="secondary"
                        [styleClass]="cx('pcDecrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (keydown.enter)="decrementSecond($event)"
                        (keydown.space)="decrementSecond($event)"
                        (mousedown)="onTimePickerElementMouseDown($event, 2, -1)"
                        (mouseup)="onTimePickerElementMouseUp($event)"
                        (keyup.enter)="onTimePickerElementMouseUp($event)"
                        (keyup.space)="onTimePickerElementMouseUp($event)"
                        (mouseleave)="onTimePickerElementMouseLeave()"
                        [attr.aria-label]="getTranslation('prevSecond')"
                        [pt]="ptm('pcDecrementButton')"
                        [attr.data-pc-group-section]="'timepickerbutton'"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-down" *ngIf="!decrementIconTemplate && !_decrementIconTemplate" [pBind]="ptm('pcDecrementButton')['icon']" />
                            <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                </div>
                <div [class]="cx('separator')" *ngIf="hourFormat == '12'" [pBind]="ptm('separatorContainer')">
                    <span [pBind]="ptm('separator')">{{ timeSeparator }}</span>
                </div>
                <div [class]="cx('ampmPicker')" *ngIf="hourFormat == '12'" [pBind]="ptm('ampmPicker')">
                    <p-button
                        text
                        rounded
                        severity="secondary"
                        [styleClass]="cx('pcIncrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (onClick)="toggleAMPM($event)"
                        (keydown.enter)="toggleAMPM($event)"
                        [attr.aria-label]="getTranslation('am')"
                        [pt]="ptm('pcIncrementButton')"
                        [attr.data-pc-group-section]="'timepickerbutton'"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-up" *ngIf="!incrementIconTemplate && !_incrementIconTemplate" [pBind]="ptm('pcIncrementButton')['icon']" />
                            <ng-template *ngTemplateOutlet="incrementIconTemplate || _incrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                    <span [pBind]="ptm('ampm')">{{ pm ? 'PM' : 'AM' }}</span>
                    <p-button
                        text
                        rounded
                        severity="secondary"
                        [styleClass]="cx('pcDecrementButton')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (click)="toggleAMPM($event)"
                        (keydown.enter)="toggleAMPM($event)"
                        [attr.aria-label]="getTranslation('pm')"
                        [pt]="ptm('pcDecrementButton')"
                        [attr.data-pc-group-section]="'timepickerbutton'"
                    >
                        <ng-template #icon>
                            <svg data-p-icon="chevron-down" *ngIf="!decrementIconTemplate && !_decrementIconTemplate" [pBind]="ptm('pcDecrementButton')['icon']" />
                            <ng-template *ngTemplateOutlet="decrementIconTemplate || _decrementIconTemplate"></ng-template>
                        </ng-template>
                    </p-button>
                </div>
            </div>
            <div [class]="cx('buttonbar')" *ngIf="showButtonBar" [pBind]="ptm('buttonbar')">
                @if (buttonBarTemplate || _buttonBarTemplate) {
                    <ng-container *ngTemplateOutlet="buttonBarTemplate || _buttonBarTemplate; context: { todayCallback: onTodayButtonClick.bind(this), clearCallback: onClearButtonClick.bind(this) }"></ng-container>
                } @else {
                    <p-button
                        size="small"
                        [styleClass]="cx('pcTodayButton')"
                        [label]="getTranslation('today')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (onClick)="onTodayButtonClick($event)"
                        [ngClass]="todayButtonStyleClass"
                        severity="secondary"
                        variant="text"
                        size="small"
                        [pt]="ptm('pcTodayButton')"
                        [attr.data-pc-group-section]="'button'"
                    />
                    <p-button
                        size="small"
                        [styleClass]="cx('pcClearButton')"
                        [label]="getTranslation('clear')"
                        (keydown)="onContainerButtonKeydown($event)"
                        (onClick)="onClearButtonClick($event)"
                        [ngClass]="clearButtonStyleClass"
                        severity="secondary"
                        variant="text"
                        size="small"
                        [pt]="ptm('pcClearButton')"
                        [attr.data-pc-group-section]="'button'"
                    />
                }
            </div>
            <ng-content select="p-footer"></ng-content>
            <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
        </div>
    `,
      animations: [trigger("overlayAnimation", [state("visibleTouchUI", style({
        transform: "translate(-50%,-50%)",
        opacity: 1
      })), transition("void => visible", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}", style({
        opacity: 1,
        transform: "*"
      }))]), transition("visible => void", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))]), transition("void => visibleTouchUI", [style({
        opacity: 0,
        transform: "translate3d(-50%, -40%, 0) scale(0.9)"
      }), animate("{{showTransitionParams}}")]), transition("visibleTouchUI => void", [animate("{{hideTransitionParams}}", style({
        opacity: 0,
        transform: "translate3d(-50%, -40%, 0) scale(0.9)"
      }))])])],
      providers: [DATEPICKER_VALUE_ACCESSOR, DatePickerStyle, {
        provide: DATEPICKER_INSTANCE,
        useExisting: DatePicker
      }, {
        provide: PARENT_INSTANCE,
        useExisting: DatePicker
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[style]": "sx('root')"
      }
    }]
  }], () => [{
    type: NgZone
  }, {
    type: OverlayService
  }], {
    iconDisplay: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    inputStyleClass: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    iconAriaLabel: [{
      type: Input
    }],
    dateFormat: [{
      type: Input
    }],
    multipleSeparator: [{
      type: Input
    }],
    rangeSeparator: [{
      type: Input
    }],
    inline: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showOtherMonths: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectOtherMonths: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    icon: [{
      type: Input
    }],
    readonlyInput: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    shortYearCutoff: [{
      type: Input
    }],
    hourFormat: [{
      type: Input
    }],
    timeOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stepHour: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    stepMinute: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    stepSecond: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showSeconds: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showOnFocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showWeek: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    startWeekFromFirstDayOfYear: [{
      type: Input
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dataType: [{
      type: Input
    }],
    selectionMode: [{
      type: Input
    }],
    maxDateCount: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showButtonBar: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    todayButtonStyleClass: [{
      type: Input
    }],
    clearButtonStyleClass: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    panelStyleClass: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    keepInvalid: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideOnDateTimeSelect: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    touchUI: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    timeSeparator: [{
      type: Input
    }],
    focusTrap: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    minDate: [{
      type: Input
    }],
    maxDate: [{
      type: Input
    }],
    disabledDates: [{
      type: Input
    }],
    disabledDays: [{
      type: Input
    }],
    showTime: [{
      type: Input
    }],
    responsiveOptions: [{
      type: Input
    }],
    numberOfMonths: [{
      type: Input
    }],
    firstDayOfWeek: [{
      type: Input
    }],
    view: [{
      type: Input
    }],
    defaultDate: [{
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
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClose: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onInput: [{
      type: Output
    }],
    onTodayClick: [{
      type: Output
    }],
    onClearClick: [{
      type: Output
    }],
    onMonthChange: [{
      type: Output
    }],
    onYearChange: [{
      type: Output
    }],
    onClickOutside: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    inputfieldViewChild: [{
      type: ViewChild,
      args: ["inputfield", {
        static: false
      }]
    }],
    content: [{
      type: ViewChild,
      args: ["contentWrapper", {
        static: false
      }]
    }],
    dateTemplate: [{
      type: ContentChild,
      args: ["date", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    disabledDateTemplate: [{
      type: ContentChild,
      args: ["disabledDate", {
        descendants: false
      }]
    }],
    decadeTemplate: [{
      type: ContentChild,
      args: ["decade", {
        descendants: false
      }]
    }],
    previousIconTemplate: [{
      type: ContentChild,
      args: ["previousicon", {
        descendants: false
      }]
    }],
    nextIconTemplate: [{
      type: ContentChild,
      args: ["nexticon", {
        descendants: false
      }]
    }],
    triggerIconTemplate: [{
      type: ContentChild,
      args: ["triggericon", {
        descendants: false
      }]
    }],
    clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon", {
        descendants: false
      }]
    }],
    decrementIconTemplate: [{
      type: ContentChild,
      args: ["decrementicon", {
        descendants: false
      }]
    }],
    incrementIconTemplate: [{
      type: ContentChild,
      args: ["incrementicon", {
        descendants: false
      }]
    }],
    inputIconTemplate: [{
      type: ContentChild,
      args: ["inputicon", {
        descendants: false
      }]
    }],
    buttonBarTemplate: [{
      type: ContentChild,
      args: ["buttonbar", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var DatePickerModule = class _DatePickerModule {
  static ɵfac = function DatePickerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DatePickerModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _DatePickerModule,
    imports: [DatePicker, SharedModule],
    exports: [DatePicker, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [DatePicker, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DatePickerModule, [{
    type: NgModule,
    args: [{
      imports: [DatePicker, SharedModule],
      exports: [DatePicker, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-filterfill.mjs
var _c03 = ["data-p-icon", "filter-fill"];
var FilterFillIcon = class _FilterFillIcon extends BaseIcon {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵFilterFillIcon_BaseFactory;
    return function FilterFillIcon_Factory(__ngFactoryType__) {
      return (ɵFilterFillIcon_BaseFactory || (ɵFilterFillIcon_BaseFactory = ɵɵgetInheritedFactory(_FilterFillIcon)))(__ngFactoryType__ || _FilterFillIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _FilterFillIcon,
    selectors: [["", "data-p-icon", "filter-fill"]],
    features: [ɵɵInheritDefinitionFeature],
    attrs: _c03,
    decls: 1,
    vars: 0,
    consts: [["d", "M13.7274 0.33847C13.6228 0.130941 13.4095 0 13.1764 0H0.82351C0.590451 0 0.377157 0.130941 0.272568 0.33847C0.167157 0.545999 0.187746 0.795529 0.325275 0.98247L4.73527 6.99588V13.3824C4.73527 13.7233 5.01198 14 5.35292 14H8.64704C8.98798 14 9.26469 13.7233 9.26469 13.3824V6.99588L13.6747 0.98247C13.8122 0.795529 13.8328 0.545999 13.7274 0.33847Z", "fill", "currentColor"]],
    template: function FilterFillIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵdomElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterFillIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="filter-fill"]',
      standalone: true,
      template: `
        <svg:path
            d="M13.7274 0.33847C13.6228 0.130941 13.4095 0 13.1764 0H0.82351C0.590451 0 0.377157 0.130941 0.272568 0.33847C0.167157 0.545999 0.187746 0.795529 0.325275 0.98247L4.73527 6.99588V13.3824C4.73527 13.7233 5.01198 14 5.35292 14H8.64704C8.98798 14 9.26469 13.7233 9.26469 13.3824V6.99588L13.6747 0.98247C13.8122 0.795529 13.8328 0.545999 13.7274 0.33847Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/inputnumber/index.mjs
var style7 = "\n    .p-inputnumber {\n        display: inline-flex;\n        position: relative;\n    }\n\n    .p-inputnumber-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex: 0 0 auto;\n        cursor: pointer;\n        background: dt('inputnumber.button.background');\n        color: dt('inputnumber.button.color');\n        width: dt('inputnumber.button.width');\n        transition:\n            background dt('inputnumber.transition.duration'),\n            color dt('inputnumber.transition.duration'),\n            border-color dt('inputnumber.transition.duration'),\n            outline-color dt('inputnumber.transition.duration');\n    }\n\n    .p-inputnumber-button:disabled {\n        cursor: auto;\n    }\n\n    .p-inputnumber-button:not(:disabled):hover {\n        background: dt('inputnumber.button.hover.background');\n        color: dt('inputnumber.button.hover.color');\n    }\n\n    .p-inputnumber-button:not(:disabled):active {\n        background: dt('inputnumber.button.active.background');\n        color: dt('inputnumber.button.active.color');\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-button {\n        position: relative;\n        flex: 1 1 auto;\n        border: 0 none;\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-button-group {\n        display: flex;\n        flex-direction: column;\n        position: absolute;\n        inset-block-start: 1px;\n        inset-inline-end: 1px;\n        height: calc(100% - 2px);\n        z-index: 1;\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-increment-button {\n        padding: 0;\n        border-start-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-decrement-button {\n        padding: 0;\n        border-end-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-input {\n        padding-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-button {\n        border: 1px solid dt('inputnumber.button.border.color');\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-button:hover {\n        border-color: dt('inputnumber.button.hover.border.color');\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-button:active {\n        border-color: dt('inputnumber.button.active.border.color');\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-increment-button {\n        order: 3;\n        border-start-end-radius: dt('inputnumber.button.border.radius');\n        border-end-end-radius: dt('inputnumber.button.border.radius');\n        border-inline-start: 0 none;\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-input {\n        order: 2;\n        border-radius: 0;\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-decrement-button {\n        order: 1;\n        border-start-start-radius: dt('inputnumber.button.border.radius');\n        border-end-start-radius: dt('inputnumber.button.border.radius');\n        border-inline-end: 0 none;\n    }\n\n    .p-floatlabel:has(.p-inputnumber-horizontal) label {\n        margin-inline-start: dt('inputnumber.button.width');\n    }\n\n    .p-inputnumber-vertical {\n        flex-direction: column;\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-button {\n        border: 1px solid dt('inputnumber.button.border.color');\n        padding: dt('inputnumber.button.vertical.padding');\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-button:hover {\n        border-color: dt('inputnumber.button.hover.border.color');\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-button:active {\n        border-color: dt('inputnumber.button.active.border.color');\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-increment-button {\n        order: 1;\n        border-start-start-radius: dt('inputnumber.button.border.radius');\n        border-start-end-radius: dt('inputnumber.button.border.radius');\n        width: 100%;\n        border-block-end: 0 none;\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-input {\n        order: 2;\n        border-radius: 0;\n        text-align: center;\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-decrement-button {\n        order: 3;\n        border-end-start-radius: dt('inputnumber.button.border.radius');\n        border-end-end-radius: dt('inputnumber.button.border.radius');\n        width: 100%;\n        border-block-start: 0 none;\n    }\n\n    .p-inputnumber-input {\n        flex: 1 1 auto;\n    }\n\n    .p-inputnumber-fluid {\n        width: 100%;\n    }\n\n    .p-inputnumber-fluid .p-inputnumber-input {\n        width: 1%;\n    }\n\n    .p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {\n        width: 100%;\n    }\n\n    .p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {\n        font-size: dt('form.field.sm.font.size');\n        width: dt('form.field.sm.font.size');\n        height: dt('form.field.sm.font.size');\n    }\n\n    .p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {\n        font-size: dt('form.field.lg.font.size');\n        width: dt('form.field.lg.font.size');\n        height: dt('form.field.lg.font.size');\n    }\n\n    .p-inputnumber-clear-icon {\n        position: absolute;\n        top: 50%;\n        margin-top: -0.5rem;\n        cursor: pointer;\n        inset-inline-end: dt('form.field.padding.x');\n        color: dt('form.field.icon.color');\n    }\n\n    .p-inputnumber:has(.p-inputnumber-clear-icon) .p-inputnumber-input {\n        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-clear-icon {\n        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));\n    }\n\n    .p-inputnumber-stacked:has(.p-inputnumber-clear-icon) .p-inputnumber-input {\n        padding-inline-end: calc(dt('inputnumber.button.width') + (dt('form.field.padding.x') * 2) + dt('icon.size'));\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-clear-icon {\n        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));\n    }\n";

// node_modules/primeng/fesm2022/primeng-inputnumber.mjs
var _c04 = ["clearicon"];
var _c110 = ["incrementbuttonicon"];
var _c26 = ["decrementbuttonicon"];
var _c32 = ["input"];
function InputNumber_ng_container_2__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 7);
    ɵɵlistener("click", function InputNumber_ng_container_2__svg_svg_1_Template_svg_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.clear());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.cx("clearIcon"));
    ɵɵproperty("pBind", ctx_r2.ptm("clearIcon"));
  }
}
function InputNumber_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function InputNumber_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, InputNumber_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 8);
    ɵɵlistener("click", function InputNumber_ng_container_2_span_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.clear());
    });
    ɵɵtemplate(1, InputNumber_ng_container_2_span_2_1_Template, 1, 0, null, 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.cx("clearIcon"));
    ɵɵproperty("pBind", ctx_r2.ptm("clearIcon"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.clearIconTemplate || ctx_r2._clearIconTemplate);
  }
}
function InputNumber_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, InputNumber_ng_container_2__svg_svg_1_Template, 1, 3, "svg", 5)(2, InputNumber_ng_container_2_span_2_Template, 2, 4, "span", 6);
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
function InputNumber_span_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("pBind", ctx_r2.ptm("incrementButtonIcon"))("ngClass", ctx_r2.incrementButtonIcon);
  }
}
function InputNumber_span_3_ng_container_3__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 15);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("pBind", ctx_r2.ptm("incrementButtonIcon"));
  }
}
function InputNumber_span_3_ng_container_3_2_ng_template_0_Template(rf, ctx) {
}
function InputNumber_span_3_ng_container_3_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, InputNumber_span_3_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_span_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, InputNumber_span_3_ng_container_3__svg_svg_1_Template, 1, 1, "svg", 14)(2, InputNumber_span_3_ng_container_3_2_Template, 1, 0, null, 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.incrementButtonIconTemplate && !ctx_r2._incrementButtonIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.incrementButtonIconTemplate || ctx_r2._incrementButtonIconTemplate);
  }
}
function InputNumber_span_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("pBind", ctx_r2.ptm("decrementButtonIcon"))("ngClass", ctx_r2.decrementButtonIcon);
  }
}
function InputNumber_span_3_ng_container_6__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 17);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("pBind", ctx_r2.ptm("decrementButtonIcon"));
  }
}
function InputNumber_span_3_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function InputNumber_span_3_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, InputNumber_span_3_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_span_3_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, InputNumber_span_3_ng_container_6__svg_svg_1_Template, 1, 1, "svg", 16)(2, InputNumber_span_3_ng_container_6_2_Template, 1, 0, null, 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.decrementButtonIconTemplate && !ctx_r2._decrementButtonIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.decrementButtonIconTemplate || ctx_r2._decrementButtonIconTemplate);
  }
}
function InputNumber_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 10)(1, "button", 11);
    ɵɵlistener("mousedown", function InputNumber_span_3_Template_button_mousedown_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onUpButtonMouseDown($event));
    })("mouseup", function InputNumber_span_3_Template_button_mouseup_1_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onUpButtonMouseUp());
    })("mouseleave", function InputNumber_span_3_Template_button_mouseleave_1_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onUpButtonMouseLeave());
    })("keydown", function InputNumber_span_3_Template_button_keydown_1_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onUpButtonKeyDown($event));
    })("keyup", function InputNumber_span_3_Template_button_keyup_1_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onUpButtonKeyUp());
    });
    ɵɵtemplate(2, InputNumber_span_3_span_2_Template, 1, 2, "span", 12)(3, InputNumber_span_3_ng_container_3_Template, 3, 2, "ng-container", 2);
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 11);
    ɵɵlistener("mousedown", function InputNumber_span_3_Template_button_mousedown_4_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDownButtonMouseDown($event));
    })("mouseup", function InputNumber_span_3_Template_button_mouseup_4_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDownButtonMouseUp());
    })("mouseleave", function InputNumber_span_3_Template_button_mouseleave_4_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDownButtonMouseLeave());
    })("keydown", function InputNumber_span_3_Template_button_keydown_4_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDownButtonKeyDown($event));
    })("keyup", function InputNumber_span_3_Template_button_keyup_4_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDownButtonKeyUp());
    });
    ɵɵtemplate(5, InputNumber_span_3_span_5_Template, 1, 2, "span", 12)(6, InputNumber_span_3_ng_container_6_Template, 3, 2, "ng-container", 2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("buttonGroup"));
    ɵɵproperty("pBind", ctx_r2.ptm("buttonGroup"));
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("incrementButton"), ctx_r2.incrementButtonClass));
    ɵɵproperty("pBind", ctx_r2.ptm("incrementButton"));
    ɵɵattribute("disabled", ctx_r2.$disabled() ? "" : void 0)("aria-hidden", true);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.incrementButtonIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.incrementButtonIcon);
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("decrementButton"), ctx_r2.decrementButtonClass));
    ɵɵproperty("pBind", ctx_r2.ptm("decrementButton"));
    ɵɵattribute("disabled", ctx_r2.$disabled() ? "" : void 0)("aria-hidden", true);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.decrementButtonIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.decrementButtonIcon);
  }
}
function InputNumber_button_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("pBind", ctx_r2.ptm("incrementButtonIcon"))("ngClass", ctx_r2.incrementButtonIcon);
  }
}
function InputNumber_button_4_ng_container_2__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 15);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("pBind", ctx_r2.ptm("incrementButtonIcon"));
  }
}
function InputNumber_button_4_ng_container_2_2_ng_template_0_Template(rf, ctx) {
}
function InputNumber_button_4_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, InputNumber_button_4_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_button_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, InputNumber_button_4_ng_container_2__svg_svg_1_Template, 1, 1, "svg", 14)(2, InputNumber_button_4_ng_container_2_2_Template, 1, 0, null, 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.incrementButtonIconTemplate && !ctx_r2._incrementButtonIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.incrementButtonIconTemplate || ctx_r2._incrementButtonIconTemplate);
  }
}
function InputNumber_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵlistener("mousedown", function InputNumber_button_4_Template_button_mousedown_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onUpButtonMouseDown($event));
    })("mouseup", function InputNumber_button_4_Template_button_mouseup_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onUpButtonMouseUp());
    })("mouseleave", function InputNumber_button_4_Template_button_mouseleave_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onUpButtonMouseLeave());
    })("keydown", function InputNumber_button_4_Template_button_keydown_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onUpButtonKeyDown($event));
    })("keyup", function InputNumber_button_4_Template_button_keyup_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onUpButtonKeyUp());
    });
    ɵɵtemplate(1, InputNumber_button_4_span_1_Template, 1, 2, "span", 12)(2, InputNumber_button_4_ng_container_2_Template, 3, 2, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("incrementButton"), ctx_r2.incrementButtonClass));
    ɵɵproperty("pBind", ctx_r2.ptm("incrementButton"));
    ɵɵattribute("disabled", ctx_r2.$disabled() ? "" : void 0)("aria-hidden", true);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.incrementButtonIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.incrementButtonIcon);
  }
}
function InputNumber_button_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 13);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("pBind", ctx_r2.ptm("decrementButtonIcon"))("ngClass", ctx_r2.decrementButtonIcon);
  }
}
function InputNumber_button_5_ng_container_2__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 17);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵproperty("pBind", ctx_r2.ptm("decrementButtonIcon"));
  }
}
function InputNumber_button_5_ng_container_2_2_ng_template_0_Template(rf, ctx) {
}
function InputNumber_button_5_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, InputNumber_button_5_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function InputNumber_button_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, InputNumber_button_5_ng_container_2__svg_svg_1_Template, 1, 1, "svg", 16)(2, InputNumber_button_5_ng_container_2_2_Template, 1, 0, null, 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.decrementButtonIconTemplate && !ctx_r2._decrementButtonIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.decrementButtonIconTemplate || ctx_r2._decrementButtonIconTemplate);
  }
}
function InputNumber_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵlistener("mousedown", function InputNumber_button_5_Template_button_mousedown_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDownButtonMouseDown($event));
    })("mouseup", function InputNumber_button_5_Template_button_mouseup_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDownButtonMouseUp());
    })("mouseleave", function InputNumber_button_5_Template_button_mouseleave_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDownButtonMouseLeave());
    })("keydown", function InputNumber_button_5_Template_button_keydown_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDownButtonKeyDown($event));
    })("keyup", function InputNumber_button_5_Template_button_keyup_0_listener() {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onDownButtonKeyUp());
    });
    ɵɵtemplate(1, InputNumber_button_5_span_1_Template, 1, 2, "span", 12)(2, InputNumber_button_5_ng_container_2_Template, 3, 2, "ng-container", 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("decrementButton"), ctx_r2.decrementButtonClass));
    ɵɵproperty("pBind", ctx_r2.ptm("decrementButton"));
    ɵɵattribute("disabled", ctx_r2.$disabled() ? "" : void 0)("aria-hidden", true);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.decrementButtonIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.decrementButtonIcon);
  }
}
var style8 = (
  /*css*/
  `
    ${style7}

    /* For PrimeNG */
    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext {
        border-color: dt('inputtext.invalid.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`
);
var classes3 = {
  root: ({
    instance
  }) => ["p-inputnumber p-component p-inputwrapper", {
    "p-inputwrapper-filled": instance.$filled() || instance.allowEmpty === false,
    "p-inputwrapper-focus": instance.focused,
    "p-inputnumber-stacked": instance.showButtons && instance.buttonLayout === "stacked",
    "p-inputnumber-horizontal": instance.showButtons && instance.buttonLayout === "horizontal",
    "p-inputnumber-vertical": instance.showButtons && instance.buttonLayout === "vertical",
    "p-inputnumber-fluid": instance.hasFluid,
    "p-invalid": instance.invalid()
  }],
  pcInputText: "p-inputnumber-input",
  buttonGroup: "p-inputnumber-button-group",
  incrementButton: ({
    instance
  }) => ["p-inputnumber-button p-inputnumber-increment-button", {
    "p-disabled": instance.showButtons && instance.max() != null && instance.maxlength()
  }],
  decrementButton: ({
    instance
  }) => ["p-inputnumber-button p-inputnumber-decrement-button", {
    "p-disabled": instance.showButtons && instance.min() != null && instance.minlength()
  }],
  clearIcon: "p-inputnumber-clear-icon"
};
var InputNumberStyle = class _InputNumberStyle extends BaseStyle {
  name = "inputnumber";
  style = style8;
  classes = classes3;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵInputNumberStyle_BaseFactory;
    return function InputNumberStyle_Factory(__ngFactoryType__) {
      return (ɵInputNumberStyle_BaseFactory || (ɵInputNumberStyle_BaseFactory = ɵɵgetInheritedFactory(_InputNumberStyle)))(__ngFactoryType__ || _InputNumberStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _InputNumberStyle,
    factory: _InputNumberStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputNumberStyle, [{
    type: Injectable
  }], null, null);
})();
var InputNumberClasses;
(function(InputNumberClasses2) {
  InputNumberClasses2["root"] = "p-inputnumber";
  InputNumberClasses2["pcInputText"] = "p-inputnumber-input";
  InputNumberClasses2["buttonGroup"] = "p-inputnumber-button-group";
  InputNumberClasses2["incrementButton"] = "p-inputnumber-increment-button";
  InputNumberClasses2["decrementButton"] = "p-inputnumber-decrement-button";
  InputNumberClasses2["clearIcon"] = "p-autocomplete-clear-icon";
})(InputNumberClasses || (InputNumberClasses = {}));
var INPUTNUMBER_INSTANCE = new InjectionToken("INPUTNUMBER_INSTANCE");
var INPUTNUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputNumber),
  multi: true
};
var InputNumber = class _InputNumber extends BaseInput {
  injector;
  $pcInputNumber = inject(INPUTNUMBER_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  _componentStyle = inject(InputNumberStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Displays spinner buttons.
   * @group Props
   */
  showButtons = false;
  /**
   * Whether to format the value.
   * @group Props
   */
  format = true;
  /**
   * Layout of the buttons, valid values are "stacked" (default), "horizontal" and "vertical".
   * @group Props
   */
  buttonLayout = "stacked";
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Advisory information to display on input.
   * @group Props
   */
  placeholder;
  /**
   * Specifies tab order of the element.
   * @group Props
   */
  tabindex;
  /**
   * Title text of the input text.
   * @group Props
   */
  title;
  /**
   * Specifies one or more IDs in the DOM that labels the input field.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Specifies one or more IDs in the DOM that describes the input field.
   * @group Props
   */
  ariaDescribedBy;
  /**
   * Used to define a string that labels the input element.
   * @group Props
   */
  ariaLabel;
  /**
   * Used to indicate that user input is required on an element before a form can be submitted.
   * @group Props
   */
  ariaRequired;
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  autocomplete;
  /**
   * Style class of the increment button.
   * @group Props
   */
  incrementButtonClass;
  /**
   * Style class of the decrement button.
   * @group Props
   */
  decrementButtonClass;
  /**
   * Style class of the increment button.
   * @group Props
   */
  incrementButtonIcon;
  /**
   * Style class of the decrement button.
   * @group Props
   */
  decrementButtonIcon;
  /**
   * When present, it specifies that an input field is read-only.
   * @group Props
   */
  readonly;
  /**
   * Determines whether the input field is empty.
   * @group Props
   */
  allowEmpty = true;
  /**
   * Locale to be used in formatting.
   * @group Props
   */
  locale;
  /**
   * The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". See Locale Negotiation for details.
   * @group Props
   */
  localeMatcher;
  /**
   * Defines the behavior of the component, valid values are "decimal" and "currency".
   * @group Props
   */
  mode = "decimal";
  /**
   * The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB. There is no default value; if the style is "currency", the currency property must be provided.
   * @group Props
   */
  currency;
  /**
   * How to display the currency in currency formatting. Possible values are "symbol" to use a localized currency symbol such as €, ü"code" to use the ISO currency code, "name" to use a localized currency name such as "dollar"; the default is "symbol".
   * @group Props
   */
  currencyDisplay;
  /**
   * Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.
   * @group Props
   */
  useGrouping = true;
  /**
   * The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information).
   * @group Props
   */
  minFractionDigits;
  /**
   * The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information).
   * @group Props
   */
  maxFractionDigits;
  /**
   * Text to display before the value.
   * @group Props
   */
  prefix;
  /**
   * Text to display after the value.
   * @group Props
   */
  suffix;
  /**
   * Inline style of the input field.
   * @group Props
   */
  inputStyle;
  /**
   * Style class of the input field.
   * @group Props
   */
  inputStyleClass;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke on input.
   * @param {InputNumberInputEvent} event - Custom input event.
   * @group Emits
   */
  onInput = new EventEmitter();
  /**
   * Callback to invoke when the component receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the component loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke on input key press.
   * @param {KeyboardEvent} event - Keyboard event.
   * @group Emits
   */
  onKeyDown = new EventEmitter();
  /**
   * Callback to invoke when clear token is clicked.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Template of the clear icon.
   * @group Templates
   */
  clearIconTemplate;
  /**
   * Template of the increment button icon.
   * @group Templates
   */
  incrementButtonIconTemplate;
  /**
   * Template of the decrement button icon.
   * @group Templates
   */
  decrementButtonIconTemplate;
  templates;
  input;
  _clearIconTemplate;
  _incrementButtonIconTemplate;
  _decrementButtonIconTemplate;
  value;
  focused;
  initialized;
  groupChar = "";
  prefixChar = "";
  suffixChar = "";
  isSpecialChar;
  timer;
  lastValue;
  _numeral;
  numberFormat;
  _decimal;
  _decimalChar = "";
  _group;
  _minusSign;
  _currency;
  _prefix;
  _suffix;
  _index;
  ngControl = null;
  constructor(injector) {
    super();
    this.injector = injector;
  }
  onChanges(simpleChange) {
    const props = ["locale", "localeMatcher", "mode", "currency", "currencyDisplay", "useGrouping", "minFractionDigits", "maxFractionDigits", "prefix", "suffix"];
    if (props.some((p2) => !!simpleChange[p2])) {
      this.updateConstructParser();
    }
  }
  onInit() {
    this.ngControl = this.injector.get(NgControl, null, {
      optional: true
    });
    this.constructParser();
    this.initialized = true;
  }
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "clearicon":
          this._clearIconTemplate = item.template;
          break;
        case "incrementbuttonicon":
          this._incrementButtonIconTemplate = item.template;
          break;
        case "decrementbuttonicon":
          this._decrementButtonIconTemplate = item.template;
          break;
      }
    });
  }
  getOptions() {
    const validateFractionDigits = (value, min, max) => {
      if (value == null || isNaN(value) || !isFinite(value)) {
        return void 0;
      }
      return Math.max(min, Math.min(max, Math.floor(value)));
    };
    const minFractionDigits = validateFractionDigits(this.minFractionDigits, 0, 20);
    const maxFractionDigits = validateFractionDigits(this.maxFractionDigits, 0, 100);
    const validatedMinFractionDigits = minFractionDigits != null && maxFractionDigits != null && minFractionDigits > maxFractionDigits ? maxFractionDigits : minFractionDigits;
    return {
      localeMatcher: this.localeMatcher,
      style: this.mode,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: this.useGrouping,
      minimumFractionDigits: validatedMinFractionDigits,
      maximumFractionDigits: maxFractionDigits
    };
  }
  constructParser() {
    const options = this.getOptions();
    const cleanOptions = Object.fromEntries(Object.entries(options).filter(([_key, value]) => value !== void 0));
    this.numberFormat = new Intl.NumberFormat(this.locale, cleanOptions);
    const numerals = [...new Intl.NumberFormat(this.locale, {
      useGrouping: false
    }).format(9876543210)].reverse();
    const index = new Map(numerals.map((d, i) => [d, i]));
    this._numeral = new RegExp(`[${numerals.join("")}]`, "g");
    this._group = this.getGroupingExpression();
    this._minusSign = this.getMinusSignExpression();
    this._currency = this.getCurrencyExpression();
    this._decimal = this.getDecimalExpression();
    this._decimalChar = this.getDecimalChar();
    this._suffix = this.getSuffixExpression();
    this._prefix = this.getPrefixExpression();
    this._index = (d) => index.get(d);
  }
  updateConstructParser() {
    if (this.initialized) {
      this.constructParser();
    }
  }
  escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  getDecimalExpression() {
    const decimalChar = this.getDecimalChar();
    return new RegExp(`[${decimalChar}]`, "g");
  }
  getDecimalChar() {
    const formatter = new Intl.NumberFormat(this.locale, __spreadProps(__spreadValues({}, this.getOptions()), {
      useGrouping: false
    }));
    return formatter.format(1.1).replace(this._currency, "").trim().replace(this._numeral, "");
  }
  getGroupingExpression() {
    const formatter = new Intl.NumberFormat(this.locale, {
      useGrouping: true
    });
    this.groupChar = formatter.format(1e6).trim().replace(this._numeral, "").charAt(0);
    return new RegExp(`[${this.groupChar}]`, "g");
  }
  getMinusSignExpression() {
    const formatter = new Intl.NumberFormat(this.locale, {
      useGrouping: false
    });
    return new RegExp(`[${formatter.format(-1).trim().replace(this._numeral, "")}]`, "g");
  }
  getCurrencyExpression() {
    if (this.currency) {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: "currency",
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      return new RegExp(`[${formatter.format(1).replace(/\s/g, "").replace(this._numeral, "").replace(this._group, "")}]`, "g");
    }
    return new RegExp(`[]`, "g");
  }
  getPrefixExpression() {
    if (this.prefix) {
      this.prefixChar = this.prefix;
    } else {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay
      });
      this.prefixChar = formatter.format(1).split("1")[0];
    }
    return new RegExp(`${this.escapeRegExp(this.prefixChar || "")}`, "g");
  }
  getSuffixExpression() {
    if (this.suffix) {
      this.suffixChar = this.suffix;
    } else {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
      this.suffixChar = formatter.format(1).split("1")[1];
    }
    return new RegExp(`${this.escapeRegExp(this.suffixChar || "")}`, "g");
  }
  formatValue(value) {
    if (value != null) {
      if (value === "-") {
        return value;
      }
      if (this.format) {
        let formatter = new Intl.NumberFormat(this.locale, this.getOptions());
        let formattedValue = formatter.format(value);
        if (this.prefix && value != this.prefix) {
          formattedValue = this.prefix + formattedValue;
        }
        if (this.suffix && value != this.suffix) {
          formattedValue = formattedValue + this.suffix;
        }
        return formattedValue;
      }
      return value.toString();
    }
    return "";
  }
  parseValue(text) {
    const suffixRegex = this._suffix ? new RegExp(this._suffix, "") : /(?:)/;
    const prefixRegex = this._prefix ? new RegExp(this._prefix, "") : /(?:)/;
    const currencyRegex = this._currency ? new RegExp(this._currency, "") : /(?:)/;
    let filteredText = text.replace(suffixRegex, "").replace(prefixRegex, "").trim().replace(/\s/g, "").replace(currencyRegex, "").replace(this._group, "").replace(this._minusSign, "-").replace(this._decimal, ".").replace(this._numeral, this._index);
    if (filteredText) {
      if (filteredText === "-")
        return filteredText;
      let parsedValue = +filteredText;
      return isNaN(parsedValue) ? null : parsedValue;
    }
    return null;
  }
  repeat(event2, interval, dir) {
    if (this.readonly) {
      return;
    }
    let i = interval || 500;
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.repeat(event2, 40, dir);
    }, i);
    this.spin(event2, dir);
  }
  spin(event2, dir) {
    let step = (this.step() ?? 1) * dir;
    let currentValue = this.parseValue(this.input?.nativeElement.value) || 0;
    let newValue = this.validateValue(currentValue + step);
    const max = this.maxlength();
    if (max && max < this.formatValue(newValue).length) {
      return;
    }
    this.updateInput(newValue, null, "spin", null);
    this.updateModel(event2, newValue);
    this.handleOnInput(event2, currentValue, newValue);
  }
  clear() {
    this.value = null;
    this.onModelChange(this.value);
    this.onClear.emit();
  }
  onUpButtonMouseDown(event2) {
    if (event2.button === 2) {
      this.clearTimer();
      return;
    }
    if (!this.$disabled()) {
      this.input?.nativeElement.focus();
      this.repeat(event2, null, 1);
      event2.preventDefault();
    }
  }
  onUpButtonMouseUp() {
    if (!this.$disabled()) {
      this.clearTimer();
    }
  }
  onUpButtonMouseLeave() {
    if (!this.$disabled()) {
      this.clearTimer();
    }
  }
  onUpButtonKeyDown(event2) {
    if (event2.keyCode === 32 || event2.keyCode === 13) {
      this.repeat(event2, null, 1);
    }
  }
  onUpButtonKeyUp() {
    if (!this.$disabled()) {
      this.clearTimer();
    }
  }
  onDownButtonMouseDown(event2) {
    if (event2.button === 2) {
      this.clearTimer();
      return;
    }
    if (!this.$disabled()) {
      this.input?.nativeElement.focus();
      this.repeat(event2, null, -1);
      event2.preventDefault();
    }
  }
  onDownButtonMouseUp() {
    if (!this.$disabled()) {
      this.clearTimer();
    }
  }
  onDownButtonMouseLeave() {
    if (!this.$disabled()) {
      this.clearTimer();
    }
  }
  onDownButtonKeyUp() {
    if (!this.$disabled()) {
      this.clearTimer();
    }
  }
  onDownButtonKeyDown(event2) {
    if (event2.keyCode === 32 || event2.keyCode === 13) {
      this.repeat(event2, null, -1);
    }
  }
  onUserInput(event2) {
    if (this.readonly) {
      return;
    }
    if (this.isSpecialChar) {
      event2.target.value = this.lastValue;
    }
    this.isSpecialChar = false;
  }
  onInputKeyDown(event2) {
    if (this.readonly) {
      return;
    }
    this.lastValue = event2.target.value;
    if (event2.shiftKey || event2.altKey) {
      this.isSpecialChar = true;
      return;
    }
    let selectionStart = event2.target.selectionStart;
    let selectionEnd = event2.target.selectionEnd;
    let inputValue = event2.target.value;
    let newValueStr = null;
    if (event2.altKey) {
      event2.preventDefault();
    }
    switch (event2.key) {
      case "ArrowUp":
        this.spin(event2, 1);
        event2.preventDefault();
        break;
      case "ArrowDown":
        this.spin(event2, -1);
        event2.preventDefault();
        break;
      case "ArrowLeft":
        for (let index = selectionStart; index <= inputValue.length; index++) {
          const previousCharIndex = index === 0 ? 0 : index - 1;
          if (this.isNumeralChar(inputValue.charAt(previousCharIndex))) {
            this.input.nativeElement.setSelectionRange(index, index);
            break;
          }
        }
        break;
      case "ArrowRight":
        for (let index = selectionEnd; index >= 0; index--) {
          if (this.isNumeralChar(inputValue.charAt(index))) {
            this.input.nativeElement.setSelectionRange(index, index);
            break;
          }
        }
        break;
      case "Tab":
      case "Enter":
        newValueStr = this.validateValue(this.parseValue(this.input.nativeElement.value));
        this.input.nativeElement.value = this.formatValue(newValueStr);
        this.input.nativeElement.setAttribute("aria-valuenow", newValueStr);
        this.updateModel(event2, newValueStr);
        break;
      case "Backspace": {
        event2.preventDefault();
        if (selectionStart === selectionEnd) {
          if (selectionStart == 1 && this.prefix || selectionStart == inputValue.length && this.suffix) {
            break;
          }
          const deleteChar = inputValue.charAt(selectionStart - 1);
          const {
            decimalCharIndex,
            decimalCharIndexWithoutPrefix
          } = this.getDecimalCharIndexes(inputValue);
          if (this.isNumeralChar(deleteChar)) {
            const decimalLength = this.getDecimalLength(inputValue);
            if (this._group.test(deleteChar)) {
              this._group.lastIndex = 0;
              newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
            } else if (this._decimal.test(deleteChar)) {
              this._decimal.lastIndex = 0;
              if (decimalLength) {
                this.input?.nativeElement.setSelectionRange(selectionStart - 1, selectionStart - 1);
              } else {
                newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
              }
            } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
              const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? "" : "0";
              newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
            } else if (decimalCharIndexWithoutPrefix === 1) {
              newValueStr = inputValue.slice(0, selectionStart - 1) + "0" + inputValue.slice(selectionStart);
              newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
            } else {
              newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
            }
          } else if (this.mode === "currency" && this._currency && deleteChar.search(this._currency) != -1) {
            newValueStr = inputValue.slice(1);
          }
          this.updateValue(event2, newValueStr, null, "delete-single");
        } else {
          newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
          this.updateValue(event2, newValueStr, null, "delete-range");
        }
        break;
      }
      case "Delete":
        event2.preventDefault();
        if (selectionStart === selectionEnd) {
          if (selectionStart == 0 && this.prefix || selectionStart == inputValue.length - 1 && this.suffix) {
            break;
          }
          const deleteChar = inputValue.charAt(selectionStart);
          const {
            decimalCharIndex,
            decimalCharIndexWithoutPrefix
          } = this.getDecimalCharIndexes(inputValue);
          if (this.isNumeralChar(deleteChar)) {
            const decimalLength = this.getDecimalLength(inputValue);
            if (this._group.test(deleteChar)) {
              this._group.lastIndex = 0;
              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
            } else if (this._decimal.test(deleteChar)) {
              this._decimal.lastIndex = 0;
              if (decimalLength) {
                this.input?.nativeElement.setSelectionRange(selectionStart + 1, selectionStart + 1);
              } else {
                newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
              }
            } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
              const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? "" : "0";
              newValueStr = inputValue.slice(0, selectionStart) + insertedText + inputValue.slice(selectionStart + 1);
            } else if (decimalCharIndexWithoutPrefix === 1) {
              newValueStr = inputValue.slice(0, selectionStart) + "0" + inputValue.slice(selectionStart + 1);
              newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
            } else {
              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
            }
          }
          this.updateValue(event2, newValueStr, null, "delete-back-single");
        } else {
          newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
          this.updateValue(event2, newValueStr, null, "delete-range");
        }
        break;
      case "Home":
        if (this.min()) {
          this.updateModel(event2, this.min());
          event2.preventDefault();
        }
        break;
      case "End":
        if (this.max()) {
          this.updateModel(event2, this.max());
          event2.preventDefault();
        }
        break;
      default:
        break;
    }
    this.onKeyDown.emit(event2);
  }
  onInputKeyPress(event2) {
    if (this.readonly) {
      return;
    }
    let code = event2.which || event2.keyCode;
    let char = String.fromCharCode(code);
    let isDecimalSign = this.isDecimalSign(char);
    const isMinusSign = this.isMinusSign(char);
    if (code != 13) {
      event2.preventDefault();
    }
    if (!isDecimalSign && event2.code === "NumpadDecimal") {
      isDecimalSign = true;
      char = this._decimalChar;
      code = char.charCodeAt(0);
    }
    const {
      value,
      selectionStart,
      selectionEnd
    } = this.input.nativeElement;
    const newValue = this.parseValue(value + char);
    const newValueStr = newValue != null ? newValue.toString() : "";
    const selectedValue = value.substring(selectionStart, selectionEnd);
    const selectedValueParsed = this.parseValue(selectedValue);
    const selectedValueStr = selectedValueParsed != null ? selectedValueParsed.toString() : "";
    if (selectionStart !== selectionEnd && selectedValueStr.length > 0) {
      this.insert(event2, char, {
        isDecimalSign,
        isMinusSign
      });
      return;
    }
    const max = this.maxlength();
    if (max && newValueStr.length > max) {
      return;
    }
    if (48 <= code && code <= 57 || isMinusSign || isDecimalSign) {
      this.insert(event2, char, {
        isDecimalSign,
        isMinusSign
      });
    }
  }
  onPaste(event2) {
    if (!this.$disabled() && !this.readonly) {
      event2.preventDefault();
      let data = (event2.clipboardData || this.document.defaultView["clipboardData"]).getData("Text");
      if (this.inputId === "integeronly" && /[^\d-]/.test(data)) {
        return;
      }
      if (data) {
        if (this.maxlength()) {
          data = data.toString().substring(0, this.maxlength());
        }
        let filteredData = this.parseValue(data);
        if (filteredData != null) {
          this.insert(event2, filteredData.toString());
        }
      }
    }
  }
  allowMinusSign() {
    const min = this.min();
    return min == null || min < 0;
  }
  isMinusSign(char) {
    if (this._minusSign.test(char) || char === "-") {
      this._minusSign.lastIndex = 0;
      return true;
    }
    return false;
  }
  isDecimalSign(char) {
    if (this._decimal.test(char)) {
      this._decimal.lastIndex = 0;
      return true;
    }
    return false;
  }
  isDecimalMode() {
    return this.mode === "decimal";
  }
  getDecimalCharIndexes(val) {
    let decimalCharIndex = val.search(this._decimal);
    this._decimal.lastIndex = 0;
    const filteredVal = val.replace(this._prefix, "").trim().replace(/\s/g, "").replace(this._currency, "");
    const decimalCharIndexWithoutPrefix = filteredVal.search(this._decimal);
    this._decimal.lastIndex = 0;
    return {
      decimalCharIndex,
      decimalCharIndexWithoutPrefix
    };
  }
  getCharIndexes(val) {
    const decimalCharIndex = val.search(this._decimal);
    this._decimal.lastIndex = 0;
    const minusCharIndex = val.search(this._minusSign);
    this._minusSign.lastIndex = 0;
    const suffixCharIndex = val.search(this._suffix);
    this._suffix.lastIndex = 0;
    const currencyCharIndex = val.search(this._currency);
    this._currency.lastIndex = 0;
    return {
      decimalCharIndex,
      minusCharIndex,
      suffixCharIndex,
      currencyCharIndex
    };
  }
  insert(event2, text, sign = {
    isDecimalSign: false,
    isMinusSign: false
  }) {
    const minusCharIndexOnText = text.search(this._minusSign);
    this._minusSign.lastIndex = 0;
    if (!this.allowMinusSign() && minusCharIndexOnText !== -1) {
      return;
    }
    let selectionStart = this.input?.nativeElement.selectionStart;
    let selectionEnd = this.input?.nativeElement.selectionEnd;
    let inputValue = this.input?.nativeElement.value.trim();
    const {
      decimalCharIndex,
      minusCharIndex,
      suffixCharIndex,
      currencyCharIndex
    } = this.getCharIndexes(inputValue);
    let newValueStr;
    if (sign.isMinusSign) {
      if (selectionStart === 0) {
        newValueStr = inputValue;
        if (minusCharIndex === -1 || selectionEnd !== 0) {
          newValueStr = this.insertText(inputValue, text, 0, selectionEnd);
        }
        this.updateValue(event2, newValueStr, text, "insert");
      }
    } else if (sign.isDecimalSign) {
      if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
        this.updateValue(event2, inputValue, text, "insert");
      } else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
        newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
        this.updateValue(event2, newValueStr, text, "insert");
      } else if (decimalCharIndex === -1 && this.maxFractionDigits) {
        newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
        this.updateValue(event2, newValueStr, text, "insert");
      }
    } else {
      const maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;
      const operation = selectionStart !== selectionEnd ? "range-insert" : "insert";
      if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
        if (selectionStart + text.length - (decimalCharIndex + 1) <= maxFractionDigits) {
          const charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length;
          newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex);
          this.updateValue(event2, newValueStr, text, operation);
        }
      } else {
        newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
        this.updateValue(event2, newValueStr, text, operation);
      }
    }
  }
  insertText(value, text, start, end) {
    let textSplit = text === "." ? text : text.split(".");
    if (textSplit.length === 2) {
      const decimalCharIndex = value.slice(start, end).search(this._decimal);
      this._decimal.lastIndex = 0;
      return decimalCharIndex > 0 ? value.slice(0, start) + this.formatValue(text) + value.slice(end) : value || this.formatValue(text);
    } else if (end - start === value.length) {
      return this.formatValue(text);
    } else if (start === 0) {
      return text + value.slice(end);
    } else if (end === value.length) {
      return value.slice(0, start) + text;
    } else {
      return value.slice(0, start) + text + value.slice(end);
    }
  }
  deleteRange(value, start, end) {
    let newValueStr;
    if (end - start === value.length) newValueStr = "";
    else if (start === 0) newValueStr = value.slice(end);
    else if (end === value.length) newValueStr = value.slice(0, start);
    else newValueStr = value.slice(0, start) + value.slice(end);
    return newValueStr;
  }
  initCursor() {
    let selectionStart = this.input?.nativeElement.selectionStart;
    let selectionEnd = this.input?.nativeElement.selectionEnd;
    let inputValue = this.input?.nativeElement.value;
    let valueLength = inputValue.length;
    let index = null;
    let prefixLength = (this.prefixChar || "").length;
    inputValue = inputValue.replace(this._prefix, "");
    if (selectionStart === selectionEnd || selectionStart !== 0 || selectionEnd < prefixLength) {
      selectionStart -= prefixLength;
    }
    let char = inputValue.charAt(selectionStart);
    if (this.isNumeralChar(char)) {
      return selectionStart + prefixLength;
    }
    let i = selectionStart - 1;
    while (i >= 0) {
      char = inputValue.charAt(i);
      if (this.isNumeralChar(char)) {
        index = i + prefixLength;
        break;
      } else {
        i--;
      }
    }
    if (index !== null) {
      this.input?.nativeElement.setSelectionRange(index + 1, index + 1);
    } else {
      i = selectionStart;
      while (i < valueLength) {
        char = inputValue.charAt(i);
        if (this.isNumeralChar(char)) {
          index = i + prefixLength;
          break;
        } else {
          i++;
        }
      }
      if (index !== null) {
        this.input?.nativeElement.setSelectionRange(index, index);
      }
    }
    return index || 0;
  }
  onInputClick() {
    const currentValue = this.input?.nativeElement.value;
    if (!this.readonly && currentValue !== Mt()) {
      this.initCursor();
    }
  }
  isNumeralChar(char) {
    if (char.length === 1 && (this._numeral.test(char) || this._decimal.test(char) || this._group.test(char) || this._minusSign.test(char))) {
      this.resetRegex();
      return true;
    }
    return false;
  }
  resetRegex() {
    this._numeral.lastIndex = 0;
    this._decimal.lastIndex = 0;
    this._group.lastIndex = 0;
    this._minusSign.lastIndex = 0;
  }
  updateValue(event2, valueStr, insertedValueStr, operation) {
    let currentValue = this.input?.nativeElement.value;
    let newValue = null;
    if (valueStr != null) {
      newValue = this.parseValue(valueStr);
      newValue = !newValue && !this.allowEmpty ? 0 : newValue;
      this.updateInput(newValue, insertedValueStr, operation, valueStr);
      this.handleOnInput(event2, currentValue, newValue);
    }
  }
  handleOnInput(event2, currentValue, newValue) {
    if (this.isValueChanged(currentValue, newValue)) {
      this.input.nativeElement.value = this.formatValue(newValue);
      this.input?.nativeElement.setAttribute("aria-valuenow", newValue);
      this.updateModel(event2, newValue);
      this.onInput.emit({
        originalEvent: event2,
        value: newValue,
        formattedValue: currentValue
      });
    }
  }
  isValueChanged(currentValue, newValue) {
    if (newValue === null && currentValue !== null) {
      return true;
    }
    if (newValue != null) {
      let parsedCurrentValue = typeof currentValue === "string" ? this.parseValue(currentValue) : currentValue;
      return newValue !== parsedCurrentValue;
    }
    return false;
  }
  validateValue(value) {
    if (value === "-" || value == null) {
      return null;
    }
    const min = this.min();
    const max = this.max();
    if (min != null && value < min) {
      return this.min();
    }
    if (max != null && value > max) {
      return max;
    }
    return value;
  }
  updateInput(value, insertedValueStr, operation, valueStr) {
    insertedValueStr = insertedValueStr || "";
    let inputValue = this.input?.nativeElement.value;
    let newValue = this.formatValue(value);
    let currentLength = inputValue.length;
    if (newValue !== valueStr) {
      newValue = this.concatValues(newValue, valueStr);
    }
    if (currentLength === 0) {
      this.input.nativeElement.value = newValue;
      this.input.nativeElement.setSelectionRange(0, 0);
      const index = this.initCursor();
      const selectionEnd = index + insertedValueStr.length;
      this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
    } else {
      let selectionStart = this.input.nativeElement.selectionStart;
      let selectionEnd = this.input.nativeElement.selectionEnd;
      const maxlength = this.maxlength();
      if (maxlength && newValue.length > maxlength) {
        newValue = newValue.slice(0, maxlength);
        selectionStart = Math.min(selectionStart, maxlength);
        selectionEnd = Math.min(selectionEnd, maxlength);
      }
      if (maxlength && maxlength < newValue.length) {
        return;
      }
      this.input.nativeElement.value = newValue;
      let newLength = newValue.length;
      if (operation === "range-insert") {
        const startValue = this.parseValue((inputValue || "").slice(0, selectionStart));
        const startValueStr = startValue !== null ? startValue.toString() : "";
        const startExpr = startValueStr.split("").join(`(${this.groupChar})?`);
        const sRegex = new RegExp(startExpr, "g");
        sRegex.test(newValue);
        const tExpr = insertedValueStr.split("").join(`(${this.groupChar})?`);
        const tRegex = new RegExp(tExpr, "g");
        tRegex.test(newValue.slice(sRegex.lastIndex));
        selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else if (newLength === currentLength) {
        if (operation === "insert" || operation === "delete-back-single") this.input.nativeElement.setSelectionRange(selectionEnd + 1, selectionEnd + 1);
        else if (operation === "delete-single") this.input.nativeElement.setSelectionRange(selectionEnd - 1, selectionEnd - 1);
        else if (operation === "delete-range" || operation === "spin") this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else if (operation === "delete-back-single") {
        let prevChar = inputValue.charAt(selectionEnd - 1);
        let nextChar = inputValue.charAt(selectionEnd);
        let diff = currentLength - newLength;
        let isGroupChar = this._group.test(nextChar);
        if (isGroupChar && diff === 1) {
          selectionEnd += 1;
        } else if (!isGroupChar && this.isNumeralChar(prevChar)) {
          selectionEnd += -1 * diff + 1;
        }
        this._group.lastIndex = 0;
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else if (inputValue === "-" && operation === "insert") {
        this.input.nativeElement.setSelectionRange(0, 0);
        const index = this.initCursor();
        const selectionEnd2 = index + insertedValueStr.length + 1;
        this.input.nativeElement.setSelectionRange(selectionEnd2, selectionEnd2);
      } else {
        selectionEnd = selectionEnd + (newLength - currentLength);
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      }
    }
    this.input.nativeElement.setAttribute("aria-valuenow", value);
  }
  concatValues(val1, val2) {
    if (val1 && val2) {
      let decimalCharIndex = val2.search(this._decimal);
      this._decimal.lastIndex = 0;
      if (this.suffixChar) {
        return decimalCharIndex !== -1 ? val1.replace(this.suffixChar, "").split(this._decimal)[0] + val2.replace(this.suffixChar, "").slice(decimalCharIndex) + this.suffixChar : val1;
      } else {
        return decimalCharIndex !== -1 ? val1.split(this._decimal)[0] + val2.slice(decimalCharIndex) : val1;
      }
    }
    return val1;
  }
  getDecimalLength(value) {
    if (value) {
      const valueSplit = value.split(this._decimal);
      if (valueSplit.length === 2) {
        return valueSplit[1].replace(this._suffix, "").trim().replace(/\s/g, "").replace(this._currency, "").length;
      }
    }
    return 0;
  }
  onInputFocus(event2) {
    this.focused = true;
    this.onFocus.emit(event2);
  }
  onInputBlur(event2) {
    this.focused = false;
    const newValueNumber = this.validateValue(this.parseValue(this.input.nativeElement.value));
    const newValueString = newValueNumber?.toString();
    this.input.nativeElement.value = this.formatValue(newValueString);
    this.input.nativeElement.setAttribute("aria-valuenow", newValueString);
    this.updateModel(event2, newValueNumber);
    this.onModelTouched();
    this.onBlur.emit(event2);
  }
  formattedValue() {
    const val = !this.value && !this.allowEmpty ? 0 : this.value;
    return this.formatValue(val);
  }
  updateModel(event2, value) {
    const isBlurUpdateOnMode = this.ngControl?.control?.updateOn === "blur";
    if (this.value !== value) {
      this.value = value;
      if (!(isBlurUpdateOnMode && this.focused)) {
        this.onModelChange(value);
      }
    } else if (isBlurUpdateOnMode) {
      this.onModelChange(value);
    }
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    this.value = value ? Number(value) : value;
    setModelValue(value);
    this.cd.markForCheck();
  }
  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
  static ɵfac = function InputNumber_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputNumber)(ɵɵdirectiveInject(Injector));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _InputNumber,
    selectors: [["p-inputNumber"], ["p-inputnumber"], ["p-input-number"]],
    contentQueries: function InputNumber_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c04, 4);
        ɵɵcontentQuery(dirIndex, _c110, 4);
        ɵɵcontentQuery(dirIndex, _c26, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.clearIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.incrementButtonIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.decrementButtonIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.templates = _t2);
      }
    },
    viewQuery: function InputNumber_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c32, 5);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.input = _t2.first);
      }
    },
    hostVars: 2,
    hostBindings: function InputNumber_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      showButtons: [2, "showButtons", "showButtons", booleanAttribute],
      format: [2, "format", "format", booleanAttribute],
      buttonLayout: "buttonLayout",
      inputId: "inputId",
      styleClass: "styleClass",
      placeholder: "placeholder",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      title: "title",
      ariaLabelledBy: "ariaLabelledBy",
      ariaDescribedBy: "ariaDescribedBy",
      ariaLabel: "ariaLabel",
      ariaRequired: [2, "ariaRequired", "ariaRequired", booleanAttribute],
      autocomplete: "autocomplete",
      incrementButtonClass: "incrementButtonClass",
      decrementButtonClass: "decrementButtonClass",
      incrementButtonIcon: "incrementButtonIcon",
      decrementButtonIcon: "decrementButtonIcon",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      allowEmpty: [2, "allowEmpty", "allowEmpty", booleanAttribute],
      locale: "locale",
      localeMatcher: "localeMatcher",
      mode: "mode",
      currency: "currency",
      currencyDisplay: "currencyDisplay",
      useGrouping: [2, "useGrouping", "useGrouping", booleanAttribute],
      minFractionDigits: [2, "minFractionDigits", "minFractionDigits", (value) => numberAttribute(value, void 0)],
      maxFractionDigits: [2, "maxFractionDigits", "maxFractionDigits", (value) => numberAttribute(value, void 0)],
      prefix: "prefix",
      suffix: "suffix",
      inputStyle: "inputStyle",
      inputStyleClass: "inputStyleClass",
      showClear: [2, "showClear", "showClear", booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onInput: "onInput",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onKeyDown: "onKeyDown",
      onClear: "onClear"
    },
    features: [ɵɵProvidersFeature([INPUTNUMBER_VALUE_ACCESSOR, InputNumberStyle, {
      provide: INPUTNUMBER_INSTANCE,
      useExisting: _InputNumber
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _InputNumber
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 6,
    vars: 36,
    consts: [["input", ""], ["pInputText", "", "role", "spinbutton", "inputmode", "decimal", 3, "input", "keydown", "keypress", "paste", "click", "focus", "blur", "value", "ngStyle", "variant", "invalid", "pSize", "pt", "pAutoFocus", "fluid"], [4, "ngIf"], [3, "pBind", "class", 4, "ngIf"], ["type", "button", "tabindex", "-1", 3, "pBind", "class", "mousedown", "mouseup", "mouseleave", "keydown", "keyup", 4, "ngIf"], ["data-p-icon", "times", 3, "pBind", "class", "click", 4, "ngIf"], [3, "pBind", "class", "click", 4, "ngIf"], ["data-p-icon", "times", 3, "click", "pBind"], [3, "click", "pBind"], [4, "ngTemplateOutlet"], [3, "pBind"], ["type", "button", "tabindex", "-1", 3, "mousedown", "mouseup", "mouseleave", "keydown", "keyup", "pBind"], [3, "pBind", "ngClass", 4, "ngIf"], [3, "pBind", "ngClass"], ["data-p-icon", "angle-up", 3, "pBind", 4, "ngIf"], ["data-p-icon", "angle-up", 3, "pBind"], ["data-p-icon", "angle-down", 3, "pBind", 4, "ngIf"], ["data-p-icon", "angle-down", 3, "pBind"]],
    template: function InputNumber_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "input", 1, 0);
        ɵɵlistener("input", function InputNumber_Template_input_input_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onUserInput($event));
        })("keydown", function InputNumber_Template_input_keydown_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputKeyDown($event));
        })("keypress", function InputNumber_Template_input_keypress_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputKeyPress($event));
        })("paste", function InputNumber_Template_input_paste_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onPaste($event));
        })("click", function InputNumber_Template_input_click_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputClick());
        })("focus", function InputNumber_Template_input_focus_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputFocus($event));
        })("blur", function InputNumber_Template_input_blur_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputBlur($event));
        });
        ɵɵelementEnd();
        ɵɵtemplate(2, InputNumber_ng_container_2_Template, 3, 2, "ng-container", 2)(3, InputNumber_span_3_Template, 7, 17, "span", 3)(4, InputNumber_button_4_Template, 3, 7, "button", 4)(5, InputNumber_button_5_Template, 3, 7, "button", 4);
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.cn(ctx.cx("pcInputText"), ctx.inputStyleClass));
        ɵɵproperty("value", ctx.formattedValue())("ngStyle", ctx.inputStyle)("variant", ctx.$variant())("invalid", ctx.invalid())("pSize", ctx.size())("pt", ctx.ptm("pcInputText"))("pAutoFocus", ctx.autofocus)("fluid", ctx.hasFluid);
        ɵɵattribute("id", ctx.inputId)("aria-valuemin", ctx.min())("aria-valuemax", ctx.max())("aria-valuenow", ctx.value)("placeholder", ctx.placeholder)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("aria-describedby", ctx.ariaDescribedBy)("title", ctx.title)("size", ctx.inputSize())("name", ctx.name())("autocomplete", ctx.autocomplete)("maxlength", ctx.maxlength())("minlength", ctx.minlength())("tabindex", ctx.tabindex)("aria-required", ctx.ariaRequired)("min", ctx.min())("max", ctx.max())("step", ctx.step() ?? 1)("required", ctx.required() ? "" : void 0)("readonly", ctx.readonly ? "" : void 0)("disabled", ctx.$disabled() ? "" : void 0);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.buttonLayout != "vertical" && ctx.showClear && ctx.value);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showButtons && ctx.buttonLayout === "stacked");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showButtons && ctx.buttonLayout !== "stacked");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showButtons && ctx.buttonLayout !== "stacked");
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, InputText, AutoFocus, TimesIcon, AngleUpIcon, AngleDownIcon, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputNumber, [{
    type: Component,
    args: [{
      selector: "p-inputNumber, p-inputnumber, p-input-number",
      standalone: true,
      imports: [CommonModule, InputText, AutoFocus, TimesIcon, AngleUpIcon, AngleDownIcon, SharedModule, BindModule],
      template: `
        <input
            pInputText
            #input
            [attr.id]="inputId"
            role="spinbutton"
            [class]="cn(cx('pcInputText'), inputStyleClass)"
            [value]="formattedValue()"
            [ngStyle]="inputStyle"
            [variant]="$variant()"
            [invalid]="invalid()"
            [attr.aria-valuemin]="min()"
            [attr.aria-valuemax]="max()"
            [attr.aria-valuenow]="value"
            [attr.placeholder]="placeholder"
            [attr.aria-label]="ariaLabel"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-describedby]="ariaDescribedBy"
            [attr.title]="title"
            [pSize]="size()"
            [attr.size]="inputSize()"
            [attr.name]="name()"
            [attr.autocomplete]="autocomplete"
            [attr.maxlength]="maxlength()"
            [attr.minlength]="minlength()"
            [attr.tabindex]="tabindex"
            [attr.aria-required]="ariaRequired"
            [attr.min]="min()"
            [attr.max]="max()"
            [attr.step]="step() ?? 1"
            [attr.required]="required() ? '' : undefined"
            [attr.readonly]="readonly ? '' : undefined"
            [attr.disabled]="$disabled() ? '' : undefined"
            inputmode="decimal"
            (input)="onUserInput($event)"
            (keydown)="onInputKeyDown($event)"
            (keypress)="onInputKeyPress($event)"
            (paste)="onPaste($event)"
            (click)="onInputClick()"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            [pt]="ptm('pcInputText')"
            [pAutoFocus]="autofocus"
            [fluid]="hasFluid"
        />
        <ng-container *ngIf="buttonLayout != 'vertical' && showClear && value">
            <svg data-p-icon="times" *ngIf="!clearIconTemplate && !_clearIconTemplate" [pBind]="ptm('clearIcon')" [class]="cx('clearIcon')" (click)="clear()" />
            <span *ngIf="clearIconTemplate || _clearIconTemplate" [pBind]="ptm('clearIcon')" (click)="clear()" [class]="cx('clearIcon')">
                <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
            </span>
        </ng-container>
        <span [pBind]="ptm('buttonGroup')" [class]="cx('buttonGroup')" *ngIf="showButtons && buttonLayout === 'stacked'">
            <button
                type="button"
                [pBind]="ptm('incrementButton')"
                [class]="cn(cx('incrementButton'), incrementButtonClass)"
                [attr.disabled]="$disabled() ? '' : undefined"
                tabindex="-1"
                (mousedown)="onUpButtonMouseDown($event)"
                (mouseup)="onUpButtonMouseUp()"
                (mouseleave)="onUpButtonMouseLeave()"
                (keydown)="onUpButtonKeyDown($event)"
                (keyup)="onUpButtonKeyUp()"
                [attr.aria-hidden]="true"
            >
                <span *ngIf="incrementButtonIcon" [pBind]="ptm('incrementButtonIcon')" [ngClass]="incrementButtonIcon"></span>
                <ng-container *ngIf="!incrementButtonIcon">
                    <svg data-p-icon="angle-up" [pBind]="ptm('incrementButtonIcon')" *ngIf="!incrementButtonIconTemplate && !_incrementButtonIconTemplate" />
                    <ng-template *ngTemplateOutlet="incrementButtonIconTemplate || _incrementButtonIconTemplate"></ng-template>
                </ng-container>
            </button>

            <button
                type="button"
                [pBind]="ptm('decrementButton')"
                [class]="cn(cx('decrementButton'), decrementButtonClass)"
                [attr.disabled]="$disabled() ? '' : undefined"
                tabindex="-1"
                [attr.aria-hidden]="true"
                (mousedown)="onDownButtonMouseDown($event)"
                (mouseup)="onDownButtonMouseUp()"
                (mouseleave)="onDownButtonMouseLeave()"
                (keydown)="onDownButtonKeyDown($event)"
                (keyup)="onDownButtonKeyUp()"
            >
                <span *ngIf="decrementButtonIcon" [pBind]="ptm('decrementButtonIcon')" [ngClass]="decrementButtonIcon"></span>
                <ng-container *ngIf="!decrementButtonIcon">
                    <svg data-p-icon="angle-down" [pBind]="ptm('decrementButtonIcon')" *ngIf="!decrementButtonIconTemplate && !_decrementButtonIconTemplate" />
                    <ng-template *ngTemplateOutlet="decrementButtonIconTemplate || _decrementButtonIconTemplate"></ng-template>
                </ng-container>
            </button>
        </span>
        <button
            *ngIf="showButtons && buttonLayout !== 'stacked'"
            type="button"
            [pBind]="ptm('incrementButton')"
            [class]="cn(cx('incrementButton'), incrementButtonClass)"
            [attr.disabled]="$disabled() ? '' : undefined"
            tabindex="-1"
            [attr.aria-hidden]="true"
            (mousedown)="onUpButtonMouseDown($event)"
            (mouseup)="onUpButtonMouseUp()"
            (mouseleave)="onUpButtonMouseLeave()"
            (keydown)="onUpButtonKeyDown($event)"
            (keyup)="onUpButtonKeyUp()"
        >
            <span *ngIf="incrementButtonIcon" [pBind]="ptm('incrementButtonIcon')" [ngClass]="incrementButtonIcon"></span>
            <ng-container *ngIf="!incrementButtonIcon">
                <svg data-p-icon="angle-up" [pBind]="ptm('incrementButtonIcon')" *ngIf="!incrementButtonIconTemplate && !_incrementButtonIconTemplate" />
                <ng-template *ngTemplateOutlet="incrementButtonIconTemplate || _incrementButtonIconTemplate"></ng-template>
            </ng-container>
        </button>
        <button
            *ngIf="showButtons && buttonLayout !== 'stacked'"
            type="button"
            [pBind]="ptm('decrementButton')"
            [class]="cn(cx('decrementButton'), decrementButtonClass)"
            [attr.disabled]="$disabled() ? '' : undefined"
            tabindex="-1"
            [attr.aria-hidden]="true"
            (mousedown)="onDownButtonMouseDown($event)"
            (mouseup)="onDownButtonMouseUp()"
            (mouseleave)="onDownButtonMouseLeave()"
            (keydown)="onDownButtonKeyDown($event)"
            (keyup)="onDownButtonKeyUp()"
        >
            <span *ngIf="decrementButtonIcon" [pBind]="ptm('decrementButtonIcon')" [ngClass]="decrementButtonIcon"></span>
            <ng-container *ngIf="!decrementButtonIcon">
                <svg data-p-icon="angle-down" [pBind]="ptm('decrementButtonIcon')" *ngIf="!decrementButtonIconTemplate && !_decrementButtonIconTemplate" />
                <ng-template *ngTemplateOutlet="decrementButtonIconTemplate || _decrementButtonIconTemplate"></ng-template>
            </ng-container>
        </button>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [INPUTNUMBER_VALUE_ACCESSOR, InputNumberStyle, {
        provide: INPUTNUMBER_INSTANCE,
        useExisting: InputNumber
      }, {
        provide: PARENT_INSTANCE,
        useExisting: InputNumber
      }],
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: Injector
  }], {
    showButtons: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    format: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    buttonLayout: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    title: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaDescribedBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaRequired: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autocomplete: [{
      type: Input
    }],
    incrementButtonClass: [{
      type: Input
    }],
    decrementButtonClass: [{
      type: Input
    }],
    incrementButtonIcon: [{
      type: Input
    }],
    decrementButtonIcon: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    allowEmpty: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    locale: [{
      type: Input
    }],
    localeMatcher: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    currency: [{
      type: Input
    }],
    currencyDisplay: [{
      type: Input
    }],
    useGrouping: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    minFractionDigits: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, void 0)
      }]
    }],
    maxFractionDigits: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, void 0)
      }]
    }],
    prefix: [{
      type: Input
    }],
    suffix: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    inputStyleClass: [{
      type: Input
    }],
    showClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onInput: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onKeyDown: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon", {
        descendants: false
      }]
    }],
    incrementButtonIconTemplate: [{
      type: ContentChild,
      args: ["incrementbuttonicon", {
        descendants: false
      }]
    }],
    decrementButtonIconTemplate: [{
      type: ContentChild,
      args: ["decrementbuttonicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    input: [{
      type: ViewChild,
      args: ["input"]
    }]
  });
})();
var InputNumberModule = class _InputNumberModule {
  static ɵfac = function InputNumberModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InputNumberModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _InputNumberModule,
    imports: [InputNumber, SharedModule],
    exports: [InputNumber, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [InputNumber, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputNumberModule, [{
    type: NgModule,
    args: [{
      imports: [InputNumber, SharedModule],
      exports: [InputNumber, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/paginator/index.mjs
var style9 = "\n    .p-paginator {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-wrap: wrap;\n        background: dt('paginator.background');\n        color: dt('paginator.color');\n        padding: dt('paginator.padding');\n        border-radius: dt('paginator.border.radius');\n        gap: dt('paginator.gap');\n    }\n\n    .p-paginator-content {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-wrap: wrap;\n        gap: dt('paginator.gap');\n    }\n\n    .p-paginator-content-start {\n        margin-inline-end: auto;\n    }\n\n    .p-paginator-content-end {\n        margin-inline-start: auto;\n    }\n\n    .p-paginator-page,\n    .p-paginator-next,\n    .p-paginator-last,\n    .p-paginator-first,\n    .p-paginator-prev {\n        cursor: pointer;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        line-height: 1;\n        user-select: none;\n        overflow: hidden;\n        position: relative;\n        background: dt('paginator.nav.button.background');\n        border: 0 none;\n        color: dt('paginator.nav.button.color');\n        min-width: dt('paginator.nav.button.width');\n        height: dt('paginator.nav.button.height');\n        transition:\n            background dt('paginator.transition.duration'),\n            color dt('paginator.transition.duration'),\n            outline-color dt('paginator.transition.duration'),\n            box-shadow dt('paginator.transition.duration');\n        border-radius: dt('paginator.nav.button.border.radius');\n        padding: 0;\n        margin: 0;\n    }\n\n    .p-paginator-page:focus-visible,\n    .p-paginator-next:focus-visible,\n    .p-paginator-last:focus-visible,\n    .p-paginator-first:focus-visible,\n    .p-paginator-prev:focus-visible {\n        box-shadow: dt('paginator.nav.button.focus.ring.shadow');\n        outline: dt('paginator.nav.button.focus.ring.width') dt('paginator.nav.button.focus.ring.style') dt('paginator.nav.button.focus.ring.color');\n        outline-offset: dt('paginator.nav.button.focus.ring.offset');\n    }\n\n    .p-paginator-page:not(.p-disabled):not(.p-paginator-page-selected):hover,\n    .p-paginator-first:not(.p-disabled):hover,\n    .p-paginator-prev:not(.p-disabled):hover,\n    .p-paginator-next:not(.p-disabled):hover,\n    .p-paginator-last:not(.p-disabled):hover {\n        background: dt('paginator.nav.button.hover.background');\n        color: dt('paginator.nav.button.hover.color');\n    }\n\n    .p-paginator-page.p-paginator-page-selected {\n        background: dt('paginator.nav.button.selected.background');\n        color: dt('paginator.nav.button.selected.color');\n    }\n\n    .p-paginator-current {\n        color: dt('paginator.current.page.report.color');\n    }\n\n    .p-paginator-pages {\n        display: flex;\n        align-items: center;\n        gap: dt('paginator.gap');\n    }\n\n    .p-paginator-jtp-input .p-inputtext {\n        max-width: dt('paginator.jump.to.page.input.max.width');\n    }\n\n    .p-paginator-first:dir(rtl),\n    .p-paginator-prev:dir(rtl),\n    .p-paginator-next:dir(rtl),\n    .p-paginator-last:dir(rtl) {\n        transform: rotate(180deg);\n    }\n";

// node_modules/primeng/fesm2022/primeng-paginator.mjs
var _c05 = ["dropdownicon"];
var _c111 = ["firstpagelinkicon"];
var _c27 = ["previouspagelinkicon"];
var _c33 = ["lastpagelinkicon"];
var _c42 = ["nextpagelinkicon"];
var _c52 = (a0) => ({
  $implicit: a0
});
var _c62 = (a0) => ({
  pageLink: a0
});
function Paginator_div_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Paginator_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtemplate(1, Paginator_div_0_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("contentStart"));
    ɵɵproperty("pBind", ctx_r0.ptm("contentStart"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.templateLeft)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c52, ctx_r0.paginatorState));
  }
}
function Paginator_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("current"));
    ɵɵproperty("pBind", ctx_r0.ptm("current"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.currentPageReport);
  }
}
function Paginator_button_2__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 14);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r0.cx("firstIcon"));
    ɵɵproperty("pBind", ctx_r0.ptm("firstIcon"));
  }
}
function Paginator_button_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Paginator_button_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_button_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_button_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, Paginator_button_2_span_2_1_Template, 1, 0, null, 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r0.cx("firstIcon"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.firstPageLinkIconTemplate || ctx_r0._firstPageLinkIconTemplate);
  }
}
function Paginator_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function Paginator_button_2_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.changePageToFirst($event));
    });
    ɵɵtemplate(1, Paginator_button_2__svg_svg_1_Template, 1, 3, "svg", 13)(2, Paginator_button_2_span_2_Template, 2, 3, "span", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("first"));
    ɵɵproperty("pBind", ctx_r0.ptm("first"));
    ɵɵattribute("aria-label", ctx_r0.getAriaLabel("firstPageLabel"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.firstPageLinkIconTemplate && !ctx_r0._firstPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.firstPageLinkIconTemplate || ctx_r0._firstPageLinkIconTemplate);
  }
}
function Paginator__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 16);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("prevIcon"));
    ɵɵproperty("pBind", ctx_r0.ptm("prevIcon"));
  }
}
function Paginator_span_5_1_ng_template_0_Template(rf, ctx) {
}
function Paginator_span_5_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_span_5_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, Paginator_span_5_1_Template, 1, 0, null, 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("prevIcon"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.previousPageLinkIconTemplate || ctx_r0._previousPageLinkIconTemplate);
  }
}
function Paginator_span_6_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 12);
    ɵɵlistener("click", function Paginator_span_6_button_1_Template_button_click_0_listener($event) {
      const pageLink_r4 = ɵɵrestoreView(_r3).$implicit;
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onPageLinkClick($event, pageLink_r4 - 1));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const pageLink_r4 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r0.cx("page", ɵɵpureFunction1(6, _c62, pageLink_r4)));
    ɵɵproperty("pBind", ctx_r0.ptm("page"));
    ɵɵattribute("aria-label", ctx_r0.getPageAriaLabel(pageLink_r4))("aria-current", pageLink_r4 - 1 == ctx_r0.getPage() ? "page" : void 0);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.getLocalization(pageLink_r4), " ");
  }
}
function Paginator_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtemplate(1, Paginator_span_6_button_1_Template, 2, 8, "button", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("pages"));
    ɵɵproperty("pBind", ctx_r0.ptm("pages"));
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.pageLinks);
  }
}
function Paginator_p_select_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵtextInterpolate(ctx_r0.currentPageReport);
  }
}
function Paginator_p_select_7_ng_container_2_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Paginator_p_select_7_ng_container_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_p_select_7_ng_container_2_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 11);
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.jumpToPageItemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c52, item_r6));
  }
}
function Paginator_p_select_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Paginator_p_select_7_ng_container_2_ng_template_1_Template, 1, 4, "ng-template", 21);
    ɵɵelementContainerEnd();
  }
}
function Paginator_p_select_7_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Paginator_p_select_7_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_p_select_7_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 15);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.dropdownIconTemplate || ctx_r0._dropdownIconTemplate);
  }
}
function Paginator_p_select_7_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_p_select_7_3_ng_template_0_Template, 1, 1, "ng-template", 22);
  }
}
function Paginator_p_select_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-select", 18);
    ɵɵlistener("onChange", function Paginator_p_select_7_Template_p_select_onChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onPageDropdownChange($event));
    });
    ɵɵtemplate(1, Paginator_p_select_7_ng_template_1_Template, 1, 1, "ng-template", 19)(2, Paginator_p_select_7_ng_container_2_Template, 2, 0, "ng-container", 20)(3, Paginator_p_select_7_3_Template, 1, 0, null, 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("options", ctx_r0.pageItems)("ngModel", ctx_r0.getPage())("disabled", ctx_r0.empty())("styleClass", ctx_r0.cx("pcJumpToPageDropdown"))("appendTo", ctx_r0.dropdownAppendTo || ctx_r0.$appendTo())("scrollHeight", ctx_r0.dropdownScrollHeight)("pt", ctx_r0.ptm("pcJumpToPageDropdown"));
    ɵɵattribute("aria-label", ctx_r0.getAriaLabel("jumpToPageDropdownLabel"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.jumpToPageItemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.dropdownIconTemplate || ctx_r0._dropdownIconTemplate);
  }
}
function Paginator__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 23);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("nextIcon"));
    ɵɵproperty("pBind", ctx_r0.ptm("nextIcon"));
  }
}
function Paginator_span_10_1_ng_template_0_Template(rf, ctx) {
}
function Paginator_span_10_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_span_10_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_span_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, Paginator_span_10_1_Template, 1, 0, null, 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("nextIcon"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nextPageLinkIconTemplate || ctx_r0._nextPageLinkIconTemplate);
  }
}
function Paginator_button_11__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 25);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r0.cx("lastIcon"));
    ɵɵproperty("pBind", ctx_r0.ptm("lastIcon"));
  }
}
function Paginator_button_11_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Paginator_button_11_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_button_11_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Paginator_button_11_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, Paginator_button_11_span_2_1_Template, 1, 0, null, 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r0.cx("lastIcon"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.lastPageLinkIconTemplate || ctx_r0._lastPageLinkIconTemplate);
  }
}
function Paginator_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 2);
    ɵɵlistener("click", function Paginator_button_11_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.changePageToLast($event));
    });
    ɵɵtemplate(1, Paginator_button_11__svg_svg_1_Template, 1, 3, "svg", 24)(2, Paginator_button_11_span_2_Template, 2, 3, "span", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("last"));
    ɵɵproperty("pBind", ctx_r0.ptm("last"))("disabled", ctx_r0.isLastPage() || ctx_r0.empty());
    ɵɵattribute("aria-label", ctx_r0.getAriaLabel("lastPageLabel"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.lastPageLinkIconTemplate && !ctx_r0._lastPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.lastPageLinkIconTemplate || ctx_r0._lastPageLinkIconTemplate);
  }
}
function Paginator_p_inputnumber_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-inputnumber", 26);
    ɵɵlistener("ngModelChange", function Paginator_p_inputnumber_12_Template_p_inputnumber_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.changePage($event - 1));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("pcJumpToPageInput"));
    ɵɵproperty("pt", ctx_r0.ptm("pcJumpToPageInput"))("ngModel", ctx_r0.currentPage())("disabled", ctx_r0.empty());
  }
}
function Paginator_p_select_13_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Paginator_p_select_13_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_p_select_13_ng_container_1_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 11);
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.dropdownItemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c52, item_r10));
  }
}
function Paginator_p_select_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Paginator_p_select_13_ng_container_1_ng_template_1_Template, 1, 4, "ng-template", 21);
    ɵɵelementContainerEnd();
  }
}
function Paginator_p_select_13_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Paginator_p_select_13_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_p_select_13_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 15);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.dropdownIconTemplate || ctx_r0._dropdownIconTemplate);
  }
}
function Paginator_p_select_13_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Paginator_p_select_13_2_ng_template_0_Template, 1, 1, "ng-template", 22);
  }
}
function Paginator_p_select_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-select", 27);
    ɵɵtwoWayListener("ngModelChange", function Paginator_p_select_13_Template_p_select_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r0 = ɵɵnextContext();
      ɵɵtwoWayBindingSet(ctx_r0.rows, $event) || (ctx_r0.rows = $event);
      return ɵɵresetView($event);
    });
    ɵɵlistener("onChange", function Paginator_p_select_13_Template_p_select_onChange_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onRppChange($event));
    });
    ɵɵtemplate(1, Paginator_p_select_13_ng_container_1_Template, 2, 0, "ng-container", 20)(2, Paginator_p_select_13_2_Template, 1, 0, null, 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("options", ctx_r0.rowsPerPageItems);
    ɵɵtwoWayProperty("ngModel", ctx_r0.rows);
    ɵɵproperty("styleClass", ctx_r0.cx("pcRowPerPageDropdown"))("disabled", ctx_r0.empty())("appendTo", ctx_r0.dropdownAppendTo || ctx_r0.$appendTo())("scrollHeight", ctx_r0.dropdownScrollHeight)("ariaLabel", ctx_r0.getAriaLabel("rowsPerPageLabel"))("pt", ctx_r0.ptm("pcRowPerPageDropdown"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.dropdownItemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.dropdownIconTemplate || ctx_r0._dropdownIconTemplate);
  }
}
function Paginator_div_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Paginator_div_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtemplate(1, Paginator_div_14_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("contentEnd"));
    ɵɵproperty("pBind", ctx_r0.ptm("contentEnd"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.templateRight)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c52, ctx_r0.paginatorState));
  }
}
var classes4 = {
  paginator: ({
    instance
  }) => ["p-paginator p-component"],
  content: "p-paginator-content",
  contentStart: "p-paginator-content-start",
  contentEnd: "p-paginator-content-end",
  first: ({
    instance
  }) => ["p-paginator-first", {
    "p-disabled": instance.isFirstPage() || instance.empty()
  }],
  firstIcon: "p-paginator-first-icon",
  prev: ({
    instance
  }) => ["p-paginator-prev", {
    "p-disabled": instance.isFirstPage() || instance.empty()
  }],
  prevIcon: "p-paginator-prev-icon",
  next: ({
    instance
  }) => ["p-paginator-next", {
    "p-disabled": instance.isLastPage() || instance.empty()
  }],
  nextIcon: "p-paginator-next-icon",
  last: ({
    instance
  }) => ["p-paginator-last", {
    "p-disabled": instance.isLastPage() || instance.empty()
  }],
  lastIcon: "p-paginator-last-icon",
  pages: "p-paginator-pages",
  page: ({
    instance,
    pageLink
  }) => ["p-paginator-page", {
    "p-paginator-page-selected": pageLink - 1 == instance.getPage()
  }],
  current: "p-paginator-current",
  pcRowPerPageDropdown: "p-paginator-rpp-dropdown",
  pcJumpToPageDropdown: "p-paginator-jtp-dropdown",
  pcJumpToPageInput: "p-paginator-jtp-input"
};
var PaginatorStyle = class _PaginatorStyle extends BaseStyle {
  name = "paginator";
  style = style9;
  classes = classes4;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵPaginatorStyle_BaseFactory;
    return function PaginatorStyle_Factory(__ngFactoryType__) {
      return (ɵPaginatorStyle_BaseFactory || (ɵPaginatorStyle_BaseFactory = ɵɵgetInheritedFactory(_PaginatorStyle)))(__ngFactoryType__ || _PaginatorStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _PaginatorStyle,
    factory: _PaginatorStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginatorStyle, [{
    type: Injectable
  }], null, null);
})();
var PaginatorClasses;
(function(PaginatorClasses2) {
  PaginatorClasses2["paginator"] = "p-paginator";
  PaginatorClasses2["contentStart"] = "p-paginator-content-start";
  PaginatorClasses2["contentEnd"] = "p-paginator-content-end";
  PaginatorClasses2["first"] = "p-paginator-first";
  PaginatorClasses2["firstIcon"] = "p-paginator-first-icon";
  PaginatorClasses2["prev"] = "p-paginator-prev";
  PaginatorClasses2["prevIcon"] = "p-paginator-prev-icon";
  PaginatorClasses2["next"] = "p-paginator-next";
  PaginatorClasses2["nextIcon"] = "p-paginator-next-icon";
  PaginatorClasses2["last"] = "p-paginator-last";
  PaginatorClasses2["lastIcon"] = "p-paginator-last-icon";
  PaginatorClasses2["pages"] = "p-paginator-pages";
  PaginatorClasses2["page"] = "p-paginator-page";
  PaginatorClasses2["current"] = "p-paginator-current";
  PaginatorClasses2["pcRowPerPageDropdown"] = "p-paginator-rpp-dropdown";
  PaginatorClasses2["pcJumpToPageDropdown"] = "p-paginator-jtp-dropdown";
  PaginatorClasses2["pcJumpToPageInput"] = "p-paginator-jtp-input";
})(PaginatorClasses || (PaginatorClasses = {}));
var PAGINATOR_INSTANCE = new InjectionToken("PAGINATOR_INSTANCE");
var Paginator = class _Paginator extends BaseComponent {
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcPaginator = inject(PAGINATOR_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  /**
   * Number of page links to display.
   * @group Props
   */
  pageLinkSize = 5;
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Whether to show it even there is only one page.
   * @group Props
   */
  alwaysShow = true;
  /**
   * Target element to attach the dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @deprecated since v20.0.0. Use `appendTo` instead.
   * @group Props
   */
  dropdownAppendTo;
  /**
   * Template instance to inject into the left side of the paginator.
   * @param {PaginatorState} context - Paginator state.
   * @group Props
   */
  templateLeft;
  /**
   * Template instance to inject into the right side of the paginator.
   * @param {PaginatorState} context - Paginator state.
   * @group Props
   */
  templateRight;
  /**
   * Dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  dropdownScrollHeight = "200px";
  /**
   * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
   * @group Props
   */
  currentPageReportTemplate = "{currentPage} of {totalPages}";
  /**
   * Whether to display current page report.
   * @group Props
   */
  showCurrentPageReport;
  /**
   * When enabled, icons are displayed on paginator to go first and last page.
   * @group Props
   */
  showFirstLastIcon = true;
  /**
   * Number of total records.
   * @group Props
   */
  totalRecords = 0;
  /**
   * Data count to display per page.
   * @group Props
   */
  rows = 0;
  /**
   * Array of integer/object values to display inside rows per page dropdown. A object that have 'showAll' key can be added to it to show all data. Exp; [10,20,30,{showAll:'All'}]
   * @group Props
   */
  rowsPerPageOptions;
  /**
   * Whether to display a dropdown to navigate to any page.
   * @group Props
   */
  showJumpToPageDropdown;
  /**
   * Whether to display a input to navigate to any page.
   * @group Props
   */
  showJumpToPageInput;
  /**
   * Template instance to inject into the jump to page dropdown item inside in the paginator.
   * @param {Object} context - item instance.
   * @group Props
   */
  jumpToPageItemTemplate;
  /**
   * Whether to show page links.
   * @group Props
   */
  showPageLinks = true;
  /**
   * Locale to be used in formatting.
   * @group Props
   */
  locale;
  /**
   * Template instance to inject into the rows per page dropdown item inside in the paginator.
   * @param {Object} context - item instance.
   * @group Props
   */
  dropdownItemTemplate;
  /**
   * Zero-relative number of the first row to be displayed.
   * @group Props
   */
  get first() {
    return this._first;
  }
  set first(val) {
    this._first = val;
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
   * Callback to invoke when page changes, the event object contains information about the new state.
   * @param {PaginatorState} event - Paginator state.
   * @group Emits
   */
  onPageChange = new EventEmitter();
  /**
   * Template for the dropdown icon.
   * @group Templates
   */
  dropdownIconTemplate;
  /**
   * Template for the first page link icon.
   * @group Templates
   */
  firstPageLinkIconTemplate;
  /**
   * Template for the previous page link icon.
   * @group Templates
   */
  previousPageLinkIconTemplate;
  /**
   * Template for the last page link icon.
   * @group Templates
   */
  lastPageLinkIconTemplate;
  /**
   * Template for the next page link icon.
   * @group Templates
   */
  nextPageLinkIconTemplate;
  templates;
  _dropdownIconTemplate;
  _firstPageLinkIconTemplate;
  _previousPageLinkIconTemplate;
  _lastPageLinkIconTemplate;
  _nextPageLinkIconTemplate;
  pageLinks;
  pageItems;
  rowsPerPageItems;
  paginatorState;
  _first = 0;
  _page = 0;
  _componentStyle = inject(PaginatorStyle);
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : []);
  get display() {
    return this.alwaysShow || this.pageLinks && this.pageLinks.length > 1 ? null : "none";
  }
  constructor() {
    super();
  }
  onInit() {
    this.updatePaginatorState();
  }
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "dropdownicon":
          this._dropdownIconTemplate = item.template;
          break;
        case "firstpagelinkicon":
          this._firstPageLinkIconTemplate = item.template;
          break;
        case "previouspagelinkicon":
          this._previousPageLinkIconTemplate = item.template;
          break;
        case "lastpagelinkicon":
          this._lastPageLinkIconTemplate = item.template;
          break;
        case "nextpagelinkicon":
          this._nextPageLinkIconTemplate = item.template;
          break;
      }
    });
  }
  getAriaLabel(labelType) {
    return this.config.translation.aria ? this.config.translation.aria[labelType] : void 0;
  }
  getPageAriaLabel(value) {
    return this.config.translation.aria ? this.config.translation.aria.pageLabel?.replace(/{page}/g, `${value}`) : void 0;
  }
  getLocalization(digit) {
    const numerals = [...new Intl.NumberFormat(this.locale, {
      useGrouping: false
    }).format(9876543210)].reverse();
    const index = new Map(numerals.map((d, i) => [i, d]));
    if (digit > 9) {
      const numbers = String(digit).split("");
      return numbers.map((number) => index.get(Number(number))).join("");
    } else {
      return index.get(digit);
    }
  }
  onChanges(simpleChange) {
    if (simpleChange.totalRecords) {
      this.updatePageLinks();
      this.updatePaginatorState();
      this.updateFirst();
      this.updateRowsPerPageOptions();
    }
    if (simpleChange.first) {
      this._first = simpleChange.first.currentValue;
      this.updatePageLinks();
      this.updatePaginatorState();
    }
    if (simpleChange.rows) {
      this.updatePageLinks();
      this.updatePaginatorState();
    }
    if (simpleChange.rowsPerPageOptions) {
      this.updateRowsPerPageOptions();
    }
    if (simpleChange.pageLinkSize) {
      this.updatePageLinks();
    }
  }
  updateRowsPerPageOptions() {
    if (this.rowsPerPageOptions) {
      this.rowsPerPageItems = [];
      let showAllItem = null;
      for (let opt of this.rowsPerPageOptions) {
        if (typeof opt == "object" && opt["showAll"]) {
          showAllItem = {
            label: opt["showAll"],
            value: this.totalRecords
          };
        } else {
          this.rowsPerPageItems.push({
            label: String(this.getLocalization(opt)),
            value: opt
          });
        }
      }
      if (showAllItem) {
        this.rowsPerPageItems.push(showAllItem);
      }
    }
  }
  isFirstPage() {
    return this.getPage() === 0;
  }
  isLastPage() {
    return this.getPage() === this.getPageCount() - 1;
  }
  getPageCount() {
    return Math.ceil(this.totalRecords / this.rows);
  }
  calculatePageLinkBoundaries() {
    let numberOfPages = this.getPageCount(), visiblePages = Math.min(this.pageLinkSize, numberOfPages);
    let start = Math.max(0, Math.ceil(this.getPage() - visiblePages / 2)), end = Math.min(numberOfPages - 1, start + visiblePages - 1);
    var delta = this.pageLinkSize - (end - start + 1);
    start = Math.max(0, start - delta);
    return [start, end];
  }
  updatePageLinks() {
    this.pageLinks = [];
    let boundaries = this.calculatePageLinkBoundaries(), start = boundaries[0], end = boundaries[1];
    for (let i = start; i <= end; i++) {
      this.pageLinks.push(i + 1);
    }
    if (this.showJumpToPageDropdown) {
      this.pageItems = [];
      for (let i = 0; i < this.getPageCount(); i++) {
        this.pageItems.push({
          label: String(i + 1),
          value: i
        });
      }
    }
  }
  changePage(p2) {
    var pc = this.getPageCount();
    if (p2 >= 0 && p2 < pc) {
      this._first = this.rows * p2;
      var state2 = {
        page: p2,
        first: this.first,
        rows: this.rows,
        pageCount: pc
      };
      this.updatePageLinks();
      this.onPageChange.emit(state2);
      this.updatePaginatorState();
    }
  }
  updateFirst() {
    const page = this.getPage();
    if (page > 0 && this.totalRecords && this.first >= this.totalRecords) {
      Promise.resolve(null).then(() => this.changePage(page - 1));
    }
  }
  getPage() {
    return Math.floor(this.first / this.rows);
  }
  changePageToFirst(event2) {
    if (!this.isFirstPage()) {
      this.changePage(0);
    }
    event2.preventDefault();
  }
  changePageToPrev(event2) {
    this.changePage(this.getPage() - 1);
    event2.preventDefault();
  }
  changePageToNext(event2) {
    this.changePage(this.getPage() + 1);
    event2.preventDefault();
  }
  changePageToLast(event2) {
    if (!this.isLastPage()) {
      this.changePage(this.getPageCount() - 1);
    }
    event2.preventDefault();
  }
  onPageLinkClick(event2, page) {
    this.changePage(page);
    event2.preventDefault();
  }
  onRppChange(event2) {
    this.changePage(this.getPage());
  }
  onPageDropdownChange(event2) {
    this.changePage(event2.value);
  }
  updatePaginatorState() {
    this.paginatorState = {
      page: this.getPage(),
      pageCount: this.getPageCount(),
      rows: this.rows,
      first: this.first,
      totalRecords: this.totalRecords
    };
  }
  empty() {
    return this.getPageCount() === 0;
  }
  currentPage() {
    return this.getPageCount() > 0 ? this.getPage() + 1 : 0;
  }
  get currentPageReport() {
    return this.currentPageReportTemplate.replace("{currentPage}", String(this.currentPage())).replace("{totalPages}", String(this.getPageCount())).replace("{first}", String(this.totalRecords > 0 ? this._first + 1 : 0)).replace("{last}", String(Math.min(this._first + this.rows, this.totalRecords))).replace("{rows}", String(this.rows)).replace("{totalRecords}", String(this.totalRecords));
  }
  static ɵfac = function Paginator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Paginator)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Paginator,
    selectors: [["p-paginator"]],
    contentQueries: function Paginator_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c05, 4);
        ɵɵcontentQuery(dirIndex, _c111, 4);
        ɵɵcontentQuery(dirIndex, _c27, 4);
        ɵɵcontentQuery(dirIndex, _c33, 4);
        ɵɵcontentQuery(dirIndex, _c42, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.dropdownIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.firstPageLinkIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.previousPageLinkIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.lastPageLinkIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.nextPageLinkIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.templates = _t2);
      }
    },
    hostVars: 4,
    hostBindings: function Paginator_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.cn(ctx.cx("paginator"), ctx.styleClass));
        ɵɵstyleProp("display", ctx.display);
      }
    },
    inputs: {
      pageLinkSize: [2, "pageLinkSize", "pageLinkSize", numberAttribute],
      styleClass: "styleClass",
      alwaysShow: [2, "alwaysShow", "alwaysShow", booleanAttribute],
      dropdownAppendTo: "dropdownAppendTo",
      templateLeft: "templateLeft",
      templateRight: "templateRight",
      dropdownScrollHeight: "dropdownScrollHeight",
      currentPageReportTemplate: "currentPageReportTemplate",
      showCurrentPageReport: [2, "showCurrentPageReport", "showCurrentPageReport", booleanAttribute],
      showFirstLastIcon: [2, "showFirstLastIcon", "showFirstLastIcon", booleanAttribute],
      totalRecords: [2, "totalRecords", "totalRecords", numberAttribute],
      rows: [2, "rows", "rows", numberAttribute],
      rowsPerPageOptions: "rowsPerPageOptions",
      showJumpToPageDropdown: [2, "showJumpToPageDropdown", "showJumpToPageDropdown", booleanAttribute],
      showJumpToPageInput: [2, "showJumpToPageInput", "showJumpToPageInput", booleanAttribute],
      jumpToPageItemTemplate: "jumpToPageItemTemplate",
      showPageLinks: [2, "showPageLinks", "showPageLinks", booleanAttribute],
      locale: "locale",
      dropdownItemTemplate: "dropdownItemTemplate",
      first: "first",
      appendTo: [1, "appendTo"]
    },
    outputs: {
      onPageChange: "onPageChange"
    },
    features: [ɵɵProvidersFeature([PaginatorStyle, {
      provide: PAGINATOR_INSTANCE,
      useExisting: _Paginator
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Paginator
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 15,
    vars: 23,
    consts: [[3, "pBind", "class", 4, "ngIf"], ["type", "button", "pRipple", "", 3, "pBind", "class", "click", 4, "ngIf"], ["type", "button", "pRipple", "", 3, "click", "pBind", "disabled"], ["data-p-icon", "angle-left", 3, "pBind", "class", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "options", "ngModel", "disabled", "styleClass", "appendTo", "scrollHeight", "pt", "onChange", 4, "ngIf"], ["data-p-icon", "angle-right", 3, "pBind", "class", 4, "ngIf"], ["type", "button", "pRipple", "", 3, "pBind", "disabled", "class", "click", 4, "ngIf"], [3, "pt", "ngModel", "class", "disabled", "ngModelChange", 4, "ngIf"], [3, "options", "ngModel", "styleClass", "disabled", "appendTo", "scrollHeight", "ariaLabel", "pt", "ngModelChange", "onChange", 4, "ngIf"], [3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", "pRipple", "", 3, "click", "pBind"], ["data-p-icon", "angle-double-left", 3, "pBind", "class", 4, "ngIf"], ["data-p-icon", "angle-double-left", 3, "pBind"], [4, "ngTemplateOutlet"], ["data-p-icon", "angle-left", 3, "pBind"], ["type", "button", "pRipple", "", 3, "pBind", "class", "click", 4, "ngFor", "ngForOf"], [3, "onChange", "options", "ngModel", "disabled", "styleClass", "appendTo", "scrollHeight", "pt"], ["pTemplate", "selectedItem"], [4, "ngIf"], ["pTemplate", "item"], ["pTemplate", "dropdownicon"], ["data-p-icon", "angle-right", 3, "pBind"], ["data-p-icon", "angle-double-right", 3, "pBind", "class", 4, "ngIf"], ["data-p-icon", "angle-double-right", 3, "pBind"], [3, "ngModelChange", "pt", "ngModel", "disabled"], [3, "ngModelChange", "onChange", "options", "ngModel", "styleClass", "disabled", "appendTo", "scrollHeight", "ariaLabel", "pt"]],
    template: function Paginator_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, Paginator_div_0_Template, 2, 7, "div", 0)(1, Paginator_span_1_Template, 2, 4, "span", 0)(2, Paginator_button_2_Template, 3, 6, "button", 1);
        ɵɵelementStart(3, "button", 2);
        ɵɵlistener("click", function Paginator_Template_button_click_3_listener($event) {
          return ctx.changePageToPrev($event);
        });
        ɵɵtemplate(4, Paginator__svg_svg_4_Template, 1, 3, "svg", 3)(5, Paginator_span_5_Template, 2, 3, "span", 4);
        ɵɵelementEnd();
        ɵɵtemplate(6, Paginator_span_6_Template, 2, 4, "span", 0)(7, Paginator_p_select_7_Template, 4, 10, "p-select", 5);
        ɵɵelementStart(8, "button", 2);
        ɵɵlistener("click", function Paginator_Template_button_click_8_listener($event) {
          return ctx.changePageToNext($event);
        });
        ɵɵtemplate(9, Paginator__svg_svg_9_Template, 1, 3, "svg", 6)(10, Paginator_span_10_Template, 2, 3, "span", 4);
        ɵɵelementEnd();
        ɵɵtemplate(11, Paginator_button_11_Template, 3, 7, "button", 7)(12, Paginator_p_inputnumber_12_Template, 1, 5, "p-inputnumber", 8)(13, Paginator_p_select_13_Template, 3, 10, "p-select", 9)(14, Paginator_div_14_Template, 2, 7, "div", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.templateLeft);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showCurrentPageReport);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showFirstLastIcon);
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("prev"));
        ɵɵproperty("pBind", ctx.ptm("prev"))("disabled", ctx.isFirstPage() || ctx.empty());
        ɵɵattribute("aria-label", ctx.getAriaLabel("prevPageLabel"));
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.previousPageLinkIconTemplate && !ctx._previousPageLinkIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.previousPageLinkIconTemplate || ctx._previousPageLinkIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showPageLinks);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showJumpToPageDropdown);
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("next"));
        ɵɵproperty("pBind", ctx.ptm("next"))("disabled", ctx.isLastPage() || ctx.empty());
        ɵɵattribute("aria-label", ctx.getAriaLabel("nextPageLabel"));
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.nextPageLinkIconTemplate && !ctx._nextPageLinkIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.nextPageLinkIconTemplate || ctx._nextPageLinkIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showFirstLastIcon);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showJumpToPageInput);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.rowsPerPageOptions);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.templateRight);
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, Select, InputNumber, FormsModule, NgControlStatus, NgModel, Ripple, AngleDoubleLeftIcon, AngleDoubleRightIcon, AngleLeftIcon, AngleRightIcon, SharedModule, PrimeTemplate, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Paginator, [{
    type: Component,
    args: [{
      selector: "p-paginator",
      standalone: true,
      imports: [CommonModule, Select, InputNumber, FormsModule, Ripple, AngleDoubleLeftIcon, AngleDoubleRightIcon, AngleLeftIcon, AngleRightIcon, SharedModule, Bind],
      template: `
        <div [pBind]="ptm('contentStart')" [class]="cx('contentStart')" *ngIf="templateLeft">
            <ng-container *ngTemplateOutlet="templateLeft; context: { $implicit: paginatorState }"></ng-container>
        </div>
        <span [pBind]="ptm('current')" [class]="cx('current')" *ngIf="showCurrentPageReport">{{ currentPageReport }}</span>
        <button [pBind]="ptm('first')" *ngIf="showFirstLastIcon" type="button" (click)="changePageToFirst($event)" pRipple [class]="cx('first')" [attr.aria-label]="getAriaLabel('firstPageLabel')">
            <svg [pBind]="ptm('firstIcon')" data-p-icon="angle-double-left" *ngIf="!firstPageLinkIconTemplate && !_firstPageLinkIconTemplate" [class]="cx('firstIcon')" />
            <span [class]="cx('firstIcon')" *ngIf="firstPageLinkIconTemplate || _firstPageLinkIconTemplate">
                <ng-template *ngTemplateOutlet="firstPageLinkIconTemplate || _firstPageLinkIconTemplate"></ng-template>
            </span>
        </button>
        <button [pBind]="ptm('prev')" type="button" [disabled]="isFirstPage() || empty()" (click)="changePageToPrev($event)" pRipple [class]="cx('prev')" [attr.aria-label]="getAriaLabel('prevPageLabel')">
            <svg [pBind]="ptm('prevIcon')" data-p-icon="angle-left" *ngIf="!previousPageLinkIconTemplate && !_previousPageLinkIconTemplate" [class]="cx('prevIcon')" />
            <span [class]="cx('prevIcon')" *ngIf="previousPageLinkIconTemplate || _previousPageLinkIconTemplate">
                <ng-template *ngTemplateOutlet="previousPageLinkIconTemplate || _previousPageLinkIconTemplate"></ng-template>
            </span>
        </button>
        <span [pBind]="ptm('pages')" [class]="cx('pages')" *ngIf="showPageLinks">
            <button
                [pBind]="ptm('page')"
                type="button"
                *ngFor="let pageLink of pageLinks"
                [class]="cx('page', { pageLink })"
                [attr.aria-label]="getPageAriaLabel(pageLink)"
                [attr.aria-current]="pageLink - 1 == getPage() ? 'page' : undefined"
                (click)="onPageLinkClick($event, pageLink - 1)"
                pRipple
            >
                {{ getLocalization(pageLink) }}
            </button>
        </span>
        <p-select
            [options]="pageItems"
            [ngModel]="getPage()"
            *ngIf="showJumpToPageDropdown"
            [disabled]="empty()"
            [attr.aria-label]="getAriaLabel('jumpToPageDropdownLabel')"
            [styleClass]="cx('pcJumpToPageDropdown')"
            (onChange)="onPageDropdownChange($event)"
            [appendTo]="dropdownAppendTo || $appendTo()"
            [scrollHeight]="dropdownScrollHeight"
            [pt]="ptm('pcJumpToPageDropdown')"
        >
            <ng-template pTemplate="selectedItem">{{ currentPageReport }}</ng-template>
            <ng-container *ngIf="jumpToPageItemTemplate">
                <ng-template let-item pTemplate="item">
                    <ng-container *ngTemplateOutlet="jumpToPageItemTemplate; context: { $implicit: item }"></ng-container>
                </ng-template>
            </ng-container>
            <ng-template pTemplate="dropdownicon" *ngIf="dropdownIconTemplate || _dropdownIconTemplate">
                <ng-container *ngTemplateOutlet="dropdownIconTemplate || _dropdownIconTemplate"></ng-container>
            </ng-template>
        </p-select>
        <button [pBind]="ptm('next')" type="button" [disabled]="isLastPage() || empty()" (click)="changePageToNext($event)" pRipple [class]="cx('next')" [attr.aria-label]="getAriaLabel('nextPageLabel')">
            <svg [pBind]="ptm('nextIcon')" data-p-icon="angle-right" *ngIf="!nextPageLinkIconTemplate && !_nextPageLinkIconTemplate" [class]="cx('nextIcon')" />
            <span [class]="cx('nextIcon')" *ngIf="nextPageLinkIconTemplate || _nextPageLinkIconTemplate">
                <ng-template *ngTemplateOutlet="nextPageLinkIconTemplate || _nextPageLinkIconTemplate"></ng-template>
            </span>
        </button>
        <button [pBind]="ptm('last')" *ngIf="showFirstLastIcon" type="button" [disabled]="isLastPage() || empty()" (click)="changePageToLast($event)" pRipple [class]="cx('last')" [attr.aria-label]="getAriaLabel('lastPageLabel')">
            <svg [pBind]="ptm('lastIcon')" data-p-icon="angle-double-right" *ngIf="!lastPageLinkIconTemplate && !_lastPageLinkIconTemplate" [class]="cx('lastIcon')" />
            <span [class]="cx('lastIcon')" *ngIf="lastPageLinkIconTemplate || _lastPageLinkIconTemplate">
                <ng-template *ngTemplateOutlet="lastPageLinkIconTemplate || _lastPageLinkIconTemplate"></ng-template>
            </span>
        </button>
        <p-inputnumber [pt]="ptm('pcJumpToPageInput')" *ngIf="showJumpToPageInput" [ngModel]="currentPage()" [class]="cx('pcJumpToPageInput')" [disabled]="empty()" (ngModelChange)="changePage($event - 1)"></p-inputnumber>
        <p-select
            [options]="rowsPerPageItems"
            [(ngModel)]="rows"
            *ngIf="rowsPerPageOptions"
            [styleClass]="cx('pcRowPerPageDropdown')"
            [disabled]="empty()"
            (onChange)="onRppChange($event)"
            [appendTo]="dropdownAppendTo || $appendTo()"
            [scrollHeight]="dropdownScrollHeight"
            [ariaLabel]="getAriaLabel('rowsPerPageLabel')"
            [pt]="ptm('pcRowPerPageDropdown')"
        >
            <ng-container *ngIf="dropdownItemTemplate">
                <ng-template let-item pTemplate="item">
                    <ng-container *ngTemplateOutlet="dropdownItemTemplate; context: { $implicit: item }"></ng-container>
                </ng-template>
            </ng-container>
            <ng-template pTemplate="dropdownicon" *ngIf="dropdownIconTemplate || _dropdownIconTemplate">
                <ng-container *ngTemplateOutlet="dropdownIconTemplate || _dropdownIconTemplate"></ng-container>
            </ng-template>
        </p-select>
        <div [pBind]="ptm('contentEnd')" [class]="cx('contentEnd')" *ngIf="templateRight">
            <ng-container *ngTemplateOutlet="templateRight; context: { $implicit: paginatorState }"></ng-container>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [PaginatorStyle, {
        provide: PAGINATOR_INSTANCE,
        useExisting: Paginator
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Paginator
      }],
      host: {
        "[class]": "cn(cx('paginator'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], () => [], {
    pageLinkSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    alwaysShow: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dropdownAppendTo: [{
      type: Input
    }],
    templateLeft: [{
      type: Input
    }],
    templateRight: [{
      type: Input
    }],
    dropdownScrollHeight: [{
      type: Input
    }],
    currentPageReportTemplate: [{
      type: Input
    }],
    showCurrentPageReport: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showFirstLastIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    totalRecords: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    rows: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    rowsPerPageOptions: [{
      type: Input
    }],
    showJumpToPageDropdown: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showJumpToPageInput: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    jumpToPageItemTemplate: [{
      type: Input
    }],
    showPageLinks: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    locale: [{
      type: Input
    }],
    dropdownItemTemplate: [{
      type: Input
    }],
    first: [{
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
    onPageChange: [{
      type: Output
    }],
    dropdownIconTemplate: [{
      type: ContentChild,
      args: ["dropdownicon", {
        descendants: false
      }]
    }],
    firstPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["firstpagelinkicon", {
        descendants: false
      }]
    }],
    previousPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["previouspagelinkicon", {
        descendants: false
      }]
    }],
    lastPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["lastpagelinkicon", {
        descendants: false
      }]
    }],
    nextPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["nextpagelinkicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    display: [{
      type: HostBinding,
      args: ["style.display"]
    }]
  });
})();
var PaginatorModule = class _PaginatorModule {
  static ɵfac = function PaginatorModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaginatorModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PaginatorModule,
    imports: [Paginator, SharedModule],
    exports: [Paginator, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Paginator, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaginatorModule, [{
    type: NgModule,
    args: [{
      imports: [Paginator, SharedModule],
      exports: [Paginator, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/radiobutton/index.mjs
var style10 = "\n    .p-radiobutton {\n        position: relative;\n        display: inline-flex;\n        user-select: none;\n        vertical-align: bottom;\n        width: dt('radiobutton.width');\n        height: dt('radiobutton.height');\n    }\n\n    .p-radiobutton-input {\n        cursor: pointer;\n        appearance: none;\n        position: absolute;\n        top: 0;\n        inset-inline-start: 0;\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        margin: 0;\n        opacity: 0;\n        z-index: 1;\n        outline: 0 none;\n        border: 1px solid transparent;\n        border-radius: 50%;\n    }\n\n    .p-radiobutton-box {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: 50%;\n        border: 1px solid dt('radiobutton.border.color');\n        background: dt('radiobutton.background');\n        width: dt('radiobutton.width');\n        height: dt('radiobutton.height');\n        transition:\n            background dt('radiobutton.transition.duration'),\n            color dt('radiobutton.transition.duration'),\n            border-color dt('radiobutton.transition.duration'),\n            box-shadow dt('radiobutton.transition.duration'),\n            outline-color dt('radiobutton.transition.duration');\n        outline-color: transparent;\n        box-shadow: dt('radiobutton.shadow');\n    }\n\n    .p-radiobutton-icon {\n        transition-duration: dt('radiobutton.transition.duration');\n        background: transparent;\n        font-size: dt('radiobutton.icon.size');\n        width: dt('radiobutton.icon.size');\n        height: dt('radiobutton.icon.size');\n        border-radius: 50%;\n        backface-visibility: hidden;\n        transform: translateZ(0) scale(0.1);\n    }\n\n    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {\n        border-color: dt('radiobutton.hover.border.color');\n    }\n\n    .p-radiobutton-checked .p-radiobutton-box {\n        border-color: dt('radiobutton.checked.border.color');\n        background: dt('radiobutton.checked.background');\n    }\n\n    .p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {\n        background: dt('radiobutton.icon.checked.color');\n        transform: translateZ(0) scale(1, 1);\n        visibility: visible;\n    }\n\n    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {\n        border-color: dt('radiobutton.checked.hover.border.color');\n        background: dt('radiobutton.checked.hover.background');\n    }\n\n    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {\n        background: dt('radiobutton.icon.checked.hover.color');\n    }\n\n    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {\n        border-color: dt('radiobutton.focus.border.color');\n        box-shadow: dt('radiobutton.focus.ring.shadow');\n        outline: dt('radiobutton.focus.ring.width') dt('radiobutton.focus.ring.style') dt('radiobutton.focus.ring.color');\n        outline-offset: dt('radiobutton.focus.ring.offset');\n    }\n\n    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {\n        border-color: dt('radiobutton.checked.focus.border.color');\n    }\n\n    .p-radiobutton.p-invalid > .p-radiobutton-box {\n        border-color: dt('radiobutton.invalid.border.color');\n    }\n\n    .p-radiobutton.p-variant-filled .p-radiobutton-box {\n        background: dt('radiobutton.filled.background');\n    }\n\n    .p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {\n        background: dt('radiobutton.checked.background');\n    }\n\n    .p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {\n        background: dt('radiobutton.checked.hover.background');\n    }\n\n    .p-radiobutton.p-disabled {\n        opacity: 1;\n    }\n\n    .p-radiobutton.p-disabled .p-radiobutton-box {\n        background: dt('radiobutton.disabled.background');\n        border-color: dt('radiobutton.checked.disabled.border.color');\n    }\n\n    .p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {\n        background: dt('radiobutton.icon.disabled.color');\n    }\n\n    .p-radiobutton-sm,\n    .p-radiobutton-sm .p-radiobutton-box {\n        width: dt('radiobutton.sm.width');\n        height: dt('radiobutton.sm.height');\n    }\n\n    .p-radiobutton-sm .p-radiobutton-icon {\n        font-size: dt('radiobutton.icon.sm.size');\n        width: dt('radiobutton.icon.sm.size');\n        height: dt('radiobutton.icon.sm.size');\n    }\n\n    .p-radiobutton-lg,\n    .p-radiobutton-lg .p-radiobutton-box {\n        width: dt('radiobutton.lg.width');\n        height: dt('radiobutton.lg.height');\n    }\n\n    .p-radiobutton-lg .p-radiobutton-icon {\n        font-size: dt('radiobutton.icon.lg.size');\n        width: dt('radiobutton.icon.lg.size');\n        height: dt('radiobutton.icon.lg.size');\n    }\n";

// node_modules/primeng/fesm2022/primeng-radiobutton.mjs
var _c06 = ["input"];
var style11 = (
  /*css*/
  `
    ${style10}

    /* For PrimeNG */
    p-radioButton.ng-invalid.ng-dirty .p-radiobutton-box,
    p-radio-button.ng-invalid.ng-dirty .p-radiobutton-box,
    p-radiobutton.ng-invalid.ng-dirty .p-radiobutton-box {
        border-color: dt('radiobutton.invalid.border.color');
    }
`
);
var classes5 = {
  root: ({
    instance
  }) => ["p-radiobutton p-component", {
    "p-radiobutton-checked": instance.checked,
    "p-disabled": instance.$disabled(),
    "p-invalid": instance.invalid(),
    "p-variant-filled": instance.$variant() === "filled",
    "p-radiobutton-sm p-inputfield-sm": instance.size() === "small",
    "p-radiobutton-lg p-inputfield-lg": instance.size() === "large"
  }],
  box: "p-radiobutton-box",
  input: "p-radiobutton-input",
  icon: "p-radiobutton-icon"
};
var RadioButtonStyle = class _RadioButtonStyle extends BaseStyle {
  name = "radiobutton";
  style = style11;
  classes = classes5;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵRadioButtonStyle_BaseFactory;
    return function RadioButtonStyle_Factory(__ngFactoryType__) {
      return (ɵRadioButtonStyle_BaseFactory || (ɵRadioButtonStyle_BaseFactory = ɵɵgetInheritedFactory(_RadioButtonStyle)))(__ngFactoryType__ || _RadioButtonStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _RadioButtonStyle,
    factory: _RadioButtonStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var RadioButtonClasses;
(function(RadioButtonClasses2) {
  RadioButtonClasses2["root"] = "p-radiobutton";
  RadioButtonClasses2["box"] = "p-radiobutton-box";
  RadioButtonClasses2["input"] = "p-radiobutton-input";
  RadioButtonClasses2["icon"] = "p-radiobutton-icon";
})(RadioButtonClasses || (RadioButtonClasses = {}));
var RADIOBUTTON_INSTANCE = new InjectionToken("RADIOBUTTON_INSTANCE");
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioButton),
  multi: true
};
var RadioControlRegistry = class _RadioControlRegistry {
  accessors = [];
  add(control, accessor) {
    this.accessors.push([control, accessor]);
  }
  remove(accessor) {
    this.accessors = this.accessors.filter((c) => {
      return c[1] !== accessor;
    });
  }
  select(accessor) {
    this.accessors.forEach((c) => {
      if (this.isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].writeValue(accessor.value);
      }
    });
  }
  isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) {
      return false;
    }
    return controlPair[0].control.root === accessor.control.control.root && controlPair[1].name() === accessor.name();
  }
  static ɵfac = function RadioControlRegistry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioControlRegistry)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _RadioControlRegistry,
    factory: _RadioControlRegistry.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioButton = class _RadioButton extends BaseEditableHolder {
  $pcRadioButton = inject(RADIOBUTTON_INSTANCE, {
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
   * Value of the radiobutton.
   * @group Props
   */
  value;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Used to define a string that labels the input element.
   * @group Props
   */
  ariaLabel;
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Allows to select a boolean value.
   * @group Props
   */
  binary;
  /**
   * Specifies the input variant of the component.
   * @defaultValue undefined
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
   * Callback to invoke on radio button click.
   * @param {RadioButtonClickEvent} event - Custom click event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when the receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  inputViewChild;
  $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{
    debugName: "$variant"
  }] : []);
  checked;
  focused;
  control;
  _componentStyle = inject(RadioButtonStyle);
  injector = inject(Injector);
  registry = inject(RadioControlRegistry);
  onInit() {
    this.control = this.injector.get(NgControl);
    this.registry.add(this.control, this);
  }
  onChange(event2) {
    if (!this.$disabled()) {
      this.select(event2);
    }
  }
  select(event2) {
    if (!this.$disabled()) {
      this.checked = true;
      this.writeModelValue(this.checked);
      this.onModelChange(this.value);
      this.registry.select(this);
      this.onClick.emit({
        originalEvent: event2,
        value: this.value
      });
    }
  }
  onInputFocus(event2) {
    this.focused = true;
    this.onFocus.emit(event2);
  }
  onInputBlur(event2) {
    this.focused = false;
    this.onModelTouched();
    this.onBlur.emit(event2);
  }
  /**
   * Applies focus to input field.
   * @group Method
   */
  focus() {
    this.inputViewChild.nativeElement.focus();
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    this.checked = !this.binary ? value == this.value : !!value;
    setModelValue(this.checked);
    this.cd.markForCheck();
  }
  onDestroy() {
    this.registry.remove(this);
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵRadioButton_BaseFactory;
    return function RadioButton_Factory(__ngFactoryType__) {
      return (ɵRadioButton_BaseFactory || (ɵRadioButton_BaseFactory = ɵɵgetInheritedFactory(_RadioButton)))(__ngFactoryType__ || _RadioButton);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _RadioButton,
    selectors: [["p-radioButton"], ["p-radiobutton"], ["p-radio-button"]],
    viewQuery: function RadioButton_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c06, 5);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.inputViewChild = _t2.first);
      }
    },
    hostVars: 2,
    hostBindings: function RadioButton_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.cx("root"));
      }
    },
    inputs: {
      value: "value",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      styleClass: "styleClass",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      binary: [2, "binary", "binary", booleanAttribute],
      variant: [1, "variant"],
      size: [1, "size"]
    },
    outputs: {
      onClick: "onClick",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [ɵɵProvidersFeature([RADIO_VALUE_ACCESSOR, RadioButtonStyle, {
      provide: RADIOBUTTON_INSTANCE,
      useExisting: _RadioButton
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _RadioButton
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 4,
    vars: 20,
    consts: [["input", ""], ["type", "radio", 3, "focus", "blur", "change", "checked", "pAutoFocus", "pBind"], [3, "pBind"]],
    template: function RadioButton_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "input", 1, 0);
        ɵɵlistener("focus", function RadioButton_Template_input_focus_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputFocus($event));
        })("blur", function RadioButton_Template_input_blur_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onInputBlur($event));
        })("change", function RadioButton_Template_input_change_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onChange($event));
        });
        ɵɵelementEnd();
        ɵɵelementStart(2, "div", 2);
        ɵɵelement(3, "div", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.cx("input"));
        ɵɵproperty("checked", ctx.checked)("pAutoFocus", ctx.autofocus)("pBind", ctx.ptm("input"));
        ɵɵattribute("id", ctx.inputId)("name", ctx.name())("required", ctx.required() ? "" : void 0)("disabled", ctx.$disabled() ? "" : void 0)("value", ctx.modelValue())("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("aria-checked", ctx.checked)("tabindex", ctx.tabindex);
        ɵɵadvance(2);
        ɵɵclassMap(ctx.cx("box"));
        ɵɵproperty("pBind", ctx.ptm("box"));
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("icon"));
        ɵɵproperty("pBind", ctx.ptm("icon"));
      }
    },
    dependencies: [CommonModule, AutoFocus, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButton, [{
    type: Component,
    args: [{
      selector: "p-radioButton, p-radiobutton, p-radio-button",
      standalone: true,
      imports: [CommonModule, AutoFocus, SharedModule, BindModule],
      template: `
        <input
            #input
            [attr.id]="inputId"
            type="radio"
            [class]="cx('input')"
            [attr.name]="name()"
            [attr.required]="required() ? '' : undefined"
            [attr.disabled]="$disabled() ? '' : undefined"
            [checked]="checked"
            [attr.value]="modelValue()"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-label]="ariaLabel"
            [attr.aria-checked]="checked"
            [attr.tabindex]="tabindex"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            (change)="onChange($event)"
            [pAutoFocus]="autofocus"
            [pBind]="ptm('input')"
        />
        <div [class]="cx('box')" [pBind]="ptm('box')">
            <div [class]="cx('icon')" [pBind]="ptm('icon')"></div>
        </div>
    `,
      providers: [RADIO_VALUE_ACCESSOR, RadioButtonStyle, {
        provide: RADIOBUTTON_INSTANCE,
        useExisting: RadioButton
      }, {
        provide: PARENT_INSTANCE,
        useExisting: RadioButton
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class]": "cx('root')"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    value: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    binary: [{
      type: Input,
      args: [{
        transform: booleanAttribute
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
    onClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input"]
    }]
  });
})();
var RadioButtonModule = class _RadioButtonModule {
  static ɵfac = function RadioButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RadioButtonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _RadioButtonModule,
    imports: [RadioButton, SharedModule],
    exports: [RadioButton, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [RadioButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonModule, [{
    type: NgModule,
    args: [{
      imports: [RadioButton, SharedModule],
      exports: [RadioButton, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/togglebutton/index.mjs
var style12 = "\n    .p-togglebutton {\n        display: inline-flex;\n        cursor: pointer;\n        user-select: none;\n        overflow: hidden;\n        position: relative;\n        color: dt('togglebutton.color');\n        background: dt('togglebutton.background');\n        border: 1px solid dt('togglebutton.border.color');\n        padding: dt('togglebutton.padding');\n        font-size: 1rem;\n        font-family: inherit;\n        font-feature-settings: inherit;\n        transition:\n            background dt('togglebutton.transition.duration'),\n            color dt('togglebutton.transition.duration'),\n            border-color dt('togglebutton.transition.duration'),\n            outline-color dt('togglebutton.transition.duration'),\n            box-shadow dt('togglebutton.transition.duration');\n        border-radius: dt('togglebutton.border.radius');\n        outline-color: transparent;\n        font-weight: dt('togglebutton.font.weight');\n    }\n\n    .p-togglebutton-content {\n        display: inline-flex;\n        flex: 1 1 auto;\n        align-items: center;\n        justify-content: center;\n        gap: dt('togglebutton.gap');\n        padding: dt('togglebutton.content.padding');\n        background: transparent;\n        border-radius: dt('togglebutton.content.border.radius');\n        transition:\n            background dt('togglebutton.transition.duration'),\n            color dt('togglebutton.transition.duration'),\n            border-color dt('togglebutton.transition.duration'),\n            outline-color dt('togglebutton.transition.duration'),\n            box-shadow dt('togglebutton.transition.duration');\n    }\n\n    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {\n        background: dt('togglebutton.hover.background');\n        color: dt('togglebutton.hover.color');\n    }\n\n    .p-togglebutton.p-togglebutton-checked {\n        background: dt('togglebutton.checked.background');\n        border-color: dt('togglebutton.checked.border.color');\n        color: dt('togglebutton.checked.color');\n    }\n\n    .p-togglebutton-checked .p-togglebutton-content {\n        background: dt('togglebutton.content.checked.background');\n        box-shadow: dt('togglebutton.content.checked.shadow');\n    }\n\n    .p-togglebutton:focus-visible {\n        box-shadow: dt('togglebutton.focus.ring.shadow');\n        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');\n        outline-offset: dt('togglebutton.focus.ring.offset');\n    }\n\n    .p-togglebutton.p-invalid {\n        border-color: dt('togglebutton.invalid.border.color');\n    }\n\n    .p-togglebutton:disabled {\n        opacity: 1;\n        cursor: default;\n        background: dt('togglebutton.disabled.background');\n        border-color: dt('togglebutton.disabled.border.color');\n        color: dt('togglebutton.disabled.color');\n    }\n\n    .p-togglebutton-label,\n    .p-togglebutton-icon {\n        position: relative;\n        transition: none;\n    }\n\n    .p-togglebutton-icon {\n        color: dt('togglebutton.icon.color');\n    }\n\n    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {\n        color: dt('togglebutton.icon.hover.color');\n    }\n\n    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {\n        color: dt('togglebutton.icon.checked.color');\n    }\n\n    .p-togglebutton:disabled .p-togglebutton-icon {\n        color: dt('togglebutton.icon.disabled.color');\n    }\n\n    .p-togglebutton-sm {\n        padding: dt('togglebutton.sm.padding');\n        font-size: dt('togglebutton.sm.font.size');\n    }\n\n    .p-togglebutton-sm .p-togglebutton-content {\n        padding: dt('togglebutton.content.sm.padding');\n    }\n\n    .p-togglebutton-lg {\n        padding: dt('togglebutton.lg.padding');\n        font-size: dt('togglebutton.lg.font.size');\n    }\n\n    .p-togglebutton-lg .p-togglebutton-content {\n        padding: dt('togglebutton.content.lg.padding');\n    }\n\n    .p-togglebutton-fluid {\n        width: 100%;\n    }\n";

// node_modules/primeng/fesm2022/primeng-togglebutton.mjs
var _c07 = ["icon"];
var _c112 = ["content"];
var _c28 = (a0) => ({
  $implicit: a0
});
function ToggleButton_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ToggleButton_Conditional_2_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 0);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("icon"), ctx_r0.checked ? ctx_r0.onIcon : ctx_r0.offIcon, ctx_r0.iconPos === "left" ? ctx_r0.cx("iconLeft") : ctx_r0.cx("iconRight")));
    ɵɵproperty("pBind", ctx_r0.ptm("icon"));
  }
}
function ToggleButton_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ToggleButton_Conditional_2_Conditional_0_Conditional_0_Template, 1, 3, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r0.onIcon || ctx_r0.offIcon ? 0 : -1);
  }
}
function ToggleButton_Conditional_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ToggleButton_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ToggleButton_Conditional_2_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c28, ctx_r0.checked));
  }
}
function ToggleButton_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, ToggleButton_Conditional_2_Conditional_0_Template, 1, 1)(1, ToggleButton_Conditional_2_Conditional_1_Template, 1, 4, "ng-container");
    ɵɵelementStart(2, "span", 0);
    ɵɵtext(3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵconditional(!ctx_r0.iconTemplate ? 0 : 1);
    ɵɵadvance(2);
    ɵɵclassMap(ctx_r0.cx("label"));
    ɵɵproperty("pBind", ctx_r0.ptm("label"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.checked ? ctx_r0.hasOnLabel ? ctx_r0.onLabel : " " : ctx_r0.hasOffLabel ? ctx_r0.offLabel : " ");
  }
}
var style13 = (
  /*css*/
  `
    ${style12}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`
);
var classes6 = {
  root: ({
    instance
  }) => ["p-togglebutton p-component", {
    "p-togglebutton-checked": instance.checked,
    "p-invalid": instance.invalid(),
    "p-disabled": instance.$disabled(),
    "p-togglebutton-sm p-inputfield-sm": instance.size === "small",
    "p-togglebutton-lg p-inputfield-lg": instance.size === "large",
    "p-togglebutton-fluid": instance.fluid()
  }],
  content: "p-togglebutton-content",
  icon: "p-togglebutton-icon",
  iconLeft: "p-togglebutton-icon-left",
  iconRight: "p-togglebutton-icon-right",
  label: "p-togglebutton-label"
};
var ToggleButtonStyle = class _ToggleButtonStyle extends BaseStyle {
  name = "togglebutton";
  style = style13;
  classes = classes6;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵToggleButtonStyle_BaseFactory;
    return function ToggleButtonStyle_Factory(__ngFactoryType__) {
      return (ɵToggleButtonStyle_BaseFactory || (ɵToggleButtonStyle_BaseFactory = ɵɵgetInheritedFactory(_ToggleButtonStyle)))(__ngFactoryType__ || _ToggleButtonStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _ToggleButtonStyle,
    factory: _ToggleButtonStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var ToggleButtonClasses;
(function(ToggleButtonClasses2) {
  ToggleButtonClasses2["root"] = "p-togglebutton";
  ToggleButtonClasses2["icon"] = "p-togglebutton-icon";
  ToggleButtonClasses2["iconLeft"] = "p-togglebutton-icon-left";
  ToggleButtonClasses2["iconRight"] = "p-togglebutton-icon-right";
  ToggleButtonClasses2["label"] = "p-togglebutton-label";
})(ToggleButtonClasses || (ToggleButtonClasses = {}));
var TOGGLEBUTTON_INSTANCE = new InjectionToken("TOGGLEBUTTON_INSTANCE");
var TOGGLEBUTTON_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleButton),
  multi: true
};
var ToggleButton = class _ToggleButton extends BaseEditableHolder {
  $pcToggleButton = inject(TOGGLEBUTTON_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  onKeyDown(event2) {
    switch (event2.code) {
      case "Enter":
        this.toggle(event2);
        event2.preventDefault();
        break;
      case "Space":
        this.toggle(event2);
        event2.preventDefault();
        break;
    }
  }
  toggle(event2) {
    if (!this.$disabled() && !(this.allowEmpty === false && this.checked)) {
      this.checked = !this.checked;
      this.writeModelValue(this.checked);
      this.onModelChange(this.checked);
      this.onModelTouched();
      this.onChange.emit({
        originalEvent: event2,
        checked: this.checked
      });
      this.cd.markForCheck();
    }
  }
  /**
   * Label for the on state.
   * @group Props
   */
  onLabel = "Yes";
  /**
   * Label for the off state.
   * @group Props
   */
  offLabel = "No";
  /**
   * Icon for the on state.
   * @group Props
   */
  onIcon;
  /**
   * Icon for the off state.
   * @group Props
   */
  offIcon;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Style class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "left";
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * Whether selection can not be cleared.
   * @group Props
   */
  allowEmpty;
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, ...ngDevMode ? [{
    debugName: "fluid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * Callback to invoke on value change.
   * @param {ToggleButtonChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Custom icon template.
   * @group Templates
   */
  iconTemplate;
  /**
   * Custom content template.
   * @group Templates
   */
  contentTemplate;
  templates;
  checked = false;
  onInit() {
    if (this.checked === null || this.checked === void 0) {
      this.checked = false;
    }
  }
  _componentStyle = inject(ToggleButtonStyle);
  onBlur() {
    this.onModelTouched();
  }
  get hasOnLabel() {
    return this.onLabel && this.onLabel.length > 0;
  }
  get hasOffLabel() {
    return this.offLabel && this.offLabel.length > 0;
  }
  get active() {
    return this.checked === true;
  }
  _iconTemplate;
  _contentTemplate;
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._iconTemplate = item.template;
          break;
        case "content":
          this._contentTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    this.checked = value;
    setModelValue(value);
    this.cd.markForCheck();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵToggleButton_BaseFactory;
    return function ToggleButton_Factory(__ngFactoryType__) {
      return (ɵToggleButton_BaseFactory || (ɵToggleButton_BaseFactory = ɵɵgetInheritedFactory(_ToggleButton)))(__ngFactoryType__ || _ToggleButton);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _ToggleButton,
    selectors: [["p-toggleButton"], ["p-togglebutton"], ["p-toggle-button"]],
    contentQueries: function ToggleButton_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c07, 4);
        ɵɵcontentQuery(dirIndex, _c112, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.iconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.contentTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.templates = _t2);
      }
    },
    hostVars: 8,
    hostBindings: function ToggleButton_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown", function ToggleButton_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        })("click", function ToggleButton_click_HostBindingHandler($event) {
          return ctx.toggle($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("aria-pressed", ctx.checked ? "true" : "false")("role", "button")("tabindex", ctx.tabindex !== void 0 ? ctx.tabindex : !ctx.$disabled() ? 0 : -1)("data-pc-name", "togglebutton");
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      onLabel: "onLabel",
      offLabel: "offLabel",
      onIcon: "onIcon",
      offIcon: "offIcon",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      styleClass: "styleClass",
      inputId: "inputId",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      iconPos: "iconPos",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      size: "size",
      allowEmpty: "allowEmpty",
      fluid: [1, "fluid"]
    },
    outputs: {
      onChange: "onChange"
    },
    features: [ɵɵProvidersFeature([TOGGLEBUTTON_VALUE_ACCESSOR, ToggleButtonStyle, {
      provide: TOGGLEBUTTON_INSTANCE,
      useExisting: _ToggleButton
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ToggleButton
    }]), ɵɵHostDirectivesFeature([Ripple, Bind]), ɵɵInheritDefinitionFeature],
    decls: 3,
    vars: 8,
    consts: [[3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "pBind"]],
    template: function ToggleButton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "span", 0);
        ɵɵtemplate(1, ToggleButton_ng_container_1_Template, 1, 0, "ng-container", 1);
        ɵɵconditionalCreate(2, ToggleButton_Conditional_2_Template, 4, 5);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.cx("content"));
        ɵɵproperty("pBind", ctx.ptm("content"));
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c28, ctx.checked));
        ɵɵadvance();
        ɵɵconditional(!ctx.contentTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButton, [{
    type: Component,
    args: [{
      selector: "p-toggleButton, p-togglebutton, p-toggle-button",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      hostDirectives: [{
        directive: Ripple
      }, Bind],
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.aria-labelledby]": "ariaLabelledBy",
        "[attr.aria-label]": "ariaLabel",
        "[attr.aria-pressed]": 'checked ? "true" : "false"',
        "[attr.role]": '"button"',
        "[attr.tabindex]": "tabindex !== undefined ? tabindex : (!$disabled() ? 0 : -1)",
        "[attr.data-pc-name]": "'togglebutton'"
      },
      template: `<span [class]="cx('content')" [pBind]="ptm('content')">
        <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: checked }"></ng-container>
        @if (!contentTemplate) {
            @if (!iconTemplate) {
                @if (onIcon || offIcon) {
                    <span [class]="cn(cx('icon'), checked ? this.onIcon : this.offIcon, iconPos === 'left' ? cx('iconLeft') : cx('iconRight'))" [pBind]="ptm('icon')"></span>
                }
            } @else {
                <ng-container *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { $implicit: checked }"></ng-container>
            }
            <span [class]="cx('label')" [pBind]="ptm('label')">{{ checked ? (hasOnLabel ? onLabel : ' ') : hasOffLabel ? offLabel : ' ' }}</span>
        }
    </span>`,
      providers: [TOGGLEBUTTON_VALUE_ACCESSOR, ToggleButtonStyle, {
        provide: TOGGLEBUTTON_INSTANCE,
        useExisting: ToggleButton
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ToggleButton
      }],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    toggle: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onLabel: [{
      type: Input
    }],
    offLabel: [{
      type: Input
    }],
    onIcon: [{
      type: Input
    }],
    offIcon: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    iconPos: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    allowEmpty: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fluid",
        required: false
      }]
    }],
    onChange: [{
      type: Output
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
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
    }]
  });
})();
var ToggleButtonModule = class _ToggleButtonModule {
  static ɵfac = function ToggleButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToggleButtonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ToggleButtonModule,
    imports: [ToggleButton, SharedModule],
    exports: [ToggleButton, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [ToggleButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonModule, [{
    type: NgModule,
    args: [{
      imports: [ToggleButton, SharedModule],
      exports: [ToggleButton, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/selectbutton/index.mjs
var style14 = "\n    .p-selectbutton {\n        display: inline-flex;\n        user-select: none;\n        vertical-align: bottom;\n        outline-color: transparent;\n        border-radius: dt('selectbutton.border.radius');\n    }\n\n    .p-selectbutton .p-togglebutton {\n        border-radius: 0;\n        border-width: 1px 1px 1px 0;\n    }\n\n    .p-selectbutton .p-togglebutton:focus-visible {\n        position: relative;\n        z-index: 1;\n    }\n\n    .p-selectbutton .p-togglebutton:first-child {\n        border-inline-start-width: 1px;\n        border-start-start-radius: dt('selectbutton.border.radius');\n        border-end-start-radius: dt('selectbutton.border.radius');\n    }\n\n    .p-selectbutton .p-togglebutton:last-child {\n        border-start-end-radius: dt('selectbutton.border.radius');\n        border-end-end-radius: dt('selectbutton.border.radius');\n    }\n\n    .p-selectbutton.p-invalid {\n        outline: 1px solid dt('selectbutton.invalid.border.color');\n        outline-offset: 0;\n    }\n\n    .p-selectbutton-fluid {\n        width: 100%;\n    }\n    \n    .p-selectbutton-fluid .p-togglebutton {\n        flex: 1 1 0;\n    }\n";

// node_modules/primeng/fesm2022/primeng-selectbutton.mjs
var _c08 = ["item"];
var _c113 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function _forTrack0($index, $item) {
  return this.getOptionLabel($item);
}
function SelectButton_For_1_Conditional_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function SelectButton_For_1_Conditional_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SelectButton_For_1_Conditional_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    const option_r3 = ctx_r5.$implicit;
    const ɵ$index_1_r4 = ctx_r5.$index;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r4.itemTemplate || ctx_r4._itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c113, option_r3, ɵ$index_1_r4));
  }
}
function SelectButton_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SelectButton_For_1_Conditional_1_ng_template_0_Template, 1, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
  }
}
function SelectButton_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-togglebutton", 2);
    ɵɵlistener("onChange", function SelectButton_For_1_Template_p_togglebutton_onChange_0_listener($event) {
      const ctx_r1 = ɵɵrestoreView(_r1);
      const option_r3 = ctx_r1.$implicit;
      const ɵ$index_1_r4 = ctx_r1.$index;
      const ctx_r4 = ɵɵnextContext();
      return ɵɵresetView(ctx_r4.onOptionSelect($event, option_r3, ɵ$index_1_r4));
    });
    ɵɵconditionalCreate(1, SelectButton_For_1_Conditional_1_Template, 2, 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("autofocus", ctx_r4.autofocus)("styleClass", ctx_r4.styleClass)("ngModel", ctx_r4.isSelected(option_r3))("onLabel", ctx_r4.getOptionLabel(option_r3))("offLabel", ctx_r4.getOptionLabel(option_r3))("disabled", ctx_r4.$disabled() || ctx_r4.isOptionDisabled(option_r3))("allowEmpty", ctx_r4.getAllowEmpty())("size", ctx_r4.size())("fluid", ctx_r4.fluid())("pt", ctx_r4.ptm("pcToggleButton"));
    ɵɵadvance();
    ɵɵconditional(ctx_r4.itemTemplate || ctx_r4._itemTemplate ? 1 : -1);
  }
}
var style15 = (
  /*css*/
  `
    ${style14}

    /* For PrimeNG */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`
);
var classes7 = {
  root: ({
    instance
  }) => ["p-selectbutton p-component", {
    "p-invalid": instance.invalid(),
    "p-selectbutton-fluid": instance.fluid()
  }]
};
var SelectButtonStyle = class _SelectButtonStyle extends BaseStyle {
  name = "selectbutton";
  style = style15;
  classes = classes7;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSelectButtonStyle_BaseFactory;
    return function SelectButtonStyle_Factory(__ngFactoryType__) {
      return (ɵSelectButtonStyle_BaseFactory || (ɵSelectButtonStyle_BaseFactory = ɵɵgetInheritedFactory(_SelectButtonStyle)))(__ngFactoryType__ || _SelectButtonStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _SelectButtonStyle,
    factory: _SelectButtonStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var SelectButtonClasses;
(function(SelectButtonClasses2) {
  SelectButtonClasses2["root"] = "p-selectbutton";
})(SelectButtonClasses || (SelectButtonClasses = {}));
var SELECTBUTTON_INSTANCE = new InjectionToken("SELECTBUTTON_INSTANCE");
var SELECTBUTTON_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectButton),
  multi: true
};
var SelectButton = class _SelectButton extends BaseEditableHolder {
  /**
   * An array of selectitems to display as the available options.
   * @group Props
   */
  options;
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
   * Whether selection can be cleared.
   * @group Props
   */
  get unselectable() {
    return this._unselectable;
  }
  _unselectable = false;
  set unselectable(value) {
    this._unselectable = value;
    this.allowEmpty = !value;
  }
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * When specified, allows selecting multiple values.
   * @group Props
   */
  multiple;
  /**
   * Whether selection can not be cleared.
   * @group Props
   */
  allowEmpty = true;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Specifies the size of the component.
   * @defaultValue undefined
   * @group Props
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : []);
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, ...ngDevMode ? [{
    debugName: "fluid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * Callback to invoke on input click.
   * @param {SelectButtonOptionClickEvent} event - Custom click event.
   * @group Emits
   */
  onOptionClick = new EventEmitter();
  /**
   * Callback to invoke on selection change.
   * @param {SelectButtonChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Template of an item in the list.
   * @group Templates
   */
  itemTemplate;
  _itemTemplate;
  get equalityKey() {
    return this.optionValue ? null : this.dataKey;
  }
  value;
  focusedIndex = 0;
  _componentStyle = inject(SelectButtonStyle);
  $pcSelectButton = inject(SELECTBUTTON_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  getAllowEmpty() {
    if (this.multiple) {
      return this.allowEmpty || this.value?.length !== 1;
    }
    return this.allowEmpty;
  }
  getOptionLabel(option) {
    return this.optionLabel ? p(option, this.optionLabel) : option.label != void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue ? p(option, this.optionValue) : this.optionLabel || option.value === void 0 ? option : option.value;
  }
  isOptionDisabled(option) {
    return this.optionDisabled ? p(option, this.optionDisabled) : option.disabled !== void 0 ? option.disabled : false;
  }
  onOptionSelect(event2, option, index) {
    if (this.$disabled() || this.isOptionDisabled(option)) {
      return;
    }
    let selected = this.isSelected(option);
    if (selected && this.unselectable) {
      return;
    }
    let optionValue = this.getOptionValue(option);
    let newValue;
    if (this.multiple) {
      if (selected) newValue = this.value.filter((val) => !k(val, optionValue, this.equalityKey || void 0));
      else newValue = this.value ? [...this.value, optionValue] : [optionValue];
    } else {
      if (selected && !this.allowEmpty) {
        return;
      }
      newValue = selected ? null : optionValue;
    }
    this.focusedIndex = index;
    this.value = newValue;
    this.writeModelValue(this.value);
    this.onModelChange(this.value);
    this.onChange.emit({
      originalEvent: event2,
      value: this.value
    });
    this.onOptionClick.emit({
      originalEvent: event2,
      option,
      index
    });
  }
  changeTabIndexes(event2, direction) {
    let firstTabableChild, index;
    for (let i = 0; i <= this.el.nativeElement.children.length - 1; i++) {
      if (this.el.nativeElement.children[i].getAttribute("tabindex") === "0") firstTabableChild = {
        elem: this.el.nativeElement.children[i],
        index: i
      };
    }
    if (direction === "prev") {
      if (firstTabableChild.index === 0) index = this.el.nativeElement.children.length - 1;
      else index = firstTabableChild.index - 1;
    } else {
      if (firstTabableChild.index === this.el.nativeElement.children.length - 1) index = 0;
      else index = firstTabableChild.index + 1;
    }
    this.focusedIndex = index;
    this.el.nativeElement.children[index].focus();
  }
  onFocus(event2, index) {
    this.focusedIndex = index;
  }
  onBlur() {
    this.onModelTouched();
  }
  removeOption(option) {
    this.value = this.value.filter((val) => !k(val, this.getOptionValue(option), this.dataKey));
  }
  isSelected(option) {
    let selected = false;
    const optionValue = this.getOptionValue(option);
    if (this.multiple) {
      if (this.value && Array.isArray(this.value)) {
        for (let val of this.value) {
          if (k(val, optionValue, this.dataKey)) {
            selected = true;
            break;
          }
        }
      }
    } else {
      selected = k(this.getOptionValue(option), this.value, this.equalityKey || void 0);
    }
    return selected;
  }
  templates;
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    this.value = value;
    setModelValue(this.value);
    this.cd.markForCheck();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSelectButton_BaseFactory;
    return function SelectButton_Factory(__ngFactoryType__) {
      return (ɵSelectButton_BaseFactory || (ɵSelectButton_BaseFactory = ɵɵgetInheritedFactory(_SelectButton)))(__ngFactoryType__ || _SelectButton);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _SelectButton,
    selectors: [["p-selectButton"], ["p-selectbutton"], ["p-select-button"]],
    contentQueries: function SelectButton_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c08, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.itemTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.templates = _t2);
      }
    },
    hostVars: 4,
    hostBindings: function SelectButton_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("role", "group")("aria-labelledby", ctx.ariaLabelledBy);
        ɵɵclassMap(ctx.cx("root"));
      }
    },
    inputs: {
      options: "options",
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionDisabled: "optionDisabled",
      unselectable: [2, "unselectable", "unselectable", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      multiple: [2, "multiple", "multiple", booleanAttribute],
      allowEmpty: [2, "allowEmpty", "allowEmpty", booleanAttribute],
      styleClass: "styleClass",
      ariaLabelledBy: "ariaLabelledBy",
      dataKey: "dataKey",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      size: [1, "size"],
      fluid: [1, "fluid"]
    },
    outputs: {
      onOptionClick: "onOptionClick",
      onChange: "onChange"
    },
    features: [ɵɵProvidersFeature([SELECTBUTTON_VALUE_ACCESSOR, SelectButtonStyle, {
      provide: SELECTBUTTON_INSTANCE,
      useExisting: _SelectButton
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _SelectButton
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 2,
    vars: 0,
    consts: [["content", ""], [3, "autofocus", "styleClass", "ngModel", "onLabel", "offLabel", "disabled", "allowEmpty", "size", "fluid", "pt"], [3, "onChange", "autofocus", "styleClass", "ngModel", "onLabel", "offLabel", "disabled", "allowEmpty", "size", "fluid", "pt"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function SelectButton_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵrepeaterCreate(0, SelectButton_For_1_Template, 2, 11, "p-togglebutton", 1, _forTrack0, true);
      }
      if (rf & 2) {
        ɵɵrepeater(ctx.options);
      }
    },
    dependencies: [ToggleButton, FormsModule, NgControlStatus, NgModel, CommonModule, NgTemplateOutlet, SharedModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButton, [{
    type: Component,
    args: [{
      selector: "p-selectButton, p-selectbutton, p-select-button",
      standalone: true,
      imports: [ToggleButton, FormsModule, CommonModule, SharedModule, BindModule],
      template: `
        @for (option of options; track getOptionLabel(option); let i = $index) {
            <p-togglebutton
                [autofocus]="autofocus"
                [styleClass]="styleClass"
                [ngModel]="isSelected(option)"
                [onLabel]="this.getOptionLabel(option)"
                [offLabel]="this.getOptionLabel(option)"
                [disabled]="$disabled() || isOptionDisabled(option)"
                (onChange)="onOptionSelect($event, option, i)"
                [allowEmpty]="getAllowEmpty()"
                [size]="size()"
                [fluid]="fluid()"
                [pt]="ptm('pcToggleButton')"
            >
                @if (itemTemplate || _itemTemplate) {
                    <ng-template #content>
                        <ng-container *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: option, index: i }"></ng-container>
                    </ng-template>
                }
            </p-togglebutton>
        }
    `,
      providers: [SELECTBUTTON_VALUE_ACCESSOR, SelectButtonStyle, {
        provide: SELECTBUTTON_INSTANCE,
        useExisting: SelectButton
      }, {
        provide: PARENT_INSTANCE,
        useExisting: SelectButton
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cx('root')",
        "[attr.role]": '"group"',
        "[attr.aria-labelledby]": "ariaLabelledBy"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    options: [{
      type: Input
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
    unselectable: [{
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
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    allowEmpty: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
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
    fluid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fluid",
        required: false
      }]
    }],
    onOptionClick: [{
      type: Output
    }],
    onChange: [{
      type: Output
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var SelectButtonModule = class _SelectButtonModule {
  static ɵfac = function SelectButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectButtonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SelectButtonModule,
    imports: [SelectButton, SharedModule],
    exports: [SelectButton, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [SelectButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButtonModule, [{
    type: NgModule,
    args: [{
      imports: [SelectButton, SharedModule],
      exports: [SelectButton, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-table.mjs
var _c09 = ["header"];
var _c114 = ["headergrouped"];
var _c29 = ["body"];
var _c34 = ["loadingbody"];
var _c43 = ["caption"];
var _c53 = ["footer"];
var _c63 = ["footergrouped"];
var _c72 = ["summary"];
var _c82 = ["colgroup"];
var _c92 = ["expandedrow"];
var _c102 = ["groupheader"];
var _c115 = ["groupfooter"];
var _c123 = ["frozenexpandedrow"];
var _c132 = ["frozenheader"];
var _c142 = ["frozenbody"];
var _c152 = ["frozenfooter"];
var _c162 = ["frozencolgroup"];
var _c172 = ["emptymessage"];
var _c182 = ["paginatorleft"];
var _c192 = ["paginatorright"];
var _c202 = ["paginatordropdownitem"];
var _c212 = ["loadingicon"];
var _c223 = ["reorderindicatorupicon"];
var _c232 = ["reorderindicatordownicon"];
var _c242 = ["sorticon"];
var _c252 = ["checkboxicon"];
var _c262 = ["headercheckboxicon"];
var _c272 = ["paginatordropdownicon"];
var _c282 = ["paginatorfirstpagelinkicon"];
var _c292 = ["paginatorlastpagelinkicon"];
var _c30 = ["paginatorpreviouspagelinkicon"];
var _c31 = ["paginatornextpagelinkicon"];
var _c322 = ["resizeHelper"];
var _c332 = ["reorderIndicatorUp"];
var _c342 = ["reorderIndicatorDown"];
var _c35 = ["wrapper"];
var _c36 = ["table"];
var _c37 = ["thead"];
var _c38 = ["tfoot"];
var _c39 = ["scroller"];
var _c40 = (a0) => ({
  height: a0
});
var _c41 = (a0, a1) => ({
  $implicit: a0,
  options: a1
});
var _c422 = (a0) => ({
  columns: a0
});
var _c432 = (a0) => ({
  $implicit: a0
});
function Table_div_0_i_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i", 17);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("loadingIcon"), ctx_r0.loadingIcon));
    ɵɵproperty("pBind", ctx_r0.ptm("loadingIcon"));
  }
}
function Table_div_0_ng_container_2__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 19);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.cx("loadingIcon"));
    ɵɵproperty("spin", true)("pBind", ctx_r0.ptm("loadingIcon"));
  }
}
function Table_div_0_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Table_div_0_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_div_0_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Table_div_0_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 17);
    ɵɵtemplate(1, Table_div_0_ng_container_2_span_2_1_Template, 1, 0, null, 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.cx("loadingIcon"));
    ɵɵproperty("pBind", ctx_r0.ptm("loadingIcon"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate);
  }
}
function Table_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Table_div_0_ng_container_2__svg_svg_1_Template, 1, 4, "svg", 18)(2, Table_div_0_ng_container_2_span_2_Template, 2, 4, "span", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.loadingIconTemplate && !ctx_r0._loadingIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate);
  }
}
function Table_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtemplate(1, Table_div_0_i_1_Template, 1, 3, "i", 10)(2, Table_div_0_ng_container_2_Template, 3, 2, "ng-container", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("mask"));
    ɵɵproperty("pBind", ctx_r0.ptm("mask"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.loadingIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.loadingIcon);
  }
}
function Table_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵtemplate(1, Table_div_1_ng_container_1_Template, 1, 0, "ng-container", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("header"));
    ɵɵproperty("pBind", ctx_r0.ptm("header"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.captionTemplate || ctx_r0._captionTemplate);
  }
}
function Table_p_paginator_2_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_2_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_2_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorDropdownIconTemplate || ctx_r0._paginatorDropdownIconTemplate);
  }
}
function Table_p_paginator_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_2_1_ng_template_0_Template, 1, 1, "ng-template", 22);
  }
}
function Table_p_paginator_2_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_2_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_2_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorFirstPageLinkIconTemplate || ctx_r0._paginatorFirstPageLinkIconTemplate);
  }
}
function Table_p_paginator_2_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_2_2_ng_template_0_Template, 1, 1, "ng-template", 23);
  }
}
function Table_p_paginator_2_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_2_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_2_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorPreviousPageLinkIconTemplate || ctx_r0._paginatorPreviousPageLinkIconTemplate);
  }
}
function Table_p_paginator_2_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_2_3_ng_template_0_Template, 1, 1, "ng-template", 24);
  }
}
function Table_p_paginator_2_4_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_2_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_2_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorLastPageLinkIconTemplate || ctx_r0._paginatorLastPageLinkIconTemplate);
  }
}
function Table_p_paginator_2_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_2_4_ng_template_0_Template, 1, 1, "ng-template", 25);
  }
}
function Table_p_paginator_2_5_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_2_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_2_5_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorNextPageLinkIconTemplate || ctx_r0._paginatorNextPageLinkIconTemplate);
  }
}
function Table_p_paginator_2_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_2_5_ng_template_0_Template, 1, 1, "ng-template", 26);
  }
}
function Table_p_paginator_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-paginator", 21);
    ɵɵlistener("onPageChange", function Table_p_paginator_2_Template_p_paginator_onPageChange_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onPageChange($event));
    });
    ɵɵtemplate(1, Table_p_paginator_2_1_Template, 1, 0, null, 14)(2, Table_p_paginator_2_2_Template, 1, 0, null, 14)(3, Table_p_paginator_2_3_Template, 1, 0, null, 14)(4, Table_p_paginator_2_4_Template, 1, 0, null, 14)(5, Table_p_paginator_2_5_Template, 1, 0, null, 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("templateLeft", ctx_r0.paginatorLeftTemplate || ctx_r0._paginatorLeftTemplate)("templateRight", ctx_r0.paginatorRightTemplate || ctx_r0._paginatorRightTemplate)("appendTo", ctx_r0.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatorDropdownItemTemplate || ctx_r0._paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showJumpToPageInput", ctx_r0.showJumpToPageInput)("showPageLinks", ctx_r0.showPageLinks)("styleClass", ctx_r0.cx("pcPaginator") + " " + ctx_r0.paginatorStyleClass && ctx_r0.paginatorStyleClass)("locale", ctx_r0.paginatorLocale)("pt", ctx_r0.ptm("pcPaginator"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorDropdownIconTemplate || ctx_r0._paginatorDropdownIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorFirstPageLinkIconTemplate || ctx_r0._paginatorFirstPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorPreviousPageLinkIconTemplate || ctx_r0._paginatorPreviousPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorLastPageLinkIconTemplate || ctx_r0._paginatorLastPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorNextPageLinkIconTemplate || ctx_r0._paginatorNextPageLinkIconTemplate);
  }
}
function Table_p_scroller_5_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_scroller_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_scroller_5_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 28);
  }
  if (rf & 2) {
    const items_r4 = ctx.$implicit;
    const scrollerOptions_r5 = ctx.options;
    ɵɵnextContext(2);
    const buildInTable_r6 = ɵɵreference(8);
    ɵɵproperty("ngTemplateOutlet", buildInTable_r6)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c41, items_r4, scrollerOptions_r5));
  }
}
function Table_p_scroller_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-scroller", 27, 2);
    ɵɵlistener("onLazyLoad", function Table_p_scroller_5_Template_p_scroller_onLazyLoad_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onLazyItemLoad($event));
    });
    ɵɵtemplate(2, Table_p_scroller_5_ng_template_2_Template, 1, 5, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(ɵɵpureFunction1(16, _c40, ctx_r0.scrollHeight !== "flex" ? ctx_r0.scrollHeight : void 0));
    ɵɵproperty("items", ctx_r0.processedData)("columns", ctx_r0.columns)("scrollHeight", ctx_r0.scrollHeight !== "flex" ? void 0 : "100%")("itemSize", ctx_r0.virtualScrollItemSize)("step", ctx_r0.rows)("delay", ctx_r0.lazy ? ctx_r0.virtualScrollDelay : 0)("inline", true)("autoSize", true)("lazy", ctx_r0.lazy)("loaderDisabled", true)("showSpacer", false)("showLoader", ctx_r0.loadingBodyTemplate || ctx_r0._loadingBodyTemplate)("options", ctx_r0.virtualScrollOptions)("pt", ctx_r0.ptm("virtualScroller"));
  }
}
function Table_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Table_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 28);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const buildInTable_r6 = ɵɵreference(8);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", buildInTable_r6)("ngTemplateOutletContext", ɵɵpureFunction2(4, _c41, ctx_r0.processedData, ɵɵpureFunction1(2, _c422, ctx_r0.columns)));
  }
}
function Table_ng_template_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_ng_template_7_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_ng_template_7_tbody_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tbody", 35);
  }
  if (rf & 2) {
    const scrollerOptions_r7 = ɵɵnextContext().options;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("tbody"));
    ɵɵproperty("pBind", ctx_r0.ptm("tbody"))("value", ctx_r0.frozenValue)("frozenRows", true)("pTableBody", scrollerOptions_r7.columns)("pTableBodyTemplate", ctx_r0.frozenBodyTemplate || ctx_r0._frozenBodyTemplate)("frozen", true);
  }
}
function Table_ng_template_7_tbody_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tbody", 36);
  }
  if (rf & 2) {
    const scrollerOptions_r7 = ɵɵnextContext().options;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap("height: calc(" + scrollerOptions_r7.spacerStyle.height + " - " + scrollerOptions_r7.rows.length * scrollerOptions_r7.itemSize + "px);");
    ɵɵclassMap(ctx_r0.cx("virtualScrollerSpacer"));
    ɵɵproperty("pBind", ctx_r0.ptm("virtualScrollerSpacer"));
  }
}
function Table_ng_template_7_tfoot_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_ng_template_7_tfoot_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tfoot", 37, 6);
    ɵɵtemplate(2, Table_ng_template_7_tfoot_9_ng_container_2_Template, 1, 0, "ng-container", 28);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r7 = ɵɵnextContext().options;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.cx("footer"))("ngStyle", ctx_r0.sx("tfoot"))("pBind", ctx_r0.ptm("tfoot"));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.footerGroupedTemplate || ctx_r0.footerTemplate || ctx_r0._footerTemplate || ctx_r0._footerGroupedTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(5, _c432, scrollerOptions_r7.columns));
  }
}
function Table_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "table", 29, 4);
    ɵɵtemplate(2, Table_ng_template_7_ng_container_2_Template, 1, 0, "ng-container", 28);
    ɵɵelementStart(3, "thead", 30, 5);
    ɵɵtemplate(5, Table_ng_template_7_ng_container_5_Template, 1, 0, "ng-container", 28);
    ɵɵelementEnd();
    ɵɵtemplate(6, Table_ng_template_7_tbody_6_Template, 1, 8, "tbody", 31);
    ɵɵelement(7, "tbody", 32);
    ɵɵtemplate(8, Table_ng_template_7_tbody_8_Template, 1, 5, "tbody", 33)(9, Table_ng_template_7_tfoot_9_Template, 3, 7, "tfoot", 34);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r7 = ctx.options;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r0.tableStyle);
    ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("table"), ctx_r0.tableStyleClass));
    ɵɵproperty("pBind", ctx_r0.ptm("table"));
    ɵɵattribute("id", ctx_r0.id + "-table");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.colGroupTemplate || ctx_r0._colGroupTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(26, _c432, scrollerOptions_r7.columns));
    ɵɵadvance();
    ɵɵclassMap(ctx_r0.cx("thead"));
    ɵɵproperty("ngStyle", ctx_r0.sx("thead"))("pBind", ctx_r0.ptm("thead"));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.headerGroupedTemplate || ctx_r0.headerTemplate || ctx_r0._headerTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(28, _c432, scrollerOptions_r7.columns));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.frozenValue || ctx_r0.frozenBodyTemplate || ctx_r0._frozenBodyTemplate);
    ɵɵadvance();
    ɵɵstyleMap(scrollerOptions_r7.contentStyle);
    ɵɵclassMap(ctx_r0.cx("tbody", scrollerOptions_r7.contentStyleClass));
    ɵɵproperty("pBind", ctx_r0.ptm("tbody"))("value", ctx_r0.dataToRender(scrollerOptions_r7.rows))("pTableBody", scrollerOptions_r7.columns)("pTableBodyTemplate", ctx_r0.bodyTemplate || ctx_r0._bodyTemplate)("scrollerOptions", scrollerOptions_r7);
    ɵɵadvance();
    ɵɵproperty("ngIf", scrollerOptions_r7.spacerStyle);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.footerGroupedTemplate || ctx_r0.footerTemplate || ctx_r0._footerTemplate || ctx_r0._footerGroupedTemplate);
  }
}
function Table_p_paginator_9_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_9_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_9_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorDropdownIconTemplate || ctx_r0._paginatorDropdownIconTemplate);
  }
}
function Table_p_paginator_9_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_9_1_ng_template_0_Template, 1, 1, "ng-template", 22);
  }
}
function Table_p_paginator_9_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_9_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_9_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorFirstPageLinkIconTemplate || ctx_r0._paginatorFirstPageLinkIconTemplate);
  }
}
function Table_p_paginator_9_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_9_2_ng_template_0_Template, 1, 1, "ng-template", 23);
  }
}
function Table_p_paginator_9_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_9_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_9_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorPreviousPageLinkIconTemplate || ctx_r0._paginatorPreviousPageLinkIconTemplate);
  }
}
function Table_p_paginator_9_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_9_3_ng_template_0_Template, 1, 1, "ng-template", 24);
  }
}
function Table_p_paginator_9_4_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_9_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_9_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorLastPageLinkIconTemplate || ctx_r0._paginatorLastPageLinkIconTemplate);
  }
}
function Table_p_paginator_9_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_9_4_ng_template_0_Template, 1, 1, "ng-template", 25);
  }
}
function Table_p_paginator_9_5_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_9_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_9_5_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 20);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.paginatorNextPageLinkIconTemplate || ctx_r0._paginatorNextPageLinkIconTemplate);
  }
}
function Table_p_paginator_9_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_9_5_ng_template_0_Template, 1, 1, "ng-template", 26);
  }
}
function Table_p_paginator_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-paginator", 21);
    ɵɵlistener("onPageChange", function Table_p_paginator_9_Template_p_paginator_onPageChange_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onPageChange($event));
    });
    ɵɵtemplate(1, Table_p_paginator_9_1_Template, 1, 0, null, 14)(2, Table_p_paginator_9_2_Template, 1, 0, null, 14)(3, Table_p_paginator_9_3_Template, 1, 0, null, 14)(4, Table_p_paginator_9_4_Template, 1, 0, null, 14)(5, Table_p_paginator_9_5_Template, 1, 0, null, 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("rows", ctx_r0.rows)("first", ctx_r0.first)("totalRecords", ctx_r0.totalRecords)("pageLinkSize", ctx_r0.pageLinks)("alwaysShow", ctx_r0.alwaysShowPaginator)("rowsPerPageOptions", ctx_r0.rowsPerPageOptions)("templateLeft", ctx_r0.paginatorLeftTemplate || ctx_r0._paginatorLeftTemplate)("templateRight", ctx_r0.paginatorRightTemplate || ctx_r0._paginatorRightTemplate)("appendTo", ctx_r0.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r0.paginatorDropdownScrollHeight)("currentPageReportTemplate", ctx_r0.currentPageReportTemplate)("showFirstLastIcon", ctx_r0.showFirstLastIcon)("dropdownItemTemplate", ctx_r0.paginatorDropdownItemTemplate || ctx_r0._paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r0.showCurrentPageReport)("showJumpToPageDropdown", ctx_r0.showJumpToPageDropdown)("showJumpToPageInput", ctx_r0.showJumpToPageInput)("showPageLinks", ctx_r0.showPageLinks)("styleClass", ctx_r0.cx("pcPaginator") + " " + ctx_r0.paginatorStyleClass && ctx_r0.paginatorStyleClass)("locale", ctx_r0.paginatorLocale)("pt", ctx_r0.ptm("pcPaginator"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorDropdownIconTemplate || ctx_r0._paginatorDropdownIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorFirstPageLinkIconTemplate || ctx_r0._paginatorFirstPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorPreviousPageLinkIconTemplate || ctx_r0._paginatorPreviousPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorLastPageLinkIconTemplate || ctx_r0._paginatorLastPageLinkIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.paginatorNextPageLinkIconTemplate || ctx_r0._paginatorNextPageLinkIconTemplate);
  }
}
function Table_div_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_div_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 38);
    ɵɵtemplate(1, Table_div_10_ng_container_1_Template, 1, 0, "ng-container", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.cx("footer"))("pBind", ctx_r0.ptm("footer"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.summaryTemplate || ctx_r0._summaryTemplate);
  }
}
function Table_div_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 38, 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("display", "none");
    ɵɵproperty("ngClass", ctx_r0.cx("columnResizeIndicator"))("pBind", ctx_r0.ptm("columnResizeIndicator"));
  }
}
function Table_span_12__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 40);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("pBind", ctx_r0.ptm("rowReorderIndicatorUp")["icon"]);
  }
}
function Table_span_12_3_ng_template_0_Template(rf, ctx) {
}
function Table_span_12_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_span_12_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Table_span_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 38, 8);
    ɵɵtemplate(2, Table_span_12__svg_svg_2_Template, 1, 1, "svg", 39)(3, Table_span_12_3_Template, 1, 0, null, 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("display", "none");
    ɵɵproperty("ngClass", ctx_r0.cx("rowReorderIndicatorUp"))("pBind", ctx_r0.ptm("rowReorderIndicatorUp"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.reorderIndicatorUpIconTemplate && !ctx_r0._reorderIndicatorUpIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.reorderIndicatorUpIconTemplate || ctx_r0._reorderIndicatorUpIconTemplate);
  }
}
function Table_span_13__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 42);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("pBind", ctx_r0.ptm("rowReorderIndicatorDown")["icon"]);
  }
}
function Table_span_13_3_ng_template_0_Template(rf, ctx) {
}
function Table_span_13_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_span_13_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Table_span_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 38, 9);
    ɵɵtemplate(2, Table_span_13__svg_svg_2_Template, 1, 1, "svg", 41)(3, Table_span_13_3_Template, 1, 0, null, 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("display", "none");
    ɵɵproperty("ngClass", ctx_r0.cx("rowReorderIndicatorDown"))("pBind", ctx_r0.ptm("rowReorderIndicatorDown"));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.reorderIndicatorDownIconTemplate && !ctx_r0._reorderIndicatorDownIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.reorderIndicatorDownIconTemplate || ctx_r0._reorderIndicatorDownIconTemplate);
  }
}
var _c44 = ["pTableBody", ""];
var _c45 = (a0, a1, a2, a3, a4) => ({
  $implicit: a0,
  rowIndex: a1,
  columns: a2,
  editing: a3,
  frozen: a4
});
var _c46 = (a0, a1, a2, a3, a4, a5, a6) => ({
  $implicit: a0,
  rowIndex: a1,
  columns: a2,
  editing: a3,
  frozen: a4,
  rowgroup: a5,
  rowspan: a6
});
var _c47 = (a0, a1, a2, a3, a4, a5) => ({
  $implicit: a0,
  rowIndex: a1,
  columns: a2,
  expanded: a3,
  editing: a4,
  frozen: a5
});
var _c48 = (a0, a1, a2, a3) => ({
  $implicit: a0,
  rowIndex: a1,
  columns: a2,
  frozen: a3
});
var _c49 = (a0, a1) => ({
  $implicit: a0,
  frozen: a1
});
function TableBody_ng_container_0_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 3);
    ɵɵtemplate(1, TableBody_ng_container_0_ng_template_1_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const rowData_r2 = ctx_r0.$implicit;
    const rowIndex_r3 = ctx_r0.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.dataTable.groupHeaderTemplate || ctx_r3.dataTable._groupHeaderTemplate)("ngTemplateOutletContext", ɵɵpureFunction5(2, _c45, rowData_r2, ctx_r3.getRowIndex(rowIndex_r3), ctx_r3.columns, ctx_r3.dataTable.editMode === "row" && ctx_r3.dataTable.isRowEditing(rowData_r2), ctx_r3.frozen));
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_0_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const rowData_r2 = ctx_r0.$implicit;
    const rowIndex_r3 = ctx_r0.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", rowData_r2 ? ctx_r3.template : ctx_r3.dataTable.loadingBodyTemplate || ctx_r3.dataTable._loadingBodyTemplate)("ngTemplateOutletContext", ɵɵpureFunction5(2, _c45, rowData_r2, ctx_r3.getRowIndex(rowIndex_r3), ctx_r3.columns, ctx_r3.dataTable.editMode === "row" && ctx_r3.dataTable.isRowEditing(rowData_r2), ctx_r3.frozen));
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_0_ng_template_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const rowData_r2 = ctx_r0.$implicit;
    const rowIndex_r3 = ctx_r0.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", rowData_r2 ? ctx_r3.template : ctx_r3.dataTable.loadingBodyTemplate || ctx_r3.dataTable._loadingBodyTemplate)("ngTemplateOutletContext", ɵɵpureFunction7(2, _c46, rowData_r2, ctx_r3.getRowIndex(rowIndex_r3), ctx_r3.columns, ctx_r3.dataTable.editMode === "row" && ctx_r3.dataTable.isRowEditing(rowData_r2), ctx_r3.frozen, ctx_r3.shouldRenderRowspan(ctx_r3.value, rowData_r2, rowIndex_r3), ctx_r3.calculateRowGroupSize(ctx_r3.value, rowData_r2, rowIndex_r3)));
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 3);
    ɵɵtemplate(1, TableBody_ng_container_0_ng_template_1_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const rowData_r2 = ctx_r0.$implicit;
    const rowIndex_r3 = ctx_r0.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.dataTable.groupFooterTemplate || ctx_r3.dataTable._groupFooterTemplate)("ngTemplateOutletContext", ɵɵpureFunction5(2, _c45, rowData_r2, ctx_r3.getRowIndex(rowIndex_r3), ctx_r3.columns, ctx_r3.dataTable.editMode === "row" && ctx_r3.dataTable.isRowEditing(rowData_r2), ctx_r3.frozen));
  }
}
function TableBody_ng_container_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TableBody_ng_container_0_ng_template_1_ng_container_0_Template, 2, 8, "ng-container", 2)(1, TableBody_ng_container_0_ng_template_1_ng_container_1_Template, 2, 8, "ng-container", 0)(2, TableBody_ng_container_0_ng_template_1_ng_container_2_Template, 2, 10, "ng-container", 0)(3, TableBody_ng_container_0_ng_template_1_ng_container_3_Template, 2, 8, "ng-container", 2);
  }
  if (rf & 2) {
    const rowData_r2 = ctx.$implicit;
    const rowIndex_r3 = ctx.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", (ctx_r3.dataTable.groupHeaderTemplate || ctx_r3.dataTable._groupHeaderTemplate) && !ctx_r3.dataTable.virtualScroll && ctx_r3.dataTable.rowGroupMode === "subheader" && ctx_r3.shouldRenderRowGroupHeader(ctx_r3.value, rowData_r2, ctx_r3.getRowIndex(rowIndex_r3)));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.dataTable.rowGroupMode !== "rowspan");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.dataTable.rowGroupMode === "rowspan");
    ɵɵadvance();
    ɵɵproperty("ngIf", (ctx_r3.dataTable.groupFooterTemplate || ctx_r3.dataTable._groupFooterTemplate) && !ctx_r3.dataTable.virtualScroll && ctx_r3.dataTable.rowGroupMode === "subheader" && ctx_r3.shouldRenderRowGroupFooter(ctx_r3.value, rowData_r2, ctx_r3.getRowIndex(rowIndex_r3)));
  }
}
function TableBody_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_0_ng_template_1_Template, 4, 4, "ng-template", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r3.value)("ngForTrackBy", ctx_r3.dataTable.rowTrackBy);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_1_ng_template_1_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const rowData_r6 = ctx_r4.$implicit;
    const rowIndex_r7 = ctx_r4.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.template)("ngTemplateOutletContext", ɵɵpureFunction6(2, _c47, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7), ctx_r3.columns, ctx_r3.dataTable.isRowExpanded(rowData_r6), ctx_r3.dataTable.editMode === "row" && ctx_r3.dataTable.isRowEditing(rowData_r6), ctx_r3.frozen));
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 3);
    ɵɵtemplate(1, TableBody_ng_container_1_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const rowData_r6 = ctx_r4.$implicit;
    const rowIndex_r7 = ctx_r4.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.dataTable.groupHeaderTemplate || ctx_r3.dataTable._groupHeaderTemplate)("ngTemplateOutletContext", ɵɵpureFunction6(2, _c47, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7), ctx_r3.columns, ctx_r3.dataTable.isRowExpanded(rowData_r6), ctx_r3.dataTable.editMode === "row" && ctx_r3.dataTable.isRowEditing(rowData_r6), ctx_r3.frozen));
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 3);
    ɵɵtemplate(1, TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    const rowData_r6 = ctx_r4.$implicit;
    const rowIndex_r7 = ctx_r4.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.dataTable.groupFooterTemplate || ctx_r3.dataTable._groupFooterTemplate)("ngTemplateOutletContext", ɵɵpureFunction6(2, _c47, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7), ctx_r3.columns, ctx_r3.dataTable.isRowExpanded(rowData_r6), ctx_r3.dataTable.editMode === "row" && ctx_r3.dataTable.isRowEditing(rowData_r6), ctx_r3.frozen));
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4)(2, TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_Template, 2, 9, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    const rowData_r6 = ctx_r4.$implicit;
    const rowIndex_r7 = ctx_r4.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.dataTable.expandedRowTemplate || ctx_r3.dataTable._expandedRowTemplate)("ngTemplateOutletContext", ɵɵpureFunction4(3, _c48, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7), ctx_r3.columns, ctx_r3.frozen));
    ɵɵadvance();
    ɵɵproperty("ngIf", (ctx_r3.dataTable.groupFooterTemplate || ctx_r3.dataTable._groupFooterTemplate) && ctx_r3.dataTable.rowGroupMode === "subheader" && ctx_r3.shouldRenderRowGroupFooter(ctx_r3.value, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7)));
  }
}
function TableBody_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TableBody_ng_container_1_ng_template_1_ng_container_0_Template, 2, 9, "ng-container", 0)(1, TableBody_ng_container_1_ng_template_1_ng_container_1_Template, 2, 9, "ng-container", 2)(2, TableBody_ng_container_1_ng_template_1_ng_container_2_Template, 3, 8, "ng-container", 0);
  }
  if (rf & 2) {
    const rowData_r6 = ctx.$implicit;
    const rowIndex_r7 = ctx.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", !(ctx_r3.dataTable.groupHeaderTemplate && ctx_r3.dataTable._groupHeaderTemplate));
    ɵɵadvance();
    ɵɵproperty("ngIf", (ctx_r3.dataTable.groupHeaderTemplate || ctx_r3.dataTable._groupHeaderTemplate) && ctx_r3.dataTable.rowGroupMode === "subheader" && ctx_r3.shouldRenderRowGroupHeader(ctx_r3.value, rowData_r6, ctx_r3.getRowIndex(rowIndex_r7)));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.dataTable.isRowExpanded(rowData_r6));
  }
}
function TableBody_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_1_ng_template_1_Template, 3, 3, "ng-template", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r3.value)("ngForTrackBy", ctx_r3.dataTable.rowTrackBy);
  }
}
function TableBody_ng_container_2_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_2_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_2_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_2_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    const rowData_r9 = ctx_r7.$implicit;
    const rowIndex_r10 = ctx_r7.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.dataTable.frozenExpandedRowTemplate || ctx_r3.dataTable._frozenExpandedRowTemplate)("ngTemplateOutletContext", ɵɵpureFunction4(2, _c48, rowData_r9, ctx_r3.getRowIndex(rowIndex_r10), ctx_r3.columns, ctx_r3.frozen));
  }
}
function TableBody_ng_container_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TableBody_ng_container_2_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 4)(1, TableBody_ng_container_2_ng_template_1_ng_container_1_Template, 2, 7, "ng-container", 0);
  }
  if (rf & 2) {
    const rowData_r9 = ctx.$implicit;
    const rowIndex_r10 = ctx.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.template)("ngTemplateOutletContext", ɵɵpureFunction6(3, _c47, rowData_r9, ctx_r3.getRowIndex(rowIndex_r10), ctx_r3.columns, ctx_r3.dataTable.isRowExpanded(rowData_r9), ctx_r3.dataTable.editMode === "row" && ctx_r3.dataTable.isRowEditing(rowData_r9), ctx_r3.frozen));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.dataTable.isRowExpanded(rowData_r9));
  }
}
function TableBody_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_2_ng_template_1_Template, 2, 10, "ng-template", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r3.value)("ngForTrackBy", ctx_r3.dataTable.rowTrackBy);
  }
}
function TableBody_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.dataTable.loadingBodyTemplate || ctx_r3.dataTable._loadingBodyTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c49, ctx_r3.columns, ctx_r3.frozen));
  }
}
function TableBody_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.dataTable.emptyMessageTemplate || ctx_r3.dataTable._emptyMessageTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c49, ctx_r3.columns, ctx_r3.frozen));
  }
}
function SortIcon_ng_container_0__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r0.cx("sortableColumnIcon"));
  }
}
function SortIcon_ng_container_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r0.cx("sortableColumnIcon"));
  }
}
function SortIcon_ng_container_0__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r0.cx("sortableColumnIcon"));
  }
}
function SortIcon_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SortIcon_ng_container_0__svg_svg_1_Template, 1, 2, "svg", 3)(2, SortIcon_ng_container_0__svg_svg_2_Template, 1, 2, "svg", 4)(3, SortIcon_ng_container_0__svg_svg_3_Template, 1, 2, "svg", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.sortOrder === 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.sortOrder === 1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.sortOrder === -1);
  }
}
function SortIcon_span_1_1_ng_template_0_Template(rf, ctx) {
}
function SortIcon_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SortIcon_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function SortIcon_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, SortIcon_span_1_1_Template, 1, 0, null, 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("sortableColumnIcon"));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.dataTable.sortIconTemplate || ctx_r0.dataTable._sortIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c432, ctx_r0.sortOrder));
  }
}
function SortIcon_p_badge_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-badge", 10);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("sortableColumnBadge"));
    ɵɵproperty("value", ctx_r0.getBadgeValue());
  }
}
var _c50 = ["input"];
var _c51 = ["output"];
function CellEditor_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CellEditor_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CellEditor_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.inputTemplate || ctx_r0._inputTemplate);
  }
}
function CellEditor_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CellEditor_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CellEditor_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.outputTemplate || ctx_r0._outputTemplate);
  }
}
var _c522 = ["rb"];
function TableCheckbox_Conditional_1_ng_template_0_0_ng_template_0_Template(rf, ctx) {
}
function TableCheckbox_Conditional_1_ng_template_0_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TableCheckbox_Conditional_1_ng_template_0_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TableCheckbox_Conditional_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TableCheckbox_Conditional_1_ng_template_0_0_Template, 1, 0, null, 2);
  }
  if (rf & 2) {
    const template_r1 = ɵɵnextContext();
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", template_r1)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c432, ctx_r1.checked));
  }
}
function TableCheckbox_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TableCheckbox_Conditional_1_ng_template_0_Template, 1, 4, "ng-template", 1);
  }
}
function TableHeaderCheckbox_Conditional_1_ng_template_0_0_ng_template_0_Template(rf, ctx) {
}
function TableHeaderCheckbox_Conditional_1_ng_template_0_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TableHeaderCheckbox_Conditional_1_ng_template_0_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TableHeaderCheckbox_Conditional_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TableHeaderCheckbox_Conditional_1_ng_template_0_0_Template, 1, 0, null, 2);
  }
  if (rf & 2) {
    const template_r1 = ɵɵnextContext();
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", template_r1)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c432, ctx_r1.checked));
  }
}
function TableHeaderCheckbox_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TableHeaderCheckbox_Conditional_1_ng_template_0_Template, 1, 4, "ng-template", 1);
  }
}
var _c532 = ["filter"];
var _c54 = ["filtericon"];
var _c55 = ["removeruleicon"];
var _c56 = ["addruleicon"];
var _c57 = ["clearfiltericon"];
var _c58 = ["clearBtn"];
var _c59 = (a0) => ({
  hasFilter: a0
});
var _c60 = (a0) => ({
  index: a0
});
var _c61 = (a0) => ({
  context: a0
});
function ColumnFilter_p_columnFilterFormElement_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-columnFilterFormElement", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("type", ctx_r0.type)("field", ctx_r0.field)("ariaLabel", ctx_r0.ariaLabel)("filterConstraint", ctx_r0.dataTable.filters[ctx_r0.field])("filterTemplate", ctx_r0.filterTemplate || ctx_r0._filterTemplate)("placeholder", ctx_r0.placeholder)("minFractionDigits", ctx_r0.minFractionDigits)("maxFractionDigits", ctx_r0.maxFractionDigits)("prefix", ctx_r0.prefix)("suffix", ctx_r0.suffix)("locale", ctx_r0.locale)("localeMatcher", ctx_r0.localeMatcher)("currency", ctx_r0.currency)("currencyDisplay", ctx_r0.currencyDisplay)("useGrouping", ctx_r0.useGrouping)("showButtons", ctx_r0.showButtons)("filterOn", ctx_r0.filterOn)("pt", ctx_r0.pt());
  }
}
function ColumnFilter_p_button_2_ng_template_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 11);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("pBind", ctx_r0.ptm("pcColumnFilterButton")["icon"]);
  }
}
function ColumnFilter_p_button_2_ng_template_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 12);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("pBind", ctx_r0.ptm("pcColumnFilterButton")["icon"]);
  }
}
function ColumnFilter_p_button_2_ng_template_1_span_3_1_ng_template_0_Template(rf, ctx) {
}
function ColumnFilter_p_button_2_ng_template_1_span_3_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ColumnFilter_p_button_2_ng_template_1_span_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ColumnFilter_p_button_2_ng_template_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtemplate(1, ColumnFilter_p_button_2_ng_template_1_span_3_1_Template, 1, 0, null, 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("pBind", ctx_r0.ptm("pcColumnFilterButton")["icon"]);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.filterIconTemplate || ctx_r0._filterIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c59, ctx_r0.hasFilter));
  }
}
function ColumnFilter_p_button_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ColumnFilter_p_button_2_ng_template_1__svg_svg_1_Template, 1, 1, "svg", 8)(2, ColumnFilter_p_button_2_ng_template_1__svg_svg_2_Template, 1, 1, "svg", 9)(3, ColumnFilter_p_button_2_ng_template_1_span_3_Template, 2, 5, "span", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.filterIconTemplate && !ctx_r0._filterIconTemplate && !ctx_r0.hasFilter);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.filterIconTemplate && !ctx_r0._filterIconTemplate && ctx_r0.hasFilter);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.filterIconTemplate || ctx_r0._filterIconTemplate);
  }
}
function ColumnFilter_p_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 7);
    ɵɵlistener("click", function ColumnFilter_p_button_2_Template_p_button_click_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.toggleMenu($event));
    })("keydown", function ColumnFilter_p_button_2_Template_p_button_keydown_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onToggleButtonKeyDown($event));
    });
    ɵɵtemplate(1, ColumnFilter_p_button_2_ng_template_1_Template, 4, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("styleClass", ctx_r0.cx("pcColumnFilterButton"))("pt", ctx_r0.ptm("pcColumnFilterButton"))("ariaLabel", ctx_r0.filterMenuButtonAriaLabel)("buttonProps", ctx_r0.filterButtonProps == null ? null : ctx_r0.filterButtonProps.filter);
    ɵɵattribute("aria-haspopup", true)("aria-controls", ctx_r0.overlayVisible ? ctx_r0.overlayId : null)("aria-expanded", ctx_r0.overlayVisible ?? false);
  }
}
function ColumnFilter_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ColumnFilter_div_3_ul_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 19);
    ɵɵlistener("click", function ColumnFilter_div_3_ul_2_li_1_Template_li_click_0_listener() {
      const matchMode_r6 = ɵɵrestoreView(_r5).$implicit;
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.onRowMatchModeChange(matchMode_r6.value));
    })("keydown", function ColumnFilter_div_3_ul_2_li_1_Template_li_keydown_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.onRowMatchModeKeyDown($event));
    })("keydown.enter", function ColumnFilter_div_3_ul_2_li_1_Template_li_keydown_enter_0_listener() {
      const matchMode_r6 = ɵɵrestoreView(_r5).$implicit;
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.onRowMatchModeChange(matchMode_r6.value));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const matchMode_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.cx("filterConstraint"));
    ɵɵclassProp("p-datatable-filter-constraint-selected", ctx_r0.isRowMatchModeSelected(matchMode_r6.value));
    ɵɵproperty("pBind", ctx_r0.ptm("filterConstraint", ctx_r0.ptmFilterConstraintOptions(matchMode_r6)));
    ɵɵattribute("tabindex", i_r7 === 0 ? "0" : null);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", matchMode_r6.label, " ");
  }
}
function ColumnFilter_div_3_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul", 17);
    ɵɵtemplate(1, ColumnFilter_div_3_ul_2_li_1_Template, 2, 7, "li", 18);
    ɵɵelement(2, "li", 17);
    ɵɵelementStart(3, "li", 19);
    ɵɵlistener("click", function ColumnFilter_div_3_ul_2_Template_li_click_3_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onRowClearItemClick());
    })("keydown", function ColumnFilter_div_3_ul_2_Template_li_keydown_3_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onRowMatchModeKeyDown($event));
    })("keydown.enter", function ColumnFilter_div_3_ul_2_Template_li_keydown_enter_3_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onRowClearItemClick());
    });
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r0.cx("filterConstraintList"));
    ɵɵproperty("pBind", ctx_r0.ptm("filterConstraintList"));
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.matchModes);
    ɵɵadvance();
    ɵɵclassMap(ctx_r0.cx("filterConstraintSeparator"));
    ɵɵproperty("pBind", ctx_r0.ptm("filterConstraintSeparator", ɵɵpureFunction1(13, _c61, ɵɵpureFunction1(11, _c60, ctx_r0.i))));
    ɵɵadvance();
    ɵɵclassMap(ctx_r0.cx("filterConstraint"));
    ɵɵproperty("pBind", ctx_r0.ptm("emtpyFilterLabel"));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.noFilterLabel, " ");
  }
}
function ColumnFilter_div_3_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 17)(1, "p-select", 25);
    ɵɵlistener("ngModelChange", function ColumnFilter_div_3_ng_template_3_div_0_Template_p_select_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.onOperatorChange($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r0.cx("filterOperator"));
    ɵɵproperty("pBind", ctx_r0.ptm("filterOperator"));
    ɵɵadvance();
    ɵɵproperty("options", ctx_r0.operatorOptions)("pt", ctx_r0.ptm("pcFilterOperatorDropdown"))("ngModel", ctx_r0.operator)("styleClass", ctx_r0.cx("pcFilterOperatorDropdown"));
  }
}
function ColumnFilter_div_3_ng_template_3_div_2_p_select_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-select", 30);
    ɵɵlistener("ngModelChange", function ColumnFilter_div_3_ng_template_3_div_2_p_select_1_Template_p_select_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r9);
      const fieldConstraint_r10 = ɵɵnextContext().$implicit;
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.onMenuMatchModeChange($event, fieldConstraint_r10));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const fieldConstraint_r10 = ɵɵnextContext().$implicit;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("options", ctx_r0.matchModes)("ngModel", fieldConstraint_r10.matchMode)("styleClass", ctx_r0.cx("pcFilterConstraintDropdown"))("pt", ctx_r0.ptm("pcFilterConstraintDropdown"));
  }
}
function ColumnFilter_div_3_ng_template_3_div_2_p_button_4_ng_template_1__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 34);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(6);
    ɵɵproperty("pBind", ctx_r0.ptm("pcFilterRemoveRuleButton")["icon"]);
  }
}
function ColumnFilter_div_3_ng_template_3_div_2_p_button_4_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function ColumnFilter_div_3_ng_template_3_div_2_p_button_4_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ColumnFilter_div_3_ng_template_3_div_2_p_button_4_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ColumnFilter_div_3_ng_template_3_div_2_p_button_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ColumnFilter_div_3_ng_template_3_div_2_p_button_4_ng_template_1__svg_svg_0_Template, 1, 1, "svg", 32)(1, ColumnFilter_div_3_ng_template_3_div_2_p_button_4_ng_template_1_1_Template, 1, 0, null, 33);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(5);
    ɵɵproperty("ngIf", !ctx_r0.removeRuleIconTemplate && !ctx_r0._removeRuleIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.removeRuleIconTemplate || ctx_r0._removeRuleIconTemplate);
  }
}
function ColumnFilter_div_3_ng_template_3_div_2_p_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 31);
    ɵɵlistener("onClick", function ColumnFilter_div_3_ng_template_3_div_2_p_button_4_Template_p_button_onClick_0_listener() {
      ɵɵrestoreView(_r11);
      const fieldConstraint_r10 = ɵɵnextContext().$implicit;
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.removeConstraint(fieldConstraint_r10));
    });
    ɵɵtemplate(1, ColumnFilter_div_3_ng_template_3_div_2_p_button_4_ng_template_1_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵproperty("styleClass", ctx_r0.cx("pcFilterRemoveRuleButton"))("pt", ctx_r0.ptm("pcFilterRemoveRuleButton"))("text", true)("ariaLabel", ctx_r0.removeRuleButtonLabel)("label", ctx_r0.removeRuleButtonLabel)("buttonProps", ctx_r0.filterButtonProps == null ? null : ctx_r0.filterButtonProps.popover == null ? null : ctx_r0.filterButtonProps.popover.removeRule);
  }
}
function ColumnFilter_div_3_ng_template_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 26);
    ɵɵtemplate(1, ColumnFilter_div_3_ng_template_3_div_2_p_select_1_Template, 1, 4, "p-select", 27);
    ɵɵelement(2, "p-columnFilterFormElement", 28);
    ɵɵelementStart(3, "div");
    ɵɵtemplate(4, ColumnFilter_div_3_ng_template_3_div_2_p_button_4_Template, 3, 6, "p-button", 29);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const fieldConstraint_r10 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ctx_r0.cx("filterRule"))("pBind", ctx_r0.ptm("filterRule"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.showMatchModes && ctx_r0.matchModes);
    ɵɵadvance();
    ɵɵproperty("type", ctx_r0.type)("field", ctx_r0.field)("filterConstraint", fieldConstraint_r10)("filterTemplate", ctx_r0.filterTemplate || ctx_r0._filterTemplate)("placeholder", ctx_r0.placeholder)("minFractionDigits", ctx_r0.minFractionDigits)("maxFractionDigits", ctx_r0.maxFractionDigits)("prefix", ctx_r0.prefix)("suffix", ctx_r0.suffix)("locale", ctx_r0.locale)("localeMatcher", ctx_r0.localeMatcher)("currency", ctx_r0.currency)("currencyDisplay", ctx_r0.currencyDisplay)("useGrouping", ctx_r0.useGrouping)("filterOn", ctx_r0.filterOn)("pt", ctx_r0.pt());
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.showRemoveIcon);
  }
}
function ColumnFilter_div_3_ng_template_3_Conditional_3_ng_template_1__svg_svg_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 37);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(5);
    ɵɵproperty("pBind", ctx_r0.ptm("pcAddRuleButtonLabel")["icon"]);
  }
}
function ColumnFilter_div_3_ng_template_3_Conditional_3_ng_template_1_1_ng_template_0_Template(rf, ctx) {
}
function ColumnFilter_div_3_ng_template_3_Conditional_3_ng_template_1_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ColumnFilter_div_3_ng_template_3_Conditional_3_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ColumnFilter_div_3_ng_template_3_Conditional_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ColumnFilter_div_3_ng_template_3_Conditional_3_ng_template_1__svg_svg_0_Template, 1, 1, "svg", 36)(1, ColumnFilter_div_3_ng_template_3_Conditional_3_ng_template_1_1_Template, 1, 0, null, 33);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(4);
    ɵɵproperty("ngIf", !ctx_r0.addRuleIconTemplate && !ctx_r0._addRuleIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.addRuleIconTemplate || ctx_r0._addRuleIconTemplate);
  }
}
function ColumnFilter_div_3_ng_template_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 35);
    ɵɵlistener("onClick", function ColumnFilter_div_3_ng_template_3_Conditional_3_Template_p_button_onClick_0_listener() {
      ɵɵrestoreView(_r12);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.addConstraint());
    });
    ɵɵtemplate(1, ColumnFilter_div_3_ng_template_3_Conditional_3_ng_template_1_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("pt", ctx_r0.ptm("pcAddRuleButtonLabel"))("label", ctx_r0.addRuleButtonLabel)("styleClass", ctx_r0.cx("pcFilterAddRuleButton"))("text", true)("buttonProps", ctx_r0.filterButtonProps == null ? null : ctx_r0.filterButtonProps.popover == null ? null : ctx_r0.filterButtonProps.popover.addRule);
    ɵɵattribute("aria-label", ctx_r0.addRuleButtonLabel);
  }
}
function ColumnFilter_div_3_ng_template_3_p_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 38, 2);
    ɵɵlistener("onClick", function ColumnFilter_div_3_ng_template_3_p_button_5_Template_p_button_onClick_0_listener() {
      ɵɵrestoreView(_r13);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.clearFilter());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("outlined", true)("label", ctx_r0.clearButtonLabel)("buttonProps", ctx_r0.filterButtonProps == null ? null : ctx_r0.filterButtonProps.popover == null ? null : ctx_r0.filterButtonProps.popover.clear)("pt", ctx_r0.ptm("pcFilterClearButton"));
    ɵɵattribute("aria-label", ctx_r0.clearButtonLabel);
  }
}
function ColumnFilter_div_3_ng_template_3_p_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 39);
    ɵɵlistener("onClick", function ColumnFilter_div_3_ng_template_3_p_button_6_Template_p_button_onClick_0_listener() {
      ɵɵrestoreView(_r14);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.applyFilter());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("label", ctx_r0.applyButtonLabel)("buttonProps", ctx_r0.filterButtonProps == null ? null : ctx_r0.filterButtonProps.popover == null ? null : ctx_r0.filterButtonProps.popover.apply)("pt", ctx_r0.ptm("pcFilterApplyButton"));
    ɵɵattribute("aria-label", ctx_r0.applyButtonLabel);
  }
}
function ColumnFilter_div_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ColumnFilter_div_3_ng_template_3_div_0_Template, 2, 7, "div", 20);
    ɵɵelementStart(1, "div", 17);
    ɵɵtemplate(2, ColumnFilter_div_3_ng_template_3_div_2_Template, 5, 20, "div", 21);
    ɵɵelementEnd();
    ɵɵconditionalCreate(3, ColumnFilter_div_3_ng_template_3_Conditional_3_Template, 3, 6, "p-button", 22);
    ɵɵelementStart(4, "div", 17);
    ɵɵtemplate(5, ColumnFilter_div_3_ng_template_3_p_button_5_Template, 2, 5, "p-button", 23)(6, ColumnFilter_div_3_ng_template_3_p_button_6_Template, 1, 4, "p-button", 24);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r0.isShowOperator);
    ɵɵadvance();
    ɵɵclassMap(ctx_r0.cx("filterRuleList"));
    ɵɵproperty("pBind", ctx_r0.ptm("filterRuleList"));
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.fieldConstraints);
    ɵɵadvance();
    ɵɵconditional(ctx_r0.isShowAddConstraint ? 3 : -1);
    ɵɵadvance();
    ɵɵclassMap(ctx_r0.cx("filterButtonbar"));
    ɵɵproperty("pBind", ctx_r0.ptm("filterButtonBar"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.showClearButton);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.showApplyButton);
  }
}
function ColumnFilter_div_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ColumnFilter_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15);
    ɵɵlistener("click", function ColumnFilter_div_3_Template_div_click_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onContentClick());
    })("@overlayAnimation.start", function ColumnFilter_div_3_Template_div_animation_overlayAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function ColumnFilter_div_3_Template_div_animation_overlayAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onOverlayAnimationEnd($event));
    })("keydown.escape", function ColumnFilter_div_3_Template_div_keydown_escape_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onEscape());
    });
    ɵɵtemplate(1, ColumnFilter_div_3_ng_container_1_Template, 1, 0, "ng-container", 14)(2, ColumnFilter_div_3_ul_2_Template, 5, 15, "ul", 16)(3, ColumnFilter_div_3_ng_template_3_Template, 7, 11, "ng-template", null, 1, ɵɵtemplateRefExtractor)(5, ColumnFilter_div_3_ng_container_5_Template, 1, 0, "ng-container", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const menu_r15 = ɵɵreference(4);
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("filterOverlay"));
    ɵɵproperty("pBind", ctx_r0.ptm("filterOverlay"))("id", ctx_r0.overlayId)("@overlayAnimation", "visible");
    ɵɵattribute("aria-modal", true);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate || ctx_r0._headerTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(12, _c432, ctx_r0.field));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.display === "row")("ngIfElse", menu_r15);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.footerTemplate || ctx_r0._footerTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(14, _c432, ctx_r0.field));
  }
}
var _c622 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) => ({
  $implicit: a0,
  filterCallback: a1,
  type: a2,
  field: a3,
  filterConstraint: a4,
  placeholder: a5,
  minFractionDigits: a6,
  maxFractionDigits: a7,
  prefix: a8,
  suffix: a9,
  locale: a10,
  localeMatcher: a11,
  currency: a12,
  currencyDisplay: a13,
  useGrouping: a14,
  showButtons: a15
});
function ColumnFilterFormElement_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ColumnFilterFormElement_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ColumnFilterFormElement_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.filterTemplate)("ngTemplateOutletContext", ɵɵpureFunctionV(2, _c622, [ctx_r0.filterConstraint.value, ctx_r0.filterCallback, ctx_r0.type, ctx_r0.field, ctx_r0.filterConstraint, ctx_r0.placeholder, ctx_r0.minFractionDigits, ctx_r0.maxFractionDigits, ctx_r0.prefix, ctx_r0.suffix, ctx_r0.locale, ctx_r0.localeMatcher, ctx_r0.currency, ctx_r0.currencyDisplay, ctx_r0.useGrouping, ctx_r0.showButtons]));
  }
}
function ColumnFilterFormElement_ng_template_1_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 8);
    ɵɵlistener("input", function ColumnFilterFormElement_ng_template_1_input_1_Template_input_input_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onModelChange($event.target.value));
    })("keydown.enter", function ColumnFilterFormElement_ng_template_1_input_1_Template_input_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onTextInputEnterKeyDown($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ariaLabel", ctx_r0.ariaLabel)("pt", ctx_r0.ptm("pcFilterInputText"))("value", ctx_r0.filterConstraint == null ? null : ctx_r0.filterConstraint.value);
    ɵɵattribute("placeholder", ctx_r0.placeholder);
  }
}
function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-inputNumber", 9);
    ɵɵlistener("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template_p_inputNumber_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onModelChange($event));
    })("onKeyDown", function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template_p_inputNumber_onKeyDown_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onNumericInputKeyDown($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngModel", ctx_r0.filterConstraint == null ? null : ctx_r0.filterConstraint.value)("showButtons", ctx_r0.showButtons)("minFractionDigits", ctx_r0.minFractionDigits)("maxFractionDigits", ctx_r0.maxFractionDigits)("ariaLabel", ctx_r0.ariaLabel)("prefix", ctx_r0.prefix)("suffix", ctx_r0.suffix)("placeholder", ctx_r0.placeholder)("mode", ctx_r0.currency ? "currency" : "decimal")("locale", ctx_r0.locale)("localeMatcher", ctx_r0.localeMatcher)("currency", ctx_r0.currency)("currencyDisplay", ctx_r0.currencyDisplay)("useGrouping", ctx_r0.useGrouping)("pt", ctx_r0.ptm("pcFilterInputNumber"));
  }
}
function ColumnFilterFormElement_ng_template_1_p_checkbox_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-checkbox", 10);
    ɵɵlistener("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_checkbox_3_Template_p_checkbox_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onModelChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("pt", ctx_r0.ptm("pcFilterCheckbox"))("indeterminate", (ctx_r0.filterConstraint == null ? null : ctx_r0.filterConstraint.value) === null)("binary", true)("ngModel", ctx_r0.filterConstraint == null ? null : ctx_r0.filterConstraint.value);
  }
}
function ColumnFilterFormElement_ng_template_1_p_datepicker_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-datepicker", 11);
    ɵɵlistener("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_datepicker_4_Template_p_datepicker_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onModelChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("pt", ctx_r0.ptm("pcFilterDatePicker"))("ariaLabel", ctx_r0.ariaLabel)("placeholder", ctx_r0.placeholder)("ngModel", ctx_r0.filterConstraint == null ? null : ctx_r0.filterConstraint.value);
  }
}
function ColumnFilterFormElement_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 3);
    ɵɵtemplate(1, ColumnFilterFormElement_ng_template_1_input_1_Template, 1, 4, "input", 4)(2, ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template, 1, 15, "p-inputNumber", 5)(3, ColumnFilterFormElement_ng_template_1_p_checkbox_3_Template, 1, 4, "p-checkbox", 6)(4, ColumnFilterFormElement_ng_template_1_p_datepicker_4_Template, 1, 4, "p-datepicker", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngSwitch", ctx_r0.type);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "text");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "numeric");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "boolean");
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", "date");
  }
}
var style16 = (
  /*css*/
  `
    ${style2}

    /* For PrimeNG */
    .p-datatable-scrollable-table > .p-datatable-thead {
        top: 0;
        z-index: 2;
    }

    .p-datatable-scrollable-table > .p-datatable-frozen-tbody {
        position: sticky;
        z-index: 2;
    }

    .p-datatable-scrollable-table > .p-datatable-frozen-tbody + .p-datatable-frozen-tbody {
        z-index: 1;
    }

    .p-datatable-mask.p-overlay-mask {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 3;
    }

    .p-datatable-filter-overlay {
        position: absolute;
        background: dt('datatable.filter.overlay.select.background');
        color: dt('datatable.filter.overlay.select.color');
        border: 1px solid dt('datatable.filter.overlay.select.border.color');
        border-radius: dt('datatable.filter.overlay.select.border.radius');
        box-shadow: dt('datatable.filter.overlay.select.shadow');
        min-width: 12.5rem;
    }

    .p-datatable-filter-rule {
        border-bottom: 1px solid dt('datatable.filter.rule.border.color');
    }

    .p-datatable-filter-rule:last-child {
        border-bottom: 0 none;
    }

    .p-datatable-filter-add-rule-button,
    .p-datatable-filter-remove-rule-button {
        width: 100%;
    }

    .p-datatable-filter-remove-button {
        width: 100%;
    }

    .p-datatable-thead > tr > th {
        padding: dt('datatable.header.cell.padding');
        background: dt('datatable.header.cell.background');
        border-color: dt('datatable.header.cell.border.color');
        border-style: solid;
        border-width: 0 0 1px 0;
        color: dt('datatable.header.cell.color');
        font-weight: dt('datatable.column.title.font.weight');
        text-align: start;
        transition:
            background dt('datatable.transition.duration'),
            color dt('datatable.transition.duration'),
            border-color dt('datatable.transition.duration'),
            outline-color dt('datatable.transition.duration'),
            box-shadow dt('datatable.transition.duration');
    }

    .p-datatable-thead > tr > th p-columnfilter {
        font-weight: normal;
    }

    .p-datatable-thead > tr > th,
    .p-datatable-sort-icon,
    .p-datatable-sort-badge {
        vertical-align: middle;
    }

    .p-datatable-thead > tr > th.p-datatable-column-sorted {
        background: dt('datatable.header.cell.selected.background');
        color: dt('datatable.header.cell.selected.color');
    }

    .p-datatable-thead > tr > th.p-datatable-column-sorted .p-datatable-sort-icon {
        color: dt('datatable.header.cell.selected.color');
    }

    .p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(odd) {
        background: dt('datatable.row.striped.background');
    }

    .p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(odd).p-datatable-row-selected {
        background: dt('datatable.row.selected.background');
        color: dt('datatable.row.selected.color');
    }

    p-sortIcon, p-sort-icon, p-sorticon {
        display: inline-flex;
        align-items: center;
        gap: dt('datatable.header.cell.gap');
    }

    .p-datatable .p-editable-column.p-cell-editing {
        padding: 0;
    }

    .p-datatable .p-editable-column.p-cell-editing p-celleditor {
        display: block;
        width: 100%;
    }
`
);
var classes8 = {
  root: ({
    instance
  }) => ["p-datatable p-component", {
    "p-datatable-hoverable": instance.rowHover || instance.selectionMode,
    "p-datatable-resizable": instance.resizableColumns,
    "p-datatable-resizable-fit": instance.resizableColumns && instance.columnResizeMode === "fit",
    "p-datatable-scrollable": instance.scrollable,
    "p-datatable-flex-scrollable": instance.scrollable && instance.scrollHeight === "flex",
    "p-datatable-striped": instance.stripedRows,
    "p-datatable-gridlines": instance.showGridlines,
    "p-datatable-sm": instance.size === "small",
    "p-datatable-lg": instance.size === "large"
  }],
  mask: "p-datatable-mask p-overlay-mask",
  loadingIcon: "p-datatable-loading-icon",
  header: "p-datatable-header",
  pcPaginator: ({
    instance
  }) => "p-datatable-paginator-" + instance.paginatorPosition,
  tableContainer: "p-datatable-table-container",
  table: ({
    instance
  }) => ["p-datatable-table", {
    "p-datatable-scrollable-table": instance.scrollable,
    "p-datatable-resizable-table": instance.resizableColumns,
    "p-datatable-resizable-table-fit": instance.resizableColumns && instance.columnResizeMode === "fit"
  }],
  thead: "p-datatable-thead",
  columnResizer: "p-datatable-column-resizer",
  columnHeaderContent: "p-datatable-column-header-content",
  columnTitle: "p-datatable-column-title",
  columnFooter: "p-datatable-column-footer",
  sortIcon: "p-datatable-sort-icon",
  pcSortBadge: "p-datatable-sort-badge",
  filter: ({
    instance
  }) => ({
    "p-datatable-filter": true,
    "p-datatable-inline-filter": instance.display === "row",
    "p-datatable-popover-filter": instance.display === "menu"
  }),
  filterElementContainer: "p-datatable-filter-element-container",
  pcColumnFilterButton: "p-datatable-column-filter-button",
  pcColumnFilterClearButton: "p-datatable-column-filter-clear-button",
  filterOverlay: ({
    instance
  }) => ({
    "p-datatable-filter-overlay p-component": true,
    "p-datatable-filter-overlay-popover": instance.display === "menu"
  }),
  filterConstraintList: "p-datatable-filter-constraint-list",
  filterConstraint: "p-datatable-filter-constraint",
  filterConstraintSeparator: "p-datatable-filter-constraint-separator",
  filterOperator: "p-datatable-filter-operator",
  pcFilterOperatorDropdown: "p-datatable-filter-operator-dropdown",
  filterRuleList: "p-datatable-filter-rule-list",
  filterRule: "p-datatable-filter-rule",
  pcFilterConstraintDropdown: "p-datatable-filter-constraint-dropdown",
  pcFilterRemoveRuleButton: "p-datatable-filter-remove-rule-button",
  pcFilterAddRuleButton: "p-datatable-filter-add-rule-button",
  filterButtonbar: "p-datatable-filter-buttonbar",
  pcFilterClearButton: "p-datatable-filter-clear-button",
  pcFilterApplyButton: "p-datatable-filter-apply-button",
  tbody: ({
    instance
  }) => ({
    "p-datatable-tbody": true,
    "p-datatable-frozen-tbody": instance.frozenValue || instance.frozenBodyTemplate,
    "p-virtualscroller-content": instance.virtualScroll
  }),
  rowGroupHeader: "p-datatable-row-group-header",
  rowToggleButton: "p-datatable-row-toggle-button",
  rowToggleIcon: "p-datatable-row-toggle-icon",
  rowExpansion: "p-datatable-row-expansion",
  rowGroupFooter: "p-datatable-row-group-footer",
  emptyMessage: "p-datatable-empty-message",
  bodyCell: ({
    instance
  }) => ({
    "p-datatable-frozen-column": instance.columnProp("frozen")
  }),
  reorderableRowHandle: "p-datatable-reorderable-row-handle",
  pcRowEditorInit: "p-datatable-row-editor-init",
  pcRowEditorSave: "p-datatable-row-editor-save",
  pcRowEditorCancel: "p-datatable-row-editor-cancel",
  tfoot: "p-datatable-tfoot",
  footerCell: ({
    instance
  }) => ({
    "p-datatable-frozen-column": instance.columnProp("frozen")
  }),
  virtualScrollerSpacer: "p-datatable-virtualscroller-spacer",
  footer: "p-datatable-tfoot",
  columnResizeIndicator: "p-datatable-column-resize-indicator",
  rowReorderIndicatorUp: "p-datatable-row-reorder-indicator-up",
  rowReorderIndicatorDown: "p-datatable-row-reorder-indicator-down",
  sortableColumn: ({
    instance
  }) => ({
    "p-datatable-sortable-column": instance.isEnabled(),
    " p-datatable-column-sorted": instance.sorted
  }),
  sortableColumnIcon: "p-datatable-sort-icon",
  sortableColumnBadge: "p-sortable-column-badge",
  selectableRow: ({
    instance
  }) => ({
    "p-datatable-selectable-row": instance.isEnabled(),
    "p-datatable-row-selected": instance.selected
  }),
  resizableColumn: "p-datatable-resizable-column",
  reorderableColumn: "p-datatable-reorderable-column",
  rowEditorCancel: "p-datatable-row-editor-cancel"
};
var inlineStyles2 = {
  tableContainer: ({
    instance
  }) => ({
    "max-height": instance.virtualScroll ? "" : instance.scrollHeight,
    overflow: "auto"
  }),
  thead: {
    position: "sticky"
  },
  tfoot: {
    position: "sticky"
  }
};
var TableStyle = class _TableStyle extends BaseStyle {
  name = "datatable";
  style = style16;
  classes = classes8;
  inlineStyles = inlineStyles2;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTableStyle_BaseFactory;
    return function TableStyle_Factory(__ngFactoryType__) {
      return (ɵTableStyle_BaseFactory || (ɵTableStyle_BaseFactory = ɵɵgetInheritedFactory(_TableStyle)))(__ngFactoryType__ || _TableStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _TableStyle,
    factory: _TableStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableStyle, [{
    type: Injectable
  }], null, null);
})();
var TableClasses;
(function(TableClasses2) {
  TableClasses2["root"] = "p-datatable";
  TableClasses2["mask"] = "p-datatable-mask";
  TableClasses2["loadingIcon"] = "p-datatable-loading-icon";
  TableClasses2["header"] = "p-datatable-header";
  TableClasses2["pcPaginator"] = "p-datatable-paginator-[position]";
  TableClasses2["tableContainer"] = "p-datatable-table-container";
  TableClasses2["table"] = "p-datatable-table";
  TableClasses2["thead"] = "p-datatable-thead";
  TableClasses2["columnResizer"] = "p-datatable-column-resizer";
  TableClasses2["columnHeaderContent"] = "p-datatable-column-header-content";
  TableClasses2["columnTitle"] = "p-datatable-column-title";
  TableClasses2["sortIcon"] = "p-datatable-sort-icon";
  TableClasses2["pcSortBadge"] = "p-datatable-sort-badge";
  TableClasses2["filter"] = "p-datatable-filter";
  TableClasses2["filterElementContainer"] = "p-datatable-filter-element-container";
  TableClasses2["pcColumnFilterButton"] = "p-datatable-column-filter-button";
  TableClasses2["pcColumnFilterClearButton"] = "p-datatable-column-filter-clear-button";
  TableClasses2["filterOverlay"] = "p-datatable-filter-overlay";
  TableClasses2["filterConstraintList"] = "p-datatable-filter-constraint-list";
  TableClasses2["filterConstraint"] = "p-datatable-filter-constraint";
  TableClasses2["filterConstraintSeparator"] = "p-datatable-filter-constraint-separator";
  TableClasses2["filterOperator"] = "p-datatable-filter-operator";
  TableClasses2["pcFilterOperatorDropdown"] = "p-datatable-filter-operator-dropdown";
  TableClasses2["filterRuleList"] = "p-datatable-filter-rule-list";
  TableClasses2["filterRule"] = "p-datatable-filter-rule";
  TableClasses2["pcFilterConstraintDropdown"] = "p-datatable-filter-constraint-dropdown";
  TableClasses2["pcFilterRemoveRuleButton"] = "p-datatable-filter-remove-rule-button";
  TableClasses2["pcFilterAddRuleButton"] = "p-datatable-filter-add-rule-button";
  TableClasses2["filterButtonbar"] = "p-datatable-filter-buttonbar";
  TableClasses2["pcFilterClearButton"] = "p-datatable-filter-clear-button";
  TableClasses2["pcFilterApplyButton"] = "p-datatable-filter-apply-button";
  TableClasses2["tbody"] = "p-datatable-tbody";
  TableClasses2["rowGroupHeader"] = "p-datatable-row-group-header";
  TableClasses2["rowToggleButton"] = "p-datatable-row-toggle-button";
  TableClasses2["rowToggleIcon"] = "p-datatable-row-toggle-icon";
  TableClasses2["rowExpansion"] = "p-datatable-row-expansion";
  TableClasses2["rowGroupFooter"] = "p-datatable-row-group-footer";
  TableClasses2["emptyMessage"] = "p-datatable-empty-message";
  TableClasses2["reorderableRowHandle"] = "p-datatable-reorderable-row-handle";
  TableClasses2["pcRowEditorInit"] = "p-datatable-row-editor-init";
  TableClasses2["pcRowEditorSave"] = "p-datatable-row-editor-save";
  TableClasses2["pcRowEditorCancel"] = "p-datatable-row-editor-cancel";
  TableClasses2["tfoot"] = "p-datatable-tfoot";
  TableClasses2["virtualScrollerSpacer"] = "p-datatable-virtualscroller-spacer";
  TableClasses2["footer"] = "p-datatable-footer";
  TableClasses2["columnResizeIndicator"] = "p-datatable-column-resize-indicator";
  TableClasses2["rowReorderIndicatorUp"] = "p-datatable-row-reorder-indicator-up";
  TableClasses2["rowReorderIndicatorDown"] = "p-datatable-row-reorder-indicator-down";
  TableClasses2["sortableColumn"] = "p-datatable-sortable-column";
  TableClasses2["sortableColumnIcon"] = "p-sortable-column-icon";
  TableClasses2["sortableColumnBadge"] = "p-sortable-column-badge";
  TableClasses2["selectableRow"] = "p-datatable-selectable-row";
  TableClasses2["resizableColumn"] = "p-datatable-resizable-column";
  TableClasses2["rowEditorCancel"] = "p-datatable-row-editor-cancel";
})(TableClasses || (TableClasses = {}));
var TABLE_INSTANCE = new InjectionToken("TABLE_INSTANCE");
var TableService = class _TableService {
  sortSource = new Subject();
  selectionSource = new Subject();
  contextMenuSource = new Subject();
  valueSource = new Subject();
  columnsSource = new Subject();
  sortSource$ = this.sortSource.asObservable();
  selectionSource$ = this.selectionSource.asObservable();
  contextMenuSource$ = this.contextMenuSource.asObservable();
  valueSource$ = this.valueSource.asObservable();
  columnsSource$ = this.columnsSource.asObservable();
  onSort(sortMeta) {
    this.sortSource.next(sortMeta);
  }
  onSelectionChange() {
    this.selectionSource.next(null);
  }
  onContextMenu(data) {
    this.contextMenuSource.next(data);
  }
  onValueChange(value) {
    this.valueSource.next(value);
  }
  onColumnsChange(columns) {
    this.columnsSource.next(columns);
  }
  static ɵfac = function TableService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _TableService,
    factory: _TableService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableService, [{
    type: Injectable
  }], null, null);
})();
var Table = class _Table extends BaseComponent {
  /**
   * An array of objects to represent dynamic columns that are frozen.
   * @group Props
   */
  frozenColumns;
  /**
   * An array of objects to display as frozen.
   * @group Props
   */
  frozenValue;
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Inline style of the table.
   * @group Props
   */
  tableStyle;
  /**
   * Style class of the table.
   * @group Props
   */
  tableStyleClass;
  /**
   * When specified as true, enables the pagination.
   * @group Props
   */
  paginator;
  /**
   * Number of page links to display in paginator.
   * @group Props
   */
  pageLinks = 5;
  /**
   * Array of integer/object values to display inside rows per page dropdown of paginator
   * @group Props
   */
  rowsPerPageOptions;
  /**
   * Whether to show it even there is only one page.
   * @group Props
   */
  alwaysShowPaginator = true;
  /**
   * Position of the paginator, options are "top", "bottom" or "both".
   * @group Props
   */
  paginatorPosition = "bottom";
  /**
   * Custom style class for paginator
   * @group Props
   */
  paginatorStyleClass;
  /**
   * Target element to attach the paginator dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  paginatorDropdownAppendTo;
  /**
   * Paginator dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  paginatorDropdownScrollHeight = "200px";
  /**
   * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
   * @group Props
   */
  currentPageReportTemplate = "{currentPage} of {totalPages}";
  /**
   * Whether to display current page report.
   * @group Props
   */
  showCurrentPageReport;
  /**
   * Whether to display a dropdown to navigate to any page.
   * @group Props
   */
  showJumpToPageDropdown;
  /**
   * Whether to display a input to navigate to any page.
   * @group Props
   */
  showJumpToPageInput;
  /**
   * When enabled, icons are displayed on paginator to go first and last page.
   * @group Props
   */
  showFirstLastIcon = true;
  /**
   * Whether to show page links.
   * @group Props
   */
  showPageLinks = true;
  /**
   * Sort order to use when an unsorted column gets sorted by user interaction.
   * @group Props
   */
  defaultSortOrder = 1;
  /**
   * Defines whether sorting works on single column or on multiple columns.
   * @group Props
   */
  sortMode = "single";
  /**
   * When true, resets paginator to first page after sorting. Available only when sortMode is set to single.
   * @group Props
   */
  resetPageOnSort = true;
  /**
   * Specifies the selection mode, valid values are "single" and "multiple".
   * @group Props
   */
  selectionMode;
  /**
   * When enabled with paginator and checkbox selection mode, the select all checkbox in the header will select all rows on the current page.
   * @group Props
   */
  selectionPageOnly;
  /**
   * Selected row with a context menu.
   * @group Props
   */
  contextMenuSelection;
  /**
   * Callback to invoke on context menu selection change.
   * @param {*} object - row data.
   * @group Emits
   */
  contextMenuSelectionChange = new EventEmitter();
  /**
   *  Defines the behavior of context menu selection, in "separate" mode context menu updates contextMenuSelection property whereas in joint mode selection property is used instead so that when row selection is enabled, both row selection and context menu selection use the same property.
   * @group Props
   */
  contextMenuSelectionMode = "separate";
  /**
   * A property to uniquely identify a record in data.
   * @group Props
   */
  dataKey;
  /**
   * Defines whether metaKey should be considered for the selection. On touch enabled devices, metaKeySelection is turned off automatically.
   * @group Props
   */
  metaKeySelection = false;
  /**
   * Defines if the row is selectable.
   * @group Props
   */
  rowSelectable;
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity.
   * @group Props
   */
  rowTrackBy = (index, item) => item;
  /**
   * Defines if data is loaded and interacted with in lazy manner.
   * @group Props
   */
  lazy = false;
  /**
   * Whether to call lazy loading on initialization.
   * @group Props
   */
  lazyLoadOnInit = true;
  /**
   * Algorithm to define if a row is selected, valid values are "equals" that compares by reference and "deepEquals" that compares all fields.
   * @group Props
   */
  compareSelectionBy = "deepEquals";
  /**
   * Character to use as the csv separator.
   * @group Props
   */
  csvSeparator = ",";
  /**
   * Name of the exported file.
   * @group Props
   */
  exportFilename = "download";
  /**
   * An array of FilterMetadata objects to provide external filters.
   * @group Props
   */
  filters = {};
  /**
   * An array of fields as string to use in global filtering.
   * @group Props
   */
  globalFilterFields;
  /**
   * Delay in milliseconds before filtering the data.
   * @group Props
   */
  filterDelay = 300;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * Map instance to keep the expanded rows where key of the map is the data key of the row.
   * @group Props
   */
  expandedRowKeys = {};
  /**
   * Map instance to keep the rows being edited where key of the map is the data key of the row.
   * @group Props
   */
  editingRowKeys = {};
  /**
   * Whether multiple rows can be expanded at any time. Valid values are "multiple" and "single".
   * @group Props
   */
  rowExpandMode = "multiple";
  /**
   * Enables scrollable tables.
   * @group Props
   */
  scrollable;
  /**
   * Type of the row grouping, valid values are "subheader" and "rowspan".
   * @group Props
   */
  rowGroupMode;
  /**
   * Height of the scroll viewport in fixed pixels or the "flex" keyword for a dynamic size.
   * @group Props
   */
  scrollHeight;
  /**
   * Whether the data should be loaded on demand during scroll.
   * @group Props
   */
  virtualScroll;
  /**
   * Height of a row to use in calculations of virtual scrolling.
   * @group Props
   */
  virtualScrollItemSize;
  /**
   * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
   * @group Props
   */
  virtualScrollOptions;
  /**
   * Threshold in milliseconds to delay lazy loading during scrolling.
   * @group Props
   */
  virtualScrollDelay = 250;
  /**
   * Width of the frozen columns container.
   * @group Props
   */
  frozenWidth;
  /**
   * Local ng-template varilable of a ContextMenu.
   * @group Props
   */
  contextMenu;
  /**
   * When enabled, columns can be resized using drag and drop.
   * @group Props
   */
  resizableColumns;
  /**
   * Defines whether the overall table width should change on column resize, valid values are "fit" and "expand".
   * @group Props
   */
  columnResizeMode = "fit";
  /**
   * When enabled, columns can be reordered using drag and drop.
   * @group Props
   */
  reorderableColumns;
  /**
   * Displays a loader to indicate data load is in progress.
   * @group Props
   */
  loading;
  /**
   * The icon to show while indicating data load is in progress.
   * @group Props
   */
  loadingIcon;
  /**
   * Whether to show the loading mask when loading property is true.
   * @group Props
   */
  showLoader = true;
  /**
   * Adds hover effect to rows without the need for selectionMode. Note that tr elements that can be hovered need to have "p-selectable-row" class for rowHover to work.
   * @group Props
   */
  rowHover;
  /**
   * Whether to use the default sorting or a custom one using sortFunction.
   * @group Props
   */
  customSort;
  /**
   * Whether to use the initial sort badge or not.
   * @group Props
   */
  showInitialSortBadge = true;
  /**
   * Export function.
   * @group Props
   */
  exportFunction;
  /**
   * Custom export header of the column to be exported as CSV.
   * @group Props
   */
  exportHeader;
  /**
   * Unique identifier of a stateful table to use in state storage.
   * @group Props
   */
  stateKey;
  /**
   * Defines where a stateful table keeps its state, valid values are "session" for sessionStorage and "local" for localStorage.
   * @group Props
   */
  stateStorage = "session";
  /**
   * Defines the editing mode, valid values are "cell" and "row".
   * @group Props
   */
  editMode = "cell";
  /**
   * Field name to use in row grouping.
   * @group Props
   */
  groupRowsBy;
  /**
   * Defines the size of the table.
   * @group Props
   */
  size;
  /**
   * Whether to show grid lines between cells.
   * @group Props
   */
  showGridlines;
  /**
   * Whether to display rows with alternating colors.
   * @group Props
   */
  stripedRows;
  /**
   * Order to sort when default row grouping is enabled.
   * @group Props
   */
  groupRowsByOrder = 1;
  /**
   * Defines the responsive mode, valid options are "stack" and "scroll".
   * @deprecated since v20.0.0, always defaults to scroll, stack mode needs custom implementation
   * @group Props
   */
  responsiveLayout = "scroll";
  /**
   * The breakpoint to define the maximum width boundary when using stack responsive layout.
   * @group Props
   */
  breakpoint = "960px";
  /**
   * Locale to be used in paginator formatting.
   * @group Props
   */
  paginatorLocale;
  /**
   * An array of objects to display.
   * @group Props
   */
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
  }
  /**
   * An array of objects to represent dynamic columns.
   * @group Props
   */
  get columns() {
    return this._columns;
  }
  set columns(cols) {
    this._columns = cols;
  }
  /**
   * Index of the first row to be displayed.
   * @group Props
   */
  get first() {
    return this._first;
  }
  set first(val) {
    this._first = val;
  }
  /**
   * Number of rows to display per page.
   * @group Props
   */
  get rows() {
    return this._rows;
  }
  set rows(val) {
    this._rows = val;
  }
  /**
   * Number of total records, defaults to length of value when not defined.
   * @group Props
   */
  totalRecords = 0;
  /**
   * Name of the field to sort data by default.
   * @group Props
   */
  get sortField() {
    return this._sortField;
  }
  set sortField(val) {
    this._sortField = val;
  }
  /**
   * Order to sort when default sorting is enabled.
   * @group Props
   */
  get sortOrder() {
    return this._sortOrder;
  }
  set sortOrder(val) {
    this._sortOrder = val;
  }
  /**
   * An array of SortMeta objects to sort the data by default in multiple sort mode.
   * @group Props
   */
  get multiSortMeta() {
    return this._multiSortMeta;
  }
  set multiSortMeta(val) {
    this._multiSortMeta = val;
  }
  /**
   * Selected row in single mode or an array of values in multiple mode.
   * @group Props
   */
  get selection() {
    return this._selection;
  }
  set selection(val) {
    this._selection = val;
  }
  /**
   * Whether all data is selected.
   * @group Props
   */
  get selectAll() {
    return this._selection;
  }
  set selectAll(val) {
    this._selection = val;
  }
  /**
   * Emits when the all of the items selected or unselected.
   * @param {TableSelectAllChangeEvent} event - custom  all selection change event.
   * @group Emits
   */
  selectAllChange = new EventEmitter();
  /**
   * Callback to invoke on selection changed.
   * @param {any | null} value - selected data.
   * @group Emits
   */
  selectionChange = new EventEmitter();
  /**
   * Callback to invoke when a row is selected.
   * @param {TableRowSelectEvent} event - custom select event.
   * @group Emits
   */
  onRowSelect = new EventEmitter();
  /**
   * Callback to invoke when a row is unselected.
   * @param {TableRowUnSelectEvent} event - custom unselect event.
   * @group Emits
   */
  onRowUnselect = new EventEmitter();
  /**
   * Callback to invoke when pagination occurs.
   * @param {TablePageEvent} event - custom pagination event.
   * @group Emits
   */
  onPage = new EventEmitter();
  /**
   * Callback to invoke when a column gets sorted.
   * @param {Object} object - sort meta.
   * @group Emits
   */
  onSort = new EventEmitter();
  /**
   * Callback to invoke when data is filtered.
   * @param {TableFilterEvent} event - custom filtering event.
   * @group Emits
   */
  onFilter = new EventEmitter();
  /**
   * Callback to invoke when paging, sorting or filtering happens in lazy mode.
   * @param {TableLazyLoadEvent} event - custom lazy loading event.
   * @group Emits
   */
  onLazyLoad = new EventEmitter();
  /**
   * Callback to invoke when a row is expanded.
   * @param {TableRowExpandEvent} event - custom row expand event.
   * @group Emits
   */
  onRowExpand = new EventEmitter();
  /**
   * Callback to invoke when a row is collapsed.
   * @param {TableRowCollapseEvent} event - custom row collapse event.
   * @group Emits
   */
  onRowCollapse = new EventEmitter();
  /**
   * Callback to invoke when a row is selected with right click.
   * @param {TableContextMenuSelectEvent} event - custom context menu select event.
   * @group Emits
   */
  onContextMenuSelect = new EventEmitter();
  /**
   * Callback to invoke when a column is resized.
   * @param {TableColResizeEvent} event - custom column resize event.
   * @group Emits
   */
  onColResize = new EventEmitter();
  /**
   * Callback to invoke when a column is reordered.
   * @param {TableColumnReorderEvent} event - custom column reorder event.
   * @group Emits
   */
  onColReorder = new EventEmitter();
  /**
   * Callback to invoke when a row is reordered.
   * @param {TableRowReorderEvent} event - custom row reorder event.
   * @group Emits
   */
  onRowReorder = new EventEmitter();
  /**
   * Callback to invoke when a cell switches to edit mode.
   * @param {TableEditInitEvent} event - custom edit init event.
   * @group Emits
   */
  onEditInit = new EventEmitter();
  /**
   * Callback to invoke when cell edit is completed.
   * @param {TableEditCompleteEvent} event - custom edit complete event.
   * @group Emits
   */
  onEditComplete = new EventEmitter();
  /**
   * Callback to invoke when cell edit is cancelled with escape key.
   * @param {TableEditCancelEvent} event - custom edit cancel event.
   * @group Emits
   */
  onEditCancel = new EventEmitter();
  /**
   * Callback to invoke when state of header checkbox changes.
   * @param {TableHeaderCheckboxToggleEvent} event - custom header checkbox event.
   * @group Emits
   */
  onHeaderCheckboxToggle = new EventEmitter();
  /**
   * A function to implement custom sorting, refer to sorting section for details.
   * @param {any} any - sort meta.
   * @group Emits
   */
  sortFunction = new EventEmitter();
  /**
   * Callback to invoke on pagination.
   * @param {number} number - first element.
   * @group Emits
   */
  firstChange = new EventEmitter();
  /**
   * Callback to invoke on rows change.
   * @param {number} number - Row count.
   * @group Emits
   */
  rowsChange = new EventEmitter();
  /**
   * Callback to invoke table state is saved.
   * @param {TableState} object - table state.
   * @group Emits
   */
  onStateSave = new EventEmitter();
  /**
   * Callback to invoke table state is restored.
   * @param {TableState} object - table state.
   * @group Emits
   */
  onStateRestore = new EventEmitter();
  resizeHelperViewChild;
  reorderIndicatorUpViewChild;
  reorderIndicatorDownViewChild;
  wrapperViewChild;
  tableViewChild;
  tableHeaderViewChild;
  tableFooterViewChild;
  scroller;
  _templates;
  _value = [];
  _columns;
  _totalRecords = 0;
  _first = 0;
  _rows;
  filteredValue;
  // @todo will be refactored later
  _headerTemplate;
  headerTemplate;
  _headerGroupedTemplate;
  headerGroupedTemplate;
  _bodyTemplate;
  bodyTemplate;
  _loadingBodyTemplate;
  loadingBodyTemplate;
  _captionTemplate;
  captionTemplate;
  _footerTemplate;
  footerTemplate;
  _footerGroupedTemplate;
  footerGroupedTemplate;
  _summaryTemplate;
  summaryTemplate;
  _colGroupTemplate;
  colGroupTemplate;
  _expandedRowTemplate;
  expandedRowTemplate;
  _groupHeaderTemplate;
  groupHeaderTemplate;
  _groupFooterTemplate;
  groupFooterTemplate;
  _frozenExpandedRowTemplate;
  frozenExpandedRowTemplate;
  _frozenHeaderTemplate;
  frozenHeaderTemplate;
  _frozenBodyTemplate;
  frozenBodyTemplate;
  _frozenFooterTemplate;
  frozenFooterTemplate;
  _frozenColGroupTemplate;
  frozenColGroupTemplate;
  _emptyMessageTemplate;
  emptyMessageTemplate;
  _paginatorLeftTemplate;
  paginatorLeftTemplate;
  _paginatorRightTemplate;
  paginatorRightTemplate;
  _paginatorDropdownItemTemplate;
  paginatorDropdownItemTemplate;
  _loadingIconTemplate;
  loadingIconTemplate;
  _reorderIndicatorUpIconTemplate;
  reorderIndicatorUpIconTemplate;
  _reorderIndicatorDownIconTemplate;
  reorderIndicatorDownIconTemplate;
  _sortIconTemplate;
  sortIconTemplate;
  _checkboxIconTemplate;
  checkboxIconTemplate;
  _headerCheckboxIconTemplate;
  headerCheckboxIconTemplate;
  _paginatorDropdownIconTemplate;
  paginatorDropdownIconTemplate;
  _paginatorFirstPageLinkIconTemplate;
  paginatorFirstPageLinkIconTemplate;
  _paginatorLastPageLinkIconTemplate;
  paginatorLastPageLinkIconTemplate;
  _paginatorPreviousPageLinkIconTemplate;
  paginatorPreviousPageLinkIconTemplate;
  _paginatorNextPageLinkIconTemplate;
  paginatorNextPageLinkIconTemplate;
  selectionKeys = {};
  lastResizerHelperX;
  reorderIconWidth;
  reorderIconHeight;
  draggedColumn;
  draggedRowIndex;
  droppedRowIndex;
  rowDragging;
  dropPosition;
  editingCell;
  editingCellData;
  editingCellField;
  editingCellRowIndex;
  selfClick;
  documentEditListener;
  _multiSortMeta;
  _sortField;
  _sortOrder = 1;
  preventSelectionSetterPropagation;
  _selection;
  _selectAll = null;
  anchorRowIndex;
  rangeRowIndex;
  filterTimeout;
  initialized;
  rowTouched;
  restoringSort;
  restoringFilter;
  stateRestored;
  columnOrderStateRestored;
  columnWidthsState;
  tableWidthState;
  overlaySubscription;
  resizeColumnElement;
  columnResizing = false;
  rowGroupHeaderStyleObject = {};
  id = UniqueComponentId();
  styleElement;
  responsiveStyleElement;
  overlayService = inject(OverlayService);
  filterService = inject(FilterService);
  tableService = inject(TableService);
  zone = inject(NgZone);
  _componentStyle = inject(TableStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  onInit() {
    if (this.lazy && this.lazyLoadOnInit) {
      if (!this.virtualScroll) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      }
      if (this.restoringFilter) {
        this.restoringFilter = false;
      }
    }
    if (this.responsiveLayout === "stack") {
      this.createResponsiveStyle();
    }
    this.initialized = true;
  }
  onAfterContentInit() {
    this._templates.forEach((item) => {
      switch (item.getType()) {
        case "caption":
          this.captionTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "headergrouped":
          this.headerGroupedTemplate = item.template;
          break;
        case "body":
          this.bodyTemplate = item.template;
          break;
        case "loadingbody":
          this.loadingBodyTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "footergrouped":
          this.footerGroupedTemplate = item.template;
          break;
        case "summary":
          this.summaryTemplate = item.template;
          break;
        case "colgroup":
          this.colGroupTemplate = item.template;
          break;
        case "expandedrow":
          this.expandedRowTemplate = item.template;
          break;
        case "groupheader":
          this.groupHeaderTemplate = item.template;
          break;
        case "groupfooter":
          this.groupFooterTemplate = item.template;
          break;
        case "frozenheader":
          this.frozenHeaderTemplate = item.template;
          break;
        case "frozenbody":
          this.frozenBodyTemplate = item.template;
          break;
        case "frozenfooter":
          this.frozenFooterTemplate = item.template;
          break;
        case "frozencolgroup":
          this.frozenColGroupTemplate = item.template;
          break;
        case "frozenexpandedrow":
          this.frozenExpandedRowTemplate = item.template;
          break;
        case "emptymessage":
          this.emptyMessageTemplate = item.template;
          break;
        case "paginatorleft":
          this.paginatorLeftTemplate = item.template;
          break;
        case "paginatorright":
          this.paginatorRightTemplate = item.template;
          break;
        case "paginatordropdownicon":
          this.paginatorDropdownIconTemplate = item.template;
          break;
        case "paginatordropdownitem":
          this.paginatorDropdownItemTemplate = item.template;
          break;
        case "paginatorfirstpagelinkicon":
          this.paginatorFirstPageLinkIconTemplate = item.template;
          break;
        case "paginatorlastpagelinkicon":
          this.paginatorLastPageLinkIconTemplate = item.template;
          break;
        case "paginatorpreviouspagelinkicon":
          this.paginatorPreviousPageLinkIconTemplate = item.template;
          break;
        case "paginatornextpagelinkicon":
          this.paginatorNextPageLinkIconTemplate = item.template;
          break;
        case "loadingicon":
          this.loadingIconTemplate = item.template;
          break;
        case "reorderindicatorupicon":
          this.reorderIndicatorUpIconTemplate = item.template;
          break;
        case "reorderindicatordownicon":
          this.reorderIndicatorDownIconTemplate = item.template;
          break;
        case "sorticon":
          this.sortIconTemplate = item.template;
          break;
        case "checkboxicon":
          this.checkboxIconTemplate = item.template;
          break;
        case "headercheckboxicon":
          this.headerCheckboxIconTemplate = item.template;
          break;
      }
    });
  }
  onAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isStateful() && this.resizableColumns) {
        this.restoreColumnWidths();
      }
    }
  }
  onChanges(simpleChange) {
    if (simpleChange.totalRecords && simpleChange.totalRecords.firstChange) {
      this._totalRecords = simpleChange.totalRecords.currentValue;
    }
    if (simpleChange.value) {
      if (this.isStateful() && !this.stateRestored && isPlatformBrowser(this.platformId)) {
        this.restoreState();
      }
      this._value = simpleChange.value.currentValue;
      if (!this.lazy) {
        this.totalRecords = this._totalRecords === 0 && this._value ? this._value.length : this._totalRecords ?? 0;
        if (this.sortMode == "single" && (this.sortField || this.groupRowsBy)) this.sortSingle();
        else if (this.sortMode == "multiple" && (this.multiSortMeta || this.groupRowsBy)) this.sortMultiple();
        else if (this.hasFilter())
          this._filter();
      }
      this.tableService.onValueChange(simpleChange.value.currentValue);
    }
    if (simpleChange.columns) {
      if (!this.isStateful()) {
        this._columns = simpleChange.columns.currentValue;
        this.tableService.onColumnsChange(simpleChange.columns.currentValue);
      }
      if (this._columns && this.isStateful() && this.reorderableColumns && !this.columnOrderStateRestored) {
        this.restoreColumnOrder();
        this.tableService.onColumnsChange(this._columns);
      }
    }
    if (simpleChange.sortField) {
      this._sortField = simpleChange.sortField.currentValue;
      if (!this.lazy || this.initialized) {
        if (this.sortMode === "single") {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.groupRowsBy) {
      if (!this.lazy || this.initialized) {
        if (this.sortMode === "single") {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.sortOrder) {
      this._sortOrder = simpleChange.sortOrder.currentValue;
      if (!this.lazy || this.initialized) {
        if (this.sortMode === "single") {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.groupRowsByOrder) {
      if (!this.lazy || this.initialized) {
        if (this.sortMode === "single") {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.multiSortMeta) {
      this._multiSortMeta = simpleChange.multiSortMeta.currentValue;
      if (this.sortMode === "multiple" && (this.initialized || !this.lazy && !this.virtualScroll)) {
        this.sortMultiple();
      }
    }
    if (simpleChange.selection) {
      this._selection = simpleChange.selection.currentValue;
      if (!this.preventSelectionSetterPropagation) {
        this.updateSelectionKeys();
        this.tableService.onSelectionChange();
      }
      this.preventSelectionSetterPropagation = false;
    }
    if (simpleChange.selectAll) {
      this._selectAll = simpleChange.selectAll.currentValue;
      if (!this.preventSelectionSetterPropagation) {
        this.updateSelectionKeys();
        this.tableService.onSelectionChange();
        if (this.isStateful()) {
          this.saveState();
        }
      }
      this.preventSelectionSetterPropagation = false;
    }
  }
  get processedData() {
    return this.filteredValue || this.value || [];
  }
  _initialColWidths;
  dataToRender(data) {
    const _data = data || this.processedData;
    if (_data && this.paginator) {
      const first = this.lazy ? 0 : this.first;
      return _data.slice(first, first + this.rows);
    }
    return _data;
  }
  updateSelectionKeys() {
    if (this.dataKey && this._selection) {
      this.selectionKeys = {};
      if (Array.isArray(this._selection)) {
        for (let data of this._selection) {
          this.selectionKeys[String(ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
        }
      } else {
        this.selectionKeys[String(ObjectUtils.resolveFieldData(this._selection, this.dataKey))] = 1;
      }
    }
  }
  onPageChange(event2) {
    this.first = event2.first;
    this.rows = event2.rows;
    this.onPage.emit({
      first: this.first,
      rows: this.rows
    });
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    }
    this.firstChange.emit(this.first);
    this.rowsChange.emit(this.rows);
    this.tableService.onValueChange(this.value);
    if (this.isStateful()) {
      this.saveState();
    }
    this.anchorRowIndex = null;
    if (this.scrollable) {
      this.resetScrollTop();
    }
  }
  sort(event2) {
    let originalEvent = event2.originalEvent;
    if (this.sortMode === "single") {
      this._sortOrder = this.sortField === event2.field ? this.sortOrder * -1 : this.defaultSortOrder;
      this._sortField = event2.field;
      if (this.resetPageOnSort) {
        this._first = 0;
        this.firstChange.emit(this._first);
        if (this.scrollable) {
          this.resetScrollTop();
        }
      }
      this.sortSingle();
    }
    if (this.sortMode === "multiple") {
      let metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
      let sortMeta = this.getSortMeta(event2.field);
      if (sortMeta) {
        if (!metaKey) {
          this._multiSortMeta = [{
            field: event2.field,
            order: sortMeta.order * -1
          }];
          if (this.resetPageOnSort) {
            this._first = 0;
            this.firstChange.emit(this._first);
            if (this.scrollable) {
              this.resetScrollTop();
            }
          }
        } else {
          sortMeta.order = sortMeta.order * -1;
        }
      } else {
        if (!metaKey || !this.multiSortMeta) {
          this._multiSortMeta = [];
          if (this.resetPageOnSort) {
            this._first = 0;
            this.firstChange.emit(this._first);
          }
        }
        this._multiSortMeta.push({
          field: event2.field,
          order: this.defaultSortOrder
        });
      }
      this.sortMultiple();
    }
    if (this.isStateful()) {
      this.saveState();
    }
    this.anchorRowIndex = null;
  }
  sortSingle() {
    let field = this.sortField || this.groupRowsBy;
    let order = this.sortField ? this.sortOrder : this.groupRowsByOrder;
    if (this.groupRowsBy && this.sortField && this.groupRowsBy !== this.sortField) {
      this._multiSortMeta = [this.getGroupRowsMeta(), {
        field: this.sortField,
        order: this.sortOrder
      }];
      this.sortMultiple();
      return;
    }
    if (field && order) {
      if (this.restoringSort) {
        this.restoringSort = false;
      }
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else if (this.value) {
        if (this.customSort) {
          this.sortFunction.emit({
            data: this.value,
            mode: this.sortMode,
            field,
            order
          });
        } else {
          this.value.sort((data1, data2) => {
            let value1 = ObjectUtils.resolveFieldData(data1, field);
            let value2 = ObjectUtils.resolveFieldData(data2, field);
            let result = null;
            if (value1 == null && value2 != null) result = -1;
            else if (value1 != null && value2 == null) result = 1;
            else if (value1 == null && value2 == null) result = 0;
            else if (typeof value1 === "string" && typeof value2 === "string") result = value1.localeCompare(value2);
            else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
            return order * (result || 0);
          });
          this._value = [...this.value];
        }
        if (this.hasFilter()) {
          this._filter();
        }
      }
      let sortMeta = {
        field,
        order
      };
      this.onSort.emit(sortMeta);
      this.tableService.onSort(sortMeta);
    }
  }
  sortMultiple() {
    if (this.groupRowsBy) {
      if (!this._multiSortMeta) this._multiSortMeta = [this.getGroupRowsMeta()];
      else if (this.multiSortMeta[0].field !== this.groupRowsBy) this._multiSortMeta = [this.getGroupRowsMeta(), ...this._multiSortMeta];
    }
    if (this.multiSortMeta) {
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else if (this.value) {
        if (this.customSort) {
          this.sortFunction.emit({
            data: this.value,
            mode: this.sortMode,
            multiSortMeta: this.multiSortMeta
          });
        } else {
          this.value.sort((data1, data2) => {
            return this.multisortField(data1, data2, this.multiSortMeta, 0);
          });
          this._value = [...this.value];
        }
        if (this.hasFilter()) {
          this._filter();
        }
      }
      this.onSort.emit({
        multisortmeta: this.multiSortMeta
      });
      this.tableService.onSort(this.multiSortMeta);
    }
  }
  multisortField(data1, data2, multiSortMeta, index) {
    const value1 = ObjectUtils.resolveFieldData(data1, multiSortMeta[index].field);
    const value2 = ObjectUtils.resolveFieldData(data2, multiSortMeta[index].field);
    if (ObjectUtils.compare(value1, value2, this.filterLocale) === 0) {
      return multiSortMeta.length - 1 > index ? this.multisortField(data1, data2, multiSortMeta, index + 1) : 0;
    }
    return this.compareValuesOnSort(value1, value2, multiSortMeta[index].order);
  }
  compareValuesOnSort(value1, value2, order) {
    return ObjectUtils.sort(value1, value2, order, this.filterLocale, this.sortOrder);
  }
  getSortMeta(field) {
    if (this.multiSortMeta && this.multiSortMeta.length) {
      for (let i = 0; i < this.multiSortMeta.length; i++) {
        if (this.multiSortMeta[i].field === field) {
          return this.multiSortMeta[i];
        }
      }
    }
    return null;
  }
  isSorted(field) {
    if (this.sortMode === "single") {
      return this.sortField && this.sortField === field;
    } else if (this.sortMode === "multiple") {
      let sorted = false;
      if (this.multiSortMeta) {
        for (let i = 0; i < this.multiSortMeta.length; i++) {
          if (this.multiSortMeta[i].field == field) {
            sorted = true;
            break;
          }
        }
      }
      return sorted;
    }
  }
  handleRowClick(event2) {
    let target = event2.originalEvent.target;
    let targetNode = target.nodeName;
    let parentNode = target.parentElement && target.parentElement.nodeName;
    if (targetNode == "INPUT" || targetNode == "BUTTON" || targetNode == "A" || parentNode == "INPUT" || parentNode == "BUTTON" || parentNode == "A" || DomHandler.hasClass(event2.originalEvent.target, "p-clickable")) {
      return;
    }
    if (this.selectionMode) {
      let rowData = event2.rowData;
      let rowIndex = event2.rowIndex;
      this.preventSelectionSetterPropagation = true;
      if (this.isMultipleSelectionMode() && event2.originalEvent.shiftKey && this.anchorRowIndex != null) {
        DomHandler.clearSelection();
        if (this.rangeRowIndex != null) {
          this.clearSelectionRange(event2.originalEvent);
        }
        this.rangeRowIndex = rowIndex;
        this.selectRange(event2.originalEvent, rowIndex);
      } else {
        let selected = this.isSelected(rowData);
        if (!selected && !this.isRowSelectable(rowData, rowIndex)) {
          return;
        }
        let metaSelection = this.rowTouched ? false : this.metaKeySelection;
        let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
        this.anchorRowIndex = rowIndex;
        this.rangeRowIndex = rowIndex;
        if (metaSelection) {
          let metaKey = event2.originalEvent.metaKey || event2.originalEvent.ctrlKey;
          if (selected && metaKey) {
            if (this.isSingleSelectionMode()) {
              this._selection = null;
              this.selectionKeys = {};
              this.selectionChange.emit(null);
            } else {
              let selectionIndex = this.findIndexInSelection(rowData);
              this._selection = this.selection.filter((val, i) => i != selectionIndex);
              this.selectionChange.emit(this.selection);
              if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
              }
            }
            this.onRowUnselect.emit({
              originalEvent: event2.originalEvent,
              data: rowData,
              type: "row"
            });
          } else {
            if (this.isSingleSelectionMode()) {
              this._selection = rowData;
              this.selectionChange.emit(rowData);
              if (dataKeyValue) {
                this.selectionKeys = {};
                this.selectionKeys[dataKeyValue] = 1;
              }
            } else if (this.isMultipleSelectionMode()) {
              if (metaKey) {
                this._selection = this.selection || [];
              } else {
                this._selection = [];
                this.selectionKeys = {};
              }
              this._selection = [...this.selection, rowData];
              this.selectionChange.emit(this.selection);
              if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
            this.onRowSelect.emit({
              originalEvent: event2.originalEvent,
              data: rowData,
              type: "row",
              index: rowIndex
            });
          }
        } else {
          if (this.selectionMode === "single") {
            if (selected) {
              this._selection = null;
              this.selectionKeys = {};
              this.selectionChange.emit(this.selection);
              this.onRowUnselect.emit({
                originalEvent: event2.originalEvent,
                data: rowData,
                type: "row",
                index: rowIndex
              });
            } else {
              this._selection = rowData;
              this.selectionChange.emit(this.selection);
              this.onRowSelect.emit({
                originalEvent: event2.originalEvent,
                data: rowData,
                type: "row",
                index: rowIndex
              });
              if (dataKeyValue) {
                this.selectionKeys = {};
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
          } else if (this.selectionMode === "multiple") {
            if (selected) {
              let selectionIndex = this.findIndexInSelection(rowData);
              this._selection = this.selection.filter((val, i) => i != selectionIndex);
              this.selectionChange.emit(this.selection);
              this.onRowUnselect.emit({
                originalEvent: event2.originalEvent,
                data: rowData,
                type: "row",
                index: rowIndex
              });
              if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
              }
            } else {
              this._selection = this.selection ? [...this.selection, rowData] : [rowData];
              this.selectionChange.emit(this.selection);
              this.onRowSelect.emit({
                originalEvent: event2.originalEvent,
                data: rowData,
                type: "row",
                index: rowIndex
              });
              if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
          }
        }
      }
      this.tableService.onSelectionChange();
      if (this.isStateful()) {
        this.saveState();
      }
    }
    this.rowTouched = false;
  }
  handleRowTouchEnd(event2) {
    this.rowTouched = true;
  }
  handleRowRightClick(event2) {
    if (this.contextMenu) {
      const rowData = event2.rowData;
      const rowIndex = event2.rowIndex;
      const showContextMenu = () => {
        this.contextMenu.show(event2.originalEvent);
        this.contextMenu.hideCallback = () => {
          this.contextMenuSelection = null;
          this.contextMenuSelectionChange.emit(null);
          this.tableService.onContextMenu(null);
        };
      };
      if (this.contextMenuSelectionMode === "separate") {
        this.contextMenuSelection = rowData;
        this.contextMenuSelectionChange.emit(rowData);
        this.onContextMenuSelect.emit({
          originalEvent: event2.originalEvent,
          data: rowData,
          index: event2.rowIndex
        });
        showContextMenu();
        this.tableService.onContextMenu(rowData);
      } else if (this.contextMenuSelectionMode === "joint") {
        this.preventSelectionSetterPropagation = true;
        let selected = this.isSelected(rowData);
        let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
        if (!selected) {
          if (!this.isRowSelectable(rowData, rowIndex)) {
            return;
          }
          if (this.isSingleSelectionMode()) {
            this.selection = rowData;
            this.selectionChange.emit(rowData);
            if (dataKeyValue) {
              this.selectionKeys = {};
              this.selectionKeys[dataKeyValue] = 1;
            }
          } else if (this.isMultipleSelectionMode()) {
            this._selection = this.selection ? [...this.selection, rowData] : [rowData];
            this.selectionChange.emit(this.selection);
            if (dataKeyValue) {
              this.selectionKeys[dataKeyValue] = 1;
            }
          }
        }
        this.tableService.onSelectionChange();
        showContextMenu();
        this.onContextMenuSelect.emit({
          originalEvent: event2,
          data: rowData,
          index: event2.rowIndex
        });
      }
    }
  }
  selectRange(event2, rowIndex, isMetaKeySelection) {
    let rangeStart, rangeEnd;
    if (this.anchorRowIndex > rowIndex) {
      rangeStart = rowIndex;
      rangeEnd = this.anchorRowIndex;
    } else if (this.anchorRowIndex < rowIndex) {
      rangeStart = this.anchorRowIndex;
      rangeEnd = rowIndex;
    } else {
      rangeStart = rowIndex;
      rangeEnd = rowIndex;
    }
    if (this.lazy && this.paginator) {
      rangeStart -= this.first;
      rangeEnd -= this.first;
    }
    let rangeRowsData = [];
    for (let i = rangeStart; i <= rangeEnd; i++) {
      let rangeRowData = this.filteredValue ? this.filteredValue[i] : this.value[i];
      if (!this.isSelected(rangeRowData) && !isMetaKeySelection) {
        if (!this.isRowSelectable(rangeRowData, rowIndex)) {
          continue;
        }
        rangeRowsData.push(rangeRowData);
        this._selection = [...this.selection, rangeRowData];
        let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rangeRowData, this.dataKey)) : null;
        if (dataKeyValue) {
          this.selectionKeys[dataKeyValue] = 1;
        }
      }
    }
    this.selectionChange.emit(this.selection);
    this.onRowSelect.emit({
      originalEvent: event2,
      data: rangeRowsData,
      type: "row"
    });
  }
  clearSelectionRange(event2) {
    let rangeStart, rangeEnd;
    let rangeRowIndex = this.rangeRowIndex;
    let anchorRowIndex = this.anchorRowIndex;
    if (rangeRowIndex > anchorRowIndex) {
      rangeStart = this.anchorRowIndex;
      rangeEnd = this.rangeRowIndex;
    } else if (rangeRowIndex < anchorRowIndex) {
      rangeStart = this.rangeRowIndex;
      rangeEnd = this.anchorRowIndex;
    } else {
      rangeStart = this.rangeRowIndex;
      rangeEnd = this.rangeRowIndex;
    }
    for (let i = rangeStart; i <= rangeEnd; i++) {
      let rangeRowData = this.value[i];
      let selectionIndex = this.findIndexInSelection(rangeRowData);
      this._selection = this.selection.filter((val, i2) => i2 != selectionIndex);
      let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rangeRowData, this.dataKey)) : null;
      if (dataKeyValue) {
        delete this.selectionKeys[dataKeyValue];
      }
      this.onRowUnselect.emit({
        originalEvent: event2,
        data: rangeRowData,
        type: "row"
      });
    }
  }
  isSelected(rowData) {
    if (rowData && this.selection) {
      if (this.dataKey) {
        return this.selectionKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== void 0;
      } else {
        if (Array.isArray(this.selection)) return this.findIndexInSelection(rowData) > -1;
        else return this.equals(rowData, this.selection);
      }
    }
    return false;
  }
  findIndexInSelection(rowData) {
    let index = -1;
    if (this.selection && this.selection.length) {
      for (let i = 0; i < this.selection.length; i++) {
        if (this.equals(rowData, this.selection[i])) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  isRowSelectable(data, index) {
    if (this.rowSelectable && !this.rowSelectable({
      data,
      index
    })) {
      return false;
    }
    return true;
  }
  toggleRowWithRadio(event2, rowData) {
    this.preventSelectionSetterPropagation = true;
    if (this.selection != rowData) {
      if (!this.isRowSelectable(rowData, event2.rowIndex)) {
        return;
      }
      this._selection = rowData;
      this.selectionChange.emit(this.selection);
      this.onRowSelect.emit({
        originalEvent: event2.originalEvent,
        index: event2.rowIndex,
        data: rowData,
        type: "radiobutton"
      });
      if (this.dataKey) {
        this.selectionKeys = {};
        this.selectionKeys[String(ObjectUtils.resolveFieldData(rowData, this.dataKey))] = 1;
      }
    } else {
      this._selection = null;
      this.selectionChange.emit(this.selection);
      this.onRowUnselect.emit({
        originalEvent: event2.originalEvent,
        index: event2.rowIndex,
        data: rowData,
        type: "radiobutton"
      });
    }
    this.tableService.onSelectionChange();
    if (this.isStateful()) {
      this.saveState();
    }
  }
  toggleRowWithCheckbox(event2, rowData) {
    this.selection = this.selection || [];
    let selected = this.isSelected(rowData);
    let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
    this.preventSelectionSetterPropagation = true;
    if (selected) {
      let selectionIndex = this.findIndexInSelection(rowData);
      this._selection = this.selection.filter((val, i) => i != selectionIndex);
      this.selectionChange.emit(this.selection);
      this.onRowUnselect.emit({
        originalEvent: event2.originalEvent,
        index: event2.rowIndex,
        data: rowData,
        type: "checkbox"
      });
      if (dataKeyValue) {
        delete this.selectionKeys[dataKeyValue];
      }
    } else {
      if (!this.isRowSelectable(rowData, event2.rowIndex)) {
        return;
      }
      this._selection = this.selection ? [...this.selection, rowData] : [rowData];
      this.selectionChange.emit(this.selection);
      this.onRowSelect.emit({
        originalEvent: event2.originalEvent,
        index: event2.rowIndex,
        data: rowData,
        type: "checkbox"
      });
      if (dataKeyValue) {
        this.selectionKeys[dataKeyValue] = 1;
      }
    }
    this.tableService.onSelectionChange();
    if (this.isStateful()) {
      this.saveState();
    }
  }
  toggleRowsWithCheckbox({
    originalEvent
  }, check) {
    if (this._selectAll !== null) {
      this.selectAllChange.emit({
        originalEvent,
        checked: check
      });
    } else {
      const data = this.selectionPageOnly ? this.dataToRender(this.processedData) : this.processedData;
      let selection = this.selectionPageOnly && this._selection ? this._selection.filter((s3) => !data.some((d) => this.equals(s3, d))) : [];
      if (check) {
        selection = this.frozenValue ? [...selection, ...this.frozenValue, ...data] : [...selection, ...data];
        selection = this.rowSelectable ? selection.filter((data2, index) => this.rowSelectable({
          data: data2,
          index
        })) : selection;
      }
      this._selection = selection;
      this.preventSelectionSetterPropagation = true;
      this.updateSelectionKeys();
      this.selectionChange.emit(this._selection);
      this.tableService.onSelectionChange();
      this.onHeaderCheckboxToggle.emit({
        originalEvent,
        checked: check
      });
      if (this.isStateful()) {
        this.saveState();
      }
    }
  }
  equals(data1, data2) {
    return this.compareSelectionBy === "equals" ? data1 === data2 : ObjectUtils.equals(data1, data2, this.dataKey);
  }
  /* Legacy Filtering for custom elements */
  filter(value, field, matchMode) {
    if (this.filterTimeout) {
      clearTimeout(this.filterTimeout);
    }
    if (!this.isFilterBlank(value)) {
      this.filters[field] = {
        value,
        matchMode
      };
    } else if (this.filters[field]) {
      delete this.filters[field];
    }
    this.filterTimeout = setTimeout(() => {
      this._filter();
      this.filterTimeout = null;
    }, this.filterDelay);
    this.anchorRowIndex = null;
  }
  filterGlobal(value, matchMode) {
    this.filter(value, "global", matchMode);
  }
  isFilterBlank(filter) {
    if (filter !== null && filter !== void 0) {
      if (typeof filter === "string" && filter.trim().length == 0 || Array.isArray(filter) && filter.length == 0) return true;
      else return false;
    }
    return true;
  }
  _filter() {
    if (!this.restoringFilter) {
      this.first = 0;
      this.firstChange.emit(this.first);
    }
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else {
      if (!this.value) {
        return;
      }
      if (!this.hasFilter()) {
        this.filteredValue = null;
        if (this.paginator) {
          this.totalRecords = this._totalRecords === 0 && this.value ? this.value.length : this._totalRecords;
        }
      } else {
        let globalFilterFieldsArray;
        if (this.filters["global"]) {
          if (!this.columns && !this.globalFilterFields) throw new Error("Global filtering requires dynamic columns or globalFilterFields to be defined.");
          else globalFilterFieldsArray = this.globalFilterFields || this.columns;
        }
        this.filteredValue = [];
        for (let i = 0; i < this.value.length; i++) {
          let localMatch = true;
          let globalMatch = false;
          let localFiltered = false;
          for (let prop in this.filters) {
            if (this.filters.hasOwnProperty(prop) && prop !== "global") {
              localFiltered = true;
              let filterField = prop;
              let filterMeta = this.filters[filterField];
              if (Array.isArray(filterMeta)) {
                for (let meta of filterMeta) {
                  localMatch = this.executeLocalFilter(filterField, this.value[i], meta);
                  if (meta.operator === FilterOperator.OR && localMatch || meta.operator === FilterOperator.AND && !localMatch) {
                    break;
                  }
                }
              } else {
                localMatch = this.executeLocalFilter(filterField, this.value[i], filterMeta);
              }
              if (!localMatch) {
                break;
              }
            }
          }
          if (this.filters["global"] && !globalMatch && globalFilterFieldsArray) {
            for (let j = 0; j < globalFilterFieldsArray.length; j++) {
              let globalFilterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];
              globalMatch = this.filterService.filters[this.filters["global"].matchMode](ObjectUtils.resolveFieldData(this.value[i], globalFilterField), this.filters["global"].value, this.filterLocale);
              if (globalMatch) {
                break;
              }
            }
          }
          let matches;
          if (this.filters["global"]) {
            matches = localFiltered ? localFiltered && localMatch && globalMatch : globalMatch;
          } else {
            matches = localFiltered && localMatch;
          }
          if (matches) {
            this.filteredValue.push(this.value[i]);
          }
        }
        if (this.filteredValue.length === this.value.length) {
          this.filteredValue = null;
        }
        if (this.paginator) {
          this.totalRecords = this.filteredValue ? this.filteredValue.length : this._totalRecords === 0 && this.value ? this.value.length : this._totalRecords ?? 0;
        }
      }
    }
    this.onFilter.emit({
      filters: this.filters,
      filteredValue: this.filteredValue || this.value
    });
    this.tableService.onValueChange(this.value);
    if (this.isStateful() && !this.restoringFilter) {
      this.saveState();
    }
    if (this.restoringFilter) {
      this.restoringFilter = false;
    }
    this.cd.markForCheck();
    if (this.scrollable) {
      this.resetScrollTop();
    }
  }
  executeLocalFilter(field, rowData, filterMeta) {
    let filterValue = filterMeta.value;
    let filterMatchMode = filterMeta.matchMode || FilterMatchMode.STARTS_WITH;
    let dataFieldValue = ObjectUtils.resolveFieldData(rowData, field);
    let filterConstraint = this.filterService.filters[filterMatchMode];
    return filterConstraint(dataFieldValue, filterValue, this.filterLocale);
  }
  hasFilter() {
    let empty = true;
    for (let prop in this.filters) {
      if (this.filters.hasOwnProperty(prop)) {
        empty = false;
        break;
      }
    }
    return !empty;
  }
  createLazyLoadMetadata() {
    return {
      first: this.first,
      rows: this.rows,
      sortField: this.sortField,
      sortOrder: this.sortOrder,
      filters: this.filters,
      globalFilter: this.filters && this.filters["global"] ? this.filters["global"].value : null,
      multiSortMeta: this.multiSortMeta,
      forceUpdate: () => this.cd.detectChanges()
    };
  }
  clear() {
    this._sortField = null;
    this._sortOrder = this.defaultSortOrder;
    this._multiSortMeta = null;
    this.tableService.onSort(null);
    this.clearFilterValues();
    this.filteredValue = null;
    this.first = 0;
    this.firstChange.emit(this.first);
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else {
      this.totalRecords = this._totalRecords === 0 && this._value ? this._value.length : this._totalRecords ?? 0;
    }
  }
  clearFilterValues() {
    for (const [, filterMetadata] of Object.entries(this.filters)) {
      if (Array.isArray(filterMetadata)) {
        for (let filter of filterMetadata) {
          filter.value = null;
        }
      } else if (filterMetadata) {
        filterMetadata.value = null;
      }
    }
  }
  reset() {
    this.clear();
  }
  getExportHeader(column) {
    return column[this.exportHeader] || column.header || column.field;
  }
  /**
   * Data export method.
   * @param {ExportCSVOptions} object - Export options.
   * @group Method
   */
  exportCSV(options) {
    let data;
    let csv = "";
    let columns = this.columns;
    if (options && options.selectionOnly) {
      data = this.selection || [];
    } else if (options && options.allValues) {
      data = this.value || [];
    } else {
      data = this.filteredValue || this.value;
      if (this.frozenValue) {
        data = data ? [...this.frozenValue, ...data] : this.frozenValue;
      }
    }
    const exportableColumns = columns.filter((column) => column.exportable !== false && column.field);
    csv += exportableColumns.map((column) => '"' + this.getExportHeader(column) + '"').join(this.csvSeparator);
    const body = data.map((record) => exportableColumns.map((column) => {
      let cellData = ObjectUtils.resolveFieldData(record, column.field);
      if (cellData != null) {
        if (this.exportFunction) {
          cellData = this.exportFunction({
            data: cellData,
            field: column.field
          });
        } else cellData = String(cellData).replace(/"/g, '""');
      } else cellData = "";
      return '"' + cellData + '"';
    }).join(this.csvSeparator)).join("\n");
    if (body.length) {
      csv += "\n" + body;
    }
    let blob = new Blob([new Uint8Array([239, 187, 191]), csv], {
      type: "text/csv;charset=utf-8;"
    });
    let link = this.renderer.createElement("a");
    link.style.display = "none";
    this.renderer.appendChild(this.document.body, link);
    if (link.download !== void 0) {
      link.setAttribute("href", URL.createObjectURL(blob));
      link.setAttribute("download", this.exportFilename + ".csv");
      link.click();
    } else {
      csv = "data:text/csv;charset=utf-8," + csv;
      this.document.defaultView?.open(encodeURI(csv));
    }
    this.renderer.removeChild(this.document.body, link);
  }
  onLazyItemLoad(event2) {
    this.onLazyLoad.emit(__spreadProps(__spreadValues(__spreadValues({}, this.createLazyLoadMetadata()), event2), {
      rows: event2.last - event2.first
    }));
  }
  /**
   * Resets scroll to top.
   * @group Method
   */
  resetScrollTop() {
    if (this.virtualScroll) this.scrollToVirtualIndex(0);
    else this.scrollTo({
      top: 0
    });
  }
  /**
   * Scrolls to given index when using virtual scroll.
   * @param {number} index - index of the element.
   * @group Method
   */
  scrollToVirtualIndex(index) {
    this.scroller && this.scroller.scrollToIndex(index);
  }
  /**
   * Scrolls to given index.
   * @param {ScrollToOptions} options - scroll options.
   * @group Method
   */
  scrollTo(options) {
    if (this.virtualScroll) {
      this.scroller?.scrollTo(options);
    } else if (this.wrapperViewChild && this.wrapperViewChild.nativeElement) {
      if (this.wrapperViewChild.nativeElement.scrollTo) {
        this.wrapperViewChild.nativeElement.scrollTo(options);
      } else {
        this.wrapperViewChild.nativeElement.scrollLeft = options.left;
        this.wrapperViewChild.nativeElement.scrollTop = options.top;
      }
    }
  }
  updateEditingCell(cell, data, field, index) {
    this.editingCell = cell;
    this.editingCellData = data;
    this.editingCellField = field;
    this.editingCellRowIndex = index;
    this.bindDocumentEditListener();
  }
  isEditingCellValid() {
    return this.editingCell && DomHandler.find(this.editingCell, ".ng-invalid.ng-dirty").length === 0;
  }
  bindDocumentEditListener() {
    if (!this.documentEditListener) {
      this.documentEditListener = this.renderer.listen(this.document, "click", (event2) => {
        if (this.editingCell && !this.selfClick && this.isEditingCellValid()) {
          DomHandler.removeClass(this.editingCell, "p-cell-editing");
          this.editingCell = null;
          this.onEditComplete.emit({
            field: this.editingCellField,
            data: this.editingCellData,
            originalEvent: event2,
            index: this.editingCellRowIndex
          });
          this.editingCellField = null;
          this.editingCellData = null;
          this.editingCellRowIndex = null;
          this.unbindDocumentEditListener();
          this.cd.markForCheck();
          if (this.overlaySubscription) {
            this.overlaySubscription.unsubscribe();
          }
        }
        this.selfClick = false;
      });
    }
  }
  unbindDocumentEditListener() {
    if (this.documentEditListener) {
      this.documentEditListener();
      this.documentEditListener = null;
    }
  }
  initRowEdit(rowData) {
    let dataKeyValue = String(ObjectUtils.resolveFieldData(rowData, this.dataKey));
    this.editingRowKeys[dataKeyValue] = true;
  }
  saveRowEdit(rowData, rowElement) {
    if (DomHandler.find(rowElement, ".ng-invalid.ng-dirty").length === 0) {
      let dataKeyValue = String(ObjectUtils.resolveFieldData(rowData, this.dataKey));
      delete this.editingRowKeys[dataKeyValue];
    }
  }
  cancelRowEdit(rowData) {
    let dataKeyValue = String(ObjectUtils.resolveFieldData(rowData, this.dataKey));
    delete this.editingRowKeys[dataKeyValue];
  }
  toggleRow(rowData, event2) {
    if (!this.dataKey && !this.groupRowsBy) {
      throw new Error("dataKey or groupRowsBy must be defined to use row expansion");
    }
    let dataKeyValue = this.groupRowsBy ? String(ObjectUtils.resolveFieldData(rowData, this.groupRowsBy)) : String(ObjectUtils.resolveFieldData(rowData, this.dataKey));
    if (this.expandedRowKeys[dataKeyValue] != null) {
      delete this.expandedRowKeys[dataKeyValue];
      this.onRowCollapse.emit({
        originalEvent: event2,
        data: rowData
      });
    } else {
      if (this.rowExpandMode === "single") {
        this.expandedRowKeys = {};
      }
      this.expandedRowKeys[dataKeyValue] = true;
      this.onRowExpand.emit({
        originalEvent: event2,
        data: rowData
      });
    }
    if (event2) {
      event2.preventDefault();
    }
    if (this.isStateful()) {
      this.saveState();
    }
  }
  isRowExpanded(rowData) {
    return this.groupRowsBy ? this.expandedRowKeys[String(ObjectUtils.resolveFieldData(rowData, this.groupRowsBy))] === true : this.expandedRowKeys[String(ObjectUtils.resolveFieldData(rowData, this.dataKey))] === true;
  }
  isRowEditing(rowData) {
    return this.editingRowKeys[String(ObjectUtils.resolveFieldData(rowData, this.dataKey))] === true;
  }
  isSingleSelectionMode() {
    return this.selectionMode === "single";
  }
  isMultipleSelectionMode() {
    return this.selectionMode === "multiple";
  }
  onColumnResizeBegin(event2) {
    let containerLeft = DomHandler.getOffset(this.el?.nativeElement).left;
    this.resizeColumnElement = event2.target.closest("th");
    this.columnResizing = true;
    if (event2.type == "touchstart") {
      this.lastResizerHelperX = event2.changedTouches[0].clientX - containerLeft + this.el?.nativeElement.scrollLeft;
    } else {
      this.lastResizerHelperX = event2.pageX - containerLeft + this.el?.nativeElement.scrollLeft;
    }
    this.onColumnResize(event2);
    event2.preventDefault();
  }
  onColumnResize(event2) {
    let containerLeft = DomHandler.getOffset(this.el?.nativeElement).left;
    DomHandler.addClass(this.el?.nativeElement, "p-unselectable-text");
    this.resizeHelperViewChild.nativeElement.style.height = this.el?.nativeElement.offsetHeight + "px";
    this.resizeHelperViewChild.nativeElement.style.top = "0px";
    if (event2.type == "touchmove") {
      this.resizeHelperViewChild.nativeElement.style.left = event2.changedTouches[0].clientX - containerLeft + this.el?.nativeElement.scrollLeft + "px";
    } else {
      this.resizeHelperViewChild.nativeElement.style.left = event2.pageX - containerLeft + this.el?.nativeElement.scrollLeft + "px";
    }
    this.resizeHelperViewChild.nativeElement.style.display = "block";
  }
  onColumnResizeEnd() {
    const delta = this.resizeHelperViewChild?.nativeElement.offsetLeft - this.lastResizerHelperX;
    const columnWidth = this.resizeColumnElement.offsetWidth;
    const newColumnWidth = columnWidth + delta;
    const elementMinWidth = this.resizeColumnElement.style.minWidth.replace(/[^\d.]/g, "");
    const minWidth = elementMinWidth ? parseFloat(elementMinWidth) : 15;
    if (newColumnWidth >= minWidth) {
      if (this.columnResizeMode === "fit") {
        const nextColumn = this.resizeColumnElement.nextElementSibling;
        const nextColumnWidth = nextColumn.offsetWidth - delta;
        if (newColumnWidth > 15 && nextColumnWidth > 15) {
          this.resizeTableCells(newColumnWidth, nextColumnWidth);
        }
      } else if (this.columnResizeMode === "expand") {
        this._initialColWidths = this._totalTableWidth();
        const tableWidth = this.tableViewChild?.nativeElement.offsetWidth + delta;
        this.setResizeTableWidth(tableWidth + "px");
        this.resizeTableCells(newColumnWidth, null);
      }
      this.onColResize.emit({
        element: this.resizeColumnElement,
        delta
      });
      if (this.isStateful()) {
        this.saveState();
      }
    }
    this.resizeHelperViewChild.nativeElement.style.display = "none";
    DomHandler.removeClass(this.el?.nativeElement, "p-unselectable-text");
  }
  _totalTableWidth() {
    let widths = [];
    const tableHead = DomHandler.findSingle(this.el.nativeElement, ".p-datatable-thead");
    let headers = DomHandler.find(tableHead, "tr > th");
    headers.forEach((header) => widths.push(DomHandler.getOuterWidth(header)));
    return widths;
  }
  onColumnDragStart(event2, columnElement) {
    this.reorderIconWidth = DomHandler.getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild?.nativeElement);
    this.reorderIconHeight = DomHandler.getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild?.nativeElement);
    this.draggedColumn = columnElement;
    event2.dataTransfer.setData("text", "b");
  }
  onColumnDragEnter(event2, dropHeader) {
    if (this.reorderableColumns && this.draggedColumn && dropHeader) {
      event2.preventDefault();
      let containerOffset = DomHandler.getOffset(this.el?.nativeElement);
      let dropHeaderOffset = DomHandler.getOffset(dropHeader);
      if (this.draggedColumn != dropHeader) {
        let dragIndex = DomHandler.indexWithinGroup(this.draggedColumn, "preorderablecolumn");
        let dropIndex = DomHandler.indexWithinGroup(dropHeader, "preorderablecolumn");
        let targetLeft = dropHeaderOffset.left - containerOffset.left;
        let targetTop = containerOffset.top - dropHeaderOffset.top;
        let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
        this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + "px";
        this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + "px";
        if (event2.pageX > columnCenter) {
          this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.dropPosition = 1;
        } else {
          this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.dropPosition = -1;
        }
        this.reorderIndicatorUpViewChild.nativeElement.style.display = "block";
        this.reorderIndicatorDownViewChild.nativeElement.style.display = "block";
      } else {
        event2.dataTransfer.dropEffect = "none";
      }
    }
  }
  onColumnDragLeave(event2) {
    if (this.reorderableColumns && this.draggedColumn) {
      event2.preventDefault();
    }
  }
  onColumnDrop(event2, dropColumn) {
    event2.preventDefault();
    if (this.draggedColumn) {
      let dragIndex = DomHandler.indexWithinGroup(this.draggedColumn, "preorderablecolumn");
      let dropIndex = DomHandler.indexWithinGroup(dropColumn, "preorderablecolumn");
      let allowDrop = dragIndex != dropIndex;
      if (allowDrop && (dropIndex - dragIndex == 1 && this.dropPosition === -1 || dragIndex - dropIndex == 1 && this.dropPosition === 1)) {
        allowDrop = false;
      }
      if (allowDrop && dropIndex < dragIndex && this.dropPosition === 1) {
        dropIndex = dropIndex + 1;
      }
      if (allowDrop && dropIndex > dragIndex && this.dropPosition === -1) {
        dropIndex = dropIndex - 1;
      }
      if (allowDrop) {
        ObjectUtils.reorderArray(this.columns, dragIndex, dropIndex);
        this.onColReorder.emit({
          dragIndex,
          dropIndex,
          columns: this.columns
        });
        if (this.isStateful()) {
          this.zone.runOutsideAngular(() => {
            setTimeout(() => {
              this.saveState();
            });
          });
        }
      }
      if (this.resizableColumns && this.resizeColumnElement) {
        let width = this.columnResizeMode === "expand" ? this._initialColWidths : this._totalTableWidth();
        ObjectUtils.reorderArray(width, dragIndex + 1, dropIndex + 1);
        this.updateStyleElement(width, dragIndex, 0, 0);
      }
      this.reorderIndicatorUpViewChild.nativeElement.style.display = "none";
      this.reorderIndicatorDownViewChild.nativeElement.style.display = "none";
      this.draggedColumn.draggable = false;
      this.draggedColumn = null;
      this.dropPosition = null;
    }
  }
  resizeTableCells(newColumnWidth, nextColumnWidth) {
    let colIndex = DomHandler.index(this.resizeColumnElement);
    let width = this.columnResizeMode === "expand" ? this._initialColWidths : this._totalTableWidth();
    this.updateStyleElement(width, colIndex, newColumnWidth, nextColumnWidth);
  }
  updateStyleElement(width, colIndex, newColumnWidth, nextColumnWidth) {
    this.destroyStyleElement();
    this.createStyleElement();
    let innerHTML = "";
    width.forEach((width2, index) => {
      let colWidth = index === colIndex ? newColumnWidth : nextColumnWidth && index === colIndex + 1 ? nextColumnWidth : width2;
      let style17 = `width: ${colWidth}px !important; max-width: ${colWidth}px !important;`;
      innerHTML += `
                #${this.id}-table > .p-datatable-thead > tr > th:nth-child(${index + 1}),
                #${this.id}-table > .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                #${this.id}-table > .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                    ${style17}
                }
            `;
    });
    this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
  }
  onRowDragStart(event2, index) {
    this.rowDragging = true;
    this.draggedRowIndex = index;
    event2.dataTransfer.setData("text", "b");
  }
  onRowDragOver(event2, index, rowElement) {
    if (this.rowDragging && this.draggedRowIndex !== index) {
      let rowY = DomHandler.getOffset(rowElement).top;
      let pageY = event2.pageY;
      let rowMidY = rowY + DomHandler.getOuterHeight(rowElement) / 2;
      let prevRowElement = rowElement.previousElementSibling;
      if (pageY < rowMidY) {
        DomHandler.removeClass(rowElement, "p-datatable-dragpoint-bottom");
        this.droppedRowIndex = index;
        if (prevRowElement) DomHandler.addClass(prevRowElement, "p-datatable-dragpoint-bottom");
        else DomHandler.addClass(rowElement, "p-datatable-dragpoint-top");
      } else {
        if (prevRowElement) DomHandler.removeClass(prevRowElement, "p-datatable-dragpoint-bottom");
        else DomHandler.addClass(rowElement, "p-datatable-dragpoint-top");
        this.droppedRowIndex = index + 1;
        DomHandler.addClass(rowElement, "p-datatable-dragpoint-bottom");
      }
    }
  }
  onRowDragLeave(event2, rowElement) {
    let prevRowElement = rowElement.previousElementSibling;
    if (prevRowElement) {
      DomHandler.removeClass(prevRowElement, "p-datatable-dragpoint-bottom");
    }
    DomHandler.removeClass(rowElement, "p-datatable-dragpoint-bottom");
    DomHandler.removeClass(rowElement, "p-datatable-dragpoint-top");
  }
  onRowDragEnd(event2) {
    this.rowDragging = false;
    this.draggedRowIndex = null;
    this.droppedRowIndex = null;
  }
  onRowDrop(event2, rowElement) {
    if (this.droppedRowIndex != null) {
      let dropIndex = this.draggedRowIndex > this.droppedRowIndex ? this.droppedRowIndex : this.droppedRowIndex === 0 ? 0 : this.droppedRowIndex - 1;
      ObjectUtils.reorderArray(this.value, this.draggedRowIndex, dropIndex);
      if (this.virtualScroll) {
        this._value = [...this._value];
      }
      this.onRowReorder.emit({
        dragIndex: this.draggedRowIndex,
        dropIndex
      });
    }
    this.onRowDragLeave(event2, rowElement);
    this.onRowDragEnd(event2);
  }
  isEmpty() {
    let data = this.filteredValue || this.value;
    return data == null || data.length == 0;
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  getStorage() {
    if (isPlatformBrowser(this.platformId)) {
      switch (this.stateStorage) {
        case "local":
          return window.localStorage;
        case "session":
          return window.sessionStorage;
        default:
          throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
      }
    } else {
      throw new Error("Browser storage is not available in the server side.");
    }
  }
  isStateful() {
    return this.stateKey != null;
  }
  saveState() {
    const storage = this.getStorage();
    let state2 = {};
    if (this.paginator) {
      state2.first = this.first;
      state2.rows = this.rows;
    }
    if (this.sortField) {
      state2.sortField = this.sortField;
      state2.sortOrder = this.sortOrder;
    }
    if (this.multiSortMeta) {
      state2.multiSortMeta = this.multiSortMeta;
    }
    if (this.hasFilter()) {
      state2.filters = this.filters;
    }
    if (this.resizableColumns) {
      this.saveColumnWidths(state2);
    }
    if (this.reorderableColumns) {
      this.saveColumnOrder(state2);
    }
    if (this.selection) {
      state2.selection = this.selection;
    }
    if (Object.keys(this.expandedRowKeys).length) {
      state2.expandedRowKeys = this.expandedRowKeys;
    }
    storage.setItem(this.stateKey, JSON.stringify(state2));
    this.onStateSave.emit(state2);
  }
  clearState() {
    const storage = this.getStorage();
    if (this.stateKey) {
      storage.removeItem(this.stateKey);
    }
  }
  restoreState() {
    const storage = this.getStorage();
    const stateString = storage.getItem(this.stateKey);
    const dateFormat = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
    const reviver = function(key, value) {
      if (typeof value === "string" && dateFormat.test(value)) {
        return new Date(value);
      }
      return value;
    };
    if (stateString) {
      let state2 = JSON.parse(stateString, reviver);
      if (this.paginator) {
        if (this.first !== void 0) {
          this.first = state2.first;
          this.firstChange.emit(this.first);
        }
        if (this.rows !== void 0) {
          this.rows = state2.rows;
          this.rowsChange.emit(this.rows);
        }
      }
      if (state2.sortField) {
        this.restoringSort = true;
        this._sortField = state2.sortField;
        this._sortOrder = state2.sortOrder;
      }
      if (state2.multiSortMeta) {
        this.restoringSort = true;
        this._multiSortMeta = state2.multiSortMeta;
      }
      if (state2.filters) {
        this.restoringFilter = true;
        this.filters = state2.filters;
      }
      if (this.resizableColumns) {
        this.columnWidthsState = state2.columnWidths;
        this.tableWidthState = state2.tableWidth;
      }
      if (state2.expandedRowKeys) {
        this.expandedRowKeys = state2.expandedRowKeys;
      }
      if (state2.selection) {
        Promise.resolve(null).then(() => this.selectionChange.emit(state2.selection));
      }
      this.stateRestored = true;
      this.onStateRestore.emit(state2);
    }
  }
  saveColumnWidths(state2) {
    let widths = [];
    let headers = [];
    const container = this.el?.nativeElement;
    if (container) {
      headers = DomHandler.find(container, ".p-datatable-thead > tr > th");
    }
    headers.forEach((header) => widths.push(DomHandler.getOuterWidth(header)));
    state2.columnWidths = widths.join(",");
    if (this.columnResizeMode === "expand" && this.tableViewChild) {
      state2.tableWidth = DomHandler.getOuterWidth(this.tableViewChild.nativeElement);
    }
  }
  setResizeTableWidth(width) {
    this.tableViewChild.nativeElement.style.width = width;
    this.tableViewChild.nativeElement.style.minWidth = width;
  }
  restoreColumnWidths() {
    if (this.columnWidthsState) {
      let widths = this.columnWidthsState.split(",");
      if (this.columnResizeMode === "expand" && this.tableWidthState) {
        this.setResizeTableWidth(this.tableWidthState + "px");
      }
      if (ObjectUtils.isNotEmpty(widths)) {
        this.createStyleElement();
        let innerHTML = "";
        widths.forEach((width, index) => {
          let style17 = `width: ${width}px !important; max-width: ${width}px !important`;
          innerHTML += `
                        #${this.id}-table > .p-datatable-thead > tr > th:nth-child(${index + 1}),
                        #${this.id}-table > .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                        #${this.id}-table > .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                            ${style17}
                        }
                    `;
        });
        this.styleElement.innerHTML = innerHTML;
      }
    }
  }
  saveColumnOrder(state2) {
    if (this.columns) {
      let columnOrder = [];
      this.columns.map((column) => {
        columnOrder.push(column.field || column.key);
      });
      state2.columnOrder = columnOrder;
    }
  }
  restoreColumnOrder() {
    const storage = this.getStorage();
    const stateString = storage.getItem(this.stateKey);
    if (stateString) {
      let state2 = JSON.parse(stateString);
      let columnOrder = state2.columnOrder;
      if (columnOrder) {
        let reorderedColumns = [];
        columnOrder.map((key) => {
          let col = this.findColumnByKey(key);
          if (col) {
            reorderedColumns.push(col);
          }
        });
        this.columnOrderStateRestored = true;
        this.columns = reorderedColumns;
      }
    }
  }
  findColumnByKey(key) {
    if (this.columns) {
      for (let col of this.columns) {
        if (col.key === key || col.field === key) return col;
        else continue;
      }
    } else {
      return null;
    }
  }
  createStyleElement() {
    this.styleElement = this.renderer.createElement("style");
    this.styleElement.type = "text/css";
    DomHandler.setAttribute(this.styleElement, "nonce", this.config?.csp()?.nonce);
    this.renderer.appendChild(this.document.head, this.styleElement);
    DomHandler.setAttribute(this.styleElement, "nonce", this.config?.csp()?.nonce);
  }
  getGroupRowsMeta() {
    return {
      field: this.groupRowsBy,
      order: this.groupRowsByOrder
    };
  }
  createResponsiveStyle() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.responsiveStyleElement) {
        this.responsiveStyleElement = this.renderer.createElement("style");
        this.responsiveStyleElement.type = "text/css";
        DomHandler.setAttribute(this.responsiveStyleElement, "nonce", this.config?.csp()?.nonce);
        this.renderer.appendChild(this.document.head, this.responsiveStyleElement);
        let innerHTML = `
    @media screen and (max-width: ${this.breakpoint}) {
        #${this.id}-table > .p-datatable-thead > tr > th,
        #${this.id}-table > .p-datatable-tfoot > tr > td {
            display: none !important;
        }

        #${this.id}-table > .p-datatable-tbody > tr > td {
            display: flex;
            width: 100% !important;
            align-items: center;
            justify-content: space-between;
        }

        #${this.id}-table > .p-datatable-tbody > tr > td:not(:last-child) {
            border: 0 none;
        }

        #${this.id}.p-datatable-gridlines > .p-datatable-table-container > .p-datatable-table > .p-datatable-tbody > tr > td:last-child {
            border-top: 0;
            border-right: 0;
            border-left: 0;
        }

        #${this.id}-table > .p-datatable-tbody > tr > td > .p-datatable-column-title {
            display: block;
        }
    }
    `;
        this.renderer.setProperty(this.responsiveStyleElement, "innerHTML", innerHTML);
        DomHandler.setAttribute(this.responsiveStyleElement, "nonce", this.config?.csp()?.nonce);
      }
    }
  }
  destroyResponsiveStyle() {
    if (this.responsiveStyleElement) {
      this.renderer.removeChild(this.document.head, this.responsiveStyleElement);
      this.responsiveStyleElement = null;
    }
  }
  destroyStyleElement() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  ngAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  onDestroy() {
    this.unbindDocumentEditListener();
    this.editingCell = null;
    this.initialized = null;
    this.destroyStyleElement();
    this.destroyResponsiveStyle();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTable_BaseFactory;
    return function Table_Factory(__ngFactoryType__) {
      return (ɵTable_BaseFactory || (ɵTable_BaseFactory = ɵɵgetInheritedFactory(_Table)))(__ngFactoryType__ || _Table);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Table,
    selectors: [["p-table"]],
    contentQueries: function Table_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c09, 4);
        ɵɵcontentQuery(dirIndex, _c114, 4);
        ɵɵcontentQuery(dirIndex, _c29, 4);
        ɵɵcontentQuery(dirIndex, _c34, 4);
        ɵɵcontentQuery(dirIndex, _c43, 4);
        ɵɵcontentQuery(dirIndex, _c53, 4);
        ɵɵcontentQuery(dirIndex, _c63, 4);
        ɵɵcontentQuery(dirIndex, _c72, 4);
        ɵɵcontentQuery(dirIndex, _c82, 4);
        ɵɵcontentQuery(dirIndex, _c92, 4);
        ɵɵcontentQuery(dirIndex, _c102, 4);
        ɵɵcontentQuery(dirIndex, _c115, 4);
        ɵɵcontentQuery(dirIndex, _c123, 4);
        ɵɵcontentQuery(dirIndex, _c132, 4);
        ɵɵcontentQuery(dirIndex, _c142, 4);
        ɵɵcontentQuery(dirIndex, _c152, 4);
        ɵɵcontentQuery(dirIndex, _c162, 4);
        ɵɵcontentQuery(dirIndex, _c172, 4);
        ɵɵcontentQuery(dirIndex, _c182, 4);
        ɵɵcontentQuery(dirIndex, _c192, 4);
        ɵɵcontentQuery(dirIndex, _c202, 4);
        ɵɵcontentQuery(dirIndex, _c212, 4);
        ɵɵcontentQuery(dirIndex, _c223, 4);
        ɵɵcontentQuery(dirIndex, _c232, 4);
        ɵɵcontentQuery(dirIndex, _c242, 4);
        ɵɵcontentQuery(dirIndex, _c252, 4);
        ɵɵcontentQuery(dirIndex, _c262, 4);
        ɵɵcontentQuery(dirIndex, _c272, 4);
        ɵɵcontentQuery(dirIndex, _c282, 4);
        ɵɵcontentQuery(dirIndex, _c292, 4);
        ɵɵcontentQuery(dirIndex, _c30, 4);
        ɵɵcontentQuery(dirIndex, _c31, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._headerTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._headerGroupedTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._bodyTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._loadingBodyTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._captionTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._footerTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._footerGroupedTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._summaryTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._colGroupTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._expandedRowTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._groupHeaderTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._groupFooterTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._frozenExpandedRowTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._frozenHeaderTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._frozenBodyTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._frozenFooterTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._frozenColGroupTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._emptyMessageTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._paginatorLeftTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._paginatorRightTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._paginatorDropdownItemTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._loadingIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._reorderIndicatorUpIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._reorderIndicatorDownIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._sortIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._checkboxIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._headerCheckboxIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._paginatorDropdownIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._paginatorFirstPageLinkIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._paginatorLastPageLinkIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._paginatorPreviousPageLinkIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._paginatorNextPageLinkIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._templates = _t2);
      }
    },
    viewQuery: function Table_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c322, 5);
        ɵɵviewQuery(_c332, 5);
        ɵɵviewQuery(_c342, 5);
        ɵɵviewQuery(_c35, 5);
        ɵɵviewQuery(_c36, 5);
        ɵɵviewQuery(_c37, 5);
        ɵɵviewQuery(_c38, 5);
        ɵɵviewQuery(_c39, 5);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.resizeHelperViewChild = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.reorderIndicatorUpViewChild = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.reorderIndicatorDownViewChild = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.wrapperViewChild = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.tableViewChild = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.tableHeaderViewChild = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.tableFooterViewChild = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.scroller = _t2.first);
      }
    },
    hostVars: 2,
    hostBindings: function Table_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      frozenColumns: "frozenColumns",
      frozenValue: "frozenValue",
      styleClass: "styleClass",
      tableStyle: "tableStyle",
      tableStyleClass: "tableStyleClass",
      paginator: [2, "paginator", "paginator", booleanAttribute],
      pageLinks: [2, "pageLinks", "pageLinks", numberAttribute],
      rowsPerPageOptions: "rowsPerPageOptions",
      alwaysShowPaginator: [2, "alwaysShowPaginator", "alwaysShowPaginator", booleanAttribute],
      paginatorPosition: "paginatorPosition",
      paginatorStyleClass: "paginatorStyleClass",
      paginatorDropdownAppendTo: "paginatorDropdownAppendTo",
      paginatorDropdownScrollHeight: "paginatorDropdownScrollHeight",
      currentPageReportTemplate: "currentPageReportTemplate",
      showCurrentPageReport: [2, "showCurrentPageReport", "showCurrentPageReport", booleanAttribute],
      showJumpToPageDropdown: [2, "showJumpToPageDropdown", "showJumpToPageDropdown", booleanAttribute],
      showJumpToPageInput: [2, "showJumpToPageInput", "showJumpToPageInput", booleanAttribute],
      showFirstLastIcon: [2, "showFirstLastIcon", "showFirstLastIcon", booleanAttribute],
      showPageLinks: [2, "showPageLinks", "showPageLinks", booleanAttribute],
      defaultSortOrder: [2, "defaultSortOrder", "defaultSortOrder", numberAttribute],
      sortMode: "sortMode",
      resetPageOnSort: [2, "resetPageOnSort", "resetPageOnSort", booleanAttribute],
      selectionMode: "selectionMode",
      selectionPageOnly: [2, "selectionPageOnly", "selectionPageOnly", booleanAttribute],
      contextMenuSelection: "contextMenuSelection",
      contextMenuSelectionMode: "contextMenuSelectionMode",
      dataKey: "dataKey",
      metaKeySelection: [2, "metaKeySelection", "metaKeySelection", booleanAttribute],
      rowSelectable: "rowSelectable",
      rowTrackBy: "rowTrackBy",
      lazy: [2, "lazy", "lazy", booleanAttribute],
      lazyLoadOnInit: [2, "lazyLoadOnInit", "lazyLoadOnInit", booleanAttribute],
      compareSelectionBy: "compareSelectionBy",
      csvSeparator: "csvSeparator",
      exportFilename: "exportFilename",
      filters: "filters",
      globalFilterFields: "globalFilterFields",
      filterDelay: [2, "filterDelay", "filterDelay", numberAttribute],
      filterLocale: "filterLocale",
      expandedRowKeys: "expandedRowKeys",
      editingRowKeys: "editingRowKeys",
      rowExpandMode: "rowExpandMode",
      scrollable: [2, "scrollable", "scrollable", booleanAttribute],
      rowGroupMode: "rowGroupMode",
      scrollHeight: "scrollHeight",
      virtualScroll: [2, "virtualScroll", "virtualScroll", booleanAttribute],
      virtualScrollItemSize: [2, "virtualScrollItemSize", "virtualScrollItemSize", numberAttribute],
      virtualScrollOptions: "virtualScrollOptions",
      virtualScrollDelay: [2, "virtualScrollDelay", "virtualScrollDelay", numberAttribute],
      frozenWidth: "frozenWidth",
      contextMenu: "contextMenu",
      resizableColumns: [2, "resizableColumns", "resizableColumns", booleanAttribute],
      columnResizeMode: "columnResizeMode",
      reorderableColumns: [2, "reorderableColumns", "reorderableColumns", booleanAttribute],
      loading: [2, "loading", "loading", booleanAttribute],
      loadingIcon: "loadingIcon",
      showLoader: [2, "showLoader", "showLoader", booleanAttribute],
      rowHover: [2, "rowHover", "rowHover", booleanAttribute],
      customSort: [2, "customSort", "customSort", booleanAttribute],
      showInitialSortBadge: [2, "showInitialSortBadge", "showInitialSortBadge", booleanAttribute],
      exportFunction: "exportFunction",
      exportHeader: "exportHeader",
      stateKey: "stateKey",
      stateStorage: "stateStorage",
      editMode: "editMode",
      groupRowsBy: "groupRowsBy",
      size: "size",
      showGridlines: [2, "showGridlines", "showGridlines", booleanAttribute],
      stripedRows: [2, "stripedRows", "stripedRows", booleanAttribute],
      groupRowsByOrder: [2, "groupRowsByOrder", "groupRowsByOrder", numberAttribute],
      responsiveLayout: "responsiveLayout",
      breakpoint: "breakpoint",
      paginatorLocale: "paginatorLocale",
      value: "value",
      columns: "columns",
      first: "first",
      rows: "rows",
      totalRecords: "totalRecords",
      sortField: "sortField",
      sortOrder: "sortOrder",
      multiSortMeta: "multiSortMeta",
      selection: "selection",
      selectAll: "selectAll"
    },
    outputs: {
      contextMenuSelectionChange: "contextMenuSelectionChange",
      selectAllChange: "selectAllChange",
      selectionChange: "selectionChange",
      onRowSelect: "onRowSelect",
      onRowUnselect: "onRowUnselect",
      onPage: "onPage",
      onSort: "onSort",
      onFilter: "onFilter",
      onLazyLoad: "onLazyLoad",
      onRowExpand: "onRowExpand",
      onRowCollapse: "onRowCollapse",
      onContextMenuSelect: "onContextMenuSelect",
      onColResize: "onColResize",
      onColReorder: "onColReorder",
      onRowReorder: "onRowReorder",
      onEditInit: "onEditInit",
      onEditComplete: "onEditComplete",
      onEditCancel: "onEditCancel",
      onHeaderCheckboxToggle: "onHeaderCheckboxToggle",
      sortFunction: "sortFunction",
      firstChange: "firstChange",
      rowsChange: "rowsChange",
      onStateSave: "onStateSave",
      onStateRestore: "onStateRestore"
    },
    standalone: false,
    features: [ɵɵProvidersFeature([TableService, TableStyle, {
      provide: TABLE_INSTANCE,
      useExisting: _Table
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Table
    }]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 14,
    vars: 14,
    consts: [["wrapper", ""], ["buildInTable", ""], ["scroller", ""], ["content", ""], ["table", ""], ["thead", ""], ["tfoot", ""], ["resizeHelper", ""], ["reorderIndicatorUp", ""], ["reorderIndicatorDown", ""], [3, "class", "pBind", 4, "ngIf"], [3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "appendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "styleClass", "locale", "pt", "onPageChange", 4, "ngIf"], [3, "ngStyle", "pBind"], [3, "items", "columns", "style", "scrollHeight", "itemSize", "step", "delay", "inline", "autoSize", "lazy", "loaderDisabled", "showSpacer", "showLoader", "options", "pt", "onLazyLoad", 4, "ngIf"], [4, "ngIf"], [3, "ngClass", "pBind", 4, "ngIf"], [3, "ngClass", "pBind", "display", 4, "ngIf"], [3, "pBind"], ["data-p-icon", "spinner", 3, "spin", "class", "pBind", 4, "ngIf"], ["data-p-icon", "spinner", 3, "spin", "pBind"], [4, "ngTemplateOutlet"], [3, "onPageChange", "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "appendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "styleClass", "locale", "pt"], ["pTemplate", "dropdownicon"], ["pTemplate", "firstpagelinkicon"], ["pTemplate", "previouspagelinkicon"], ["pTemplate", "lastpagelinkicon"], ["pTemplate", "nextpagelinkicon"], [3, "onLazyLoad", "items", "columns", "scrollHeight", "itemSize", "step", "delay", "inline", "autoSize", "lazy", "loaderDisabled", "showSpacer", "showLoader", "options", "pt"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "table", 3, "pBind"], ["role", "rowgroup", 3, "ngStyle", "pBind"], ["role", "rowgroup", 3, "class", "pBind", "value", "frozenRows", "pTableBody", "pTableBodyTemplate", "frozen", 4, "ngIf"], ["role", "rowgroup", 3, "pBind", "value", "pTableBody", "pTableBodyTemplate", "scrollerOptions"], ["role", "rowgroup", 3, "style", "class", "pBind", 4, "ngIf"], ["role", "rowgroup", 3, "ngClass", "ngStyle", "pBind", 4, "ngIf"], ["role", "rowgroup", 3, "pBind", "value", "frozenRows", "pTableBody", "pTableBodyTemplate", "frozen"], ["role", "rowgroup", 3, "pBind"], ["role", "rowgroup", 3, "ngClass", "ngStyle", "pBind"], [3, "ngClass", "pBind"], ["data-p-icon", "arrow-down", 3, "pBind", 4, "ngIf"], ["data-p-icon", "arrow-down", 3, "pBind"], ["data-p-icon", "arrow-up", 3, "pBind", 4, "ngIf"], ["data-p-icon", "arrow-up", 3, "pBind"]],
    template: function Table_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, Table_div_0_Template, 3, 5, "div", 10)(1, Table_div_1_Template, 2, 4, "div", 10)(2, Table_p_paginator_2_Template, 6, 25, "p-paginator", 11);
        ɵɵelementStart(3, "div", 12, 0);
        ɵɵtemplate(5, Table_p_scroller_5_Template, 4, 18, "p-scroller", 13)(6, Table_ng_container_6_Template, 2, 7, "ng-container", 14)(7, Table_ng_template_7_Template, 10, 30, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵtemplate(9, Table_p_paginator_9_Template, 6, 25, "p-paginator", 11)(10, Table_div_10_Template, 2, 3, "div", 15)(11, Table_div_11_Template, 2, 4, "div", 16)(12, Table_span_12_Template, 4, 6, "span", 16)(13, Table_span_13_Template, 4, 6, "span", 16);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.loading && ctx.showLoader);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.captionTemplate || ctx._captionTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.paginator && (ctx.paginatorPosition === "top" || ctx.paginatorPosition == "both"));
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("tableContainer"));
        ɵɵproperty("ngStyle", ctx.sx("tableContainer"))("pBind", ctx.ptm("tableContainer"));
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.virtualScroll);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.virtualScroll);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.paginator && (ctx.paginatorPosition === "bottom" || ctx.paginatorPosition == "both"));
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.summaryTemplate || ctx._summaryTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.resizableColumns);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.reorderableColumns);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.reorderableColumns);
      }
    },
    dependencies: () => [NgClass, NgIf, NgTemplateOutlet, NgStyle, Paginator, PrimeTemplate, Scroller, ArrowDownIcon, ArrowUpIcon, SpinnerIcon, Bind, TableBody],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Table, [{
    type: Component,
    args: [{
      selector: "p-table",
      standalone: false,
      template: `
        <div [class]="cx('mask')" [pBind]="ptm('mask')" *ngIf="loading && showLoader">
            <i *ngIf="loadingIcon" [class]="cn(cx('loadingIcon'), loadingIcon)" [pBind]="ptm('loadingIcon')"></i>
            <ng-container *ngIf="!loadingIcon">
                <svg data-p-icon="spinner" *ngIf="!loadingIconTemplate && !_loadingIconTemplate" [spin]="true" [class]="cx('loadingIcon')" [pBind]="ptm('loadingIcon')" />
                <span *ngIf="loadingIconTemplate || _loadingIconTemplate" [class]="cx('loadingIcon')" [pBind]="ptm('loadingIcon')">
                    <ng-template *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate"></ng-template>
                </span>
            </ng-container>
        </div>
        <div *ngIf="captionTemplate || _captionTemplate" [class]="cx('header')" [pBind]="ptm('header')">
            <ng-container *ngTemplateOutlet="captionTemplate || _captionTemplate"></ng-container>
        </div>
        <p-paginator
            [rows]="rows"
            [first]="first"
            [totalRecords]="totalRecords"
            [pageLinkSize]="pageLinks"
            [alwaysShow]="alwaysShowPaginator"
            (onPageChange)="onPageChange($event)"
            [rowsPerPageOptions]="rowsPerPageOptions"
            *ngIf="paginator && (paginatorPosition === 'top' || paginatorPosition == 'both')"
            [templateLeft]="paginatorLeftTemplate || _paginatorLeftTemplate"
            [templateRight]="paginatorRightTemplate || _paginatorRightTemplate"
            [appendTo]="paginatorDropdownAppendTo"
            [dropdownScrollHeight]="paginatorDropdownScrollHeight"
            [currentPageReportTemplate]="currentPageReportTemplate"
            [showFirstLastIcon]="showFirstLastIcon"
            [dropdownItemTemplate]="paginatorDropdownItemTemplate || _paginatorDropdownItemTemplate"
            [showCurrentPageReport]="showCurrentPageReport"
            [showJumpToPageDropdown]="showJumpToPageDropdown"
            [showJumpToPageInput]="showJumpToPageInput"
            [showPageLinks]="showPageLinks"
            [styleClass]="cx('pcPaginator') + ' ' + paginatorStyleClass && paginatorStyleClass"
            [locale]="paginatorLocale"
            [pt]="ptm('pcPaginator')"
        >
            <ng-template pTemplate="dropdownicon" *ngIf="paginatorDropdownIconTemplate || _paginatorDropdownIconTemplate">
                <ng-container *ngTemplateOutlet="paginatorDropdownIconTemplate || _paginatorDropdownIconTemplate"></ng-container>
            </ng-template>

            <ng-template pTemplate="firstpagelinkicon" *ngIf="paginatorFirstPageLinkIconTemplate || _paginatorFirstPageLinkIconTemplate">
                <ng-container *ngTemplateOutlet="paginatorFirstPageLinkIconTemplate || _paginatorFirstPageLinkIconTemplate"></ng-container>
            </ng-template>

            <ng-template pTemplate="previouspagelinkicon" *ngIf="paginatorPreviousPageLinkIconTemplate || _paginatorPreviousPageLinkIconTemplate">
                <ng-container *ngTemplateOutlet="paginatorPreviousPageLinkIconTemplate || _paginatorPreviousPageLinkIconTemplate"></ng-container>
            </ng-template>

            <ng-template pTemplate="lastpagelinkicon" *ngIf="paginatorLastPageLinkIconTemplate || _paginatorLastPageLinkIconTemplate">
                <ng-container *ngTemplateOutlet="paginatorLastPageLinkIconTemplate || _paginatorLastPageLinkIconTemplate"></ng-container>
            </ng-template>

            <ng-template pTemplate="nextpagelinkicon" *ngIf="paginatorNextPageLinkIconTemplate || _paginatorNextPageLinkIconTemplate">
                <ng-container *ngTemplateOutlet="paginatorNextPageLinkIconTemplate || _paginatorNextPageLinkIconTemplate"></ng-container>
            </ng-template>
        </p-paginator>

        <div #wrapper [class]="cx('tableContainer')" [ngStyle]="sx('tableContainer')" [pBind]="ptm('tableContainer')">
            <p-scroller
                #scroller
                *ngIf="virtualScroll"
                [items]="processedData"
                [columns]="columns"
                [style]="{
                    height: scrollHeight !== 'flex' ? scrollHeight : undefined
                }"
                [scrollHeight]="scrollHeight !== 'flex' ? undefined : '100%'"
                [itemSize]="virtualScrollItemSize"
                [step]="rows"
                [delay]="lazy ? virtualScrollDelay : 0"
                [inline]="true"
                [autoSize]="true"
                [lazy]="lazy"
                (onLazyLoad)="onLazyItemLoad($event)"
                [loaderDisabled]="true"
                [showSpacer]="false"
                [showLoader]="loadingBodyTemplate || _loadingBodyTemplate"
                [options]="virtualScrollOptions"
                [pt]="ptm('virtualScroller')"
            >
                <ng-template #content let-items let-scrollerOptions="options">
                    <ng-container
                        *ngTemplateOutlet="
                            buildInTable;
                            context: {
                                $implicit: items,
                                options: scrollerOptions
                            }
                        "
                    ></ng-container>
                </ng-template>
            </p-scroller>
            <ng-container *ngIf="!virtualScroll">
                <ng-container
                    *ngTemplateOutlet="
                        buildInTable;
                        context: {
                            $implicit: processedData,
                            options: { columns }
                        }
                    "
                ></ng-container>
            </ng-container>

            <ng-template #buildInTable let-items let-scrollerOptions="options">
                <table #table role="table" [class]="cn(cx('table'), tableStyleClass)" [pBind]="ptm('table')" [style]="tableStyle" [attr.id]="id + '-table'">
                    <ng-container *ngTemplateOutlet="colGroupTemplate || _colGroupTemplate; context: { $implicit: scrollerOptions.columns }"></ng-container>
                    <thead role="rowgroup" #thead [class]="cx('thead')" [ngStyle]="sx('thead')" [pBind]="ptm('thead')">
                        <ng-container
                            *ngTemplateOutlet="
                                headerGroupedTemplate || headerTemplate || _headerTemplate;
                                context: {
                                    $implicit: scrollerOptions.columns
                                }
                            "
                        ></ng-container>
                    </thead>
                    <tbody
                        role="rowgroup"
                        [class]="cx('tbody')"
                        [pBind]="ptm('tbody')"
                        *ngIf="frozenValue || frozenBodyTemplate || _frozenBodyTemplate"
                        [value]="frozenValue"
                        [frozenRows]="true"
                        [pTableBody]="scrollerOptions.columns"
                        [pTableBodyTemplate]="frozenBodyTemplate || _frozenBodyTemplate"
                        [frozen]="true"
                    ></tbody>
                    <tbody
                        role="rowgroup"
                        [class]="cx('tbody', scrollerOptions.contentStyleClass)"
                        [pBind]="ptm('tbody')"
                        [style]="scrollerOptions.contentStyle"
                        [value]="dataToRender(scrollerOptions.rows)"
                        [pTableBody]="scrollerOptions.columns"
                        [pTableBodyTemplate]="bodyTemplate || _bodyTemplate"
                        [scrollerOptions]="scrollerOptions"
                    ></tbody>
                    <tbody
                        role="rowgroup"
                        *ngIf="scrollerOptions.spacerStyle"
                        [style]="'height: calc(' + scrollerOptions.spacerStyle.height + ' - ' + scrollerOptions.rows.length * scrollerOptions.itemSize + 'px);'"
                        [class]="cx('virtualScrollerSpacer')"
                        [pBind]="ptm('virtualScrollerSpacer')"
                    ></tbody>
                    <tfoot role="rowgroup" *ngIf="footerGroupedTemplate || footerTemplate || _footerTemplate || _footerGroupedTemplate" #tfoot [ngClass]="cx('footer')" [ngStyle]="sx('tfoot')" [pBind]="ptm('tfoot')">
                        <ng-container
                            *ngTemplateOutlet="
                                footerGroupedTemplate || footerTemplate || _footerTemplate || _footerGroupedTemplate;
                                context: {
                                    $implicit: scrollerOptions.columns
                                }
                            "
                        ></ng-container>
                    </tfoot>
                </table>
            </ng-template>
        </div>

        <p-paginator
            [rows]="rows"
            [first]="first"
            [totalRecords]="totalRecords"
            [pageLinkSize]="pageLinks"
            [alwaysShow]="alwaysShowPaginator"
            (onPageChange)="onPageChange($event)"
            [rowsPerPageOptions]="rowsPerPageOptions"
            *ngIf="paginator && (paginatorPosition === 'bottom' || paginatorPosition == 'both')"
            [templateLeft]="paginatorLeftTemplate || _paginatorLeftTemplate"
            [templateRight]="paginatorRightTemplate || _paginatorRightTemplate"
            [appendTo]="paginatorDropdownAppendTo"
            [dropdownScrollHeight]="paginatorDropdownScrollHeight"
            [currentPageReportTemplate]="currentPageReportTemplate"
            [showFirstLastIcon]="showFirstLastIcon"
            [dropdownItemTemplate]="paginatorDropdownItemTemplate || _paginatorDropdownItemTemplate"
            [showCurrentPageReport]="showCurrentPageReport"
            [showJumpToPageDropdown]="showJumpToPageDropdown"
            [showJumpToPageInput]="showJumpToPageInput"
            [showPageLinks]="showPageLinks"
            [styleClass]="cx('pcPaginator') + ' ' + paginatorStyleClass && paginatorStyleClass"
            [locale]="paginatorLocale"
            [pt]="ptm('pcPaginator')"
        >
            <ng-template pTemplate="dropdownicon" *ngIf="paginatorDropdownIconTemplate || _paginatorDropdownIconTemplate">
                <ng-container *ngTemplateOutlet="paginatorDropdownIconTemplate || _paginatorDropdownIconTemplate"></ng-container>
            </ng-template>

            <ng-template pTemplate="firstpagelinkicon" *ngIf="paginatorFirstPageLinkIconTemplate || _paginatorFirstPageLinkIconTemplate">
                <ng-container *ngTemplateOutlet="paginatorFirstPageLinkIconTemplate || _paginatorFirstPageLinkIconTemplate"></ng-container>
            </ng-template>

            <ng-template pTemplate="previouspagelinkicon" *ngIf="paginatorPreviousPageLinkIconTemplate || _paginatorPreviousPageLinkIconTemplate">
                <ng-container *ngTemplateOutlet="paginatorPreviousPageLinkIconTemplate || _paginatorPreviousPageLinkIconTemplate"></ng-container>
            </ng-template>

            <ng-template pTemplate="lastpagelinkicon" *ngIf="paginatorLastPageLinkIconTemplate || _paginatorLastPageLinkIconTemplate">
                <ng-container *ngTemplateOutlet="paginatorLastPageLinkIconTemplate || _paginatorLastPageLinkIconTemplate"></ng-container>
            </ng-template>

            <ng-template pTemplate="nextpagelinkicon" *ngIf="paginatorNextPageLinkIconTemplate || _paginatorNextPageLinkIconTemplate">
                <ng-container *ngTemplateOutlet="paginatorNextPageLinkIconTemplate || _paginatorNextPageLinkIconTemplate"></ng-container>
            </ng-template>
        </p-paginator>

        <div *ngIf="summaryTemplate || _summaryTemplate" [ngClass]="cx('footer')" [pBind]="ptm('footer')">
            <ng-container *ngTemplateOutlet="summaryTemplate || _summaryTemplate"></ng-container>
        </div>

        <div #resizeHelper [ngClass]="cx('columnResizeIndicator')" [pBind]="ptm('columnResizeIndicator')" [style.display]="'none'" *ngIf="resizableColumns"></div>
        <span #reorderIndicatorUp [ngClass]="cx('rowReorderIndicatorUp')" [pBind]="ptm('rowReorderIndicatorUp')" [style.display]="'none'" *ngIf="reorderableColumns">
            <svg data-p-icon="arrow-down" *ngIf="!reorderIndicatorUpIconTemplate && !_reorderIndicatorUpIconTemplate" [pBind]="ptm('rowReorderIndicatorUp')['icon']" />
            <ng-template *ngTemplateOutlet="reorderIndicatorUpIconTemplate || _reorderIndicatorUpIconTemplate"></ng-template>
        </span>
        <span #reorderIndicatorDown [ngClass]="cx('rowReorderIndicatorDown')" [pBind]="ptm('rowReorderIndicatorDown')" [style.display]="'none'" *ngIf="reorderableColumns">
            <svg data-p-icon="arrow-up" *ngIf="!reorderIndicatorDownIconTemplate && !_reorderIndicatorDownIconTemplate" [pBind]="ptm('rowReorderIndicatorDown')['icon']" />
            <ng-template *ngTemplateOutlet="reorderIndicatorDownIconTemplate || _reorderIndicatorDownIconTemplate"></ng-template>
        </span>
    `,
      providers: [TableService, TableStyle, {
        provide: TABLE_INSTANCE,
        useExisting: Table
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Table
      }],
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    frozenColumns: [{
      type: Input
    }],
    frozenValue: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    tableStyle: [{
      type: Input
    }],
    tableStyleClass: [{
      type: Input
    }],
    paginator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    pageLinks: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    rowsPerPageOptions: [{
      type: Input
    }],
    alwaysShowPaginator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    paginatorPosition: [{
      type: Input
    }],
    paginatorStyleClass: [{
      type: Input
    }],
    paginatorDropdownAppendTo: [{
      type: Input
    }],
    paginatorDropdownScrollHeight: [{
      type: Input
    }],
    currentPageReportTemplate: [{
      type: Input
    }],
    showCurrentPageReport: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showJumpToPageDropdown: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showJumpToPageInput: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showFirstLastIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showPageLinks: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    defaultSortOrder: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    sortMode: [{
      type: Input
    }],
    resetPageOnSort: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectionMode: [{
      type: Input
    }],
    selectionPageOnly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    contextMenuSelection: [{
      type: Input
    }],
    contextMenuSelectionChange: [{
      type: Output
    }],
    contextMenuSelectionMode: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    metaKeySelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rowSelectable: [{
      type: Input
    }],
    rowTrackBy: [{
      type: Input
    }],
    lazy: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    lazyLoadOnInit: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    compareSelectionBy: [{
      type: Input
    }],
    csvSeparator: [{
      type: Input
    }],
    exportFilename: [{
      type: Input
    }],
    filters: [{
      type: Input
    }],
    globalFilterFields: [{
      type: Input
    }],
    filterDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    filterLocale: [{
      type: Input
    }],
    expandedRowKeys: [{
      type: Input
    }],
    editingRowKeys: [{
      type: Input
    }],
    rowExpandMode: [{
      type: Input
    }],
    scrollable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rowGroupMode: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
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
    virtualScrollDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    frozenWidth: [{
      type: Input
    }],
    contextMenu: [{
      type: Input
    }],
    resizableColumns: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    columnResizeMode: [{
      type: Input
    }],
    reorderableColumns: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loading: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    loadingIcon: [{
      type: Input
    }],
    showLoader: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    rowHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    customSort: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showInitialSortBadge: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    exportFunction: [{
      type: Input
    }],
    exportHeader: [{
      type: Input
    }],
    stateKey: [{
      type: Input
    }],
    stateStorage: [{
      type: Input
    }],
    editMode: [{
      type: Input
    }],
    groupRowsBy: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    showGridlines: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stripedRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    groupRowsByOrder: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    responsiveLayout: [{
      type: Input
    }],
    breakpoint: [{
      type: Input
    }],
    paginatorLocale: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    columns: [{
      type: Input
    }],
    first: [{
      type: Input
    }],
    rows: [{
      type: Input
    }],
    totalRecords: [{
      type: Input
    }],
    sortField: [{
      type: Input
    }],
    sortOrder: [{
      type: Input
    }],
    multiSortMeta: [{
      type: Input
    }],
    selection: [{
      type: Input
    }],
    selectAll: [{
      type: Input
    }],
    selectAllChange: [{
      type: Output
    }],
    selectionChange: [{
      type: Output
    }],
    onRowSelect: [{
      type: Output
    }],
    onRowUnselect: [{
      type: Output
    }],
    onPage: [{
      type: Output
    }],
    onSort: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    onRowExpand: [{
      type: Output
    }],
    onRowCollapse: [{
      type: Output
    }],
    onContextMenuSelect: [{
      type: Output
    }],
    onColResize: [{
      type: Output
    }],
    onColReorder: [{
      type: Output
    }],
    onRowReorder: [{
      type: Output
    }],
    onEditInit: [{
      type: Output
    }],
    onEditComplete: [{
      type: Output
    }],
    onEditCancel: [{
      type: Output
    }],
    onHeaderCheckboxToggle: [{
      type: Output
    }],
    sortFunction: [{
      type: Output
    }],
    firstChange: [{
      type: Output
    }],
    rowsChange: [{
      type: Output
    }],
    onStateSave: [{
      type: Output
    }],
    onStateRestore: [{
      type: Output
    }],
    resizeHelperViewChild: [{
      type: ViewChild,
      args: ["resizeHelper"]
    }],
    reorderIndicatorUpViewChild: [{
      type: ViewChild,
      args: ["reorderIndicatorUp"]
    }],
    reorderIndicatorDownViewChild: [{
      type: ViewChild,
      args: ["reorderIndicatorDown"]
    }],
    wrapperViewChild: [{
      type: ViewChild,
      args: ["wrapper"]
    }],
    tableViewChild: [{
      type: ViewChild,
      args: ["table"]
    }],
    tableHeaderViewChild: [{
      type: ViewChild,
      args: ["thead"]
    }],
    tableFooterViewChild: [{
      type: ViewChild,
      args: ["tfoot"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    _templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    _headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    _headerGroupedTemplate: [{
      type: ContentChild,
      args: ["headergrouped", {
        descendants: false
      }]
    }],
    _bodyTemplate: [{
      type: ContentChild,
      args: ["body", {
        descendants: false
      }]
    }],
    _loadingBodyTemplate: [{
      type: ContentChild,
      args: ["loadingbody", {
        descendants: false
      }]
    }],
    _captionTemplate: [{
      type: ContentChild,
      args: ["caption", {
        descendants: false
      }]
    }],
    _footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false
      }]
    }],
    _footerGroupedTemplate: [{
      type: ContentChild,
      args: ["footergrouped", {
        descendants: false
      }]
    }],
    _summaryTemplate: [{
      type: ContentChild,
      args: ["summary", {
        descendants: false
      }]
    }],
    _colGroupTemplate: [{
      type: ContentChild,
      args: ["colgroup", {
        descendants: false
      }]
    }],
    _expandedRowTemplate: [{
      type: ContentChild,
      args: ["expandedrow", {
        descendants: false
      }]
    }],
    _groupHeaderTemplate: [{
      type: ContentChild,
      args: ["groupheader", {
        descendants: false
      }]
    }],
    _groupFooterTemplate: [{
      type: ContentChild,
      args: ["groupfooter", {
        descendants: false
      }]
    }],
    _frozenExpandedRowTemplate: [{
      type: ContentChild,
      args: ["frozenexpandedrow", {
        descendants: false
      }]
    }],
    _frozenHeaderTemplate: [{
      type: ContentChild,
      args: ["frozenheader", {
        descendants: false
      }]
    }],
    _frozenBodyTemplate: [{
      type: ContentChild,
      args: ["frozenbody", {
        descendants: false
      }]
    }],
    _frozenFooterTemplate: [{
      type: ContentChild,
      args: ["frozenfooter", {
        descendants: false
      }]
    }],
    _frozenColGroupTemplate: [{
      type: ContentChild,
      args: ["frozencolgroup", {
        descendants: false
      }]
    }],
    _emptyMessageTemplate: [{
      type: ContentChild,
      args: ["emptymessage", {
        descendants: false
      }]
    }],
    _paginatorLeftTemplate: [{
      type: ContentChild,
      args: ["paginatorleft", {
        descendants: false
      }]
    }],
    _paginatorRightTemplate: [{
      type: ContentChild,
      args: ["paginatorright", {
        descendants: false
      }]
    }],
    _paginatorDropdownItemTemplate: [{
      type: ContentChild,
      args: ["paginatordropdownitem", {
        descendants: false
      }]
    }],
    _loadingIconTemplate: [{
      type: ContentChild,
      args: ["loadingicon", {
        descendants: false
      }]
    }],
    _reorderIndicatorUpIconTemplate: [{
      type: ContentChild,
      args: ["reorderindicatorupicon", {
        descendants: false
      }]
    }],
    _reorderIndicatorDownIconTemplate: [{
      type: ContentChild,
      args: ["reorderindicatordownicon", {
        descendants: false
      }]
    }],
    _sortIconTemplate: [{
      type: ContentChild,
      args: ["sorticon", {
        descendants: false
      }]
    }],
    _checkboxIconTemplate: [{
      type: ContentChild,
      args: ["checkboxicon", {
        descendants: false
      }]
    }],
    _headerCheckboxIconTemplate: [{
      type: ContentChild,
      args: ["headercheckboxicon", {
        descendants: false
      }]
    }],
    _paginatorDropdownIconTemplate: [{
      type: ContentChild,
      args: ["paginatordropdownicon", {
        descendants: false
      }]
    }],
    _paginatorFirstPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["paginatorfirstpagelinkicon", {
        descendants: false
      }]
    }],
    _paginatorLastPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["paginatorlastpagelinkicon", {
        descendants: false
      }]
    }],
    _paginatorPreviousPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["paginatorpreviouspagelinkicon", {
        descendants: false
      }]
    }],
    _paginatorNextPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["paginatornextpagelinkicon", {
        descendants: false
      }]
    }]
  });
})();
var TableBody = class _TableBody extends BaseComponent {
  dataTable;
  tableService;
  hostName = "Table";
  columns;
  template;
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
    if (this.frozenRows) {
      this.updateFrozenRowStickyPosition();
    }
    if (this.dataTable.scrollable && this.dataTable.rowGroupMode === "subheader") {
      this.updateFrozenRowGroupHeaderStickyPosition();
    }
  }
  frozen;
  frozenRows;
  scrollerOptions;
  subscription;
  _value;
  onAfterViewInit() {
    if (this.frozenRows) {
      this.updateFrozenRowStickyPosition();
    }
    if (this.dataTable.scrollable && this.dataTable.rowGroupMode === "subheader") {
      this.updateFrozenRowGroupHeaderStickyPosition();
    }
  }
  constructor(dataTable, tableService) {
    super();
    this.dataTable = dataTable;
    this.tableService = tableService;
    this.subscription = this.dataTable.tableService.valueSource$.subscribe(() => {
      if (this.dataTable.virtualScroll) {
        this.cd.detectChanges();
      }
    });
  }
  shouldRenderRowGroupHeader(value, rowData, i) {
    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.dataTable?.groupRowsBy || "");
    let prevRowData = value[i - (this.dataTable?._first || 0) - 1];
    if (prevRowData) {
      let previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, this.dataTable?.groupRowsBy || "");
      return currentRowFieldData !== previousRowFieldData;
    } else {
      return true;
    }
  }
  shouldRenderRowGroupFooter(value, rowData, i) {
    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.dataTable?.groupRowsBy || "");
    let nextRowData = value[i - (this.dataTable?._first || 0) + 1];
    if (nextRowData) {
      let nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, this.dataTable?.groupRowsBy || "");
      return currentRowFieldData !== nextRowFieldData;
    } else {
      return true;
    }
  }
  shouldRenderRowspan(value, rowData, i) {
    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.dataTable?.groupRowsBy);
    let prevRowData = value[i - 1];
    if (prevRowData) {
      let previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, this.dataTable?.groupRowsBy || "");
      return currentRowFieldData !== previousRowFieldData;
    } else {
      return true;
    }
  }
  calculateRowGroupSize(value, rowData, index) {
    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.dataTable?.groupRowsBy);
    let nextRowFieldData = currentRowFieldData;
    let groupRowSpan = 0;
    while (currentRowFieldData === nextRowFieldData) {
      groupRowSpan++;
      let nextRowData = value[++index];
      if (nextRowData) {
        nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, this.dataTable?.groupRowsBy || "");
      } else {
        break;
      }
    }
    return groupRowSpan === 1 ? null : groupRowSpan;
  }
  onDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  updateFrozenRowStickyPosition() {
    this.el.nativeElement.style.top = DomHandler.getOuterHeight(this.el.nativeElement.previousElementSibling) + "px";
  }
  updateFrozenRowGroupHeaderStickyPosition() {
    if (this.el.nativeElement.previousElementSibling) {
      let tableHeaderHeight = DomHandler.getOuterHeight(this.el.nativeElement.previousElementSibling);
      this.dataTable.rowGroupHeaderStyleObject.top = tableHeaderHeight + "px";
    }
  }
  getScrollerOption(option, options) {
    if (this.dataTable.virtualScroll) {
      options = options || this.scrollerOptions;
      return options ? options[option] : null;
    }
    return null;
  }
  getRowIndex(rowIndex) {
    const index = this.dataTable.paginator ? this.dataTable.first + rowIndex : rowIndex;
    const getItemOptions = this.getScrollerOption("getItemOptions");
    return getItemOptions ? getItemOptions(index).index : index;
  }
  static ɵfac = function TableBody_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableBody)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(TableService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TableBody,
    selectors: [["", "pTableBody", ""]],
    inputs: {
      columns: [0, "pTableBody", "columns"],
      template: [0, "pTableBodyTemplate", "template"],
      value: "value",
      frozen: [2, "frozen", "frozen", booleanAttribute],
      frozenRows: [2, "frozenRows", "frozenRows", booleanAttribute],
      scrollerOptions: "scrollerOptions"
    },
    standalone: false,
    features: [ɵɵInheritDefinitionFeature],
    attrs: _c44,
    decls: 5,
    vars: 5,
    consts: [[4, "ngIf"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], ["role", "row", 4, "ngIf"], ["role", "row"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function TableBody_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, TableBody_ng_container_0_Template, 2, 2, "ng-container", 0)(1, TableBody_ng_container_1_Template, 2, 2, "ng-container", 0)(2, TableBody_ng_container_2_Template, 2, 2, "ng-container", 0)(3, TableBody_ng_container_3_Template, 2, 5, "ng-container", 0)(4, TableBody_ng_container_4_Template, 2, 5, "ng-container", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.dataTable.expandedRowTemplate && !ctx.dataTable._expandedRowTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", (ctx.dataTable.expandedRowTemplate || ctx.dataTable._expandedRowTemplate) && !(ctx.frozen && (ctx.dataTable.frozenExpandedRowTemplate || ctx.dataTable._frozenExpandedRowTemplate)));
        ɵɵadvance();
        ɵɵproperty("ngIf", (ctx.dataTable.frozenExpandedRowTemplate || ctx.dataTable._frozenExpandedRowTemplate) && ctx.frozen);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.dataTable.loading);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.dataTable.isEmpty() && !ctx.dataTable.loading);
      }
    },
    dependencies: [NgForOf, NgIf, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableBody, [{
    type: Component,
    args: [{
      selector: "[pTableBody]",
      standalone: false,
      template: `
        <ng-container *ngIf="!dataTable.expandedRowTemplate && !dataTable._expandedRowTemplate">
            <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="value" [ngForTrackBy]="dataTable.rowTrackBy">
                <ng-container
                    *ngIf="(dataTable.groupHeaderTemplate || dataTable._groupHeaderTemplate) && !dataTable.virtualScroll && dataTable.rowGroupMode === 'subheader' && shouldRenderRowGroupHeader(value, rowData, getRowIndex(rowIndex))"
                    role="row"
                >
                    <ng-container
                        *ngTemplateOutlet="
                            dataTable.groupHeaderTemplate || dataTable._groupHeaderTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                editing: dataTable.editMode === 'row' && dataTable.isRowEditing(rowData),
                                frozen: frozen
                            }
                        "
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="dataTable.rowGroupMode !== 'rowspan'">
                    <ng-container
                        *ngTemplateOutlet="
                            rowData ? template : dataTable.loadingBodyTemplate || dataTable._loadingBodyTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                editing: dataTable.editMode === 'row' && dataTable.isRowEditing(rowData),
                                frozen: frozen
                            }
                        "
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="dataTable.rowGroupMode === 'rowspan'">
                    <ng-container
                        *ngTemplateOutlet="
                            rowData ? template : dataTable.loadingBodyTemplate || dataTable._loadingBodyTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                editing: dataTable.editMode === 'row' && dataTable.isRowEditing(rowData),
                                frozen: frozen,
                                rowgroup: shouldRenderRowspan(value, rowData, rowIndex),
                                rowspan: calculateRowGroupSize(value, rowData, rowIndex)
                            }
                        "
                    ></ng-container>
                </ng-container>
                <ng-container
                    *ngIf="(dataTable.groupFooterTemplate || dataTable._groupFooterTemplate) && !dataTable.virtualScroll && dataTable.rowGroupMode === 'subheader' && shouldRenderRowGroupFooter(value, rowData, getRowIndex(rowIndex))"
                    role="row"
                >
                    <ng-container
                        *ngTemplateOutlet="
                            dataTable.groupFooterTemplate || dataTable._groupFooterTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                editing: dataTable.editMode === 'row' && dataTable.isRowEditing(rowData),
                                frozen: frozen
                            }
                        "
                    ></ng-container>
                </ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="(dataTable.expandedRowTemplate || dataTable._expandedRowTemplate) && !(frozen && (dataTable.frozenExpandedRowTemplate || dataTable._frozenExpandedRowTemplate))">
            <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="value" [ngForTrackBy]="dataTable.rowTrackBy">
                <ng-container *ngIf="!(dataTable.groupHeaderTemplate && dataTable._groupHeaderTemplate)">
                    <ng-container
                        *ngTemplateOutlet="
                            template;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                expanded: dataTable.isRowExpanded(rowData),
                                editing: dataTable.editMode === 'row' && dataTable.isRowEditing(rowData),
                                frozen: frozen
                            }
                        "
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="(dataTable.groupHeaderTemplate || dataTable._groupHeaderTemplate) && dataTable.rowGroupMode === 'subheader' && shouldRenderRowGroupHeader(value, rowData, getRowIndex(rowIndex))" role="row">
                    <ng-container
                        *ngTemplateOutlet="
                            dataTable.groupHeaderTemplate || dataTable._groupHeaderTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                expanded: dataTable.isRowExpanded(rowData),
                                editing: dataTable.editMode === 'row' && dataTable.isRowEditing(rowData),
                                frozen: frozen
                            }
                        "
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="dataTable.isRowExpanded(rowData)">
                    <ng-container
                        *ngTemplateOutlet="
                            dataTable.expandedRowTemplate || dataTable._expandedRowTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                frozen: frozen
                            }
                        "
                    ></ng-container>
                    <ng-container *ngIf="(dataTable.groupFooterTemplate || dataTable._groupFooterTemplate) && dataTable.rowGroupMode === 'subheader' && shouldRenderRowGroupFooter(value, rowData, getRowIndex(rowIndex))" role="row">
                        <ng-container
                            *ngTemplateOutlet="
                                dataTable.groupFooterTemplate || dataTable._groupFooterTemplate;
                                context: {
                                    $implicit: rowData,
                                    rowIndex: getRowIndex(rowIndex),
                                    columns: columns,
                                    expanded: dataTable.isRowExpanded(rowData),
                                    editing: dataTable.editMode === 'row' && dataTable.isRowEditing(rowData),
                                    frozen: frozen
                                }
                            "
                        ></ng-container>
                    </ng-container>
                </ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="(dataTable.frozenExpandedRowTemplate || dataTable._frozenExpandedRowTemplate) && frozen">
            <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="value" [ngForTrackBy]="dataTable.rowTrackBy">
                <ng-container
                    *ngTemplateOutlet="
                        template;
                        context: {
                            $implicit: rowData,
                            rowIndex: getRowIndex(rowIndex),
                            columns: columns,
                            expanded: dataTable.isRowExpanded(rowData),
                            editing: dataTable.editMode === 'row' && dataTable.isRowEditing(rowData),
                            frozen: frozen
                        }
                    "
                ></ng-container>
                <ng-container *ngIf="dataTable.isRowExpanded(rowData)">
                    <ng-container
                        *ngTemplateOutlet="
                            dataTable.frozenExpandedRowTemplate || dataTable._frozenExpandedRowTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                frozen: frozen
                            }
                        "
                    ></ng-container>
                </ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="dataTable.loading">
            <ng-container *ngTemplateOutlet="dataTable.loadingBodyTemplate || dataTable._loadingBodyTemplate; context: { $implicit: columns, frozen: frozen }"></ng-container>
        </ng-container>
        <ng-container *ngIf="dataTable.isEmpty() && !dataTable.loading">
            <ng-container *ngTemplateOutlet="dataTable.emptyMessageTemplate || dataTable._emptyMessageTemplate; context: { $implicit: columns, frozen: frozen }"></ng-container>
        </ng-container>
    `,
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: Table
  }, {
    type: TableService
  }], {
    columns: [{
      type: Input,
      args: ["pTableBody"]
    }],
    template: [{
      type: Input,
      args: ["pTableBodyTemplate"]
    }],
    value: [{
      type: Input
    }],
    frozen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    frozenRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrollerOptions: [{
      type: Input
    }]
  });
})();
var RowGroupHeader = class _RowGroupHeader {
  dataTable;
  constructor(dataTable) {
    this.dataTable = dataTable;
  }
  get getFrozenRowGroupHeaderStickyPosition() {
    return this.dataTable.rowGroupHeaderStyleObject ? this.dataTable.rowGroupHeaderStyleObject.top : "";
  }
  static ɵfac = function RowGroupHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RowGroupHeader)(ɵɵdirectiveInject(Table));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _RowGroupHeader,
    selectors: [["", "pRowGroupHeader", ""]],
    hostAttrs: [1, "p-datatable-row-group-header"],
    hostVars: 2,
    hostBindings: function RowGroupHeader_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("top", ctx.getFrozenRowGroupHeaderStickyPosition);
      }
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RowGroupHeader, [{
    type: Directive,
    args: [{
      selector: "[pRowGroupHeader]",
      standalone: false,
      host: {
        class: "p-datatable-row-group-header",
        "[style.top]": "getFrozenRowGroupHeaderStickyPosition"
      }
    }]
  }], () => [{
    type: Table
  }], null);
})();
var FrozenColumn = class _FrozenColumn extends BaseComponent {
  get frozen() {
    return this._frozen;
  }
  set frozen(val) {
    this._frozen = val;
    Promise.resolve(null).then(() => this.updateStickyPosition());
  }
  alignFrozen = "left";
  resizeListener;
  resizeObserver;
  onAfterViewInit() {
    this.bindResizeListener();
    this.observeChanges();
  }
  bindResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.resizeListener) {
        this.resizeListener = this.renderer.listen(this.document.defaultView, "resize", () => {
          this.recalculateColumns();
        });
      }
    }
  }
  unbindResizeListener() {
    if (this.resizeListener) {
      this.resizeListener();
      this.resizeListener = null;
    }
  }
  observeChanges() {
    if (isPlatformBrowser(this.platformId)) {
      const resizeObserver = new ResizeObserver(() => {
        this.recalculateColumns();
      });
      resizeObserver.observe(this.el.nativeElement);
      this.resizeObserver = resizeObserver;
    }
  }
  recalculateColumns() {
    const siblings = DomHandler.siblings(this.el.nativeElement);
    const index = DomHandler.index(this.el.nativeElement);
    const time = (siblings.length - index + 1) * 50;
    setTimeout(() => {
      this.updateStickyPosition();
    }, time);
  }
  _frozen = true;
  updateStickyPosition() {
    if (this._frozen) {
      if (this.alignFrozen === "right") {
        let right = 0;
        let sibling = this.el.nativeElement.nextElementSibling;
        while (sibling) {
          right += DomHandler.getOuterWidth(sibling);
          sibling = sibling.nextElementSibling;
        }
        this.el.nativeElement.style.right = right + "px";
      } else {
        let left = 0;
        let sibling = this.el.nativeElement.previousElementSibling;
        while (sibling) {
          left += DomHandler.getOuterWidth(sibling);
          sibling = sibling.previousElementSibling;
        }
        this.el.nativeElement.style.left = left + "px";
      }
      const filterRow = this.el.nativeElement?.parentElement?.nextElementSibling;
      if (filterRow) {
        let index = DomHandler.index(this.el.nativeElement);
        if (filterRow.children && filterRow.children[index]) {
          filterRow.children[index].style.left = this.el.nativeElement.style.left;
          filterRow.children[index].style.right = this.el.nativeElement.style.right;
        }
      }
    }
  }
  onDestroy() {
    this.unbindResizeListener();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵFrozenColumn_BaseFactory;
    return function FrozenColumn_Factory(__ngFactoryType__) {
      return (ɵFrozenColumn_BaseFactory || (ɵFrozenColumn_BaseFactory = ɵɵgetInheritedFactory(_FrozenColumn)))(__ngFactoryType__ || _FrozenColumn);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _FrozenColumn,
    selectors: [["", "pFrozenColumn", ""]],
    hostVars: 4,
    hostBindings: function FrozenColumn_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("p-datatable-frozen-column", ctx.frozen)("p-datatable-frozen-column-left", ctx.alignFrozen === "left");
      }
    },
    inputs: {
      frozen: "frozen",
      alignFrozen: "alignFrozen"
    },
    standalone: false,
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FrozenColumn, [{
    type: Directive,
    args: [{
      selector: "[pFrozenColumn]",
      standalone: false,
      host: {
        "[class.p-datatable-frozen-column]": "frozen",
        "[class.p-datatable-frozen-column-left]": 'alignFrozen === "left"'
      }
    }]
  }], null, {
    frozen: [{
      type: Input
    }],
    alignFrozen: [{
      type: Input
    }]
  });
})();
var SortableColumn = class _SortableColumn extends BaseComponent {
  dataTable;
  field;
  pSortableColumnDisabled;
  role = this.el.nativeElement?.tagName !== "TH" ? "columnheader" : null;
  sorted;
  sortOrder;
  subscription;
  _componentStyle = inject(TableStyle);
  constructor(dataTable) {
    super();
    this.dataTable = dataTable;
    if (this.isEnabled()) {
      this.subscription = this.dataTable.tableService.sortSource$.subscribe((sortMeta) => {
        this.updateSortState();
      });
    }
  }
  onInit() {
    if (this.isEnabled()) {
      this.updateSortState();
    }
  }
  updateSortState() {
    let sorted = false;
    let sortOrder = 0;
    if (this.dataTable.sortMode === "single") {
      sorted = this.dataTable.isSorted(this.field);
      sortOrder = this.dataTable.sortOrder;
    } else if (this.dataTable.sortMode === "multiple") {
      const sortMeta = this.dataTable.getSortMeta(this.field);
      sorted = !!sortMeta;
      sortOrder = sortMeta ? sortMeta.order : 0;
    }
    this.sorted = sorted;
    this.sortOrder = sorted ? sortOrder === 1 ? "ascending" : "descending" : "none";
  }
  onClick(event2) {
    if (this.isEnabled() && !this.isFilterElement(event2.target)) {
      this.updateSortState();
      this.dataTable.sort({
        originalEvent: event2,
        field: this.field
      });
      DomHandler.clearSelection();
    }
  }
  onEnterKey(event2) {
    this.onClick(event2);
    event2.preventDefault();
  }
  isEnabled() {
    return this.pSortableColumnDisabled !== true;
  }
  isFilterElement(element) {
    return this.isFilterElementIconOrButton(element) || this.isFilterElementIconOrButton(element?.parentElement?.parentElement);
  }
  isFilterElementIconOrButton(element) {
    return DomHandler.hasClass(element, "pi-filter-icon") || DomHandler.hasClass(element, "p-column-filter-menu-button");
  }
  onDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function SortableColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SortableColumn)(ɵɵdirectiveInject(Table));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SortableColumn,
    selectors: [["", "pSortableColumn", ""]],
    hostVars: 5,
    hostBindings: function SortableColumn_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function SortableColumn_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("keydown.space", function SortableColumn_keydown_space_HostBindingHandler($event) {
          return ctx.onEnterKey($event);
        })("keydown.enter", function SortableColumn_keydown_enter_HostBindingHandler($event) {
          return ctx.onEnterKey($event);
        });
      }
      if (rf & 2) {
        ɵɵdomProperty("tabIndex", ctx.isEnabled() ? "0" : null)("role", "columnheader");
        ɵɵattribute("aria-sort", ctx.sortOrder);
        ɵɵclassMap(ctx.cx("sortableColumn"));
      }
    },
    inputs: {
      field: [0, "pSortableColumn", "field"],
      pSortableColumnDisabled: [2, "pSortableColumnDisabled", "pSortableColumnDisabled", booleanAttribute]
    },
    standalone: false,
    features: [ɵɵProvidersFeature([TableStyle]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortableColumn, [{
    type: Directive,
    args: [{
      selector: "[pSortableColumn]",
      standalone: false,
      host: {
        "[class]": "cx('sortableColumn')",
        "[tabindex]": 'isEnabled() ? "0" : null',
        "[role]": '"columnheader"',
        "[attr.aria-sort]": "sortOrder"
      },
      providers: [TableStyle]
    }]
  }], () => [{
    type: Table
  }], {
    field: [{
      type: Input,
      args: ["pSortableColumn"]
    }],
    pSortableColumnDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onEnterKey: [{
      type: HostListener,
      args: ["keydown.space", ["$event"]]
    }, {
      type: HostListener,
      args: ["keydown.enter", ["$event"]]
    }]
  });
})();
var SortIcon = class _SortIcon extends BaseComponent {
  dataTable;
  cd;
  field;
  subscription;
  sortOrder;
  _componentStyle = inject(TableStyle);
  constructor(dataTable, cd) {
    super();
    this.dataTable = dataTable;
    this.cd = cd;
    this.subscription = this.dataTable.tableService.sortSource$.subscribe((sortMeta) => {
      this.updateSortState();
    });
  }
  onInit() {
    this.updateSortState();
  }
  onClick(event2) {
    event2.preventDefault();
  }
  updateSortState() {
    if (this.dataTable.sortMode === "single") {
      this.sortOrder = this.dataTable.isSorted(this.field) ? this.dataTable.sortOrder : 0;
    } else if (this.dataTable.sortMode === "multiple") {
      let sortMeta = this.dataTable.getSortMeta(this.field);
      this.sortOrder = sortMeta ? sortMeta.order : 0;
    }
    this.cd.markForCheck();
  }
  getMultiSortMetaIndex() {
    let multiSortMeta = this.dataTable._multiSortMeta;
    let index = -1;
    if (multiSortMeta && this.dataTable.sortMode === "multiple" && this.dataTable.showInitialSortBadge && multiSortMeta.length > 1) {
      for (let i = 0; i < multiSortMeta.length; i++) {
        let meta = multiSortMeta[i];
        if (meta.field === this.field || meta.field === this.field) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  getBadgeValue() {
    let index = this.getMultiSortMetaIndex();
    return (this.dataTable?.groupRowsBy || "") && index > -1 ? index : index + 1;
  }
  isMultiSorted() {
    return this.dataTable.sortMode === "multiple" && this.getMultiSortMetaIndex() > -1;
  }
  onDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function SortIcon_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SortIcon)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SortIcon,
    selectors: [["p-sortIcon"]],
    inputs: {
      field: "field"
    },
    standalone: false,
    features: [ɵɵProvidersFeature([TableStyle]), ɵɵInheritDefinitionFeature],
    decls: 3,
    vars: 3,
    consts: [[4, "ngIf"], [3, "class", 4, "ngIf"], ["size", "small", 3, "class", "value", 4, "ngIf"], ["data-p-icon", "sort-alt", 3, "class", 4, "ngIf"], ["data-p-icon", "sort-amount-up-alt", 3, "class", 4, "ngIf"], ["data-p-icon", "sort-amount-down", 3, "class", 4, "ngIf"], ["data-p-icon", "sort-alt"], ["data-p-icon", "sort-amount-up-alt"], ["data-p-icon", "sort-amount-down"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["size", "small", 3, "value"]],
    template: function SortIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, SortIcon_ng_container_0_Template, 4, 3, "ng-container", 0)(1, SortIcon_span_1_Template, 2, 6, "span", 1)(2, SortIcon_p_badge_2_Template, 1, 3, "p-badge", 2);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", !(ctx.dataTable.sortIconTemplate || ctx.dataTable._sortIconTemplate));
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.dataTable.sortIconTemplate || ctx.dataTable._sortIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.isMultiSorted());
      }
    },
    dependencies: () => [NgIf, NgTemplateOutlet, Badge, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortIcon, [{
    type: Component,
    args: [{
      selector: "p-sortIcon",
      standalone: false,
      template: `
        <ng-container *ngIf="!(dataTable.sortIconTemplate || dataTable._sortIconTemplate)">
            <svg data-p-icon="sort-alt" [class]="cx('sortableColumnIcon')" *ngIf="sortOrder === 0" />
            <svg data-p-icon="sort-amount-up-alt" [class]="cx('sortableColumnIcon')" *ngIf="sortOrder === 1" />
            <svg data-p-icon="sort-amount-down" [class]="cx('sortableColumnIcon')" *ngIf="sortOrder === -1" />
        </ng-container>
        <span *ngIf="dataTable.sortIconTemplate || dataTable._sortIconTemplate" [class]="cx('sortableColumnIcon')">
            <ng-template *ngTemplateOutlet="dataTable.sortIconTemplate || dataTable._sortIconTemplate; context: { $implicit: sortOrder }"></ng-template>
        </span>
        <p-badge *ngIf="isMultiSorted()" [class]="cx('sortableColumnBadge')" [value]="getBadgeValue()" size="small"></p-badge>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [TableStyle]
    }]
  }], () => [{
    type: Table
  }, {
    type: ChangeDetectorRef
  }], {
    field: [{
      type: Input
    }]
  });
})();
var SelectableRow = class _SelectableRow extends BaseComponent {
  dataTable;
  tableService;
  data;
  index;
  pSelectableRowDisabled;
  selected;
  subscription;
  _componentStyle = inject(TableStyle);
  constructor(dataTable, tableService) {
    super();
    this.dataTable = dataTable;
    this.tableService = tableService;
    if (this.isEnabled()) {
      this.subscription = this.dataTable.tableService.selectionSource$.subscribe(() => {
        this.selected = this.dataTable.isSelected(this.data);
      });
    }
  }
  setRowTabIndex() {
    if (this.dataTable.selectionMode === "single" || this.dataTable.selectionMode === "multiple") {
      return !this.dataTable.selection ? 0 : this.dataTable.anchorRowIndex === this.index ? 0 : -1;
    }
  }
  onInit() {
    if (this.isEnabled()) {
      this.selected = this.dataTable.isSelected(this.data);
    }
  }
  onClick(event2) {
    if (this.isEnabled()) {
      this.dataTable.handleRowClick({
        originalEvent: event2,
        rowData: this.data,
        rowIndex: this.index
      });
    }
  }
  onTouchEnd(event2) {
    if (this.isEnabled()) {
      this.dataTable.handleRowTouchEnd(event2);
    }
  }
  onKeyDown(event2) {
    switch (event2.code) {
      case "ArrowDown":
        this.onArrowDownKey(event2);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event2);
        break;
      case "Home":
        this.onHomeKey(event2);
        break;
      case "End":
        this.onEndKey(event2);
        break;
      case "Space":
        this.onSpaceKey(event2);
        break;
      case "Enter":
        this.onEnterKey(event2);
        break;
      default:
        if (event2.code === "KeyA" && (event2.metaKey || event2.ctrlKey) && this.dataTable.selectionMode === "multiple") {
          const data = this.dataTable.dataToRender(this.dataTable.processedData);
          this.dataTable.selection = [...data];
          this.dataTable.selectRange(event2, data.length - 1, true);
          event2.preventDefault();
        }
        break;
    }
  }
  onArrowDownKey(event2) {
    if (!this.isEnabled()) {
      return;
    }
    const row = event2.currentTarget;
    const nextRow = this.findNextSelectableRow(row);
    if (nextRow) {
      nextRow.focus();
    }
    event2.preventDefault();
  }
  onArrowUpKey(event2) {
    if (!this.isEnabled()) {
      return;
    }
    const row = event2.currentTarget;
    const prevRow = this.findPrevSelectableRow(row);
    if (prevRow) {
      prevRow.focus();
    }
    event2.preventDefault();
  }
  onEnterKey(event2) {
    if (!this.isEnabled()) {
      return;
    }
    this.dataTable.handleRowClick({
      originalEvent: event2,
      rowData: this.data,
      rowIndex: this.index
    });
  }
  onEndKey(event2) {
    const lastRow = this.findLastSelectableRow();
    lastRow && this.focusRowChange(this.el.nativeElement, lastRow);
    if (event2.ctrlKey && event2.shiftKey) {
      const data = this.dataTable.dataToRender(this.dataTable.rows);
      const lastSelectableRowIndex = DomHandler.getAttribute(lastRow, "index");
      this.dataTable.anchorRowIndex = lastSelectableRowIndex;
      this.dataTable.selection = data.slice(this.index || 0, data.length);
      this.dataTable.selectRange(event2, this.index || 0);
    }
    event2.preventDefault();
  }
  onHomeKey(event2) {
    const firstRow = this.findFirstSelectableRow();
    firstRow && this.focusRowChange(this.el.nativeElement, firstRow);
    if (event2.ctrlKey && event2.shiftKey) {
      const data = this.dataTable.dataToRender(this.dataTable.rows);
      const firstSelectableRowIndex = DomHandler.getAttribute(firstRow, "index");
      this.dataTable.anchorRowIndex = this.dataTable.anchorRowIndex || firstSelectableRowIndex || 0;
      this.dataTable.selection = data.slice(0, (this.index || 0) + 1);
      this.dataTable.selectRange(event2, this.index || 0);
    }
    event2.preventDefault();
  }
  onSpaceKey(event2) {
    const isInput = event2.target instanceof HTMLInputElement || event2.target instanceof HTMLSelectElement || event2.target instanceof HTMLTextAreaElement;
    if (isInput) {
      return;
    } else {
      this.onEnterKey(event2);
      if (event2.shiftKey && this.dataTable.selection !== null) {
        const data = this.dataTable.dataToRender(this.dataTable.rows);
        let index;
        if (ObjectUtils.isNotEmpty(this.dataTable.selection) && this.dataTable.selection.length > 0) {
          let firstSelectedRowIndex, lastSelectedRowIndex;
          firstSelectedRowIndex = ObjectUtils.findIndexInList(this.dataTable.selection[0], data);
          lastSelectedRowIndex = ObjectUtils.findIndexInList(this.dataTable.selection[this.dataTable.selection.length - 1], data);
          index = (this.index || 0) <= firstSelectedRowIndex ? lastSelectedRowIndex : firstSelectedRowIndex;
        } else {
          index = ObjectUtils.findIndexInList(this.dataTable.selection, data);
        }
        this.dataTable.anchorRowIndex = index || 0;
        this.dataTable.selection = index !== this.index ? data.slice(Math.min(index || 0, this.index || 0), Math.max(index || 0, this.index || 0) + 1) : [this.data];
        this.dataTable.selectRange(event2, this.index || 0);
      }
      event2.preventDefault();
    }
  }
  focusRowChange(firstFocusableRow, currentFocusedRow) {
    firstFocusableRow.tabIndex = "-1";
    currentFocusedRow.tabIndex = "0";
    DomHandler.focus(currentFocusedRow);
  }
  findLastSelectableRow() {
    const rows = DomHandler.find(this.dataTable.el.nativeElement, ".p-datatable-selectable-row");
    return rows ? rows[rows.length - 1] : null;
  }
  findFirstSelectableRow() {
    const firstRow = DomHandler.findSingle(this.dataTable.el.nativeElement, ".p-datatable-selectable-row");
    return firstRow;
  }
  findNextSelectableRow(row) {
    let nextRow = row.nextElementSibling;
    if (nextRow) {
      if (DomHandler.hasClass(nextRow, "p-datatable-selectable-row")) return nextRow;
      else return this.findNextSelectableRow(nextRow);
    } else {
      return null;
    }
  }
  findPrevSelectableRow(row) {
    let prevRow = row.previousElementSibling;
    if (prevRow) {
      if (DomHandler.hasClass(prevRow, "p-datatable-selectable-row")) return prevRow;
      else return this.findPrevSelectableRow(prevRow);
    } else {
      return null;
    }
  }
  isEnabled() {
    return this.pSelectableRowDisabled !== true;
  }
  onDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function SelectableRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectableRow)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(TableService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SelectableRow,
    selectors: [["", "pSelectableRow", ""]],
    hostVars: 4,
    hostBindings: function SelectableRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function SelectableRow_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("touchend", function SelectableRow_touchend_HostBindingHandler($event) {
          return ctx.onTouchEnd($event);
        })("keydown", function SelectableRow_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        });
      }
      if (rf & 2) {
        ɵɵdomProperty("tabIndex", ctx.setRowTabIndex());
        ɵɵattribute("data-p-selectable-row", true);
        ɵɵclassMap(ctx.cx("selectableRow"));
      }
    },
    inputs: {
      data: [0, "pSelectableRow", "data"],
      index: [0, "pSelectableRowIndex", "index"],
      pSelectableRowDisabled: [2, "pSelectableRowDisabled", "pSelectableRowDisabled", booleanAttribute]
    },
    standalone: false,
    features: [ɵɵProvidersFeature([TableStyle]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectableRow, [{
    type: Directive,
    args: [{
      selector: "[pSelectableRow]",
      standalone: false,
      host: {
        "[class]": "cx('selectableRow')",
        "[tabindex]": "setRowTabIndex()",
        "[attr.data-p-selectable-row]": "true"
      },
      providers: [TableStyle]
    }]
  }], () => [{
    type: Table
  }, {
    type: TableService
  }], {
    data: [{
      type: Input,
      args: ["pSelectableRow"]
    }],
    index: [{
      type: Input,
      args: ["pSelectableRowIndex"]
    }],
    pSelectableRowDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onTouchEnd: [{
      type: HostListener,
      args: ["touchend", ["$event"]]
    }],
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var SelectableRowDblClick = class _SelectableRowDblClick extends BaseComponent {
  dataTable;
  tableService;
  data;
  index;
  pSelectableRowDisabled;
  selected;
  subscription;
  constructor(dataTable, tableService) {
    super();
    this.dataTable = dataTable;
    this.tableService = tableService;
    if (this.isEnabled()) {
      this.subscription = this.dataTable.tableService.selectionSource$.subscribe(() => {
        this.selected = this.dataTable.isSelected(this.data);
      });
    }
  }
  onInit() {
    if (this.isEnabled()) {
      this.selected = this.dataTable.isSelected(this.data);
    }
  }
  onClick(event2) {
    if (this.isEnabled()) {
      this.dataTable.handleRowClick({
        originalEvent: event2,
        rowData: this.data,
        rowIndex: this.index
      });
    }
  }
  isEnabled() {
    return this.pSelectableRowDisabled !== true;
  }
  onDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function SelectableRowDblClick_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectableRowDblClick)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(TableService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SelectableRowDblClick,
    selectors: [["", "pSelectableRowDblClick", ""]],
    hostVars: 4,
    hostBindings: function SelectableRowDblClick_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("dblclick", function SelectableRowDblClick_dblclick_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
      if (rf & 2) {
        ɵɵclassProp("p-selectable-row", ctx.isEnabled())("p-highlight", ctx.selected);
      }
    },
    inputs: {
      data: [0, "pSelectableRowDblClick", "data"],
      index: [0, "pSelectableRowIndex", "index"],
      pSelectableRowDisabled: [2, "pSelectableRowDisabled", "pSelectableRowDisabled", booleanAttribute]
    },
    standalone: false,
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectableRowDblClick, [{
    type: Directive,
    args: [{
      selector: "[pSelectableRowDblClick]",
      standalone: false,
      host: {
        "[class.p-selectable-row]": "isEnabled()",
        "[class.p-highlight]": "selected"
      }
    }]
  }], () => [{
    type: Table
  }, {
    type: TableService
  }], {
    data: [{
      type: Input,
      args: ["pSelectableRowDblClick"]
    }],
    index: [{
      type: Input,
      args: ["pSelectableRowIndex"]
    }],
    pSelectableRowDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["dblclick", ["$event"]]
    }]
  });
})();
var ContextMenuRow = class _ContextMenuRow extends BaseComponent {
  dataTable;
  tableService;
  data;
  index;
  pContextMenuRowDisabled;
  selected;
  subscription;
  constructor(dataTable, tableService) {
    super();
    this.dataTable = dataTable;
    this.tableService = tableService;
    if (this.isEnabled()) {
      this.subscription = this.dataTable.tableService.contextMenuSource$.subscribe((data) => {
        this.selected = data ? this.dataTable.equals(this.data, data) : false;
      });
    }
  }
  onContextMenu(event2) {
    if (this.isEnabled()) {
      this.dataTable.handleRowRightClick({
        originalEvent: event2,
        rowData: this.data,
        rowIndex: this.index
      });
      this.el.nativeElement.focus();
      event2.preventDefault();
    }
  }
  isEnabled() {
    return this.pContextMenuRowDisabled !== true;
  }
  onDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function ContextMenuRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContextMenuRow)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(TableService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ContextMenuRow,
    selectors: [["", "pContextMenuRow", ""]],
    hostVars: 3,
    hostBindings: function ContextMenuRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("contextmenu", function ContextMenuRow_contextmenu_HostBindingHandler($event) {
          return ctx.onContextMenu($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("tabindex", ctx.isEnabled() ? 0 : void 0);
        ɵɵclassProp("p-datatable-contextmenu-row-selected", ctx.selected);
      }
    },
    inputs: {
      data: [0, "pContextMenuRow", "data"],
      index: [0, "pContextMenuRowIndex", "index"],
      pContextMenuRowDisabled: [2, "pContextMenuRowDisabled", "pContextMenuRowDisabled", booleanAttribute]
    },
    standalone: false,
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuRow, [{
    type: Directive,
    args: [{
      selector: "[pContextMenuRow]",
      standalone: false,
      host: {
        "[class.p-datatable-contextmenu-row-selected]": "selected",
        "[attr.tabindex]": "isEnabled() ? 0 : undefined"
      }
    }]
  }], () => [{
    type: Table
  }, {
    type: TableService
  }], {
    data: [{
      type: Input,
      args: ["pContextMenuRow"]
    }],
    index: [{
      type: Input,
      args: ["pContextMenuRowIndex"]
    }],
    pContextMenuRowDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onContextMenu: [{
      type: HostListener,
      args: ["contextmenu", ["$event"]]
    }]
  });
})();
var RowToggler = class _RowToggler extends BaseComponent {
  dataTable;
  data;
  pRowTogglerDisabled;
  constructor(dataTable) {
    super();
    this.dataTable = dataTable;
  }
  onClick(event2) {
    if (this.isEnabled()) {
      this.dataTable.toggleRow(this.data, event2);
      event2.preventDefault();
    }
  }
  isEnabled() {
    return this.pRowTogglerDisabled !== true;
  }
  static ɵfac = function RowToggler_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RowToggler)(ɵɵdirectiveInject(Table));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _RowToggler,
    selectors: [["", "pRowToggler", ""]],
    hostBindings: function RowToggler_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function RowToggler_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    inputs: {
      data: [0, "pRowToggler", "data"],
      pRowTogglerDisabled: [2, "pRowTogglerDisabled", "pRowTogglerDisabled", booleanAttribute]
    },
    standalone: false,
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RowToggler, [{
    type: Directive,
    args: [{
      selector: "[pRowToggler]",
      standalone: false
    }]
  }], () => [{
    type: Table
  }], {
    data: [{
      type: Input,
      args: ["pRowToggler"]
    }],
    pRowTogglerDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var ResizableColumn = class _ResizableColumn extends BaseComponent {
  dataTable;
  zone;
  pResizableColumnDisabled;
  resizer;
  resizerMouseDownListener;
  resizerTouchStartListener;
  resizerTouchMoveListener;
  resizerTouchEndListener;
  documentMouseMoveListener;
  documentMouseUpListener;
  _componentStyle = inject(TableStyle);
  constructor(dataTable, zone) {
    super();
    this.dataTable = dataTable;
    this.zone = zone;
  }
  onAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isEnabled()) {
        DomHandler.addClass(this.el.nativeElement, "p-datatable-resizable-column");
        this.resizer = this.renderer.createElement("span");
        this.renderer.addClass(this.resizer, "p-datatable-column-resizer");
        this.renderer.appendChild(this.el.nativeElement, this.resizer);
        this.zone.runOutsideAngular(() => {
          this.resizerMouseDownListener = this.renderer.listen(this.resizer, "mousedown", this.onMouseDown.bind(this));
          this.resizerTouchStartListener = this.renderer.listen(this.resizer, "touchstart", this.onTouchStart.bind(this));
        });
      }
    }
  }
  bindDocumentEvents() {
    this.zone.runOutsideAngular(() => {
      this.documentMouseMoveListener = this.renderer.listen(this.document, "mousemove", this.onDocumentMouseMove.bind(this));
      this.documentMouseUpListener = this.renderer.listen(this.document, "mouseup", this.onDocumentMouseUp.bind(this));
      this.resizerTouchMoveListener = this.renderer.listen(this.resizer, "touchmove", this.onTouchMove.bind(this));
      this.resizerTouchEndListener = this.renderer.listen(this.resizer, "touchend", this.onTouchEnd.bind(this));
    });
  }
  unbindDocumentEvents() {
    if (this.documentMouseMoveListener) {
      this.documentMouseMoveListener();
      this.documentMouseMoveListener = null;
    }
    if (this.documentMouseUpListener) {
      this.documentMouseUpListener();
      this.documentMouseUpListener = null;
    }
    if (this.resizerTouchMoveListener) {
      this.resizerTouchMoveListener();
      this.resizerTouchMoveListener = null;
    }
    if (this.resizerTouchEndListener) {
      this.resizerTouchEndListener();
      this.resizerTouchEndListener = null;
    }
  }
  onMouseDown(event2) {
    this.dataTable.onColumnResizeBegin(event2);
    this.bindDocumentEvents();
  }
  onTouchStart(event2) {
    this.dataTable.onColumnResizeBegin(event2);
    this.bindDocumentEvents();
  }
  onTouchMove(event2) {
    this.dataTable.onColumnResize(event2);
  }
  onDocumentMouseMove(event2) {
    this.dataTable.onColumnResize(event2);
  }
  onDocumentMouseUp(event2) {
    this.dataTable.onColumnResizeEnd();
    this.unbindDocumentEvents();
  }
  onTouchEnd(event2) {
    this.dataTable.onColumnResizeEnd();
    this.unbindDocumentEvents();
  }
  isEnabled() {
    return this.pResizableColumnDisabled !== true;
  }
  onDestroy() {
    if (this.resizerMouseDownListener) {
      this.resizerMouseDownListener();
      this.resizerMouseDownListener = null;
    }
    this.unbindDocumentEvents();
  }
  static ɵfac = function ResizableColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResizableColumn)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ResizableColumn,
    selectors: [["", "pResizableColumn", ""]],
    hostVars: 2,
    hostBindings: function ResizableColumn_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.cx("resizableColumn"));
      }
    },
    inputs: {
      pResizableColumnDisabled: [2, "pResizableColumnDisabled", "pResizableColumnDisabled", booleanAttribute]
    },
    standalone: false,
    features: [ɵɵProvidersFeature([TableStyle]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizableColumn, [{
    type: Directive,
    args: [{
      selector: "[pResizableColumn]",
      standalone: false,
      host: {
        "[class]": "cx('resizableColumn')"
      },
      providers: [TableStyle]
    }]
  }], () => [{
    type: Table
  }, {
    type: NgZone
  }], {
    pResizableColumnDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var ReorderableColumn = class _ReorderableColumn extends BaseComponent {
  dataTable;
  el;
  zone;
  pReorderableColumnDisabled;
  dragStartListener;
  dragOverListener;
  dragEnterListener;
  dragLeaveListener;
  mouseDownListener;
  _componentStyle = inject(TableStyle);
  constructor(dataTable, el, zone) {
    super();
    this.dataTable = dataTable;
    this.el = el;
    this.zone = zone;
  }
  onAfterViewInit() {
    if (this.isEnabled()) {
      this.bindEvents();
    }
  }
  bindEvents() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
        this.dragStartListener = this.renderer.listen(this.el.nativeElement, "dragstart", this.onDragStart.bind(this));
        this.dragOverListener = this.renderer.listen(this.el.nativeElement, "dragover", this.onDragOver.bind(this));
        this.dragEnterListener = this.renderer.listen(this.el.nativeElement, "dragenter", this.onDragEnter.bind(this));
        this.dragLeaveListener = this.renderer.listen(this.el.nativeElement, "dragleave", this.onDragLeave.bind(this));
      });
    }
  }
  unbindEvents() {
    if (this.mouseDownListener) {
      this.mouseDownListener();
      this.mouseDownListener = null;
    }
    if (this.dragStartListener) {
      this.dragStartListener();
      this.dragStartListener = null;
    }
    if (this.dragOverListener) {
      this.dragOverListener();
      this.dragOverListener = null;
    }
    if (this.dragEnterListener) {
      this.dragEnterListener();
      this.dragEnterListener = null;
    }
    if (this.dragLeaveListener) {
      this.dragLeaveListener();
      this.dragLeaveListener = null;
    }
  }
  onMouseDown(event2) {
    if (event2.target.nodeName === "INPUT" || event2.target.nodeName === "TEXTAREA" || DomHandler.hasClass(event2.target, "p-datatable-column-resizer")) this.el.nativeElement.draggable = false;
    else this.el.nativeElement.draggable = true;
  }
  onDragStart(event2) {
    this.dataTable.onColumnDragStart(event2, this.el.nativeElement);
  }
  onDragOver(event2) {
    event2.preventDefault();
  }
  onDragEnter(event2) {
    this.dataTable.onColumnDragEnter(event2, this.el.nativeElement);
  }
  onDragLeave(event2) {
    this.dataTable.onColumnDragLeave(event2);
  }
  onDrop(event2) {
    if (this.isEnabled()) {
      this.dataTable.onColumnDrop(event2, this.el.nativeElement);
    }
  }
  isEnabled() {
    return this.pReorderableColumnDisabled !== true;
  }
  onDestroy() {
    this.unbindEvents();
  }
  static ɵfac = function ReorderableColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReorderableColumn)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ReorderableColumn,
    selectors: [["", "pReorderableColumn", ""]],
    hostVars: 2,
    hostBindings: function ReorderableColumn_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("drop", function ReorderableColumn_drop_HostBindingHandler($event) {
          return ctx.onDrop($event);
        });
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.cx("reorderableColumn"));
      }
    },
    inputs: {
      pReorderableColumnDisabled: [2, "pReorderableColumnDisabled", "pReorderableColumnDisabled", booleanAttribute]
    },
    standalone: false,
    features: [ɵɵProvidersFeature([TableStyle]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReorderableColumn, [{
    type: Directive,
    args: [{
      selector: "[pReorderableColumn]",
      standalone: false,
      host: {
        "[class]": "cx('reorderableColumn')"
      },
      providers: [TableStyle]
    }]
  }], () => [{
    type: Table
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    pReorderableColumnDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onDrop: [{
      type: HostListener,
      args: ["drop", ["$event"]]
    }]
  });
})();
var EditableColumn = class _EditableColumn extends BaseComponent {
  dataTable;
  zone;
  data;
  field;
  rowIndex;
  pEditableColumnDisabled;
  pFocusCellSelector;
  overlayEventListener;
  constructor(dataTable, zone) {
    super();
    this.dataTable = dataTable;
    this.zone = zone;
  }
  onChanges(changes) {
    if (this.el.nativeElement && !changes.data?.firstChange) {
      this.dataTable.updateEditingCell(this.el.nativeElement, this.data, this.field, this.rowIndex);
    }
  }
  onAfterViewInit() {
    if (this.isEnabled()) {
      DomHandler.addClass(this.el.nativeElement, "p-editable-column");
    }
  }
  onClick(event2) {
    if (this.isEnabled()) {
      this.dataTable.selfClick = true;
      if (this.dataTable.editingCell) {
        if (this.dataTable.editingCell !== this.el.nativeElement) {
          if (!this.dataTable.isEditingCellValid()) {
            return;
          }
          this.closeEditingCell(true, event2);
          this.openCell();
        }
      } else {
        this.openCell();
      }
    }
  }
  openCell() {
    this.dataTable.updateEditingCell(this.el.nativeElement, this.data, this.field, this.rowIndex);
    DomHandler.addClass(this.el.nativeElement, "p-cell-editing");
    this.dataTable.onEditInit.emit({
      field: this.field,
      data: this.data,
      index: this.rowIndex
    });
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        let focusCellSelector = this.pFocusCellSelector || "input, textarea, select";
        let focusableElement = DomHandler.findSingle(this.el.nativeElement, focusCellSelector);
        if (focusableElement) {
          focusableElement.focus();
        }
      }, 50);
    });
    this.overlayEventListener = (e) => {
      if (this.el && this.el.nativeElement.contains(e.target)) {
        this.dataTable.selfClick = true;
      }
    };
    this.dataTable.overlaySubscription = this.dataTable.overlayService.clickObservable.subscribe(this.overlayEventListener);
  }
  closeEditingCell(completed, event2) {
    const eventData = {
      field: this.dataTable.editingCellField,
      data: this.dataTable.editingCellData,
      originalEvent: event2,
      index: this.dataTable.editingCellRowIndex
    };
    if (completed) {
      this.dataTable.onEditComplete.emit(eventData);
    } else {
      this.dataTable.onEditCancel.emit(eventData);
      this.dataTable.value.forEach((element) => {
        if (element[this.dataTable.editingCellField] === this.data) {
          element[this.dataTable.editingCellField] = this.dataTable.editingCellData;
        }
      });
    }
    DomHandler.removeClass(this.dataTable.editingCell, "p-cell-editing");
    this.dataTable.editingCell = null;
    this.dataTable.editingCellData = null;
    this.dataTable.editingCellField = null;
    this.dataTable.unbindDocumentEditListener();
    if (this.dataTable.overlaySubscription) {
      this.dataTable.overlaySubscription.unsubscribe();
    }
  }
  onEnterKeyDown(event2) {
    if (this.isEnabled() && !event2.shiftKey) {
      if (this.dataTable.isEditingCellValid()) {
        this.closeEditingCell(true, event2);
      }
      event2.preventDefault();
    }
  }
  onTabKeyDown(event2) {
    if (this.isEnabled()) {
      if (this.dataTable.isEditingCellValid()) {
        this.closeEditingCell(true, event2);
      }
      event2.preventDefault();
    }
  }
  onEscapeKeyDown(event2) {
    if (this.isEnabled()) {
      if (this.dataTable.isEditingCellValid()) {
        this.closeEditingCell(false, event2);
      }
      event2.preventDefault();
    }
  }
  onShiftKeyDown(event2) {
    if (this.isEnabled()) {
      if (event2.shiftKey) this.moveToPreviousCell(event2);
      else {
        this.moveToNextCell(event2);
      }
    }
  }
  onArrowDown(event2) {
    if (this.isEnabled()) {
      let currentCell = this.findCell(event2.target);
      if (currentCell) {
        let cellIndex = DomHandler.index(currentCell);
        let targetCell = this.findNextEditableColumnByIndex(currentCell, cellIndex);
        if (targetCell) {
          if (this.dataTable.isEditingCellValid()) {
            this.closeEditingCell(true, event2);
          }
          DomHandler.invokeElementMethod(event2.target, "blur");
          DomHandler.invokeElementMethod(targetCell, "click");
        }
        event2.preventDefault();
      }
    }
  }
  onArrowUp(event2) {
    if (this.isEnabled()) {
      let currentCell = this.findCell(event2.target);
      if (currentCell) {
        let cellIndex = DomHandler.index(currentCell);
        let targetCell = this.findPrevEditableColumnByIndex(currentCell, cellIndex);
        if (targetCell) {
          if (this.dataTable.isEditingCellValid()) {
            this.closeEditingCell(true, event2);
          }
          DomHandler.invokeElementMethod(event2.target, "blur");
          DomHandler.invokeElementMethod(targetCell, "click");
        }
        event2.preventDefault();
      }
    }
  }
  onArrowLeft(event2) {
    if (this.isEnabled()) {
      this.moveToPreviousCell(event2);
    }
  }
  onArrowRight(event2) {
    if (this.isEnabled()) {
      this.moveToNextCell(event2);
    }
  }
  findCell(element) {
    if (element) {
      let cell = element;
      while (cell && !DomHandler.hasClass(cell, "p-cell-editing")) {
        cell = cell.parentElement;
      }
      return cell;
    } else {
      return null;
    }
  }
  moveToPreviousCell(event2) {
    let currentCell = this.findCell(event2.target);
    if (currentCell) {
      let targetCell = this.findPreviousEditableColumn(currentCell);
      if (targetCell) {
        if (this.dataTable.isEditingCellValid()) {
          this.closeEditingCell(true, event2);
        }
        DomHandler.invokeElementMethod(event2.target, "blur");
        DomHandler.invokeElementMethod(targetCell, "click");
        event2.preventDefault();
      }
    }
  }
  moveToNextCell(event2) {
    let currentCell = this.findCell(event2.target);
    if (currentCell) {
      let targetCell = this.findNextEditableColumn(currentCell);
      if (targetCell) {
        if (this.dataTable.isEditingCellValid()) {
          this.closeEditingCell(true, event2);
        }
        DomHandler.invokeElementMethod(event2.target, "blur");
        DomHandler.invokeElementMethod(targetCell, "click");
        event2.preventDefault();
      } else {
        if (this.dataTable.isEditingCellValid()) {
          this.closeEditingCell(true, event2);
        }
      }
    }
  }
  findPreviousEditableColumn(cell) {
    let prevCell = cell.previousElementSibling;
    if (!prevCell) {
      let previousRow = cell.parentElement?.previousElementSibling;
      if (previousRow) {
        prevCell = previousRow.lastElementChild;
      }
    }
    if (prevCell) {
      if (DomHandler.hasClass(prevCell, "p-editable-column")) return prevCell;
      else return this.findPreviousEditableColumn(prevCell);
    } else {
      return null;
    }
  }
  findNextEditableColumn(cell) {
    let nextCell = cell.nextElementSibling;
    if (!nextCell) {
      let nextRow = cell.parentElement?.nextElementSibling;
      if (nextRow) {
        nextCell = nextRow.firstElementChild;
      }
    }
    if (nextCell) {
      if (DomHandler.hasClass(nextCell, "p-editable-column")) return nextCell;
      else return this.findNextEditableColumn(nextCell);
    } else {
      return null;
    }
  }
  findNextEditableColumnByIndex(cell, index) {
    let nextRow = cell.parentElement?.nextElementSibling;
    if (nextRow) {
      let nextCell = nextRow.children[index];
      if (nextCell && DomHandler.hasClass(nextCell, "p-editable-column")) {
        return nextCell;
      }
      return null;
    } else {
      return null;
    }
  }
  findPrevEditableColumnByIndex(cell, index) {
    let prevRow = cell.parentElement?.previousElementSibling;
    if (prevRow) {
      let prevCell = prevRow.children[index];
      if (prevCell && DomHandler.hasClass(prevCell, "p-editable-column")) {
        return prevCell;
      }
      return null;
    } else {
      return null;
    }
  }
  isEnabled() {
    return this.pEditableColumnDisabled !== true;
  }
  onDestroy() {
    if (this.dataTable.overlaySubscription) {
      this.dataTable.overlaySubscription.unsubscribe();
    }
  }
  static ɵfac = function EditableColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditableColumn)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _EditableColumn,
    selectors: [["", "pEditableColumn", ""]],
    hostBindings: function EditableColumn_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function EditableColumn_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        })("keydown.enter", function EditableColumn_keydown_enter_HostBindingHandler($event) {
          return ctx.onEnterKeyDown($event);
        })("keydown.tab", function EditableColumn_keydown_tab_HostBindingHandler($event) {
          return ctx.onShiftKeyDown($event);
        })("keydown.escape", function EditableColumn_keydown_escape_HostBindingHandler($event) {
          return ctx.onEscapeKeyDown($event);
        })("keydown.shift.tab", function EditableColumn_keydown_shift_tab_HostBindingHandler($event) {
          return ctx.onShiftKeyDown($event);
        })("keydown.meta.tab", function EditableColumn_keydown_meta_tab_HostBindingHandler($event) {
          return ctx.onShiftKeyDown($event);
        })("keydown.arrowdown", function EditableColumn_keydown_arrowdown_HostBindingHandler($event) {
          return ctx.onArrowDown($event);
        })("keydown.arrowup", function EditableColumn_keydown_arrowup_HostBindingHandler($event) {
          return ctx.onArrowUp($event);
        })("keydown.arrowleft", function EditableColumn_keydown_arrowleft_HostBindingHandler($event) {
          return ctx.onArrowLeft($event);
        })("keydown.arrowright", function EditableColumn_keydown_arrowright_HostBindingHandler($event) {
          return ctx.onArrowRight($event);
        });
      }
    },
    inputs: {
      data: [0, "pEditableColumn", "data"],
      field: [0, "pEditableColumnField", "field"],
      rowIndex: [0, "pEditableColumnRowIndex", "rowIndex"],
      pEditableColumnDisabled: [2, "pEditableColumnDisabled", "pEditableColumnDisabled", booleanAttribute],
      pFocusCellSelector: "pFocusCellSelector"
    },
    standalone: false,
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditableColumn, [{
    type: Directive,
    args: [{
      selector: "[pEditableColumn]",
      standalone: false
    }]
  }], () => [{
    type: Table
  }, {
    type: NgZone
  }], {
    data: [{
      type: Input,
      args: ["pEditableColumn"]
    }],
    field: [{
      type: Input,
      args: ["pEditableColumnField"]
    }],
    rowIndex: [{
      type: Input,
      args: ["pEditableColumnRowIndex"]
    }],
    pEditableColumnDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    pFocusCellSelector: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onEnterKeyDown: [{
      type: HostListener,
      args: ["keydown.enter", ["$event"]]
    }],
    onTabKeyDown: [{
      type: HostListener,
      args: ["keydown.tab", ["$event"]]
    }],
    onEscapeKeyDown: [{
      type: HostListener,
      args: ["keydown.escape", ["$event"]]
    }],
    onShiftKeyDown: [{
      type: HostListener,
      args: ["keydown.tab", ["$event"]]
    }, {
      type: HostListener,
      args: ["keydown.shift.tab", ["$event"]]
    }, {
      type: HostListener,
      args: ["keydown.meta.tab", ["$event"]]
    }],
    onArrowDown: [{
      type: HostListener,
      args: ["keydown.arrowdown", ["$event"]]
    }],
    onArrowUp: [{
      type: HostListener,
      args: ["keydown.arrowup", ["$event"]]
    }],
    onArrowLeft: [{
      type: HostListener,
      args: ["keydown.arrowleft", ["$event"]]
    }],
    onArrowRight: [{
      type: HostListener,
      args: ["keydown.arrowright", ["$event"]]
    }]
  });
})();
var EditableRow = class _EditableRow extends BaseComponent {
  data;
  pEditableRowDisabled;
  isEnabled() {
    return this.pEditableRowDisabled !== true;
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵEditableRow_BaseFactory;
    return function EditableRow_Factory(__ngFactoryType__) {
      return (ɵEditableRow_BaseFactory || (ɵEditableRow_BaseFactory = ɵɵgetInheritedFactory(_EditableRow)))(__ngFactoryType__ || _EditableRow);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _EditableRow,
    selectors: [["", "pEditableRow", ""]],
    inputs: {
      data: [0, "pEditableRow", "data"],
      pEditableRowDisabled: [2, "pEditableRowDisabled", "pEditableRowDisabled", booleanAttribute]
    },
    standalone: false,
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditableRow, [{
    type: Directive,
    args: [{
      selector: "[pEditableRow]",
      standalone: false
    }]
  }], null, {
    data: [{
      type: Input,
      args: ["pEditableRow"]
    }],
    pEditableRowDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var InitEditableRow = class _InitEditableRow extends BaseComponent {
  dataTable;
  editableRow;
  constructor(dataTable, editableRow) {
    super();
    this.dataTable = dataTable;
    this.editableRow = editableRow;
  }
  onClick(event2) {
    this.dataTable.initRowEdit(this.editableRow.data);
    event2.preventDefault();
  }
  static ɵfac = function InitEditableRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InitEditableRow)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(EditableRow));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _InitEditableRow,
    selectors: [["", "pInitEditableRow", ""]],
    hostAttrs: [1, "p-datatable-row-editor-init"],
    hostBindings: function InitEditableRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function InitEditableRow_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    standalone: false,
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InitEditableRow, [{
    type: Directive,
    args: [{
      selector: "[pInitEditableRow]",
      standalone: false,
      host: {
        class: "p-datatable-row-editor-init"
      }
    }]
  }], () => [{
    type: Table
  }, {
    type: EditableRow
  }], {
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var SaveEditableRow = class _SaveEditableRow extends BaseComponent {
  dataTable;
  editableRow;
  constructor(dataTable, editableRow) {
    super();
    this.dataTable = dataTable;
    this.editableRow = editableRow;
  }
  onClick(event2) {
    this.dataTable.saveRowEdit(this.editableRow.data, this.editableRow.el.nativeElement);
    event2.preventDefault();
  }
  static ɵfac = function SaveEditableRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SaveEditableRow)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(EditableRow));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SaveEditableRow,
    selectors: [["", "pSaveEditableRow", ""]],
    hostAttrs: [1, "p-datatable-row-editor-save"],
    hostBindings: function SaveEditableRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function SaveEditableRow_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
    },
    standalone: false,
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaveEditableRow, [{
    type: Directive,
    args: [{
      selector: "[pSaveEditableRow]",
      standalone: false,
      host: {
        class: "p-datatable-row-editor-save"
      }
    }]
  }], () => [{
    type: Table
  }, {
    type: EditableRow
  }], {
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var CancelEditableRow = class _CancelEditableRow extends BaseComponent {
  dataTable;
  editableRow;
  constructor(dataTable, editableRow) {
    super();
    this.dataTable = dataTable;
    this.editableRow = editableRow;
  }
  _componentStyle = inject(TableStyle);
  onClick(event2) {
    this.dataTable.cancelRowEdit(this.editableRow.data);
    event2.preventDefault();
  }
  static ɵfac = function CancelEditableRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CancelEditableRow)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(EditableRow));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CancelEditableRow,
    selectors: [["", "pCancelEditableRow", ""]],
    hostVars: 2,
    hostBindings: function CancelEditableRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function CancelEditableRow_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.cx("rowEditorCancel"));
      }
    },
    standalone: false,
    features: [ɵɵProvidersFeature([TableStyle]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelEditableRow, [{
    type: Directive,
    args: [{
      selector: "[pCancelEditableRow]",
      standalone: false,
      host: {
        "[class]": "cx('rowEditorCancel')"
      },
      providers: [TableStyle]
    }]
  }], () => [{
    type: Table
  }, {
    type: EditableRow
  }], {
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var CellEditor = class _CellEditor extends BaseComponent {
  dataTable;
  editableColumn;
  editableRow;
  _templates;
  _inputTemplate;
  _outputTemplate;
  inputTemplate;
  outputTemplate;
  constructor(dataTable, editableColumn, editableRow) {
    super();
    this.dataTable = dataTable;
    this.editableColumn = editableColumn;
    this.editableRow = editableRow;
  }
  onAfterContentInit() {
    this._templates.forEach((item) => {
      switch (item.getType()) {
        case "input":
          this.inputTemplate = item.template;
          break;
        case "output":
          this.outputTemplate = item.template;
          break;
      }
    });
  }
  get editing() {
    return this.dataTable.editingCell && this.editableColumn && this.dataTable.editingCell === this.editableColumn.el.nativeElement || this.editableRow && this.dataTable.editMode === "row" && this.dataTable.isRowEditing(this.editableRow.data);
  }
  static ɵfac = function CellEditor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CellEditor)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(EditableColumn, 8), ɵɵdirectiveInject(EditableRow, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CellEditor,
    selectors: [["p-cellEditor"]],
    contentQueries: function CellEditor_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c50, 5);
        ɵɵcontentQuery(dirIndex, _c51, 5);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._inputTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._outputTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._templates = _t2);
      }
    },
    standalone: false,
    features: [ɵɵInheritDefinitionFeature],
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"], [4, "ngTemplateOutlet"]],
    template: function CellEditor_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, CellEditor_ng_container_0_Template, 2, 1, "ng-container", 0)(1, CellEditor_ng_container_1_Template, 2, 1, "ng-container", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.editing);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.editing);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CellEditor, [{
    type: Component,
    args: [{
      selector: "p-cellEditor",
      standalone: false,
      template: `
        <ng-container *ngIf="editing">
            <ng-container *ngTemplateOutlet="inputTemplate || _inputTemplate"></ng-container>
        </ng-container>
        <ng-container *ngIf="!editing">
            <ng-container *ngTemplateOutlet="outputTemplate || _outputTemplate"></ng-container>
        </ng-container>
    `,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: Table
  }, {
    type: EditableColumn,
    decorators: [{
      type: Optional
    }]
  }, {
    type: EditableRow,
    decorators: [{
      type: Optional
    }]
  }], {
    _templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    _inputTemplate: [{
      type: ContentChild,
      args: ["input"]
    }],
    _outputTemplate: [{
      type: ContentChild,
      args: ["output"]
    }]
  });
})();
var TableRadioButton = class _TableRadioButton extends BaseComponent {
  dataTable;
  cd;
  value;
  disabled = input(void 0, ...ngDevMode ? [{
    debugName: "disabled",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  index = input(void 0, ...ngDevMode ? [{
    debugName: "index",
    transform: numberAttribute
  }] : [{
    transform: numberAttribute
  }]);
  inputId = input(...ngDevMode ? [void 0, {
    debugName: "inputId"
  }] : []);
  name = input(...ngDevMode ? [void 0, {
    debugName: "name"
  }] : []);
  ariaLabel;
  inputViewChild;
  checked;
  subscription;
  constructor(dataTable, cd) {
    super();
    this.dataTable = dataTable;
    this.cd = cd;
    this.subscription = this.dataTable.tableService.selectionSource$.subscribe(() => {
      this.checked = this.dataTable.isSelected(this.value);
      this.ariaLabel = this.ariaLabel || (this.dataTable.config.translation.aria ? this.checked ? this.dataTable.config.translation.aria.selectRow : this.dataTable.config.translation.aria.unselectRow : void 0);
      this.cd.markForCheck();
    });
  }
  onInit() {
    this.checked = this.dataTable.isSelected(this.value);
  }
  onClick(event2) {
    if (!this.disabled()) {
      this.dataTable.toggleRowWithRadio({
        originalEvent: event2.originalEvent,
        rowIndex: this.index()
      }, this.value);
      this.inputViewChild?.inputViewChild.nativeElement?.focus();
    }
    DomHandler.clearSelection();
  }
  onDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function TableRadioButton_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableRadioButton)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TableRadioButton,
    selectors: [["p-tableRadioButton"]],
    viewQuery: function TableRadioButton_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c522, 5);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.inputViewChild = _t2.first);
      }
    },
    inputs: {
      value: "value",
      disabled: [1, "disabled"],
      index: [1, "index"],
      inputId: [1, "inputId"],
      name: [1, "name"],
      ariaLabel: "ariaLabel"
    },
    standalone: false,
    features: [ɵɵInheritDefinitionFeature],
    decls: 2,
    vars: 7,
    consts: [["rb", ""], [3, "ngModelChange", "onClick", "ngModel", "disabled", "inputId", "name", "ariaLabel", "binary", "value"]],
    template: function TableRadioButton_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "p-radioButton", 1, 0);
        ɵɵtwoWayListener("ngModelChange", function TableRadioButton_Template_p_radioButton_ngModelChange_0_listener($event) {
          ɵɵrestoreView(_r1);
          ɵɵtwoWayBindingSet(ctx.checked, $event) || (ctx.checked = $event);
          return ɵɵresetView($event);
        });
        ɵɵlistener("onClick", function TableRadioButton_Template_p_radioButton_onClick_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onClick($event));
        });
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵtwoWayProperty("ngModel", ctx.checked);
        ɵɵproperty("disabled", ctx.disabled())("inputId", ctx.inputId())("name", ctx.name())("ariaLabel", ctx.ariaLabel)("binary", true)("value", ctx.value);
      }
    },
    dependencies: [NgControlStatus, NgModel, RadioButton],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableRadioButton, [{
    type: Component,
    args: [{
      selector: "p-tableRadioButton",
      standalone: false,
      template: `<p-radioButton #rb [(ngModel)]="checked" [disabled]="disabled()" [inputId]="inputId()" [name]="name()" [ariaLabel]="ariaLabel" [binary]="true" [value]="value" (onClick)="onClick($event)" /> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: Table
  }, {
    type: ChangeDetectorRef
  }], {
    value: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    index: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "index",
        required: false
      }]
    }],
    inputId: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "inputId",
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
    }],
    ariaLabel: [{
      type: Input
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["rb"]
    }]
  });
})();
var TableCheckbox = class _TableCheckbox extends BaseComponent {
  dataTable;
  tableService;
  value;
  disabled = input(void 0, ...ngDevMode ? [{
    debugName: "disabled",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  required = input(void 0, ...ngDevMode ? [{
    debugName: "required",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  index = input(void 0, ...ngDevMode ? [{
    debugName: "index",
    transform: numberAttribute
  }] : [{
    transform: numberAttribute
  }]);
  inputId = input(...ngDevMode ? [void 0, {
    debugName: "inputId"
  }] : []);
  name = input(...ngDevMode ? [void 0, {
    debugName: "name"
  }] : []);
  ariaLabel;
  checked;
  subscription;
  constructor(dataTable, tableService) {
    super();
    this.dataTable = dataTable;
    this.tableService = tableService;
    this.subscription = this.dataTable.tableService.selectionSource$.subscribe(() => {
      this.checked = this.dataTable.isSelected(this.value);
      this.ariaLabel = this.ariaLabel || (this.dataTable.config.translation.aria ? this.checked ? this.dataTable.config.translation.aria.selectRow : this.dataTable.config.translation.aria.unselectRow : void 0);
      this.cd.markForCheck();
    });
  }
  onInit() {
    this.checked = this.dataTable.isSelected(this.value);
  }
  onClick({
    originalEvent
  }) {
    if (!this.disabled()) {
      this.dataTable.toggleRowWithCheckbox({
        originalEvent,
        rowIndex: this.index() || 0
      }, this.value);
    }
    DomHandler.clearSelection();
  }
  onDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static ɵfac = function TableCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableCheckbox)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(TableService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TableCheckbox,
    selectors: [["p-tableCheckbox"]],
    inputs: {
      value: "value",
      disabled: [1, "disabled"],
      required: [1, "required"],
      index: [1, "index"],
      inputId: [1, "inputId"],
      name: [1, "name"],
      ariaLabel: "ariaLabel"
    },
    standalone: false,
    features: [ɵɵInheritDefinitionFeature],
    decls: 2,
    vars: 8,
    consts: [[3, "ngModelChange", "onChange", "ngModel", "binary", "required", "disabled", "inputId", "name", "ariaLabel"], ["pTemplate", "icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function TableCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "p-checkbox", 0);
        ɵɵtwoWayListener("ngModelChange", function TableCheckbox_Template_p_checkbox_ngModelChange_0_listener($event) {
          ɵɵtwoWayBindingSet(ctx.checked, $event) || (ctx.checked = $event);
          return $event;
        });
        ɵɵlistener("onChange", function TableCheckbox_Template_p_checkbox_onChange_0_listener($event) {
          return ctx.onClick($event);
        });
        ɵɵconditionalCreate(1, TableCheckbox_Conditional_1_Template, 1, 0, null, 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        let tmp_7_0;
        ɵɵtwoWayProperty("ngModel", ctx.checked);
        ɵɵproperty("binary", true)("required", ctx.required())("disabled", ctx.disabled())("inputId", ctx.inputId())("name", ctx.name())("ariaLabel", ctx.ariaLabel);
        ɵɵadvance();
        ɵɵconditional((tmp_7_0 = ctx.dataTable.checkboxIconTemplate || ctx.dataTable._checkboxIconTemplate) ? 1 : -1, tmp_7_0);
      }
    },
    dependencies: [NgTemplateOutlet, PrimeTemplate, NgControlStatus, RequiredValidator, NgModel, Checkbox],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableCheckbox, [{
    type: Component,
    args: [{
      selector: "p-tableCheckbox",
      standalone: false,
      template: `
        <p-checkbox [(ngModel)]="checked" [binary]="true" (onChange)="onClick($event)" [required]="required()" [disabled]="disabled()" [inputId]="inputId()" [name]="name()" [ariaLabel]="ariaLabel">
            @if (dataTable.checkboxIconTemplate || dataTable._checkboxIconTemplate; as template) {
                <ng-template pTemplate="icon">
                    <ng-template *ngTemplateOutlet="template; context: { $implicit: checked }" />
                </ng-template>
            }
        </p-checkbox>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None
    }]
  }], () => [{
    type: Table
  }, {
    type: TableService
  }], {
    value: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    required: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "required",
        required: false
      }]
    }],
    index: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "index",
        required: false
      }]
    }],
    inputId: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "inputId",
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
    }],
    ariaLabel: [{
      type: Input
    }]
  });
})();
var TableHeaderCheckbox = class _TableHeaderCheckbox extends BaseComponent {
  dataTable;
  tableService;
  hostName = "Table";
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("headerCheckbox"));
  }
  disabled = input(void 0, ...ngDevMode ? [{
    debugName: "disabled",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  inputId = input(...ngDevMode ? [void 0, {
    debugName: "inputId"
  }] : []);
  name = input(...ngDevMode ? [void 0, {
    debugName: "name"
  }] : []);
  ariaLabel;
  checked;
  selectionChangeSubscription;
  valueChangeSubscription;
  constructor(dataTable, tableService) {
    super();
    this.dataTable = dataTable;
    this.tableService = tableService;
    this.valueChangeSubscription = this.dataTable.tableService.valueSource$.subscribe(() => {
      this.checked = this.updateCheckedState();
      this.ariaLabel = this.ariaLabel || (this.dataTable.config.translation.aria ? this.checked ? this.dataTable.config.translation.aria.selectAll : this.dataTable.config.translation.aria.unselectAll : void 0);
    });
    this.selectionChangeSubscription = this.dataTable.tableService.selectionSource$.subscribe(() => {
      this.checked = this.updateCheckedState();
    });
  }
  onInit() {
    this.checked = this.updateCheckedState();
  }
  onClick(event2) {
    if (!this.disabled()) {
      if (this.dataTable.value && this.dataTable.value.length > 0) {
        this.dataTable.toggleRowsWithCheckbox(event2, this.checked || false);
      }
    }
    DomHandler.clearSelection();
  }
  isDisabled() {
    return this.disabled() || !this.dataTable.value || !this.dataTable.value.length;
  }
  onDestroy() {
    if (this.selectionChangeSubscription) {
      this.selectionChangeSubscription.unsubscribe();
    }
    if (this.valueChangeSubscription) {
      this.valueChangeSubscription.unsubscribe();
    }
  }
  updateCheckedState() {
    this.cd.markForCheck();
    if (this.dataTable._selectAll !== null) {
      return this.dataTable._selectAll;
    } else {
      const data = this.dataTable.selectionPageOnly ? this.dataTable.dataToRender(this.dataTable.processedData) : this.dataTable.processedData;
      const val = this.dataTable.frozenValue ? [...this.dataTable.frozenValue, ...data] : data;
      const selectableVal = this.dataTable.rowSelectable ? val.filter((data2, index) => this.dataTable.rowSelectable({
        data: data2,
        index
      })) : val;
      return ObjectUtils.isNotEmpty(selectableVal) && ObjectUtils.isNotEmpty(this.dataTable.selection) && selectableVal.every((v2) => this.dataTable.selection.some((s3) => this.dataTable.equals(v2, s3)));
    }
  }
  static ɵfac = function TableHeaderCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableHeaderCheckbox)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(TableService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TableHeaderCheckbox,
    selectors: [["p-tableHeaderCheckbox"]],
    inputs: {
      disabled: [1, "disabled"],
      inputId: [1, "inputId"],
      name: [1, "name"],
      ariaLabel: "ariaLabel"
    },
    standalone: false,
    features: [ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 2,
    vars: 8,
    consts: [[3, "ngModelChange", "onChange", "pt", "ngModel", "binary", "disabled", "inputId", "name", "ariaLabel"], ["pTemplate", "icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function TableHeaderCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "p-checkbox", 0);
        ɵɵtwoWayListener("ngModelChange", function TableHeaderCheckbox_Template_p_checkbox_ngModelChange_0_listener($event) {
          ɵɵtwoWayBindingSet(ctx.checked, $event) || (ctx.checked = $event);
          return $event;
        });
        ɵɵlistener("onChange", function TableHeaderCheckbox_Template_p_checkbox_onChange_0_listener($event) {
          return ctx.onClick($event);
        });
        ɵɵconditionalCreate(1, TableHeaderCheckbox_Conditional_1_Template, 1, 0, null, 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        let tmp_7_0;
        ɵɵproperty("pt", ctx.ptm("pcCheckbox"));
        ɵɵtwoWayProperty("ngModel", ctx.checked);
        ɵɵproperty("binary", true)("disabled", ctx.isDisabled())("inputId", ctx.inputId())("name", ctx.name())("ariaLabel", ctx.ariaLabel);
        ɵɵadvance();
        ɵɵconditional((tmp_7_0 = ctx.dataTable.headerCheckboxIconTemplate || ctx.dataTable._headerCheckboxIconTemplate) ? 1 : -1, tmp_7_0);
      }
    },
    dependencies: [NgTemplateOutlet, PrimeTemplate, NgControlStatus, NgModel, Checkbox],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableHeaderCheckbox, [{
    type: Component,
    args: [{
      selector: "p-tableHeaderCheckbox",
      standalone: false,
      template: `
        <p-checkbox [pt]="ptm('pcCheckbox')" [(ngModel)]="checked" (onChange)="onClick($event)" [binary]="true" [disabled]="isDisabled()" [inputId]="inputId()" [name]="name()" [ariaLabel]="ariaLabel">
            @if (dataTable.headerCheckboxIconTemplate || dataTable._headerCheckboxIconTemplate; as template) {
                <ng-template pTemplate="icon">
                    <ng-template *ngTemplateOutlet="template; context: { $implicit: checked }" />
                </ng-template>
            }
        </p-checkbox>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: Table
  }, {
    type: TableService
  }], {
    disabled: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }],
    inputId: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "inputId",
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
    }],
    ariaLabel: [{
      type: Input
    }]
  });
})();
var ReorderableRowHandle = class _ReorderableRowHandle extends BaseComponent {
  el;
  hostName = "Table";
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("reorderableRowHandle"));
  }
  _componentStyle = inject(TableStyle);
  constructor(el) {
    super();
    this.el = el;
  }
  onAfterViewInit() {
  }
  static ɵfac = function ReorderableRowHandle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReorderableRowHandle)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ReorderableRowHandle,
    selectors: [["", "pReorderableRowHandle", ""]],
    hostVars: 2,
    hostBindings: function ReorderableRowHandle_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.cx("reorderableRowHandle"));
      }
    },
    standalone: false,
    features: [ɵɵProvidersFeature([TableStyle]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReorderableRowHandle, [{
    type: Directive,
    args: [{
      selector: "[pReorderableRowHandle]",
      standalone: false,
      host: {
        "[class]": "cx('reorderableRowHandle')"
      },
      providers: [TableStyle],
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: ElementRef
  }], null);
})();
var ReorderableRow = class _ReorderableRow extends BaseComponent {
  dataTable;
  zone;
  hostName = "Table";
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("reorderableRow"));
  }
  index;
  pReorderableRowDisabled;
  mouseDownListener;
  dragStartListener;
  dragEndListener;
  dragOverListener;
  dragLeaveListener;
  dropListener;
  constructor(dataTable, zone) {
    super();
    this.dataTable = dataTable;
    this.zone = zone;
  }
  onAfterViewInit() {
    if (this.isEnabled()) {
      this.el.nativeElement.droppable = true;
      this.bindEvents();
    }
  }
  bindEvents() {
    this.zone.runOutsideAngular(() => {
      this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
      this.dragStartListener = this.renderer.listen(this.el.nativeElement, "dragstart", this.onDragStart.bind(this));
      this.dragEndListener = this.renderer.listen(this.el.nativeElement, "dragend", this.onDragEnd.bind(this));
      this.dragOverListener = this.renderer.listen(this.el.nativeElement, "dragover", this.onDragOver.bind(this));
      this.dragLeaveListener = this.renderer.listen(this.el.nativeElement, "dragleave", this.onDragLeave.bind(this));
    });
  }
  unbindEvents() {
    if (this.mouseDownListener) {
      this.mouseDownListener();
      this.mouseDownListener = null;
    }
    if (this.dragStartListener) {
      this.dragStartListener();
      this.dragStartListener = null;
    }
    if (this.dragEndListener) {
      this.dragEndListener();
      this.dragEndListener = null;
    }
    if (this.dragOverListener) {
      this.dragOverListener();
      this.dragOverListener = null;
    }
    if (this.dragLeaveListener) {
      this.dragLeaveListener();
      this.dragLeaveListener = null;
    }
  }
  onMouseDown(event2) {
    const targetElement = event2.target;
    const isHandleClicked = this.isHandleElement(targetElement);
    this.el.nativeElement.draggable = isHandleClicked;
  }
  isHandleElement(element) {
    if (element?.classList.contains("p-datatable-reorderable-row-handle")) {
      return true;
    }
    if (element?.parentElement && !["TD", "TR"].includes(element?.parentElement?.tagName)) {
      return this.isHandleElement(element?.parentElement);
    }
    return false;
  }
  onDragStart(event2) {
    this.dataTable.onRowDragStart(event2, this.index);
  }
  onDragEnd(event2) {
    this.dataTable.onRowDragEnd(event2);
    this.el.nativeElement.draggable = false;
  }
  onDragOver(event2) {
    this.dataTable.onRowDragOver(event2, this.index, this.el.nativeElement);
    event2.preventDefault();
  }
  onDragLeave(event2) {
    this.dataTable.onRowDragLeave(event2, this.el.nativeElement);
  }
  isEnabled() {
    return this.pReorderableRowDisabled !== true;
  }
  onDrop(event2) {
    if (this.isEnabled() && this.dataTable.rowDragging) {
      this.dataTable.onRowDrop(event2, this.el.nativeElement);
    }
    event2.preventDefault();
  }
  onDestroy() {
    this.unbindEvents();
  }
  static ɵfac = function ReorderableRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReorderableRow)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ReorderableRow,
    selectors: [["", "pReorderableRow", ""]],
    hostBindings: function ReorderableRow_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("drop", function ReorderableRow_drop_HostBindingHandler($event) {
          return ctx.onDrop($event);
        });
      }
    },
    inputs: {
      index: [0, "pReorderableRow", "index"],
      pReorderableRowDisabled: [2, "pReorderableRowDisabled", "pReorderableRowDisabled", booleanAttribute]
    },
    standalone: false,
    features: [ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReorderableRow, [{
    type: Directive,
    args: [{
      selector: "[pReorderableRow]",
      standalone: false,
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: Table
  }, {
    type: NgZone
  }], {
    index: [{
      type: Input,
      args: ["pReorderableRow"]
    }],
    pReorderableRowDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onDrop: [{
      type: HostListener,
      args: ["drop", ["$event"]]
    }]
  });
})();
var ColumnFilter = class _ColumnFilter extends BaseComponent {
  hostName = "Table";
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  _componentStyle = inject(TableStyle);
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("columnFilter"));
  }
  ptmFilterConstraintOptions(matchMode) {
    return {
      context: {
        highlighted: matchMode && this.isRowMatchModeSelected(matchMode.value)
      }
    };
  }
  /**
   * Property represented by the column.
   * @group Props
   */
  field;
  /**
   * Type of the input.
   * @group Props
   */
  type = "text";
  /**
   * Filter display.
   * @group Props
   */
  display = "row";
  /**
   * Decides whether to display filter menu popup.
   * @group Props
   */
  showMenu = true;
  /**
   * Filter match mode.
   * @group Props
   */
  matchMode;
  /**
   * Filter operator.
   * @defaultValue 'AND'
   * @group Props
   */
  operator = FilterOperator.AND;
  /**
   * Decides whether to display filter operator.
   * @group Props
   */
  showOperator = true;
  /**
   * Decides whether to display clear filter button when display is menu.
   * @defaultValue true
   * @group Props
   */
  showClearButton = true;
  /**
   * Decides whether to display apply filter button when display is menu.
   * @group Props
   */
  showApplyButton = true;
  /**
   * Decides whether to display filter match modes when display is menu.
   * @group Props
   */
  showMatchModes = true;
  /**
   * Decides whether to display add filter button when display is menu.
   * @group Props
   */
  showAddButton = true;
  /**
   * Decides whether to close popup on clear button click.
   * @group Props
   */
  hideOnClear = true;
  /**
   * Filter placeholder.
   * @group Props
   */
  placeholder;
  /**
   * Filter match mode options.
   * @group Props
   */
  matchModeOptions;
  /**
   * Defines maximum amount of constraints.
   * @group Props
   */
  maxConstraints = 2;
  /**
   * Defines minimum fraction of digits.
   * @group Props
   */
  minFractionDigits;
  /**
   * Defines maximum fraction of digits.
   * @group Props
   */
  maxFractionDigits;
  /**
   * Defines prefix of the filter.
   * @group Props
   */
  prefix;
  /**
   * Defines suffix of the filter.
   * @group Props
   */
  suffix;
  /**
   * Defines filter locale.
   * @group Props
   */
  locale;
  /**
   * Defines filter locale matcher.
   * @group Props
   */
  localeMatcher;
  /**
   * Enables currency input.
   * @group Props
   */
  currency;
  /**
   * Defines the display of the currency input.
   * @group Props
   */
  currencyDisplay;
  /**
   * Default trigger to run filtering on built-in text and numeric filters, valid values are 'enter' and 'input'.
   * @defaultValue enter
   * @group Props
   */
  filterOn = "enter";
  /**
   * Defines if filter grouping will be enabled.
   * @group Props
   */
  useGrouping = true;
  /**
   * Defines the visibility of buttons.
   * @group Props
   */
  showButtons = true;
  /**
   * Defines the aria-label of the form element.
   * @group Props
   */
  ariaLabel;
  /**
   * Used to pass all filter button property object
   * @defaultValue {
   filter: { severity: 'secondary', text: true, rounded: true },
   inline: {
      clear: { severity: 'secondary', text: true, rounded: true }
   },
   popover: {
       addRule: { severity: 'info', text: true, size: 'small' },
       removeRule: { severity: 'danger', text: true, size: 'small' },
       apply: { size: 'small' },
       clear: { outlined: true, size: 'small' }
      }
   }
   @group Props
   */
  filterButtonProps = {
    filter: {
      severity: "secondary",
      text: true,
      rounded: true
    },
    inline: {
      clear: {
        severity: "secondary",
        text: true,
        rounded: true
      }
    },
    popover: {
      addRule: {
        severity: "info",
        text: true,
        size: "small"
      },
      removeRule: {
        severity: "danger",
        text: true,
        size: "small"
      },
      apply: {
        size: "small"
      },
      clear: {
        outlined: true,
        size: "small"
      }
    }
  };
  /**
   * Callback to invoke on overlay is shown.
   * @param {AnimationEvent} originalEvent - animation event.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke on overlay is hidden.
   * @param {AnimationEvent} originalEvent - animation event.
   * @group Emits
   */
  onHide = new EventEmitter();
  icon;
  clearButtonViewChild;
  _templates;
  overlaySubscription;
  /**
   * Custom header template.
   * @group Templates
   */
  headerTemplate;
  _headerTemplate;
  /**
   * Custom filter template.
   * @group Templates
   */
  filterTemplate;
  _filterTemplate;
  /**
   * Custom footer template.
   * @group Templates
   */
  footerTemplate;
  _footerTemplate;
  /**
   * Custom filter icon template.
   * @group Templates
   */
  filterIconTemplate;
  _filterIconTemplate;
  /**
   * Custom remove rule button icon template.
   * @group Templates
   */
  removeRuleIconTemplate;
  _removeRuleIconTemplate;
  /**
   * Custom add rule button icon template.
   * @group Templates
   */
  addRuleIconTemplate;
  _addRuleIconTemplate;
  clearFilterIconTemplate;
  _clearFilterIconTemplate;
  operatorOptions;
  overlayVisible;
  overlay;
  scrollHandler;
  documentClickListener;
  documentResizeListener;
  matchModes;
  translationSubscription;
  resetSubscription;
  selfClick;
  overlayEventListener;
  overlayId;
  get fieldConstraints() {
    return this.dataTable.filters ? this.dataTable.filters[this.field] : null;
  }
  get showRemoveIcon() {
    return this.fieldConstraints ? this.fieldConstraints.length > 1 : false;
  }
  get showMenuButton() {
    return this.showMenu && (this.display === "row" ? this.type !== "boolean" : true);
  }
  get isShowOperator() {
    return this.showOperator && this.type !== "boolean";
  }
  get isShowAddConstraint() {
    return this.showAddButton && this.type !== "boolean" && this.fieldConstraints && this.fieldConstraints.length < this.maxConstraints;
  }
  get showMenuButtonLabel() {
    return this.config.getTranslation(TranslationKeys.SHOW_FILTER_MENU);
  }
  get applyButtonLabel() {
    return this.config.getTranslation(TranslationKeys.APPLY);
  }
  get clearButtonLabel() {
    return this.config.getTranslation(TranslationKeys.CLEAR);
  }
  get addRuleButtonLabel() {
    return this.config.getTranslation(TranslationKeys.ADD_RULE);
  }
  get removeRuleButtonLabel() {
    return this.config.getTranslation(TranslationKeys.REMOVE_RULE);
  }
  get noFilterLabel() {
    return this.config.getTranslation(TranslationKeys.NO_FILTER);
  }
  get filterMenuButtonAriaLabel() {
    return this.config?.translation ? this.overlayVisible ? this.config?.translation?.aria?.hideFilterMenu : this.config?.translation?.aria?.showFilterMenu : void 0;
  }
  get removeRuleButtonAriaLabel() {
    return this.config?.translation ? this.config?.translation?.removeRule : void 0;
  }
  get filterOperatorAriaLabel() {
    return this.config?.translation ? this.config?.translation?.aria?.filterOperator : void 0;
  }
  get filterConstraintAriaLabel() {
    return this.config?.translation ? this.config?.translation?.aria?.filterConstraint : void 0;
  }
  dataTable = inject(Table);
  overlayService = inject(OverlayService);
  onInit() {
    this.overlayId = UniqueComponentId();
    if (!this.dataTable.filters[this.field]) {
      this.initFieldFilterConstraint();
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.generateMatchModeOptions();
      this.generateOperatorOptions();
    });
    this.generateMatchModeOptions();
    this.generateOperatorOptions();
  }
  generateMatchModeOptions() {
    this.matchModes = this.matchModeOptions || this.config.filterMatchModeOptions[this.type]?.map((key) => {
      return {
        label: this.config.getTranslation(key),
        value: key
      };
    });
  }
  generateOperatorOptions() {
    this.operatorOptions = [{
      label: this.config.getTranslation(TranslationKeys.MATCH_ALL),
      value: FilterOperator.AND
    }, {
      label: this.config.getTranslation(TranslationKeys.MATCH_ANY),
      value: FilterOperator.OR
    }];
  }
  onAfterContentInit() {
    this._templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this._headerTemplate = item.template;
          break;
        case "filter":
          this._filterTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "filtericon":
          this._filterIconTemplate = item.template;
          break;
        case "clearfiltericon":
          this._clearFilterIconTemplate = item.template;
          break;
        case "removeruleicon":
          this._removeRuleIconTemplate = item.template;
          break;
        case "addruleicon":
          this._addRuleIconTemplate = item.template;
          break;
        default:
          this._filterTemplate = item.template;
          break;
      }
    });
  }
  initFieldFilterConstraint() {
    let defaultMatchMode = this.getDefaultMatchMode();
    this.dataTable.filters[this.field] = this.display == "row" ? {
      value: null,
      matchMode: defaultMatchMode
    } : [{
      value: null,
      matchMode: defaultMatchMode,
      operator: this.operator
    }];
  }
  onMenuMatchModeChange(value, filterMeta) {
    filterMeta.matchMode = value;
    if (!this.showApplyButton) {
      this.dataTable._filter();
    }
  }
  onRowMatchModeChange(matchMode) {
    const fieldFilter = this.dataTable.filters[this.field];
    fieldFilter.matchMode = matchMode;
    if (fieldFilter.value) {
      this.dataTable._filter();
    }
    this.hide();
  }
  onRowMatchModeKeyDown(event2) {
    let item = event2.target;
    switch (event2.key) {
      case "ArrowDown":
        var nextItem = this.findNextItem(item);
        if (nextItem) {
          item.removeAttribute("tabindex");
          nextItem.tabIndex = "0";
          nextItem.focus();
        }
        event2.preventDefault();
        break;
      case "ArrowUp":
        var prevItem = this.findPrevItem(item);
        if (prevItem) {
          item.removeAttribute("tabindex");
          prevItem.tabIndex = "0";
          prevItem.focus();
        }
        event2.preventDefault();
        break;
    }
  }
  onRowClearItemClick() {
    this.clearFilter();
    this.hide();
  }
  isRowMatchModeSelected(matchMode) {
    return this.dataTable.filters[this.field].matchMode === matchMode;
  }
  addConstraint() {
    this.dataTable.filters[this.field].push({
      value: null,
      matchMode: this.getDefaultMatchMode(),
      operator: this.getDefaultOperator()
    });
    DomHandler.focus(this.clearButtonViewChild?.nativeElement);
  }
  removeConstraint(filterMeta) {
    this.dataTable.filters[this.field] = this.dataTable.filters[this.field].filter((meta) => meta !== filterMeta);
    if (!this.showApplyButton) {
      this.dataTable._filter();
    }
    DomHandler.focus(this.clearButtonViewChild?.nativeElement);
  }
  onOperatorChange(value) {
    this.dataTable.filters[this.field].forEach((filterMeta) => {
      filterMeta.operator = value;
      this.operator = value;
    });
    if (!this.showApplyButton) {
      this.dataTable._filter();
    }
  }
  toggleMenu(event2) {
    this.overlayVisible = !this.overlayVisible;
    event2.stopPropagation();
  }
  onToggleButtonKeyDown(event2) {
    switch (event2.key) {
      case "Escape":
      case "Tab":
        this.overlayVisible = false;
        break;
      case "ArrowDown":
        if (this.overlayVisible) {
          let focusable = DomHandler.getFocusableElements(this.overlay);
          if (focusable) {
            focusable[0].focus();
          }
          event2.preventDefault();
        } else if (event2.altKey) {
          this.overlayVisible = true;
          event2.preventDefault();
        }
        break;
      case "Enter":
        this.toggleMenu(event2);
        event2.preventDefault();
        break;
    }
  }
  onEscape() {
    this.overlayVisible = false;
    this.icon?.nativeElement.focus();
  }
  findNextItem(item) {
    let nextItem = item.nextElementSibling;
    if (nextItem) return DomHandler.hasClass(nextItem, "p-datatable-filter-constraint-separator") ? this.findNextItem(nextItem) : nextItem;
    else return item.parentElement?.firstElementChild;
  }
  findPrevItem(item) {
    let prevItem = item.previousElementSibling;
    if (prevItem) return DomHandler.hasClass(prevItem, "p-datatable-filter-constraint-separator") ? this.findPrevItem(prevItem) : prevItem;
    else return item.parentElement?.lastElementChild;
  }
  onContentClick() {
    this.selfClick = true;
  }
  onOverlayAnimationStart(event2) {
    switch (event2.toState) {
      case "visible":
        this.overlay = event2.element;
        this.renderer.appendChild(this.document.body, this.overlay);
        zindexutils.set("overlay", this.overlay, this.config.zIndex.overlay);
        DomHandler.absolutePosition(this.overlay, this.icon?.nativeElement);
        this.bindDocumentClickListener();
        this.bindDocumentResizeListener();
        this.bindScrollListener();
        this.overlayEventListener = (e) => {
          if (this.overlay && this.overlay.contains(e.target)) {
            this.selfClick = true;
          }
        };
        this.overlaySubscription = this.overlayService.clickObservable.subscribe(this.overlayEventListener);
        this.onShow.emit({
          originalEvent: event2
        });
        break;
      case "void":
        this.onOverlayHide();
        if (this.overlaySubscription) {
          this.overlaySubscription.unsubscribe();
        }
        break;
    }
  }
  onOverlayAnimationEnd(event2) {
    switch (event2.toState) {
      case "visible":
        this.focusOnFirstElement();
        break;
      case "void":
        zindexutils.clear(event2.element);
        this.onHide.emit({
          originalEvent: event2
        });
        break;
    }
  }
  focusOnFirstElement() {
    if (this.overlay) {
      DomHandler.focus(DomHandler.getFirstFocusableElement(this.overlay, ""));
    }
  }
  getDefaultMatchMode() {
    if (this.matchMode) {
      return this.matchMode;
    } else {
      if (this.type === "text") return FilterMatchMode.STARTS_WITH;
      else if (this.type === "numeric") return FilterMatchMode.EQUALS;
      else if (this.type === "date") return FilterMatchMode.DATE_IS;
      else return FilterMatchMode.CONTAINS;
    }
  }
  getDefaultOperator() {
    return this.dataTable.filters ? this.dataTable.filters[this.field][0].operator : this.operator;
  }
  hasRowFilter() {
    return this.dataTable.filters[this.field] && !this.dataTable.isFilterBlank(this.dataTable.filters[this.field].value);
  }
  get hasFilter() {
    let fieldFilter = this.dataTable.filters[this.field];
    if (fieldFilter) {
      if (Array.isArray(fieldFilter)) return !this.dataTable.isFilterBlank(fieldFilter[0].value);
      else return !this.dataTable.isFilterBlank(fieldFilter.value);
    }
    return false;
  }
  isOutsideClicked(event2) {
    return !(DomHandler.hasClass(this.overlay?.nextElementSibling, "p-overlay") || DomHandler.hasClass(this.overlay?.nextElementSibling, "p-popover") || this.overlay?.isSameNode(event2.target) || this.overlay?.contains(event2.target) || this.icon?.nativeElement.isSameNode(event2.target) || this.icon?.nativeElement.contains(event2.target) || DomHandler.hasClass(event2.target, "p-datatable-filter-add-rule-button") || DomHandler.hasClass(event2.target.parentElement, "p-datatable-filter-add-rule-button") || DomHandler.hasClass(event2.target, "p-datatable-filter-remove-rule-button") || DomHandler.hasClass(event2.target.parentElement, "p-datatable-filter-remove-rule-button"));
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentClickListener = this.renderer.listen(documentTarget, "mousedown", (event2) => {
        const dialogElements = document.querySelectorAll('[role="dialog"]');
        const targetIsColumnFilterMenuButton = event2.target.closest(".p-datatable-column-filter-button");
        if (this.overlayVisible && this.isOutsideClicked(event2) && (targetIsColumnFilterMenuButton || dialogElements?.length <= 1)) {
          this.hide();
        }
        this.selfClick = false;
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
      this.selfClick = false;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener) {
      this.documentResizeListener = this.renderer.listen(this.document.defaultView, "resize", (event2) => {
        if (this.overlayVisible && !DomHandler.isTouchDevice()) {
          this.hide();
        }
      });
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.icon?.nativeElement, () => {
        if (this.overlayVisible) {
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
  hide() {
    this.overlayVisible = false;
    this.cd.markForCheck();
  }
  onOverlayHide() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.overlay = null;
  }
  clearFilter() {
    this.initFieldFilterConstraint();
    this.dataTable._filter();
    if (this.hideOnClear) this.hide();
  }
  applyFilter() {
    this.dataTable._filter();
    this.hide();
  }
  onDestroy() {
    if (this.overlay) {
      this.renderer.appendChild(this.el.nativeElement, this.overlay);
      zindexutils.clear(this.overlay);
      this.onOverlayHide();
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    if (this.resetSubscription) {
      this.resetSubscription.unsubscribe();
    }
    if (this.overlaySubscription) {
      this.overlaySubscription.unsubscribe();
    }
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵColumnFilter_BaseFactory;
    return function ColumnFilter_Factory(__ngFactoryType__) {
      return (ɵColumnFilter_BaseFactory || (ɵColumnFilter_BaseFactory = ɵɵgetInheritedFactory(_ColumnFilter)))(__ngFactoryType__ || _ColumnFilter);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _ColumnFilter,
    selectors: [["p-columnFilter"], ["p-column-filter"], ["p-columnfilter"]],
    contentQueries: function ColumnFilter_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c09, 4);
        ɵɵcontentQuery(dirIndex, _c532, 4);
        ɵɵcontentQuery(dirIndex, _c53, 4);
        ɵɵcontentQuery(dirIndex, _c54, 4);
        ɵɵcontentQuery(dirIndex, _c55, 4);
        ɵɵcontentQuery(dirIndex, _c56, 4);
        ɵɵcontentQuery(dirIndex, _c57, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.headerTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.filterTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.footerTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.filterIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.removeRuleIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.addRuleIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.clearFilterIconTemplate = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx._templates = _t2);
      }
    },
    viewQuery: function ColumnFilter_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(Button, 5, ElementRef);
        ɵɵviewQuery(_c58, 5);
      }
      if (rf & 2) {
        let _t2;
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.icon = _t2.first);
        ɵɵqueryRefresh(_t2 = ɵɵloadQuery()) && (ctx.clearButtonViewChild = _t2.first);
      }
    },
    inputs: {
      field: "field",
      type: "type",
      display: "display",
      showMenu: [2, "showMenu", "showMenu", booleanAttribute],
      matchMode: "matchMode",
      operator: "operator",
      showOperator: [2, "showOperator", "showOperator", booleanAttribute],
      showClearButton: [2, "showClearButton", "showClearButton", booleanAttribute],
      showApplyButton: [2, "showApplyButton", "showApplyButton", booleanAttribute],
      showMatchModes: [2, "showMatchModes", "showMatchModes", booleanAttribute],
      showAddButton: [2, "showAddButton", "showAddButton", booleanAttribute],
      hideOnClear: [2, "hideOnClear", "hideOnClear", booleanAttribute],
      placeholder: "placeholder",
      matchModeOptions: "matchModeOptions",
      maxConstraints: [2, "maxConstraints", "maxConstraints", numberAttribute],
      minFractionDigits: [2, "minFractionDigits", "minFractionDigits", (value) => numberAttribute(value, void 0)],
      maxFractionDigits: [2, "maxFractionDigits", "maxFractionDigits", (value) => numberAttribute(value, void 0)],
      prefix: "prefix",
      suffix: "suffix",
      locale: "locale",
      localeMatcher: "localeMatcher",
      currency: "currency",
      currencyDisplay: "currencyDisplay",
      filterOn: "filterOn",
      useGrouping: [2, "useGrouping", "useGrouping", booleanAttribute],
      showButtons: [2, "showButtons", "showButtons", booleanAttribute],
      ariaLabel: "ariaLabel",
      filterButtonProps: "filterButtonProps"
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide"
    },
    standalone: false,
    features: [ɵɵProvidersFeature([TableStyle]), ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 4,
    vars: 5,
    consts: [["icon", ""], ["menu", ""], ["clearBtn", ""], ["class", "p-fluid", 3, "type", "field", "ariaLabel", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "showButtons", "filterOn", "pt", 4, "ngIf"], [3, "styleClass", "pt", "ariaLabel", "buttonProps", "click", "keydown", 4, "ngIf"], ["role", "dialog", 3, "class", "pBind", "id", "click", "keydown.escape", 4, "ngIf"], [1, "p-fluid", 3, "type", "field", "ariaLabel", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "showButtons", "filterOn", "pt"], [3, "click", "keydown", "styleClass", "pt", "ariaLabel", "buttonProps"], ["data-p-icon", "filter", 3, "pBind", 4, "ngIf"], ["data-p-icon", "filter-fill", 3, "pBind", 4, "ngIf"], ["class", "pi-filter-icon", 3, "pBind", 4, "ngIf"], ["data-p-icon", "filter", 3, "pBind"], ["data-p-icon", "filter-fill", 3, "pBind"], [1, "pi-filter-icon", 3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "dialog", 3, "click", "keydown.escape", "pBind", "id"], [3, "class", "pBind", 4, "ngIf", "ngIfElse"], [3, "pBind"], [3, "class", "pBind", "p-datatable-filter-constraint-selected", "click", "keydown", "keydown.enter", 4, "ngFor", "ngForOf"], [3, "click", "keydown", "keydown.enter", "pBind"], [3, "class", "pBind", 4, "ngIf"], [3, "ngClass", "pBind", 4, "ngFor", "ngForOf"], ["type", "button", "size", "small", 3, "pt", "label", "styleClass", "text", "buttonProps"], [3, "outlined", "label", "buttonProps", "pt", "onClick", 4, "ngIf"], ["size", "small", 3, "label", "buttonProps", "pt", "onClick", 4, "ngIf"], [3, "ngModelChange", "options", "pt", "ngModel", "styleClass"], [3, "ngClass", "pBind"], [3, "options", "ngModel", "styleClass", "pt", "ngModelChange", 4, "ngIf"], [3, "type", "field", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "filterOn", "pt"], ["severity", "danger", "size", "small", 3, "styleClass", "pt", "text", "ariaLabel", "label", "buttonProps", "onClick", 4, "ngIf"], [3, "ngModelChange", "options", "ngModel", "styleClass", "pt"], ["severity", "danger", "size", "small", 3, "onClick", "styleClass", "pt", "text", "ariaLabel", "label", "buttonProps"], ["data-p-icon", "trash", 3, "pBind", 4, "ngIf"], [4, "ngTemplateOutlet"], ["data-p-icon", "trash", 3, "pBind"], ["type", "button", "size", "small", 3, "onClick", "pt", "label", "styleClass", "text", "buttonProps"], ["data-p-icon", "plus", 3, "pBind", 4, "ngIf"], ["data-p-icon", "plus", 3, "pBind"], [3, "onClick", "outlined", "label", "buttonProps", "pt"], ["size", "small", 3, "onClick", "label", "buttonProps", "pt"]],
    template: function ColumnFilter_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵtemplate(1, ColumnFilter_p_columnFilterFormElement_1_Template, 1, 18, "p-columnFilterFormElement", 3)(2, ColumnFilter_p_button_2_Template, 3, 7, "p-button", 4)(3, ColumnFilter_div_3_Template, 6, 16, "div", 5);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.cx("filter"));
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.display === "row");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showMenuButton);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showMenu && ctx.overlayVisible);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, Select, NgControlStatus, NgModel, Button, FilterIcon, FilterFillIcon, PlusIcon, TrashIcon, Bind, ColumnFilterFormElement],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate(".12s cubic-bezier(0, 0, 0.2, 1)")]), transition(":leave", [animate(".1s linear", style({
        opacity: 0
      }))])])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColumnFilter, [{
    type: Component,
    args: [{
      selector: "p-columnFilter, p-column-filter, p-columnfilter",
      standalone: false,
      template: `
        <div [class]="cx('filter')">
            <p-columnFilterFormElement
                *ngIf="display === 'row'"
                class="p-fluid"
                [type]="type"
                [field]="field"
                [ariaLabel]="ariaLabel"
                [filterConstraint]="dataTable.filters[field]"
                [filterTemplate]="filterTemplate || _filterTemplate"
                [placeholder]="placeholder"
                [minFractionDigits]="minFractionDigits"
                [maxFractionDigits]="maxFractionDigits"
                [prefix]="prefix"
                [suffix]="suffix"
                [locale]="locale"
                [localeMatcher]="localeMatcher"
                [currency]="currency"
                [currencyDisplay]="currencyDisplay"
                [useGrouping]="useGrouping"
                [showButtons]="showButtons"
                [filterOn]="filterOn"
                [pt]="pt()"
            ></p-columnFilterFormElement>
            <p-button
                *ngIf="showMenuButton"
                [styleClass]="cx('pcColumnFilterButton')"
                [pt]="ptm('pcColumnFilterButton')"
                [attr.aria-haspopup]="true"
                [ariaLabel]="filterMenuButtonAriaLabel"
                [attr.aria-controls]="overlayVisible ? overlayId : null"
                [attr.aria-expanded]="overlayVisible ?? false"
                (click)="toggleMenu($event)"
                (keydown)="onToggleButtonKeyDown($event)"
                [buttonProps]="filterButtonProps?.filter"
            >
                <ng-template #icon>
                    <ng-container>
                        <svg data-p-icon="filter" *ngIf="!filterIconTemplate && !_filterIconTemplate && !hasFilter" [pBind]="ptm('pcColumnFilterButton')['icon']" />
                        <svg data-p-icon="filter-fill" *ngIf="!filterIconTemplate && !_filterIconTemplate && hasFilter" [pBind]="ptm('pcColumnFilterButton')['icon']" />
                        <span class="pi-filter-icon" *ngIf="filterIconTemplate || _filterIconTemplate" [pBind]="ptm('pcColumnFilterButton')['icon']">
                            <ng-template *ngTemplateOutlet="filterIconTemplate || _filterIconTemplate; context: { hasFilter: hasFilter }"></ng-template>
                        </span>
                    </ng-container>
                </ng-template>
            </p-button>

            <div
                *ngIf="showMenu && overlayVisible"
                [class]="cx('filterOverlay')"
                [pBind]="ptm('filterOverlay')"
                [id]="overlayId"
                [attr.aria-modal]="true"
                role="dialog"
                (click)="onContentClick()"
                [@overlayAnimation]="'visible'"
                (@overlayAnimation.start)="onOverlayAnimationStart($event)"
                (@overlayAnimation.done)="onOverlayAnimationEnd($event)"
                (keydown.escape)="onEscape()"
            >
                <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate; context: { $implicit: field }"></ng-container>
                <ul *ngIf="display === 'row'; else menu" [class]="cx('filterConstraintList')" [pBind]="ptm('filterConstraintList')">
                    <li
                        *ngFor="let matchMode of matchModes; let i = index"
                        (click)="onRowMatchModeChange(matchMode.value)"
                        (keydown)="onRowMatchModeKeyDown($event)"
                        (keydown.enter)="onRowMatchModeChange(matchMode.value)"
                        [class]="cx('filterConstraint')"
                        [pBind]="ptm('filterConstraint', ptmFilterConstraintOptions(matchMode))"
                        [class.p-datatable-filter-constraint-selected]="isRowMatchModeSelected(matchMode.value)"
                        [attr.tabindex]="i === 0 ? '0' : null"
                    >
                        {{ matchMode.label }}
                    </li>
                    <li [class]="cx('filterConstraintSeparator')" [pBind]="ptm('filterConstraintSeparator', { context: { index: i } })"></li>
                    <li [class]="cx('filterConstraint')" [pBind]="ptm('emtpyFilterLabel')" (click)="onRowClearItemClick()" (keydown)="onRowMatchModeKeyDown($event)" (keydown.enter)="onRowClearItemClick()">
                        {{ noFilterLabel }}
                    </li>
                </ul>
                <ng-template #menu>
                    <div [class]="cx('filterOperator')" [pBind]="ptm('filterOperator')" *ngIf="isShowOperator">
                        <p-select [options]="operatorOptions" [pt]="ptm('pcFilterOperatorDropdown')" [ngModel]="operator" (ngModelChange)="onOperatorChange($event)" [styleClass]="cx('pcFilterOperatorDropdown')"></p-select>
                    </div>
                    <div [class]="cx('filterRuleList')" [pBind]="ptm('filterRuleList')">
                        <div *ngFor="let fieldConstraint of fieldConstraints; let i = index" [ngClass]="cx('filterRule')" [pBind]="ptm('filterRule')">
                            <p-select
                                *ngIf="showMatchModes && matchModes"
                                [options]="matchModes"
                                [ngModel]="fieldConstraint.matchMode"
                                (ngModelChange)="onMenuMatchModeChange($event, fieldConstraint)"
                                [styleClass]="cx('pcFilterConstraintDropdown')"
                                [pt]="ptm('pcFilterConstraintDropdown')"
                            ></p-select>
                            <p-columnFilterFormElement
                                [type]="type"
                                [field]="field"
                                [filterConstraint]="fieldConstraint"
                                [filterTemplate]="filterTemplate || _filterTemplate"
                                [placeholder]="placeholder"
                                [minFractionDigits]="minFractionDigits"
                                [maxFractionDigits]="maxFractionDigits"
                                [prefix]="prefix"
                                [suffix]="suffix"
                                [locale]="locale"
                                [localeMatcher]="localeMatcher"
                                [currency]="currency"
                                [currencyDisplay]="currencyDisplay"
                                [useGrouping]="useGrouping"
                                [filterOn]="filterOn"
                                [pt]="pt()"
                            ></p-columnFilterFormElement>
                            <div>
                                <p-button
                                    *ngIf="showRemoveIcon"
                                    [styleClass]="cx('pcFilterRemoveRuleButton')"
                                    [pt]="ptm('pcFilterRemoveRuleButton')"
                                    [text]="true"
                                    severity="danger"
                                    size="small"
                                    (onClick)="removeConstraint(fieldConstraint)"
                                    [ariaLabel]="removeRuleButtonLabel"
                                    [label]="removeRuleButtonLabel"
                                    [buttonProps]="filterButtonProps?.popover?.removeRule"
                                >
                                    <ng-template #icon>
                                        <svg data-p-icon="trash" *ngIf="!removeRuleIconTemplate && !_removeRuleIconTemplate" [pBind]="ptm('pcFilterRemoveRuleButton')['icon']" />
                                        <ng-template *ngTemplateOutlet="removeRuleIconTemplate || _removeRuleIconTemplate"></ng-template>
                                    </ng-template>
                                </p-button>
                            </div>
                        </div>
                    </div>
                    @if (isShowAddConstraint) {
                        <p-button
                            type="button"
                            [pt]="ptm('pcAddRuleButtonLabel')"
                            [label]="addRuleButtonLabel"
                            [attr.aria-label]="addRuleButtonLabel"
                            [styleClass]="cx('pcFilterAddRuleButton')"
                            [text]="true"
                            size="small"
                            (onClick)="addConstraint()"
                            [buttonProps]="filterButtonProps?.popover?.addRule"
                        >
                            <ng-template #icon>
                                <svg data-p-icon="plus" *ngIf="!addRuleIconTemplate && !_addRuleIconTemplate" [pBind]="ptm('pcAddRuleButtonLabel')['icon']" />
                                <ng-template *ngTemplateOutlet="addRuleIconTemplate || _addRuleIconTemplate"></ng-template>
                            </ng-template>
                        </p-button>
                    }
                    <div [class]="cx('filterButtonbar')" [pBind]="ptm('filterButtonBar')">
                        <p-button
                            #clearBtn
                            *ngIf="showClearButton"
                            [outlined]="true"
                            (onClick)="clearFilter()"
                            [attr.aria-label]="clearButtonLabel"
                            [label]="clearButtonLabel"
                            [buttonProps]="filterButtonProps?.popover?.clear"
                            [pt]="ptm('pcFilterClearButton')"
                        />
                        <p-button *ngIf="showApplyButton" (onClick)="applyFilter()" size="small" [label]="applyButtonLabel" [attr.aria-label]="applyButtonLabel" [buttonProps]="filterButtonProps?.popover?.apply" [pt]="ptm('pcFilterApplyButton')" />
                    </div>
                </ng-template>
                <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate; context: { $implicit: field }"></ng-container>
            </div>
        </div>
    `,
      providers: [TableStyle],
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate(".12s cubic-bezier(0, 0, 0.2, 1)")]), transition(":leave", [animate(".1s linear", style({
        opacity: 0
      }))])])],
      encapsulation: ViewEncapsulation.None,
      hostDirectives: [Bind]
    }]
  }], null, {
    field: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    display: [{
      type: Input
    }],
    showMenu: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    matchMode: [{
      type: Input
    }],
    operator: [{
      type: Input
    }],
    showOperator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showClearButton: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showApplyButton: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showMatchModes: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showAddButton: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideOnClear: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    placeholder: [{
      type: Input
    }],
    matchModeOptions: [{
      type: Input
    }],
    maxConstraints: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    minFractionDigits: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, void 0)
      }]
    }],
    maxFractionDigits: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, void 0)
      }]
    }],
    prefix: [{
      type: Input
    }],
    suffix: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    localeMatcher: [{
      type: Input
    }],
    currency: [{
      type: Input
    }],
    currencyDisplay: [{
      type: Input
    }],
    filterOn: [{
      type: Input
    }],
    useGrouping: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showButtons: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaLabel: [{
      type: Input
    }],
    filterButtonProps: [{
      type: Input
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    icon: [{
      type: ViewChild,
      args: [Button, {
        static: false,
        read: ElementRef
      }]
    }],
    clearButtonViewChild: [{
      type: ViewChild,
      args: ["clearBtn"]
    }],
    _templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
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
    filterIconTemplate: [{
      type: ContentChild,
      args: ["filtericon", {
        descendants: false
      }]
    }],
    removeRuleIconTemplate: [{
      type: ContentChild,
      args: ["removeruleicon", {
        descendants: false
      }]
    }],
    addRuleIconTemplate: [{
      type: ContentChild,
      args: ["addruleicon", {
        descendants: false
      }]
    }],
    clearFilterIconTemplate: [{
      type: ContentChild,
      args: ["clearfiltericon", {
        descendants: false
      }]
    }]
  });
})();
var ColumnFilterFormElement = class _ColumnFilterFormElement extends BaseComponent {
  dataTable;
  colFilter;
  hostName = "Table";
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptm("columnFilterFormElement"));
  }
  field;
  type;
  filterConstraint;
  filterTemplate;
  placeholder;
  minFractionDigits;
  maxFractionDigits;
  prefix;
  suffix;
  locale;
  localeMatcher;
  currency;
  currencyDisplay;
  useGrouping = true;
  ariaLabel;
  filterOn;
  get showButtons() {
    return this.colFilter.showButtons;
  }
  filterCallback;
  constructor(dataTable, colFilter) {
    super();
    this.dataTable = dataTable;
    this.colFilter = colFilter;
  }
  onInit() {
    this.filterCallback = (value) => {
      this.filterConstraint.value = value;
      this.dataTable._filter();
    };
  }
  onModelChange(value) {
    this.filterConstraint.value = value;
    if (this.type === "date" || this.type === "boolean" || (this.type === "text" || this.type === "numeric") && this.filterOn === "input" || !value) {
      this.dataTable._filter();
    }
  }
  onTextInputEnterKeyDown(event2) {
    this.dataTable._filter();
    event2.preventDefault();
  }
  onNumericInputKeyDown(event2) {
    if (event2.key === "Enter") {
      this.dataTable._filter();
      event2.preventDefault();
    }
  }
  static ɵfac = function ColumnFilterFormElement_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ColumnFilterFormElement)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(ColumnFilter));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ColumnFilterFormElement,
    selectors: [["p-columnFilterFormElement"]],
    inputs: {
      field: "field",
      type: "type",
      filterConstraint: "filterConstraint",
      filterTemplate: "filterTemplate",
      placeholder: "placeholder",
      minFractionDigits: [2, "minFractionDigits", "minFractionDigits", (value) => numberAttribute(value, void 0)],
      maxFractionDigits: [2, "maxFractionDigits", "maxFractionDigits", (value) => numberAttribute(value, void 0)],
      prefix: "prefix",
      suffix: "suffix",
      locale: "locale",
      localeMatcher: "localeMatcher",
      currency: "currency",
      currencyDisplay: "currencyDisplay",
      useGrouping: [2, "useGrouping", "useGrouping", booleanAttribute],
      ariaLabel: "ariaLabel",
      filterOn: "filterOn"
    },
    standalone: false,
    features: [ɵɵHostDirectivesFeature([Bind]), ɵɵInheritDefinitionFeature],
    decls: 3,
    vars: 2,
    consts: [["builtInElement", ""], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], ["type", "text", "pInputText", "", 3, "ariaLabel", "pt", "value", "input", "keydown.enter", 4, "ngSwitchCase"], [3, "ngModel", "showButtons", "minFractionDigits", "maxFractionDigits", "ariaLabel", "prefix", "suffix", "placeholder", "mode", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "pt", "ngModelChange", "onKeyDown", 4, "ngSwitchCase"], [3, "pt", "indeterminate", "binary", "ngModel", "ngModelChange", 4, "ngSwitchCase"], ["appendTo", "body", 3, "pt", "ariaLabel", "placeholder", "ngModel", "ngModelChange", 4, "ngSwitchCase"], ["type", "text", "pInputText", "", 3, "input", "keydown.enter", "ariaLabel", "pt", "value"], [3, "ngModelChange", "onKeyDown", "ngModel", "showButtons", "minFractionDigits", "maxFractionDigits", "ariaLabel", "prefix", "suffix", "placeholder", "mode", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "pt"], [3, "ngModelChange", "pt", "indeterminate", "binary", "ngModel"], ["appendTo", "body", 3, "ngModelChange", "pt", "ariaLabel", "placeholder", "ngModel"]],
    template: function ColumnFilterFormElement_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, ColumnFilterFormElement_ng_container_0_Template, 2, 19, "ng-container", 1)(1, ColumnFilterFormElement_ng_template_1_Template, 5, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        const builtInElement_r6 = ɵɵreference(2);
        ɵɵproperty("ngIf", ctx.filterTemplate)("ngIfElse", builtInElement_r6);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, InputText, NgControlStatus, NgModel, DatePicker, InputNumber, Checkbox],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColumnFilterFormElement, [{
    type: Component,
    args: [{
      selector: "p-columnFilterFormElement",
      standalone: false,
      template: `
        <ng-container *ngIf="filterTemplate; else builtInElement">
            <ng-container
                *ngTemplateOutlet="
                    filterTemplate;
                    context: {
                        $implicit: filterConstraint.value,
                        filterCallback: filterCallback,
                        type: type,
                        field: field,
                        filterConstraint: filterConstraint,
                        placeholder: placeholder,
                        minFractionDigits: minFractionDigits,
                        maxFractionDigits: maxFractionDigits,
                        prefix: prefix,
                        suffix: suffix,
                        locale: locale,
                        localeMatcher: localeMatcher,
                        currency: currency,
                        currencyDisplay: currencyDisplay,
                        useGrouping: useGrouping,
                        showButtons: showButtons
                    }
                "
            ></ng-container>
        </ng-container>
        <ng-template #builtInElement>
            <ng-container [ngSwitch]="type">
                <input
                    *ngSwitchCase="'text'"
                    type="text"
                    [ariaLabel]="ariaLabel"
                    pInputText
                    [pt]="ptm('pcFilterInputText')"
                    [value]="filterConstraint?.value"
                    (input)="onModelChange($event.target.value)"
                    (keydown.enter)="onTextInputEnterKeyDown($event)"
                    [attr.placeholder]="placeholder"
                />
                <p-inputNumber
                    *ngSwitchCase="'numeric'"
                    [ngModel]="filterConstraint?.value"
                    (ngModelChange)="onModelChange($event)"
                    (onKeyDown)="onNumericInputKeyDown($event)"
                    [showButtons]="showButtons"
                    [minFractionDigits]="minFractionDigits"
                    [maxFractionDigits]="maxFractionDigits"
                    [ariaLabel]="ariaLabel"
                    [prefix]="prefix"
                    [suffix]="suffix"
                    [placeholder]="placeholder"
                    [mode]="currency ? 'currency' : 'decimal'"
                    [locale]="locale"
                    [localeMatcher]="localeMatcher"
                    [currency]="currency"
                    [currencyDisplay]="currencyDisplay"
                    [useGrouping]="useGrouping"
                    [pt]="ptm('pcFilterInputNumber')"
                ></p-inputNumber>
                <p-checkbox [pt]="ptm('pcFilterCheckbox')" [indeterminate]="filterConstraint?.value === null" [binary]="true" *ngSwitchCase="'boolean'" [ngModel]="filterConstraint?.value" (ngModelChange)="onModelChange($event)" />

                <p-datepicker [pt]="ptm('pcFilterDatePicker')" [ariaLabel]="ariaLabel" *ngSwitchCase="'date'" [placeholder]="placeholder" [ngModel]="filterConstraint?.value" (ngModelChange)="onModelChange($event)" appendTo="body"></p-datepicker>
            </ng-container>
        </ng-template>
    `,
      encapsulation: ViewEncapsulation.None,
      hostDirectives: [Bind]
    }]
  }], () => [{
    type: Table
  }, {
    type: ColumnFilter
  }], {
    field: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    filterConstraint: [{
      type: Input
    }],
    filterTemplate: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    minFractionDigits: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, void 0)
      }]
    }],
    maxFractionDigits: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, void 0)
      }]
    }],
    prefix: [{
      type: Input
    }],
    suffix: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    localeMatcher: [{
      type: Input
    }],
    currency: [{
      type: Input
    }],
    currencyDisplay: [{
      type: Input
    }],
    useGrouping: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaLabel: [{
      type: Input
    }],
    filterOn: [{
      type: Input
    }]
  });
})();
var TableModule = class _TableModule {
  static ɵfac = function TableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TableModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TableModule,
    declarations: [Table, SortableColumn, FrozenColumn, RowGroupHeader, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, TableBody, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, ColumnFilter, ColumnFilterFormElement],
    imports: [CommonModule, PaginatorModule, InputTextModule, SelectModule, FormsModule, ButtonModule, SelectButtonModule, DatePickerModule, InputNumberModule, BadgeModule, CheckboxModule, ScrollerModule, ArrowDownIcon, ArrowUpIcon, SpinnerIcon, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon, FilterIcon, FilterFillIcon, FilterSlashIcon, PlusIcon, TrashIcon, RadioButtonModule, BindModule],
    exports: [Table, SharedModule, SortableColumn, FrozenColumn, RowGroupHeader, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, ColumnFilter, ColumnFilterFormElement, ScrollerModule]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [TableStyle],
    imports: [CommonModule, PaginatorModule, InputTextModule, SelectModule, FormsModule, ButtonModule, SelectButtonModule, DatePickerModule, InputNumberModule, BadgeModule, CheckboxModule, ScrollerModule, ArrowDownIcon, ArrowUpIcon, SpinnerIcon, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon, FilterIcon, FilterFillIcon, FilterSlashIcon, PlusIcon, TrashIcon, RadioButtonModule, BindModule, SharedModule, ScrollerModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PaginatorModule, InputTextModule, SelectModule, FormsModule, ButtonModule, SelectButtonModule, DatePickerModule, InputNumberModule, BadgeModule, CheckboxModule, ScrollerModule, ArrowDownIcon, ArrowUpIcon, SpinnerIcon, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon, FilterIcon, FilterFillIcon, FilterSlashIcon, PlusIcon, TrashIcon, RadioButtonModule, BindModule],
      exports: [Table, SharedModule, SortableColumn, FrozenColumn, RowGroupHeader, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, ColumnFilter, ColumnFilterFormElement, ScrollerModule],
      declarations: [Table, SortableColumn, FrozenColumn, RowGroupHeader, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, TableBody, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, ColumnFilter, ColumnFilterFormElement],
      providers: [TableStyle]
    }]
  }], null, null);
})();
export {
  CancelEditableRow,
  CellEditor,
  ColumnFilter,
  ColumnFilterFormElement,
  ContextMenuRow,
  EditableColumn,
  EditableRow,
  FrozenColumn,
  InitEditableRow,
  ReorderableColumn,
  ReorderableRow,
  ReorderableRowHandle,
  ResizableColumn,
  RowGroupHeader,
  RowToggler,
  SaveEditableRow,
  SelectableRow,
  SelectableRowDblClick,
  SortIcon,
  SortableColumn,
  Table,
  TableBody,
  TableCheckbox,
  TableClasses,
  TableHeaderCheckbox,
  TableModule,
  TableRadioButton,
  TableService,
  TableStyle
};
//# sourceMappingURL=primeng_table.js.map
