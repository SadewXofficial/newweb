import{i as g}from"./e.UjVxrAmH.js?dpl=dpl_GaHoUqyxSeox4Bq81citwmC7er5b";import{C as E,V as we}from"./Canvas.Bo70JWoD.js?dpl=dpl_GaHoUqyxSeox4Bq81citwmC7er5b";import{T as Y,s as Qe,c as Je,n as et,a as tt,d as nt,P as N,Q as ne,M as k,b as pe,e as ve,G as ge,C as Ue,f as Be,g as He,L as fe}from"./Loader.BSMhjkJy.js?dpl=dpl_GaHoUqyxSeox4Bq81citwmC7er5b";import{S as re}from"./Scroll.Cn1PC-ik.js?dpl=dpl_GaHoUqyxSeox4Bq81citwmC7er5b";import{D as rt,a as be,b as it,R as se,H as U,S as L,A as me,g as ot,G as st,s as Ve,M as Ye,c as Q,d as ke,e as at,F as lt,f as ct,B as ee,h as te,i as Te,j as Ee,k as ht,W as ut,T as dt,P as We,l as ft,m as Oe}from"./constants.BjrCfoV0.js?dpl=dpl_GaHoUqyxSeox4Bq81citwmC7er5b";import{a as A}from"./index.qhWH4hyb.js?dpl=dpl_GaHoUqyxSeox4Bq81citwmC7er5b";import{i as ye}from"./index.D4QqQnrz.js?dpl=dpl_GaHoUqyxSeox4Bq81citwmC7er5b";import{m as mt}from"./get-as-type.DE2KzHG0.js?dpl=dpl_GaHoUqyxSeox4Bq81citwmC7er5b";import{c as ae,f as B}from"./frame.BLSHbW_7.js?dpl=dpl_GaHoUqyxSeox4Bq81citwmC7er5b";import{V}from"./Renderer.BBiGe9H6.js?dpl=dpl_GaHoUqyxSeox4Bq81citwmC7er5b";import{s as Ge}from"./index.CBBIVAfP.js?dpl=dpl_GaHoUqyxSeox4Bq81citwmC7er5b";import{w as qe,i as pt}from"./utils.CbqEKoM7.js?dpl=dpl_GaHoUqyxSeox4Bq81citwmC7er5b";const vt=new DOMParser;function gt(h){return typeof h=="string"?vt.parseFromString(h,"text/html"):h}function z(h){const e=new URL(h,window.location.origin),t=e.hash.length?h.replace(e.hash,""):null;return{hasHash:e.hash.length>0,pathname:e.pathname.replace(/\/+$/,""),host:e.host,search:e.search,raw:h,href:t||e.href}}function Ae(h,e){h.parentNode.replaceChild(je(h,e),h)}function Se(h,e){(h.parentNode.tagName==="HEAD"?document.head:document.body).appendChild(je(h,e))}function je(h,e){const t=document.createElement(e);for(let n=0;n<h.attributes.length;n++){const r=h.attributes[n];t.setAttribute(r.nodeName,r.nodeValue)}return h.innerHTML&&(t.innerHTML=h.innerHTML),t}class X{constructor({wrapper:e}){this.wrapper=e}leave(e){return new Promise(t=>{this.onLeave({...e,done:t})})}enter(e){return new Promise(t=>{this.onEnter({...e,done:t})})}onLeave({from:e,trigger:t,done:n}){n()}onEnter({to:e,trigger:t,done:n}){n()}}class Z{constructor({content:e,page:t,title:n,wrapper:r}){this._contentString=e.outerHTML,this._DOM=null,this.page=t,this.title=n,this.wrapper=r,this.content=this.wrapper.lastElementChild}onEnter(){}onEnterCompleted(){}onLeave(){}onLeaveCompleted(){}initialLoad(){this.onEnter(),this.onEnterCompleted()}update(){document.title=this.title,this.wrapper.appendChild(this._DOM.firstElementChild),this.content=this.wrapper.lastElementChild,this._DOM=null}createDom(){this._DOM||(this._DOM=document.createElement("div"),this._DOM.innerHTML=this._contentString)}remove(){this.wrapper.firstElementChild.remove()}enter(e,t){return new Promise(n=>{this.onEnter(),e.enter({trigger:t,to:this.content}).then(()=>{this.onEnterCompleted(),n()})})}leave(e,t,n){return new Promise(r=>{this.onLeave(),e.leave({trigger:t,from:this.content}).then(()=>{n&&this.remove(),this.onLeaveCompleted(),r()})})}}class yt{data=new Map;regexCache=new Map;add(e,t,n){this.data.has(e)||(this.data.set(e,new Map),this.regexCache.set(e,new RegExp(`^${e}$`))),this.data.get(e).set(t,n),this.regexCache.set(t,new RegExp(`^${t}$`))}findMatch(e,t){for(const[n,r]of this.data)if(e.pathname.match(this.regexCache.get(n))){for(const[i,o]of r)if(t.pathname.match(this.regexCache.get(i)))return o;break}return null}}const Ce="A transition is currently in progress";class xt{isTransitioning=!1;currentCacheEntry=null;cache=new Map;activePromises=new Map;constructor(e={}){const{links:t="a[href]:not([target]):not([href^=\\#]):not([data-taxi-ignore])",removeOldContent:n=!0,allowInterruption:r=!1,bypassCache:i=!1,enablePrefetch:o=!0,renderers:s={default:Z},transitions:l={default:X},reloadJsFilter:a=u=>u.dataset.taxiReload!==void 0,reloadCssFilter:c=u=>!0}=e;this.renderers=s,this.transitions=l,this.defaultRenderer=this.renderers.default||Z,this.defaultTransition=this.transitions.default||X,this.wrapper=document.querySelector("[data-taxi]"),this.reloadJsFilter=a,this.reloadCssFilter=c,this.removeOldContent=n,this.allowInterruption=r,this.bypassCache=i,this.enablePrefetch=o,this.cache=new Map,this.isPopping=!1,this.attachEvents(t),this.currentLocation=z(window.location.href),this.cache.set(this.currentLocation.href,this.createCacheEntry(document.cloneNode(!0),window.location.href)),this.currentCacheEntry=this.cache.get(this.currentLocation.href),this.currentCacheEntry.renderer.initialLoad()}setDefaultRenderer(e){this.defaultRenderer=this.renderers[e]}setDefaultTransition(e){this.defaultTransition=this.transitions[e]}addRoute(e,t,n){this.router||(this.router=new yt),this.router.add(e,t,n)}preload(e,t=!1){return e=z(e).href,this.cache.has(e)?Promise.resolve():this.fetch(e,!1).then(async n=>{this.cache.set(e,this.createCacheEntry(n.html,n.url)),t&&this.cache.get(e).renderer.createDom()}).catch(n=>console.warn(n))}updateCache(e){const t=z(e||window.location.href).href;this.cache.has(t)&&this.cache.delete(t),this.cache.set(t,this.createCacheEntry(document.cloneNode(!0),t))}clearCache(e){const t=z(e||window.location.href).href;this.cache.has(t)&&this.cache.delete(t)}navigateTo(e,t=!1,n=!1){return new Promise((r,i)=>{if(!this.allowInterruption&&this.isTransitioning){i(new Error(Ce));return}this.isTransitioning=!0,this.isPopping=!0,this.targetLocation=z(e),this.popTarget=window.location.href;const o=new(this.chooseTransition(t))({wrapper:this.wrapper});let s;if(this.bypassCache||!this.cache.has(this.targetLocation.href)||this.cache.get(this.targetLocation.href).skipCache){const l=this.fetch(this.targetLocation.href).then(a=>{this.cache.set(this.targetLocation.href,this.createCacheEntry(a.html,a.url)),this.cache.get(this.targetLocation.href).renderer.createDom()}).catch(a=>{window.location.href=e});s=this.beforeFetch(this.targetLocation,o,n).then(async()=>l.then(async()=>await this.afterFetch(this.targetLocation,o,this.cache.get(this.targetLocation.href),n)))}else this.cache.get(this.targetLocation.href).renderer.createDom(),s=this.beforeFetch(this.targetLocation,o,n).then(async()=>await this.afterFetch(this.targetLocation,o,this.cache.get(this.targetLocation.href),n));s.then(()=>{r()})})}on(e,t){g.on(e,t)}off(e,t){g.off(e,t)}beforeFetch(e,t,n){return g.emit("NAVIGATE_OUT",{from:this.currentCacheEntry,trigger:n}),new Promise(r=>{this.currentCacheEntry.renderer.leave(t,n,this.removeOldContent).then(()=>{n!=="popstate"&&window.history.pushState({},"",e.raw),r()})})}afterFetch(e,t,n,r){return this.currentLocation=e,this.popTarget=this.currentLocation.href,new Promise(i=>{n.renderer.update(),g.emit("NAVIGATE_IN",{from:this.currentCacheEntry,to:n,trigger:r}),this.reloadJsFilter&&this.loadScripts(n.scripts),this.reloadCssFilter&&this.loadStyles(n.styles),r!=="popstate"&&e.href!==z(n.finalUrl).href&&window.history.replaceState({},"",n.finalUrl),n.renderer.enter(t,r).then(()=>{g.emit("NAVIGATE_END",{from:this.currentCacheEntry,to:n,trigger:r}),this.currentCacheEntry=n,this.isTransitioning=!1,this.isPopping=!1,i()})})}loadScripts(e){const t=[...e],n=Array.from(document.querySelectorAll("script")).filter(this.reloadJsFilter);for(let r=0;r<n.length;r++)for(let i=0;i<t.length;i++)if(n[r].outerHTML===t[i].outerHTML){Ae(n[r],"SCRIPT"),t.splice(i,1);break}for(const r of t)Se(r,"SCRIPT")}loadStyles(e){const t=Array.from(document.querySelectorAll('link[rel="stylesheet"]')).filter(this.reloadCssFilter),n=Array.from(document.querySelectorAll("style")).filter(this.reloadCssFilter),r=e.filter(i=>{if(i.href){if(!t.find(o=>o.href===i.href))return document.body.append(i),!1}else return!0});for(let i=0;i<n.length;i++)for(let o=0;o<r.length;o++)if(n[i].outerHTML===r[o].outerHTML){Ae(n[i],"STYLE"),r.splice(o,1);break}for(const i of r)Se(i,"STYLE")}attachEvents(e){g.delegate("click",e,this.onClick),g.on("popstate",window,this.onPopstate),this.enablePrefetch&&g.delegate("mouseenter focus",e,this.onPrefetch)}onClick=e=>{if(!(e.metaKey||e.ctrlKey)){const t=z(e.currentTarget.href);if(this.currentLocation=z(window.location.href),this.currentLocation.host!==t.host)return;if(this.currentLocation.href!==t.href||this.currentLocation.hasHash&&!t.hasHash){e.preventDefault(),this.navigateTo(t.raw,e.currentTarget.dataset.transition||!1,e.currentTarget).catch(n=>console.warn(n));return}!this.currentLocation.hasHash&&!t.hasHash&&e.preventDefault()}};onPopstate=()=>{const e=z(window.location.href);if(e.pathname===this.currentLocation.pathname&&e.search===this.currentLocation.search&&!this.isPopping)return!1;if(!this.allowInterruption&&(this.isTransitioning||this.isPopping))return window.history.pushState({},"",this.popTarget),console.warn(Ce),!1;this.isPopping||(this.popTarget=window.location.href),this.isPopping=!0,this.navigateTo(window.location.href,!1,"popstate")};onPrefetch=e=>{const t=z(e.currentTarget.href);this.currentLocation.host===t.host&&this.preload(e.currentTarget.href,!1)};fetch(e,t=!0){if(this.activePromises.has(e))return this.activePromises.get(e);const n=new Promise((r,i)=>{let o;fetch(e,{mode:"same-origin",method:"GET",headers:{"X-Requested-With":"Taxi"},credentials:"same-origin"}).then(s=>(s.ok||(i("Taxi encountered a non 2xx HTTP status code"),t&&(window.location.href=e)),o=s.url,s.text())).then(s=>{r({html:gt(s),url:o})}).catch(s=>{i(s),t&&(window.location.href=e)}).finally(()=>{this.activePromises.delete(e)})});return this.activePromises.set(e,n),n}chooseTransition(e){if(e)return this.transitions[e];const t=this.router?.findMatch(this.currentLocation,this.targetLocation);return t?this.transitions[t]:this.defaultTransition}createCacheEntry(e,t){const n=e.querySelector("[data-taxi-view]"),r=n.dataset.taxiView.length?this.renderers[n.dataset.taxiView]:this.defaultRenderer;return r||console.warn(`The Renderer "${n.dataset.taxiView}" was set in the data-taxi-view of the requested page, but not registered in Taxi.`),{page:e,content:n,finalUrl:t,skipCache:n.hasAttribute("data-taxi-nocache"),scripts:this.reloadJsFilter?Array.from(e.querySelectorAll("script")).filter(this.reloadJsFilter):[],styles:this.reloadCssFilter?Array.from(e.querySelectorAll('link[rel="stylesheet"], style')).filter(this.reloadCssFilter):[],title:e.title,renderer:new r({wrapper:this.wrapper,title:e.title,content:n,page:e})}}}class W{constructor(e,{width:t=e.canvas.width,height:n=e.canvas.height,target:r=e.FRAMEBUFFER,color:i=1,depth:o=!0,stencil:s=!1,depthTexture:l=!1,wrapS:a=e.CLAMP_TO_EDGE,wrapT:c=e.CLAMP_TO_EDGE,wrapR:u=e.CLAMP_TO_EDGE,minFilter:d=e.LINEAR,magFilter:f=d,type:x=e.UNSIGNED_BYTE,format:T=e.RGBA,internalFormat:p=T,unpackAlignment:m,premultiplyAlpha:w}={}){this.gl=e,this.width=t,this.height=n,this.depth=o,this.stencil=s,this.buffer=this.gl.createFramebuffer(),this.target=r,this.gl.renderer.bindFramebuffer(this),this.textures=[];const y=[];for(let b=0;b<i;b++)this.textures.push(new Y(e,{width:t,height:n,wrapS:a,wrapT:c,wrapR:u,minFilter:d,magFilter:f,type:x,format:T,internalFormat:p,unpackAlignment:m,premultiplyAlpha:w,flipY:!1,generateMipmaps:!1})),this.textures[b].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+b,this.gl.TEXTURE_2D,this.textures[b].texture,0),y.push(this.gl.COLOR_ATTACHMENT0+b);y.length>1&&this.gl.renderer.drawBuffers(y),this.texture=this.textures[0],l&&(this.gl.renderer.isWebgl2||this.gl.renderer.getExtension("WEBGL_depth_texture"))?(this.depthTexture=new Y(e,{width:t,height:n,minFilter:this.gl.NEAREST,magFilter:this.gl.NEAREST,format:this.stencil?this.gl.DEPTH_STENCIL:this.gl.DEPTH_COMPONENT,internalFormat:e.renderer.isWebgl2?this.stencil?this.gl.DEPTH24_STENCIL8:this.gl.DEPTH_COMPONENT16:this.gl.DEPTH_COMPONENT,type:this.stencil?this.gl.UNSIGNED_INT_24_8:this.gl.UNSIGNED_INT}),this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.stencil?this.gl.DEPTH_STENCIL_ATTACHMENT:this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(o&&!s&&(this.depthBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,t,n),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,this.depthBuffer)),s&&!o&&(this.stencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,t,n),this.gl.framebufferRenderbuffer(this.target,this.gl.STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.stencilBuffer)),o&&s&&(this.depthStencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,t,n),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.depthStencilBuffer))),this.gl.renderer.bindFramebuffer({target:this.target})}setSize(e,t){if(!(this.width===e&&this.height===t)){this.width=e,this.height=t,this.gl.renderer.bindFramebuffer(this);for(let n=0;n<this.textures.length;n++)this.textures[n].width=e,this.textures[n].height=t,this.textures[n].needsUpdate=!0,this.textures[n].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+n,this.gl.TEXTURE_2D,this.textures[n].texture,0);this.depthTexture?(this.depthTexture.width=e,this.depthTexture.height=t,this.depthTexture.needsUpdate=!0,this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(this.depthBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,e,t)),this.stencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,e,t)),this.depthStencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,e,t))),this.gl.renderer.bindFramebuffer({target:this.target})}}}class wt extends Array{constructor(e=0,t=e,n=e,r=e){return super(e,t,n,r),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set w(e){this[3]=e}set(e,t=e,n=e,r=e){return e.length?this.copy(e):(Qe(this,e,t,n,r),this)}copy(e){return Je(this,e),this}normalize(){return et(this,this),this}multiply(e){return tt(this,this,e),this}dot(e){return nt(this,e)}fromArray(e,t=0){return this[0]=e[t],this[1]=e[t+1],this[2]=e[t+2],this[3]=e[t+3],this}toArray(e=[],t=0){return e[t]=this[0],e[t+1]=this[1],e[t+2]=this[2],e[t+3]=this[3],e}}const bt=`
    precision highp float;
    precision highp int;

    attribute vec3 position;
    attribute vec3 normal;

    uniform mat3 normalMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    varying vec3 vNormal;

    void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,Tt=`
    precision highp float;
    precision highp int;

    varying vec3 vNormal;

    void main() {
        gl_FragColor.rgb = normalize(vNormal);
        gl_FragColor.a = 1.0;
    }
`;function Et(h){return new N(h,{vertex:bt,fragment:Tt,cullFace:!1})}const Me=new V,Ot=new V,At=new V,St=new V,Pe=new ne,Ct=new ne,Mt=new ne,Pt=new ne;class Dt{constructor(e,t=1){this.data=e,this.elapsed=0,this.weight=t,this.loop=!0,this.startTime=e.reduce((n,{times:r})=>Math.min(n,r[0]),1/0),this.endTime=e.reduce((n,{times:r})=>Math.max(n,r[r.length-1]),0),this.duration=this.endTime-this.startTime}update(e=1,t){const n=t?1:this.weight/e,r=this.duration?(this.loop?this.elapsed%this.duration:Math.min(this.elapsed,this.duration-.001))+this.startTime:0;this.data.forEach(({node:i,transform:o,interpolation:s,times:l,values:a})=>{if(!this.duration){let w=Me,y=3;o==="quaternion"&&(w=Pe,y=4),w.fromArray(a,0),y===4?i[o].slerp(w,n):i[o].lerp(w,n);return}const c=Math.max(1,l.findIndex(w=>w>r))-1,u=c+1;let d=(r-l[c])/(l[u]-l[c]);s==="STEP"&&(d=0);let f=Me,x=Ot,T=At,p=St,m=3;o==="quaternion"&&(f=Pe,x=Ct,T=Mt,p=Pt,m=4),s==="CUBICSPLINE"?(f.fromArray(a,c*m*3+m*1),x.fromArray(a,c*m*3+m*2),T.fromArray(a,u*m*3+m*0),p.fromArray(a,u*m*3+m*1),f=this.cubicSplineInterpolate(d,f,x,T,p),m===4&&f.normalize()):(f.fromArray(a,c*m),p.fromArray(a,u*m),m===4?f.slerp(p,d):f.lerp(p,d)),m===4?i[o].slerp(f,n):i[o].lerp(f,n)})}cubicSplineInterpolate(e,t,n,r,i){const o=e*e,s=o*e,l=3*o-2*s,a=s-o,c=1-l,u=a-o+e;for(let d=0;d<t.length;d++)t[d]=c*t[d]+u*(1-e)*n[d]+l*i[d]+a*e*r[d];return t}}const De=new pe,Rt=new pe;class It extends k{constructor(e,{skeleton:t,geometry:n,program:r,mode:i=e.TRIANGLES}={}){super(e,{geometry:n,program:r,mode:i}),this.skeleton=t,this.program=r,this.createBoneTexture()}createBoneTexture(){if(!this.skeleton.joints.length)return;const e=Math.max(4,Math.pow(2,Math.ceil(Math.log(Math.sqrt(this.skeleton.joints.length*4))/Math.LN2)));this.boneMatrices=new Float32Array(e*e*4),this.boneTextureSize=e,this.boneTexture=new Y(this.gl,{image:this.boneMatrices,generateMipmaps:!1,type:this.gl.FLOAT,internalFormat:this.gl.renderer.isWebgl2?this.gl.RGBA32F:this.gl.RGBA,minFilter:this.gl.NEAREST,magFilter:this.gl.NEAREST,flipY:!1,width:e})}updateUniforms(){this.skeleton.joints.forEach((e,t)=>{De.multiply(e.worldMatrix,e.bindInverse),this.boneMatrices.set(De,t*16)}),this.boneTexture.needsUpdate=!0,this.program.uniforms.boneTexture.value=this.boneTexture,this.program.uniforms.boneTextureSize.value=this.boneTextureSize}draw({camera:e}={}){this.program.uniforms.boneTexture||Object.assign(this.program.uniforms,{boneTexture:{value:this.boneTexture},boneTextureSize:{value:this.boneTextureSize}}),this.updateUniforms();const t=this.worldMatrix;this.worldMatrix=Rt,super.draw({camera:e}),this.worldMatrix=t}}class _t extends k{constructor(...e){super(...e),this.frustumCulled=!1,this.isInstancedMesh=!0}addFrustumCull(){this.instanceTransforms=null,this.instanceLightmapScaleOffset=null,this.totalInstanceCount=0,this.frustumCullFunction=null,this.instanceRenderList=null,this.geometry.attributes.instanceMatrix||console.error(`mesh ${this.name?`"${this.name}" `:""}missing instanceMatrix attribute; unable to frustum cull`);const e=this.geometry.attributes.instanceMatrix.data;this.instanceTransforms=[];for(let t=0,n=0;t<e.length;t+=16,n++){const r=new ve;r.index=n,r.matrix.fromArray(e,t),r.decompose(),this.instanceTransforms.push(r),r.setParent(this.parent)}if(this.totalInstanceCount=this.instanceTransforms.length,this.geometry.attributes.lightmapScaleOffset){const t=this.geometry.attributes.lightmapScaleOffset.data;for(let n=0,r=0;n<t.length;n+=4,r++)this.instanceTransforms[r].lightmapData=new wt().fromArray(t,n)}this.frustumCullFunction=({camera:t})=>{this.instanceRenderList=[],this.instanceTransforms.forEach(n=>{t.frustumIntersectsMesh(this,n.worldMatrix)&&this.instanceRenderList.push(n)}),this.instanceRenderList.forEach((n,r)=>{n.matrix.toArray(this.geometry.attributes.instanceMatrix.data,r*16),n.lightmapData&&(n.lightmapData.toArray(this.geometry.attributes.lightmapScaleOffset.data,r*4),this.geometry.attributes.lightmapScaleOffset.needsUpdate=!0)}),this.geometry.instancedCount=this.instanceRenderList.length,this.geometry.attributes.instanceMatrix.needsUpdate=!0},this.onBeforeRender(this.frustumCullFunction)}removeFrustumCull(){this.offBeforeRender(this.frustumCullFunction),this.geometry.instancedCount=this.totalInstanceCount,this.instanceTransforms.forEach((e,t)=>{e.matrix.toArray(this.geometry.attributes.instanceMatrix.data,t*16),e.lightmapData&&(e.lightmapData.toArray(this.geometry.attributes.lightmapScaleOffset.data,t*4),this.geometry.attributes.lightmapScaleOffset.needsUpdate=!0)}),this.geometry.attributes.instanceMatrix.needsUpdate=!0}}const Re={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array,"image/jpeg":Uint8Array,"image/png":Uint8Array,"image/webp":Uint8Array},Nt={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ie={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},zt={translation:"position",rotation:"quaternion",scale:"scale"};class ${static setDracoManager(e){this.dracoManager=e}static setBasisManager(e){this.basisManager=e}static async load(e,t){const n=t.split("/").slice(0,-1).join("/")+"/",r=await this.parseDesc(t);return this.parse(e,r,n)}static async parse(e,t,n){(t.asset===void 0||t.asset.version[0]<2)&&console.warn("Only GLTF >=2.0 supported. Attempting to parse."),t.extensionsRequired?.includes("KHR_draco_mesh_compression")&&!this.dracoManager&&console.warn("KHR_draco_mesh_compression extension required but no manager supplied. Use .setDracoManager()"),t.extensionsRequired?.includes("KHR_texture_basisu")&&!this.basisManager&&console.warn("KHR_texture_basisu extension required but no manager supplied. Use .setBasisManager()");const r=await this.loadBuffers(t,n);e.renderer.bindVertexArray(null);const i=this.parseBufferViews(e,t,r),o=await this.parseImages(e,t,n,i),s=this.parseTextures(e,t,o),l=this.parseMaterials(e,t,s),a=this.parseSkins(e,t,i),c=await this.parseMeshes(e,t,i,l,a),[u,d]=this.parseNodes(e,t,c,a,o);this.populateSkins(a,u);const f=this.parseAnimations(e,t,u,i),x=this.parseScenes(t,u),T=x[t.scene],p=this.parseLights(e,t,u,x);for(let m=u.length;m>=0;m--)u[m]||u.splice(m,1);return{json:t,buffers:r,bufferViews:i,cameras:d,images:o,textures:s,materials:l,meshes:c,nodes:u,lights:p,animations:f,scenes:x,scene:T}}static parseDesc(e){return fetch(e,{mode:"cors"}).then(t=>t.arrayBuffer()).then(t=>{const n=new TextDecoder;return n.decode(new Uint8Array(t,0,4))==="glTF"?this.unpackGLB(t):JSON.parse(n.decode(t))})}static unpackGLB(e){const t=new Uint32Array(e,0,3);if(t[0]!==1179937895)throw new Error("Invalid glTF asset.");if(t[1]!==2)throw new Error(`Unsupported glTF binary version, "${t[1]}".`);const n=new Uint32Array(e,12,2),r=20,i=n[0];if(n[1]!==1313821514)throw new Error("Unexpected GLB layout.");const o=new TextDecoder().decode(e.slice(r,r+i)),s=JSON.parse(o);if(r+i===e.byteLength)return s;const l=new Uint32Array(e,r+i,2);if(l[1]!==5130562)throw new Error("Unexpected GLB layout.");const a=r+i+8,c=l[0],u=e.slice(a,a+c);return s.buffers[0].binary=u,s}static resolveURI(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}static loadBuffers(e,t){return e.buffers?Promise.all(e.buffers.map(n=>{if(n.binary)return n.binary;const r=this.resolveURI(n.uri,t);return fetch(r,{mode:"cors"}).then(i=>i.arrayBuffer())})):null}static parseBufferViews(e,t,n){if(!t.bufferViews)return null;const r=t.bufferViews;return t.meshes&&t.meshes.forEach(({primitives:i})=>{i.forEach(({attributes:o,indices:s,extensions:l})=>{for(const a in o){const c=t.accessors[o[a]];c.bufferView===void 0&&l&&l.KHR_draco_mesh_compression&&(c.bufferView=l.KHR_draco_mesh_compression.bufferView,r[c.bufferView].isDraco=!0),r[c.bufferView].isAttribute=!0}if(s!==void 0){const a=t.accessors[s];a.bufferView===void 0&&l&&l.KHR_draco_mesh_compression&&(a.bufferView=l.KHR_draco_mesh_compression.bufferView,r[a.bufferView].isDraco=!0),r[a.bufferView].isAttribute=!0,r[a.bufferView].target=e.ELEMENT_ARRAY_BUFFER}})}),t.accessors.forEach(({bufferView:i,componentType:o})=>{i!==void 0&&(r[i].componentType=o)}),t.images&&t.images.forEach(({uri:i,bufferView:o,mimeType:s})=>{o!==void 0&&(r[o].mimeType=s)}),r.forEach(({buffer:i,byteOffset:o=0,byteLength:s,byteStride:l,target:a=e.ARRAY_BUFFER,name:c,extensions:u,extras:d,componentType:f,mimeType:x,isAttribute:T,isDraco:p},m)=>{if(r[m].data=n[i].slice(o,o+s),!T||p)return;const w=e.createBuffer();e.bindBuffer(a,w),e.renderer.state.boundBuffer=w,e.bufferData(a,r[m].data,e.STATIC_DRAW),r[m].buffer=w}),r}static parseImages(e,t,n,r){return t.images?Promise.all(t.images.map(async({uri:i,bufferView:o,mimeType:s,name:l})=>{if(s==="image/ktx2"){const{data:c}=r[o];return await this.basisManager.parseTexture(c)}const a=new Image;if(a.name=l,i)a.src=this.resolveURI(i,n);else if(o!==void 0){const{data:c}=r[o],u=new Blob([c],{type:s});a.src=URL.createObjectURL(u)}return a.ready=new Promise(c=>{a.onload=()=>c()}),a})):null}static parseTextures(e,t,n){return t.textures?t.textures.map(r=>this.createTexture(e,t,n,r)):null}static createTexture(e,t,n,{sampler:r,source:i,name:o,extensions:s,extras:l}){i===void 0&&s&&(s.EXT_texture_webp&&(i=s.EXT_texture_webp.source),s.KHR_texture_basisu&&(i=s.KHR_texture_basisu.source));const a=n[i];if(a.texture)return a.texture;const c={flipY:!1,wrapS:e.REPEAT,wrapT:e.REPEAT},u=r!==void 0?t.samplers[r]:null;if(u&&["magFilter","minFilter","wrapS","wrapT"].forEach(f=>{u[f]&&(c[f]=u[f])}),a.isBasis){c.image=a,c.internalFormat=a.internalFormat,a.isCompressedTexture&&(c.generateMipmaps=!1,a.length>1&&(this.minFilter=e.NEAREST_MIPMAP_LINEAR));const f=new Y(e,c);return f.name=o,a.texture=f,f}const d=new Y(e,c);return d.name=o,a.texture=d,a.ready.then(()=>{d.image=a}),d}static parseMaterials(e,t,n){return t.materials?t.materials.map(({name:r,extensions:i,extras:o,pbrMetallicRoughness:s={},normalTexture:l,occlusionTexture:a,emissiveTexture:c,emissiveFactor:u=[0,0,0],alphaMode:d="OPAQUE",alphaCutoff:f=.5,doubleSided:x=!1})=>{const{baseColorFactor:T=[1,1,1,1],baseColorTexture:p,metallicFactor:m=1,roughnessFactor:w=1,metallicRoughnessTexture:y}=s;return p&&(p.texture=n[p.index]),l&&(l.texture=n[l.index]),y&&(y.texture=n[y.index]),a&&(a.texture=n[a.index]),c&&(c.texture=n[c.index]),{name:r,extensions:i,extras:o,baseColorFactor:T,baseColorTexture:p,metallicFactor:m,roughnessFactor:w,metallicRoughnessTexture:y,normalTexture:l,occlusionTexture:a,emissiveTexture:c,emissiveFactor:u,alphaMode:d,alphaCutoff:f,doubleSided:x}}):null}static parseSkins(e,t,n){return t.skins?t.skins.map(({inverseBindMatrices:r,skeleton:i,joints:o})=>({inverseBindMatrices:this.parseAccessor(r,t,n),skeleton:i,joints:o})):null}static parseMeshes(e,t,n,r,i){return t.meshes?Promise.all(t.meshes.map(async({primitives:o,weights:s,name:l,extensions:a,extras:c={}},u)=>{let d=0,f=[],x=!1;return t.nodes&&t.nodes.forEach(({mesh:p,skin:m,extras:w})=>{p===u&&(d++,m!==void 0&&f.push(m),w&&w.lightmap_scale_offset&&(x=!0))}),!!f.length?(o=await Promise.all(f.map(async p=>(await this.parsePrimitives(e,o,t,n,r,1,x)).map(({geometry:m,program:w,mode:y})=>{const b=new It(e,{skeleton:i[p],geometry:m,program:w,mode:y});return b.name=l,b.extras=c,a&&(b.extensions=a),b.frustumCulled=!1,b}))),o.instanceCount=0,o.numInstances=d):o=(await this.parsePrimitives(e,o,t,n,r,d,x)).map(({geometry:p,program:m,mode:w})=>{const y=p.attributes.instanceMatrix?_t:k,b=new y(e,{geometry:p,program:m,mode:w});return b.name=l,b.extras=c,a&&(b.extensions=a),b.numInstances=d,b}),{primitives:o,weights:s,name:l}})):null}static parsePrimitives(e,t,n,r,i,o,s){return Promise.all(t.map(async({attributes:l,indices:a,material:c,mode:u=4,targets:d,extensions:f,extras:x})=>{const T=new Et(e);c!==void 0&&(T.gltfMaterial=i[c]);const p=new ge(e);if(x&&(p.extras=x),f&&(p.extensions=f),f&&f.KHR_draco_mesh_compression){const m=f.KHR_draco_mesh_compression.bufferView,w=f.KHR_draco_mesh_compression.attributes,y={},b={},O={},_={};for(const C in l){const v=n.accessors[l[C]],S=Ie[C];y[S]=w[C],b[S]=v.componentType,O[S]=Re[v.componentType].name,_[S]=v.normalized===!0}const{data:M}=r[m],P=await this.dracoManager.decodeGeometry(M,{attributeIds:y,attributeTypes:O});for(let C=0;C<P.attributes.length;C++){const v=P.attributes[C],S=v.name,R=v.array,D=v.itemSize,F=b[S],H=_[S],oe=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,oe),e.renderer.state.boundBuffer=oe,e.bufferData(e.ARRAY_BUFFER,R,e.STATIC_DRAW),p.addAttribute(S,{data:R,size:D,type:F,normalized:H,buffer:oe})}if(P.index){const C=P.index.array,v=P.index.itemSize,S=e.createBuffer();e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,S),e.renderer.state.boundBuffer=S,e.bufferData(e.ELEMENT_ARRAY_BUFFER,C,e.STATIC_DRAW),p.addAttribute("index",{data:C,size:v,type:5125,normalized:!1,buffer:S})}}else{for(const m in l)p.addAttribute(Ie[m],this.parseAccessor(l[m],n,r));a!==void 0&&p.addAttribute("index",this.parseAccessor(a,n,r))}return o>1&&p.addAttribute("instanceMatrix",{instanced:1,size:16,data:new Float32Array(o*16)}),s&&p.addAttribute("lightmapScaleOffset",{instanced:1,size:4,data:new Float32Array(o*4)}),{geometry:p,program:T,mode:u}}))}static parseAccessor(e,t,n){const{bufferView:r,byteOffset:i=0,componentType:o,normalized:s=!1,count:l,type:a,min:c,max:u,sparse:d}=t.accessors[e],{data:f,buffer:x,byteOffset:T=0,byteStride:p=0,target:m}=n[r],w=Nt[a],y=Re[o],b=y.BYTES_PER_ELEMENT,O=p/b,_=!!p&&O!==w;let M;if(_){const P=new y(f,i);M=new y(l*w);for(let C=0;C<l;C++){const v=O*C,S=v+w;M.set(P.slice(v,S),C*w)}}else M=new y(f,i,l*w);return{data:M,size:w,type:o,normalized:s,buffer:x,stride:p,offset:i,count:l,min:c,max:u}}static parseNodes(e,t,n,r,i){if(!t.nodes)return null;const o=[],s=t.nodes.map(({camera:l,children:a,skin:c,matrix:u,mesh:d,rotation:f,scale:x,translation:T,weights:p,name:m,extensions:w,extras:y})=>{const b=l!==void 0,O=b?new Ue(e):new ve;if(b){const v=t.cameras[l];if(v.type==="perspective"){const{yfov:S,znear:R,zfar:D}=v.perspective;O.perspective({fov:S*(180/Math.PI),near:R,far:D})}else{const{xmag:S,ymag:R,znear:D,zfar:F}=v.orthographic;O.orthographic({near:D,far:F,left:-S,right:S,top:-R,bottom:R})}o.push(O)}m&&(O.name=m),y&&(O.extras=y),w&&(O.extensions=w),y&&y.lightmapTexture!==void 0&&(y.lightmapTexture.texture=this.createTexture(e,t,i,{source:y.lightmapTexture.index})),u?(O.matrix.copy(u),O.decompose()):(f&&O.quaternion.copy(f),x&&O.scale.copy(x),T&&O.position.copy(T),O.updateMatrix());let _=!1,M=!0,P=!1;if(d!==void 0&&(c!==void 0?(n[d].primitives[n[d].primitives.instanceCount].forEach(v=>{y&&Object.assign(v.extras,y),v.setParent(O)}),n[d].primitives.instanceCount++,n[d].primitives.instanceCount===n[d].primitives.numInstances&&(delete n[d].primitives.numInstances,delete n[d].primitives.instanceCount)):n[d].primitives.forEach(v=>{y&&Object.assign(v.extras,y),v.geometry.isInstanced&&(_=!0,v.instanceCount?M=!1:v.instanceCount=0,v.geometry.attributes.instanceMatrix&&(P=!0,O.matrix.toArray(v.geometry.attributes.instanceMatrix.data,v.instanceCount*16)),v.geometry.attributes.lightmapScaleOffset&&v.geometry.attributes.lightmapScaleOffset.data.set(y.lightmap_scale_offset,v.instanceCount*4),v.instanceCount++,v.instanceCount===v.numInstances&&(delete v.numInstances,delete v.instanceCount,v.geometry.attributes.instanceMatrix&&(v.geometry.attributes.instanceMatrix.needsUpdate=!0),v.geometry.attributes.lightmapScaleOffset&&(v.geometry.attributes.lightmapScaleOffset.needsUpdate=!0))),_?M&&v.setParent(O):v.setParent(O)})),P){if(!M)return null;O.matrix.identity(),O.decompose()}return O});return t.nodes.forEach(({children:l=[]},a)=>{l.forEach(c=>{s[c]&&s[c].setParent(s[a])})}),n.forEach(({primitives:l},a)=>{l.forEach((c,u)=>{c.isInstancedMesh&&c.addFrustumCull()})}),[s,o]}static populateSkins(e,t){e&&e.forEach(n=>{n.joints=n.joints.map((r,i)=>{const o=t[r];return o.skin=n,o.bindInverse=new pe(...n.inverseBindMatrices.data.slice(i*16,(i+1)*16)),o}),n.skeleton&&(n.skeleton=t[n.skeleton])})}static parseAnimations(e,t,n,r){return t.animations?t.animations.map(({channels:i,samplers:o,name:s},l)=>{const a=i.map(({sampler:c,target:u})=>{const{input:d,interpolation:f="LINEAR",output:x}=o[c],{node:T,path:p}=u,m=n[T],w=zt[p],y=this.parseAccessor(d,t,r).data,b=this.parseAccessor(x,t,r).data;return m.animations||(m.animations=[]),m.animations.includes(l)||m.animations.push(l),{node:m,transform:w,interpolation:f,times:y,values:b}});return{name:s,animation:new Dt(a)}}):null}static parseScenes(e,t){return e.scenes?e.scenes.map(({nodes:n=[],name:r,extensions:i,extras:o})=>{const s=n.reduce((l,a)=>(t[a]&&l.push(t[a]),l),[]);return s.extras=o,s}):null}static parseLights(e,t,n,r){const i={directional:[],point:[],spot:[]};r.forEach(s=>s.forEach(l=>l.updateMatrixWorld()));const o=t.extensions?.KHR_lights_punctual?.lights||[];return n.forEach(s=>{if(!s?.extensions?.KHR_lights_punctual)return;const l=s.extensions.KHR_lights_punctual.light,a=o[l],c={name:a.name||"",color:{value:new V().set(a.color||1)}};switch(a.intensity!==void 0&&c.color.value.multiply(a.intensity),a.type){case"directional":c.direction={value:new V(0,0,1).transformDirection(s.worldMatrix)};break;case"point":c.position={value:new V().applyMatrix4(s.worldMatrix)},c.distance={value:a.range},c.decay={value:2};break;case"spot":Object.assign(c,a);break}i[a.type].push(c)}),i}}let le=0;class Xe{constructor(e){this.onMessage=this.onMessage.bind(this),this.queue=new Map,this.initWorker(e)}initWorker(e){this.worker=new Worker(e),this.worker.onmessage=this.onMessage}onMessage({data:e}){const{id:t,error:n,geometry:r}=e;if(n){console.log(n,t);return}const i=this.queue.get(t);this.queue.delete(t),i(r)}decodeGeometry(e,t){le++,this.worker.postMessage({id:le,buffer:e,config:t});let n;const r=new Promise(i=>n=i);return this.queue.set(le,n),r}}let ce,he=0;class Ze{constructor(e,t){ce||(ce=this.getSupportedFormat(t)),this.onMessage=this.onMessage.bind(this),this.queue=new Map,this.initWorker(e)}getSupportedFormat(e=document.createElement("canvas").getContext("webgl")){return e.getExtension("WEBGL_compressed_texture_astc")?"astc":e.getExtension("EXT_texture_compression_bptc")?"bptc":e.getExtension("WEBGL_compressed_texture_s3tc")?"s3tc":e.getExtension("WEBGL_compressed_texture_etc1")?"etc1":e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc")?"pvrtc":"none"}initWorker(e){this.worker=new Worker(e),this.worker.onmessage=this.onMessage}onMessage({data:e}){const{id:t,error:n,image:r}=e;if(n){console.log(n,t);return}const i=this.queue.get(t);this.queue.delete(t),r.isBasis=!0,i(r)}parseTexture(e){he++,this.worker.postMessage({id:he,buffer:e,supportedFormat:ce});let t;const n=new Promise(r=>t=r);return this.queue.set(he,t),n}}class Ft{audioElements=new Map;fadeAnimations=new Map;pausedByVisibility=new Set;currentDoorIndex=null;pendingDoorIndex=null;enabled=!1;onDoorActive=e=>this.handleDoorActive(e);onPlay=()=>this.handlePlay();onPause=()=>this.handlePause();onVisibilityChange=()=>this.handleVisibilityChange();async init(e){g.on("DOOR:ACTIVE",this.onDoorActive),g.on("AUDIO:PLAY",this.onPlay),g.on("AUDIO:PAUSE",this.onPause),document.addEventListener("visibilitychange",this.onVisibilityChange)}resize(e){}update(e){}render(e){}dispose(){g.off("DOOR:ACTIVE",this.onDoorActive),g.off("AUDIO:PLAY",this.onPlay),g.off("AUDIO:PAUSE",this.onPause),document.removeEventListener("visibilitychange",this.onVisibilityChange),this.fadeAnimations.forEach(e=>e.stop()),this.fadeAnimations.clear(),this.audioElements.forEach(e=>{e.pause(),e.src=""}),this.audioElements.clear(),this.pausedByVisibility.clear(),this.currentDoorIndex=null,this.pendingDoorIndex=null,this.enabled=!1}handleDoorActive({index:e}){this.pendingDoorIndex=e,this.enabled&&this.playDoor(e)}handlePlay(){if(this.enabled)return;this.enabled=!0;const e=this.pendingDoorIndex??0;this.playDoor(e)}handlePause(){this.enabled&&(this.enabled=!1,this.stopCurrent())}playDoor(e){if(!this.enabled||this.currentDoorIndex===e)return;this.currentDoorIndex!==null&&this.currentDoorIndex!==e&&this.fadeOut(this.currentDoorIndex);const t=this.getOrCreateAudio(e);t&&(this.currentDoorIndex=e,this.fadeIn(e,t))}stopCurrent(){this.currentDoorIndex!==null&&(this.fadeOut(this.currentDoorIndex),this.currentDoorIndex=null)}fadeIn(e,t){this.fadeAnimations.get(e)?.stop(),t.loop=!0,t.volume=0,t.play().catch(()=>{});const n=A(0,rt,{duration:be,ease:"easeOut",onUpdate:r=>{t.volume=r},onComplete:()=>{this.fadeAnimations.delete(e)}});this.fadeAnimations.set(e,n)}fadeOut(e){const t=this.audioElements.get(e);if(!t||t.paused)return;this.fadeAnimations.get(e)?.stop();const n=t.volume,r=A(n,0,{duration:be,ease:"easeIn",onUpdate:i=>{t.volume=i},onComplete:()=>{t.pause(),t.currentTime=0,this.fadeAnimations.delete(e),this.pausedByVisibility.delete(e)}});this.fadeAnimations.set(e,r)}getOrCreateAudio(e){const t=this.audioElements.get(e);if(t)return t;const n=it[e];if(!n)return null;const r=new Audio;return r.preload="auto",r.src=n,this.audioElements.set(e,r),r}handleVisibilityChange(){document.visibilityState==="hidden"?this.audioElements.forEach((e,t)=>{e.paused||(e.pause(),this.pausedByVisibility.add(t))}):(this.pausedByVisibility.forEach(e=>{this.audioElements.get(e)?.play().catch(()=>{})}),this.pausedByVisibility.clear())}}class Lt{homeOffset={x:0,y:0,z:0};oldSceneOffset={x:0,y:0,z:0};newSceneOffset={x:0,y:0,z:0};headerOffset={y:0,z:0};footerOffset={y:0,z:0};homeAnimation=null;oldSceneAnimation=null;newSceneAnimation=null;headerAnimation=null;footerAnimation=null;onUnveil=()=>this.handleUnveil();onPageReady=()=>this.handlePageReady();async init(e){E.getInstance().cameraSource=this,g.on("BRUSH:UNVEIL_START",this.onUnveil),g.on("PAGE:READY",this.onPageReady)}resize(e){}update(e){}render(e){}dispose(){g.off("BRUSH:UNVEIL_START",this.onUnveil),g.off("PAGE:READY",this.onPageReady);const e=E.getInstance();e.cameraSource===this&&(e.cameraSource=null),this.reset()}handleUnveil(){E.getInstance().mode==="home"?this.playReveal():this.playHeaderReveal()}handlePageReady(){E.getInstance().mode==="subpage"&&this.playFooterReveal()}playReveal(){return this.homeOffset.y=se.startY,this.homeOffset.z=se.startZ,this.animateHomeTo({y:0,z:0},se.duration,"easeOut")}playExitZoom(){return this.homeAnimation?.stop(),new Promise(e=>{this.homeAnimation=A(0,1,{duration:U.exitDuration,ease:"easeInOut",onUpdate:t=>{this.homeOffset.z=U.oldDoor.endZ*t},onComplete:()=>{this.homeAnimation=null,e()}})})}playOldSceneOut(){this.oldSceneAnimation?.stop(),this.oldSceneAnimation=A(0,1,{duration:U.oldDoor.duration,ease:"easeIn",onUpdate:e=>{this.oldSceneOffset.z=U.oldDoor.endZ*e},onComplete:()=>{this.oldSceneAnimation=null}})}playNewSceneIn(){this.newSceneAnimation?.stop(),this.newSceneOffset.y=U.newDoor.startY,this.newSceneOffset.z=U.newDoor.startZ;const e=this.newSceneOffset.y,t=this.newSceneOffset.z;this.newSceneAnimation=A(0,1,{duration:U.newDoor.duration,ease:"easeOut",onUpdate:n=>{this.newSceneOffset.y=e*(1-n),this.newSceneOffset.z=t*(1-n)},onComplete:()=>{this.newSceneAnimation=null,this.newSceneOffset.x=0,this.newSceneOffset.y=0,this.newSceneOffset.z=0}})}resetTransition(){this.oldSceneAnimation?.stop(),this.newSceneAnimation?.stop(),this.oldSceneAnimation=null,this.newSceneAnimation=null,this.oldSceneOffset.x=0,this.oldSceneOffset.y=0,this.oldSceneOffset.z=0,this.newSceneOffset.x=0,this.newSceneOffset.y=0,this.newSceneOffset.z=0}playHeaderReveal(){this.headerOffset.y=L.startY,this.headerOffset.z=L.startZ;const e=this.headerOffset.y,t=this.headerOffset.z;return new Promise(n=>{this.headerAnimation?.stop(),this.headerAnimation=A(0,1,{duration:L.duration,ease:"easeOut",onUpdate:r=>{this.headerOffset.y=e*(1-r),this.headerOffset.z=t*(1-r)},onComplete:()=>{this.headerAnimation=null,n()}})})}playHeaderExitZoom(){return this.headerAnimation?.stop(),new Promise(e=>{this.headerAnimation=A(0,1,{duration:L.exitDuration,ease:"easeInOut",onUpdate:t=>{this.headerOffset.z=U.oldDoor.endZ*t},onComplete:()=>{this.headerAnimation=null,e()}})})}resetHeader(){this.headerAnimation?.stop(),this.headerAnimation=null,this.headerOffset.y=0,this.headerOffset.z=0}playFooterReveal(){this.footerOffset.y=L.startY,this.footerOffset.z=L.startZ;const e=this.footerOffset.y,t=this.footerOffset.z;return new Promise(n=>{this.footerAnimation?.stop(),this.footerAnimation=A(0,1,{duration:L.duration,ease:"easeOut",onUpdate:r=>{this.footerOffset.y=e*(1-r),this.footerOffset.z=t*(1-r)},onComplete:()=>{this.footerAnimation=null,n()}})})}resetFooter(){this.footerAnimation?.stop(),this.footerAnimation=null,this.footerOffset.y=0,this.footerOffset.z=0}setFooterToStartPosition(){this.footerOffset.y=L.startY,this.footerOffset.z=L.startZ}reset(){this.homeAnimation?.stop(),this.homeAnimation=null,this.homeOffset.x=0,this.homeOffset.y=0,this.homeOffset.z=0,this.resetTransition(),this.resetHeader(),this.resetFooter()}animateHomeTo(e,t,n){return new Promise(r=>{this.homeAnimation?.stop();const i={...this.homeOffset};this.homeAnimation=A(0,1,{duration:t,ease:n,onUpdate:o=>{e.x!==void 0&&(this.homeOffset.x=i.x+(e.x-i.x)*o),e.y!==void 0&&(this.homeOffset.y=i.y+(e.y-i.y)*o),e.z!==void 0&&(this.homeOffset.z=i.z+(e.z-i.z)*o)},onComplete:()=>{this.homeAnimation=null,r()}})})}}const $e=Math.sqrt(3),Ut=.5*($e-1),j=(3-$e)/6,_e=h=>Math.floor(h)|0,Ne=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Bt(h=Math.random){const e=Ht(h),t=new Float64Array(e).map(r=>Ne[r%12*2]),n=new Float64Array(e).map(r=>Ne[r%12*2+1]);return function(i,o){let s=0,l=0,a=0;const c=(i+o)*Ut,u=_e(i+c),d=_e(o+c),f=(u+d)*j,x=u-f,T=d-f,p=i-x,m=o-T;let w,y;p>m?(w=1,y=0):(w=0,y=1);const b=p-w+j,O=m-y+j,_=p-1+2*j,M=m-1+2*j,P=u&255,C=d&255;let v=.5-p*p-m*m;if(v>=0){const D=P+e[C],F=t[D],H=n[D];v*=v,s=v*v*(F*p+H*m)}let S=.5-b*b-O*O;if(S>=0){const D=P+w+e[C+y],F=t[D],H=n[D];S*=S,l=S*S*(F*b+H*O)}let R=.5-_*_-M*M;if(R>=0){const D=P+1+e[C+1],F=t[D],H=n[D];R*=R,a=R*R*(F*_+H*M)}return 70*(s+l+a)}}function Ht(h){const t=new Uint8Array(512);for(let n=0;n<512/2;n++)t[n]=n;for(let n=0;n<512/2-1;n++){const r=n+~~(h()*(256-n)),i=t[n];t[n]=t[r],t[r]=i}for(let n=256;n<512;n++)t[n]=t[n-256];return t}const Vt=.1,Yt=73e-5,kt=.24;class Wt{abortController=new AbortController;noise=Bt();stopInView=null;mouse=new we(-1,-1);targetMouse=new we(-1,-1);noiseX=0;noiseY=0;hoverInfluence=0;async init(e){this.addEventListeners(),E.getInstance().inputSource=this}resize(e){}update(e){this.mouse.lerp(this.targetMouse,Vt);const t=e.timestamp*Yt*kt;this.noiseX=this.noise(t,0),this.noiseY=this.noise(0,t)}render(e){}dispose(){this.abortController.abort(),this.stopInView?.(),this.stopInView=null,this.hoverInfluence=0;const e=E.getInstance();e.inputSource===this&&(e.inputSource=null)}setHoverTarget(e){if(this.stopInView?.(),this.stopInView=null,e===null){this.hoverInfluence=0;return}if(e==="always"){this.hoverInfluence=1;return}this.stopInView=ye(e,()=>(this.hoverInfluence=1,()=>{this.hoverInfluence=0}))}addEventListeners(){const{signal:e}=this.abortController;"ontouchstart"in window?(window.addEventListener("touchstart",this.updatePointer,{signal:e,capture:!1}),window.addEventListener("touchmove",this.updatePointer,{signal:e,capture:!1})):window.addEventListener("mousemove",this.updatePointer,{signal:e,capture:!1})}updatePointer=e=>{let t,n;"changedTouches"in e&&e.changedTouches.length?(t=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY):(t=e.clientX,n=e.clientY);const{width:r,height:i}=E.getInstance().screen;this.targetMouse.x=t/r*2-1,this.targetMouse.y=-(n/i)*2+1}}const Gt=.001,ze=50,qt=768,jt=.3,Fe=.7,Xt=6;class Zt{abortController=null;arcMotionValue=mt(0);arcSpringAnimation=null;arcNavigationThreshold=Fe;isOverscrolling=!1;hasTriggeredNavigation=!1;decayCallback=null;unsubscribeArc=null;lastTouchY=0;paused=!0;onPageLeave=()=>this.pause();onPageReady=()=>this.resume();async init(e){const t=E.getInstance().subpageSurface;if(!t||!t.getFooterElement())return;this.updateThreshold(e.screen.width),this.abortController=new AbortController;const{signal:n}=this.abortController;window.addEventListener("wheel",this.handleWheel,{passive:!0,signal:n}),window.addEventListener("touchstart",this.handleTouchStart,{passive:!0,signal:n}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!0,signal:n}),g.on("PAGE:LEAVE",this.onPageLeave),g.on("PAGE:READY",this.onPageReady),E.getInstance().overscrollController=this}subscribeArcBridge(){this.unsubscribeArc?.(),this.unsubscribeArc=this.arcMotionValue.on("change",e=>{const t=E.getInstance().subpageSurface;t&&(t.program.uniforms.uFooterArc.value=e)})}resize(e){this.updateThreshold(e.screen.width)}update(e){}render(e){}dispose(){this.abortController?.abort(),this.abortController=null,this.arcSpringAnimation?.stop(),this.arcSpringAnimation=null,this.decayCallback&&(ae(this.decayCallback),this.decayCallback=null),this.unsubscribeArc?.(),this.unsubscribeArc=null,g.off("PAGE:LEAVE",this.onPageLeave),g.off("PAGE:READY",this.onPageReady),this.arcMotionValue.set(0),this.isOverscrolling=!1,this.hasTriggeredNavigation=!1;const e=E.getInstance();e.overscrollController===this&&(e.overscrollController=null)}pause(){this.paused||(this.paused=!0,this.arcSpringAnimation?.stop(),this.arcSpringAnimation=null,this.decayCallback&&(ae(this.decayCallback),this.decayCallback=null),this.unsubscribeArc?.(),this.unsubscribeArc=null,this.arcMotionValue.set(0),this.isOverscrolling=!1,this.hasTriggeredNavigation=!1)}resume(){this.paused&&(this.paused=!1,this.subscribeArcBridge())}updateThreshold(e){this.arcNavigationThreshold=e<qt?jt:Fe}isTaxiBusy(){return I.getInstance()?.taxi?.isTransitioning===!0}handleWheel=e=>{if(this.paused||this.isTaxiBusy())return;const t=document.documentElement.scrollHeight-window.innerHeight;window.scrollY>=t-ze&&e.deltaY>0&&this.handleOverscroll(e.deltaY)};handleTouchStart=e=>{this.lastTouchY=e.touches[0].clientY};handleTouchMove=e=>{if(this.paused||this.isTaxiBusy())return;const t=document.documentElement.scrollHeight-window.innerHeight,n=window.scrollY>=t-ze,r=e.touches[0].clientY,i=this.lastTouchY-r;this.lastTouchY=r,n&&i>0&&this.handleOverscroll(i)};handleOverscroll(e){this.isOverscrolling=!0,this.arcSpringAnimation?.stop(),this.arcSpringAnimation=null;const t=this.arcMotionValue.get(),n=1-t/me,r=e*Gt*n,i=Math.min(t+r,me);this.arcMotionValue.set(i),i>=this.arcNavigationThreshold&&!this.hasTriggeredNavigation&&this.triggerFooterNavigation(),this.startOverscrollDecay()}triggerFooterNavigation(){if(this.hasTriggeredNavigation||this.isTaxiBusy())return;const t=E.getInstance().subpageSurface?.getFooterElement();if(!t)return;this.hasTriggeredNavigation=!0,this.springBack(),(t.tagName==="A"?t:t.querySelector("a[href]"))?.click()}springBack(){if(this.arcSpringAnimation?.stop(),this.arcMotionValue.get()<=.001){this.arcMotionValue.set(0);return}this.arcSpringAnimation=A(this.arcMotionValue,0,{type:"spring",stiffness:300,damping:25,mass:.8,velocity:this.arcMotionValue.getVelocity()})}startOverscrollDecay(){this.decayCallback&&(ae(this.decayCallback),this.decayCallback=null);let e=0;const t=()=>{if(e++,e>Xt&&this.isOverscrolling){this.springBack(),this.isOverscrolling=!1,this.decayCallback=null;return}B.render(t)};this.decayCallback=t,B.render(t)}}const ie=`uniform sampler2D tBaseColor;
uniform float uOpacity;

uniform float uOverlayOpacity;
uniform vec3 uOverlayColor;

varying vec2 vUv;

void main() {
	vec4 baseColor = texture2D(tBaseColor, vUv);

	// ? get base alpha
	float alpha = baseColor.a;

	// ? fixing z-fighting
	if (alpha < 0.9) discard;

	// ? add a transparent overlay (color controlled by uOverlayColor)
	baseColor.rgb = mix(baseColor.rgb, uOverlayColor, uOverlayOpacity);

	// ? convert to sRGB to display
	gl_FragColor = vec4(baseColor.rgb, uOpacity);
}
`,Ke=`attribute vec3 position;

#ifdef UV
	attribute vec2 uv;
#else
	const vec2 uv = vec2(0);
#endif

#ifdef NORMAL
	attribute vec3 normal;
#else
	const vec3 normal = vec3(0);
#endif

#ifdef INSTANCED
	attribute mat4 instanceMatrix;
#endif

#ifdef SKINNING
	attribute vec4 skinIndex;
	attribute vec4 skinWeight;
#endif

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;
uniform mat3 normalMatrix;

#ifdef SKINNING
	uniform sampler2D boneTexture;
	uniform int boneTextureSize;
#endif

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vMPos;
varying vec4 vMVPos;

#ifdef SKINNING
	mat4 getBoneMatrix(const in float i) {
		float j = i * 4.0;
		float x = mod(j, float(boneTextureSize));
		float y = floor(j / float(boneTextureSize));

		float dx = 1.0 / float(boneTextureSize);
		float dy = 1.0 / float(boneTextureSize);

		y = dy * (y + 0.5);

		vec4 v1 = texture2D(boneTexture, vec2(dx * (x + 0.5), y));
		vec4 v2 = texture2D(boneTexture, vec2(dx * (x + 1.5), y));
		vec4 v3 = texture2D(boneTexture, vec2(dx * (x + 2.5), y));
		vec4 v4 = texture2D(boneTexture, vec2(dx * (x + 3.5), y));

		return mat4(v1, v2, v3, v4);
	}

	void skin(inout vec4 pos, inout vec3 nml) {
		mat4 boneMatX = getBoneMatrix(skinIndex.x);
		mat4 boneMatY = getBoneMatrix(skinIndex.y);
		mat4 boneMatZ = getBoneMatrix(skinIndex.z);
		mat4 boneMatW = getBoneMatrix(skinIndex.w);

		// Update normal
		mat4 skinMatrix = mat4(0.0);
		skinMatrix += skinWeight.x * boneMatX;
		skinMatrix += skinWeight.y * boneMatY;
		skinMatrix += skinWeight.z * boneMatZ;
		skinMatrix += skinWeight.w * boneMatW;
		nml = vec4(skinMatrix * vec4(nml, 0.0)).xyz;

		// Update position
		vec4 transformed = vec4(0.0);
		transformed += boneMatX * pos * skinWeight.x;
		transformed += boneMatY * pos * skinWeight.y;
		transformed += boneMatZ * pos * skinWeight.z;
		transformed += boneMatW * pos * skinWeight.w;
		pos = transformed;
	}
#endif

void main() {
	vec4 pos = vec4(position, 1);
	vec3 nml = normal;

	#ifdef SKINNING
		skin(pos, nml);
	#endif

	#ifdef INSTANCED
		pos = instanceMatrix * pos;

		mat3 m = mat3(instanceMatrix);
		nml /= vec3(dot(m[0], m[0]), dot(m[1], m[1]), dot(m[2], m[2]));
		nml = m * nml;
	#endif

	vUv = uv;
	vNormal = normalize(nml);

	vec4 mPos = modelMatrix * pos;
	vMPos = mPos.xyz / mPos.w;
	vMVPos = modelViewMatrix * pos;

	gl_Position = projectionMatrix * vMVPos;
}
`;class K{scene;gltf=null;isLoaded=!1;programs=[];opacityAnimation=null;constructor(){this.scene=new ve}async load(e,t,n){this.gltf=e,(e.scene||e.scenes[0]).forEach(i=>{i.setParent(this.scene),i.traverse(o=>{if(!("program"in o))return;const s=this.resolveProgram(o,t);o.program=s,this.programs.push(s),this.onProgramNode(o,n)})}),this.isLoaded=!0}resolveProgram(e,t){return this.createStandardProgram(e,t)}onProgramNode(e,t){}update(e){}setOverlayOpacityMode(e){const t=this.overlayOpacity[e];this.programs.forEach(n=>{n.uniforms.uOverlayOpacity&&(n.uniforms.uOverlayOpacity.value=t)})}getOverlayOpacity(){return this.overlayOpacity}setOpacity(e,t=!1,n=.5){return this.opacityAnimation?.stop(),this.opacityAnimation=null,t?new Promise(r=>{const i=this.programs[0]?.uniforms.uOpacity?.value??1;this.opacityAnimation=A(i,e,{duration:n,ease:"easeOut",onUpdate:o=>{this.programs.forEach(s=>{s.uniforms.uOpacity&&(s.uniforms.uOpacity.value=o)})},onComplete:()=>{this.opacityAnimation=null,r()}})}):(this.programs.forEach(r=>{r.uniforms.uOpacity&&(r.uniforms.uOpacity.value=e)}),Promise.resolve())}createStandardProgram(e,t){const n=e.program.gltfMaterial,{vertexPrefix:r,fragmentPrefix:i,defines:o}=G(t),s=new N(t.gl,{vertex:r+o+Ke,fragment:i+o+ie,uniforms:{tBaseColor:{value:n.baseColorTexture.texture},uOpacity:{value:1},uOverlayOpacity:{value:this.overlayOpacity.home},uOverlayColor:{value:[this.overlayColor.r,this.overlayColor.g,this.overlayColor.b]}},transparent:!0}),l=t.gl;return s.setBlendFunc(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA,l.ONE,l.ONE_MINUS_SRC_ALPHA),s}dispose(){this.opacityAnimation?.stop(),this.scene.children.forEach(e=>e.setParent(null)),this.isLoaded=!1,this.gltf=null,this.programs=[]}}function G(h){const e=h.isWebgl2?`#version 300 es
			#define attribute in
			#define varying out
			#define texture2D texture
		`:"",t=h.isWebgl2?`#version 300 es
				precision highp float;
				#define varying in
				#define texture2D texture
				#define gl_FragColor FragColor
				out vec4 FragColor;
			`:`#extension GL_OES_standard_derivatives : enable
				precision highp float;
			`;return{vertexPrefix:e,fragmentPrefix:t,defines:`
		#define UV
		#define NORMAL
		#define COLOR_MAP
	`}}class $t extends K{overlayColor={r:45/255,g:29/255,b:19/255};overlayOpacity={home:.15,subpage:.15};floatingAnimations=[];onProgramNode(e,t){if(!e.name||!e.name.toLowerCase().includes("floating"))return;const n={x:e.quaternion.x,y:e.quaternion.y,z:e.quaternion.z,w:e.quaternion.w},r=t?.syncFloatingAnimations?0:Math.random()*10-10,i=A(0,1,{duration:5,repeat:1/0,repeatType:"mirror",ease:"easeInOut",delay:r,onUpdate:o=>{e.position.x=Math.sin(o*Math.PI*2)*.02,e.position.z=o*.3}});this.floatingAnimations.push({animation:i,node:e,initialQuaternion:n})}resetFloatingAnimations(){for(const{animation:e,node:t,initialQuaternion:n}of this.floatingAnimations)e.stop(),t.position.x=0,t.position.z=0,t.quaternion.x=n.x,t.quaternion.y=n.y,t.quaternion.z=n.z,t.quaternion.w=n.w;this.floatingAnimations=[]}dispose(){this.resetFloatingAnimations(),super.dispose()}}const xe=`attribute vec3 position;

#ifdef UV
	attribute vec2 uv;
#else
	const vec2 uv = vec2(0);
#endif

#ifdef NORMAL
	attribute vec3 normal;
#else
	const vec3 normal = vec3(0);
#endif

#ifdef INSTANCED
	attribute mat4 instanceMatrix;
#endif

#ifdef SKINNING
	attribute vec4 skinIndex;
	attribute vec4 skinWeight;
#endif

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;
uniform mat3 normalMatrix;
uniform float uTime;
uniform float uWaterAxis; // 0.0 = Y axis, 1.0 = X axis

#ifdef SKINNING
	uniform sampler2D boneTexture;
	uniform int boneTextureSize;
#endif

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vMPos;
varying vec4 vMVPos;

#ifdef SKINNING
	mat4 getBoneMatrix(const in float i) {
		float j = i * 4.0;
		float x = mod(j, float(boneTextureSize));
		float y = floor(j / float(boneTextureSize));

		float dx = 1.0 / float(boneTextureSize);
		float dy = 1.0 / float(boneTextureSize);

		y = dy * (y + 0.5);

		vec4 v1 = texture2D(boneTexture, vec2(dx * (x + 0.5), y));
		vec4 v2 = texture2D(boneTexture, vec2(dx * (x + 1.5), y));
		vec4 v3 = texture2D(boneTexture, vec2(dx * (x + 2.5), y));
		vec4 v4 = texture2D(boneTexture, vec2(dx * (x + 3.5), y));

		return mat4(v1, v2, v3, v4);
	}

	void skin(inout vec4 pos, inout vec3 nml) {
		mat4 boneMatX = getBoneMatrix(skinIndex.x);
		mat4 boneMatY = getBoneMatrix(skinIndex.y);
		mat4 boneMatZ = getBoneMatrix(skinIndex.z);
		mat4 boneMatW = getBoneMatrix(skinIndex.w);

		// Update normal
		mat4 skinMatrix = mat4(0.0);
		skinMatrix += skinWeight.x * boneMatX;
		skinMatrix += skinWeight.y * boneMatY;
		skinMatrix += skinWeight.z * boneMatZ;
		skinMatrix += skinWeight.w * boneMatW;
		nml = vec4(skinMatrix * vec4(nml, 0.0)).xyz;

		// Update position
		vec4 transformed = vec4(0.0);
		transformed += boneMatX * pos * skinWeight.x;
		transformed += boneMatY * pos * skinWeight.y;
		transformed += boneMatZ * pos * skinWeight.z;
		transformed += boneMatW * pos * skinWeight.w;
		pos = transformed;
	}
#endif

// Simplex 3D Noise 
// by Ian McEwan, Ashima Arts
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

float snoise(vec3 v){ 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 = v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //  x0 = x0 - 0.0 + 0.0 * C 
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

// Permutations
  i = mod(i, 289.0 ); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients
// ( N*N points uniformly over a square, mapped onto an octahedron.)
  float n_ = 1.0/7.0; // N=7
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
}

void main() {
	vec4 pos = vec4(position, 1);
	vec3 nml = normal;

	#ifdef SKINNING
		skin(pos, nml);
	#endif

	#ifdef INSTANCED
		pos = instanceMatrix * pos;

		mat3 m = mat3(instanceMatrix);
		nml /= vec3(dot(m[0], m[0]), dot(m[1], m[1]), dot(m[2], m[2]));
		nml = m * nml;
	#endif

	// ? water noise
	float noise = snoise(vec3(pos.xz * 5.0, uTime * 0.5));
	pos.y += noise * 0.003 * (1.0 - uWaterAxis);
	pos.x += noise * 0.015 * uWaterAxis;

	vUv = uv;
	vNormal = normalize(nml);

	vec4 mPos = modelMatrix * pos;
	vMPos = mPos.xyz / mPos.w;
	vMVPos = modelViewMatrix * pos;

	gl_Position = projectionMatrix * vMVPos;
}
`;class Kt extends K{overlayColor={r:31/255,g:47/255,b:54/255};overlayOpacity={home:.3,subpage:.3};sharedTime={value:0};resolveProgram(e,t){const n=e.name?.toLowerCase()??"";return n.includes("water")?this.createWaterProgram(e,t,n.includes("water x")):this.createStandardProgram(e,t)}update(e){this.sharedTime.value=e.time*.5}createWaterProgram(e,t,n){const r=e.program.gltfMaterial,{vertexPrefix:i,fragmentPrefix:o,defines:s}=G(t);return new N(t.gl,{vertex:i+s+xe,fragment:o+s+ie,uniforms:{tBaseColor:{value:r.baseColorTexture.texture},uOpacity:{value:1},uOverlayOpacity:{value:this.overlayOpacity.home},uOverlayColor:{value:[this.overlayColor.r,this.overlayColor.g,this.overlayColor.b]},uTime:this.sharedTime,uWaterAxis:{value:n?1:0}},transparent:!0})}}const Qt=`uniform float uTime;
uniform float uOpacity;
uniform vec3 uColor;

uniform float uOverlayOpacity;
uniform vec3 uOverlayColor;

varying vec2 vUv;
varying float vSeed;

void main() {
	// ? distance from center for radial glow
	vec2 center = vUv - 0.5;
	float dist = length(center);

	// ? soft circular falloff
	float glow = 1.0 - smoothstep(0.0, 0.5, dist);
	glow = pow(glow, 2.0);

	// ? pulsing brightness - each luciole has unique phase
	float pulseSpeed = 2.0 + vSeed * 2.0;
	float pulsePhase = vSeed * 6.28318;
	float pulse = 0.4 + 0.6 * (0.5 + 0.5 * sin(uTime * pulseSpeed + pulsePhase));

	// ? occasional brighter flashes
	float flash = pow(0.5 + 0.5 * sin(uTime * 0.5 + pulsePhase * 3.0), 8.0);
	pulse += flash * 2.75;

	// ? final alpha
	float alpha = glow * pulse * uOpacity;

	// ? discard nearly transparent pixels
	if (alpha < 0.01) discard;

	// ? warm glow color
	vec3 color = uColor;

	// ? add a transparent overlay (color controlled by uOverlayColor)
	color = mix(color, uOverlayColor, uOverlayOpacity);

	gl_FragColor = vec4(color, alpha);
}
`,Jt=`attribute vec3 position;
attribute vec2 uv;

// ? instance attributes
attribute vec3 aOffset;
attribute float aSeed;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;

uniform float uTime;
uniform float uSize;

varying vec2 vUv;
varying float vSeed;

// ? simplex noise helpers
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
	const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
	const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

	vec3 i = floor(v + dot(v, C.yyy));
	vec3 x0 = v - i + dot(i, C.xxx);

	vec3 g = step(x0.yzx, x0.xyz);
	vec3 l = 1.0 - g;
	vec3 i1 = min(g.xyz, l.zxy);
	vec3 i2 = max(g.xyz, l.zxy);

	vec3 x1 = x0 - i1 + C.xxx;
	vec3 x2 = x0 - i2 + C.yyy;
	vec3 x3 = x0 - D.yyy;

	i = mod289(i);
	vec4 p = permute(permute(permute(
		i.z + vec4(0.0, i1.z, i2.z, 1.0))
		+ i.y + vec4(0.0, i1.y, i2.y, 1.0))
		+ i.x + vec4(0.0, i1.x, i2.x, 1.0));

	float n_ = 0.142857142857;
	vec3 ns = n_ * D.wyz - D.xzx;

	vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

	vec4 x_ = floor(j * ns.z);
	vec4 y_ = floor(j - 7.0 * x_);

	vec4 x = x_ * ns.x + ns.yyyy;
	vec4 y = y_ * ns.x + ns.yyyy;
	vec4 h = 1.0 - abs(x) - abs(y);

	vec4 b0 = vec4(x.xy, y.xy);
	vec4 b1 = vec4(x.zw, y.zw);

	vec4 s0 = floor(b0) * 2.0 + 1.0;
	vec4 s1 = floor(b1) * 2.0 + 1.0;
	vec4 sh = -step(h, vec4(0.0));

	vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
	vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

	vec3 p0 = vec3(a0.xy, h.x);
	vec3 p1 = vec3(a0.zw, h.y);
	vec3 p2 = vec3(a1.xy, h.z);
	vec3 p3 = vec3(a1.zw, h.w);

	vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
	p0 *= norm.x;
	p1 *= norm.y;
	p2 *= norm.z;
	p3 *= norm.w;

	vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
	m = m * m;
	return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

void main() {
	vUv = uv;
	vSeed = aSeed;

	// ? organic movement using noise
	float timeOffset = aSeed * 100.0;
	float speed = 0.3 + aSeed * 0.2;

	vec3 noiseOffset = vec3(
		snoise(vec3(timeOffset, uTime * speed, 0.0)),
		snoise(vec3(0.0, timeOffset, uTime * speed)),
		snoise(vec3(uTime * speed, 0.0, timeOffset))
	) * 0.4;

	// ? base position + noise movement
	vec3 worldPos = aOffset + noiseOffset;

	// ? billboard: get camera right and up vectors from view matrix
	vec3 camRight = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
	vec3 camUp = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);

	// ? offset quad vertices to face camera
	vec3 vertexPos = worldPos + camRight * position.x * uSize + camUp * position.y * uSize;

	gl_Position = projectionMatrix * viewMatrix * vec4(vertexPos, 1.0);
}
`;class en{mesh;program;overlayColor={r:0,g:0,b:0};overlayOpacity={home:0,subpage:.3};constructor(e,t={}){const{count:n=6,bounds:r={x:[-1,1],y:[0,2],z:[-.5,.5]},size:i=.08,color:o=[1,.9,.5]}=t;this.program=this.createProgram(e,i,o),this.mesh=new k(e.gl,{geometry:this.createGeometry(e,n,r),program:this.program})}createGeometry(e,t,n){const r=new Float32Array([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0]),i=new Float32Array([0,0,1,0,1,1,0,1]),o=new Uint16Array([0,1,2,0,2,3]),s=new Float32Array(t*3),l=new Float32Array(t);for(let a=0;a<t;a++)s[a*3+0]=n.x[0]+Math.random()*(n.x[1]-n.x[0]),s[a*3+1]=n.y[0]+Math.random()*(n.y[1]-n.y[0]),s[a*3+2]=n.z[0]+Math.random()*(n.z[1]-n.z[0]),l[a]=Math.random();return new ge(e.gl,{position:{size:3,data:r},uv:{size:2,data:i},index:{data:o},aOffset:{instanced:1,size:3,data:s},aSeed:{instanced:1,size:1,data:l}})}createProgram(e,t,n){const r=e.isWebgl2?`#version 300 es
				#define attribute in
				#define varying out
				#define texture2D texture
			`:"",i=e.isWebgl2?`#version 300 es
					precision highp float;
					#define varying in
					#define texture2D texture
					#define gl_FragColor FragColor
					out vec4 FragColor;
				`:`#extension GL_OES_standard_derivatives : enable
					precision highp float;
				`;return new N(e.gl,{vertex:r+Jt,fragment:i+Qt,uniforms:{uTime:{value:0},uSize:{value:t},uColor:{value:n},uOpacity:{value:1},uOverlayOpacity:{value:this.overlayOpacity.home},uOverlayColor:{value:[this.overlayColor.r,this.overlayColor.g,this.overlayColor.b]}},transparent:!0,depthWrite:!1})}setOverlayOpacityMode(e){this.program.uniforms.uOverlayOpacity.value=this.overlayOpacity[e]}setOpacity(e){this.program.uniforms.uOpacity.value=e}dispose(){this.mesh.geometry.remove()}}const tn=`uniform sampler2D tBaseColor;
