(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e73605f6"],{"142d":function(s,t,e){"use strict";var o=e("7b18"),a=e.n(o);a.a},"7b18":function(s,t,e){},9406:function(s,t,e){"use strict";e.r(t);var o=function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"dashboard-container"},[e("div",{staticClass:"dashboard-text"},[s._v("name: "+s._s(s.name))]),s._v(" "),e("div",{staticClass:"dashboard-text"},[s._v("roles: "),s._l(s.roles,(function(t){return e("span",{key:t},[s._v(s._s(t))])}))],2)])},a=[],n=e("db72"),r=e("a78e"),i=e.n(r),u=e("2f62"),c={name:"Dashboard",computed:Object(n["a"])({},Object(u["b"])(["name","roles"])),created:function(){console.log("有");var s=JSON.parse(i.a.get("userInfo"));0===s.user_authority?(console.log("设计人员"),1===s.institute||2===s.institute?(console.log("所长"),this.$router.push({path:"/bonus-principal"})):1===s.design_director?(console.log("设计负责人"),this.$router.push({path:"/bonus-designprincipal/ProgressManage"})):1===s.specialty_principal?(this.$router.push({path:"/bonus-subspecialtyprincipal/BonusManage"}),console.log("专业负责人")):this.$router.push({path:"/bonus-staff/StaffBonusDetail"})):1===s.user_authority?(this.$router.push({path:"/project-manage/list"}),console.log("管理员")):2===s.user_authority?(this.$router.push({path:"/bonus-dean"}),console.log("院长")):console.log("用户身份未知")}},l=c,p=(e("142d"),e("2877")),h=Object(p["a"])(l,o,a,!1,null,"0d3fd323",null);t["default"]=h.exports}}]);