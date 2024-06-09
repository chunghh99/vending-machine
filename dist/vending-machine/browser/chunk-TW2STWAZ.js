import{a as T,b as H}from"./chunk-C7XZ7IYY.js";import{Bb as w,Ca as r,Ga as d,I as c,Na as E,Oa as b,Ob as D,Pb as I,Y as f,Z as s,aa as C,ga as u,ha as g,ma as o,na as n,oa as y,va as x,wa as S,yb as v,zb as B}from"./chunk-YLZL6RMN.js";import{a as p,b as h}from"./chunk-4L4RMVSS.js";var M=["*"],O=(()=>{let t=class t{constructor(i,e){this.document=i,this.renderer=e}themeColors(){Array.from(this.document.querySelectorAll(".theme-color")).forEach(i=>{let e=i,a=T("background-color",e)??"#fff",m=this.renderer.createElement("table");m.innerHTML=`
          <table class="table w-100">
            <tr>
              <td class="text-muted">HEX:</td>
              <td class="font-weight-bold">${H(a)}</td>
            </tr>
            <tr>
              <td class="text-muted">RGB:</td>
              <td class="font-weight-bold">${a}</td>
            </tr>
          </table>
        `,this.renderer.appendChild(e.parentNode,m)})}ngOnInit(){}ngAfterViewInit(){this.themeColors()}};t.\u0275fac=function(e){return new(e||t)(s(E),s(C))},t.\u0275cmp=c({type:t,selectors:[["ng-component"]],standalone:!0,features:[d],decls:29,vars:0,consts:[[1,"mb-4"],["color","primary"],["color","secondary"],["color","success"],["color","danger"],["color","warning"],["color","info"],["color","light"],["color","dark"]],template:function(e,a){e&1&&(o(0,"c-card",0)(1,"c-card-header"),r(2," Theme colors "),n(),o(3,"c-card-body")(4,"c-row")(5,"app-theme-color",1)(6,"h6"),r(7,"Brand Primary Color"),n()(),o(8,"app-theme-color",2)(9,"h6"),r(10,"Brand Secondary Color"),n()(),o(11,"app-theme-color",3)(12,"h6"),r(13,"Brand Success Color"),n()(),o(14,"app-theme-color",4)(15,"h6"),r(16,"Brand Danger Color"),n()(),o(17,"app-theme-color",5)(18,"h6"),r(19,"Brand Warning Color"),n()(),o(20,"app-theme-color",6)(21,"h6"),r(22,"Brand Info Color"),n()(),o(23,"app-theme-color",7)(24,"h6"),r(25,"Brand Light Color"),n()(),o(26,"app-theme-color",8)(27,"h6"),r(28,"Brand Dark Color"),n()()()()())},dependencies:()=>[v,w,B,I,j],encapsulation:2});let l=t;return l})(),j=(()=>{let t=class t{constructor(){this.color="",this.colorClasses={"theme-color w-75 rounded mb-3":!0},this.display="contents"}ngOnInit(){this.colorClasses=h(p({},this.colorClasses),{[`bg-${this.color}`]:!!this.color})}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c({type:t,selectors:[["app-theme-color"]],hostVars:2,hostBindings:function(e,a){e&2&&g("display",a.display)},inputs:{color:"color"},standalone:!0,features:[d],ngContentSelectors:M,decls:3,vars:1,consts:[["xl","2","md","4","sm","6","xs","12",1,"my-4","ms-4"],[2,"padding-top","75%",3,"ngClass"]],template:function(e,a){e&1&&(x(),o(0,"c-col",0),y(1,"div",1),S(2),n()),e&2&&(f(),u("ngClass",a.colorClasses))},dependencies:[D,b],encapsulation:2});let l=t;return l})();export{O as ColorsComponent,j as ThemeColorComponent};