uniform float uOpacity;

uniform float uOverlayOpacity;
uniform vec3 uOverlayColor;

uniform float uTime;
uniform float uWindIntensity;

varying vec2 vUv;

void main() {
	// ? wind sway distortion on UVs
	// ? base (bottom) stays fixed, top sways more
	float heightFactor = 1.0 - vUv.y;

	// ? wind parameters - slower and gentler than fire
	float windFrequency = 5.0;
	float windSpeed = 0.2;
	float wave = heightFactor * windFrequency - uTime * windSpeed;

	// ? add a second wave at different frequency for more organic feel
	float wave2 = heightFactor * 5.0 - uTime * 0.8;

	// ? amplitude increases toward top (rooted at base)
	float amplitude = heightFactor * heightFactor * 0.02 * uWindIntensity;

	// ? combine two waves for organic movement
	float distortion = sin(wave) * 0.7 + sin(wave2) * 0.3;

	// ? distort UV.x with combined waves (horizontal sway)
	vec2 distortedUv = vUv;
	distortedUv.x += distortion * amplitude;

	vec4 baseColor = texture2D(tBaseColor, distortedUv);

	// ? get base alpha
	float alpha = baseColor.a;

	// ? fixing z-fighting
	if (alpha < 0.9) discard;

	// ? add a transparent overlay (color controlled by uOverlayColor)
	baseColor.rgb = mix(baseColor.rgb, uOverlayColor, uOverlayOpacity);

	// ? convert to sRGB to display
	gl_FragColor = vec4(baseColor.rgb, uOpacity);
}
`,nn=`attribute vec3 position;

