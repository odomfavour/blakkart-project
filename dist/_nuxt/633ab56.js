(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{488:function(t,e,l){var content=l(551);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(56).default)("7919be88",content,!0,{sourceMap:!1})},550:function(t,e,l){"use strict";l(488)},551:function(t,e,l){var c=l(55)(!1);c.push([t.i,"\n.round-icon {\r\n  background: rgba(235, 167, 148, 0.2);\r\n  height: 48px;\r\n  width: 48px;\r\n  border-radius: 50%;\r\n  color: red;\n}\n.round-icon .add {\r\n  fill: #eb3d0e;\n}\n.empty-layout {\r\n  min-height: 80vh;\n}\n.empty-layout .empty-inner svg {\r\n  color: #eb3d0e;\r\n  font-size: 100px;\n}\n.assessory-box {\r\n  width: 20%;\r\n  margin-right: 10px;\n}\n.accessories {\r\n  background: #000;\r\n  height: 80px;\n}\n.accessories-add {\r\n  background: rgba(235, 61, 14, 0.1);\r\n  height: 80px;\n}\n.accessories-add svg,\r\n.image-add svg {\r\n  color: #eb3d0e;\r\n  font-weight: 700;\n}\n.image-add {\r\n  height: 100px;\r\n  background: rgba(235, 61, 14, 0.1);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\n}\n.image-box {\r\n  height: 150px;\n}\n.image-box img {\r\n  object-fit: cover !important;\r\n  width: 100%;\r\n  height: 100%;\n}\n.base-icon {\r\n  width: 50%;\n}\n.base-box {\r\n  border-top: 1px solid #eba794;\n}\n.bg-lighted {\r\n  background: transparent;\r\n  padding: 0;\n}\n.bg-lighted svg {\r\n  color: #eb3d0e;\n}\n.top-right {\r\n  right: 0;\n}\n@media (max-width: 426px) {\n.assessory-box {\r\n    width: 48%;\n}\n.image-add {\r\n    min-height: 127px;\n}\n.price-section label {\r\n    font-size: 13px !important;\n}\n.clothings p {\r\n    font-size: 14px;\n}\n.clothings .b-icon.bi {\r\n    font-size: 14px !important;\n}\n.clothings .b-rating.d-inline-flex {\r\n    padding: 0;\n}\n}\r\n",""]),t.exports=c},586:function(t,e,l){"use strict";l.r(e);var c={layout:"seller",data:function(){return{selected:[],status:"not_accepted",sizes:["L","XL","XXL"],isPlain:!0,addItem:!1,items:[{name:"Summer two piece 2022",desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi voluptates modi consectetur quam at fugiat ",download:2.3,tag:234}],selectedd:null,options:[{value:null,text:"Please select an option"},{value:"a",text:"This is First option"},{value:"b",text:"Selected Option"},{value:{C:"3PO"},text:"This is an option with object value"},{value:"d",text:"This one is disabled",disabled:!0}],isClothing:!1}},methods:{showAddPage:function(){this.isPlain=!1,this.addItem=!0},openClothing:function(){this.isClothing=!0}}},n=(l(550),l(27)),component=Object(n.a)(c,(function(){var t=this,e=t._self._c;return e("section",[e("div",{staticClass:"inner-page"},[t.isPlain?e("div",[e("div",{},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4 col-md-6 mb-3"},[e("div",{staticClass:"card",attrs:{role:"button"},on:{click:t.showAddPage}},[t._m(0)])]),t._v(" "),t._m(1)])])]):t._e(),t._v(" "),t.addItem?e("div",[e("div",{staticClass:"pt-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[t._m(2),t._v(" "),t._m(3),t._v(" "),e("div",{},[e("label",{attrs:{for:""}},[t._v("Add images of item(s) for sale*")]),t._v(" "),e("div",{staticClass:"mb-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-6 mb-3"},[e("div",{staticClass:"image-add",attrs:{role:"button"}},[e("b-icon",{attrs:{icon:"plus","font-scale":"1.5"}})],1)]),t._v(" "),e("div",{staticClass:"col-6 mb-3"},[e("div",{staticClass:"image-add",attrs:{role:"button"}},[e("b-icon",{attrs:{icon:"plus","font-scale":"1.5"}})],1)]),t._v(" "),e("div",{staticClass:"col-6 mb-3"},[e("div",{staticClass:"image-add",attrs:{role:"button"}},[e("b-icon",{attrs:{icon:"plus","font-scale":"1.5"}})],1)]),t._v(" "),e("div",{staticClass:"col-6 mb-3"},[e("div",{staticClass:"image-add",attrs:{role:"button"}},[e("b-icon",{attrs:{icon:"plus","font-scale":"1.5"}})],1)])]),t._v(" "),e("p",{staticClass:"text-orange my-3",attrs:{role:"button"}},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"plus-circle"}}),t._v(" Add\n                  another image\n                ")],1)]),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{attrs:{for:""}},[t._v("Available Shades")]),t._v(" "),e("div",{staticClass:"assessory-box"},[e("div",{staticClass:"accessories-add d-flex align-items-center justify-content-center",attrs:{role:"button"}},[e("b-icon",{attrs:{icon:"plus","font-scale":"1.5"}})],1)]),t._v(" "),e("p",{staticClass:"text-orange my-3",attrs:{role:"button"}},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"plus-circle"}}),t._v(" Add\n                  another shade\n                ")],1)])])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"itemName"}},[t._v("Name of item")]),t._v(" "),e("b-form-select",{attrs:{options:t.options},model:{value:t.selectedd,callback:function(e){t.selectedd=e},expression:"selectedd"}})],1),t._v(" "),e("h4",[t._v("Available accessories")]),t._v(" "),e("p",{staticClass:"text-orange"},[t._v("\n              Image of accessory on the product would be ideal so your\n              customer’s can see what it would look like\n            ")]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"image-add h-100",attrs:{role:"button"}},[e("div",{staticClass:"text-center"},[e("b-icon",{attrs:{icon:"plus","font-scale":"1.5"}}),t._v(" "),e("p",{staticClass:"text-orange mb-0"},[t._v("Add image")])],1)])]),t._v(" "),t._m(4)]),t._v(" "),e("p",{staticClass:"text-orange my-3",attrs:{role:"button"}},[e("b-icon",{staticClass:"mr-2",attrs:{icon:"plus-circle"}}),t._v(" Add another\n              shade\n            ")],1),t._v(" "),e("h3",{staticClass:"mt-4"},[t._v("Pricing")]),t._v(" "),t._m(5),t._v(" "),e("p",{staticClass:"text-orange",attrs:{role:"button"}},[t._v("\n              Use a generic price for all sizes\n            ")]),t._v(" "),t._m(6)])])])]):e("div",{staticClass:"d-flex align-items-center justify-content-center empty-layout"},[e("div",{staticClass:"text-center empty-inner"},[e("b-icon",{attrs:{icon:"clipboard"}}),t._v(" "),e("h6",{staticClass:"mt-3"},[t._v("You have not added an item")])],1)]),t._v(" "),t.isClothing?t._e():e("section",[t.items.length>0?e("div",[e("div",{staticClass:"pt-5"},[t._m(7),t._v(" "),e("div",{staticClass:"pt-3 clothings"},[e("div",{staticClass:"row"},t._l(9,(function(l){return e("div",{key:l,staticClass:"col-md-4 mb-3"},[e("div",{staticClass:"card",attrs:{role:"button"},on:{click:t.openClothing}},[e("div",{staticClass:"px-3 pt-3"},[t._m(8,!0),t._v(" "),e("div",{staticClass:"d-flex justify-content-between mt-2 bracket"},[t._m(9,!0),t._v(" "),e("div",[e("b-form-rating",{staticClass:"bg-lighted",attrs:{id:"rating-inline",inline:"","no-border":"",value:"4"}})],1)]),t._v(" "),t._m(10,!0)]),t._v(" "),e("div",{staticClass:"p-3 base-box"},[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("p",{staticClass:"mb-0"},[t._v("\n                        23.6K"),e("span",{staticClass:"ml-2"},[e("b-icon",{attrs:{icon:"eye-fill",variant:"success"}})],1)]),t._v(" "),e("p",{staticClass:"mb-0"},[e("span",[e("b-icon",{staticStyle:{color:"#eb542b"},attrs:{icon:"tag-fill"}})],1),t._v("\n                        237\n                      ")]),t._v(" "),e("div",[e("b-form-rating",{attrs:{id:"rating-inline",inline:"","no-border":"",value:"4"}})],1),t._v(" "),e("div",[e("b-icon",{attrs:{icon:"three-dots-vertical"}})],1)])])])])})),0)])])]):t._e()]),t._v(" "),e("div",[t.isClothing?e("div",{staticClass:"pt-3"},[e("div",{staticClass:"px-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("button",{staticClass:"btn btn-primary my-4",on:{click:function(e){t.isClothing=!1}}},[t._v("Back")]),t._v(" "),e("section",[t._m(11),t._v(" "),t._m(12),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"mt-3 p-3 d-none d-md-block",staticStyle:{background:"#fff"}},[e("h4",{staticClass:"text-orange"},[t._v("Reviews & Ratings")]),t._v(" "),e("div",{staticClass:"mt-4"},t._l(4,(function(l){return e("div",{key:l,staticClass:"d-flex review-card"},[e("div",{staticClass:"mr-3 text-center"},[e("b-img",t._b({attrs:{rounded:"circle","blank-color":"#777",alt:"Transparent image"}},"b-img",{blank:!0,width:30,height:30,class:"m1"},!1))],1),t._v(" "),e("div",{staticClass:"w-100"},[e("div",{staticClass:"d-flex justify-content-between align-items-center flex-md-row flex-column"},[e("p",{staticClass:"mb-0"},[t._v("Ihiechi Okwelle")]),t._v(" "),e("div",[e("b-form-rating",{staticClass:"bg-lighted",attrs:{id:"rating-inline",inline:"","no-border":"",value:"4"}})],1)]),t._v(" "),e("p",[t._v("\n                          Lorem ipsum dolor sit amet, conse ctetur adipiscing\n                          elit. ipsum dolo....\n                        ")])])])})),0)])])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"p-3",staticStyle:{background:"#fff"}},[e("div",{staticClass:"d-none d-md-block"},[e("div",[e("b-form-rating",{staticClass:"bg-lighted",attrs:{id:"rating-inline",inline:"","no-border":"",value:"4"}})],1),t._v(" "),e("h5",[t._v("Summer two piece 2022")]),t._v(" "),e("p",[t._v("\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit\n                    Leo, enim nec urna ullamcorper et amet dictumst. Nibh nisl\n                    dolor, vulputate viverra risus vulputate. Accumsan.\n                  ")])]),t._v(" "),t._m(13),t._v(" "),e("div",{staticClass:"mb-3"},[e("b-form-group",{staticClass:"position-relative",attrs:{label:"Available sizes"},scopedSlots:t._u([{key:"default",fn:function(l){var c=l.ariaDescribedby;return[e("b-form-checkbox-group",{attrs:{id:"checkbox-group-2","aria-describedby":c,name:"flavour-2"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},t._l(t.sizes,(function(l){return e("b-form-checkbox",{key:l,attrs:{value:l}},[e("div",{staticClass:"p-3 border"},[t._v(t._s(l))])])})),1)]}}],null,!1,3498005219)})],1),t._v(" "),e("div",{staticClass:"mb-3"},[e("b-form-checkbox",{attrs:{id:"custom-size",name:"custom-size",value:"dfdf"}},[t._v("\n                    Custom size order available\n                  ")])],1),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),e("div",{staticClass:"mt-3 p-3 d-md-none d-block",staticStyle:{background:"#fff"}},[e("h4",{staticClass:"text-orange"},[t._v("Reviews & Ratings")]),t._v(" "),e("div",{staticClass:"mt-4"},t._l(4,(function(l){return e("div",{key:l,staticClass:"d-flex review-card"},[e("div",{staticClass:"mr-3 text-center"},[e("b-img",t._b({attrs:{rounded:"circle","blank-color":"#777",alt:"Transparent image"}},"b-img",{blank:!0,width:30,height:30,class:"m1"},!1))],1),t._v(" "),e("div",{staticClass:"w-100"},[e("div",{staticClass:"d-flex justify-content-between align-items-center flex-md-row flex-column"},[e("p",{staticClass:"mb-0"},[t._v("Ihiechi Okwelle")]),t._v(" "),e("div",[e("b-form-rating",{staticClass:"bg-lighted",attrs:{id:"rating-inline",inline:"","no-border":"",value:"4"}})],1)]),t._v(" "),e("p",[t._v("\n                          Lorem ipsum dolor sit amet, conse ctetur adipiscing\n                          elit. ipsum dolo....\n                        ")])])])})),0)])])])])])]):t._e()])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-body"},[e("div",{staticClass:"d-flex align-items-center"},[e("img",{staticClass:"mr-3 img-fluid",attrs:{src:"/seller/add.png",alt:""}}),t._v(" "),e("p",{staticClass:"mb-0"},[t._v("Add new item")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-4 col-md-6 mb-3"},[e("div",{staticClass:"card",attrs:{role:"button"}},[e("div",{staticClass:"card-body"},[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("div",{staticClass:"d-flex align-items-center"},[e("img",{staticClass:"mr-3 img-fluid",attrs:{src:"/seller/archive.png",alt:""}}),t._v(" "),e("p",{staticClass:"mb-0"},[t._v("Archived item(s)")])]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("0")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"itemName"}},[t._v("Name of item")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"exampleFormControlInput1",placeholder:"eg.tuxedo"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"exampleFormControlInput1"}},[t._v("Description of item "),e("span",[t._v("*")])]),t._v(" "),e("textarea",{staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"3"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-7"},[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"accesoryName"}},[t._v("Name of accessory")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"accesoryName",placeholder:"eg.tuxedo"}})]),t._v(" "),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"accesoryPrice"}},[t._v("Price of accessory")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"accesoryPrice",placeholder:"0.00"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"price-section"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5 col-6"},[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"accesoryName"}},[t._v("Price for size (L)*")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"accesoryName",placeholder:"eg.tuxedo"}})])]),t._v(" "),e("div",{staticClass:"col-md-5 col-6"},[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"accesoryName"}},[t._v("Discount Percentage")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"accesoryName",placeholder:"eg.tuxedo"}})])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-5 col-6"},[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"accesoryName"}},[t._v("Price for size (L)*")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"accesoryName",placeholder:"eg.tuxedo"}})])]),t._v(" "),e("div",{staticClass:"col-md-5 col-6"},[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"accesoryName"}},[t._v("Discount Percentage")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",id:"accesoryName",placeholder:"eg.tuxedo"}})])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-3"},[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"btn btn-secondary mr-3"},[t._v("save")]),t._v(" "),e("div",{staticClass:"btn btn-secondary"},[t._v("Report a problem")])])])},function(){var t=this._self._c;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6"},[t("div",{staticClass:"mb-3"},[t("input",{staticClass:"form-control",attrs:{type:"search",id:"exampleFormControlInput1",placeholder:"Search keyword"}})])])])},function(){var t=this._self._c;return t("div",{staticClass:"image-box"},[t("img",{attrs:{src:"/seller/item-pic.png",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex align-items-center",staticStyle:{background:"#f4f4f4","border-radius":"4px",padding:"4px 12px"}},[e("p",{staticClass:"mb-0 mr-1",staticStyle:{color:"#68c255","font-size":"8px"}},[t._v("\n                          NGN\n                        ")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("50,000")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"info py-3"},[e("h5",[t._v("Summer two piece 2022")]),t._v(" "),e("p",{staticClass:"mb-0"},[t._v("\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos excepturi voluptates modi consectetur quam at fugiat dignissimos impedit laboriosam, consequatur debitis. Qui, harum ex. Voluptatum quibusdam modi omnis delectus provident.\n                        Lorem ipsum dolor sit amet, conse ctetur adipiscing\n                        elit. ipsum dolo....\n                      ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-md-none d-block"},[e("h5",[t._v("Summer two piece 2022")]),t._v(" "),e("p",[t._v("\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit\n                    Leo, enim nec urna ullamcorper et amet dictumst. Nibh nisl\n                    dolor, vulputate viverra risus vulputate. Accumsan.\n                  ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-6 mb-3"},[e("div",[e("img",{staticClass:"img-fluid",attrs:{src:"/seller/pic-1.png",alt:""}})])]),t._v(" "),e("div",{staticClass:"col-6 mb-3"},[e("div",[e("img",{staticClass:"img-fluid",attrs:{src:"/seller/pic-1.png",alt:""}})])]),t._v(" "),e("div",{staticClass:"col-6 mb-3"},[e("div",[e("img",{staticClass:"img-fluid",attrs:{src:"/seller/pic-1.png",alt:""}})])]),t._v(" "),e("div",{staticClass:"col-6 mb-3"},[e("div",[e("img",{staticClass:"img-fluid",attrs:{src:"/seller/pic-1.png",alt:""}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"my-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"p-3",staticStyle:{background:"#f4f4f4","border-radius":"12px"}},[e("div",{staticClass:"d-flex align-items-center py-2"},[e("p",{staticClass:"mr-2 mb-0 text-orange"},[t._v("NGN")]),t._v(" "),e("h4",{staticClass:"mb-0"},[t._v("5,000")])]),t._v(" "),e("p",[t._v("Available discount 10%")])])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"itemName"}},[t._v("Available shades of material")]),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"assessory-box"},[e("div",{staticClass:"accessories"}),t._v(" "),e("p",{staticClass:"text-center"},[t._v("Blue")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"itemName"}},[t._v("Available accessories")]),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"assessory-box"},[e("div",{staticClass:"accessories"}),t._v(" "),e("p",{staticClass:"text-center"},[t._v("Beads")])]),t._v(" "),e("div",{staticClass:"assessory-box"},[e("div",{staticClass:"accessories"}),t._v(" "),e("p",{staticClass:"text-center"},[t._v("Beads")])])])])}],!1,null,null,null);e.default=component.exports}}]);