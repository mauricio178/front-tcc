(this.webpackJsonpsistemagp=this.webpackJsonpsistemagp||[]).push([[0],{242:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t.n(r),a=t(94),o=t.n(a),c=t(5),s=t.n(c),l=t(11),d=t(8),b=t(4),p=t(95);var u=t.n(p).a.create({baseURL:"https://projeto-gp.herokuapp.com/"});u.interceptors.request.use((function(n){var e=n.profile,t=n.url,r=n.method,i=function(n){var e=n.permissions,t=n.url,r=n.method,i="";return!!t.includes("users")||!!e&&("team"===t&&"get"===r&&(i="LIST_TEAM"),!!e.find((function(n){return n.name===i})))}({permissions:null===e||void 0===e?void 0:e.permissions,url:String(t),method:String(r)});return console.log({PERMITED:i}),n}),(function(n){return Promise.reject(n)}));var j,x=t(98),f=t.n(x),m=t(2),h=t(3),g=h.b.div(j||(j=Object(m.a)(["\n  flex: 1;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  position: absolute;\n  background-color: #fff;\n  opacity: .5;\n"]))),O=t(0),v=function(){return Object(O.jsx)(g,{children:Object(O.jsx)(f.a,{size:60,margin:20,color:"#008080"})})},y=Object(r.createContext)({}),w=function(n){var e=n.children,t=Object(r.useState)(!1),i=Object(d.a)(t,2),a=i[0],o=i[1],c=Object(r.useCallback)((function(){o((function(n){return!n}))}),[]);return Object(O.jsxs)(y.Provider,{value:{toggleLoading:c},children:[e,a&&Object(O.jsx)(v,{})]})};function _(){var n=Object(r.useContext)(y);if(!n)throw new Error("useLoader must be used with LoaderProvider");return n}var k=t(27),C=t.n(k),z=Object(r.createContext)({}),E=C.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,didOpen:function(n){n.addEventListener("mouseenter",C.a.stopTimer),n.addEventListener("mouseleave",C.a.resumeTimer)}}),F=function(n){var e=n.children,t=Object(b.f)(),i=_().toggleLoading,a=Object(r.useState)({}),o=Object(d.a)(a,2),c=o[0],p=o[1];Object(r.useEffect)((function(){var n=c.token,e=c.profile;n&&(u.defaults.headers.authorization="Bearer ".concat(n),u.defaults.profile=e)}),[c]),Object(r.useEffect)((function(){var n=localStorage.getItem("@GP:user"),e=localStorage.getItem("@GP:token"),t=localStorage.getItem("@GP:profile");n&&e&&p({token:e,user:JSON.parse(n),profile:t?JSON.parse(t):{}})}),[e]);var j=Object(r.useCallback)((function(){return C.a.fire({title:"Deseja realmente sair da plataforma?",showCancelButton:!0,confirmButtonText:"Sim",confirmButtonColor:"#008080",cancelButtonText:"Cancelar"}).then((function(n){if(n.isConfirmed)return localStorage.removeItem("@GP:user"),localStorage.removeItem("@GP:token"),localStorage.removeItem("@GP:profile"),p({}),!0})),!1}),[c]),x=Object(r.useCallback)(function(){var n=Object(l.a)(s.a.mark((function n(e){var t,r,a,o,c,l,d;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.email,r=e.password,i(),n.prev=2,n.next=5,u.post("users/login",{email:t,password:r});case 5:a=n.sent,o=a.data,c=o.user,l=o.token,d=o.profile,localStorage.setItem("@GP:user",JSON.stringify(c)),localStorage.setItem("@GP:profile",d&&JSON.stringify(d)),localStorage.setItem("@GP:token",l),p({token:l,user:c,profile:d||{}}),E.fire({icon:"success",title:"".concat(t," autenticado com sucesso")}),i(),n.next=21;break;case 16:throw n.prev=16,n.t0=n.catch(2),i(),console.log(n.t0.message),new Error("Credenciais inv\xe1lidas");case 21:case"end":return n.stop()}}),n,null,[[2,16]])})));return function(e){return n.apply(this,arguments)}}(),[t,i]);return Object(O.jsx)(z.Provider,{value:{login:x,data:c,logout:j},children:e})};function G(){var n=Object(r.useContext)(z);if(!n)throw new Error("useAuth must be used with AuthProvider");return n}var S,B,P,A,D,q,I,L,N,R,T,M,J,U,V,H,K,Q,W,X,Y,Z,$,nn,en=function(n){var e=n.children;return Object(O.jsx)(w,{children:Object(O.jsx)(F,{children:e})})},tn=t(15),rn=t(17),an=t(10),on=t(22),cn=t(7),sn=(h.b.button(S||(S=Object(m.a)(["\n  border: 1px solid;\n"]))),h.b.div(B||(B=Object(m.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nmargin-top: 1em;\n"])))),ln=(h.b.p(P||(P=Object(m.a)(["\n  margin: 1em 5em;\n  ;\n  font-size: 10px;\n"]))),h.b.h1(A||(A=Object(m.a)(["\nmargin-left: 65px;\n;\ncolor: #2F4F4F;\nfont-size: 20px;\n"])))),dn=(h.b.p(D||(D=Object(m.a)(["\nmargin: 2em;\nmargin-top: 5px;\n;\ncolor: \t#B0C4DE;\n"]))),h.b.button(q||(q=Object(m.a)(["\nborder: 1px solid #25692A;\ncolor: white;\nborder-radius: 3px;\ncursor:pointer;\n;\nfont-weight: bold;\nfont-size: 12px;\nbackground-color: \t#FF4500;\npadding: 5px 48px;\nmargin-left: 79px;\nmargin-top: 1.5em;\nmargin-bottom: 2px;\n"])))),bn=(h.b.button(I||(I=Object(m.a)(["\n  padding: 5px;\n  ;\n  font-weight:bold;\n  background-color: Transparent;\n  border: 1px solid \t#B0C4DE;\n  color: \t#B0C4DE;\n  margin-left: 2em;\n    \n"]))),h.b.div(L||(L=Object(m.a)(["\n  margin: 2em 5em;\n"])))),pn=(h.b.span(N||(N=Object(m.a)(["\ncolor: #f00;\n"]))),t(45)),un=t(25),jn=h.b.span(R||(R=Object(m.a)(["\n  color: #f00;\n"]))),xn=h.b.div(T||(T=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 7px;\n  margin-top: 12px;\n"]))),fn=h.b.input(M||(M=Object(m.a)(["\n  outline: none !important;\n  border: 0px solid;\n  box-shadow: 0 0 3px #000000;  \n  color: \t#363636;\n  padding: 5px 20px;\n  border-radius: 3px;\n  font-size: 12px;\n  ;\n"])));function mn(n){var e=n.name,t=Object(pn.a)(n,["name"]),i=Object(r.useRef)(null),a=Object(un.c)(e),o=a.fieldName,c=a.defaultValue,s=a.registerField,l=a.error;return Object(r.useEffect)((function(){s({name:o,ref:i.current,path:"value"})}),[o,i,s]),Object(O.jsxs)(xn,{children:[Object(O.jsx)(fn,Object(an.a)({ref:i,defaultValue:c},t)),l&&Object(O.jsx)(jn,{style:{color:"#f00"},children:l})]})}h.b.div(J||(J=Object(m.a)(["\nmargin-top: 1em;\n\n"]))),h.b.h1(U||(U=Object(m.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\n;\ncolor: #2F4F4F;\n"])));var hn=h.b.h1(V||(V=Object(m.a)(["\nmargin-left: 1em;\nfont-size: 27px;\nmargin-top: 1em;\nflex-direction: column;\n;\ncolor: #D3D3D3;\n"]))),gn=(h.b.p(H||(H=Object(m.a)(["\n  margin: 3em;\n  ;\n  font-size: 10px;\n"]))),h.b.p(K||(K=Object(m.a)(["\nmargin: 2em;\nmargin-top: 5px;\n;\ncolor: \t#B0C4DE;\n"])))),On=(h.b.button(Q||(Q=Object(m.a)(["\nborder: 1px solid #25692A;\ncolor: white;\nborder-radius: 3px;\ncursor:pointer;\n;\nfont-weight: bold;\nfont-size: 12px;\nbackground-color: \t#FF4500;\npadding: 5px 50px;\nmargin-left: 42px;\nmargin-top: 1em;\nmargin-bottom: 1em;\n"]))),h.b.button(W||(W=Object(m.a)(["\n  padding: 5px;\n  font-family:Century Gothic;\n  font-weight:bold;\n  background-color: Transparent;\n  border: 1px solid \t#B0C4DE;\n  color: \t#B0C4DE;\n  margin-left: 2em;\n  cursor: pointer;\n"])))),vn=h.b.div(X||(X=Object(m.a)(["\nbackground: #008080;\nwidth: 100vw;\nheight: 100vh;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n"]))),yn=h.b.div(Y||(Y=Object(m.a)(['\nwidth: 28em;\nheight: 32em;\nfloat: left;\nalign-items: center;\nbackground-image: url("img1-login.png");\nborder-radius: 0px 15px 15px 0px;\n']))),wn=h.b.div(Z||(Z=Object(m.a)(["\nwidth: 28em;\nheight: 32em;\nbackground-image: linear-gradient(180deg, white, #A9A9A9);\nfloat: left;\nalign-items: center;\nborder-radius: 15px 0px 0px 15px;\n\n"]))),_n=h.b.div($||($=Object(m.a)(["\nbackground: transparent;\nmargin: 2em;\n"])));h.b.span(nn||(nn=Object(m.a)(["\ncolor: #f00;\n"])));function kn(n){var e=n.children,t=n.isLogin;return Object(O.jsx)(vn,{className:"App",children:Object(O.jsxs)(_n,{children:[Object(O.jsx)(wn,{children:e}),Object(O.jsxs)(yn,{"background-image":"./img1-login.png",children:[Object(O.jsxs)(hn,{children:["Bem-Vindo ",t&&"de volta"," ao Manager G!"]}),Object(O.jsxs)(gn,{children:[Object(O.jsx)("p",{children:"___________________________________________________"}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"- Assuma o controle de seus projetos, organizando tarefas e gerenciando recursos."}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"- Pensado principalmente para empresas que procuram uma maneira simples de gerenciar seus projetos baseado nas premissas do PMBOK (6\xaa Ed.)"}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"___________________________________________________"})]}),Object(O.jsx)(On,{type:"submit",children:"Ler Mais..."})]})]})})}var Cn,zn,En,Fn,Gn,Sn,Bn={};function Pn(){var n=_().toggleLoading,e=Object(r.useRef)({}),t=Object(b.f)(),i=Object(r.useCallback)((function(n){t.push("/login",{email:n})}),[t]),a=Object(r.useCallback)((function(n){t.push("/registro",{email:n})}),[t]);function o(){return(o=Object(l.a)(s.a.mark((function t(r,o){var c,l,d;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=o.reset,t.prev=1,l=cn.b().shape({email:cn.c().email().required()}),t.next=5,l.validate(r,{abortEarly:!1});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),t.t0 instanceof cn.a&&(d={},t.t0.inner.forEach((function(n){return d=Object(an.a)(Object(an.a)({},d),{},Object(rn.a)({},"".concat(t.t0.path),t.t0.message))})),e.current.setErrors(d));case 10:n(),u.post("users/access",r).then((function(n){i(String(r.email))})).catch((function(n){var e=n.response.data.message;console.log(e),"Usu\xe1rio n\xe3o cadastrado, complete teu registro para continuar!"==e?(alert("".concat(e,", verifique seu email com seu c\xf3digo de acesso.")),a(String(r.email))):(alert(e),c())})).finally((function(){n()}));case 12:case"end":return t.stop()}}),t,null,[[1,7]])})))).apply(this,arguments)}return Object(O.jsxs)(kn,{children:[Object(O.jsx)(sn,{children:Object(O.jsx)("img",{src:"./man.png",alt:"imagem"})}),Object(O.jsxs)(bn,{children:[Object(O.jsx)(ln,{children:"Insira seu E-mail"}),Object(O.jsxs)(on.a,{ref:e,initialData:Bn,onSubmit:function(n,e){return o.apply(this,arguments)},children:[Object(O.jsx)(mn,{placeholder:"E-mail",type:"email",name:"email"}),Object(O.jsx)(dn,{type:"submit",children:"Entrar"})]})]})]})}var An,Dn,qn,In,Ln,Nn,Rn,Tn=h.b.div(Cn||(Cn=Object(m.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nmargin-top: 1em;\n\n"]))),Mn=h.b.h1(zn||(zn=Object(m.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\n;\ncolor: #2F4F4F;\n"]))),Jn=h.b.button(En||(En=Object(m.a)(["\nborder: 1px solid #25692A;\ncolor: white;\nborder-radius: 3px;\ncursor: pointer;\n;\nfont-weight: bold;\nfont-size: 12px;\nbackground-color: \t#FF4500;\npadding: 5px 62px;\nmargin-left: 31px;\nmargin-top: 1.5em;\nmargin-bottom: 1em;\n"]))),Un=(h.b.button(Fn||(Fn=Object(m.a)(["\n  padding: 1px;\n  cursor: pointer; \n  font-family:Century Gothic;\n  font-size: 13px;\n  border: 1px solid #008080;\n  border-radius: 5px;\n  font-weight:bold;\n  background-color: Transparent;\n  color: \t#008080;\n  margin-left: 56px;\n  margin-top: 10px;\n\n"]))),h.b.div(Gn||(Gn=Object(m.a)(["\nmargin: 2em 7em;\n"]))));h.b.span(Sn||(Sn=Object(m.a)(["\ncolor: #f00;\n"])));function Vn(){var n=Object(r.useState)({}),e=Object(d.a)(n,2),t=e[0],i=e[1],a=Object(b.g)(),o=Object(b.f)(),c=G().login,p=Object(r.useRef)({});function u(){return(u=Object(l.a)(s.a.mark((function n(e){var t,r;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=cn.b().shape({email:cn.c().email().required(),password:cn.c().required().min(8)}),n.next=4,t.validate(e,{abortEarly:!1});case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),n.t0 instanceof cn.a&&(r={},n.t0.inner.forEach((function(e){return r=Object(an.a)(Object(an.a)({},r),{},Object(rn.a)({},"".concat(n.t0.path),n.t0.message))})),p.current.setErrors(r));case 9:try{c(e),j()}catch(i){}case 10:case"end":return n.stop()}}),n,null,[[0,6]])})))).apply(this,arguments)}var j=Object(r.useCallback)((function(){o.push("/dashboard")}),[o]);return Object(r.useEffect)((function(){console.log(),console.log(a);var n=a.state.email;i({email:n})}),[]),Object(O.jsxs)(kn,{isLogin:!0,children:[Object(O.jsx)(Tn,{children:Object(O.jsx)("img",{src:"./man.png",alt:"imagem"})}),Object(O.jsxs)(Un,{children:[Object(O.jsx)(Mn,{children:"Sign In"}),Object(O.jsxs)(on.a,{ref:p,initialData:t,onSubmit:function(n){return u.apply(this,arguments)},children:[Object(O.jsx)(mn,{placeholder:"E-mail",type:"email",name:"email"}),Object(O.jsx)(mn,{placeholder:"Senha",type:"password",name:"password"}),Object(O.jsx)(Jn,{type:"submit",children:"Log In"})]})]})]})}var Hn,Kn=h.b.div(An||(An=Object(m.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nmargin-top: 1em;\n"]))),Qn=h.b.h1(Dn||(Dn=Object(m.a)(["\ndisplay: flex;\n;\ncolor: #2F4F4F;\nfont-size: 22px;\nmargin-left: 1.2em;\n"]))),Wn=h.b.button(qn||(qn=Object(m.a)(["\nborder: 1px solid #25692A;\ncolor: white;\nborder-radius: 3px;\ncursor:pointer;\n;\nfont-weight: bold;\nfont-size: 12px;\nbackground-color: \t#FF4500;\npadding: 5px 60px;\nmargin-left: 31px;\nmargin-top: 1em;\nmargin-bottom: 2px;\n"]))),Xn=(h.b.input(In||(In=Object(m.a)(["\n  outline: none !important;\n  border: 0px solid;\n  box-shadow: 0 0 3px #000000;  \n  color: \t#363636;\n  padding: 4px 11px;\n  margin-top: 1.5em;\n  margin-bottom: 1.5em;\n  border-radius: 3px;\n  margin-left: 31px;\n  font-size: 12px;\n  ;\n"]))),h.b.div(Ln||(Ln=Object(m.a)(["\n"])))),Yn=h.b.div(Nn||(Nn=Object(m.a)(["\nmargin: 2em 7em;\nflex-direction: column;\n"])));h.b.span(Rn||(Rn=Object(m.a)(["\ncolor: #f00;\n"])));function Zn(n){var e=Object(r.useState)({}),t=Object(d.a)(e,2),i=t[0],a=t[1],o=Object(b.g)(),c=_().toggleLoading,p=Object(r.useRef)({});function j(){return(j=Object(l.a)(s.a.mark((function n(e,t){var r,i;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.reset,n.prev=1,r=cn.b().shape({email:cn.c().email().required(),name:cn.c().required(),acess_code:cn.c().required(),password:cn.c().required()}),n.next=5,r.validate(e,{abortEarly:!1});case 5:c(),u.post("users/register",e).then((function(n){f(String(e.email))})).catch((function(n){var e=n.response.data.message;alert(e)})).finally((function(){c()})),n.next=14;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.message),n.t0 instanceof cn.a&&(i={},n.t0.inner.forEach((function(e){return i=Object(an.a)(Object(an.a)({},i),{},Object(rn.a)({},"".concat(n.t0.path),n.t0.message))})),p.current.setErrors(i)),console.log(e);case 14:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}var x=Object(b.f)(),f=Object(r.useCallback)((function(n){x.push("/login",{email:n})}),[x]);return Object(r.useEffect)((function(){console.log(n),console.log(o);var e=o.state.email;a({email:e})}),[o,n]),Object(O.jsx)(kn,{children:Object(O.jsxs)(Xn,{children:[Object(O.jsx)(Kn,{children:Object(O.jsx)("img",{src:"./man.png",alt:"imagem"})}),Object(O.jsxs)(Yn,{children:[Object(O.jsx)(Qn,{children:"Cadastro Pessoal"}),Object(O.jsxs)(on.a,{ref:p,initialData:i,onSubmit:function(n,e){return j.apply(this,arguments)},children:[Object(O.jsx)(mn,{placeholder:"E-mail",type:"email",name:"email",disabled:!0}),Object(O.jsx)(mn,{placeholder:"Nome",type:"text",name:"name"}),Object(O.jsx)(mn,{placeholder:"Password",type:"password",name:"password"}),Object(O.jsx)(mn,{placeholder:"C\xf3digo de Acesso",type:"text",name:"acess_code"}),Object(O.jsx)(Wn,{type:"submit",children:" Enviar "})]})]})]})})}function $n(){return Object(O.jsx)(tn.a,{children:Object(O.jsxs)(b.c,{children:[Object(O.jsx)(b.a,{path:"/",exact:!0,component:Pn}),Object(O.jsx)(b.a,{path:"/login",exact:!0,component:Vn}),Object(O.jsx)(b.a,{path:"/registro",exact:!0,component:Zn})]})})}var ne,ee,te,re,ie,ae,oe,ce,se,le,de,be,pe=h.b.div(Hn||(Hn=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n    background-image: linear-gradient(to bottom, #007070, #0070707f); ;\n\n    header {\n      margin-bottom: 20px;\n      background-color: #fff;\n    }\n\n    > a {\n\n      padding: 10px ; \n      display: flex;\n      align-items: center;\n      flex-direction: row;\n      margin-left: 20px;\n      margin-top: 20px;\n\n      h3 {\n        margin-left: 16px;\n      }\n    }\n  "]))),ue=t(9),je=function(n){var e=n.icon,t=n.label,r=n.path;return Object(O.jsxs)(tn.b,{to:r,children:[e,Object(O.jsxs)("h3",{children:[" ",t," "]})]})},xe=function(n){var e=n.renderAside;G().data.user;return e?Object(O.jsxs)(pe,{children:[Object(O.jsx)(je,{icon:Object(O.jsx)(ue.e,{}),path:"/dashboard",label:"Home"}),Object(O.jsx)(je,{icon:Object(O.jsx)(ue.b,{}),path:"/repositorio",label:"Reposit\xf3rio"}),Object(O.jsx)(je,{icon:Object(O.jsx)(ue.m,{}),path:"/listagem",label:"Equipe"})]}):null},fe=h.b.div(ne||(ne=Object(m.a)(["\n  padding: 10px 12px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background: transparent;\n  /* max-width: 80vw; */\n\n  header {\n    max-height: 30px;\n\n    img {\n      max-height: 60px;\n      max-width: 70px;\n    }\n  }\n\n  div {\n    display: flex;\n    align-items  : center;\n    justify-content: center;\n\n    * {\n      margin: 0 6px;\n    }\n\n    button:hover {\n      opacity: .3;\n      transition: opacity .3s;\n      cursor: pointer;\n    }\n    button {\n\n      border: none;\n      border-radius: 5px;\n      padding: 5px;\n      color: #f00;\n      background-color: transparent;\n    }\n  }\n"]))),me=function(n){var e=n.setRenderAside,t=Object(b.f)(),i=G(),a=i.data.user,o=i.logout,c=Object(r.useCallback)((function(){o()&&t.push("/")}),[]),s=Object(r.useCallback)((function(){e((function(n){return!n}))}),[e]);return Object(O.jsxs)(fe,{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{type:"button",onClick:s,children:Object(O.jsx)(ue.g,{size:16})}),Object(O.jsx)("header",{children:Object(O.jsx)("img",{src:"./man-logo.png",alt:"imagem"})})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(ue.k,{size:18})," Bem vindo(a), ",a.name,Object(O.jsx)("button",{type:"button",onClick:c,children:Object(O.jsx)(ue.f,{size:16})})]})]})},he=h.b.div(ee||(ee=Object(m.a)(["\n  /* max-width: 960px; */\n  width: 100%;\n\n  object-fit: contain;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: #555;\n  background-color: #fff;\n\n  .innerPage {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n\n  }\n"]))),ge=function(n){var e=n.children,t=Object(r.useState)(!0),i=Object(d.a)(t,2),a=i[0],o=i[1];return Object(O.jsxs)(he,{children:[Object(O.jsx)(xe,{renderAside:a}),Object(O.jsxs)("div",{className:"innerPage",children:[Object(O.jsx)(me,{setRenderAside:o}),e]})]})},Oe=h.b.div(te||(te=Object(m.a)(["\ndisplay: flex;\nheight: 100vh;\nwidth: 100vw;\nalign-items: center;\nflex-direction: column;\nbackground: \t#2F4F4F;\n\n"]))),ve=h.b.div(re||(re=Object(m.a)(["\n  display: flex;\n\n  width: 90%;\n  height: 10%;\n  border-radius: 8px;\n  align-items: center;\n  justify-content: space-between;\n\n  h2 {\n    color: white;\n    font-size: 20px;\n    ;\n  }\n"]))),ye=h.b.div(ie||(ie=Object(m.a)(["\n  background: \t#008080;\n  border-radius: 8px;\n  padding: 10px 10px; \n  width: 89%;\n  height: 70%;\n\n\n  h4 {\n    font-size: 15px;\n    color: white;\n    padding: 10px;\n    margin-top: 0.5em;\n  }\n"]))),we=h.b.div(ae||(ae=Object(m.a)(["\n  display: flex;\n  background:\t#00a5a5;\n  width: 90px;\n  height: 70px;\n  margin-top: 10px;\n  border-radius: 8px;\n  justify-content: space-between;\n  align-items: center;\n\n  p{\n    color: black;\n    font-size: 14px;\n    ;\n\n  }\n"])));h.b.div(oe||(oe=Object(m.a)(["\n  display: flex;\n  width: 98%;\n  height: 7%;\n  border-radius: 8px;\n  justify-content: space-between;\n  align-items: center;\n\n  p{\n    color: black;\n    font-size: 14px;\n    ;\n\n\n  }\n"])));function _e(n){return Object(O.jsxs)(Oe,{children:[Object(O.jsx)(ve,{children:Object(O.jsx)("h2",{children:"Repositorio"})}),Object(O.jsxs)(ye,{children:[Object(O.jsx)(we,{}),Object(O.jsx)(we,{}),Object(O.jsx)(we,{}),Object(O.jsx)(we,{}),Object(O.jsx)(we,{})]})]})}var ke,Ce,ze,Ee,Fe,Ge,Se,Be,Pe,Ae=h.b.div(ce||(ce=Object(m.a)(["\ndisplay: flex;\nheight: 100vh;\nwidth: 100vw;\nalign-items: center;\nflex-direction: column;\nbackground:\t#e0f7f8;\n\n"]))),De=h.b.div(se||(se=Object(m.a)(["\n  display: flex;\n  width: 90%;\n  height: 8%;\n  margin-top: 10px;\n  border-radius: 4px;\n  align-items: center;\n  justify-content: space-between;\n\n  input {\n    padding: 5px 50px; \n    border-radius: 4px;\n    border: 0px solid;\n    box-shadow: 0 0 1px;\n    font-size: 15px;\n    ;\n    margin-right: 5px;\n\n  }\n\n  button {\n    padding: 5px 15px;\n    font-size: 15px;\n    border-radius: 5px;\n    border: 1px solid #2F4F4F;\n    background: transparent;\n    cursor: pointer;\n    background: #007070;\n    color: #ffffff;\n    box-shadow: 0 0 1px;\n      :hover{\n        background: #147272;\n        color: #a0a0a0;\n        transition: .4s;\n      }\n  }\n\n\n  h2 {\n    margin-left: 5px;\n    color: #2F4F4F;\n    font-size: 25px;\n    ;\n  }\n"]))),qe=h.b.div(le||(le=Object(m.a)(["\n  background: transparent;\n  border-radius: 4px;\n  width: 90%;\n  height: 70%;\n  background:\t#cee6e8;\n  border: 1px solid #8FBC8F;\n  margin-top: 10px;\n  box-shadow: 0 0 1px;\n  flex-direction: row;\n\n  label {\n    font-size: 10px;\n\n  }\n  \n  div {\n    display: flex;\n    margin: 3px;\n    padding: 1px;\n    border-radius: 3px;\n    box-shadow: 0 0 1px;\n    background: #ffffff;\n    flex-direction: row;\n    \n    div {\n      padding: 20px;\n      margin: 2px;\n      width: 20%;\n      border-radius: 3px;\n      box-shadow: 0 0 1px;\n      background: white;\n      border: 1px solid #e4e4e4;\n    }\n\n  }\n"])));h.b.div(de||(de=Object(m.a)(["\n  display: flex;\n  background:\t#00a5a5;\n  width: 68em;;\n  height: 1em;\n  margin-top: 3px;\n  padding: 4px;\n  border-radius: 3px;\n  justify-content: space-between;\n  align-items: center;\n\n  div {\n    \n  }\n\n  p{\n    color: black;\n    font-size: 10px;\n    ;\n\n\n  }\n"]))),h.b.div(be||(be=Object(m.a)(["\n  display: flex;\n  width: 68em;;\n  height: 1em;\n  border-radius: 3px;\n  justify-content: space-between;\n  align-items: center;\n\n  p{\n    color: black;\n    font-size: 14px bold;\n    ;\n\n\n  }\n"])));function Ie(n){return Object(O.jsxs)(Ae,{children:[Object(O.jsxs)(De,{children:[Object(O.jsxs)("h2",{children:[Object(O.jsx)(ue.d,{size:"25"}),"  DashBoard"]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{placeholder:"Search"}),Object(O.jsx)("button",{children:Object(O.jsx)(ue.i,{size:"15"})})]}),Object(O.jsxs)("button",{children:[Object(O.jsx)(ue.c,{size:"16"})," Novo Projeto"]})]}),Object(O.jsx)(qe,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})})]})}var Le,Ne,Re,Te,Me=h.b.div(ke||(ke=Object(m.a)(["\ndisplay: flex;\nheight: 100vh;\nwidth: 100vw;\nalign-items: center;\nflex-direction: column;\nbackground:\t#e0f7f8;\n"]))),Je=h.b.div(Ce||(Ce=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  margin: 3px;\n  align-items: center;\n  border: 1px solid;\n  width: 98%;\n  height: 40px;\n  border-radius: 3px;\n  background: #f2f2f2;\n     :hover{\n       opacity: 1;\n       color: black;\n       transition: 0.5s;\n     }\n"]))),Ue=h.b.div(ze||(ze=Object(m.a)(["\n  display: flex;\n  width: 90%;\n  height: 8%;\n  margin-top: 10px;\n  border-radius: 4px;\n  align-items: center;\n  justify-content: space-between;\n\n  input {\n    padding: 5px 50px; \n    border-radius: 4px;\n    border: 0px solid;\n    box-shadow: 0 0 1px;\n    font-size: 15px;\n    ;\n    margin-right: 5px;\n\n  }\n\n  button {\n    padding: 6px 20px;\n    font-size: 15px;\n    border-radius: 2px;\n    border: 1px solid #2F4F4F;\n    background: transparent;\n    cursor: pointer;\n    background: #007070;\n    color: #ffffff;\n    box-shadow: 0 0 1px;\n      :hover{\n        background: #147272;\n        color: #a0a0a0;\n        transition: .4s;\n      }\n  }\n\n\n  h2 {\n    margin-left: 5px;\n    color: #2F4F4F;\n    font-size: 25px;\n    ;\n  }\n"]))),Ve=h.b.div(Ee||(Ee=Object(m.a)(["\n  display: flex;\n  background: transparent;\n  border-radius: 4px;\n  width: 90%;\n  height: 70%;\n  background:\t#ebebeb;\n  border: 1px solid #8FBC8F;\n  margin-top: 10px;\n  box-shadow: 0 0 1px;\n  flex-direction: column;\n"]))),He=(h.b.div(Fe||(Fe=Object(m.a)(["\n  display: flex;\n  background:\t#00a5a5;\n  width: 68em;;\n  height: 1em;\n  margin-top: 3px;\n  padding: 4px;\n  border-radius: 3px;\n  justify-content: space-between;\n  align-items: center;\n\n  div {\n    \n    \n  }\n\n  p{\n    color: black;\n    font-size: 10px;\n    ;\n\n\n  }\n"]))),h.b.div(Ge||(Ge=Object(m.a)(["\n\n    border: 1px solid;\n    margin-left: 5px;\n    margin-right: 5px;\n    width: 3%;\n    font-size: 15px;   \n  "])))),Ke=h.b.div(Se||(Se=Object(m.a)(["\n\n    border: 1px solid;\n    width: 35%;\n    margin: 2px;\n    font-size: 15px;  \n  "]))),Qe=h.b.div(Be||(Be=Object(m.a)(["\nborder: 1px solid;\n    width: 35%;\n    margin: 2px;  \n    font-size: 15px; \n  "]))),We=h.b.div(Pe||(Pe=Object(m.a)(["\nborder: 1px solid;\ndisplay: flex;\nflex-direction: row-reverse;\n    width: 30%;\n    margin: 2px;  \n    font-size: 13px;\n    \n\n    button{\n      background: transparent;\n      color: black;\n      border: transparent;\n      padding: 10px;\n      border-radius: 2px;\n      margin-left: 2px;\n      :hover{\n        background: #bbbbbb;\n        transition: 0.8s;\n        color: #004d32;\n        border-radius: 20px;\n      }\n    }\n\n  "])));function Xe(n){var e=Object(r.useState)([]),t=Object(d.a)(e,2),a=t[0],o=t[1];function c(){return p.apply(this,arguments)}function p(){return(p=Object(l.a)(s.a.mark((function n(){var e,t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("team");case 2:e=n.sent,t=e.data,o(t),console.log(t);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}Object(r.useEffect)((function(){c()}),[]);var j=Object(b.f)(),x=i.a.useCallback((function(n){j.push("./form-member",{email:n})}),[j]),f=i.a.useCallback((function(n){C.a.fire({title:"Deseja realmente Deletar o Usu\xe1rio?",showCancelButton:!0,confirmButtonText:"Sim",confirmButtonColor:"#008080",cancelButtonText:"N\xe3o"}).then(function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isConfirmed){e.next=4;break}return e.next=3,u.delete("team?email=".concat(n));case 3:c();case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[]),m=Object(r.useCallback)((function(){j.push("/form-member")}),[j]);return Object(O.jsxs)(Me,{children:[Object(O.jsxs)(Ue,{children:[Object(O.jsxs)("h2",{children:[Object(O.jsx)(ue.m,{size:"25"}),"  Usu\xe1rios / Equipe"]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{placeholder:"Search User / Team"}),Object(O.jsx)("button",{children:Object(O.jsx)(ue.i,{size:"15"})})]}),Object(O.jsxs)("button",{onClick:m,children:[Object(O.jsx)(ue.l,{size:16}),"  Novo Membro"]})]}),Object(O.jsx)(Ve,{children:Object(O.jsxs)(Je,{children:[Object(O.jsx)(He,{children:Object(O.jsx)(ue.k,{size:"20"})}),a.map((function(n){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Ke,{children:Object(O.jsx)("label",{children:n.email})}),Object(O.jsx)(Qe,{children:Object(O.jsx)("label",{children:n.profile})}),Object(O.jsxs)(We,{children:[Object(O.jsx)("button",{children:Object(O.jsx)(ue.h,{size:"16"})}),Object(O.jsx)("button",{onClick:function(){return f(n.email)},children:Object(O.jsx)(ue.j,{size:"16"})}),Object(O.jsx)("button",{onClick:function(){return x(n.email)},children:Object(O.jsx)(ue.a,{size:"16"})})]})]})}))]})})]})}var Ye,Ze,$e=h.b.div(Le||(Le=Object(m.a)(["\ndisplay: flex;\nheight: 100vh;\nwidth: 100vw;\nalign-items: center;\njustify-content: start;\nflex-direction: column;\nbackground: \t#008080;\n"]))),nt=h.b.div(Ne||(Ne=Object(m.a)(["\ndisplay: flex;\nheight: 300px;\nwidth: 250px;\nalign-items: center;\nflex-direction: column;\njustify-content: center;\nbackground: \t#00a5a5;\nmargin-top: 30px;\nborder-radius: 10px;\n\n    label {\n      margin-left: 45px;\n      color: white;\n      ;\n    }\n    \n    select {\n      border: transparent;\n      border-radius: 5px;\n      padding: 4px 0px;\n      margin-top: 0.5em;\n      margin-left: 48px;\n      box-shadow: 0 0 3px;\n      color: #444444;\n      ;\n    }\n"]))),et=h.b.div(Re||(Re=Object(m.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmargin-top: 30px;\n\n    \n    h2 {\n    color: white;\n    font-size: 20px;\n    ;\n  }\n"]))),tt=h.b.button(Te||(Te=Object(m.a)(["\nborder: 1px solid #25692A;\ncolor: #c2c2c2;\nborder-radius: 3px;\ncursor:pointer;\n;\nfont-weight: bold;\nfont-size: 12px;\nbackground-color: \t#cc7008;\npadding: 5px 50px;\nmargin-left: 45px;\nmargin-top: 2em;\nmargin-bottom: 1em;\n\n  :hover {\n      background: \t#FF4500;\n      transition: .3s;\n      color: white;\n  }\n"]))),rt=h.b.div(Ye||(Ye=Object(m.a)(["\n    padding: 15px;\n    text-align: center;\n"]))),it=h.b.select(Ze||(Ze=Object(m.a)(["\n    font-size: 14px;\n    padding: 10px 0px;\n    border-radius: 4px;\n    ;\n"]))),at=function(n){var e=n.name,t=n.placeholder,i=n.children,a=Object(pn.a)(n,["name","placeholder","children"]),o=Object(r.useRef)(null),c=Object(un.c)(e),s=c.fieldName,l=c.registerField,d=c.defaultValue;c.error;return Object(r.useEffect)((function(){l({name:s,ref:o.current,path:"value"})}),[s,l]),Object(O.jsx)(rt,{children:Object(O.jsx)(it,Object(an.a)(Object(an.a)({placeholder:t,ref:o,defaultValue:d},a),{},{children:i}))})};function ot(n){var e=Object(r.useRef)({}),t=Object(b.f)(),i=Object(r.useState)({}),a=Object(d.a)(i,2),o=a[0],c=a[1];Object(r.useEffect)((function(){var n=p.state.email;c({email:n})}),[]);var p=Object(b.g)(),j=_().toggleLoading;function x(){return(x=Object(l.a)(s.a.mark((function n(t){var r,i;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=cn.b().shape({email:cn.c().email().required(),name:cn.c().required(),permission:cn.c().required()}),n.next=4,r.validate(t,{abortEarly:!1});case 4:j(),u.post("/team",t).then((function(n){console.log("passou aqui"),console.log(n),f()})).catch((function(n){var e=n.response.data.message;alert(e)})).finally((function(){j()})),n.next=13;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message),n.t0 instanceof cn.a&&(i={},n.t0.inner.forEach((function(e){return i=Object(an.a)(Object(an.a)({},i),{},Object(rn.a)({},"".concat(n.t0.path),n.t0.message))})),e.current.setErrors(i)),console.log(t);case 13:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}var f=Object(r.useCallback)((function(){t.push("/dashboard")}),[t]),m=Object(r.useState)([]),h=Object(d.a)(m,2),g=h[0],v=h[1];function y(){return(y=Object(l.a)(s.a.mark((function n(){var e,t;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("profile");case 2:e=n.sent,t=e.data,v(t),console.log(t);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){y.apply(this,arguments)}()}),[]),Object(O.jsxs)($e,{children:[Object(O.jsxs)(et,{children:[Object(O.jsx)("div",{}),Object(O.jsx)("h2",{children:"Adicionar Novo Membro"})]}),Object(O.jsx)(nt,{children:Object(O.jsxs)(on.a,{ref:e,initialData:o,onSubmit:function(n){return x.apply(this,arguments)},children:[Object(O.jsx)(mn,{placeholder:"E-mail",type:"email",name:"email"}),Object(O.jsx)(mn,{placeholder:"Nome",type:"text",name:"name"}),Object(O.jsx)("label",{children:"Perfil"}),Object(O.jsx)(at,{name:"permission",children:g.map((function(n){return Object(O.jsx)("option",{value:n.name,children:n.description})}))}),Object(O.jsx)(tt,{children:"Adicionar"})]})})]})}function ct(){return Object(O.jsx)(tn.a,{children:Object(O.jsx)(ge,{children:Object(O.jsxs)(b.c,{children:[Object(O.jsx)(b.a,{path:"/",exact:!0,component:Pn}),Object(O.jsx)(b.a,{path:"/dashboard",exact:!0,component:Ie}),Object(O.jsx)(b.a,{path:"/listagem",exact:!0,component:Xe}),Object(O.jsx)(b.a,{path:"/repositorio",exact:!0,component:_e}),Object(O.jsx)(b.a,{path:"/form-member",exact:!0,component:ot}),Object(O.jsx)(b.a,{path:"/",exact:!0,component:Pn})]})})})}var st,lt=function(){return G().data.token?Object(O.jsx)(ct,{}):Object(O.jsx)($n,{})},dt=Object(h.a)(st||(st=Object(m.a)(["\n\n    * {\n        /* overflow-x: hidden;  */\n        margin: 0;\n        padding: 0;\n        outline: 0;\n        box-sizing: 0;\n        text-decoration: none;\n        font-family: 'Roboto', sans-serif;\n    }\n\n    #root{\n        position:relative;\n        min-height: 100vh;\n        /* height: 100%; */\n        /* max-width: 960px; */\n    }\n\n    html, body {\n        /* width: 100%; */\n        /* height: 100%; */\n    }\n\n    a:link {\n        color:#fff;\n    }\n\n    /* visited link */\n    a:visited {\n        color:#fff;\n    }\n\n    /* mouse over link */\n    a:hover {\n        color:#fff;\n    }\n\n    /* selected link */\n    a:active {\n        color:#fff;\n    }\n"]))),bt=function(){return Object(O.jsxs)(en,{children:[Object(O.jsx)(lt,{}),Object(O.jsx)(dt,{})]})};o.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(bt,{})}),document.getElementById("root"))}},[[242,1,2]]]);
//# sourceMappingURL=main.3feb629d.chunk.js.map