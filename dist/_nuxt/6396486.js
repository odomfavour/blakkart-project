(window.webpackJsonp=window.webpackJsonp||[]).push([[17,7],{420:function(t,e,r){"use strict";r.r(e);r(38);var n={name:"Orders",props:{order:{type:Object}}},o=r(51),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"my-5"},[e("div",{staticClass:"d-flex justify-content-between align-items-center flex-md-row flex-column"},[e("div",{staticClass:"transaction-stage",class:"processing"===t.order.stage?"green":"cancelled"===t.order.stage?"red":"completed"===t.order.stage?"blue":"yellow"},[e("p",{staticClass:"mb-0"},[t._v(t._s(t.order.stage))])]),t._v(" "),e("p",[t._v("Ordered on "),e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.order.date))])])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"item-showbox p-3"},[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("div",{staticClass:"d-flex align-items-center product-flash"},[t._m(0),t._v(" "),e("div",{staticClass:"product-info"},[e("p",{staticClass:"mb-0"},[t._v(t._s(t.order.name))]),t._v(" "),t._m(1)])]),t._v(" "),e("div",[e("div",{staticClass:"order-number mb-2"},[e("p",[e("span",[t._v("Order №:")]),t._v(" "),e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.order.order_number))])])]),t._v(" "),e("nuxt-link",{staticClass:"btn orange-btn",attrs:{to:"/profile/orders/".concat(t.order.order_number)}},[t._v("Details")])],1)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"image-box mr-3"},[t("img",{staticClass:"img-fluid",attrs:{src:"/product.png",alt:""}})])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"mb-0"},[t._v("CAD $ 450 "),e("small",[t._v("(Shipping Inc.)")])])}],!1,null,null,null);e.default=component.exports},445:function(t,e,r){"use strict";r.r(e);r(11),r(9);var n={name:"orders-tab",layout:"profile",data:function(){return{orders:[{stage:"processing",name:"V-Styled White Dress for Man",image:"product",order_number:"11-2355FG",date:"1 Jan"},{stage:"in transit",name:"Gucchi Bags",image:"product",order_number:"11-2390FL",date:"31 May"},{stage:"completed",name:"Senator for Man",image:"product",order_number:"11-2345MD",date:"29 Aug"},{stage:"cancelled",name:"Turtle neck polo",image:"product",order_number:"11-2885OI",date:"1 Jun"},{stage:"processing",name:"Tuxedo Suits",image:"product",order_number:"11-2099UG",date:"22 Nov"},{stage:"completed",name:"Blue Tuxedo",image:"product",order_number:"11-2300PO",date:"14 Apr"}]}},components:{Orders:r(420).default},computed:{processingOrders:function(){return this.orders.filter((function(t){return"processing"===t.stage}))},completedOrders:function(){return this.orders.filter((function(t){return"completed"===t.stage}))}}},o=r(51),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"orders-tab"},[e("div",{staticClass:"container"},[e("client-only",[e("b-tabs",{attrs:{pills:""}},[e("b-tab",{attrs:{title:"Tab 1",active:""},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n            All\n            "),e("span",{staticClass:"number-sac ml-3"},[t._v(t._s(t.orders.length))])]},proxy:!0}])},[t._v(" "),e("b-card-text",t._l(t.orders,(function(t,r){return e("Orders",{key:r,attrs:{order:t}})})),1)],1),t._v(" "),e("b-tab",{attrs:{title:"Tab 2"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n            Processing\n            "),e("span",{staticClass:"number-sac ml-3"},[t._v(t._s(t.processingOrders.length))])]},proxy:!0}])},[t._v(" "),e("b-card-text",t._l(t.processingOrders,(function(t,r){return e("Orders",{key:r,attrs:{order:t}})})),1)],1),t._v(" "),e("b-tab",{attrs:{title:"Tab 2"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n            Shipped\n            "),e("span",{staticClass:"number-sac ml-3"},[t._v("1")])]},proxy:!0}])},[t._v(" "),e("b-card-text",[t._v("Tab contents 2")])],1),t._v(" "),e("b-tab",{attrs:{title:"Tab 2"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n            Completed\n            "),e("span",{staticClass:"number-sac ml-3"},[t._v(t._s(t.completedOrders.length))])]},proxy:!0}])},[t._v(" "),e("b-card-text",t._l(t.completedOrders,(function(t,r){return e("Orders",{key:r,attrs:{order:t}})})),1)],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);