(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[0],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(37),a=n(5),s="samurai-network/dialogs/ADD_MESSAGE",c={messagesData:[{message:"helo"},{message:"what"},{message:"what's up"},{message:"bro"},{message:"yo"},{message:"hi"}],dialogsData:[{id:1,name:"Andrey"},{id:2,name:"Mike"},{id:3,name:"Tommy"},{id:4,name:"Sergey"},{id:5,name:"Volodya"},{id:6,name:"Sasha"}]},i=function(e){return{type:s,values:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;if(t.type===s){var n=t.values;return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{message:n}])})}return e}},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(5),a=n(28),s=n(29),c=n(31),i=n(30),o=n(0),u=n.n(o),l=n(11),j=n(10),d=n(1),b=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(c.a)(o,t);var n=Object(i.a)(o);function o(){return Object(a.a)(this,o),n.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return!1===this.props.isAuth?Object(d.jsx)(j.a,{to:"/login"}):Object(d.jsx)(e,Object(r.a)({},this.props))}}]),o}(u.a.Component);return Object(l.b)(b)(t)}},16:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(132),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"dfcd1a69-dd5c-48e6-9f01-dbdf80891de4"}}),s={getLogin:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t,n){return a.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logout:function(){return a.delete("auth/login").then((function(e){return e.data}))},getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unFollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return a.put("profile/status/",{status:e}).then((function(e){return e.data}))}}},17:function(e,t,n){e.exports={nav:"Nav_nav__QwGIC",button:"Nav_button__256F4",active:"Nav_active__2DNXy",friends:"Nav_friends__18AsY",friends__title:"Nav_friends__title__aHBVu"}},244:function(e,t,n){},245:function(e,t,n){},251:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){},292:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,302)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},a=n(9),s=n(96),c=n(105),i={friendsData:[{img:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",name:"andrey"},{img:"https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png",name:"anton"}]},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return e},u=n(14),l=n.n(u),j=n(25),d=n(37),b=n(5),p=n(16),f=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(b.a)(Object(b.a)({},e),r):e}))},h="samurai-network/users/FOLLOW",g="samurai-network/users/UNFOLLOW",O="samurai-network/users/SET_USER",m="samurai-network/users/SET_CURRENT_PAGE",v="samurai-network/users/SET_USERS_TOTAL_COUNT",x="samurai-network/users/TOGGLE_IS_FETCHING",w="samurai-network/users/FOLLOWING_IN_PROGRES",_={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},P=function(e){return{type:h,userId:e}},y=function(e){return{type:g,userId:e}},k=function(e){return{type:m,currentPage:e}},C=function(e){return{type:x,isFetching:e}},S=function(e,t){return{type:w,isFetching:e,userId:t}},N=function(){var e=Object(j.a)(l.a.mark((function e(t,n,r,a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(S(!0,n)),e.next=3,r(n);case 3:0==e.sent.resultCode&&t(a(n)),t(S(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;return t.type===h?Object(b.a)(Object(b.a)({},e),{},{users:f(e.users,t.userId,"id",{followed:!0})}):t.type===g?Object(b.a)(Object(b.a)({},e),{},{users:f(e.users,t.userId,"id",{followed:!1})}):t.type===O?Object(b.a)(Object(b.a)({},e),{},{users:t.users}):t.type===m?Object(b.a)(Object(b.a)({},e),{},{currentPage:t.currentPage}):t.type===v?Object(b.a)(Object(b.a)({},e),{},{totalUsersCount:t.totalCount}):t.type===x?Object(b.a)(Object(b.a)({},e),{},{isFetching:t.isFetching}):t.type===w?Object(b.a)(Object(b.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(d.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))}):e},I=n(54),E="samurai-network/auth/SET_USER_DATA",T={userId:null,email:null,login:null,isAuth:!1,isFetching:!0},A=function(e,t,n,r){return{type:E,data:{userId:e,email:t,login:n,isAuth:r}}},U=function(){return function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r,a,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.getLogin();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,s=r.email,c=r.login,t(A(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;return t.type===E?Object(b.a)(Object(b.a)({},e),t.data):e},z="samurai-network/auth/SET_INITIALZED",L={initialzed:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;return t.type===z?Object(b.a)(Object(b.a)({},e),{},{initialzed:!0}):e},R=n(133),G=n(131),H=Object(a.c)({dialogsPage:c.b,contentPage:s.b,navbar:o,usersPage:F,auth:D,form:G.a,app:M}),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,X=Object(a.e)(H,B(Object(a.a)(R.a))),W=n(0),V=n.n(W),Y=n(63),J=n.n(Y),K=(n(244),n(28)),Z=n(29),q=n(31),Q=n(30),$=(n(245),n(12)),ee=(n(68),n(1)),te=n(17),ne=n.n(te),re=function(e){return Object(ee.jsxs)("nav",{className:ne.a.nav,children:[Object(ee.jsx)("div",{children:Object(ee.jsx)($.b,{activeClassName:ne.a.active,className:"".concat(ne.a.button),to:"/profile",children:"Profile"})}),Object(ee.jsx)("div",{children:Object(ee.jsx)($.b,{activeClassName:ne.a.active,className:"".concat(ne.a.button),to:"/users",children:"Users"})}),Object(ee.jsx)("div",{children:Object(ee.jsx)($.b,{activeClassName:ne.a.active,className:"".concat(ne.a.button),to:"/music",children:"music"})}),Object(ee.jsx)("div",{children:Object(ee.jsx)($.b,{activeClassName:ne.a.active,className:"".concat(ne.a.button),to:"/news",children:"news"})}),Object(ee.jsx)("div",{children:Object(ee.jsx)($.b,{activeClassName:ne.a.active,className:"".concat(ne.a.button),to:"/dialogs",children:"messages"})}),Object(ee.jsx)("div",{children:Object(ee.jsx)($.b,{activeClassName:ne.a.active,className:"".concat(ne.a.button),to:"/setting",children:"setting"})})]})},ae=(n(251),function(){return Object(ee.jsx)("div",{children:"News"})}),se=(n(252),function(){return Object(ee.jsx)("div",{children:"Setting"})}),ce=(n(253),function(){return Object(ee.jsx)("div",{children:"Music"})}),ie=n(10),oe=n(11),ue=n(130),le=n(53),je=n.n(le),de=n.p+"static/media/1.2e14a067.jpg",be=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize),n=[],r=1;r<=t;r++)n.push(r);var a=Math.ceil(t/e.pageSize),s=Object(W.useState)(1),c=Object(ue.a)(s,2),i=c[0],o=c[1],u=(i-1)*e.pageSize+1,l=e.pageSize*i;return Object(ee.jsxs)("div",{children:[Object(ee.jsxs)("div",{className:je.a.paginator,children:[i>1&&Object(ee.jsx)("button",{onClick:function(){return o(i-1)},children:"Prev"}),n.filter((function(e){return e>=u&&e<=l})).map((function(t){return Object(ee.jsx)("span",{onClick:function(n){e.onPageChanged(t)},className:"".concat(e.currentPage===t&&je.a.selectPage," ").concat(je.a.pageNumber),children:t},t)})),a>i&&Object(ee.jsx)("button",{onClick:function(){o(i+1)},children:"Next"})]}),e.usersPage.map((function(t){return Object(ee.jsxs)("div",{children:[Object(ee.jsxs)("span",{children:[Object(ee.jsx)("div",{children:Object(ee.jsx)($.b,{to:"/profile/"+t.id,children:Object(ee.jsx)("img",{src:null!=t.photos.small?t.photos.small:de,className:je.a.userPhoto,alt:"img"})})}),Object(ee.jsx)("div",{children:t.followed?Object(ee.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unFollow(t.id)},children:"unFollow"}):Object(ee.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(ee.jsxs)("span",{children:[Object(ee.jsxs)("span",{children:[Object(ee.jsx)("div",{children:t.name}),Object(ee.jsx)("div",{children:t.status})]}),Object(ee.jsx)("span",{children:Object(ee.jsx)("div",{})})]})]},t.id)}))]})},pe=n(40),fe=n(117),he=function(e){return e.usersPage.users},ge=function(e){return e.usersPage.pageSize},Oe=function(e){return e.usersPage.totalUsersCount},me=function(e){return e.usersPage.currentPage},ve=function(e){return e.usersPage.isFetching},xe=function(e){return e.usersPage.followingInProgress},we=function(e){Object(q.a)(n,e);var t=Object(Q.a)(n);function n(){var e;Object(K.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return 0==this.props.isAuth?Object(ee.jsx)(ie.a,{to:"/login"}):Object(ee.jsxs)(ee.Fragment,{children:[this.props.isFetching?Object(ee.jsx)(pe.a,{}):null,Object(ee.jsx)(be,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,usersPage:this.props.usersPage,follow:this.props.follow,unFollow:this.props.unFollow,isFetching:this.props.isFetching,followingInProgress:this.props.followingInProgress,setFollowingInProgress:this.props.setFollowingInProgress})]})}}]),n}(V.a.Component),_e=Object(a.d)(fe.a,Object(oe.b)((function(e){return{usersPage:he(e),pageSize:ge(e),totalUsersCount:Oe(e),currentPage:me(e),isFetching:ve(e),followingInProgress:xe(e)}}),{follow:function(e){return function(){var t=Object(j.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:N(n,e,p.a.follow.bind(p.a),P);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollow:function(e){return function(){var t=Object(j.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:N(n,e,p.a.unFollow.bind(p.a),y);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:k,setFollowingInProgress:S,getUsers:function(e,t){return function(){var n=Object(j.a)(l.a.mark((function n(r){var a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(C(!0)),r(k(e)),n.next=4,p.a.getUsers(e,t);case 4:a=n.sent,r(C(!1)),r((c=a.items,{type:O,users:c})),r((s=a.totalCount,{type:v,totalCount:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(we),Pe=n(69),ye=n.n(Pe),ke=function(e){return Object(ee.jsxs)("header",{className:ye.a.header,children:[Object(ee.jsx)("img",{className:ye.a.img,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"}),Object(ee.jsx)("div",{className:ye.a.loginBlock,children:e.isAuth?Object(ee.jsxs)("div",{children:[e.login," - ",Object(ee.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(ee.jsx)($.b,{to:"/login",children:" login "})})]})},Ce=function(e){Object(q.a)(n,e);var t=Object(Q.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(ee.jsx)(ke,Object(b.a)({},this.props))}}]),n}(V.a.Component),Se=Object(oe.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.logout();case 2:0===e.sent.resultCode&&t(A(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ce),Ne=n(128),Fe=n(129),Ie=n(86),Ee=n(64),Te=Object(Ee.a)(50),Ae=Object(Fe.a)({form:"login"})((function(e){return Object(ee.jsx)("div",{children:Object(ee.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(ee.jsx)("div",{children:Object(ee.jsx)(Ne.a,{placeholder:"Email",name:"email",component:Ie.a,validate:[Ee.b,Te]})}),Object(ee.jsx)("div",{children:Object(ee.jsx)(Ne.a,{placeholder:"Password",name:"password",component:Ie.a,validate:[Ee.b,Te]})}),Object(ee.jsx)("div",{children:Object(ee.jsx)(Ne.a,{component:"input",name:"rememberMe",type:"checkbox"})}),e.error?Object(ee.jsx)("div",{children:e.error}):"",Object(ee.jsx)("div",{children:Object(ee.jsx)("button",{children:"Sing in"})})]})})})),Ue=Object(oe.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(j.a)(l.a.mark((function r(a){var s,c;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p.a.login(e,t,n);case 2:0===(s=r.sent).resultCode?a(U()):(c=s.messages.length>0?s.messages[0]:"some error",a(Object(I.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(ee.jsx)(ie.a,{to:"/profile"}):Object(ee.jsxs)("div",{children:[Object(ee.jsx)("h1",{children:"Login"}),Object(ee.jsx)(Ae,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),De=function(e){return function(t){return Object(ee.jsx)(W.Suspense,{fallback:Object(ee.jsx)(pe.a,{}),children:Object(ee.jsx)(e,Object(b.a)({},t))})}},ze=V.a.lazy((function(){return n.e(3).then(n.bind(null,304))})),Le=V.a.lazy((function(){return n.e(4).then(n.bind(null,303))})),Me=function(e){Object(q.a)(n,e);var t=Object(Q.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialzed?Object(ee.jsx)($.a,{basename:"/demo-social-network",children:Object(ee.jsxs)("div",{className:"app-wrapper",children:[Object(ee.jsx)(Se,{}),Object(ee.jsx)(re,{}),Object(ee.jsxs)("div",{className:"app-wrapper-content",children:[Object(ee.jsx)(ie.b,{path:"/login",component:function(){return Object(ee.jsx)(Ue,{})}}),Object(ee.jsx)(ie.b,{exact:!0,path:"/dialogs",component:De(ze)}),Object(ee.jsx)(ie.b,{path:"/news",component:function(){return Object(ee.jsx)(ae,{})}}),Object(ee.jsx)(ie.b,{path:"/music",component:function(){return Object(ee.jsx)(ce,{})}}),Object(ee.jsx)(ie.b,{path:"/setting",component:function(){return Object(ee.jsx)(se,{})}}),Object(ee.jsx)(ie.b,{path:"/profile/:userId?",component:De(Le)}),Object(ee.jsx)(ie.b,{path:"/users",component:function(){return Object(ee.jsx)(_e,{})}})]})]})}):Object(ee.jsx)(pe.a,{})}}]),n}(V.a.Component),Re=Object(a.d)(Object(oe.b)((function(e){return{initialzed:e.app.initialzed}}),{initializeApp:function(){return function(e){var t=e(U());Promise.all([t]).then((function(){e({type:z})}))}}}))(Me);J.a.render(Object(ee.jsx)(V.a.StrictMode,{children:Object(ee.jsx)(oe.a,{store:X,children:Object(ee.jsx)(Re,{})})}),document.getElementById("root")),r()},40:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.021df73b.svg",a=n(1);t.a=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r})})}},53:function(e,t,n){e.exports={userPhoto:"users_userPhoto__1gFp-",selectPage:"users_selectPage__Fw2ZR",paginator:"users_paginator__HXOXK",pageNumber:"users_pageNumber__2k6v_"}},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"\u041f\u043e\u043b\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c\u0438"},a=function(e){return function(t){if(t.length>e)return"Max lenght is ".concat(e," symvols")}}},68:function(e,t,n){e.exports={wrapper:"Friends_wrapper__3C46G",img:"Friends_img__2qFdf"}},69:function(e,t,n){e.exports={header:"Header_header__2pNdO",img:"Header_img__1s0GH",loginBlock:"Header_loginBlock__19XyR"}},86:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u}));var r=n(5),a=n(95),s=n(92),c=n.n(s),i=n(1),o=function(e){var t=e.input,n=e.meta,s=Object(a.a)(e,["input","meta"]);return Object(i.jsxs)("div",{className:n.touched&&n.error&&c.a.error,children:[Object(i.jsx)("textarea",Object(r.a)(Object(r.a)(Object(r.a)({},s),t),{},{name:"",id:"",cols:"80",rows:"5"})),Object(i.jsx)("div",{children:n.touched&&n.error})]})},u=function(e){var t=e.input,n=e.meta,s=Object(a.a)(e,["input","meta"]);return Object(i.jsxs)("div",{className:n.touched&&n.error&&c.a.error,children:[Object(i.jsx)("input",Object(r.a)(Object(r.a)({},s),t)),Object(i.jsx)("div",{children:n.touched&&n.error})]})}},92:function(e,t,n){e.exports={"form-control":"FormsControl_form-control__UbFRC",error:"FormsControl_error__19Gol"}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return p})),n.d(t,"e",(function(){return f}));var r=n(37),a=n(5),s=n(16),c="samurai-network/content/ADD_POST",i="samurai-network/content/UPDATE_NEW_POST_TEXT",o="samurai-network/content/SET_USER_PROFILE",u="samurai-network/content/SET_STATUS",l={postData:[{message:"Hi, how are you?",like:30},{message:"It's my first post",like:32}],newPostText:"sf",profile:null,status:""},j=function(e){return{type:c,values:e}},d=function(e){return{type:u,status:e}},b=function(e){return function(t){s.a.getProfile(e).then((function(e){t({type:o,profile:e})}))}},p=function(e){return function(t){s.a.getStatus(e).then((function(e){t(d(e))}))}},f=function(e){return function(t){s.a.updateStatus(e).then((function(n){0===n.resultCode&&t(d(e))}))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;if(t.type===c)return Object(a.a)(Object(a.a)({},e),{},{postData:[].concat(Object(r.a)(e.postData),[{message:t.values,like:1}])});if(t.type==i){var n=Object(a.a)({},e);return n.postData=Object(r.a)(e.postData),n.newPostText=t.newText,n}return t.type==o?Object(a.a)(Object(a.a)({},e),{},{profile:t.profile}):t.type==u?Object(a.a)(Object(a.a)({},e),{},{status:t.status}):e}}},[[292,1,2]]]);
//# sourceMappingURL=main.704c813f.chunk.js.map