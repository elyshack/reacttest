(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),c=a.n(r),o=(a(68),a(15)),i=a(16),s=a(18),m=a(17),u=a(19),p=a(34),h=a.n(p),d=(a(31),a(13)),E=a.n(d),f=a(23),b=a.n(f),v=a(40),g=a.n(v),y=a(42),k=a.n(y),w=a(38),j=a.n(w),O=a(26),C=a(37),I=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={ingredients:[],scalingToggle:!1,display:"WIP",tempDisplay:""},a.handleChange=function(e){a.setState({tempDisplay:e.target.value})},a.handleClick=function(){a.setState({display:a.state.tempDisplay})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"recipewrapper"},l.a.createElement("label",null," Recipe Scaler "),l.a.createElement("br",null),l.a.createElement("label",null," ",this.state.display," "),l.a.createElement("br",null),l.a.createElement("input",{type:"text",onChange:this.handleChange.bind(this)})," ",l.a.createElement("input",null),l.a.createElement("br",null),l.a.createElement("input",null)," ",l.a.createElement("input",null),l.a.createElement("br",null),l.a.createElement("input",null)," ",l.a.createElement("input",null),l.a.createElement("br",null),l.a.createElement("input",null)," ",l.a.createElement("input",null),l.a.createElement("br",null),l.a.createElement("input",null)," ",l.a.createElement("input",null),l.a.createElement("br",null),l.a.createElement("input",null)," ",l.a.createElement("input",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(E.a,{onClick:this.handleClick},"Finalize!"))}}]),t}(l.a.Component),A=a(43),N=a.n(A);N.a.initializeApp({apiKey:"AIzaSyCaK8JIurUT8bFCSTLOUlrUmspABLdtchU",authDomain:"idlegame-1f133.firebaseapp.com",databaseURL:"https://idlegame-1f133.firebaseio.com",projectId:"idlegame-1f133",storageBucket:"idlegame-1f133.appspot.com",messagingSenderId:"799768587608"});var S=N.a,_=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Follow @ ",l.a.createElement("a",{className:"App-link",href:"https://twitter.com/elyseshackleton",target:"_blank",rel:"noopener noreferrer"},"Twitter"),",  ",l.a.createElement("a",{className:"App-link",href:"https://instagram.com/elyshack",target:"_blank",rel:"noopener noreferrer"},"Instagram")),l.a.createElement("div",null,l.a.createElement("img",{flex:"1",src:h.a,className:"App-logo",alt:"logo"})))}}]),t}(l.a.Component),x=a(44),K=a.n(x),R=a(58),T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={number:0},a.testClick=function(){a.setState({number:Math.floor(Math.random()*Math.floor(101))}),console.log(a.state.number)},a.handleClick=Object(R.a)(K.a.mark(function e(){var t,n,l,r,c,o;return K.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],n=[],e.prev=2,l=S.database().ref("students").orderByKey(),e.next=6,l.once("value").then(function(e){e.forEach(function(e){var a=e.key,l=e.val();t.push(a),n.push(l)})});case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(2),a.setState({number:e.t0}),console.log(e.t0);case 12:for(r={},c=0;c<n.length;c++)o=Math.floor(Math.random()*Math.floor(101)),r[t[c]]=o;return e.next=16,S.database().ref("students/").update(r);case 16:case"end":return e.stop()}},e,this,[[2,8]])})),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null),l.a.createElement(E.a,{onClick:this.handleClick},"Randomize Database!"),l.a.createElement("div",null))}}]),t}(l.a.Component),B=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(O.a,null,l.a.createElement("div",null,l.a.createElement("view",{width:"98vw"},l.a.createElement("code",null,l.a.createElement("h3",{className:"Title"},"Elyse Shackleton Code Portfolio "),l.a.createElement("div",{className:"Button-bar"},l.a.createElement(E.a,{href:"https://elyshack.github.io/portfolio",variant:"outline-primary"},l.a.createElement(O.b,{className:"link",to:"/portfolio/"}," Home ")),l.a.createElement(g.a,{variant:"outline-primary",as:k.a,title:"Projects",id:"bg-nested-dropdown"},l.a.createElement(b.a.Item,{eventKey:"1",href:"https://elyshack.github.io/testpage",target:"_blank",rel:"noopener noreferrer"},"Html test page"),l.a.createElement(b.a.Item,{eventKey:"2"}," ",l.a.createElement(O.b,{className:"sublink",to:"/portfolio/aputools"},"APU IoT Tools")," "),l.a.createElement(b.a.Item,{eventKey:"3"}," ",l.a.createElement(O.b,{className:"sublink",to:"/portfolio/recipe"},"Recipe Scaler[WIP]")," "),l.a.createElement(b.a.Item,{eventKey:"4"},"Album")),l.a.createElement(E.a,{href:j.a,variant:"outline-primary",download:"Elyse_Shackleton_Resume_June_2018.pdf"},"Resume")))),l.a.createElement("div",null,l.a.createElement("hr",{className:"Line-break"}))),l.a.createElement(C.a,{exact:!0,path:"/portfolio/",component:_}),l.a.createElement(C.a,{path:"/portfolio/recipe",component:I}),l.a.createElement(C.a,{path:"/portfolio/aputools",component:T}))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(116);c.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},31:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/inner_pi.cf5106c3.png"},38:function(e,t,a){e.exports=a.p+"static/media/Elyse_Shackleton_Resume_June_2018.1819b79a.pdf"},63:function(e,t,a){e.exports=a(118)},68:function(e,t,a){}},[[63,2,1]]]);
//# sourceMappingURL=main.cb991977.chunk.js.map