#ifdef UV
	attribute vec2 uv;
#else
	const vec2 uv = vec2(0);
#endif

#ifdef NORMAL
	attribute vec3 normal;
#else
	const vec3 normal = vec3(0);
#endif

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;
uniform mat3 normalMatrix;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vMPos;
varying vec4 vMVPos;

void main() {
	vec4 pos = vec4(position, 1);
	vec3 nml = normal;

	// ? pass through unchanged - wind effect will be in fragment shader

	vUv = uv;
	vNormal = normalize(nml);

	vec4 mPos = modelMatrix * pos;
	vMPos = mPos.xyz / mPos.w;
	vMVPos = modelViewMatrix * pos;

	gl_Position = projectionMatrix * vMVPos;
}
`,rn=`uniform sampler2D tBaseColor;
uniform float uOpacity;

uniform float uOverlayOpacity;
uniform vec3 uOverlayColor;

uniform float uTime;
uniform float uFlameIntensity;
uniform float uIsReflection;

varying vec2 vUv;

void main() {
	// ? traveling wave distortion on UVs
	// ? for reflections, flip so top is fixed and bottom waves
	float heightFactor = uIsReflection > 0.5 ? vUv.y : (1.5 - vUv.y);

	// ? wave parameters
	float waveFrequency = 12.0; // ? number of wave coils
	float waveSpeed = 5.0; // ? how fast wave travels up
	float wave = heightFactor * waveFrequency - uTime * waveSpeed;

	// ? amplitude increases toward top
	float amplitude = heightFactor * heightFactor * 0.03 * uFlameIntensity;

	// ? distort UV.x with sine wave
	vec2 distortedUv = vUv;
	distortedUv.x += sin(wave) * amplitude;

	vec4 baseColor = texture2D(tBaseColor, distortedUv);

	// ? get base alpha
	float alpha = baseColor.a;

	// ? fixing z-fighting
	if (alpha < 0.9) discard;

	// ? add a transparent overlay (color controlled by uOverlayColor)
	baseColor.rgb = mix(baseColor.rgb, uOverlayColor, uOverlayOpacity);

	// ? convert to sRGB to display
	gl_FragColor = vec4(baseColor.rgb, uOpacity);
}
`,on=`attribute vec3 position;

