var Ht=Object.create;var xt=Object.defineProperty;var bt=Object.getOwnPropertyDescriptor;var Gt=Object.getOwnPropertyNames;var qt=Object.getPrototypeOf,Yt=Object.prototype.hasOwnProperty;var Wt=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var Nt=(n,t,r,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Gt(t))!Yt.call(n,i)&&i!==r&&xt(n,i,{get:()=>t[i],enumerable:!(e=bt(t,i))||e.enumerable});return n};var Xt=(n,t,r)=>(r=n!=null?Ht(qt(n)):{},Nt(t||!n||!n.__esModule?xt(r,"default",{value:n,enumerable:!0}):r,n));var zt=Wt((at,ot)=>{(function(n,t){typeof define=="function"&&define.amd?define([],t):typeof at<"u"?t():(t(),n.FileSaver={})})(at,function(){"use strict";function n(o,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(o.type)?new Blob(["\uFEFF",o],{type:o.type}):o}function t(o,u,l){var s=new XMLHttpRequest;s.open("GET",o),s.responseType="blob",s.onload=function(){f(s.response,u,l)},s.onerror=function(){console.error("could not download file")},s.send()}function r(o){var u=new XMLHttpRequest;u.open("HEAD",o,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function e(o){try{o.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),o.dispatchEvent(u)}}var i=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof global=="object"&&global.global===global?global:void 0,a=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),f=i.saveAs||(typeof window!="object"||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(o,u,l){var s=i.URL||i.webkitURL,h=document.createElement("a");u=u||o.name||"download",h.download=u,h.rel="noopener",typeof o=="string"?(h.href=o,h.origin===location.origin?e(h):r(h.href)?t(o,u,l):e(h,h.target="_blank")):(h.href=s.createObjectURL(o),setTimeout(function(){s.revokeObjectURL(h.href)},4e4),setTimeout(function(){e(h)},0))}:"msSaveOrOpenBlob"in navigator?function(o,u,l){if(u=u||o.name||"download",typeof o!="string")navigator.msSaveOrOpenBlob(n(o,l),u);else if(r(o))t(o,u,l);else{var s=document.createElement("a");s.href=o,s.target="_blank",setTimeout(function(){e(s)})}}:function(o,u,l,s){if(s=s||open("","_blank"),s&&(s.document.title=s.document.body.innerText="downloading..."),typeof o=="string")return t(o,u,l);var h=o.type==="application/octet-stream",g=/constructor/i.test(i.HTMLElement)||i.safari,y=/CriOS\/[\d]+/.test(navigator.userAgent);if((y||h&&g||a)&&typeof FileReader<"u"){var m=new FileReader;m.onloadend=function(){var T=m.result;T=y?T:T.replace(/^data:[^;]*;/,"data:attachment/file;"),s?s.location.href=T:location=T,s=null},m.readAsDataURL(o)}else{var w=i.URL||i.webkitURL,x=w.createObjectURL(o);s?s.location=x:location.href=x,s=null,setTimeout(function(){w.revokeObjectURL(x)},4e4)}});i.saveAs=f.saveAs=f,typeof ot<"u"&&(ot.exports=f)})});var Kt=["\u04A0\u04BF\u0500\u051F\u0680\u06BF\u0760\u079F\u07C0\u07DF\u1000\u101F\u10A0\u10BF\u1100\u115F\u1180\u119F\u11E0\u123F\u1260\u127F\u12E0\u12FF\u1320\u133F\u13A0\u13DF\u1420\u165F\u16A0\u16DF\u1780\u179F\u1820\u185F\u18C0\u18DF\u1980\u199F\u19E0\u19FF\u1A20\u1A3F\u1BC0\u1BDF\u1C00\u1C1F\u1D00\u1D1F\u21E0\u21FF\u22C0\u22DF\u2340\u23DF\u2400\u241F\u2500\u275F\u2780\u27BF\u2800\u297F\u29A0\u29BF\u2A20\u2A5F\u2A80\u2ABF\u2AE0\u2B5F\u2C00\u2C1F\u2C80\u2CDF\u2D00\u2D1F\u2D40\u2D5F\u2EA0\u2EDF\u31C0\u31DF\u3400\u4D9F\u4DC0\u9FBF\uA000\uA47F\uA4A0\uA4BF\uA500\uA5FF\uA640\uA65F\uA6A0\uA6DF\uA700\uA75F\uA780\uA79F\uA840\uA85F","\u0180\u019F\u0240\u029F"],Jt={},it={};Kt.forEach((n,t)=>{let r=[];n.match(/../gu).forEach(i=>{let a=i.codePointAt(0),f=i.codePointAt(1);for(let o=a;o<=f;o++)r.push(String.fromCodePoint(o))});let e=15-8*t;Jt[e]=r,r.forEach((i,a)=>{it[i]=[e,a]})});var dt=n=>{let t=n.length,r=new Uint8Array(Math.floor(t*15/8)),e=0,i=0,a=0;for(let f=0;f<t;f++){let o=n.charAt(f);if(!(o in it))throw new Error(`Unrecognised Base32768 character: ${o}`);let[u,l]=it[o];if(u!==15&&f!==t-1)throw new Error("Secondary character found before end of input at position "+String(f));for(let s=u-1;s>=0;s--){let h=l>>s&1;i=(i<<1)+h,a++,a===8&&(r[e]=i,e++,i=0,a=0)}}if(i!==(1<<a)-1)throw new Error("Padding mismatch");return new Uint8Array(r.buffer,0,e)};var kt=Xt(zt(),1);var E=Uint8Array,F=Uint16Array,vt=Int32Array,ct=new E([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),pt=new E([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),At=new E([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),It=function(n,t){for(var r=new F(31),e=0;e<31;++e)r[e]=t+=1<<n[e-1];for(var i=new vt(r[30]),e=1;e<30;++e)for(var a=r[e];a<r[e+1];++a)i[a]=a-r[e]<<5|e;return{b:r,r:i}},Rt=It(ct,2),Qt=Rt.b,ft=Rt.r;Qt[28]=258,ft[258]=28;var Ft=It(pt,0),yn=Ft.b,St=Ft.r,ut=new F(32768);for(c=0;c<32768;++c)$=(c&43690)>>1|(c&21845)<<1,$=($&52428)>>2|($&13107)<<2,$=($&61680)>>4|($&3855)<<4,ut[c]=(($&65280)>>8|($&255)<<8)>>1;var $,c,Q=function(n,t,r){for(var e=n.length,i=0,a=new F(t);i<e;++i)n[i]&&++a[n[i]-1];var f=new F(t);for(i=1;i<t;++i)f[i]=f[i-1]+a[i-1]<<1;var o;if(r){o=new F(1<<t);var u=15-t;for(i=0;i<e;++i)if(n[i])for(var l=i<<4|n[i],s=t-n[i],h=f[n[i]-1]++<<s,g=h|(1<<s)-1;h<=g;++h)o[ut[h]>>u]=l}else for(o=new F(e),i=0;i<e;++i)n[i]&&(o[i]=ut[f[n[i]-1]++]>>15-n[i]);return o},G=new E(288);for(c=0;c<144;++c)G[c]=8;var c;for(c=144;c<256;++c)G[c]=9;var c;for(c=256;c<280;++c)G[c]=7;var c;for(c=280;c<288;++c)G[c]=8;var c,V=new E(32);for(c=0;c<32;++c)V[c]=5;var c,Vt=Q(G,9,0);var _t=Q(V,5,0);var Ct=function(n){return(n+7)/8|0},Dt=function(n,t,r){return(t==null||t<0)&&(t=0),(r==null||r>n.length)&&(r=n.length),new E(n.subarray(t,r))};var tn=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],_=function(n,t,r){var e=new Error(t||tn[n]);if(e.code=n,Error.captureStackTrace&&Error.captureStackTrace(e,_),!r)throw e;return e};var H=function(n,t,r){r<<=t&7;var e=t/8|0;n[e]|=r,n[e+1]|=r>>8},K=function(n,t,r){r<<=t&7;var e=t/8|0;n[e]|=r,n[e+1]|=r>>8,n[e+2]|=r>>16},st=function(n,t){for(var r=[],e=0;e<n.length;++e)n[e]&&r.push({s:e,f:n[e]});var i=r.length,a=r.slice();if(!i)return{t:Ot,l:0};if(i==1){var f=new E(r[0].s+1);return f[r[0].s]=1,{t:f,l:1}}r.sort(function(B,U){return B.f-U.f}),r.push({s:-1,f:25001});var o=r[0],u=r[1],l=0,s=1,h=2;for(r[0]={s:-1,f:o.f+u.f,l:o,r:u};s!=i-1;)o=r[r[l].f<r[h].f?l++:h++],u=r[l!=s&&r[l].f<r[h].f?l++:h++],r[s++]={s:-1,f:o.f+u.f,l:o,r:u};for(var g=a[0].s,e=1;e<i;++e)a[e].s>g&&(g=a[e].s);var y=new F(g+1),m=lt(r[s-1],y,0);if(m>t){var e=0,w=0,x=m-t,T=1<<x;for(a.sort(function(U,d){return y[d.s]-y[U.s]||U.f-d.f});e<i;++e){var C=a[e].s;if(y[C]>t)w+=T-(1<<m-y[C]),y[C]=t;else break}for(w>>=x;w>0;){var P=a[e].s;y[P]<t?w-=1<<t-y[P]++-1:++e}for(;e>=0&&w;--e){var z=a[e].s;y[z]==t&&(--y[z],++w)}m=t}return{t:new E(y),l:m}},lt=function(n,t,r){return n.s==-1?Math.max(lt(n.l,t,r+1),lt(n.r,t,r+1)):t[n.s]=r},Et=function(n){for(var t=n.length;t&&!n[--t];);for(var r=new F(++t),e=0,i=n[0],a=1,f=function(u){r[e++]=u},o=1;o<=t;++o)if(n[o]==i&&o!=t)++a;else{if(!i&&a>2){for(;a>138;a-=138)f(32754);a>2&&(f(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(f(i),--a;a>6;a-=6)f(8304);a>2&&(f(a-3<<5|8208),a=0)}for(;a--;)f(i);a=1,i=n[o]}return{c:r.subarray(0,e),n:t}},J=function(n,t){for(var r=0,e=0;e<t.length;++e)r+=n[e]*t[e];return r},Zt=function(n,t,r){var e=r.length,i=Ct(t+2);n[i]=e&255,n[i+1]=e>>8,n[i+2]=n[i]^255,n[i+3]=n[i+1]^255;for(var a=0;a<e;++a)n[i+a+4]=r[a];return(i+4+e)*8},Tt=function(n,t,r,e,i,a,f,o,u,l,s){H(t,s++,r),++i[256];for(var h=st(i,15),g=h.t,y=h.l,m=st(a,15),w=m.t,x=m.l,T=Et(g),C=T.c,P=T.n,z=Et(w),B=z.c,U=z.n,d=new F(19),p=0;p<C.length;++p)++d[C[p]&31];for(var p=0;p<B.length;++p)++d[B[p]&31];for(var v=st(d,7),I=v.t,q=v.l,R=19;R>4&&!I[At[R-1]];--R);var Y=l+5<<3,D=J(i,G)+J(a,V)+f,Z=J(i,g)+J(a,w)+f+14+3*R+J(d,I)+2*d[16]+3*d[17]+7*d[18];if(u>=0&&Y<=D&&Y<=Z)return Zt(t,s,n.subarray(u,u+l));var L,A,O,b;if(H(t,s,1+(Z<D)),s+=2,Z<D){L=Q(g,y,0),A=g,O=Q(w,x,0),b=w;var tt=Q(I,q,0);H(t,s,P-257),H(t,s+5,U-1),H(t,s+10,R-4),s+=14;for(var p=0;p<R;++p)H(t,s+3*p,I[At[p]]);s+=3*R;for(var j=[C,B],X=0;X<2;++X)for(var W=j[X],p=0;p<W.length;++p){var k=W[p]&31;H(t,s,tt[k]),s+=I[k],k>15&&(H(t,s,W[p]>>5&127),s+=W[p]>>12)}}else L=Vt,A=G,O=_t,b=V;for(var p=0;p<o;++p){var M=e[p];if(M>255){var k=M>>18&31;K(t,s,L[k+257]),s+=A[k+257],k>7&&(H(t,s,M>>23&31),s+=ct[k]);var N=M&31;K(t,s,O[N]),s+=b[N],N>3&&(K(t,s,M>>5&8191),s+=pt[N])}else K(t,s,L[M]),s+=A[M]}return K(t,s,L[256]),s+A[256]},nn=new vt([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Ot=new E(0),rn=function(n,t,r,e,i,a){var f=a.z||n.length,o=new E(e+f+5*(1+Math.ceil(f/7e3))+i),u=o.subarray(e,o.length-i),l=a.l,s=(a.r||0)&7;if(t){s&&(u[0]=a.r>>3);for(var h=nn[t-1],g=h>>13,y=h&8191,m=(1<<r)-1,w=a.p||new F(32768),x=a.h||new F(m+1),T=Math.ceil(r/3),C=2*T,P=function(et){return(n[et]^n[et+1]<<T^n[et+2]<<C)&m},z=new vt(25e3),B=new F(288),U=new F(32),d=0,p=0,v=a.i||0,I=0,q=a.w||0,R=0;v+2<f;++v){var Y=P(v),D=v&32767,Z=x[Y];if(w[D]=Z,x[Y]=D,q<=v){var L=f-v;if((d>7e3||I>24576)&&(L>423||!l)){s=Tt(n,u,0,z,B,U,p,I,R,v-R,s),I=d=p=0,R=v;for(var A=0;A<286;++A)B[A]=0;for(var A=0;A<30;++A)U[A]=0}var O=2,b=0,tt=y,j=D-Z&32767;if(L>2&&Y==P(v-j))for(var X=Math.min(g,L)-1,W=Math.min(32767,v),k=Math.min(258,L);j<=W&&--tt&&D!=Z;){if(n[v+O]==n[v+O-j]){for(var M=0;M<k&&n[v+M]==n[v+M-j];++M);if(M>O){if(O=M,b=j,M>X)break;for(var N=Math.min(j,M-2),gt=0,A=0;A<N;++A){var nt=v-j+A&32767,$t=w[nt],yt=nt-$t&32767;yt>gt&&(gt=yt,Z=nt)}}}D=Z,Z=w[D],j+=D-Z&32767}if(b){z[I++]=268435456|ft[O]<<18|St[b];var wt=ft[O]&31,mt=St[b]&31;p+=ct[wt]+pt[mt],++B[257+wt],++U[mt],q=v+O,++d}else z[I++]=n[v],++B[n[v]]}}for(v=Math.max(v,q);v<f;++v)z[I++]=n[v],++B[n[v]];s=Tt(n,u,l,z,B,U,p,I,R,v-R,s),l||(a.r=s&7|u[s/8|0]<<3,s-=7,a.h=x,a.p=w,a.i=v,a.w=q)}else{for(var v=a.w||0;v<f+l;v+=65535){var rt=v+65535;rt>=f&&(u[s/8|0]=l,rt=f),s=Zt(u,s+1,n.subarray(v,rt))}a.i=f}return Dt(o,0,e+Ct(s)+i)},en=function(){for(var n=new Int32Array(256),t=0;t<256;++t){for(var r=t,e=9;--e;)r=(r&1&&-306674912)^r>>>1;n[t]=r}return n}(),an=function(){var n=-1;return{p:function(t){for(var r=n,e=0;e<t.length;++e)r=en[r&255^t[e]]^r>>>8;n=r},d:function(){return~n}}};var on=function(n,t,r,e,i){if(!i&&(i={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),f=new E(a.length+n.length);f.set(a),f.set(n,a.length),n=f,i.w=a.length}return rn(n,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(n.length)))*1.5):20:12+t.mem,r,e,i)},Pt=function(n,t){var r={};for(var e in n)r[e]=n[e];for(var e in t)r[e]=t[e];return r};var S=function(n,t,r){for(;r;++t)n[t]=r,r>>>=8};function sn(n,t){return on(n,t||{},0,0)}var Lt=function(n,t,r,e){for(var i in n){var a=n[i],f=t+i,o=e;Array.isArray(a)&&(o=Pt(e,a[1]),a=a[0]),a instanceof E?r[f]=[a,o]:(r[f+="/"]=[new E(0),o],Lt(a,f,r,e))}},Mt=typeof TextEncoder<"u"&&new TextEncoder,fn=typeof TextDecoder<"u"&&new TextDecoder,un=0;try{fn.decode(Ot,{stream:!0}),un=1}catch{}function Bt(n,t){if(t){for(var r=new E(n.length),e=0;e<n.length;++e)r[e]=n.charCodeAt(e);return r}if(Mt)return Mt.encode(n);for(var i=n.length,a=new E(n.length+(n.length>>1)),f=0,o=function(s){a[f++]=s},e=0;e<i;++e){if(f+5>a.length){var u=new E(f+8+(i-e<<1));u.set(a),a=u}var l=n.charCodeAt(e);l<128||t?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|n.charCodeAt(++e)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return Dt(a,0,f)}var ht=function(n){var t=0;if(n)for(var r in n){var e=n[r].length;e>65535&&_(9),t+=e+4}return t},Ut=function(n,t,r,e,i,a,f,o){var u=e.length,l=r.extra,s=o&&o.length,h=ht(l);S(n,t,f!=null?33639248:67324752),t+=4,f!=null&&(n[t++]=20,n[t++]=r.os),n[t]=20,t+=2,n[t++]=r.flag<<1|(a<0&&8),n[t++]=i&&8,n[t++]=r.compression&255,n[t++]=r.compression>>8;var g=new Date(r.mtime==null?Date.now():r.mtime),y=g.getFullYear()-1980;if((y<0||y>119)&&_(10),S(n,t,y<<25|g.getMonth()+1<<21|g.getDate()<<16|g.getHours()<<11|g.getMinutes()<<5|g.getSeconds()>>1),t+=4,a!=-1&&(S(n,t,r.crc),S(n,t+4,a<0?-a-2:a),S(n,t+8,r.size)),S(n,t+12,u),S(n,t+14,h),t+=16,f!=null&&(S(n,t,s),S(n,t+6,r.attrs),S(n,t+10,f),t+=14),n.set(e,t),t+=u,h)for(var m in l){var w=l[m],x=w.length;S(n,t,+m),S(n,t+2,x),n.set(w,t+4),t+=4+x}return s&&(n.set(o,t),t+=s),t},ln=function(n,t,r,e,i){S(n,t,101010256),S(n,t+8,r),S(n,t+10,r),S(n,t+12,e),S(n,t+16,i)};function jt(n,t){t||(t={});var r={},e=[];Lt(n,"",r,t);var i=0,a=0;for(var f in r){var o=r[f],u=o[0],l=o[1],s=l.level==0?0:8,h=Bt(f),g=h.length,y=l.comment,m=y&&Bt(y),w=m&&m.length,x=ht(l.extra);g>65535&&_(11);var T=s?sn(u,l):u,C=T.length,P=an();P.p(u),e.push(Pt(l,{size:u.length,crc:P.d(),c:T,f:h,m,u:g!=f.length||m&&y.length!=w,o:i,compression:s})),i+=30+g+x+C,a+=76+2*(g+x)+(w||0)+C}for(var z=new E(a+22),B=i,U=a-i,d=0;d<e.length;++d){var h=e[d];Ut(z,h.o,h,h.f,h.u,h.c.length);var p=30+h.f.length+ht(h.extra);z.set(h.c,h.o+p),Ut(z,i,h,h.f,h.u,h.c.length,h.o,h.m),i+=16+p+(h.m?h.m.length:0)}return ln(z,i,e.length,U,B),z}var hn={command:"txt",data:"glkdata",save:"glksave",transcript:"txt"},vn=/modified:(\d+)$/,cn=/^content:(\w+):\w*:(.+)$/;window.run=function(){let n=parseInt(localStorage.getItem("dialog_storage_version")||"",10);if(n!==1){alert(`This tool doesn't support dialog_storage_version=${n}`);return}let t={},r={};for(let[i,a]of Object.entries(localStorage)){if(!i.startsWith("content:"))continue;let f=cn.exec(i);if(!f){console.log(`Unparsable content record: ${i}`);continue}let o=`${f[1]}:${f[2]}`;r[o]||(r[o]=0),r[o]++;let u=r[o]>1?`-${r[o]}`:"",l=`parchment-files/${f[2]}${u}.${hn[f[1]]||f[1]||"unknown"}`,s=localStorage.getItem("dirent:"+i.substring(8)),h=s?parseInt(vn.exec(s)[1]):Date.now();t[l]=[dt(a),{mtime:h}]}let e=jt(t);kt.default.saveAs(new Blob([e]),"parchment-files.zip")};
//# sourceMappingURL=file-exporter.js.map
