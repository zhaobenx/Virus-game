!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=2)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Node=class{draw(){}update(t){}on_collision(t){}add(t){}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i(0);class r extends n.Node{}e.Shape=r;class s{constructor(t=0,e=0){this.x=t,this.y=e}norm(){return 0==this.x&&0==this.y?new s(1,0):(length=Math.sqrt(this.x*this.x+this.y*this.y),new s(this.x/length,this.y/length))}angle(){return 0==this.x&&0==this.y?0:Math.atan2(this.y,this.x)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}zero(){return 0==this.x&&0==this.y}clear(){this.x=0,this.y=0}}e.Vector2=s;e.Circle=class extends r{constructor(t,e,i,n){super(),this.x=t,this.y=e,this.radius=i,this.color=n}update_position(t,e){this.x+=Math.round(t),this.y+=Math.round(e)}draw(){this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.fillStyle=this.color,this.ctx.fill(),this.ctx.restore()}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i(3);const n=i(7);class r{constructor(t){this._game=t}setup(){requestAnimationFrame(this.gameLoop.bind(this))}gameLoop(t){requestAnimationFrame(this.gameLoop.bind(this)),this._lastTime||(this._lastTime=t);let e=(t-this._lastTime)/1e3;this._lastTime=t,document.getElementById("fps").innerText=`FPS:  ${(1/e).toFixed(2)}`,this._game.update(e)}}window.onload=()=>{new r(new n.VirusGame).setup()}},function(t,e,i){var n=i(4),r=i(5);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var s={insert:"head",singleton:!1},o=(n(r,s),r.locals?r.locals:{});t.exports=o},function(t,e,i){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},s=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),o=[];function a(t){for(var e=-1,i=0;i<o.length;i++)if(o[i].identifier===t){e=i;break}return e}function c(t,e){for(var i={},n=[],r=0;r<t.length;r++){var s=t[r],c=e.base?s[0]+e.base:s[0],h=i[c]||0,l="".concat(c," ").concat(h);i[c]=h+1;var u=a(l),d={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(o[u].references++,o[u].updater(d)):o.push({identifier:l,updater:m(d,e),references:1}),n.push(l)}return n}function h(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var r=i.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var o=s(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var l,u=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function d(t,e,i,n){var r=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=u(e,r);else{var s=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function f(t,e,i){var n=i.css,r=i.media,s=i.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),s&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var p=null,g=0;function m(t,e){var i,n,r;if(e.singleton){var s=g++;i=p||(p=h(e)),n=d.bind(null,i,s,!1),r=d.bind(null,i,s,!0)}else i=h(e),n=f.bind(null,i,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var i=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<i.length;n++){var r=a(i[n]);o[r].references--}for(var s=c(t,e),h=0;h<i.length;h++){var l=a(i[h]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}i=s}}}},function(t,e,i){(e=i(6)(!1)).push([t.i,"html, body {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\ncanvas {\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n#fps {\r\n    position: absolute;\r\n    z-index: 10;\r\n}",""]),t.exports=e},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var r=(o=n,a=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),s=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[i].concat(s).concat([r]).join("\n")}var o,a,c;return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(n)for(var s=0;s<this.length;s++){var o=this[s][0];null!=o&&(r[o]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);n&&r[c[0]]||(i&&(c[2]?c[2]="".concat(i," and ").concat(c[2]):c[2]=i),e.push(c))}},e}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i(1),r=i(8);var s;!function(t){t[t.Health=0]="Health",t[t.Incubation=1]="Incubation",t[t.Sick=2]="Sick",t[t.Immune=3]="Immune"}(s||(s={}));class o extends n.Circle{constructor(t,e=s.Health){super(t.x,t.y,4,""),this.speed=60,this.velocity=new n.Vector2(Math.random(),Math.random()),this.state=s.Health,this.state=e,this.update_color()}update(t){if(this.velocity.zero()){let e=(Math.random()-.5)*this.speed,i=(Math.random()-.5)*this.speed;this.update_position(e*t,i*t)}else this.update_position(this.velocity.x*t,this.velocity.y*t),this.velocity.clear()}infect(){this.state==s.Health&&(this.state=s.Incubation,this.update_color(),setTimeout(()=>{this.state=s.Sick,this.update_color()},2e3))}update_color(){this.state==s.Health?this.color="green":this.state==s.Incubation?this.color="orange":this.state==s.Sick?this.color="red":this.state==s.Immune&&(this.color="blue")}on_collision(t){this.state!=s.Sick&&this.state!=s.Incubation||t.state!=s.Health||(t.infect(),console.log("infect"))}}function a(t,e,i){i*=Math.random();let r=2*Math.random()*Math.PI;return new n.Vector2(t+i*Math.sin(r),e+i*Math.cos(r))}class c extends r.Game{init(){this.detect_collision=16;let t=new o(a(300,300,200),s.Sick);this.add(t);for(let t=0;t<400;t++){let t=new o(a(300,300,200));this.add(t)}}}e.VirusGame=c},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i(0),r=i(9);class s extends n.Node{constructor(){super(),this.height=1e3,this.width=800,this.detect_collision=0,this.canvas=document.getElementById("canvas"),this.canvas.width=this.width,this.canvas.height=this.height,this.contex=this.canvas.getContext("2d"),this.children=new Array,this.init(),this.detect_collision&&(this.collision_manager=new r.CollisionManager(this.detect_collision,this.width,this.height),this.children.forEach(t=>{this.collision_manager.add(t)}))}init(){}add(t){t.ctx=this.contex,this.children.push(t)}update(t){this.detect_collision&&this.collision_manager.update(t),this.contex.clearRect(0,0,this.canvas.width,this.canvas.height),this.children.forEach(e=>{e.update(t),e.draw()})}}e.Game=s},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n=i(0),r=i(1);class s extends n.Node{constructor(t,e,i){super(),this.grid_size=t,this.width=e,this.height=i,this.grid=new Array,this.children=new Array;for(let t=0;t<Math.ceil(this.height/this.grid_size);t++){let t=new Array;for(let e=0;e<Math.ceil(this.width/this.grid_size);e++)t.push(new Array);this.grid.push(t)}}add(t){this.children.push(t)}update(t){this.grid.forEach(t=>{t.forEach(t=>{t.splice(0,t.length)})}),this.children.forEach(t=>{if(t instanceof r.Circle){let e=t.x/this.grid_size;e=Math.round(e);let i=t.y/this.grid_size;i=Math.round(i),e<0||e>Math.floor(this.height/this.grid_size)||i<0||i>Math.floor(this.width/this.grid_size)||this.grid[Math.round(e)][Math.round(i)].push(t)}}),this.grid.forEach(t=>{t.forEach(t=>{if(t.length>1)for(let e=0;e<t.length-1;e++)for(let i=1;i<t.length;i++){let n=t[e],r=t[i];(n.x-r.x)*(n.x-r.x)+(n.y-r.y)*(n.y-r.y)<(n.radius+r.radius)*(n.radius+r.radius)&&n.on_collision(r)}})})}}e.CollisionManager=s}]);