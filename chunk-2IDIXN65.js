var o=":";function a(t,e){for(let i=1,n=1;i<t.length;i++,n++)if(e[n]==="\\")n++;else if(t[i]===o)return i;throw new Error(`Unterminated $localize metadata block in "${e}".`)}var r=function(t,...e){if(r.translate){let n=r.translate(t,e);t=n[0],e=n[1]}let i=s(t[0],t.raw[0]);for(let n=1;n<t.length;n++)i+=e[n-1]+s(t[n],t.raw[n]);return i},l=":";function s(t,e){return e.charAt(0)===l?t.substring(a(t,e)+1):t}globalThis.$localize=r;export{r as a};
