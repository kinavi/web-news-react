require("source-map-support").install(),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=23)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("draft-js")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-bootstrap")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("isomorphic-fetch")},function(e){e.exports=JSON.parse('{"a":{"main":["style.7568d07f64707e71737b.css","client.7568d07f64707e71737b.js"]}}')},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-dom/server")},function(e){e.exports=JSON.parse('{"ListNews":[{"id":"6ef39d4f-71c1-4219-9c2a-36fd23d0f6eb","title":"2222223332 ","description":{"blocks":[{"key":"d27im","text":"Bold","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":4,"style":"BOLD"}],"entityRanges":[],"data":{}},{"key":"3v7jh","text":"Italic + Bold","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":13,"style":"BOLD"},{"offset":0,"length":13,"style":"ITALIC"}],"entityRanges":[],"data":{}},{"key":"7r640","text":"Italic + Bold + Code","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":20,"style":"BOLD"},{"offset":0,"length":20,"style":"ITALIC"}],"entityRanges":[],"data":{}},{"key":"ausre","text":"Italic + Bold + Code + Strikethrough","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":36,"style":"BOLD"},{"offset":0,"length":36,"style":"ITALIC"},{"offset":0,"length":36,"style":"STRIKETHROUGH"}],"entityRanges":[],"data":{}},{"key":"6pt6i","text":"Italic + Bold + Code + Strikethrough + Underline","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":48,"style":"BOLD"},{"offset":0,"length":48,"style":"ITALIC"}],"entityRanges":[],"data":{}}],"entityMap":{}},"fileName":"gorod_art_nebo_127834_1920x1080.jpg"}]}')},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("serialize-javascript")},function(e,t){e.exports=require("uuid")},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("react-html-parser")},function(e,t){e.exports=require("react-icons/io")},function(e,t){e.exports=require("react-dom")},function(e,t){e.exports=require("serve-favicon")},function(e,t){e.exports=require("multer")},function(e,t,n){"use strict";n.r(t);var r=n(6),o=n.n(r),a=(n(17),n(0)),i=n.n(a),c=n(10),l=n(5),u=function(e){var t=e.route;return i.a.createElement("div",{className:"app"},Object(l.renderRoutes)(t.routes))};u.defaultProps={route:null};var s={component:u},f=n(2),d=function(){return i.a.createElement("nav",{className:"nav container"},i.a.createElement(f.Link,{className:"nav-link ",to:"/cms"},i.a.createElement("span",null,"CMS")),i.a.createElement(f.Link,{className:"nav-link ",to:"/"},i.a.createElement("span",null,"Показать все новости")))},p=function(e){var t=e.children;return i.a.createElement("div",{className:"page"},i.a.createElement(d,null),i.a.createElement("div",{className:"container"},t))},m=n(3),y=(n(18),n(1));function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=function(e){e.isEdit;var t=e.value,n=(e.setValue,b(Object(a.useState)(y.EditorState.createWithContent(Object(y.convertFromRaw)(t))),2)),r=n[0];n[1];return i.a.createElement("div",{style:{background:"#e3edef"},className:"rounded p-2"},i.a.createElement(y.Editor,{editorState:r,readOnly:!0}))},g=function(e){var t=e.id,n=e.title,r=e.description,o=e.fileName,a=Object(f.useHistory)();return i.a.createElement("div",{className:"shadow card rounded mb-5",onClick:function(){a.push("/news/".concat(t))}},i.a.createElement("img",{src:o,className:" card-img-top"}),i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"card-title h3"},n),i.a.createElement(v,{isEdit:!0,value:r})))};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var E=Object(m.connect)((function(e){return{listNews:e.ListNews}}),null)((function(e){var t=e.listNews;return i.a.createElement("div",null,t?t.map((function(e,t){return i.a.createElement(g,h({key:t},e))})):i.a.createElement("div",null,"Новостей нет"))})),O={component:function(){return i.a.createElement(p,null,i.a.createElement(E,null))}},j=function(e){var t=e.id,n=e.title,r=e.description,o=e.fileName,a=Object(f.useHistory)();return i.a.createElement("div",{className:"shadow card rounded mb-5",onClick:function(){a.push("/news/".concat(t))}},i.a.createElement("img",{src:o,className:" card-img-top"}),i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"card-title h3"},n),i.a.createElement(v,{isEdit:!0,value:r})))};function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var w={component:Object(m.connect)((function(e){return{ListNews:e.ListNews}}),null)((function(e){var t=e.ListNews,n=Object(f.useParams)().id,r=S(Object(a.useState)(N(t,n)),2),o=r[0];r[1];return i.a.createElement(p,null,i.a.createElement(j,o))}))},N=function(e,t){return e.filter((function(e){return e.id==t}))[0]},C=n(4),x=n(7),k=n.n(x),A=function(e){return e.json()},I=function(e){return console.error(e)},R=function(e,t,n,r){return k()(t,{method:n,body:r,headers:{"Content-Type":"application/json"}}).then(A).then(e).catch(I)},L=function(e,t,n){return function(r){return R(r,"/api/cms","POST",JSON.stringify({title:e,description:t,fileName:n}))}},P=function(e){return t="/api/upload",n="POST",r=e,k()(t,{method:n,body:r}).then(A).catch(I);var t,n,r},T=Object(m.connect)((function(e){return{ListNews:e.ListNews}}),(function(e){return{onRemove:function(t){e(function(e){return function(t){return R(t,"/api/cms","DELETE",JSON.stringify({id:e}))}}(t))}}}))((function(e){var t=e.ListNews,n=e.onRemove,r=Object(f.useHistory)();return i.a.createElement("div",{className:""},t?t.map((function(e,t){return i.a.createElement("div",{key:t,className:"shadow mb-2"},i.a.createElement("div",{style:{background:"#af9b79"},className:"d-flex rounded"},i.a.createElement("div",{className:"align-self-center ml-2 rounded text-white flex-fill"},e.title),i.a.createElement(C.Button,{onClick:function(){return t=e.id,void r.push("/edit/".concat(t));var t},size:"sm",className:"m-2"},"Изменить"),i.a.createElement(C.Button,{onClick:function(){return n(e.id)},variant:"danger",size:"sm",className:"m-2"},"Удалить")))})):i.a.createElement("div",null,"Новостей нет"))}));n(19);function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var _=function(e){var t=e.file,n=D(Object(a.useState)(t),2),r=n[0],o=n[1];return Object(a.useEffect)((function(){var e=new FileReader;e.onload=function(e){return o(e.target.result)},e.readAsDataURL(t)})),i.a.createElement("img",{className:"w-25 mr-3",src:r,alt:"текст"})};function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var B=function(e){var t=e.value,n=void 0===t?"":t,r=e.setValue;return i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"exampleInputPassword1"},"Заголовок"),i.a.createElement("input",{style:{background:"#e3edef"},className:"form-control",onChange:function(e){return r(e.target.value)},value:n}))},U=function(e){var t=e.value,n=e.setValue,r=q(Object(a.useState)(),2),o=r[0],c=r[1];return i.a.createElement("div",null,i.a.createElement("input",{ref:function(e){return c(e)},style:{display:"none"},type:"file",name:"filedata",onChange:function(e){return n(e.target.files[0])}}),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"exampleInputPassword1"},"Картинка"),i.a.createElement("div",null,t?i.a.createElement(_,{file:t}):i.a.createElement("div",null)),i.a.createElement("button",{onClick:function(){return o.click()}},"Выберите картинку")))};function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var H=function(e){e.isEdit,e.value;var t=e.setValue,n=F(Object(a.useState)(y.EditorState.createEmpty()),2),r=n[0],o=n[1],c=F(Object(a.useState)(!1),2);c[0],c[1];return i.a.createElement("div",{style:{background:"#e3edef"},className:"rounded p-2"},i.a.createElement("div",{className:"btn-group btn-group-sm",role:"group"},i.a.createElement("div",null,i.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){o(y.RichUtils.toggleInlineStyle(r,"BOLD"))}},"Bold"),i.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){o(y.RichUtils.toggleInlineStyle(r,"ITALIC"))}},"Italic"),i.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){o(y.RichUtils.toggleInlineStyle(r,"CODE"))}},"Code"),i.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){o(y.RichUtils.toggleInlineStyle(r,"STRIKETHROUGH"))}},"Strikethrough"),i.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){o(y.RichUtils.toggleInlineStyle(r,"UNDERLINE"))}},"Underline"))),i.a.createElement(y.Editor,{editorState:r,onChange:function(e){t(Object(y.convertToRaw)(e.getCurrentContent())),o(e)},handleKeyCommand:function(e,t){var n=y.RichUtils.handleKeyCommand(t,e);return n?(o(n),"handled"):"not-handled"},placeholder:"Здесь можно печатать..."}))};function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var M=Object(m.connect)(null,(function(e){return{_onCreateNews:function(t,n,r){e(L(t,n,r.name));var o=new FormData;o.append("file",r),o.append("user","hubot"),P(o)}}}))((function(e){var t=e._onCreateNews,n=V(Object(a.useState)(),2),r=n[0],o=n[1],c=V(Object(a.useState)(),2),l=c[0],u=c[1],s=V(Object(a.useState)(),2),d=s[0],p=s[1],m=Object(f.useHistory)();return i.a.createElement("div",{style:{background:"#FFE3B3"},className:" shadow rounded mt-2 p-2 mb-4"},i.a.createElement(U,{value:d,setValue:p}),i.a.createElement(B,{value:r,setValue:o}),i.a.createElement(H,{isEdit:!1,value:l,setValue:u}),i.a.createElement("div",null,i.a.createElement(C.Button,{onClick:function(){}},"Предосмотр"),i.a.createElement(C.Button,{onClick:function(){t(r,l,d),m.push("/cms")}},"Создать"),i.a.createElement(C.Button,{onClick:function(){m.push("/cms")}},"Отмена")))})),K={component:function(e){var t=e.route,n=Object(f.useHistory)();return i.a.createElement(p,null,i.a.createElement("button",{className:"btn btn-add-news",onClick:function(){n.push("/cms/add")}},"Добавить новость"),Object(l.renderRoutes)(t.routes),i.a.createElement(T,null))}},J={component:function(){return i.a.createElement(M,null)}};function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var z=function(e){e.isEdit;var t=e.value,n=e.setValue,r=W(Object(a.useState)(y.EditorState.createWithContent(Object(y.convertFromRaw)(t))),2),o=r[0],c=r[1],l=W(Object(a.useState)(!1),2);l[0],l[1];return i.a.createElement("div",{style:{background:"#e3edef"},className:"rounded p-2"},i.a.createElement("div",{className:"btn-group btn-group-sm",role:"group"},i.a.createElement("div",null,i.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){c(y.RichUtils.toggleInlineStyle(o,"BOLD"))}},"Bold"),i.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){c(y.RichUtils.toggleInlineStyle(o,"ITALIC"))}},"Italic"),i.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){c(y.RichUtils.toggleInlineStyle(o,"CODE"))}},"Code"),i.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){c(y.RichUtils.toggleInlineStyle(o,"STRIKETHROUGH"))}},"Strikethrough"),i.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){c(y.RichUtils.toggleInlineStyle(o,"UNDERLINE"))}},"Underline"))),i.a.createElement(y.Editor,{editorState:o,onChange:function(e){n(Object(y.convertToRaw)(e.getCurrentContent())),c(e)},handleKeyCommand:function(e,t){var n=y.RichUtils.handleKeyCommand(t,e);return n?(c(n),"handled"):"not-handled"},placeholder:"Здесь можно печатать..."}))};function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Y=Object(m.connect)((function(e){return{ListNews:e.ListNews}}),(function(e){return{_onChangeNews:function(t,n,r,o){e(function(e,t,n,r){return function(o){return R(o,"/api/cms","PUT",JSON.stringify({id:e,title:t,description:n,fileName:r}))}}(t,n,r,o.name));var a=new FormData;a.append("file",o),a.append("user","hubot"),P(a)}}}))((function(e){var t=e.id,n=e.title,r=e.description,o=e._onChangeNews,c=G(Object(a.useState)(n),2),l=c[0],u=c[1];console.log("title - ",n);var s=G(Object(a.useState)(r),2),d=s[0],p=s[1];console.log("title - ",r);var m=G(Object(a.useState)(),2),y=m[0],b=m[1],v=Object(f.useHistory)();return i.a.createElement("div",{style:{background:"#FFE3B3"},className:" shadow rounded mt-2 p-2 mb-4"},i.a.createElement(U,{value:y,setValue:b}),i.a.createElement(B,{value:l,setValue:u}),i.a.createElement(z,{isEdit:!0,value:d,setValue:p}),i.a.createElement("div",null,i.a.createElement(C.Button,{onClick:function(){}},"Предосмотр"),i.a.createElement(C.Button,{onClick:function(){o(t,l,d,y),v.push("/cms")}},"Изменить"),i.a.createElement(C.Button,{onClick:function(){v.push("/cms")}},"Отмена")))}));n(20);function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var Z={component:Object(m.connect)((function(e){return{ListNews:e.ListNews}}),(function(e){return{_onCreateNews:function(t,n,r){e(L(t,n,r.name));var o=new FormData;o.append("file",r),o.append("user","hubot"),P(o)}}}))((function(e){var t=e.ListNews,n=e._onCreateNews,r=Object(f.useParams)().id,o=X(Object(a.useState)($(t,r)),2),c=o[0];o[1];return i.a.createElement(p,null,i.a.createElement(Y,Q({},c,{_onCreateNews:n})))}))},$=function(e,t){return e.filter((function(e){return e.id==t}))[0]},ee={component:function(e){e.route;return i.a.createElement(p,null,"404")}};function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){re(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var oe=[ne({},s,{routes:[ne({},O,{path:"/",exact:!0}),ne({},K,{path:"/cms",routes:[ne({},J,{path:"/cms/add"})]}),ne({},Z,{path:"/edit/:id"}),ne({},w,{path:"/news/:id"}),ne({},ee,{path:"*"})]})],ae=n(8),ie=n(11),ce=(n(21),"LOAD_LIST_NEWS"),le="ADD_NEWS",ue="REMOVE_NEWS",se="EDIT_NEWS",fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:case se:return{id:t.id,title:t.title,description:t.description,fileName:t.fileName};default:return e}};function de(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:return[fe({},t)].concat(de(e));case ue:return e.filter((function(e){return e.id!==t.id}));case se:return e.map((function(e){return e.id!=t.id?e:fe(e,t)}));default:return e}};function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){be(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function be(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return ye({},e,{ListNews:t.value});case le:case ue:case se:return ye({},e,{ListNews:pe(e.ListNews,t)});default:return e}},ge=n(9),he=n(12),Ee=n.n(he);function Oe(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var je=function(e){return function(t){return function(n){var r;return console.groupCollapsed("dispatching",n.type),console.log("prev state",e.getState()),console.log("action",n),r=t(n),console.log("next state",e.getState()),console.groupEnd(),r}}},Se=function(e){return function(e){return function(t){return console.log("\n dispatching server action\n"),console.log(t),console.log("\n"),e(t)}}},we=function(e){return[e?Se:je,Ee.a]},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(ge.createStore)(ve,t,ge.applyMiddleware.apply(void 0,Oe(we(e))))},Ce=n(13),xe=n.n(Ce),ke=n(14),Ae=n(22),Ie=Ae.diskStorage({destination:function(e,t,n){n(null,"uploads")},filename:function(e,t,n){n(null,t.originalname)}}),Re=Object(r.Router)(),Le=function(e,t,n){e.store.dispatch(n),t.status(200).json(n)};Re.get("/",(function(e,t){t.status(200).json(e.store.getState().ListNews)})),Re.post("/cms",(function(e,t){return Le(e,t,{type:le,id:Object(ke.v4)(),title:e.body.title,description:e.body.description,fileName:e.body.fileName})})),Re.use(Ae({storage:Ie}).any()),Re.post("/upload",(function(e,t,n){var r=e.files;console.log(r),r?t.send("Файл загружен"):t.send("Ошибка при загрузке файла")})),Re.put("/cms",(function(e,t){return Le(e,t,{type:se,id:e.body.id,title:e.body.title,description:e.body.description,fileName:e.body.fileName})})),Re.delete("/cms",(function(e,t){console.log(e.body),Le(e,t,{type:ue,id:e.body.id})}));var Pe=Re,Te=n(15),De=n.n(Te),_e=n(16),qe=n.n(_e),Be=Ne(!0,ie),Ue=o.a.static("uploads");Be.subscribe((function(){return De.a.writeFile("./data/initialState.json",JSON.stringify(Be.getState()),(function(e){return e?console.log("Error saving state!",e):null}))}));var Fe=o()();Fe.use(qe.a.json()),Fe.use(o.a.static("dist/public")),Fe.use("/edit",o.a.static("dist/public")),Fe.use("/news",o.a.static("dist/public")),Fe.use("/cms/add",o.a.static("dist/public")),Fe.use(Ue),Fe.use("/edit",Ue),Fe.use("/news",Ue),Fe.use((function(e,t,n){e.store=Be,n()})),Fe.use("/api",Pe),Fe.get("*",(function(e,t){console.log("req.url - ",e.url);var n=e.params[0].split("/"),r=n[2];console.log("params - ",n);var o=Object(l.matchRoutes)(oe,e.path);console.log("req.path - ",e.path),console.log("routes - ",o),console.log("routes.route.routes - ",o[0].route.routes),console.log("app-get -",e.path);var a=o.map((function(e){var t=e.route;return t.loadData?t.loadData(store,r):null})).map((function(e){return e?new Promise((function(t,n){e.then(t).catch(t)})):null}));console.log("promises - ",a),Promise.all(a).then((function(){console.log("+");var n={},r=function(e,t,n){console.log(t.getState());var r=Object(c.renderToString)(i.a.createElement(m.Provider,{store:t},i.a.createElement(f.StaticRouter,{location:e.path,context:n},i.a.createElement("div",null,Object(l.renderRoutes)(oe)))));return'<!DOCTYPE html>\n    <html>\n        <head>\n            <title>Universal React server bundle</title>\n            <link rel="stylesheet" href="'.concat(ae.a.main[0],'">\n        </head>\n        <body>\n\n            <div id="root">').concat(r,"</div>\n            <script>\n            window.__PRELOADED_STATE__ = ").concat(xe()(t.getState()).replace(/</g,"\\u003c"),'\n            <\/script>\n            <script src="').concat(ae.a.main[1],'"><\/script>\n\n        </body>\n    </html>')}(e,Be,n);console.log("-"),n.notFound&&t.status(404),t.send(r)}))})),Fe.listen(3e3),console.log("App is running on http://localhost:3000")}]);
//# sourceMappingURL=server.bundle.js.map