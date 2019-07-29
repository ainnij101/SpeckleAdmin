(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b9dbc228"],{1843:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{"grid-list-xl":""}},[e.selectedProcessors.length>0?s("v-toolbar",{staticStyle:{"z-index":"100"},attrs:{fixed:""}},[s("v-toolbar-items",[s("v-btn",{staticClass:"md-raised md-dense md-primary",attrs:{icon:"",color:"primary"},nativeOn:{click:function(t){return e.clearSelection(t)}}},[s("v-icon",[e._v("close")])],1),s("v-btn",{attrs:{flat:""},nativeOn:{click:function(t){return e.selectAll()}}},[e._v("select all")])],1),s("v-spacer"),s("v-toolbar-items",[s("v-btn",{attrs:{flat:"",color:"error"},nativeOn:{click:function(t){return e.deleteSelectedProcessors(t)}}},[e._v("Delete")])],1)],1):e._e(),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"headline font-weight-light",attrs:{xs12:"","py-5":""}},[e._v("\n      Processor allows you to run scripts on streams.\n    ")]),0===e.processors.length?s("v-flex",{attrs:{xs12:""}},[s("p",{staticClass:"title font-weight-light"},[e._v("Hmm, you don't have any processors yet. Don't worry! You can create a new one here (big blue button in the lower right corner)!\n      ")])]):e._e(),s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{solo:"",clearable:"",label:"Search for a processor","prepend-inner-icon":"search",spellcheck:"false",loading:e.isSearching,"append-icon":"refresh"},on:{input:e.updateSearch,"click:append":function(t){return e.$store.dispatch("getProcessors")}},model:{value:e.searchfilter,callback:function(t){e.searchfilter=t},expression:"searchfilter"}}),e.searchfilter&&""!==e.searchfilter?s("div",[s("p",{staticClass:"title font-weight-light my-3 mx-1"},[e._v("Found "+e._s(e.filteredProcessors.length)+" processor"+e._s(1===e.filteredProcessors.length?"":"s")+" matching your search criteria.")])]):e._e()],1)],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-btn",{attrs:{icon:"",small:"",disabled:0===e.pageNumber},nativeOn:{click:function(t){e.pageNumber=0}}},[s("v-icon",[e._v("first_page")])],1),s("v-btn",{attrs:{icon:"",small:"",disabled:0===e.pageNumber},nativeOn:{click:function(t){e.pageNumber-=1}}},[s("v-icon",[e._v("chevron_left")])],1),s("v-btn",{attrs:{icon:"",disabled:e.pageNumber>=Math.round(e.filteredProcessors.length/e.sliceSize)},nativeOn:{click:function(t){e.pageNumber+=1}}},[s("v-icon",[e._v("chevron_right")])],1),s("v-btn",{attrs:{icon:"",small:"",disabled:e.pageNumber>=Math.round(e.filteredProcessors.length/e.sliceSize)},nativeOn:{click:function(t){e.pageNumber=Math.round(e.filteredProcessors.length/e.sliceSize)}}},[s("v-icon",[e._v("last_page")])],1),s("span",{staticClass:"caption",attrs:{xxxstyle:"position: relative;top:8px;"}},[e._v(e._s(e.pageNumber)+" / "+e._s((e.filteredProcessors.length/e.sliceSize).toFixed(0)))])],1),e._l(e.paginatedProcessors,function(t){return s("v-flex",{key:t._id,attrs:{xs12:"",sm6:""}},[s("processor-card",{attrs:{resource:t},on:{selected:e.selectThis,deleted:e.clearSelection}})],1)}),s("v-flex",{attrs:{xs12:""}},[s("v-btn",{attrs:{icon:"",small:"",disabled:0===e.pageNumber},nativeOn:{click:function(t){e.pageNumber=0}}},[s("v-icon",[e._v("first_page")])],1),s("v-btn",{attrs:{icon:"",small:"",disabled:0===e.pageNumber},nativeOn:{click:function(t){e.pageNumber-=1}}},[s("v-icon",[e._v("chevron_left")])],1),s("v-btn",{attrs:{icon:"",disabled:e.pageNumber>=Math.round(e.filteredProcessors.length/e.sliceSize)},nativeOn:{click:function(t){e.pageNumber+=1}}},[s("v-icon",[e._v("chevron_right")])],1),s("v-btn",{attrs:{icon:"",small:"",disabled:e.pageNumber>=Math.round(e.filteredProcessors.length/e.sliceSize)},nativeOn:{click:function(t){e.pageNumber=Math.round(e.filteredProcessors.length/e.sliceSize)}}},[s("v-icon",[e._v("last_page")])],1),s("span",{staticClass:"caption",attrs:{xxxstyle:"position: relative;top:8px;"}},[e._v(e._s(e.pageNumber)+" / "+e._s((e.filteredProcessors.length/e.sliceSize).toFixed(0)))])],1)],2),s("v-btn",{attrs:{color:"primary",dark:"",fixed:"",large:"",bottom:"",right:"",fab:""},nativeOn:{click:function(t){return e.createProcessor(t)}}},[s("v-icon",[e._v("add")])],1)],1)},c=[],o=(s("ac6a"),s("20d6"),s("7f7f"),s("6762"),s("2fdb"),s("f7fe")),i=s.n(o),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",{class:{"elevation-10":e.selected,"elevation-1":!0}},[s("v-card-title",[s("span",{staticClass:"title font-weight-light"},[e._v(e._s(e.resource.name?e.resource.name:"No Name"))]),s("v-spacer"),s("span"),s("span",[s("v-checkbox",{attrs:{color:"primary"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1),s("v-divider",{staticClass:"mx-0 my-0"}),s("v-layout",{attrs:{row:"",wrap:""}},[e.resource.tags&&e.resource.tags.length>0?s("v-flex",{attrs:{xs12:"","ma-2":""}},e._l(e.resource.tags,function(t){return s("v-chip",{key:t,attrs:{small:"",outline:""}},[e._v(e._s(t))])}),1):e._e(),s("v-flex",{attrs:{xs12:"","ma-2":""}},[s("div",{staticClass:"md-caption md-small-hide",domProps:{innerHTML:e._s(e.compiledDescription)}})])],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{staticClass:"transparent",attrs:{depressed:""},nativeOn:{click:function(t){return e.deleteProcessor(t)}}},[e._v("Delete")]),s("v-btn",{attrs:{color:"primary",to:"/processors/"+e.resource._id}},[e._v("Details")])],1)],1)},a=[],l=(s("c36e"),s("13bb"),s("0e54")),d=s.n(l),u={name:"ProcessorCard",props:{resource:Object},watch:{selected:function(){this.$emit("selected",this.processor)}},computed:{processor:function(){return this.resource},createdAt:function(){var e=new Date(this.processor.createdAt);return e.toLocaleString("en",{year:"numeric",month:"long",day:"numeric"})},compiledDescription:function(){return d()(this.processor.description.substring(0,400)+" ...",{sanitize:!0})}},data:function(){return{selected:!1}},methods:{deleteProcessor:function(){this.$store.dispatch("deleteProcessor",{_id:this.processor._id})},updateTags:i()(function(e){this.$store.dispatch("updateProcessor",{_id:this.processor._id,tags:this.processor.tags})},1e3)},mounted:function(){var e=this;bus.$on("select-processor",function(t){t===e.processor._id&&(e.selected=!0)}),bus.$on("unselect-all-processors",function(){e.selected=!1})}},p=u,h=(s("cacb"),s("2877")),f=Object(h["a"])(p,n,a,!1,null,"078e1bc8",null);f.options.__file="ProcessorCard.vue";var v=f.exports,b={name:"ProcessorView",components:{ProcessorCard:v},computed:{processors:function(){var e=this;return this.$store.state.processors.filter(function(t){return-1!==t.owner.indexOf(e.$store.state.user._id)})},filteredProcessors:function(){var e=this;return this.searchfilter&&""!==this.searchfilter?this.processors.filter(function(t){return t.name.toLowerCase().includes(e.searchfilter.toLowerCase())}):this.processors},paginatedProcessors:function(){return this.filteredProcessors.slice(this.currentIndex+this.pageNumber*this.sliceSize,this.sliceSize*(this.pageNumber+1))}},data:function(){return{currentIndex:0,sliceSize:6,pageNumber:0,searchfilter:"",selectedProcessors:[],isSearching:!1}},methods:{selectThis:function(e){var t=this.selectedProcessors.findIndex(function(t){return t._id===e._id});-1===t?this.selectedProcessors.unshift(e):this.selectedProcessors.splice(t,1)},selectAll:function(){var e=this;this.paginatedProcessors.forEach(function(t){var s=e.selectedProcessors.findIndex(function(e){return e._id===t._id});-1===s&&bus.$emit("select-processor",t._id)})},createProcessor:function(){var e=this;this.$store.dispatch("createProcessor",{name:"A brand new speckle processor"}).then(function(t){e.$router.push("/processors/".concat(t._id))})},deleteSelectedProcessors:function(){var e=this;this.selectedProcessors.forEach(function(t){e.$store.dispatch("deleteProcessor",{_id:t._id})}),this.selectedProcessors.splice(0,this.selectedProcessors.length),this.clearSelection()},clearSelection:function(){bus.$emit("unselect-all-processors")},updateSearch:i()(function(e){this.pageNumber=0,this.isSearching=!1,this.searchfilter=e},1e3)}},m=b,g=(s("a45b"),Object(h["a"])(m,r,c,!1,null,"7cb18d69",null));g.options.__file="Processors.vue";t["default"]=g.exports},a45b:function(e,t,s){"use strict";var r=s("e2b5"),c=s.n(r);c.a},cacb:function(e,t,s){"use strict";var r=s("df1b"),c=s.n(r);c.a},df1b:function(e,t,s){},e2b5:function(e,t,s){}}]);
//# sourceMappingURL=chunk-b9dbc228.57cbf422.js.map