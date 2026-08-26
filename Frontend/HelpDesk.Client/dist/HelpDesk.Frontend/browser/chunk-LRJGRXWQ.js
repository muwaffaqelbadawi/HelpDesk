import{A as pn,B as hn,C as Me,D as fn,E as gn,F as mn,G as yt,H as Jt,I as te,J as ee,K as St,L as bn,M as yn,N as vn,O as _n,P as ne,Q as U,R as rt,S as vt,T as Et,U as F,V as Cn,a as Se,b as Yt,c as on,d as Kt,e as ot,f as Pt,g as Ee,j as rn,n as sn,o as an,s as ln,t as dn,v as Ve,w as xt,x as un,y as cn,z as Ie}from"./chunk-EA4D2AHR.js";import{$ as ve,$a as De,Ab as M,Ba as ft,Bb as Q,Ca as I,Db as S,Eb as xe,Ga as j,Ha as P,Hb as A,Ia as _,Ib as nn,Ka as m,La as X,Ma as O,N as Ut,Oa as Ke,P as Wt,Q as y,R as N,Sa as at,T as V,Ta as kt,Ua as Nt,V as l,Va as c,Wa as C,Xa as D,Ya as et,Za as _e,_ as qt,_a as Ce,a as u,aa as Qt,ab as gt,b as $,bb as mt,cb as lt,d as qe,db as Je,eb as Y,fa as R,fb as x,gb as dt,hb as K,ia as Tt,ib as H,j as Qe,ja as g,jb as G,kb as z,la as J,lb as tn,m as Ze,mb as Xt,nb as Dt,ob as v,pa as Zt,pb as T,qb as bt,r as zt,rb as wt,sb as E,ta as p,tb as en,ub as we,vb as nt,w as Xe,wb as it,xa as tt,ya as Ye,zb as ut}from"./chunk-WRXRUGP5.js";var An=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,n){this._renderer=t,this._elementRef=n}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(n){return new(n||e)(I(ft),I(J))};static \u0275dir=_({type:e})}return e})(),$i=(()=>{class e extends An{static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275dir=_({type:e,features:[m]})}return e})(),Fn=new V("");var Ri={provide:Fn,useExisting:Wt(()=>pe),multi:!0};function ji(){let e=Se()?Se().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var Hi=new V(""),pe=(()=>{class e extends An{_compositionMode;_composing=!1;constructor(t,n,o){super(t,n),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!ji())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(n){return new(n||e)(I(ft),I(J),I(Hi,8))};static \u0275dir=_({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){n&1&&Y("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[E([Ri]),m]})}return e})();function Ne(e){return e==null||Pe(e)===0}function Pe(e){return e==null?null:Array.isArray(e)||typeof e=="string"?e.length:e instanceof Set?e.size:null}var Tn=new V(""),kn=new V(""),Gi=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,_t=class{static min(i){return zi(i)}static max(i){return Ui(i)}static required(i){return Wi(i)}static requiredTrue(i){return qi(i)}static email(i){return Qi(i)}static minLength(i){return Zi(i)}static maxLength(i){return Xi(i)}static pattern(i){return Yi(i)}static nullValidator(i){return Nn()}static compose(i){return Rn(i)}static composeAsync(i){return Hn(i)}};function zi(e){return i=>{if(i.value==null||e==null)return null;let t=parseFloat(i.value);return!isNaN(t)&&t<e?{min:{min:e,actual:i.value}}:null}}function Ui(e){return i=>{if(i.value==null||e==null)return null;let t=parseFloat(i.value);return!isNaN(t)&&t>e?{max:{max:e,actual:i.value}}:null}}function Wi(e){return Ne(e.value)?{required:!0}:null}function qi(e){return e.value===!0?null:{required:!0}}function Qi(e){return Ne(e.value)||Gi.test(e.value)?null:{email:!0}}function Zi(e){return i=>{let t=i.value?.length??Pe(i.value);return t===null||t===0?null:t<e?{minlength:{requiredLength:e,actualLength:t}}:null}}function Xi(e){return i=>{let t=i.value?.length??Pe(i.value);return t!==null&&t>e?{maxlength:{requiredLength:e,actualLength:t}}:null}}function Yi(e){if(!e)return Nn;let i,t;return typeof e=="string"?(t="",e.charAt(0)!=="^"&&(t+="^"),t+=e,e.charAt(e.length-1)!=="$"&&(t+="$"),i=new RegExp(t)):(t=e.toString(),i=e),n=>{if(Ne(n.value))return null;let o=n.value;return i.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}function Nn(e){return null}function Pn(e){return e!=null}function On(e){return Ke(e)?Ze(e):e}function Bn(e){let i={};return e.forEach(t=>{i=t!=null?u(u({},i),t):i}),Object.keys(i).length===0?null:i}function Ln(e,i){return i.map(t=>t(e))}function Ki(e){return!e.validate}function $n(e){return e.map(i=>Ki(i)?i:t=>i.validate(t))}function Rn(e){if(!e)return null;let i=e.filter(Pn);return i.length==0?null:function(t){return Bn(Ln(t,i))}}function jn(e){return e!=null?Rn($n(e)):null}function Hn(e){if(!e)return null;let i=e.filter(Pn);return i.length==0?null:function(t){let n=Ln(t,i).map(On);return Xe(n).pipe(zt(Bn))}}function Gn(e){return e!=null?Hn($n(e)):null}function Dn(e,i){return e===null?[i]:Array.isArray(e)?[...e,i]:[e,i]}function zn(e){return e._rawValidators}function Un(e){return e._rawAsyncValidators}function Ae(e){return e?Array.isArray(e)?e:[e]:[]}function re(e,i){return Array.isArray(e)?e.includes(i):e===i}function wn(e,i){let t=Ae(i);return Ae(e).forEach(o=>{re(t,o)||t.push(o)}),t}function xn(e,i){return Ae(i).filter(t=>!re(e,t))}var se=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=jn(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Gn(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control&&this.control.reset(i)}hasError(i,t){return this.control?this.control.hasError(i,t):!1}getError(i,t){return this.control?this.control.getError(i,t):null}},Mt=class extends se{name;get formDirective(){return null}get path(){return null}},Ct=class extends se{_parent=null;name=null;valueAccessor=null},ae=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Ji={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Yr=$(u({},Ji),{"[class.ng-submitted]":"isSubmitted"}),Wn=(()=>{class e extends ae{constructor(t){super(t)}static \u0275fac=function(n){return new(n||e)(I(Ct,2))};static \u0275dir=_({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){n&2&&Xt("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[m]})}return e})(),qn=(()=>{class e extends ae{constructor(t){super(t)}static \u0275fac=function(n){return new(n||e)(I(Mt,10))};static \u0275dir=_({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,o){n&2&&Xt("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[m]})}return e})();var Ot="VALID",ie="INVALID",Vt="PENDING",Bt="DISABLED",ct=class{},le=class extends ct{value;source;constructor(i,t){super(),this.value=i,this.source=t}},Lt=class extends ct{pristine;source;constructor(i,t){super(),this.pristine=i,this.source=t}},$t=class extends ct{touched;source;constructor(i,t){super(),this.touched=i,this.source=t}},It=class extends ct{status;source;constructor(i,t){super(),this.status=i,this.source=t}},Fe=class extends ct{source;constructor(i){super(),this.source=i}},Rt=class extends ct{source;constructor(i){super(),this.source=i}};function Oe(e){return(he(e)?e.validators:e)||null}function to(e){return Array.isArray(e)?jn(e):e||null}function Be(e,i){return(he(i)?i.asyncValidators:e)||null}function eo(e){return Array.isArray(e)?Gn(e):e||null}function he(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function Qn(e,i,t){let n=e.controls;if(!(i?Object.keys(n):n).length)throw new Ut(1e3,"");if(!n[t])throw new Ut(1001,"")}function Zn(e,i,t){e._forEachChild((n,o)=>{if(t[o]===void 0)throw new Ut(1002,"")})}var At=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,t){this._assignValidators(i),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return ut(this.statusReactive)}set status(i){ut(()=>this.statusReactive.set(i))}_status=M(()=>this.statusReactive());statusReactive=R(void 0);get valid(){return this.status===Ot}get invalid(){return this.status===ie}get pending(){return this.status==Vt}get disabled(){return this.status===Bt}get enabled(){return this.status!==Bt}errors;get pristine(){return ut(this.pristineReactive)}set pristine(i){ut(()=>this.pristineReactive.set(i))}_pristine=M(()=>this.pristineReactive());pristineReactive=R(!0);get dirty(){return!this.pristine}get touched(){return ut(this.touchedReactive)}set touched(i){ut(()=>this.touchedReactive.set(i))}_touched=M(()=>this.touchedReactive());touchedReactive=R(!1);get untouched(){return!this.touched}_events=new Qe;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(wn(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(wn(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(xn(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(xn(i,this._rawAsyncValidators))}hasValidator(i){return re(this._rawValidators,i)}hasAsyncValidator(i){return re(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let t=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsTouched($(u({},i),{sourceControl:n})),t&&i.emitEvent!==!1&&this._events.next(new $t(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(i))}markAsUntouched(i={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,n),t&&i.emitEvent!==!1&&this._events.next(new $t(!1,n))}markAsDirty(i={}){let t=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsDirty($(u({},i),{sourceControl:n})),t&&i.emitEvent!==!1&&this._events.next(new Lt(!1,n))}markAsPristine(i={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),this._parent&&!i.onlySelf&&this._parent._updatePristine(i,n),t&&i.emitEvent!==!1&&this._events.next(new Lt(!0,n))}markAsPending(i={}){this.status=Vt;let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new It(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.markAsPending($(u({},i),{sourceControl:t}))}disable(i={}){let t=this._parentMarkedDirty(i.onlySelf);this.status=Bt,this.errors=null,this._forEachChild(o=>{o.disable($(u({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new le(this.value,n)),this._events.next(new It(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors($(u({},i),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(i={}){let t=this._parentMarkedDirty(i.onlySelf);this.status=Ot,this._forEachChild(n=>{n.enable($(u({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors($(u({},i),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,t){this._parent&&!i.onlySelf&&(this._parent.updateValueAndValidity(i),i.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ot||this.status===Vt)&&this._runAsyncValidator(n,i.emitEvent)}let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new le(this.value,t)),this._events.next(new It(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.updateValueAndValidity($(u({},i),{sourceControl:t}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Bt:Ot}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,t){if(this.asyncValidator){this.status=Vt,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:i!==!1};let n=On(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:t,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,t={}){this.errors=i,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(i){let t=i;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,o)=>n&&n._find(o),this)}getError(i,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[i]:null}hasError(i,t){return!!this.getError(i,t)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,t,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new It(this.status,t)),this._parent&&this._parent._updateControlsErrors(i,t,n)}_initObservables(){this.valueChanges=new tt,this.statusChanges=new tt}_calculateStatus(){return this._allControlsDisabled()?Bt:this.errors?ie:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Vt)?Vt:this._anyControlsHaveStatus(ie)?ie:Ot}_anyControlsHaveStatus(i){return this._anyControls(t=>t.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,t){let n=!this._anyControlsDirty(),o=this.pristine!==n;this.pristine=n,this._parent&&!i.onlySelf&&this._parent._updatePristine(i,t),o&&this._events.next(new Lt(this.pristine,t))}_updateTouched(i={},t){this.touched=this._anyControlsTouched(),this._events.next(new $t(this.touched,t)),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,t)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){he(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){let t=this._parent&&this._parent.dirty;return!i&&!!t&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=to(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=eo(this._rawAsyncValidators)}},de=class extends At{constructor(i,t,n){super(Oe(t),Be(n,t)),this.controls=i,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,t){return this.controls[i]?this.controls[i]:(this.controls[i]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(i,t,n={}){this.registerControl(i,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,t={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(i,t,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],t&&this.registerControl(i,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,t={}){Zn(this,!0,i),Object.keys(i).forEach(n=>{Qn(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(i,t={}){i!=null&&(Object.keys(i).forEach(n=>{let o=this.controls[n];o&&o.patchValue(i[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(i={},t={}){this._forEachChild((n,o)=>{n.reset(i?i[o]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new Rt(this))}getRawValue(){return this._reduceChildren({},(i,t,n)=>(i[n]=t.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&i(n,t)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(t,n,o)=>((n.enabled||this.disabled)&&(t[o]=n.value),t))}_reduceChildren(i,t){let n=i;return this._forEachChild((o,r)=>{n=t(n,o,r)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var Te=class extends de{};var Xn=new V("",{providedIn:"root",factory:()=>Le}),Le="always";function no(e,i){return[...i.path,e]}function Sn(e,i,t=Le){$e(e,i),i.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&i.valueAccessor.setDisabledState?.(e.disabled),oo(e,i),so(e,i),ro(e,i),io(e,i)}function En(e,i,t=!0){let n=()=>{};i.valueAccessor&&(i.valueAccessor.registerOnChange(n),i.valueAccessor.registerOnTouched(n)),ce(e,i),e&&(i._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function ue(e,i){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(i)})}function io(e,i){if(i.valueAccessor.setDisabledState){let t=n=>{i.valueAccessor.setDisabledState(n)};e.registerOnDisabledChange(t),i._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function $e(e,i){let t=zn(e);i.validator!==null?e.setValidators(Dn(t,i.validator)):typeof t=="function"&&e.setValidators([t]);let n=Un(e);i.asyncValidator!==null?e.setAsyncValidators(Dn(n,i.asyncValidator)):typeof n=="function"&&e.setAsyncValidators([n]);let o=()=>e.updateValueAndValidity();ue(i._rawValidators,o),ue(i._rawAsyncValidators,o)}function ce(e,i){let t=!1;if(e!==null){if(i.validator!==null){let o=zn(e);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==i.validator);r.length!==o.length&&(t=!0,e.setValidators(r))}}if(i.asyncValidator!==null){let o=Un(e);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==i.asyncValidator);r.length!==o.length&&(t=!0,e.setAsyncValidators(r))}}}let n=()=>{};return ue(i._rawValidators,n),ue(i._rawAsyncValidators,n),t}function oo(e,i){i.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&Yn(e,i)})}function ro(e,i){i.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&Yn(e,i),e.updateOn!=="submit"&&e.markAsTouched()})}function Yn(e,i){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function so(e,i){let t=(n,o)=>{i.valueAccessor.writeValue(n),o&&i.viewToModelUpdate(n)};e.registerOnChange(t),i._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function ao(e,i){e==null,$e(e,i)}function lo(e,i){return ce(e,i)}function uo(e,i){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(i,t.currentValue)}function co(e){return Object.getPrototypeOf(e.constructor)===$i}function po(e,i){e._syncPendingControls(),i.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function ho(e,i){if(!i)return null;Array.isArray(i);let t,n,o;return i.forEach(r=>{r.constructor===pe?t=r:co(r)?n=r:o=r}),o||n||t||null}function fo(e,i){let t=e.indexOf(i);t>-1&&e.splice(t,1)}function Vn(e,i){let t=e.indexOf(i);t>-1&&e.splice(t,1)}function In(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var oe=class extends At{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,t,n){super(Oe(t),Be(n,t)),this._applyFormState(i),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),he(t)&&(t.nonNullable||t.initialValueIsDefault)&&(In(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,t={}){this.value=this._pendingValue=i,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(i,t={}){this.setValue(i,t)}reset(i=this.defaultValue,t={}){this._applyFormState(i),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new Rt(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){Vn(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){Vn(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){In(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var go=e=>e instanceof oe;var Kn=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275dir=_({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return e})();var Jn=new V("");var mo={provide:Mt,useExisting:Wt(()=>Re)},Re=(()=>{class e extends Mt{callSetDisabledState;get submitted(){return ut(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=M(()=>this._submittedReactive());_submittedReactive=R(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new tt;constructor(t,n,o){super(),this.callSetDisabledState=o,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(ce(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return Sn(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){En(t.control||null,t,!1),fo(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this._submittedReactive.set(!0),po(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new Fe(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0,n={}){this.form.reset(t,n),this._submittedReactive.set(!1)}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,o=this.form.get(t.path);n!==o&&(En(n||null,t),go(o)&&(Sn(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);ao(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&lo(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){$e(this.form,this),this._oldForm&&ce(this._oldForm,this)}static \u0275fac=function(n){return new(n||e)(I(Tn,10),I(kn,10),I(Xn,8))};static \u0275dir=_({type:e,selectors:[["","formGroup",""]],hostBindings:function(n,o){n&1&&Y("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[E([mo]),m,Tt]})}return e})();var bo={provide:Ct,useExisting:Wt(()=>je)},je=(()=>{class e extends Ct{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new tt;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,n,o,r,s){super(),this._ngModelWarningConfig=s,this._parent=t,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=ho(this,r)}ngOnChanges(t){this._added||this._setUpControl(),uo(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return no(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||e)(I(Mt,13),I(Tn,10),I(kn,10),I(Fn,10),I(Jn,8))};static \u0275dir=_({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[E([bo]),m,Tt]})}return e})();var yo=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=P({type:e});static \u0275inj=N({})}return e})(),ke=class extends At{constructor(i,t,n){super(Oe(t),Be(n,t)),this.controls=i,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,t={}){Array.isArray(i)?i.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(i,t,n={}){this.controls.splice(i,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(i,t={}){let n=this._adjustIndex(i);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(i,t,n={}){let o=this._adjustIndex(i);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),t&&(this.controls.splice(o,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,t={}){Zn(this,!1,i),i.forEach((n,o)=>{Qn(this,!1,o),this.at(o).setValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(i,t={}){i!=null&&(i.forEach((n,o)=>{this.at(o)&&this.at(o).patchValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(i=[],t={}){this._forEachChild((n,o)=>{n.reset(i[o],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new Rt(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((t,n)=>n._syncPendingControls()?!0:t,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((t,n)=>{i(t,n)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(t=>t.enabled&&i(t))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};function Mn(e){return!!e&&(e.asyncValidators!==void 0||e.validators!==void 0||e.updateOn!==void 0)}var ti=(()=>{class e{useNonNullable=!1;get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,n=null){let o=this._reduceControls(t),r={};return Mn(n)?r=n:n!==null&&(r.validators=n.validator,r.asyncValidators=n.asyncValidator),new de(o,r)}record(t,n=null){let o=this._reduceControls(t);return new Te(o,n)}control(t,n,o){let r={};return this.useNonNullable?(Mn(n)?r=n:(r.validators=n,r.asyncValidators=o),new oe(t,$(u({},r),{nonNullable:!0}))):new oe(t,n,o)}array(t,n,o){let r=t.map(s=>this._createControl(s));return new ke(r,n,o)}_reduceControls(t){let n={};return Object.keys(t).forEach(o=>{n[o]=this._createControl(t[o])}),n}_createControl(t){if(t instanceof oe)return t;if(t instanceof At)return t;if(Array.isArray(t)){let n=t[0],o=t.length>1?t[1]:null,r=t.length>2?t[2]:null;return this.control(n,o,r)}else return this.control(t)}static \u0275fac=function(n){return new(n||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ei=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:Jn,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Xn,useValue:t.callSetDisabledState??Le}]}}static \u0275fac=function(n){return new(n||e)};static \u0275mod=P({type:e});static \u0275inj=N({imports:[yo]})}return e})();function pt(...e){if(e){let i=[];for(let t=0;t<e.length;t++){let n=e[t];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")i.push(n);else if(o==="object"){let r=Array.isArray(n)?[pt(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}var _o=Object.defineProperty,ni=Object.getOwnPropertySymbols,Co=Object.prototype.hasOwnProperty,Do=Object.prototype.propertyIsEnumerable,ii=(e,i,t)=>i in e?_o(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,oi=(e,i)=>{for(var t in i||(i={}))Co.call(i,t)&&ii(e,t,i[t]);if(ni)for(var t of ni(i))Do.call(i,t)&&ii(e,t,i[t]);return e};function ri(...e){if(e){let i=[];for(let t=0;t<e.length;t++){let n=e[t];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")i.push(n);else if(o==="object"){let r=Array.isArray(n)?[ri(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}function wo(e){return typeof e=="function"&&"call"in e&&"apply"in e}function xo({skipUndefined:e=!1},...i){return i?.reduce((t,n={})=>{for(let o in n){let r=n[o];if(!(e&&r===void 0))if(o==="style")t.style=oi(oi({},t.style),n.style);else if(o==="class"||o==="className")t[o]=ri(t[o],n[o]);else if(wo(r)){let s=t[o];t[o]=s?(...a)=>{s(...a),r(...a)}:r}else t[o]=r}return t},{})}function He(...e){return xo({skipUndefined:!1},...e)}var fe={};function jt(e="pui_id_"){return Object.hasOwn(fe,e)||(fe[e]=0),fe[e]++,`${e}${fe[e]}`}var si=(()=>{class e extends F{name="common";static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Z=new V("PARENT_INSTANCE"),L=(()=>{class e{document=l(Qt);platformId=l(Zt);el=l(J);injector=l(ve);cd=l(xe);renderer=l(ft);config=l(Cn);$parentInstance=l(Z,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=l(si);baseStyle=l(F);scopedStyleEl;parent=this.$params.parent;cn=pt;_themeScopedListener;dt=S();unstyled=S();pt=S();ptOptions=S();$attrSelector=jt("pc");get $name(){return this.componentName||this.constructor?.name?.replace(/^_/,"")||"UnknownComponent"}get $hostName(){return this.hostName}$unstyled=M(()=>this.unstyled()!==void 0?this.unstyled():this.config?.unstyled()||!1);$pt=M(()=>te(this.pt()||this.directivePT(),this.$params));directivePT=R(void 0);get $globalPT(){return this._getPT(this.config?.pt(),void 0,t=>te(t,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,t=>this._getOptionValue(t,this.$hostName||this.$name,this.$params)||te(t,this.$params))}get $style(){return u(u({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let t=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:t}}}onInit(){}onChanges(t){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){Q(t=>{this.document&&!Ee(this.platformId)&&(rt.off("theme:change",this._themeScopedListener),this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener(this._themeScopedListener)):this._unloadScopedThemeStyles()),t(()=>{rt.off("theme:change",this._themeScopedListener)})}),Q(t=>{this.document&&!Ee(this.platformId)&&(rt.off("theme:change",this._loadCoreStyles),this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener(this._loadCoreStyles))),t(()=>{rt.off("theme:change",this._loadCoreStyles)})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(t){this.onChanges(t),this._hook("onChanges",t)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.el?.nativeElement?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(t,...n){return mn(t)?t(...n):He(...n)}_getHostInstance(t){return t?this.$hostName?this.$name===this.$hostName?t:this._getHostInstance(t.$parentInstance):t.$parentInstance:void 0}_getPropValue(t){return this[t]||this._getHostInstance(this)?.[t]}_getOptionValue(t,n="",o={}){return bn(t,n,o)}_hook(t,...n){if(!this.$hostName){let o=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${t}`),r=this._useDefaultPT(this._getOptionValue,`hooks.${t}`);o?.(...n),r?.(...n)}}_load(){Et.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),Et.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener(()=>this._load())}_loadGlobalStyles(){let t=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);yt(t)&&this.baseStyle.load(t,u({name:"global"},this.$styleOptions))}_loadCoreStyles(){!Et.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),Et.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!vt.isStyleNameLoaded("common")){let{primitive:t,semantic:n,global:o,style:r}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,u({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(n?.css,u({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(o?.css,u({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(u({name:"global-style"},this.$styleOptions),r),vt.setLoadedStyleName("common")}if(!vt.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:t,style:n}=this.$style?.getComponentTheme?.()||{};this.$style?.load(t,u({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(u({name:`${this.$style?.name}-style`},this.$styleOptions),n),vt.setLoadedStyleName(this.$style?.name)}if(!vt.isStyleNameLoaded("layer-order")){let t=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,u({name:"layer-order",first:!0},this.$styleOptions)),vt.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(t){let{css:n}=this.$style?.getPresetTheme?.(t,`[${this.$attrSelector}]`)||{},o=this.$style?.load(n,u({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){Et.clearLoadedStyleNames(),rt.on("theme:change",t.bind(this))}_removeThemeListeners(){rt.off("theme:change",this._loadCoreStyles),rt.off("theme:change",this._load),rt.off("theme:change",this._themeScopedListener)}_getPTValue(t={},n="",o={},r=!0){let s=/./g.test(n)&&!!o[n.split(".")[0]],{mergeSections:a=!0,mergeProps:d=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},f=r?s?this._useGlobalPT(this._getPTClassValue,n,o):this._useDefaultPT(this._getPTClassValue,n,o):void 0,h=s?void 0:this._usePT(this._getPT(t,this.$hostName||this.$name),this._getPTClassValue,n,$(u({},o),{global:f||{}})),b=this._getPTDatasets(n);return a||!a&&h?d?this._mergeProps(d,f,h,b):u(u(u({},f),h),b):u(u({},h),b)}_getPTDatasets(t=""){let n="data-pc-",o=t==="root"&&yt(this.$pt()?.["data-pc-section"]);return t!=="transition"&&$(u({},t==="root"&&$(u({[`${n}name`]:St(o?this.$pt()?.["data-pc-section"]:this.$name)},o&&{[`${n}extend`]:St(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${n}section`]:St(t.includes(".")?t.split(".").at(-1)??"":t)})}_getPTClassValue(t,n,o){let r=this._getOptionValue(t,n,o);return ee(r)||yn(r)?{class:r}:r}_getPT(t,n="",o){let r=(s,a=!1)=>{let d=o?o(s):s,f=St(n),h=St(this.$hostName||this.$name);return(a?f!==h?d?.[f]:void 0:d?.[f])??d};return t?.hasOwnProperty("_usept")?{_usept:t._usept,originalValue:r(t.originalValue),value:r(t.value)}:r(t,!0)}_usePT(t,n,o,r){let s=a=>n?.call(this,a,o,r);if(t?.hasOwnProperty("_usept")){let{mergeSections:a=!0,mergeProps:d=!1}=t._usept||this.config?.ptOptions()||{},f=s(t.originalValue),h=s(t.value);return f===void 0&&h===void 0?void 0:ee(h)?h:ee(f)?f:a||!a&&h?d?this._mergeProps(d,f,h):u(u({},f),h):h}return s(t)}_useGlobalPT(t,n,o){return this._usePT(this.$globalPT,t,n,o)}_useDefaultPT(t,n,o){return this._usePT(this.$defaultPT,t,n,o)}ptm(t="",n={}){return this._getPTValue(this.$pt(),t,u(u({},this.$params),n))}ptms(t,n={}){return t.reduce((o,r)=>(o=He(o,this.ptm(r,n))||{},o),{})}ptmo(t={},n="",o={}){return this._getPTValue(t,n,u({instance:this},o),!1)}cx(t,n={}){return this.$unstyled()?void 0:pt(this._getOptionValue(this.$style.classes,t,u(u({},this.$params),n)))}sx(t="",n=!0,o={}){if(n){let r=this._getOptionValue(this.$style.inlineStyles,t,u(u({},this.$params),o)),s=this._getOptionValue(this.baseComponentStyle.inlineStyles,t,u(u({},this.$params),o));return u(u({},s),r)}}static \u0275fac=function(n){return new(n||e)};static \u0275dir=_({type:e,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[E([si,F]),Tt]})}return e})();var w=(()=>{class e{el;renderer;pBind=S(void 0);_attrs=R(void 0);attrs=M(()=>this._attrs()||this.pBind());styles=M(()=>this.attrs()?.style);classes=M(()=>pt(this.attrs()?.class));listeners=[];constructor(t,n){this.el=t,this.renderer=n,Q(()=>{let a=this.attrs()||{},{style:o,class:r}=a,s=qe(a,["style","class"]);for(let[d,f]of Object.entries(s))if(d.startsWith("on")&&typeof f=="function"){let h=d.slice(2).toLowerCase();if(!this.listeners.some(b=>b.eventName===h)){let b=this.renderer.listen(this.el.nativeElement,h,f);this.listeners.push({eventName:h,unlisten:b})}}else f==null?this.renderer.removeAttribute(this.el.nativeElement,d):(this.renderer.setAttribute(this.el.nativeElement,d,f.toString()),d in this.el.nativeElement&&(this.el.nativeElement[d]=f))})}ngOnDestroy(){this.clearListeners()}setAttrs(t){Jt(this._attrs(),t)||this._attrs.set(t)}clearListeners(){this.listeners.forEach(({unlisten:t})=>t()),this.listeners=[]}static \u0275fac=function(n){return new(n||e)(I(J),I(ft))};static \u0275dir=_({type:e,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(n,o){n&2&&(Dt(o.styles()),v(o.classes()))},inputs:{pBind:[1,"pBind"]}})}return e})(),Ft=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=P({type:e});static \u0275inj=N({})}return e})();var ai=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var Eo=["header"],Vo=["title"],Io=["subtitle"],Mo=["content"],Ao=["footer"],Fo=["*",[["p-header"]],[["p-footer"]]],To=["*","p-header","p-footer"];function ko(e,i){e&1&&lt(0)}function No(e,i){if(e&1&&(C(0,"div",1),K(1,1),O(2,ko,1,0,"ng-container",2),D()),e&2){let t=x();v(t.cx("header")),c("pBind",t.ptm("header")),p(2),c("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function Po(e,i){if(e&1&&(gt(0),T(1),mt()),e&2){let t=x(2);p(),bt(t.header)}}function Oo(e,i){e&1&&lt(0)}function Bo(e,i){if(e&1&&(C(0,"div",1),O(1,Po,2,1,"ng-container",3)(2,Oo,1,0,"ng-container",2),D()),e&2){let t=x();v(t.cx("title")),c("pBind",t.ptm("title")),p(),c("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),p(),c("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function Lo(e,i){if(e&1&&(gt(0),T(1),mt()),e&2){let t=x(2);p(),bt(t.subheader)}}function $o(e,i){e&1&&lt(0)}function Ro(e,i){if(e&1&&(C(0,"div",1),O(1,Lo,2,1,"ng-container",3)(2,$o,1,0,"ng-container",2),D()),e&2){let t=x();v(t.cx("subtitle")),c("pBind",t.ptm("subtitle")),p(),c("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),p(),c("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function jo(e,i){e&1&&lt(0)}function Ho(e,i){e&1&&lt(0)}function Go(e,i){if(e&1&&(C(0,"div",1),K(1,2),O(2,Ho,1,0,"ng-container",2),D()),e&2){let t=x();v(t.cx("footer")),c("pBind",t.ptm("footer")),p(2),c("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var zo=`
    ${ai}

    .p-card {
        display: block;
    }
`,Uo={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},li=(()=>{class e extends F{name="card";style=zo;classes=Uo;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var di=new V("CARD_INSTANCE"),Ge=(()=>{class e extends L{$pcCard=l(di,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=l(w,{self:!0});_componentStyle=l(li);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}header;subheader;set style(t){Jt(this._style(),t)||(this._style.set(t),this.el?.nativeElement&&t&&Object.keys(t).forEach(n=>{this.el.nativeElement.style[n]=t[n]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=R(null);getBlockableElement(){return this.el.nativeElement.children[0]}templates;onAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=j({type:e,selectors:[["p-card"]],contentQueries:function(n,o,r){if(n&1&&(H(r,vn,5),H(r,_n,5),H(r,Eo,4),H(r,Vo,4),H(r,Io,4),H(r,Mo,4),H(r,Ao,4),H(r,ne,4)),n&2){let s;G(s=z())&&(o.headerFacet=s.first),G(s=z())&&(o.footerFacet=s.first),G(s=z())&&(o.headerTemplate=s.first),G(s=z())&&(o.titleTemplate=s.first),G(s=z())&&(o.subtitleTemplate=s.first),G(s=z())&&(o.contentTemplate=s.first),G(s=z())&&(o.footerTemplate=s.first),G(s=z())&&(o.templates=s)}},hostVars:4,hostBindings:function(n,o){n&2&&(Dt(o._style()),v(o.cn(o.cx("root"),o.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[E([li,{provide:di,useExisting:e},{provide:Z,useExisting:e}]),X([w]),m],ngContentSelectors:To,decls:8,vars:11,consts:[[3,"pBind","class",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(n,o){n&1&&(dt(Fo),O(0,No,3,4,"div",0),C(1,"div",1),O(2,Bo,3,5,"div",0)(3,Ro,3,5,"div",0),C(4,"div",1),K(5),O(6,jo,1,0,"ng-container",2),D(),O(7,Go,3,4,"div",0),D()),n&2&&(c("ngIf",o.headerFacet||o.headerTemplate||o._headerTemplate),p(),v(o.cx("body")),c("pBind",o.ptm("body")),p(),c("ngIf",o.header||o.titleTemplate||o._titleTemplate),p(),c("ngIf",o.subheader||o.subtitleTemplate||o._subtitleTemplate),p(),v(o.cx("content")),c("pBind",o.ptm("content")),p(2),c("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),p(),c("ngIf",o.footerFacet||o.footerTemplate||o._footerTemplate))},dependencies:[ot,Yt,Kt,U,Ft,w],encapsulation:2,changeDetection:0})}return e})(),ui=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=P({type:e});static \u0275inj=N({imports:[Ge,U,Ft,U,Ft]})}return e})();var ci=(()=>{class e extends L{modelValue=R(void 0);$filled=M(()=>yt(this.modelValue()));writeModelValue(t){this.modelValue.set(t)}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275dir=_({type:e,features:[m]})}return e})();var qo=["*"],Qo={root:"p-fluid"},pi=(()=>{class e extends F{name="fluid";classes=Qo;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var hi=new V("FLUID_INSTANCE"),ge=(()=>{class e extends L{$pcFluid=l(hi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=l(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=l(pi);static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=j({type:e,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,o){n&2&&v(o.cx("root"))},features:[E([pi,{provide:hi,useExisting:e},{provide:Z,useExisting:e}]),X([w]),m],ngContentSelectors:qo,decls:1,vars:0,template:function(n,o){n&1&&(dt(),K(0))},dependencies:[ot],encapsulation:2,changeDetection:0})}return e})();var fi=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var Zo=`
    ${fi}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,Xo={root:({instance:e})=>["p-inputtext p-component",{"p-filled":e.$filled(),"p-inputtext-sm":e.pSize==="small","p-inputtext-lg":e.pSize==="large","p-invalid":e.invalid(),"p-variant-filled":e.$variant()==="filled","p-inputtext-fluid":e.hasFluid}]},gi=(()=>{class e extends F{name="inputtext";style=Zo;classes=Xo;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var mi=new V("INPUTTEXT_INSTANCE"),bi=(()=>{class e extends ci{hostName="";ptInputText=S();bindDirectiveInstance=l(w,{self:!0});$pcInputText=l(mi,{optional:!0,skipSelf:!0})??void 0;ngControl=l(Ct,{optional:!0,self:!0});pcFluid=l(ge,{optional:!0,host:!0,skipSelf:!0});pSize;variant=S();fluid=S(void 0,{transform:A});invalid=S(void 0,{transform:A});$variant=M(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=l(gi);constructor(){super(),Q(()=>{this.ptInputText()&&this.directivePT.set(this.ptInputText())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=function(n){return new(n||e)};static \u0275dir=_({type:e,selectors:[["","pInputText",""]],hostVars:2,hostBindings:function(n,o){n&1&&Y("input",function(s){return o.onInput(s)}),n&2&&v(o.cx("root"))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[E([gi,{provide:mi,useExisting:e},{provide:Z,useExisting:e}]),X([w]),m]})}return e})(),yi=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=P({type:e});static \u0275inj=N({})}return e})();var vi=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,n){t&&n&&(t.classList?t.classList.add(n):t.className+=" "+n)}static addMultipleClasses(t,n){if(t&&n)if(t.classList){let o=n.trim().split(" ");for(let r=0;r<o.length;r++)t.classList.add(o[r])}else{let o=n.split(" ");for(let r=0;r<o.length;r++)t.className+=" "+o[r]}}static removeClass(t,n){t&&n&&(t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,n){t&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,n){return t&&n?t.classList?t.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(n){return n!==t})}static find(t,n){return Array.from(t.querySelectorAll(n))}static findSingle(t,n){return this.isElement(t)?t.querySelector(n):null}static index(t){let n=t.parentNode.childNodes,o=0;for(var r=0;r<n.length;r++){if(n[r]==t)return o;n[r].nodeType==1&&o++}return-1}static indexWithinGroup(t,n){let o=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==t)return r;o[s].attributes&&o[s].attributes[n]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(t,n,o="self"){o!=="self"&&t&&n&&this.appendChild(t,n)}static alignOverlay(t,n,o="self",r=!0){t&&n&&(r&&(t.style.minWidth=`${e.getOuterWidth(n)}px`),o==="self"?this.relativePosition(t,n):this.absolutePosition(t,n))}static relativePosition(t,n,o=!0){let r=ht=>{if(ht)return getComputedStyle(ht).getPropertyValue("position")==="relative"?ht:r(ht.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=n.offsetHeight,d=n.getBoundingClientRect(),f=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),b=this.getViewport(),k=r(t)?.getBoundingClientRect()||{top:-1*f,left:-1*h},q,st,Gt="top";d.top+a+s.height>b.height?(q=d.top-k.top-s.height,Gt="bottom",d.top+q<0&&(q=-1*d.top)):(q=a+d.top-k.top,Gt="top");let We=d.left+s.width-b.width,Li=d.left-k.left;if(s.width>b.width?st=(d.left-k.left)*-1:We>0?st=Li-We:st=d.left-k.left,t.style.top=q+"px",t.style.left=st+"px",t.style.transformOrigin=Gt,o){let ht=un(/-anchor-gutter$/)?.value;t.style.marginTop=Gt==="bottom"?`calc(${ht??"2px"} * -1)`:ht??""}}static absolutePosition(t,n,o=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,a=r.width,d=n.offsetHeight,f=n.offsetWidth,h=n.getBoundingClientRect(),b=this.getWindowScrollTop(),W=this.getWindowScrollLeft(),k=this.getViewport(),q,st;h.top+d+s>k.height?(q=h.top+b-s,t.style.transformOrigin="bottom",q<0&&(q=b)):(q=d+h.top+b,t.style.transformOrigin="top"),h.left+a>k.width?st=Math.max(0,h.left+W+f-a):st=h.left+W,t.style.top=q+"px",t.style.left=st+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,n=[]){return t.parentNode===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))}static getScrollableParents(t){let n=[];if(t){let o=this.getParents(t),r=/(auto|scroll)/,s=a=>{let d=window.getComputedStyle(a,null);return r.test(d.getPropertyValue("overflow"))||r.test(d.getPropertyValue("overflowX"))||r.test(d.getPropertyValue("overflowY"))};for(let a of o){let d=a.nodeType===1&&a.dataset.scrollselectors;if(d){let f=d.split(",");for(let h of f){let b=this.findSingle(a,h);b&&s(b)&&n.push(b)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",n}static getHiddenElementDimensions(t){let n={};return t.style.visibility="hidden",t.style.display="block",n.width=t.offsetWidth,n.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",n}static scrollInView(t,n){let o=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,d=t.getBoundingClientRect(),h=n.getBoundingClientRect().top+document.body.scrollTop-(d.top+document.body.scrollTop)-r-a,b=t.scrollTop,W=t.clientHeight,k=this.getOuterHeight(n);h<0?t.scrollTop=b+h:h+k>W&&(t.scrollTop=b+h-W+k)}static fadeIn(t,n){t.style.opacity=0;let o=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,t.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(t,n){var o=1,r=50,s=n,a=r/s;let d=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(d)),t.style.opacity=o},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,n){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,n)}static getOuterWidth(t,n){let o=t.offsetWidth;if(n){let r=getComputedStyle(t);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(t){let n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(t){let n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(t,n){let o=t.offsetHeight;if(n){let r=getComputedStyle(t);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(t){let n=t.offsetHeight,o=getComputedStyle(t);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(t){let n=t.offsetWidth,o=getComputedStyle(t);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let t=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0],s=t.innerWidth||o.clientWidth||r.clientWidth,a=t.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,n){let o=t.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,n=t.indexOf("MSIE ");if(n>0)return!0;var o=t.indexOf("Trident/");if(o>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,n){if(this.isElement(n))n.appendChild(t);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t}static removeChild(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode?.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let n=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(t,n,o){t[n].apply(t,o)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,n){t&&document.activeElement!==t&&t.focus(n)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,n=""){let o=this.find(t,this.getFocusableSelectorString(n)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,n=""){let o=this.findSingle(t,this.getFocusableSelectorString(n));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(t,n=""){let o=this.getFocusableElements(t,n);return o.length>0?o[0]:null}static getLastFocusableElement(t,n){let o=this.getFocusableElements(t,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(t,n=!1){let o=e.getFocusableElements(t),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);n?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,n){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement?.parentElement;default:let o=typeof t;if(o==="string")return document.querySelector(t);if(o==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,n){if(t){let o=t.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,n={},...o){if(t){let r=document.createElement(t);return this.setAttributes(r,n),r.append(...o),r}}static setAttribute(t,n="",o){this.isElement(t)&&o!==null&&o!==void 0&&t.setAttribute(n,o)}static setAttributes(t,n={}){if(this.isElement(t)){let o=(r,s)=>{let a=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((d,f)=>{if(f!=null){let h=typeof f;if(h==="string"||h==="number")d.push(f);else if(h==="object"){let b=Array.isArray(f)?o(r,f):Object.entries(f).map(([W,k])=>r==="style"&&(k||k===0)?`${W.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${k}`:k?W:void 0);d=b.length?d.concat(b.filter(W=>!!W)):d}}return d},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,n=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return e})();var _i=(()=>{class e extends L{autofocus=!1;focused=!1;platformId=l(Zt);document=l(Qt);host=l(J);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Pt(this.platformId)&&this.autofocus&&setTimeout(()=>{let t=vi.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275dir=_({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[m]})}return e})();var Ci=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Ko=`
    ${Ci}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,Jo={root:({instance:e})=>{let i=typeof e.value=="function"?e.value():e.value,t=typeof e.size=="function"?e.size():e.size,n=typeof e.badgeSize=="function"?e.badgeSize():e.badgeSize,o=typeof e.severity=="function"?e.severity():e.severity;return["p-badge p-component",{"p-badge-circle":yt(i)&&String(i).length===1,"p-badge-dot":gn(i),"p-badge-sm":t==="small"||n==="small","p-badge-lg":t==="large"||n==="large","p-badge-xl":t==="xlarge"||n==="xlarge","p-badge-info":o==="info","p-badge-success":o==="success","p-badge-warn":o==="warn","p-badge-danger":o==="danger","p-badge-secondary":o==="secondary","p-badge-contrast":o==="contrast"}]}},Di=(()=>{class e extends F{name="badge";style=Ko;classes=Jo;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var wi=new V("BADGE_INSTANCE");var ze=(()=>{class e extends L{$pcBadge=l(wi,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=l(w,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=S();badgeSize=S();size=S();severity=S();value=S();badgeDisabled=S(!1,{transform:A});_componentStyle=l(Di);static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=j({type:e,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,o){n&2&&(v(o.cn(o.cx("root"),o.styleClass())),tn("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[E([Di,{provide:wi,useExisting:e},{provide:Z,useExisting:e}]),X([w]),m],decls:1,vars:1,template:function(n,o){n&1&&T(0),n&2&&bt(o.value())},dependencies:[ot,U,Ft],encapsulation:2,changeDetection:0})}return e})(),xi=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=P({type:e});static \u0275inj=N({imports:[ze,U,U]})}return e})();var er=["*"],nr=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Si=(()=>{class e extends F{name="baseicon";css=nr;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ei=(()=>{class e extends L{spin=!1;_componentStyle=l(Si);getClassNames(){return pt("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=j({type:e,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,o){n&2&&v(o.getClassNames())},inputs:{spin:[2,"spin","spin",A]},features:[E([Si]),m],ngContentSelectors:er,decls:1,vars:0,template:function(n,o){n&1&&(dt(),K(0))},encapsulation:2,changeDetection:0})}return e})();var ir=["data-p-icon","spinner"],Vi=(()=>{class e extends Ei{pathId;onInit(){this.pathId="url(#"+jt()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=j({type:e,selectors:[["","data-p-icon","spinner"]],features:[m],attrs:ir,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(qt(),_e(0,"g"),De(1,"path",0),Ce(),_e(2,"defs")(3,"clipPath",1),De(4,"rect",2),Ce()()),n&2&&(at("clip-path",o.pathId),p(3),Je("id",o.pathId))},encapsulation:2})}return e})();var Ii=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var or=`
    ${Ii}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,rr={root:"p-ink"},Mi=(()=>{class e extends F{name="ripple";style=or;classes=rr;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var Ai=(()=>{class e extends L{zone=l(Ye);_componentStyle=l(Mi);animationListener;mouseDownListener;timeout;constructor(){super(),Q(()=>{Pt(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(xt(n,"p-ink-active"),!Ie(n)&&!Me(n)){let a=Math.max(cn(this.el.nativeElement),hn(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let o=pn(this.el.nativeElement),r=t.pageX-o.left+this.document.body.scrollTop-Me(n)/2,s=t.pageY-o.top+this.document.body.scrollLeft-Ie(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),Ve(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&xt(a,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&xt(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),xt(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,fn(t))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(n){return new(n||e)};static \u0275dir=_({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[E([Mi]),m]})}return e})();var Fi=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var sr=["content"],ar=["loadingicon"],lr=["icon"],dr=["*"],Ni=(e,i)=>({class:e,pt:i});function ur(e,i){e&1&&lt(0)}function cr(e,i){if(e&1&&et(0,"span",7),e&2){let t=x(3);v(t.cn(t.cx("loadingIcon"),"pi-spin",t.loadingIcon)),c("pBind",t.ptm("loadingIcon")),at("aria-hidden",!0)}}function pr(e,i){if(e&1&&(qt(),et(0,"svg",8)),e&2){let t=x(3);v(t.cn(t.cx("loadingIcon"),t.spinnerIconClass())),c("pBind",t.ptm("loadingIcon"))("spin",!0),at("aria-hidden",!0)}}function hr(e,i){if(e&1&&(gt(0),O(1,cr,1,4,"span",3)(2,pr,1,5,"svg",6),mt()),e&2){let t=x(2);p(),c("ngIf",t.loadingIcon),p(),c("ngIf",!t.loadingIcon)}}function fr(e,i){}function gr(e,i){if(e&1&&O(0,fr,0,0,"ng-template",9),e&2){let t=x(2);c("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function mr(e,i){if(e&1&&(gt(0),O(1,hr,3,2,"ng-container",2)(2,gr,1,1,null,5),mt()),e&2){let t=x();p(),c("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),p(),c("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",we(3,Ni,t.cx("loadingIcon"),t.ptm("loadingIcon")))}}function br(e,i){if(e&1&&et(0,"span",7),e&2){let t=x(2);v(t.cn("icon",t.iconClass())),c("pBind",t.ptm("icon"))}}function yr(e,i){}function vr(e,i){if(e&1&&O(0,yr,0,0,"ng-template",9),e&2){let t=x(2);c("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function _r(e,i){if(e&1&&(gt(0),O(1,br,1,3,"span",3)(2,vr,1,1,null,5),mt()),e&2){let t=x();p(),c("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),p(),c("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",we(3,Ni,t.cx("icon"),t.ptm("icon")))}}function Cr(e,i){if(e&1&&(C(0,"span",7),T(1),D()),e&2){let t=x();v(t.cx("label")),c("pBind",t.ptm("label")),at("aria-hidden",t.icon&&!t.label),p(),bt(t.label)}}function Dr(e,i){if(e&1&&et(0,"p-badge",10),e&2){let t=x();c("value",t.badge)("severity",t.badgeSeverity)("pt",t.ptm("pcBadge"))}}var wr={root:({instance:e})=>["p-button p-component",{"p-button-icon-only":(e.icon||e.buttonProps?.icon||e.iconTemplate||e._iconTemplate||e.loadingIcon||e.loadingIconTemplate||e._loadingIconTemplate)&&!e.label&&!e.buttonProps?.label,"p-button-vertical":(e.iconPos==="top"||e.iconPos==="bottom")&&e.label,"p-button-loading":e.loading||e.buttonProps?.loading,"p-button-link":e.link||e.buttonProps?.link,[`p-button-${e.severity||e.buttonProps?.severity}`]:e.severity||e.buttonProps?.severity,"p-button-raised":e.raised||e.buttonProps?.raised,"p-button-rounded":e.rounded||e.buttonProps?.rounded,"p-button-text":e.text||e.variant==="text"||e.buttonProps?.text||e.buttonProps?.variant==="text","p-button-outlined":e.outlined||e.variant==="outlined"||e.buttonProps?.outlined||e.buttonProps?.variant==="outlined","p-button-sm":e.size==="small"||e.buttonProps?.size==="small","p-button-lg":e.size==="large"||e.buttonProps?.size==="large","p-button-plain":e.plain||e.buttonProps?.plain,"p-button-fluid":e.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos||e.buttonProps?.iconPos}`]:e.label||e.buttonProps?.label,"p-button-icon-left":(e.iconPos==="left"||e.buttonProps?.iconPos==="left")&&e.label||e.buttonProps?.label,"p-button-icon-right":(e.iconPos==="right"||e.buttonProps?.iconPos==="right")&&e.label||e.buttonProps?.label},e.icon,e.buttonProps?.icon],spinnerIcon:({instance:e})=>Object.entries(e.iconClass()).filter(([,i])=>!!i).reduce((i,[t])=>i+` ${t}`,"p-button-loading-icon"),label:"p-button-label"},Ti=(()=>{class e extends F{name="button";style=Fi;classes=wr;static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275prov=y({token:e,factory:e.\u0275fac})}return e})();var ki=new V("BUTTON_INSTANCE");var Ue=(()=>{class e extends L{hostName="";$pcButton=l(ki,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=l(w,{self:!0});_componentStyle=l(Ti);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=S(void 0,{transform:A});onClick=new tt;onFocus=new tt;onBlur=new tt;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=l(ge,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[n])=>t+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,[this.icon]:!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=g(e)))(o||e)}})();static \u0275cmp=j({type:e,selectors:[["p-button"]],contentQueries:function(n,o,r){if(n&1&&(H(r,sr,5),H(r,ar,5),H(r,lr,5),H(r,ne,4)),n&2){let s;G(s=z())&&(o.contentTemplate=s.first),G(s=z())&&(o.loadingIconTemplate=s.first),G(s=z())&&(o.iconTemplate=s.first),G(s=z())&&(o.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",A],raised:[2,"raised","raised",A],rounded:[2,"rounded","rounded",A],text:[2,"text","text",A],plain:[2,"plain","plain",A],outlined:[2,"outlined","outlined",A],link:[2,"link","link",A],tabindex:[2,"tabindex","tabindex",nn],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",A],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",A],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[E([Ti,{provide:ki,useExisting:e},{provide:Z,useExisting:e}]),X([w]),m],ngContentSelectors:dr,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt"]],template:function(n,o){n&1&&(dt(),C(0,"button",0),Y("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),K(1),O(2,ur,1,0,"ng-container",1)(3,mr,3,6,"ng-container",2)(4,_r,3,6,"ng-container",2)(5,Cr,2,5,"span",3)(6,Dr,1,3,"p-badge",4),D()),n&2&&(v(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),c("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus))("pBind",o.ptm("root")),at("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex)),p(2),c("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),p(),c("ngIf",o.loading),p(),c("ngIf",!o.loading),p(),c("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),p(),c("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[ot,Yt,Kt,on,Ai,_i,Vi,xi,ze,U,w],encapsulation:2,changeDetection:0})}return e})(),Pi=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=P({type:e});static \u0275inj=N({imports:[ot,Ue,U,U]})}return e})();var me=class e{translate=l(ln);setLanguage(i){this.translate.use(i)}get currentLanguage(){return this.translate.currentLang()}static \u0275fac=function(t){return new(t||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})};var Oi={apiUrl:"https://localhost:7082/api/auth"};var be=class e{http=l(rn);login(i){return this.http.post(`${Oi.apiUrl}/login`,i).pipe(zt(t=>{if(!t.data)throw new Error("Login response did not contain user account data.");return t.data}))}static \u0275fac=function(t){return new(t||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})};var ye=class e{_session=R(null);session=this._session.asReadonly();isAuthenticated=M(()=>this._session()!==null);setSession(i){this._session.set({userAccount:i})}clearSession(){this._session.set(null)}static \u0275fac=function(t){return new(t||e)};static \u0275prov=y({token:e,factory:e.\u0275fac,providedIn:"root"})};var Sr=()=>({width:"360px"});function Er(e,i){e&1&&(C(0,"small",12),T(1," Email is required. "),D())}function Vr(e,i){e&1&&(C(0,"small",12),T(1," Email should be valid. "),D())}function Ir(e,i){if(e&1&&kt(0,Er,2,0,"small",12)(1,Vr,2,0,"small",12),e&2){let t=x();Nt(t.requiredEmailError?0:t.emailError?1:-1)}}function Mr(e,i){e&1&&(C(0,"small",12),T(1," Password is required. "),D())}function Ar(e,i){e&1&&(C(0,"small",12),T(1," Password must be at least 6 characters. "),D())}function Fr(e,i){if(e&1&&kt(0,Mr,2,0,"small",12)(1,Ar,2,0,"small",12),e&2){let t=x();Nt(t.requiredPasswordError?0:t.passwordMinLengthError?1:-1)}}var Bi=class e{fb=l(ti);languageService=l(me);authService=l(be);authState=l(ye);router=l(sn);loginForm=this.fb.nonNullable.group({email:["",[_t.required,_t.email]],password:["",[_t.required,_t.minLength(8)]]});onSubmit(){if(this.loginForm.invalid){this.loginForm.markAllAsTouched();return}let{email:i,password:t}=this.loginForm.getRawValue();this.authService.login({identity:i,password:t}).subscribe({next:n=>{this.authState.setSession(n.userAccountData),this.router.navigate(["/"])},error:n=>this.handleLoginError(n)})}get email(){return this.loginForm.controls.email}get showEmailError(){return this.email.invalid&&(this.email.dirty||this.email.touched)}get requiredEmailError(){return this.email.hasError("required")}get emailError(){return this.email.hasError("email")}get password(){return this.loginForm.controls.password}get showPasswordError(){return this.password.invalid&&(this.password.dirty||this.password.touched)}get requiredPasswordError(){return this.password.hasError("required")}get passwordMinLengthError(){return this.password.hasError("minlength")}get currentLanguage(){return this.languageService.currentLanguage}toggleLanguage(){this.languageService.setLanguage(this.currentLanguage==="ar"?"en":"ar")}handleLoginError(i){console.error("Login failed",i)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=j({type:e,selectors:[["app-login"]],decls:28,vars:32,consts:[["type","button",3,"click"],[3,"ngSubmit","formGroup"],[3,"header"],[1,"field"],["for","email"],["id","email","type","email","pInputText","","formControlName","email","name","email","autocomplete","email",1,"w-full",3,"placeholder"],["for","password"],["id","password","type","password","pInputText","","formControlName","password","name","password",1,"w-full",3,"placeholder"],[1,"login-button"],["type","submit","styleClass","w-full",3,"label","disabled"],[1,"mt-2"],["routerLink","/auth/register"],[1,"block","login-error"]],template:function(t,n){t&1&&(C(0,"button",0),Y("click",function(){return n.toggleLanguage()}),T(1),D(),C(2,"form",1),Y("ngSubmit",function(){return n.onSubmit()}),C(3,"p-card",2),nt(4,"translate"),C(5,"div",3)(6,"label",4),T(7),nt(8,"translate"),D(),et(9,"input",5),nt(10,"translate"),kt(11,Ir,2,1),D(),C(12,"div",3)(13,"label",6),T(14),nt(15,"translate"),D(),et(16,"input",7),nt(17,"translate"),kt(18,Fr,2,1),D(),C(19,"div",8),et(20,"p-button",9),nt(21,"translate"),D()(),C(22,"div",10),T(23),nt(24,"translate"),C(25,"a",11),T(26),nt(27,"translate"),D()()()),t&2&&(p(),wt(" ",n.languageService.currentLanguage==="ar"?"English":"\u0627\u0644\u0639\u0631\u0628\u064A\u0629",`
`),p(),c("formGroup",n.loginForm),p(),Dt(en(31,Sr)),c("header",it(4,15,"AUTH.LOGIN.TITLE")),p(4),wt(" ",it(8,17,"AUTH.LOGIN.EMAIL")," "),p(2),c("placeholder",it(10,19,"AUTH.LOGIN.EMAIL_PLACEHOLDER")),p(2),Nt(n.showEmailError?11:-1),p(3),wt(" ",it(15,21,"AUTH.LOGIN.PASSWORD")," "),p(2),c("placeholder",it(17,23,"AUTH.LOGIN.PASSWORD")),p(2),Nt(n.showPasswordError?18:-1),p(2),c("label",it(21,25,"AUTH.LOGIN.SUBMIT"))("disabled",n.loginForm.invalid),p(3),wt(" ",it(24,27,"AUTH.LOGIN.NOT_A_MEMBER")," "),p(3),wt(" ",it(27,29,"AUTH.LOGIN.REGISTER")," "))},dependencies:[ui,Ge,yi,bi,ei,Kn,pe,Wn,qn,Re,je,Pi,Ue,an,dn],styles:[".login-button[_ngcontent-%COMP%]{position:relative;top:8px}.login-error[_ngcontent-%COMP%]{color:#dc2626}"]})};export{Bi as LoginComponent};