#ifdef UV
	attribute vec2 uv;
#else
	const vec2 uv = vec2(0);
#endif

#ifdef NORMAL
	attribute vec3 normal;
#else
	const vec3 normal = vec3(0);
#endif

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;
uniform mat3 normalMatrix;

uniform float uTime;
uniform float uFlameIntensity;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vMPos;
varying vec4 vMVPos;

void main() {
	vec4 pos = vec4(position, 1);
	vec3 nml = normal;

	// ? pass through unchanged - wave effect will be in fragment shader

	vUv = uv;
	vNormal = normalize(nml);

	vec4 mPos = modelMatrix * pos;
	vMPos = mPos.xyz / mPos.w;
	vMVPos = modelViewMatrix * pos;

	gl_Position = projectionMatrix * vMVPos;
}
`;class sn extends K{overlayColor={r:0,g:0,b:0};overlayOpacity={home:0,subpage:.3};sharedTimeFast={value:0};sharedTimeSlow={value:0};lucioles=null;async load(e,t){await super.load(e,t),this.lucioles=new en(t,{count:32,bounds:{x:[-5,5],y:[-3,5],z:[-.3,.3]},size:.04,color:[1,.85,.4]}),this.lucioles.mesh.setParent(this.scene)}resolveProgram(e,t){const n=e.name?.toLowerCase()??"";return n.includes("torch")?this.createTorchProgram(e,t,n.includes("reflection")):n.includes("flowers")?this.createFlowersProgram(e,t):n.includes("water")?this.createWaterProgram(e,t,n.includes("water x")):this.createStandardProgram(e,t)}update(e){this.sharedTimeFast.value=e.time,this.sharedTimeSlow.value=e.time*.5,this.lucioles&&(this.lucioles.program.uniforms.uTime.value=e.time)}setOverlayOpacityMode(e){super.setOverlayOpacityMode(e),this.lucioles?.setOverlayOpacityMode(e)}setOpacity(e,t=!1,n=.5){const r=super.setOpacity(e,t,n);return t?r.then(()=>{this.lucioles?.setOpacity(e)}):(this.lucioles?.setOpacity(e),r)}dispose(){this.lucioles?.dispose(),this.lucioles=null,super.dispose()}createTorchProgram(e,t,n){const r=e.program.gltfMaterial,{vertexPrefix:i,fragmentPrefix:o,defines:s}=G(t);return new N(t.gl,{vertex:i+s+on,fragment:o+s+rn,uniforms:{tBaseColor:{value:r.baseColorTexture.texture},uOpacity:{value:1},uOverlayOpacity:{value:this.overlayOpacity.home},uOverlayColor:{value:[this.overlayColor.r,this.overlayColor.g,this.overlayColor.b]},uTime:this.sharedTimeFast,uFlameIntensity:{value:1},uIsReflection:{value:n?1:0}},transparent:!0})}createFlowersProgram(e,t){const n=e.program.gltfMaterial,{vertexPrefix:r,fragmentPrefix:i,defines:o}=G(t);return new N(t.gl,{vertex:r+o+nn,fragment:i+o+tn,uniforms:{tBaseColor:{value:n.baseColorTexture.texture},uOpacity:{value:1},uOverlayOpacity:{value:this.overlayOpacity.home},uOverlayColor:{value:[this.overlayColor.r,this.overlayColor.g,this.overlayColor.b]},uTime:this.sharedTimeFast,uWindIntensity:{value:1}},transparent:!0})}createWaterProgram(e,t,n){const r=e.program.gltfMaterial,{vertexPrefix:i,fragmentPrefix:o,defines:s}=G(t);return new N(t.gl,{vertex:i+s+xe,fragment:o+s+ie,uniforms:{tBaseColor:{value:r.baseColorTexture.texture},uOpacity:{value:1},uOverlayOpacity:{value:this.overlayOpacity.home},uOverlayColor:{value:[this.overlayColor.r,this.overlayColor.g,this.overlayColor.b]},uTime:this.sharedTimeSlow,uWaterAxis:{value:n?1:0}},transparent:!0})}}const an=`uniform float uTime;
uniform float uOpacity;
uniform sampler2D tBird;

