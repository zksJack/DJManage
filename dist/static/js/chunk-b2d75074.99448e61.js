(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b2d75074"],{b793:function(t,e,n){"use strict";n.r(e);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.clear}},[t._v("清理垃圾图片")])],1)},s=[],a={data:function(){return{}},methods:{clear:function(){var t=this;this.$confirm("是否要清理垃圾图片?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$store.dispatch("newpaper/clearphones").then((function(e){if(0!=e.status)return t.$message.error(e.massage);t.$message({message:"清理成功~",type:"success"})}))})).catch((function(t){}))}}},r=a,i=(n("efc5"),n("2877")),u=Object(i["a"])(r,c,s,!1,null,null,null);e["default"]=u.exports},efc5:function(t,e,n){"use strict";var c=n("f9e1"),s=n.n(c);s.a},f9e1:function(t,e,n){}}]);