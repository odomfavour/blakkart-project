(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{458:function(t,e,n){var content=n(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("57eb22d1",content,!0,{sourceMap:!1})},510:function(t,e,n){"use strict";n(458)},511:function(t,e,n){var r=n(56)(!1);r.push([t.i,"\n.grayed[data-v-a18e7aca] {\r\n  background: #f4f4f4;\r\n  height: 100%;\n}\n.grayed svg[data-v-a18e7aca] {\r\n  fill: #eb542b;\r\n  font-size: 70px;\n}\n.centered-cards[data-v-a18e7aca] {\r\n  width: 60%;\n}\n.or-border[data-v-a18e7aca] {\r\n  width: 43%;\r\n  background-color: #000;\n}\n.w-or[data-v-a18e7aca] {\r\n  width: 30%;\r\n  margin: 0 auto;\n}\n.search-shrink[data-v-a18e7aca] {\r\n  width: 50%;\r\n  margin: 0 auto;\n}\r\n/* \r\n .collapsed > .when-opened,\r\n    :not(.collapsed) > .when-closed {\r\n        display: none;\r\n    } */\r\n",""]),t.exports=r},547:function(t,e,n){"use strict";n.r(e);var r={layout:"profile",data:function(){return{text:"\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor\n          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon\n          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla\n          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher\n          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic\n          synth nesciunt you probably haven't heard of them accusamus labore VHS.\n        ",questions:[{isVisible:!0},{isVisible:!1},{isVisible:!1}],faqs:[{isVisible:!0},{isVisible:!1},{isVisible:!1}],isGettingStarted:!0}}},o=(n(510),n(30)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("h2",{staticClass:"text-center font-weight-bold"},[t._v("How can we help you?")]),t._v(" "),e("div",{staticClass:"my-4 search-shrink"},[e("div",{staticClass:"input-group mb-3"},[e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Search","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}}),t._v(" "),e("span",{staticClass:"input-group-text bg-dark text-white",attrs:{id:"basic-addon2",role:"button"}},[e("b-icon",{attrs:{icon:"search"}})],1)])]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"d-flex mx-auto centered-cards my-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6"},[e("div",{staticClass:"text-center grayed p-4"},[e("b-icon",{attrs:{icon:"question-circle-fill","font-scale":"3"}}),t._v(" "),e("h5",{staticClass:"my-2 font-weight-bold"},[t._v("Getting Started")]),t._v(" "),e("small",[t._v("Learn everything that helps you get started with\n              Blakkart.")])],1)]),t._v(" "),e("div",{staticClass:"col-6"},[e("div",{staticClass:"text-center grayed p-4"},[e("b-icon",{attrs:{icon:"file-earmark-fill","font-scale":"3"}}),t._v(" "),e("h5",{staticClass:"my-2 font-weight-bold"},[t._v("FAQs")]),t._v(" "),e("small",[t._v("Read answered questions")])],1)])])]),t._v(" "),t.isGettingStarted?e("div",{staticClass:"my-4"},[e("h5",{staticClass:"mb-3"},[t._v("Getting Started")]),t._v(" "),e("div",{staticClass:"accordion",attrs:{role:"tablist"}},t._l(t.questions,(function(n,r){return e("b-card",{key:r,staticClass:"mb-1",attrs:{"no-body":""}},[e("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"accordion-"+r,expression:"'accordion-' + index"}],attrs:{block:"",variant:"light"}},[e("div",{staticClass:"d-flex w-100"},[e("p",{staticClass:"w-100 text-left mb-0"},[t._v("Blakkart Privacy Policy")]),t._v(" "),n.isVisible?e("span",{staticClass:"when-opened"},[e("b-icon",{attrs:{icon:"chevron-up"}})],1):e("span",{staticClass:"when-closed"},[e("b-icon",{attrs:{icon:"chevron-down"}})],1)])])],1),t._v(" "),e("b-collapse",{attrs:{id:"accordion-".concat(r),accordion:"my-accordion",role:"tabpanel"},model:{value:t.questions[r].isVisible,callback:function(e){t.$set(t.questions[r],"isVisible",e)},expression:"questions[index].isVisible"}},[e("b-card-body",[e("b-card-text",[t._v(t._s(t.text))])],1)],1)],1)})),1)]):t._e(),t._v(" "),e("div",{staticClass:"my-4"},[e("h5",{staticClass:"mb-3 font-weight-bold"},[t._v("Frequently Asked Questions")]),t._v(" "),e("div",{staticClass:"accordion",attrs:{role:"tablist"}},t._l(t.faqs,(function(n,r){return e("b-card",{key:r,staticClass:"mb-1",attrs:{"no-body":""}},[e("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:"faq-"+r,expression:"'faq-' + index"}],attrs:{block:"",variant:"light"}},[e("div",{staticClass:"d-flex w-100"},[e("p",{staticClass:"w-100 text-left mb-0"},[t._v("Blakkart Privacy Policy")]),t._v(" "),n.isVisible?e("span",{staticClass:"when-opened"},[e("b-icon",{attrs:{icon:"chevron-up"}})],1):e("span",{staticClass:"when-closed"},[e("b-icon",{attrs:{icon:"chevron-down"}})],1)])])],1),t._v(" "),e("b-collapse",{attrs:{id:"faq-".concat(r),accordion:"my-accordion",role:"tabpanel"},model:{value:t.faqs[r].isVisible,callback:function(e){t.$set(t.faqs[r],"isVisible",e)},expression:"faqs[index].isVisible"}},[e("b-card-body",[e("b-card-text",[t._v(t._s(t.text))])],1)],1)],1)})),1)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"d-flex justify-content-end align-items-center mb-5"},[t("button",{staticClass:"btn btn-primary"},[this._v("Contact Support")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex align-items-center w-or"},[e("hr",{staticClass:"or-border"}),t._v(" "),e("p",{staticClass:"or-text mb-1"},[t._v("or")]),t._v(" "),e("hr",{staticClass:"or-border"})])}],!1,null,"a18e7aca",null);e.default=component.exports}}]);