uniform float uOverlayOpacity;
uniform vec3 uOverlayColor;

varying vec2 vUv;
varying float vSeed;

void main() {
	float frameCount = 8.0;
	float fps = 20.0 + vSeed * 4.0;
	float frame = floor(mod(uTime * fps + vSeed * frameCount, frameCount));

	vec2 uv = vUv;
	uv.x = (1.0 - uv.x + frame) / frameCount;

	vec4 texColor = texture2D(tBird, uv);

	float luminance = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
	if (luminance > 0.55) discard;

	vec3 color = texColor.rgb;
	color = mix(color, uOverlayColor, uOverlayOpacity);

	gl_FragColor = vec4(color, uOpacity);
}
`,ln=`attribute vec3 position;
attribute vec2 uv;

attribute vec3 aOffset;
attribute float aSeed;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;

uniform float uTime;
uniform float uSize;
uniform float uSpeed;
uniform vec2 uAspect;
uniform float uLeftEdge;
uniform float uRightEdge;

varying vec2 vUv;
varying float vSeed;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
	const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
	const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

	vec3 i = floor(v + dot(v, C.yyy));
	vec3 x0 = v - i + dot(i, C.xxx);

	vec3 g = step(x0.yzx, x0.xyz);
	vec3 l = 1.0 - g;
	vec3 i1 = min(g.xyz, l.zxy);
	vec3 i2 = max(g.xyz, l.zxy);

	vec3 x1 = x0 - i1 + C.xxx;
	vec3 x2 = x0 - i2 + C.yyy;
	vec3 x3 = x0 - D.yyy;

	i = mod289(i);
	vec4 p = permute(permute(permute(
		i.z + vec4(0.0, i1.z, i2.z, 1.0))
		+ i.y + vec4(0.0, i1.y, i2.y, 1.0))
		+ i.x + vec4(0.0, i1.x, i2.x, 1.0));

	float n_ = 0.142857142857;
	vec3 ns = n_ * D.wyz - D.xzx;

	vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

	vec4 x_ = floor(j * ns.z);
	vec4 y_ = floor(j - 7.0 * x_);

	vec4 x = x_ * ns.x + ns.yyyy;
	vec4 y = y_ * ns.x + ns.yyyy;
	vec4 h = 1.0 - abs(x) - abs(y);

	vec4 b0 = vec4(x.xy, y.xy);
	vec4 b1 = vec4(x.zw, y.zw);

	vec4 s0 = floor(b0) * 2.0 + 1.0;
	vec4 s1 = floor(b1) * 2.0 + 1.0;
	vec4 sh = -step(h, vec4(0.0));

	vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
	vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

	vec3 p0 = vec3(a0.xy, h.x);
	vec3 p1 = vec3(a0.zw, h.y);
	vec3 p2 = vec3(a1.xy, h.z);
	vec3 p3 = vec3(a1.zw, h.w);

	vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
	p0 *= norm.x;
	p1 *= norm.y;
	p2 *= norm.z;
	p3 *= norm.w;

	vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
	m = m * m;
	return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

