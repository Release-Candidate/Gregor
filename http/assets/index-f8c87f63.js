(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();"serviceWorker"in navigator&&navigator.serviceWorker.register(new URL("./sw.js",self.location),{type:"module",scope:"/Gregor/http"}).then(function(){console.log("[index.html] Service Worker Registered")});const G=(e,s)=>e===s,P={equals:G};let H=q;const w=1,m=2,j={owned:null,cleanups:null,context:null,owner:null};var a=null;let L=null,f=null,u=null,g=null,S=0;function K(e,s){const t=f,n=a,i=e.length===0,l=s===void 0?n:s,r=i?j:{owned:null,cleanups:null,context:l?l.context:null,owner:l},o=i?e:()=>e(()=>C(()=>E(r)));a=r,f=null;try{return b(o,!0)}finally{f=t,a=n}}function Q(e,s){s=s?Object.assign({},P,s):P;const t={value:e,observers:null,observerSlots:null,comparator:s.equals||void 0},n=i=>(typeof i=="function"&&(i=i(t.value)),D(t,i));return[X.bind(t),n]}function _(e,s,t){const n=Y(e,s,!1,w);N(n)}function C(e){if(f===null)return e();const s=f;f=null;try{return e()}finally{f=s}}function X(){if(this.sources&&this.state)if(this.state===w)N(this);else{const e=u;u=null,b(()=>A(this),!1),u=e}if(f){const e=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(e)):(f.sources=[this],f.sourceSlots=[e]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function D(e,s,t){let n=e.value;return(!e.comparator||!e.comparator(n,s))&&(e.value=s,e.observers&&e.observers.length&&b(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],r=L&&L.running;r&&L.disposed.has(l),(r?!l.tState:!l.state)&&(l.pure?u.push(l):g.push(l),l.observers&&F(l)),r||(l.state=w)}if(u.length>1e6)throw u=[],new Error},!1)),s}function N(e){if(!e.fn)return;E(e);const s=a,t=f,n=S;f=a=e,J(e,e.value,n),f=t,a=s}function J(e,s,t){let n;try{n=e.fn(s)}catch(i){return e.pure&&(e.state=w,e.owned&&e.owned.forEach(E),e.owned=null),e.updatedAt=t+1,I(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?D(e,n):e.value=n,e.updatedAt=t)}function Y(e,s,t,n=w,i){const l={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:s,owner:a,context:a?a.context:null,pure:t};return a===null||a!==j&&(a.owned?a.owned.push(l):a.owned=[l]),l}function V(e){if(e.state===0)return;if(e.state===m)return A(e);if(e.suspense&&C(e.suspense.inFallback))return e.suspense.effects.push(e);const s=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<S);)e.state&&s.push(e);for(let t=s.length-1;t>=0;t--)if(e=s[t],e.state===w)N(e);else if(e.state===m){const n=u;u=null,b(()=>A(e,s[0]),!1),u=n}}function b(e,s){if(u)return e();let t=!1;s||(u=[]),g?t=!0:g=[],S++;try{const n=e();return Z(t),n}catch(n){t||(g=null),u=null,I(n)}}function Z(e){if(u&&(q(u),u=null),e)return;const s=g;g=null,s.length&&b(()=>H(s),!1)}function q(e){for(let s=0;s<e.length;s++)V(e[s])}function A(e,s){e.state=0;for(let t=0;t<e.sources.length;t+=1){const n=e.sources[t];if(n.sources){const i=n.state;i===w?n!==s&&(!n.updatedAt||n.updatedAt<S)&&V(n):i===m&&A(n,s)}}}function F(e){for(let s=0;s<e.observers.length;s+=1){const t=e.observers[s];t.state||(t.state=m,t.pure?u.push(t):g.push(t),t.observers&&F(t))}}function E(e){let s;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const l=i.pop(),r=t.observerSlots.pop();n<i.length&&(l.sourceSlots[r]=n,i[n]=l,t.observerSlots[n]=r)}}if(e.owned){for(s=e.owned.length-1;s>=0;s--)E(e.owned[s]);e.owned=null}if(e.cleanups){for(s=e.cleanups.length-1;s>=0;s--)e.cleanups[s]();e.cleanups=null}e.state=0}function k(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function I(e,s=a){throw k(e)}function z(e,s){return C(()=>e(s||{}))}function ee(e,s,t){let n=t.length,i=s.length,l=n,r=0,o=0,c=s[i-1].nextSibling,d=null;for(;r<i||o<l;){if(s[r]===t[o]){r++,o++;continue}for(;s[i-1]===t[l-1];)i--,l--;if(i===r){const h=l<n?o?t[o-1].nextSibling:t[l-o]:c;for(;o<l;)e.insertBefore(t[o++],h)}else if(l===o)for(;r<i;)(!d||!d.has(s[r]))&&s[r].remove(),r++;else if(s[r]===t[l-1]&&t[o]===s[i-1]){const h=s[--i].nextSibling;e.insertBefore(t[o++],s[r++].nextSibling),e.insertBefore(t[--l],h),s[i]=t[l]}else{if(!d){d=new Map;let p=o;for(;p<l;)d.set(t[p],p++)}const h=d.get(s[r]);if(h!=null)if(o<h&&h<l){let p=r,$=1,O;for(;++p<i&&p<l&&!((O=d.get(s[p]))==null||O!==h+$);)$++;if($>h-o){const W=s[r];for(;o<h;)e.insertBefore(t[o++],W)}else e.replaceChild(t[o++],s[r++])}else r++;else s[r++].remove()}}}const B="_$DX_DELEGATE";function te(e,s,t,n={}){let i;return K(l=>{i=l,s===document?e():M(s,e(),s.firstChild?null:void 0,t)},n.owner),()=>{i(),s.textContent=""}}function x(e,s,t){let n;const i=()=>{const r=document.createElement("template");return r.innerHTML=e,t?r.content.firstChild.firstChild:r.content.firstChild},l=s?()=>C(()=>document.importNode(n||(n=i()),!0)):()=>(n||(n=i())).cloneNode(!0);return l.cloneNode=l,l}function se(e,s=window.document){const t=s[B]||(s[B]=new Set);for(let n=0,i=e.length;n<i;n++){const l=e[n];t.has(l)||(t.add(l),s.addEventListener(l,ne))}}function U(e,s,t){t==null?e.removeAttribute(s):e.setAttribute(s,t)}function M(e,s,t,n){if(t!==void 0&&!n&&(n=[]),typeof s!="function")return v(e,s,n,t);_(i=>v(e,s(),i,t),n)}function ne(e){const s=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}});t;){const n=t[s];if(n&&!t.disabled){const i=t[`${s}Data`];if(i!==void 0?n.call(t,i,e):n.call(t,e),e.cancelBubble)return}t=t._$host||t.parentNode||t.host}}function v(e,s,t,n,i){for(;typeof t=="function";)t=t();if(s===t)return t;const l=typeof s,r=n!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(s=s.toString()),r){let o=t[0];o&&o.nodeType===3?o.data=s:o=document.createTextNode(s),t=y(e,t,n,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=s:t=e.textContent=s;else if(s==null||l==="boolean")t=y(e,t,n);else{if(l==="function")return _(()=>{let o=s();for(;typeof o=="function";)o=o();t=v(e,o,t,n)}),()=>t;if(Array.isArray(s)){const o=[],c=t&&Array.isArray(t);if(T(o,s,t,i))return _(()=>t=v(e,o,t,n,!0)),()=>t;if(o.length===0){if(t=y(e,t,n),r)return t}else c?t.length===0?R(e,o,n):ee(e,t,o):(t&&y(e),R(e,o));t=o}else if(s.nodeType){if(Array.isArray(t)){if(r)return t=y(e,t,n,s);y(e,t,null,s)}else t==null||t===""||!e.firstChild?e.appendChild(s):e.replaceChild(s,e.firstChild);t=s}}return t}function T(e,s,t,n){let i=!1;for(let l=0,r=s.length;l<r;l++){let o=s[l],c=t&&t[l],d;if(!(o==null||o===!0||o===!1))if((d=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=T(e,o,c)||i;else if(d==="function")if(n){for(;typeof o=="function";)o=o();i=T(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||i}else e.push(o),i=!0;else{const h=String(o);c&&c.nodeType===3&&c.data===h?e.push(c):e.push(document.createTextNode(h))}}return i}function R(e,s,t=null){for(let n=0,i=s.length;n<i;n++)e.insertBefore(s[n],t)}function y(e,s,t,n){if(t===void 0)return e.textContent="";const i=n||document.createTextNode("");if(s.length){let l=!1;for(let r=s.length-1;r>=0;r--){const o=s[r];if(i!==o){const c=o.parentNode===e;!l&&!r?c?e.replaceChild(i,o):e.insertBefore(i,t):c&&o.remove()}else l=!0}}else e.insertBefore(i,t);return[i]}const ie=""+new URL("solid-123b04bc.svg",import.meta.url).href,le=""+new URL("../vite.svg",import.meta.url).href,oe=x('<div><a href=https://vitejs.dev target=_blank><img class=logo alt="Vite logo"></a><a href=https://solidjs.com target=_blank><img class="logo solid"alt="Solid logo">'),re=x("<h1>Vite + Solid"),fe=x('<div class="card m-4 bg-orange-200"><button class="">count is </button><p>Edit <code>src/App.tsx</code> and save to test HMR'),ue=x("<p class=read-the-docs>Click on the Vite and Solid logos to learn more");function ce(){const[e,s]=Q(0);return[(()=>{const t=oe(),n=t.firstChild,i=n.firstChild,l=n.nextSibling,r=l.firstChild;return U(i,"src",le),U(r,"src",ie),t})(),re(),(()=>{const t=fe(),n=t.firstChild;return n.firstChild,n.$$click=()=>s(i=>i+1),M(n,e,null),t})(),ue()]}se(["click"]);const ae=document.getElementById("root");te(()=>z(ce,{}),ae);
//# sourceMappingURL=index-f8c87f63.js.map
