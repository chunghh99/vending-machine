import{a as te}from"./chunk-B5M6CCOG.js";import{a as Z}from"./chunk-3XWC6RHE.js";import{a as X}from"./chunk-NBDY2TBX.js";import{b as ee}from"./chunk-EGJNLWBA.js";import{a as Y}from"./chunk-OPDTKCI5.js";import{a as W}from"./chunk-G55IM4YV.js";import{a as Q}from"./chunk-BKZFVQBW.js";import{a as K}from"./chunk-CI3TO52C.js";import{a as S}from"./chunk-ZJO5XFAT.js";import{c as P,d as u,e as O,f as G,k as M,l as R,m as $,n as H,s as z,u as J}from"./chunk-3AEYLFKI.js";import{a as B}from"./chunk-HNKJNLW6.js";import"./chunk-AFJOMKLS.js";import{b as k,d as q}from"./chunk-TN45MXFT.js";import"./chunk-4C57YJA5.js";import{Ab as w,Bc as N,Cb as L,Cc as V,Fb as C,Gb as g,Ma as T,Mc as j,Qa as m,Qb as d,Ra as h,Sb as F,Yb as U,ba as _,ga as y,kb as f,la as A,mb as l,va as b,wa as x,wb as s,xb as r,yb as E,zb as D}from"./chunk-ZFL4TBTD.js";import"./chunk-4L4RMVSS.js";var ie=(()=>{let a=class a{constructor(t){this.httpClient=t,this.apiUrl="",this.apiUrl=Q.apiUrl}getAllSlot(){return this.httpClient.get(`${this.apiUrl}/slots`)}createSlot(t,e){return this.httpClient.post(`${this.apiUrl}/slots/${e}`,t)}updateSlot(t,e){return this.httpClient.put(`${this.apiUrl}/slots/${e}`,t)}replaceAllByDeviceId(t,e){return this.httpClient.post(`${this.apiUrl}/slots/replace-all/${e}`,t)}};a.\u0275fac=function(e){return new(e||a)(y(j))},a.\u0275prov=_({token:a,factory:a.\u0275fac,providedIn:"root"});let n=a;return n})();function le(n,a){n&1&&(s(0,"div",18),d(1," \u0110\u1ECBa \u0111i\u1EC3m kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng. "),r())}function me(n,a){if(n&1&&(s(0,"div"),f(1,le,2,0,"div",17),r()),n&2){let p=g();m(),l("ngIf",p.showError("location","required"))}}function ce(n,a){n&1&&(s(0,"div",18),d(1," C\xE2y b\xE1n h\xE0ng kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng. "),r())}function de(n,a){if(n&1&&(s(0,"div"),f(1,ce,2,0,"div",17),r()),n&2){let p=g();m(),l("ngIf",p.showError("deviceId","required"))}}function ue(n,a){if(n&1&&E(0,"img",26),n&2){let p,t=g().$implicit;l("src",(p=t.get("image"))==null?null:p.value,T)}}function pe(n,a){n&1&&(s(0,"div",18),d(1," S\u1EA3n ph\u1EA9m kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng. "),r())}function he(n,a){n&1&&(s(0,"div",18),d(1," C\xF2n l\u1EA1i kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng. "),r())}function ve(n,a){n&1&&(s(0,"div",18),d(1," T\u1ED1i \u0111a kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng. "),r())}function fe(n,a){if(n&1){let p=L();s(0,"tr",19)(1,"td",20),d(2),r(),s(3,"td",21),f(4,ue,1,1,"img",22),r(),s(5,"td",20)(6,"app-selection",23),C("onChangeValue",function(e){let i=b(p).index,o=g();return x(o.onItemSelected(e,i))}),r(),f(7,pe,2,0,"div",17),r(),s(8,"td",20),E(9,"input",24),f(10,he,2,0,"div",17),r(),s(11,"td",20),E(12,"input",25),f(13,ve,2,0,"div",17),r()()}if(n&2){let p,t=a.$implicit,e=a.index,i=g();l("formGroupName",e),m(),l("width","5%"),m(),F(" ",e+1," "),m(),l("width","20%"),m(),l("ngIf",(p=t.get("image"))==null?null:p.value),m(),l("width","20%"),m(),l("searchable",!0)("multiple",!1)("items",i.itemList),m(),l("ngIf",i.showErrorArray("items",e,"currentItemId","required")),m(),l("width","20%"),m(2),l("ngIf",i.showErrorArray("items",e,"remainingAmount","required")),m(),l("width","20%"),m(2),l("ngIf",i.showErrorArray("items",e,"maxItem","required"))}}var Ue=(()=>{let a=class a{constructor(t,e,i,o,c,v,I,ne,re,oe){this.fb=t,this.route=e,this.router=i,this.spinner=o,this.toast=c,this.deviceService=v,this.paymentMethodService=I,this.modalService=ne,this.itemService=re,this.slotService=oe,this.action="CREATE",this.deviceList=[],this.itemList=[],this.slotList=[],this.deviceListAfterSelect=[],this.locationList=[],this.isUpdate=!1}ngOnInit(){this.formSave=this.fb.group({location:[""],deviceId:["",[u.required]],items:this.fb.array([])}),this.locationList=S.LOCATION,this.getAllDevice(),this.getAllItems(),this.getAllSlot()}get items(){return this.formSave.get("items")}getAllDevice(){this.spinner.show(),this.deviceService.getAllDevice().subscribe(t=>{this.spinner.hide(),t&&t.status&&t.status.code==S.STATUS.SUCCESS&&(t.data.forEach(e=>{e.value=e.name,e.key=e.id}),this.deviceListAfterSelect=this.deviceList=t.data,console.log("data payment method: ",this.deviceList))})}getAllItems(){this.spinner.show(),this.itemService.getAllItem().subscribe(t=>{console.log("item res: ",t),this.spinner.hide(),t&&t.status&&t.status.code===S.STATUS.SUCCESS&&t.data&&t.data.length>0&&(t.data.forEach(e=>{e.value=e.name,e.key=e.id}),this.itemList=t.data.filter(e=>e.status===S.ITEM_STATUS.ACTIVE))},t=>{this.spinner.hide()})}getAllSlot(t){this.spinner.show(),this.slotService.getAllSlot().subscribe(e=>{console.log("item res: ",e),this.spinner.hide(),e&&e.status&&e.status.code===S.STATUS.SUCCESS&&e.data&&e.data.length>0&&(e.data.forEach(i=>{i.value=i.name,i.key=i.id}),this.slotList=e.data,t&&t==="CREATE"&&this.onSelectDevice(this.formSave.get("deviceId").value))},e=>{this.spinner.hide()})}onSelectLocation(t){let e=this.locationList.find(i=>i.key===t);this.deviceListAfterSelect=this.deviceList.filter(i=>i.locationText.includes(e.value)),console.log("onSelectLocation",t,this.deviceListAfterSelect),this.formSave.get("deviceId").setValue("")}onSelectDevice(t){this.formSave.setControl("items",this.fb.array([]));let e=this.slotList.filter(o=>o.deviceId===t);if(console.log("slotList: ",e,t),e&&e.length>0){e.forEach(o=>{let c=this.itemList.find(I=>I.id===o.currentItemId),v=this.fb.group({image:[c.image,[u.required]],currentItemId:[o.currentItemId,[u.required]],remainingAmount:[o.remainingAmount,[u.required,u.min(0)]],maxItem:[o.maxItem,[u.required,u.min(0)]],type:[c.type],id:[o.id]});this.items.push(v)}),this.isUpdate=!0;return}let i=this.deviceList.find(o=>o.id===t);console.log("onSelectDevice",t,i);for(let o=0;o<i.slotAmount;o++){let c=this.fb.group({image:["",[u.required]],currentItemId:["",[u.required]],remainingAmount:["",[u.required,u.min(0)]],maxItem:["",[u.required,u.min(0)]],type:[""]});this.items.push(c)}this.isUpdate=!1}onItemSelected(t,e){let i=this.formSave.get("items"),o=this.itemList.find(c=>c.id===t);o&&i.at(e).patchValue({image:o.image,type:o.type})}convertFormToBody(t){return this.formSave.get("items").controls.map(i=>{let o=i.value,c={};return Object.keys(t).forEach(v=>{c[t[v]]=o[v]}),c})}onUpdate(){if(console.log("form save update",this.formSave.value),this.formSave.invalid){this.formSave.markAllAsTouched(),this.formSave.markAsDirty(),this.formSave.updateValueAndValidity();return}let t={currentItemId:"currentItemId",remainingAmount:"remainingAmount",maxItem:"maxItem",type:"type"};this.isUpdate&&Object.assign(t,{id:"id"});let e=this.convertFormToBody(t);e.forEach(i=>{i.rowNumber=1,i.columnNumber=1,i.displayId="A1",i.remainingAmount=Number(i.remainingAmount),i.maxItem=Number(i.maxItem)}),console.log("body",e),this.isUpdate?this.updateSlot(e,this.formSave.get("deviceId").value):this.createSlot(e,this.formSave.get("deviceId").value)}createSlot(t,e){this.spinner.show(),this.slotService.createSlot(t,e).subscribe(i=>{console.log("res createSlot",i),this.spinner.hide(),i&&i.status&&i.status.code===S.STATUS.SUCCESS?(this.toast.success("C\u1EADp nh\u1EADt th\xE0nh c\xF4ng","Th\xF4ng b\xE1o"),this.getAllSlot("CREATE")):this.toast.error("C\u1EADp nh\u1EADt th\u1EA5t b\u1EA1i","Th\xF4ng b\xE1o")},i=>{this.spinner.hide()})}updateSlot(t,e){this.spinner.show(),this.slotService.replaceAllByDeviceId(t,e).subscribe(i=>{console.log("res updateSlot",i),this.spinner.hide(),i&&i.status&&i.status.code===S.STATUS.SUCCESS?(this.toast.success("C\u1EADp nh\u1EADt th\xE0nh c\xF4ng","Th\xF4ng b\xE1o"),this.getAllSlot()):this.toast.error("C\u1EADp nh\u1EADt th\u1EA5t b\u1EA1i","Th\xF4ng b\xE1o")},i=>{this.spinner.hide()})}validField(t){let e=this.formSave.get(t);return e.invalid&&(e.dirty||e.touched)}showError(t,e){let i=this.formSave.get(t);return i.hasError(e)&&i.touched}showErrorArray(t,e,i,o){let c=this.formSave.get(t);if(!c)return!1;let v=c.at(e)?.get(i);return v?v.hasError(o)&&v.touched:!1}};a.\u0275fac=function(e){return new(e||a)(h(z),h(k),h(q),h(B),h(Y),h(W),h(Z),h(ee),h(te),h(ie))},a.\u0275cmp=A({type:a,selectors:[["app-process-device"]],standalone:!0,features:[U],decls:40,vars:10,consts:[[1,"align-items-center",3,"formGroup"],[1,"row"],[1,"col-md-2","col-sm-4","col-xs-12","mt-3"],[1,"form-label","col-form-label"],[1,"col-md-4","col-sm-8","col-xs-12","mt-3"],["formControlName","location",3,"onChangeValue","searchable","multiple","items"],[4,"ngIf"],["formControlName","deviceId",3,"onChangeValue","searchable","multiple","items"],[1,"mt-3"],[1,"table-responsive","radius-table",2,"width","100%!important"],[1,"table","table-striped","table-hover"],["formArrayName","items"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"row","mt-3"],[1,"col-12","text-center"],["type","button",1,"btn","btn-primary-custom","ml-20",3,"click"],[1,"fa","fa-plus"],["class","error-message",4,"ngIf"],[1,"error-message"],[3,"formGroupName"],[1,"min-width-cl",3,"width"],[1,"min-width-cl","text-center",3,"width"],["alt","","style","width: 100px; height: 100px",3,"src",4,"ngIf"],["formControlName","currentItemId",3,"onChangeValue","searchable","multiple","items"],["type","text","formControlName","remainingAmount","appOnlyNumber","",1,"form-control"],["type","text","formControlName","maxItem","appOnlyNumber","",1,"form-control"],["alt","",2,"width","100px","height","100px",3,"src"]],template:function(e,i){e&1&&(s(0,"div",0)(1,"h4"),d(2,"V\u1EADn h\xE0nh thi\u1EBFt b\u1ECB"),r(),s(3,"div",1)(4,"div",2)(5,"label",3),d(6," \u0110\u1ECBa \u0111i\u1EC3m"),r()(),s(7,"div",4)(8,"app-selection",5),C("onChangeValue",function(c){return i.onSelectLocation(c)}),r(),f(9,me,2,1,"div",6),r(),s(10,"div",2)(11,"label",3),d(12," C\xE2y b\xE1n h\xE0ng"),r()(),s(13,"div",4)(14,"app-selection",7),C("onChangeValue",function(c){return i.onSelectDevice(c)}),r(),f(15,de,2,1,"div",6),r()(),s(16,"h5",8),d(17,"Danh s\xE1ch s\u1EA3n ph\u1EA9m"),r(),s(18,"div",9)(19,"table",10)(20,"thead")(21,"tr")(22,"th"),d(23,"Slot"),r(),s(24,"th"),d(25,"H\xECnh \u1EA3nh"),r(),s(26,"th"),d(27,"S\u1EA3n ph\u1EA9m"),r(),s(28,"th"),d(29,"C\xF2n l\u1EA1i"),r(),s(30,"th"),d(31,"T\u1ED1i \u0111a"),r()()(),s(32,"tbody"),D(33,11),f(34,fe,14,14,"tr",12),w(),r()()(),s(35,"div",13)(36,"div",14)(37,"button",15),C("click",function(){return i.onUpdate()}),E(38,"i",16),d(39," C\u1EADp nh\u1EADt "),r()()()()),e&2&&(l("formGroup",i.formSave),m(8),l("searchable",!0)("multiple",!1)("items",i.locationList),m(),l("ngIf",i.validField("location")),m(5),l("searchable",!0)("multiple",!1)("items",i.deviceListAfterSelect),m(),l("ngIf",i.validField("deviceId")),m(19),l("ngForOf",i.items.controls))},dependencies:[K,J,P,O,G,M,H,R,$,V,N,X]});let n=a;return n})();export{Ue as ProcessDeviceComponent};