void main() {
	vUv = uv;
	vSeed = aSeed;

	float speedVariation = 0.8 + aSeed * 0.4;
	float timeOffset = aSeed * 100.0;
	float totalSpan = uRightEdge - uLeftEdge;
	float pauseDuration = 3.0 + aSeed * 7.0;  // 3-10 units of hidden time
	float totalCycle = totalSpan + pauseDuration;

	float rawProgress = aOffset.x + uTime * uSpeed * speedVariation;
	float cycleNumber = floor(rawProgress / totalCycle);
	float cycleProgress = mod(rawProgress, totalCycle);

	// Per-cycle variation - different Y/Z bounds each iteration
	float cycleVariationY = snoise(vec3(aSeed * 50.0, cycleNumber * 0.1, 0.0)) * 2.;
	float cycleVariationZ = snoise(vec3(aSeed * 75.0, cycleNumber * 0.1, 1.0)) * 3.;

	float currentX = cycleProgress < totalSpan
		? uLeftEdge + cycleProgress
		: uLeftEdge - 100.0;  // hide off-screen during pause

	float noiseY = snoise(vec3(timeOffset, uTime * 0.3, 0.0)) * 0.3;

	vec3 worldPos = vec3(currentX, aOffset.y + noiseY + cycleVariationY, aOffset.z + cycleVariationZ);

	vec3 camRight = vec3(viewMatrix[0][0], viewMatrix[1][0], viewMatrix[2][0]);
	vec3 camUp = vec3(viewMatrix[0][1], viewMatrix[1][1], viewMatrix[2][1]);

	float sizeVariation = 0.8 + aSeed * 0.4;
	vec3 vertexPos = worldPos + camRight * position.x * uSize * uAspect.x * sizeVariation + camUp * position.y * uSize * uAspect.y * sizeVariation;

	gl_Position = projectionMatrix * viewMatrix * vec4(vertexPos, 1.0);
}
`;class cn{mesh;program;texture;overlayColor={r:32/255,g:35/255,b:32/255};overlayOpacity={home:.2,subpage:.2};constructor(e,t={}){const{count:n=3,bounds:r={x:[-10,10],y:[1,4.2],z:[-8.8,-11]},size:i=.25,speed:o=2}=t;this.texture=new Y(e.gl,{generateMipmaps:!1});const s=new Image;s.onload=()=>this.texture.image=s,s.src="/models/assets/bird-sprite.jpg",this.program=this.createProgram(e,i,o,r.x[0],r.x[1]),this.mesh=new k(e.gl,{geometry:this.createGeometry(e,n,r),program:this.program})}createGeometry(e,t,n){const r=new Float32Array([-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0]),i=new Float32Array([0,0,1,0,1,1,0,1]),o=new Uint16Array([0,1,2,0,2,3]),s=new Float32Array(t*3),l=new Float32Array(t);for(let a=0;a<t;a++)s[a*3+0]=n.x[0]+Math.random()*(n.x[1]-n.x[0]),s[a*3+1]=n.y[0]+Math.random()*(n.y[1]-n.y[0]),s[a*3+2]=n.z[0]+Math.random()*(n.z[1]-n.z[0]),l[a]=Math.random();return new ge(e.gl,{position:{size:3,data:r},uv:{size:2,data:i},index:{data:o},aOffset:{instanced:1,size:3,data:s},aSeed:{instanced:1,size:1,data:l}})}createProgram(e,t,n,r,i){const o=e.isWebgl2?`#version 300 es
				#define attribute in
				#define varying out
				#define texture2D texture
			`:"",s=e.isWebgl2?`#version 300 es
					precision highp float;
					#define varying in
					#define texture2D texture
					#define gl_FragColor FragColor
					out vec4 FragColor;
				`:`precision highp float;
				`;return new N(e.gl,{vertex:o+ln,fragment:s+an,uniforms:{uTime:{value:0},uSize:{value:t},uSpeed:{value:n},uLeftEdge:{value:r},uRightEdge:{value:i},uAspect:{value:[.7,2.5]},uOpacity:{value:1},uOverlayOpacity:{value:this.overlayOpacity.home},uOverlayColor:{value:[this.overlayColor.r,this.overlayColor.g,this.overlayColor.b]},tBird:{value:this.texture}},transparent:!0,depthWrite:!1})}setOverlayOpacityMode(e){this.program.uniforms.uOverlayOpacity.value=this.overlayOpacity[e]}setOpacity(e){this.program.uniforms.uOpacity.value=e}dispose(){this.mesh.geometry.remove()}}const hn=`uniform sampler2D tBaseColor;
uniform float uOpacity;

uniform float uOverlayOpacity;
uniform vec3 uOverlayColor;

varying vec2 vUv;

void main() {
	vec4 baseColor = texture2D(tBaseColor, vUv);

	// ? discard nearly invisible pixels
	if (baseColor.a < 0.01) discard;

	// ? add a transparent overlay (color controlled by uOverlayColor)
	baseColor.rgb = mix(baseColor.rgb, uOverlayColor, uOverlayOpacity);

	// ? use texture alpha for soft cloud edges
	gl_FragColor = vec4(baseColor.rgb, baseColor.a * uOpacity);
}
`;class un extends K{overlayColor={r:32/255,g:35/255,b:32/255};overlayOpacity={home:.2,subpage:.2};sharedTimeSlow={value:0};cloudAnimations=[];birds=null;async load(e,t,n){await super.load(e,t,n),this.birds=new cn(t),this.birds.mesh.setParent(this.scene)}resolveProgram(e,t){const n=e.name?.toLowerCase()??"",r=n.includes("water"),i=n.includes("cloud");if(r||i){const o=e.program.gltfMaterial,{vertexPrefix:s,fragmentPrefix:l,defines:a}=G(t),c=r?xe:Ke,u=i?hn:ie,d=new N(t.gl,{vertex:s+a+c,fragment:l+a+u,uniforms:{tBaseColor:{value:o.baseColorTexture.texture},uOpacity:{value:1},uOverlayOpacity:{value:this.overlayOpacity.home},uOverlayColor:{value:[this.overlayColor.r,this.overlayColor.g,this.overlayColor.b]},...r?{uTime:this.sharedTimeSlow,uWaterAxis:{value:n.includes("water x")?1:0}}:{}},transparent:!0}),f=t.gl;return d.setBlendFunc(f.SRC_ALPHA,f.ONE_MINUS_SRC_ALPHA,f.ONE,f.ONE_MINUS_SRC_ALPHA),d}return this.createStandardProgram(e,t)}onProgramNode(e){if(!e.name?.toLowerCase().includes("cloud"))return;const t={x:e.position.x,y:e.position.y,z:e.position.z},n=-7,i=4-n,o=.05+Math.random()*.1;let s=0;const l=A(0,1e4,{duration:1e4,repeat:1/0,ease:"linear",onUpdate:a=>{e.position.x=t.x-a*o+s,e.position.x<n&&(s+=i,e.position.x+=i)}});this.cloudAnimations.push({animation:l,node:e,initialPosition:t})}update(e){this.sharedTimeSlow.value=e.time*.5,this.birds&&(this.birds.program.uniforms.uTime.value=e.time)}setOverlayOpacityMode(e){super.setOverlayOpacityMode(e),this.birds?.setOverlayOpacityMode(e)}setOpacity(e,t=!1,n=.5){const r=super.setOpacity(e,t,n);return t?r.then(()=>{this.birds?.setOpacity(e)}):(this.birds?.setOpacity(e),r)}resetCloudAnimations(){for(const{animation:e,node:t,initialPosition:n}of this.cloudAnimations)e.stop(),t.position.x=n.x,t.position.y=n.y,t.position.z=n.z;this.cloudAnimations=[]}dispose(){this.resetCloudAnimations(),this.birds?.dispose(),this.birds=null,super.dispose()}}class dn extends K{overlayColor={r:21/255,g:31/255,b:43/255};overlayOpacity={home:.3,subpage:.3}}const fn=[$t,Kt,sn,un,dn];function mn(h){const e=fn[h];if(!e)throw new Error(`No door class registered for index ${h}`);return e}async function q(h,e,t){const n=ot(st[e*2+(t?1:0)]),r=await $.load(h.gl,`/models/${n}`),i=mn(e),o=new i;await o.load(r,h.renderer);const s=r,l=s?.cameras?.length?s.cameras[0]:new Ue(h.gl,{near:1,far:100}),{x:a,y:c,z:u}=l.position;return{door:o,camera:l,originalCameraPosition:{x:a,y:c,z:u}}}const pn=`precision highp float;

uniform sampler2D tHeader;
uniform sampler2D tFooter;

// ? Y bounds: vec2(bottom, top) in normalized PADDED canvas coords (0=bottom, 1=top)
uniform vec2 uHeaderY;
uniform vec2 uFooterY;

// ? arc effect for footer
uniform float uFooterArc;
uniform float uFooterArcHeight;

// ? canvas padding ratio (0.25 = 25% above and below viewport)
uniform float uPadding;

varying vec2 vUv;

// ? convert padded canvas Y to viewport Y for texture sampling
// ? render targets are viewport-sized, so we need this conversion
float paddedToViewport(float paddedY) {
	float paddingNorm = uPadding / (1.0 + 2.0 * uPadding);
	float viewportRatio = 1.0 / (1.0 + 2.0 * uPadding);
	return (paddedY - paddingNorm) / viewportRatio;
}

void main() {
	vec4 color = vec4(0.0);

	// ? HEADER: fullscreen width, Y clipping only
	float headerHeight = uHeaderY.y - uHeaderY.x;
	if (headerHeight > 0.0 && vUv.y >= uHeaderY.x && vUv.y <= uHeaderY.y) {
		// ? convert to viewport coords and top-align
		float viewportY = paddedToViewport(vUv.y);
		float topViewportY = paddedToViewport(uHeaderY.y);
		float headerUvY = viewportY + (1.0 - topViewportY);

		if (headerUvY >= 0.0 && headerUvY <= 1.0) {
			color = texture2D(tHeader, vec2(vUv.x, headerUvY));
		}
	}

	// ? FOOTER: fullscreen width, Y clipping with arc effect
	float footerHeight = uFooterY.y - uFooterY.x;
	if (footerHeight > 0.0) {
		float arcCurve = 4.0 * vUv.x * (1.0 - vUv.x);
		float maxArcOffset = uFooterArc * uFooterArcHeight;
		float arcOffset = maxArcOffset * arcCurve;
		float curvedTop = uFooterY.y + arcOffset;

		if (vUv.y >= uFooterY.x && vUv.y <= curvedTop) {
			// ? convert to viewport coords and top-align
			float viewportY = paddedToViewport(vUv.y);
			float topViewportY = paddedToViewport(uFooterY.y);
			// ? use arcOffset (varies with X) so texture bends with the arc
			float footerUvY = viewportY + (1.0 - topViewportY) - arcOffset;

			if (footerUvY >= 0.0 && footerUvY <= 1.0) {
				color = texture2D(tFooter, vec2(vUv.x, footerUvY));
			}
		}
	}

	gl_FragColor = color;
}
`,vn=`precision highp float;

attribute vec3 position;

varying vec2 vUv;

void main() {
	vUv = position.xy * 0.5 + 0.5;

	gl_Position = vec4(position, 1.0);
}

