(this.webpackJsonpnms=this.webpackJsonpnms||[]).push([[0],{13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(6),c=a.n(l),s=(a(13),a(2)),o=a.n(s),i=a(4),m=a(1);function d(e){return u.apply(this,arguments)}function u(){return(u=Object(i.a)(o.a.mark((function e({username:t,password:a}){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((e,r)=>{setTimeout(()=>{"admin"===t&&"admin"===a?e():r()},1e3)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=a(3),E=e=>{var t={id:null,title:"",description:""},a=Object(r.useState)(t),l=Object(m.a)(a,2),c=l[0],s=l[1],o=e=>{var t=e.target,a=t.name,r=t.value;s(Object(p.a)(Object(p.a)({},c),{},{[a]:r}))};return n.a.createElement("div",{className:"col-md-12  "},n.a.createElement("div",{className:" row-md-6  float-right "},n.a.createElement("button",{onClick:()=>{s(t)},className:"btn btn-outline-secondary "},"+ Add Note")),n.a.createElement("div",{className:" pt-10 row-md-6  "},n.a.createElement("form",{onSubmit:a=>{a.preventDefault(),c.title&&c.description&&(e.addNote(c),s(t))}},n.a.createElement("label",null,"Title"),n.a.createElement("input",{type:"text",required:!0,name:"title",value:c.title,onChange:o}),n.a.createElement("label",null,"Body"),n.a.createElement("textarea",{rows:"10",required:!0,type:"text",name:"description",value:c.description,onChange:o}),n.a.createElement("button",{className:"col-md-3 btn btn-primary float-right"},"Save"))))},v=e=>{var t=Object(r.useState)(e.currentNote),a=Object(m.a)(t,2),l=a[0],c=a[1];Object(r.useEffect)(()=>{c(e.currentNote)},[e]);var s=e=>{var t=e.target,a=t.name,r=t.value;c(Object(p.a)(Object(p.a)({},l),{},{[a]:r}))};return n.a.createElement("div",{className:"col-md-12  "},n.a.createElement("div",{className:" row-md-12 float-right "},n.a.createElement("button",{onClick:()=>e.setEditing(!1),className:"btn btn-outline-secondary "},"+ Add Note")),n.a.createElement("div",{className:"row-md-12 "},n.a.createElement("form",{onSubmit:t=>{t.preventDefault(),e.updateNote(l.id,l)}},n.a.createElement("label",null,"Title"),n.a.createElement("input",{type:"text",required:!0,name:"title",value:l.title,onChange:s}),n.a.createElement("label",null,"Body"),n.a.createElement("textarea",{rows:"10",required:!0,type:"text",name:"description",value:l.description,onChange:s}),n.a.createElement("div",{className:"row-md-12"},n.a.createElement("button",{className:" col-md-3 btn btn-primary float-right"},"Save")))))},b=e=>n.a.createElement("div",{className:"row "},n.a.createElement("div",{className:"col-md-12 "},e.notes.length>0?e.notes.map(t=>n.a.createElement("div",{className:"row  border ",key:t.id,onClick:()=>{e.editRow(t)}},n.a.createElement("div",{className:"col-md-10 table "},n.a.createElement("div",null,n.a.createElement("b",null,t.title)),n.a.createElement("div",null,t.description)),n.a.createElement("div",{className:"col-md-2"},n.a.createElement("button",{onClick:a=>{a.stopPropagation(),e.deleteNote(t.id)},className:"btn bg-transparent text-secondary"},"X")))):n.a.createElement("div",null,n.a.createElement("div",{className:"row  border "},"No notes")))),g=()=>{var e=Object(r.useState)([{id:1,title:"Tania",description:"floppydiskette"},{id:2,title:"Craig",description:"siliconeidolon"},{id:3,title:"Ben",description:"benisphere"}]),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(r.useState)({id:null,title:"",description:""}),s=Object(m.a)(c,2),o=s[0],i=s[1],d=Object(r.useState)(!1),u=Object(m.a)(d,2),p=u[0],g=u[1];return n.a.createElement("div",{className:"col-md-12  m-2"},n.a.createElement("div",{className:"row bg-light border"},n.a.createElement("h3",{className:"text-secondary col-md-12"},"G Notes")," "),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"flex-large"},n.a.createElement(b,{notes:a,editRow:e=>{g(!0),i({id:e.id,title:e.title,description:e.description})},deleteNote:e=>{g(!1),l(a.filter(t=>t.id!==e))}})),n.a.createElement("div",{className:"flex-large"},p?n.a.createElement(r.Fragment,null,n.a.createElement(v,{editing:p,setEditing:g,currentNote:o,updateNote:(e,t)=>{g(!1),l(a.map(a=>a.id===e?t:a))}})):n.a.createElement(r.Fragment,null,n.a.createElement(E,{addNote:e=>{e.id=a.length+1,l([...a,e])}})))))},N=a(7);var f={username:"",password:"",isLoading:!1,error:"",isLoggedIn:!1},w=Object(N.a)((function(e,t){switch(t.type){case"field":return void(e[t.fieldName]=t.payload);case"login":return e.error="",void(e.isLoading=!0);case"success":return e.isLoggedIn=!0,e.isLoading=!1,void(e.password="");case"error":return e.error="Incorrect username or password!",e.isLoggedIn=!1,e.isLoading=!1,e.username="",void(e.password="");case"logOut":return e.isLoggedIn=!1,e.username="",void(e.password="");default:return}}));function y(){var e=Object(r.useReducer)(w,f),t=Object(m.a)(e,2),a=t[0],l=t[1],c=a.username,s=a.password,u=a.isLoading,p=a.error,E=a.isLoggedIn,v=function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),l({type:"login"}),e.prev=2,e.next=5,d({username:c,password:s});case 5:l({type:"success"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),l({type:"error"});case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row justify-content-md-center"},E?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row max m-2"},n.a.createElement("div",{className:"col-md-6"}," ",n.a.createElement("h1",null,"Welcome ",c,"!")),n.a.createElement("div",{className:"col-md-6 mt-10"},n.a.createElement("h1",null,n.a.createElement("button",{className:"btn btn-danger float-right",onClick:()=>l({type:"logOut"})},"Log Out"))),n.a.createElement(g,null))):n.a.createElement("form",{className:"col-md-6 mt-5",onSubmit:v},n.a.createElement("div",{className:"form-group text-center "},p&&n.a.createElement("p",{className:"error"},p),n.a.createElement("p",null,"Please Login!")),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{className:"form-control",type:"text",placeholder:"username",value:c,required:!0,onChange:e=>l({type:"field",fieldName:"username",payload:e.currentTarget.value})})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{className:"form-control",type:"password",placeholder:"password",autoComplete:"new-password",value:s,required:!0,onChange:e=>l({type:"field",fieldName:"password",payload:e.currentTarget.value})})),n.a.createElement("div",{className:" text-center"},n.a.createElement("button",{className:"btn btn-primary",type:"submit",disabled:u},u?"Logging in...":"Log In")))))}var h=()=>n.a.createElement(y,null);c.a.render(n.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.74d9115b.chunk.js.map