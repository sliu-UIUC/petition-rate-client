(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{125:function(e,t,a){e.exports=a(161)},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a.n(c),i=a(18),l=a(37),s=a(90),u=a(104),m=Object(l.c)({petitions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;case"VOTE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"CREATE":return[].concat(Object(u.a)(e),[t.payload]);case"UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));default:return e}}}),p=a(91),d=a(92),f=a(105),h=a(103),g=a(26),E=a(14),b=a(9),v=a(209),y=a(216),x=a(217),j=a(221),O=a(218),k=a(204),w=a(10),C=a.n(w),S=a(17),N=a(198),I=a(200),T=a(58),A=a(201),_=a(202),D=a(203),W=a(47),P=a.n(W),F=a(97),U=a.n(F),B=a(61),z=a.n(B),V=a(39),L=a.n(V),q="https://petition-rate.herokuapp.com/petitions",R=function(e,t){return L.a.patch("".concat(q,"/").concat(e,"/").concat(t,"/votePetition"))},M=function(e,t){return L.a.patch("".concat(q,"/").concat(e),t)},H=function(e){return L.a.delete("".concat(q,"/").concat(e))},J=function(){return function(){var e=Object(S.a)(C.a.mark((function e(t){var a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get(q);case 3:a=e.sent,n=a.data,t({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},Y=function(e){return function(){var t=Object(S.a)(C.a.mark((function t(a){var n,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,L.a.post(q,c);case 3:n=t.sent,r=n.data,a({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},G=function(e,t){return function(){var a=Object(S.a)(C.a.mark((function a(n){var r,c;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,M(e,t);case 3:r=a.sent,c=r.data,n({type:"UPDATE",payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},K=function(e,t){return function(){var a=Object(S.a)(C.a.mark((function a(n){var r,c;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,R(e,t);case 3:r=a.sent,c=r.data,n({type:"VOTE",payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},Q=a(196),X=Object(Q.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),Z=function(e){var t=e.petition,a=(e.setCurrentId,Object(i.b)()),c=X(),o=r.a.useState(!1),l=Object(b.a)(o,2),s=l[0],u=l[1],m=localStorage.getItem("userid");function p(){return(p=Object(S.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://petition-rate.herokuapp.com/isUserAuth",{headers:{"x-access-token":localStorage.getItem("token")}});case 3:return a=e.sent,e.next=6,a.json();case 6:e.sent.username===t&&u(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error in verifying user");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(e){p.apply(this,arguments)}(t.creator)}),[t]);return r.a.createElement(N.a,{style:{display:"block",width:"100%"},className:c.card},r.a.createElement(I.a,{className:c.media,image:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:t.title}),r.a.createElement("div",{className:c.overlay},r.a.createElement(T.a,{variant:"h6"},t.creator),r.a.createElement(T.a,{variant:"body2"},z()(t.createdAt).fromNow())),r.a.createElement("div",{className:c.overlay2}),r.a.createElement(T.a,{className:c.title,gutterBottom:!0,variant:"h5",component:"h2"},t.title),r.a.createElement(A.a,null,r.a.createElement(T.a,{variant:"body2",color:"textSecondary",component:"p"},t.message)),r.a.createElement(_.a,{className:c.cardActions},r.a.createElement(D.a,{size:"small",color:"primary",onClick:function(){return a(K(t._id,m))}},r.a.createElement(P.a,{fontSize:"small"})," Vote ",t.voteCount," "),s?r.a.createElement(D.a,{size:"small",color:"primary",onClick:function(){return a((e=t._id,function(){var t=Object(S.a)(C.a.mark((function t(a){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,H(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(U.a,{fontSize:"small"})," Delete"):null,r.a.createElement(g.b,{to:"/description/".concat(t._id),style:{textDecoration:"none"}},r.a.createElement(D.a,{variant:"outlined",color:"primary"},"Show Detail"))))},$=function(e){var t=e.setCurrentId,a=e.query,n=e.sortBy,c=e.setWidth,o=Object(i.c)((function(e){return e.petitions}));return"voteCountDesc"===n?o.sort((function(e,t){return e.voteCount<t.voteCount?1:-1})):"voteCountAsc"===n?o.sort((function(e,t){return e.voteCount<t.voteCount?-1:1})):"creationTimeDesc"===n?o.sort((function(e,t){return e.createdAt<t.createdAt?1:-1})):"creationTimeAsc"===n&&o.sort((function(e,t){return e.createdAt<t.createdAt?-1:1})),r.a.createElement(k.a,{justifyContent:"center",spacing:5},r.a.createElement(k.a,{item:!0},r.a.createElement(k.a,{container:!0,spacing:4},o.map((function(e){return e.title.toLowerCase().startsWith(a.toLowerCase())?r.a.createElement(k.a,{key:e._id,item:!0,xs:c},r.a.createElement(Z,{petition:e,setCurrentId:t})):null})))))},ee=a(205),te=a(219),ae=a(208),ne=a(220),re=a(102),ce=a(207),oe=a(100),ie=a.n(oe),le=(a(155),function(){var e=r.a.useState(null),t=Object(b.a)(e,2),a=(t[0],t[1],r.a.useState(null)),c=Object(b.a)(a,2),o=c[0],i=c[1],l=r.a.useState(!1),s=Object(b.a)(l,2),u=s[0],m=s[1],p=(localStorage.getItem("userid"),Object(n.useState)("")),d=Object(b.a)(p,2),f=d[0],h=d[1];function g(){return(g=Object(S.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://petition-rate.herokuapp.com/isUserAuth",{headers:{"x-access-token":localStorage.getItem("token")}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,m(a.isLoggedIn),h(a.username),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Error in verifying user");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var v=Object(E.f)();return Object(n.useEffect)((function(){!function(){g.apply(this,arguments)}()}),[]),r.a.createElement("div",null,r.a.createElement(ee.a,{position:"fixed"},r.a.createElement("div",{className:"nav_bar"},r.a.createElement("div",{className:"nav_left"},r.a.createElement("div",{className:"nav_title"},r.a.createElement(T.a,{variant:"h5"},"PetitionRate")),r.a.createElement(D.a,{variant:"contained",color:"primary",className:"nav_btn",onClick:function(){v.push("/")}},"About"),u?r.a.createElement(D.a,{variant:"contained",color:"primary",className:"nav_btn",onClick:function(){v.push("/home")}},"Home"):null),r.a.createElement("div",{className:"nav_profile"},u?r.a.createElement(te.a,{title:"Create Petition"},r.a.createElement(D.a,{size:"big",onClick:function(){v.push("/add")}},r.a.createElement(ce.a,{variant:"extended",color:"primary","aria-label":"add"},r.a.createElement(ie.a,null),"Create a Petition"))):null,r.a.createElement(te.a,{title:"Open Profile"},r.a.createElement(ae.a,{onClick:function(e){i(e.currentTarget)},sx:{p:0}},r.a.createElement(ne.a,{src:"/broken-image.jpg"}))),u?r.a.createElement(T.a,{variant:"body1",style:{color:"white"}},f):null),r.a.createElement(re.a,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(o),onClose:function(){i(null)}},u?r.a.createElement(j.a,{key:"My Home",onClick:function(){v.push("/myhome")}},r.a.createElement(T.a,{textAlign:"center"},"My Home")):null,u?null:r.a.createElement(j.a,{key:"Sign In",onClick:function(){v.push("/signin")}},r.a.createElement(T.a,{textAlign:"center"},"Sign In")),u?r.a.createElement(j.a,{key:"Sign Out",onClick:function(){localStorage.removeItem("token"),v.push("/signin")}},r.a.createElement(T.a,{textAlign:"center"},"Sign Out")):null,u?null:r.a.createElement(j.a,{key:"Sign Up",onClick:function(){v.push("/signup")}},r.a.createElement(T.a,{textAlign:"center"},"Sign Up"))))))}),se=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(b.a)(o,2),s=l[0],u=l[1],m=Object(n.useState)("None"),p=Object(b.a)(m,2),d=p[0],f=p[1],h=Object(i.b)();return Object(n.useEffect)((function(){h(J())}),[a,h]),r.a.createElement(v.a,{maxWidth:"lg"},r.a.createElement(le,null),r.a.createElement(y.a,{style:{marginTop:"150px",backgroundColor:"White",position:"relative",width:"50%",left:"25%"},id:"outlined-basic",label:"Search for petitions!",variant:"outlined",onChange:function(e){u(e.target.value)}}),r.a.createElement("br",null),r.a.createElement(x.a,{style:{marginTop:"15px",backgroundColor:"White",position:"relative",width:"50%",left:"25%"},variant:"outlined",defaultValue:"FilterBy",inputProps:{"aria-label":"Without label"},onChange:function(e){f(e.target.value)}},r.a.createElement(j.a,{value:"FilterBy",disabled:!0},r.a.createElement("em",null,"Filter By")),r.a.createElement(j.a,{value:"voteCountDesc"},"Vote Count (Descending)"),r.a.createElement(j.a,{value:"voteCountAsc"},"Vote Count (Ascending)"),r.a.createElement(j.a,{value:"creationTimeDesc"},"Creation Time (Descending)"),r.a.createElement(j.a,{value:"creationTimeAsc"},"Creation Time (Ascending)")),r.a.createElement(O.a,{in:!0},r.a.createElement(v.a,{style:{marginTop:"20px"}},r.a.createElement(k.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:2},r.a.createElement(k.a,{item:!0,xs:12,sm:12},r.a.createElement($,{setCurrentId:c,query:s,sortBy:d,setWidth:4}))))))},ue=(a(156),a(3),a(212)),me=a(69),pe=Object(Q.a)((function(e){return{root:{width:"80%"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:me.a,width:40,height:40}}})),de=function(e){var t=Object(i.b)(),a=e.match.params.id,c=Object(n.useState)(null),o=Object(b.a)(c,2),l=o[0],s=o[1],u=Object(n.useState)(0),m=Object(b.a)(u,2),p=m[0],d=m[1],f=Object(n.useState)(""),h=Object(b.a)(f,2),g=h[0],E=h[1],v=Object(n.useState)(""),y=Object(b.a)(v,2),x=y[0],j=y[1],O=Object(n.useState)(""),k=Object(b.a)(O,2),w=k[0],C=k[1],S=Object(n.useState)(""),_=Object(b.a)(S,2),W=_[0],F=_[1],U=pe(),B=Object(n.useState)(""),z=Object(b.a)(B,2),V=z[0],q=z[1],R=localStorage.getItem("userid");return Object(n.useEffect)((function(){L.a.get("https://petition-rate.herokuapp.com/petitions/".concat(a)).then((function(e){E(e.data.title),j(e.data.description),C(e.data.creator),d(e.data.voteCount),q(e.data.selectedFile),F(e.data.votedBy);var t=new Date(e.data.createdAt);s(t.toString().split(" ").slice(1,4).join(" "))}))}),[]),r.a.createElement("div",{className:"petition_container"},r.a.createElement(le,null),r.a.createElement(N.a,{className:U.root},r.a.createElement(I.a,{className:U.media,image:V||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"}),r.a.createElement(A.a,null,r.a.createElement(T.a,{variant:"h5"},g),r.a.createElement(T.a,{variant:"body1",color:"textSecondary",component:"p",style:{wordWrap:"break-word"}},x)),r.a.createElement(ue.a,{avatar:r.a.createElement(ne.a,{"aria-label":"profile_pic",className:U.avatar}),title:"Created by: "+w,titleTypographyProps:{variant:"h6"},subheader:"Date created: "+l}),r.a.createElement("div",{className:"Vote"},r.a.createElement(ue.a,{title:"Vote Count: "+p,titleTypographyProps:{variant:"h6"}}),r.a.createElement(D.a,{size:"small",color:"primary",onClick:function(){t(K(a,R)),W.includes(R)?(W.splice(W.indexOf(R),1),d(p-1)):(W.push(R),d(p+1))}},r.a.createElement(P.a,{fontSize:"large"})," Vote ",p))))},fe=(a(157),a(213)),he=a(215),ge=function(){var e=Object(E.f)(),t=Object(n.useState)(!1),a=Object(b.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),i=Object(b.a)(o,2),l=i[0],s=i[1];return Object(n.useEffect)((function(){fetch("https://petition-rate.herokuapp.com/isUserAuth",{headers:{"x-access-token":localStorage.getItem("token")}}).then((function(e){return e.json()})).then((function(t){return t.isLoggedIn?e.push("/home"):null})).catch((function(e){return console.log(e)}))}),[]),n.createElement("div",null,n.createElement(le,null),n.createElement(O.a,{in:!0},n.createElement(v.a,{component:"main",maxWidth:"xs",style:{"margin-top":"150px"}},n.createElement(fe.a,null),n.createElement(he.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"}},n.createElement(ne.a,{sx:{m:1,bgcolor:"secondary.main"}}),n.createElement(T.a,{component:"h1",variant:"h5"},"Sign Up"),n.createElement(he.a,{component:"form",onSubmit:function(t){t.preventDefault();var a=new FormData(t.currentTarget),n={username:a.get("email"),password:a.get("password")};fetch("https://petition-rate.herokuapp.com/signup",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(t){localStorage.setItem("token",t.token);var a=t.isSignedUp;c(a),s(t.message),a&&e.push("/signin")}))},noValidate:!0,sx:{mt:1}},n.createElement(y.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Username",name:"email",autoComplete:"email",autoFocus:!0}),n.createElement(y.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),n.createElement(D.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2}},"Create the account"),r?n.createElement("p",{className:"success_message"},"You Are Registered Successfully"):l?n.createElement("p",{className:"err_message"},"Username has been taken!"):n.createElement("p",{className:"normal_message"},"Please Register"))))))},Ee=(a(158),a(214)),be=function(){var e=Object(E.f)(),t=Object(n.useState)(""),a=Object(b.a)(t,2),r=a[0],c=a[1];function o(){return i.apply(this,arguments)}function i(){return(i=Object(S.a)(C.a.mark((function t(){var a,n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://petition-rate.herokuapp.com/isUserAuth",{headers:{"x-access-token":localStorage.getItem("token")}});case 3:return a=t.sent,t.next=6,a.json();case 6:(n=t.sent).isLoggedIn&&(localStorage.setItem("userid",n.userid),e.push("/home")),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log("Error in verifying user");case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function l(){return(l=Object(S.a)(C.a.mark((function e(t){var a,n,r,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=new FormData(t.currentTarget),n={username:a.get("email"),password:a.get("password")},e.prev=3,e.next=6,fetch("https://petition-rate.herokuapp.com/signin",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n)});case 6:return r=e.sent,e.next=9,r.json();case 9:return"Invalid username or password."==(i=e.sent).message&&c("Invalid username or password."),localStorage.setItem("token",i.token),e.next=14,o();case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.log("Error. No such user");case 19:case"end":return e.stop()}}),e,null,[[3,16]])})))).apply(this,arguments)}Object(n.useEffect)((function(){o()}),[]);return n.createElement("div",null,n.createElement(le,null),n.createElement(O.a,{in:!0},n.createElement(v.a,{component:"main",maxWidth:"xs",style:{"margin-top":"150px"}},n.createElement(fe.a,null),n.createElement(he.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"}},n.createElement(ne.a,{sx:{m:1,bgcolor:"secondary.main"}}),n.createElement(T.a,{component:"h1",variant:"h5"},"Sign in"),n.createElement(he.a,{component:"form",onSubmit:function(e){return l.apply(this,arguments)},noValidate:!0,sx:{mt:1}},n.createElement(y.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Username",name:"email",autoComplete:"email",autoFocus:!0}),n.createElement(y.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),n.createElement(D.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2}},"Sign In"),""==r?n.createElement("p",{className:"normal_message"},"Please Sign In"):n.createElement("p",{className:"error_message"},r),n.createElement(k.a,{container:!0},n.createElement(k.a,{item:!0},n.createElement(Ee.a,{href:"#",variant:"body2",onClick:function(){e.push("/signup")}},"Don't have an account? Sign Up"))))))))},ve=Object(Q.a)({root:{maxWidth:645,background:"rgba(0,0,0,0.5)",margin:"20px"},media:{height:140},title:{fontFamily:"Nunito",fontWeight:"bold",fontSize:"2rem",color:"#fff"},desc:{fontFamily:"Nunito",fontSize:"1.1rem",color:"#ddd"}});function ye(e){var t=e.place,a=ve();return r.a.createElement(N.a,{className:a.root},r.a.createElement(I.a,{className:a.media,image:t.imageUrl,title:"Contemplative Reptile"}),r.a.createElement(A.a,null,r.a.createElement(T.a,{gutterBottom:!0,variant:"h5",component:"h1",className:a.title},t.title),r.a.createElement(T.a,{variant:"body2",color:"textSecondary",component:"p",className:a.desc},t.description)))}var xe=[{title:"Second, Create Your Own Petition",description:"You can initiate a petition, view existing open petitions, or search for existing petitions",imageUrl:"https://www.jonesday.com/-/media/images/publications/2019/12/consumer-groups-file-petition/articleimage/consumer_groups_file_petition_whitepaper_social.jpeg?h=800&w=1600&la=en&hash=9DC961C9CBC7970543B7C2780D8E3431"},{title:"First, Sign In To Use Our App",description:"You can sign up or sign in with your username and password by clicking the signin button on the right corner",imageUrl:"https://www.aauw.org/app/uploads/2020/03/shutterstock_1570366342_900x700_acf_cropped.jpg"}],je=Object(Q.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center"}}})),Oe=function(){var e=je();return r.a.createElement("div",{className:e.root},r.a.createElement(ye,{place:xe[1]}),r.a.createElement(ye,{place:xe[0]}))},ke=Object(Q.a)((function(){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh",fontFamily:"Nunito"},appbar:{background:"none"},appbarWrapper:{width:"80%",margin:"0 auto"},appbarTitle:{flexGrow:"1"},icon:{color:"#fff",fontSize:"2rem"},colorText:{color:"purple",fontSize:"1rem"},container:{textAlign:"center"},title:{color:"black",fontSize:"4.5rem"}}}));function we(){var e=ke();return r.a.createElement("div",null,r.a.createElement(le,null),r.a.createElement(O.a,{in:!0},r.a.createElement("div",null,r.a.createElement("div",{className:e.root,id:"header"},r.a.createElement(ee.a,{className:e.appbar,elevation:0}),r.a.createElement("div",{className:e.container},r.a.createElement("h1",{className:e.title},"Welcome to ",r.a.createElement("br",null),"PetitionRate",r.a.createElement("span",{className:e.colorText},"\xa0\xa0Made by TeamToffee")))),r.a.createElement(Oe,null))))}var Ce=function(e){var t=e.petition,a=X();return r.a.createElement(N.a,{style:{display:"block",width:"100%"},className:a.card},r.a.createElement(I.a,{className:a.media,image:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:t.title}),r.a.createElement("div",{className:a.overlay},r.a.createElement(T.a,{variant:"h6"},t.creator),r.a.createElement(T.a,{variant:"body2"},z()(t.createdAt).fromNow())),r.a.createElement("div",{className:a.overlay2}),r.a.createElement("div",{className:a.details}),r.a.createElement(T.a,{className:a.title,gutterBottom:!0,variant:"h5",component:"h2"},t.title),r.a.createElement(A.a,null,r.a.createElement(T.a,{variant:"body2",color:"textSecondary",component:"p"},t.message)),r.a.createElement(_.a,{className:a.cardActions},r.a.createElement(D.a,{size:"small",color:"primary",disabled:!0},r.a.createElement(P.a,{fontSize:"small"}),"Vote ",t.voteCount," "),r.a.createElement(g.b,{to:"/description/".concat(t._id),style:{textDecoration:"none"}},r.a.createElement(D.a,{variant:"outlined",color:"primary"},"Show Detail"))))},Se=(a(159),function(){var e=localStorage.getItem("userid"),t=Object(n.useState)([]),a=Object(b.a)(t,2),c=a[0],o=(a[1],Object(n.useState)([])),i=Object(b.a)(o,2),l=i[0],s=i[1],u=Object(n.useState)(""),m=Object(b.a)(u,2),p=m[0],d=m[1];function f(){return(f=Object(S.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://petition-rate.herokuapp.com/isUserAuth",{headers:{"x-access-token":localStorage.getItem("token")}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,d(a.username),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error in verifying user");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){fetch("https://petition-rate.herokuapp.com/users/"+e+"/votedPetitions").then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(e){return console.log(e)})),function(){f.apply(this,arguments)}()}),[]),r.a.createElement(v.a,{maxWidth:"lg"},r.a.createElement(le,null),r.a.createElement(O.a,{in:!0},r.a.createElement(v.a,{style:{"margin-top":"150px"}},r.a.createElement(T.a,{variant:"h3",component:"div",gutterBottom:!0,style:{color:"purple",fontWeight:"Bold"}},"Hi, ",p),r.a.createElement("div",{className:"two_cols"},r.a.createElement("div",{className:"col2"},r.a.createElement(T.a,{variant:"h3",component:"div",gutterBottom:!0,style:{color:"purple"}},"My Petition"),c.map((function(e){return r.a.createElement("div",{className:"Petition"},r.a.createElement(Ce,{petition:e}))}))),r.a.createElement("div",{className:"col2"},r.a.createElement(T.a,{variant:"h3",component:"div",gutterBottom:!0,style:{color:"purple"}},"My Vote"),l.map((function(e){return r.a.createElement("div",{className:"Petition"},r.a.createElement(Ce,{petition:e}))})))))))}),Ne=a(57),Ie=a(33),Te=a(107),Ae=a(101),_e=a.n(Ae),De=Object(Q.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),We=function(e){var t,a=e.currentId,c=e.setCurrentId,o=(Object(E.f)(),Object(n.useState)({creator:"",title:"",description:"",selectedFile:""})),l=Object(b.a)(o,2),s=l[0],u=l[1],m=Object(i.c)((function(e){return a?e.petitions.find((function(e){return e._id===a})):null})),p=Object(i.b)(),d=De();function f(){return(f=Object(S.a)(C.a.mark((function e(){var t,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://petition-rate.herokuapp.com/isUserAuth",{headers:{"x-access-token":localStorage.getItem("token")}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,u(Object(Ie.a)(Object(Ie.a)({},s),{},{creator:a.username})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error in verifying user");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}Object(n.useEffect)((function(){m&&u(m),function(){f.apply(this,arguments)}()}),[m]);var h=function(){c(0),u({creator:"",title:"",description:"",selectedFile:""})},g=function(){var e=Object(S.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===a?(p(Y(s)),h()):(p(G(a,s)),h());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(Te.a,{className:d.paper},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(d.root," ").concat(d.form),onSubmit:g},r.a.createElement(T.a,{variant:"h6"},a?'Editing "'.concat(m.title,'"'):"Create a Petition"),r.a.createElement(y.a,(t={required:!0,name:"title",variant:"outlined",label:"Title (Required)",fullWidth:!0,value:s.title},Object(Ne.a)(t,"required",!0),Object(Ne.a)(t,"onChange",(function(e){return u(Object(Ie.a)(Object(Ie.a)({},s),{},{title:e.target.value}))})),t)),r.a.createElement(y.a,{required:!0,name:"message",variant:"outlined",label:"Description",fullWidth:!0,multiline:!0,rows:4,value:s.description,onChange:function(e){return u(Object(Ie.a)(Object(Ie.a)({},s),{},{description:e.target.value}))}}),r.a.createElement("div",{className:d.fileInput},r.a.createElement(_e.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return u(Object(Ie.a)(Object(Ie.a)({},s),{},{selectedFile:t}))}})),r.a.createElement(D.a,{className:d.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit!"),r.a.createElement(D.a,{variant:"contained",color:"secondary",size:"small",onClick:h,fullWidth:!0},"Clear")))},Pe=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),a=t[0],c=t[1],o=Object(i.b)();return Object(n.useEffect)((function(){o(J())}),[a,o]),r.a.createElement(r.a.Fragment,null,r.a.createElement(le,null),r.a.createElement(O.a,{in:!0},r.a.createElement(v.a,{style:{"margin-top":"150px"},maxWidth:"sm"},r.a.createElement(We,{currentId:a,setCurrentId:c}))))},Fe=function(e){Object(f.a)(a,e);var t=Object(h.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",component:we}),r.a.createElement(E.a,{exact:!0,path:"/description/:id",component:de}),r.a.createElement(E.a,{exact:!0,path:"/signin",component:be}),r.a.createElement(E.a,{exact:!0,path:"/signup",component:ge}),r.a.createElement(E.a,{exact:!0,path:"/home",component:se}),r.a.createElement(E.a,{exact:!0,path:"/myhome",component:Se}),r.a.createElement(E.a,{exact:!0,path:"/add",component:Pe})))}}]),a}(n.Component),Ue=(a(160),Object(l.e)(m,Object(l.d)(Object(l.a)(s.a))));o.a.render(r.a.createElement(i.a,{store:Ue},r.a.createElement(Fe,null)),document.getElementById("root"))}},[[125,1,2]]]);
//# sourceMappingURL=main.400f02b9.chunk.js.map