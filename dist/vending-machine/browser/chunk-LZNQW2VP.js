import{a as A}from"./chunk-7AAVEFFA.js";import{a as U}from"./chunk-NG6YOAQF.js";import"./chunk-4C57YJA5.js";import{a as q}from"./chunk-FFY5MW76.js";import{c as x,d as p,e as S,f as F,i as N,k as b,l as y,m as D,n as I,o as T,p as M}from"./chunk-BMRPHH6Q.js";import{Ab as g,Bb as v,La as o,Lb as n,Ma as f,Tb as C,fb as d,ga as h,hb as l,jb as E,rb as t,sb as i,tb as c,wc as _}from"./chunk-3ZEQ7FCE.js";import"./chunk-4L4RMVSS.js";function w(e,r){e&1&&(t(0,"div",17),n(1," T\xEAn nh\xE2n vi\xEAn kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng. "),i())}function k(e,r){if(e&1&&(t(0,"div"),d(1,w,2,0,"div",16),i()),e&2){let u=v();o(),l("ngIf",u.showError("fullName","required"))}}function B(e,r){e&1&&(t(0,"div",17),n(1," Ng\xE0y sinh kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng. "),i())}function G(e,r){if(e&1&&(t(0,"div"),d(1,B,2,0,"div",16),i()),e&2){let u=v();o(),l("ngIf",u.showError("birthDay","required"))}}function P(e,r){e&1&&(t(0,"div",17),n(1," S\u1ED1 \u0111i\u1EC7n tho\u1EA1i kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng. "),i())}function V(e,r){if(e&1&&(t(0,"div"),d(1,P,2,0,"div",16),i()),e&2){let u=v();o(),l("ngIf",u.showError("phoneNumber","required"))}}function j(e,r){e&1&&(t(0,"div",17),n(1," M\xE3 nh\xE2n vi\xEAn kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng. "),i())}function L(e,r){if(e&1&&(t(0,"div"),d(1,j,2,0,"div",16),i()),e&2){let u=v();o(),l("ngIf",u.showError("userName","required"))}}function O(e,r){e&1&&(t(0,"div",17),n(1," C\xE2y b\xE1n h\xE0ng qu\u1EA3n l\xFD kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng. "),i())}function R(e,r){if(e&1&&(t(0,"div"),d(1,O,2,0,"div",16),i()),e&2){let u=v();o(),l("ngIf",u.showError("vendingMachine","required"))}}var ee=(()=>{let r=class r{constructor(s,m){this.fb=s,this.toastr=m}ngOnInit(){this.userForm=this.fb.group({fullName:["",[p.required]],birthDay:["",[p.required]],phoneNumber:["",[p.required]],userName:["",[p.required]],vendingMachine:["",[p.required]],dropdown:[[2,3],[p.required]]})}onCreateUser(){console.log(this.userForm.value)}validField(s){let m=this.userForm.get(s);return m.invalid&&(m.dirty||m.touched)}showError(s,m){let a=this.userForm.get(s);return a.hasError(m)&&a.touched}};r.\u0275fac=function(m){return new(m||r)(f(I),f(U))},r.\u0275cmp=h({type:r,selectors:[["app-create-user"]],standalone:!0,features:[C],decls:51,vars:16,consts:[[3,"formGroup"],[1,"row","mt-5"],[1,"col-md-2","col-sm-2","col-xs-6"],[1,"form-label","col-form-label"],[1,"required"],[1,"col-md-4","col-sm-4","col-xs-6"],["formControlName","fullName","maxlength","50","id","fullName",1,"form-control"],[4,"ngIf"],["formControlName","birthDay","type","date",1,"form-control","custom-date-input"],[1,"row","mt-3"],["formControlName","phoneNumber","maxlength","15",1,"form-control"],["formControlName","userName","maxlength","100",1,"form-control"],["formControlName","vendingMachine",3,"searchable","invalidSelection"],[1,"col-12","text-center"],["type","button",1,"btn","btn-primary-custom",3,"click"],[1,"fa","fa-plus"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(m,a){m&1&&(t(0,"form",0)(1,"h4"),n(2,"\u0110\u0103ng k\xFD th\xF4ng tin nh\xE2n vi\xEAn"),i(),t(3,"div",1)(4,"div",2)(5,"label",3),n(6," T\xEAn nh\xE2n vi\xEAn"),t(7,"span",4),n(8,"*"),i()()(),t(9,"div",5),c(10,"input",6),d(11,k,2,1,"div",7),i(),t(12,"div",2)(13,"label",3),n(14," Ng\xE0y sinh"),t(15,"span",4),n(16,"*"),i()()(),t(17,"div",5),c(18,"input",8),d(19,G,2,1,"div",7),i()(),t(20,"div",9)(21,"div",2)(22,"label",3),n(23," S\u1ED1 \u0111i\u1EC7n tho\u1EA1i"),t(24,"span",4),n(25,"*"),i()()(),t(26,"div",5),c(27,"input",10),d(28,V,2,1,"div",7),i(),t(29,"div",2)(30,"label",3),n(31," M\xE3 nh\xE2n vi\xEAn"),t(32,"span",4),n(33,"*"),i()()(),t(34,"div",5),c(35,"input",11),d(36,L,2,1,"div",7),i()(),t(37,"div",9)(38,"div",2)(39,"label",3),n(40," C\xE2y b\xE1n h\xE0ng qu\u1EA3n l\xFD"),t(41,"span",4),n(42,"*"),i()()(),t(43,"div",5),c(44,"app-selection",12),d(45,R,2,1,"div",7),i()(),t(46,"div",9)(47,"div",13)(48,"button",14),g("click",function(){return a.onCreateUser()}),c(49,"i",15),n(50," Th\xEAm m\u1EDBi "),i()()()()),m&2&&(l("formGroup",a.userForm),o(10),E("is-invalid",a.validField("fullName")),o(),l("ngIf",a.validField("fullName")),o(7),E("is-invalid",a.validField("birthDay")),o(),l("ngIf",a.validField("birthDay")),o(8),E("is-invalid",a.validField("phoneNumber")),o(),l("ngIf",a.validField("phoneNumber")),o(7),E("is-invalid",a.validField("userName")),o(),l("ngIf",a.validField("userName")),o(8),l("searchable",!1)("invalidSelection",a.validField("vendingMachine")),o(),l("ngIf",a.validField("vendingMachine")))},dependencies:[M,N,x,S,F,D,b,y,_,A,T,q]});let e=r;return e})();export{ee as CreateUserComponent};
