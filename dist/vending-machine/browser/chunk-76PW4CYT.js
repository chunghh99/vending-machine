import"./chunk-7AAVEFFA.js";import{a as M}from"./chunk-GDBLIAVQ.js";import{M as _}from"./chunk-WM4KOWIX.js";import"./chunk-4C57YJA5.js";import{a as B}from"./chunk-FFY5MW76.js";import{d as w,e as F,f as N,k as T,l as A,n as D,o as I,p as k}from"./chunk-BMRPHH6Q.js";import{d as C}from"./chunk-ZKHYNXEP.js";import{Ab as u,Bb as g,La as i,Lb as n,Ma as h,Mb as l,Tb as b,fb as x,ga as E,hb as a,qa as f,ra as v,rb as t,sb as e,tb as d,vc as y,xb as S}from"./chunk-3ZEQ7FCE.js";import"./chunk-4L4RMVSS.js";function j(c,o){if(c&1){let r=S();t(0,"tr")(1,"td",16),n(2),e(),t(3,"td",16),n(4),e(),t(5,"td",17),n(6),e(),t(7,"td",17),n(8),e(),t(9,"td",17),n(10),e(),t(11,"td",17),n(12),e(),t(13,"td",17),n(14),e(),t(15,"td",16)(16,"a",18),u("click",function(){let m=f(r).$implicit,s=g();return v(s.onDetail(m))}),d(17,"i",19),e(),t(18,"a",20),d(19,"i",21),e()()()}if(c&2){let r=o.$implicit;i(),a("width","5%"),i(),l(r.id),i(),a("width","5%"),i(),l(r.id),i(),a("width","30%"),i(),l(r.lastName),i(),a("width","30%"),i(),l(r.email),i(),a("width","30%"),i(),l(r.email),i(),a("width","30%"),i(),l(r.email),i(),a("width","30%"),i(),l(r.email),i(),a("width","5%"),i(),a("cTooltip","Chi ti\u1EBFt"),i(2),a("cTooltip","X\xF3a")}}var Q=(()=>{let o=class o{constructor(p,m){this.fb=p,this.router=m,this.itemList=[{id:1,firstName:"Johnddddddddddddddddddddd",lastName:"Doe",email:"john.doe@example.com"},{id:2,firstName:"Jane",lastName:"Doe",email:"jane.doe@example.com"},{id:3,firstName:"Alice",lastName:"Smith",email:"alice.smith@example.com"},{id:4,firstName:"Bob",lastName:"Johnson",email:"bob.johnson@example.com"},{id:5,firstName:"Emily",lastName:"Williams",email:"emily.williams@example.com"}]}ngOnInit(){this.form=this.fb.group({name:["",[w.required]]})}onSearch(){console.log(this.form.value)}onCreate(){this.router.navigate(["admin/advertisement-management/create"])}onDetail(p){this.router.navigate([`admin/advertisement-management/update/${p.id}`])}};o.\u0275fac=function(m){return new(m||o)(h(D),h(C))},o.\u0275cmp=E({type:o,selectors:[["app-advertisement-management"]],standalone:!0,features:[b],decls:42,vars:5,consts:[[1,"align-items-center",3,"formGroup"],[1,""],[1,"row","mt-3"],[1,"col-md-2","col-sm-4","col-xs-12"],[1,"form-label","col-form-label"],[1,"col-md-4","col-sm-8","col-xs-12"],["formControlName","name",3,"searchable"],[1,"col-12","text-center"],["type","button",1,"btn","btn-primary",3,"click"],[1,"fa","fa-search"],["type","button",1,"btn","btn-primary-custom","ml-20",3,"click"],[1,"fa","fa-plus"],[1,"table-responsive","radius-table",2,"width","100%!important"],[1,"table","table-striped","table-hover"],[4,"ngFor","ngForOf"],[3,"currentPage","totalItems"],[1,"text-center",3,"width"],[1,"min-width-cl",3,"width"],[1,"cursor-pointer","hover-color-red","font-size-18","color-black",3,"click","cTooltip"],[1,"fa","fa-pencil-square-o"],[1,"cursor-pointer","hover-color-red","font-size-18","ml-5","color-black",3,"cTooltip"],[1,"fa","fa-trash-o"]],template:function(m,s){m&1&&(t(0,"div",0)(1,"h4",1),n(2,"Qu\u1EA3n l\xFD qu\u1EA3ng c\xE1o"),e(),t(3,"div",2)(4,"div",3)(5,"label",4),n(6," T\xEAn qu\u1EA3ng c\xE1o"),e()(),t(7,"div",5),d(8,"app-selection",6),e()(),t(9,"div",2)(10,"div",7)(11,"button",8),u("click",function(){return s.onSearch()}),d(12,"i",9),n(13," T\xECm ki\u1EBFm"),e(),t(14,"button",10),u("click",function(){return s.onCreate()}),d(15,"i",11),n(16," Th\xEAm m\u1EDBi "),e()()(),t(17,"h5"),n(18,"Danh s\xE1ch qu\u1EA3ng c\xE1o"),e(),t(19,"div",12)(20,"table",13)(21,"thead")(22,"tr")(23,"th"),n(24,"#"),e(),t(25,"th"),n(26,"ID"),e(),t(27,"th"),n(28,"T\xEAn qu\u1EA3ng c\xE1o"),e(),t(29,"th"),n(30,"Hi\u1EC7u l\u1EF1c"),e(),t(31,"th"),n(32,"\u0110\u1ECBa \u0111i\u1EC3m"),e(),t(33,"th"),n(34,"T\xEAn m\xE1y"),e(),t(35,"th"),n(36,"V\u1ECB tr\xED"),e(),t(37,"th"),n(38,"Thao t\xE1c"),e()()(),t(39,"tbody"),x(40,j,20,17,"tr",14),e()()(),d(41,"app-pagination",15),e()),m&2&&(a("formGroup",s.form),i(8),a("searchable",!0),i(32),a("ngForOf",s.itemList),i(),a("currentPage",1)("totalItems",1e3))},dependencies:[I,F,N,k,T,A,B,y,M,_]});let c=o;return c})();export{Q as AdvertisementManagementComponent};
