(this.webpackJsonp2048=this.webpackJsonp2048||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),i=n(8),c=n.n(i),a=(n(13),n(3)),u=n(4),s=n(2),l=[0,1,2,3],f=function(t,e){var n,r;return null===t&&null===e||(t&&(null===(n=Object.keys(t))||void 0===n?void 0:n.length))===(e&&(null===(r=Object.keys(e))||void 0===r?void 0:r.length))&&Object.keys(t).every((function(n){return t[n]===e[n]}))},d=function(t,e){return j(t,(function(t){return t.positionY}),(function(t,e){return t.positionY=e}),e)},v=function(t,e){return j(t,(function(t){return t.positionX}),(function(t,e){return t.positionX=e}),e)},j=function(t,e,n,r){if(0===t.length)return[];var o=JSON.parse(JSON.stringify(t));o.sort((function(t,n){return e(t)-e(n)}));for(var i="left"===r?0:4-o.length,c=0;c<o.length;c++)n(o[c],i+c);"left"===r&&o.reverse();for(var a=o.length-1;a>=1;)if(o[a].value!==o[a-1].value||2048===o[a].value)a--;else{for(var u=0;u<=a-1;u++){var s="right"===r?1:-1;n(o[u],e(o[u])+s)}a-=2}return o},h=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,e=[];t>0;)e=[].concat(Object(u.a)(e),[m(e)]),t--;return e},m=function(t){var e=function(t){return[Math.floor(t/4),t%4]};Math.floor(16*Math.random());for(var n=Math.floor(16*Math.random()),r=e(n);b.apply(void 0,[t].concat(Object(u.a)(r)));)r=e(n=15===n?0:n+1);var o=Math.random()<.05?4:2;return{id:g(t),value:o,type:"new",positionX:r[0],positionY:r[1]}},b=function(t,e,n){return t.some((function(t){return t.positionX===e&&t.positionY===n}))},O=function(t,e){return t.filter((function(t){return t.positionX===e}))},p=function(t,e){return t.filter((function(t){return t.positionY===e}))},g=function(t){return y(t)+1},y=function(t){return Math.max.apply(Math,[0].concat(Object(u.a)(t.map((function(t){return t.id})))))},x={up:function(t){return l.map((function(e){return v(p(t,e),"left")})).flat()},down:function(t){return l.map((function(e){return v(p(t,e),"right")})).flat()},right:function(t){return l.map((function(e){return d(O(t,e),"right")})).flat()},left:function(t){return l.map((function(e){return d(O(t,e),"left")})).flat()}},w=420,E=520,N=73,M=97,C=121,R={ArrowUp:"up",ArrowDown:"down",ArrowRight:"right",ArrowLeft:"left",w:"up",s:"down",d:"right",a:"left"},A=(n(14),n(0)),S=Object(r.memo)((function(t){return Object(A.jsx)("div",{className:"tile tile-".concat(t.value),style:{transform:"translate(".concat(t.x,"px, ").concat(t.y,"px)")},children:Object(A.jsx)("div",{className:"tileInner ".concat(t.type),children:t.value})})})),I=(n(16),function(t){return Object(A.jsx)("div",{children:t.tiles.map((function(e){return Object(A.jsx)(S,{value:e.value,type:e.type,x:e.positionY*t.factor,y:e.positionX*t.factor},e.id)}))})}),k=function(t){var e=Object(r.useState)(L()),n=Object(a.a)(e,2),o=n[0],i=n[1];Object(r.useEffect)((function(){var t=function(){i(L())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]);var c=t.tiles.sort((function(t,e){return t.id-e.id}));return Object(A.jsx)("div",{className:"tileContainer",children:Object(A.jsx)(I,{tiles:c,factor:o})})},L=function(){return window.innerWidth<=w?N:window.innerWidth<=E?M:C},W=(n(17),function(t){var e=t.id,n=t.children,r=t.className,o=t.onClick;return Object(A.jsx)("button",{id:e,className:"appButton ".concat(r||""),onClick:o,children:n})}),Y={WIN:{message:"Congratulations! You Win!",buttonText:"Play again",containerClass:"gameResultWin"},GAME_OVER:{message:"Game Over!",buttonText:"Try again",containerClass:"gameResultLose"}},_=function(t){var e=t.isWin,n=t.onContinue,r=t.onRestart,o=t.playAfterWin,i=e||o?Y.WIN:Y.GAME_OVER,c=i.message,a=i.buttonText,u=i.containerClass;return Object(A.jsxs)("div",{className:"gameResult ".concat(u),children:[Object(A.jsx)("p",{children:c}),Object(A.jsxs)("div",{children:[e&&Object(A.jsx)(W,{className:"continueButton",onClick:function(){return n()},children:"Continue"}),Object(A.jsx)(W,{onClick:function(){return r()},children:a})]})]})},G=function(t){var e=it(),n=e.gameState,r=e.dispatch,o=n.status,i=t.tiles.some((function(t){return 2048===t.value}));return Object(A.jsx)(A.Fragment,{children:"IN_PROGRESS"!==o&&"PLAY_AFTER_WIN"!==o&&Object(A.jsx)(_,{isWin:"WIN"===o,playAfterWin:i,onRestart:function(){r({type:"restart"})},onContinue:function(){r({type:"continue"})},status:o})})},T=function(){var t=Array.from(Array(4).keys()).map((function(t){var e=Array.from(Array(4).keys()).map((function(t){return Object(A.jsx)("div",{className:"cell"},t)}));return Object(A.jsx)("div",{className:"row",children:e},t)}));return Object(A.jsx)("div",{className:"gridContainer",children:t})},P=function(t){return Object(A.jsxs)("div",{id:"boardContainer",children:[Object(A.jsx)(G,{tiles:t.tiles}),Object(A.jsx)(T,{}),Object(A.jsx)(k,{tiles:t.tiles})]})},X=(n(18),function(){var t=it().gameState,e=Object(r.useReducer)(F,J()),n=Object(a.a)(e,2),o=n[0],i=n[1];return Object(r.useEffect)((function(){i({type:"addMove",payload:t})}),[t]),Object(r.useEffect)((function(){o.moves.length<2||o.loading||(i({type:"startMove"}),setTimeout((function(){i({type:"endMove"})}),100))}),[o]),Object(A.jsx)(P,{tiles:o.tiles})});function F(t,e){switch(e.type){case"addMove":return!e.payload.lastMove||0===t.tiles.length?J(e.payload):Object(s.a)(Object(s.a)({},t),{},{moves:[].concat(Object(u.a)(t.moves),[e.payload])});case"startMove":var n=t.moves[0],r=t.moves[1],o=x[r.lastMove](n.tiles);return Object(s.a)(Object(s.a)({},t),{},{loading:!0,tiles:o});case"endMove":var i=t.moves[1];return{moves:t.moves.slice(1),loading:!1,tiles:i.tiles};default:throw new Error("Unhandled action: ".concat(e))}}var J=function(t){return t?{moves:[t],loading:!1,tiles:t.tiles}:{moves:[],loading:!1,tiles:[]}},B=null,V=null,D=function(){var t=it().dispatch;return Object(r.useEffect)((function(){function e(t){if(1===t.touches.length){var e=t.touches[0];B=e.clientX,V=e.clientY}}function n(e){if(B&&V&&!(e.touches.length>0)){var n=e.changedTouches[0],r=n.clientX,o=n.clientY,i=B-r,c=V-o;Math.abs(i)>Math.abs(c)?t(i<0?{type:"move",payload:"right"}:{type:"move",payload:"left"}):t(c<0?{type:"move",payload:"down"}:{type:"move",payload:"up"}),B=null,V=null}}var r=document.getElementById("boardContainer");return r.addEventListener("touchstart",e),r.addEventListener("touchend",n),function(){r.removeEventListener("touchstart",e),r.removeEventListener("touchend",n)}}),[t]),Object(A.jsx)(X,{})},U=(n(19),n(20),function(){return Object(A.jsx)("span",{className:"gameTitle",children:"2048"})}),z=function(){return Object(A.jsxs)("div",{children:[Object(A.jsxs)("span",{children:["Join the numbers to get ",Object(A.jsx)("b",{children:"2048"}),"!"]}),Object(A.jsx)("br",{})]})},q=function(){var t=it().dispatch;return Object(A.jsxs)("div",{className:"header",children:[Object(A.jsxs)("div",{className:"gameIntro",children:[Object(A.jsx)(U,{}),Object(A.jsx)(z,{})]}),Object(A.jsx)("div",{className:"actions",children:Object(A.jsx)(W,{id:"restartGameBtn",onClick:function(e){return t({type:"restart"})},children:"New Game"})})]})},H="2048-game",K=function(t,e){return"function"===typeof e?e(t):e},Q=function(t,e){try{var n=JSON.parse(window.localStorage.getItem(H)),r=null===n||void 0===n?void 0:n[t];return null!==r&&void 0!==r?r:e}catch(o){return console.log(o),e}};var Z=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:K,o=Object(r.useReducer)(n,Q(t,e)),i=Object(a.a)(o,2),c=i[0],u=i[1];return Object(r.useEffect)((function(){var e=JSON.parse(window.localStorage.getItem(H))||{};e[t]=c,window.localStorage.setItem(H,JSON.stringify(e))}),[c,t]),[c,u]},$=o.a.createContext(null),tt=function(t){return function(t){if(t.length<16||function(t){for(var e={},n=0;n<t.length;n++){var r="".concat(t[n].positionX).concat(t[n].positionY);if(e[r])return!0;e[r]=!0}return!1}(t))return!1;for(var e=function(t,e,n){return t.some((function(t){return e.some((function(e){return n(t)===n(e)&&t.value===e.value}))}))},n=0;n<3;n++)if(e(O(t,n),O(t,n+1),(function(t){return t.positionY}))||e(p(t,n),p(t,n+1),(function(t){return t.positionX})))return!1;return!0}(t)?"GAME_OVER":function(t){return t.some((function(t){return 2048===t.value}))}(t)?"WIN":"IN_PROGRESS"},et=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return{tiles:h(t),lastMove:null,status:"IN_PROGRESS"}};function nt(t,e){switch(e.type){case"restart":return et();case"continue":return Object(s.a)(Object(s.a)({},t),{},{status:"PLAY_AFTER_WIN"});case"move":var n=(0,x[e.payload])(t.tiles);if(i=t.tiles,c=n,i.every((function(t){return c.some((function(e){return f(t,e)}))})))return t;n=function(t){var e=g(t),n={};return t.forEach((function(t){var r="".concat(t.positionX).concat(t.positionY);if(n[r]){var o=2*t.value;n[r]=Object(s.a)(Object(s.a)({},t),{},{id:e++,value:o,type:"merged"})}else n[r]=t})),Object.values(n)}(n),n=[].concat(Object(u.a)(n),[m(n)]);var r=tt(n),o="PLAY_AFTER_WIN"!==t.status||"GAME_OVER"===r;return{tiles:n,lastMove:e.payload,status:o?r:t.status};default:throw new Error("Unhandled action: ".concat(e))}var i,c}var rt=function(t){var e=Z("game",et(),nt),n=Object(a.a)(e,2),o=n[0],i=n[1];return Object(r.useEffect)((function(){var t=function(t){t.preventDefault();var e=R[t.key];e&&i({type:"move",payload:e})};return document.addEventListener("keydown",t),function(){document.removeEventListener("keydown",t)}}),[i]),Object(A.jsx)($.Provider,{value:{gameState:o,dispatch:i},children:t.children})},ot=function(){return Object(A.jsx)(rt,{children:Object(A.jsx)("div",{className:"container",children:Object(A.jsxs)("div",{className:"gameContainer",children:[Object(A.jsx)(q,{}),Object(A.jsx)(D,{})]})})})};function it(){var t=Object(r.useContext)($);if(void 0===t)throw new Error("useGameContext must be used within a GameContextProvider");return t}var ct=function(){return Object(A.jsx)("div",{children:Object(A.jsx)("main",{children:Object(A.jsx)(ot,{})})})},at=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),r(t),o(t),i(t),c(t)}))};c.a.render(Object(A.jsx)(o.a.StrictMode,{children:Object(A.jsx)(ct,{})}),document.getElementById("root")),at()}],[[21,1,2]]]);
//# sourceMappingURL=main.bfe71785.chunk.js.map