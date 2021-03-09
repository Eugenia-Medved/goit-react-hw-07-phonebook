(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{106:function(t,e,n){"use strict";n.r(e);var c,r,a,o=n(1),i=n(0),u=n.n(i),s=n(9),b=n.n(s),l=n(10),j=n(21),f=n(3),d=n(41),h=n.n(d),O=n(4),m=n(8),p=Object(f.b)("todos/addContactsRequest"),g=Object(f.b)("todos/addContactsSuccess"),C=Object(f.b)("todos/addContactsError"),x=Object(f.b)("todos/fetchContactsRequest"),v=Object(f.b)("todos/fetchContactsSuccess"),_=Object(f.b)("todos/fetchContactsError"),y=Object(f.b)("todos/deleteContactsRequest"),N=Object(f.b)("todos/deleteContactsSuccess"),F=Object(f.b)("todos/deleteContactsError"),k=Object(f.b)("todos/clearError"),S=Object(f.b)("contacts/filter"),w=Object(f.c)([],(c={},Object(O.a)(c,v,(function(t,e){return e.payload})),Object(O.a)(c,g,(function(t,e){return[e.payload].concat(Object(j.a)(t))})),Object(O.a)(c,N,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),c)),L=Object(f.c)(!1,(r={},Object(O.a)(r,p,(function(){return!0})),Object(O.a)(r,g,(function(){return!1})),Object(O.a)(r,C,(function(){return!1})),Object(O.a)(r,x,(function(){return!0})),Object(O.a)(r,v,(function(){return!1})),Object(O.a)(r,_,(function(){return!1})),Object(O.a)(r,y,(function(){return!0})),Object(O.a)(r,N,(function(){return!1})),Object(O.a)(r,F,(function(){return!1})),r)),E=Object(f.c)("",Object(O.a)({},S,(function(t,e){return e.payload}))),D=Object(f.c)(null,(a={},Object(O.a)(a,C,(function(t,e){return e.payload})),Object(O.a)(a,_,(function(t,e){return e.payload})),Object(O.a)(a,F,(function(t,e){return e.payload})),Object(O.a)(a,k,(function(){return null})),a)),R=Object(m.c)({contacts:w,filter:E,loading:L,error:D}),T=[].concat(Object(j.a)(Object(f.d)({serializableCheck:{}})),[h.a]),A=Object(f.a)({reducer:R,middleware:T,devTools:!1}),P=(n(57),n(19)),B=n(20),q=n(23),J=n(22),V=n(107),z=n(14),I=(n(58),n(42)),M=n.n(I),U=(n(77),n(78),n(29)),W=n.n(U),Y=n(43),G=n(15),X=n.n(G);X.a.defaults.baseURL="http://localhost:4040";var H={fetchContacts:function(){return function(){var t=Object(Y.a)(W.a.mark((function t(e){return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(x()),X.a.get("/contacts").then((function(t){var n=t.data;return e(v(n))})).catch((function(t){return e(_(t.massage))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t,e){return function(n){var c={name:t,number:e};n(p()),X.a.post("/contacts",c).then((function(t){var e=t.data;return n(g(e))})).catch((function(t){return n(C(t.massage))}))}},deleteContacts:function(t){return function(e){e(y()),console.log(t),X.a.delete("/contacts/".concat(t)).then((function(){return e(N(t))})).catch((function(t){return e(F(t.massage))}))}}},K=n(18),Q=function(t){return t.contacts},Z=function(t){return t.filter},$={getLoading:function(t){return t.loading},getError:function(t){return t.error},getContacts:Q,getFilter:Z,getVisibleContacts:Object(K.a)([Q,Z],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},tt=n(30),et=n.n(tt);function nt(t){var e=t.title,n=t.children;return Object(o.jsxs)("div",{className:et.a.container,children:[e&&Object(o.jsx)("h2",{className:et.a.title,children:e}),n]})}nt.defaultProps={title:" "};var ct=nt,rt=n(13),at=n.n(rt),ot=n(16),it=n.n(ot),ut=function(t){Object(q.a)(n,t);var e=Object(J.a)(n);function n(){var t;Object(P.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChangeName=function(e){t.setState({name:e.currentTarget.value})},t.handleChangeNumber=function(e){t.setState({number:e.currentTarget.value})},t.handleSubmit=function(e){e.preventDefault();var n=t.state,c=n.name,r=n.number;if(t.props.contacts.find((function(t){return t.name===c})))return console.log(c),void z.b.error("".concat(c," is already in contacts!!!"));t.props.onSubmit(c,r),t.setState({name:"",number:""})},t}return Object(B.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,c=at.a.generate(),r=at.a.generate();return Object(o.jsxs)("form",{className:it.a.form,onSubmit:this.handleSubmit,children:[Object(o.jsx)("label",{for:c,children:" Name "}),Object(o.jsx)("input",{className:it.a.input,id:c,type:"text",value:e,onChange:this.handleChangeName}),Object(o.jsx)("label",{for:r,children:" Number "}),Object(o.jsx)("input",{className:it.a.input,id:r,type:"text",value:n,onChange:this.handleChangeNumber}),Object(o.jsx)("button",{className:it.a.button,type:"submit",children:"Add contact"})]})}}]),n}(i.Component),st=Object(l.b)((function(t){return{contacts:$.getContacts(t)}}),(function(t){return{fetchContacts:function(){return t(H.fetchContacts())},onSubmit:function(e,n){return t(H.addContact(e,n))}}}))(ut),bt=n(44),lt=n.n(bt);var jt=Object(l.b)((function(t){return{value:$.getFilter(t)}}),(function(t){return{onChange:function(e){return t(S(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange,c=at.a.generate();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("label",{for:c,children:"Find contacts by name"}),Object(o.jsx)("input",{className:lt.a.input,id:c,type:"text",value:e,onChange:n})]})})),ft=n(108),dt=n(24),ht=n.n(dt),Ot=n(45),mt=n.n(Ot);var pt=Object(l.b)((function(t){return{items:$.getVisibleContacts(t)}}),(function(t){return{onDeleteNumber:function(e){return t(H.deleteContacts(e))}}}))((function(t){var e=t.items,n=t.onDeleteNumber;return Object(o.jsx)(ft.a,{component:"ol",className:ht.a.list,children:e.map((function(t){return Object(o.jsx)(V.a,{timeout:250,classNames:mt.a,children:Object(o.jsxs)("li",{className:ht.a.item,children:[Object(o.jsxs)("span",{children:[t.name,":",t.number]}),Object(o.jsx)("button",{className:ht.a.button,type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)},t.id)}))})})),gt=function(t){Object(q.a)(n,t);var e=Object(J.a)(n);function n(){return Object(P.a)(this,n),e.apply(this,arguments)}return Object(B.a)(n,[{key:"componentDidUpdate",value:function(){null!==this.props.error&&(z.b.error("No Network"),setTimeout(this.props.clearError(),500))}},{key:"render",value:function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(ct,{children:[Object(o.jsx)(V.a,{in:!0,appear:!0,timeout:250,classNames:"Logo",unmountOnExit:!0,children:Object(o.jsx)("h1",{children:"Phonebook"})}),Object(o.jsx)(st,{})]}),Object(o.jsxs)(ct,{title:"Contacts",children:[Object(o.jsx)(jt,{}),this.props.loading&&Object(o.jsx)(M.a,{type:"Rings",color:"#00BFFF",height:200,width:200}),Object(o.jsx)(pt,{})]}),Object(o.jsx)(z.a,{position:"top-right"})]})}}]),n}(i.Component),Ct=Object(l.b)((function(t){return{loading:$.getLoading(t),error:$.getError(t)}}),(function(t){return{clearError:function(){return t(k())}}}))(gt),xt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,109)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),a(t),o(t)}))};b.a.render(Object(o.jsx)(u.a.StrictMode,{children:Object(o.jsx)(l.a,{store:A,children:Object(o.jsx)(Ct,{})})}),document.getElementById("root")),xt()},16:function(t,e,n){t.exports={form:"ContactForm_form__2sgPu",input:"ContactForm_input__1RL78",button:"ContactForm_button__3GVvo"}},24:function(t,e,n){t.exports={list:"ContactList_list__1hbaE",item:"ContactList_item__1BtTa",button:"ContactList_button__jRdWn"}},30:function(t,e,n){t.exports={container:"Container_container__2Wi_k",title:"Container_title__2jF1n"}},44:function(t,e,n){t.exports={input:"Filter_input__3rjXm"}},45:function(t,e,n){t.exports={enter:"fade_enter__iYlb4",enterActive:"fade_enterActive__20hFB",exit:"fade_exit__3tzqY",exitActive:"fade_exitActive__1piPJ"}},57:function(t,e,n){},78:function(t,e,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.75708819.chunk.js.map