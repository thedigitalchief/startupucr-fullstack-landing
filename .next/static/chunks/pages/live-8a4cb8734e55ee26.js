(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[154],{4634:function(A,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/live",function(){return t(1116)}])},5811:function(A,e){"use strict";e.Z={src:"/_next/static/media/hero_left.ce59194e.png",height:3346,width:3583,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA4ElEQVR42mN4dHzxgrsHF9QzAMHz+dGz7vVY//93Yfb6/+8PmjKAwIMb5y68fv7kEIj9cmH+/nMtGf9/n5lx5u/bgwZ/GBjYGP7/vye8e9nk0kNTChbu7Gs3ZLCY5cfAwMDMAAQfz65kYfh/Nb/29ori/6f6iv//359fxAAFH1+eYWKAgU21k6ObkuYs+L+KQejzulL1S9MTPBhg4N70mPD9D35I/Xl9MOH/w4VTdlc7Pd5X6/z//96yIAYQ2LNj++EN67bLvbq4UPb/q5U2Tf5q+w/U+/z/f7LOjIGBgQEAsCls2j8dh3QAAAAASUVORK5CYII=",blurWidth:8,blurHeight:7}},3215:function(A,e){"use strict";e.Z={src:"/_next/static/media/hero_right.ab21bf3a.png",height:3460,width:3671,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8UlEQVR42mMAgbcBDLx/a9xWvZwStO9yrcGXzydWJe9891+AAQYmMzAw/220iX4zN/P7udr4/28OLln+7P9/5f+HGYQZwGD1f0YQtXf2NvfOzgst/xsYRJ6vjJjzdW/8BAYQ+L9JlfFZZQ4rzMSPS2LXLonm+b+vLnAxw9f/IN0I8K6OIfDdqpbtOyf0/z/W6t/JAAP7am2X7KxzffH/dI0uiN+//7/c/90Mdgx/n5zL///kxOIPi5L+rMhz/v9xaUTs//9/FX49OhJ1ZFF9I8PP59e8/j/cV3lp9cIO35C6dpDuPx8eqr1+cDlw+679kwG3aHc4AI1O6AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},1116:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Ai}});var a=t(5893),i=t(7294),s=t(9008),r=t.n(s),n=t(5675),o=t.n(n),c=t(9875),l=t(6261),h=t(8633),g=t(9583),d=t(5697);function u(A,e){if(!(A instanceof e))throw TypeError("Cannot call a class as a function")}function m(A,e){for(var t=0;t<e.length;t++){var a=e[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(A,a.key,a)}}function p(A,e,t){return e&&m(A.prototype,e),t&&m(A,t),A}function E(A,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,writable:!0,configurable:!0}}),e&&w(A,e)}function C(A){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(A){return A.__proto__||Object.getPrototypeOf(A)})(A)}function w(A,e){return(w=Object.setPrototypeOf||function(A,e){return A.__proto__=e,A})(A,e)}function f(A){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(A){return!1}}();return function(){var t,a,i=C(A);if(e){var s=C(this).constructor;a=Reflect.construct(i,arguments,s)}else a=i.apply(this,arguments);return(t=a)&&("object"==typeof t||"function"==typeof t)?t:function(A){if(void 0===A)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return A}(this)}}function v(A,e){(null==e||e>A.length)&&(e=A.length);for(var t=0,a=Array(e);t<e;t++)a[t]=A[t];return a}function Q(A){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=String(A);if(0===t)return a;var i=a.match(/(.*?)([0-9]+)(.*)/),s=i?i[1]:"",r=i?i[3]:"",n=i?i[2]:a,o=n.length>=t?n:(((function(A){if(Array.isArray(A))return v(A)})(e=Array(t))||function(A){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(A))return Array.from(A)}(e)||function(A,e){if(A){if("string"==typeof A)return v(A,e);var t=Object.prototype.toString.call(A).slice(8,-1);if("Object"===t&&A.constructor&&(t=A.constructor.name),"Map"===t||"Set"===t)return Array.from(A);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(A,e)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(){return"0"}).join("")+n).slice(-1*t);return"".concat(s).concat(o).concat(r)}var B={daysInHours:!1,zeroPadTime:2},x=function(A){E(t,A);var e=f(t);function t(){var A;return u(this,t),A=e.apply(this,arguments),A.state={count:A.props.count||3},A.startCountdown=function(){A.interval=window.setInterval(function(){0==A.state.count-1?(A.stopCountdown(),A.props.onComplete&&A.props.onComplete()):A.setState(function(A){return{count:A.count-1}})},1e3)},A.stopCountdown=function(){clearInterval(A.interval)},A.addTime=function(e){A.stopCountdown(),A.setState(function(A){return{count:A.count+e}},A.startCountdown)},A}return p(t,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,i.cloneElement)(this.props.children,{count:this.state.count}):null}}]),t}(i.Component);x.propTypes={count:d.number,children:d.element,onComplete:d.func};var j=function(A){E(t,A);var e=f(t);function t(A){var a;if(u(this,t),(a=e.call(this,A)).mounted=!1,a.initialTimestamp=a.calcOffsetStartTimestamp(),a.offsetStartTimestamp=a.props.autoStart?0:a.initialTimestamp,a.offsetTime=0,a.legacyMode=!1,a.legacyCountdownRef=(0,i.createRef)(),a.tick=function(){var A=a.calcTimeDelta(),e=A.completed&&!a.props.overtime?void 0:a.props.onTick;a.setTimeDeltaState(A,void 0,e)},a.start=function(){if(!a.isStarted()){var A=a.offsetStartTimestamp;a.offsetStartTimestamp=0,a.offsetTime+=A?a.calcOffsetStartTimestamp()-A:0;var e=a.calcTimeDelta();a.setTimeDeltaState(e,"STARTED",a.props.onStart),a.props.controlled||e.completed&&!a.props.overtime||(a.clearTimer(),a.interval=window.setInterval(a.tick,a.props.intervalDelay))}},a.pause=function(){a.isPaused()||(a.clearTimer(),a.offsetStartTimestamp=a.calcOffsetStartTimestamp(),a.setTimeDeltaState(a.state.timeDelta,"PAUSED",a.props.onPause))},a.stop=function(){a.isStopped()||(a.clearTimer(),a.offsetStartTimestamp=a.calcOffsetStartTimestamp(),a.offsetTime=a.offsetStartTimestamp-a.initialTimestamp,a.setTimeDeltaState(a.calcTimeDelta(),"STOPPED",a.props.onStop))},a.isStarted=function(){return a.isStatus("STARTED")},a.isPaused=function(){return a.isStatus("PAUSED")},a.isStopped=function(){return a.isStatus("STOPPED")},a.isCompleted=function(){return a.isStatus("COMPLETED")},A.date){var s=a.calcTimeDelta();a.state={timeDelta:s,status:s.completed?"COMPLETED":"STOPPED"}}else a.legacyMode=!0;return a}return p(t,[{key:"componentDidMount",value:function(){!this.legacyMode&&(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(A){this.legacyMode||this.props.date===A.date||(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var A=this.props,e=A.date,t=A.now,a=A.precision,i=A.controlled,s=A.overtime;return function(A){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.now,i=void 0===a?Date.now:a,s=t.precision,r=t.controlled,n=t.offsetTime,o=t.overtime;e="string"==typeof A?new Date(A).getTime():A instanceof Date?A.getTime():A,r||(e+=void 0===n?0:n);var c=r?e:e-i(),l=Math.round(1e3*parseFloat(((o?c:Math.max(0,c))/1e3).toFixed(Math.min(20,Math.max(0,void 0===s?0:s))))),h=Math.abs(l)/1e3;return{total:l,days:Math.floor(h/86400),hours:Math.floor(h/3600%24),minutes:Math.floor(h/60%60),seconds:Math.floor(h%60),milliseconds:Number((h%1*1e3).toFixed()),completed:l<=0}}(e,{now:t,precision:a,controlled:i,offsetTime:this.offsetTime,overtime:s})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(A){this.legacyCountdownRef.current.addTime(A)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(A){return this.state.status===A}},{key:"setTimeDeltaState",value:function(A,e,t){var a=this;if(this.mounted){var i=A.completed&&!this.state.timeDelta.completed,s=A.completed&&"STARTED"===e;return i&&!this.props.overtime&&this.clearTimer(),this.setState(function(t){var i=e||t.status;return A.completed&&!a.props.overtime?i="COMPLETED":e||"COMPLETED"!==i||(i="STOPPED"),{timeDelta:A,status:i}},function(){t&&t(a.state.timeDelta),a.props.onComplete&&(i||s)&&a.props.onComplete(A,s)})}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var A,e,t,a,i,s,r,n,o,c,l=this.props,h=l.daysInHours,g=l.zeroPadTime,d=l.zeroPadDays,u=this.state.timeDelta;return Object.assign(Object.assign({},u),{api:this.getApi(),props:this.props,formatted:(A=u.days,e=u.hours,t=u.minutes,a=u.seconds,s=(i=Object.assign(Object.assign({},B),{daysInHours:h,zeroPadTime:g,zeroPadDays:d})).daysInHours,r=i.zeroPadTime,n=i.zeroPadDays,o=Math.min(2,r),c=s?Q(e+24*A,r):Q(e,o),{days:s?"":Q(A,void 0===n?r:n),hours:c,minutes:Q(t,o),seconds:Q(a,o)})})}},{key:"render",value:function(){if(this.legacyMode){var A=this.props,e=A.count,t=A.children,a=A.onComplete;return(0,i.createElement)(x,{ref:this.legacyCountdownRef,count:e,onComplete:a},t)}var s=this.props,r=s.className,n=s.overtime,o=s.children,c=s.renderer,l=this.getRenderProps();if(c)return c(l);if(o&&this.state.timeDelta.completed&&!n)return(0,i.cloneElement)(o,{countdown:l});var h=l.formatted,g=h.days,d=h.hours,u=h.minutes,m=h.seconds;return(0,i.createElement)("span",{className:r},l.total<0?"-":"",g,g?":":"",d,":",u,":",m)}}]),t}(i.Component);j.defaultProps=Object.assign(Object.assign({},B),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),j.propTypes={date:(0,d.oneOfType)([(0,d.instanceOf)(Date),d.string,d.number]),daysInHours:d.bool,zeroPadTime:d.number,zeroPadDays:d.number,controlled:d.bool,intervalDelay:d.number,precision:d.number,autoStart:d.bool,overtime:d.bool,className:d.string,children:d.element,renderer:d.func,now:d.func,onMount:d.func,onStart:d.func,onPause:d.func,onStop:d.func,onTick:d.func,onComplete:d.func};var b=t(2242),I=t.n(b);let D=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:I().header,children:"hacking has ended!"}),(0,a.jsx)("div",{className:I().container})]});var _={};let P=A=>{let{days:e,hours:t,minutes:i,seconds:s,completed:r}=A;if(r)return(0,a.jsx)(D,{});{let n=e<10?String("0".concat(e)):String(e),o=t<10?String("0".concat(t)):String(t),l=i<10?String("0".concat(i)):String(i),h=s<10?String("0".concat(s)):String(s);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:I().header,children:"time left until hacking ends"}),(0,a.jsx)("div",{className:I().container,children:(0,a.jsxs)("div",{className:I().row,children:[e>0&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:I().stack,children:[(0,a.jsx)("div",{className:I().number,children:Array.from(n).map(A=>(0,a.jsx)(c.E.div,{variants:_,whileHover:"hover",children:A}))}),(0,a.jsx)("div",{className:I().label,children:"days"})]}),(0,a.jsx)("div",{className:I().separator,children:":"})]}),(e>0||t>0)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:I().stack,children:[(0,a.jsx)("div",{className:I().number,children:Array.from(o).map(A=>(0,a.jsx)(c.E.div,{variants:_,whileHover:"hover",children:A}))}),(0,a.jsx)("div",{className:I().label,children:"hours"})]}),(0,a.jsx)("div",{className:I().separator,children:":"})]}),(e>0||t>0||i>0)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:I().stack,children:[(0,a.jsx)("div",{className:I().number,children:Array.from(l).map(A=>(0,a.jsx)(c.E.div,{variants:_,whileHover:"hover",children:A}))}),(0,a.jsx)("div",{className:I().label,children:"minutes"})]}),(0,a.jsx)("div",{className:I().separator,children:":"})]}),(e>0||t>0||i>0||s>0)&&(0,a.jsxs)("div",{className:I().stack,children:[(0,a.jsx)("div",{className:I().number,children:Array.from(h).map(A=>(0,a.jsx)(c.E.div,{variants:_,whileHover:"hover",children:A}))}),(0,a.jsx)("div",{className:I().label,children:"seconds"})]})]})})]})}};function S(A){let[e,t]=(0,i.useState)(!1);_=e?{}:{hover:{scale:1.1}};let s=()=>{t(window.innerWidth<=720)};return(0,i.useEffect)(()=>{window.addEventListener("resize",s)}),(0,a.jsx)("h2",{className:I().countdown,children:(0,a.jsx)(j,{date:A.date,renderer:P})})}var T=t(4128),M=t(8367),y=t(6864),L=t(2451),U=t(1985),N=t.n(U);function F(A){return(0,a.jsxs)("figure",{children:[(0,a.jsx)("div",{className:N().image,children:(0,a.jsx)(o(),{src:A.image,alt:"lead profile picture",width:A.width,height:A.height,quality:80,layout:"responsive",objectFit:"contain",className:A.image!==L.Z&&N().link})}),(0,a.jsxs)("figcaption",{children:[(0,a.jsx)("p",{className:N().name,children:A.name}),(0,a.jsx)("p",{className:N().role,children:A.role})]})]})}var R=t(5811),k=t(3215),G={src:"/_next/static/media/resources_left.cbd9a6e3.png",height:1552,width:968,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAc0lEQVR42mMAgX/7nfX+7bOXBbPvr2cFC/7fo8Hy71QDiIMA/y7uYAJLXloS9O/c/KMQlf9fMkEkl/j+v756CcO/c7NYwAJ3Fm//d2fhIhQj/j9cavf/wWI7iHltDIIokk/XMTL8WxAh829VrhTEzMlgowDd+jVn/O+GpQAAAABJRU5ErkJggg==",blurWidth:5,blurHeight:8},Y={src:"/_next/static/media/resources_right.d47f11fe.png",height:1493,width:904,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAbUlEQVR42mP4t89ZngEd/NvvzA2i/+/PZvy/q5IJLvH/QAYjisr/O3LAsv82FZj/25jtCRb8vbWGGSLZbPTv1JIX/1e68IAlXq2I5v+yNlf0/54W07/rUlgggkvTuR8vzuaEm/l6Kaol/7sYpACvWSuzJi7dgQAAAABJRU5ErkJggg==",blurWidth:5,blurHeight:8},O={src:"/_next/static/media/michael_odea.56a84d61.jpg",height:800,width:800,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAgT/2gAMAwEAAhADEAAAAIBKP//EABsQAAIDAAMAAAAAAAAAAAAAAAIEAQMSABNC/9oACAEBAAE/AFW1DeuUhozsOzr2UFnXqI5//8QAGxEAAgEFAAAAAAAAAAAAAAAAAQIDABESITH/2gAIAQIBAT8AmZosAp6LnQr/xAAXEQADAQAAAAAAAAAAAAAAAAAAAUFx/9oACAEDAQE/AHMP/9k=",blurWidth:8,blurHeight:8},K={src:"/_next/static/media/keila_braden.da17a885.jpg",height:500,width:500,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABAEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAALBV/8QAHRAAAgEEAwAAAAAAAAAAAAAAAREDAAIEBSFRYf/aAAgBAQABPwAbXFj2V2NGjEkbT4Ow+XX/xAAZEQEAAgMAAAAAAAAAAAAAAAABERMAAgP/2gAIAQIBAT8As6sNuxIOf//EABkRAQACAwAAAAAAAAAAAAAAAAEDIQACIv/aAAgBAwEBPwAgi2Dgqs//2Q==",blurWidth:8,blurHeight:8},H={src:"/_next/static/media/elaine_lin.a5f6face.jpg",height:1077,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAIQe3//EAB4QAQABAgcAAAAAAAAAAAAAAAECAwQABRESEyEx/9oACAEBAAE/AKuYwbSM6a85ebB9DrXH/8QAGREBAQADAQAAAAAAAAAAAAAAAgEAAwQy/9oACAECAQE/ANPMGban6uf/xAAYEQADAQEAAAAAAAAAAAAAAAABAhEAIf/aAAgBAwEBPwBnYm3p3//Z",blurWidth:8,blurHeight:8},W={src:"/_next/static/media/craig_schroeder.619234cb.jpg",height:400,width:400,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAkAl//8QAHRAAAgEEAwAAAAAAAAAAAAAAAQIDAAQFExQi0f/aAAgBAQABPwDjO+PiiitTs2PIWCdmHlf/xAAWEQEBAQAAAAAAAAAAAAAAAAABABL/2gAIAQIBAT8AwN//xAAYEQACAwAAAAAAAAAAAAAAAAABAgAhcf/aAAgBAwEBPwANS4J//9k=",blurWidth:8,blurHeight:8},V={src:"/_next/static/media/danial_beg.901f28dd.jpg",height:250,width:250,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAnAn/xAAbEAACAgMBAAAAAAAAAAAAAAABAgMEAAVBUv/aAAgBAQABPwCnuo6VoOthiiSiAKB31n//xAAaEQACAgMAAAAAAAAAAAAAAAABEQIDABIh/9oACAECAQE/ALK1qpSDHUc//8QAFxEBAAMAAAAAAAAAAAAAAAAAAQARMf/aAAgBAwEBPwAp0J//2Q==",blurWidth:8,blurHeight:8},z={src:"/_next/static/media/jonathan_trinh.a761121c.jpg",height:250,width:250,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAL4o/8QAHRAAAwABBQEAAAAAAAAAAAAAAQIDEgARFSEiwf/aAAgBAQABPwCFo8lWHs4Bgq79ZhQ33X//xAAYEQACAwAAAAAAAAAAAAAAAAACEgADUv/aAAgBAgEBPwC0BBVzP//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPwAdv//Z",blurWidth:8,blurHeight:8},J={src:"/_next/static/media/nate_melwani.3374dd46.jpg",height:800,width:800,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAJgj/8QAHBAAAgICAwAAAAAAAAAAAAAAAQMCBAASIzFh/9oACAEBAAE/AGWqBqh/Ls1phHsA6+Z//8QAGREAAQUAAAAAAAAAAAAAAAAAIQABERJB/9oACAECAQE/AKxrkr//xAAYEQEAAwEAAAAAAAAAAAAAAAAhAAESEf/aAAgBAwEBPwDWuFAT/9k=",blurWidth:8,blurHeight:8},X={src:"/_next/static/media/lucca_psaila.a45c351c.jpg",height:600,width:600,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAIsOlf/EABsQAAICAwEAAAAAAAAAAAAAAAECAwQAERNC/9oACAEBAAE/AONmWnKzd3nBXSk+Tn//xAAbEQABBAMAAAAAAAAAAAAAAAABAAIREiIxQf/aAAgBAgEBPwChE5v2er//xAAaEQACAgMAAAAAAAAAAAAAAAABAgMhABNB/9oACAEDAQE/AGnsDXHSjmf/2Q==",blurWidth:8,blurHeight:8},Z={src:"/_next/static/media/kuanchieh_hsu.44efba7b.jpg",height:380,width:380,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAL4W/8QAHBAAAgICAwAAAAAAAAAAAAAAAQIDBAATBWHB/9oACAEBAAE/AGCx86Jzcl1NXKFCx1Ajr3P/xAAVEQEBAAAAAAAAAAAAAAAAAAABAP/aAAgBAgEBPwAL/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAFBcf/aAAgBAwEBPwBzD//Z",blurWidth:8,blurHeight:8},q={src:"/_next/static/media/fuad_jamour.0d38544d.jpg",height:450,width:450,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAALwI/8QAGxAAAwACAwAAAAAAAAAAAAAAAQIDBBEAFGH/2gAIAQEAAT8Ahhx612WMp5CbJtNNqB4ef//EABgRAAIDAAAAAAAAAAAAAAAAAAARAQJx/9oACAECAQE/AKw3p//EABkRAAEFAAAAAAAAAAAAAAAAAAEAAyEyQv/aAAgBAwEBPwB3ECgX/9k=",blurWidth:8,blurHeight:8},$={src:"/_next/static/media/roy_feng.aae77e38.jpg",height:545,width:545,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJ6JP//EABoQAQEBAAMBAAAAAAAAAAAAAAIDAQAFEyH/2gAIAQEAAT8AYhvWm05L0NUVu78R5//EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAgEBPwBJN//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:8},AA={src:"/_next/static/media/kanin_liang.a80be77b.jpg",height:482,width:482,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAtwTf/8QAHBABAAEEAwAAAAAAAAAAAAAAAgMABAUSETEz/9oACAEBAAE/AFl5nl5LYeEQJfXGzO1f/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAFB/9oACAECAQE/AFT/xAAWEQADAAAAAAAAAAAAAAAAAAAAAUH/2gAIAQMBAT8AcP/Z",blurWidth:8,blurHeight:8},Ae={src:"/_next/static/media/kelly_downey.5044031a.jpg",height:120,width:120,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAJoLS//EAB4QAAICAAcAAAAAAAAAAAAAAAERAgQABRMiQkNR/9oACAEBAAE/AJ3qJycV+3UMjt5Nt+Y//8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECE//aAAgBAgEBPwDOUf/EABgRAAIDAAAAAAAAAAAAAAAAAAIxAAMi/9oACAEDAQE/ABuPSc//2Q==",blurWidth:8,blurHeight:8},At={src:"/_next/static/media/ian_oh.aeb69dec.jpg",height:506,width:506,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAAAwEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAALCq/8QAGhAAAwEAAwAAAAAAAAAAAAAAAQIDBAAUwf/aAAgBAQABPwC2aebKlujVtIYvQIgNDP1Rz//EABkRAAEFAAAAAAAAAAAAAAAAAAIAAwQRIf/aAAgBAgEBPwA4zY1pL//EABgRAAIDAAAAAAAAAAAAAAAAAAABAhNB/9oACAEDAQE/ALZPEf/Z",blurWidth:8,blurHeight:8},Aa={src:"/_next/static/media/paea_lependu.74afeb7d.jpg",height:321,width:321,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAJoV/8QAHRAAAgIBBQAAAAAAAAAAAAAAAgMBBAAFExQhUf/aAAgBAQABPwBS6EaXTskO27kNWTinovBz/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAC/9oACAECAQE/ADJf/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEC/9oACAEDAQE/AHR//9k=",blurWidth:8,blurHeight:8};function Ai(){let[A]=(0,h.kP)(),[e,t]=(0,i.useState)(""),[s,n]=(0,i.useState)(!1);var d={};s||(d={hover:{scale:1.05},tap:{scale:.995}});let u=async A=>{let e=await fetch("/api/checkin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:A})}),a=await e.json();a.checkins[0]&&t(a.checkins[0].qualified)},m=()=>{n(window.innerWidth<=720)};return(0,i.useEffect)(()=>{A&&u(A.user.id),window.addEventListener("resize",m)},[A]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r(),{children:(0,a.jsx)("title",{children:"Cutie Hack | Live"})}),(0,a.jsx)(l.W_,{name:"Countdown",className:N().element,children:(0,a.jsxs)("section",{className:N().countdown,children:[(0,a.jsx)("div",{className:N().heroLeft,children:(0,a.jsx)(o(),{src:R.Z,alt:"Hero Image",objectFit:"contain",quality:50,placeholder:"blur",priority:!0})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:(0,a.jsxs)("span",{className:N().subintrotext,children:["cutie",(0,a.jsx)(o(),{src:L.Z,height:40,width:40,objectFit:"contain",alt:"Logo in text"}),"hack presents:"]})}),(0,a.jsx)("h1",{className:N().title,children:"better together"}),(0,a.jsx)("p",{className:N().description,children:"a beginner friendly hackathon"}),(0,a.jsx)(S,{date:"2021-11-06T20:00:00"})]}),(0,a.jsx)("div",{className:N().heroRight,children:(0,a.jsx)(o(),{src:k.Z,alt:"Hero Image",objectFit:"contain",quality:50,placeholder:"blur",priority:!0})})]})}),(0,a.jsx)(l.W_,{name:"Schedule",className:N().element,children:(0,a.jsx)(T.default,{})}),(0,a.jsx)(l.W_,{name:"Judges",className:N().element,children:(0,a.jsx)("section",{className:N().judges,children:(0,a.jsxs)("div",{className:N().wrapper,children:[(0,a.jsx)("div",{className:N().wave,children:(0,a.jsx)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:(0,a.jsx)("path",{d:"M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z",className:N().shapefill})})}),(0,a.jsx)("h1",{children:"judges"}),(0,a.jsx)("div",{className:N().grid,children:[{image:Aa,name:"Dr. Paea LePendu",role:"UCR Professor"},{image:W,name:"Dr. Craig Schroeder",role:"UCR Professor"},{image:q,name:"Dr. Fuad Jamour",role:"UCR Professor"},{image:Ae,name:"Kelly Downey",role:"CS Lecturer"},{image:Z,name:"Kuan-Chieh Hsu",role:"UCR PhD Candidate"},{image:O,name:"Michael O'Dea",role:"IEEE@UCR President"},{image:At,name:"Ian Oh",role:"IEEE@UCR Secretary"},{image:K,name:"Keila Braden",role:"Design@UCR Director"},{image:H,name:"Elaine Lin",role:"Design@UCR Communications"},{image:J,name:"Nate Melwani",role:"Cyber@UCR Vice President"},{image:X,name:"Lucca Psaila",role:"Software Engineer Intern @ Rev"},{image:V,name:"Danial Beg",role:"Previous Citrus Hack Director"},{image:z,name:"Jonathan Trinh",role:"Previous Citrus Hack Director"},{image:AA,name:"Kanin Liang",role:"ACM Alumni Chair"},{image:$,name:"Roy Feng",role:"ACM President"}].map(A=>{let{image:e,name:t,role:i}=A;return(0,a.jsx)(F,{image:e,width:150,height:150,name:t,role:i})})})]})})}),(0,a.jsx)(l.W_,{name:"Resources",className:N().element,children:(0,a.jsxs)("section",{className:N().resources,children:[(0,a.jsx)("div",{className:N().wave,children:(0,a.jsx)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:(0,a.jsx)("path",{d:"M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z",className:N().shapefill})})}),(0,a.jsxs)("div",{className:N().resourcesWrapper,children:[(0,a.jsxs)("div",{className:N().resourcesBg,children:[(0,a.jsx)("div",{className:N().resourcesLeft,children:(0,a.jsx)(o(),{alt:"Section background",src:G,width:968,height:1552,quality:80,layout:"responsive",objectFit:"contain"})}),(0,a.jsx)("div",{className:N().resourcesRight,children:(0,a.jsx)(o(),{alt:"Section background",src:Y,width:904,height:1493,quality:80,layout:"responsive",objectFit:"contain"})})]}),(0,a.jsxs)("div",{className:N().resourcesContent,children:[(0,a.jsx)("h1",{children:"resources"}),(0,a.jsxs)("div",{className:N().buttonWrapper,children:[(0,a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://cutiehack2021.devpost.com/",children:(0,a.jsxs)(c.E.button,{variants:d,whileHover:"hover",whileTap:"tap",transition:{ease:"easeInOut",duration:.015},className:N().button,children:[(0,a.jsx)("span",{children:"devpost"}),(0,a.jsx)(g.Dli,{className:N().arrow})]})}),(0,a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/citrushack/CitrusHackResources",children:(0,a.jsxs)(c.E.button,{variants:d,whileHover:"hover",whileTap:"tap",transition:{ease:"easeInOut",duration:.015},className:"".concat(N().button," ").concat(N().github),children:[(0,a.jsx)("span",{children:"github"}),(0,a.jsx)(g.Dli,{className:N().arrow})]})}),A&&"yes"===e&&(0,a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://discord.gg/CjkwAvFr2T",children:(0,a.jsxs)(c.E.button,{variants:d,whileHover:"hover",whileTap:"tap",transition:{ease:"easeInOut",duration:.015},className:"".concat(N().button," ").concat(N().discord),children:[(0,a.jsx)("span",{children:"discord"}),(0,a.jsx)(g.Dli,{className:N().arrow})]})})]})]})]})]})}),(0,a.jsx)(l.W_,{name:"Sponsors",className:N().element,children:(0,a.jsx)(M.default,{})}),(0,a.jsx)(l.W_,{name:"Team",className:N().element,children:(0,a.jsx)(y.default,{})})]})}},4128:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return n}});var a=t(5893);t(7294);var i=t(9875),s=t(1985),r=t.n(s);function n(){return(0,a.jsxs)("section",{className:r().schedule,children:[(0,a.jsx)("div",{className:r().wave,children:(0,a.jsx)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:(0,a.jsx)("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",className:r().shapefill})})}),(0,a.jsxs)("div",{className:r().wrapper,children:[(0,a.jsx)("h1",{children:"Schedule"}),(0,a.jsxs)("div",{className:r().schedules,children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:r().eventGroupTitle,children:[(0,a.jsx)("h2",{children:"setup"}),(0,a.jsx)("p",{className:r().hidden,children:"via"})]}),[{time:"7:00PM Mondays",name:"Weekly Meeting"}].map(A=>{let{time:e,name:t}=A;return(0,a.jsxs)(i.E.div,{whileHover:{scale:1.03},className:r().event,children:[(0,a.jsx)("div",{className:r().eventTime,children:e}),(0,a.jsx)("div",{className:r().eventName,children:t})]})})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:r().eventGroupTitle,children:[(0,a.jsx)("h2",{children:"workshops"}),(0,a.jsx)("p",{children:"via zoom"})]}),[{time:"7:00PM Fridays",name:"Team Building"}].map(A=>{let{time:e,name:t}=A;return(0,a.jsxs)(i.E.div,{whileHover:{scale:1.03},className:r().event,children:[(0,a.jsx)("div",{className:r().eventTime,children:e}),(0,a.jsx)("div",{className:r().eventName,children:t})]})})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:r().eventGroupTitle,children:[(0,a.jsx)("h2",{children:"activities"}),(0,a.jsx)("p",{children:"via Zoom"})]}),[{time:"10:00am",name:"Club Panel"}].map(A=>{let{time:e,name:t}=A;return(0,a.jsxs)(i.E.div,{whileHover:{scale:1.03},className:r().event,children:[(0,a.jsx)("div",{className:r().eventTime,children:e}),(0,a.jsx)("div",{className:r().eventName,children:t})]})})]})]})]})]})}},6864:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return p}});var a=t(5893);t(7294);var i=t(5675),s=t.n(i),r=t(9875),n={src:"/_next/static/media/leaves.0ca9f218.png",height:488,width:1116,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAWklEQVR42mOwOuKxz/qkVywDErA65tFufcLzvuVh9+8M5ntd91kdcf8AFAhiAALr457ZQPwaqOi/+S6XxwwgYLrNKc1in1swAxAATayxPOR+03y3yyajNfbqAFIDIiQnHpNmAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:3},o=t(1130),c=t.n(o);function l(A){return(0,a.jsxs)("figure",{children:[(0,a.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:A.linkedin,children:(0,a.jsxs)(r.E.div,{whileHover:{y:-8},className:c().image,children:[(0,a.jsx)("div",{className:c().leaves,children:(0,a.jsx)(s(),{src:n,alt:"leaves",width:279,height:122,quality:80,layout:"responsive",objectFit:"contain"})}),(0,a.jsx)(s(),{src:A.image,alt:"lead profile picture",width:A.width,height:A.height,quality:80,layout:"responsive",objectFit:"contain",className:c().link})]})}),(0,a.jsxs)("figcaption",{children:[(0,a.jsx)("p",{className:c().name,children:A.name}),(0,a.jsx)("p",{className:c().role,children:A.role})]})]})}var h={src:"/_next/static/media/rj.e80f3d4d.png",height:1200,width:1200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAwklEQVR42mP4vyX/3+a8/9sK/u8qBqGtIC5QkAFIATmfV2ctL3ZaUuz2fX0uRI7h76a8/zuKpqdba+kbtObF7msL+b+jECgI0ZF3YmrO/ulVB2ZWX52T839b/l+Qjs35/7fn/dlSdnFh3fXlzf93lAPVAQUZgPKfVmfv60y9tnbKyYWt25pivq3L+789n+Fwb5qcRRQDg/3b169uXL/OwMDm4ZVwoDudISs8lskihoHD8eWr148ePWZg0OKxigsPSgIA+dpxwQaD1F8AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},g={src:"/_next/static/media/audrey.7bc5dd2c.png",height:1200,width:1200,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAyUlEQVR42mP4vyX/3+Y8IPl/Z9H/7YX/Nuf/35L3b0s+A0T076bcmzPjni5M+b8Nqo7hL5DaXnCsN+LQkv7tMxruzY4F6gMKMvzfWvh7bfLu2S3vLx94cGLnpQUV/7dm/92cz/B/R8mzuSH9vT3/////9vP3lr6i/5sy/20pAEoUPV8Uz8DAcHnfpgt71oerAEVy/28F6thWsL+vjEE93M27xNG7xMo24uDEht+b8hneryq2jey1iZpoH91vF9nrENXH4NZ3aVYVAG7fdvV/yn0wAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},d={src:"/_next/static/media/laptop.8b3a5349.png",height:702,width:645,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA5UlEQVR42mOAAr7GCFmfZZMbpu3Yvvjr1IltUWDRBXOmztm8bOWLAxcv/j94+/j/U69u/t+0dkYmWHLzjhNvF62++H/T2ad/rnz48ePbjTX/9yyuKwJLnji469Tvz8/+Xzp/6+/Z42d/3zi+4f+6ZQvawJIb1iw5cPPyqf/7Duz/u2fPzn/7Dx39f+nSpTcf3r2VZtixY1fu8RMn/589c+bXlStX/t6+dfP/82fP/r97+3YPWPfDBw9OvXj+/P+rly//P3ny5BuQPvjo4cNSsOSzJ08cXr54cfz+vXtZR48cUYH5DwB+3Y/zOYBwZgAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8},u={src:"/_next/static/media/speechbubble.5cd32814.png",height:338,width:685,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAeElEQVR42g3GwQnCQBBA0T8ziayHeBMi5GIBYhdiXTZgA3ZiJ149Swh6iK47k4UP/4lfj09JwxBRAs+CJfBfkffdQtOtYdV3dHtExPG/ADA9HG0tgo2SR4v5RXyn+lGrNda7lu6EMCf5XDirsw2noCC1gGwNBzX6BWahL4muRiTxAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},m={src:"/_next/static/media/girl.32973db8.png",height:788,width:507,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAs0lEQVR4nA3IsQoBARgH8P/33bkFsShFJjISJZO8wsmqjJ5ANhMew+KUwQNYSMooWYhXEK5zuLvuPrf8hh/16+mOylKuuYF+0eiQ89CmUTMlXgBEPIbPYt2ZimS0kksibt2eMTiuL5rYFVroGCjAxP1gdnyo2Wg8P6YVgG9Pv6qJ7Gl3OCraa1cnY2tNFefdJVZgW+b+rBeGNF8/RZgBAZjpUW3EM2RsXj5JOOGFmv7PLv0BvmJGjdwk1EMAAAAASUVORK5CYII=",blurWidth:5,blurHeight:8};function p(){return(0,a.jsxs)("section",{className:c().section,children:[(0,a.jsx)("div",{className:c().wave,children:(0,a.jsx)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:(0,a.jsx)("path",{d:"M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",className:c().shapefill})})}),(0,a.jsxs)("div",{className:c().team,children:[(0,a.jsx)("h1",{children:"Our Board"}),(0,a.jsx)("div",{className:c().grid,children:[{image:h,width:"1024",height:"1024",name:"Sam Kammerman",role:"President, Founder",linkedin:"https://www.linkedin.com/in//"},{image:g,width:"1024",height:"1024",name:"Dylan Nguyen",role:"Vice President, Founder",linkedin:"https://www.linkedin.com/in/dylanhnguyen/"}].map(A=>{let{image:e,width:t,height:i,name:s,role:r,linkedin:n}=A;return(0,a.jsx)(l,{image:e,width:t,height:i,name:s,role:r,linkedin:n})})}),(0,a.jsxs)("div",{className:c().committeeWrapper,children:[(0,a.jsxs)("div",{className:c().committeeImageGroup,children:[(0,a.jsxs)("div",{className:c().committee,children:[(0,a.jsx)("h3",{children:"Comittee Members"}),(0,a.jsx)("div",{children:" Gregory Paik"})]}),(0,a.jsx)("div",{className:c().laptop,children:(0,a.jsx)(s(),{alt:"Laptop image",src:d,quality:80,layout:"responsive",objectFit:"contain"})})]}),(0,a.jsxs)("div",{className:c().imageGroup,children:[(0,a.jsx)("div",{className:c().speechbubble,children:(0,a.jsx)(s(),{alt:"Speechbubble image",src:u,quality:80,layout:"responsive",objectFit:"contain"})}),(0,a.jsx)("div",{className:c().girl,children:(0,a.jsx)(s(),{alt:"Girl image",src:m,quality:80,layout:"responsive",objectFit:"contain"})})]})]})]})]})}},2242:function(A){A.exports={countdown:"Countdown_countdown__ggCTi",container:"Countdown_container__GZ1Gr",header:"Countdown_header__m64jq",number:"Countdown_number__fCnyq",separator:"Countdown_separator__NhOVe",label:"Countdown_label__YHJmG",stack:"Countdown_stack___FpJp",row:"Countdown_row__wtKfj",button:"Countdown_button__ZPjFI"}},1985:function(A){A.exports={element:"Live_element__6Nihf",countdown:"Live_countdown__pppTr",title:"Live_title__6gffS",subintrotext:"Live_subintrotext__p4A71",description:"Live_description__nLjw6",schedule:"Live_schedule__qR4VS",wave:"Live_wave__TKpdg",shapefill:"Live_shapefill__IhWOX",schedules:"Live_schedules__COd7W",eventGroupTitle:"Live_eventGroupTitle__WNfro",hidden:"Live_hidden__3_3oi",event:"Live_event__rirNu",eventTime:"Live_eventTime__a_6uR",eventName:"Live_eventName__aCEBI",judges:"Live_judges__1pY8m",grid:"Live_grid__JzwBg",image:"Live_image__sPncV",link:"Live_link__Ob__U",name:"Live_name__IBns9",role:"Live_role__8m5d_",resources:"Live_resources__2acpw",resourcesWrapper:"Live_resourcesWrapper__c_G7q",resourcesBg:"Live_resourcesBg__vhv1e",resourcesContent:"Live_resourcesContent__tiUJ2",wrapper:"Live_wrapper__B0qe7",buttonWrapper:"Live_buttonWrapper__gNAU9",button:"Live_button__U_zJM",github:"Live_github__5sPtl",discord:"Live_discord__i6oTI",arrow:"Live_arrow__H4B_Z",heroLeft:"Live_heroLeft__7H00R",heroRight:"Live_heroRight__pp_BT",resourcesLeft:"Live_resourcesLeft__Co6R8",resourcesRight:"Live_resourcesRight__xA20J"}},1130:function(A){A.exports={section:"Team_section__Ic6r0",wave:"Team_wave__kcA__",shapefill:"Team_shapefill__PZ1ux",team:"Team_team__Bw_Xv",grid:"Team_grid__CSnma",image:"Team_image__HSdxp",leaves:"Team_leaves__DiBXq",link:"Team_link__EzDoD",name:"Team_name__B3Caj",role:"Team_role__EX90y",committee:"Team_committee__zAYhW",committeeWrapper:"Team_committeeWrapper__GfQ6w",committeeImageGroup:"Team_committeeImageGroup__WFJfG",imageGroup:"Team_imageGroup__MZ7w_",laptop:"Team_laptop__PeOp3",speechbubble:"Team_speechbubble__3UACX",girl:"Team_girl__FU0_s"}},9008:function(A,e,t){A.exports=t(3121)}},function(A){A.O(0,[367,774,888,179],function(){return A(A.s=4634)}),_N_E=A.O()}]);