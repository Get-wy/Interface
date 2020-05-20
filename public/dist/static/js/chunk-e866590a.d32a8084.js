(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e866590a"],{"9f19":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"StaffBonusList-container"},[a("el-select",{attrs:{placeholder:"所"},model:{value:t.specialty_Category,callback:function(e){t.specialty_Category=e},expression:"specialty_Category"}},t._l(t.specialty_CategoryList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),t._v(" "),a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"员工姓名"},model:{value:t.project_NameOrNumber,callback:function(e){t.project_NameOrNumber=e},expression:"project_NameOrNumber"}}),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"20px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.initUserList}},[t._v("查询")]),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary"},on:{click:t.Output}},[a("svg-icon",{staticStyle:{width:"14px",height:"14.5px"},attrs:{iconClass:"excel"}}),t._v("导出")],1),t._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-printer"},on:{click:t.print}},[t._v("打印")]),t._v(" "),a("el-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData,border:"","summary-method":t.getSummaries,"show-summary":""}},[a("el-table-column",{attrs:{type:"index",prop:"index",label:"序号",width:"80",align:"center",fixed:"left"}}),t._v(" "),a("el-table-column",{attrs:{prop:"staffName",label:"员工姓名",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"specialty",label:"所",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"calbonus",label:"计算产值",filters:[{text:"有",value:"有"},{text:"无",value:"无"}],"filter-method":t.filterTag,align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text","close-transition":""},on:{click:function(a){return t.handleClickStatus(e.row.staffNumber,e.row.staffName)}},model:{value:e.row.button,callback:function(a){t.$set(e.row,"button",a)},expression:"scope.row.button"}},[t._v("\n          "+t._s(e.row.button)+"\n        ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"bonusAdjust",label:"调剂产值",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"bonusInTotal",label:"产值合计",align:"center"}})],1)],1)},i=[],r=a("db72"),s=a("75fc"),u=(a("96cf"),a("3b8d")),l=(a("c5f6"),a("ac6a"),a("ed08")),o=a("add5"),c=a.n(o),b={name:"StaffBonusList",data:function(){return{specialty_Category:"",specialty_CategoryList:[],project_NameOrNumber:"",tableData:[],tempTableData:[],sum3:0,sum4:0,sum5:0}},computed:{},methods:{filterTag:function(t,e){return"有"==t?e.calbonus>0:"无"==t?0==e.calbonus:void 0},getSummaries:function(t){var e=t.columns,a=t.data,n=[];return e.forEach((function(t,e){if(e<3)n[e]=0===e?"合计":"";else{var i=a.map((function(e){return Number(e[t.property])}));i.every((function(t){return isNaN(t)}))?n[e]="":(n[e]=i.reduce((function(t,e){var a=Number(e);return isNaN(a)?t:t+e}),0),e>2&&(n[e]=n[e].toFixed(2)))}})),n},switchCal:function(t){},handleClickStatus:function(t,e){this.$router.push({path:"/bonus-dean-staff/StaffBonusDetail/".concat(t,"/").concat(e)})},initUserList:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(e){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,e){a.$store.dispatch("bonusdean/getuserbonuslist",{specialty:a.specialty_Category,userSelect:a.project_NameOrNumber}).then((function(e){for(var n in a.tableData=e.tableData,a.tableData)a.tableData[n].specialty=Object(l["a"])(a.tableData[n].specialty,a.specialty_CategoryList),a.tableData[n].calbonus=a.tableData[n].button;t()})).catch((function(t){a.$message({message:t,type:"error"})}))})));case 1:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),readSettings:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,a){e.$store.dispatch("settings/getSettings").then((function(a){e.specialty_CategoryList=[{value:"",label:"所(全部)"}].concat(Object(s["a"])(a.placeList)),t()})).catch((function(t){e.$message({message:t,type:"error"})}))})));case 1:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}(),Output:function(){var t=this;for(var e in this.tempTableData.length=0,this.sum3=0,this.sum4=0,this.sum5=0,this.tableData)this.tempTableData[e]=Object(r["a"])({},{index:Number(e)+1},{},this.tableData[e]),this.sum3+=Number(this.tempTableData[e].calbonus),this.sum4+=Number(this.tempTableData[e].bonusAdjust),this.sum5+=Number(this.tempTableData[e].bonusInTotal);this.tempTableData=[].concat(Object(s["a"])(this.tempTableData),[{index:"合计",staffName:"",specialty:"",calbonus:Number(this.sum3).toFixed(2),bonusAdjust:Number(this.sum4).toFixed(2),bonusInTotal:Number(this.sum5).toFixed(2)}]),this.downloadLoading=!0,Promise.all([a.e("chunk-e69e90f4"),a.e("chunk-2181d362")]).then(a.bind(null,"4bf8d")).then((function(e){var a=["序号","员工姓名","所","计算产值","调剂产值","产值合计"],n=["index","staffName","specialty","calbonus","bonusAdjust","bonusInTotal"],i=t.tempTableData,r=t.formatJson(n,i);e.export_json_to_excel({header:a,data:r,filename:"本季度人员产值列表",autoWidth:!0,bookType:"xlsx"}),t.downloadLoading=!1}))},print:function(){for(var t in this.tempTableData.length=0,this.sum3=0,this.sum4=0,this.sum5=0,this.tableData)this.tempTableData[t]=Object(r["a"])({},{index:Number(t)+1},{},this.tableData[t]),this.sum3+=Number(this.tempTableData[t].calbonus),this.sum4+=Number(this.tempTableData[t].bonusAdjust),this.sum5+=Number(this.tempTableData[t].bonusInTotal);this.tempTableData=[].concat(Object(s["a"])(this.tempTableData),[{index:"合计",staffName:"",specialty:"",calbonus:Number(this.sum3).toFixed(2),bonusAdjust:Number(this.sum4).toFixed(2),bonusInTotal:Number(this.sum5).toFixed(2)}]);var e={printable:this.tempTableData,properties:[{field:"index",displayName:"序号"},{field:"staffName",displayName:"员工姓名"},{field:"specialty",displayName:"所"},{field:"calbonus",displayName:"计算产值"},{field:"bonusAdjust",displayName:"调剂产值"},{field:"bonusInTotal",displayName:"产值合计"}],type:"json",gridHeaderStyle:"color: black;  border: 1px solid #000000;",gridStyle:"border: 1px solid #000000;"};c()(e)},formatJson:function(t,e){return e.map((function(e){return t.map((function(t){return e[t]}))}))},init:function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.readSettings();case 2:return t.next=4,this.initUserList();case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){this.init()},activated:function(){this.init()}},m=b,p=m,f=a("2877"),d=Object(f["a"])(p,n,i,!1,null,"5c11030a",null);e["default"]=d.exports},ed08:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));a("28a5"),a("a481"),a("6b54"),a("7618");function n(t,e){for(var a in e)if(e[a].value==t)return e[a].label}function i(t,e){for(var a in e)if(e[a].label==t)return e[a].value}}}]);