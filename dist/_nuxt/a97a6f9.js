(window.webpackJsonp=window.webpackJsonp||[]).push([[35,14],{415:function(t,e,n){var content=n(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("5e2a66ad",content,!0,{sourceMap:!1})},427:function(t,e,n){"use strict";n(415)},428:function(t,e,n){var r=n(56)(!1);r.push([t.i,"\n.rating-holder .progress-box {\r\n  width: 80%;\n}\n@media (max-width: 476px) {\n.rating-holder .progress-box {\r\n    width: 60%;\n}\n}\r\n",""]),t.exports=r},450:function(t,e,n){var content=n(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(57).default)("009d47d4",content,!0,{sourceMap:!1})},470:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{max:100,userRatings:[{star:5,value:100,count:12},{star:4,value:80,count:18},{star:3,value:60,count:11},{star:2,value:40,count:9},{star:1,value:20,count:1}]}}},l=(n(427),n(30)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-section"},[e("client-only",[e("b-tabs",{attrs:{pills:""}},[e("b-tab",{attrs:{title:"DESCRIPTION",active:""}},[e("b-card-text",{staticClass:"mt-4"},[t._v("\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolor\n          distinctio ratione vero dolores blanditiis laborum quibusdam\n          praesentium id, libero tenetur iste aliquid quis illo recusandae\n          fugiat ipsam expedita illum?\n        ")])],1),t._v(" "),e("b-tab",{attrs:{title:"ABOUT DESIGNER"}},[e("b-card-text",{staticClass:"mt-4"},[t._v("\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat\n          omnis consequatur nam ad tempora quaerat amet atque, vel\n          consequuntur enim fugiat! Adipisci iste quam voluptas magni debitis\n          porro ullam deleniti!\n        ")])],1),t._v(" "),e("b-tab",{attrs:{title:"REVIEWS"}},[e("b-card-text",{staticClass:"mt-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"mt-4"},[e("div",{staticClass:"d-flex align-items-center"},[e("h5",{staticClass:"mr-2"},[t._v("25 Reviews")]),t._v(" "),e("b-form-rating",{staticClass:"bg-lighted",attrs:{id:"rating-inline","no-border":"",inline:"",value:"4"}})],1),t._v(" "),e("div",{staticClass:"mt-5"},t._l(t.userRatings,(function(n,r){return e("div",{key:r,staticClass:"d-flex justify-content-between align-items-center rating-holder mb-3"},[e("p",[t._v(t._s(n.star)+" Stars")]),t._v(" "),e("div",{staticClass:"progress-box"},[e("b-progress",{staticClass:"mb-3",attrs:{value:n.value,max:t.max,variant:"dark"}})],1),t._v(" "),e("p",[t._v("("+t._s(n.count)+")")])])})),0)])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"mt-5"},[t._l(4,(function(n){return e("div",{key:n,staticClass:"d-flex review-card"},[e("div",{staticClass:"mr-3 text-center"},[e("b-img",t._b({attrs:{rounded:"circle","blank-color":"#777",alt:"Transparent image"}},"b-img",{blank:!0,width:30,height:30,class:"m1"},!1))],1),t._v(" "),e("div",{staticClass:"w-100"},[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("p",{staticClass:"mb-0"},[t._v("Ihiechi Okwelle")]),t._v(" "),e("div",[e("b-form-rating",{staticClass:"bg-lighted",attrs:{id:"rating-inline",inline:"","no-border":"",value:"4"}})],1)]),t._v(" "),e("p",[t._v("\n                      Lorem ipsum dolor sit amet, conse ctetur adipiscing\n                      elit. ipsum dolo....\n                    ")])])])})),t._v(" "),e("div",{staticClass:"mt-4"},[e("div",{staticClass:"d-flex justify-content-center align-items-center"},[e("div",{staticClass:"btn btn-outline-dark mr-3",staticStyle:{"font-size":"12px",padding:"10px 15px",cursor:"pointer"}},[t._v("\n                      Previous\n                    ")]),t._v(" "),e("div",{staticClass:"btn orange-btn",staticStyle:{"font-size":"12px",padding:"10px 15px",cursor:"pointer"}},[t._v("\n                      Next\n                    ")])])])],2)])])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},494:function(t,e,n){"use strict";n(450)},495:function(t,e,n){var r=n(56)(!1);r.push([t.i,"\n.prod-img {\r\n  object-fit: cover;\r\n  width: 100% !important;\n}\n.option-box {\r\n  width: 80px;\n}\n.size-box {\r\n  padding: 6px 10px;\r\n  border: 1px solid #000;\r\n  margin-bottom: 15px;\r\n  margin-right: 10px;\r\n  cursor: pointer;\n}\n.about-section .nav-pills .nav-link.active {\r\n  background: #000 !important;\r\n  color: white !important;\n}\n.text-underline {\r\n  text-decoration: underline;\r\n  color: #eb3d0e;\n}\n.btn-50 {\r\n  width: 50%;\n}\n@media (max-width: 426px) {\n.btn-50 {\r\n    width: 100%;\n}\n}\r\n",""]),t.exports=r},537:function(t,e,n){"use strict";n.r(e);var r={components:{AboutDesigner:n(470).default},data:function(){return{fabricPatterns:[{id:1,text:"Yellow Stripes",image:"p1"},{id:2,text:"Black and White Pattern",image:"p2"},{id:3,text:"Plain Army Green",image:"p3"}],value:4,accessories:[{id:1,text:"Beads",image:"p1"},{id:2,text:"Beads",image:"p1"},{id:3,text:"Beads",image:"p1"}],sizeVariations:[{id:1,text:"S"},{id:2,text:"M"},{id:3,text:"L"},{id:4,text:"XL"},{id:5,text:"XXL"}],measureNow:!1,isCustomEdit:!1,readyToShip:!0}},methods:{}},l=(n(494),n(30)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("section",[e("div",{staticClass:"container"},[e("div",{staticClass:"my-5"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"pl-md-5"},[e("h3",{staticClass:"mt-3"},[t._v("Styled White dress for men")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("h6",{staticClass:"my-3"},[t._v("Variations:")]),t._v(" "),e("b-form-group",{attrs:{label:"FABRIC COLOR AND PATTERN"},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.ariaDescribedby;return[e("b-form-radio-group",{attrs:{id:"radio-group-1","aria-describedby":r,name:"radio-options"}},t._l(t.fabricPatterns,(function(n){return e("b-form-radio",{key:n.id,attrs:{value:n.id}},[e("div",{staticClass:"option-box"},[e("img",{staticClass:"img-fluid",attrs:{src:"/fabric/fabric-".concat(n.image,".png"),alt:""}}),e("br"),t._v(" "),e("small",[t._v(t._s(n.text))])])])})),1)]}}])}),t._v(" "),e("div",{staticClass:"mt-3"},[e("b-form-group",{attrs:{label:"ACCESSORIES"},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.ariaDescribedby;return[e("b-form-checkbox-group",{attrs:{id:"radio-group-1","aria-describedby":r,name:"radio-options"}},t._l(t.accessories,(function(n){return e("b-form-checkbox",{key:n.id,attrs:{value:n.id}},[e("div",{staticClass:"option-box"},[e("img",{staticClass:"img-fluid",attrs:{src:"/fabric/accessory-1.png",alt:""}}),e("br"),t._v(" "),e("small",[t._v(t._s(n.text))])])])})),1)]}}])})],1),t._v(" "),e("div",{staticClass:"mt-3 mb-5"},[e("small",[e("b-icon",{attrs:{icon:"info-circle"}}),t._v(" Don't know your size?\n                  "),e("span",{staticClass:"text-orange"},[t._v("\n                    Use the measuring chart")])],1)]),t._v(" "),e("div",[e("b-button",{staticClass:"text-uppercase mb-3 btn btn-orange py-3",attrs:{block:""}},[t._v("Check how this looks on you!")]),t._v(" "),e("p",{staticClass:"text-center"},[t._v("How does it work?")]),t._v(" "),e("div",{staticClass:"d-flex my-5 flex-column flex-md-row"},[e("button",{class:"".concat(t.isCustomEdit?"btn-outline-orange-sq text-uppercase btn-50":" btn-filled-orange-sq text-uppercase btn-50 text-center"),on:{click:function(e){t.isCustomEdit=!1}}},[t._v("\n                    READY TO SHIP\n                  ")]),t._v(" "),e("button",{class:"".concat(t.isCustomEdit?" btn-filled-orange-sq text-uppercase btn-50 text-center":"btn-outline-orange-sq text-uppercase btn-50"),on:{click:function(e){t.isCustomEdit=!0}}},[t._v("\n                    CUSTOM EDIT\n                  ")])]),t._v(" "),t.isCustomEdit?e("div",[e("p",[t._v("\n                    To use custom edit, you will be requied to fill in your\n                    measurement in your profile. Do not worry, you will be\n                    required to fill it once, unless you felt a need for\n                    change.\n                  ")]),t._v(" "),e("div",{staticClass:"d-flex justify-content-center"},[e("button",{staticClass:"btn btn-orange",on:{click:function(e){t.measureNow=!0}}},[t._v("\n                      FILL MEASUREMENT NOW\n                    ")])])]):e("div",[e("p",{staticClass:"text-uppercase mb-2"},[t._v("Available Sizes")]),t._v(" "),e("div",{staticClass:"d-flex"},t._l(t.sizeVariations,(function(n){return e("div",{key:n.id,staticClass:"size-box"},[t._v("\n                      "+t._s(n.text)+"\n                    ")])})),0),t._v(" "),e("p",[e("span",{staticClass:"mr-2"},[e("b-icon",{attrs:{icon:"info-circle"}})],1),t._v("\n                    click here for Seller's Measurement Chart\n                  ")]),t._v(" "),e("div",{staticClass:"d-flex my-3"},[e("button",{staticClass:"btn btn-orange mr-2 text-uppercase"},[t._v("\n                      Buy now\n                    ")]),t._v(" "),e("button",{staticClass:"btn btn-outline-black mr-2 text-uppercase"},[t._v("\n                      Add to cart\n                    ")]),t._v(" "),e("button",{staticClass:"btn btn-outline-black"},[e("b-icon",{attrs:{icon:"heart"}})],1)])]),t._v(" "),t.measureNow?e("div",{staticClass:"my-3"},[e("p",{staticClass:"mt-5"},[t._v("\n                    Here are the measurements required for this product:\n                  ")]),t._v(" "),t._m(3),t._v(" "),e("p",{staticClass:"mt-4"},[t._v("\n                    Need to change anything?\n                    "),e("nuxt-link",{staticClass:"text-oranged",attrs:{to:"/"}},[t._v("Click here")])],1),t._v(" "),e("div",{staticClass:"d-flex my-5"},[e("button",{staticClass:"btn btn-orange mr-2 text-uppercase"},[t._v("\n                      Buy now\n                    ")]),t._v(" "),e("button",{staticClass:"btn btn-outline-black mr-2 text-uppercase"},[t._v("\n                      Add to cart\n                    ")]),t._v(" "),e("button",{staticClass:"btn btn-outline-black"},[e("b-icon",{attrs:{icon:"heart"}})],1)]),t._v(" "),t._m(4)]):t._e()],1)],1)])])])])]),t._v(" "),e("section",[e("div",{staticClass:"container"},[e("div",{staticClass:"my-5"},[e("about-designer")],1),t._v(" "),e("div",{staticClass:"mb-5"},[t._m(5),t._v(" "),e("div",{staticClass:"row"},t._l(6,(function(n){return e("div",{key:n,staticClass:"col-md-2"},[e("div",{staticClass:"product-card"},[e("img",{staticClass:"img-fluid",attrs:{src:"/product-image.png",alt:" product"}}),t._v(" "),t._m(6,!0),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"d-flex justify-content-between align-items-between"},[e("b-form-rating",{staticClass:"p-0",attrs:{readonly:"","no-border":"",size:"sm"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",{staticClass:"mr-3"},[e("b-icon",{attrs:{icon:"heart",role:"button"}})],1),t._v(" "),e("div",[e("b-icon",{attrs:{icon:"handbag",role:"button"}})],1)])],1)])])})),0)]),t._v(" "),e("div",{staticClass:"mb-5"},[t._m(7),t._v(" "),e("div",{staticClass:"row"},t._l(4,(function(n){return e("div",{key:n,staticClass:"col-md-3 mb-3"},[e("div",{staticClass:"product-card"},[e("img",{staticClass:"img-fluid prod-img",attrs:{src:"/product-designer.png",alt:" product"}}),t._v(" "),e("div",{staticClass:"d-flex justify-content-between align-items-center px-3 pt-2"},[t._m(8,!0),t._v(" "),e("div",[e("b-icon",{attrs:{icon:"heart"}})],1)]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"d-flex justify-content-between align-items-between px-3"},[e("b-form-rating",{staticClass:"p-0",attrs:{readonly:"","no-border":"",size:"sm"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),e("div",{staticClass:"d-flex"},[e("nuxt-link",{staticClass:"btn btn-primary p-2",staticStyle:{"font-size":"12px"},attrs:{to:"/market/designer/"+n}},[t._v("VIEW STORE")])],1)],1)])])})),0)])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-6"},[e("img",{staticClass:"img-fluid prod-img",attrs:{src:"/product.png",alt:""}}),t._v(" "),e("div",{staticClass:"my-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3 col-3 px-2"},[e("img",{staticClass:"img-fluid prod-img",attrs:{src:"/product.png",alt:""}})]),t._v(" "),e("div",{staticClass:"col-md-3 col-3 px-2"},[e("img",{staticClass:"img-fluid prod-img",attrs:{src:"/product.png",alt:""}})]),t._v(" "),e("div",{staticClass:"col-md-3 col-3 px-2"},[e("img",{staticClass:"img-fluid prod-img",attrs:{src:"/product.png",alt:""}})]),t._v(" "),e("div",{staticClass:"col-md-3 col-3 px-2"},[e("img",{staticClass:"img-fluid prod-img",attrs:{src:"/product.png",alt:""}})])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex align-items-center"},[e("h3",{staticClass:"mr-3"},[t._v("CAD $250")]),t._v(" "),e("h6",[e("del",[t._v("CAD $450")])])])},function(){var t=this,e=t._self._c;return e("h6",[t._v("\n                Made by:\n                "),e("span",{staticClass:"text-orange text-underline"},[t._v("Tomilola")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"d-flex justify-content-between"},[e("p",[t._v("Bust:")]),t._v(" "),e("p",[t._v("23")])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between"},[e("p",[t._v("Arm Length:")]),t._v(" "),e("p",[t._v("23")])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between"},[e("p",[t._v("Sleeve:")]),t._v(" "),e("p",[t._v("23")])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between"},[e("p",[t._v("Bust:")]),t._v(" "),e("p",[t._v("23")])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between"},[e("p",[t._v("Bust:")]),t._v(" "),e("p",[t._v("23")])])]),t._v(" "),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"d-flex justify-content-between"},[e("p",[t._v("Bust:")]),t._v(" "),e("p",[t._v("23")])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between"},[e("p",[t._v("Bust:")]),t._v(" "),e("p",[t._v("23")])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between"},[e("p",[t._v("Bust:")]),t._v(" "),e("p",[t._v("23")])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between"},[e("p",[t._v("Bust:")]),t._v(" "),e("p",[t._v("23")])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between"},[e("p",[t._v("Bust:")]),t._v(" "),e("p",[t._v("23")])])])])},function(){var t=this,e=t._self._c;return e("p",[t._v("\n                    Have a special request? Contact\n                    "),e("span",{staticClass:"text-orange text-underline"},[t._v("\n                      the designer")])])},function(){var t=this,e=t._self._c;return e("h3",{staticClass:"text-uppercase mb-5"},[t._v("\n          More from "),e("span",{staticClass:"text-orange"},[t._v("Tomilola Stitches")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex justify-content-between align-items-between pt-2"},[e("p",{staticClass:"mb-0"},[t._v("Ankara Jesu")]),t._v(" "),e("p",{staticClass:"mb-0"},[t._v("CAD $200")])])},function(){var t=this,e=t._self._c;return e("h3",{staticClass:"text-uppercase mb-5"},[t._v("\n          More from "),e("span",{staticClass:"text-orange"},[t._v("Men Clothing")])])},function(){var t=this,e=t._self._c;return e("div",[e("h4",[t._v("Ngozi Odunayo")]),t._v(" "),e("p",{staticClass:"mb-0"},[t._v("Port Harcourt, Nigeria")])])}],!1,null,null,null);e.default=component.exports}}]);