`;class gn{headerDoorNum;footerDoorNum;headerDoor=null;footerDoor=null;headerCamera=null;headerOriginalPosition={x:0,y:0,z:0};footerCameraInfo=null;renderScale=1;headerTarget=null;footerTarget=null;targetWidth=0;targetHeight=0;program=null;mesh=null;headerElement=null;footerElement=null;footerAnimation=null;footerToHeaderAnim=null;transitionBrush=null;preloadedNext=null;preloadedFooterDoorNum=-1;preloadingFooterDoorNum=-1;preloadPromise=null;mouseInfluence=1;mouseInfluenceAnim=null;constructor(e){this.headerDoorNum=e.headerDoor,this.footerDoorNum=e.footerDoor}async init(e){const t=await Be();Ve(t.modelSuffix),this.renderScale=t.renderScale,e.renderer.dpr!==t.dpr&&(e.renderer.dpr=t.dpr,e.screen.pixelRatio=t.dpr),$.setDracoManager(new Xe("/models/assets/libs/draco/DracoWorker.js")),$.setBasisManager(new Ze("/models/assets/libs/basis/BasisWorker.js",e.gl));const[n,r]=await Promise.all([q(e,this.headerDoorNum,!0),q(e,this.footerDoorNum,!0)]);this.headerDoor=n.door,this.headerDoor.setOverlayOpacityMode("subpage"),this.footerDoor=r.door,this.footerDoor.setOverlayOpacityMode("subpage"),this.headerCamera=n.camera,this.headerOriginalPosition=n.originalCameraPosition,this.footerCameraInfo={camera:r.camera,originalPosition:r.originalCameraPosition},this.headerElement=document.querySelector("[data-door-header]"),this.footerElement=document.querySelector("[data-door-footer]");const i=E.getInstance();i.contentHeightProvider=()=>this.headerElement?.offsetHeight??0,i.inputSource?.setHoverTarget(this.headerElement),this.program=new N(e.gl,{vertex:vn,fragment:pn,uniforms:{tHeader:{value:null},tFooter:{value:null},uHeaderY:{value:[0,0]},uFooterY:{value:[0,0]},uFooterArc:{value:0},uFooterArcHeight:{value:.05},uPadding:{value:i.CANVAS_PADDING}},transparent:!0}),this.mesh=new k(e.gl,{geometry:new He(e.gl),program:this.program}),i.subpageSurface={program:this.program,getFooterElement:()=>this.footerElement,animateFooterToHeader:()=>this.animateFooterToHeader(),preloadNext:(o,s)=>this.preloadNext(o,s),handoff:(o,s)=>this.handoff(o,s)},g.emit("DOOR:ACTIVE",{index:this.headerDoorNum,context:"subpage"})}resize(e){this.syncRenderTargets(e),this.updateCameraAspect(e)}update(e){this.headerDoor?.update(e),this.footerDoor?.update(e)}render(e){if(!this.headerCamera||!this.program||!this.mesh||!this.headerTarget||!this.footerTarget||!this.headerDoor||!this.footerDoor)return;const{renderer:t,screen:n}=e,r=E.getInstance(),i=r.CANVAS_PADDING,o=n.contentHeight*i,s=r.cameraSource,l=s?.headerOffset,a=s?.footerOffset,c=e.hoverInfluence,u=this.headerCamera,d=this.headerOriginalPosition;if(this.headerElement){const f=this.headerElement.getBoundingClientRect();if(f.bottom>-o&&f.top<n.contentHeight+o&&this.headerDoor.isLoaded){const T=c*this.mouseInfluence;u.position.x=d.x+e.mouse.x*Ye*T+e.noiseX*Q,u.position.y=d.y+e.mouse.y*ke*T+e.noiseY*Q+(l?.y??0),u.position.z=d.z+(l?.z??0),u.lookAt([0,0,0]),t.render({scene:this.headerDoor.scene,camera:u,target:this.headerTarget}),this.program.uniforms.uHeaderY.value=this.getElementYBounds(this.headerElement,n.contentHeight)}else this.program.uniforms.uHeaderY.value=[0,0]}else this.program.uniforms.uHeaderY.value=[0,0];if(this.footerElement&&this.footerDoor.isLoaded)if(u.position.x=d.x+e.noiseX*Q,u.position.y=d.y+e.noiseY*Q+(a?.y??0),u.position.z=d.z+(a?.z??0),u.lookAt([0,0,0]),t.render({scene:this.footerDoor.scene,camera:u,target:this.footerTarget}),this.footerAnimation){const f=i/(1+2*i),{startY:x,progress:T}=this.footerAnimation,p=f,m=1-f;this.program.uniforms.uFooterY.value=[x[0]+(p-x[0])*T,x[1]+(m-x[1])*T]}else{const f=this.footerElement.getBoundingClientRect(),x=f.bottom>-o&&f.top<n.contentHeight+o;this.program.uniforms.uFooterY.value=x?this.getElementYBounds(this.footerElement,n.contentHeight):[0,0]}else this.program.uniforms.uFooterY.value=[0,0];t.render({scene:this.mesh})}dispose(){const e=E.getInstance();e.contentHeightProvider=null,e.inputSource?.setHoverTarget(null),e.subpageSurface?.program===this.program&&(e.subpageSurface=null),this.footerToHeaderAnim?.stop(),this.footerToHeaderAnim=null,this.footerAnimation=null,this.mouseInfluenceAnim?.stop(),this.mouseInfluenceAnim=null,this.transitionBrush?.remove(),this.transitionBrush=null,this.headerDoor?.dispose(),this.footerDoor?.dispose(),this.preloadedNext?.door.dispose(),this.preloadedNext=null,this.preloadedFooterDoorNum=-1,this.preloadingFooterDoorNum=-1,this.preloadPromise=null,this.headerTarget=null,this.footerTarget=null,this.program=null,this.mesh=null,this.headerCamera=null,this.footerCameraInfo=null,this.headerDoor=null,this.footerDoor=null,this.headerElement=null,this.footerElement=null}async animateFooterToHeader(){if(!this.footerElement||!this.program)return;const e=E.getInstance();e.cameraSource?.resetFooter(),this.rampMouseInfluence(0,at),this.footerToHeaderAnim?.stop(),this.footerAnimation={startY:this.getElementYBounds(this.footerElement,e.screen.contentHeight),progress:0};const t=this.program;this.transitionBrush?.remove(),this.transitionBrush=this.createTransitionBrush();const n=this.transitionBrush;return new Promise(r=>{this.footerToHeaderAnim=A(0,1,{duration:lt,ease:"easeInOut",onUpdate:i=>{this.footerAnimation&&(this.footerAnimation.progress=i),t.uniforms.uFooterArc.value=Math.sin(i*Math.PI)*me,n.style.transform=`translateY(${(1-i)*100}%)`},onComplete:()=>{t.uniforms.uFooterArc.value=0,n.style.transform="translateY(0%)",this.footerToHeaderAnim=null,r()}})})}createTransitionBrush(){const e=document.createElement("div");e.setAttribute("aria-hidden","true"),e.style.cssText=["position:fixed","left:0","bottom:-6rem","width:100%","height:12rem","overflow:hidden","pointer-events:none","z-index:20","transform:translateY(100%)","will-change:transform"].join(";");const t=document.createElement("img");return t.src="/images/white-brush-stroke.png",t.alt="",t.setAttribute("aria-hidden","true"),t.style.cssText="display:block;width:100%;height:100%;object-fit:fill;object-position:center;",e.appendChild(t),document.body.appendChild(e),e}async preloadNext(e,t){if(!this.program||this.preloadedFooterDoorNum===t&&this.preloadedNext)return;if(this.preloadingFooterDoorNum===t&&this.preloadPromise)return this.preloadPromise;this.preloadedNext?.door.dispose(),this.preloadedNext=null,this.preloadedFooterDoorNum=-1,this.preloadingFooterDoorNum=t;const n={gl:E.getInstance().renderer.gl,renderer:E.getInstance().renderer};return this.preloadPromise=(async()=>{try{const r=await q(n,t,!0);if(this.preloadingFooterDoorNum!==t){r.door.dispose();return}r.door.setOverlayOpacityMode("subpage"),this.preloadedNext=r,this.preloadedFooterDoorNum=t}finally{this.preloadingFooterDoorNum===t&&(this.preloadingFooterDoorNum=-1),this.preloadPromise=null}})(),this.preloadPromise}async handoff(e,t){if(!this.footerDoor||!this.footerCameraInfo||!this.program)return;(!this.preloadedNext||this.preloadedFooterDoorNum!==t)&&await this.preloadNext(e,t);const n=this.preloadedNext;if(n)return new Promise(r=>{B.read(()=>{if(!this.program||!this.footerDoor||!this.footerCameraInfo){r();return}this.footerToHeaderAnim?.stop(),this.footerToHeaderAnim=null,this.headerDoor?.dispose(),this.headerDoor=this.footerDoor,this.headerCamera=this.footerCameraInfo.camera,this.headerOriginalPosition=this.footerCameraInfo.originalPosition,this.footerDoor=n.door,this.footerCameraInfo={camera:n.camera,originalPosition:n.originalCameraPosition},this.preloadedNext=null,this.preloadedFooterDoorNum=-1,this.headerDoorNum=e,this.footerDoorNum=t,this.headerElement=document.querySelector("[data-door-header]"),this.footerElement=document.querySelector("[data-door-footer]"),this.footerAnimation=null,this.program.uniforms.uFooterArc.value=0;const i=E.getInstance();i.inputSource?.setHoverTarget(this.headerElement),i.resize(),i.cameraSource?.resetHeader(),i.cameraSource?.resetFooter(),this.rampMouseInfluence(1,ct),g.emit("DOOR:ACTIVE",{index:this.headerDoorNum,context:"subpage"}),this.transitionBrush?.remove(),this.transitionBrush=null,r()})})}rampMouseInfluence(e,t){this.mouseInfluenceAnim?.stop(),this.mouseInfluenceAnim=A(this.mouseInfluence,e,{duration:t,ease:"easeInOut",onUpdate:n=>{this.mouseInfluence=n},onComplete:()=>{this.mouseInfluence=e,this.mouseInfluenceAnim=null}})}syncRenderTargets(e){const t=Math.max(1,Math.round(e.screen.width*e.screen.pixelRatio*this.renderScale)),n=Math.max(1,Math.round(e.screen.height*e.screen.pixelRatio*this.renderScale));t===this.targetWidth&&n===this.targetHeight&&this.headerTarget&&this.footerTarget||(this.targetWidth=t,this.targetHeight=n,this.headerTarget=new W(e.gl,{width:t,height:n}),this.footerTarget=new W(e.gl,{width:t,height:n}),this.program&&(this.program.uniforms.tHeader.value=this.headerTarget.texture,this.program.uniforms.tFooter.value=this.footerTarget.texture))}updateCameraAspect(e){if(!this.headerCamera)return;const t=e.screen.width/e.screen.height;let n=ee;if(t>te){const r=2*Math.atan(Math.tan(ee*Math.PI/180/2)*te);n=2*Math.atan(Math.tan(r/2)/t)*(180/Math.PI)}this.headerCamera.perspective({fov:n,aspect:t,near:this.headerCamera.near||1,far:this.headerCamera.far||100})}getElementYBounds(e,t){const n=e.getBoundingClientRect(),r=E.getInstance().CANVAS_PADDING,i=t*r,o=t*(1+r*2),s=n.top+i,a=1-(n.bottom+i)/o,c=1-s/o;return[a,c]}}const yn=`precision highp float;

uniform sampler2D tScene1, tScene2, tFBM;
uniform float uProgress;
uniform float uTime;
uniform float uOpacity;

varying vec2 vUv;

