import{j as M}from"./chunk-YFFVNROF.js";import{a as F}from"./chunk-WTMY4CEW.js";import"./chunk-C7XZ7IYY.js";import{Ca as d,Da as p,Ea as k,Ga as v,I as u,M as S,N as x,O as w,Pa as _,Qa as T,U as D,Y as r,Z as E,ea as m,ga as c,ia as h,ma as t,na as a,oa as b,sa as P,ta as f,ua as C}from"./chunk-YLZL6RMN.js";import"./chunk-4L4RMVSS.js";function L(n,i){n&1&&(t(0,"li",5)(1,"span",16),d(2,"..."),a()())}function W(n,i){if(n&1){let s=P();t(0,"li",5)(1,"a",17),f("click",function(){let o=x(s).$implicit,e=C();return w(e.setCurrentPage(o))}),d(2),a()()}if(n&2){let s=i.$implicit,l=C();r(),h("active",l.currentPage===s),r(),p(s)}}function N(n,i){n&1&&(t(0,"li",5)(1,"span",16),d(2,"..."),a()())}function V(n,i){if(n&1){let s=P();t(0,"li")(1,"a",18),f("click",function(){let o=x(s).$implicit,e=C();return w(e.changeItemsPerPage(o))}),d(2),a()()}if(n&2){let s=i.$implicit;r(2),p(s)}}var I=(()=>{let i=class i{constructor(){this.pageChange=new D,this.itemsPerPageOptions=[10,20,50],this.itemsPerPage=this.itemsPerPageOptions[0]}ngOnInit(){this.calculateTotalPages()}ngOnChanges(){this.calculateTotalPages()}calculateTotalPages(){this.totalPages=Math.ceil(this.totalItems/this.itemsPerPage),this.updateVisiblePages()}setCurrentPage(l){this.currentPage=l,this.pageChange.emit(this.currentPage),this.updateVisiblePages()}changeItemsPerPage(l){this.setCurrentPage(1),this.itemsPerPage=l,this.calculateTotalPages()}updateVisiblePages(){let o=Math.floor(2.5),e=0,g=0;this.totalPages<=5?(e=1,g=this.totalPages):this.currentPage<=o?(e=1,g=5):this.currentPage>=this.totalPages-o?(e=this.totalPages-5+1,g=this.totalPages):(e=this.currentPage-o,g=this.currentPage+o),this.visiblePages=[];for(let y=e;y<=g;y++)this.visiblePages.push(y)}};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=u({type:i,selectors:[["app-pagination"]],inputs:{totalItems:"totalItems",currentPage:"currentPage"},outputs:{pageChange:"pageChange"},standalone:!0,features:[S,v],decls:24,vars:9,consts:[["aria-label","Page navigation"],[1,"row"],[1,"col-6"],[1,"col-10"],[1,"pagination","justify-content-end"],[1,"page-item"],["href","#","aria-label","Previous",1,"page-link",3,"click"],["aria-hidden","true"],["class","page-item",4,"ngIf"],["class","page-item",4,"ngFor","ngForOf"],["href","#","aria-label","Next",1,"page-link",3,"click"],[1,"col-2"],[1,"dropdown",2,"float","right"],["type","button","id","itemsPerPageDropdown","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-secondary","dropdown-toggle"],["aria-labelledby","itemsPerPageDropdown",1,"dropdown-menu"],[4,"ngFor","ngForOf"],[1,"page-link"],["href","#",1,"page-link",3,"click"],["href","#",1,"dropdown-item",3,"click"]],template:function(o,e){o&1&&(t(0,"nav",0)(1,"div",1),b(2,"div",2),t(3,"div",2)(4,"div",1)(5,"div",3)(6,"ul",4)(7,"li",5)(8,"a",6),f("click",function(){return e.setCurrentPage(1)}),t(9,"span",7),d(10,"\xAB"),a()()(),m(11,L,3,0,"li",8)(12,W,3,3,"li",9)(13,N,3,0,"li",8),t(14,"li",5)(15,"a",10),f("click",function(){return e.setCurrentPage(e.totalPages)}),t(16,"span",7),d(17,"\xBB"),a()()()()(),t(18,"div",11)(19,"div",12)(20,"button",13),d(21),a(),t(22,"ul",14),m(23,V,3,1,"li",15),a()()()()()()()),o&2&&(r(7),h("disabled",e.currentPage===1),r(4),c("ngIf",e.currentPage>3),r(),c("ngForOf",e.visiblePages),r(),c("ngIf",e.currentPage<e.totalPages-2),r(),h("disabled",e.currentPage===e.totalPages),r(7),k(" ",e.itemsPerPage," "),r(2),c("ngForOf",e.itemsPerPageOptions))},dependencies:[_,T]});let n=i;return n})();function R(n,i){if(n&1&&(t(0,"tr")(1,"td",5),d(2),a(),t(3,"td",6),d(4),a(),t(5,"td",6),d(6),a(),t(7,"td",6),d(8),a()()),n&2){let s=i.$implicit;r(2),p(s.id),r(2),p(s.firstName),r(2),p(s.lastName),r(2),p(s.email)}}var re=(()=>{let i=class i{constructor(l){this.spinnerService=l,this.users=[{id:1,firstName:"Johndddddddddddddddddddddddddddddddddddddd\u0111gggggggggggggggddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddd\u0111gggggggggggggggddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddd\u0111gggggggggggggggddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddd\u0111gggggggggggggggddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddd\u0111gggggggggggggggddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg",lastName:"Doe",email:"john.doe@example.com"},{id:2,firstName:"Jane",lastName:"Doe",email:"jane.doe@example.com"},{id:3,firstName:"Alice",lastName:"Smith",email:"alice.smith@example.com"},{id:4,firstName:"Bob",lastName:"Johnson",email:"bob.johnson@example.com"},{id:5,firstName:"Emily",lastName:"Williams",email:"emily.williams@example.com"}]}ngOnInit(){this.spinnerService.show(),setTimeout(()=>{this.spinnerService.hide()},500)}};i.\u0275fac=function(o){return new(o||i)(E(F))},i.\u0275cmp=u({type:i,selectors:[["ng-component"]],standalone:!0,features:[v],decls:17,vars:3,consts:[[1,"table-responsive",2,"width","100%!important"],[1,"table","table-striped","table-hover"],["width","5%"],[4,"ngFor","ngForOf"],[3,"currentPage","totalItems"],["width","10%"],["width","30%"]],template:function(o,e){o&1&&(t(0,"h1"),d(1,"Ch\xE0o m\u1EEBng \u0111\u1EBFn v\u1EDBi h\u1EC7 th\u1ED1ng qu\u1EA3n l\xFD m\xE1y b\xE1n h\xE0ng t\u1EF1 \u0111\u1ED9ng"),a(),t(2,"div",0)(3,"table",1)(4,"thead")(5,"tr")(6,"th",2),d(7,"#"),a(),t(8,"th"),d(9,"First Name"),a(),t(10,"th"),d(11,"Last Name"),a(),t(12,"th"),d(13,"Email"),a()()(),t(14,"tbody"),m(15,R,9,4,"tr",3),a()()(),b(16,"app-pagination",4)),o&2&&(r(15),c("ngForOf",e.users),r(),c("currentPage",1)("totalItems",1e3))},dependencies:[M,_,I],styles:['@charset "UTF-8";[_nghost-%COMP%]   .legend[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:x-small}.table[_ngcontent-%COMP%]{background-color:#f8f9fa}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#007bff}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{color:#6c757d}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#e9ecef}.table[_ngcontent-%COMP%]{min-width:800px!important}.table[_ngcontent-%COMP%]{border:1px solid #dee2e6}.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #dee2e6;text-align:center}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #dee2e6;white-space:normal;word-break:break-word}']});let n=i;return n})();export{re as DashboardComponent};
