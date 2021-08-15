(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{42:function(n,t,e){},87:function(n,t,e){"use strict";e.r(t);var r={};e.r(r),e.d(r,"fetchContacts",(function(){return z})),e.d(r,"fetchAddContact",(function(){return A})),e.d(r,"fetchDeleteContact",(function(){return D}));var a={};e.r(a),e.d(a,"getItems",(function(){return L})),e.d(a,"getFilter",(function(){return N})),e.d(a,"getContactsArr",(function(){return F}));var c=e(1),o=e.n(c),i=e(18),s=e.n(i),u=(e(42),e(9)),b=e(7),l=e.n(b),d=e(12),p=e(11),f=e(17),j=e.n(f);j.a.defaults.baseURL="http://localhost:3004";var x,m,O,h,g,v,w,y=function(){var n=Object(d.a)(l.a.mark((function n(){var t,e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.a.get("/contacts");case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),C=function(){var n=Object(d.a)(l.a.mark((function n(t){var e,r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.a.post("/contacts",t);case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),k=function(){var n=Object(d.a)(l.a.mark((function n(t){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.a.delete("/contacts/".concat(t));case 2:return n.abrupt("return",t);case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),z=Object(p.b)("contacts/fetchContacts",Object(d.a)(l.a.mark((function n(){var t;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y();case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))),A=Object(p.b)("contacts/addContact",function(){var n=Object(d.a)(l.a.mark((function n(t){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C(t);case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()),D=Object(p.b)("contacts/deleteContact",function(){var n=Object(d.a)(l.a.mark((function n(t){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k(t);case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()),I=e(13),L=function(n){return n.contacts.items},N=function(n){return n.contacts.filter},F=Object(I.a)([L,N],(function(n,t){return n.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())||n.number.includes(t)}))})),S=e(4),E=e(5),J=E.a.div(x||(x=Object(S.a)(["\n  margin-top: 20px;\n  margin-left: 20px;\n  padding: 20px;\n  width: 420px;\n  background: #f2f2f0;\n  border: 4px double #1b3c59;\n  border-radius: 36px;\n  box-shadow: 4px 3px 20px rgba(27, 60, 89, 0.2);\n"]))),T=E.a.h1(m||(m=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 0px;\n  margin-bottom: 25px;\n  font-size: 40px;\n  color: #456173;\n"]))),Z=E.a.h2(O||(O=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 0px;\n  margin-bottom: 25px;\n  font-size: 30px;\n  color: #456173;\n"]))),q=e(35),B=e(20),M=e(21),R=e(24),P=E.a.form(h||(h=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 25px;\n  padding: 10px;\n  border: 2px dashed #456173;\n"]))),U=E.a.input(g||(g=Object(S.a)(["\n  position: absolute;\n  top: 30px;\n  left: 0px;\n  min-width: 200px;\n  height: 20px;\n  padding: 4px 10px;\n  border: 2px solid #1b3c59;\n  border-radius: 2px;\n  transition: border 250ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    border: 2px solid #11bfae;\n  }\n"]))),$=E.a.label(v||(v=Object(S.a)(["\n  position: relative;\n  margin-bottom: 42px;\n  color: #1b3c59;\n  font-size: 20px;\n"]))),G=E.a.button(w||(w=Object(S.a)(["\n  margin-top: 20px;\n  margin-bottom: 10px;\n  padding: 6px 8px;\n  width: 130px;\n\n  font-size: 18px;\n  font-weight: 700;\n  color: #f2f2f0;\n  background-color: #11bfae;\n  border-radius: 4px;\n  border: transparent;\n  cursor: pointer;\n  transition: all 250ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    color: #11bfae;\n    background-color: #456173;\n  }\n"]))),H=e(33),K=e(2);var Q,V,W,X=function(){var n=Object(c.useState)(""),t=Object(R.a)(n,2),e=t[0],o=t[1],i=Object(c.useState)(""),s=Object(R.a)(i,2),b=s[0],l=s[1],d=Object(u.c)(a.getItems),p=Object(u.b)(),f=function(n){var t=n.currentTarget,e=t.name,r=t.value;switch(e){case"name":return o(r);case"number":return l(r);default:throw new Error("there is no such name as ".concat(e))}},j=function(){o(""),l("")},x=function(n){Object(M.b)("".concat(n," is already in contacts"),{style:{color:"#456173"},icon:Object(K.jsx)(H.a,{})})};return Object(K.jsxs)(P,{onSubmit:function(n){n.preventDefault();var t=e.toLowerCase(),a=d.find((function(n){return n.name.toLowerCase()===t})),c=d.find((function(n){return n.number===b}));return a?(x(e),void j()):c?(x(b),void j()):(p(r.fetchAddContact({name:e,number:b})),void j())},children:[Object(K.jsxs)($,{children:["Name",Object(K.jsx)(U,{onChange:f,type:"text",name:"name",autoComplete:"off",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(K.jsxs)($,{children:["Number",Object(K.jsx)(U,{onChange:f,type:"tel",name:"number",autoComplete:"off",value:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(K.jsx)(G,{type:"submit",children:"Add contact"})]})},Y=e(10),_=e(36),nn="Loading",tn="Error",en=Object(p.c)({name:"contacts",initialState:{items:[],filter:"",status:null,error:null},reducers:{changeFilter:function(n,t){n.filter=t.payload}},extraReducers:(Q={},Object(Y.a)(Q,z.fulfilled,(function(n,t){n.items=t.payload,n.status=null,n.error=null})),Object(Y.a)(Q,z.pending,(function(n,t){n.status=nn,n.error=null})),Object(Y.a)(Q,z.rejected,(function(n,t){n.status=null,n.error=tn})),Object(Y.a)(Q,A.fulfilled,(function(n,t){n.items=[].concat(Object(_.a)(n.items),[t.payload]),n.status=null,n.error=null})),Object(Y.a)(Q,A.pending,(function(n,t){n.status=nn,n.error=null})),Object(Y.a)(Q,A.rejected,(function(n,t){n.status=null,n.error=tn})),Object(Y.a)(Q,D.fulfilled,(function(n,t){n.items=n.items.filter((function(n){return n.id!==t.payload})),n.status=null,n.error=null})),Object(Y.a)(Q,D.pending,(function(n,t){n.status=nn,n.error=null})),Object(Y.a)(Q,D.rejected,(function(n,t){n.status=null,n.error=tn})),Q)}),rn=en.actions.changeFilter,an=en.reducer,cn=E.a.input(V||(V=Object(S.a)(["\n  position: absolute;\n  top: 30px;\n  left: 0px;\n  min-width: 200px;\n  height: 20px;\n  padding: 4px 10px;\n  border: 2px solid #1b3c59;\n  border-radius: 2px;\n  transition: border 250ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    border: 2px solid #11bfae;\n  }\n"]))),on=E.a.label(W||(W=Object(S.a)(["\n  position: relative;\n  margin-bottom: 50px;\n  color: #1b3c59;\n  font-size: 20px;\n"])));var sn,un,bn,ln,dn=function(){var n=Object(u.b)();return Object(K.jsxs)(on,{children:["Find contacts by name:",Object(K.jsx)(cn,{onChange:function(t){return n(rn(t.target.value))},type:"text",name:"filter"})]})},pn=E.a.ul(sn||(sn=Object(S.a)(["\n  margin: 0;\n  margin-top: 56px;\n  padding: 0;\n  list-style: none;\n"]))),fn=E.a.li(un||(un=Object(S.a)(["\n  display: flex;\n  align-items: center;\n\n  margin-bottom: 4px;\n  color: #1b3c59;\n  font-size: 18px;\n"]))),jn=E.a.button(bn||(bn=Object(S.a)(["\n  margin-left: auto;\n  padding: 8px 16px;\n\n  font-size: 14px;\n  font-weight: 700;\n  color: #f2f2f0;\n  background-color: #1b3c59;\n  border-radius: 4px;\n  border: transparent;\n  cursor: pointer;\n  transition: all 250ms ease-in-out;\n\n  &:hover,\n  &:focus {\n    background-color: #456173;\n  }\n"]))),xn=E.a.span(ln||(ln=Object(S.a)(["\n  margin-right: 20px;\n"])));var mn=function(n){var t=n.contactId,e=n.contactName,r=n.contactNumber,a=n.onDelete;return Object(K.jsxs)(fn,{children:[Object(K.jsx)(xn,{children:Object(K.jsx)(B.a,{})}),"".concat(e,": ").concat(r),Object(K.jsx)(jn,{type:"button",onClick:function(){a(t)},children:"Delete"})]})};var On=function(){var n=Object(u.c)(a.getContactsArr),t=Object(u.b)();return Object(K.jsx)(pn,{children:n.map((function(n){var e=n.id,a=n.name,c=n.number;return Object(K.jsx)(mn,{contactId:e,contactName:a,contactNumber:c,onDelete:function(){return t(r.fetchDeleteContact(e))}},e)}))})},hn=e(34),gn=e.n(hn);function vn(){return Object(K.jsx)(gn.a,{type:"ThreeDots",color:"#456173",height:100,width:100,timeout:1e3})}var wn=function(){var n=Object(u.c)(a.getItems),t=Object(u.b)();return Object(c.useEffect)((function(){t(r.fetchContacts())}),[t]),Object(K.jsxs)(J,{children:[Object(K.jsxs)(T,{children:[Object(K.jsx)(q.a,{})," Phonebook"]}),Object(K.jsx)(X,{}),n.length>0?Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)(Z,{children:[Object(K.jsx)(B.b,{}),"Contacts"]}),Object(K.jsx)(dn,{}),Object(K.jsx)(On,{})]}):Object(K.jsx)(vn,{}),Object(K.jsx)(M.a,{})]})},yn=(e(85),[e(15).a]);var Cn=Object(p.a)({reducer:{contacts:an},devTools:!1,middleware:yn});s.a.render(Object(K.jsx)(o.a.StrictMode,{children:Object(K.jsx)(u.a,{store:Cn,children:Object(K.jsx)(wn,{})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.1ff8ea48.chunk.js.map