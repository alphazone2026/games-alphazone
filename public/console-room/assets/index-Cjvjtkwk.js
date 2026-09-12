(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mu="169",Mg=0,Th=1,yg=2,mp=1,gp=2,zi=3,di=0,Tn=1,vi=2,fs=0,gr=1,Rh=2,Lh=3,o0=4,Sg=5,Ds=100,Eg=101,wg=102,bg=103,Ag=104,Tg=200,Rg=201,Lg=202,Cg=203,a0=204,c0=205,Ig=206,Dg=207,Pg=208,Og=209,Ng=210,Ug=211,Fg=212,kg=213,zg=214,l0=0,u0=1,h0=2,Er=3,d0=4,f0=5,p0=6,m0=7,_p=0,Hg=1,Bg=2,ps=0,Gg=1,Wg=2,Vg=3,xp=4,qg=5,Xg=6,Yg=7,vp=300,wr=301,br=302,g0=303,_0=304,dc=306,ks=1e3,ls=1001,x0=1002,xn=1003,$g=1004,Go=1005,ze=1006,Pc=1007,ci=1008,qi=1009,Mp=1010,yp=1011,vo=1012,yu=1013,zs=1014,yi=1015,Pr=1016,Su=1017,Eu=1018,Ar=1020,Sp=35902,Ep=1021,wp=1022,vn=1023,bp=1024,Ap=1025,_r=1026,Tr=1027,wu=1028,bu=1029,Tp=1030,Au=1031,Tu=1033,La=33776,Ca=33777,Ia=33778,Da=33779,v0=35840,M0=35841,y0=35842,S0=35843,E0=36196,w0=37492,b0=37496,A0=37808,T0=37809,R0=37810,L0=37811,C0=37812,I0=37813,D0=37814,P0=37815,O0=37816,N0=37817,U0=37818,F0=37819,k0=37820,z0=37821,Pa=36492,H0=36494,B0=36495,Rp=36283,G0=36284,W0=36285,V0=36286,jg=3200,Kg=3201,Lp=0,Zg=1,as="",an="srgb",Ri="srgb-linear",Ru="display-p3",fc="display-p3-linear",qa="linear",we="srgb",Xa="rec709",Ya="p3",Ws=7680,Ch=519,Jg=512,Qg=513,t_=514,Cp=515,e_=516,n_=517,i_=518,s_=519,Ih=35044,Mo=35048,Dh="300 es",Wi=2e3,$a=2001;class Or{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oc=Math.PI/180,q0=180/Math.PI;function To(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function An(n,t,e){return Math.max(t,Math.min(e,n))}function r_(n,t){return(n%t+t)%t}function Nc(n,t,e){return(1-e)*n+e*t}function kr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Cn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(An(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,i,s,r,o,a,c,l){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],p=i[8],_=s[0],g=s[3],m=s[6],v=s[1],M=s[4],S=s[7],A=s[2],w=s[5],E=s[8];return r[0]=o*_+a*v+c*A,r[3]=o*g+a*M+c*w,r[6]=o*m+a*S+c*E,r[1]=l*_+u*v+h*A,r[4]=l*g+u*M+h*w,r[7]=l*m+u*S+h*E,r[2]=d*_+f*v+p*A,r[5]=d*g+f*M+p*w,r[8]=d*m+f*S+p*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,p=e*h+i*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=h*_,t[1]=(s*l-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Uc.makeScale(t,e)),this}rotate(t){return this.premultiply(Uc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Uc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Uc=new Zt;function Ip(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ja(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function o_(){const n=ja("canvas");return n.style.display="block",n}const Ph={};function Oa(n){n in Ph||(Ph[n]=!0,console.warn(n))}function a_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function c_(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function l_(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Oh=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nh=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zr={[Ri]:{transfer:qa,primaries:Xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[an]:{transfer:we,primaries:Xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[fc]:{transfer:qa,primaries:Ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Nh),fromReference:n=>n.applyMatrix3(Oh)},[Ru]:{transfer:we,primaries:Ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Nh),fromReference:n=>n.applyMatrix3(Oh).convertLinearToSRGB()}},u_=new Set([Ri,fc]),ue={enabled:!0,_workingColorSpace:Ri,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!u_.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=zr[t].toReference,s=zr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return zr[n].primaries},getTransfer:function(n){return n===as?qa:zr[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(zr[t].luminanceCoefficients)}};function xr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vs;class h_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vs===void 0&&(Vs=ja("canvas")),Vs.width=t.width,Vs.height=t.height;const i=Vs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Vs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ja("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xr(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(xr(e[i]/255)*255):e[i]=xr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let d_=0;class Dp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=To(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(kc(s[o].image)):r.push(kc(s[o]))}else r=kc(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function kc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?h_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let f_=0;class Mn extends Or{constructor(t=Mn.DEFAULT_IMAGE,e=Mn.DEFAULT_MAPPING,i=ls,s=ls,r=ze,o=ci,a=vn,c=qi,l=Mn.DEFAULT_ANISOTROPY,u=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=To(),this.name="",this.source=new Dp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ks:t.x=t.x-Math.floor(t.x);break;case ls:t.x=t.x<0?0:1;break;case x0:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ks:t.y=t.y-Math.floor(t.y);break;case ls:t.y=t.y<0?0:1;break;case x0:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=vp;Mn.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,i=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,S=(f+1)/2,A=(m+1)/2,w=(u+d)/4,E=(h+_)/4,T=(p+g)/4;return M>S&&M>A?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=w/i,r=E/i):S>A?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=w/s,r=T/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=E/r,s=T/r),this.set(i,s,r,e),this}let v=Math.sqrt((g-p)*(g-p)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class p_ extends Or{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Mn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Dp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends p_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Pp extends Mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class m_ extends Mn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=_;return}if(h!==_||c!==d||l!==f||u!==p){let g=1-a;const m=c*d+l*f+u*p+h*_,v=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const A=Math.sqrt(M),w=Math.atan2(A,m*v);g=Math.sin(g*w)/A,a=Math.sin(a*w)/A}const S=a*v;if(c=c*g+d*S,l=l*g+f*S,u=u*g+p*S,h=h*g+_*S,g===1-a){const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+u*h+c*f-l*d,t[e+1]=c*p+u*d+l*h-a*f,t[e+2]=l*p+u*f+a*d-c*h,t[e+3]=u*p-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),d=c(i/2),f=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h+d*f*p;break;case"YZX":this._x=d*u*h+l*f*p,this._y=l*f*h+d*u*p,this._z=l*u*p-d*f*h,this._w=l*u*h-d*f*p;break;case"XZY":this._x=d*u*h-l*f*p,this._y=l*f*h-d*u*p,this._z=l*u*p+d*f*h,this._w=l*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(An(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*i+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,i=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+c*l+o*h-a*u,this.y=i+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return zc.copy(this).projectOnVector(t),this.sub(zc)}reflect(t){return this.sub(zc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(An(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zc=new B,Uh=new Nr;class pi{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Qn):Qn.fromBufferAttribute(r,o),Qn.applyMatrix4(t.matrixWorld),this.expandByPoint(Qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wo.copy(i.boundingBox)),Wo.applyMatrix4(t.matrixWorld),this.union(Wo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hr),Vo.subVectors(this.max,Hr),qs.subVectors(t.a,Hr),Xs.subVectors(t.b,Hr),Ys.subVectors(t.c,Hr),ji.subVectors(Xs,qs),Ki.subVectors(Ys,Xs),ys.subVectors(qs,Ys);let e=[0,-ji.z,ji.y,0,-Ki.z,Ki.y,0,-ys.z,ys.y,ji.z,0,-ji.x,Ki.z,0,-Ki.x,ys.z,0,-ys.x,-ji.y,ji.x,0,-Ki.y,Ki.x,0,-ys.y,ys.x,0];return!Hc(e,qs,Xs,Ys,Vo)||(e=[1,0,0,0,1,0,0,0,1],!Hc(e,qs,Xs,Ys,Vo))?!1:(qo.crossVectors(ji,Ki),e=[qo.x,qo.y,qo.z],Hc(e,qs,Xs,Ys,Vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Di=[new B,new B,new B,new B,new B,new B,new B,new B],Qn=new B,Wo=new pi,qs=new B,Xs=new B,Ys=new B,ji=new B,Ki=new B,ys=new B,Hr=new B,Vo=new B,qo=new B,Ss=new B;function Hc(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ss.fromArray(n,r);const a=s.x*Math.abs(Ss.x)+s.y*Math.abs(Ss.y)+s.z*Math.abs(Ss.z),c=t.dot(Ss),l=e.dot(Ss),u=i.dot(Ss);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const g_=new pi,Br=new B,Bc=new B;class Ro{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):g_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Br.subVectors(t,this.center);const e=Br.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Br,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Br.copy(t.center).add(Bc)),this.expandByPoint(Br.copy(t.center).sub(Bc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new B,Gc=new B,Xo=new B,Zi=new B,Wc=new B,Yo=new B,Vc=new B;class __{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pi.copy(this.origin).addScaledVector(this.direction,e),Pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Gc.copy(t).add(e).multiplyScalar(.5),Xo.copy(e).sub(t).normalize(),Zi.copy(this.origin).sub(Gc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Xo),a=Zi.dot(this.direction),c=-Zi.dot(Xo),l=Zi.lengthSq(),u=Math.abs(1-o*o);let h,d,f,p;if(u>0)if(h=o*c-a,d=o*a-c,p=r*u,h>=0)if(d>=-p)if(d<=p){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=p?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Gc).addScaledVector(Xo,d),f}intersectSphere(t,e){Pi.subVectors(t.center,this.origin);const i=Pi.dot(this.direction),s=Pi.dot(Pi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Pi)!==null}intersectTriangle(t,e,i,s,r){Wc.subVectors(e,t),Yo.subVectors(i,t),Vc.crossVectors(Wc,Yo);let o=this.direction.dot(Vc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,t);const c=a*this.direction.dot(Yo.crossVectors(Zi,Yo));if(c<0)return null;const l=a*this.direction.dot(Wc.cross(Zi));if(l<0||c+l>o)return null;const u=-a*Zi.dot(Vc);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(t,e,i,s,r,o,a,c,l,u,h,d,f,p,_,g){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,u,h,d,f,p,_,g)}set(t,e,i,s,r,o,a,c,l,u,h,d,f,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/$s.setFromMatrixColumn(t,0).length(),r=1/$s.setFromMatrixColumn(t,1).length(),o=1/$s.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,p=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+p*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=p+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,p=l*u,_=l*h;e[0]=d+_*a,e[4]=p*a-f,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-p,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,p=l*u,_=l*h;e[0]=d-_*a,e[4]=-o*h,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,f=o*h,p=a*u,_=a*h;e[0]=c*u,e[4]=p*l-f,e[8]=d*l+_,e[1]=c*h,e[5]=_*l+d,e[9]=f*l-p,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,p=a*c,_=a*l;e[0]=c*u,e[4]=_-d*h,e[8]=p*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+p,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*c,f=o*l,p=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+_,e[5]=o*u,e[9]=f*h-p,e[2]=p*h-f,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(x_,t,v_)}lookAt(t,e,i){const s=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Ji.crossVectors(i,Fn),Ji.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Ji.crossVectors(i,Fn)),Ji.normalize(),$o.crossVectors(Fn,Ji),s[0]=Ji.x,s[4]=$o.x,s[8]=Fn.x,s[1]=Ji.y,s[5]=$o.y,s[9]=Fn.y,s[2]=Ji.z,s[6]=$o.z,s[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],p=i[2],_=i[6],g=i[10],m=i[14],v=i[3],M=i[7],S=i[11],A=i[15],w=s[0],E=s[4],T=s[8],N=s[12],x=s[1],y=s[5],R=s[9],C=s[13],O=s[2],k=s[6],L=s[10],D=s[14],F=s[3],X=s[7],K=s[11],it=s[15];return r[0]=o*w+a*x+c*O+l*F,r[4]=o*E+a*y+c*k+l*X,r[8]=o*T+a*R+c*L+l*K,r[12]=o*N+a*C+c*D+l*it,r[1]=u*w+h*x+d*O+f*F,r[5]=u*E+h*y+d*k+f*X,r[9]=u*T+h*R+d*L+f*K,r[13]=u*N+h*C+d*D+f*it,r[2]=p*w+_*x+g*O+m*F,r[6]=p*E+_*y+g*k+m*X,r[10]=p*T+_*R+g*L+m*K,r[14]=p*N+_*C+g*D+m*it,r[3]=v*w+M*x+S*O+A*F,r[7]=v*E+M*y+S*k+A*X,r[11]=v*T+M*R+S*L+A*K,r[15]=v*N+M*C+S*D+A*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15];return p*(+r*c*h-s*l*h-r*a*d+i*l*d+s*a*f-i*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+g*(+e*l*h-e*a*f-r*o*h+i*o*f+r*a*u-i*l*u)+m*(-s*a*u-e*c*h+e*a*d+s*o*h-i*o*d+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],v=h*g*l-_*d*l+_*c*f-a*g*f-h*c*m+a*d*m,M=p*d*l-u*g*l-p*c*f+o*g*f+u*c*m-o*d*m,S=u*_*l-p*h*l+p*a*f-o*_*f-u*a*m+o*h*m,A=p*h*c-u*_*c-p*a*d+o*_*d+u*a*g-o*h*g,w=e*v+i*M+s*S+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return t[0]=v*E,t[1]=(_*d*r-h*g*r-_*s*f+i*g*f+h*s*m-i*d*m)*E,t[2]=(a*g*r-_*c*r+_*s*l-i*g*l-a*s*m+i*c*m)*E,t[3]=(h*c*r-a*d*r-h*s*l+i*d*l+a*s*f-i*c*f)*E,t[4]=M*E,t[5]=(u*g*r-p*d*r+p*s*f-e*g*f-u*s*m+e*d*m)*E,t[6]=(p*c*r-o*g*r-p*s*l+e*g*l+o*s*m-e*c*m)*E,t[7]=(o*d*r-u*c*r+u*s*l-e*d*l-o*s*f+e*c*f)*E,t[8]=S*E,t[9]=(p*h*r-u*_*r-p*i*f+e*_*f+u*i*m-e*h*m)*E,t[10]=(o*_*r-p*a*r+p*i*l-e*_*l-o*i*m+e*a*m)*E,t[11]=(u*a*r-o*h*r-u*i*l+e*h*l+o*i*f-e*a*f)*E,t[12]=A*E,t[13]=(u*_*s-p*h*s+p*i*d-e*_*d-u*i*g+e*h*g)*E,t[14]=(p*a*s-o*_*s-p*i*c+e*_*c+o*i*g-e*a*g)*E,t[15]=(o*h*s-u*a*s+u*i*c-e*h*c-o*i*d+e*a*d)*E,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,p=r*h,_=o*u,g=o*h,m=a*h,v=c*l,M=c*u,S=c*h,A=i.x,w=i.y,E=i.z;return s[0]=(1-(_+m))*A,s[1]=(f+S)*A,s[2]=(p-M)*A,s[3]=0,s[4]=(f-S)*w,s[5]=(1-(d+m))*w,s[6]=(g+v)*w,s[7]=0,s[8]=(p+M)*E,s[9]=(g-v)*E,s[10]=(1-(d+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=$s.set(s[0],s[1],s[2]).length();const o=$s.set(s[4],s[5],s[6]).length(),a=$s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ti.copy(this);const l=1/r,u=1/o,h=1/a;return ti.elements[0]*=l,ti.elements[1]*=l,ti.elements[2]*=l,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=h,ti.elements[9]*=h,ti.elements[10]*=h,e.setFromRotationMatrix(ti),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Wi){const c=this.elements,l=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s);let f,p;if(a===Wi)f=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(a===$a)f=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Wi){const c=this.elements,l=1/(e-t),u=1/(i-s),h=1/(o-r),d=(e+t)*l,f=(i+s)*u;let p,_;if(a===Wi)p=(o+r)*h,_=-2*h;else if(a===$a)p=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const $s=new B,ti=new jt,x_=new B(0,0,0),v_=new B(1,1,1),Ji=new B,$o=new B,Fn=new B,Fh=new jt,kh=new Nr;class fi{constructor(t=0,e=0,i=0,s=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(An(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-An(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(An(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-An(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(An(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-An(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Fh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kh.setFromEuler(this),this.setFromQuaternion(kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Op{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let M_=0;const zh=new B,js=new Nr,Oi=new jt,jo=new B,Gr=new B,y_=new B,S_=new Nr,Hh=new B(1,0,0),Bh=new B(0,1,0),Gh=new B(0,0,1),Wh={type:"added"},E_={type:"removed"},Ks={type:"childadded",child:null},qc={type:"childremoved",child:null};class nn extends Or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=To(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const t=new B,e=new fi,i=new Nr,s=new B(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new Zt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.multiply(js),this}rotateOnWorldAxis(t,e){return js.setFromAxisAngle(t,e),this.quaternion.premultiply(js),this}rotateX(t){return this.rotateOnAxis(Hh,t)}rotateY(t){return this.rotateOnAxis(Bh,t)}rotateZ(t){return this.rotateOnAxis(Gh,t)}translateOnAxis(t,e){return zh.copy(t).applyQuaternion(this.quaternion),this.position.add(zh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hh,t)}translateY(t){return this.translateOnAxis(Bh,t)}translateZ(t){return this.translateOnAxis(Gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?jo.copy(t):jo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Gr,jo,this.up):Oi.lookAt(jo,Gr,this.up),this.quaternion.setFromRotationMatrix(Oi),s&&(Oi.extractRotation(s.matrixWorld),js.setFromRotationMatrix(Oi),this.quaternion.premultiply(js.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wh),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(E_),qc.child=t,this.dispatchEvent(qc),qc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wh),Ks.child=t,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,t,y_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,S_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}nn.DEFAULT_UP=new B(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ei=new B,Ni=new B,Xc=new B,Ui=new B,Zs=new B,Js=new B,Vh=new B,Yc=new B,$c=new B,jc=new B,Kc=new fe,Zc=new fe,Jc=new fe;class oi{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ei.subVectors(t,e),s.cross(ei);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ei.subVectors(s,e),Ni.subVectors(i,e),Xc.subVectors(t,e);const o=ei.dot(ei),a=ei.dot(Ni),c=ei.dot(Xc),l=Ni.dot(Ni),u=Ni.dot(Xc),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,p=(o*u-a*c)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,Ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ui.x),c.addScaledVector(o,Ui.y),c.addScaledVector(a,Ui.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Kc.setScalar(0),Zc.setScalar(0),Jc.setScalar(0),Kc.fromBufferAttribute(t,e),Zc.fromBufferAttribute(t,i),Jc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Kc,r.x),o.addScaledVector(Zc,r.y),o.addScaledVector(Jc,r.z),o}static isFrontFacing(t,e,i,s){return ei.subVectors(i,e),Ni.subVectors(t,e),ei.cross(Ni).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ei.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ei.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return oi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return oi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return oi.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return oi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return oi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Zs.subVectors(s,i),Js.subVectors(r,i),Yc.subVectors(t,i);const c=Zs.dot(Yc),l=Js.dot(Yc);if(c<=0&&l<=0)return e.copy(i);$c.subVectors(t,s);const u=Zs.dot($c),h=Js.dot($c);if(u>=0&&h<=u)return e.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(Zs,o);jc.subVectors(t,r);const f=Zs.dot(jc),p=Js.dot(jc);if(p>=0&&f<=p)return e.copy(r);const _=f*l-c*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(i).addScaledVector(Js,a);const g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return Vh.subVectors(r,s),a=(h-u)/(h-u+(f-p)),e.copy(s).addScaledVector(Vh,a);const m=1/(g+_+d);return o=_*m,a=d*m,e.copy(i).addScaledVector(Zs,o).addScaledVector(Js,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Np={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function Qc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=i,ue.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ue.workingColorSpace){if(t=r_(t,1),e=An(e,0,1),i=An(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Qc(o,r,t+1/3),this.g=Qc(o,r,t),this.b=Qc(o,r,t-1/3)}return ue.toWorkingColorSpace(this,s),this}setStyle(t,e=an){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=an){const i=Np[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}copyLinearToSRGB(t){return this.r=Fc(t.r),this.g=Fc(t.g),this.b=Fc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return ue.fromWorkingColorSpace(pn.copy(this),t),Math.round(An(pn.r*255,0,255))*65536+Math.round(An(pn.g*255,0,255))*256+Math.round(An(pn.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(pn.copy(this),e);const i=pn.r,s=pn.g,r=pn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=an){ue.fromWorkingColorSpace(pn.copy(this),t);const e=pn.r,i=pn.g,s=pn.b;return t!==an?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Qi),this.setHSL(Qi.h+t,Qi.s+e,Qi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Qi),t.getHSL(Ko);const i=Nc(Qi.h,Ko.h,e),s=Nc(Qi.s,Ko.s,e),r=Nc(Qi.l,Ko.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new zt;zt.NAMES=Np;let w_=0;class Lo extends Or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=To(),this.name="",this.type="Material",this.blending=gr,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=a0,this.blendDst=c0,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==a0&&(i.blendSrc=this.blendSrc),this.blendDst!==c0&&(i.blendDst=this.blendDst),this.blendEquation!==Ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ch&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class li extends Lo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=_p,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const We=new B,Zo=new Bt;class pe{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ih,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Zo.fromBufferAttribute(this,e),Zo.applyMatrix3(t),this.setXY(e,Zo.x,Zo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=kr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Cn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=kr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=kr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=kr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=kr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),i=Cn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),i=Cn(i,this.array),s=Cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),i=Cn(i,this.array),s=Cn(s,this.array),r=Cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ih&&(t.usage=this.usage),t}}class Up extends pe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Fp extends pe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ue extends pe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let b_=0;const Vn=new jt,tl=new nn,Qs=new B,kn=new pi,Wr=new pi,Je=new B;class Sn extends Or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=To(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ip(t)?Fp:Up)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,i){return Vn.makeTranslation(t,e,i),this.applyMatrix4(Vn),this}scale(t,e,i){return Vn.makeScale(t,e,i),this.applyMatrix4(Vn),this}lookAt(t){return tl.lookAt(t),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ue(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ro);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const i=this.boundingSphere.center;if(kn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(kn.min,Wr.min),kn.expandByPoint(Je),Je.addVectors(kn.max,Wr.max),kn.expandByPoint(Je)):(kn.expandByPoint(Wr.min),kn.expandByPoint(Wr.max))}kn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Je));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Je.fromBufferAttribute(a,l),c&&(Qs.fromBufferAttribute(t,l),Je.add(Qs)),s=Math.max(s,i.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<i.count;T++)a[T]=new B,c[T]=new B;const l=new B,u=new B,h=new B,d=new Bt,f=new Bt,p=new Bt,_=new B,g=new B;function m(T,N,x){l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,N),h.fromBufferAttribute(i,x),d.fromBufferAttribute(r,T),f.fromBufferAttribute(r,N),p.fromBufferAttribute(r,x),u.sub(l),h.sub(l),f.sub(d),p.sub(d);const y=1/(f.x*p.y-p.x*f.y);isFinite(y)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(y),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(y),a[T].add(_),a[N].add(_),a[x].add(_),c[T].add(g),c[N].add(g),c[x].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let T=0,N=v.length;T<N;++T){const x=v[T],y=x.start,R=x.count;for(let C=y,O=y+R;C<O;C+=3)m(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const M=new B,S=new B,A=new B,w=new B;function E(T){A.fromBufferAttribute(s,T),w.copy(A);const N=a[T];M.copy(N),M.sub(A.multiplyScalar(A.dot(N))).normalize(),S.crossVectors(w,N);const y=S.dot(c[T])<0?-1:1;o.setXYZW(T,M.x,M.y,M.z,y)}for(let T=0,N=v.length;T<N;++T){const x=v[T],y=x.start,R=x.count;for(let C=y,O=y+R;C<O;C+=3)E(t.getX(C+0)),E(t.getX(C+1)),E(t.getX(C+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new B,r=new B,o=new B,a=new B,c=new B,l=new B,u=new B,h=new B;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,p),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),a.add(u),c.add(u),l.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,p=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let m=0;m<u;m++)d[p++]=l[f++]}return new pe(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Sn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qh=new jt,Es=new __,Jo=new Ro,Xh=new B,Qo=new B,ta=new B,ea=new B,el=new B,na=new B,Yh=new B,ia=new B;class Pt extends nn{constructor(t=new Sn,e=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){na.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(el.fromBufferAttribute(h,t),o?na.addScaledVector(el,u):na.addScaledVector(el.sub(e),u))}e.add(na)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(r),Es.copy(t.ray).recast(t.near),!(Jo.containsPoint(Es.origin)===!1&&(Es.intersectSphere(Jo,Xh)===null||Es.origin.distanceToSquared(Xh)>(t.far-t.near)**2))&&(qh.copy(r).invert(),Es.copy(t.ray).applyMatrix4(qh),!(i.boundingBox!==null&&Es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Es)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let S=v,A=M;S<A;S+=3){const w=a.getX(S),E=a.getX(S+1),T=a.getX(S+2);s=sa(this,m,t,i,l,u,h,w,E,T),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const v=a.getX(g),M=a.getX(g+1),S=a.getX(g+2);s=sa(this,o,t,i,l,u,h,v,M,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let S=v,A=M;S<A;S+=3){const w=S,E=S+1,T=S+2;s=sa(this,m,t,i,l,u,h,w,E,T),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const v=g,M=g+1,S=g+2;s=sa(this,o,t,i,l,u,h,v,M,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function A_(n,t,e,i,s,r,o,a){let c;if(t.side===Tn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===di,a),c===null)return null;ia.copy(a),ia.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ia);return l<e.near||l>e.far?null:{distance:l,point:ia.clone(),object:n}}function sa(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,Qo),n.getVertexPosition(c,ta),n.getVertexPosition(l,ea);const u=A_(n,t,e,i,Qo,ta,ea,Yh);if(u){const h=new B;oi.getBarycoord(Yh,Qo,ta,ea,h),s&&(u.uv=oi.getInterpolatedAttribute(s,a,c,l,h,new Bt)),r&&(u.uv1=oi.getInterpolatedAttribute(r,a,c,l,h,new Bt)),o&&(u.normal=oi.getInterpolatedAttribute(o,a,c,l,h,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new B,materialIndex:0};oi.getNormal(Qo,ta,ea,d.normal),u.face=d,u.barycoord=h}return u}class hn extends Sn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,i,e,t,o,r,0),p("z","y","x",1,-1,i,e,-t,o,r,1),p("x","z","y",1,1,t,i,e,s,o,2),p("x","z","y",1,-1,t,i,-e,s,o,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ue(l,3)),this.setAttribute("normal",new Ue(u,3)),this.setAttribute("uv",new Ue(h,2));function p(_,g,m,v,M,S,A,w,E,T,N){const x=S/E,y=A/T,R=S/2,C=A/2,O=w/2,k=E+1,L=T+1;let D=0,F=0;const X=new B;for(let K=0;K<L;K++){const it=K*y-C;for(let dt=0;dt<k;dt++){const Q=dt*x-R;X[_]=Q*v,X[g]=it*M,X[m]=O,l.push(X.x,X.y,X.z),X[_]=0,X[g]=0,X[m]=w>0?1:-1,u.push(X.x,X.y,X.z),h.push(dt/E),h.push(1-K/T),D+=1}}for(let K=0;K<T;K++)for(let it=0;it<E;it++){const dt=d+it+k*K,Q=d+it+k*(K+1),z=d+(it+1)+k*(K+1),U=d+(it+1)+k*K;c.push(dt,Q,U),c.push(Q,z,U),F+=6}a.addGroup(f,F,N),f+=F,d+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function wn(n){const t={};for(let e=0;e<n.length;e++){const i=Rr(n[e]);for(const s in i)t[s]=i[s]}return t}function T_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function kp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const R_={clone:Rr,merge:wn};var L_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,C_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends Lo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L_,this.fragmentShader=C_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=T_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class zp extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Wi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ts=new B,$h=new Bt,jh=new Bt;class cn extends zp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=q0*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Oc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return q0*2*Math.atan(Math.tan(Oc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,e){return this.getViewBounds(t,$h,jh),e.subVectors(jh,$h)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Oc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const tr=-90,er=1;class I_ extends nn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(tr,er,t,e);s.layers=this.layers,this.add(s);const r=new cn(tr,er,t,e);r.layers=this.layers,this.add(r);const o=new cn(tr,er,t,e);o.layers=this.layers,this.add(o);const a=new cn(tr,er,t,e);a.layers=this.layers,this.add(a);const c=new cn(tr,er,t,e);c.layers=this.layers,this.add(c);const l=new cn(tr,er,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===$a)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Hp extends Mn{constructor(t,e,i,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:wr,super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class D_ extends Xi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Hp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ze}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new hn(5,5,5),r=new wi({name:"CubemapFromEquirect",uniforms:Rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:fs});r.uniforms.tEquirect.value=e;const o=new Pt(s,r),a=e.minFilter;return e.minFilter===ci&&(e.minFilter=ze),new I_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const nl=new B,P_=new B,O_=new Zt;class Bi{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=nl.subVectors(i,e).cross(P_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(nl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||O_.getNormalMatrix(t),s=this.coplanarPoint(nl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new Ro,ra=new B;class Co{constructor(t=new Bi,e=new Bi,i=new Bi,s=new Bi,r=new Bi,o=new Bi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Wi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],p=s[9],_=s[10],g=s[11],m=s[12],v=s[13],M=s[14],S=s[15];if(i[0].setComponents(c-r,d-l,g-f,S-m).normalize(),i[1].setComponents(c+r,d+l,g+f,S+m).normalize(),i[2].setComponents(c+o,d+u,g+p,S+v).normalize(),i[3].setComponents(c-o,d-u,g-p,S-v).normalize(),i[4].setComponents(c-a,d-h,g-_,S-M).normalize(),e===Wi)i[5].setComponents(c+a,d+h,g+_,S+M).normalize();else if(e===$a)i[5].setComponents(a,h,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(t){return ws.center.set(0,0,0),ws.radius=.7071067811865476,ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ra.x=s.normal.x>0?t.max.x:t.min.x,ra.y=s.normal.y>0?t.max.y:t.min.y,ra.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function N_(n){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,a),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){const p=h[d],_=h[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){const _=h[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class mi extends Sn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=t/a,d=e/c,f=[],p=[],_=[],g=[];for(let m=0;m<u;m++){const v=m*d-o;for(let M=0;M<l;M++){const S=M*h-r;p.push(S,-v,0),_.push(0,0,1),g.push(M/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<a;v++){const M=v+l*m,S=v+l*(m+1),A=v+1+l*(m+1),w=v+1+l*m;f.push(M,S,w),f.push(S,A,w)}this.setIndex(f),this.setAttribute("position",new Ue(p,3)),this.setAttribute("normal",new Ue(_,3)),this.setAttribute("uv",new Ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mi(t.width,t.height,t.widthSegments,t.heightSegments)}}var U_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,k_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,z_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,W_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,q_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Y_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,j_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,K_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,s1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,r1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,o1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,a1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,c1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,d1="gl_FragColor = linearToOutputTexel( gl_FragColor );",f1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,m1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,g1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,v1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,S1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,R1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,L1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,O1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,N1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,U1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,F1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,q1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Y1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,J1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ix=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ox=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ux=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,px=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_x=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ax=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ux=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Gx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ev=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ov=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,av=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:U_,alphahash_pars_fragment:F_,alphamap_fragment:k_,alphamap_pars_fragment:z_,alphatest_fragment:H_,alphatest_pars_fragment:B_,aomap_fragment:G_,aomap_pars_fragment:W_,batching_pars_vertex:V_,batching_vertex:q_,begin_vertex:X_,beginnormal_vertex:Y_,bsdfs:$_,iridescence_fragment:j_,bumpmap_pars_fragment:K_,clipping_planes_fragment:Z_,clipping_planes_pars_fragment:J_,clipping_planes_pars_vertex:Q_,clipping_planes_vertex:t1,color_fragment:e1,color_pars_fragment:n1,color_pars_vertex:i1,color_vertex:s1,common:r1,cube_uv_reflection_fragment:o1,defaultnormal_vertex:a1,displacementmap_pars_vertex:c1,displacementmap_vertex:l1,emissivemap_fragment:u1,emissivemap_pars_fragment:h1,colorspace_fragment:d1,colorspace_pars_fragment:f1,envmap_fragment:p1,envmap_common_pars_fragment:m1,envmap_pars_fragment:g1,envmap_pars_vertex:_1,envmap_physical_pars_fragment:R1,envmap_vertex:x1,fog_vertex:v1,fog_pars_vertex:M1,fog_fragment:y1,fog_pars_fragment:S1,gradientmap_pars_fragment:E1,lightmap_pars_fragment:w1,lights_lambert_fragment:b1,lights_lambert_pars_fragment:A1,lights_pars_begin:T1,lights_toon_fragment:L1,lights_toon_pars_fragment:C1,lights_phong_fragment:I1,lights_phong_pars_fragment:D1,lights_physical_fragment:P1,lights_physical_pars_fragment:O1,lights_fragment_begin:N1,lights_fragment_maps:U1,lights_fragment_end:F1,logdepthbuf_fragment:k1,logdepthbuf_pars_fragment:z1,logdepthbuf_pars_vertex:H1,logdepthbuf_vertex:B1,map_fragment:G1,map_pars_fragment:W1,map_particle_fragment:V1,map_particle_pars_fragment:q1,metalnessmap_fragment:X1,metalnessmap_pars_fragment:Y1,morphinstance_vertex:$1,morphcolor_vertex:j1,morphnormal_vertex:K1,morphtarget_pars_vertex:Z1,morphtarget_vertex:J1,normal_fragment_begin:Q1,normal_fragment_maps:tx,normal_pars_fragment:ex,normal_pars_vertex:nx,normal_vertex:ix,normalmap_pars_fragment:sx,clearcoat_normal_fragment_begin:rx,clearcoat_normal_fragment_maps:ox,clearcoat_pars_fragment:ax,iridescence_pars_fragment:cx,opaque_fragment:lx,packing:ux,premultiplied_alpha_fragment:hx,project_vertex:dx,dithering_fragment:fx,dithering_pars_fragment:px,roughnessmap_fragment:mx,roughnessmap_pars_fragment:gx,shadowmap_pars_fragment:_x,shadowmap_pars_vertex:xx,shadowmap_vertex:vx,shadowmask_pars_fragment:Mx,skinbase_vertex:yx,skinning_pars_vertex:Sx,skinning_vertex:Ex,skinnormal_vertex:wx,specularmap_fragment:bx,specularmap_pars_fragment:Ax,tonemapping_fragment:Tx,tonemapping_pars_fragment:Rx,transmission_fragment:Lx,transmission_pars_fragment:Cx,uv_pars_fragment:Ix,uv_pars_vertex:Dx,uv_vertex:Px,worldpos_vertex:Ox,background_vert:Nx,background_frag:Ux,backgroundCube_vert:Fx,backgroundCube_frag:kx,cube_vert:zx,cube_frag:Hx,depth_vert:Bx,depth_frag:Gx,distanceRGBA_vert:Wx,distanceRGBA_frag:Vx,equirect_vert:qx,equirect_frag:Xx,linedashed_vert:Yx,linedashed_frag:$x,meshbasic_vert:jx,meshbasic_frag:Kx,meshlambert_vert:Zx,meshlambert_frag:Jx,meshmatcap_vert:Qx,meshmatcap_frag:tv,meshnormal_vert:ev,meshnormal_frag:nv,meshphong_vert:iv,meshphong_frag:sv,meshphysical_vert:rv,meshphysical_frag:ov,meshtoon_vert:av,meshtoon_frag:cv,points_vert:lv,points_frag:uv,shadow_vert:hv,shadow_frag:dv,sprite_vert:fv,sprite_frag:pv},xt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},xi={basic:{uniforms:wn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:wn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:wn([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:wn([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:wn([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:wn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:wn([xt.points,xt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:wn([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:wn([xt.common,xt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:wn([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:wn([xt.sprite,xt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:wn([xt.common,xt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:wn([xt.lights,xt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};xi.physical={uniforms:wn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const oa={r:0,b:0,g:0},bs=new fi,mv=new jt;function gv(n,t,e,i,s,r,o){const a=new zt(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function p(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function _(v){let M=!1;const S=p(v);S===null?m(a,c):S&&S.isColor&&(m(S,1),M=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(v,M){const S=p(M);S&&(S.isCubeTexture||S.mapping===dc)?(u===void 0&&(u=new Pt(new hn(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:Rr(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),bs.copy(M.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mv.makeRotationFromEuler(bs)),u.material.toneMapped=ue.getTransfer(S.colorSpace)!==we,(h!==S||d!==S.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,f=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Pt(new mi(2,2),new wi({name:"BackgroundMaterial",uniforms:Rr(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ue.getTransfer(S.colorSpace)!==we,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,M){v.getRGB(oa,kp(n)),i.buffers.color.setClear(oa.r,oa.g,oa.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),c=M,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,m(a,c)},render:_,addToRenderList:g}}function _v(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(x,y,R,C,O){let k=!1;const L=h(C,R,y);r!==L&&(r=L,l(r.object)),k=f(x,C,R,O),k&&p(x,C,R,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,S(x,y,R,C),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function h(x,y,R){const C=R.wireframe===!0;let O=i[x.id];O===void 0&&(O={},i[x.id]=O);let k=O[y.id];k===void 0&&(k={},O[y.id]=k);let L=k[C];return L===void 0&&(L=d(c()),k[C]=L),L}function d(x){const y=[],R=[],C=[];for(let O=0;O<e;O++)y[O]=0,R[O]=0,C[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:R,attributeDivisors:C,object:x,attributes:{},index:null}}function f(x,y,R,C){const O=r.attributes,k=y.attributes;let L=0;const D=R.getAttributes();for(const F in D)if(D[F].location>=0){const K=O[F];let it=k[F];if(it===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(it=x.instanceColor)),K===void 0||K.attribute!==it||it&&K.data!==it.data)return!0;L++}return r.attributesNum!==L||r.index!==C}function p(x,y,R,C){const O={},k=y.attributes;let L=0;const D=R.getAttributes();for(const F in D)if(D[F].location>=0){let K=k[F];K===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(K=x.instanceColor));const it={};it.attribute=K,K&&K.data&&(it.data=K.data),O[F]=it,L++}r.attributes=O,r.attributesNum=L,r.index=C}function _(){const x=r.newAttributes;for(let y=0,R=x.length;y<R;y++)x[y]=0}function g(x){m(x,0)}function m(x,y){const R=r.newAttributes,C=r.enabledAttributes,O=r.attributeDivisors;R[x]=1,C[x]===0&&(n.enableVertexAttribArray(x),C[x]=1),O[x]!==y&&(n.vertexAttribDivisor(x,y),O[x]=y)}function v(){const x=r.newAttributes,y=r.enabledAttributes;for(let R=0,C=y.length;R<C;R++)y[R]!==x[R]&&(n.disableVertexAttribArray(R),y[R]=0)}function M(x,y,R,C,O,k,L){L===!0?n.vertexAttribIPointer(x,y,R,O,k):n.vertexAttribPointer(x,y,R,C,O,k)}function S(x,y,R,C){_();const O=C.attributes,k=R.getAttributes(),L=y.defaultAttributeValues;for(const D in k){const F=k[D];if(F.location>=0){let X=O[D];if(X===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(X=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(X=x.instanceColor)),X!==void 0){const K=X.normalized,it=X.itemSize,dt=t.get(X);if(dt===void 0)continue;const Q=dt.buffer,z=dt.type,U=dt.bytesPerElement,Y=z===n.INT||z===n.UNSIGNED_INT||X.gpuType===yu;if(X.isInterleavedBufferAttribute){const J=X.data,ut=J.stride,lt=X.offset;if(J.isInstancedInterleavedBuffer){for(let ht=0;ht<F.locationSize;ht++)m(F.location+ht,J.meshPerAttribute);x.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ht=0;ht<F.locationSize;ht++)g(F.location+ht);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let ht=0;ht<F.locationSize;ht++)M(F.location+ht,it/F.locationSize,z,K,ut*U,(lt+it/F.locationSize*ht)*U,Y)}else{if(X.isInstancedBufferAttribute){for(let J=0;J<F.locationSize;J++)m(F.location+J,X.meshPerAttribute);x.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let J=0;J<F.locationSize;J++)g(F.location+J);n.bindBuffer(n.ARRAY_BUFFER,Q);for(let J=0;J<F.locationSize;J++)M(F.location+J,it/F.locationSize,z,K,it*U,it/F.locationSize*J*U,Y)}}else if(L!==void 0){const K=L[D];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(F.location,K);break;case 3:n.vertexAttrib3fv(F.location,K);break;case 4:n.vertexAttrib4fv(F.location,K);break;default:n.vertexAttrib1fv(F.location,K)}}}}v()}function A(){T();for(const x in i){const y=i[x];for(const R in y){const C=y[R];for(const O in C)u(C[O].object),delete C[O];delete y[R]}delete i[x]}}function w(x){if(i[x.id]===void 0)return;const y=i[x.id];for(const R in y){const C=y[R];for(const O in C)u(C[O].object),delete C[O];delete y[R]}delete i[x.id]}function E(x){for(const y in i){const R=i[y];if(R[x.id]===void 0)continue;const C=R[x.id];for(const O in C)u(C[O].object),delete C[O];delete R[x.id]}}function T(){N(),o=!0,r!==s&&(r=s,l(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function xv(n,t,e){let i;function s(l){i=l}function r(l,u){n.drawArrays(i,l,u),e.update(u,i,1)}function o(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),e.update(u,i,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];e.update(f,i,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)o(l[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];for(let _=0;_<d.length;_++)e.update(p,i,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function vv(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==vn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const T=E===Pr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==qi&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==yi&&!T)}function c(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=p>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:A,maxSamples:w}}function Mv(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Bi,a=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,m=n.get(h);if(!s||p===null||p.length===0||r&&!g)r?u(null):l();else{const v=r?0:i,M=v*4;let S=m.clippingState||null;c.value=S,S=u(p,d,M,f);for(let A=0;A!==M;++A)S[A]=e[A];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,f,p){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=c.value,p!==!0||g===null){const m=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,S=f;M!==_;++M,S+=4)o.copy(h[M]).applyMatrix4(v,a),o.normal.toArray(g,S),g[S+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function yv(n){let t=new WeakMap;function e(o,a){return a===g0?o.mapping=wr:a===_0&&(o.mapping=br),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===g0||a===_0)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new D_(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Lu extends zp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const pr=4,Kh=[.125,.215,.35,.446,.526,.582],Ps=20,il=new Lu,Zh=new zt;let sl=null,rl=0,ol=0,al=!1;const Is=(1+Math.sqrt(5))/2,nr=1/Is,Jh=[new B(-Is,nr,0),new B(Is,nr,0),new B(-nr,0,Is),new B(nr,0,Is),new B(0,Is,-nr),new B(0,Is,nr),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Qh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(sl,rl,ol),this._renderer.xr.enabled=al,t.scissorTest=!1,aa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wr||t.mapping===br?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sl=this._renderer.getRenderTarget(),rl=this._renderer.getActiveCubeFace(),ol=this._renderer.getActiveMipmapLevel(),al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:Pr,format:vn,colorSpace:Ri,depthBuffer:!1},s=td(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=td(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sv(r)),this._blurMaterial=Ev(r,t,e)}return s}_compileMaterial(t){const e=new Pt(this._lodPlanes[0],t);this._renderer.compile(e,il)}_sceneToCubeUV(t,e,i,s){const a=new cn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Zh),u.toneMapping=ps,u.autoClear=!1;const f=new li({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),p=new Pt(new hn,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(Zh),_=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(a.up.set(0,c[m],0),a.lookAt(l[m],0,0)):v===1?(a.up.set(0,0,c[m]),a.lookAt(0,l[m],0)):(a.up.set(0,c[m],0),a.lookAt(0,0,l[m]));const M=this._cubeSize;aa(s,v*M,m>2?M:0,M,M),u.setRenderTarget(s),_&&u.render(p,a),u.render(t,a)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===wr||t.mapping===br;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ed());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;aa(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,il)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jh[(s-r-1)%Jh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Pt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ps-1),_=r/p,g=isFinite(r)?1+Math.floor(u*_):Ps;g>Ps&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ps}`);const m=[];let v=0;for(let E=0;E<Ps;++E){const T=E/_,N=Math.exp(-T*T/2);m.push(N),E===0?v+=N:E<g&&(v+=2*N)}for(let E=0;E<m.length;E++)m[E]=m[E]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=p,d.mipInt.value=M-i;const S=this._sizeLods[s],A=3*S*(s>M-pr?s-M+pr:0),w=4*(this._cubeSize-S);aa(e,A,w,3*S,2*S),c.setRenderTarget(e),c.render(h,il)}}function Sv(n){const t=[],e=[],i=[];let s=n;const r=n-pr+1+Kh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-pr?c=Kh[o-n+pr-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,_=3,g=2,m=1,v=new Float32Array(_*p*f),M=new Float32Array(g*p*f),S=new Float32Array(m*p*f);for(let w=0;w<f;w++){const E=w%3*2/3-1,T=w>2?0:-1,N=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];v.set(N,_*p*w),M.set(d,g*p*w);const x=[w,w,w,w,w,w];S.set(x,m*p*w)}const A=new Sn;A.setAttribute("position",new pe(v,_)),A.setAttribute("uv",new pe(M,g)),A.setAttribute("faceIndex",new pe(S,m)),t.push(A),s>pr&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function td(n,t,e){const i=new Xi(n,t,e);return i.texture.mapping=dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function aa(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ev(n,t,e){const i=new Float32Array(Ps),s=new B(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function ed(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function nd(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function Cu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wv(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===g0||c===_0,u=c===wr||c===br;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Qh(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new Qh(n)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function bv(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Oa("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Av(n,t,e,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);for(const p in d.morphAttributes){const _=d.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)t.remove(_[g])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)t.update(d[p],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const p in f){const _=f[p];for(let g=0,m=_.length;g<m;g++)t.update(_[g],n.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,p=h.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let M=0,S=v.length;M<S;M+=3){const A=v[M+0],w=v[M+1],E=v[M+2];d.push(A,w,w,E,E,A)}}else if(p!==void 0){const v=p.array;_=p.version;for(let M=0,S=v.length/3-1;M<S;M+=3){const A=M+0,w=M+1,E=M+2;d.push(A,w,w,E,E,A)}}else return;const g=new(Ip(d)?Fp:Up)(d,1);g.version=_;const m=r.get(h);m&&t.remove(m),r.set(h,g)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Tv(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function l(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,d*o,p),e.update(f,i,p))}function u(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,i,1)}function h(d,f,p,_){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)l(d[m]/o,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v];for(let v=0;v<_.length;v++)e.update(m,i,_[v])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Rv(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Lv(n,t,e){const i=new WeakMap,s=new fe;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let x=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;p===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let A=a.attributes.position.count*S,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const E=new Float32Array(A*w*4*h),T=new Pp(E,A,w,h);T.type=yi,T.needsUpdate=!0;const N=S*4;for(let y=0;y<h;y++){const R=m[y],C=v[y],O=M[y],k=A*w*4*y;for(let L=0;L<R.count;L++){const D=L*N;p===!0&&(s.fromBufferAttribute(R,L),E[k+D+0]=s.x,E[k+D+1]=s.y,E[k+D+2]=s.z,E[k+D+3]=0),_===!0&&(s.fromBufferAttribute(C,L),E[k+D+4]=s.x,E[k+D+5]=s.y,E[k+D+6]=s.z,E[k+D+7]=0),g===!0&&(s.fromBufferAttribute(O,L),E[k+D+8]=s.x,E[k+D+9]=s.y,E[k+D+10]=s.z,E[k+D+11]=O.itemSize===4?s.w:1)}}d={count:h,texture:T,size:new Bt(A,w)},i.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const _=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Cv(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Gp extends Mn{constructor(t,e,i,s,r,o,a,c,l,u=_r){if(u!==_r&&u!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===_r&&(i=zs),i===void 0&&u===Tr&&(i=Ar),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:xn,this.minFilter=c!==void 0?c:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Wp=new Mn,id=new Gp(1,1),Vp=new Pp,qp=new m_,Xp=new Hp,sd=[],rd=[],od=new Float32Array(16),ad=new Float32Array(9),cd=new Float32Array(4);function Ur(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=sd[s];if(r===void 0&&(r=new Float32Array(s),sd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function pc(n,t){let e=rd[t];e===void 0&&(e=new Int32Array(t),rd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Iv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Dv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2fv(this.addr,t),Ze(e,t)}}function Pv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;n.uniform3fv(this.addr,t),Ze(e,t)}}function Ov(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4fv(this.addr,t),Ze(e,t)}}function Nv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,i))return;cd.set(i),n.uniformMatrix2fv(this.addr,!1,cd),Ze(e,i)}}function Uv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,i))return;ad.set(i),n.uniformMatrix3fv(this.addr,!1,ad),Ze(e,i)}}function Fv(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ke(e,i))return;od.set(i),n.uniformMatrix4fv(this.addr,!1,od),Ze(e,i)}}function kv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function zv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2iv(this.addr,t),Ze(e,t)}}function Hv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3iv(this.addr,t),Ze(e,t)}}function Bv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4iv(this.addr,t),Ze(e,t)}}function Gv(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Wv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2uiv(this.addr,t),Ze(e,t)}}function Vv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3uiv(this.addr,t),Ze(e,t)}}function qv(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4uiv(this.addr,t),Ze(e,t)}}function Xv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(id.compareFunction=Cp,r=id):r=Wp,e.setTexture2D(t||r,s)}function Yv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||qp,s)}function $v(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Xp,s)}function jv(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Vp,s)}function Kv(n){switch(n){case 5126:return Iv;case 35664:return Dv;case 35665:return Pv;case 35666:return Ov;case 35674:return Nv;case 35675:return Uv;case 35676:return Fv;case 5124:case 35670:return kv;case 35667:case 35671:return zv;case 35668:case 35672:return Hv;case 35669:case 35673:return Bv;case 5125:return Gv;case 36294:return Wv;case 36295:return Vv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Xv;case 35679:case 36299:case 36307:return Yv;case 35680:case 36300:case 36308:case 36293:return $v;case 36289:case 36303:case 36311:case 36292:return jv}}function Zv(n,t){n.uniform1fv(this.addr,t)}function Jv(n,t){const e=Ur(t,this.size,2);n.uniform2fv(this.addr,e)}function Qv(n,t){const e=Ur(t,this.size,3);n.uniform3fv(this.addr,e)}function tM(n,t){const e=Ur(t,this.size,4);n.uniform4fv(this.addr,e)}function eM(n,t){const e=Ur(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function nM(n,t){const e=Ur(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function iM(n,t){const e=Ur(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function sM(n,t){n.uniform1iv(this.addr,t)}function rM(n,t){n.uniform2iv(this.addr,t)}function oM(n,t){n.uniform3iv(this.addr,t)}function aM(n,t){n.uniform4iv(this.addr,t)}function cM(n,t){n.uniform1uiv(this.addr,t)}function lM(n,t){n.uniform2uiv(this.addr,t)}function uM(n,t){n.uniform3uiv(this.addr,t)}function hM(n,t){n.uniform4uiv(this.addr,t)}function dM(n,t,e){const i=this.cache,s=t.length,r=pc(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Wp,r[o])}function fM(n,t,e){const i=this.cache,s=t.length,r=pc(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||qp,r[o])}function pM(n,t,e){const i=this.cache,s=t.length,r=pc(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Xp,r[o])}function mM(n,t,e){const i=this.cache,s=t.length,r=pc(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Vp,r[o])}function gM(n){switch(n){case 5126:return Zv;case 35664:return Jv;case 35665:return Qv;case 35666:return tM;case 35674:return eM;case 35675:return nM;case 35676:return iM;case 5124:case 35670:return sM;case 35667:case 35671:return rM;case 35668:case 35672:return oM;case 35669:case 35673:return aM;case 5125:return cM;case 36294:return lM;case 36295:return uM;case 36296:return hM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return pM;case 36289:case 36303:case 36311:case 36292:return mM}}class _M{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Kv(e.type)}}class xM{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gM(e.type)}}class vM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const cl=/(\w+)(\])?(\[|\.)?/g;function ld(n,t){n.seq.push(t),n.map[t.id]=t}function MM(n,t,e){const i=n.name,s=i.length;for(cl.lastIndex=0;;){const r=cl.exec(i),o=cl.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ld(e,l===void 0?new _M(a,n,t):new xM(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new vM(a),ld(e,h)),e=h}}}class Na{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);MM(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function ud(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const yM=37297;let SM=0;function EM(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function wM(n){const t=ue.getPrimaries(ue.workingColorSpace),e=ue.getPrimaries(n);let i;switch(t===e?i="":t===Ya&&e===Xa?i="LinearDisplayP3ToLinearSRGB":t===Xa&&e===Ya&&(i="LinearSRGBToLinearDisplayP3"),n){case Ri:case fc:return[i,"LinearTransferOETF"];case an:case Ru:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function hd(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+EM(n.getShaderSource(t),o)}else return s}function bM(n,t){const e=wM(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function AM(n,t){let e;switch(t){case Gg:e="Linear";break;case Wg:e="Reinhard";break;case Vg:e="Cineon";break;case xp:e="ACESFilmic";break;case Xg:e="AgX";break;case Yg:e="Neutral";break;case qg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ca=new B;function TM(){ue.getLuminanceCoefficients(ca);const n=ca.x.toFixed(4),t=ca.y.toFixed(4),e=ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function LM(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function CM(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ro(n){return n!==""}function dd(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const IM=/^[ \t]*#include +<([\w\d./]+)>/gm;function X0(n){return n.replace(IM,PM)}const DM=new Map;function PM(n,t){let e=Qt[t];if(e===void 0){const i=DM.get(t);if(i!==void 0)e=Qt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return X0(e)}const OM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pd(n){return n.replace(OM,NM)}function NM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function md(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function UM(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===mp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===gp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zi&&(t="SHADOWMAP_TYPE_VSM"),t}function FM(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case wr:case br:t="ENVMAP_TYPE_CUBE";break;case dc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kM(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case br:t="ENVMAP_MODE_REFRACTION";break}return t}function zM(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _p:t="ENVMAP_BLENDING_MULTIPLY";break;case Hg:t="ENVMAP_BLENDING_MIX";break;case Bg:t="ENVMAP_BLENDING_ADD";break}return t}function HM(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function BM(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=UM(e),l=FM(e),u=kM(e),h=zM(e),d=HM(e),f=RM(e),p=LM(r),_=s.createProgram();let g,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ro).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ro).join(`
`),m.length>0&&(m+=`
`)):(g=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),m=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ps?"#define TONE_MAPPING":"",e.toneMapping!==ps?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ps?AM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,bM("linearToOutputTexel",e.outputColorSpace),TM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ro).join(`
`)),o=X0(o),o=dd(o,e),o=fd(o,e),a=X0(a),a=dd(a,e),a=fd(a,e),o=pd(o),a=pd(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=v+g+o,S=v+m+a,A=ud(s,s.VERTEX_SHADER,M),w=ud(s,s.FRAGMENT_SHADER,S);s.attachShader(_,A),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(y){if(n.debug.checkShaderErrors){const R=s.getProgramInfoLog(_).trim(),C=s.getShaderInfoLog(A).trim(),O=s.getShaderInfoLog(w).trim();let k=!0,L=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,A,w);else{const D=hd(s,A,"vertex"),F=hd(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+R+`
`+D+`
`+F)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(C===""||O==="")&&(L=!1);L&&(y.diagnostics={runnable:k,programLog:R,vertexShader:{log:C,prefix:g},fragmentShader:{log:O,prefix:m}})}s.deleteShader(A),s.deleteShader(w),T=new Na(s,_),N=CM(s,_)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let N;this.getAttributes=function(){return N===void 0&&E(this),N};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,yM)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=SM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let GM=0;class WM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new VM(t),e.set(t,i)),i}}class VM{constructor(t){this.id=GM++,this.code=t,this.usedTimes=0}}function qM(n,t,e,i,s,r,o){const a=new Op,c=new WM,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,y,R,C,O){const k=C.fog,L=O.geometry,D=x.isMeshStandardMaterial?C.environment:null,F=(x.isMeshStandardMaterial?e:t).get(x.envMap||D),X=F&&F.mapping===dc?F.image.height:null,K=_[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const it=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,dt=it!==void 0?it.length:0;let Q=0;L.morphAttributes.position!==void 0&&(Q=1),L.morphAttributes.normal!==void 0&&(Q=2),L.morphAttributes.color!==void 0&&(Q=3);let z,U,Y,J;if(K){const Ln=xi[K];z=Ln.vertexShader,U=Ln.fragmentShader}else z=x.vertexShader,U=x.fragmentShader,c.update(x),Y=c.getVertexShaderID(x),J=c.getFragmentShaderID(x);const ut=n.getRenderTarget(),lt=O.isInstancedMesh===!0,ht=O.isBatchedMesh===!0,gt=!!x.map,vt=!!x.matcap,H=!!F,se=!!x.aoMap,Ct=!!x.lightMap,Nt=!!x.bumpMap,It=!!x.normalMap,rt=!!x.displacementMap,ot=!!x.emissiveMap,I=!!x.metalnessMap,b=!!x.roughnessMap,G=x.anisotropy>0,tt=x.clearcoat>0,at=x.dispersion>0,nt=x.iridescence>0,yt=x.sheen>0,ft=x.transmission>0,Mt=G&&!!x.anisotropyMap,Jt=tt&&!!x.clearcoatMap,pt=tt&&!!x.clearcoatNormalMap,Rt=tt&&!!x.clearcoatRoughnessMap,Xt=nt&&!!x.iridescenceMap,Yt=nt&&!!x.iridescenceThicknessMap,Lt=yt&&!!x.sheenColorMap,ie=yt&&!!x.sheenRoughnessMap,Kt=!!x.specularMap,ve=!!x.specularColorMap,W=!!x.specularIntensityMap,bt=ft&&!!x.transmissionMap,st=ft&&!!x.thicknessMap,ct=!!x.gradientMap,Et=!!x.alphaMap,At=x.alphaTest>0,re=!!x.alphaHash,Ge=!!x.extensions;let Rn=ps;x.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Rn=n.toneMapping);const oe={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:z,fragmentShader:U,defines:x.defines,customVertexShaderID:Y,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:ht,batchingColor:ht&&O._colorsTexture!==null,instancing:lt,instancingColor:lt&&O.instanceColor!==null,instancingMorph:lt&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ut===null?n.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Ri,alphaToCoverage:!!x.alphaToCoverage,map:gt,matcap:vt,envMap:H,envMapMode:H&&F.mapping,envMapCubeUVHeight:X,aoMap:se,lightMap:Ct,bumpMap:Nt,normalMap:It,displacementMap:f&&rt,emissiveMap:ot,normalMapObjectSpace:It&&x.normalMapType===Zg,normalMapTangentSpace:It&&x.normalMapType===Lp,metalnessMap:I,roughnessMap:b,anisotropy:G,anisotropyMap:Mt,clearcoat:tt,clearcoatMap:Jt,clearcoatNormalMap:pt,clearcoatRoughnessMap:Rt,dispersion:at,iridescence:nt,iridescenceMap:Xt,iridescenceThicknessMap:Yt,sheen:yt,sheenColorMap:Lt,sheenRoughnessMap:ie,specularMap:Kt,specularColorMap:ve,specularIntensityMap:W,transmission:ft,transmissionMap:bt,thicknessMap:st,gradientMap:ct,opaque:x.transparent===!1&&x.blending===gr&&x.alphaToCoverage===!1,alphaMap:Et,alphaTest:At,alphaHash:re,combine:x.combine,mapUv:gt&&g(x.map.channel),aoMapUv:se&&g(x.aoMap.channel),lightMapUv:Ct&&g(x.lightMap.channel),bumpMapUv:Nt&&g(x.bumpMap.channel),normalMapUv:It&&g(x.normalMap.channel),displacementMapUv:rt&&g(x.displacementMap.channel),emissiveMapUv:ot&&g(x.emissiveMap.channel),metalnessMapUv:I&&g(x.metalnessMap.channel),roughnessMapUv:b&&g(x.roughnessMap.channel),anisotropyMapUv:Mt&&g(x.anisotropyMap.channel),clearcoatMapUv:Jt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:pt&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Xt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ie&&g(x.sheenRoughnessMap.channel),specularMapUv:Kt&&g(x.specularMap.channel),specularColorMapUv:ve&&g(x.specularColorMap.channel),specularIntensityMapUv:W&&g(x.specularIntensityMap.channel),transmissionMapUv:bt&&g(x.transmissionMap.channel),thicknessMapUv:st&&g(x.thicknessMap.channel),alphaMapUv:Et&&g(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(It||G),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!L.attributes.uv&&(gt||Et),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Q,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Rn,decodeVideoTexture:gt&&x.map.isVideoTexture===!0&&ue.getTransfer(x.map.colorSpace)===we,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===vi,flipSided:x.side===Tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ge&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&x.extensions.multiDraw===!0||ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return oe.vertexUv1s=l.has(1),oe.vertexUv2s=l.has(2),oe.vertexUv3s=l.has(3),l.clear(),oe}function v(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)y.push(R),y.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(M(y,x),S(y,x),y.push(n.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function M(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function S(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),x.push(a.mask)}function A(x){const y=_[x.type];let R;if(y){const C=xi[y];R=R_.clone(C.uniforms)}else R=x.uniforms;return R}function w(x,y){let R;for(let C=0,O=u.length;C<O;C++){const k=u[C];if(k.cacheKey===y){R=k,++R.usedTimes;break}}return R===void 0&&(R=new BM(n,y,x,r),u.push(R)),R}function E(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function T(x){c.remove(x)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:v,getUniforms:A,acquireProgram:w,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:N}}function XM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function YM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function gd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function _d(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,d,f,p,_,g){let m=n[t];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:_,group:g},n[t]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=_,m.group=g),t++,m}function a(h,d,f,p,_,g){const m=o(h,d,f,p,_,g);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):e.push(m)}function c(h,d,f,p,_,g){const m=o(h,d,f,p,_,g);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function l(h,d){e.length>1&&e.sort(h||YM),i.length>1&&i.sort(d||gd),s.length>1&&s.sort(d||gd)}function u(){for(let h=t,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function $M(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new _d,n.set(i,[o])):s>=r.length?(o=new _d,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function jM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new zt};break;case"SpotLight":e={position:new B,direction:new B,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new B,halfWidth:new B,halfHeight:new B};break}return n[t.id]=e,e}}}function KM(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let ZM=0;function JM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function QM(n){const t=new jM,e=KM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new B);const s=new B,r=new jt,o=new jt;function a(l){let u=0,h=0,d=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,v=0,M=0,S=0,A=0,w=0,E=0;l.sort(JM);for(let N=0,x=l.length;N<x;N++){const y=l[N],R=y.color,C=y.intensity,O=y.distance,k=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)u+=R.r*C,h+=R.g*C,d+=R.b*C;else if(y.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(y.sh.coefficients[L],C);E++}else if(y.isDirectionalLight){const L=t.get(y);if(L.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const D=y.shadow,F=e.get(y);F.shadowIntensity=D.intensity,F.shadowBias=D.bias,F.shadowNormalBias=D.normalBias,F.shadowRadius=D.radius,F.shadowMapSize=D.mapSize,i.directionalShadow[f]=F,i.directionalShadowMap[f]=k,i.directionalShadowMatrix[f]=y.shadow.matrix,v++}i.directional[f]=L,f++}else if(y.isSpotLight){const L=t.get(y);L.position.setFromMatrixPosition(y.matrixWorld),L.color.copy(R).multiplyScalar(C),L.distance=O,L.coneCos=Math.cos(y.angle),L.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),L.decay=y.decay,i.spot[_]=L;const D=y.shadow;if(y.map&&(i.spotLightMap[A]=y.map,A++,D.updateMatrices(y),y.castShadow&&w++),i.spotLightMatrix[_]=D.matrix,y.castShadow){const F=e.get(y);F.shadowIntensity=D.intensity,F.shadowBias=D.bias,F.shadowNormalBias=D.normalBias,F.shadowRadius=D.radius,F.shadowMapSize=D.mapSize,i.spotShadow[_]=F,i.spotShadowMap[_]=k,S++}_++}else if(y.isRectAreaLight){const L=t.get(y);L.color.copy(R).multiplyScalar(C),L.halfWidth.set(y.width*.5,0,0),L.halfHeight.set(0,y.height*.5,0),i.rectArea[g]=L,g++}else if(y.isPointLight){const L=t.get(y);if(L.color.copy(y.color).multiplyScalar(y.intensity),L.distance=y.distance,L.decay=y.decay,y.castShadow){const D=y.shadow,F=e.get(y);F.shadowIntensity=D.intensity,F.shadowBias=D.bias,F.shadowNormalBias=D.normalBias,F.shadowRadius=D.radius,F.shadowMapSize=D.mapSize,F.shadowCameraNear=D.camera.near,F.shadowCameraFar=D.camera.far,i.pointShadow[p]=F,i.pointShadowMap[p]=k,i.pointShadowMatrix[p]=y.shadow.matrix,M++}i.point[p]=L,p++}else if(y.isHemisphereLight){const L=t.get(y);L.skyColor.copy(y.color).multiplyScalar(C),L.groundColor.copy(y.groundColor).multiplyScalar(C),i.hemi[m]=L,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const T=i.hash;(T.directionalLength!==f||T.pointLength!==p||T.spotLength!==_||T.rectAreaLength!==g||T.hemiLength!==m||T.numDirectionalShadows!==v||T.numPointShadows!==M||T.numSpotShadows!==S||T.numSpotMaps!==A||T.numLightProbes!==E)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,T.directionalLength=f,T.pointLength=p,T.spotLength=_,T.rectAreaLength=g,T.hemiLength=m,T.numDirectionalShadows=v,T.numPointShadows=M,T.numSpotShadows=S,T.numSpotMaps=A,T.numLightProbes=E,i.version=ZM++)}function c(l,u){let h=0,d=0,f=0,p=0,_=0;const g=u.matrixWorldInverse;for(let m=0,v=l.length;m<v;m++){const M=l[m];if(M.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),h++}else if(M.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),f++}else if(M.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:i}}function xd(n){const t=new QM(n),e=[],i=[];function s(u){l.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function t2(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new xd(n),t.set(s,[a])):r>=o.length?(a=new xd(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class e2 extends Lo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class n2 extends Lo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const i2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function r2(n,t,e){let i=new Co;const s=new Bt,r=new Bt,o=new fe,a=new e2({depthPacking:Kg}),c=new n2,l={},u=e.maxTextureSize,h={[di]:Tn,[Tn]:di,[vi]:vi},d=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:i2,fragmentShader:s2}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Sn;p.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mp;let m=this.type;this.render=function(w,E,T){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const N=n.getRenderTarget(),x=n.getActiveCubeFace(),y=n.getActiveMipmapLevel(),R=n.state;R.setBlending(fs),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const C=m!==zi&&this.type===zi,O=m===zi&&this.type!==zi;for(let k=0,L=w.length;k<L;k++){const D=w[k],F=D.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const X=F.getFrameExtents();if(s.multiply(X),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/X.x),s.x=r.x*X.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/X.y),s.y=r.y*X.y,F.mapSize.y=r.y)),F.map===null||C===!0||O===!0){const it=this.type!==zi?{minFilter:xn,magFilter:xn}:{};F.map!==null&&F.map.dispose(),F.map=new Xi(s.x,s.y,it),F.map.texture.name=D.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const K=F.getViewportCount();for(let it=0;it<K;it++){const dt=F.getViewport(it);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),R.viewport(o),F.updateMatrices(D,it),i=F.getFrustum(),S(E,T,F.camera,D,this.type)}F.isPointLightShadow!==!0&&this.type===zi&&v(F,T),F.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(N,x,y)};function v(w,E){const T=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Xi(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(E,null,T,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(E,null,T,f,_,null)}function M(w,E,T,N){let x=null;const y=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(y!==void 0)x=y;else if(x=T.isPointLight===!0?c:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const R=x.uuid,C=E.uuid;let O=l[R];O===void 0&&(O={},l[R]=O);let k=O[C];k===void 0&&(k=x.clone(),O[C]=k,E.addEventListener("dispose",A)),x=k}if(x.visible=E.visible,x.wireframe=E.wireframe,N===zi?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:h[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,T.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const R=n.properties.get(x);R.light=T}return x}function S(w,E,T,N,x){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===zi)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);const C=t.update(w),O=w.material;if(Array.isArray(O)){const k=C.groups;for(let L=0,D=k.length;L<D;L++){const F=k[L],X=O[F.materialIndex];if(X&&X.visible){const K=M(w,X,N,x);w.onBeforeShadow(n,w,E,T,C,K,F),n.renderBufferDirect(T,null,C,K,w,F),w.onAfterShadow(n,w,E,T,C,K,F)}}}else if(O.visible){const k=M(w,O,N,x);w.onBeforeShadow(n,w,E,T,C,k,null),n.renderBufferDirect(T,null,C,k,w,null),w.onAfterShadow(n,w,E,T,C,k,null)}}const R=w.children;for(let C=0,O=R.length;C<O;C++)S(R[C],E,T,N,x)}function A(w){w.target.removeEventListener("dispose",A);for(const T in l){const N=l[T],x=w.target.uuid;x in N&&(N[x].dispose(),delete N[x])}}}const o2={[l0]:u0,[h0]:p0,[d0]:m0,[Er]:f0,[u0]:l0,[p0]:h0,[m0]:d0,[f0]:Er};function a2(n){function t(){let W=!1;const bt=new fe;let st=null;const ct=new fe(0,0,0,0);return{setMask:function(Et){st!==Et&&!W&&(n.colorMask(Et,Et,Et,Et),st=Et)},setLocked:function(Et){W=Et},setClear:function(Et,At,re,Ge,Rn){Rn===!0&&(Et*=Ge,At*=Ge,re*=Ge),bt.set(Et,At,re,Ge),ct.equals(bt)===!1&&(n.clearColor(Et,At,re,Ge),ct.copy(bt))},reset:function(){W=!1,st=null,ct.set(-1,0,0,0)}}}function e(){let W=!1,bt=!1,st=null,ct=null,Et=null;return{setReversed:function(At){bt=At},setTest:function(At){At?Y(n.DEPTH_TEST):J(n.DEPTH_TEST)},setMask:function(At){st!==At&&!W&&(n.depthMask(At),st=At)},setFunc:function(At){if(bt&&(At=o2[At]),ct!==At){switch(At){case l0:n.depthFunc(n.NEVER);break;case u0:n.depthFunc(n.ALWAYS);break;case h0:n.depthFunc(n.LESS);break;case Er:n.depthFunc(n.LEQUAL);break;case d0:n.depthFunc(n.EQUAL);break;case f0:n.depthFunc(n.GEQUAL);break;case p0:n.depthFunc(n.GREATER);break;case m0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ct=At}},setLocked:function(At){W=At},setClear:function(At){Et!==At&&(n.clearDepth(At),Et=At)},reset:function(){W=!1,st=null,ct=null,Et=null}}}function i(){let W=!1,bt=null,st=null,ct=null,Et=null,At=null,re=null,Ge=null,Rn=null;return{setTest:function(oe){W||(oe?Y(n.STENCIL_TEST):J(n.STENCIL_TEST))},setMask:function(oe){bt!==oe&&!W&&(n.stencilMask(oe),bt=oe)},setFunc:function(oe,Ln,Ii){(st!==oe||ct!==Ln||Et!==Ii)&&(n.stencilFunc(oe,Ln,Ii),st=oe,ct=Ln,Et=Ii)},setOp:function(oe,Ln,Ii){(At!==oe||re!==Ln||Ge!==Ii)&&(n.stencilOp(oe,Ln,Ii),At=oe,re=Ln,Ge=Ii)},setLocked:function(oe){W=oe},setClear:function(oe){Rn!==oe&&(n.clearStencil(oe),Rn=oe)},reset:function(){W=!1,bt=null,st=null,ct=null,Et=null,At=null,re=null,Ge=null,Rn=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,p=!1,_=null,g=null,m=null,v=null,M=null,S=null,A=null,w=new zt(0,0,0),E=0,T=!1,N=null,x=null,y=null,R=null,C=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,L=0;const D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(D)[1]),k=L>=1):D.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),k=L>=2);let F=null,X={};const K=n.getParameter(n.SCISSOR_BOX),it=n.getParameter(n.VIEWPORT),dt=new fe().fromArray(K),Q=new fe().fromArray(it);function z(W,bt,st,ct){const Et=new Uint8Array(4),At=n.createTexture();n.bindTexture(W,At),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let re=0;re<st;re++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(bt,0,n.RGBA,1,1,ct,0,n.RGBA,n.UNSIGNED_BYTE,Et):n.texImage2D(bt+re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Et);return At}const U={};U[n.TEXTURE_2D]=z(n.TEXTURE_2D,n.TEXTURE_2D,1),U[n.TEXTURE_CUBE_MAP]=z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[n.TEXTURE_2D_ARRAY]=z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),U[n.TEXTURE_3D]=z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Y(n.DEPTH_TEST),r.setFunc(Er),Ct(!1),Nt(Th),Y(n.CULL_FACE),H(fs);function Y(W){l[W]!==!0&&(n.enable(W),l[W]=!0)}function J(W){l[W]!==!1&&(n.disable(W),l[W]=!1)}function ut(W,bt){return u[W]!==bt?(n.bindFramebuffer(W,bt),u[W]=bt,W===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=bt),W===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=bt),!0):!1}function lt(W,bt){let st=d,ct=!1;if(W){st=h.get(bt),st===void 0&&(st=[],h.set(bt,st));const Et=W.textures;if(st.length!==Et.length||st[0]!==n.COLOR_ATTACHMENT0){for(let At=0,re=Et.length;At<re;At++)st[At]=n.COLOR_ATTACHMENT0+At;st.length=Et.length,ct=!0}}else st[0]!==n.BACK&&(st[0]=n.BACK,ct=!0);ct&&n.drawBuffers(st)}function ht(W){return f!==W?(n.useProgram(W),f=W,!0):!1}const gt={[Ds]:n.FUNC_ADD,[Eg]:n.FUNC_SUBTRACT,[wg]:n.FUNC_REVERSE_SUBTRACT};gt[bg]=n.MIN,gt[Ag]=n.MAX;const vt={[Tg]:n.ZERO,[Rg]:n.ONE,[Lg]:n.SRC_COLOR,[a0]:n.SRC_ALPHA,[Ng]:n.SRC_ALPHA_SATURATE,[Pg]:n.DST_COLOR,[Ig]:n.DST_ALPHA,[Cg]:n.ONE_MINUS_SRC_COLOR,[c0]:n.ONE_MINUS_SRC_ALPHA,[Og]:n.ONE_MINUS_DST_COLOR,[Dg]:n.ONE_MINUS_DST_ALPHA,[Ug]:n.CONSTANT_COLOR,[Fg]:n.ONE_MINUS_CONSTANT_COLOR,[kg]:n.CONSTANT_ALPHA,[zg]:n.ONE_MINUS_CONSTANT_ALPHA};function H(W,bt,st,ct,Et,At,re,Ge,Rn,oe){if(W===fs){p===!0&&(J(n.BLEND),p=!1);return}if(p===!1&&(Y(n.BLEND),p=!0),W!==Sg){if(W!==_||oe!==T){if((g!==Ds||M!==Ds)&&(n.blendEquation(n.FUNC_ADD),g=Ds,M=Ds),oe)switch(W){case gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rh:n.blendFunc(n.ONE,n.ONE);break;case Lh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case o0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Lh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case o0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}m=null,v=null,S=null,A=null,w.set(0,0,0),E=0,_=W,T=oe}return}Et=Et||bt,At=At||st,re=re||ct,(bt!==g||Et!==M)&&(n.blendEquationSeparate(gt[bt],gt[Et]),g=bt,M=Et),(st!==m||ct!==v||At!==S||re!==A)&&(n.blendFuncSeparate(vt[st],vt[ct],vt[At],vt[re]),m=st,v=ct,S=At,A=re),(Ge.equals(w)===!1||Rn!==E)&&(n.blendColor(Ge.r,Ge.g,Ge.b,Rn),w.copy(Ge),E=Rn),_=W,T=!1}function se(W,bt){W.side===vi?J(n.CULL_FACE):Y(n.CULL_FACE);let st=W.side===Tn;bt&&(st=!st),Ct(st),W.blending===gr&&W.transparent===!1?H(fs):H(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),r.setFunc(W.depthFunc),r.setTest(W.depthTest),r.setMask(W.depthWrite),s.setMask(W.colorWrite);const ct=W.stencilWrite;o.setTest(ct),ct&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),rt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Y(n.SAMPLE_ALPHA_TO_COVERAGE):J(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(W){N!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),N=W)}function Nt(W){W!==Mg?(Y(n.CULL_FACE),W!==x&&(W===Th?n.cullFace(n.BACK):W===yg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):J(n.CULL_FACE),x=W}function It(W){W!==y&&(k&&n.lineWidth(W),y=W)}function rt(W,bt,st){W?(Y(n.POLYGON_OFFSET_FILL),(R!==bt||C!==st)&&(n.polygonOffset(bt,st),R=bt,C=st)):J(n.POLYGON_OFFSET_FILL)}function ot(W){W?Y(n.SCISSOR_TEST):J(n.SCISSOR_TEST)}function I(W){W===void 0&&(W=n.TEXTURE0+O-1),F!==W&&(n.activeTexture(W),F=W)}function b(W,bt,st){st===void 0&&(F===null?st=n.TEXTURE0+O-1:st=F);let ct=X[st];ct===void 0&&(ct={type:void 0,texture:void 0},X[st]=ct),(ct.type!==W||ct.texture!==bt)&&(F!==st&&(n.activeTexture(st),F=st),n.bindTexture(W,bt||U[W]),ct.type=W,ct.texture=bt)}function G(){const W=X[F];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function tt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function at(){try{n.compressedTexImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function nt(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function yt(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Jt(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pt(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Rt(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xt(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Yt(W){dt.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),dt.copy(W))}function Lt(W){Q.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),Q.copy(W))}function ie(W,bt){let st=c.get(bt);st===void 0&&(st=new WeakMap,c.set(bt,st));let ct=st.get(W);ct===void 0&&(ct=n.getUniformBlockIndex(bt,W.name),st.set(W,ct))}function Kt(W,bt){const ct=c.get(bt).get(W);a.get(bt)!==ct&&(n.uniformBlockBinding(bt,ct,W.__bindingPointIndex),a.set(bt,ct))}function ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},F=null,X={},u={},h=new WeakMap,d=[],f=null,p=!1,_=null,g=null,m=null,v=null,M=null,S=null,A=null,w=new zt(0,0,0),E=0,T=!1,N=null,x=null,y=null,R=null,C=null,dt.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Y,disable:J,bindFramebuffer:ut,drawBuffers:lt,useProgram:ht,setBlending:H,setMaterial:se,setFlipSided:Ct,setCullFace:Nt,setLineWidth:It,setPolygonOffset:rt,setScissorTest:ot,activeTexture:I,bindTexture:b,unbindTexture:G,compressedTexImage2D:tt,compressedTexImage3D:at,texImage2D:Rt,texImage3D:Xt,updateUBOMapping:ie,uniformBlockBinding:Kt,texStorage2D:Jt,texStorage3D:pt,texSubImage2D:nt,texSubImage3D:yt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Mt,scissor:Yt,viewport:Lt,reset:ve}}function vd(n,t,e,i){const s=c2(i);switch(e){case Ep:return n*t;case bp:return n*t;case Ap:return n*t*2;case wu:return n*t/s.components*s.byteLength;case bu:return n*t/s.components*s.byteLength;case Tp:return n*t*2/s.components*s.byteLength;case Au:return n*t*2/s.components*s.byteLength;case wp:return n*t*3/s.components*s.byteLength;case vn:return n*t*4/s.components*s.byteLength;case Tu:return n*t*4/s.components*s.byteLength;case La:case Ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ia:case Da:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case M0:case S0:return Math.max(n,16)*Math.max(t,8)/4;case v0:case y0:return Math.max(n,8)*Math.max(t,8)/2;case E0:case w0:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case b0:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case A0:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case T0:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case R0:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case L0:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case C0:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case I0:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case D0:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case P0:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case O0:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case N0:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case U0:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case F0:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case k0:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case z0:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Pa:case H0:case B0:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Rp:case G0:return Math.ceil(n/4)*Math.ceil(t/4)*8;case W0:case V0:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function c2(n){switch(n){case qi:case Mp:return{byteLength:1,components:1};case vo:case yp:case Pr:return{byteLength:2,components:1};case Su:case Eu:return{byteLength:2,components:4};case zs:case yu:case yi:return{byteLength:4,components:1};case Sp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function l2(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Bt,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,b){return f?new OffscreenCanvas(I,b):ja("canvas")}function _(I,b,G){let tt=1;const at=ot(I);if((at.width>G||at.height>G)&&(tt=G/Math.max(at.width,at.height)),tt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const nt=Math.floor(tt*at.width),yt=Math.floor(tt*at.height);h===void 0&&(h=p(nt,yt));const ft=b?p(nt,yt):h;return ft.width=nt,ft.height=yt,ft.getContext("2d").drawImage(I,0,0,nt,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+nt+"x"+yt+")."),ft}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),I;return I}function g(I){return I.generateMipmaps&&I.minFilter!==xn&&I.minFilter!==ze}function m(I){n.generateMipmap(I)}function v(I,b,G,tt,at=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let nt=b;if(b===n.RED&&(G===n.FLOAT&&(nt=n.R32F),G===n.HALF_FLOAT&&(nt=n.R16F),G===n.UNSIGNED_BYTE&&(nt=n.R8)),b===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(nt=n.R8UI),G===n.UNSIGNED_SHORT&&(nt=n.R16UI),G===n.UNSIGNED_INT&&(nt=n.R32UI),G===n.BYTE&&(nt=n.R8I),G===n.SHORT&&(nt=n.R16I),G===n.INT&&(nt=n.R32I)),b===n.RG&&(G===n.FLOAT&&(nt=n.RG32F),G===n.HALF_FLOAT&&(nt=n.RG16F),G===n.UNSIGNED_BYTE&&(nt=n.RG8)),b===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(nt=n.RG8UI),G===n.UNSIGNED_SHORT&&(nt=n.RG16UI),G===n.UNSIGNED_INT&&(nt=n.RG32UI),G===n.BYTE&&(nt=n.RG8I),G===n.SHORT&&(nt=n.RG16I),G===n.INT&&(nt=n.RG32I)),b===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(nt=n.RGB8UI),G===n.UNSIGNED_SHORT&&(nt=n.RGB16UI),G===n.UNSIGNED_INT&&(nt=n.RGB32UI),G===n.BYTE&&(nt=n.RGB8I),G===n.SHORT&&(nt=n.RGB16I),G===n.INT&&(nt=n.RGB32I)),b===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(nt=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(nt=n.RGBA16UI),G===n.UNSIGNED_INT&&(nt=n.RGBA32UI),G===n.BYTE&&(nt=n.RGBA8I),G===n.SHORT&&(nt=n.RGBA16I),G===n.INT&&(nt=n.RGBA32I)),b===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(nt=n.RGB9_E5),b===n.RGBA){const yt=at?qa:ue.getTransfer(tt);G===n.FLOAT&&(nt=n.RGBA32F),G===n.HALF_FLOAT&&(nt=n.RGBA16F),G===n.UNSIGNED_BYTE&&(nt=yt===we?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function M(I,b){let G;return I?b===null||b===zs||b===Ar?G=n.DEPTH24_STENCIL8:b===yi?G=n.DEPTH32F_STENCIL8:b===vo&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===zs||b===Ar?G=n.DEPTH_COMPONENT24:b===yi?G=n.DEPTH_COMPONENT32F:b===vo&&(G=n.DEPTH_COMPONENT16),G}function S(I,b){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==xn&&I.minFilter!==ze?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function A(I){const b=I.target;b.removeEventListener("dispose",A),E(b),b.isVideoTexture&&u.delete(b)}function w(I){const b=I.target;b.removeEventListener("dispose",w),N(b)}function E(I){const b=i.get(I);if(b.__webglInit===void 0)return;const G=I.source,tt=d.get(G);if(tt){const at=tt[b.__cacheKey];at.usedTimes--,at.usedTimes===0&&T(I),Object.keys(tt).length===0&&d.delete(G)}i.remove(I)}function T(I){const b=i.get(I);n.deleteTexture(b.__webglTexture);const G=I.source,tt=d.get(G);delete tt[b.__cacheKey],o.memory.textures--}function N(I){const b=i.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(b.__webglFramebuffer[tt]))for(let at=0;at<b.__webglFramebuffer[tt].length;at++)n.deleteFramebuffer(b.__webglFramebuffer[tt][at]);else n.deleteFramebuffer(b.__webglFramebuffer[tt]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[tt])}else{if(Array.isArray(b.__webglFramebuffer))for(let tt=0;tt<b.__webglFramebuffer.length;tt++)n.deleteFramebuffer(b.__webglFramebuffer[tt]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let tt=0;tt<b.__webglColorRenderbuffer.length;tt++)b.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[tt]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=I.textures;for(let tt=0,at=G.length;tt<at;tt++){const nt=i.get(G[tt]);nt.__webglTexture&&(n.deleteTexture(nt.__webglTexture),o.memory.textures--),i.remove(G[tt])}i.remove(I)}let x=0;function y(){x=0}function R(){const I=x;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),x+=1,I}function C(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function O(I,b){const G=i.get(I);if(I.isVideoTexture&&It(I),I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){const tt=I.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(G,I,b);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+b)}function k(I,b){const G=i.get(I);if(I.version>0&&G.__version!==I.version){Q(G,I,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+b)}function L(I,b){const G=i.get(I);if(I.version>0&&G.__version!==I.version){Q(G,I,b);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+b)}function D(I,b){const G=i.get(I);if(I.version>0&&G.__version!==I.version){z(G,I,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+b)}const F={[ks]:n.REPEAT,[ls]:n.CLAMP_TO_EDGE,[x0]:n.MIRRORED_REPEAT},X={[xn]:n.NEAREST,[$g]:n.NEAREST_MIPMAP_NEAREST,[Go]:n.NEAREST_MIPMAP_LINEAR,[ze]:n.LINEAR,[Pc]:n.LINEAR_MIPMAP_NEAREST,[ci]:n.LINEAR_MIPMAP_LINEAR},K={[Jg]:n.NEVER,[s_]:n.ALWAYS,[Qg]:n.LESS,[Cp]:n.LEQUAL,[t_]:n.EQUAL,[i_]:n.GEQUAL,[e_]:n.GREATER,[n_]:n.NOTEQUAL};function it(I,b){if(b.type===yi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===ze||b.magFilter===Pc||b.magFilter===Go||b.magFilter===ci||b.minFilter===ze||b.minFilter===Pc||b.minFilter===Go||b.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,F[b.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,F[b.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,F[b.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,X[b.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,X[b.minFilter]),b.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,K[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===xn||b.minFilter!==Go&&b.minFilter!==ci||b.type===yi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function dt(I,b){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",A));const tt=b.source;let at=d.get(tt);at===void 0&&(at={},d.set(tt,at));const nt=C(b);if(nt!==I.__cacheKey){at[nt]===void 0&&(at[nt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),at[nt].usedTimes++;const yt=at[I.__cacheKey];yt!==void 0&&(at[I.__cacheKey].usedTimes--,yt.usedTimes===0&&T(b)),I.__cacheKey=nt,I.__webglTexture=at[nt].texture}return G}function Q(I,b,G){let tt=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(tt=n.TEXTURE_3D);const at=dt(I,b),nt=b.source;e.bindTexture(tt,I.__webglTexture,n.TEXTURE0+G);const yt=i.get(nt);if(nt.version!==yt.__version||at===!0){e.activeTexture(n.TEXTURE0+G);const ft=ue.getPrimaries(ue.workingColorSpace),Mt=b.colorSpace===as?null:ue.getPrimaries(b.colorSpace),Jt=b.colorSpace===as||ft===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let pt=_(b.image,!1,s.maxTextureSize);pt=rt(b,pt);const Rt=r.convert(b.format,b.colorSpace),Xt=r.convert(b.type);let Yt=v(b.internalFormat,Rt,Xt,b.colorSpace,b.isVideoTexture);it(tt,b);let Lt;const ie=b.mipmaps,Kt=b.isVideoTexture!==!0,ve=yt.__version===void 0||at===!0,W=nt.dataReady,bt=S(b,pt);if(b.isDepthTexture)Yt=M(b.format===Tr,b.type),ve&&(Kt?e.texStorage2D(n.TEXTURE_2D,1,Yt,pt.width,pt.height):e.texImage2D(n.TEXTURE_2D,0,Yt,pt.width,pt.height,0,Rt,Xt,null));else if(b.isDataTexture)if(ie.length>0){Kt&&ve&&e.texStorage2D(n.TEXTURE_2D,bt,Yt,ie[0].width,ie[0].height);for(let st=0,ct=ie.length;st<ct;st++)Lt=ie[st],Kt?W&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Lt.width,Lt.height,Rt,Xt,Lt.data):e.texImage2D(n.TEXTURE_2D,st,Yt,Lt.width,Lt.height,0,Rt,Xt,Lt.data);b.generateMipmaps=!1}else Kt?(ve&&e.texStorage2D(n.TEXTURE_2D,bt,Yt,pt.width,pt.height),W&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,pt.width,pt.height,Rt,Xt,pt.data)):e.texImage2D(n.TEXTURE_2D,0,Yt,pt.width,pt.height,0,Rt,Xt,pt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Kt&&ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,Yt,ie[0].width,ie[0].height,pt.depth);for(let st=0,ct=ie.length;st<ct;st++)if(Lt=ie[st],b.format!==vn)if(Rt!==null)if(Kt){if(W)if(b.layerUpdates.size>0){const Et=vd(Lt.width,Lt.height,b.format,b.type);for(const At of b.layerUpdates){const re=Lt.data.subarray(At*Et/Lt.data.BYTES_PER_ELEMENT,(At+1)*Et/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,At,Lt.width,Lt.height,1,Rt,re,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Lt.width,Lt.height,pt.depth,Rt,Lt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,Yt,Lt.width,Lt.height,pt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?W&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Lt.width,Lt.height,pt.depth,Rt,Xt,Lt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,Yt,Lt.width,Lt.height,pt.depth,0,Rt,Xt,Lt.data)}else{Kt&&ve&&e.texStorage2D(n.TEXTURE_2D,bt,Yt,ie[0].width,ie[0].height);for(let st=0,ct=ie.length;st<ct;st++)Lt=ie[st],b.format!==vn?Rt!==null?Kt?W&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,Lt.width,Lt.height,Rt,Lt.data):e.compressedTexImage2D(n.TEXTURE_2D,st,Yt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?W&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Lt.width,Lt.height,Rt,Xt,Lt.data):e.texImage2D(n.TEXTURE_2D,st,Yt,Lt.width,Lt.height,0,Rt,Xt,Lt.data)}else if(b.isDataArrayTexture)if(Kt){if(ve&&e.texStorage3D(n.TEXTURE_2D_ARRAY,bt,Yt,pt.width,pt.height,pt.depth),W)if(b.layerUpdates.size>0){const st=vd(pt.width,pt.height,b.format,b.type);for(const ct of b.layerUpdates){const Et=pt.data.subarray(ct*st/pt.data.BYTES_PER_ELEMENT,(ct+1)*st/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ct,pt.width,pt.height,1,Rt,Xt,Et)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Rt,Xt,pt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Yt,pt.width,pt.height,pt.depth,0,Rt,Xt,pt.data);else if(b.isData3DTexture)Kt?(ve&&e.texStorage3D(n.TEXTURE_3D,bt,Yt,pt.width,pt.height,pt.depth),W&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Rt,Xt,pt.data)):e.texImage3D(n.TEXTURE_3D,0,Yt,pt.width,pt.height,pt.depth,0,Rt,Xt,pt.data);else if(b.isFramebufferTexture){if(ve)if(Kt)e.texStorage2D(n.TEXTURE_2D,bt,Yt,pt.width,pt.height);else{let st=pt.width,ct=pt.height;for(let Et=0;Et<bt;Et++)e.texImage2D(n.TEXTURE_2D,Et,Yt,st,ct,0,Rt,Xt,null),st>>=1,ct>>=1}}else if(ie.length>0){if(Kt&&ve){const st=ot(ie[0]);e.texStorage2D(n.TEXTURE_2D,bt,Yt,st.width,st.height)}for(let st=0,ct=ie.length;st<ct;st++)Lt=ie[st],Kt?W&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Rt,Xt,Lt):e.texImage2D(n.TEXTURE_2D,st,Yt,Rt,Xt,Lt);b.generateMipmaps=!1}else if(Kt){if(ve){const st=ot(pt);e.texStorage2D(n.TEXTURE_2D,bt,Yt,st.width,st.height)}W&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Rt,Xt,pt)}else e.texImage2D(n.TEXTURE_2D,0,Yt,Rt,Xt,pt);g(b)&&m(tt),yt.__version=nt.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function z(I,b,G){if(b.image.length!==6)return;const tt=dt(I,b),at=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+G);const nt=i.get(at);if(at.version!==nt.__version||tt===!0){e.activeTexture(n.TEXTURE0+G);const yt=ue.getPrimaries(ue.workingColorSpace),ft=b.colorSpace===as?null:ue.getPrimaries(b.colorSpace),Mt=b.colorSpace===as||yt===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Jt=b.isCompressedTexture||b.image[0].isCompressedTexture,pt=b.image[0]&&b.image[0].isDataTexture,Rt=[];for(let ct=0;ct<6;ct++)!Jt&&!pt?Rt[ct]=_(b.image[ct],!0,s.maxCubemapSize):Rt[ct]=pt?b.image[ct].image:b.image[ct],Rt[ct]=rt(b,Rt[ct]);const Xt=Rt[0],Yt=r.convert(b.format,b.colorSpace),Lt=r.convert(b.type),ie=v(b.internalFormat,Yt,Lt,b.colorSpace),Kt=b.isVideoTexture!==!0,ve=nt.__version===void 0||tt===!0,W=at.dataReady;let bt=S(b,Xt);it(n.TEXTURE_CUBE_MAP,b);let st;if(Jt){Kt&&ve&&e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,ie,Xt.width,Xt.height);for(let ct=0;ct<6;ct++){st=Rt[ct].mipmaps;for(let Et=0;Et<st.length;Et++){const At=st[Et];b.format!==vn?Yt!==null?Kt?W&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et,0,0,At.width,At.height,Yt,At.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et,ie,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et,0,0,At.width,At.height,Yt,Lt,At.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et,ie,At.width,At.height,0,Yt,Lt,At.data)}}}else{if(st=b.mipmaps,Kt&&ve){st.length>0&&bt++;const ct=ot(Rt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,bt,ie,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(pt){Kt?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Rt[ct].width,Rt[ct].height,Yt,Lt,Rt[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ie,Rt[ct].width,Rt[ct].height,0,Yt,Lt,Rt[ct].data);for(let Et=0;Et<st.length;Et++){const re=st[Et].image[ct].image;Kt?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et+1,0,0,re.width,re.height,Yt,Lt,re.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et+1,ie,re.width,re.height,0,Yt,Lt,re.data)}}else{Kt?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Yt,Lt,Rt[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ie,Yt,Lt,Rt[ct]);for(let Et=0;Et<st.length;Et++){const At=st[Et];Kt?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et+1,0,0,Yt,Lt,At.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Et+1,ie,Yt,Lt,At.image[ct])}}}g(b)&&m(n.TEXTURE_CUBE_MAP),nt.__version=at.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function U(I,b,G,tt,at,nt){const yt=r.convert(G.format,G.colorSpace),ft=r.convert(G.type),Mt=v(G.internalFormat,yt,ft,G.colorSpace);if(!i.get(b).__hasExternalTextures){const pt=Math.max(1,b.width>>nt),Rt=Math.max(1,b.height>>nt);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,nt,Mt,pt,Rt,b.depth,0,yt,ft,null):e.texImage2D(at,nt,Mt,pt,Rt,0,yt,ft,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),Nt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,at,i.get(G).__webglTexture,0,Ct(b)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,at,i.get(G).__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Y(I,b,G){if(n.bindRenderbuffer(n.RENDERBUFFER,I),b.depthBuffer){const tt=b.depthTexture,at=tt&&tt.isDepthTexture?tt.type:null,nt=M(b.stencilBuffer,at),yt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=Ct(b);Nt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft,nt,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,nt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,nt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,yt,n.RENDERBUFFER,I)}else{const tt=b.textures;for(let at=0;at<tt.length;at++){const nt=tt[at],yt=r.convert(nt.format,nt.colorSpace),ft=r.convert(nt.type),Mt=v(nt.internalFormat,yt,ft,nt.colorSpace),Jt=Ct(b);G&&Nt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Jt,Mt,b.width,b.height):Nt(b)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Jt,Mt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function J(I,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);const tt=i.get(b.depthTexture).__webglTexture,at=Ct(b);if(b.depthTexture.format===_r)Nt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0);else if(b.depthTexture.format===Tr)Nt(b)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0,at):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function ut(I){const b=i.get(I),G=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const tt=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),tt){const at=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,tt.removeEventListener("dispose",at)};tt.addEventListener("dispose",at),b.__depthDisposeCallback=at}b.__boundDepthTexture=tt}if(I.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");J(b.__webglFramebuffer,I)}else if(G){b.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[tt]),b.__webglDepthbuffer[tt]===void 0)b.__webglDepthbuffer[tt]=n.createRenderbuffer(),Y(b.__webglDepthbuffer[tt],I,!1);else{const at=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=b.__webglDepthbuffer[tt];n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Y(b.__webglDepthbuffer,I,!1);else{const tt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,at)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(I,b,G){const tt=i.get(I);b!==void 0&&U(tt.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&ut(I)}function ht(I){const b=I.texture,G=i.get(I),tt=i.get(b);I.addEventListener("dispose",w);const at=I.textures,nt=I.isWebGLCubeRenderTarget===!0,yt=at.length>1;if(yt||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=b.version,o.memory.textures++),nt){G.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[ft]=[];for(let Mt=0;Mt<b.mipmaps.length;Mt++)G.__webglFramebuffer[ft][Mt]=n.createFramebuffer()}else G.__webglFramebuffer[ft]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let ft=0;ft<b.mipmaps.length;ft++)G.__webglFramebuffer[ft]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(yt)for(let ft=0,Mt=at.length;ft<Mt;ft++){const Jt=i.get(at[ft]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&Nt(I)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ft=0;ft<at.length;ft++){const Mt=at[ft];G.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ft]);const Jt=r.convert(Mt.format,Mt.colorSpace),pt=r.convert(Mt.type),Rt=v(Mt.internalFormat,Jt,pt,Mt.colorSpace,I.isXRRenderTarget===!0),Xt=Ct(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt,Rt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,G.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Y(G.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(nt){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),it(n.TEXTURE_CUBE_MAP,b);for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)U(G.__webglFramebuffer[ft][Mt],I,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Mt);else U(G.__webglFramebuffer[ft],I,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(b)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ft=0,Mt=at.length;ft<Mt;ft++){const Jt=at[ft],pt=i.get(Jt);e.bindTexture(n.TEXTURE_2D,pt.__webglTexture),it(n.TEXTURE_2D,Jt),U(G.__webglFramebuffer,I,Jt,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,0),g(Jt)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let ft=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ft=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,tt.__webglTexture),it(ft,b),b.mipmaps&&b.mipmaps.length>0)for(let Mt=0;Mt<b.mipmaps.length;Mt++)U(G.__webglFramebuffer[Mt],I,b,n.COLOR_ATTACHMENT0,ft,Mt);else U(G.__webglFramebuffer,I,b,n.COLOR_ATTACHMENT0,ft,0);g(b)&&m(ft),e.unbindTexture()}I.depthBuffer&&ut(I)}function gt(I){const b=I.textures;for(let G=0,tt=b.length;G<tt;G++){const at=b[G];if(g(at)){const nt=I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,yt=i.get(at).__webglTexture;e.bindTexture(nt,yt),m(nt),e.unbindTexture()}}}const vt=[],H=[];function se(I){if(I.samples>0){if(Nt(I)===!1){const b=I.textures,G=I.width,tt=I.height;let at=n.COLOR_BUFFER_BIT;const nt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=i.get(I),ft=b.length>1;if(ft)for(let Mt=0;Mt<b.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Mt=0;Mt<b.length;Mt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),ft){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,yt.__webglColorRenderbuffer[Mt]);const Jt=i.get(b[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Jt,0)}n.blitFramebuffer(0,0,G,tt,0,0,G,tt,at,n.NEAREST),c===!0&&(vt.length=0,H.length=0,vt.push(n.COLOR_ATTACHMENT0+Mt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(vt.push(nt),H.push(nt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let Mt=0;Mt<b.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,yt.__webglColorRenderbuffer[Mt]);const Jt=i.get(b[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,yt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,Jt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const b=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Ct(I){return Math.min(s.maxSamples,I.samples)}function Nt(I){const b=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function It(I){const b=o.render.frame;u.get(I)!==b&&(u.set(I,b),I.update())}function rt(I,b){const G=I.colorSpace,tt=I.format,at=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==Ri&&G!==as&&(ue.getTransfer(G)===we?(tt!==vn||at!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function ot(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=R,this.resetTextureUnits=y,this.setTexture2D=O,this.setTexture2DArray=k,this.setTexture3D=L,this.setTextureCube=D,this.rebindTextures=lt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=U,this.useMultisampledRTT=Nt}function u2(n,t){function e(i,s=as){let r;const o=ue.getTransfer(s);if(i===qi)return n.UNSIGNED_BYTE;if(i===Su)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Eu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Sp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mp)return n.BYTE;if(i===yp)return n.SHORT;if(i===vo)return n.UNSIGNED_SHORT;if(i===yu)return n.INT;if(i===zs)return n.UNSIGNED_INT;if(i===yi)return n.FLOAT;if(i===Pr)return n.HALF_FLOAT;if(i===Ep)return n.ALPHA;if(i===wp)return n.RGB;if(i===vn)return n.RGBA;if(i===bp)return n.LUMINANCE;if(i===Ap)return n.LUMINANCE_ALPHA;if(i===_r)return n.DEPTH_COMPONENT;if(i===Tr)return n.DEPTH_STENCIL;if(i===wu)return n.RED;if(i===bu)return n.RED_INTEGER;if(i===Tp)return n.RG;if(i===Au)return n.RG_INTEGER;if(i===Tu)return n.RGBA_INTEGER;if(i===La||i===Ca||i===Ia||i===Da)if(o===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===La)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===La)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===v0||i===M0||i===y0||i===S0)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===v0)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===M0)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===y0)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===S0)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===E0||i===w0||i===b0)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===E0||i===w0)return o===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===b0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===A0||i===T0||i===R0||i===L0||i===C0||i===I0||i===D0||i===P0||i===O0||i===N0||i===U0||i===F0||i===k0||i===z0)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===A0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===T0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===R0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===L0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===C0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===I0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===D0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===P0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===O0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===N0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===U0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===F0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===k0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===z0)return o===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pa||i===H0||i===B0)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Pa)return o===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===H0)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===B0)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rp||i===G0||i===W0||i===V0)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===G0)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===W0)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===V0)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class h2 extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class xe extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d2={type:"move"};class ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(d2)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new xe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const f2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class m2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Mn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new wi({vertexShader:f2,fragmentShader:p2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pt(new mi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g2 extends Or{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,p=null;const _=new m2,g=e.getContextAttributes();let m=null,v=null;const M=[],S=[],A=new Bt;let w=null;const E=new cn;E.layers.enable(1),E.viewport=new fe;const T=new cn;T.layers.enable(2),T.viewport=new fe;const N=[E,T],x=new h2;x.layers.enable(1),x.layers.enable(2);let y=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let U=M[z];return U===void 0&&(U=new ll,M[z]=U),U.getTargetRaySpace()},this.getControllerGrip=function(z){let U=M[z];return U===void 0&&(U=new ll,M[z]=U),U.getGripSpace()},this.getHand=function(z){let U=M[z];return U===void 0&&(U=new ll,M[z]=U),U.getHandSpace()};function C(z){const U=S.indexOf(z.inputSource);if(U===-1)return;const Y=M[U];Y!==void 0&&(Y.update(z.inputSource,z.frame,l||o),Y.dispatchEvent({type:z.type,data:z.inputSource}))}function O(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",k);for(let z=0;z<M.length;z++){const U=S[z];U!==null&&(S[z]=null,M[z].disconnect(U))}y=null,R=null,_.reset(),t.setRenderTarget(m),f=null,d=null,h=null,s=null,v=null,Q.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",O),s.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0){const U={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,U),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Xi(f.framebufferWidth,f.framebufferHeight,{format:vn,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let U=null,Y=null,J=null;g.depth&&(J=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,U=g.stencil?Tr:_r,Y=g.stencil?Ar:zs);const ut={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(ut),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Xi(d.textureWidth,d.textureHeight,{format:vn,type:qi,depthTexture:new Gp(d.textureWidth,d.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Q.setContext(s),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(z){for(let U=0;U<z.removed.length;U++){const Y=z.removed[U],J=S.indexOf(Y);J>=0&&(S[J]=null,M[J].disconnect(Y))}for(let U=0;U<z.added.length;U++){const Y=z.added[U];let J=S.indexOf(Y);if(J===-1){for(let lt=0;lt<M.length;lt++)if(lt>=S.length){S.push(Y),J=lt;break}else if(S[lt]===null){S[lt]=Y,J=lt;break}if(J===-1)break}const ut=M[J];ut&&ut.connect(Y)}}const L=new B,D=new B;function F(z,U,Y){L.setFromMatrixPosition(U.matrixWorld),D.setFromMatrixPosition(Y.matrixWorld);const J=L.distanceTo(D),ut=U.projectionMatrix.elements,lt=Y.projectionMatrix.elements,ht=ut[14]/(ut[10]-1),gt=ut[14]/(ut[10]+1),vt=(ut[9]+1)/ut[5],H=(ut[9]-1)/ut[5],se=(ut[8]-1)/ut[0],Ct=(lt[8]+1)/lt[0],Nt=ht*se,It=ht*Ct,rt=J/(-se+Ct),ot=rt*-se;if(U.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ot),z.translateZ(rt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),ut[10]===-1)z.projectionMatrix.copy(U.projectionMatrix),z.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const I=ht+rt,b=gt+rt,G=Nt-ot,tt=It+(J-ot),at=vt*gt/b*I,nt=H*gt/b*I;z.projectionMatrix.makePerspective(G,tt,at,nt,I,b),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function X(z,U){U===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(U.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let U=z.near,Y=z.far;_.texture!==null&&(_.depthNear>0&&(U=_.depthNear),_.depthFar>0&&(Y=_.depthFar)),x.near=T.near=E.near=U,x.far=T.far=E.far=Y,(y!==x.near||R!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),y=x.near,R=x.far);const J=z.parent,ut=x.cameras;X(x,J);for(let lt=0;lt<ut.length;lt++)X(ut[lt],J);ut.length===2?F(x,E,T):x.projectionMatrix.copy(E.projectionMatrix),K(z,x,J)};function K(z,U,Y){Y===null?z.matrix.copy(U.matrixWorld):(z.matrix.copy(Y.matrixWorld),z.matrix.invert(),z.matrix.multiply(U.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(U.projectionMatrix),z.projectionMatrixInverse.copy(U.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=q0*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(z){c=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let it=null;function dt(z,U){if(u=U.getViewerPose(l||o),p=U,u!==null){const Y=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let J=!1;Y.length!==x.cameras.length&&(x.cameras.length=0,J=!0);for(let lt=0;lt<Y.length;lt++){const ht=Y[lt];let gt=null;if(f!==null)gt=f.getViewport(ht);else{const H=h.getViewSubImage(d,ht);gt=H.viewport,lt===0&&(t.setRenderTargetTextures(v,H.colorTexture,d.ignoreDepthValues?void 0:H.depthStencilTexture),t.setRenderTarget(v))}let vt=N[lt];vt===void 0&&(vt=new cn,vt.layers.enable(lt),vt.viewport=new fe,N[lt]=vt),vt.matrix.fromArray(ht.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(ht.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(gt.x,gt.y,gt.width,gt.height),lt===0&&(x.matrix.copy(vt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),J===!0&&x.cameras.push(vt)}const ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")){const lt=h.getDepthInformation(Y[0]);lt&&lt.isValid&&lt.texture&&_.init(t,lt,s.renderState)}}for(let Y=0;Y<M.length;Y++){const J=S[Y],ut=M[Y];J!==null&&ut!==void 0&&ut.update(J,U,l||o)}it&&it(z,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),p=null}const Q=new Bp;Q.setAnimationLoop(dt),this.setAnimationLoop=function(z){it=z},this.dispose=function(){}}}const As=new fi,_2=new jt;function x2(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,kp(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,M,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),h(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,S)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,v,M):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Tn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Tn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=t.get(m),M=v.envMap,S=v.envMapRotation;M&&(g.envMap.value=M,As.copy(S),As.x*=-1,As.y*=-1,As.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),g.envMapRotation.value.setFromMatrix4(_2.makeRotationFromEuler(As)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,v,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=M*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Tn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function v2(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const S=M.program;i.uniformBlockBinding(v,S)}function l(v,M){let S=s[v.id];S===void 0&&(p(v),S=u(v),s[v.id]=S,v.addEventListener("dispose",g));const A=M.program;i.updateUBOMapping(v,A);const w=t.render.frame;r[v.id]!==w&&(d(v),r[v.id]=w)}function u(v){const M=h();v.__bindingPointIndex=M;const S=n.createBuffer(),A=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const M=s[v.id],S=v.uniforms,A=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let w=0,E=S.length;w<E;w++){const T=Array.isArray(S[w])?S[w]:[S[w]];for(let N=0,x=T.length;N<x;N++){const y=T[N];if(f(y,w,N,A)===!0){const R=y.__offset,C=Array.isArray(y.value)?y.value:[y.value];let O=0;for(let k=0;k<C.length;k++){const L=C[k],D=_(L);typeof L=="number"||typeof L=="boolean"?(y.__data[0]=L,n.bufferSubData(n.UNIFORM_BUFFER,R+O,y.__data)):L.isMatrix3?(y.__data[0]=L.elements[0],y.__data[1]=L.elements[1],y.__data[2]=L.elements[2],y.__data[3]=0,y.__data[4]=L.elements[3],y.__data[5]=L.elements[4],y.__data[6]=L.elements[5],y.__data[7]=0,y.__data[8]=L.elements[6],y.__data[9]=L.elements[7],y.__data[10]=L.elements[8],y.__data[11]=0):(L.toArray(y.__data,O),O+=D.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,R,y.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(v,M,S,A){const w=v.value,E=M+"_"+S;if(A[E]===void 0)return typeof w=="number"||typeof w=="boolean"?A[E]=w:A[E]=w.clone(),!0;{const T=A[E];if(typeof w=="number"||typeof w=="boolean"){if(T!==w)return A[E]=w,!0}else if(T.equals(w)===!1)return T.copy(w),!0}return!1}function p(v){const M=v.uniforms;let S=0;const A=16;for(let E=0,T=M.length;E<T;E++){const N=Array.isArray(M[E])?M[E]:[M[E]];for(let x=0,y=N.length;x<y;x++){const R=N[x],C=Array.isArray(R.value)?R.value:[R.value];for(let O=0,k=C.length;O<k;O++){const L=C[O],D=_(L),F=S%A,X=F%D.boundary,K=F+X;S+=X,K!==0&&A-K<D.storage&&(S+=A-K),R.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=S,S+=D.storage}}}const w=S%A;return w>0&&(S+=A-w),v.__size=S,v.__cache={},this}function _(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function g(v){const M=v.target;M.removeEventListener("dispose",g);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class M2{constructor(t={}){const{canvas:e=o_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),p=new Int32Array(4);let _=null,g=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this.toneMapping=ps,this.toneMappingExposure=1;const M=this;let S=!1,A=0,w=0,E=null,T=-1,N=null;const x=new fe,y=new fe;let R=null;const C=new zt(0);let O=0,k=e.width,L=e.height,D=1,F=null,X=null;const K=new fe(0,0,k,L),it=new fe(0,0,k,L);let dt=!1;const Q=new Co;let z=!1,U=!1;const Y=new jt,J=new jt,ut=new B,lt=new fe,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function vt(){return E===null?D:1}let H=i;function se(P,V){return e.getContext(P,V)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mu}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",At,!1),H===null){const V="webgl2";if(H=se(V,P),H===null)throw se(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Ct,Nt,It,rt,ot,I,b,G,tt,at,nt,yt,ft,Mt,Jt,pt,Rt,Xt,Yt,Lt,ie,Kt,ve,W;function bt(){Ct=new bv(H),Ct.init(),Kt=new u2(H,Ct),Nt=new vv(H,Ct,t,Kt),It=new a2(H),Nt.reverseDepthBuffer&&It.buffers.depth.setReversed(!0),rt=new Rv(H),ot=new XM,I=new l2(H,Ct,It,ot,Nt,Kt,rt),b=new yv(M),G=new wv(M),tt=new N_(H),ve=new _v(H,tt),at=new Av(H,tt,rt,ve),nt=new Cv(H,at,tt,rt),Yt=new Lv(H,Nt,I),pt=new Mv(ot),yt=new qM(M,b,G,Ct,Nt,ve,pt),ft=new x2(M,ot),Mt=new $M,Jt=new t2(Ct),Xt=new gv(M,b,G,It,nt,d,c),Rt=new r2(M,nt,Nt),W=new v2(H,rt,Nt,It),Lt=new xv(H,Ct,rt),ie=new Tv(H,Ct,rt),rt.programs=yt.programs,M.capabilities=Nt,M.extensions=Ct,M.properties=ot,M.renderLists=Mt,M.shadowMap=Rt,M.state=It,M.info=rt}bt();const st=new g2(M,H);this.xr=st,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const P=Ct.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ct.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(P){P!==void 0&&(D=P,this.setSize(k,L,!1))},this.getSize=function(P){return P.set(k,L)},this.setSize=function(P,V,$=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=P,L=V,e.width=Math.floor(P*D),e.height=Math.floor(V*D),$===!0&&(e.style.width=P+"px",e.style.height=V+"px"),this.setViewport(0,0,P,V)},this.getDrawingBufferSize=function(P){return P.set(k*D,L*D).floor()},this.setDrawingBufferSize=function(P,V,$){k=P,L=V,D=$,e.width=Math.floor(P*$),e.height=Math.floor(V*$),this.setViewport(0,0,P,V)},this.getCurrentViewport=function(P){return P.copy(x)},this.getViewport=function(P){return P.copy(K)},this.setViewport=function(P,V,$,j){P.isVector4?K.set(P.x,P.y,P.z,P.w):K.set(P,V,$,j),It.viewport(x.copy(K).multiplyScalar(D).round())},this.getScissor=function(P){return P.copy(it)},this.setScissor=function(P,V,$,j){P.isVector4?it.set(P.x,P.y,P.z,P.w):it.set(P,V,$,j),It.scissor(y.copy(it).multiplyScalar(D).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(P){It.setScissorTest(dt=P)},this.setOpaqueSort=function(P){F=P},this.setTransparentSort=function(P){X=P},this.getClearColor=function(P){return P.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(P=!0,V=!0,$=!0){let j=0;if(P){let q=!1;if(E!==null){const mt=E.texture.format;q=mt===Tu||mt===Au||mt===bu}if(q){const mt=E.texture.type,wt=mt===qi||mt===zs||mt===vo||mt===Ar||mt===Su||mt===Eu,Dt=Xt.getClearColor(),Ot=Xt.getClearAlpha(),Vt=Dt.r,qt=Dt.g,Ut=Dt.b;wt?(f[0]=Vt,f[1]=qt,f[2]=Ut,f[3]=Ot,H.clearBufferuiv(H.COLOR,0,f)):(p[0]=Vt,p[1]=qt,p[2]=Ut,p[3]=Ot,H.clearBufferiv(H.COLOR,0,p))}else j|=H.COLOR_BUFFER_BIT}V&&(j|=H.DEPTH_BUFFER_BIT,H.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),$&&(j|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",At,!1),Mt.dispose(),Jt.dispose(),ot.dispose(),b.dispose(),G.dispose(),nt.dispose(),ve.dispose(),W.dispose(),yt.dispose(),st.dispose(),st.removeEventListener("sessionstart",vh),st.removeEventListener("sessionend",Mh),Ms.stop()};function ct(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const P=rt.autoReset,V=Rt.enabled,$=Rt.autoUpdate,j=Rt.needsUpdate,q=Rt.type;bt(),rt.autoReset=P,Rt.enabled=V,Rt.autoUpdate=$,Rt.needsUpdate=j,Rt.type=q}function At(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function re(P){const V=P.target;V.removeEventListener("dispose",re),Ge(V)}function Ge(P){Rn(P),ot.remove(P)}function Rn(P){const V=ot.get(P).programs;V!==void 0&&(V.forEach(function($){yt.releaseProgram($)}),P.isShaderMaterial&&yt.releaseShaderCache(P))}this.renderBufferDirect=function(P,V,$,j,q,mt){V===null&&(V=ht);const wt=q.isMesh&&q.matrixWorld.determinant()<0,Dt=gg(P,V,$,j,q);It.setMaterial(j,wt);let Ot=$.index,Vt=1;if(j.wireframe===!0){if(Ot=at.getWireframeAttribute($),Ot===void 0)return;Vt=2}const qt=$.drawRange,Ut=$.attributes.position;let ge=qt.start*Vt,Se=(qt.start+qt.count)*Vt;mt!==null&&(ge=Math.max(ge,mt.start*Vt),Se=Math.min(Se,(mt.start+mt.count)*Vt)),Ot!==null?(ge=Math.max(ge,0),Se=Math.min(Se,Ot.count)):Ut!=null&&(ge=Math.max(ge,0),Se=Math.min(Se,Ut.count));const Pe=Se-ge;if(Pe<0||Pe===1/0)return;ve.setup(q,j,Dt,$,Ot);let Nn,ce=Lt;if(Ot!==null&&(Nn=tt.get(Ot),ce=ie,ce.setIndex(Nn)),q.isMesh)j.wireframe===!0?(It.setLineWidth(j.wireframeLinewidth*vt()),ce.setMode(H.LINES)):ce.setMode(H.TRIANGLES);else if(q.isLine){let Ft=j.linewidth;Ft===void 0&&(Ft=1),It.setLineWidth(Ft*vt()),q.isLineSegments?ce.setMode(H.LINES):q.isLineLoop?ce.setMode(H.LINE_LOOP):ce.setMode(H.LINE_STRIP)}else q.isPoints?ce.setMode(H.POINTS):q.isSprite&&ce.setMode(H.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ce.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Ct.get("WEBGL_multi_draw"))ce.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ft=q._multiDrawStarts,sn=q._multiDrawCounts,le=q._multiDrawCount,Jn=Ot?tt.get(Ot).bytesPerElement:1,Gs=ot.get(j).currentProgram.getUniforms();for(let Un=0;Un<le;Un++)Gs.setValue(H,"_gl_DrawID",Un),ce.render(Ft[Un]/Jn,sn[Un])}else if(q.isInstancedMesh)ce.renderInstances(ge,Pe,q.count);else if($.isInstancedBufferGeometry){const Ft=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,sn=Math.min($.instanceCount,Ft);ce.renderInstances(ge,Pe,sn)}else ce.render(ge,Pe)};function oe(P,V,$){P.transparent===!0&&P.side===vi&&P.forceSinglePass===!1?(P.side=Tn,P.needsUpdate=!0,Bo(P,V,$),P.side=di,P.needsUpdate=!0,Bo(P,V,$),P.side=vi):Bo(P,V,$)}this.compile=function(P,V,$=null){$===null&&($=P),g=Jt.get($),g.init(V),v.push(g),$.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),P!==$&&P.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights();const j=new Set;return P.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const mt=q.material;if(mt)if(Array.isArray(mt))for(let wt=0;wt<mt.length;wt++){const Dt=mt[wt];oe(Dt,$,q),j.add(Dt)}else oe(mt,$,q),j.add(mt)}),v.pop(),g=null,j},this.compileAsync=function(P,V,$=null){const j=this.compile(P,V,$);return new Promise(q=>{function mt(){if(j.forEach(function(wt){ot.get(wt).currentProgram.isReady()&&j.delete(wt)}),j.size===0){q(P);return}setTimeout(mt,10)}Ct.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Ln=null;function Ii(P){Ln&&Ln(P)}function vh(){Ms.stop()}function Mh(){Ms.start()}const Ms=new Bp;Ms.setAnimationLoop(Ii),typeof self<"u"&&Ms.setContext(self),this.setAnimationLoop=function(P){Ln=P,st.setAnimationLoop(P),P===null?Ms.stop():Ms.start()},st.addEventListener("sessionstart",vh),st.addEventListener("sessionend",Mh),this.render=function(P,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(V),V=st.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,V,E),g=Jt.get(P,v.length),g.init(V),v.push(g),J.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Q.setFromProjectionMatrix(J),U=this.localClippingEnabled,z=pt.init(this.clippingPlanes,U),_=Mt.get(P,m.length),_.init(),m.push(_),st.enabled===!0&&st.isPresenting===!0){const mt=M.xr.getDepthSensingMesh();mt!==null&&Lc(mt,V,-1/0,M.sortObjects)}Lc(P,V,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(F,X),gt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,gt&&Xt.addToRenderList(_,P),this.info.render.frame++,z===!0&&pt.beginShadows();const $=g.state.shadowsArray;Rt.render($,P,V),z===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=_.opaque,q=_.transmissive;if(g.setupLights(),V.isArrayCamera){const mt=V.cameras;if(q.length>0)for(let wt=0,Dt=mt.length;wt<Dt;wt++){const Ot=mt[wt];Sh(j,q,P,Ot)}gt&&Xt.render(P);for(let wt=0,Dt=mt.length;wt<Dt;wt++){const Ot=mt[wt];yh(_,P,Ot,Ot.viewport)}}else q.length>0&&Sh(j,q,P,V),gt&&Xt.render(P),yh(_,P,V);E!==null&&(I.updateMultisampleRenderTarget(E),I.updateRenderTargetMipmap(E)),P.isScene===!0&&P.onAfterRender(M,P,V),ve.resetDefaultState(),T=-1,N=null,v.pop(),v.length>0?(g=v[v.length-1],z===!0&&pt.setGlobalState(M.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Lc(P,V,$,j){if(P.visible===!1)return;if(P.layers.test(V.layers)){if(P.isGroup)$=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(V);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Q.intersectsSprite(P)){j&&lt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(J);const wt=nt.update(P),Dt=P.material;Dt.visible&&_.push(P,wt,Dt,$,lt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Q.intersectsObject(P))){const wt=nt.update(P),Dt=P.material;if(j&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),lt.copy(P.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),lt.copy(wt.boundingSphere.center)),lt.applyMatrix4(P.matrixWorld).applyMatrix4(J)),Array.isArray(Dt)){const Ot=wt.groups;for(let Vt=0,qt=Ot.length;Vt<qt;Vt++){const Ut=Ot[Vt],ge=Dt[Ut.materialIndex];ge&&ge.visible&&_.push(P,wt,ge,$,lt.z,Ut)}}else Dt.visible&&_.push(P,wt,Dt,$,lt.z,null)}}const mt=P.children;for(let wt=0,Dt=mt.length;wt<Dt;wt++)Lc(mt[wt],V,$,j)}function yh(P,V,$,j){const q=P.opaque,mt=P.transmissive,wt=P.transparent;g.setupLightsView($),z===!0&&pt.setGlobalState(M.clippingPlanes,$),j&&It.viewport(x.copy(j)),q.length>0&&Ho(q,V,$),mt.length>0&&Ho(mt,V,$),wt.length>0&&Ho(wt,V,$),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Sh(P,V,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[j.id]===void 0&&(g.state.transmissionRenderTarget[j.id]=new Xi(1,1,{generateMipmaps:!0,type:Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float")?Pr:qi,minFilter:ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const mt=g.state.transmissionRenderTarget[j.id],wt=j.viewport||x;mt.setSize(wt.z,wt.w);const Dt=M.getRenderTarget();M.setRenderTarget(mt),M.getClearColor(C),O=M.getClearAlpha(),O<1&&M.setClearColor(16777215,.5),M.clear(),gt&&Xt.render($);const Ot=M.toneMapping;M.toneMapping=ps;const Vt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),g.setupLightsView(j),z===!0&&pt.setGlobalState(M.clippingPlanes,j),Ho(P,$,j),I.updateMultisampleRenderTarget(mt),I.updateRenderTargetMipmap(mt),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Ut=0,ge=V.length;Ut<ge;Ut++){const Se=V[Ut],Pe=Se.object,Nn=Se.geometry,ce=Se.material,Ft=Se.group;if(ce.side===vi&&Pe.layers.test(j.layers)){const sn=ce.side;ce.side=Tn,ce.needsUpdate=!0,Eh(Pe,$,j,Nn,ce,Ft),ce.side=sn,ce.needsUpdate=!0,qt=!0}}qt===!0&&(I.updateMultisampleRenderTarget(mt),I.updateRenderTargetMipmap(mt))}M.setRenderTarget(Dt),M.setClearColor(C,O),Vt!==void 0&&(j.viewport=Vt),M.toneMapping=Ot}function Ho(P,V,$){const j=V.isScene===!0?V.overrideMaterial:null;for(let q=0,mt=P.length;q<mt;q++){const wt=P[q],Dt=wt.object,Ot=wt.geometry,Vt=j===null?wt.material:j,qt=wt.group;Dt.layers.test($.layers)&&Eh(Dt,V,$,Ot,Vt,qt)}}function Eh(P,V,$,j,q,mt){P.onBeforeRender(M,V,$,j,q,mt),P.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(M,V,$,j,P,mt),q.transparent===!0&&q.side===vi&&q.forceSinglePass===!1?(q.side=Tn,q.needsUpdate=!0,M.renderBufferDirect($,V,j,q,P,mt),q.side=di,q.needsUpdate=!0,M.renderBufferDirect($,V,j,q,P,mt),q.side=vi):M.renderBufferDirect($,V,j,q,P,mt),P.onAfterRender(M,V,$,j,q,mt)}function Bo(P,V,$){V.isScene!==!0&&(V=ht);const j=ot.get(P),q=g.state.lights,mt=g.state.shadowsArray,wt=q.state.version,Dt=yt.getParameters(P,q.state,mt,V,$),Ot=yt.getProgramCacheKey(Dt);let Vt=j.programs;j.environment=P.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(P.isMeshStandardMaterial?G:b).get(P.envMap||j.environment),j.envMapRotation=j.environment!==null&&P.envMap===null?V.environmentRotation:P.envMapRotation,Vt===void 0&&(P.addEventListener("dispose",re),Vt=new Map,j.programs=Vt);let qt=Vt.get(Ot);if(qt!==void 0){if(j.currentProgram===qt&&j.lightsStateVersion===wt)return bh(P,Dt),qt}else Dt.uniforms=yt.getUniforms(P),P.onBeforeCompile(Dt,M),qt=yt.acquireProgram(Dt,Ot),Vt.set(Ot,qt),j.uniforms=Dt.uniforms;const Ut=j.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ut.clippingPlanes=pt.uniform),bh(P,Dt),j.needsLights=xg(P),j.lightsStateVersion=wt,j.needsLights&&(Ut.ambientLightColor.value=q.state.ambient,Ut.lightProbe.value=q.state.probe,Ut.directionalLights.value=q.state.directional,Ut.directionalLightShadows.value=q.state.directionalShadow,Ut.spotLights.value=q.state.spot,Ut.spotLightShadows.value=q.state.spotShadow,Ut.rectAreaLights.value=q.state.rectArea,Ut.ltc_1.value=q.state.rectAreaLTC1,Ut.ltc_2.value=q.state.rectAreaLTC2,Ut.pointLights.value=q.state.point,Ut.pointLightShadows.value=q.state.pointShadow,Ut.hemisphereLights.value=q.state.hemi,Ut.directionalShadowMap.value=q.state.directionalShadowMap,Ut.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ut.spotShadowMap.value=q.state.spotShadowMap,Ut.spotLightMatrix.value=q.state.spotLightMatrix,Ut.spotLightMap.value=q.state.spotLightMap,Ut.pointShadowMap.value=q.state.pointShadowMap,Ut.pointShadowMatrix.value=q.state.pointShadowMatrix),j.currentProgram=qt,j.uniformsList=null,qt}function wh(P){if(P.uniformsList===null){const V=P.currentProgram.getUniforms();P.uniformsList=Na.seqWithValue(V.seq,P.uniforms)}return P.uniformsList}function bh(P,V){const $=ot.get(P);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function gg(P,V,$,j,q){V.isScene!==!0&&(V=ht),I.resetTextureUnits();const mt=V.fog,wt=j.isMeshStandardMaterial?V.environment:null,Dt=E===null?M.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ri,Ot=(j.isMeshStandardMaterial?G:b).get(j.envMap||wt),Vt=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,qt=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ut=!!$.morphAttributes.position,ge=!!$.morphAttributes.normal,Se=!!$.morphAttributes.color;let Pe=ps;j.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Pe=M.toneMapping);const Nn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ce=Nn!==void 0?Nn.length:0,Ft=ot.get(j),sn=g.state.lights;if(z===!0&&(U===!0||P!==N)){const Wn=P===N&&j.id===T;pt.setState(j,P,Wn)}let le=!1;j.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==sn.state.version||Ft.outputColorSpace!==Dt||q.isBatchedMesh&&Ft.batching===!1||!q.isBatchedMesh&&Ft.batching===!0||q.isBatchedMesh&&Ft.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ft.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ft.instancing===!1||!q.isInstancedMesh&&Ft.instancing===!0||q.isSkinnedMesh&&Ft.skinning===!1||!q.isSkinnedMesh&&Ft.skinning===!0||q.isInstancedMesh&&Ft.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ft.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ft.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ft.instancingMorph===!1&&q.morphTexture!==null||Ft.envMap!==Ot||j.fog===!0&&Ft.fog!==mt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==pt.numPlanes||Ft.numIntersection!==pt.numIntersection)||Ft.vertexAlphas!==Vt||Ft.vertexTangents!==qt||Ft.morphTargets!==Ut||Ft.morphNormals!==ge||Ft.morphColors!==Se||Ft.toneMapping!==Pe||Ft.morphTargetsCount!==ce)&&(le=!0):(le=!0,Ft.__version=j.version);let Jn=Ft.currentProgram;le===!0&&(Jn=Bo(j,V,q));let Gs=!1,Un=!1,Cc=!1;const Fe=Jn.getUniforms(),$i=Ft.uniforms;if(It.useProgram(Jn.program)&&(Gs=!0,Un=!0,Cc=!0),j.id!==T&&(T=j.id,Un=!0),Gs||N!==P){Nt.reverseDepthBuffer?(Y.copy(P.projectionMatrix),c_(Y),l_(Y),Fe.setValue(H,"projectionMatrix",Y)):Fe.setValue(H,"projectionMatrix",P.projectionMatrix),Fe.setValue(H,"viewMatrix",P.matrixWorldInverse);const Wn=Fe.map.cameraPosition;Wn!==void 0&&Wn.setValue(H,ut.setFromMatrixPosition(P.matrixWorld)),Nt.logarithmicDepthBuffer&&Fe.setValue(H,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Fe.setValue(H,"isOrthographic",P.isOrthographicCamera===!0),N!==P&&(N=P,Un=!0,Cc=!0)}if(q.isSkinnedMesh){Fe.setOptional(H,q,"bindMatrix"),Fe.setOptional(H,q,"bindMatrixInverse");const Wn=q.skeleton;Wn&&(Wn.boneTexture===null&&Wn.computeBoneTexture(),Fe.setValue(H,"boneTexture",Wn.boneTexture,I))}q.isBatchedMesh&&(Fe.setOptional(H,q,"batchingTexture"),Fe.setValue(H,"batchingTexture",q._matricesTexture,I),Fe.setOptional(H,q,"batchingIdTexture"),Fe.setValue(H,"batchingIdTexture",q._indirectTexture,I),Fe.setOptional(H,q,"batchingColorTexture"),q._colorsTexture!==null&&Fe.setValue(H,"batchingColorTexture",q._colorsTexture,I));const Ic=$.morphAttributes;if((Ic.position!==void 0||Ic.normal!==void 0||Ic.color!==void 0)&&Yt.update(q,$,Jn),(Un||Ft.receiveShadow!==q.receiveShadow)&&(Ft.receiveShadow=q.receiveShadow,Fe.setValue(H,"receiveShadow",q.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&($i.envMap.value=Ot,$i.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&V.environment!==null&&($i.envMapIntensity.value=V.environmentIntensity),Un&&(Fe.setValue(H,"toneMappingExposure",M.toneMappingExposure),Ft.needsLights&&_g($i,Cc),mt&&j.fog===!0&&ft.refreshFogUniforms($i,mt),ft.refreshMaterialUniforms($i,j,D,L,g.state.transmissionRenderTarget[P.id]),Na.upload(H,wh(Ft),$i,I)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Na.upload(H,wh(Ft),$i,I),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Fe.setValue(H,"center",q.center),Fe.setValue(H,"modelViewMatrix",q.modelViewMatrix),Fe.setValue(H,"normalMatrix",q.normalMatrix),Fe.setValue(H,"modelMatrix",q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Wn=j.uniformsGroups;for(let Dc=0,vg=Wn.length;Dc<vg;Dc++){const Ah=Wn[Dc];W.update(Ah,Jn),W.bind(Ah,Jn)}}return Jn}function _g(P,V){P.ambientLightColor.needsUpdate=V,P.lightProbe.needsUpdate=V,P.directionalLights.needsUpdate=V,P.directionalLightShadows.needsUpdate=V,P.pointLights.needsUpdate=V,P.pointLightShadows.needsUpdate=V,P.spotLights.needsUpdate=V,P.spotLightShadows.needsUpdate=V,P.rectAreaLights.needsUpdate=V,P.hemisphereLights.needsUpdate=V}function xg(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(P,V,$){ot.get(P.texture).__webglTexture=V,ot.get(P.depthTexture).__webglTexture=$;const j=ot.get(P);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=$===void 0,j.__autoAllocateDepthBuffer||Ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,V){const $=ot.get(P);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(P,V=0,$=0){E=P,A=V,w=$;let j=!0,q=null,mt=!1,wt=!1;if(P){const Ot=ot.get(P);if(Ot.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(H.FRAMEBUFFER,null),j=!1;else if(Ot.__webglFramebuffer===void 0)I.setupRenderTarget(P);else if(Ot.__hasExternalTextures)I.rebindTextures(P,ot.get(P.texture).__webglTexture,ot.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ut=P.depthTexture;if(Ot.__boundDepthTexture!==Ut){if(Ut!==null&&ot.has(Ut)&&(P.width!==Ut.image.width||P.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(P)}}const Vt=P.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(wt=!0);const qt=ot.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(qt[V])?q=qt[V][$]:q=qt[V],mt=!0):P.samples>0&&I.useMultisampledRTT(P)===!1?q=ot.get(P).__webglMultisampledFramebuffer:Array.isArray(qt)?q=qt[$]:q=qt,x.copy(P.viewport),y.copy(P.scissor),R=P.scissorTest}else x.copy(K).multiplyScalar(D).floor(),y.copy(it).multiplyScalar(D).floor(),R=dt;if(It.bindFramebuffer(H.FRAMEBUFFER,q)&&j&&It.drawBuffers(P,q),It.viewport(x),It.scissor(y),It.setScissorTest(R),mt){const Ot=ot.get(P.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ot.__webglTexture,$)}else if(wt){const Ot=ot.get(P.texture),Vt=V||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ot.__webglTexture,$||0,Vt)}T=-1},this.readRenderTargetPixels=function(P,V,$,j,q,mt,wt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=ot.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){It.bindFramebuffer(H.FRAMEBUFFER,Dt);try{const Ot=P.texture,Vt=Ot.format,qt=Ot.type;if(!Nt.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=P.width-j&&$>=0&&$<=P.height-q&&H.readPixels(V,$,j,q,Kt.convert(Vt),Kt.convert(qt),mt)}finally{const Ot=E!==null?ot.get(E).__webglFramebuffer:null;It.bindFramebuffer(H.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(P,V,$,j,q,mt,wt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=ot.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&wt!==void 0&&(Dt=Dt[wt]),Dt){const Ot=P.texture,Vt=Ot.format,qt=Ot.type;if(!Nt.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=P.width-j&&$>=0&&$<=P.height-q){It.bindFramebuffer(H.FRAMEBUFFER,Dt);const Ut=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ut),H.bufferData(H.PIXEL_PACK_BUFFER,mt.byteLength,H.STREAM_READ),H.readPixels(V,$,j,q,Kt.convert(Vt),Kt.convert(qt),0);const ge=E!==null?ot.get(E).__webglFramebuffer:null;It.bindFramebuffer(H.FRAMEBUFFER,ge);const Se=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await a_(H,Se,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ut),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,mt),H.deleteBuffer(Ut),H.deleteSync(Se),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,V=null,$=0){P.isTexture!==!0&&(Oa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,P=arguments[1]);const j=Math.pow(2,-$),q=Math.floor(P.image.width*j),mt=Math.floor(P.image.height*j),wt=V!==null?V.x:0,Dt=V!==null?V.y:0;I.setTexture2D(P,0),H.copyTexSubImage2D(H.TEXTURE_2D,$,0,0,wt,Dt,q,mt),It.unbindTexture()},this.copyTextureToTexture=function(P,V,$=null,j=null,q=0){P.isTexture!==!0&&(Oa("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,P=arguments[1],V=arguments[2],q=arguments[3]||0,$=null);let mt,wt,Dt,Ot,Vt,qt;$!==null?(mt=$.max.x-$.min.x,wt=$.max.y-$.min.y,Dt=$.min.x,Ot=$.min.y):(mt=P.image.width,wt=P.image.height,Dt=0,Ot=0),j!==null?(Vt=j.x,qt=j.y):(Vt=0,qt=0);const Ut=Kt.convert(V.format),ge=Kt.convert(V.type);I.setTexture2D(V,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,V.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,V.unpackAlignment);const Se=H.getParameter(H.UNPACK_ROW_LENGTH),Pe=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Nn=H.getParameter(H.UNPACK_SKIP_PIXELS),ce=H.getParameter(H.UNPACK_SKIP_ROWS),Ft=H.getParameter(H.UNPACK_SKIP_IMAGES),sn=P.isCompressedTexture?P.mipmaps[q]:P.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,sn.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,sn.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Dt),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ot),P.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,q,Vt,qt,mt,wt,Ut,ge,sn.data):P.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,q,Vt,qt,sn.width,sn.height,Ut,sn.data):H.texSubImage2D(H.TEXTURE_2D,q,Vt,qt,mt,wt,Ut,ge,sn),H.pixelStorei(H.UNPACK_ROW_LENGTH,Se),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Pe),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Nn),H.pixelStorei(H.UNPACK_SKIP_ROWS,ce),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ft),q===0&&V.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),It.unbindTexture()},this.copyTextureToTexture3D=function(P,V,$=null,j=null,q=0){P.isTexture!==!0&&(Oa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,j=arguments[1]||null,P=arguments[2],V=arguments[3],q=arguments[4]||0);let mt,wt,Dt,Ot,Vt,qt,Ut,ge,Se;const Pe=P.isCompressedTexture?P.mipmaps[q]:P.image;$!==null?(mt=$.max.x-$.min.x,wt=$.max.y-$.min.y,Dt=$.max.z-$.min.z,Ot=$.min.x,Vt=$.min.y,qt=$.min.z):(mt=Pe.width,wt=Pe.height,Dt=Pe.depth,Ot=0,Vt=0,qt=0),j!==null?(Ut=j.x,ge=j.y,Se=j.z):(Ut=0,ge=0,Se=0);const Nn=Kt.convert(V.format),ce=Kt.convert(V.type);let Ft;if(V.isData3DTexture)I.setTexture3D(V,0),Ft=H.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)I.setTexture2DArray(V,0),Ft=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,V.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,V.unpackAlignment);const sn=H.getParameter(H.UNPACK_ROW_LENGTH),le=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Jn=H.getParameter(H.UNPACK_SKIP_PIXELS),Gs=H.getParameter(H.UNPACK_SKIP_ROWS),Un=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Pe.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Pe.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ot),H.pixelStorei(H.UNPACK_SKIP_ROWS,Vt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,qt),P.isDataTexture||P.isData3DTexture?H.texSubImage3D(Ft,q,Ut,ge,Se,mt,wt,Dt,Nn,ce,Pe.data):V.isCompressedArrayTexture?H.compressedTexSubImage3D(Ft,q,Ut,ge,Se,mt,wt,Dt,Nn,Pe.data):H.texSubImage3D(Ft,q,Ut,ge,Se,mt,wt,Dt,Nn,ce,Pe),H.pixelStorei(H.UNPACK_ROW_LENGTH,sn),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,le),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Jn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Gs),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Un),q===0&&V.generateMipmaps&&H.generateMipmap(Ft),It.unbindTexture()},this.initRenderTarget=function(P){ot.get(P).__webglFramebuffer===void 0&&I.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?I.setTextureCube(P,0):P.isData3DTexture?I.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?I.setTexture2DArray(P,0):I.setTexture2D(P,0),It.unbindTexture()},this.resetState=function(){A=0,w=0,E=null,It.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ru?"display-p3":"srgb",e.unpackColorSpace=ue.workingColorSpace===fc?"display-p3":"srgb"}}class Iu{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=i}clone(){return new Iu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class mc extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Io extends Mn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=xn,u=xn,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Md extends pe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ir=new jt,yd=new jt,la=[],Sd=new pi,y2=new jt,Vr=new Pt,qr=new Ro;class Ka extends Pt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Md(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,y2)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ir),Sd.copy(t.boundingBox).applyMatrix4(ir),this.boundingBox.union(Sd)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ro),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ir),qr.copy(t.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(qr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(i),t.ray.intersectsSphere(qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ir),yd.multiplyMatrices(i,ir),Vr.matrixWorld=yd,Vr.raycast(t,la);for(let o=0,a=la.length;o<a;o++){const c=la[o];c.instanceId=r,c.object=this,e.push(c)}la.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Md(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Io(new Float32Array(s*this.count),s,this.count,wu,yi));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Do extends Mn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gs extends Sn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new B,u=new Bt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const f=i+h/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ue(o,3)),this.setAttribute("normal",new Ue(a,3)),this.setAttribute("uv",new Ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ne extends Sn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let p=0;const _=[],g=i/2;let m=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Ue(h,3)),this.setAttribute("normal",new Ue(d,3)),this.setAttribute("uv",new Ue(f,2));function v(){const S=new B,A=new B;let w=0;const E=(e-t)/i;for(let T=0;T<=r;T++){const N=[],x=T/r,y=x*(e-t)+t;for(let R=0;R<=s;R++){const C=R/s,O=C*c+a,k=Math.sin(O),L=Math.cos(O);A.x=y*k,A.y=-x*i+g,A.z=y*L,h.push(A.x,A.y,A.z),S.set(k,E,L).normalize(),d.push(S.x,S.y,S.z),f.push(C,1-x),N.push(p++)}_.push(N)}for(let T=0;T<s;T++)for(let N=0;N<r;N++){const x=_[N][T],y=_[N+1][T],R=_[N+1][T+1],C=_[N][T+1];t>0&&(u.push(x,y,C),w+=3),e>0&&(u.push(y,R,C),w+=3)}l.addGroup(m,w,0),m+=w}function M(S){const A=p,w=new Bt,E=new B;let T=0;const N=S===!0?t:e,x=S===!0?1:-1;for(let R=1;R<=s;R++)h.push(0,g*x,0),d.push(0,x,0),f.push(.5,.5),p++;const y=p;for(let R=0;R<=s;R++){const O=R/s*c+a,k=Math.cos(O),L=Math.sin(O);E.x=N*L,E.y=g*x,E.z=N*k,h.push(E.x,E.y,E.z),d.push(0,x,0),w.x=k*.5+.5,w.y=L*.5*x+.5,f.push(w.x,w.y),p++}for(let R=0;R<s;R++){const C=A+R,O=y+R;S===!0?u.push(O,O+1,C):u.push(O+1,O,C),T+=3}l.addGroup(m,T,S===!0?1:2),m+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ne(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Du extends ne{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Du(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pu extends Sn{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new Ue(r,3)),this.setAttribute("normal",new Ue(r.slice(),3)),this.setAttribute("uv",new Ue(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new B,S=new B,A=new B;for(let w=0;w<e.length;w+=3)f(e[w+0],M),f(e[w+1],S),f(e[w+2],A),c(M,S,A,v)}function c(v,M,S,A){const w=A+1,E=[];for(let T=0;T<=w;T++){E[T]=[];const N=v.clone().lerp(S,T/w),x=M.clone().lerp(S,T/w),y=w-T;for(let R=0;R<=y;R++)R===0&&T===w?E[T][R]=N:E[T][R]=N.clone().lerp(x,R/y)}for(let T=0;T<w;T++)for(let N=0;N<2*(w-T)-1;N++){const x=Math.floor(N/2);N%2===0?(d(E[T][x+1]),d(E[T+1][x]),d(E[T][x])):(d(E[T][x+1]),d(E[T+1][x+1]),d(E[T+1][x]))}}function l(v){const M=new B;for(let S=0;S<r.length;S+=3)M.x=r[S+0],M.y=r[S+1],M.z=r[S+2],M.normalize().multiplyScalar(v),r[S+0]=M.x,r[S+1]=M.y,r[S+2]=M.z}function u(){const v=new B;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];const S=g(v)/2/Math.PI+.5,A=m(v)/Math.PI+.5;o.push(S,1-A)}p(),h()}function h(){for(let v=0;v<o.length;v+=6){const M=o[v+0],S=o[v+2],A=o[v+4],w=Math.max(M,S,A),E=Math.min(M,S,A);w>.9&&E<.1&&(M<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,M){const S=v*3;M.x=t[S+0],M.y=t[S+1],M.z=t[S+2]}function p(){const v=new B,M=new B,S=new B,A=new B,w=new Bt,E=new Bt,T=new Bt;for(let N=0,x=0;N<r.length;N+=9,x+=6){v.set(r[N+0],r[N+1],r[N+2]),M.set(r[N+3],r[N+4],r[N+5]),S.set(r[N+6],r[N+7],r[N+8]),w.set(o[x+0],o[x+1]),E.set(o[x+2],o[x+3]),T.set(o[x+4],o[x+5]),A.copy(v).add(M).add(S).divideScalar(3);const y=g(A);_(w,x+0,v,y),_(E,x+2,M,y),_(T,x+4,S,y)}}function _(v,M,S,A){A<0&&v.x===1&&(o[M]=v.x-1),S.x===0&&S.z===0&&(o[M]=A/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pu(t.vertices,t.indices,t.radius,t.details)}}class Ou extends Pu{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ou(t.radius,t.detail)}}class gc extends Sn{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=t;const d=(e-t)/s,f=new B,p=new Bt;for(let _=0;_<=s;_++){for(let g=0;g<=i;g++){const m=r+g/i*o;f.x=h*Math.cos(m),f.y=h*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,u.push(p.x,p.y)}h+=d}for(let _=0;_<s;_++){const g=_*(i+1);for(let m=0;m<i;m++){const v=m+g,M=v,S=v+i+1,A=v+i+2,w=v+1;a.push(M,S,w),a.push(S,A,w)}}this.setIndex(a),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(l,3)),this.setAttribute("uv",new Ue(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Yi extends Sn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new B,d=new B,f=[],p=[],_=[],g=[];for(let m=0;m<=i;m++){const v=[],M=m/i;let S=0;m===0&&o===0?S=.5/e:m===i&&c===Math.PI&&(S=-.5/e);for(let A=0;A<=e;A++){const w=A/e;h.x=-t*Math.cos(s+w*r)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(s+w*r)*Math.sin(o+M*a),p.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),g.push(w+S,1-M),v.push(l++)}u.push(v)}for(let m=0;m<i;m++)for(let v=0;v<e;v++){const M=u[m][v+1],S=u[m][v],A=u[m+1][v],w=u[m+1][v+1];(m!==0||o>0)&&f.push(M,S,w),(m!==i-1||c<Math.PI)&&f.push(S,A,w)}this.setIndex(f),this.setAttribute("position",new Ue(p,3)),this.setAttribute("normal",new Ue(_,3)),this.setAttribute("uv",new Ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class un extends Lo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lp,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _c extends un{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Bt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return An(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class xc extends nn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Yp extends xc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ul=new jt,Ed=new B,wd=new B;class $p{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Co,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ed.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ed),wd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wd),e.updateMatrixWorld(),ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const bd=new jt,Xr=new B,hl=new B;class S2 extends $p{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Bt(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Xr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Xr),hl.copy(i.position),hl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(hl),i.updateMatrixWorld(),s.makeTranslation(-Xr.x,-Xr.y,-Xr.z),bd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bd)}}class yo extends xc{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new S2}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class E2 extends $p{constructor(){super(new Lu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Y0 extends xc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new E2}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Nu extends xc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mu);const Lr={glass:6453644,metal:9146777,metalDark:4870231},Bn={ceiling:15525851,wall:13814974,trim:16249834,floorTimber:9072722,benchtop:12168342,tile:13622754,tileFloor:12104358,metalDull:9146777};function w2(n){const t=o=>o<=.04045?o/12.92:((o+.055)/1.055)**2.4,e=t((n>>16&255)/255),i=t((n>>8&255)/255),s=t((n&255)/255),r=.2126*e+.7152*i+.0722*s;return r>.008856?116*Math.cbrt(r)-16:903.3*r}const Ad=86,b2=new Set([Bn.ceiling,Bn.tile]);function vc(n,t){if(t<=2||b2.has(n))return n;const e=w2(n);if(e>Ad)throw new Error(`value plan: ${t.toFixed(1)} m2 of #${n.toString(16).padStart(6,"0")} is L* ${e.toFixed(0)}, above the ${Ad} cap for large areas`);return n}const vr=new Map,A2=["roughness","metalness","flat","transparent","opacity","side","emissive","emissiveIntensity","vertexColors"];function T2(n,t={}){let e=String(n);for(const s of A2)t[s]!==void 0&&(e+="|"+s+"="+JSON.stringify(t[s]));if(vr.has(e))return vr.get(e);const i=new un({color:n,roughness:t.roughness??.85,metalness:t.metalness??0,flatShading:t.flat??!1,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??di,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,vertexColors:t.vertexColors??!1});return vr.set(e,i),i}function Uu(n,t){if(vr.has(n))return vr.get(n);const e=t();return vr.set(n,e),e}const R2=n=>{n.fragmentShader=n.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
    // normal (view space) and vViewPosition (fragment -> camera, view space) are
    // both in scope here in r169; abs() because a merged pane is a box and a back
    // face would otherwise flip the term.
    float ghCos = clamp( abs( dot( normalize( normal ), normalize( vViewPosition ) ) ), 0.0, 1.0 );
    float ghF = 0.04 + 0.96 * pow( 1.0 - ghCos, 5.0 );
    gl_FragColor.rgb += ambientLightColor * ghF * 2.5;
    float ghA = gl_FragColor.a + ( 1.0 - gl_FragColor.a ) * ghF;
    // The emissive uniform already carries emissiveIntensity (WebGLMaterials
    // multiplies it in on the CPU), so this reads the dusk flip directly.
    float ghLit = clamp( max( totalEmissiveRadiance.r, totalEmissiveRadiance.b ) * 2.0, 0.0, 1.0 );
    gl_FragColor.a = max( ghA, 0.80 * ghLit );`)};function Po(n){return n.onBeforeCompile=R2,n}function L2(){return Uu("window",()=>Po(new un({color:Lr.glass,roughness:.1,metalness:0,transparent:!0,opacity:.28,depthWrite:!1,emissive:new zt(16767392),emissiveIntensity:0})))}function C2(){return Uu("windowinner",()=>Po(new un({color:Lr.glass,roughness:.1,metalness:0,transparent:!0,opacity:.1,depthWrite:!1})))}function jp(){return Uu("contactshadow",()=>{const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),i=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);i.addColorStop(0,"rgb(140,140,140)"),i.addColorStop(.55,"rgb(196,196,196)"),i.addColorStop(1,"rgb(255,255,255)"),e.fillStyle=i,e.fillRect(0,0,128,128);const s=new Do(t);s.colorSpace=an;const r=new li({map:s,blending:o0,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return r.userData.decal=!0,r})}new hn(1,1,1),new mi(1,1),new ne(.5,.5,1,10),new Du(.5,1,8),new Yi(.5,12,10);const I2=new Set;function Fu(n){I2.add(n)}function D2(n){let t=1779033703^n.length;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),3432918353),t=t<<13|t>>>19;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),t^=t>>>16,t>>>0)}function P2(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class Oo{constructor(t="lifesim"){this.seed=String(t),this._next=P2(D2(this.seed)()),this._children=new Map}child(t){return this._children.has(t)||this._children.set(t,new Oo(`${this.seed}:${t}`)),this._children.get(t)}float(){return this._next()}range(t,e){return t+this._next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}chance(t){return this._next()<t}sign(){return this._next()<.5?-1:1}pick(t){return t[Math.floor(this._next()*t.length)]}pickMany(t,e){const i=this.shuffle([...t]);return i.slice(0,Math.min(e,i.length))}shuffle(t){for(let e=t.length-1;e>0;e--){const i=Math.floor(this._next()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t}weighted(t){const e=Array.isArray(t)?t:[...t].map(([r,o])=>({value:r,weight:o}));let i=0;for(const r of e)i+=Math.max(0,r.weight??1);if(i<=0)return e[0];let s=this._next()*i;for(const r of e)if(s-=Math.max(0,r.weight??1),s<=0)return r;return e[e.length-1]}gaussian(t=0,e=1){let i=0,s=0;for(;i===0;)i=this._next();for(;s===0;)s=this._next();return t+e*Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*s)}stat(t,e,i=0,s=100){return Math.max(i,Math.min(s,Math.round(this.gaussian(t,e))))}}let Kp=8,$0=null;function O2(n){$0=n,Kp=Math.min(8,n.capabilities.getMaxAnisotropy())}let N2=n=>{const t=document.createElement("canvas");return t.width=t.height=n,t};const Zp=(n,t=n)=>{const e=N2(n);return e.width=n,e.height=t,e};let Jp=0;function ku(n,t){return t&&(n.colorSpace=an),n.wrapS=n.wrapT=ks,n.anisotropy=Kp,n.generateMipmaps=!0,n.minFilter=ci,n.magFilter=ze,Jp+=n.image.width*n.image.height*4*4/3,$0&&$0.initTexture(n),n}function Li(n){return ku(new Do(U2(n)),!0)}function j0(n){return n.wrapS=n.wrapT=ls,n}function U2(n){const t=Zp(n.w,n.h),e=t.getContext("2d"),i=e.createImageData(n.w,n.h),s=i.data,r=n.d,o=n.w*n.h;for(let a=0,c=0,l=0;a<o;a++,c+=3,l+=4){const u=r[c],h=r[c+1],d=r[c+2];s[l]=(u<0?0:u>1?1:u)*255+.5,s[l+1]=(h<0?0:h>1?1:h)*255+.5,s[l+2]=(d<0?0:d>1?1:d)*255+.5,s[l+3]=255}return e.putImageData(i,0,0),t}const He=n=>n<0?0:n>1?1:n,bi=n=>[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255];function F2(n){const[t,e,i]=n,s=Math.max(t,e,i),r=Math.min(t,e,i),o=(s+r)/2;if(s===r)return[0,0,o];const a=s-r,c=o>.5?a/(2-s-r):a/(s+r);let l;return s===t?l=((e-i)/a+(e<i?6:0))/6:s===e?l=((i-t)/a+2)/6:l=((t-e)/a+4)/6,[l,c,o]}function k2(n,t,e){if(t===0)return[e,e,e];const i=e<.5?e*(1+t):e+t-e*t,s=2*e-i,r=o=>(o=(o%1+1)%1,o<1/6?s+(i-s)*6*o:o<1/2?i:o<2/3?s+(i-s)*(2/3-o)*6:s);return[r(n+1/3),r(n),r(n-1/3)]}function Si(n,t=1,e=0,i=1){const[s,r,o]=F2(Array.isArray(n)?n:bi(n));return k2(s+e/360,He(r*i),He(o*t))}function Ci(n,t){return{w:n,h:t,d:new Float32Array(n*t*3)}}function Bs(n,t){const e=Array.isArray(t)?t:bi(t),i=n.d;for(let s=0;s<i.length;s+=3)i[s]=e[0],i[s+1]=e[1],i[s+2]=e[2]}function zu(n,t,e,i,s){if(s<=0)return;const r=n.w,o=n.h;let a=t,c=e;(a<0||a>=r)&&(a=(a%r+r)%r),(c<0||c>=o)&&(c=(c%o+o)%o);const l=(c*r+a)*3,u=n.d,h=1-s;u[l]=u[l]*h+i[0]*s,u[l+1]=u[l+1]*h+i[1]*s,u[l+2]=u[l+2]*h+i[2]*s}function qn(n,t,e,i,s,r,o=1){const a=Array.isArray(r)?r:bi(r),c=Math.round(t),l=Math.round(i),u=Math.round(e),h=Math.round(s);if(o<1){for(let _=u;_<h;_++)for(let g=c;g<l;g++)zu(n,g,_,a,o);return}const d=n.w,f=n.h,p=n.d;for(let _=u;_<h;_++){let g=_;(g<0||g>=f)&&(g=(g%f+f)%f);const m=g*d;for(let v=c;v<l;v++){let M=v;(M<0||M>=d)&&(M=(M%d+d)%d);const S=(m+M)*3;p[S]=a[0],p[S+1]=a[1],p[S+2]=a[2]}}}function No(n,t,e,i,s,r=1){const o=i+1;for(let a=Math.floor(e-o);a<=Math.ceil(e+o);a++)for(let c=Math.floor(t-o);c<=Math.ceil(t+o);c++){const l=c+.5-t,u=a+.5-e,h=He(i-Math.sqrt(l*l+u*u)+.5);h>0&&zu(n,c,a,s,r*h)}}function K0(n,t,e,i,s=1){const r=Math.max(1,e)/2;for(let o=1;o<t.length;o++){const[a,c]=t[o-1],[l,u]=t[o],h=Math.hypot(l-a,u-c),d=Math.max(1,Math.ceil(h));for(let f=0;f<=d;f++){const p=f/d;No(n,a+(l-a)*p,c+(u-c)*p,r,i,s)}}}function Qp(n,t,e,i,s,r,o,a){const c=n.w,l=n.h,u=n.d,h=r/2,d=o[0],f=o[1],p=o[2],_=Math.PI*2/i;for(let g=0;g<l;g++){const m=g*c,v=t+e*Math.sin(g*_+s),M=v-h,S=v+h,A=Math.floor(M),w=Math.ceil(S);for(let E=A;E<=w;E++){const T=He(Math.min(E+1,S)-Math.max(E,M));if(T<=0)continue;const N=a*T,x=1-N;let y=E;(y<0||y>=c)&&(y=(y%c+c)%c);const R=(m+y)*3;u[R]=u[R]*x+d*N,u[R+1]=u[R+1]*x+f*N,u[R+2]=u[R+2]*x+p*N}}}const Td=n=>n*n*(3-2*n);function z2(n,t,e){const i=new Float32Array(t*e);for(let s=0;s<i.length;s++)i[s]=n.float();return i}const Rd=256;function he(n,t,e={}){const{p0:i=32,octaves:s=4,gain:r=.5,lacunarity:o=2,h:a=t}=e,c=e.p0x??i,l=e.p0y??i,u=new Float32Array(t*a),h=[];let d=1,f=0;for(let A=0;A<s;A++){const w=Math.min(Rd,Math.max(1,Math.round(c*o**A))),E=Math.min(Rd,Math.max(1,Math.round(l*o**A)));h.push({lat:z2(n,w,E),px:w,py:E,amp:d}),f+=d,d*=r}const p=new Float64Array(t*a),_=new Int32Array(t),g=new Int32Array(t),m=new Float64Array(t);for(let A=0;A<h.length;A++){const w=h[A],E=w.lat,T=w.px,N=w.py,x=w.amp,y=T/t,R=N/a;for(let C=0;C<t;C++){const O=C*y,k=O|0,L=k>=T?k%T:k;_[C]=L,g[C]=L+1>=T?0:L+1,m[C]=Td(O-k)}for(let C=0;C<a;C++){const O=C*R,k=O|0,L=Td(O-k),D=1-L,F=k>=N?k%N:k,X=F*T,K=(F+1>=N?0:F+1)*T,it=C*t;for(let dt=0;dt<t;dt++){const Q=_[dt],z=g[dt],U=m[dt],Y=E[X+Q],J=E[X+z],ut=E[K+Q],lt=E[K+z];p[it+dt]+=x*((Y+(J-Y)*U)*D+(ut+(lt-ut)*U)*L)}}}let v=1/0,M=-1/0;for(let A=0;A<u.length;A++){u[A]=p[A]/f;const w=u[A];w<v&&(v=w),w>M&&(M=w)}const S=M-v||1;for(let A=0;A<u.length;A++)u[A]=(u[A]-v)/S;return u}function tm(n,t,e,i){const s=new Float32Array(t*e),r=new Float32Array(t*e),o=2*i+1,a=new Int32Array(t),c=new Int32Array(t);for(let h=0;h<t;h++)a[h]=((h-i)%t+t)%t,c[h]=(h+i+1)%t;for(let h=0;h<e;h++){const d=h*t;let f=0;for(let p=-i;p<=i;p++)f+=n[d+(p%t+t)%t];for(let p=0;p<t;p++)s[d+p]=f/o,f-=n[d+a[p]],f+=n[d+c[p]]}const l=new Int32Array(e),u=new Int32Array(e);for(let h=0;h<e;h++)l[h]=((h-i)%e+e)%e*t,u[h]=(h+i+1)%e*t;for(let h=0;h<t;h++){let d=0;for(let f=-i;f<=i;f++)d+=s[(f%e+e)%e*t+h];for(let f=0;f<e;f++)r[f*t+h]=d/o,d-=s[l[f]+h],d+=s[u[f]+h]}return r}function H2(n,t,e=1.5,i=null){const s=i??n.length/t,r=new Uint8Array(t*s*4),o=e/8,a=new Int32Array(t),c=new Int32Array(t);for(let l=0;l<t;l++)a[l]=(l-1+t)%t,c[l]=(l+1)%t;for(let l=0;l<s;l++){const u=(l-1+s)%s*t,h=l*t,d=(l+1)%s*t;let f=h*4;for(let p=0;p<t;p++,f+=4){const _=a[p],g=c[p],m=n[u+_],v=n[u+p],M=n[u+g],S=n[h+_],A=n[h+g],w=n[d+_],E=n[d+p],T=n[d+g],N=M+2*A+T-(m+2*S+w),x=w+2*E+T-(m+2*v+M),y=-N*o,R=x*o,C=1/Math.sqrt(y*y+R*R+1);r[f]=(y*C*.5+.5)*255+.5,r[f+1]=(R*C*.5+.5)*255+.5,r[f+2]=(C*.5+.5)*255+.5,r[f+3]=255}}return r}function Yn(n,t,e=1.5,i=null){const s=i??n.length/t;return ku(new Do(em(H2(n,t,e,s),t,s)),!1)}function em(n,t,e){const i=Zp(t,e),s=i.getContext("2d"),r=s.createImageData(t,e);return r.data.set(n),s.putImageData(r,0,0),i}function B2(n,t,e,i,s=null){const o=n*(s??n),a=new Uint8Array(o*4);for(let c=0,l=0;c<o;c++,l+=4){const u=t?t[c]:1,h=e?e[c]:.85,d=i?i[c]:0;a[l]=(u<0?0:u>1?1:u)*255+.5,a[l+1]=(h<0?0:h>1?1:h)*255+.5,a[l+2]=(d<0?0:d>1?1:d)*255+.5,a[l+3]=255}return a}function Xe(n,t,e,i,s=null){const r=s??n;return ku(new Do(em(B2(n,t,e,i,r),n,r)),!1)}const Hu={},po=new Map;let nm=null;function De(n,t){Hu[n]=t}const G2=n=>{const t=Object.keys(n).sort();return t.length?t.map(e=>e+"="+JSON.stringify(n[e])).join(","):""};function us(n,t=null,e={}){const i=Hu[n];if(!i)throw new Error(`Textures: no recipe named '${n}'`);const s=G2(e),r=s?n+"#"+s:n;if(po.has(r))return po.get(r);const o=t||(nm||new Oo("textures")).child("tex."+r),a=i(o,e);return a.name=n,po.set(r,a),a}function W2(){var n,t;for(const e of po.values()){for(const i of["map","normalMap","ormMap"])(t=(n=e[i])==null?void 0:n.dispose)==null||t.call(n);if(e.maps)for(const i of e.maps)i.dispose()}po.clear(),Jp=0,nm=null}Fu(W2);const dl={blackbutt:{base:13214581,dark:10122054,rough:.4},spottedGum:{base:11040332,dark:8015662,rough:.38},jarrah:{base:9061685,dark:6040352,rough:.44},tasOak:{base:14072722,dark:11111779,rough:.42},pine:{base:14467213,dark:11571294,rough:.5}};De("timberFloor",(n,t={})=>{const o=1.9500000000000002,a=1024/o,c=1024/15,l=Math.max(2,Math.round(.004*a)),u=t.species||n.pick(Object.keys(dl)),h=dl[u]||dl.blackbutt,d=Ci(1024,1024);Bs(d,Si(h.dark,.72));const f=bi(h.dark),p=Si(h.base,1.25),_=[];for(let w=0;w<15;w++){const E=w*c+l/2,T=(w+1)*c-l/2,N=Si(h.base,1+n.range(-.06,.06),n.range(-3,3));qn(d,E,0,T,1024,N);const x=Math.round(n.range(.15,.85)*1024);_.push(x),qn(d,E,x,T,x+2,Si(h.dark,.8),.85),qn(d,E,x-2,T,x,p,.25);const y=n.int(28,60);for(let R=0;R<y;R++){const C=n.range(E+1,T-1),O=n.range(1.5,4),k=1024/n.int(2,5),L=n.range(0,Math.PI*2),D=n.range(2,3),F=n.range(.04,.12),X=n.chance(.25)?p:f;Qp(d,C,O,k,L,D,X,F)}if(n.chance(.2)){const R=n.range(204.8,819.2),C=n.range(60,160),O=n.range(E+4,T-4);for(let k=0;k<n.int(2,4);k++){const L=(k+1)*n.range(3,7),D=[];for(let F=0;F<=16;F++){const X=F/16;D.push([O+(X-.5)*2*L,R-C*(1-(X-.5)**2*4)])}K0(d,D,2,f,.06)}}}const g=he(n,512,{p0:64,octaves:3}),m=new Float32Array(512*512),v=new Float32Array(512*512),M=new Float32Array(512*512),S=512/15,A=l*512/1024;for(let w=0;w<512;w++)for(let E=0;E<512;E++){const T=w*512+E,N=Math.floor(E/S),x=E-N*S,y=x<A/2||x>S-A/2,R=w*1024/512,C=_[N],O=R>=C-1&&R<=C+2,k=y||O;v[T]=k?.15:.75,m[T]=He(h.rough+(k?.1:0)+(g[T]-.5)*.1),M[T]=k?.72:1}return{map:Li(d),normalMap:Yn(tm(v,512,512,1),512,1.2),ormMap:Xe(512,M,m,null),uvScale:[o,o],normalScale:.5,species:u,tinted:!1}});De("plasterWall",(n,t={})=>{const s=t.rough??.88,r=he(n,256,{p0:64,octaves:3,gain:.45}),o=new Float32Array(256*256),a=.4*256/2;for(let c=0;c<256;c++)for(let l=0;l<256;l++){const u=c*256+l;let h=s+(r[u]**1.5-.5)*.1;t.ceiling||(h+=Math.cos(l/a*Math.PI*2)*.02),o[u]=He(h)}return{ormMap:Xe(256,null,o,null),uvScale:[2,2],normalScale:0,tinted:!0}});De("plasterCeiling",n=>Hu.plasterWall(n,{rough:.93,ceiling:!0}));De("paintedJoinery",n=>{const i=he(n,256,{p0:64,octaves:3}),s=new Float32Array(256*256);for(let r=0;r<256;r++)for(let o=0;o<256;o++){const a=r*256+o;s[a]=He(.42+(i[a]-.5)*.06+Math.sin(o/256*Math.PI*2*12)*.015)}return{ormMap:Xe(256,null,s,null),uvScale:[1,1],normalScale:0,tinted:!0}});De("carpetPile",n=>{const i=Ci(512,512);Bs(i,[1,1,1]);const s=he(n,512,{p0x:64,p0y:192,octaves:3,gain:.5}),r=i.d;for(let c=0;c<512;c++)for(let l=0;l<512;l++){const u=c*512+l,h=Math.cos(c/256*Math.PI*2)*.03,d=He(.9+(s[u]-.5)*.16+h);r[u*3]=d,r[u*3+1]=d,r[u*3+2]=d}for(let c=0;c<1200;c++){const l=n.pick([[1.1,0],[.78,8],[.92,-10]]),u=Si(16777215,l[0],l[1],1);if(l[1]!==0){const h=n.range(0,1);u[0]=u[0]*(.94+h*.12),u[2]=u[2]*(1.06-h*.12)}No(i,n.range(0,512),n.range(0,512),n.range(1,2),u,.25)}const o=he(n,512,{p0x:43,p0y:128,octaves:3}),a=new Float32Array(512*512);for(let c=0;c<a.length;c++)a[c]=He(.92+(o[c]-.5)*.06);return{map:Li(i),normalMap:Yn(o,512,.6),ormMap:Xe(512,null,a,null),uvScale:[1,1],normalScale:.7,tinted:!0}});De("ceramicTile",(n,t={})=>{const i=t.tile??.3,s=2,r=i*s,o=Math.max(2,Math.round(.003*512/r)),a=3,c=512/s,l=bi(12104358),u=[];for(let g=0;g<s*s;g++)u.push({c:Si(14473423,1+n.range(-.03,.03),n.range(-2,2)),g:n.range(-1,1)});const h=Ci(512,512),d=new Float32Array(512*512),f=new Float32Array(512*512),p=new Float32Array(512*512),_=o/2;for(let g=0;g<512;g++)for(let m=0;m<512;m++){const v=g*512+m,M=Math.floor(m/c),S=Math.floor(g/c),A=m-M*c,w=g-S*c,E=Math.min(A,c-A,w,c-w);if(E<_){h.d[v*3]=l[0],h.d[v*3+1]=l[1],h.d[v*3+2]=l[2],d[v]=.85,f[v]=.25,p[v]=.62;continue}const T=u[S*s+M],N=(A/c+w/c)/2,x=1.03-.06*(T.g>0?N:1-N);h.d[v*3]=He(T.c[0]*x),h.d[v*3+1]=He(T.c[1]*x),h.d[v*3+2]=He(T.c[2]*x),d[v]=.08;const y=He((E-_)/a);f[v]=.25+.75*y,p[v]=.62+.38*y}return{map:Li(h),normalMap:Yn(f,512,2),ormMap:Xe(512,p,d,null),uvScale:[r,r],normalScale:.8,tinted:!1}});De("fabricWeave",n=>{const i=Ci(256,256),s=new Float32Array(256*256),r=new Float32Array(256*256),o=128,a=new Float32Array(o*8),c=new Float32Array(o*8);for(let u=0;u<a.length;u++)a[u]=n.range(-.035,.035);for(let u=0;u<c.length;u++)c[u]=n.range(-.035,.035);const l=he(n,256,{p0:64,octaves:2});for(let u=0;u<256;u++)for(let h=0;h<256;h++){const d=u*256+h,f=(h>>1&1^u>>1&1)===0,p=h>>1,_=u>>1,g=f?a[(p*8+(u>>5&7))%a.length]:c[(_*8+(h>>5&7))%c.length],m=He((f?1.06:.94)+g+(l[d]-.5)*.06);i.d[d*3]=m,i.d[d*3+1]=m,i.d[d*3+2]=m,s[d]=f?.66:.8,r[d]=f?1:.3}return{map:Li(i),normalMap:Yn(tm(r,256,256,1),256,.8),ormMap:Xe(256,null,s,null),uvScale:[.25,.25],normalScale:.6,tinted:!0}});De("joineryTimber",n=>{const i=Ci(512,512);Bs(i,[1,1,1]);const s=he(n,512,{p0x:48,p0y:8,octaves:4}),r=i.d;for(let c=0;c<512*512;c++){const l=He(.94+(s[c]-.5)*.22);r[c*3]=l,r[c*3+1]=l,r[c*3+2]=l}const o=Si(16777215,.72);for(let c=0;c<220;c++){const l=n.range(0,512),u=n.range(2,6),h=512/n.int(1,2),d=n.range(0,Math.PI*2);Qp(i,l,u,h,d,n.range(2,3.5),o,n.range(.03,.09))}const a=new Float32Array(512*512);for(let c=0;c<a.length;c++)a[c]=He(.55+(s[c]-.5)*.08);return{map:Li(i),ormMap:Xe(512,null,a,null),uvScale:[1,1],normalScale:0,tinted:!0}});De("vinylSheet",n=>{const i=Ci(512,512);Bs(i,14209732);const s=[13222578,15131093,11906460,14472902].map(bi);for(let c=0;c<3e3;c++)No(i,n.range(0,512),n.range(0,512),n.range(1,3),n.pick(s),.35);const r=he(n,512,{p0:32,octaves:3}),o=new Float32Array(512*512);for(let c=0;c<o.length;c++)o[c]=He(.28+(r[c]-.5)*.12);const a={w:512,h:512,d:new Float32Array(512*512*3)};for(let c=0;c<12;c++){const l=n.range(0,512),u=n.range(0,512),h=n.range(40,120),d=n.range(0,Math.PI*2),f=n.range(.6,2.2),p=[];for(let _=0;_<=24;_++){const g=d+f*(_/24);p.push([l+Math.cos(g)*h,u+Math.sin(g)*h])}K0(i,p,n.range(2,4),Si(14209732,.88),.3),K0(a,p,n.range(2,4),[1,1,1],1)}for(let c=0;c<o.length;c++)o[c]=He(o[c]+a.d[c*3]*.15);return{map:Li(i),ormMap:Xe(512,null,o,null),uvScale:[1,1],normalScale:0,tinted:!1}});De("laminateBench",n=>{const s=Ci(512,512);Bs(s,Bn.benchtop);const r=[9274743,14077886,7235417].map(bi);for(let l=0;l<2e3;l++)No(s,n.range(0,512),n.range(0,512),n.range(1,2.5),n.pick(r),.3);const o=new Float32Array(512*512);for(let l=0;l<o.length;l++)o[l]=.28;const a=Math.max(2,Math.round(.006*512/.6)),c=Si(Bn.benchtop,.82);for(let l=0;l<512;l++)if(Math.min(l,512-l)<a)for(let h=0;h<512;h++)zu(s,h,l,c,.85),o[l*512+h]=.45;return{map:Li(s),ormMap:Xe(512,null,o,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});De("ceilingGrid",n=>{const s=Ci(512,512);Bs(s,15526370);const r=Math.max(2,Math.round(.015*512/1.2)),o=Math.max(2,Math.round(.015*512/.6)),a=bi(14210509),c=bi(12434098),l=he(n,512,{p0:64,octaves:2}),u=new Float32Array(512*512);for(let h=0;h<512;h++)for(let d=0;d<512;d++){const f=h*512+d,p=Math.min(d,512-d),_=Math.min(h,512-h);if(p<r/2||_<o/2){const v=p>=r/2-2&&p<r/2||_>=o/2-2&&_<o/2?c:a;s.d[f*3]=v[0],s.d[f*3+1]=v[1],s.d[f*3+2]=v[2],u[f]=.55}else{const m=1+(l[f]-.5)*.04;s.d[f*3]*=m,s.d[f*3+1]*=m,s.d[f*3+2]*=m,u[f]=.9}}return{map:Li(s),ormMap:Xe(512,null,u,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});De("applianceEnamel",n=>{const i=he(n,256,{p0:64,octaves:3}),s=new Float32Array(256*256);for(let r=0;r<s.length;r++)s[r]=He(.3+(i[r]-.5)*.04);return{ormMap:Xe(256,null,s,null),uvScale:[1,1],normalScale:0,tinted:!0}});De("metalBrushed",n=>{const i=new Float32Array(65536),s=new Float32Array(256*256),r=he(n,256,{p0x:8,p0y:256,octaves:2});for(let o=0;o<256;o++){const a=n.range(-.1,.1);for(let c=0;c<256;c++){const l=o*256+c;i[l]=He(.35+a*.6+(r[l]-.5)*.1)}}return{ormMap:Xe(256,null,i,s),uvScale:[.4,.4],normalScale:0,tinted:!0}});De("quiltFolds",n=>{const i=[],s=n.int(5,9);for(let d=0;d<s;d++)i.push({a:n.range(.4,1),c:n.range(.05,.95),w:n.range(.06,.14)});const r=d=>{let f=0;for(const p of i)f+=p.a*Math.exp(-(((d-p.c)/p.w)**2));return f+=.5*Math.exp(-((d/.04)**2))+.5*Math.exp(-(((1-d)/.04)**2)),f};let o=1/0,a=-1/0;for(let d=0;d<=256;d++){const f=r(d/256);f<o&&(o=f),f>a&&(a=f)}const c=a-o||1,l=d=>(r(He(d))-o)/c,u=Ci(512,256),h=new Float32Array(512*256);for(let d=0;d<512;d++){const f=l(d/511),p=.9+.1*f;for(let _=0;_<256;_++){const g=_*512+d;u.d[g*3]=p,u.d[g*3+1]=p,u.d[g*3+2]=p,h[g]=f}}return{map:j0(Li(u)),normalMap:j0(Yn(h,512,3,256)),uvScale:null,normalScale:1,field:l,folds:i,tinted:!0}});De("pictureArt",n=>{const i=[[14272936,10251087,4148050,15130057],[8361635,14213090,3095106,12820586],[11056266,15196880,6056775,9067068],[13609376,8015698,15722204,3814198],[9415096,15788760,4479587,12153919]],s=[];for(let r=0;r<5;r++){const o=i[r].map(bi),a=Ci(256,256);Bs(a,o[n.int(0,3)]);const c=n.int(0,2);if(c===0){let u=0;for(;u<256;){const h=n.int(12,48);qn(a,0,u,256,Math.min(256,u+h),o[n.int(0,3)],n.range(.5,1)),u+=h}}else if(c===1)for(let u=0;u<n.int(5,11);u++){const h=n.range(0,179.2),d=n.range(0,256*.7);qn(a,h,d,h+n.range(30,110),d+n.range(30,110),o[n.int(0,3)],n.range(.55,.95))}else{const u=n.range(115.2,174.08);qn(a,0,0,256,u,o[0],1),qn(a,0,u,256,256,o[2],1);for(let h=0;h<n.int(3,7);h++){const d=n.range(u-40,u+40);qn(a,0,d,256,d+n.range(3,10),o[n.int(0,3)],n.range(.3,.7))}No(a,n.range(256*.2,256*.8),n.range(20,u-20),n.range(12,26),o[3],.9)}const l=Si(16777215,.97);qn(a,0,0,256,6,l),qn(a,0,250,256,256,l),qn(a,0,0,6,256,l),qn(a,250,0,256,256,l),s.push(j0(Li(a)))}return{maps:s,map:s[0],uvScale:null,normalScale:0,prints:5,tinted:!1}});const V2={wall:{recipe:"plasterWall",r:1,m:0,cast:!0,tint:!0},wallWet:{recipe:"ceramicTile",r:1,m:0,cast:!0,tint:!1},ceiling:{recipe:"plasterCeiling",r:1,m:0,cast:!1,tint:!0},trim:{recipe:"paintedJoinery",r:1,m:0,cast:!0,tint:!0},doorLeaf:{recipe:"paintedJoinery",r:1,m:0,cast:!0,tint:!0},floorTimber:{recipe:"timberFloor",r:1,m:0,cast:!1,tint:!1},carpet:{recipe:"carpetPile",r:1,m:0,cast:!1,tint:!0},vinyl:{recipe:"vinylSheet",r:1,m:0,cast:!1,tint:!1},tile:{recipe:"ceramicTile",r:1,m:0,cast:!1,tint:!1},joinery:{recipe:"joineryTimber",r:1,m:0,cast:!0,tint:!0},fabric:{recipe:"fabricWeave",r:1,m:0,cast:!0,tint:!0},bedding:{recipe:"fabricWeave",r:1,m:0,cast:!0,tint:!0},bench:{recipe:"laminateBench",r:1,m:0,cast:!0,tint:!1},appliance:{recipe:"applianceEnamel",r:1,m:0,cast:!0,tint:!0},metal:{recipe:"metalBrushed",r:1,m:1,cast:!0,tint:!0},chrome:{recipe:null,r:.18,m:0,cast:!0,tint:!1},ceramic:{recipe:null,r:.12,m:0,cast:!0,tint:!1},screen:{recipe:null,r:.08,m:0,cast:!1,tint:!1},glass:{recipe:null,r:.1,m:0,cast:!1,tint:!1,alpha:.28},ceilingGrid:{recipe:"ceilingGrid",r:1,m:0,cast:!1,tint:!1},quilt:{recipe:"quiltFolds",r:.8,m:0,cast:!0,tint:!0},artwork:{recipe:"pictureArt",r:.55,m:0,cast:!1,tint:!1}},mr=new Map;function Hi(n,t=16777215,e=null,i={}){const s=V2[n];if(!s)throw new Error(`Surfaces: no surface named '${n}'`);const r=Object.keys(i).sort().map(u=>u+"="+JSON.stringify(i[u])).join(","),o=n+"|"+t+"|"+r;if(mr.has(o))return mr.get(o);const a={color:t,roughness:s.r,metalness:s.m,vertexColors:!0};s.alpha!==void 0&&(a.transparent=!0,a.opacity=s.alpha,a.depthWrite=!1);const c=u=>s.alpha!==void 0?Po(u):u;if(s.recipe){const{print:u,...h}=i,d=Object.keys(h).sort().map(m=>m+"="+JSON.stringify(h[m])).join(","),f=e?e.child("tex."+s.recipe+(d?"#"+d:"")):null,p=us(s.recipe,f,h),_=p.maps?p.maps[Math.min(p.maps.length-1,u??0)]:p.map;if(_&&(a.map=_),p.normalMap){a.normalMap=p.normalMap;const m=p.normalScale??1;a.normalScale=new Bt(m,m)}p.ormMap?(a.aoMap=p.ormMap,a.roughnessMap=p.ormMap,a.aoMapIntensity=1,a.roughness=1,s.m===1&&(a.metalnessMap=p.ormMap,a.metalness=1)):a.roughness=s.r===1?.85:s.r;const g=c(new un(a));return p.uvScale&&(g.userData.uvScale=p.uvScale),g.userData.cast=s.cast,g.userData.surface=n,mr.set(o,g),g}const l=c(new un(a));return l.userData.cast=s.cast,l.userData.surface=n,mr.set(o,l),l}function q2(){for(const n of mr.values())n.dispose();mr.clear()}Fu(q2);const $t={wallThick:.17,storey:2.65,cornice:.09,doorH:2.05,winSill:.95,winHead:2.15,skirtProud:.018,archW:.09,archProud:.018,archQuirk:.006,corniceGirth:.075,reveal:.019,skirtCommercial:.1,leafT:.035,switchH:1.05,gpoH:.3},ii={thin:.002,furniture:.003,joinery:.005},Ld=new Set;function Z0(n,t,e={}){if(e.material)return e.material;try{return Hi(n,t,null,e.recipe||{})}catch(i){Ld.has(n)||(Ld.add(n),console.error(`RoomKit: surface '${n}' unavailable, falling back to flat colour`,i))}return T2(t,e)}function _t(n,t,e,i,s,r={}){var l;const o=Z0(n,s,r),a=r.chamfer?Hs(t,e,i,r.chamfer):r.graded?X2(t,e,i,r.gradeEdge):new hn(Math.max(t,.001),Math.max(e,.001),Math.max(i,.001)),c=new Pt(a,o);return c.castShadow=r.cast??((l=o.userData)==null?void 0:l.cast)??!1,c.receiveShadow=!0,c}const Cr=new Map,hs=n=>Math.round(n*1e3);function im(n,t,e){const i=new Float32Array(e*2);for(let s=0;s<e;s++){const r=s*3,o=Math.abs(t[r]),a=Math.abs(t[r+1]),c=Math.abs(t[r+2]);a>=o&&a>=c?(i[s*2]=n[r],i[s*2+1]=n[r+2]):o>=c?(i[s*2]=n[r+2],i[s*2+1]=n[r+1]):(i[s*2]=n[r],i[s*2+1]=n[r+1])}return i}function sm(n){const t=n.length*3,e=new Float32Array(t*3),i=new Float32Array(t*3);let s=0;for(const o of n){const[a,c,l]=o;let u=c[0]-a[0],h=c[1]-a[1],d=c[2]-a[2],f=l[0]-a[0],p=l[1]-a[1],_=l[2]-a[2],g=h*_-d*p,m=d*f-u*_,v=u*p-h*f;const M=(a[0]+c[0]+l[0])/3,S=(a[1]+c[1]+l[1])/3,A=(a[2]+c[2]+l[2])/3;let w=c,E=l;g*M+m*S+v*A<0&&(w=l,E=c,g=-g,m=-m,v=-v);const T=Math.hypot(g,m,v)||1;g/=T,m/=T,v/=T;for(const N of[a,w,E])e[s*3]=N[0],e[s*3+1]=N[1],e[s*3+2]=N[2],i[s*3]=g,i[s*3+1]=m,i[s*3+2]=v,s++}const r=new Sn;return r.setAttribute("position",new pe(e,3)),r.setAttribute("normal",new pe(i,3)),r.setAttribute("uv",new pe(im(e,i,t),2)),r.setAttribute("color",new pe(new Float32Array(t*3).fill(1),3)),r}function Hs(n,t,e,i=ii.furniture){n=Math.max(n,.001),t=Math.max(t,.001),e=Math.max(e,.001);const s=Math.min(i,Math.min(n,t,e)/2-5e-4);if(!(s>2e-4))return new hn(n,t,e);const r=`c${hs(n)},${hs(t)},${hs(e)},${hs(s)}`,o=Cr.get(r);if(o)return o;const a=n/2,c=t/2,l=e/2,u=[a-s,c-s,l-s],h=[a,c,l],d=(m,v)=>[(v===0?h[0]:u[0])*m[0],(v===1?h[1]:u[1])*m[1],(v===2?h[2]:u[2])*m[2]],f=[];for(const m of[-1,1])for(const v of[-1,1])for(const M of[-1,1])f.push([m,v,M]);const p=[],_=(m,v,M,S)=>{p.push([m,v,M]),p.push([m,M,S])};for(let m=0;m<3;m++){const v=(m+1)%3,M=(m+2)%3;for(const S of[-1,1]){const A=(w,E)=>{const T=[0,0,0];return T[m]=S,T[v]=w,T[M]=E,d(T,m)};_(A(-1,-1),A(1,-1),A(1,1),A(-1,1))}}for(let m=0;m<3;m++)for(let v=m+1;v<3;v++){const M=3-m-v;for(const S of[-1,1])for(const A of[-1,1]){const w=[0,0,0];w[m]=S,w[v]=A,w[M]=-1;const E=[0,0,0];E[m]=S,E[v]=A,E[M]=1,_(d(w,m),d(w,v),d(E,v),d(E,m))}}for(const m of f)p.push([d(m,0),d(m,1),d(m,2)]);const g=sm(p);return Cr.set(r,g),g}const ua=[0,.05,.18,.55];function Cd(n,t=.12){const e=t/.12,i=[0];for(let s=1;s<ua.length;s++){const r=ua[s]*e;r<n/2-1e-4&&i.push(r)}i.push(n/2);for(let s=ua.length-1;s>=1;s--){const r=n-ua[s]*e;r>n/2+1e-4&&i.push(r)}return i.push(n),i}function Id(n,t,e,i,s,r){const o=(a,c)=>[t[0]+e[0]*a+i[0]*c,t[1]+e[1]*a+i[1]*c,t[2]+e[2]*a+i[2]*c];for(let a=0;a<s.length-1;a++)for(let c=0;c<r.length-1;c++){const l=o(s[a],r[c]),u=o(s[a+1],r[c]),h=o(s[a+1],r[c+1]),d=o(s[a],r[c+1]);n.push([l,u,h]),n.push([l,h,d])}}function X2(n,t,e,i=.12){const s=`g${hs(n)},${hs(t)},${hs(e)},${hs(i)}`,r=Cr.get(s);if(r)return r;const o=e<=n&&e<=t?2:t<=n?1:0,[a,c,l]=o===2?[n,t,e]:o===1?[n,e,t]:[e,t,n],u=a/2,h=c/2,d=l/2,f=Cd(a,i),p=Cd(c,i),_=[];Id(_,[-u,-h,d],[1,0,0],[0,1,0],f,p),Id(_,[-u,-h,-d],[1,0,0],[0,1,0],f,p);const g=(v,M,S,A)=>{_.push([v,M,S]),_.push([v,S,A])};g([u,-h,-d],[u,h,-d],[u,h,d],[u,-h,d]),g([-u,-h,-d],[-u,h,-d],[-u,h,d],[-u,-h,d]),g([-u,h,-d],[u,h,-d],[u,h,d],[-u,h,d]),g([-u,-h,-d],[u,-h,-d],[u,-h,d],[-u,-h,d]);const m=sm(_);if(o===1?m.rotateX(-Math.PI/2):o===0&&m.rotateY(Math.PI/2),o!==2){const v=m.attributes.position.array,M=m.attributes.normal.array;m.setAttribute("uv",new pe(im(v,M,m.attributes.position.count),2))}return Cr.set(s,m),m}Fu(()=>{for(const n of Cr.values())n.dispose();Cr.clear()});class Bu{constructor(){this.group=new xe,this.colliders=[],this.doors=[],this.interactables=[],this.spots={},this.lights=[],this.faces={},this.decals=[]}add(t){return this.group.add(t),t}solid(t,e,i,s,r,o,a=!1){this.colliders.push({min:new B(t-s/2,e,i-o/2),max:new B(t+s/2,e+r,i+o/2),walkable:a})}spot(t,e,i,s){return this.spots[t]=new B(e,i,s),this.spots[t]}interact(t,e,i,s,r,o,a={},c=1.8){this.interactables.push({id:t,label:e,pos:new B(i,s,r),action:o,data:a,radius:c})}light(t,e,i,s=16770756,r=9,o=13){const a=new yo(s,r,o,2);return a.position.set(t,e,i),this.group.add(a),this.lights.push(a),a}}function Y2(n,t,e,i,s,r,o=Bn.floorTimber,a={}){const c=a.thickness??.16,l=_t(a.surface??"floorTimber",i,c,s,o,{graded:!0,gradeEdge:a.gradeEdge??.12,cast:!1});return l.position.set(t,r-c/2,e),n.add(l),n.solid(t,r-c,e,i,c,s,!0),l}function $2(n,t,e,i,s,r,o=Bn.ceiling,a={}){const c=a.thickness??$t.cornice,l=_t(a.surface??"ceiling",i,c,s,o,{graded:!0,gradeEdge:a.gradeEdge??.12,cast:!1});return l.position.set(t,r+c/2,e),n.add(l),l}function j2(n,t,e,i,s=0,r={}){const o=_t("trim",.075,.115,.01,r.colour??Bn.trim,{});o.position.set(t,e,i),o.rotation.y=s,n.add(o);const a=_t("trim",.03,.055,.004,r.colour??Bn.trim,{});return a.rotation.y=s,a.position.set(t,e,i),a.translateZ(.007),n.add(a),o}function K2(n,t,e,i,s=0,r={}){const o=_t("trim",.115,.075,.01,r.colour??Bn.trim,{});return o.position.set(t,e,i),o.rotation.y=s,n.add(o),o}function sr(n,t,e,i,s,r,o={}){const a=o.margin??Math.min(Math.max(Math.min(s,r)*.3,.05),.3);let c=t-s/2-a,l=t+s/2+a,u=e-r/2-a,h=e+r/2+a;const d=t-s/2,f=t+s/2,p=e-r/2,_=e+r/2;for(const M of n.decals){if(l<=M.x0||c>=M.x1||h<=M.z0||u>=M.z1)continue;const S=Math.min(l-M.x0,M.x1-c),A=Math.min(h-M.z0,M.z1-u);if(S<=A?t<(M.x0+M.x1)/2?l=Math.max(f,Math.min(l,M.x0)):c=Math.min(d,Math.max(c,M.x1)):e<(M.z0+M.z1)/2?h=Math.max(_,Math.min(h,M.z0)):u=Math.min(p,Math.max(u,M.z1)),l>M.x0+1e-4&&c<M.x1-1e-4&&h>M.z0+1e-4&&u<M.z1-1e-4)return null}const g=l-c,m=h-u;if(g<.05||m<.05)return null;const v=new Pt(new mi(g,m),jp());return v.rotation.x=-Math.PI/2,v.position.set((c+l)/2,i+.006,(u+h)/2),n.add(v),n.decals.push({x0:c,x1:l,z0:u,z1:h}),v}new pi;function Z2(n,t,e,i){if(n.door===!1||n.leaf===!1||n.door===void 0&&n.leaf===void 0&&t<=1.005)return null;const s=n.door||{},r=t>=1.25,o=s.style??(n.leaf?"panel":r?"glazed":"panel");return{label:s.label??"door",style:o,pair:s.pair??r,auto:s.auto??!1,startsShut:s.startsShut??!0,face:s.swing??i,colour:s.colour??n.leaf??(o==="glazed"?Lr.metal:e),surfaceName:s.surface??n.leafSurface??"doorLeaf",triggerR:s.triggerR,dwell:s.dwell,leaves:[]}}function Me(n,t,e,i,s,r={}){const{y0:o=0,height:a=$t.storey,thickness:c=$t.wallThick,colour:l=Bn.wall,innerColour:u=null,outerColour:h=null,openings:d=[],skirting:f=!0,skirtStyle:p="timber",cornice:_=!0,corniceStyle:g="cove",autoServices:m=!0,inner:v=null,surface:M="wall",trimColour:S=Bn.trim,graded:A=!0,name:w=null}=r,E=u??h,T=i-t,N=s-e,x=Math.hypot(T,N);if(x<.01)return;const y=T/x,R=N/x,C=Math.atan2(-R,y),O=-R,k=y,L=c/2,D=(U,Y,J,ut=0,lt=0)=>(U.position.set(t+y*Y+O*ut,J,e+R*Y+k*ut),U.rotation.y=C+lt,n.add(U),U),F=(U,Y,J,ut={})=>_t("trim",U,Y,J,ut.colour??S,ut),X=v===null?[-1,1]:[v],K=(U,Y,J,ut)=>{const lt=Y-U,ht=ut-J;if(lt<=.005||ht<=.005)return;const gt=(U+Y)/2,vt=_&&g==="shadowline"&&Math.abs(ut-(o+a))<.02,H=vt?ht-.01:ht,se=lt>=1.2&&H>=1.2,Ct=_t(M,lt,H,c,l,{graded:A&&se,cast:!0});if(D(Ct,gt,J+H/2),vt){const I=_t(M,lt,.01,c-.02,l,{});D(I,gt,ut-.005)}const Nt=Math.abs(y)*lt+Math.abs(R)*c,It=Math.abs(R)*lt+Math.abs(y)*c,rt=t+y*gt,ot=e+R*gt;if(n.solid(rt,J,ot,Nt,ht,It),E)for(const I of X){const b=_t(M,lt,H,.02,E,{graded:A&&se});D(b,gt,J+H/2,I*(L+.01))}if(f&&p&&J-o<.02)if(p==="commercial"){const I=F(lt,$t.skirtCommercial,c+.04,{colour:Bn.tileFloor,chamfer:ii.thin});D(I,gt,J+$t.skirtCommercial/2)}else{const I=[[.112,$t.skirtProud,0,ii.thin],[.018,.014,.112,0],[.008,.008,.13,0]];for(const[b,G,tt,at]of I){const nt=F(lt,b,c+G*2,{chamfer:at});D(nt,gt,J+tt+b/2)}}if(_&&g==="cove"&&Math.abs(ut-(o+a))<.02){const I=$t.corniceGirth/Math.SQRT2;for(const b of X){const G=F(lt,$t.corniceGirth,.008,{chamfer:0});D(G,gt,ut-I/2,b*(L+I/2)),G.rotation.order="YXZ",G.rotation.set(-b*Math.PI/4,C,0)}}},it=(U,Y,J,ut)=>{const lt=ut-J;for(const gt of[-1,1]){const vt=F($t.reveal,lt,c,{});D(vt,U+gt*(Y/2-$t.reveal/2),J+lt/2)}const ht=F(Y,$t.reveal,c,{});D(ht,U,ut-$t.reveal/2)},dt=(U,Y,J,ut)=>{const lt=Y-2*$t.reveal,ht=lt/2+$t.archQuirk,gt=ut+$t.archQuirk;for(const vt of[-1,1])for(const H of[-1,1]){const se=F($t.archW,gt-J+.002,$t.archProud,{chamfer:ii.joinery});if(D(se,U+vt*(ht+$t.archW/2),J+(gt-J)/2,H*(L+$t.archProud/2)),J-o<.02){const Ct=F($t.archW+.02,.15,.032,{});D(Ct,U+vt*(ht+$t.archW/2),J+.075,H*(L+.016))}}for(const vt of[-1,1]){const H=F(lt+2*($t.archW+$t.archQuirk),$t.archW,$t.archProud,{chamfer:ii.joinery});D(H,U,gt+$t.archW/2,vt*(L+$t.archProud/2))}},Q=[...d].sort((U,Y)=>U.at-Y.at);let z=0;for(const U of Q){const Y=U.width/2,J=Math.max(0,U.at-Y),ut=Math.min(x,U.at+Y),lt=U.kind==="window"?U.sill??$t.winSill:0,ht=U.kind==="window"?U.head??$t.winHead:U.head??(U.kind==="arch"?2.25:$t.doorH);if(K(z,J,o,o+a),lt>0&&K(J,ut,o,o+lt),K(J,ut,o+ht,o+a),z=ut,U.kind==="window"){const gt=ht-lt,vt=o+(lt+ht)/2,H=v===null?1:-v,se=new Pt(new hn(U.width-2*$t.reveal-.002,gt-.002,.006),L2());se.castShadow=!1,se.receiveShadow=!0,D(se,U.at,vt,H*.015);const Ct=new Pt(new hn(U.width-2*$t.reveal-.002,gt-.002,.006),C2());Ct.castShadow=!1,Ct.receiveShadow=!0,D(Ct,U.at,vt,-H*.015),it(U.at,U.width,o+lt,o+ht),dt(U.at,U.width,o+lt,o+ht);const Nt=Math.max(1,Math.round((U.width-2*$t.reveal)/.9)),It=U.width-2*$t.reveal;for(let ot=1;ot<Nt;ot++){const I=F(.04,gt,.05,{chamfer:ii.joinery});D(I,U.at-It/2+It/Nt*ot,vt)}const rt=U.restrictor?Math.min(o+1.7,o+ht-.1):o+lt+gt/3;if(gt>.55){const ot=F(It,.04,.05,{chamfer:ii.joinery});D(ot,U.at,rt)}if(U.restrictor){const ot=F(.06,.02,.03,{colour:Bn.metalDull,chamfer:ii.thin});D(ot,U.at+It/4,o+lt+.02,0)}for(const ot of X){const I=F(U.width+.09,.025,c/2+.03,{chamfer:ii.joinery});D(I,U.at,o+lt-.0125,ot*(c/4+.015))}if(v!==null){const ot=F(U.width+.12,.04,.09,{chamfer:ii.joinery});D(ot,U.at,o+lt-.02,-v*(L+.045)),ot.rotation.order="YXZ",ot.rotation.set(v*.1,C,0)}if(U.curtains){J2(n,t+y*U.at,o+ht+.15,e+R*U.at,C,U.width+.4,{offset:(v??1)*(L+.09)});const ot=[.3,.22],I=v??1;for(const G of[-1,1]){const tt=ot[G<0?0:1],at=U.width*tt,nt=6;for(let yt=0;yt<nt;yt++){const ft=at/nt,Mt=_t("fabric",ft*1.35,gt+.35,.045,U.curtains,{cast:!0}),Jt=U.at+G*(U.width/2-at+(yt+.5)*ft);D(Mt,Jt,vt+.1,I*(L+.075),yt%2?.175:-.175)}}const b=F(U.width+.44,.12,.09,{chamfer:ii.joinery});D(b,U.at,o+ht+.21,I*(L+.055))}}else if((U.kind==="door"||U.kind==="arch")&&(it(U.at,U.width,o,o+ht),dt(U.at,U.width,o,o+ht),U.kind==="door")){const gt=U.swing??1,vt=U.width/2-$t.reveal,H=L-.045;for(const Nt of[-1,1]){const It=F(.013,ht-.02,.03,{});D(It,U.at+Nt*(vt-.0055),o+(ht-.02)/2,gt*H)}const se=F(U.width-2*$t.reveal,.014,.03,{});D(se,U.at,o+ht-.025,gt*H);const Ct=Z2(U,U.width,S,gt);if(Ct){const Nt=H+.015+$t.leafT,It=ht-$t.reveal-.02,rt=Ct.pair?vt-.006:2*vt-.006,ot=Ct.face,I=Ct.pair?[1,-1]:[ot];for(const b of I){const G=U.at+b*(vt-.003),tt=ot*Nt;Ct.leaves.push({hx:t+y*G+O*tt,hz:e+R*G+k*tt,y:o,baseRot:C,phiOpen:b*ot*Math.PI/2,leafRot:b>0?0:Math.PI,dx:-b*rt/2,dz:-ot*$t.leafT/2,lw:rt,lh:It});for(const at of[.15,1.02,1.89]){if(at>It-.1)continue;const nt=_t("chrome",.016,.1,.016,Lr.metal,{chamfer:.001,cast:!1});D(nt,G,o+.015+at,tt)}}Ct.centre={x:t+y*U.at,z:e+R*U.at},Ct.y0=o,n.doors.push(Ct)}}if(m&&U.kind==="door"){const gt=-(U.swing??1);for(const vt of[-1,1])j2(n,t+y*(U.at+gt*(U.width/2+$t.archW+.15))+O*vt*(L+.006),o+$t.switchH,e+R*(U.at+gt*(U.width/2+$t.archW+.15))+k*vt*(L+.006),C+(vt<0?Math.PI:0))}}if(K(z,x,o,o+a),m&&v!==null&&o+$t.gpoH<o+a){const U=Math.max(1,Math.floor(x/3.5));for(let Y=0;Y<U;Y++){const J=(Y+.5)*(x/U);Q.some(ut=>Math.abs(ut.at-J)<ut.width/2+.25)||K2(n,t+y*J+O*v*(L+.006),o+$t.gpoH,e+R*J+k*v*(L+.006),C+(v<0?Math.PI:0))}}w&&(n.faces[w]={a:{x:t,z:e},b:{x:i,z:s},u:{x:y,z:R},n:{x:O,z:k},angle:C,thickness:c,y0:o,height:a,length:x,face:U=>({x:(t+i)/2+O*U*(c/2),z:(e+s)/2+k*U*(c/2),nx:O*U,nz:k*U,rotY:C+(U<0?Math.PI:0)})})}function J2(n,t,e,i,s=0,r=1.6,o={}){const a=new xe,c=new Pt(new ne(.0125,.0125,r,8),Z0("chrome",o.colour??Lr.metalDark));c.rotation.z=Math.PI/2,a.add(c);for(const l of[-1,1]){const u=new Pt(new Yi(.0175,8,6),Z0("chrome",o.colour??Lr.metalDark));u.position.x=l*r/2,a.add(u)}return a.rotation.y=s,a.position.set(t,e,i),a.translateZ(o.offset??0),n.add(a),a}function Gu(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new Sn;let l=0;for(let u=0;u<n.length;++u){const h=n[u];let d=0;if(e!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(t){let f;if(e)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(e){let u=0;const h=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=n[d].attributes.position.count}c.setIndex(h)}for(const u in r){const h=Dd(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][d]);const p=Dd(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}return c}function Dd(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){const u=n[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}const o=new t(r),a=new pe(o,e,i);let c=0;for(let l=0;l<n.length;++l){const u=n[l];if(u.isInterleavedBufferAttribute){const h=c/e;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<e;p++){const _=u.getComponent(d,p);a.setComponent(d+h,p,_)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}const Q2=new Set(["position","normal","uv","color"]);function Mc(n,t={}){var a,c;n.updateMatrixWorld(!0);const e=new Map,i=[],s=new Set;n.traverse(l=>{var p,_;if(l===n)return;for(let g=l.parent;g&&g!==n;g=g.parent)if(s.has(g))return;if(l.isInstancedMesh||l.userData.isSign||l.isLight){i.push(l),s.add(l);return}if(!l.isMesh||!((_=(p=l.geometry)==null?void 0:p.attributes)!=null&&_.position))return;const u=l.material.uuid;e.has(u)||e.set(u,{material:l.material,geos:[],cast:!1});const h=l.geometry.clone();h.applyMatrix4(l.matrixWorld);for(const g of Object.keys(h.attributes))Q2.has(g)||h.deleteAttribute(g);const d=h.attributes.position.count;h.attributes.uv||h.setAttribute("uv",new pe(new Float32Array(d*2),2)),h.attributes.color||h.setAttribute("color",new pe(new Float32Array(d*3).fill(1),3));const f=e.get(u);f.geos.push(h.index?h.toNonIndexed():h),f.cast=f.cast||l.castShadow});const r=t.colliders?new Za(t.colliders,1):null,o=new xe;for(const{material:l,geos:u,cast:h}of e.values()){if(!u.length)continue;const d=u.length===1?u[0]:Gu(u,!1);if(!d){console.error("bakeGroup: merge returned null (mismatched attributes)",l);continue}const f=((a=l.userData)==null?void 0:a.decal)===!0,p=(c=l.userData)==null?void 0:c.uvScale;p&&!f&&yc(d,p[0],p[1]),r&&!f&&rm(d,r);const _=new Pt(d,l);_.castShadow=f?!1:h,_.receiveShadow=!f,f&&(_.renderOrder=2),o.add(_)}for(const l of i)o.add(l);return o}function yc(n,t,e=t){const i=n.attributes.position.count,s=n.attributes.position.array,r=n.attributes.normal.array,o=new Float32Array(i*2);for(let a=0;a<i;a++){const c=a*3,l=Math.abs(r[c]),u=Math.abs(r[c+1]),h=Math.abs(r[c+2]);let d,f;u>=l&&u>=h?(d=s[c],f=s[c+2]):l>=h?(d=s[c+2],f=s[c+1]):(d=s[c],f=s[c+1]),o[a*2]=d/t,o[a*2+1]=f/e}n.setAttribute("uv",new pe(o,2))}const fl=512,Pd=1024;function Od(n,t,e){return((n+fl)*Pd+(t+fl))*Pd+(e+fl)}class Za{constructor(t,e=1){this.cell=e,this.boxes=t,this.bins=new Map;for(let i=0;i<t.length;i++){const s=t[i],r=Math.floor(s.min.x/e),o=Math.floor(s.max.x/e),a=Math.floor(s.min.y/e),c=Math.floor(s.max.y/e),l=Math.floor(s.min.z/e),u=Math.floor(s.max.z/e);for(let h=r;h<=o;h++)for(let d=a;d<=c;d++)for(let f=l;f<=u;f++){const p=Od(h,d,f);let _=this.bins.get(p);_||(_=[],this.bins.set(p,_)),_.push(i)}}this._stamp=new Int32Array(t.length),this._epoch=0,this._out=[]}near(t,e,i,s){const r=this.cell,o=this._out;o.length=0;const a=++this._epoch,c=Math.floor((t-s)/r),l=Math.floor((t+s)/r),u=Math.floor((e-s)/r),h=Math.floor((e+s)/r),d=Math.floor((i-s)/r),f=Math.floor((i+s)/r);for(let p=c;p<=l;p++)for(let _=u;_<=h;_++)for(let g=d;g<=f;g++){const m=this.bins.get(Od(p,_,g));if(m)for(let v=0;v<m.length;v++){const M=m[v];this._stamp[M]!==a&&(this._stamp[M]=a,o.push(this.boxes[M]))}}return o}}const ty=.18,ey=.55,Nd=.75,ny=.3,Ud=.55,iy=1.2;function rm(n,t){const e=t instanceof Za?t:new Za(t,1),i=Array.isArray(n)?n:[n];for(const s of i)sy(s,e)}function sy(n,t){const e=n.attributes.color;if(!e||e.itemSize!==3||e.normalized||!n.attributes.normal)return;const i=n.attributes.position.array,s=n.attributes.normal.array,r=e.array,o=n.attributes.position.count;for(let a=0;a<o;a++){const c=a*3,l=s[c],u=s[c+1],h=s[c+2],d=i[c]+l*.01,f=i[c+1]+u*.01,p=i[c+2]+h*.01;let _=0;const g=t.near(d,f,p,iy);for(let v=0;v<g.length;v++){const M=g[v],S=Math.max(M.min.x-d,0,d-M.max.x),A=Math.max(M.min.y-f,0,f-M.max.y),w=Math.max(M.min.z-p,0,p-M.max.z),E=Math.sqrt(S*S+A*A+w*w);if(E>Nd*3)continue;const T=(M.min.x+M.max.x)/2-d,N=(M.min.y+M.max.y)/2-f,x=(M.min.z+M.max.z)/2-p;l*T+u*N+h*x<=0||(_+=ey*Math.exp(-E/ty)+ny*Math.exp(-E/Nd))}const m=Math.max(Ud,1-Math.min(1-Ud,_));r[c]*=m,r[c+1]*=m,r[c+2]*=m}e.needsUpdate=!0}const et=Object.freeze({CEIL_H:3.3,FLAT_FACE:3.15,STRUCT_FACE:3.166,CANT_FACE:3.511346,CANT_LEN:1.932113,CORNER_X:1.799792,VERTEX:Object.freeze([1.835,3.251]),BAND_TOP:2.7,TILE:.9,BAY_CENTRE:2.362686,BAY_FRONT:3.171346,BAY_W:1.4,BAY_D:.34,BAY_H:2.2,RIM:1.13,PANEL_OUT:1.1,PANEL_IN:.56,PANEL_Y0:.9,PANEL_Y1:1.16,RIM_TOP:.96,DAIS_A:1.75,COFFER_IN:1.6,COFFER_OUT:2.3,SPAWN:Object.freeze([0,0,2.3]),SPAWN_YAW:Math.PI,HEX_THETA:Math.PI/6}),Ai=Object.freeze({TILE:.9,PER_TILE:1,DIA:.72,LIP_DIA:.69,COVE_DIA:.6,DISH_DIA:.51,RECESS:.055,PROUD:.006,DISC_R:.25,DISC_PROUD:.001,COLUMNS:Object.freeze([-1.35,-.45,.45,1.35]),ROWS:Object.freeze([.45,1.35,2.25]),LIT_ROW:1.35}),kt=Object.freeze({ROUNDEL:12303029,BAND:9474188,CEIL:11118498,DECK:5198935,DAIS:7765124,CONSOLE:13947592,PANEL:6973799,DARK:2764339,CHROME:13225682,JOINERY:7034951,GLOW_W:12960958,GLOW_C:12371148,GLASS:13227742}),Fd=Object.freeze({ROUNDEL:38.718,BAND:26.288,CEIL:40.657,DECK:25.752,DAIS:10.227,CONSOLE:13.965,PANEL:9.566,DARK:9.034,CHROME:4.338,JOINERY:2.8,GLOW_W:6.463,GLOW_C:2.8,GLASS:2.239}),ry=16772301,oy=1.05,ay=12376319,cy=1.25,Ua=n=>n<0?0:n>1?1:n,om=n=>n*n*(3-2*n);function Sc(n){if(!n.getAttribute("color")){const t=n.getAttribute("position").count;n.setAttribute("color",new pe(new Float32Array(t*3).fill(1),3))}return n}const En=512,Uo=En/Ai.TILE,ha=Ai.DISH_DIA/2*Uo,kd=Ai.COVE_DIA/2*Uo,pl=Ai.LIP_DIA/2*Uo,zd=Ai.DIA/2*Uo,Hd=1,ml=1+Ai.PROUD/Ai.RECESS,Bd=1.5,ly=Ai.RECESS*Uo,uy=(n,t)=>1-om(Ua((n-t+Bd*.5)/Bd));let Gd=!1;function am(){Gd||(Gd=!0,De("roundel",n=>{const t=new Float32Array(En*En),e=new Float32Array(En*En),i=new Float32Array(En*En),s=he(n,En,{p0:32,octaves:3});for(let r=0;r<En;r++)for(let o=0;o<En;o++){const a=r*En+o,c=o+.5-En/2,l=r+.5-En/2,u=Math.hypot(c,l);let h,d,f;if(u<=ha){const v=u/ha;h=0,d=.62-.2*v,f=.52}else{const v=om(Ua((u-ha)/(kd-ha)));h=v,d=.42+.36*v,f=.52+.22*v}let p,_,g;if(u<=pl)p=ml,_=1,g=.74;else if(u<=zd){const v=(u-pl)/(zd-pl);p=ml-(ml-Hd)*v,_=1,g=.74+.08*v}else p=Hd,_=1,g=.82;const m=1-uy(u,kd);t[a]=h+(p-h)*m,e[a]=d+(_-d)*m,i[a]=Ua(f+(g-f)*m+(s[a]-.5)*.06)}return{normalMap:Yn(t,En,ly),ormMap:Xe(En,e,i,null),uvScale:[Ai.TILE,Ai.TILE],normalScale:1,tinted:!0}}),De("consolePanel",n=>{const i=new Float32Array(65536),s=new Float32Array(256*256),r=he(n,256,{p0x:10,p0y:256,octaves:2}),o=he(n,256,{p0:48,octaves:3});for(let a=0;a<256;a++){const c=n.range(-.06,.06);for(let l=0;l<256;l++){const u=a*256+l;i[u]=Ua(.42+c+(r[u]-.5)*.09+(o[u]-.5)*.06)}}return{ormMap:Xe(256,null,i,s),uvScale:[.32,.32],normalScale:0,tinted:!0}}))}let gl=null;function cm(n=null){if(gl)return gl;am();for(const s of Object.keys(Fd))vc(kt[s],Fd[s]);const t={},e=us("roundel",n?n.child("tex.roundel"):null);t.ROUNDEL=new un({color:kt.ROUNDEL,roughness:1,metalness:0,normalMap:e.normalMap,normalScale:new Bt(e.normalScale,e.normalScale),aoMap:e.ormMap,roughnessMap:e.ormMap,aoMapIntensity:1,vertexColors:!0}),t.ROUNDEL.userData.uvScale=e.uvScale,t.ROUNDEL.userData.cast=!0,t.ROUNDEL.userData.surface="roundel",t.BAND=Hi("trim",kt.BAND,n),t.CEIL=Hi("ceiling",kt.CEIL,n),t.DECK=Hi("vinyl",kt.DECK,n),t.DAIS=Hi("metal",kt.DAIS,n),t.CONSOLE=Hi("appliance",kt.CONSOLE,n),t.DARK=Hi("metal",kt.DARK,n),t.CHROME=Hi("chrome",kt.CHROME,n),t.JOINERY=Hi("joinery",kt.JOINERY,n);const i=us("consolePanel",n?n.child("tex.consolePanel"):null);return t.PANEL=new un({color:kt.PANEL,roughness:1,metalness:0,aoMap:i.ormMap,roughnessMap:i.ormMap,aoMapIntensity:1,vertexColors:!0}),t.PANEL.userData.uvScale=i.uvScale,t.PANEL.userData.cast=!0,t.PANEL.userData.surface="consolePanel",t.GLOW_W=new un({color:kt.GLOW_W,roughness:.55,metalness:0,emissive:ry,emissiveIntensity:oy,vertexColors:!0}),t.GLOW_W.userData.cast=!0,t.GLOW_C=new un({color:kt.GLOW_C,roughness:.2,metalness:0,emissive:ay,emissiveIntensity:cy,vertexColors:!0}),t.GLOW_C.userData.cast=!0,t.GLASS=Po(new un({color:kt.GLASS,roughness:.1,metalness:0,transparent:!0,opacity:.3,depthWrite:!1,side:vi,vertexColors:!0})),t.GLASS.userData.cast=!1,t.SHADOW=jp(),gl=t,t}const es=Math.SQRT1_2,_l=n=>2*n*Math.tan(Math.PI/6),Yr=n=>2*Math.sqrt(3)*n*n,Wd=n=>n/Math.cos(Math.PI/6),da=7.2,Wu=.02,Os=et.BAND_TOP,rr=3.16,fa=et.BAND_TOP,xl=.03,vl=.06,hy=.026,Ml=.1,dy=.02,si=1.8,Ve=2.61,J0=.9,Ja=.045,mo=et.FLAT_FACE+Ja/2,Vd=.05,qd=3.311,or=.09,Q0=.05,Xd=3.14+Q0/2,go=.25,lm=.001,Qa=1.35,fy=3.1,yl=.2,Sl=.1,py=.006;function Vu(n){if(!n.getAttribute("color")){const t=n.getAttribute("position").count;n.setAttribute("color",new pe(new Float32Array(t*3).fill(1),3))}return n}function my(n,t,e){const i=new ne(Wd(n),Wd(n),t,6,1,!1,e).toNonIndexed();return i.computeVertexNormals(),Vu(i)}const gy=["CEIL_H","FLAT_FACE","STRUCT_FACE","CANT_FACE","CORNER_X","BAND_TOP","DAIS_A","COFFER_IN","COFFER_OUT","HEX_THETA"],_y=["ROUNDEL","BAND","CEIL","DAIS","DARK","CHROME","GLOW_W","GLOW_C"];function xy(n){for(const t of gy)if(!Number.isFinite(et[t]))throw new Error(`Shell: ROOM.${t} is not a number (got ${et[t]})`);if(!Array.isArray(et.SPAWN)||et.SPAWN.length!==3)throw new Error("Shell: ROOM.SPAWN must be [x, y, z]");if(!n)throw new Error("Shell: shell(b, P) needs the palette from roundels.js");for(const t of _y)if(!n[t]||!n[t].isMaterial)throw new Error(`Shell: palette is missing ${t}`)}function vy(n,t){var s;const e=Vu(new hn(J0,Ve,Ja).toNonIndexed());e.applyMatrix4(new jt().makeTranslation(n*.45,Ve/2,mo));const i=(s=t.ROUNDEL.userData)==null?void 0:s.uvScale;if(!i)throw new Error("Shell: P.ROUNDEL carries no uvScale — the leaf UVs cannot be projected");return yc(e,i[0],i[1]),e.applyMatrix4(new jt().makeTranslation(n*(si/2),0,mo).invert()),e.computeVertexNormals(),e}const $r=Object.freeze({H:Os,T:Wu,DISC_Y:Qa,DISC_R:go,DISC_PROUD:lm});function jr(n,t,e,i,s,r){const o=_t("wall",e,Os,Wu,kt.ROUNDEL,{material:t.ROUNDEL,cast:!0});return o.position.set(i,Os/2,s),o.rotation.y=r,n.add(o)}function Yd(n,t,e,i,s){const r=new Pt(new gs(go,40),t.GLOW_W);return r.position.set(e,Qa,i),r.rotation.y=s,r.castShadow=!1,r.receiveShadow=!1,n.add(r)}function My(n,t,e={}){xy(t);const i=e.liveDoors!==!1,s=Object.create(null),r=(z,U,Y)=>(s[z]=(s[z]??0)+Y,vc(U,s[z]),U),o=6.332*6.332-4*(1.366208*1.366208/2);r("DECK",kt.DECK,o-Yr(et.DAIS_A)),Y2(n,0,0,da,da,0,kt.DECK,{surface:"vinyl",thickness:.16});const a=n.colliders.length;r("CEIL",kt.CEIL,o),$2(n,0,0,da,da,et.CEIL_H,kt.CEIL,{surface:"ceiling",thickness:.09});const c={height:et.CEIL_H,thickness:$t.wallThick,colour:kt.BAND,surface:"trim",skirting:!1,cornice:!1,autoServices:!1,graded:!1,inner:1},l=1.835,u=3.251,h=.7,d=2.2;e.archS?(Me(n,-l,-u,-h,-u,{...c,name:"archJambL"}),Me(n,-h,-u,h,-u,{...c,y0:d,height:et.CEIL_H-d,name:"archLintel"}),Me(n,h,-u,l,-u,{...c,name:"archJambR"})):Me(n,-l,-u,l,-u,{...c,name:"flatS"}),Me(n,l,-u,u,-l,{...c,name:"baySE"}),Me(n,u,-l,u,l,{...c,name:"flatE"}),Me(n,u,l,l,u,{...c,name:"bayNE"}),Me(n,l,u,.9,u,{...c,name:"pierR"}),Me(n,.9,u,-.9,u,{...c,y0:Ve,height:et.CEIL_H-Ve,name:"lintel"}),Me(n,-.9,u,-l,u,{...c,name:"pierL"}),Me(n,-l,u,-u,l,{...c,name:"bayNW"}),Me(n,-u,l,-u,-l,{...c,name:"flatW"}),Me(n,-u,-l,-l,-u,{...c,name:"baySW"}),n.colliders.length=a;const f=(et.STRUCT_FACE-et.CORNER_X)*Math.SQRT2,p=2*et.CORNER_X,_=4*p+4*f;r("BAND",kt.BAND,4*f*et.CEIL_H+4*p*(et.CEIL_H-2.8)-si*(et.CEIL_H-2.8));const g={material:t.ROUNDEL,cast:!0},m=(z,U,Y,J)=>{const ut=_t("wall",z,Os,Wu,kt.ROUNDEL,g);return ut.position.set(U,Os/2,Y),ut.rotation.y=J,n.add(ut)};if(r("ROUNDEL",kt.ROUNDEL,3*3.6*Os+2*.9*Os),e.archS){const z=(l-h)/1;for(const U of[-1,1])m(z,U*(h+z/2),-rr,0)}else m(3.6,0,-rr,0);m(3.6,rr,0,-Math.PI/2),m(3.6,-rr,0,Math.PI/2),m(.9,1.35,rr,Math.PI),m(.9,-1.35,rr,Math.PI),r("ROUNDEL",kt.ROUNDEL,2*J0*Ve);const v=new xe;v.name="doorPivots";const M=[];if(i)for(const z of[1,-1]){const U=new nn;U.position.set(z*(si/2),0,mo),U.userData.side=z;const Y=new Pt(vy(z,t),t.ROUNDEL);Y.name="doorLeaf",Y.castShadow=!0,Y.receiveShadow=!0,Y.frustumCulled=!1,U.add(Y),v.add(U),M.push(U)}else for(const z of[-1,1]){const U=_t("doorLeaf",J0,Ve,Ja,kt.ROUNDEL,g);U.position.set(z*.45,Ve/2,mo),n.add(U)}r("DARK",kt.DARK,si*Ve);const S={material:t.DARK,cast:!1},A=.575,w=2.11,E=.14,T=3.266;if(i){for(const Y of[-1,1]){const J=_t("metal",si/2-A,Ve,E,kt.DARK,S);J.position.set(Y*(A+(si/2-A)/2),Ve/2,T),n.add(J)}const z=_t("metal",2*A,Ve-w,E,kt.DARK,S);z.position.set(0,(w+Ve)/2,T),n.add(z);const U=_t("metal",2*A,w,Vd,kt.DARK,S);U.position.set(0,w/2,qd),n.add(U)}else{const z=_t("metal",si,Ve,Vd,kt.DARK,S);z.position.set(0,Ve/2,qd),n.add(z)}const N={material:t.BAND,cast:!0};r("BAND",kt.BAND,2*or*(Ve+.045)+(si+2*or)*or);for(const z of[-1,1]){const U=_t("trim",or,Ve+.045,Q0,kt.BAND,N);U.position.set(z*(si/2+or/2),(Ve+.045)/2,Xd),n.add(U)}const x=_t("trim",si+2*or,fa-Ve,Q0,kt.BAND,N);x.position.set(0,(Ve+fa)/2,Xd),n.add(x),r("GLOW_W",kt.GLOW_W,16*Math.PI*go*go);const y=Vu(new gs(go,40)),R=[],C=(z,U,Y)=>{const J=new Pt(y,t.GLOW_W);return J.position.set(z,Qa,U),J.rotation.y=Y,J.castShadow=!1,J.receiveShadow=!1,R.push(J),n.add(J)},O=et.FLAT_FACE-lm;for(const z of[-1.35,-.45,.45,1.35])e.archS&&Math.abs(z)<h||C(z,-O,0),C(O,z,-Math.PI/2),C(-O,z,Math.PI/2);let k=null;for(const z of[-1.35,1.35])C(z,O,Math.PI);if(i){k=new Ka(y,t.GLOW_W,2),k.name="doorDiscs",k.castShadow=!1,k.receiveShadow=!1,k.frustumCulled=!1,k.instanceMatrix.setUsage(Mo);const z=new jt;[.45,-.45].forEach((U,Y)=>{z.makeRotationY(Math.PI).setPosition(U,Qa,O),k.setMatrixAt(Y,z)}),k.instanceMatrix.needsUpdate=!0,n.add(k)}else for(const z of[-.45,.45])C(z,O,Math.PI);const L=et.CORNER_X,D=et.STRUCT_FACE,F=[[-L,-D,L,-D],[L,-D,D,-L],[D,-L,D,L],[D,L,L,D],[L,D,-L,D],[-L,D,-D,L],[-D,L,-D,-L],[-D,-L,-L,-D]].map(([z,U,Y,J])=>{const ut=Y-z,lt=J-U,ht=Math.hypot(ut,lt),gt=ut/ht,vt=lt/ht;return{len:ht,nx:-vt,nz:gt,mx:(z+Y)/2,mz:(U+J)/2,angle:Math.atan2(-vt,gt)}}),X=(z,U,Y,J)=>(z.position.set(U.mx+U.nx*J,Y,U.mz+U.nz*J),z.rotation.y=U.angle,n.add(z));r("CHROME",kt.CHROME,_*(xl+vl)),r("GLOW_W",kt.GLOW_W,_*Ml);for(const z of F)X(_t("chrome",z.len,xl,vl,kt.CHROME,{material:t.CHROME,cast:!1}),z,fa+xl/2,hy-vl/2),X(_t("trim",z.len,Ml,dy,kt.GLOW_W,{material:t.GLOW_W,cast:!1}),z,fa+Ml/2,0);const K=(et.COFFER_IN+et.COFFER_OUT)/2,it=_l(et.COFFER_OUT),dt=et.COFFER_OUT-et.COFFER_IN;r("CEIL",kt.CEIL,Yr(et.COFFER_OUT)-Yr(et.COFFER_IN)+6*it*yl),r("GLOW_C",kt.GLOW_C,6*_l(et.COFFER_IN)*Sl);for(let z=0;z<6;z++){const U=z*Math.PI/3,Y=Math.sin(U),J=Math.cos(U),ut=_t("ceiling",it,yl,dt,kt.CEIL,{material:t.CEIL,cast:!1});ut.position.set(K*Y,fy+yl/2,K*J),ut.rotation.y=U,n.add(ut);const lt=_t("trim",_l(et.COFFER_IN),Sl,.02,kt.GLOW_C,{material:t.GLOW_C,cast:!1});lt.position.set(et.COFFER_IN*Y,et.CEIL_H-Sl/2,et.COFFER_IN*J),lt.rotation.y=U,n.add(lt)}r("DAIS",kt.DAIS,Yr(et.DAIS_A)-Yr(.62));const Q=new Pt(my(et.DAIS_A,py*2,et.HEX_THETA),t.DAIS);return Q.position.set(0,0,0),Q.castShadow=!1,Q.receiveShadow=!0,n.add(Q),n.userData??(n.userData={}),n.userData.collision={planes:[{nx:0,nz:1,d:et.FLAT_FACE},{nx:1,nz:0,d:et.FLAT_FACE},{nx:0,nz:-1,d:et.FLAT_FACE},{nx:-1,nz:0,d:et.FLAT_FACE},{nx:es,nz:es,d:et.CANT_FACE},{nx:es,nz:-es,d:et.CANT_FACE},{nx:-es,nz:-es,d:et.CANT_FACE},{nx:-es,nz:es,d:et.CANT_FACE}],hulls:[],boxes:[{x:0,z:mo,hw:si/2,hd:Ja/2,rotY:0,y0:0,y1:Ve}]},n.spot("spawn",et.SPAWN[0],et.SPAWN[1],et.SPAWN[2]),n.spot("doors",0,0,2.25),n.interact("doors","Doors",0,1.2,et.FLAT_FACE,"doors",{},1.4),{litDiscs:R,areas:s,doorGroup:v,leaves:M,discs:k}}for(const n of["HEX_THETA","RIM","PANEL_OUT","PANEL_IN","PANEL_Y0","PANEL_Y1","RIM_TOP"])if(typeof et[n]!="number")throw new Error(`Console.js: ROOM.${n} is missing or not a number`);const qu=Math.PI/3,um=Math.tan(Math.PI/6),tu=1/Math.cos(Math.PI/6),$d=.62,El=.7,pa=et.PANEL_IN,yy=0,jd=.1,Kd=.72,Fi=1.32,hm=et.PANEL_Y1-et.PANEL_Y0,dm=et.PANEL_OUT-et.PANEL_IN,Sy=Math.atan2(hm,dm),Vi=Math.hypot(hm,dm),Zd=(et.PANEL_OUT+et.PANEL_IN)/2,Jd=(et.PANEL_Y0+et.PANEL_Y1)/2,So=et.PANEL_OUT*um,tc=et.PANEL_IN*um,Qd=Sy-Math.PI/2,fm=n=>So+(n+Vi/2)/Vi*(tc-So),tf=-Vi/2+.1246,_s=-.17,Ir=_s+.34,Ey=.05,wy=Math.hypot(So-tc,Vi),pm=Ey/(Vi/wy),Eo=fm(_s)-pm,ec=fm(Ir)-pm,Ee=-.012,mm=Math.hypot(ec-Eo,Ir-_s),by=-.34/mm,Ay=(ec-Eo)/mm,ma=(n,t)=>(Math.abs(n)-Eo)*by+(t-_s)*Ay,ae=-.086,Oe=.05,mn=.14,ns=.006,is=.084,eu=new hn(1,1,1);eu.setAttribute("color",new pe(new Float32Array(eu.attributes.position.count*3).fill(1),3));const Xu=.008,oo=.005,gm=Ee+oo+Xu/2,Ty=Ee-.006-Xu/2,bn=new hn(1,1,1),wl=new ne(.5,.5,1,16),Ry=new ne(.5,.5,1,8),ef=new Yi(.5,10,8);function Yu(n,t,e,i,s,r,o){let a=(i[1]-e[1])*(s[2]-e[2])-(i[2]-e[2])*(s[1]-e[1]),c=(i[2]-e[2])*(s[0]-e[0])-(i[0]-e[0])*(s[2]-e[2]),l=(i[0]-e[0])*(s[1]-e[1])-(i[1]-e[1])*(s[0]-e[0]),u=e,h=i,d=s,f=r;a*o[0]+c*o[1]+l*o[2]<0&&(u=r,h=s,d=i,f=e,a=-a,c=-c,l=-l);const p=Math.hypot(a,c,l)||1;a/=p,c/=p,l/=p;for(const _ of[u,h,d,u,d,f])n.push(_[0],_[1],_[2]),t.push(a,c,l)}function $u(n,t){const e=new Sn;return e.setAttribute("position",new pe(new Float32Array(n),3)),e.setAttribute("normal",new pe(new Float32Array(t),3)),e}function nf(n,t){const e=n*tu,i=[];for(let s=0;s<6;s++){const r=et.HEX_THETA+s*qu;i.push([e*Math.sin(r),t,e*Math.cos(r)])}return i}function ni(n,t,e,i,s){const r=nf(n,t),o=nf(e,i),a=[],c=[];for(let l=0;l<6;l++){const u=(l+1)%6,h=et.HEX_THETA+(l+.5)*qu,d=s==="up"?[0,1,0]:s==="down"?[0,-1,0]:s==="out"?[Math.sin(h),0,Math.cos(h)]:[-Math.sin(h),0,-Math.cos(h)];Yu(a,c,r[l],r[u],o[u],o[l],d)}return $u(a,c)}function ga(n,t,e,i){const s=new ne(t*tu,n*tu,i-e,6,1,!1,et.HEX_THETA).toNonIndexed();return s.computeVertexNormals(),s.translate(0,(e+i)/2,0),s}function _m(n,t,e){const i=[],s=[];for(const[r,o,a,c]of n)Yu(i,s,[r[0],r[1],t],[o[0],o[1],t],[a[0],a[1],t],[c[0],c[1],t],e);return $u(i,s)}const ss=[[-So,-Vi/2],[So,-Vi/2],[tc,Vi/2],[-tc,Vi/2]],In=[[-Eo,_s],[Eo,_s],[ec,Ir],[-ec,Ir]],Ly=_m([[ss[0],ss[1],In[1],In[0]],[ss[1],ss[2],In[2],In[1]],[ss[2],ss[3],In[3],In[2]],[ss[3],ss[0],In[0],In[3]]],0,[0,0,1]),Cy=(()=>{const n=[],t=[];for(let e=0;e<4;e++){const i=In[e],s=In[(e+1)%4],r=(i[0]+s[0])/2,o=(i[1]+s[1])/2;Yu(n,t,[i[0],i[1],0],[s[0],s[1],0],[s[0],s[1],Ee],[i[0],i[1],Ee],[-r,-o,0])}return $u(n,t)})(),Iy=_m([[In[0],In[1],In[2],In[3]]],Ee,[0,0,1]),Dy=[{n:1,lamp:"doors",name:"DOOR CONTROL",ctl:[["lever",-.3,ae,{len:.13,lean:.35,slot:.13}],["dial",-.13,ae,{r:.07,needle:.1,rate:.2}],["dial",.045,ae,{r:.046}],["toggle",.18,ae,{tilt:.55}],["toggle",.25,ae,{tilt:-.55}],["toggle",.32,ae,{tilt:.55}],["button",-.32,Oe,{r:.02}],["button",-.255,Oe,{r:.02}],["toggle",-.16,Oe,{tilt:.55}],["toggle",-.1,Oe,{tilt:-.55}],["toggle",-.04,Oe,{tilt:.55}],["bar",.21,ns,{w:.13,h:is}],["lamps",-.2,mn,{n:3,pitch:.075}],["readout",.17,mn,{w:.17,h:.042,seg:3}]]},{n:2,lamp:"scanner",name:"SCANNER",ctl:[["lever",-.32,ae,{len:.115,lean:-.35,slot:.12}],["lever",-.235,ae,{len:.115,lean:.35,slot:.12}],["dial",-.08,ae,{r:.07,needle:.1,rate:.28}],["dial",.09,ae,{r:.052,needle:.066,rate:-.44}],["button",.23,ae,{r:.022}],["button",.3,ae,{r:.022}],["toggle",-.33,Oe,{tilt:.55}],["toggle",-.27,Oe,{tilt:.55}],["toggle",-.21,Oe,{tilt:-.55}],["bar",-.06,ns,{w:.12,h:is}],["bar",.1,ns,{w:.12,h:is}],["lamps",-.23,mn,{n:4,pitch:.07}],["readout",.19,mn,{w:.14,h:.042,seg:2}]]},{n:3,lamp:"life",name:"LIFE SUPPORT",ctl:[["dial",-.31,ae,{r:.058,needle:.078,rate:.16}],["dial",-.16,ae,{r:.058,needle:.078,rate:-.13}],["dial",-.01,ae,{r:.058,needle:.078,rate:.11}],["lever",.16,ae,{len:.13,lean:.35,slot:.13}],["button",.29,ae,{r:.024}],["button",.36,ae,{r:.018}],["toggle",-.33,Oe,{tilt:.55}],["toggle",-.27,Oe,{tilt:-.55}],["toggle",-.21,Oe,{tilt:.55}],["toggle",-.15,Oe,{tilt:-.55}],["bar",0,ns,{w:.11,h:is}],["bar",.15,ns,{w:.11,h:is}],["lamps",-.23,mn,{n:4,pitch:.07}],["readout",.19,mn,{w:.14,h:.042,seg:3}]]},{n:4,lamp:"nav",name:"NAVIGATION",ctl:[["dial",-.3,ae,{r:.058,needle:.078,rate:.24}],["dial",-.16,ae,{r:.058,needle:.078,rate:-.19}],["dial",-.02,ae,{r:.058,needle:.078,rate:.31}],["dial",.14,ae,{r:.07,needle:.1,rate:.09}],["guarded",.31,ae,{tilt:-.6}],["lamps",-.25,Oe,{n:6,pitch:.078}],["toggle",.26,Oe,{tilt:.55}],["toggle",.32,Oe,{tilt:-.55}],["readout",-.28,mn,{w:.085,h:.042,seg:2}],["readout",-.168,mn,{w:.085,h:.042,seg:2}],["readout",-.056,mn,{w:.085,h:.042,seg:2}],["readout",.056,mn,{w:.085,h:.042,seg:2}],["readout",.168,mn,{w:.085,h:.042,seg:2}],["readout",.28,mn,{w:.085,h:.042,seg:2}]]},{n:5,lamp:"flight",name:"FLIGHT",ctl:[["lever",-.3,ae,{len:.15,lean:.3,slot:.15,big:!0}],["lever",-.17,ae,{len:.13,lean:-.35,slot:.13}],["dial",0,ae,{r:.07,needle:.1,rate:.36}],["dial",.17,ae,{r:.052,needle:.066,rate:-.22}],["button",.3,ae,{r:.022}],["bar",-.3,ns,{w:.11,h:is}],["bar",-.165,ns,{w:.11,h:is}],["toggle",.03,Oe,{tilt:.55}],["toggle",.09,Oe,{tilt:-.55}],["toggle",.15,Oe,{tilt:.55}],["lamps",-.22,mn,{n:4,pitch:.074}],["readout",.19,mn,{w:.14,h:.042,seg:2}]]},{n:6,lamp:"diag",name:"DIAGNOSTIC",ctl:[["button",-.31,ae,{r:.038,lamp:!0}],["dial",-.17,ae,{r:.062,needle:.084,rate:.26}],["dial",-.01,ae,{r:.062,needle:.084,rate:-.17}],["column",.29,-.1,{n:8,pitch:.03}],["toggle",-.33,Oe,{tilt:.55}],["toggle",-.27,Oe,{tilt:-.55}],["button",-.18,Oe,{r:.02}],["button",-.115,Oe,{r:.02}],["bar",.02,ns,{w:.11,h:is}],["lamps",-.23,mn,{n:3,pitch:.074}],["readout",.07,mn,{w:.11,h:.042,seg:2}]]}];function Py(n,t,e={}){if(!t||!t.CONSOLE||!t.PANEL||!t.DARK||!t.CHROME||!t.GLOW_C)throw new Error("Console.js: consoleUnit(b, P) needs the palette from roundels.js");const i=new xe;i.name="console",n.add(i);const s=(C,O,k,L,D,F,X,K)=>{const it=new Pt(O,k);return it.position.set(L,D,F),X&&it.scale.set(X[0],X[1],X[2]),K&&it.rotation.set(K[0],K[1],K[2]),it.castShadow=!1,it.receiveShadow=!0,C.add(it),it};s(i,ga($d,$d,yy,jd),t.CONSOLE,0,0,0),s(i,ga(El,El,jd,Kd),t.CONSOLE,0,0,0),s(i,ga(El,et.PANEL_OUT,Kd,et.PANEL_Y0),t.CONSOLE,0,0,0),e.collar!==!1&&s(i,ga(pa,pa,et.PANEL_Y1,Fi),t.CONSOLE,0,0,0),s(i,ni(et.PANEL_OUT,et.PANEL_Y0,et.PANEL_OUT,et.RIM_TOP,"in"),t.CONSOLE,0,0,0),s(i,ni(et.PANEL_OUT,et.PANEL_Y0,et.RIM,et.RIM_TOP,"out"),t.CONSOLE,0,0,0),s(i,ni(et.PANEL_OUT,et.RIM_TOP,et.RIM,et.RIM_TOP,"up"),t.CONSOLE,0,0,0);const r=et.PANEL_OUT-.008,o=et.RIM,a=et.RIM_TOP-.002,c=et.RIM_TOP+.014;s(i,ni(o,a,o,c,"out"),t.CHROME,0,0,0),s(i,ni(r,a,r,c,"in"),t.CHROME,0,0,0),s(i,ni(r,c,o,c,"up"),t.CHROME,0,0,0),s(i,ni(r,a,o,a,"down"),t.CHROME,0,0,0);const l=pa-.006,u=pa+.01;s(i,ni(u,Fi-.01,u,Fi+.004,"out"),t.CHROME,0,0,0),s(i,ni(l,Fi-.01,l,Fi+.004,"in"),t.CHROME,0,0,0),s(i,ni(l,Fi+.004,u,Fi+.004,"up"),t.CHROME,0,0,0),s(i,ni(l,Fi-.01,u,Fi-.01,"down"),t.CHROME,0,0,0);const h=[],d=[],f=[];let p=1/0;for(let C=0;C<6;C++){const O=C*qu,k=Dy[C],L=new xe;L.rotation.y=O,i.add(L);const D=new xe;D.position.set(0,Jd,Zd),D.rotation.x=Qd,L.add(D),f.push(new jt().makeRotationY(O).multiply(new jt().makeTranslation(0,Jd,Zd)).multiply(new jt().makeRotationX(Qd))),s(D,Ly,t.PANEL,0,0,0),s(D,Cy,t.PANEL,0,0,0),s(D,Iy,t.DARK,0,0,0),p=Math.min(p,Oy(D,C,k,t,s,h));const F=et.RIM*Math.sin(O),X=et.RIM*Math.cos(O),K=(O+Math.PI)%(Math.PI*2),it=(et.RIM+.9)*Math.sin(O),dt=(et.RIM+.9)*Math.cos(O);n.spot(`panel${k.n}`,it,0,dt),n.interact(`panel${k.n}`,k.name,F,et.RIM_TOP,X,"panel",{panel:k.n},1.2),d.push({id:`panel${k.n}`,panel:k.n,lamp:k.lamp,name:k.name,azimuth:O,azimuthDeg:C*60,anchor:[F,et.RIM_TOP,X],stand:[it,dt],yaw:K})}p<tf&&console.error(`Console.js: a control reaches v ${p.toFixed(4)}, outboard of the sightline limit ${tf.toFixed(4)} — the rim upstand hides it from a standing player (§6.3)`);const _=new Ka(eu,t.GLOW_C,Math.max(h.length,1));_.name="consoleLamps",_.instanceMatrix.setUsage(Mo),_.castShadow=!1,_.receiveShadow=!1,_.frustumCulled=!1,n.add(_);const g=d.map(()=>({active:!1,blinkLeft:0,blinkT:0})),m=new Map;d.forEach((C,O)=>{m.set(C.id,O),m.set(C.lamp,O),m.set(C.panel,O),m.set(String(C.panel),O)});let v=0;const M=new jt,S=new Nr,A=new fi,w=new B,E=new B;function T(C,O){return O.blinkLeft>0?(O.blinkLeft&1)===1:O.active?!0:(Math.floor(v/.55)+C.slot)%3===0}function N(C,O){const k=g[O.pi];let L=O.x,D=O.v,F=O.z,X=O.sy,K=O.rz;if(O.kind==="lamp")F=T(O,k)?gm:Ty;else if(O.kind==="needle")K=O.rz+O.spin;else if(O.kind==="bar"){const it=.18+.82*(.5+.5*Math.sin(v*O.rate+O.phase));X=O.sy*it,D=O.v+X/2}A.set(0,0,K),S.setFromEuler(A),w.set(L,D,F),E.set(O.sx,X,O.sz),M.compose(w,S,E).premultiply(f[O.pi]),_.setMatrixAt(C,M)}function x(){for(let C=0;C<h.length;C++)N(C,h[C]);_.instanceMatrix.needsUpdate=!0}x(),n.userData=n.userData||{};const y=n.userData.collision=n.userData.collision||{planes:[],hulls:[],boxes:[]};y.hulls=y.hulls||[];const R={apothem:et.RIM,y1:1.2};return y.hulls.push(R),{panels:d,setLamp(C,O){const k=m.get(C);k!==void 0&&(g[k].active=!!O)},blink(C,O=1){const k=m.get(C);k!==void 0&&(g[k].blinkLeft=Math.max(1,Math.round(O)*2),g[k].blinkT=0)},update(C){if(C>0){v+=C;for(let O=0;O<g.length;O++){const k=g[O];if(k.blinkLeft>0)for(k.blinkT+=C;k.blinkT>=.085&&k.blinkLeft>0;)k.blinkT-=.085,k.blinkLeft--}for(const O of h)O.kind==="needle"&&(O.spin+=O.rate*C*(g[O.pi].active?3.2:1));x()}},hull:R}}function sf(n,t,e,i){const s=n+Math.cos(Math.PI/2+t)*e;return[Math.min(n,s-i),Math.max(n,s+i)]}const bl=.03,Al=.036,_a=.013;function rf(n,t,e){const i=Math.cos(t),s=Math.sin(t);if(Math.abs(Math.cos(e)-i)>1e-9||Math.abs(Math.sin(e)-s)>1e-9){const r=((e-t)*180/Math.PI).toFixed(1);console.error(`Console.js: ${n}'s shaft is rotated ${r} degrees away from the direction its own position maths uses — it will be drawn lying where it is placed standing`)}}function Oy(n,t,e,i,s,r){let o=1/0;const a=(h,d,f,p)=>console.error(`Console.js: panel ${e.n} ${h} at x ${d.toFixed(3)} v ${f.toFixed(3)} ${p}`),c=(h,d,f,p,_)=>{o=Math.min(o,p),p<_s-1e-9&&a(h,d,f,`overhangs the recess lip (v0 ${p.toFixed(4)} < ${_s})`),_>Ir+1e-9&&a(h,d,f,`overhangs the inner lip (v1 ${_.toFixed(4)} > ${Ir.toFixed(3)})`)},l=(h,d,f,p,_,g)=>{c(h,d,f,_,g);const m=Math.abs(d)+p;Math.min(ma(m,_),ma(m,g))<-1e-9&&a(h,d,f,"runs off the field")},u=(h,d,f,p)=>{c(h,d,f,f-p,f+p),ma(d,f)<p-1e-9&&a(h,d,f,`runs off the field (clear ${ma(d,f).toFixed(4)} < r ${p})`)};for(const[h,d,f,p={}]of e.ctl)switch(h){case"toggle":case"guarded":{const _=h==="guarded",[g,m]=sf(f,p.tilt,Al,_a),v=_?.0225:.017;l(h,d,f,_?.0265:.017,Math.min(g,f-v),Math.max(m,f+v)),s(n,bn,i.CHROME,d,f,Ee+.0025,[.032,.03,.005]);const M=Math.PI/2+p.tilt,S=Math.cos(M),A=Math.sin(M);rf(h,M,M),s(n,bn,i.CHROME,d,f+S*(bl/2+.004),Ee+.005+A*(bl/2+.004),[.008,bl,.008],[M,0,0]),s(n,ef,i.CHROME,d,f+S*Al,Ee+.005+A*Al,[_a*2,_a*2,_a*2]),_&&(s(n,bn,i.CHROME,d-.024,f,Ee+.02,[.005,.044,.04]),s(n,bn,i.CHROME,d+.024,f,Ee+.02,[.005,.044,.04]),s(n,bn,i.CHROME,d,f-.02,Ee+.02,[.053,.005,.04]));break}case"button":{u("button",d,f,p.r+.004),s(n,wl,i.CHROME,d,f,Ee+.004,[p.r*2+.008,.008,p.r*2+.008],[Math.PI/2,0,0]),p.lamp?r.push(Tl(t,d,f,p.r*1.55,p.r*1.55,r.length)):s(n,wl,i.CHROME,d,f,Ee+.012,[p.r*2,.016,p.r*2],[Math.PI/2,0,0]);break}case"dial":{u("dial",d,f,Math.max(p.r+.012,(p.needle||0)/2)),s(n,wl,i.CHROME,d,f,Ee+.006,[p.r*2,.012,p.r*2],[Math.PI/2,0,0]);const _=p.r+.008;for(let g=0;g<8;g++){const m=g*Math.PI/4;s(n,bn,i.CHROME,d+_*Math.cos(m),f+_*Math.sin(m),Ee+.003,[.004,.011,.006],[0,0,m-Math.PI/2])}s(n,Ry,i.CHROME,d,f,Ee+.016,[p.r*.42,.018,p.r*.42],[Math.PI/2,0,0]),p.needle&&r.push({pi:t,kind:"needle",x:d,v:f,z:Ee+.016,sx:.006,sy:p.needle,sz:.005,rz:0,spin:(t*1.7+p.needle*37)%(Math.PI*2),rate:p.rate??.2});break}case"lever":{const _=Math.PI/2+p.lean,g=Math.cos(_),m=Math.sin(_),v=p.big?.038:.03,M=p.big?.03:.022,S=f-Math.sign(g)*(p.slot/2-.012),A=.034,w=.044,E=Ee+A/2,T=Ee+.024,[N,x]=sf(S,p.lean,p.len+.01,M);l("lever",d,f,Math.max(v,w)/2+.007,Math.min(N,f-p.slot/2,S-w/2),Math.max(x,f+p.slot/2,S+w/2)),s(n,bn,i.DARK,d,f,Ee+.0015,[v,p.slot,.003]),s(n,bn,i.CHROME,d,S,E,[v+.02,w,A]),rf("lever",_,_),s(n,bn,i.CHROME,d,S+g*(p.len/2),T+m*(p.len/2),[p.big?.016:.012,p.len,p.big?.016:.012],[_,0,0]),s(n,ef,i.CHROME,d,S+g*(p.len+.01),T+m*(p.len+.01),[M*2,M*2,M*2]);break}case"bar":{l("bar",d,f,p.w/2+.005,f-.005,f+p.h+.005),of(n,i,s,d,f+p.h/2,p.w,p.h);const _=Math.max(1,Math.round(p.w/.052)),g=(p.w-.012)/_;for(let m=0;m<_;m++)r.push({pi:t,kind:"bar",x:d-p.w/2+.006+g*(m+.5),v:f+.004,z:Ee+.005,sx:g*.72,sy:p.h-.01,sz:.006,rz:0,rate:.7+m*.23,phase:m*1.7+t});break}case"readout":{l("readout",d,f,p.w/2+.005,f-p.h/2-.005,f+p.h/2+.005),of(n,i,s,d,f,p.w,p.h);const _=p.seg??2,g=(p.w-.012)/_;for(let m=0;m<_;m++)r.push({pi:t,kind:"bar",x:d-p.w/2+.006+g*(m+.5),v:f-p.h/2+.005,z:Ee+.005,sx:g*.66,sy:p.h-.012,sz:.006,rz:0,rate:1.4+m*.6+t*.11,phase:m*2.3+t*.8});break}case"lamps":{for(let _=0;_<p.n;_++){const g=d+_*p.pitch;l("lamp",g,f,.02,f-.016,f+.016),s(n,bn,i.CHROME,g,f,Ee+oo/2,[.04,.032,oo]),r.push(Tl(t,g,f,.03,.022,r.length))}break}case"column":{for(let _=0;_<p.n;_++){const g=f+_*p.pitch;l("column lamp",d,g,.017,g-.012,g+.012),s(n,bn,i.CHROME,d,g,Ee+oo/2,[.034,.024,oo]),r.push(Tl(t,d,g,.024,.015,r.length))}break}default:console.error(`Console.js: panel ${e.n} has an unknown control kind '${h}'`)}return o}function of(n,t,e,i,s,r,o){const c=Ee+.003;e(n,bn,t.CHROME,i,s+o/2,c,[r+.005*2,.005,.007]),e(n,bn,t.CHROME,i,s-o/2,c,[r+.005*2,.005,.007]),e(n,bn,t.CHROME,i-r/2-.005/2,s,c,[.005,o,.007]),e(n,bn,t.CHROME,i+r/2+.005/2,s,c,[.005,o,.007])}function Tl(n,t,e,i,s,r){return{pi:n,kind:"lamp",x:t,v:e,z:gm,sx:i,sy:s,sz:Xu,rz:0,slot:r}}const Ny=1/Math.cos(Math.PI/6),Kr={y0:1.16,y1:1.32,apothem:.56},Zr={y0:2.36,y1:2.48,apothem:.3},zn={y0:1.32,y1:2.36,r:.26,segments:24},Uy=.008,qe={y0:1.4,y1:2.32,h:.62,r:.2,ringR:.214,ringH:.03,pistonR:.038,pistonH:.42},Fy=qe.y1-qe.y0-qe.h,Rl=qe.y0+qe.h/2,ky=qe.y1-qe.h/2,Jr={count:6,radius:.31,section:.028},zy=3.2,Hy=1.6,By=2.4;function af(n,t){const e=n*Ny,i=new ne(e,e,t,6,1,!1,et.HEX_THETA).toNonIndexed();return i.computeVertexNormals(),i}function Gy(n){const t=n.getIndex();for(let i=0;i<t.count;i+=3){const s=t.getX(i+1);t.setX(i+1,t.getX(i+2)),t.setX(i+2,s)}t.needsUpdate=!0;const e=n.getAttribute("normal");for(let i=0;i<e.count;i++)e.setXYZ(i,-e.getX(i),-e.getY(i),-e.getZ(i));return e.needsUpdate=!0,n}function Wy(n,t){Po(t.GLASS);const e=zn.y1-zn.y0,i=(zn.y0+zn.y1)/2,s=new Pt(new ne(zn.r,zn.r,e,zn.segments,1,!0),t.GLASS);if(s.position.y=i,n.add(s),t.GLASS.side===di){const r=zn.r-Uy,o=new Pt(Gy(new ne(r,r,e,zn.segments,1,!0)),t.GLASS);o.position.y=i,n.add(o)}}function Vy(n){const t=new xe,e=qe.h/3,i=e-qe.ringH,s=new ne(qe.ringR,qe.ringR,qe.ringH,20,1,!1),r=new ne(qe.r,qe.r,i,20,1,!1);for(let c=0;c<3;c++){const l=-.31+c*e,u=new Pt(s,n.CHROME);u.position.y=l+qe.ringH/2,t.add(u);const h=new Pt(r,n.GLOW_C);h.position.y=l+qe.ringH+i/2,t.add(h)}const o=new Pt(new ne(qe.pistonR,qe.pistonR,qe.pistonH,12,1,!1),n.CHROME);o.position.y=-.62/2-qe.pistonH/2,t.add(o);const a=Mc(t);return a.name="rotorCarriage",a}function qy(n,t,e={}){const i=e.period??zy,s=e.stroke??Fy,r=Math.PI*2/i;if(e.collar!==!1){const _=new Pt(af(Kr.apothem,Kr.y1-Kr.y0),t.CONSOLE);_.position.y=(Kr.y0+Kr.y1)/2,n.add(_)}Wy(n,t);const o=new hn(Jr.section,zn.y1-zn.y0,Jr.section);for(let _=0;_<Jr.count;_++){const g=et.HEX_THETA+_*Math.PI/3,m=new Pt(o,t.DAIS);m.position.set(Math.sin(g)*Jr.radius,(zn.y0+zn.y1)/2,Math.cos(g)*Jr.radius),m.rotation.y=g,n.add(m)}if(e.cap!==!1){const _=new Pt(af(Zr.apothem,Zr.y1-Zr.y0),t.CONSOLE);_.position.y=(Zr.y0+Zr.y1)/2,n.add(_)}n.interactables.some(_=>_.id==="rotor")||n.interact("rotor","Time Rotor",0,1.84,0,"rotor",{},2.4);const a=new xe;a.name="timeRotor";const c=Vy(t);a.add(c);let l=e.running?1:0,u=l,h=l,d=0,f=Rl+s*h*.5*(1-Math.cos(d));c.position.y=f;function p(_){_>0&&(_>.1&&(_=.1),u>l?l=Math.min(1,l+_/Hy):u<l&&(l=Math.max(0,l-_/By)),h=l*l*(3-2*l),l===0?d=0:d=(d+r*(.45+.55*h)*_)%(Math.PI*2),f=Rl+s*h*.5*(1-Math.cos(d)),c.position.y=f)}return{group:a,setRunning(_){u=_?1:0},update:p,get height(){return f},get drive(){return h},get running(){return u===1},parked:Rl,apex:ky}}const Qe=(et==null?void 0:et.BAY_CENTRE)??2.362686,ao=(et==null?void 0:et.BAY_W)??1.4,Us=(et==null?void 0:et.BAY_D)??.34,Xn=(et==null?void 0:et.BAY_H)??2.2;et==null||et.CANT_LEN;const Mr=ao/2,yr=Us/2,cf={scanner:{x:Qe,z:Qe,rotY:-2.356194},fault:{x:-Qe,z:Qe,rotY:2.356194},food:{x:Qe,z:-Qe,rotY:-.785398}},ms=yr,ai=.05,lf=.052,Xy=.076,nu=.095,Ll=.6,iu=.78,uf=.018,Yy=.35,$y=1.2,su=1.785,Fs=8,nc=6,xm=.1375,vm=.15,jy=.02,Mm=1.55,wo=Fs*nc,Ky=4,Zy=2,Jy=0,Qy=1,tS=2,eS=3,nS=wo,iS=wo+1,sS=wo+2,rS=n=>n*n*(3-2*n),Ye={unitBox:hf(new hn(1,1,1)),unitDisc:hf(new gs(1,20)),rotary:new ne(.034,.038,.03,12),rotaryCap:new ne(.012,.012,.014,8),pilot:new ne(.014,.014,.01,10),hook:new ne(.009,.009,.1,8),hookBall:new Yi(.016,8,6),finial:new Yi(.044,10,8),standBase:new ne(.12,.28,.045,16),standTaper:new ne(.046,.12,.16,12),standPole:new ne(.028,.034,1.42,12),standCollar:new ne(.056,.056,.052,12),hatCrown:new ne(.088,.094,.105,12),hatBrim:new ne(.15,.15,.012,16),dial:new ne(.128,.128,.022,20),clockFinial:new ne(.024,.034,.052,10),packet:new ne(.028,.028,.11,8)};function hf(n){const t=n.attributes.position.count;return n.setAttribute("color",new pe(new Float32Array(t*3).fill(1),3)),n}function Wt(n,t,e,i,s,r,o,a,c={}){const l=new Pt(c.chamfer===0?new hn(Math.max(e,.001),Math.max(i,.001),Math.max(s,.001)):Hs(e,i,s,c.chamfer??.003),t);return l.position.set(r,o,a),c.rotX&&(l.rotation.x=c.rotX),c.rotY&&(l.rotation.y=c.rotY),c.rotZ&&(l.rotation.z=c.rotZ),l.receiveShadow=!0,n.add(l),l}function rn(n,t,e,i,s,r,o={}){const a=new Pt(t,e);return a.position.set(i,s,r),o.rotX&&(a.rotation.x=o.rotX),o.rotY&&(a.rotation.y=o.rotY),o.rotZ&&(a.rotation.z=o.rotZ),o.scale&&a.scale.set(o.scale[0],o.scale[1],o.scale[2]),a.receiveShadow=!0,n.add(a),a}function ju(n,t,e,i,s,r,o,a,c){const l=c-a/2;Wt(n,t,e,o,a,s,r+i/2-o/2,l,{chamfer:.002}),Wt(n,t,e,o,a,s,r-i/2+o/2,l,{chamfer:.002});const u=i-o*2;Wt(n,t,o,u,a,s-e/2+o/2,r,l,{chamfer:.002}),Wt(n,t,o,u,a,s+e/2-o/2,r,l,{chamfer:.002})}function Ku(n,t,e){Wt(n,t.DAIS,ao-.06,.1,Us-.06,0,.05,0,{chamfer:.004}),Wt(n,t.CONSOLE,ao,Xn-.1,.06,0,1.15,-yr+.03);for(const a of[-1,1])Wt(n,t.CONSOLE,.11,Xn-.1,Us,a*(Mr-.055),1.15,0,{chamfer:.005});Wt(n,t.CONSOLE,ao,.03,Us,0,Xn-.015,0,{chamfer:.005});const i=ao-.22,s=(ms+ai)/2,r=ms-ai;let o=.1;for(const a of e){a[0]>o+.001&&Wt(n,t.CONSOLE,i,a[0]-o,r,0,(o+a[0])/2,s,{chamfer:.004});const c=a[2]??ai;if(Wt(n,t.DARK,i,a[1]-a[0],.014,0,(a[0]+a[1])/2,c-.007,{chamfer:0}),c<ai-.001){const l=ai-c;for(const u of[-1,1])Wt(n,t.DARK,.014,a[1]-a[0],l,u*(i/2-.007),(a[0]+a[1])/2,c+l/2,{chamfer:0});for(const u of[-1,1])Wt(n,t.DARK,i,.014,l,0,a[u>0?1:0]-u*.007,c+l/2,{chamfer:0})}o=a[1]}return o<Xn-.031&&Wt(n,t.CONSOLE,i,Xn-.03-o,r,0,(o+Xn-.03)/2,s,{chamfer:.004}),{innerW:i,zA:s,dA:r}}function ym(n,t,e,i,s){return Wt(n,t.PANEL,e,i,.016,0,s,ms-.028,{chamfer:.003})}function oS(n,t){Ku(n,t,[[1.4,2.17]]),ju(n,t.CHROME,1.16,.75,0,1.795,.03,.024,Xy);const e=.962,i=e-Mr,s=.245,r=1.34;for(const a of[-1,1]){const c=a*(Mr+i/2);Wt(n,t.DAIS,i-.03,.1,Us-.06,c,.05,0,{chamfer:.004}),Wt(n,t.CONSOLE,i,r-.1,Us,c,(.1+r)/2,0,{chamfer:.005}),Wt(n,t.CONSOLE,i,Xn-r,s,c,(r+Xn)/2,-yr+s/2,{chamfer:.005})}Wt(n,t.CONSOLE,e*2,.03,Us,0,Xn+.015,0,{chamfer:.005});for(const a of[-1,1])Wt(n,t.CHROME,e*2-.012,.016,.022,0,su+a*(iu/2+.012),nu,{chamfer:.002});const o=new xe;o.position.set(0,1.07,.118),o.rotation.x=-.436,n.add(o),Wt(o,t.PANEL,1.18,.2,.02,0,0,0,{chamfer:.004});for(let a=0;a<3;a++){const c=-.36+a*.36;rn(o,Ye.rotary,t.CHROME,c,.03,.025,{rotX:Math.PI/2}),rn(o,Ye.rotaryCap,t.CHROME,c,.03,.046,{rotX:Math.PI/2})}for(let a=0;a<2;a++){const c=-.18+a*.36;Wt(o,t.DARK,.07,.034,.014,c,-.052,.014,{chamfer:.002}),Wt(o,t.CHROME,.018,.04,.014,c,-.046,.016,{rotZ:.35,chamfer:.002})}for(const a of[-1,1])rn(o,Ye.pilot,t.GLOW_C,a*.52,.03,.014,{rotX:Math.PI/2})}function aS(n,t){Ku(n,t,[[1.1,2.06]]);const e=Mm,i=ai+.008;for(let s=0;s<=Fs-2;s++)Wt(n,t.CHROME,.006,.9,.016,(s-3)*xm,e,i,{chamfer:0});for(let s=0;s<=nc-2;s++)Wt(n,t.CHROME,1.1,.006,.016,0,e+(s-2)*vm,i,{chamfer:0});ju(n,t.CHROME,1.16,.96,0,e,.028,.02,ai+.02),ym(n,t,1.18,.14,1.03),Wt(n,t.DARK,.9,.05,.02,0,1.05,ms-.04,{chamfer:0}),Wt(n,t.CHROME,.94,.014,.024,0,1.016,ms-.018,{chamfer:.002});for(let s=0;s<6;s++)Wt(n,t.DAIS,.15,.036,.014,-.475+s*.19,2.115,ms-.02,{chamfer:.002})}function cS(n,t){Ku(n,t,[[.74,.98,0],[1.27,1.93,-.1]]),Wt(n,t.DAIS,.47,.014,.17,0,.793,.082,{chamfer:.002}),Wt(n,t.DAIS,.47,.03,.014,0,.812,.15,{chamfer:.002}),Wt(n,t.DARK,.44,.04,.016,0,.95,ai-.03,{chamfer:0}),Wt(n,t.CHROME,.48,.014,.02,0,.926,ai-.014,{chamfer:.002}),ym(n,t,1.18,.2,1.2);for(let i=0;i<4;i++)for(let s=0;s<3;s++)Wt(n,t.CHROME,.09,.028,.014,-.4125+i*.275,1.14+s*.05,ms-.013,{chamfer:.002});const e=new Pt(new mi(.9,.6),t.GLASS);e.position.set(0,1.6,.1),e.receiveShadow=!0,n.add(e),ju(n,t.CHROME,.96,.66,0,1.6,.03,.026,.126);for(const i of[1.42,1.68]){Wt(n,t.DAIS,.86,.014,.18,0,i,0,{chamfer:0});for(let s=0;s<3;s++)rn(n,Ye.packet,t.DAIS,-.26+s*.26,i+.062,.01)}for(let i=0;i<5;i++)Wt(n,t.DAIS,.6,.014,.02,0,2.01+i*.03,ms-.016,{rotX:-.35,chamfer:0})}function lS(n,t){rn(n,Ye.standBase,t.JOINERY,0,.0225,0),rn(n,Ye.standTaper,t.JOINERY,0,.125,0),rn(n,Ye.standPole,t.JOINERY,0,.915,0),rn(n,Ye.standCollar,t.JOINERY,0,1.62,0),rn(n,Ye.finial,t.JOINERY,0,1.676,0);for(let i=0;i<4;i++){const s=new xe;s.rotation.y=Math.PI/4+i*Math.PI/2,n.add(s),rn(s,Ye.hook,t.CHROME,0,1.64,.075,{rotX:1.05}),rn(s,Ye.hookBall,t.CHROME,0,1.665,.118)}const e=new xe;e.position.set(.098,1.612,.098),e.rotation.set(.3,Math.PI/4,.1),n.add(e),rn(e,Ye.hatCrown,t.JOINERY,0,.052,0),rn(e,Ye.hatBrim,t.JOINERY,0,.006,0)}function uS(n,t){Wt(n,t.JOINERY,.56,.055,.52,0,.44-.028,.02,{chamfer:.008});for(const i of[-1,1])Wt(n,t.JOINERY,.05,.44-.055,.05,i*.255,(.44-.055)/2,.23,{chamfer:.005}),Wt(n,t.JOINERY,.052,1.15,.052,i*.255,.575,-.222,{rotX:-.06,chamfer:.005});Wt(n,t.JOINERY,.46,.52,.038,0,.81,-.202,{rotX:-.06,chamfer:.006}),Wt(n,t.JOINERY,.59,.105,.062,0,1.098,-.24,{rotX:-.06,chamfer:.008});for(let i=0;i<3;i++)for(let s=0;s<2;s++)rn(n,Ye.rotaryCap,t.CHROME,-.14+i*.14,.72+s*.18,-.18+(.72+s*.18-.81)*.06,{rotX:Math.PI/2-.06});Wt(n,t.JOINERY,.56,.07,.04,0,.377,.255,{chamfer:.004}),Wt(n,t.JOINERY,.5,.028,.028,0,.15,.03,{chamfer:.003})}function hS(n,t){Wt(n,t.JOINERY,.52,.06,.42,0,.03,0,{chamfer:.006}),Wt(n,t.JOINERY,.44,.63,.34,0,.375,0,{chamfer:.005}),Wt(n,t.JOINERY,.52,.06,.42,0,.72,0,{chamfer:.006}),Wt(n,t.JOINERY,.36,.48,.24,0,.99,0,{chamfer:.006}),Wt(n,t.JOINERY,.4,.07,.28,0,1.265,0,{chamfer:.006}),rn(n,Ye.clockFinial,t.JOINERY,0,1.326,0),rn(n,Ye.dial,t.CHROME,0,1.01,.125,{rotX:Math.PI/2}),Wt(n,t.DARK,.014,.088,.01,0,1.048,.14,{chamfer:0}),Wt(n,t.DARK,.062,.012,.01,.025,1.01,.14,{rotZ:.35,chamfer:0});for(const e of[-1,1])rn(n,Ye.rotaryCap,t.CHROME,e*.19,1.265,.1)}const Qr=new jt,dS=new jt,fS=new B;function ar(n,t,e,i,s,r,o,a,c,l=0){l?(Qr.makeRotationX(l),Qr.scale(fS.set(o,a,c))):Qr.makeScale(o,a,c),Qr.setPosition(i,s,r),n.setMatrixAt(t,dS.multiplyMatrices(e,Qr))}const Sm=[];for(let n=0;n<nc;n++)for(let t=0;t<Fs;t++)Sm.push({x:(t-(Fs-1)/2)*xm,y:Mm+(n-(nc-1)/2)*vm});const cr=.001,pS=n=>Math.imul(n+1,2654435761)>>>0;function mS(n,t,e){const i=pS(n);if(e){const s=n%Fs,r=Math.floor(t*9)%Fs;return s===r||s===(r+4)%Fs?!0:(i>>>(Math.floor(t*6)&15)&1)===1}return((i>>>3)+Math.floor(t/.9))%11<2}function gS(n,t){const e=t||cm(),i={};for(const x of Object.keys(cf)){const y=cf[x],R=new xe;R.name=`bay.${x}`,R.position.set(y.x,0,y.z),R.rotation.y=y.rotY,n.add(R),i[x]=new jt().makeRotationY(y.rotY).setPosition(y.x,0,y.z),x==="scanner"?oS(R,e):x==="fault"?aS(R,e):cS(R,e)}const s=[{name:"hatStand",x:-1.525,z:-2.6413,rotY:0,build:lS},{name:"chair",x:-2.5115,z:-1.45,rotY:1.047198,build:uS},{name:"clock",x:-2.192,z:-2.192,rotY:.785398,build:hS}];for(const x of s){const y=new xe;y.name=x.name,y.position.set(x.x,0,x.z),y.rotation.y=x.rotY,n.add(y),x.build(y,e)}const r=new xe;r.name="fittings.live";const o=new Pt(new mi(1.1,.72),new li({color:855826,toneMapped:!1}));o.name="scannerScreen",o.matrixAutoUpdate=!1,o.matrix.copy(i.scanner).multiply(new jt().setPosition(0,1.8,lf+.01)),o.matrixWorldNeedsUpdate=!0,r.add(o);const a=new Ka(Ye.unitBox,e.DARK,eS),c=new Ka(Ye.unitDisc,e.GLOW_C,sS);for(const x of[a,c])x.instanceMatrix.setUsage(Mo),x.frustumCulled=!1,x.castShadow=!1,x.receiveShadow=!0,r.add(x);let l=0,u=0,h=!0,d=-1,f=-1,p=0;const _=new Uint8Array(wo).fill(255);function g(){const x=rS(l)*Yy;ar(a,Jy,i.scanner,-.3-x,su,nu,Ll,iu,uf),ar(a,Qy,i.scanner,Ll/2+x,su,nu,Ll,iu,uf);const y=h?cr:1;ar(a,tS,i.scanner,0,1.8,lf+.006,1.1*y,.72*y,.006),a.instanceMatrix.needsUpdate=!0}function m(){const x=f>=0&&f<.9&&(Math.floor(f*14)&1)===0;ar(c,nS,i.food,0,.95,ai-.018,x?.22:cr,x?.014:cr,1);const y=f;let R=-1;if(y>=.15&&y<1.75){const O=Math.min((y-.15)/.4,1);R=.945+(.805-.945)*(O*O)}const C=R>0;ar(c,iS,i.food,0,C?R:.805,.07,C?.05:cr,C?.013:cr,1,-Math.PI/2)}function v(x){const y=d>=0;let R=x;for(let C=0;C<wo;C++){const O=mS(C,p,y)?1:0;if(O===_[C]&&!x)continue;_[C]=O;const k=Sm[C],L=O?jy:cr;ar(c,C,i.fault,k.x,k.y,ai+.006,L,L,1),R=!0}return R}g(),m(),v(!0),c.instanceMatrix.needsUpdate=!0;const M=n.userData.collision||(n.userData.collision={planes:[],hulls:[],boxes:[]});M.boxes||(M.boxes=[]),M.boxes.push({x:Qe,z:Qe,hw:Mr,hd:yr,rotY:-2.356194,y0:0,y1:Xn},{x:-Qe,z:Qe,hw:Mr,hd:yr,rotY:2.356194,y0:0,y1:Xn},{x:Qe,z:-Qe,hw:Mr,hd:yr,rotY:-.785398,y0:0,y1:Xn},{x:-1.525,z:-2.6413,hw:.28,hd:.28,rotY:3.665191,y0:0,y1:1.72},{x:-2.5115,z:-1.45,hw:.31,hd:.34,rotY:1.047198,y0:0,y1:1.15},{x:-2.192,z:-2.192,hw:.25,hd:.2,rotY:.785398,y0:0,y1:1.35}),sr(n,Qe,Qe,0,1.1,1.1,{margin:.06}),sr(n,-Qe,Qe,0,1.1,1.1,{margin:.06}),sr(n,Qe,-Qe,0,1.1,1.1,{margin:.06}),sr(n,-2.192,-2.192,0,.58,.58,{margin:.05}),sr(n,-1.525,-2.6413,0,.56,.56,{margin:.08}),sr(n,-2.5115,-1.45,0,.66,.66,{margin:.05});const S=[["scanner","Scanner",2.242455,1.8,2.242455,1.535348,1.535348,1.2],["faultLocator","Fault Locator",-2.242455,1.55,2.242455,-1.535348,1.535348,1.2],["foodMachine","Food Machine",2.242455,1.2,-2.242455,1.535348,-1.535348,1.2],["hatStand","Hat Stand",-1.385,1.55,-2.3988,-.935,-1.619,1.05],["chair","Chair",-2.2171,.45,-1.28,-1.438,-.83,1.05],["clock","Ormolu Clock",-2.050579,1.1,-2.050579,-1.414182,-1.414183,1.05]];for(const[x,y,R,C,O,k,L,D]of S)n.spot(x,k,0,L),n.interact(x,y,R,C,O,x,{},D);function A(x){u=x?1:0}function w(x){h=!!x,o.visible=h,g()}function E(){d=0}function T(){f=0}function N(x){const y=Math.min(Math.max(x||0,0),.1);if(p+=y,l!==u){const R=y/$y;l=u>l?Math.min(u,l+R):Math.max(u,l-R),g()}d>=0&&(d+=y,d>=Ky&&(d=-1)),v(!1)&&(c.instanceMatrix.needsUpdate=!0),f>=0&&(f+=y,f>=Zy&&(f=-1),m(),c.instanceMatrix.needsUpdate=!0)}return{group:r,screen:o,setShutters:A,setScanner:w,pulseFault:E,dispense:T,update:N,get shuttersOpen(){return u===1},get scannerOn(){return h},get faultRunning(){return d>=0}}}const _S=n=>.6*Math.pow(n/100,.6),Em={candle1900:16764860,cool5000:16774121},wm={fov:-6,rate:2.6},df=16,bm=600,Zu=_S(bm),Am=.9,Ju=et.CEIL_H-.15,Ec=2*Math.hypot(et.CORNER_X,et.STRUCT_FACE),ff=Zu*(Ju-Am)**2/.88,Tm=.22*Zu*(Ec/2),Rm=2.2*(Ec/2),Lm=Ec,ic=2.8469,ru=Tm/2,Fa=1.2,Cm=2.6,Im=2.2,xS=1.84,Cl=[0,1.1,2.7],vS=3.4,MS=2.1,yS=15265525,pf=2.8,mf=3.2,ou=16776681,au=Em.cool5000,SS=13625599,ES=Object.freeze({lux:bm,E:Zu,planeY:Am,keyY:Ju,diagonal:Ec,keyRef:ff,key:ic,keyShare:ic/ff,fillTotal:Tm,fill:ru,keyDist:Rm,fillDist:Lm,keyColour:au,fillColour:ou,rotorIdle:Fa,rotorFlight:Cm,rotorDist:Im}),jn=Object.freeze({hemisphere:Object.freeze({sky:16773344,ground:8092794,intensity:.5955}),ambient:Object.freeze({colour:16774116,intensity:.3767}),bounce:null,fog:null,shadows:!1,background:1316634,toneMapping:"ACESFilmicToneMapping",toneMappingExposure:1.4,outputColorSpace:"SRGBColorSpace",camera:Object.freeze({fov:64+wm.fov,near:.2,far:60})}),bo=.21,Qu=.06,th=24,cu=et.CEIL_H-Qu,wS=cu+.0015,bS=new ne(bo,bo,Qu,th,1,!0),AS=new gc(bo-.025,bo,th),TS=new gs(bo-.025,th),gf=Math.PI/2,sc=n=>Math.abs(n)<1e-9?0:Math.round(n*1e9)/1e9,rc=[];for(let n=0;n<4;n++){const t=n*Math.PI/2;rc.push([sc(Math.sin(t)*pf),sc(Math.cos(t)*pf)])}for(let n=0;n<4;n++){const t=Math.PI/4+n*Math.PI/2;rc.push([sc(Math.sin(t)*mf),sc(Math.cos(t)*mf)])}const _f=.02,xf=4,Dm=wm.rate,RS=3.2,LS=.05,CS=1.4,IS=.4,vf=.55,DS=.25,PS=.6;function OS(n,t,e){const i=Math.min(1,e*Dm);return n<=1e-6?t*i:n*Math.pow(t/n,i)}function NS(n,t,e={}){if(!t||!t.CHROME||!t.GLOW_W)throw new Error("lighting(): needs the palette from src/engine/roundels.js (P.CHROME and P.GLOW_W). Call palette() first, or use buildLighting(b).");const i=[];for(const[N,x]of rc){const y=new Pt(bS,t.CHROME);y.position.set(N,cu+Qu/2,x),y.name="panTube",i.push(n.add(y));const R=new Pt(AS,t.CHROME);R.position.set(N,cu,x),R.rotation.x=gf,R.name="panBezel",i.push(n.add(R));const C=new Pt(TS,t.GLOW_W);C.position.set(N,wS,x),C.rotation.x=gf,C.name="panFace",i.push(n.add(C))}const s=rc.map(([N,x],y)=>{const R=n.light(N,Ju,x,au,ic,Rm);return R.name=`key${y}`,R}),r=new yo(ou,ru,Lm,1);r.position.set(0,1.1,0),r.name="fill",n.group.add(r),n.lights.push(r);const o=n.light(0,xS,0,SS,Fa,Im);o.name="rotorPractical";const a=n.light(Cl[0],Cl[1],Cl[2],yS,0,vS);a.name="doorSpill",n.lights.length>df&&console.warn(`lighting(): ${n.lights.length} fixtures against POOL_SIZE ${df}; the room is planned for 10 and the count is meant to be frozen.`);const c=t.GLOW_W.emissiveIntensity??1;let l=xa(e.level??1,_f,xf),u=l,h=xa(e.rotorDrive??0,0,1),d=h,f=0,p=0,_=0,g=0,m=6,v=0,M=0;const S=new zt(au),A=new zt(ou),w=new zt(Em.candle1900),E=new zt;function T(){const N=f>0?1-IS*f*(.5-.5*Math.cos(2*Math.PI*M/CS)):1,x=l*N;for(const R of s)R.intensity=ic*x,f>0?R.color.copy(E.copy(S).lerp(w,vf*f)):R.color.copy(S);r.intensity=ru*x,f>0?r.color.copy(E.copy(A).lerp(w,vf*f)):r.color.copy(A);const y=h>0?1+LS*h*Math.sin(2*Math.PI*M/RS):1;o.intensity=(Fa+(Cm-Fa)*h)*l*y,a.intensity=MS*v,g>0&&(t.GLOW_W.emissiveIntensity=c*(1+g*Math.sin(2*Math.PI*M/m)))}return T(),{keys:s,fill:r,rotor:o,spill:a,pans:i,plan:ES,scene:jn,get level(){return l},setLevel(N){u=xa(N,_f,xf)},setRotorDrive(N){d=xa(N,0,1)},setDoorSpill(N){v=N>0?N<1?N:1:0},setDoorSpillColour(N){return N!=null&&a.color.set(N),this},setAlert(N){p=N?1:0,_=N?1/0:0},pulseAlert(N=4){p=1,_=N},setGlowBreath(N,x=6){g=Math.max(0,Math.min(.6,N||0)),m=Math.max(.5,x),g===0&&(t.GLOW_W.emissiveIntensity=c)},update(N){const x=Math.min(Math.max(N||0,0),.25);M+=x,_!==1/0&&_>0&&(_-=x,_<=0&&(_=0,p=0)),l=OS(l,u,x),Math.abs(l-u)<1e-4&&(l=u),h+=(d-h)*Math.min(1,x*Dm),Math.abs(h-d)<1e-4&&(h=d);const y=p>f?x/DS:x/PS;f+=Math.sign(p-f)*Math.min(Math.abs(p-f),y),T()},dispose(){t.GLOW_W.emissiveIntensity=c}}}function xa(n,t,e){return n<t?t:n>e?e:n}const Le={RADIUS:.34,HEIGHT:1.75,EYE:1.62,STEP:.42,GRAVITY:22,SPEED:2.6,RUN:4.2},US=14,FS=3,Mf=.0022,yf=Math.PI/2-.05,kS=.72,zS=6,HS=.06,BS=.1,GS=1500,ka=[];for(let n=0;n<6;n++){const t=n*Math.PI/3;ka.push({nx:Math.sin(t),nz:Math.cos(t)})}const Mi=[],lu={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],run:["ShiftLeft","ShiftRight"],interact:["KeyE"]},WS=new Set(Object.values(lu).flat());function VS(n,t,e,i,s,r){if(n.y0!==void 0&&(s+r<=n.y0||s>=n.y1))return!1;const o=n.planes;for(let a=0;a<o.length;a++){const c=o[a];if(t*c.nx+e*c.nz>c.d-i)return!1}return!0}function eh(n,t,e,i={}){const s=i.radius??Le.RADIUS,r=i.y??0,o=i.height??Le.HEIGHT,a=i.onPush||null;let c=0;const l=(n==null?void 0:n.zones)||Mi;if(l.length){let f=!1;for(let p=0;p<l.length&&!f;p++)f=VS(l[p],t,e,s,r,o);if(!f){let p=t,_=e,g=1/0;for(let m=0;m<l.length;m++){const v=l[m];if(v.y0!==void 0&&(r+o<=v.y0||r>=v.y1))continue;let M=t,S=e;for(const w of v.planes){const E=M*w.nx+S*w.nz,T=w.d-s;E<=T||(M-=w.nx*(E-T),S-=w.nz*(E-T))}const A=(M-t)*(M-t)+(S-e)*(S-e);A<g&&(g=A,p=M,_=S)}if(g<1/0){if(a&&g>0){const m=Math.sqrt(g)||1;a((p-t)/m,(_-e)/m)}t=p,e=_,c++}}}const u=l.length?Mi:(n==null?void 0:n.planes)||Mi;for(let f=0;f<u.length;f++){const p=u[f],_=t*p.nx+e*p.nz,g=p.d-s;if(_<=g)continue;const m=_-g;t-=p.nx*m,e-=p.nz*m,c++,a&&a(-p.nx,-p.nz)}const h=(n==null?void 0:n.hulls)||Mi;for(let f=0;f<h.length;f++){const p=h[f],_=p.y0??0;if(r+o<=_||r>=p.y1)continue;let g=0,m=-1/0;for(let A=0;A<6;A++){const w=t*ka[A].nx+e*ka[A].nz;w>m&&(m=w,g=A)}const v=p.apothem+s;if(m>=v)continue;const M=ka[g],S=v-m;t+=M.nx*S,e+=M.nz*S,c++,a&&a(M.nx,M.nz)}const d=(n==null?void 0:n.boxes)||Mi;for(let f=0;f<d.length;f++){const p=d[f],_=p.y0??0;if(r+o<=_||r>=p.y1)continue;const g=Math.cos(p.rotY),m=Math.sin(p.rotY),v=t-p.x,M=e-p.z,S=v*g-M*m,A=v*m+M*g,w=p.hw+s,E=p.hd+s,T=w-Math.abs(S),N=E-Math.abs(A);if(T<=0||N<=0)continue;let x=0,y=0,R;T<N?(x=S>=0?1:-1,R=T):(y=A>=0?1:-1,R=N);const C=x*g+y*m,O=-x*m+y*g;t+=C*R,e+=O*R,c++,a&&a(C,O)}return{x:t,z:e,contacts:c}}function qS(n,t,e,i={}){const s=(i.radius??Le.RADIUS)-(i.tolerance??HS);return eh(n,t,e,{radius:s,y:i.y,height:i.height}).contacts>0}class XS{constructor(t,e,i={}){var c,l;this.camera=t,this.build=e,this.dom=i.dom||(typeof document<"u"?document.body:null),this.collision=((c=e==null?void 0:e.userData)==null?void 0:c.collision)||null,this.collision||(console.warn("[walker] build.userData.collision is missing — the player will walk through the walls. Shell.js publishes it (CONSOLEROOM.md §8.7)."),this.collision={planes:Mi,hulls:Mi,boxes:Mi}),this.position=new B,this.velocity=new B,this.yaw=0,this.pitch=0,this.onGround=!0,this.horizontalSpeed=0,this.prompt=null,this.driveCamera=!0,this._locked=!1,this._lockPending=!1,this._lockTimer=0,this._down=new Set,this._pressed=new Set,this._mouseDX=0,this._mouseDY=0,this._target=null,this._targetLabel=null,this._interactFns=[],this._pauseFns=[],this._bob=0,this._lastSafe=new B,this._warnedFloor=!1,this._fwd=new B,this._dir=new B,this._killInto=(u,h)=>{const d=this.velocity.x*u+this.velocity.z*h;d<0&&(this.velocity.x-=u*d,this.velocity.z-=h*d)};const s=i.spawn||((l=e==null?void 0:e.spots)==null?void 0:l.spawn)||et.SPAWN,r=s.x??s[0]??0,o=s.y??s[1]??0,a=s.z??s[2]??0;this.teleport(r,o,a,i.yaw??et.SPAWN_YAW),this._attach()}_attach(){var t;typeof window>"u"||(this._h={keydown:e=>{e.repeat||(this._locked&&WS.has(e.code)&&e.preventDefault(),this._down.add(e.code),this._pressed.add(e.code))},keyup:e=>this._down.delete(e.code),blur:()=>this._clearHeld(),focus:()=>this._clearHeld(),visibility:()=>{document.hidden&&this._clearHeld()},mousemove:e=>{this._locked&&(this._mouseDX+=e.movementX,this._mouseDY+=e.movementY)},mousedown:e=>{this._pressed.add("Mouse"+e.button),this._down.add("Mouse"+e.button)},mouseup:e=>this._down.delete("Mouse"+e.button),domdown:()=>{this._canLock&&!this._canLock()||this._locked||this.requestLock()},lockchange:()=>{this._settleLock(),this._setLocked(document.pointerLockElement===this.dom)},lockerror:e=>this._failLock(e)},window.addEventListener("keydown",this._h.keydown),window.addEventListener("keyup",this._h.keyup),window.addEventListener("blur",this._h.blur),window.addEventListener("focus",this._h.focus),document.addEventListener("visibilitychange",this._h.visibility),window.addEventListener("mousemove",this._h.mousemove),window.addEventListener("mousedown",this._h.mousedown),window.addEventListener("mouseup",this._h.mouseup),(t=this.dom)==null||t.addEventListener("mousedown",this._h.domdown),document.addEventListener("pointerlockchange",this._h.lockchange),document.addEventListener("pointerlockerror",this._h.lockerror))}dispose(){var t;this._settleLock(),!(typeof window>"u"||!this._h)&&(window.removeEventListener("keydown",this._h.keydown),window.removeEventListener("keyup",this._h.keyup),window.removeEventListener("blur",this._h.blur),window.removeEventListener("focus",this._h.focus),document.removeEventListener("visibilitychange",this._h.visibility),window.removeEventListener("mousemove",this._h.mousemove),window.removeEventListener("mousedown",this._h.mousedown),window.removeEventListener("mouseup",this._h.mouseup),(t=this.dom)==null||t.removeEventListener("mousedown",this._h.domdown),document.removeEventListener("pointerlockchange",this._h.lockchange),document.removeEventListener("pointerlockerror",this._h.lockerror),this._h=null,this._interactFns.length=0,this._pauseFns.length=0,this._locked&&this.releaseLock())}releaseKeys(){return this._down.clear(),this._pressed.clear(),this}get locked(){return this._locked}get paused(){return!this._locked}get stepPhase(){return this._bob}onPause(t){return t&&this._pauseFns.push(t),this}lockWhen(t){return this._canLock=t||null,this}requestLock(){var e,i;if(this._locked||this._lockPending||!((e=this.dom)!=null&&e.requestPointerLock))return;this._lockPending=!0,clearTimeout(this._lockTimer),this._lockTimer=setTimeout(()=>{this._lockPending=!1},GS);let t;try{t=this.dom.requestPointerLock()}catch(s){this._failLock(s);return}(i=t==null?void 0:t.catch)==null||i.call(t,s=>this._failLock(s))}releaseLock(){var t;this._settleLock(),this._setLocked(!1),typeof document<"u"&&((t=document.exitPointerLock)==null||t.call(document))}_settleLock(){this._lockPending=!1,clearTimeout(this._lockTimer),this._lockTimer=0}_failLock(t){const e=this._lockPending;this._settleLock(),e&&(this._setLocked(!1),console.warn("[walker] pointer lock refused; staying paused",t||""))}_setLocked(t){if(this._locked!==t){this._locked=t,this._clearHeld(),t||this._setTarget(null);for(const e of this._pauseFns)e(!t)}}_clearHeld(){this._down.clear(),this._pressed.clear(),this._mouseDX=0,this._mouseDY=0}_isDown(t){return lu[t].some(e=>this._down.has(e))}_wasPressed(t){return lu[t].some(e=>this._pressed.has(e))}update(t){if(t=Math.min(t,BS),!(t>0)){this._pressed.clear();return}if(this._locked&&(this.yaw-=this._mouseDX*Mf,this.pitch-=this._mouseDY*Mf,this.pitch=Math.max(-yf,Math.min(yf,this.pitch))),this._mouseDX=0,this._mouseDY=0,this._locked?this._move(t):(this.velocity.x=0,this.velocity.z=0,this.horizontalSpeed=0,this._applyGravity(t)),this.driveCamera&&this._commitCamera(t),this._updateTarget(),this._target&&(this._wasPressed("interact")||this._pressed.has("Mouse0"))){const e=this._target;for(const i of this._interactFns)i(e)}this._pressed.clear()}_move(t){let e=0,i=0;this._isDown("forward")&&(i+=1),this._isDown("back")&&(i-=1),this._isDown("right")&&(e+=1),this._isDown("left")&&(e-=1);const s=Math.hypot(e,i);s>1&&(e/=s,i/=s);const r=Math.sin(this.yaw),o=Math.cos(this.yaw),a=this._dir.set(r*i+-o*e,0,o*i+r*e);a.lengthSq()>0&&a.normalize();const c=this._isDown("run")?Le.RUN:Le.SPEED,l=this.onGround?US:FS,u=Math.min(1,l*t);this.velocity.x+=(a.x*c-this.velocity.x)*u,this.velocity.z+=(a.z*c-this.velocity.z)*u,this._applyGravity(t),this._collide(t);const h=this._floorUnder(this.position.x,this.position.z,this.position.y);this.position.y<h&&(this.position.y=h,this.velocity.y=0,this.onGround=!0),this.horizontalSpeed=Math.hypot(this.velocity.x,this.velocity.z)}_applyGravity(t){this.velocity.y-=Le.GRAVITY*t,this.position.y+=this.velocity.y*t;const e=this._floorUnder(this.position.x,this.position.z,this.position.y);this.position.y<=e?(this.position.y=e,this.velocity.y=0,this.onGround=!0):this.onGround=!1}_floorUnder(t,e,i){var a;const s=Le.RADIUS;let r=-1/0;const o=((a=this.build)==null?void 0:a.colliders)||Mi;for(let c=0;c<o.length;c++){const l=o[c];l.walkable&&(t<l.min.x-s||t>l.max.x+s||e<l.min.z-s||e>l.max.z+s||l.max.y<=i+Le.STEP&&l.max.y>r&&(r=l.max.y))}return r===-1/0?(this._warnedFloor||(this._warnedFloor=!0,console.warn("[walker] no walkable collider under the player — holding at y = 0. floor() is the only thing that makes one.")),0):r}_collide(t){this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t;for(let e=0;e<zS;e++){const i=eh(this.collision,this.position.x,this.position.z,{y:this.position.y,onPush:this._killInto});if(this.position.x=i.x,this.position.z=i.z,!i.contacts)break}qS(this.collision,this.position.x,this.position.z,{y:this.position.y})?(this.position.x=this._lastSafe.x,this.position.z=this._lastSafe.z,this.velocity.x=0,this.velocity.z=0):this._lastSafe.copy(this.position)}_commitCamera(t){const e=this.position.y+Le.EYE;let i=0,s=0;this.horizontalSpeed>.3?(this._bob+=t*this.horizontalSpeed*1.9,s=Math.sin(this._bob*2)*.035,i=Math.cos(this._bob)*.014):this._bob=0,this.camera.position.set(this.position.x+i,e+s,this.position.z),this.camera.rotation.set(this.pitch,this.yaw+Math.PI,0,"YXZ")}get target(){return this._target}onInteract(t){return t&&this._interactFns.push(t),this}_updateTarget(){var a;if(!this._locked){this._setTarget(null);return}const t=((a=this.build)==null?void 0:a.interactables)||Mi;if(!t.length){this._setTarget(null);return}this.camera.getWorldDirection(this._fwd);const e=this.camera.position,i=this.position.x,s=this.position.z;let r=null,o=1/0;for(let c=0;c<t.length;c++){const l=t[c],u=l.pos.x-i,h=l.pos.z-s,d=Math.hypot(u,h);if(d>=(l.radius||1.8))continue;const f=l.pos.x-e.x,p=l.pos.y-e.y,_=l.pos.z-e.z,g=Math.hypot(f,p,_)||1,m=(f*this._fwd.x+p*this._fwd.y+_*this._fwd.z)/g,v=Math.acos(Math.min(1,Math.max(-1,m)));if(v>kS)continue;const M=v+d*.1;M>=o||(o=M,r=l)}this._setTarget(r)}_setTarget(t){const e=t?t.label:null;this._target===t&&this._targetLabel===e||(this._target=t,this._targetLabel=e,this.prompt=t?{id:t.id,label:t.label}:null)}teleport(t,e=0,i=0,s){if(t&&typeof t=="object"){const r=t;s=typeof e=="number"?e:void 0,t=r.x??r[0]??0,i=r.z??r[2]??0,e=r.y??r[1]??0}return this.position.set(t,e,i),this.position.y=Math.max(e,this._floorUnder(t,i,e)),this.velocity.set(0,0,0),this.horizontalSpeed=0,this.onGround=!0,this._bob=0,typeof s=="number"&&(this.yaw=s),this._lastSafe.copy(this.position),this.driveCamera&&this._commitCamera(0),this.position}setWorld(t){var e,i;if(!t)throw new Error("Walker.setWorld: no world");return this.world=t,this.build=t.build??this.build,this.collision=t.collision??((i=(e=t.build)==null?void 0:e.userData)==null?void 0:i.collision)??this.collision,this.surface=t.surface??null,this._warnedFloor=!1,this._lastSafe.copy(this.position),this._setTarget(null),this}crossTo(t,e=0){return this.position.applyMatrix4(t),Sf.setFromMatrix4(t),this.velocity.applyMatrix3(Sf),this.yaw+=e,this.yaw>Math.PI?this.yaw-=2*Math.PI:this.yaw<=-Math.PI&&(this.yaw+=2*Math.PI),this._lastSafe.copy(this.position),this.position}}const Sf=new Zt,Te=Object.freeze({length:.175,shaftR:.0072,collarR:.0086,tipR:.0055,tipL:.02,capL:.016,rest:Object.freeze({x:.118,y:-.132,z:-.33,pitch:.4,yaw:-.22,roll:.16}),aim:Object.freeze({x:.055,y:-.062,z:-.235,pitch:.16,yaw:-.3,roll:.08}),stowDrop:.23}),YS=.26,$S=.13,jS=2.4,Sr={},lr=(n,t)=>Sr[n]||(Sr[n]=t()),Ef=n=>1-(1-n)*(1-n)*(1-n);function KS(){const n=new xe;n.name="sonic.markI";const t=new un({color:12172738,roughness:.28,metalness:0}),e=new un({color:1776928,roughness:.62,metalness:0}),i=new li({color:9425151,toneMapped:!1}),s=Te.length,r=-s/2,o=16,a=s-Te.tipL-Te.capL,c=new Pt(lr("sonic.shaft",()=>new ne(Te.shaftR,Te.shaftR,1,o)),t);c.scale.y=a,c.rotation.x=Math.PI/2,c.position.z=r+Te.tipL+a/2,n.add(c);const l=new Pt(lr("sonic.collar",()=>new ne(Te.collarR,Te.collarR,1,o)),t);l.scale.y=.011,l.rotation.x=Math.PI/2,l.position.z=r+Te.tipL+.0055,n.add(l);const u=new Pt(lr("sonic.band",()=>new ne(Te.shaftR+9e-4,Te.shaftR+9e-4,1,o)),e);u.scale.y=.004,u.rotation.x=Math.PI/2,u.position.z=r+Te.tipL+a*.62,n.add(u);const h=new Pt(lr("sonic.tip",()=>new ne(Te.tipR,Te.shaftR,1,o)),e);h.scale.y=Te.tipL,h.rotation.x=-Math.PI/2,h.position.z=r+Te.tipL/2,n.add(h);const d=new Pt(lr("sonic.cap",()=>new Yi(1,o,8,0,Math.PI*2,0,Math.PI/2)),e);d.scale.set(Te.shaftR,Te.capL,Te.shaftR),d.rotation.x=Math.PI/2,d.position.z=s/2-Te.capL,n.add(d);const f=new Pt(lr("sonic.lamp",()=>new Yi(1,12,8)),i);return f.scale.setScalar(Te.tipR*.92),f.position.z=r-.002,f.visible=!1,n.add(f),{group:n,lamp:f,materials:[t,e,i]}}function ZS({reach:n=6,cone:t=.3}={}){const{group:e,lamp:i,materials:s}=KS(),r=new mc;r.name="viewmodel";const o=new cn(48,1,.01,1);r.add(e);const a=new Y0(16774374,2.3);a.position.set(-.55,.8,.6);const c=new Nu(13162239,.55);r.add(a,c);const l=a.intensity,u=c.intensity;let h=0,d=0,f=0,p=0,_=-1,g=0,m=1;const v=new B,M=new B;function S(){const w=Ef(f),E=Te.rest,T=Te.aim,N=(k,L)=>k+(L-k)*w,x=1-w*.85,y=Math.sin(g*.83)*.0032*x,R=Math.sin(g*1.27+1.1)*.004*x,C=Math.sin(g*.61+.4)*.016*x,O=(1-Ef(h))*Te.stowDrop;e.position.set(N(E.x,T.x)+y,N(E.y,T.y)+R-O,N(E.z,T.z)),e.rotation.set(N(E.pitch,T.pitch),N(E.yaw,T.yaw),N(E.roll,T.roll)+C)}const A={group:e,scene:r,camera:o,materials:s,get out(){return d===1},get drawn(){return h},get aiming(){return p===1&&h>.6},get firing(){return _>=0},reach:n,cone:t,get liveReach(){return this.aiming?n*jS:n},get liveCone(){return t},toggle(){return d=d?0:1,d||(p=0,_=-1,i.visible=!1),!!d},draw(){return d=1,!0},stow(){d=0,p=0,_=-1,i.visible=!1},setAim(w){return p=w&&d?1:0,!!p},fire(){return!d||h<.6?!1:(_=0,!0)},setMood(w){m=Math.min(1,Math.max(.12,w)),a.intensity=l*m,c.intensity=u*(.45+.55*m)},beam(w,E=new B,T=new B){return E.copy(w.position),w.getWorldDirection(T),{origin:E,dir:T}},target(w,E){if(!d||h<.6)return null;const T=(E==null?void 0:E.interactables)||[];if(!T.length)return null;const{origin:N,dir:x}=this.beam(w,v,M);let y=null,R=1/0;for(const C of T){if(C.sonic===!1)continue;const O=C.pos.x-N.x,k=C.pos.y-N.y,L=C.pos.z-N.z,D=Math.hypot(O,k,L)||1;if(D>this.liveReach)continue;const F=(O*x.x+k*x.y+L*x.z)/D;if(F<=0)continue;const X=Math.acos(Math.min(1,F));if(X>this.liveCone)continue;const K=X+D*.02;K>=R||(R=K,y=C)}return y},update(w){const E=Math.min(Math.max(w||0,0),.1);g+=E;const T=(N,x,y)=>{const R=E/y;return x>N?Math.min(x,N+R):Math.max(x,N-R)};if(h=T(h,d,YS),f=T(f,p&&h>.6?1:0,$S),_>=0){_+=E;const N=_<.42&&Math.sin(_*54)>-.35;i.visible=N,_>=.42&&(_=-1,i.visible=!1)}S()},pass(w,E){if(h<=.001&&d===0)return!1;E&&o.aspect!==E.aspect&&(o.aspect=E.aspect,o.updateProjectionMatrix());const T=w.autoClear;return w.autoClear=!1,w.clearDepth(),w.render(r,o),w.autoClear=T,!0},dispose(){for(const w of s)w.dispose();for(const w of Object.keys(Sr))Sr[w].dispose(),delete Sr[w]}};return A.setMood(1),S(),A}function JS({landings:n,sites:t,known:e=null}={}){if(!n)throw new Error("makeNav: no landings table");if(!t)throw new Error("makeNav: no sites table");const i=Object.freeze(Object.keys(n));for(const l of i)if(!t[n[l].site])throw new Error(`makeNav: landing '${l}' names site '${n[l].site}', which does not ship`);const s=new Map;for(const l of i)s.set(l,{known:e?e.includes(l):!0,locked:null,note:null});let r=null,o=null;const a=l=>{var u;return n[l].name??((u=t[n[l].site])==null?void 0:u.name)??n[l].site},c={get keys(){return i},get objective(){return r},get objectiveNote(){return r?s.get(r).note:null},get selected(){return o},list(l=null){const u=[];for(const h of i){const d=s.get(h);d.known&&u.push({key:h,name:a(h),site:n[h].site,here:h===l,locked:d.locked,objective:h===r,note:d.note,selectable:!d.locked&&h!==l})}return u},move(l,u=null){const h=c.list(u).filter(f=>f.selectable);if(!h.length)return o=null,null;let d=h.findIndex(f=>f.key===o);return d<0?d=0:d=(d+l+h.length*2)%h.length,o=h[d].key,o},clear(){return o=null,c},select(l,u=null){if(!s.has(l))return`unknown coordinates: ${l}`;const h=s.get(l);return h.known?h.locked?h.locked:l===u?"The ship is already there.":(o=l,null):`unknown coordinates: ${l}`},selectObjective(l=null){return r&&!c.select(r,l)?r:c.move(0,l)},setKnown(l,u=!0){if(!s.has(l))throw new Error(`nav.setKnown: no landing '${l}'`);return s.get(l).known=!!u,!u&&o===l&&(o=null),!u&&r===l&&(r=null),c},setLocked(l,u=null){if(!s.has(l))throw new Error(`nav.setLocked: no landing '${l}'`);if(u!==null&&typeof u!="string")throw new Error("nav.setLocked: the second argument is the REASON, as a string — a bare true gives the player a destination that refuses and says nothing, which is the one thing worse than no destination");return s.get(l).locked=u,u&&o===l&&(o=null),c},setObjective(l,u=null){if(l===null)return r=null,c;if(!s.has(l))throw new Error(`nav.setObjective: no landing '${l}'`);return s.get(l).known=!0,s.get(l).note=u,r=l,c},save(){const l={objective:r,selected:o,dest:{}};for(const[u,h]of s)l.dest[u]={known:h.known,locked:h.locked,note:h.note};return l},restore(l){if(!l)return c;for(const[u,h]of Object.entries(l.dest||{}))s.has(u)&&Object.assign(s.get(u),h);return r=s.has(l.objective)?l.objective:null,o=s.has(l.selected)?l.selected:null,c}};return c}const wf=Object.freeze(["Ordinary. Depressingly so.","Nothing. Which is itself mildly interesting.","Local manufacture. Local everything.","Inert. No field, no trace, no fun at all.","It is exactly what it looks like."]),QS=n=>{let t=0;for(let e=0;e<n.length;e++)t=t*31+n.charCodeAt(e)|0;return Math.abs(t)};function tE({onGrant:n=null}={}){const t=new Map,e=new Set,i=new Set;function s(o){return o?typeof o=="string"?{id:o,title:o}:o.id?{id:o.id,title:o.label||o.id}:null:null}const r={get known(){return[...e]},has:o=>e.has(o),register(o,a){if(!o)throw new Error("analyse.register: no id");if(!a||!Array.isArray(a.lines)||!a.lines.length)throw new Error(`analyse.register('${o}'): a report needs at least one line`);const c=a.lines.filter(l=>l.length>36);if(c.length)throw new Error(`analyse.register('${o}'): ${c.length} line(s) over 36 characters. Only the middle 0.700 of the scanner is visible — the parked shutters cover the rest — so a longer line does not wrap, it goes behind a steel leaf: `+JSON.stringify(c[0]));return t.set(o,{title:a.title??null,lines:a.lines.slice(),grants:(a.grants??[]).slice(),again:a.again?a.again.slice():null}),r},forget(o){return t.delete(o),r},read(o){const a=s(o);if(!a)return{title:"NO SUBJECT",lines:["Point it at something."],grants:[],known:!1};const c=t.get(a.id),l=i.has(a.id);if(i.add(a.id),!c)return{title:(a.title||a.id).toUpperCase(),lines:[wf[QS(a.id)%wf.length]],grants:[],known:!1};const u=c.grants.filter(h=>!e.has(h));for(const h of u)e.add(h),n==null||n(h);return{title:(c.title??a.title??a.id).toUpperCase(),lines:l&&c.again?c.again.slice():c.lines.slice(),grants:u,known:!0}},save(){return{known:[...e],seen:[...i]}},restore(o){if(!o)return r;for(const a of o.known??[])e.add(a);for(const a of o.seen??[])i.add(a);return r}};return r}const va=90;function eE({character:n="doctor",trait:t=null,onFlag:e=null,knows:i=null}={}){const s=new Map,r=new Set;let o=null,a=null,c=0,l=[];const u=n==="doctor";function h(p){return!(p.only&&p.only!==n||p.trait&&!(u||p.trait===t)||p.if&&!(r.has(p.if)||i!=null&&i(p.if))||p.unless&&(r.has(p.unless)||i!=null&&i(p.unless)))}function d(p){for(const _ of p??[])r.has(_)||(r.add(_),e==null||e(_))}const f={get active(){return!!a},get id(){return(o==null?void 0:o.id)??null},get node(){return a},get who(){return(a==null?void 0:a.who)??null},get text(){return(a==null?void 0:a.text)??null},get cursor(){return c},get flags(){return[...r]},get history(){return[...l]},get options(){return((a==null?void 0:a.options)??[]).filter(h)},load(p,_){if(!(_!=null&&_.nodes)||!_.start)throw new Error(`dialogue.load('${p}'): a graph needs { start, nodes }`);if(!_.nodes[_.start])throw new Error(`dialogue.load('${p}'): start node '${_.start}' is not in the graph`);const g=[];for(const[M,S]of Object.entries(_.nodes)){typeof S.text!="string"||!S.text.length?g.push(`${M} has no text`):S.text.length>va&&g.push(`${M} is ${S.text.length} characters, over the ${va} a subtitle can hold`);for(const A of S.options??[])typeof A.text!="string"||!A.text.length?g.push(`${M}: an option has no text`):A.text.length>va&&g.push(`${M}: an option is over ${va} characters`),A.goto!==void 0&&A.goto!==null&&!_.nodes[A.goto]&&g.push(`${M} -> '${A.goto}', which is not a node in this graph`)}const m=new Set([_.start]),v=[_.start];for(;v.length;){const M=_.nodes[v.pop()];for(const S of M.options??[])S.goto&&!m.has(S.goto)&&(m.add(S.goto),v.push(S.goto))}for(const M of Object.keys(_.nodes))m.has(M)||g.push(`${M} is unreachable from '${_.start}'`);if(g.length)throw new Error(`dialogue.load('${p}'): ${g.length} problem(s) — ${g.join("; ")}`);return s.set(p,_),f},has:p=>s.has(p),start(p){const _=s.get(p);return _?(o={id:p,graph:_},a=_.nodes[_.start],l=[_.start],c=0,d(a.grants),!0):!1},move(p){const _=f.options.length;return _?(c=(c+p+_*2)%_,c):(c=0,0)},choose(){if(!a)return"idle";const p=f.options;if(!p.length)return f.end(),"ended";const _=p[Math.min(c,p.length-1)];return d(_.grants),_.trait&&_.trait===t&&d(_.bonus),_.goto?(a=o.graph.nodes[_.goto],l.push(_.goto),c=0,d(a.grants),"moved"):(f.end(),"ended")},end(){o=null,a=null,c=0},save(){return{flags:[...r],history:[...l]}},restore(p){for(const _ of(p==null?void 0:p.flags)??[])r.add(_);return p!=null&&p.history&&(l=[...p.history]),f}};return f}const tn=Object.freeze({ORIGIN:"knows.origin",PATTERN:"knows.pattern",CARRIER:"knows.carrier",INTENT:"knows.intent",CHOSE_RECORDS:"chose.records",CHOSE_LIGHTS:"chose.lights",BIOELECTRIC:"knows.bioelectric"}),nE={start:"arr-01",nodes:{"arr-01":{who:"SYSTEM",text:"The doors unseal. The air smells of ozone and burnt copper.",options:[{text:"Listen to the alley.",goto:"arr-02"},{text:"Run a frequency sweep first.",only:"doctor",goto:"arr-sweep"}]},"arr-sweep":{who:"THE DOCTOR",text:"Rule one of telecommunications: never answer a wire that sings.",grants:[tn.BIOELECTRIC],options:[{text:"It is drawn to living things. Bio-electric fields.",only:"doctor",goto:"arr-02"}]},"arr-02":{who:"THE DOCTOR",text:"Something down here is ringing. And nobody at all is answering it.",options:[]}}},iE={start:"doc-02",nodes:{"doc-02":{who:"THE PHONE",text:"Click. Four five five. Static. The audio junction is overloading.",options:[{text:"Divert the surge into the phone line. Save the records.",goto:"doc-records",grants:[tn.CHOSE_RECORDS]},{text:"Sever the exchange ground. Keep the lights.",goto:"doc-lights",grants:[tn.CHOSE_LIGHTS]}]},"doc-records":{who:"SYSTEM",text:"The records hold. Every window on the ground floor goes dark at once.",options:[{text:"Then I will do it in the dark.",goto:"doc-origin"}]},"doc-lights":{who:"SYSTEM",text:'The lights hold. A chime inside: "Index forty per cent complete."',options:[{text:"Forty per cent of what?",goto:"doc-origin"}]},"doc-origin":{who:"THE DOCTOR",text:"It is not broadcasting from out there. It hatched in the wiring.",grants:[tn.ORIGIN],options:[]}}},sE={start:"echo-pol-01",nodes:{"echo-pol-01":{who:"SYSTEM",text:"A police receiver hangs from the rail, still warm, still looping.",options:[{text:"Listen to the loop.",goto:"echo-pol-02"}]},"echo-pol-02":{who:"DISPATCH",text:"Unit four, report. It cycles every twelve minutes. Do not—",options:[{text:"Twelve minutes. Somebody timed it before I got here.",goto:"echo-pol-03"}]},"echo-pol-03":{who:"THE DOCTOR",text:"And then put the receiver down. Which is the part I mind.",grants:[tn.PATTERN],options:[]}}},rE={start:"echo-nur-01",nodes:{"echo-nur-01":{who:"SYSTEM",text:"A triage printer is still going. The floor is deep in paper.",options:[{text:"Read the last sheet.",goto:"echo-nur-02"}]},"echo-nur-02":{who:"SYSTEM",text:"Acute acoustic trauma. Blue scarring inside the auditory canal.",options:[{text:"Through the air?",goto:"echo-nur-03"},{text:"Scarring that deep is contact, not air.",trait:"MEDIC",goto:"echo-nur-03",bonus:[tn.CARRIER]}]},"echo-nur-03":{who:"THE DOCTOR",text:"Copper and speaker coils. It goes where the wire goes.",grants:[tn.CARRIER],options:[]}}},oE={start:"echo-tch-01",nodes:{"echo-tch-01":{who:"SYSTEM",text:"A terminal at the desk is jammed mid-print, one line repeating.",options:[{text:"Read it.",goto:"echo-tch-02"}]},"echo-tch-02":{who:"TERMINAL",text:"PATIENT_FILES -> AUDIO_STREAM. 41%. 42%. 42%. 42%.",options:[{text:"It is not deleting them. It is reading them.",goto:"echo-tch-03"}]},"echo-tch-03":{who:"THE DOCTOR",text:"An index. It is learning who everyone in this building is.",grants:[tn.INTENT],options:[]}}},aE={start:"sol-01",nodes:{"sol-01":{who:"SYSTEM",text:"The lobby. The security desk is abandoned. Ward B is shut.",options:[{text:"Twelve minutes. 455 hertz. An index. Born in the wiring.",if:tn.INTENT,goto:"sol-full"},{text:"Not enough of it yet. Go back and look again.",goto:null}]},"sol-full":{who:"THE DOCTOR",text:"Pattern, carrier, intent, origin. That is a whole shape.",options:[{text:"Set the sonic to 455 and open Ward B.",only:"doctor",goto:"sol-open"}]},"sol-open":{who:"SYSTEM",text:"The sonic shrieks at 455. Ward B unlatches and rolls back.",options:[]}}},cE={id:"frequency",title:"THE FREQUENCY",teaches:[tn.ORIGIN,tn.PATTERN,tn.CARRIER,tn.INTENT,tn.CHOSE_RECORDS,tn.CHOSE_LIGHTS,tn.BIOELECTRIC],acts:[{id:"act1",title:"ACT ONE",scenes:[{id:"a1s1",title:"THE ALLEY",beats:[{id:"s1-aboard",trigger:"now",say:"The rotor is still. Outside, something is drawing more current than it should."},{id:"s1-step",trigger:"enter",at:"alley",objective:"Open the doors and step outside.",note:"The ship has stopped somewhere it did not choose.",talk:"arrival"},{id:"s1-ring",trigger:"talk",at:"arrival",cue:"ring.on",say:"A telephone is ringing somewhere down the alley."},{id:"s1-phone",trigger:"interact",at:"alleyPhone",objective:"Find the telephone. Follow the ringing.",note:"It is on a wall, under a hood, near a door.",talk:"phone",cue:"ring.off"},{id:"s1-junction",trigger:"talk",at:"phone"},{id:"s1-inside",trigger:"interact",at:"alleyFireDoor",objective:"Get inside the building.",note:"The fire door on the right-hand wall.",needs:[tn.ORIGIN],refuse:"Not yet. Whatever is in there, I do not know what it is yet.",end:!0,say:"The bar gives. Inside it is warm, and it hums."}]}]}]},bf=Object.freeze({"site.alley":{title:"THE ALLEY",lines:["Terrestrial. Early 21st century.","Artron trace in the drain.","Something left in a hurry."]},alleyPhone:{title:"WALL TELEPHONE",lines:["Copper pair. Carrier at 455 Hz.","Drawing 40x what a bell needs.","The handset is already off."],again:["Still 455. Still climbing."]},alleyFireDoor:{title:"FIRE DOOR",lines:["Steel. Sprung. Unlocked.","Warm to the touch, from inside."]},shellDoors:{title:"THE DOORS",lines:["Mine. Shut behind me, I hope."]}});function lE(n){if(!n)throw new Error("frequency: no ship API");n.talk.load("arrival",nE),n.talk.load("phone",iE),n.talk.load("echo.police",sE),n.talk.load("echo.nurse",rE),n.talk.load("echo.tech",oE),n.talk.load("lobby",aE);for(const[t,e]of Object.entries(bf))n.analyse.register(t,e);return{FLAGS:tn,episode:cE,conversations:["arrival","phone","echo.police","echo.nurse","echo.tech","lobby"],readings:Object.keys(bf)}}const Af=Object.freeze(["now","enter","interact","flag","talk"]);function uE({ship:n,say:t=null,onBeat:e=null,onCheckpoint:i=null,knows:s=null}={}){if(!n)throw new Error("makeEpisode: no ship API");let r=null,o=-1,a=!1,c=[];const l=p=>{var _;return s?!!s(p):!!((_=n.knows)!=null&&_.call(n,p))};function u(p){var S;const _=[],g=new Set,m=[],v=[];for(const A of p.acts??[]){A.id||m.push("an act has no id");for(const w of A.scenes??[]){w.id||m.push(`act ${A.id}: a scene has no id`),v.push({act:A.id,id:w.id,title:w.title??w.id});let E=!0;for(const T of w.beats??[]){if(!T.id){m.push(`${A.id}/${w.id}: a beat has no id`);continue}g.has(T.id)&&m.push(`beat id '${T.id}' is used twice`),g.add(T.id),Af.includes(T.trigger)||m.push(`beat '${T.id}': trigger '${T.trigger}' is not one of ${Af.join(" | ")}`),T.trigger!=="now"&&!T.at&&m.push(`beat '${T.id}': a '${T.trigger}' trigger needs an 'at' to name its subject`),T.talk&&((S=n.talk)!=null&&S.has)&&!n.talk.has(T.talk)&&m.push(`beat '${T.id}': conversation '${T.talk}' is not loaded`),_.push({...T,act:A.id,scene:w.id,sceneTitle:w.title??w.id,actTitle:A.title??A.id,opensScene:E}),E=!1}}}_.length||m.push("an episode with no beats");const M=new Set(p.teaches??[]);for(const A of _)for(const w of A.grants??[])M.add(w);for(const A of _)for(const w of A.needs??[])M.has(w)||m.push(`beat '${A.id}' needs '${w}', which nothing in this episode grants — list it in the episode's \`teaches\` if a conversation or a reading provides it`);if(m.length)throw new Error(`episode.load('${p.id}'): ${m.length} problem(s) — ${m.join("; ")}`);return{beats:_,scenes:v}}function h(p){var _,g,m;c.push(p.id),p.opensScene&&(i==null||i(p)),p.say&&(t==null||t(p.say));for(const v of p.grants??[])(_=n.learn)==null||_.call(n,v);p.talk&&((m=(g=n.talk)==null?void 0:g.open)==null||m.call(g,p.talk)),e==null||e(p)}function d(){if(!(a||!r)){a=!0;try{let p=0;for(;o>=0&&o<r.beats.length&&r.beats[o].trigger==="now";){const _=r.beats[o];if((_.needs??[]).some(g=>!l(g))||(h(_),o+=1,++p>r.beats.length+1))break}}finally{a=!1}}}const f={get id(){return(r==null?void 0:r.id)??null},get title(){return(r==null?void 0:r.title)??null},get begun(){return o>=0},get over(){return!!r&&o>=r.beats.length},get beat(){return r&&o>=0&&o<r.beats.length?r.beats[o]:null},get act(){var p;return((p=f.beat)==null?void 0:p.actTitle)??null},get scene(){var p;return((p=f.beat)==null?void 0:p.sceneTitle)??null},get objective(){var p;return((p=f.beat)==null?void 0:p.objective)??null},get note(){var p;return((p=f.beat)==null?void 0:p.note)??null},get done(){return[...c]},get beats(){return r?r.beats.map(p=>p.id):[]},load(p){if(!(p!=null&&p.id)||!p.acts)throw new Error("episode.load: needs { id, acts }");const{beats:_,scenes:g}=u(p);return r={id:p.id,title:p.title??p.id,acts:p.acts,beats:_,scenes:g},o=-1,c=[],f},begin(){return!r||o>=0?!1:(o=0,d(),!0)},fire(p,_){const g=f.beat;return!g||g.trigger!==p||g.at!==_?null:(g.needs??[]).filter(v=>!l(v)).length?g.refuse??"Not yet. There is a piece of this missing.":(h(g),o+=1,d(),null)},wants(p,_){const g=f.beat;return!!g&&g.trigger===p&&g.at===_},save(){var p;return{id:(r==null?void 0:r.id)??null,at:((p=f.beat)==null?void 0:p.id)??null,done:[...c]}},restore(p){if(!r||!p||p.id&&p.id!==r.id)return f;const _=r.beats.findIndex(g=>g.id===p.at);return _<0||(o=_,c=[...p.done??[]]),f}};return f}const hE=Object.freeze({ARCH_HW:.7,ARCH_H:2.2,HALL_HW:1.1,HALL_Z0:-et.STRUCT_FACE,HALL_Z1:-et.STRUCT_FACE-8.1,SIDE_W:4.05,SIDE_HL:1.8,SIDE_MID:-et.STRUCT_FACE-5.4,SIDE_ARCH_HL:.6,LIV_HW:3.6,LIV_D:5.4,CEIL_H:et.CEIL_H}),dE=.8;function to(n,t,e,i,s){if(!(i>t&&s>e))throw new Error(`rectZone('${n}'): corners are the wrong way round`);return{id:n,planes:[{nx:1,nz:0,d:i},{nx:-1,nz:0,d:-t},{nx:0,nz:1,d:s},{nx:0,nz:-1,d:-e}],rect:[t,e,i,s]}}function fE(n,t){if(!n.rect||!t.rect)return 1/0;const[e,i,s,r]=n.rect,[o,a,c,l]=t.rect,u=Math.min(s,c)-Math.max(e,o),h=Math.min(r,l)-Math.max(i,a);return u<=0||h<=0?0:Math.min(u,h)}function pE(n,{minOverlap:t=dE}={}){const e=[];for(const i of n){let s=0;for(const r of n)r!==i&&(s=Math.max(s,fE(i,r)));s<t&&e.push(`${i.id} (widest overlap ${s.toFixed(3)})`)}if(e.length&&n.length>1)throw new Error(`interior zones: ${e.join(", ")} — every zone must overlap another by at least ${t} m, which is the player's own diameter plus a margin. A narrower overlap is a doorway that looks open and traps the player in it`);return n}function mE(n,t){const e=hE,i=e.ARCH_HW,s={height:e.CEIL_H,thickness:.14,colour:kt.BAND,surface:"trim",skirting:!1,cornice:!1,autoServices:!1,graded:!1,inner:1},r=e.HALL_HW,o=e.SIDE_MID+e.SIDE_ARCH_HL,a=e.SIDE_MID-e.SIDE_ARCH_HL;for(const rt of[-1,1]){const ot=rt*r;Me(n,ot,e.HALL_Z0,ot,o,{...s,inner:-rt,name:`hallW${rt>0?"E":"W"}1`}),Me(n,ot,o,ot,a,{...s,inner:-rt,y0:e.ARCH_H,height:e.CEIL_H-e.ARCH_H,name:`hallLintel${rt>0?"E":"W"}`}),Me(n,ot,a,ot,e.HALL_Z1,{...s,inner:-rt,name:`hallW${rt>0?"E":"W"}2`})}Me(n,-r,e.HALL_Z1,-i,e.HALL_Z1,{...s,inner:-1,name:"endJambL"}),Me(n,-i,e.HALL_Z1,i,e.HALL_Z1,{...s,inner:-1,y0:e.ARCH_H,height:e.CEIL_H-e.ARCH_H,name:"endLintel"}),Me(n,i,e.HALL_Z1,r,e.HALL_Z1,{...s,inner:-1,name:"endJambR"});const c=e.HALL_Z1,l=e.HALL_Z1-e.LIV_D,u=e.LIV_HW;Me(n,-u,c,-u,l,{...s,inner:-1,name:"livW"}),Me(n,-u,l,u,l,{...s,inner:-1,name:"livEnd"}),Me(n,u,l,u,c,{...s,inner:-1,name:"livE"});for(const rt of[-1,1])Me(n,rt*r,c,rt*u,c,{...s,inner:-1,name:`livReturn${rt>0?"E":"W"}`});const h=e.SIDE_MID-e.SIDE_HL,d=e.SIDE_MID+e.SIDE_HL;for(const rt of[-1,1]){const ot=rt*r,I=rt*(r+e.SIDE_W),b=rt>0?"store":"wardrobe";Me(n,ot,h,I,h,{...s,inner:rt,name:`${b}S`}),Me(n,I,h,I,d,{...s,inner:-rt,name:`${b}End`}),Me(n,I,d,ot,d,{...s,inner:-rt,name:`${b}N`})}const f=-3.6,p=f,_=e.HALL_Z1-e.LIV_D-.3,g=2*Math.max(e.HALL_HW+e.SIDE_W,e.LIV_HW)+.3,m=Math.abs(_-p),v=(p+_)/2,M=_t("dais",g,.3,m,kt.DAIS,{material:t.DAIS,cast:!1});M.position.set(0,-.15,v),n.add(M);const S=_t("ceil",g,.3,m,kt.CEIL,{material:t.CEIL,cast:!1});S.position.set(0,e.CEIL_H+.15,v),n.add(S);const A=et.BAND_TOP,w=.03,E=.06,T=.09,N=(rt,ot,I,b,G,tt)=>{const at=Math.hypot(I-rt,b-ot),nt=Math.atan2(-(b-ot)/at,(I-rt)/at),yt=(rt+I)/2,ft=(ot+b)/2,Mt=_t("chrome",at,w,E,kt.CHROME,{material:t.CHROME,cast:!1});Mt.position.set(yt+G*.026,A+w/2,ft+tt*.026),Mt.rotation.y=nt,n.add(Mt);const Jt=_t("trim",at,T,.014,kt.GLOW_W,{material:t.GLOW_W,cast:!1});Jt.position.set(yt+G*.007,A+T/2,ft+tt*.007),Jt.rotation.y=nt,n.add(Jt)};for(const rt of[-1,1])N(rt*r,e.HALL_Z0,rt*r,e.HALL_Z1,-rt,0),N(rt*(r+e.SIDE_W),h,rt*(r+e.SIDE_W),d,-rt,0);N(-r,e.HALL_Z1,r,e.HALL_Z1,0,1);const x=et.TILE,y=rt=>(Math.floor(rt/x)+.5)*x,R=[],C=(rt,ot,I,b)=>{R.push(b),Yd(n,t,rt,ot,I)},O=$r.T,k=s.thickness,L=r-k/2,D=r+e.SIDE_W-k/2,F=e.HALL_Z1+k/2;for(const rt of[-1,1]){const ot=rt*(L-O/2),I=rt>0?-Math.PI/2:Math.PI/2;for(const[b,G]of[[e.HALL_Z0,o],[a,e.HALL_Z1]]){const tt=Math.abs(G-b);if(tt<.5)continue;jr(n,t,tt,ot,(b+G)/2,I);const at=Math.min(b,G)+.45,nt=Math.max(b,G)-.45;let yt=0;for(let ft=y(at);ft<=nt;ft+=x,yt++)yt%2||C(rt*(L-O-$r.DISC_PROUD),ft,I,ft)}}for(const rt of[-1,1]){const ot=L-i;ot>.1&&jr(n,t,ot,rt*(i+ot/2),F+O/2,0)}const X=e.HALL_Z1,K=e.HALL_Z1-e.LIV_D,it=e.LIV_HW,dt=K+k/2,Q=it-k/2;jr(n,t,2*Q,0,dt+O/2,0);for(const rt of[y(-1.8),y(1.8)])C(rt,dt+O+$r.DISC_PROUD,0,rt);for(const rt of[-1,1]){const ot=rt*(Q-O/2),I=rt>0?-Math.PI/2:Math.PI/2;jr(n,t,e.LIV_D-k,ot,(K+X)/2,I);for(const b of[-1.8,1.8]){const G=y((K+X)/2+b);C(rt*(Q-O-$r.DISC_PROUD),G,I,G)}}for(const rt of[-1,1]){const ot=rt*(D-O/2),I=rt>0?Math.PI/2:-Math.PI/2;jr(n,t,2*e.SIDE_HL,ot,e.SIDE_MID,I);for(const b of[-.9,.9])Yd(n,t,rt*(D-O-$r.DISC_PROUD),e.SIDE_MID+b,I)}const z=e.CEIL_H-.1,U=(rt,ot)=>{n.light(rt,z,ot,16773596,5.2,7);const I=_t("trim",.44,.03,.44,kt.GLOW_W,{material:t.GLOW_W,chamfer:.01,cast:!1});I.position.set(rt,e.CEIL_H-.015,ot),n.add(I)};for(const rt of[e.HALL_Z0-1.5,e.SIDE_MID,e.HALL_Z1+1.6])U(0,rt);for(const rt of[-1,1])U(rt*(r+e.SIDE_W/2),e.SIDE_MID);for(const rt of[-1,1])U(rt*1.7,e.HALL_Z1-e.LIV_D/2);const Y=t.CONSOLE,J=[];let ut=null;const lt=(rt,ot,I,b)=>{const G=new xe;return G.position.set(rt,0,ot),G.rotation.y=I,n.add(G),J.push([rt,ot,ut]),b((tt,at,nt,yt,ft,Mt,Jt,pt=.006)=>{const Rt=_t("trim",at,nt,yt,kt.BAND,{material:tt,chamfer:pt,cast:!0});Rt.position.set(ft,Mt,Jt),G.add(Rt)}),G},ht=(rt,ot,I,b,G,tt,at,nt=0,yt=.006)=>{const ft=_t("trim",ot,I,b,kt.BAND,{material:rt,chamfer:yt,cast:!0});return ft.position.set(G,tt,at),ft.rotation.y=nt,J.push([G,at,ut]),n.add(ft)};for(const rt of[-1,1]){ut=rt>0?"store":"wardrobe";const ot=rt*(r-k/2+.02),I=rt*(D-O),b=(ot+I)/2,G=d-1.1;ht(t.JOINERY,2,.32,.9,b,.16,G,Math.PI/2),ht(Y,1.88,.14,.78,b,.39,G,Math.PI/2),ht(Y,.56,.12,.74,b,.52,G+.66,Math.PI/2),ht(t.JOINERY,.12,.76,.9,b,.38,d-.14,Math.PI/2),ht(t.JOINERY,.52,.62,.44,I-rt*.26,.31,G-1.28),ht(t.CHROME,.09,.24,.09,I-rt*.26,.74,G-1.28),ht(t.GLOW_W,.2,.12,.2,I-rt*.26,.905,G-1.28,0,.04),ht(t.JOINERY,1.1,2.05,.56,b+rt*.5,1.025,h+.32,Math.PI/2),ht(t.CHROME,.03,.03,.03,b+rt*.5-rt*.02,1.1,h+.6,0,.014),lt(ot+rt*.72,e.SIDE_MID-1.1,rt*.5,tt=>{tt(t.JOINERY,.44,.055,.42,0,.425,0),tt(t.JOINERY,.42,.56,.05,0,.73,-.185);for(const at of[-.18,.18])for(const nt of[-.17,.17])tt(t.JOINERY,.042,.4,.042,at,.2,nt,.004)})}ut="living";const gt=e.HALL_Z1-e.LIV_D/2,vt=(rt,ot,I,b=.9)=>{ht(t.JOINERY,b,.3,.86,rt,.15,ot,I),ht(Y,b-.12,.2,.74,rt,.4,ot,I),ht(Y,b-.12,.48,.18,rt-Math.sin(I)*.34,.54,ot-Math.cos(I)*.34,I);for(const G of[-1,1])ht(t.JOINERY,.11,.42,.78,rt+Math.cos(I)*G*(b/2-.055),.51,ot-Math.sin(I)*G*(b/2-.055),I)};vt(0,gt-1.45,0,2.1),vt(-1.55,gt+.15,Math.PI/2),vt(1.55,gt+.15,-Math.PI/2),ht(t.JOINERY,1.3,.07,.74,0,.43,gt+.15);for(const rt of[-.56,.56])for(const ot of[-.28,.28])ht(t.JOINERY,.07,.4,.07,rt,.2,gt+.15+ot,0,.006);ht(t.DECK,3.4,.014,2.6,0,.007,gt+.05,0,.004);const H=.3,se=2.25,Ct=3.6,Nt=.036;return lt(-(Q-O-H/2),gt,Math.PI/2,rt=>{rt(t.JOINERY,Ct,se,Nt,0,se/2,-H/2+Nt/2);for(const ot of[-1,1])rt(t.JOINERY,Nt,se,H,ot*(Ct/2-Nt/2),se/2,0);rt(t.JOINERY,Ct,Nt,H,0,se-Nt/2,0),rt(t.JOINERY,Ct,Nt,H,0,Nt/2,0);for(let ot=0;ot<4;ot++){const I=.42+ot*.47;rt(t.JOINERY,Ct-2*Nt,Nt,H-.02,0,I,0),rt(t.DARK,Ct-2*Nt-.06,.28,H-.1,0,I+.14+Nt/2,-.02,.004)}}),{zones:[to("arch",-i,e.HALL_Z0-.7,i,e.HALL_Z0+1.1),to("hall",-(L-O),F+O,L-O,e.HALL_Z0+.2),to("wardrobe",-(D-O),h,-(r-.9),d),to("store",r-.9,h,D-O,d),to("living",-(e.LIV_HW-k/2-O),e.HALL_Z1-e.LIV_D+k/2+O,e.LIV_HW-k/2-O,e.HALL_Z1+1.1)],PLAN:e,placed:J,discAt:R,slab:Object.freeze({near:Math.max(p,_),far:Math.min(p,_),edge:f}),spots:Object.freeze({arch:[0,e.HALL_Z0+.4],hall:[0,e.SIDE_MID],hallEnd:[0,e.HALL_Z1+1],living:[0,e.HALL_Z1-e.LIV_D/2],wardrobe:[-(r+e.SIDE_W/2),e.SIDE_MID],store:[r+e.SIDE_W/2,e.SIDE_MID]})}}function gE(n,t){var s,r,o;const e=(s=n.userData)==null?void 0:s.collision;if(!e)throw new Error("foldCollision: no collision bag — run shell() first");if(!((r=e.planes)!=null&&r.length)&&!((o=e.zones)!=null&&o.length))throw new Error("foldCollision: the console room published no planes. Either shell() did not run or its contract has changed, and either way the ship is about to have no walls");const i={id:"console",get planes(){return e.planes}};return e.zones=[i,...t],e}const Ts=1e-4;function _E(n,t,e,i,s,r){const o=!!r.loop,a=s+(e.at||0),c=o?1/0:Math.max(.02,e.dur??.2),l=(e.peak??1)*(r.gain??1);if(l<=0)return null;const u=Math.max(.001,e.a??.005),h=Math.max(0,e.d??0),d=e.s??1,f=Math.max(.005,e.r??.05),p=n.createGain();p.gain.value=Ts,p.connect(i);let _,g=null;const m=r.rate??1;if(e.src==="noise")_=n.createBufferSource(),_.buffer=t.get(e.noise||"white"),_.loop=!0,_.loopStart=0,_.playbackRate.value=m;else{_=n.createOscillator(),_.type=e.wave||"sine";const N=e.jitter||0,x=N?1+(r.jitterRoll??0)*N:1,y=Math.max(8,(e.freq??440)*x*m);if(g=_.frequency,g.setValueAtTime(y,a),e.to!=null&&!o){const R=Math.max(8,e.to*x*m),C=a+c;e.glide==="lin"?g.linearRampToValueAtTime(R,C):g.exponentialRampToValueAtTime(R,C)}}let v=_,M=null;if(e.filter){const N=n.createBiquadFilter();N.type=e.filter.type||"lowpass",N.Q.value=e.filter.q??1;const x=Math.max(20,e.filter.freq??1e3);N.frequency.setValueAtTime(x,a),e.filter.to!=null&&!o&&N.frequency.exponentialRampToValueAtTime(Math.max(20,e.filter.to),a+c),M=N.frequency,v.connect(N),v=N}let S=null,A=null;if(e.lfo&&e.lfo.rate>0){S=n.createOscillator(),S.type="sine",S.frequency.value=e.lfo.rate;const N=n.createGain();if(e.lfo.target==="gain"){const x=Math.min(1,Math.max(0,e.lfo.depth??.5));A=n.createGain(),A.gain.value=1-x*.5,N.gain.value=x*.5,S.connect(N),N.connect(A.gain),v.connect(A),v=A}else e.lfo.target==="filter"&&M?(N.gain.value=e.lfo.depth??200,S.connect(N),N.connect(M)):g&&(N.gain.value=e.lfo.depth??20,S.connect(N),N.connect(g));S.start(a)}v.connect(p);const w=p.gain;w.setValueAtTime(Ts,a),w.linearRampToValueAtTime(l,a+u);const E=Math.max(Ts,l*d);h>0&&w.linearRampToValueAtTime(E,a+u+h);let T=1/0;if(o)_.start(a,e.src==="noise"?r.noiseOffset??0:void 0);else{const N=Math.max(a+u+h,a+c-f);w.setValueAtTime(Math.max(Ts,h>0?E:l),N),w.linearRampToValueAtTime(Ts,a+c),T=a+c+.02,_.start(a,e.src==="noise"?r.noiseOffset??0:void 0),_.stop(T),S&&S.stop(T)}return{endsAt:T,stop(N){const x=Math.max(N,n.currentTime);try{w.cancelScheduledValues(x),w.setValueAtTime(Math.max(Ts,w.value),x),w.linearRampToValueAtTime(Ts,x+f),_.stop(x+f+.02),S&&S.stop(x+f+.02)}catch{}}}}function Tf(n,t,e,i,s={}){const r=Math.max(s.when??n.currentTime,n.currentTime),o=!!e.loop,a=[];let c=r;for(const l of e.layers||[]){const u=_E(n,t,l,i,r,{...s,loop:o});u&&(a.push(u),u.endsAt>c&&u.endsAt!==1/0&&(c=u.endsAt))}return{endsAt:o?1/0:c,stop(l=n.currentTime){for(const u of a)u.stop(l)}}}const Rf="dw.audio",xE=16,vE="KeyN",ME={ref:.95,max:9,fade:1.5,panWidth:.8,panNear:.7},yE=["step_a","step_b"];function SE(n,t){const e=t.elements,i=n.x,s=n.y??0,r=n.z,o=e[3]*i+e[7]*s+e[11]*r+e[15]||1;return{x:(e[0]*i+e[4]*s+e[8]*r+e[12])/o,y:(e[1]*i+e[5]*s+e[9]*r+e[13])/o,z:(e[2]*i+e[6]*s+e[10]*r+e[14])/o}}const EE={volume:.55,muted:!1},wE={hatStand:1.14,chair:.86,clock:.72},bE={scanner:.92,faultLocator:.84,foodMachine:1.12},Pm=8,AE=.4,TE=18;function Lf(n,t,e){const i=t.length;if(n==="brown"){let s=0;for(let r=0;r<i;r++){const o=e.float()*2-1;s=(s+.02*o)/1.02,t[r]=s*3.5}}else if(n==="pink"){let s=0,r=0,o=0,a=0,c=0,l=0,u=0;for(let h=0;h<i;h++){const d=e.float()*2-1;s=.99886*s+d*.0555179,r=.99332*r+d*.0750759,o=.969*o+d*.153852,a=.8665*a+d*.3104856,c=.55*c+d*.5329522,l=-.7616*l-d*.016898,t[h]=(s+r+o+a+c+l+u+d*.5362)*.11,u=d*.115926}}else for(let s=0;s<i;s++)t[s]=e.float()*2-1;return t}function RE(n,t){const e=Math.exp(-2*Math.PI*TE/t);let i=0,s=0;for(let r=0;r<n.length;r++){const o=n[r];i=o-s+e*i,s=o,n[r]=i}return n}class LE{constructor(t,e,i={}){this.ctx=t,this.rng=e,this.len=i.len??Pm,this.xfade=i.xfade??AE,this.cache=new Map}get(t="white"){if(this.cache.has(t))return this.cache.get(t);const e=this.ctx.sampleRate,i=Math.floor(e*this.len),s=this.ctx.createBuffer(1,i,e),r=s.getChannelData(0);if(t==="white")Lf("white",r,this.rng);else{const o=Math.max(1,Math.floor(e*this.xfade)),a=RE(Lf(t,new Float32Array(i+o),this.rng),e);r.set(a.subarray(0,i));for(let c=0;c<o;c++){const l=(c+.5)/o;r[c]=a[c]*Math.sin(l*Math.PI/2)+a[i+c]*Math.cos(l*Math.PI/2)}}return this.cache.set(t,s),s}}const CE=Math.PI/2,IE=3.4,DE=.15,Ma=1,Cf=6.5;class PE{constructor(t={}){var r;this.sounds=t.sounds||{},this.busDefs=t.buses||{},this.dist={...ME,...t.distance||{}},this.roomBeds=t.roomBeds||[],this.propRate={...wE,...t.propRate||{}},this.ctlRate={...bE,...t.ctlRate||{}};const e={...EE,...t.defaults||{}};this.anchors=t.anchors||{},this.surface=t.surface||null,this.surfaceSteps=t.surfaceSteps||{vinyl:["step_a","step_b"]},this._interiorAnchors=null,this.siteBeds=t.siteBeds||[],this._bedMix=0,this._doorT=0,this._roomBedOff=null,this._siteBedOff=null,this.listener=t.listener||null,this.say=typeof t.say=="function"?t.say:null;const i=t.rng;this.rng=i!=null&&i.child?i.child("audio"):i||null,this._stepRng=(r=this.rng)!=null&&r.child?this.rng.child("step"):this.rng,this._Ctx=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext)||null,this.ctx=null,this.master=null,this.buses={},this.bank=null,this._bankFactory=t.bankFactory||((o,a)=>new LE(o,a)),this._defaultBus=null,this._voices=[],this._loops=new Map,this._handled=new Map,this._duckDepth=1,this._duckUntil=0,this._ducking=!1,this._paused=!1,this._replaceAccum=0,this._told=!1;const s=this._loadPrefs(e);this.volume=s.volume,this.muted=s.muted,this.room=null,this._flying=!1,this._s=0,this._ds=1,this._shutters=null,this._scanner=null,this._stepIx=0,this._air=0,this._wasGround=!0,this._nextTick=0,this._tock=!1,this._Ctx&&(this._wireUnlock(),this._wireKey())}get available(){return!!this.ctx}_loadPrefs(t){const e={...t};try{const i=localStorage.getItem(Rf);if(i){const s=JSON.parse(i);typeof s.volume=="number"&&(e.volume=Math.min(1,Math.max(0,s.volume))),typeof s.muted=="boolean"&&(e.muted=s.muted)}}catch{}return e}_savePrefs(){try{localStorage.setItem(Rf,JSON.stringify({volume:this.volume,muted:this.muted}))}catch{}}_wireUnlock(){const t=()=>{if(this.unlock(),this.ctx&&this.ctx.state!=="suspended")for(const e of["pointerdown","keydown","touchstart"])window.removeEventListener(e,t)};for(const e of["pointerdown","keydown","touchstart"])window.addEventListener(e,t,{passive:!0});typeof document<"u"&&document.addEventListener("visibilitychange",()=>{var e,i;document.hidden||(i=(e=this.ctx)==null?void 0:e.resume)==null||i.call(e).catch(()=>{})})}unlock(){var e,i,s;if(this.ctx){(i=(e=this.ctx).resume)==null||i.call(e).catch(()=>{});return}if(!this._Ctx)return;let t;try{t=new this._Ctx}catch{this._Ctx=null;return}this.ctx=t,this.bank=this._bankFactory(t,this.rng||{float:()=>Math.random()}),this.master=t.createGain(),this.master.gain.value=this._masterTarget(),this.master.connect(t.destination);for(const[r,o]of Object.entries(this.busDefs)){const a=t.createGain();a.gain.value=o.gain,a.connect(this.master),this.buses[r]={node:a,base:o.gain,duckable:o.duckable!==!1},this._defaultBus||(this._defaultBus=this.buses[r])}this._defaultBus=this.buses.machine||this._defaultBus,(s=t.resume)==null||s.call(t).catch(()=>{}),this._nextTick=t.currentTime+Ma,this._resumeBeds(),this.announce()}_resumeBeds(){var t,e;return!this.ctx||this.muted?this:(this.startBeds(this.roomBeds),(e=(t=this.room)==null?void 0:t.fittings)!=null&&e.scannerOn&&this.startLoop("scanner_bed"),this._flying&&(this.startLoop("flight_bed"),this.startLoop("flight_grind")),this)}announce(){this._told||!this.ctx||!this.say||(this._told=!0,this.say(this.muted?"Sound is muted. Press N to unmute.":"Sound is on. Press N to mute."))}_wireKey(){window.addEventListener("keydown",t=>{if(t.code!==vE||t.repeat||t.ctrlKey||t.altKey||t.metaKey)return;const e=t.target;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)||this.toggleMute()})}setMuted(t){var e;return this.muted=!!t,this._savePrefs(),this.muted&&this.stopAllLoops(),this._applyMaster(),(e=this.say)==null||e.call(this,this.muted?"Sound muted.":"Sound on."),this.muted||(this.play("mute_off"),this._resumeBeds()),this}toggleMute(){return this.setMuted(!this.muted)}setVolume(t){return this.volume=Math.min(1,Math.max(0,Number(t)||0)),this._savePrefs(),this._applyMaster(),this}setPaused(t){return this._paused=!!t,this._applyMaster(.08),this}_masterTarget(){return this.muted?1e-4:Math.max(1e-4,this.volume*(this._paused?.2:1))}_applyMaster(t=.08){if(!this.ctx||!this.master)return;const e=this.ctx.currentTime,i=this._masterTarget();this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(Math.max(1e-4,this.master.gain.value),e),this.master.gain.linearRampToValueAtTime(i,e+t)}play(t,e={}){const i=this.sounds[t];if(!i||!this.ctx||this.muted)return null;if(i.loop)return this.startLoop(t,e.handle||t,e);if(e.handle&&this._stopHandled(e.handle),this._voices.length>=xE)return null;const s=this._chainFor(i,e,!1);if(!s)return null;const r=Tf(this.ctx,this.bank,i,s.node,{gain:(i.gain??1)*(e.gain??1),rate:(i.rate??1)*(e.rate??1),when:e.when,jitterRoll:this._roll(),noiseOffset:this._noiseOffset()}),o={v:r,endsAt:r.endsAt,handle:e.handle||null};return this._voices.push(o),e.handle&&this._handled.set(e.handle,o),i.ducks&&this.duck(i.ducks.depth??.45,i.ducks.hold??1),r}_stopHandled(t){const e=this._handled.get(t);if(!e)return;this._handled.delete(t);try{e.v.stop(this.ctx.currentTime)}catch{}const i=this._voices.indexOf(e);i>=0&&this._voices.splice(i,1)}startLoop(t,e=t,i={}){const s=this.sounds[t];if(!s||!this.ctx||this.muted)return null;if(this._loops.has(e))return this._loops.get(e);const r=this._chainFor(s,i,!0);if(!r)return null;const a={v:Tf(this.ctx,this.bank,s,r.node,{gain:(s.gain??1)*(i.gain??1),rate:(s.rate??1)*(i.rate??1),when:i.when,jitterRoll:this._roll(),noiseOffset:this._noiseOffset()}),recipe:s,chain:r.chain,spot:i.spot??s.spot??null,at:i.at??null,level:1};return this._loops.set(e,a),a}stopLoop(t){const e=this._loops.get(t);if(!e||!this.ctx)return this;this._loops.delete(t);try{e.v.stop(this.ctx.currentTime)}catch{}return this}stopAllLoops(){for(const t of[...this._loops.keys()])this.stopLoop(t);return this}setLoopLevel(t,e,i=.12){var a;const s=this._loops.get(t);if(!s||!this.ctx||!((a=s.chain)!=null&&a.level))return this;const r=Math.max(0,Number(e)||0);if(Math.abs(r-s.level)<.002)return this;s.level=r;const o=this.ctx.currentTime;return i>0?s.chain.level.gain.setTargetAtTime(r,o,i):s.chain.level.gain.setValueAtTime(r,o),this}startBeds(t=this.roomBeds){for(const e of t||[])this.startLoop(e);return this}stopBeds(t=this.roomBeds){for(const e of t||[])this.stopLoop(e);return this}duck(t=.45,e=1){if(!this.ctx)return this;const i=this.ctx.currentTime,s=Math.min(1,Math.max(0,t));this._duckDepth=this._ducking?Math.min(this._duckDepth,s):s,this._duckUntil=Math.max(this._duckUntil,i+e),this._ducking=!0;for(const r of Object.values(this.buses))r.duckable&&(r.node.gain.cancelScheduledValues(i),r.node.gain.setTargetAtTime(r.base*this._duckDepth,i,.04));return this}_unduck(){const t=this.ctx.currentTime;this._ducking=!1,this._duckDepth=1;for(const e of Object.values(this.buses))e.duckable&&(e.node.gain.cancelScheduledValues(t),e.node.gain.setTargetAtTime(e.base,t,.25))}_chainFor(t,e,i){const s=this.buses[t.bus]||this._defaultBus;if(!s)return null;let r=s.node,o=null,a=null,c=null;const l=this._resolve(e.at??null,e.spot??t.spot??null);if(l){const u=this._place(l,t.minGain??0);if(u.gain<=.004&&!t.loop)return null;this.ctx.createStereoPanner&&(o=this.ctx.createStereoPanner(),o.pan.value=u.pan,o.connect(r),r=o),a=this.ctx.createGain(),a.gain.value=u.gain,a.connect(r),r=a}return i&&(c=this.ctx.createGain(),c.gain.value=1,c.connect(r),r=c),{node:r,chain:{pan:o,dist:a,level:c},pos:l}}_resolve(t,e){if(t&&typeof t.x=="number")return t;if(!e)return null;const i=this.anchors[e];return i&&typeof i.x=="number"?i:null}_listener(){var r;const t=this.listener;if(!t)return null;const e=typeof t=="function"?t():t;if(!e)return null;const i=((r=e.camera)==null?void 0:r.position)||e.position||(typeof e.x=="number"?e:null);if(!i||typeof i.x!="number")return null;const s=e.yaw??0;return{x:i.x,y:i.y,z:i.z,rx:-Math.cos(s),rz:Math.sin(s)}}_place(t,e){const i=this._listener();if(!i)return{gain:1,pan:0};const s=t.x-i.x,r=t.z-i.z,o=(t.y??i.y)-i.y,a=Math.sqrt(s*s+o*o+r*r),{ref:c,max:l,fade:u,panWidth:h,panNear:d}=this.dist;if(a>=l)return{gain:e,pan:0};let f=a<=c?1:c/(c+(a-c));u>0&&a>l-u&&(f*=(l-a)/u),f=Math.max(f,e);const p=Math.sqrt(s*s+r*r)||1,_=Math.min(1,p/d),g=(s*i.rx+r*i.rz)/p*h*_;return{gain:f,pan:Math.max(-1,Math.min(1,g))}}update(t){var s;let e=Number(t)||0;if(e<0&&(e=0),e>.1&&(e=.1),this._followRotor(),this._followFittings(),this._footsteps(e),!this.ctx)return this;const i=this.ctx.currentTime;for(let r=this._voices.length-1;r>=0;r--){const o=this._voices[r];o.endsAt>i||(o.handle&&this._handled.get(o.handle)===o&&this._handled.delete(o.handle),this._voices.splice(r,1))}if(this._ducking&&i>=this._duckUntil&&this._unduck(),this._clock(i),this._replaceAccum+=e,this._replaceAccum<.1)return this;this._replaceAccum=0;for(const r of this._loops.values()){const o=this._resolve(r.at,r.spot);if(!o||!((s=r.chain)!=null&&s.dist))continue;const a=this._place(o,r.recipe.minGain??0);r.chain.dist.gain.setTargetAtTime(a.gain,i,.06),r.chain.pan&&r.chain.pan.pan.setTargetAtTime(a.pan,i,.08)}return this}setWorld(t,e=null){var r;if(!t)return this;if(t.dist&&(this.dist={...this.dist,...t.dist}),this.surface=t.surface??null,!this._interiorAnchors){this._interiorAnchors=Object.create(null);for(const[o,a]of Object.entries(this.anchors))this._interiorAnchors[o]=a}const i=t.id==="interior"||!e?null:e.M_IE||null,s=Object.create(null);if((r=t.build)!=null&&r.interactables)for(const o of t.build.interactables)o!=null&&o.id&&o.pos&&(s[o.id]=o.pos);for(const[o,a]of Object.entries(this._interiorAnchors))s[o]||(s[o]=i?SE(a,i):a);return this.anchors=s,this}setLoopSpot(t,e){const i=this._loops.get(t);return i&&(i.spot=e??null,i.at=null),this}setBedMix(t,e){const i=t<=0?0:t>=1?1:t,s=e===void 0?this._doorT??1:e,r=s<=0?0:s>=1?1:s;this._bedMix=i;const o=1-i+i*.06*r,a=i*(.3+.7*(1-.6*(1-r)));return this._driveBedSet(this.roomBeds,o,"_roomBedOff"),this._driveBedSet(this.siteBeds,a,"_siteBedOff"),this}_driveBedSet(t,e,i){if(!t||!t.length)return;const s=t.map(r=>Array.isArray(r)?r[0]:r);if(e<=0){const r=this.ctx?this.ctx.currentTime:0;(this[i]===void 0||this[i]===null)&&(this[i]=r);for(const o of s)this.setLoopLevel(o,0);if(r-this[i]>2)for(const o of s)this.stopLoop(o);return}this[i]=null;for(const r of t){const o=Array.isArray(r)?r[0]:r;if(!this._loops.has(o)){const a=Array.isArray(r)&&r[1]?{...r[1]}:{};this.startLoop(o,o,a)&&this.setLoopLevel(o,0,0)}this.setLoopLevel(o,e)}}setDoorFraction(t){return this._doorT=t<=0?0:t>=1?1:t,this}setSiteBeds(t){return this.siteBeds=t||[],this}get bedMix(){return this._bedMix??0}bindRoom({build:t,rotor:e,fittings:i,walker:s,room:r}={}){var o,a;if(this.room={build:t||null,rotor:e||null,fittings:i||null,walker:s||null},t!=null&&t.interactables)for(const c of t.interactables)c!=null&&c.id&&c.pos&&(this.anchors[c.id]=c.pos);return this.anchors.console=this.anchors.console||{x:0,y:(r==null?void 0:r.PANEL_Y0)??.9,z:0},s&&(this.listener||(this.listener=s),(o=s.onPause)==null||o.call(s,c=>this.setPaused(c)),(a=s.onInteract)==null||a.call(s,c=>this._onInteract(c)),this.setPaused(!!s.paused)),i&&(this._shutters=!!i.shuttersOpen,this._scanner=!!i.scannerOn),e&&(this._flying=!!e.running),this.startBeds(this.roomBeds),i!=null&&i.scannerOn&&this.startLoop("scanner_bed"),this}_onInteract(t){var e;if(t)switch(t.action){case"panel":{const i=(e=t.data)==null?void 0:e.panel,s=`panel${i}`;this.play("panel_wake",{spot:s});const r={1:"ctl_lever",2:"ctl_lever",3:"ctl_dial",4:"ctl_guard",5:"ctl_lever_big",6:"ctl_button"};r[i]&&this.play(r[i],{spot:s}),i===1&&this.play("ctl_refuse",{spot:s}),i===3&&this.play("food_dispense",{handle:"food"}),i===6&&this.play("fault_query",{handle:"fault"});break}case"doors":this.play("door_locked"),this.play("panel_wake",{spot:"panel1",gain:.5});break;case"scanner":this.play("ctl_toggle",{spot:"scanner",rate:this.ctlRate.scanner});break;case"faultLocator":this.play("ctl_button",{spot:"faultLocator",rate:this.ctlRate.faultLocator}),this.play("fault_query",{handle:"fault"});break;case"foodMachine":this.play("ctl_button",{spot:"foodMachine",rate:this.ctlRate.foodMachine}),this.play("food_dispense",{handle:"food"});break;case"hatStand":this.play("prop_wood",{spot:"hatStand",rate:this.propRate.hatStand});break;case"chair":this.play("prop_wood",{spot:"chair",rate:this.propRate.chair});break;case"clock":this.play("prop_wood",{spot:"clock",rate:this.propRate.clock}),this.ctx&&this.play("clock_tick",{when:this.ctx.currentTime+.3});break;case"rotor":this.play("ctl_lever_big",{spot:"panel5"});break}}_followRotor(){var s;const t=(s=this.room)==null?void 0:s.rotor;if(!t)return;const e=!!t.running;e&&!this._flying?(this.play("demat_launch"),this.startLoop("flight_bed"),this.startLoop("flight_grind"),this.setLoopLevel("flight_bed",0,0),this.setLoopLevel("flight_grind",0,0),this._flying=!0,this._s=0,this._ds=1):!e&&this._flying&&(this.stopLoop("flight_bed"),this.stopLoop("flight_grind"),this.play("remat_land"),this._flying=!1);const i=t.drive??0;if(this.setLoopLevel("flight_bed",i),this.setLoopLevel("flight_grind",i),i>.05){const r=(t.apex??0)-(t.parked??0);if(r>0){const o=((t.height??0)-t.parked)/(r*i),a=o-this._s;this._ds<0&&a>=0?this.play("demat_rise"):this._ds>0&&a<=0&&this.play("demat_fall"),a!==0&&(this._ds=a),this._s=o}}else this._s=0,this._ds=1}_followFittings(){var s;const t=(s=this.room)==null?void 0:s.fittings;if(!t)return;const e=!!t.shuttersOpen;this._shutters!==null&&e!==this._shutters&&this.play(e?"shutter_open":"shutter_close",{handle:"shutter"}),this._shutters=e;const i=!!t.scannerOn;this._scanner!==null&&i!==this._scanner&&(i?this.startLoop("scanner_bed"):this.stopLoop("scanner_bed")),this._scanner=i}_footsteps(t){var l;const e=(l=this.room)==null?void 0:l.walker;if(!e)return;const i=e.onGround!==!1;i?(this._wasGround===!1&&this._air>DE&&this.play("step_land",{rate:this._stepRate(1)}),this._air=0):this._air+=t,this._wasGround=i;const s=e.horizontalSpeed??0;if(s<=.3){this._stepIx=0;return}const r=(e.stepPhase!==void 0?e.stepPhase:e._bob)??0,o=Math.floor(r/CE);if(o===this._stepIx||(this._stepIx=o,o<=0))return;const a=s>IE?1.06:1,c=this.surface&&this.surfaceSteps[this.surface]||yE;this.play(c[o&1],{rate:this._stepRate(a)})}_stepRate(t){const e=this._stepRng;return t*(1+.055*(e?e.range(-1,1):0))}_clock(t){if(!this.sounds.clock_tick)return;const e=this.anchors.clock;if(e){const i=this._listener();if(i){const s=e.x-i.x,r=e.z-i.z,o=(e.y??i.y)-i.y;if(s*s+o*o+r*r>Cf*Cf){this._nextTick=t+Ma;return}}}for(this._nextTick<t&&(this._nextTick=t+Ma);this._nextTick<t+.5;)this.play(this._tock?"clock_tock":"clock_tick",{when:this._nextTick}),this._tock=!this._tock,this._nextTick+=Ma}_roll(){return this.rng?this.rng.range(-1,1):0}_noiseOffset(){return this.rng?this.rng.range(0,Pm):0}}const OE={room:{gain:.34,duckable:!1},machine:{gain:.85,duckable:!0},control:{gain:.95,duckable:!1},body:{gain:.6,duckable:!0},flight:{gain:.95,duckable:!1}},Om={ref:.95,max:9,fade:1.5,panWidth:.8,panNear:.7},NE={volume:.55,muted:!1},_o={room_tone:{bus:"room",gain:.55,loop:!0,layers:[{src:"noise",noise:"brown",at:0,a:2.6,s:1,r:2,peak:.85,filter:{type:"lowpass",freq:110,q:.7},lfo:{rate:.043478,depth:40,target:"filter"}},{src:"tone",wave:"sine",freq:49.5,at:0,a:3,s:1,r:2.4,peak:.26},{src:"tone",wave:"sine",freq:99,at:0,a:3.2,s:1,r:2.4,peak:.3},{src:"tone",wave:"sine",freq:99.4,at:0,a:3.6,s:1,r:2.4,peak:.24,lfo:{rate:.027027,depth:.6,target:"freq"}},{src:"noise",noise:"white",at:2.41,a:5,s:1,r:3,peak:.1,filter:{type:"bandpass",freq:6400,q:2.4},lfo:{rate:.018868,depth:900,target:"filter"}}]},room_air:{bus:"room",gain:.7,loop:!0,rate:.618,layers:[{src:"noise",noise:"pink",at:0,a:3.4,s:1,r:2.2,peak:.52,filter:{type:"bandpass",freq:300,q:.9},lfo:{rate:.034483,depth:130,target:"filter"}},{src:"noise",noise:"brown",at:1.13,a:4,s:1,r:2.4,peak:.4,filter:{type:"lowpass",freq:210,q:1.1},lfo:{rate:.02439,depth:55,target:"filter"}}]},console_hum:{bus:"room",gain:.6,loop:!0,spot:"console",minGain:.14,layers:[{src:"tone",wave:"sine",freq:148.5,at:0,a:2,s:1,r:1.6,peak:.22},{src:"tone",wave:"sine",freq:297,at:0,a:2.2,s:1,r:1.6,peak:.09,lfo:{rate:.071,depth:.24,target:"gain"}},{src:"tone",wave:"sawtooth",freq:220,at:0,a:2.8,s:1,r:2,peak:.1,filter:{type:"lowpass",freq:640,q:1.4}},{src:"noise",noise:"white",at:.53,a:2.6,s:1,r:2,peak:.26,filter:{type:"bandpass",freq:6200,q:2.6},lfo:{rate:.1129,depth:.36,target:"gain"}}]},scanner_bed:{bus:"room",gain:.62,loop:!0,spot:"scanner",minGain:0,layers:[{src:"tone",wave:"sawtooth",freq:50,at:0,a:1.35,s:1,r:.28,peak:.28,filter:{type:"lowpass",freq:320,q:1.4}},{src:"tone",wave:"sine",freq:150,at:0,a:1.4,s:1,r:.28,peak:.1},{src:"tone",wave:"sine",freq:10125,at:0,a:1.4,s:1,r:.28,peak:.028,lfo:{rate:.37,depth:.3,target:"gain"}},{src:"noise",noise:"white",at:.77,a:1.5,s:1,r:.28,peak:.14,filter:{type:"highpass",freq:4800,q:.7}}]},fault_idle:{bus:"machine",gain:.34,loop:!0,rate:.618,spot:"faultLocator",minGain:0,layers:[{src:"noise",noise:"white",at:0,a:1.2,s:1,r:.8,peak:.34,filter:{type:"bandpass",freq:2900,q:6},lfo:{rate:1.1111,depth:.92,target:"gain"}}]},flight_bed:{bus:"flight",gain:.19,loop:!0,spot:"rotor",minGain:.55,layers:[{src:"tone",wave:"sine",freq:41,at:0,a:.9,s:1,r:2.4,peak:.3,lfo:{rate:.173,depth:6,target:"freq"}},{src:"noise",noise:"brown",at:0,a:1.1,s:1,r:2.4,peak:.8,filter:{type:"lowpass",freq:230,q:1.1},lfo:{rate:.173,depth:110,target:"filter"}},{src:"tone",wave:"sawtooth",freq:32.7,at:0,a:1.2,s:1,r:2.4,peak:.34,filter:{type:"lowpass",freq:260,q:3},lfo:{rate:.29,depth:90,target:"filter"}},{src:"tone",wave:"sawtooth",freq:33.6,at:0,a:1.4,s:1,r:2.4,peak:.28,filter:{type:"lowpass",freq:300,q:2.6},lfo:{rate:.23,depth:70,target:"filter"}},{src:"tone",wave:"sine",freq:99,at:0,a:1.5,s:1,r:2.4,peak:.1,filter:{type:"lowpass",freq:700,q:.9},lfo:{rate:7.9,depth:22,target:"freq"}}]},flight_grind:{bus:"flight",gain:.2,loop:!0,rate:.618,spot:"rotor",minGain:.55,layers:[{src:"noise",noise:"pink",at:0,a:1.4,s:1,r:2.4,peak:.58,filter:{type:"bandpass",freq:470,q:1.3},lfo:{rate:.2311,depth:200,target:"filter"}},{src:"noise",noise:"white",at:.61,a:1,s:1,r:2.4,peak:.52,filter:{type:"bandpass",freq:1750,q:3},lfo:{rate:6.1,depth:.45,target:"gain"}},{src:"noise",noise:"brown",at:1.13,a:1.2,s:1,r:2.4,peak:.46,filter:{type:"lowpass",freq:400,q:1.4},lfo:{rate:.1274,depth:130,target:"filter"}}]},demat_launch:{bus:"flight",gain:.54,ducks:{depth:.45,hold:2.6},layers:[{src:"noise",noise:"brown",at:0,dur:.16,a:.002,d:.06,s:.14,r:.08,peak:.72,filter:{type:"lowpass",freq:1400,to:240,q:1.5}},{src:"tone",wave:"square",freq:128,to:47,at:0,dur:.22,a:.002,d:.06,s:.2,r:.1,peak:.24,filter:{type:"lowpass",freq:700,to:300,q:1}},{src:"tone",wave:"sawtooth",freq:38,to:96,at:.08,dur:1.9,a:.4,d:.3,s:.8,r:.55,peak:.36,jitter:.012,filter:{type:"lowpass",freq:300,to:1500,q:1.2}},{src:"tone",wave:"sawtooth",freq:39.1,to:99.1,at:.11,dur:1.88,a:.44,d:.3,s:.78,r:.55,peak:.3,jitter:-.012,filter:{type:"lowpass",freq:340,to:1650,q:1.1}},{src:"noise",noise:"white",at:.3,dur:2,a:.55,d:.35,s:.62,r:.6,peak:.7,filter:{type:"bandpass",freq:220,to:1750,q:.75}},{src:"tone",wave:"triangle",freq:210,to:690,at:.2,dur:2.1,a:.5,d:.4,s:.55,r:.75,peak:.2,filter:{type:"bandpass",freq:900,q:8},lfo:{rate:.8,depth:400,target:"filter"}},{src:"tone",wave:"sine",freq:148,at:.15,dur:2.1,a:.3,d:.5,s:.5,r:.8,peak:.16,filter:{type:"lowpass",freq:700,q:.9},lfo:{rate:6.7,depth:34,target:"freq"}},{src:"tone",wave:"sine",freq:41,to:31,at:0,dur:2.4,a:.03,d:.9,s:.35,r:1.1,peak:.28},{src:"noise",noise:"pink",at:1.13,dur:1.45,a:.3,d:.3,s:.55,r:.55,peak:.42,filter:{type:"bandpass",freq:900,to:2600,q:1.6}},{src:"noise",noise:"brown",at:2.033,dur:.34,a:.004,d:.12,s:.2,r:.18,peak:.4,filter:{type:"lowpass",freq:560,to:170,q:1.3}},{src:"tone",wave:"sine",freq:62,to:41,at:2.033,dur:.38,a:.004,d:.14,s:.24,r:.2,peak:.3}]},demat_rise:{bus:"flight",gain:.5,spot:"rotor",minGain:.6,layers:[{src:"tone",wave:"sawtooth",freq:58,to:96,at:0,dur:1.58,a:.1,d:.3,s:.62,r:.55,peak:.42,jitter:.015,filter:{type:"lowpass",freq:900,to:320,q:2.6},lfo:{rate:5.4,depth:.55,target:"gain"}},{src:"tone",wave:"sawtooth",freq:60.3,to:99.6,at:0,dur:1.58,a:.13,d:.3,s:.6,r:.58,peak:.34,jitter:-.015,filter:{type:"lowpass",freq:1200,to:400,q:2.2},lfo:{rate:5.15,depth:.55,target:"gain"}},{src:"noise",noise:"white",at:0,dur:1.55,a:.08,d:.35,s:.45,r:.6,peak:.85,filter:{type:"bandpass",freq:700,to:2400,q:8}},{src:"noise",noise:"white",at:.06,dur:1.48,a:.1,d:.35,s:.45,r:.58,peak:.8,filter:{type:"bandpass",freq:420,to:1300,q:6}},{src:"noise",noise:"brown",at:0,dur:1.58,a:.35,d:.35,s:.7,r:.7,peak:.78,filter:{type:"lowpass",freq:130,to:260,q:.9}},{src:"tone",wave:"square",freq:232,to:384,at:0,dur:1.5,a:.25,d:.4,s:.5,r:.6,peak:.1,filter:{type:"bandpass",freq:1400,q:6},lfo:{rate:.9,depth:320,target:"filter"}},{src:"tone",wave:"sine",freq:92,at:0,dur:1.5,a:.2,d:.4,s:.55,r:.6,peak:.14,filter:{type:"lowpass",freq:400,q:.9},lfo:{rate:7.3,depth:24,target:"freq"}},{src:"noise",noise:"brown",at:1.44,dur:.3,a:.004,d:.11,s:.2,r:.16,peak:.34,filter:{type:"lowpass",freq:520,to:170,q:1.2}}]},demat_fall:{bus:"flight",gain:.51,spot:"rotor",minGain:.6,layers:[{src:"tone",wave:"sawtooth",freq:96,to:54,at:0,dur:1.58,a:.09,d:.3,s:.6,r:.55,peak:.4,jitter:.015,filter:{type:"lowpass",freq:1e3,to:300,q:2.6},lfo:{rate:5.05,depth:.55,target:"gain"}},{src:"tone",wave:"sawtooth",freq:99.4,to:56.2,at:0,dur:1.58,a:.12,d:.3,s:.58,r:.58,peak:.33,jitter:-.015,filter:{type:"lowpass",freq:1300,to:380,q:2.2},lfo:{rate:4.85,depth:.55,target:"gain"}},{src:"noise",noise:"white",at:0,dur:1.55,a:.06,d:.35,s:.45,r:.6,peak:.85,filter:{type:"bandpass",freq:2300,to:560,q:8}},{src:"noise",noise:"white",at:.06,dur:1.48,a:.08,d:.35,s:.45,r:.58,peak:.8,filter:{type:"bandpass",freq:1240,to:300,q:6}},{src:"noise",noise:"brown",at:0,dur:1.58,a:.3,d:.35,s:.7,r:.7,peak:.8,filter:{type:"lowpass",freq:250,to:110,q:.9}},{src:"tone",wave:"square",freq:216,to:168,at:0,dur:1.5,a:.25,d:.4,s:.5,r:.6,peak:.1,filter:{type:"bandpass",freq:1300,q:6},lfo:{rate:.9,depth:300,target:"filter"}},{src:"tone",wave:"sine",freq:84,at:0,dur:1.5,a:.2,d:.4,s:.55,r:.6,peak:.14,filter:{type:"lowpass",freq:380,q:.9},lfo:{rate:6.9,depth:22,target:"freq"}},{src:"noise",noise:"brown",at:1.36,dur:.34,a:.003,d:.12,s:.2,r:.18,peak:.42,filter:{type:"lowpass",freq:400,to:130,q:1.4}},{src:"tone",wave:"sine",freq:58,to:38,at:1.36,dur:.36,a:.004,d:.13,s:.22,r:.19,peak:.24}]},remat_land:{bus:"flight",gain:.56,ducks:{depth:.45,hold:3.2},layers:[{src:"tone",wave:"sawtooth",freq:92,to:70,at:0,dur:.95,a:.05,d:.3,s:.8,r:.45,peak:.32,filter:{type:"lowpass",freq:880,to:560,q:1.3},lfo:{rate:9,depth:.62,target:"gain"}},{src:"tone",wave:"sawtooth",freq:71,to:50,at:.85,dur:.95,a:.2,d:.3,s:.8,r:.5,peak:.36,filter:{type:"lowpass",freq:570,to:330,q:1.3},lfo:{rate:6,depth:.64,target:"gain"}},{src:"tone",wave:"sawtooth",freq:50,to:31,at:1.7,dur:.8,a:.24,d:.28,s:.75,r:.52,peak:.34,filter:{type:"lowpass",freq:340,to:170,q:1.4},lfo:{rate:3.4,depth:.66,target:"gain"}},{src:"noise",noise:"white",at:0,dur:2.4,a:.1,d:.6,s:.5,r:1,peak:.26,filter:{type:"bandpass",freq:1800,to:300,q:.7}},{src:"noise",noise:"pink",at:.6,dur:1.7,a:1.35,d:.18,s:.92,r:.3,peak:.55,filter:{type:"bandpass",freq:300,to:2100,q:5}},{src:"noise",noise:"brown",at:2.4,dur:.55,a:.003,d:.18,s:.18,r:.3,peak:.9,filter:{type:"lowpass",freq:1600,to:110,q:1.5}},{src:"tone",wave:"sine",freq:74,to:34,at:2.4,dur:.62,a:.004,d:.22,s:.22,r:.32,peak:.42},{src:"tone",wave:"triangle",freq:131,at:2.418,dur:.95,a:.008,d:.3,s:.2,r:.55,peak:.14,filter:{type:"bandpass",freq:300,q:5}},{src:"tone",wave:"triangle",freq:133.4,at:2.433,dur:.92,a:.008,d:.3,s:.2,r:.55,peak:.12,filter:{type:"bandpass",freq:300,q:5}},{src:"noise",noise:"pink",at:2.44,dur:.9,a:.02,d:.35,s:.15,r:.42,peak:.36,filter:{type:"lowpass",freq:2200,to:400,q:.8}},{src:"tone",wave:"triangle",freq:196,to:99,at:2.46,dur:1.75,a:.02,d:.45,s:.28,r:1.1,peak:.18,filter:{type:"lowpass",freq:800,to:340,q:1}}]},ctl_toggle:{bus:"control",gain:.74,minGain:.1,layers:[{src:"noise",noise:"white",at:0,dur:.026,a:.001,d:.008,s:0,r:.01,peak:.44,filter:{type:"bandpass",freq:2600,to:1900,q:4}},{src:"tone",wave:"square",freq:1860,at:0,dur:.024,a:.001,d:.008,s:0,r:.01,peak:.18,jitter:.05,filter:{type:"lowpass",freq:5200,q:.7}},{src:"noise",noise:"pink",at:.042,dur:.045,a:.001,d:.016,s:0,r:.02,peak:.3,filter:{type:"bandpass",freq:1750,to:1150,q:3.2}},{src:"tone",wave:"triangle",freq:430,to:300,at:.042,dur:.06,a:.002,d:.02,s:.1,r:.03,peak:.22,jitter:.05},{src:"noise",noise:"brown",at:.056,dur:.055,a:.003,d:.02,s:.1,r:.028,peak:.18,filter:{type:"lowpass",freq:480,q:.9}}]},ctl_button:{bus:"control",gain:.52,minGain:.1,layers:[{src:"noise",noise:"brown",at:0,dur:.04,a:.0015,d:.015,s:.1,r:.018,peak:.62,filter:{type:"lowpass",freq:1400,to:520,q:1.1}},{src:"tone",wave:"sine",freq:1244,to:900,at:0,dur:.055,a:.002,d:.018,s:.14,r:.028,peak:.22,jitter:.05},{src:"noise",noise:"white",at:0,dur:.022,a:.001,d:.008,s:0,r:.01,peak:.24,filter:{type:"bandpass",freq:1150,q:2.4}},{src:"noise",noise:"brown",at:.078,dur:.028,a:.001,d:.011,s:.06,r:.013,peak:.34,filter:{type:"lowpass",freq:900,to:400,q:1}}]},ctl_dial:{bus:"control",gain:.85,minGain:.1,layers:[{src:"noise",noise:"pink",at:0,dur:.19,a:.01,d:.05,s:.6,r:.06,peak:.3,filter:{type:"bandpass",freq:2200,q:1.1}},{src:"noise",noise:"white",at:0,dur:.024,a:.001,d:.008,s:0,r:.011,peak:.5,filter:{type:"bandpass",freq:3400,q:2.2}},{src:"noise",noise:"white",at:.068,dur:.024,a:.001,d:.008,s:0,r:.011,peak:.52,filter:{type:"bandpass",freq:3150,q:2.2}},{src:"noise",noise:"white",at:.136,dur:.024,a:.001,d:.008,s:0,r:.011,peak:.48,filter:{type:"bandpass",freq:3550,q:2.2}},{src:"noise",noise:"brown",at:0,dur:.2,a:.012,d:.06,s:.5,r:.07,peak:.26,filter:{type:"lowpass",freq:620,to:380,q:1}}]},ctl_lever:{bus:"control",gain:.62,minGain:.12,layers:[{src:"noise",noise:"brown",at:0,dur:.05,a:.002,d:.018,s:.1,r:.024,peak:.36,filter:{type:"lowpass",freq:1100,to:420,q:1.2}},{src:"noise",noise:"white",at:.02,dur:.28,a:.028,d:.07,s:.55,r:.13,peak:.4,filter:{type:"bandpass",freq:2400,to:900,q:1.3},lfo:{rate:17,depth:.9,target:"gain"}},{src:"tone",wave:"triangle",freq:196,to:124,at:.02,dur:.28,a:.02,d:.07,s:.5,r:.12,peak:.16},{src:"noise",noise:"brown",at:.28,dur:.19,a:.002,d:.065,s:.18,r:.095,peak:.44,filter:{type:"lowpass",freq:720,to:190,q:1.5}},{src:"tone",wave:"sine",freq:96,to:58,at:.28,dur:.23,a:.003,d:.085,s:.2,r:.11,peak:.28,jitter:.04},{src:"noise",noise:"white",at:.28,dur:.03,a:.001,d:.01,s:0,r:.014,peak:.2,filter:{type:"highpass",freq:2200,q:.9}},{src:"tone",wave:"sawtooth",freq:74,to:148,at:.3,dur:.34,a:.05,d:.1,s:.68,r:.19,peak:.18,filter:{type:"lowpass",freq:420,to:1050,q:1.1}}]},ctl_lever_big:{bus:"control",gain:.72,minGain:.14,layers:[{src:"noise",noise:"brown",at:0,dur:.06,a:.002,d:.022,s:.1,r:.028,peak:.42,filter:{type:"lowpass",freq:820,to:300,q:1.2}},{src:"noise",noise:"white",at:.024,dur:.43,a:.04,d:.1,s:.6,r:.18,peak:.44,filter:{type:"bandpass",freq:1900,to:640,q:1.2},lfo:{rate:13,depth:.9,target:"gain"}},{src:"tone",wave:"triangle",freq:140,to:78,at:.024,dur:.43,a:.036,d:.1,s:.58,r:.175,peak:.22},{src:"noise",noise:"brown",at:.44,dur:.23,a:.002,d:.085,s:.18,r:.115,peak:.52,filter:{type:"lowpass",freq:640,to:150,q:1.6}},{src:"tone",wave:"sine",freq:128,to:62,at:.44,dur:.28,a:.003,d:.1,s:.2,r:.135,peak:.32},{src:"noise",noise:"white",at:.44,dur:.034,a:.001,d:.012,s:0,r:.016,peak:.22,filter:{type:"highpass",freq:2e3,q:.9}},{src:"tone",wave:"sawtooth",freq:62,to:132,at:.47,dur:.4,a:.06,d:.11,s:.7,r:.21,peak:.22,filter:{type:"lowpass",freq:380,to:980,q:1.1}}]},ctl_guard:{bus:"control",gain:.66,minGain:.1,layers:[{src:"noise",noise:"pink",at:0,dur:.13,a:.02,d:.04,s:.55,r:.06,peak:.46,filter:{type:"bandpass",freq:1100,q:12},lfo:{rate:13,depth:380,target:"filter"}},{src:"noise",noise:"brown",at:.13,dur:.05,a:.001,d:.018,s:.1,r:.024,peak:.4,filter:{type:"lowpass",freq:700,to:300,q:1.2}},{src:"noise",noise:"white",at:.148,dur:.026,a:.001,d:.009,s:0,r:.012,peak:.44,filter:{type:"bandpass",freq:3400,to:2400,q:3.4}},{src:"noise",noise:"pink",at:.19,dur:.044,a:.001,d:.016,s:0,r:.02,peak:.48,filter:{type:"bandpass",freq:2100,to:1400,q:3.6}},{src:"tone",wave:"square",freq:1180,at:.19,dur:.034,a:.001,d:.012,s:0,r:.016,peak:.22,filter:{type:"lowpass",freq:4400,q:.7}},{src:"tone",wave:"triangle",freq:330,to:210,at:.225,dur:.16,a:.002,d:.05,s:.14,r:.08,peak:.24,jitter:.05}]},sonic_use:{bus:"control",gain:.58,minGain:.12,layers:[{src:"tone",wave:"square",freq:742,to:968,at:0,dur:.46,a:.01,d:.06,s:.72,r:.09,peak:.58,filter:{type:"bandpass",freq:1500,to:2300,q:3.2},lfo:{rate:16.5,depth:130,target:"freq"}},{src:"tone",wave:"square",freq:751,to:977,at:0,dur:.46,a:.012,d:.06,s:.68,r:.09,peak:.4,filter:{type:"bandpass",freq:1500,to:2300,q:3.2},lfo:{rate:13.2,depth:110,target:"freq"}},{src:"noise",noise:"white",at:0,dur:.46,a:.02,d:.08,s:.5,r:.1,peak:.16,filter:{type:"bandpass",freq:3400,to:5200,q:2},lfo:{rate:16.5,depth:900,target:"filter"}}]},sonic_draw:{bus:"control",gain:.46,minGain:.1,layers:[{src:"noise",noise:"pink",at:0,dur:.11,a:.006,d:.05,s:.1,r:.05,peak:.62,filter:{type:"bandpass",freq:2200,to:1100,q:1.1}},{src:"tone",wave:"triangle",freq:1860,to:1520,at:.055,dur:.07,a:.001,d:.02,s:.08,r:.035,peak:.3,jitter:.04}]},sonic_stow:{bus:"control",gain:.42,minGain:.1,layers:[{src:"tone",wave:"triangle",freq:1460,to:1180,at:0,dur:.06,a:.001,d:.018,s:.06,r:.03,peak:.26,jitter:.04},{src:"noise",noise:"pink",at:.03,dur:.13,a:.008,d:.06,s:.08,r:.06,peak:.52,filter:{type:"lowpass",freq:1500,to:600,q:.9}}]},ctl_refuse:{bus:"control",gain:.62,minGain:.4,layers:[{src:"tone",wave:"sawtooth",freq:233.08,at:0,dur:.23,a:.005,d:.03,s:.85,r:.1,peak:.3,filter:{type:"bandpass",freq:480,q:2.2},lfo:{rate:19,depth:.85,target:"gain"}},{src:"tone",wave:"sawtooth",freq:164.81,at:0,dur:.23,a:.005,d:.03,s:.85,r:.1,peak:.26,filter:{type:"bandpass",freq:360,q:2.2},lfo:{rate:19,depth:.85,target:"gain"}},{src:"tone",wave:"sawtooth",freq:233.08,at:.29,dur:.24,a:.005,d:.03,s:.85,r:.11,peak:.28,filter:{type:"bandpass",freq:460,q:2.2},lfo:{rate:17,depth:.85,target:"gain"}},{src:"tone",wave:"sawtooth",freq:164.81,at:.29,dur:.24,a:.005,d:.03,s:.85,r:.11,peak:.24,filter:{type:"bandpass",freq:340,q:2.2},lfo:{rate:17,depth:.85,target:"gain"}},{src:"noise",noise:"brown",at:0,dur:.52,a:.006,d:.12,s:.3,r:.24,peak:.26,filter:{type:"lowpass",freq:700,to:300,q:1.2}}]},panel_wake:{bus:"machine",gain:.76,minGain:.08,layers:[{src:"noise",noise:"white",at:0,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.56,filter:{type:"bandpass",freq:1600,to:1100,q:3}},{src:"noise",noise:"pink",at:.052,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.72,filter:{type:"bandpass",freq:1850,to:1250,q:3}},{src:"noise",noise:"white",at:.118,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.52,filter:{type:"bandpass",freq:1420,to:980,q:3}},{src:"noise",noise:"pink",at:.166,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.62,filter:{type:"bandpass",freq:2050,to:1400,q:3}},{src:"tone",wave:"sine",freq:660,at:.2,dur:.22,a:.004,d:.07,s:.16,r:.12,peak:.2}]},shutter_open:{bus:"machine",gain:.66,spot:"scanner",minGain:.16,layers:[{src:"tone",wave:"sawtooth",freq:118,to:132,at:0,dur:1.19,a:.1,d:.18,s:.72,r:.34,peak:.26,filter:{type:"bandpass",freq:700,q:5},lfo:{rate:47,depth:.35,target:"gain"}},{src:"tone",wave:"sawtooth",freq:120.4,to:134.7,at:.01,dur:1.18,a:.12,d:.18,s:.72,r:.34,peak:.21,filter:{type:"bandpass",freq:840,q:4.2},lfo:{rate:44,depth:.35,target:"gain"}},{src:"noise",noise:"pink",at:.01,dur:1.18,a:.42,d:.3,s:.55,r:.42,peak:.64,filter:{type:"bandpass",freq:620,to:1350,q:1.4}},{src:"noise",noise:"brown",at:.02,dur:1.17,a:.4,d:.28,s:.52,r:.4,peak:.44,filter:{type:"lowpass",freq:340,to:520,q:1}},{src:"noise",noise:"white",at:1.2,dur:.055,a:.002,d:.02,s:.06,r:.026,peak:.34,filter:{type:"highpass",freq:1500,q:.8}},{src:"noise",noise:"white",at:1.25,dur:.055,a:.002,d:.02,s:.06,r:.026,peak:.3,filter:{type:"highpass",freq:1700,q:.8}},{src:"tone",wave:"sine",freq:1180,to:3140,at:1.21,dur:.34,a:.006,d:.1,s:.24,r:.18,peak:.16},{src:"noise",noise:"white",at:1.21,dur:.2,a:.004,d:.06,s:.2,r:.1,peak:.12,filter:{type:"highpass",freq:5e3,q:.8}}]},shutter_close:{bus:"machine",gain:.66,spot:"scanner",minGain:.16,layers:[{src:"tone",wave:"sine",freq:3140,to:1180,at:0,dur:.3,a:.006,d:.09,s:.24,r:.15,peak:.16},{src:"noise",noise:"white",at:0,dur:.18,a:.004,d:.055,s:.18,r:.09,peak:.12,filter:{type:"highpass",freq:5e3,q:.8}},{src:"tone",wave:"sawtooth",freq:132,to:118,at:0,dur:1.19,a:.1,d:.18,s:.72,r:.34,peak:.26,filter:{type:"bandpass",freq:700,q:5},lfo:{rate:47,depth:.35,target:"gain"}},{src:"tone",wave:"sawtooth",freq:134.7,to:120.4,at:.01,dur:1.18,a:.12,d:.18,s:.72,r:.34,peak:.21,filter:{type:"bandpass",freq:840,q:4.2},lfo:{rate:44,depth:.35,target:"gain"}},{src:"noise",noise:"pink",at:.01,dur:1.18,a:.42,d:.3,s:.55,r:.42,peak:.64,filter:{type:"bandpass",freq:1350,to:620,q:1.4}},{src:"noise",noise:"brown",at:.02,dur:1.17,a:.4,d:.28,s:.52,r:.4,peak:.46,filter:{type:"lowpass",freq:520,to:340,q:1}},{src:"noise",noise:"brown",at:1.2,dur:.15,a:.002,d:.055,s:.08,r:.075,peak:.52,filter:{type:"lowpass",freq:800,to:150,q:1.4}},{src:"tone",wave:"sine",freq:196,to:104,at:1.2,dur:.17,a:.002,d:.062,s:.09,r:.085,peak:.38},{src:"noise",noise:"white",at:1.214,dur:.05,a:.002,d:.018,s:.05,r:.024,peak:.26,filter:{type:"bandpass",freq:2600,q:7}}]},fault_query:{bus:"machine",gain:.54,spot:"faultLocator",minGain:.18,layers:[{src:"noise",noise:"white",at:0,dur:3.96,a:.03,d:.12,s:.88,r:.24,peak:.5,filter:{type:"bandpass",freq:1550,q:6},lfo:{rate:9,depth:.95,target:"gain"}},{src:"noise",noise:"pink",at:.01,dur:3.96,a:.04,d:.14,s:.84,r:.26,peak:.46,filter:{type:"bandpass",freq:3100,q:4.5},lfo:{rate:6,depth:.9,target:"gain"}},{src:"tone",wave:"triangle",freq:112,at:0,dur:3.98,a:.05,d:.15,s:.8,r:.3,peak:.16,filter:{type:"lowpass",freq:380,q:1}},{src:"tone",wave:"sine",freq:98.5,at:0,dur:3.98,a:.06,d:.15,s:.82,r:.3,peak:.14},{src:"tone",wave:"sine",freq:100,at:.02,dur:3.96,a:.07,d:.15,s:.82,r:.3,peak:.12},{src:"noise",noise:"brown",at:.03,dur:3.95,a:.2,d:.4,s:.6,r:.6,peak:.4,filter:{type:"lowpass",freq:420,q:1}},{src:"noise",noise:"white",at:3.96,dur:.07,a:.002,d:.026,s:.05,r:.036,peak:.26,filter:{type:"bandpass",freq:1200,to:640,q:2.6}}]},food_dispense:{bus:"machine",gain:.66,spot:"foodMachine",minGain:.16,layers:[{src:"noise",noise:"pink",at:0,dur:.9,a:.03,d:.1,s:.75,r:.16,peak:.44,filter:{type:"bandpass",freq:1250,q:2.2},lfo:{rate:7,depth:.9,target:"gain"}},{src:"tone",wave:"sawtooth",freq:154,to:196,at:0,dur:.7,a:.06,d:.12,s:.68,r:.2,peak:.24,filter:{type:"lowpass",freq:420,to:600,q:1.3},lfo:{rate:11,depth:.4,target:"gain"}},{src:"noise",noise:"white",at:.15,dur:.07,a:.002,d:.026,s:.06,r:.036,peak:.32,filter:{type:"bandpass",freq:2400,to:1500,q:3}},{src:"noise",noise:"white",at:.55,dur:.075,a:.001,d:.028,s:.05,r:.038,peak:.42,filter:{type:"bandpass",freq:1750,to:820,q:2}},{src:"noise",noise:"brown",at:.552,dur:.095,a:.002,d:.035,s:.08,r:.048,peak:.36,filter:{type:"lowpass",freq:600,to:180,q:1.2}},{src:"tone",wave:"triangle",freq:213,at:.552,dur:.3,a:.002,d:.09,s:.18,r:.18,peak:.28,jitter:.04,filter:{type:"bandpass",freq:640,q:9}},{src:"tone",wave:"triangle",freq:341,at:.552,dur:.22,a:.002,d:.07,s:.16,r:.14,peak:.15,jitter:-.04,filter:{type:"bandpass",freq:900,q:8}},{src:"tone",wave:"sawtooth",freq:196,to:120,at:.7,dur:.6,a:.02,d:.16,s:.4,r:.34,peak:.18,filter:{type:"lowpass",freq:600,to:260,q:1.2}}]},door_locked:{bus:"control",gain:.56,spot:"doors",minGain:.28,layers:[{src:"noise",noise:"brown",at:0,dur:.11,a:.002,d:.04,s:.1,r:.055,peak:.72,filter:{type:"lowpass",freq:1e3,to:180,q:1.6}},{src:"tone",wave:"sine",freq:118,to:64,at:0,dur:.13,a:.002,d:.048,s:.08,r:.062,peak:.42},{src:"noise",noise:"brown",at:.13,dur:.11,a:.002,d:.04,s:.1,r:.055,peak:.66,filter:{type:"lowpass",freq:900,to:170,q:1.6}},{src:"tone",wave:"sine",freq:112,to:60,at:.13,dur:.13,a:.002,d:.048,s:.08,r:.062,peak:.38},{src:"tone",wave:"sawtooth",freq:96,at:.14,dur:.42,a:.01,d:.06,s:.7,r:.19,peak:.2,filter:{type:"bandpass",freq:480,q:7},lfo:{rate:50,depth:.9,target:"gain"}},{src:"noise",noise:"pink",at:.01,dur:.48,a:.004,d:.14,s:.22,r:.28,peak:.28,filter:{type:"bandpass",freq:520,to:230,q:1.6}}]},clock_tick:{bus:"machine",gain:.56,spot:"clock",minGain:.04,layers:[{src:"noise",noise:"white",at:0,dur:.022,a:.001,d:.008,s:0,r:.011,peak:.95,filter:{type:"bandpass",freq:3400,to:2300,q:5}},{src:"noise",noise:"brown",at:0,dur:.045,a:.001,d:.018,s:.1,r:.024,peak:.42,filter:{type:"lowpass",freq:700,to:300,q:1.4}},{src:"tone",wave:"triangle",freq:386,at:.002,dur:.12,a:.002,d:.04,s:.1,r:.07,peak:.2,jitter:.012,filter:{type:"bandpass",freq:430,q:8}}]},clock_tock:{bus:"machine",gain:.88,spot:"clock",minGain:.04,layers:[{src:"noise",noise:"pink",at:0,dur:.024,a:.001,d:.009,s:0,r:.012,peak:1,filter:{type:"bandpass",freq:2600,to:1750,q:2.4}},{src:"noise",noise:"brown",at:0,dur:.048,a:.001,d:.019,s:.1,r:.026,peak:.42,filter:{type:"lowpass",freq:640,to:280,q:1.4}},{src:"tone",wave:"triangle",freq:368,at:.002,dur:.126,a:.002,d:.042,s:.1,r:.074,peak:.2,jitter:.012,filter:{type:"bandpass",freq:410,q:8}}]},prop_wood:{bus:"machine",gain:.62,minGain:.06,layers:[{src:"noise",noise:"brown",at:0,dur:.07,a:.002,d:.026,s:.1,r:.034,peak:.56,filter:{type:"lowpass",freq:1200,to:420,q:1.3}},{src:"tone",wave:"triangle",freq:196,at:0,dur:.18,a:.002,d:.06,s:.12,r:.11,peak:.22,jitter:.06,filter:{type:"bandpass",freq:196,q:8}},{src:"tone",wave:"triangle",freq:311,at:.004,dur:.14,a:.002,d:.048,s:.1,r:.086,peak:.14,jitter:-.06,filter:{type:"bandpass",freq:311,q:9}},{src:"noise",noise:"white",at:0,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.2,filter:{type:"bandpass",freq:2200,q:2.2}}]},step_a:{bus:"body",gain:.6,layers:[{src:"noise",noise:"brown",at:0,dur:.09,a:.002,d:.034,s:.1,r:.046,peak:.62,filter:{type:"lowpass",freq:820,to:190,q:1.3}},{src:"tone",wave:"sine",freq:148,to:76,at:0,dur:.1,a:.002,d:.036,s:.08,r:.05,peak:.34,jitter:.09},{src:"tone",wave:"triangle",freq:268,at:0,dur:.13,a:.002,d:.045,s:.14,r:.08,peak:.16,jitter:-.09,filter:{type:"bandpass",freq:300,q:7}},{src:"noise",noise:"white",at:0,dur:.04,a:.001,d:.015,s:0,r:.019,peak:.22,filter:{type:"bandpass",freq:2300,to:1400,q:2.2}},{src:"noise",noise:"pink",at:.021,dur:.17,a:.004,d:.052,s:.16,r:.095,peak:.22,filter:{type:"bandpass",freq:520,to:300,q:1.4}}]},step_b:{bus:"body",gain:.58,layers:[{src:"noise",noise:"brown",at:0,dur:.086,a:.002,d:.032,s:.1,r:.044,peak:.58,filter:{type:"lowpass",freq:900,to:210,q:1.3}},{src:"tone",wave:"sine",freq:162,to:84,at:0,dur:.096,a:.002,d:.034,s:.08,r:.048,peak:.31,jitter:.09},{src:"tone",wave:"triangle",freq:279,at:0,dur:.126,a:.002,d:.043,s:.14,r:.078,peak:.15,jitter:-.09,filter:{type:"bandpass",freq:312,q:7}},{src:"noise",noise:"white",at:0,dur:.038,a:.001,d:.014,s:0,r:.018,peak:.2,filter:{type:"bandpass",freq:2650,to:1600,q:2.2}},{src:"noise",noise:"pink",at:.021,dur:.17,a:.004,d:.052,s:.16,r:.095,peak:.2,filter:{type:"bandpass",freq:580,to:330,q:1.4}}]},step_land:{bus:"body",gain:.58,layers:[{src:"noise",noise:"brown",at:0,dur:.16,a:.002,d:.06,s:.12,r:.08,peak:.82,filter:{type:"lowpass",freq:980,to:150,q:1.5}},{src:"tone",wave:"sine",freq:128,to:58,at:0,dur:.18,a:.002,d:.066,s:.1,r:.09,peak:.46},{src:"noise",noise:"white",at:0,dur:.048,a:.001,d:.018,s:0,r:.024,peak:.28,filter:{type:"bandpass",freq:2e3,to:1100,q:2}},{src:"noise",noise:"pink",at:.021,dur:.3,a:.006,d:.09,s:.18,r:.17,peak:.28,filter:{type:"bandpass",freq:470,to:260,q:1.3}}]},door_bolt:{bus:"control",gain:.6,spot:"doors",minGain:.26,layers:[{src:"tone",wave:"sawtooth",freq:96,at:0,dur:.23,a:.006,d:.07,s:.55,r:.11,peak:.22,filter:{type:"bandpass",freq:480,to:620,q:7},lfo:{rate:50,depth:.9,to:.1,target:"gain"}},{src:"noise",noise:"brown",at:.19,dur:.14,a:.002,d:.05,s:.1,r:.07,peak:.8,filter:{type:"lowpass",freq:1100,to:160,q:1.6}},{src:"tone",wave:"sine",freq:104,to:52,at:.19,dur:.15,a:.002,d:.054,s:.08,r:.076,peak:.44},{src:"noise",noise:"pink",at:.211,dur:.2,a:.004,d:.06,s:.16,r:.11,peak:.24,filter:{type:"bandpass",freq:500,to:290,q:1.4}}]},door_swing:{bus:"room",gain:.5,loop:!0,spot:"doors",minGain:.1,layers:[{src:"noise",noise:"brown",at:0,a:.18,s:1,r:.3,peak:.72,filter:{type:"lowpass",freq:220,q:1.1},lfo:{rate:.6,depth:40,target:"filter"}},{src:"noise",noise:"pink",at:0,a:.24,s:1,r:.34,peak:.3,filter:{type:"bandpass",freq:1300,q:1.3},lfo:{rate:.45,depth:600,target:"filter"}}]},door_stop:{bus:"machine",gain:.54,spot:"doors",minGain:.14,layers:[{src:"noise",noise:"brown",at:0,dur:.15,a:.002,d:.056,s:.08,r:.072,peak:.86,filter:{type:"lowpass",freq:700,to:240,q:1.4}},{src:"tone",wave:"sine",freq:92,to:46,at:0,dur:.16,a:.002,d:.058,s:.06,r:.074,peak:.4},{src:"tone",wave:"triangle",freq:4800,at:.002,dur:.3,a:.001,d:.11,s:.1,r:.17,peak:.14,filter:{type:"bandpass",freq:4800,q:9}},{src:"noise",noise:"pink",at:.021,dur:.19,a:.004,d:.058,s:.14,r:.1,peak:.2,filter:{type:"bandpass",freq:480,to:280,q:1.4}}]},door_shut:{bus:"machine",gain:.56,spot:"doors",minGain:.16,layers:[{src:"noise",noise:"brown",at:0,dur:.13,a:.002,d:.048,s:.1,r:.066,peak:.76,filter:{type:"lowpass",freq:860,to:200,q:1.4}},{src:"tone",wave:"sine",freq:134,to:68,at:0,dur:.14,a:.002,d:.05,s:.08,r:.07,peak:.38},{src:"noise",noise:"brown",at:.14,dur:.12,a:.002,d:.044,s:.08,r:.06,peak:.88,filter:{type:"lowpass",freq:620,to:150,q:1.7}},{src:"tone",wave:"sine",freq:86,to:42,at:.14,dur:.13,a:.002,d:.046,s:.06,r:.064,peak:.46},{src:"noise",noise:"pink",at:.161,dur:.21,a:.004,d:.064,s:.15,r:.115,peak:.22,filter:{type:"bandpass",freq:460,to:270,q:1.4}}]},phone_ring:{bus:"machine",gain:.58,minGain:.055,layers:[{src:"noise",noise:"white",at:0,dur:.03,a:.001,d:.01,s:0,r:.016,peak:.3,filter:{type:"bandpass",freq:3200,to:2100,q:3}},{src:"tone",wave:"sine",freq:1e3,at:0,dur:.4,a:.004,d:.03,s:.92,r:.05,peak:.52,lfo:{rate:13,depth:1,target:"gain"},filter:{type:"bandpass",freq:1050,q:2.2}},{src:"tone",wave:"sine",freq:1250,at:.038,dur:.362,a:.004,d:.03,s:.92,r:.05,peak:.4,lfo:{rate:13,depth:1,target:"gain"},filter:{type:"bandpass",freq:1300,q:2.2}},{src:"noise",noise:"brown",at:0,dur:.4,a:.01,d:.06,s:.3,r:.09,peak:.2,filter:{type:"lowpass",freq:520,to:340,q:1.2}},{src:"noise",noise:"white",at:.6,dur:.03,a:.001,d:.01,s:0,r:.016,peak:.3,filter:{type:"bandpass",freq:3200,to:2100,q:3}},{src:"tone",wave:"sine",freq:1e3,at:.6,dur:.4,a:.004,d:.03,s:.92,r:.05,peak:.52,lfo:{rate:13,depth:1,target:"gain"},filter:{type:"bandpass",freq:1050,q:2.2}},{src:"tone",wave:"sine",freq:1250,at:.638,dur:.362,a:.004,d:.03,s:.92,r:.05,peak:.4,lfo:{rate:13,depth:1,target:"gain"},filter:{type:"bandpass",freq:1300,q:2.2}},{src:"noise",noise:"brown",at:.6,dur:.4,a:.01,d:.06,s:.3,r:.09,peak:.2,filter:{type:"lowpass",freq:520,to:340,q:1.2}}]},phone_answer:{bus:"machine",gain:.61,minGain:.05,layers:[{src:"noise",noise:"white",at:0,dur:.026,a:.001,d:.008,s:0,r:.014,peak:.7,filter:{type:"bandpass",freq:2400,to:1500,q:2}},{src:"tone",wave:"sine",freq:455,at:.03,dur:1.7,a:.04,d:.2,s:.72,r:.42,peak:.34,filter:{type:"bandpass",freq:470,q:3.2}},{src:"tone",wave:"sine",freq:456.7,at:.03,dur:1.7,a:.04,d:.2,s:.72,r:.42,peak:.26,filter:{type:"bandpass",freq:470,q:3.2}},{src:"noise",noise:"pink",at:.06,dur:1.68,a:.6,d:.1,s:.9,r:.36,peak:.3,filter:{type:"bandpass",freq:1600,to:3400,q:.9},lfo:{rate:7.3,depth:900,target:"filter"}}]},ext_wind:{bus:"room",gain:.62,loop:!0,rate:.809,layers:[{src:"noise",noise:"brown",at:0,a:3,s:1,r:2.4,peak:.9,filter:{type:"lowpass",freq:120,q:.7},lfo:{rate:.037037,depth:45,target:"filter"}},{src:"noise",noise:"pink",at:0,a:3.6,s:1,r:2.6,peak:.44,filter:{type:"bandpass",freq:900,q:.8},lfo:{rate:.052632,depth:450,target:"filter"}},{src:"noise",noise:"white",at:1.7,a:4.4,s:1,r:3,peak:.09,filter:{type:"bandpass",freq:5200,q:1.8},lfo:{rate:.021277,depth:800,target:"filter"}}]},ext_grit:{bus:"room",gain:.46,loop:!0,rate:.5236,layers:[{src:"noise",noise:"pink",at:0,a:2.8,s:1,r:2.2,peak:.34,filter:{type:"bandpass",freq:1800,q:1.1},lfo:{rate:.043478,depth:500,target:"filter"}},{src:"noise",noise:"white",at:.9,a:3.2,s:1,r:2.4,peak:.16,filter:{type:"highpass",freq:3400,q:.9},lfo:{rate:.028571,depth:700,target:"filter"}}]},step_grit_a:{bus:"body",gain:.52,layers:[{src:"noise",noise:"brown",at:0,dur:.11,a:.003,d:.042,s:.12,r:.058,peak:.54,filter:{type:"lowpass",freq:560,to:150,q:1.1}},{src:"tone",wave:"sine",freq:124,to:62,at:0,dur:.11,a:.003,d:.04,s:.08,r:.054,peak:.26,jitter:.09},{src:"noise",noise:"white",at:0,dur:.09,a:.002,d:.034,s:.06,r:.046,peak:.26,filter:{type:"bandpass",freq:1500,to:780,q:1.2}},{src:"noise",noise:"pink",at:.012,dur:.15,a:.006,d:.05,s:.1,r:.09,peak:.13,filter:{type:"lowpass",freq:420,to:240,q:.8}}]},step_grit_b:{bus:"body",gain:.5,layers:[{src:"noise",noise:"brown",at:0,dur:.104,a:.003,d:.04,s:.12,r:.056,peak:.5,filter:{type:"lowpass",freq:620,to:168,q:1.1}},{src:"tone",wave:"sine",freq:138,to:70,at:0,dur:.104,a:.003,d:.038,s:.08,r:.052,peak:.24,jitter:.09},{src:"noise",noise:"white",at:0,dur:.086,a:.002,d:.032,s:.06,r:.044,peak:.24,filter:{type:"bandpass",freq:1700,to:880,q:1.2}},{src:"noise",noise:"pink",at:.012,dur:.15,a:.006,d:.05,s:.1,r:.09,peak:.12,filter:{type:"lowpass",freq:460,to:260,q:.8}}]},mute_off:{bus:"control",gain:.55,layers:[{src:"tone",wave:"sine",freq:660,at:0,dur:.13,a:.004,d:.04,s:.2,r:.07,peak:.28},{src:"tone",wave:"sine",freq:990,at:.07,dur:.16,a:.004,d:.05,s:.22,r:.09,peak:.22},{src:"noise",noise:"white",at:0,dur:.03,a:.001,d:.011,s:0,r:.015,peak:.2,filter:{type:"bandpass",freq:2400,q:3}}]}},Nm=["room_tone","room_air","console_hum","fault_idle"],UE={hatStand:1.14,chair:.86,clock:.72},FE={scanner:.92,faultLocator:.84,foodMachine:1.12},kE={vinyl:["step_a","step_b"],grit:["step_grit_a","step_grit_b"]},zE=2.4,HE=Math.PI/2,Um=1.8,Fm=2.61,BE=.9,km=.045,oc=et.FLAT_FACE+km/2,uu=Um/2,zm=BE/2,Hm=3.284,Bm=3.674;if(Math.abs(Bm-(Hm+Le.RADIUS+.05))>1e-12)throw new Error(`doors: the backstop plane no longer derives — WALK.RADIUS is ${Le.RADIUS}`);const GE=[1,-1].map(n=>Object.freeze({x:n*2.4,z:4.15,hw:1.5,hd:1,rotY:0,y0:0,y1:et.CEIL_H})),WE=[1,-1].map(n=>Object.freeze({x:n*.7375,z:3.2655,hw:.1625,hd:.0705,rotY:0,y0:0,y1:Fm})),If=Object.freeze({nx:0,nz:1,d:Bm}),VE=Object.freeze({opening:"The bolts draw back, and the doors swing inward.",closing:"The doors swing shut, and the bolts drive home.",alreadyOpen:"The doors are already open.",alreadyShut:"The doors are already shut.",busyOpening:"The doors are already opening.",busyClosing:"The doors are already closing.",shutters:"Door control: interlock — the scanner shutters are shut.",flight:"Door control: interlock — the ship is in flight.",remote:"Door control: no answer from the shell.",onYou:"Door control: the doors will not close on you.",locked:"The doors are locked.",lockOnOpen:"Door control: the doors must be shut before they can be locked.",didLock:"Door control: the doors are locked.",didUnlock:"Door control: the doors are unlocked.",unlockInFlight:"Door control: the ship is in flight."}),qE=et.FLAT_FACE-Le.RADIUS,XE=Hm+.615+Le.RADIUS;function Gm(n){const t=n<=0?0:n>=1?1:n;return t*t*(3-2*t)}function Df(n){return HE*Gm(n)}function za(n,t){const e=n>=0?1:-1,i=-e*t,s=-e*zm;return{side:e,rotY:i,hingeX:e*uu,hingeZ:oc,x:e*uu+s*Math.cos(i),z:oc-s*Math.sin(i)}}function YE(n,t){const e=za(n,t);return{x:e.x,z:e.z,hw:zm,hd:km/2,rotY:e.rotY,y0:0,y1:Fm}}function $E(n){const t=n<=0?0:n>=1?1:n;return 4*t*(1-t)}const Il=new jt,Pf=new jt,Of=new jt;function Dl(n,t){const e=Array.isArray(n)?n:Array.isArray(n==null?void 0:n.leaves)?n.leaves:Array.isArray(n==null?void 0:n.pivots)?n.pivots:null;if(!e||e.length!==2)throw new Error(`doors: ${t} must hand over exactly two leaf pivots (got ${e?e.length:typeof n})`);const i=e.map((s,r)=>{var a,c;if(!s||!s.isObject3D)throw new Error(`doors: ${t} leaf ${r} is not an Object3D`);let o=((a=s.userData)==null?void 0:a.side)??((c=s.userData)==null?void 0:c.hingeSign)??0;return o||(o=Math.sign(s.position.x)),o||(o=r===0?1:-1,console.warn(`doors: ${t} leaf ${r} publishes no side and sits at x = 0 — assuming ${o>0?"right":"left"} from index order.`)),{obj:s,side:o}});if(i[0].side===i[1].side)throw new Error(`doors: ${t} hands over two leaves on the same side`);return i[0].side>0?i:[i[1],i[0]]}const Nf=.015,Uf=new pi,eo=new pi;function Ff(n,t){for(const{obj:e,side:i}of n){eo.makeEmpty();for(const s of e.children){const r=s.isMesh?s.geometry:null;r&&(r.boundingBox||r.computeBoundingBox(),r.boundingBox&&(s.updateMatrix(),Uf.copy(r.boundingBox).applyMatrix4(s.matrix),eo.union(Uf)))}eo.isEmpty()||eo.min.z<-Nf&&console.warn(`[doors] ${t} ${i>0?"right":"left"} leaf reaches ${eo.min.z.toFixed(4)} m BEHIND its hinge, past the ${Nf} m inner-face budget. The hinge looks to be on the leaf's OUTER face, and this module now drives it INWARD (-side * theta) — the leaf will sweep through its own jamb. Box.js must hang it at DOOR_Z - LEAF_T = 0.646 (docs/BOX.md §1.1).`)}}function jE(n,t,e={}){var dt;const i=e.shellDoors;if(!i)throw new Error("doors: needs shellDoors from shell(b, P, { liveDoors: true })");const s=(dt=n==null?void 0:n.userData)==null?void 0:dt.collision;if(!s||!Array.isArray(s.planes)||!Array.isArray(s.boxes))throw new Error("doors: b.userData.collision is missing — shell() must run first (Shell.js:457)");let r=e.audio||null,o=e.console||e.consoleUnit||null;const a=i.group||i.doorGroup||new xe;a.name=a.name||"doors";const c=Dl(i,"shellDoors");for(const{obj:Q}of c)Q.parent||a.add(Q);let l=e.boxDoors?Dl(e.boxDoors,"boxDoors"):null;l&&Ff(l,"boxDoors");const u=i.discs||null,h=[];if(u){if(!u.isInstancedMesh||u.count!==2)throw new Error(`doors: shellDoors.discs must be an InstancedMesh of 2 (got ${u.isInstancedMesh?u.count:typeof u})`);u.instanceMatrix.usage!==Mo&&u.instanceMatrix.setUsage(Mo);for(let Q=0;Q<2;Q++){u.getMatrixAt(Q,Il);const U=(Math.sign(Il.elements[12])||(Q===0?1:-1))>0?c[0]:c[1];Of.makeTranslation(U.side*uu,0,oc).invert(),h.push({index:Q,leaf:U,m:Of.multiply(Il).clone()})}}const d=s.planes.findIndex(Q=>Q.nx===0&&Q.nz===1&&Q.d===et.FLAT_FACE);if(d<0)throw new Error("doors: the +Z half-plane is not in b.userData.collision.planes");const f=s.planes[d],p=s.boxes.findIndex(Q=>Q.rotY===0&&Q.z===oc&&Q.hw===Um/2);if(p<0)throw new Error("doors: Shell's shut leaf box is not in b.userData.collision.boxes");const _=s.boxes[p],g=c.map(({side:Q})=>({...YE(Q,0)})),m=[...GE,...WE,...g];let v=!1;function M(Q){if(Q!==v)if(v=!!Q,v)s.planes.splice(d,1),s.planes.push(If),s.boxes.splice(p,1),s.boxes.push(...m),S();else{const z=s.planes.indexOf(If);z>=0&&s.planes.splice(z,1),s.planes.splice(d,0,f);for(const U of m){const Y=s.boxes.indexOf(U);Y>=0&&s.boxes.splice(Y,1)}s.boxes.splice(p,0,_)}}function S(){for(let Q=0;Q<2;Q++){const z=za(c[Q].side,T),U=g[Q];U.x=z.x,U.z=z.z,U.rotY=z.rotY}}let A=0,w=!1,E=0,T=0,N="noop",x=!1,y=!0;function R(){for(let Q=0;Q<2;Q++){const z=za(c[Q].side,T);c[Q].obj.rotation.y=z.rotY}if(l)for(const{obj:Q,side:z}of l)Q.rotation.y=-z*T;if(u){for(const Q of h){const z=za(Q.leaf.side,T);Pf.makeRotationY(z.rotY).setPosition(z.hingeX,0,z.hingeZ),u.setMatrixAt(Q.index,Pf.multiply(Q.m))}u.instanceMatrix.needsUpdate=!0}}function C(Q){var z;(z=o==null?void 0:o.setLamp)==null||z.call(o,"doors",Q)}function O(Q){return VE[Q]}function k(Q,z){var U;(U=r==null?void 0:r.play)==null||U.call(r,Q,{handle:"door",spot:"doors",...z})}function L(Q){Q!==x&&(x=Q,D())}function D(){var Q,z,U,Y;r&&(x?((Q=r.startLoop)==null||Q.call(r,"door_swing","doorSwing",{spot:"doors"}),(z=r.setLoopLevel)==null||z.call(r,"doorSwing",0,0)):((U=r.setLoopLevel)==null||U.call(r,"doorSwing",0,.06),(Y=r.stopLoop)==null||Y.call(r,"doorSwing")))}let F=!1;function X(Q,z={}){var J,ut,lt;const U=!!Q,Y=z.running??((J=z.rotor)==null?void 0:J.running);return!U&&Y===!0?((ut=o==null?void 0:o.blink)==null||ut.call(o,"doors",1),O("unlockInFlight")):U&&A!==0?((lt=o==null?void 0:o.blink)==null||lt.call(o,"doors",1),O("lockOnOpen")):(U===w||(w=U,C(!0),k(w?"door_bolt":"door_stop")),O(w?"didLock":"didUnlock"))}function K(Q,z={}){var ht,gt,vt,H,se,Ct,Nt,It,rt;z.audio&&!r&&(r=z.audio),z.console&&!o&&(o=z.console);const U=Q?1:0,Y=z.shuttersOpen??((ht=z.fittings)==null?void 0:ht.shuttersOpen),J=z.running??((gt=z.rotor)==null?void 0:gt.running),ut=z.worldId??((H=(vt=z.walker)==null?void 0:vt.world)==null?void 0:H.id),lt=z.playerZ??((Ct=(se=z.walker)==null?void 0:se.position)==null?void 0:Ct.z);if(!z.force&&Y===void 0&&J===void 0&&ut===void 0&&lt===void 0&&!F&&(F=!0,console.warn("[doors] request() was given no interlock context — every interlock is off. Pass { fittings, rotor, walker } (THRESHOLD §3.5).")),U===E)return N="noop",O(A===E?E?"alreadyOpen":"alreadyShut":E?"busyOpening":"busyClosing");if(!z.force){if(U===1&&w)return N="refused",(Nt=o==null?void 0:o.blink)==null||Nt.call(o,"doors",1),O("locked");if(U===0&&!z.atShell&&ut!==void 0&&ut!=="interior")return N="refused",(It=o==null?void 0:o.blink)==null||It.call(o,"doors",1),O("remote");if(U===0&&lt!==void 0&&lt>qE&&lt<XE)return N="refused",(rt=o==null?void 0:o.blink)==null||rt.call(o,"doors",1),O("onYou")}return U===1&&A===0&&k("door_bolt"),E=U,N=U?"open":"close",C(!0),A!==E&&L(!0),O(U?"opening":"closing")}function it(Q){var U;const z=Number.isFinite(Q)?Q:0;if(z>0&&A!==E){const Y=z/zE;A=E>A?Math.min(E,A+Y):Math.max(E,A-Y),Math.abs(E-A)<1e-9&&(A=E),T=Df(A),y=!0,A>0&&M(!0),v&&S(),A===E?(L(!1),A===1&&k("door_stop"),A===0&&(k("door_shut"),M(!1),C(!1))):(U=r==null?void 0:r.setLoopLevel)==null||U.call(r,"doorSwing",$E(A))}y&&(R(),y=!1)}return R(),{group:a,leaves:c.map(Q=>Q.obj),discs:u,get t(){return A},get eased(){return Gm(A)},get angle(){return T},get open(){return A>0},get moving(){return A!==E},get state(){return A===0?"shut":A===1?"open":E?"opening":"closing"},get lastAction(){return N},get boxes(){return g},request:K,setLocked:X,get locked(){return w},get flightReady(){return A===0&&w},update:it,collisionFor:M,setBoxDoors(Q){return l=Q?Dl(Q,"boxDoors"):null,l&&Ff(l,"boxDoors"),R(),y=!1,this},setAudio(Q){return r=Q||null,D(),this},setConsole(Q){return o=Q||null,this},force(Q){return this.forceT(Q?1:0)},forceT(Q){return A=Math.min(1,Math.max(0,+Q||0)),E=A,T=Df(A),L(!1),M(A>0),v&&S(),C(A>0),y=!0,R(),this},dispose(){L(!1)}}}const Dn=3.284,Fo=.071,On=Object.freeze({w:1.15,h:2.11}),KE=On.w/2,Ei=Object.freeze({footprint:1.372,half:.686,height:2.9,plinth:1.452,post:.111,bodyTop:2.28,planeZ:Fo}),ZE=Object.freeze([Object.freeze({x:.6305,z:0,hw:.0555,hd:.686,rotY:0,y0:0,y1:Ei.bodyTop}),Object.freeze({x:-.6305,z:0,hw:.0555,hd:.686,rotY:0,y0:0,y1:Ei.bodyTop}),Object.freeze({x:0,z:-.5025,hw:.686,hd:.1835,rotY:0,y0:0,y1:Ei.bodyTop})]),kf=1.4,de="interior",Ha="exterior";function JE(n,t){const e=typeof n=="string"?n:n==null?void 0:n.id;if(e===de)return de;if(e===Ha||t&&e===t)return Ha;throw new Error(`link: unknown world id ${JSON.stringify(e)} — expected '${de}', '${Ha}' or '${t}'`)}function QE(n,t){var c;if(!t||typeof t!="object")throw new Error("link: landing must be a record { site, x, z, yaw }");for(const l of["x","z","yaw"])if(!Number.isFinite(t[l]))throw new Error(`link: landing.${l} must be a finite number, got ${t[l]}`);if(!n||typeof n!="object")throw new Error(`link: no site record for landing.site ${JSON.stringify(t.site)}`);if(n.id&&t.site&&n.id!==t.site)throw new Error(`link: landing names site '${t.site}' but was handed site '${n.id}'`);const e=typeof n.groundY=="function"?n.groundY.bind(n):null,i=Ei.plinth/2,s=Math.cos(t.yaw),r=Math.sin(t.yaw),o=[[0,0],[+i,+i],[+i,-i],[-i,+i],[-i,-i]];for(const[l,u]of o){const h=t.x+l*s+u*r,d=t.z-l*r+u*s,f=e?e(h,d):((c=n.ground)==null?void 0:c.padY)??0;if(!Number.isFinite(f)||Math.abs(f)>.001)throw new Error(`link: landing '${t.site}' (${t.x}, ${t.z}) is not a level pad — ground is ${f} at (${h.toFixed(3)}, ${d.toFixed(3)}), and the link has no y offset to spend`)}const a=n.bounds;if(!a)throw new Error(`link: site '${n.id}' publishes no bounds`);if(Number.isFinite(a.apothem)){const l=Math.hypot(t.x,t.z),u=a.apothem-Le.RADIUS-kf;if(l>u)throw new Error(`link: landing '${t.site}' sits ${l.toFixed(3)} m from the site centre; the box cannot be walked round past ${u.toFixed(3)} m (apothem ${a.apothem} - WALK.RADIUS ${Le.RADIUS} - walk-round ${kf})`)}}function nh(n,t){const e=typeof n=="string"?dn[n]:n;if(!e)throw new Error(`link: unknown landing ${JSON.stringify(n)} — known: ${Object.keys(dn).join(", ")}`);const i=t&&typeof t=="object"&&t[e.site]?t[e.site]:t&&t.id===e.site?t:null;QE(i,e);const s=e.yaw,r=new jt().makeTranslation(e.x,0,e.z).multiply(new jt().makeRotationY(s)).multiply(new jt().makeTranslation(0,0,Fo-Dn)),o=r.clone().invert(),a=new B(0,0,1),c=new B(0,0,Dn),l=new B(Math.sin(s),0,Math.cos(s)),u=c.clone().applyMatrix4(r),h=new Bi(new B(0,0,-1),Dn),d=new Bi(l.clone(),-l.dot(u)),f=new cn;f.name="portalCam",f.matrixAutoUpdate=!1,f.matrixWorldAutoUpdate=!1;const p=i.id||e.site,_=v=>JE(v,p),g=v=>_(v)===de?1:-1,m=(v,M,S,A=new B)=>A.set(e.x+v*no(s)+S*io(s),M,e.z-v*io(s)+S*no(s));return{site:i,landing:Object.freeze({...e}),siteId:p,M_IE:r,M_EI:o,yaw:s,nI:a,pI:c,nE:l,pE:u,keepI:h,keepE:d,portalCam:f,M(v){return _(v)===de?r:o},keepFor(v){return _(v)===de?h:d},planeFor(v){return _(v)===de?{point:c,normal:a}:{point:u,normal:l}},distanceTo(v,M){return _(v)===de?M.z-Dn:(M.x-u.x)*l.x+(M.z-u.z)*l.z},signFor:g,crossed(v,M,S){const A=g(v);return A*M<0&&A*S>=0},dYaw(v){return _(v)===de?s:-s},other(v){return _(v)===de?Ha:de},boxCollision(){return ZE.map(v=>({x:e.x+v.x*no(s)+v.z*io(s),z:e.z-v.x*io(s)+v.z*no(s),hw:v.hw,hd:v.hd,rotY:v.rotY+s,y0:v.y0,y1:v.y1}))},capPose(v){const M=On.h/2;return _(v)===de?{position:new B(0,M,Dn),rotY:Math.PI,normal:a.clone().negate()}:{position:new B(u.x,M,u.z),rotY:s,normal:l.clone()}},apertureCorners(v){const M=_(v)===de,S=[];for(const[A,w]of[[1,0],[-1,0],[-1,1],[1,1]]){const E=A*KE,T=w*On.h;S.push(M?new B(E,T,Dn):new B(u.x+E*no(s),T,u.z-E*io(s)))}return S},toSite:m,toExterior(v,M=new B){return M.copy(v).applyMatrix4(r)},toInterior(v,M=new B){return M.copy(v).applyMatrix4(o)},doorSpillPoint(v=new B){return m(0,1.5,Ei.half,v)},outsideSpawn(v=2.2,M=new B){return m(0,0,Ei.half+v,M)}}}function no(n){return Math.cos(n)}function io(n){return Math.sin(n)}const dn=Object.freeze({ashfall_pan:Object.freeze({site:"ashfall",name:"the Ashfall — the pan",x:0,z:-4.2,yaw:0}),ashfall_rim:Object.freeze({site:"ashfall",name:"the Ashfall — the rim",x:6.4,z:-4.9,yaw:2.356194}),verge_shelf:Object.freeze({site:"verge",name:"the Verge — the shelf",x:-3.1,z:5.8,yaw:-1.047198}),alley_kerb:Object.freeze({site:"alley",name:"the alley — the kerb",x:-1.05,z:8.2,yaw:Math.PI,start:Object.freeze({x:-.15,z:-10.4,yaw:0}),boot:"exterior"}),alley_arrive:Object.freeze({site:"alley",name:"the alley",x:-1.05,z:8.2,yaw:Math.PI})}),tw="alley_arrive";function ew(n,{landings:t=dn,fallback:e=tw}={}){const i=o=>n?typeof n=="string"?new URLSearchParams(n).get(o):typeof n.get=="function"?n.get(o):Object.prototype.hasOwnProperty.call(n,o)?String(n[o]):null:null,s=i("landing");if(s){const o=t[s];if(!o)throw new Error(`link: ?landing=${s} is not a known landing — known: ${Object.keys(t).join(", ")}`);return o}const r=i("site");if(r){const o=a=>{const c=i(a);if(c===null||c==="")return 0;const l=Number(c);if(!Number.isFinite(l))throw new Error(`link: ?${a}=${c} is not a number`);return l};return Object.freeze({site:r,x:o("x"),z:o("z"),yaw:o("yaw")})}return t[e]}const be=Math.PI*2,ac=Math.PI/180,gn=n=>n<0?0:n>1?1:n,ih=n=>n*n*(3-2*n),Rs=(n,t,e)=>n+(t-n)*e;function Pl(n,t=0){const e=n*ac,i=t*ac,s=Math.cos(i);return new B(Math.sin(e)*s,Math.sin(i),Math.cos(e)*s)}function nw(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function iw(n){let t=nw(n)||1;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function Wm(n){for(const t of Object.values(n))t&&typeof t=="object"&&Wm(t);return Object.freeze(n)}const Ol=Object.freeze(["id","name","sky","suns","sun","bounce","hemi","ambient","fog","ground","grit","rock","horizon","bounds","beds","ambience","props","extras","lamps"]),sw=Object.freeze(["distance","camera","area"]),rw=1.4,ow=.8,aw=1.1,cw=.2968,lw=.796;function Nl(n){const t=n/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4}function uw(n){return .2126*Nl(n>>16&255)+.7152*Nl(n>>8&255)+.0722*Nl(n&255)}function hw(n){if(Number.isFinite(n.sun.gain))return n.sun.gain;const t=Math.max(.05,Math.sin(n.sun.elevationDeg*Math.PI/180)),e=Math.max(1e-4,uw(n.ground.colour)*n.sun.intensity*t);return cw/e**lw}function sh(n){if(n==null||typeof n!="object")throw new Error("SITE_SHAPE: not a record");if("exposure"in n)throw new Error(`SITE_SHAPE '${n.id}': there is no 'exposure' key in a site record. toneMappingExposure is renderer-global (main.js:83) and both render passes happen inside one frame, so an exterior exposure would change the console room's look through the portal in the same frame. Brightness comes from light intensities and albedo. THRESHOLD.md §4.2.`);for(const c of Ol)if(!(c in n))throw new Error(`SITE_SHAPE '${n.id}': missing key '${c}'`);for(const c of Object.keys(n))if(!Ol.includes(c))throw sw.includes(c)?new Error(`SITE_SHAPE '${n.id}': '${c}' is DERIVED here, not typed in the record`):new Error(`SITE_SHAPE '${n.id}': unknown key '${c}' (keys: ${Ol.join(", ")})`);const t=Object.keys(hu);if(!t.includes(n.horizon.silhouette))throw new Error(`SITE_SHAPE '${n.id}': horizon.silhouette '${n.horizon.silhouette}' is not a shipped kind (${t.join(" | ")}). A new shape is ~25 lines in SITE_KIND_BUILDERS and is then shared by every site from then on.`);for(const c of n.props)if(!t.includes(c.kind))throw new Error(`SITE_SHAPE '${n.id}': prop kind '${c.kind}' is not a shipped kind (${t.join(" | ")})`);const e=du[n.bounds.kind];if(!e)throw new Error(`SITE_SHAPE '${n.id}': bounds.kind '${n.bounds.kind}' is not a shipped kind (${Object.keys(du).join(" | ")}). A new shape is a row in BOUNDS_KINDS and is then shared by every site from then on.`);e.validate(n.bounds,n.id);const i=e.metrics(n.bounds),s=i.area,r=i.max,o={ref:rw,max:r,fade:.25*r,panWidth:ow,panNear:aw},a={far:Math.ceil(n.sky.radius*1.1/10)*10};return Wm({...n,area:s,distance:o,camera:a})}const St=512,so=n=>n*St,dw=.06,Ul=.055,fw=.035;let zf=!1;function Vm(){zf||(zf=!0,De("ashField",(n,t={})=>{const e=t.p0??48,i=t.amp??.28,s=t.ripple??2.2,r=he(n,St,{p0:e,octaves:4}),o=he(n,St,{p0:Math.max(4,Math.round(e/6)),octaves:2}),a=.38,c=Math.max(1,Math.round(s*Math.cos(a))),l=Math.round(s*Math.sin(a)),u=new Float32Array(St*St),h=new Float32Array(St*St),d=new Float32Array(St*St);for(let f=0;f<St;f++){const p=f/St;for(let _=0;_<St;_++){const g=f*St+_,m=_/St,v=be*(c*m+l*p)+(o[g]-.5)*2.4,M=.5-.5*Math.cos(v),S=gn(.58*M*(.55+.45*r[g])+.42*r[g]);u[g]=S,h[g]=.7+.3*S,d[g]=.94-.13*S}}return{normalMap:Yn(u,St,so(i*dw)),ormMap:Xe(St,h,d,null),normalScale:1,uvScale:[1,1]}}),De("siteRock",(n,t={})=>{const e=t.p0??24,i=t.amp??1,s=he(n,St,{p0:e,octaves:5}),r=he(n,St,{p0:e*2,octaves:3}),o=new Float32Array(St*St),a=new Float32Array(St*St),c=new Float32Array(St*St);for(let l=0;l<St*St;l++){const u=1-Math.abs(2*r[l]-1),h=gn(.58*s[l]+.42*u);o[l]=h,a[l]=.62+.38*h,c[l]=.92-.2*u}return{normalMap:Yn(o,St,so(i*Ul)),ormMap:Xe(St,a,c,null),normalScale:1,uvScale:[1,1]}}),De("brick",(n,t={})=>{const e=t.rows??8,i=t.cols??4,s=t.joint??.075,r=t.amp??1;if(e%2!==0)throw new Error(`brick: rows must be EVEN (got ${e}) — alternate courses are offset by half a brick, so an odd count faults the bond at the tile seam`);if(i!==Math.round(i)||i<1)throw new Error(`brick: cols must be a whole number of bricks (got ${i}) or the bond does not close horizontally`);const o=he(n,St,{p0:128,octaves:4}),a=he(n,St,{p0:16,octaves:3}),c=new Float32Array(St*St),l=new Float32Array(St*St),u=new Float32Array(St*St),h=(d,f)=>{const p=Math.sin(d*127.1+f*311.7)*43758.5453;return p-Math.floor(p)};for(let d=0;d<St;d++){const f=d/St*e,p=Math.floor(f),_=f-p,g=p&1?.5:0;for(let m=0;m<St;m++){const v=d*St+m,M=m/St*i+g,S=Math.floor(M),A=M-S,w=Math.min(_,1-_)/s,E=Math.min(A,1-A)/(s*.66*(e/i)/2.5),T=Math.min(w,E),N=gn(T*1.6-.15),x=h(p,S),y=.3+.7*N;c[v]=gn(y+.045*(o[v]-.5)+.05*(a[v]-.5)*N),l[v]=(.55+.45*N)*(.91+.18*x),u[v]=.96-.16*N-.05*x}}return{normalMap:Yn(c,St,so(r*Ul*.55)),ormMap:Xe(St,l,u,null),normalScale:1,uvScale:[1,1]}}),De("asphalt",(n,t={})=>{const e=t.p0??112,i=t.amp??1,s=t.wet??.55,r=he(n,St,{p0:e,octaves:4}),o=he(n,St,{p0:9,octaves:3}),a=he(n,St,{p0:5,octaves:2}),c=new Float32Array(St*St),l=new Float32Array(St*St),u=new Float32Array(St*St);for(let h=0;h<St*St;h++){const d=r[h];c[h]=gn(.5+.42*(d-.5)+.16*(a[h]-.5)),l[h]=.74+.26*gn(.55+.9*(d-.5));const f=gn((.52-a[h])*3.4)*s;u[h]=gn(.94-.09*o[h]-.72*f)}return{normalMap:Yn(c,St,so(i*Ul*.3)),ormMap:Xe(St,l,u,null),normalScale:1,uvScale:[1,1]}}),De("policePanel",(n,t={})=>{const e=t.inset??.15,i=t.bead??.045,s=t.depth??1,r=t.plain===!0,o=he(n,St,{p0:96,octaves:3}),a=he(n,St,{p0x:6,p0y:200,octaves:2}),c=new Float32Array(St*St),l=new Float32Array(St*St),u=new Float32Array(St*St),h=e-i,d=e;for(let f=0;f<St;f++){const p=f/St;for(let _=0;_<St;_++){const g=f*St+_,m=_/St,v=Math.min(m,1-m,p,1-p),M=r?1:ih(gn((v-h)/(d-h))),S=.015*(o[g]-.5)+.008*(a[g]-.5);c[g]=gn(M+S),l[g]=.72+.28*M,u[g]=.34+.14*(1-M)+.05*o[g]}}return{normalMap:Yn(c,St,so(s*fw)),ormMap:Xe(St,l,u,null),normalScale:1,uvScale:[1,1]}}))}const Fl=new Map;function pw(n,t=null){if(Fl.has(n.id))return Fl.get(n.id);Vm();const e={},i=us(n.ground.recipe,t?t.child("tex."+n.ground.recipe+"."+n.id):null,{p0:n.ground.relief.p0,amp:n.ground.relief.amp,ripple:n.ground.relief.ripple});e.GROUND=new _c({color:n.ground.colour,roughness:1,metalness:0,specularIntensity:n.ground.specular??.15,normalMap:i.normalMap,normalScale:new Bt(i.normalScale,i.normalScale),aoMap:i.ormMap,roughnessMap:i.ormMap,aoMapIntensity:1,vertexColors:!0}),e.GROUND.userData.uvScale=[n.ground.uvScale,n.ground.uvScale],e.GROUND.userData.cast=!1,e.GROUND.userData.surface=n.ground.recipe;const s=n.rock.recipe??"siteRock",r=us(s,t?t.child("tex."+s+"."+n.id):null,n.rock.opts??{}),o=s==="siteRock"?r:us("siteRock",t?t.child("tex.siteRock."+n.id):null,{}),a=n.rock.tile??n.ground.uvScale*.8,c=n.ground.uvScale*.25,l=(u,h,d)=>{const f=new un({color:u,roughness:1,metalness:0,normalMap:d.normalMap,normalScale:new Bt(d.normalScale,d.normalScale),aoMap:d.ormMap,roughnessMap:d.ormMap,aoMapIntensity:1,vertexColors:!0});return f.userData.uvScale=[h,h],f.userData.cast=!0,f.userData.surface="siteRock",f};e.ROCK=l(n.rock.colour,a,r),e.GRIT=l(n.grit.colour,c,o);for(const[u,h]of Object.entries(n.extras??{})){const d=h.recipe??"siteRock",f=d===s?r:d==="siteRock"?o:us(d,t?t.child("tex."+d+"."+n.id):null,h.opts??{}),p=new un({color:h.colour,roughness:h.roughness??1,metalness:0,normalMap:f.normalMap,normalScale:new Bt(f.normalScale*(h.relief??1),f.normalScale*(h.relief??1)),aoMap:f.ormMap,aoMapIntensity:1,vertexColors:!0});h.roughness===void 0&&(p.roughnessMap=f.ormMap),p.userData.uvScale=[h.tile??.5,h.tile??.5],p.userData.cast=!0,p.userData.surface="siteRock",e[u]=p}e.SKY=new li({color:16777215,vertexColors:!0,side:Tn,depthWrite:!1,fog:!1}),e.SUNS=new Map;for(const u of n.suns)e.SUNS.has(u.colour)||e.SUNS.set(u.colour,new li({color:u.colour,fog:!1}));return e.HORIZON=new li({color:16777215,vertexColors:!0,fog:!1}),e.DECAL=new li({map:mw(),color:new zt(n.ground.colour).multiplyScalar(.42),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),e.DECAL.userData.decal=!0,Fl.set(n.id,e),e}let kl=null;function mw(){if(kl)return kl;const n=64,t=(n-1)/2,e=new Uint8Array(n*n*4);for(let s=0;s<n;s++)for(let r=0;r<n;r++){const o=(s*n+r)*4,a=Math.hypot(r-t,s-t)/t,c=1-ih(gn((a-.35)/.65));e[o]=255,e[o+1]=255,e[o+2]=255,e[o+3]=c*255+.5|0}const i=new Io(e,n,n,vn);return i.minFilter=ze,i.magFilter=ze,i.generateMipmaps=!1,i.needsUpdate=!0,kl=i,i}function rs(n,t,e,i,s,r,o,a,c=0,l=.035){const u=_t("siteRock",t,e,i,0,{material:n.ROCK,chamfer:l,cast:!0});return u.position.set(s,r,o),u.rotation.set(c,a,c*.6),u}const Gt=(n,t,e)=>2*(n*t+n*e+t*e),ki=180;function zl(n,t,e){const{M:i,distance:s,height:r,base:o,tint:a,haze:c}=t;let l=0;for(let E=0;E<ki;E++)l=Math.max(l,e(E/ki));const u=E=>e(E)/(l||1),h=new Float32Array(ki*6*3),d=new Float32Array(ki*6*3),f=new Float32Array(ki*6*3);let p=0;const _=new zt(c),g=new zt(a),m=new zt,v=(E,T,N,x)=>{h[p*3]=E,h[p*3+1]=T,h[p*3+2]=N;const y=Math.pow(gn(T/Math.max(x,1e-6)),.6);m.copy(_).lerp(g,y),d[p*3]=m.r,d[p*3+1]=m.g,d[p*3+2]=m.b;const R=1/Math.max(Math.hypot(E,N),1e-6);f[p*3]=-E*R,f[p*3+1]=0,f[p*3+2]=-N*R,p++},M=(E,T,N,x)=>{const y=T[0]-E[0],R=T[1]-E[1],C=T[2]-E[2],O=N[0]-E[0],k=N[1]-E[1],L=N[2]-E[2],D=R*L-C*k,F=y*k-R*O,X=(E[0]+T[0]+N[0])/3,K=(E[2]+T[2]+N[2])/3,it=D*X+F*K>0?N:T,dt=D*X+F*K>0?T:N;v(E[0],E[1],E[2],x),v(it[0],it[1],it[2],x),v(dt[0],dt[1],dt[2],x)};let S=0;const A=o+r;for(let E=0;E<ki;E++){const T=E/ki,N=(E+1)/ki,x=T*be,y=N*be,R=Math.sin(x)*s,C=Math.cos(x)*s,O=Math.sin(y)*s,k=Math.cos(y)*s,L=o+r*u(T),D=o+r*u(N),F=-14;M([R,F,C],[O,F,k],[O,D,k],A),M([R,F,C],[O,D,k],[R,L,C],A),S+=s*be/ki*((L+D)/2)}const w=new Sn;return w.setAttribute("position",new pe(h,3)),w.setAttribute("normal",new pe(f,3)),w.setAttribute("color",new pe(d,3)),n.add(new Pt(w,i.HORIZON)),{w:s*2,d:s*2,h:A,area:S}}function Hl(n,t,e){const i=t.map(()=>n()*be),s=e.reduce((r,o)=>r+o,0);return r=>{let o=0;for(let a=0;a<t.length;a++)o+=e[a]*Math.sin(t[a]*be*r+i[a]);return .5+.5*(o/s)}}const hu=Object.freeze({ridge(n,t){const e=Hl(t.rand,[1,2,3,5,8],[1,.62,.38,.22,.11]);return zl(n,t,i=>.24+.76*e(i))},spires(n,t){const e=Hl(t.rand,[2,3,5],[1,.5,.3]),i=t.rand()*be,s=t.rand()*be,r=t.rand()*be,o=a=>Math.max(Math.pow(.5+.5*Math.sin(13*be*a+i),14),Math.max(Math.pow(.5+.5*Math.sin(17*be*a+s),14),Math.pow(.5+.5*Math.sin(23*be*a+r),14)));return zl(n,t,a=>gn(.16+.34*e(a)+.62*o(a)))},dunes(n,t){const e=Hl(t.rand,[1,2,3],[1,.45,.2]);return zl(n,t,i=>.3+.7*Math.min(1,ih(e(i))*1.35))},outcrop(n,t){const{M:e,rand:i}=t,s=()=>i()-.5;return n.add(rs(e,1.3,.46,1.05,0,.21,0,0+.2*s(),.03)),n.add(rs(e,.96,1.04,.82,.06*s(),.7,.05*s(),.34+.3*s(),.04)),n.add(rs(e,.64,.72,.58,.1+.1*s(),1.32,-.08+.1*s(),-.48+.3*s(),.05)),n.add(rs(e,.4,.34,.36,.16,1.62,-.04,.9+.4*s(),.08)),n.add(rs(e,.52,.19,.44,.74,.08,-.38,1.2+.5*s(),.06)),{w:1.3,d:1.05,h:1.72,area:Gt(1.3,.46,1.05)+Gt(.96,1.04,.82)+Gt(.64,.72,.58)+Gt(.4,.34,.36)+Gt(.52,.19,.44)}},shard(n,t){const{M:e,rand:i}=t,s=2.6,r=new Pt(new ne(.07,.4,s,5,1),e.ROCK);r.position.set(0,s/2-.1,0),r.rotation.set(.17+.06*i(),i()*be,.06*(i()-.5)),r.castShadow=!0,n.add(r),n.add(rs(e,.86,.3,.78,.04,.13,.02,i()*be,.02)),n.add(rs(e,.4,.22,.34,-.58,.09,.26,i()*be,.05));const o=Math.hypot(s,.33);return{w:.9,d:.82,h:s,area:Math.PI*(.07+.4)*o+Gt(.86,.3,.78)+Gt(.4,.22,.34)}},marker(n,t){const{M:e,rand:i}=t,s=.34,r=1.86,o=new xe;o.position.set(0,-s,0),o.rotation.set(-.2,.04*(i()-.5),0),n.add(o);const a=_t("siteRock",.62,r,.22,0,{material:e.ROCK,chamfer:.03,cast:!0});a.position.y=r/2,o.add(a);let c=Gt(.62,r,.22);for(let l=0;l<6;l++){const u=.66-l*.02,h=.058-l*.004,d=_t("siteRock",u,h,.26,0,{material:e.ROCK,chamfer:.012,cast:!0});d.position.set(0,.3+l*.26,0),o.add(d),c+=Gt(u,h,.26)}return n.add(rs(e,.46,.2,.4,.34,.07,-.22,i()*be,.04)),c+=Gt(.46,.2,.4),{w:.8,d:.62,h:(r-s)*Math.cos(.2),area:c}},bin(n,t){const{M:e,rand:i}=t,s=.58,r=.72,o=1.06;let a=0;const c=new xe;c.rotation.x=-.055,c.position.y=.075,n.add(c);const l=_t("siteRock",s,o,r*.86,0,{material:e.PLASTIC,chamfer:.025,cast:!0});l.position.y=o/2,c.add(l),a+=Gt(s,o,r*.86);const u=_t("siteRock",s+.04,.075,r*.86+.05,0,{material:e.PLASTIC,chamfer:.02,cast:!0});u.position.set(0,o+.035,.01),u.rotation.x=-.07*i(),c.add(u),a+=Gt(s+.04,.075,r*.86+.05);const h=_t("siteRock",s*.82,.045,.045,0,{material:e.METAL,chamfer:.015,cast:!0});h.position.set(0,o-.06,-r*.43-.03),c.add(h),a+=Gt(s*.82,.045,.045);const d=_t("siteRock",s*.9,.05,.07,0,{material:e.METAL,chamfer:.012,cast:!0});d.position.set(0,o*.74,r*.43+.02),c.add(d),a+=Gt(s*.9,.05,.07);for(const f of[-1,1]){const p=_t("siteRock",.055,.16,.16,0,{material:e.METAL,chamfer:.05,cast:!0});p.position.set(f*(s/2-.04),.08,-r*.34),n.add(p),a+=Gt(.055,.16,.16)}return{w:s+.06,d:r,h:o+.11,area:a}},skip(n,t){const{M:e,rand:i}=t,s=2.6,r=1.52,o=1.02,a=.035;let c=0;const l=_t("siteRock",s,a*2,r,0,{material:e.METAL,chamfer:.01,cast:!0});l.position.y=.09,n.add(l),c+=Gt(s,a*2,r);for(const m of[-1,1]){const v=_t("siteRock",s+.1,.09,.1,0,{material:e.METAL,chamfer:.012,cast:!0});v.position.set(0,.045,m*(r/2-.16)),n.add(v),c+=Gt(s+.1,.09,.1)}const u=.3;for(const m of[-1,1]){const v=_t("siteRock",s,o,a,0,{material:e.METAL,chamfer:.008,cast:!0});v.position.set(0,.09+o/2*Math.cos(u),m*(r/2+o/2*Math.sin(u))),v.rotation.x=m*u,n.add(v),c+=Gt(s,o,a)}const h=.38;for(const m of[-1,1]){const v=_t("siteRock",a,o,r,0,{material:e.METAL,chamfer:.008,cast:!0});v.position.set(m*(s/2+o/2*Math.sin(h)),.09+o/2*Math.cos(h),0),v.rotation.z=-m*h,n.add(v),c+=Gt(a,o,r)}const d=.09+o*Math.cos(u),f=r/2+o*Math.sin(u),p=s/2+o*Math.sin(h);for(const m of[-1,1]){const v=_t("siteRock",p*2,.06,.075,0,{material:e.METAL,chamfer:.02,cast:!0});v.position.set(0,d,m*f),n.add(v),c+=Gt(p*2,.06,.075)}for(const m of[-1,1]){const v=_t("siteRock",.075,.06,f*2,0,{material:e.METAL,chamfer:.02,cast:!0});v.position.set(m*p,d,0),n.add(v),c+=Gt(.075,.06,f*2)}for(const m of[-1,1])for(const v of[-1,1]){const M=_t("siteRock",.1,.2,.05,0,{material:e.METAL,chamfer:.015,cast:!0});M.position.set(m*s*.3,d-.14,v*(f+.03)),n.add(M),c+=Gt(.1,.2,.05)}const _=.09+a,g=(m,v,M,S,A,w)=>{const E=_t("siteRock",v,M,S,0,{material:m,chamfer:A,cast:!0});E.position.set((i()-.5)*s*.8,_+M/2-.01,(i()-.5)*r*.64),E.rotation.set(w*(i()-.5),i()*be,w*(i()-.5)),n.add(E),c+=Gt(v,M,S)};for(let m=0;m<4;m++)g(e.ROCK,.1+i()*.12,.065,.102,.006,.3);for(let m=0;m<3;m++){const v=.4+i()*.16;g(e.PLASTIC,v,.3+i()*.1,v*.8,.11,.16)}for(let m=0;m<2;m++)g(e.ROCK,.8+i()*.35,.022,.14,.004,.1);return g(e.METAL,.9,.048,.048,.018,.08),{w:p*2,d:f*2,h:d+.1,area:c}},pipe(n,t){const{M:e}=t,i=6.2,s=.055;let r=0;const o=_t("siteRock",s*2,i,s*2,0,{material:e.METAL,chamfer:s*.8,cast:!0});o.position.set(0,i/2,s),n.add(o),r+=Gt(s*2,i,s*2);for(let l=.9;l<i;l+=1.55){const u=_t("siteRock",s*2.5,.07,s*2.5,0,{material:e.METAL,chamfer:.02,cast:!0});u.position.set(0,l,s),n.add(u),r+=Gt(s*2.5,.07,s*2.5)}const a=_t("siteRock",.24,.26,.17,0,{material:e.METAL,chamfer:.02,cast:!0});a.position.set(0,i-.05,.085),n.add(a),r+=Gt(.24,.26,.17);const c=_t("siteRock",s*2.2,.22,.2,0,{material:e.METAL,chamfer:.03,cast:!0});return c.position.set(0,.16,.14),c.rotation.x=.42,n.add(c),r+=Gt(s*2.2,.22,.2),{w:.26,d:.22,h:.4,cz:.11,area:r}},wallLamp(n,t){const{M:e}=t,i=3.05;let s=0;const r=_t("siteRock",.05,.05,.42,0,{material:e.METAL,chamfer:.012,cast:!0});r.position.set(0,i,.21),n.add(r),s+=Gt(.05,.05,.42);const o=_t("siteRock",.14,.2,.03,0,{material:e.METAL,chamfer:.01,cast:!0});o.position.set(0,i,.015),n.add(o),s+=Gt(.14,.2,.03);const a=_t("siteRock",.34,.07,.26,0,{material:e.METAL,chamfer:.02,cast:!0});a.position.set(0,i+.01,.42),n.add(a),s+=Gt(.34,.07,.26);const c=_t("siteRock",.26,.02,.19,0,{material:e.HORIZON,chamfer:.008,cast:!1});return c.position.set(0,i-.035,.42),n.add(c),s+=Gt(.26,.02,.19),{w:.36,d:.56,h:.42,y0:2.8,cz:.28,area:s}},crate(n,t){const{M:e,rand:i}=t;let s=0,r=0;for(let a=0;a<3;a++){const c=_t("siteRock",1.2,.14,.8,0,{material:e.ROCK,chamfer:.01,cast:!0});c.position.set(.04*(i()-.5),r+.07,.05*(i()-.5)),c.rotation.y=.06*(i()-.5),n.add(c),s+=Gt(1.2,.14,.8),r+=.14}const o=_t("siteRock",.62,.5,.54,0,{material:e.ROCK,chamfer:.015,cast:!0});return o.position.set(.12,r+.25,-.04),o.rotation.y=.22,n.add(o),s+=Gt(.62,.5,.54),{w:1.26,d:.86,h:r+.5,area:s}},wallPhone(n,t){const{M:e}=t;let i=0;const s=1.42,r=.4,o=.62,a=_t("siteRock",r,o,.03,0,{material:e.METAL,chamfer:.006,cast:!1});a.position.set(0,s,.015),n.add(a),i+=Gt(r,o,.03);for(const v of[-1,1]){const M=_t("siteRock",.035,o,.26,0,{material:e.METAL,chamfer:.008,cast:!0});M.position.set(v*(r/2-.018),s,.145),n.add(M),i+=Gt(.035,o,.26)}const c=_t("siteRock",r+.03,.04,.29,0,{material:e.METAL,chamfer:.01,cast:!0});c.position.set(0,s+o/2+.02,.16),n.add(c),i+=Gt(r+.03,.04,.29);const l=_t("siteRock",.25,.33,.12,0,{material:e.METAL,chamfer:.014,cast:!0});l.position.set(.05,s+.04,.09),n.add(l),i+=Gt(.25,.33,.12);const u=_t("siteRock",.13,.13,.016,0,{material:e.PLASTIC,chamfer:.02,cast:!1});u.position.set(.05,s+.01,.158),n.add(u),i+=Gt(.13,.13,.016);const h=_t("siteRock",.07,.05,.08,0,{material:e.METAL,chamfer:.012,cast:!0});h.position.set(-.13,s+.15,.075),n.add(h),i+=Gt(.07,.05,.08);for(let v=0;v<4;v++){const M=_t("siteRock",.022,.075,.022,0,{material:e.PLASTIC,chamfer:.008,cast:!1});M.position.set(-.13-v*.006,s+.1-v*.078,.07+v*.012),n.add(M),i+=Gt(.022,.075,.022)}const d=-.148,f=s-.23,p=.118,_=.14,g=new xe;g.position.set(d,f,p),g.rotation.z=_;const m=_t("siteRock",.042,.15,.046,0,{material:e.PLASTIC,chamfer:.014,cast:!0});g.add(m),i+=Gt(.042,.15,.046);for(const v of[-1,1]){const M=_t("siteRock",.072,.062,.072,0,{material:e.PLASTIC,chamfer:.022,cast:!0});M.position.set(0,v*.09,.004),g.add(M),i+=Gt(.072,.062,.072)}return n.add(g),{w:r+.03,d:.305,h:.76,y0:1,cz:.153,area:i}},fireDoor(n,t){const{M:e}=t;let i=0;const s=.92,r=2.05,o=_t("siteRock",s+.1,r+.1,.02,0,{material:e.METAL,chamfer:0,cast:!1});o.position.set(0,(r+.1)/2,.02),n.add(o),i+=Gt(s+.1,r+.1,.02);const a=_t("siteRock",s,r,.055,0,{material:e.METAL,chamfer:.008,cast:!0});a.position.set(0,r/2,.055),n.add(a),i+=Gt(s,r,.055);const c=_t("siteRock",s*.76,.06,.06,0,{material:e.METAL,chamfer:.02,cast:!0});c.position.set(0,1.02,.11),n.add(c),i+=Gt(s*.76,.06,.06);const l=_t("siteRock",s+.22,.09,.3,0,{material:e.ROCK,chamfer:.015,cast:!0});return l.position.set(0,.045,.17),n.add(l),i+=Gt(s+.22,.09,.3),{w:s+.22,d:.34,h:.14,cz:.17,area:i}}}),du=Object.freeze({polygon:{validate(n,t){if(!(n.sides>=5))throw new Error(`SITE_SHAPE '${t}': bounds.sides must be >= 5`);if(!(n.apothem>0))throw new Error(`SITE_SHAPE '${t}': bounds.apothem must be > 0`)},metrics(n){const t=n.sides,e=n.apothem;return{area:t*e*e*Math.tan(Math.PI/t),longest:2*e/Math.cos(Math.PI/t),reach:e/Math.cos(Math.PI/t),max:1.25*2*e/Math.cos(Math.PI/t)}},sample(n,t){const e=Math.sqrt(n())*t.apothem*.97,i=n()*be;return{x:Math.sin(i)*e,z:Math.cos(i)*e}},rim(n,t){const{SITE:e,M:i,boxArea:s}=t,r=e.bounds.sides,o=e.bounds.apothem,a=2*o*Math.tan(Math.PI/r),c=[],l=.58,u=.34,h=Math.min(.55,e.bounds.rimH*.48),d=e.bounds.rimH-h,f=2*l*Math.tan(Math.PI/r)+.06;let p=0;for(let _=0;_<r;_++){const g=_*be/r,m=Math.sin(g),v=Math.cos(g),M=_t("siteRock",a+f,h,l,0,{material:i.ROCK,chamfer:.05,cast:!0});M.position.set(m*(o+l/2),h/2,v*(o+l/2)),M.rotation.y=g,n.add(M);const S=_t("siteRock",a+f*.6,d,u,0,{material:i.ROCK,chamfer:.07,cast:!0});S.position.set(m*(o+l+u/2-.08),h+d/2,v*(o+l+u/2-.08)),S.rotation.y=g,n.add(S),p+=s(a+f,h,l)+s(a+f*.6,d,u),c.push({nx:m,nz:v,d:o})}return{planes:c,area:p}}},corridor:{validate(n,t){if(!(n.width>0))throw new Error(`SITE_SHAPE '${t}': bounds.width must be > 0`);if(!(n.length>0))throw new Error(`SITE_SHAPE '${t}': bounds.length must be > 0`);if(!(n.wallH>0))throw new Error(`SITE_SHAPE '${t}': bounds.wallH must be > 0`);if(n.width>n.length)throw new Error(`SITE_SHAPE '${t}': bounds.width ${n.width} exceeds length ${n.length} — a corridor is long and thin, and the two are almost certainly the wrong way round`)},metrics(n){const t=n.width,e=n.length;return{area:t*e,longest:Math.sqrt(t*t+e*e),reach:Math.sqrt(t*t+e*e)/2,max:1.25*Math.sqrt(n.width*n.width+n.length*n.length)}},sample(n,t){return{x:(n()-.5)*t.width*.97,z:(n()-.5)*t.length*.97}},rim(n,t){const{SITE:e,M:i,boxArea:s}=t,r=e.bounds,o=r.width/2,a=r.length/2,c=r.wallH,l=r.wallT??.45,u=[];let h=0;const d=(m,v,M,S,A,w,E)=>{const T=_t("siteRock",m,v,M,0,{material:i.ROCK,chamfer:.02,cast:!0});T.position.set(S,A,w),T.rotation.y=E,n.add(T),h+=s(m,v,M)};for(const m of[-1,1])d(l,c,r.length+2*l,m*(o+l/2),c/2,0,0),u.push({nx:m,nz:0,d:o});for(const m of[-1,1])d(r.width,c,l,0,c/2,m*(a+l/2),0),u.push({nx:0,nz:m,d:a});const f=.06,p=.09;for(const m of[-1,1])d(l+2*f,p,r.length+2*l,m*(o+l/2),c+p/2,0,0);const _=.11,g=.16;for(const m of[-1,1])d(g,_,r.length,m*(o-g/2),_/2,0,0);return{planes:u,area:h}}}}),Hf=2.2,Bf=.02;function gw(n,t,e={}){if(!Object.isFrozen(t))throw new Error("buildSite: pass a record that has been through SITE_SHAPE()");if(e.camera&&e.camera.far<t.sky.radius*1.02)throw new Error(`buildSite '${t.id}': camera.far is ${e.camera.far} but the sky dome is at ${t.sky.radius} m and the horizon at ${t.horizon.distance} m. Set the exterior camera.far to SITE.camera.far (${t.camera.far}) — see SITE_SHAPE's derivation.`);const i=(e.keepOut||[]).map((D,F)=>{if(!Number.isFinite(D.x)||!Number.isFinite(D.z)||!Number.isFinite(D.r)||D.r<=0)throw new Error(`buildSite '${t.id}': keepOut[${F}] is { x: ${D.x}, z: ${D.z}, r: ${D.r} } — every field must be a finite number and r must be positive. A NaN radius disables the keep-out silently, because NaN fails every comparison.`);return{x:D.x,z:D.z,r:D.r}}),s=t.grit.scale[1]*.7,r=Math.hypot(4.2/2,2.1/2),o=(D,F,X,K)=>{for(const it of X)if(Math.hypot(D-it.x,F-it.z)<it.r+K)return!1;return!0};let a=0;const c=pw(t,e.rng??null),l=iw("site."+t.id),u=new xe;u.name="siteLive";const h=Object.create(null),d=Object.create(null),f=(D,F,X)=>(h[D]=(h[D]??0)+X,d[F]=(d[F]??0)+X,vc(F,d[F]),F),p=du[t.bounds.kind],g=p.metrics(t.bounds).reach;{const D=t.sky.radius,F=new Ou(D,12),X=F.getAttribute("position"),K=new Float32Array(X.count*3),it=new zt(t.sky.zenith),dt=new zt(t.sky.horizon),Q=new zt;for(let U=0;U<X.count;U++){const Y=Math.pow(gn(X.getY(U)/D),t.sky.gradPower);Q.copy(dt).lerp(it,Y),K[U*3]=Q.r,K[U*3+1]=Q.g,K[U*3+2]=Q.b}F.setAttribute("color",new pe(K,3)),n.add(new Pt(F,c.SKY));const z=be*D*D;f("SKY_ZENITH",t.sky.zenith,z),f("SKY_HORIZON",t.sky.horizon,z)}for(const D of t.suns){const F=t.sky.radius*Math.tan(D.angularDeg*.5*ac),X=new gs(F,28),K=new Pt(X,c.SUNS.get(D.colour));K.position.copy(Pl(D.azimuthDeg,D.elevationDeg)).multiplyScalar(t.sky.radius-.5),K.lookAt(0,0,0),n.add(K),f("SUN",D.colour,Math.PI*F*F)}{const D=t.horizon.distance*Math.tan(t.horizon.heightDeg*ac),F=hu[t.horizon.silhouette](n.group,{M:c,rand:l,distance:t.horizon.distance,height:D,base:0,tint:t.horizon.colour,haze:t.fog.colour});f("HORIZON",t.horizon.colour,F.area)}const m=t.ground.discR,v=Math.max(1.8,t.bounds.rimH*1.8),M=Math.max(m+20,t.fog.far*1.25);{const D=new Pt(new gs(m,96),c.GROUND);D.rotation.x=-Math.PI/2,D.receiveShadow=!0,n.add(D);const F=new Pt(new ne(m,m,v,96,1,!0),c.GROUND);F.position.y=-v/2,n.add(F);const X=new Pt(new gc(m,M,96,1),c.GROUND);X.rotation.x=-Math.PI/2,X.position.y=-v,n.add(X),f("GROUND",t.ground.colour,Math.PI*m*m),f("GROUND",t.ground.colour,be*m*v),f("GROUND",t.ground.colour,Math.PI*(M*M-m*m))}const S=1;n.solid(0,-.3,0,2*(g+S),.3,2*(g+S),!0);const{planes:A,area:w}=p.rim(n,{SITE:t,M:c,boxArea:Gt});f("ROCK",t.rock.colour,w);const E=[],T=e.propCollision!==!1,N=Pl(t.sun.azimuthDeg,t.sun.elevationDeg),x=new Bt(-N.x,-N.z).normalize().multiplyScalar(.28);let y=0;for(const D of t.props){const F=new xe;F.position.set(D.x,0,D.z),F.rotation.y=D.yaw,F.scale.setScalar(D.scale),n.add(F);const X=hu[D.kind](F,{M:c,rand:l,scale:D.scale});y+=X.area*D.scale*D.scale;const K=X.w*D.scale,it=X.d*D.scale,dt=X.h*D.scale;if(T){const Q=(X.y0??0)*D.scale,z=(X.cz??0)*D.scale;E.push({x:D.x+Math.sin(D.yaw)*z,z:D.z+Math.cos(D.yaw)*z,hw:K/2,hd:it/2,rotY:D.yaw,y0:Q,y1:Q+dt})}_w(n,c,D.x+x.x,D.z+x.y,K,it),D.kind==="marker"&&n.spot("marker",D.x+Math.sin(D.yaw)*1.3,0,D.z+Math.cos(D.yaw)*1.3)}f("ROCK",t.rock.colour,y);{const[D,F]=t.grit.scale;let X=0,K=0;for(let Q=0;Q<t.grit.count;Q++){let z,U,Y;for(let vt=0;;vt++){const H=p.sample(l,t.bounds);if(z=1,U=H.x,Y=H.z,o(U,Y,i,s))break;if(vt>=24){K+=1,z=NaN;break}}if(Number.isNaN(z))continue;const J=Rs(D,F,l()),ut=J*Rs(.8,1.4,l()),lt=J*Rs(.8,1.4,l()),ht=J*Rs(.4,.9,l()),gt=_t("siteRock",ut,ht,lt,0,{material:c.GRIT,chamfer:.012,cast:!1});gt.position.set(U,ht*.05,Y),gt.rotation.set(.1*(l()-.5),l()*be,.1*(l()-.5)),n.add(gt),X+=Gt(ut,ht,lt)}f("GRIT",t.grit.colour,X),a=K;let it=0;const dt=t.ground.drifts??3;for(let Q=0;Q<dt;Q++){let z,U,Y;for(let gt=0;;gt++){const vt=p.sample(l,t.bounds);if(z=1,U=vt.x*.82+Math.sign(vt.x)*1.1,Y=vt.z*.82,o(U,Y,i,r))break;if(gt>=24){z=NaN;break}}if(Number.isNaN(z))continue;const J=Rs(2.4,4.2,l()),ut=Rs(1.2,2.1,l()),lt=Rs(.09,.14,l()),ht=_t("ashField",J,lt,ut,0,{material:c.GROUND,chamfer:.055,cast:!1});ht.position.set(U,lt/2-.02,Y),ht.rotation.y=l()*be,n.add(ht),it+=J*ut+2*(J+ut)*lt}f("GROUND",t.ground.colour,it)}const R={};{const D=hw(t),F=new Y0(t.sun.colour,t.sun.intensity*D);F.position.copy(N).multiplyScalar(120),R.key=F;const X=new Y0(t.bounce.colour,t.bounce.intensity*D);X.position.copy(Pl(t.bounce.azimuthDeg,23.962)).multiplyScalar(98.4),R.bounce=X,R.hemi=new Yp(t.hemi.sky,t.hemi.ground,t.hemi.intensity*D),R.ambient=new Nu(t.ambient.colour,t.ambient.intensity*D);const K=new yo(16774121,Hf*Bf,9,2);K.position.set(0,1.1,0),R.doorSpill=K,R.lamps=(t.lamps??[]).map(it=>{const dt=new yo(it.colour,it.intensity,it.distance??14,2);return dt.position.set(it.x,it.y,it.z),dt.castShadow=!1,dt});for(const it of[R.key,R.bounce,R.hemi,R.ambient,R.doorSpill,...R.lamps])n.group.add(it),n.lights.push(it)}n.userData??(n.userData={}),n.userData.collision={planes:A,hulls:[],boxes:E},n.spot("centre",0,0,0);let C=l()*be,O=0;const k=D=>{C+=D*t.ambience.gustRate*be;const F=Math.sin(C),X=Math.sin(C*.3716+1.7);O=gn(.5+.36*F+.2*X)};k(0);const L=t.beds.map(([D])=>D);return{group:n.group,live:u,areas:h,update:k,SITE:t,keepOut:i,gritRejected:a,fog:new Iu(t.fog.colour,t.fog.near,t.fog.far),distance:t.distance,surface:t.ground.surface,beds:t.beds,bedIds:L,collision:n.userData.collision,lights:R,doorSpill:R.doorSpill,sunDir:N,setDoorSpill(D){R.doorSpill.intensity=Hf*Math.max(Bf,gn(D))},contact(D,F){return Xm(c,D,F)},placeContact(D,F,X){D.position.set(F+x.x,.006,X+x.y)},get gust(){return O},get windLevel(){return t.ambience.windGain*(.62+.38*O)},buckets:7}}function _w(n,t,e,i,s,r){const o=Xm(t,s,r),a=qm(s,r);return o.position.set(e,.006,i),n.add(o),n.decals.push({x0:e-s/2-a,x1:e+s/2+a,z0:i-r/2-a,z1:i+r/2+a}),o}function qm(n,t){return Math.min(Math.max(Math.min(n,t)*.3,.05),.3)}function Xm(n,t,e){const i=qm(t,e),s=new Pt(new mi(t+2*i,e+2*i),n.DECAL);return s.rotation.x=-Math.PI/2,s.name="boxContact",s.renderOrder=2,s}const xw=sh({id:"ashfall",name:"the Ashfall",sky:{zenith:3095895,horizon:11567189,gradPower:2.2,radius:180},suns:[{colour:16771528,angularDeg:.5,azimuthDeg:214,elevationDeg:13}],sun:{colour:16771528,intensity:1.65,azimuthDeg:214,elevationDeg:13,gain:9.667},bounce:{colour:10463428,intensity:.263,azimuthDeg:34},hemi:{sky:11567189,ground:4866104,intensity:.675},ambient:{colour:14734528,intensity:.263},fog:{colour:11567189,near:11,far:84},ground:{colour:4866104,recipe:"ashField",surface:"grit",uvScale:1.1,discR:14,relief:{p0:48,amp:.28,ripple:2.2}},grit:{colour:4143674,count:160,scale:[.08,.3]},rock:{colour:6179644},horizon:{silhouette:"ridge",colour:4143674,heightDeg:3.4,distance:150},bounds:{kind:"polygon",sides:12,apothem:12,rimH:1.15},extras:{},lamps:[],beds:[["ext_wind",{rate:1}],["ext_grit",{rate:1}]],ambience:{windGain:.34,gustRate:.14},props:[{kind:"outcrop",x:2.9,z:1.6,yaw:.9,scale:1},{kind:"outcrop",x:-5.1,z:-3.4,yaw:2.6,scale:1.45},{kind:"marker",x:4.8,z:-5.9,yaw:4.1,scale:1},{kind:"shard",x:-1.2,z:6.3,yaw:.3,scale:1.2}]}),vw=sh({id:"verge",name:"the Verge",sky:{zenith:3820126,horizon:11057348,gradPower:1.6,radius:180},suns:[{colour:15398655,angularDeg:.4,azimuthDeg:96,elevationDeg:41}],sun:{colour:15398655,intensity:2.18,azimuthDeg:96,elevationDeg:41,gain:.56},bounce:{colour:10465469,intensity:.31,azimuthDeg:276},hemi:{sky:11057348,ground:7174788,intensity:.94},ambient:{colour:15134975,intensity:.34},fog:{colour:11057348,near:9,far:64},ground:{colour:9345699,recipe:"ashField",surface:"grit",uvScale:1.6,discR:14,relief:{p0:62,amp:.14,ripple:4}},grit:{colour:5596014,count:210,scale:[.06,.22]},rock:{colour:7174788},horizon:{silhouette:"spires",colour:5596014,heightDeg:5.1,distance:150},bounds:{kind:"polygon",sides:12,apothem:12,rimH:.9},extras:{},lamps:[],beds:[["ext_wind",{rate:1.34}],["ext_grit",{rate:.78}]],ambience:{windGain:.22,gustRate:.09},props:[{kind:"shard",x:3.6,z:-1.1,yaw:.6,scale:1.3},{kind:"shard",x:-4.8,z:2.4,yaw:2.1,scale:.85},{kind:"outcrop",x:1.9,z:4.1,yaw:1.05,scale:1},{kind:"marker",x:-2.2,z:-5.6,yaw:3.9,scale:1.45}]}),Mw=sh({id:"alley",name:"the alley",sky:{zenith:724760,horizon:3810838,gradPower:1.4,radius:180},suns:[{colour:13161184,angularDeg:.54,azimuthDeg:38,elevationDeg:58}],sun:{colour:12570856,intensity:.32,azimuthDeg:38,elevationDeg:58,gain:1},bounce:{colour:11565120,intensity:.18,azimuthDeg:218},hemi:{sky:2761752,ground:1316378,intensity:.43},ambient:{colour:7040890,intensity:.175},fog:{colour:1316124,near:4,far:46},ground:{colour:3026996,recipe:"asphalt",surface:"grit",uvScale:2.4,discR:16,relief:{p0:112,amp:1,ripple:0},drifts:0},grit:{colour:3816254,count:120,scale:[.05,.16]},rock:{colour:6176824,recipe:"brick",tile:.6,opts:{rows:8,cols:4,joint:.075}},horizon:{silhouette:"ridge",colour:921622,heightDeg:.1,distance:150},bounds:{kind:"corridor",width:4,length:24,wallH:7.5,wallT:.45},beds:[["ext_wind",{rate:.55}]],ambience:{windGain:.16,gustRate:.07},extras:{METAL:{colour:4212043,roughness:.54,relief:.35,tile:.55},PLASTIC:{colour:2305062,roughness:.78,relief:.25,tile:.4}},lamps:[{x:-1.58,y:3.02,z:-2,colour:16757847,intensity:26,distance:22},{x:1.58,y:3.02,z:6.4,colour:14674175,intensity:15,distance:17}],props:[{kind:"wallLamp",x:-2,z:-2,yaw:Math.PI/2,scale:1},{kind:"wallLamp",x:2,z:6.4,yaw:-Math.PI/2,scale:.85},{kind:"pipe",x:-2,z:4.6,yaw:Math.PI/2,scale:1},{kind:"pipe",x:2,z:-6.2,yaw:-Math.PI/2,scale:1},{kind:"skip",x:.74,z:-4.5,yaw:Math.PI/2+.03,scale:1},{kind:"bin",x:1.5,z:5.1,yaw:-1.63,scale:1},{kind:"bin",x:1.48,z:5.82,yaw:-1.52,scale:1},{kind:"bin",x:1.26,z:-8.4,yaw:-1.2,scale:1},{kind:"fireDoor",x:2,z:1.9,yaw:-Math.PI/2,scale:1},{kind:"wallPhone",x:2,z:.3,yaw:-Math.PI/2,scale:1},{kind:"crate",x:1.2,z:10.6,yaw:.28,scale:1},{kind:"crate",x:-1.32,z:-10.2,yaw:-.16,scale:.9}]}),Kn=Object.freeze({ashfall:xw,verge:vw,alley:Mw}),yw=n=>n<0?0:n>1?1:n,ri=Object.freeze({S:512,TILE:.45,SKIN:15e-5,ROUGH:.44,ROUGH_PEEL:.06,ROUGH_BRUSH:.05,SPECULAR:.02,NORMAL_SCALE:1}),Sw=1,Ew=.6,ww=2.4,bw=400,Aw=6,Tw=512,Rw=3;let Gf=!1;function Lw(){Gf||(Gf=!0,De("policePaint",n=>{const t=ri.S,e=t*t,i=he(n,t,{p0:96,octaves:3}),s=he(n,t,{p0x:bw,p0y:Aw,octaves:2}),r=he(n,t,{p0x:Tw,p0y:Rw,octaves:2}),o=new Float32Array(e),a=new Float32Array(e);for(let c=0;c<e;c++)o[c]=Sw*(i[c]-.5)+Ew*(s[c]-.5)+ww*(r[c]-.5),a[c]=yw(ri.ROUGH+ri.ROUGH_PEEL*(i[c]-.5)*2-ri.ROUGH_BRUSH*(s[c]-.5)*2);return{normalMap:Yn(o,t,ri.SKIN*(ri.S/ri.TILE)),ormMap:Xe(t,null,a,null),uvScale:[ri.TILE,ri.TILE],normalScale:ri.NORMAL_SCALE,tinted:!0}}))}function Cw(n=null){return Lw(),us("policePaint",n)}function rh(n,t){if(!n.defines||!("PHYSICAL"in n.defines)||!("STANDARD"in n.defines))throw new Error(`boxpaint: ${t} lost its PHYSICAL define, so specularIntensity is dead - something copied a Standard material over it (docs/BOX.md 4.1)`);return n}function Bl(n,t,e={}){const i=new _c({color:n,roughness:1,metalness:0,specularIntensity:e.specularIntensity??ri.SPECULAR,normalMap:t.normalMap,normalScale:new Bt(t.normalScale,t.normalScale),aoMap:t.ormMap,roughnessMap:t.ormMap,aoMapIntensity:1,vertexColors:!0});return i.userData.uvScale=t.uvScale,i.userData.cast=!0,i.userData.surface="policePaint",rh(i,"paintMaterial")}const Ls=Object.freeze({S:256,ETCH_P0:32,DRAW_FINE_X:200,DRAW_LONG_Y:4,A_ETCH:.085,A_DRAW:.045,SEED:"tex.frostedGlass"}),Iw=n=>n<=.0031308?n*12.92:1.055*Math.pow(n,1/2.4)-.055;let ya=null;function Dw(){if(ya)return ya;const n=Ls.S,t=n*n,e=new Oo(Ls.SEED),i=he(e,n,{p0:Ls.ETCH_P0,octaves:3}),s=he(e,n,{p0x:Ls.DRAW_FINE_X,p0y:Ls.DRAW_LONG_Y,octaves:2}),r=new Uint8Array(t*4);let o=0,a=2,c=-1;for(let u=0;u<t;u++){const h=1-Ls.A_ETCH*(1-i[u])-Ls.A_DRAW*(1-s[u]),d=Math.round(Iw(h)*255);r[u*4]=d,r[u*4+1]=d,r[u*4+2]=d,r[u*4+3]=255,o+=h,h<a&&(a=h),h>c&&(c=h)}const l=new Io(r,n,n,vn);return l.colorSpace=an,l.wrapS=l.wrapT=ks,l.magFilter=ze,l.minFilter=ci,l.generateMipmaps=!0,l.anisotropy=8,l.needsUpdate=!0,ya={map:l,data:r,width:n,height:n,mulMin:a,mulMax:c,mulMean:o/t},ya}const os=Object.freeze({TILE:.22,NORMAL_SCALE:.35,ROUGHNESS:.9,SPECULAR:.1,GLOW:16773850,GLOW_I:.09});function Pw(n,t,e={}){const i=Dw(),s=new _c({color:n,map:i.map,emissiveMap:i.map,roughness:e.roughness??os.ROUGHNESS,metalness:0,specularIntensity:e.specularIntensity??os.SPECULAR,emissive:e.emissive??os.GLOW,emissiveIntensity:e.emissiveIntensity??os.GLOW_I,normalMap:t.normalMap,normalScale:new Bt(os.NORMAL_SCALE,os.NORMAL_SCALE),vertexColors:!0});return s.userData.uvScale=[os.TILE,os.TILE],s.userData.cast=!1,s.userData.surface="policePaint",rh(s,"glazingMaterial")}function Ow(n,t={}){const e=zw(),i=new un({color:n,roughness:t.roughness??.62,metalness:0,map:e.map,emissive:t.emissive??16772301,emissiveMap:e.map,emissiveIntensity:t.emissiveIntensity??.55,vertexColors:!0});return i.userData.cast=!0,i}function Nw(n,t={}){const e=new _c({color:n,roughness:t.roughness??.45,metalness:0,specularIntensity:t.specularIntensity??.2,emissive:t.emissive??16773850,emissiveIntensity:t.emissiveIntensity??.95,vertexColors:!0});return e.userData.cast=!1,rh(e,"lensMaterial")}const ee=Object.freeze({W:1024,H:128,BOARD_W:1.15,BOARD_H:.13,FIELD:Object.freeze([228,224,210]),INK:Object.freeze([26,29,36]),L1_TEXT:"POLICE",L1_CAP:60,L1_TOP:34,L1_X0:62,L1_X1:402,L1_WEIGHT:.13,L3_TEXT:"BOX",L3_CAP:60,L3_TOP:34,L3_X0:660,L3_X1:960,L3_WEIGHT:.13,L2_TEXT:"PUBLIC",L2_CAP:24,L2_TOP:28,L2_X0:452,L2_X1:622,L2_WEIGHT:.165,L4_TEXT:"CALL",L4_CAP:24,L4_TOP:68,L4_X0:452,L4_X1:622,L4_WEIGHT:.165}),Uw=ee.W/ee.BOARD_W/(ee.H/ee.BOARD_H),Fw={A:[[[0,10],[3,0],[6,10]],[[1.4,5.4],[4.6,5.4]]],B:[[[0,0],[0,10]],[[0,0],[3.4,0],[4.7,.5],[5.4,1.6],[5.4,3.4],[4.7,4.5],[3.4,5],[0,5]],[[0,5],[3.8,5],[5.2,5.6],[6,6.8],[6,8.2],[5.2,9.4],[3.8,10],[0,10]]],C:[[[5.12,1.75],[4.15,.75],[3,.4],[1.85,.75],[.88,1.75],[.23,3.24],[0,5],[.23,6.76],[.88,8.25],[1.85,9.25],[3,9.6],[4.15,9.25],[5.12,8.25]]],D:[[[0,0],[0,10]],[[0,0],[3,0],[4.6,.55],[5.6,1.9],[6,3.6],[6,6.4],[5.6,8.1],[4.6,9.45],[3,10],[0,10]]],E:[[[0,0],[0,10]],[[0,0],[5.8,0]],[[0,5],[4.6,5]],[[0,10],[5.8,10]]],F:[[[0,0],[0,10]],[[0,0],[5.8,0]],[[0,5],[4.6,5]]],G:[[[5.12,1.75],[4.15,.75],[3,.4],[1.85,.75],[.88,1.75],[.23,3.24],[0,5],[.23,6.76],[.88,8.25],[1.85,9.25],[3,9.6],[4.5,9.1],[5.6,7.9],[6,6.2]],[[3.3,5.7],[6,5.7]]],H:[[[0,0],[0,10]],[[6,0],[6,10]],[[0,5],[6,5]]],I:[[[2,0],[2,10]]],J:[[[5,0],[5,7.3],[4.6,8.7],[3.6,9.45],[2.3,9.6],[1.1,9.3],[.25,8.5],[0,7.6]]],K:[[[0,0],[0,10]],[[5.8,0],[.4,5.4]],[[2.3,3.6],[6,10]]],L:[[[0,0],[0,10]],[[0,10],[5.6,10]]],M:[[[0,10],[0,0],[3,6],[6,0],[6,10]]],N:[[[0,10],[0,0],[6,10],[6,0]]],O:[[[3,.4],[4.15,.75],[5.12,1.75],[5.77,3.24],[6,5],[5.77,6.76],[5.12,8.25],[4.15,9.25],[3,9.6],[1.85,9.25],[.88,8.25],[.23,6.76],[0,5],[.23,3.24],[.88,1.75],[1.85,.75],[3,.4]]],P:[[[0,10],[0,0]],[[0,0],[3.7,0],[5.1,.6],[6,1.9],[6,3.7],[5.1,5],[3.7,5.6],[0,5.6]]],Q:[[[3,.4],[4.15,.75],[5.12,1.75],[5.77,3.24],[6,5],[5.77,6.76],[5.12,8.25],[4.15,9.25],[3,9.6],[1.85,9.25],[.88,8.25],[.23,6.76],[0,5],[.23,3.24],[.88,1.75],[1.85,.75],[3,.4]],[[3.7,7.4],[6,10]]],R:[[[0,10],[0,0]],[[0,0],[3.7,0],[5.1,.6],[6,1.9],[6,3.7],[5.1,5],[3.7,5.6],[0,5.6]],[[2.6,5.6],[6,10]]],S:[[[5.9,2.1],[5.2,.95],[3.9,.35],[2.3,.4],[1,1],[.25,2.1],[.35,3.3],[1.1,4.15],[2.4,4.7],[3.9,5.3],[5.1,5.9],[5.85,6.9],[5.9,8.1],[5.1,9.2],[3.7,9.65],[2.1,9.6],[.8,9.1],[.1,8]]],T:[[[0,0],[6,0]],[[3,0],[3,10]]],U:[[[0,0],[0,6.8],[.4,8.2],[1.5,9.23],[3,9.6],[4.5,9.23],[5.6,8.2],[6,6.8],[6,0]]],V:[[[0,0],[3,10],[6,0]]],W:[[[0,0],[1.5,10],[3,3.4],[4.5,10],[6,0]]],X:[[[0,0],[6,10]],[[6,0],[0,10]]],Y:[[[0,0],[3,5.2],[6,0]],[[3,5.2],[3,10]]],Z:[[[0,0],[6,0]],[[6,0],[0,10]],[[0,10],[6,10]]],"&":[[[6,8.6],[4.4,6.4],[3,4.6],[2,3.2],[1.7,1.9],[2.5,.6],[3.7,.5],[4.5,1.4],[4.3,2.7],[3.2,4],[1.9,5.3],[.8,6.7],[.5,8.2],[1.2,9.3],[2.6,9.7],[4.1,9.2],[5.2,8],[6,6.6]]]," ":[]},kw={I:4," ":3.4},Sa=n=>kw[n]??6,Wf=2.2;let Ea=null;function zw(){if(Ea)return Ea;const n=ee.W,t=ee.H,e=new Float32Array(n*t),i=v=>t-1-v,s=co(e,n,t,ee.L1_TEXT,ee.L1_CAP,ee.L1_TOP,ee.L1_X0,ee.L1_X1,ee.L1_WEIGHT),r=co(e,n,t,ee.L2_TEXT,ee.L2_CAP,ee.L2_TOP,ee.L2_X0,ee.L2_X1,ee.L2_WEIGHT),o=co(e,n,t,ee.L3_TEXT,ee.L3_CAP,ee.L3_TOP,ee.L3_X0,ee.L3_X1,ee.L3_WEIGHT),a=co(e,n,t,ee.L4_TEXT,ee.L4_CAP,ee.L4_TOP,ee.L4_X0,ee.L4_X1,ee.L4_WEIGHT),c=new Uint8Array(n*t*4),[l,u,h]=ee.FIELD,[d,f,p]=ee.INK;let _=0,g=0;for(let v=0;v<t;v++){const M=v*n,S=i(v)*n,A=1-(v+.5)/t;for(let w=0;w<n;w++){const E=e[M+w],T=(S+w)*4;c[T]=l+(d-l)*E+.5,c[T+1]=u+(f-u)*E+.5,c[T+2]=h+(p-h)*E+.5,c[T+3]=255,_+=E,g+=E*A}}const m=new Io(c,n,t,vn);return m.colorSpace=an,m.wrapS=m.wrapT=ks,m.magFilter=ze,m.minFilter=ci,m.generateMipmaps=!0,m.anisotropy=8,m.needsUpdate=!0,Ea={map:m,data:c,width:n,height:t,lines:[s,r,o,a],headlineBand:[ee.L1_TOP,ee.L1_TOP+ee.L1_CAP],inkCentroidV:_>0?g/_:.5},Ea}function co(n,t,e,i,s,r,o,a,c,l=Uw){const u=i.split(" ").filter(N=>N.length),h=u.reduce((N,x)=>N+x.length,0),d=u.length-1,f=h-u.length,p=s/10,_=p*l;let g=0;for(const N of u)for(const x of N)g+=Sa(x);const m=.5*c*s,v=(a-o-2*m)/_,M=f+d*Wf,S=M>0?(v-g-d*Sa(" "))/M:0,A=Sa(" ")+Wf*S;let w=(o+m)/_,E=1/0,T=-1/0;for(let N=0;N<u.length;N++){const x=u[N];for(let y=0;y<x.length;y++){const R=x[y],C=Fw[R];if(C===void 0)throw new Error(`boxpaint: no glyph for '${R}'`);for(const O of C){for(const k of O){const L=(w+k[0])*_;L-m<E&&(E=L-m),L+m>T&&(T=L+m)}Hw(n,t,e,O,_,p,w,r,m)}w+=Sa(R),y<x.length-1&&(w+=S)}N<u.length-1&&(w+=A)}return{text:i,cap:s,topY:r,x0:o,x1:a,track:S,wordGap:A,stem:2*m,left:E,right:T}}function Hw(n,t,e,i,s,r,o,a,c){for(let l=0;l<i.length-1;l++){const u=(o+i[l][0])*s,h=a+i[l][1]*r,d=(o+i[l+1][0])*s,f=a+i[l+1][1]*r,p=d-u,_=f-h,g=p*p+_*_,m=c+1,v=Math.max(0,Math.floor(Math.min(u,d)-m)),M=Math.min(t-1,Math.ceil(Math.max(u,d)+m)),S=Math.max(0,Math.floor(Math.min(h,f)-m)),A=Math.min(e-1,Math.ceil(Math.max(h,f)+m));for(let w=S;w<=A;w++){const E=w+.5,T=w*t;for(let N=v;N<=M;N++){const x=N+.5;let y=g>0?((x-u)*p+(E-h)*_)/g:0;y=y<0?0:y>1?1:y;const R=x-(u+y*p),C=E-(h+y*_),O=c+.5-Math.sqrt(R*R+C*C);if(O<=0)continue;const k=O>1?1:O;k>n[T+N]&&(n[T+N]=k)}}}}const lo=Object.freeze({W:192,H:256,PLATE_W:.288,PLATE_H:.384,FIELD:ee.FIELD,INK:ee.INK,BORDER_IN:4,BORDER_T:8,L1_TEXT:"POLICE TELEPHONE",L1_CAP:15,L1_TOP:22,L1_X0:18,L1_X1:174,L1_WEIGHT:.15,L2_TEXT:"FREE",L2_CAP:28,L2_TOP:44,L2_X0:52,L2_X1:140,L2_WEIGHT:.13,L3_TEXT:"FOR USE OF",L3_CAP:14,L3_TOP:78,L3_X0:36,L3_X1:156,L3_WEIGHT:.17,L4_TEXT:"PUBLIC",L4_CAP:28,L4_TOP:96,L4_X0:44,L4_X1:148,L4_WEIGHT:.13,L5_TEXT:"ADVICE & ASSISTANCE",L5_CAP:12,L5_TOP:140,L5_X0:16,L5_X1:176,L5_WEIGHT:.175,L6_TEXT:"OBTAINABLE IMMEDIATELY",L6_CAP:12,L6_TOP:156,L6_X0:12,L6_X1:180,L6_WEIGHT:.175,L7_TEXT:"OFFICERS & CARS",L7_CAP:12,L7_TOP:180,L7_X0:30,L7_X1:162,L7_WEIGHT:.175,L8_TEXT:"RESPOND TO ALL CALLS",L8_CAP:12,L8_TOP:196,L8_X0:18,L8_X1:174,L8_WEIGHT:.175,L9_TEXT:"PULL TO OPEN",L9_CAP:20,L9_TOP:218,L9_X0:22,L9_X1:170,L9_WEIGHT:.13}),Bw=lo.W/lo.PLATE_W/(lo.H/lo.PLATE_H);let wa=null;function Gw(){if(wa)return wa;const n=lo,t=n.W,e=n.H,i=new Float32Array(t*e),s=M=>e-1-M;{const M=n.BORDER_IN,S=n.BORDER_IN+n.BORDER_T;for(let A=M;A<e-M;A++){const w=A>=S&&A<e-S;for(let E=M;E<t-M;E++)w&&E>=S&&E<t-S||(i[A*t+E]=1)}}const r=[];for(let M=1;M<=9;M++)r.push(co(i,t,e,n["L"+M+"_TEXT"],n["L"+M+"_CAP"],n["L"+M+"_TOP"],n["L"+M+"_X0"],n["L"+M+"_X1"],n["L"+M+"_WEIGHT"],Bw));const[o,a,c]=r,l=new Uint8Array(t*e*4),[u,h,d]=n.FIELD,[f,p,_]=n.INK;let g=0,m=0;for(let M=0;M<e;M++){const S=M*t,A=s(M)*t,w=1-(M+.5)/e;for(let E=0;E<t;E++){const T=i[S+E],N=(A+E)*4;l[N]=u+(f-u)*T+.5,l[N+1]=h+(p-h)*T+.5,l[N+2]=d+(_-d)*T+.5,l[N+3]=255,g+=T,m+=T*w}}const v=new Io(l,t,e,vn);return v.colorSpace=an,v.wrapS=v.wrapT=ks,v.magFilter=ze,v.minFilter=ci,v.generateMipmaps=!0,v.anisotropy=8,v.needsUpdate=!0,wa={map:v,data:l,width:t,height:e,lines:r,inkCentroidV:g>0?m/g:.5,inkFraction:g/(t*e)},wa}function Ww(n,t={}){const e=Gw(),i=new un({color:n,roughness:t.roughness??.62,metalness:0,map:e.map,vertexColors:!0});return i.userData.cast=!1,i}const ke=Object.freeze({FOOT:1.372,HALF:.686,WALL_T:.07,FRONT_T:.1,P_E:.071,DOOR_Z:.686,HINGE_Z:.646,FRONT_BACK:.586,APER_W:1.15,APER_HW:.575,APER_H:2.11,POST:.111,PROUD:.02,BODY_H:2.28,PLINTH_W:1.452,PLINTH_H:.12,PLINTH_PROUD:.04,SIGN_W:1.452,SIGN_Y0:2.28,SIGN_Y1:2.5,SIGN_BOARD_H:.13,SIGN_BOARD_T:.014,ROOF:Object.freeze([Object.freeze({w:1.412,y0:2.5,y1:2.57}),Object.freeze({w:1.312,y0:2.57,y1:2.63}),Object.freeze({w:1.212,y0:2.63,y1:2.68})]),HEAD_D:.615,REVEAL_D:.515,REVEAL_CLEAR:.02,FRAME_T:.02,FRAME_H:2.153,STILE_W:.075,MUNTIN_W:.07,STILE_AT:.5575,BAY_AT:.2775,PANEL_W:.52,PANEL_T:.01,PANEL_LO_H:.52,PANEL_LO_Y:.49,PANEL_HI_H:.58,PANEL_HI_Y:1.11,LEAF_W:.575,LEAF_H:2.11,LEAF_T:.04,OPEN_ANGLE:Math.PI/2,LEAF_PROUD_OUT:.025,LEAF_PROUD_IN:.015,INNER_SETBACK:.06,TOP:3.07,CHAMFER:.004}),Vf=Object.freeze([Object.freeze({id:"postR",x:.6305,z:0,hw:.0555,hd:.686,rotY:0,y0:0,y1:2.28}),Object.freeze({id:"postL",x:-.6305,z:0,hw:.0555,hd:.686,rotY:0,y0:0,y1:2.28}),Object.freeze({id:"block",x:0,z:-.5025,hw:.686,hd:.1835,rotY:0,y0:0,y1:2.28})]),ur=(n,t,e,i,s,r)=>({min:new B(n,t,e),max:new B(i,s,r)}),Ym=Object.freeze([ur(-.686,0,-.686,.686,2.28,-.616),ur(.616,0,-.686,.686,2.28,.686),ur(-.686,0,-.686,-.616,2.28,.686),ur(-.726,2.28,-.726,.726,2.5,.726),ur(.575,0,.586,.686,2.28,.686),ur(-.686,0,.586,-.575,2.28,.686)]);let Gl=null;function Vw(){return Gl||(Gl=new Za(Ym,1)),Gl}const Cs=Object.freeze({BLUE:1519185,TRIM:991545,SIGN:13223090,LENS:15985366,GLASS:10196622,NOTICE:13223090,BRASS:11044671}),ba=Object.freeze({colour:16773332,intensity:.55,distance:2.6,decay:2});let Wl=null;function $m(n=null){if(Wl)return Wl;const t=Cw(n),e={BLUE:Bl(Cs.BLUE,t),TRIM:Bl(Cs.TRIM,t),GLASS:Pw(Cs.GLASS,t),SIGN:Ow(Cs.SIGN),LENS:Nw(Cs.LENS),NOTICE:Ww(Cs.NOTICE),BRASS:Bl(Cs.BRASS,t)};for(const i of fr){const s=e[i];if(s.metalness!==0)throw new Error(`boxPalette: ${i}.metalness is ${s.metalness}; there is no envMap in either scene, so metalness above 0 only scales diffuse down (THRESHOLD 10 I)`);if(s.metalnessMap)throw new Error(`boxPalette: ${i} carries a metalnessMap; see the metalness rule above`)}return Wl=e,e}let Vl=null,ql=null;function qw(){if(Vl)return Vl;const n=Hs(ke.APER_W,ke.SIGN_BOARD_H,ke.SIGN_BOARD_T,ke.CHAMFER).clone(),t=n.attributes.position,e=n.attributes.uv;n.computeBoundingBox();const i=n.boundingBox,s=i.max.x-i.min.x||1,r=i.max.y-i.min.y||1;for(let o=0;o<e.count;o++)e.setXY(o,(t.getX(o)-i.min.x)/s,(t.getY(o)-i.min.y)/r);return e.needsUpdate=!0,Vl=n,n}const Gi=Object.freeze({SIDE:1,X:.135,ESC_Y:1.25,ESC_R:.024,ESC_T:.006,ESC_Z:.009,KEY_W:.007,KEY_H:.015,PULL_Y:1.07,PULL_W:.014,PULL_H:.12,BOSS:.016,BOSS_D:.006,BOSS_Z:.009,PULL_D:.006,PULL_Z:.011}),Xw=(()=>{const n=Gi,t=(e,i,s)=>2*(e*i+e*s+i*s);return t(n.ESC_R*2,n.ESC_R*2,n.ESC_T)+t(n.PULL_W,n.PULL_H,n.PULL_D)+2*t(n.BOSS,n.BOSS,n.BOSS_D)})();let Aa=null;function Yw(){if(Aa)return Aa;const n=Gi,t=[],e=(r,o,a,c)=>{const l=Sc(r.index?r.toNonIndexed():r);return l.translate(o,a,c),t.push(l),l},i=new ne(n.ESC_R,n.ESC_R,n.ESC_T,20).toNonIndexed();i.rotateX(Math.PI/2),e(i,0,n.ESC_Y,n.ESC_Z),e(Hs(n.PULL_W,n.PULL_H,n.PULL_D,ke.CHAMFER).clone(),0,n.PULL_Y,n.PULL_Z);for(const r of[-1,1])e(Hs(n.BOSS,n.BOSS,n.BOSS_D,ke.CHAMFER).clone(),0,n.PULL_Y+r*(n.PULL_H/2-n.BOSS/2),n.BOSS_Z);const s=Gu(t,!1);if(!s)throw new Error("policeBox: the door furniture merged to null — mismatched attributes");return Aa=s,Aa}const Hn=Object.freeze({W:.288,H:.384,T:.004,CX:.305,CY:1.145,CZ:.696,SIDE:-1}),$w=2*(Hn.W*Hn.H+Hn.W*Hn.T+Hn.H*Hn.T);function jw(){if(ql)return ql;const n=Sc(Hs(Hn.W,Hn.H,Hn.T,ke.CHAMFER).clone()),t=n.attributes.position,e=n.attributes.uv;n.computeBoundingBox();const i=n.boundingBox,s=i.max.x-i.min.x||1,r=i.max.y-i.min.y||1;for(let o=0;o<e.count;o++)e.setXY(o,(t.getX(o)-i.min.x)/s,(t.getY(o)-i.min.y)/r);return e.needsUpdate=!0,ql=n,n}const on=Object.freeze((()=>{const s=.17066666666666666;return{BAR:.024,H:.56,Y:1.76,ROWS:3,LIGHT_H:s,DY:(s+.024)/2}})()),ln=Object.freeze({W:.395,H:on.H,T:.004,X:.2875,Y:on.Y,Z:.688}),Kw=2*(ln.W*ln.H+ln.W*ln.T+ln.H*ln.T),fr=["BLUE","TRIM","GLASS","SIGN","LENS","NOTICE","BRASS"];function Zw(n,t=$m()){var k;for(const L of fr)if(!(t!=null&&t[L]))throw new Error(`policeBox: palette is missing '${L}' (needs ${fr.join(", ")})`);const e=ke,i=new Set,s={};let r=0;const o=L=>fr.find(D=>t[D]===L)||"UNKNOWN",a=(L,D)=>{const F=o(L);s[F]=(s[F]||0)+D},c=(L,D,F,X,K,it,dt,Q,z=0,U=null)=>{var J;let Y;return U?(Y=new Pt(U,L),Y.castShadow=((J=L.userData)==null?void 0:J.cast)??!1,Y.receiveShadow=!0):Y=_t("appliance",F,X,K,0,{material:L,chamfer:e.CHAMFER}),Y.position.set(it,dt,Q),z&&(Y.rotation.y=z),Y.name=D,n.add(Y),i.add(Y.geometry.uuid),r++,a(L,2*(F*X+F*K+X*K)),Y},l=Math.PI/2,u=Object.freeze([{r:0,ax:0,az:-1},{r:l,ax:1,az:0},{r:l,ax:-1,az:0}]),h=(L,D,F)=>L.ax?[L.ax*F,D]:[D,L.az*F];for(const[L,D,F]of[[0,-.706,0],[.706,0,l],[-.706,0,l]])c(t.TRIM,"plinth",e.PLINTH_W,e.PLINTH_H,e.PLINTH_PROUD,L,e.PLINTH_H/2,D,F);for(const[L,D,F]of[[0,-.651,0],[.651,0,l],[-.651,0,l]])c(t.BLUE,"bodyWall",e.FOOT,e.BODY_H,e.WALL_T,L,e.BODY_H/2,D,F);for(const L of[-1,1])for(const D of[-1,1])c(t.TRIM,"cornerPost",e.POST,e.BODY_H,e.POST,L*.6505,e.BODY_H/2,D*.6505);for(const L of[-1,1])c(t.BLUE,"doorJamb",e.POST,e.BODY_H,e.FRONT_T,L*.6305,e.BODY_H/2,e.DOOR_Z-e.FRONT_T/2);c(t.BLUE,"headLining",e.APER_W,e.BODY_H-e.APER_H,e.HEAD_D,0,(e.APER_H+e.BODY_H)/2,e.P_E+e.HEAD_D/2);const d=e.HALF-e.WALL_T-e.APER_HW-e.REVEAL_CLEAR;for(const L of[-1,1])c(t.BLUE,"revealSide",d,e.APER_H,e.REVEAL_D,L*(e.APER_HW+e.REVEAL_CLEAR+d/2),e.APER_H/2,e.P_E+e.REVEAL_D/2);c(t.TRIM,"sillPlate",2*(e.HALF-e.WALL_T),.004,e.REVEAL_D,0,.002,e.P_E+e.REVEAL_D/2);const f=[{y:.185,h:.07},{y:.785,h:.05},{y:1.445,h:.07},{y:2.075,h:.07}],p=e.HALF+e.FRAME_T/2;for(const L of u){for(const K of f){const[it,dt]=h(L,0,p);c(t.TRIM,"rail",e.FOOT,K.h,e.FRAME_T,it,K.y,dt,L.r)}for(const K of[-1,1]){const[it,dt]=h(L,K*e.STILE_AT,p);c(t.TRIM,"faceStile",e.STILE_W,e.FRAME_H,e.FRAME_T,it,e.BODY_H-e.FRAME_H/2,dt,L.r)}const[D,F]=h(L,0,p);c(t.TRIM,"faceMuntin",e.MUNTIN_W,e.FRAME_H,e.FRAME_T,D,e.BODY_H-e.FRAME_H/2,F,L.r);const X=e.HALF+e.PANEL_T/2;for(const K of[-1,1])for(const it of[{h:e.PANEL_LO_H,y:e.PANEL_LO_Y},{h:e.PANEL_HI_H,y:e.PANEL_HI_Y}]){const[dt,Q]=h(L,K*e.BAY_AT,X);c(t.BLUE,"panelField",e.PANEL_W,it.h,e.PANEL_T,dt,it.y,Q,L.r)}}const _=e.HALF+e.PROUD-e.APER_HW;for(const L of[-1,1])c(t.TRIM,"archSide",_,e.FRAME_H,e.FRAME_T,L*(e.APER_HW+_/2),e.BODY_H-e.FRAME_H/2,e.DOOR_Z+e.FRAME_T/2);c(t.TRIM,"archHead",2*(e.HALF+e.PROUD),.17,e.FRAME_T,0,e.BODY_H-.085,e.DOOR_Z+e.FRAME_T/2);const g=.79,m=on.H,v=on.BAR,M=e.HALF+.006;for(const L of u){const[D,F]=h(L,0,M);c(t.GLASS,"window",g,m,.012,D,on.Y,F,L.r);const[X,K]=h(L,0,p);for(const it of[-1,1]){const[dt,Q]=h(L,it*.1975,p);c(t.TRIM,"glazingBar",v,m,v,dt,on.Y,Q,L.r)}for(const it of[-1,1])c(t.TRIM,"glazingBar",g,v,v,X,on.Y+it*on.DY,K,L.r)}c(t.TRIM,"entablature",e.SIGN_W,e.SIGN_Y1-e.SIGN_Y0,e.SIGN_W,0,(e.SIGN_Y0+e.SIGN_Y1)/2,0);const S=(e.SIGN_Y0+e.SIGN_Y1)/2,A=qw();for(const[L,D,F]of[[0,1,0],[0,-1,Math.PI],[1,0,l],[-1,0,-l]])c(t.TRIM,"signCase",1.21,.15,.01,L*.728,S,D*.728,F),c(t.SIGN,"signBoard",e.APER_W,e.SIGN_BOARD_H,e.SIGN_BOARD_T,L*.733,S,D*.733,F,A);for(const L of e.ROOF)c(t.TRIM,"roofTier",L.w,L.y1-L.y0,L.w,0,(L.y0+L.y1)/2,0);const w=[["lampPlinth",.2,2.68,2.72],["lampStalk",.09,2.72,2.87],["lampGallery",.15,2.87,2.9],["lampCowl",.15,3.01,3.034],["lampFinial",.045,3.034,3.07]];for(const[L,D,F,X]of w)c(t.TRIM,L,D,X-F,D,0,(F+X)/2,0);const E=.072,T=2.9,N=3.01;for(const[L,D]of[[1,0],[-1,0],[0,1],[0,-1]])c(t.TRIM,"lampRib",.016,N-T,.016,L*.068,(T+N)/2,D*.068);{const L=N-T,D=new ne(E,E,L,12),F=new Pt(D,t.LENS);F.position.set(0,(T+N)/2,0),F.name="lampLens",F.castShadow=!1,F.receiveShadow=!0,n.add(F),i.add(D.uuid),r++,a(t.LENS,2*Math.PI*E*L+2*Math.PI*E*E)}const x=new xe;x.name="boxLeaves";const y=[],R=Vw();for(const L of[1,-1]){const D=new xe;D.name=L>0?"boxDoor.R":"boxDoor.L",D.position.set(L*e.APER_HW,0,e.HINGE_Z),D.userData.side=L,D.userData.hinge=new B(L*e.APER_HW,0,e.HINGE_Z),D.userData.openSign=L;const F=Jw(L,t,R);i.add(F.uuid);const X=new Pt(F,t.BLUE);X.name=L>0?"boxLeaf.R":"boxLeaf.L",X.castShadow=!0,X.receiveShadow=!0,D.add(X),r++,a(t.BLUE,2*(e.LEAF_W*e.LEAF_H+e.LEAF_W*e.LEAF_T+e.LEAF_H*e.LEAF_T));const K=Qw(t,L);i.add(K.uuid);const it=new Pt(K,t.GLASS);if(it.position.set(-L*ln.X,ln.Y,ln.Z-e.HINGE_Z),it.name=L>0?"boxPane.R":"boxPane.L",it.castShadow=!1,it.receiveShadow=!0,D.add(it),r++,a(t.GLASS,Kw),L===Gi.SIDE){const dt=new Pt(Yw(),t.BRASS);dt.position.set(-L*(e.APER_HW-Gi.X),0,e.DOOR_Z-e.HINGE_Z),dt.name="boxFurniture",dt.castShadow=!1,dt.receiveShadow=!0,D.add(dt),r++,a(t.BRASS,Xw)}if(L===Hn.SIDE){const dt=new Pt(jw(),t.NOTICE);dt.position.set(-L*(e.APER_HW-Hn.CX),Hn.CY,Hn.CZ-e.HINGE_Z),dt.name="boxNotice",dt.castShadow=((k=t.NOTICE.userData)==null?void 0:k.cast)??!1,dt.receiveShadow=!0,D.add(dt),i.add(dt.geometry.uuid),r++,a(t.NOTICE,$w)}x.add(D),y.push(D)}for(const L of Vf)n.solid(L.x,L.y0,L.z,L.hw*2,L.y1-L.y0,L.hd*2,!1);const C=new yo(ba.colour,ba.intensity,ba.distance,ba.decay);C.position.set(0,(T+N)/2,0),C.name="boxLamp",C.userData.boxLocal=C.position.clone();for(const L of fr)s[L]&&vc(t[L].color.getHex(),s[L]);const O=L=>{const D=Math.max(0,Math.min(1,L))*e.OPEN_ANGLE;for(const F of y)F.rotation.y=-F.userData.side*D};return O(0),x.userData.setOpen=O,{group:n.group,leaves:x,lamp:C,areas:s,collision:Vf,aoVolumes:Ym,setOpen:O,pivots:y,materials:t,counts:{meshes:r,geometries:i.size,materials:fr.length}}}function Jw(n,t,e){var _;const i=ke,s=i.DOOR_Z-i.LEAF_T/2,r=i.DOOR_Z+.006,o=i.DOOR_Z+.005;i.DOOR_Z+.0055;const a=i.HINGE_Z-.005,c=i.HINGE_Z-.007,l=i.LEAF_H/2,u=[["blank",i.LEAF_W,i.LEAF_H,i.LEAF_T,.2875,l,s],["stile",.06,i.LEAF_H,.012,.545,l,r],["stile",.06,i.LEAF_H,.012,.03,l,r],["rail",.455,.1,.012,.2875,.05,r],["rail",.455,.07,.012,.2875,.845,r],["rail",.455,.07,.012,.2875,1.445,r],["rail",.455,.07,.012,.2875,2.075,r],["panel",.395,.69,.01,.2875,.455,o],["panel",.395,.51,.01,.2875,1.145,o],...n===Gi.SIDE?[["keyhole",Gi.KEY_W,Gi.KEY_H,.004,Gi.X,Gi.ESC_Y,i.DOOR_Z+.01]]:[],["glazingBar",on.BAR,on.H,.012,.2875,on.Y,r],["glazingBar",ln.W,on.BAR,.012,.2875,on.Y-on.DY,r],["glazingBar",ln.W,on.BAR,.012,.2875,on.Y+on.DY,r],["backStile",.06,i.LEAF_H,.01,.48,l,a],["backStile",.06,i.LEAF_H,.01,.03,l,a],["backLedge",.39,.07,.01,.255,.845,a],["backLedge",.39,.07,.01,.255,2.075,a],["pull",.03,.22,.014,.1,1.01,c]];for(const[g,m,,v,M,,S]of u){const A=S+v/2,w=S-v/2;if(A>i.DOOR_Z+i.LEAF_PROUD_OUT)throw new Error(`policeBox: leaf '${g}' stands ${((A-i.DOOR_Z)*1e3).toFixed(0)} mm proud of the outer face, over the ${i.LEAF_PROUD_OUT*1e3} mm budget`);if(w<i.HINGE_Z-i.LEAF_PROUD_IN)throw new Error(`policeBox: leaf '${g}' stands ${((i.HINGE_Z-w)*1e3).toFixed(0)} mm proud of the inner face, over the ${i.LEAF_PROUD_IN*1e3} mm budget`);if(w<i.HINGE_Z&&M+m/2>i.APER_HW-i.INNER_SETBACK)throw new Error(`policeBox: leaf '${g}' reaches x ${(M+m/2).toFixed(3)} behind the inner face; anything there must stay inboard of ${(i.APER_HW-i.INNER_SETBACK).toFixed(3)} or it sweeps into the jamb`)}const h=g=>n*g,d=u.map(([,g,m,v,M,S,A])=>{const w=Hs(g,m,v,i.CHAMFER).clone();return w.translate(h(M),S,A),Sc(w)}),f=d.length===1?d[0]:Gu(d,!1);if(!f)throw new Error("policeBox: leaf merge returned null (mismatched attributes)");const p=(_=t.BLUE.userData)==null?void 0:_.uvScale;return p&&yc(f,p[0],p[1]),e&&rm(f,e),f.translate(-h(i.APER_HW),0,-i.HINGE_Z),f}function Qw(n,t){var s;const e=Sc(new hn(ln.W,ln.H,ln.T).toNonIndexed()),i=(s=n.GLASS.userData)==null?void 0:s.uvScale;if(i){const r=e.clone();r.translate(t*ln.X,ln.Y,ln.Z),yc(r,i[0],i[1]),e.setAttribute("uv",r.attributes.uv)}return e}const tb=.02,eb=new B;function qf(n,t){if(!n)throw new Error(`worlds(): no ${t} world`);if(!n.id)throw new Error(`worlds(): the ${t} world has no id — link.js keys every accessor on it`);if(!n.scene||!n.scene.isScene)throw new Error(`worlds(): the ${t} world '${n.id}' has no THREE.Scene`);const e={id:n.id,scene:n.scene,build:n.build??null,surface:n.surface??null,beds:n.beds??null,dist:n.dist??null,cap:n.cap??null,update:typeof n.update=="function"?n.update:()=>{},collisionSrc:n.collision??null,get collision(){var i,s;return e.collisionSrc??((s=(i=e.build)==null?void 0:i.userData)==null?void 0:s.collision)??null}};return e}function nb({interior:n,exterior:t,link:e,startWorld:i=null}={}){const s=qf(n,"interior"),r=qf(t,"exterior");if(!e)throw new Error("worlds(): no link — makeLink(landing, SITES) builds one");let o=e;const a=[s,r];let c=0;if(i&&i!==s.id){if(i!==r.id&&i!=="exterior")throw new Error(`worlds(): startWorld '${i}' is neither '${s.id}' nor '${r.id}'`);c=1}let l=!1;const u=new Co,h=new jt;function d(p){return h.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse),u.setFromProjectionMatrix(h)}const f={get near(){return a[c]},get far(){return a[1-c]},get link(){return o},get interior(){return s},get exterior(){return r},swap(){return c=1-c,f.near},remountExterior(p){if(!p||!p.id)throw new Error("worlds.remountExterior: no world record, or no id");if(p.scene&&p.scene!==r.scene)throw new Error("worlds.remountExterior: the exterior SCENE is fixed for the session — swap its contents, not the scene");if(c===1)throw new Error(`worlds.remountExterior: the player is standing in '${r.id}'. Fly with the doors shut — a remount under somebody's feet leaves the Walker solving against a Build that no longer exists.`);return r.id=p.id,r.build=p.build??null,r.collisionSrc=p.collision??null,r.surface=p.surface??null,r.beds=p.beds??null,r.dist=p.dist??null,r.update=typeof p.update=="function"?p.update:()=>{},o=null,r},setLink(p){if(p===null)return o=null,null;if(!p)throw new Error('worlds.setLink: no link (pass null deliberately for "the box is away")');if(p.siteId&&r.id!=="exterior"&&p.siteId!==r.id)throw new Error(`worlds.setLink: the new link is at site '${p.siteId}' but the exterior world is '${r.id}'. A different site needs its contents remounted first — call remountExterior with that site's build, then setLink.`);return o=p,o},liveLink(p,_,g=null){if(!o||!_||!(_.t>tb))return null;const m=a[c].cap;return m?!p||m.normalWorld.dot(eb.copy(p.position).sub(m.centreWorld))<=0||!(g||d(p)).intersectsBox(m.aabbInflated)?null:o:(l||(l=!0,console.warn(`[worlds] the '${a[c].id}' world has no portal cap, so the doors open onto its own background. portal.makeCap() mints one (THRESHOLD.md §4.4).`)),null)},frustumOf:d};return f}const hr="interior",Xf=On.w/2,ib=.02,sb=3*(Le.RUN/60+.014),rb=Le.RADIUS,ob=1e-6,ab=.001,cb=6,Xl=Dn-(et.FLAT_FACE-Le.RADIUS),lb=1.2,ub=.6,hb=.002,Yf=new B(0,1,0),Yl=new B,Ta=new B,$f=new B,dr=new B;function db({worlds:n,walker:t,audio:e,portal:i,camera:s,doors:r=null}){let o=0,a=0,c=-1,l=!1,u=!1,h=!1,d=!1,f=!1,p=!1;function _(){return!n||!n.near||!n.far||!n.link?(f||(f=!0,console.warn("[threshold] no live link — the crossing is disabled. makeLink() builds one (THRESHOLD.md §1.3); a build with no exterior is expected to land here.")),!1):!0}function g(){return s&&t.driveCamera!==!1?Yl.copy(s.position):Yl.set(t.position.x,t.position.y+Le.EYE,t.position.z)}function m(x,y){const R=n.link,C=x.id===hr,O=C?R.pI:R.pE,k=C?R.nI:R.nE;Ta.copy(y).sub(O);const L=Ta.dot(k);$f.copy(Yf).cross(k);const D=Ta.dot($f),F=Ta.dot(Yf),X=Math.abs(D)-Xf,K=F>On.h?F-On.h:F<0?-F:0;return{d:L,lat:D,h:F,s:C?1:-1,inRect:X<=0&&K===0,r:Math.hypot(L,X>0?X:0,K)}}function v(x){return x.inRect}function M(x){return r?r.t>ib:(d||(d=!0,console.warn("[threshold] no `doors` passed to threshold(): crossing without checking that they are open. The exterior collision set has no shut-door blocker (THRESHOLD.md §1.1, §7.1), so the box is enterable through shut leaves.")),!0)}function S(x,y){const R=x&&x.collision;if(!R)return!0;dr.copy(t.position).applyMatrix4(y);let C=dr.x,O=dr.z;for(let k=0;k<cb;k++){const L=eh(R,C,O,{y:dr.y});if(C=L.x,O=L.z,!L.contacts)break}return Math.hypot(C-dr.x,O-dr.z)<=ab}function A(x){const y=n.link,R=n.near,C=n.far,k=R.id===hr?y.M_IE:y.M_EI;if(typeof t.crossTo!="function"||typeof t.setWorld!="function")return p||(p=!0,console.warn("[threshold] walker.crossTo / walker.setWorld are missing — refusing to cross. §2 adds both to Walker.js; without them a swap would leave the player in one world holding the other one's colliders.")),!1;if(!S(C,k))return l=!0,h||(h=!0,console.warn(`[threshold] holding the crossing into '${C.id}': M puts the player inside something there. Expected while a door leaf is still swinging — MEASURED, the way in clears at t = 0.68 on the door axis and t = 0.83 at the edge of the band (see CROSS_CLEAR). The crossing retries every sub-step and fires the moment that line is clear.`)),!1;l=!1;const L=k.elements,D=Math.atan2(L[8],L[10]);return t.crossTo(k,D),n.swap(),t.setWorld(n.near),e&&typeof e.setWorld=="function"&&e.setWorld(n.near,y),t.driveCamera!==!1&&typeof t._commitCamera=="function"&&t._commitCamera(0),o=x.d,a++,!0}function w(x,y){const R=x.s*x.d;if(!(x.inRect&&R>ob&&R<=rb)||!M())return l=!1,!1;const C=l,O=n.near.id;return A(x)?(!y&&!C&&!u&&(u=!0,console.warn(`[threshold] the player was ${R.toFixed(3)} m past the '${O}' aperture plane and still in it — the crossing edge missed, or the doors opened around someone already standing in the doorway. Reconciled. §5.4: the backstops park a misfire at 0.050 m, so this is recoverable, but a sub-step running without step() would look exactly like this.`)),!0):!1}function E(x,y){let C=((x.id===hr?-1:1)*y.r+ub)/lb;C=C<0?0:C>1?1:C;const O=C===0||C===1;c>=0&&C!==c&&Math.abs(C-c)<hb&&!O||C!==c&&(c=C,e&&typeof e.setBedMix=="function"&&e.setBedMix(C))}function T(x){const y=m(x,g());return o=y.d,y}const N={step(){if(!_())return;let x=n.near;const y=m(x,g());if(Math.abs(y.d-o)>sb){o=y.d,w(y,!0)&&(x=n.near),E(x,y);return}const R=y.s;R*o<0&&R*y.d>=0&&v(y)&&M()?A(y)?x=n.near:o=y.d:(o=y.d,w(y,!1)&&(x=n.near)),E(x,y)},seed(x={}){if(!_())return;let y=n.near;const R=T(y);x.reconcile!==!1&&w(R,!0)&&(y=n.near),E(y,R)},force(x){if(!_())return!1;const y=R=>R.id===x||x==="interior"&&R.id===hr||x==="exterior"&&R.id!==hr;return y(n.near)?(N.seed({reconcile:!1}),!1):y(n.far)?(n.swap(),typeof t.setWorld=="function"&&t.setWorld(n.near),e&&typeof e.setWorld=="function"&&e.setWorld(n.near,n.link),N.seed({reconcile:!1}),!0):(console.warn(`[threshold] force('${x}'): no such world. near is '${n.near.id}', far is '${n.far&&n.far.id}'.`),!1)},get inAperture(){if(!_())return!1;const x=n.near,y=m(x,Yl.copy(t.position)),R=y.s*y.d;return x.id===hr?R>-Xl:Math.abs(y.lat)<=Xf+Le.RADIUS&&R>-Xl&&R<Xl&&y.h>=0&&y.h<=On.h},get crossings(){return a},get held(){return l},get bedMix(){return c}};return N}const jm=Object.freeze({w:1.15,h:2.11}),fb=.014,jf=.035,Kf=16,$l=1920*1080,pb=.75,jl=4,mb=2,Zf=1.5,Jf=45,gb=.2,_b=.95,xb=.002,Qf="interior",vb=Math.PI/180,Kl=new Bt,Mb=new Bt,yb=new B,tp=new jt;function ep(n,t={}){const e=t.fov??58,i=t.apertureH??jm.h,s=Number.isFinite(n)&&n>0?n:16/9,r=Math.tan(e*vb/2),o=r*s,a=Math.sqrt(1+o*o+r*r),c=Le.RADIUS-fb,l=i-Le.EYE-jf,u=Le.EYE-jf,h=Math.min(c/o,l/r,u/r)/a,d=Math.min(gb,_b*h),f=d*a;return{aspect:s,fov:e,tx:o,ty:r,K:a,limit:h,near:d,skin:f,gapLat:c,gapUp:l,gapDown:u,marginLat:c-f*o,marginUp:l-f*r,marginDown:u-f*r}}function Sb(n,t){n.updateMatrixWorld(!0);const e=t.clone().applyMatrix4(n.matrixWorldInverse);if(e.constant>0)return!1;const i=new fe(e.normal.x,e.normal.y,e.normal.z,e.constant),s=n.projectionMatrix.elements,r=new fe((Math.sign(i.x)+s[8])/s[0],(Math.sign(i.y)+s[9])/s[5],-1,(1+s[10])/s[14]),o=i.multiplyScalar(2/i.dot(r));return s[2]=o.x,s[6]=o.y,s[10]=o.z+1,s[14]=o.w,n.projectionMatrixInverse.copy(n.projectionMatrix).invert(),!0}const Eb=`
uniform float uNear;

void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);

  // THE NEAR-PLANE PULL. Slide the vertex along its OWN eye ray until it is at
  // least uNear from the eye. Scaling all three components of a view-space
  // position by one scalar k leaves x/z and y/z untouched, so the vertex lands
  // on EXACTLY the same pixel and only its depth moves: the pull is invisible
  // by construction, and it composes exactly with the screen-space UV in the
  // fragment shader, because a triangle whose three vertices project to their
  // original pixels covers its original screen triangle and gl_FragCoord is
  // screen space.
  //
  // Without it the cap is clipped away for the last NEAR_SKIN = near * K =
  // 0.30188 m (116 ms of walking, 4.3 frames at a run) before the crossing,
  // which is precisely when the illusion has to hold. THIS IS THE SINGLE MOST
  // LIKELY THING TO BE SHIPPED BROKEN: it only fails in the last 300 mm and
  // never in a screenshot taken from a sensible distance. shot('portal-near')
  // is the only thing that catches it.
  //
  // THE PAD. The pull target is uNear * (1 + PULL_PAD), not uNear, and the
  // reason is not taste. When the cap plane is parallel to the image plane —
  // the player standing square on to the doorway, which is the pose this exists
  // for — EVERY vertex has the same axial depth, so every vertex is pulled to
  // the same place. Land them exactly ON the near plane and the clip test
  // (-w <= z) is decided by float32 rounding in the projection's own
  // arithmetic: z_clip and -w_clip are algebraically equal there, so which side
  // a vertex falls on is a coin toss, and if it goes the wrong way the whole
  // cap is clipped and the player sees the black hole the pull was written to
  // prevent. float32's relative error is ~1.2e-7; the pad is 2e-3, four orders
  // of margin, and it costs 0.4 mm of depth and zero pixels.
  //
  // vz <= 0 is left alone ON PURPOSE. Scaling by uNear/vz would flip the sign
  // and throw the vertex behind the eye to somewhere in front of it; three's
  // own near-plane clipper handles a behind-the-eye vertex correctly, and the
  // 16x16 grid confines the clamped/unclamped boundary to one cell.
  float pull = uNear * ${(1+xb).toFixed(6)};
  float vz = -mv.z;
  if (vz > 0.0 && vz < pull) mv.xyz *= pull / vz;

  gl_Position = projectionMatrix * mv;
}`,wb=`
uniform sampler2D tPortal;
uniform vec2 uRes;

void main() {
  // SCREEN-SPACE (projective) UVs, which is what makes the parallax correct:
  // the far world was rendered from the portal camera with the MAIN camera's
  // projection, so the pixel under this fragment in the target is the pixel the
  // eye would see through the hole. gl_FragCoord rather than textureProj —
  // recon 2 measured maxDelta 0 for both over 144 samples with a tilted quad
  // straddling the near plane, and this one needs no per-frame matrix and
  // cannot degenerate at a grazing angle.
  //
  // No clamping at the screen edges: gl_FragCoord.xy / uRes is in [0,1] by
  // construction, and the target already holds exactly the on-screen part.
  // uRes is the DRAWING BUFFER size, not the target's — gl_FragCoord is in
  // drawing-buffer pixels, and the sampler rescales a 0.75x target for free.
  gl_FragColor = texture2D(tPortal, gl_FragCoord.xy / uRes);

  // REQUIRED. A ShaderMaterial gets neither of these unless it asks: the target
  // holds linear untonemapped radiance (§4.2), and this is the one and only
  // place it is tonemapped and encoded for the canvas.
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;function bb({renderer:n,camera:t,aperture:e=jm,pixelRatioCap:i=!0,driveCameraNear:s=!0}={}){if(!n)throw new Error("portal(): no renderer");if(!t)throw new Error("portal(): no camera");n.info&&(n.info.autoReset=!1);const r=new Xi(1,1,{type:Pr,format:vn,depthBuffer:!0,stencilBuffer:!1,samples:jl});r.texture.name="portalTarget",r.texture.colorSpace=Ri,r.texture.minFilter=ze,r.texture.magFilter=ze,r.texture.generateMipmaps=!1;const o=new cn;o.name="portalCamera",o.matrixAutoUpdate=!1,o.matrixWorldAutoUpdate=!1;const a=[];let c=ep(t.aspect,{fov:t.fov,apertureH:e.h}),l=1,u=jl,h=null,d=Jf,f=!1;const p={passes:0,skipped:0,rebuilds:0,ratioChanges:0};let _=!1;function g(){n.getDrawingBufferSize(Kl);const R=Math.max(1,Math.floor(Kl.x)),C=Math.max(1,Math.floor(Kl.y)),O=R*C,k=O>$l?pb:1,L=O>$l?mb:jl;L!==u&&(u=L,r.samples=L,r.dispose(),p.rebuilds++),l=k,r.setSize(Math.max(1,Math.round(R*l)),Math.max(1,Math.round(C*l))),c=ep(t.aspect,{fov:t.fov,apertureH:e.h});for(const D of a){const F=D.material.uniforms;F.uRes.value.set(R,C),F.uNear.value=c.near}s&&Math.abs(t.near-c.near)>1e-12&&(t.near=c.near,t.updateProjectionMatrix())}function m(){return Math.min((typeof devicePixelRatio=="number"?devicePixelRatio:1)||1,2)}function v(){if(!i)return;const R=m(),C=n.getSize(Mb),O=C.x*R*C.y*R,k=f&&R>Zf&&O>$l?Zf:R,L=n.getPixelRatio();if(!(h!==null&&Math.abs(L-h)<1e-9||Math.abs(L-R)<1e-9)){h=null;return}if(Math.abs(L-k)<1e-9){h=k;return}n.setPixelRatio(k),h=k,p.ratioChanges++,g()}function M(R){if(R){f=!0,d=0,v();return}++d>=Jf&&f&&(f=!1,v())}function S(R,C,O={}){const k=new mi(R,C,Kf,Kf);k.computeBoundingBox();const L=new wi({name:"portalCap",side:di,fog:!1,toneMapped:!0,uniforms:{tPortal:{value:r.texture},uRes:{value:new Bt(1,1)},uNear:{value:c.near}},vertexShader:Eb,fragmentShader:wb}),D=new Pt(k,L);D.name=O.name||"portalCap",D.isPortalCap=!0,D.frustumCulled=!1,O.faceMinusZ&&(D.rotation.y=Math.PI);const F=new B,X=new B,K=new pi;return Object.defineProperties(D,{normalWorld:{get(){return this.updateWorldMatrix(!0,!1),F.set(0,0,1).transformDirection(this.matrixWorld)}},centreWorld:{get(){return this.updateWorldMatrix(!0,!1),X.setFromMatrixPosition(this.matrixWorld)}},aabbInflated:{get(){return this.updateWorldMatrix(!0,!1),K.copy(this.geometry.boundingBox).applyMatrix4(this.matrixWorld).expandByScalar(c.skin)}}}),a.push(D),g(),D}function A(R,C,O=t){return!(!R||!R.isPortalCap||R.normalWorld.dot(yb.copy(O.position).sub(R.centreWorld))<=0||C&&!C.intersectsBox(R.aabbInflated))}const w=new Co;function E(R=t){return R.updateMatrixWorld(),tp.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),w.setFromProjectionMatrix(tp)}function T(R,C){if(typeof R.M=="function")return R.M(C.id);const O=C.id===Qf?R.M_IE:R.M_EI;if(!O)throw new Error(`portal.pass(): link exposes no transform for "${C.id}"`);return O}function N(R,C){if(typeof R.keepFor=="function")return R.keepFor(C.id);const O=C.id===Qf?R.keepI:R.keepE;if(!O)throw new Error(`portal.pass(): link exposes no clip plane for "${C.id}"`);return O}function x(R,C,O){if(!R||!C||!O||!O.scene){p.skipped++;return}M(!0);const k=R.portalCam||o;k.projectionMatrix.copy(t.projectionMatrix),k.projectionMatrixInverse.copy(t.projectionMatrixInverse),k.fov=t.fov,k.aspect=t.aspect,k.near=t.near,k.far=t.far,k.layers.mask=t.layers.mask,k.matrixAutoUpdate=!1,k.matrixWorldAutoUpdate=!1,k.matrixWorld.multiplyMatrices(T(R,C),t.matrixWorld),k.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),!_&&(Math.abs(k.scale.x-1)>1e-6||Math.abs(k.scale.y-1)>1e-6||Math.abs(k.scale.z-1)>1e-6)&&(_=!0,console.warn("[portal] the link is not rigid: portal camera scale",k.scale.x,k.scale.y,k.scale.z,"- the far world will be the wrong size.")),Sb(k,N(R,O));const L=O.cap,D=L?L.visible:!1;L&&(L.visible=!1);const F=n.getRenderTarget();n.setRenderTarget(r),n.clear(),n.render(O.scene,k),n.setRenderTarget(F),L&&(L.visible=D),p.passes++}function y(){r.dispose();for(const R of a)R.geometry.dispose(),R.material.dispose();a.length=0,h!==null&&Math.abs(n.getPixelRatio()-h)<1e-9&&Math.abs(h-m())>1e-9&&n.setPixelRatio(m()),h=null}return g(),{rt:r,portalCam:o,makeCap:S,resize:g,pass:x,setLive:M,capOnScreen:A,frustum:E,dispose:y,stats:p,get near(){return c.near},get skin(){return c.skin},get plan(){return c},get scale(){return l},get samples(){return u},get live(){return f},get caps(){return a.slice()}}}function Ab({renderer:n,size:t=[512,336]}={}){if(!n)throw new Error("screenFeed(): no renderer");const e=new Xi(t[0],t[1],{depthBuffer:!0,stencilBuffer:!1,samples:0});e.texture.colorSpace=Ri,e.texture.minFilter=ze,e.texture.magFilter=ze,e.texture.generateMipmaps=!1;const i=new li({map:e.texture,toneMapped:!1});let s=!1;return{rt:e,material:i,get painted(){return s},render(r,o){const a=n.getRenderTarget();n.setRenderTarget(e),n.render(r,o),n.setRenderTarget(a),s=!0},dispose(){e.dispose(),i.dispose()}}}function Tb({size:n=[512,336]}={}){const[t,e]=n,i=typeof document<"u"?document.createElement("canvas"):null;if(!i)return{texture:null,material:null,showing:!1,show(){return!1},clear(){},update(){},dispose(){}};i.width=t,i.height=e;const s=i.getContext("2d"),r=new Do(i);r.minFilter=xn,r.magFilter=xn,r.generateMipmaps=!1,r.colorSpace=an;const o=new li({map:r,toneMapped:!1}),a=Math.round(t*.182),c=Math.round(t*.636),l=15,u="#0b0d10",h="#c8e6c0";let d=!1,f=0,p=null;function _(){var v;if(s.fillStyle=u,s.fillRect(0,0,t,e),!p){r.needsUpdate=!0;return}s.fillStyle="rgba(255,255,255,.028)";for(let M=0;M<e;M+=4)s.fillRect(0,M,t,2);s.textBaseline="top",s.fillStyle=h,s.font="bold 18px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace",s.fillText(p.title,a,52),s.globalAlpha=.42,s.fillRect(a,80,c,2),s.globalAlpha=1;const g=Math.floor(f*44);let m=0;s.font=`${l}px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace`,p.lines.forEach((M,S)=>{const A=Math.max(0,g-m),w=M.slice(0,A);m+=M.length,s.fillStyle=h,s.globalAlpha=.88,s.fillText(w,a,108+S*26),w.length&&w.length<M.length&&f*3%1<.6&&(s.globalAlpha=1,s.fillRect(a+s.measureText(w).width+2,108+S*26+2,9,15)),s.globalAlpha=1}),(v=p.grants)!=null&&v.length&&g>m&&(s.font="bold 13px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace",s.fillStyle="#ffb457",s.fillText("LOGGED: "+p.grants.join(", ").toUpperCase(),a,e-62)),r.needsUpdate=!0}return{texture:r,material:o,get showing(){return d},show(g){return g?(p=g,d=!0,f=0,_(),!0):!1},clear(){d=!1,p=null},update(g){if(!d)return;const m=Math.floor(f*44);f+=Math.min(Math.max(g||0,0),.1);const v=p.lines.reduce((M,S)=>M+S.length,0);(Math.floor(f*44)!==m||Math.floor(f*44)<v+44)&&_()},dispose(){o.dispose(),r.dispose()}}}const np=Object.freeze({howlaround:Object.freeze({ink:657930,glow:15921906,echoA:12,echoR:3.6,speed:.42,soft:.26,core:.15,churn:.3,vig:[2.4,.7]})});function Km(n="howlaround"){const t=typeof n=="string"?np[n]:n;if(!t)throw new Error("vortexMaterial: unknown era "+n+" ("+Object.keys(np).join(", ")+")");if(t.echoA!==Math.round(t.echoA))throw new Error("vortexMaterial: echoA must be a whole number — it is the noise tile period, and a fraction puts a seam down the screen at the atan2 cut");return new wi({uniforms:{uTime:{value:0},uInk:{value:new zt(t.ink)},uGlow:{value:new zt(t.glow)},uEchoA:{value:t.echoA},uEchoR:{value:t.echoR},uSpeed:{value:t.speed},uSoft:{value:t.soft},uCore:{value:t.core},uChurn:{value:t.churn},uVig:{value:new Bt(t.vig[0],t.vig[1])}},toneMapped:!1,vertexShader:`
`+["varying vec2 vUv;","void main() {","  vUv = uv;","  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);","}"].join(`
`),fragmentShader:`
`+["precision highp float;","uniform float uTime, uEchoA, uEchoR, uSpeed, uSoft, uCore, uChurn;","uniform vec2  uVig;","uniform vec3  uInk, uGlow;","varying vec2  vUv;","","float hash(vec2 p) {","  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);","}","","// Value noise TILED IN X with period per. The x axis is the ANGLE, which","// is circular: without the wrap every octave shows atan2 s cut as a hard","// radial seam straight down the screen, and on a blobby field that seam is","// the only straight line in the picture and the eye goes to it at once.","float vnoise(vec2 p, float per) {","  vec2 i = floor(p), f = fract(p);","  f = f * f * (3.0 - 2.0 * f);","  float x0 = mod(i.x, per), x1 = mod(i.x + 1.0, per);","  float a = hash(vec2(x0, i.y));","  float b = hash(vec2(x1, i.y));","  float c = hash(vec2(x0, i.y + 1.0));","  float d = hash(vec2(x1, i.y + 1.0));","  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);","}","","// Four octaves, period doubling with them so every octave stays seamless.","float fbm(vec2 p, float per) {","  float s = 0.0, amp = 0.5, pr = per;","  for (int k = 0; k < 4; k++) {","    s += amp * vnoise(p, pr);","    p *= 2.0; pr *= 2.0; amp *= 0.5;","  }","  return s;","}","","void main() {","  vec2  p = vUv * 2.0 - 1.0;","  float r = length(p);","  float a = atan(p.y, p.x);","  float t = uTime;","","  // LOG-POLAR. The one line that makes this howlaround and not a tunnel:","  // feedback reproduces the frame SCALED each pass, so its echoes are","  // evenly spaced in log r. Travelling is then a CONSTANT drift along this","  // axis, which is also why nothing here needs a per-band phase.","  float lr = log(max(r, 0.015));","  vec2  q  = vec2((a / 6.2831853 + 0.5) * uEchoA, -lr * uEchoR + t * uSpeed);","","  // The field boils as well as drifting. Without this the picture is a","  // still being zoomed, which reads as a screensaver.","  float n = fbm(q + vec2(0.0, sin(t * 0.21) * uChurn), uEchoA);","","  // THE VIDICON S-CURVE. 405-line video clipped hard at both ends, and the","  // blown blacks and whites are most of what makes the reference image","  // read as 1963 rather than as grey cloud.","  float v = smoothstep(0.5 - uSoft, 0.5 + uSoft, n);","","  // ALIASING. Toward the centre log r runs away and q.y sweeps hundreds of","  // cycles across a handful of texels. Ask the hardware how fast the phase","  // is actually moving and FADE TO THE MEAN where it cannot be resolved —","  // the same analytic antialias the banded cut needed, and the reason this","  // still holds up filmed by the door camera or seen through the portal at","  // an angle. 0.5 is this S-curve s own mean.","  float aa = 1.0 - smoothstep(0.35, 0.95, fwidth(q.y));","  v = mix(0.5, v, aa);","","  // THE BRIGHT HOLE. Feedback runs away to WHITE where the loop gain is","  // highest, so the centre blows out rather than going dark. Its edge is","  // pushed around by the same noise field, because a round one reads as a","  // spotlight and the reference image s is anything but round.","  float coreR = uCore * (0.80 + 0.55 * n);","  float core  = 1.0 - smoothstep(coreR * 0.55, coreR, r);","  v = max(v, core);","","  // A little bloom off the hole, which is the tube overloading around it.","  v += 0.35 * (1.0 - smoothstep(coreR, coreR * 3.2, r)) * (1.0 - core);","","  // The corners fall away, gently. A CRT of this age had a vignette and","  // the scanner face is a rectangle cut out of a round field — but the","  // reference card is busy to its corners, so this only takes the edge off.","  v *= smoothstep(uVig.x, uVig.y, r);","","  gl_FragColor = vec4(mix(uInk, uGlow, clamp(v, 0.0, 1.0)), 1.0);","}"].join(`
`)})}function Rb({era:n="howlaround"}={}){const t=new mc;t.name="title";const e=new Lu(-1,1,1,-1,0,1),i=Km(n),s=new Pt(new mi(2,2),i);t.add(s);let r=!0,o=0;return{get up(){return r},material:i,dismiss(){r=!1},update(a){r&&(o+=Math.min(Math.max(a||0,0),.1),i.uniforms.uTime.value=o*.55)},pass(a){return r?(a.render(t,e),!0):!1},dispose(){s.geometry.dispose(),i.dispose()}}}const Zm=document.getElementById("scene"),cc=new URLSearchParams(location.search),Lb=cc.get("seed")||"tardis",_n=ew(cc);let Ne=Kn[_n.site];const _e=new M2({canvas:Zm,antialias:!0,powerPreference:"high-performance"});_e.setPixelRatio(Math.min(devicePixelRatio||1,2));_e.setSize(innerWidth||1280,innerHeight||720,!1);_e.outputColorSpace=an;_e.toneMapping=xp;const Cb=jn.toneMappingExposure;_e.toneMappingExposure=Cb;_e.shadowMap.type=gp;_e.shadowMap.enabled=!!jn.shadows;O2(_e);const gi=new mc;gi.background=new zt(jn.background);jn.fog&&(gi.fog=jn.fog);const Ib=new Yp(jn.hemisphere.sky,jn.hemisphere.ground,jn.hemisphere.intensity);gi.add(Ib);const Db=new Nu(jn.ambient.colour,jn.ambient.intensity);gi.add(Db);const Zl=jn.camera,ye=new cn(Zl.fov,(innerWidth||1280)/(innerHeight||720),Zl.near,Math.max(Zl.far,Ne.camera.far)),wc=new Oo(Lb);am();const vs=cm(wc.child("tex.roundel")),yn=new Bu,Z={};Z.shell=My(yn,vs,{liveDoors:!0,archS:!0});Z.interior=mE(yn,vs);pE(Z.interior.zones);gE(yn,Z.interior.zones);Z.console=Py(yn,vs);Z.rotor=qy(yn,vs,{collar:!1});Z.fittings=gS(yn,vs);Z.lighting=NS(yn,vs);Z.doors=jE(yn,vs,{shellDoors:Z.shell,console:Z.console});Z.fittings.setScanner(Z.fittings.shuttersOpen);const Jm=Mc(yn.group);gi.add(Jm);gi.add(Z.rotor.group);gi.add(Z.fittings.group);gi.add(Z.doors.group);const hi=new mc;hi.name="site";Vm();function Qm(n,t){const e=new Bu,i=Object.values(dn).filter(a=>a.site===n.id).map(a=>({x:a.x,z:a.z,r:Ei.plinth/2*Math.SQRT2+.06})),s=gw(e,n,{camera:ye,rng:wc.child(`site.${n.id}`),keepOut:i}),r=s.contact(1.9,1.9);s.placeContact(r,t.x,t.z);const o=Mc(e.group);return{bSite:e,site:s,bakedSite:o,boxContact:r}}let{bSite:xs,site:Ie,bakedSite:uo,boxContact:cs}=Qm(Ne,_n);hi.fog=Ie.fog;const oh=new Bu,$e=Zw(oh,$m(wc.child("tex.box")));hi.add(uo);hi.add(Ie.live);const Pn=Mc(oh.group,{colliders:$e.aoVolumes});Pn.position.set(_n.x,0,_n.z);Pn.rotation.y=_n.yaw;$e.leaves.position.copy(Pn.position);$e.leaves.rotation.y=_n.yaw;$e.lamp.position.set(_n.x,$e.lamp.position.y,_n.z);hi.add(Pn,$e.leaves,$e.lamp,cs);Z.doors.setBoxDoors($e.pivots);Z.lighting.setDoorSpillColour(Ne.sun.colour);const Fr=nh(_n,Kn);let fu=Object.freeze([...xs.userData.collision.boxes||[]]);function Pb(){fu=Object.freeze([...xs.userData.collision.boxes||[]])}function ko(n){xs.userData.collision.boxes=n?[...fu,...n.boxCollision()]:[...fu]}ko(Fr);ph(Fr);const Ti=bb({renderer:_e,camera:ye,aperture:On}),ah=Ti.makeCap(On.w,On.h,{name:"capInterior",faceMinusZ:!0});ah.position.set(0,On.h/2,Dn);gi.add(ah);const ch=Ti.makeCap(On.w,On.h,{name:"capExterior"});ch.position.set(0,On.h/2,Fo);Pn.add(ch);const Ht=nb({interior:{id:de,scene:gi,build:yn,surface:"vinyl",dist:Om,beds:Nm,cap:ah},exterior:{id:Ne.id,scene:hi,build:xs,surface:Ie.surface,dist:Ie.distance,beds:Ie.bedIds,cap:ch,update:Ie.update},link:Fr,startWorld:cc.get("world")==="exterior"?Ne.id:cc.get("world")||(_n.boot==="exterior"?Ne.id:null)}),Tt=new XS(ye,yn,{spawn:et.SPAWN,yaw:et.SPAWN_YAW});Tt.setWorld(Ht.near);if(Ht.near.id!==de)if(_n.start)Tt.teleport(_n.start.x,0,_n.start.z,_n.start.yaw);else{const n=Fr.outsideSpawn();Tt.teleport(n.x,0,n.z,_n.yaw+Math.PI)}const Ae=new PE({sounds:_o,buses:OE,distance:Om,defaults:NE,roomBeds:Nm,propRate:UE,ctlRate:FE,siteBeds:Ie.beds,surfaceSteps:kE,rng:wc,say:n=>te(n)});Ae.bindRoom({build:yn,rotor:Z.rotor,fittings:Z.fittings,walker:Tt,room:et});Z.doors.setAudio(Ae);Ae.setWorld(Ht.near,Fr);const $n=ZS({reach:6});window.sonic=$n;const Ob=.675+.263;function Nb(n){if(!n||n.id===de)return 1;const t=Kn[n.id];return t?(t.hemi.intensity+t.ambient.intensity)/Ob:1}const tg=new Set;function Ub(n){return!n||bc(n)?!1:(tg.add(n),te(`Logged: ${n}.`),Ac(n),!0)}function bc(n){return tg.has(n)||_i.has(n)||Re.flags.includes(n)}let Ac=()=>{};const _i=tE({onGrant:n=>{te(`Logged: ${n}.`),Ac(n)}}),Re=eE({character:"doctor",trait:null,knows:n=>bc(n),onFlag:n=>{te(`Logged: ${n}.`),Ac(n)}}),Zn=Rb({era:"howlaround"}),Dr=Tb();let Ns=-1;const Ba=Ab({renderer:_e}),lc=Km(),ho=Object.freeze({x:0,y:2.4,z:.9,pitch:-.384,fov:52}),xo=new cn(ho.fov,1.1/.72,.2,Ne.camera.far);function eg(n=Ht.link){if(!n)return!1;const t=n.toSite(ho.x,ho.y,ho.z);return xo.position.copy(t),xo.rotation.set(ho.pitch,n.yaw+Math.PI,0,"YXZ"),xo.updateMatrixWorld(!0),!0}const me=db({worlds:Ht,walker:Tt,audio:Ae,portal:Ti,camera:ye,doors:Z.doors}),lh=9,Fb=Object.freeze(Object.keys(dn));let ui=Fb.find(n=>dn[n]===_n)??null,ds=-1,pu=null;const en=JS({landings:dn,sites:Kn}),uh=()=>en.selected,uc=()=>ds>=0;function ng(){return uc()?"Navigation: the ship is already between places.":en.list(ui).some(t=>t.selectable)?($b(),"Navigation: coordinates."):"Navigation: no coordinates the ship can reach from here."}function kb(){var e;const n=uh();pu=n,ds=0,Ao(!1),ko(null),Ht.setLink(null),me.seed();const t=dn[n];return`The ship dematerialises. Next stop: ${((e=Kn[t.site])==null?void 0:e.name)??t.site}.`}function zb(n){var e;const t=dn[n];xh(t.site,t,{present:!1}),ui=n,en.clear(),en.objective===n&&en.setObjective(null),Z.console.setLamp(4,!1),Z.rotor.setRunning(!1),te(`The ship settles. Outside is ${((e=Kn[t.site])==null?void 0:e.name)??t.site}.`)}const Jl={1:()=>{te(Hb())},2:()=>{te(ig())},3:()=>{te(sg())},4:()=>{te(ng())},5:()=>{te(Tc())},6:()=>{te(hh())}};function ig(){const n=!Z.fittings.shuttersOpen;return Z.fittings.setShutters(n),Z.fittings.setScanner(n),n?"The scanner shutters grind open. The screen lights, and shows nothing.":"The scanner shutters close over the screen."}function sg(){return Z.fittings.dispense(),"The food machine delivers a bar. It is, allegedly, bacon and eggs."}function Tc(){if(!Z.rotor.running&&!Z.doors.flightReady)return Z.doors.state!=="shut"?"Flight: the doors are open.":"Flight: the doors must be locked before the ship will move.";if(uc()){const n=Math.max(0,lh-ds);return`The ship is in flight. It will land when it lands — about ${Math.ceil(n)} seconds.`}return!Z.rotor.running&&!uh()?"Flight: no coordinates set. The navigation panel first.":(Z.rotor.setRunning(!Z.rotor.running),Z.rotor.running?`The time rotor begins to rise and fall. ${kb()}`:"The rotor settles, and the room goes quiet.")}function mu(n){const t=_i.read(n);return Dr.show(t),Ns=0,!Z.fittings.shuttersOpen||!Z.fittings.scannerOn?`${t.title}: ${t.lines[0]} (the scanner is shut)`:`${t.title}: ${t.lines[0]}`}function hh(){var i;Z.fittings.pulseFault(),Z.lighting.pulseAlert(4);const n=Ht.link?`site.${Ht.exterior.id}`:"site.vortex",t=Ht.link?((i=Kn[Ht.exterior.id])==null?void 0:i.name)??Ht.exterior.id:"the vortex",e=_i.read({id:n,label:t});return Dr.show(e),Ns=0,`The fault locator runs a query. ${e.title}: ${e.lines[0]}`}function dh(n){return n===Tt}const Ql=new B;function ip(){if(Tt.world.id===de)return Tt.position.z;const n=Ht.link;if(n)return Ql.copy(Tt.position),n.toInterior(Ql,Ql).z}function rg(){if(!dh(Tt))return"There is a keyhole. You do not have a key.";if(Z.doors.open)return"Door control: the doors must be shut before they will lock.";if(Z.rotor.running)return"Door control: the ship is in flight.";const n=!Z.doors.locked,t=Z.doors.setLocked(n,{running:Z.rotor.running});return Z.doors.locked!==n?t:n?"The key turns, and the bolts drive home.":"The key turns, and the bolts draw back."}function gu(n=!1){if(n&&Z.doors.locked&&!Z.doors.open&&dh(Tt)){const t=Z.doors.setLocked(!1,{running:Z.rotor.running});return Z.doors.locked?t:`The key turns. ${Z.doors.request(!0,{fittings:Z.fittings,rotor:Z.rotor,walker:Tt,atShell:n,playerZ:ip()})}`}return n&&Z.doors.locked&&!Z.doors.open?"The doors are locked, and you do not have a key.":Z.doors.request(!Z.doors.open,{fittings:Z.fittings,rotor:Z.rotor,walker:Tt,atShell:n,playerZ:ip()})}function Hb(){return Z.doors.setLocked(!Z.doors.locked,{rotor:Z.rotor})}const sp={hatStand:"A hat stand. There is a hat on it.",chair:"A high-backed hall chair, out of a house that is nowhere near here.",clock:"An ormolu clock. It keeps perfect time, which proves nothing."},Bb={alleyPhone:"Dead. Whatever was on the line has finished with it.",alleyFireDoor:"Shut, and it opens the other way. Not yet."};Tt.onInteract(n=>{var t;switch(n.action){case"panel":{const e=n.data.panel;Z.console.setLamp(e,!0),te(n.label),(t=Jl[e])==null||t.call(Jl);break}case"doors":te(gu());break;case"shellDoors":te(gu(!0));break;case"shellLock":te(rg());break;case"scanner":te(ig());break;case"faultLocator":te(hh());break;case"foodMachine":te(sg());break;case"rotor":te(Tc());break;case"alleyPhone":case"alleyFireDoor":{const e=Ce.wants("interact",n.action),i=Ce.fire("interact",n.action);i?te(i):e||te(Bb[n.action]);break}default:sp[n.action]&&te(sp[n.action])}});const Be=document.createElement("div");Be.style.cssText="position:fixed;inset:0;pointer-events:none;font:14px/1.4 system-ui,-apple-system,Segoe UI,sans-serif;color:#e8e6df;text-shadow:0 1px 3px rgba(0,0,0,.9)";Be.innerHTML=`
<div id="x" style="position:absolute;left:50%;top:50%;width:5px;height:5px;margin:-2.5px 0 0 -2.5px;
     border-radius:50%;background:rgba(232,230,223,.55);box-shadow:0 0 2px #000"></div>
<div id="prompt" style="position:absolute;left:50%;top:calc(50% + 26px);transform:translateX(-50%);
     white-space:nowrap;opacity:0"></div>
<div id="say" style="position:absolute;left:50%;bottom:11%;transform:translateX(-50%);
     white-space:nowrap;opacity:0;transition:opacity .25s"></div>
<!-- THE OBJECTIVE, TOP-LEFT, AND IT IS THE ONLY PERMANENT TEXT ON SCREEN.
     Ben's own words about what an episode needs: "clearly shows where the next
     main story beat will be". The say line is transient and the prompt is under
     the crosshair; neither answers "what am I doing here" for a player who
     has looked away for a minute, and a player who cannot answer that stops
     playing. It is a GUTTER, not a panel: no background, no border, 12 px, and
     the act and scene above it in the small caps a script uses. -->
<div id="obj" style="position:absolute;left:22px;top:18px;display:none;max-width:44vw">
  <div id="objScene" style="font-size:9px;letter-spacing:.22em;opacity:.48"></div>
  <div id="objLine" style="margin-top:5px;font-size:12.5px;letter-spacing:.02em;color:#ffb457"></div>
  <div id="objNote" style="margin-top:3px;font-size:11px;opacity:.58;font-style:italic"></div>
</div>
<!-- THE SCENE CARD. Held on screen at a checkpoint and at the end of a scene,
     because a 45-minute episode in sections needs the seams to be legible —
     a scene that ends by the objective line simply changing reads as a bug. -->
<div id="card" style="position:absolute;inset:0;display:none;align-items:center;justify-content:center;
     background:rgba(5,7,9,.82);text-align:center;letter-spacing:.02em">
  <div>
    <div id="cardKind" style="font-size:10px;letter-spacing:.34em;opacity:.6"></div>
    <div id="cardTitle" style="margin-top:14px;font-size:clamp(20px,3.4vw,34px);font-weight:200;
         letter-spacing:.22em;text-indent:.22em"></div>
    <div id="cardNote" style="margin-top:16px;font-size:12px;opacity:.62;letter-spacing:.08em"></div>
  </div>
</div>
<div id="lock" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
     background:rgba(6,8,10,.55);letter-spacing:.06em;text-align:center">
  <div>CLICK TO LOOK AROUND &nbsp;·&nbsp; WASD, E, ESC</div></div>
<div id="title" style="position:absolute;inset:0;display:flex;flex-direction:column;
     align-items:center;justify-content:center;text-align:center;letter-spacing:.02em;
     pointer-events:auto;cursor:pointer">
  <!-- A SCRIM, AND IT IS NOT TIMIDITY ABOUT THE BACKGROUND. The vortex blows
       out to white at the throat, which is exactly where a centred title sits —
       MEASURED on the first shot: the series line and the controls were bone
       white text on a bone white field and could not be read at all. A radial
       darkening keeps the field visible at the edges, where it is most legible
       as a moving thing, and buys the text the middle. -->
  <div style="position:absolute;inset:0;pointer-events:none;
       background:radial-gradient(ellipse 62% 54% at 50% 48%,
         rgba(6,8,11,.80) 0%, rgba(6,8,11,.62) 42%, rgba(6,8,11,.10) 78%, transparent 100%)"></div>
  <div style="position:relative;font-size:clamp(34px,7.2vw,86px);font-weight:200;letter-spacing:.30em;
       text-indent:.30em;line-height:1;
       text-shadow:0 0 34px rgba(180,210,255,.40),0 2px 10px #000,0 0 3px #000">DOCTOR WHO</div>
  <div style="position:relative;margin-top:18px;font-size:clamp(10px,1.5vw,13px);letter-spacing:.42em;
       text-indent:.42em;opacity:.72;text-shadow:0 1px 6px #000">SERIES ONE &nbsp;·&nbsp; EPISODE ONE</div>
  <div style="position:relative;margin-top:7px;font-size:clamp(14px,2.3vw,21px);font-weight:300;
       letter-spacing:.18em;text-indent:.18em;text-shadow:0 1px 8px #000">THE FREQUENCY</div>
  <div id="titleStart" style="position:relative;margin-top:44px;padding:12px 36px;
       border:1px solid rgba(232,230,223,.52);border-radius:2px;font-size:13px;letter-spacing:.26em;
       text-indent:.26em;cursor:pointer;background:rgba(8,11,14,.72);
       text-shadow:0 1px 4px #000">START</div>
  <div style="position:relative;margin-top:24px;font-size:11px;letter-spacing:.10em;opacity:.62;
       line-height:1.9;text-shadow:0 1px 5px #000">
    WASD MOVE &nbsp;·&nbsp; MOUSE LOOK &nbsp;·&nbsp; E INTERACT<br>
    Q SONIC &nbsp;·&nbsp; RIGHT-CLICK AIM &nbsp;·&nbsp; ESC RELEASE
  </div>
</div>
<div id="dlg" style="position:absolute;left:50%;bottom:8%;transform:translateX(-50%);display:none;
     width:min(760px,86vw);padding:16px 20px 14px;background:rgba(10,13,16,.9);
     border:1px solid rgba(232,230,223,.20);border-radius:3px">
  <div id="dlgWho" style="letter-spacing:.15em;font-size:10px;opacity:.55;margin-bottom:7px"></div>
  <div id="dlgText" style="font-size:16px;line-height:1.45"></div>
  <div id="dlgOpts" style="margin-top:13px"></div>
</div>
<div id="nav" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:none;
     min-width:340px;padding:18px 22px 14px;background:rgba(10,13,16,.88);
     border:1px solid rgba(232,230,223,.22);border-radius:3px">
  <div style="letter-spacing:.16em;font-size:11px;opacity:.62;margin-bottom:12px">NAVIGATION</div>
  <div id="navRows"></div>
  <div style="margin-top:13px;padding-top:9px;border-top:1px solid rgba(232,230,223,.13);
       font-size:11px;opacity:.5;letter-spacing:.05em">W / S &nbsp; SELECT &nbsp;·&nbsp; E &nbsp; SET COURSE &nbsp;·&nbsp; ESC &nbsp; CLOSE</div>
</div>`;document.body.appendChild(Be);const t0=Be.querySelector("#prompt"),_u=Be.querySelector("#say"),Rc=Be.querySelector("#lock"),rp=Be.querySelector("#obj"),Gb=Be.querySelector("#objScene"),Wb=Be.querySelector("#objLine"),op=Be.querySelector("#objNote"),og=Be.querySelector("#card"),Vb=Be.querySelector("#cardKind"),qb=Be.querySelector("#cardTitle"),ap=Be.querySelector("#cardNote"),cp=Be.querySelector("#dlg"),Xb=Be.querySelector("#dlgWho"),e0=Be.querySelector("#dlgText"),lp=Be.querySelector("#dlgOpts");function fo(){if(!Re.active){cp.style.display="none";return}cp.style.display="block";const n=Re.who;Xb.textContent=n&&n!=="SYSTEM"?n:"",e0.textContent=Re.text,e0.style.fontStyle=!n||n==="SYSTEM"?"italic":"normal",e0.style.opacity=!n||n==="SYSTEM"?".82":"1";const t=Re.options;if(!t.length){lp.innerHTML='<div style="font-size:11px;opacity:.5;letter-spacing:.05em">E &nbsp; CONTINUE</div>';return}lp.innerHTML=t.map((e,i)=>{const s=i===Re.cursor,r=e.only==="doctor"?"DOCTOR":e.trait||null,o=s?"#ffb457":"rgba(232,230,223,.72)",a=r?`<span style="font-size:9px;letter-spacing:.12em;opacity:.8">&nbsp;&nbsp;[${r}]</span>`:"";return`<div style="padding:2px 0;color:${o};${s?"font-weight:600":""}"><span style="display:inline-block;width:14px;opacity:.8">${s?"›":" "}</span>${e.text}${a}</div>`}).join("")+'<div style="margin-top:9px;font-size:11px;opacity:.5;letter-spacing:.05em">W / S &nbsp; CHOOSE &nbsp;·&nbsp; E &nbsp; SAY IT</div>'}function ag(n){return Re.active?"Already talking.":Re.has(n)?(Tt.releaseKeys(),Re.start(n),fo(),null):`Nothing to say (${n}).`}addEventListener("keydown",n=>{if(!Re.active)return;const t=n.code;if(t!=="KeyW"&&t!=="KeyS"&&t!=="ArrowUp"&&t!=="ArrowDown"&&t!=="KeyE"&&t!=="Enter"&&t!=="Escape")return;if(n.preventDefault(),n.stopPropagation(),t==="Escape"){if(Re.options.length)return;const s=Re.id;if(Re.end(),fo(),s){const r=Ce.fire("talk",s);r&&te(r)}return}if(t==="KeyW"||t==="ArrowUp"){Re.move(-1),fo();return}if(t==="KeyS"||t==="ArrowDown"){Re.move(1),fo();return}const e=Re.id,i=Re.choose();if(fo(),i==="ended"&&e){const s=Ce.fire("talk",e);s&&te(s)}},!0);const cg=Be.querySelector("#nav"),Yb=Be.querySelector("#navRows");let hc=!1;function xu(){const n=en.list(ui);Yb.innerHTML=n.map(t=>{const e=t.key===en.selected,i=t.here?"rgba(232,230,223,.34)":t.locked?"rgba(232,230,223,.30)":t.objective?"#ffb457":"#e8e6df",s=e?"›":" ",r=t.here?'<span style="opacity:.7">&nbsp;— you are here</span>':t.locked?`<span style="opacity:.7">&nbsp;— ${t.locked}</span>`:t.objective?'<span style="letter-spacing:.14em;font-size:10px;opacity:.85">&nbsp;&nbsp;NEXT</span>':"",o=t.objective&&t.note?`<div style="margin:1px 0 4px 20px;font-size:11px;opacity:.62;font-style:italic">${t.note}</div>`:"";return`<div style="padding:3px 0;color:${i};${e?"font-weight:600":""}"><span style="display:inline-block;width:14px;opacity:.8">${s}</span>${t.name}${r}</div>${o}`}).join("")}function $b(){hc||(hc=!0,en.selectObjective(ui),Tt.releaseKeys(),xu(),cg.style.display="block")}function up(){hc=!1,cg.style.display="none"}addEventListener("keydown",n=>{var s;if(!hc)return;const t=n.code;if(t!=="KeyW"&&t!=="KeyS"&&t!=="ArrowUp"&&t!=="ArrowDown"&&t!=="KeyE"&&t!=="Enter"&&t!=="Escape")return;if(n.preventDefault(),n.stopPropagation(),t==="Escape"){up(),te("Navigation: no course set.");return}if(t==="KeyW"||t==="ArrowUp"){en.move(-1,ui),xu();return}if(t==="KeyS"||t==="ArrowDown"){en.move(1,ui),xu();return}const e=en.selected;if(up(),!e){te("Navigation: no coordinates the ship can reach from here.");return}const i=dn[e];Z.console.setLamp(4,!0),te(`Navigation: coordinates set for ${((s=Kn[i.site])==null?void 0:s.name)??i.site}.`)},!0);let Ga=0,vu=0;function te(n){_u.textContent=n,_u.style.opacity="1",Ga=4}const fh=Be.querySelector("#title");function lg(){Zn.up&&(Zn.dismiss(),fh.style.display="none",Ae.unlock(),Tt.requestLock(),vu=me.crossings,Ce.begin(),pg(),Rc.style.display=Tt.paused?"flex":"none")}Tt.lockWhen(()=>!Zn.up);fh.addEventListener("click",lg);addEventListener("keydown",n=>{Zn.up&&(n.code!=="Enter"&&n.code!=="Space"&&n.code!=="NumpadEnter"||(n.preventDefault(),lg()))},!0);Tt.onPause(n=>{Rc.style.display=n&&!Zn.up?"flex":"none"});Rc.style.display=Tt.paused&&!Zn.up?"flex":"none";document.addEventListener("pointerlockerror",()=>{Tt.paused&&(Rc.innerHTML='<div>POINTER LOCK REFUSED BY THIS FRAME<div style="opacity:.7;font-size:12px;letter-spacing:0;margin-top:8px">Open http://localhost:5290 in a real browser tab, or drive it from the console:<br>game.update(dt) &nbsp;·&nbsp; shot(name, pose)</div></div>')},{once:!0});let hp=null;function jb(n){const t=$n.aiming?$n.target(ye,Ht.near.build):null,e=t||Tt.prompt,i=t?`sonic:${t.id}`:e?e.id:null;i!==hp&&(hp=i,t0.textContent=t?`▸  ${t.label}`:e?`[E]  ${e.label}`:"",t0.style.opacity=e?"1":"0",t0.style.color=t?"#8fd0ff":""),Ga>0&&(Ga-=n,Ga<=0&&(_u.style.opacity="0"))}const n0=1/60,Kb=.25;let i0=0;function je(n){const t=Math.min(Math.max(n||0,0),Kb);i0+=t;let e=0;for(;i0+1e-9>=n0&&e<8;)Tt.update(n0),me.step(),i0-=n0,e++;if(me.crossings!==vu&&(vu=me.crossings,Ht.near.id!==de)){const i=Ce.fire("enter",Ne.id);i&&te(i)}if(cA(t),pg(),Va>0&&(Va-=t,Va<=0&&(og.style.display="none")),Z.doors.update(t),Z.rotor.update(t),Z.fittings.update(t),Z.console.update(t),Re.active&&Tt.releaseKeys(),Zn.update(t),$n.update(t),$n.setMood(Nb(Ht.near)),ds>=0&&(ds+=t,ds>=lh)){const i=pu;ds=-1,pu=null,zb(i)}Z.lighting.setRotorDrive(Z.rotor.drive),lc.uniforms.uTime.value+=t*(.25+1.75*Z.rotor.drive),Dr.update(t),Ns>=0&&(Ns+=t,Ns>=9&&(Ns=-1,Dr.clear())),Z.lighting.setDoorSpill(Z.doors.t),Z.lighting.update(t),nA(),Ie.update(t),Ie.setDoorSpill(Z.doors.t),Ae.setDoorFraction(Z.doors.t),Ae.update(t),jb(t)}const s0=new B,Zb=new B,Jb=6;function ug(){return!Z.fittings.shuttersOpen||!Z.fittings.scannerOn||Tt.world.id!==de?null:Ns>=0?"readout":Ht.link?"feed":"vortex"}function Qb(){const n=ug(),t=Z.fittings.screen;if(n==="readout"){t.material!==Dr.material&&(t.material=Dr.material);return}if(n==="vortex"){t.material!==lc&&(t.material=lc);return}if(n==="feed"){t.material!==Ba.material&&(t.material=Ba.material),t.getWorldPosition(s0),s0.distanceTo(ye.position)<Jb&&ye.getWorldDirection(Zb).dot(s0.sub(ye.position).normalize())>.2&&eg()&&Ba.render(hi,xo);return}}function Gn(){if(Zn.pass(_e))return;_e.info.reset(),ye.updateMatrixWorld(!0),Qb();const n=Ht.liveLink(ye,Z.doors);n&&Ti.pass(n,Ht.near,Ht.far),Ht.near.cap.visible=!!n,Ti.setLive(!!n),_e.render(Ht.near.scene,ye),$n.pass(_e,ye)}const tA="KeyQ";addEventListener("keydown",n=>{var e;if(n.code!==tA||n.repeat||!Tt.locked)return;n.preventDefault();const t=$n.toggle();(e=Ae==null?void 0:Ae.play)==null||e.call(Ae,t?"sonic_draw":"sonic_stow")});addEventListener("mousedown",n=>{var t;if(!(!Tt.locked||!$n.out)){if(n.button===2){$n.setAim(!0);return}if(n.button===0){if(!$n.fire())return;const e=$n.target(ye,Ht.near.build);(t=Ae==null?void 0:Ae.play)==null||t.call(Ae,"sonic_use"),e&&typeof e.use=="function"?e.use({by:"sonic",at:e}):te(mu(e||null))}}});addEventListener("mouseup",n=>{n.button===2&&$n.setAim(!1)});addEventListener("contextmenu",n=>{Tt.locked&&n.preventDefault()});let dp=performance.now();function hg(n){requestAnimationFrame(hg);const t=(n-dp)/1e3;dp=n,je(t),Gn()}requestAnimationFrame(hg);addEventListener("resize",()=>{const n=innerWidth,t=innerHeight;!n||!t||(_e.setPixelRatio(Math.min(devicePixelRatio||1,2)),_e.setSize(n,t,!1),ye.aspect=n/t,ye.updateProjectionMatrix(),Ti.resize())});const eA={renderer:_e,scene:gi,camera:ye,build:yn,palette:vs,walker:Tt,api:Z,audio:Ae,siteScene:hi,site:Ie,box:$e,worlds:Ht,portal:Ti,threshold:me,SITE:Ne,buildSite:xs,buildBox:oh,get link(){return Ht.link},get landing(){return Ht.link.landing},update:je,render:Gn,get drawCalls(){return _e.info.render.calls},get world(){return Ht.near.id}};window.scanner={feed:Ba,vortex:lc,scanCam:xo,aimScanCam:eg,get src(){return ug()}};window.game=eA;window.audio=Ae;window.doors=function(t,e={}){if(e.now)return Z.doors.force(t===void 0?!Z.doors.open:!!t),`doors ${Z.doors.state} (forced)`;const i=e.force?Z.doors.request(t===void 0?!Z.doors.open:!!t,{fittings:Z.fittings,rotor:Z.rotor,walker:Tt,force:!0}):gu(!!e.atShell);return`${Z.doors.lastAction}: ${i}`};window.step=function(t=1){const e=Math.max(1,Math.round(t*60));for(let i=0;i<e;i++)je(1/60);return Gn(),{world:Ht.near.id,doors:Z.doors.state,t:+Z.doors.t.toFixed(3),drawCalls:_e.info.render.calls,crossings:me.crossings}};window.walk=function(t=1,e={}){const i=t>=0?"KeyW":"KeyS",s=Math.abs(t),r=me.crossings,o=Tt._locked;Tt._locked=!0,Tt._down.add(i),e.run&&Tt._down.add("ShiftLeft");let a=0;const c=Tt.position.clone();let l=0;for(;a<s&&l++<1800;){const u=Ht.near;je(1/60),Ht.near===u&&(a+=c.distanceTo(Tt.position)),c.copy(Tt.position)}Tt._down.delete(i),Tt._down.delete("ShiftLeft"),Tt._locked=o;for(let u=0;u<20;u++)je(1/60);return Gn(),{world:Ht.near.id,pos:[+Tt.position.x.toFixed(3),+Tt.position.y.toFixed(3),+Tt.position.z.toFixed(3)],moved:+a.toFixed(3),crossed:me.crossings-r,drawCalls:_e.info.render.calls}};window.look=function(t,e){return t!==void 0&&(Tt.yaw=t),e!==void 0&&(Tt.pitch=e),je(1/60),Gn(),{yaw:+Tt.yaw.toFixed(4),pitch:+Tt.pitch.toFixed(4)}};window.go=function(t,e,i){return Tt.teleport(t,0,e,i),me.seed(),je(1/60),Gn(),window.where()};window.cross=function(){const t=Ht.near.id;return me.force(Ht.far.id),je(1/60),Gn(),`${t} -> ${Ht.near.id}`};window.atDoor=function(t=2.2){const e=Ht.link,i=t>=0;i!==(Ht.near.id!==de)&&me.force(i?Ne.id:de);const s=new B(0,0,Dn+t),r=i?e.toExterior(s):s,o=i?e.landing.yaw+Math.PI:0;return Tt.teleport(r.x,0,r.z,o),Tt.pitch=.02,me.seed(),je(1/60),Gn(),window.where()};window.atDoorOff=function(t=1.6,e=1.1,i=1.2){const s=Ht.link;Ht.near.id===de&&me.force(Ne.id);const r=s.toExterior(new B(e,0,Dn+t)),o=s.toExterior(new B(0,0,Dn-i)),a=Math.atan2(o.x-r.x,o.z-r.z);return Tt.teleport(r.x,0,r.z,a),Tt.pitch=.04,me.seed(),je(1/60),Gn(),window.where()};window.where=function(){const t=Tt.position;return{world:Ht.near.id,pos:[+t.x.toFixed(3),+t.y.toFixed(3),+t.z.toFixed(3)],yaw:+Tt.yaw.toFixed(4),doors:Z.doors.state,portalLive:!!Ht.liveLink(ye,Z.doors),drawCalls:_e.info.render.calls,near:+Ti.near.toFixed(4),bedMix:+me.bedMix.toFixed(3),crossings:me.crossings}};function ph(n=Ht.link){const t=n.toExterior(new B(0,0,Dn-.25));Ie.doorSpill.position.set(t.x,1.1,t.z)}const zo={id:"shellDoors",label:"Doors",pos:new B,action:"shellDoors",data:{},radius:1.6},mh={id:"shellLock",label:"Keyhole",pos:new B,action:"shellLock",data:{},radius:1.1};function gh(n=Ht.link){n.toSite(0,1.2,.95,zo.pos),n.toSite(.135,1.25,.82,mh.pos)}function nA(){zo.label=Z.doors.locked?"Doors — locked":Z.doors.moving?"Doors":Z.doors.open?"Close the doors":"Open the doors",mh.label=dh(Tt)?Z.doors.open?"Keyhole":Z.doors.locked?"Unlock the doors":"Lock the doors":"Keyhole"}gh(Fr);const _h={id:"alleyPhone",label:"Telephone",pos:new B,action:"alleyPhone",data:{},radius:1.6},dg={id:"alleyFireDoor",label:"Fire door",pos:new B,action:"alleyFireDoor",data:{},radius:1.6},iA=[{anchor:_h,kind:"wallPhone",reach:1.6,local:[-.148,1.19,.118]},{anchor:dg,kind:"fireDoor",reach:1.6,local:[0,1.02,.11]}];function sA(n=Ne){for(const t of iA){const e=(n.props??[]).find(l=>l.kind===t.kind);if(!e){t.anchor.radius=-1;continue}t.anchor.radius=t.reach;const[i,s,r]=t.local,o=e.scale??1,a=Math.cos(e.yaw??0),c=Math.sin(e.yaw??0);t.anchor.pos.set(e.x+(i*a+r*c)*o,s*o,e.z+(-i*c+r*a)*o)}}function fg(){xs.interactables.push(zo,mh,_h,dg),sA()}fg();const rA=zo.radius;function Ao(n){Pn.visible=n,$e.leaves.visible=n,$e.lamp.visible=n,cs.visible=n,zo.radius=n?rA:-1}window.nav=function(){const t=ng();return te(t),t};window.ship=Object.freeze({nav:Object.freeze({known:(n,t=!0)=>(en.setKnown(n,t),`nav: ${n} ${t?"known":"forgotten"}`),lock:(n,t)=>(en.setLocked(n,t),`nav: ${n} ${t?"locked — "+t:"unlocked"}`),objective:(n,t=null)=>(en.setObjective(n,t),`nav: next beat is ${n??"none"}`),list:()=>en.list(ui),get here(){return ui}}),fly:n=>{if(n){const t=en.select(n,ui);if(t)return`nav: ${t}`}return Tc()},talk:Object.freeze({load:(n,t)=>(Re.load(n,t),`dialogue: ${n} loaded`),open:n=>ag(n)??`dialogue: ${n}`,has:n=>Re.has(n),get active(){return Re.active},get flags(){return Re.flags}}),learn:n=>Ub(n)?`learned: ${n}`:`already known: ${n}`,knows:n=>bc(n),analyse:Object.freeze({register:(n,t)=>(_i.register(n,t),`analyse: ${n} registered`),forget:n=>(_i.forget(n),`analyse: ${n} forgotten`),read:n=>_i.read(n),knows:n=>_i.has(n),get known(){return _i.known}}),save:()=>({here:ui,nav:en.save(),analyse:_i.save(),dialogue:Re.save(),doors:{locked:Z.doors.locked}}),restore:n=>(n!=null&&n.nav&&en.restore(n.nav),n!=null&&n.analyse&&_i.restore(n.analyse),n!=null&&n.dialogue&&Re.restore(n.dialogue),"ship: restored")});const oA=lE(window.ship),Ce=uE({ship:window.ship,say:te,knows:bc,onBeat:n=>{n.cue==="ring.on"&&(Wa=!0),n.cue==="ring.off"&&(Wa=!1),n.end&&(Wa=!1,pp("END OF SCENE",n.sceneTitle,"The basement is not built yet — this is where Scene 1 stops."))},onCheckpoint:n=>{({...window.ship.save(),episode:Ce.save()},Ce.done.length>1&&pp("CHECKPOINT",n.sceneTitle,null))}});Ce.load(oA.episode);Ac=n=>{const t=Ce.fire("flag",n);t&&te(t)};let Wa=!1,Ra=0;const aA=3;function cA(n){if(!Wa){Ra=0;return}Ra-=n,!(Ra>0)&&(Ra=aA,Ae.play("phone_ring",{at:_h.pos}))}let fp=null;function pg(){var e;const n=`${((e=Ce.beat)==null?void 0:e.id)??""}|${Zn.up?1:0}`;if(n===fp)return;fp=n;const t=Ce.objective;if(!t||Zn.up){rp.style.display="none";return}rp.style.display="block",Gb.textContent=`${Ce.act} · ${Ce.scene}`,Wb.textContent=t,op.textContent=Ce.note??"",op.style.display=Ce.note?"block":"none"}let Va=0;function pp(n,t,e){Vb.textContent=n,qb.textContent=t??"",ap.textContent=e??"",ap.style.display=e?"block":"none",og.style.display="flex",Va=4}window.episode=Ce;window.beat=function(){const t=Ce.beat,e=t?{act:t.act,scene:t.scene,beat:t.id,trigger:t.trigger,at:t.at??null,objective:t.objective??null,needs:t.needs??[],done:Ce.done.length}:{beat:null,begun:Ce.begun,over:Ce.over,done:Ce.done.length};return te(t?`${t.id}: ${t.objective??t.trigger}`:"no beat"),e};window.skipBeat=function(){const t=Ce.beat;if(!t)return"no beat";const e=Ce.fire(t.trigger,t.at);return e?(te(e),e):`fired ${t.id}`};window.talk=function(t){const e=ag(t);return e&&te(e),e??t};window.keyhole=function(){const t=rg();return te(t),t};window.diagnose=function(){const t=hh();return te(t),t};window.analyse=function(t){const e=mu(t);return te(e),e};window.fly=function(){const t=Tc();return te(t),t};window.plan=function(){return{here:ui,dest:uh(),inFlight:uc(),secondsLeft:uc()?+(lh-ds).toFixed(1):null}};window.depart=function(){return Ht.link?(Z.doors.forceT(0),Z.doors.setLocked(!0,{running:!1}),Ao(!1),ko(null),Ht.setLink(null),me.seed(),je(1/60),Gn(),`the box has left ${Ne.id} — ${Tt.world.id===de?"you are aboard":"you are not"}`):"the box is already away"};function r0(n){const t=new Set;n.traverse(e=>{e.geometry&&e.geometry.dispose();const i=e.material;i&&(Array.isArray(i)?i:[i]).forEach(s=>t.add(s))});for(const e of t){for(const i of["map","normalMap","roughnessMap","aoMap","alphaMap","emissiveMap","bumpMap"])e[i]&&e[i].dispose&&e[i].dispose();e.dispose()}return t.size}function xh(n,t=null,{present:e=!0}={}){const i=Kn[n];if(!i)return`unknown site: ${n} (${Object.keys(Kn).join(", ")})`;if(Tt.world.id!==de)return"travelTo: you are standing outside. Come in and shut the doors first.";const s=(typeof t=="string"?dn[t]:t)??Object.values(dn).find(o=>o.site===n);if(!s)return`travelTo: site '${n}' has no landing in LANDINGS`;if(s.site!==n)return`travelTo: landing is at '${s.site}', not '${n}'`;Ht.remountExterior({id:i.id}),Ao(!1),hi.remove(uo,Ie.live,cs),r0(uo),r0(Ie.live),r0(cs),Ne=i,{bSite:xs,site:Ie,bakedSite:uo,boxContact:cs}=Qm(Ne,s),hi.fog=Ie.fog,hi.add(uo,Ie.live,cs),Pn.position.set(s.x,0,s.z),Pn.rotation.y=s.yaw,$e.leaves.position.copy(Pn.position),$e.leaves.rotation.y=s.yaw,$e.lamp.position.set(s.x,$e.lamp.position.y,s.z),Pn.updateMatrixWorld(!0),Ie.placeContact(cs,s.x,s.z),Pb(),Ht.remountExterior({id:Ne.id,build:xs,surface:Ie.surface,beds:Ie.bedIds,dist:Ie.distance,update:Ie.update});const r=nh(s,Kn);return ko(r),Ao(!0),Ht.setLink(r),ph(r),gh(r),fg(),Z.lighting.setDoorSpillColour(Ne.sun.colour),me.seed(),Ae.setSiteBeds(Ie.beds),e&&(je(1/60),Gn()),`arrived at ${Ne.name} (${Ne.id}) — ${s.x}, ${s.z}`}window.travel=xh;window.arrive=function(t){const e=typeof t=="string"?dn[t]:t;if(!e)return`unknown landing: ${t} (${Object.keys(dn).join(", ")})`;if(e.site!==Ne.id)return xh(e.site,e);Pn.position.set(e.x,0,e.z),Pn.rotation.y=e.yaw,$e.leaves.position.copy(Pn.position),$e.leaves.rotation.y=e.yaw,$e.lamp.position.set(e.x,$e.lamp.position.y,e.z),Pn.updateMatrixWorld(!0),Ie.placeContact(cs,e.x,e.z);const i=nh(e,Kn);return ko(i),Ao(!0),Ht.setLink(i),ph(i),gh(i),me.seed(),je(1/60),Gn(),`box at ${e.x}, ${e.z} yaw ${e.yaw} — ${window.where().world}`};window.place=window.arrive;window.help=function(){return["doors(open?, {now})  open/shut the doors (now: instant, no interlock)","step(seconds)        advance the clock; rAF is frozen in this pane","walk(metres, {run})  walk through the real solver AND the real threshold","look(yaw, pitch)     yaw 0 = +Z = the doors from inside","go(x, z, yaw)        teleport within the current world","cross()              step through the threshold without walking","place(landing)       move the TARDIS. "+Object.keys(dn).join(" / "),"atDoor(m)            stand m metres out on the door axis, facing the doors","                     (+ outside on the plain, - inside the room)","where()              world, pose, doors, portal state, draw calls","shot(name, pose)     pose takes {world, landing, doors, pos, yaw, pitch, free}","shotAll()            the interior suite; shotThreshold() the new one",`sfx(id)              fire one sound. sfx() lists all ${Object.keys(_o).length}.`,"","beat()               where the episode is and what it is waiting for","skipBeat()           fire the current beat, whatever it wanted","talk(id)             open a conversation. episode.beats lists the scene","analyse(id)          read a thing the way the sonic does","nav() / fly()        the navigation menu and the rotor"].join(`
`)};window.sfx=function(t,e){if(t===void 0)return Object.keys(_o);if(!_o[t])return`no such sound: ${t} (${Object.keys(_o).length} in the catalogue)`;if(Ae.unlock(),!Ae.available)return"no AudioContext — click the page once, then try again";if(Ae.muted)return"muted — press N, or audio.setMuted(false)";const i=Ae.play(t,e||{});return i?i.endsAt??i:`dropped: ${t} (voice limit, or no anchor for its spot)`};window.shot=async function(t="shot",e=null){e&&(e.world&&e.world!==Ht.near.id&&me.force(e.world),e.doors!==void 0&&Z.doors.force(e.doors>0),e.pos&&Tt.teleport(e.pos[0],e.pos[1]??0,e.pos[2],e.yaw),e.yaw!==void 0&&(Tt.yaw=e.yaw),e.pitch!==void 0&&(Tt.pitch=e.pitch),me.seed()),Zn.up&&(Zn.dismiss(),fh.style.display="none");const i=1280,s=720,r=_e.getPixelRatio(),o=_e.getSize(new Bt),a=ye.aspect;r!==1&&_e.setPixelRatio(1),_e.setSize(i,s,!1),ye.aspect=i/s,ye.updateProjectionMatrix(),Ti.resize();const c=Math.max(1,(e==null?void 0:e.settle)??90);for(let h=0;h<c;h++)je(1/60);e!=null&&e.free&&(Tt.driveCamera=!1,ye.position.set(...e.free.pos),ye.lookAt(...e.free.look),ye.updateMatrixWorld(!0)),Gn(),e!=null&&e.free&&(Tt.driveCamera=!0);const l=Zm.toDataURL("image/png");return r!==1&&_e.setPixelRatio(r),o.x>0&&o.y>0&&(_e.setSize(o.x,o.y,!1),ye.aspect=a,ye.updateProjectionMatrix()),Ti.resize(),(await fetch("http://localhost:5299/shot",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:t,dataURL:l})})).json()};window.shotAll=async function(){const t=[["entry",{pos:[0,0,2.3],yaw:Math.PI,pitch:-.04}],["console-axis",{pos:[0,0,-2.03],yaw:0,pitch:-.16}],["rotor",{pos:[0,0,2.03],yaw:Math.PI,pitch:.34}],["roundels",{pos:[0,0,-1.7],yaw:Math.PI,pitch:.06}],["doors",{pos:[0,0,.6],yaw:0,pitch:.1}],["scanner",{pos:[1.535,0,1.535],yaw:.785398,pitch:.1}],["fault",{pos:[-1.535,0,1.535],yaw:-.785398,pitch:.02}],["victorian",{pos:[-.75,0,-.75],yaw:3.926991,pitch:-.18}],["aerial",{pos:[0,0,2.3],yaw:Math.PI,settle:90,free:{pos:[2.3,2.95,2.3],look:[0,.95,0]}}]],e=[];for(const[r,o]of t)e.push(r+":"+((await shot(r,o)).ok?"ok":"FAIL"));const i=Z.fittings,s=Z.rotor;i.setShutters(!0),i.setScanner(!0),e.push("scanner-open:"+((await shot("scanner-open",{pos:[1.05,0,1.05],yaw:.785398,pitch:.1})).ok?"ok":"FAIL")),i.setShutters(!1),i.setScanner(!1);for(let r=0;r<120;r++)je(1/60);s.setRunning(!0);for(let r=0;r<600&&(je(1/60),!(s.height>s.parked+.12));r++);e.push("rotor-flight:"+((await shot("rotor-flight",{pos:[0,0,2.03],yaw:Math.PI,pitch:.34,settle:1})).ok?"ok":"FAIL")),s.setRunning(!1);for(let r=0;r<400;r++)je(1/60);return e};function mg(){const n=Ei.half-Fo,t=c=>atDoor(c+n),e=(c,l,u)=>{const h=Math.hypot(c,l),d=(h+n)/h;return atDoorOff(c*d,l*d,u)},i=(c,l,u,h)=>{const d=Math.hypot(c,l),f=(h+n)/d;return atDoorOff(c*f,l*f,u)},s=Math.tan(ye.fov*Math.PI/180/2),r=.3,o=(ke.TOP/2+r)/s;return{FACE_D:n,atFace:t,atFaceOff:e,atFaceR:i,HALF_V:s,FIT_MARGIN:r,FIT_D:o,aimAt:(c,l)=>Math.atan((c-Le.EYE)/l)}}window.shotThreshold=async function(){const t=[],e=async(h,d)=>{const f=await shot(h,d);t.push(`${h}:${f.ok?"ok":"FAIL"}:${_e.info.render.calls}`)};Ht.near.id!==de&&me.force(de);const{FACE_D:i,atFace:s,atFaceR:r,FIT_D:o,aimAt:a}=mg();Z.fittings.setShutters(!0),Z.fittings.setScanner(!0),await e("doors",{doors:0,pos:[0,0,.6],yaw:0,pitch:.1}),await e("doors-open",{doors:1,pos:[0,0,.6],yaw:0,pitch:.1}),Z.doors.forceT(.45),await e("doors-swing",{pos:[0,0,.6],yaw:0,pitch:.1,settle:1}),await e("doors-funnel",{doors:1,pos:[.5,0,2.2],yaw:0,pitch:.02}),await e("portal-out",{doors:1,pos:[0,0,1.4],yaw:0,pitch:.02}),await e("portal-near",{doors:1,pos:[0,0,3.18],yaw:0,pitch:0}),await e("threshold-a",{doors:1,pos:[0,0,3.283],yaw:0,pitch:0}),await e("threshold-b",{doors:1,pos:[0,0,3.285],yaw:0,pitch:0});const c=Ne.id,l=()=>Ht.link;await e("site-sky",{world:c,doors:0,pos:[4,0,4],yaw:2.356194,pitch:.42}),await e("site-wide",{world:c,doors:0,pos:[0,0,5],yaw:Math.PI,pitch:-.06,free:{pos:[l().landing.x,6,l().landing.z+6],look:[l().landing.x,1.4,l().landing.z]}}),atDoor(10.8),await e("site-eye",{pitch:.02}),Z.doors.force(!1),s(o),await e("box-front",{pitch:a(ke.TOP/2,o)}),Z.doors.force(!1),r(1.6,1.9,.085,o),await e("box-corner",{pitch:a(ke.TOP/2,o)}),Z.doors.force(!1),r(1.6,1.9,.085,1.6),await e("box-band",{pitch:a(1.76,1.6)}),Z.doors.force(!1),atDoorOff(.9+i,-.305,0),await e("box-notice",{pitch:a(1.145,.9)});{const h=(ke.SIGN_Y0+ke.SIGN_Y1)/2;Z.doors.force(!1),s(1.3),await e("box-sign",{pitch:a(h,1.3)})}{const h=(ke.TOP+2.9)/2;Z.doors.force(!1),s(2.1),await e("box-lamp",{pitch:a(h,2.1+Ei.half)})}Z.doors.force(!0),atDoor(2.715),await e("portal-in",{}),Z.doors.force(!0),s(o),await e("box-open",{pitch:a(ke.TOP/2,o)}),Z.doors.force(!0),atDoorOff(1.6,1.1,1.2),await e("portal-in-offaxis",{}),Z.doors.force(!0),r(1.697,1.697,.085,o),await e("box-grazing",{pitch:a(ke.TOP/2,o)}),Z.doors.force(!0),r(1.24,2.66,.085,o),await e("box-raking",{pitch:a(ke.TOP/2,o)}),Z.doors.force(!1),atDoor(.7),await e("box-vestibule",{}),Z.doors.force(!0),atDoorOff(1.1,.62,.085),await e("box-reveal",{}),Z.doors.forceT(.45),atDoor(2.715),await e("box-swing",{settle:1});{const h=l().landing;Z.doors.force(!1),await e("box-plan",{free:{pos:[h.x,7.2,h.z-.001],look:[h.x,1,h.z]}})}{const h=l();Z.doors.force(!0);const d=Fo+Ei.half+o,f=h.toExterior(new B(0,0,Dn-d)),p=h.toExterior(new B(0,0,Dn));Tt.teleport(f.x,0,f.z,Math.atan2(p.x-f.x,p.z-f.z)),Tt.pitch=a(ke.TOP/2,o),me.seed()}await e("box-behind",{}),Z.doors.force(!0),atDoor(5.8),await e("box-behind-ish",{});const u=l().landing;dn.ashfall_rim&&dn.ashfall_rim.site===c&&(place("ashfall_rim"),Z.doors.force(!0),atDoor(2.715),await e("box-placed",{}),place({...u})),me.force(de),Z.doors.force(!1),Z.fittings.setShutters(!1),Z.fittings.setScanner(!1),Tt.teleport(et.SPAWN[0],0,et.SPAWN[2],et.SPAWN_YAW),me.seed();for(let h=0;h<90;h++)je(1/60);return t};window.shotLanding=async function(t="landing"){const{atFace:e,FIT_D:i,aimAt:s}=mg(),r=[],o=async(a,c)=>{const l=await shot(a,c);r.push(`${a}:${l.ok?"ok":"FAIL"}:${_e.info.render.calls}`)};Ht.near.id!==de&&me.force(de),Z.fittings.setShutters(!0),Z.fittings.setScanner(!0),me.force(Ne.id),Z.doors.force(!0),atDoor(2.715),await o(`${t}-portal-in`,{}),Z.doors.force(!1),e(i),await o(`${t}-box-front`,{pitch:s(ke.TOP/2,i)}),Z.doors.force(!0),e(i),await o(`${t}-box-open`,{pitch:s(ke.TOP/2,i)}),me.force(de),Z.doors.force(!1),Z.fittings.setShutters(!1),Z.fittings.setScanner(!1),Tt.teleport(et.SPAWN[0],0,et.SPAWN[2],et.SPAWN_YAW),me.seed();for(let a=0;a<90;a++)je(1/60);return r};console.info(`[room] built. ${Jm.children.length} baked meshes, ${yn.lights.length} lights, ${yn.interactables.length} interactables, ${yn.colliders.length} collider(s).`);
