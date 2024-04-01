import{s as O,d as A,c as S}from"./scheduler.5c8751cd.js";import{S as D,i as U,g as C,h as H,j as p,f as m,k as f,a as w,y as v,A as q,E as z,F,e as B,B as x,H as T,s as L,m as E,C as P,G as j,c as V,n as N,l as G}from"./index.e36801f4.js";import{e as M}from"./each.a7e954ae.js";import{f as W,a as J}from"./index.43695d45.js";import{p as K}from"./stores.80e4813c.js";import{e as I}from"./singletons.ea55d21f.js";function Z(s,e,t){const r=s.slice();return r[3]=e[t],r}function Q(s){let e,t,r,a,i=`${s[2][s[3]].svgPath}`,u,l,o=s[2][s[3]].descText+"",h,n,d;return{c(){e=C("a"),t=C("button"),r=x("svg"),a=new T(!0),u=L(),l=C("p"),h=E(o),n=L(),this.h()},l(c){e=H(c,"A",{href:!0,"aria-current":!0,class:!0});var _=p(e);t=H(_,"BUTTON",{class:!0});var g=p(t);r=P(g,"svg",{xmlns:!0,viewBox:!0,class:!0});var b=p(r);a=j(b,!0),b.forEach(m),u=V(g),l=H(g,"P",{class:!0,style:!0});var y=p(l);h=N(y,o),y.forEach(m),g.forEach(m),n=V(_),_.forEach(m),this.h()},h(){a.a=null,f(r,"xmlns","http://www.w3.org/2000/svg"),f(r,"viewBox","0 0 24 24"),f(r,"class","svelte-b7nl8o"),f(l,"class","px-2 text-slate-300 text-xl font-bold"),G(l,"text-decoration","none"),f(t,"class","border border-slate-300 bg-gray-900 hover:bg-gray-800 fill-slate-300 px-4 py-2 rounded-lg flex flex-col items-center justify-center"),f(e,"href",""+(I+s[2][s[3]].route)),f(e,"aria-current",d=s[1].url.pathname===s[2][s[3]].route),f(e,"class","flex items-center justify-center svelte-b7nl8o")},m(c,_){w(c,e,_),v(e,t),v(t,r),a.m(i,r),v(t,u),v(t,l),v(l,h),v(e,n)},p(c,_){_&2&&d!==(d=c[1].url.pathname===c[2][c[3]].route)&&f(e,"aria-current",d)},d(c){c&&m(e)}}}function R(s){let e,t,r,a,i=`${s[2][s[3]].svgPath}`,u,l,o=s[2][s[3]].descText+"",h,n,d;return{c(){e=C("a"),t=C("button"),r=x("svg"),a=new T(!0),u=L(),l=C("p"),h=E(o),n=L(),this.h()},l(c){e=H(c,"A",{href:!0,"aria-current":!0,class:!0});var _=p(e);t=H(_,"BUTTON",{class:!0});var g=p(t);r=P(g,"svg",{xmlns:!0,viewBox:!0,class:!0});var b=p(r);a=j(b,!0),b.forEach(m),u=V(g),l=H(g,"P",{class:!0,style:!0});var y=p(l);h=N(y,o),y.forEach(m),g.forEach(m),n=V(_),_.forEach(m),this.h()},h(){a.a=null,f(r,"xmlns","http://www.w3.org/2000/svg"),f(r,"viewBox","0 0 24 24"),f(r,"class","svelte-b7nl8o"),f(l,"class","px-2 text-slate-300 text-xl font-bold"),G(l,"text-decoration","none"),f(t,"class","border border-slate-300 bg-gray-900 hover:bg-gray-800 fill-slate-300 px-4 py-2 rounded-lg flex flex-col items-center justify-center"),f(e,"href",""+(I+s[2][s[3]].route)),f(e,"aria-current",d=s[1].url.pathname===s[2][s[3]].route),f(e,"class","flex items-center justify-center svelte-b7nl8o")},m(c,_){w(c,e,_),v(e,t),v(t,r),a.m(i,r),v(t,u),v(t,l),v(l,h),v(e,n)},p(c,_){_&2&&d!==(d=c[1].url.pathname===c[2][c[3]].route)&&f(e,"aria-current",d)},d(c){c&&m(e)}}}function k(s){let e;function t(i,u){if(i[0]&&i[3]=="home")return R;if(i[3]!="home")return Q}let r=t(s),a=r&&r(s);return{c(){a&&a.c(),e=B()},l(i){a&&a.l(i),e=B()},m(i,u){a&&a.m(i,u),w(i,e,u)},p(i,u){r===(r=t(i))&&a?a.p(i,u):(a&&a.d(1),a=r&&r(i),a&&(a.c(),a.m(e.parentNode,e)))},d(i){i&&m(e),a&&a.d(i)}}}function X(s){let e,t,r,a,i,u=M(Object.keys(s[2])),l=[];for(let o=0;o<u.length;o+=1)l[o]=k(Z(s,u,o));return{c(){e=C("div"),t=C("div");for(let o=0;o<l.length;o+=1)l[o].c();this.h()},l(o){e=H(o,"DIV",{});var h=p(e);t=H(h,"DIV",{class:!0});var n=p(t);for(let d=0;d<l.length;d+=1)l[d].l(n);n.forEach(m),h.forEach(m),this.h()},h(){f(t,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 z-50")},m(o,h){w(o,e,h),v(e,t);for(let n=0;n<l.length;n+=1)l[n]&&l[n].m(t,null);i=!0},p(o,[h]){if(h&7){u=M(Object.keys(o[2]));let n;for(n=0;n<u.length;n+=1){const d=Z(o,u,n);l[n]?l[n].p(d,h):(l[n]=k(d),l[n].c(),l[n].m(t,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=u.length}},i(o){i||(o&&A(()=>{i&&(a&&a.end(1),r=q(t,W,{y:20,duration:300}),r.start())}),i=!0)},o(o){r&&r.invalidate(),o&&(a=z(t,J,{delay:250,duration:300})),i=!1},d(o){o&&m(e),F(l,o),o&&a&&a.end()}}}function Y(s,e,t){let r;S(s,K,u=>t(1,r=u));let{showHome:a}=e;const i={home:{route:"/",svgPath:'<path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19Z"></path>',descText:"Home"},gearBuilder:{route:"/gearBuilder",svgPath:`
							<path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 3.311L4.5 7.65311V16.3469L12 20.689L19.5 16.3469V7.65311L12 3.311ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"></path>`,descText:"Gear Builder"},shipBuilder:{route:"/shipBuilder",svgPath:'<path d="M9 4H14.4458C14.7905 4 15.111 4.17762 15.2938 4.47L18.75 10H23.1577C23.4339 10 23.6577 10.2239 23.6577 10.5C23.6577 10.5837 23.6367 10.666 23.5967 10.7394L19.6364 18H19C18.4694 18 17.9548 17.9311 17.4648 17.8018L20.63 12H3.4L4.44833 17.824C3.9845 17.939 3.49937 18 3 18H2.45455L1.21434 11.1789C1.11555 10.6355 1.47595 10.1149 2.01933 10.0161C2.07835 10.0054 2.13822 10 2.19821 10H3V5C3 4.44772 3.44772 4 4 4H5V1H9V4ZM5 10H16.3915L13.8915 6H5V10ZM3 20C4.53671 20 5.93849 19.4223 7 18.4722C8.06151 19.4223 9.46329 20 11 20C12.5367 20 13.9385 19.4223 15 18.4722C16.0615 19.4223 17.4633 20 19 20H21V22H19C17.5429 22 16.1767 21.6104 15 20.9297C13.8233 21.6104 12.4571 22 11 22C9.54285 22 8.17669 21.6104 7 20.9297C5.82331 21.6104 4.45715 22 3 22H1V20H3Z"></path>',descText:"Ship Builder"},potionBuilder:{route:"/potionBuilder",svgPath:`<path
								d="M15.9994 2V4H14.9994V7.24291C14.9994 8.40051 15.2506 9.54432 15.7357 10.5954L20.017 19.8714C20.3641 20.6236 20.0358 21.5148 19.2836 21.8619C19.0865 21.9529 18.8721 22 18.655 22H5.34375C4.51532 22 3.84375 21.3284 3.84375 20.5C3.84375 20.2829 3.89085 20.0685 3.98181 19.8714L8.26306 10.5954C8.74816 9.54432 8.99939 8.40051 8.99939 7.24291V4H7.99939V2H15.9994ZM13.3873 10.0012H10.6115C10.5072 10.3644 10.3823 10.7221 10.2371 11.0724L10.079 11.4335L6.12439 20H17.8734L13.9198 11.4335C13.7054 10.9691 13.5276 10.4902 13.3873 10.0012ZM10.9994 7.24291C10.9994 7.49626 10.9898 7.7491 10.9706 8.00087H13.0282C13.0189 7.87982 13.0119 7.75852 13.0072 7.63704L12.9994 7.24291V4H10.9994V7.24291Z"
							/>`,descText:"Potion Builder (WIP)"},info:{route:"/info",svgPath:`<path
								d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"
							/>`,descText:"Info & Credits"}};return s.$$set=u=>{"showHome"in u&&t(0,a=u.showHome)},[a,r,i]}class s1 extends D{constructor(e){super(),U(this,e,Y,X,O,{showHome:0})}}export{s1 as N};