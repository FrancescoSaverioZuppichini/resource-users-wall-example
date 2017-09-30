webpackJsonp([1],{126:function(e,t){},127:function(e,t){},134:function(e,t,s){function n(e){s(127)}var r=s(54)(s(78),s(136),n,"data-v-33a3fade",null);e.exports=r.exports},135:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"uk-section uk-container"},[s("h1",{staticClass:"uk-text-center"},[e._v("Users")]),e._v(" "),s("h4",{staticClass:"uk-text-center"},[e._v("there are "+e._s(e.$store.state.users.data.length)+" users")]),e._v(" "),s("h4",{staticClass:"uk-text-center"},[e._v("there are "+e._s(e.$store.state.users.data.filter(function(e){return e.bookmarked}).length)+" bookmarked users")]),e._v(" "),s("div",{staticClass:"uk-flex uk-flex-center",attrs:{"uk-grid":""}},e._l(e.$store.state.users.data,function(e){return s("div",{key:e.email},[s("user",{attrs:{user:e}})],1)})),e._v(" "),s("div",{staticClass:"uk-flex uk-flex-center uk-margin"},[s("button",{staticClass:"uk-button uk-button-link",on:{click:function(t){e.$store.actions.getUsers()}}},[e._v("get more")])])])])},staticRenderFns:[]}},136:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"uk-card uk-card-default",class:{"user--bookmarked":e.user.bookmarked}},[s("div",{staticClass:"uk-card-body"},[s("img",{attrs:{src:e.user.picture.large}}),e._v(" "),s("div",{staticClass:"uk-text-center"},[s("h3",[e._v(e._s(e.user.name.first))])]),e._v(" "),s("div",{staticClass:"uk-flex uk-flex-column"},[s("button",{staticClass:"uk-button uk-button-danger",on:{click:function(t){e.$store.actions.deleteUser(e.user)}}},[e._v("Delete")]),e._v(" "),s("button",{staticClass:"uk-button uk-button-primary",on:{click:function(t){e.$store.actions.bookmarkUser(e.user)}}},[e._v(e._s(e.user.bookmarked?"UnBookmark":"Bookmark"))])])])])},staticRenderFns:[]}},138:function(e,t){},55:function(e,t,s){"use strict";var n=s(82),r=s.n(n),a=s(86),u=s.n(a),o=s(87),i=s.n(o),c=s(89),l=s.n(c),d=s(88),k=s.n(d),f=s(32),v=(s.n(f),s(133)),_=(s.n(v),s(59)),p=s.n(_),m=s(10),h=function(e){function t(){u()(this,t);var e=l()(this,(t.__proto__||r()(t)).call(this));return e.state.users=new v.Resource,e}return k()(t,e),i()(t,[{key:"onGetUsersSuccess",value:function(e){var t=e.data;this.state.users.fromArray(t.results,"email")}},{key:"onDeleteUser",value:function(e){var t=e.user;this.state.users.remove(t.email)}},{key:"onBookmarkUser",value:function(e){var t=e.user;m.default.set(t,"bookmarked",!t.bookmarked)}},{key:"reduce",value:function(e){this.reduceMap(e,{GET_USERS_SUCCESS:this.onGetUsersSuccess,DELETE_USER:this.onDeleteUser,BOOKMARK_USER:this.onBookmarkUser})}},{key:"actions",value:function(e){return{getUsers:function(){p.a.get("https://randomuser.me/api/?results=12").then(function(t){return e.dispatchAction("GET_USERS_SUCCESS",t)})},deleteUser:function(t){e.dispatchAction("DELETE_USER",{user:t})},bookmarkUser:function(t){e.dispatchAction("BOOKMARK_USER",{user:t})}}}}]),t}(f.Store),U=new h;t.a=U},58:function(e,t,s){function n(e){s(126)}var r=s(54)(s(77),s(135),n,null,null);e.exports=r.exports},77:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(134),r=s.n(n);t.default={name:"app",mounted:function(){this.$store.actions.getUsers()},components:{User:r.a}}},78:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"User",props:["user"],data:function(){return{}}}},79:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(10),r=s(58),a=s.n(r),u=s(57),o=(s.n(u),s(32)),i=(s.n(o),s(56)),c=s.n(i),l=s(55);n.default.use(o.flue),o.flue.addStores([l.a]),o.flue.applyGlobalMiddleware([c.a]),n.default.config.productionTip=!1,new n.default({el:"#app",template:"<App/>",components:{App:a.a}})}},[79]);
//# sourceMappingURL=app.5df62982171f2c069e1d.js.map