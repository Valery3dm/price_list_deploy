(this["webpackJsonpprice-list"]=this["webpackJsonpprice-list"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n(1),r=n.n(a),u=n(8),s=n.n(u),c=(n(15),n(2)),l=n(9),o=n(3),h=n(4),d=n(6),j=n(5),b=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){return Object(o.a)(this,n),e.call(this,t)}return Object(h.a)(n,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"Price"}),Object(i.jsx)("button",{onClick:this.props.updateParent,children:"+"})]})}}]),n}(a.Component);function m(t){var e=t.state.listToBuy.map((function(e){return e.status?e.status?Object(i.jsxs)("li",{children:[Object(i.jsx)("span",{children:e.value}),Object(i.jsx)("span",{children:e.valuePrice}),Object(i.jsx)("button",{onClick:function(){return t.editItem(e.id)},children:"Edit"}),Object(i.jsx)("button",{onClick:function(){return t.deleteItem(e.id)},children:"Delete"})]},e.id):void 0:Object(i.jsxs)("li",{children:[Object(i.jsx)("input",{type:"text",placeholder:e.name,onChange:function(n){return t.onChangeValueName(n.target.value,e.id)},value:e.value}),Object(i.jsx)("input",{type:"number",placeholder:e.price,onChange:function(n){return t.onChangeValuePrice(n.target.value,e.id)},value:e.valuePrice}),Object(i.jsx)("button",{onClick:function(){return t.confirmItem(e.id)},children:"Confirm"}),Object(i.jsx)("button",{onClick:function(){return t.deleteItem(e.id)},children:"Delete"})]},e.id)}));return Object(i.jsx)("div",{children:Object(i.jsx)("ul",{children:e})})}function f(t){return Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"Total"}),Object(i.jsx)("span",{children:t.state.totalSum})]})}var v=function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).maxId=0,i.state={listToBuy:[i.createNewItem("")],totalSum:0},i}return Object(h.a)(n,[{key:"createNewItem",value:function(t){return{price:"price",name:"new item",value:t,valuePrice:"",id:++this.maxId,status:!1}}},{key:"updateState",value:function(){var t={price:"price",name:"new item",value:"",valuePrice:"",id:this.getItemId(this.state.listToBuy),status:!1},e=this.state.listToBuy,n=[].concat(Object(l.a)(e),[t]);return this.setState({listToBuy:n})}},{key:"getItemId",value:function(t){return 0===t.length?this.maxId:t[t.length-1].id+1}},{key:"onChangeValueName",value:function(t,e){var n=this.state.listToBuy,i=this.state.listToBuy.filter((function(t){return t.id===e}))[0];return i.value=t,this.setState(Object(c.a)(Object(c.a)({},n),i))}},{key:"onChangeValuePrice",value:function(t,e){var n=this.state.listToBuy,i=this.state.listToBuy.filter((function(t){return t.id===e}))[0];i.valuePrice=t;var a=this.state.listToBuy.map((function(t){return t.valuePrice})).reduce((function(t,e){return Number(t)+Number(e)}));return this.setState(Object(c.a)(Object(c.a)(Object(c.a)({},n),i),{},{totalSum:a}))}},{key:"confirmItem",value:function(t){var e=this.state.listToBuy,n=e.filter((function(e){return e.id===t}))[0];return n.status=!0,this.setState(Object(c.a)(Object(c.a)({},e),n))}},{key:"editItem",value:function(t){var e=this.state.listToBuy,n=e.filter((function(e){return e.id===t}))[0];return n.status=!1,this.setState(Object(c.a)(Object(c.a)({},e),n))}},{key:"deleteItem",value:function(t){var e=this.state.totalSum,n=this.state.listToBuy.filter((function(e){return e.id===t}))[0],i=this.state.listToBuy.filter((function(e){return e.id!==t})),a=e-Number(n.valuePrice);return this.setState({listToBuy:i,totalSum:a})}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(b,{updateParent:this.updateState.bind(this)}),Object(i.jsx)(m,{state:this.state,confirmItem:this.confirmItem.bind(this),deleteItem:this.deleteItem.bind(this),onChangeValueName:this.onChangeValueName.bind(this),onChangeValuePrice:this.onChangeValuePrice.bind(this),editItem:this.editItem.bind(this)}),Object(i.jsx)(f,{state:this.state})]})}}]),n}(a.Component);s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.aef953b4.chunk.js.map