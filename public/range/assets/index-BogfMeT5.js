(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jl="169",Df=0,$c=1,Uf=2,id=1,Nf=2,Yn=3,Qn=0,Zt=1,$n=2,Mi=0,Rs=1,vr=2,Kc=3,jc=4,Ff=5,zi=100,Of=101,Bf=102,kf=103,zf=104,Hf=200,Gf=201,Vf=202,Wf=203,tl=204,nl=205,Xf=206,qf=207,Yf=208,$f=209,Kf=210,jf=211,Zf=212,Jf=213,Qf=214,il=0,sl=1,rl=2,Os=3,ol=4,al=5,ll=6,cl=7,Ql=0,e0=1,t0=2,Si=0,n0=1,i0=2,s0=3,ec=4,r0=5,o0=6,a0=7,Zc="attached",l0="detached",sd=300,Bs=301,ks=302,hl=303,ul=304,Ro=306,xr=1e3,_i=1001,dl=1002,jt=1003,c0=1004,Ir=1005,un=1006,Xo=1007,vi=1008,ei=1009,rd=1010,od=1011,Mr=1012,tc=1013,Xi=1014,Pn=1015,br=1016,nc=1017,ic=1018,zs=1020,ad=35902,ld=1021,cd=1022,dn=1023,hd=1024,ud=1025,Cs=1026,Hs=1027,dd=1028,sc=1029,fd=1030,rc=1031,oc=1033,uo=33776,fo=33777,po=33778,mo=33779,fl=35840,pl=35841,ml=35842,gl=35843,_l=36196,vl=37492,xl=37496,Ml=37808,Sl=37809,yl=37810,El=37811,bl=37812,wl=37813,Tl=37814,Al=37815,Rl=37816,Cl=37817,Pl=37818,Ll=37819,Il=37820,Dl=37821,go=36492,Ul=36494,Nl=36495,pd=36283,Fl=36284,Ol=36285,Bl=36286,h0=3200,u0=3201,ac=0,d0=1,gi="",sn="srgb",bi="srgb-linear",lc="display-p3",Co="display-p3-linear",So="linear",dt="srgb",yo="rec709",Eo="p3",es=7680,Jc=519,f0=512,p0=513,m0=514,md=515,g0=516,_0=517,v0=518,x0=519,Qc=35044,eh="300 es",Zn=2e3,bo=2001;class Vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let th=1234567;const pr=Math.PI/180,Sr=180/Math.PI;function $i(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Xt(n,e,t){return Math.max(e,Math.min(t,n))}function cc(n,e){return(n%e+e)%e}function M0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function S0(n,e,t){return n!==e?(t-n)/(e-n):0}function mr(n,e,t){return(1-t)*n+t*e}function y0(n,e,t,i){return mr(n,e,1-Math.exp(-t*i))}function E0(n,e=1){return e-Math.abs(cc(n,e*2)-e)}function b0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function w0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function T0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function A0(n,e){return n+Math.random()*(e-n)}function R0(n){return n*(.5-Math.random())}function C0(n){n!==void 0&&(th=n);let e=th+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function P0(n){return n*pr}function L0(n){return n*Sr}function I0(n){return(n&n-1)===0&&n!==0}function D0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function U0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function N0(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*_,l*d,a*c);break;case"YXY":n.set(l*d,a*h,l*_,a*c);break;case"ZYZ":n.set(l*_,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Es(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const wr={DEG2RAD:pr,RAD2DEG:Sr,generateUUID:$i,clamp:Xt,euclideanModulo:cc,mapLinear:M0,inverseLerp:S0,lerp:mr,damp:y0,pingpong:E0,smoothstep:b0,smootherstep:w0,randInt:T0,randFloat:A0,randFloatSpread:R0,seededRandom:C0,degToRad:P0,radToDeg:L0,isPowerOfTwo:I0,ceilPowerOfTwo:D0,floorPowerOfTwo:U0,setQuaternionFromProperEuler:N0,normalize:Gt,denormalize:Es};class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,s,r,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],_=i[8],v=s[0],p=s[3],m=s[6],x=s[1],M=s[4],b=s[7],C=s[2],w=s[5],S=s[8];return r[0]=o*v+a*x+l*C,r[3]=o*p+a*M+l*w,r[6]=o*m+a*b+l*S,r[1]=c*v+h*x+u*C,r[4]=c*p+h*M+u*w,r[7]=c*m+h*b+u*S,r[2]=f*v+d*x+_*C,r[5]=f*p+d*M+_*w,r[8]=f*m+d*b+_*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,_=t*u+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=u*v,e[1]=(s*c-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(qo.makeScale(e,t)),this}rotate(e){return this.premultiply(qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qo=new Ve;function gd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function F0(){const n=wo("canvas");return n.style.display="block",n}const nh={};function _o(n){n in nh||(nh[n]=!0,console.warn(n))}function O0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function B0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function k0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ih=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sh=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ks={[bi]:{transfer:So,primaries:yo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[sn]:{transfer:dt,primaries:yo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Co]:{transfer:So,primaries:Eo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(sh),fromReference:n=>n.applyMatrix3(ih)},[lc]:{transfer:dt,primaries:Eo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(sh),fromReference:n=>n.applyMatrix3(ih).convertLinearToSRGB()}},z0=new Set([bi,Co]),ot={enabled:!0,_workingColorSpace:bi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!z0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ks[e].toReference,s=Ks[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ks[n].primaries},getTransfer:function(n){return n===gi?So:Ks[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Ks[e].luminanceCoefficients)}};function Ps(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ts;class H0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=wo("canvas")),ts.width=e.width,ts.height=e.height;const i=ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ps(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ps(t[i]/255)*255):t[i]=Ps(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let G0=0;class _d{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($o(s[o].image)):r.push($o(s[o]))}else r=$o(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function $o(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?H0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let V0=0;class Bt extends Vs{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=_i,s=_i,r=un,o=vi,a=dn,l=ei,c=Bt.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V0++}),this.uuid=$i(),this.name="",this.source=new _d(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xr:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case dl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xr:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case dl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=sd;Bt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,s=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],_=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,b=(d+1)/2,C=(m+1)/2,w=(h+f)/4,S=(u+v)/4,A=(_+p)/4;return M>b&&M>C?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=w/i,r=S/i):b>C?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=w/s,r=A/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=S/r,s=A/r),this.set(i,s,r,t),this}let x=Math.sqrt((p-_)*(p-_)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(p-_)/x,this.y=(u-v)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class W0 extends Vs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Bt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _d(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends W0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vd extends Bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class X0 extends Bt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qt{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const f=r[o+0],d=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=v;return}if(u!==v||l!==f||c!==d||h!==_){let p=1-a;const m=l*f+c*d+h*_+u*v,x=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const C=Math.sqrt(M),w=Math.atan2(C,m*x);p=Math.sin(p*w)/C,a=Math.sin(a*w)/C}const b=a*x;if(l=l*p+f*b,c=c*p+d*b,h=h*p+_*b,u=u*p+v*b,p===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return e[t]=a*_+h*u+l*d-c*f,e[t+1]=l*_+h*f+c*u-a*d,e[t+2]=c*_+h*d+a*f-l*u,e[t+3]=h*_-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),f=l(i/2),d=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u+f*d*_;break;case"YZX":this._x=f*h*u+c*d*_,this._y=c*d*u+f*h*_,this._z=c*h*_-f*d*u,this._w=c*h*u-f*d*_;break;case"XZY":this._x=f*h*u-c*d*_,this._y=c*d*u-f*h*_,this._z=c*h*_+f*d*u,this._w=c*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(rh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ko.copy(this).projectOnVector(e),this.sub(Ko)}reflect(e){return this.sub(Ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ko=new D,rh=new qt;class ti{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mn):mn.fromBufferAttribute(r,o),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Dr.copy(i.boundingBox)),Dr.applyMatrix4(e.matrixWorld),this.union(Dr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(js),Ur.subVectors(this.max,js),ns.subVectors(e.a,js),is.subVectors(e.b,js),ss.subVectors(e.c,js),ri.subVectors(is,ns),oi.subVectors(ss,is),Pi.subVectors(ns,ss);let t=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Pi.z,Pi.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Pi.z,0,-Pi.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Pi.y,Pi.x,0];return!jo(t,ns,is,ss,Ur)||(t=[1,0,0,0,1,0,0,0,1],!jo(t,ns,is,ss,Ur))?!1:(Nr.crossVectors(ri,oi),t=[Nr.x,Nr.y,Nr.z],jo(t,ns,is,ss,Ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kn=[new D,new D,new D,new D,new D,new D,new D,new D],mn=new D,Dr=new ti,ns=new D,is=new D,ss=new D,ri=new D,oi=new D,Pi=new D,js=new D,Ur=new D,Nr=new D,Li=new D;function jo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Li.fromArray(n,r);const a=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),l=e.dot(Li),c=t.dot(Li),h=i.dot(Li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const q0=new ti,Zs=new D,Zo=new D;class Ws{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):q0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Zs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(Zo)),this.expandByPoint(Zs.copy(e.center).sub(Zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new D,Jo=new D,Fr=new D,ai=new D,Qo=new D,Or=new D,ea=new D;class hc{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Jo.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Jo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Fr),a=ai.dot(this.direction),l=-ai.dot(Fr),c=ai.lengthSq(),h=Math.abs(1-o*o);let u,f,d,_;if(h>0)if(u=o*l-a,f=o*a-l,_=r*h,u>=0)if(f>=-_)if(f<=_){const v=1/h;u*=v,f*=v,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Jo).addScaledVector(Fr,f),d}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),s=zn.dot(zn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,s,r){Qo.subVectors(t,e),Or.subVectors(i,e),ea.crossVectors(Qo,Or);let o=this.direction.dot(ea),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,e);const l=a*this.direction.dot(Or.crossVectors(ai,Or));if(l<0)return null;const c=a*this.direction.dot(Qo.cross(ai));if(c<0||l+c>o)return null;const h=-a*ai.dot(ea);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(e,t,i,s,r,o,a,l,c,h,u,f,d,_,v,p){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,f,d,_,v,p)}set(e,t,i,s,r,o,a,l,c,h,u,f,d,_,v,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=_,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/rs.setFromMatrixColumn(e,0).length(),r=1/rs.setFromMatrixColumn(e,1).length(),o=1/rs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,_=a*h,v=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+_*c,t[5]=f-v*c,t[9]=-a*l,t[2]=v-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,_=c*h,v=c*u;t[0]=f+v*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-_,t[6]=v+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,_=c*h,v=c*u;t[0]=f-v*a,t[4]=-o*u,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*h,t[9]=v-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*h,d=o*u,_=a*h,v=a*u;t[0]=l*h,t[4]=_*c-d,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,v=a*c;t[0]=l*h,t[4]=v-f*u,t[8]=_*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+_,t[10]=f-v*u}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,v=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=o*h,t[9]=d*u-_,t[2]=_*u-d,t[6]=a*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y0,e,$0)}lookAt(e,t,i){const s=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),li.crossVectors(i,en),li.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),li.crossVectors(i,en)),li.normalize(),Br.crossVectors(en,li),s[0]=li.x,s[4]=Br.x,s[8]=en.x,s[1]=li.y,s[5]=Br.y,s[9]=en.y,s[2]=li.z,s[6]=Br.z,s[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],_=i[2],v=i[6],p=i[10],m=i[14],x=i[3],M=i[7],b=i[11],C=i[15],w=s[0],S=s[4],A=s[8],P=s[12],g=s[1],y=s[5],L=s[9],O=s[13],z=s[2],$=s[6],G=s[10],I=s[14],W=s[3],ie=s[7],oe=s[11],pe=s[15];return r[0]=o*w+a*g+l*z+c*W,r[4]=o*S+a*y+l*$+c*ie,r[8]=o*A+a*L+l*G+c*oe,r[12]=o*P+a*O+l*I+c*pe,r[1]=h*w+u*g+f*z+d*W,r[5]=h*S+u*y+f*$+d*ie,r[9]=h*A+u*L+f*G+d*oe,r[13]=h*P+u*O+f*I+d*pe,r[2]=_*w+v*g+p*z+m*W,r[6]=_*S+v*y+p*$+m*ie,r[10]=_*A+v*L+p*G+m*oe,r[14]=_*P+v*O+p*I+m*pe,r[3]=x*w+M*g+b*z+C*W,r[7]=x*S+M*y+b*$+C*ie,r[11]=x*A+M*L+b*G+C*oe,r[15]=x*P+M*O+b*I+C*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],_=e[3],v=e[7],p=e[11],m=e[15];return _*(+r*l*u-s*c*u-r*a*f+i*c*f+s*a*d-i*l*d)+v*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+p*(+t*c*u-t*a*d-r*o*u+i*o*d+r*a*h-i*c*h)+m*(-s*a*h-t*l*u+t*a*f+s*o*u-i*o*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],_=e[12],v=e[13],p=e[14],m=e[15],x=u*p*c-v*f*c+v*l*d-a*p*d-u*l*m+a*f*m,M=_*f*c-h*p*c-_*l*d+o*p*d+h*l*m-o*f*m,b=h*v*c-_*u*c+_*a*d-o*v*d-h*a*m+o*u*m,C=_*u*l-h*v*l-_*a*f+o*v*f+h*a*p-o*u*p,w=t*x+i*M+s*b+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/w;return e[0]=x*S,e[1]=(v*f*r-u*p*r-v*s*d+i*p*d+u*s*m-i*f*m)*S,e[2]=(a*p*r-v*l*r+v*s*c-i*p*c-a*s*m+i*l*m)*S,e[3]=(u*l*r-a*f*r-u*s*c+i*f*c+a*s*d-i*l*d)*S,e[4]=M*S,e[5]=(h*p*r-_*f*r+_*s*d-t*p*d-h*s*m+t*f*m)*S,e[6]=(_*l*r-o*p*r-_*s*c+t*p*c+o*s*m-t*l*m)*S,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*S,e[8]=b*S,e[9]=(_*u*r-h*v*r-_*i*d+t*v*d+h*i*m-t*u*m)*S,e[10]=(o*v*r-_*a*r+_*i*c-t*v*c-o*i*m+t*a*m)*S,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*d-t*a*d)*S,e[12]=C*S,e[13]=(h*v*s-_*u*s+_*i*f-t*v*f-h*i*p+t*u*p)*S,e[14]=(_*a*s-o*v*s-_*i*l+t*v*l+o*i*p-t*a*p)*S,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*f+t*a*f)*S,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,_=r*u,v=o*h,p=o*u,m=a*u,x=l*c,M=l*h,b=l*u,C=i.x,w=i.y,S=i.z;return s[0]=(1-(v+m))*C,s[1]=(d+b)*C,s[2]=(_-M)*C,s[3]=0,s[4]=(d-b)*w,s[5]=(1-(f+m))*w,s[6]=(p+x)*w,s[7]=0,s[8]=(_+M)*S,s[9]=(p-x)*S,s[10]=(1-(f+v))*S,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=rs.set(s[0],s[1],s[2]).length();const o=rs.set(s[4],s[5],s[6]).length(),a=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],gn.copy(this);const c=1/r,h=1/o,u=1/a;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=u,gn.elements[9]*=u,gn.elements[10]*=u,t.setFromRotationMatrix(gn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Zn){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s);let d,_;if(a===Zn)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===bo)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Zn){const l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),f=(t+e)*c,d=(i+s)*h;let _,v;if(a===Zn)_=(o+r)*u,v=-2*u;else if(a===bo)_=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const rs=new D,gn=new We,Y0=new D(0,0,0),$0=new D(1,1,1),li=new D,Br=new D,en=new D,oh=new We,ah=new qt;class Nt{constructor(e=0,t=0,i=0,s=Nt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nt.DEFAULT_ORDER="XYZ";class uc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let K0=0;const lh=new D,os=new qt,Hn=new We,kr=new D,Js=new D,j0=new D,Z0=new qt,ch=new D(1,0,0),hh=new D(0,1,0),uh=new D(0,0,1),dh={type:"added"},J0={type:"removed"},as={type:"childadded",child:null},ta={type:"childremoved",child:null};class At extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new D,t=new Nt,i=new qt,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new We},normalMatrix:{value:new Ve}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(ch,e)}rotateY(e){return this.rotateOnAxis(hh,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,t){return lh.copy(e).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ch,e)}translateY(e){return this.translateOnAxis(hh,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?kr.copy(e):kr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Js,kr,this.up):Hn.lookAt(kr,Js,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(Hn),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dh),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(J0),ta.child=e,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dh),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,j0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Z0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}At.DEFAULT_UP=new D(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new D,Gn=new D,na=new D,Vn=new D,ls=new D,cs=new D,fh=new D,ia=new D,sa=new D,ra=new D,oa=new ft,aa=new ft,la=new ft;class xn{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),_n.subVectors(e,t),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){_n.subVectors(s,t),Gn.subVectors(i,t),na.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(Gn),l=_n.dot(na),c=Gn.dot(Gn),h=Gn.dot(na),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return oa.setScalar(0),aa.setScalar(0),la.setScalar(0),oa.fromBufferAttribute(e,t),aa.fromBufferAttribute(e,i),la.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(oa,r.x),o.addScaledVector(aa,r.y),o.addScaledVector(la,r.z),o}static isFrontFacing(e,t,i,s){return _n.subVectors(i,t),Gn.subVectors(e,t),_n.cross(Gn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),_n.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return xn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ls.subVectors(s,i),cs.subVectors(r,i),ia.subVectors(e,i);const l=ls.dot(ia),c=cs.dot(ia);if(l<=0&&c<=0)return t.copy(i);sa.subVectors(e,s);const h=ls.dot(sa),u=cs.dot(sa);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(ls,o);ra.subVectors(e,r);const d=ls.dot(ra),_=cs.dot(ra);if(_>=0&&d<=_)return t.copy(r);const v=d*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(cs,a);const p=h*_-d*u;if(p<=0&&u-h>=0&&d-_>=0)return fh.subVectors(r,s),a=(u-h)/(u-h+(d-_)),t.copy(s).addScaledVector(fh,a);const m=1/(p+v+f);return o=v*m,a=f*m,t.copy(i).addScaledVector(ls,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},zr={h:0,s:0,l:0};function ca(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ot.workingColorSpace){if(e=cc(e,1),t=Xt(t,0,1),i=Xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ca(o,r,e+1/3),this.g=ca(o,r,e),this.b=ca(o,r,e-1/3)}return ot.toWorkingColorSpace(this,s),this}setStyle(e,t=sn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const i=xd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}copyLinearToSRGB(e){return this.r=Yo(e.r),this.g=Yo(e.g),this.b=Yo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return ot.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Xt(Ot.r*255,0,255))*65536+Math.round(Xt(Ot.g*255,0,255))*256+Math.round(Xt(Ot.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Ot.copy(this),t);const i=Ot.r,s=Ot.g,r=Ot.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=sn){ot.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,s=Ot.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(zr);const i=mr(ci.h,zr.h,t),s=mr(ci.s,zr.s,t),r=mr(ci.l,zr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Qe;Qe.NAMES=xd;let Q0=0;class Xs extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=Rs,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tl,this.blendDst=nl,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(i.blending=this.blending),this.side!==Qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tl&&(i.blendSrc=this.blendSrc),this.blendDst!==nl&&(i.blendDst=this.blendDst),this.blendEquation!==zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jt extends Xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new D,Hr=new it;class on{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qc,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Es(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Es(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Es(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Es(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),i=Gt(i,this.array),s=Gt(s,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qc&&(e.usage=this.usage),e}}class dc extends on{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Md extends on{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class kt extends on{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ep=0;const ln=new We,ha=new At,hs=new D,tn=new ti,Qs=new ti,Pt=new D;class yn extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gd(e)?Md:dc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ve().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,i){return ln.makeTranslation(e,t,i),this.applyMatrix4(ln),this}scale(e,t,i){return ln.makeScale(e,t,i),this.applyMatrix4(ln),this}lookAt(e){return ha.lookAt(e),ha.updateMatrix(),this.applyMatrix4(ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new kt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(tn.min,Qs.min),tn.expandByPoint(Pt),Pt.addVectors(tn.max,Qs.max),tn.expandByPoint(Pt)):(tn.expandByPoint(Qs.min),tn.expandByPoint(Qs.max))}tn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pt.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(e,c),Pt.add(hs)),s=Math.max(s,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new D,l[A]=new D;const c=new D,h=new D,u=new D,f=new it,d=new it,_=new it,v=new D,p=new D;function m(A,P,g){c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,P),u.fromBufferAttribute(i,g),f.fromBufferAttribute(r,A),d.fromBufferAttribute(r,P),_.fromBufferAttribute(r,g),h.sub(c),u.sub(c),d.sub(f),_.sub(f);const y=1/(d.x*_.y-_.x*d.y);isFinite(y)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(y),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(y),a[A].add(v),a[P].add(v),a[g].add(v),l[A].add(p),l[P].add(p),l[g].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let A=0,P=x.length;A<P;++A){const g=x[A],y=g.start,L=g.count;for(let O=y,z=y+L;O<z;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const M=new D,b=new D,C=new D,w=new D;function S(A){C.fromBufferAttribute(s,A),w.copy(C);const P=a[A];M.copy(P),M.sub(C.multiplyScalar(C.dot(P))).normalize(),b.crossVectors(w,P);const y=b.dot(l[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,y)}for(let A=0,P=x.length;A<P;++A){const g=x[A],y=g.start,L=g.count;for(let O=y,z=y+L;O<z;O+=3)S(e.getX(O+0)),S(e.getX(O+1)),S(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,_=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*h;for(let m=0;m<h;m++)f[_++]=c[d++]}return new on(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ph=new We,Ii=new hc,Gr=new Ws,mh=new D,Vr=new D,Wr=new D,Xr=new D,ua=new D,qr=new D,gh=new D,Yr=new D;class me extends At{constructor(e=new yn,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(ua.fromBufferAttribute(u,e),o?qr.addScaledVector(ua,h):qr.addScaledVector(ua.sub(t),h))}t.add(qr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gr.copy(i.boundingSphere),Gr.applyMatrix4(r),Ii.copy(e.ray).recast(e.near),!(Gr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(Gr,mh)===null||Ii.origin.distanceToSquared(mh)>(e.far-e.near)**2))&&(ph.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(ph),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const p=f[_],m=o[p.materialIndex],x=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let b=x,C=M;b<C;b+=3){const w=a.getX(b),S=a.getX(b+1),A=a.getX(b+2);s=$r(this,m,e,i,c,h,u,w,S,A),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let p=_,m=v;p<m;p+=3){const x=a.getX(p),M=a.getX(p+1),b=a.getX(p+2);s=$r(this,o,e,i,c,h,u,x,M,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const p=f[_],m=o[p.materialIndex],x=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let b=x,C=M;b<C;b+=3){const w=b,S=b+1,A=b+2;s=$r(this,m,e,i,c,h,u,w,S,A),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=_,m=v;p<m;p+=3){const x=p,M=p+1,b=p+2;s=$r(this,o,e,i,c,h,u,x,M,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function tp(n,e,t,i,s,r,o,a){let l;if(e.side===Zt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Qn,a),l===null)return null;Yr.copy(a),Yr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Yr);return c<t.near||c>t.far?null:{distance:c,point:Yr.clone(),object:n}}function $r(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Vr),n.getVertexPosition(l,Wr),n.getVertexPosition(c,Xr);const h=tp(n,e,t,i,Vr,Wr,Xr,gh);if(h){const u=new D;xn.getBarycoord(gh,Vr,Wr,Xr,u),s&&(h.uv=xn.getInterpolatedAttribute(s,a,l,c,u,new it)),r&&(h.uv1=xn.getInterpolatedAttribute(r,a,l,c,u,new it)),o&&(h.normal=xn.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new D,materialIndex:0};xn.getNormal(Vr,Wr,Xr,f.normal),h.face=f,h.barycoord=u}return h}class et extends yn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(u,2));function _(v,p,m,x,M,b,C,w,S,A,P){const g=b/S,y=C/A,L=b/2,O=C/2,z=w/2,$=S+1,G=A+1;let I=0,W=0;const ie=new D;for(let oe=0;oe<G;oe++){const pe=oe*y-O;for(let ye=0;ye<$;ye++){const ue=ye*g-L;ie[v]=ue*x,ie[p]=pe*M,ie[m]=z,c.push(ie.x,ie.y,ie.z),ie[v]=0,ie[p]=0,ie[m]=w>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(ye/S),u.push(1-oe/A),I+=1}}for(let oe=0;oe<A;oe++)for(let pe=0;pe<S;pe++){const ye=f+pe+$*oe,ue=f+pe+$*(oe+1),K=f+(pe+1)+$*(oe+1),te=f+(pe+1)+$*oe;l.push(ye,ue,te),l.push(ue,K,te),W+=6}a.addGroup(d,W,P),d+=W,f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new et(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Vt(n){const e={};for(let t=0;t<n.length;t++){const i=Gs(n[t]);for(const s in i)e[s]=i[s]}return e}function np(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Sd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const ip={clone:Gs,merge:Vt};var sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends Xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sp,this.fragmentShader=rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=np(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class yd extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new D,_h=new it,vh=new it;class Kt extends yd{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sr*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,_h,vh),t.subVectors(vh,_h)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const us=-90,ds=1;class op extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kt(us,ds,e,t);s.layers=this.layers,this.add(s);const r=new Kt(us,ds,e,t);r.layers=this.layers,this.add(r);const o=new Kt(us,ds,e,t);o.layers=this.layers,this.add(o);const a=new Kt(us,ds,e,t);a.layers=this.layers,this.add(a);const l=new Kt(us,ds,e,t);l.layers=this.layers,this.add(l);const c=new Kt(us,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ed extends Bt{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ap extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ed(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new et(5,5,5),r=new Ei({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:Mi});r.uniforms.tEquirect.value=t;const o=new me(s,r),a=t.minFilter;return t.minFilter===vi&&(t.minFilter=un),new op(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const da=new D,lp=new D,cp=new Ve;class Oi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=da.subVectors(i,t).cross(lp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(da),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||cp.getNormalMatrix(e),s=this.coplanarPoint(da).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Ws,Kr=new D;class fc{constructor(e=new Oi,t=new Oi,i=new Oi,s=new Oi,r=new Oi,o=new Oi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Zn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],_=s[9],v=s[10],p=s[11],m=s[12],x=s[13],M=s[14],b=s[15];if(i[0].setComponents(l-r,f-c,p-d,b-m).normalize(),i[1].setComponents(l+r,f+c,p+d,b+m).normalize(),i[2].setComponents(l+o,f+h,p+_,b+x).normalize(),i[3].setComponents(l-o,f-h,p-_,b-x).normalize(),i[4].setComponents(l-a,f-u,p-v,b-M).normalize(),t===Zn)i[5].setComponents(l+a,f+u,p+v,b+M).normalize();else if(t===bo)i[5].setComponents(a,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Kr.x=s.normal.x>0?e.max.x:e.min.x,Kr.y=s.normal.y>0?e.max.y:e.min.y,Kr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bd(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function hp(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){const _=u[f],v=u[d];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){const v=u[d];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Tr extends yn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],_=[],v=[],p=[];for(let m=0;m<h;m++){const x=m*f-o;for(let M=0;M<c;M++){const b=M*u-r;_.push(b,-x,0),v.push(0,0,1),p.push(M/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const M=x+c*m,b=x+c*(m+1),C=x+1+c*(m+1),w=x+1+c*m;d.push(M,b,w),d.push(b,C,w)}this.setIndex(d),this.setAttribute("position",new kt(_,3)),this.setAttribute("normal",new kt(v,3)),this.setAttribute("uv",new kt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.widthSegments,e.heightSegments)}}var up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dp=`#ifdef USE_ALPHAHASH
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
#endif`,fp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_p=`#ifdef USE_AOMAP
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
#endif`,vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xp=`#ifdef USE_BATCHING
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
#endif`,Mp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ep=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bp=`#ifdef USE_IRIDESCENCE
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
#endif`,wp=`#ifdef USE_BUMPMAP
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
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Up=`#define PI 3.141592653589793
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
} // validated`,Np=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fp=`vec3 transformedNormal = objectNormal;
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
#endif`,Op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gp=`
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
}`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jp=`#ifdef USE_GRADIENTMAP
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
}`,Qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,em=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nm=`uniform bool receiveShadow;
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
#endif`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lm=`PhysicalMaterial material;
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
#endif`,cm=`struct PhysicalMaterial {
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
}`,hm=`
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
#endif`,um=`#if defined( RE_IndirectDiffuse )
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
#endif`,dm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mm=`#if defined( USE_POINTS_UV )
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
#endif`,Sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`#ifdef USE_MORPHTARGETS
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
#endif`,Am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Im=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dm=`#ifdef USE_NORMALMAP
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
#endif`,Um=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,km=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Km=`float getShadowMask() {
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
}`,jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,Jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qm=`#ifdef USE_SKINNING
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
#endif`,eg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ig=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sg=`#ifdef USE_TRANSMISSION
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
#endif`,rg=`#ifdef USE_TRANSMISSION
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
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ug=`uniform sampler2D t2D;
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
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`#include <common>
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
}`,_g=`#if DEPTH_PACKING == 3200
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
}`,vg=`#define DISTANCE
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
}`,xg=`#define DISTANCE
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
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yg=`uniform float scale;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,bg=`#include <common>
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
}`,wg=`uniform vec3 diffuse;
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
}`,Tg=`#define LAMBERT
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
}`,Ag=`#define LAMBERT
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
}`,Rg=`#define MATCAP
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
}`,Cg=`#define MATCAP
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
}`,Pg=`#define NORMAL
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
}`,Lg=`#define NORMAL
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
}`,Ig=`#define PHONG
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
}`,Dg=`#define PHONG
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
}`,Ug=`#define STANDARD
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
}`,Ng=`#define STANDARD
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
}`,Fg=`#define TOON
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
}`,Og=`#define TOON
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
}`,Bg=`uniform float size;
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
}`,kg=`uniform vec3 diffuse;
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
}`,zg=`#include <common>
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
}`,Hg=`uniform vec3 color;
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
}`,Gg=`uniform float rotation;
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:up,alphahash_pars_fragment:dp,alphamap_fragment:fp,alphamap_pars_fragment:pp,alphatest_fragment:mp,alphatest_pars_fragment:gp,aomap_fragment:_p,aomap_pars_fragment:vp,batching_pars_vertex:xp,batching_vertex:Mp,begin_vertex:Sp,beginnormal_vertex:yp,bsdfs:Ep,iridescence_fragment:bp,bumpmap_pars_fragment:wp,clipping_planes_fragment:Tp,clipping_planes_pars_fragment:Ap,clipping_planes_pars_vertex:Rp,clipping_planes_vertex:Cp,color_fragment:Pp,color_pars_fragment:Lp,color_pars_vertex:Ip,color_vertex:Dp,common:Up,cube_uv_reflection_fragment:Np,defaultnormal_vertex:Fp,displacementmap_pars_vertex:Op,displacementmap_vertex:Bp,emissivemap_fragment:kp,emissivemap_pars_fragment:zp,colorspace_fragment:Hp,colorspace_pars_fragment:Gp,envmap_fragment:Vp,envmap_common_pars_fragment:Wp,envmap_pars_fragment:Xp,envmap_pars_vertex:qp,envmap_physical_pars_fragment:im,envmap_vertex:Yp,fog_vertex:$p,fog_pars_vertex:Kp,fog_fragment:jp,fog_pars_fragment:Zp,gradientmap_pars_fragment:Jp,lightmap_pars_fragment:Qp,lights_lambert_fragment:em,lights_lambert_pars_fragment:tm,lights_pars_begin:nm,lights_toon_fragment:sm,lights_toon_pars_fragment:rm,lights_phong_fragment:om,lights_phong_pars_fragment:am,lights_physical_fragment:lm,lights_physical_pars_fragment:cm,lights_fragment_begin:hm,lights_fragment_maps:um,lights_fragment_end:dm,logdepthbuf_fragment:fm,logdepthbuf_pars_fragment:pm,logdepthbuf_pars_vertex:mm,logdepthbuf_vertex:gm,map_fragment:_m,map_pars_fragment:vm,map_particle_fragment:xm,map_particle_pars_fragment:Mm,metalnessmap_fragment:Sm,metalnessmap_pars_fragment:ym,morphinstance_vertex:Em,morphcolor_vertex:bm,morphnormal_vertex:wm,morphtarget_pars_vertex:Tm,morphtarget_vertex:Am,normal_fragment_begin:Rm,normal_fragment_maps:Cm,normal_pars_fragment:Pm,normal_pars_vertex:Lm,normal_vertex:Im,normalmap_pars_fragment:Dm,clearcoat_normal_fragment_begin:Um,clearcoat_normal_fragment_maps:Nm,clearcoat_pars_fragment:Fm,iridescence_pars_fragment:Om,opaque_fragment:Bm,packing:km,premultiplied_alpha_fragment:zm,project_vertex:Hm,dithering_fragment:Gm,dithering_pars_fragment:Vm,roughnessmap_fragment:Wm,roughnessmap_pars_fragment:Xm,shadowmap_pars_fragment:qm,shadowmap_pars_vertex:Ym,shadowmap_vertex:$m,shadowmask_pars_fragment:Km,skinbase_vertex:jm,skinning_pars_vertex:Zm,skinning_vertex:Jm,skinnormal_vertex:Qm,specularmap_fragment:eg,specularmap_pars_fragment:tg,tonemapping_fragment:ng,tonemapping_pars_fragment:ig,transmission_fragment:sg,transmission_pars_fragment:rg,uv_pars_fragment:og,uv_pars_vertex:ag,uv_vertex:lg,worldpos_vertex:cg,background_vert:hg,background_frag:ug,backgroundCube_vert:dg,backgroundCube_frag:fg,cube_vert:pg,cube_frag:mg,depth_vert:gg,depth_frag:_g,distanceRGBA_vert:vg,distanceRGBA_frag:xg,equirect_vert:Mg,equirect_frag:Sg,linedashed_vert:yg,linedashed_frag:Eg,meshbasic_vert:bg,meshbasic_frag:wg,meshlambert_vert:Tg,meshlambert_frag:Ag,meshmatcap_vert:Rg,meshmatcap_frag:Cg,meshnormal_vert:Pg,meshnormal_frag:Lg,meshphong_vert:Ig,meshphong_frag:Dg,meshphysical_vert:Ug,meshphysical_frag:Ng,meshtoon_vert:Fg,meshtoon_frag:Og,points_vert:Bg,points_frag:kg,shadow_vert:zg,shadow_frag:Hg,sprite_vert:Gg,sprite_frag:Vg},le={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Rn={basic:{uniforms:Vt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Vt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Vt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Vt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Vt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Vt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Vt([le.points,le.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Vt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Vt([le.common,le.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Vt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Vt([le.sprite,le.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Vt([le.common,le.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Vt([le.lights,le.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Rn.physical={uniforms:Vt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const jr={r:0,b:0,g:0},Ui=new Nt,Wg=new We;function Xg(n,e,t,i,s,r,o){const a=new Qe(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function _(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?t:e).get(M)),M}function v(x){let M=!1;const b=_(x);b===null?m(a,l):b&&b.isColor&&(m(b,1),M=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(x,M){const b=_(M);b&&(b.isCubeTexture||b.mapping===Ro)?(h===void 0&&(h=new me(new et(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Gs(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ui.copy(M.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Wg.makeRotationFromEuler(Ui)),h.material.toneMapped=ot.getTransfer(b.colorSpace)!==dt,(u!==b||f!==b.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new me(new Tr(2,2),new Ei({name:"BackgroundMaterial",uniforms:Gs(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ot.getTransfer(b.colorSpace)!==dt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,d=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,M){x.getRGB(jr,Sd(n)),i.buffers.color.setClear(jr.r,jr.g,jr.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),l=M,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:v,addToRenderList:p}}function qg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(g,y,L,O,z){let $=!1;const G=u(O,L,y);r!==G&&(r=G,c(r.object)),$=d(g,O,L,z),$&&_(g,O,L,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,b(g,y,L,O),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(g){return n.bindVertexArray(g)}function h(g){return n.deleteVertexArray(g)}function u(g,y,L){const O=L.wireframe===!0;let z=i[g.id];z===void 0&&(z={},i[g.id]=z);let $=z[y.id];$===void 0&&($={},z[y.id]=$);let G=$[O];return G===void 0&&(G=f(l()),$[O]=G),G}function f(g){const y=[],L=[],O=[];for(let z=0;z<t;z++)y[z]=0,L[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:L,attributeDivisors:O,object:g,attributes:{},index:null}}function d(g,y,L,O){const z=r.attributes,$=y.attributes;let G=0;const I=L.getAttributes();for(const W in I)if(I[W].location>=0){const oe=z[W];let pe=$[W];if(pe===void 0&&(W==="instanceMatrix"&&g.instanceMatrix&&(pe=g.instanceMatrix),W==="instanceColor"&&g.instanceColor&&(pe=g.instanceColor)),oe===void 0||oe.attribute!==pe||pe&&oe.data!==pe.data)return!0;G++}return r.attributesNum!==G||r.index!==O}function _(g,y,L,O){const z={},$=y.attributes;let G=0;const I=L.getAttributes();for(const W in I)if(I[W].location>=0){let oe=$[W];oe===void 0&&(W==="instanceMatrix"&&g.instanceMatrix&&(oe=g.instanceMatrix),W==="instanceColor"&&g.instanceColor&&(oe=g.instanceColor));const pe={};pe.attribute=oe,oe&&oe.data&&(pe.data=oe.data),z[W]=pe,G++}r.attributes=z,r.attributesNum=G,r.index=O}function v(){const g=r.newAttributes;for(let y=0,L=g.length;y<L;y++)g[y]=0}function p(g){m(g,0)}function m(g,y){const L=r.newAttributes,O=r.enabledAttributes,z=r.attributeDivisors;L[g]=1,O[g]===0&&(n.enableVertexAttribArray(g),O[g]=1),z[g]!==y&&(n.vertexAttribDivisor(g,y),z[g]=y)}function x(){const g=r.newAttributes,y=r.enabledAttributes;for(let L=0,O=y.length;L<O;L++)y[L]!==g[L]&&(n.disableVertexAttribArray(L),y[L]=0)}function M(g,y,L,O,z,$,G){G===!0?n.vertexAttribIPointer(g,y,L,z,$):n.vertexAttribPointer(g,y,L,O,z,$)}function b(g,y,L,O){v();const z=O.attributes,$=L.getAttributes(),G=y.defaultAttributeValues;for(const I in $){const W=$[I];if(W.location>=0){let ie=z[I];if(ie===void 0&&(I==="instanceMatrix"&&g.instanceMatrix&&(ie=g.instanceMatrix),I==="instanceColor"&&g.instanceColor&&(ie=g.instanceColor)),ie!==void 0){const oe=ie.normalized,pe=ie.itemSize,ye=e.get(ie);if(ye===void 0)continue;const ue=ye.buffer,K=ye.type,te=ye.bytesPerElement,fe=K===n.INT||K===n.UNSIGNED_INT||ie.gpuType===tc;if(ie.isInterleavedBufferAttribute){const de=ie.data,Le=de.stride,Re=ie.offset;if(de.isInstancedInterleavedBuffer){for(let qe=0;qe<W.locationSize;qe++)m(W.location+qe,de.meshPerAttribute);g.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let qe=0;qe<W.locationSize;qe++)p(W.location+qe);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let qe=0;qe<W.locationSize;qe++)M(W.location+qe,pe/W.locationSize,K,oe,Le*te,(Re+pe/W.locationSize*qe)*te,fe)}else{if(ie.isInstancedBufferAttribute){for(let de=0;de<W.locationSize;de++)m(W.location+de,ie.meshPerAttribute);g.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let de=0;de<W.locationSize;de++)p(W.location+de);n.bindBuffer(n.ARRAY_BUFFER,ue);for(let de=0;de<W.locationSize;de++)M(W.location+de,pe/W.locationSize,K,oe,pe*te,pe/W.locationSize*de*te,fe)}}else if(G!==void 0){const oe=G[I];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(W.location,oe);break;case 3:n.vertexAttrib3fv(W.location,oe);break;case 4:n.vertexAttrib4fv(W.location,oe);break;default:n.vertexAttrib1fv(W.location,oe)}}}}x()}function C(){A();for(const g in i){const y=i[g];for(const L in y){const O=y[L];for(const z in O)h(O[z].object),delete O[z];delete y[L]}delete i[g]}}function w(g){if(i[g.id]===void 0)return;const y=i[g.id];for(const L in y){const O=y[L];for(const z in O)h(O[z].object),delete O[z];delete y[L]}delete i[g.id]}function S(g){for(const y in i){const L=i[y];if(L[g.id]===void 0)continue;const O=L[g.id];for(const z in O)h(O[z].object),delete O[z];delete L[g.id]}}function A(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:S,initAttributes:v,enableAttribute:p,disableUnusedAttributes:x}}function Yg(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];t.update(d,i,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let _=0;for(let v=0;v<u;v++)_+=h[v];for(let v=0;v<f.length;v++)t.update(_,i,f[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $g(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(S){return!(S!==dn&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const A=S===br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==ei&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Pn&&!A)}function l(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const S=e.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:b,vertexTextures:C,maxSamples:w}}function Kg(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Oi,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const _=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,m=n.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{const x=r?0:i,M=x*4;let b=m.clippingState||null;l.value=b,b=h(_,f,M,d);for(let C=0;C!==M;++C)b[C]=t[C];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,_){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const m=d+v*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,b=d;M!==v;++M,b+=4)o.copy(u[M]).applyMatrix4(x,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function jg(n){let e=new WeakMap;function t(o,a){return a===hl?o.mapping=Bs:a===ul&&(o.mapping=ks),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===hl||a===ul)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ap(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class pc extends yd{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ws=4,xh=[.125,.215,.35,.446,.526,.582],Hi=20,fa=new pc,Mh=new Qe;let pa=null,ma=0,ga=0,_a=!1;const Bi=(1+Math.sqrt(5))/2,fs=1/Bi,Sh=[new D(-Bi,fs,0),new D(Bi,fs,0),new D(-fs,0,Bi),new D(fs,0,Bi),new D(0,Bi,-fs),new D(0,Bi,fs),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class yh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pa,ma,ga),this._renderer.xr.enabled=_a,e.scissorTest=!1,Zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),_a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:br,format:dn,colorSpace:bi,depthBuffer:!1},s=Eh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zg(r)),this._blurMaterial=Jg(r,e,t)}return s}_compileMaterial(e){const t=new me(this._lodPlanes[0],e);this._renderer.compile(t,fa)}_sceneToCubeUV(e,t,i,s){const a=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Mh),h.toneMapping=Si,h.autoClear=!1;const d=new Jt({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),_=new me(new et,d);let v=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,v=!0):(d.color.copy(Mh),v=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):x===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const M=this._cubeSize;Zr(s,x*M,m>2?M:0,M,M),h.setRenderTarget(s),v&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Bs||e.mapping===ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new me(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Zr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,fa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Sh[(s-r-1)%Sh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new me(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Hi-1),v=r/_,p=isFinite(r)?1+Math.floor(h*v):Hi;p>Hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hi}`);const m=[];let x=0;for(let S=0;S<Hi;++S){const A=S/v,P=Math.exp(-A*A/2);m.push(P),S===0?x+=P:S<p&&(x+=2*P)}for(let S=0;S<m.length;S++)m[S]=m[S]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-i;const b=this._sizeLods[s],C=3*b*(s>M-ws?s-M+ws:0),w=4*(this._cubeSize-b);Zr(t,C,w,3*b,2*b),l.setRenderTarget(t),l.render(u,fa)}}function Zg(n){const e=[],t=[],i=[];let s=n;const r=n-ws+1+xh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ws?l=xh[o-n+ws-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,v=3,p=2,m=1,x=new Float32Array(v*_*d),M=new Float32Array(p*_*d),b=new Float32Array(m*_*d);for(let w=0;w<d;w++){const S=w%3*2/3-1,A=w>2?0:-1,P=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];x.set(P,v*_*w),M.set(f,p*_*w);const g=[w,w,w,w,w,w];b.set(g,m*_*w)}const C=new yn;C.setAttribute("position",new on(x,v)),C.setAttribute("uv",new on(M,p)),C.setAttribute("faceIndex",new on(b,m)),e.push(C),s>ws&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Eh(n,e,t){const i=new qi(n,e,t);return i.texture.mapping=Ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Jg(n,e,t){const i=new Float32Array(Hi),s=new D(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function bh(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function wh(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function mc(){return`

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
	`}function Qg(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===hl||l===ul,h=l===Bs||l===ks;if(c||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new yh(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new yh(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function e_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&_o("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function t_(n,e,t,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let p=0,m=v.length;p<m;p++)e.remove(v[p])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const _ in d){const v=d[_];for(let p=0,m=v.length;p<m;p++)e.update(v[p],n.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,_=u.attributes.position;let v=0;if(d!==null){const x=d.array;v=d.version;for(let M=0,b=x.length;M<b;M+=3){const C=x[M+0],w=x[M+1],S=x[M+2];f.push(C,w,w,S,S,C)}}else if(_!==void 0){const x=_.array;v=_.version;for(let M=0,b=x.length/3-1;M<b;M+=3){const C=M+0,w=M+1,S=M+2;f.push(C,w,w,S,S,C)}}else return;const p=new(gd(f)?Md:dc)(f,1);p.version=v;const m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function n_(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,f*o,_),t.update(d,i,_))}function h(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];t.update(p,i,1)}function u(f,d,_,v){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,_);let m=0;for(let x=0;x<_;x++)m+=d[x];for(let x=0;x<v.length;x++)t.update(m,i,v[x])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function i_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function s_(n,e,t){const i=new WeakMap,s=new ft;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let g=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",g)};var d=g;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let b=0;_===!0&&(b=1),v===!0&&(b=2),p===!0&&(b=3);let C=a.attributes.position.count*b,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const S=new Float32Array(C*w*4*u),A=new vd(S,C,w,u);A.type=Pn,A.needsUpdate=!0;const P=b*4;for(let y=0;y<u;y++){const L=m[y],O=x[y],z=M[y],$=C*w*4*y;for(let G=0;G<L.count;G++){const I=G*P;_===!0&&(s.fromBufferAttribute(L,G),S[$+I+0]=s.x,S[$+I+1]=s.y,S[$+I+2]=s.z,S[$+I+3]=0),v===!0&&(s.fromBufferAttribute(O,G),S[$+I+4]=s.x,S[$+I+5]=s.y,S[$+I+6]=s.z,S[$+I+7]=0),p===!0&&(s.fromBufferAttribute(z,G),S[$+I+8]=s.x,S[$+I+9]=s.y,S[$+I+10]=s.z,S[$+I+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new it(C,w)},i.set(a,f),a.addEventListener("dispose",g)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function r_(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class wd extends Bt{constructor(e,t,i,s,r,o,a,l,c,h=Cs){if(h!==Cs&&h!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Cs&&(i=Xi),i===void 0&&h===Hs&&(i=zs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Td=new Bt,Th=new wd(1,1),Ad=new vd,Rd=new X0,Cd=new Ed,Ah=[],Rh=[],Ch=new Float32Array(16),Ph=new Float32Array(9),Lh=new Float32Array(4);function qs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ah[s];if(r===void 0&&(r=new Float32Array(s),Ah[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Po(n,e){let t=Rh[e];t===void 0&&(t=new Int32Array(e),Rh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function o_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function a_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function l_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function c_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function h_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Lh.set(i),n.uniformMatrix2fv(this.addr,!1,Lh),Ct(t,i)}}function u_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Ph.set(i),n.uniformMatrix3fv(this.addr,!1,Ph),Ct(t,i)}}function d_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Ch.set(i),n.uniformMatrix4fv(this.addr,!1,Ch),Ct(t,i)}}function f_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function p_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function m_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function g_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function __(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function v_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function x_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function M_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function S_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Th.compareFunction=md,r=Th):r=Td,t.setTexture2D(e||r,s)}function y_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Rd,s)}function E_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Cd,s)}function b_(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Ad,s)}function w_(n){switch(n){case 5126:return o_;case 35664:return a_;case 35665:return l_;case 35666:return c_;case 35674:return h_;case 35675:return u_;case 35676:return d_;case 5124:case 35670:return f_;case 35667:case 35671:return p_;case 35668:case 35672:return m_;case 35669:case 35673:return g_;case 5125:return __;case 36294:return v_;case 36295:return x_;case 36296:return M_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return E_;case 36289:case 36303:case 36311:case 36292:return b_}}function T_(n,e){n.uniform1fv(this.addr,e)}function A_(n,e){const t=qs(e,this.size,2);n.uniform2fv(this.addr,t)}function R_(n,e){const t=qs(e,this.size,3);n.uniform3fv(this.addr,t)}function C_(n,e){const t=qs(e,this.size,4);n.uniform4fv(this.addr,t)}function P_(n,e){const t=qs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function L_(n,e){const t=qs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function I_(n,e){const t=qs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function D_(n,e){n.uniform1iv(this.addr,e)}function U_(n,e){n.uniform2iv(this.addr,e)}function N_(n,e){n.uniform3iv(this.addr,e)}function F_(n,e){n.uniform4iv(this.addr,e)}function O_(n,e){n.uniform1uiv(this.addr,e)}function B_(n,e){n.uniform2uiv(this.addr,e)}function k_(n,e){n.uniform3uiv(this.addr,e)}function z_(n,e){n.uniform4uiv(this.addr,e)}function H_(n,e,t){const i=this.cache,s=e.length,r=Po(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Td,r[o])}function G_(n,e,t){const i=this.cache,s=e.length,r=Po(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Rd,r[o])}function V_(n,e,t){const i=this.cache,s=e.length,r=Po(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Cd,r[o])}function W_(n,e,t){const i=this.cache,s=e.length,r=Po(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),Ct(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Ad,r[o])}function X_(n){switch(n){case 5126:return T_;case 35664:return A_;case 35665:return R_;case 35666:return C_;case 35674:return P_;case 35675:return L_;case 35676:return I_;case 5124:case 35670:return D_;case 35667:case 35671:return U_;case 35668:case 35672:return N_;case 35669:case 35673:return F_;case 5125:return O_;case 36294:return B_;case 36295:return k_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return G_;case 35680:case 36300:case 36308:case 36293:return V_;case 36289:case 36303:case 36311:case 36292:return W_}}class q_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=w_(t.type)}}class Y_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=X_(t.type)}}class $_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const va=/(\w+)(\])?(\[|\.)?/g;function Ih(n,e){n.seq.push(e),n.map[e.id]=e}function K_(n,e,t){const i=n.name,s=i.length;for(va.lastIndex=0;;){const r=va.exec(i),o=va.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ih(t,c===void 0?new q_(a,n,e):new Y_(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new $_(a),Ih(t,u)),t=u}}}class vo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);K_(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Dh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const j_=37297;let Z_=0;function J_(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function Q_(n){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(n);let i;switch(e===t?i="":e===Eo&&t===yo?i="LinearDisplayP3ToLinearSRGB":e===yo&&t===Eo&&(i="LinearSRGBToLinearDisplayP3"),n){case bi:case Co:return[i,"LinearTransferOETF"];case sn:case lc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Uh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+J_(n.getShaderSource(e),o)}else return s}function ev(n,e){const t=Q_(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function tv(n,e){let t;switch(e){case n0:t="Linear";break;case i0:t="Reinhard";break;case s0:t="Cineon";break;case ec:t="ACESFilmic";break;case o0:t="AgX";break;case a0:t="Neutral";break;case r0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jr=new D;function nv(){ot.getLuminanceCoefficients(Jr);const n=Jr.x.toFixed(4),e=Jr.y.toFixed(4),t=Jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ur).join(`
`)}function sv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ur(n){return n!==""}function Nh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(n){return n.replace(ov,lv)}const av=new Map;function lv(n,e){let t=Ge[e];if(t===void 0){const i=av.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kl(t)}const cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oh(n){return n.replace(cv,hv)}function hv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function uv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===id?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Nf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function dv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Bs:case ks:e="ENVMAP_TYPE_CUBE";break;case Ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function pv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ql:e="ENVMAP_BLENDING_MULTIPLY";break;case e0:e="ENVMAP_BLENDING_MIX";break;case t0:e="ENVMAP_BLENDING_ADD";break}return e}function mv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function gv(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=uv(t),c=dv(t),h=fv(t),u=pv(t),f=mv(t),d=iv(t),_=sv(r),v=s.createProgram();let p,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ur).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ur).join(`
`),m.length>0&&(m+=`
`)):(p=[Bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ur).join(`
`),m=[Bh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Si?tv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,ev("linearToOutputTexel",t.outputColorSpace),nv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ur).join(`
`)),o=kl(o),o=Nh(o,t),o=Fh(o,t),a=kl(a),a=Nh(a,t),a=Fh(a,t),o=Oh(o),a=Oh(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=x+p+o,b=x+m+a,C=Dh(s,s.VERTEX_SHADER,M),w=Dh(s,s.FRAGMENT_SHADER,b);s.attachShader(v,C),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function S(y){if(n.debug.checkShaderErrors){const L=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(C).trim(),z=s.getShaderInfoLog(w).trim();let $=!0,G=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,C,w);else{const I=Uh(s,C,"vertex"),W=Uh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+L+`
`+I+`
`+W)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(O===""||z==="")&&(G=!1);G&&(y.diagnostics={runnable:$,programLog:L,vertexShader:{log:O,prefix:p},fragmentShader:{log:z,prefix:m}})}s.deleteShader(C),s.deleteShader(w),A=new vo(s,v),P=rv(s,v)}let A;this.getUniforms=function(){return A===void 0&&S(this),A};let P;this.getAttributes=function(){return P===void 0&&S(this),P};let g=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(v,j_)),g},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Z_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=w,this}let _v=0;class vv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new xv(e),t.set(e,i)),i}}class xv{constructor(e){this.id=_v++,this.code=e,this.usedTimes=0}}function Mv(n,e,t,i,s,r,o){const a=new uc,l=new vv,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures;let _=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return c.add(g),g===0?"uv":`uv${g}`}function m(g,y,L,O,z){const $=O.fog,G=z.geometry,I=g.isMeshStandardMaterial?O.environment:null,W=(g.isMeshStandardMaterial?t:e).get(g.envMap||I),ie=W&&W.mapping===Ro?W.image.height:null,oe=v[g.type];g.precision!==null&&(_=s.getMaxPrecision(g.precision),_!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",_,"instead."));const pe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ye=pe!==void 0?pe.length:0;let ue=0;G.morphAttributes.position!==void 0&&(ue=1),G.morphAttributes.normal!==void 0&&(ue=2),G.morphAttributes.color!==void 0&&(ue=3);let K,te,fe,de;if(oe){const we=Rn[oe];K=we.vertexShader,te=we.fragmentShader}else K=g.vertexShader,te=g.fragmentShader,l.update(g),fe=l.getVertexShaderID(g),de=l.getFragmentShaderID(g);const Le=n.getRenderTarget(),Re=z.isInstancedMesh===!0,qe=z.isBatchedMesh===!0,He=!!g.map,tt=!!g.matcap,U=!!W,xt=!!g.aoMap,Ye=!!g.lightMap,$e=!!g.bumpMap,Te=!!g.normalMap,nt=!!g.displacementMap,Ce=!!g.emissiveMap,R=!!g.metalnessMap,E=!!g.roughnessMap,q=g.anisotropy>0,J=g.clearcoat>0,ne=g.dispersion>0,Z=g.iridescence>0,Me=g.sheen>0,ce=g.transmission>0,ge=q&&!!g.anisotropyMap,st=J&&!!g.clearcoatMap,se=J&&!!g.clearcoatNormalMap,_e=J&&!!g.clearcoatRoughnessMap,Ie=Z&&!!g.iridescenceMap,be=Z&&!!g.iridescenceThicknessMap,ve=Me&&!!g.sheenColorMap,Ke=Me&&!!g.sheenRoughnessMap,Pe=!!g.specularMap,at=!!g.specularColorMap,F=!!g.specularIntensityMap,V=ce&&!!g.transmissionMap,N=ce&&!!g.thicknessMap,H=!!g.gradientMap,j=!!g.alphaMap,Q=g.alphaTest>0,Se=!!g.alphaHash,Ue=!!g.extensions;let Fe=Si;g.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(Fe=n.toneMapping);const Ne={shaderID:oe,shaderType:g.type,shaderName:g.name,vertexShader:K,fragmentShader:te,defines:g.defines,customVertexShaderID:fe,customFragmentShaderID:de,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:_,batching:qe,batchingColor:qe&&z._colorsTexture!==null,instancing:Re,instancingColor:Re&&z.instanceColor!==null,instancingMorph:Re&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Le===null?n.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:bi,alphaToCoverage:!!g.alphaToCoverage,map:He,matcap:tt,envMap:U,envMapMode:U&&W.mapping,envMapCubeUVHeight:ie,aoMap:xt,lightMap:Ye,bumpMap:$e,normalMap:Te,displacementMap:d&&nt,emissiveMap:Ce,normalMapObjectSpace:Te&&g.normalMapType===d0,normalMapTangentSpace:Te&&g.normalMapType===ac,metalnessMap:R,roughnessMap:E,anisotropy:q,anisotropyMap:ge,clearcoat:J,clearcoatMap:st,clearcoatNormalMap:se,clearcoatRoughnessMap:_e,dispersion:ne,iridescence:Z,iridescenceMap:Ie,iridescenceThicknessMap:be,sheen:Me,sheenColorMap:ve,sheenRoughnessMap:Ke,specularMap:Pe,specularColorMap:at,specularIntensityMap:F,transmission:ce,transmissionMap:V,thicknessMap:N,gradientMap:H,opaque:g.transparent===!1&&g.blending===Rs&&g.alphaToCoverage===!1,alphaMap:j,alphaTest:Q,alphaHash:Se,combine:g.combine,mapUv:He&&p(g.map.channel),aoMapUv:xt&&p(g.aoMap.channel),lightMapUv:Ye&&p(g.lightMap.channel),bumpMapUv:$e&&p(g.bumpMap.channel),normalMapUv:Te&&p(g.normalMap.channel),displacementMapUv:nt&&p(g.displacementMap.channel),emissiveMapUv:Ce&&p(g.emissiveMap.channel),metalnessMapUv:R&&p(g.metalnessMap.channel),roughnessMapUv:E&&p(g.roughnessMap.channel),anisotropyMapUv:ge&&p(g.anisotropyMap.channel),clearcoatMapUv:st&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:se&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&p(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:be&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&p(g.sheenRoughnessMap.channel),specularMapUv:Pe&&p(g.specularMap.channel),specularColorMapUv:at&&p(g.specularColorMap.channel),specularIntensityMapUv:F&&p(g.specularIntensityMap.channel),transmissionMapUv:V&&p(g.transmissionMap.channel),thicknessMapUv:N&&p(g.thicknessMap.channel),alphaMapUv:j&&p(g.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Te||q),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(He||j),fog:!!$,useFog:g.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:ue,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Fe,decodeVideoTexture:He&&g.map.isVideoTexture===!0&&ot.getTransfer(g.map.colorSpace)===dt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===$n,flipSided:g.side===Zt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Ue&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&g.extensions.multiDraw===!0||qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function x(g){const y=[];if(g.shaderID?y.push(g.shaderID):(y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID)),g.defines!==void 0)for(const L in g.defines)y.push(L),y.push(g.defines[L]);return g.isRawShaderMaterial===!1&&(M(y,g),b(y,g),y.push(n.outputColorSpace)),y.push(g.customProgramCacheKey),y.join()}function M(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapCubeUVHeight),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.morphAttributeCount),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function b(g,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),g.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),g.push(a.mask)}function C(g){const y=v[g.type];let L;if(y){const O=Rn[y];L=ip.clone(O.uniforms)}else L=g.uniforms;return L}function w(g,y){let L;for(let O=0,z=h.length;O<z;O++){const $=h[O];if($.cacheKey===y){L=$,++L.usedTimes;break}}return L===void 0&&(L=new gv(n,y,g,r),h.push(L)),L}function S(g){if(--g.usedTimes===0){const y=h.indexOf(g);h[y]=h[h.length-1],h.pop(),g.destroy()}}function A(g){l.remove(g)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:C,acquireProgram:w,releaseProgram:S,releaseShaderCache:A,programs:h,dispose:P}}function Sv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function yv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function kh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,f,d,_,v,p){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:v,group:p},n[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=v,m.group=p),e++,m}function a(u,f,d,_,v,p){const m=o(u,f,d,_,v,p);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):t.push(m)}function l(u,f,d,_,v,p){const m=o(u,f,d,_,v,p);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||yv),i.length>1&&i.sort(f||kh),s.length>1&&s.sort(f||kh)}function h(){for(let u=e,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Ev(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new zh,n.set(i,[o])):s>=r.length?(o=new zh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function bv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Qe};break;case"SpotLight":t={position:new D,direction:new D,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function wv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Tv=0;function Av(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Rv(n){const e=new bv,t=wv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const s=new D,r=new We,o=new We;function a(c){let h=0,u=0,f=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let d=0,_=0,v=0,p=0,m=0,x=0,M=0,b=0,C=0,w=0,S=0;c.sort(Av);for(let P=0,g=c.length;P<g;P++){const y=c[P],L=y.color,O=y.intensity,z=y.distance,$=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)h+=L.r*O,u+=L.g*O,f+=L.b*O;else if(y.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(y.sh.coefficients[G],O);S++}else if(y.isDirectionalLight){const G=e.get(y);if(G.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const I=y.shadow,W=t.get(y);W.shadowIntensity=I.intensity,W.shadowBias=I.bias,W.shadowNormalBias=I.normalBias,W.shadowRadius=I.radius,W.shadowMapSize=I.mapSize,i.directionalShadow[d]=W,i.directionalShadowMap[d]=$,i.directionalShadowMatrix[d]=y.shadow.matrix,x++}i.directional[d]=G,d++}else if(y.isSpotLight){const G=e.get(y);G.position.setFromMatrixPosition(y.matrixWorld),G.color.copy(L).multiplyScalar(O),G.distance=z,G.coneCos=Math.cos(y.angle),G.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),G.decay=y.decay,i.spot[v]=G;const I=y.shadow;if(y.map&&(i.spotLightMap[C]=y.map,C++,I.updateMatrices(y),y.castShadow&&w++),i.spotLightMatrix[v]=I.matrix,y.castShadow){const W=t.get(y);W.shadowIntensity=I.intensity,W.shadowBias=I.bias,W.shadowNormalBias=I.normalBias,W.shadowRadius=I.radius,W.shadowMapSize=I.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=$,b++}v++}else if(y.isRectAreaLight){const G=e.get(y);G.color.copy(L).multiplyScalar(O),G.halfWidth.set(y.width*.5,0,0),G.halfHeight.set(0,y.height*.5,0),i.rectArea[p]=G,p++}else if(y.isPointLight){const G=e.get(y);if(G.color.copy(y.color).multiplyScalar(y.intensity),G.distance=y.distance,G.decay=y.decay,y.castShadow){const I=y.shadow,W=t.get(y);W.shadowIntensity=I.intensity,W.shadowBias=I.bias,W.shadowNormalBias=I.normalBias,W.shadowRadius=I.radius,W.shadowMapSize=I.mapSize,W.shadowCameraNear=I.camera.near,W.shadowCameraFar=I.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=y.shadow.matrix,M++}i.point[_]=G,_++}else if(y.isHemisphereLight){const G=e.get(y);G.skyColor.copy(y.color).multiplyScalar(O),G.groundColor.copy(y.groundColor).multiplyScalar(O),i.hemi[m]=G,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const A=i.hash;(A.directionalLength!==d||A.pointLength!==_||A.spotLength!==v||A.rectAreaLength!==p||A.hemiLength!==m||A.numDirectionalShadows!==x||A.numPointShadows!==M||A.numSpotShadows!==b||A.numSpotMaps!==C||A.numLightProbes!==S)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=p,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=S,A.directionalLength=d,A.pointLength=_,A.spotLength=v,A.rectAreaLength=p,A.hemiLength=m,A.numDirectionalShadows=x,A.numPointShadows=M,A.numSpotShadows=b,A.numSpotMaps=C,A.numLightProbes=S,i.version=Tv++)}function l(c,h){let u=0,f=0,d=0,_=0,v=0;const p=h.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const M=c[m];if(M.isDirectionalLight){const b=i.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(M.isSpotLight){const b=i.spot[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(M.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function Hh(n){const e=new Rv(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Cv(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Hh(n),e.set(s,[a])):r>=o.length?(a=new Hh(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Pv extends Xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lv extends Xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dv=`uniform sampler2D shadow_pass;
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
}`;function Uv(n,e,t){let i=new fc;const s=new it,r=new it,o=new ft,a=new Pv({depthPacking:u0}),l=new Lv,c={},h=t.maxTextureSize,u={[Qn]:Zt,[Zt]:Qn,[$n]:$n},f=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Iv,fragmentShader:Dv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new yn;_.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new me(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=id;let m=this.type;this.render=function(w,S,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const P=n.getRenderTarget(),g=n.getActiveCubeFace(),y=n.getActiveMipmapLevel(),L=n.state;L.setBlending(Mi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const O=m!==Yn&&this.type===Yn,z=m===Yn&&this.type!==Yn;for(let $=0,G=w.length;$<G;$++){const I=w[$],W=I.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ie=W.getFrameExtents();if(s.multiply(ie),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,W.mapSize.y=r.y)),W.map===null||O===!0||z===!0){const pe=this.type!==Yn?{minFilter:jt,magFilter:jt}:{};W.map!==null&&W.map.dispose(),W.map=new qi(s.x,s.y,pe),W.map.texture.name=I.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const oe=W.getViewportCount();for(let pe=0;pe<oe;pe++){const ye=W.getViewport(pe);o.set(r.x*ye.x,r.y*ye.y,r.x*ye.z,r.y*ye.w),L.viewport(o),W.updateMatrices(I,pe),i=W.getFrustum(),b(S,A,W.camera,I,this.type)}W.isPointLightShadow!==!0&&this.type===Yn&&x(W,A),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(P,g,y)};function x(w,S){const A=e.update(v);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new qi(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(S,null,A,f,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(S,null,A,d,v,null)}function M(w,S,A,P){let g=null;const y=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(y!==void 0)g=y;else if(g=A.isPointLight===!0?l:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const L=g.uuid,O=S.uuid;let z=c[L];z===void 0&&(z={},c[L]=z);let $=z[O];$===void 0&&($=g.clone(),z[O]=$,S.addEventListener("dispose",C)),g=$}if(g.visible=S.visible,g.wireframe=S.wireframe,P===Yn?g.side=S.shadowSide!==null?S.shadowSide:S.side:g.side=S.shadowSide!==null?S.shadowSide:u[S.side],g.alphaMap=S.alphaMap,g.alphaTest=S.alphaTest,g.map=S.map,g.clipShadows=S.clipShadows,g.clippingPlanes=S.clippingPlanes,g.clipIntersection=S.clipIntersection,g.displacementMap=S.displacementMap,g.displacementScale=S.displacementScale,g.displacementBias=S.displacementBias,g.wireframeLinewidth=S.wireframeLinewidth,g.linewidth=S.linewidth,A.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const L=n.properties.get(g);L.light=A}return g}function b(w,S,A,P,g){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&g===Yn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const O=e.update(w),z=w.material;if(Array.isArray(z)){const $=O.groups;for(let G=0,I=$.length;G<I;G++){const W=$[G],ie=z[W.materialIndex];if(ie&&ie.visible){const oe=M(w,ie,P,g);w.onBeforeShadow(n,w,S,A,O,oe,W),n.renderBufferDirect(A,null,O,oe,w,W),w.onAfterShadow(n,w,S,A,O,oe,W)}}}else if(z.visible){const $=M(w,z,P,g);w.onBeforeShadow(n,w,S,A,O,$,null),n.renderBufferDirect(A,null,O,$,w,null),w.onAfterShadow(n,w,S,A,O,$,null)}}const L=w.children;for(let O=0,z=L.length;O<z;O++)b(L[O],S,A,P,g)}function C(w){w.target.removeEventListener("dispose",C);for(const A in c){const P=c[A],g=w.target.uuid;g in P&&(P[g].dispose(),delete P[g])}}}const Nv={[il]:sl,[rl]:ll,[ol]:cl,[Os]:al,[sl]:il,[ll]:rl,[cl]:ol,[al]:Os};function Fv(n){function e(){let F=!1;const V=new ft;let N=null;const H=new ft(0,0,0,0);return{setMask:function(j){N!==j&&!F&&(n.colorMask(j,j,j,j),N=j)},setLocked:function(j){F=j},setClear:function(j,Q,Se,Ue,Fe){Fe===!0&&(j*=Ue,Q*=Ue,Se*=Ue),V.set(j,Q,Se,Ue),H.equals(V)===!1&&(n.clearColor(j,Q,Se,Ue),H.copy(V))},reset:function(){F=!1,N=null,H.set(-1,0,0,0)}}}function t(){let F=!1,V=!1,N=null,H=null,j=null;return{setReversed:function(Q){V=Q},setTest:function(Q){Q?fe(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(Q){N!==Q&&!F&&(n.depthMask(Q),N=Q)},setFunc:function(Q){if(V&&(Q=Nv[Q]),H!==Q){switch(Q){case il:n.depthFunc(n.NEVER);break;case sl:n.depthFunc(n.ALWAYS);break;case rl:n.depthFunc(n.LESS);break;case Os:n.depthFunc(n.LEQUAL);break;case ol:n.depthFunc(n.EQUAL);break;case al:n.depthFunc(n.GEQUAL);break;case ll:n.depthFunc(n.GREATER);break;case cl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}H=Q}},setLocked:function(Q){F=Q},setClear:function(Q){j!==Q&&(n.clearDepth(Q),j=Q)},reset:function(){F=!1,N=null,H=null,j=null}}}function i(){let F=!1,V=null,N=null,H=null,j=null,Q=null,Se=null,Ue=null,Fe=null;return{setTest:function(Ne){F||(Ne?fe(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(Ne){V!==Ne&&!F&&(n.stencilMask(Ne),V=Ne)},setFunc:function(Ne,we,gt){(N!==Ne||H!==we||j!==gt)&&(n.stencilFunc(Ne,we,gt),N=Ne,H=we,j=gt)},setOp:function(Ne,we,gt){(Q!==Ne||Se!==we||Ue!==gt)&&(n.stencilOp(Ne,we,gt),Q=Ne,Se=we,Ue=gt)},setLocked:function(Ne){F=Ne},setClear:function(Ne){Fe!==Ne&&(n.clearStencil(Ne),Fe=Ne)},reset:function(){F=!1,V=null,N=null,H=null,j=null,Q=null,Se=null,Ue=null,Fe=null}}}const s=new e,r=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],d=null,_=!1,v=null,p=null,m=null,x=null,M=null,b=null,C=null,w=new Qe(0,0,0),S=0,A=!1,P=null,g=null,y=null,L=null,O=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,G=0;const I=n.getParameter(n.VERSION);I.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(I)[1]),$=G>=1):I.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),$=G>=2);let W=null,ie={};const oe=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),ye=new ft().fromArray(oe),ue=new ft().fromArray(pe);function K(F,V,N,H){const j=new Uint8Array(4),Q=n.createTexture();n.bindTexture(F,Q),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Se=0;Se<N;Se++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(V,0,n.RGBA,1,1,H,0,n.RGBA,n.UNSIGNED_BYTE,j):n.texImage2D(V+Se,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,j);return Q}const te={};te[n.TEXTURE_2D]=K(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=K(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=K(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=K(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),fe(n.DEPTH_TEST),r.setFunc(Os),Ye(!1),$e($c),fe(n.CULL_FACE),U(Mi);function fe(F){c[F]!==!0&&(n.enable(F),c[F]=!0)}function de(F){c[F]!==!1&&(n.disable(F),c[F]=!1)}function Le(F,V){return h[F]!==V?(n.bindFramebuffer(F,V),h[F]=V,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=V),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=V),!0):!1}function Re(F,V){let N=f,H=!1;if(F){N=u.get(V),N===void 0&&(N=[],u.set(V,N));const j=F.textures;if(N.length!==j.length||N[0]!==n.COLOR_ATTACHMENT0){for(let Q=0,Se=j.length;Q<Se;Q++)N[Q]=n.COLOR_ATTACHMENT0+Q;N.length=j.length,H=!0}}else N[0]!==n.BACK&&(N[0]=n.BACK,H=!0);H&&n.drawBuffers(N)}function qe(F){return d!==F?(n.useProgram(F),d=F,!0):!1}const He={[zi]:n.FUNC_ADD,[Of]:n.FUNC_SUBTRACT,[Bf]:n.FUNC_REVERSE_SUBTRACT};He[kf]=n.MIN,He[zf]=n.MAX;const tt={[Hf]:n.ZERO,[Gf]:n.ONE,[Vf]:n.SRC_COLOR,[tl]:n.SRC_ALPHA,[Kf]:n.SRC_ALPHA_SATURATE,[Yf]:n.DST_COLOR,[Xf]:n.DST_ALPHA,[Wf]:n.ONE_MINUS_SRC_COLOR,[nl]:n.ONE_MINUS_SRC_ALPHA,[$f]:n.ONE_MINUS_DST_COLOR,[qf]:n.ONE_MINUS_DST_ALPHA,[jf]:n.CONSTANT_COLOR,[Zf]:n.ONE_MINUS_CONSTANT_COLOR,[Jf]:n.CONSTANT_ALPHA,[Qf]:n.ONE_MINUS_CONSTANT_ALPHA};function U(F,V,N,H,j,Q,Se,Ue,Fe,Ne){if(F===Mi){_===!0&&(de(n.BLEND),_=!1);return}if(_===!1&&(fe(n.BLEND),_=!0),F!==Ff){if(F!==v||Ne!==A){if((p!==zi||M!==zi)&&(n.blendEquation(n.FUNC_ADD),p=zi,M=zi),Ne)switch(F){case Rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vr:n.blendFunc(n.ONE,n.ONE);break;case Kc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Kc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case jc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}m=null,x=null,b=null,C=null,w.set(0,0,0),S=0,v=F,A=Ne}return}j=j||V,Q=Q||N,Se=Se||H,(V!==p||j!==M)&&(n.blendEquationSeparate(He[V],He[j]),p=V,M=j),(N!==m||H!==x||Q!==b||Se!==C)&&(n.blendFuncSeparate(tt[N],tt[H],tt[Q],tt[Se]),m=N,x=H,b=Q,C=Se),(Ue.equals(w)===!1||Fe!==S)&&(n.blendColor(Ue.r,Ue.g,Ue.b,Fe),w.copy(Ue),S=Fe),v=F,A=!1}function xt(F,V){F.side===$n?de(n.CULL_FACE):fe(n.CULL_FACE);let N=F.side===Zt;V&&(N=!N),Ye(N),F.blending===Rs&&F.transparent===!1?U(Mi):U(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),s.setMask(F.colorWrite);const H=F.stencilWrite;o.setTest(H),H&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),nt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(F){P!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),P=F)}function $e(F){F!==Df?(fe(n.CULL_FACE),F!==g&&(F===$c?n.cullFace(n.BACK):F===Uf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),g=F}function Te(F){F!==y&&($&&n.lineWidth(F),y=F)}function nt(F,V,N){F?(fe(n.POLYGON_OFFSET_FILL),(L!==V||O!==N)&&(n.polygonOffset(V,N),L=V,O=N)):de(n.POLYGON_OFFSET_FILL)}function Ce(F){F?fe(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function R(F){F===void 0&&(F=n.TEXTURE0+z-1),W!==F&&(n.activeTexture(F),W=F)}function E(F,V,N){N===void 0&&(W===null?N=n.TEXTURE0+z-1:N=W);let H=ie[N];H===void 0&&(H={type:void 0,texture:void 0},ie[N]=H),(H.type!==F||H.texture!==V)&&(W!==N&&(n.activeTexture(N),W=N),n.bindTexture(F,V||te[F]),H.type=F,H.texture=V)}function q(){const F=ie[W];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(F){ye.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ye.copy(F))}function ve(F){ue.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ue.copy(F))}function Ke(F,V){let N=l.get(V);N===void 0&&(N=new WeakMap,l.set(V,N));let H=N.get(F);H===void 0&&(H=n.getUniformBlockIndex(V,F.name),N.set(F,H))}function Pe(F,V){const H=l.get(V).get(F);a.get(V)!==H&&(n.uniformBlockBinding(V,H,F.__bindingPointIndex),a.set(V,H))}function at(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},W=null,ie={},h={},u=new WeakMap,f=[],d=null,_=!1,v=null,p=null,m=null,x=null,M=null,b=null,C=null,w=new Qe(0,0,0),S=0,A=!1,P=null,g=null,y=null,L=null,O=null,ye.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:fe,disable:de,bindFramebuffer:Le,drawBuffers:Re,useProgram:qe,setBlending:U,setMaterial:xt,setFlipSided:Ye,setCullFace:$e,setLineWidth:Te,setPolygonOffset:nt,setScissorTest:Ce,activeTexture:R,bindTexture:E,unbindTexture:q,compressedTexImage2D:J,compressedTexImage3D:ne,texImage2D:_e,texImage3D:Ie,updateUBOMapping:Ke,uniformBlockBinding:Pe,texStorage2D:st,texStorage3D:se,texSubImage2D:Z,texSubImage3D:Me,compressedTexSubImage2D:ce,compressedTexSubImage3D:ge,scissor:be,viewport:ve,reset:at}}function Gh(n,e,t,i){const s=Ov(i);switch(t){case ld:return n*e;case hd:return n*e;case ud:return n*e*2;case dd:return n*e/s.components*s.byteLength;case sc:return n*e/s.components*s.byteLength;case fd:return n*e*2/s.components*s.byteLength;case rc:return n*e*2/s.components*s.byteLength;case cd:return n*e*3/s.components*s.byteLength;case dn:return n*e*4/s.components*s.byteLength;case oc:return n*e*4/s.components*s.byteLength;case uo:case fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case po:case mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pl:case gl:return Math.max(n,16)*Math.max(e,8)/4;case fl:case ml:return Math.max(n,8)*Math.max(e,8)/2;case _l:case vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case yl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case wl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Al:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Il:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Dl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case go:case Ul:case Nl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case pd:case Fl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ol:case Bl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ov(n){switch(n){case ei:case rd:return{byteLength:1,components:1};case Mr:case od:case br:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case Xi:case tc:case Pn:return{byteLength:4,components:1};case ad:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Bv(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,E){return d?new OffscreenCanvas(R,E):wo("canvas")}function v(R,E,q){let J=1;const ne=Ce(R);if((ne.width>q||ne.height>q)&&(J=q/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(J*ne.width),Me=Math.floor(J*ne.height);u===void 0&&(u=_(Z,Me));const ce=E?_(Z,Me):u;return ce.width=Z,ce.height=Me,ce.getContext("2d").drawImage(R,0,0,Z,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Z+"x"+Me+")."),ce}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==jt&&R.minFilter!==un}function m(R){n.generateMipmap(R)}function x(R,E,q,J,ne=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=E;if(E===n.RED&&(q===n.FLOAT&&(Z=n.R32F),q===n.HALF_FLOAT&&(Z=n.R16F),q===n.UNSIGNED_BYTE&&(Z=n.R8)),E===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(Z=n.R8UI),q===n.UNSIGNED_SHORT&&(Z=n.R16UI),q===n.UNSIGNED_INT&&(Z=n.R32UI),q===n.BYTE&&(Z=n.R8I),q===n.SHORT&&(Z=n.R16I),q===n.INT&&(Z=n.R32I)),E===n.RG&&(q===n.FLOAT&&(Z=n.RG32F),q===n.HALF_FLOAT&&(Z=n.RG16F),q===n.UNSIGNED_BYTE&&(Z=n.RG8)),E===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(Z=n.RG8UI),q===n.UNSIGNED_SHORT&&(Z=n.RG16UI),q===n.UNSIGNED_INT&&(Z=n.RG32UI),q===n.BYTE&&(Z=n.RG8I),q===n.SHORT&&(Z=n.RG16I),q===n.INT&&(Z=n.RG32I)),E===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),q===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),q===n.UNSIGNED_INT&&(Z=n.RGB32UI),q===n.BYTE&&(Z=n.RGB8I),q===n.SHORT&&(Z=n.RGB16I),q===n.INT&&(Z=n.RGB32I)),E===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),q===n.UNSIGNED_INT&&(Z=n.RGBA32UI),q===n.BYTE&&(Z=n.RGBA8I),q===n.SHORT&&(Z=n.RGBA16I),q===n.INT&&(Z=n.RGBA32I)),E===n.RGB&&q===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),E===n.RGBA){const Me=ne?So:ot.getTransfer(J);q===n.FLOAT&&(Z=n.RGBA32F),q===n.HALF_FLOAT&&(Z=n.RGBA16F),q===n.UNSIGNED_BYTE&&(Z=Me===dt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function M(R,E){let q;return R?E===null||E===Xi||E===zs?q=n.DEPTH24_STENCIL8:E===Pn?q=n.DEPTH32F_STENCIL8:E===Mr&&(q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xi||E===zs?q=n.DEPTH_COMPONENT24:E===Pn?q=n.DEPTH_COMPONENT32F:E===Mr&&(q=n.DEPTH_COMPONENT16),q}function b(R,E){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==jt&&R.minFilter!==un?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function C(R){const E=R.target;E.removeEventListener("dispose",C),S(E),E.isVideoTexture&&h.delete(E)}function w(R){const E=R.target;E.removeEventListener("dispose",w),P(E)}function S(R){const E=i.get(R);if(E.__webglInit===void 0)return;const q=R.source,J=f.get(q);if(J){const ne=J[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&A(R),Object.keys(J).length===0&&f.delete(q)}i.remove(R)}function A(R){const E=i.get(R);n.deleteTexture(E.__webglTexture);const q=R.source,J=f.get(q);delete J[E.__cacheKey],o.memory.textures--}function P(R){const E=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let ne=0;ne<E.__webglFramebuffer[J].length;ne++)n.deleteFramebuffer(E.__webglFramebuffer[J][ne]);else n.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)n.deleteFramebuffer(E.__webglFramebuffer[J]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=R.textures;for(let J=0,ne=q.length;J<ne;J++){const Z=i.get(q[J]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(q[J])}i.remove(R)}let g=0;function y(){g=0}function L(){const R=g;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),g+=1,R}function O(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function z(R,E){const q=i.get(R);if(R.isVideoTexture&&Te(R),R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(q,R,E);return}}t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+E)}function $(R,E){const q=i.get(R);if(R.version>0&&q.__version!==R.version){ue(q,R,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+E)}function G(R,E){const q=i.get(R);if(R.version>0&&q.__version!==R.version){ue(q,R,E);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+E)}function I(R,E){const q=i.get(R);if(R.version>0&&q.__version!==R.version){K(q,R,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+E)}const W={[xr]:n.REPEAT,[_i]:n.CLAMP_TO_EDGE,[dl]:n.MIRRORED_REPEAT},ie={[jt]:n.NEAREST,[c0]:n.NEAREST_MIPMAP_NEAREST,[Ir]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[Xo]:n.LINEAR_MIPMAP_NEAREST,[vi]:n.LINEAR_MIPMAP_LINEAR},oe={[f0]:n.NEVER,[x0]:n.ALWAYS,[p0]:n.LESS,[md]:n.LEQUAL,[m0]:n.EQUAL,[v0]:n.GEQUAL,[g0]:n.GREATER,[_0]:n.NOTEQUAL};function pe(R,E){if(E.type===Pn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===un||E.magFilter===Xo||E.magFilter===Ir||E.magFilter===vi||E.minFilter===un||E.minFilter===Xo||E.minFilter===Ir||E.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,W[E.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,W[E.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,W[E.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ie[E.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ie[E.minFilter]),E.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,oe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===jt||E.minFilter!==Ir&&E.minFilter!==vi||E.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ye(R,E){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",C));const J=E.source;let ne=f.get(J);ne===void 0&&(ne={},f.set(J,ne));const Z=O(E);if(Z!==R.__cacheKey){ne[Z]===void 0&&(ne[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ne[Z].usedTimes++;const Me=ne[R.__cacheKey];Me!==void 0&&(ne[R.__cacheKey].usedTimes--,Me.usedTimes===0&&A(E)),R.__cacheKey=Z,R.__webglTexture=ne[Z].texture}return q}function ue(R,E,q){let J=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=n.TEXTURE_3D);const ne=ye(R,E),Z=E.source;t.bindTexture(J,R.__webglTexture,n.TEXTURE0+q);const Me=i.get(Z);if(Z.version!==Me.__version||ne===!0){t.activeTexture(n.TEXTURE0+q);const ce=ot.getPrimaries(ot.workingColorSpace),ge=E.colorSpace===gi?null:ot.getPrimaries(E.colorSpace),st=E.colorSpace===gi||ce===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let se=v(E.image,!1,s.maxTextureSize);se=nt(E,se);const _e=r.convert(E.format,E.colorSpace),Ie=r.convert(E.type);let be=x(E.internalFormat,_e,Ie,E.colorSpace,E.isVideoTexture);pe(J,E);let ve;const Ke=E.mipmaps,Pe=E.isVideoTexture!==!0,at=Me.__version===void 0||ne===!0,F=Z.dataReady,V=b(E,se);if(E.isDepthTexture)be=M(E.format===Hs,E.type),at&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,be,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,be,se.width,se.height,0,_e,Ie,null));else if(E.isDataTexture)if(Ke.length>0){Pe&&at&&t.texStorage2D(n.TEXTURE_2D,V,be,Ke[0].width,Ke[0].height);for(let N=0,H=Ke.length;N<H;N++)ve=Ke[N],Pe?F&&t.texSubImage2D(n.TEXTURE_2D,N,0,0,ve.width,ve.height,_e,Ie,ve.data):t.texImage2D(n.TEXTURE_2D,N,be,ve.width,ve.height,0,_e,Ie,ve.data);E.generateMipmaps=!1}else Pe?(at&&t.texStorage2D(n.TEXTURE_2D,V,be,se.width,se.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,_e,Ie,se.data)):t.texImage2D(n.TEXTURE_2D,0,be,se.width,se.height,0,_e,Ie,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Pe&&at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,V,be,Ke[0].width,Ke[0].height,se.depth);for(let N=0,H=Ke.length;N<H;N++)if(ve=Ke[N],E.format!==dn)if(_e!==null)if(Pe){if(F)if(E.layerUpdates.size>0){const j=Gh(ve.width,ve.height,E.format,E.type);for(const Q of E.layerUpdates){const Se=ve.data.subarray(Q*j/ve.data.BYTES_PER_ELEMENT,(Q+1)*j/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,N,0,0,Q,ve.width,ve.height,1,_e,Se,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,N,0,0,0,ve.width,ve.height,se.depth,_e,ve.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,N,be,ve.width,ve.height,se.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,N,0,0,0,ve.width,ve.height,se.depth,_e,Ie,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,N,be,ve.width,ve.height,se.depth,0,_e,Ie,ve.data)}else{Pe&&at&&t.texStorage2D(n.TEXTURE_2D,V,be,Ke[0].width,Ke[0].height);for(let N=0,H=Ke.length;N<H;N++)ve=Ke[N],E.format!==dn?_e!==null?Pe?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,N,0,0,ve.width,ve.height,_e,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,N,be,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?F&&t.texSubImage2D(n.TEXTURE_2D,N,0,0,ve.width,ve.height,_e,Ie,ve.data):t.texImage2D(n.TEXTURE_2D,N,be,ve.width,ve.height,0,_e,Ie,ve.data)}else if(E.isDataArrayTexture)if(Pe){if(at&&t.texStorage3D(n.TEXTURE_2D_ARRAY,V,be,se.width,se.height,se.depth),F)if(E.layerUpdates.size>0){const N=Gh(se.width,se.height,E.format,E.type);for(const H of E.layerUpdates){const j=se.data.subarray(H*N/se.data.BYTES_PER_ELEMENT,(H+1)*N/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,H,se.width,se.height,1,_e,Ie,j)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,_e,Ie,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,se.width,se.height,se.depth,0,_e,Ie,se.data);else if(E.isData3DTexture)Pe?(at&&t.texStorage3D(n.TEXTURE_3D,V,be,se.width,se.height,se.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,_e,Ie,se.data)):t.texImage3D(n.TEXTURE_3D,0,be,se.width,se.height,se.depth,0,_e,Ie,se.data);else if(E.isFramebufferTexture){if(at)if(Pe)t.texStorage2D(n.TEXTURE_2D,V,be,se.width,se.height);else{let N=se.width,H=se.height;for(let j=0;j<V;j++)t.texImage2D(n.TEXTURE_2D,j,be,N,H,0,_e,Ie,null),N>>=1,H>>=1}}else if(Ke.length>0){if(Pe&&at){const N=Ce(Ke[0]);t.texStorage2D(n.TEXTURE_2D,V,be,N.width,N.height)}for(let N=0,H=Ke.length;N<H;N++)ve=Ke[N],Pe?F&&t.texSubImage2D(n.TEXTURE_2D,N,0,0,_e,Ie,ve):t.texImage2D(n.TEXTURE_2D,N,be,_e,Ie,ve);E.generateMipmaps=!1}else if(Pe){if(at){const N=Ce(se);t.texStorage2D(n.TEXTURE_2D,V,be,N.width,N.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Ie,se)}else t.texImage2D(n.TEXTURE_2D,0,be,_e,Ie,se);p(E)&&m(J),Me.__version=Z.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function K(R,E,q){if(E.image.length!==6)return;const J=ye(R,E),ne=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+q);const Z=i.get(ne);if(ne.version!==Z.__version||J===!0){t.activeTexture(n.TEXTURE0+q);const Me=ot.getPrimaries(ot.workingColorSpace),ce=E.colorSpace===gi?null:ot.getPrimaries(E.colorSpace),ge=E.colorSpace===gi||Me===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const st=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,_e=[];for(let H=0;H<6;H++)!st&&!se?_e[H]=v(E.image[H],!0,s.maxCubemapSize):_e[H]=se?E.image[H].image:E.image[H],_e[H]=nt(E,_e[H]);const Ie=_e[0],be=r.convert(E.format,E.colorSpace),ve=r.convert(E.type),Ke=x(E.internalFormat,be,ve,E.colorSpace),Pe=E.isVideoTexture!==!0,at=Z.__version===void 0||J===!0,F=ne.dataReady;let V=b(E,Ie);pe(n.TEXTURE_CUBE_MAP,E);let N;if(st){Pe&&at&&t.texStorage2D(n.TEXTURE_CUBE_MAP,V,Ke,Ie.width,Ie.height);for(let H=0;H<6;H++){N=_e[H].mipmaps;for(let j=0;j<N.length;j++){const Q=N[j];E.format!==dn?be!==null?Pe?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,j,0,0,Q.width,Q.height,be,Q.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,j,Ke,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,j,0,0,Q.width,Q.height,be,ve,Q.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,j,Ke,Q.width,Q.height,0,be,ve,Q.data)}}}else{if(N=E.mipmaps,Pe&&at){N.length>0&&V++;const H=Ce(_e[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,V,Ke,H.width,H.height)}for(let H=0;H<6;H++)if(se){Pe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,_e[H].width,_e[H].height,be,ve,_e[H].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Ke,_e[H].width,_e[H].height,0,be,ve,_e[H].data);for(let j=0;j<N.length;j++){const Se=N[j].image[H].image;Pe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,j+1,0,0,Se.width,Se.height,be,ve,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,j+1,Ke,Se.width,Se.height,0,be,ve,Se.data)}}else{Pe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,be,ve,_e[H]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Ke,be,ve,_e[H]);for(let j=0;j<N.length;j++){const Q=N[j];Pe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,j+1,0,0,be,ve,Q.image[H]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+H,j+1,Ke,be,ve,Q.image[H])}}}p(E)&&m(n.TEXTURE_CUBE_MAP),Z.__version=ne.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function te(R,E,q,J,ne,Z){const Me=r.convert(q.format,q.colorSpace),ce=r.convert(q.type),ge=x(q.internalFormat,Me,ce,q.colorSpace);if(!i.get(E).__hasExternalTextures){const se=Math.max(1,E.width>>Z),_e=Math.max(1,E.height>>Z);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,Z,ge,se,_e,E.depth,0,Me,ce,null):t.texImage2D(ne,Z,ge,se,_e,0,Me,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),$e(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ne,i.get(q).__webglTexture,0,Ye(E)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ne,i.get(q).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function fe(R,E,q){if(n.bindRenderbuffer(n.RENDERBUFFER,R),E.depthBuffer){const J=E.depthTexture,ne=J&&J.isDepthTexture?J.type:null,Z=M(E.stencilBuffer,ne),Me=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=Ye(E);$e(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,Z,E.width,E.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,Z,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Z,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,R)}else{const J=E.textures;for(let ne=0;ne<J.length;ne++){const Z=J[ne],Me=r.convert(Z.format,Z.colorSpace),ce=r.convert(Z.type),ge=x(Z.internalFormat,Me,ce,Z.colorSpace),st=Ye(E);q&&$e(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,st,ge,E.width,E.height):$e(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st,ge,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ge,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);const J=i.get(E.depthTexture).__webglTexture,ne=Ye(E);if(E.depthTexture.format===Cs)$e(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(E.depthTexture.format===Hs)$e(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Le(R){const E=i.get(R),q=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){const ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=J}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");de(E.__webglFramebuffer,R)}else if(q){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=n.createRenderbuffer(),fe(E.__webglDepthbuffer[J],R,!1);else{const ne=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),fe(E.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ne)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(R,E,q){const J=i.get(R);E!==void 0&&te(J.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&Le(R)}function qe(R){const E=R.texture,q=i.get(R),J=i.get(E);R.addEventListener("dispose",w);const ne=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Me=ne.length>1;if(Me||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=E.version,o.memory.textures++),Z){q.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[ce]=[];for(let ge=0;ge<E.mipmaps.length;ge++)q.__webglFramebuffer[ce][ge]=n.createFramebuffer()}else q.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)q.__webglFramebuffer[ce]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ce=0,ge=ne.length;ce<ge;ce++){const st=i.get(ne[ce]);st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&$e(R)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ce=0;ce<ne.length;ce++){const ge=ne[ce];q.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[ce]);const st=r.convert(ge.format,ge.colorSpace),se=r.convert(ge.type),_e=x(ge.internalFormat,st,se,ge.colorSpace,R.isXRRenderTarget===!0),Ie=Ye(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ie,_e,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,q.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),fe(q.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),pe(n.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)te(q.__webglFramebuffer[ce][ge],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else te(q.__webglFramebuffer[ce],R,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);p(E)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ce=0,ge=ne.length;ce<ge;ce++){const st=ne[ce],se=i.get(st);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),pe(n.TEXTURE_2D,st),te(q.__webglFramebuffer,R,st,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),p(st)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,J.__webglTexture),pe(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)te(q.__webglFramebuffer[ge],R,E,n.COLOR_ATTACHMENT0,ce,ge);else te(q.__webglFramebuffer,R,E,n.COLOR_ATTACHMENT0,ce,0);p(E)&&m(ce),t.unbindTexture()}R.depthBuffer&&Le(R)}function He(R){const E=R.textures;for(let q=0,J=E.length;q<J;q++){const ne=E[q];if(p(ne)){const Z=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Me=i.get(ne).__webglTexture;t.bindTexture(Z,Me),m(Z),t.unbindTexture()}}}const tt=[],U=[];function xt(R){if(R.samples>0){if($e(R)===!1){const E=R.textures,q=R.width,J=R.height;let ne=n.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(R),ce=E.length>1;if(ce)for(let ge=0;ge<E.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ge=0;ge<E.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ge]);const st=i.get(E[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,st,0)}n.blitFramebuffer(0,0,q,J,0,0,q,J,ne,n.NEAREST),l===!0&&(tt.length=0,U.length=0,tt.push(n.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(tt.push(Z),U.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,U)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let ge=0;ge<E.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,Me.__webglColorRenderbuffer[ge]);const st=i.get(E[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,st,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Ye(R){return Math.min(s.maxSamples,R.samples)}function $e(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Te(R){const E=o.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function nt(R,E){const q=R.colorSpace,J=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||q!==bi&&q!==gi&&(ot.getTransfer(q)===dt?(J!==dn||ne!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}function Ce(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=y,this.setTexture2D=z,this.setTexture2DArray=$,this.setTexture3D=G,this.setTextureCube=I,this.rebindTextures=Re,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=te,this.useMultisampledRTT=$e}function kv(n,e){function t(i,s=gi){let r;const o=ot.getTransfer(s);if(i===ei)return n.UNSIGNED_BYTE;if(i===nc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ic)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ad)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===rd)return n.BYTE;if(i===od)return n.SHORT;if(i===Mr)return n.UNSIGNED_SHORT;if(i===tc)return n.INT;if(i===Xi)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===br)return n.HALF_FLOAT;if(i===ld)return n.ALPHA;if(i===cd)return n.RGB;if(i===dn)return n.RGBA;if(i===hd)return n.LUMINANCE;if(i===ud)return n.LUMINANCE_ALPHA;if(i===Cs)return n.DEPTH_COMPONENT;if(i===Hs)return n.DEPTH_STENCIL;if(i===dd)return n.RED;if(i===sc)return n.RED_INTEGER;if(i===fd)return n.RG;if(i===rc)return n.RG_INTEGER;if(i===oc)return n.RGBA_INTEGER;if(i===uo||i===fo||i===po||i===mo)if(o===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fl||i===pl||i===ml||i===gl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_l||i===vl||i===xl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===_l||i===vl)return o===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===xl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ml||i===Sl||i===yl||i===El||i===bl||i===wl||i===Tl||i===Al||i===Rl||i===Cl||i===Pl||i===Ll||i===Il||i===Dl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ml)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Sl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===El)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Tl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Al)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ll)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Il)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dl)return o===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===go||i===Ul||i===Nl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===go)return o===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pd||i===Fl||i===Ol||i===Bl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===go)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ol)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class zv extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Je extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hv={type:"move"};class xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,i),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Je;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Gv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vv=`
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

}`;class Wv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Bt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ei({vertexShader:Gv,fragmentShader:Vv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new me(new Tr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xv extends Vs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,_=null;const v=new Wv,p=t.getContextAttributes();let m=null,x=null;const M=[],b=[],C=new it;let w=null;const S=new Kt;S.layers.enable(1),S.viewport=new ft;const A=new Kt;A.layers.enable(2),A.viewport=new ft;const P=[S,A],g=new zv;g.layers.enable(1),g.layers.enable(2);let y=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let te=M[K];return te===void 0&&(te=new xa,M[K]=te),te.getTargetRaySpace()},this.getControllerGrip=function(K){let te=M[K];return te===void 0&&(te=new xa,M[K]=te),te.getGripSpace()},this.getHand=function(K){let te=M[K];return te===void 0&&(te=new xa,M[K]=te),te.getHandSpace()};function O(K){const te=b.indexOf(K.inputSource);if(te===-1)return;const fe=M[te];fe!==void 0&&(fe.update(K.inputSource,K.frame,c||o),fe.dispatchEvent({type:K.type,data:K.inputSource}))}function z(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",$);for(let K=0;K<M.length;K++){const te=b[K];te!==null&&(b[K]=null,M[K].disconnect(te))}y=null,L=null,v.reset(),e.setRenderTarget(m),d=null,f=null,u=null,s=null,x=null,ue.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",z),s.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new qi(d.framebufferWidth,d.framebufferHeight,{format:dn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,fe=null,de=null;p.depth&&(de=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=p.stencil?Hs:Cs,fe=p.stencil?zs:Xi);const Le={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Le),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new qi(f.textureWidth,f.textureHeight,{format:dn,type:ei,depthTexture:new wd(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ue.setContext(s),ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(K){for(let te=0;te<K.removed.length;te++){const fe=K.removed[te],de=b.indexOf(fe);de>=0&&(b[de]=null,M[de].disconnect(fe))}for(let te=0;te<K.added.length;te++){const fe=K.added[te];let de=b.indexOf(fe);if(de===-1){for(let Re=0;Re<M.length;Re++)if(Re>=b.length){b.push(fe),de=Re;break}else if(b[Re]===null){b[Re]=fe,de=Re;break}if(de===-1)break}const Le=M[de];Le&&Le.connect(fe)}}const G=new D,I=new D;function W(K,te,fe){G.setFromMatrixPosition(te.matrixWorld),I.setFromMatrixPosition(fe.matrixWorld);const de=G.distanceTo(I),Le=te.projectionMatrix.elements,Re=fe.projectionMatrix.elements,qe=Le[14]/(Le[10]-1),He=Le[14]/(Le[10]+1),tt=(Le[9]+1)/Le[5],U=(Le[9]-1)/Le[5],xt=(Le[8]-1)/Le[0],Ye=(Re[8]+1)/Re[0],$e=qe*xt,Te=qe*Ye,nt=de/(-xt+Ye),Ce=nt*-xt;if(te.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ce),K.translateZ(nt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Le[10]===-1)K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const R=qe+nt,E=He+nt,q=$e-Ce,J=Te+(de-Ce),ne=tt*He/E*R,Z=U*He/E*R;K.projectionMatrix.makePerspective(q,J,ne,Z,R,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ie(K,te){te===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(te.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let te=K.near,fe=K.far;v.texture!==null&&(v.depthNear>0&&(te=v.depthNear),v.depthFar>0&&(fe=v.depthFar)),g.near=A.near=S.near=te,g.far=A.far=S.far=fe,(y!==g.near||L!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),y=g.near,L=g.far);const de=K.parent,Le=g.cameras;ie(g,de);for(let Re=0;Re<Le.length;Re++)ie(Le[Re],de);Le.length===2?W(g,S,A):g.projectionMatrix.copy(S.projectionMatrix),oe(K,g,de)};function oe(K,te,fe){fe===null?K.matrix.copy(te.matrixWorld):(K.matrix.copy(fe.matrixWorld),K.matrix.invert(),K.matrix.multiply(te.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Sr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(g)};let pe=null;function ye(K,te){if(h=te.getViewerPose(c||o),_=te,h!==null){const fe=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let de=!1;fe.length!==g.cameras.length&&(g.cameras.length=0,de=!0);for(let Re=0;Re<fe.length;Re++){const qe=fe[Re];let He=null;if(d!==null)He=d.getViewport(qe);else{const U=u.getViewSubImage(f,qe);He=U.viewport,Re===0&&(e.setRenderTargetTextures(x,U.colorTexture,f.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(x))}let tt=P[Re];tt===void 0&&(tt=new Kt,tt.layers.enable(Re),tt.viewport=new ft,P[Re]=tt),tt.matrix.fromArray(qe.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(qe.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(He.x,He.y,He.width,He.height),Re===0&&(g.matrix.copy(tt.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),de===!0&&g.cameras.push(tt)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Re=u.getDepthInformation(fe[0]);Re&&Re.isValid&&Re.texture&&v.init(e,Re,s.renderState)}}for(let fe=0;fe<M.length;fe++){const de=b[fe],Le=M[fe];de!==null&&Le!==void 0&&Le.update(de,te,c||o)}pe&&pe(K,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const ue=new bd;ue.setAnimationLoop(ye),this.setAnimationLoop=function(K){pe=K},this.dispose=function(){}}}const Ni=new Nt,qv=new We;function Yv(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Sd(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,x,M,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,x,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Zt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Zt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),M=x.envMap,b=x.envMapRotation;M&&(p.envMap.value=M,Ni.copy(b),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),p.envMapRotation.value.setFromMatrix4(qv.makeRotationFromEuler(Ni)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,x,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Zt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $v(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const b=M.program;i.uniformBlockBinding(x,b)}function c(x,M){let b=s[x.id];b===void 0&&(_(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",p));const C=M.program;i.updateUBOMapping(x,C);const w=e.render.frame;r[x.id]!==w&&(f(x),r[x.id]=w)}function h(x){const M=u();x.__bindingPointIndex=M;const b=n.createBuffer(),C=x.__size,w=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,b),b}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const M=s[x.id],b=x.uniforms,C=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let w=0,S=b.length;w<S;w++){const A=Array.isArray(b[w])?b[w]:[b[w]];for(let P=0,g=A.length;P<g;P++){const y=A[P];if(d(y,w,P,C)===!0){const L=y.__offset,O=Array.isArray(y.value)?y.value:[y.value];let z=0;for(let $=0;$<O.length;$++){const G=O[$],I=v(G);typeof G=="number"||typeof G=="boolean"?(y.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,L+z,y.__data)):G.isMatrix3?(y.__data[0]=G.elements[0],y.__data[1]=G.elements[1],y.__data[2]=G.elements[2],y.__data[3]=0,y.__data[4]=G.elements[3],y.__data[5]=G.elements[4],y.__data[6]=G.elements[5],y.__data[7]=0,y.__data[8]=G.elements[6],y.__data[9]=G.elements[7],y.__data[10]=G.elements[8],y.__data[11]=0):(G.toArray(y.__data,z),z+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,L,y.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,M,b,C){const w=x.value,S=M+"_"+b;if(C[S]===void 0)return typeof w=="number"||typeof w=="boolean"?C[S]=w:C[S]=w.clone(),!0;{const A=C[S];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return C[S]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function _(x){const M=x.uniforms;let b=0;const C=16;for(let S=0,A=M.length;S<A;S++){const P=Array.isArray(M[S])?M[S]:[M[S]];for(let g=0,y=P.length;g<y;g++){const L=P[g],O=Array.isArray(L.value)?L.value:[L.value];for(let z=0,$=O.length;z<$;z++){const G=O[z],I=v(G),W=b%C,ie=W%I.boundary,oe=W+ie;b+=ie,oe!==0&&C-oe<I.storage&&(b+=C-oe),L.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=I.storage}}}const w=b%C;return w>0&&(b+=C-w),x.__size=b,x.__cache={},this}function v(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function p(x){const M=x.target;M.removeEventListener("dispose",p);const b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class gc{constructor(e={}){const{canvas:t=F0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=Si,this.toneMappingExposure=1;const M=this;let b=!1,C=0,w=0,S=null,A=-1,P=null;const g=new ft,y=new ft;let L=null;const O=new Qe(0);let z=0,$=t.width,G=t.height,I=1,W=null,ie=null;const oe=new ft(0,0,$,G),pe=new ft(0,0,$,G);let ye=!1;const ue=new fc;let K=!1,te=!1;const fe=new We,de=new We,Le=new D,Re=new ft,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function tt(){return S===null?I:1}let U=i;function xt(T,B){return t.getContext(T,B)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jl}`),t.addEventListener("webglcontextlost",H,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",Q,!1),U===null){const B="webgl2";if(U=xt(B,T),U===null)throw xt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ye,$e,Te,nt,Ce,R,E,q,J,ne,Z,Me,ce,ge,st,se,_e,Ie,be,ve,Ke,Pe,at,F;function V(){Ye=new e_(U),Ye.init(),Pe=new kv(U,Ye),$e=new $g(U,Ye,e,Pe),Te=new Fv(U),$e.reverseDepthBuffer&&Te.buffers.depth.setReversed(!0),nt=new i_(U),Ce=new Sv,R=new Bv(U,Ye,Te,Ce,$e,Pe,nt),E=new jg(M),q=new Qg(M),J=new hp(U),at=new qg(U,J),ne=new t_(U,J,nt,at),Z=new r_(U,ne,J,nt),be=new s_(U,$e,R),se=new Kg(Ce),Me=new Mv(M,E,q,Ye,$e,at,se),ce=new Yv(M,Ce),ge=new Ev,st=new Cv(Ye),Ie=new Xg(M,E,q,Te,Z,f,l),_e=new Uv(M,Z,$e),F=new $v(U,nt,$e,Te),ve=new Yg(U,Ye,nt),Ke=new n_(U,Ye,nt),nt.programs=Me.programs,M.capabilities=$e,M.extensions=Ye,M.properties=Ce,M.renderLists=ge,M.shadowMap=_e,M.state=Te,M.info=nt}V();const N=new Xv(M,U);this.xr=N,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(T){T!==void 0&&(I=T,this.setSize($,G,!1))},this.getSize=function(T){return T.set($,G)},this.setSize=function(T,B,Y=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,G=B,t.width=Math.floor(T*I),t.height=Math.floor(B*I),Y===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set($*I,G*I).floor()},this.setDrawingBufferSize=function(T,B,Y){$=T,G=B,I=Y,t.width=Math.floor(T*Y),t.height=Math.floor(B*Y),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(g)},this.getViewport=function(T){return T.copy(oe)},this.setViewport=function(T,B,Y,X){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,B,Y,X),Te.viewport(g.copy(oe).multiplyScalar(I).round())},this.getScissor=function(T){return T.copy(pe)},this.setScissor=function(T,B,Y,X){T.isVector4?pe.set(T.x,T.y,T.z,T.w):pe.set(T,B,Y,X),Te.scissor(y.copy(pe).multiplyScalar(I).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(T){Te.setScissorTest(ye=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){ie=T},this.getClearColor=function(T){return T.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(T=!0,B=!0,Y=!0){let X=0;if(T){let k=!1;if(S!==null){const re=S.texture.format;k=re===oc||re===rc||re===sc}if(k){const re=S.texture.type,ae=re===ei||re===Xi||re===Mr||re===zs||re===nc||re===ic,he=Ie.getClearColor(),xe=Ie.getClearAlpha(),Ae=he.r,De=he.g,ee=he.b;ae?(d[0]=Ae,d[1]=De,d[2]=ee,d[3]=xe,U.clearBufferuiv(U.COLOR,0,d)):(_[0]=Ae,_[1]=De,_[2]=ee,_[3]=xe,U.clearBufferiv(U.COLOR,0,_))}else X|=U.COLOR_BUFFER_BIT}B&&(X|=U.DEPTH_BUFFER_BIT,U.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Y&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",H,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),ge.dispose(),st.dispose(),Ce.dispose(),E.dispose(),q.dispose(),Z.dispose(),at.dispose(),F.dispose(),Me.dispose(),N.dispose(),N.removeEventListener("sessionstart",Ki),N.removeEventListener("sessionend",Ai),wn.stop()};function H(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=nt.autoReset,B=_e.enabled,Y=_e.autoUpdate,X=_e.needsUpdate,k=_e.type;V(),nt.autoReset=T,_e.enabled=B,_e.autoUpdate=Y,_e.needsUpdate=X,_e.type=k}function Q(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Se(T){const B=T.target;B.removeEventListener("dispose",Se),Ue(B)}function Ue(T){Fe(T),Ce.remove(T)}function Fe(T){const B=Ce.get(T).programs;B!==void 0&&(B.forEach(function(Y){Me.releaseProgram(Y)}),T.isShaderMaterial&&Me.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,Y,X,k,re){B===null&&(B=qe);const ae=k.isMesh&&k.matrixWorld.determinant()<0,he=Ys(T,B,Y,X,k);Te.setMaterial(X,ae);let xe=Y.index,Ae=1;if(X.wireframe===!0){if(xe=ne.getWireframeAttribute(Y),xe===void 0)return;Ae=2}const De=Y.drawRange,ee=Y.attributes.position;let ze=De.start*Ae,Xe=(De.start+De.count)*Ae;re!==null&&(ze=Math.max(ze,re.start*Ae),Xe=Math.min(Xe,(re.start+re.count)*Ae)),xe!==null?(ze=Math.max(ze,0),Xe=Math.min(Xe,xe.count)):ee!=null&&(ze=Math.max(ze,0),Xe=Math.min(Xe,ee.count));const ut=Xe-ze;if(ut<0||ut===1/0)return;at.setup(k,X,he,Y,xe);let Dt,je=ve;if(xe!==null&&(Dt=J.get(xe),je=Ke,je.setIndex(Dt)),k.isMesh)X.wireframe===!0?(Te.setLineWidth(X.wireframeLinewidth*tt()),je.setMode(U.LINES)):je.setMode(U.TRIANGLES);else if(k.isLine){let Ee=X.linewidth;Ee===void 0&&(Ee=1),Te.setLineWidth(Ee*tt()),k.isLineSegments?je.setMode(U.LINES):k.isLineLoop?je.setMode(U.LINE_LOOP):je.setMode(U.LINE_STRIP)}else k.isPoints?je.setMode(U.POINTS):k.isSprite&&je.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)je.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))je.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ee=k._multiDrawStarts,Ut=k._multiDrawCounts,rt=k._multiDrawCount,pn=xe?J.get(xe).bytesPerElement:1,Qi=Ce.get(X).currentProgram.getUniforms();for(let Qt=0;Qt<rt;Qt++)Qi.setValue(U,"_gl_DrawID",Qt),je.render(Ee[Qt]/pn,Ut[Qt])}else if(k.isInstancedMesh)je.renderInstances(ze,ut,k.count);else if(Y.isInstancedBufferGeometry){const Ee=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ut=Math.min(Y.instanceCount,Ee);je.renderInstances(ze,ut,Ut)}else je.render(ze,ut)};function Ne(T,B,Y){T.transparent===!0&&T.side===$n&&T.forceSinglePass===!1?(T.side=Zt,T.needsUpdate=!0,Bn(T,B,Y),T.side=Qn,T.needsUpdate=!0,Bn(T,B,Y),T.side=$n):Bn(T,B,Y)}this.compile=function(T,B,Y=null){Y===null&&(Y=T),p=st.get(Y),p.init(B),x.push(p),Y.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),T!==Y&&T.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const X=new Set;return T.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const re=k.material;if(re)if(Array.isArray(re))for(let ae=0;ae<re.length;ae++){const he=re[ae];Ne(he,Y,k),X.add(he)}else Ne(re,Y,k),X.add(re)}),x.pop(),p=null,X},this.compileAsync=function(T,B,Y=null){const X=this.compile(T,B,Y);return new Promise(k=>{function re(){if(X.forEach(function(ae){Ce.get(ae).currentProgram.isReady()&&X.delete(ae)}),X.size===0){k(T);return}setTimeout(re,10)}Ye.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let we=null;function gt(T){we&&we(T)}function Ki(){wn.stop()}function Ai(){wn.start()}const wn=new bd;wn.setAnimationLoop(gt),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(T){we=T,N.setAnimationLoop(T),T===null?wn.stop():wn.start()},N.addEventListener("sessionstart",Ki),N.addEventListener("sessionend",Ai),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(B),B=N.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,B,S),p=st.get(T,x.length),p.init(B),x.push(p),de.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ue.setFromProjectionMatrix(de),te=this.localClippingEnabled,K=se.init(this.clippingPlanes,te),v=ge.get(T,m.length),v.init(),m.push(v),N.enabled===!0&&N.isPresenting===!0){const re=M.xr.getDepthSensingMesh();re!==null&&ii(re,B,-1/0,M.sortObjects)}ii(T,B,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(W,ie),He=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1,He&&Ie.addToRenderList(v,T),this.info.render.frame++,K===!0&&se.beginShadows();const Y=p.state.shadowsArray;_e.render(Y,T,B),K===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=v.opaque,k=v.transmissive;if(p.setupLights(),B.isArrayCamera){const re=B.cameras;if(k.length>0)for(let ae=0,he=re.length;ae<he;ae++){const xe=re[ae];Ri(X,k,T,xe)}He&&Ie.render(T);for(let ae=0,he=re.length;ae<he;ae++){const xe=re[ae];ji(v,T,xe,xe.viewport)}}else k.length>0&&Ri(X,k,T,B),He&&Ie.render(T),ji(v,T,B);S!==null&&(R.updateMultisampleRenderTarget(S),R.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(M,T,B),at.resetDefaultState(),A=-1,P=null,x.pop(),x.length>0?(p=x[x.length-1],K===!0&&se.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function ii(T,B,Y,X){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ue.intersectsSprite(T)){X&&Re.setFromMatrixPosition(T.matrixWorld).applyMatrix4(de);const ae=Z.update(T),he=T.material;he.visible&&v.push(T,ae,he,Y,Re.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ue.intersectsObject(T))){const ae=Z.update(T),he=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Re.copy(T.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Re.copy(ae.boundingSphere.center)),Re.applyMatrix4(T.matrixWorld).applyMatrix4(de)),Array.isArray(he)){const xe=ae.groups;for(let Ae=0,De=xe.length;Ae<De;Ae++){const ee=xe[Ae],ze=he[ee.materialIndex];ze&&ze.visible&&v.push(T,ae,ze,Y,Re.z,ee)}}else he.visible&&v.push(T,ae,he,Y,Re.z,null)}}const re=T.children;for(let ae=0,he=re.length;ae<he;ae++)ii(re[ae],B,Y,X)}function ji(T,B,Y,X){const k=T.opaque,re=T.transmissive,ae=T.transparent;p.setupLightsView(Y),K===!0&&se.setGlobalState(M.clippingPlanes,Y),X&&Te.viewport(g.copy(X)),k.length>0&&Ci(k,B,Y),re.length>0&&Ci(re,B,Y),ae.length>0&&Ci(ae,B,Y),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Ri(T,B,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new qi(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?br:ei,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const re=p.state.transmissionRenderTarget[X.id],ae=X.viewport||g;re.setSize(ae.z,ae.w);const he=M.getRenderTarget();M.setRenderTarget(re),M.getClearColor(O),z=M.getClearAlpha(),z<1&&M.setClearColor(16777215,.5),M.clear(),He&&Ie.render(Y);const xe=M.toneMapping;M.toneMapping=Si;const Ae=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),K===!0&&se.setGlobalState(M.clippingPlanes,X),Ci(T,Y,X),R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ee=0,ze=B.length;ee<ze;ee++){const Xe=B[ee],ut=Xe.object,Dt=Xe.geometry,je=Xe.material,Ee=Xe.group;if(je.side===$n&&ut.layers.test(X.layers)){const Ut=je.side;je.side=Zt,je.needsUpdate=!0,Zi(ut,Y,X,Dt,je,Ee),je.side=Ut,je.needsUpdate=!0,De=!0}}De===!0&&(R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re))}M.setRenderTarget(he),M.setClearColor(O,z),Ae!==void 0&&(X.viewport=Ae),M.toneMapping=xe}function Ci(T,B,Y){const X=B.isScene===!0?B.overrideMaterial:null;for(let k=0,re=T.length;k<re;k++){const ae=T[k],he=ae.object,xe=ae.geometry,Ae=X===null?ae.material:X,De=ae.group;he.layers.test(Y.layers)&&Zi(he,B,Y,xe,Ae,De)}}function Zi(T,B,Y,X,k,re){T.onBeforeRender(M,B,Y,X,k,re),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),k.onBeforeRender(M,B,Y,X,T,re),k.transparent===!0&&k.side===$n&&k.forceSinglePass===!1?(k.side=Zt,k.needsUpdate=!0,M.renderBufferDirect(Y,B,X,k,T,re),k.side=Qn,k.needsUpdate=!0,M.renderBufferDirect(Y,B,X,k,T,re),k.side=$n):M.renderBufferDirect(Y,B,X,k,T,re),T.onAfterRender(M,B,Y,X,k,re)}function Bn(T,B,Y){B.isScene!==!0&&(B=qe);const X=Ce.get(T),k=p.state.lights,re=p.state.shadowsArray,ae=k.state.version,he=Me.getParameters(T,k.state,re,B,Y),xe=Me.getProgramCacheKey(he);let Ae=X.programs;X.environment=T.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(T.isMeshStandardMaterial?q:E).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Ae===void 0&&(T.addEventListener("dispose",Se),Ae=new Map,X.programs=Ae);let De=Ae.get(xe);if(De!==void 0){if(X.currentProgram===De&&X.lightsStateVersion===ae)return Pr(T,he),De}else he.uniforms=Me.getUniforms(T),T.onBeforeCompile(he,M),De=Me.acquireProgram(he,xe),Ae.set(xe,De),X.uniforms=he.uniforms;const ee=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ee.clippingPlanes=se.uniform),Pr(T,he),X.needsLights=$s(T),X.lightsStateVersion=ae,X.needsLights&&(ee.ambientLightColor.value=k.state.ambient,ee.lightProbe.value=k.state.probe,ee.directionalLights.value=k.state.directional,ee.directionalLightShadows.value=k.state.directionalShadow,ee.spotLights.value=k.state.spot,ee.spotLightShadows.value=k.state.spotShadow,ee.rectAreaLights.value=k.state.rectArea,ee.ltc_1.value=k.state.rectAreaLTC1,ee.ltc_2.value=k.state.rectAreaLTC2,ee.pointLights.value=k.state.point,ee.pointLightShadows.value=k.state.pointShadow,ee.hemisphereLights.value=k.state.hemi,ee.directionalShadowMap.value=k.state.directionalShadowMap,ee.directionalShadowMatrix.value=k.state.directionalShadowMatrix,ee.spotShadowMap.value=k.state.spotShadowMap,ee.spotLightMatrix.value=k.state.spotLightMatrix,ee.spotLightMap.value=k.state.spotLightMap,ee.pointShadowMap.value=k.state.pointShadowMap,ee.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=De,X.uniformsList=null,De}function Ji(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=vo.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Pr(T,B){const Y=Ce.get(T);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function Ys(T,B,Y,X,k){B.isScene!==!0&&(B=qe),R.resetTextureUnits();const re=B.fog,ae=X.isMeshStandardMaterial?B.environment:null,he=S===null?M.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:bi,xe=(X.isMeshStandardMaterial?q:E).get(X.envMap||ae),Ae=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,De=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),ee=!!Y.morphAttributes.position,ze=!!Y.morphAttributes.normal,Xe=!!Y.morphAttributes.color;let ut=Si;X.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(ut=M.toneMapping);const Dt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,je=Dt!==void 0?Dt.length:0,Ee=Ce.get(X),Ut=p.state.lights;if(K===!0&&(te===!0||T!==P)){const an=T===P&&X.id===A;se.setState(X,T,an)}let rt=!1;X.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==Ut.state.version||Ee.outputColorSpace!==he||k.isBatchedMesh&&Ee.batching===!1||!k.isBatchedMesh&&Ee.batching===!0||k.isBatchedMesh&&Ee.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ee.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ee.instancing===!1||!k.isInstancedMesh&&Ee.instancing===!0||k.isSkinnedMesh&&Ee.skinning===!1||!k.isSkinnedMesh&&Ee.skinning===!0||k.isInstancedMesh&&Ee.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ee.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ee.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ee.instancingMorph===!1&&k.morphTexture!==null||Ee.envMap!==xe||X.fog===!0&&Ee.fog!==re||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==se.numPlanes||Ee.numIntersection!==se.numIntersection)||Ee.vertexAlphas!==Ae||Ee.vertexTangents!==De||Ee.morphTargets!==ee||Ee.morphNormals!==ze||Ee.morphColors!==Xe||Ee.toneMapping!==ut||Ee.morphTargetsCount!==je)&&(rt=!0):(rt=!0,Ee.__version=X.version);let pn=Ee.currentProgram;rt===!0&&(pn=Bn(X,B,k));let Qi=!1,Qt=!1,Go=!1;const Mt=pn.getUniforms(),si=Ee.uniforms;if(Te.useProgram(pn.program)&&(Qi=!0,Qt=!0,Go=!0),X.id!==A&&(A=X.id,Qt=!0),Qi||P!==T){$e.reverseDepthBuffer?(fe.copy(T.projectionMatrix),B0(fe),k0(fe),Mt.setValue(U,"projectionMatrix",fe)):Mt.setValue(U,"projectionMatrix",T.projectionMatrix),Mt.setValue(U,"viewMatrix",T.matrixWorldInverse);const an=Mt.map.cameraPosition;an!==void 0&&an.setValue(U,Le.setFromMatrixPosition(T.matrixWorld)),$e.logarithmicDepthBuffer&&Mt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Mt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),P!==T&&(P=T,Qt=!0,Go=!0)}if(k.isSkinnedMesh){Mt.setOptional(U,k,"bindMatrix"),Mt.setOptional(U,k,"bindMatrixInverse");const an=k.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Mt.setValue(U,"boneTexture",an.boneTexture,R))}k.isBatchedMesh&&(Mt.setOptional(U,k,"batchingTexture"),Mt.setValue(U,"batchingTexture",k._matricesTexture,R),Mt.setOptional(U,k,"batchingIdTexture"),Mt.setValue(U,"batchingIdTexture",k._indirectTexture,R),Mt.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&Mt.setValue(U,"batchingColorTexture",k._colorsTexture,R));const Vo=Y.morphAttributes;if((Vo.position!==void 0||Vo.normal!==void 0||Vo.color!==void 0)&&be.update(k,Y,pn),(Qt||Ee.receiveShadow!==k.receiveShadow)&&(Ee.receiveShadow=k.receiveShadow,Mt.setValue(U,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(si.envMap.value=xe,si.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(si.envMapIntensity.value=B.environmentIntensity),Qt&&(Mt.setValue(U,"toneMappingExposure",M.toneMappingExposure),Ee.needsLights&&Lr(si,Go),re&&X.fog===!0&&ce.refreshFogUniforms(si,re),ce.refreshMaterialUniforms(si,X,I,G,p.state.transmissionRenderTarget[T.id]),vo.upload(U,Ji(Ee),si,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(vo.upload(U,Ji(Ee),si,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Mt.setValue(U,"center",k.center),Mt.setValue(U,"modelViewMatrix",k.modelViewMatrix),Mt.setValue(U,"normalMatrix",k.normalMatrix),Mt.setValue(U,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const an=X.uniformsGroups;for(let Wo=0,If=an.length;Wo<If;Wo++){const Yc=an[Wo];F.update(Yc,pn),F.bind(Yc,pn)}}return pn}function Lr(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function $s(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,B,Y){Ce.get(T.texture).__webglTexture=B,Ce.get(T.depthTexture).__webglTexture=Y;const X=Ce.get(T);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=Y===void 0,X.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const Y=Ce.get(T);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,Y=0){S=T,C=B,w=Y;let X=!0,k=null,re=!1,ae=!1;if(T){const xe=Ce.get(T);if(xe.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(U.FRAMEBUFFER,null),X=!1;else if(xe.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(xe.__hasExternalTextures)R.rebindTextures(T,Ce.get(T.texture).__webglTexture,Ce.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ee=T.depthTexture;if(xe.__boundDepthTexture!==ee){if(ee!==null&&Ce.has(ee)&&(T.width!==ee.image.width||T.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Ae=T.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ae=!0);const De=Ce.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[B])?k=De[B][Y]:k=De[B],re=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?k=Ce.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?k=De[Y]:k=De,g.copy(T.viewport),y.copy(T.scissor),L=T.scissorTest}else g.copy(oe).multiplyScalar(I).floor(),y.copy(pe).multiplyScalar(I).floor(),L=ye;if(Te.bindFramebuffer(U.FRAMEBUFFER,k)&&X&&Te.drawBuffers(T,k),Te.viewport(g),Te.scissor(y),Te.setScissorTest(L),re){const xe=Ce.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,xe.__webglTexture,Y)}else if(ae){const xe=Ce.get(T.texture),Ae=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,xe.__webglTexture,Y||0,Ae)}A=-1},this.readRenderTargetPixels=function(T,B,Y,X,k,re,ae){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let he=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ae!==void 0&&(he=he[ae]),he){Te.bindFramebuffer(U.FRAMEBUFFER,he);try{const xe=T.texture,Ae=xe.format,De=xe.type;if(!$e.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-X&&Y>=0&&Y<=T.height-k&&U.readPixels(B,Y,X,k,Pe.convert(Ae),Pe.convert(De),re)}finally{const xe=S!==null?Ce.get(S).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(T,B,Y,X,k,re,ae){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let he=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ae!==void 0&&(he=he[ae]),he){const xe=T.texture,Ae=xe.format,De=xe.type;if(!$e.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-X&&Y>=0&&Y<=T.height-k){Te.bindFramebuffer(U.FRAMEBUFFER,he);const ee=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ee),U.bufferData(U.PIXEL_PACK_BUFFER,re.byteLength,U.STREAM_READ),U.readPixels(B,Y,X,k,Pe.convert(Ae),Pe.convert(De),0);const ze=S!==null?Ce.get(S).__webglFramebuffer:null;Te.bindFramebuffer(U.FRAMEBUFFER,ze);const Xe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await O0(U,Xe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ee),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,re),U.deleteBuffer(ee),U.deleteSync(Xe),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,Y=0){T.isTexture!==!0&&(_o("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const X=Math.pow(2,-Y),k=Math.floor(T.image.width*X),re=Math.floor(T.image.height*X),ae=B!==null?B.x:0,he=B!==null?B.y:0;R.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,ae,he,k,re),Te.unbindTexture()},this.copyTextureToTexture=function(T,B,Y=null,X=null,k=0){T.isTexture!==!0&&(_o("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,T=arguments[1],B=arguments[2],k=arguments[3]||0,Y=null);let re,ae,he,xe,Ae,De;Y!==null?(re=Y.max.x-Y.min.x,ae=Y.max.y-Y.min.y,he=Y.min.x,xe=Y.min.y):(re=T.image.width,ae=T.image.height,he=0,xe=0),X!==null?(Ae=X.x,De=X.y):(Ae=0,De=0);const ee=Pe.convert(B.format),ze=Pe.convert(B.type);R.setTexture2D(B,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const Xe=U.getParameter(U.UNPACK_ROW_LENGTH),ut=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Dt=U.getParameter(U.UNPACK_SKIP_PIXELS),je=U.getParameter(U.UNPACK_SKIP_ROWS),Ee=U.getParameter(U.UNPACK_SKIP_IMAGES),Ut=T.isCompressedTexture?T.mipmaps[k]:T.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Ut.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ut.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,he),U.pixelStorei(U.UNPACK_SKIP_ROWS,xe),T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,k,Ae,De,re,ae,ee,ze,Ut.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,k,Ae,De,Ut.width,Ut.height,ee,Ut.data):U.texSubImage2D(U.TEXTURE_2D,k,Ae,De,re,ae,ee,ze,Ut),U.pixelStorei(U.UNPACK_ROW_LENGTH,Xe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ut),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Dt),U.pixelStorei(U.UNPACK_SKIP_ROWS,je),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ee),k===0&&B.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(T,B,Y=null,X=null,k=0){T.isTexture!==!0&&(_o("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,X=arguments[1]||null,T=arguments[2],B=arguments[3],k=arguments[4]||0);let re,ae,he,xe,Ae,De,ee,ze,Xe;const ut=T.isCompressedTexture?T.mipmaps[k]:T.image;Y!==null?(re=Y.max.x-Y.min.x,ae=Y.max.y-Y.min.y,he=Y.max.z-Y.min.z,xe=Y.min.x,Ae=Y.min.y,De=Y.min.z):(re=ut.width,ae=ut.height,he=ut.depth,xe=0,Ae=0,De=0),X!==null?(ee=X.x,ze=X.y,Xe=X.z):(ee=0,ze=0,Xe=0);const Dt=Pe.convert(B.format),je=Pe.convert(B.type);let Ee;if(B.isData3DTexture)R.setTexture3D(B,0),Ee=U.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)R.setTexture2DArray(B,0),Ee=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const Ut=U.getParameter(U.UNPACK_ROW_LENGTH),rt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),pn=U.getParameter(U.UNPACK_SKIP_PIXELS),Qi=U.getParameter(U.UNPACK_SKIP_ROWS),Qt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ut.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ut.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xe),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ae),U.pixelStorei(U.UNPACK_SKIP_IMAGES,De),T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Ee,k,ee,ze,Xe,re,ae,he,Dt,je,ut.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Ee,k,ee,ze,Xe,re,ae,he,Dt,ut.data):U.texSubImage3D(Ee,k,ee,ze,Xe,re,ae,he,Dt,je,ut),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ut),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,rt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,pn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Qi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Qt),k===0&&B.generateMipmaps&&U.generateMipmap(Ee),Te.unbindTexture()},this.initRenderTarget=function(T){Ce.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Te.unbindTexture()},this.resetState=function(){C=0,w=0,S=null,Te.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===lc?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===Co?"display-p3":"srgb"}}class Lo extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nt,this.environmentIntensity=1,this.environmentRotation=new Nt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Vh=new D,Wh=new ft,Xh=new ft,Kv=new D,qh=new We,Qr=new D,Ma=new Ws,Yh=new We,Sa=new hc;class jv extends me{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zc,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ti),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Qr),this.boundingBox.expandByPoint(Qr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ws),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Qr),this.boundingSphere.expandByPoint(Qr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ma.copy(this.boundingSphere),Ma.applyMatrix4(s),e.ray.intersectsSphere(Ma)!==!1&&(Yh.copy(s).invert(),Sa.copy(e.ray).applyMatrix4(Yh),!(this.boundingBox!==null&&Sa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Sa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===l0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Wh.fromBufferAttribute(s.attributes.skinIndex,e),Xh.fromBufferAttribute(s.attributes.skinWeight,e),Vh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Xh.getComponent(r);if(o!==0){const a=Wh.getComponent(r);qh.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Kv.copy(Vh).applyMatrix4(qh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Pd extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Zv extends Bt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=jt,h=jt,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $h=new We,Jv=new We;class _c{constructor(e=[],t=[]){this.uuid=$i(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new We;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Jv;$h.multiplyMatrices(a,t[r]),$h.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new _c(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Zv(t,e,e,dn,Pn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Pd),this.bones.push(o),this.boneInverses.push(new We().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class vc extends Bt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vt extends yn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let _=0;const v=[],p=i/2;let m=0;x(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new kt(u,3)),this.setAttribute("normal",new kt(f,3)),this.setAttribute("uv",new kt(d,2));function x(){const b=new D,C=new D;let w=0;const S=(t-e)/i;for(let A=0;A<=r;A++){const P=[],g=A/r,y=g*(t-e)+e;for(let L=0;L<=s;L++){const O=L/s,z=O*l+a,$=Math.sin(z),G=Math.cos(z);C.x=y*$,C.y=-g*i+p,C.z=y*G,u.push(C.x,C.y,C.z),b.set($,S,G).normalize(),f.push(b.x,b.y,b.z),d.push(O,1-g),P.push(_++)}v.push(P)}for(let A=0;A<s;A++)for(let P=0;P<r;P++){const g=v[P][A],y=v[P+1][A],L=v[P+1][A+1],O=v[P][A+1];e>0&&(h.push(g,y,O),w+=3),t>0&&(h.push(y,L,O),w+=3)}c.addGroup(m,w,0),m+=w}function M(b){const C=_,w=new it,S=new D;let A=0;const P=b===!0?e:t,g=b===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,p*g,0),f.push(0,g,0),d.push(.5,.5),_++;const y=_;for(let L=0;L<=s;L++){const z=L/s*l+a,$=Math.cos(z),G=Math.sin(z);S.x=P*G,S.y=p*g,S.z=P*$,u.push(S.x,S.y,S.z),f.push(0,g,0),w.x=$*.5+.5,w.y=G*.5*g+.5,d.push(w.x,w.y),_++}for(let L=0;L<s;L++){const O=C+L,z=y+L;b===!0?h.push(z,z+1,O):h.push(z+1,z,O),A+=3}c.addGroup(m,A,b===!0?1:2),m+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Io extends vt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Io(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xc extends yn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new kt(r,3)),this.setAttribute("normal",new kt(r.slice(),3)),this.setAttribute("uv",new kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new D,b=new D,C=new D;for(let w=0;w<t.length;w+=3)d(t[w+0],M),d(t[w+1],b),d(t[w+2],C),l(M,b,C,x)}function l(x,M,b,C){const w=C+1,S=[];for(let A=0;A<=w;A++){S[A]=[];const P=x.clone().lerp(b,A/w),g=M.clone().lerp(b,A/w),y=w-A;for(let L=0;L<=y;L++)L===0&&A===w?S[A][L]=P:S[A][L]=P.clone().lerp(g,L/y)}for(let A=0;A<w;A++)for(let P=0;P<2*(w-A)-1;P++){const g=Math.floor(P/2);P%2===0?(f(S[A][g+1]),f(S[A+1][g]),f(S[A][g])):(f(S[A][g+1]),f(S[A+1][g+1]),f(S[A+1][g]))}}function c(x){const M=new D;for(let b=0;b<r.length;b+=3)M.x=r[b+0],M.y=r[b+1],M.z=r[b+2],M.normalize().multiplyScalar(x),r[b+0]=M.x,r[b+1]=M.y,r[b+2]=M.z}function h(){const x=new D;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];const b=p(x)/2/Math.PI+.5,C=m(x)/Math.PI+.5;o.push(b,1-C)}_(),u()}function u(){for(let x=0;x<o.length;x+=6){const M=o[x+0],b=o[x+2],C=o[x+4],w=Math.max(M,b,C),S=Math.min(M,b,C);w>.9&&S<.1&&(M<.2&&(o[x+0]+=1),b<.2&&(o[x+2]+=1),C<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function d(x,M){const b=x*3;M.x=e[b+0],M.y=e[b+1],M.z=e[b+2]}function _(){const x=new D,M=new D,b=new D,C=new D,w=new it,S=new it,A=new it;for(let P=0,g=0;P<r.length;P+=9,g+=6){x.set(r[P+0],r[P+1],r[P+2]),M.set(r[P+3],r[P+4],r[P+5]),b.set(r[P+6],r[P+7],r[P+8]),w.set(o[g+0],o[g+1]),S.set(o[g+2],o[g+3]),A.set(o[g+4],o[g+5]),C.copy(x).add(M).add(b).divideScalar(3);const y=p(C);v(w,g+0,x,y),v(S,g+2,M,y),v(A,g+4,b,y)}}function v(x,M,b,C){C<0&&x.x===1&&(o[M]=x.x-1),b.x===0&&b.z===0&&(o[M]=C/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.vertices,e.indices,e.radius,e.details)}}class Do extends xc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Do(e.radius,e.detail)}}class Yi extends yn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,f=new D,d=[],_=[],v=[],p=[];for(let m=0;m<=i;m++){const x=[],M=m/i;let b=0;m===0&&o===0?b=.5/t:m===i&&l===Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){const w=C/t;u.x=-e*Math.cos(s+w*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+w*r)*Math.sin(o+M*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),p.push(w+b,1-M),x.push(c++)}h.push(x)}for(let m=0;m<i;m++)for(let x=0;x<t;x++){const M=h[m][x+1],b=h[m][x],C=h[m+1][x],w=h[m+1][x+1];(m!==0||o>0)&&d.push(M,b,w),(m!==i-1||l<Math.PI)&&d.push(b,C,w)}this.setIndex(d),this.setAttribute("position",new kt(_,3)),this.setAttribute("normal",new kt(v,3)),this.setAttribute("uv",new kt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ni extends Xs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qv extends Xs{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nt,this.combine=Ql,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mc extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ld extends Mc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ya=new We,Kh=new D,jh=new D;class ex{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fc,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Kh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kh),jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jh),t.updateMatrixWorld(),ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tx extends ex{constructor(){super(new pc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sc extends Mc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new tx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yc extends Mc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Zh=new We;class Id{constructor(e,t,i=0,s=1/0){this.ray=new hc(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new uc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zh),this}intersectObject(e,t=!0,i=[]){return zl(e,this,i,t),i.sort(Jh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)zl(e[s],this,i,t);return i.sort(Jh),i}}function Jh(n,e){return n.distance-e.distance}function zl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)zl(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);function nx(n){let e=1779033703^n.length;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),3432918353),e=e<<13|e>>>19;return()=>(e=Math.imul(e^e>>>16,2246822507),e=Math.imul(e^e>>>13,3266489909),e^=e>>>16,e>>>0)}function ix(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}class Ec{constructor(e="lifesim"){this.seed=String(e),this._next=ix(nx(this.seed)()),this._children=new Map}child(e){return this._children.has(e)||this._children.set(e,new Ec(`${this.seed}:${e}`)),this._children.get(e)}float(){return this._next()}range(e,t){return e+this._next()*(t-e)}int(e,t){return Math.floor(this.range(e,t+1))}chance(e){return this._next()<e}sign(){return this._next()<.5?-1:1}pick(e){return e[Math.floor(this._next()*e.length)]}pickMany(e,t){const i=this.shuffle([...e]);return i.slice(0,Math.min(t,i.length))}shuffle(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(this._next()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}weighted(e){const t=Array.isArray(e)?e:[...e].map(([r,o])=>({value:r,weight:o}));let i=0;for(const r of t)i+=Math.max(0,r.weight??1);if(i<=0)return t[0];let s=this._next()*i;for(const r of t)if(s-=Math.max(0,r.weight??1),s<=0)return r;return t[t.length-1]}gaussian(e=0,t=1){let i=0,s=0;for(;i===0;)i=this._next();for(;s===0;)s=this._next();return e+t*Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*s)}stat(e,t,i=0,s=100){return Math.max(i,Math.min(s,Math.round(this.gaussian(e,t))))}}const eo={skinTones:[15914685,15253915,13803636,11104575,8014374,5517852],hairTones:[2825494,4861726,8014374,12159818,14270346,9276813,2763310,8141370,11097387,15130836,6045747,1446671]},In={ceiling:15525851,wall:13814974,wallUpper:14210248,trim:16249834,floorTimber:9072722,benchtop:12168342},Ls=new Map,sx=["roughness","metalness","flat","transparent","opacity","side","emissive","emissiveIntensity","vertexColors"];let Hl=null;function rx(n){Hl=n}function Qh(n,e,t={}){if(typeof n=="string"){if(!Hl)return Is(e,{roughness:.88});try{n=Hl(n)}catch{return Is(e,{roughness:.88})}}if(!n)return Is(e,{roughness:.88});const i=t.repeat??1,s=`garment|${n.name??"anon"}|${e}|${i}`;if(Ls.has(s))return Ls.get(s);const r=new ni({color:e,roughness:.88,metalness:0}),o=(a,l)=>{if(!l)return;const c=l.clone();c.needsUpdate=!0,c.wrapS=c.wrapT=xr,c.repeat.set(i,i),r[a]=c};return o("map",n.map),o("normalMap",n.normalMap),o("roughnessMap",n.ormMap),n.normalMap&&r.normalScale&&r.normalScale.set(n.normalScale??1,n.normalScale??1),Ls.set(s,r),r}function Is(n,e={}){let t=String(n);for(const s of sx)e[s]!==void 0&&(t+="|"+s+"="+JSON.stringify(e[s]));if(Ls.has(t))return Ls.get(t);const i=new ni({color:n,roughness:e.roughness??.85,metalness:e.metalness??0,flatShading:e.flat??!1,transparent:e.transparent??!1,opacity:e.opacity??1,side:e.side??Qn,emissive:e.emissive??0,emissiveIntensity:e.emissiveIntensity??1,vertexColors:e.vertexColors??!1});return Ls.set(t,i),i}const Uo={box:new et(1,1,1),plane:new Tr(1,1),cyl:new vt(.5,.5,1,10),cone:new Io(.5,1,8),sphere:new Yi(.5,12,10)};function wi(n,e,t,i,s={}){const r=new me(Uo.box,s.material||Is(i,s));return r.scale.set(n,e,t),r.castShadow=s.castShadow??!0,r.receiveShadow=s.receiveShadow??!0,r}const ox=new Set;function ax(n){ox.add(n)}rx(_x);let Dd=8,Gl=null;function lx(n){Gl=n,Dd=Math.min(8,n.capabilities.getMaxAnisotropy())}let cx=n=>{const e=document.createElement("canvas");return e.width=e.height=n,e};const Ud=(n,e=n)=>{const t=cx(n);return t.width=n,t.height=e,t};let Nd=0;function bc(n,e){return e&&(n.colorSpace=sn),n.wrapS=n.wrapT=xr,n.anisotropy=Dd,n.generateMipmaps=!0,n.minFilter=vi,n.magFilter=un,Nd+=n.image.width*n.image.height*4*4/3,Gl&&Gl.initTexture(n),n}function zt(n){return bc(new vc(hx(n)),!0)}function Vl(n){return n.wrapS=n.wrapT=_i,n}function hx(n){const e=Ud(n.w,n.h),t=e.getContext("2d"),i=t.createImageData(n.w,n.h),s=i.data,r=n.d,o=n.w*n.h;for(let a=0,l=0,c=0;a<o;a++,l+=3,c+=4){const h=r[l],u=r[l+1],f=r[l+2];s[c]=(h<0?0:h>1?1:h)*255+.5,s[c+1]=(u<0?0:u>1?1:u)*255+.5,s[c+2]=(f<0?0:f>1?1:f)*255+.5,s[c+3]=255}return t.putImageData(i,0,0),e}const pt=n=>n<0?0:n>1?1:n,Dn=n=>[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255];function ux(n){const[e,t,i]=n,s=Math.max(e,t,i),r=Math.min(e,t,i),o=(s+r)/2;if(s===r)return[0,0,o];const a=s-r,l=o>.5?a/(2-s-r):a/(s+r);let c;return s===e?c=((t-i)/a+(t<i?6:0))/6:s===t?c=((i-e)/a+2)/6:c=((e-t)/a+4)/6,[c,l,o]}function dx(n,e,t){if(e===0)return[t,t,t];const i=t<.5?t*(1+e):t+e-t*e,s=2*t-i,r=o=>(o=(o%1+1)%1,o<1/6?s+(i-s)*6*o:o<1/2?i:o<2/3?s+(i-s)*(2/3-o)*6:s);return[r(n+1/3),r(n),r(n-1/3)]}function Ln(n,e=1,t=0,i=1){const[s,r,o]=ux(Array.isArray(n)?n:Dn(n));return dx(s+t/360,pt(r*i),pt(o*e))}function Ht(n,e){return{w:n,h:e,d:new Float32Array(n*e*3)}}function Fn(n,e){const t=Array.isArray(e)?e:Dn(e),i=n.d;for(let s=0;s<i.length;s+=3)i[s]=t[0],i[s+1]=t[1],i[s+2]=t[2]}function wc(n,e,t,i,s){if(s<=0)return;const r=n.w,o=n.h;let a=e,l=t;(a<0||a>=r)&&(a=(a%r+r)%r),(l<0||l>=o)&&(l=(l%o+o)%o);const c=(l*r+a)*3,h=n.d,u=1-s;h[c]=h[c]*u+i[0]*s,h[c+1]=h[c+1]*u+i[1]*s,h[c+2]=h[c+2]*u+i[2]*s}function hn(n,e,t,i,s,r,o=1){const a=Array.isArray(r)?r:Dn(r),l=Math.round(e),c=Math.round(i),h=Math.round(t),u=Math.round(s);if(o<1){for(let v=h;v<u;v++)for(let p=l;p<c;p++)wc(n,p,v,a,o);return}const f=n.w,d=n.h,_=n.d;for(let v=h;v<u;v++){let p=v;(p<0||p>=d)&&(p=(p%d+d)%d);const m=p*f;for(let x=l;x<c;x++){let M=x;(M<0||M>=f)&&(M=(M%f+f)%f);const b=(m+M)*3;_[b]=a[0],_[b+1]=a[1],_[b+2]=a[2]}}}function Ar(n,e,t,i,s,r=1){const o=i+1;for(let a=Math.floor(t-o);a<=Math.ceil(t+o);a++)for(let l=Math.floor(e-o);l<=Math.ceil(e+o);l++){const c=l+.5-e,h=a+.5-t,u=pt(i-Math.sqrt(c*c+h*h)+.5);u>0&&wc(n,l,a,s,r*u)}}function Wl(n,e,t,i,s=1){const r=Math.max(1,t)/2;for(let o=1;o<e.length;o++){const[a,l]=e[o-1],[c,h]=e[o],u=Math.hypot(c-a,h-l),f=Math.max(1,Math.ceil(u));for(let d=0;d<=f;d++){const _=d/f;Ar(n,a+(c-a)*_,l+(h-l)*_,r,i,s)}}}function Fd(n,e,t,i,s,r,o,a){const l=n.w,c=n.h,h=n.d,u=r/2,f=o[0],d=o[1],_=o[2],v=Math.PI*2/i;for(let p=0;p<c;p++){const m=p*l,x=e+t*Math.sin(p*v+s),M=x-u,b=x+u,C=Math.floor(M),w=Math.ceil(b);for(let S=C;S<=w;S++){const A=pt(Math.min(S+1,b)-Math.max(S,M));if(A<=0)continue;const P=a*A,g=1-P;let y=S;(y<0||y>=l)&&(y=(y%l+l)%l);const L=(m+y)*3;h[L]=h[L]*g+f*P,h[L+1]=h[L+1]*g+d*P,h[L+2]=h[L+2]*g+_*P}}}const eu=n=>n*n*(3-2*n);function fx(n,e,t){const i=new Float32Array(e*t);for(let s=0;s<i.length;s++)i[s]=n.float();return i}const tu=256;function Yt(n,e,t={}){const{p0:i=32,octaves:s=4,gain:r=.5,lacunarity:o=2,h:a=e}=t,l=t.p0x??i,c=t.p0y??i,h=new Float32Array(e*a),u=[];let f=1,d=0;for(let C=0;C<s;C++){const w=Math.min(tu,Math.max(1,Math.round(l*o**C))),S=Math.min(tu,Math.max(1,Math.round(c*o**C)));u.push({lat:fx(n,w,S),px:w,py:S,amp:f}),d+=f,f*=r}const _=new Float64Array(e*a),v=new Int32Array(e),p=new Int32Array(e),m=new Float64Array(e);for(let C=0;C<u.length;C++){const w=u[C],S=w.lat,A=w.px,P=w.py,g=w.amp,y=A/e,L=P/a;for(let O=0;O<e;O++){const z=O*y,$=z|0,G=$>=A?$%A:$;v[O]=G,p[O]=G+1>=A?0:G+1,m[O]=eu(z-$)}for(let O=0;O<a;O++){const z=O*L,$=z|0,G=eu(z-$),I=1-G,W=$>=P?$%P:$,ie=W*A,oe=(W+1>=P?0:W+1)*A,pe=O*e;for(let ye=0;ye<e;ye++){const ue=v[ye],K=p[ye],te=m[ye],fe=S[ie+ue],de=S[ie+K],Le=S[oe+ue],Re=S[oe+K];_[pe+ye]+=g*((fe+(de-fe)*te)*I+(Le+(Re-Le)*te)*G)}}}let x=1/0,M=-1/0;for(let C=0;C<h.length;C++){h[C]=_[C]/d;const w=h[C];w<x&&(x=w),w>M&&(M=w)}const b=M-x||1;for(let C=0;C<h.length;C++)h[C]=(h[C]-x)/b;return h}function Ti(n,e,t,i){const s=new Float32Array(e*t),r=new Float32Array(e*t),o=2*i+1,a=new Int32Array(e),l=new Int32Array(e);for(let u=0;u<e;u++)a[u]=((u-i)%e+e)%e,l[u]=(u+i+1)%e;for(let u=0;u<t;u++){const f=u*e;let d=0;for(let _=-i;_<=i;_++)d+=n[f+(_%e+e)%e];for(let _=0;_<e;_++)s[f+_]=d/o,d-=n[f+a[_]],d+=n[f+l[_]]}const c=new Int32Array(t),h=new Int32Array(t);for(let u=0;u<t;u++)c[u]=((u-i)%t+t)%t*e,h[u]=(u+i+1)%t*e;for(let u=0;u<e;u++){let f=0;for(let d=-i;d<=i;d++)f+=s[(d%t+t)%t*e+u];for(let d=0;d<t;d++)r[d*e+u]=f/o,f-=s[c[d]+u],f+=s[h[d]+u]}return r}function px(n,e,t=1.5,i=null){const s=i??n.length/e,r=new Uint8Array(e*s*4),o=t/8,a=new Int32Array(e),l=new Int32Array(e);for(let c=0;c<e;c++)a[c]=(c-1+e)%e,l[c]=(c+1)%e;for(let c=0;c<s;c++){const h=(c-1+s)%s*e,u=c*e,f=(c+1)%s*e;let d=u*4;for(let _=0;_<e;_++,d+=4){const v=a[_],p=l[_],m=n[h+v],x=n[h+_],M=n[h+p],b=n[u+v],C=n[u+p],w=n[f+v],S=n[f+_],A=n[f+p],P=M+2*C+A-(m+2*b+w),g=w+2*S+A-(m+2*x+M),y=-P*o,L=g*o,O=1/Math.sqrt(y*y+L*L+1);r[d]=(y*O*.5+.5)*255+.5,r[d+1]=(L*O*.5+.5)*255+.5,r[d+2]=(O*.5+.5)*255+.5,r[d+3]=255}}return r}function En(n,e,t=1.5,i=null){const s=i??n.length/e;return bc(new vc(Od(px(n,e,t,s),e,s)),!1)}function Od(n,e,t){const i=Ud(e,t),s=i.getContext("2d"),r=s.createImageData(e,t);return r.data.set(n),s.putImageData(r,0,0),i}function mx(n,e,t,i,s=null){const o=n*(s??n),a=new Uint8Array(o*4);for(let l=0,c=0;l<o;l++,c+=4){const h=e?e[l]:1,u=t?t[l]:.85,f=i?i[l]:0;a[c]=(h<0?0:h>1?1:h)*255+.5,a[c+1]=(u<0?0:u>1?1:u)*255+.5,a[c+2]=(f<0?0:f>1?1:f)*255+.5,a[c+3]=255}return a}function It(n,e,t,i,s=null){const r=s??n;return bc(new vc(Od(mx(n,e,t,i,r),n,r)),!1)}const Tc={},gr=new Map;let Bd=null;function yt(n,e){Tc[n]=e}const gx=n=>{const e=Object.keys(n).sort();return e.length?e.map(t=>t+"="+JSON.stringify(n[t])).join(","):""};function _x(n,e=null,t={}){const i=Tc[n];if(!i)throw new Error(`Textures: no recipe named '${n}'`);const s=gx(t),r=s?n+"#"+s:n;if(gr.has(r))return gr.get(r);const o=e||(Bd||new Ec("textures")).child("tex."+r),a=i(o,t);return a.name=n,gr.set(r,a),a}function vx(){var n,e;for(const t of gr.values()){for(const i of["map","normalMap","ormMap"])(e=(n=t[i])==null?void 0:n.dispose)==null||e.call(n);if(t.maps)for(const i of t.maps)i.dispose()}gr.clear(),Nd=0,Bd=null}ax(vx);const Ea={blackbutt:{base:13214581,dark:10122054,rough:.4},spottedGum:{base:11040332,dark:8015662,rough:.38},jarrah:{base:9061685,dark:6040352,rough:.44},tasOak:{base:14072722,dark:11111779,rough:.42},pine:{base:14467213,dark:11571294,rough:.5}};yt("timberFloor",(n,e={})=>{const o=1.9500000000000002,a=1024/o,l=1024/15,c=Math.max(2,Math.round(.004*a)),h=e.species||n.pick(Object.keys(Ea)),u=Ea[h]||Ea.blackbutt,f=Ht(1024,1024);Fn(f,Ln(u.dark,.72));const d=Dn(u.dark),_=Ln(u.base,1.25),v=[];for(let w=0;w<15;w++){const S=w*l+c/2,A=(w+1)*l-c/2,P=Ln(u.base,1+n.range(-.06,.06),n.range(-3,3));hn(f,S,0,A,1024,P);const g=Math.round(n.range(.15,.85)*1024);v.push(g),hn(f,S,g,A,g+2,Ln(u.dark,.8),.85),hn(f,S,g-2,A,g,_,.25);const y=n.int(28,60);for(let L=0;L<y;L++){const O=n.range(S+1,A-1),z=n.range(1.5,4),$=1024/n.int(2,5),G=n.range(0,Math.PI*2),I=n.range(2,3),W=n.range(.04,.12),ie=n.chance(.25)?_:d;Fd(f,O,z,$,G,I,ie,W)}if(n.chance(.2)){const L=n.range(204.8,819.2),O=n.range(60,160),z=n.range(S+4,A-4);for(let $=0;$<n.int(2,4);$++){const G=($+1)*n.range(3,7),I=[];for(let W=0;W<=16;W++){const ie=W/16;I.push([z+(ie-.5)*2*G,L-O*(1-(ie-.5)**2*4)])}Wl(f,I,2,d,.06)}}}const p=Yt(n,512,{p0:64,octaves:3}),m=new Float32Array(512*512),x=new Float32Array(512*512),M=new Float32Array(512*512),b=512/15,C=c*512/1024;for(let w=0;w<512;w++)for(let S=0;S<512;S++){const A=w*512+S,P=Math.floor(S/b),g=S-P*b,y=g<C/2||g>b-C/2,L=w*1024/512,O=v[P],z=L>=O-1&&L<=O+2,$=y||z;x[A]=$?.15:.75,m[A]=pt(u.rough+($?.1:0)+(p[A]-.5)*.1),M[A]=$?.72:1}return{map:zt(f),normalMap:En(Ti(x,512,512,1),512,1.2),ormMap:It(512,M,m,null),uvScale:[o,o],normalScale:.5,species:h,tinted:!1}});yt("plasterWall",(n,e={})=>{const s=e.rough??.88,r=Yt(n,256,{p0:64,octaves:3,gain:.45}),o=new Float32Array(256*256),a=.4*256/2;for(let l=0;l<256;l++)for(let c=0;c<256;c++){const h=l*256+c;let u=s+(r[h]**1.5-.5)*.1;e.ceiling||(u+=Math.cos(c/a*Math.PI*2)*.02),o[h]=pt(u)}return{ormMap:It(256,null,o,null),uvScale:[2,2],normalScale:0,tinted:!0}});yt("plasterCeiling",n=>Tc.plasterWall(n,{rough:.93,ceiling:!0}));yt("paintedJoinery",n=>{const i=Yt(n,256,{p0:64,octaves:3}),s=new Float32Array(256*256);for(let r=0;r<256;r++)for(let o=0;o<256;o++){const a=r*256+o;s[a]=pt(.42+(i[a]-.5)*.06+Math.sin(o/256*Math.PI*2*12)*.015)}return{ormMap:It(256,null,s,null),uvScale:[1,1],normalScale:0,tinted:!0}});yt("carpetPile",n=>{const i=Ht(512,512);Fn(i,[1,1,1]);const s=Yt(n,512,{p0x:64,p0y:192,octaves:3,gain:.5}),r=i.d;for(let l=0;l<512;l++)for(let c=0;c<512;c++){const h=l*512+c,u=Math.cos(l/256*Math.PI*2)*.03,f=pt(.9+(s[h]-.5)*.16+u);r[h*3]=f,r[h*3+1]=f,r[h*3+2]=f}for(let l=0;l<1200;l++){const c=n.pick([[1.1,0],[.78,8],[.92,-10]]),h=Ln(16777215,c[0],c[1],1);if(c[1]!==0){const u=n.range(0,1);h[0]=h[0]*(.94+u*.12),h[2]=h[2]*(1.06-u*.12)}Ar(i,n.range(0,512),n.range(0,512),n.range(1,2),h,.25)}const o=Yt(n,512,{p0x:43,p0y:128,octaves:3}),a=new Float32Array(512*512);for(let l=0;l<a.length;l++)a[l]=pt(.92+(o[l]-.5)*.06);return{map:zt(i),normalMap:En(o,512,.6),ormMap:It(512,null,a,null),uvScale:[1,1],normalScale:.7,tinted:!0}});yt("ceramicTile",(n,e={})=>{const i=e.tile??.3,s=2,r=i*s,o=Math.max(2,Math.round(.003*512/r)),a=3,l=512/s,c=Dn(12104358),h=[];for(let p=0;p<s*s;p++)h.push({c:Ln(14473423,1+n.range(-.03,.03),n.range(-2,2)),g:n.range(-1,1)});const u=Ht(512,512),f=new Float32Array(512*512),d=new Float32Array(512*512),_=new Float32Array(512*512),v=o/2;for(let p=0;p<512;p++)for(let m=0;m<512;m++){const x=p*512+m,M=Math.floor(m/l),b=Math.floor(p/l),C=m-M*l,w=p-b*l,S=Math.min(C,l-C,w,l-w);if(S<v){u.d[x*3]=c[0],u.d[x*3+1]=c[1],u.d[x*3+2]=c[2],f[x]=.85,d[x]=.25,_[x]=.62;continue}const A=h[b*s+M],P=(C/l+w/l)/2,g=1.03-.06*(A.g>0?P:1-P);u.d[x*3]=pt(A.c[0]*g),u.d[x*3+1]=pt(A.c[1]*g),u.d[x*3+2]=pt(A.c[2]*g),f[x]=.08;const y=pt((S-v)/a);d[x]=.25+.75*y,_[x]=.62+.38*y}return{map:zt(u),normalMap:En(d,512,2),ormMap:It(512,_,f,null),uvScale:[r,r],normalScale:.8,tinted:!1}});yt("fabricWeave",n=>{const i=Ht(256,256),s=new Float32Array(256*256),r=new Float32Array(256*256),o=128,a=new Float32Array(o*8),l=new Float32Array(o*8);for(let h=0;h<a.length;h++)a[h]=n.range(-.035,.035);for(let h=0;h<l.length;h++)l[h]=n.range(-.035,.035);const c=Yt(n,256,{p0:64,octaves:2});for(let h=0;h<256;h++)for(let u=0;u<256;u++){const f=h*256+u,d=(u>>1&1^h>>1&1)===0,_=u>>1,v=h>>1,p=d?a[(_*8+(h>>5&7))%a.length]:l[(v*8+(u>>5&7))%l.length],m=pt((d?1.06:.94)+p+(c[f]-.5)*.06);i.d[f*3]=m,i.d[f*3+1]=m,i.d[f*3+2]=m,s[f]=d?.66:.8,r[f]=d?1:.3}return{map:zt(i),normalMap:En(Ti(r,256,256,1),256,.8),ormMap:It(256,null,s,null),uvScale:[.25,.25],normalScale:.6,tinted:!0}});yt("joineryTimber",n=>{const i=Ht(512,512);Fn(i,[1,1,1]);const s=Yt(n,512,{p0x:48,p0y:8,octaves:4}),r=i.d;for(let l=0;l<512*512;l++){const c=pt(.94+(s[l]-.5)*.22);r[l*3]=c,r[l*3+1]=c,r[l*3+2]=c}const o=Ln(16777215,.72);for(let l=0;l<220;l++){const c=n.range(0,512),h=n.range(2,6),u=512/n.int(1,2),f=n.range(0,Math.PI*2);Fd(i,c,h,u,f,n.range(2,3.5),o,n.range(.03,.09))}const a=new Float32Array(512*512);for(let l=0;l<a.length;l++)a[l]=pt(.55+(s[l]-.5)*.08);return{map:zt(i),ormMap:It(512,null,a,null),uvScale:[1,1],normalScale:0,tinted:!0}});yt("vinylSheet",n=>{const i=Ht(512,512);Fn(i,14209732);const s=[13222578,15131093,11906460,14472902].map(Dn);for(let l=0;l<3e3;l++)Ar(i,n.range(0,512),n.range(0,512),n.range(1,3),n.pick(s),.35);const r=Yt(n,512,{p0:32,octaves:3}),o=new Float32Array(512*512);for(let l=0;l<o.length;l++)o[l]=pt(.28+(r[l]-.5)*.12);const a={w:512,h:512,d:new Float32Array(512*512*3)};for(let l=0;l<12;l++){const c=n.range(0,512),h=n.range(0,512),u=n.range(40,120),f=n.range(0,Math.PI*2),d=n.range(.6,2.2),_=[];for(let v=0;v<=24;v++){const p=f+d*(v/24);_.push([c+Math.cos(p)*u,h+Math.sin(p)*u])}Wl(i,_,n.range(2,4),Ln(14209732,.88),.3),Wl(a,_,n.range(2,4),[1,1,1],1)}for(let l=0;l<o.length;l++)o[l]=pt(o[l]+a.d[l*3]*.15);return{map:zt(i),ormMap:It(512,null,o,null),uvScale:[1,1],normalScale:0,tinted:!1}});yt("laminateBench",n=>{const s=Ht(512,512);Fn(s,In.benchtop);const r=[9274743,14077886,7235417].map(Dn);for(let c=0;c<2e3;c++)Ar(s,n.range(0,512),n.range(0,512),n.range(1,2.5),n.pick(r),.3);const o=new Float32Array(512*512);for(let c=0;c<o.length;c++)o[c]=.28;const a=Math.max(2,Math.round(.006*512/.6)),l=Ln(In.benchtop,.82);for(let c=0;c<512;c++)if(Math.min(c,512-c)<a)for(let u=0;u<512;u++)wc(s,u,c,l,.85),o[c*512+u]=.45;return{map:zt(s),ormMap:It(512,null,o,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});yt("ceilingGrid",n=>{const s=Ht(512,512);Fn(s,15526370);const r=Math.max(2,Math.round(.015*512/1.2)),o=Math.max(2,Math.round(.015*512/.6)),a=Dn(14210509),l=Dn(12434098),c=Yt(n,512,{p0:64,octaves:2}),h=new Float32Array(512*512);for(let u=0;u<512;u++)for(let f=0;f<512;f++){const d=u*512+f,_=Math.min(f,512-f),v=Math.min(u,512-u);if(_<r/2||v<o/2){const x=_>=r/2-2&&_<r/2||v>=o/2-2&&v<o/2?l:a;s.d[d*3]=x[0],s.d[d*3+1]=x[1],s.d[d*3+2]=x[2],h[d]=.55}else{const m=1+(c[d]-.5)*.04;s.d[d*3]*=m,s.d[d*3+1]*=m,s.d[d*3+2]*=m,h[d]=.9}}return{map:zt(s),ormMap:It(512,null,h,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});yt("applianceEnamel",n=>{const i=Yt(n,256,{p0:64,octaves:3}),s=new Float32Array(256*256);for(let r=0;r<s.length;r++)s[r]=pt(.3+(i[r]-.5)*.04);return{ormMap:It(256,null,s,null),uvScale:[1,1],normalScale:0,tinted:!0}});yt("metalBrushed",n=>{const i=new Float32Array(65536),s=new Float32Array(256*256),r=Yt(n,256,{p0x:8,p0y:256,octaves:2});for(let o=0;o<256;o++){const a=n.range(-.1,.1);for(let l=0;l<256;l++){const c=o*256+l;i[c]=pt(.35+a*.6+(r[c]-.5)*.1)}}return{ormMap:It(256,null,i,s),uvScale:[.4,.4],normalScale:0,tinted:!0}});yt("quiltFolds",n=>{const i=[],s=n.int(5,9);for(let f=0;f<s;f++)i.push({a:n.range(.4,1),c:n.range(.05,.95),w:n.range(.06,.14)});const r=f=>{let d=0;for(const _ of i)d+=_.a*Math.exp(-(((f-_.c)/_.w)**2));return d+=.5*Math.exp(-((f/.04)**2))+.5*Math.exp(-(((1-f)/.04)**2)),d};let o=1/0,a=-1/0;for(let f=0;f<=256;f++){const d=r(f/256);d<o&&(o=d),d>a&&(a=d)}const l=a-o||1,c=f=>(r(pt(f))-o)/l,h=Ht(512,256),u=new Float32Array(512*256);for(let f=0;f<512;f++){const d=c(f/511),_=.9+.1*d;for(let v=0;v<256;v++){const p=v*512+f;h.d[p*3]=_,h.d[p*3+1]=_,h.d[p*3+2]=_,u[p]=d}}return{map:Vl(zt(h)),normalMap:Vl(En(u,512,3,256)),uvScale:null,normalScale:1,field:c,folds:i,tinted:!0}});yt("pictureArt",n=>{const i=[[14272936,10251087,4148050,15130057],[8361635,14213090,3095106,12820586],[11056266,15196880,6056775,9067068],[13609376,8015698,15722204,3814198],[9415096,15788760,4479587,12153919]],s=[];for(let r=0;r<5;r++){const o=i[r].map(Dn),a=Ht(256,256);Fn(a,o[n.int(0,3)]);const l=n.int(0,2);if(l===0){let h=0;for(;h<256;){const u=n.int(12,48);hn(a,0,h,256,Math.min(256,h+u),o[n.int(0,3)],n.range(.5,1)),h+=u}}else if(l===1)for(let h=0;h<n.int(5,11);h++){const u=n.range(0,179.2),f=n.range(0,256*.7);hn(a,u,f,u+n.range(30,110),f+n.range(30,110),o[n.int(0,3)],n.range(.55,.95))}else{const h=n.range(115.2,174.08);hn(a,0,0,256,h,o[0],1),hn(a,0,h,256,256,o[2],1);for(let u=0;u<n.int(3,7);u++){const f=n.range(h-40,h+40);hn(a,0,f,256,f+n.range(3,10),o[n.int(0,3)],n.range(.3,.7))}Ar(a,n.range(256*.2,256*.8),n.range(20,h-20),n.range(12,26),o[3],.9)}const c=Ln(16777215,.97);hn(a,0,0,256,6,c),hn(a,0,250,256,256,c),hn(a,0,0,6,256,c),hn(a,250,0,256,256,c),s.push(Vl(zt(a)))}return{maps:s,map:s[0],uvScale:null,normalScale:0,prints:5,tinted:!1}});yt("garmentKnit",n=>{const i=Ht(256,256),s=new Float32Array(256*256),r=new Float32Array(256*256),o=16,a=12,l=Yt(n,256,{p0:64,octaves:2});for(let c=0;c<256;c++)for(let h=0;h<256;h++){const u=c*256+h,f=h%o/o*2-1,d=Math.cos(f*Math.PI*.5),_=(h/o|0)%2?a/2:0,v=(c+_)%a/a,p=1-Math.abs(v*2-1)*.45,m=pt(d*.75+p*.25+(l[u]-.5)*.1),x=pt(.8+m*.28);i.d[u*3]=x,i.d[u*3+1]=x,i.d[u*3+2]=x,s[u]=.94-m*.1,r[u]=m}return{map:zt(i),normalMap:En(Ti(r,256,256,1),256,1.2),ormMap:It(256,null,s,null),uvScale:[.16,.16],normalScale:1.1,tinted:!0}});yt("garmentDenim",n=>{const i=Ht(256,256),s=new Float32Array(256*256),r=new Float32Array(256*256),o=Yt(n,256,{p0:96,octaves:3}),a=new Float32Array(256);for(let l=0;l<256;l++)a[l]=n.range(-.05,.05);for(let l=0;l<256;l++)for(let c=0;c<256;c++){const h=l*256+c,u=(c+l)%3!==0,f=(c>>1&1)===0,_=pt((u?f?1.02:.9:.72)+a[(c+l*3)%256]+(o[h]-.5)*.07);i.d[h*3]=_,i.d[h*3+1]=_,i.d[h*3+2]=_,s[h]=u?.78:.88,r[h]=u?1:.25}return{map:zt(i),normalMap:En(Ti(r,256,256,1),256,.9),ormMap:It(256,null,s,null),uvScale:[.12,.12],normalScale:.85,tinted:!0}});yt("garmentCotton",n=>{const i=Ht(256,256),s=new Float32Array(256*256),r=new Float32Array(256*256),o=Yt(n,256,{p0:48,octaves:3});for(let a=0;a<256;a++)for(let l=0;l<256;l++){const c=a*256+l,h=(l&1^a&1)===0,u=pt((h?1.02:.97)+(o[c]-.5)*.09);i.d[c*3]=u,i.d[c*3+1]=u,i.d[c*3+2]=u,s[c]=.88-(h?.03:0),r[c]=h?.7:.4}return{map:zt(i),normalMap:En(Ti(r,256,256,1),256,.45),ormMap:It(256,null,s,null),uvScale:[.09,.09],normalScale:.4,tinted:!0}});yt("garmentButtons",n=>{const i=Ht(64,256);Fn(i,[.97,.97,.97]);const s=new Float32Array(64*256).fill(.86),r=new Float32Array(64*256).fill(.45),o=64/2,a=5,l=64*.2;for(let c=0;c<256;c++)for(let h=0;h<64;h++){const u=c*64+h,f=Math.abs(h-o);f<64*.3&&(r[u]=.8),f>64*.3&&f<64*.36&&(r[u]=.2)}for(let c=0;c<a;c++){const h=256*((c+.7)/(a+.4));for(let u=Math.floor(h-l-2);u<=Math.ceil(h+l+2);u++)if(!(u<0||u>=256))for(let f=0;f<64;f++){const d=Math.hypot(f-o,u-h);if(d>l)continue;const _=u*64+f,v=Math.sqrt(Math.max(0,1-(d/l)**2));r[_]=.8+v*.2;const p=.86+v*.16;i.d[_*3]=p,i.d[_*3+1]=p,i.d[_*3+2]=p,s[_]=.42,Math.abs(u-h)<l*.16&&Math.abs(Math.abs(f-o)-l*.3)<l*.14&&(r[_]=.6,i.d[_*3]=.62,i.d[_*3+1]=.62,i.d[_*3+2]=.62)}}return{map:zt(i),normalMap:En(Ti(r,64,256,1),64,1.4,256),ormMap:It(64,null,s,null,256),uvScale:[1,1],normalScale:1,tinted:!0,noTile:!0}});yt("garmentZip",n=>{const i=Ht(64,256);Fn(i,[.95,.95,.95]);const s=new Float32Array(64*256).fill(.86),r=new Float32Array(64*256).fill(.45),o=64/2,a=7;for(let c=0;c<256;c++)for(let h=0;h<64;h++){const u=c*64+h,f=h-o,d=Math.abs(f);if(d<64*.34&&(r[u]=.62,s[u]=.82),d<64*.17){const _=f<0?0:a/2,p=(c+_)%a/a<.55;r[u]=p?1:.5;const m=p?1.06:.74;i.d[u*3]=m,i.d[u*3+1]=m,i.d[u*3+2]=m,s[u]=p?.3:.55}}const l=256*.14;for(let c=Math.floor(l);c<l+256*.055;c++)for(let h=Math.floor(o-64*.11);h<o+64*.11;h++){const u=c*64+h;u<0||u>=64*256||(r[u]=1,s[u]=.28,i.d[u*3]=1.1,i.d[u*3+1]=1.1,i.d[u*3+2]=1.1)}return{map:zt(i),normalMap:En(Ti(r,64,256,1),64,1.6,256),ormMap:It(64,null,s,null,256),uvScale:[1,1],normalScale:1.2,tinted:!0,noTile:!0}});yt("garmentPlate",n=>{const i=Ht(256,256);Fn(i,[1,1,1]);const s=new Float32Array(256*256).fill(.42),r=new Float32Array(256*256).fill(.72),o=Yt(n,256,{p0:64,octaves:3}),a=128;for(let c=0;c<256;c++)for(let h=0;h<256;h++){const u=c*256+h,f=Math.min(h%a,a-1-h%a),d=Math.min(c%a,a-1-c%a),_=Math.min(f,d);let v=.72,p=1,m=.42;if(_<2)v=.22,p=.93,m=.58;else if(_<5){const x=(_-2)/3;v=.22+x*.5,p=.93+x*.08,m=.58-x*.16}p+=(o[u]-.5)*.05,i.d[u*3]=p,i.d[u*3+1]=p,i.d[u*3+2]=p,s[u]=m,r[u]=v}const l=2;for(let c=0;c<256;c+=a)for(let h=0;h<256;h+=a)for(const[u,f]of[[7,7],[a-7,7],[7,a-7],[a-7,a-7]])for(let d=-l-1;d<=l+1;d++)for(let _=-l-1;_<=l+1;_++){const v=(h+u+_+256)%256,p=(c+f+d+256)%256,m=Math.hypot(_,d);if(m>l)continue;const x=p*256+v,M=Math.sqrt(Math.max(0,1-(m/l)**2));r[x]=.82+M*.18;const b=1.02+M*.1;i.d[x*3]=b,i.d[x*3+1]=b,i.d[x*3+2]=b,s[x]=.3}return{map:zt(i),normalMap:En(Ti(r,256,256,1),256,1.5),ormMap:It(256,null,s,null),uvScale:[.34,.34],normalScale:1.45,tinted:!0}});class xx{constructor(){this._handlers=new Map,this._log=[]}on(e,t){return this._handlers.has(e)||this._handlers.set(e,new Set),this._handlers.get(e).add(t),()=>this.off(e,t)}once(e,t){const i=this.on(e,s=>{i(),t(s)});return i}off(e,t){var i;(i=this._handlers.get(e))==null||i.delete(t)}emit(e,t={}){this._log.push({type:e,payload:t,at:performance.now()}),this._log.length>400&&this._log.shift();const i=this._handlers.get(e);if(i)for(const a of[...i])a(t,e);const s=e.split(":")[0]+":*",r=this._handlers.get(s);if(r)for(const a of[...r])a(t,e);const o=this._handlers.get("*");if(o)for(const a of[...o])a(t,e)}recent(e=40){return this._log.slice(-e)}}const Mx={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],sprint:["ShiftLeft","ShiftRight"],jump:["Space"],interact:["KeyE"],camera:["KeyV"],phone:["KeyQ"],journal:["KeyJ"],inventory:["KeyI"],map:["KeyM"],wait:["KeyT"],rotate:["KeyR"],furnishDone:["KeyF"],furnishSell:["KeyX"],cancel:["Escape"]},Sx=2e3;class yx{constructor(e,t){this.bus=e,this.dom=t,this.bindings={...Mx},this.down=new Set,this.pressed=new Set,this.mouse={dx:0,dy:0,sensitivity:.0022,invertY:!1},this.locked=!1,this.lockPending=!1,this._lockTimer=0,this.enabled=!0,this._attach()}clearHeld(){this.down.clear(),this.pressed.clear(),this.mouse.dx=0,this.mouse.dy=0}_attach(){window.addEventListener("keydown",e=>{if(e.repeat)return;Object.values(this.bindings).some(i=>i.includes(e.code))&&e.code!=="Escape"&&e.preventDefault(),this.down.add(e.code),this.pressed.add(e.code),this.bus.emit("input:key",{code:e.code});for(const[i,s]of Object.entries(this.bindings))s.includes(e.code)&&this.bus.emit("action:"+i,{})}),window.addEventListener("keyup",e=>this.down.delete(e.code)),window.addEventListener("blur",()=>this.clearHeld()),window.addEventListener("focus",()=>this.clearHeld()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clearHeld()}),document.addEventListener("pointerlockchange",()=>{this._settleLock(),this.locked=document.pointerLockElement===this.dom,this.locked||this.clearHeld(),this.bus.emit("input:pointerlock",{locked:this.locked})}),document.addEventListener("pointerlockerror",e=>this._failLock(e)),window.addEventListener("mousemove",e=>{this.locked&&(this.mouse.dx+=e.movementX,this.mouse.dy+=e.movementY)}),window.addEventListener("mousedown",e=>{this.pressed.add("Mouse"+e.button),this.down.add("Mouse"+e.button)}),window.addEventListener("mouseup",e=>this.down.delete("Mouse"+e.button)),window.addEventListener("wheel",e=>{this.bus.emit("input:wheel",{delta:Math.sign(e.deltaY)})},{passive:!0})}_settleLock(){this.lockPending=!1,clearTimeout(this._lockTimer),this._lockTimer=0}_failLock(e){const t=this.lockPending;this._settleLock(),t&&(this.locked=!1,console.warn("[input] pointer lock request refused",e||""),this.bus.emit("input:pointerlockfailed",{error:e||null}))}requestLock(){var t,i;if(this.locked||this.lockPending||!((t=this.dom)!=null&&t.requestPointerLock))return;this.lockPending=!0,clearTimeout(this._lockTimer),this._lockTimer=setTimeout(()=>{this.lockPending=!1},Sx);let e;try{e=this.dom.requestPointerLock()}catch(s){this._failLock(s);return}(i=e==null?void 0:e.catch)==null||i.call(e,s=>this._failLock(s))}requestLockFresh(){this.locked||(this._settleLock(),this.requestLock())}releaseLock(){var e;this._settleLock(),this.locked=!1,(e=document.exitPointerLock)==null||e.call(document)}isDown(e){return this.enabled?(this.bindings[e]||[]).some(t=>this.down.has(t)):!1}wasPressed(e){return this.enabled?(this.bindings[e]||[]).some(t=>this.pressed.has(t)):!1}axis(){let e=0,t=0;this.isDown("forward")&&(t+=1),this.isDown("back")&&(t-=1),this.isDown("right")&&(e+=1),this.isDown("left")&&(e-=1);const i=Math.hypot(e,t);return i>1?{x:e/i,y:t/i}:{x:e,y:t}}consumeMouse(){const e={dx:this.mouse.dx,dy:this.mouse.dy};return this.mouse.dx=0,this.mouse.dy=0,e}endFrame(){this.pressed.clear()}}const Xl=n=>Number.isFinite(n)&&n>0?n:0;function Ac(n={}){const e=n.max??100,t=n.shield??0;return{max:e,hp:Math.min(n.hp??e,e),shield:t,shieldMax:n.shieldMax??t,thresholds:[...n.thresholds??[]].sort((i,s)=>s-i),dead:(n.hp??e)<=0}}function Ex(n,e,t){const i=[];for(const s of n.thresholds){const r=n.max*s;e>r&&t<=r&&i.push({at:s,hp:r})}return i}function kd(n,e={}){const t=[];if(n.dead)return{state:n,events:t};const i=Xl(e.amount),s=e.crit?i*(e.critMul??2):i,r=e.kind??null,o=e.source??null;let{hp:a,shield:l}=n,c=s;if(l>0&&!e.ignoreShield&&c>0){const f=Math.min(l,c);l-=f,c-=f,t.push({type:"absorbed",amount:f,shield:l,kind:r,source:o}),l===0&&t.push({type:"shieldBroken",overflow:c,kind:r,source:o})}const h=a;a=Math.max(0,a-c),(c>0||s===0)&&t.push({type:"damaged",amount:c,hp:a,was:h,kind:r,source:o});for(const f of Ex(n,h,a))t.push({type:"threshold",at:f.at,hp:f.hp,kind:r,source:o});const u=a<=0;return u&&t.push({type:"died",kind:r,source:o}),{state:{...n,hp:a,shield:l,dead:u},events:t}}function ql(n,e={}){const t=[];if(n.dead)return{state:n,events:t};const i=Math.min(n.max,n.hp+Xl(e.amount)),s=Math.min(n.shieldMax,n.shield+Xl(e.shield));return i!==n.hp&&t.push({type:"healed",amount:i-n.hp,hp:i,was:n.hp,source:e.source??null}),s!==n.shield&&t.push({type:"shielded",amount:s-n.shield,shield:s,source:e.source??null}),{state:{...n,hp:i,shield:s},events:t}}const zd=n=>n.max>0?n.hp/n.max:0,Rc=n=>n.shieldMax>0?n.shield/n.shieldMax:0,bx=1e-9,wx=n=>n>0?60/n:0;function Tx(n={}){const e=n.magazine??30;return{magazine:e,loaded:Math.min(n.loaded??e,e),reserve:n.reserve??e*6,interval:wx(n.rpm??600),reloadTime:n.reloadTime??2,burst:n.burst??0,auto:n.auto??!0,maxCatchUp:n.maxCatchUp??.25,nextShotAt:0,reloadEndsAt:0,reloading:!1,fired:!1,burstLeft:0}}const Hd=(n,e)=>n.reloading&&e<n.reloadEndsAt;function Ax(n,e){if(!n.reloading||e<n.reloadEndsAt)return{state:n,events:[]};const t=n.magazine-n.loaded,i=Math.min(t,n.reserve),s=n.loaded+i,r=n.reserve===1/0?1/0:n.reserve-i;return{state:{...n,loaded:s,reserve:r,reloading:!1,reloadEndsAt:0},events:[{type:"reloaded",at:e,loaded:s,reserve:r,took:i}]}}function Rx(n,e,t={}){const i=[],s=[];if(Hd(n,e))return t.pressed&&i.push({type:"blocked",why:"reloading",at:e}),{state:n,shots:s,events:i};if(!(n.auto?t.held||t.pressed:!!t.pressed))return{state:n,shots:s,events:i};if(n.loaded<=0)return t.pressed&&i.push({type:"dry",at:e}),{state:n,shots:s,events:i};let o=n.loaded,a=n.nextShotAt;(!n.fired||t.pressed||e-a>n.maxCatchUp)&&(a=e);const l=n.burst>0;let c=l?t.pressed?n.burst:n.burstLeft:0;for(;o>0&&a<=e+bx&&(!l||c>0)&&(s.push({at:Math.min(a,e),remaining:o-1}),o--,c--,a+=n.interval,!(n.interval<=0)););return s.length&&i.push({type:"fired",count:s.length,loaded:o,at:e}),o===0&&n.loaded>0&&i.push({type:"emptied",at:e}),{state:{...n,loaded:o,nextShotAt:a,burstLeft:l?Math.max(0,c):0,fired:n.fired||s.length>0},shots:s,events:i}}function Cx(n,e){return n.reloading?{state:n,events:[]}:n.loaded>=n.magazine?{state:n,events:[{type:"refused",why:"full",at:e}]}:n.reserve<=0?{state:n,events:[{type:"refused",why:"empty",at:e}]}:{state:{...n,reloading:!0,reloadEndsAt:e+n.reloadTime},events:[{type:"reloading",at:e,endsAt:e+n.reloadTime}]}}const Px=.26,Lx=.13,Ix=2.4,ps=(n,e,t)=>n+(e-n)*t,nu=(n,e,t,i)=>i<=0?e:Math.max(0,Math.min(1,n+(e-n)*Math.min(1,t/i))),ba={x:0,y:0,z:-.3,pitch:0,yaw:0,roll:0};function iu(n,e,t,i){return i.x=ps(n.x,e.x,t),i.y=ps(n.y,e.y,t),i.z=ps(n.z,e.z,t),i.pitch=ps(n.pitch,e.pitch,t),i.yaw=ps(n.yaw,e.yaw,t),i.roll=ps(n.roll,e.roll,t),i}function Dx(n={}){if(!n.model)throw new Error("makeViewmodel: needs a { model }");const e={...ba,...n.rest??{}},t={...ba,...n.aim??e},i=n.stowDrop??.23,s={...e,y:e.y-i},r=n.drawTime??Px,o=n.aimTime??Lx,a=n.reach??6,l=n.cone??.3,c=new Lo,h=new Kt(n.fov??48,1,.01,1),u=new Je;let f=n.model,d=n.emitter??null;u.add(f),c.add(u);const _=new Sc(16777215,n.keyIntensity??2.2);_.position.set(.4,.8,.6),c.add(_,new yc(16777215,n.fillIntensity??.9));let v=0,p=0,m=0,x=0;const M={...s},b={...ba},C={scene:c,camera:h,model:n.model,get out(){return m===1},get drawn(){return v},get aiming(){return x===1&&v>.6},get liveReach(){return this.aiming?a*Ix:a},get liveCone(){return l},channel(w="tool"){return{id:w,get radius(){return C.liveReach},get cone(){return C.liveCone},when:()=>C.aiming,filter:S=>{var A;return((A=S==null?void 0:S.data)==null?void 0:A.tool)!==!1}}},swap(w,S){const A=f;return f&&u.remove(f),f=w??null,f&&u.add(f),C.model=f,d=S??null,A},draw(){m=1},stow(){m=0,x=0},toggle(){m=m?0:1,m||(x=0)},setAim(w){x=w?1:0,w&&(m=1)},ray(w,S=new D,A=new D){return S.copy(w.position),w.getWorldDirection(A),{origin:S,dir:A}},emitterAt(w=new D){return d?(d.updateWorldMatrix(!0,!1),w.setFromMatrixPosition(d.matrixWorld)):w.set(0,0,0)},update(w){return v=nu(v,m,w,r),p=nu(p,x&&v>.6?1:0,w,o),iu(s,e,v,b),iu(b,t,p,M),u.position.set(M.x,M.y,M.z),u.rotation.set(M.pitch,M.yaw,M.roll,"YXZ"),u.visible=v>.001,M},pass(w,S){if(u.visible===!1)return;h.aspect=(S==null?void 0:S.aspect)??h.aspect,h.updateProjectionMatrix();const A=w.autoClear;w.autoClear=!1,w.clearDepth(),w.render(c,h),w.autoClear=A},dispose(){c.traverse(w=>{var S,A;w.isMesh&&((S=w.geometry)==null||S.dispose(),Array.isArray(w.material)?w.material.forEach(P=>P.dispose()):(A=w.material)==null||A.dispose())})}};return C.update(0),C}const wa={};function Be(n,e){return wa[n]||(wa[n]=e())}const ke=(n,e={})=>new Qv({color:n,...e});function Ux(n){const e=new Je,t=new me(Be("cup",()=>new vt(.0425,.03,.132,14)),ke(n));t.castShadow=!0;const i=new me(Be("cupRim",()=>new vt(.0455,.0455,.009,14)),ke(n));i.position.y=.064;const s=new me(Be("cupSkirt",()=>new vt(.0475,.0475,.013,14)),ke(Ta));s.position.y=.0745;const r=new me(Be("cupDome",()=>new vt(.0335,.0435,.011,14)),ke(Ta));r.position.y=.0865;const o=new me(Be("cupCollar",()=>new vt(.0105,.0105,.008,8)),ke(Ta));o.position.set(.01,.094,0);const a=new me(Be("straw",()=>new vt(.0045,.0045,.105,6)),ke(15790836));return a.position.set(.016,.146,0),a.rotation.z=.16,e.add(t,i,s,r,o,a),e}const Ta=3093563,Nx=[[0,0],[.026,.014],[-.024,.017],[.017,-.026],[-.019,-.022]];function Fx(n){const e=new Je,t=new me(Be("bun",()=>new Yi(.056,10,6,0,Math.PI*2,0,Math.PI/2)),ke(n));t.scale.y=.62,t.castShadow=!0,e.add(t);const i=Be("sesame",()=>new Yi(.0042,5,4)),s=ke(15786684);for(const[r,o]of Nx){const a=new me(i,s),l=Math.hypot(r,o)/.056;a.position.set(r,.62*.056*Math.sqrt(Math.max(0,1-l*l)),o),a.scale.set(1.5,.7,1.1),e.add(a)}return e}function Ox(n){const e=new Je,t=new me(Be("heel",()=>new vt(.054,.05,.02,12)),ke(n));t.castShadow=!0,e.add(t);const i=new me(Be("heelCut",()=>new vt(.0505,.0505,.003,12)),ke(15918020));return i.position.y=.0105,e.add(i),e}function Bx(n){const e=new me(Be("chip",()=>new vt(.021,.021,.008,8)),ke(n));return e.castShadow=!0,e}function kx(n){const e=new me(Be("fry",()=>new et(.01,.01,.075)),ke(n));return e.castShadow=!0,e}function zx(n){const e=new me(Be("disc",()=>new vt(.052,.052,.018,12)),ke(n));return e.castShadow=!0,e}function Hx(n,e=3021328){const t=new Je,i=new me(Be("patty",()=>new vt(.05,.047,.017,14)),ke(n));i.castShadow=!0,t.add(i);const s=new me(Be("pattyRim",()=>new vt(.0515,.0495,.006,14)),ke(e));s.position.y=-.002,t.add(s);const r=new me(Be("pattyDome",()=>new Yi(.046,12,5,0,Math.PI*2,0,Math.PI/2)),ke(n));return r.scale.y=.13,r.position.y=.0085,t.add(r),t}function Gx(n,e=11566910){const t=new Je,i=new me(Be("fillet",()=>new vt(.049,.045,.019,13)),ke(n));i.castShadow=!0,t.add(i);const s=new me(Be("filletCrust",()=>new Yi(.045,12,5,0,Math.PI*2,0,Math.PI/2)),ke(e));return s.scale.y=.16,s.position.y=.0095,t.add(s),t.scale.set(1.15,1,.86),t}function Vx(n){const e=new Je,t=new me(Be("flat",()=>new et(.082,.006,.082)),ke(n));t.castShadow=!0,e.add(t);const i=Be("cheeseSkirt",()=>new et(.03,.01,.006)),s=ke(n);for(const[r,o,a]of[[0,.043,0],[0,-.043,0],[.043,0,Math.PI/2],[-.043,0,Math.PI/2]]){const l=new me(i,s);l.position.set(r,-.004,o),l.rotation.y=a,e.add(l)}return e}function Wx(n){const e=new me(Be("blob",()=>new Do(.036,0)),ke(n));return e.castShadow=!0,e}function Xx(n){const e=new Je,t=new me(Be("bottle",()=>new vt(.024,.028,.105,8)),ke(n));t.castShadow=!0;const i=new me(Be("bottleCap",()=>new Io(.017,.036,8)),ke(2896184));return i.position.y=.068,e.add(t,i),e}function qx(n){const e=new Je,t=new me(Be("carton",()=>new vt(.04,.026,.09,4)),ke(14173231));t.rotation.y=Math.PI/4,t.castShadow=!0;const i=new me(Be("chipTop",()=>new vt(.03,.03,.05,6)),ke(n));return i.position.y=.055,e.add(t,i),e}function Yx(n){const e=new Je,t=new me(Be("bag",()=>new et(.1,.135,.062)),ke(n));t.castShadow=!0;const i=new me(Be("bagFold",()=>new et(.104,.022,.03)),ke(n));return i.position.y=.076,e.add(t,i),e}function $x(n){const e=new Je,t=new me(Be("box",()=>new et(.125,.075,.105)),ke(n));t.castShadow=!0;const i=new me(Be("boxTape",()=>new et(.128,.004,.022)),ke(15262418));return i.position.y=.039,e.add(t,i),e}function Kx(n){const e=new Je,t=new me(Be("trayBase",()=>new et(.34,.014,.25)),ke(n));t.castShadow=!0;const i=new me(Be("trayRim",()=>new et(.36,.022,.27)),ke(n));i.position.y=.004;const s=new me(Be("trayParcel",()=>new et(.115,.055,.115)),ke(15262418));s.position.set(.04,.045,.01),s.rotation.y=.3,s.castShadow=!0;const r=new me(Be("trayBand",()=>new et(.118,.016,.05)),ke(11026479));return r.position.set(.04,.062,.01),r.rotation.y=.3,e.add(t,i,s,r),e}function jx(n){const e=new Je,t=new me(Be("shaft",()=>new vt(.016,.016,1.15,6)),ke(n));t.castShadow=!0;const i=new me(Be("mopHead",()=>new et(.115,.1,.055)),ke(14341056));return i.position.y=-.6,e.add(t,i),e}function Zx(n){const e=new Je,t=new me(Be("sprayBody",()=>new et(.055,.115,.045)),ke(n));t.castShadow=!0;const i=new me(Be("sprayNeck",()=>new et(.028,.05,.028)),ke(2896184));i.position.y=.082;const s=new me(Be("sprayTrigger",()=>new et(.05,.022,.022)),ke(2896184));s.position.set(.032,.068,0);const r=new me(Be("cloth",()=>new et(.075,.018,.06)),ke(7317704));return r.position.y=-.075,e.add(t,i,s,r),e}function Jx(n,e=11026479){const t=new Je,i=new me(Be("parcel-body",()=>new et(.115,.055,.115)),ke(n));t.add(i);const s=new me(Be("parcel-band",()=>new et(.118,.016,.118)),ke(e));s.position.y=.008,t.add(s);const r=new me(Be("parcel-flap",()=>new et(.052,.008,.052)),ke(n));return r.position.set(.018,.03,.018),r.rotation.y=.5,t.add(r),t}const Qx={cup:Ux,bun:Fx,heel:Ox,chip:Bx,fry:kx,disc:zx,patty:Hx,fillet:Gx,flat:Vx,blob:Wx,bottle:Xx,carton:qx,bag:Yx,box:$x,tray:Kx,mop:jx,spray:Zx,parcel:Jx};function eM(n){const e=new me(Be("fallback",()=>new et(.075,.055,.075)),ke(n));return e.castShadow=!0,e}function tM(n,e=13421772,t){return(Qx[n]||eM)(e,t)}function nM(n){return n==="mop"}function iM(n){return n==="carton"||n==="cup"||n==="bottle"}const Ze=(n,e,t,i)=>{const s=new me(new et(n,e,t),Is(i));return s.castShadow=!0,s.receiveShadow=!0,s},sM=3,Gd=.34,rM=.08,Vd=.53,su=Gd+Vd,oM=.03,aM=.45,lM=0;function cM(n,e,t,i=lM){const s=t?Math.min(.7,Math.max(0,i)*(1.5+e)):0,r=Math.cos(n);return{left:Math.max(0,-r)*s,right:Math.max(0,r)*s}}const hM=.74,uM=.54,dM=.26,fM=.28,pM=.072,Aa=new qt,ru=new qt,ou=new Nt,mM=new Nt,gM={shoulder:1.26,twist:1.04,elbow:2.02},_M={shoulder:1.26,twist:1.04,elbow:2.06},au=.1,er=1.1,vM=.55;function lu(n,e,t,i){const s=n,r=Number.isFinite(t)?Math.min(1.2,Math.max(.4,t)):hM,o=dM*s,a=fM*s,l=Math.sqrt(o*o+a*a+2*o*a*Math.cos(i)),c=Math.atan2(a*Math.sin(i),o+a*Math.cos(i)),h=e+uM*s-r-pM*s,u=Math.acos(Math.max(-1,Math.min(1,h/l)));return Math.max(0,u-c)}function xM(n,e){const t=n,s=(Number.isFinite(e)?Math.min(.6,Math.max(.35,e)):aM)-oM+rM*t,r=Math.max(-1,Math.min(1,(s-Vd*t)/(Gd*t))),o=Math.max(-.62,Math.min(.62,Math.asin(r)));return{hipsY:s,thighDown:o}}const xo={singlet:{sleeve:"none",collar:0,cuffs:0,hem:0,front:null,bulk:1,cloth:"garmentCotton"},tshirt:{sleeve:"short",collar:0,cuffs:0,hem:0,front:null,bulk:1,cloth:"garmentCotton"},longtee:{sleeve:"long",collar:0,cuffs:0,hem:0,front:null,bulk:1,cloth:"garmentCotton"},shirt:{sleeve:"long",collar:1,cuffs:0,hem:0,front:"placket",bulk:1,cloth:"garmentCotton",fasten:"garmentButtons"},jumper:{sleeve:"long",collar:1,cuffs:1,hem:1,front:null,bulk:1.1,cloth:"garmentKnit"},jacket:{sleeve:"long",collar:1,cuffs:1,hem:1,front:"placket",bulk:1.16,cloth:"garmentDenim",fasten:"garmentZip"},jacketOpen:{sleeve:"long",collar:1,cuffs:1,hem:0,front:"open",bulk:1.16,cloth:"garmentDenim"},polo:{sleeve:"short",collar:1,cuffs:0,hem:0,front:"placket",bulk:1,cloth:"garmentCotton",fasten:"garmentButtons"},dress:{sleeve:"short",collar:0,cuffs:0,hem:0,front:null,bulk:1,skirt:.3,bareLegs:!0},sundress:{sleeve:"none",collar:0,cuffs:0,hem:0,front:null,bulk:1,skirt:.34,bareLegs:!0},swimsuit:{sleeve:"none",collar:0,cuffs:0,hem:0,front:null,bulk:1,bareLegs:!0},trunks:{sleeve:"none",collar:0,cuffs:0,hem:0,front:null,bulk:1,bareTorso:!0,leg:"short"}},MM={titanPlate:{sleeve:"long",collar:1,cuffs:1,hem:1,front:null,bulk:1.3,torso:1.2,pauldrons:.16,cloth:"garmentPlate",clothRepeat:1},hunterCloak:{sleeve:"long",collar:1,cuffs:1,hem:0,front:null,bulk:1.02,torso:.96,cloak:.62,hood:1,cloth:"fabricWeave"},warlockRobe:{sleeve:"long",collar:1,cuffs:0,hem:0,front:null,bulk:1.12,torso:1.02,skirt:.46,cloth:"fabricWeave"}};Object.assign(xo,MM);const cu={trousers:{leg:"long"},shorts:{leg:"short"},skirt:{leg:"short",skirt:1}};class Cc{constructor(e={}){const{skin:t=eo.skinTones[0],hair:i=eo.hairTones[0],height:s=1,build:r=1,hairStyle:o="short",hat:a=null,hatColour:l=3884626,glasses:c=!1,sleeve:h=null,trouser:u=null}=e;let f=2166136261;for(const m of[t,i,o,a??"",c?1:0,Math.round(s*1e3),Math.round(r*1e3)]){const x=String(m);for(let M=0;M<x.length;M++)f^=x.charCodeAt(M),f=Math.imul(f,16777619)>>>0}this.lookHash=f,this.cut={sleeve:h??((f>>>3)%100<34?"short":"long"),trouser:u??((f>>>11)%100<19?"short":"long")},this.group=new Je,this.group.userData.avatar=this,this.scale=s,this.opts={skin:t,hair:i,height:s,build:r,hairStyle:o,hat:a,hatColour:l,glasses:c,sleeve:h,trouser:u};const d=s,_=.44*r,v=.24*r;this.hips=new Je,this.hips.position.y=su*d,this.group.add(this.hips),this.torso=Ze(_,.58*d,v,14209734),this.torso.position.y=.29*d,this.hips.add(this.torso),this.neck=Ze(.14*d,.08*d,.14*d,t),this.neck.position.y=.62*d,this.hips.add(this.neck),this.head=new Je,this.head.position.y=.66*d,this.hips.add(this.head);const p=Ze(.26*d,.3*d,.25*d,t);if(p.position.y=.15*d,this.head.add(p),this.skull=p,this.hair=new Je,o!=="bald"){const m=Ze(.28*d,.1*d,.27*d,i);m.position.y=.255*d,this.hair.add(m)}if(o==="short"||o==="long"||o==="curly"){const m=Ze(.285*d,.024*d,.1*d,i);m.position.set(0,.212*d,.085*d),this.hair.add(m)}if(o==="long"){const m=Ze(.3*d,.3*d,.14*d,i);m.position.set(0,.1*d,-.115*d),this.hair.add(m)}if(o==="curly"){const m=Ze(.33*d,.15*d,.31*d,i);m.position.y=.275*d,this.hair.add(m);for(const[x,M,b,C]of[[-.155,.225,-.02,.1],[.155,.235,.01,.1],[0,.215,-.165,.12]]){const w=Ze(C*d,.13*d,.13*d,i);w.position.set(x*d,M*d,b*d),this.hair.add(w)}}if(o==="bun"){const m=Ze(.15*d,.13*d,.13*d,i);m.position.set(0,.295*d,-.145*d),this.hair.add(m)}if(o==="ponytail"){const m=Ze(.11*d,.05*d,.11*d,i);m.position.set(0,.245*d,-.15*d),this.hair.add(m);const x=Ze(.095*d,.28*d,.095*d,i);x.position.set(0,.095*d,-.18*d),x.rotation.x=-.18,this.hair.add(x)}if(this.head.add(this.hair),a==="cap"){const m=Ze(.29*d,.11*d,.28*d,l);m.position.y=.315*d,this.head.add(m);const x=Ze(.24*d,.03*d,.13*d,l);x.position.set(0,.28*d,.185*d),this.head.add(x)}else if(a==="beanie"){const m=Ze(.3*d,.17*d,.29*d,l);m.position.y=.29*d,this.head.add(m)}if(c){const m=Ze(.2*d,.035*d,.02*d,1973016);m.position.set(0,.17*d,.135*d),this.head.add(m)}for(const m of[-.06,.06]){const x=Ze(.045*d,.045*d,.02*d,1973016);x.position.set(m*d,.17*d,.13*d),this.head.add(x)}this.arms={};for(const m of["left","right"]){const x=new Je;x.position.set((m==="left"?-1:1)*(_/2+.055*d),.54*d,0);const M=Ze(.11*d,.26*d,.12*d,14209734);M.position.y=-.13*d,x.add(M);const b=new Je;b.position.y=-.26*d,x.add(b);const C=Ze(.105*d,.3*d,.115*d,14209734);C.position.y=-.13*d,b.add(C);const w=Ze(.1*d,.1*d,.11*d,t);w.position.y=-.28*d,b.add(w);const S=new Je;S.position.y=-.34*d,b.add(S),this.hips.add(x),this.arms[m]={pivot:x,elbow:b,upper:M,fore:C,hand:w,grip:S}}this.legs={};for(const m of["left","right"]){const x=new Je;x.position.set((m==="left"?-1:1)*.11*d,0,0);const M=Ze(.15*d,.34*d,.16*d,3884626);M.position.y=-.17*d,x.add(M);const b=new Je;b.position.y=-.34*d,x.add(b);const C=Ze(.145*d,.46*d,.155*d,3884626);C.position.y=-.21*d,b.add(C);const w=Ze(.17*d,.1*d,.24*d,2764083);w.position.set(0,-.48*d,.03*d),b.add(w),this.hips.add(x),this.legs[m]={pivot:x,leg:M,knee:b,shin:C,shoe:w}}this.bag=null,this.hat=null,this.lod=0,this._lodMeshes=null,this._lodAuthored=new WeakMap,this.phase=0,this.leaning=0,this.firstPerson=!1,this._held=[],this._heldSig="",this._ownGeo=new Set,this.group.traverse(m=>{m.isMesh&&this._ownGeo.add(m.geometry)})}static fromLook(e={},t={}){const i=(r,o)=>r[((o|0)%r.length+r.length)%r.length],s=new Cc({skin:e.skinColour??i(eo.skinTones,e.skin??0),hair:e.hairColour??i(eo.hairTones,e.hair??0),hairStyle:e.hairStyle??"short",height:(e.height??1)*(t.heightMul??1),build:(e.build??1)*(t.buildMul??1),hat:e.hat??null,hatColour:e.hatColour??3884626,glasses:!!e.glasses,sleeve:e.sleeve??null,trouser:e.trouser??null});return s.applyOutfit({top:{colour:e.top??14209734,...e.garment?{garment:e.garment}:{}},bottom:{colour:e.bottom??3884626},shoes:{colour:e.shoes??2764083},...e.head?{head:e.head}:{},...e.bag?{bag:e.bag}:{}}),s}applyOutfit(e={}){var x,M,b,C,w,S,A,P,g,y,L,O,z,$,G;const t=I=>{var W;return(W=I.top)!=null&&W.garment?xo[I.top.garment]:null},i=(I,W)=>{I.material=Is(W)},s=((x=e.top)==null?void 0:x.colour)??14209734;i(this.torso,(M=t(e))!=null&&M.bareTorso?this.opts.skin:s),i(this.arms.left.upper,s),i(this.arms.right.upper,s);const r=(b=e.top)!=null&&b.garment?xo[e.top.garment]:null,o=(r==null?void 0:r.sleeve)??e.sleeve??this.cut.sleeve,a=o==="long"?s:this.opts.skin;i(this.arms.left.fore,a),i(this.arms.right.fore,a);const l=o==="none"?this.opts.skin:s;i(this.arms.left.upper,l),i(this.arms.right.upper,l);let c=((C=e.bottom)==null?void 0:C.colour)??3884626;const h=(w=e.bottom)!=null&&w.garment?cu[e.bottom.garment]:null,u=!!((S=t(e))!=null&&S.bareLegs),d=(u?"short":((A=t(e))==null?void 0:A.leg)??(h?h.leg:null)??e.trouser??this.cut.trouser)==="short"?this.opts.skin:c;u&&(c=this.opts.skin),i(this.legs.left.leg,c),i(this.legs.left.shin,d),i(this.legs.right.leg,c),i(this.legs.right.shin,d);const _=((P=e.shoes)==null?void 0:P.colour)??2764083;if(i(this.legs.left.shoe,_),i(this.legs.right.shoe,_),this.hat&&(this.head.remove(this.hat),this.hat=null),e.head){const I=this.scale;if(this.hat=Ze(.3*I,.08*I,.3*I,e.head.colour),this.hat.position.y=.33*I,e.head.id==="cap"){const W=Ze(.28*I,.03*I,.14*I,e.head.colour);W.position.set(0,-.03*I,.2*I),this.hat.add(W)}this.head.add(this.hat)}for(const I of this._garment??[])(g=I.parent)==null||g.remove(I);this._garment=[];const v=((y=e.top)==null?void 0:y.garment)??null,p=v?xo[v]:null;if(p){const I=this.scale,W=this.opts.build,ie=.44*W,oe=.24*W,pe=((L=e.top)==null?void 0:L.trim)??s,ye=(ue,K)=>(ue.add(K),this._garment.push(K),K);if(p.collar){const ue=Ze(ie+.03*I,.055*I,oe+.03*I,pe);ue.position.y=.565*I,ye(this.hips,ue)}if(p.hem){const ue=Ze(ie+.02*I,.05*I,oe+.02*I,pe);ue.position.y=.022*I,ye(this.hips,ue)}if(p.cuffs)for(const ue of["left","right"]){const K=Ze(.115*I,.045*I,.125*I,pe);K.position.y=-.262*I,ye(this.arms[ue].elbow,K)}if(p.cloth){const ue=Qh(p.cloth,s,{repeat:p.clothRepeat??sM});ue.map&&this.hips.traverse(K=>{var te,fe,de;K.isMesh&&((de=(fe=(te=K.material)==null?void 0:te.color)==null?void 0:fe.getHex)==null?void 0:de.call(fe))===s&&(K.material=ue)})}if(p.front==="placket"){const ue=Ze(.045*I,.52*I,.012*I,pe);if(ue.position.set(0,.3*I,oe/2+.006*I),p.fasten){const K=Qh(p.fasten,pe,{repeat:1});K.map&&(ue.material=K)}ye(this.hips,ue)}else if(p.front==="open"){i(this.torso,((O=e.top)==null?void 0:O.under)??15262422);for(const ue of[-1,1]){const K=Ze(ie*.42,.56*I,.028*I,s);K.position.set(ue*ie*.29,.29*I,oe/2+.01*I),ye(this.hips,K)}for(const ue of[-1,1]){const K=Ze(.026*I,.56*I,oe*.92,s);K.position.set(ue*(ie/2+.008*I),.29*I,0),ye(this.hips,K)}}if(p.skirt){const ue=Ze(ie+.05*I,p.skirt*I,oe+.05*I,s);ue.position.y=-p.skirt*I*.5+.02*I,ye(this.hips,ue)}if(p.torso&&p.torso!==1?this.torso.scale.set(p.torso,1,p.torso):this.torso.scale.set(1,1,1),p.pauldrons)for(const ue of["left","right"]){const K=Ze(.2*I*(p.torso??1),p.pauldrons*I,.2*I,s);K.position.set(0,.02*I,0),ye(this.arms[ue].pivot,K)}if(p.cloak){const ue=Ze(ie*1.12,p.cloak*I,.02*I,s);ue.position.set(0,.3*I-p.cloak*I*.5,-oe/2-.012*I),ye(this.hips,ue)}if(p.hood){const ue=Ze(.3*I,.26*I,.16*I,s);ue.position.set(0,.1*I,-.13*I),ye(this.head,ue)}if(p.bulk!==1)for(const ue of["left","right"])this.arms[ue].upper.scale.set(p.bulk,1,p.bulk),this.arms[ue].fore.scale.set(p.bulk,1,p.bulk);else for(const ue of["left","right"])this.arms[ue].upper.scale.set(1,1,1),this.arms[ue].fore.scale.set(1,1,1)}else for(const I of["left","right"])this.arms[I].upper.scale.set(1,1,1),this.arms[I].fore.scale.set(1,1,1);for(const I of this._skirt??[])(z=I.parent)==null||z.remove(I);this._skirt=[];const m=(($=e.bottom)==null?void 0:$.garment)??null;if(m&&((G=cu[m])!=null&&G.skirt)){const I=this.scale,W=this.opts.build,ie=Ze(.44*W+.04*I,.26*I,.24*W+.04*I,c);ie.position.y=-.08*I,this.hips.add(ie),this._skirt.push(ie)}if(this.bag&&(this.hips.remove(this.bag),this.bag=null),e.bag){const I=this.scale;this.bag=Ze(.32*I,.4*I,.16*I,e.bag.colour),this.bag.position.set(0,.3*I,-.2*I),this.hips.add(this.bag)}this._lodMeshes=null,this.lod>0&&this._applyLod(),this.firstPerson&&this.setFirstPerson(!0)}setFirstPerson(e){this.firstPerson=e,this.head.visible=!e,this.neck.visible=!e,this.torso.visible=!e,this.arms.left.pivot.visible=!e,this.arms.right.pivot.visible=!e,this.legs.left.pivot.visible=!e,this.legs.right.pivot.visible=!e,this.bag&&(this.bag.visible=!e);for(const t of this._garment??[])t.visible=!e;for(const t of this._skirt??[])t.visible=!e;this._applyHeldVisibility()}setHeld(e=[]){var r;const t=Array.isArray(e)?e.slice(0,4):[],i=t.map(o=>`${o.id}:${o.colour}:${o.shape||""}`).join("|");if(i===this._heldSig)return;this._heldSig=i;for(const o of this._held)(r=o.parent)==null||r.remove(o);this._held=[];const s=this.scale;t.forEach((o,a)=>{const l=a===1?"left":"right",c=this.arms[l].grip,h=nM(o.shape)||!!o.big,u=tM(o.shape,o.colour??13421772);u.scale.setScalar(s),u.position.set(0,h?-.16*s:-.02*s-(a>>1)*.11*s,h?.05*s:.075*s),h&&(u.rotation.x=.24),u.userData.upright=iM(o.shape),c.add(u),this._held.push(u)}),this._applyHeldVisibility(),this._lodMeshes=null,this.lod>0&&this._applyLod()}setLod(e){e===this.lod&&this._lodMeshes||(this.lod=e,this._applyLod())}_applyLod(){if(!this._lodMeshes){const t=[];this.hips.traverse(i=>{i.isMesh&&(this._lodAuthored.has(i)||this._lodAuthored.set(i,i.castShadow),t.push(i))}),this._lodMeshes=t}const e=this.lod<1;for(const t of this._lodMeshes){const i=e?this._lodAuthored.get(t):!1;t.castShadow!==i&&(t.castShadow=i)}this.hips.visible=this.lod<2}_applyHeldVisibility(){for(const e of["left","right"]){const t=this.arms[e].grip;t.visible=!0,this.firstPerson?(t.parent!==this.hips&&this.hips.add(t),t.position.set((e==="left"?-1:1)*.22*this.scale,.34*this.scale,.34*this.scale)):t.parent!==this.arms[e].elbow&&(this.arms[e].elbow.add(t),t.position.set(0,-.34*this.scale,0))}}_levelHeld(){for(const e of this._held)e.userData.upright&&(e.parent.updateWorldMatrix(!0,!1),e.parent.getWorldQuaternion(Aa),ou.setFromQuaternion(Aa,"YXZ"),ru.setFromEuler(mM.set(0,ou.y,0,"YXZ")),e.quaternion.copy(Aa).invert().multiply(ru))}update(e,t=0,i={}){this._pose(e,t,i),this._levelHeld()}_pose(e,t=0,i={}){const s=t>.2;if(this.phase+=e*(s?4.2+t*1.1:2.2),i.sitting){if(this.group.rotation.z=0,i.seatY==null){this.legs.left.pivot.rotation.x=-1.4,this.legs.right.pivot.rotation.x=-1.4,this.legs.left.knee.rotation.x=0,this.legs.right.knee.rotation.x=0,this.arms.left.pivot.rotation.x=-.5,this.arms.right.pivot.rotation.x=-.5,this.arms.left.pivot.rotation.y=0,this.arms.right.pivot.rotation.y=0,this.arms.left.elbow.rotation.x=0,this.arms.right.elbow.rotation.x=0,this.hips.position.y=.5*this.scale;return}const{hipsY:u,thighDown:f}=xM(this.scale,i.seatY);for(const p of["left","right"]){const m=this.legs[p];m.pivot.rotation.x=f-Math.PI/2,m.knee.rotation.x=Math.PI/2-f}this.hips.position.y=u,this.torso.rotation.x=.12;const d=Math.max(0,Math.min(1,i.eat??0)),_=i.eat==null?null:i.drink?"left":"right",v=lu(this.scale,u,i.tableY,er);for(const p of["left","right"]){const m=this.arms[p],x=p==="left"?1:-1;if(p!==_){m.pivot.rotation.x=-lu(this.scale,u,i.tableY,er),m.elbow.rotation.x=-er,m.pivot.rotation.y=0,m.pivot.rotation.z=x*au;continue}const M=i.drink?_M:gM;m.pivot.rotation.x=-(v+(M.shoulder-v)*d),m.pivot.rotation.y=x*M.twist*d,m.pivot.rotation.z=x*au,m.elbow.rotation.x=-(er+(M.elbow-er)*d)}this.head.rotation.x=i.eat==null?.25:i.drink?.22-.34*d:.24-.08*d;return}if(i.sleeping){this.group.rotation.z=Math.PI/2*.98,this.hips.position.y=.3*this.scale,this.legs.left.knee.rotation.x=0,this.legs.right.knee.rotation.x=0;return}this.group.rotation.z=0,this.hips.position.y=su*this.scale+(s?Math.abs(Math.sin(this.phase))*.02:0);const r=s?Math.sin(this.phase)*Math.min(.85,.28+t*.14):Math.sin(this.phase)*.03;this.legs.left.pivot.rotation.x=r,this.legs.right.pivot.rotation.x=-r;const o=cM(this.phase,t,s);this.legs.left.knee.rotation.x=o.left,this.legs.right.knee.rotation.x=o.right;const a=i.carrying?.15:.75,l=i.carrying?.14:.06;this.arms.left.pivot.rotation.x=-r*a,this.arms.right.pivot.rotation.x=r*a,this.arms.left.pivot.rotation.z=l,this.arms.right.pivot.rotation.z=-l,this.arms.left.pivot.rotation.y=0,this.arms.right.pivot.rotation.y=0;const c=i.carrying?vM:0;this.arms.left.elbow.rotation.x=-c,this.arms.right.elbow.rotation.x=-c;const h=i.tired?.16:0;this.torso.rotation.x=h,this.head.rotation.x=h*.6}fidget(e){this.arms.left.pivot.rotation.x+=(Math.random()-.5)*e*.3,this.arms.right.pivot.rotation.x+=(Math.random()-.5)*e*.3,this.head.rotation.y=(Math.random()-.5)*e*.4}dispose(){for(const e of this._ownGeo)e.dispose();this._ownGeo.clear()}}const SM={cloth:"#8a1c1c",clothDark:"#5e1414",armour:"#3a3b40",armour2:"#4a4c52",suit:"#26262a",face:"#161618",metal:"#2a2c30",cap:"#3b2a20",rust:"#7a4a2a",bone:"#d6ccb4",mantle:"#4a3526",glowEye:"#8ec8f2",glowArc:"#9fd8ff",shell:"#261b3a",rim:"#3a2d58",shell2:"#1a1428",bezel:"#3b3550",lens:"#1a1238",glowViolet:"#b36bff",hull:"#8a2e22",under:"#4d1a14",gun:"#2a2624",glowShank:"#cfe8ff",glowExhaust:"#ff9a3c"};function to(n){const e={},t=[],i=(P,g,y,L,O,z,$,G,I=0,W=0,ie=0)=>t.push([P,g,y,L,O,z,$,G,I,W,ie]),s=n.leg,r=1.25,o=1.05,a=-.55,l=-.55+r,c=-.55+r-o,h=.06+s.thigh*Math.cos(a)+s.shin*Math.cos(l)+s.foot*Math.cos(c),[u,f,d]=n.pelvis;e.pelvis={at:[0,h,0]},i("pelvis",u,f,d,0,0,0,"suit");for(const P of[-1,1]){const g=P<0?"L":"R";e["thigh"+g]={parent:"pelvis",at:[P*n.hipX,-.03,0],rot:[a,0,0]},e["shin"+g]={parent:"thigh"+g,at:[0,-s.thigh,0],rot:[r,0,0]},e["foot"+g]={parent:"shin"+g,at:[0,-s.shin,0],rot:[-o,0,0]},i("thigh"+g,s.w*1.3,s.thigh+.04,s.w*1.45,0,-s.thigh/2,0,"suit"),i("shin"+g,s.w,s.shin+.03,s.w*1.05,0,-s.shin/2,0,"armour"),i("foot"+g,s.w*.85,s.foot,s.w*.85,0,-s.foot/2,0,"suit"),i("foot"+g,s.w*1.3,.05,s.w*3,0,-s.foot,s.w*.9,"armour2",-c,0,0)}const[_,v,p]=n.chest;e.chest={parent:"pelvis",at:[0,f/2+.03,0],rot:[n.hunch,0,0]},i("chest",_,v,p,0,v/2,0,"suit"),i("chest",_*1.1,v*.44,p*1.08,0,v*.74,.01,"armour"),n.rust&&i("chest",_*.42,v*.26,.03,_*.14,v*.4,p/2+.02,"rust"),i("chest",.14,.1,.13,0,v+.03,.05,"suit");const[m,x,M]=n.head;e.head={parent:"chest",at:[0,v+.07,.08],rot:[-n.hunch*.85,0,0]},i("head",m,x,M,0,x/2,0,"armour"),i("head",m*.84,x*.52,.03,0,x*.58,M/2+.012,"face");const b=n.eye;for(const P of[-1,1])for(const g of[-1,1])i("head",b,b,.02,P*b*.95,x*.6+g*b*.9,M/2+.03,"glowEye");i("head",m*.42,x*.3,M*.36,0,x*.17,M/2+M*.13,"armour2");const C=n.horn;for(const P of[-1,1])i("head",C,.05,.055,P*(m/2+C/2-.02),x*.62,-M*.1,"armour2",0,P*.35,P*.18),i("head",C*.75,.045,.05,P*(m/2+C*.95),x*.62+C*.3,-M*.25,"armour2",0,P*.7,P*.9);if(n.hooks)for(const P of[-1,1])i("head",.05,.07,.05,P*m*.2,x+.035,-M*.1,"armour2");if(n.crownStubs)for(const P of[-1,1])i("head",.045,.14,.045,P*m*.34,x+.06,-M*.22,"bone",-.35,0,P*-.2);const w=n.arm.upper,S=n.arm.fore,A=n.arm.t;for(const P of[-1,1]){const g=P<0?"L":"R";e["arm"+g]={parent:"chest",at:[P*(_/2+A/2),v*.86,0],rot:[-n.hunch+n.armFwd,0,P*.1]},e["fore"+g]={parent:"arm"+g,at:[0,-w,0],rot:[-n.elbow,0,0]},i("arm"+g,A,w+.03,A,0,-w/2,0,"suit"),i("arm"+g,A*1.55,.11,A*1.55,0,-.03,0,"armour"),i("fore"+g,A*1.05,S,A*1.12,0,-S/2,0,"armour")}if(n.lower){const P=w*.7,g=S*.7,y=A*.62;for(const L of[-1,1]){const O=L<0?"L":"R";e["arm2"+O]={parent:"chest",at:[L*(_/2+y/2-.01),v*.34,.03],rot:[-n.hunch+n.lower.fwd,0,L*.3]},e["fore2"+O]={parent:"arm2"+O,at:[0,-P,0],rot:[-n.lower.elbow,0,0]},i("arm2"+O,y,P+.02,y,0,-P/2,0,"suit"),i("fore2"+O,y*1.05,g,y*1.12,0,-g/2,0,"armour"),n.lowerBlades&&(i("fore2"+O,.06,.07,.06,0,-g-.02,0,"metal"),i("fore2"+O,.035,.62,.07,0,-g-.36,0,"glowArc"))}}if(n.caps)for(const P of[-1,1])i("chest",.1,.1,.1,P*(_/2+.035),v*.36,.02,"cap",0,0,P*.6);if(n.pauldron){const[P,g,y]=n.pauldron;for(const L of[-1,1])i("chest",P,g,y,L*(_/2+P*.28),v*.96,0,"armour2",0,0,-L*.28),n.trim&&i("chest",P*1.04,.035,y*1.04,L*(_/2+P*.3),v*.96+g/2,0,"bone",0,0,-L*.28)}if(n.trim&&i("chest",_*.9,.04,.03,0,v*.55,p/2+.035,"bone"),n.pack&&i("chest",.28,.34,.15,0,v*.5,-p/2-.075,"armour2"),n.mantle&&i("chest",_*1.2,.13,p*1.25,0,v+.01,-.02,"mantle"),n.cowl&&(i("head",m+.05,x*.85,.05,0,x*.45,-M/2-.02,"cloth"),i("pelvis",u*.72,.36,.025,0,-.21,d/2+.02,"cloth"),i("pelvis",u*.8,.28,.025,0,-.17,-d/2-.02,"clothDark")),n.cape){const P=n.cape;e.cape={parent:"chest",at:[0,v*P.top,-p/2-.045-(n.pack?.15:0)],rot:[-n.hunch+.06,0,0]},i("cape",P.w,P.len,.03,0,-P.len/2,0,"cloth");const g=P.hem,y=P.w/(g*2);for(let L=0;L<g;L++)i("cape",y,.07+L%2*.07,.028,-P.w/2+y*(2*L+1),-P.len-.035-L%2*.035,0,"clothDark")}if(n.banner&&(e.banner={parent:"chest",at:[.12,v*.9,-p/2-.26],rot:[-n.hunch,0,0]},i("banner",.05,1.05,.05,0,.02,0,"metal"),i("banner",.46,.55,.03,.25,.24,0,"cloth"),i("banner",.46,.07,.035,.25,.04,0,"bone")),n.weapon==="pistol")i("foreR",.065,.2,.1,0,-S-.08,.02,"metal"),i("foreR",.035,.03,.035,0,-S-.19,.02,"glowArc"),i("foreL",.05,.06,.05,0,-S-.02,0,"metal"),i("foreL",.028,.28,.055,0,-S-.19,0,"glowArc");else if(n.weapon==="wire")i("foreR",.1,.32,.13,.04,-S+.06,.02,"armour2"),i("foreR",.07,1.36,.1,.04,-S-.5,.02,"metal"),i("foreR",.03,.26,.035,.04,-S-.42,.08,"glowArc");else if(n.weapon==="shock"){i("foreR",.11,.95,.15,.05,-S-.28,0,"metal");for(const P of[-1,1])i("foreR",.02,.62,.02,.05+P*.05,-S-.3,.085,"glowArc")}return{bones:e,parts:t}}function yM(){const e={core:{at:[0,2.05,0]},eye:{parent:"core",at:[0,0,.621]}},t=[],i=(a,...l)=>t.push([a,...l]);i("core",1.15,1.15*.72,1.15*.72,0,0,0,"shell"),i("core",1.15*.72,1.15,1.15*.72,0,0,0,"shell"),i("core",1.15*.72,1.15*.72,1.15,0,0,0,"shell"),i("core",1.15*.86,1.15*.86,1.15*.6,0,0,0,"rim",0,0,Math.PI/4),i("core",1.15*.62,1.15*.62,.06,0,0,1.15/2+.02,"shell2");const s=1.15*.3,r=1.15*.05,o=1.15/2+.06;return i("core",s,r,.04,0,s/2-r/2,o,"glowViolet"),i("core",s,r,.04,0,-s/2+r/2,o,"glowViolet"),i("core",r,s,.04,-s/2+r/2,0,o,"glowViolet"),i("core",r,s,.04,s/2-r/2,0,o,"glowViolet"),i("core",s-r*2,s-r*2,.03,0,0,o-.012,"lens"),i("core",1.15*.26,.05,.06,-1.15*.13,1.15*.24,o-.005,"bezel",0,0,.35),i("core",.05,1.15*.28,.06,1.15*.25,-1.15*.02,o-.005,"bezel"),i("core",1.15*.24,.05,.06,-1.15*.05,-1.15*.24,o-.005,"bezel",0,0,-.2),{bones:e,parts:t}}function EM(){const n={hull:{at:[0,1.9,0]}},e=[],t=(...i)=>e.push(["hull",...i]);t(.9,.5,.75,0,0,0,"hull"),t(.8,.12,.66,0,-.29,0,"under"),t(.56,.3,.04,0,.02,.39,"face"),t(.1,.1,.03,0,.1,.415,"glowShank");for(const i of[-1,1])t(.065,.065,.03,i*.14,-.06,.415,"glowShank"),t(.36,.26,.42,i*.62,.16,-.02,"hull",0,0,i*.22),t(.26,.05,.26,i*.64,.31,-.02,"face",0,0,i*.22),t(.2,.04,.2,i*.6,0,-.02,"glowExhaust"),t(.05,.8,.08,i*.3,-.62,-.22,"under",.45,0,i*.35);return t(.12,.12,.46,0,-.38,.22,"gun"),t(.06,.06,.04,0,-.38,.47,"glowArc"),{bones:n,parts:e}}const hu={hunch:.18,leg:{thigh:.55,shin:.62,foot:.4,w:.12},hipX:.16,pelvis:[.44,.22,.3],chest:[.66,.6,.4],head:[.32,.3,.36],eye:.036,horn:.32,hooks:!0,arm:{upper:.46,fore:.44,t:.11},armFwd:.35,elbow:1.9,lower:{fwd:.55,elbow:1.2},pauldron:[.3,.16,.36],pack:!0,cape:{w:.78,len:1.2,top:.98,hem:4},weapon:"shock"},Tn=n=>n.userData.rest,no=(n,e,t,i,s)=>{n&&(n.rotation.x=Tn(n).r.x+Math.sin(e*i+s)*t)},ms=(n,e,t={})=>({id:n,...e,palette:SM,...t}),io=["cape","banner"],uu={colour:"#5fb8ff",element:"arc",opacity:.22,pad:1.12,regenDelay:4,regenSeconds:1.5},bM=[{id:"dreg",name:"Dreg",faction:"fallen",rank:"minor",tier:"fodder",body:"biped",health:{max:80},crit:{bones:["head"]},noHit:io,ether:!0,spec:ms("dreg",to({hunch:.55,leg:{thigh:.34,shin:.4,foot:.27,w:.07},hipX:.1,pelvis:[.26,.16,.2],chest:[.36,.42,.26],head:[.2,.19,.28],eye:.028,horn:.14,arm:{upper:.3,fore:.3,t:.06},armFwd:.2,elbow:1.35,caps:!0,cowl:!0,rust:!0,weapon:"pistol"})),idle:(n,e,t)=>{const i=Math.floor(n*1.3+t.phase*3);e.head.rotation.y=Tn(e.head).r.y+Math.sin(i*12.9898)*.55,e.pelvis.position.y=Tn(e.pelvis).p.y+Math.sin(n*6+t.phase)*.012}},{id:"vandal",name:"Vandal",faction:"fallen",rank:"minor",tier:"skirmisher",body:"biped",health:{max:150},crit:{bones:["head"]},noHit:io,ether:!0,spec:ms("vandal",to({hunch:.35,leg:{thigh:.45,shin:.55,foot:.36,w:.085},hipX:.12,pelvis:[.32,.18,.24],chest:[.46,.5,.3],head:[.26,.24,.32],eye:.032,horn:.24,hooks:!0,arm:{upper:.38,fore:.36,t:.075},armFwd:.3,elbow:1.85,lower:{fwd:.15,elbow:.55},cape:{w:.42,len:.78,top:.95,hem:3},weapon:"wire"})),idle:(n,e,t)=>{e.chest.rotation.x=Tn(e.chest).r.x+Math.sin(n*1.6+t.phase)*.025,no(e.cape,n,.05,1.3,t.phase)}},{id:"captain",name:"Captain",faction:"fallen",rank:"elite",tier:"heavy",body:"biped",health:{max:320},shield:{...uu,amount:160},crit:{bones:["head"]},noHit:io,ether:!0,spec:ms("captain",to(hu)),idle:(n,e,t)=>{e.head.rotation.z=Tn(e.head).r.z+Math.sin(n*.5+t.phase)*.08,no(e.cape,n,.035,.9,t.phase)}},{id:"boss",name:"Boss Captain",faction:"fallen",rank:"boss",tier:"heavy",body:"biped",health:{max:1100},shield:{...uu,amount:400},crit:{bones:["head"]},noHit:io,ether:!0,spec:ms("boss",to({...hu,horn:.36,crownStubs:!0,trim:!0,mantle:!0,banner:!0,lowerBlades:!0,lower:{fwd:.55,elbow:1.75},cape:{w:.8,len:1.5,top:.98,hem:5}}),{scale:1.2}),idle:(n,e,t)=>{e.head.rotation.z=Tn(e.head).r.z+Math.sin(n*.45+t.phase)*.07,no(e.cape,n,.03,.8,t.phase),no(e.banner,n,.04,1.1,t.phase+1)}},{id:"servitor",name:"Servitor",faction:"fallen",rank:"elite",tier:"heavy",body:"servitor",health:{max:500},crit:{keys:["glowViolet","lens"]},aura:{bone:"core",at:[0,0,0],r:.95,colour:"#b08cff",opacity:.12},spec:ms("servitor",yM()),idle:(n,e,t)=>{e.core.position.y=Tn(e.core).p.y+Math.sin(n*Math.PI+t.phase)*.1,e.core.rotation.z=Tn(e.core).r.z+Math.sin(n*.35+t.phase)*.12}},{id:"shank",name:"Shank",faction:"fallen",rank:"minor",tier:"skirmisher",body:"shank",health:{max:60},crit:null,spec:ms("shank",EM()),idle:(n,e,t)=>{e.hull.position.y=Tn(e.hull).p.y+Math.sin(n*2.6+t.phase)*.05,e.hull.rotation.z=Tn(e.hull).r.z+Math.sin(n*1.3+t.phase)*.06}}],du=Math.PI/180,Wd=Math.tan(Math.PI/8),wM=Math.tan(Math.PI/6),Xd={gunmetal:"#2d3034",blued:"#252b33",iron:"#3a3d40",steel:"#7d858a",plasteel:"#a9b3b8",olive:"#5f6b4a",wood:"#6b5238",rubber:"#1f2226",leather:"#5a3e2b",cord:"#8a7a5a",cloth:"#bdb29a",brass:"#a8843c",bore:"#0d0e10",reticle:"#0d0e10",glowDot:"#ff5a36",glowBead:"#f2e6c0"},TM="#9fc4d0",Vi=(n,e,t,i,s,r,o)=>[0,1,2,3].map(a=>[n,2*e,2*e*Wd,t,i,s,r,o,0,0,a*Math.PI/4]),fu=(n,e,t,i,s,r,o)=>[0,1,2].map(a=>[n,2*e*wM,2*e,t,i,s,r,o,0,0,a*Math.PI/3]);function so(n,e,t,i,s,r,o,a){const l=[],c=e+t/2,h=2*(e+t)*Wd+6e-4;for(let u=0;u<8;u++){const f=u*Math.PI/4;l.push([n,h,t,i,s+Math.sin(f)*c,r+Math.cos(f)*c,o,a,0,0,-f])}return l}const Wn=(n,e,t,i)=>({bone:n,at:e,fingers:t,back:i}),tr=(n,e)=>({bone:n,at:e}),AM={body:{at:[0,0,0]},mag:{parent:"body",at:[0,-.004,-.105]},bolt:{parent:"body",at:[.03,.052,-.03]}},RM=[["body",.056,.07,.26,0,.045,-.055,"gunmetal"],["body",.058,.012,.2,0,.086,-.07,"olive"],["body",.024,.008,.11,0,.096,-.03,"iron"],["body",.044,.024,.13,0,0,-.01,"gunmetal"],["body",.052,.054,.18,0,.04,-.275,"iron"],["body",.056,.058,.016,0,.04,-.22,"cord"],["body",.056,.058,.016,0,.04,-.275,"cord"],["body",.056,.058,.016,0,.04,-.33,"cord"],...Vi("body",.017,.12,0,.047,-.425,"blued"),...Vi("body",.02,.01,0,.047,-.395,"steel"),...Vi("body",.02,.01,0,.047,-.455,"steel"),["body",.018,.018,.045,0,.047,-.5075,"iron"],["body",.024,.024,.012,0,.047,-.536,"steel"],["body",.05,.02,.07,0,0,-.105,"gunmetal"],["body",.012,.008,.06,0,-.028,-.04,"iron"],["body",.012,.03,.008,0,-.014,-.068,"iron"],["body",.006,.022,.008,0,-.008,-.035,"steel"],["body",.04,.105,.048,0,-.048,.028,"rubber",-.3,0,0],["body",.04,.068,.15,0,.028,.15,"wood"],["body",.044,.088,.018,0,.022,.234,"leather"],["body",.042,.012,.08,0,.066,.16,"cord"],["body",.002,.004,.012,-.029,.045,-.006,"steel",.5,0,0],["body",.002,.004,.012,-.029,.045,-.014,"steel",-.5,0,0],["body",.03,.012,.05,0,.106,-.01,"iron"],["body",.004,.034,.012,-.016,.129,-.03,"iron"],["body",.004,.034,.012,.016,.129,-.03,"iron"],["body",.036,.004,.012,0,.148,-.03,"iron"],["body",.038,.008,.014,0,.115,-.03,"cloth"],["body",.028,.028,.002,0,.13,-.03,"glass"],["body",.0012,.0012,8e-4,0,.13,-.0315,"glowDot"],["bolt",.006,.018,.03,0,0,0,"steel"],["mag",.034,.125,.06,0,-.062,.004,"gunmetal",.1,0,0],["mag",.04,.012,.068,0,-.128,-.003,"steel",.1,0,0],["mag",.036,.02,.062,0,-.03,.002,"olive",.1,0,0]],CM={frame:{at:[0,0,0]},crane:{parent:"frame",at:[-.017,.022,-.02]},cyl:{parent:"crane",at:[.017,.022,0]},block:{parent:"cyl",at:[0,0,.03]},hammer:{parent:"frame",at:[0,.052,.022]}},PM=[["frame",.034,.04,.24,0,.058,-.172,"blued"],["frame",.028,.03,.13,0,.023,-.227,"blued"],["frame",.04,.074,.012,0,.042,-.15,"cord"],["frame",.036,.004,.15,0,.08,-.18,"steel"],["frame",.002,.022,.11,.018,.056,-.1,"plasteel"],["frame",.002,.022,.11,-.018,.056,-.1,"plasteel"],["frame",.012,.012,.003,0,.058,-.2935,"bore"],["frame",.036,.02,.08,0,.006,-.012,"blued"],["frame",.03,.01,.064,0,.073,-.02,"blued"],["frame",.04,.06,.012,0,.04,.018,"blued"],["frame",.024,.012,.02,0,.082,.012,"iron"],["frame",.009,.009,.006,-.0075,.0925,.008,"steel"],["frame",.009,.009,.006,.0075,.0925,.008,"steel"],["frame",.0035,.016,.01,0,.086,-.283,"steel"],["frame",.003,.003,.003,0,.0955,-.281,"glowBead"],["frame",.01,.008,.045,0,-.026,-.028,"blued"],["frame",.01,.028,.008,0,-.012,-.05,"blued"],["frame",.006,.018,.008,0,-.008,-.02,"steel"],["frame",.03,.026,.026,0,.002,.02,"blued"],["frame",.034,.085,.042,0,-.04,.036,"wood",-.35,0,0],["frame",.04,.012,.05,0,-.083,.052,"iron",-.35,0,0],["frame",.004,.01,.014,-.021,.048,.012,"brass"],...fu("cyl",.022,.064,0,0,0,"iron"),["cyl",.006,.004,.058,.0235*Math.cos(Math.PI/6),.0235*Math.sin(Math.PI/6),0,"brass",0,0,-Math.PI/3],["cyl",.008,.008,.05,0,0,-.057,"steel"],["crane",.01,.018,.01,.008,.01,-.056,"blued"],...fu("block",.02,.006,0,0,.002,"brass"),["hammer",.012,.028,.012,0,.012,.004,"blued"],["hammer",.014,.008,.018,0,.026,.012,"steel"]],cn=.124,Yl=.15,LM={body:{at:[0,0,0]},mag:{parent:"body",at:[0,-.004,.095]}},IM=[["body",.058,.08,.5,0,.045,.05,"blued"],["body",.062,.028,.44,0,.072,.04,"plasteel"],["body",.064,.04,.15,0,.022,.2,"plasteel"],["body",.064,.1,.02,0,.035,.31,"rubber"],["body",.066,.02,.09,0,.082,.23,"cloth"],["body",.05,.05,.12,0,.052,-.26,"iron"],...Vi("body",.02,.26,0,.004,-.25,"blued"),...Vi("body",.023,.028,0,.004,-.18,"cloth"),...Vi("body",.023,.028,0,.004,-.32,"cloth"),["body",.018,.018,.07,0,.055,-.355,"iron"],["body",.034,.03,.05,0,.055,-.415,"iron"],["body",.036,.004,.008,0,.049,-.405,"bore"],["body",.036,.004,.008,0,.061,-.405,"bore"],["body",.036,.004,.008,0,.049,-.425,"bore"],["body",.036,.004,.008,0,.061,-.425,"bore"],["body",.036,.092,.046,0,-.044,.012,"rubber",-.3,0,0],["body",.01,.008,.07,0,-.024,-.036,"iron"],["body",.01,.026,.008,0,-.01,-.068,"iron"],["body",.006,.02,.008,0,-.008,-.03,"steel"],["body",.046,.016,.072,0,-.002,.095,"blued"],["body",.004,.02,.045,.031,.05,.13,"bore"],["body",.018,.008,.012,0,.09,.118,"iron"],["body",.03,.006,.01,0,.089,.098,"cord"],...so("body",.025,.004,.006,0,cn,Yl+.003,"rubber"),...so("body",.024,.005,.02,0,cn,Yl-.01,"blued"),...so("body",.026,.004,.025,0,cn,.1175,"iron"),...so("body",.03,.006,.02,0,cn,.095,"blued"),["body",4e-4,.012,4e-4,0,cn-.01,.088,"reticle"],["body",.016,4e-4,4e-4,-.012,cn,.088,"reticle"],["body",.016,4e-4,4e-4,.012,cn,.088,"reticle"],["body",8e-4,8e-4,4e-4,0,cn,.0877,"glowDot"],["body",.058,.058,.001,0,cn,.0865,"glass"],...Vi("body",.0302,.001,0,cn,.085,"mask"),["mag",.03,.078,.058,0,-.04,0,"iron"],["mag",.036,.01,.064,0,-.083,0,"steel"],["mag",.032,.018,.06,0,-.016,0,"plasteel"]],Pc=[{id:"auto",label:"Auto rifle",damage:21,precision:1.5,ammoType:"primary",stats:{magazine:30,rpm:600,reserve:1/0,auto:!0},spec:{id:"auto",bones:AM,parts:RM},sight:{kind:"reflex",rear:[0,.13,.012],front:[0,.13,-.0315],eyeRelief:.11},sockets:{muzzle:tr("body",[0,.047,-.542]),port:tr("body",[.03,.052,-.03]),rightGrip:Wn("body",[.034,-.02,.093],[0,-.29,-.96],[1,0,0]),leftHold:Wn("body",[-.056,-.004,-.278],[1,0,0],[0,-1,0]),leftMag:Wn("mag",[0,-.15,.047],[0,0,-1],[0,-1,0])},hip:{at:[.17,-.165,-.42],rot:[0,-2,0]},zoom:1.6,adsTime:.25,readyTime:.31,stowTime:.28,adsSlide:.05,casings:!0,recoil:{aim:{pitch:.26,direction:72,climbCap:3.5,hold:.12,halflife:.1},kick:{rise:[1.2,.35],back:[6,1],roll:[.8,.15],tp:.028},flash:.09},reload:{clip:1.9,seat:.55,gun:[[0,0,0,0,0,0,0],[.12,-30,20,30,6,0,-28],[.64,-30,20,30,6,0,-28],[.82,-15,10,15,3,0,-14],[1,0,0,0,0,0,0]],left:[[0,"leftHold",.6],[.06,"leftHold",.6],[.16,"leftMag",.9],[.3,"offLeft",.9],[.36,"offLeft",.9],[.48,"belowMag",.9],[.55,"leftMag",.9],[.6,"leftMag",.3],[.8,"leftHold",.6]],mag:[[0,0],[.16,1],[.55,0]],events:[[.16,"grab"],[.55,"seat"],[.6,"slap"],[1,"settle"]]}},{id:"hand",label:"Hand cannon",damage:55,precision:1.5,ammoType:"special",reserveCap:24,stats:{magazine:8,rpm:140,reserve:12,auto:!1},spec:{id:"hand",bones:CM,parts:PM},sight:{kind:"iron",rear:[0,.0955,.008],front:[0,.0955,-.281],eyeRelief:.25},sockets:{muzzle:tr("frame",[0,.058,-.295]),rightGrip:Wn("frame",[.034,-.011,.097],[0,-.34,-.94],[1,0,0]),cylFront:Wn("cyl",[0,.045,-.06],[0,0,1],[0,1,0]),leftBlock:Wn("block",[0,.05,.024],[0,-1,0],[0,0,1])},oneHanded:!0,hip:{at:[.15,-.14,-.38],rot:[1,-3,0]},zoom:1.4,adsTime:.21,readyTime:.26,stowTime:.29,adsSlide:.06,casings:!1,recoil:{aim:{pitch:1.8,direction:85,hold:.06,halflife:.05},kick:{rise:[6,2],back:[22,2],roll:[1.5,.3],tp:.045},flash:.14},reload:{clip:1.85,seat:.8,gun:[[0,0,0,0,0,0,0],[.14,20,20,0,24,0,-15],[.35,10,25,40,38,-5,-15],[.62,10,25,40,38,-5,-15],[.69,-100,20,40,10,0,-80],[.9,-100,20,40,10,0,-80],[.97,0,0,0,6,0,0],[1,0,0,0,0,0,0]],left:[[0,"offLeft",.5],[.18,"offLeft",.5],[.33,"cylFront",.4],[.52,"cylFront",.4],[.58,"offLeft",.8],[.66,"offLeft",.8],[.75,"leftBlock",.8],[.8,"leftBlock",.8],[.9,"offLeft",.3]],crane:[[0,0],[.06,0],[.14,95],[.9,95],[.95,0]],ejector:[[0,0],[.4,0],[.46,22],[.52,0]],cylTurn:[[0,0],[.9,0],[.97,60]],block:[[0,0],[.6,1],[.8,0]],events:[[.06,"latch"],[.46,"eject"],[.6,"newBlock"],[.8,"seat"],[.95,"snap"],[1,"settle"]]}},{id:"pulse",label:"Pulse rifle",damage:15,precision:1.5,ammoType:"primary",stats:{magazine:21,rpm:900,reserve:1/0,auto:!0,burst:3},burstCycle:.4,spec:{id:"pulse",bones:LM,parts:IM},sight:{kind:"scope",rear:[0,cn,Yl],front:[0,cn,.0877],eyeRelief:.06},sockets:{muzzle:tr("body",[0,.055,-.442]),port:tr("body",[.031,.05,.13]),rightGrip:Wn("body",[.034,-.022,.078],[0,-.29,-.96],[1,0,0]),leftHold:Wn("body",[-.056,-.032,-.262],[1,0,0],[0,-1,0]),leftMag:Wn("mag",[0,-.104,.05],[0,0,-1],[0,-1,0])},hip:{at:[.16,-.175,-.45],rot:[0,-2,0]},zoom:2.3,adsTime:.31,readyTime:.31,stowTime:.28,adsSlide:.08,casings:!0,recoil:{aim:{pitch:.34,direction:90,hold:.03,halflife:.045},kick:{rise:[1.6,.5],back:[7,0],roll:[.6,.15],tp:.022},flash:.06},reload:{clip:1.9,seat:.58,gun:[[0,0,0,0,0,0,0],[.16,-50,30,60,8,-14,-42],[.4,-60,20,80,10,-16,-46],[.46,-50,30,60,8,-14,-42],[.68,-50,30,60,8,-14,-42],[.84,-25,15,30,4,-7,-20],[1,0,0,0,0,0,0]],left:[[0,"leftHold",.6],[.1,"leftHold",.6],[.26,"leftMag",.9],[.4,"offLeft",.9],[.44,"offLeft",.9],[.53,"belowMag",.9],[.58,"leftMag",.9],[.62,"leftMag",0],[.66,"leftMag",0],[.82,"leftHold",.6]],mag:[[0,0],[.26,1],[.58,0]],events:[[.26,"grab"],[.58,"seat"],[1,"settle"]]}}],pu={offLeft:{at:[-.16,-.62,-.3],fingers:[.3,.6,-1],back:[-1,0,0]},offRight:{at:[.2,-.62,-.28],fingers:[-.3,.6,-1],back:[1,0,0]}},DM=.05,UM=(n,e)=>2*Math.atan(Math.tan(n*du/2)/e)/du;function qd(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new yn;let c=0;for(let h=0;h<n.length;++h){const u=n[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0;const u=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let _=0;_<d.count;++_)u.push(d.getX(_)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=mu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let v=0;v<o[h].length;++v)d.push(o[h][v][f]);const _=mu(d);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(_)}}return l}function mu(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new on(o,t,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const u=l/t;for(let f=0,d=h.count;f<d;f++)for(let _=0;_<t;_++){const v=h.getComponent(f,_);a.setComponent(f+u,_,v)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}const NM=12,ro=24,FM=n=>n.startsWith("glow"),gu=new Nt,OM=new qt,BM=new D,kM=new D(1,1,1),zM=new We,_u=new D;function Yd(n,e=new We){const[,,,,t,i,s,,r=0,o=0,a=0]=n;return gu.set(r,o,a),e.compose(BM.set(t,i,s),OM.setFromEuler(gu),kM)}function Lc(n,e={}){const t=Object.keys(n.bones),i={};for(const x of t){const M=n.bones[x],b=new Pd;b.name=x,b.position.set(...M.at),M.rot&&b.rotation.set(...M.rot),i[x]=b}const s=new Je;s.name=n.id??"box-rig";for(const x of t){const M=n.bones[x].parent;if(M===void 0)s.add(i[x]);else if(i[M])i[M].add(i[x]);else throw new Error(`BoxRig '${s.name}': bone '${x}' has unknown parent '${M}'`)}s.updateMatrixWorld(!0);const r=new Map(t.map((x,M)=>[x,M])),o={solid:[],glow:[]},a=new Qe,l=new We;n.parts.forEach((x,M)=>{const[b,C,w,S,,,,A]=x;if(!r.has(b))throw new Error(`BoxRig '${s.name}': part ${M} rides unknown bone '${b}'`);const P=n.palette[A];if(P===void 0)throw new Error(`BoxRig '${s.name}': part ${M} has unknown colour '${A}'`);const g=new et(C,w,S);g.deleteAttribute("uv"),g.applyMatrix4(zM.multiplyMatrices(i[b].matrixWorld,Yd(x,l))),a.set(P);const y=g.attributes.position.count,L=new Float32Array(y*3),O=new Uint16Array(y*4),z=new Float32Array(y*4),$=r.get(b);for(let G=0;G<y;G++)L[G*3]=a.r,L[G*3+1]=a.g,L[G*3+2]=a.b,O[G*4]=$,z[G*4]=1;g.setAttribute("color",new on(L,3)),g.setAttribute("skinIndex",new dc(O,4)),g.setAttribute("skinWeight",new on(z,4)),o[FM(A)?"glow":"solid"].push({g,part:x})});const c=new _c(t.map(x=>i[x])),h=[],u=(x,M)=>{const b=o[x];if(!b.length)return null;const C=b.length===1?b[0].g:qd(b.map(S=>S.g),!1);if(!C)throw new Error(`BoxRig '${s.name}': ${x} boxes would not merge`);b.length>1&&b.forEach(S=>S.g.dispose());const w=new jv(C,M);return w.name=`${s.name}:${x}`,w.userData.parts=b.map(S=>S.part),s.add(w),w.bind(c),h.push(w),w},f=u("solid",e.solidMaterial??new ni({vertexColors:!0,roughness:.85,metalness:0})),d=u("glow",e.glowMaterial??new Jt({vertexColors:!0})),_=new ti;for(const x of h)x.geometry.computeBoundingBox(),_.union(x.geometry.boundingBox);const v=_.clone().expandByPoint(_u.set(0,0,0)).getBoundingSphere(new Ws);v.radius=v.radius*1.25+.4;for(const x of h)x.boundingSphere=v.clone();for(const x of t){const M=i[x];M.userData.rest={p:M.position.clone(),r:M.rotation.clone()}}const p=n.scale??1;s.scale.setScalar(p);const m=d?d.geometry.attributes.color.array.slice():null;return{root:s,bones:i,skeleton:c,solid:f,glow:d,meshes:h,scale:p,reset(){for(const x of t){const M=i[x];M.position.copy(M.userData.rest.p),M.rotation.copy(M.userData.rest.r)}},partAt(x,M){var C;const b=(C=x==null?void 0:x.userData)==null?void 0:C.parts;return b&&Number.isInteger(M)?b[Math.floor(M/NM)]??null:null},bounds(x=[]){const M=new ti;for(const b of h){const C=b.geometry.attributes.position;b.userData.parts.forEach((w,S)=>{if(!x.includes(w[0]))for(let A=S*ro;A<(S+1)*ro;A++)M.expandByPoint(_u.fromBufferAttribute(C,A))})}return M.min.multiplyScalar(p),M.max.multiplyScalar(p),M},setGlowLit(x,M=()=>!1){if(!d)return;const b=d.geometry.attributes.color;d.userData.parts.forEach((C,w)=>{const S=x||M(C)?1:.1;for(let A=w*ro*3;A<(w+1)*ro*3;A++)b.array[A]=m[A]*S}),b.needsUpdate=!0},dispose(){for(const x of h)x.geometry.dispose();c.dispose()}}}const vu=["glass","mask"],HM=new Jt({color:TM,transparent:!0,opacity:.12,depthWrite:!1}),GM=new Jt({colorWrite:!1}),xu=new D,nr=new D,ir=new D,VM=new We;function $d(n,e,t=new qt){return ir.set(...n).normalize().negate(),nr.set(...e),nr.addScaledVector(ir,-nr.dot(ir)).normalize(),xu.crossVectors(nr,ir),t.setFromRotationMatrix(VM.makeBasis(xu,nr,ir))}function WM(n,e,t){const i=new D(...n),r=new D(...e).clone().sub(i).normalize(),o=new D(0,1,0),a=o.addScaledVector(r,-o.dot(r)).normalize(),l=r.clone().negate(),c=new D().crossVectors(a,l),h=new qt().setFromRotationMatrix(new We().makeBasis(c,a,l)).invert(),u=new D(0,0,-t).sub(i.clone().applyQuaternion(h));return{q:h,p:u}}function Kd(n,e={}){const t=n.spec,i=Lc({id:t.id,bones:t.bones,parts:t.parts.filter(o=>!vu.includes(o[7])),palette:Xd},{solidMaterial:e.solidMaterial,glowMaterial:e.glowMaterial}),s=[];if(!e.icon)for(const o of vu){const a=new Map;for(const l of t.parts){if(l[7]!==o)continue;const c=new et(l[1],l[2],l[3]);c.deleteAttribute("uv"),c.applyMatrix4(Yd(l)),a.has(l[0])||a.set(l[0],[]),a.get(l[0]).push(c)}for(const[l,c]of a){const h=new me(c.length===1?c[0]:qd(c,!1),o==="mask"?GM:HM);h.name=`${t.id}:${o}`,o==="mask"&&(h.renderOrder=-1),i.bones[l].add(h),s.push(h)}}const r={};for(const[o,a]of Object.entries(n.sockets??{})){const l=new At;l.name=`${t.id}:${o}`,l.position.set(...a.at),a.fingers&&$d(a.fingers,a.back,l.quaternion),i.bones[a.bone].add(l),r[o]=l}for(const o of[...i.meshes,...s])o.frustumCulled=!1;return i.root.updateMatrixWorld(!0),{group:i.root,rig:i,bones:i.bones,sockets:r,extras:s,weapon:n}}const $l={glove:"#3b2f27",gloveDark:"#2a221c",plate:"#595d60",plateLight:"#a9b3b8",steel:"#7d858a",bandRust:"#8a4a2b",bandCloth:"#bdb29a",knit:"#4f6660",bracer:"#5a3e2b",cord:"#8a7a5a",sleeve:"#6e6450",sleeveDark:"#4f483a",undersuit:"#2b2e31"},XM={hand:{at:[0,0,0]},fingers:{parent:"hand",at:[.004,0,-.098]},fingersTip:{parent:"fingers",at:[0,0,-.045]},thumb:{parent:"hand",at:[-.04,-.008,-.03],rot:[0,.6,0]},thumbTip:{parent:"thumb",at:[0,0,-.045]}},qM=[["hand",.085,.032,.098,0,0,-.049,"glove"],["fingers",.08,.026,.047,0,0,-.022,"glove"],["fingersTip",.077,.024,.04,0,0,-.019,"gloveDark"],["thumb",.026,.025,.047,0,0,-.022,"glove"],["thumbTip",.023,.022,.036,0,0,-.017,"gloveDark"]],Mu={titanPlate:[["hand",.092,.014,.055,0,.022,-.062,"plate"],["hand",.07,.006,.03,0,.03,-.028,"plateLight"],["hand",.112,.102,.092,0,0,.036,"plate"],["fingers",.082,.008,.04,0,.016,-.022,"plate"]],hunterCloak:[...[-.03,-.01,.01,.03].map(n=>["hand",.016,.01,.018,n,.02,-.09,"steel"]),["hand",.094,.09,.012,0,0,.02,"bandRust"],["hand",.094,.09,.012,0,0,.036,"bandCloth"]],warlockRobe:[["hand",.098,.092,.12,0,0,.07,"bracer"],["hand",.102,.096,.01,0,0,.04,"cord"],["hand",.102,.096,.01,0,0,.1,"cord"],["hand",.004,.004,.08,0,.017,-.05,"cord"]]},Ra={titanPlate:{fore:[.105,.1,"plate"],upper:[.12,.115,"undersuit"]},hunterCloak:{fore:[.08,.076,"knit"],upper:[.105,.1,"undersuit"]},warlockRobe:{fore:[.115,.105,"sleeve"],upper:[.13,.12,"sleeveDark"]}},Su={upper:.32,fore:.3},YM={right:[.26,-.58,.02],left:[-.3,-.62,0]},$M={right:[1,-1,.5],left:[-1,-1,.5]};function KM(n,e){const t=[...qM,...Mu[n]??Mu.hunterCloak],i=e==="left",s=Object.fromEntries(Object.entries(XM).map(([r,o])=>[r,{...o,at:i?[-o.at[0],o.at[1],o.at[2]]:o.at,...o.rot?{rot:i?[o.rot[0],-o.rot[1],-o.rot[2]]:o.rot}:{}}]));return{id:`hand-${e}-${n}`,bones:s,parts:t.map(([r,o,a,l,c,h,u,f,d=0,_=0,v=0])=>i?[r,o,a,l,-c,h,u,f,d,-_,-v]:[r,o,a,l,c,h,u,f,d,_,v]),palette:$l}}const An=(n,e,t)=>n<e?e:n>t?t:n,ui=(n,e,t)=>n+(e-n)*t,jd=n=>n<=0?0:n>=1?1:n*n*(3-2*n),gs=n=>{const e=1-An(n,0,1);return 1-e*e*e},Ca=n=>{const e=An(n,0,1);return e*e},Pa=(n,e,t,i)=>t<=0?e:n+(e-n)*(1-Math.exp(-Math.LN2*i/t));function Xn(n,e,t,i){const s=2*Math.LN2/t,r=n.x-e,o=n.v+r*s,a=Math.exp(-s*i);n.x=a*(r+o*i)+e,n.v=a*(n.v-o*s*i)}const sr=(n,e)=>n*Math.E/e,yu=n=>2*Math.LN2*n;function jM(n,e,t,i){if(i<=0)return e?1:0;if(e){if(n>=1)return 1;const r=1-Math.cbrt(1-n)+t/i;return r>=1?1:1-(1-r)**3}if(n<=0)return 0;const s=Math.cbrt(n)-t/i;return s<=0?0:s**3}function oo(n,e,t=[]){const i=n[0].length-1;if(e<=n[0][0]){for(let c=0;c<i;c++)t[c]=n[0][c+1];return t}const s=n[n.length-1];if(e>=s[0]){for(let c=0;c<i;c++)t[c]=s[c+1];return t}let r=1;for(;n[r][0]<e;)r++;const o=n[r-1],a=n[r],l=jd((e-o[0])/(a[0]-o[0]||1));for(let c=0;c<i;c++)t[c]=o[c+1]+(a[c+1]-o[c+1])*l;return t}function ZM(n,e){if(e<=n[0][0])return{from:n[0][1],to:n[0][1],w:1,extra:n[0].slice(2)};const t=n[n.length-1];if(e>=t[0])return{from:t[1],to:t[1],w:1,extra:t.slice(2)};let i=1;for(;n[i][0]<e;)i++;const s=n[i-1],r=n[i],o=jd((e-s[0])/(r[0]-s[0]||1));return{from:s[1],to:r[1],w:o,extra:s.slice(2).map((a,l)=>a+(r[l+2]-a)*o)}}const rr=n=>{const e=Math.sin(n*12.9898+78.233)*43758.5453;return(e-Math.floor(e))*2-1},St=Math.PI/180,Eu={x:0,y:0,z:0,pitch:0,yaw:0,roll:0},Zd=50,ao=.6,JM=.12,or=.15,lo={y:-.22,z:.04,pitch:-30,roll:25},ar={x:.004,halflife:.07},Fi={yaw:2.5*St,pitch:2*St,roll:4*St,x:.012},QM=1.5,eS=4.2,tS=.045,La=.7,bu=9.8;function nS(){const n=new Map;return e=>(n.has(e)||n.set(e,new ni({color:e,roughness:.85,metalness:0})),n.get(e))}function iS(n={}){const e=n.hipFov??70,t=new Je;t.name="first-person";const i=new Je,s=new Je,r=new Je;t.add(i),i.add(s),s.add(r);const o=new ni({vertexColors:!0,roughness:.7,metalness:0}),a=new Jt({vertexColors:!0}),l=Pc.map((V,N)=>{const H=Kd(V,{solidMaterial:o,glowMaterial:a});H.group.visible=N===0,r.add(H.group);const j=WM(V.sight.rear,V.sight.front,V.sight.eyeRelief);return{...H,w:V,aim:j,aimFwd:j.p.clone().add(new D(0,0,-V.adsSlide)),hipP:new D(...V.hip.at),hipQ:new qt().setFromEuler(new Nt(V.hip.rot[0]*St,V.hip.rot[1]*St,V.hip.rot[2]*St,"YXZ")),front:new D(...V.sight.front)}}),c=nS(),h=new et(1,1,1);let u=n.classId??"hunterCloak";const f={};function d(){for(const V of["right","left"]){const N=f[V];N&&(t.remove(N.rig.root,N.upper,N.fore),N.rig.dispose());const H=Lc(KM(u,V),{solidMaterial:o});for(const Ue of H.meshes)Ue.frustumCulled=!1;const j=Ra[u]??Ra.hunterCloak,Q=new me(h,c($l[j.upper[2]])),Se=new me(h,c($l[j.fore[2]]));t.add(H.root,Q,Se),f[V]={rig:H,upper:Q,fore:Se,look:j}}}d();const _=new Je,v=(V,N=1)=>new Jt({color:V,transparent:!0,opacity:N,depthWrite:!1,blending:vr,toneMapped:!1}),p=new me(new et(.03,.03,.004),v(16773584)),m=new et(.012,.004,1).translate(0,0,-.5),x=[0,1,2,3].map(V=>{const N=new Je;N.rotation.z=V*Math.PI/2;const H=new me(m,v(16757575,.9));return H.rotation.y=.35,N.add(H),{pivot:N,petal:H}});_.add(p,...x.map(V=>V.pivot)),_.visible=!1,r.add(_);const M=new et(.009,.009,.024),b=new ni({color:Xd.brass,roughness:.5,metalness:0}),C=Array.from({length:16},()=>{const V=new me(M,b);return V.visible=!1,V.frustumCulled=!1,t.add(V),{mesh:V,age:La,vel:new D,spin:new D}});let w=0;const S=new vt(.023,.023,.006,6).rotateX(Math.PI/2),A={mesh:new me(S,b),age:1,vel:new D,spin:new D};A.mesh.visible=!1,A.mesh.frustumCulled=!1,t.add(A.mesh);let P=0,g=null,y=null,L=null,O=!1,z=0,$=e;const G={pitch:0,yaw:0},I={rise:{x:0,v:0},roll:{x:0,v:0},back:{x:0,v:0}},W={yaw:{x:0,v:0},pitch:{x:0,v:0},roll:{x:0,v:0},x:{x:0,v:0}},ie={x:0,v:0},oe={x:0,v:0};let pe=0,ye=0,ue=-1/0,K=0,te=-1/0,fe=0,de=0,Le=[],Re=0;const qe={speed:0,airborne:!1},He=()=>l[P],tt=V=>L?(V-L.at)/l[L.gun].w.reload.clip:0,U=new D,xt=new qt,Ye=new qt,$e=new Nt(0,0,0,"YXZ"),Te=new D,nt=new We,Ce=new We,R=new D(1,1,1),E=[],q=new D,J=new D,ne=new qt;function Z(V,N,H,j,Q=0){const Se=V.w.sockets[N],Ue=V.sockets[N],Fe=V.bones[Se.bone];if(Fe.parent&&Fe.parent.isBone&&(Se.bone==="mag"||Se.bone==="block")){const Ne=Fe.userData.rest;nt.copy(Fe.parent.matrixWorld),q.copy(Ne.p),q.y-=Q,nt.multiply(Ce.compose(q,ne.setFromEuler(Ne.r),R)),nt.multiply(Ce.compose(Ue.position,Ue.quaternion,R))}else Ue.updateWorldMatrix(!1,!1),nt.copy(Ue.matrixWorld);nt.decompose(H,j,J)}function Me(V,N,H,j){if(pu[N]){const Q=pu[N];H.set(...Q.at),$d(Q.fingers,Q.back,j);return}if(N==="belowMag"){Z(V,"leftMag",H,j,DM);return}Z(V,N,H,j)}const ce=V=>V.w.oneHanded?"offLeft":"leftHold",ge={position:new D,quaternion:new qt};function st(V,N,H,j){const Q=V.bones[N],Se=V.sockets[H];nt.compose(j.position,j.quaternion,R),Ce.compose(Se.position,Se.quaternion,R).invert(),nt.multiply(Ce),Ce.copy(Q.parent.matrixWorld).invert(),Ce.multiply(nt).decompose(Q.position,Q.quaternion,J)}function se(V,N,H){const j=U.set(...YM[N]),Q=Su.upper,Se=Su.fore,Ue=Te.copy(H).sub(j),Fe=An(Ue.length(),Math.abs(Q-Se)+.001,Q+Se-.001),Ne=Ue.normalize(),we=new D(...$M[N]);we.addScaledVector(Ne,-we.dot(Ne)).normalize();const gt=(Q*Q+Fe*Fe-Se*Se)/(2*Q*Fe),Ki=Math.sqrt(Math.max(0,1-gt*gt)),Ai=j.clone().addScaledVector(Ne,Q*gt).addScaledVector(we,Q*Ki);ve(V.upper,j,Ai,V.look.upper,we),ve(V.fore,Ai,H,V.look.fore,we)}const _e=new D,Ie=new D,be=new D;function ve(V,N,H,j,Q){be.copy(H).sub(N);const Se=be.length();be.divideScalar(Se||1),Ie.copy(Q).addScaledVector(be,-Q.dot(be)).normalize(),_e.crossVectors(Ie,be),V.quaternion.setFromRotationMatrix(nt.makeBasis(_e,Ie,be)),V.position.copy(N).add(H).multiplyScalar(.5),V.scale.set(j[0],j[1],Se+.04)}function Ke(V){const N=V.sockets.port;if(!N)return;const H=C[w];w=(w+1)%C.length,N.getWorldPosition(H.mesh.position);const j=rr(K*3.1);H.vel.set(1.6+.4*(1+j),1.2+.3*(1-j),.3+.15*(1+j)),H.spin.set(12*j,9,14*-j),H.mesh.quaternion.copy(i.quaternion),H.age=0,H.mesh.visible=!0}const Pe={rig:t,guns:l,recoil:G,get active(){return P},get adsE(){return z},get worldFov(){return $},get magnification(){return ui(1,He().w.zoom,z)},get swapping(){return!!g},get dipping(){return!!y},get busy(){return!!g||!!y},get reloading(){return!!L&&!L.cutAt},get classId(){return u},setAim(V){O=!!V},setClass(V){V===u||!Ra[V]||(u=V,d(),Pe.update(0,Re,qe))},requestSwap(V,N){if(!l[V])return!1;if(g){if(g.phase==="stow")return g.to=V,!0;if(V===P)return!1;const H=An((N-g.at)/He().w.readyTime,0,1),j=1-gs(H);return g={phase:"stow",at:N-Math.sqrt(j)*He().w.stowTime,to:V},!0}return V===P?!1:(Pe.cutReload(N),g={phase:"stow",at:N,to:V},!0)},startReload(V){L={at:V,gun:P,lastT:0,cutAt:null},Le=[]},cutReload(V){L&&L.cutAt===null&&(L.cutAt=V)},dip(V){Pe.cutReload(V);let N=0;if(y){const H=(V-y.at)/or;N=H<1?Ca(H):1-gs((V-y.at-or)/He().w.readyTime)}y={at:V-Math.sqrt(N)*or}},onShot(V){const N=He(),H=N.w.recoil,j=ui(1,N.w.zoom,z);K++,ue=V,te=V,N.w.id==="hand"&&fe++;const Q=H.aim.pitch*St/j,Se=G.pitch;G.pitch=H.aim.climbCap?Math.max(Se,Math.min(Se+Q,H.aim.climbCap*St/j)):Se+Q;const Ue=H.aim.direction,Fe=Math.sin((Ue+5)*Math.PI/10)*(100-Ue)/100,Ne=(100-Ue)/100;G.yaw+=-(Fe+rr(K)*Ne)*.5*Q;const we=H.kick.tp;I.rise.v+=sr(ui(H.kick.rise[0],H.kick.rise[1],z)*St,we),I.back.v+=sr(ui(H.kick.back[0],H.kick.back[1],z)/1e3,we),I.roll.v+=sr(ui(H.kick.roll[0],H.kick.roll[1],z)*St*rr(K+17),we),_.userData.at=V,_.userData.n=K,N.w.casings&&Ke(N)},update(V,N,H={}){const j=Math.max(0,V);Re=N,qe.speed=H.speed??0,qe.airborne=!!H.airborne;let Q=0;if(g&&g.phase==="stow"){const ee=(N-g.at)/He().w.stowTime;ee>=1?(l[P].group.visible=!1,P=g.to,l[P].group.visible=!0,g={phase:"ready",at:N,to:P},I.rise.x=I.rise.v=I.back.x=I.back.v=I.roll.x=I.roll.v=0,Q=1):Q=Ca(ee)}if(g&&g.phase==="ready"){const ee=(N-g.at)/He().w.readyTime;ee>=1?g=null:Q=Math.max(Q,1-gs(ee))}if(y){const ee=(N-y.at)/or;if(ee<1)Q=Math.max(Q,Ca(ee));else{const ze=(N-y.at-or)/He().w.readyTime;ze>=1?y=null:Q=Math.max(Q,1-gs(ze))}}let Se=0,Ue=0,Fe=1;if(L){const ee=l[L.gun].w.reload;if(Se=tt(N),L.gun!==P)L=null;else{O&&Se>=ee.seat&&Pe.cutReload(N);const ze=L.cutAt===null?1/0:(L.cutAt-L.at)/ee.clip;Ue=Math.min(Se,ze,1);for(const[Xe,ut]of ee.events){if(Xe<=L.lastT||Xe>Ue||Le.includes(ut))continue;Le.push(ut);const Dt={seat:[1.2,4],slap:[.4,0],settle:[.3,0],snap:[2,0],latch:[.6,0],eject:[.8,0]}[ut];if(Dt){const je=l[L.gun].w.recoil.kick.tp;I.rise.v+=sr(Dt[0]*St,je),I.back.v-=sr(Dt[1]/1e3,je)}if(ut==="eject"){const je=He();je.bones.block.updateWorldMatrix(!0,!1),je.bones.block.matrixWorld.decompose(A.mesh.position,A.mesh.quaternion,Te),A.vel.set(-.4,-.6,.2),A.spin.set(4,7,2),A.age=0,A.mesh.visible=!0}}L.lastT=Math.max(L.lastT,Ue),L.cutAt!==null&&(Fe=1-gs((N-L.cutAt)/JM)),(Se>=1||Fe<=0)&&(ee.cylTurn&&Ue>=ee.cylTurn[1][0]&&(de=(de+60)%360),L=null)}}const Ne=!!L,we=He(),gt=Ne?we.w.reload:null,Ki=Ne&&Se>=gt.seat,Ai=!g&&!y&&(!Ne||Ki||L.cutAt!==null);if(z=jM(z,O&&Ai,j,we.w.adsTime),$=UM(e,ui(1,we.w.zoom,z)),z<ao){const ee=z/ao;i.position.lerpVectors(we.hipP,we.aimFwd,ee),i.quaternion.slerpQuaternions(we.hipQ,we.aim.q,ee)}else i.position.lerpVectors(we.aimFwd,we.aim.p,(z-ao)/(1-ao)),i.quaternion.copy(we.aim.q);let wn=0,ii=0,ji=0,Ri=0,Ci=0,Zi=0;Ne&&(oo(gt.gun,Ue,E),wn+=E[0]/1e3*Fe,ii+=E[1]/1e3*Fe,ji+=E[2]/1e3*Fe,Ri+=E[3]*Fe,Ci+=E[4]*Fe,Zi+=E[5]*Fe),Q>0&&(ii+=lo.y*Q,ji+=lo.z*Q,Ri+=lo.pitch*Q,Zi+=lo.roll*Q),Xn(ie,H.airborne?1:0,.1,j),H.landed>0&&(oe.v-=Math.min(.35,.035*H.landed)),Xn(oe,0,yu(.07),j);const Bn=1-z;ii+=(.012*ie.x+oe.x)*Bn,Ri+=-2.5*ie.x*Bn,i.position.x+=wn,i.position.y+=ii,i.position.z+=ji,$e.set(Ri*St,Ci*St,Zi*St,"YXZ"),i.quaternion.multiply(xt.setFromEuler($e));const Ji=j>0?(H.lookYaw??0)/j:0,Pr=j>0?(H.lookPitch??0)/j:0;Xn(W.yaw,An(-.012*Ji,-Fi.yaw,Fi.yaw),ar.halflife,j),Xn(W.pitch,An(-.01*Pr,-Fi.pitch,Fi.pitch),ar.halflife,j),Xn(W.roll,An(-.02*Ji,-Fi.roll,Fi.roll),ar.halflife,j),Xn(W.x,An(ar.x*Ji,-.012,Fi.x),ar.halflife,j);const Ys=H.speed??0;pe+=Ys*j/QM,ye=Pa(ye,An(Ys/eS,0,1)*(H.airborne?0:1),.08,j);const Lr=1-An(Ys/.5,0,1),$s=1-.9*z;s.position.set((W.x.x+.006*Math.sin(Math.PI*pe)*ye)*Bn,(-.004*((1-Math.cos(2*Math.PI*pe))/2)*ye+.0012*Math.sin(Math.PI*.5*N)*Lr)*Bn,0),s.rotation.set((W.pitch.x+.15*St*Math.sin(Math.PI*.5*N+.7)*Lr)*$s,W.yaw.x*$s,(W.roll.x+.8*St*Math.sin(Math.PI*pe)*ye)*$s,"YXZ");const T=yu(we.w.recoil.kick.tp);Xn(I.rise,0,T,j),Xn(I.back,0,T,j),Xn(I.roll,0,T,j);const B=U.copy(we.front).multiplyScalar(z);$e.set(I.rise.x,0,I.roll.x,"YXZ"),r.quaternion.setFromEuler($e),r.position.copy(B).sub(Te.copy(B).applyQuaternion(r.quaternion)).add(Te.set(0,0,I.back.x));const Y=we.w.recoil.aim;N-ue>Y.hold&&(G.pitch=Pa(G.pitch,0,Y.halflife,j),G.yaw=Pa(G.yaw,0,Y.halflife,j));for(const ee of l)ee.rig.reset();const X=N-te,k=we.bones;if(we.w.id==="auto"&&X<.045&&(k.bolt.position.z+=.022*(X<.012?X/.012:1-(X-.012)/.033)),we.w.id==="hand"){X<.06&&(k.hammer.rotation.x+=.25*(X<.015?X/.015:1-(X-.015)/.045));const ee=X<.06?0:gs((X-.06)/.16);if(k.cyl.rotation.z+=((Math.max(0,fe-1)+(fe>0?ee:0))*60+de)*St,Ne){k.crane.rotation.z+=oo(gt.crane,Ue,E)[0]*St*Fe;const ze=oo(gt.cylTurn,Ue,E)[0];k.cyl.rotation.z+=(Ue>=gt.cylTurn[1][0]?ui(60,ze,Fe):ze)*St,k.block.position.z+=oo(gt.ejector,Ue,E)[0]/1e3*Fe}}const re=_.userData.at??-1/0;if(_.visible=N-re<tS&&!g,_.visible){const ee=_.userData.n??0;_.position.copy(we.sockets.muzzle.position),_.rotation.set(0,0,(rr(ee*5.3)*.5+.5)*Math.PI*.5);const ze=(1+.15*rr(ee*2.7))*(1-.45*z);_.scale.setScalar(ze);for(const Xe of x)Xe.petal.scale.set(1,1,we.w.recoil.flash)}t.updateMatrixWorld(!0);const ae=f.right.rig,he=f.left.rig;ae.reset(),he.reset(),Z(we,"rightGrip",ae.root.position,ae.root.quaternion),at(ae.bones,.85);const xe=ce(we);let Ae=.6,De=0;if(Ne){const ee=ZM(gt.left,Ue);Me(we,ee.from,U,xt),Me(we,ee.to,Te,Ye),he.root.position.lerpVectors(U,Te,ee.w),he.root.quaternion.slerpQuaternions(xt,Ye,ee.w),ge.position.copy(he.root.position),ge.quaternion.copy(he.root.quaternion),Ae=ee.extra[0],Fe<1&&(Me(we,xe,U,xt),he.root.position.lerp(U,1-Fe),he.root.quaternion.slerp(xt,1-Fe),Ae=ui(.6,Ae,Fe)),De=F(gt.mag??gt.block,Ue)}else Me(we,xe,he.root.position,he.root.quaternion);if(at(he.bones,Ae),ae.root.updateMatrixWorld(!0),he.root.updateMatrixWorld(!0),se(f.right,"right",ae.root.position),se(f.left,"left",he.root.position),De>0)for(const[ee,ze]of[["mag","leftMag"],["block","leftBlock"]]){const Xe=we.bones[ee];Xe&&(U.copy(Xe.position),xt.copy(Xe.quaternion),st(we,ee,ze,ge),Fe<1&&(Xe.position.lerpVectors(U,Xe.position,Fe),Xe.quaternion.slerpQuaternions(xt,Xe.quaternion,Fe)))}if(we.w.id==="hand"&&Ne){const ee=Ue>=.46&&Ue<.6&&Fe>=1;k.block.scale.setScalar(ee?1e-4:1)}we.group.updateMatrixWorld(!0);for(const ee of C)ee.age>=La||(ee.age+=j,ee.vel.y-=bu*j,ee.mesh.position.addScaledVector(ee.vel,j),ee.mesh.rotation.x+=ee.spin.x*j,ee.mesh.rotation.y+=ee.spin.y*j,ee.mesh.rotation.z+=ee.spin.z*j,ee.age>=La&&(ee.mesh.visible=!1));return A.age<1&&(A.age+=j,A.vel.y-=bu*j,A.mesh.position.addScaledVector(A.vel,j),A.mesh.rotation.x+=A.spin.x*j,A.mesh.rotation.y+=A.spin.y*j,A.age>=1&&(A.mesh.visible=!1)),Pe},muzzleWorld(V,N=new D){He().sockets.muzzle.getWorldPosition(N);const j=Math.tan(V.fov*St/2)/Math.tan(Zd*St/2);return N.x*=j,N.y*=j,N.applyQuaternion(V.quaternion).add(V.position)}};function at(V,N){V.fingers.rotation.x-=N*1.2,V.fingersTip.rotation.x-=N*1,V.thumb.rotation.x-=N*.4}function F(V,N){if(!V)return 0;let H=V[0][1];for(const j of V)j[0]<=N&&(H=j[1]);return H}for(const V of Object.values(f))V.rig.reset();return Pe.update(0,0,{}),Pe}const sS=.1,wu=1e-9,Tu=n=>n.burstLeft?{...n,burstLeft:0}:n;function rS(){let n=-1/0,e=-1/0,t=!1;return{pull(i,s,r,{held:o=!1,pressed:a=!1,blocked:l=!1}={}){if(a&&(n=r),o||(t=!1),l)return t=!1,{state:Tu(i),shots:[],events:[]};const c=r-n<=sS;let h=o,u;if(s.burstCycle>0){const _=e+s.burstCycle;u=(o||c)&&r+wu>=_,!u&&i.burstLeft>0&&r<_&&(h=!0)}else u=c&&r+wu>=i.nextShotAt;const f=Rx(i,r,{held:h,pressed:u});let d=f.state;if(f.shots.length&&(n=-1/0,s.burstCycle>0&&u)){const _=e+s.burstCycle;e=t&&r-_<i.maxCatchUp?_:f.shots[0].at,t=o}return f.events.some(_=>_.type==="emptied")&&(d=Tu(d)),{state:d,shots:f.shots,events:f.events}}}}const oS={iron:"#3a3d40",iron2:"#595d60",plasteel:"#a9b3b8",gunmetal:"#2d3034",leather:"#5a3e2b",gambeson:"#bdb29a",linen:"#9b8f78",rust:"#8a4a2b",tarp:"#4f6660",wood:"#6b5238",face:"#151719",steel:"#7d858a",oxblood:"#7a1e1e",oxbloodDark:"#4e1414",slate:"#3f5a78",slateDark:"#2a3d52",teal:"#1f5e5a",tealDark:"#143f3c",pikeHull:"#3b3a3f",ghostShell:"#cfd6da",glowArc:"#6fd3ff",glowSolar:"#ff8a2a",glowVoid:"#a76bff",glowRed:"#ff4a3a",glowGhost:"#e8f6ff"};function dr(n={}){const e=n.scale??1,t=n.bulk??1,i=n.keys??{},s=(f,d)=>i[f]??d,r={},o=[],a=(f,d,_,v,p,m,x,M,b=0,C=0,w=0)=>o.push([f,d*e,_*e,v*e,p*e,m*e,x*e,M,b,C,w]),l=(f,d,_)=>[f*e,d*e,_*e];r.pelvis={parent:n.pelvisParent,at:n.pelvisAt??l(0,.92,0)},n.pelvisParent===void 0&&delete r.pelvis.parent,a("pelvis",.36*t,.16,.23*t,0,0,0,s("legs","linen"));const c=n.seated?1.45:0;for(const f of[-1,1]){const d=f<0?"L":"R";r["thigh"+d]={parent:"pelvis",at:l(f*.1*t,-.04,0),rot:[-c,0,f*(n.stance??0)]},r["shin"+d]={parent:"thigh"+d,at:l(0,-.42,0),rot:[c,0,0]},a("thigh"+d,.17*t,.44,.19*t,0,-.21,0,s("legs","linen")),a("shin"+d,.15*t,.42,.17*t,0,-.21,0,s("shins",s("legs","linen"))),a("shin"+d,.18*t,.08,.3*t,0,-.42,.05,s("boots","leather")),n.greaves&&a("shin"+d,.17*t,.26,.05,0,-.24,.1*t,s("greaves","iron2"))}r.chest={parent:"pelvis",at:l(0,.06,0),rot:[n.lean??0,0,0]},a("chest",.44*t,.52,.25*t,0,.26,0,s("torso","linen")),a("chest",.13,.08,.13,0,.56,0,s("neck","leather")),n.plate&&a("chest",.5*t,.32,.3*t,0,.34,.01,s("plate","iron")),n.plate2&&a("chest",.42*t,.12,.28*t,0,.1,.01,s("plate2","iron")),r.head={parent:"chest",at:l(0,.58,0)};const h=n.helm??"great";if(h==="great"?(a("head",.26,.28,.28,0,.14,0,s("helm","iron")),a("head",.19,.03,.02,0,.16,.145,s("visor","glowArc"))):h==="stepped"?(a("head",.24,.22,.26,0,.11,0,s("helm","iron")),a("head",.18,.1,.2,0,.27,-.01,s("helm","iron")),a("head",.2,.035,.02,0,.13,.135,s("visor","glowVoid"))):h==="hood"?(a("head",.21,.23,.23,0,.12,0,"face"),a("head",.12,.022,.02,0,.14,.125,s("visor","glowSolar")),a("head",.29,.3,.28,0,.15,-.035,s("hood","slate")),a("head",.12,.12,.14,0,.33,-.03,s("hood","slate"),-.55,0,0)):h==="wrap"&&(a("head",.22,.24,.24,0,.12,0,s("wrap","linen")),a("head",.28,.22,.28,.02,.17,-.03,s("hood","tarp")),a("head",.2,.03,.02,0,.13,.125,"face")),n.crown){const f=h==="stepped"?.32:.28,d=[[0,.13,.1],[-.1,.1,.075],[.1,.1,.075],[-.12,-.05,.06],[.12,-.05,.06]].slice(0,n.crown);for(const[_,v,p]of d)a("head",.035,p,.035,_,f+p/2,v,s("crown","iron2"))}for(const f of[-1,1]){const d=f<0?"L":"R",_=(n.arms??{})[d]??{};r["arm"+d]={parent:"chest",at:l(f*(.22*t+.06),.5,0),rot:[_.fwd??0,0,f*(_.out??.06)]},r["fore"+d]={parent:"arm"+d,at:l(0,-.32,0),rot:[-(_.elbow??.1),0,0]},a("arm"+d,.12*t,.34,.13*t,0,-.16,0,s("arms",s("torso","linen"))),a("fore"+d,.11*t,.3,.12*t,0,-.15,0,s("forearms",s("arms",s("torso","linen")))),a("fore"+d,.1,.1,.1,0,-.33,0,s("hands","leather")),n.gauntlets&&a("fore"+d,.13*t,.16,.14*t,0,-.19,0,s("gauntlets","iron"));const v=(n.pauldrons??{})[d];v&&a("arm"+d,v.size[0]*t,v.size[1],v.size[2]*t,f*.02,0,0,v.key,0,0,f*-.22),(n.glowHands??[]).includes(d)&&a("fore"+d,.14,.14,.14,0,-.34,.01,n.glowKey??"glowArc")}if(n.mantle&&(a("chest",.64*t,.12,.4*t,0,.5,-.02,n.mantle),a("chest",.54*t,.1,.33*t,0,.43,-.06,n.mantle)),n.tabard&&a("chest",.26*t,.78,.03,0,.02,.15*t,n.tabard),n.sash&&(a("chest",.08,.66,.27*t,0,.27,.005,n.sash,0,0,.7),a("chest",.46*t,.07,.27*t,0,.03,0,n.sash)),n.tarpCape&&a("chest",.5,.8,.02,.1,.12,-.16*t,n.tarpCape,.08,0,.18),n.cloak){const f=n.cloak;r.cape={parent:"chest",at:l(0,.5,-.14*t),rot:[-(n.lean??0)+.05,0,0]},a("cape",.46*t,f.len*.7,.03,0,-f.len*.35,0,f.key);for(const d of[-1,1])a("cape",.2*t,f.len*.34,.03,d*.12*t,-f.len*.86,0,f.dark??f.key)}if(n.coat){const f=n.coat;for(const d of[-1,1])a("pelvis",.19*t,f.len,.05,d*.1*t,-f.len/2+.06,.13*t,f.key),a("pelvis",.05,f.len*.95,.26*t,d*.2*t,-f.len/2+.06,0,f.dark);a("pelvis",.42*t,f.len,.05,0,-f.len/2+.06,-.13*t,f.key);for(const d of[.3,.6])a("pelvis",.43*t,.03,.055,0,-f.len*d,-.13*t,f.dark)}if(n.banner){r.banner={parent:"chest",at:l(.14*t,.35,-.2*t)},a("banner",.05,1.5,.05,0,.4,0,"wood"),a("banner",.5,.66,.03,.27,.8,0,n.banner.key);for(const[f,d,_,v,p]of n.banner.sigil)a("banner",f,d,.035,_,v,0,n.banner.mark,0,0,p)}n.trophy&&(a("chest",.05,.9,.08,.06,.28,-.21*t,"steel",0,0,.55),a("chest",.015,.7,.02,.06,.28,-.26*t,"glowArc",0,0,.55));const u=(f,d)=>d.forEach(_=>a(f,..._));return n.weapon==="slug"&&u("foreR",[[.1,.36,.14,0,-.44,.04,"gunmetal"],[.065,.5,.07,0,-.84,.04,"iron"],[.08,.2,.12,0,-.22,.05,"plasteel"],[.07,.12,.13,0,-.46,-.07,"plasteel"]]),n.weapon==="handcannon"&&u("foreR",[[.07,.26,.1,0,-.45,.03,"gunmetal"],[.1,.09,.1,0,-.39,.03,"iron2"]]),n.weapon==="longrifle"&&u("foreR",[[.06,1.05,.09,0,-.7,.03,"gunmetal"],[.05,.3,.06,0,-.5,.09,"plasteel"],[.08,.22,.11,0,-.24,.05,"wood"]]),n.weapon==="wrapped"&&u("foreR",[[.09,.8,.1,0,-.62,.03,"gunmetal"],[.08,.22,.12,0,-.22,.05,"wood"],[.11,.08,.12,0,-.58,.03,"linen"],[.11,.07,.12,0,-.84,.03,"linen"],[.07,.14,.12,0,-.48,-.08,"rust"]]),n.weapon==="short"&&u("foreR",[[.07,.34,.1,0,-.48,.03,"gunmetal"]]),n.blade&&u("foreL",[[.05,.12,.08,0,-.26,.02,"steel"],[.02,.45,.06,0,-.52,.02,n.blade]]),{bones:r,parts:o}}function Ia({at:n=[.5,2.1,.1],fin:e="ghostShell",size:t=1}={}){const i={ghost:{at:n}},s=[],r=(o,a,l,c,h,u,f,d=0,_=0,v=0)=>s.push(["ghost",o*t,a*t,l*t,c*t,h*t,u*t,f,d,_,v]);return r(.13,.13,.13,0,0,0,"ghostShell",.62,.78,0),r(.05,.17,.035,.11,.03,-.02,e,0,0,-.5),r(.05,.17,.035,-.11,.03,-.02,"ghostShell",0,0,.5),r(.12,.035,.08,0,-.11,-.01,"ghostShell"),r(.05,.05,.02,0,0,.125,"glowGhost"),{bones:i,parts:s}}function aS(){const n={pike:{at:[0,.72,0]}},e=[],t=(...s)=>e.push(["pike",...s]);t(.72,.3,1.3,0,0,0,"pikeHull"),t(.5,.22,.55,0,-.04,.88,"pikeHull",.22,0,0),t(.82,.46,.6,0,.08,-.85,"iron"),t(.5,.08,1,0,-.19,-.05,"iron2");for(const s of[-1,1])t(.08,.1,.75,s*.28,-.1,.95,"gunmetal"),t(.09,.05,.03,s*.16,.03,1.16,"glowRed");t(.46,.04,.46,.08,.17,.15,"plasteel",0,0,.08),t(.42,.05,.5,0,.18,-.3,"tarp"),t(.32,.26,.32,0,.44,-.85,"wood");const i=dr({pelvisParent:"pike",pelvisAt:[0,1.02-.72,-.3],seated:!0,bulk:1.1,lean:.25,helm:"wrap",sash:"oxblood",keys:{torso:"linen",legs:"linen"},weapon:"short",arms:{R:{fwd:-.9,elbow:.5},L:{fwd:-.9,elbow:.5,out:-.1}}});return{bones:{...n,...i.bones},parts:[...e,...i.parts]}}function lS(){const n={base:{at:[0,0,0]},head:{parent:"base",at:[0,1,0]}},e=[],t=(i,...s)=>e.push([i,...s]);t("base",.55,.9,.55,0,.45,0,"iron"),t("base",.7,.08,.7,0,.92,0,"iron2"),t("head",.56,.42,.62,0,.14,0,"iron2"),t("head",.62,.05,.66,0,.37,0,"plasteel");for(const i of[-1,1])t("head",.09,.09,.75,i*.13,.12,.65,"gunmetal");return t("head",.12,.06,.03,0,.26,.325,"glowRed"),{bones:n,parts:e}}const Da=(n,e)=>({bones:{...n.bones,...e.bones},parts:[...n.parts,...e.parts]}),ki=n=>n.userData.rest,Ua=(n,e,t,i,s)=>{n&&(n.rotation.x=ki(n).r.x+Math.sin(e*i+s)*t)},_s=(n,e)=>({id:n,...e,palette:oS}),Au={R:{fwd:-.5,elbow:1.07},L:{fwd:-.9,elbow:.6,out:-.25}},Na=["ghost","banner"],cS=[{id:"levy",name:"Levy",faction:"warlord",rank:"minor",tier:"skirmisher",body:"human",health:{max:110},crit:{bones:["head"]},noHit:["cape"],spec:_s("levy",dr({scale:.97,bulk:1.12,lean:.08,helm:"wrap",sash:"oxblood",tarpCape:"tarp",keys:{torso:"linen",legs:"linen",shins:"leather"},pauldrons:{L:{size:[.26,.1,.3],key:"rust"}},weapon:"wrapped",arms:Au})),idle:(n,e,t)=>{e.pelvis.position.y=ki(e.pelvis).p.y+Math.sin(n*1.8+t.phase)*.012,e.chest.rotation.z=ki(e.chest).r.z+Math.sin(n*.9+t.phase)*.03}},{id:"outrider",name:"Pike Outrider",faction:"warlord",rank:"minor",tier:"skirmisher",body:"pike",health:{max:260},crit:{bones:["head"]},spec:_s("outrider",aS()),idle:(n,e,t)=>{const i=Math.max(0,Math.sin(n*.7+t.phase)-.92)*.9;e.pike.position.y=ki(e.pike).p.y+Math.sin(n*3.1+t.phase)*.03-i,e.pike.rotation.x=ki(e.pike).r.x+i*.3}},{id:"champion",name:"Lesser Warlord",faction:"warlord",rank:"elite",tier:"heavy",body:"human",health:{max:520},crit:{bones:["head"]},noHit:["cape","banner","ghost"],measureAside:Na,ghost:{speed:1,hover:[0,1.45,.32]},spec:_s("champion",Da(dr({scale:1.05,helm:"hood",keys:{torso:"leather",legs:"iron",shins:"iron2",hood:"slate",visor:"glowSolar"},cloak:{len:1.15,key:"slate",dark:"slateDark"},gauntlets:!0,pauldrons:{R:{size:[.2,.1,.24],key:"slate"},L:{size:[.16,.08,.2],key:"plasteel"}},weapon:"handcannon",blade:"glowSolar",glowHands:["L"],glowKey:"glowSolar",arms:{R:{fwd:-.9,elbow:.75},L:{fwd:-.35,elbow:.9,out:.05}}}),Ia({at:[.5,2.05,.05],fin:"slate",size:.85}))),idle:(n,e,t)=>{Ua(e.cape,n,.05,1.2,t.phase)}},{id:"warlord",name:"Warlord",faction:"warlord",rank:"boss",tier:"heavy",body:"human",health:{max:1400},crit:{bones:["head"]},noHit:["cape","banner","ghost"],measureAside:Na,ghost:{speed:.7,hover:[0,1.6,.38]},spec:_s("warlord",Da(dr({scale:1.15,bulk:1.25,helm:"great",crown:5,plate:!0,plate2:!0,greaves:!0,gauntlets:!0,keys:{torso:"gambeson",legs:"leather",shins:"iron",plate:"oxblood",plate2:"iron",arms:"iron2",forearms:"iron",visor:"glowArc"},pauldrons:{L:{size:[.3,.19,.36],key:"oxblood"},R:{size:[.17,.09,.22],key:"plasteel"}},mantle:"leather",tabard:"oxblood",trophy:!0,banner:{key:"oxblood",mark:"plasteel",sigil:[[.16,.16,.27,.86,Math.PI/4],[.36,.05,.27,.6,0]]},weapon:"slug",glowHands:["L"],glowKey:"glowArc",arms:{R:{fwd:-.5,elbow:1.07},L:{fwd:-.15,elbow:.45,out:.12}}}),Ia({at:[.62,2.3,.1],fin:"oxblood"}))),idle:(n,e,t)=>{e.head.rotation.y=ki(e.head).r.y+Math.sin(n*.4+t.phase)*.25,Ua(e.banner,n,.04,1.1,t.phase)}},{id:"rival",name:"Rival Warlord",faction:"warlord",rank:"boss",tier:"heavy",body:"human",health:{max:1200},crit:{bones:["head"]},noHit:["cape","banner","ghost"],measureAside:Na,ghost:{speed:-.75,hover:[0,1.55,.36]},spec:_s("rival",Da(dr({scale:1.1,helm:"stepped",crown:3,keys:{torso:"teal",legs:"leather",arms:"teal",forearms:"iron2",helm:"iron",crown:"iron2",visor:"glowVoid"},coat:{len:.95,key:"teal",dark:"tealDark"},gauntlets:!0,pauldrons:{L:{size:[.18,.1,.24],key:"iron2"}},banner:{key:"teal",mark:"gambeson",sigil:[[.08,.4,.2,.8,0],[.08,.4,.34,.8,0]]},weapon:"longrifle",glowHands:["L","R"],glowKey:"glowVoid",arms:Au}),Ia({at:[-.6,2.2,.1],fin:"teal"}))),idle:(n,e,t)=>{Ua(e.banner,n,.04,1,t.phase+1)}},{id:"turret",name:"Gate Turret",faction:"warlord",rank:"minor",tier:null,body:"turret",health:{max:240},crit:{keys:["glowRed"]},faces:!1,spec:_s("turret",lS()),idle:(n,e,t)=>{e.head.rotation.y=ki(e.head).r.y+Math.sin(n*.6+t.phase)*.7}}],hS=Object.freeze({fodder:{sight:28,band:[1.6,4],speed:3.4,sprint:1.35,reaction:[.3,.55],cooldown:1.1,attack:5,strafe:.15,lose:4,turn:4},skirmisher:{sight:38,band:[7,14],speed:2.6,sprint:1.2,reaction:[.22,.45],cooldown:1.6,attack:20,strafe:.75,lose:6,turn:3},heavy:{sight:45,band:[10,20],speed:1.7,sprint:1.1,reaction:[.4,.7],cooldown:2.4,attack:26,strafe:.25,lose:9,turn:1.6}}),co=.55,vn=3,Fa=1.5,Ru=.8,Oa=.6,uS=.5,Cu=.6,Pu=.35,Ba=1,dS=.45,fS=.12,pS=.9,mS=.07,ka=Math.PI*2;let gS=0;const qn=n=>{const e=Math.max(0,Math.min(1,n));return e*e*(3-2*e)},Kn=(n,e,t)=>n+(e-n)*t,fi=n=>n.userData.rest,_S={biped(n,e){n.pelvis.position.y=fi(n.pelvis).p.y*(1-.5*e);for(const t of["L","R"])n["thigh"+t].rotation.x-=.95*e,n["shin"+t].rotation.x+=1.35*e,n["foot"+t].rotation.x-=.4*e,n["arm"+t].rotation.x+=.35*e,n["arm"+t].rotation.z+=(t==="L"?-.25:.25)*e,n["arm2"+t]&&(n["arm2"+t].rotation.x+=.3*e);n.chest.rotation.x+=.85*e,n.head.rotation.x+=.45*e,n.cape&&(n.cape.rotation.x-=.35*e),n.banner&&(n.banner.rotation.x-=.25*e)},human(n,e){n.pelvis.position.y=fi(n.pelvis).p.y*(1-.47*e);for(const t of["L","R"])n["thigh"+t].rotation.x-=1.35*e,n["shin"+t].rotation.x+=1.9*e,n["arm"+t].rotation.x=Kn(fi(n["arm"+t]).r.x,-.25,e),n["fore"+t].rotation.x=Kn(fi(n["fore"+t]).r.x,-.15,e);n.chest.rotation.x+=.55*e,n.head.rotation.x+=.35*e,n.cape&&(n.cape.rotation.x-=.3*e),n.banner&&(n.banner.rotation.x-=.2*e)},servitor(n,e){n.core.position.y=Kn(fi(n.core).p.y,.62,e),n.core.rotation.z+=.5*e,n.core.rotation.x+=.35*e},shank(n,e){n.hull.position.y=Kn(fi(n.hull).p.y,.5,e),n.hull.rotation.z+=.7*e,n.hull.rotation.x+=.3*e},pike(n,e){n.pike.position.y=Kn(fi(n.pike).p.y,.2,e),n.pike.rotation.z+=.2*e,n.pike.rotation.x+=.08*e,n.chest.rotation.x+=.65*e,n.head.rotation.x+=.35*e},turret(n,e){n.head.rotation.x+=.5*e,n.head.position.y-=.1*e}},za={biped(n,e){n.chest.rotation.x-=.22*e,n.head.rotation.x-=.18*e},human(n,e){n.chest.rotation.x-=.2*e,n.head.rotation.x-=.15*e},servitor(n,e){n.core.rotation.y+=.7*e},shank(n,e){n.hull.rotation.z+=.35*e,n.hull.position.y+=.05*e},pike(n,e){n.pike.rotation.z+=.12*e,n.chest.rotation.x-=.2*e},turret(n,e){n.head.rotation.y+=.25*e}},Jd=n=>{var e;return Ac({max:n.health.max,shield:((e=n.shield)==null?void 0:e.amount)??0})},vS=new Do(1,3),xS=new et(.5,1,.5).translate(0,.5,0),MS=3.4;function Lu(n,e,t,i){const s=new Jt({color:n.colour,transparent:!0,opacity:n.opacity,depthWrite:!1,blending:vr}),r=new Je;return r.add(new me(vS,s)),r.position.copy(i),r.scale.copy(t),e.add(r),{group:r,fillMat:s,base:n.opacity,scale:t.clone()}}function SS(n,e){var l,c;const t=new ni({vertexColors:!0,roughness:.85,metalness:0,emissive:16777215,emissiveIntensity:0}),i=new Jt({vertexColors:!0}),s=Lc(n.spec,{solidMaterial:t,glowMaterial:i});s.root.position.set(e.x??0,0,e.z??0),s.root.rotation.y=e.yaw??0,(l=e.scene)==null||l.add(s.root);const r=s.bounds(n.measureAside??[]);let o=null;if(n.shield){const h=n.shield.pad/s.scale,u=r.getSize(new D).multiplyScalar(.5*h);o=Lu(n.shield,s.root,u,r.getCenter(new D).divideScalar(s.scale))}const a={unit:n,id:n.id,name:n.name,rank:n.rank,faction:n.faction,rig:s,root:s.root,bones:s.bones,meshes:s.meshes,phase:(e.index??0)*1.7,health:Jd(n),diedAt:null,revivedAt:null,respawnAt:null,lastHitAt:-1/0,flashUntil:-1/0,shieldHitAt:-1/0,shieldBrokeAt:-1/0,flinch:0,etherClock:0,height:r.max.y-r.min.y,top:r.max.y,bottom:r.min.y,footprint:Math.min(.8,Math.max(.3,-r.min.x,r.max.x,-r.min.z)),turn:n.turn??((c=hS[n.tier])==null?void 0:c.turn)??2,shell:o,aura:n.aura?Lu(n.aura,s.bones[n.aura.bone],new D().setScalar(n.aura.r),new D(...n.aura.at)):null,column:null,scene:e.scene??null};return n.ghost&&(a.column=new me(xS,new Jt({color:15136511,transparent:!0,opacity:0,blending:vr,depthWrite:!1})),a.column.visible=!1,a.column.position.set(n.ghost.hover[0],0,n.ghost.hover[2]*.5),s.root.add(a.column)),s.root.updateMatrixWorld(!0),a}function Ic(n,e=.5,t=new D){return t.set(n.root.position.x,n.root.position.y+n.bottom+n.height*e,n.root.position.z)}function yS(n,e){var r,o,a,l,c;const t=n.rig.partAt(e.object,e.faceIndex);if(!t)return null;const i=n.unit;if((r=i.noHit)!=null&&r.includes(t[0]))return null;const s=!!((a=(o=i.crit)==null?void 0:o.bones)!=null&&a.includes(t[0])||(c=(l=i.crit)==null?void 0:l.keys)!=null&&c.includes(t[7]));return{part:t,crit:s&&n.health.shield<=0}}function ES(n,{amount:e,source:t,at:i,crit:s=!1}){if(n.health.dead)return{events:[],killed:!1};const{state:r,events:o}=kd(n.health,{amount:e,source:t});n.health=r,n.lastHitAt=i;let a=!1;for(const l of o)l.type==="absorbed"&&(n.shieldHitAt=i),l.type==="shieldBroken"&&(n.shieldBrokeAt=i),l.type==="damaged"&&(n.flashUntil=i+fS,n.flinch=Math.min(1,n.flinch+(s?.9:.55))),l.type==="died"&&(a=!0,n.diedAt=i,n.respawnAt=i+vn,n.revivedAt=null,n.etherClock=0,n.rig.setGlowLit(!1,c=>c[0]==="ghost"));return{events:o,killed:a}}function Iu(n,e){n.health=Jd(n.unit),n.diedAt=null,n.respawnAt=null,n.revivedAt=e,n.flinch=0,n.lastHitAt=-1/0,n.rig.setGlowLit(!0)}const ho=new D,bS=new D;function wS(n,e,t,i,s){const r=fi(n).p,o=Math.hypot(r.x,r.z),a=Math.atan2(r.z,r.x)+e*i+t;return s.set(Math.cos(a)*o,r.y+Math.sin(e*2.2+t)*.05,Math.sin(a)*o),Math.PI/2-a}function TS(n,e,t,i={}){var d,_;const{unit:s,rig:r,bones:o,root:a}=n;r.reset();let l=n.health.dead,c=l?t-n.diedAt:0,h=0,u=0,f=!0;if(l&&s.ghost?c<co?h=qn(c/co):c<vn?h=1:c<vn+Ba?h=1-qn((c-vn)/Ba):Iu(n,n.diedAt+vn+Ba):l&&(c<co?h=qn(c/co):c<Fa?h=1:c<Fa+Ru?(h=1,u=qn((c-Fa)/Ru)):c<vn?(h=1,u=1,f=!1):c<vn+Oa?u=1-qn((c-vn)/Oa):Iu(n,n.diedAt+vn+Oa)),l=n.health.dead,(!l||!s.ghost&&c>=vn)&&((d=s.idle)==null||d.call(s,t,o,n)),n.flinch*=Math.exp(-9*e),!l&&n.flinch>.001&&((_=za[s.body])==null||_.call(za,o,n.flinch)),h>0&&_S[s.body](o,h),s.ghost&&o.ghost){const v=o.ghost,p=wS(v,t,n.phase,s.ghost.speed,ho);let m=0;l?m=qn((c-uS)/Cu):n.revivedAt!==null&&(m=1-qn((t-n.revivedAt)/Cu));const[x,M,b]=s.ghost.hover;v.position.set(Kn(ho.x,x,m),Kn(ho.y,M+Math.sin(t*2.4+n.phase)*.04,m),Kn(ho.z,b,m)),v.rotation.y=Kn(p,0,m),v.rotation.x=.55*m}if(n.column){const v=vn-Pu;let p=0;l&&c>=v?p=qn((c-v)/Pu):!l&&n.revivedAt!==null&&(p=1-qn((t-n.revivedAt)/dS)),n.column.visible=p>.001,n.column.material.opacity=.5*p,n.column.scale.set(1.3-.3*p,MS*Math.max(p,.001),1.3-.3*p)}if(s.shield&&!l){const v=n.health;t-n.lastHitAt>=s.shield.regenDelay&&v.shield<v.shieldMax&&(n.health=ql(v,{shield:v.shieldMax/s.shield.regenSeconds*e,source:"regen"}).state)}if(n.shell){const v=n.shell,p=t-n.shieldBrokeAt;if(!l&&n.health.shield>0){const m=t-n.shieldHitAt<.1?2.2:1,x=.35+.65*Rc(n.health);v.group.visible=!0,v.group.scale.copy(v.scale),v.fillMat.opacity=v.base*x*m}else if(p>=0&&p<.3){const m=p/.3;v.group.visible=!0,v.group.scale.copy(v.scale).multiplyScalar(1+.35*m),v.fillMat.opacity=v.base*2.5*(1-m)}else v.group.visible=!1}if(n.aura&&(n.aura.group.visible=!l,n.aura.fillMat.opacity=n.aura.base*(.8+.2*Math.sin(t*2+n.phase))),!l&&i.face&&s.faces!==!1){const p=((Math.atan2(i.face.x-a.position.x,i.face.z-a.position.z)-a.rotation.y+Math.PI)%ka+ka)%ka-Math.PI,m=n.turn*e;a.rotation.y+=Math.max(-m,Math.min(m,p))}if(a.position.y=-u*(n.top+.15),a.visible=f,r.solid.material.emissiveIntensity=t<n.flashUntil?gS:0,a.updateMatrixWorld(!0),l&&s.ether&&c<pS&&o.head)for(n.etherClock-=e;n.etherClock<=0;)RS(n.scene,o.head.getWorldPosition(bS)),n.etherClock+=mS}const Qd=48,Mo=1.1;let pi=null;function AS(n){if((pi==null?void 0:pi.scene)===n)return pi;const e=new et(1,1,1),t=new Jt({color:15791864,transparent:!0,opacity:.5,depthWrite:!1}),i=Array.from({length:Qd},()=>{const s=new me(e,t);return s.visible=!1,n.add(s),{mesh:s,age:Mo,vel:new D,spin:0}});return pi={scene:n,items:i,next:0},pi}function RS(n,e){if(!n)return;const t=AS(n),i=t.items[t.next];t.next=(t.next+1)%Qd,i.age=0,i.mesh.position.copy(e),i.vel.set((Math.random()-.5)*.5,.7+Math.random()*.4,(Math.random()-.5)*.5),i.spin=(Math.random()-.5)*3,i.mesh.visible=!0}function CS(n){if(pi)for(const e of pi.items){if(e.age>=Mo)continue;if(e.age+=n,e.age>=Mo){e.mesh.visible=!1;continue}const t=e.age/Mo;e.mesh.position.addScaledVector(e.vel,n),e.vel.multiplyScalar(Math.exp(-1.2*n)),e.mesh.rotation.y+=e.spin*n,e.mesh.scale.setScalar((.07+.2*t)*(t<.7?1:1-(t-.7)/.3))}}const PS=Object.freeze(["now","enter","interact","flag","scan","land","talk"]),LS=Object.freeze(["now","flag"]),IS=Object.freeze(["now"]);function DS({host:n=null,say:e=null,onBeat:t=null,onCheckpoint:i=null,knows:s=null,triggers:r=PS,levelKinds:o=LS,subjectless:a=IS}={}){if(!n)throw new Error("makeEpisode: no host API");const l=[...r],c=new Set(a);let h=null,u=-1,f=!1,d=[],_=new Set;const v=S=>{var A;return s?!!s(S):!!((A=n.knows)!=null&&A.call(n,S))},p=new Map;if(Array.isArray(o))for(const S of o)p.set(S,c.has(S)?()=>!0:A=>v(A));else for(const[S,A]of Object.entries(o??{}))p.set(S,A);function m(S){var O;const A=[],P=new Set,g=[],y=[];for(const z of S.acts??[]){z.id||g.push("an act has no id");for(const $ of z.scenes??[]){$.id||g.push(`act ${z.id}: a scene has no id`),y.push({act:z.id,id:$.id,title:$.title??$.id});let G=!0;for(const I of $.beats??[]){if(!I.id){g.push(`${z.id}/${$.id}: a beat has no id`);continue}P.has(I.id)&&g.push(`beat id '${I.id}' is used twice`),P.add(I.id),l.includes(I.trigger)||g.push(`beat '${I.id}': trigger '${I.trigger}' is not one of ${l.join(" | ")}`),!c.has(I.trigger)&&!I.at&&g.push(`beat '${I.id}': a '${I.trigger}' trigger needs an 'at' to name its subject`),G&&I.optional&&g.push(`beat '${I.id}' opens scene '${$.id}' and is marked optional — a scene's first beat is where its checkpoint is taken, so it must be arrived at`),I.talk&&((O=n.talk)!=null&&O.has)&&!n.talk.has(I.talk)&&g.push(`beat '${I.id}': conversation '${I.talk}' is not loaded`),A.push({...I,act:z.id,scene:$.id,sceneTitle:$.title??$.id,actTitle:z.title??z.id,opensScene:G}),G=!1}}}A.length||g.push("an episode with no beats");const L=new Set(S.teaches??[]);for(const z of A)for(const $ of z.grants??[])L.add($);for(const z of A)for(const $ of z.needs??[])L.has($)||g.push(`beat '${z.id}' needs '${$}', which nothing in this episode grants — list it in the episode's \`teaches\` if a conversation or a reading provides it`);if(g.length)throw new Error(`episode.load('${S.id}'): ${g.length} problem(s) — ${g.join("; ")}`);return{beats:A,scenes:y}}function x(){const S=w.beat;!S||!S.opensScene||_.has(S.scene)||(_.add(S.scene),i==null||i(S))}function M(S){var A,P,g;d.push(S.id),S.say&&(e==null||e(S.say));for(const y of S.grants??[])(A=n.learn)==null||A.call(n,y);S.talk&&((g=(P=n.talk)==null?void 0:P.open)==null||g.call(P,S.talk)),t==null||t(S)}function b(){if(!(f||!h)){f=!0;try{let S=0;x();const A=P=>{const g=p.get(P.trigger);return!!g&&!!g(P.at)};for(;u>=0&&u<h.beats.length&&A(h.beats[u]);){const P=h.beats[u];if((P.needs??[]).some(g=>!v(g))||(M(P),u+=1,x(),++S>h.beats.length+1))break}}finally{f=!1}}}function C(S,A){if(!h)return-1;for(let P=u;P>=0&&P<h.beats.length;P++){const g=h.beats[P];if(g.trigger===S&&g.at===A)return P;if(!g.optional)return-1}return-1}const w={get id(){return(h==null?void 0:h.id)??null},get title(){return(h==null?void 0:h.title)??null},get begun(){return u>=0},get over(){return!!h&&u>=h.beats.length},get beat(){return h&&u>=0&&u<h.beats.length?h.beats[u]:null},get act(){var S;return((S=w.beat)==null?void 0:S.actTitle)??null},get scene(){var S;return((S=w.beat)==null?void 0:S.sceneTitle)??null},get objective(){const S=w.beat;if(!S)return null;if(S.objective)return S.objective;if(!S.optional)return null;for(let A=u+1;A<h.beats.length;A++)if(!h.beats[A].optional)return h.beats[A].objective??null;return null},get note(){var S;return((S=w.beat)==null?void 0:S.note)??null},get done(){return[...d]},get beats(){return h?h.beats.map(S=>S.id):[]},load(S){if(!(S!=null&&S.id)||!S.acts)throw new Error("episode.load: needs { id, acts }");const{beats:A,scenes:P}=m(S);return h={id:S.id,title:S.title??S.id,acts:S.acts,beats:A,scenes:P},u=-1,d=[],_=new Set,w},begin(){return!h||u>=0?!1:(u=0,b(),!0)},fire(S,A){const P=C(S,A);if(P<0)return null;const g=h.beats[P],y=(g.needs??[]).filter(L=>!v(L));if(y.length){const L=g.refuse;return(typeof L=="function"?L(y):L)??"Not yet. There is a piece of this missing."}return u=P,x(),M(g),u+=1,b(),null},wants(S,A){return C(S,A)>=0},save(){var S;return{id:(h==null?void 0:h.id)??null,at:((S=w.beat)==null?void 0:S.id)??null,done:[...d]}},restore(S){if(!h||!S||S.id&&S.id!==h.id)return w;const A=h.beats.findIndex(P=>P.id===S.at);return A<0||(u=A,d=[...S.done??[]],_=new Set(h.beats.slice(0,A+1).map(P=>P.scene))),w}};return w}const Du=90,No=document.getElementById("view"),Un=new gc({canvas:No,antialias:!0});Un.setPixelRatio(Math.min(devicePixelRatio||1,2));Un.setSize(innerWidth||1280,innerHeight||720,!1);Un.outputColorSpace=sn;Un.toneMapping=ec;Un.toneMappingExposure=1;lx(Un);const Tt=new Lo;Tt.background=new Qe(1053204);const _t=new Kt(70,(innerWidth||1280)/(innerHeight||720),.05,200),US=1.7;Tt.add(new yc(3949127,.85));const ef=new Sc(16777215,1.6);ef.position.set(4,8,6);Tt.add(ef);Tt.add(new Ld(14674158,3813928,.9));const ct={halfW:7.5,wallH:4.6,near:2,far:-24},Fo=(ct.near+ct.far)/2,Oo=ct.near-ct.far,Dc=wi(ct.halfW*2,.2,Oo,In.floorTimber,{castShadow:!1});Dc.position.set(0,-.1,Fo);Tt.add(Dc);const Uc=wi(ct.halfW*2+.4,.2,Oo,In.ceiling,{castShadow:!1});Uc.position.set(0,ct.wallH+.1,Fo);Tt.add(Uc);const Nc=wi(.2,ct.wallH,Oo,In.wall);Nc.position.set(-7.5-.1,ct.wallH/2,Fo);Tt.add(Nc);const Fc=wi(.2,ct.wallH,Oo,In.wall);Fc.position.set(ct.halfW+.1,ct.wallH/2,Fo);Tt.add(Fc);const Oc=wi(ct.halfW*2+.4,ct.wallH,.2,In.wallUpper);Oc.position.set(0,ct.wallH/2,ct.far-.1);Tt.add(Oc);const Bc=wi(ct.halfW*2+.4,ct.wallH,.2,In.wallUpper);Bc.position.set(0,ct.wallH/2,ct.near+.1);Tt.add(Bc);const NS=[Nc,Fc,Oc,Bc,Dc,Uc];for(const n of[-5,-10,-20]){const e=wi(ct.halfW*2,.01,.06,In.trim,{castShadow:!1,receiveShadow:!1});e.position.set(0,.001,n),Tt.add(e)}const tf=-2.5,nf=wi(.05,.01,tf-ct.far,In.trim,{castShadow:!1,receiveShadow:!1});nf.position.set(0,.001,(tf+ct.far)/2);Tt.add(nf);const sf=Object.fromEntries([...bM,...cS].map(n=>[n.id,n])),FS=(n,e)=>e*Math.tan(wr.degToRad(n)),OS=[["boss",-3.5,20],["captain",-8.5,10],["servitor",-13,20],["shank",-19,15],["vandal",-27,10],["dreg",-36,5],["warlord",4,20],["champion",8.5,10],["rival",13,20],["outrider",19,15],["turret",27,10],["levy",36,5]],Nn=OS.map(([n,e,t],i)=>SS(sf[n],{scene:Tt,x:FS(e,t),z:-t,index:i})),Ha={x:0,z:0};let Oe=0;const rf=70,On=Pc.map(n=>({id:n.id,label:n.label,damage:n.damage,precision:n.precision,ammoType:n.ammoType,reserveCap:n.reserveCap,burstCycle:n.burstCycle??0,stats:{...n.stats,reloadTime:n.reload.clip*n.reload.seat}})),Jn=On.map(n=>Tx(n.stats));let Sn=0,mt=Jn[0];const lt=iS({hipFov:rf,classId:"hunterCloak"}),bn=Dx({model:lt.rig,rest:Eu,aim:Eu,stowDrop:0,drawTime:0,aimTime:0,fov:Zd,keyIntensity:1.6,fillIntensity:.12});bn.scene.add(new Ld(14674158,3813928,.9));bn.camera.far=3;bn.camera.updateProjectionMatrix();bn.draw();const kc=n=>n.reloading?{...n,reloading:!1,reloadEndsAt:0}:n;function Ds(n){n===Sn||!On[n]||lt.requestSwap(n,Oe)&&(Jn[Sn]=kc(mt),Sn=n,mt=Jn[n],wt.fire("switch","weapon"))}const BS=new et(.02,.02,1),of=new Jt({color:16773824,transparent:!0,opacity:0}),_r=new me(BS,of);_r.frustumCulled=!1;Tt.add(_r);let af=-1/0;const Uu=new D,Nu=new D,kS=new D(0,0,1);function zS(n,e){const t=n.distanceTo(e);Nu.copy(n).add(e).multiplyScalar(.5),_r.position.copy(Nu),Uu.copy(e).sub(n).normalize(),_r.quaternion.setFromUnitVectors(kS,Uu),_r.scale.set(1,1,Math.max(t,.01)),af=Oe+.05}const Bo=new me(Uo.sphere,new Jt({color:16769162}));Bo.scale.setScalar(1e-4);Tt.add(Bo);let lf=-1/0,cf=.06;function ko(n,e=.06){Bo.position.copy(n),lf=Oe+(e>.3?.28:e>.12?.18:.09),cf=e}let Fu=0;function hf(n,e=!1){const t=document.getElementById("hitmarker");t&&(t.classList.remove("fade"),t.classList.toggle("kill",n),t.classList.toggle("crit",e&&!n),t.offsetWidth,t.classList.add("show"),clearTimeout(Fu),Fu=setTimeout(()=>{t.classList.remove("show"),t.classList.add("fade")},60))}const Cn=new Id;Cn.far=100;const HS=wr.degToRad(1.4),GS=wr.degToRad(.22),Ou=new D,Ga=new D,Bu=new D;function VS(n){const e=lt.adsE>=.9?GS/lt.magnification:HS;if(e<=0)return;const t=Math.random()*Math.PI*2,i=Math.random()*e;Ou.set(Math.abs(n.y)<.99?0:1,Math.abs(n.y)<.99?1:0,0),Ga.crossVectors(n,Ou).normalize(),Bu.crossVectors(Ga,n).normalize(),n.addScaledVector(Ga,Math.cos(t)*i).addScaledVector(Bu,Math.sin(t)*i).normalize()}const WS=Nn.flatMap(n=>n.meshes),XS=new Map(Nn.flatMap(n=>n.meshes.map(e=>[e,n])));function yr(n){for(const e of n.intersectObjects(WS,!1)){const t=XS.get(e.object);if(t.health.dead)continue;const i=yS(t,e);if(i)return{target:t,point:e.point,crit:i.crit}}return null}function Rr(n,e,t,i=!1){const s=ES(n,{amount:e,source:t,at:Oe,crit:i});return s.killed&&ey(Ic(n,0),t==="player-super"?"super":"weapon"),s}function qS(n){const e=new D,t=new D;bn.ray(_t,e,t),VS(t),Cn.set(e,t);const i=yr(Cn);let s;if(i){s=i.point;const r=On[Sn],o=i.crit?r.damage*r.precision:r.damage,a=Oe<Gc?o*ty:o,{killed:l}=Rr(i.target,a,"player",i.crit);hf(l,i.crit)}else{const r=Cn.intersectObjects(NS,!1);s=r.length?r[0].point:e.clone().addScaledVector(t,Cn.far)}ko(s),zS(lt.muzzleWorld(_t),s),lt.onShot((n==null?void 0:n.at)??Oe)}const YS=rS();function uf(){const n=On[Sn],e=bt.down.has("Mouse0")||Er.fire,t=bt.pressed.has("Mouse0")||Er.fire;!lt.busy&&e&&lt.reloading&&!Hd(mt,Oe)&&lt.cutReload(Oe);const i=YS.pull(mt,n,Oe,{held:e,pressed:t,blocked:lt.busy});mt=i.state,i.shots.length&&lt.reloading&&lt.cutReload(Oe);for(const s of i.shots)qS(s);for(const s of i.events)(s.type==="dry"||s.type==="emptied")&&To();!lt.busy&&e&&mt.loaded<=0&&!mt.reloading&&To()}function To(){if(lt.busy)return;const n=Cx(mt,Oe);mt=n.state,n.events.some(e=>e.type==="reloading")&&lt.startReload(Oe)}const Wi={melee:{cooldown:4,readyAt:0},grenade:{cooldown:14,readyAt:0},class:{cooldown:22,readyAt:0}},zc=n=>Oe>=Wi[n].readyAt,Hc=n=>{Wi[n].readyAt=Oe+Wi[n].cooldown};let fn=0;const $S=.34;let xi=0;const KS=.25,ku=8,Us=[],jS=14,ZS=.7;function JS(n){const e=new me(Uo.box,new ni({color:5163386,emissive:1989684,emissiveIntensity:1.1,roughness:.55}));e.scale.set(.16,.16,.16),e.position.set(n.x,.14,n.z),Tt.add(e),Us.push({mesh:e,bornAt:Oe})}function QS(n){for(let e=Us.length-1;e>=0;e--){const t=Us[e];t.mesh.rotation.y+=n*1.6,t.mesh.position.y=.14+Math.sin((Oe-t.bornAt)*3)*.03;const i=t.mesh.position.x-ht.x,s=t.mesh.position.z-ht.z,r=Math.hypot(i,s)<ZS,o=Oe-t.bornAt>jS;r&&(On.forEach((a,l)=>{if(a.ammoType!=="special")return;const c=a.reserveCap??1/0;l===Sn?mt={...mt,reserve:Math.min(c,mt.reserve+ku)}:Jn[l]={...Jn[l],reserve:Math.min(c,Jn[l].reserve+ku)}}),wt.fire("pickup","special-ammo")),(r||o)&&(Tt.remove(t.mesh),Us.splice(e,1))}}function ey(n,e="weapon"){if(e!=="super"){const t=fn>=1;fn=Math.min(1,fn+$S),!t&&fn>=1&&wt.fire("flag","super-ready")}xi>=1?(n&&JS(n),xi=0):xi=Math.min(1,xi+KS),xy()}let Gc=-1/0;const ty=1.6,ny=6;function df(){zc("class")&&(Hc("class"),Gc=Oe+ny,wt.fire("ability","class"))}const iy=2.6,sy=80;function ff(){if(!zc("melee"))return;Hc("melee"),mt=kc(mt),lt.dip(Oe);const n=new D,e=new D;bn.ray(_t,n,e);const t=Cn.far;Cn.far=iy,Cn.set(n,e);const i=yr(Cn);if(Cn.far=t,i){const{killed:s}=Rr(i.target,sy,"player-melee");ko(i.point,.1),hf(s),wt.fire("ability","melee")}}const ry=14,Va=3.2,zu=120,oy=2.5,yi=new me(Uo.sphere,new ni({color:16734780,emissive:16742972,emissiveIntensity:2,roughness:.5}));yi.scale.setScalar(.16);yi.visible=!1;Tt.add(yi);const Kl=new D,ay=.6,Hu=new D,ly=new D;let Ao=!1,pf=-1/0;function mf(){if(!zc("grenade")||Ao)return;Hc("grenade"),mt=kc(mt),lt.dip(Oe);const n=new D,e=new D;bn.ray(_t,n,e),yi.position.copy(n).addScaledVector(e,.5),Kl.copy(e).multiplyScalar(7.5).add(new D(0,4.2,0)),yi.visible=!0,Ao=!0,pf=Oe,wt.fire("ability","grenade")}function cy(n){ko(n,.75),Hu.set(ht.x,ht.y+1,ht.z);const e=Hu.distanceTo(n);e<Va&&xf(zu*ay*(1-.5*(e/Va)),"player-grenade");for(const t of Nn)t.health.dead||Ic(t,.5,ly).distanceTo(n)>Va||Rr(t,zu,"player-grenade")}function hy(n){if(!Ao)return;Kl.y-=ry*n,yi.position.addScaledVector(Kl,n);const e=yi.position;(e.y<=.1||e.x<-7.5+.15||e.x>ct.halfW-.15||e.z<ct.far+.15||e.z>ct.near-.15||Oe-pf>oy)&&(cy(e.clone()),yi.visible=!1,Ao=!1)}function gf(){if(fn<1)return;fn=0;const n=new D,e=new D;bn.ray(_t,n,e),ko(n.clone().addScaledVector(e,3.5),.6);for(const t of Nn)t.health.dead||Rr(t,99999,"player-super");wt.fire("ability","super")}const Vc=70,zo=130,Gu=2.75,uy=2.25,dy=Vc/2.7,fy=zo/2.75;let Lt=Ac({max:Vc,shield:zo}),_f=-1/0,vf=!1;function xf(n,e="world"){if(Lt.dead)return;const{state:t,events:i}=kd(Lt,{amount:n,source:e});Lt=t,_f=Oe,i.some(s=>s.type==="died")&&(Lt=Ac({max:Vc,shield:zo}),Xc("r-down"))}function py(n){if(Lt.dead)return;const e=Oe-_f;e>=Gu&&Lt.hp<Lt.max&&(Lt=ql(Lt,{amount:dy*n,source:"regen"}).state),e>=Gu+uy&&Lt.shield<Lt.shieldMax&&(Lt=ql(Lt,{shield:fy*n,source:"regen"}).state)}const Mf={ghost:{name:"Ghost"}},Wc={"r-hello":{speaker:"ghost",text:"Range is live. Five, ten and twenty metres. Let's see what your hands remember."},"r-targets":{speaker:"ghost",text:"Good. They stand back up on their own. Try something else in your kit."},"r-switch":{speaker:"ghost",text:"Feel the difference? Grenade next. Lob it, and not at your own feet."},"r-grenade":{speaker:"ghost",text:"Loud. Now get in close and hit one. Your fists count too."},"r-melee":{speaker:"ghost",text:"That'll do. Your class ability now. It doesn't last, so make it count."},"r-class":{speaker:"ghost",text:"Every kill feeds your Super. Break a few more and I'll tell you when it's ready."},"r-super-ready":{speaker:"ghost",text:"There. That's your Super. Let it out."},"r-super":{speaker:"ghost",text:"That's what you are now. Kills build special ammo too. Watch for the drop."},"r-ammo":{speaker:"ghost",text:"Special ammo. The hand cannon's fed. The range is yours."},"r-down":{speaker:"ghost",text:"Up you get. Maybe keep your own grenades a bit further away."}};for(const[n,e]of Object.entries(Wc)){if(!Mf[e.speaker])throw new Error(`comms: line '${n}' has unknown speaker '${e.speaker}'`);if(e.text.length>Du)throw new Error(`comms: line '${n}' is ${e.text.length} chars, over MAX_LINE ${Du}`)}const Wt={queue:[],current:null,until:0,endedAt:-1/0},my=.8,gy=n=>Math.max(2.4,.8+n.length*.05);function Xc(n){const e=Wc[n];if(!e)throw new Error(`comms: no line '${n}'`);Wt.queue=[{id:n,...e}]}function _y(){if(Wt.current&&Oe>=Wt.until){const n=Wt.current;Wt.current=null,Wt.endedAt=Oe,wt.fire("vo",n.id)}!Wt.current&&Wt.queue.length&&(Wt.current=Wt.queue.shift(),Wt.until=Oe+gy(Wt.current.text))}const Sf={id:"test-range",title:"Test Range",acts:[{id:"range",title:"Test Range",scenes:[{id:"drills",title:"Drills",beats:[{id:"r-01",trigger:"now",vo:"r-hello"},{id:"r-02",trigger:"kill",at:"target",count:3,progress:"kills",label:"Enemies defeated",objective:"Defeat enemies",vo:"r-targets"},{id:"r-03",trigger:"switch",at:"weapon",key:"1 2 3",objective:"Switch weapons",vo:"r-switch"},{id:"r-04",trigger:"ability",at:"grenade",key:"Q",objective:"Throw a grenade",vo:"r-grenade"},{id:"r-05",trigger:"ability",at:"melee",key:"C",objective:"Melee a target",vo:"r-melee"},{id:"r-06",trigger:"ability",at:"class",key:"V",objective:"Use your class ability",vo:"r-class"},{id:"r-07",trigger:"flag",at:"super-ready",progress:"super",label:"Super energy",objective:"Charge your Super",vo:"r-super-ready"},{id:"r-08",trigger:"ability",at:"super",key:"F",objective:"Cast your Super",vo:"r-super"},{id:"r-09",trigger:"pickup",at:"special-ammo",progress:"special",label:"Special ammo",objective:"Collect special ammo",vo:"r-ammo"}]}]}]},vy="Free fire",Wa=new Set,wt=DS({host:{knows:n=>Wa.has(n),learn:n=>Wa.add(n)},knows:n=>n==="super-ready"?fn>=1:Wa.has(n),triggers:["now","flag","vo","kill","switch","ability","pickup"],onBeat:n=>{n.vo&&Xc(n.vo)}});wt.load(Sf);for(const n of Sf.acts[0].scenes[0].beats)if(n.vo&&!Wc[n.vo])throw new Error(`episode: beat '${n.id}' plays missing line '${n.vo}'`);let Ts={id:null,n:0};function xy(){const n=wt.beat;!n||n.trigger!=="kill"||(Ts.id!==n.id&&(Ts={id:n.id,n:0}),Ts.n+=1,Ts.n>=(n.count??1)&&wt.fire("kill",n.at))}const Cr=new xx,bt=new yx(Cr,No);No.addEventListener("click",()=>{bt.locked||bt.requestLock()});No.addEventListener("contextmenu",n=>n.preventDefault());Cr.on("input:wheel",({delta:n})=>{if(!bt.locked)return;const e=On.length;Ds((Sn+(n>0?1:-1)+e)%e)});Cr.on("input:pointerlock",({locked:n})=>{var e;(e=document.getElementById("hint"))==null||e.classList.toggle("gone",n),!n&&!Mn&&wt.begun&&(Ho(),bf=performance.now()),n&&!wt.begun&&wt.begin()});const My=["MetaLeft","MetaRight","ControlLeft","ControlRight","AltLeft","AltRight"];Cr.on("input:key",({code:n})=>{Mn||!bt.locked||My.some(e=>bt.down.has(e))||(n==="KeyR"&&To(),n==="KeyQ"&&mf(),n==="KeyC"&&ff(),n==="KeyV"&&df(),n==="KeyF"&&gf(),n==="Digit1"&&Ds(0),n==="Digit2"&&Ds(1),n==="Digit3"&&Ds(2))});const $t={yaw:0,pitch:0},Vu=1.5,ht={x:0,z:0,y:0},Sy=4.2,lr=.35,yy=20,Ey=6.4,by=5.6,wy=1;let vs=0,Xa=0;const Er={aim:!1,fire:!1},qa=new Nt(0,0,0,"YXZ"),Wu=new D,Xu=new D,xs=new D,Ya=(n,e,t)=>Math.max(e,Math.min(t,n));let Mn=!1,yf="hunterCloak";const mi=document.getElementById("preview-canvas");let jn=null,Ns=null,Fs=null,nn=null;function qc(n){var e;yf=n,lt.setClass(n),nn&&(Ns.remove(nn.group),(e=nn.dispose)==null||e.call(nn)),nn=Cc.fromLook({skin:1,hair:2,hairStyle:"short",top:3753552,bottom:2237994,garment:n}),nn.group.position.y=0,Ns.add(nn.group),document.querySelectorAll("#menu-classes button").forEach(t=>t.classList.toggle("active",t.dataset.garment===n))}function Ty(){if(jn||!mi)return;jn=new gc({canvas:mi,antialias:!0,alpha:!0}),jn.setPixelRatio(Math.min(devicePixelRatio||1,2)),jn.outputColorSpace=sn,jn.toneMapping=ec,Ns=new Lo,Ns.add(new yc(3949127,.9));const n=new Sc(16777215,1.8);n.position.set(2,3,3),Ns.add(n),Fs=new Kt(40,1,.05,10),Fs.position.set(0,1.05,2.6),Fs.lookAt(0,.95,0),qc(yf)}function Ef(){const n=document.getElementById("menu-inventory");n&&(n.innerHTML=On.map((e,t)=>{const i=t===Sn?mt:Jn[t],s=i.reserve===1/0?"∞":i.reserve;return`<div class="inv-slot${t===Sn?" equipped":""}" data-index="${t}">
      <span>${e.label} &middot; ${i.loaded}/${s}</span>
      <span class="ammo-tag ${e.ammoType}">${e.ammoType}</span>
    </div>`}).join(""),n.querySelectorAll(".inv-slot").forEach(e=>{e.addEventListener("click",()=>{Ds(Number(e.dataset.index)),Ef()})}))}function Ho(){Mn=!Mn;const n=document.getElementById("menu");if(n&&(n.hidden=!Mn),Mn){bt.releaseLock(),Ty();const e=(mi==null?void 0:mi.clientWidth)||360,t=(mi==null?void 0:mi.clientHeight)||220;jn&&(jn.setSize(e,t,!1),Fs.aspect=e/t,Fs.updateProjectionMatrix()),Ef()}else bt.requestLockFresh(),fn>=1&&Cf()}let bf=-1/0;Cr.on("action:cancel",()=>{Mn&&performance.now()-bf<300||Ho()});var nd;(nd=document.getElementById("menu-resume"))==null||nd.addEventListener("click",()=>{Mn&&Ho()});document.querySelectorAll("#menu-classes button").forEach(n=>{n.addEventListener("click",()=>qc(n.dataset.garment))});function wf(n){if(Mn){nn&&(nn.group.rotation.y+=n*.6,nn.update(n,0,{})),bt.endFrame();return}Oe+=n;const e=bt.locked&&bt.down.has("Mouse2")||Er.aim;e&&(Af=Oe),lt.setAim(e);const{dx:t,dy:i}=bt.consumeMouse();let s=0,r=0;if(bt.locked){const u=bt.mouse.sensitivity*(_t.fov/rf);s=-t*u,r=-i*u,$t.yaw+=s,$t.pitch+=r;const f=lt.recoil;if(f.pitch>0&&r<0){const d=Math.min(f.pitch,-r);f.pitch-=d,$t.pitch+=d}if(f.yaw>0&&s<0){const d=Math.min(f.yaw,-s);f.yaw-=d,$t.yaw+=d}if(f.yaw<0&&s>0){const d=Math.min(-f.yaw,s);f.yaw+=d,$t.yaw-=d}$t.pitch=Ya($t.pitch,-Vu,Vu)}_t.rotation.set($t.pitch+lt.recoil.pitch,$t.yaw+lt.recoil.yaw,0,"YXZ"),qa.set(0,$t.yaw,0,"YXZ");const o=bt.axis();Wu.set(0,0,-1).applyEuler(qa),Xu.set(1,0,0).applyEuler(qa),xs.set(0,0,0).addScaledVector(Wu,o.y).addScaledVector(Xu,o.x),xs.lengthSq()>0&&xs.normalize();const a=xs.lengthSq()>0?Sy*(1-.25*lt.adsE):0;ht.x=Ya(ht.x+xs.x*a*n,-7.5+lr,ct.halfW-lr),ht.z=Ya(ht.z+xs.z*a*n,ct.far+lr,ct.near-lr);for(const u of Nn){if(u.health.dead)continue;const f=ht.x-u.root.position.x,d=ht.z-u.root.position.z,_=u.footprint+lr,v=f*f+d*d;if(v>=_*_)continue;const p=Math.sqrt(v);if(p<1e-6){ht.z=u.root.position.z+_;continue}ht.x=u.root.position.x+f/p*_,ht.z=u.root.position.z+d/p*_}const l=ht.y<=0;bt.wasPressed("jump")&&(l?(vs=Ey,Xa=0):Xa<wy&&(vs=by,Xa++)),vs-=yy*n,ht.y=Math.max(0,ht.y+vs*n);let c=0;ht.y<=0&&(l||(c=Math.max(0,-vs)),ht.y=0,vs=0),_t.position.set(ht.x,US+ht.y,ht.z),hy(n),QS(n),py(n),_y(),(bt.locked||Er.fire)&&uf(),mt=Ax(mt,Oe).state,lt.update(n,Oe,{lookYaw:s,lookPitch:r,speed:a,airborne:ht.y>0,landed:c}),bn.update(n),_t.fov=lt.worldFov,_t.updateProjectionMatrix(),_t.rotation.set($t.pitch+lt.recoil.pitch,$t.yaw+lt.recoil.yaw,0,"YXZ"),of.opacity=Oe<af?.9:0,Bo.scale.setScalar(Oe<lf?cf:1e-4);const h=document.getElementById("cross");h&&(h.style.opacity=(1-Rf(.5,.85,lt.adsE)).toFixed(3)),Ha.x=ht.x,Ha.z=ht.z;for(const u of Nn)TS(u,n,Oe,{face:Ha});CS(n),Pf(n),bt.endFrame()}function Tf(){Un.render(Tt,_t),bn.pass(Un,_t),Mn&&jn&&nn&&jn.render(Ns,Fs)}const qu=132,Yu=48;function Ay(){const n=document.createElement("canvas");n.width=qu,n.height=Yu;let e;try{e=new gc({canvas:n,alpha:!0,antialias:!0,preserveDrawingBuffer:!0})}catch{return On.map(()=>"")}e.setClearColor(0,0);const t=new Lo;t.overrideMaterial=new Jt({color:16777215});const i=new pc(-1,1,1,-1,.01,10),s=new D,r=new D,o=Pc.map(a=>Kd(a,{icon:!0})).map(({group:a})=>{const l=a;t.add(l),l.updateMatrixWorld(!0);const c=new ti().setFromObject(l);c.getSize(s),c.getCenter(r);let h=s.z/2*1.08,u=s.y/2*1.08;const f=qu/Yu;return h/u>f?u=h/f:h=u*f,i.left=-h,i.right=h,i.top=u,i.bottom=-u,i.position.set(r.x+2,r.y,r.z),i.lookAt(r),i.updateProjectionMatrix(),e.render(t,i),t.remove(l),n.toDataURL("image/png")});return t.overrideMaterial.dispose(),e.dispose(),e.forceContextLoss(),o}const jl=Ay(),$a=60,Ry=Math.cos(wr.degToRad(4)),$u=2.5,Ku=new Map,Ms=new Id,Ss=new D,Ka=new D,ja=new D,Za=new D;function Cy(n,e){let t=Ku.get(n);return t||(t=document.createElement("div"),t.className=`plate ${n.rank}`,t.innerHTML=`<div class="col"><div class="name">${n.name}</div><div class="bar"><i class="fill"></i><i class="shield"></i></div></div>`,e.appendChild(t),Ku.set(n,t),t)}function Py(){var s;const n=document.getElementById("nameplates");if(!n)return;_t.updateMatrixWorld(),_t.getWorldDirection(ja),Ms.set(_t.position,ja),Ms.far=$a;const e=((s=yr(Ms))==null?void 0:s.target)??null,t=innerWidth||1280,i=innerHeight||720;for(const r of Nn){const o=Cy(r,n);Ic(r,.62,Ka);const a=Ka.distanceTo(_t.position);let l=r===e;if(!l&&a<$a&&(Za.copy(Ka).sub(_t.position).divideScalar(a||1),Za.dot(ja)>Ry)){Ms.set(_t.position,Za),Ms.far=a;const d=yr(Ms);l=!d||d.target===r}l&&(r.plateSeenAt=Oe);const c=a<$a&&(Oe-(r.plateSeenAt??-1/0)<$u||Oe-r.lastHitAt<$u);Ss.set(r.root.position.x,r.root.position.y+r.top+.2,r.root.position.z).project(_t);const h=Ss.z<1&&Math.abs(Ss.x)<1.05&&Math.abs(Ss.y)<1.05;if(o.hidden=r.health.dead||!h,o.classList.toggle("on",c),o.hidden)continue;const u=(Ss.x*.5+.5)*t,f=(-Ss.y*.5+.5)*i;o.style.transform=`translate(${u.toFixed(1)}px, ${f.toFixed(1)}px) translate(-50%, -100%)`,o.querySelector(".fill").style.width=`${(zd(r.health)*100).toFixed(1)}%`,o.querySelector(".shield").style.width=`${(Rc(r.health)*100).toFixed(1)}%`}}function Ly(n,e,t){const i=document.getElementById(n);i&&(i.style.setProperty("--pct",`${Math.round(e*100)}%`),i.classList.toggle("ready",t))}const fr=Math.PI*2,As=8,Ja=24,Iy=48,Dy=.8,bs=92,ys=bs*.4,Zl=[];let Af=-1/0;const Uy="http://www.w3.org/2000/svg",Gi=(n,e)=>`${(100+n*Math.sin(e)).toFixed(2)} ${(100-n*Math.cos(e)).toFixed(2)}`,ju=(n,e,t)=>`M${Gi(n,e)} A${n} ${n} 0 0 1 ${Gi(n,t)}`;function di(n,e){const t=document.createElementNS(Uy,n);for(const[i,s]of Object.entries(e))t.setAttribute(i,String(s));return t}function Ny(){const n=document.getElementById("radar-svg");if(!n)return;di("defs",{}),n.appendChild(di("circle",{cx:100,cy:100,r:bs,fill:"rgba(12,17,22,0.38)",stroke:"rgba(255,255,255,0.24)","stroke-width":1.4})),n.appendChild(di("circle",{cx:100,cy:100,r:ys,fill:"none",stroke:"rgba(255,255,255,0.2)","stroke-width":1.2}));const e=fr/As,t=wr.degToRad(1.5);for(let i=0;i<As;i++){const s=(i-.5)*e+t/2,r=(i+.5)*e-t/2,o=di("path",{d:`M${Gi(ys,s)} L${Gi(bs,s)} A${bs} ${bs} 0 0 1 ${Gi(bs,r)} L${Gi(ys,r)} A${ys} ${ys} 0 0 0 ${Gi(ys,s)} Z`,fill:"#b8452f",opacity:0}),a=(s+r)/2,l=(r-s)*.3,c=di("g",{opacity:0});c.append(di("path",{d:ju(96,s,r),fill:"none",stroke:"#e04a32","stroke-width":3,opacity:.4}),di("path",{d:ju(96,a-l,a+l),fill:"none",stroke:"#e04a32","stroke-width":3})),n.append(o,c),Zl.push({fill:o,far:c,near:0,farValue:0})}n.appendChild(di("path",{d:"M100 90 L107.5 109 L100 104.5 L92.5 109 Z",fill:"#4a82e6",stroke:"#a9c6f5","stroke-width":1.2,"stroke-linejoin":"round"}))}Ny();const Zu=(n,e,t)=>n+(e-n)*Math.min(1,t/(e>n?.15:.4));function Rf(n,e,t){const i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)}function Fy(n){var s;if((s=document.getElementById("radar"))==null||s.classList.toggle("ads",Oe-Af<Dy),!Zl.length)return;const e=new Array(As).fill(0),t=new Array(As).fill(0),i=fr/As;for(const r of Nn){if(r.health.dead)continue;const o=r.root.position.x-ht.x,a=r.root.position.z-ht.z,l=Math.hypot(o,a);if(l>Iy)continue;const c=((Math.atan2(o,-a)+$t.yaw)%fr+fr)%fr,h=Math.round(c/i)%As;l>=Ja*.7&&(t[h]=1),l<Ja&&(e[h]=Math.max(e[h],1-l/Ja))}Zl.forEach((r,o)=>{r.near=Zu(r.near,e[o],n),r.farValue=Zu(r.farValue,t[o],n),r.fill.setAttribute("opacity",(.7*Rf(0,.75,r.near)).toFixed(2)),r.far.setAttribute("opacity",r.farValue.toFixed(2))})}function rn(n,e){n&&n.textContent!==e&&(n.textContent=e)}const Oy=.7;let cr,hr,Qa=-1/0;function By(n){return n!=null&&n.progress?n.progress==="kills"?`${Ts.id===n.id?Ts.n:0}/${n.count??1}`:n.progress==="super"?`${Math.round(fn*100)}%`:n.progress==="special"?Us.length?"Dropped":`${Math.round(xi*100)}%`:"":""}function ky(n){return(n==null?void 0:n.progress)==="kills"?`${n.count??1}/${n.count??1}`:(n==null?void 0:n.progress)==="super"?"100%":(n==null?void 0:n.progress)==="special"?"Collected":""}let el=null;function zy(){const n=document.getElementById("objective");if(!n)return;const e=n.querySelector(".obj.main"),t=n.querySelector(".obj.sub"),i=n.querySelector(".obj.value"),s=wt.begun?wt.over?vy:wt.objective:null;if(s!==cr&&s!==hr&&(hr=s,cr?(Qa=Oe+Oy,n.classList.remove("fresh"),n.classList.add("complete"),rn(e.querySelector(".key"),""),rn(i.querySelector(".count"),ky(el))):Qa=Oe),hr!==void 0&&Oe>=Qa&&(cr=hr,hr=void 0,el=wt.over?null:wt.beat,n.hidden=!cr,rn(e.querySelector(".text"),cr??""),n.classList.remove("complete","fresh"),n.offsetWidth,n.classList.add("fresh")),n.classList.contains("complete"))return;const r=el,o=!!(r!=null&&r.progress);e.classList.toggle("step",o),rn(e.querySelector(".key"),(r==null?void 0:r.key)??""),t.hidden=!o,i.hidden=!o,o&&(rn(t.querySelector(".label"),r.label??""),rn(i.querySelector(".count"),By(r)))}function Hy(){const n=document.getElementById("buff-ward");if(!n)return;const e=Gc-Oe;n.hidden=e<=0,e>0&&rn(n.querySelector(".time"),`${Math.ceil(e)}s`)}let Ju=zo;function Gy(){var r;const n=document.getElementById("vitals");if(!n)return;const e=zd(Lt),t=Rc(Lt),i=Lt.shield<=0;n.classList.toggle("shown",e<1||t<1),n.classList.toggle("broken",i&&e<1),n.classList.toggle("critical",i&&e<.5),i&&Ju>0&&(n.classList.remove("shattered"),n.offsetWidth,n.classList.add("shattered")),Ju=Lt.shield,n.style.setProperty("--hp",e.toFixed(3)),n.style.setProperty("--sh",t.toFixed(3)),(r=document.getElementById("zone"))==null||r.classList.toggle("on",vf);const s=document.getElementById("vignette");s&&(s.style.opacity=i?Math.min(.9,(1-e)*1.2).toFixed(2):"0")}function Vy(){const n=document.getElementById("comms"),e=document.getElementById("subtitle");if(!n||!e)return;const t=Wt.current,i=!!t||Oe-Wt.endedAt<my;n.classList.toggle("on",i),e.classList.toggle("on",i),t&&(rn(n.querySelector(".speaker"),Mf[t.speaker].name),rn(e.querySelector(".line"),t.text))}let Qu=null;function Wy(){const n=document.getElementById("weapons");return n?(n.innerHTML=On.map((e,t)=>`
    <div class="wpn">
      ${jl[t]?`<img class="icon" alt="" src="${jl[t]}">`:'<span class="icon"></span>'}
      <span class="ammo-type ${e.ammoType}"><i></i><i></i><i></i></span>
      <span class="reserve"></span>
      <span class="mag"></span>
      ${e.ammoType==="special"?'<div class="meter"><div class="fill"></div></div>':""}
    </div>`).join(""),[...n.querySelectorAll(".wpn")]):[]}let ed=!1;function Cf(){const n=document.getElementById("super-flash");n&&(n.classList.remove("show"),n.offsetWidth,n.classList.add("show"))}function Xy(){const n=document.getElementById("super");if(n){const t=fn>=1;n.style.setProperty("--charge",fn.toFixed(3)),n.classList.toggle("ready",t),t&&!ed&&Cf(),ed=t}for(const[t,i]of[["ab-grenade","grenade"],["ab-melee","melee"],["ab-class","class"]]){const s=Math.max(0,Wi[i].readyAt-Oe),r=Wi[i].cooldown>0?s/Wi[i].cooldown:0;Ly(t,r,s<=0)}Qu??(Qu=Wy());const e="∞";Qu.forEach((t,i)=>{const s=i===Sn,r=s?mt:Jn[i],o=r.reserve===1/0;t.classList.toggle("active",s),t.style.order=s?"0":String(i+1),s?(rn(t.querySelector(".mag"),String(r.loaded)),rn(t.querySelector(".reserve"),o?e:String(r.reserve))):(rn(t.querySelector(".mag"),""),rn(t.querySelector(".reserve"),o?e:String(r.loaded+r.reserve))),t.classList.toggle("low",r.loaded<=Math.floor(r.magazine*.2)),t.classList.toggle("empty",!o&&r.loaded+r.reserve===0);const a=t.querySelector(".meter");a&&(a.firstElementChild.style.width=`${Math.round(xi*100)}%`,a.classList.toggle("full",xi>=1))})}function Pf(n=0){Fy(n),Py(),zy(),Hy(),Gy(),Vy(),Xy()}addEventListener("resize",()=>{!innerWidth||!innerHeight||(Un.setSize(innerWidth,innerHeight,!1),_t.aspect=innerWidth/innerHeight,_t.updateProjectionMatrix())});let td=performance.now();function Lf(n){const e=Math.min((n-td)/1e3,.25);td=n,wf(e),Tf(),requestAnimationFrame(Lf)}requestAnimationFrame(Lf);window.game={scene:Tt,camera:_t,renderer:Un,view:$t,player:ht,weapon:()=>mt,targets:Nn,update:wf,render:Tf,viewmodel:bn,units:sf,strikeRay:yr,hitTarget:Rr,input:bt,attemptFire:uf,doReload:To,doMelee:ff,throwGrenade:mf,useWard:df,useSuper:gf,ability:()=>Wi,superCharge:()=>fn,switchWeapon:Ds,weaponDefs:()=>On,activeWeapon:()=>Sn,fp:lt,debug:Er,specialMeter:()=>xi,ammoBricks:()=>Us,weaponStates:Jn,toggleMenu:Ho,menuOpen:()=>Mn,setGarment:qc,previewAvatar:()=>nn,episode:wt,comms:Wt,sayLine:Xc,hurtPlayer:xf,playerHealth:()=>Lt,updateHud:Pf,weaponIcons:jl,setRestrictedZone:n=>{vf=!!n}};console.log(`PRE-DESTINY test range booted — ${Nn.length} enemies in two lanes, magazine ${mt.magazine}, reserve ${mt.reserve}, reload ${mt.reloadTime}s`);
