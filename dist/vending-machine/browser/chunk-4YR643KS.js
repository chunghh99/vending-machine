import{a as w}from"./chunk-Q22AHIAB.js";import"./chunk-GV7VMIOQ.js";import"./chunk-AIHPWGIQ.js";import{p as T}from"./chunk-DYYFGZU4.js";import{Ba as O,Bb as e,Bc as v,Cb as t,Cc as N,Db as S,Hb as I,Kb as P,Lb as _,Ob as F,Ub as n,Vb as m,Wb as y,Xa as a,Xb as k,Ya as M,Zb as f,ga as h,pb as u,qa as x,ra as E,rb as p,sa as b,tb as C}from"./chunk-SOYHKUIL.js";import"./chunk-4L4RMVSS.js";function J(d,o){d&1&&(e(0,"li",6)(1,"span",15),n(2,"..."),t()())}function V(d,o){if(d&1){let r=I();e(0,"li",6)(1,"a",16),P("click",function(){let l=E(r).$implicit,i=_();return b(i.setCurrentPage(l))}),n(2),t()()}if(d&2){let r=o.$implicit,s=_();a(),C("active",s.currentPage===r),a(),m(r)}}function j(d,o){d&1&&(e(0,"li",6)(1,"span",15),n(2,"..."),t()())}function A(d,o){if(d&1&&(e(0,"option",17),n(1),t()),d&2){let r=o.$implicit;F("value",r),a(),y("",r," ")}}var D=(()=>{let o=class o{constructor(){this.pageChange=new O,this.itemsPerPageOptions=[10,20,50],this.itemsPerPage=this.itemsPerPageOptions[0]}ngOnInit(){this.calculateTotalPages()}ngOnChanges(){this.calculateTotalPages()}calculateTotalPages(){this.totalPages=Math.ceil(this.totalItems/this.itemsPerPage),this.updateVisiblePages()}setCurrentPage(s){this.currentPage=s,this.pageChange.emit(this.currentPage),this.updateVisiblePages()}changeItemsPerPage(s){this.setCurrentPage(1),this.itemsPerPage=s.target.value,this.calculateTotalPages()}updateVisiblePages(){let l=Math.floor(2.5),i=0,c=0;this.totalPages<=5?(i=1,c=this.totalPages):this.currentPage<=l?(i=1,c=5):this.currentPage>=this.totalPages-l?(i=this.totalPages-5+1,c=this.totalPages):(i=this.currentPage-l,c=this.currentPage+l),this.visiblePages=[];for(let g=i;g<=c;g++)this.visiblePages.push(g)}};o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=h({type:o,selectors:[["app-pagination"]],inputs:{totalItems:"totalItems",currentPage:"currentPage"},outputs:{pageChange:"pageChange"},standalone:!0,features:[x,f],decls:24,vars:10,consts:[["aria-label","Page navigation",1,"mt-3","pagination-custom"],[1,"row","align-items-center"],[1,"col-6"],[1,"row"],[1,"col-10"],[1,"pagination","justify-content-end"],[1,"page-item"],["aria-label","Previous","aria-disabled","true",1,"page-link","cursor-pointer",3,"click"],["aria-hidden","true"],["class","page-item",4,"ngIf"],["class","page-item",4,"ngFor","ngForOf"],["aria-label","Next","aria-disabled","true",1,"page-link","cursor-pointer",3,"click"],[1,"col-2"],["aria-label",".form-select-lg example cursor-pointer",1,"form-select","form-select-lg","mb-3",3,"change"],["class","cursor-pointer",3,"value",4,"ngFor","ngForOf"],[1,"page-link"],["aria-disabled","true",1,"page-link","cursor-pointer",3,"click"],[1,"cursor-pointer",3,"value"]],template:function(l,i){l&1&&(e(0,"nav",0)(1,"div",1)(2,"div",2)(3,"h6"),n(4),t()(),e(5,"div",2)(6,"div",3)(7,"div",4)(8,"ul",5)(9,"li",6)(10,"a",7),P("click",function(){return i.setCurrentPage(1)}),e(11,"span",8),n(12,"\xAB"),t()()(),u(13,J,3,0,"li",9)(14,V,3,3,"li",10)(15,j,3,0,"li",9),e(16,"li",6)(17,"a",11),P("click",function(){return i.setCurrentPage(i.totalPages)}),e(18,"span",8),n(19,"\xBB"),t()()()()(),e(20,"div",12)(21,"div")(22,"select",13),P("change",function(g){return i.changeItemsPerPage(g)}),u(23,A,2,2,"option",14),t()()()()()()()),l&2&&(a(4),k("Hi\u1EC3n th\u1ECB trang ",i.currentPage,"/",i.totalPages,""),a(5),C("disabled",i.currentPage===1),a(4),p("ngIf",i.currentPage>3),a(),p("ngForOf",i.visiblePages),a(),p("ngIf",i.currentPage<i.totalPages-2),a(),C("disabled",i.currentPage===i.totalPages),a(7),p("ngForOf",i.itemsPerPageOptions))},dependencies:[v,N],styles:['@charset "UTF-8";select.form-select[_ngcontent-%COMP%]{height:2.5rem;font-size:12px}.pagination[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{background-color:#fff;color:#5a4181}.pagination[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .pagination[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover, .pagination[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:focus, .pagination[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:hover{color:#5a5a5a;background-color:#eee;border-color:#ddd}.page-link[_ngcontent-%COMP%]:active{border-color:#ee0032!important;box-shadow:0 0 5px red}a.page-link[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{border:1px solid #ee0032!important}.pagination[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a.active[_ngcontent-%COMP%]{background-color:#ee0032!important;color:#fff!important;border:1px solid #ddd!important}.pagination[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus{border-color:#ee0032!important;box-shadow:0 0 5px #ee0032}.pagination[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:active{background-color:#ee0032!important;color:#fff}.form-select[_ngcontent-%COMP%]:active{box-shadow:0 0 5px #ee0032!important;border:1px solid red!important}.form-select[_ngcontent-%COMP%]:focus{box-shadow:0 0 5px #ee0032!important;border:1px solid red!important}']});let d=o;return d})();function $(d,o){if(d&1&&(e(0,"tr")(1,"td",4),n(2),t(),e(3,"td",5),n(4),t(),e(5,"td",5),n(6),t(),e(7,"td",5),n(8),t(),e(9,"td",5),n(10),t(),e(11,"td",5),n(12),t(),e(13,"td",5),n(14),t(),e(15,"td",5),n(16),t(),e(17,"td",5),n(18),t()()),d&2){let r=o.$implicit;a(2),m(r.id),a(2),m(r.firstName),a(2),m(r.lastName),a(2),m(r.email),a(2),m(r.email),a(2),m(r.email),a(2),m(r.email),a(2),m(r.email),a(2),m(r.email)}}var Y=(()=>{let o=class o{constructor(s){this.spinnerService=s,this.users=[{id:1,firstName:"JohnddddddddddddddddddddddddddddJohnddddddddddddddddddddddddddddJohnddddddddddddddddddddddddddddJohnddddddddddddddddddddddddddddJohnddddddddddddddddddddddddddddJohnddddddddddddddddddddddddddddJohndddddddddddddddddddddddddddd",lastName:"Doe",email:"john.doe@example.com"},{id:2,firstName:"Jane",lastName:"Doe",email:"jane.doe@example.com"},{id:3,firstName:"Alice",lastName:"Smith",email:"alice.smith@example.com"},{id:4,firstName:"Bob",lastName:"Johnson",email:"bob.johnson@example.com"},{id:5,firstName:"Emily",lastName:"Williams",email:"emily.williams@example.com"}]}ngOnInit(){this.spinnerService.show(),setTimeout(()=>{this.spinnerService.hide()},500)}};o.\u0275fac=function(l){return new(l||o)(M(w))},o.\u0275cmp=h({type:o,selectors:[["ng-component"]],standalone:!0,features:[f],decls:27,vars:3,consts:[[1,"table-responsive","radius-table",2,"width","100%!important"],[1,"table","table-striped","table-hover"],[4,"ngFor","ngForOf"],[3,"currentPage","totalItems"],["width","5%",1,"text-center"],["width","30%",1,"min-width-cl"]],template:function(l,i){l&1&&(e(0,"h1"),n(1,"Ch\xE0o m\u1EEBng \u0111\u1EBFn v\u1EDBi h\u1EC7 th\u1ED1ng qu\u1EA3n l\xFD m\xE1y b\xE1n h\xE0ng t\u1EF1 \u0111\u1ED9ng"),t(),e(2,"div",0)(3,"table",1)(4,"thead")(5,"tr")(6,"th"),n(7,"#"),t(),e(8,"th"),n(9,"First Name"),t(),e(10,"th"),n(11,"Last Name"),t(),e(12,"th"),n(13,"Email"),t(),e(14,"th"),n(15,"Email"),t(),e(16,"th"),n(17,"Email"),t(),e(18,"th"),n(19,"Email"),t(),e(20,"th"),n(21,"Email"),t(),e(22,"th"),n(23,"Email"),t()()(),e(24,"tbody"),u(25,$,19,9,"tr",2),t()()(),S(26,"app-pagination",3)),l&2&&(a(25),p("ngForOf",i.users),a(),p("currentPage",1)("totalItems",1e3))},dependencies:[T,v,D],styles:["[_nghost-%COMP%]   .legend[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:x-small}"]});let d=o;return d})();export{Y as DashboardComponent};