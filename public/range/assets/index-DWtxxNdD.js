(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kc="169",Xp=0,Iu=1,qp=2,ch=1,Yp=2,Oi=3,Wi=0,Nn=1,Fi=2,dr=0,Cs=1,Mo=2,Du=3,Uu=4,$p=5,Fr=100,jp=101,Kp=102,Zp=103,Jp=104,Qp=200,em=201,tm=202,nm=203,P0=204,I0=205,im=206,rm=207,sm=208,om=209,am=210,lm=211,cm=212,um=213,fm=214,D0=0,U0=1,k0=2,Ns=3,N0=4,O0=5,F0=6,B0=7,uh=0,dm=1,hm=2,hr=0,pm=1,mm=2,gm=3,Nc=4,_m=5,vm=6,xm=7,ku="attached",Mm="detached",fh=300,Os=301,Fs=302,z0=303,H0=304,qa=306,ka=1e3,cr=1001,G0=1002,Un=1003,Sm=1004,Go=1005,Jn=1006,fl=1007,ur=1008,Xi=1009,dh=1010,hh=1011,So=1012,Oc=1013,Yr=1014,xi=1015,Ao=1016,Fc=1017,Bc=1018,Bs=1020,ph=35902,mh=1021,gh=1022,Qn=1023,_h=1024,vh=1025,Ps=1026,zs=1027,xh=1028,zc=1029,Mh=1030,Hc=1031,Gc=1033,ya=33776,ba=33777,Ea=33778,wa=33779,V0=35840,W0=35841,X0=35842,q0=35843,Y0=36196,$0=37492,j0=37496,K0=37808,Z0=37809,J0=37810,Q0=37811,ec=37812,tc=37813,nc=37814,ic=37815,rc=37816,sc=37817,oc=37818,ac=37819,lc=37820,cc=37821,Ta=36492,uc=36494,fc=36495,Sh=36283,dc=36284,hc=36285,pc=36286,ym=3200,bm=3201,yh=0,Em=1,lr="",Gn="srgb",gr="srgb-linear",Vc="display-p3",Ya="display-p3-linear",Na="linear",Pt="srgb",Oa="rec709",Fa="p3",es=7680,Nu=519,wm=512,Tm=513,Am=514,bh=515,Rm=516,Lm=517,Cm=518,Pm=519,Ou=35044,Fu="300 es",zi=2e3,Ba=2001;class Ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bu=1234567;const go=Math.PI/180,yo=180/Math.PI;function Jr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function Rn(n,e,t){return Math.max(e,Math.min(t,n))}function Wc(n,e){return(n%e+e)%e}function Im(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Dm(n,e,t){return n!==e?(t-n)/(e-n):0}function _o(n,e,t){return(1-t)*n+t*e}function Um(n,e,t,i){return _o(n,e,1-Math.exp(-t*i))}function km(n,e=1){return e-Math.abs(Wc(n,e*2)-e)}function Nm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Om(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Fm(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Bm(n,e){return n+Math.random()*(e-n)}function zm(n){return n*(.5-Math.random())}function Hm(n){n!==void 0&&(Bu=n);let e=Bu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gm(n){return n*go}function Vm(n){return n*yo}function Wm(n){return(n&n-1)===0&&n!==0}function Xm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function qm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ym(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),u=s((e+i)/2),c=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),h=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*c,l*f,l*d,o*u);break;case"YZY":n.set(l*d,o*c,l*f,o*u);break;case"ZXZ":n.set(l*f,l*d,o*c,o*u);break;case"XZX":n.set(o*c,l*g,l*h,o*u);break;case"YXY":n.set(l*h,o*c,l*g,o*u);break;case"ZYZ":n.set(l*g,l*h,o*c,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function bs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ro={DEG2RAD:go,RAD2DEG:yo,generateUUID:Jr,clamp:Rn,euclideanModulo:Wc,mapLinear:Im,inverseLerp:Dm,lerp:_o,damp:Um,pingpong:km,smoothstep:Nm,smootherstep:Om,randInt:Fm,randFloat:Bm,randFloatSpread:zm,seededRandom:Hm,degToRad:Gm,radToDeg:Vm,isPowerOfTwo:Wm,ceilPowerOfTwo:Xm,floorPowerOfTwo:qm,setQuaternionFromProperEuler:Ym,normalize:wn,denormalize:bs};class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class st{constructor(e,t,i,r,s,a,o,l,u){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u)}set(e,t,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=r[0],p=r[3],m=r[6],x=r[1],M=r[4],E=r[7],L=r[2],y=r[5],S=r[8];return s[0]=a*_+o*x+l*L,s[3]=a*p+o*M+l*y,s[6]=a*m+o*E+l*S,s[1]=u*_+c*x+f*L,s[4]=u*p+c*M+f*y,s[7]=u*m+c*E+f*S,s[2]=d*_+h*x+g*L,s[5]=d*p+h*M+g*y,s[8]=d*m+h*E+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=c*a-o*u,d=o*l-c*s,h=u*s-a*l,g=t*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=h*_,e[7]=(i*l-u*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(dl.makeScale(e,t)),this}rotate(e){return this.premultiply(dl.makeRotation(-e)),this}translate(e,t){return this.premultiply(dl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dl=new st;function Eh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function za(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $m(){const n=za("canvas");return n.style.display="block",n}const zu={};function Aa(n){n in zu||(zu[n]=!0,console.warn(n))}function jm(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Km(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zm(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Hu=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gu=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zs={[gr]:{transfer:Na,primaries:Oa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Gn]:{transfer:Pt,primaries:Oa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ya]:{transfer:Na,primaries:Fa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Gu),fromReference:n=>n.applyMatrix3(Hu)},[Vc]:{transfer:Pt,primaries:Fa,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Gu),fromReference:n=>n.applyMatrix3(Hu).convertLinearToSRGB()}},Jm=new Set([gr,Ya]),xt={enabled:!0,_workingColorSpace:gr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Jm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Zs[e].toReference,r=Zs[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Zs[n].primaries},getTransfer:function(n){return n===lr?Na:Zs[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Zs[e].luminanceCoefficients)}};function Is(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ts;class Qm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=za("canvas")),ts.width=e.width,ts.height=e.height;const i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=za("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Is(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Is(t[i]/255)*255):t[i]=Is(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eg=0;class wh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Jr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(pl(r[a].image)):s.push(pl(r[a]))}else s=pl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function pl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tg=0;class xn extends Ws{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,i=cr,r=cr,s=Jn,a=ur,o=Qn,l=Xi,u=xn.DEFAULT_ANISOTROPY,c=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=Jr(),this.name="",this.source=new wh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ka:e.x=e.x-Math.floor(e.x);break;case cr:e.x=e.x<0?0:1;break;case G0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ka:e.y=e.y-Math.floor(e.y);break;case cr:e.y=e.y<0?0:1;break;case G0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=fh;xn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,i=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(u+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(u+1)/2,E=(h+1)/2,L=(m+1)/2,y=(c+d)/4,S=(f+_)/4,R=(g+p)/4;return M>E&&M>L?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=y/i,s=S/i):E>L?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=y/r,s=R/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=S/s,r=R/s),this.set(i,r,s,t),this}let x=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-c)*(d-c));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(f-_)/x,this.z=(d-c)/x,this.w=Math.acos((u+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ng extends Ws{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends ng{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Th extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ig extends xn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||u!==h||c!==g){let p=1-o;const m=l*d+u*h+c*g+f*_,x=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const L=Math.sqrt(M),y=Math.atan2(L,m*x);p=Math.sin(p*y)/L,o=Math.sin(o*y)/L}const E=o*x;if(l=l*p+d*E,u=u*p+h*E,c=c*p+g*E,f=f*p+_*E,p===1-o){const L=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=L,u*=L,c*=L,f*=L}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[a],d=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+c*f+l*h-u*d,e[t+1]=l*g+c*d+u*f-o*h,e[t+2]=u*g+c*h+o*d-l*f,e[t+3]=c*g-o*f-l*d-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),f=o(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*c*f+u*h*g,this._y=u*h*f-d*c*g,this._z=u*c*g+d*h*f,this._w=u*c*f-d*h*g;break;case"YXZ":this._x=d*c*f+u*h*g,this._y=u*h*f-d*c*g,this._z=u*c*g-d*h*f,this._w=u*c*f+d*h*g;break;case"ZXY":this._x=d*c*f-u*h*g,this._y=u*h*f+d*c*g,this._z=u*c*g+d*h*f,this._w=u*c*f-d*h*g;break;case"ZYX":this._x=d*c*f-u*h*g,this._y=u*h*f+d*c*g,this._z=u*c*g-d*h*f,this._w=u*c*f+d*h*g;break;case"YZX":this._x=d*c*f+u*h*g,this._y=u*h*f+d*c*g,this._z=u*c*g-d*h*f,this._w=u*c*f-d*h*g;break;case"XZY":this._x=d*c*f-u*h*g,this._y=u*h*f-d*c*g,this._z=u*c*g+d*h*f,this._w=u*c*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(c-l)*h,this._y=(s-u)*h,this._z=(a-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(c-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+u)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(s-u)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-r)/h,this._x=(s+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*u+a*f-o*c,this.y=i+l*c+o*u-s*f,this.z=r+l*f+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ml.copy(this).projectOnVector(e),this.sub(ml)}reflect(e){return this.sub(ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ml=new U,Vu=new jt;class qi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ii):ii.fromBufferAttribute(s,a),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vo.copy(i.boundingBox)),Vo.applyMatrix4(e.matrixWorld),this.union(Vo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),Wo.subVectors(this.max,Js),ns.subVectors(e.a,Js),is.subVectors(e.b,Js),rs.subVectors(e.c,Js),Ji.subVectors(is,ns),Qi.subVectors(rs,is),Sr.subVectors(ns,rs);let t=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-Sr.z,Sr.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,Sr.z,0,-Sr.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-Sr.y,Sr.x,0];return!gl(t,ns,is,rs,Wo)||(t=[1,0,0,0,1,0,0,0,1],!gl(t,ns,is,rs,Wo))?!1:(Xo.crossVectors(Ji,Qi),t=[Xo.x,Xo.y,Xo.z],gl(t,ns,is,rs,Wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new U,new U,new U,new U,new U,new U,new U,new U],ii=new U,Vo=new qi,ns=new U,is=new U,rs=new U,Ji=new U,Qi=new U,Sr=new U,Js=new U,Wo=new U,Xo=new U,yr=new U;function gl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){yr.fromArray(n,s);const o=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),l=e.dot(yr),u=t.dot(yr),c=i.dot(yr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const rg=new qi,Qs=new U,_l=new U;class Xs{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qs.subVectors(e,this.center);const t=Qs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_l.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qs.copy(e.center).add(_l)),this.expandByPoint(Qs.copy(e.center).sub(_l))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new U,vl=new U,qo=new U,er=new U,xl=new U,Yo=new U,Ml=new U;class Xc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){vl.copy(e).add(t).multiplyScalar(.5),qo.copy(t).sub(e).normalize(),er.copy(this.origin).sub(vl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(qo),o=er.dot(this.direction),l=-er.dot(qo),u=er.lengthSq(),c=Math.abs(1-a*a);let f,d,h,g;if(c>0)if(f=a*l-o,d=a*o-l,g=s*c,f>=0)if(d>=-g)if(d<=g){const _=1/c;f*=_,d*=_,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+u}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+u;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+u):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+u):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+u);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(vl).addScaledVector(qo,d),h}intersectSphere(e,t){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,i,r,s){xl.subVectors(t,e),Yo.subVectors(i,e),Ml.crossVectors(xl,Yo);let a=this.direction.dot(Ml),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;er.subVectors(this.origin,e);const l=o*this.direction.dot(Yo.crossVectors(er,Yo));if(l<0)return null;const u=o*this.direction.dot(xl.cross(er));if(u<0||l+u>a)return null;const c=-o*er.dot(Ml);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,i,r,s,a,o,l,u,c,f,d,h,g,_,p){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u,c,f,d,h,g,_,p)}set(e,t,i,r,s,a,o,l,u,c,f,d,h,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=u,m[6]=c,m[10]=f,m[14]=d,m[3]=h,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),a=1/ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*c,h=a*f,g=o*c,_=o*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=h+g*u,t[5]=d-_*u,t[9]=-o*l,t[2]=_-d*u,t[6]=g+h*u,t[10]=a*l}else if(e.order==="YXZ"){const d=l*c,h=l*f,g=u*c,_=u*f;t[0]=d+_*o,t[4]=g*o-h,t[8]=a*u,t[1]=a*f,t[5]=a*c,t[9]=-o,t[2]=h*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*c,h=l*f,g=u*c,_=u*f;t[0]=d-_*o,t[4]=-a*f,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*c,t[9]=_-d*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*c,h=a*f,g=o*c,_=o*f;t[0]=l*c,t[4]=g*u-h,t[8]=d*u+_,t[1]=l*f,t[5]=_*u+d,t[9]=h*u-g,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*u,g=o*l,_=o*u;t[0]=l*c,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,h=a*u,g=o*l,_=o*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+_,t[5]=a*c,t[9]=h*f-g,t[2]=g*f-h,t[6]=o*c,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sg,e,og)}lookAt(e,t,i){const r=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),tr.crossVectors(i,Bn),tr.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),tr.crossVectors(i,Bn)),tr.normalize(),$o.crossVectors(Bn,tr),r[0]=tr.x,r[4]=$o.x,r[8]=Bn.x,r[1]=tr.y,r[5]=$o.y,r[9]=Bn.y,r[2]=tr.z,r[6]=$o.z,r[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],p=i[10],m=i[14],x=i[3],M=i[7],E=i[11],L=i[15],y=r[0],S=r[4],R=r[8],P=r[12],v=r[1],b=r[5],D=r[9],C=r[13],k=r[2],F=r[6],N=r[10],q=r[14],z=r[3],te=r[7],he=r[11],be=r[15];return s[0]=a*y+o*v+l*k+u*z,s[4]=a*S+o*b+l*F+u*te,s[8]=a*R+o*D+l*N+u*he,s[12]=a*P+o*C+l*q+u*be,s[1]=c*y+f*v+d*k+h*z,s[5]=c*S+f*b+d*F+h*te,s[9]=c*R+f*D+d*N+h*he,s[13]=c*P+f*C+d*q+h*be,s[2]=g*y+_*v+p*k+m*z,s[6]=g*S+_*b+p*F+m*te,s[10]=g*R+_*D+p*N+m*he,s[14]=g*P+_*C+p*q+m*be,s[3]=x*y+M*v+E*k+L*z,s[7]=x*S+M*b+E*F+L*te,s[11]=x*R+M*D+E*N+L*he,s[15]=x*P+M*C+E*q+L*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*f-r*u*f-s*o*d+i*u*d+r*o*h-i*l*h)+_*(+t*l*h-t*u*d+s*a*d-r*a*h+r*u*c-s*l*c)+p*(+t*u*f-t*o*h-s*a*f+i*a*h+s*o*c-i*u*c)+m*(-r*o*c-t*l*f+t*o*d+r*a*f-i*a*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],p=e[14],m=e[15],x=f*p*u-_*d*u+_*l*h-o*p*h-f*l*m+o*d*m,M=g*d*u-c*p*u-g*l*h+a*p*h+c*l*m-a*d*m,E=c*_*u-g*f*u+g*o*h-a*_*h-c*o*m+a*f*m,L=g*f*l-c*_*l-g*o*d+a*_*d+c*o*p-a*f*p,y=t*x+i*M+r*E+s*L;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/y;return e[0]=x*S,e[1]=(_*d*s-f*p*s-_*r*h+i*p*h+f*r*m-i*d*m)*S,e[2]=(o*p*s-_*l*s+_*r*u-i*p*u-o*r*m+i*l*m)*S,e[3]=(f*l*s-o*d*s-f*r*u+i*d*u+o*r*h-i*l*h)*S,e[4]=M*S,e[5]=(c*p*s-g*d*s+g*r*h-t*p*h-c*r*m+t*d*m)*S,e[6]=(g*l*s-a*p*s-g*r*u+t*p*u+a*r*m-t*l*m)*S,e[7]=(a*d*s-c*l*s+c*r*u-t*d*u-a*r*h+t*l*h)*S,e[8]=E*S,e[9]=(g*f*s-c*_*s-g*i*h+t*_*h+c*i*m-t*f*m)*S,e[10]=(a*_*s-g*o*s+g*i*u-t*_*u-a*i*m+t*o*m)*S,e[11]=(c*o*s-a*f*s-c*i*u+t*f*u+a*i*h-t*o*h)*S,e[12]=L*S,e[13]=(c*_*r-g*f*r+g*i*d-t*_*d-c*i*p+t*f*p)*S,e[14]=(g*o*r-a*_*r-g*i*l+t*_*l+a*i*p-t*o*p)*S,e[15]=(a*f*r-c*o*r+c*i*l-t*f*l-a*i*d+t*o*d)*S,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,f=o+o,d=s*u,h=s*c,g=s*f,_=a*c,p=a*f,m=o*f,x=l*u,M=l*c,E=l*f,L=i.x,y=i.y,S=i.z;return r[0]=(1-(_+m))*L,r[1]=(h+E)*L,r[2]=(g-M)*L,r[3]=0,r[4]=(h-E)*y,r[5]=(1-(d+m))*y,r[6]=(p+x)*y,r[7]=0,r[8]=(g+M)*S,r[9]=(p-x)*S,r[10]=(1-(d+_))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ss.set(r[0],r[1],r[2]).length();const a=ss.set(r[4],r[5],r[6]).length(),o=ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ri.copy(this);const u=1/s,c=1/a,f=1/o;return ri.elements[0]*=u,ri.elements[1]*=u,ri.elements[2]*=u,ri.elements[4]*=c,ri.elements[5]*=c,ri.elements[6]*=c,ri.elements[8]*=f,ri.elements[9]*=f,ri.elements[10]*=f,t.setFromRotationMatrix(ri),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=zi){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let h,g;if(o===zi)h=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ba)h=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=zi){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(a-s),d=(t+e)*u,h=(i+r)*c;let g,_;if(o===zi)g=(a+s)*f,_=-2*f;else if(o===Ba)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ss=new U,ri=new et,sg=new U(0,0,0),og=new U(1,1,1),tr=new U,$o=new U,Bn=new U,Wu=new et,Xu=new jt;class cn{constructor(e=0,t=0,i=0,r=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(Rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xu.setFromEuler(this),this.setFromQuaternion(Xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class qc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ag=0;const qu=new U,os=new jt,Pi=new et,jo=new U,eo=new U,lg=new U,cg=new jt,Yu=new U(1,0,0),$u=new U(0,1,0),ju=new U(0,0,1),Ku={type:"added"},ug={type:"removed"},as={type:"childadded",child:null},Sl={type:"childremoved",child:null};class Kt extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=Jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new U,t=new cn,i=new jt,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new et},normalMatrix:{value:new st}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Yu,e)}rotateY(e){return this.rotateOnAxis($u,e)}rotateZ(e){return this.rotateOnAxis(ju,e)}translateOnAxis(e,t){return qu.copy(e).applyQuaternion(this.quaternion),this.position.add(qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yu,e)}translateY(e){return this.translateOnAxis($u,e)}translateZ(e){return this.translateOnAxis(ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?jo.copy(e):jo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(eo,jo,this.up):Pi.lookAt(jo,eo,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),os.setFromRotationMatrix(Pi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ku),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ug),Sl.child=e,this.dispatchEvent(Sl),Sl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ku),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,lg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,cg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Kt.DEFAULT_UP=new U(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new U,Ii=new U,yl=new U,Di=new U,ls=new U,cs=new U,Zu=new U,bl=new U,El=new U,wl=new U,Tl=new Dt,Al=new Dt,Rl=new Dt;class ui{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),si.subVectors(e,t),r.cross(si);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){si.subVectors(r,t),Ii.subVectors(i,t),yl.subVectors(e,t);const a=si.dot(si),o=si.dot(Ii),l=si.dot(yl),u=Ii.dot(Ii),c=Ii.dot(yl),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(u*l-o*c)*d,g=(a*c-o*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(a,Di.y),l.addScaledVector(o,Di.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Tl.setScalar(0),Al.setScalar(0),Rl.setScalar(0),Tl.fromBufferAttribute(e,t),Al.fromBufferAttribute(e,i),Rl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Tl,s.x),a.addScaledVector(Al,s.y),a.addScaledVector(Rl,s.z),a}static isFrontFacing(e,t,i,r){return si.subVectors(i,t),Ii.subVectors(e,t),si.cross(Ii).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),si.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ui.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;ls.subVectors(r,i),cs.subVectors(s,i),bl.subVectors(e,i);const l=ls.dot(bl),u=cs.dot(bl);if(l<=0&&u<=0)return t.copy(i);El.subVectors(e,r);const c=ls.dot(El),f=cs.dot(El);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(ls,a);wl.subVectors(e,s);const h=ls.dot(wl),g=cs.dot(wl);if(g>=0&&h<=g)return t.copy(s);const _=h*u-l*g;if(_<=0&&u>=0&&g<=0)return o=u/(u-g),t.copy(i).addScaledVector(cs,o);const p=c*g-h*f;if(p<=0&&f-c>=0&&h-g>=0)return Zu.subVectors(s,r),o=(f-c)/(f-c+(h-g)),t.copy(r).addScaledVector(Zu,o);const m=1/(p+_+d);return a=_*m,o=d*m,t.copy(i).addScaledVector(ls,a).addScaledVector(cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function Ll(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=Wc(e,1),t=Rn(t,0,1),i=Rn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ll(a,s,e+1/3),this.g=Ll(a,s,e),this.b=Ll(a,s,e-1/3)}return xt.toWorkingColorSpace(this,r),this}setStyle(e,t=Gn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gn){const i=Ah[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=hl(e.r),this.g=hl(e.g),this.b=hl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return xt.fromWorkingColorSpace(dn.copy(this),e),Math.round(Rn(dn.r*255,0,255))*65536+Math.round(Rn(dn.g*255,0,255))*256+Math.round(Rn(dn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(dn.copy(this),t);const i=dn.r,r=dn.g,s=dn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(dn.copy(this),t),e.r=dn.r,e.g=dn.g,e.b=dn.b,e}getStyle(e=Gn){xt.fromWorkingColorSpace(dn.copy(this),e);const t=dn.r,i=dn.g,r=dn.b;return e!==Gn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+t,nr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(nr),e.getHSL(Ko);const i=_o(nr.h,Ko.h,t),r=_o(nr.s,Ko.s,t),s=_o(nr.l,Ko.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new ut;ut.NAMES=Ah;let fg=0;class Lo extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=Jr(),this.name="",this.type="Material",this.blending=Cs,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=P0,this.blendDst=I0,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Cs&&(i.blending=this.blending),this.side!==Wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==P0&&(i.blendSrc=this.blendSrc),this.blendDst!==I0&&(i.blendDst=this.blendDst),this.blendEquation!==Fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Sn extends Lo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new U,Zo=new dt;class On{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ou,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Zo.fromBufferAttribute(this,t),Zo.applyMatrix3(e),this.setXY(t,Zo.x,Zo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),i=wn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),i=wn(i,this.array),r=wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),i=wn(i,this.array),r=wn(r,this.array),s=wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ou&&(e.usage=this.usage),e}}class Yc extends On{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Rh extends On{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mn extends On{constructor(e,t,i){super(new Float32Array(e),t,i)}}let dg=0;const $n=new et,Cl=new Kt,us=new U,zn=new qi,to=new qi,nn=new U;class di extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=Jr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eh(e)?Rh:Yc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new st().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,i){return $n.makeTranslation(e,t,i),this.applyMatrix4($n),this}scale(e,t,i){return $n.makeScale(e,t,i),this.applyMatrix4($n),this}lookAt(e){return Cl.lookAt(e),Cl.updateMatrix(),this.applyMatrix4(Cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Mn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];zn.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];to.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(zn.min,to.min),zn.expandByPoint(nn),nn.addVectors(zn.max,to.max),zn.expandByPoint(nn)):(zn.expandByPoint(to.min),zn.expandByPoint(to.max))}zn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)nn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(nn));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)nn.fromBufferAttribute(o,u),l&&(us.fromBufferAttribute(e,u),nn.add(us)),r=Math.max(r,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new U,l[R]=new U;const u=new U,c=new U,f=new U,d=new dt,h=new dt,g=new dt,_=new U,p=new U;function m(R,P,v){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,P),f.fromBufferAttribute(i,v),d.fromBufferAttribute(s,R),h.fromBufferAttribute(s,P),g.fromBufferAttribute(s,v),c.sub(u),f.sub(u),h.sub(d),g.sub(d);const b=1/(h.x*g.y-g.x*h.y);isFinite(b)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(b),p.copy(f).multiplyScalar(h.x).addScaledVector(c,-g.x).multiplyScalar(b),o[R].add(_),o[P].add(_),o[v].add(_),l[R].add(p),l[P].add(p),l[v].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let R=0,P=x.length;R<P;++R){const v=x[R],b=v.start,D=v.count;for(let C=b,k=b+D;C<k;C+=3)m(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const M=new U,E=new U,L=new U,y=new U;function S(R){L.fromBufferAttribute(r,R),y.copy(L);const P=o[R];M.copy(P),M.sub(L.multiplyScalar(L.dot(P))).normalize(),E.crossVectors(y,P);const b=E.dot(l[R])<0?-1:1;a.setXYZW(R,M.x,M.y,M.z,b)}for(let R=0,P=x.length;R<P;++R){const v=x[R],b=v.start,D=v.count;for(let C=b,k=b+D;C<k;C+=3)S(e.getX(C+0)),S(e.getX(C+1)),S(e.getX(C+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,u=new U,c=new U,f=new U;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,p),o.add(c),l.add(c),u.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,f=o.normalized,d=new u.constructor(l.length*c);let h=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*c;for(let m=0;m<c;m++)d[g++]=u[h++]}return new On(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new di,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,f=u.length;c<f;c++){const d=u[c],h=e(d,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const h=u[f];c.push(h.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,h=f.length;d<h;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ju=new et,br=new Xc,Jo=new Xs,Qu=new U,Qo=new U,ea=new U,ta=new U,Pl=new U,na=new U,ef=new U,ia=new U;class Rt extends Kt{constructor(e=new di,t=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){na.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],f=s[l];c!==0&&(Pl.fromBufferAttribute(f,e),a?na.addScaledVector(Pl,c):na.addScaledVector(Pl.sub(t),c))}t.add(na)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(s),br.copy(e.ray).recast(e.near),!(Jo.containsPoint(br.origin)===!1&&(br.intersectSphere(Jo,Qu)===null||br.origin.distanceToSquared(Qu)>(e.far-e.near)**2))&&(Ju.copy(s).invert(),br.copy(e.ray).applyMatrix4(Ju),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,br)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=a[p.materialIndex],x=Math.max(p.start,h.start),M=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let E=x,L=M;E<L;E+=3){const y=o.getX(E),S=o.getX(E+1),R=o.getX(E+2);r=ra(this,m,e,i,u,c,f,y,S,R),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const x=o.getX(p),M=o.getX(p+1),E=o.getX(p+2);r=ra(this,a,e,i,u,c,f,x,M,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=a[p.materialIndex],x=Math.max(p.start,h.start),M=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let E=x,L=M;E<L;E+=3){const y=E,S=E+1,R=E+2;r=ra(this,m,e,i,u,c,f,y,S,R),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const x=p,M=p+1,E=p+2;r=ra(this,a,e,i,u,c,f,x,M,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function hg(n,e,t,i,r,s,a,o){let l;if(e.side===Nn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Wi,o),l===null)return null;ia.copy(o),ia.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(ia);return u<t.near||u>t.far?null:{distance:u,point:ia.clone(),object:n}}function ra(n,e,t,i,r,s,a,o,l,u){n.getVertexPosition(o,Qo),n.getVertexPosition(l,ea),n.getVertexPosition(u,ta);const c=hg(n,e,t,i,Qo,ea,ta,ef);if(c){const f=new U;ui.getBarycoord(ef,Qo,ea,ta,f),r&&(c.uv=ui.getInterpolatedAttribute(r,o,l,u,f,new dt)),s&&(c.uv1=ui.getInterpolatedAttribute(s,o,l,u,f,new dt)),a&&(c.normal=ui.getInterpolatedAttribute(a,o,l,u,f,new U),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new U,materialIndex:0};ui.getNormal(Qo,ea,ta,d.normal),c.face=d,c.barycoord=f}return c}class vn extends di{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Mn(u,3)),this.setAttribute("normal",new Mn(c,3)),this.setAttribute("uv",new Mn(f,2));function g(_,p,m,x,M,E,L,y,S,R,P){const v=E/S,b=L/R,D=E/2,C=L/2,k=y/2,F=S+1,N=R+1;let q=0,z=0;const te=new U;for(let he=0;he<N;he++){const be=he*b-C;for(let Re=0;Re<F;Re++){const Se=Re*v-D;te[_]=Se*x,te[p]=be*M,te[m]=k,u.push(te.x,te.y,te.z),te[_]=0,te[p]=0,te[m]=y>0?1:-1,c.push(te.x,te.y,te.z),f.push(Re/S),f.push(1-he/R),q+=1}}for(let he=0;he<R;he++)for(let be=0;be<S;be++){const Re=d+be+F*he,Se=d+be+F*(he+1),$=d+(be+1)+F*(he+1),Y=d+(be+1)+F*he;l.push(Re,Se,Y),l.push(Se,$,Y),z+=6}o.addGroup(h,z,P),h+=z,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Tn(n){const e={};for(let t=0;t<n.length;t++){const i=Hs(n[t]);for(const r in i)e[r]=i[r]}return e}function pg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Lh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const mg={clone:Hs,merge:Tn};var gg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_g=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mr extends Lo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gg,this.fragmentShader=_g,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=pg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ch extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new U,tf=new dt,nf=new dt;class _n extends Ch{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,t){return this.getViewBounds(e,tf,nf),t.subVectors(nf,tf)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(go*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fs=-90,ds=1;class vg extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(fs,ds,e,t);r.layers=this.layers,this.add(r);const s=new _n(fs,ds,e,t);s.layers=this.layers,this.add(s);const a=new _n(fs,ds,e,t);a.layers=this.layers,this.add(a);const o=new _n(fs,ds,e,t);o.layers=this.layers,this.add(o);const l=new _n(fs,ds,e,t);l.layers=this.layers,this.add(l);const u=new _n(fs,ds,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ph extends xn{constructor(e,t,i,r,s,a,o,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Os,super(e,t,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xg extends $r{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ph(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vn(5,5,5),s=new mr({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nn,blending:dr});s.uniforms.tEquirect.value=t;const a=new Rt(r,s),o=t.minFilter;return t.minFilter===ur&&(t.minFilter=Jn),new vg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Il=new U,Mg=new U,Sg=new st;class Ur{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Il.subVectors(i,t).cross(Mg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Il),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Sg.getNormalMatrix(e),r=this.coplanarPoint(Il).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new Xs,sa=new U;class $c{constructor(e=new Ur,t=new Ur,i=new Ur,r=new Ur,s=new Ur,a=new Ur){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],h=r[8],g=r[9],_=r[10],p=r[11],m=r[12],x=r[13],M=r[14],E=r[15];if(i[0].setComponents(l-s,d-u,p-h,E-m).normalize(),i[1].setComponents(l+s,d+u,p+h,E+m).normalize(),i[2].setComponents(l+a,d+c,p+g,E+x).normalize(),i[3].setComponents(l-a,d-c,p-g,E-x).normalize(),i[4].setComponents(l-o,d-f,p-_,E-M).normalize(),t===zi)i[5].setComponents(l+o,d+f,p+_,E+M).normalize();else if(t===Ba)i[5].setComponents(o,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(sa.x=r.normal.x>0?e.max.x:e.min.x,sa.y=r.normal.y>0?e.max.y:e.min.y,sa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ih(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function yg(n){const e=new WeakMap;function t(o,l){const u=o.array,c=o.usage,f=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,c),o.onUploadCallback();let h;if(u instanceof Float32Array)h=n.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=n.SHORT;else if(u instanceof Uint32Array)h=n.UNSIGNED_INT;else if(u instanceof Int32Array)h=n.INT;else if(u instanceof Int8Array)h=n.BYTE;else if(u instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,o),f.length===0)n.bufferSubData(u,0,c);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}class Co extends di{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,f=e/o,d=t/l,h=[],g=[],_=[],p=[];for(let m=0;m<c;m++){const x=m*d-a;for(let M=0;M<u;M++){const E=M*f-s;g.push(E,-x,0),_.push(0,0,1),p.push(M/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<o;x++){const M=x+u*m,E=x+u*(m+1),L=x+1+u*(m+1),y=x+1+u*m;h.push(M,E,y),h.push(E,L,y)}this.setIndex(h),this.setAttribute("position",new Mn(g,3)),this.setAttribute("normal",new Mn(_,3)),this.setAttribute("uv",new Mn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.width,e.height,e.widthSegments,e.heightSegments)}}var bg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eg=`#ifdef USE_ALPHAHASH
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
#endif`,wg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ag=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lg=`#ifdef USE_AOMAP
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
#endif`,Cg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pg=`#ifdef USE_BATCHING
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
#endif`,Ig=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ug=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ng=`#ifdef USE_IRIDESCENCE
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
#endif`,Og=`#ifdef USE_BUMPMAP
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
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qg=`#define PI 3.141592653589793
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
} // validated`,Yg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$g=`vec3 transformedNormal = objectNormal;
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
#endif`,jg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",e1=`
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
}`,t1=`#ifdef USE_ENVMAP
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
#endif`,n1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,i1=`#ifdef USE_ENVMAP
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
#endif`,r1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,s1=`#ifdef USE_ENVMAP
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
#endif`,o1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,l1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u1=`#ifdef USE_GRADIENTMAP
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
}`,f1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p1=`uniform bool receiveShadow;
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
#endif`,m1=`#ifdef USE_ENVMAP
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
#endif`,g1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,v1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M1=`PhysicalMaterial material;
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
#endif`,S1=`struct PhysicalMaterial {
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
}`,y1=`
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
#endif`,b1=`#if defined( RE_IndirectDiffuse )
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
#endif`,E1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,w1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I1=`#if defined( USE_POINTS_UV )
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
#endif`,D1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,N1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F1=`#ifdef USE_MORPHTARGETS
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
#endif`,B1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,H1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,G1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,X1=`#ifdef USE_NORMALMAP
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
#endif`,q1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,J1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,a_=`float getShadowMask() {
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
}`,l_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c_=`#ifdef USE_SKINNING
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
#endif`,u_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f_=`#ifdef USE_SKINNING
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
#endif`,d_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,g_=`#ifdef USE_TRANSMISSION
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
#endif`,__=`#ifdef USE_TRANSMISSION
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
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b_=`uniform sampler2D t2D;
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`#include <common>
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
}`,L_=`#if DEPTH_PACKING == 3200
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
}`,C_=`#define DISTANCE
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
}`,P_=`#define DISTANCE
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
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`uniform float scale;
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
}`,k_=`uniform vec3 diffuse;
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
}`,N_=`#include <common>
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
}`,O_=`uniform vec3 diffuse;
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
}`,F_=`#define LAMBERT
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
}`,B_=`#define LAMBERT
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
}`,z_=`#define MATCAP
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
}`,H_=`#define MATCAP
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
}`,G_=`#define NORMAL
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
}`,V_=`#define NORMAL
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
}`,W_=`#define PHONG
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
}`,X_=`#define PHONG
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
}`,q_=`#define STANDARD
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
}`,Y_=`#define STANDARD
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
}`,$_=`#define TOON
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
}`,j_=`#define TOON
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
}`,K_=`uniform float size;
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
}`,Z_=`uniform vec3 diffuse;
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
}`,J_=`#include <common>
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
}`,Q_=`uniform vec3 color;
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
}`,ev=`uniform float rotation;
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
}`,tv=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:bg,alphahash_pars_fragment:Eg,alphamap_fragment:wg,alphamap_pars_fragment:Tg,alphatest_fragment:Ag,alphatest_pars_fragment:Rg,aomap_fragment:Lg,aomap_pars_fragment:Cg,batching_pars_vertex:Pg,batching_vertex:Ig,begin_vertex:Dg,beginnormal_vertex:Ug,bsdfs:kg,iridescence_fragment:Ng,bumpmap_pars_fragment:Og,clipping_planes_fragment:Fg,clipping_planes_pars_fragment:Bg,clipping_planes_pars_vertex:zg,clipping_planes_vertex:Hg,color_fragment:Gg,color_pars_fragment:Vg,color_pars_vertex:Wg,color_vertex:Xg,common:qg,cube_uv_reflection_fragment:Yg,defaultnormal_vertex:$g,displacementmap_pars_vertex:jg,displacementmap_vertex:Kg,emissivemap_fragment:Zg,emissivemap_pars_fragment:Jg,colorspace_fragment:Qg,colorspace_pars_fragment:e1,envmap_fragment:t1,envmap_common_pars_fragment:n1,envmap_pars_fragment:i1,envmap_pars_vertex:r1,envmap_physical_pars_fragment:m1,envmap_vertex:s1,fog_vertex:o1,fog_pars_vertex:a1,fog_fragment:l1,fog_pars_fragment:c1,gradientmap_pars_fragment:u1,lightmap_pars_fragment:f1,lights_lambert_fragment:d1,lights_lambert_pars_fragment:h1,lights_pars_begin:p1,lights_toon_fragment:g1,lights_toon_pars_fragment:_1,lights_phong_fragment:v1,lights_phong_pars_fragment:x1,lights_physical_fragment:M1,lights_physical_pars_fragment:S1,lights_fragment_begin:y1,lights_fragment_maps:b1,lights_fragment_end:E1,logdepthbuf_fragment:w1,logdepthbuf_pars_fragment:T1,logdepthbuf_pars_vertex:A1,logdepthbuf_vertex:R1,map_fragment:L1,map_pars_fragment:C1,map_particle_fragment:P1,map_particle_pars_fragment:I1,metalnessmap_fragment:D1,metalnessmap_pars_fragment:U1,morphinstance_vertex:k1,morphcolor_vertex:N1,morphnormal_vertex:O1,morphtarget_pars_vertex:F1,morphtarget_vertex:B1,normal_fragment_begin:z1,normal_fragment_maps:H1,normal_pars_fragment:G1,normal_pars_vertex:V1,normal_vertex:W1,normalmap_pars_fragment:X1,clearcoat_normal_fragment_begin:q1,clearcoat_normal_fragment_maps:Y1,clearcoat_pars_fragment:$1,iridescence_pars_fragment:j1,opaque_fragment:K1,packing:Z1,premultiplied_alpha_fragment:J1,project_vertex:Q1,dithering_fragment:e_,dithering_pars_fragment:t_,roughnessmap_fragment:n_,roughnessmap_pars_fragment:i_,shadowmap_pars_fragment:r_,shadowmap_pars_vertex:s_,shadowmap_vertex:o_,shadowmask_pars_fragment:a_,skinbase_vertex:l_,skinning_pars_vertex:c_,skinning_vertex:u_,skinnormal_vertex:f_,specularmap_fragment:d_,specularmap_pars_fragment:h_,tonemapping_fragment:p_,tonemapping_pars_fragment:m_,transmission_fragment:g_,transmission_pars_fragment:__,uv_pars_fragment:v_,uv_pars_vertex:x_,uv_vertex:M_,worldpos_vertex:S_,background_vert:y_,background_frag:b_,backgroundCube_vert:E_,backgroundCube_frag:w_,cube_vert:T_,cube_frag:A_,depth_vert:R_,depth_frag:L_,distanceRGBA_vert:C_,distanceRGBA_frag:P_,equirect_vert:I_,equirect_frag:D_,linedashed_vert:U_,linedashed_frag:k_,meshbasic_vert:N_,meshbasic_frag:O_,meshlambert_vert:F_,meshlambert_frag:B_,meshmatcap_vert:z_,meshmatcap_frag:H_,meshnormal_vert:G_,meshnormal_frag:V_,meshphong_vert:W_,meshphong_frag:X_,meshphysical_vert:q_,meshphysical_frag:Y_,meshtoon_vert:$_,meshtoon_frag:j_,points_vert:K_,points_frag:Z_,shadow_vert:J_,shadow_frag:Q_,sprite_vert:ev,sprite_frag:tv},Ce={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},_i={basic:{uniforms:Tn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Tn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ut(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Tn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Tn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Tn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ut(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Tn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Tn([Ce.points,Ce.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Tn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Tn([Ce.common,Ce.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Tn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Tn([Ce.sprite,Ce.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:Tn([Ce.common,Ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:Tn([Ce.lights,Ce.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};_i.physical={uniforms:Tn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const oa={r:0,b:0,g:0},wr=new cn,nv=new et;function iv(n,e,t,i,r,s,a){const o=new ut(0);let l=s===!0?0:1,u,c,f=null,d=0,h=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?t:e).get(M)),M}function _(x){let M=!1;const E=g(x);E===null?m(o,l):E&&E.isColor&&(m(E,1),M=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(x,M){const E=g(M);E&&(E.isCubeTexture||E.mapping===qa)?(c===void 0&&(c=new Rt(new vn(1,1,1),new mr({name:"BackgroundCubeMaterial",uniforms:Hs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,y,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),wr.copy(M.backgroundRotation),wr.x*=-1,wr.y*=-1,wr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(nv.makeRotationFromEuler(wr)),c.material.toneMapped=xt.getTransfer(E.colorSpace)!==Pt,(f!==E||d!==E.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,d=E.version,h=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new Rt(new Co(2,2),new mr({name:"BackgroundMaterial",uniforms:Hs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.toneMapped=xt.getTransfer(E.colorSpace)!==Pt,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=E,d=E.version,h=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function m(x,M){x.getRGB(oa,Lh(n)),i.buffers.color.setClear(oa.r,oa.g,oa.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),l=M,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(o,l)},render:_,addToRenderList:p}}function rv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(v,b,D,C,k){let F=!1;const N=f(C,D,b);s!==N&&(s=N,u(s.object)),F=h(v,C,D,k),F&&g(v,C,D,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,E(v,b,D,C),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function u(v){return n.bindVertexArray(v)}function c(v){return n.deleteVertexArray(v)}function f(v,b,D){const C=D.wireframe===!0;let k=i[v.id];k===void 0&&(k={},i[v.id]=k);let F=k[b.id];F===void 0&&(F={},k[b.id]=F);let N=F[C];return N===void 0&&(N=d(l()),F[C]=N),N}function d(v){const b=[],D=[],C=[];for(let k=0;k<t;k++)b[k]=0,D[k]=0,C[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:D,attributeDivisors:C,object:v,attributes:{},index:null}}function h(v,b,D,C){const k=s.attributes,F=b.attributes;let N=0;const q=D.getAttributes();for(const z in q)if(q[z].location>=0){const he=k[z];let be=F[z];if(be===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(be=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(be=v.instanceColor)),he===void 0||he.attribute!==be||be&&he.data!==be.data)return!0;N++}return s.attributesNum!==N||s.index!==C}function g(v,b,D,C){const k={},F=b.attributes;let N=0;const q=D.getAttributes();for(const z in q)if(q[z].location>=0){let he=F[z];he===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(he=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(he=v.instanceColor));const be={};be.attribute=he,he&&he.data&&(be.data=he.data),k[z]=be,N++}s.attributes=k,s.attributesNum=N,s.index=C}function _(){const v=s.newAttributes;for(let b=0,D=v.length;b<D;b++)v[b]=0}function p(v){m(v,0)}function m(v,b){const D=s.newAttributes,C=s.enabledAttributes,k=s.attributeDivisors;D[v]=1,C[v]===0&&(n.enableVertexAttribArray(v),C[v]=1),k[v]!==b&&(n.vertexAttribDivisor(v,b),k[v]=b)}function x(){const v=s.newAttributes,b=s.enabledAttributes;for(let D=0,C=b.length;D<C;D++)b[D]!==v[D]&&(n.disableVertexAttribArray(D),b[D]=0)}function M(v,b,D,C,k,F,N){N===!0?n.vertexAttribIPointer(v,b,D,k,F):n.vertexAttribPointer(v,b,D,C,k,F)}function E(v,b,D,C){_();const k=C.attributes,F=D.getAttributes(),N=b.defaultAttributeValues;for(const q in F){const z=F[q];if(z.location>=0){let te=k[q];if(te===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(te=v.instanceColor)),te!==void 0){const he=te.normalized,be=te.itemSize,Re=e.get(te);if(Re===void 0)continue;const Se=Re.buffer,$=Re.type,Y=Re.bytesPerElement,ne=$===n.INT||$===n.UNSIGNED_INT||te.gpuType===Oc;if(te.isInterleavedBufferAttribute){const Q=te.data,Pe=Q.stride,Ee=te.offset;if(Q.isInstancedInterleavedBuffer){for(let Ie=0;Ie<z.locationSize;Ie++)m(z.location+Ie,Q.meshPerAttribute);v.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ie=0;Ie<z.locationSize;Ie++)p(z.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let Ie=0;Ie<z.locationSize;Ie++)M(z.location+Ie,be/z.locationSize,$,he,Pe*Y,(Ee+be/z.locationSize*Ie)*Y,ne)}else{if(te.isInstancedBufferAttribute){for(let Q=0;Q<z.locationSize;Q++)m(z.location+Q,te.meshPerAttribute);v.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Q=0;Q<z.locationSize;Q++)p(z.location+Q);n.bindBuffer(n.ARRAY_BUFFER,Se);for(let Q=0;Q<z.locationSize;Q++)M(z.location+Q,be/z.locationSize,$,he,be*Y,be/z.locationSize*Q*Y,ne)}}else if(N!==void 0){const he=N[q];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(z.location,he);break;case 3:n.vertexAttrib3fv(z.location,he);break;case 4:n.vertexAttrib4fv(z.location,he);break;default:n.vertexAttrib1fv(z.location,he)}}}}x()}function L(){R();for(const v in i){const b=i[v];for(const D in b){const C=b[D];for(const k in C)c(C[k].object),delete C[k];delete b[D]}delete i[v]}}function y(v){if(i[v.id]===void 0)return;const b=i[v.id];for(const D in b){const C=b[D];for(const k in C)c(C[k].object),delete C[k];delete b[D]}delete i[v.id]}function S(v){for(const b in i){const D=i[b];if(D[v.id]===void 0)continue;const C=D[v.id];for(const k in C)c(C[k].object),delete C[k];delete D[v.id]}}function R(){P(),a=!0,s!==r&&(s=r,u(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:P,dispose:L,releaseStatesOfGeometry:y,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function sv(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function a(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function o(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let h=0;for(let g=0;g<f;g++)h+=c[g];t.update(h,i,1)}function l(u,c,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<u.length;g++)a(u[g],c[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=c[_];for(let _=0;_<d.length;_++)t.update(g,i,d[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ov(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(S){return!(S!==Qn&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){const R=S===Ao&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Xi&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==xi&&!R)}function l(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const S=e.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,y=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:E,vertexTextures:L,maxSamples:y}}function av(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ur,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=c(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!r||g===null||g.length===0||s&&!p)s?c(null):u();else{const x=s?0:i,M=x*4;let E=m.clippingState||null;l.value=E,E=c(g,d,M,h);for(let L=0;L!==M;++L)E[L]=t[L];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,h,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=h+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,E=h;M!==_;++M,E+=4)a.copy(f[M]).applyMatrix4(x,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function lv(n){let e=new WeakMap;function t(a,o){return o===z0?a.mapping=Os:o===H0&&(a.mapping=Fs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===z0||o===H0)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new xg(l.height);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class jc extends Ch{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ws=4,rf=[.125,.215,.35,.446,.526,.582],Br=20,Dl=new jc,sf=new ut;let Ul=null,kl=0,Nl=0,Ol=!1;const kr=(1+Math.sqrt(5))/2,hs=1/kr,of=[new U(-kr,hs,0),new U(kr,hs,0),new U(-hs,0,kr),new U(hs,0,kr),new U(0,kr,-hs),new U(0,kr,hs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class af{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ul=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ul,kl,Nl),this._renderer.xr.enabled=Ol,e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ul=this._renderer.getRenderTarget(),kl=this._renderer.getActiveCubeFace(),Nl=this._renderer.getActiveMipmapLevel(),Ol=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:Ao,format:Qn,colorSpace:gr,depthBuffer:!1},r=lf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cv(s)),this._blurMaterial=uv(s,e,t)}return r}_compileMaterial(e){const t=new Rt(this._lodPlanes[0],e);this._renderer.compile(t,Dl)}_sceneToCubeUV(e,t,i,r){const o=new _n(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(sf),c.toneMapping=hr,c.autoClear=!1;const h=new Sn({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),g=new Rt(new vn,h);let _=!1;const p=e.background;p?p.isColor&&(h.color.copy(p),e.background=null,_=!0):(h.color.copy(sf),_=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(o.up.set(0,l[m],0),o.lookAt(u[m],0,0)):x===1?(o.up.set(0,0,l[m]),o.lookAt(0,u[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,u[m]));const M=this._cubeSize;aa(r,x*M,m>2?M:0,M,M),c.setRenderTarget(r),_&&c.render(g,o),c.render(e,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Os||e.mapping===Fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Rt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;aa(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Dl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=of[(r-s-1)%of.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Rt(this._lodPlanes[r],u),d=u.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Br-1),_=s/g,p=isFinite(s)?1+Math.floor(c*_):Br;p>Br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Br}`);const m=[];let x=0;for(let S=0;S<Br;++S){const R=S/_,P=Math.exp(-R*R/2);m.push(P),S===0?x+=P:S<p&&(x+=2*P)}for(let S=0;S<m.length;S++)m[S]=m[S]/x;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const E=this._sizeLods[r],L=3*E*(r>M-ws?r-M+ws:0),y=4*(this._cubeSize-E);aa(t,L,y,3*E,2*E),l.setRenderTarget(t),l.render(f,Dl)}}function cv(n){const e=[],t=[],i=[];let r=n;const s=n-ws+1+rf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-ws?l=rf[a-n+ws-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],h=6,g=6,_=3,p=2,m=1,x=new Float32Array(_*g*h),M=new Float32Array(p*g*h),E=new Float32Array(m*g*h);for(let y=0;y<h;y++){const S=y%3*2/3-1,R=y>2?0:-1,P=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];x.set(P,_*g*y),M.set(d,p*g*y);const v=[y,y,y,y,y,y];E.set(v,m*g*y)}const L=new di;L.setAttribute("position",new On(x,_)),L.setAttribute("uv",new On(M,p)),L.setAttribute("faceIndex",new On(E,m)),e.push(L),r>ws&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function lf(n,e,t){const i=new $r(n,e,t);return i.texture.mapping=qa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function aa(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function uv(n,e,t){const i=new Float32Array(Br),r=new U(0,1,0);return new mr({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function cf(){return new mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function uf(){return new mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Kc(){return`

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
	`}function fv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===z0||l===H0,c=l===Os||l===Fs;if(u||c){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new af(n)),f=u?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return u&&h&&h.height>0||c&&h&&r(h)?(t===null&&(t=new af(n)),f=u?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function dv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Aa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function hv(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",a),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const _=h[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],n.ARRAY_BUFFER)}}function u(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const x=h.array;_=h.version;for(let M=0,E=x.length;M<E;M+=3){const L=x[M+0],y=x[M+1],S=x[M+2];d.push(L,y,y,S,S,L)}}else if(g!==void 0){const x=g.array;_=g.version;for(let M=0,E=x.length/3-1;M<E;M+=3){const L=M+0,y=M+1,S=M+2;d.push(L,y,y,S,S,L)}}else return;const p=new(Eh(d)?Rh:Yc)(d,1);p.version=_;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function c(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function pv(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*a),t.update(h,i,1)}function u(d,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,d*a,g),t.update(h,i,g))}function c(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,g);let p=0;for(let m=0;m<g;m++)p+=h[m];t.update(p,i,1)}function f(d,h,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)u(d[m]/a,h[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,_,0,g);let m=0;for(let x=0;x<g;x++)m+=h[x];for(let x=0;x<_.length;x++)t.update(m,i,_[x])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function mv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function gv(n,e,t){const i=new WeakMap,r=new Dt;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let P=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();const h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;h===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let E=o.attributes.position.count*M,L=1;E>e.maxTextureSize&&(L=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const y=new Float32Array(E*L*4*f),S=new Th(y,E,L,f);S.type=xi,S.needsUpdate=!0;const R=M*4;for(let v=0;v<f;v++){const b=p[v],D=m[v],C=x[v],k=E*L*4*v;for(let F=0;F<b.count;F++){const N=F*R;h===!0&&(r.fromBufferAttribute(b,F),y[k+N+0]=r.x,y[k+N+1]=r.y,y[k+N+2]=r.z,y[k+N+3]=0),g===!0&&(r.fromBufferAttribute(D,F),y[k+N+4]=r.x,y[k+N+5]=r.y,y[k+N+6]=r.z,y[k+N+7]=0),_===!0&&(r.fromBufferAttribute(C,F),y[k+N+8]=r.x,y[k+N+9]=r.y,y[k+N+10]=r.z,y[k+N+11]=C.itemSize===4?r.w:1)}}d={count:f,texture:S,size:new dt(E,L)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let h=0;for(let _=0;_<u.length;_++)h+=u[_];const g=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function _v(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}class Dh extends xn{constructor(e,t,i,r,s,a,o,l,u,c=Ps){if(c!==Ps&&c!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ps&&(i=Yr),i===void 0&&c===zs&&(i=Bs),super(null,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Un,this.minFilter=l!==void 0?l:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Uh=new xn,ff=new Dh(1,1),kh=new Th,Nh=new ig,Oh=new Ph,df=[],hf=[],pf=new Float32Array(16),mf=new Float32Array(9),gf=new Float32Array(4);function qs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=df[r];if(s===void 0&&(s=new Float32Array(r),df[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $a(n,e){let t=hf[e];t===void 0&&(t=new Int32Array(e),hf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function xv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2fv(this.addr,e),Jt(t,e)}}function Mv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;n.uniform3fv(this.addr,e),Jt(t,e)}}function Sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4fv(this.addr,e),Jt(t,e)}}function yv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;gf.set(i),n.uniformMatrix2fv(this.addr,!1,gf),Jt(t,i)}}function bv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;mf.set(i),n.uniformMatrix3fv(this.addr,!1,mf),Jt(t,i)}}function Ev(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Zt(t,i))return;pf.set(i),n.uniformMatrix4fv(this.addr,!1,pf),Jt(t,i)}}function wv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Tv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2iv(this.addr,e),Jt(t,e)}}function Av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3iv(this.addr,e),Jt(t,e)}}function Rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4iv(this.addr,e),Jt(t,e)}}function Lv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Cv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;n.uniform2uiv(this.addr,e),Jt(t,e)}}function Pv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;n.uniform3uiv(this.addr,e),Jt(t,e)}}function Iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;n.uniform4uiv(this.addr,e),Jt(t,e)}}function Dv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(ff.compareFunction=bh,s=ff):s=Uh,t.setTexture2D(e||s,r)}function Uv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Nh,r)}function kv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Oh,r)}function Nv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||kh,r)}function Ov(n){switch(n){case 5126:return vv;case 35664:return xv;case 35665:return Mv;case 35666:return Sv;case 35674:return yv;case 35675:return bv;case 35676:return Ev;case 5124:case 35670:return wv;case 35667:case 35671:return Tv;case 35668:case 35672:return Av;case 35669:case 35673:return Rv;case 5125:return Lv;case 36294:return Cv;case 36295:return Pv;case 36296:return Iv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Uv;case 35680:case 36300:case 36308:case 36293:return kv;case 36289:case 36303:case 36311:case 36292:return Nv}}function Fv(n,e){n.uniform1fv(this.addr,e)}function Bv(n,e){const t=qs(e,this.size,2);n.uniform2fv(this.addr,t)}function zv(n,e){const t=qs(e,this.size,3);n.uniform3fv(this.addr,t)}function Hv(n,e){const t=qs(e,this.size,4);n.uniform4fv(this.addr,t)}function Gv(n,e){const t=qs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vv(n,e){const t=qs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Wv(n,e){const t=qs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Xv(n,e){n.uniform1iv(this.addr,e)}function qv(n,e){n.uniform2iv(this.addr,e)}function Yv(n,e){n.uniform3iv(this.addr,e)}function $v(n,e){n.uniform4iv(this.addr,e)}function jv(n,e){n.uniform1uiv(this.addr,e)}function Kv(n,e){n.uniform2uiv(this.addr,e)}function Zv(n,e){n.uniform3uiv(this.addr,e)}function Jv(n,e){n.uniform4uiv(this.addr,e)}function Qv(n,e,t){const i=this.cache,r=e.length,s=$a(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Uh,s[a])}function ex(n,e,t){const i=this.cache,r=e.length,s=$a(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Nh,s[a])}function tx(n,e,t){const i=this.cache,r=e.length,s=$a(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Oh,s[a])}function nx(n,e,t){const i=this.cache,r=e.length,s=$a(t,r);Zt(i,s)||(n.uniform1iv(this.addr,s),Jt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||kh,s[a])}function ix(n){switch(n){case 5126:return Fv;case 35664:return Bv;case 35665:return zv;case 35666:return Hv;case 35674:return Gv;case 35675:return Vv;case 35676:return Wv;case 5124:case 35670:return Xv;case 35667:case 35671:return qv;case 35668:case 35672:return Yv;case 35669:case 35673:return $v;case 5125:return jv;case 36294:return Kv;case 36295:return Zv;case 36296:return Jv;case 35678:case 36198:case 36298:case 36306:case 35682:return Qv;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return tx;case 36289:case 36303:case 36311:case 36292:return nx}}class rx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ov(t.type)}}class sx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ix(t.type)}}class ox{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Fl=/(\w+)(\])?(\[|\.)?/g;function _f(n,e){n.seq.push(e),n.map[e.id]=e}function ax(n,e,t){const i=n.name,r=i.length;for(Fl.lastIndex=0;;){const s=Fl.exec(i),a=Fl.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){_f(t,u===void 0?new rx(o,n,e):new sx(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new ox(o),_f(t,f)),t=f}}}class Ra{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);ax(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function vf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const lx=37297;let cx=0;function ux(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function fx(n){const e=xt.getPrimaries(xt.workingColorSpace),t=xt.getPrimaries(n);let i;switch(e===t?i="":e===Fa&&t===Oa?i="LinearDisplayP3ToLinearSRGB":e===Oa&&t===Fa&&(i="LinearSRGBToLinearDisplayP3"),n){case gr:case Ya:return[i,"LinearTransferOETF"];case Gn:case Vc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function xf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ux(n.getShaderSource(e),a)}else return r}function dx(n,e){const t=fx(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function hx(n,e){let t;switch(e){case pm:t="Linear";break;case mm:t="Reinhard";break;case gm:t="Cineon";break;case Nc:t="ACESFilmic";break;case vm:t="AgX";break;case xm:t="Neutral";break;case _m:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const la=new U;function px(){xt.getLuminanceCoefficients(la);const n=la.x.toFixed(4),e=la.y.toFixed(4),t=la.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function gx(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _x(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function fo(n){return n!==""}function Mf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vx=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(n){return n.replace(vx,Mx)}const xx=new Map;function Mx(n,e){let t=rt[e];if(t===void 0){const i=xx.get(e);if(i!==void 0)t=rt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mc(t)}const Sx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yf(n){return n.replace(Sx,yx)}function yx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bf(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ch?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function Ex(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Os:case Fs:e="ENVMAP_TYPE_CUBE";break;case qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function Tx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case uh:e="ENVMAP_BLENDING_MULTIPLY";break;case dm:e="ENVMAP_BLENDING_MIX";break;case hm:e="ENVMAP_BLENDING_ADD";break}return e}function Ax(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Rx(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=bx(t),u=Ex(t),c=wx(t),f=Tx(t),d=Ax(t),h=mx(t),g=gx(s),_=r.createProgram();let p,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(fo).join(`
`),m.length>0&&(m+=`
`)):(p=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),m=[bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hr?"#define TONE_MAPPING":"",t.toneMapping!==hr?rt.tonemapping_pars_fragment:"",t.toneMapping!==hr?hx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,dx("linearToOutputTexel",t.outputColorSpace),px(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fo).join(`
`)),a=mc(a),a=Mf(a,t),a=Sf(a,t),o=mc(o),o=Mf(o,t),o=Sf(o,t),a=yf(a),o=yf(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=x+p+a,E=x+m+o,L=vf(r,r.VERTEX_SHADER,M),y=vf(r,r.FRAGMENT_SHADER,E);r.attachShader(_,L),r.attachShader(_,y),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function S(b){if(n.debug.checkShaderErrors){const D=r.getProgramInfoLog(_).trim(),C=r.getShaderInfoLog(L).trim(),k=r.getShaderInfoLog(y).trim();let F=!0,N=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,L,y);else{const q=xf(r,L,"vertex"),z=xf(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+D+`
`+q+`
`+z)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(C===""||k==="")&&(N=!1);N&&(b.diagnostics={runnable:F,programLog:D,vertexShader:{log:C,prefix:p},fragmentShader:{log:k,prefix:m}})}r.deleteShader(L),r.deleteShader(y),R=new Ra(r,_),P=_x(r,_)}let R;this.getUniforms=function(){return R===void 0&&S(this),R};let P;this.getAttributes=function(){return P===void 0&&S(this),P};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,lx)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=y,this}let Lx=0;class Cx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Px(e),t.set(e,i)),i}}class Px{constructor(e){this.id=Lx++,this.code=e,this.usedTimes=0}}function Ix(n,e,t,i,r,s,a){const o=new qc,l=new Cx,u=new Set,c=[],f=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,h=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return u.add(v),v===0?"uv":`uv${v}`}function m(v,b,D,C,k){const F=C.fog,N=k.geometry,q=v.isMeshStandardMaterial?C.environment:null,z=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),te=z&&z.mapping===qa?z.image.height:null,he=_[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const be=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Re=be!==void 0?be.length:0;let Se=0;N.morphAttributes.position!==void 0&&(Se=1),N.morphAttributes.normal!==void 0&&(Se=2),N.morphAttributes.color!==void 0&&(Se=3);let $,Y,ne,Q;if(he){const $t=_i[he];$=$t.vertexShader,Y=$t.fragmentShader}else $=v.vertexShader,Y=v.fragmentShader,l.update(v),ne=l.getVertexShaderID(v),Q=l.getFragmentShaderID(v);const Pe=n.getRenderTarget(),Ee=k.isInstancedMesh===!0,Ie=k.isBatchedMesh===!0,ze=!!v.map,We=!!v.matcap,H=!!z,Vt=!!v.aoMap,Ge=!!v.lightMap,tt=!!v.bumpMap,ie=!!v.normalMap,nt=!!v.displacementMap,qe=!!v.emissiveMap,I=!!v.metalnessMap,w=!!v.roughnessMap,K=v.anisotropy>0,se=v.clearcoat>0,ae=v.dispersion>0,oe=v.iridescence>0,ke=v.sheen>0,me=v.transmission>0,Ue=K&&!!v.anisotropyMap,it=se&&!!v.clearcoatMap,ue=se&&!!v.clearcoatNormalMap,ve=se&&!!v.clearcoatRoughnessMap,Ve=oe&&!!v.iridescenceMap,Xe=oe&&!!v.iridescenceThicknessMap,ge=ke&&!!v.sheenColorMap,Ze=ke&&!!v.sheenRoughnessMap,$e=!!v.specularMap,_t=!!v.specularColorMap,G=!!v.specularIntensityMap,Te=me&&!!v.transmissionMap,J=me&&!!v.thicknessMap,ce=!!v.gradientMap,Me=!!v.alphaMap,Le=v.alphaTest>0,ot=!!v.alphaHash,kt=!!v.extensions;let Ht=hr;v.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(Ht=n.toneMapping);const ct={shaderID:he,shaderType:v.type,shaderName:v.name,vertexShader:$,fragmentShader:Y,defines:v.defines,customVertexShaderID:ne,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Ie,batchingColor:Ie&&k._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&k.instanceColor!==null,instancingMorph:Ee&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Pe===null?n.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:gr,alphaToCoverage:!!v.alphaToCoverage,map:ze,matcap:We,envMap:H,envMapMode:H&&z.mapping,envMapCubeUVHeight:te,aoMap:Vt,lightMap:Ge,bumpMap:tt,normalMap:ie,displacementMap:h&&nt,emissiveMap:qe,normalMapObjectSpace:ie&&v.normalMapType===Em,normalMapTangentSpace:ie&&v.normalMapType===yh,metalnessMap:I,roughnessMap:w,anisotropy:K,anisotropyMap:Ue,clearcoat:se,clearcoatMap:it,clearcoatNormalMap:ue,clearcoatRoughnessMap:ve,dispersion:ae,iridescence:oe,iridescenceMap:Ve,iridescenceThicknessMap:Xe,sheen:ke,sheenColorMap:ge,sheenRoughnessMap:Ze,specularMap:$e,specularColorMap:_t,specularIntensityMap:G,transmission:me,transmissionMap:Te,thicknessMap:J,gradientMap:ce,opaque:v.transparent===!1&&v.blending===Cs&&v.alphaToCoverage===!1,alphaMap:Me,alphaTest:Le,alphaHash:ot,combine:v.combine,mapUv:ze&&p(v.map.channel),aoMapUv:Vt&&p(v.aoMap.channel),lightMapUv:Ge&&p(v.lightMap.channel),bumpMapUv:tt&&p(v.bumpMap.channel),normalMapUv:ie&&p(v.normalMap.channel),displacementMapUv:nt&&p(v.displacementMap.channel),emissiveMapUv:qe&&p(v.emissiveMap.channel),metalnessMapUv:I&&p(v.metalnessMap.channel),roughnessMapUv:w&&p(v.roughnessMap.channel),anisotropyMapUv:Ue&&p(v.anisotropyMap.channel),clearcoatMapUv:it&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&p(v.sheenRoughnessMap.channel),specularMapUv:$e&&p(v.specularMap.channel),specularColorMapUv:_t&&p(v.specularColorMap.channel),specularIntensityMapUv:G&&p(v.specularIntensityMap.channel),transmissionMapUv:Te&&p(v.transmissionMap.channel),thicknessMapUv:J&&p(v.thicknessMap.channel),alphaMapUv:Me&&p(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ie||K),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!N.attributes.uv&&(ze||Me),fog:!!F,useFog:v.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ht,decodeVideoTexture:ze&&v.map.isVideoTexture===!0&&xt.getTransfer(v.map.colorSpace)===Pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Fi,flipSided:v.side===Nn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:kt&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&v.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ct.vertexUv1s=u.has(1),ct.vertexUv2s=u.has(2),ct.vertexUv3s=u.has(3),u.clear(),ct}function x(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)b.push(D),b.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(M(b,v),E(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function M(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function E(v,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),v.push(o.mask)}function L(v){const b=_[v.type];let D;if(b){const C=_i[b];D=mg.clone(C.uniforms)}else D=v.uniforms;return D}function y(v,b){let D;for(let C=0,k=c.length;C<k;C++){const F=c[C];if(F.cacheKey===b){D=F,++D.usedTimes;break}}return D===void 0&&(D=new Rx(n,b,v,s),c.push(D)),D}function S(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),v.destroy()}}function R(v){l.remove(v)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:L,acquireProgram:y,releaseProgram:S,releaseShaderCache:R,programs:c,dispose:P}}function Dx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Ux(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ef(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,h,g,_,p){let m=n[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},n[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=h,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function o(f,d,h,g,_,p){const m=a(f,d,h,g,_,p);h.transmission>0?i.push(m):h.transparent===!0?r.push(m):t.push(m)}function l(f,d,h,g,_,p){const m=a(f,d,h,g,_,p);h.transmission>0?i.unshift(m):h.transparent===!0?r.unshift(m):t.unshift(m)}function u(f,d){t.length>1&&t.sort(f||Ux),i.length>1&&i.sort(d||Ef),r.length>1&&r.sort(d||Ef)}function c(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:u}}function kx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new wf,n.set(i,[a])):r>=s.length?(a=new wf,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Nx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ut};break;case"SpotLight":t={position:new U,direction:new U,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function Ox(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Fx=0;function Bx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function zx(n){const e=new Nx,t=Ox(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,s=new et,a=new et;function o(u){let c=0,f=0,d=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let h=0,g=0,_=0,p=0,m=0,x=0,M=0,E=0,L=0,y=0,S=0;u.sort(Bx);for(let P=0,v=u.length;P<v;P++){const b=u[P],D=b.color,C=b.intensity,k=b.distance,F=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)c+=D.r*C,f+=D.g*C,d+=D.b*C;else if(b.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(b.sh.coefficients[N],C);S++}else if(b.isDirectionalLight){const N=e.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const q=b.shadow,z=t.get(b);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,i.directionalShadow[h]=z,i.directionalShadowMap[h]=F,i.directionalShadowMatrix[h]=b.shadow.matrix,x++}i.directional[h]=N,h++}else if(b.isSpotLight){const N=e.get(b);N.position.setFromMatrixPosition(b.matrixWorld),N.color.copy(D).multiplyScalar(C),N.distance=k,N.coneCos=Math.cos(b.angle),N.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),N.decay=b.decay,i.spot[_]=N;const q=b.shadow;if(b.map&&(i.spotLightMap[L]=b.map,L++,q.updateMatrices(b),b.castShadow&&y++),i.spotLightMatrix[_]=q.matrix,b.castShadow){const z=t.get(b);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,i.spotShadow[_]=z,i.spotShadowMap[_]=F,E++}_++}else if(b.isRectAreaLight){const N=e.get(b);N.color.copy(D).multiplyScalar(C),N.halfWidth.set(b.width*.5,0,0),N.halfHeight.set(0,b.height*.5,0),i.rectArea[p]=N,p++}else if(b.isPointLight){const N=e.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),N.distance=b.distance,N.decay=b.decay,b.castShadow){const q=b.shadow,z=t.get(b);z.shadowIntensity=q.intensity,z.shadowBias=q.bias,z.shadowNormalBias=q.normalBias,z.shadowRadius=q.radius,z.shadowMapSize=q.mapSize,z.shadowCameraNear=q.camera.near,z.shadowCameraFar=q.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=b.shadow.matrix,M++}i.point[g]=N,g++}else if(b.isHemisphereLight){const N=e.get(b);N.skyColor.copy(b.color).multiplyScalar(C),N.groundColor.copy(b.groundColor).multiplyScalar(C),i.hemi[m]=N,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==h||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==p||R.hemiLength!==m||R.numDirectionalShadows!==x||R.numPointShadows!==M||R.numSpotShadows!==E||R.numSpotMaps!==L||R.numLightProbes!==S)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+L-y,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=S,R.directionalLength=h,R.pointLength=g,R.spotLength=_,R.rectAreaLength=p,R.hemiLength=m,R.numDirectionalShadows=x,R.numPointShadows=M,R.numSpotShadows=E,R.numSpotMaps=L,R.numLightProbes=S,i.version=Fx++)}function l(u,c){let f=0,d=0,h=0,g=0,_=0;const p=c.matrixWorldInverse;for(let m=0,x=u.length;m<x;m++){const M=u[m];if(M.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(M.isSpotLight){const E=i.spot[h];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),h++}else if(M.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(M.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:i}}function Tf(n){const e=new zx(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function a(c){i.push(c)}function o(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Hx(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Tf(n),e.set(r,[o])):s>=a.length?(o=new Tf(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Gx extends Lo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ym,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vx extends Lo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xx=`uniform sampler2D shadow_pass;
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
}`;function qx(n,e,t){let i=new $c;const r=new dt,s=new dt,a=new Dt,o=new Gx({depthPacking:bm}),l=new Vx,u={},c=t.maxTextureSize,f={[Wi]:Nn,[Nn]:Wi,[Fi]:Fi},d=new mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:Wx,fragmentShader:Xx}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new di;g.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Rt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ch;let m=this.type;this.render=function(y,S,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const P=n.getRenderTarget(),v=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),D=n.state;D.setBlending(dr),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const C=m!==Oi&&this.type===Oi,k=m===Oi&&this.type!==Oi;for(let F=0,N=y.length;F<N;F++){const q=y[F],z=q.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const te=z.getFrameExtents();if(r.multiply(te),s.copy(z.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/te.x),r.x=s.x*te.x,z.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/te.y),r.y=s.y*te.y,z.mapSize.y=s.y)),z.map===null||C===!0||k===!0){const be=this.type!==Oi?{minFilter:Un,magFilter:Un}:{};z.map!==null&&z.map.dispose(),z.map=new $r(r.x,r.y,be),z.map.texture.name=q.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const he=z.getViewportCount();for(let be=0;be<he;be++){const Re=z.getViewport(be);a.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),D.viewport(a),z.updateMatrices(q,be),i=z.getFrustum(),E(S,R,z.camera,q,this.type)}z.isPointLightShadow!==!0&&this.type===Oi&&x(z,R),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(P,v,b)};function x(y,S){const R=e.update(_);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,h.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new $r(r.x,r.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(S,null,R,d,_,null),h.uniforms.shadow_pass.value=y.mapPass.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(S,null,R,h,_,null)}function M(y,S,R,P){let v=null;const b=R.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(b!==void 0)v=b;else if(v=R.isPointLight===!0?l:o,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const D=v.uuid,C=S.uuid;let k=u[D];k===void 0&&(k={},u[D]=k);let F=k[C];F===void 0&&(F=v.clone(),k[C]=F,S.addEventListener("dispose",L)),v=F}if(v.visible=S.visible,v.wireframe=S.wireframe,P===Oi?v.side=S.shadowSide!==null?S.shadowSide:S.side:v.side=S.shadowSide!==null?S.shadowSide:f[S.side],v.alphaMap=S.alphaMap,v.alphaTest=S.alphaTest,v.map=S.map,v.clipShadows=S.clipShadows,v.clippingPlanes=S.clippingPlanes,v.clipIntersection=S.clipIntersection,v.displacementMap=S.displacementMap,v.displacementScale=S.displacementScale,v.displacementBias=S.displacementBias,v.wireframeLinewidth=S.wireframeLinewidth,v.linewidth=S.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const D=n.properties.get(v);D.light=R}return v}function E(y,S,R,P,v){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===Oi)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,y.matrixWorld);const C=e.update(y),k=y.material;if(Array.isArray(k)){const F=C.groups;for(let N=0,q=F.length;N<q;N++){const z=F[N],te=k[z.materialIndex];if(te&&te.visible){const he=M(y,te,P,v);y.onBeforeShadow(n,y,S,R,C,he,z),n.renderBufferDirect(R,null,C,he,y,z),y.onAfterShadow(n,y,S,R,C,he,z)}}}else if(k.visible){const F=M(y,k,P,v);y.onBeforeShadow(n,y,S,R,C,F,null),n.renderBufferDirect(R,null,C,F,y,null),y.onAfterShadow(n,y,S,R,C,F,null)}}const D=y.children;for(let C=0,k=D.length;C<k;C++)E(D[C],S,R,P,v)}function L(y){y.target.removeEventListener("dispose",L);for(const R in u){const P=u[R],v=y.target.uuid;v in P&&(P[v].dispose(),delete P[v])}}}const Yx={[D0]:U0,[k0]:F0,[N0]:B0,[Ns]:O0,[U0]:D0,[F0]:k0,[B0]:N0,[O0]:Ns};function $x(n){function e(){let G=!1;const Te=new Dt;let J=null;const ce=new Dt(0,0,0,0);return{setMask:function(Me){J!==Me&&!G&&(n.colorMask(Me,Me,Me,Me),J=Me)},setLocked:function(Me){G=Me},setClear:function(Me,Le,ot,kt,Ht){Ht===!0&&(Me*=kt,Le*=kt,ot*=kt),Te.set(Me,Le,ot,kt),ce.equals(Te)===!1&&(n.clearColor(Me,Le,ot,kt),ce.copy(Te))},reset:function(){G=!1,J=null,ce.set(-1,0,0,0)}}}function t(){let G=!1,Te=!1,J=null,ce=null,Me=null;return{setReversed:function(Le){Te=Le},setTest:function(Le){Le?ne(n.DEPTH_TEST):Q(n.DEPTH_TEST)},setMask:function(Le){J!==Le&&!G&&(n.depthMask(Le),J=Le)},setFunc:function(Le){if(Te&&(Le=Yx[Le]),ce!==Le){switch(Le){case D0:n.depthFunc(n.NEVER);break;case U0:n.depthFunc(n.ALWAYS);break;case k0:n.depthFunc(n.LESS);break;case Ns:n.depthFunc(n.LEQUAL);break;case N0:n.depthFunc(n.EQUAL);break;case O0:n.depthFunc(n.GEQUAL);break;case F0:n.depthFunc(n.GREATER);break;case B0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ce=Le}},setLocked:function(Le){G=Le},setClear:function(Le){Me!==Le&&(n.clearDepth(Le),Me=Le)},reset:function(){G=!1,J=null,ce=null,Me=null}}}function i(){let G=!1,Te=null,J=null,ce=null,Me=null,Le=null,ot=null,kt=null,Ht=null;return{setTest:function(ct){G||(ct?ne(n.STENCIL_TEST):Q(n.STENCIL_TEST))},setMask:function(ct){Te!==ct&&!G&&(n.stencilMask(ct),Te=ct)},setFunc:function(ct,$t,Qt){(J!==ct||ce!==$t||Me!==Qt)&&(n.stencilFunc(ct,$t,Qt),J=ct,ce=$t,Me=Qt)},setOp:function(ct,$t,Qt){(Le!==ct||ot!==$t||kt!==Qt)&&(n.stencilOp(ct,$t,Qt),Le=ct,ot=$t,kt=Qt)},setLocked:function(ct){G=ct},setClear:function(ct){Ht!==ct&&(n.clearStencil(ct),Ht=ct)},reset:function(){G=!1,Te=null,J=null,ce=null,Me=null,Le=null,ot=null,kt=null,Ht=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,d=[],h=null,g=!1,_=null,p=null,m=null,x=null,M=null,E=null,L=null,y=new ut(0,0,0),S=0,R=!1,P=null,v=null,b=null,D=null,C=null;const k=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,N=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(q)[1]),F=N>=1):q.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),F=N>=2);let z=null,te={};const he=n.getParameter(n.SCISSOR_BOX),be=n.getParameter(n.VIEWPORT),Re=new Dt().fromArray(he),Se=new Dt().fromArray(be);function $(G,Te,J,ce){const Me=new Uint8Array(4),Le=n.createTexture();n.bindTexture(G,Le),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ot=0;ot<J;ot++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(Te+ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return Le}const Y={};Y[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ne(n.DEPTH_TEST),s.setFunc(Ns),Ge(!1),tt(Iu),ne(n.CULL_FACE),H(dr);function ne(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function Q(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function Pe(G,Te){return c[G]!==Te?(n.bindFramebuffer(G,Te),c[G]=Te,G===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=Te),G===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function Ee(G,Te){let J=d,ce=!1;if(G){J=f.get(Te),J===void 0&&(J=[],f.set(Te,J));const Me=G.textures;if(J.length!==Me.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Le=0,ot=Me.length;Le<ot;Le++)J[Le]=n.COLOR_ATTACHMENT0+Le;J.length=Me.length,ce=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,ce=!0);ce&&n.drawBuffers(J)}function Ie(G){return h!==G?(n.useProgram(G),h=G,!0):!1}const ze={[Fr]:n.FUNC_ADD,[jp]:n.FUNC_SUBTRACT,[Kp]:n.FUNC_REVERSE_SUBTRACT};ze[Zp]=n.MIN,ze[Jp]=n.MAX;const We={[Qp]:n.ZERO,[em]:n.ONE,[tm]:n.SRC_COLOR,[P0]:n.SRC_ALPHA,[am]:n.SRC_ALPHA_SATURATE,[sm]:n.DST_COLOR,[im]:n.DST_ALPHA,[nm]:n.ONE_MINUS_SRC_COLOR,[I0]:n.ONE_MINUS_SRC_ALPHA,[om]:n.ONE_MINUS_DST_COLOR,[rm]:n.ONE_MINUS_DST_ALPHA,[lm]:n.CONSTANT_COLOR,[cm]:n.ONE_MINUS_CONSTANT_COLOR,[um]:n.CONSTANT_ALPHA,[fm]:n.ONE_MINUS_CONSTANT_ALPHA};function H(G,Te,J,ce,Me,Le,ot,kt,Ht,ct){if(G===dr){g===!0&&(Q(n.BLEND),g=!1);return}if(g===!1&&(ne(n.BLEND),g=!0),G!==$p){if(G!==_||ct!==R){if((p!==Fr||M!==Fr)&&(n.blendEquation(n.FUNC_ADD),p=Fr,M=Fr),ct)switch(G){case Cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mo:n.blendFunc(n.ONE,n.ONE);break;case Du:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Du:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}m=null,x=null,E=null,L=null,y.set(0,0,0),S=0,_=G,R=ct}return}Me=Me||Te,Le=Le||J,ot=ot||ce,(Te!==p||Me!==M)&&(n.blendEquationSeparate(ze[Te],ze[Me]),p=Te,M=Me),(J!==m||ce!==x||Le!==E||ot!==L)&&(n.blendFuncSeparate(We[J],We[ce],We[Le],We[ot]),m=J,x=ce,E=Le,L=ot),(kt.equals(y)===!1||Ht!==S)&&(n.blendColor(kt.r,kt.g,kt.b,Ht),y.copy(kt),S=Ht),_=G,R=!1}function Vt(G,Te){G.side===Fi?Q(n.CULL_FACE):ne(n.CULL_FACE);let J=G.side===Nn;Te&&(J=!J),Ge(J),G.blending===Cs&&G.transparent===!1?H(dr):H(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),s.setFunc(G.depthFunc),s.setTest(G.depthTest),s.setMask(G.depthWrite),r.setMask(G.colorWrite);const ce=G.stencilWrite;a.setTest(ce),ce&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),nt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):Q(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(G){P!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),P=G)}function tt(G){G!==Xp?(ne(n.CULL_FACE),G!==v&&(G===Iu?n.cullFace(n.BACK):G===qp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Q(n.CULL_FACE),v=G}function ie(G){G!==b&&(F&&n.lineWidth(G),b=G)}function nt(G,Te,J){G?(ne(n.POLYGON_OFFSET_FILL),(D!==Te||C!==J)&&(n.polygonOffset(Te,J),D=Te,C=J)):Q(n.POLYGON_OFFSET_FILL)}function qe(G){G?ne(n.SCISSOR_TEST):Q(n.SCISSOR_TEST)}function I(G){G===void 0&&(G=n.TEXTURE0+k-1),z!==G&&(n.activeTexture(G),z=G)}function w(G,Te,J){J===void 0&&(z===null?J=n.TEXTURE0+k-1:J=z);let ce=te[J];ce===void 0&&(ce={type:void 0,texture:void 0},te[J]=ce),(ce.type!==G||ce.texture!==Te)&&(z!==J&&(n.activeTexture(J),z=J),n.bindTexture(G,Te||Y[G]),ce.type=G,ce.texture=Te)}function K(){const G=te[z];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ae(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function it(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xe(G){Re.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Re.copy(G))}function ge(G){Se.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Se.copy(G))}function Ze(G,Te){let J=l.get(Te);J===void 0&&(J=new WeakMap,l.set(Te,J));let ce=J.get(G);ce===void 0&&(ce=n.getUniformBlockIndex(Te,G.name),J.set(G,ce))}function $e(G,Te){const ce=l.get(Te).get(G);o.get(Te)!==ce&&(n.uniformBlockBinding(Te,ce,G.__bindingPointIndex),o.set(Te,ce))}function _t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},z=null,te={},c={},f=new WeakMap,d=[],h=null,g=!1,_=null,p=null,m=null,x=null,M=null,E=null,L=null,y=new ut(0,0,0),S=0,R=!1,P=null,v=null,b=null,D=null,C=null,Re.set(0,0,n.canvas.width,n.canvas.height),Se.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ne,disable:Q,bindFramebuffer:Pe,drawBuffers:Ee,useProgram:Ie,setBlending:H,setMaterial:Vt,setFlipSided:Ge,setCullFace:tt,setLineWidth:ie,setPolygonOffset:nt,setScissorTest:qe,activeTexture:I,bindTexture:w,unbindTexture:K,compressedTexImage2D:se,compressedTexImage3D:ae,texImage2D:ve,texImage3D:Ve,updateUBOMapping:Ze,uniformBlockBinding:$e,texStorage2D:it,texStorage3D:ue,texSubImage2D:oe,texSubImage3D:ke,compressedTexSubImage2D:me,compressedTexSubImage3D:Ue,scissor:Xe,viewport:ge,reset:_t}}function Af(n,e,t,i){const r=jx(i);switch(t){case mh:return n*e;case _h:return n*e;case vh:return n*e*2;case xh:return n*e/r.components*r.byteLength;case zc:return n*e/r.components*r.byteLength;case Mh:return n*e*2/r.components*r.byteLength;case Hc:return n*e*2/r.components*r.byteLength;case gh:return n*e*3/r.components*r.byteLength;case Qn:return n*e*4/r.components*r.byteLength;case Gc:return n*e*4/r.components*r.byteLength;case ya:case ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ea:case wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case W0:case q0:return Math.max(n,16)*Math.max(e,8)/4;case V0:case X0:return Math.max(n,8)*Math.max(e,8)/2;case Y0:case $0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case j0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case K0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Z0:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case J0:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Q0:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ec:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case tc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case nc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ic:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case sc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ac:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case lc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case cc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ta:case uc:case fc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Sh:case dc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case hc:case pc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jx(n){switch(n){case Xi:case dh:return{byteLength:1,components:1};case So:case hh:case Ao:return{byteLength:2,components:1};case Fc:case Bc:return{byteLength:2,components:4};case Yr:case Oc:case xi:return{byteLength:4,components:1};case ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Kx(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new dt,c=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,w){return h?new OffscreenCanvas(I,w):za("canvas")}function _(I,w,K){let se=1;const ae=qe(I);if((ae.width>K||ae.height>K)&&(se=K/Math.max(ae.width,ae.height)),se<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const oe=Math.floor(se*ae.width),ke=Math.floor(se*ae.height);f===void 0&&(f=g(oe,ke));const me=w?g(oe,ke):f;return me.width=oe,me.height=ke,me.getContext("2d").drawImage(I,0,0,oe,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+oe+"x"+ke+")."),me}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),I;return I}function p(I){return I.generateMipmaps&&I.minFilter!==Un&&I.minFilter!==Jn}function m(I){n.generateMipmap(I)}function x(I,w,K,se,ae=!1){if(I!==null){if(n[I]!==void 0)return n[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let oe=w;if(w===n.RED&&(K===n.FLOAT&&(oe=n.R32F),K===n.HALF_FLOAT&&(oe=n.R16F),K===n.UNSIGNED_BYTE&&(oe=n.R8)),w===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(oe=n.R8UI),K===n.UNSIGNED_SHORT&&(oe=n.R16UI),K===n.UNSIGNED_INT&&(oe=n.R32UI),K===n.BYTE&&(oe=n.R8I),K===n.SHORT&&(oe=n.R16I),K===n.INT&&(oe=n.R32I)),w===n.RG&&(K===n.FLOAT&&(oe=n.RG32F),K===n.HALF_FLOAT&&(oe=n.RG16F),K===n.UNSIGNED_BYTE&&(oe=n.RG8)),w===n.RG_INTEGER&&(K===n.UNSIGNED_BYTE&&(oe=n.RG8UI),K===n.UNSIGNED_SHORT&&(oe=n.RG16UI),K===n.UNSIGNED_INT&&(oe=n.RG32UI),K===n.BYTE&&(oe=n.RG8I),K===n.SHORT&&(oe=n.RG16I),K===n.INT&&(oe=n.RG32I)),w===n.RGB_INTEGER&&(K===n.UNSIGNED_BYTE&&(oe=n.RGB8UI),K===n.UNSIGNED_SHORT&&(oe=n.RGB16UI),K===n.UNSIGNED_INT&&(oe=n.RGB32UI),K===n.BYTE&&(oe=n.RGB8I),K===n.SHORT&&(oe=n.RGB16I),K===n.INT&&(oe=n.RGB32I)),w===n.RGBA_INTEGER&&(K===n.UNSIGNED_BYTE&&(oe=n.RGBA8UI),K===n.UNSIGNED_SHORT&&(oe=n.RGBA16UI),K===n.UNSIGNED_INT&&(oe=n.RGBA32UI),K===n.BYTE&&(oe=n.RGBA8I),K===n.SHORT&&(oe=n.RGBA16I),K===n.INT&&(oe=n.RGBA32I)),w===n.RGB&&K===n.UNSIGNED_INT_5_9_9_9_REV&&(oe=n.RGB9_E5),w===n.RGBA){const ke=ae?Na:xt.getTransfer(se);K===n.FLOAT&&(oe=n.RGBA32F),K===n.HALF_FLOAT&&(oe=n.RGBA16F),K===n.UNSIGNED_BYTE&&(oe=ke===Pt?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function M(I,w){let K;return I?w===null||w===Yr||w===Bs?K=n.DEPTH24_STENCIL8:w===xi?K=n.DEPTH32F_STENCIL8:w===So&&(K=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Yr||w===Bs?K=n.DEPTH_COMPONENT24:w===xi?K=n.DEPTH_COMPONENT32F:w===So&&(K=n.DEPTH_COMPONENT16),K}function E(I,w){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Un&&I.minFilter!==Jn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function L(I){const w=I.target;w.removeEventListener("dispose",L),S(w),w.isVideoTexture&&c.delete(w)}function y(I){const w=I.target;w.removeEventListener("dispose",y),P(w)}function S(I){const w=i.get(I);if(w.__webglInit===void 0)return;const K=I.source,se=d.get(K);if(se){const ae=se[w.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&R(I),Object.keys(se).length===0&&d.delete(K)}i.remove(I)}function R(I){const w=i.get(I);n.deleteTexture(w.__webglTexture);const K=I.source,se=d.get(K);delete se[w.__cacheKey],a.memory.textures--}function P(I){const w=i.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(w.__webglFramebuffer[se]))for(let ae=0;ae<w.__webglFramebuffer[se].length;ae++)n.deleteFramebuffer(w.__webglFramebuffer[se][ae]);else n.deleteFramebuffer(w.__webglFramebuffer[se]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[se])}else{if(Array.isArray(w.__webglFramebuffer))for(let se=0;se<w.__webglFramebuffer.length;se++)n.deleteFramebuffer(w.__webglFramebuffer[se]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let se=0;se<w.__webglColorRenderbuffer.length;se++)w.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[se]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const K=I.textures;for(let se=0,ae=K.length;se<ae;se++){const oe=i.get(K[se]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(K[se])}i.remove(I)}let v=0;function b(){v=0}function D(){const I=v;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),v+=1,I}function C(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function k(I,w){const K=i.get(I);if(I.isVideoTexture&&ie(I),I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){const se=I.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(K,I,w);return}}t.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+w)}function F(I,w){const K=i.get(I);if(I.version>0&&K.__version!==I.version){Se(K,I,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+w)}function N(I,w){const K=i.get(I);if(I.version>0&&K.__version!==I.version){Se(K,I,w);return}t.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+w)}function q(I,w){const K=i.get(I);if(I.version>0&&K.__version!==I.version){$(K,I,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+w)}const z={[ka]:n.REPEAT,[cr]:n.CLAMP_TO_EDGE,[G0]:n.MIRRORED_REPEAT},te={[Un]:n.NEAREST,[Sm]:n.NEAREST_MIPMAP_NEAREST,[Go]:n.NEAREST_MIPMAP_LINEAR,[Jn]:n.LINEAR,[fl]:n.LINEAR_MIPMAP_NEAREST,[ur]:n.LINEAR_MIPMAP_LINEAR},he={[wm]:n.NEVER,[Pm]:n.ALWAYS,[Tm]:n.LESS,[bh]:n.LEQUAL,[Am]:n.EQUAL,[Cm]:n.GEQUAL,[Rm]:n.GREATER,[Lm]:n.NOTEQUAL};function be(I,w){if(w.type===xi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Jn||w.magFilter===fl||w.magFilter===Go||w.magFilter===ur||w.minFilter===Jn||w.minFilter===fl||w.minFilter===Go||w.minFilter===ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,z[w.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,z[w.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,z[w.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,te[w.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,te[w.minFilter]),w.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,he[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Un||w.minFilter!==Go&&w.minFilter!==ur||w.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Re(I,w){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",L));const se=w.source;let ae=d.get(se);ae===void 0&&(ae={},d.set(se,ae));const oe=C(w);if(oe!==I.__cacheKey){ae[oe]===void 0&&(ae[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,K=!0),ae[oe].usedTimes++;const ke=ae[I.__cacheKey];ke!==void 0&&(ae[I.__cacheKey].usedTimes--,ke.usedTimes===0&&R(w)),I.__cacheKey=oe,I.__webglTexture=ae[oe].texture}return K}function Se(I,w,K){let se=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(se=n.TEXTURE_3D);const ae=Re(I,w),oe=w.source;t.bindTexture(se,I.__webglTexture,n.TEXTURE0+K);const ke=i.get(oe);if(oe.version!==ke.__version||ae===!0){t.activeTexture(n.TEXTURE0+K);const me=xt.getPrimaries(xt.workingColorSpace),Ue=w.colorSpace===lr?null:xt.getPrimaries(w.colorSpace),it=w.colorSpace===lr||me===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let ue=_(w.image,!1,r.maxTextureSize);ue=nt(w,ue);const ve=s.convert(w.format,w.colorSpace),Ve=s.convert(w.type);let Xe=x(w.internalFormat,ve,Ve,w.colorSpace,w.isVideoTexture);be(se,w);let ge;const Ze=w.mipmaps,$e=w.isVideoTexture!==!0,_t=ke.__version===void 0||ae===!0,G=oe.dataReady,Te=E(w,ue);if(w.isDepthTexture)Xe=M(w.format===zs,w.type),_t&&($e?t.texStorage2D(n.TEXTURE_2D,1,Xe,ue.width,ue.height):t.texImage2D(n.TEXTURE_2D,0,Xe,ue.width,ue.height,0,ve,Ve,null));else if(w.isDataTexture)if(Ze.length>0){$e&&_t&&t.texStorage2D(n.TEXTURE_2D,Te,Xe,Ze[0].width,Ze[0].height);for(let J=0,ce=Ze.length;J<ce;J++)ge=Ze[J],$e?G&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ge.width,ge.height,ve,Ve,ge.data):t.texImage2D(n.TEXTURE_2D,J,Xe,ge.width,ge.height,0,ve,Ve,ge.data);w.generateMipmaps=!1}else $e?(_t&&t.texStorage2D(n.TEXTURE_2D,Te,Xe,ue.width,ue.height),G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue.width,ue.height,ve,Ve,ue.data)):t.texImage2D(n.TEXTURE_2D,0,Xe,ue.width,ue.height,0,ve,Ve,ue.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){$e&&_t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Xe,Ze[0].width,Ze[0].height,ue.depth);for(let J=0,ce=Ze.length;J<ce;J++)if(ge=Ze[J],w.format!==Qn)if(ve!==null)if($e){if(G)if(w.layerUpdates.size>0){const Me=Af(ge.width,ge.height,w.format,w.type);for(const Le of w.layerUpdates){const ot=ge.data.subarray(Le*Me/ge.data.BYTES_PER_ELEMENT,(Le+1)*Me/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Le,ge.width,ge.height,1,ve,ot,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ge.width,ge.height,ue.depth,ve,ge.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Xe,ge.width,ge.height,ue.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,ge.width,ge.height,ue.depth,ve,Ve,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Xe,ge.width,ge.height,ue.depth,0,ve,Ve,ge.data)}else{$e&&_t&&t.texStorage2D(n.TEXTURE_2D,Te,Xe,Ze[0].width,Ze[0].height);for(let J=0,ce=Ze.length;J<ce;J++)ge=Ze[J],w.format!==Qn?ve!==null?$e?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,ge.width,ge.height,ve,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Xe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?G&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ge.width,ge.height,ve,Ve,ge.data):t.texImage2D(n.TEXTURE_2D,J,Xe,ge.width,ge.height,0,ve,Ve,ge.data)}else if(w.isDataArrayTexture)if($e){if(_t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Xe,ue.width,ue.height,ue.depth),G)if(w.layerUpdates.size>0){const J=Af(ue.width,ue.height,w.format,w.type);for(const ce of w.layerUpdates){const Me=ue.data.subarray(ce*J/ue.data.BYTES_PER_ELEMENT,(ce+1)*J/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,ue.width,ue.height,1,ve,Ve,Me)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ve,Ve,ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Xe,ue.width,ue.height,ue.depth,0,ve,Ve,ue.data);else if(w.isData3DTexture)$e?(_t&&t.texStorage3D(n.TEXTURE_3D,Te,Xe,ue.width,ue.height,ue.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ve,Ve,ue.data)):t.texImage3D(n.TEXTURE_3D,0,Xe,ue.width,ue.height,ue.depth,0,ve,Ve,ue.data);else if(w.isFramebufferTexture){if(_t)if($e)t.texStorage2D(n.TEXTURE_2D,Te,Xe,ue.width,ue.height);else{let J=ue.width,ce=ue.height;for(let Me=0;Me<Te;Me++)t.texImage2D(n.TEXTURE_2D,Me,Xe,J,ce,0,ve,Ve,null),J>>=1,ce>>=1}}else if(Ze.length>0){if($e&&_t){const J=qe(Ze[0]);t.texStorage2D(n.TEXTURE_2D,Te,Xe,J.width,J.height)}for(let J=0,ce=Ze.length;J<ce;J++)ge=Ze[J],$e?G&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,ve,Ve,ge):t.texImage2D(n.TEXTURE_2D,J,Xe,ve,Ve,ge);w.generateMipmaps=!1}else if($e){if(_t){const J=qe(ue);t.texStorage2D(n.TEXTURE_2D,Te,Xe,J.width,J.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ve,ue)}else t.texImage2D(n.TEXTURE_2D,0,Xe,ve,Ve,ue);p(w)&&m(se),ke.__version=oe.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function $(I,w,K){if(w.image.length!==6)return;const se=Re(I,w),ae=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+K);const oe=i.get(ae);if(ae.version!==oe.__version||se===!0){t.activeTexture(n.TEXTURE0+K);const ke=xt.getPrimaries(xt.workingColorSpace),me=w.colorSpace===lr?null:xt.getPrimaries(w.colorSpace),Ue=w.colorSpace===lr||ke===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const it=w.isCompressedTexture||w.image[0].isCompressedTexture,ue=w.image[0]&&w.image[0].isDataTexture,ve=[];for(let ce=0;ce<6;ce++)!it&&!ue?ve[ce]=_(w.image[ce],!0,r.maxCubemapSize):ve[ce]=ue?w.image[ce].image:w.image[ce],ve[ce]=nt(w,ve[ce]);const Ve=ve[0],Xe=s.convert(w.format,w.colorSpace),ge=s.convert(w.type),Ze=x(w.internalFormat,Xe,ge,w.colorSpace),$e=w.isVideoTexture!==!0,_t=oe.__version===void 0||se===!0,G=ae.dataReady;let Te=E(w,Ve);be(n.TEXTURE_CUBE_MAP,w);let J;if(it){$e&&_t&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ze,Ve.width,Ve.height);for(let ce=0;ce<6;ce++){J=ve[ce].mipmaps;for(let Me=0;Me<J.length;Me++){const Le=J[Me];w.format!==Qn?Xe!==null?$e?G&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me,0,0,Le.width,Le.height,Xe,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me,Ze,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me,0,0,Le.width,Le.height,Xe,ge,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me,Ze,Le.width,Le.height,0,Xe,ge,Le.data)}}}else{if(J=w.mipmaps,$e&&_t){J.length>0&&Te++;const ce=qe(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ze,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ue){$e?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ve[ce].width,ve[ce].height,Xe,ge,ve[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ze,ve[ce].width,ve[ce].height,0,Xe,ge,ve[ce].data);for(let Me=0;Me<J.length;Me++){const ot=J[Me].image[ce].image;$e?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me+1,0,0,ot.width,ot.height,Xe,ge,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me+1,Ze,ot.width,ot.height,0,Xe,ge,ot.data)}}else{$e?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Xe,ge,ve[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ze,Xe,ge,ve[ce]);for(let Me=0;Me<J.length;Me++){const Le=J[Me];$e?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me+1,0,0,Xe,ge,Le.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me+1,Ze,Xe,ge,Le.image[ce])}}}p(w)&&m(n.TEXTURE_CUBE_MAP),oe.__version=ae.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function Y(I,w,K,se,ae,oe){const ke=s.convert(K.format,K.colorSpace),me=s.convert(K.type),Ue=x(K.internalFormat,ke,me,K.colorSpace);if(!i.get(w).__hasExternalTextures){const ue=Math.max(1,w.width>>oe),ve=Math.max(1,w.height>>oe);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,oe,Ue,ue,ve,w.depth,0,ke,me,null):t.texImage2D(ae,oe,Ue,ue,ve,0,ke,me,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),tt(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ae,i.get(K).__webglTexture,0,Ge(w)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ae,i.get(K).__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(I,w,K){if(n.bindRenderbuffer(n.RENDERBUFFER,I),w.depthBuffer){const se=w.depthTexture,ae=se&&se.isDepthTexture?se.type:null,oe=M(w.stencilBuffer,ae),ke=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=Ge(w);tt(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,oe,w.width,w.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,oe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,oe,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ke,n.RENDERBUFFER,I)}else{const se=w.textures;for(let ae=0;ae<se.length;ae++){const oe=se[ae],ke=s.convert(oe.format,oe.colorSpace),me=s.convert(oe.type),Ue=x(oe.internalFormat,ke,me,oe.colorSpace),it=Ge(w);K&&tt(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,it,Ue,w.width,w.height):tt(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,Ue,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Ue,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Q(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),k(w.depthTexture,0);const se=i.get(w.depthTexture).__webglTexture,ae=Ge(w);if(w.depthTexture.format===Ps)tt(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,se,0);else if(w.depthTexture.format===zs)tt(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Pe(I){const w=i.get(I),K=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const se=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),se){const ae=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,se.removeEventListener("dispose",ae)};se.addEventListener("dispose",ae),w.__depthDisposeCallback=ae}w.__boundDepthTexture=se}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Q(w.__webglFramebuffer,I)}else if(K){w.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[se]),w.__webglDepthbuffer[se]===void 0)w.__webglDepthbuffer[se]=n.createRenderbuffer(),ne(w.__webglDepthbuffer[se],I,!1);else{const ae=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),ne(w.__webglDepthbuffer,I,!1);else{const se=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,ae)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(I,w,K){const se=i.get(I);w!==void 0&&Y(se.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&Pe(I)}function Ie(I){const w=I.texture,K=i.get(I),se=i.get(w);I.addEventListener("dispose",y);const ae=I.textures,oe=I.isWebGLCubeRenderTarget===!0,ke=ae.length>1;if(ke||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=w.version,a.memory.textures++),oe){K.__webglFramebuffer=[];for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[me]=[];for(let Ue=0;Ue<w.mipmaps.length;Ue++)K.__webglFramebuffer[me][Ue]=n.createFramebuffer()}else K.__webglFramebuffer[me]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let me=0;me<w.mipmaps.length;me++)K.__webglFramebuffer[me]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(ke)for(let me=0,Ue=ae.length;me<Ue;me++){const it=i.get(ae[me]);it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture(),a.memory.textures++)}if(I.samples>0&&tt(I)===!1){K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let me=0;me<ae.length;me++){const Ue=ae[me];K.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[me]);const it=s.convert(Ue.format,Ue.colorSpace),ue=s.convert(Ue.type),ve=x(Ue.internalFormat,it,ue,Ue.colorSpace,I.isXRRenderTarget===!0),Ve=Ge(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ve,ve,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,K.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(K.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),be(n.TEXTURE_CUBE_MAP,w);for(let me=0;me<6;me++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ue=0;Ue<w.mipmaps.length;Ue++)Y(K.__webglFramebuffer[me][Ue],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ue);else Y(K.__webglFramebuffer[me],I,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);p(w)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let me=0,Ue=ae.length;me<Ue;me++){const it=ae[me],ue=i.get(it);t.bindTexture(n.TEXTURE_2D,ue.__webglTexture),be(n.TEXTURE_2D,it),Y(K.__webglFramebuffer,I,it,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),p(it)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let me=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(me,se.__webglTexture),be(me,w),w.mipmaps&&w.mipmaps.length>0)for(let Ue=0;Ue<w.mipmaps.length;Ue++)Y(K.__webglFramebuffer[Ue],I,w,n.COLOR_ATTACHMENT0,me,Ue);else Y(K.__webglFramebuffer,I,w,n.COLOR_ATTACHMENT0,me,0);p(w)&&m(me),t.unbindTexture()}I.depthBuffer&&Pe(I)}function ze(I){const w=I.textures;for(let K=0,se=w.length;K<se;K++){const ae=w[K];if(p(ae)){const oe=I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ke=i.get(ae).__webglTexture;t.bindTexture(oe,ke),m(oe),t.unbindTexture()}}}const We=[],H=[];function Vt(I){if(I.samples>0){if(tt(I)===!1){const w=I.textures,K=I.width,se=I.height;let ae=n.COLOR_BUFFER_BIT;const oe=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ke=i.get(I),me=w.length>1;if(me)for(let Ue=0;Ue<w.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Ue=0;Ue<w.length;Ue++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ke.__webglColorRenderbuffer[Ue]);const it=i.get(w[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,it,0)}n.blitFramebuffer(0,0,K,se,0,0,K,se,ae,n.NEAREST),l===!0&&(We.length=0,H.length=0,We.push(n.COLOR_ATTACHMENT0+Ue),I.depthBuffer&&I.resolveDepthBuffer===!1&&(We.push(oe),H.push(oe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let Ue=0;Ue<w.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,ke.__webglColorRenderbuffer[Ue]);const it=i.get(w[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ke.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,it,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const w=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Ge(I){return Math.min(r.maxSamples,I.samples)}function tt(I){const w=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ie(I){const w=a.render.frame;c.get(I)!==w&&(c.set(I,w),I.update())}function nt(I,w){const K=I.colorSpace,se=I.format,ae=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!==gr&&K!==lr&&(xt.getTransfer(K)===Pt?(se!==Qn||ae!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}function qe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(u.width=I.naturalWidth||I.width,u.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(u.width=I.displayWidth,u.height=I.displayHeight):(u.width=I.width,u.height=I.height),u}this.allocateTextureUnit=D,this.resetTextureUnits=b,this.setTexture2D=k,this.setTexture2DArray=F,this.setTexture3D=N,this.setTextureCube=q,this.rebindTextures=Ee,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=tt}function Zx(n,e){function t(i,r=lr){let s;const a=xt.getTransfer(r);if(i===Xi)return n.UNSIGNED_BYTE;if(i===Fc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Bc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ph)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===dh)return n.BYTE;if(i===hh)return n.SHORT;if(i===So)return n.UNSIGNED_SHORT;if(i===Oc)return n.INT;if(i===Yr)return n.UNSIGNED_INT;if(i===xi)return n.FLOAT;if(i===Ao)return n.HALF_FLOAT;if(i===mh)return n.ALPHA;if(i===gh)return n.RGB;if(i===Qn)return n.RGBA;if(i===_h)return n.LUMINANCE;if(i===vh)return n.LUMINANCE_ALPHA;if(i===Ps)return n.DEPTH_COMPONENT;if(i===zs)return n.DEPTH_STENCIL;if(i===xh)return n.RED;if(i===zc)return n.RED_INTEGER;if(i===Mh)return n.RG;if(i===Hc)return n.RG_INTEGER;if(i===Gc)return n.RGBA_INTEGER;if(i===ya||i===ba||i===Ea||i===wa)if(a===Pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ya)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ya)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ba)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===V0||i===W0||i===X0||i===q0)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===V0)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===W0)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===X0)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===q0)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Y0||i===$0||i===j0)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Y0||i===$0)return a===Pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===j0)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===K0||i===Z0||i===J0||i===Q0||i===ec||i===tc||i===nc||i===ic||i===rc||i===sc||i===oc||i===ac||i===lc||i===cc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===K0)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Z0)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===J0)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Q0)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ec)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tc)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nc)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ic)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rc)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sc)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===oc)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ac)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lc)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cc)return a===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ta||i===uc||i===fc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ta)return a===Pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sh||i===dc||i===hc||i===pc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ta)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Jx extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ln extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qx={type:"move"};class Bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),m=this._getHandJoint(u,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),h=.02,g=.005;u.inputState.pinching&&d>h+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=h-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ln;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const e2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t2=`
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

}`;class n2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new xn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new mr({vertexShader:e2,fragmentShader:t2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new Co(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i2 extends Ws{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,f=null,d=null,h=null,g=null;const _=new n2,p=t.getContextAttributes();let m=null,x=null;const M=[],E=[],L=new dt;let y=null;const S=new _n;S.layers.enable(1),S.viewport=new Dt;const R=new _n;R.layers.enable(2),R.viewport=new Dt;const P=[S,R],v=new Jx;v.layers.enable(1),v.layers.enable(2);let b=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Y=M[$];return Y===void 0&&(Y=new Bl,M[$]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function($){let Y=M[$];return Y===void 0&&(Y=new Bl,M[$]=Y),Y.getGripSpace()},this.getHand=function($){let Y=M[$];return Y===void 0&&(Y=new Bl,M[$]=Y),Y.getHandSpace()};function C($){const Y=E.indexOf($.inputSource);if(Y===-1)return;const ne=M[Y];ne!==void 0&&(ne.update($.inputSource,$.frame,u||a),ne.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",F);for(let $=0;$<M.length;$++){const Y=E[$];Y!==null&&(E[$]=null,M[$].disconnect(Y))}b=null,D=null,_.reset(),e.setRenderTarget(m),h=null,d=null,f=null,r=null,x=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",k),r.addEventListener("inputsourceschange",F),p.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const Y={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new $r(h.framebufferWidth,h.framebufferHeight,{format:Qn,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Y=null,ne=null,Q=null;p.depth&&(Q=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=p.stencil?zs:Ps,ne=p.stencil?Bs:Yr);const Pe={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(Pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new $r(d.textureWidth,d.textureHeight,{format:Qn,type:Xi,depthTexture:new Dh(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Se.setContext(r),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F($){for(let Y=0;Y<$.removed.length;Y++){const ne=$.removed[Y],Q=E.indexOf(ne);Q>=0&&(E[Q]=null,M[Q].disconnect(ne))}for(let Y=0;Y<$.added.length;Y++){const ne=$.added[Y];let Q=E.indexOf(ne);if(Q===-1){for(let Ee=0;Ee<M.length;Ee++)if(Ee>=E.length){E.push(ne),Q=Ee;break}else if(E[Ee]===null){E[Ee]=ne,Q=Ee;break}if(Q===-1)break}const Pe=M[Q];Pe&&Pe.connect(ne)}}const N=new U,q=new U;function z($,Y,ne){N.setFromMatrixPosition(Y.matrixWorld),q.setFromMatrixPosition(ne.matrixWorld);const Q=N.distanceTo(q),Pe=Y.projectionMatrix.elements,Ee=ne.projectionMatrix.elements,Ie=Pe[14]/(Pe[10]-1),ze=Pe[14]/(Pe[10]+1),We=(Pe[9]+1)/Pe[5],H=(Pe[9]-1)/Pe[5],Vt=(Pe[8]-1)/Pe[0],Ge=(Ee[8]+1)/Ee[0],tt=Ie*Vt,ie=Ie*Ge,nt=Q/(-Vt+Ge),qe=nt*-Vt;if(Y.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(qe),$.translateZ(nt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Pe[10]===-1)$.projectionMatrix.copy(Y.projectionMatrix),$.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const I=Ie+nt,w=ze+nt,K=tt-qe,se=ie+(Q-qe),ae=We*ze/w*I,oe=H*ze/w*I;$.projectionMatrix.makePerspective(K,se,ae,oe,I,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function te($,Y){Y===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Y.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let Y=$.near,ne=$.far;_.texture!==null&&(_.depthNear>0&&(Y=_.depthNear),_.depthFar>0&&(ne=_.depthFar)),v.near=R.near=S.near=Y,v.far=R.far=S.far=ne,(b!==v.near||D!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,D=v.far);const Q=$.parent,Pe=v.cameras;te(v,Q);for(let Ee=0;Ee<Pe.length;Ee++)te(Pe[Ee],Q);Pe.length===2?z(v,S,R):v.projectionMatrix.copy(S.projectionMatrix),he($,v,Q)};function he($,Y,ne){ne===null?$.matrix.copy(Y.matrixWorld):($.matrix.copy(ne.matrixWorld),$.matrix.invert(),$.matrix.multiply(Y.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Y.projectionMatrix),$.projectionMatrixInverse.copy(Y.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=yo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let be=null;function Re($,Y){if(c=Y.getViewerPose(u||a),g=Y,c!==null){const ne=c.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let Q=!1;ne.length!==v.cameras.length&&(v.cameras.length=0,Q=!0);for(let Ee=0;Ee<ne.length;Ee++){const Ie=ne[Ee];let ze=null;if(h!==null)ze=h.getViewport(Ie);else{const H=f.getViewSubImage(d,Ie);ze=H.viewport,Ee===0&&(e.setRenderTargetTextures(x,H.colorTexture,d.ignoreDepthValues?void 0:H.depthStencilTexture),e.setRenderTarget(x))}let We=P[Ee];We===void 0&&(We=new _n,We.layers.enable(Ee),We.viewport=new Dt,P[Ee]=We),We.matrix.fromArray(Ie.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ie.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ze.x,ze.y,ze.width,ze.height),Ee===0&&(v.matrix.copy(We.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Q===!0&&v.cameras.push(We)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Ee=f.getDepthInformation(ne[0]);Ee&&Ee.isValid&&Ee.texture&&_.init(e,Ee,r.renderState)}}for(let ne=0;ne<M.length;ne++){const Q=E[ne],Pe=M[ne];Q!==null&&Pe!==void 0&&Pe.update(Q,Y,u||a)}be&&be($,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const Se=new Ih;Se.setAnimationLoop(Re),this.setAnimationLoop=function($){be=$},this.dispose=function(){}}}const Tr=new cn,r2=new et;function s2(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Lh(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,x,M,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),c(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&h(p,m,E)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,x,M):m.isSpriteMaterial?u(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Nn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Nn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),M=x.envMap,E=x.envMapRotation;M&&(p.envMap.value=M,Tr.copy(E),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),p.envMapRotation.value.setFromMatrix4(r2.makeRotationFromEuler(Tr)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Nn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function o2(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const E=M.program;i.uniformBlockBinding(x,E)}function u(x,M){let E=r[x.id];E===void 0&&(g(x),E=c(x),r[x.id]=E,x.addEventListener("dispose",p));const L=M.program;i.updateUBOMapping(x,L);const y=e.render.frame;s[x.id]!==y&&(d(x),s[x.id]=y)}function c(x){const M=f();x.__bindingPointIndex=M;const E=n.createBuffer(),L=x.__size,y=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,L,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=r[x.id],E=x.uniforms,L=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let y=0,S=E.length;y<S;y++){const R=Array.isArray(E[y])?E[y]:[E[y]];for(let P=0,v=R.length;P<v;P++){const b=R[P];if(h(b,y,P,L)===!0){const D=b.__offset,C=Array.isArray(b.value)?b.value:[b.value];let k=0;for(let F=0;F<C.length;F++){const N=C[F],q=_(N);typeof N=="number"||typeof N=="boolean"?(b.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,D+k,b.__data)):N.isMatrix3?(b.__data[0]=N.elements[0],b.__data[1]=N.elements[1],b.__data[2]=N.elements[2],b.__data[3]=0,b.__data[4]=N.elements[3],b.__data[5]=N.elements[4],b.__data[6]=N.elements[5],b.__data[7]=0,b.__data[8]=N.elements[6],b.__data[9]=N.elements[7],b.__data[10]=N.elements[8],b.__data[11]=0):(N.toArray(b.__data,k),k+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(x,M,E,L){const y=x.value,S=M+"_"+E;if(L[S]===void 0)return typeof y=="number"||typeof y=="boolean"?L[S]=y:L[S]=y.clone(),!0;{const R=L[S];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return L[S]=y,!0}else if(R.equals(y)===!1)return R.copy(y),!0}return!1}function g(x){const M=x.uniforms;let E=0;const L=16;for(let S=0,R=M.length;S<R;S++){const P=Array.isArray(M[S])?M[S]:[M[S]];for(let v=0,b=P.length;v<b;v++){const D=P[v],C=Array.isArray(D.value)?D.value:[D.value];for(let k=0,F=C.length;k<F;k++){const N=C[k],q=_(N),z=E%L,te=z%q.boundary,he=z+te;E+=te,he!==0&&L-he<q.storage&&(E+=L-he),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=E,E+=q.storage}}}const y=E%L;return y>0&&(E+=L-y),x.__size=E,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function p(x){const M=x.target;M.removeEventListener("dispose",p);const E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function m(){for(const x in r)n.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:u,dispose:m}}class Zc{constructor(e={}){const{canvas:t=$m(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const h=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=hr,this.toneMappingExposure=1;const M=this;let E=!1,L=0,y=0,S=null,R=-1,P=null;const v=new Dt,b=new Dt;let D=null;const C=new ut(0);let k=0,F=t.width,N=t.height,q=1,z=null,te=null;const he=new Dt(0,0,F,N),be=new Dt(0,0,F,N);let Re=!1;const Se=new $c;let $=!1,Y=!1;const ne=new et,Q=new et,Pe=new U,Ee=new Dt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function We(){return S===null?q:1}let H=i;function Vt(T,B){return t.getContext(T,B)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kc}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",Le,!1),H===null){const B="webgl2";if(H=Vt(B,T),H===null)throw Vt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ge,tt,ie,nt,qe,I,w,K,se,ae,oe,ke,me,Ue,it,ue,ve,Ve,Xe,ge,Ze,$e,_t,G;function Te(){Ge=new dv(H),Ge.init(),$e=new Zx(H,Ge),tt=new ov(H,Ge,e,$e),ie=new $x(H),tt.reverseDepthBuffer&&ie.buffers.depth.setReversed(!0),nt=new mv(H),qe=new Dx,I=new Kx(H,Ge,ie,qe,tt,$e,nt),w=new lv(M),K=new fv(M),se=new yg(H),_t=new rv(H,se),ae=new hv(H,se,nt,_t),oe=new _v(H,ae,se,nt),Xe=new gv(H,tt,I),ue=new av(qe),ke=new Ix(M,w,K,Ge,tt,_t,ue),me=new s2(M,qe),Ue=new kx,it=new Hx(Ge),Ve=new iv(M,w,K,ie,oe,d,l),ve=new qx(M,oe,tt),G=new o2(H,nt,tt,ie),ge=new sv(H,Ge,nt),Ze=new pv(H,Ge,nt),nt.programs=ke.programs,M.capabilities=tt,M.extensions=Ge,M.properties=qe,M.renderLists=Ue,M.shadowMap=ve,M.state=ie,M.info=nt}Te();const J=new i2(M,H);this.xr=J,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const T=Ge.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ge.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(F,N,!1))},this.getSize=function(T){return T.set(F,N)},this.setSize=function(T,B,j=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=T,N=B,t.width=Math.floor(T*q),t.height=Math.floor(B*q),j===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(F*q,N*q).floor()},this.setDrawingBufferSize=function(T,B,j){F=T,N=B,q=j,t.width=Math.floor(T*j),t.height=Math.floor(B*j),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(v)},this.getViewport=function(T){return T.copy(he)},this.setViewport=function(T,B,j,W){T.isVector4?he.set(T.x,T.y,T.z,T.w):he.set(T,B,j,W),ie.viewport(v.copy(he).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(be)},this.setScissor=function(T,B,j,W){T.isVector4?be.set(T.x,T.y,T.z,T.w):be.set(T,B,j,W),ie.scissor(b.copy(be).multiplyScalar(q).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(T){ie.setScissorTest(Re=T)},this.setOpaqueSort=function(T){z=T},this.setTransparentSort=function(T){te=T},this.getClearColor=function(T){return T.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(T=!0,B=!0,j=!0){let W=0;if(T){let V=!1;if(S!==null){const fe=S.texture.format;V=fe===Gc||fe===Hc||fe===zc}if(V){const fe=S.texture.type,Ae=fe===Xi||fe===Yr||fe===So||fe===Bs||fe===Fc||fe===Bc,A=Ve.getClearColor(),O=Ve.getClearAlpha(),X=A.r,Z=A.g,le=A.b;Ae?(h[0]=X,h[1]=Z,h[2]=le,h[3]=O,H.clearBufferuiv(H.COLOR,0,h)):(g[0]=X,g[1]=Z,g[2]=le,g[3]=O,H.clearBufferiv(H.COLOR,0,g))}else W|=H.COLOR_BUFFER_BIT}B&&(W|=H.DEPTH_BUFFER_BIT,H.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(W|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),Ue.dispose(),it.dispose(),qe.dispose(),w.dispose(),K.dispose(),oe.dispose(),_t.dispose(),G.dispose(),ke.dispose(),J.dispose(),J.removeEventListener("sessionstart",En),J.removeEventListener("sessionend",xr),qn.stop()};function ce(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=nt.autoReset,B=ve.enabled,j=ve.autoUpdate,W=ve.needsUpdate,V=ve.type;Te(),nt.autoReset=T,ve.enabled=B,ve.autoUpdate=j,ve.needsUpdate=W,ve.type=V}function Le(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ot(T){const B=T.target;B.removeEventListener("dispose",ot),kt(B)}function kt(T){Ht(T),qe.remove(T)}function Ht(T){const B=qe.get(T).programs;B!==void 0&&(B.forEach(function(j){ke.releaseProgram(j)}),T.isShaderMaterial&&ke.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,j,W,V,fe){B===null&&(B=Ie);const Ae=V.isMesh&&V.matrixWorld.determinant()<0,A=Je(T,B,j,W,V);ie.setMaterial(W,Ae);let O=j.index,X=1;if(W.wireframe===!0){if(O=ae.getWireframeAttribute(j),O===void 0)return;X=2}const Z=j.drawRange,le=j.attributes.position;let we=Z.start*X,xe=(Z.start+Z.count)*X;fe!==null&&(we=Math.max(we,fe.start*X),xe=Math.min(xe,(fe.start+fe.count)*X)),O!==null?(we=Math.max(we,0),xe=Math.min(xe,O.count)):le!=null&&(we=Math.max(we,0),xe=Math.min(xe,le.count));const Be=xe-we;if(Be<0||Be===1/0)return;_t.setup(V,W,A,j,O);let Qe,Ne=ge;if(O!==null&&(Qe=se.get(O),Ne=Ze,Ne.setIndex(Qe)),V.isMesh)W.wireframe===!0?(ie.setLineWidth(W.wireframeLinewidth*We()),Ne.setMode(H.LINES)):Ne.setMode(H.TRIANGLES);else if(V.isLine){let ye=W.linewidth;ye===void 0&&(ye=1),ie.setLineWidth(ye*We()),V.isLineSegments?Ne.setMode(H.LINES):V.isLineLoop?Ne.setMode(H.LINE_LOOP):Ne.setMode(H.LINE_STRIP)}else V.isPoints?Ne.setMode(H.POINTS):V.isSprite&&Ne.setMode(H.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Ne.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Ne.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const ye=V._multiDrawStarts,je=V._multiDrawCounts,Ye=V._multiDrawCount,pt=O?se.get(O).bytesPerElement:1,zt=qe.get(W).currentProgram.getUniforms();for(let vt=0;vt<Ye;vt++)zt.setValue(H,"_gl_DrawID",vt),Ne.render(ye[vt]/pt,je[vt])}else if(V.isInstancedMesh)Ne.renderInstances(we,Be,V.count);else if(j.isInstancedBufferGeometry){const ye=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,je=Math.min(j.instanceCount,ye);Ne.renderInstances(we,Be,je)}else Ne.render(we,Be)};function ct(T,B,j){T.transparent===!0&&T.side===Fi&&T.forceSinglePass===!1?(T.side=Nn,T.needsUpdate=!0,pe(T,B,j),T.side=Wi,T.needsUpdate=!0,pe(T,B,j),T.side=Fi):pe(T,B,j)}this.compile=function(T,B,j=null){j===null&&(j=T),p=it.get(j),p.init(B),x.push(p),j.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),T!==j&&T.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const W=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const fe=V.material;if(fe)if(Array.isArray(fe))for(let Ae=0;Ae<fe.length;Ae++){const A=fe[Ae];ct(A,j,V),W.add(A)}else ct(fe,j,V),W.add(fe)}),x.pop(),p=null,W},this.compileAsync=function(T,B,j=null){const W=this.compile(T,B,j);return new Promise(V=>{function fe(){if(W.forEach(function(Ae){qe.get(Ae).currentProgram.isReady()&&W.delete(Ae)}),W.size===0){V(T);return}setTimeout(fe,10)}Ge.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let $t=null;function Qt(T){$t&&$t(T)}function En(){qn.stop()}function xr(){qn.start()}const qn=new Ih;qn.setAnimationLoop(Qt),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(T){$t=T,J.setAnimationLoop(T),T===null?qn.stop():qn.start()},J.addEventListener("sessionstart",En),J.addEventListener("sessionend",xr),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(B),B=J.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,B,S),p=it.get(T,x.length),p.init(B),x.push(p),Q.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Se.setFromProjectionMatrix(Q),Y=this.localClippingEnabled,$=ue.init(this.clippingPlanes,Y),_=Ue.get(T,m.length),_.init(),m.push(_),J.enabled===!0&&J.isPresenting===!0){const fe=M.xr.getDepthSensingMesh();fe!==null&&Bt(fe,B,-1/0,M.sortObjects)}Bt(T,B,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(z,te),ze=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,ze&&Ve.addToRenderList(_,T),this.info.render.frame++,$===!0&&ue.beginShadows();const j=p.state.shadowsArray;ve.render(j,T,B),$===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,V=_.transmissive;if(p.setupLights(),B.isArrayCamera){const fe=B.cameras;if(V.length>0)for(let Ae=0,A=fe.length;Ae<A;Ae++){const O=fe[Ae];Ki(W,V,T,O)}ze&&Ve.render(T);for(let Ae=0,A=fe.length;Ae<A;Ae++){const O=fe[Ae];ji(_,T,O,O.viewport)}}else V.length>0&&Ki(W,V,T,B),ze&&Ve.render(T),ji(_,T,B);S!==null&&(I.updateMultisampleRenderTarget(S),I.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(M,T,B),_t.resetDefaultState(),R=-1,P=null,x.pop(),x.length>0?(p=x[x.length-1],$===!0&&ue.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Bt(T,B,j,W){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)j=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Se.intersectsSprite(T)){W&&Ee.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Q);const Ae=oe.update(T),A=T.material;A.visible&&_.push(T,Ae,A,j,Ee.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Se.intersectsObject(T))){const Ae=oe.update(T),A=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ee.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ee.copy(Ae.boundingSphere.center)),Ee.applyMatrix4(T.matrixWorld).applyMatrix4(Q)),Array.isArray(A)){const O=Ae.groups;for(let X=0,Z=O.length;X<Z;X++){const le=O[X],we=A[le.materialIndex];we&&we.visible&&_.push(T,Ae,we,j,Ee.z,le)}}else A.visible&&_.push(T,Ae,A,j,Ee.z,null)}}const fe=T.children;for(let Ae=0,A=fe.length;Ae<A;Ae++)Bt(fe[Ae],B,j,W)}function ji(T,B,j,W){const V=T.opaque,fe=T.transmissive,Ae=T.transparent;p.setupLightsView(j),$===!0&&ue.setGlobalState(M.clippingPlanes,j),W&&ie.viewport(v.copy(W)),V.length>0&&ee(V,B,j),fe.length>0&&ee(fe,B,j),Ae.length>0&&ee(Ae,B,j),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Ki(T,B,j,W){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new $r(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Ao:Xi,minFilter:ur,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const fe=p.state.transmissionRenderTarget[W.id],Ae=W.viewport||v;fe.setSize(Ae.z,Ae.w);const A=M.getRenderTarget();M.setRenderTarget(fe),M.getClearColor(C),k=M.getClearAlpha(),k<1&&M.setClearColor(16777215,.5),M.clear(),ze&&Ve.render(j);const O=M.toneMapping;M.toneMapping=hr;const X=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),$===!0&&ue.setGlobalState(M.clippingPlanes,W),ee(T,j,W),I.updateMultisampleRenderTarget(fe),I.updateRenderTargetMipmap(fe),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Z=!1;for(let le=0,we=B.length;le<we;le++){const xe=B[le],Be=xe.object,Qe=xe.geometry,Ne=xe.material,ye=xe.group;if(Ne.side===Fi&&Be.layers.test(W.layers)){const je=Ne.side;Ne.side=Nn,Ne.needsUpdate=!0,re(Be,j,W,Qe,Ne,ye),Ne.side=je,Ne.needsUpdate=!0,Z=!0}}Z===!0&&(I.updateMultisampleRenderTarget(fe),I.updateRenderTargetMipmap(fe))}M.setRenderTarget(A),M.setClearColor(C,k),X!==void 0&&(W.viewport=X),M.toneMapping=O}function ee(T,B,j){const W=B.isScene===!0?B.overrideMaterial:null;for(let V=0,fe=T.length;V<fe;V++){const Ae=T[V],A=Ae.object,O=Ae.geometry,X=W===null?Ae.material:W,Z=Ae.group;A.layers.test(j.layers)&&re(A,B,j,O,X,Z)}}function re(T,B,j,W,V,fe){T.onBeforeRender(M,B,j,W,V,fe),T.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(M,B,j,W,T,fe),V.transparent===!0&&V.side===Fi&&V.forceSinglePass===!1?(V.side=Nn,V.needsUpdate=!0,M.renderBufferDirect(j,B,W,V,T,fe),V.side=Wi,V.needsUpdate=!0,M.renderBufferDirect(j,B,W,V,T,fe),V.side=Fi):M.renderBufferDirect(j,B,W,V,T,fe),T.onAfterRender(M,B,j,W,V,fe)}function pe(T,B,j){B.isScene!==!0&&(B=Ie);const W=qe.get(T),V=p.state.lights,fe=p.state.shadowsArray,Ae=V.state.version,A=ke.getParameters(T,V.state,fe,B,j),O=ke.getProgramCacheKey(A);let X=W.programs;W.environment=T.isMeshStandardMaterial?B.environment:null,W.fog=B.fog,W.envMap=(T.isMeshStandardMaterial?K:w).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,X===void 0&&(T.addEventListener("dispose",ot),X=new Map,W.programs=X);let Z=X.get(O);if(Z!==void 0){if(W.currentProgram===Z&&W.lightsStateVersion===Ae)return Fe(T,A),Z}else A.uniforms=ke.getUniforms(T),T.onBeforeCompile(A,M),Z=ke.acquireProgram(A,O),X.set(O,Z),W.uniforms=A.uniforms;const le=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(le.clippingPlanes=ue.uniform),Fe(T,A),W.needsLights=Ct(T),W.lightsStateVersion=Ae,W.needsLights&&(le.ambientLightColor.value=V.state.ambient,le.lightProbe.value=V.state.probe,le.directionalLights.value=V.state.directional,le.directionalLightShadows.value=V.state.directionalShadow,le.spotLights.value=V.state.spot,le.spotLightShadows.value=V.state.spotShadow,le.rectAreaLights.value=V.state.rectArea,le.ltc_1.value=V.state.rectAreaLTC1,le.ltc_2.value=V.state.rectAreaLTC2,le.pointLights.value=V.state.point,le.pointLightShadows.value=V.state.pointShadow,le.hemisphereLights.value=V.state.hemi,le.directionalShadowMap.value=V.state.directionalShadowMap,le.directionalShadowMatrix.value=V.state.directionalShadowMatrix,le.spotShadowMap.value=V.state.spotShadowMap,le.spotLightMatrix.value=V.state.spotLightMatrix,le.spotLightMap.value=V.state.spotLightMap,le.pointShadowMap.value=V.state.pointShadowMap,le.pointShadowMatrix.value=V.state.pointShadowMatrix),W.currentProgram=Z,W.uniformsList=null,Z}function de(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Ra.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Fe(T,B){const j=qe.get(T);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function Je(T,B,j,W,V){B.isScene!==!0&&(B=Ie),I.resetTextureUnits();const fe=B.fog,Ae=W.isMeshStandardMaterial?B.environment:null,A=S===null?M.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:gr,O=(W.isMeshStandardMaterial?K:w).get(W.envMap||Ae),X=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Z=!!j.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),le=!!j.morphAttributes.position,we=!!j.morphAttributes.normal,xe=!!j.morphAttributes.color;let Be=hr;W.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Be=M.toneMapping);const Qe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ne=Qe!==void 0?Qe.length:0,ye=qe.get(W),je=p.state.lights;if($===!0&&(Y===!0||T!==P)){const tn=T===P&&W.id===R;ue.setState(W,T,tn)}let Ye=!1;W.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==je.state.version||ye.outputColorSpace!==A||V.isBatchedMesh&&ye.batching===!1||!V.isBatchedMesh&&ye.batching===!0||V.isBatchedMesh&&ye.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&ye.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&ye.instancing===!1||!V.isInstancedMesh&&ye.instancing===!0||V.isSkinnedMesh&&ye.skinning===!1||!V.isSkinnedMesh&&ye.skinning===!0||V.isInstancedMesh&&ye.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ye.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ye.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ye.instancingMorph===!1&&V.morphTexture!==null||ye.envMap!==O||W.fog===!0&&ye.fog!==fe||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==ue.numPlanes||ye.numIntersection!==ue.numIntersection)||ye.vertexAlphas!==X||ye.vertexTangents!==Z||ye.morphTargets!==le||ye.morphNormals!==we||ye.morphColors!==xe||ye.toneMapping!==Be||ye.morphTargetsCount!==Ne)&&(Ye=!0):(Ye=!0,ye.__version=W.version);let pt=ye.currentProgram;Ye===!0&&(pt=pe(W,B,V));let zt=!1,vt=!1,Pn=!1;const Et=pt.getUniforms(),en=ye.uniforms;if(ie.useProgram(pt.program)&&(zt=!0,vt=!0,Pn=!0),W.id!==R&&(R=W.id,vt=!0),zt||P!==T){tt.reverseDepthBuffer?(ne.copy(T.projectionMatrix),Km(ne),Zm(ne),Et.setValue(H,"projectionMatrix",ne)):Et.setValue(H,"projectionMatrix",T.projectionMatrix),Et.setValue(H,"viewMatrix",T.matrixWorldInverse);const tn=Et.map.cameraPosition;tn!==void 0&&tn.setValue(H,Pe.setFromMatrixPosition(T.matrixWorld)),tt.logarithmicDepthBuffer&&Et.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Et.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),P!==T&&(P=T,vt=!0,Pn=!0)}if(V.isSkinnedMesh){Et.setOptional(H,V,"bindMatrix"),Et.setOptional(H,V,"bindMatrixInverse");const tn=V.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Et.setValue(H,"boneTexture",tn.boneTexture,I))}V.isBatchedMesh&&(Et.setOptional(H,V,"batchingTexture"),Et.setValue(H,"batchingTexture",V._matricesTexture,I),Et.setOptional(H,V,"batchingIdTexture"),Et.setValue(H,"batchingIdTexture",V._indirectTexture,I),Et.setOptional(H,V,"batchingColorTexture"),V._colorsTexture!==null&&Et.setValue(H,"batchingColorTexture",V._colorsTexture,I));const St=j.morphAttributes;if((St.position!==void 0||St.normal!==void 0||St.color!==void 0)&&Xe.update(V,j,pt),(vt||ye.receiveShadow!==V.receiveShadow)&&(ye.receiveShadow=V.receiveShadow,Et.setValue(H,"receiveShadow",V.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(en.envMap.value=O,en.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&B.environment!==null&&(en.envMapIntensity.value=B.environmentIntensity),vt&&(Et.setValue(H,"toneMappingExposure",M.toneMappingExposure),ye.needsLights&&ht(en,Pn),fe&&W.fog===!0&&me.refreshFogUniforms(en,fe),me.refreshMaterialUniforms(en,W,q,N,p.state.transmissionRenderTarget[T.id]),Ra.upload(H,de(ye),en,I)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ra.upload(H,de(ye),en,I),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Et.setValue(H,"center",V.center),Et.setValue(H,"modelViewMatrix",V.modelViewMatrix),Et.setValue(H,"normalMatrix",V.normalMatrix),Et.setValue(H,"modelMatrix",V.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const tn=W.uniformsGroups;for(let an=0,Mr=tn.length;an<Mr;an++){const Fn=tn[an];G.update(Fn,pt),G.bind(Fn,pt)}}return pt}function ht(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Ct(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,B,j){qe.get(T.texture).__webglTexture=B,qe.get(T.depthTexture).__webglTexture=j;const W=qe.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=j===void 0,W.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const j=qe.get(T);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,j=0){S=T,L=B,y=j;let W=!0,V=null,fe=!1,Ae=!1;if(T){const O=qe.get(T);if(O.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(H.FRAMEBUFFER,null),W=!1;else if(O.__webglFramebuffer===void 0)I.setupRenderTarget(T);else if(O.__hasExternalTextures)I.rebindTextures(T,qe.get(T.texture).__webglTexture,qe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const le=T.depthTexture;if(O.__boundDepthTexture!==le){if(le!==null&&qe.has(le)&&(T.width!==le.image.width||T.height!==le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(T)}}const X=T.texture;(X.isData3DTexture||X.isDataArrayTexture||X.isCompressedArrayTexture)&&(Ae=!0);const Z=qe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Z[B])?V=Z[B][j]:V=Z[B],fe=!0):T.samples>0&&I.useMultisampledRTT(T)===!1?V=qe.get(T).__webglMultisampledFramebuffer:Array.isArray(Z)?V=Z[j]:V=Z,v.copy(T.viewport),b.copy(T.scissor),D=T.scissorTest}else v.copy(he).multiplyScalar(q).floor(),b.copy(be).multiplyScalar(q).floor(),D=Re;if(ie.bindFramebuffer(H.FRAMEBUFFER,V)&&W&&ie.drawBuffers(T,V),ie.viewport(v),ie.scissor(b),ie.setScissorTest(D),fe){const O=qe.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,O.__webglTexture,j)}else if(Ae){const O=qe.get(T.texture),X=B||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,O.__webglTexture,j||0,X)}R=-1},this.readRenderTargetPixels=function(T,B,j,W,V,fe,Ae){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let A=qe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(A=A[Ae]),A){ie.bindFramebuffer(H.FRAMEBUFFER,A);try{const O=T.texture,X=O.format,Z=O.type;if(!tt.textureFormatReadable(X)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Z)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-W&&j>=0&&j<=T.height-V&&H.readPixels(B,j,W,V,$e.convert(X),$e.convert(Z),fe)}finally{const O=S!==null?qe.get(S).__webglFramebuffer:null;ie.bindFramebuffer(H.FRAMEBUFFER,O)}}},this.readRenderTargetPixelsAsync=async function(T,B,j,W,V,fe,Ae){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let A=qe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(A=A[Ae]),A){const O=T.texture,X=O.format,Z=O.type;if(!tt.textureFormatReadable(X))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Z))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-W&&j>=0&&j<=T.height-V){ie.bindFramebuffer(H.FRAMEBUFFER,A);const le=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,le),H.bufferData(H.PIXEL_PACK_BUFFER,fe.byteLength,H.STREAM_READ),H.readPixels(B,j,W,V,$e.convert(X),$e.convert(Z),0);const we=S!==null?qe.get(S).__webglFramebuffer:null;ie.bindFramebuffer(H.FRAMEBUFFER,we);const xe=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await jm(H,xe,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,le),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,fe),H.deleteBuffer(le),H.deleteSync(xe),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,j=0){T.isTexture!==!0&&(Aa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const W=Math.pow(2,-j),V=Math.floor(T.image.width*W),fe=Math.floor(T.image.height*W),Ae=B!==null?B.x:0,A=B!==null?B.y:0;I.setTexture2D(T,0),H.copyTexSubImage2D(H.TEXTURE_2D,j,0,0,Ae,A,V,fe),ie.unbindTexture()},this.copyTextureToTexture=function(T,B,j=null,W=null,V=0){T.isTexture!==!0&&(Aa("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],B=arguments[2],V=arguments[3]||0,j=null);let fe,Ae,A,O,X,Z;j!==null?(fe=j.max.x-j.min.x,Ae=j.max.y-j.min.y,A=j.min.x,O=j.min.y):(fe=T.image.width,Ae=T.image.height,A=0,O=0),W!==null?(X=W.x,Z=W.y):(X=0,Z=0);const le=$e.convert(B.format),we=$e.convert(B.type);I.setTexture2D(B,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,B.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,B.unpackAlignment);const xe=H.getParameter(H.UNPACK_ROW_LENGTH),Be=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Qe=H.getParameter(H.UNPACK_SKIP_PIXELS),Ne=H.getParameter(H.UNPACK_SKIP_ROWS),ye=H.getParameter(H.UNPACK_SKIP_IMAGES),je=T.isCompressedTexture?T.mipmaps[V]:T.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,je.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,je.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,A),H.pixelStorei(H.UNPACK_SKIP_ROWS,O),T.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,V,X,Z,fe,Ae,le,we,je.data):T.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,V,X,Z,je.width,je.height,le,je.data):H.texSubImage2D(H.TEXTURE_2D,V,X,Z,fe,Ae,le,we,je),H.pixelStorei(H.UNPACK_ROW_LENGTH,xe),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Be),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Qe),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ne),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ye),V===0&&B.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),ie.unbindTexture()},this.copyTextureToTexture3D=function(T,B,j=null,W=null,V=0){T.isTexture!==!0&&(Aa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,W=arguments[1]||null,T=arguments[2],B=arguments[3],V=arguments[4]||0);let fe,Ae,A,O,X,Z,le,we,xe;const Be=T.isCompressedTexture?T.mipmaps[V]:T.image;j!==null?(fe=j.max.x-j.min.x,Ae=j.max.y-j.min.y,A=j.max.z-j.min.z,O=j.min.x,X=j.min.y,Z=j.min.z):(fe=Be.width,Ae=Be.height,A=Be.depth,O=0,X=0,Z=0),W!==null?(le=W.x,we=W.y,xe=W.z):(le=0,we=0,xe=0);const Qe=$e.convert(B.format),Ne=$e.convert(B.type);let ye;if(B.isData3DTexture)I.setTexture3D(B,0),ye=H.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)I.setTexture2DArray(B,0),ye=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,B.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,B.unpackAlignment);const je=H.getParameter(H.UNPACK_ROW_LENGTH),Ye=H.getParameter(H.UNPACK_IMAGE_HEIGHT),pt=H.getParameter(H.UNPACK_SKIP_PIXELS),zt=H.getParameter(H.UNPACK_SKIP_ROWS),vt=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Be.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Be.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,O),H.pixelStorei(H.UNPACK_SKIP_ROWS,X),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Z),T.isDataTexture||T.isData3DTexture?H.texSubImage3D(ye,V,le,we,xe,fe,Ae,A,Qe,Ne,Be.data):B.isCompressedArrayTexture?H.compressedTexSubImage3D(ye,V,le,we,xe,fe,Ae,A,Qe,Be.data):H.texSubImage3D(ye,V,le,we,xe,fe,Ae,A,Qe,Ne,Be),H.pixelStorei(H.UNPACK_ROW_LENGTH,je),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ye),H.pixelStorei(H.UNPACK_SKIP_PIXELS,pt),H.pixelStorei(H.UNPACK_SKIP_ROWS,zt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,vt),V===0&&B.generateMipmaps&&H.generateMipmap(ye),ie.unbindTexture()},this.initRenderTarget=function(T){qe.get(T).__webglFramebuffer===void 0&&I.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?I.setTextureCube(T,0):T.isData3DTexture?I.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?I.setTexture2DArray(T,0):I.setTexture2D(T,0),ie.unbindTexture()},this.resetState=function(){L=0,y=0,S=null,ie.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Vc?"display-p3":"srgb",t.unpackColorSpace=xt.workingColorSpace===Ya?"display-p3":"srgb"}}class Po extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Rf=new U,Lf=new Dt,Cf=new Dt,a2=new U,Pf=new et,ca=new U,zl=new Xs,If=new et,Hl=new Xc;class l2 extends Rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ku,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ca),this.boundingBox.expandByPoint(ca)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Xs),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,ca),this.boundingSphere.expandByPoint(ca)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zl.copy(this.boundingSphere),zl.applyMatrix4(r),e.ray.intersectsSphere(zl)!==!1&&(If.copy(r).invert(),Hl.copy(e.ray).applyMatrix4(If),!(this.boundingBox!==null&&Hl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Hl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Dt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ku?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Mm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Lf.fromBufferAttribute(r.attributes.skinIndex,e),Cf.fromBufferAttribute(r.attributes.skinWeight,e),Rf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Cf.getComponent(s);if(a!==0){const o=Lf.getComponent(s);Pf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(a2.copy(Rf).applyMatrix4(Pf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Fh extends Kt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class c2 extends xn{constructor(e=null,t=1,i=1,r,s,a,o,l,u=Un,c=Un,f,d){super(null,a,o,l,u,c,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Df=new et,u2=new et;class Jc{constructor(e=[],t=[]){this.uuid=Jr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new et;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:u2;Df.multiplyMatrices(o,t[s]),Df.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Jc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new c2(t,e,e,Qn,xi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Fh),this.bones.push(a),this.boneInverses.push(new et().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class Qc extends xn{constructor(e,t,i,r,s,a,o,l,u){super(e,t,i,r,s,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Io extends di{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],f=[],d=[],h=[];let g=0;const _=[],p=i/2;let m=0;x(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new Mn(f,3)),this.setAttribute("normal",new Mn(d,3)),this.setAttribute("uv",new Mn(h,2));function x(){const E=new U,L=new U;let y=0;const S=(t-e)/i;for(let R=0;R<=s;R++){const P=[],v=R/s,b=v*(t-e)+e;for(let D=0;D<=r;D++){const C=D/r,k=C*l+o,F=Math.sin(k),N=Math.cos(k);L.x=b*F,L.y=-v*i+p,L.z=b*N,f.push(L.x,L.y,L.z),E.set(F,S,N).normalize(),d.push(E.x,E.y,E.z),h.push(C,1-v),P.push(g++)}_.push(P)}for(let R=0;R<r;R++)for(let P=0;P<s;P++){const v=_[P][R],b=_[P+1][R],D=_[P+1][R+1],C=_[P][R+1];e>0&&(c.push(v,b,C),y+=3),t>0&&(c.push(b,D,C),y+=3)}u.addGroup(m,y,0),m+=y}function M(E){const L=g,y=new dt,S=new U;let R=0;const P=E===!0?e:t,v=E===!0?1:-1;for(let D=1;D<=r;D++)f.push(0,p*v,0),d.push(0,v,0),h.push(.5,.5),g++;const b=g;for(let D=0;D<=r;D++){const k=D/r*l+o,F=Math.cos(k),N=Math.sin(k);S.x=P*N,S.y=p*v,S.z=P*F,f.push(S.x,S.y,S.z),d.push(0,v,0),y.x=F*.5+.5,y.y=N*.5*v+.5,h.push(y.x,y.y),g++}for(let D=0;D<r;D++){const C=L+D,k=b+D;E===!0?c.push(k,k+1,C):c.push(k+1,k,C),R+=3}u.addGroup(m,R,E===!0?1:2),m+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class eu extends Io{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new eu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tu extends di{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),u(i),c(),this.setAttribute("position",new Mn(s,3)),this.setAttribute("normal",new Mn(s.slice(),3)),this.setAttribute("uv",new Mn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const M=new U,E=new U,L=new U;for(let y=0;y<t.length;y+=3)h(t[y+0],M),h(t[y+1],E),h(t[y+2],L),l(M,E,L,x)}function l(x,M,E,L){const y=L+1,S=[];for(let R=0;R<=y;R++){S[R]=[];const P=x.clone().lerp(E,R/y),v=M.clone().lerp(E,R/y),b=y-R;for(let D=0;D<=b;D++)D===0&&R===y?S[R][D]=P:S[R][D]=P.clone().lerp(v,D/b)}for(let R=0;R<y;R++)for(let P=0;P<2*(y-R)-1;P++){const v=Math.floor(P/2);P%2===0?(d(S[R][v+1]),d(S[R+1][v]),d(S[R][v])):(d(S[R][v+1]),d(S[R+1][v+1]),d(S[R+1][v]))}}function u(x){const M=new U;for(let E=0;E<s.length;E+=3)M.x=s[E+0],M.y=s[E+1],M.z=s[E+2],M.normalize().multiplyScalar(x),s[E+0]=M.x,s[E+1]=M.y,s[E+2]=M.z}function c(){const x=new U;for(let M=0;M<s.length;M+=3){x.x=s[M+0],x.y=s[M+1],x.z=s[M+2];const E=p(x)/2/Math.PI+.5,L=m(x)/Math.PI+.5;a.push(E,1-L)}g(),f()}function f(){for(let x=0;x<a.length;x+=6){const M=a[x+0],E=a[x+2],L=a[x+4],y=Math.max(M,E,L),S=Math.min(M,E,L);y>.9&&S<.1&&(M<.2&&(a[x+0]+=1),E<.2&&(a[x+2]+=1),L<.2&&(a[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function h(x,M){const E=x*3;M.x=e[E+0],M.y=e[E+1],M.z=e[E+2]}function g(){const x=new U,M=new U,E=new U,L=new U,y=new dt,S=new dt,R=new dt;for(let P=0,v=0;P<s.length;P+=9,v+=6){x.set(s[P+0],s[P+1],s[P+2]),M.set(s[P+3],s[P+4],s[P+5]),E.set(s[P+6],s[P+7],s[P+8]),y.set(a[v+0],a[v+1]),S.set(a[v+2],a[v+3]),R.set(a[v+4],a[v+5]),L.copy(x).add(M).add(E).divideScalar(3);const b=p(L);_(y,v+0,x,b),_(S,v+2,M,b),_(R,v+4,E,b)}}function _(x,M,E,L){L<0&&x.x===1&&(a[M]=x.x-1),E.x===0&&E.z===0&&(a[M]=L/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tu(e.vertices,e.indices,e.radius,e.details)}}class nu extends tu{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new nu(e.radius,e.detail)}}class iu extends di{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const c=[],f=new U,d=new U,h=[],g=[],_=[],p=[];for(let m=0;m<=i;m++){const x=[],M=m/i;let E=0;m===0&&a===0?E=.5/t:m===i&&l===Math.PI&&(E=-.5/t);for(let L=0;L<=t;L++){const y=L/t;f.x=-e*Math.cos(r+y*s)*Math.sin(a+M*o),f.y=e*Math.cos(a+M*o),f.z=e*Math.sin(r+y*s)*Math.sin(a+M*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),p.push(y+E,1-M),x.push(u++)}c.push(x)}for(let m=0;m<i;m++)for(let x=0;x<t;x++){const M=c[m][x+1],E=c[m][x],L=c[m+1][x],y=c[m+1][x+1];(m!==0||a>0)&&h.push(M,E,y),(m!==i-1||l<Math.PI)&&h.push(E,L,y)}this.setIndex(h),this.setAttribute("position",new Mn(g,3)),this.setAttribute("normal",new Mn(_,3)),this.setAttribute("uv",new Mn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new iu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yi extends Lo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yh,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ru extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ja extends ru{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Gl=new et,Uf=new U,kf=new U;class f2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $c,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Uf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uf),kf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kf),t.updateMatrixWorld(),Gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class d2 extends f2{constructor(){super(new jc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ka extends ru{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new d2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Za extends ru{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Nf=new et;class Bh{constructor(e,t,i=0,r=1/0){this.ray=new Xc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new qc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nf),this}intersectObject(e,t=!0,i=[]){return gc(e,this,i,t),i.sort(Of),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)gc(e[r],this,i,t);return i.sort(Of),i}}function Of(n,e){return n.distance-e.distance}function gc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)gc(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kc);function h2(n){let e=1779033703^n.length;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),3432918353),e=e<<13|e>>>19;return()=>(e=Math.imul(e^e>>>16,2246822507),e=Math.imul(e^e>>>13,3266489909),e^=e>>>16,e>>>0)}function p2(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}class Ys{constructor(e="lifesim"){this.seed=String(e),this._next=p2(h2(this.seed)()),this._children=new Map}child(e){return this._children.has(e)||this._children.set(e,new Ys(`${this.seed}:${e}`)),this._children.get(e)}float(){return this._next()}range(e,t){return e+this._next()*(t-e)}int(e,t){return Math.floor(this.range(e,t+1))}chance(e){return this._next()<e}sign(){return this._next()<.5?-1:1}pick(e){return e[Math.floor(this._next()*e.length)]}pickMany(e,t){const i=this.shuffle([...e]);return i.slice(0,Math.min(t,i.length))}shuffle(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(this._next()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}weighted(e){const t=Array.isArray(e)?e:[...e].map(([s,a])=>({value:s,weight:a}));let i=0;for(const s of t)i+=Math.max(0,s.weight??1);if(i<=0)return t[0];let r=this._next()*i;for(const s of t)if(r-=Math.max(0,s.weight??1),r<=0)return s;return t[t.length-1]}gaussian(e=0,t=1){let i=0,r=0;for(;i===0;)i=this._next();for(;r===0;)r=this._next();return e+t*Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*r)}stat(e,t,i=0,r=100){return Math.max(i,Math.min(r,Math.round(this.gaussian(e,t))))}}const yi={ceiling:15525851,wall:13814974,wallUpper:14210248,trim:16249834,floorTimber:9072722,benchtop:12168342},Vl=new Map,m2=["roughness","metalness","flat","transparent","opacity","side","emissive","emissiveIntensity","vertexColors"];function g2(n,e={}){let t=String(n);for(const r of m2)e[r]!==void 0&&(t+="|"+r+"="+JSON.stringify(e[r]));if(Vl.has(t))return Vl.get(t);const i=new Yi({color:n,roughness:e.roughness??.85,metalness:e.metalness??0,flatShading:e.flat??!1,transparent:e.transparent??!1,opacity:e.opacity??1,side:e.side??Wi,emissive:e.emissive??0,emissiveIntensity:e.emissiveIntensity??1,vertexColors:e.vertexColors??!1});return Vl.set(t,i),i}const Ja={box:new vn(1,1,1),plane:new Co(1,1),cyl:new Io(.5,.5,1,10),cone:new eu(.5,1,8),sphere:new iu(.5,12,10)};function _r(n,e,t,i,r={}){const s=new Rt(Ja.box,r.material||g2(i,r));return s.scale.set(n,e,t),s.castShadow=r.castShadow??!0,s.receiveShadow=r.receiveShadow??!0,s}const _2=new Set;function v2(n){_2.add(n)}let zh=8,_c=null;function x2(n){_c=n,zh=Math.min(8,n.capabilities.getMaxAnisotropy())}let M2=n=>{const e=document.createElement("canvas");return e.width=e.height=n,e};const Hh=(n,e=n)=>{const t=M2(n);return t.width=n,t.height=e,t};let Gh=0;function su(n,e){return e&&(n.colorSpace=Gn),n.wrapS=n.wrapT=ka,n.anisotropy=zh,n.generateMipmaps=!0,n.minFilter=ur,n.magFilter=Jn,Gh+=n.image.width*n.image.height*4*4/3,_c&&_c.initTexture(n),n}function yn(n){return su(new Qc(S2(n)),!0)}function vc(n){return n.wrapS=n.wrapT=cr,n}function S2(n){const e=Hh(n.w,n.h),t=e.getContext("2d"),i=t.createImageData(n.w,n.h),r=i.data,s=n.d,a=n.w*n.h;for(let o=0,l=0,u=0;o<a;o++,l+=3,u+=4){const c=s[l],f=s[l+1],d=s[l+2];r[u]=(c<0?0:c>1?1:c)*255+.5,r[u+1]=(f<0?0:f>1?1:f)*255+.5,r[u+2]=(d<0?0:d>1?1:d)*255+.5,r[u+3]=255}return t.putImageData(i,0,0),e}const Ut=n=>n<0?0:n>1?1:n,bi=n=>[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255];function y2(n){const[e,t,i]=n,r=Math.max(e,t,i),s=Math.min(e,t,i),a=(r+s)/2;if(r===s)return[0,0,a];const o=r-s,l=a>.5?o/(2-r-s):o/(r+s);let u;return r===e?u=((t-i)/o+(t<i?6:0))/6:r===t?u=((i-e)/o+2)/6:u=((e-t)/o+4)/6,[u,l,a]}function b2(n,e,t){if(e===0)return[t,t,t];const i=t<.5?t*(1+e):t+e-t*e,r=2*t-i,s=a=>(a=(a%1+1)%1,a<1/6?r+(i-r)*6*a:a<1/2?i:a<2/3?r+(i-r)*(2/3-a)*6:r);return[s(n+1/3),s(n),s(n-1/3)]}function Mi(n,e=1,t=0,i=1){const[r,s,a]=y2(Array.isArray(n)?n:bi(n));return b2(r+t/360,Ut(s*i),Ut(a*e))}function bn(n,e){return{w:n,h:e,d:new Float32Array(n*e*3)}}function wi(n,e){const t=Array.isArray(e)?e:bi(e),i=n.d;for(let r=0;r<i.length;r+=3)i[r]=t[0],i[r+1]=t[1],i[r+2]=t[2]}function ou(n,e,t,i,r){if(r<=0)return;const s=n.w,a=n.h;let o=e,l=t;(o<0||o>=s)&&(o=(o%s+s)%s),(l<0||l>=a)&&(l=(l%a+a)%a);const u=(l*s+o)*3,c=n.d,f=1-r;c[u]=c[u]*f+i[0]*r,c[u+1]=c[u+1]*f+i[1]*r,c[u+2]=c[u+2]*f+i[2]*r}function Kn(n,e,t,i,r,s,a=1){const o=Array.isArray(s)?s:bi(s),l=Math.round(e),u=Math.round(i),c=Math.round(t),f=Math.round(r);if(a<1){for(let _=c;_<f;_++)for(let p=l;p<u;p++)ou(n,p,_,o,a);return}const d=n.w,h=n.h,g=n.d;for(let _=c;_<f;_++){let p=_;(p<0||p>=h)&&(p=(p%h+h)%h);const m=p*d;for(let x=l;x<u;x++){let M=x;(M<0||M>=d)&&(M=(M%d+d)%d);const E=(m+M)*3;g[E]=o[0],g[E+1]=o[1],g[E+2]=o[2]}}}function Do(n,e,t,i,r,s=1){const a=i+1;for(let o=Math.floor(t-a);o<=Math.ceil(t+a);o++)for(let l=Math.floor(e-a);l<=Math.ceil(e+a);l++){const u=l+.5-e,c=o+.5-t,f=Ut(i-Math.sqrt(u*u+c*c)+.5);f>0&&ou(n,l,o,r,s*f)}}function xc(n,e,t,i,r=1){const s=Math.max(1,t)/2;for(let a=1;a<e.length;a++){const[o,l]=e[a-1],[u,c]=e[a],f=Math.hypot(u-o,c-l),d=Math.max(1,Math.ceil(f));for(let h=0;h<=d;h++){const g=h/d;Do(n,o+(u-o)*g,l+(c-l)*g,s,i,r)}}}function Vh(n,e,t,i,r,s,a,o){const l=n.w,u=n.h,c=n.d,f=s/2,d=a[0],h=a[1],g=a[2],_=Math.PI*2/i;for(let p=0;p<u;p++){const m=p*l,x=e+t*Math.sin(p*_+r),M=x-f,E=x+f,L=Math.floor(M),y=Math.ceil(E);for(let S=L;S<=y;S++){const R=Ut(Math.min(S+1,E)-Math.max(S,M));if(R<=0)continue;const P=o*R,v=1-P;let b=S;(b<0||b>=l)&&(b=(b%l+l)%l);const D=(m+b)*3;c[D]=c[D]*v+d*P,c[D+1]=c[D+1]*v+h*P,c[D+2]=c[D+2]*v+g*P}}}const Ff=n=>n*n*(3-2*n);function E2(n,e,t){const i=new Float32Array(e*t);for(let r=0;r<i.length;r++)i[r]=n.float();return i}const Bf=256;function Cn(n,e,t={}){const{p0:i=32,octaves:r=4,gain:s=.5,lacunarity:a=2,h:o=e}=t,l=t.p0x??i,u=t.p0y??i,c=new Float32Array(e*o),f=[];let d=1,h=0;for(let L=0;L<r;L++){const y=Math.min(Bf,Math.max(1,Math.round(l*a**L))),S=Math.min(Bf,Math.max(1,Math.round(u*a**L)));f.push({lat:E2(n,y,S),px:y,py:S,amp:d}),h+=d,d*=s}const g=new Float64Array(e*o),_=new Int32Array(e),p=new Int32Array(e),m=new Float64Array(e);for(let L=0;L<f.length;L++){const y=f[L],S=y.lat,R=y.px,P=y.py,v=y.amp,b=R/e,D=P/o;for(let C=0;C<e;C++){const k=C*b,F=k|0,N=F>=R?F%R:F;_[C]=N,p[C]=N+1>=R?0:N+1,m[C]=Ff(k-F)}for(let C=0;C<o;C++){const k=C*D,F=k|0,N=Ff(k-F),q=1-N,z=F>=P?F%P:F,te=z*R,he=(z+1>=P?0:z+1)*R,be=C*e;for(let Re=0;Re<e;Re++){const Se=_[Re],$=p[Re],Y=m[Re],ne=S[te+Se],Q=S[te+$],Pe=S[he+Se],Ee=S[he+$];g[be+Re]+=v*((ne+(Q-ne)*Y)*q+(Pe+(Ee-Pe)*Y)*N)}}}let x=1/0,M=-1/0;for(let L=0;L<c.length;L++){c[L]=g[L]/h;const y=c[L];y<x&&(x=y),y>M&&(M=y)}const E=M-x||1;for(let L=0;L<c.length;L++)c[L]=(c[L]-x)/E;return c}function vr(n,e,t,i){const r=new Float32Array(e*t),s=new Float32Array(e*t),a=2*i+1,o=new Int32Array(e),l=new Int32Array(e);for(let f=0;f<e;f++)o[f]=((f-i)%e+e)%e,l[f]=(f+i+1)%e;for(let f=0;f<t;f++){const d=f*e;let h=0;for(let g=-i;g<=i;g++)h+=n[d+(g%e+e)%e];for(let g=0;g<e;g++)r[d+g]=h/a,h-=n[d+o[g]],h+=n[d+l[g]]}const u=new Int32Array(t),c=new Int32Array(t);for(let f=0;f<t;f++)u[f]=((f-i)%t+t)%t*e,c[f]=(f+i+1)%t*e;for(let f=0;f<e;f++){let d=0;for(let h=-i;h<=i;h++)d+=r[(h%t+t)%t*e+f];for(let h=0;h<t;h++)s[h*e+f]=d/a,d-=r[u[h]+f],d+=r[c[h]+f]}return s}function w2(n,e,t=1.5,i=null){const r=i??n.length/e,s=new Uint8Array(e*r*4),a=t/8,o=new Int32Array(e),l=new Int32Array(e);for(let u=0;u<e;u++)o[u]=(u-1+e)%e,l[u]=(u+1)%e;for(let u=0;u<r;u++){const c=(u-1+r)%r*e,f=u*e,d=(u+1)%r*e;let h=f*4;for(let g=0;g<e;g++,h+=4){const _=o[g],p=l[g],m=n[c+_],x=n[c+g],M=n[c+p],E=n[f+_],L=n[f+p],y=n[d+_],S=n[d+g],R=n[d+p],P=M+2*L+R-(m+2*E+y),v=y+2*S+R-(m+2*x+M),b=-P*a,D=v*a,C=1/Math.sqrt(b*b+D*D+1);s[h]=(b*C*.5+.5)*255+.5,s[h+1]=(D*C*.5+.5)*255+.5,s[h+2]=(C*.5+.5)*255+.5,s[h+3]=255}}return s}function hi(n,e,t=1.5,i=null){const r=i??n.length/e;return su(new Qc(Wh(w2(n,e,t,r),e,r)),!1)}function Wh(n,e,t){const i=Hh(e,t),r=i.getContext("2d"),s=r.createImageData(e,t);return s.data.set(n),r.putImageData(s,0,0),i}function T2(n,e,t,i,r=null){const a=n*(r??n),o=new Uint8Array(a*4);for(let l=0,u=0;l<a;l++,u+=4){const c=e?e[l]:1,f=t?t[l]:.85,d=i?i[l]:0;o[u]=(c<0?0:c>1?1:c)*255+.5,o[u+1]=(f<0?0:f>1?1:f)*255+.5,o[u+2]=(d<0?0:d>1?1:d)*255+.5,o[u+3]=255}return o}function on(n,e,t,i,r=null){const s=r??n;return su(new Qc(Wh(T2(n,e,t,i,s),n,s)),!1)}const Xh={},zf=new Map;function qt(n,e){Xh[n]=e}function A2(){var n,e;for(const t of zf.values()){for(const i of["map","normalMap","ormMap"])(e=(n=t[i])==null?void 0:n.dispose)==null||e.call(n);if(t.maps)for(const i of t.maps)i.dispose()}zf.clear(),Gh=0}v2(A2);const Wl={blackbutt:{base:13214581,dark:10122054,rough:.4},spottedGum:{base:11040332,dark:8015662,rough:.38},jarrah:{base:9061685,dark:6040352,rough:.44},tasOak:{base:14072722,dark:11111779,rough:.42},pine:{base:14467213,dark:11571294,rough:.5}};qt("timberFloor",(n,e={})=>{const a=1.9500000000000002,o=1024/a,l=1024/15,u=Math.max(2,Math.round(.004*o)),c=e.species||n.pick(Object.keys(Wl)),f=Wl[c]||Wl.blackbutt,d=bn(1024,1024);wi(d,Mi(f.dark,.72));const h=bi(f.dark),g=Mi(f.base,1.25),_=[];for(let y=0;y<15;y++){const S=y*l+u/2,R=(y+1)*l-u/2,P=Mi(f.base,1+n.range(-.06,.06),n.range(-3,3));Kn(d,S,0,R,1024,P);const v=Math.round(n.range(.15,.85)*1024);_.push(v),Kn(d,S,v,R,v+2,Mi(f.dark,.8),.85),Kn(d,S,v-2,R,v,g,.25);const b=n.int(28,60);for(let D=0;D<b;D++){const C=n.range(S+1,R-1),k=n.range(1.5,4),F=1024/n.int(2,5),N=n.range(0,Math.PI*2),q=n.range(2,3),z=n.range(.04,.12),te=n.chance(.25)?g:h;Vh(d,C,k,F,N,q,te,z)}if(n.chance(.2)){const D=n.range(204.8,819.2),C=n.range(60,160),k=n.range(S+4,R-4);for(let F=0;F<n.int(2,4);F++){const N=(F+1)*n.range(3,7),q=[];for(let z=0;z<=16;z++){const te=z/16;q.push([k+(te-.5)*2*N,D-C*(1-(te-.5)**2*4)])}xc(d,q,2,h,.06)}}}const p=Cn(n,512,{p0:64,octaves:3}),m=new Float32Array(512*512),x=new Float32Array(512*512),M=new Float32Array(512*512),E=512/15,L=u*512/1024;for(let y=0;y<512;y++)for(let S=0;S<512;S++){const R=y*512+S,P=Math.floor(S/E),v=S-P*E,b=v<L/2||v>E-L/2,D=y*1024/512,C=_[P],k=D>=C-1&&D<=C+2,F=b||k;x[R]=F?.15:.75,m[R]=Ut(f.rough+(F?.1:0)+(p[R]-.5)*.1),M[R]=F?.72:1}return{map:yn(d),normalMap:hi(vr(x,512,512,1),512,1.2),ormMap:on(512,M,m,null),uvScale:[a,a],normalScale:.5,species:c,tinted:!1}});qt("plasterWall",(n,e={})=>{const r=e.rough??.88,s=Cn(n,256,{p0:64,octaves:3,gain:.45}),a=new Float32Array(256*256),o=.4*256/2;for(let l=0;l<256;l++)for(let u=0;u<256;u++){const c=l*256+u;let f=r+(s[c]**1.5-.5)*.1;e.ceiling||(f+=Math.cos(u/o*Math.PI*2)*.02),a[c]=Ut(f)}return{ormMap:on(256,null,a,null),uvScale:[2,2],normalScale:0,tinted:!0}});qt("plasterCeiling",n=>Xh.plasterWall(n,{rough:.93,ceiling:!0}));qt("paintedJoinery",n=>{const i=Cn(n,256,{p0:64,octaves:3}),r=new Float32Array(256*256);for(let s=0;s<256;s++)for(let a=0;a<256;a++){const o=s*256+a;r[o]=Ut(.42+(i[o]-.5)*.06+Math.sin(a/256*Math.PI*2*12)*.015)}return{ormMap:on(256,null,r,null),uvScale:[1,1],normalScale:0,tinted:!0}});qt("carpetPile",n=>{const i=bn(512,512);wi(i,[1,1,1]);const r=Cn(n,512,{p0x:64,p0y:192,octaves:3,gain:.5}),s=i.d;for(let l=0;l<512;l++)for(let u=0;u<512;u++){const c=l*512+u,f=Math.cos(l/256*Math.PI*2)*.03,d=Ut(.9+(r[c]-.5)*.16+f);s[c*3]=d,s[c*3+1]=d,s[c*3+2]=d}for(let l=0;l<1200;l++){const u=n.pick([[1.1,0],[.78,8],[.92,-10]]),c=Mi(16777215,u[0],u[1],1);if(u[1]!==0){const f=n.range(0,1);c[0]=c[0]*(.94+f*.12),c[2]=c[2]*(1.06-f*.12)}Do(i,n.range(0,512),n.range(0,512),n.range(1,2),c,.25)}const a=Cn(n,512,{p0x:43,p0y:128,octaves:3}),o=new Float32Array(512*512);for(let l=0;l<o.length;l++)o[l]=Ut(.92+(a[l]-.5)*.06);return{map:yn(i),normalMap:hi(a,512,.6),ormMap:on(512,null,o,null),uvScale:[1,1],normalScale:.7,tinted:!0}});qt("ceramicTile",(n,e={})=>{const i=e.tile??.3,r=2,s=i*r,a=Math.max(2,Math.round(.003*512/s)),o=3,l=512/r,u=bi(12104358),c=[];for(let p=0;p<r*r;p++)c.push({c:Mi(14473423,1+n.range(-.03,.03),n.range(-2,2)),g:n.range(-1,1)});const f=bn(512,512),d=new Float32Array(512*512),h=new Float32Array(512*512),g=new Float32Array(512*512),_=a/2;for(let p=0;p<512;p++)for(let m=0;m<512;m++){const x=p*512+m,M=Math.floor(m/l),E=Math.floor(p/l),L=m-M*l,y=p-E*l,S=Math.min(L,l-L,y,l-y);if(S<_){f.d[x*3]=u[0],f.d[x*3+1]=u[1],f.d[x*3+2]=u[2],d[x]=.85,h[x]=.25,g[x]=.62;continue}const R=c[E*r+M],P=(L/l+y/l)/2,v=1.03-.06*(R.g>0?P:1-P);f.d[x*3]=Ut(R.c[0]*v),f.d[x*3+1]=Ut(R.c[1]*v),f.d[x*3+2]=Ut(R.c[2]*v),d[x]=.08;const b=Ut((S-_)/o);h[x]=.25+.75*b,g[x]=.62+.38*b}return{map:yn(f),normalMap:hi(h,512,2),ormMap:on(512,g,d,null),uvScale:[s,s],normalScale:.8,tinted:!1}});qt("fabricWeave",n=>{const i=bn(256,256),r=new Float32Array(256*256),s=new Float32Array(256*256),a=128,o=new Float32Array(a*8),l=new Float32Array(a*8);for(let c=0;c<o.length;c++)o[c]=n.range(-.035,.035);for(let c=0;c<l.length;c++)l[c]=n.range(-.035,.035);const u=Cn(n,256,{p0:64,octaves:2});for(let c=0;c<256;c++)for(let f=0;f<256;f++){const d=c*256+f,h=(f>>1&1^c>>1&1)===0,g=f>>1,_=c>>1,p=h?o[(g*8+(c>>5&7))%o.length]:l[(_*8+(f>>5&7))%l.length],m=Ut((h?1.06:.94)+p+(u[d]-.5)*.06);i.d[d*3]=m,i.d[d*3+1]=m,i.d[d*3+2]=m,r[d]=h?.66:.8,s[d]=h?1:.3}return{map:yn(i),normalMap:hi(vr(s,256,256,1),256,.8),ormMap:on(256,null,r,null),uvScale:[.25,.25],normalScale:.6,tinted:!0}});qt("joineryTimber",n=>{const i=bn(512,512);wi(i,[1,1,1]);const r=Cn(n,512,{p0x:48,p0y:8,octaves:4}),s=i.d;for(let l=0;l<512*512;l++){const u=Ut(.94+(r[l]-.5)*.22);s[l*3]=u,s[l*3+1]=u,s[l*3+2]=u}const a=Mi(16777215,.72);for(let l=0;l<220;l++){const u=n.range(0,512),c=n.range(2,6),f=512/n.int(1,2),d=n.range(0,Math.PI*2);Vh(i,u,c,f,d,n.range(2,3.5),a,n.range(.03,.09))}const o=new Float32Array(512*512);for(let l=0;l<o.length;l++)o[l]=Ut(.55+(r[l]-.5)*.08);return{map:yn(i),ormMap:on(512,null,o,null),uvScale:[1,1],normalScale:0,tinted:!0}});qt("vinylSheet",n=>{const i=bn(512,512);wi(i,14209732);const r=[13222578,15131093,11906460,14472902].map(bi);for(let l=0;l<3e3;l++)Do(i,n.range(0,512),n.range(0,512),n.range(1,3),n.pick(r),.35);const s=Cn(n,512,{p0:32,octaves:3}),a=new Float32Array(512*512);for(let l=0;l<a.length;l++)a[l]=Ut(.28+(s[l]-.5)*.12);const o={w:512,h:512,d:new Float32Array(512*512*3)};for(let l=0;l<12;l++){const u=n.range(0,512),c=n.range(0,512),f=n.range(40,120),d=n.range(0,Math.PI*2),h=n.range(.6,2.2),g=[];for(let _=0;_<=24;_++){const p=d+h*(_/24);g.push([u+Math.cos(p)*f,c+Math.sin(p)*f])}xc(i,g,n.range(2,4),Mi(14209732,.88),.3),xc(o,g,n.range(2,4),[1,1,1],1)}for(let l=0;l<a.length;l++)a[l]=Ut(a[l]+o.d[l*3]*.15);return{map:yn(i),ormMap:on(512,null,a,null),uvScale:[1,1],normalScale:0,tinted:!1}});qt("laminateBench",n=>{const r=bn(512,512);wi(r,yi.benchtop);const s=[9274743,14077886,7235417].map(bi);for(let u=0;u<2e3;u++)Do(r,n.range(0,512),n.range(0,512),n.range(1,2.5),n.pick(s),.3);const a=new Float32Array(512*512);for(let u=0;u<a.length;u++)a[u]=.28;const o=Math.max(2,Math.round(.006*512/.6)),l=Mi(yi.benchtop,.82);for(let u=0;u<512;u++)if(Math.min(u,512-u)<o)for(let f=0;f<512;f++)ou(r,f,u,l,.85),a[u*512+f]=.45;return{map:yn(r),ormMap:on(512,null,a,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});qt("ceilingGrid",n=>{const r=bn(512,512);wi(r,15526370);const s=Math.max(2,Math.round(.015*512/1.2)),a=Math.max(2,Math.round(.015*512/.6)),o=bi(14210509),l=bi(12434098),u=Cn(n,512,{p0:64,octaves:2}),c=new Float32Array(512*512);for(let f=0;f<512;f++)for(let d=0;d<512;d++){const h=f*512+d,g=Math.min(d,512-d),_=Math.min(f,512-f);if(g<s/2||_<a/2){const x=g>=s/2-2&&g<s/2||_>=a/2-2&&_<a/2?l:o;r.d[h*3]=x[0],r.d[h*3+1]=x[1],r.d[h*3+2]=x[2],c[h]=.55}else{const m=1+(u[h]-.5)*.04;r.d[h*3]*=m,r.d[h*3+1]*=m,r.d[h*3+2]*=m,c[h]=.9}}return{map:yn(r),ormMap:on(512,null,c,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});qt("applianceEnamel",n=>{const i=Cn(n,256,{p0:64,octaves:3}),r=new Float32Array(256*256);for(let s=0;s<r.length;s++)r[s]=Ut(.3+(i[s]-.5)*.04);return{ormMap:on(256,null,r,null),uvScale:[1,1],normalScale:0,tinted:!0}});qt("metalBrushed",n=>{const i=new Float32Array(65536),r=new Float32Array(256*256),s=Cn(n,256,{p0x:8,p0y:256,octaves:2});for(let a=0;a<256;a++){const o=n.range(-.1,.1);for(let l=0;l<256;l++){const u=a*256+l;i[u]=Ut(.35+o*.6+(s[u]-.5)*.1)}}return{ormMap:on(256,null,i,r),uvScale:[.4,.4],normalScale:0,tinted:!0}});qt("quiltFolds",n=>{const i=[],r=n.int(5,9);for(let d=0;d<r;d++)i.push({a:n.range(.4,1),c:n.range(.05,.95),w:n.range(.06,.14)});const s=d=>{let h=0;for(const g of i)h+=g.a*Math.exp(-(((d-g.c)/g.w)**2));return h+=.5*Math.exp(-((d/.04)**2))+.5*Math.exp(-(((1-d)/.04)**2)),h};let a=1/0,o=-1/0;for(let d=0;d<=256;d++){const h=s(d/256);h<a&&(a=h),h>o&&(o=h)}const l=o-a||1,u=d=>(s(Ut(d))-a)/l,c=bn(512,256),f=new Float32Array(512*256);for(let d=0;d<512;d++){const h=u(d/511),g=.9+.1*h;for(let _=0;_<256;_++){const p=_*512+d;c.d[p*3]=g,c.d[p*3+1]=g,c.d[p*3+2]=g,f[p]=h}}return{map:vc(yn(c)),normalMap:vc(hi(f,512,3,256)),uvScale:null,normalScale:1,field:u,folds:i,tinted:!0}});qt("pictureArt",n=>{const i=[[14272936,10251087,4148050,15130057],[8361635,14213090,3095106,12820586],[11056266,15196880,6056775,9067068],[13609376,8015698,15722204,3814198],[9415096,15788760,4479587,12153919]],r=[];for(let s=0;s<5;s++){const a=i[s].map(bi),o=bn(256,256);wi(o,a[n.int(0,3)]);const l=n.int(0,2);if(l===0){let c=0;for(;c<256;){const f=n.int(12,48);Kn(o,0,c,256,Math.min(256,c+f),a[n.int(0,3)],n.range(.5,1)),c+=f}}else if(l===1)for(let c=0;c<n.int(5,11);c++){const f=n.range(0,179.2),d=n.range(0,256*.7);Kn(o,f,d,f+n.range(30,110),d+n.range(30,110),a[n.int(0,3)],n.range(.55,.95))}else{const c=n.range(115.2,174.08);Kn(o,0,0,256,c,a[0],1),Kn(o,0,c,256,256,a[2],1);for(let f=0;f<n.int(3,7);f++){const d=n.range(c-40,c+40);Kn(o,0,d,256,d+n.range(3,10),a[n.int(0,3)],n.range(.3,.7))}Do(o,n.range(256*.2,256*.8),n.range(20,c-20),n.range(12,26),a[3],.9)}const u=Mi(16777215,.97);Kn(o,0,0,256,6,u),Kn(o,0,250,256,256,u),Kn(o,0,0,6,256,u),Kn(o,250,0,256,256,u),r.push(vc(yn(o)))}return{maps:r,map:r[0],uvScale:null,normalScale:0,prints:5,tinted:!1}});qt("garmentKnit",n=>{const i=bn(256,256),r=new Float32Array(256*256),s=new Float32Array(256*256),a=16,o=12,l=Cn(n,256,{p0:64,octaves:2});for(let u=0;u<256;u++)for(let c=0;c<256;c++){const f=u*256+c,d=c%a/a*2-1,h=Math.cos(d*Math.PI*.5),g=(c/a|0)%2?o/2:0,_=(u+g)%o/o,p=1-Math.abs(_*2-1)*.45,m=Ut(h*.75+p*.25+(l[f]-.5)*.1),x=Ut(.8+m*.28);i.d[f*3]=x,i.d[f*3+1]=x,i.d[f*3+2]=x,r[f]=.94-m*.1,s[f]=m}return{map:yn(i),normalMap:hi(vr(s,256,256,1),256,1.2),ormMap:on(256,null,r,null),uvScale:[.16,.16],normalScale:1.1,tinted:!0}});qt("garmentDenim",n=>{const i=bn(256,256),r=new Float32Array(256*256),s=new Float32Array(256*256),a=Cn(n,256,{p0:96,octaves:3}),o=new Float32Array(256);for(let l=0;l<256;l++)o[l]=n.range(-.05,.05);for(let l=0;l<256;l++)for(let u=0;u<256;u++){const c=l*256+u,f=(u+l)%3!==0,d=(u>>1&1)===0,g=Ut((f?d?1.02:.9:.72)+o[(u+l*3)%256]+(a[c]-.5)*.07);i.d[c*3]=g,i.d[c*3+1]=g,i.d[c*3+2]=g,r[c]=f?.78:.88,s[c]=f?1:.25}return{map:yn(i),normalMap:hi(vr(s,256,256,1),256,.9),ormMap:on(256,null,r,null),uvScale:[.12,.12],normalScale:.85,tinted:!0}});qt("garmentCotton",n=>{const i=bn(256,256),r=new Float32Array(256*256),s=new Float32Array(256*256),a=Cn(n,256,{p0:48,octaves:3});for(let o=0;o<256;o++)for(let l=0;l<256;l++){const u=o*256+l,c=(l&1^o&1)===0,f=Ut((c?1.02:.97)+(a[u]-.5)*.09);i.d[u*3]=f,i.d[u*3+1]=f,i.d[u*3+2]=f,r[u]=.88-(c?.03:0),s[u]=c?.7:.4}return{map:yn(i),normalMap:hi(vr(s,256,256,1),256,.45),ormMap:on(256,null,r,null),uvScale:[.09,.09],normalScale:.4,tinted:!0}});qt("garmentButtons",n=>{const i=bn(64,256);wi(i,[.97,.97,.97]);const r=new Float32Array(64*256).fill(.86),s=new Float32Array(64*256).fill(.45),a=64/2,o=5,l=64*.2;for(let u=0;u<256;u++)for(let c=0;c<64;c++){const f=u*64+c,d=Math.abs(c-a);d<64*.3&&(s[f]=.8),d>64*.3&&d<64*.36&&(s[f]=.2)}for(let u=0;u<o;u++){const c=256*((u+.7)/(o+.4));for(let f=Math.floor(c-l-2);f<=Math.ceil(c+l+2);f++)if(!(f<0||f>=256))for(let d=0;d<64;d++){const h=Math.hypot(d-a,f-c);if(h>l)continue;const g=f*64+d,_=Math.sqrt(Math.max(0,1-(h/l)**2));s[g]=.8+_*.2;const p=.86+_*.16;i.d[g*3]=p,i.d[g*3+1]=p,i.d[g*3+2]=p,r[g]=.42,Math.abs(f-c)<l*.16&&Math.abs(Math.abs(d-a)-l*.3)<l*.14&&(s[g]=.6,i.d[g*3]=.62,i.d[g*3+1]=.62,i.d[g*3+2]=.62)}}return{map:yn(i),normalMap:hi(vr(s,64,256,1),64,1.4,256),ormMap:on(64,null,r,null,256),uvScale:[1,1],normalScale:1,tinted:!0,noTile:!0}});qt("garmentZip",n=>{const i=bn(64,256);wi(i,[.95,.95,.95]);const r=new Float32Array(64*256).fill(.86),s=new Float32Array(64*256).fill(.45),a=64/2,o=7;for(let u=0;u<256;u++)for(let c=0;c<64;c++){const f=u*64+c,d=c-a,h=Math.abs(d);if(h<64*.34&&(s[f]=.62,r[f]=.82),h<64*.17){const g=d<0?0:o/2,p=(u+g)%o/o<.55;s[f]=p?1:.5;const m=p?1.06:.74;i.d[f*3]=m,i.d[f*3+1]=m,i.d[f*3+2]=m,r[f]=p?.3:.55}}const l=256*.14;for(let u=Math.floor(l);u<l+256*.055;u++)for(let c=Math.floor(a-64*.11);c<a+64*.11;c++){const f=u*64+c;f<0||f>=64*256||(s[f]=1,r[f]=.28,i.d[f*3]=1.1,i.d[f*3+1]=1.1,i.d[f*3+2]=1.1)}return{map:yn(i),normalMap:hi(vr(s,64,256,1),64,1.6,256),ormMap:on(64,null,r,null,256),uvScale:[1,1],normalScale:1.2,tinted:!0,noTile:!0}});qt("garmentPlate",n=>{const i=bn(256,256);wi(i,[1,1,1]);const r=new Float32Array(256*256).fill(.42),s=new Float32Array(256*256).fill(.72),a=Cn(n,256,{p0:64,octaves:3}),o=128;for(let u=0;u<256;u++)for(let c=0;c<256;c++){const f=u*256+c,d=Math.min(c%o,o-1-c%o),h=Math.min(u%o,o-1-u%o),g=Math.min(d,h);let _=.72,p=1,m=.42;if(g<2)_=.22,p=.93,m=.58;else if(g<5){const x=(g-2)/3;_=.22+x*.5,p=.93+x*.08,m=.58-x*.16}p+=(a[f]-.5)*.05,i.d[f*3]=p,i.d[f*3+1]=p,i.d[f*3+2]=p,r[f]=m,s[f]=_}const l=2;for(let u=0;u<256;u+=o)for(let c=0;c<256;c+=o)for(const[f,d]of[[7,7],[o-7,7],[7,o-7],[o-7,o-7]])for(let h=-l-1;h<=l+1;h++)for(let g=-l-1;g<=l+1;g++){const _=(c+f+g+256)%256,p=(u+d+h+256)%256,m=Math.hypot(g,h);if(m>l)continue;const x=p*256+_,M=Math.sqrt(Math.max(0,1-(m/l)**2));s[x]=.82+M*.18;const E=1.02+M*.1;i.d[x*3]=E,i.d[x*3+1]=E,i.d[x*3+2]=E,r[x]=.3}return{map:yn(i),normalMap:hi(vr(s,256,256,1),256,1.5),ormMap:on(256,null,r,null),uvScale:[.34,.34],normalScale:1.45,tinted:!0}});class R2{constructor(){this._handlers=new Map,this._log=[]}on(e,t){return this._handlers.has(e)||this._handlers.set(e,new Set),this._handlers.get(e).add(t),()=>this.off(e,t)}once(e,t){const i=this.on(e,r=>{i(),t(r)});return i}off(e,t){var i;(i=this._handlers.get(e))==null||i.delete(t)}emit(e,t={}){this._log.push({type:e,payload:t,at:performance.now()}),this._log.length>400&&this._log.shift();const i=this._handlers.get(e);if(i)for(const o of[...i])o(t,e);const r=e.split(":")[0]+":*",s=this._handlers.get(r);if(s)for(const o of[...s])o(t,e);const a=this._handlers.get("*");if(a)for(const o of[...a])o(t,e)}recent(e=40){return this._log.slice(-e)}}const L2={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],sprint:["ShiftLeft","ShiftRight"],jump:["Space"],interact:["KeyE"],camera:["KeyV"],phone:["KeyQ"],journal:["KeyJ"],inventory:["KeyI"],map:["KeyM"],wait:["KeyT"],rotate:["KeyR"],furnishDone:["KeyF"],furnishSell:["KeyX"],cancel:["Escape"]},C2=2e3;class P2{constructor(e,t){this.bus=e,this.dom=t,this.bindings={...L2},this.down=new Set,this.pressed=new Set,this.mouse={dx:0,dy:0,sensitivity:.0022,invertY:!1},this.locked=!1,this.lockPending=!1,this._lockTimer=0,this.enabled=!0,this._attach()}clearHeld(){this.down.clear(),this.pressed.clear(),this.mouse.dx=0,this.mouse.dy=0}_attach(){window.addEventListener("keydown",e=>{if(e.repeat)return;Object.values(this.bindings).some(i=>i.includes(e.code))&&e.code!=="Escape"&&e.preventDefault(),this.down.add(e.code),this.pressed.add(e.code),this.bus.emit("input:key",{code:e.code});for(const[i,r]of Object.entries(this.bindings))r.includes(e.code)&&this.bus.emit("action:"+i,{})}),window.addEventListener("keyup",e=>this.down.delete(e.code)),window.addEventListener("blur",()=>this.clearHeld()),window.addEventListener("focus",()=>this.clearHeld()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clearHeld()}),document.addEventListener("pointerlockchange",()=>{this._settleLock(),this.locked=document.pointerLockElement===this.dom,this.locked||this.clearHeld(),this.bus.emit("input:pointerlock",{locked:this.locked})}),document.addEventListener("pointerlockerror",e=>this._failLock(e)),window.addEventListener("mousemove",e=>{this.locked&&(this.mouse.dx+=e.movementX,this.mouse.dy+=e.movementY)}),window.addEventListener("mousedown",e=>{this.pressed.add("Mouse"+e.button),this.down.add("Mouse"+e.button)}),window.addEventListener("mouseup",e=>this.down.delete("Mouse"+e.button)),window.addEventListener("wheel",e=>{this.bus.emit("input:wheel",{delta:Math.sign(e.deltaY)})},{passive:!0})}_settleLock(){this.lockPending=!1,clearTimeout(this._lockTimer),this._lockTimer=0}_failLock(e){const t=this.lockPending;this._settleLock(),t&&(this.locked=!1,console.warn("[input] pointer lock request refused",e||""),this.bus.emit("input:pointerlockfailed",{error:e||null}))}requestLock(){var t,i;if(this.locked||this.lockPending||!((t=this.dom)!=null&&t.requestPointerLock))return;this.lockPending=!0,clearTimeout(this._lockTimer),this._lockTimer=setTimeout(()=>{this.lockPending=!1},C2);let e;try{e=this.dom.requestPointerLock()}catch(r){this._failLock(r);return}(i=e==null?void 0:e.catch)==null||i.call(e,r=>this._failLock(r))}requestLockFresh(){this.locked||(this._settleLock(),this.requestLock())}releaseLock(){var e;this._settleLock(),this.locked=!1,(e=document.exitPointerLock)==null||e.call(document)}isDown(e){return this.enabled?(this.bindings[e]||[]).some(t=>this.down.has(t)):!1}wasPressed(e){return this.enabled?(this.bindings[e]||[]).some(t=>this.pressed.has(t)):!1}axis(){let e=0,t=0;this.isDown("forward")&&(t+=1),this.isDown("back")&&(t-=1),this.isDown("right")&&(e+=1),this.isDown("left")&&(e-=1);const i=Math.hypot(e,t);return i>1?{x:e/i,y:t/i}:{x:e,y:t}}consumeMouse(){const e={dx:this.mouse.dx,dy:this.mouse.dy};return this.mouse.dx=0,this.mouse.dy=0,e}endFrame(){this.pressed.clear()}}const Mc=n=>Number.isFinite(n)&&n>0?n:0;function au(n={}){const e=n.max??100,t=n.shield??0;return{max:e,hp:Math.min(n.hp??e,e),shield:t,shieldMax:n.shieldMax??t,thresholds:[...n.thresholds??[]].sort((i,r)=>r-i),dead:(n.hp??e)<=0}}function I2(n,e,t){const i=[];for(const r of n.thresholds){const s=n.max*r;e>s&&t<=s&&i.push({at:r,hp:s})}return i}function qh(n,e={}){const t=[];if(n.dead)return{state:n,events:t};const i=Mc(e.amount),r=e.crit?i*(e.critMul??2):i,s=e.kind??null,a=e.source??null;let{hp:o,shield:l}=n,u=r;if(l>0&&!e.ignoreShield&&u>0){const d=Math.min(l,u);l-=d,u-=d,t.push({type:"absorbed",amount:d,shield:l,kind:s,source:a}),l===0&&t.push({type:"shieldBroken",overflow:u,kind:s,source:a})}const c=o;o=Math.max(0,o-u),(u>0||r===0)&&t.push({type:"damaged",amount:u,hp:o,was:c,kind:s,source:a});for(const d of I2(n,c,o))t.push({type:"threshold",at:d.at,hp:d.hp,kind:s,source:a});const f=o<=0;return f&&t.push({type:"died",kind:s,source:a}),{state:{...n,hp:o,shield:l,dead:f},events:t}}function Sc(n,e={}){const t=[];if(n.dead)return{state:n,events:t};const i=Math.min(n.max,n.hp+Mc(e.amount)),r=Math.min(n.shieldMax,n.shield+Mc(e.shield));return i!==n.hp&&t.push({type:"healed",amount:i-n.hp,hp:i,was:n.hp,source:e.source??null}),r!==n.shield&&t.push({type:"shielded",amount:r-n.shield,shield:r,source:e.source??null}),{state:{...n,hp:i,shield:r},events:t}}const Yh=n=>n.max>0?n.hp/n.max:0,lu=n=>n.shieldMax>0?n.shield/n.shieldMax:0,D2=1e-9,U2=n=>n>0?60/n:0;function k2(n={}){const e=n.magazine??30;return{magazine:e,loaded:Math.min(n.loaded??e,e),reserve:n.reserve??e*6,interval:U2(n.rpm??600),reloadTime:n.reloadTime??2,burst:n.burst??0,auto:n.auto??!0,maxCatchUp:n.maxCatchUp??.25,nextShotAt:0,reloadEndsAt:0,reloading:!1,fired:!1,burstLeft:0}}const $h=(n,e)=>n.reloading&&e<n.reloadEndsAt;function N2(n,e){if(!n.reloading||e<n.reloadEndsAt)return{state:n,events:[]};const t=n.magazine-n.loaded,i=Math.min(t,n.reserve),r=n.loaded+i,s=n.reserve===1/0?1/0:n.reserve-i;return{state:{...n,loaded:r,reserve:s,reloading:!1,reloadEndsAt:0},events:[{type:"reloaded",at:e,loaded:r,reserve:s,took:i}]}}function O2(n,e,t={}){const i=[],r=[];if($h(n,e))return t.pressed&&i.push({type:"blocked",why:"reloading",at:e}),{state:n,shots:r,events:i};if(!(n.auto?t.held||t.pressed:!!t.pressed))return{state:n,shots:r,events:i};if(n.loaded<=0)return t.pressed&&i.push({type:"dry",at:e}),{state:n,shots:r,events:i};let a=n.loaded,o=n.nextShotAt;(!n.fired||t.pressed||e-o>n.maxCatchUp)&&(o=e);const l=n.burst>0;let u=l?t.pressed?n.burst:n.burstLeft:0;for(;a>0&&o<=e+D2&&(!l||u>0)&&(r.push({at:Math.min(o,e),remaining:a-1}),a--,u--,o+=n.interval,!(n.interval<=0)););return r.length&&i.push({type:"fired",count:r.length,loaded:a,at:e}),a===0&&n.loaded>0&&i.push({type:"emptied",at:e}),{state:{...n,loaded:a,nextShotAt:o,burstLeft:l?Math.max(0,u):0,fired:n.fired||r.length>0},shots:r,events:i}}function F2(n,e){return n.reloading?{state:n,events:[]}:n.loaded>=n.magazine?{state:n,events:[{type:"refused",why:"full",at:e}]}:n.reserve<=0?{state:n,events:[{type:"refused",why:"empty",at:e}]}:{state:{...n,reloading:!0,reloadEndsAt:e+n.reloadTime},events:[{type:"reloading",at:e,endsAt:e+n.reloadTime}]}}const B2=.26,z2=.13,H2=2.4,ps=(n,e,t)=>n+(e-n)*t,Hf=(n,e,t,i)=>i<=0?e:Math.max(0,Math.min(1,n+(e-n)*Math.min(1,t/i))),Xl={x:0,y:0,z:-.3,pitch:0,yaw:0,roll:0};function Gf(n,e,t,i){return i.x=ps(n.x,e.x,t),i.y=ps(n.y,e.y,t),i.z=ps(n.z,e.z,t),i.pitch=ps(n.pitch,e.pitch,t),i.yaw=ps(n.yaw,e.yaw,t),i.roll=ps(n.roll,e.roll,t),i}function G2(n={}){if(!n.model)throw new Error("makeViewmodel: needs a { model }");const e={...Xl,...n.rest??{}},t={...Xl,...n.aim??e},i=n.stowDrop??.23,r={...e,y:e.y-i},s=n.drawTime??B2,a=n.aimTime??z2,o=n.reach??6,l=n.cone??.3,u=new Po,c=new _n(n.fov??48,1,.01,1),f=new Ln;let d=n.model,h=n.emitter??null;f.add(d),u.add(f);const g=new Ka(16777215,n.keyIntensity??2.2);g.position.set(.4,.8,.6),u.add(g,new Za(16777215,n.fillIntensity??.9));let _=0,p=0,m=0,x=0;const M={...r},E={...Xl},L={scene:u,camera:c,model:n.model,get out(){return m===1},get drawn(){return _},get aiming(){return x===1&&_>.6},get liveReach(){return this.aiming?o*H2:o},get liveCone(){return l},channel(y="tool"){return{id:y,get radius(){return L.liveReach},get cone(){return L.liveCone},when:()=>L.aiming,filter:S=>{var R;return((R=S==null?void 0:S.data)==null?void 0:R.tool)!==!1}}},swap(y,S){const R=d;return d&&f.remove(d),d=y??null,d&&f.add(d),L.model=d,h=S??null,R},draw(){m=1},stow(){m=0,x=0},toggle(){m=m?0:1,m||(x=0)},setAim(y){x=y?1:0,y&&(m=1)},ray(y,S=new U,R=new U){return S.copy(y.position),y.getWorldDirection(R),{origin:S,dir:R}},emitterAt(y=new U){return h?(h.updateWorldMatrix(!0,!1),y.setFromMatrixPosition(h.matrixWorld)):y.set(0,0,0)},update(y){return _=Hf(_,m,y,s),p=Hf(p,x&&_>.6?1:0,y,a),Gf(r,e,_,E),Gf(E,t,p,M),f.position.set(M.x,M.y,M.z),f.rotation.set(M.pitch,M.yaw,M.roll,"YXZ"),f.visible=_>.001,M},pass(y,S){if(f.visible===!1)return;c.aspect=(S==null?void 0:S.aspect)??c.aspect,c.updateProjectionMatrix();const R=y.autoClear;y.autoClear=!1,y.clearDepth(),y.render(u,c),y.autoClear=R},dispose(){u.traverse(y=>{var S,R;y.isMesh&&((S=y.geometry)==null||S.dispose(),Array.isArray(y.material)?y.material.forEach(P=>P.dispose()):(R=y.material)==null||R.dispose())})}};return L.update(0),L}function cu(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,l=new di;let u=0;for(let c=0;c<n.length;++c){const f=n[c];let d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in f.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(f.attributes[h]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in f.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[h]===void 0&&(a[h]=[]),a[h].push(f.morphAttributes[h])}if(e){let h;if(t)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,h,c),u+=h}}if(t){let c=0;const f=[];for(let d=0;d<n.length;++d){const h=n[d].index;for(let g=0;g<h.count;++g)f.push(h.getX(g)+c);c+=n[d].attributes.position.count}l.setIndex(f)}for(const c in s){const f=Vf(s[c]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,f)}for(const c in a){const f=a[c][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<f;++d){const h=[];for(let _=0;_<a[c].length;++_)h.push(a[c][_][d]);const g=Vf(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function Vf(n){let e,t,i,r=-1,s=0;for(let u=0;u<n.length;++u){const c=n[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*t}const a=new e(s),o=new On(a,t,i);let l=0;for(let u=0;u<n.length;++u){const c=n[u];if(c.isInterleavedBufferAttribute){const f=l/t;for(let d=0,h=c.count;d<h;d++)for(let g=0;g<t;g++){const _=c.getComponent(d,g);o.setComponent(d+f,g,_)}}else a.set(c.array,l);l+=c.count*t}return r!==void 0&&(o.gpuType=r),o}const V2=12,Ts=24,jh=n=>n.startsWith("glow"),Wf=new cn,W2=new jt,X2=new U,q2=new U(1,1,1),Y2=new et,Xf=new U;function Qa(n,e=new et){const[,,,,t,i,r,,s=0,a=0,o=0]=n;return Wf.set(s,a,o),e.compose(X2.set(t,i,r),W2.setFromEuler(Wf),q2)}function Uo(n,e={}){const t=Object.keys(n.bones),i={};for(const x of t){const M=n.bones[x],E=new Fh;E.name=x,E.position.set(...M.at),M.rot&&E.rotation.set(...M.rot),i[x]=E}const r=new Ln;r.name=n.id??"box-rig";for(const x of t){const M=n.bones[x].parent;if(M===void 0)r.add(i[x]);else if(i[M])i[M].add(i[x]);else throw new Error(`BoxRig '${r.name}': bone '${x}' has unknown parent '${M}'`)}r.updateMatrixWorld(!0);const s=new Map(t.map((x,M)=>[x,M])),a={solid:[],glow:[]},o=new ut,l=new et;n.parts.forEach((x,M)=>{const[E,L,y,S,,,,R]=x;if(!s.has(E))throw new Error(`BoxRig '${r.name}': part ${M} rides unknown bone '${E}'`);const P=n.palette[R];if(P===void 0)throw new Error(`BoxRig '${r.name}': part ${M} has unknown colour '${R}'`);const v=new vn(L,y,S);v.deleteAttribute("uv"),v.applyMatrix4(Y2.multiplyMatrices(i[E].matrixWorld,Qa(x,l))),o.set(P);const b=v.attributes.position.count,D=new Float32Array(b*3),C=new Uint16Array(b*4),k=new Float32Array(b*4),F=s.get(E);for(let N=0;N<b;N++)D[N*3]=o.r,D[N*3+1]=o.g,D[N*3+2]=o.b,C[N*4]=F,k[N*4]=1;v.setAttribute("color",new On(D,3)),v.setAttribute("skinIndex",new Yc(C,4)),v.setAttribute("skinWeight",new On(k,4)),a[jh(R)?"glow":"solid"].push({g:v,part:x})});const u=new Jc(t.map(x=>i[x])),c=[],f=(x,M)=>{const E=a[x];if(!E.length)return null;const L=E.length===1?E[0].g:cu(E.map(S=>S.g),!1);if(!L)throw new Error(`BoxRig '${r.name}': ${x} boxes would not merge`);E.length>1&&E.forEach(S=>S.g.dispose());const y=new l2(L,M);return y.name=`${r.name}:${x}`,y.userData.parts=E.map(S=>S.part),r.add(y),y.bind(u),c.push(y),y},d=f("solid",e.solidMaterial??new Yi({vertexColors:!0,roughness:.85,metalness:0})),h=f("glow",e.glowMaterial??new Sn({vertexColors:!0})),g=new qi;for(const x of c)x.geometry.computeBoundingBox(),g.union(x.geometry.boundingBox);const _=g.clone().expandByPoint(Xf.set(0,0,0)).getBoundingSphere(new Xs);_.radius=_.radius*1.25+.4;for(const x of c)x.boundingSphere=_.clone();for(const x of t){const M=i[x];M.userData.rest={p:M.position.clone(),r:M.rotation.clone()}}const p=n.scale??1;r.scale.setScalar(p);const m=h?h.geometry.attributes.color.array.slice():null;return{root:r,bones:i,skeleton:u,solid:d,glow:h,meshes:c,scale:p,reset(){for(const x of t){const M=i[x];M.position.copy(M.userData.rest.p),M.rotation.copy(M.userData.rest.r)}},partAt(x,M){var L;const E=(L=x==null?void 0:x.userData)==null?void 0:L.parts;return E&&Number.isInteger(M)?E[Math.floor(M/V2)]??null:null},bounds(x=[]){const M=new qi;for(const E of c){const L=E.geometry.attributes.position;E.userData.parts.forEach((y,S)=>{if(!x.includes(y[0]))for(let R=S*Ts;R<(S+1)*Ts;R++)M.expandByPoint(Xf.fromBufferAttribute(L,R))})}return M.min.multiplyScalar(p),M.max.multiplyScalar(p),M},setGlowLit(x,M=()=>!1){if(!h)return;const E=h.geometry.attributes.color;h.userData.parts.forEach((L,y)=>{const S=x||M(L)?1:.1;for(let R=y*Ts*3;R<(y+1)*Ts*3;R++)E.array[R]=m[R]*S}),E.needsUpdate=!0},dispose(){for(const x of c)x.geometry.dispose();u.dispose()}}}const Ot=(n,e,t)=>n<e?e:n>t?t:n,Hn=(n,e,t)=>n+(e-n)*t,Gs=n=>n<=0?0:n>=1?1:n*n*(3-2*n),mi=n=>{const e=1-Ot(n,0,1);return 1-e*e*e},zr=n=>{const e=Ot(n,0,1);return e*e},ql=(n,e,t,i)=>t<=0?e:n+(e-n)*(1-Math.exp(-Math.LN2*i/t));function li(n,e,t,i){const r=2*Math.LN2/t,s=n.x-e,a=n.v+s*r,o=Math.exp(-r*i);n.x=o*(s+a*i)+e,n.v=o*(n.v-a*r*i)}const no=(n,e)=>n*Math.E/e,qf=n=>2*Math.LN2*n;function $2(n,e,t,i){if(i<=0)return e?1:0;if(e){if(n>=1)return 1;const s=1-Math.cbrt(1-n)+t/i;return s>=1?1:1-(1-s)**3}if(n<=0)return 0;const r=Math.cbrt(n)-t/i;return r<=0?0:r**3}function Kh(n,e,t,i){if(!i)return Gs(n);const r=!!i.in&&i.in.some(a=>Math.abs(a-t)<1e-9),s=!!i.out&&i.out.some(a=>Math.abs(a-e)<1e-9);return r&&s?Ot(n,0,1):r?zr(n):s?mi(n):Gs(n)}function Zn(n,e,t=[],i=null){const r=n[0].length-1;if(e<=n[0][0]){for(let c=0;c<r;c++)t[c]=n[0][c+1];return t}const s=n[n.length-1];if(e>=s[0]){for(let c=0;c<r;c++)t[c]=s[c+1];return t}let a=1;for(;n[a][0]<e;)a++;const o=n[a-1],l=n[a],u=Kh((e-o[0])/(l[0]-o[0]||1),o[0],l[0],i);for(let c=0;c<r;c++)t[c]=o[c+1]+(l[c+1]-o[c+1])*u;return t}function Yf(n,e,t=null){if(e<=n[0][0])return{from:n[0][1],to:n[0][1],w:1,extra:n[0].slice(2)};const i=n[n.length-1];if(e>=i[0])return{from:i[1],to:i[1],w:1,extra:i.slice(2)};let r=1;for(;n[r][0]<e;)r++;const s=n[r-1],a=n[r],o=Kh((e-s[0])/(a[0]-s[0]||1),s[0],a[0],t);return{from:s[1],to:a[1],w:o,extra:s.slice(2).map((l,u)=>l+(a[u+2]-l)*o)}}const Hr=n=>{const e=Math.sin(n*12.9898+78.233)*43758.5453;return(e-Math.floor(e))*2-1},j2={pelvis:{at:[0,.92,0]},spine:{parent:"pelvis",at:[0,.06,0]},chest:{parent:"spine",at:[0,.24,0]},head:{parent:"chest",at:[0,.34,0]},armL:{parent:"chest",at:[.28,.26,0]},foreL:{parent:"armL",at:[0,-.32,0]},handL:{parent:"foreL",at:[0,-.28,0]},armR:{parent:"chest",at:[-.28,.26,0]},foreR:{parent:"armR",at:[0,-.32,0]},handR:{parent:"foreR",at:[0,-.28,0]},thighL:{parent:"pelvis",at:[.1,-.04,0]},shinL:{parent:"thighL",at:[0,-.42,0]},footL:{parent:"shinL",at:[0,-.38,0]},thighR:{parent:"pelvis",at:[-.1,-.04,0]},shinR:{parent:"thighR",at:[0,-.42,0]},footR:{parent:"shinR",at:[0,-.38,0]},capeA:{parent:"chest",at:[0,.26,-.14]},capeB:{parent:"capeA",at:[0,-.52,0]},mark:{parent:"pelvis",at:[0,-.02,.13]},skirtB:{parent:"pelvis",at:[0,-.02,-.13]}},Zh=[["pelvis",.36,.16,.23,0,0,0,"suit"],["spine",.4,.26,.23,0,.12,0,"suit"],["chest",.44,.3,.25,0,.14,0,"suit"],["chest",.13,.08,.13,0,.32,0,"suit"],["head",.21,.23,.23,0,.115,0,"mask"],["armL",.12,.34,.13,0,-.16,0,"suit"],["foreL",.11,.3,.12,0,-.14,0,"suit"],["handL",.1,.1,.1,0,-.05,0,"glove"],["armR",.12,.34,.13,0,-.16,0,"suit"],["foreR",.11,.3,.12,0,-.14,0,"suit"],["handR",.1,.1,.1,0,-.05,0,"glove"],["thighL",.17,.44,.19,0,-.21,0,"suit"],["shinL",.15,.4,.17,0,-.2,0,"suit"],["footL",.18,.09,.3,0,-.035,.05,"boot"],["thighR",.17,.44,.19,0,-.21,0,"suit"],["shinR",.15,.4,.17,0,-.2,0,"suit"],["footR",.18,.09,.3,0,-.035,.05,"boot"]],K2={thighL:[-.1,0,0],thighR:[-.1,0,0],shinL:[.2,0,0],shinR:[.2,0,0],footL:[-.1,0,0],footR:[-.1,0,0],spine:[.05,0,0],chest:[.05,0,0],head:[-.1,0,0],armL:[-.35,0,.18],armR:[-.35,0,-.18],foreL:[-.8,0,0],foreR:[-.8,0,0],capeA:[.1,0,0],skirtB:[.06,0,0],mark:[-.04,0,0]},Z2=-.01,ua=Math.PI*2;function J2(n,e,t=1){for(const i in e){const r=e[i],s=n[i];s&&(s.rotation.x+=r[0]*t,s.rotation.y+=r[1]*t,s.rotation.z+=r[2]*t)}}function Q2(n,e,t){n.armL.rotation.z+=t,n.armR.rotation.z-=t,n.foreL.rotation.x+=-.12,n.foreR.rotation.x+=-.12,n.chest.rotation.x+=.012*Math.sin(ua*e/3.2),n.capeA.rotation.x+=.03*Math.sin(ua*e/2.6),n.mark.rotation.x+=.02*Math.sin(ua*e/2.6+1),n.skirtB.rotation.x+=.02*Math.sin(ua*e/2.6+2)}const eM=(n,e,t)=>({id:`risen-${n}`,bones:j2,parts:[...Zh,...e],palette:t}),tM={titanPlate:{plate:"#595d60",plateDark:"#3a3d40",plateEdge:"#a9b3b8",gauntlet:"#595d60",cloth:"#5d6142",clothDark:"#41442e",clothTrim:"#c8bfa6",sleeve:"#2b2e31",classItem:"#5d6142",classItemMark:"#c8bfa6",suit:"#2b2e31",glove:"#3b2f27",leather:"#5a3e2b",strap:"#4a3a2c",boot:"#2a2622",mask:"#151719",glowVisor:"#dff3ff",glowElement:"#6fd3ff"},hunterCloak:{plate:"#7d858a",plateDark:"#4a4f53",plateEdge:"#b9c1c5",gauntlet:"#7d858a",cloth:"#3e3530",clothDark:"#2c2622",clothTrim:"#bdb29a",sleeve:"#4f6660",classItem:"#3e3530",classItemMark:"#8a4a2b",suit:"#2b2e31",glove:"#3b2f27",leather:"#5a3e2b",strap:"#8a4a2b",boot:"#2a2622",mask:"#151719",glowVisor:"#dff3ff",glowElement:"#ff8a2a"},warlockRobe:{plate:"#4a4f53",plateDark:"#33373a",plateEdge:"#8d969b",gauntlet:"#5a3e2b",cloth:"#6e6450",clothDark:"#4f483a",clothTrim:"#c8bfa6",sleeve:"#6e6450",classItem:"#c8bfa6",classItemMark:"#8a7a5a",suit:"#2b2e31",glove:"#3b2f27",leather:"#5a3e2b",strap:"#8a7a5a",boot:"#2a2622",mask:"#151719",glowVisor:"#dff3ff",glowElement:"#c9a9ff"}},nM=Object.freeze(["titanPlate","hunterCloak","warlockRobe"]),iM=Object.freeze({titan:"titanPlate",hunter:"hunterCloak",warlock:"warlockRobe"}),Jh=Object.freeze(["human","exo","awoken"]),Qh=Object.freeze(["masc","fem"]),ep=Object.freeze(["moss","umber","drab","ochre","heather"]),tp=Object.freeze(["bare","blackened","weathered"]),np=Object.freeze(["forge","gate","sheaf","bell"]),ip=Object.freeze({moss:Object.freeze({dye:"#5d6142",dark:"#42452f"}),umber:Object.freeze({dye:"#3e3530",dark:"#2c2622"}),drab:Object.freeze({dye:"#6e6450",dark:"#4f4839"}),ochre:Object.freeze({dye:"#7d6232",dark:"#594624"}),heather:Object.freeze({dye:"#8c6c72",dark:"#644d52"})}),rp=Object.freeze({titanPlate:Object.freeze({blackened:Object.freeze(["#3f4143","#2d2f30","#767c7f"]),weathered:Object.freeze(["#5f5752","#45403d","#a3a19b"])}),hunterCloak:Object.freeze({blackened:Object.freeze(["#54585b","#37393b","#7e8285"]),weathered:Object.freeze(["#787370","#524e4c","#aca8a2"])}),warlockRobe:Object.freeze({blackened:Object.freeze(["#37393b","#292b2d","#6a6f72"]),weathered:Object.freeze(["#554e49","#403b38","#94918b"])})}),rM=Object.freeze({titanPlate:"#595d60",hunterCloak:"#7d858a",warlockRobe:"#4a4f53"}),$f=Object.freeze({forge:"#9c5737",gate:"#656d41",sheaf:"#7d6637",bell:"#8a5b74"}),jf=Object.freeze({titanPlate:Object.freeze({dye:Object.freeze(["cloth","classItem"]),dark:Object.freeze(["clothDark"])}),hunterCloak:Object.freeze({dye:Object.freeze(["cloth","classItem","sleeve"]),dark:Object.freeze(["clothDark"])}),warlockRobe:Object.freeze({dye:Object.freeze(["cloth","sleeve"]),dark:Object.freeze(["clothDark","clothTrim","classItem"])})}),sM=Object.freeze({titanPlate:Object.freeze(["plate","plateDark","plateEdge","gauntlet"]),hunterCloak:Object.freeze(["plate","plateDark","plateEdge","gauntlet"]),warlockRobe:Object.freeze(["plate","plateDark","plateEdge"])}),oM=Object.freeze({plate:0,plateDark:1,plateEdge:2,gauntlet:0}),sp=Object.freeze({titanPlate:Object.freeze({kind:"human",body:"masc",dye:"moss",finish:"bare",crest:"bell"}),hunterCloak:Object.freeze({kind:"human",body:"masc",dye:"umber",finish:"bare",crest:"gate"}),warlockRobe:Object.freeze({kind:"human",body:"masc",dye:"drab",finish:"bare",crest:"sheaf"})}),aM=Object.freeze([["kind",Jh],["body",Qh],["dye",ep],["finish",tp],["crest",np]]),el=n=>nM.includes(n)?n:iM[n]??"hunterCloak";function yc(n){return sp[el(n)]}function lM(n,e){const t=yc(e);let i=n;if(typeof i=="string"){if(i.length>256)return t;try{i=JSON.parse(i)}catch{return t}}if(!i||typeof i!="object"||Array.isArray(i))return t;const r={};for(const[s,a]of aM)r[s]=a.includes(i[s])?i[s]:t[s];return Object.freeze(r)}function uu(n,e=null){const t=el(n),i=lM(e,t),r=sp[t],s={};if(i.dye!==r.dye){const{dye:a,dark:o}=ip[i.dye];for(const l of jf[t].dye)s[l]=a;for(const l of jf[t].dark)s[l]=o}if(i.finish!==r.finish){const a=rp[t][i.finish];for(const o of sM[t])s[o]=a[oM[o]]}return s}function cM(n,e){var i;const t=el(n);return((i=rp[t][e])==null?void 0:i[0])??rM[t]}const uM=Object.freeze([["titanPlate","plate","plate"],["titanPlate","plateEdge","plateLight"],["titanPlate","gauntlet","plate"],["titanPlate","suit","undersuit"],["titanPlate","glove","glove"],["hunterCloak","plate","steel"],["hunterCloak","gauntlet","steel"],["hunterCloak","clothTrim","bandCloth"],["hunterCloak","sleeve","knit"],["hunterCloak","classItemMark","bandRust"],["hunterCloak","strap","bandRust"],["hunterCloak","glove","glove"],["warlockRobe","gauntlet","bracer"],["warlockRobe","cloth","sleeve"],["warlockRobe","clothDark","sleeveDark"],["warlockRobe","sleeve","sleeve"],["warlockRobe","classItemMark","cord"],["warlockRobe","strap","cord"],["warlockRobe","glove","glove"]]);function fM(n,e=null){const t=el(n),i=uu(t,e),r={};for(const[s,a,o]of uM)s===t&&i[a]!==void 0&&(r[o]=i[a]);return r}const bt=(n,e,t,i,r,s,a,o,l=0,u=0,c=0,f=o)=>[[n,e,t,i,r,s,a,o,l,u,c],[n.replace(/L$/,"R"),e,t,i,-r,s,a,f,l,-u,-c]],dM={parts:[["head",.25,.12,.27,0,.215,-.01,"plate"],["head",.23,.03,.25,0,.265,-.005,"plate",-.1],["head",.266,.03,.03,0,.18,.122,"plateEdge"],...bt("head",.1,.14,.05,.066,.05,.105,"plate"),["head",.17,.022,.012,0,.14,.119,"glowVisor"],["head",.04,.1,.03,0,.12,.14,"plateEdge"],...bt("head",.03,.1,.14,.12,.1,-.02,"plateDark"),["head",.24,.2,.08,0,.1,-.14,"plate",.35],["chest",.58,.2,.32,0,.2,.005,"plate"],["chest",.46,.13,.3,0,.045,.005,"plate"],["chest",.26,.03,.02,0,.235,.172,"plateEdge"],["chest",.12,.07,.02,-.13,.155,.172,"plateEdge"],["chest",.26,.06,.24,0,.32,0,"plateDark"],["chest",.3,.03,.05,0,.315,.105,"clothTrim"],["chest",.34,.07,.12,0,.335,-.105,"cloth"],["chest",.4,.16,.02,0,.19,-.17,"plateDark"],...bt("chest",.018,.12,.1,.297,.2,0,"strap"),["spine",.3,.07,.04,0,.17,.125,"plateDark"],["spine",.28,.07,.04,0,.095,.125,"plateDark"],["spine",.42,.05,.25,0,.205,0,"clothDark"],["pelvis",.4,.06,.25,0,.06,0,"leather"],["pelvis",.07,.04,.02,0,.06,.13,"plateEdge"],...bt("pelvis",.024,.12,.18,.205,-.025,0,"plateDark"),["skirtB",.3,.14,.025,0,-.02,-.025,"plateDark"],["mark",.25,.46,.02,0,-.21,.035,"classItem",-.06],["mark",.035,.38,.02,.055,-.2091,.05,"classItemMark",-.06],["mark",.11,.05,.04,-.06,-.4546,.0497,"clothDark",-.06],["mark",.07,.07,.02,-.06,-.1193,.0446,"clothTrim",-.06],...bt("mark",.03,.08,.08,.09,.0293,.0156,"strap",-.06),...bt("armL",.25,.11,.3,.055,.005,0,"plate",0,0,-.2,"plateDark"),...bt("armL",.2,.06,.26,.08,-.075,0,"plate",0,0,-.28,"plateDark"),...bt("armL",.27,.025,.02,.049,-.0244,.155,"plateEdge",0,0,-.2),...bt("armL",.03,.09,.11,.072,-.2,0,"plate"),...bt("armL",.14,.05,.15,0,-.07,0,"clothDark"),...bt("armL",.16,.05,.17,0,-.12,0,"cloth"),...bt("armL",.14,.03,.15,0,-.26,0,"strap"),...bt("foreL",.14,.22,.15,0,-.17,0,"gauntlet"),...bt("foreL",.16,.05,.17,0,-.255,0,"plate"),...bt("foreL",.13,.055,.05,0,-.0275,-.075,"plateDark"),...bt("foreL",.16,.02,.17,0,-.08,0,"plateEdge"),...bt("handL",.018,.06,.08,.058,-.04,0,"plate"),...bt("handL",.012,.03,.04,.07,-.04,0,"plateEdge"),...bt("handL",.04,.03,.06,.059,-.075,0,"plateDark"),...bt("handL",.012,.012,.04,.082,-.075,0,"glowElement"),...bt("thighL",.15,.24,.03,.03,-.13,.108,"plate",0,.4),...bt("thighL",.19,.03,.21,0,-.28,0,"strap"),...bt("shinL",.13,.09,.05,0,-.01,.1,"plate"),...bt("shinL",.17,.28,.04,0,-.22,.095,"plate"),...bt("shinL",.19,.03,.2,0,-.3,0,"strap"),...bt("footL",.2,.056,.13,0,-.009,.145,"plate"),...bt("footL",.18,.05,.21,0,.035,0,"leather")],previewArmOut:.1,clothLimits:{mark:[-.6,0]},targets:{boxes:[60,85],topY:[1.83,1.87],minY:[-.005,.005],visorY:[1.68,1.72],shoulderSpan:[.86,.96],chestSpan:[.54,.62],waistSpanMax:.46,hemSpanMax:.46,vRatioMin:1.85,armourShare:[.7,.9],detail:{bones:["armL","foreL","handL","armR","foreR","handR","chest"],min:.4},mark:{topMin:.86,bottom:[.38,.48],width:[.22,.28]},clothNearHead:{bones:["head","chest"],above:1.45,min:1}}},hM={parts:[["head",.226,.246,.246,0,.115,0,"plateDark"],["head",.2,.03,.02,0,.178,.133,"plate"],["head",.12,.018,.008,0,.14,.127,"glowVisor"],["head",.17,.095,.025,0,.062,.1355,"plate"],["head",.19,.05,.13,0,.005,.07,"plateDark"],["head",.022,.12,.022,-.045,-.02,.17,"leather",-.35,0,-.3],["head",.07,.06,.05,0,.055,.168,"mask"],["head",.05,.05,.075,.078,.036,.168,"plate",.35,.5,0],["head",.05,.05,.075,-.078,.036,.168,"plate",.35,-.5,0],["head",.068,.068,.012,.0979,.0235,.2022,"strap",.35,.5,0],["head",.068,.068,.012,-.0979,.0235,.2022,"strap",.35,-.5,0],["head",.28,.28,.21,0,.11,-.045,"classItem"],["head",.25,.06,.21,0,.28,-.045,"classItem"],["head",.25,.04,.1,0,.26,.105,"classItem",.2,0,0],["head",.03,.21,.09,.125,.11,.1,"classItem"],["head",.03,.21,.09,-.125,.11,.1,"classItem"],["chest",.18,.06,.19,0,.32,.005,"clothTrim"],["chest",.06,.16,.02,.06,.2,.185,"clothTrim",0,0,.1],["chest",.34,.22,.03,0,.145,.14,"plateEdge"],["chest",.32,.025,.05,0,.255,.139,"plate"],["chest",.3,.22,.015,0,.15,-.1325,"plateDark"],["chest",.035,.32,.02,.12,.125,.176,"strap"],["chest",.035,.32,.02,-.12,.125,.176,"strap"],["chest",.1,.07,.04,.09,0,.145,"leather"],["chest",.1,.07,.04,-.09,0,.145,"leather"],["spine",.26,.09,.025,0,.135,.1275,"plateDark"],["armL",.15,.035,.17,.012,.022,0,"plate",0,0,-.28],["armR",.15,.035,.17,-.012,.022,0,"plate",0,0,.28],["armL",.13,.03,.15,.025,-.03,0,"plateDark",0,0,-.4],["armR",.13,.03,.15,-.025,-.03,0,"plateDark",0,0,.4],["foreL",.13,.26,.14,0,-.13,0,"sleeve"],["foreR",.13,.26,.14,0,-.13,0,"sleeve"],["foreL",.148,.02,.158,0,-.27,0,"clothTrim"],["foreR",.148,.02,.158,0,-.27,0,"clothTrim"],["foreL",.13,.02,.14,0,-.3,0,"strap"],["foreR",.13,.02,.14,0,-.3,0,"strap"],["handL",.014,.02,.07,.057,-.07,0,"gauntlet"],["handR",.014,.02,.07,-.057,-.07,0,"gauntlet"],["handL",.01,.014,.086,.055,-.089,0,"glowElement"],["handR",.01,.014,.086,-.055,-.089,0,"glowElement"],["pelvis",.42,.05,.25,0,.065,0,"leather"],["pelvis",.05,.035,.012,0,.065,.131,"plateEdge"],["thighL",.15,.28,.025,.012,-.18,.1075,"plateDark",0,.2,0],["thighR",.15,.28,.025,-.012,-.18,.1075,"plateDark",0,-.2,0],["thighL",.19,.03,.21,0,-.36,0,"strap"],["thighR",.19,.03,.21,0,-.36,0,"strap"],["thighL",.035,.17,.05,.1,-.15,.03,"leather",0,0,.15],["shinL",.13,.09,.06,0,0,.1,"plateDark"],["shinR",.13,.09,.06,0,0,.1,"plateDark"],["shinL",.12,.27,.025,0,-.19,.0975,"plateDark"],["shinR",.12,.27,.025,0,-.19,.0975,"plateEdge"],["shinL",.025,.2,.09,.0825,-.18,.03,"plateDark"],["shinR",.025,.2,.09,-.0825,-.18,.03,"plateEdge"],["shinL",.168,.025,.188,0,-.25,0,"strap"],["shinR",.168,.025,.188,0,-.25,0,"strap"],["shinL",.17,.08,.19,0,-.345,0,"boot"],["shinR",.17,.08,.19,0,-.345,0,"boot"],["footL",.196,.05,.11,0,-.005,.155,"plateDark"],["footR",.196,.05,.11,0,-.005,.155,"plateDark"],["capeA",.28,.12,.03,0,.07,-.03,"classItem",.5,0,0],["capeA",.49,.335,.02,0,-.1125,-.02,"classItem"],["capeA",.45,.29,.035,0,-.385,-.0125,"classItem"],["capeA",.11,.09,.008,-.11,-.17,-.034,"clothDark"],["capeA",.43,.025,.008,0,-.47,-.034,"classItemMark"],["capeB",.09,.39,.02,.19,-.165,-.02,"classItem",0,0,.05],["capeB",.09,.44,.02,.095,-.19,-.02,"classItem"],["capeB",.09,.47,.02,0,-.205,-.02,"classItem"],["capeB",.09,.41,.02,-.095,-.175,-.02,"classItem"],["capeB",.09,.35,.02,-.19,-.145,-.02,"classItem",0,0,-.05],["capeB",.05,.14,.012,.1425,-.36,-.037,"clothDark",0,0,.06]],previewArmOut:.12,clothLimits:{capeA:[-.05,.35],capeB:[-.4,.6]},targets:{boxes:[50,75],topY:[1.85,1.9],visorY:[1.68,1.72],visorRecess:.02,shoulderSpan:[.68,.76],chestSpan:[.46,.52],waistSpan:[.42,.48],hemSpanMax:.5,armourShare:[.4,.6],detailShareMin:.35,capeBottom:[.5,.62],capeBackZ:-.16,capeShoulderSpan:.4,hemLevels:3,hemStep:.04,caydeWidth:.06,mismatch:{bone:"shinR",key:"plateEdge",pair:"plateDark"}}},fu=Math.PI/4,Vs=[],yt=(...n)=>Vs.push(n),un=(n,e,t,i,r,s,a,o,l=0,u=0,c=0)=>{Vs.push([n,e,t,i,r,s,a,o,l,u,c]),Vs.push([n.replace(/L$/,"R"),e,t,i,-r,s,a,o,l,-u,-c])},$s=(n,e,t,i,r,s,a,o,l=0,u=0,c=0)=>{Vs.push([n,e,t,i,r,s,a,o,l,u,c]),Vs.push([n,e,t,i,-r,s,a,o,l,-u,-c])};yt("head",.15,.128,.165,0,.234,-.0075,"plate");yt("head",.27,.088,.285,0,.194,-.0075,"plate");$s("head",.035,.125,.255,.1175,.0925,-.0225,"plate");yt("head",.2,.125,.035,0,.0925,-.1325,"plate");$s("head",.085,.03,.165,.0944,.2574,-.0075,"plate",0,0,-fu);yt("head",.15,.03,.085,0,.2574,.0944,"plate",fu,0,0);yt("head",.15,.03,.085,0,.2574,-.1094,"plate",-fu,0,0);yt("head",.2,.022,.012,0,.162,.141,"plateEdge");yt("head",.14,.018,.01,0,.14,.12,"glowVisor");yt("chest",.24,.08,.04,0,.325,-.095,"cloth");$s("chest",.035,.08,.17,.1025,.325,-.01,"cloth");yt("chest",.5,.1,.28,0,.25,0,"cloth");yt("chest",.5,.22,.28,0,.09,0,"cloth");yt("chest",.2,.2,.03,0,.14,.152,"plate");$s("chest",.075,.28,.02,.105,.15,.172,"clothTrim",0,0,-.3);yt("chest",.07,.06,.012,-.17,.02,.146,"clothDark");yt("spine",.48,.28,.26,0,.12,0,"cloth");yt("spine",.52,.055,.29,0,.03,0,"clothTrim");yt("spine",.06,.045,.012,0,.03,.151,"plateEdge");$s("spine",.024,.024,.01,.065,.11,.135,"plateEdge");$s("spine",.024,.024,.01,.065,.18,.135,"plateEdge");yt("spine",.09,.08,.05,-.15,-.03,.16,"leather");yt("pelvis",.5,.185,.27,0,-.0025,0,"cloth");un("thighL",.22,.3,.03,.03,-.13,.123,"cloth");un("thighL",.26,.16,.034,.05,-.36,.125,"cloth");un("thighL",.276,.03,.05,.05,-.445,.125,"clothDark");un("thighL",.075,.35,.265,.1335,-.1493,-.0075,"cloth",0,0,.22);un("thighL",.07,.17,.29,.1852,-.3666,-.01,"cloth",0,0,.22);un("thighL",.09,.03,.316,.2027,-.4447,-.0065,"clothDark",0,0,.22);yt("skirtB",.48,.33,.03,0,-.135,-.02,"cloth");yt("skirtB",.58,.16,.034,0,-.38,-.022,"cloth");yt("skirtB",.596,.03,.05,0,-.465,-.022,"clothDark");yt("skirtB",.016,.3,.01,0,-.29,-.042,"clothDark");yt("skirtB",.3,.045,.012,0,-.06,-.041,"clothTrim");un("shinL",.12,.09,.024,0,-.03,.099,"plate");un("shinL",.166,.15,.186,0,-.18,0,"leather");un("shinL",.182,.17,.202,0,-.325,0,"boot");un("armL",.15,.37,.16,0,-.165,0,"sleeve");yt("armL",.15,.045,.19,.012,.02,0,"plate",0,0,-.25);yt("armR",.15,.045,.19,-.012,.02,0,"plateEdge",0,0,.25);un("foreL",.145,.25,.155,0,-.105,0,"sleeve");un("foreL",.161,.045,.171,0,-.2225,0,"clothDark");un("foreL",.128,.1,.138,0,-.265,0,"gauntlet");un("foreL",.144,.012,.154,0,-.26,0,"strap");un("foreL",.144,.012,.154,0,-.295,0,"strap");yt("armL",.172,.07,.182,0,-.15,0,"classItem");yt("armL",.188,.012,.198,0,-.15,0,"classItemMark");yt("armL",.02,.11,.05,.096,-.215,-.03,"classItem");yt("armL",.008,.006,.06,.09,-.175,.035,"glowElement");un("handL",.008,.05,.05,-.054,-.055,0,"glowElement");un("handL",.008,.06,.006,.054,-.055,0,"glowElement");const pM={parts:Vs,previewArmOut:.2,clothLimits:{skirtB:[-.2,.6]},targets:{boxes:[50,75],topY:[1.82,1.87],minY:[-.005,.005],visorY:[1.68,1.72],shoulderSpan:[.7,.78],chestSpan:[.48,.54],waistSpan:[.5,.58],hemSpanMin:.6,hemOverChestMin:.08,coatBottom:[.34,.48],armourShare:[.12,.3],detailShareMin:.45,bond:{parts:[1,2],boneY:[-.22,-.1],worldY:[1.26,1.38],wrapW:.13,wrapD:.14,threadMaxArea:.01},chamfers:{min:2,rad:[.5,1]},kneelFloor:-.02}},Yl=.24,du={cameraMotion:1},bc=.15,mM=.06,ko={arc:{hud:"#7bd3f7",glow:"#6fd3ff"},solar:{hud:"#f07a2a",glow:"#ff8a2a"},void:{hud:"#a57be0",glow:"#c9a9ff"}},Xn={titanPlate:{element:"arc",grenade:"titan.grenade",melee:"titan.melee",class:"titan.class",super:"titan.super"},hunterCloak:{element:"solar",grenade:"hunter.grenade",melee:"hunter.melee",class:"hunter.class",super:"hunter.super"},warlockRobe:{element:"void",grenade:"warlock.grenade",melee:"warlock.melee",class:"warlock.class",super:"warlock.super"}},$l={speed:7.5,lift:4.2,gravity:14,lifetime:2.5,floorY:.1,wallPad:.15},ci={"titan.grenade":{slot:"grenade",view:"fp",seconds:.62,events:[[.48,"release"],[1,"end"]],commit:"release",move:[[0,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{kind:"pulse",lob:$l,selfScale:.6,radius:3.2,blast:40,pulses:[[.6,30],[1.2,30],[1.8,30]]}},"hunter.grenade":{slot:"grenade",view:"fp",seconds:.62,events:[[.48,"release"],[1,"end"]],commit:"release",move:[[0,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{kind:"blaze",lob:$l,selfScale:.6,radius:3.2,blast:100,burn:{seconds:3,every:.5,damage:5}}},"warlock.grenade":{slot:"grenade",view:"fp",seconds:.62,events:[[.48,"release"],[1,"end"]],commit:"release",move:[[0,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{kind:"sink",lob:$l,selfScale:.6,radius:3,seconds:2.4,every:.3,ticks:8,damage:17}},"titan.melee":{slot:"melee",view:"fp",seconds:.95,events:[[.17,"impact"],[.45,"recoverable"],[1,"end"]],commit:"recoverable",move:[[0,"driven"],[.17,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{reach:4.5,coneDeg:15,lungeMax:2.5,strikeRange:2.6,basic:80,charged:120,snap:1.2,burn:null}},"hunter.melee":{slot:"melee",view:"fp",seconds:.93,events:[[.143,"impact"],[.45,"recoverable"],[1,"end"]],commit:"recoverable",move:[[0,"driven"],[.143,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:96,tuning:{reach:4.5,coneDeg:15,lungeMax:2.5,strikeRange:2.6,basic:80,charged:120,snap:1.2,burn:{seconds:3,every:.5,damage:5}}},"warlock.melee":{slot:"melee",view:"fp",seconds:.95,events:[[.158,"impact"],[.45,"recoverable"],[1,"end"]],commit:"recoverable",move:[[0,"driven"],[.158,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{reach:4.5,coneDeg:15,lungeMax:2.5,strikeRange:2.6,basic:80,charged:120,snap:1.2,burn:null}},"titan.class":{slot:"class",view:"fp",seconds:.7,events:[[.57,"plant"],[1,"end"]],commit:"plant",move:[[0,"locked"],[.643,"free"]],grounded:!0,camera:null,damageTaken:1,cooldown:38*Yl,launchCooldown:38,tuning:{wall:{width:2.4,height:1.15,depth:.25,ahead:1.5,rise:.25,seconds:20,sink:.25,hp:500},zone:{near:.1,far:1.8,lateral:1.3},rearm:.5}},"hunter.class":{slot:"class",view:"tp",seconds:.5,events:[[.6,"reload"],[1,"end"]],commit:"reload",move:[[0,"driven"],[1,"free"]],grounded:!0,camera:"roll",damageTaken:1,cooldown:25*Yl,launchCooldown:25,tuning:{distance:4,travel:[.04,.74],noInputBackMin:3,untargetable:!0}},"warlock.class":{slot:"class",view:"tp",seconds:2,events:[[.75,"plant"],[1,"end"]],commit:"plant",move:[[0,"locked"],[1,"free"]],grounded:!0,camera:"circle",damageTaken:.8,cooldown:83*Yl,launchCooldown:83,tuning:{radius:3.75,seconds:15,weaponScale:1.2,heal:40,fadeIn:.2,fadeOut:.5}},"titan.super":{slot:"super",view:"tp",seconds:1.6,events:[[.5,"impact"],[1,"end"]],commit:"impact",move:[[0,"driven"],[.5375,"locked"],[1,"free"]],grounded:!1,camera:"slam",damageTaken:.4,cooldown:null,launchCooldown:null,tuning:{radius:7,centreHeight:1,damage:99999,spend:"impact",shake:{amplitude:.05,seconds:.3}}},"hunter.super":{slot:"super",view:"tp",seconds:.8,events:[[.55,"release"],[1,"end"]],commit:"release",move:[[0,"driven"],[.55,"locked"],[1,"free"]],grounded:!1,camera:"throw",damageTaken:1,cooldown:null,launchCooldown:null,tuning:{speed:40,radius:.06,range:40,damage:99999,pierce:!0,hitBurst:{radius:.8,seconds:.15},spend:"release"}},"warlock.super":{slot:"super",view:"tp",seconds:1.2,events:[[.58,"release"],[1,"end"]],commit:"release",move:[[0,"driven"],[.58,"locked"],[1,"free"]],grounded:!1,camera:"burst",damageTaken:.46,cooldown:null,launchCooldown:null,tuning:{diameter:.45,speed:18,lifetime:3,radius:6,damage:99999,spend:"release"}}},Kf=Math.PI*2,gM=Math.PI/4,_M=-.01,Ha={"hunter.class":{bones:{armL:[[0,0,0,0],[.12,-.55,0,-.03],[.2,-.15,0,-.13],[.5,-.15,0,-.13],[.6,-.75,0,.37],[.72,-.35,0,.42],[.85,-.2,0,.22],[1,0,0,0]],armR:[[0,0,0,0],[.12,-.55,0,.03],[.2,-.15,0,.13],[.5,-.15,0,.13],[.6,.6,0,-.12],[.72,.5,0,-.17],[.85,.15,0,-.12],[1,0,0,0]],capeA:[[0,0,0,0],[.12,.1,0,0],[.2,-.35,0,0],[.5,-.35,0,0],[.6,-.2,0,0],[.72,.15,0,0],[.85,0,0,0],[1,0,0,0]],capeB:[[0,0,0,0],[.12,0,0,0],[.2,-.35,0,0],[.5,-.35,0,0],[.6,-.2,0,0],[.72,.15,0,0],[.85,0,0,0],[1,0,0,0]],chest:[[0,0,0,0],[.12,.35,0,0],[.2,.55,0,0],[.5,.55,0,0],[.6,.25,0,0],[.72,.2,0,0],[.85,.1,0,0],[1,0,0,0]],footL:[[0,0,0,0],[.12,-.477,0,0],[.2,.4,0,0],[.5,.4,0,0],[.6,.2,0,0],[.72,-.571,0,0],[.85,-.632,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.12,-.477,0,0],[.2,.4,0,0],[.5,.4,0,0],[.6,.1,0,0],[.72,1.279,0,0],[.85,-.931,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.12,-.6,0,0],[.2,-1.2,0,0],[.5,-1.2,0,0],[.6,.2,0,0],[.72,.3,0,0],[.85,.1,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.12,-.6,0,0],[.2,-1.2,0,0],[.5,-1.2,0,0],[.6,-.1,0,0],[.72,.1,0,0],[.85,0,0,0],[1,0,0,0]],head:[[0,0,0,0],[.12,.4,0,0],[.2,.8,0,0],[.5,.8,0,0],[.6,.45,0,0],[.72,.05,0,0],[.85,0,0,0],[1,0,0,0]],shinL:[[0,0,0,0],[.12,1.527,0,0],[.2,2.3,0,0],[.5,2.3,0,0],[.6,1.8,0,0],[.72,1.721,0,0],[.85,1.282,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.12,1.527,0,0],[.2,2.3,0,0],[.5,2.3,0,0],[.6,1.5,0,0],[.72,1.371,0,0],[.85,1.181,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.12,.3,0,0],[.2,.45,0,0],[.5,.45,0,0],[.6,.3,0,0],[.72,.2,0,0],[.85,.15,0,0],[1,0,0,0]],thighL:[[0,0,0,0],[.12,-1.05,0,.05],[.2,-2.1,0,.12],[.5,-2.1,0,.12],[.6,-1.6,0,.1],[.72,-1.15,0,.1],[.85,-.65,0,.08],[1,0,0,0]],thighR:[[0,0,0,0],[.12,-1.05,0,-.05],[.2,-2.1,0,-.12],[.5,-2.1,0,-.12],[.6,-1.4,0,-.1],[.72,.1,0,0],[.85,-.25,0,-.08],[1,0,0,0]],pelvis:[[0,0,0,0],[.12,0,0,0],[.72,Kf,0,0],[1,Kf,0,0]]},pelvisPos:[[0,0,0,0],[.12,0,-.3,0],[.16,0,-.402,-.012],[.2,0,-.483,-.038],[.24,0,-.433,-.056],[.28,0,-.41,-.035],[.32,0,-.141,.095],[.36,0,-.012,.286],[.4,0,-.197,.337],[.44,0,-.464,.422],[.48,0,-.676,.432],[.52,0,-.566,.322],[.56,0,-.494,.072],[.6,0,-.496,-.049],[.64,0,-.265,-.013],[.68,0,-.148,-.002],[.72,0,-.36,0],[.85,0,-.2,0],[1,0,0,0]],root:[[0,0,0,0],[1,0,0,0]],ground:[[0,1],[1,1]],glow:[[0,0]],face:"move",cloth:[[0,1],[.12,0],[.72,0],[.85,1],[1,1]]},"warlock.class":{bones:{armL:[[0,0,0,0],[.12,-.2,0,-.13],[.4,.15,0,.57],[.62,.13,0,.6],[.75,.45,0,.77],[.85,.5,0,.77],[.93,-.05,0,.42],[1,0,0,0]],armR:[[0,0,0,0],[.12,-.2,0,.13],[.4,-2.5,0,-.07],[.62,-2.53,0,-.07],[.75,-.95,0,.06],[.85,-.97,0,.06],[.93,-.25,0,-.27],[1,0,0,0]],chest:[[0,0,0,0],[.12,-.1,0,0],[.4,-.2,.15,0],[.62,-.22,.15,0],[.75,.55,-.15,0],[.85,.58,-.15,0],[.93,.05,0,0],[1,0,0,0]],footL:[[0,0,0,0],[.12,-.491,0,0],[.4,-.308,0,0],[.62,-.355,0,0],[.75,-.527,0,0],[.85,-.558,0,0],[.93,-.579,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.12,-.491,0,0],[.4,-.416,0,0],[.62,-.467,0,0],[.75,-1.353,0,0],[.85,-1.393,0,0],[.93,-.859,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.12,-1.15,0,0],[.4,.4,0,0],[.62,.38,0,0],[.75,.2,0,0],[.85,.15,0,0],[.93,.3,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.12,-1.15,0,0],[.4,.55,0,0],[.62,.58,0,0],[.75,.75,0,0],[.85,.73,0,0],[.93,.3,0,0],[1,0,0,0]],head:[[0,0,0,0],[.12,.3,0,0],[.4,-.2,0,0],[.62,-.22,0,0],[.75,.15,0,0],[.85,.18,0,0],[.93,.05,0,0],[1,0,0,0]],shinL:[[0,0,0,0],[.12,.741,0,0],[.4,.508,0,0],[.62,.575,0,0],[.75,1.627,0,0],[.85,1.678,0,0],[.93,1.129,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.12,.741,0,0],[.4,.366,0,0],[.62,.417,0,0],[.75,1.403,0,0],[.85,1.443,0,0],[.93,.959,0,0],[1,0,0,0]],skirtB:[[0,0,0,0],[.12,0,0,0],[.4,0,0,0],[.62,0,0,0],[.75,.24,0,0],[.85,.24,0,0],[.93,0,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.12,0,0,0],[.4,-.1,0,0],[.62,-.11,0,0],[.75,.4,0,0],[.85,.42,0,0],[.93,.1,0,0],[1,0,0,0]],thighL:[[0,0,0,0],[.12,-.25,0,.06],[.4,-.2,0,.1],[.62,-.22,0,.1],[.75,-1.1,0,.1],[.85,-1.12,0,.1],[.93,-.55,0,.08],[1,0,0,0]],thighR:[[0,0,0,0],[.12,-.25,0,-.06],[.4,.05,0,-.08],[.62,.05,0,-.08],[.75,-.05,0,-.06],[.85,-.05,0,-.06],[.93,-.1,0,-.06],[1,0,0,0]]},pelvisPos:[[0,0,0,0],[.12,0,-.08,0],[.4,0,-.04,0],[.62,0,-.05,0],[.75,0,-.33,0],[.85,0,-.345,0],[.93,0,-.16,0],[1,0,0,0]],root:[[0,0,0,0],[1,0,0,0]],ground:[[0,1],[1,1]],glow:[[0,0],[.4,1],[.95,0]],face:"cast",faceOffset:[[0,0],[.62,0],[.75,.436],[.85,.436],[1,0]],ease:{in:[.75],out:[],tracks:["armR","foreR"]}},"titan.super":{bones:{armL:[[0,0,0,0],[.1,1.05,0,.12],[.22,-1.65,0,-.08],[.34,-2.5,0,-.4],[.44,-2.25,0,-.38],[.5,-.7,0,-.3],[.75,-.67,0,-.3],[.88,-.2,0,.07],[1,0,0,0]],armR:[[0,0,0,0],[.1,1.05,0,-.12],[.22,-1.65,0,.08],[.34,-2.5,0,.4],[.44,-2.25,0,.38],[.5,-.7,0,.3],[.75,-.67,0,.3],[.88,-.2,0,-.07],[1,0,0,0]],chest:[[0,0,0,0],[.1,.3,0,0],[.22,-.2,0,0],[.34,-.35,0,0],[.44,0,0,0],[.5,.65,0,0],[.75,.69,0,0],[.88,.25,0,0],[1,0,0,0]],footL:[[0,0,0,0],[.1,-.697,0,0],[.22,.65,0,0],[.34,.45,0,0],[.44,.4,0,0],[.5,-.789,0,0],[.75,-.828,0,0],[.88,-.536,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.1,-.697,0,0],[.22,.65,0,0],[.34,.45,0,0],[.44,.4,0,0],[.5,1.279,0,0],[.75,1.279,0,0],[.88,-1.027,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.1,.5,0,0],[.22,.2,0,0],[.34,.45,0,0],[.44,.55,0,0],[.5,.7,0,0],[.75,.68,0,0],[.88,.2,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.1,.5,0,0],[.22,.2,0,0],[.34,.45,0,0],[.44,.55,0,0],[.5,.7,0,0],[.75,.68,0,0],[.88,.2,0,0],[1,0,0,0]],head:[[0,0,0,0],[.1,-.2,0,0],[.22,-.1,0,0],[.34,.15,0,0],[.44,.2,0,0],[.5,.15,0,0],[.75,.2,0,0],[.88,0,0,0],[1,0,0,0]],mark:[[0,0,0,0],[.1,.24,0,0],[.22,.39,0,0],[.34,-.26,0,0],[.44,-.36,0,0],[.5,-.96,0,0],[.75,-.96,0,0],[.88,0,0,0],[1,0,0,0]],shinL:[[0,0,0,0],[.1,1.547,0,0],[.22,-.05,0,0],[.34,1.7,0,0],[.44,1.4,0,0],[.5,2.139,0,0],[.75,2.198,0,0],[.88,1.386,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.1,1.547,0,0],[.22,-.05,0,0],[.34,1.7,0,0],[.44,1.4,0,0],[.5,2.196,0,0],[.75,2.259,0,0],[.88,1.327,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.1,.15,0,0],[.22,-.1,0,0],[.34,-.15,0,0],[.44,-.05,0,0],[.5,.3,0,0],[.75,.32,0,0],[.88,.15,0,0],[1,0,0,0]],thighL:[[0,0,0,0],[.1,-.85,0,.08],[.22,.15,0,.06],[.34,-1.2,0,.1],[.44,-1,0,.1],[.5,-1.35,0,.12],[.75,-1.37,0,.12],[.88,-.85,0,.1],[1,0,0,0]],thighR:[[0,0,0,0],[.1,-.85,0,-.08],[.22,.15,0,-.06],[.34,-1.2,0,-.1],[.44,-1,0,-.1],[.5,-.725,0,0],[.75,-.788,0,0],[.88,-.3,0,-.08],[1,0,0,0]]},pelvisPos:[[0,0,0,0],[.1,0,-.28,0],[.22,0,0,0],[.34,0,0,0],[.44,0,0,0],[.5,0,-.5,0],[.75,0,-.52,0],[.88,0,-.24,0],[1,0,0,0]],root:[[0,0,0,0],[.1,0,0,0],[.22,0,.75,0],[.34,0,1.3,0],[.44,0,1.08,0],[.5,0,0,0],[.75,0,0,0],[.88,0,0,0],[1,0,0,0]],ground:[[0,1],[.1,1],[.16,0],[.46,0],[.5,1],[1,1]],glow:[[0,0],[.1,1],[.8,0]],face:"cast",faceOffset:[[0,0],[.46,0],[.5,-.436],[.75,-.436],[.88,0],[1,0]],ease:{in:[.5],out:[],tracks:["root","armL","armR","foreL","foreR"]}},"hunter.super":{bones:{armL:[[0,0,0,0],[.16,.15,0,.12],[.36,-.95,0,-.98],[.48,-1.1,0,-.03],[.55,.65,0,.27],[.62,.65,0,.27],[.75,.65,0,.27],[.88,.25,0,.12],[1,0,0,0]],armR:[[0,0,0,0],[.16,-.45,0,.53],[.36,-.75,0,-.57],[.48,-1.85,0,-.42],[.55,-1.65,0,.03],[.62,-.95,0,.08],[.75,-.91,0,.08],[.88,-.6,0,-.02],[1,0,0,0]],capeA:[[0,0,0,0],[.16,0,0,0],[.36,0,0,0],[.48,.2,0,0],[.55,.15,0,0],[.62,.15,0,0],[.75,.15,0,0],[.88,0,0,0],[1,0,0,0]],chest:[[0,0,0,0],[.16,.1,.2,0],[.36,-.05,-.25,0],[.48,-.15,-.3,0],[.55,.05,.1,0],[.62,.15,.2,0],[.75,.17,.22,0],[.88,0,.1,0],[1,0,0,0]],footL:[[0,0,0,0],[.16,-.427,0,0],[.36,-.425,0,0],[.48,-.409,0,0],[.55,-.408,0,0],[.62,-.408,0,0],[.75,-.408,0,0],[.88,-.299,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.16,-.467,0,0],[.36,-.514,0,0],[.48,-.583,0,0],[.55,-.649,0,0],[.62,-.649,0,0],[.75,-.649,0,0],[.88,-.363,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.16,.2,0,0],[.36,.1,0,0],[.48,.65,0,0],[.55,.3,0,0],[.62,.3,0,0],[.75,.3,0,0],[.88,.2,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.16,-.2,0,0],[.36,-.2,0,0],[.48,-1,0,0],[.55,.6,0,0],[.62,.55,0,0],[.75,.55,0,0],[.88,.25,0,0],[1,0,0,0]],head:[[0,0,0,0],[.16,.4,.1,0],[.36,.15,-.3,0],[.48,.1,.4,0],[.55,.1,-.1,0],[.62,.1,-.1,0],[.75,.1,-.1,0],[.88,0,-.15,0],[1,0,0,0]],shinL:[[0,0,0,0],[.16,.527,0,0],[.36,.625,0,0],[.48,.759,0,0],[.55,.858,0,0],[.62,.858,0,0],[.75,.858,0,0],[.88,.419,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.16,.417,0,0],[.36,.364,0,0],[.48,.333,0,0],[.55,.349,0,0],[.62,.349,0,0],[.75,.349,0,0],[.88,.263,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.16,.05,.15,0],[.36,-.05,-.15,0],[.48,-.1,-.12,0],[.55,0,.05,0],[.62,.05,.1,0],[.75,.05,.1,0],[.88,-.02,.08,0],[1,0,0,0]],thighL:[[0,0,0,0],[.16,-.1,0,.08],[.36,-.2,0,.1],[.48,-.35,0,.1],[.55,-.45,0,.1],[.62,-.45,0,.1],[.75,-.45,0,.1],[.88,-.12,0,.06],[1,0,0,0]],thighR:[[0,0,0,0],[.16,.05,0,-.06],[.36,.15,0,-.08],[.48,.25,0,-.1],[.55,.3,0,-.1],[.62,.3,0,-.1],[.75,.3,0,-.1],[.88,.1,0,-.05],[1,0,0,0]]},pelvisPos:[[0,0,0,0],[.16,0,-.05,0],[.36,0,-.06,0],[.48,0,-.08,0],[.55,0,-.1,0],[.62,0,-.11,0],[.75,0,-.11,0],[.88,0,-.03,0],[1,0,0,0]],root:[[0,0,0,0],[1,0,0,0]],ground:[[0,1],[1,1]],glow:[[0,0],[.36,1],[.6,0]],face:"viewUntilRelease",ease:{in:[.55],out:[.55],tracks:["armR","foreR","chest","spine"]},props:[{kind:"knife",bone:"handR",on:[[0,0],[.16,1],[.55,0]],glow:[[0,0],[.36,1],[.55,0]]}]},"warlock.super":{bones:{armL:[[0,0,0,0],[.15,-.6,0,-.73],[.45,-.6,0,-.58],[.54,-1.1,0,-1.03],[.58,-1.5,0,-.78],[.66,-1.05,0,-.63],[.78,-1.01,0,-.63],[.88,-.45,0,-.18],[1,0,0,0]],armR:[[0,0,0,0],[.15,-.4,0,-.02],[.45,-.35,0,-.17],[.54,0,0,-.52],[.58,-1.5,0,.03],[.66,-1.1,0,.13],[.78,-1.06,0,.13],[.88,-.5,0,.08],[1,0,0,0]],chest:[[0,0,0,0],[.15,0,-.25,0],[.45,-.05,-.3,0],[.54,-.17,-.55,0],[.58,.05,-.2,0],[.66,.17,-.05,0],[.78,.19,-.03,0],[.88,.05,0,0],[1,0,0,0]],footL:[[0,0,0,0],[.15,-.547,0,0],[.45,-.674,0,0],[.54,-.508,0,0],[.58,-.546,0,0],[.66,-.566,0,0],[.78,-.585,0,0],[.88,-.454,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.15,-.608,0,0],[.45,-.757,0,0],[.54,-.745,0,0],[.58,-.805,0,0],[.66,-.89,0,0],[.78,-.922,0,0],[.88,-.6,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.15,.2,0,0],[.45,.1,0,0],[.54,-.3,0,0],[.58,.5,0,0],[.66,.72,0,0],[.78,.7,0,0],[.88,.1,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.15,.1,0,0],[.45,.05,0,0],[.54,-1.2,0,0],[.58,.5,0,0],[.66,.72,0,0],[.78,.7,0,0],[.88,.1,0,0],[1,0,0,0]],head:[[0,0,0,0],[.15,.35,.15,0],[.45,.35,.2,0],[.54,.2,.55,0],[.58,.15,.2,0],[.66,.15,.05,0],[.78,.16,.03,0],[.88,.1,0,0],[1,0,0,0]],shinL:[[0,0,0,0],[.15,.847,0,0],[.45,1.024,0,0],[.54,.958,0,0],[.58,1.046,0,0],[.66,1.166,0,0],[.78,1.205,0,0],[.88,.754,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.15,.808,0,0],[.45,.957,0,0],[.54,.545,0,0],[.58,.555,0,0],[.66,.59,0,0],[.78,.622,0,0],[.88,.45,0,0],[1,0,0,0]],skirtB:[[0,0,0,0],[.15,0,0,0],[.45,0,0,0],[.54,0,0,0],[.58,0,0,0],[.66,.14,0,0],[.78,.14,0,0],[.88,0,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.15,-.05,-.1,0],[.45,-.05,-.12,0],[.54,-.1,-.2,0],[.58,0,-.1,0],[.66,.07,-.05,0],[.78,.08,-.05,0],[.88,.01,0,0],[1,0,0,0]],thighL:[[0,0,0,0],[.15,-.3,0,.08],[.45,-.35,0,.1],[.54,-.45,0,.12],[.58,-.5,0,.12],[.66,-.6,0,.12],[.78,-.62,0,.12],[.88,-.3,0,.08],[1,0,0,0]],thighR:[[0,0,0,0],[.15,-.2,0,-.08],[.45,-.2,0,-.1],[.54,.2,0,-.1],[.58,.25,0,-.1],[.66,.3,0,-.1],[.78,.3,0,-.1],[.88,.15,0,-.08],[1,0,0,0]]},pelvisPos:[[0,0,0,0],[.15,0,-.1,0],[.45,0,-.14,0],[.54,0,-.12,0],[.58,0,-.14,0],[.66,0,-.17,0],[.78,0,-.18,0],[.88,0,-.08,0],[1,0,0,0]],root:[[0,0,0,0],[.15,0,.05,0],[.45,0,.12,0],[.54,0,.12,0],[.58,0,.1,0],[.66,0,.06,0],[.78,0,.04,0],[.88,0,0,0],[1,0,0,0]],ground:[[0,1],[1,1]],glow:[[0,0],[.1,1],[.7,0]],face:"viewUntilRelease",ease:{in:[.58],out:[.58],tracks:["armL","armR","foreL","foreR"]}}},vM={knife:[["handR",.026,.05,.026,0,-.105,.01,"leather"],["handR",.03,.01,.05,0,-.135,.01,"guard"],["handR",.008,.16,.032,0,-.22,.01,"blade"],["handR",.0078,.022,.022,0,-.3,.01,"blade",gM,0,0],["handR",.0035,.15,.004,0,-.215,.028,"edge"],["handR",.001,.14,.014,.0046,-.215,.012,"glowElement"],["handR",.001,.14,.014,-.0046,-.215,.012,"glowElement"]]},fa=Math.PI/4,Zf={left:[-.24,-.28,.06]},xM=[.01,-.048,-.066],MM={"titan.grenade.wind":{at:[-.265,-.223,-.249],fingers:[.092,.925,.37],back:[-.447,0,.894]},"titan.grenade.high":{at:[-.238,-.005,-.32],fingers:[.095,.953,.286],back:[-.37,.092,.925]},"titan.grenade.release":{at:[-.08,.007,-.412],fingers:[.238,.19,-.952],back:[-.183,.913,.365]},"titan.grenade.follow":{at:[.116,-.205,-.4],fingers:[.29,-.677,-.677],back:[.198,.693,-.693]},"hunter.grenade.reach":{at:[-.298,-.034,-.24],fingers:[0,.894,.447],back:[-.514,0,.857]},"hunter.grenade.cock":{at:[-.257,-.027,-.316],fingers:[.089,.891,.445],back:[-.447,0,.894]},"hunter.grenade.release":{at:[-.079,.017,-.403],fingers:[.276,.276,-.921],back:[-.276,.921,.276]},"hunter.grenade.follow":{at:[.087,-.166,-.42],fingers:[.196,-.588,-.784],back:[.1,.796,-.597]},"warlock.grenade.wind":{at:[-.229,-.147,-.213],fingers:[0,-.958,.287],back:[0,.287,.958]},"warlock.grenade.swing":{at:[-.161,-.162,-.289],fingers:[.099,-.099,-.99],back:[0,-1,0]},"warlock.grenade.release":{at:[-.034,-.118,-.419],fingers:[.091,.409,-.908],back:[0,-.912,-.41]},"warlock.grenade.follow":{at:[.04,-.164,-.443],fingers:[.092,.829,-.552],back:[0,-.514,-.857]},"titan.melee.wind":{at:[-.274,-.226,-.22],fingers:[.337,.421,-.842],back:[-.432,.864,.259]},"titan.melee.hit":{at:[-.068,-.002,-.427],fingers:[.119,.059,-.991],back:[-.287,.958,0]},"titan.melee.drive":{at:[-.061,-.008,-.457],fingers:[.119,.059,-.991],back:[-.287,.958,0]},"titan.melee.back":{at:[-.225,-.132,-.315],fingers:[.276,.276,-.921],back:[-.44,.88,.176]},"hunter.melee.wind":{at:[-.318,-.201,-.24],fingers:[.732,.329,-.596],back:[-.607,.713,-.351]},"hunter.melee.stab":{at:[-.08,.051,-.413],fingers:[.976,-.191,.109],back:[.196,.98,-.039]},"hunter.melee.drive":{at:[-.07,.046,-.438],fingers:[.976,-.191,.109],back:[.196,.98,-.039]},"hunter.melee.back":{at:[-.244,-.06,-.379],fingers:[.978,-.097,-.184],back:[-.015,.85,-.527]},"warlock.melee.wind":{at:[-.292,-.205,-.22],fingers:[.095,.953,.286],back:[-.981,0,.196]},"warlock.melee.push":{at:[-.044,-.071,-.435],fingers:[.049,.979,-.196],back:[0,.148,.989]},"warlock.melee.press":{at:[-.042,-.073,-.475],fingers:[.049,.979,-.196],back:[0,.148,.989]},"warlock.melee.after":{at:[-.208,-.164,-.341],fingers:[.198,.693,-.693],back:[-.348,.348,.87]},"titan.class.rise":{at:[-.315,-.087,-.277],fingers:[.095,.953,.286],back:[-.958,0,.287]},"titan.class.raise":{at:[-.247,-.002,-.366],fingers:[.238,.952,.19],back:[-.514,0,.857]},"titan.class.slam":{at:[-.124,-.111,-.357],fingers:[.094,-.329,-.94],back:[-.095,.953,-.286]},"titan.class.press":{at:[-.125,-.134,-.377],fingers:[.094,-.329,-.94],back:[-.095,.953,-.286]}},Jf={"titan.grenade":{down:.1,ready:.61,ease:{in:[.48],out:[.48]},left:[[0,"grip",.6],[.14,"grip",.6],[.22,"titan.grenade.wind",.75],[.36,"titan.grenade.high",.75],[.48,"titan.grenade.release",.35],[.58,"titan.grenade.follow",.3],[.595,"offLeft",.6],[.61,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.14,0],[.22,1],[.595,1],[.61,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.054,-2,-3,5,-.15,.2,0],[.36,-6,6,10,.6,.5,-.2],[.426,8,-6,-22,-.8,-.6,.25],[.48,5,-7,-18,-.9,-.4,.25],[.58,-3,2,6,.3,.2,-.1],[.72,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:[[0,0],[.12,1],[.48,0]],propKind:"grenade",glow:[[0,0],[.14,1],[.52,0]]},"hunter.grenade":{down:.1,ready:.61,ease:{in:[.48],out:[.48]},left:[[0,"grip",.6],[.14,"grip",.6],[.2,"hunter.grenade.reach",.75],[.26,"hunter.grenade.cock",.75],[.38,"hunter.grenade.cock",.75],[.48,"hunter.grenade.release",.35],[.58,"hunter.grenade.follow",.3],[.595,"offLeft",.6],[.61,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.14,0],[.2,1],[.595,1],[.61,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.054,-2,-3,5,-.15,.2,0],[.36,-5,5,8,.5,.5,-.15],[.426,7,-5,-18,-.7,-.5,.2],[.48,4,-6,-15,-.8,-.35,.2],[.58,-3,2,5,.25,.15,-.1],[.72,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:[[0,0],[.12,1],[.48,0]],propKind:"grenade",glow:[[0,0],[.14,1],[.52,0]]},"warlock.grenade":{down:.1,ready:.61,ease:{in:[.48],out:[.48]},left:[[0,"grip",.6],[.14,"grip",.6],[.2,"warlock.grenade.wind",.7],[.34,"warlock.grenade.swing",.65],[.48,"warlock.grenade.release",.3],[.56,"warlock.grenade.follow",.25],[.595,"offLeft",.6],[.61,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.14,0],[.2,1],[.595,1],[.61,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.054,-2,-3,5,-.15,.2,0],[.34,-3,-6,6,-.4,.3,-.1],[.426,4,6,-16,.5,-.4,.15],[.48,3,5,-14,.6,-.3,.15],[.58,-2,-3,5,-.2,.1,-.05],[.72,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:[[0,0],[.12,1],[.48,0]],propKind:"grenade",glow:[[0,0],[.14,1],[.52,0]]},"titan.melee":{down:.07,ready:.48,ease:{in:[.17],out:[.17]},left:[[0,"grip",.6],[.065,"grip",.6],[.1,"titan.melee.wind",1],[.17,"titan.melee.hit",1],[.24,"titan.melee.drive",1],[.43,"titan.melee.back",1],[.465,"offLeft",.8],[.48,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.065,0],[.1,1],[.465,1],[.48,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.07,-8,3,10,.4,.6,-.2],[.135,10,-6,-34,-.9,-.8,.3],[.17,6,-8,-30,-1,-.6,.3],[.26,-6,3,12,.5,.4,-.2],[.4,2,-1,-4,-.15,-.1,.05],[.55,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:null,propKind:null,glow:[[0,0],[.02,1],[.56,0]],glowCharged:!0},"hunter.melee":{down:.07,ready:.48,ease:{in:[.143],out:[.143]},left:[[0,"grip",.6],[.065,"grip",.6],[.095,"hunter.melee.wind",1],[.143,"hunter.melee.stab",1],[.22,"hunter.melee.drive",1],[.43,"hunter.melee.back",1],[.465,"offLeft",1],[.48,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.065,0],[.095,1],[.465,1],[.48,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.0714,-6,2,8,.3,.6,-.2],[.107,8,-4,-20,-.6,-.7,.3],[.143,5,-5,-18,-.7,-.5,.3],[.22,4,-4,-14,-.5,-.4,.2],[.3,-5,2,8,.3,.4,-.15],[.4,1,0,-2,-.1,-.1,0],[.5,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:[[0,0],[.015,1],[.46,0]],propKind:"knife",glow:[[0,0],[.015,1],[.44,0]],glowCharged:!0},"warlock.melee":{down:.07,ready:.48,ease:{in:[.158],out:[.158]},left:[[0,"grip",.6],[.065,"grip",.6],[.1,"warlock.melee.wind",.3],[.158,"warlock.melee.push",.45],[.23,"warlock.melee.press",.45],[.43,"warlock.melee.after",.3],[.465,"offLeft",.6],[.48,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.065,0],[.1,1],[.465,1],[.48,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.07,-6,2,8,.3,.5,-.15],[.123,8,-3,-24,-.5,-.6,.2],[.158,5,-4,-20,-.6,-.5,.2],[.25,-4,2,8,.3,.3,-.1],[.4,1,0,-2,-.1,-.05,0],[.55,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:null,propKind:null,glow:[[0,0],[.02,1],[.56,0]],glowCharged:!0},"titan.class":{down:.1,ready:.68,ease:{in:[.57],out:[.57]},left:[[0,"grip",.6],[.13,"grip",.6],[.22,"titan.class.rise",1],[.34,"titan.class.raise",1],[.44,"titan.class.raise",1],[.57,"titan.class.slam",.25],[.63,"titan.class.press",.25],[.665,"offLeft",.6],[.68,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.13,0],[.22,1],[.665,1],[.68,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.048,0,-4,3,-.2,0,0],[.34,-4,8,6,.6,.5,-.2],[.44,-5,10,8,.7,.6,-.2],[.522,4,-30,-10,-1.2,-.3,.3],[.57,3,-35,-8,-1.3,-.2,.3],[.66,-2,6,3,.4,.1,-.1],[.8,1,-2,0,-.1,0,0],[.92,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:null,propKind:null,glow:[[0,0],[.2,1],[.66,0]]},"hunter.class":{tp:!0,down:.1,ready:1},"warlock.class":{tp:!0,down:.1,ready:1},"titan.super":{tp:!0,down:.1,ready:1},"hunter.super":{tp:!0,down:.1,ready:1},"warlock.super":{tp:!0,down:.1,ready:1}},SM={blade:"#7d858a",edge:"#a9b3b8",leather:"#5a3e2b",cord:"#8a7a5a",guard:"#3a3d40",voidCore:"#231a30",glowCore:"#f4f1ea",glowElement:"#ffffff"},hn=.01,pn=-.048,mn=-.066,Qf={grenade:{arc:[["hand",.03,.03,.03,hn,pn,mn,"glowCore",.6,.4,0],["hand",.072,.004,.004,hn,pn,mn,"glowElement",.3,.9,.5],["hand",.072,.004,.004,hn,pn,mn,"glowElement",1.2,.2,1.4],["hand",.072,.004,.004,hn,pn,mn,"glowElement",.9,1.6,.2],["hand",.06,.004,.004,hn,pn,mn,"glowElement",2.1,.7,2.6]],solar:[["hand",.026,.026,.026,hn,pn,mn,"glowCore"],["hand",.036,.036,.036,hn,pn,mn,"glowElement",fa,0,0],["hand",.036,.036,.036,hn,pn,mn,"glowElement",0,fa,0],["hand",.036,.036,.036,hn,pn,mn,"glowElement",0,0,fa]],void:[["hand",.026,.026,.026,hn,pn,mn,"voidCore"],["hand",.004,.04,.04,hn+.024,pn,mn,"glowElement"],["hand",.004,.04,.04,hn-.024,pn,mn,"glowElement"],["hand",.04,.004,.04,hn,pn+.024,mn,"glowElement"],["hand",.04,.004,.04,hn,pn-.024,mn,"glowElement"],["hand",.04,.04,.004,hn,pn,mn+.024,"glowElement"],["hand",.04,.04,.004,hn,pn,mn-.024,"glowElement"]]},knife:[["hand",.1,.02,.02,0,-.037,-.08,"leather"],["hand",.06,.022,.022,.004,-.037,-.08,"cord"],["hand",.012,.026,.026,.056,-.037,-.08,"guard"],["hand",.008,.034,.03,-.054,-.037,-.08,"guard"],["hand",.142,.024,.005,-.129,-.037,-.08,"blade"],["hand",.017,.017,.0048,-.2,-.037,-.08,"blade",0,0,fa],["hand",.128,.0045,.0035,-.126,-.0475,-.08,"edge"],["hand",.112,.01,.001,-.128,-.036,-.077,"glowElement"],["hand",.112,.01,.001,-.128,-.036,-.083,"glowElement"]]},yM=(n,e)=>n==="grenade"?Qf.grenade[e]:Qf[n];function op(n,e,t,i){const r={...SM,glowElement:ko[e].glow},s=new Ln;s.name=i,s.visible=!1;const a=new ut,o={group:s,solid:null,glow:null,rows:n};for(const l of[!1,!0]){const u=n.filter(h=>jh(h[7])===l);if(!u.length)continue;const c=u.map(h=>{const g=r[h[7]];if(g===void 0)throw new Error(`props: '${i}' uses unknown colour '${h[7]}'`);const _=new vn(h[1],h[2],h[3]);_.deleteAttribute("uv"),_.applyMatrix4(Qa(h)),a.set(g);const p=_.attributes.position.count,m=new Float32Array(p*3);for(let x=0;x<p;x++)m[x*3]=a.r,m[x*3+1]=a.g,m[x*3+2]=a.b;return _.setAttribute("color",new On(m,3)),_}),f=c.length===1?c[0]:cu(c,!1);c.length>1&&c.forEach(h=>h.dispose());const d=new Rt(f,l?t.glowMaterial:t.solidMaterial);d.name=`${i}:${l?"glow":"solid"}`,d.frustumCulled=!1,d.userData.parts=u,s.add(d),o[l?"glow":"solid"]=d}return o.dispose=()=>{for(const l of[o.solid,o.glow])l==null||l.geometry.dispose()},o}function bM(n,e,t){const i=yM(n,e);if(!i)throw new Error(`fpProps: no prop '${n}' for '${e}'`);return op(i,e,t,`fp-prop-${n}-${e}`)}const oi={halflife:.12,kFwd:.05,max:.6,capeB:.5,skirtB:.8,markFwd:.3,markFall:-.8},EM={titanPlate:dM,hunterCloak:hM,warlockRobe:pM},wM=[-.6,oi.max];function jl(n,e){if(!n)return 0;let t=n[0][1];for(const i of n)i[0]<=e&&(t=i[1]);return t}const TM=new et,ed=new et,AM=new U,RM=new U,LM=new U,Kl=[],Zl=[],CM=[0,0,0],Jl=(n,e)=>n.ease&&n.ease.tracks.includes(e)?n.ease:null;function No(n,e,t=null){const i=EM[n];if(!i)throw new Error(`GuardianBody: unknown class '${n}'`);const r=Xn[n].element,s={...tM[n],...uu(n,t),glowElement:ko[r].glow},a={solidMaterial:e.solid,glowMaterial:e.glow},o=Uo(eM(n,i.parts,s),a),{root:l,bones:u}=o,c={};for(const E of Object.values(Ha))for(const L of E.props??[]){if(c[L.kind])continue;const y=op(vM[L.kind],r,a,`risen-${L.kind}`);u[L.bone].add(y.group),c[L.kind]=y}const f=new ut(s.glove);function d(){if(!o.glow)return;const E=o.glow.geometry.attributes.color;o.glow.userData.parts.forEach((L,y)=>{if(L[7]==="glowElement")for(let S=y*Ts*3;S<(y+1)*Ts*3;S+=3)E.array[S]=f.r,E.array[S+1]=f.g,E.array[S+2]=f.b})}function h(){let E=1/0;for(const L of Zh){ed.multiplyMatrices(u[L[0]].matrixWorld,Qa(L,TM));for(const y of[-.5,.5])for(const S of[-.5,.5])for(const R of[-.5,.5])E=Math.min(E,AM.set(y*L[1],S*L[2],R*L[3]).applyMatrix4(ed).y)}return E}const g={x:0,v:0},_={x:0,v:0};let p=null;const m=new U,x=new U;let M=null;return{root:l,rig:o,classId:n,props:c,pose(E,L={}){var be;const y=L.base??"ready",S=L.clip??null,R=L.t??0,P=L.w??1,v=L.feet??null,b=L.facing??0,D=L.dt??0,C=S?Ha[S]:null;if(S&&!C)throw new Error(`GuardianBody: no third-person clip '${S}'`);const k=y==="preview";o.reset();let F=0;k?Q2(u,E,i.previewArmOut):(J2(u,K2),F=Z2);const N=CM;if(N[0]=0,N[1]=0,N[2]=0,C){for(const Re in C.bones){const Se=u[Re];if(!Se)continue;const $=Zn(C.bones[Re],R,Zl,Jl(C,Re));Se.rotation.x+=$[0]*P,Se.rotation.y+=$[1]*P,Se.rotation.z+=$[2]*P}if(C.pelvisPos){const Re=Zn(C.pelvisPos,R,Zl,Jl(C,"pelvisPos"));u.pelvis.position.x+=Re[0]*P,u.pelvis.position.y+=Re[1]*P,u.pelvis.position.z+=Re[2]*P}if(C.root){const Re=Zn(C.root,R,Zl,Jl(C,"root"));N[0]=Re[0]*P,N[1]=Re[1]*P,N[2]=Re[2]*P}}const q=b+(C&&C.faceOffset?Zn(C.faceOffset,R,Kl)[0]*P:0)+Math.PI,z=Math.cos(q),te=Math.sin(q);if(m.set((v?v.x:0)+z*N[0]+te*N[2],(v?v.y:0)+F+N[1],(v?v.z:0)-te*N[0]+z*N[2]),!k){if(D>0&&p){x.subVectors(m,p).divideScalar(D);const Re=x.x*-Math.sin(b)+x.z*-Math.cos(b);li(g,Ot(oi.kFwd*Re,0,oi.max),oi.halflife,D),li(_,Ot(-.12*x.y,0,oi.max),oi.halflife,D);const Se=Ot(g.x+_.x,-.6,oi.max),$={capeA:Se,capeB:oi.capeB*Se,skirtB:oi.skirtB*Se,mark:oi.markFwd*g.x+oi.markFall*_.x},Y=C&&C.cloth?Zn(C.cloth,R,Kl)[0]:1;for(const ne in $){const[Q,Pe]=((be=i.clothLimits)==null?void 0:be[ne])??wM;u[ne].rotation.x+=Ot($[ne],Q,Pe)*Y}}p=(p??new U).copy(m)}if(l.position.copy(m),l.rotation.set(0,q,0),l.updateMatrixWorld(!0),C&&C.ground){const Re=Zn(C.ground,R,Kl)[0]*P*Math.max(0,_M-h());Re>0&&(l.position.y+=Re,l.updateMatrixWorld(!0))}const he=k?!1:L.glow??(C?jl(C.glow,R)===1:!1);he!==M&&(o.setGlowLit(he,Re=>Re[7]==="glowVisor"),he||d(),M=he);for(const Re in c)c[Re].group.visible=!1,c[Re].glow&&(c[Re].glow.visible=!1);for(const Re of(C==null?void 0:C.props)??[]){const Se=c[Re.kind];Se.group.visible=jl(Re.on,R)===1,Se.glow&&(Se.glow.visible=jl(Re.glow,R)===1)}},headWorld(E=new U){return E.set(0,.115,0).applyMatrix4(u.head.matrixWorld)},handWorld(E,L=new U){return L.set(0,-.05,0).applyMatrix4(u[`hand${E}`].matrixWorld)},handsMid(E=new U){return E.addVectors(this.handWorld("L",RM),this.handWorld("R",LM)).multiplyScalar(.5)},chestWorld(E=new U){return E.setFromMatrixPosition(u.chest.matrixWorld)},resetCloth(){g.x=0,g.v=0,_.x=0,_.v=0,p=null},dispose(){o.dispose();for(const E in c)c[E].dispose()}}}const pi=Math.PI/180,td=.55,PM=.2,IM=.35,DM=.8,nd={amplitude:.05,seconds:.35},jr={roll:{side:.35,height:1.4,distance:2.2,pitch:[-40*pi,30*pi],k0:1,blendOut:0,blendBack:0},circle:{side:.5,height:1.35,distance:3,pitch:[-50*pi,30*pi],k0:.55,blendOut:.24,blendBack:.2},slam:{side:.6,height:1.6,distance:4,pitch:[-60*pi,35*pi],k0:.55,blendOut:.32,blendBack:.28},throw:{side:.45,height:1.5,distance:2.6,pitch:[-40*pi,30*pi],k0:.55,blendOut:.2,blendBack:.18,aimed:!0},burst:{side:.55,height:1.5,distance:3.4,pitch:[-60*pi,35*pi],k0:.55,blendOut:.27,blendBack:.24,aimed:!0}},UM=30;function kM({room:n,fov:e=70,radius:t=PM,moments:i=jr,comfort:r=du}){let s="fp",a=null,o=td,l=0,u=0,c=0,f=0,d=0,h=0,g=0,_=null,p=0,m=0;const x=new U,M=new jt,E=new cn(0,0,0,"YXZ"),L=new U,y=new U,S=new jt,R=new U;function P(C,k,F,N,q,z,te){te.setFromEuler(E.set(N,F,0,"YXZ")),L.set(C.side,0,q).applyQuaternion(te);const he=k.x,be=k.y+C.height,Re=k.z;let Se=1;return Se=v(Se,he,L.x,-n.halfW+t,n.halfW-t),Se=v(Se,be,L.y,t,n.wallH-t),Se=v(Se,Re,L.z,n.far+t,n.near-t),Se=Ot(Se,0,1),z.set(he+Se*L.x,be+Se*L.y,Re+Se*L.z),L.length()*Se}function v(C,k,F,N,q){return F>0?Math.min(C,(q-k)/F):F<0?Math.min(C,(N-k)/F):C}function b(C,k){if(k.set(0,0,0),_===null||!(m>0)||C<_||C>=_+m)return k;const F=(C-_)/m,N=p*(1-F)*(1-F)*r.cameraMotion,q=(C-_)*UM,z=Math.floor(q),te=Gs(q-z),he=be=>Hn(Hr(z*7+be*13),Hr((z+1)*7+be*13),te);return k.set(N*he(1),N*he(2),0)}const D=()=>s!=="fp";return{start(C,k,F){const N=i[C];if(!N)return!1;let q=0;if(F){const z=Ot(F.pitch,N.pitch[0],N.pitch[1]);if(P(N,F.feet,F.yaw,z,N.distance,y,S)<DM)return!1;q=F.pitch-z}return a=N,o=N.k0??td,s="out",c=k,l=o,d=q,_=null,!0},finish(C){s!=="out"&&s!=="tp"||(u=l,s="back",f=C)},update(C,{feet:k,yaw:F,pitch:N}){if(g=C,s==="fp")return{mode:s,k:0};if(s==="out"&&(!(a.blendOut>0)||C>=c+a.blendOut?(s="tp",l=1):l=o+(1-o)*Gs((C-c)/a.blendOut)),s==="back"){if(!(a.blendBack>0)||C>=f+a.blendBack)return s="fp",l=0,h=0,{mode:s,k:l};l=u+(o-u)*zr((C-f)/a.blendBack)}const q=Ot(N-d,a.pitch[0],a.pitch[1]);return h=P(a,k,F,q,a.distance*Hn(o,l,r.cameraMotion),x,M),{mode:s,k:l}},apply(C){C.position.copy(x).add(b(g,R).applyQuaternion(M)),C.quaternion.copy(M),C.fov!==e&&(C.fov=e,C.updateProjectionMatrix())},shake(C,k,F){_=C,p=Math.min(k,nd.amplitude),m=Math.min(F,nd.seconds)},clampPitch(C){return D()?Ot(C,a.pitch[0],a.pitch[1]):C},bodyVisible(C){return D()&&x.distanceTo(C)>=IM},reset(){s="fp",a=null,l=0,h=0,d=0,_=null},get active(){return D()},get mode(){return s},get k(){return l},get boom(){return h},get pitchLimits(){return D()?[a.pitch[0],a.pitch[1]]:null},get aimed(){return D()&&!!a.aimed},position:x,quaternion:M}}const NM=n=>n<0?0:n>1?1:n,OM=(n,e)=>{let t=n[0][1];for(const i of n)i[0]<=e&&(t=i[1]);return t},FM=()=>({move:"free",jump:!1,fire:!1,aim:!1,reload:!1,swap:!1,keys:{grenade:"start",melee:"start",class:"start",super:"start"}});function BM({abilities:n,moments:e}){let t=null;const i=a=>t&&a<t.returnAt,r=a=>NM((a-t.startAt)/t.seconds);function s(a){if(!i(a))return"start";if(t.def.view==="tp")return"ignore";const o=t.def.events.find(([,l])=>l===t.def.commit)[0];return r(a)>=o?"interrupt":"ignore"}return{get current(){return t&&{id:t.id,startAt:t.startAt,seconds:t.seconds,returnAt:t.returnAt,charged:t.charged}},start(a,o,{grounded:l=!0,charged:u=!1}={}){const c=n[a];if(!c||c.grounded&&!l||c.slot==="super"&&!u||s(o)==="ignore")return!1;const f=c.camera?e[c.camera].blendBack:0;return t={id:a,def:c,startAt:o,seconds:c.seconds,returnAt:o+c.seconds+f,charged:!!u,lastT:0},!0},reset(){t=null},update(a){if(!t)return[];const o=[],l=a>=t.returnAt?1:r(a);for(const[u,c]of t.def.events)u>t.lastT&&u<=l&&o.push({id:t.id,name:c,at:t.startAt+u*t.seconds});return t.lastT=Math.max(t.lastT,l),a>=t.returnAt&&(t=null),o},phase(a){return t?r(a):0},locks(a){if(!i(a))return FM();const o=s(a),l=OM(t.def.move,r(a)),u=t.def.view==="tp";return{move:l,jump:u||l!=="free",fire:u,aim:u,reload:!0,swap:!0,keys:{grenade:o,melee:o,class:o,super:o}}}}}const ap={};for(const n of Object.keys(Xn)){const e=Xn[n];for(const t of["grenade","melee","class","super"])ap[e[t]]=ko[e.element].glow}const zM=(n,e)=>n.events.find(([,t])=>t===e)[0]*n.seconds;function HM(n){const{scene:e,ROOM:t,camera:i,fp:r,runner:s,moment:a,player:o,view:l,PLAYER_RADIUS:u,now:c,classId:f,body:d,moveAxis:h,ability:g,superCharge:_,weapons:p,legacy:m}=n;let x=null,M=null,E=null,L=0,y=null,S=null,R=0,P=!1,v=null;const b=new Ln;b.name="risen-effects",e&&e.add(b);const D=new U,C=($,Y)=>{M={ev:$,spawn:Y}},k=$=>C($,(Y,ne)=>m.throwGrenade(Y,ne,ap[$.id])),F=()=>m.meleeStrike(),N=()=>m.ward(),q=()=>m.superWipe(),z={"titan.grenade":{release:k},"hunter.grenade":{release:k},"warlock.grenade":{release:k},"titan.melee":{impact:F},"hunter.melee":{impact:F},"warlock.melee":{impact:F},"titan.class":{plant:N},"hunter.class":{reload:N},"warlock.class":{plant:N},"titan.super":{impact:q},"hunter.super":{release:q},"warlock.super":{release:q}};function te($,Y){let ne=1/0;return $>0&&(ne=Math.min(ne,(t.halfW-u-o.x)/$)),$<0&&(ne=Math.min(ne,(-t.halfW+u-o.x)/$)),Y>0&&(ne=Math.min(ne,(t.near-u-o.z)/Y)),Y<0&&(ne=Math.min(ne,(t.far+u-o.z)/Y)),ne}function he(){const $=h(),Y=Math.sin(l.yaw),ne=Math.cos(l.yaw),Q=-Y*$.y+ne*$.x,Pe=-ne*$.y-Y*$.x,Ee=Math.hypot(Q,Pe);return Ee>0?{x:Q/Ee,z:Pe/Ee}:null}function be($,Y){const ne=Xn[f()][$],Q=ci[ne];if($==="super"?_.get()<1:!g.ready($))return"refused";if(s.locks(Y).keys[$]==="ignore")return"ignored";const Pe=o.y<=0;if(!s.start(ne,Y,{grounded:Pe,charged:!0}))return"refused";if(x=null,$!=="super"&&g.use($),p.cancelReload(),P=!1,E=null,y=null,S=null,R=l.yaw,ne==="hunter.class"){let Ie=he();if(!Ie){const ze={x:Math.sin(l.yaw),z:Math.cos(l.yaw)};Ie=te(ze.x,ze.z)>=Q.tuning.noInputBackMin?ze:{x:-ze.x,z:-ze.z}}E={id:ne,startAt:Y,dir:Ie},L=0,R=Math.atan2(-Ie.x,-Ie.z)}Q.slot==="super"&&(y={id:ne,startAt:Y,y0:o.y,until:Y+zM(Q,Q.commit)});let Ee=0;return Q.view==="tp"&&(Ee=jr[Q.camera].blendBack,a.start(Q.camera,Y,{feet:o,yaw:l.yaw,pitch:l.pitch})&&d().resetCloth()),r.act(ne,Y,Q.seconds+Ee,$==="melee"?{charged:!0}:{}),"started"}function Re($){const Y=Ha[$].face;return Y==="view"||Y==="viewUntilRelease"&&!P?l.yaw:R}function Se(){}return{press($){const Y=c(),ne=be($,Y);return ne==="ignored"&&(x={slot:$,at:Y}),ne==="started"},onEvents($){var Y,ne;for(const Q of $){const Pe=ci[Q.id];Q.name==="release"&&(P=!0,Pe.view==="tp"&&Ha[Q.id].face==="viewUntilRelease"&&(R=l.yaw)),Pe.slot==="super"&&Q.name===Pe.tuning.spend&&_.set(0),(ne=(Y=z[Q.id])==null?void 0:Y[Q.name])==null||ne.call(Y,Q),Q.name==="end"&&Pe.view==="tp"&&a.finish(Q.at)}},update($){if(!x)return;const Y=c();(Y-x.at>bc||be(x.slot,Y)==="started")&&(x=null)},lateUpdate($){if(M){const{spawn:Pe}=M;M=null,Pe(r.leftHandWorld(i,new U),i.getWorldDirection(new U))}const Y=v===null?0:$-v;v=$;const ne=d();if(!ne)return;const Q=s.current;if(Q&&ci[Q.id].view==="tp"&&a.active){const Pe=Ot(($-Q.startAt)/Q.seconds,0,1);ne.pose($,{clip:Q.id,t:Pe,feet:o,facing:Re(Q.id),dt:Y}),ne.root.visible=a.bodyVisible(ne.headWorld(D))}else ne.root.visible=!1},drive($,Y){const ne=s.current;if(!ne)return null;const Q=c();if(E&&E.id===ne.id&&E.startAt===ne.startAt){const[Pe,Ee]=ci[ne.id].tuning.travel,Ie=Gs(Ot(((Q-ne.startAt)/ne.seconds-Pe)/(Ee-Pe),0,1)),ze=ci[ne.id].tuning.distance*(Ie-L);return Y.x+=E.dir.x*ze,Y.z+=E.dir.z*ze,L=Ie,null}return y&&y.id===ne.id&&y.startAt===ne.startAt&&y.y0>0?(Y.y=y.y0*(1-Gs((Q-y.until)/mM)),{velY:0}):null},pushOut(){},locks($){const Y=s.locks($),ne=s.current;return ne&&ci[ne.id].slot==="melee"&&S===null&&(Y.move="free",Y.jump=!1),Y},weaponDamageScale(){return 1},buffs(){return{emboldened:{on:!1,left:0}}},get aiming(){return a.aimed&&!P},get busy(){return s.current!==null||a.active||x!==null&&c()-x.at<=bc},setClass($){if(!Xn[$])return;s.reset(),a.reset(),x=null,M=null,E=null,y=null,S=null,P=!1;const Y=d();Y&&(Y.root.visible=!1)},clearWorld:Se,get effectsRoot(){return b}}}const GM="Risen",VM="Character and loadout — Esc to resume",WM="Kit",La={titanPlate:{label:"Plate"},hunterCloak:{label:"Cloak"},warlockRobe:{label:"Coat"}},lp={arc:"Arc",solar:"Solar",void:"Void"},XM={grenade:"Grenade",melee:"Melee",class:"Class ability",super:"Super"},cp={grenade:"Q",melee:"C",class:"V",super:"F"},Ca={"titan.grenade":{name:"Arc Beacon"},"titan.melee":{name:"Punch",charged:"Arc Fist"},"titan.class":{name:"Wall of Light"},"titan.super":{name:"Arc Slam"},"hunter.grenade":{name:"Solar Blaze"},"hunter.melee":{name:"Knife",charged:"Solar Knife"},"hunter.class":{name:"Roll"},"hunter.super":{name:"Knife of Light"},"warlock.grenade":{name:"Void Sink"},"warlock.melee":{name:"Palm",charged:"Void Palm"},"warlock.class":{name:"Circle of Light"},"warlock.super":{name:"Void Burst"}},qM={emboldened:"Emboldened"},YM={title:"Camera motion",full:"Full",half:"Half",off:"Off"},Gt={overTitle:"PRE-DESTINY",title:"RUSTLIGHT",press:"PRESS",enterKey:"Enter",dragKey:"Drag",begin:"TO BEGIN",loading:"LOADING…",stillLoading:"Still loading… Reload the page",reload:"Reload",noWebgl:"This browser can't draw the game. Try an up-to-date Chrome, Edge, Firefox or Safari.",failed:"The range didn't load. Reload the page to try again.",anyKey:"PRESS ANY KEY",gateNote:"Sound on · Esc for silence",music:"Music",musicKey:"M",kitHeading:"CHOOSE YOUR KIT",kitAbility:"KIT ABILITY",kitKey:cp.class,kitNote:"This character's kit is fixed once they rise.",kits:{titanPlate:{name:La.titanPlate.label,traits:"SHELTER • ENDURANCE • RESOLVE",line:"Salvaged steel on a body that will not stay dead. Wear it and stand, so the Ghostless can run.",abilityName:Ca["titan.class"].name,ability:"Raise a low wall of Arc Light and fight from behind it."},hunterCloak:{name:La.hunterCloak.label,traits:"NERVE • CUNNING • SPEED",line:"Road-worn and hard to pin down: strike first, strip the ruins for what you need, be gone by dark.",abilityName:Ca["hunter.class"].name,ability:"Tumble clear of danger and come up reloaded."},warlockRobe:{name:La.warlockRobe.label,traits:"STUDY • PATIENCE • WILL",line:"You woke with no past, so you write everything down, and bend Void Light to keep the others fighting.",abilityName:Ca["warlock.class"].name,ability:"Set a ring of Void Light; weapons inside it hit harder."}},escKey:"Esc",back:"Back",select:"Select",veil:"CLICK TO PLAY",veilHint:"WASD move · Space jump/double-jump · click fire (hold for auto) · right-click aim · R reload · 1/2/3 or scroll switch weapon · Q grenade · C melee · V kit ability · F super · Esc character screen",customiseHeading:"CUSTOMISE",rise:"RISE",choose:"Choose",turn:"Turn",tabs:{kind:"KIND",colours:"COLOURS",crest:"CREST"},groups:{kind:"KIND",body:"BODY",dye:"CLOTH DYE",finish:"ARMOUR FINISH",crest:"CREST",bar:"YOUR BAR"},kinds:{human:{label:"Human",line:"Most Risen were born human. You will not remember who you were."},exo:{label:"Exo",line:"A machine body from the old world. You may keep your name. Little else."},awoken:{label:"Awoken",line:"Few came down to Earth, and late. Far from wherever home was."}},bodies:{masc:{label:"Masculine"},fem:{label:"Feminine"}},bodyNote:"Shown on your character bar. Body shapes arrive in a later build.",dyes:{moss:{label:"Moss",made:"nettle-green"},umber:{label:"Umber",made:"earth and walnut hulls"},drab:{label:"Drab",made:"undyed and road-worn"},ochre:{label:"Ochre",made:"yellow earth"},heather:{label:"Heather",made:"lichen purple, faded to grey"}},wears:{titanPlate:"The waist cloth and the mark.",hunterCloak:"The hood, cape and sleeves.",warlockRobe:"The coat and its sleeves."},finishes:{bare:{label:"Bare",made:"scrubbed steel, as salvaged"},blackened:{label:"Blackened",made:"soot-dark, so it won't glint"},weathered:{label:"Weathered",made:"rain and rust"}},crests:{forge:{label:"Forge",made:"iron, mended and made to last"},gate:{label:"Gate",made:"the camp that opened for you"},sheaf:{label:"Sheaf",made:"the harvest kept from the Warlords"},bell:{label:"Bell",made:"the alarm that rings before the raiders"}},risenToday:"Risen today"},$M={heading:GM,menuSub:VM,kitTitle:WM,classes:La,elements:lp,slots:XM,keys:cp,abilities:Ca,buffs:qM,comfort:YM,start:Gt};function jM({raycaster:n,strikeRay:e,getWeapon:t,setWeapon:i,cancelEngineReload:r,fp:s,now:a,getSuperCharge:o,setSuperChargeValue:l,episode:u,moment:c,pitchLimit:f}){const d=(_,p,m)=>_<p?p:_>m?m:_;let h=0,g=!1;return{strikeRaycast(_,p,m){const x=n.far;n.set(_,p),n.far=m;const M=e(n);return n.far=x,M},fillMagazine(){let _=r(t());const p=Math.min(_.magazine-_.loaded,_.reserve);_={..._,loaded:_.loaded+p,reserve:_.reserve===1/0?1/0:_.reserve-p},i(_),s.reloading&&s.cutReload(a())},setSuperCharge(_){const p=o()>=1,m=d(_,0,1);l(m),!p&&m>=1&&u.fire("flag","super-ready")},notePitch(_){c.active&&!g&&(h=_),g=c.active},pitchWindow(){if(!c.active)return[-f,f];const[_,p]=c.pitchLimits;return[Math.min(_,h),Math.max(p,h)]}}}const KM={cloth:"#8a1c1c",clothDark:"#5e1414",armour:"#3a3b40",armour2:"#4a4c52",suit:"#26262a",face:"#161618",metal:"#2a2c30",cap:"#3b2a20",rust:"#7a4a2a",bone:"#d6ccb4",mantle:"#4a3526",glowEye:"#8ec8f2",glowArc:"#9fd8ff",shell:"#261b3a",rim:"#3a2d58",shell2:"#1a1428",bezel:"#3b3550",lens:"#1a1238",glowViolet:"#b36bff",hull:"#8a2e22",under:"#4d1a14",gun:"#2a2624",glowShank:"#cfe8ff",glowExhaust:"#ff9a3c"};function da(n){const e={},t=[],i=(P,v,b,D,C,k,F,N,q=0,z=0,te=0)=>t.push([P,v,b,D,C,k,F,N,q,z,te]),r=n.leg,s=1.25,a=1.05,o=-.55,l=-.55+s,u=-.55+s-a,c=.06+r.thigh*Math.cos(o)+r.shin*Math.cos(l)+r.foot*Math.cos(u),[f,d,h]=n.pelvis;e.pelvis={at:[0,c,0]},i("pelvis",f,d,h,0,0,0,"suit");for(const P of[-1,1]){const v=P<0?"L":"R";e["thigh"+v]={parent:"pelvis",at:[P*n.hipX,-.03,0],rot:[o,0,0]},e["shin"+v]={parent:"thigh"+v,at:[0,-r.thigh,0],rot:[s,0,0]},e["foot"+v]={parent:"shin"+v,at:[0,-r.shin,0],rot:[-a,0,0]},i("thigh"+v,r.w*1.3,r.thigh+.04,r.w*1.45,0,-r.thigh/2,0,"suit"),i("shin"+v,r.w,r.shin+.03,r.w*1.05,0,-r.shin/2,0,"armour"),i("foot"+v,r.w*.85,r.foot,r.w*.85,0,-r.foot/2,0,"suit"),i("foot"+v,r.w*1.3,.05,r.w*3,0,-r.foot,r.w*.9,"armour2",-u,0,0)}const[g,_,p]=n.chest;e.chest={parent:"pelvis",at:[0,d/2+.03,0],rot:[n.hunch,0,0]},i("chest",g,_,p,0,_/2,0,"suit"),i("chest",g*1.1,_*.44,p*1.08,0,_*.74,.01,"armour"),n.rust&&i("chest",g*.42,_*.26,.03,g*.14,_*.4,p/2+.02,"rust"),i("chest",.14,.1,.13,0,_+.03,.05,"suit");const[m,x,M]=n.head;e.head={parent:"chest",at:[0,_+.07,.08],rot:[-n.hunch*.85,0,0]},i("head",m,x,M,0,x/2,0,"armour"),i("head",m*.84,x*.52,.03,0,x*.58,M/2+.012,"face");const E=n.eye;for(const P of[-1,1])for(const v of[-1,1])i("head",E,E,.02,P*E*.95,x*.6+v*E*.9,M/2+.03,"glowEye");i("head",m*.42,x*.3,M*.36,0,x*.17,M/2+M*.13,"armour2");const L=n.horn;for(const P of[-1,1])i("head",L,.05,.055,P*(m/2+L/2-.02),x*.62,-M*.1,"armour2",0,P*.35,P*.18),i("head",L*.75,.045,.05,P*(m/2+L*.95),x*.62+L*.3,-M*.25,"armour2",0,P*.7,P*.9);if(n.hooks)for(const P of[-1,1])i("head",.05,.07,.05,P*m*.2,x+.035,-M*.1,"armour2");if(n.crownStubs)for(const P of[-1,1])i("head",.045,.14,.045,P*m*.34,x+.06,-M*.22,"bone",-.35,0,P*-.2);const y=n.arm.upper,S=n.arm.fore,R=n.arm.t;for(const P of[-1,1]){const v=P<0?"L":"R";e["arm"+v]={parent:"chest",at:[P*(g/2+R/2),_*.86,0],rot:[-n.hunch+n.armFwd,0,P*.1]},e["fore"+v]={parent:"arm"+v,at:[0,-y,0],rot:[-n.elbow,0,0]},i("arm"+v,R,y+.03,R,0,-y/2,0,"suit"),i("arm"+v,R*1.55,.11,R*1.55,0,-.03,0,"armour"),i("fore"+v,R*1.05,S,R*1.12,0,-S/2,0,"armour")}if(n.lower){const P=y*.7,v=S*.7,b=R*.62;for(const D of[-1,1]){const C=D<0?"L":"R";e["arm2"+C]={parent:"chest",at:[D*(g/2+b/2-.01),_*.34,.03],rot:[-n.hunch+n.lower.fwd,0,D*.3]},e["fore2"+C]={parent:"arm2"+C,at:[0,-P,0],rot:[-n.lower.elbow,0,0]},i("arm2"+C,b,P+.02,b,0,-P/2,0,"suit"),i("fore2"+C,b*1.05,v,b*1.12,0,-v/2,0,"armour"),n.lowerBlades&&(i("fore2"+C,.06,.07,.06,0,-v-.02,0,"metal"),i("fore2"+C,.035,.62,.07,0,-v-.36,0,"glowArc"))}}if(n.caps)for(const P of[-1,1])i("chest",.1,.1,.1,P*(g/2+.035),_*.36,.02,"cap",0,0,P*.6);if(n.pauldron){const[P,v,b]=n.pauldron;for(const D of[-1,1])i("chest",P,v,b,D*(g/2+P*.28),_*.96,0,"armour2",0,0,-D*.28),n.trim&&i("chest",P*1.04,.035,b*1.04,D*(g/2+P*.3),_*.96+v/2,0,"bone",0,0,-D*.28)}if(n.trim&&i("chest",g*.9,.04,.03,0,_*.55,p/2+.035,"bone"),n.pack&&i("chest",.28,.34,.15,0,_*.5,-p/2-.075,"armour2"),n.mantle&&i("chest",g*1.2,.13,p*1.25,0,_+.01,-.02,"mantle"),n.cowl&&(i("head",m+.05,x*.85,.05,0,x*.45,-M/2-.02,"cloth"),i("pelvis",f*.72,.36,.025,0,-.21,h/2+.02,"cloth"),i("pelvis",f*.8,.28,.025,0,-.17,-h/2-.02,"clothDark")),n.cape){const P=n.cape;e.cape={parent:"chest",at:[0,_*P.top,-p/2-.045-(n.pack?.15:0)],rot:[-n.hunch+.06,0,0]},i("cape",P.w,P.len,.03,0,-P.len/2,0,"cloth");const v=P.hem,b=P.w/(v*2);for(let D=0;D<v;D++)i("cape",b,.07+D%2*.07,.028,-P.w/2+b*(2*D+1),-P.len-.035-D%2*.035,0,"clothDark")}if(n.banner&&(e.banner={parent:"chest",at:[.12,_*.9,-p/2-.26],rot:[-n.hunch,0,0]},i("banner",.05,1.05,.05,0,.02,0,"metal"),i("banner",.46,.55,.03,.25,.24,0,"cloth"),i("banner",.46,.07,.035,.25,.04,0,"bone")),n.weapon==="pistol")i("foreR",.065,.2,.1,0,-S-.08,.02,"metal"),i("foreR",.035,.03,.035,0,-S-.19,.02,"glowArc"),i("foreL",.05,.06,.05,0,-S-.02,0,"metal"),i("foreL",.028,.28,.055,0,-S-.19,0,"glowArc");else if(n.weapon==="wire")i("foreR",.1,.32,.13,.04,-S+.06,.02,"armour2"),i("foreR",.07,1.36,.1,.04,-S-.5,.02,"metal"),i("foreR",.03,.26,.035,.04,-S-.42,.08,"glowArc");else if(n.weapon==="shock"){i("foreR",.11,.95,.15,.05,-S-.28,0,"metal");for(const P of[-1,1])i("foreR",.02,.62,.02,.05+P*.05,-S-.3,.085,"glowArc")}return{bones:e,parts:t}}function ZM(){const e={core:{at:[0,2.05,0]},eye:{parent:"core",at:[0,0,.621]}},t=[],i=(o,...l)=>t.push([o,...l]);i("core",1.15,1.15*.72,1.15*.72,0,0,0,"shell"),i("core",1.15*.72,1.15,1.15*.72,0,0,0,"shell"),i("core",1.15*.72,1.15*.72,1.15,0,0,0,"shell"),i("core",1.15*.86,1.15*.86,1.15*.6,0,0,0,"rim",0,0,Math.PI/4),i("core",1.15*.62,1.15*.62,.06,0,0,1.15/2+.02,"shell2");const r=1.15*.3,s=1.15*.05,a=1.15/2+.06;return i("core",r,s,.04,0,r/2-s/2,a,"glowViolet"),i("core",r,s,.04,0,-r/2+s/2,a,"glowViolet"),i("core",s,r,.04,-r/2+s/2,0,a,"glowViolet"),i("core",s,r,.04,r/2-s/2,0,a,"glowViolet"),i("core",r-s*2,r-s*2,.03,0,0,a-.012,"lens"),i("core",1.15*.26,.05,.06,-1.15*.13,1.15*.24,a-.005,"bezel",0,0,.35),i("core",.05,1.15*.28,.06,1.15*.25,-1.15*.02,a-.005,"bezel"),i("core",1.15*.24,.05,.06,-1.15*.05,-1.15*.24,a-.005,"bezel",0,0,-.2),{bones:e,parts:t}}function JM(){const n={hull:{at:[0,1.9,0]}},e=[],t=(...i)=>e.push(["hull",...i]);t(.9,.5,.75,0,0,0,"hull"),t(.8,.12,.66,0,-.29,0,"under"),t(.56,.3,.04,0,.02,.39,"face"),t(.1,.1,.03,0,.1,.415,"glowShank");for(const i of[-1,1])t(.065,.065,.03,i*.14,-.06,.415,"glowShank"),t(.36,.26,.42,i*.62,.16,-.02,"hull",0,0,i*.22),t(.26,.05,.26,i*.64,.31,-.02,"face",0,0,i*.22),t(.2,.04,.2,i*.6,0,-.02,"glowExhaust"),t(.05,.8,.08,i*.3,-.62,-.22,"under",.45,0,i*.35);return t(.12,.12,.46,0,-.38,.22,"gun"),t(.06,.06,.04,0,-.38,.47,"glowArc"),{bones:n,parts:e}}const id={hunch:.18,leg:{thigh:.55,shin:.62,foot:.4,w:.12},hipX:.16,pelvis:[.44,.22,.3],chest:[.66,.6,.4],head:[.32,.3,.36],eye:.036,horn:.32,hooks:!0,arm:{upper:.46,fore:.44,t:.11},armFwd:.35,elbow:1.9,lower:{fwd:.55,elbow:1.2},pauldron:[.3,.16,.36],pack:!0,cape:{w:.78,len:1.2,top:.98,hem:4},weapon:"shock"},gi=n=>n.userData.rest,ha=(n,e,t,i,r)=>{n&&(n.rotation.x=gi(n).r.x+Math.sin(e*i+r)*t)},ms=(n,e,t={})=>({id:n,...e,palette:KM,...t}),pa=["cape","banner"],rd={colour:"#5fb8ff",element:"arc",opacity:.22,pad:1.12,regenDelay:4,regenSeconds:1.5},QM=[{id:"dreg",name:"Dreg",faction:"fallen",rank:"minor",tier:"fodder",body:"biped",health:{max:80},crit:{bones:["head"]},noHit:pa,ether:!0,spec:ms("dreg",da({hunch:.55,leg:{thigh:.34,shin:.4,foot:.27,w:.07},hipX:.1,pelvis:[.26,.16,.2],chest:[.36,.42,.26],head:[.2,.19,.28],eye:.028,horn:.14,arm:{upper:.3,fore:.3,t:.06},armFwd:.2,elbow:1.35,caps:!0,cowl:!0,rust:!0,weapon:"pistol"})),idle:(n,e,t)=>{const i=Math.floor(n*1.3+t.phase*3);e.head.rotation.y=gi(e.head).r.y+Math.sin(i*12.9898)*.55,e.pelvis.position.y=gi(e.pelvis).p.y+Math.sin(n*6+t.phase)*.012}},{id:"vandal",name:"Vandal",faction:"fallen",rank:"minor",tier:"skirmisher",body:"biped",health:{max:150},crit:{bones:["head"]},noHit:pa,ether:!0,spec:ms("vandal",da({hunch:.35,leg:{thigh:.45,shin:.55,foot:.36,w:.085},hipX:.12,pelvis:[.32,.18,.24],chest:[.46,.5,.3],head:[.26,.24,.32],eye:.032,horn:.24,hooks:!0,arm:{upper:.38,fore:.36,t:.075},armFwd:.3,elbow:1.85,lower:{fwd:.15,elbow:.55},cape:{w:.42,len:.78,top:.95,hem:3},weapon:"wire"})),idle:(n,e,t)=>{e.chest.rotation.x=gi(e.chest).r.x+Math.sin(n*1.6+t.phase)*.025,ha(e.cape,n,.05,1.3,t.phase)}},{id:"captain",name:"Captain",faction:"fallen",rank:"elite",tier:"heavy",body:"biped",health:{max:320},shield:{...rd,amount:160},crit:{bones:["head"]},noHit:pa,ether:!0,spec:ms("captain",da(id)),idle:(n,e,t)=>{e.head.rotation.z=gi(e.head).r.z+Math.sin(n*.5+t.phase)*.08,ha(e.cape,n,.035,.9,t.phase)}},{id:"boss",name:"Boss Captain",faction:"fallen",rank:"boss",tier:"heavy",body:"biped",health:{max:1100},shield:{...rd,amount:400},crit:{bones:["head"]},noHit:pa,ether:!0,spec:ms("boss",da({...id,horn:.36,crownStubs:!0,trim:!0,mantle:!0,banner:!0,lowerBlades:!0,lower:{fwd:.55,elbow:1.75},cape:{w:.8,len:1.5,top:.98,hem:5}}),{scale:1.2}),idle:(n,e,t)=>{e.head.rotation.z=gi(e.head).r.z+Math.sin(n*.45+t.phase)*.07,ha(e.cape,n,.03,.8,t.phase),ha(e.banner,n,.04,1.1,t.phase+1)}},{id:"servitor",name:"Servitor",faction:"fallen",rank:"elite",tier:"heavy",body:"servitor",health:{max:500},crit:{keys:["glowViolet","lens"]},aura:{bone:"core",at:[0,0,0],r:.95,colour:"#b08cff",opacity:.12},spec:ms("servitor",ZM()),idle:(n,e,t)=>{e.core.position.y=gi(e.core).p.y+Math.sin(n*Math.PI+t.phase)*.1,e.core.rotation.z=gi(e.core).r.z+Math.sin(n*.35+t.phase)*.12}},{id:"shank",name:"Shank",faction:"fallen",rank:"minor",tier:"skirmisher",body:"shank",health:{max:60},crit:null,spec:ms("shank",JM()),idle:(n,e,t)=>{e.hull.position.y=gi(e.hull).p.y+Math.sin(n*2.6+t.phase)*.05,e.hull.rotation.z=gi(e.hull).r.z+Math.sin(n*1.3+t.phase)*.06}}],sd=Math.PI/180,up=Math.tan(Math.PI/8),eS=Math.tan(Math.PI/6),fp={gunmetal:"#2d3034",blued:"#252b33",iron:"#3a3d40",steel:"#7d858a",plasteel:"#a9b3b8",olive:"#5f6b4a",wood:"#6b5238",rubber:"#1f2226",leather:"#5a3e2b",cord:"#8a7a5a",cloth:"#bdb29a",brass:"#a8843c",bore:"#0d0e10",reticle:"#0d0e10",glowDot:"#ff5a36",glowBead:"#f2e6c0"},tS="#9fc4d0",Vr=(n,e,t,i,r,s,a)=>[0,1,2,3].map(o=>[n,2*e,2*e*up,t,i,r,s,a,0,0,o*Math.PI/4]),od=(n,e,t,i,r,s,a)=>[0,1,2].map(o=>[n,2*e*eS,2*e,t,i,r,s,a,0,0,o*Math.PI/3]);function ma(n,e,t,i,r,s,a,o){const l=[],u=e+t/2,c=2*(e+t)*up+6e-4;for(let f=0;f<8;f++){const d=f*Math.PI/4;l.push([n,c,t,i,r+Math.sin(d)*u,s+Math.cos(d)*u,a,o,0,0,-d])}return l}const Ui=(n,e,t,i)=>({bone:n,at:e,fingers:t,back:i}),io=(n,e)=>({bone:n,at:e}),nS={body:{at:[0,0,0]},mag:{parent:"body",at:[0,-.004,-.105]},bolt:{parent:"body",at:[.03,.052,-.03]}},iS=[["body",.056,.07,.26,0,.045,-.055,"gunmetal"],["body",.058,.012,.2,0,.086,-.07,"olive"],["body",.024,.008,.11,0,.096,-.03,"iron"],["body",.044,.024,.13,0,0,-.01,"gunmetal"],["body",.052,.054,.18,0,.04,-.275,"iron"],["body",.056,.058,.016,0,.04,-.22,"cord"],["body",.056,.058,.016,0,.04,-.275,"cord"],["body",.056,.058,.016,0,.04,-.33,"cord"],...Vr("body",.017,.12,0,.047,-.425,"blued"),...Vr("body",.02,.01,0,.047,-.395,"steel"),...Vr("body",.02,.01,0,.047,-.455,"steel"),["body",.018,.018,.045,0,.047,-.5075,"iron"],["body",.024,.024,.012,0,.047,-.536,"steel"],["body",.05,.02,.07,0,0,-.105,"gunmetal"],["body",.012,.008,.06,0,-.028,-.04,"iron"],["body",.012,.03,.008,0,-.014,-.068,"iron"],["body",.006,.022,.008,0,-.008,-.035,"steel"],["body",.04,.105,.048,0,-.048,.028,"rubber",-.3,0,0],["body",.04,.068,.15,0,.028,.15,"wood"],["body",.044,.088,.018,0,.022,.234,"leather"],["body",.042,.012,.08,0,.066,.16,"cord"],["body",.002,.004,.012,-.029,.045,-.006,"steel",.5,0,0],["body",.002,.004,.012,-.029,.045,-.014,"steel",-.5,0,0],["body",.03,.012,.05,0,.106,-.01,"iron"],["body",.004,.034,.012,-.016,.129,-.03,"iron"],["body",.004,.034,.012,.016,.129,-.03,"iron"],["body",.036,.004,.012,0,.148,-.03,"iron"],["body",.038,.008,.014,0,.115,-.03,"cloth"],["body",.028,.028,.002,0,.13,-.03,"glass"],["body",.0012,.0012,8e-4,0,.13,-.0315,"glowDot"],["bolt",.006,.018,.03,0,0,0,"steel"],["mag",.034,.125,.06,0,-.062,.004,"gunmetal",.1,0,0],["mag",.04,.012,.068,0,-.128,-.003,"steel",.1,0,0],["mag",.036,.02,.062,0,-.03,.002,"olive",.1,0,0]],rS={frame:{at:[0,0,0]},crane:{parent:"frame",at:[-.017,.022,-.02]},cyl:{parent:"crane",at:[.017,.022,0]},block:{parent:"cyl",at:[0,0,.03]},hammer:{parent:"frame",at:[0,.052,.022]}},sS=[["frame",.034,.04,.24,0,.058,-.172,"blued"],["frame",.028,.03,.13,0,.023,-.227,"blued"],["frame",.04,.074,.012,0,.042,-.15,"cord"],["frame",.036,.004,.15,0,.08,-.18,"steel"],["frame",.002,.022,.11,.018,.056,-.1,"plasteel"],["frame",.002,.022,.11,-.018,.056,-.1,"plasteel"],["frame",.012,.012,.003,0,.058,-.2935,"bore"],["frame",.036,.02,.08,0,.006,-.012,"blued"],["frame",.03,.01,.064,0,.073,-.02,"blued"],["frame",.04,.06,.012,0,.04,.018,"blued"],["frame",.024,.012,.02,0,.082,.012,"iron"],["frame",.009,.009,.006,-.0075,.0925,.008,"steel"],["frame",.009,.009,.006,.0075,.0925,.008,"steel"],["frame",.0035,.016,.01,0,.086,-.283,"steel"],["frame",.003,.003,.003,0,.0955,-.281,"glowBead"],["frame",.01,.008,.045,0,-.026,-.028,"blued"],["frame",.01,.028,.008,0,-.012,-.05,"blued"],["frame",.006,.018,.008,0,-.008,-.02,"steel"],["frame",.03,.026,.026,0,.002,.02,"blued"],["frame",.034,.085,.042,0,-.04,.036,"wood",-.35,0,0],["frame",.04,.012,.05,0,-.083,.052,"iron",-.35,0,0],["frame",.004,.01,.014,-.021,.048,.012,"brass"],...od("cyl",.022,.064,0,0,0,"iron"),["cyl",.006,.004,.058,.0235*Math.cos(Math.PI/6),.0235*Math.sin(Math.PI/6),0,"brass",0,0,-Math.PI/3],["cyl",.008,.008,.05,0,0,-.057,"steel"],["crane",.01,.018,.01,.008,.01,-.056,"blued"],...od("block",.02,.006,0,0,.002,"brass"),["hammer",.012,.028,.012,0,.012,.004,"blued"],["hammer",.014,.008,.018,0,.026,.012,"steel"]],jn=.124,Ec=.15,oS={body:{at:[0,0,0]},mag:{parent:"body",at:[0,-.004,.095]}},aS=[["body",.058,.08,.5,0,.045,.05,"blued"],["body",.062,.028,.44,0,.072,.04,"plasteel"],["body",.064,.04,.15,0,.022,.2,"plasteel"],["body",.064,.1,.02,0,.035,.31,"rubber"],["body",.066,.02,.09,0,.082,.23,"cloth"],["body",.05,.05,.12,0,.052,-.26,"iron"],...Vr("body",.02,.26,0,.004,-.25,"blued"),...Vr("body",.023,.028,0,.004,-.18,"cloth"),...Vr("body",.023,.028,0,.004,-.32,"cloth"),["body",.018,.018,.07,0,.055,-.355,"iron"],["body",.034,.03,.05,0,.055,-.415,"iron"],["body",.036,.004,.008,0,.049,-.405,"bore"],["body",.036,.004,.008,0,.061,-.405,"bore"],["body",.036,.004,.008,0,.049,-.425,"bore"],["body",.036,.004,.008,0,.061,-.425,"bore"],["body",.036,.092,.046,0,-.044,.012,"rubber",-.3,0,0],["body",.01,.008,.07,0,-.024,-.036,"iron"],["body",.01,.026,.008,0,-.01,-.068,"iron"],["body",.006,.02,.008,0,-.008,-.03,"steel"],["body",.046,.016,.072,0,-.002,.095,"blued"],["body",.004,.02,.045,.031,.05,.13,"bore"],["body",.018,.008,.012,0,.09,.118,"iron"],["body",.03,.006,.01,0,.089,.098,"cord"],...ma("body",.025,.004,.006,0,jn,Ec+.003,"rubber"),...ma("body",.024,.005,.02,0,jn,Ec-.01,"blued"),...ma("body",.026,.004,.025,0,jn,.1175,"iron"),...ma("body",.03,.006,.02,0,jn,.095,"blued"),["body",4e-4,.012,4e-4,0,jn-.01,.088,"reticle"],["body",.016,4e-4,4e-4,-.012,jn,.088,"reticle"],["body",.016,4e-4,4e-4,.012,jn,.088,"reticle"],["body",8e-4,8e-4,4e-4,0,jn,.0877,"glowDot"],["body",.058,.058,.001,0,jn,.0865,"glass"],...Vr("body",.0302,.001,0,jn,.085,"mask"),["mag",.03,.078,.058,0,-.04,0,"iron"],["mag",.036,.01,.064,0,-.083,0,"steel"],["mag",.032,.018,.06,0,-.016,0,"plasteel"]],Oo=[{id:"auto",label:"Auto rifle",damage:21,precision:1.5,ammoType:"primary",stats:{magazine:30,rpm:600,reserve:1/0,auto:!0},spec:{id:"auto",bones:nS,parts:iS},sight:{kind:"reflex",rear:[0,.13,.012],front:[0,.13,-.0315],eyeRelief:.11},sockets:{muzzle:io("body",[0,.047,-.542]),port:io("body",[.03,.052,-.03]),rightGrip:Ui("body",[.034,-.02,.093],[0,-.29,-.96],[1,0,0]),leftHold:Ui("body",[-.056,-.004,-.278],[1,0,0],[0,-1,0]),leftMag:Ui("mag",[0,-.15,.047],[0,0,-1],[0,-1,0])},hip:{at:[.17,-.165,-.42],rot:[0,-2,0]},zoom:1.6,adsTime:.25,readyTime:.31,stowTime:.28,adsSlide:.05,casings:!0,recoil:{aim:{pitch:.26,direction:72,climbCap:3.5,hold:.12,halflife:.1},kick:{rise:[1.2,.35],back:[6,1],roll:[.8,.15],tp:.028},flash:.09},reload:{clip:1.9,seat:.55,gun:[[0,0,0,0,0,0,0],[.12,-30,20,30,6,0,-28],[.64,-30,20,30,6,0,-28],[.82,-15,10,15,3,0,-14],[1,0,0,0,0,0,0]],left:[[0,"leftHold",.6],[.06,"leftHold",.6],[.16,"leftMag",.9],[.3,"offLeft",.9],[.36,"offLeft",.9],[.48,"belowMag",.9],[.55,"leftMag",.9],[.6,"leftMag",.3],[.8,"leftHold",.6]],mag:[[0,0],[.16,1],[.55,0]],events:[[.16,"grab"],[.55,"seat"],[.6,"slap"],[1,"settle"]]}},{id:"hand",label:"Hand cannon",damage:55,precision:1.5,ammoType:"special",reserveCap:24,stats:{magazine:8,rpm:140,reserve:12,auto:!1},spec:{id:"hand",bones:rS,parts:sS},sight:{kind:"iron",rear:[0,.0955,.008],front:[0,.0955,-.281],eyeRelief:.25},sockets:{muzzle:io("frame",[0,.058,-.295]),rightGrip:Ui("frame",[.034,-.011,.097],[0,-.34,-.94],[1,0,0]),cylFront:Ui("cyl",[0,.045,-.06],[0,0,1],[0,1,0]),leftBlock:Ui("block",[0,.05,.024],[0,-1,0],[0,0,1])},oneHanded:!0,hip:{at:[.15,-.14,-.38],rot:[1,-3,0]},zoom:1.4,adsTime:.21,readyTime:.26,stowTime:.29,adsSlide:.06,casings:!1,recoil:{aim:{pitch:1.8,direction:85,hold:.06,halflife:.05},kick:{rise:[6,2],back:[22,2],roll:[1.5,.3],tp:.045},flash:.14},reload:{clip:1.85,seat:.8,gun:[[0,0,0,0,0,0,0],[.14,20,20,0,24,0,-15],[.35,10,25,40,38,-5,-15],[.62,10,25,40,38,-5,-15],[.69,-100,20,40,10,0,-80],[.9,-100,20,40,10,0,-80],[.97,0,0,0,6,0,0],[1,0,0,0,0,0,0]],left:[[0,"offLeft",.5],[.18,"offLeft",.5],[.33,"cylFront",.4],[.52,"cylFront",.4],[.58,"offLeft",.8],[.66,"offLeft",.8],[.75,"leftBlock",.8],[.8,"leftBlock",.8],[.9,"offLeft",.3]],crane:[[0,0],[.06,0],[.14,95],[.9,95],[.95,0]],ejector:[[0,0],[.4,0],[.46,22],[.52,0]],cylTurn:[[0,0],[.9,0],[.97,60]],block:[[0,0],[.6,1],[.8,0]],events:[[.06,"latch"],[.46,"eject"],[.6,"newBlock"],[.8,"seat"],[.95,"snap"],[1,"settle"]]}},{id:"pulse",label:"Pulse rifle",damage:15,precision:1.5,ammoType:"primary",stats:{magazine:21,rpm:900,reserve:1/0,auto:!0,burst:3},burstCycle:.4,spec:{id:"pulse",bones:oS,parts:aS},sight:{kind:"scope",rear:[0,jn,Ec],front:[0,jn,.0877],eyeRelief:.06},sockets:{muzzle:io("body",[0,.055,-.442]),port:io("body",[.031,.05,.13]),rightGrip:Ui("body",[.034,-.022,.078],[0,-.29,-.96],[1,0,0]),leftHold:Ui("body",[-.056,-.032,-.262],[1,0,0],[0,-1,0]),leftMag:Ui("mag",[0,-.104,.05],[0,0,-1],[0,-1,0])},hip:{at:[.16,-.175,-.45],rot:[0,-2,0]},zoom:2.3,adsTime:.31,readyTime:.31,stowTime:.28,adsSlide:.08,casings:!0,recoil:{aim:{pitch:.34,direction:90,hold:.03,halflife:.045},kick:{rise:[1.6,.5],back:[7,0],roll:[.6,.15],tp:.022},flash:.06},reload:{clip:1.9,seat:.58,gun:[[0,0,0,0,0,0,0],[.16,-50,30,60,8,-14,-42],[.4,-60,20,80,10,-16,-46],[.46,-50,30,60,8,-14,-42],[.68,-50,30,60,8,-14,-42],[.84,-25,15,30,4,-7,-20],[1,0,0,0,0,0,0]],left:[[0,"leftHold",.6],[.1,"leftHold",.6],[.26,"leftMag",.9],[.4,"offLeft",.9],[.44,"offLeft",.9],[.53,"belowMag",.9],[.58,"leftMag",.9],[.62,"leftMag",0],[.66,"leftMag",0],[.82,"leftHold",.6]],mag:[[0,0],[.26,1],[.58,0]],events:[[.26,"grab"],[.58,"seat"],[1,"settle"]]}}],ad={offLeft:{at:[-.16,-.62,-.3],fingers:[.3,.6,-1],back:[-1,0,0]},offRight:{at:[.2,-.62,-.28],fingers:[-.3,.6,-1],back:[1,0,0]}},lS=.05,cS=(n,e)=>2*Math.atan(Math.tan(n*sd/2)/e)/sd,ld=["glass","mask"],uS=new Sn({color:tS,transparent:!0,opacity:.12,depthWrite:!1}),fS=new Sn({colorWrite:!1}),cd=new U,ro=new U,so=new U,dS=new et;function wc(n,e,t=new jt){return so.set(...n).normalize().negate(),ro.set(...e),ro.addScaledVector(so,-ro.dot(so)).normalize(),cd.crossVectors(ro,so),t.setFromRotationMatrix(dS.makeBasis(cd,ro,so))}function hS(n,e,t){const i=new U(...n),s=new U(...e).clone().sub(i).normalize(),a=new U(0,1,0),o=a.addScaledVector(s,-a.dot(s)).normalize(),l=s.clone().negate(),u=new U().crossVectors(o,l),c=new jt().setFromRotationMatrix(new et().makeBasis(u,o,l)).invert(),f=new U(0,0,-t).sub(i.clone().applyQuaternion(c));return{q:c,p:f}}function hu(n,e={}){const t=n.spec,i=Uo({id:t.id,bones:t.bones,parts:t.parts.filter(a=>!ld.includes(a[7])),palette:fp},{solidMaterial:e.solidMaterial,glowMaterial:e.glowMaterial}),r=[];if(!e.icon)for(const a of ld){const o=new Map;for(const l of t.parts){if(l[7]!==a)continue;const u=new vn(l[1],l[2],l[3]);u.deleteAttribute("uv"),u.applyMatrix4(Qa(l)),o.has(l[0])||o.set(l[0],[]),o.get(l[0]).push(u)}for(const[l,u]of o){const c=new Rt(u.length===1?u[0]:cu(u,!1),a==="mask"?fS:uS);c.name=`${t.id}:${a}`,a==="mask"&&(c.renderOrder=-1),i.bones[l].add(c),r.push(c)}}const s={};for(const[a,o]of Object.entries(n.sockets??{})){const l=new Kt;l.name=`${t.id}:${a}`,l.position.set(...o.at),o.fingers&&wc(o.fingers,o.back,l.quaternion),i.bones[o.bone].add(l),s[a]=l}for(const a of[...i.meshes,...r])a.frustumCulled=!1;return i.root.updateMatrixWorld(!0),{group:i.root,rig:i,bones:i.bones,sockets:s,extras:r,weapon:n}}const Pa={glove:"#3b2f27",gloveDark:"#2a221c",plate:"#595d60",plateLight:"#a9b3b8",steel:"#7d858a",bandRust:"#8a4a2b",bandCloth:"#bdb29a",knit:"#4f6660",bracer:"#5a3e2b",cord:"#8a7a5a",sleeve:"#6e6450",sleeveDark:"#4f483a",undersuit:"#2b2e31",glowElement:"#ffffff"},pS={hand:{at:[0,0,0]},fingers:{parent:"hand",at:[.004,0,-.098]},fingersTip:{parent:"fingers",at:[0,0,-.045]},thumb:{parent:"hand",at:[-.04,-.008,-.03],rot:[0,.6,0]},thumbTip:{parent:"thumb",at:[0,0,-.045]}},mS=[["hand",.085,.032,.098,0,0,-.049,"glove"],["fingers",.08,.026,.047,0,0,-.022,"glove"],["fingersTip",.077,.024,.04,0,0,-.019,"gloveDark"],["thumb",.026,.025,.047,0,0,-.022,"glove"],["thumbTip",.023,.022,.036,0,0,-.017,"gloveDark"]],ud={titanPlate:[["hand",.092,.014,.055,0,.022,-.062,"plate"],["hand",.07,.006,.03,0,.03,-.028,"plateLight"],["hand",.112,.102,.092,0,0,.036,"plate"],["fingers",.082,.008,.04,0,.016,-.022,"plate"]],hunterCloak:[...[-.03,-.01,.01,.03].map(n=>["hand",.016,.01,.018,n,.02,-.09,"steel"]),["hand",.094,.09,.012,0,0,.02,"bandRust"],["hand",.094,.09,.012,0,0,.036,"bandCloth"]],warlockRobe:[["hand",.098,.092,.12,0,0,.07,"bracer"],["hand",.102,.096,.01,0,0,.04,"cord"],["hand",.102,.096,.01,0,0,.1,"cord"],["hand",.004,.004,.08,0,.017,-.05,"cord"]]},gS={titanPlate:[["fingers",.07,.004,.024,0,.0215,-.016,"glowElement"]],hunterCloak:[["hand",.078,.004,.008,0,.0185,-.074,"glowElement"]],warlockRobe:[["hand",.056,.004,.06,0,-.0175,-.05,"glowElement"],["hand",.004,.0025,.06,.022,.01725,-.05,"glowElement"]]},Ql={titanPlate:{fore:[.105,.1,"plate"],upper:[.12,.115,"undersuit"]},hunterCloak:{fore:[.08,.076,"knit"],upper:[.105,.1,"undersuit"]},warlockRobe:{fore:[.115,.105,"sleeve"],upper:[.13,.12,"sleeveDark"]}},fd={upper:.32,fore:.3},_S={right:[.26,-.58,.02],left:[-.3,-.62,0]},vS={right:[1,-1,.5],left:[-1,-1,.5]};function xS(n,e){const t=ud[n]?n:"hunterCloak",i=[...mS,...ud[t],...gS[t]],r=e==="left",s=Object.fromEntries(Object.entries(pS).map(([a,o])=>[a,{...o,at:r?[-o.at[0],o.at[1],o.at[2]]:o.at,...o.rot?{rot:r?[o.rot[0],-o.rot[1],-o.rot[2]]:o.rot}:{}}]));return{id:`hand-${e}-${n}`,bones:s,parts:i.map(([a,o,l,u,c,f,d,h,g=0,_=0,p=0])=>r?[a,o,l,u,-c,f,d,h,g,-_,-p]:[a,o,l,u,c,f,d,h,g,_,p]),palette:Pa}}const wt=Math.PI/180,dd={x:0,y:0,z:0,pitch:0,yaw:0,roll:0},Tc=50,ga=.6,hd=.12,Ar=.15,_a={y:-.22,z:.04,pitch:-30,roll:25},oo={x:.004,halflife:.07},Rr={yaw:2.5*wt,pitch:2*wt,roll:4*wt,x:.012},MS=1.5,SS=4.2,yS=.045,e0=.7,pd=9.8;function bS(){const n=new Map;return e=>(n.has(e)||n.set(e,new Yi({color:e,roughness:.85,metalness:0})),n.get(e))}function ES(n={}){const e=n.hipFov??70,t=new Ln;t.name="first-person";const i=new Ln,r=new Ln,s=new Ln;t.add(i),i.add(r),r.add(s);const a=new Yi({vertexColors:!0,roughness:.7,metalness:0}),o=new Sn({vertexColors:!0}),l=Oo.map((ee,re)=>{const pe=hu(ee,{solidMaterial:a,glowMaterial:o});pe.group.visible=re===0,s.add(pe.group);const de=hS(ee.sight.rear,ee.sight.front,ee.sight.eyeRelief);return{...pe,w:ee,aim:de,aimFwd:de.p.clone().add(new U(0,0,-ee.adsSlide)),hipP:new U(...ee.hip.at),hipQ:new jt().setFromEuler(new cn(ee.hip.rot[0]*wt,ee.hip.rot[1]*wt,ee.hip.rot[2]*wt,"YXZ")),front:new U(...ee.sight.front)}}),u=bS(),c=new vn(1,1,1);let f=n.classId??"hunterCloak",d=n.appearance??null,h=Pa;const g=()=>{const ee=fM(f,d),re=Object.keys(ee).length?{...Pa,...ee}:Pa,pe=re===h||Object.keys(re).every(de=>re[de]===h[de]);return h=re,!pe},_={};function p(){var ee;for(const re of["right","left"]){const pe=_[re];pe&&(t.remove(pe.rig.root,pe.upper,pe.fore),pe.rig.dispose());const de=xS(f,re),Fe=ko[(ee=Xn[f])==null?void 0:ee.element];de.palette={...de.palette,...h},Fe&&(de.palette={...de.palette,glowElement:Fe.glow});const Je=Uo(de,{solidMaterial:a,glowMaterial:o});for(const B of Je.meshes)B.frustumCulled=!1;Je.glow&&(Je.glow.visible=!1);const ht=Ql[f]??Ql.hunterCloak,Ct=new Rt(c,u(h[ht.upper[2]])),T=new Rt(c,u(h[ht.fore[2]]));t.add(Je.root,Ct,T),_[re]={rig:Je,upper:Ct,fore:T,look:ht}}}g(),p();const m={solidMaterial:a,glowMaterial:o};let x={};function M(){var re,pe;for(const de of Object.values(x))(re=de.group.parent)==null||re.remove(de.group),de.dispose();if(x={},!n.buildProp)return;const ee=Xn[f];if(ee)for(const de of["grenade","melee","class","super"]){const Fe=(pe=Jf[ee[de]])==null?void 0:pe.propKind;!Fe||x[Fe]||(x[Fe]=n.buildProp(Fe,ee.element,m),_.left.rig.bones.hand.add(x[Fe].group))}}M();const E=new Ln,L=(ee,re=1)=>new Sn({color:ee,transparent:!0,opacity:re,depthWrite:!1,blending:Mo,toneMapped:!1}),y=new Rt(new vn(.03,.03,.004),L(16773584)),S=new vn(.012,.004,1).translate(0,0,-.5),R=[0,1,2,3].map(ee=>{const re=new Ln;re.rotation.z=ee*Math.PI/2;const pe=new Rt(S,L(16757575,.9));return pe.rotation.y=.35,re.add(pe),{pivot:re,petal:pe}});E.add(y,...R.map(ee=>ee.pivot)),E.visible=!1,s.add(E);const P=new vn(.009,.009,.024),v=new Yi({color:fp.brass,roughness:.5,metalness:0}),b=Array.from({length:16},()=>{const ee=new Rt(P,v);return ee.visible=!1,ee.frustumCulled=!1,t.add(ee),{mesh:ee,age:e0,vel:new U,spin:new U}});let D=0;const C=new Io(.023,.023,.006,6).rotateX(Math.PI/2),k={mesh:new Rt(C,v),age:1,vel:new U,spin:new U};k.mesh.visible=!1,k.mesh.frustumCulled=!1,t.add(k.mesh);let F=0,N=null,q=null,z=null,te=null;const he=new jt,be=new cn(0,0,0,"YXZ"),Re=new U,Se={x:0,y:0,z:0,pitch:0,yaw:0,roll:0};let $=0;const Y={p:new U,q:new jt,curl:.6,shoulder:0,cam:[0,0,0,0,0,0]};let ne=!1,Q=0,Pe=e;const Ee={pitch:0,yaw:0},Ie={rise:{x:0,v:0},roll:{x:0,v:0},back:{x:0,v:0}},ze={yaw:{x:0,v:0},pitch:{x:0,v:0},roll:{x:0,v:0},x:{x:0,v:0}},We={x:0,v:0},H={x:0,v:0};let Vt=0,Ge=0,tt=-1/0,ie=0,nt=-1/0,qe=0,I=0,w=[],K=0;const se={speed:0,airborne:!1},ae=()=>l[F],oe=ee=>z?(ee-z.at)/l[z.gun].w.reload.clip:0,ke=new U,me=new jt,Ue=new jt,it=new cn(0,0,0,"YXZ"),ue=new U,ve=new et,Ve=new et,Xe=new U(1,1,1),ge=[],Ze=new U,$e=new U,_t=new jt;function G(ee,re,pe,de,Fe=0){const Je=ee.w.sockets[re],ht=ee.sockets[re],Ct=ee.bones[Je.bone];if(Ct.parent&&Ct.parent.isBone&&(Je.bone==="mag"||Je.bone==="block")){const T=Ct.userData.rest;ve.copy(Ct.parent.matrixWorld),Ze.copy(T.p),Ze.y-=Fe,ve.multiply(Ve.compose(Ze,_t.setFromEuler(T.r),Xe)),ve.multiply(Ve.compose(ht.position,ht.quaternion,Xe))}else ht.updateWorldMatrix(!1,!1),ve.copy(ht.matrixWorld);ve.decompose(pe,de,$e)}function Te(ee,re,pe,de){if(ad[re]){const Fe=ad[re];pe.set(...Fe.at),wc(Fe.fingers,Fe.back,de);return}if(re==="belowMag"){G(ee,"leftMag",pe,de,lS);return}G(ee,re,pe,de)}const J=ee=>ee.w.oneHanded?"offLeft":"leftHold";function ce(ee,re){return re>=ee.readyStart?1-mi((re-ee.readyStart)/ae().w.readyTime):zr((re-ee.lowerAt)/ee.clip.down)}const Me={p:new U,q:new jt};function Le(ee,re,pe,de){if(re==="grip"){pe.copy(Me.p),de.copy(Me.q);return}const Fe=MM[re];if(Fe){pe.set(...Fe.at),wc(Fe.fingers,Fe.back,de);return}Te(ee,re,pe,de)}const ot={position:new U,quaternion:new jt};function kt(ee,re,pe,de){const Fe=ee.bones[re],Je=ee.sockets[pe];ve.compose(de.position,de.quaternion,Xe),Ve.compose(Je.position,Je.quaternion,Xe).invert(),ve.multiply(Ve),Ve.copy(Fe.parent.matrixWorld).invert(),Ve.multiply(ve).decompose(Fe.position,Fe.quaternion,$e)}const Ht=new U;function ct(ee,re,pe,de=0){const Fe=ke.set(..._S[re]);de>0&&Zf[re]&&Fe.lerp(Ht.set(...Zf[re]),de);const Je=fd.upper,ht=fd.fore,Ct=ue.copy(pe).sub(Fe),T=Ot(Ct.length(),Math.abs(Je-ht)+.001,Je+ht-.001),B=Ct.normalize(),j=new U(...vS[re]);j.addScaledVector(B,-j.dot(B)).normalize();const W=(Je*Je+T*T-ht*ht)/(2*Je*T),V=Math.sqrt(Math.max(0,1-W*W)),fe=Fe.clone().addScaledVector(B,Je*W).addScaledVector(j,Je*V);xr(ee.upper,Fe,fe,ee.look.upper,j),xr(ee.fore,fe,pe,ee.look.fore,j)}const $t=new U,Qt=new U,En=new U;function xr(ee,re,pe,de,Fe){En.copy(pe).sub(re);const Je=En.length();En.divideScalar(Je||1),Qt.copy(Fe).addScaledVector(En,-Fe.dot(En)).normalize(),$t.crossVectors(Qt,En),ee.quaternion.setFromRotationMatrix(ve.makeBasis($t,Qt,En)),ee.position.copy(re).add(pe).multiplyScalar(.5),ee.scale.set(de[0],de[1],Je+.04)}function qn(ee){const re=ee.sockets.port;if(!re)return;const pe=b[D];D=(D+1)%b.length,re.getWorldPosition(pe.mesh.position);const de=Hr(ie*3.1);pe.vel.set(1.6+.4*(1+de),1.2+.3*(1-de),.3+.15*(1+de)),pe.spin.set(12*de,9,14*-de),pe.mesh.quaternion.copy(i.quaternion),pe.age=0,pe.mesh.visible=!0}const Bt={rig:t,guns:l,recoil:Ee,get active(){return F},get adsE(){return Q},get worldFov(){return Pe},get magnification(){return Hn(1,ae().w.zoom,Q)},get swapping(){return!!N},get dipping(){return!!q},get busy(){return!!N||!!q||!!te},get acting(){return!!te},get lowered(){return $},get actionId(){return te?te.id:null},get actionT(){return te?Ot((K-te.at)/te.seconds,0,1):0},get camOffset(){return Se},get props(){return x},get reloading(){return!!z&&!z.cutAt},get classId(){return f},setAim(ee){ne=!!ee},setClass(ee,re=void 0){if(ee===f||!Ql[ee]){re!==void 0&&Bt.setLook(re);return}re!==void 0&&(d=re??null),f=ee,te=null,g(),p(),M(),Bt.update(0,K,se)},setLook(ee){return d=ee??null,g()?(p(),Bt.update(0,K,se),!0):!1},get glovePaint(){return h},requestSwap(ee,re){if(!l[ee])return!1;if(N){if(N.phase==="stow")return N.to=ee,!0;if(ee===F)return!1;const pe=Ot((re-N.at)/ae().w.readyTime,0,1),de=1-mi(pe);return N={phase:"stow",at:re-Math.sqrt(de)*ae().w.stowTime,to:ee},!0}return ee===F?!1:(Bt.cutReload(re),N={phase:"stow",at:re,to:ee},!0)},startReload(ee){z={at:ee,gun:F,lastT:0,cutAt:null},w=[]},cutReload(ee){z&&z.cutAt===null&&(z.cutAt=ee)},dip(ee){Bt.cutReload(ee);let re=0;if(q){const pe=(ee-q.at)/Ar;re=pe<1?zr(pe):1-mi((ee-q.at-Ar)/ae().w.readyTime)}q={at:ee-Math.sqrt(re)*Ar}},act(ee,re,pe,de={}){const Fe=Jf[ee];if(!Fe||!(pe>0))return!1;Bt.cutReload(re);let Je=0;if(q){const Ct=(re-q.at)/Ar;Je=Ct<1?zr(Ct):1-mi((re-q.at-Ar)/ae().w.readyTime)}te&&(Je=Math.max(Je,ce(te,re)));const ht=te?{p:Y.p.clone(),q:Y.q.clone(),curl:Y.curl,shoulder:Y.shoulder,cam:Y.cam.slice()}:null;return q=null,te={id:ee,clip:Fe,at:re,seconds:pe,charged:!!de.charged,from:ht,lowerAt:re-Math.sqrt(Ot(Je,0,1))*Fe.down,readyStart:Fe.tp?Math.max(re+Fe.down,re+pe-ae().w.readyTime):re+Fe.ready*pe},!0},onShot(ee){const re=ae(),pe=re.w.recoil,de=Hn(1,re.w.zoom,Q);ie++,tt=ee,nt=ee,re.w.id==="hand"&&qe++;const Fe=pe.aim.pitch*wt/de,Je=Ee.pitch;Ee.pitch=pe.aim.climbCap?Math.max(Je,Math.min(Je+Fe,pe.aim.climbCap*wt/de)):Je+Fe;const ht=pe.aim.direction,Ct=Math.sin((ht+5)*Math.PI/10)*(100-ht)/100,T=(100-ht)/100;Ee.yaw+=-(Ct+Hr(ie)*T)*.5*Fe;const B=pe.kick.tp;Ie.rise.v+=no(Hn(pe.kick.rise[0],pe.kick.rise[1],Q)*wt,B),Ie.back.v+=no(Hn(pe.kick.back[0],pe.kick.back[1],Q)/1e3,B),Ie.roll.v+=no(Hn(pe.kick.roll[0],pe.kick.roll[1],Q)*wt*Hr(ie+17),B),E.userData.at=ee,E.userData.n=ie,re.w.casings&&qn(re)},update(ee,re,pe={}){const de=Math.max(0,ee);K=re,se.speed=pe.speed??0,se.airborne=!!pe.airborne;let Fe=0;if(N&&N.phase==="stow"){const De=(re-N.at)/ae().w.stowTime;De>=1?(l[F].group.visible=!1,F=N.to,l[F].group.visible=!0,N={phase:"ready",at:re,to:F},Ie.rise.x=Ie.rise.v=Ie.back.x=Ie.back.v=Ie.roll.x=Ie.roll.v=0,Fe=1):Fe=zr(De)}if(N&&N.phase==="ready"){const De=(re-N.at)/ae().w.readyTime;De>=1?N=null:Fe=Math.max(Fe,1-mi(De))}if(q){const De=(re-q.at)/Ar;if(De<1)Fe=Math.max(Fe,zr(De));else{const mt=(re-q.at-Ar)/ae().w.readyTime;mt>=1?q=null:Fe=Math.max(Fe,1-mi(mt))}}let Je=0,ht=0;if(te){const De=te,mt=(re-De.at)/De.seconds;Je=Ot(mt,0,1),Fe=Math.max(Fe,ce(De,re)),ht=De.from?1-mi((re-De.at)/hd):0,re>=De.readyStart+ae().w.readyTime&&(te=null)}$=Fe;let Ct=0,T=0,B=1;if(z){const De=l[z.gun].w.reload;if(Ct=oe(re),z.gun!==F)z=null;else{ne&&Ct>=De.seat&&Bt.cutReload(re);const mt=z.cutAt===null?1/0:(z.cutAt-z.at)/De.clip;T=Math.min(Ct,mt,1);for(const[He,at]of De.events){if(He<=z.lastT||He>T||w.includes(at))continue;w.push(at);const lt={seat:[1.2,4],slap:[.4,0],settle:[.3,0],snap:[2,0],latch:[.6,0],eject:[.8,0]}[at];if(lt){const Nt=l[z.gun].w.recoil.kick.tp;Ie.rise.v+=no(lt[0]*wt,Nt),Ie.back.v-=no(lt[1]/1e3,Nt)}if(at==="eject"){const Nt=ae();Nt.bones.block.updateWorldMatrix(!0,!1),Nt.bones.block.matrixWorld.decompose(k.mesh.position,k.mesh.quaternion,ue),k.vel.set(-.4,-.6,.2),k.spin.set(4,7,2),k.age=0,k.mesh.visible=!0}}z.lastT=Math.max(z.lastT,T),z.cutAt!==null&&(B=1-mi((re-z.cutAt)/hd)),(Ct>=1||B<=0)&&(De.cylTurn&&T>=De.cylTurn[1][0]&&(I=(I+60)%360),z=null)}}const j=!!z,W=ae(),V=j?W.w.reload:null,fe=j&&Ct>=V.seat,Ae=!N&&!q&&!te&&(!j||fe||z.cutAt!==null);if(Q=$2(Q,ne&&Ae,de,te?Math.min(W.w.adsTime,te.clip.down):W.w.adsTime),Pe=cS(e,Hn(1,W.w.zoom,Q)),Q<ga){const De=Q/ga;i.position.lerpVectors(W.hipP,W.aimFwd,De),i.quaternion.slerpQuaternions(W.hipQ,W.aim.q,De)}else i.position.lerpVectors(W.aimFwd,W.aim.p,(Q-ga)/(1-ga)),i.quaternion.copy(W.aim.q);let A=0,O=0,X=0,Z=0,le=0,we=0;j&&(Zn(V.gun,T,ge),A+=ge[0]/1e3*B,O+=ge[1]/1e3*B,X+=ge[2]/1e3*B,Z+=ge[3]*B,le+=ge[4]*B,we+=ge[5]*B),Fe>0&&(O+=_a.y*Fe,X+=_a.z*Fe,Z+=_a.pitch*Fe,we+=_a.roll*Fe),li(We,pe.airborne?1:0,.1,de),pe.landed>0&&(H.v-=Math.min(.35,.035*pe.landed)),li(H,0,qf(.07),de);const xe=1-Q;O+=(.012*We.x+H.x)*xe,Z+=-2.5*We.x*xe,i.position.x+=A,i.position.y+=O,i.position.z+=X,it.set(Z*wt,le*wt,we*wt,"YXZ"),i.quaternion.multiply(me.setFromEuler(it));const Be=de>0?(pe.lookYaw??0)/de:0,Qe=de>0?(pe.lookPitch??0)/de:0;li(ze.yaw,Ot(-.012*Be,-Rr.yaw,Rr.yaw),oo.halflife,de),li(ze.pitch,Ot(-.01*Qe,-Rr.pitch,Rr.pitch),oo.halflife,de),li(ze.roll,Ot(-.02*Be,-Rr.roll,Rr.roll),oo.halflife,de),li(ze.x,Ot(oo.x*Be,-.012,Rr.x),oo.halflife,de);const Ne=pe.speed??0;Vt+=Ne*de/MS,Ge=ql(Ge,Ot(Ne/SS,0,1)*(pe.airborne?0:1),.08,de);const ye=1-Ot(Ne/.5,0,1),je=1-.9*Q;r.position.set((ze.x.x+.006*Math.sin(Math.PI*Vt)*Ge)*xe,(-.004*((1-Math.cos(2*Math.PI*Vt))/2)*Ge+.0012*Math.sin(Math.PI*.5*re)*ye)*xe,0),r.rotation.set((ze.pitch.x+.15*wt*Math.sin(Math.PI*.5*re+.7)*ye)*je,ze.yaw.x*je,(ze.roll.x+.8*wt*Math.sin(Math.PI*Vt)*Ge)*je,"YXZ");const Ye=qf(W.w.recoil.kick.tp);li(Ie.rise,0,Ye,de),li(Ie.back,0,Ye,de),li(Ie.roll,0,Ye,de);const pt=ke.copy(W.front).multiplyScalar(Q);it.set(Ie.rise.x,0,Ie.roll.x,"YXZ"),s.quaternion.setFromEuler(it),s.position.copy(pt).sub(ue.copy(pt).applyQuaternion(s.quaternion)).add(ue.set(0,0,Ie.back.x));const zt=W.w.recoil.aim;re-tt>zt.hold&&(Ee.pitch=ql(Ee.pitch,0,zt.halflife,de),Ee.yaw=ql(Ee.yaw,0,zt.halflife,de));for(const De of l)De.rig.reset();const vt=re-nt,Pn=W.bones;if(W.w.id==="auto"&&vt<.045&&(Pn.bolt.position.z+=.022*(vt<.012?vt/.012:1-(vt-.012)/.033)),W.w.id==="hand"){vt<.06&&(Pn.hammer.rotation.x+=.25*(vt<.015?vt/.015:1-(vt-.015)/.045));const De=vt<.06?0:mi((vt-.06)/.16);if(Pn.cyl.rotation.z+=((Math.max(0,qe-1)+(qe>0?De:0))*60+I)*wt,j){Pn.crane.rotation.z+=Zn(V.crane,T,ge)[0]*wt*B;const mt=Zn(V.cylTurn,T,ge)[0];Pn.cyl.rotation.z+=(T>=V.cylTurn[1][0]?Hn(60,mt,B):mt)*wt,Pn.block.position.z+=Zn(V.ejector,T,ge)[0]/1e3*B}}const Et=E.userData.at??-1/0;if(E.visible=re-Et<yS&&!N,E.visible){const De=E.userData.n??0;E.position.copy(W.sockets.muzzle.position),E.rotation.set(0,0,(Hr(De*5.3)*.5+.5)*Math.PI*.5);const mt=(1+.15*Hr(De*2.7))*(1-.45*Q);E.scale.setScalar(mt);for(const He of R)He.petal.scale.set(1,1,W.w.recoil.flash)}t.updateMatrixWorld(!0);const en=_.right.rig,St=_.left.rig;en.reset(),St.reset(),G(W,"rightGrip",en.root.position,en.root.quaternion),ji(en.bones,.85);const tn=J(W);let an=.6,Mr=0;if(j){const De=Yf(V.left,T);Te(W,De.from,ke,me),Te(W,De.to,ue,Ue),St.root.position.lerpVectors(ke,ue,De.w),St.root.quaternion.slerpQuaternions(me,Ue,De.w),ot.position.copy(St.root.position),ot.quaternion.copy(St.root.quaternion),an=De.extra[0],B<1&&(Te(W,tn,ke,me),St.root.position.lerp(ke,1-B),St.root.quaternion.slerp(me,1-B),an=Hn(.6,an,B)),Mr=Ki(V.mag??V.block,T)}else Te(W,tn,St.root.position,St.root.quaternion);let Fn=0,js=!1,Zi=!1;const Yn=Y.cam.fill(0);if(te){const De=te.clip;if(De.left){Me.p.copy(St.root.position),Me.q.copy(St.root.quaternion);const mt=Yf(De.left,Je,De.ease);Le(W,mt.from,ke,me),Le(W,mt.to,ue,Ue),St.root.position.lerpVectors(ke,ue,mt.w),St.root.quaternion.slerpQuaternions(me,Ue,mt.w),an=mt.extra[0],Fn=Zn(De.shoulder,Je,ge)[0],Zn(De.cam,Je,ge);for(let He=0;He<6;He++)Yn[He]=ge[He];js=Ki(De.prop,Je)>0,Zi=Ki(De.glow,Je)>0&&(!De.glowCharged||te.charged)}if(ht>0){const mt=te.from;St.root.position.lerp(mt.p,ht),St.root.quaternion.slerp(mt.q,ht),an=Hn(an,mt.curl,ht),Fn=Hn(Fn,mt.shoulder,ht);for(let He=0;He<6;He++)Yn[He]=Hn(Yn[He],mt.cam[He],ht)}}Y.p.copy(St.root.position),Y.q.copy(St.root.quaternion),Y.curl=an,Y.shoulder=Fn;const ni=du.cameraMotion;Se.x=Yn[0]/1e3*ni,Se.y=Yn[1]/1e3*ni,Se.z=Yn[2]/1e3*ni,Se.pitch=Yn[3]*wt*ni,Se.yaw=Yn[4]*wt*ni,Se.roll=Yn[5]*wt*ni;const Ho=te==null?void 0:te.clip.propKind;for(const[De,mt]of Object.entries(x))mt.group.visible=js&&De===Ho,mt.glow&&(mt.glow.visible=De!=="knife"||Zi);if(_.left.rig.glow&&(_.left.rig.glow.visible=Zi),ji(St.bones,an),en.root.updateMatrixWorld(!0),St.root.updateMatrixWorld(!0),ct(_.right,"right",en.root.position),ct(_.left,"left",St.root.position,Fn),Mr>0)for(const[De,mt]of[["mag","leftMag"],["block","leftBlock"]]){const He=W.bones[De];He&&(ke.copy(He.position),me.copy(He.quaternion),kt(W,De,mt,ot),B<1&&(He.position.lerpVectors(ke,He.position,B),He.quaternion.slerpQuaternions(me,He.quaternion,B)))}if(W.w.id==="hand"&&j){const De=T>=.46&&T<.6&&B>=1;Pn.block.scale.setScalar(De?1e-4:1)}W.group.updateMatrixWorld(!0);for(const De of b)De.age>=e0||(De.age+=de,De.vel.y-=pd*de,De.mesh.position.addScaledVector(De.vel,de),De.mesh.rotation.x+=De.spin.x*de,De.mesh.rotation.y+=De.spin.y*de,De.mesh.rotation.z+=De.spin.z*de,De.age>=e0&&(De.mesh.visible=!1));return k.age<1&&(k.age+=de,k.vel.y-=pd*de,k.mesh.position.addScaledVector(k.vel,de),k.mesh.rotation.x+=k.spin.x*de,k.mesh.rotation.y+=k.spin.y*de,k.age>=1&&(k.mesh.visible=!1)),Bt},muzzleWorld(ee,re=new U){ae().sockets.muzzle.getWorldPosition(re);const de=Math.tan(ee.fov*wt/2)/Math.tan(Tc*wt/2);return re.x*=de,re.y*=de,re.applyQuaternion(ee.quaternion).add(ee.position)},leftHandWorld(ee,re=new U){const pe=_.left.rig.bones.hand;pe.updateWorldMatrix(!0,!1),re.set(...xM).applyMatrix4(pe.matrixWorld);const de=Math.tan(ee.fov*wt/2)/Math.tan(Tc*wt/2);return re.x*=de,re.y*=de,he.setFromEuler(be.set(Se.pitch,Se.yaw,Se.roll,"YXZ")),re.applyQuaternion(he).add(Re.set(Se.x,Se.y,Se.z)),re.applyQuaternion(ee.quaternion).add(ee.position)}};function ji(ee,re){ee.fingers.rotation.x-=re*1.2,ee.fingersTip.rotation.x-=re*1,ee.thumb.rotation.x-=re*.4}function Ki(ee,re){if(!ee)return 0;let pe=ee[0][1];for(const de of ee)de[0]<=re&&(pe=de[1]);return pe}for(const ee of Object.values(_))ee.rig.reset();return Bt.update(0,0,{}),Bt}const dp=.1,md=1e-9,gd=n=>n.burstLeft?{...n,burstLeft:0}:n;function wS(){let n=-1/0,e=-1/0,t=!1;return{pull(i,r,s,{held:a=!1,pressed:o=!1,blocked:l=!1}={}){if(o&&(n=s),a||(t=!1),l)return t=!1,{state:gd(i),shots:[],events:[]};const u=s-n<=dp;let c=a,f;if(r.burstCycle>0){const g=e+r.burstCycle;f=(a||u)&&s+md>=g,!f&&i.burstLeft>0&&s<g&&(c=!0)}else f=u&&s+md>=i.nextShotAt;const d=O2(i,s,{held:c,pressed:f});let h=d.state;if(d.shots.length&&(n=-1/0,r.burstCycle>0&&f)){const g=e+r.burstCycle;e=t&&s-g<i.maxCatchUp?g:d.shots[0].at,t=a}return d.events.some(g=>g.type==="emptied")&&(h=gd(h)),{state:h,shots:d.shots,events:d.events}}}}const TS={iron:"#3a3d40",iron2:"#595d60",plasteel:"#a9b3b8",gunmetal:"#2d3034",leather:"#5a3e2b",gambeson:"#bdb29a",linen:"#9b8f78",rust:"#8a4a2b",tarp:"#4f6660",wood:"#6b5238",face:"#151719",steel:"#7d858a",oxblood:"#7a1e1e",oxbloodDark:"#4e1414",slate:"#3f5a78",slateDark:"#2a3d52",teal:"#1f5e5a",tealDark:"#143f3c",pikeHull:"#3b3a3f",ghostShell:"#cfd6da",glowArc:"#6fd3ff",glowSolar:"#ff8a2a",glowVoid:"#a76bff",glowRed:"#ff4a3a",glowGhost:"#e8f6ff"};function ho(n={}){const e=n.scale??1,t=n.bulk??1,i=n.keys??{},r=(d,h)=>i[d]??h,s={},a=[],o=(d,h,g,_,p,m,x,M,E=0,L=0,y=0)=>a.push([d,h*e,g*e,_*e,p*e,m*e,x*e,M,E,L,y]),l=(d,h,g)=>[d*e,h*e,g*e];s.pelvis={parent:n.pelvisParent,at:n.pelvisAt??l(0,.92,0)},n.pelvisParent===void 0&&delete s.pelvis.parent,o("pelvis",.36*t,.16,.23*t,0,0,0,r("legs","linen"));const u=n.seated?1.45:0;for(const d of[-1,1]){const h=d<0?"L":"R";s["thigh"+h]={parent:"pelvis",at:l(d*.1*t,-.04,0),rot:[-u,0,d*(n.stance??0)]},s["shin"+h]={parent:"thigh"+h,at:l(0,-.42,0),rot:[u,0,0]},o("thigh"+h,.17*t,.44,.19*t,0,-.21,0,r("legs","linen")),o("shin"+h,.15*t,.42,.17*t,0,-.21,0,r("shins",r("legs","linen"))),o("shin"+h,.18*t,.08,.3*t,0,-.42,.05,r("boots","leather")),n.greaves&&o("shin"+h,.17*t,.26,.05,0,-.24,.1*t,r("greaves","iron2"))}s.chest={parent:"pelvis",at:l(0,.06,0),rot:[n.lean??0,0,0]},o("chest",.44*t,.52,.25*t,0,.26,0,r("torso","linen")),o("chest",.13,.08,.13,0,.56,0,r("neck","leather")),n.plate&&o("chest",.5*t,.32,.3*t,0,.34,.01,r("plate","iron")),n.plate2&&o("chest",.42*t,.12,.28*t,0,.1,.01,r("plate2","iron")),s.head={parent:"chest",at:l(0,.58,0)};const c=n.helm??"great";if(c==="great"?(o("head",.26,.28,.28,0,.14,0,r("helm","iron")),o("head",.19,.03,.02,0,.16,.145,r("visor","glowArc"))):c==="stepped"?(o("head",.24,.22,.26,0,.11,0,r("helm","iron")),o("head",.18,.1,.2,0,.27,-.01,r("helm","iron")),o("head",.2,.035,.02,0,.13,.135,r("visor","glowVoid"))):c==="hood"?(o("head",.21,.23,.23,0,.12,0,"face"),o("head",.12,.022,.02,0,.14,.125,r("visor","glowSolar")),o("head",.29,.3,.28,0,.15,-.035,r("hood","slate")),o("head",.12,.12,.14,0,.33,-.03,r("hood","slate"),-.55,0,0)):c==="wrap"&&(o("head",.22,.24,.24,0,.12,0,r("wrap","linen")),o("head",.28,.22,.28,.02,.17,-.03,r("hood","tarp")),o("head",.2,.03,.02,0,.13,.125,"face")),n.crown){const d=c==="stepped"?.32:.28,h=[[0,.13,.1],[-.1,.1,.075],[.1,.1,.075],[-.12,-.05,.06],[.12,-.05,.06]].slice(0,n.crown);for(const[g,_,p]of h)o("head",.035,p,.035,g,d+p/2,_,r("crown","iron2"))}for(const d of[-1,1]){const h=d<0?"L":"R",g=(n.arms??{})[h]??{};s["arm"+h]={parent:"chest",at:l(d*(.22*t+.06),.5,0),rot:[g.fwd??0,0,d*(g.out??.06)]},s["fore"+h]={parent:"arm"+h,at:l(0,-.32,0),rot:[-(g.elbow??.1),0,0]},o("arm"+h,.12*t,.34,.13*t,0,-.16,0,r("arms",r("torso","linen"))),o("fore"+h,.11*t,.3,.12*t,0,-.15,0,r("forearms",r("arms",r("torso","linen")))),o("fore"+h,.1,.1,.1,0,-.33,0,r("hands","leather")),n.gauntlets&&o("fore"+h,.13*t,.16,.14*t,0,-.19,0,r("gauntlets","iron"));const _=(n.pauldrons??{})[h];_&&o("arm"+h,_.size[0]*t,_.size[1],_.size[2]*t,d*.02,0,0,_.key,0,0,d*-.22),(n.glowHands??[]).includes(h)&&o("fore"+h,.14,.14,.14,0,-.34,.01,n.glowKey??"glowArc")}if(n.mantle&&(o("chest",.64*t,.12,.4*t,0,.5,-.02,n.mantle),o("chest",.54*t,.1,.33*t,0,.43,-.06,n.mantle)),n.tabard&&o("chest",.26*t,.78,.03,0,.02,.15*t,n.tabard),n.sash&&(o("chest",.08,.66,.27*t,0,.27,.005,n.sash,0,0,.7),o("chest",.46*t,.07,.27*t,0,.03,0,n.sash)),n.tarpCape&&o("chest",.5,.8,.02,.1,.12,-.16*t,n.tarpCape,.08,0,.18),n.cloak){const d=n.cloak;s.cape={parent:"chest",at:l(0,.5,-.14*t),rot:[-(n.lean??0)+.05,0,0]},o("cape",.46*t,d.len*.7,.03,0,-d.len*.35,0,d.key);for(const h of[-1,1])o("cape",.2*t,d.len*.34,.03,h*.12*t,-d.len*.86,0,d.dark??d.key)}if(n.coat){const d=n.coat;for(const h of[-1,1])o("pelvis",.19*t,d.len,.05,h*.1*t,-d.len/2+.06,.13*t,d.key),o("pelvis",.05,d.len*.95,.26*t,h*.2*t,-d.len/2+.06,0,d.dark);o("pelvis",.42*t,d.len,.05,0,-d.len/2+.06,-.13*t,d.key);for(const h of[.3,.6])o("pelvis",.43*t,.03,.055,0,-d.len*h,-.13*t,d.dark)}if(n.banner){s.banner={parent:"chest",at:l(.14*t,.35,-.2*t)},o("banner",.05,1.5,.05,0,.4,0,"wood"),o("banner",.5,.66,.03,.27,.8,0,n.banner.key);for(const[d,h,g,_,p]of n.banner.sigil)o("banner",d,h,.035,g,_,0,n.banner.mark,0,0,p)}n.trophy&&(o("chest",.05,.9,.08,.06,.28,-.21*t,"steel",0,0,.55),o("chest",.015,.7,.02,.06,.28,-.26*t,"glowArc",0,0,.55));const f=(d,h)=>h.forEach(g=>o(d,...g));return n.weapon==="slug"&&f("foreR",[[.1,.36,.14,0,-.44,.04,"gunmetal"],[.065,.5,.07,0,-.84,.04,"iron"],[.08,.2,.12,0,-.22,.05,"plasteel"],[.07,.12,.13,0,-.46,-.07,"plasteel"]]),n.weapon==="handcannon"&&f("foreR",[[.07,.26,.1,0,-.45,.03,"gunmetal"],[.1,.09,.1,0,-.39,.03,"iron2"]]),n.weapon==="longrifle"&&f("foreR",[[.06,1.05,.09,0,-.7,.03,"gunmetal"],[.05,.3,.06,0,-.5,.09,"plasteel"],[.08,.22,.11,0,-.24,.05,"wood"]]),n.weapon==="wrapped"&&f("foreR",[[.09,.8,.1,0,-.62,.03,"gunmetal"],[.08,.22,.12,0,-.22,.05,"wood"],[.11,.08,.12,0,-.58,.03,"linen"],[.11,.07,.12,0,-.84,.03,"linen"],[.07,.14,.12,0,-.48,-.08,"rust"]]),n.weapon==="short"&&f("foreR",[[.07,.34,.1,0,-.48,.03,"gunmetal"]]),n.blade&&f("foreL",[[.05,.12,.08,0,-.26,.02,"steel"],[.02,.45,.06,0,-.52,.02,n.blade]]),{bones:s,parts:a}}function t0({at:n=[.5,2.1,.1],fin:e="ghostShell",size:t=1}={}){const i={ghost:{at:n}},r=[],s=(a,o,l,u,c,f,d,h=0,g=0,_=0)=>r.push(["ghost",a*t,o*t,l*t,u*t,c*t,f*t,d,h,g,_]);return s(.13,.13,.13,0,0,0,"ghostShell",.62,.78,0),s(.05,.17,.035,.11,.03,-.02,e,0,0,-.5),s(.05,.17,.035,-.11,.03,-.02,"ghostShell",0,0,.5),s(.12,.035,.08,0,-.11,-.01,"ghostShell"),s(.05,.05,.02,0,0,.125,"glowGhost"),{bones:i,parts:r}}function AS(){const n={pike:{at:[0,.72,0]}},e=[],t=(...r)=>e.push(["pike",...r]);t(.72,.3,1.3,0,0,0,"pikeHull"),t(.5,.22,.55,0,-.04,.88,"pikeHull",.22,0,0),t(.82,.46,.6,0,.08,-.85,"iron"),t(.5,.08,1,0,-.19,-.05,"iron2");for(const r of[-1,1])t(.08,.1,.75,r*.28,-.1,.95,"gunmetal"),t(.09,.05,.03,r*.16,.03,1.16,"glowRed");t(.46,.04,.46,.08,.17,.15,"plasteel",0,0,.08),t(.42,.05,.5,0,.18,-.3,"tarp"),t(.32,.26,.32,0,.44,-.85,"wood");const i=ho({pelvisParent:"pike",pelvisAt:[0,1.02-.72,-.3],seated:!0,bulk:1.1,lean:.25,helm:"wrap",sash:"oxblood",keys:{torso:"linen",legs:"linen"},weapon:"short",arms:{R:{fwd:-.9,elbow:.5},L:{fwd:-.9,elbow:.5,out:-.1}}});return{bones:{...n,...i.bones},parts:[...e,...i.parts]}}function RS(){const n={base:{at:[0,0,0]},head:{parent:"base",at:[0,1,0]}},e=[],t=(i,...r)=>e.push([i,...r]);t("base",.55,.9,.55,0,.45,0,"iron"),t("base",.7,.08,.7,0,.92,0,"iron2"),t("head",.56,.42,.62,0,.14,0,"iron2"),t("head",.62,.05,.66,0,.37,0,"plasteel");for(const i of[-1,1])t("head",.09,.09,.75,i*.13,.12,.65,"gunmetal");return t("head",.12,.06,.03,0,.26,.325,"glowRed"),{bones:n,parts:e}}const n0=(n,e)=>({bones:{...n.bones,...e.bones},parts:[...n.parts,...e.parts]}),Nr=n=>n.userData.rest,i0=(n,e,t,i,r)=>{n&&(n.rotation.x=Nr(n).r.x+Math.sin(e*i+r)*t)},gs=(n,e)=>({id:n,...e,palette:TS}),_d={R:{fwd:-.5,elbow:1.07},L:{fwd:-.9,elbow:.6,out:-.25}},r0=["ghost","banner"],LS=[{id:"levy",name:"Levy",faction:"warlord",rank:"minor",tier:"skirmisher",body:"human",health:{max:110},crit:{bones:["head"]},noHit:["cape"],spec:gs("levy",ho({scale:.97,bulk:1.12,lean:.08,helm:"wrap",sash:"oxblood",tarpCape:"tarp",keys:{torso:"linen",legs:"linen",shins:"leather"},pauldrons:{L:{size:[.26,.1,.3],key:"rust"}},weapon:"wrapped",arms:_d})),idle:(n,e,t)=>{e.pelvis.position.y=Nr(e.pelvis).p.y+Math.sin(n*1.8+t.phase)*.012,e.chest.rotation.z=Nr(e.chest).r.z+Math.sin(n*.9+t.phase)*.03}},{id:"outrider",name:"Pike Outrider",faction:"warlord",rank:"minor",tier:"skirmisher",body:"pike",health:{max:260},crit:{bones:["head"]},spec:gs("outrider",AS()),idle:(n,e,t)=>{const i=Math.max(0,Math.sin(n*.7+t.phase)-.92)*.9;e.pike.position.y=Nr(e.pike).p.y+Math.sin(n*3.1+t.phase)*.03-i,e.pike.rotation.x=Nr(e.pike).r.x+i*.3}},{id:"champion",name:"Lesser Warlord",faction:"warlord",rank:"elite",tier:"heavy",body:"human",health:{max:520},crit:{bones:["head"]},noHit:["cape","banner","ghost"],measureAside:r0,ghost:{speed:1,hover:[0,1.45,.32]},spec:gs("champion",n0(ho({scale:1.05,helm:"hood",keys:{torso:"leather",legs:"iron",shins:"iron2",hood:"slate",visor:"glowSolar"},cloak:{len:1.15,key:"slate",dark:"slateDark"},gauntlets:!0,pauldrons:{R:{size:[.2,.1,.24],key:"slate"},L:{size:[.16,.08,.2],key:"plasteel"}},weapon:"handcannon",blade:"glowSolar",glowHands:["L"],glowKey:"glowSolar",arms:{R:{fwd:-.9,elbow:.75},L:{fwd:-.35,elbow:.9,out:.05}}}),t0({at:[.5,2.05,.05],fin:"slate",size:.85}))),idle:(n,e,t)=>{i0(e.cape,n,.05,1.2,t.phase)}},{id:"warlord",name:"Warlord",faction:"warlord",rank:"boss",tier:"heavy",body:"human",health:{max:1400},crit:{bones:["head"]},noHit:["cape","banner","ghost"],measureAside:r0,ghost:{speed:.7,hover:[0,1.6,.38]},spec:gs("warlord",n0(ho({scale:1.15,bulk:1.25,helm:"great",crown:5,plate:!0,plate2:!0,greaves:!0,gauntlets:!0,keys:{torso:"gambeson",legs:"leather",shins:"iron",plate:"oxblood",plate2:"iron",arms:"iron2",forearms:"iron",visor:"glowArc"},pauldrons:{L:{size:[.3,.19,.36],key:"oxblood"},R:{size:[.17,.09,.22],key:"plasteel"}},mantle:"leather",tabard:"oxblood",trophy:!0,banner:{key:"oxblood",mark:"plasteel",sigil:[[.16,.16,.27,.86,Math.PI/4],[.36,.05,.27,.6,0]]},weapon:"slug",glowHands:["L"],glowKey:"glowArc",arms:{R:{fwd:-.5,elbow:1.07},L:{fwd:-.15,elbow:.45,out:.12}}}),t0({at:[.62,2.3,.1],fin:"oxblood"}))),idle:(n,e,t)=>{e.head.rotation.y=Nr(e.head).r.y+Math.sin(n*.4+t.phase)*.25,i0(e.banner,n,.04,1.1,t.phase)}},{id:"rival",name:"Rival Warlord",faction:"warlord",rank:"boss",tier:"heavy",body:"human",health:{max:1200},crit:{bones:["head"]},noHit:["cape","banner","ghost"],measureAside:r0,ghost:{speed:-.75,hover:[0,1.55,.36]},spec:gs("rival",n0(ho({scale:1.1,helm:"stepped",crown:3,keys:{torso:"teal",legs:"leather",arms:"teal",forearms:"iron2",helm:"iron",crown:"iron2",visor:"glowVoid"},coat:{len:.95,key:"teal",dark:"tealDark"},gauntlets:!0,pauldrons:{L:{size:[.18,.1,.24],key:"iron2"}},banner:{key:"teal",mark:"gambeson",sigil:[[.08,.4,.2,.8,0],[.08,.4,.34,.8,0]]},weapon:"longrifle",glowHands:["L","R"],glowKey:"glowVoid",arms:_d}),t0({at:[-.6,2.2,.1],fin:"teal"}))),idle:(n,e,t)=>{i0(e.banner,n,.04,1,t.phase+1)}},{id:"turret",name:"Gate Turret",faction:"warlord",rank:"minor",tier:null,body:"turret",health:{max:240},crit:{keys:["glowRed"]},faces:!1,spec:gs("turret",RS()),idle:(n,e,t)=>{e.head.rotation.y=Nr(e.head).r.y+Math.sin(n*.6+t.phase)*.7}}],CS=Object.freeze({fodder:{sight:28,band:[1.6,4],speed:3.4,sprint:1.35,reaction:[.3,.55],cooldown:1.1,attack:5,strafe:.15,lose:4,turn:4},skirmisher:{sight:38,band:[7,14],speed:2.6,sprint:1.2,reaction:[.22,.45],cooldown:1.6,attack:20,strafe:.75,lose:6,turn:3},heavy:{sight:45,band:[10,20],speed:1.7,sprint:1.1,reaction:[.4,.7],cooldown:2.4,attack:26,strafe:.25,lose:9,turn:1.6}}),va=.55,ai=3,s0=1.5,vd=.8,o0=.6,PS=.5,xd=.6,Md=.35,a0=1,IS=.45,DS=.12,US=.9,kS=.07,l0=Math.PI*2;let NS=0;const ki=n=>{const e=Math.max(0,Math.min(1,n));return e*e*(3-2*e)},Bi=(n,e,t)=>n+(e-n)*t,sr=n=>n.userData.rest,OS={biped(n,e){n.pelvis.position.y=sr(n.pelvis).p.y*(1-.5*e);for(const t of["L","R"])n["thigh"+t].rotation.x-=.95*e,n["shin"+t].rotation.x+=1.35*e,n["foot"+t].rotation.x-=.4*e,n["arm"+t].rotation.x+=.35*e,n["arm"+t].rotation.z+=(t==="L"?-.25:.25)*e,n["arm2"+t]&&(n["arm2"+t].rotation.x+=.3*e);n.chest.rotation.x+=.85*e,n.head.rotation.x+=.45*e,n.cape&&(n.cape.rotation.x-=.35*e),n.banner&&(n.banner.rotation.x-=.25*e)},human(n,e){n.pelvis.position.y=sr(n.pelvis).p.y*(1-.47*e);for(const t of["L","R"])n["thigh"+t].rotation.x-=1.35*e,n["shin"+t].rotation.x+=1.9*e,n["arm"+t].rotation.x=Bi(sr(n["arm"+t]).r.x,-.25,e),n["fore"+t].rotation.x=Bi(sr(n["fore"+t]).r.x,-.15,e);n.chest.rotation.x+=.55*e,n.head.rotation.x+=.35*e,n.cape&&(n.cape.rotation.x-=.3*e),n.banner&&(n.banner.rotation.x-=.2*e)},servitor(n,e){n.core.position.y=Bi(sr(n.core).p.y,.62,e),n.core.rotation.z+=.5*e,n.core.rotation.x+=.35*e},shank(n,e){n.hull.position.y=Bi(sr(n.hull).p.y,.5,e),n.hull.rotation.z+=.7*e,n.hull.rotation.x+=.3*e},pike(n,e){n.pike.position.y=Bi(sr(n.pike).p.y,.2,e),n.pike.rotation.z+=.2*e,n.pike.rotation.x+=.08*e,n.chest.rotation.x+=.65*e,n.head.rotation.x+=.35*e},turret(n,e){n.head.rotation.x+=.5*e,n.head.position.y-=.1*e}},c0={biped(n,e){n.chest.rotation.x-=.22*e,n.head.rotation.x-=.18*e},human(n,e){n.chest.rotation.x-=.2*e,n.head.rotation.x-=.15*e},servitor(n,e){n.core.rotation.y+=.7*e},shank(n,e){n.hull.rotation.z+=.35*e,n.hull.position.y+=.05*e},pike(n,e){n.pike.rotation.z+=.12*e,n.chest.rotation.x-=.2*e},turret(n,e){n.head.rotation.y+=.25*e}},hp=n=>{var e;return au({max:n.health.max,shield:((e=n.shield)==null?void 0:e.amount)??0})},FS=new nu(1,3),BS=new vn(.5,1,.5).translate(0,.5,0),zS=3.4;function Sd(n,e,t,i){const r=new Sn({color:n.colour,transparent:!0,opacity:n.opacity,depthWrite:!1,blending:Mo}),s=new Ln;return s.add(new Rt(FS,r)),s.position.copy(i),s.scale.copy(t),e.add(s),{group:s,fillMat:r,base:n.opacity,scale:t.clone()}}function HS(n,e){var l,u;const t=new Yi({vertexColors:!0,roughness:.85,metalness:0,emissive:16777215,emissiveIntensity:0}),i=new Sn({vertexColors:!0}),r=Uo(n.spec,{solidMaterial:t,glowMaterial:i});r.root.position.set(e.x??0,0,e.z??0),r.root.rotation.y=e.yaw??0,(l=e.scene)==null||l.add(r.root);const s=r.bounds(n.measureAside??[]);let a=null;if(n.shield){const c=n.shield.pad/r.scale,f=s.getSize(new U).multiplyScalar(.5*c);a=Sd(n.shield,r.root,f,s.getCenter(new U).divideScalar(r.scale))}const o={unit:n,id:n.id,name:n.name,rank:n.rank,faction:n.faction,rig:r,root:r.root,bones:r.bones,meshes:r.meshes,phase:(e.index??0)*1.7,health:hp(n),diedAt:null,revivedAt:null,respawnAt:null,lastHitAt:-1/0,flashUntil:-1/0,shieldHitAt:-1/0,shieldBrokeAt:-1/0,flinch:0,etherClock:0,height:s.max.y-s.min.y,top:s.max.y,bottom:s.min.y,footprint:Math.min(.8,Math.max(.3,-s.min.x,s.max.x,-s.min.z)),turn:n.turn??((u=CS[n.tier])==null?void 0:u.turn)??2,shell:a,aura:n.aura?Sd(n.aura,r.bones[n.aura.bone],new U().setScalar(n.aura.r),new U(...n.aura.at)):null,column:null,scene:e.scene??null};return n.ghost&&(o.column=new Rt(BS,new Sn({color:15136511,transparent:!0,opacity:0,blending:Mo,depthWrite:!1})),o.column.visible=!1,o.column.position.set(n.ghost.hover[0],0,n.ghost.hover[2]*.5),r.root.add(o.column)),r.root.updateMatrixWorld(!0),o}function pu(n,e=.5,t=new U){return t.set(n.root.position.x,n.root.position.y+n.bottom+n.height*e,n.root.position.z)}function GS(n,e){var s,a,o,l,u;const t=n.rig.partAt(e.object,e.faceIndex);if(!t)return null;const i=n.unit;if((s=i.noHit)!=null&&s.includes(t[0]))return null;const r=!!((o=(a=i.crit)==null?void 0:a.bones)!=null&&o.includes(t[0])||(u=(l=i.crit)==null?void 0:l.keys)!=null&&u.includes(t[7]));return{part:t,crit:r&&n.health.shield<=0}}function VS(n,{amount:e,source:t,at:i,crit:r=!1}){if(n.health.dead)return{events:[],killed:!1};const{state:s,events:a}=qh(n.health,{amount:e,source:t});n.health=s,n.lastHitAt=i;let o=!1;for(const l of a)l.type==="absorbed"&&(n.shieldHitAt=i),l.type==="shieldBroken"&&(n.shieldBrokeAt=i),l.type==="damaged"&&(n.flashUntil=i+DS,n.flinch=Math.min(1,n.flinch+(r?.9:.55))),l.type==="died"&&(o=!0,n.diedAt=i,n.respawnAt=i+ai,n.revivedAt=null,n.etherClock=0,n.rig.setGlowLit(!1,u=>u[0]==="ghost"));return{events:a,killed:o}}function yd(n,e){n.health=hp(n.unit),n.diedAt=null,n.respawnAt=null,n.revivedAt=e,n.flinch=0,n.lastHitAt=-1/0,n.rig.setGlowLit(!0)}const xa=new U,WS=new U;function XS(n,e,t,i,r){const s=sr(n).p,a=Math.hypot(s.x,s.z),o=Math.atan2(s.z,s.x)+e*i+t;return r.set(Math.cos(o)*a,s.y+Math.sin(e*2.2+t)*.05,Math.sin(o)*a),Math.PI/2-o}function qS(n,e,t,i={}){var h,g;const{unit:r,rig:s,bones:a,root:o}=n;s.reset();let l=n.health.dead,u=l?t-n.diedAt:0,c=0,f=0,d=!0;if(l&&r.ghost?u<va?c=ki(u/va):u<ai?c=1:u<ai+a0?c=1-ki((u-ai)/a0):yd(n,n.diedAt+ai+a0):l&&(u<va?c=ki(u/va):u<s0?c=1:u<s0+vd?(c=1,f=ki((u-s0)/vd)):u<ai?(c=1,f=1,d=!1):u<ai+o0?f=1-ki((u-ai)/o0):yd(n,n.diedAt+ai+o0)),l=n.health.dead,(!l||!r.ghost&&u>=ai)&&((h=r.idle)==null||h.call(r,t,a,n)),n.flinch*=Math.exp(-9*e),!l&&n.flinch>.001&&((g=c0[r.body])==null||g.call(c0,a,n.flinch)),c>0&&OS[r.body](a,c),r.ghost&&a.ghost){const _=a.ghost,p=XS(_,t,n.phase,r.ghost.speed,xa);let m=0;l?m=ki((u-PS)/xd):n.revivedAt!==null&&(m=1-ki((t-n.revivedAt)/xd));const[x,M,E]=r.ghost.hover;_.position.set(Bi(xa.x,x,m),Bi(xa.y,M+Math.sin(t*2.4+n.phase)*.04,m),Bi(xa.z,E,m)),_.rotation.y=Bi(p,0,m),_.rotation.x=.55*m}if(n.column){const _=ai-Md;let p=0;l&&u>=_?p=ki((u-_)/Md):!l&&n.revivedAt!==null&&(p=1-ki((t-n.revivedAt)/IS)),n.column.visible=p>.001,n.column.material.opacity=.5*p,n.column.scale.set(1.3-.3*p,zS*Math.max(p,.001),1.3-.3*p)}if(r.shield&&!l){const _=n.health;t-n.lastHitAt>=r.shield.regenDelay&&_.shield<_.shieldMax&&(n.health=Sc(_,{shield:_.shieldMax/r.shield.regenSeconds*e,source:"regen"}).state)}if(n.shell){const _=n.shell,p=t-n.shieldBrokeAt;if(!l&&n.health.shield>0){const m=t-n.shieldHitAt<.1?2.2:1,x=.35+.65*lu(n.health);_.group.visible=!0,_.group.scale.copy(_.scale),_.fillMat.opacity=_.base*x*m}else if(p>=0&&p<.3){const m=p/.3;_.group.visible=!0,_.group.scale.copy(_.scale).multiplyScalar(1+.35*m),_.fillMat.opacity=_.base*2.5*(1-m)}else _.group.visible=!1}if(n.aura&&(n.aura.group.visible=!l,n.aura.fillMat.opacity=n.aura.base*(.8+.2*Math.sin(t*2+n.phase))),!l&&i.face&&r.faces!==!1){const p=((Math.atan2(i.face.x-o.position.x,i.face.z-o.position.z)-o.rotation.y+Math.PI)%l0+l0)%l0-Math.PI,m=n.turn*e;o.rotation.y+=Math.max(-m,Math.min(m,p))}if(o.position.y=-f*(n.top+.15),o.visible=d,s.solid.material.emissiveIntensity=t<n.flashUntil?NS:0,o.updateMatrixWorld(!0),l&&r.ether&&u<US&&a.head)for(n.etherClock-=e;n.etherClock<=0;)$S(n.scene,a.head.getWorldPosition(WS)),n.etherClock+=kS}const pp=48,Ia=1.1;let or=null;function YS(n){if((or==null?void 0:or.scene)===n)return or;const e=new vn(1,1,1),t=new Sn({color:15791864,transparent:!0,opacity:.5,depthWrite:!1}),i=Array.from({length:pp},()=>{const r=new Rt(e,t);return r.visible=!1,n.add(r),{mesh:r,age:Ia,vel:new U,spin:0}});return or={scene:n,items:i,next:0},or}function $S(n,e){if(!n)return;const t=YS(n),i=t.items[t.next];t.next=(t.next+1)%pp,i.age=0,i.mesh.position.copy(e),i.vel.set((Math.random()-.5)*.5,.7+Math.random()*.4,(Math.random()-.5)*.5),i.spin=(Math.random()-.5)*3,i.mesh.visible=!0}function jS(n){if(or)for(const e of or.items){if(e.age>=Ia)continue;if(e.age+=n,e.age>=Ia){e.mesh.visible=!1;continue}const t=e.age/Ia;e.mesh.position.addScaledVector(e.vel,n),e.vel.multiplyScalar(Math.exp(-1.2*n)),e.mesh.rotation.y+=e.spin*n,e.mesh.scale.setScalar((.07+.2*t)*(t<.7?1:1-(t-.7)/.3))}}const KS=Object.freeze(["now","enter","interact","flag","scan","land","talk"]),ZS=Object.freeze(["now","flag"]),JS=Object.freeze(["now"]);function QS({host:n=null,say:e=null,onBeat:t=null,onCheckpoint:i=null,knows:r=null,triggers:s=KS,levelKinds:a=ZS,subjectless:o=JS}={}){if(!n)throw new Error("makeEpisode: no host API");const l=[...s],u=new Set(o);let c=null,f=-1,d=!1,h=[],g=new Set;const _=S=>{var R;return r?!!r(S):!!((R=n.knows)!=null&&R.call(n,S))},p=new Map;if(Array.isArray(a))for(const S of a)p.set(S,u.has(S)?()=>!0:R=>_(R));else for(const[S,R]of Object.entries(a??{}))p.set(S,R);function m(S){var C;const R=[],P=new Set,v=[],b=[];for(const k of S.acts??[]){k.id||v.push("an act has no id");for(const F of k.scenes??[]){F.id||v.push(`act ${k.id}: a scene has no id`),b.push({act:k.id,id:F.id,title:F.title??F.id});let N=!0;for(const q of F.beats??[]){if(!q.id){v.push(`${k.id}/${F.id}: a beat has no id`);continue}P.has(q.id)&&v.push(`beat id '${q.id}' is used twice`),P.add(q.id),l.includes(q.trigger)||v.push(`beat '${q.id}': trigger '${q.trigger}' is not one of ${l.join(" | ")}`),!u.has(q.trigger)&&!q.at&&v.push(`beat '${q.id}': a '${q.trigger}' trigger needs an 'at' to name its subject`),N&&q.optional&&v.push(`beat '${q.id}' opens scene '${F.id}' and is marked optional — a scene's first beat is where its checkpoint is taken, so it must be arrived at`),q.talk&&((C=n.talk)!=null&&C.has)&&!n.talk.has(q.talk)&&v.push(`beat '${q.id}': conversation '${q.talk}' is not loaded`),R.push({...q,act:k.id,scene:F.id,sceneTitle:F.title??F.id,actTitle:k.title??k.id,opensScene:N}),N=!1}}}R.length||v.push("an episode with no beats");const D=new Set(S.teaches??[]);for(const k of R)for(const F of k.grants??[])D.add(F);for(const k of R)for(const F of k.needs??[])D.has(F)||v.push(`beat '${k.id}' needs '${F}', which nothing in this episode grants — list it in the episode's \`teaches\` if a conversation or a reading provides it`);if(v.length)throw new Error(`episode.load('${S.id}'): ${v.length} problem(s) — ${v.join("; ")}`);return{beats:R,scenes:b}}function x(){const S=y.beat;!S||!S.opensScene||g.has(S.scene)||(g.add(S.scene),i==null||i(S))}function M(S){var R,P,v;h.push(S.id),S.say&&(e==null||e(S.say));for(const b of S.grants??[])(R=n.learn)==null||R.call(n,b);S.talk&&((v=(P=n.talk)==null?void 0:P.open)==null||v.call(P,S.talk)),t==null||t(S)}function E(){if(!(d||!c)){d=!0;try{let S=0;x();const R=P=>{const v=p.get(P.trigger);return!!v&&!!v(P.at)};for(;f>=0&&f<c.beats.length&&R(c.beats[f]);){const P=c.beats[f];if((P.needs??[]).some(v=>!_(v))||(M(P),f+=1,x(),++S>c.beats.length+1))break}}finally{d=!1}}}function L(S,R){if(!c)return-1;for(let P=f;P>=0&&P<c.beats.length;P++){const v=c.beats[P];if(v.trigger===S&&v.at===R)return P;if(!v.optional)return-1}return-1}const y={get id(){return(c==null?void 0:c.id)??null},get title(){return(c==null?void 0:c.title)??null},get begun(){return f>=0},get over(){return!!c&&f>=c.beats.length},get beat(){return c&&f>=0&&f<c.beats.length?c.beats[f]:null},get act(){var S;return((S=y.beat)==null?void 0:S.actTitle)??null},get scene(){var S;return((S=y.beat)==null?void 0:S.sceneTitle)??null},get objective(){const S=y.beat;if(!S)return null;if(S.objective)return S.objective;if(!S.optional)return null;for(let R=f+1;R<c.beats.length;R++)if(!c.beats[R].optional)return c.beats[R].objective??null;return null},get note(){var S;return((S=y.beat)==null?void 0:S.note)??null},get done(){return[...h]},get beats(){return c?c.beats.map(S=>S.id):[]},load(S){if(!(S!=null&&S.id)||!S.acts)throw new Error("episode.load: needs { id, acts }");const{beats:R,scenes:P}=m(S);return c={id:S.id,title:S.title??S.id,acts:S.acts,beats:R,scenes:P},f=-1,h=[],g=new Set,y},begin(){return!c||f>=0?!1:(f=0,E(),!0)},fire(S,R){const P=L(S,R);if(P<0)return null;const v=c.beats[P],b=(v.needs??[]).filter(D=>!_(D));if(b.length){const D=v.refuse;return(typeof D=="function"?D(b):D)??"Not yet. There is a piece of this missing."}return f=P,x(),M(v),f+=1,E(),null},wants(S,R){return L(S,R)>=0},save(){var S;return{id:(c==null?void 0:c.id)??null,at:((S=y.beat)==null?void 0:S.id)??null,done:[...h]}},restore(S){if(!c||!S||S.id&&S.id!==c.id)return y;const R=c.beats.findIndex(P=>P.id===S.at);return R<0||(f=R,h=[...S.done??[]],g=new Set(c.beats.slice(0,R+1).map(P=>P.scene))),y}};return y}const bd=90,Lr=1e-4;class ey{constructor(e,t){this.ctx=e,this.rng=t,this.cache=new Map}get(e="white"){if(this.cache.has(e))return this.cache.get(e);const t=Math.floor(this.ctx.sampleRate*2),i=this.ctx.createBuffer(1,t,this.ctx.sampleRate),r=i.getChannelData(0),s=this.rng;if(e==="brown"){let a=0;for(let o=0;o<t;o++){const l=s.float()*2-1;a=(a+.02*l)/1.02,r[o]=a*3.5}}else if(e==="pink"){let a=0,o=0,l=0,u=0,c=0,f=0,d=0;for(let h=0;h<t;h++){const g=s.float()*2-1;a=.99886*a+g*.0555179,o=.99332*o+g*.0750759,l=.969*l+g*.153852,u=.8665*u+g*.3104856,c=.55*c+g*.5329522,f=-.7616*f-g*.016898,r[h]=(a+o+l+u+c+f+d+g*.5362)*.11,d=g*.115926}}else for(let a=0;a<t;a++)r[a]=s.float()*2-1;return this.cache.set(e,i),i}}function ty(n,e,t,i,r,s){const a=!!s.loop,o=r+(t.at||0),l=a?1/0:Math.max(.02,t.dur??.2),u=(t.peak??1)*(s.gain??1);if(u<=0)return null;const c=Math.max(.001,t.a??.005),f=Math.max(0,t.d??0),d=t.s??1,h=Math.max(.005,t.r??.05),g=n.createGain();g.gain.value=Lr,g.connect(i);let _,p=null;const m=s.rate??1;if(t.src==="noise")_=n.createBufferSource(),_.buffer=e.get(t.noise||"white"),_.loop=!0,_.loopStart=0,_.playbackRate.value=m;else{_=n.createOscillator(),_.type=t.wave||"sine";const P=t.jitter||0,v=P?1+(s.jitterRoll??0)*P:1,b=Math.max(8,(t.freq??440)*v*m);if(p=_.frequency,p.setValueAtTime(b,o),t.to!=null&&!a){const D=Math.max(8,t.to*v*m),C=o+l;t.glide==="lin"?p.linearRampToValueAtTime(D,C):p.exponentialRampToValueAtTime(D,C)}}let x=_,M=null;if(t.filter){const P=n.createBiquadFilter();P.type=t.filter.type||"lowpass",P.Q.value=t.filter.q??1;const v=Math.max(20,t.filter.freq??1e3);P.frequency.setValueAtTime(v,o),t.filter.to!=null&&!a&&P.frequency.exponentialRampToValueAtTime(Math.max(20,t.filter.to),o+l),M=P.frequency,x.connect(P),x=P}let E=null,L=null;if(t.lfo&&t.lfo.rate>0){E=n.createOscillator(),E.type="sine",E.frequency.value=t.lfo.rate;const P=n.createGain();if(t.lfo.target==="gain"){const v=Math.min(1,Math.max(0,t.lfo.depth??.5));L=n.createGain(),L.gain.value=1-v*.5,P.gain.value=v*.5,E.connect(P),P.connect(L.gain),x.connect(L),x=L}else t.lfo.target==="filter"&&M?(P.gain.value=t.lfo.depth??200,E.connect(P),P.connect(M)):p&&(P.gain.value=t.lfo.depth??20,E.connect(P),P.connect(p));E.start(o)}x.connect(g);const y=g.gain;y.setValueAtTime(Lr,o),y.linearRampToValueAtTime(u,o+c);const S=Math.max(Lr,u*d);f>0&&y.linearRampToValueAtTime(S,o+c+f);let R=1/0;if(a)_.start(o,t.src==="noise"?s.noiseOffset??0:void 0);else{const P=Math.max(o+c+f,o+l-h);y.setValueAtTime(Math.max(Lr,f>0?S:u),P),y.linearRampToValueAtTime(Lr,o+l),R=o+l+.02,_.start(o,t.src==="noise"?s.noiseOffset??0:void 0),_.stop(R),E&&E.stop(R)}return{endsAt:R,stop(P){const v=Math.max(P,n.currentTime);try{y.cancelScheduledValues(v),y.setValueAtTime(Math.max(Lr,y.value),v),y.linearRampToValueAtTime(Lr,v+h),_.stop(v+h+.02),E&&E.stop(v+h+.02)}catch{}}}}function Ed(n,e,t,i,r={}){const s=Math.max(r.when??n.currentTime,n.currentTime),a=!!t.loop,o=[];let l=s;for(const u of t.layers||[]){const c=ty(n,e,u,i,s,{...r,loop:a});c&&(o.push(c),c.endsAt>l&&c.endsAt!==1/0&&(l=c.endsAt))}return{endsAt:a?1/0:l,stop(u=n.currentTime){for(const c of o)c.stop(u)}}}const Ga=1e-4,wd=(n,e)=>n==null||e==null?1:2**((n-e)/12);function mu(n){var r;const e=60/n.bpm,t=(((r=n.intro)==null?void 0:r.bars)??0)*n.beatsPerBar,i=n.loop.bars*n.beatsPerBar;return{beat:e,intro:t,loop:i,introSeconds:t*e,loopSeconds:i*e}}function ny(n,e){return{...n,loop:!1,layers:n.layers.map(t=>({...t,dur:Math.max(.02,e)+(t.r??.05)}))}}function iy(n,e){if(!e)return n;const t=new Map;for(const i of n){if(e[i.voice]==null||i.midi==null)continue;const r=`${i.voice}@${i.beat}`;t.has(r)||t.set(r,[]),t.get(r).push(i)}for(const i of t.values()){i.sort((s,a)=>s.midi-a.midi);const r=e[i[0].voice];for(let s=0;s<i.length;s++)i[s].pan=i.length<2?0:Number((-r+2*r*s/(i.length-1)).toFixed(3))}return n}function ry(n,e,t){var o;const i=mu(n),r=n.beatsPerBar,s=[],a=(l,[u,c,f,d,h,g],_)=>s.push({beat:l+u*r+c,voice:f,midi:d,beats:h,gain:g,pass:t,..._});if(t<0)for(const l of((o=n.intro)==null?void 0:o.events)??[])a(0,l);else{const l=i.intro+t*i.loop;for(const c of n.loop.events)a(l,c);const u=new Ys(`${e}:pass${t}`);for(const c of n.loop.vary??[])if(c.scatter){const[f,d]=c.scatter,h=[];for(let _=f*r;_<d*r-1e-9;_+=c.step)h.push(_);const g=u.int(c.count[0],c.count[1]);for(const _ of u.pickMany(h,g)){const p=u.pick(c.pick),m=u.range(c.gain[0],c.gain[1]);s.push({beat:l+_,voice:c.voice,midi:p,beats:c.beats,gain:m,pass:t,vary:!0})}}else u.chance(c.p)&&a(l,[c.at[0],c.at[1],c.voice,c.midi,c.beats,c.gain],{vary:!0})}return iy(s,n.spread).sort((l,u)=>l.beat-u.beat)}function sy({score:n,seed:e,now:t,play:i,ahead:r=2.4,late:s=.25}){const a=mu(n);let o=null,l=0,u=!1,c=0,f=0;const d=new Map,h=_=>_<a.intro?-1:Math.floor((_-a.intro)/a.loop),g=_=>(d.has(_)||d.set(_,ry(n,e,_)),d.get(_));return{start(_){if(o!==null)return!1;o=_,l=_;for(const p of n.beds??[])i({...p,bed:!0,beat:0,pass:-1},_);return!0},pump(){var E;if(o===null||u)return 0;const _=t(),p=_+r;if(p<=l)return 0;const m=h((l-o)/a.beat),x=h((p-o)/a.beat);let M=0;for(let L=m;L<=x;L++)if(!(L<0&&!(((E=n.intro)==null?void 0:E.bars)>0)))for(const y of g(L)){const S=o+y.beat*a.beat;if(!(S<l||S>=p)){if(S<_-s){f++;continue}i(y,S),c++,M++}}for(const L of d.keys())L<m&&d.delete(L);return l=p,M},stop(){u=!0},state(){return{started:o!==null,t0:o,horizon:l,played:c,skipped:f,stopped:u,memo:d.size}}}}function oy(n,{seconds:e=2.6,rt60:t=2.4,preDelay:i=.02,seed:r="room"}={}){const s=n.sampleRate,a=Math.max(1,Math.round(e*s)),o=n.createBuffer(2,a,s),l=Math.round(i*s),u=Math.round(.005*s),c=Math.round(.05*s);for(let f=0;f<2;f++){const d=new Ys(`${r}:ir${f}`),h=o.getChannelData(f);let g=0;for(let _=l;_<a;_++){const p=(_-l)/s,m=9e3*(1500/9e3)**(p/e);g+=(1-Math.exp(-2*Math.PI*m/s))*(d.float()*2-1-g);const x=Math.min(1,(_-l)/u,(a-1-_)/c);h[_]=g*10**(-3*p/t)*x}}return o}function ay(n,{seconds:e=12,seed:t="bed"}={}){const i=Math.max(1,Math.round(e*n.sampleRate)),r=n.createBuffer(1,i,n.sampleRate),s=r.getChannelData(0),a=new Ys(t);for(let o=0;o<i;o++)s[o]=a.float()*2-1;return r}function ly(n,e,t,i){n.cancelScheduledValues(t),n.setValueAtTime(Math.max(Ga,n.value),t),n.linearRampToValueAtTime(Math.max(Ga,e),t+Math.max(.005,i))}function cy({ctx:n,score:e,voices:t,seed:i=e.seed??"music",mix:r={},ahead:s,late:a}){const o=mu(e),l=new ey(n,new Ys(`${i}:noise`)),u=n.createDynamicsCompressor();u.threshold.value=-6,u.knee.value=0,u.ratio.value=20,u.attack.value=.003,u.release.value=.25;const c=n.createGain();c.gain.value=10**(-3.42/20),u.connect(c),c.connect(n.destination);const f=n.createGain();f.gain.value=r.level??1,f.connect(u);const d=n.createGain();d.gain.value=Ga,d.connect(f);const h=r.reverb??{};if(h.send>0){const y=n.createGain();y.gain.value=h.send,y.channelCount=1,y.channelCountMode="explicit";const S=n.createConvolver();S.buffer=oy(n,{seconds:h.seconds,rt60:h.rt60,preDelay:h.preDelay,seed:`${i}:room`});const R=n.createGain();R.gain.value=h.wet??1,d.connect(y),y.connect(S),S.connect(R),R.connect(f)}const g=n.createGain();g.gain.value=1,g.connect(u);const _=new Map,p=y=>{const S=Math.max(-1,Math.min(1,y||0));if(!S)return d;const R=S.toFixed(3);if(!_.has(R)){let P=d;try{const v=n.createStereoPanner();v.pan.value=S;const b=n.createGain();b.gain.value=Math.SQRT2,v.connect(b),b.connect(d),P=v}catch{P=d}_.set(R,P)}return _.get(R)},m=new Map,x=y=>{if(!y.bed||!y.noiseSeconds)return l;const S=`${y.voice}:${y.noiseSeconds}:${y.rate??1}`;if(!m.has(S)){const R=ay(n,{seconds:y.noiseSeconds,seed:`${i}:bed:${S}`});m.set(S,{get:(P="white")=>P==="white"?R:l.get(P)})}return m.get(S)},M=[],L=sy({score:e,seed:i,now:()=>n.currentTime,play:(y,S)=>{const R=t[y.voice];if(!R)return;const P=y.bed?y.rate??1:wd(y.midi,R.ref),v=!y.bed&&R.held?ny(R,y.beats*o.beat):R,b=Ed(n,x(y),v,p(y.pan??R.pan??0),{when:S,rate:P,gain:y.gain??1,noiseOffset:y.offset??0});y.bed&&M.push(b)},ahead:s,late:a});return{ctx:n,start(y=n.currentTime,S=r.fadeIn??4){return L.start(y)?(d.gain.cancelScheduledValues(y),d.gain.setValueAtTime(Ga,y),d.gain.linearRampToValueAtTime(1,y+Math.max(.005,S)),L.pump(),!0):!1},pump:()=>L.pump(),fade(y,S){ly(d.gain,y,n.currentTime,S)},halt(y=n.currentTime){L.stop();for(const S of M.splice(0))S.stop(y)},sting(y,{gain:S=1,midi:R=null}={}){return Ed(n,l,y,g,{when:n.currentTime,rate:wd(R,y.ref),gain:S})},get level(){return d.gain.value},state:()=>L.state()}}function uy({AudioContext:n=null,storage:e=null,key:t=null,doc:i=null,score:r,voices:s,sting:a=null,mix:o={},lead:l=.1}={}){if(e&&typeof t!="string")throw new TypeError("makeMusicDeck: a storage needs its own prefixed key");const u=typeof n=="function";let c=null,f=null,d=L(),h=!1,g=!1,_=!1,p=!1,m=!1,x=!1,M=null;const E=[];function L(){var F;try{return((F=e==null?void 0:e.getItem)==null?void 0:F.call(e,t))!=="off"}catch{return!0}}function y(F){var N;try{(N=e==null?void 0:e.setItem)==null||N.call(e,t,F?"on":"off")}catch{}}function S(){if(c||!u||g)return c;try{c=new n,f=cy({ctx:c,score:r,voices:s,mix:o})}catch{c=null,f=null}return c&&!x&&(i!=null&&i.addEventListener)&&(x=!0,i.addEventListener("visibilitychange",C)),c}const R=()=>(c==null?void 0:c.state)==="running";function P(F,N){try{const q=c.createConstantSource(),z=c.createGain();z.gain.value=0,q.connect(z),z.connect(c.destination),q.onended=()=>{try{q.disconnect(),z.disconnect()}catch{}N()},q.start(),q.stop(c.currentTime+F)}catch{N()}}function v(F){var N,q;E.push(F);try{const z=(N=c==null?void 0:c.suspend)==null?void 0:N.call(c);(q=z==null?void 0:z.catch)==null||q.call(z,()=>{})}catch{}}function b(F){var N,q,z;E.push(F),M=(f==null?void 0:f.state())??M;try{(N=i==null?void 0:i.removeEventListener)==null||N.call(i,"visibilitychange",C)}catch{}try{const te=(q=c==null?void 0:c.close)==null?void 0:q.call(c);(z=te==null?void 0:te.catch)==null||z.call(te,()=>{})}catch{}c=null,f=null}function D(){var F;try{return Promise.resolve((F=c==null?void 0:c.resume)==null?void 0:F.call(c)).then(()=>R(),()=>!1)}catch{return Promise.resolve(!1)}}function C(){if(!(!c||g)){if(i.hidden)R()&&(p=!0,v("hidden"));else if(p){if(p=!1,!d)return;D().then(F=>{F&&m&&!g&&k.play()})}}}const k={get available(){return u},probe(){return!u||!d?"none":(S(),c?c.state:"none")},unlock(){return!u||g||!S()?Promise.resolve(!1):D()},play(){return!f||!d||h||g||!R()?!1:i!=null&&i.hidden?(p=!0,m=!0,v("hidden"),!1):(m=!1,h=f.start(c.currentTime+l,o.fadeIn),h)},pump(){h&&!p&&!g&&f.pump()},toggle(){if(d=!d,y(d),d){if(!S())return d;D().then(F=>{!F||!d||g||(h?f.fade(1,o.mute??.3):k.play())})}else R()&&(f.fade(0,o.mute??.3),P((o.mute??.3)+.05,()=>{d||v("muted")}));return d},silence(){d=!1},carry(F=!0){_=!!F},end(){return!c||g?!1:(R()&&d&&a&&f.sting(a),_&&h?!0:k.stop(o.fadeOut??2.5))},stop(F=1.5){return!c||g?!1:(g=!0,R()?(f.fade(0,F),P(F+.1,()=>{f==null||f.halt(),b("ended")}),!0):(f==null||f.halt(),b("stopped"),!0))},state(){return{available:u,context:(c==null?void 0:c.state)??"none",wanted:d,playing:h,ended:g,carry:_,hidden:p,waiting:m,suspends:[...E],sequencer:(f==null?void 0:f.state())??M}}};return k}const Ac=[2,4,5,7,9,10,0],fy=[...Ac,3],dy=[2,4,6,7,9,11,1],hy=Object.freeze({name:"Cold Iron",seed:"cold-iron",bpm:50,beatsPerBar:4,beds:[{voice:"wind",rate:1,gain:1},{voice:"wind",rate:.917,gain:.8,offset:.7},{voice:"drone",rate:1,gain:1}],intro:{bars:1,events:[[0,2,"toll",50,0,.8]]},loop:{bars:16,events:[[0,0,"pad",53,8,1],[0,0,"pad",57,8,1],[0,0,"pad",64,8,.8],[0,0,"toll",50,0,1],[2,0,"pad",53,8,1],[2,0,"pad",58,8,1],[2,0,"pad",62,8,.85],[4,0,"padDark",55,8,1],[4,0,"padDark",58,8,1],[4,0,"padDark",63,8,.85],[6,0,"pad",53,8,1],[6,0,"pad",57,8,1],[6,0,"pad",62,8,.85],[8,0,"pad",52,8,1],[8,0,"pad",55,8,1],[8,0,"pad",60,8,.9],[8,0,"toll",45,0,.9],[8,0,"voice",64,16,.9],[9,0,"horn",62,2,.9],[9,2,"horn",69,2,1],[10,0,"horn",67,1,.85],[10,1,"horn",69,3,.95],[10,0,"pad",60,8,.95],[10,0,"pad",64,8,.95],[10,0,"pad",69,8,.8],[12,0,"pad",54,8,1],[12,0,"pad",57,8,1],[12,0,"pad",62,8,.9],[12,0,"pad",64,8,.7],[12,0,"thud",null,0,1],[12,0,"toll",50,0,1],[12,0,"voice",66,8,.9],[12,0,"horn",69,2,1],[12,2,"horn",66,2,.95],[13,0,"horn",64,1,.85],[13,1,"horn",62,3,.95],[14,0,"pad",50,6,.7],[14,0,"pad",57,6,.7]],vary:[{p:.5,at:[6,2],voice:"toll",midi:57,beats:0,gain:.5},{scatter:[0,4],step:.5,count:[0,1],voice:"spark",pick:[74,77,79,81,84,86],beats:0,gain:[.5,.8]},{scatter:[6,12],step:.5,count:[0,2],voice:"spark",pick:[74,77,79,81,84,86],beats:0,gain:[.5,.8]},{scatter:[12,16],step:.5,count:[3,6],voice:"spark",pick:[74,76,78,81,83,86,88,90],beats:0,gain:[.6,1]}]},sections:[{bars:[0,4],pcs:Ac},{bars:[4,6],pcs:fy},{bars:[6,12],pcs:Ac},{bars:[12,16],pcs:dy}]}),py=Object.freeze({wind:{loop:!0,layers:[{src:"noise",noise:"white",filter:{type:"bandpass",freq:520,q:.8},lfo:{rate:.05,target:"filter",depth:220},a:4,r:3,peak:.05}]},drone:{loop:!0,ref:38,layers:[{wave:"sawtooth",freq:73.42,filter:{type:"lowpass",freq:380,q:.7},lfo:{rate:.07,target:"filter",depth:90},a:5,r:4,peak:.1},{wave:"sawtooth",freq:73.64,filter:{type:"lowpass",freq:380,q:.7},lfo:{rate:.05,target:"filter",depth:70},a:5,r:4,peak:.08},{wave:"triangle",freq:110,filter:{type:"lowpass",freq:600},a:6,r:4,peak:.05}]},pad:{held:!0,ref:57,layers:[{wave:"sawtooth",freq:220,filter:{type:"lowpass",freq:900,q:.6},lfo:{rate:.11,target:"filter",depth:180},a:2.4,s:1,r:2.8,peak:.035},{wave:"triangle",freq:220.77,filter:{type:"lowpass",freq:1400},a:2.8,r:3,peak:.03}]},padDark:{held:!0,ref:57,layers:[{wave:"sawtooth",freq:220,filter:{type:"lowpass",freq:560,q:.6},lfo:{rate:.09,target:"filter",depth:120},a:2.4,s:1,r:2.8,peak:.038},{wave:"triangle",freq:220.77,filter:{type:"lowpass",freq:900},a:2.8,r:3,peak:.03}]},voice:{held:!0,ref:69,layers:[{wave:"sawtooth",freq:440,filter:{type:"bandpass",freq:730,q:5},lfo:{rate:4.6,target:"freq",depth:3.5},a:1.8,r:2.4,peak:.05},{wave:"sawtooth",freq:440,filter:{type:"bandpass",freq:1090,q:7},lfo:{rate:4.6,target:"freq",depth:3.5},a:1.8,r:2.4,peak:.03},{wave:"sawtooth",freq:440,filter:{type:"bandpass",freq:2440,q:9},lfo:{rate:4.6,target:"freq",depth:3.5},a:1.8,r:2.4,peak:.012}]},horn:{held:!0,ref:62,layers:[{wave:"sawtooth",freq:293.66,filter:{type:"lowpass",freq:350,to:1500,q:1.2},a:.35,d:.6,s:.75,r:.9,peak:.06},{wave:"sawtooth",freq:294.83,filter:{type:"lowpass",freq:300,to:1300},a:.4,r:.9,peak:.045},{wave:"triangle",freq:146.83,filter:{type:"lowpass",freq:500},a:.5,r:1,peak:.03}]},toll:{ref:50,layers:[{wave:"sine",freq:73.42,a:.003,d:2.45,s:.35,r:4.2,dur:7,peak:.05},{wave:"sine",freq:146.83,a:.003,d:2.1,s:.35,r:3.6,dur:6,peak:.06},{wave:"sine",freq:174.73,a:.003,d:1.575,s:.35,r:2.7,dur:4.5,peak:.035},{wave:"sine",freq:220.25,a:.003,d:1.225,s:.35,r:2.1,dur:3.5,peak:.025},{wave:"sine",freq:293.66,a:.003,d:1.05,s:.35,r:1.8,dur:3,peak:.03},{wave:"sine",freq:405.25,a:.003,d:.63,s:.35,r:1.08,dur:1.8,peak:.015},{wave:"sine",freq:792.9,a:.003,d:.315,s:.35,r:.54,dur:.9,peak:.01},{src:"noise",noise:"white",filter:{type:"bandpass",freq:2400,q:1.5},a:.002,r:.03,dur:.04,peak:.05}]},spark:{ref:81,layers:[{wave:"sine",freq:880,a:.004,d:.25,s:.2,r:.6,dur:1.1,peak:.02},{wave:"sine",freq:2648.8,a:.004,r:.25,dur:.3,peak:.006}]},thud:{layers:[{wave:"sine",freq:62,to:40,a:.005,d:.4,s:.3,r:.9,dur:1.6,peak:.18},{wave:"sine",freq:124,to:80,a:.005,r:.3,dur:.5,peak:.05},{src:"noise",noise:"white",filter:{type:"lowpass",freq:240},a:.002,r:.08,dur:.12,peak:.08}]}}),my=Object.freeze({ref:55,layers:[{wave:"sine",freq:196,a:.002,d:.6,s:.35,r:1.1,dur:1.8,peak:.12},{wave:"sine",freq:540.96,a:.002,d:.3,s:.3,r:.55,dur:.9,peak:.05},{wave:"sine",freq:1058.4,a:.002,d:.1,s:.3,r:.2,dur:.35,peak:.025},{src:"noise",noise:"white",filter:{type:"bandpass",freq:300,to:2600,q:.9},a:.25,r:.4,dur:.8,peak:.05}]}),gy=Object.freeze({level:1,fadeIn:4,fadeOut:2.5,mute:.3,reverb:{seconds:2.6,rt60:2.4,preDelay:.02,send:.3,wet:1}}),_y=Object.freeze({titanPlate:"M26 12 L74 12 L82 20 L82 46 L18 46 L18 20 Z M12 54 L88 54 L88 78 L78 88 L22 88 L12 78 Z M26 24 L33 24 L33 31 L26 31 Z M67 24 L74 24 L74 31 L67 31 Z M22 70 L29 70 L29 77 L22 77 Z M71 70 L78 70 L78 77 L71 77 Z",hunterCloak:"M42 6 L58 6 L66 16 L68 32 L84 40 L90 92 L78 84 L68 94 L58 86 L50 94 L42 86 L32 94 L22 84 L10 92 L16 40 L32 32 L34 16 Z M48 40 L52 40 L52 82 L48 82 Z M50 31 L54 35 L50 39 L46 35 Z",warlockRobe:"M34 8 L46 8 L50 16 L54 8 L66 8 L70 20 L84 28 L92 94 L54 94 L50 80 L46 94 L8 94 L16 28 L30 20 Z M50 28 L52 34 L55.5 36 L52 38 L50 46 L48 38 L44.5 36 L48 34 Z"}),vy=Object.freeze({titanPlate:"M50 6 L55 20.5 L62 24 L55 27.5 L50 42 L45 27.5 L38 24 L45 20.5 Z M14 85 V52 L21 46 H79 L86 52 V85 Z M24 56 H31 V63 H24 Z M69 56 H76 V63 H69 Z M4 88 H96 V94 H4 Z",hunterCloak:"M15.5 85 L21 64.5 L34 52.5 L52.5 52.5 L64.5 61 L69 70 L64 72.5 L79.5 81.5 L82 63.5 L77 66 L71.5 55 L55.5 43.5 L30 43.5 L13 59.5 L6.5 83 Z M43 6 L47 19 L53 22 L47 25 L43 38 L39 25 L33 22 L39 19 Z M4 88 H96 V94 H4 Z",warlockRobe:"M50 22 L54.5 39.5 L60.5 44 L54.5 48.5 L50 66 L45.5 48.5 L39.5 44 L45.5 39.5 Z M91 77 L81 83.5 L72.5 80 L80 76.5 Z M77 85 L52.5 87.5 L52 82 L70 80.5 Z M47.5 87.5 L23 85 L30 80.5 L48 82 Z M19 83.5 L9 77 L20 76.5 L27.5 80 Z M9 75 L19 68.5 L27.5 72 L20 75.5 Z M23 67 L47.5 64.5 L48 70 L30 71.5 Z M52.5 64.5 L77 67 L70 71.5 L52 70 Z M81 68.5 L91 75 L80 75.5 L72.5 72 Z"}),u0=Object.freeze({forge:"M6 48 L22 42 L90 42 L90 52 L76 52 L66 60 L66 70 L78 70 L78 82 L22 82 L22 70 L34 70 L34 60 L26 54 L16 52 Z M56 4 L59 19 L66 22 L59 25 L56 36 L53 25 L46 22 L53 19 Z M38 24.5 L41.5 28 L38 31.5 L34.5 28 Z M76 27 L79 30 L76 33 L73 30 Z M30 11.5 L32.5 14 L30 16.5 L27.5 14 Z",gate:"M10 24 L15 14 L20 24 L20 94 L10 94 Z M80 24 L85 14 L90 24 L90 94 L80 94 Z M20 26 L80 26 L80 34 L20 34 Z M24 38 L47 38 L47 94 L24 94 Z M29 86 L33 86 L42 46 L38 46 Z M76 38 L68 44 L68 90 L76 94 Z M57.5 48 L59.5 58 L65 60 L59.5 62 L57.5 74 L55.5 62 L50 60 L55.5 58 Z",sheaf:"M34 56 L66 56 L66 64 L34 64 Z M26 14 L30 19 L30 29 L26 33 L22 29 L22 19 Z M38.5 56 L41.5 56 L27.5 33 L24.5 33 Z M38 6 L42 11 L42 21 L38 25 L34 21 L34 11 Z M43.5 56 L46.5 56 L39.5 25 L36.5 25 Z M50 2 L54 7 L54 17 L50 21 L46 17 L46 7 Z M48.5 56 L51.5 56 L51.5 21 L48.5 21 Z M62 6 L66 11 L66 21 L62 25 L58 21 L58 11 Z M53.5 56 L56.5 56 L63.5 25 L60.5 25 Z M74 14 L78 19 L78 29 L74 33 L70 29 L70 19 Z M58.5 56 L61.5 56 L75.5 33 L72.5 33 Z M38.5 64 L41.5 64 L29.5 92 L26.5 92 Z M43.5 64 L46.5 64 L41.5 94 L38.5 94 Z M48.5 64 L51.5 64 L51.5 95 L48.5 95 Z M53.5 64 L56.5 64 L61.5 94 L58.5 94 Z M58.5 64 L61.5 64 L73.5 92 L70.5 92 Z",bell:"M14 8 L86 8 L86 14 L14 14 Z M46 14 L54 14 L54 22 L46 22 Z M38 22 L62 22 L70 36 L74 70 L86 80 L86 86 L14 86 L14 80 L26 70 L30 36 Z M50 88 L54.5 93 L50 98 L45.5 93 Z"}),_e=Object.freeze({backdrop:"backdrop",root:"start",over:"start-over",begin:"start-begin",loading:"start-loading",press:"start-press",problem:"start-problem",problemText:"start-problem-text",problemReload:"start-problem-reload",gate:"start-gate",sound:"start-sound",kit:"start-kit",banner0:"start-kit-0",banner1:"start-kit-1",banner2:"start-kit-2",kitMark:"start-kit-mark",kitName:"start-kit-name",kitTraits:"start-kit-traits",kitLine:"start-kit-line",kitIcon:"start-kit-icon",kitBlock:"start-kit-block",kitTurn:"start-kit-turn",kitAbilityName:"start-kit-ability-name",kitAbility:"start-kit-ability",kitBack:"start-kit-back",kitSelect:"start-kit-select",veil:"start-veil",cust:"start-cust",custTurn:"start-cust-turn",custHeading:"start-cust-heading",custTurnWord:"start-cust-turn-word",custBack:"start-cust-back",custBackWord:"start-cust-back-word",custChoose:"start-cust-choose",custChooseWord:"start-cust-choose-word",rise:"start-cust-rise",barKit:"start-cust-bar-kit",barKind:"start-cust-bar-kind",barElement:"start-cust-bar-element",barMade:"start-cust-bar-made",barCrest:"start-cust-bar-crest",barBig:"start-cust-bar-big",bar:"start-cust-bar"}),ao=(n,e)=>`start-cust-${n}-${e}`,Cr=n=>`start-cust-tab-${n}`,xy=n=>`start-cust-panel-${n}`,Pr=Object.freeze(["kind","colours","crest"]),Wt=Object.freeze([Object.freeze({tab:0,field:"kind",ids:Jh,group:"kind",line:"start-cust-kind-line",words:"kinds",draw:"word"}),Object.freeze({tab:0,field:"body",ids:Qh,group:"body",line:null,words:"bodies",draw:"word"}),Object.freeze({tab:1,field:"dye",ids:ep,group:"dye",line:"start-cust-dye-line",words:"dyes",draw:"chip"}),Object.freeze({tab:1,field:"finish",ids:tp,group:"finish",line:"start-cust-finish-line",words:"finishes",draw:"chip"}),Object.freeze({tab:2,field:"crest",ids:np,group:"crest",line:"start-cust-crest-line",words:"crests",draw:"tile"})]),My=Object.freeze({arc:"#c6ecfb",solar:"#fbd2b0",void:"#dccbf4"}),Rc=Object.freeze(["title","kit","customise"]),Ni=Object.freeze(["titanPlate","hunterCloak","warlockRobe"]),f0=1,Td=Object.freeze({secs:.4,reduced:.15}),Sy=[["kitName","name"],["kitTraits","traits"],["kitLine","line"],["kitAbilityName","abilityName"],["kitAbility","ability"]],_s=["banner0","banner1","banner2"],yy="range",Ad="start-pressed",Rd=Object.freeze({wait:"st-wait",go:"st-go",still:"st-still"}),by="pd_music";function Ey(){return new URL("/range/assets/OFL-D_b4SXWo.txt",import.meta.url).href}const Ma=n=>n.code==="Enter"||n.code==="NumpadEnter"||!n.code&&n.key==="Enter",lo=n=>n.code==="Space"||!n.code&&n.key===" ",Ld=n=>n.key==="Escape"||n.code==="Escape",wy=n=>{const e=/^(?:Digit|Numpad)([123])$/.exec(n.code??"")??(!n.code&&/^[123]$/.exec(n.key??"")?[0,n.key]:null);return e?Number(e[1])-1:-1},Ty=n=>{const e=n.code||n.key;return e==="ArrowLeft"?-1:e==="ArrowRight"?1:0},d0=n=>(n.code==="KeyM"||!n.code&&(n.key==="m"||n.key==="M"))&&!n.ctrlKey&&!n.metaKey&&!n.altKey,Ay=["Shift","Control","Alt","Meta","CapsLock","Fn","AltGraph"],Ry=.5;function Ly(n){try{return(n==null?void 0:n.AudioContext)??(n==null?void 0:n.webkitAudioContext)??null}catch{return null}}function Cy(n){try{return(n==null?void 0:n.localStorage)??null}catch{return null}}function Py({doc:n,win:e,search:t="",build:i=Iy(),onClose:r=()=>{},onOpen:s=()=>{},audio:a=void 0,storage:o=void 0,screens:l=["title"],input:u=null,onPick:c=()=>{},showroom:f=null,reduced:d=!1}={}){const h=l.includes("kit"),g=l.includes("customise"),_=()=>typeof u=="function"?u():u,p=()=>typeof f=="function"?f():f;let m=!1,x=!0,M=!1,E=!1,L=!1,y="title",S=null,R=0,P=0,v=0,b=null,D=!1,C=0,k=!1,F=0,N=-1,q=f0,z=!1,te=0,he=!1,be=0,Re=0,Se=0,$=f0,Y=null;const ne=4;let Q=null,Pe=null,Ee=0,Ie="tabs",ze=0,We=0,H=0,Vt=0,Ge={...yc(Ni[f0])};const tt=new Set,ie=A=>{var O;return((O=n==null?void 0:n.getElementById)==null?void 0:O.call(n,A))??null},nt=(A,O)=>{const X=ie(A);X&&(X.textContent=O)},qe=(A,O)=>{var X;(X=A==null?void 0:A.setAttribute)==null||X.call(A,"aria-pressed",O?"true":"false")},I=(A,O)=>{const X=ie(A);X&&(X.hidden=!O)},w=(A,O,X)=>{var Z;return(Z=A==null?void 0:A.classList)==null?void 0:Z.toggle(O,X)},K=()=>M&&F===0;function se(A){var O,X;if(!(!x||z)&&((O=A.stopPropagation)==null||O.call(A),!A.isComposing)){if(D){ae(A);return}if(!S){if(y==="kit"){Xe(A);return}if(y==="customise"){$t(A);return}if(d0(A)){A.repeat||ve();return}if(Ma(A)||lo(A)){if((X=A.preventDefault)==null||X.call(A),A.repeat)return;A.target&&A.target===ie(_e.sound)?ve():fe("begin")}}}}function ae(A){var X,Z;if(A.repeat)return;if(A.key==="Escape"||A.code==="Escape"){(X=A.preventDefault)==null||X.call(A),me();return}if(Ay.includes(A.key))return;const O=Ma(A)||lo(A);O&&((Z=A.preventDefault)==null||Z.call(A)),oe(O&&K())}function oe(A=!1){!D||!x||(C++,A&&(E=!0,N=R),b.unlock().then(O=>{!D||!x||(E?ke():O&&it(!0))}))}function ke(){!E||!M||!x||(E=!1,N=-1,D&&(D=!1,I(_e.gate,!1)),fe("begin"))}function me(){b==null||b.silence(),it(!1)}function Ue(){D=!0,I(_e.gate,!0),w(ie(_e.gate),"st-gate-gone",!1)}function it(A){var X;if(!D)return;D=!1;const O=ie(_e.gate);w(O,"st-gate-gone",!0),(X=O==null?void 0:O.setAttribute)==null||X.call(O,"aria-hidden","true"),ue(A)}function ue(A=!0){k||(k=!0,w(n==null?void 0:n.documentElement,Rd.go,!0),A&&(b==null||b.play()),Ve())}function ve(){!b||D||S||(b.toggle(),Ve())}function Ve(){var X;const A=ie(_e.sound);if(!A)return;const O=!!(b!=null&&b.state().wanted);(X=A.setAttribute)==null||X.call(A,"aria-pressed",O?"true":"false"),w(A,"st-sound-off",!O)}function Xe(A){var Z,le,we;if(d0(A)){A.repeat||ve();return}if(Ld(A)){(Z=A.preventDefault)==null||Z.call(A),A.repeat||Qt();return}const O=wy(A);if(O>=0){A.repeat||Bt(O,!0);return}const X=Ty(A);if(X){(le=A.preventDefault)==null||le.call(A),Bt(Math.max(0,Math.min(Ni.length-1,q+X)),!0);return}if(Ma(A)||lo(A)){if((we=A.preventDefault)==null||we.call(A),A.repeat)return;A.target&&A.target===ie(_e.kitBack)?Qt():A.target&&A.target===ie(_e.sound)?ve():fe("select")}}function ge(A=q){var X,Z,le,we;Y!==null&&de({pointerId:Y.id}),y="kit",ue(),b==null||b.carry(!0);const O=ie(_e.root);w(O,"st-on-kit",!0),w(O,"st-on-cust",!1),I(_e.kit,!0),I(_e.cust,!1),(Z=(X=ie(_e.begin))==null?void 0:X.blur)==null||Z.call(X),(le=p())==null||le.usePreset("kit"),(we=p())==null||we.setVisible(!0),Bt(A,!0)}const Ze=()=>Ni[q];function $e(){const A=yc(Ze()),O={...Ge};for(const X of Wt)tt.has(X.field)||(O[X.field]=A[X.field]);return Ge=O,Ge}function _t(A){const O=Ge[A.field],X=Gt[A.words][O];if(!X)return"";if(A.field==="kind")return X.line;const Z=A.field==="dye"?` ${Gt.wears[Ze()]}`:"";return`${X.label} · ${X.made}.${Z}`}function G(A){A.ids.forEach((O,X)=>{var le,we,xe,Be,Qe,Ne,ye;const Z=ie(ao(A.group,X));if(Z){if(qe(Z,O===Ge[A.field]),(le=Z.setAttribute)==null||le.call(Z,"aria-label",Gt[A.words][O].label),A.draw==="word"){const je=Z.firstElementChild;je&&(je.textContent=Gt[A.words][O].label)}if(A.draw==="chip"&&((xe=(we=Z.style)==null?void 0:we.setProperty)==null||xe.call(we,"--c",A.field==="dye"?ip[O].dye:cM(Ze(),O))),A.draw==="tile"){(Qe=(Be=Z.style)==null?void 0:Be.setProperty)==null||Qe.call(Be,"--c",$f[O]);const je=Z.firstElementChild;(ye=(Ne=je==null?void 0:je.firstElementChild)==null?void 0:Ne.setAttribute)==null||ye.call(Ne,"d",u0[O])}}}),A.line&&nt(A.line,_t(A))}function Te(){var Be,Qe,Ne,ye,je,Ye,pt,zt,vt;const A=Ze(),O=Xn[A].element,X=Gt.kits[A].name,Z=Gt.kinds[Ge.kind].label,le=Gt.bodies[Ge.body].label,we=lp[O],xe=ie(_e.bar);(Qe=(Be=xe==null?void 0:xe.style)==null?void 0:Be.setProperty)==null||Qe.call(Be,"--bar",$f[Ge.crest]),(ye=(Ne=xe==null?void 0:xe.style)==null?void 0:Ne.setProperty)==null||ye.call(Ne,"--tint",My[O]),(je=xe==null?void 0:xe.setAttribute)==null||je.call(xe,"aria-label",`${X}, ${Z}, ${le}, ${we}, ${Gt.risenToday}`),(pt=(Ye=ie(_e.barCrest))==null?void 0:Ye.setAttribute)==null||pt.call(Ye,"d",u0[Ge.crest]),(vt=(zt=ie(_e.barBig))==null?void 0:zt.setAttribute)==null||vt.call(zt,"d",u0[Ge.crest]),nt(_e.barKit,X),nt(_e.barKind,`${Z} · ${le}`),nt(_e.barElement,we),nt(_e.barMade,Gt.risenToday)}function J(){var O;nt(_e.custHeading,Gt.customiseHeading),Pr.forEach((X,Z)=>{const le=ie(Cr(Z));le!=null&&le.firstElementChild&&(le.firstElementChild.textContent=Gt.tabs[X])});for(const[X,Z]of[["start-cust-g-kind","kind"],["start-cust-g-body","body"],["start-cust-g-dye","dye"],["start-cust-g-finish","finish"],["start-cust-g-crest","crest"],["start-cust-g-bar","bar"]])nt(X,Gt.groups[Z]);nt("start-cust-body-note",Gt.bodyNote),nt(_e.custBackWord,Gt.back),nt(_e.custTurnWord,Gt.turn),nt(_e.custChooseWord,Gt.choose);const A=ie(_e.rise);A!=null&&A.firstElementChild&&(A.firstElementChild.textContent=Gt.rise),(O=A==null?void 0:A.setAttribute)==null||O.call(A,"aria-label",Gt.rise)}function ce(){for(const A of Wt)G(A);Te()}function Me(A,O=!1){var X,Z;Ee=Math.max(0,Math.min(Pr.length-1,A)),Pr.forEach((le,we)=>{var Be,Qe;(Qe=(Be=ie(Cr(we)))==null?void 0:Be.setAttribute)==null||Qe.call(Be,"aria-selected",we===Ee?"true":"false");const xe=ie(xy(we));xe&&(xe.hidden=we!==Ee)}),Ie="tabs",O&&((Z=(X=ie(Cr(Ee)))==null?void 0:X.focus)==null||Z.call(X))}function Le(){var O,X;const A=Wt.findIndex(Z=>Z.tab===Ee);return A<0?!1:(Ie="options",ze=A,We=Math.max(0,Wt[A].ids.indexOf(Ge[Wt[A].field])),(X=(O=ie(ao(Wt[ze].group,We)))==null?void 0:O.focus)==null||X.call(O),!0)}function ot(A,O){var X,Z;if(O){const le=Wt.map((Be,Qe)=>Be.tab===Ee?Qe:-1).filter(Be=>Be>=0),we=le.indexOf(ze),xe=le[Math.max(0,Math.min(le.length-1,we+O))];if(xe===ze)return!1;ze=xe,We=Math.max(0,Math.min(Wt[ze].ids.length-1,We))}else{const le=Math.max(0,Math.min(Wt[ze].ids.length-1,We+A));if(le===We)return!1;We=le}return(Z=(X=ie(ao(Wt[ze].group,We)))==null?void 0:X.focus)==null||Z.call(X),!0}function kt(A){const O=A==null?void 0:A.id;if(!O)return null;for(let X=0;X<Wt.length;X++)for(let Z=0;Z<Wt[X].ids.length;Z++)if(ao(Wt[X].group,Z)===O)return[X,Z];return null}function Ht(A,O){var Z;const X=A.ids[O];return!X||Ge[A.field]===X?!1:(Vt++,Ge={...Ge,[A.field]:X},tt.add(A.field),G(A),Te(),(Z=p())==null||Z.setLook(Ge),!0)}function ct(){var O,X,Z,le,we;Y!==null&&de({pointerId:Y.id}),$e(),y="customise";const A=ie(_e.root);w(A,"st-on-kit",!1),w(A,"st-on-cust",!0),I(_e.kit,!1),I(_e.cust,!0);for(const xe of[..._s,"kitBack","kitSelect"])(X=(O=ie(_e[xe]))==null?void 0:O.blur)==null||X.call(O);(Z=p())==null||Z.usePreset("customise"),(le=p())==null||le.setVisible(!0),(we=p())==null||we.setLook(Ge),J(),ce(),Me(0,!0)}function $t(A){var X,Z,le,we,xe,Be,Qe;if(d0(A)){A.repeat||ve();return}if(Ld(A)){if((X=A.preventDefault)==null||X.call(A),A.repeat)return;Ie==="options"?(Ie="tabs",(le=(Z=ie(Cr(Ee)))==null?void 0:Z.focus)==null||le.call(Z)):ge();return}if(Ma(A)||lo(A)){if((we=A.preventDefault)==null||we.call(A),A.repeat)return;const Ne=A.target;if(Ne&&Ne===ie(_e.rise)){fe("rise");return}if(Ne&&Ne===ie(_e.custBack)){ge();return}if(Ne&&Ne===ie(_e.sound)){ve();return}if(Ne&&Ne===ie(_e.custChoose)){Ie==="options"?Ht(Wt[ze],We):Le();return}const ye=kt(Ne);if(ye){Ie="options",[ze,We]=ye,Ht(Wt[ze],We);return}if(Ie==="options"){Ht(Wt[ze],We);return}const je=Pr.findIndex((Ye,pt)=>Ne===ie(Cr(pt)));je>=0&&Me(je),Le();return}const O=A.code||A.key;if(!(O!=="ArrowUp"&&O!=="ArrowDown"&&O!=="ArrowLeft"&&O!=="ArrowRight")){if((xe=A.preventDefault)==null||xe.call(A),Ie==="tabs"){if(O==="ArrowRight"){Le();return}(O==="ArrowUp"||O==="ArrowDown")&&Me(Ee+(O==="ArrowDown"?1:-1),!0);return}if(O==="ArrowLeft"&&We===0){Ie="tabs",(Qe=(Be=ie(Cr(Ee)))==null?void 0:Be.focus)==null||Qe.call(Be);return}ot(O==="ArrowRight"?1:O==="ArrowLeft"?-1:0,O==="ArrowDown"?1:O==="ArrowUp"?-1:0)}}function Qt(){var A,O,X;Y!==null&&de({pointerId:Y.id}),y="title",w(ie(_e.root),"st-on-kit",!1),w(ie(_e.root),"st-on-cust",!1),I(_e.kit,!1),I(_e.cust,!1),(A=p())==null||A.setVisible(!1);for(const Z of _s)(X=(O=ie(_e[Z]))==null?void 0:O.blur)==null||X.call(O)}function En(A){return typeof(A==null?void 0:A.clientX)=="number"&&(Q={x:A.clientX,y:A.clientY}),Q}function xr(A){const O=typeof(A==null?void 0:A.clientX)=="number"?{x:A.clientX,y:A.clientY}:Q;return!Pe||!O?!1:Math.hypot(O.x-Pe.x,O.y-Pe.y)<=ne}function qn(A,O){return En(O),xr(O)||(Pe=null,A===q)?!1:(Bt(A),!0)}function Bt(A,O=!1){var le,we,xe,Be,Qe,Ne,ye;if(A<0||A>=Ni.length)return;O&&(Pe=Q);const X=A!==q;if(q=A,be++,X&&y==="kit"){Se++;const je=ie(_e.kitBlock);w(je,"st-from-right",A>$),w(je,"st-from-left",A<$),w(je,"st-slide-a",Se%2===1),w(je,"st-slide-b",Se%2===0)}$=A;const Z=Ni[A];_s.forEach((je,Ye)=>{var zt;const pt=ie(_e[je]);w(pt,"st-chosen",Ye===A),(zt=pt==null?void 0:pt.setAttribute)==null||zt.call(pt,"aria-pressed",Ye===A?"true":"false")});for(const[je,Ye]of Sy){const pt=ie(_e[je]);pt&&(pt.textContent=Gt.kits[Z][Ye])}(we=(le=ie(_e.kitMark))==null?void 0:le.setAttribute)==null||we.call(le,"d",_y[Z]),(Be=(xe=ie(_e.kitIcon))==null?void 0:xe.setAttribute)==null||Be.call(xe,"d",vy[Z]),(Qe=p())==null||Qe.swap(Z,$e()),O&&((ye=(Ne=ie(_e[_s[A]]))==null?void 0:Ne.focus)==null||ye.call(Ne))}const ji=()=>ie(y==="customise"?_e.custTurn:_e.kitTurn),Ki=()=>x&&!z&&(y==="kit"||y==="customise");function ee(A){var O,X,Z,le;En(A),!(!Ki()||Y!==null)&&((A==null?void 0:A.button)!==void 0&&A.button!==0||(Y={id:A==null?void 0:A.pointerId,x:(A==null?void 0:A.clientX)??0},Y.id!==void 0&&((X=(O=ji())==null?void 0:O.setPointerCapture)==null||X.call(O,Y.id)),(Z=A==null?void 0:A.preventDefault)==null||Z.call(A),(le=p())==null||le.grab()))}const re=A=>Y!==null&&((A==null?void 0:A.pointerId)===void 0||Y.id===void 0||A.pointerId===Y.id);function pe(A){var O;En(A),re(A)&&((O=p())==null||O.drag(((A==null?void 0:A.clientX)??0)-Y.x))}function de(A){var O,X,Z;re(A)&&(Y.id!==void 0&&((X=(O=ji())==null?void 0:O.releasePointerCapture)==null||X.call(O,Y.id)),Y=null,(Z=p())==null||Z.drop())}function Fe(){return g?(ct(),L=!1,!0):ht(null)}function Je(){return ht({...Ge})}function ht(A){var X,Z,le,we,xe,Be,Qe;(Z=(X=_())==null?void 0:X.requestLockFresh)==null||Z.call(X);try{c(Ni[q],A)}catch{return(we=(le=_())==null?void 0:le.releaseLock)==null||we.call(le),L=!1,!1}A&&H++,Y!==null&&de({pointerId:Y.id}),(xe=p())==null||xe.setVisible(!1),Re++,z=!0,te=0,b==null||b.carry(!1),b==null||b.end();const O=ie(_e.root);for(const Ne of[..._s,"kitBack","kitSelect","custBack","custChoose","rise","sound"])(Qe=(Be=ie(_e[Ne]))==null?void 0:Be.blur)==null||Qe.call(Be);return O&&(O.inert=!0),w(O,"st-handing",!0),!0}function Ct(){var A;z=!1,Ae(!1),(A=_())!=null&&A.locked||T(!0)}function T(A){he=!!A,I(_e.veil,he),w(n==null?void 0:n.documentElement,"st-veil-up",he)}function B(A){var O,X;!x||z||((O=A.stopPropagation)==null||O.call(A),!S&&lo(A)&&((X=A.preventDefault)==null||X.call(A)))}function j(A){var X;if(!x||M||S)return;const O=`${(A==null?void 0:A.message)??""} ${((X=A==null?void 0:A.error)==null?void 0:X.message)??""}`;W(/webgl/i.test(O)?"noWebgl":"failed")}function W(A){var X;S=A,D&&(D=!1,I(_e.gate,!1)),ue(!1),I(_e.sound,!1),I(_e.loading,!1),I(_e.press,!1);const O=ie(_e.problemText);O&&(O.textContent=Gt[A]),I(_e.problemReload,A==="failed"),I(_e.problem,!0),(X=ie(_e.begin))==null||X.setAttribute("aria-disabled","true")}function V(A){I(_e.loading,A),I(_e.press,!A)}function fe(A){return!x||L||S||D?!1:A==="select"?y!=="kit"?!1:(L=!0,P++,Fe()):A==="rise"?y!=="customise"?!1:(L=!0,P++,Je()):A!=="begin"||y!=="title"?!1:M?(P++,h?(ge(),!0):(L=!0,Ae(!0),!0)):(E=!0,!1)}function Ae(A,O=!0){var Z,le,we,xe,Be,Qe,Ne;Y!==null&&de({pointerId:Y.id}),x=!1,E=!1,z=!1,(le=(Z=p())==null?void 0:Z.dispose)==null||le.call(Z),(we=p())==null||we.setVisible(!1);const X=ie(_e.root);if(w(X,"st-on-cust",!1),I(_e.cust,!1),w(n==null?void 0:n.documentElement,"start-open",!1),(Be=(xe=ie(_e.begin))==null?void 0:xe.blur)==null||Be.call(xe),(Ne=(Qe=ie(_e.sound))==null?void 0:Qe.blur)==null||Ne.call(Qe),X&&(X.inert=!0),D&&(D=!1,I(_e.gate,!1)),A?b==null||b.end():b==null||b.stop(.05),A)w(X,"st-closing",!0),X==null||X.setAttribute("aria-hidden","true"),w(ie(_e.backdrop),"gone",!0);else{X&&(X.hidden=!0);const ye=ie(_e.backdrop);ye&&(ye.hidden=!0)}w(X,"st-handing",!1),O&&(v++,r())}return{boot(){var le,we,xe,Be,Qe,Ne,ye,je,Ye,pt,zt,vt,Pn,Et,en,St,tn,an,Mr,Fn,js,Zi,Yn,ni,Ho,De,mt;if(m)return x;m=!0;const A=ie(_e.root);w(A,"st-booted",!0),w(n==null?void 0:n.documentElement,"start-open",!0);const O=ie(_e.over);O&&(O.textContent=Gt.overTitle),(xe=(we=(le=n==null?void 0:n.documentElement)==null?void 0:le.classList)==null?void 0:we.contains)!=null&&xe.call(we,Ad)&&(E=!0,w(n.documentElement,Ad,!1)),(Be=e==null?void 0:e.addEventListener)==null||Be.call(e,"error",j),(Qe=e==null?void 0:e.addEventListener)==null||Qe.call(e,"keydown",se,!0),(Ne=e==null?void 0:e.addEventListener)==null||Ne.call(e,"keyup",B,!0),(je=(ye=ie(_e.begin))==null?void 0:ye.addEventListener)==null||je.call(ye,"click",He=>{(He==null?void 0:He.detail)>1||fe("begin")}),(pt=(Ye=ie(_e.gate))==null?void 0:Ye.addEventListener)==null||pt.call(Ye,"click",()=>oe(K())),(vt=(zt=ie(_e.sound))==null?void 0:zt.addEventListener)==null||vt.call(zt,"click",He=>{var at,lt;ve(),He!=null&&He.detail&&((lt=(at=ie(_e.sound))==null?void 0:at.blur)==null||lt.call(at))}),_s.forEach((He,at)=>{var Ai,Ks,Qr,Pu;const lt=ie(_e[He]),Nt=()=>x&&!z&&y==="kit";(Ai=lt==null?void 0:lt.addEventListener)==null||Ai.call(lt,"pointerenter",Ri=>{Nt()&&qn(at,Ri)}),(Ks=lt==null?void 0:lt.addEventListener)==null||Ks.call(lt,"pointermove",Ri=>{Nt()&&qn(at,Ri)}),(Qr=lt==null?void 0:lt.addEventListener)==null||Qr.call(lt,"focus",Ri=>{Nt()&&at!==q&&Bt(at),Pe=En(Ri)}),(Pu=lt==null?void 0:lt.addEventListener)==null||Pu.call(lt,"click",Ri=>{!Nt()||(Ri==null?void 0:Ri.detail)>1||(at===q?fe("select"):Bt(at))})});for(const He of[_e.kitTurn,_e.custTurn]){const at=ie(He);(Pn=at==null?void 0:at.addEventListener)==null||Pn.call(at,"pointerdown",ee),(Et=at==null?void 0:at.addEventListener)==null||Et.call(at,"pointermove",pe);for(const lt of["pointerup","pointercancel","lostpointercapture"])(en=at==null?void 0:at.addEventListener)==null||en.call(at,lt,de)}(tn=(St=ie(_e.kitSelect))==null?void 0:St.addEventListener)==null||tn.call(St,"click",He=>{(He==null?void 0:He.detail)>1||fe("select")}),(Mr=(an=ie(_e.kitBack))==null?void 0:an.addEventListener)==null||Mr.call(an,"click",()=>{x&&!z&&y==="kit"&&Qt()});const X=()=>x&&!z&&y==="customise";Pr.forEach((He,at)=>{var lt,Nt;return(Nt=(lt=ie(Cr(at)))==null?void 0:lt.addEventListener)==null?void 0:Nt.call(lt,"click",Ai=>{X()&&!((Ai==null?void 0:Ai.detail)>1)&&Me(at,!0)})});for(const He of Wt)He.ids.forEach((at,lt)=>{var Ai,Ks;const Nt=ie(ao(He.group,lt));(Ai=Nt==null?void 0:Nt.addEventListener)==null||Ai.call(Nt,"focus",()=>{X()&&(Ie="options",ze=Wt.indexOf(He),We=lt)}),(Ks=Nt==null?void 0:Nt.addEventListener)==null||Ks.call(Nt,"click",Qr=>{!X()||(Qr==null?void 0:Qr.detail)>1||(Ie="options",ze=Wt.indexOf(He),We=lt,Ht(He,lt))})});if((js=(Fn=ie(_e.custBack))==null?void 0:Fn.addEventListener)==null||js.call(Fn,"click",()=>{X()&&ge()}),(Yn=(Zi=ie(_e.custChoose))==null?void 0:Zi.addEventListener)==null||Yn.call(Zi,"click",He=>{!X()||(He==null?void 0:He.detail)>1||(Ie==="options"?Ht(Wt[ze],We):Le())}),(Ho=(ni=ie(_e.rise))==null?void 0:ni.addEventListener)==null||Ho.call(ni,"click",He=>{(He==null?void 0:He.detail)>1||fe("rise")}),(mt=(De=ie(_e.veil))==null?void 0:De.addEventListener)==null||mt.call(De,"click",()=>{var He,at;he&&((at=(He=_())==null?void 0:He.requestLockFresh)==null||at.call(He))}),Dy(t,"dev")===yy)return Ae(!1,!1),x;const Z=a===void 0?Ly(e):a;if(typeof Z=="function"){b=uy({AudioContext:Z,storage:o===void 0?Cy(e):o,key:by,doc:n,score:hy,voices:py,sting:my,mix:gy}),I(_e.sound,!0),Ve();const He=b.probe();!E&&He!=="none"&&He!=="running"&&Ue()}return x},ready(){M||(M=!0,!S&&(V(!1),E&&x&&(E=!1,fe("begin")),x&&!D&&ue()))},update(A){var O;R+=Math.max(0,A),M&&F++,E&&D&&N>=0&&R-N>=Ry&&ke(),b==null||b.pump(),(y==="kit"||y==="customise")&&((O=p())==null||O.update(A)),z&&(te+=Math.max(0,A),te>=(d?Td.reduced:Td.secs)-1e-9&&Ct())},pick(A){return!x||y!=="kit"||z?!1:(Bt(A),!0)},pointerLock(A){A&&he&&T(!1)},skip(){return x?(Ae(!1),!0):!1},open(A="title",O={}){var we;if(!Rc.includes(A))throw new Error(`start.open: '${A}' is not built yet (built: ${Rc.join(", ")})`);const X=ie(_e.root);X&&(X.hidden=!1,X.inert=!1,(we=X.removeAttribute)==null||we.call(X,"aria-hidden")),w(X,"st-closing",!1),w(X,"st-handing",!1);const Z=ie(_e.backdrop);Z&&(Z.hidden=!1),w(Z,"gone",!1),w(n==null?void 0:n.documentElement,"start-open",!0),L=!1,S||V(!!O.loading||!M),w(n==null?void 0:n.documentElement,Rd.still,!!O.still),D||ue(!1),z=!1,T(!1);const le=x;if(x=!0,A==="kit")ge(O.kit===void 0?q:Math.max(0,Ni.indexOf(O.kit)));else if(A==="customise"){if(O.kit!==void 0&&(q=Math.max(0,Ni.indexOf(O.kit))),O.look)for(const xe of Wt)xe.ids.includes(O.look[xe.field])&&(Ge={...Ge,[xe.field]:O.look[xe.field]},tt.add(xe.field));if(y!=="kit"&&Bt(q),ct(),O.tab!==void 0){const xe=Pr.indexOf(O.tab);Me(xe>=0?xe:Number.isInteger(O.tab)?O.tab:0,!0)}}else Qt();return le||s(),!0},music:{continue:(A=!0)=>b==null?void 0:b.carry(A),stop:A=>(b==null?void 0:b.stop(A))??!1},state(){return{open:x,screen:y,ready:M,queued:E,busy:L,problem:S,clock:R,acts:P,closes:v,build:i,licence:Ey(),gate:D,gatePresses:C,going:k,frames:F,sound:(b==null?void 0:b.state())??null,kit:Ni[q],handing:z,veil:he,picks:be,selects:Re,slides:Se,turning:Y!==null,tab:Pr[Ee],zone:Ie,cursor:[ze,We],look:{...Ge},rises:H,chooses:Vt,touched:[...tt]}},get isOpen(){return x},get handing(){return z},get showsBody(){return x&&!z&&(y==="kit"||y==="customise")}}}function Iy(){return"a160f32"}function Dy(n,e){const t=typeof n=="string"?n.replace(/^\?/,""):"";for(const i of t.split("&")){const[r,s=""]=i.split("=");if(r===e)try{return decodeURIComponent(s)}catch{return s}}return null}const Cd=(n,e)=>n?JSON.stringify(uu(n,e)):"",Pd=Object.freeze({risen:Object.freeze({height:.81,top:.094,x:.262}),kit:Object.freeze({height:.875,top:.056,x:.227}),customise:Object.freeze({height:.88,top:.06,x:.24})}),h0=4.2,p0=.93,Id=1.8839,Uy=-.0541,vs=.18,ky=.008,m0=Object.freeze({wait:2,secs:.6}),Dd=.12,Ud=Object.freeze({w:960,h:540,query:"(max-width: 959.98px), (max-height: 539.98px)"}),Ny=Object.freeze([-3,4,4]),Oy="hand",g0=Object.freeze({at:Object.freeze([0,-.085,.015]),pitch:1,yaw:Math.PI});function Fy(n,e){const t=Math.min(n/1280,e/720);return{s:t,x:(n-1280*t)/2,y:(e-720*t)/2,w:1280*t,h:720*t}}function By(n,e,t,i){const r=Fy(e,t),s=i.height*r.h*h0/(Id-Uy);n.fov=2*Math.atan(t/(2*s))*180/Math.PI,n.aspect=e/t;const a=r.x+i.x*r.w,o=r.y+i.top*r.h+s*(Id-p0)/h0;n.setViewOffset(e,t,e/2-a,t/2-o,e,t),n.position.set(0,p0,h0),n.lookAt(0,p0,0),n.updateProjectionMatrix(),n.updateMatrixWorld()}function zy({materials:n,reduced:e=!1}={}){const t=new Po;t.add(new Za(3949127,.85));const i=new Ka(16777215,1.6);i.position.set(...Ny),t.add(i),t.add(new ja(14674158,3813928,.9));const r=new _n(30,16/9,.1,20),s=()=>{const C=hu(Oo.find(k=>k.id===Oy),{icon:!0,solidMaterial:n.solid,glowMaterial:n.glow});return C.group.position.set(...g0.at),C.group.rotation.set(g0.pitch,g0.yaw,0),C};let a=s(),o=null,l=null,u=null,c="",f=vs,d=0,h="kit",g=[1280,720],_=0,p=!1,m=!1,x=null,M=1,E,L=null,y=!1,S=0,R=-1,P=0;function v(){if(!(x!=null&&x.style))return;const C=M>=1?"":String(M.toFixed(3));if(C!==E)try{x.style.opacity=C,E=C}catch{}}function b(){o&&(o.pose(e?0:d,{base:"preview"}),o.root.position.set(0,0,0),o.root.rotation.set(0,f,0),o.root.updateMatrixWorld(!0))}const D={scene:t,camera:r,get gun(){return a},show(C,k=!1){return C===l&&!k?!1:(a||(a=s()),a.group.removeFromParent(),o&&(t.remove(o.root),o.dispose()),o=No(C,n,u),l=C,c=Cd(C,u),_++,o.rig.bones.handR.add(a.group),t.add(o.root),b(),!0)},swap(C,k=void 0){return k!==void 0&&(u=k??null),C===l&&L===null?D.setLook(u):e||!o||!p||m?(L=null,M=1,v(),D.show(C)):C===l?(L=null,!1):(L=C,!0)},setLook(C){return u=C??null,!o||L!==null||Cd(l,u)===c?!1:D.show(l,!0)},setVisible(C){p=!!C,p||(L!==null&&(D.show(L),L=null),M=1,v())},update(C){const k=Math.max(0,C);if(d+=k,L!==null?(M-=k/Dd,M<=0&&(M=0,D.show(L),L=null)):M<1&&(M=Math.min(1,M+k/Dd)),v(),!y&&R>=0){R+=k;const F=Math.min(1,Math.max(0,(R-m0.wait)/m0.secs));R>=m0.wait&&(f=P+(vs-P)*(.5-.5*Math.cos(Math.PI*F))),F>=1&&(R=-1,f=vs)}b()},resize(C,k){g=[C||1280,k||720],m=g[0]<Ud.w||g[1]<Ud.h,By(r,g[0],g[1],Pd[h])},usePreset(C){return Pd[C]?(h=C,D.resize(...g),!0):!1},view(C=vs){y=!1,R=-1,f=C,b()},grab(){y=!0,R=-1,S=f},drag(C){return y?(f=S+C*ky,b(),!0):!1},drop(){if(!y||(y=!1,e))return!1;const C=Math.PI*2;return P=vs+((f-vs)%C+C*1.5)%C-Math.PI,f=P,R=0,!0},render(C){C.setClearColor(0,0),x=C.domElement??x,o&&(o.root.visible=p&&!m),v(),C.render(t,r)},meshes(){const C=[];return o==null||o.root.traverseVisible(k=>{k.isMesh&&C.push(k)}),C},dispose(){var C,k,F,N;a==null||a.group.removeFromParent(),o&&(t.remove(o.root),o.dispose()),o=null,l=null,L=null,M=1,v(),(k=(C=a==null?void 0:a.rig)==null?void 0:C.dispose)==null||k.call(C);for(const q of(a==null?void 0:a.extras)??[])(N=(F=q.geometry)==null?void 0:F.dispose)==null||N.call(F);return a=null,!0},state(){return{garment:l,appearance:u,yaw:f,preset:h,builds:_,visible:p,clock:d,reduced:e,compact:m,alpha:M,swapTo:L,dragging:y,settling:R>=0}}};return D.resize(...g),D}var ih,rh;const mp=((rh=(ih=globalThis.matchMedia)==null?void 0:ih.call(globalThis,"(prefers-reduced-motion: reduce)"))==null?void 0:rh.matches)??!1;let Kr=null,It=null;var sh;const kn=Py({doc:document,win:globalThis,search:((sh=globalThis.location)==null?void 0:sh.search)??"",onClose:()=>Vb(),onOpen:()=>{$i=!0},screens:Rc,input:()=>It,showroom:()=>Kr,onPick:(n,e)=>cl(n,e),reduced:mp});let $i=kn.boot();const tl=document.getElementById("view"),sn=new Zc({canvas:tl,antialias:!0});sn.setPixelRatio(Math.min(devicePixelRatio||1,2));sn.setSize(innerWidth||1280,innerHeight||720,!1);sn.outputColorSpace=Gn;sn.toneMapping=Nc;sn.toneMappingExposure=1;x2(sn);const Mt=new Po;Mt.background=new ut(1053204);const Lt=new _n(70,(innerWidth||1280)/(innerHeight||720),.05,200),gu=1.7,gn=new _n(70,(innerWidth||1280)/(innerHeight||720),.05,200);Mt.add(new Za(3949127,.85));const gp=new Ka(16777215,1.6);gp.position.set(4,8,6);Mt.add(gp);Mt.add(new ja(14674158,3813928,.9));const ft={halfW:7.5,wallH:4.6,near:2,far:-24},nl=(ft.near+ft.far)/2,il=ft.near-ft.far,_u=_r(ft.halfW*2,.2,il,yi.floorTimber,{castShadow:!1});_u.position.set(0,-.1,nl);Mt.add(_u);const vu=_r(ft.halfW*2+.4,.2,il,yi.ceiling,{castShadow:!1});vu.position.set(0,ft.wallH+.1,nl);Mt.add(vu);const xu=_r(.2,ft.wallH,il,yi.wall);xu.position.set(-ft.halfW-.1,ft.wallH/2,nl);Mt.add(xu);const Mu=_r(.2,ft.wallH,il,yi.wall);Mu.position.set(ft.halfW+.1,ft.wallH/2,nl);Mt.add(Mu);const Su=_r(ft.halfW*2+.4,ft.wallH,.2,yi.wallUpper);Su.position.set(0,ft.wallH/2,ft.far-.1);Mt.add(Su);const yu=_r(ft.halfW*2+.4,ft.wallH,.2,yi.wallUpper);yu.position.set(0,ft.wallH/2,ft.near+.1);Mt.add(yu);const _p=[xu,Mu,Su,yu,_u,vu];for(const n of[-5,-10,-20]){const e=_r(ft.halfW*2,.01,.06,yi.trim,{castShadow:!1,receiveShadow:!1});e.position.set(0,.001,n),Mt.add(e)}const vp=-2.5,xp=_r(.05,.01,vp-ft.far,yi.trim,{castShadow:!1,receiveShadow:!1});xp.position.set(0,.001,(vp+ft.far)/2);Mt.add(xp);const bu=Object.fromEntries([...QM,...LS].map(n=>[n.id,n])),Hy=(n,e)=>e*Math.tan(Ro.degToRad(n)),Gy=[["boss",-3.5,20],["captain",-8.5,10],["servitor",-13,20],["shank",-19,15],["vandal",-27,10],["dreg",-36,5],["warlord",4,20],["champion",8.5,10],["rival",13,20],["outrider",19,15],["turret",27,10],["levy",36,5]],Ei=Gy.map(([n,e,t],i)=>HS(bu[n],{scene:Mt,x:Hy(e,t),z:-t,index:i})),_0={x:0,z:0};let Oe=0;const rl=70,Ti=Oo.map(n=>({id:n.id,label:n.label,damage:n.damage,precision:n.precision,ammoType:n.ammoType,reserveCap:n.reserveCap,burstCycle:n.burstCycle??0,stats:{...n.stats,reloadTime:n.reload.clip*n.reload.seat}})),Gi=Ti.map(n=>k2(n.stats));let ei=0,Ft=Gi[0];const sl="hunterCloak",gt=ES({hipFov:rl,classId:sl,buildProp:bM}),ti=G2({model:gt.rig,rest:dd,aim:dd,stowDrop:0,drawTime:0,aimTime:0,fov:Tc,keyIntensity:1.6,fillIntensity:.12});ti.scene.add(new ja(14674158,3813928,.9));ti.camera.far=3;ti.camera.updateProjectionMatrix();ti.draw();const Eu=n=>n.reloading?{...n,reloading:!1,reloadEndsAt:0}:n;function Ds(n){n===ei||!Ti[n]||At.locks(Oe).swap||gt.requestSwap(n,Oe)&&(Gi[ei]=Eu(Ft),ei=n,Ft=Gi[n],Xt.fire("switch","weapon"))}const Vy=new vn(.02,.02,1),Mp=new Sn({color:16773824,transparent:!0,opacity:0}),vo=new Rt(Vy,Mp);vo.frustumCulled=!1;Mt.add(vo);let Sp=-1/0;const kd=new U,Nd=new U,Wy=new U(0,0,1);function Xy(n,e){const t=n.distanceTo(e);Nd.copy(n).add(e).multiplyScalar(.5),vo.position.copy(Nd),kd.copy(e).sub(n).normalize(),vo.quaternion.setFromUnitVectors(Wy,kd),vo.scale.set(1,1,Math.max(t,.01)),Sp=Oe+.05}const ol=new Rt(Ja.sphere,new Sn({color:16769162}));ol.scale.setScalar(1e-4);Mt.add(ol);let yp=-1/0,bp=.06;function al(n,e=.06){ol.position.copy(n),yp=Oe+(e>.3?.28:e>.12?.18:.09),bp=e}let Od=0;function Ep(n,e=!1){const t=document.getElementById("hitmarker");t&&(t.classList.remove("fade"),t.classList.toggle("kill",n),t.classList.toggle("crit",e&&!n),t.offsetWidth,t.classList.add("show"),clearTimeout(Od),Od=setTimeout(()=>{t.classList.remove("show"),t.classList.add("fade")},60))}const As=new Bh;As.far=100;const qy=Ro.degToRad(1.4),Yy=Ro.degToRad(.22),Fd=new U,v0=new U,Bd=new U;function $y(n){const e=gt.adsE>=.9?Yy/gt.magnification:qy;if(e<=0)return;const t=Math.random()*Math.PI*2,i=Math.random()*e;Fd.set(Math.abs(n.y)<.99?0:1,Math.abs(n.y)<.99?1:0,0),v0.crossVectors(n,Fd).normalize(),Bd.crossVectors(v0,n).normalize(),n.addScaledVector(v0,Math.cos(t)*i).addScaledVector(Bd,Math.sin(t)*i).normalize()}const jy=Ei.flatMap(n=>n.meshes),Ky=new Map(Ei.flatMap(n=>n.meshes.map(e=>[e,n])));function bo(n){for(const e of n.intersectObjects(jy,!1)){const t=Ky.get(e.object);if(t.health.dead)continue;const i=GS(t,e);if(i)return{target:t,point:e.point,crit:i.crit}}return null}function Fo(n,e,t,i=!1){const r=VS(n,{amount:e,source:t,at:Oe,crit:i});return r.killed&&ab(pu(n,0),t==="player-super"?"super":"weapon"),r}function Zy(n){const e=new U,t=new U;ti.ray(Lt,e,t),$y(t),As.set(e,t);const i=bo(As);let r;if(i){r=i.point;const s=Ti[ei],a=i.crit?s.damage*s.precision:s.damage,o=(Oe<wu?a*lb:a)*At.weaponDamageScale(),{killed:l}=Fo(i.target,o,"player",i.crit);Ep(l,i.crit)}else{const s=As.intersectObjects(_p,!1);r=s.length?s[0].point:e.clone().addScaledVector(t,As.far)}al(r),Xy(gt.muzzleWorld(Lt),r),gt.onShot((n==null?void 0:n.at)??Oe)}const Jy=wS();let Sa=-1/0;function wp(n=At.locks(Oe)){const e=Ti[ei],t=It.down.has("Mouse0")||To.fire;let i=It.pressed.has("Mouse0")||To.fire;const r=gt.busy||n.fire;r?(i||t)&&(Sa=Oe):Sa>-1/0&&((t||Oe-Sa<=Oo[ei].readyTime+dp)&&(i=!0),Sa=-1/0),!r&&t&&gt.reloading&&!$h(Ft,Oe)&&gt.cutReload(Oe);const s=Jy.pull(Ft,e,Oe,{held:t,pressed:i,blocked:r});Ft=s.state,s.shots.length&&gt.reloading&&gt.cutReload(Oe);for(const a of s.shots)Zy(a);for(const a of s.events)(a.type==="dry"||a.type==="emptied")&&Eo();!r&&t&&Ft.loaded<=0&&!Ft.reloading&&Eo()}let po=-1/0;function Eo(){if(gt.busy||At.locks(Oe).reload)return;const n=F2(Ft,Oe);Ft=n.state,n.events.some(e=>e.type==="reloading")&&gt.startReload(Oe)}const Wr={melee:{cooldown:4,readyAt:0},grenade:{cooldown:14,readyAt:0},class:{cooldown:22,readyAt:0}},Qy=n=>Oe>=Wr[n].readyAt,eb=n=>{Wr[n].readyAt=Oe+Wr[n].cooldown};let Wn=0;const tb=.34;let fr=0;const nb=.25,zd=8,Us=[],ib=14,rb=.7;function sb(n){const e=new Rt(Ja.box,new Yi({color:5163386,emissive:1989684,emissiveIntensity:1.1,roughness:.55}));e.scale.set(.16,.16,.16),e.position.set(n.x,.14,n.z),Mt.add(e),Us.push({mesh:e,bornAt:Oe})}function ob(n){for(let e=Us.length-1;e>=0;e--){const t=Us[e];t.mesh.rotation.y+=n*1.6,t.mesh.position.y=.14+Math.sin((Oe-t.bornAt)*3)*.03;const i=t.mesh.position.x-Ke.x,r=t.mesh.position.z-Ke.z,s=Math.hypot(i,r)<rb,a=Oe-t.bornAt>ib;s&&(Ti.forEach((o,l)=>{if(o.ammoType!=="special")return;const u=o.reserveCap??1/0;l===ei?Ft={...Ft,reserve:Math.min(u,Ft.reserve+zd)}:Gi[l]={...Gi[l],reserve:Math.min(u,Gi[l].reserve+zd)}}),Xt.fire("pickup","special-ammo")),(s||a)&&(Mt.remove(t.mesh),Us.splice(e,1))}}function ab(n,e="weapon"){if(e!=="super"){const t=Wn>=1;Wn=Math.min(1,Wn+tb),!t&&Wn>=1&&Xt.fire("flag","super-ready")}fr>=1?(n&&sb(n),fr=0):fr=Math.min(1,fr+nb),Lb()}let wu=-1/0;const lb=1.6,cb=6;function ub(){wu=Oe+cb,Xt.fire("ability","class")}const fb=2.6,db=80;function hb(){const n=new U,e=new U;ti.ray(Lt,n,e);const t=pr.strikeRaycast(n,e,fb);if(t){const{killed:i}=Fo(t.target,db,"player-melee");al(t.point,.1),Ep(i),Xt.fire("ability","melee")}}const pb=14,x0=3.2,Hd=120,mb=2.5,Lc=new Yi({color:16734780,emissive:16742972,emissiveIntensity:2,roughness:.5,metalness:0}),Vi=new Rt(Ja.sphere,Lc);Vi.scale.setScalar(.16);Vi.visible=!1;Mt.add(Vi);const Cc=new U,gb=.6,Gd=new U,_b=new U;let wo=!1,Tp=-1/0;function vb(n,e,t){wo&&Ap(Vi.position.clone()),Lc.color.set(t),Lc.emissive.set(t),Vi.position.copy(n),Cc.copy(e).multiplyScalar(7.5).add(new U(0,4.2,0)),Vi.visible=!0,wo=!0,Tp=Oe,Xt.fire("ability","grenade")}function Ap(n){al(n,.75),Gd.set(Ke.x,Ke.y+1,Ke.z);const e=Gd.distanceTo(n);e<x0&&Cp(Hd*gb*(1-.5*(e/x0)),"player-grenade");for(const t of Ei)t.health.dead||pu(t,.5,_b).distanceTo(n)>x0||Fo(t,Hd,"player-grenade")}function xb(n){if(!wo)return;Cc.y-=pb*n,Vi.position.addScaledVector(Cc,n);const e=Vi.position;(e.y<=.1||e.x<-ft.halfW+.15||e.x>ft.halfW-.15||e.z<ft.far+.15||e.z>ft.near-.15||Oe-Tp>mb)&&(Ap(e.clone()),Vi.visible=!1,wo=!1)}function Mb(){const n=new U,e=new U;ti.ray(Lt,n,e),al(n.clone().addScaledVector(e,3.5),.6);for(const t of Ei)t.health.dead||Fo(t,99999,"player-super");Xt.fire("ability","super")}const Tu=70,ll=130,Vd=2.75,Sb=2.25,yb=Tu/2.7,bb=ll/2.75;let rn=au({max:Tu,shield:ll}),Rp=-1/0,Lp=!1;function Cp(n,e="world"){if(rn.dead)return;const{state:t,events:i}=qh(rn,{amount:n,source:e});rn=t,Rp=Oe,i.some(r=>r.type==="died")&&(rn=au({max:Tu,shield:ll}),Ru("r-down"))}function Eb(n){if(rn.dead)return;const e=Oe-Rp;e>=Vd&&rn.hp<rn.max&&(rn=Sc(rn,{amount:yb*n,source:"regen"}).state),e>=Vd+Sb&&rn.shield<rn.shieldMax&&(rn=Sc(rn,{shield:bb*n,source:"regen"}).state)}const Pp={ghost:{name:"Ghost"}},Au={"r-hello":{speaker:"ghost",text:"Range is live. Five, ten and twenty metres. Let's see what your hands remember."},"r-targets":{speaker:"ghost",text:"Good. They stand back up on their own. Try something else in your kit."},"r-switch":{speaker:"ghost",text:"Feel the difference? Grenade next. Lob it, and not at your own feet."},"r-grenade":{speaker:"ghost",text:"Loud. Now get in close and hit one. Your fists count too."},"r-melee":{speaker:"ghost",text:"That'll do. Your class ability now. It doesn't last, so make it count."},"r-class":{speaker:"ghost",text:"Every kill feeds your Super. Break a few more and I'll tell you when it's ready."},"r-super-ready":{speaker:"ghost",text:"There. That's your Super. Let it out."},"r-super":{speaker:"ghost",text:"That's what you are now. Kills build special ammo too. Watch for the drop."},"r-ammo":{speaker:"ghost",text:"Special ammo. The hand cannon's fed. The range is yours."},"r-down":{speaker:"ghost",text:"Up you get. Maybe keep your own grenades a bit further away."}};for(const[n,e]of Object.entries(Au)){if(!Pp[e.speaker])throw new Error(`comms: line '${n}' has unknown speaker '${e.speaker}'`);if(e.text.length>bd)throw new Error(`comms: line '${n}' is ${e.text.length} chars, over MAX_LINE ${bd}`)}const An={queue:[],current:null,until:0,endedAt:-1/0},wb=.8,Tb=n=>Math.max(2.4,.8+n.length*.05);function Ru(n){const e=Au[n];if(!e)throw new Error(`comms: no line '${n}'`);An.queue=[{id:n,...e}]}function Ab(){if(An.current&&Oe>=An.until){const n=An.current;An.current=null,An.endedAt=Oe,Xt.fire("vo",n.id)}!An.current&&An.queue.length&&(An.current=An.queue.shift(),An.until=Oe+Tb(An.current.text))}const Ip={id:"test-range",title:"Test Range",acts:[{id:"range",title:"Test Range",scenes:[{id:"drills",title:"Drills",beats:[{id:"r-01",trigger:"now",vo:"r-hello"},{id:"r-02",trigger:"kill",at:"target",count:3,progress:"kills",label:"Enemies defeated",objective:"Defeat enemies",vo:"r-targets"},{id:"r-03",trigger:"switch",at:"weapon",key:"1 2 3",objective:"Switch weapons",vo:"r-switch"},{id:"r-04",trigger:"ability",at:"grenade",key:"Q",objective:"Throw a grenade",vo:"r-grenade"},{id:"r-05",trigger:"ability",at:"melee",key:"C",objective:"Melee a target",vo:"r-melee"},{id:"r-06",trigger:"ability",at:"class",key:"V",objective:"Use your class ability",vo:"r-class"},{id:"r-07",trigger:"flag",at:"super-ready",progress:"super",label:"Super energy",objective:"Charge your Super",vo:"r-super-ready"},{id:"r-08",trigger:"ability",at:"super",key:"F",objective:"Cast your Super",vo:"r-super"},{id:"r-09",trigger:"pickup",at:"special-ammo",progress:"special",label:"Special ammo",objective:"Collect special ammo",vo:"r-ammo"}]}]}]},Rb="Free fire",M0=new Set,Xt=QS({host:{knows:n=>M0.has(n),learn:n=>M0.add(n)},knows:n=>n==="super-ready"?Wn>=1:M0.has(n),triggers:["now","flag","vo","kill","switch","ability","pickup"],onBeat:n=>{n.vo&&Ru(n.vo)}});Xt.load(Ip);for(const n of Ip.acts[0].scenes[0].beats)if(n.vo&&!Au[n.vo])throw new Error(`episode: beat '${n.id}' plays missing line '${n.vo}'`);let Rs={id:null,n:0};function Lb(){const n=Xt.beat;!n||n.trigger!=="kill"||(Rs.id!==n.id&&(Rs={id:n.id,n:0}),Rs.n+=1,Rs.n>=(n.count??1)&&Xt.fire("kill",n.at))}const Bo=new R2;It=new P2(Bo,tl);tl.addEventListener("click",()=>{$i||It.locked||It.requestLock()});tl.addEventListener("contextmenu",n=>n.preventDefault());Bo.on("input:wheel",({delta:n})=>{if($i||!It.locked)return;const e=Ti.length;Ds((ei+(n>0?1:-1)+e)%e)});Bo.on("input:pointerlock",({locked:n})=>{var e;(e=document.getElementById("hint"))==null||e.classList.toggle("gone",n),kn.pointerLock(n),!n&&!fi&&Xt.begun&&!$i&&(ul(),Op=performance.now()),n&&!Xt.begun&&Xt.begin()});const Cb=["MetaLeft","MetaRight","ControlLeft","ControlRight","AltLeft","AltRight"];Bo.on("input:key",({code:n})=>{if($i||fi||!It.locked||Cb.some(t=>It.down.has(t)))return;const e=At.locks(Oe);n==="KeyR"&&(e.reload?po=Oe:Eo()),n==="KeyQ"&&At.press("grenade"),n==="KeyC"&&At.press("melee"),n==="KeyV"&&At.press("class"),n==="KeyF"&&At.press("super"),n==="Digit1"&&Ds(0),n==="Digit2"&&Ds(1),n==="Digit3"&&Ds(2)});const Tt={yaw:0,pitch:0},Pb=1.5,Ke={x:0,z:0,y:0},Ib=4.2,Or=.35,Db=20,Ub=6.4,kb=5.6,Nb=1;let Ir=0,S0=0;const To={aim:!1,fire:!1},y0=new cn(0,0,0,"YXZ"),Wd=new U,Xd=new U,xs=new U,b0=(n,e,t)=>Math.max(e,Math.min(t,n)),Xr={solid:new Yi({vertexColors:!0,roughness:.85,metalness:0}),glow:new Sn({vertexColors:!0})},qd=new Sn({color:0});Kr=zy({materials:Xr,reduced:mp});Kr.resize(innerWidth||1280,innerHeight||720);const Ob={x:0,y:0},xo=new U;let zo=sl,Da=null,In=No(sl,Xr);In.root.visible=!1;Mt.add(In.root);const Dn=kM({room:ft,fov:rl,radius:.2}),Lu=BM({abilities:ci,moments:jr}),pr=jM({raycaster:As,strikeRay:bo,getWeapon:()=>Ft,setWeapon:n=>{Ft=n},cancelEngineReload:Eu,fp:gt,now:()=>Oe,getSuperCharge:()=>Wn,setSuperChargeValue:n=>{Wn=n},episode:Xt,moment:Dn,pitchLimit:Pb}),At=HM({scene:Mt,ROOM:ft,camera:Lt,fp:gt,runner:Lu,moment:Dn,player:Ke,view:Tt,PLAYER_RADIUS:Or,strikeRaycast:pr.strikeRaycast,now:()=>Oe,classId:()=>zo,body:()=>In,moveAxis:()=>It.axis(),ability:{ready:n=>Qy(n)&&!(n==="grenade"&&wo),use:eb},superCharge:{get:()=>Wn,set:pr.setSuperCharge},weapons:{fillMagazine:pr.fillMagazine,cancelReload:()=>{Ft=Eu(Ft)}},legacy:{throwGrenade:vb,meleeStrike:hb,ward:ub,superWipe:Mb}});let Hi=null,qr=null,fi=!1,Dp=sl,Va=null,Ua=null;const ar=document.getElementById("preview-canvas");let vi=null,Si=null,ks=null,ln=null,Pc=0,Wa=0,Up=!0;function cl(n,e=void 0){Xn[n]&&(Dp=n,e!==void 0&&(Va=e),Si&&(ln&&(Si.remove(ln.root),ln.dispose()),ln=No(n,Xr,Va),ln.pose(Pc,{base:"preview"}),ln.root.position.set(0,0,0),ln.root.rotation.set(0,Wa,0),ln.root.updateMatrixWorld(!0),Si.add(ln.root)),document.querySelectorAll("#menu-classes button").forEach(t=>t.classList.toggle("active",t.dataset.garment===n)),Da=n,kp())}function kp(){if(!Da||At.busy)return;const n=Da;Da=null,(n!==zo||Va!==Ua)&&Cu(n)}function Cu(n){zo=n,Ua=Va,gt.setClass(n,Ua),Mt.remove(In.root),In.dispose(),In=No(n,Xr,Ua),In.root.visible=!1,Mt.add(In.root),At.setClass(n)}function Fb(){if(vi||!ar)return;vi=new Zc({canvas:ar,antialias:!0,alpha:!0}),vi.setPixelRatio(Math.min(devicePixelRatio||1,2)),vi.outputColorSpace=Gn,vi.toneMapping=Nc,Si=new Po,Si.add(new Za(3949127,.85));const n=new Ka(16777215,1.6);n.position.set(2,3,3),Si.add(n),Si.add(new ja(14674158,3813928,.9)),ks=new _n(40,1,.05,10),ks.position.set(0,1.1,3.2),ks.lookAt(0,.94,0),cl(Dp)}function Np(){const n=document.getElementById("menu-inventory");n&&(n.innerHTML=Ti.map((e,t)=>{const i=t===ei?Ft:Gi[t],r=i.reserve===1/0?"∞":i.reserve;return`<div class="inv-slot${t===ei?" equipped":""}" data-index="${t}">
      <span>${e.label} &middot; ${i.loaded}/${r}</span>
      <span class="ammo-tag ${e.ammoType}">${e.ammoType}</span>
    </div>`}).join(""),n.querySelectorAll(".inv-slot").forEach(e=>{e.addEventListener("click",()=>{Ds(Number(e.dataset.index)),Np()})}))}function ul(){fi=!fi;const n=document.getElementById("menu");if(n&&(n.hidden=!fi),fi){It.releaseLock(),Fb();const e=(ar==null?void 0:ar.clientWidth)||360,t=(ar==null?void 0:ar.clientHeight)||220;vi&&(vi.setSize(e,t,!1),ks.aspect=e/t,ks.updateProjectionMatrix()),Np()}else It.requestLockFresh(),Wn>=1&&Gp()}let Op=-1/0;Bo.on("action:cancel",()=>{$i||fi&&performance.now()-Op<300||ul()});var oh;(oh=document.getElementById("menu-resume"))==null||oh.addEventListener("click",()=>{fi&&ul()});document.querySelectorAll("#menu-classes button").forEach(n=>{n.addEventListener("click",()=>cl(n.dataset.garment))});const Xa=n=>Object.keys(Xn).find(e=>Object.values(Xn[e]).includes(n));function Bb(n,e=0){if(kn.skip(),n===null){Hi&&(Dn.finish(Oe-jr[ci[Hi.id].camera].blendBack-.001),Dn.update(Oe,{feet:xo.set(Ke.x,Ke.y,Ke.z),yaw:Tt.yaw,pitch:Tt.pitch})),Hi=null,In.root.visible=Dn.active,Zr();return}const t=ci[n];if(!(t!=null&&t.camera))throw new Error(`poseAt: '${n}' is not a third-person ability`);Xa(n)!==zo&&Cu(Xa(n)),Hi={id:n,t:e},Dn.start(t.camera,Oe-jr[t.camera].blendOut-.001),Dn.update(Oe,{feet:xo.set(Ke.x,Ke.y,Ke.z),yaw:Tt.yaw,pitch:Tt.pitch}),In.root.visible=!0,In.pose(Oe,{base:"ready",clip:n,t:e,feet:xo,facing:Tt.yaw}),Zr()}function zb(n,e=0,{charged:t=!0}={}){kn.skip();const i=ci[n];if(gt.swapping)throw new Error("fpAt: a swap is running");Xa(n)!==zo&&Cu(Xa(n));const r=i.seconds+(i.camera?jr[i.camera].blendBack:0);gt.act(n,Oe-e*i.seconds,r,{charged:t}),gt.update(0,Oe,{}),Zr()}function Ic(n){kn.skip(),Mt.overrideMaterial=n?qd:null,Mt.background.set(n?16777215:1053204),Si&&(Si.overrideMaterial=n?qd:null,vi.setClearColor(n?16777215:0,n?1:0))}let Dr=null;function Hb(n){if(kn.skip(),Dr){for(const l of Dr.items)Mt.remove(l.root),l.dispose();for(const[l,u]of Dr.visible)l.visible=u;Ic(!1),qr=null,Dr=null}if(!n){Zr();return}const{bodies:e,distance:t=8,eye:i=gu,yaw:r=0,spacing:s=1.2,silhouette:a=!1}=n;Dr={items:[],visible:new Map};const o=new Set;e.forEach((l,u)=>{let c;if(Xn[l])c=No(l,Xr),c.pose(0,{base:"ready"});else{const f=Uo(bu[l].spec,{solidMaterial:Xr.solid,glowMaterial:Xr.glow});c={root:f.root,dispose:()=>f.dispose()}}c.root.position.x=(u-(e.length-1)/2)*s,c.root.position.z=-t,c.root.rotation.y=r,c.root.updateMatrixWorld(!0),Mt.add(c.root),o.add(c.root),Dr.items.push(c)});for(const l of Mt.children)l!==At.effectsRoot&&(Dr.visible.set(l,l.visible),l.visible=o.has(l)||!a&&(l.isLight||_p.includes(l)));At.clearWorld(),Ic(a),qr={position:[0,i,0],target:[0,i,-t]},Zr()}function Gb(n){kn.skip(),Up=n===null,n!==null&&(Wa=n)}function Fp(n){if($i){It.consumeMouse(),kn.update(n),It.endFrame();return}if(fi){ln&&(Pc+=n,Up&&(Wa+=n*.6),ln.pose(Pc,{base:"preview"}),ln.root.position.set(0,0,0),ln.root.rotation.set(0,Wa,0),ln.root.updateMatrixWorld(!0)),It.endFrame();return}Oe+=n,kp();const e=At.locks(Oe),t=It.locked&&It.down.has("Mouse2")||To.aim;t&&(zp=Oe),gt.setAim(t&&!e.aim);const{dx:i,dy:r}=It.consumeMouse();let s=0,a=0;if(pr.notePitch(Tt.pitch),It.locked){const h=It.mouse.sensitivity*(Lt.fov/rl);s=-i*h,a=-r*h,Tt.yaw+=s,Tt.pitch+=a;const g=gt.recoil;if(g.pitch>0&&a<0){const m=Math.min(g.pitch,-a);g.pitch-=m,Tt.pitch+=m}if(g.yaw>0&&s<0){const m=Math.min(g.yaw,-s);g.yaw-=m,Tt.yaw+=m}if(g.yaw<0&&s>0){const m=Math.min(-g.yaw,s);g.yaw+=m,Tt.yaw-=m}const[_,p]=pr.pitchWindow();Tt.pitch=b0(Tt.pitch,_,p)}Lt.rotation.set(Tt.pitch+gt.recoil.pitch,Tt.yaw+gt.recoil.yaw,0,"YXZ"),y0.set(0,Tt.yaw,0,"YXZ");const o=e.move==="free"?It.axis():Ob;Wd.set(0,0,-1).applyEuler(y0),Xd.set(1,0,0).applyEuler(y0),xs.set(0,0,0).addScaledVector(Wd,o.y).addScaledVector(Xd,o.x),xs.lengthSq()>0&&xs.normalize();const l=xs.lengthSq()>0?Ib*(1-.25*gt.adsE):0;let u=null;e.move==="driven"?(u=At.drive(n,Ke),u&&(Ir=u.velY)):(Ke.x+=xs.x*l*n,Ke.z+=xs.z*l*n),Ke.x=b0(Ke.x,-ft.halfW+Or,ft.halfW-Or),Ke.z=b0(Ke.z,ft.far+Or,ft.near-Or);for(const h of Ei){if(h.health.dead)continue;const g=Ke.x-h.root.position.x,_=Ke.z-h.root.position.z,p=h.footprint+Or,m=g*g+_*_;if(m>=p*p)continue;const x=Math.sqrt(m);if(x<1e-6){Ke.z=h.root.position.z+p;continue}Ke.x=h.root.position.x+g/x*p,Ke.z=h.root.position.z+_/x*p}At.pushOut(Ke,Or);const c=Ke.y<=0;It.wasPressed("jump")&&!e.jump&&(c?(Ir=Ub,S0=0):S0<Nb&&(Ir=kb,S0++));let f=0;u||(Ir-=Db*n,Ke.y=Math.max(0,Ke.y+Ir*n),Ke.y<=0&&(c||(f=Math.max(0,-Ir)),Ke.y=0,Ir=0)),Lt.position.set(Ke.x,gu+Ke.y,Ke.z),Hi||At.onEvents(Lu.update(Oe)),At.update(n),po>-1/0&&(Oe-po>bc?po=-1/0:!At.locks(Oe).reload&&!gt.busy&&(po=-1/0,Eo())),xb(n),ob(n),Eb(n),Ab(),(It.locked||To.fire)&&wp(e),Ft=N2(Ft,Oe).state,gt.update(n,Oe,{lookYaw:s,lookPitch:a,speed:l,airborne:Ke.y>0,landed:f}),ti.update(n),Lt.fov=gt.worldFov,Lt.updateProjectionMatrix(),Lt.rotation.set(Tt.pitch+gt.recoil.pitch,Tt.yaw+gt.recoil.yaw,0,"YXZ"),Dn.update(Oe,{feet:xo.set(Ke.x,Ke.y,Ke.z),yaw:Tt.yaw,pitch:Tt.pitch}),Zr(),At.lateUpdate(Oe),Hi&&(In.pose(Oe,{base:"ready",clip:Hi.id,t:Hi.t,feet:xo,facing:Tt.yaw}),In.root.visible=!0),document.body.classList.toggle("third-person",Dn.active),document.body.classList.toggle("tp-aim",Dn.active&&At.aiming),Mp.opacity=Oe<Sp?.9:0,ol.scale.setScalar(Oe<yp?bp:1e-4);const d=document.getElementById("cross");d&&(d.style.opacity=(1-Hp(.5,.85,gt.adsE)).toFixed(3)),_0.x=Ke.x,_0.z=Ke.z;for(const h of Ei)qS(h,n,Oe,{face:_0});jS(n),Vp(n),It.endFrame()}function Bp(){if($i&&!qr&&!Hi){if(!kn.handing){Kr.render(sn);return}Lt.position.set(Ke.x,gu+Ke.y,Ke.z),Lt.rotation.set(Tt.pitch,Tt.yaw,0,"YXZ"),Zr()}sn.render(Mt,gn),!Dn.active&&!qr&&ti.pass(sn,gn),fi&&vi&&ln&&vi.render(Si,ks)}function Vb(){$i=!1,sn.setClearColor(0,1)}const Wb=new U,Xb=new jt,qb=new cn(0,0,0,"YXZ");function Zr(){if(qr)gn.position.set(...qr.position),gn.lookAt(...qr.target),gn.fov=rl;else if(Dn.active)Dn.apply(gn);else{const n=gt.camOffset;gn.position.copy(Lt.position).add(Wb.set(n.x,n.y,n.z).applyQuaternion(Lt.quaternion)),gn.quaternion.copy(Lt.quaternion).multiply(Xb.setFromEuler(qb.set(n.pitch,n.yaw,n.roll,"YXZ"))),gn.fov=Lt.fov}gn.aspect=Lt.aspect,gn.updateProjectionMatrix(),gn.updateMatrixWorld()}const Yd=132,$d=48;function Yb(){const n=document.createElement("canvas");n.width=Yd,n.height=$d;let e;try{e=new Zc({canvas:n,alpha:!0,antialias:!0,preserveDrawingBuffer:!0})}catch{return Ti.map(()=>"")}e.setClearColor(0,0);const t=new Po;t.overrideMaterial=new Sn({color:16777215});const i=new jc(-1,1,1,-1,.01,10),r=new U,s=new U,a=Oo.map(o=>hu(o,{icon:!0})).map(({group:o})=>{const l=o;t.add(l),l.updateMatrixWorld(!0);const u=new qi().setFromObject(l);u.getSize(r),u.getCenter(s);let c=r.z/2*1.08,f=r.y/2*1.08;const d=Yd/$d;return c/f>d?f=c/d:c=f*d,i.left=-c,i.right=c,i.top=f,i.bottom=-f,i.position.set(s.x+2,s.y,s.z),i.lookAt(s),i.updateProjectionMatrix(),e.render(t,i),t.remove(l),n.toDataURL("image/png")});return t.overrideMaterial.dispose(),e.dispose(),e.forceContextLoss(),a}const Dc=Yb(),E0=60,$b=Math.cos(Ro.degToRad(4)),jd=2.5,Kd=new Map,Ms=new Bh,Ss=new U,w0=new U,T0=new U,A0=new U;function jb(n,e){let t=Kd.get(n);return t||(t=document.createElement("div"),t.className=`plate ${n.rank}`,t.innerHTML=`<div class="col"><div class="name">${n.name}</div><div class="bar"><i class="fill"></i><i class="shield"></i></div></div>`,e.appendChild(t),Kd.set(n,t),t)}function Kb(){var r;const n=document.getElementById("nameplates");if(!n)return;Lt.updateMatrixWorld(),Lt.getWorldDirection(T0),Ms.set(Lt.position,T0),Ms.far=E0;const e=((r=bo(Ms))==null?void 0:r.target)??null,t=innerWidth||1280,i=innerHeight||720;for(const s of Ei){const a=jb(s,n);pu(s,.62,w0);const o=w0.distanceTo(Lt.position);let l=s===e;if(!l&&o<E0&&(A0.copy(w0).sub(Lt.position).divideScalar(o||1),A0.dot(T0)>$b)){Ms.set(Lt.position,A0),Ms.far=o;const h=bo(Ms);l=!h||h.target===s}l&&(s.plateSeenAt=Oe);const u=o<E0&&(Oe-(s.plateSeenAt??-1/0)<jd||Oe-s.lastHitAt<jd);Ss.set(s.root.position.x,s.root.position.y+s.top+.2,s.root.position.z).project(gn);const c=Ss.z<1&&Math.abs(Ss.x)<1.05&&Math.abs(Ss.y)<1.05;if(a.hidden=s.health.dead||!c,a.classList.toggle("on",u),a.hidden)continue;const f=(Ss.x*.5+.5)*t,d=(-Ss.y*.5+.5)*i;a.style.transform=`translate(${f.toFixed(1)}px, ${d.toFixed(1)}px) translate(-50%, -100%)`,a.querySelector(".fill").style.width=`${(Yh(s.health)*100).toFixed(1)}%`,a.querySelector(".shield").style.width=`${(lu(s.health)*100).toFixed(1)}%`}}function Zb(n,e,t){const i=document.getElementById(n);i&&(i.style.setProperty("--pct",`${Math.round(e*100)}%`),i.classList.toggle("ready",t))}const mo=Math.PI*2,Ls=8,R0=24,Jb=48,Qb=.8,Es=92,ys=Es*.4,Uc=[];let zp=-1/0;const eE="http://www.w3.org/2000/svg",Gr=(n,e)=>`${(100+n*Math.sin(e)).toFixed(2)} ${(100-n*Math.cos(e)).toFixed(2)}`,Zd=(n,e,t)=>`M${Gr(n,e)} A${n} ${n} 0 0 1 ${Gr(n,t)}`;function rr(n,e){const t=document.createElementNS(eE,n);for(const[i,r]of Object.entries(e))t.setAttribute(i,String(r));return t}function tE(){const n=document.getElementById("radar-svg");if(!n)return;rr("defs",{}),n.appendChild(rr("circle",{cx:100,cy:100,r:Es,fill:"rgba(12,17,22,0.38)",stroke:"rgba(255,255,255,0.24)","stroke-width":1.4})),n.appendChild(rr("circle",{cx:100,cy:100,r:ys,fill:"none",stroke:"rgba(255,255,255,0.2)","stroke-width":1.2}));const e=mo/Ls,t=Ro.degToRad(1.5);for(let i=0;i<Ls;i++){const r=(i-.5)*e+t/2,s=(i+.5)*e-t/2,a=rr("path",{d:`M${Gr(ys,r)} L${Gr(Es,r)} A${Es} ${Es} 0 0 1 ${Gr(Es,s)} L${Gr(ys,s)} A${ys} ${ys} 0 0 0 ${Gr(ys,r)} Z`,fill:"#b8452f",opacity:0}),o=(r+s)/2,l=(s-r)*.3,u=rr("g",{opacity:0});u.append(rr("path",{d:Zd(96,r,s),fill:"none",stroke:"#e04a32","stroke-width":3,opacity:.4}),rr("path",{d:Zd(96,o-l,o+l),fill:"none",stroke:"#e04a32","stroke-width":3})),n.append(a,u),Uc.push({fill:a,far:u,near:0,farValue:0})}n.appendChild(rr("path",{d:"M100 90 L107.5 109 L100 104.5 L92.5 109 Z",fill:"#4a82e6",stroke:"#a9c6f5","stroke-width":1.2,"stroke-linejoin":"round"}))}tE();const Jd=(n,e,t)=>n+(e-n)*Math.min(1,t/(e>n?.15:.4));function Hp(n,e,t){const i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)}function nE(n){var r;if((r=document.getElementById("radar"))==null||r.classList.toggle("ads",Oe-zp<Qb),!Uc.length)return;const e=new Array(Ls).fill(0),t=new Array(Ls).fill(0),i=mo/Ls;for(const s of Ei){if(s.health.dead)continue;const a=s.root.position.x-Ke.x,o=s.root.position.z-Ke.z,l=Math.hypot(a,o);if(l>Jb)continue;const u=((Math.atan2(a,-o)+Tt.yaw)%mo+mo)%mo,c=Math.round(u/i)%Ls;l>=R0*.7&&(t[c]=1),l<R0&&(e[c]=Math.max(e[c],1-l/R0))}Uc.forEach((s,a)=>{s.near=Jd(s.near,e[a],n),s.farValue=Jd(s.farValue,t[a],n),s.fill.setAttribute("opacity",(.7*Hp(0,.75,s.near)).toFixed(2)),s.far.setAttribute("opacity",s.farValue.toFixed(2))})}function Vn(n,e){n&&n.textContent!==e&&(n.textContent=e)}const iE=.7;let co,uo,L0=-1/0;function rE(n){return n!=null&&n.progress?n.progress==="kills"?`${Rs.id===n.id?Rs.n:0}/${n.count??1}`:n.progress==="super"?`${Math.round(Wn*100)}%`:n.progress==="special"?Us.length?"Dropped":`${Math.round(fr*100)}%`:"":""}function sE(n){return(n==null?void 0:n.progress)==="kills"?`${n.count??1}/${n.count??1}`:(n==null?void 0:n.progress)==="super"?"100%":(n==null?void 0:n.progress)==="special"?"Collected":""}let C0=null;function oE(){const n=document.getElementById("objective");if(!n)return;const e=n.querySelector(".obj.main"),t=n.querySelector(".obj.sub"),i=n.querySelector(".obj.value"),r=Xt.begun?Xt.over?Rb:Xt.objective:null;if(r!==co&&r!==uo&&(uo=r,co?(L0=Oe+iE,n.classList.remove("fresh"),n.classList.add("complete"),Vn(e.querySelector(".key"),""),Vn(i.querySelector(".count"),sE(C0))):L0=Oe),uo!==void 0&&Oe>=L0&&(co=uo,uo=void 0,C0=Xt.over?null:Xt.beat,n.hidden=!co,Vn(e.querySelector(".text"),co??""),n.classList.remove("complete","fresh"),n.offsetWidth,n.classList.add("fresh")),n.classList.contains("complete"))return;const s=C0,a=!!(s!=null&&s.progress);e.classList.toggle("step",a),Vn(e.querySelector(".key"),(s==null?void 0:s.key)??""),t.hidden=!a,i.hidden=!a,a&&(Vn(t.querySelector(".label"),s.label??""),Vn(i.querySelector(".count"),rE(s)))}function aE(){const n=document.getElementById("buff-ward");if(!n)return;const e=wu-Oe;n.hidden=e<=0,e>0&&Vn(n.querySelector(".time"),`${Math.ceil(e)}s`)}let Qd=ll;function lE(){var s;const n=document.getElementById("vitals");if(!n)return;const e=Yh(rn),t=lu(rn),i=rn.shield<=0;n.classList.toggle("shown",e<1||t<1),n.classList.toggle("broken",i&&e<1),n.classList.toggle("critical",i&&e<.5),i&&Qd>0&&(n.classList.remove("shattered"),n.offsetWidth,n.classList.add("shattered")),Qd=rn.shield,n.style.setProperty("--hp",e.toFixed(3)),n.style.setProperty("--sh",t.toFixed(3)),(s=document.getElementById("zone"))==null||s.classList.toggle("on",Lp);const r=document.getElementById("vignette");r&&(r.style.opacity=i?Math.min(.9,(1-e)*1.2).toFixed(2):"0")}function cE(){const n=document.getElementById("comms"),e=document.getElementById("subtitle");if(!n||!e)return;const t=An.current,i=!!t||Oe-An.endedAt<wb;n.classList.toggle("on",i),e.classList.toggle("on",i),t&&(Vn(n.querySelector(".speaker"),Pp[t.speaker].name),Vn(e.querySelector(".line"),t.text))}let eh=null;function uE(){const n=document.getElementById("weapons");return n?(n.innerHTML=Ti.map((e,t)=>`
    <div class="wpn">
      ${Dc[t]?`<img class="icon" alt="" src="${Dc[t]}">`:'<span class="icon"></span>'}
      <span class="ammo-type ${e.ammoType}"><i></i><i></i><i></i></span>
      <span class="reserve"></span>
      <span class="mag"></span>
      ${e.ammoType==="special"?'<div class="meter"><div class="fill"></div></div>':""}
    </div>`).join(""),[...n.querySelectorAll(".wpn")]):[]}let th=!1;function Gp(){const n=document.getElementById("super-flash");n&&(n.classList.remove("show"),n.offsetWidth,n.classList.add("show"))}function fE(){const n=document.getElementById("super");if(n){const t=Wn>=1;n.style.setProperty("--charge",Wn.toFixed(3)),n.classList.toggle("ready",t),t&&!th&&Gp(),th=t}for(const[t,i]of[["ab-grenade","grenade"],["ab-melee","melee"],["ab-class","class"]]){const r=Math.max(0,Wr[i].readyAt-Oe),s=Wr[i].cooldown>0?r/Wr[i].cooldown:0;Zb(t,s,r<=0)}eh??(eh=uE());const e="∞";eh.forEach((t,i)=>{const r=i===ei,s=r?Ft:Gi[i],a=s.reserve===1/0;t.classList.toggle("active",r),t.style.order=r?"0":String(i+1),r?(Vn(t.querySelector(".mag"),String(s.loaded)),Vn(t.querySelector(".reserve"),a?e:String(s.reserve))):(Vn(t.querySelector(".mag"),""),Vn(t.querySelector(".reserve"),a?e:String(s.loaded+s.reserve))),t.classList.toggle("low",s.loaded<=Math.floor(s.magazine*.2)),t.classList.toggle("empty",!a&&s.loaded+s.reserve===0);const o=t.querySelector(".meter");o&&(o.firstElementChild.style.width=`${Math.round(fr*100)}%`,o.classList.toggle("full",fr>=1))})}function Vp(n=0){nE(n),Kb(),oE(),aE(),lE(),cE(),fE()}addEventListener("resize",()=>{if(!(!innerWidth||!innerHeight)){sn.setSize(innerWidth,innerHeight,!1);for(const n of[Lt,gn])n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix();Kr.resize(innerWidth,innerHeight)}});let nh=performance.now();function Wp(n){const e=Math.min((n-nh)/1e3,.25);nh=n,Fp(e),Bp(),requestAnimationFrame(Wp)}requestAnimationFrame(Wp);window.game={scene:Mt,camera:Lt,renderCamera:gn,renderer:sn,view:Tt,player:Ke,weapon:()=>Ft,targets:Ei,update:Fp,render:Bp,viewmodel:ti,units:bu,strikeRay:bo,hitTarget:Fo,input:It,attemptFire:wp,doReload:Eo,throwGrenade:()=>At.press("grenade"),doMelee:()=>At.press("melee"),useClassAbility:()=>At.press("class"),useSuper:()=>At.press("super"),ability:()=>Wr,superCharge:()=>Wn,setSuperCharge:pr.setSuperCharge,switchWeapon:Ds,weaponDefs:()=>Ti,activeWeapon:()=>ei,fp:gt,debug:To,specialMeter:()=>fr,ammoBricks:()=>Us,weaponStates:Gi,toggleMenu:ul,menuOpen:()=>fi,setGarment:cl,previewBody:()=>ln,guardian:{get body(){return In},get previewBody(){return ln},runner:Lu,moment:Dn,game:At,comfort:du,seam:pr,data:{ABILITIES:ci,CLASSES:Xn,ELEMENTS:ko,MOMENTS:jr,NAMES:$M},poseAt:Bb,fpAt:zb,silhouette:Ic,stage:Hb,previewView:Gb},episode:Xt,comms:An,sayLine:Ru,hurtPlayer:Cp,playerHealth:()=>rn,updateHud:Vp,weaponIcons:Dc,setRestrictedZone:n=>{Lp=!!n},start:{open:(n,e)=>kn.open(n,e),state:()=>kn.state(),skip:()=>kn.skip(),pick:n=>kn.pick(n),view:n=>Kr.view(n),showroom:Kr},simTime:()=>Oe};console.log(`PRE-DESTINY test range booted — ${Ei.length} enemies in two lanes, magazine ${Ft.magazine}, reserve ${Ft.reserve}, reload ${Ft.reloadTime}s`);var ah;(ah=sn.compile)==null||ah.call(sn,Mt,gn);var lh;(lh=sn.compile)==null||lh.call(sn,ti.scene,ti.camera);kn.ready();
