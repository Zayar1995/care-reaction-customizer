parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"aB1b":[function(require,module,exports) {
module.exports="https://raw.githubusercontent.com/chunza2542/care-reaction-customizer/master/src/images/body.png";
},{}],"gssC":[function(require,module,exports) {
module.exports="https://raw.githubusercontent.com/Zayar1995/care-reaction-customizer/master/src/images/hands.png";
},{}],"7QCb":[function(require,module,exports) {
"use strict";var t=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function u(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(u,a)}c((r=r.apply(t,e||[])).next())})},e=this&&this.__generator||function(t,e){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=e.call(t,u)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},r=this;Object.defineProperty(exports,"__esModule",{value:!0});var i=n(require("./images/body.png")),o=n(require("./images/hands.png")),u=document.getElementById("renderer"),a=u.getContext("2d");if(!a)throw new Error("Canvas context can't be null");var c=void 0,s=void 0,l=void 0,f=0,d=0,h=0,g=1;function w(t,e,n){var r=document.getElementById(t);if(!r)throw new Error(t+" must be existed");r.addEventListener(e,n,!1)}function v(){return c&&void 0!==s&&void 0!==l&&a}function p(){var t=document.getElementById("download"),e=u.toDataURL("image/png").replace("image/png","image/octet-stream");t&&(t.setAttribute("href",e),c&&u.toBlob(function(t){(new Image).src=t;var e=new Date,n=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+"--"+(e.getHours()+":"+e.getMinutes()+":"+e.getSeconds())+"--"+e.getTime();firebase.storage().ref().child("images/"+n+".png").put(t)}))}function m(t,e,n,r,i,o){a&&(a.save(),a.translate(e/2+r+(u.width/2-e/2),n/2-i+(u.width/2-n/2)),a.rotate(o*Math.PI/360),a.drawImage(t,-e/2,-n/2,e,n),a.restore())}w("uploader","change",function(n){var r=new FileReader;r.onload=function(n){a&&x(a,function(){return new Promise(function(r,i){var o=new Image;n.target?(o.onload=function(){return t(this,void 0,void 0,function(){return e(this,function(t){switch(t.label){case 0:return n.target?[4,y(n.target.result,o.width/2,o.height/2,0,0,0)]:[2];case 1:return t.sent(),c=n.target.result,s=o.width/2,l=o.height/2,r(),[2]}})})},o.src=n.target.result):i()})})},r.readAsDataURL(n.target.files[0])}),w("x-offset-input","input",function(n){v()&&(f=+n.target.value,x(a,function(){return new Promise(function(n,i){return t(r,void 0,void 0,function(){return e(this,function(t){switch(t.label){case 0:return c&&l&&s?[4,y(c,s*g,l*g,f,d,h)]:[2];case 1:return t.sent(),n(),[2]}})})})}))}),w("y-offset-input","input",function(n){c&&l&&s&&a&&(d=+n.target.value,x(a,function(){return new Promise(function(n,i){return t(r,void 0,void 0,function(){return e(this,function(t){switch(t.label){case 0:return c&&l&&s?[4,y(c,s*g,l*g,f,d,h)]:[2];case 1:return t.sent(),n(),[2]}})})})}))}),w("rotate-input","input",function(n){c&&l&&s&&a&&(h=+n.target.value,x(a,function(){return new Promise(function(n,i){return t(r,void 0,void 0,function(){return e(this,function(t){switch(t.label){case 0:return c&&l&&s?[4,y(c,s*g,l*g,f,d,h)]:[2];case 1:return t.sent(),n(),[2]}})})})}))}),w("scale-input","input",function(n){c&&l&&s&&a&&(g=+n.target.value,x(a,function(){return new Promise(function(n,i){return t(r,void 0,void 0,function(){return e(this,function(t){switch(t.label){case 0:return c&&l&&s?[4,y(c,s*g,l*g,f,d,h)]:[2];case 1:return t.sent(),n(),[2]}})})})}))}),window.download=p;var b={};function y(t,e,n,r,i,o){return new Promise(function(u,c){if(a)if(b[t])m(b[t],e,n,r,i,o),u(b[t]);else{var s=new Image;s.onload=function(){m(s,e,n,r,i,o),b[t]=s,u(s)},s.src=t}else c()})}function x(n,r){return t(this,void 0,void 0,function(){return e(this,function(t){switch(t.label){case 0:return n.clearRect(0,0,u.width,u.height),n.fillStyle="#fafafa",n.fillRect(0,0,u.width,u.height),[4,y(i.default,512,512,0,0,0)];case 1:return t.sent(),r?[4,r()]:[3,3];case 2:t.sent(),t.label=3;case 3:return[4,y(o.default,500,240,0,-90,0)];case 4:return t.sent(),[2]}})})}x(a,null);
},{"./images/body.png":"aB1b","./images/hands.png":"gssC"}]},{},["7QCb"], null)
//# sourceMappingURL=src.d7d53219.map
