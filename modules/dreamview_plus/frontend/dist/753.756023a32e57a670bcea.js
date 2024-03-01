"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[753],{97790:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var r=n(21902),i=n(22770),o=n(4022),a=n(36469),c=n(44606);function l(){return(0,c.BH)((function(e){return{"panel-camera-root":{position:"relative",height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},"camera-btn-container":{position:"absolute",bottom:"24px",right:"24px"},"camera-btn-item":{display:"inline-block",cursor:"pointer",textAlign:"center",width:"32px",height:"32px",lineHeight:"32px",background:"#343C4D",borderRadius:"6px",marginTop:"12px",fontSize:"16px"},"camera-canvas-container":{width:"100%",height:"100%",maxWidth:"100%",maxHeight:"100%",display:"flex",justifyContent:"center",alignItems:"center"},"panel-camera-canvas":{},"layer-menu-container":{width:"158px",height:"94px"},"layer-menu-header":{height:"40px",paddingLeft:"24px",display:"flex",alignItems:"center",borderBottom:"1px solid #383B45",fontFamily:"PingFangSC-Medium",fontSize:"16px",color:"#FFFFFF",fontWeight:"500"},"layer-menu-content-right":{height:"54px",paddingLeft:"24px",display:"flex",alignItems:"center",fontFamily:"PingFangSC-Regular",fontSize:"14px",color:"#A6B5CC",fontWeight:"400"}}}))()}var u=n(52007),s=new Map([["ST_UNKNOWN","rgba(96, 96, 96, 1.000)"],["ST_UNKNOWN_MOVABLE","rgba(96, 96, 96, 1.000)"],["ST_UNKNOWN_UNMOVABLE","rgba(96, 96, 96, 1.000)"],["ST_CAR","rgba(243, 187, 37, 1.000)"],["ST_VAN","rgba(243, 187, 37, 1.000)"],["ST_TRUCK","rgba(243, 187, 37, 1.000)"],["ST_BUS","rgba(243, 187, 37, 1.000)"],["ST_CYCLIST","rgba(231, 91, 135, 1.000)"],["ST_MOTORCYCLIST","rgba(231, 91, 135, 1.000)"],["ST_TRICYCLIST","rgba(231, 91, 135, 1.000)"],["ST_PEDESTRIAN","#35DACF"],["ST_TRAFFICCONE","#35DACF"]]),f=n(54067),h={"":{boundingbox:{defaultVisible:!1,currentVisible:!1,vizKey:"Boundingbox"}}};function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===d(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,c=[],l=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,i=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e){var t=(0,u.R)().panelId,n=e.setShowBoundingBox,o=l(),c=o.classes,s=o.cx,d=(0,f.$G)("layerMenu").t,p=b((0,r.useState)(h),2),g=p[0],v=p[1],w=b((0,r.useState)((function(){return Object.keys(g)})),1)[0],S=b((0,r.useState)(w[0]),2),O=S[0],E=S[1],x=b((0,r.useState)(g[O]),2),R=x[0],j=x[1],A=(0,a._)("".concat(a.SA.layerMenu).concat(t)),C=(0,a._)("".concat(a.SA.BBox).concat(t));return(0,r.useEffect)((function(){var e=A.get();e&&(v(e),E(w[0]),j(e[w[0]]))}),[]),r.createElement("div",{className:c["layer-menu-container"]},r.createElement("div",{className:c["layer-menu-header"]},r.createElement("div",{className:c["layer-menu-header-left"]},d("layerMenu")),r.createElement("div",{className:c["layer-menu-header-right"]})),r.createElement("div",{className:c["layer-menu-content"]},r.createElement("div",{className:c["layer-menu-content-left"]},w.map((function(e){return r.createElement("li",{key:e,className:s(c["layer-menu-content-left-li"],y({},c["li-active"],O===e)),onClick:function(){E(e),j(g[e])}},r.createElement("span",null,e))}))),r.createElement("div",{className:c["layer-menu-content-right"]},Object.keys(R).map((function(e){var t=g[O][e].currentVisible;return r.createElement("li",{key:e},r.createElement("span",null,r.createElement(i.XZ,{checked:t,defaultChecked:"1"===C.get(),onChange:function(t){var r=t.target.checked;n(r),C.set(r?1:0);var i=m(m({},g[O]),{},y({},e,m(m({},g[O][e]),{},{currentVisible:r}))),o=m(m({},g),{},y({},O,i));j((function(){return i})),v((function(){return o})),A.set(o)}},e)))})))))}const w=r.memo(v);var S=n(58938),O=n(4492),E=n(86944);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,c=[],l=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,i=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(){var e=(0,u.R)(),t=e.logger,n=e.panelId,c=e.onPanelResize,f=e.initSubscription,h=(0,a._)("".concat(a.SA.BBox).concat(n)),d=R((0,r.useState)((function(){return h.get()})),2),p=d[0],m=d[1],y=R((0,r.useState)(null),2),b=y[0],g=y[1],v=R((0,r.useState)(),2),O=v[0],j=v[1],A=(0,r.useRef)(null);(0,r.useEffect)((function(){var e,t,n;f((e={},t=S.DU.CAMERA,n={consumer:function(e){j(e)}},(t=function(e){var t=function(e,t){if("object"!==x(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===x(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e))}),[]),(0,r.useLayoutEffect)((function(){c((function(e,t){g({viewPortWidth:e,viewPortHeight:t})}))}),[]),(0,r.useEffect)((function(){var e;if(!(0,o.isEmpty)(O)&&(null==O||null===(e=O.image)||void 0===e?void 0:e.length)>0){var r=O.kImageScale,i=new Uint8Array(O.image),a=new Blob([i],{type:"image/jpeg"});createImageBitmap(a).then((function(e){var i=A.current;if(i){var o={},a=e.width/e.height>b.viewPortWidth/b.viewPortHeight,c=b.viewPortWidth/e.width,l=b.viewPortHeight/e.height,u=a?c:l;o.drawImageWidth=e.width*u,o.drawImageHeight=e.height*u,i.width=o.drawImageWidth,i.height=o.drawImageHeight;var f=i.getContext("2d");f.drawImage(e,0,0,o.drawImageWidth,o.drawImageHeight),O.bbox2d&&O.bbox2d.length>0&&p&&(t.debug(n,"has obstacles"),O.bbox2d.forEach((function(e,i){var o=O.obstaclesId[i],a=O.obstaclesSubType[i];f.strokeStyle=s.get(a)||"red";var c=e.xmin,l=e.ymin,h=e.xmax,d=e.ymax;if(c!==l||l!==h||h!==d){var p=R([c,l,h,d].map((function(e){return e*(null!=r?r:1)*u})),4);c=p[0],l=p[1],h=p[2],d=p[3],f.strokeRect(c,l,h-c,d-l),f.fillStyle=s.get(a)||"white",f.font="12px Arial",f.fillText("".concat(a.substring(3),":").concat(o),c,l)}else t.debug(n,"bbox is empty")})))}})).catch((function(e){t.error(e)}))}}),[O,p,b]);var C=l().classes;return r.createElement("div",{className:C["panel-camera-root"]},r.createElement("div",{className:C["camera-btn-container"]},r.createElement(i.J2,{placement:"leftTop",content:r.createElement(w,{setShowBoundingBox:m}),trigger:"click"},r.createElement("span",{className:C["camera-btn-item"]},r.createElement(i.Le,null)))),r.createElement(E.Z,{className:C["camera-canvas-container"]},r.createElement("canvas",{ref:A,id:"camera-".concat(n),className:C["panel-camera-canvas"]})))}function C(e){var t=(0,r.useMemo)((function(){return(0,O.Z)({PanelComponent:A,panelId:e.panelId,subscribeInfo:[{name:S.DU.CAMERA,needChannel:!0}]})}),[]);return r.createElement(t,e)}A.displayName="InternalCameraView";const P=r.memo(C)},57795:(e,t,n)=>{n.d(t,{NB:()=>m});var r=n(21902),i=n(5350),o=n(59741),a=n.n(o),c=n(35220),l=n.n(c),u=function(e,t){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},u(e,t)};var s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)};var f=function(e,t,n,r){switch(t){case"debounce":return a()(e,n,r);case"throttle":return l()(e,n,r);default:return e}},h=function(e){return"function"==typeof e},d=function(){return"undefined"==typeof window},p=function(e){return e instanceof Element||e instanceof HTMLDocument};function m(e){var t=void 0===e?{}:e,n=t.skipOnMount,i=void 0!==n&&n,o=t.refreshMode,a=t.refreshRate,c=void 0===a?1e3:a,l=t.refreshOptions,u=t.handleWidth,h=void 0===u||u,d=t.handleHeight,p=void 0===d||d,m=t.targetRef,y=t.observerOptions,b=t.onResize,g=(0,r.useRef)(i),v=(0,r.useState)({width:void 0,height:void 0}),w=v[0],S=v[1],O=(0,r.useState)((null==m?void 0:m.current)||null),E=O[0],x=O[1];m&&setTimeout((function(){m.current!==E&&x(m.current)}),0);var R=(0,r.useCallback)((function(e){e!==E&&x(e)}),[E]);R.current=E,(0,r.useEffect)((function(){return function(){x(null),R.current=null}}),[]);var j=(0,r.useCallback)((function(e,t){return(e.width!==t.width||e.height!==t.height)&&!(e.width===t.width&&!p||e.height===t.height&&!h)}),[h,p]),A=(0,r.useCallback)((function(e){(h||p)&&(g.current?g.current=!1:e.forEach((function(e){var t=(null==e?void 0:e.contentRect)||{},n=t.width,r=t.height;S((function(e){return j(e,{width:n,height:r})?{width:n,height:r}:e}))})))}),[h,p,g,j]),C=(0,r.useCallback)(f(A,o,c,l),[A,o,c,l]);return(0,r.useEffect)((function(){var e;return E?(e=new window.ResizeObserver(C)).observe(E,y):(w.width||w.height)&&S({width:void 0,height:void 0}),function(){var t,n,r;null===(t=null==e?void 0:e.disconnect)||void 0===t||t.call(e),null===(r=(n=C).cancel)||void 0===r||r.call(n)}}),[C,E]),(0,r.useEffect)((function(){null==b||b(w.width,w.height)}),[w]),s({ref:R},w)}!function(e){function t(t){var n=e.call(this,t)||this;n.cancelHandler=function(){n.resizeHandler&&n.resizeHandler.cancel&&(n.resizeHandler.cancel(),n.resizeHandler=null)},n.attachObserver=function(){var e=n.props,t=e.targetRef,r=e.observerOptions;if(!d()){t&&t.current&&(n.targetRef.current=t.current);var i=n.getElement();i&&(n.observableElement&&n.observableElement===i||(n.observableElement=i,n.resizeObserver.observe(i,r)))}},n.getElement=function(){var e=n.props,t=e.querySelector,r=e.targetDomEl;if(d())return null;if(t)return document.querySelector(t);if(r&&p(r))return r;if(n.targetRef&&p(n.targetRef.current))return n.targetRef.current;var o=(0,i.findDOMNode)(n);if(!o)return null;switch(n.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},n.createResizeHandler=function(e){var t=n.props,r=t.handleWidth,i=void 0===r||r,o=t.handleHeight,a=void 0===o||o,c=t.onResize;(i||a)&&e.forEach((function(e){var t=e&&e.contentRect||{},r=t.width,o=t.height;!n.skipOnMount&&!d()&&function(e){var t=e.width,r=e.height;n.state.width===t&&n.state.height===r||n.state.width===t&&!a||n.state.height===r&&!i||(null==c||c(t,r),n.setState({width:t,height:r}))}({width:r,height:o}),n.skipOnMount=!1}))},n.getRenderType=function(){var e=n.props,t=e.render,i=e.children;return h(t)?"renderProp":h(i)?"childFunction":(0,r.isValidElement)(i)?"child":Array.isArray(i)?"childArray":"parent"};var o=t.skipOnMount,a=t.refreshMode,c=t.refreshRate,l=void 0===c?1e3:c,u=t.refreshOptions;return n.state={width:void 0,height:void 0},n.sizeRef={current:n.state},n.skipOnMount=o,n.targetRef=(0,r.createRef)(),n.observableElement=null,d()||(n.resizeHandler=f(n.createResizeHandler,a,l,u),n.resizeObserver=new window.ResizeObserver(n.resizeHandler)),n}(function(e,t){function n(){this.constructor=e}u(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)})(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver(),this.sizeRef.current=this.state},t.prototype.componentWillUnmount=function(){d()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e=this.props,t=e.render,n=e.children,i=e.nodeType,o=void 0===i?"div":i,a=this.state,c={width:a.width,height:a.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return null==t?void 0:t(c);case"childFunction":return null==n?void 0:n(c);case"child":var l=n;if(l.type&&"string"==typeof l.type){var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(c,["targetRef"]);return(0,r.cloneElement)(l,u)}return(0,r.cloneElement)(l,c);case"childArray":return n.map((function(e){return!!e&&(0,r.cloneElement)(e,c)}));default:return r.createElement(o,null)}}}(r.PureComponent)}}]);