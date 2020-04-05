(this["webpackJsonpzombie-path-finder"]=this["webpackJsonpzombie-path-finder"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=(n(14),n(2)),s=n(4);var l=n(8);function u(e,t){var n=[],a=!1;function r(){if(0!==n.length&&!a){a=!0;var o=n.shift();setTimeout((function(){e.apply(void 0,Object(l.a)(o)),a=!1,r()}),t)}}return{exec:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];n.push([].concat(t)),r()}}}var d=n(7),p=n.n(d);var f=function(e){var t=e.cell,n=t.row,a=t.col,o=t.isStart,c=t.isFinish,i=t.isVisited,s=t.isStacked,l=t.isPath,u=t.isBlocked,d=p()("cell",{"is-visited":i,"is-stacked":!i&&s,"is-path":l,"is-blocked":u});return r.a.createElement("div",{className:d,onClick:e.onClick},n,"-",a,o&&r.a.createElement("span",{role:"img","aria-label":"start"}," \ud83c\udfc3\u200d\u2642\ufe0f"),c&&r.a.createElement("span",{role:"img","aria-label":"finish"}," \ud83c\udfc1"))},m={board:[]};function h(e,t){var n=t.type,a=t.payload;switch(n){case"visit":case"stack":case"path":case"block":return Object(s.a)({},e,{board:e.board.map((function(e,t){return t!==a.row?e:e.map((function(e,t){return t!==a.column?e:Object(s.a)({},e,{isVisited:"visit"===n||e.isVisited,isStacked:"stack"===n||e.isStacked,isPath:"path"===n||e.isPath,isBlocked:"block"===n||e.isBlocked})}))}))});case"reset":return function(e){var t=e.rows,n=e.columns,a=e.start,r=e.finish;return Object(s.a)({},m,{board:Array(t).fill().map((function(e,t){return Array(n).fill().map((function(e,n){return{id:"".concat(t).concat(n),row:t,col:n,isStart:t===a.row&&n===a.column,isFinish:t===r.row&&n===r.column,isBlocked:!1,isVisited:!1,isStacked:!1,isPath:!1}}))}))})}(a);default:return e}}var v=function(e){var t=Object(a.useReducer)(h,m),n=Object(i.a)(t,2),o=n[0],c=n[1],s=Object(a.useState)(null),l=Object(i.a)(s,2),d=l[0],p=l[1];return Object(a.useEffect)((function(){c({type:"reset",payload:e.setup}),p({gridTemplate:"repeat(".concat(e.setup.rows,", 1fr) / repeat(").concat(e.setup.columns,", 1fr)")})}),[e.setup]),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){var t=new u(c,e.setup.stepDelay);(function(e,t,n,a,r){var o=[],c=[],i=e[t.row][t.column];return c.push(i),r(i.row,i.col),function t(o,c){if(0===c.length)return;var i=c.pop(),s=i.row,l=i.col;if(s===n.row&&l===n.column)return;o.push(i),a(s,l);var u=e[s-1]&&e[s-1][l];u&&-1===o.indexOf(u)&&!u.isBlocked&&(c.push(u),r(u.row,u.col));var d=e[s][l+1];d&&-1===o.indexOf(d)&&!d.isBlocked&&(c.push(d),r(d.row,d.col));var p=e[s+1]&&e[s+1][l];p&&-1===o.indexOf(p)&&!p.isBlocked&&(c.push(p),r(p.row,p.col));var f=e[s][l-1];f&&-1===o.indexOf(f)&&!f.isBlocked&&(c.push(f),r(f.row,f.col));t(o,c)}(o,c),o})(o.board,e.setup.start,e.setup.finish,(function(e,n){return t.exec({type:"visit",payload:{row:e,column:n}})}),(function(e,n){return t.exec({type:"stack",payload:{row:e,column:n}})})).forEach((function(e){return t.exec({type:"path",payload:{row:e.row,column:e.col}})}))}},"Calculate")),r.a.createElement("div",{className:"board",style:d},o.board.map((function(e){return e.map((function(e){return r.a.createElement(f,{cell:e,key:e.id,onClick:function(){return function(e){c({type:"block",payload:{row:e.row,column:e.col}})}(e)}})}))}))))};var w=function(){var e=Object(a.useState)({rows:10,columns:16,start:{row:1,column:14},finish:{row:7,column:12},stepDelay:10}),t=Object(i.a)(e,1)[0];return r.a.createElement("div",null,r.a.createElement(v,{setup:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.e414759d.chunk.js.map