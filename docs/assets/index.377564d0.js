(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();function p(){}function st(t,e){for(const n in e)t[n]=e[n];return t}function it(t){return t()}function Z(){return Object.create(null)}function O(t){t.forEach(it)}function Y(t){return typeof t=="function"}function M(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function yt(t){return Object.keys(t).length===0}function wt(t,...e){if(t==null)return p;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function R(t,e,n){t.insertBefore(e,n||null)}function S(t){t.parentNode&&t.parentNode.removeChild(t)}function ct(t){return document.createElement(t)}function kt(t){return document.createTextNode(t)}function B(){return kt("")}function $t(t){return Array.from(t.childNodes)}function Et(t,e,{bubbles:n=!1,cancelable:o=!1}={}){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,o,e),s}function T(t,e){return new t(e)}let C;function L(t){C=t}function K(){if(!C)throw new Error("Function called outside component initialization");return C}function vt(t){K().$$.after_update.push(t)}function xt(t){K().$$.on_destroy.push(t)}function jt(){const t=K();return(e,n,{cancelable:o=!1}={})=>{const s=t.$$.callbacks[e];if(s){const c=Et(e,n,{cancelable:o});return s.slice().forEach(l=>{l.call(t,c)}),!c.defaultPrevented}return!0}}function tt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(o=>o.call(this,e))}const N=[],et=[],I=[],nt=[],ut=Promise.resolve();let U=!1;function lt(){U||(U=!0,ut.then(ft))}function Ot(){return lt(),ut}function X(t){I.push(t)}const H=new Set;let D=0;function ft(){const t=C;do{for(;D<N.length;){const e=N[D];D++,L(e),St(e.$$)}for(L(null),N.length=0,D=0;et.length;)et.pop()();for(let e=0;e<I.length;e+=1){const n=I[e];H.has(n)||(H.add(n),n())}I.length=0}while(N.length);for(;nt.length;)nt.pop()();U=!1,H.clear(),L(t)}function St(t){if(t.fragment!==null){t.update(),O(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}const F=new Set;let $;function W(){$={r:0,c:[],p:$}}function G(){$.r||O($.c),$=$.p}function E(t,e){t&&t.i&&(F.delete(t),t.i(e))}function j(t,e,n,o){if(t&&t.o){if(F.has(t))return;F.add(t),$.c.push(()=>{F.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}function at(t,e){const n={},o={},s={$$scope:1};let c=t.length;for(;c--;){const l=t[c],i=e[c];if(i){for(const r in l)r in i||(o[r]=1);for(const r in i)s[r]||(n[r]=i[r],s[r]=1);t[c]=i}else for(const r in l)s[r]=1}for(const l in o)l in n||(n[l]=void 0);return n}function dt(t){return typeof t=="object"&&t!==null?t:{}}function z(t){t&&t.c()}function P(t,e,n,o){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),o||X(()=>{const l=t.$$.on_mount.map(it).filter(Y);t.$$.on_destroy?t.$$.on_destroy.push(...l):O(l),t.$$.on_mount=[]}),c.forEach(X)}function q(t,e){const n=t.$$;n.fragment!==null&&(O(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Nt(t,e){t.$$.dirty[0]===-1&&(N.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(t,e,n,o,s,c,l,i=[-1]){const r=C;L(t);const u=t.$$={fragment:null,ctx:[],props:c,update:p,not_equal:s,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:Z(),dirty:i,skip_bound:!1,root:e.target||r.$$.root};l&&l(u.root);let h=!1;if(u.ctx=n?n(t,e.props||{},(m,w,...g)=>{const b=g.length?g[0]:w;return u.ctx&&s(u.ctx[m],u.ctx[m]=b)&&(!u.skip_bound&&u.bound[m]&&u.bound[m](b),h&&Nt(t,m)),w}):[],u.update(),h=!0,O(u.before_update),u.fragment=o?o(u.ctx):!1,e.target){if(e.hydrate){const m=$t(e.target);u.fragment&&u.fragment.l(m),m.forEach(S)}else u.fragment&&u.fragment.c();e.intro&&E(t.$$.fragment),P(t,e.target,e.anchor,e.customElement),ft()}L(r)}class Q{$destroy(){q(this,1),this.$destroy=p}$on(e,n){if(!Y(n))return p;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const x=[];function ht(t,e){return{subscribe:_t(t,e).subscribe}}function _t(t,e=p){let n;const o=new Set;function s(i){if(M(t,i)&&(t=i,n)){const r=!x.length;for(const u of o)u[1](),x.push(u,t);if(r){for(let u=0;u<x.length;u+=2)x[u][0](x[u+1]);x.length=0}}}function c(i){s(i(t))}function l(i,r=p){const u=[i,r];return o.add(u),o.size===1&&(n=e(s)||p),i(t),()=>{o.delete(u),o.size===0&&(n(),n=null)}}return{set:s,update:c,subscribe:l}}function pt(t,e,n){const o=!Array.isArray(t),s=o?[t]:t,c=e.length<2;return ht(n,l=>{let i=!1;const r=[];let u=0,h=p;const m=()=>{if(u)return;h();const g=e(o?r[0]:r,l);c?l(g):h=Y(g)?g:p},w=s.map((g,b)=>wt(g,A=>{r[b]=A,u&=~(1<<b),i&&m()},()=>{u|=1<<b}));return i=!0,m(),function(){O(w),h()}})}function Lt(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,o,s,c,l=[],i="",r=t.split("/");for(r[0]||r.shift();s=r.shift();)n=s[0],n==="*"?(l.push("wild"),i+="/(.*)"):n===":"?(o=s.indexOf("?",1),c=s.indexOf(".",1),l.push(s.substring(1,~o?o:~c?c:s.length)),i+=!!~o&&!~c?"(?:/([^/]+?))?":"/([^/]+?)",~c&&(i+=(~o?"?":"")+"\\"+s.substring(c))):i+="/"+s;return{keys:l,pattern:new RegExp("^"+i+(e?"(?=$|/)":"/?$"),"i")}}function Ct(t){let e,n,o;const s=[t[2]];var c=t[0];function l(i){let r={};for(let u=0;u<s.length;u+=1)r=st(r,s[u]);return{props:r}}return c&&(e=T(c,l()),e.$on("routeEvent",t[7])),{c(){e&&z(e.$$.fragment),n=B()},m(i,r){e&&P(e,i,r),R(i,n,r),o=!0},p(i,r){const u=r&4?at(s,[dt(i[2])]):{};if(c!==(c=i[0])){if(e){W();const h=e;j(h.$$.fragment,1,0,()=>{q(h,1)}),G()}c?(e=T(c,l()),e.$on("routeEvent",i[7]),z(e.$$.fragment),E(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else c&&e.$set(u)},i(i){o||(e&&E(e.$$.fragment,i),o=!0)},o(i){e&&j(e.$$.fragment,i),o=!1},d(i){i&&S(n),e&&q(e,i)}}}function Pt(t){let e,n,o;const s=[{params:t[1]},t[2]];var c=t[0];function l(i){let r={};for(let u=0;u<s.length;u+=1)r=st(r,s[u]);return{props:r}}return c&&(e=T(c,l()),e.$on("routeEvent",t[6])),{c(){e&&z(e.$$.fragment),n=B()},m(i,r){e&&P(e,i,r),R(i,n,r),o=!0},p(i,r){const u=r&6?at(s,[r&2&&{params:i[1]},r&4&&dt(i[2])]):{};if(c!==(c=i[0])){if(e){W();const h=e;j(h.$$.fragment,1,0,()=>{q(h,1)}),G()}c?(e=T(c,l()),e.$on("routeEvent",i[6]),z(e.$$.fragment),E(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else c&&e.$set(u)},i(i){o||(e&&E(e.$$.fragment,i),o=!0)},o(i){e&&j(e.$$.fragment,i),o=!1},d(i){i&&S(n),e&&q(e,i)}}}function qt(t){let e,n,o,s;const c=[Pt,Ct],l=[];function i(r,u){return r[1]?0:1}return e=i(t),n=l[e]=c[e](t),{c(){n.c(),o=B()},m(r,u){l[e].m(r,u),R(r,o,u),s=!0},p(r,[u]){let h=e;e=i(r),e===h?l[e].p(r,u):(W(),j(l[h],1,1,()=>{l[h]=null}),G(),n=l[e],n?n.p(r,u):(n=l[e]=c[e](r),n.c()),E(n,1),n.m(o.parentNode,o))},i(r){s||(E(n),s=!0)},o(r){j(n),s=!1},d(r){l[e].d(r),r&&S(o)}}}function rt(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let o="";return n>-1&&(o=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:o}}const V=ht(null,function(e){e(rt());const n=()=>{e(rt())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}});pt(V,t=>t.location);pt(V,t=>t.querystring);const ot=_t(void 0);function Rt(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function At(t,e,n){let{routes:o={}}=e,{prefix:s=""}=e,{restoreScrollState:c=!1}=e;class l{constructor(f,d){if(!d||typeof d!="function"&&(typeof d!="object"||d._sveltesparouter!==!0))throw Error("Invalid component object");if(!f||typeof f=="string"&&(f.length<1||f.charAt(0)!="/"&&f.charAt(0)!="*")||typeof f=="object"&&!(f instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:y,keys:_}=Lt(f);this.path=f,typeof d=="object"&&d._sveltesparouter===!0?(this.component=d.component,this.conditions=d.conditions||[],this.userData=d.userData,this.props=d.props||{}):(this.component=()=>Promise.resolve(d),this.conditions=[],this.props={}),this._pattern=y,this._keys=_}match(f){if(s){if(typeof s=="string")if(f.startsWith(s))f=f.substr(s.length)||"/";else return null;else if(s instanceof RegExp){const k=f.match(s);if(k&&k[0])f=f.substr(k[0].length)||"/";else return null}}const d=this._pattern.exec(f);if(d===null)return null;if(this._keys===!1)return d;const y={};let _=0;for(;_<this._keys.length;){try{y[this._keys[_]]=decodeURIComponent(d[_+1]||"")||null}catch{y[this._keys[_]]=null}_++}return y}async checkConditions(f){for(let d=0;d<this.conditions.length;d++)if(!await this.conditions[d](f))return!1;return!0}}const i=[];o instanceof Map?o.forEach((a,f)=>{i.push(new l(f,a))}):Object.keys(o).forEach(a=>{i.push(new l(a,o[a]))});let r=null,u=null,h={};const m=jt();async function w(a,f){await Ot(),m(a,f)}let g=null,b=null;c&&(b=a=>{a.state&&(a.state.__svelte_spa_router_scrollY||a.state.__svelte_spa_router_scrollX)?g=a.state:g=null},window.addEventListener("popstate",b),vt(()=>{Rt(g)}));let A=null,v=null;const mt=V.subscribe(async a=>{A=a;let f=0;for(;f<i.length;){const d=i[f].match(a.location);if(!d){f++;continue}const y={route:i[f].path,location:a.location,querystring:a.querystring,userData:i[f].userData,params:d&&typeof d=="object"&&Object.keys(d).length?d:null};if(!await i[f].checkConditions(y)){n(0,r=null),v=null,w("conditionsFailed",y);return}w("routeLoading",Object.assign({},y));const _=i[f].component;if(v!=_){_.loading?(n(0,r=_.loading),v=_,n(1,u=_.loadingParams),n(2,h={}),w("routeLoaded",Object.assign({},y,{component:r,name:r.name,params:u}))):(n(0,r=null),v=null);const k=await _();if(a!=A)return;n(0,r=k&&k.default||k),v=_}d&&typeof d=="object"&&Object.keys(d).length?n(1,u=d):n(1,u=null),n(2,h=i[f].props),w("routeLoaded",Object.assign({},y,{component:r,name:r.name,params:u})).then(()=>{ot.set(u)});return}n(0,r=null),v=null,ot.set(void 0)});xt(()=>{mt(),b&&window.removeEventListener("popstate",b)});function gt(a){tt.call(this,t,a)}function bt(a){tt.call(this,t,a)}return t.$$set=a=>{"routes"in a&&n(3,o=a.routes),"prefix"in a&&n(4,s=a.prefix),"restoreScrollState"in a&&n(5,c=a.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=c?"manual":"auto")},[r,u,h,o,s,c,gt,bt]}class Dt extends Q{constructor(e){super(),J(this,e,At,qt,M,{routes:3,prefix:4,restoreScrollState:5})}}function It(t){let e;return{c(){e=ct("div"),e.textContent="Home"},m(n,o){R(n,e,o)},p,i:p,o:p,d(n){n&&S(e)}}}class Ft extends Q{constructor(e){super(),J(this,e,null,It,M,{})}}function Tt(t){let e;return{c(){e=ct("div"),e.textContent="Not found"},m(n,o){R(n,e,o)},p,i:p,o:p,d(n){n&&S(e)}}}class zt extends Q{constructor(e){super(),J(this,e,null,Tt,M,{})}}const Mt={"/":Ft,"*":zt};new Dt({target:document.body,props:{routes:Mt}});