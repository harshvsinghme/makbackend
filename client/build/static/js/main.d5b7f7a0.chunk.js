(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{128:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){"use strict";n.r(t);var a=n(13),c=n(28),r=n.n(c),s=(n(128),n(23)),o=n(14),i=n(102),l=n.n(i),j=n(206),u=n(204),b=n(207),d=n(205),O=n(203),p=n(208),x=n(101),h=n.n(x),m=n(17),f=n.n(m),g=n(35),v=n(48),y=n.n(v),E=n(40),w=n.n(E),N=n(49),A="LOGOUT_REQUEST",L="LOGOUT_SUCCESS",C="LOGOUT_FAIL",S="LOAD_USER_REQUEST",k="LOAD_USER_SUCCESS",_="LOAD_USER_FAIL",I="CLEAR_ERRORS",R="CLEAR_MESSAGES",T="CLIENT_LOGIN_REQUEST",U="CLIENT_LOGIN_SUCCESS",D="CLIENT_LOGIN_FAIL",F="CLIENT_REGISTER_REQUEST",P="CLIENT_REGISTER_SUCCESS",B="CLIENT_REGISTER_FAIL",G="CLIENT_DETAILS",M="NO_CLIENT",H="CLEAR_ERRORS",Y="CLEAR_MESSAGES",z=n(21),Q=n(33),W=n(0),J=n(198),q=n(211),K=n(201),V=n(212),X=n(213),Z=n(97),$=n.n(Z),ee=n(100),te=n.n(ee),ne=n(99),ae=n.n(ne),ce="SHOW_MAIN_DRAWER",re="HIDE_MAIN_DRAWER",se=n(1),oe=function(){var e=Object(z.b)(),t=Object(z.c)((function(e){return e.design})).mainDrawer;return Object(se.jsx)(W.Fragment,{children:Object(se.jsx)(J.a,{anchor:"right",open:t,children:Object(se.jsx)(u.a,{sx:{width:"auto"},role:"presentation",onClick:function(t){e({type:re})},children:Object(se.jsxs)(q.a,{children:[Object(se.jsxs)(K.a,{button:!0,children:[Object(se.jsx)(V.a,{children:Object(se.jsx)($.a,{className:"red"})}),Object(se.jsx)(X.a,{primary:"Close",className:"red"})]}),Object(se.jsxs)(K.a,{children:[Object(se.jsx)(V.a,{children:Object(se.jsx)(ae.a,{className:"black"})}),Object(se.jsx)(s.b,{to:"/",className:"Link black",children:Object(se.jsx)(X.a,{primary:"Home Page"})})]}),Object(se.jsxs)(K.a,{children:[Object(se.jsx)(V.a,{children:Object(se.jsx)(te.a,{className:"black"})}),Object(se.jsx)(s.b,{to:"/addProduct",className:"Link black",children:Object(se.jsx)(X.a,{primary:"Add New Product"})})]})]})})})})},ie=function(){var e=Object(Q.d)(),t=Object(z.b)(),n=Object(z.c)((function(e){return e.auth})).isAuthenticated;return Object(se.jsxs)(W.Fragment,{children:[Object(se.jsx)(oe,{}),Object(se.jsx)(W.Fragment,{children:Object(se.jsxs)(u.a,{sx:{flexGrow:1},children:[Object(se.jsx)(j.a,{position:"fixed",color:"secondary",children:Object(se.jsxs)(b.a,{children:[Object(se.jsx)(p.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:1},onClick:function(e){return t({type:ce})},children:Object(se.jsx)(h.a,{})}),Object(se.jsx)(d.a,{variant:"p",component:"div",sx:{flexGrow:1},children:Object(se.jsx)(s.b,{to:"/",className:"Link white",style:{fontSize:"20px"},children:"Alasca Fashion"})}),n?Object(se.jsx)(O.a,{color:"error",onClick:function(n){t(function(){var e=Object(g.a)(f.a.mark((function e(t){var n,a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:A}),n={headers:{Authorization:w.a.load("token")}},e.next=5,y.a.get("".concat(N.API_URL,"/api/v1/common/logout"),n);case 5:a=e.sent,c=a.data,w.a.remove("token"),t({type:L}),"client"===c.type&&t({type:M}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),t({type:C});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()),e.info("Logged Out.")},variant:"contained",children:"Log out"}):Object(se.jsx)(s.b,{to:"/c/signup",className:"Link white",children:Object(se.jsx)(l.a,{})})]})}),Object(se.jsx)("div",{style:{height:"55px"}})]})})]})},le=n(103),je=function(e){var t=e.title;return Object(se.jsx)(le.a,{children:Object(se.jsx)("title",{children:t})})},ue=(n(155),function(){return Object(se.jsx)("div",{className:"loading",children:Object(se.jsx)("div",{})})}),be=function(){var e=Object(z.c)((function(e){return e.auth})).loading;return Object(se.jsxs)(W.Fragment,{children:[Object(se.jsx)(je,{title:"Home Alasaca"}),e?Object(se.jsx)(ue,{}):Object(se.jsx)(W.Fragment,{children:Object(se.jsx)("h1",{children:"Home"})})]})},de=n(8),Oe=n(15),pe=(n(94),n(209)),xe=n(196),he=n(210),me=n(199),fe=n(106),ge=n.n(fe),ve=n(67),ye=n.n(ve),Ee=n(66),we=n.n(Ee),Ne=n(107),Ae=n.n(Ne),Le=n(108),Ce=n.n(Le),Se=function(){return function(){var e=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:H});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ke=function(){return function(){var e=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:Y});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_e=function(){var e=Object(Q.d)(),t=Object(o.f)(),n=Object(z.b)(),c=Object(z.c)((function(e){return e.client})),r=c.loading,i=c.client,l=c.message,j=c.error;Object(W.useEffect)((function(){j&&(e.error(j),n(Se())),i&&(l&&(e.success(l),n(ke())),t("/"))}),[n,j,e,l,i,t]);var u=Object(W.useState)({name:"",email:"",phone:"",password:""}),b=Object(Oe.a)(u,2),p=b[0],x=b[1],h=p.name,m=p.email,v=p.phone,E=p.password,A=function(e){var t=e.target,n=t.name,c=t.value;x(Object(a.a)(Object(a.a)({},p),{},Object(de.a)({},n,c)))};return Object(se.jsx)(W.Fragment,{children:r?Object(se.jsx)(ue,{}):Object(se.jsxs)(W.Fragment,{children:[Object(se.jsx)(je,{title:"New User | Signup"}),Object(se.jsx)("div",{style:{height:"4vh"}}),Object(se.jsx)(d.a,{variant:"h6",display:"block",sx:{textAlign:"center",marginBottom:"20px"},gutterBottom:!0,children:"New User"}),Object(se.jsx)("div",{className:"mainDiv",children:Object(se.jsxs)(xe.a,{children:[Object(se.jsx)(pe.a,{className:"formControl",children:Object(se.jsx)(me.a,{type:"text",placeholder:"Your Name",className:"input",name:"name",value:h,onChange:function(e){return A(e)},startAdornment:Object(se.jsx)(he.a,{position:"start",children:Object(se.jsx)(we.a,{color:"secondary"})})})}),Object(se.jsx)(pe.a,{className:"formControl",children:Object(se.jsx)(me.a,{type:"email",placeholder:"Your Email",className:"input",name:"email",value:m,onChange:function(e){return A(e)},startAdornment:Object(se.jsx)(he.a,{position:"start",children:Object(se.jsx)(ge.a,{color:"secondary"})})})}),Object(se.jsx)(pe.a,{className:"formControl",children:Object(se.jsx)(me.a,{type:"text",placeholder:"Your Phone",className:"input",sx:{marginBottom:"9px"},name:"phone",value:v,onChange:function(e){return A(e)},startAdornment:Object(se.jsx)(he.a,{position:"start",children:Object(se.jsx)(Ae.a,{color:"secondary"})})})}),Object(se.jsx)(pe.a,{className:"formControl",children:Object(se.jsx)(me.a,{type:"password",placeholder:"Password",className:"input",sx:{marginBottom:"9px"},name:"password",value:E,onChange:function(e){return A(e)},startAdornment:Object(se.jsx)(he.a,{position:"start",children:Object(se.jsx)(ye.a,{color:"secondary"})})})}),Object(se.jsx)(d.a,{variant:"caption",display:"block",sx:{textAlign:"center",marginBottom:"41px"},gutterBottom:!0,children:"Your information is always safe with us :)"}),Object(se.jsx)(O.a,{variant:"contained",color:"secondary",endIcon:Object(se.jsx)(Ce.a,{}),sx:{marginTop:"10px"},onClick:function(t){return h?h.length>30?e.error("Name length can't exceed 30 letters."):m.includes("@")?10!==v.length?e.error("Enter 10 digit long phone number."):E.length<8?e.error("Password must be atleast 8 letters."):void n(function(e,t,n,a){return function(){var c=Object(g.a)(f.a.mark((function c(r){var s,o,i;return f.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,r({type:F}),s={headers:{"Content-Type":"application/json"}},c.next=5,y.a.post("".concat(N.API_URL,"/api/v1/client/signup"),{name:e,email:t,phone:n,password:a},s);case 5:o=c.sent,i=o.data,r({type:k}),r({type:P,payload:{client:i.user,message:"Registered Successfully."}}),w.a.save("token",i.token),c.next=15;break;case 12:c.prev=12,c.t0=c.catch(0),r({type:B,payload:c.t0.response.data.message});case 15:case"end":return c.stop()}}),c,null,[[0,12]])})));return function(e){return c.apply(this,arguments)}}()}(h,m,v,E)):e.error("Invalid Email."):e.error("Name can't be empty.")},children:"Register"}),Object(se.jsx)(s.b,{to:"/c/login",className:"Link mt-2 textCenter fontwb",style:{color:"tomato"},children:Object(se.jsx)("p",{children:"Already User? Login"})})]})})]})})},Ie=n(109),Re=n.n(Ie),Te=function(){var e=Object(Q.d)(),t=Object(o.f)(),n=Object(z.b)(),c=Object(z.c)((function(e){return e.client})),r=c.loading,i=c.client,l=c.message,j=c.error;Object(W.useEffect)((function(){j&&(e.error(j),n(Se())),i&&(l&&(e.success(l),n(ke())),t("/"))}),[n,j,e,l,i,t]);var u=Object(W.useState)({ID:"",password:""}),b=Object(Oe.a)(u,2),p=b[0],x=b[1],h=p.ID,m=p.password,v=function(e){var t=e.target,n=t.name,c=t.value;x(Object(a.a)(Object(a.a)({},p),{},Object(de.a)({},n,c)))};return Object(se.jsx)(W.Fragment,{children:r?Object(se.jsx)(ue,{}):Object(se.jsxs)(W.Fragment,{children:[Object(se.jsx)(je,{title:"Login | Alasca Fashion"}),Object(se.jsx)("div",{style:{height:"6vh"}}),Object(se.jsx)(d.a,{variant:"h6",display:"block",sx:{textAlign:"center",marginBottom:"32px"},gutterBottom:!0,children:"Login"}),Object(se.jsx)("div",{className:"mainDiv",children:Object(se.jsxs)(xe.a,{children:[Object(se.jsx)(pe.a,{className:"formControl",children:Object(se.jsx)(me.a,{type:"text",placeholder:"Email or Phone",className:"input",name:"ID",value:h,onChange:function(e){return v(e)},startAdornment:Object(se.jsx)(he.a,{position:"start",children:Object(se.jsx)(we.a,{color:"secondary"})})})}),Object(se.jsx)(pe.a,{className:"formControl",children:Object(se.jsx)(me.a,{type:"password",placeholder:"Password",className:"input",sx:{marginBottom:"9px"},name:"password",value:m,onChange:function(e){return v(e)},startAdornment:Object(se.jsx)(he.a,{position:"start",children:Object(se.jsx)(ye.a,{color:"secondary"})})})}),Object(se.jsx)(d.a,{variant:"caption",display:"block",sx:{textAlign:"center",marginBottom:"41px"},gutterBottom:!0,children:"Your information is always safe with us :)"}),Object(se.jsx)(O.a,{variant:"contained",color:"secondary",endIcon:Object(se.jsx)(Re.a,{}),sx:{marginTop:"10px"},onClick:function(t){return h?m?void n(function(e,t){return function(){var n=Object(g.a)(f.a.mark((function n(a){var c,r,s;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:T}),c={headers:{"Content-Type":"application/json"}},n.next=5,y.a.post("".concat(N.API_URL,"/api/v1/client/login"),{ID:e,password:t},c);case 5:r=n.sent,s=r.data,a({type:k}),a({type:U,payload:{client:s.user,message:"Logged In."}}),w.a.save("token",s.token),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),a({type:D,payload:n.t0.response.data.message});case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()}(h,m)):e.error("Password can't be empty."):e.error("Email or Phone can't be empty.")},children:"Login"}),Object(se.jsx)(s.b,{to:"/c/signup",className:"Link mt-2 textCenter fontwb",style:{color:"tomato"},children:Object(se.jsx)("p",{children:"New User? Signup"})})]})})]})})},Ue=n(57),De=n(111),Fe=n(110),Pe=Object(Ue.combineReducers)({design:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mainDrawer:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return{mainDrawer:!0};case re:return{mainDrawer:!1};default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:case A:return Object(a.a)(Object(a.a)({},e),{},{loading:!0});case L:return{loading:!1,isAuthenticated:!1};case k:return Object(a.a)(Object(a.a)({},e),{},{loading:!1,isAuthenticated:!0});case _:return Object(a.a)(Object(a.a)({},e),{},{loading:!1,isAuthenticated:!1});case C:return Object(a.a)(Object(a.a)({},e),{},{loading:!1});case I:return Object(a.a)(Object(a.a)({},e),{},{error:null});case R:return Object(a.a)(Object(a.a)({},e),{},{message:null});default:return e}},client:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:case F:return Object(a.a)(Object(a.a)({},e),{},{loading:!0});case U:case P:return Object(a.a)(Object(a.a)({},e),{},{loading:!1,client:t.payload.client,message:t.payload.message});case D:case B:return Object(a.a)(Object(a.a)({},e),{},{loading:!1,client:null,error:t.payload});case G:return Object(a.a)(Object(a.a)({},e),{},{client:t.payload});case M:return Object(a.a)(Object(a.a)({},e),{},{client:null});case H:return Object(a.a)(Object(a.a)({},e),{},{error:null});case Y:return Object(a.a)(Object(a.a)({},e),{},{message:null});default:return e}}}),Be=[De.a],Ge=Object(Ue.createStore)(Pe,{},Object(Fe.composeWithDevTools)(Ue.applyMiddleware.apply(void 0,Be)));var Me=function(){return Object(W.useEffect)((function(){Ge.dispatch(function(){var e=Object(g.a)(f.a.mark((function e(t){var n,a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:S}),n={headers:{Authorization:w.a.load("token")}},e.next=5,y.a.get("".concat(N.API_URL,"/api/v1/common/profile"),n);case 5:a=e.sent,"client"===(c=a.data).user.type&&t({type:G,payload:c.user}),t({type:k}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),w.a.remove("token"),t({type:_});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(se.jsxs)(s.a,{children:[Object(se.jsx)(ie,{}),Object(se.jsxs)(o.c,{children:[Object(se.jsx)(o.a,{exact:!0,path:"/",element:Object(se.jsx)(be,{})}),Object(se.jsx)(o.a,{exact:!0,path:"/c/signup",element:Object(se.jsx)(_e,{})}),Object(se.jsx)(o.a,{exact:!0,path:"/c/login",element:Object(se.jsx)(Te,{})})]})]})},He=n(112),Ye={timeout:5e3,position:Q.b.BOTTOM_CENTER,transition:Q.c.SCALE};r.a.render(Object(se.jsx)(z.a,{store:Ge,children:Object(se.jsx)(Q.a,Object(a.a)(Object(a.a)({template:He.a},Ye),{},{children:Object(se.jsx)(Me,{})}))}),document.getElementById("root"))},49:function(e,t){e.exports={API_URL:""}},94:function(e,t,n){}},[[156,1,2]]]);
//# sourceMappingURL=main.d5b7f7a0.chunk.js.map