(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a4889fc"],{"3e18":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("el-form",{ref:"form",staticClass:"demo-ruleForm",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"新闻标题",prop:"title"}},[a("el-input",{model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"新闻作者",prop:"author"}},[a("el-input",{model:{value:e.form.author,callback:function(t){e.$set(e.form,"author",t)},expression:"form.author"}})],1),a("el-form-item",{attrs:{label:"新闻描述",prop:"titleDesc"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.form.titleDesc,callback:function(t){e.$set(e.form,"titleDesc",t)},expression:"form.titleDesc"}})],1),a("el-form-item",{attrs:{label:"新闻类型"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return a("el-option",{key:e.newsType_id,attrs:{label:e.typeName,value:e.newsType_id}})})),1)],1),a("el-form-item",{attrs:{label:"新闻图片"}},[a("el-upload",{ref:"upload",staticClass:"avatar-uploader",attrs:{action:"myUrl","http-request":e.uploadFiles,"on-change":e.changes,"on-remove":e.removes,"auto-upload":!1,"list-type":"picture-card"}},[a("i",{staticClass:"el-icon-plus"}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.flag,expression:"flag"}],staticClass:"el-upload__tip",staticStyle:{color:"red"},attrs:{slot:"tip"},slot:"tip"},[e._v(" 提示：请选择图片 ")])])],1),a("el-form-item",{attrs:{label:"新闻内容",prop:"content"}},[a("quill-editor",{ref:"text",staticClass:"quill-editor",model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1),a("el-form-item",[a("el-button",{staticClass:"submit",attrs:{type:"primary"},on:{click:function(t){return t.preventDefault(),e.onSubmit("form")}}},[e._v("立即提交")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return t.preventDefault(),e.cancel()}}},[e._v("取消")])],1)],1)],1)},s=[],l=a("953d"),o=(a("a753"),a("8096"),a("14e1"),{created:function(){this.getnewstype()},data:function(){return{form:{},options:[],value:"",content:"",imageUrl:"",flag:!0,rules:{title:[{required:!0,message:"请输入新闻标题",trigger:"blur"}],author:[{required:!0,message:"请输入新闻作者",trigger:"blur"}],titleDesc:[{required:!0,message:"请输入新闻描述",trigger:"blur"}]}}},methods:{onSubmit:function(e){var t=this;this.$refs[e].validate((function(e){return e?t.value?t.content?void t.$refs.upload.submit():t.$message.warning("新闻内容不能为空~"):t.$message.warning("新闻类型不能为空~"):(console.log("error submit!!"),!1)}))},uploadFiles:function(e){var t=this;console.log(e);var a=new FormData;a.append("pic",e.file),a.append("title",this.form.title+""),a.append("author",this.form.author),a.append("titleDesc",this.form.titleDesc),a.append("type",this.value),a.append("content",this.content),this.$store.dispatch("newpaper/addnewspaper",a).then((function(e){if(0!=e.status)return t.$message.error(e.massage);t.$message({message:"添加新闻成功~",type:"success"}),t.$router.push("/newspaper/newspaperlist")}))},getnewstype:function(){var e=this;this.$store.dispatch("newpaper/newstype").then((function(t){e.options=t.data}))},cancel:function(){this.$router.push("/newspaper/newspaperlist")},changes:function(e,t){this.flag=!1,t.length>1&&t.shift()},removes:function(e,t){t.length||(this.flag=!0)}},components:{quillEditor:l["quillEditor"]}}),n=o,i=(a("d2d6"),a("2877")),u=Object(i["a"])(n,r,s,!1,null,null,null);t["default"]=u.exports},d2d6:function(e,t,a){"use strict";var r=a("ef9d"),s=a.n(r);s.a},ef9d:function(e,t,a){}}]);