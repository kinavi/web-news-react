require("source-map-support").install(),function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("path")},function(e,t){},function(e,t,r){"use strict";r.r(t);var n=r(3),o=r.n(n),c=(r(5),r(0)),u=r.n(c),i=r(4),a=r(2),l=function(e){var t=e.route;return u.a.createElement("div",null,Object(a.renderRoutes)(t.routes))};l.defaultProps={route:null};var s={component:l},p=r(1),f=function(){return u.a.createElement("nav",{className:"nav container"},u.a.createElement(p.Link,{className:"nav-link ",to:"/cms"},"Добавить новость"),u.a.createElement(p.Link,{className:"nav-link ",to:"/"},"Показать все новости"))},b={component:function(){return u.a.createElement("div",null,u.a.createElement(f,null),u.a.createElement("div",null," Тут выводится список новостей "))}},d=(r(6),{component:function(){return u.a.createElement("div",null,u.a.createElement(f,null),u.a.createElement("div",null,"Тут Редоктируются новости"))}});function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=[v({},s,{routes:[v({},b,{path:"/",exact:!0}),v({},d,{path:"/cms"})]})];var j=o()();j.use("/public",o.a.static("./public")),j.get("*",(function(e,t){var r=Object(i.renderToString)(u.a.createElement(p.StaticRouter,{location:e.path},u.a.createElement("div",null,Object(a.renderRoutes)(y)))),n='<!DOCTYPE html>\n    <html>\n        <head>\n            <title>Universal React server bundle</title>\n        </head>\n        <body>\n            <div id="root">'.concat(r,'</div>\n            <script src="public/client.bundle.js"><\/script>\n        </body>\n    </html>');t.send(n)})),j.listen(3e3),console.log("App is running on http://localhost:3000")}]);
//# sourceMappingURL=server.bundle.js.map