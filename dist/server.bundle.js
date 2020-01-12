require("source-map-support").install(),function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=23)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={LOAD_LIST_NEWS:"LOAD_LIST_NEWS",ADD_NEWS:"ADD_NEWS",REMOVE_NEWS:"REMOVE_NEWS",EDIT_NEWS:"EDIT_NEWS"}},function(e,t){e.exports=require("draft-js")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-bootstrap")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("isomorphic-fetch")},function(e){e.exports=JSON.parse('{"a":{"main":["public/style.ebec82691099ef93abde.css","public/client.ebec82691099ef93abde.js"]}}')},function(e,t){e.exports=require("redux")},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(4),i=function(e){var t=e.route;return a.a.createElement("div",{className:"1"},Object(o.renderRoutes)(t.routes))};i.defaultProps={route:null};var c={component:i},u=n(3),l=function(){return a.a.createElement("nav",{className:"nav container"},a.a.createElement(u.Link,{className:"nav-link ",to:"/cms"},"CMS"),a.a.createElement(u.Link,{className:"nav-link ",to:"/"},"Показать все новости"))},s=function(e){var t=e.children;return a.a.createElement("div",{className:"page "},a.a.createElement(l,null),a.a.createElement("div",{className:"container"},t))},f=n(5),p=n(14),d=n.n(p),m=function(e){e.id;var t=e.title,n=e.description,r=e.fileName;return a.a.createElement("div",{className:"shadow card rounded mb-5"},a.a.createElement("img",{src:r,className:" card-img-top"}),a.a.createElement("div",{className:"card-body"},a.a.createElement("div",{className:"card-title h3"},t),a.a.createElement("div",{className:"card-text text-muted"},d()(n))))};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var y=Object(f.connect)((function(e){return{listNews:e.ListNews}}),null)((function(e){var t=e.listNews;return a.a.createElement("div",null,t?t.map((function(e,t){return a.a.createElement(m,b({key:t},e))})):a.a.createElement("div",null,"Новостей нет"))})),v={component:function(){return a.a.createElement(s,null,a.a.createElement(y,null))}},g=(n(24),n(7)),E=n(9),O=n.n(E),h=function(e){return e.json()},j=function(e){return console.error(e)},S=function(e,t,n,r){return O()(t,{method:n,body:r,headers:{"Content-Type":"application/json"}}).then(h).then(e).catch(j)},w=function(e){return t="/api/upload",n="POST",r=e,O()(t,{method:n,body:r}).then(h).catch(j);var t,n,r},N=Object(f.connect)((function(e){return{ListNews:e.ListNews}}),(function(e){return{onRemove:function(t){e(function(e){return function(t){return S(t,"/api/cms","DELETE",JSON.stringify({id:e}))}}(t))}}}))((function(e){var t=e.ListNews,n=e.onRemove;return a.a.createElement("div",{className:""},t?t.map((function(e,t){return a.a.createElement("div",{key:t},a.a.createElement("div",{style:{background:"#af9b79"},className:"d-flex rounded"},a.a.createElement("div",{className:"align-self-center ml-2 rounded text-white flex-fill"},e.title),a.a.createElement(u.Link,{className:"nav-link ",to:"cms/add"},"Изменить"),a.a.createElement(g.Button,{onClick:function(){return n(e.id)},variant:"danger",size:"sm",className:"m-2"},"Удалить")))})):a.a.createElement("div",null,"Новостей нет"))}));n(25);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var _=function(e){var t=e.file,n=x(Object(r.useState)(""),2),o=n[0],i=n[1];return Object(r.useEffect)((function(){var e=new FileReader;e.onload=function(e){return i(e.target.result)},e.readAsDataURL(t)})),a.a.createElement("img",{className:"w-25 mr-3",src:o,alt:"текст"})};function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var P=function(e){var t=e.value,n=void 0===t?"":t,r=e.setValue;return a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{className:"exampleInputPassword1"},"Заголовок"),a.a.createElement("input",{style:{background:"#e3edef"},className:"form-control",onChange:function(e){return r(e.target.value)},value:n}))},A=function(e){var t=e.value,n=e.setValue,o=D(Object(r.useState)(),2),i=o[0],c=o[1];return a.a.createElement("div",null,a.a.createElement("input",{ref:function(e){return c(e)},style:{display:"none"},type:"file",name:"filedata",onChange:function(e){return n(e.target.files[0])}}),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{className:"exampleInputPassword1"},"Картинка"),a.a.createElement("div",null,t?a.a.createElement(_,{file:t}):a.a.createElement("div",null)),a.a.createElement("button",{onClick:function(){return i.click()}},"Выберите картинку")))},k=n(2);function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var R=function(e){var t=e.value,n=e.setValue,o=I(Object(r.useState)(k.EditorState.createEmpty()),2),i=o[0],c=o[1];!function(e){var t=T(Object(r.useState)(!1),2),n=t[0],a=t[1];Object(r.useEffect)((function(){return a(!0)}),[n]),n||e()}((function(){void 0!==t&&function(e,t){k.EditorState.push(e,Object(k.convertFromRaw)(t),"update-state")}(i,t)}));return a.a.createElement("div",{style:{background:"#e3edef"},className:"rounded p-2"},a.a.createElement("div",{className:"btn-group btn-group-sm",role:"group"},a.a.createElement("div",null,a.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){c(k.RichUtils.toggleInlineStyle(i,"BOLD"))}},"Bold"),a.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){c(k.RichUtils.toggleInlineStyle(i,"ITALIC"))}},"Italic"),a.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){c(k.RichUtils.toggleInlineStyle(i,"CODE"))}},"Code"),a.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){c(k.RichUtils.toggleInlineStyle(i,"STRIKETHROUGH"))}},"Strikethrough"),a.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){c(k.RichUtils.toggleInlineStyle(i,"UNDERLINE"))}},"Underline"))),a.a.createElement(k.Editor,{editorState:i,onChange:function(e){n(Object(k.convertToRaw)(e.getCurrentContent())),c(e)},handleKeyCommand:function(e,t){var n=k.RichUtils.handleKeyCommand(t,e);return n?(c(n),"handled"):"not-handled"},placeholder:"Здесь можно печатать..."}))};function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var C=Object(f.connect)(null,(function(e){return{_onCreateNews:function(t,n,r){e(function(e,t,n){return function(r){return S(r,"/api/cms","POST",JSON.stringify({title:e,description:t,fileName:n}))}}(t,n,r.name));var a=new FormData;a.append("file",r),a.append("user","hubot"),w(a)}}}))((function(e){var t=e._onCreateNews,n=L(Object(r.useState)(),2),o=n[0],i=n[1],c=L(Object(r.useState)(),2),l=c[0],s=c[1],f=L(Object(r.useState)(),2),p=f[0],d=f[1];return a.a.createElement("div",{style:{background:"#FFE3B3"},className:" shadow rounded mt-2 p-2 mb-4"},a.a.createElement(P,{value:o,setValue:i}),a.a.createElement(R,{value:l,setValue:s}),a.a.createElement(A,{value:p,setValue:d}),a.a.createElement("div",null,a.a.createElement(g.Button,{onClick:function(){}},"Предосмотр"),a.a.createElement(g.Button,{onClick:function(){t(o,l,p)}},"Создать"),a.a.createElement(u.Link,{className:"btn",to:"/cms"},"Отмена")))})),q={component:function(e){var t=e.route;return a.a.createElement(s,null,a.a.createElement(u.Link,{className:"nav-link ",to:"/add",replace:!0},"Добавить новость"),a.a.createElement(N,null),Object(o.renderRoutes)(t.routes))}},W={component:function(e){e.route;return a.a.createElement("div",null,a.a.createElement(C,null))}};function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){V(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=[U({},c,{routes:[U({},v,{path:"/",exact:!0}),U({},q,{path:"/cms"}),U({},W,{path:"/add"})]})]},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-html-parser")},function(e){e.exports=JSON.parse('{"ListNews":[{"id":"119e6bf9-8c97-4910-82fd-f4ada97172e0","title":"wwwww","description":"<p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>","fileName":"gorod_art_nebo_127834_1920x1080.jpg"},{"id":"8e2a1f30-507c-44f8-9ec5-a790f5e494ac","title":"1232131","description":"<p>123123 123</p><p>123123</p><p>qwewqewqe 123123123</p><p>12321313</p><p>123123</p>","fileName":"gory_nebo_risunok_pyatna_87245_1920x1080.jpg"}]}')},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("serialize-javascript")},function(e,t,n){"use strict";var r=n(6),a=n(1),o=n(19),i=n(27),c=i.diskStorage({destination:function(e,t,n){n(null,"uploads")},filename:function(e,t,n){n(null,t.originalname)}}),u=Object(r.Router)(),l=function(e,t,n){e.store.dispatch(n),t.status(200).json(n)};u.get("/",(function(e,t){t.status(200).json(e.store.getState().ListNews)})),u.post("/cms",(function(e,t){return l(e,t,{type:a.a.ADD_NEWS,id:Object(o.v4)(),title:e.body.title,description:e.body.description,fileName:e.body.fileName})})),u.use(i({storage:c}).any()),u.post("/upload",(function(e,t,n){var r=e.files;console.log(r),r?t.send("Файл загружен"):t.send("Ошибка при загрузке файла")})),u.put("/cms",(function(e,t){return l(e,t,{type:a.a.EDIT_NEWS,id:e.body.id,title:e.body.title,description:e.body.description})})),u.delete("/cms",(function(e,t){console.log(e.body),l(e,t,{type:a.a.REMOVE_NEWS,id:e.body.id})})),t.a=u},function(e,t){e.exports=require("uuid")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("body-parser")},function(e,t,n){"use strict";var r=n(1);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.a.ADD_NEWS:return{id:t.id,title:t.title,description:t.description,fileName:t.fileName};case r.a.EDIT_NEWS:return o({},e,{id:t.id,title:t.title,description:t.description});default:return e}};function u(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.a.ADD_NEWS:return[c({},t)].concat(u(e));case r.a.REMOVE_NEWS:return e.filter((function(e){return e.id!==t.id}));case r.a.EDIT_NEWS:return e.map((function(e){return e.id!=t.id?e:c(e,t)}));default:return e}};function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.a.LOAD_LIST_NEWS:return f({},e,{ListNews:t.value});case r.a.ADD_NEWS:case r.a.REMOVE_NEWS:case r.a.EDIT_NEWS:return f({},e,{ListNews:l(e.ListNews,t)});default:return e}},m=n(11),b=n(16),y=n.n(b);function v(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var g=function(e){return function(t){return function(n){var r;return console.groupCollapsed("dispatching",n.type),console.log("prev state",e.getState()),console.log("action",n),r=t(n),console.log("next state",e.getState()),console.groupEnd(),r}}},E=function(e){return function(e){return function(t){return console.log("\n dispatching server action\n"),console.log(t),console.log("\n"),e(t)}}},O=function(e){return[e?E:g,y.a]};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(m.createStore)(d,t,m.applyMiddleware.apply(void 0,v(O(e))))}},function(e,t,n){"use strict";n.r(t),function(e){var t=n(6),r=n.n(t),a=n(8),o=n.n(a),i=n(0),c=n.n(i),u=n(13),l=n(12),s=n(3),f=n(4),p=n(10),d=n(5),m=n(15),b=(n(26),n(22)),y=n(17),v=n.n(y),g=n(18),E=n(20),O=n.n(E),h=n(21),j=n.n(h),S=Object(b.a)(!0,m),w=r.a.static("uploads");console.log("Path file ".concat(o.a.join(e,"uploads"))),S.subscribe((function(){return O.a.writeFile(o.a.join(e,"../data/initialState.json"),JSON.stringify(S.getState()),(function(e){return e?console.log("Error saving state!",e):null}))}));var N=r()();N.use(j.a.json()),N.use(r.a.static("dist")),N.use(w),N.use((function(e,t,n){e.store=S,n()})),N.use("/api",g.a),N.get("*",(function(e,t){var n=Object(f.matchRoutes)(l.a,e.path);console.log(e.path);var r=n.map((function(e){var t=e.route;return t.loadData?t.loadData(store,id):null})).map((function(e){return e?new Promise((function(t,n){e.then(t).catch(t)})):null}));Promise.all(r).then((function(){var n={},r=function(e,t,n){var r=Object(u.renderToString)(c.a.createElement(d.Provider,{store:t},c.a.createElement(s.StaticRouter,{location:e.path,context:{}},c.a.createElement("div",null,Object(f.renderRoutes)(l.a)))));return'<!DOCTYPE html>\n    <html>\n        <head>\n            <title>Universal React server bundle</title>\n            <link rel="stylesheet" href="'.concat(p.a.main[0],'">\n        </head>\n        <body>\n            <div id="root">').concat(r,"</div>\n            <script>\n            window.__PRELOADED_STATE__ = ").concat(v()(t.getState()).replace(/</g,"\\u003c"),'\n            <\/script>\n            <script src="').concat(p.a.main[1],'"><\/script>\n        </body>\n    </html>')}(e,S);n.notFound&&t.status(404),t.send(r)}))})),N.listen(3e3),console.log("App is running on http://localhost:3000")}.call(this,"/")},function(e,t){},function(e,t){e.exports=require("react-icons/io")},function(e,t){e.exports=require("serve-favicon")},function(e,t){e.exports=require("multer")}]);
//# sourceMappingURL=server.bundle.js.map