import{a as M,b as f,c as V,d as q,e as j,f as H,g as K,h as O,i as R,j as J}from"./chunk-YFFVNROF.js";import{Ab as I,Ca as u,Ga as F,Ha as x,I as E,Jb as A,Kb as G,Mb as w,Nb as L,Ob as N,P as p,Pb as B,Q as g,Qa as k,Ra as y,Y as a,Z as h,_a as b,ea as s,ga as c,hb as _,ma as i,na as e,oa as l,ta as C,ua as v,vb as D,yb as S,zb as T}from"./chunk-YLZL6RMN.js";import"./chunk-4L4RMVSS.js";var U=()=>({"minWidth.%":44});function W(n,t){n&1&&(i(0,"div",21),u(1," T\xEAn \u0111\u0103ng nh\u1EADp kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng. "),e())}function z(n,t){if(n&1&&(i(0,"div"),s(1,W,2,0,"div",20),e()),n&2){let d=v();a(),c("ngIf",d.loginForm.controls.username.errors.required)}}function P(n,t){n&1&&(i(0,"div",21),u(1," M\u1EADt kh\u1EA9u kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng. "),e())}function Q(n,t){if(n&1&&(i(0,"div"),s(1,P,2,0,"div",20),e()),n&2){let d=v();a(),c("ngIf",d.loginForm.controls.password.errors==null?null:d.loginForm.controls.password.errors.required)}}var ae=(()=>{let t=class t{constructor(r,o){this.formBuilder=r,this.router=o,this.menu=[{name:"B\xE1o c\xE1o giao d\u1ECBch",url:"/report-transaction",icon:"fa fa-area-chart",children:[{name:"Tra c\u1EE9u doanh thu",url:"report-transaction/revenue",icon:"nav-icon-bullet"}]},{name:"V\u1EADn h\xE0nh",url:"/operate",icon:"fa fa-desktop",children:[{name:"V\u1EADn h\xE0nh thi\u1EBFt b\u1ECB",url:"operate/device",icon:"nav-icon-bullet"},{name:"C\u1EADp nh\u1EADt h\xE0ng h\xF3a",url:"operate/product",icon:"nav-icon-bullet"}]},{name:"Ch\u0103m s\xF3c kh\xE1ch h\xE0ng",url:"/customer-care",icon:"fa fa-area-chart",children:[{name:"Tra c\u1EE9u l\u1ECBch s\u1EED mua h\xE0ng",url:"customer-care/purchase-history",icon:"nav-icon-bullet"}]},{name:"Admin",url:"/admin",icon:"fa fa-user",children:[{name:"Khai b\xE1o user",url:"admin/user-management",icon:"nav-icon-bullet"},{name:"Khai b\xE1o qu\u1EA3ng c\xE1o",url:"admin/advertisement-management",icon:"nav-icon-bullet"},{name:"C\u1EA5p l\u1EA1i m\u1EADt kh\u1EA9u",url:"admin/password-management",icon:"nav-icon-bullet"},{name:"Kh\xF3a t\xE0i kho\u1EA3n",url:"admin/lock-account",icon:"nav-icon-bullet"},{name:"M\u1EDF kh\xF3a t\xE0i kho\u1EA3n",url:"admin/unLock-account",icon:"nav-icon-bullet"}]}]}ngOnInit(){this.loginForm=this.formBuilder.group({username:["",[f.required]],password:["",[f.required]]})}markFormGroupTouched(r){Object.values(r.controls).forEach(o=>{o.markAsTouched(),o instanceof j&&this.markFormGroupTouched(o)})}validField(r){return!!(this.loginForm.controls[r].invalid&&(this.loginForm.controls[r].dirty||this.loginForm.controls[r].touched))}login(){if(this.markFormGroupTouched(this.loginForm),this.loginForm.invalid){console.log(this.loginForm);return}localStorage.setItem("token","tokenxxx"),this.router.navigate(["/"]),localStorage.setItem("menu",JSON.stringify(this.menu))}};t.\u0275fac=function(o){return new(o||t)(h(R),h(b))},t.\u0275cmp=E({type:t,selectors:[["app-login"]],standalone:!0,features:[F],decls:33,vars:5,consts:[[1,"bg-light","dark:bg-transparent","min-vh-100","d-flex","flex-row","align-items-center"],["breakpoint","md"],[3,"formGroup"],[1,"justify-content-center"],["lg","10","xl","8"],[1,"p-4"],["cForm",""],[1,"mb-3"],["cInputGroupText",""],["cIcon","","name","cilUser"],["formControlName","username","placeholder","T\xEAn \u0111\u0103ng nh\u1EADp",1,"form-control"],[4,"ngIf"],[1,"mb-4"],["cIcon","","name","cilLockLocked"],["placeholder","M\u1EADt kh\u1EA9u","type","password","formControlName","password",1,"form-control"],["xs","6"],["cButton","","color","primary",1,"px-4",3,"click"],["xs","6",1,"text-right"],[1,"text-white","bg-primary","py-5",3,"ngStyle"],[1,"text-center"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(o,m){o&1&&(i(0,"div",0)(1,"c-container",1)(2,"form",2)(3,"c-row",3)(4,"c-col",4)(5,"c-card-group")(6,"c-card",5)(7,"c-card-body")(8,"form",6)(9,"h1"),u(10,"\u0110\u0103ng nh\u1EADp"),e(),i(11,"div",7)(12,"c-input-group")(13,"span",8),p(),l(14,"svg",9),e(),g(),l(15,"input",10),e(),s(16,z,2,1,"div",11),e(),i(17,"div",12)(18,"c-input-group")(19,"span",8),p(),l(20,"svg",13),e(),g(),l(21,"input",14),e(),s(22,Q,2,1,"div",11),e(),i(23,"c-row")(24,"c-col",15)(25,"button",16),C("click",function(){return m.login()}),u(26," \u0110\u0103ng nh\u1EADp "),e()(),l(27,"c-col",17),e()()()(),i(28,"c-card",18)(29,"c-card-body",19)(30,"div")(31,"h2"),u(32,"H\u1EC7 th\u1ED1ng qu\u1EA3n l\xFD m\xE1y b\xE1n h\xE0ng t\u1EF1 \u0111\u1ED9ng"),e()()()()()()()()()()),o&2&&(a(2),c("formGroup",m.loginForm),a(14),c("ngIf",m.loginForm.controls.username.invalid&&(m.loginForm.controls.username.dirty||m.loginForm.controls.username.touched)),a(6),c("ngIf",m.validField("password")),a(6),c("ngStyle",x(4,U)))},dependencies:[L,B,N,I,S,T,A,G,w,_,D,y,J,H,M,V,q,K,O,k]});let n=t;return n})();export{ae as LoginComponent};