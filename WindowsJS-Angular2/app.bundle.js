webpackJsonp([0],[function(t,exports,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var e=n(1),i=o(e),a=n(3),r=o(a),s=n(4),c=o(s),d=n(15),p=o(d),l=n(34),u=o(l);n(38),i["default"].module("app",[r["default"],c["default"].name,p["default"].name]).config(["$locationProvider",function(t){"ngInject";t.html5Mode(!0).hashPrefix("!")}]).component("app",u["default"])},,,,function(t,exports,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var e=n(1),i=o(e),a=n(5),r=o(a),s=n(13),c=o(s),d=i["default"].module("app.common",[r["default"].name,c["default"].name]);exports["default"]=d,t.exports=exports["default"]},function(t,exports,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var e=n(1),i=o(e),a=n(3),r=o(a),s=n(6),c=o(s),d=i["default"].module("navbar",[r["default"]]).component("navbar",c["default"]);exports["default"]=d,t.exports=exports["default"]},function(t,exports,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var e=n(7),i=o(e),a=n(8),r=o(a);n(9);var s={restrict:"E",bindings:{},template:i["default"],controller:r["default"],controllerAs:"vm"};exports["default"]=s,t.exports=exports["default"]},function(t,exports){t.exports='<nav class="navbar">\r\n  <div class="logo">\r\n    <h1><a ui-sref="home">{{ vm.name }}</a></h1>\r\n  </div>\r\n  <div class="nav-links">\r\n    <span><a ui-sref="about">about</a></span>\r\n  </div>\r\n</nav>\r\n'},function(t,exports){"use strict";function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var o=function e(){n(this,e),this.name="navbar"};exports["default"]=o,t.exports=exports["default"]},function(t,exports,n){var o=n(10);"string"==typeof o&&(o=[[t.id,o,""]]);n(12)(o,{});o.locals&&(t.exports=o.locals)},function(t,exports,n){exports=t.exports=n(11)(),exports.push([t.id,"@import url(http://fonts.googleapis.com/css?family=Roboto);",""]),exports.push([t.id,"body{height:100%;font:62.5% Roboto,sans-serif}.navbar{height:6.5rem;background-color:#0277bd;padding:1rem}.navbar .logo,.navbar .nav-links{display:inline-block}.navbar .logo{color:#f5f5f5;margin-right:50%}.navbar .nav-links span{color:#f5f5f5;font-size:1.6rem}",""])},,,function(t,exports,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var e=n(1),i=o(e),a=n(14),r=o(a),s=i["default"].module("user",[]).factory("User",r["default"]);exports["default"]=s,t.exports=exports["default"]},function(t,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){var t={},n=function(){return t},o=function(){return t.isSignedIn};return{getUser:n,isSignedIn:o}};exports["default"]=n,t.exports=exports["default"]},function(t,exports,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var e=n(1),i=o(e),a=n(16),r=o(a),s=n(22),c=o(s),d=n(28),p=o(d),l=i["default"].module("app.components",[r["default"].name,c["default"].name,p["default"].name]);exports["default"]=l,t.exports=exports["default"]},function(t,exports,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var e=n(1),i=o(e),a=n(3),r=o(a),s=n(17),c=o(s),d=i["default"].module("home",[r["default"]]).config(["$stateProvider","$urlRouterProvider",function(t,n){"ngInject";n.otherwise("/"),t.state("home",{url:"/",template:"<home></home>"})}]).component("home",c["default"]);exports["default"]=d,t.exports=exports["default"]},function(t,exports,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var e=n(18),i=o(e),a=n(19),r=o(a);n(20);var s={restrict:"E",bindings:{},template:i["default"],controller:r["default"],controllerAs:"vm"};exports["default"]=s,t.exports=exports["default"]},function(t,exports){t.exports='<!-- <main>\r\n  <div>\r\n    <h1>Found in {{ vm.name }}.html</h1>\r\n  </div>\r\n</main> -->\r\n<desktop class="{{vm.className}}"></desktop>\r\n<!-- <taskbar></taskbar> -->'},function(t,exports){"use strict";function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var o=function(){function t(t,n){for(var o=0;o<n.length;o++){var e=n[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,o,e){return o&&t(n.prototype,o),e&&t(n,e),n}}(),e=function(){function t(){n(this,t),this.name="home",this.availableClasses=["xp","win7","win10"],this.classIndex=0,this.className=this.getClassName()}return o(t,[{key:"getClassName",value:function(){return this.availableClasses[this.classIndex]}},{key:"nextClassName",value:function(){this.classIndex++,this.className=this.getClassName()}}]),t}();exports["default"]=e,t.exports=exports["default"]},function(t,exports,n){var o=n(21);"string"==typeof o&&(o=[[t.id,o,""]]);n(12)(o,{});o.locals&&(t.exports=o.locals)},function(t,exports,n){exports=t.exports=n(11)(),exports.push([t.id,".abs{position:absolute;top:auto;left:auto;right:auto;bottom:auto}",""])},function(t,exports,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var e=n(1),i=o(e),a=n(3),r=o(a),s=n(23),c=o(s),d=i["default"].module("taskbar",[r["default"]]).component("taskbar",c["default"]);exports["default"]=d,t.exports=exports["default"]},function(t,exports,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var e=n(24),i=o(e),a=n(25),r=o(a);n(26);var s={restrict:"E",bindings:{},template:i["default"],controller:r["default"],controllerAs:"vm"};exports["default"]=s,t.exports=exports["default"]},function(t,exports){t.exports="<div class='start-wrapper'>\r\n    <div class=\"start-icon\"> <span>Start</span> </div>\r\n    <div class='start-menu'>\r\n        <div class='user'>\r\n            <span>User</span>\r\n        </div>\r\n        <div class='inner'><!--\r\n         --><ul class='left-list'>\r\n                <li class='switch'> Switch Themes </li>\r\n                <li> Program 1 </li>\r\n                <li> Program 2 </li>\r\n                <li> Program 3 </li>\r\n\r\n                <li> Program 4 </li>\r\n                <li> Program 5 </li>\r\n                <li> Program 6 </li>\r\n\r\n                <li> All Programs </li>\r\n            </ul><!--\r\n             --><ul class='right-list'>\r\n                <li> My Documents </li>\r\n                <li> My Computer </li>\r\n                <li> Control Panel </li>\r\n                <li> Set Program Access and Defaults </li>\r\n                <li> Help and Support </li>\r\n                <li> Search </li>\r\n                <li> Run </li>\r\n            </ul><!--\r\n             --></div>\r\n        <div class='power'>\r\n            <span> Log Off </span>\r\n            <span> Turn Off Computer </span>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<div class=\"taskbar-dock\">\r\n    <div class='dock-windows'> </div>\r\n    <div class=\"notification-area\"></div>\r\n</div>"},function(t,exports){"use strict";function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var o=function e(){n(this,e),this.name="taskbar"};exports["default"]=o,t.exports=exports["default"]},function(t,exports,n){var o=n(27);"string"==typeof o&&(o=[[t.id,o,""]]);n(12)(o,{});o.locals&&(t.exports=o.locals)},function(t,exports,n){exports=t.exports=n(11)(),exports.push([t.id,'taskbar{position:absolute;bottom:0;left:0;width:100%;height:40px;background:linear-gradient(#1378fd 10%,#03469e);border-top:none;z-index:13;display:-webkit-flex;display:flex;opacity:1}taskbar .start-wrapper{width:100px;height:100%;transition:background .3s ease;border-radius:0 20px 20px 0;border-radius:8px/24px;position:absolute;color:#fff;left:-10px}taskbar .start-wrapper .start-menu{position:absolute;bottom:100%;left:10px;width:350px;color:#000;background:#fff;display:none}taskbar .start-wrapper .taskbar-icon{width:30px;height:30px}taskbar .taskbar-dock{height:100%;width:calc(100% - 90px);position:absolute;left:90px}taskbar .taskbar-dock .dock-windows{width:calc(100% - 200px);color:#fff;display:flex}taskbar .taskbar-dock .notification-area{position:absolute;width:200px;height:100%;display:inline-block;right:0;background:#1e87f7;top:0}taskbar .taskbar-dock .taskbar-icon-contain{width:50px;height:50px;background:transparent;top:0;left:0;position:relative;transition:background .3s ease,height .3s ease,width .3s ease,top .3s ease,opacity .5s linear;border:1px solid rgba(240,248,255,0)}taskbar .taskbar-dock .taskbar-icon-contain.hidden{opacity:0;height:0;width:0}taskbar .taskbar-dock .taskbar-icon-contain:hover{background:rgba(240,248,255,.25);border:1px solid rgba(240,248,255,.25);border-radius:5px}taskbar .taskbar-dock .taskbar-icon-contain:hover .icon-grouping{max-height:80vh;transition:max-height .3s ease}taskbar .taskbar-dock .taskbar-icon-contain .icon-grouping{position:absolute;bottom:50px;left:0;display:block;height:auto;width:100%;max-height:0;overflow:hidden;transition:bottom .3s ease,max-height .3s ease;transition-delay:0;color:#000;border-radius:5px 5px 0 0}taskbar .taskbar-dock .taskbar-icon-contain .icon-grouping .taskbar-icon-child{width:100%;height:50px;background:rgba(240,248,255,.5);transition:background .3s ease;position:relative;padding-left:40px}taskbar .taskbar-dock .taskbar-icon-contain .icon-grouping .taskbar-icon-child:hover{background:rgba(240,248,255,.85)}taskbar .taskbar-dock .taskbar-icon-contain .icon-grouping .taskbar-icon-child:before{content:"";width:calc(100% - 40px);text-align:center;height:100%;top:25%;position:absolute;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-right:10px}taskbar .taskbar-dock .taskbar-icon-contain .icon-grouping .taskbar-icon-child[title=mycomputer]:before{content:"My Computer"}taskbar .taskbar-dock .taskbar-icon-contain .icon-grouping .taskbar-icon-child[title=mydocuments]:before{content:"My Documents"}taskbar .taskbar-dock .taskbar-icon-contain .icon-grouping .taskbar-icon-child[title=browser]:before{content:"Inception Browser"}taskbar .taskbar-dock .taskbar-icon-contain .icon-grouping .taskbar-icon-child[title=recyclebin]:before{content:"Recycle Bin"}taskbar .taskbar-dock .taskbar-icon-contain .icon-grouping .taskbar-icon-child[title=weather]:before{content:"Weather"}taskbar .taskbar-dock .taskbar-icon-contain .icon-grouping .taskbar-icon-child .taskbar-icon{width:100%;height:100%}taskbar .taskbar-dock .taskbar-icon-contain .icon-grouping .taskbar-icon{height:30px}taskbar .taskbar-dock .taskbar-icon-contain .iconActiveColor{display:none;background:$orange;position:absolute;height:0;top:0;left:0;width:100%;transition:height .3s ease,top .3s ease}taskbar .taskbar-dock .taskbar-icon-contain .taskbar-icon{width:25px;height:25px}taskbar .taskbar-dock .taskbar-icon-contain .context-menu{border:1px solid $orange;position:absolute;bottom:50%;left:50%;background:$black80;color:#fff;width:100px;height:auto;padding:5px;transition:all .3s ease;z-index:1}taskbar .taskbar-dock .taskbar-icon-contain .context-menu.hidden{height:0;overflow:hidden;padding:0;border:none}taskbar .taskbar-dock .taskbar-icon-contain .context-menu li{background:$gray28;padding:3px}taskbar .taskbar-dock .taskbar-icon-contain .context-menu li:hover{background:$gray20}.xp taskbar .start-wrapper{transition:all .2s linear;background:-webkit-radial-gradient(circle,#01c101,#018c01);background:radial-gradient(circle,#02a902,#027902)}.xp taskbar .start-wrapper.active{background:radial-gradient(circle,#01c101,#018c01);box-shadow:inset 0 0 10px rgba(0,0,0,.5)}.xp taskbar .start-wrapper.active .start-menu{display:block}.xp taskbar .start-wrapper.button-active,.xp taskbar .start-wrapper:hover{background:radial-gradient(circle,#01c101,#018c01)}.xp taskbar .start-wrapper .start-icon{width:60%;height:25px;display:inline-block;position:absolute;left:10px;width:100%;padding:8px}.xp taskbar .start-wrapper .start-icon:before{background:url("/images/icons/winxp-icon.png") 50% no-repeat;content:\'\';height:100%;width:30px;position:absolute;left:5px;background-size:contain}.xp taskbar .start-wrapper .start-icon span{color:#fff;position:absolute;right:25px;top:13px;font-weight:700;font-style:italic}.xp taskbar .start-wrapper .start-menu{position:absolute;bottom:100%;left:10px;width:350px;color:#000;background:#fff;border-radius:5px 5px 0 0;border-right:2px solid #0854b8;display:none}.xp taskbar .start-wrapper .start-menu .user{background:linear-gradient(#03469e 10%,#1378fd);border-radius:5px 5px 0 0;height:50px;padding:5px}.xp taskbar .start-wrapper .start-menu .inner{height:200px}.xp taskbar .start-wrapper .start-menu .inner ul{display:inline-block;vertical-align:top;width:50%;height:100%;padding:5px}.xp taskbar .start-wrapper .start-menu .inner .left-list{font-size:1.2em}.xp taskbar .start-wrapper .start-menu .inner .right-list{font-size:.95em;background:#51a2f9;border-left:2px solid #1276fa}.xp taskbar .start-wrapper .start-menu .power{background:linear-gradient(#1378fd 10%,#03469e);height:40px;padding:5px}.xp taskbar .dock-windows .taskbar-icon-contain{display:inline-block;width:185px;padding-left:40px}.xp taskbar .dock-windows .taskbar-icon-contain:before{content:"";width:calc(100% - 40px);text-align:center;height:100%;top:25%;position:absolute;padding-right:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.xp taskbar .dock-windows .taskbar-icon-contain[title=mycomputer]:before{content:"My Computer"}.xp taskbar .dock-windows .taskbar-icon-contain[title=mydocuments]:before{content:"My Documents"}.xp taskbar .dock-windows .taskbar-icon-contain[title=browser]:before{content:"Inception Browser"}.xp taskbar .dock-windows .taskbar-icon-contain[title=recyclebin]:before{content:"Recycle Bin"}.xp taskbar .dock-windows .taskbar-icon-contain[title=weather]:before{content:"Weather"}.xp taskbar .dock-windows .taskbar-icon-contain .taskbar-icon{width:30px;height:30px}.xp taskbar .dock-windows .taskbar-icon-contain .taskbar-icon:before{background-image:url("/images/icons/icons-xp.png");height:40px;width:35px;background-size:130px;position:absolute;left:0;top:0;content:""}.xp taskbar .dock-windows .taskbar-icon-contain .taskbar-icon.mycomputer:before{background-position:0 0}.xp taskbar .dock-windows .taskbar-icon-contain .taskbar-icon.mydocuments:before{background-position:0 -103px}.xp taskbar .dock-windows .taskbar-icon-contain .taskbar-icon.recyclebin:before{background-position:-4px -68px}.xp taskbar .dock-windows .taskbar-icon-contain .taskbar-icon.browser:before{background-position:6px 3px;background-image:url("/images/icons/spin-top.png");background-size:75%;background-repeat:no-repeat}.xp taskbar .dock-windows .taskbar-icon-contain .taskbar-icon.weather:before{background-size:85%;background-repeat:no-repeat;background-image:url("/images/icons/weather.png");background-position:5px 10px;-webkit-filter:brightness(3);filter:brightness(3)}.xp taskbar .dock-windows .taskbar-icon-contain .taskbar-icon-child .taskbar-icon.weather:before{filter:none;-webkit-filter:none}',""])},function(t,exports,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var e=n(1),i=o(e),a=n(3),r=o(a),s=n(29),c=o(s),d=i["default"].module("desktop",[r["default"]]).component("desktop",c["default"]);exports["default"]=d,t.exports=exports["default"]},function(t,exports,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var e=n(30),i=o(e),a=n(31),r=o(a);n(32);var s={restrict:"E",bindings:{},template:i["default"],controller:r["default"],controllerAs:"vm"};exports["default"]=s,t.exports=exports["default"]},function(t,exports){t.exports='<!-- <div>\r\n  <h1>{{ vm.name }}</h1>\r\n</div>\r\n -->\r\n<div class="abs xp" id="wrapper">\r\n\r\n    <div class="abs" id="desktop">\r\n\r\n        <div class="desktop-contain"></div>\r\n\r\n    </div>\r\n\r\n    <taskbar class=\'{{vm.className}}\'></taskbar>\r\n\r\n</div>'},function(t,exports){"use strict";function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var o=function e(){n(this,e),this.name="desktop"};exports["default"]=o,t.exports=exports["default"]},function(t,exports,n){var o=n(33);"string"==typeof o&&(o=[[t.id,o,""]]);n(12)(o,{});o.locals&&(t.exports=o.locals)},function(t,exports,n){exports=t.exports=n(11)(),exports.push([t.id,'desktop{height:100%;position:absolute;left:0;top:0;right:0;bottom:0;width:100%;overflow:hidden}desktop:before{height:120%;position:absolute;left:-10%;top:-10%;width:120%;background:url("/images/windows-xp-wallpaper.jpg") 50% no-repeat;background-size:cover;display:block;content:\'\';z-index:0;transition:all .5s ease;-webkit-transform:scale(1);transform:scale(1)}desktop #wrapper{height:100%;width:100%}desktop #desktop{height:calc(100% - 40px);width:100%}desktop .desktop-contain{height:100%;width:100%;position:fixed;top:0;left:0;right:0;bottom:0;padding:0 0 40px;z-index:1;transition:all .5s ease}desktop .desktop-contain .desktop-icon-contain{width:98px;height:98px;margin:1px;position:absolute}desktop .desktop-contain .desktop-icon-contain.selected{background:#000}desktop .desktop-contain .desktop-icon-contain:active,desktop .desktop-contain .desktop-icon-contain:hover{opacity:1}desktop .desktop-contain .desktop-icon-contain.ui-selected,desktop .desktop-contain .desktop-icon-contain.ui-selecting{background:#feca40}desktop .desktop-contain .desktop-icon-contain .desktop-icon{display:block;margin:0 auto;max-width:45px;max-height:45px;z-index:1;position:absolute;transform:translate(50%,10%)}desktop .desktop-contain .desktop-icon-contain[icon-type=mydocuments] .label:before{content:\'My Documents\'}desktop .desktop-contain .desktop-icon-contain[icon-type=mycomputer] .label:before{content:\'My Computer\'}desktop .desktop-contain .desktop-icon-contain[icon-type=recyclebin] .label:before{content:\'Recycle Bin\'}.xp #taskbar .start-wrapper{transition:all .2s linear;background:-webkit-radial-gradient(circle,#01c101,#018c01);background:radial-gradient(circle,#02a902,#027902)}.xp #taskbar .start-wrapper.active{background:radial-gradient(circle,#01c101,#018c01);box-shadow:inset 0 0 10px rgba(0,0,0,.5)}.xp #taskbar .start-wrapper.active .start-menu{display:block}.xp #taskbar .start-wrapper.button-active,.xp #taskbar .start-wrapper:hover{background:radial-gradient(circle,#01c101,#018c01)}.xp #taskbar .start-wrapper .start-icon{width:60%;height:25px;display:inline-block;position:absolute;left:10px;width:100%;padding:8px}.xp #taskbar .start-wrapper .start-icon:before{background:url("/images/icons/winxp-icon.png") 50% no-repeat;content:\'\';height:100%;width:30px;position:absolute;left:5px;background-size:contain}.xp #taskbar .start-wrapper .start-icon span{color:#fff;position:absolute;right:25px;top:13px;font-weight:700;font-style:italic}.xp #taskbar .start-wrapper .start-menu{position:absolute;bottom:100%;left:10px;width:350px;color:#000;background:#fff;border-radius:5px 5px 0 0;border-right:2px solid #0854b8;display:none}.xp #taskbar .start-wrapper .start-menu .user{background:linear-gradient(#03469e 10%,#1378fd);border-radius:5px 5px 0 0;height:50px;padding:5px}.xp #taskbar .start-wrapper .start-menu .inner{height:200px}.xp #taskbar .start-wrapper .start-menu .inner ul{display:inline-block;vertical-align:top;width:50%;height:100%;padding:5px}.xp #taskbar .start-wrapper .start-menu .inner .left-list{font-size:1.2em}.xp #taskbar .start-wrapper .start-menu .inner .right-list{font-size:.95em;background:#51a2f9;border-left:2px solid #1276fa}.xp #taskbar .start-wrapper .start-menu .power{background:linear-gradient(#1378fd 10%,#03469e);height:40px;padding:5px}.xp #taskbar .dock-windows .taskbar-icon-contain{display:inline-block;width:185px;padding-left:40px}.xp #taskbar .dock-windows .taskbar-icon-contain:before{content:"";width:calc(100% - 40px);text-align:center;height:100%;top:25%;position:absolute;padding-right:10px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.xp #taskbar .dock-windows .taskbar-icon-contain[title=mycomputer]:before{content:"My Computer"}.xp #taskbar .dock-windows .taskbar-icon-contain[title=mydocuments]:before{content:"My Documents"}.xp #taskbar .dock-windows .taskbar-icon-contain[title=browser]:before{content:"Inception Browser"}.xp #taskbar .dock-windows .taskbar-icon-contain[title=recyclebin]:before{content:"Recycle Bin"}.xp #taskbar .dock-windows .taskbar-icon-contain[title=weather]:before{content:"Weather"}.xp #taskbar .dock-windows .taskbar-icon-contain .taskbar-icon{width:30px;height:30px}.xp #taskbar .dock-windows .taskbar-icon-contain .taskbar-icon:before{background-image:url("/images/icons/icons-xp.png");height:40px;width:35px;background-size:130px;position:absolute;left:0;top:0;content:""}.xp #taskbar .dock-windows .taskbar-icon-contain .taskbar-icon.mycomputer:before{background-position:0 0}.xp #taskbar .dock-windows .taskbar-icon-contain .taskbar-icon.mydocuments:before{background-position:0 -103px}.xp #taskbar .dock-windows .taskbar-icon-contain .taskbar-icon.recyclebin:before{background-position:-4px -68px}.xp #taskbar .dock-windows .taskbar-icon-contain .taskbar-icon.browser:before{background-position:6px 3px;background-image:url("/images/icons/spin-top.png");background-size:75%;background-repeat:no-repeat}.xp #taskbar .dock-windows .taskbar-icon-contain .taskbar-icon.weather:before{background-size:85%;background-repeat:no-repeat;background-image:url("/images/icons/weather.png");background-position:5px 10px;-webkit-filter:brightness(3);filter:brightness(3)}.xp #taskbar .dock-windows .taskbar-icon-contain .taskbar-icon-child .taskbar-icon.weather:before{filter:none;-webkit-filter:none}.xp .window{border-radius:3px;border:2px solid #0752b5}.xp .window .window_inner .window-top{background:linear-gradient(#1378fd 10%,#03469e)}.xp .window .window_inner .window-top .float_right .close,.xp .window .window_inner .window-top .float_right .min,.xp .window .window_inner .window-top .float_right .res{background-image:url("/images/winxp-window-controls.png");width:100%;height:100%;opacity:.8;border-radius:6px;transition:all .3s ease}.xp .window .window_inner .window-top .float_right .close:hover,.xp .window .window_inner .window-top .float_right .min:hover,.xp .window .window_inner .window-top .float_right .res:hover{opacity:1}.xp .window .window_inner .window-top .float_right .min{background-position:0 0}.xp .window .window_inner .window-top .float_right .res{background-position:-29px 0}.xp .window .window_inner .window-top .float_right .close{background-position:32px 0}.xp .window .window_inner .window-icon{background-image:url("/images/icons/icons-xp.png");height:100%;width:100%;background-size:80px}.xp .window .window_inner .window-icon.browser,.xp .window .window_inner .window-icon.weather{background-image:url("/images/icons/spin-top.png");background-size:contain;background-repeat:no-repeat;background-position:8px -1px}.xp .window .window_inner .window-icon.weather{background-image:url("/images/icons/weather.png");background-position:0 0;-webkit-filter:brightness(3);filter:brightness(3)}.xp .window.recyclebin{background-position:4px 86px}.xp .window.mycomputer{background-position:2px 0}.xp .window.mydocuments{background-position:6px 65px}.xp .window.mycomputer .window_content .address-bar,.xp .window.mycomputer .window_content .file-menu,.xp .window.mycomputer .window_content .nav-menu,.xp .window.mydocuments .window_content .address-bar,.xp .window.mydocuments .window_content .file-menu,.xp .window.mydocuments .window_content .nav-menu,.xp .window.recyclebin .window_content .address-bar,.xp .window.recyclebin .window_content .file-menu,.xp .window.recyclebin .window_content .nav-menu{font-size:12px;width:100%;border-bottom:2px solid gray;background-color:#efedd8;overflow:hidden}.xp .window.mycomputer .window_content .address-bar ul,.xp .window.mycomputer .window_content .file-menu ul,.xp .window.mycomputer .window_content .nav-menu ul,.xp .window.mydocuments .window_content .address-bar ul,.xp .window.mydocuments .window_content .file-menu ul,.xp .window.mydocuments .window_content .nav-menu ul,.xp .window.recyclebin .window_content .address-bar ul,.xp .window.recyclebin .window_content .file-menu ul,.xp .window.recyclebin .window_content .nav-menu ul{height:100%}.xp .window.mycomputer .window_content .address-bar ul>li,.xp .window.mycomputer .window_content .file-menu ul>li,.xp .window.mycomputer .window_content .nav-menu ul>li,.xp .window.mydocuments .window_content .address-bar ul>li,.xp .window.mydocuments .window_content .file-menu ul>li,.xp .window.mydocuments .window_content .nav-menu ul>li,.xp .window.recyclebin .window_content .address-bar ul>li,.xp .window.recyclebin .window_content .file-menu ul>li,.xp .window.recyclebin .window_content .nav-menu ul>li{height:100%;padding:5px;display:inline-block;text-align:center;vertical-align:middle}.xp .window.mycomputer .window_content .address-bar ul>li:hover,.xp .window.mycomputer .window_content .file-menu ul>li:hover,.xp .window.mycomputer .window_content .nav-menu ul>li:hover,.xp .window.mydocuments .window_content .address-bar ul>li:hover,.xp .window.mydocuments .window_content .file-menu ul>li:hover,.xp .window.mydocuments .window_content .nav-menu ul>li:hover,.xp .window.recyclebin .window_content .address-bar ul>li:hover,.xp .window.recyclebin .window_content .file-menu ul>li:hover,.xp .window.recyclebin .window_content .nav-menu ul>li:hover{box-shadow:0 0 2px gray;border-radius:2px}.xp .window.mycomputer .window_content .file-menu,.xp .window.mydocuments .window_content .file-menu,.xp .window.recyclebin .window_content .file-menu{height:20px}.xp .window.mycomputer .window_content .nav-menu,.xp .window.mydocuments .window_content .nav-menu,.xp .window.recyclebin .window_content .nav-menu{height:40px}.xp .window.mycomputer .window_content .nav-menu ul>li,.xp .window.mydocuments .window_content .nav-menu ul>li,.xp .window.recyclebin .window_content .nav-menu ul>li{width:60px}.xp .window.mycomputer .window_content .address-bar,.xp .window.mydocuments .window_content .address-bar,.xp .window.recyclebin .window_content .address-bar{height:20px}.xp .window.mycomputer .window_content .address-bar ul>li:nth-child(2),.xp .window.mydocuments .window_content .address-bar ul>li:nth-child(2),.xp .window.recyclebin .window_content .address-bar ul>li:nth-child(2){padding:0}.xp .window.mycomputer .window_content .left-side,.xp .window.mycomputer .window_content .right-side,.xp .window.mydocuments .window_content .left-side,.xp .window.mydocuments .window_content .right-side,.xp .window.recyclebin .window_content .left-side,.xp .window.recyclebin .window_content .right-side{display:inline-block;height:calc(100% - 80px);position:absolute;overflow:auto}.xp .window.mycomputer .window_content .left-side,.xp .window.mydocuments .window_content .left-side,.xp .window.recyclebin .window_content .left-side{background-color:#7292e0;width:100px;left:0}.xp .window.mycomputer .window_content .right-side,.xp .window.mydocuments .window_content .right-side,.xp .window.recyclebin .window_content .right-side{background-color:#fff;width:calc(100% - 100px);right:0}.xp #desktop .desktop-contain .desktop-icon-contain[icon-type=mycomputer] .desktop-icon{background:url("/images/icons/icons-xp.png") 0 4px}.xp #desktop .desktop-contain .desktop-icon-contain[icon-type=mydocuments] .desktop-icon{background:url("/images/icons/icons-xp.png") 0 -120px}.xp #desktop .desktop-contain .desktop-icon-contain[icon-type=recyclebin] .desktop-icon{background:url("/images/icons/icons-xp.png") -5px -79px}.xp #desktop .desktop-contain .desktop-icon-contain .desktop-icon{width:100%;height:100%;background-repeat:no-repeat;background-size:contain}',""])},function(t,exports,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(exports,"__esModule",{value:!0});var e=n(35),i=o(e);n(36);var a={template:i["default"],restrict:"E"};exports["default"]=a,t.exports=exports["default"]},function(t,exports){t.exports='<!-- Place all UI elements intended to be present across all routes in this file -->\r\n<div class="app">\r\n  <div ui-view></div>\r\n</div>\r\n'},function(t,exports,n){var o=n(37);"string"==typeof o&&(o=[[t.id,o,""]]);n(12)(o,{});o.locals&&(t.exports=o.locals)},function(t,exports,n){exports=t.exports=n(11)(),exports.push([t.id,".app{height:100%;background-color:$lightBgColor}",""])}]);
//# sourceMappingURL=app.bundle.js.map