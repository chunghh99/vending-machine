var p=Object.defineProperty,q=Object.defineProperties;var r=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var k=(a,b,c)=>b in a?p(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,s=(a,b)=>{for(var c in b||={})l.call(b,c)&&k(a,c,b[c]);if(f)for(var c of f(b))m.call(b,c)&&k(a,c,b[c]);return a},t=(a,b)=>q(a,r(b));var u=(a,b)=>{var c={};for(var d in a)l.call(a,d)&&b.indexOf(d)<0&&(c[d]=a[d]);if(a!=null&&f)for(var d of f(a))b.indexOf(d)<0&&m.call(a,d)&&(c[d]=a[d]);return c};var i=(a,b,c)=>{if(!b.has(a))throw TypeError("Cannot "+c)};var v=(a,b,c)=>(i(a,b,"read from private field"),c?c.call(a):b.get(a)),w=(a,b,c)=>{if(b.has(a))throw TypeError("Cannot add the same private member more than once");b instanceof WeakSet?b.add(a):b.set(a,c)},x=(a,b,c,d)=>(i(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c);var y=(a,b,c)=>(i(a,b,"access private method"),c);var z=(a,b,c)=>new Promise((d,j)=>{var n=e=>{try{g(c.next(e))}catch(h){j(h)}},o=e=>{try{g(c.throw(e))}catch(h){j(h)}},g=e=>e.done?d(e.value):Promise.resolve(e.value).then(n,o);g((c=c.apply(a,b)).next())});export{s as a,t as b,u as c,v as d,w as e,x as f,y as g,z as h};