// Classic Perlin 2D Noise - based on Stefan Gustavson's implementation
vec2 fade(vec2 t) {
	return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

vec4 permute(vec4 x) {
	return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float cnoise(vec2 P) {
	vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
	vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
	Pi = mod(Pi, 289.0);
	vec4 ix = Pi.xzxz;
	vec4 iy = Pi.yyww;
	vec4 fx = Pf.xzxz;
	vec4 fy = Pf.yyww;
	vec4 i = permute(permute(ix) + iy);
	vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0;
	vec4 gy = abs(gx) - 0.5;
	vec4 tx = floor(gx + 0.5);
	gx = gx - tx;
	vec2 g00 = vec2(gx.x, gy.x);
	vec2 g10 = vec2(gx.y, gy.y);
	vec2 g01 = vec2(gx.z, gy.z);
	vec2 g11 = vec2(gx.w, gy.w);
	vec4 norm = 1.79284291400159 - 0.85373472095314 *
		vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
	g00 *= norm.x;
	g01 *= norm.y;
	g10 *= norm.z;
	g11 *= norm.w;
	float n00 = dot(g00, vec2(fx.x, fy.x));
	float n10 = dot(g10, vec2(fx.y, fy.y));
	float n01 = dot(g01, vec2(fx.z, fy.z));
	float n11 = dot(g11, vec2(fx.w, fy.w));
	vec2 fade_xy = fade(Pf.xy);
	vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
	float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
	return 2.3 * n_xy;
}

// FBM (Fractional Brownian Motion) for layered noise
float fbm(vec2 p) {
	float value = 0.0;
	float amplitude = 0.5;
	float frequency = 1.0;

	for (int i = 0; i < 4; i++) {
		value += amplitude * cnoise(p * frequency);
		amplitude *= 0.5;
		frequency *= 2.0;
	}

	return value;
}

void main() {
	vec2 uv = vUv;

	// Sample the pre-baked FBM texture
	float fbmTexture = texture2D(tFBM, uv).r;

	// Slow animated procedural noise for subtle variation
	float time = uTime * 0.00003;
	float proceduralNoise = fbm(uv * 2.5 + time) * 0.5 + 0.5;

	// Combine texture and procedural noise (0-1 range)
	float noise = mix(fbmTexture, proceduralNoise, 0.25);

	// Progress goes 0→1: 0 = show old scene, 1 = show new scene
	float progress = uProgress;

	// Sample both scenes (no distortion - clean transition)
	vec4 oldScene = texture2D(tScene1, uv);
	vec4 newScene = texture2D(tScene2, uv);

	// Create transition mask using noise
	// As progress goes 0->1, the mask reveals newScene based on noise threshold
	float edge = 0.08;
	float threshold = progress * (1.0 + edge * 0.2) - edge;
	float transitionMask = smoothstep(threshold - edge, threshold + edge, noise);

	// Mix: mask starts high (showing old), goes low (showing new) as progress increases
	vec4 finalColor = mix(newScene, oldScene, transitionMask);

	// Apply opacity
	finalColor.a *= uOpacity;

	gl_FragColor = finalColor;
}
`,xn=`precision highp float;
attribute vec3 position;
varying vec2 vUv;

void main() {
	vUv = position.xy * 0.5 + 0.5;
	gl_Position = vec4(position, 1.0);
}`;class wn{doors=new Map;loadingDoors=new Set;camera=null;originalCameraZ=0;renderScale=1;renderTarget1=null;renderTarget2=null;targetWidth=0;targetHeight=0;program=null;mesh=null;fbmTexture=null;currentSceneIndex=0;oldSceneIndex=0;newSceneIndex=0;isTransitioning=!1;transitionProgress=0;renderSceneA=!0;progressAnimation=null;newDoorTimer=null;switchTimer=null;abortController=new AbortController;touchStartY=0;async init(e){const t=await Be();Ve(t.modelSuffix),this.renderScale=t.renderScale,e.renderer.dpr!==t.dpr&&(e.renderer.dpr=t.dpr,e.screen.pixelRatio=t.dpr),$.setDracoManager(new Xe("/models/assets/libs/draco/DracoWorker.js")),$.setBasisManager(new Ze("/models/assets/libs/basis/BasisWorker.js",e.gl)),this.renderTarget1=new W(e.gl,{width:1,height:1}),this.renderTarget2=new W(e.gl,{width:1,height:1}),this.fbmTexture=new Y(e.gl);const n=new Image;n.src="/fbm.webp",this.fbmTexture.image=n,this.program=new N(e.gl,{vertex:xn,fragment:yn,uniforms:{tScene1:{value:this.renderTarget1.texture},tScene2:{value:this.renderTarget2.texture},tFBM:{value:this.fbmTexture},uProgress:{value:0},uTime:{value:0},uOpacity:{value:1}},transparent:!0}),this.mesh=new k(e.gl,{geometry:new He(e.gl),program:this.program});const{door:r,camera:i,originalCameraPosition:o}=await q(e,0,!1);this.doors.set(0,r),this.camera=i,this.originalCameraZ=o.z,this.updateCameraAspect(e),this.updateDoorIndexCSS(0),g.emit("DOOR:ACTIVE",{index:0,context:"home"}),E.getInstance().inputSource?.setHoverTarget("always"),g.on("HOME:NAVIGATE_REQUEST",this.onNavigateRequest),this.attachInputListeners(),this.loadRemainingDoors(e)}resize(e){this.syncRenderTargets(e),this.updateCameraAspect(e)}update(e){this.isTransitioning?(this.doors.get(this.oldSceneIndex)?.update(e),this.doors.get(this.newSceneIndex)?.update(e)):this.doors.get(this.currentSceneIndex)?.update(e)}render(e){if(!this.camera||!this.program||!this.mesh)return;const t=e.hoverInfluence,n=e.mouse.x*Ye*t+e.noiseX*Te,r=e.mouse.y*ke*t+e.noiseY*Te;if(this.isTransitioning){this.renderTransition(e,n,r);return}const i=E.getInstance().cameraSource?.homeOffset,o=this.doors.get(this.currentSceneIndex);o?.isLoaded&&(this.camera.position.x=n+(i?.x??0),this.camera.position.y=r+(i?.y??0),this.camera.position.z=this.originalCameraZ+(i?.z??0),this.camera.lookAt([0,0,0]),e.renderer.render({scene:o.scene,camera:this.camera}))}dispose(){g.off("HOME:NAVIGATE_REQUEST",this.onNavigateRequest),E.getInstance().inputSource?.setHoverTarget(null),this.abortController.abort(),this.progressAnimation?.stop(),this.progressAnimation=null,this.clearTimers(),this.doors.forEach(e=>e.dispose()),this.doors.clear(),this.renderTarget1=null,this.renderTarget2=null,this.program=null,this.mesh=null,this.fbmTexture=null,this.camera=null}async navigateToScene(e){if(this.isTransitioning)return;const t=e==="next"?1:-1,n=this.currentSceneIndex+t,r=n>4?0:n<0?4:n;await this.navigateToDoorIndex(r)}async navigateToDoorIndex(e){if(this.isTransitioning||e===this.currentSceneIndex||!this.camera||!this.program||!this.renderTarget1||!this.renderTarget2)return;const t=Math.max(0,Math.min(4,e)),n=E.getInstance();if(!await this.ensureDoorLoaded(t,n)||this.isTransitioning)return;this.isTransitioning=!0,this.oldSceneIndex=this.currentSceneIndex,this.newSceneIndex=t;const i=this.doors.get(this.oldSceneIndex),o=this.doors.get(this.newSceneIndex);i?.isLoaded&&o?.isLoaded&&(n.renderer.render({scene:i.scene,camera:this.camera,target:this.renderTarget1}),n.renderer.render({scene:o.scene,camera:this.camera,target:this.renderTarget2})),this.renderSceneA=!0,this.transitionProgress=0,g.emit("HOME:SCROLL_OUT",this.oldSceneIndex);const s=n.cameraSource;s?.playOldSceneOut(),this.newDoorTimer=setTimeout(()=>{s?.playNewSceneIn(),this.newDoorTimer=null},Ee*U.newDoorDelayPercent),this.switchTimer=setTimeout(()=>{this.currentSceneIndex=t,this.updateDoorIndexCSS(t),g.emit("HOME:SCROLL_IN",t),g.emit("DOOR:ACTIVE",{index:t,context:"home"}),this.switchTimer=null},ht),this.progressAnimation?.stop(),this.progressAnimation=A(0,1,{duration:Ee/1e3,ease:"easeInOut",onUpdate:l=>{this.transitionProgress=l},onComplete:()=>{this.isTransitioning=!1,this.transitionProgress=0,this.progressAnimation=null,s?.resetTransition()}})}renderTransition(e,t,n){if(!this.camera||!this.program||!this.mesh||!this.renderTarget1||!this.renderTarget2)return;const r=this.doors.get(this.oldSceneIndex),i=this.doors.get(this.newSceneIndex);if(!r?.isLoaded||!i?.isLoaded){const s=this.doors.get(this.currentSceneIndex);s?.isLoaded&&e.renderer.render({scene:s.scene,camera:this.camera});return}const o=E.getInstance().cameraSource;if(this.renderSceneA){const s=o?.oldSceneOffset;this.camera.position.x=t+(s?.x??0),this.camera.position.y=n+(s?.y??0),this.camera.position.z=this.originalCameraZ+(s?.z??0),this.camera.lookAt([0,0,0]),e.renderer.render({scene:r.scene,camera:this.camera,target:this.renderTarget1})}else{const s=o?.newSceneOffset;this.camera.position.x=t+(s?.x??0),this.camera.position.y=n+(s?.y??0),this.camera.position.z=this.originalCameraZ+(s?.z??0),this.camera.lookAt([0,0,0]),e.renderer.render({scene:i.scene,camera:this.camera,target:this.renderTarget2})}this.renderSceneA=!this.renderSceneA,this.program.uniforms.uProgress.value=this.transitionProgress,this.program.uniforms.uTime.value=e.timestamp,e.renderer.render({scene:this.mesh})}attachInputListeners(){const e=this.abortController.signal;window.addEventListener("wheel",this.onWheel,{signal:e,passive:!0}),window.addEventListener("touchstart",this.onTouchStart,{signal:e,passive:!0}),window.addEventListener("touchmove",this.onTouchMove,{signal:e,passive:!0})}onWheel=e=>{if(this.isTransitioning||Math.abs(e.deltaY)<=ut)return;const t=e.deltaY>0?"next":"previous";this.navigateToScene(t)};onTouchStart=e=>{this.touchStartY=e.touches[0].clientY};onNavigateRequest=e=>{this.navigateToDoorIndex(e)};onTouchMove=e=>{if(this.isTransitioning)return;const t=this.touchStartY-e.touches[0].clientY;if(Math.abs(t)<=dt)return;const n=t>0?"next":"previous";this.navigateToScene(n)};async ensureDoorLoaded(e,t){if(this.doors.has(e))return!0;if(this.loadingDoors.has(e)){for(;this.loadingDoors.has(e);)await new Promise(n=>setTimeout(n,50));return this.doors.has(e)}this.loadingDoors.add(e);try{const n=this.buildMinimalCtx(t),{door:r}=await q(n,e,!1);return this.doors.set(e,r),!0}catch(n){return console.warn(`Failed to load home door ${e+1}`,n),!1}finally{this.loadingDoors.delete(e)}}async loadRemainingDoors(e){for(let t=1;t<5;t++)if(!this.doors.has(t)&&!this.loadingDoors.has(t)){this.loadingDoors.add(t);try{const{door:n}=await q(e,t,!1);this.doors.set(t,n)}catch(n){console.warn(`Failed to background-load home door ${t+1}`,n)}finally{this.loadingDoors.delete(t)}}}buildMinimalCtx(e){return{renderer:e.renderer,gl:e.renderer.gl,canvas:e.canvas,screen:e.screen,mode:e.mode,time:0,deltaTime:0,timestamp:performance.now(),scrollY:window.scrollY,mouse:e.inputSource?.mouse??{x:0,y:0},noiseX:e.inputSource?.noiseX??0,noiseY:e.inputSource?.noiseY??0,hoverInfluence:e.inputSource?.hoverInfluence??0}}syncRenderTargets(e){const t=Math.max(1,Math.round(e.screen.width*e.screen.pixelRatio*this.renderScale)),n=Math.max(1,Math.round(e.screen.height*e.screen.pixelRatio*this.renderScale));t===this.targetWidth&&n===this.targetHeight&&this.renderTarget1&&this.renderTarget2||(this.targetWidth=t,this.targetHeight=n,this.renderTarget1=new W(e.gl,{width:t,height:n}),this.renderTarget2=new W(e.gl,{width:t,height:n}),this.program&&(this.program.uniforms.tScene1.value=this.renderTarget1.texture,this.program.uniforms.tScene2.value=this.renderTarget2.texture))}updateCameraAspect(e){if(!this.camera)return;const t=e.screen.width/e.screen.height;let n=ee;if(t>te){const r=2*Math.atan(Math.tan(ee*Math.PI/180/2)*te);n=2*Math.atan(Math.tan(r/2)/t)*(180/Math.PI)}this.camera.perspective({fov:n,aspect:t,near:this.camera.near||1,far:this.camera.far||100})}updateDoorIndexCSS(e){document.documentElement.style.setProperty("--door-index",e.toString())}clearTimers(){this.newDoorTimer&&(clearTimeout(this.newDoorTimer),this.newDoorTimer=null),this.switchTimer&&(clearTimeout(this.switchTimer),this.switchTimer=null)}}const ue=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;class bn extends Z{cleanups=[];revealedElements=new WeakSet;revealObservers=new WeakMap;initialLoad(){this.initEffects()}onEnter(){this.initEffects()}onLeave(){this.cleanupEffects()}onLeaveCompleted(){}initEffects(){this.initParallax(),this.initTilt(),this.initReveal()}cleanupEffects(){this.hideReveals(.25),this.cleanups.forEach(e=>e()),this.cleanups.length=0}initParallax(){document.querySelectorAll("[data-parallax]").forEach(e=>{const t=Number(e.dataset.speed??50),r=(e.dataset.direction??"vertical")==="horizontal"?"x":"y",i=Ge(A(e,{[r]:[-t,t]}),{target:e});this.cleanups.push(i)})}initTilt(){!window.matchMedia("(pointer: fine)").matches||ue()||document.querySelectorAll("[data-tilt]").forEach(t=>{const n=Number(t.dataset.maxTilt??15),r=Number(t.dataset.perspective??500),i={z:0,rotateX:0,rotateY:0};t.style.transformStyle="preserve-3d",t.style.transform=`perspective(${r}px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;const o=()=>{A(t,{transformPerspective:r,rotateX:i.rotateX,rotateY:i.rotateY,z:i.z})},s=u=>{B.read(()=>{const d=t.getBoundingClientRect();i.z=-10;const f=u.clientX-d.left,x=u.clientY-d.top;i.rotateX=n*(.5-x/d.height),i.rotateY=n*(f/d.width-.5),B.postRender(o)})},l=()=>{i.z=0,i.rotateX=0,i.rotateY=0,B.postRender(o)},a=new AbortController,{signal:c}=a;t.addEventListener("pointermove",s,{signal:c}),t.addEventListener("pointerleave",l,{signal:c}),this.cleanups.push(()=>a.abort())})}initReveal(){document.querySelectorAll("[data-reveal]").forEach(e=>{if(this.revealedElements.has(e)||this.revealObservers.has(e))return;const t=Number(e.dataset.delay??0),n=Number(e.dataset.duration??.6),r=e.hasAttribute("data-parallax"),i=ye(e,()=>{e.classList.remove("opacity-0");const s=ue();A(e,r?{opacity:[0,1]}:{opacity:[0,1],y:[20,0]},{ease:"easeOut",duration:s?0:n,delay:s?0:t}),this.revealedElements.add(e),this.revealObservers.delete(e)}),o=()=>{i(),this.revealObservers.delete(e)};this.revealObservers.set(e,o),this.cleanups.push(o)})}hideReveals(e){const t=document.querySelectorAll("[data-reveal]");t.length&&A(t,{opacity:[1,0]},{ease:"easeIn",duration:ue()?0:e})}}const Tn=.25,En=.4,On="translate-y-[calc(var(--door-index,0)*-100svh)]";class An extends X{async onLeave({done:e}){g.emit("PAGE:LEAVE");const t=I.getInstance()?.canvas?.canvas,n=t?A(t,{opacity:0},{duration:Tn,ease:"easeIn"}).finished:Promise.resolve();await Promise.all([qe(We),n]),E.getInstance().mode==="home"&&(document.getElementById("main")?.classList.remove(On),document.documentElement.style.removeProperty("--door-index"),document.body.className="min-h-screen"),e()}async onEnter({done:e}){re.getInstance().scroll.scrollTo(0,{immediate:!0,force:!0}),await I.getInstance()?.swapToMode(window.location.pathname);const t=I.getInstance()?.canvas?.canvas;t&&A(t,{opacity:1},{duration:En,ease:"easeOut"}),g.emit("PAGE:ENTER"),g.emit("BRUSH:UNVEIL_START"),g.emit("PAGE:READY"),e()}}const de=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches;class Sn extends Z{cleanups=[];revealedElements=new WeakSet;revealObservers=new WeakMap;initialLoad(){this.initEffects(),this.bindHomeScroll()}onEnter(){this.initEffects(),this.bindHomeScroll()}onLeave(){this.unbindHomeScroll(),this.cleanupEffects()}onLeaveCompleted(){}handleScrollIn=()=>{this.initReveal()};handleScrollOut=()=>{this.hideReveals(ft)};bindHomeScroll(){g.on("HOME:SCROLL_IN",this.handleScrollIn),g.on("HOME:SCROLL_OUT",this.handleScrollOut)}unbindHomeScroll(){g.off("HOME:SCROLL_IN",this.handleScrollIn),g.off("HOME:SCROLL_OUT",this.handleScrollOut)}initEffects(){this.initParallax(),this.initTilt(),this.initReveal()}cleanupEffects(){this.hideReveals(.25),this.cleanups.forEach(e=>e()),this.cleanups.length=0}initParallax(){document.querySelectorAll("[data-parallax]").forEach(e=>{const t=Number(e.dataset.speed??50),r=(e.dataset.direction??"vertical")==="horizontal"?"x":"y",i=Ge(A(e,{[r]:[-t,t]}),{target:e});this.cleanups.push(i)})}initTilt(){!window.matchMedia("(pointer: fine)").matches||de()||document.querySelectorAll("[data-tilt]").forEach(t=>{const n=Number(t.dataset.maxTilt??15),r=Number(t.dataset.perspective??500),i={z:0,rotateX:0,rotateY:0};t.style.transformStyle="preserve-3d",t.style.transform=`perspective(${r}px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;const o=()=>{A(t,{transformPerspective:r,rotateX:i.rotateX,rotateY:i.rotateY,z:i.z})},s=u=>{B.read(()=>{const d=t.getBoundingClientRect();i.z=-10;const f=u.clientX-d.left,x=u.clientY-d.top;i.rotateX=n*(.5-x/d.height),i.rotateY=n*(f/d.width-.5),B.postRender(o)})},l=()=>{i.z=0,i.rotateX=0,i.rotateY=0,B.postRender(o)},a=new AbortController,{signal:c}=a;t.addEventListener("pointermove",s,{signal:c}),t.addEventListener("pointerleave",l,{signal:c}),this.cleanups.push(()=>a.abort())})}initReveal(){document.querySelectorAll("[data-reveal]").forEach(e=>{if(this.revealedElements.has(e)||this.revealObservers.has(e))return;const t=Number(e.dataset.delay??0),n=Number(e.dataset.duration??.6),r=e.hasAttribute("data-parallax"),i=ye(e,()=>{e.classList.remove("opacity-0");const s=de();A(e,r?{opacity:[0,1]}:{opacity:[0,1],y:[20,0]},{ease:"easeOut",duration:s?0:n,delay:s?0:t}),this.revealedElements.add(e),this.revealObservers.delete(e)}),o=()=>{i(),this.revealObservers.delete(e)};this.revealObservers.set(e,o),this.cleanups.push(o)})}hideReveals(e){const t=document.querySelectorAll("[data-reveal]");t.length&&A(t,{opacity:[1,0]},{ease:"easeIn",duration:de()?0:e})}}const Le="translate-y-[calc(var(--door-index,0)*-100svh)]";class Cn extends X{async onLeave({done:e}){g.emit("BRUSH:COVER_START"),g.emit("PAGE:LEAVE");const t=E.getInstance(),n=t.cameraSource,r=t.mode==="home";r?n?.playExitZoom():n?.playHeaderExitZoom(),await fe.getInstance()?.coverScreen(),r&&(document.getElementById("main")?.classList.remove(Le),document.documentElement.style.removeProperty("--door-index"),document.body.className="min-h-screen"),e()}async onEnter({done:e}){re.getInstance().scroll.scrollTo(0,{immediate:!0,force:!0}),await I.getInstance()?.swapToMode(window.location.pathname),pt(window.location.pathname)&&(document.getElementById("main")?.classList.add(Le),document.body.className="min-h-screen home fixed overflow-y-scroll w-full"),g.emit("PAGE:ENTER"),await fe.getInstance()?.unveilScreen(),e()}}class Mn extends X{async onLeave({trigger:e,done:t}){const n=E.getInstance(),r=n.subpageSurface;n.overscrollController?.pause(),g.emit("PAGE:LEAVE");const i=Pn(e),o=i?I.getInstance()?.resolveRoute(i):null,s=r&&o?.kind==="subpage"?r.preloadNext(o.header-1,o.footer-1):Promise.resolve();await Promise.all([r?.animateFooterToHeader(),s,qe(We)]),t()}async onEnter({done:e}){re.getInstance().scroll.scrollTo(0,{immediate:!0,force:!0});const t=E.getInstance();t.flushRender();const n=t.subpageSurface,r=I.getInstance()?.resolveRoute(window.location.pathname);n&&r?.kind==="subpage"&&await n.handoff(r.header-1,r.footer-1),t.overscrollController?.resume(),g.emit("PAGE:ENTER"),g.emit("PAGE:READY"),e()}}function Pn(h){if(!h)return null;if(typeof h=="string")try{return new URL(h,window.location.href).pathname}catch{return null}const e=h instanceof HTMLAnchorElement?h:h.querySelector?.("a[href]");if(!e?.href)return null;try{return new URL(e.href).pathname}catch{return null}}const J=Z.prototype;if(!J._safeUpdatePatched){const h=J.update;J.update=function(){this._DOM||this.createDom(),h.call(this)},J._safeUpdatePatched=!0}class I extends HTMLElement{static instance=null;canvas;loader;lenis;taxi=null;modeModules=[];constructor(){super()}static getInstance(){return I.instance??void 0}connectedCallback(){I.instance=this,this.setup()}setup(){this.taxi=new xt({renderers:{default:bn,home:Sn},transitions:{default:An,brush:Cn,footer:Mn},reloadCssFilter:!1,reloadJsFilter:e=>e.type==="module"}),this.canvas=E.getInstance(),this.loader=fe.getInstance(),this.lenis=re.getInstance(),this.registerCanvasModules(),this.setupRoutes(),console.log(`%cBuilt by REEPLE Studio
%chttps://www.reeple.studio

%cDesign by Caracal Agency
%chttps://www.caracal.agency`,"color: white; font-size: 12px; font-weight: bold;","color: #888; font-size: 10px;","color: white; font-size: 12px; font-weight: bold; margin-top: 8px;","color: #888; font-size: 10px;")}async registerCanvasModules(){if(!this.canvas)return;await this.canvas.addModule(new Wt),await this.canvas.addModule(new Lt),await this.canvas.addModule(new Ft);const e=this.resolveRoute(window.location.pathname);e&&await this.registerModeModules(e),this.setCanvasVisible(e!==null)}setCanvasVisible(e){this.canvas&&(this.canvas.canvas.style.visibility=e?"":"hidden")}resolveRoute(e){const t=e.replace(/^\/(fr|en|pl)/,"")||"/";if(t==="/")return{kind:"home"};if(t in Oe){const[n,r]=Oe[t];return{kind:"subpage",header:n,footer:r}}return null}async swapToMode(e){if(!this.canvas)return!1;const t=this.resolveRoute(e);return await this.disposeModeModules(),this.setCanvasVisible(t!==null),t?(await this.registerModeModules(t),!0):!1}async registerModeModules(e){if(!this.canvas)return;if(this.canvas.setMode(e.kind==="home"?"home":"subpage"),e.kind==="home"){const r=new wn;await this.canvas.addModule(r),this.modeModules.push(r);return}const t=new gn({headerDoor:e.header-1,footerDoor:e.footer-1});await this.canvas.addModule(t),this.modeModules.push(t);const n=new Zt;await this.canvas.addModule(n),this.modeModules.push(n)}async disposeModeModules(){if(this.canvas)for(;this.modeModules.length;){const e=this.modeModules.pop();this.canvas.removeModule(e)}}setupRoutes(){if(!this.taxi)return;this.taxi.addRoute("/?",".*","brush");const e=["univers","albums","personnages","auteurs","communaute"];e.forEach((t,n)=>{const r=e[(n+1)%e.length];this.taxi.addRoute(`/${t}`,`/${r}`,"footer"),this.taxi.addRoute(`/${t}`,"/?","brush"),this.taxi.addRoute(`/${t}`,".*","default")}),this.taxi.addRoute(".*","/?","brush"),this.taxi.addRoute(".*",".*","default")}destroy(){I.instance=null}}customElements.get("c-app")||customElements.define("c-app",I);
