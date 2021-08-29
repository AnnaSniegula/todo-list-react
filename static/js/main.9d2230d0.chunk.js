(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{39:function(n,e,t){"use strict";t.r(e);var r,o,c,a,i,s,d,u,l,b,j,f,h,p,x,g,O,m,k,v=t(1),w=t.n(v),y=t(16),z=t.n(y),D=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),o(n),c(n),a(n)}))},T=t(5),C=t(9),S=t(6),I=Object(T.b)(r||(r=Object(S.a)(["\n    html {\n        box-sizing: border-box;\n    }\n\n    *, ::after, ::before {\n        box-sizing: inherit;\n    }\n\n    body {\n        background-color: ",";\n    }\n"])),(function(n){return n.theme.colors.grey})),F=t(26),L=T.d.form(o||(o=Object(S.a)(["\n    background-color: ",";\n    border: 0px;\n    padding: 20px;\n    display: flex;\n    justify-content: space-between;\n\n    @media(max-width:","px) {\n        flex-direction: column;  \n    }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.breakpoints.mobile})),E=T.d.input(c||(c=Object(S.a)([" \n    border: 2px solid ",";\n    padding: 10px;\n    flex-grow: 1;\n    margin: 10px;\n"])),(function(n){return n.theme.colors.grey})),H=T.d.button(a||(a=Object(S.a)(["\n    background-color: ",";\n    color: ",";\n    padding: 10px;\n    border: none;\n    font-size: 15px;\n    margin: 10px;\n    cursor: pointer;\n    transition: 0.5s linear;\n\n    &:hover {\n        filter: brightness(110%); \n        transform: scale(1.1);\n    }\n\n    &:active {\n        filter: brightness(130%); \n    }\n"])),(function(n){return n.theme.colors.teal}),(function(n){return n.theme.colors.white})),J=t(24),P=t(14),A="tasks",B=function(n){return localStorage.setItem(A,JSON.stringify(n))},G=Object(P.b)({name:"tasks",initialState:{tasks:JSON.parse(localStorage.getItem(A))||[],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleHideDone:function(n){n.hideDone=!n.hideDone},toggleTaskDone:function(n,e){var t=n.tasks.findIndex((function(n){return n.id===e.payload}));n.tasks[t].done=!n.tasks[t].done},removeTask:function(n,e){var t=n.tasks.findIndex((function(n){return n.id===e.payload}));n.tasks.splice(t,1)},setAllDone:function(n){var e,t=n.tasks,r=Object(J.a)(t);try{for(r.s();!(e=r.n()).done;){e.value.done=!0}}catch(o){r.e(o)}finally{r.f()}},fetchExampleTasks:function(){},setTasks:function(n,e){var t=e.payload;n.tasks=t}}}),N=G.actions,U=N.addTask,M=N.toggleHideDone,R=N.toggleTaskDone,q=N.removeTask,K=N.setAllDone,Q=N.fetchExampleTasks,V=N.setTasks,W=function(n){return function(n){return n.tasks}(n).tasks},X=G.reducer,Y=t(3),Z=function(){var n=Object(v.useState)(""),e=Object(F.a)(n,2),t=e[0],r=e[1],o=Object(v.useRef)(null),c=Object(C.b)();return Object(Y.jsxs)(L,{onSubmit:function(n){n.preventDefault(),""!==t.trim()&&(c(U({content:t,done:!1,id:Object(P.c)()})),r(""),o.current.focus())},children:[Object(Y.jsx)(E,{ref:o,value:t,type:"text",placeholder:"Co jest do zrobienia?",onChange:function(n){var e=n.target;return r(e.value)}}),Object(Y.jsx)(H,{children:"Dodaj zadanie"})]})},$=T.d.ul(i||(i=Object(S.a)(["\n    background-color: ",";\n    padding: 30px;\n    margin: 0;\n"])),(function(n){return n.theme.colors.white})),_=T.d.li(s||(s=Object(S.a)(["  \n    border-bottom: 1px solid ",";\n    display: grid;\n    align-items: center;\n    padding: 5px;\n    grid-template-columns: auto 1fr auto;\n    grid-gap: 15px;\n\n    ","\n"])),(function(n){return n.theme.colors.grey}),(function(n){return n.hidden&&Object(T.c)(d||(d=Object(S.a)(["\n        display: none;\n    "])))})),nn=T.d.span(u||(u=Object(S.a)(["\n    word-break: break-all;\n\n    ","\n"])),(function(n){return n.done&&Object(T.c)(l||(l=Object(S.a)(["\n        text-decoration: line-through;\n    "])))})),en=T.d.button(b||(b=Object(S.a)(["\n    width: 30px;\n    height: 30px;\n    border: none;\n    color: ",";\n    margin: 5px;\n    text-align: center;\n    transition: 0.5s linear;\n\n    ","\n\n    ","\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.toggleDone&&Object(T.c)(j||(j=Object(S.a)(["\n    background-color: ",";\n\n        &:hover {\n            filter: brightness(110%);\n        }\n\n        &:active {\n            filter: brightness(130%); \n        }\n    "])),(function(n){return n.theme.colors.green}))}),(function(n){return n.remove&&Object(T.c)(f||(f=Object(S.a)(["\n    background-color: ",";\n\n        &:hover {\n            filter: brightness(110%);\n\n        &:active {\n            filter: brightness(130%); \n        }\n    "])),(function(n){return n.theme.colors.red}))})),tn=function(){var n=Object(C.c)(W),e=n.tasks,t=n.hideDone,r=Object(C.b)();return Object(Y.jsx)($,{children:e.map((function(n){return Object(Y.jsxs)(_,{hidden:n.done&&t,children:[Object(Y.jsx)(en,{toggleDone:!0,onClick:function(){return r(R(n.id))},children:n.done?"\u2713":""}),Object(Y.jsx)(nn,{done:n.done,children:n.content}),Object(Y.jsx)(en,{remove:!0,onClick:function(){return r(q(n.id))},children:"\ud83d\uddd1"})]},n.id)}))})},rn=T.d.div(h||(h=Object(S.a)([" \n    display: flex;\n    flex-wrap: wrap;\n"]))),on=T.d.button(p||(p=Object(S.a)(["\n    background-color: ",";\n    color: ",";\n    transition: color 0.3s;\n    border: none;\n    cursor: pointer;\n   \n\n    @media (max-width: ","px) {\n        flex-basis: 100%;\n        flex-direction: column;\n        padding: 10px;\n        align-items: center;  \n    }\n\n    &:hover {\n        filter: brightness(110%);\n    }\n\n    &:active {\n        filter: brightness(120%);\n    }\n\n    &:disabled {\n        color: ",";\n    }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.teal}),(function(n){return n.theme.breakpoints.mobile}),(function(n){return n.theme.colors.darkGrey})),cn=function(){var n=Object(C.c)(W),e=n.tasks,t=n.hideDone,r=Object(C.b)();return Object(Y.jsxs)(rn,{children:[Object(Y.jsx)(on,{onClick:function(){return r(Q())},children:"Pobierz przyk\u0142adowe zadania"}),e.length>0&&Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)(on,{onClick:function(){return r(M())},children:[t?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(Y.jsx)(on,{onClick:function(){return r(K())},disabled:e.every((function(n){return n.done})),children:"Uko\u0144cz wszytkie"})]})]})},an=T.d.section(x||(x=Object(S.a)(["\n    background-color: ",";\n    margin-bottom: 10px;\n"])),(function(n){return n.theme.colors.white})),sn=T.d.header(g||(g=Object(S.a)(["  \n    display: grid;\n    grid-template-columns: auto auto;\n    grid-gap: 20px;\n    justify-content: space-between;\n    border-bottom: 2px solid ",";\n    align-items: center;\n    padding: 20px;\n\n\n    @media (max-width: ","px) {\n        grid-template-columns: 1fr;  \n    }\n"])),(function(n){return n.theme.colors.grey}),(function(n){return n.theme.breakpoints.mobile})),dn=T.d.h2(O||(O=Object(S.a)(["\n    font-size: 20px;\n    font-weight: bold;\n    padding: 30px;\n    margin-bottom: 2px;\n\n    ","\n"])),(function(n){return n.tasks&&Object(T.c)(m||(m=Object(S.a)(["\n        font-size: 20px;\n        font-weight: bold;\n        padding: 0px 20px;\n    "])))})),un=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(Y.jsxs)(an,{children:[Object(Y.jsxs)(sn,{children:[Object(Y.jsx)(dn,{tasks:!0,children:e}),r]}),t]})},ln=function(n){var e=n.title;return Object(Y.jsx)("header",{children:Object(Y.jsx)("h1",{children:e})})},bn=T.d.main(k||(k=Object(S.a)(["\n    font-family: 'Lato', sans-serif;\n    margin: 0 auto;\n    max-width: 800px;\n    padding: 20px;\n"]))),jn=function(n){var e=n.children;return Object(Y.jsx)(bn,{children:e})};var fn=function(){return Object(Y.jsxs)(jn,{children:[Object(Y.jsx)(ln,{title:"Lista zada\u0144"}),Object(Y.jsx)(un,{title:"Dodaj nowe zadanie",body:Object(Y.jsx)(Z,{})}),Object(Y.jsx)(un,{title:"Lista zada\u0144",body:Object(Y.jsx)(tn,{}),extraHeaderContent:Object(Y.jsx)(cn,{})})]})},hn=function(){return Object(Y.jsx)(fn,{})},pn=t(27),xn=t(10),gn=t.n(xn),On=t(12),mn=t(25),kn=function(){var n=Object(mn.a)(gn.a.mark((function n(){var e;return gn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("todo-list-react/exampleTasks.json");case 2:return(e=n.sent).ok||new Error(e.statusText),n.next=6,e.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),vn=gn.a.mark(zn),wn=gn.a.mark(Dn),yn=gn.a.mark(Tn);function zn(){var n;return gn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(On.a)(kn);case 3:return n=e.sent,e.next=6,Object(On.b)(V(n));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(On.a)(alert,"Cos posz\u0142o nie tak!");case 12:case"end":return e.stop()}}),vn,null,[[0,8]])}function Dn(){var n;return gn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(On.c)(W);case 2:return n=e.sent,e.next=5,Object(On.a)(B,n);case 5:case"end":return e.stop()}}),wn)}function Tn(){return gn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(On.e)(Q.type,zn);case 2:return n.next=4,Object(On.d)("*",Dn);case 4:case"end":return n.stop()}}),yn)}var Cn=Object(pn.a)(),Sn=Object(P.a)({reducer:{tasks:X},middleware:[Cn]});Cn.run(Tn);var In=Sn;z.a.render(Object(Y.jsx)(w.a.StrictMode,{children:Object(Y.jsx)(C.a,{store:In,children:Object(Y.jsxs)(T.a,{theme:{colors:{white:"hsl(0, 0%, 100%)",grey:"hsl(0, 0%, 93%)",darkGrey:"hsl(0, 0%, 80%)",teal:"hsl(180, 100%, 25%)",green:"hsl(120, 100%, 25%)",red:"hsl(0, 100%, 50%)"},breakpoints:{mobile:767}},children:[Object(Y.jsx)(I,{}),Object(Y.jsx)(hn,{})]})})}),document.getElementById("root")),D()}},[[39,1,2]]]);
//# sourceMappingURL=main.9d2230d0.chunk.js.map