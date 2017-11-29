webpackJsonp([5],{101:function(t,e,n){n(149);var o=n(8)(n(110),n(236),null,null);t.exports=o.exports},102:function(t,e,n){"use strict";var o=n(99),s=n.n(o);n.d(e,"a",function(){return s.a})},103:function(t,e,n){"use strict";var o=n(229),s=n.n(o);n.d(e,"a",function(){return s.a});var a=n(230),i=n.n(a);n.d(e,"b",function(){return i.a});var r=n(231),c=n.n(r);n.d(e,"c",function(){return c.a})},104:function(t,e,n){"use strict";var o=n(232),s=n.n(o);n.d(e,"c",function(){return s.a});var a=n(233),i=n.n(a);n.d(e,"b",function(){return i.a});var r=n(234),c=n.n(r);n.d(e,"a",function(){return c.a})},105:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(35),s=n(101),a=n.n(s),i=n(54);o.a.config.productionTip=!1,new o.a({el:"#app",template:"<App/>",components:{App:a.a},store:i.a})},106:function(t,e,n){"use strict";var o=n(100);n.n(o);e.a={setWorkingPomodoro:function(t,e){var n=t.commit,o=t.state;e&&(e=parseFloat(e),o.configRef?o.configRef.update({workingPomodoro:e}):n("setWorkingPomodoro",e))},setShortBreak:function(t,e){var n=t.commit,o=t.state;e&&(e=parseFloat(e),o.configRef?o.configRef.update({shortBreak:e}):n("setShortBreak",e))},setLongBreak:function(t,e){var n=t.commit,o=t.state;e&&(e=parseFloat(e),o.configRef?o.configRef.update({longBreak:e}):n("setLongBreak",e))},updateTotalPomodoros:function(t,e){t.state.statisticsRef.update({totalPomodoros:e})},createUser:function(t,e){var n=t.state,o=e.email,s=e.password;n.firebaseApp.auth().createUserWithEmailAndPassword(o,s).catch(function(t){console.log(t.code,t.message)})},updateUserName:function(t,e){var n=t.state,o=t.commit;n.user.updateProfile({displayName:e}),o("setDisplayName",e)},updatePhotoURL:function(t,e){t.state.user.updateProfile({photoURL:e})},updateUserEmail:function(t,e){t.state.user.updateEmail(e).then(function(){},function(t){console.log(t)})},authenticate:function(t,e){var n=t.state,o=(t.dispatch,e.email),s=e.password;n.firebaseApp.auth().signInWithEmailAndPassword(o,s)},authenticateAnonymous:function(t){t.state.firebaseApp.auth().signInAnonymously().catch(function(t){console.log(t.code,t.message)})},logout:function(t){t.state.firebaseApp.auth().signOut()},bindAuth:function(t){var e=t.commit,n=t.dispatch;t.state.firebaseApp.auth().onAuthStateChanged(function(t){e("setUser",t),t&&!t.isAnonymous&&(e("setDisplayName",t.displayName),n("bindFirebaseReferences",t)),t||n("unbindFirebaseReferences")})},bindFirebaseReferences:n.i(o.firebaseAction)(function(t,e){var n=t.state,o=t.commit,s=t.dispatch,a=n.firebaseApp.database(),i=a.ref("/configuration/"+e.uid),r=a.ref("/statistics/"+e.uid);s("bindFirebaseReference",{reference:i,toBind:"config"}).then(function(){o("setConfigRef",i)}),s("bindFirebaseReference",{reference:r,toBind:"statistics"}).then(function(){o("setStatisticsRef",r)})}),bindFirebaseReference:n.i(o.firebaseAction)(function(t,e){var n=t.bindFirebaseRef,o=t.state,s=e.reference,a=e.toBind;return s.once("value").then(function(t){t.val()||s.set(o[a]),n(a,s)})}),unbindFirebaseReferences:n.i(o.firebaseAction)(function(t){var e=t.unbindFirebaseRef,n=t.commit;n("setConfigRef",null),n("setStatisticsRef",null);try{e("config"),e("statistics")}catch(t){return}})}},107:function(t,e,n){"use strict";e.a={getConfig:function(t){return t.config},getUser:function(t){return t.user},getDisplayName:function(t){return t.displayName},getTotalPomodoros:function(t){return t.statistics.totalPomodoros}}},108:function(t,e,n){"use strict";e.a={setWorkingPomodoro:function(t,e){t.config.workingPomodoro=e},setShortBreak:function(t,e){t.config.shortBreak=e},setLongBreak:function(t,e){t.config.longBreak=e},setUser:function(t,e){t.user=e},setConfigRef:function(t,e){t.configRef=e},setStatisticsRef:function(t,e){t.statistiscRef=e},setDisplayName:function(t,e){t.displayName=e}}},109:function(t,e,n){"use strict";var o={workingPomodoro:25,shortBreak:5,longBreak:10,pomodorosTillLongBreak:3},s={pomodorosToday:0,pomodorosLastWeek:0,pomodorosLastMonth:0,totalPomodoros:0,workoutsToday:0,workoutLastWeek:0,workoutsLastMonth:0,workoutsTotal:0};e.a={config:o,user:null,configRef:null,statisticsRef:null,statistics:s,displayName:""}},110:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(20),s=n.n(o),a=n(228),i=n.n(a),r=n(227),c=n.n(r),u=n(21);e.default={name:"app",components:{MainContent:i.a,LandingPage:c.a},computed:s()({},n.i(u.b)(["user"])),methods:s()({},n.i(u.c)(["bindAuth"])),created:function(){this.bindAuth()}}},111:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(103),s=n(102);e.default={components:{Logo:s.a,Authentication:o.a,GoToAppLink:o.b,Tagline:o.c}}},112:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(104);e.default={components:{HeaderComponent:o.a,FooterComponent:o.b,ContentComponent:o.c}}},113:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(36);e.default={data:function(){return{src:n(226)}},router:o.a}},114:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(20),s=n.n(o),a=n(21),i={LOGIN:"Already a member? Log in here!",SIGNUP:"Don't have an account? Sign up here!"},r={LOGIN:"LOGIN",SIGNUP:"SIGN UP"};e.default={data:function(){return{isLogin:!0,email:"",password:""}},computed:{titleText:function(){return this.isLogin?i.LOGIN:i.SIGNUP},switchButtonText:function(){return this.isLogin?i.SIGNUP:i.LOGIN},actionButtonText:function(){return this.isLogin?r.LOGIN:r.SIGNUP}},methods:s()({},n.i(a.c)(["createUser","authenticate"]),{onSwitch:function(){this.isLogin=!this.isLogin},onAction:function(t){t.preventDefault(),t.stopPropagation(),(this.isLogin?this.authenticate:this.createUser)({email:this.email,password:this.password})}})}},115:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(20),s=n.n(o),a=n(21);e.default={methods:s()({},n.i(a.c)(["authenticateAnonymous"]))}},116:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},117:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(36);e.default={router:o.a}},118:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},119:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(20),s=n.n(o),a=n(21),i=n(36),r=n(99),c=n.n(r);e.default={computed:s()({},n.i(a.d)({name:"getDisplayName"}),n.i(a.b)(["user"]),{isAnonymous:function(){return this.user&&this.user.isAnonymous},settingsPath:function(){return this.isAnonymous?"/":"settings"},statisticsPath:function(){return this.isAnonymous?"/":"statistics"},workoutsPath:function(){return this.isAnonymous?"/":"workouts"}}),methods:s()({},n.i(a.c)(["logout"]),{onLogout:function(){this.logout(),i.a.push("/")}}),router:i.a,components:{Logo:c.a}}},148:function(t,e){},149:function(t,e){},150:function(t,e){},151:function(t,e){},152:function(t,e){},153:function(t,e){},154:function(t,e){},155:function(t,e){},156:function(t,e){},157:function(t,e){},226:function(t,e,n){t.exports=n.p+"static/img/profitoro_logo.13ebd6a.svg"},227:function(t,e,n){n(148);var o=n(8)(n(111),n(235),"data-v-18b8618d",null);t.exports=o.exports},228:function(t,e,n){n(155);var o=n(8)(n(112),n(242),"data-v-7b339bc7",null);t.exports=o.exports},229:function(t,e,n){n(157);var o=n(8)(n(114),n(244),"data-v-bce5280e",null);t.exports=o.exports},230:function(t,e,n){n(154);var o=n(8)(n(115),n(241),"data-v-6fea29f2",null);t.exports=o.exports},231:function(t,e,n){n(153);var o=n(8)(n(116),n(240),"data-v-5ef87f5d",null);t.exports=o.exports},232:function(t,e,n){n(152);var o=n(8)(n(117),n(239),"data-v-4fc175e1",null);t.exports=o.exports},233:function(t,e,n){n(156);var o=n(8)(n(118),n(243),"data-v-7eb6e5d5",null);t.exports=o.exports},234:function(t,e,n){n(150);var o=n(8)(n(119),n(237),"data-v-2c1e5bba",null);t.exports=o.exports},235:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("logo"),t._v(" "),n("tagline"),t._v(" "),n("div",{staticClass:"container row justify-content-center align-items-center"},[n("div",{staticClass:"col-sm-12 col-md-6 col-lg-6"},[n("authentication")],1),t._v(" "),n("div",{staticClass:"col-sm-12 col-md-6 col-lg-6"},[n("go-to-app-link")],1)])],1)},staticRenderFns:[]}},236:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"}},[t.user?t._e():n("landing-page"),t._v(" "),t.user?n("main-content"):t._e()],1)},staticRenderFns:[]}},237:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar navbar-toggleable-md navbar-light"},[t._m(0),t._v(" "),n("div",{staticClass:"navbar-brand"},[n("logo")],1),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarHeader"}},[n("ul",{staticClass:"navbar-nav ml-auto"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home ")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",class:{disabled:t.isAnonymous},attrs:{to:t.settingsPath}},[t._v("Settings ")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",class:{disabled:t.isAnonymous},attrs:{to:t.statisticsPath}},[t._v("Statistics ")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",class:{disabled:t.isAnonymous},attrs:{to:t.workoutsPath}},[t._v("Workouts ")])],1)]),t._v(" "),n("form",{staticClass:"form-inline my-2 my-lg-0"},[t.isAnonymous?t._e():n("button",{staticClass:"btn btn-secondary",on:{click:t.onLogout}},[t._v("Logout")]),t._v(" "),t.isAnonymous?n("button",{staticClass:"btn btn-secondary",on:{click:t.onLogout}},[t._v("Go to the start page")]):t._e()])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarHeader","aria-controls":"navbarHeader","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}]}},238:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{attrs:{to:"/"}},[n("img",{staticClass:"logo",attrs:{src:t.src,alt:"ProFitOro"}})])},staticRenderFns:[]}},239:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("router-view")],1)},staticRenderFns:[]}},240:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("Tagline")])},staticRenderFns:[]}},241:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contaner"},[n("div",{staticClass:"row align-items-center justify-content-center"},[t._m(0),t._v(" "),n("div",{staticClass:"col-lg-10 col-sm-12"},[n("button",{staticClass:"btn btn-large btn-secondary btn-block rounded-0",on:{click:t.authenticateAnonymous}},[t._v("\n        START WITHOUT REGISTRATION\n      ")]),t._v(" "),t._m(1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-2 col-sm-12"},[n("span",[t._v("OR")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("small",[t._v("This version will not allow you to personalise your profile or add new workouts")])])}]}},242:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header-component"),t._v(" "),n("content-component"),t._v(" "),n("footer-component")],1)},staticRenderFns:[]}},243:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("Footer")])},staticRenderFns:[]}},244:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("div",[n("small",[t._v(t._s(t.titleText))])]),t._v(" "),n("form",[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"rounded-0 border-top-0 border-left-0 border-right-0 form-control",attrs:{type:"email",placeholder:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"rounded-0 border-top-0 border-left-0 border-right-0 form-control",attrs:{type:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),n("button",{staticClass:"rounded-0 btn btn-secondary btn-block",on:{click:t.onAction}},[t._v(t._s(this.actionButtonText))])]),t._v(" "),n("hr"),t._v(" "),n("button",{staticClass:"rounded-0 btn btn-secondary btn-block",on:{click:t.onSwitch}},[t._v(t._s(this.switchButtonText))])])])},staticRenderFns:[]}},36:function(t,e,n){"use strict";var o=n(35),s=n(245),a=n(54),i=function(){return n.e(1).then(n.bind(null,249))},r=function(){return n.e(0).then(n.bind(null,250))},c=function(){return n.e(3).then(n.bind(null,251))},u=function(){return n.e(2).then(n.bind(null,252))};o.a.use(s.a);var l=new s.a({mode:"history",routes:[{name:"home",component:i,path:"/"},{name:"settings",component:r,path:"/settings",meta:{requiresAuth:!0}},{name:"statistics",component:c,path:"/statistics",meta:{requiresAuth:!0}},{name:"workouts",component:u,path:"/workouts",meta:{requiresAuth:!0}}]});l.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.requiresAuth})&&(!a.a.state.user||a.a.state.user.isAnonymous)?n({path:"/"}):n()}),e.a=l},54:function(t,e,n){"use strict";var o=n(20),s=n.n(o),a=n(35),i=n(21),r=n(109),c=n(107),u=n(108),l=n(106),f=n(195),d=n.n(f),p=n(100);n.n(p);a.a.use(i.a);var m={apiKey:"AIzaSyDGJLmuKGoM7uOKFEsMTP_L9gwJCmOQmfE",databaseURL:"https://profitoro-ad0f0.firebaseio.com",authDomain:"profitoro-ad0f0.firebaseapp.com"},v=d.a.initializeApp(m),g=v.database(),h=g.ref("/configuration/test"),b=g.ref("/statistics/test");e.a=new i.a.Store({state:s()({},r.a,{configRef:h,statisticsRef:b,firebaseApp:v}),getters:c.a,mutations:s()({},u.a,p.firebaseMutations),actions:l.a})},99:function(t,e,n){n(151);var o=n(8)(n(113),n(238),null,null);t.exports=o.exports}},[105]);
//# sourceMappingURL=app.33fea30b276dc2bf7662.js.map