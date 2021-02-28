(this["webpackJsonptemperature-client"]=this["webpackJsonptemperature-client"]||[]).push([[0],{46:function(t,e,a){},67:function(t,e,a){},68:function(t,e,a){},69:function(t,e,a){},72:function(t,e,a){},73:function(t,e,a){},99:function(t,e,a){"use strict";a.r(e);var n=a(3),r=a(0),c=a.n(r),i=a(31),s=a.n(i),u=a(21),o=a(25),l=(a(67),a(15)),d=a(23),j=a(8),m=function(t){return{type:"INITIAL_FETCH",data:t}},O=function(t){return{type:"INCREMENTAL_FETCH",data:t}},b=(a(68),a(69),a(104)),f=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("aside",{className:"left-nav left-nav--desktop",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{className:"left-nav__item ",children:Object(n.jsx)(d.b,{to:"/current",activeClassName:"active",className:"left-nav-item__link",children:"Current temperature"})}),Object(n.jsx)("li",{className:"left-nav__item",children:Object(n.jsx)(d.b,{to:"/statistics",activeClassName:"active",className:"left-nav-item__link",children:"Statistics"})})]})}),Object(n.jsx)("aside",{className:"left-nav left-nav--mobile",children:Object(n.jsx)(b.a,{id:"mobile-menu",items:[{id:"/current",text:"Current temperature"},{id:"/statistics",text:"Statistics"}],itemToString:function(t){return t?t.text:""},itemToElement:function(t){return Object(n.jsx)(d.b,{to:t.id,activeClassName:"active",className:"left-nav-item__link",children:t.text})},label:""})})]})},h=a(6),p=a(105),x=a(102),v=a(103),g=(a(72),function(t){var e=t.children,a=t.cardInARow;return Object(n.jsx)("div",{className:"card card--".concat(a),children:e})});g.defaultProps={children:"",cardInARow:4};var N=g,S=(a(73),function(t){var e=t.data,a=t.error;if(!a&&!e.length)return Object(n.jsx)(p.a,{active:!0,withOverlay:!0});if(a)return"error: ".concat(a.message||a);var r=e[0]||{};return Object(n.jsx)("div",{className:"page-inner",children:Object(n.jsxs)(x.a,{children:[Object(n.jsx)(v.a,{children:Object(n.jsxs)("small",{className:"timestamp",children:["Last measurement at:"," ","".concat(new Date(+r.timestamp).toLocaleDateString(),", ").concat(new Date(+r.timestamp).toLocaleTimeString())]})}),Object(n.jsxs)(v.a,{children:[Object(n.jsxs)(N,{children:[Object(n.jsx)("h2",{children:"Current temperature"}),Object(n.jsxs)("p",{className:"centered",children:[r.temp," \xb0C"]})]}),Object(n.jsxs)(N,{children:[Object(n.jsx)("h2",{children:"Current humidity"}),Object(n.jsxs)("p",{className:"centered",children:[r.humidity,"%"]})]})]})]})})});S.defaultProps={data:null,error:null};var y=Object(u.b)((function(t,e){return Object(h.a)(Object(h.a)({},e),{},{data:t.load.data,error:t.load.error})}),(function(t){return{fetchInit:function(e){return t(m(e))},fetchIncrement:function(e){return t(O(e))}}}))(S),I=a(48),_={title:"History",axes:{bottom:{title:"Time",mapsTo:"date",scaleType:"time"},left:{mapsTo:"value",scaleType:"linear",includeZero:!1}},curve:"curveNatural",height:"20rem",legend:{enabled:!1}},T=Object(h.a)(Object(h.a)({},JSON.parse(JSON.stringify(_))),{},{getFillColor:function(){return"#005d5d"},getStrokeColor:function(){return"#003939"}});T.axes.left.domain=[20,30];var w=Object(h.a)(Object(h.a)({},JSON.parse(JSON.stringify(_))),{},{getFillColor:function(){return"#1192e8"},getStrokeColor:function(){return"#0f7dc7"}});w.axes.left.domain=[20,40];var C=function(t){var e=t.data,a=t.options;return Object(n.jsx)(I.LineChart,{data:e,options:a})};C.defaultProps={data:[],options:T};var E=C,L=function(t){return(null===t||void 0===t?void 0:t.reduce((function(t,e){return t+e}),0))/(null===t||void 0===t?void 0:t.length)||0},J=function(t){return[t.map((function(t){return{value:+t.temp,group:"Temperature",date:new Date(+t.timestamp).toISOString()}})),t.map((function(t){return{value:+t.humidity,group:"Humidity",date:new Date(+t.timestamp).toISOString()}}))]},D=(a(46),function(t,e){if(!t||0===t.length)return t;if(e>+t[0].timestamp||!e)return[t[0],0];if(e<+t[t.length-1].timestamp)return[t[t.length-1],t.length-1];for(var a=+t[0].timestamp,n=0;a>e;)a=+t[n+=1].timestamp;return[t[n],n]}),F=function(t,e,a){if(!t||0===t.length)return t;var n=a||+t[0].timestamp,r=D(t,a),c=Object(l.a)(r,2),i=(c[0],c[1]),s=D(t,n-6e4*e),u=Object(l.a)(s,2),o=(u[0],u[1]);return t.slice(i,o+1)},M=a(28),A=function(t){var e=Math.max.apply(Math,Object(M.a)(t.map((function(t){return t.temp}))))+.25,a=Math.min.apply(Math,Object(M.a)(t.map((function(t){return t.temp}))))-.25,n=Math.max.apply(Math,Object(M.a)(t.map((function(t){return t.humidity}))))+.5;return[a,e,Math.min.apply(Math,Object(M.a)(t.map((function(t){return t.humidity}))))-.5,n]},k=function(t){var e=t.data,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1440;if(!t||!(t instanceof Array))return t;for(var a=[],n=0;n<Math.ceil(t.length/e);n++){var r=t.slice(n*e,n*e+e),c={temp:L(r.map((function(t){return+t.temp}))).toFixed(1),humidity:L(r.map((function(t){return+t.humidity}))).toFixed(1),timestamp:L(r.map((function(t){return+t.timestamp}))).toFixed()};c&&a.push(c)}return a}(F(e,1440),60),r=J(a),c=Object(l.a)(r,2),i=c[0],s=c[1],u=A(a),o=Object(l.a)(u,4),d=o[0],j=o[1],m=o[2],O=o[3],b=JSON.parse(JSON.stringify(T));b.axes.left.domain=[+d,+j];var f=JSON.parse(JSON.stringify(w));return f.axes.left.domain=[+m,+O],Object(n.jsxs)("div",{className:"last-day-graphs graphs",children:[Object(n.jsx)(N,{cardInARow:2,children:Object(n.jsx)(E,{data:i,options:Object(h.a)(Object(h.a)({},b),{},{title:"Last day temperatures"})})}),Object(n.jsx)(N,{cardInARow:2,children:Object(n.jsx)(E,{data:s,options:Object(h.a)(Object(h.a)({},f),{},{title:"Last day humidity"})})})]})},R=function(t){var e=t.data,a=F(e,30),r=J(a),c=Object(l.a)(r,2),i=c[0],s=c[1],u=A(a),o=Object(l.a)(u,4),d=o[0],j=o[1],m=o[2],O=o[3],b=JSON.parse(JSON.stringify(T));b.axes.left.domain=[+d,+j];var f=JSON.parse(JSON.stringify(w));return f.axes.left.domain=[+m,+O],Object(n.jsxs)("div",{className:"last-hour-graphs graphs",children:[Object(n.jsx)(N,{cardInARow:2,children:Object(n.jsx)(E,{data:i,options:Object(h.a)(Object(h.a)({},b),{},{title:"Last 30 min temperatures"})})}),Object(n.jsx)(N,{cardInARow:2,children:Object(n.jsx)(E,{data:s,options:Object(h.a)(Object(h.a)({},f),{},{title:"Last 30 min humidity"})})})]})},H=function(t){var e=t.data;return e&&e.length?Object(n.jsxs)("main",{children:[Object(n.jsxs)("small",{className:"timestamp timestamp--padded",children:["Last measurement at:"," ","".concat(new Date(+e[0].timestamp).toLocaleDateString(),", ").concat(new Date(+e[0].timestamp).toLocaleTimeString())]}),Object(n.jsx)(k,{data:e}),Object(n.jsx)(R,{data:e})]}):Object(n.jsx)(p.a,{active:!0,withOverlay:!0})};H.defaultProps={data:null};var P=Object(u.b)((function(t,e){return Object(h.a)(Object(h.a)({},e),{},{data:t.load.data})}),(function(t){return{fetchInit:function(e){return t(m(e))},fetchIncrement:function(e){return t(O(e))}}}))(H),X=function(){return Object(n.jsx)(j.a,{to:"/current"})},B=Object(u.b)(null,(function(t){return{fetchInit:function(e){return t(m(e))},fetchIncrement:function(e){return t(O(e))}}}))((function(t){var e=t.fetchInit,a=t.fetchIncrement,c=Object(r.useState)(!1),i=Object(l.a)(c,2),s=i[0],u=i[1];Object(r.useEffect)((function(){s||fetch("https://bence-temperature-api.herokuapp.com/api/getTemps").then((function(t){return t.json()})).then((function(t){u(!0),e(t.temperatureData)})).catch((function(t){u(!0),e({data:null,error:t})}))}),[s]);var o=Object(r.useState)(!1),m=Object(l.a)(o,2),O=m[0],b=m[1];return Object(r.useEffect)((function(){O||(new EventSource("https://bence-temperature-api.herokuapp.com/api/events").onmessage=function(t){var e;try{e=JSON.parse(t.data),a(e)}catch(n){console.warn(n)}},b(!0))}),[O]),Object(n.jsxs)(d.a,{children:[Object(n.jsx)(f,{}),Object(n.jsx)("div",{className:"app",children:Object(n.jsxs)(j.d,{children:[Object(n.jsx)(j.b,{path:"/statistics",children:Object(n.jsx)(P,{})}),Object(n.jsx)(j.b,{path:"/current",children:Object(n.jsx)(y,{isLoading:!1})}),Object(n.jsx)(j.b,{path:"/",children:Object(n.jsx)(X,{})})]})})]})})),U=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,106)).then((function(e){var a=e.getCLS,n=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),n(t),r(t),c(t),i(t)}))},V={data:[],error:null},Z=Object(o.b)({load:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"INITIAL_FETCH":return Object(h.a)(Object(h.a)({},t),{},{data:e.data,error:e.error||null});case"INCREMENTAL_FETCH":return Object(h.a)(Object(h.a)({},t),{},{data:[e.data].concat(t.data)});default:return t}}}),q=Object(o.c)(Z,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(n.jsx)(u.a,{store:q,children:Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(B,{})})}),document.getElementById("root")),U()}},[[99,1,2]]]);
//# sourceMappingURL=main.7574471e.chunk.js.map