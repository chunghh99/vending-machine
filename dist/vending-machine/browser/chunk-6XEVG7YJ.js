import{a as M}from"./chunk-MGT7Q7VC.js";import"./chunk-AIHPWGIQ.js";import{a as x,b as E,c as S,d as N,f as b,g as y,j as F,k as D,l as I,m as T,n as A,o as q,p as U}from"./chunk-DYYFGZU4.js";import{Bb as e,Cb as i,Cc as _,Db as p,Kb as g,Lb as v,Ub as n,Xa as o,Ya as f,Zb as C,ga as h,pb as m,rb as u,tb as c}from"./chunk-SOYHKUIL.js";import"./chunk-4L4RMVSS.js";function k(t,r){t&1&&(e(0,"div",21),n(1," T\xEAn nh\xE2n vi\xEAn kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng. "),i())}function w(t,r){if(t&1&&(e(0,"div"),m(1,k,2,0,"div",20),i()),t&2){let d=v();o(),u("ngIf",d.showError("fullName","required"))}}function B(t,r){t&1&&(e(0,"div",21),n(1," Ng\xE0y sinh kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng. "),i())}function P(t,r){if(t&1&&(e(0,"div"),m(1,B,2,0,"div",20),i()),t&2){let d=v();o(),u("ngIf",d.showError("birthDay","required"))}}function V(t,r){t&1&&(e(0,"div",21),n(1," S\u1ED1 \u0111i\u1EC7n tho\u1EA1i kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng. "),i())}function G(t,r){if(t&1&&(e(0,"div"),m(1,V,2,0,"div",20),i()),t&2){let d=v();o(),u("ngIf",d.showError("phoneNumber","required"))}}function O(t,r){t&1&&(e(0,"div",21),n(1," M\xE3 nh\xE2n vi\xEAn kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng. "),i())}function j(t,r){if(t&1&&(e(0,"div"),m(1,O,2,0,"div",20),i()),t&2){let d=v();o(),u("ngIf",d.showError("userName","required"))}}function L(t,r){t&1&&(e(0,"div",21),n(1," C\xE2y b\xE1n h\xE0ng qu\u1EA3n l\xFD kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng. "),i())}function R(t,r){if(t&1&&(e(0,"div"),m(1,L,2,0,"div",20),i()),t&2){let d=v();o(),u("ngIf",d.showError("vendingMachine","required"))}}var X=(()=>{let r=class r{constructor(s,l){this.fb=s,this.toastr=l}ngOnInit(){this.userForm=this.fb.group({fullName:["",[E.required]],birthDay:["",[E.required]],phoneNumber:["",[E.required]],userName:["",[E.required]],vendingMachine:["",[E.required]]})}onCreateUser(){console.log(this.userForm.value)}validField(s){let l=this.userForm.get(s);return l.invalid&&(l.dirty||l.touched)}showError(s,l){let a=this.userForm.get(s);return a.hasError(l)&&a.touched}};r.\u0275fac=function(l){return new(l||r)(f(q),f(M))},r.\u0275cmp=h({type:r,selectors:[["app-create-user"]],standalone:!0,features:[C],decls:59,vars:16,consts:[[3,"formGroup"],[1,"row","mt-5"],[1,"col-md-2","col-sm-2","col-xs-6"],[1,"form-label","col-form-label"],[1,"required"],[1,"col-md-4","col-sm-4","col-xs-6"],["formControlName","fullName","maxlength","50","id","fullName",1,"form-control"],[4,"ngIf"],["formControlName","birthDay","type","date",1,"form-control","custom-date-input"],[1,"row","mt-3"],["formControlName","phoneNumber","maxlength","15",1,"form-control"],["formControlName","userName","maxlength","100",1,"form-control"],["aria-label","","formControlName","vendingMachine",1,"form-select","custom-select"],["value","0",1,"custom-option"],["value","1",1,"custom-option"],["value","2",1,"custom-option"],["value","3",1,"custom-option"],[1,"col-12","text-center"],["type","button",1,"btn","btn-primary-custom",3,"click"],[1,"fa","fa-plus"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(l,a){l&1&&(e(0,"form",0)(1,"h4"),n(2,"\u0110\u0103ng k\xFD th\xF4ng tin nh\xE2n vi\xEAn"),i(),e(3,"div",1)(4,"div",2)(5,"label",3),n(6," T\xEAn nh\xE2n vi\xEAn"),e(7,"span",4),n(8,"*"),i()()(),e(9,"div",5),p(10,"input",6),m(11,w,2,1,"div",7),i(),e(12,"div",2)(13,"label",3),n(14," Ng\xE0y sinh"),e(15,"span",4),n(16,"*"),i()()(),e(17,"div",5),p(18,"input",8),m(19,P,2,1,"div",7),i()(),e(20,"div",9)(21,"div",2)(22,"label",3),n(23," S\u1ED1 \u0111i\u1EC7n tho\u1EA1i"),e(24,"span",4),n(25,"*"),i()()(),e(26,"div",5),p(27,"input",10),m(28,G,2,1,"div",7),i(),e(29,"div",2)(30,"label",3),n(31," M\xE3 nh\xE2n vi\xEAn"),e(32,"span",4),n(33,"*"),i()()(),e(34,"div",5),p(35,"input",11),m(36,j,2,1,"div",7),i()(),e(37,"div",9)(38,"div",2)(39,"label",3),n(40," C\xE2y b\xE1n h\xE0ng qu\u1EA3n l\xFD"),e(41,"span",4),n(42,"*"),i()()(),e(43,"div",5)(44,"select",12)(45,"option",13),n(46,"C\xE2y b\xE1n h\xE0ng keangNam"),i(),e(47,"option",14),n(48,"C\xE2y b\xE1n h\xE0ng 1"),i(),e(49,"option",15),n(50,"C\xE2y b\xE1n h\xE0ng 2"),i(),e(51,"option",16),n(52,"C\xE2y b\xE1n h\xE0ng 3"),i()(),m(53,R,2,1,"div",7),i()(),e(54,"div",9)(55,"div",17)(56,"button",18),g("click",function(){return a.onCreateUser()}),p(57,"i",19),n(58," Th\xEAm m\u1EDBi "),i()()()()),l&2&&(u("formGroup",a.userForm),o(10),c("is-invalid",a.validField("fullName")),o(),u("ngIf",a.validField("fullName")),o(7),c("is-invalid",a.validField("birthDay")),o(),u("ngIf",a.validField("birthDay")),o(8),c("is-invalid",a.validField("phoneNumber")),o(),u("ngIf",a.validField("phoneNumber")),o(7),c("is-invalid",a.validField("userName")),o(),u("ngIf",a.validField("userName")),o(8),c("is-invalid",a.validField("vendingMachine")),o(9),u("ngIf",a.validField("vendingMachine")))},dependencies:[U,b,I,T,x,D,S,N,A,y,F,_]});let t=r;return t})();export{X as CreateUserComponent};