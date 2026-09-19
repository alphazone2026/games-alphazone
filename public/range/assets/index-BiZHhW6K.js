(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const K0="169",Ff=0,Xc=1,Of=2,ad=1,kf=2,Ti=3,Di=0,Tn=1,Ai=2,Qi=0,cs=1,Js=2,qc=3,Yc=4,Bf=5,Mr=100,zf=101,Hf=102,Gf=103,Vf=104,Wf=200,Xf=201,qf=202,Yf=203,ql=204,Yl=205,$f=206,Kf=207,jf=208,Zf=209,Jf=210,Qf=211,ep=212,tp=213,np=214,$l=0,Kl=1,jl=2,gs=3,Zl=4,Jl=5,Ql=6,e0=7,ld=0,ip=1,rp=2,er=0,sp=1,op=2,ap=3,j0=4,lp=5,cp=6,up=7,$c="attached",hp="detached",cd=300,_s=301,vs=302,t0=303,n0=304,ga=306,aa=1e3,ji=1001,i0=1002,wn=1003,dp=1004,xo=1005,zn=1006,Da=1007,Zi=1008,Ui=1009,ud=1010,hd=1011,Qs=1012,Z0=1013,Rr=1014,ui=1015,so=1016,J0=1017,Q0=1018,xs=1020,dd=35902,fd=1021,pd=1022,Hn=1023,md=1024,gd=1025,us=1026,Ms=1027,_d=1028,ec=1029,vd=1030,tc=1031,nc=1033,Jo=33776,Qo=33777,ea=33778,ta=33779,r0=35840,s0=35841,o0=35842,a0=35843,l0=36196,c0=37492,u0=37496,h0=37808,d0=37809,f0=37810,p0=37811,m0=37812,g0=37813,_0=37814,v0=37815,x0=37816,M0=37817,S0=37818,y0=37819,E0=37820,b0=37821,na=36492,w0=36494,T0=36495,xd=36283,A0=36284,R0=36285,C0=36286,fp=3200,pp=3201,Md=0,mp=1,Ki="",Pn="srgb",ir="srgb-linear",ic="display-p3",_a="display-p3-linear",la="linear",Mt="srgb",ca="rec709",ua="p3",Nr=7680,Kc=519,gp=512,_p=513,vp=514,Sd=515,xp=516,Mp=517,Sp=518,yp=519,jc=35044,Zc="300 es",Ci=2e3,ha=2001;class ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jc=1234567;const $s=Math.PI/180,eo=180/Math.PI;function Pr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function xn(n,e,t){return Math.max(e,Math.min(t,n))}function rc(n,e){return(n%e+e)%e}function Ep(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function bp(n,e,t){return n!==e?(t-n)/(e-n):0}function Ks(n,e,t){return(1-t)*n+t*e}function wp(n,e,t,i){return Ks(n,e,1-Math.exp(-t*i))}function Tp(n,e=1){return e-Math.abs(rc(n,e*2)-e)}function Ap(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Rp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Cp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Lp(n,e){return n+Math.random()*(e-n)}function Pp(n){return n*(.5-Math.random())}function Ip(n){n!==void 0&&(Jc=n);let e=Jc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dp(n){return n*$s}function Up(n){return n*eo}function Np(n){return(n&n-1)===0&&n!==0}function Fp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Op(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function kp(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),u=s((e+i)/2),c=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*c,l*h,l*d,o*u);break;case"YZY":n.set(l*d,o*c,l*h,o*u);break;case"ZXZ":n.set(l*h,l*d,o*c,o*u);break;case"XZX":n.set(o*c,l*_,l*f,o*u);break;case"YXY":n.set(l*f,o*c,l*_,o*u);break;case"ZYZ":n.set(l*_,l*f,o*c,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ns(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const oo={DEG2RAD:$s,RAD2DEG:eo,generateUUID:Pr,clamp:xn,euclideanModulo:rc,mapLinear:Ep,inverseLerp:bp,lerp:Ks,damp:wp,pingpong:Tp,smoothstep:Ap,smootherstep:Rp,randInt:Cp,randFloat:Lp,randFloatSpread:Pp,seededRandom:Ip,degToRad:Dp,radToDeg:Up,isPowerOfTwo:Np,ceilPowerOfTwo:Fp,floorPowerOfTwo:Op,setQuaternionFromProperEuler:kp,normalize:gn,denormalize:ns};class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,a,o,l,u){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u)}set(e,t,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],f=i[5],_=i[8],v=r[0],m=r[3],p=r[6],x=r[1],M=r[4],E=r[7],P=r[2],T=r[5],y=r[8];return s[0]=a*v+o*x+l*P,s[3]=a*m+o*M+l*T,s[6]=a*p+o*E+l*y,s[1]=u*v+c*x+h*P,s[4]=u*m+c*M+h*T,s[7]=u*p+c*E+h*y,s[2]=d*v+f*x+_*P,s[5]=d*m+f*M+_*T,s[8]=d*p+f*E+_*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=c*a-o*u,d=o*l-c*s,f=u*s-a*l,_=t*h+i*d+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=h*v,e[1]=(r*u-c*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(c*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=f*v,e[7]=(i*l-u*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ua.makeScale(e,t)),this}rotate(e){return this.premultiply(Ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ua=new Xe;function yd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function da(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Bp(){const n=da("canvas");return n.style.display="block",n}const Qc={};function ia(n){n in Qc||(Qc[n]=!0,console.warn(n))}function zp(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Hp(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Gp(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const eu=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tu=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Is={[ir]:{transfer:la,primaries:ca,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Pn]:{transfer:Mt,primaries:ca,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[_a]:{transfer:la,primaries:ua,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(tu),fromReference:n=>n.applyMatrix3(eu)},[ic]:{transfer:Mt,primaries:ua,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(tu),fromReference:n=>n.applyMatrix3(eu).convertLinearToSRGB()}},Vp=new Set([ir,_a]),at={enabled:!0,_workingColorSpace:ir,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Vp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Is[e].toReference,r=Is[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Is[n].primaries},getTransfer:function(n){return n===Ki?la:Is[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Is[e].luminanceCoefficients)}};function hs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Na(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Fr;class Wp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fr===void 0&&(Fr=da("canvas")),Fr.width=e.width,Fr.height=e.height;const i=Fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Fr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=da("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=hs(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hs(t[i]/255)*255):t[i]=hs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xp=0;class Ed{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Pr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Fa(r[a].image)):s.push(Fa(r[a]))}else s=Fa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Fa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qp=0;class un extends ws{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,i=ji,r=ji,s=zn,a=Zi,o=Hn,l=Ui,u=un.DEFAULT_ANISOTROPY,c=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=Pr(),this.name="",this.source=new Ed(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case aa:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case i0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case aa:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case i0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=cd;un.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],f=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+v)<.1&&Math.abs(_+m)<.1&&Math.abs(u+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(u+1)/2,E=(f+1)/2,P=(p+1)/2,T=(c+d)/4,y=(h+v)/4,A=(_+m)/4;return M>E&&M>P?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=T/i,s=y/i):E>P?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=T/r,s=A/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=y/s,r=A/s),this.set(i,r,s,t),this}let x=Math.sqrt((m-_)*(m-_)+(h-v)*(h-v)+(d-c)*(d-c));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(h-v)/x,this.z=(d-c)/x,this.w=Math.acos((u+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yp extends ws{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ed(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cr extends Yp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class bd extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $p extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const d=s[a+0],f=s[a+1],_=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=v;return}if(h!==v||l!==d||u!==f||c!==_){let m=1-o;const p=l*d+u*f+c*_+h*v,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const P=Math.sqrt(M),T=Math.atan2(P,p*x);m=Math.sin(m*T)/P,o=Math.sin(o*T)/P}const E=o*x;if(l=l*m+d*E,u=u*m+f*E,c=c*m+_*E,h=h*m+v*E,m===1-o){const P=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=P,u*=P,c*=P,h*=P}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[a],d=s[a+1],f=s[a+2],_=s[a+3];return e[t]=o*_+c*h+l*f-u*d,e[t+1]=l*_+c*d+u*h-o*f,e[t+2]=u*_+c*f+o*d-l*h,e[t+3]=c*_-o*h-l*d-u*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),h=o(s/2),d=l(i/2),f=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*c*h+u*f*_,this._y=u*f*h-d*c*_,this._z=u*c*_+d*f*h,this._w=u*c*h-d*f*_;break;case"YXZ":this._x=d*c*h+u*f*_,this._y=u*f*h-d*c*_,this._z=u*c*_-d*f*h,this._w=u*c*h+d*f*_;break;case"ZXY":this._x=d*c*h-u*f*_,this._y=u*f*h+d*c*_,this._z=u*c*_+d*f*h,this._w=u*c*h-d*f*_;break;case"ZYX":this._x=d*c*h-u*f*_,this._y=u*f*h+d*c*_,this._z=u*c*_-d*f*h,this._w=u*c*h+d*f*_;break;case"YZX":this._x=d*c*h+u*f*_,this._y=u*f*h+d*c*_,this._z=u*c*_-d*f*h,this._w=u*c*h-d*f*_;break;case"XZY":this._x=d*c*h-u*f*_,this._y=u*f*h-d*c*_,this._z=u*c*_+d*f*h,this._w=u*c*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(s-u)*f,this._z=(a-r)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(c-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+u)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(s-u)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-r)/f,this._x=(s+u)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),h=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+l*u+a*h-o*c,this.y=i+l*c+o*u-s*h,this.z=r+l*h+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Oa.copy(this).projectOnVector(e),this.sub(Oa)}reflect(e){return this.sub(Oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oa=new I,nu=new zt;class Ni{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(s,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mo.copy(i.boundingBox)),Mo.applyMatrix4(e.matrixWorld),this.union(Mo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),So.subVectors(this.max,Ds),Or.subVectors(e.a,Ds),kr.subVectors(e.b,Ds),Br.subVectors(e.c,Ds),Bi.subVectors(kr,Or),zi.subVectors(Br,kr),or.subVectors(Or,Br);let t=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-or.z,or.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,or.z,0,-or.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-or.y,or.x,0];return!ka(t,Or,kr,Br,So)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,Or,kr,Br,So))?!1:(yo.crossVectors(Bi,zi),t=[yo.x,yo.y,yo.z],ka(t,Or,kr,Br,So))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new I,new I,new I,new I,new I,new I,new I,new I],Yn=new I,Mo=new Ni,Or=new I,kr=new I,Br=new I,Bi=new I,zi=new I,or=new I,Ds=new I,So=new I,yo=new I,ar=new I;function ka(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ar.fromArray(n,s);const o=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),l=e.dot(ar),u=t.dot(ar),c=i.dot(ar);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const Kp=new Ni,Us=new I,Ba=new I;class Ts{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Kp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);const t=Us.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Us,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(Ba)),this.expandByPoint(Us.copy(e.center).sub(Ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new I,za=new I,Eo=new I,Hi=new I,Ha=new I,bo=new I,Ga=new I;class sc{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){za.copy(e).add(t).multiplyScalar(.5),Eo.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(za);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Eo),o=Hi.dot(this.direction),l=-Hi.dot(Eo),u=Hi.lengthSq(),c=Math.abs(1-a*a);let h,d,f,_;if(c>0)if(h=a*l-o,d=a*o-l,_=s*c,h>=0)if(d>=-_)if(d<=_){const v=1/c;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+u}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+u;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+u):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+u):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+u);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(za).addScaledVector(Eo,d),f}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,i,r,s){Ha.subVectors(t,e),bo.subVectors(i,e),Ga.crossVectors(Ha,bo);let a=this.direction.dot(Ga),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,e);const l=o*this.direction.dot(bo.crossVectors(Hi,bo));if(l<0)return null;const u=o*this.direction.dot(Ha.cross(Hi));if(u<0||l+u>a)return null;const c=-o*Hi.dot(Ga);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,i,r,s,a,o,l,u,c,h,d,f,_,v,m){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u,c,h,d,f,_,v,m)}set(e,t,i,r,s,a,o,l,u,c,h,d,f,_,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=u,p[6]=c,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/zr.setFromMatrixColumn(e,0).length(),s=1/zr.setFromMatrixColumn(e,1).length(),a=1/zr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*c,f=a*h,_=o*c,v=o*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=f+_*u,t[5]=d-v*u,t[9]=-o*l,t[2]=v-d*u,t[6]=_+f*u,t[10]=a*l}else if(e.order==="YXZ"){const d=l*c,f=l*h,_=u*c,v=u*h;t[0]=d+v*o,t[4]=_*o-f,t[8]=a*u,t[1]=a*h,t[5]=a*c,t[9]=-o,t[2]=f*o-_,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*c,f=l*h,_=u*c,v=u*h;t[0]=d-v*o,t[4]=-a*h,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*c,t[9]=v-d*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*c,f=a*h,_=o*c,v=o*h;t[0]=l*c,t[4]=_*u-f,t[8]=d*u+v,t[1]=l*h,t[5]=v*u+d,t[9]=f*u-_,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*u,_=o*l,v=o*u;t[0]=l*c,t[4]=v-d*h,t[8]=_*h+f,t[1]=h,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=f*h+_,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,f=a*u,_=o*l,v=o*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=d*h+v,t[5]=a*c,t[9]=f*h-_,t[2]=_*h-f,t[6]=o*c,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jp,e,Zp)}lookAt(e,t,i){const r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Gi.crossVectors(i,Rn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Gi.crossVectors(i,Rn)),Gi.normalize(),wo.crossVectors(Rn,Gi),r[0]=Gi.x,r[4]=wo.x,r[8]=Rn.x,r[1]=Gi.y,r[5]=wo.y,r[9]=Rn.y,r[2]=Gi.z,r[6]=wo.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],f=i[13],_=i[2],v=i[6],m=i[10],p=i[14],x=i[3],M=i[7],E=i[11],P=i[15],T=r[0],y=r[4],A=r[8],D=r[12],g=r[1],S=r[5],R=r[9],L=r[13],F=r[2],N=r[6],U=r[10],Y=r[14],G=r[3],se=r[7],re=r[11],ie=r[15];return s[0]=a*T+o*g+l*F+u*G,s[4]=a*y+o*S+l*N+u*se,s[8]=a*A+o*R+l*U+u*re,s[12]=a*D+o*L+l*Y+u*ie,s[1]=c*T+h*g+d*F+f*G,s[5]=c*y+h*S+d*N+f*se,s[9]=c*A+h*R+d*U+f*re,s[13]=c*D+h*L+d*Y+f*ie,s[2]=_*T+v*g+m*F+p*G,s[6]=_*y+v*S+m*N+p*se,s[10]=_*A+v*R+m*U+p*re,s[14]=_*D+v*L+m*Y+p*ie,s[3]=x*T+M*g+E*F+P*G,s[7]=x*y+M*S+E*N+P*se,s[11]=x*A+M*R+E*U+P*re,s[15]=x*D+M*L+E*Y+P*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],f=e[14],_=e[3],v=e[7],m=e[11],p=e[15];return _*(+s*l*h-r*u*h-s*o*d+i*u*d+r*o*f-i*l*f)+v*(+t*l*f-t*u*d+s*a*d-r*a*f+r*u*c-s*l*c)+m*(+t*u*h-t*o*f-s*a*h+i*a*f+s*o*c-i*u*c)+p*(-r*o*c-t*l*h+t*o*d+r*a*h-i*a*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],f=e[11],_=e[12],v=e[13],m=e[14],p=e[15],x=h*m*u-v*d*u+v*l*f-o*m*f-h*l*p+o*d*p,M=_*d*u-c*m*u-_*l*f+a*m*f+c*l*p-a*d*p,E=c*v*u-_*h*u+_*o*f-a*v*f-c*o*p+a*h*p,P=_*h*l-c*v*l-_*o*d+a*v*d+c*o*m-a*h*m,T=t*x+i*M+r*E+s*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/T;return e[0]=x*y,e[1]=(v*d*s-h*m*s-v*r*f+i*m*f+h*r*p-i*d*p)*y,e[2]=(o*m*s-v*l*s+v*r*u-i*m*u-o*r*p+i*l*p)*y,e[3]=(h*l*s-o*d*s-h*r*u+i*d*u+o*r*f-i*l*f)*y,e[4]=M*y,e[5]=(c*m*s-_*d*s+_*r*f-t*m*f-c*r*p+t*d*p)*y,e[6]=(_*l*s-a*m*s-_*r*u+t*m*u+a*r*p-t*l*p)*y,e[7]=(a*d*s-c*l*s+c*r*u-t*d*u-a*r*f+t*l*f)*y,e[8]=E*y,e[9]=(_*h*s-c*v*s-_*i*f+t*v*f+c*i*p-t*h*p)*y,e[10]=(a*v*s-_*o*s+_*i*u-t*v*u-a*i*p+t*o*p)*y,e[11]=(c*o*s-a*h*s-c*i*u+t*h*u+a*i*f-t*o*f)*y,e[12]=P*y,e[13]=(c*v*r-_*h*r+_*i*d-t*v*d-c*i*m+t*h*m)*y,e[14]=(_*o*r-a*v*r-_*i*l+t*v*l+a*i*m-t*o*m)*y,e[15]=(a*h*r-c*o*r+c*i*l-t*h*l-a*i*d+t*o*d)*y,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,h=o+o,d=s*u,f=s*c,_=s*h,v=a*c,m=a*h,p=o*h,x=l*u,M=l*c,E=l*h,P=i.x,T=i.y,y=i.z;return r[0]=(1-(v+p))*P,r[1]=(f+E)*P,r[2]=(_-M)*P,r[3]=0,r[4]=(f-E)*T,r[5]=(1-(d+p))*T,r[6]=(m+x)*T,r[7]=0,r[8]=(_+M)*y,r[9]=(m-x)*y,r[10]=(1-(d+v))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=zr.set(r[0],r[1],r[2]).length();const a=zr.set(r[4],r[5],r[6]).length(),o=zr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$n.copy(this);const u=1/s,c=1/a,h=1/o;return $n.elements[0]*=u,$n.elements[1]*=u,$n.elements[2]*=u,$n.elements[4]*=c,$n.elements[5]*=c,$n.elements[6]*=c,$n.elements[8]*=h,$n.elements[9]*=h,$n.elements[10]*=h,t.setFromRotationMatrix($n),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Ci){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,_;if(o===Ci)f=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ha)f=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Ci){const l=this.elements,u=1/(t-e),c=1/(i-r),h=1/(a-s),d=(t+e)*u,f=(i+r)*c;let _,v;if(o===Ci)_=(a+s)*h,v=-2*h;else if(o===ha)_=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const zr=new I,$n=new Ve,jp=new I(0,0,0),Zp=new I(1,1,1),Gi=new I,wo=new I,Rn=new I,iu=new Ve,ru=new zt;class en{constructor(e=0,t=0,i=0,r=en.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(xn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(iu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ru.setFromEuler(this),this.setFromQuaternion(ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class oc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jp=0;const su=new I,Hr=new zt,Si=new Ve,To=new I,Ns=new I,Qp=new I,em=new zt,ou=new I(1,0,0),au=new I(0,1,0),lu=new I(0,0,1),cu={type:"added"},tm={type:"removed"},Gr={type:"childadded",child:null},Va={type:"childremoved",child:null};class Ht extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new I,t=new en,i=new zt,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Xe}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,t){return Hr.setFromAxisAngle(e,t),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(ou,e)}rotateY(e){return this.rotateOnAxis(au,e)}rotateZ(e){return this.rotateOnAxis(lu,e)}translateOnAxis(e,t){return su.copy(e).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ou,e)}translateY(e){return this.translateOnAxis(au,e)}translateZ(e){return this.translateOnAxis(lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?To.copy(e):To.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Ns,To,this.up):Si.lookAt(To,Ns,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(Si),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cu),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tm),Va.child=e,this.dispatchEvent(Va),Va.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cu),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,Qp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,em,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new I(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new I,yi=new I,Wa=new I,Ei=new I,Vr=new I,Wr=new I,uu=new I,Xa=new I,qa=new I,Ya=new I,$a=new St,Ka=new St,ja=new St;class ei{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Kn.subVectors(e,t),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Kn.subVectors(r,t),yi.subVectors(i,t),Wa.subVectors(e,t);const a=Kn.dot(Kn),o=Kn.dot(yi),l=Kn.dot(Wa),u=yi.dot(yi),c=yi.dot(Wa),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(u*l-o*c)*d,_=(a*c-o*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return $a.setScalar(0),Ka.setScalar(0),ja.setScalar(0),$a.fromBufferAttribute(e,t),Ka.fromBufferAttribute(e,i),ja.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector($a,s.x),a.addScaledVector(Ka,s.y),a.addScaledVector(ja,s.z),a}static isFrontFacing(e,t,i,r){return Kn.subVectors(i,t),yi.subVectors(e,t),Kn.cross(yi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Kn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ei.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Vr.subVectors(r,i),Wr.subVectors(s,i),Xa.subVectors(e,i);const l=Vr.dot(Xa),u=Wr.dot(Xa);if(l<=0&&u<=0)return t.copy(i);qa.subVectors(e,r);const c=Vr.dot(qa),h=Wr.dot(qa);if(c>=0&&h<=c)return t.copy(r);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(Vr,a);Ya.subVectors(e,s);const f=Vr.dot(Ya),_=Wr.dot(Ya);if(_>=0&&f<=_)return t.copy(s);const v=f*u-l*_;if(v<=0&&u>=0&&_<=0)return o=u/(u-_),t.copy(i).addScaledVector(Wr,o);const m=c*_-f*h;if(m<=0&&h-c>=0&&f-_>=0)return uu.subVectors(s,r),o=(h-c)/(h-c+(f-_)),t.copy(r).addScaledVector(uu,o);const p=1/(m+v+d);return a=v*p,o=d*p,t.copy(i).addScaledVector(Vr,a).addScaledVector(Wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function Za(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=at.workingColorSpace){if(e=rc(e,1),t=xn(t,0,1),i=xn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Za(a,s,e+1/3),this.g=Za(a,s,e),this.b=Za(a,s,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,t=Pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pn){const i=wd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return at.fromWorkingColorSpace(rn.copy(this),e),Math.round(xn(rn.r*255,0,255))*65536+Math.round(xn(rn.g*255,0,255))*256+Math.round(xn(rn.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(rn.copy(this),t);const i=rn.r,r=rn.g,s=rn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=c<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Pn){at.fromWorkingColorSpace(rn.copy(this),e);const t=rn.r,i=rn.g,r=rn.b;return e!==Pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(Ao);const i=Ks(Vi.h,Ao.h,t),r=Ks(Vi.s,Ao.s,t),s=Ks(Vi.l,Ao.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new Qe;Qe.NAMES=wd;let nm=0;class ao extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Pr(),this.name="",this.type="Material",this.blending=cs,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ql,this.blendDst=Yl,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nr,this.stencilZFail=Nr,this.stencilZPass=Nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ql&&(i.blendSrc=this.blendSrc),this.blendDst!==Yl&&(i.blendDst=this.blendDst),this.blendEquation!==Mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class dn extends ao{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new I,Ro=new nt;class An{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=jc,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ro.fromBufferAttribute(this,t),Ro.applyMatrix3(e),this.setXY(t,Ro.x,Ro.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ns(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jc&&(e.usage=this.usage),e}}class ac extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Td extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class hn extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}}let im=0;const Fn=new Ve,Ja=new Ht,Xr=new I,Cn=new Ni,Fs=new Ni,qt=new I;class ii extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Pr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yd(e)?Td:ac)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,i){return Fn.makeTranslation(e,t,i),this.applyMatrix4(Fn),this}scale(e,t,i){return Fn.makeScale(e,t,i),this.applyMatrix4(Fn),this}lookAt(e){return Ja.lookAt(e),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new hn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Fs.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(Cn.min,Fs.min),Cn.expandByPoint(qt),qt.addVectors(Cn.max,Fs.max),Cn.expandByPoint(qt)):(Cn.expandByPoint(Fs.min),Cn.expandByPoint(Fs.max))}Cn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)qt.fromBufferAttribute(o,u),l&&(Xr.fromBufferAttribute(e,u),qt.add(Xr)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<i.count;A++)o[A]=new I,l[A]=new I;const u=new I,c=new I,h=new I,d=new nt,f=new nt,_=new nt,v=new I,m=new I;function p(A,D,g){u.fromBufferAttribute(i,A),c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,g),d.fromBufferAttribute(s,A),f.fromBufferAttribute(s,D),_.fromBufferAttribute(s,g),c.sub(u),h.sub(u),f.sub(d),_.sub(d);const S=1/(f.x*_.y-_.x*f.y);isFinite(S)&&(v.copy(c).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(S),m.copy(h).multiplyScalar(f.x).addScaledVector(c,-_.x).multiplyScalar(S),o[A].add(v),o[D].add(v),o[g].add(v),l[A].add(m),l[D].add(m),l[g].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let A=0,D=x.length;A<D;++A){const g=x[A],S=g.start,R=g.count;for(let L=S,F=S+R;L<F;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const M=new I,E=new I,P=new I,T=new I;function y(A){P.fromBufferAttribute(r,A),T.copy(P);const D=o[A];M.copy(D),M.sub(P.multiplyScalar(P.dot(D))).normalize(),E.crossVectors(T,D);const S=E.dot(l[A])<0?-1:1;a.setXYZW(A,M.x,M.y,M.z,S)}for(let A=0,D=x.length;A<D;++A){const g=x[A],S=g.start,R=g.count;for(let L=S,F=S+R;L<F;L+=3)y(e.getX(L+0)),y(e.getX(L+1)),y(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,u=new I,c=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),c.subVectors(a,s),h.subVectors(r,s),c.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,m),o.add(c),l.add(c),u.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,s),h.subVectors(r,s),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,h=o.normalized,d=new u.constructor(l.length*c);let f=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*c;for(let p=0;p<c;p++)d[_++]=u[f++]}return new An(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ii,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,h=u.length;c<h;c++){const d=u[c],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const f=u[h];c.push(f.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let d=0,f=h.length;d<f;d++)c.push(h[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hu=new Ve,lr=new sc,Co=new Ts,du=new I,Lo=new I,Po=new I,Io=new I,Qa=new I,Do=new I,fu=new I,Uo=new I;class vt extends Ht{constructor(e=new ii,t=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Do.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],h=s[l];c!==0&&(Qa.fromBufferAttribute(h,e),a?Do.addScaledVector(Qa,c):Do.addScaledVector(Qa.sub(t),c))}t.add(Do)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(s),lr.copy(e.ray).recast(e.near),!(Co.containsPoint(lr.origin)===!1&&(lr.intersectSphere(Co,du)===null||lr.origin.distanceToSquared(du)>(e.far-e.near)**2))&&(hu.copy(s).invert(),lr.copy(e.ray).applyMatrix4(hu),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,lr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let E=x,P=M;E<P;E+=3){const T=o.getX(E),y=o.getX(E+1),A=o.getX(E+2);r=No(this,p,e,i,u,c,h,T,y,A),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=_,p=v;m<p;m+=3){const x=o.getX(m),M=o.getX(m+1),E=o.getX(m+2);r=No(this,a,e,i,u,c,h,x,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],p=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let E=x,P=M;E<P;E+=3){const T=E,y=E+1,A=E+2;r=No(this,p,e,i,u,c,h,T,y,A),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=_,p=v;m<p;m+=3){const x=m,M=m+1,E=m+2;r=No(this,a,e,i,u,c,h,x,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function rm(n,e,t,i,r,s,a,o){let l;if(e.side===Tn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Di,o),l===null)return null;Uo.copy(o),Uo.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Uo);return u<t.near||u>t.far?null:{distance:u,point:Uo.clone(),object:n}}function No(n,e,t,i,r,s,a,o,l,u){n.getVertexPosition(o,Lo),n.getVertexPosition(l,Po),n.getVertexPosition(u,Io);const c=rm(n,e,t,i,Lo,Po,Io,fu);if(c){const h=new I;ei.getBarycoord(fu,Lo,Po,Io,h),r&&(c.uv=ei.getInterpolatedAttribute(r,o,l,u,h,new nt)),s&&(c.uv1=ei.getInterpolatedAttribute(s,o,l,u,h,new nt)),a&&(c.normal=ei.getInterpolatedAttribute(a,o,l,u,h,new I),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new I,materialIndex:0};ei.getNormal(Lo,Po,Io,d.normal),c.face=d,c.barycoord=h}return c}class cn extends ii{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new hn(u,3)),this.setAttribute("normal",new hn(c,3)),this.setAttribute("uv",new hn(h,2));function _(v,m,p,x,M,E,P,T,y,A,D){const g=E/y,S=P/A,R=E/2,L=P/2,F=T/2,N=y+1,U=A+1;let Y=0,G=0;const se=new I;for(let re=0;re<U;re++){const ie=re*S-L;for(let Me=0;Me<N;Me++){const Ce=Me*g-R;se[v]=Ce*x,se[m]=ie*M,se[p]=F,u.push(se.x,se.y,se.z),se[v]=0,se[m]=0,se[p]=T>0?1:-1,c.push(se.x,se.y,se.z),h.push(Me/y),h.push(1-re/A),Y+=1}}for(let re=0;re<A;re++)for(let ie=0;ie<y;ie++){const Me=d+ie+N*re,Ce=d+ie+N*(re+1),z=d+(ie+1)+N*(re+1),q=d+(ie+1)+N*re;l.push(Me,Ce,q),l.push(Ce,z,q),G+=6}o.addGroup(f,G,D),f+=G,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function _n(n){const e={};for(let t=0;t<n.length;t++){const i=Ss(n[t]);for(const r in i)e[r]=i[r]}return e}function sm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ad(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const om={clone:Ss,merge:_n};var am=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends ao{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=am,this.fragmentShader=lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=sm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Rd extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new I,pu=new nt,mu=new nt;class Mn extends Rd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eo*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,pu,mu),t.subVectors(mu,pu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($s*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qr=-90,Yr=1;class cm extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(qr,Yr,e,t);r.layers=this.layers,this.add(r);const s=new Mn(qr,Yr,e,t);s.layers=this.layers,this.add(s);const a=new Mn(qr,Yr,e,t);a.layers=this.layers,this.add(a);const o=new Mn(qr,Yr,e,t);o.layers=this.layers,this.add(o);const l=new Mn(qr,Yr,e,t);l.layers=this.layers,this.add(l);const u=new Mn(qr,Yr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(h,d,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Cd extends un{constructor(e,t,i,r,s,a,o,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:_s,super(e,t,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class um extends Cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Cd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new cn(5,5,5),s=new nr({name:"CubemapFromEquirect",uniforms:Ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:Qi});s.uniforms.tEquirect.value=t;const a=new vt(r,s),o=t.minFilter;return t.minFilter===Zi&&(t.minFilter=zn),new cm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const el=new I,hm=new I,dm=new Xe;class gr{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=el.subVectors(i,t).cross(hm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(el),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||dm.getNormalMatrix(e),r=this.coplanarPoint(el).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new Ts,Fo=new I;class lc{constructor(e=new gr,t=new gr,i=new gr,r=new gr,s=new gr,a=new gr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ci){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],c=r[5],h=r[6],d=r[7],f=r[8],_=r[9],v=r[10],m=r[11],p=r[12],x=r[13],M=r[14],E=r[15];if(i[0].setComponents(l-s,d-u,m-f,E-p).normalize(),i[1].setComponents(l+s,d+u,m+f,E+p).normalize(),i[2].setComponents(l+a,d+c,m+_,E+x).normalize(),i[3].setComponents(l-a,d-c,m-_,E-x).normalize(),i[4].setComponents(l-o,d-h,m-v,E-M).normalize(),t===Ci)i[5].setComponents(l+o,d+h,m+v,E+M).normalize();else if(t===ha)i[5].setComponents(o,h,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Fo.x=r.normal.x>0?e.max.x:e.min.x,Fo.y=r.normal.y>0?e.max.y:e.min.y,Fo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ld(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function fm(n){const e=new WeakMap;function t(o,l){const u=o.array,c=o.usage,h=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,c),o.onUploadCallback();let f;if(u instanceof Float32Array)f=n.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=n.SHORT;else if(u instanceof Uint32Array)f=n.UNSIGNED_INT;else if(u instanceof Int32Array)f=n.INT;else if(u instanceof Int8Array)f=n.BYTE;else if(u instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,u){const c=l.array,h=l.updateRanges;if(n.bindBuffer(u,o),h.length===0)n.bufferSubData(u,0,c);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],v=h[f];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const v=h[f];n.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}class lo extends ii{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,h=e/o,d=t/l,f=[],_=[],v=[],m=[];for(let p=0;p<c;p++){const x=p*d-a;for(let M=0;M<u;M++){const E=M*h-s;_.push(E,-x,0),v.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const M=x+u*p,E=x+u*(p+1),P=x+1+u*(p+1),T=x+1+u*p;f.push(M,E,T),f.push(E,P,T)}this.setIndex(f),this.setAttribute("position",new hn(_,3)),this.setAttribute("normal",new hn(v,3)),this.setAttribute("uv",new hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.width,e.height,e.widthSegments,e.heightSegments)}}var pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mm=`#ifdef USE_ALPHAHASH
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
#endif`,gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mm=`#ifdef USE_AOMAP
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
#endif`,Sm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ym=`#ifdef USE_BATCHING
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
#endif`,Em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Am=`#ifdef USE_IRIDESCENCE
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
#endif`,Rm=`#ifdef USE_BUMPMAP
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
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Om=`#define PI 3.141592653589793
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
} // validated`,km=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bm=`vec3 transformedNormal = objectNormal;
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
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xm=`
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
}`,qm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$m=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
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
#endif`,Zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tg=`#ifdef USE_GRADIENTMAP
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
}`,ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sg=`uniform bool receiveShadow;
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
#endif`,og=`#ifdef USE_ENVMAP
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
#endif`,ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hg=`PhysicalMaterial material;
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
#endif`,dg=`struct PhysicalMaterial {
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
}`,fg=`
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
#endif`,pg=`#if defined( RE_IndirectDiffuse )
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
#endif`,mg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_g=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Eg=`#if defined( USE_POINTS_UV )
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
#endif`,bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`#ifdef USE_MORPHTARGETS
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
#endif`,Lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fg=`#ifdef USE_NORMALMAP
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
#endif`,Og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jg=`float getShadowMask() {
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
}`,Qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e_=`#ifdef USE_SKINNING
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
#endif`,t_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n_=`#ifdef USE_SKINNING
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
#endif`,i_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a_=`#ifdef USE_TRANSMISSION
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
#endif`,l_=`#ifdef USE_TRANSMISSION
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
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const f_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p_=`uniform sampler2D t2D;
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
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x_=`#include <common>
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
}`,M_=`#if DEPTH_PACKING == 3200
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
}`,S_=`#define DISTANCE
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
}`,y_=`#define DISTANCE
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w_=`uniform float scale;
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
}`,T_=`uniform vec3 diffuse;
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
}`,A_=`#include <common>
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
}`,R_=`uniform vec3 diffuse;
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
}`,C_=`#define LAMBERT
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
}`,L_=`#define LAMBERT
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
}`,P_=`#define MATCAP
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
}`,I_=`#define MATCAP
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
}`,D_=`#define NORMAL
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
}`,U_=`#define NORMAL
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
}`,N_=`#define PHONG
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
}`,F_=`#define PHONG
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
}`,O_=`#define STANDARD
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
}`,k_=`#define STANDARD
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
}`,B_=`#define TOON
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
}`,z_=`#define TOON
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
}`,H_=`uniform float size;
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
}`,G_=`uniform vec3 diffuse;
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
}`,V_=`#include <common>
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
}`,W_=`uniform vec3 color;
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
}`,X_=`uniform float rotation;
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
}`,q_=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:pm,alphahash_pars_fragment:mm,alphamap_fragment:gm,alphamap_pars_fragment:_m,alphatest_fragment:vm,alphatest_pars_fragment:xm,aomap_fragment:Mm,aomap_pars_fragment:Sm,batching_pars_vertex:ym,batching_vertex:Em,begin_vertex:bm,beginnormal_vertex:wm,bsdfs:Tm,iridescence_fragment:Am,bumpmap_pars_fragment:Rm,clipping_planes_fragment:Cm,clipping_planes_pars_fragment:Lm,clipping_planes_pars_vertex:Pm,clipping_planes_vertex:Im,color_fragment:Dm,color_pars_fragment:Um,color_pars_vertex:Nm,color_vertex:Fm,common:Om,cube_uv_reflection_fragment:km,defaultnormal_vertex:Bm,displacementmap_pars_vertex:zm,displacementmap_vertex:Hm,emissivemap_fragment:Gm,emissivemap_pars_fragment:Vm,colorspace_fragment:Wm,colorspace_pars_fragment:Xm,envmap_fragment:qm,envmap_common_pars_fragment:Ym,envmap_pars_fragment:$m,envmap_pars_vertex:Km,envmap_physical_pars_fragment:og,envmap_vertex:jm,fog_vertex:Zm,fog_pars_vertex:Jm,fog_fragment:Qm,fog_pars_fragment:eg,gradientmap_pars_fragment:tg,lightmap_pars_fragment:ng,lights_lambert_fragment:ig,lights_lambert_pars_fragment:rg,lights_pars_begin:sg,lights_toon_fragment:ag,lights_toon_pars_fragment:lg,lights_phong_fragment:cg,lights_phong_pars_fragment:ug,lights_physical_fragment:hg,lights_physical_pars_fragment:dg,lights_fragment_begin:fg,lights_fragment_maps:pg,lights_fragment_end:mg,logdepthbuf_fragment:gg,logdepthbuf_pars_fragment:_g,logdepthbuf_pars_vertex:vg,logdepthbuf_vertex:xg,map_fragment:Mg,map_pars_fragment:Sg,map_particle_fragment:yg,map_particle_pars_fragment:Eg,metalnessmap_fragment:bg,metalnessmap_pars_fragment:wg,morphinstance_vertex:Tg,morphcolor_vertex:Ag,morphnormal_vertex:Rg,morphtarget_pars_vertex:Cg,morphtarget_vertex:Lg,normal_fragment_begin:Pg,normal_fragment_maps:Ig,normal_pars_fragment:Dg,normal_pars_vertex:Ug,normal_vertex:Ng,normalmap_pars_fragment:Fg,clearcoat_normal_fragment_begin:Og,clearcoat_normal_fragment_maps:kg,clearcoat_pars_fragment:Bg,iridescence_pars_fragment:zg,opaque_fragment:Hg,packing:Gg,premultiplied_alpha_fragment:Vg,project_vertex:Wg,dithering_fragment:Xg,dithering_pars_fragment:qg,roughnessmap_fragment:Yg,roughnessmap_pars_fragment:$g,shadowmap_pars_fragment:Kg,shadowmap_pars_vertex:jg,shadowmap_vertex:Zg,shadowmask_pars_fragment:Jg,skinbase_vertex:Qg,skinning_pars_vertex:e_,skinning_vertex:t_,skinnormal_vertex:n_,specularmap_fragment:i_,specularmap_pars_fragment:r_,tonemapping_fragment:s_,tonemapping_pars_fragment:o_,transmission_fragment:a_,transmission_pars_fragment:l_,uv_pars_fragment:c_,uv_pars_vertex:u_,uv_vertex:h_,worldpos_vertex:d_,background_vert:f_,background_frag:p_,backgroundCube_vert:m_,backgroundCube_frag:g_,cube_vert:__,cube_frag:v_,depth_vert:x_,depth_frag:M_,distanceRGBA_vert:S_,distanceRGBA_frag:y_,equirect_vert:E_,equirect_frag:b_,linedashed_vert:w_,linedashed_frag:T_,meshbasic_vert:A_,meshbasic_frag:R_,meshlambert_vert:C_,meshlambert_frag:L_,meshmatcap_vert:P_,meshmatcap_frag:I_,meshnormal_vert:D_,meshnormal_frag:U_,meshphong_vert:N_,meshphong_frag:F_,meshphysical_vert:O_,meshphysical_frag:k_,meshtoon_vert:B_,meshtoon_frag:z_,points_vert:H_,points_frag:G_,shadow_vert:V_,shadow_frag:W_,sprite_vert:X_,sprite_frag:q_},de={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},li={basic:{uniforms:_n([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:_n([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Qe(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:_n([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:_n([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:_n([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Qe(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:_n([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:_n([de.points,de.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:_n([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:_n([de.common,de.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:_n([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:_n([de.sprite,de.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:_n([de.common,de.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:_n([de.lights,de.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};li.physical={uniforms:_n([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Oo={r:0,b:0,g:0},ur=new en,Y_=new Ve;function $_(n,e,t,i,r,s,a){const o=new Qe(0);let l=s===!0?0:1,u,c,h=null,d=0,f=null;function _(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?t:e).get(M)),M}function v(x){let M=!1;const E=_(x);E===null?p(o,l):E&&E.isColor&&(p(E,1),M=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,M){const E=_(M);E&&(E.isCubeTexture||E.mapping===ga)?(c===void 0&&(c=new vt(new cn(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:Ss(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,T,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),ur.copy(M.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Y_.makeRotationFromEuler(ur)),c.material.toneMapped=at.getTransfer(E.colorSpace)!==Mt,(h!==E||d!==E.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=E,d=E.version,f=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new vt(new lo(2,2),new nr({name:"BackgroundMaterial",uniforms:Ss(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.toneMapped=at.getTransfer(E.colorSpace)!==Mt,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,f=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function p(x,M){x.getRGB(Oo,Ad(n)),i.buffers.color.setClear(Oo.r,Oo.g,Oo.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:v,addToRenderList:m}}function K_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(g,S,R,L,F){let N=!1;const U=h(L,R,S);s!==U&&(s=U,u(s.object)),N=f(g,L,R,F),N&&_(g,L,R,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,E(g,S,R,L),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function u(g){return n.bindVertexArray(g)}function c(g){return n.deleteVertexArray(g)}function h(g,S,R){const L=R.wireframe===!0;let F=i[g.id];F===void 0&&(F={},i[g.id]=F);let N=F[S.id];N===void 0&&(N={},F[S.id]=N);let U=N[L];return U===void 0&&(U=d(l()),N[L]=U),U}function d(g){const S=[],R=[],L=[];for(let F=0;F<t;F++)S[F]=0,R[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:R,attributeDivisors:L,object:g,attributes:{},index:null}}function f(g,S,R,L){const F=s.attributes,N=S.attributes;let U=0;const Y=R.getAttributes();for(const G in Y)if(Y[G].location>=0){const re=F[G];let ie=N[G];if(ie===void 0&&(G==="instanceMatrix"&&g.instanceMatrix&&(ie=g.instanceMatrix),G==="instanceColor"&&g.instanceColor&&(ie=g.instanceColor)),re===void 0||re.attribute!==ie||ie&&re.data!==ie.data)return!0;U++}return s.attributesNum!==U||s.index!==L}function _(g,S,R,L){const F={},N=S.attributes;let U=0;const Y=R.getAttributes();for(const G in Y)if(Y[G].location>=0){let re=N[G];re===void 0&&(G==="instanceMatrix"&&g.instanceMatrix&&(re=g.instanceMatrix),G==="instanceColor"&&g.instanceColor&&(re=g.instanceColor));const ie={};ie.attribute=re,re&&re.data&&(ie.data=re.data),F[G]=ie,U++}s.attributes=F,s.attributesNum=U,s.index=L}function v(){const g=s.newAttributes;for(let S=0,R=g.length;S<R;S++)g[S]=0}function m(g){p(g,0)}function p(g,S){const R=s.newAttributes,L=s.enabledAttributes,F=s.attributeDivisors;R[g]=1,L[g]===0&&(n.enableVertexAttribArray(g),L[g]=1),F[g]!==S&&(n.vertexAttribDivisor(g,S),F[g]=S)}function x(){const g=s.newAttributes,S=s.enabledAttributes;for(let R=0,L=S.length;R<L;R++)S[R]!==g[R]&&(n.disableVertexAttribArray(R),S[R]=0)}function M(g,S,R,L,F,N,U){U===!0?n.vertexAttribIPointer(g,S,R,F,N):n.vertexAttribPointer(g,S,R,L,F,N)}function E(g,S,R,L){v();const F=L.attributes,N=R.getAttributes(),U=S.defaultAttributeValues;for(const Y in N){const G=N[Y];if(G.location>=0){let se=F[Y];if(se===void 0&&(Y==="instanceMatrix"&&g.instanceMatrix&&(se=g.instanceMatrix),Y==="instanceColor"&&g.instanceColor&&(se=g.instanceColor)),se!==void 0){const re=se.normalized,ie=se.itemSize,Me=e.get(se);if(Me===void 0)continue;const Ce=Me.buffer,z=Me.type,q=Me.bytesPerElement,K=z===n.INT||z===n.UNSIGNED_INT||se.gpuType===Z0;if(se.isInterleavedBufferAttribute){const Z=se.data,ge=Z.stride,Te=se.offset;if(Z.isInstancedInterleavedBuffer){for(let ke=0;ke<G.locationSize;ke++)p(G.location+ke,Z.meshPerAttribute);g.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ke=0;ke<G.locationSize;ke++)m(G.location+ke);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let ke=0;ke<G.locationSize;ke++)M(G.location+ke,ie/G.locationSize,z,re,ge*q,(Te+ie/G.locationSize*ke)*q,K)}else{if(se.isInstancedBufferAttribute){for(let Z=0;Z<G.locationSize;Z++)p(G.location+Z,se.meshPerAttribute);g.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Z=0;Z<G.locationSize;Z++)m(G.location+Z);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let Z=0;Z<G.locationSize;Z++)M(G.location+Z,ie/G.locationSize,z,re,ie*q,ie/G.locationSize*Z*q,K)}}else if(U!==void 0){const re=U[Y];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(G.location,re);break;case 3:n.vertexAttrib3fv(G.location,re);break;case 4:n.vertexAttrib4fv(G.location,re);break;default:n.vertexAttrib1fv(G.location,re)}}}}x()}function P(){A();for(const g in i){const S=i[g];for(const R in S){const L=S[R];for(const F in L)c(L[F].object),delete L[F];delete S[R]}delete i[g]}}function T(g){if(i[g.id]===void 0)return;const S=i[g.id];for(const R in S){const L=S[R];for(const F in L)c(L[F].object),delete L[F];delete S[R]}delete i[g.id]}function y(g){for(const S in i){const R=i[S];if(R[g.id]===void 0)continue;const L=R[g.id];for(const F in L)c(L[F].object),delete L[F];delete R[g.id]}}function A(){D(),a=!0,s!==r&&(s=r,u(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:D,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:y,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function j_(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function a(u,c,h){h!==0&&(n.drawArraysInstanced(i,u,c,h),t.update(c,i,h))}function o(u,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let f=0;for(let _=0;_<h;_++)f+=c[_];t.update(f,i,1)}function l(u,c,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<u.length;_++)a(u[_],c[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,h);let _=0;for(let v=0;v<h;v++)_+=c[v];for(let v=0;v<d.length;v++)t.update(_,i,d[v])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Z_(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(y){return!(y!==Hn&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){const A=y===so&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Ui&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==ui&&!A)}function l(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const y=e.get("EXT_clip_control");y.clipControlEXT(y.LOWER_LEFT_EXT,y.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:E,vertexTextures:P,maxSamples:T}}function J_(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new gr,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=c(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const x=s?0:i,M=x*4;let E=p.clippingState||null;l.value=E,E=c(_,d,M,f);for(let P=0;P!==M;++P)E[P]=t[P];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,d,f,_){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const p=f+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,E=f;M!==v;++M,E+=4)a.copy(h[M]).applyMatrix4(x,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Q_(n){let e=new WeakMap;function t(a,o){return o===t0?a.mapping=_s:o===n0&&(a.mapping=vs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===t0||o===n0)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new um(l.height);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class cc extends Rd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rs=4,gu=[.125,.215,.35,.446,.526,.582],Sr=20,tl=new cc,_u=new Qe;let nl=null,il=0,rl=0,sl=!1;const _r=(1+Math.sqrt(5))/2,$r=1/_r,vu=[new I(-_r,$r,0),new I(_r,$r,0),new I(-$r,0,_r),new I($r,0,_r),new I(0,_r,-$r),new I(0,_r,$r),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class xu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){nl=this._renderer.getRenderTarget(),il=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nl,il,rl),this._renderer.xr.enabled=sl,e.scissorTest=!1,ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nl=this._renderer.getRenderTarget(),il=this._renderer.getActiveCubeFace(),rl=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:so,format:Hn,colorSpace:ir,depthBuffer:!1},r=Mu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e1(s)),this._blurMaterial=t1(s,e,t)}return r}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,tl)}_sceneToCubeUV(e,t,i,r){const o=new Mn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(_u),c.toneMapping=er,c.autoClear=!1;const f=new dn({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),_=new vt(new cn,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(_u),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(u[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,u[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,u[p]));const M=this._cubeSize;ko(r,x*M,p>2?M:0,M,M),c.setRenderTarget(r),v&&c.render(_,o),c.render(e,o)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===_s||e.mapping===vs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Su());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new vt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ko(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,tl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=vu[(r-s-1)%vu.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new vt(this._lodPlanes[r],u),d=u.uniforms,f=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Sr-1),v=s/_,m=isFinite(s)?1+Math.floor(c*v):Sr;m>Sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Sr}`);const p=[];let x=0;for(let y=0;y<Sr;++y){const A=y/v,D=Math.exp(-A*A/2);p.push(D),y===0?x+=D:y<m&&(x+=2*D)}for(let y=0;y<p.length;y++)p[y]=p[y]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-i;const E=this._sizeLods[r],P=3*E*(r>M-rs?r-M+rs:0),T=4*(this._cubeSize-E);ko(t,P,T,3*E,2*E),l.setRenderTarget(t),l.render(h,tl)}}function e1(n){const e=[],t=[],i=[];let r=n;const s=n-rs+1+gu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-rs?l=gu[a-n+rs-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],f=6,_=6,v=3,m=2,p=1,x=new Float32Array(v*_*f),M=new Float32Array(m*_*f),E=new Float32Array(p*_*f);for(let T=0;T<f;T++){const y=T%3*2/3-1,A=T>2?0:-1,D=[y,A,0,y+2/3,A,0,y+2/3,A+1,0,y,A,0,y+2/3,A+1,0,y,A+1,0];x.set(D,v*_*T),M.set(d,m*_*T);const g=[T,T,T,T,T,T];E.set(g,p*_*T)}const P=new ii;P.setAttribute("position",new An(x,v)),P.setAttribute("uv",new An(M,m)),P.setAttribute("faceIndex",new An(E,p)),e.push(P),r>rs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Mu(n,e,t){const i=new Cr(n,e,t);return i.texture.mapping=ga,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ko(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function t1(n,e,t){const i=new Float32Array(Sr),r=new I(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uc(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Su(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function yu(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function uc(){return`

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
	`}function n1(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===t0||l===n0,c=l===_s||l===vs;if(u||c){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new xu(n)),h=u?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return u&&f&&f.height>0||c&&f&&r(f)?(t===null&&(t=new xu(n)),h=u?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function i1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ia("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function r1(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const _ in f){const v=f[_];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function u(h){const d=[],f=h.index,_=h.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let M=0,E=x.length;M<E;M+=3){const P=x[M+0],T=x[M+1],y=x[M+2];d.push(P,T,T,y,y,P)}}else if(_!==void 0){const x=_.array;v=_.version;for(let M=0,E=x.length/3-1;M<E;M+=3){const P=M+0,T=M+1,y=M+2;d.push(P,T,T,y,y,P)}}else return;const m=new(yd(d)?Td:ac)(d,1);m.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function c(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:c}}function s1(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function u(d,f,_){_!==0&&(n.drawElementsInstanced(i,f,s,d*a,_),t.update(f,i,_))}function c(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,i,1)}function h(d,f,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)u(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,v,0,_);let p=0;for(let x=0;x<_;x++)p+=f[x];for(let x=0;x<v.length;x++)t.update(p,i,v[x])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function o1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function a1(n,e,t){const i=new WeakMap,r=new St;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=c!==void 0?c.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let D=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;f===!0&&(M=1),_===!0&&(M=2),v===!0&&(M=3);let E=o.attributes.position.count*M,P=1;E>e.maxTextureSize&&(P=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*P*4*h),y=new bd(T,E,P,h);y.type=ui,y.needsUpdate=!0;const A=M*4;for(let g=0;g<h;g++){const S=m[g],R=p[g],L=x[g],F=E*P*4*g;for(let N=0;N<S.count;N++){const U=N*A;f===!0&&(r.fromBufferAttribute(S,N),T[F+U+0]=r.x,T[F+U+1]=r.y,T[F+U+2]=r.z,T[F+U+3]=0),_===!0&&(r.fromBufferAttribute(R,N),T[F+U+4]=r.x,T[F+U+5]=r.y,T[F+U+6]=r.z,T[F+U+7]=0),v===!0&&(r.fromBufferAttribute(L,N),T[F+U+8]=r.x,T[F+U+9]=r.y,T[F+U+10]=r.z,T[F+U+11]=L.itemSize===4?r.w:1)}}d={count:h,texture:y,size:new nt(E,P)},i.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<u.length;v++)f+=u[v];const _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function l1(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}class Pd extends un{constructor(e,t,i,r,s,a,o,l,u,c=us){if(c!==us&&c!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===us&&(i=Rr),i===void 0&&c===Ms&&(i=xs),super(null,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Id=new un,Eu=new Pd(1,1),Dd=new bd,Ud=new $p,Nd=new Cd,bu=[],wu=[],Tu=new Float32Array(16),Au=new Float32Array(9),Ru=new Float32Array(4);function As(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=bu[r];if(s===void 0&&(s=new Float32Array(r),bu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function va(n,e){let t=wu[e];t===void 0&&(t=new Int32Array(e),wu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function c1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function u1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function h1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function d1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function f1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;Ru.set(i),n.uniformMatrix2fv(this.addr,!1,Ru),Vt(t,i)}}function p1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;Au.set(i),n.uniformMatrix3fv(this.addr,!1,Au),Vt(t,i)}}function m1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,i))return;Tu.set(i),n.uniformMatrix4fv(this.addr,!1,Tu),Vt(t,i)}}function g1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function v1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function x1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function M1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function S1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function y1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function E1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function b1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Eu.compareFunction=Sd,s=Eu):s=Id,t.setTexture2D(e||s,r)}function w1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ud,r)}function T1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Nd,r)}function A1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Dd,r)}function R1(n){switch(n){case 5126:return c1;case 35664:return u1;case 35665:return h1;case 35666:return d1;case 35674:return f1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return _1;case 35668:case 35672:return v1;case 35669:case 35673:return x1;case 5125:return M1;case 36294:return S1;case 36295:return y1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return w1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return A1}}function C1(n,e){n.uniform1fv(this.addr,e)}function L1(n,e){const t=As(e,this.size,2);n.uniform2fv(this.addr,t)}function P1(n,e){const t=As(e,this.size,3);n.uniform3fv(this.addr,t)}function I1(n,e){const t=As(e,this.size,4);n.uniform4fv(this.addr,t)}function D1(n,e){const t=As(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function U1(n,e){const t=As(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function N1(n,e){const t=As(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function F1(n,e){n.uniform1iv(this.addr,e)}function O1(n,e){n.uniform2iv(this.addr,e)}function k1(n,e){n.uniform3iv(this.addr,e)}function B1(n,e){n.uniform4iv(this.addr,e)}function z1(n,e){n.uniform1uiv(this.addr,e)}function H1(n,e){n.uniform2uiv(this.addr,e)}function G1(n,e){n.uniform3uiv(this.addr,e)}function V1(n,e){n.uniform4uiv(this.addr,e)}function W1(n,e,t){const i=this.cache,r=e.length,s=va(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Id,s[a])}function X1(n,e,t){const i=this.cache,r=e.length,s=va(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ud,s[a])}function q1(n,e,t){const i=this.cache,r=e.length,s=va(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Nd,s[a])}function Y1(n,e,t){const i=this.cache,r=e.length,s=va(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Vt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Dd,s[a])}function $1(n){switch(n){case 5126:return C1;case 35664:return L1;case 35665:return P1;case 35666:return I1;case 35674:return D1;case 35675:return U1;case 35676:return N1;case 5124:case 35670:return F1;case 35667:case 35671:return O1;case 35668:case 35672:return k1;case 35669:case 35673:return B1;case 5125:return z1;case 36294:return H1;case 36295:return G1;case 36296:return V1;case 35678:case 36198:case 36298:case 36306:case 35682:return W1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return Y1}}class K1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=R1(t.type)}}class j1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$1(t.type)}}class Z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ol=/(\w+)(\])?(\[|\.)?/g;function Cu(n,e){n.seq.push(e),n.map[e.id]=e}function J1(n,e,t){const i=n.name,r=i.length;for(ol.lastIndex=0;;){const s=ol.exec(i),a=ol.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Cu(t,u===void 0?new K1(o,n,e):new j1(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Z1(o),Cu(t,h)),t=h}}}class ra{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);J1(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Lu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Q1=37297;let ev=0;function tv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function nv(n){const e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(n);let i;switch(e===t?i="":e===ua&&t===ca?i="LinearDisplayP3ToLinearSRGB":e===ca&&t===ua&&(i="LinearSRGBToLinearDisplayP3"),n){case ir:case _a:return[i,"LinearTransferOETF"];case Pn:case ic:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Pu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+tv(n.getShaderSource(e),a)}else return r}function iv(n,e){const t=nv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function rv(n,e){let t;switch(e){case sp:t="Linear";break;case op:t="Reinhard";break;case ap:t="Cineon";break;case j0:t="ACESFilmic";break;case cp:t="AgX";break;case up:t="Neutral";break;case lp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bo=new I;function sv(){at.getLuminanceCoefficients(Bo);const n=Bo.x.toFixed(4),e=Bo.y.toFixed(4),t=Bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ov(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function av(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ws(n){return n!==""}function Iu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Du(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function L0(n){return n.replace(cv,hv)}const uv=new Map;function hv(n,e){let t=We[e];if(t===void 0){const i=uv.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return L0(t)}const dv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uu(n){return n.replace(dv,fv)}function fv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function pv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ad?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===kf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function mv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _s:case vs:e="ENVMAP_TYPE_CUBE";break;case ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vs:e="ENVMAP_MODE_REFRACTION";break}return e}function _v(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ld:e="ENVMAP_BLENDING_MULTIPLY";break;case ip:e="ENVMAP_BLENDING_MIX";break;case rp:e="ENVMAP_BLENDING_ADD";break}return e}function vv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=pv(t),u=mv(t),c=gv(t),h=_v(t),d=vv(t),f=ov(t),_=av(s),v=r.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ws).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ws).join(`
`),p.length>0&&(p+=`
`)):(m=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),p=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==er?"#define TONE_MAPPING":"",t.toneMapping!==er?We.tonemapping_pars_fragment:"",t.toneMapping!==er?rv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,iv("linearToOutputTexel",t.outputColorSpace),sv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ws).join(`
`)),a=L0(a),a=Iu(a,t),a=Du(a,t),o=L0(o),o=Iu(o,t),o=Du(o,t),a=Uu(a),o=Uu(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+a,E=x+p+o,P=Lu(r,r.VERTEX_SHADER,M),T=Lu(r,r.FRAGMENT_SHADER,E);r.attachShader(v,P),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function y(S){if(n.debug.checkShaderErrors){const R=r.getProgramInfoLog(v).trim(),L=r.getShaderInfoLog(P).trim(),F=r.getShaderInfoLog(T).trim();let N=!0,U=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,P,T);else{const Y=Pu(r,P,"vertex"),G=Pu(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+R+`
`+Y+`
`+G)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(L===""||F==="")&&(U=!1);U&&(S.diagnostics={runnable:N,programLog:R,vertexShader:{log:L,prefix:m},fragmentShader:{log:F,prefix:p}})}r.deleteShader(P),r.deleteShader(T),A=new ra(r,v),D=lv(r,v)}let A;this.getUniforms=function(){return A===void 0&&y(this),A};let D;this.getAttributes=function(){return D===void 0&&y(this),D};let g=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(v,Q1)),g},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ev++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=T,this}let Mv=0;class Sv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new yv(e),t.set(e,i)),i}}class yv{constructor(e){this.id=Mv++,this.code=e,this.usedTimes=0}}function Ev(n,e,t,i,r,s,a){const o=new oc,l=new Sv,u=new Set,c=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,f=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return u.add(g),g===0?"uv":`uv${g}`}function p(g,S,R,L,F){const N=L.fog,U=F.geometry,Y=g.isMeshStandardMaterial?L.environment:null,G=(g.isMeshStandardMaterial?t:e).get(g.envMap||Y),se=G&&G.mapping===ga?G.image.height:null,re=v[g.type];g.precision!==null&&(_=r.getMaxPrecision(g.precision),_!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",_,"instead."));const ie=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Me=ie!==void 0?ie.length:0;let Ce=0;U.morphAttributes.position!==void 0&&(Ce=1),U.morphAttributes.normal!==void 0&&(Ce=2),U.morphAttributes.color!==void 0&&(Ce=3);let z,q,K,Z;if(re){const Kt=li[re];z=Kt.vertexShader,q=Kt.fragmentShader}else z=g.vertexShader,q=g.fragmentShader,l.update(g),K=l.getVertexShaderID(g),Z=l.getFragmentShaderID(g);const ge=n.getRenderTarget(),Te=F.isInstancedMesh===!0,ke=F.isBatchedMesh===!0,ze=!!g.map,qe=!!g.matcap,O=!!G,kt=!!g.aoMap,je=!!g.lightMap,Ze=!!g.bumpMap,De=!!g.normalMap,lt=!!g.displacementMap,Ne=!!g.emissiveMap,C=!!g.metalnessMap,b=!!g.roughnessMap,V=g.anisotropy>0,j=g.clearcoat>0,ne=g.dispersion>0,J=g.iridescence>0,Ae=g.sheen>0,ue=g.transmission>0,fe=V&&!!g.anisotropyMap,Ye=j&&!!g.clearcoatMap,oe=j&&!!g.clearcoatNormalMap,he=j&&!!g.clearcoatRoughnessMap,Ue=J&&!!g.iridescenceMap,Fe=J&&!!g.iridescenceThicknessMap,Ee=Ae&&!!g.sheenColorMap,Ke=Ae&&!!g.sheenRoughnessMap,Oe=!!g.specularMap,dt=!!g.specularColorMap,B=!!g.specularIntensityMap,me=ue&&!!g.transmissionMap,$=ue&&!!g.thicknessMap,ee=!!g.gradientMap,_e=!!g.alphaMap,ve=g.alphaTest>0,Je=!!g.alphaHash,Lt=!!g.extensions;let Wt=er;g.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Wt=n.toneMapping);const $e={shaderID:re,shaderType:g.type,shaderName:g.name,vertexShader:z,fragmentShader:q,defines:g.defines,customVertexShaderID:K,customFragmentShaderID:Z,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:_,batching:ke,batchingColor:ke&&F._colorsTexture!==null,instancing:Te,instancingColor:Te&&F.instanceColor!==null,instancingMorph:Te&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:ir,alphaToCoverage:!!g.alphaToCoverage,map:ze,matcap:qe,envMap:O,envMapMode:O&&G.mapping,envMapCubeUVHeight:se,aoMap:kt,lightMap:je,bumpMap:Ze,normalMap:De,displacementMap:f&&lt,emissiveMap:Ne,normalMapObjectSpace:De&&g.normalMapType===mp,normalMapTangentSpace:De&&g.normalMapType===Md,metalnessMap:C,roughnessMap:b,anisotropy:V,anisotropyMap:fe,clearcoat:j,clearcoatMap:Ye,clearcoatNormalMap:oe,clearcoatRoughnessMap:he,dispersion:ne,iridescence:J,iridescenceMap:Ue,iridescenceThicknessMap:Fe,sheen:Ae,sheenColorMap:Ee,sheenRoughnessMap:Ke,specularMap:Oe,specularColorMap:dt,specularIntensityMap:B,transmission:ue,transmissionMap:me,thicknessMap:$,gradientMap:ee,opaque:g.transparent===!1&&g.blending===cs&&g.alphaToCoverage===!1,alphaMap:_e,alphaTest:ve,alphaHash:Je,combine:g.combine,mapUv:ze&&m(g.map.channel),aoMapUv:kt&&m(g.aoMap.channel),lightMapUv:je&&m(g.lightMap.channel),bumpMapUv:Ze&&m(g.bumpMap.channel),normalMapUv:De&&m(g.normalMap.channel),displacementMapUv:lt&&m(g.displacementMap.channel),emissiveMapUv:Ne&&m(g.emissiveMap.channel),metalnessMapUv:C&&m(g.metalnessMap.channel),roughnessMapUv:b&&m(g.roughnessMap.channel),anisotropyMapUv:fe&&m(g.anisotropyMap.channel),clearcoatMapUv:Ye&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:oe&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&m(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&m(g.sheenRoughnessMap.channel),specularMapUv:Oe&&m(g.specularMap.channel),specularColorMapUv:dt&&m(g.specularColorMap.channel),specularIntensityMapUv:B&&m(g.specularIntensityMap.channel),transmissionMapUv:me&&m(g.transmissionMap.channel),thicknessMapUv:$&&m(g.thicknessMap.channel),alphaMapUv:_e&&m(g.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(De||V),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!U.attributes.uv&&(ze||_e),fog:!!N,useFog:g.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ce,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Wt,decodeVideoTexture:ze&&g.map.isVideoTexture===!0&&at.getTransfer(g.map.colorSpace)===Mt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ai,flipSided:g.side===Tn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Lt&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&g.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return $e.vertexUv1s=u.has(1),$e.vertexUv2s=u.has(2),$e.vertexUv3s=u.has(3),u.clear(),$e}function x(g){const S=[];if(g.shaderID?S.push(g.shaderID):(S.push(g.customVertexShaderID),S.push(g.customFragmentShaderID)),g.defines!==void 0)for(const R in g.defines)S.push(R),S.push(g.defines[R]);return g.isRawShaderMaterial===!1&&(M(S,g),E(S,g),S.push(n.outputColorSpace)),S.push(g.customProgramCacheKey),S.join()}function M(g,S){g.push(S.precision),g.push(S.outputColorSpace),g.push(S.envMapMode),g.push(S.envMapCubeUVHeight),g.push(S.mapUv),g.push(S.alphaMapUv),g.push(S.lightMapUv),g.push(S.aoMapUv),g.push(S.bumpMapUv),g.push(S.normalMapUv),g.push(S.displacementMapUv),g.push(S.emissiveMapUv),g.push(S.metalnessMapUv),g.push(S.roughnessMapUv),g.push(S.anisotropyMapUv),g.push(S.clearcoatMapUv),g.push(S.clearcoatNormalMapUv),g.push(S.clearcoatRoughnessMapUv),g.push(S.iridescenceMapUv),g.push(S.iridescenceThicknessMapUv),g.push(S.sheenColorMapUv),g.push(S.sheenRoughnessMapUv),g.push(S.specularMapUv),g.push(S.specularColorMapUv),g.push(S.specularIntensityMapUv),g.push(S.transmissionMapUv),g.push(S.thicknessMapUv),g.push(S.combine),g.push(S.fogExp2),g.push(S.sizeAttenuation),g.push(S.morphTargetsCount),g.push(S.morphAttributeCount),g.push(S.numDirLights),g.push(S.numPointLights),g.push(S.numSpotLights),g.push(S.numSpotLightMaps),g.push(S.numHemiLights),g.push(S.numRectAreaLights),g.push(S.numDirLightShadows),g.push(S.numPointLightShadows),g.push(S.numSpotLightShadows),g.push(S.numSpotLightShadowsWithMaps),g.push(S.numLightProbes),g.push(S.shadowMapType),g.push(S.toneMapping),g.push(S.numClippingPlanes),g.push(S.numClipIntersection),g.push(S.depthPacking)}function E(g,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),g.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),g.push(o.mask)}function P(g){const S=v[g.type];let R;if(S){const L=li[S];R=om.clone(L.uniforms)}else R=g.uniforms;return R}function T(g,S){let R;for(let L=0,F=c.length;L<F;L++){const N=c[L];if(N.cacheKey===S){R=N,++R.usedTimes;break}}return R===void 0&&(R=new xv(n,S,g,s),c.push(R)),R}function y(g){if(--g.usedTimes===0){const S=c.indexOf(g);c[S]=c[c.length-1],c.pop(),g.destroy()}}function A(g){l.remove(g)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:P,acquireProgram:T,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:D}}function bv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function wv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ou(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,f,_,v,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:v,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function o(h,d,f,_,v,m){const p=a(h,d,f,_,v,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(h,d,f,_,v,m){const p=a(h,d,f,_,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function u(h,d){t.length>1&&t.sort(h||wv),i.length>1&&i.sort(d||Fu),r.length>1&&r.sort(d||Fu)}function c(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:u}}function Tv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Ou,n.set(i,[a])):r>=s.length?(a=new Ou,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Av(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Qe};break;case"SpotLight":t={position:new I,direction:new I,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function Rv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Cv=0;function Lv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Pv(n){const e=new Av,t=Rv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new I);const r=new I,s=new Ve,a=new Ve;function o(u){let c=0,h=0,d=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let f=0,_=0,v=0,m=0,p=0,x=0,M=0,E=0,P=0,T=0,y=0;u.sort(Lv);for(let D=0,g=u.length;D<g;D++){const S=u[D],R=S.color,L=S.intensity,F=S.distance,N=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)c+=R.r*L,h+=R.g*L,d+=R.b*L;else if(S.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(S.sh.coefficients[U],L);y++}else if(S.isDirectionalLight){const U=e.get(S);if(U.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const Y=S.shadow,G=t.get(S);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=N,i.directionalShadowMatrix[f]=S.shadow.matrix,x++}i.directional[f]=U,f++}else if(S.isSpotLight){const U=e.get(S);U.position.setFromMatrixPosition(S.matrixWorld),U.color.copy(R).multiplyScalar(L),U.distance=F,U.coneCos=Math.cos(S.angle),U.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),U.decay=S.decay,i.spot[v]=U;const Y=S.shadow;if(S.map&&(i.spotLightMap[P]=S.map,P++,Y.updateMatrices(S),S.castShadow&&T++),i.spotLightMatrix[v]=Y.matrix,S.castShadow){const G=t.get(S);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=N,E++}v++}else if(S.isRectAreaLight){const U=e.get(S);U.color.copy(R).multiplyScalar(L),U.halfWidth.set(S.width*.5,0,0),U.halfHeight.set(0,S.height*.5,0),i.rectArea[m]=U,m++}else if(S.isPointLight){const U=e.get(S);if(U.color.copy(S.color).multiplyScalar(S.intensity),U.distance=S.distance,U.decay=S.decay,S.castShadow){const Y=S.shadow,G=t.get(S);G.shadowIntensity=Y.intensity,G.shadowBias=Y.bias,G.shadowNormalBias=Y.normalBias,G.shadowRadius=Y.radius,G.shadowMapSize=Y.mapSize,G.shadowCameraNear=Y.camera.near,G.shadowCameraFar=Y.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=N,i.pointShadowMatrix[_]=S.shadow.matrix,M++}i.point[_]=U,_++}else if(S.isHemisphereLight){const U=e.get(S);U.skyColor.copy(S.color).multiplyScalar(L),U.groundColor.copy(S.groundColor).multiplyScalar(L),i.hemi[p]=U,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=d;const A=i.hash;(A.directionalLength!==f||A.pointLength!==_||A.spotLength!==v||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==x||A.numPointShadows!==M||A.numSpotShadows!==E||A.numSpotMaps!==P||A.numLightProbes!==y)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=y,A.directionalLength=f,A.pointLength=_,A.spotLength=v,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=x,A.numPointShadows=M,A.numSpotShadows=E,A.numSpotMaps=P,A.numLightProbes=y,i.version=Cv++)}function l(u,c){let h=0,d=0,f=0,_=0,v=0;const m=c.matrixWorldInverse;for(let p=0,x=u.length;p<x;p++){const M=u[p];if(M.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(M.isSpotLight){const E=i.spot[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function ku(n){const e=new Pv(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function a(c){i.push(c)}function o(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Iv(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ku(n),e.set(r,[o])):s>=a.length?(o=new ku(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Dv extends ao{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Uv extends ao{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fv=`uniform sampler2D shadow_pass;
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
}`;function Ov(n,e,t){let i=new lc;const r=new nt,s=new nt,a=new St,o=new Dv({depthPacking:pp}),l=new Uv,u={},c=t.maxTextureSize,h={[Di]:Tn,[Tn]:Di,[Ai]:Ai},d=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Nv,fragmentShader:Fv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new ii;_.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new vt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ad;let p=this.type;this.render=function(T,y,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const D=n.getRenderTarget(),g=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),R=n.state;R.setBlending(Qi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const L=p!==Ti&&this.type===Ti,F=p===Ti&&this.type!==Ti;for(let N=0,U=T.length;N<U;N++){const Y=T[N],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const se=G.getFrameExtents();if(r.multiply(se),s.copy(G.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/se.x),r.x=s.x*se.x,G.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/se.y),r.y=s.y*se.y,G.mapSize.y=s.y)),G.map===null||L===!0||F===!0){const ie=this.type!==Ti?{minFilter:wn,magFilter:wn}:{};G.map!==null&&G.map.dispose(),G.map=new Cr(r.x,r.y,ie),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const re=G.getViewportCount();for(let ie=0;ie<re;ie++){const Me=G.getViewport(ie);a.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),R.viewport(a),G.updateMatrices(Y,ie),i=G.getFrustum(),E(y,A,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===Ti&&x(G,A),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(D,g,S)};function x(T,y){const A=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Cr(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(y,null,A,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(y,null,A,f,v,null)}function M(T,y,A,D){let g=null;const S=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)g=S;else if(g=A.isPointLight===!0?l:o,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const R=g.uuid,L=y.uuid;let F=u[R];F===void 0&&(F={},u[R]=F);let N=F[L];N===void 0&&(N=g.clone(),F[L]=N,y.addEventListener("dispose",P)),g=N}if(g.visible=y.visible,g.wireframe=y.wireframe,D===Ti?g.side=y.shadowSide!==null?y.shadowSide:y.side:g.side=y.shadowSide!==null?y.shadowSide:h[y.side],g.alphaMap=y.alphaMap,g.alphaTest=y.alphaTest,g.map=y.map,g.clipShadows=y.clipShadows,g.clippingPlanes=y.clippingPlanes,g.clipIntersection=y.clipIntersection,g.displacementMap=y.displacementMap,g.displacementScale=y.displacementScale,g.displacementBias=y.displacementBias,g.wireframeLinewidth=y.wireframeLinewidth,g.linewidth=y.linewidth,A.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const R=n.properties.get(g);R.light=A}return g}function E(T,y,A,D,g){if(T.visible===!1)return;if(T.layers.test(y.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&g===Ti)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const L=e.update(T),F=T.material;if(Array.isArray(F)){const N=L.groups;for(let U=0,Y=N.length;U<Y;U++){const G=N[U],se=F[G.materialIndex];if(se&&se.visible){const re=M(T,se,D,g);T.onBeforeShadow(n,T,y,A,L,re,G),n.renderBufferDirect(A,null,L,re,T,G),T.onAfterShadow(n,T,y,A,L,re,G)}}}else if(F.visible){const N=M(T,F,D,g);T.onBeforeShadow(n,T,y,A,L,N,null),n.renderBufferDirect(A,null,L,N,T,null),T.onAfterShadow(n,T,y,A,L,N,null)}}const R=T.children;for(let L=0,F=R.length;L<F;L++)E(R[L],y,A,D,g)}function P(T){T.target.removeEventListener("dispose",P);for(const A in u){const D=u[A],g=T.target.uuid;g in D&&(D[g].dispose(),delete D[g])}}}const kv={[$l]:Kl,[jl]:Ql,[Zl]:e0,[gs]:Jl,[Kl]:$l,[Ql]:jl,[e0]:Zl,[Jl]:gs};function Bv(n){function e(){let B=!1;const me=new St;let $=null;const ee=new St(0,0,0,0);return{setMask:function(_e){$!==_e&&!B&&(n.colorMask(_e,_e,_e,_e),$=_e)},setLocked:function(_e){B=_e},setClear:function(_e,ve,Je,Lt,Wt){Wt===!0&&(_e*=Lt,ve*=Lt,Je*=Lt),me.set(_e,ve,Je,Lt),ee.equals(me)===!1&&(n.clearColor(_e,ve,Je,Lt),ee.copy(me))},reset:function(){B=!1,$=null,ee.set(-1,0,0,0)}}}function t(){let B=!1,me=!1,$=null,ee=null,_e=null;return{setReversed:function(ve){me=ve},setTest:function(ve){ve?K(n.DEPTH_TEST):Z(n.DEPTH_TEST)},setMask:function(ve){$!==ve&&!B&&(n.depthMask(ve),$=ve)},setFunc:function(ve){if(me&&(ve=kv[ve]),ee!==ve){switch(ve){case $l:n.depthFunc(n.NEVER);break;case Kl:n.depthFunc(n.ALWAYS);break;case jl:n.depthFunc(n.LESS);break;case gs:n.depthFunc(n.LEQUAL);break;case Zl:n.depthFunc(n.EQUAL);break;case Jl:n.depthFunc(n.GEQUAL);break;case Ql:n.depthFunc(n.GREATER);break;case e0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=ve}},setLocked:function(ve){B=ve},setClear:function(ve){_e!==ve&&(n.clearDepth(ve),_e=ve)},reset:function(){B=!1,$=null,ee=null,_e=null}}}function i(){let B=!1,me=null,$=null,ee=null,_e=null,ve=null,Je=null,Lt=null,Wt=null;return{setTest:function($e){B||($e?K(n.STENCIL_TEST):Z(n.STENCIL_TEST))},setMask:function($e){me!==$e&&!B&&(n.stencilMask($e),me=$e)},setFunc:function($e,Kt,Wn){($!==$e||ee!==Kt||_e!==Wn)&&(n.stencilFunc($e,Kt,Wn),$=$e,ee=Kt,_e=Wn)},setOp:function($e,Kt,Wn){(ve!==$e||Je!==Kt||Lt!==Wn)&&(n.stencilOp($e,Kt,Wn),ve=$e,Je=Kt,Lt=Wn)},setLocked:function($e){B=$e},setClear:function($e){Wt!==$e&&(n.clearStencil($e),Wt=$e)},reset:function(){B=!1,me=null,$=null,ee=null,_e=null,ve=null,Je=null,Lt=null,Wt=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,l=new WeakMap;let u={},c={},h=new WeakMap,d=[],f=null,_=!1,v=null,m=null,p=null,x=null,M=null,E=null,P=null,T=new Qe(0,0,0),y=0,A=!1,D=null,g=null,S=null,R=null,L=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,U=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(Y)[1]),N=U>=1):Y.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),N=U>=2);let G=null,se={};const re=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),Me=new St().fromArray(re),Ce=new St().fromArray(ie);function z(B,me,$,ee){const _e=new Uint8Array(4),ve=n.createTexture();n.bindTexture(B,ve),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<$;Je++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(me+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return ve}const q={};q[n.TEXTURE_2D]=z(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),K(n.DEPTH_TEST),s.setFunc(gs),je(!1),Ze(Xc),K(n.CULL_FACE),O(Qi);function K(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Z(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function ge(B,me){return c[B]!==me?(n.bindFramebuffer(B,me),c[B]=me,B===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=me),B===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=me),!0):!1}function Te(B,me){let $=d,ee=!1;if(B){$=h.get(me),$===void 0&&($=[],h.set(me,$));const _e=B.textures;if($.length!==_e.length||$[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,Je=_e.length;ve<Je;ve++)$[ve]=n.COLOR_ATTACHMENT0+ve;$.length=_e.length,ee=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,ee=!0);ee&&n.drawBuffers($)}function ke(B){return f!==B?(n.useProgram(B),f=B,!0):!1}const ze={[Mr]:n.FUNC_ADD,[zf]:n.FUNC_SUBTRACT,[Hf]:n.FUNC_REVERSE_SUBTRACT};ze[Gf]=n.MIN,ze[Vf]=n.MAX;const qe={[Wf]:n.ZERO,[Xf]:n.ONE,[qf]:n.SRC_COLOR,[ql]:n.SRC_ALPHA,[Jf]:n.SRC_ALPHA_SATURATE,[jf]:n.DST_COLOR,[$f]:n.DST_ALPHA,[Yf]:n.ONE_MINUS_SRC_COLOR,[Yl]:n.ONE_MINUS_SRC_ALPHA,[Zf]:n.ONE_MINUS_DST_COLOR,[Kf]:n.ONE_MINUS_DST_ALPHA,[Qf]:n.CONSTANT_COLOR,[ep]:n.ONE_MINUS_CONSTANT_COLOR,[tp]:n.CONSTANT_ALPHA,[np]:n.ONE_MINUS_CONSTANT_ALPHA};function O(B,me,$,ee,_e,ve,Je,Lt,Wt,$e){if(B===Qi){_===!0&&(Z(n.BLEND),_=!1);return}if(_===!1&&(K(n.BLEND),_=!0),B!==Bf){if(B!==v||$e!==A){if((m!==Mr||M!==Mr)&&(n.blendEquation(n.FUNC_ADD),m=Mr,M=Mr),$e)switch(B){case cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Js:n.blendFunc(n.ONE,n.ONE);break;case qc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Js:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case qc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}p=null,x=null,E=null,P=null,T.set(0,0,0),y=0,v=B,A=$e}return}_e=_e||me,ve=ve||$,Je=Je||ee,(me!==m||_e!==M)&&(n.blendEquationSeparate(ze[me],ze[_e]),m=me,M=_e),($!==p||ee!==x||ve!==E||Je!==P)&&(n.blendFuncSeparate(qe[$],qe[ee],qe[ve],qe[Je]),p=$,x=ee,E=ve,P=Je),(Lt.equals(T)===!1||Wt!==y)&&(n.blendColor(Lt.r,Lt.g,Lt.b,Wt),T.copy(Lt),y=Wt),v=B,A=!1}function kt(B,me){B.side===Ai?Z(n.CULL_FACE):K(n.CULL_FACE);let $=B.side===Tn;me&&($=!$),je($),B.blending===cs&&B.transparent===!1?O(Qi):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),r.setMask(B.colorWrite);const ee=B.stencilWrite;a.setTest(ee),ee&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),lt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):Z(n.SAMPLE_ALPHA_TO_COVERAGE)}function je(B){D!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),D=B)}function Ze(B){B!==Ff?(K(n.CULL_FACE),B!==g&&(B===Xc?n.cullFace(n.BACK):B===Of?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Z(n.CULL_FACE),g=B}function De(B){B!==S&&(N&&n.lineWidth(B),S=B)}function lt(B,me,$){B?(K(n.POLYGON_OFFSET_FILL),(R!==me||L!==$)&&(n.polygonOffset(me,$),R=me,L=$)):Z(n.POLYGON_OFFSET_FILL)}function Ne(B){B?K(n.SCISSOR_TEST):Z(n.SCISSOR_TEST)}function C(B){B===void 0&&(B=n.TEXTURE0+F-1),G!==B&&(n.activeTexture(B),G=B)}function b(B,me,$){$===void 0&&(G===null?$=n.TEXTURE0+F-1:$=G);let ee=se[$];ee===void 0&&(ee={type:void 0,texture:void 0},se[$]=ee),(ee.type!==B||ee.texture!==me)&&(G!==$&&(n.activeTexture($),G=$),n.bindTexture(B,me||q[B]),ee.type=B,ee.texture=me)}function V(){const B=se[G];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ye(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Fe(B){Me.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Me.copy(B))}function Ee(B){Ce.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Ce.copy(B))}function Ke(B,me){let $=l.get(me);$===void 0&&($=new WeakMap,l.set(me,$));let ee=$.get(B);ee===void 0&&(ee=n.getUniformBlockIndex(me,B.name),$.set(B,ee))}function Oe(B,me){const ee=l.get(me).get(B);o.get(me)!==ee&&(n.uniformBlockBinding(me,ee,B.__bindingPointIndex),o.set(me,ee))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},G=null,se={},c={},h=new WeakMap,d=[],f=null,_=!1,v=null,m=null,p=null,x=null,M=null,E=null,P=null,T=new Qe(0,0,0),y=0,A=!1,D=null,g=null,S=null,R=null,L=null,Me.set(0,0,n.canvas.width,n.canvas.height),Ce.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:K,disable:Z,bindFramebuffer:ge,drawBuffers:Te,useProgram:ke,setBlending:O,setMaterial:kt,setFlipSided:je,setCullFace:Ze,setLineWidth:De,setPolygonOffset:lt,setScissorTest:Ne,activeTexture:C,bindTexture:b,unbindTexture:V,compressedTexImage2D:j,compressedTexImage3D:ne,texImage2D:he,texImage3D:Ue,updateUBOMapping:Ke,uniformBlockBinding:Oe,texStorage2D:Ye,texStorage3D:oe,texSubImage2D:J,texSubImage3D:Ae,compressedTexSubImage2D:ue,compressedTexSubImage3D:fe,scissor:Fe,viewport:Ee,reset:dt}}function Bu(n,e,t,i){const r=zv(i);switch(t){case fd:return n*e;case md:return n*e;case gd:return n*e*2;case _d:return n*e/r.components*r.byteLength;case ec:return n*e/r.components*r.byteLength;case vd:return n*e*2/r.components*r.byteLength;case tc:return n*e*2/r.components*r.byteLength;case pd:return n*e*3/r.components*r.byteLength;case Hn:return n*e*4/r.components*r.byteLength;case nc:return n*e*4/r.components*r.byteLength;case Jo:case Qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ea:case ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case s0:case a0:return Math.max(n,16)*Math.max(e,8)/4;case r0:case o0:return Math.max(n,8)*Math.max(e,8)/2;case l0:case c0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case u0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case h0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case d0:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case f0:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case p0:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case m0:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case g0:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case _0:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case v0:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case x0:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case M0:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case S0:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case y0:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case E0:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case b0:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case na:case w0:case T0:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xd:case A0:return Math.ceil(n/4)*Math.ceil(e/4)*8;case R0:case C0:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zv(n){switch(n){case Ui:case ud:return{byteLength:1,components:1};case Qs:case hd:case so:return{byteLength:2,components:1};case J0:case Q0:return{byteLength:2,components:4};case Rr:case Z0:case ui:return{byteLength:4,components:1};case dd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Hv(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new nt,c=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,b){return f?new OffscreenCanvas(C,b):da("canvas")}function v(C,b,V){let j=1;const ne=Ne(C);if((ne.width>V||ne.height>V)&&(j=V/Math.max(ne.width,ne.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(j*ne.width),Ae=Math.floor(j*ne.height);h===void 0&&(h=_(J,Ae));const ue=b?_(J,Ae):h;return ue.width=J,ue.height=Ae,ue.getContext("2d").drawImage(C,0,0,J,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+Ae+")."),ue}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==wn&&C.minFilter!==zn}function p(C){n.generateMipmap(C)}function x(C,b,V,j,ne=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=b;if(b===n.RED&&(V===n.FLOAT&&(J=n.R32F),V===n.HALF_FLOAT&&(J=n.R16F),V===n.UNSIGNED_BYTE&&(J=n.R8)),b===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.R8UI),V===n.UNSIGNED_SHORT&&(J=n.R16UI),V===n.UNSIGNED_INT&&(J=n.R32UI),V===n.BYTE&&(J=n.R8I),V===n.SHORT&&(J=n.R16I),V===n.INT&&(J=n.R32I)),b===n.RG&&(V===n.FLOAT&&(J=n.RG32F),V===n.HALF_FLOAT&&(J=n.RG16F),V===n.UNSIGNED_BYTE&&(J=n.RG8)),b===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RG8UI),V===n.UNSIGNED_SHORT&&(J=n.RG16UI),V===n.UNSIGNED_INT&&(J=n.RG32UI),V===n.BYTE&&(J=n.RG8I),V===n.SHORT&&(J=n.RG16I),V===n.INT&&(J=n.RG32I)),b===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGB8UI),V===n.UNSIGNED_SHORT&&(J=n.RGB16UI),V===n.UNSIGNED_INT&&(J=n.RGB32UI),V===n.BYTE&&(J=n.RGB8I),V===n.SHORT&&(J=n.RGB16I),V===n.INT&&(J=n.RGB32I)),b===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),V===n.UNSIGNED_INT&&(J=n.RGBA32UI),V===n.BYTE&&(J=n.RGBA8I),V===n.SHORT&&(J=n.RGBA16I),V===n.INT&&(J=n.RGBA32I)),b===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),b===n.RGBA){const Ae=ne?la:at.getTransfer(j);V===n.FLOAT&&(J=n.RGBA32F),V===n.HALF_FLOAT&&(J=n.RGBA16F),V===n.UNSIGNED_BYTE&&(J=Ae===Mt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(C,b){let V;return C?b===null||b===Rr||b===xs?V=n.DEPTH24_STENCIL8:b===ui?V=n.DEPTH32F_STENCIL8:b===Qs&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Rr||b===xs?V=n.DEPTH_COMPONENT24:b===ui?V=n.DEPTH_COMPONENT32F:b===Qs&&(V=n.DEPTH_COMPONENT16),V}function E(C,b){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==wn&&C.minFilter!==zn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function P(C){const b=C.target;b.removeEventListener("dispose",P),y(b),b.isVideoTexture&&c.delete(b)}function T(C){const b=C.target;b.removeEventListener("dispose",T),D(b)}function y(C){const b=i.get(C);if(b.__webglInit===void 0)return;const V=C.source,j=d.get(V);if(j){const ne=j[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&A(C),Object.keys(j).length===0&&d.delete(V)}i.remove(C)}function A(C){const b=i.get(C);n.deleteTexture(b.__webglTexture);const V=C.source,j=d.get(V);delete j[b.__cacheKey],a.memory.textures--}function D(C){const b=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let ne=0;ne<b.__webglFramebuffer[j].length;ne++)n.deleteFramebuffer(b.__webglFramebuffer[j][ne]);else n.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)n.deleteFramebuffer(b.__webglFramebuffer[j]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const V=C.textures;for(let j=0,ne=V.length;j<ne;j++){const J=i.get(V[j]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(V[j])}i.remove(C)}let g=0;function S(){g=0}function R(){const C=g;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),g+=1,C}function L(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function F(C,b){const V=i.get(C);if(C.isVideoTexture&&De(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(V,C,b);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+b)}function N(C,b){const V=i.get(C);if(C.version>0&&V.__version!==C.version){Ce(V,C,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+b)}function U(C,b){const V=i.get(C);if(C.version>0&&V.__version!==C.version){Ce(V,C,b);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+b)}function Y(C,b){const V=i.get(C);if(C.version>0&&V.__version!==C.version){z(V,C,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+b)}const G={[aa]:n.REPEAT,[ji]:n.CLAMP_TO_EDGE,[i0]:n.MIRRORED_REPEAT},se={[wn]:n.NEAREST,[dp]:n.NEAREST_MIPMAP_NEAREST,[xo]:n.NEAREST_MIPMAP_LINEAR,[zn]:n.LINEAR,[Da]:n.LINEAR_MIPMAP_NEAREST,[Zi]:n.LINEAR_MIPMAP_LINEAR},re={[gp]:n.NEVER,[yp]:n.ALWAYS,[_p]:n.LESS,[Sd]:n.LEQUAL,[vp]:n.EQUAL,[Sp]:n.GEQUAL,[xp]:n.GREATER,[Mp]:n.NOTEQUAL};function ie(C,b){if(b.type===ui&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===zn||b.magFilter===Da||b.magFilter===xo||b.magFilter===Zi||b.minFilter===zn||b.minFilter===Da||b.minFilter===xo||b.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,G[b.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,G[b.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,G[b.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,se[b.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,se[b.minFilter]),b.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,re[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===wn||b.minFilter!==xo&&b.minFilter!==Zi||b.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Me(C,b){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",P));const j=b.source;let ne=d.get(j);ne===void 0&&(ne={},d.set(j,ne));const J=L(b);if(J!==C.__cacheKey){ne[J]===void 0&&(ne[J]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ne[J].usedTimes++;const Ae=ne[C.__cacheKey];Ae!==void 0&&(ne[C.__cacheKey].usedTimes--,Ae.usedTimes===0&&A(b)),C.__cacheKey=J,C.__webglTexture=ne[J].texture}return V}function Ce(C,b,V){let j=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=n.TEXTURE_3D);const ne=Me(C,b),J=b.source;t.bindTexture(j,C.__webglTexture,n.TEXTURE0+V);const Ae=i.get(J);if(J.version!==Ae.__version||ne===!0){t.activeTexture(n.TEXTURE0+V);const ue=at.getPrimaries(at.workingColorSpace),fe=b.colorSpace===Ki?null:at.getPrimaries(b.colorSpace),Ye=b.colorSpace===Ki||ue===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let oe=v(b.image,!1,r.maxTextureSize);oe=lt(b,oe);const he=s.convert(b.format,b.colorSpace),Ue=s.convert(b.type);let Fe=x(b.internalFormat,he,Ue,b.colorSpace,b.isVideoTexture);ie(j,b);let Ee;const Ke=b.mipmaps,Oe=b.isVideoTexture!==!0,dt=Ae.__version===void 0||ne===!0,B=J.dataReady,me=E(b,oe);if(b.isDepthTexture)Fe=M(b.format===Ms,b.type),dt&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,Fe,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Fe,oe.width,oe.height,0,he,Ue,null));else if(b.isDataTexture)if(Ke.length>0){Oe&&dt&&t.texStorage2D(n.TEXTURE_2D,me,Fe,Ke[0].width,Ke[0].height);for(let $=0,ee=Ke.length;$<ee;$++)Ee=Ke[$],Oe?B&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ee.width,Ee.height,he,Ue,Ee.data):t.texImage2D(n.TEXTURE_2D,$,Fe,Ee.width,Ee.height,0,he,Ue,Ee.data);b.generateMipmaps=!1}else Oe?(dt&&t.texStorage2D(n.TEXTURE_2D,me,Fe,oe.width,oe.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,he,Ue,oe.data)):t.texImage2D(n.TEXTURE_2D,0,Fe,oe.width,oe.height,0,he,Ue,oe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Oe&&dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Fe,Ke[0].width,Ke[0].height,oe.depth);for(let $=0,ee=Ke.length;$<ee;$++)if(Ee=Ke[$],b.format!==Hn)if(he!==null)if(Oe){if(B)if(b.layerUpdates.size>0){const _e=Bu(Ee.width,Ee.height,b.format,b.type);for(const ve of b.layerUpdates){const Je=Ee.data.subarray(ve*_e/Ee.data.BYTES_PER_ELEMENT,(ve+1)*_e/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,ve,Ee.width,Ee.height,1,he,Je,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Ee.width,Ee.height,oe.depth,he,Ee.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Fe,Ee.width,Ee.height,oe.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,Ee.width,Ee.height,oe.depth,he,Ue,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,$,Fe,Ee.width,Ee.height,oe.depth,0,he,Ue,Ee.data)}else{Oe&&dt&&t.texStorage2D(n.TEXTURE_2D,me,Fe,Ke[0].width,Ke[0].height);for(let $=0,ee=Ke.length;$<ee;$++)Ee=Ke[$],b.format!==Hn?he!==null?Oe?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,Ee.width,Ee.height,he,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,$,Fe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?B&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,Ee.width,Ee.height,he,Ue,Ee.data):t.texImage2D(n.TEXTURE_2D,$,Fe,Ee.width,Ee.height,0,he,Ue,Ee.data)}else if(b.isDataArrayTexture)if(Oe){if(dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Fe,oe.width,oe.height,oe.depth),B)if(b.layerUpdates.size>0){const $=Bu(oe.width,oe.height,b.format,b.type);for(const ee of b.layerUpdates){const _e=oe.data.subarray(ee*$/oe.data.BYTES_PER_ELEMENT,(ee+1)*$/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,he,Ue,_e)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,he,Ue,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,oe.width,oe.height,oe.depth,0,he,Ue,oe.data);else if(b.isData3DTexture)Oe?(dt&&t.texStorage3D(n.TEXTURE_3D,me,Fe,oe.width,oe.height,oe.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,he,Ue,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,oe.width,oe.height,oe.depth,0,he,Ue,oe.data);else if(b.isFramebufferTexture){if(dt)if(Oe)t.texStorage2D(n.TEXTURE_2D,me,Fe,oe.width,oe.height);else{let $=oe.width,ee=oe.height;for(let _e=0;_e<me;_e++)t.texImage2D(n.TEXTURE_2D,_e,Fe,$,ee,0,he,Ue,null),$>>=1,ee>>=1}}else if(Ke.length>0){if(Oe&&dt){const $=Ne(Ke[0]);t.texStorage2D(n.TEXTURE_2D,me,Fe,$.width,$.height)}for(let $=0,ee=Ke.length;$<ee;$++)Ee=Ke[$],Oe?B&&t.texSubImage2D(n.TEXTURE_2D,$,0,0,he,Ue,Ee):t.texImage2D(n.TEXTURE_2D,$,Fe,he,Ue,Ee);b.generateMipmaps=!1}else if(Oe){if(dt){const $=Ne(oe);t.texStorage2D(n.TEXTURE_2D,me,Fe,$.width,$.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,Ue,oe)}else t.texImage2D(n.TEXTURE_2D,0,Fe,he,Ue,oe);m(b)&&p(j),Ae.__version=J.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function z(C,b,V){if(b.image.length!==6)return;const j=Me(C,b),ne=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+V);const J=i.get(ne);if(ne.version!==J.__version||j===!0){t.activeTexture(n.TEXTURE0+V);const Ae=at.getPrimaries(at.workingColorSpace),ue=b.colorSpace===Ki?null:at.getPrimaries(b.colorSpace),fe=b.colorSpace===Ki||Ae===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ye=b.isCompressedTexture||b.image[0].isCompressedTexture,oe=b.image[0]&&b.image[0].isDataTexture,he=[];for(let ee=0;ee<6;ee++)!Ye&&!oe?he[ee]=v(b.image[ee],!0,r.maxCubemapSize):he[ee]=oe?b.image[ee].image:b.image[ee],he[ee]=lt(b,he[ee]);const Ue=he[0],Fe=s.convert(b.format,b.colorSpace),Ee=s.convert(b.type),Ke=x(b.internalFormat,Fe,Ee,b.colorSpace),Oe=b.isVideoTexture!==!0,dt=J.__version===void 0||j===!0,B=ne.dataReady;let me=E(b,Ue);ie(n.TEXTURE_CUBE_MAP,b);let $;if(Ye){Oe&&dt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ke,Ue.width,Ue.height);for(let ee=0;ee<6;ee++){$=he[ee].mipmaps;for(let _e=0;_e<$.length;_e++){const ve=$[_e];b.format!==Hn?Fe!==null?Oe?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,0,0,ve.width,ve.height,Fe,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,Ke,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,0,0,ve.width,ve.height,Fe,Ee,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e,Ke,ve.width,ve.height,0,Fe,Ee,ve.data)}}}else{if($=b.mipmaps,Oe&&dt){$.length>0&&me++;const ee=Ne(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ke,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){Oe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,he[ee].width,he[ee].height,Fe,Ee,he[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ke,he[ee].width,he[ee].height,0,Fe,Ee,he[ee].data);for(let _e=0;_e<$.length;_e++){const Je=$[_e].image[ee].image;Oe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,0,0,Je.width,Je.height,Fe,Ee,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,Ke,Je.width,Je.height,0,Fe,Ee,Je.data)}}else{Oe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Fe,Ee,he[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ke,Fe,Ee,he[ee]);for(let _e=0;_e<$.length;_e++){const ve=$[_e];Oe?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,0,0,Fe,Ee,ve.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,_e+1,Ke,Fe,Ee,ve.image[ee])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),J.__version=ne.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function q(C,b,V,j,ne,J){const Ae=s.convert(V.format,V.colorSpace),ue=s.convert(V.type),fe=x(V.internalFormat,Ae,ue,V.colorSpace);if(!i.get(b).__hasExternalTextures){const oe=Math.max(1,b.width>>J),he=Math.max(1,b.height>>J);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,J,fe,oe,he,b.depth,0,Ae,ue,null):t.texImage2D(ne,J,fe,oe,he,0,Ae,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ze(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,ne,i.get(V).__webglTexture,0,je(b)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,ne,i.get(V).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function K(C,b,V){if(n.bindRenderbuffer(n.RENDERBUFFER,C),b.depthBuffer){const j=b.depthTexture,ne=j&&j.isDepthTexture?j.type:null,J=M(b.stencilBuffer,ne),Ae=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=je(b);Ze(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,J,b.width,b.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,J,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,J,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,C)}else{const j=b.textures;for(let ne=0;ne<j.length;ne++){const J=j[ne],Ae=s.convert(J.format,J.colorSpace),ue=s.convert(J.type),fe=x(J.internalFormat,Ae,ue,J.colorSpace),Ye=je(b);V&&Ze(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,fe,b.width,b.height):Ze(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,fe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,fe,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Z(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),F(b.depthTexture,0);const j=i.get(b.depthTexture).__webglTexture,ne=je(b);if(b.depthTexture.format===us)Ze(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(b.depthTexture.format===Ms)Ze(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ge(C){const b=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){const ne=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",ne)};j.addEventListener("dispose",ne),b.__depthDisposeCallback=ne}b.__boundDepthTexture=j}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Z(b.__webglFramebuffer,C)}else if(V){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=n.createRenderbuffer(),K(b.__webglDepthbuffer[j],C,!1);else{const ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),K(b.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,ne)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(C,b,V){const j=i.get(C);b!==void 0&&q(j.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&ge(C)}function ke(C){const b=C.texture,V=i.get(C),j=i.get(b);C.addEventListener("dispose",T);const ne=C.textures,J=C.isWebGLCubeRenderTarget===!0,Ae=ne.length>1;if(Ae||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=b.version,a.memory.textures++),J){V.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[ue]=[];for(let fe=0;fe<b.mipmaps.length;fe++)V.__webglFramebuffer[ue][fe]=n.createFramebuffer()}else V.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let ue=0;ue<b.mipmaps.length;ue++)V.__webglFramebuffer[ue]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let ue=0,fe=ne.length;ue<fe;ue++){const Ye=i.get(ne[ue]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Ze(C)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ue=0;ue<ne.length;ue++){const fe=ne[ue];V.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[ue]);const Ye=s.convert(fe.format,fe.colorSpace),oe=s.convert(fe.type),he=x(fe.internalFormat,Ye,oe,fe.colorSpace,C.isXRRenderTarget===!0),Ue=je(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,he,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,V.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),K(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),ie(n.TEXTURE_CUBE_MAP,b);for(let ue=0;ue<6;ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)q(V.__webglFramebuffer[ue][fe],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,fe);else q(V.__webglFramebuffer[ue],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ue=0,fe=ne.length;ue<fe;ue++){const Ye=ne[ue],oe=i.get(Ye);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),ie(n.TEXTURE_2D,Ye),q(V.__webglFramebuffer,C,Ye,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),m(Ye)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,j.__webglTexture),ie(ue,b),b.mipmaps&&b.mipmaps.length>0)for(let fe=0;fe<b.mipmaps.length;fe++)q(V.__webglFramebuffer[fe],C,b,n.COLOR_ATTACHMENT0,ue,fe);else q(V.__webglFramebuffer,C,b,n.COLOR_ATTACHMENT0,ue,0);m(b)&&p(ue),t.unbindTexture()}C.depthBuffer&&ge(C)}function ze(C){const b=C.textures;for(let V=0,j=b.length;V<j;V++){const ne=b[V];if(m(ne)){const J=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ae=i.get(ne).__webglTexture;t.bindTexture(J,Ae),p(J),t.unbindTexture()}}}const qe=[],O=[];function kt(C){if(C.samples>0){if(Ze(C)===!1){const b=C.textures,V=C.width,j=C.height;let ne=n.COLOR_BUFFER_BIT;const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(C),ue=b.length>1;if(ue)for(let fe=0;fe<b.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let fe=0;fe<b.length;fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[fe]);const Ye=i.get(b[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ye,0)}n.blitFramebuffer(0,0,V,j,0,0,V,j,ne,n.NEAREST),l===!0&&(qe.length=0,O.length=0,qe.push(n.COLOR_ATTACHMENT0+fe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(qe.push(J),O.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let fe=0;fe<b.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[fe]);const Ye=i.get(b[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,Ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function je(C){return Math.min(r.maxSamples,C.samples)}function Ze(C){const b=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function De(C){const b=a.render.frame;c.get(C)!==b&&(c.set(C,b),C.update())}function lt(C,b){const V=C.colorSpace,j=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==ir&&V!==Ki&&(at.getTransfer(V)===Mt?(j!==Hn||ne!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function Ne(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=R,this.resetTextureUnits=S,this.setTexture2D=F,this.setTexture2DArray=N,this.setTexture3D=U,this.setTextureCube=Y,this.rebindTextures=Te,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=q,this.useMultisampledRTT=Ze}function Gv(n,e){function t(i,r=Ki){let s;const a=at.getTransfer(r);if(i===Ui)return n.UNSIGNED_BYTE;if(i===J0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Q0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===dd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ud)return n.BYTE;if(i===hd)return n.SHORT;if(i===Qs)return n.UNSIGNED_SHORT;if(i===Z0)return n.INT;if(i===Rr)return n.UNSIGNED_INT;if(i===ui)return n.FLOAT;if(i===so)return n.HALF_FLOAT;if(i===fd)return n.ALPHA;if(i===pd)return n.RGB;if(i===Hn)return n.RGBA;if(i===md)return n.LUMINANCE;if(i===gd)return n.LUMINANCE_ALPHA;if(i===us)return n.DEPTH_COMPONENT;if(i===Ms)return n.DEPTH_STENCIL;if(i===_d)return n.RED;if(i===ec)return n.RED_INTEGER;if(i===vd)return n.RG;if(i===tc)return n.RG_INTEGER;if(i===nc)return n.RGBA_INTEGER;if(i===Jo||i===Qo||i===ea||i===ta)if(a===Mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Jo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Jo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ta)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===r0||i===s0||i===o0||i===a0)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===r0)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===s0)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===o0)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===a0)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===l0||i===c0||i===u0)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===l0||i===c0)return a===Mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===u0)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===h0||i===d0||i===f0||i===p0||i===m0||i===g0||i===_0||i===v0||i===x0||i===M0||i===S0||i===y0||i===E0||i===b0)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===h0)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===d0)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===f0)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===p0)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===m0)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===g0)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_0)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===v0)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===x0)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===M0)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===S0)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===y0)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===E0)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===b0)return a===Mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===na||i===w0||i===T0)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===na)return a===Mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===w0)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===T0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xd||i===A0||i===R0||i===C0)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===na)return s.COMPRESSED_RED_RGTC1_EXT;if(i===A0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===R0)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===C0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Vv extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sn extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wv={type:"move"};class al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(u,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),f=.02,_=.005;u.inputState.pinching&&d>f+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=f-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wv)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Sn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qv=`
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

}`;class Yv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new nr({vertexShader:Xv,fragmentShader:qv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new lo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $v extends ws{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,h=null,d=null,f=null,_=null;const v=new Yv,m=t.getContextAttributes();let p=null,x=null;const M=[],E=[],P=new nt;let T=null;const y=new Mn;y.layers.enable(1),y.viewport=new St;const A=new Mn;A.layers.enable(2),A.viewport=new St;const D=[y,A],g=new Vv;g.layers.enable(1),g.layers.enable(2);let S=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let q=M[z];return q===void 0&&(q=new al,M[z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(z){let q=M[z];return q===void 0&&(q=new al,M[z]=q),q.getGripSpace()},this.getHand=function(z){let q=M[z];return q===void 0&&(q=new al,M[z]=q),q.getHandSpace()};function L(z){const q=E.indexOf(z.inputSource);if(q===-1)return;const K=M[q];K!==void 0&&(K.update(z.inputSource,z.frame,u||a),K.dispatchEvent({type:z.type,data:z.inputSource}))}function F(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",N);for(let z=0;z<M.length;z++){const q=E[z];q!==null&&(E[z]=null,M[z].disconnect(q))}S=null,R=null,v.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,x=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(z){u=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",F),r.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Cr(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let q=null,K=null,Z=null;m.depth&&(Z=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=m.stencil?Ms:us,K=m.stencil?xs:Rr);const ge={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(ge),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Cr(d.textureWidth,d.textureHeight,{format:Hn,type:Ui,depthTexture:new Pd(d.textureWidth,d.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function N(z){for(let q=0;q<z.removed.length;q++){const K=z.removed[q],Z=E.indexOf(K);Z>=0&&(E[Z]=null,M[Z].disconnect(K))}for(let q=0;q<z.added.length;q++){const K=z.added[q];let Z=E.indexOf(K);if(Z===-1){for(let Te=0;Te<M.length;Te++)if(Te>=E.length){E.push(K),Z=Te;break}else if(E[Te]===null){E[Te]=K,Z=Te;break}if(Z===-1)break}const ge=M[Z];ge&&ge.connect(K)}}const U=new I,Y=new I;function G(z,q,K){U.setFromMatrixPosition(q.matrixWorld),Y.setFromMatrixPosition(K.matrixWorld);const Z=U.distanceTo(Y),ge=q.projectionMatrix.elements,Te=K.projectionMatrix.elements,ke=ge[14]/(ge[10]-1),ze=ge[14]/(ge[10]+1),qe=(ge[9]+1)/ge[5],O=(ge[9]-1)/ge[5],kt=(ge[8]-1)/ge[0],je=(Te[8]+1)/Te[0],Ze=ke*kt,De=ke*je,lt=Z/(-kt+je),Ne=lt*-kt;if(q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ne),z.translateZ(lt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),ge[10]===-1)z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const C=ke+lt,b=ze+lt,V=Ze-Ne,j=De+(Z-Ne),ne=qe*ze/b*C,J=O*ze/b*C;z.projectionMatrix.makePerspective(V,j,ne,J,C,b),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function se(z,q){q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;let q=z.near,K=z.far;v.texture!==null&&(v.depthNear>0&&(q=v.depthNear),v.depthFar>0&&(K=v.depthFar)),g.near=A.near=y.near=q,g.far=A.far=y.far=K,(S!==g.near||R!==g.far)&&(r.updateRenderState({depthNear:g.near,depthFar:g.far}),S=g.near,R=g.far);const Z=z.parent,ge=g.cameras;se(g,Z);for(let Te=0;Te<ge.length;Te++)se(ge[Te],Z);ge.length===2?G(g,y,A):g.projectionMatrix.copy(y.projectionMatrix),re(z,g,Z)};function re(z,q,K){K===null?z.matrix.copy(q.matrixWorld):(z.matrix.copy(K.matrixWorld),z.matrix.invert(),z.matrix.multiply(q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=eo*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(g)};let ie=null;function Me(z,q){if(c=q.getViewerPose(u||a),_=q,c!==null){const K=c.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Z=!1;K.length!==g.cameras.length&&(g.cameras.length=0,Z=!0);for(let Te=0;Te<K.length;Te++){const ke=K[Te];let ze=null;if(f!==null)ze=f.getViewport(ke);else{const O=h.getViewSubImage(d,ke);ze=O.viewport,Te===0&&(e.setRenderTargetTextures(x,O.colorTexture,d.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(x))}let qe=D[Te];qe===void 0&&(qe=new Mn,qe.layers.enable(Te),qe.viewport=new St,D[Te]=qe),qe.matrix.fromArray(ke.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ke.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ze.x,ze.y,ze.width,ze.height),Te===0&&(g.matrix.copy(qe.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),Z===!0&&g.cameras.push(qe)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const Te=h.getDepthInformation(K[0]);Te&&Te.isValid&&Te.texture&&v.init(e,Te,r.renderState)}}for(let K=0;K<M.length;K++){const Z=E[K],ge=M[K];Z!==null&&ge!==void 0&&ge.update(Z,q,u||a)}ie&&ie(z,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),_=null}const Ce=new Ld;Ce.setAnimationLoop(Me),this.setAnimationLoop=function(z){ie=z},this.dispose=function(){}}}const hr=new en,Kv=new Ve;function jv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ad(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,x,M,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,M):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),M=x.envMap,E=x.envMapRotation;M&&(m.envMap.value=M,hr.copy(E),hr.x*=-1,hr.y*=-1,hr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),m.envMapRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(hr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Zv(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const E=M.program;i.uniformBlockBinding(x,E)}function u(x,M){let E=r[x.id];E===void 0&&(_(x),E=c(x),r[x.id]=E,x.addEventListener("dispose",m));const P=M.program;i.updateUBOMapping(x,P);const T=e.render.frame;s[x.id]!==T&&(d(x),s[x.id]=T)}function c(x){const M=h();x.__bindingPointIndex=M;const E=n.createBuffer(),P=x.__size,T=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,P,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=r[x.id],E=x.uniforms,P=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let T=0,y=E.length;T<y;T++){const A=Array.isArray(E[T])?E[T]:[E[T]];for(let D=0,g=A.length;D<g;D++){const S=A[D];if(f(S,T,D,P)===!0){const R=S.__offset,L=Array.isArray(S.value)?S.value:[S.value];let F=0;for(let N=0;N<L.length;N++){const U=L[N],Y=v(U);typeof U=="number"||typeof U=="boolean"?(S.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,R+F,S.__data)):U.isMatrix3?(S.__data[0]=U.elements[0],S.__data[1]=U.elements[1],S.__data[2]=U.elements[2],S.__data[3]=0,S.__data[4]=U.elements[3],S.__data[5]=U.elements[4],S.__data[6]=U.elements[5],S.__data[7]=0,S.__data[8]=U.elements[6],S.__data[9]=U.elements[7],S.__data[10]=U.elements[8],S.__data[11]=0):(U.toArray(S.__data,F),F+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,R,S.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,M,E,P){const T=x.value,y=M+"_"+E;if(P[y]===void 0)return typeof T=="number"||typeof T=="boolean"?P[y]=T:P[y]=T.clone(),!0;{const A=P[y];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return P[y]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function _(x){const M=x.uniforms;let E=0;const P=16;for(let y=0,A=M.length;y<A;y++){const D=Array.isArray(M[y])?M[y]:[M[y]];for(let g=0,S=D.length;g<S;g++){const R=D[g],L=Array.isArray(R.value)?R.value:[R.value];for(let F=0,N=L.length;F<N;F++){const U=L[F],Y=v(U),G=E%P,se=G%Y.boundary,re=G+se;E+=se,re!==0&&P-re<Y.storage&&(E+=P-re),R.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=E,E+=Y.storage}}}const T=E%P;return T>0&&(E+=P-T),x.__size=E,x.__cache={},this}function v(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const x in r)n.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:u,dispose:p}}class hc{constructor(e={}){const{canvas:t=Bp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pn,this.toneMapping=er,this.toneMappingExposure=1;const M=this;let E=!1,P=0,T=0,y=null,A=-1,D=null;const g=new St,S=new St;let R=null;const L=new Qe(0);let F=0,N=t.width,U=t.height,Y=1,G=null,se=null;const re=new St(0,0,N,U),ie=new St(0,0,N,U);let Me=!1;const Ce=new lc;let z=!1,q=!1;const K=new Ve,Z=new Ve,ge=new I,Te=new St,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function qe(){return y===null?Y:1}let O=i;function kt(w,k){return t.getContext(w,k)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${K0}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",ve,!1),O===null){const k="webgl2";if(O=kt(k,w),O===null)throw kt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let je,Ze,De,lt,Ne,C,b,V,j,ne,J,Ae,ue,fe,Ye,oe,he,Ue,Fe,Ee,Ke,Oe,dt,B;function me(){je=new i1(O),je.init(),Oe=new Gv(O,je),Ze=new Z_(O,je,e,Oe),De=new Bv(O),Ze.reverseDepthBuffer&&De.buffers.depth.setReversed(!0),lt=new o1(O),Ne=new bv,C=new Hv(O,je,De,Ne,Ze,Oe,lt),b=new Q_(M),V=new n1(M),j=new fm(O),dt=new K_(O,j),ne=new r1(O,j,lt,dt),J=new l1(O,ne,j,lt),Fe=new a1(O,Ze,C),oe=new J_(Ne),Ae=new Ev(M,b,V,je,Ze,dt,oe),ue=new jv(M,Ne),fe=new Tv,Ye=new Iv(je),Ue=new $_(M,b,V,De,J,d,l),he=new Ov(M,J,Ze),B=new Zv(O,lt,Ze,De),Ee=new j_(O,je,lt),Ke=new s1(O,je,lt),lt.programs=Ae.programs,M.capabilities=Ze,M.extensions=je,M.properties=Ne,M.renderLists=fe,M.shadowMap=he,M.state=De,M.info=lt}me();const $=new $v(M,O);this.xr=$,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(N,U,!1))},this.getSize=function(w){return w.set(N,U)},this.setSize=function(w,k,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=w,U=k,t.width=Math.floor(w*Y),t.height=Math.floor(k*Y),W===!0&&(t.style.width=w+"px",t.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(N*Y,U*Y).floor()},this.setDrawingBufferSize=function(w,k,W){N=w,U=k,Y=W,t.width=Math.floor(w*W),t.height=Math.floor(k*W),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(g)},this.getViewport=function(w){return w.copy(re)},this.setViewport=function(w,k,W,X){w.isVector4?re.set(w.x,w.y,w.z,w.w):re.set(w,k,W,X),De.viewport(g.copy(re).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(ie)},this.setScissor=function(w,k,W,X){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,k,W,X),De.scissor(S.copy(ie).multiplyScalar(Y).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(w){De.setScissorTest(Me=w)},this.setOpaqueSort=function(w){G=w},this.setTransparentSort=function(w){se=w},this.getClearColor=function(w){return w.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(w=!0,k=!0,W=!0){let X=0;if(w){let H=!1;if(y!==null){const ae=y.texture.format;H=ae===nc||ae===tc||ae===ec}if(H){const ae=y.texture.type,pe=ae===Ui||ae===Rr||ae===Qs||ae===xs||ae===J0||ae===Q0,Se=Ue.getClearColor(),we=Ue.getClearAlpha(),Pe=Se.r,Ie=Se.g,Re=Se.b;pe?(f[0]=Pe,f[1]=Ie,f[2]=Re,f[3]=we,O.clearBufferuiv(O.COLOR,0,f)):(_[0]=Pe,_[1]=Ie,_[2]=Re,_[3]=we,O.clearBufferiv(O.COLOR,0,_))}else X|=O.COLOR_BUFFER_BIT}k&&(X|=O.DEPTH_BUFFER_BIT,O.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),fe.dispose(),Ye.dispose(),Ne.dispose(),b.dispose(),V.dispose(),J.dispose(),dt.dispose(),B.dispose(),Ae.dispose(),$.dispose(),$.removeEventListener("sessionstart",Xn),$.removeEventListener("sessionend",Cs),qn.stop()};function ee(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=lt.autoReset,k=he.enabled,W=he.autoUpdate,X=he.needsUpdate,H=he.type;me(),lt.autoReset=w,he.enabled=k,he.autoUpdate=W,he.needsUpdate=X,he.type=H}function ve(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Je(w){const k=w.target;k.removeEventListener("dispose",Je),Lt(k)}function Lt(w){Wt(w),Ne.remove(w)}function Wt(w){const k=Ne.get(w).programs;k!==void 0&&(k.forEach(function(W){Ae.releaseProgram(W)}),w.isShaderMaterial&&Ae.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,W,X,H,ae){k===null&&(k=ke);const pe=H.isMesh&&H.matrixWorld.determinant()<0,Se=pt(w,k,W,X,H);De.setMaterial(X,pe);let we=W.index,Pe=1;if(X.wireframe===!0){if(we=ne.getWireframeAttribute(W),we===void 0)return;Pe=2}const Ie=W.drawRange,Re=W.attributes.position;let st=Ie.start*Pe,ct=(Ie.start+Ie.count)*Pe;ae!==null&&(st=Math.max(st,ae.start*Pe),ct=Math.min(ct,(ae.start+ae.count)*Pe)),we!==null?(st=Math.max(st,0),ct=Math.min(ct,we.count)):Re!=null&&(st=Math.max(st,0),ct=Math.min(ct,Re.count));const xt=ct-st;if(xt<0||xt===1/0)return;dt.setup(H,X,Se,W,we);let jt,et=Ee;if(we!==null&&(jt=j.get(we),et=Ke,et.setIndex(jt)),H.isMesh)X.wireframe===!0?(De.setLineWidth(X.wireframeLinewidth*qe()),et.setMode(O.LINES)):et.setMode(O.TRIANGLES);else if(H.isLine){let Le=X.linewidth;Le===void 0&&(Le=1),De.setLineWidth(Le*qe()),H.isLineSegments?et.setMode(O.LINES):H.isLineLoop?et.setMode(O.LINE_LOOP):et.setMode(O.LINE_STRIP)}else H.isPoints?et.setMode(O.POINTS):H.isSprite&&et.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)et.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))et.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Le=H._multiDrawStarts,Dt=H._multiDrawCounts,Ge=H._multiDrawCount,Bt=we?j.get(we).bytesPerElement:1,ki=Ne.get(X).currentProgram.getUniforms();for(let Ft=0;Ft<Ge;Ft++)ki.setValue(O,"_gl_DrawID",Ft),et.render(Le[Ft]/Bt,Dt[Ft])}else if(H.isInstancedMesh)et.renderInstances(st,xt,H.count);else if(W.isInstancedBufferGeometry){const Le=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Dt=Math.min(W.instanceCount,Le);et.renderInstances(st,xt,Dt)}else et.render(st,xt)};function $e(w,k,W){w.transparent===!0&&w.side===Ai&&w.forceSinglePass===!1?(w.side=Tn,w.needsUpdate=!0,Be(w,k,W),w.side=Di,w.needsUpdate=!0,Be(w,k,W),w.side=Ai):Be(w,k,W)}this.compile=function(w,k,W=null){W===null&&(W=w),m=Ye.get(W),m.init(k),x.push(m),W.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),w!==W&&w.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const X=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ae=H.material;if(ae)if(Array.isArray(ae))for(let pe=0;pe<ae.length;pe++){const Se=ae[pe];$e(Se,W,H),X.add(Se)}else $e(ae,W,H),X.add(ae)}),x.pop(),m=null,X},this.compileAsync=function(w,k,W=null){const X=this.compile(w,k,W);return new Promise(H=>{function ae(){if(X.forEach(function(pe){Ne.get(pe).currentProgram.isReady()&&X.delete(pe)}),X.size===0){H(w);return}setTimeout(ae,10)}je.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Kt=null;function Wn(w){Kt&&Kt(w)}function Xn(){qn.stop()}function Cs(){qn.start()}const qn=new Ld;qn.setAnimationLoop(Wn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(w){Kt=w,$.setAnimationLoop(w),w===null?qn.stop():qn.start()},$.addEventListener("sessionstart",Xn),$.addEventListener("sessionend",Cs),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(k),k=$.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,k,y),m=Ye.get(w,x.length),m.init(k),x.push(m),Z.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ce.setFromProjectionMatrix(Z),q=this.localClippingEnabled,z=oe.init(this.clippingPlanes,q),v=fe.get(w,p.length),v.init(),p.push(v),$.enabled===!0&&$.isPresenting===!0){const ae=M.xr.getDepthSensingMesh();ae!==null&&Q(ae,k,-1/0,M.sortObjects)}Q(w,k,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(G,se),ze=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ze&&Ue.addToRenderList(v,w),this.info.render.frame++,z===!0&&oe.beginShadows();const W=m.state.shadowsArray;he.render(W,w,k),z===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=v.opaque,H=v.transmissive;if(m.setupLights(),k.isArrayCamera){const ae=k.cameras;if(H.length>0)for(let pe=0,Se=ae.length;pe<Se;pe++){const we=ae[pe];ce(X,H,w,we)}ze&&Ue.render(w);for(let pe=0,Se=ae.length;pe<Se;pe++){const we=ae[pe];te(v,w,we,we.viewport)}}else H.length>0&&ce(X,H,w,k),ze&&Ue.render(w),te(v,w,k);y!==null&&(C.updateMultisampleRenderTarget(y),C.updateRenderTargetMipmap(y)),w.isScene===!0&&w.onAfterRender(M,w,k),dt.resetDefaultState(),A=-1,D=null,x.pop(),x.length>0?(m=x[x.length-1],z===!0&&oe.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Q(w,k,W,X){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ce.intersectsSprite(w)){X&&Te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Z);const pe=J.update(w),Se=w.material;Se.visible&&v.push(w,pe,Se,W,Te.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ce.intersectsObject(w))){const pe=J.update(w),Se=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Te.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Te.copy(pe.boundingSphere.center)),Te.applyMatrix4(w.matrixWorld).applyMatrix4(Z)),Array.isArray(Se)){const we=pe.groups;for(let Pe=0,Ie=we.length;Pe<Ie;Pe++){const Re=we[Pe],st=Se[Re.materialIndex];st&&st.visible&&v.push(w,pe,st,W,Te.z,Re)}}else Se.visible&&v.push(w,pe,Se,W,Te.z,null)}}const ae=w.children;for(let pe=0,Se=ae.length;pe<Se;pe++)Q(ae[pe],k,W,X)}function te(w,k,W,X){const H=w.opaque,ae=w.transmissive,pe=w.transparent;m.setupLightsView(W),z===!0&&oe.setGlobalState(M.clippingPlanes,W),X&&De.viewport(g.copy(X)),H.length>0&&le(H,k,W),ae.length>0&&le(ae,k,W),pe.length>0&&le(pe,k,W),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function ce(w,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new Cr(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?so:Ui,minFilter:Zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const ae=m.state.transmissionRenderTarget[X.id],pe=X.viewport||g;ae.setSize(pe.z,pe.w);const Se=M.getRenderTarget();M.setRenderTarget(ae),M.getClearColor(L),F=M.getClearAlpha(),F<1&&M.setClearColor(16777215,.5),M.clear(),ze&&Ue.render(W);const we=M.toneMapping;M.toneMapping=er;const Pe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),z===!0&&oe.setGlobalState(M.clippingPlanes,X),le(w,W,X),C.updateMultisampleRenderTarget(ae),C.updateRenderTargetMipmap(ae),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Re=0,st=k.length;Re<st;Re++){const ct=k[Re],xt=ct.object,jt=ct.geometry,et=ct.material,Le=ct.group;if(et.side===Ai&&xt.layers.test(X.layers)){const Dt=et.side;et.side=Tn,et.needsUpdate=!0,be(xt,W,X,jt,et,Le),et.side=Dt,et.needsUpdate=!0,Ie=!0}}Ie===!0&&(C.updateMultisampleRenderTarget(ae),C.updateRenderTargetMipmap(ae))}M.setRenderTarget(Se),M.setClearColor(L,F),Pe!==void 0&&(X.viewport=Pe),M.toneMapping=we}function le(w,k,W){const X=k.isScene===!0?k.overrideMaterial:null;for(let H=0,ae=w.length;H<ae;H++){const pe=w[H],Se=pe.object,we=pe.geometry,Pe=X===null?pe.material:X,Ie=pe.group;Se.layers.test(W.layers)&&be(Se,k,W,we,Pe,Ie)}}function be(w,k,W,X,H,ae){w.onBeforeRender(M,k,W,X,H,ae),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(M,k,W,X,w,ae),H.transparent===!0&&H.side===Ai&&H.forceSinglePass===!1?(H.side=Tn,H.needsUpdate=!0,M.renderBufferDirect(W,k,X,H,w,ae),H.side=Di,H.needsUpdate=!0,M.renderBufferDirect(W,k,X,H,w,ae),H.side=Ai):M.renderBufferDirect(W,k,X,H,w,ae),w.onAfterRender(M,k,W,X,H,ae)}function Be(w,k,W){k.isScene!==!0&&(k=ke);const X=Ne.get(w),H=m.state.lights,ae=m.state.shadowsArray,pe=H.state.version,Se=Ae.getParameters(w,H.state,ae,k,W),we=Ae.getProgramCacheKey(Se);let Pe=X.programs;X.environment=w.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(w.isMeshStandardMaterial?V:b).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Pe===void 0&&(w.addEventListener("dispose",Je),Pe=new Map,X.programs=Pe);let Ie=Pe.get(we);if(Ie!==void 0){if(X.currentProgram===Ie&&X.lightsStateVersion===pe)return Et(w,Se),Ie}else Se.uniforms=Ae.getUniforms(w),w.onBeforeCompile(Se,M),Ie=Ae.acquireProgram(Se,we),Pe.set(we,Ie),X.uniforms=Se.uniforms;const Re=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=oe.uniform),Et(w,Se),X.needsLights=mn(w),X.lightsStateVersion=pe,X.needsLights&&(Re.ambientLightColor.value=H.state.ambient,Re.lightProbe.value=H.state.probe,Re.directionalLights.value=H.state.directional,Re.directionalLightShadows.value=H.state.directionalShadow,Re.spotLights.value=H.state.spot,Re.spotLightShadows.value=H.state.spotShadow,Re.rectAreaLights.value=H.state.rectArea,Re.ltc_1.value=H.state.rectAreaLTC1,Re.ltc_2.value=H.state.rectAreaLTC2,Re.pointLights.value=H.state.point,Re.pointLightShadows.value=H.state.pointShadow,Re.hemisphereLights.value=H.state.hemi,Re.directionalShadowMap.value=H.state.directionalShadowMap,Re.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Re.spotShadowMap.value=H.state.spotShadowMap,Re.spotLightMatrix.value=H.state.spotLightMatrix,Re.spotLightMap.value=H.state.spotLightMap,Re.pointShadowMap.value=H.state.pointShadowMap,Re.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Ie,X.uniformsList=null,Ie}function ot(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=ra.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Et(w,k){const W=Ne.get(w);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function pt(w,k,W,X,H){k.isScene!==!0&&(k=ke),C.resetTextureUnits();const ae=k.fog,pe=X.isMeshStandardMaterial?k.environment:null,Se=y===null?M.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:ir,we=(X.isMeshStandardMaterial?V:b).get(X.envMap||pe),Pe=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ie=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Re=!!W.morphAttributes.position,st=!!W.morphAttributes.normal,ct=!!W.morphAttributes.color;let xt=er;X.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(xt=M.toneMapping);const jt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,et=jt!==void 0?jt.length:0,Le=Ne.get(X),Dt=m.state.lights;if(z===!0&&(q===!0||w!==D)){const Xt=w===D&&X.id===A;oe.setState(X,w,Xt)}let Ge=!1;X.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Dt.state.version||Le.outputColorSpace!==Se||H.isBatchedMesh&&Le.batching===!1||!H.isBatchedMesh&&Le.batching===!0||H.isBatchedMesh&&Le.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Le.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Le.instancing===!1||!H.isInstancedMesh&&Le.instancing===!0||H.isSkinnedMesh&&Le.skinning===!1||!H.isSkinnedMesh&&Le.skinning===!0||H.isInstancedMesh&&Le.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Le.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Le.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Le.instancingMorph===!1&&H.morphTexture!==null||Le.envMap!==we||X.fog===!0&&Le.fog!==ae||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==oe.numPlanes||Le.numIntersection!==oe.numIntersection)||Le.vertexAlphas!==Pe||Le.vertexTangents!==Ie||Le.morphTargets!==Re||Le.morphNormals!==st||Le.morphColors!==ct||Le.toneMapping!==xt||Le.morphTargetsCount!==et)&&(Ge=!0):(Ge=!0,Le.__version=X.version);let Bt=Le.currentProgram;Ge===!0&&(Bt=Be(X,k,H));let ki=!1,Ft=!1,bt=!1;const wt=Bt.getUniforms(),Zt=Le.uniforms;if(De.useProgram(Bt.program)&&(ki=!0,Ft=!0,bt=!0),X.id!==A&&(A=X.id,Ft=!0),ki||D!==w){Ze.reverseDepthBuffer?(K.copy(w.projectionMatrix),Hp(K),Gp(K),wt.setValue(O,"projectionMatrix",K)):wt.setValue(O,"projectionMatrix",w.projectionMatrix),wt.setValue(O,"viewMatrix",w.matrixWorldInverse);const Xt=wt.map.cameraPosition;Xt!==void 0&&Xt.setValue(O,ge.setFromMatrixPosition(w.matrixWorld)),Ze.logarithmicDepthBuffer&&wt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&wt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,Ft=!0,bt=!0)}if(H.isSkinnedMesh){wt.setOptional(O,H,"bindMatrix"),wt.setOptional(O,H,"bindMatrixInverse");const Xt=H.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),wt.setValue(O,"boneTexture",Xt.boneTexture,C))}H.isBatchedMesh&&(wt.setOptional(O,H,"batchingTexture"),wt.setValue(O,"batchingTexture",H._matricesTexture,C),wt.setOptional(O,H,"batchingIdTexture"),wt.setValue(O,"batchingIdTexture",H._indirectTexture,C),wt.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&wt.setValue(O,"batchingColorTexture",H._colorsTexture,C));const Ir=W.morphAttributes;if((Ir.position!==void 0||Ir.normal!==void 0||Ir.color!==void 0)&&Fe.update(H,W,Bt),(Ft||Le.receiveShadow!==H.receiveShadow)&&(Le.receiveShadow=H.receiveShadow,wt.setValue(O,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Zt.envMap.value=we,Zt.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(Zt.envMapIntensity.value=k.environmentIntensity),Ft&&(wt.setValue(O,"toneMappingExposure",M.toneMappingExposure),Le.needsLights&&rt(Zt,bt),ae&&X.fog===!0&&ue.refreshFogUniforms(Zt,ae),ue.refreshMaterialUniforms(Zt,X,Y,U,m.state.transmissionRenderTarget[w.id]),ra.upload(O,ot(Le),Zt,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ra.upload(O,ot(Le),Zt,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&wt.setValue(O,"center",H.center),wt.setValue(O,"modelViewMatrix",H.modelViewMatrix),wt.setValue(O,"normalMatrix",H.normalMatrix),wt.setValue(O,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Xt=X.uniformsGroups;for(let Dr=0,Ls=Xt.length;Dr<Ls;Dr++){const Nn=Xt[Dr];B.update(Nn,Bt),B.bind(Nn,Bt)}}return Bt}function rt(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function mn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(w,k,W){Ne.get(w.texture).__webglTexture=k,Ne.get(w.depthTexture).__webglTexture=W;const X=Ne.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const W=Ne.get(w);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,W=0){y=w,P=k,T=W;let X=!0,H=null,ae=!1,pe=!1;if(w){const we=Ne.get(w);if(we.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(O.FRAMEBUFFER,null),X=!1;else if(we.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(we.__hasExternalTextures)C.rebindTextures(w,Ne.get(w.texture).__webglTexture,Ne.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Re=w.depthTexture;if(we.__boundDepthTexture!==Re){if(Re!==null&&Ne.has(Re)&&(w.width!==Re.image.width||w.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const Pe=w.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(pe=!0);const Ie=Ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ie[k])?H=Ie[k][W]:H=Ie[k],ae=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?H=Ne.get(w).__webglMultisampledFramebuffer:Array.isArray(Ie)?H=Ie[W]:H=Ie,g.copy(w.viewport),S.copy(w.scissor),R=w.scissorTest}else g.copy(re).multiplyScalar(Y).floor(),S.copy(ie).multiplyScalar(Y).floor(),R=Me;if(De.bindFramebuffer(O.FRAMEBUFFER,H)&&X&&De.drawBuffers(w,H),De.viewport(g),De.scissor(S),De.setScissorTest(R),ae){const we=Ne.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,we.__webglTexture,W)}else if(pe){const we=Ne.get(w.texture),Pe=k||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,we.__webglTexture,W||0,Pe)}A=-1},this.readRenderTargetPixels=function(w,k,W,X,H,ae,pe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){De.bindFramebuffer(O.FRAMEBUFFER,Se);try{const we=w.texture,Pe=we.format,Ie=we.type;if(!Ze.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-X&&W>=0&&W<=w.height-H&&O.readPixels(k,W,X,H,Oe.convert(Pe),Oe.convert(Ie),ae)}finally{const we=y!==null?Ne.get(y).__webglFramebuffer:null;De.bindFramebuffer(O.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(w,k,W,X,H,ae,pe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&pe!==void 0&&(Se=Se[pe]),Se){const we=w.texture,Pe=we.format,Ie=we.type;if(!Ze.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-X&&W>=0&&W<=w.height-H){De.bindFramebuffer(O.FRAMEBUFFER,Se);const Re=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Re),O.bufferData(O.PIXEL_PACK_BUFFER,ae.byteLength,O.STREAM_READ),O.readPixels(k,W,X,H,Oe.convert(Pe),Oe.convert(Ie),0);const st=y!==null?Ne.get(y).__webglFramebuffer:null;De.bindFramebuffer(O.FRAMEBUFFER,st);const ct=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await zp(O,ct,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Re),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ae),O.deleteBuffer(Re),O.deleteSync(ct),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,W=0){w.isTexture!==!0&&(ia("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const X=Math.pow(2,-W),H=Math.floor(w.image.width*X),ae=Math.floor(w.image.height*X),pe=k!==null?k.x:0,Se=k!==null?k.y:0;C.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,pe,Se,H,ae),De.unbindTexture()},this.copyTextureToTexture=function(w,k,W=null,X=null,H=0){w.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],k=arguments[2],H=arguments[3]||0,W=null);let ae,pe,Se,we,Pe,Ie;W!==null?(ae=W.max.x-W.min.x,pe=W.max.y-W.min.y,Se=W.min.x,we=W.min.y):(ae=w.image.width,pe=w.image.height,Se=0,we=0),X!==null?(Pe=X.x,Ie=X.y):(Pe=0,Ie=0);const Re=Oe.convert(k.format),st=Oe.convert(k.type);C.setTexture2D(k,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const ct=O.getParameter(O.UNPACK_ROW_LENGTH),xt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),jt=O.getParameter(O.UNPACK_SKIP_PIXELS),et=O.getParameter(O.UNPACK_SKIP_ROWS),Le=O.getParameter(O.UNPACK_SKIP_IMAGES),Dt=w.isCompressedTexture?w.mipmaps[H]:w.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Dt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Dt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Se),O.pixelStorei(O.UNPACK_SKIP_ROWS,we),w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,H,Pe,Ie,ae,pe,Re,st,Dt.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,H,Pe,Ie,Dt.width,Dt.height,Re,Dt.data):O.texSubImage2D(O.TEXTURE_2D,H,Pe,Ie,ae,pe,Re,st,Dt),O.pixelStorei(O.UNPACK_ROW_LENGTH,ct),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,jt),O.pixelStorei(O.UNPACK_SKIP_ROWS,et),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Le),H===0&&k.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(w,k,W=null,X=null,H=0){w.isTexture!==!0&&(ia("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,w=arguments[2],k=arguments[3],H=arguments[4]||0);let ae,pe,Se,we,Pe,Ie,Re,st,ct;const xt=w.isCompressedTexture?w.mipmaps[H]:w.image;W!==null?(ae=W.max.x-W.min.x,pe=W.max.y-W.min.y,Se=W.max.z-W.min.z,we=W.min.x,Pe=W.min.y,Ie=W.min.z):(ae=xt.width,pe=xt.height,Se=xt.depth,we=0,Pe=0,Ie=0),X!==null?(Re=X.x,st=X.y,ct=X.z):(Re=0,st=0,ct=0);const jt=Oe.convert(k.format),et=Oe.convert(k.type);let Le;if(k.isData3DTexture)C.setTexture3D(k,0),Le=O.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)C.setTexture2DArray(k,0),Le=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const Dt=O.getParameter(O.UNPACK_ROW_LENGTH),Ge=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Bt=O.getParameter(O.UNPACK_SKIP_PIXELS),ki=O.getParameter(O.UNPACK_SKIP_ROWS),Ft=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,xt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,xt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,we),O.pixelStorei(O.UNPACK_SKIP_ROWS,Pe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ie),w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Le,H,Re,st,ct,ae,pe,Se,jt,et,xt.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(Le,H,Re,st,ct,ae,pe,Se,jt,xt.data):O.texSubImage3D(Le,H,Re,st,ct,ae,pe,Se,jt,et,xt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Dt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ge),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Bt),O.pixelStorei(O.UNPACK_SKIP_ROWS,ki),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ft),H===0&&k.generateMipmaps&&O.generateMipmap(Le),De.unbindTexture()},this.initRenderTarget=function(w){Ne.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),De.unbindTexture()},this.resetState=function(){P=0,T=0,y=null,De.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ic?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===_a?"display-p3":"srgb"}}class co extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const zu=new I,Hu=new St,Gu=new St,Jv=new I,Vu=new Ve,zo=new I,ll=new Ts,Wu=new Ve,cl=new sc;class Qv extends vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$c,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ni),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,zo),this.boundingBox.expandByPoint(zo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ts),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,zo),this.boundingSphere.expandByPoint(zo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ll.copy(this.boundingSphere),ll.applyMatrix4(r),e.ray.intersectsSphere(ll)!==!1&&(Wu.copy(r).invert(),cl.copy(e.ray).applyMatrix4(Wu),!(this.boundingBox!==null&&cl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,cl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new St,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$c?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===hp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Hu.fromBufferAttribute(r.attributes.skinIndex,e),Gu.fromBufferAttribute(r.attributes.skinWeight,e),zu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Gu.getComponent(s);if(a!==0){const o=Hu.getComponent(s);Vu.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Jv.copy(zu).applyMatrix4(Vu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Fd extends Ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ex extends un{constructor(e=null,t=1,i=1,r,s,a,o,l,u=wn,c=wn,h,d){super(null,a,o,l,u,c,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xu=new Ve,tx=new Ve;class dc{constructor(e=[],t=[]){this.uuid=Pr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ve;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:tx;Xu.multiplyMatrices(o,t[s]),Xu.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new dc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new ex(t,e,e,Hn,ui);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Fd),this.bones.push(a),this.boneInverses.push(new Ve().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class fc extends un{constructor(e,t,i,r,s,a,o,l,u){super(e,t,i,r,s,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class uo extends ii{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],h=[],d=[],f=[];let _=0;const v=[],m=i/2;let p=0;x(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new hn(h,3)),this.setAttribute("normal",new hn(d,3)),this.setAttribute("uv",new hn(f,2));function x(){const E=new I,P=new I;let T=0;const y=(t-e)/i;for(let A=0;A<=s;A++){const D=[],g=A/s,S=g*(t-e)+e;for(let R=0;R<=r;R++){const L=R/r,F=L*l+o,N=Math.sin(F),U=Math.cos(F);P.x=S*N,P.y=-g*i+m,P.z=S*U,h.push(P.x,P.y,P.z),E.set(N,y,U).normalize(),d.push(E.x,E.y,E.z),f.push(L,1-g),D.push(_++)}v.push(D)}for(let A=0;A<r;A++)for(let D=0;D<s;D++){const g=v[D][A],S=v[D+1][A],R=v[D+1][A+1],L=v[D][A+1];e>0&&(c.push(g,S,L),T+=3),t>0&&(c.push(S,R,L),T+=3)}u.addGroup(p,T,0),p+=T}function M(E){const P=_,T=new nt,y=new I;let A=0;const D=E===!0?e:t,g=E===!0?1:-1;for(let R=1;R<=r;R++)h.push(0,m*g,0),d.push(0,g,0),f.push(.5,.5),_++;const S=_;for(let R=0;R<=r;R++){const F=R/r*l+o,N=Math.cos(F),U=Math.sin(F);y.x=D*U,y.y=m*g,y.z=D*N,h.push(y.x,y.y,y.z),d.push(0,g,0),T.x=N*.5+.5,T.y=U*.5*g+.5,f.push(T.x,T.y),_++}for(let R=0;R<r;R++){const L=P+R,F=S+R;E===!0?c.push(F,F+1,L):c.push(F+1,F,L),A+=3}u.addGroup(p,A,E===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pc extends uo{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new pc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class mc extends ii{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),u(i),c(),this.setAttribute("position",new hn(s,3)),this.setAttribute("normal",new hn(s.slice(),3)),this.setAttribute("uv",new hn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const M=new I,E=new I,P=new I;for(let T=0;T<t.length;T+=3)f(t[T+0],M),f(t[T+1],E),f(t[T+2],P),l(M,E,P,x)}function l(x,M,E,P){const T=P+1,y=[];for(let A=0;A<=T;A++){y[A]=[];const D=x.clone().lerp(E,A/T),g=M.clone().lerp(E,A/T),S=T-A;for(let R=0;R<=S;R++)R===0&&A===T?y[A][R]=D:y[A][R]=D.clone().lerp(g,R/S)}for(let A=0;A<T;A++)for(let D=0;D<2*(T-A)-1;D++){const g=Math.floor(D/2);D%2===0?(d(y[A][g+1]),d(y[A+1][g]),d(y[A][g])):(d(y[A][g+1]),d(y[A+1][g+1]),d(y[A+1][g]))}}function u(x){const M=new I;for(let E=0;E<s.length;E+=3)M.x=s[E+0],M.y=s[E+1],M.z=s[E+2],M.normalize().multiplyScalar(x),s[E+0]=M.x,s[E+1]=M.y,s[E+2]=M.z}function c(){const x=new I;for(let M=0;M<s.length;M+=3){x.x=s[M+0],x.y=s[M+1],x.z=s[M+2];const E=m(x)/2/Math.PI+.5,P=p(x)/Math.PI+.5;a.push(E,1-P)}_(),h()}function h(){for(let x=0;x<a.length;x+=6){const M=a[x+0],E=a[x+2],P=a[x+4],T=Math.max(M,E,P),y=Math.min(M,E,P);T>.9&&y<.1&&(M<.2&&(a[x+0]+=1),E<.2&&(a[x+2]+=1),P<.2&&(a[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,M){const E=x*3;M.x=e[E+0],M.y=e[E+1],M.z=e[E+2]}function _(){const x=new I,M=new I,E=new I,P=new I,T=new nt,y=new nt,A=new nt;for(let D=0,g=0;D<s.length;D+=9,g+=6){x.set(s[D+0],s[D+1],s[D+2]),M.set(s[D+3],s[D+4],s[D+5]),E.set(s[D+6],s[D+7],s[D+8]),T.set(a[g+0],a[g+1]),y.set(a[g+2],a[g+3]),A.set(a[g+4],a[g+5]),P.copy(x).add(M).add(E).divideScalar(3);const S=m(P);v(T,g+0,x,S),v(y,g+2,M,S),v(A,g+4,E,S)}}function v(x,M,E,P){P<0&&x.x===1&&(a[M]=x.x-1),E.x===0&&E.z===0&&(a[M]=P/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.vertices,e.indices,e.radius,e.details)}}class gc extends mc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new gc(e.radius,e.detail)}}class _c extends ii{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const c=[],h=new I,d=new I,f=[],_=[],v=[],m=[];for(let p=0;p<=i;p++){const x=[],M=p/i;let E=0;p===0&&a===0?E=.5/t:p===i&&l===Math.PI&&(E=-.5/t);for(let P=0;P<=t;P++){const T=P/t;h.x=-e*Math.cos(r+T*s)*Math.sin(a+M*o),h.y=e*Math.cos(a+M*o),h.z=e*Math.sin(r+T*s)*Math.sin(a+M*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(T+E,1-M),x.push(u++)}c.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const M=c[p][x+1],E=c[p][x],P=c[p+1][x],T=c[p+1][x+1];(p!==0||a>0)&&f.push(M,E,T),(p!==i-1||l<Math.PI)&&f.push(E,P,T)}this.setIndex(f),this.setAttribute("position",new hn(_,3)),this.setAttribute("normal",new hn(v,3)),this.setAttribute("uv",new hn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fi extends ao{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Md,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vc extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class xc extends vc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ul=new Ve,qu=new I,Yu=new I;class nx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lc,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;qu.setFromMatrixPosition(e.matrixWorld),t.position.copy(qu),Yu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yu),t.updateMatrixWorld(),ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ix extends nx{constructor(){super(new cc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mc extends vc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new ix}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Sc extends vc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const $u=new Ve;class Od{constructor(e,t,i=0,r=1/0){this.ray=new sc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new oc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $u.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($u),this}intersectObject(e,t=!0,i=[]){return P0(e,this,i,t),i.sort(Ku),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)P0(e[r],this,i,t);return i.sort(Ku),i}}function Ku(n,e){return n.distance-e.distance}function P0(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)P0(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:K0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=K0);const fi={ceiling:15525851,wall:13814974,wallUpper:14210248,trim:16249834,floorTimber:9072722,benchtop:12168342},hl=new Map,rx=["roughness","metalness","flat","transparent","opacity","side","emissive","emissiveIntensity","vertexColors"];function sx(n,e={}){let t=String(n);for(const r of rx)e[r]!==void 0&&(t+="|"+r+"="+JSON.stringify(e[r]));if(hl.has(t))return hl.get(t);const i=new Fi({color:n,roughness:e.roughness??.85,metalness:e.metalness??0,flatShading:e.flat??!1,transparent:e.transparent??!1,opacity:e.opacity??1,side:e.side??Di,emissive:e.emissive??0,emissiveIntensity:e.emissiveIntensity??1,vertexColors:e.vertexColors??!1});return hl.set(t,i),i}const xa={box:new cn(1,1,1),plane:new lo(1,1),cyl:new uo(.5,.5,1,10),cone:new pc(.5,1,8),sphere:new _c(.5,12,10)};function rr(n,e,t,i,r={}){const s=new vt(xa.box,r.material||sx(i,r));return s.scale.set(n,e,t),s.castShadow=r.castShadow??!0,s.receiveShadow=r.receiveShadow??!0,s}const ox=new Set;function ax(n){ox.add(n)}let kd=8,I0=null;function lx(n){I0=n,kd=Math.min(8,n.capabilities.getMaxAnisotropy())}let cx=n=>{const e=document.createElement("canvas");return e.width=e.height=n,e};const Bd=(n,e=n)=>{const t=cx(n);return t.width=n,t.height=e,t};let zd=0;function yc(n,e){return e&&(n.colorSpace=Pn),n.wrapS=n.wrapT=aa,n.anisotropy=kd,n.generateMipmaps=!0,n.minFilter=Zi,n.magFilter=zn,zd+=n.image.width*n.image.height*4*4/3,I0&&I0.initTexture(n),n}function fn(n){return yc(new fc(ux(n)),!0)}function D0(n){return n.wrapS=n.wrapT=ji,n}function ux(n){const e=Bd(n.w,n.h),t=e.getContext("2d"),i=t.createImageData(n.w,n.h),r=i.data,s=n.d,a=n.w*n.h;for(let o=0,l=0,u=0;o<a;o++,l+=3,u+=4){const c=s[l],h=s[l+1],d=s[l+2];r[u]=(c<0?0:c>1?1:c)*255+.5,r[u+1]=(h<0?0:h>1?1:h)*255+.5,r[u+2]=(d<0?0:d>1?1:d)*255+.5,r[u+3]=255}return t.putImageData(i,0,0),e}const yt=n=>n<0?0:n>1?1:n,pi=n=>[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255];function hx(n){const[e,t,i]=n,r=Math.max(e,t,i),s=Math.min(e,t,i),a=(r+s)/2;if(r===s)return[0,0,a];const o=r-s,l=a>.5?o/(2-r-s):o/(r+s);let u;return r===e?u=((t-i)/o+(t<i?6:0))/6:r===t?u=((i-e)/o+2)/6:u=((e-t)/o+4)/6,[u,l,a]}function dx(n,e,t){if(e===0)return[t,t,t];const i=t<.5?t*(1+e):t+e-t*e,r=2*t-i,s=a=>(a=(a%1+1)%1,a<1/6?r+(i-r)*6*a:a<1/2?i:a<2/3?r+(i-r)*(2/3-a)*6:r);return[s(n+1/3),s(n),s(n-1/3)]}function hi(n,e=1,t=0,i=1){const[r,s,a]=hx(Array.isArray(n)?n:pi(n));return dx(r+t/360,yt(s*i),yt(a*e))}function pn(n,e){return{w:n,h:e,d:new Float32Array(n*e*3)}}function gi(n,e){const t=Array.isArray(e)?e:pi(e),i=n.d;for(let r=0;r<i.length;r+=3)i[r]=t[0],i[r+1]=t[1],i[r+2]=t[2]}function Ec(n,e,t,i,r){if(r<=0)return;const s=n.w,a=n.h;let o=e,l=t;(o<0||o>=s)&&(o=(o%s+s)%s),(l<0||l>=a)&&(l=(l%a+a)%a);const u=(l*s+o)*3,c=n.d,h=1-r;c[u]=c[u]*h+i[0]*r,c[u+1]=c[u+1]*h+i[1]*r,c[u+2]=c[u+2]*h+i[2]*r}function kn(n,e,t,i,r,s,a=1){const o=Array.isArray(s)?s:pi(s),l=Math.round(e),u=Math.round(i),c=Math.round(t),h=Math.round(r);if(a<1){for(let v=c;v<h;v++)for(let m=l;m<u;m++)Ec(n,m,v,o,a);return}const d=n.w,f=n.h,_=n.d;for(let v=c;v<h;v++){let m=v;(m<0||m>=f)&&(m=(m%f+f)%f);const p=m*d;for(let x=l;x<u;x++){let M=x;(M<0||M>=d)&&(M=(M%d+d)%d);const E=(p+M)*3;_[E]=o[0],_[E+1]=o[1],_[E+2]=o[2]}}}function ho(n,e,t,i,r,s=1){const a=i+1;for(let o=Math.floor(t-a);o<=Math.ceil(t+a);o++)for(let l=Math.floor(e-a);l<=Math.ceil(e+a);l++){const u=l+.5-e,c=o+.5-t,h=yt(i-Math.sqrt(u*u+c*c)+.5);h>0&&Ec(n,l,o,r,s*h)}}function U0(n,e,t,i,r=1){const s=Math.max(1,t)/2;for(let a=1;a<e.length;a++){const[o,l]=e[a-1],[u,c]=e[a],h=Math.hypot(u-o,c-l),d=Math.max(1,Math.ceil(h));for(let f=0;f<=d;f++){const _=f/d;ho(n,o+(u-o)*_,l+(c-l)*_,s,i,r)}}}function Hd(n,e,t,i,r,s,a,o){const l=n.w,u=n.h,c=n.d,h=s/2,d=a[0],f=a[1],_=a[2],v=Math.PI*2/i;for(let m=0;m<u;m++){const p=m*l,x=e+t*Math.sin(m*v+r),M=x-h,E=x+h,P=Math.floor(M),T=Math.ceil(E);for(let y=P;y<=T;y++){const A=yt(Math.min(y+1,E)-Math.max(y,M));if(A<=0)continue;const D=o*A,g=1-D;let S=y;(S<0||S>=l)&&(S=(S%l+l)%l);const R=(p+S)*3;c[R]=c[R]*g+d*D,c[R+1]=c[R+1]*g+f*D,c[R+2]=c[R+2]*g+_*D}}}const ju=n=>n*n*(3-2*n);function fx(n,e,t){const i=new Float32Array(e*t);for(let r=0;r<i.length;r++)i[r]=n.float();return i}const Zu=256;function yn(n,e,t={}){const{p0:i=32,octaves:r=4,gain:s=.5,lacunarity:a=2,h:o=e}=t,l=t.p0x??i,u=t.p0y??i,c=new Float32Array(e*o),h=[];let d=1,f=0;for(let P=0;P<r;P++){const T=Math.min(Zu,Math.max(1,Math.round(l*a**P))),y=Math.min(Zu,Math.max(1,Math.round(u*a**P)));h.push({lat:fx(n,T,y),px:T,py:y,amp:d}),f+=d,d*=s}const _=new Float64Array(e*o),v=new Int32Array(e),m=new Int32Array(e),p=new Float64Array(e);for(let P=0;P<h.length;P++){const T=h[P],y=T.lat,A=T.px,D=T.py,g=T.amp,S=A/e,R=D/o;for(let L=0;L<e;L++){const F=L*S,N=F|0,U=N>=A?N%A:N;v[L]=U,m[L]=U+1>=A?0:U+1,p[L]=ju(F-N)}for(let L=0;L<o;L++){const F=L*R,N=F|0,U=ju(F-N),Y=1-U,G=N>=D?N%D:N,se=G*A,re=(G+1>=D?0:G+1)*A,ie=L*e;for(let Me=0;Me<e;Me++){const Ce=v[Me],z=m[Me],q=p[Me],K=y[se+Ce],Z=y[se+z],ge=y[re+Ce],Te=y[re+z];_[ie+Me]+=g*((K+(Z-K)*q)*Y+(ge+(Te-ge)*q)*U)}}}let x=1/0,M=-1/0;for(let P=0;P<c.length;P++){c[P]=_[P]/f;const T=c[P];T<x&&(x=T),T>M&&(M=T)}const E=M-x||1;for(let P=0;P<c.length;P++)c[P]=(c[P]-x)/E;return c}function sr(n,e,t,i){const r=new Float32Array(e*t),s=new Float32Array(e*t),a=2*i+1,o=new Int32Array(e),l=new Int32Array(e);for(let h=0;h<e;h++)o[h]=((h-i)%e+e)%e,l[h]=(h+i+1)%e;for(let h=0;h<t;h++){const d=h*e;let f=0;for(let _=-i;_<=i;_++)f+=n[d+(_%e+e)%e];for(let _=0;_<e;_++)r[d+_]=f/a,f-=n[d+o[_]],f+=n[d+l[_]]}const u=new Int32Array(t),c=new Int32Array(t);for(let h=0;h<t;h++)u[h]=((h-i)%t+t)%t*e,c[h]=(h+i+1)%t*e;for(let h=0;h<e;h++){let d=0;for(let f=-i;f<=i;f++)d+=r[(f%t+t)%t*e+h];for(let f=0;f<t;f++)s[f*e+h]=d/a,d-=r[u[f]+h],d+=r[c[f]+h]}return s}function px(n,e,t=1.5,i=null){const r=i??n.length/e,s=new Uint8Array(e*r*4),a=t/8,o=new Int32Array(e),l=new Int32Array(e);for(let u=0;u<e;u++)o[u]=(u-1+e)%e,l[u]=(u+1)%e;for(let u=0;u<r;u++){const c=(u-1+r)%r*e,h=u*e,d=(u+1)%r*e;let f=h*4;for(let _=0;_<e;_++,f+=4){const v=o[_],m=l[_],p=n[c+v],x=n[c+_],M=n[c+m],E=n[h+v],P=n[h+m],T=n[d+v],y=n[d+_],A=n[d+m],D=M+2*P+A-(p+2*E+T),g=T+2*y+A-(p+2*x+M),S=-D*a,R=g*a,L=1/Math.sqrt(S*S+R*R+1);s[f]=(S*L*.5+.5)*255+.5,s[f+1]=(R*L*.5+.5)*255+.5,s[f+2]=(L*.5+.5)*255+.5,s[f+3]=255}}return s}function ri(n,e,t=1.5,i=null){const r=i??n.length/e;return yc(new fc(Gd(px(n,e,t,r),e,r)),!1)}function Gd(n,e,t){const i=Bd(e,t),r=i.getContext("2d"),s=r.createImageData(e,t);return s.data.set(n),r.putImageData(s,0,0),i}function mx(n,e,t,i,r=null){const a=n*(r??n),o=new Uint8Array(a*4);for(let l=0,u=0;l<a;l++,u+=4){const c=e?e[l]:1,h=t?t[l]:.85,d=i?i[l]:0;o[u]=(c<0?0:c>1?1:c)*255+.5,o[u+1]=(h<0?0:h>1?1:h)*255+.5,o[u+2]=(d<0?0:d>1?1:d)*255+.5,o[u+3]=255}return o}function $t(n,e,t,i,r=null){const s=r??n;return yc(new fc(Gd(mx(n,e,t,i,s),n,s)),!1)}const Vd={},Ju=new Map;function Nt(n,e){Vd[n]=e}function gx(){var n,e;for(const t of Ju.values()){for(const i of["map","normalMap","ormMap"])(e=(n=t[i])==null?void 0:n.dispose)==null||e.call(n);if(t.maps)for(const i of t.maps)i.dispose()}Ju.clear(),zd=0}ax(gx);const dl={blackbutt:{base:13214581,dark:10122054,rough:.4},spottedGum:{base:11040332,dark:8015662,rough:.38},jarrah:{base:9061685,dark:6040352,rough:.44},tasOak:{base:14072722,dark:11111779,rough:.42},pine:{base:14467213,dark:11571294,rough:.5}};Nt("timberFloor",(n,e={})=>{const a=1.9500000000000002,o=1024/a,l=1024/15,u=Math.max(2,Math.round(.004*o)),c=e.species||n.pick(Object.keys(dl)),h=dl[c]||dl.blackbutt,d=pn(1024,1024);gi(d,hi(h.dark,.72));const f=pi(h.dark),_=hi(h.base,1.25),v=[];for(let T=0;T<15;T++){const y=T*l+u/2,A=(T+1)*l-u/2,D=hi(h.base,1+n.range(-.06,.06),n.range(-3,3));kn(d,y,0,A,1024,D);const g=Math.round(n.range(.15,.85)*1024);v.push(g),kn(d,y,g,A,g+2,hi(h.dark,.8),.85),kn(d,y,g-2,A,g,_,.25);const S=n.int(28,60);for(let R=0;R<S;R++){const L=n.range(y+1,A-1),F=n.range(1.5,4),N=1024/n.int(2,5),U=n.range(0,Math.PI*2),Y=n.range(2,3),G=n.range(.04,.12),se=n.chance(.25)?_:f;Hd(d,L,F,N,U,Y,se,G)}if(n.chance(.2)){const R=n.range(204.8,819.2),L=n.range(60,160),F=n.range(y+4,A-4);for(let N=0;N<n.int(2,4);N++){const U=(N+1)*n.range(3,7),Y=[];for(let G=0;G<=16;G++){const se=G/16;Y.push([F+(se-.5)*2*U,R-L*(1-(se-.5)**2*4)])}U0(d,Y,2,f,.06)}}}const m=yn(n,512,{p0:64,octaves:3}),p=new Float32Array(512*512),x=new Float32Array(512*512),M=new Float32Array(512*512),E=512/15,P=u*512/1024;for(let T=0;T<512;T++)for(let y=0;y<512;y++){const A=T*512+y,D=Math.floor(y/E),g=y-D*E,S=g<P/2||g>E-P/2,R=T*1024/512,L=v[D],F=R>=L-1&&R<=L+2,N=S||F;x[A]=N?.15:.75,p[A]=yt(h.rough+(N?.1:0)+(m[A]-.5)*.1),M[A]=N?.72:1}return{map:fn(d),normalMap:ri(sr(x,512,512,1),512,1.2),ormMap:$t(512,M,p,null),uvScale:[a,a],normalScale:.5,species:c,tinted:!1}});Nt("plasterWall",(n,e={})=>{const r=e.rough??.88,s=yn(n,256,{p0:64,octaves:3,gain:.45}),a=new Float32Array(256*256),o=.4*256/2;for(let l=0;l<256;l++)for(let u=0;u<256;u++){const c=l*256+u;let h=r+(s[c]**1.5-.5)*.1;e.ceiling||(h+=Math.cos(u/o*Math.PI*2)*.02),a[c]=yt(h)}return{ormMap:$t(256,null,a,null),uvScale:[2,2],normalScale:0,tinted:!0}});Nt("plasterCeiling",n=>Vd.plasterWall(n,{rough:.93,ceiling:!0}));Nt("paintedJoinery",n=>{const i=yn(n,256,{p0:64,octaves:3}),r=new Float32Array(256*256);for(let s=0;s<256;s++)for(let a=0;a<256;a++){const o=s*256+a;r[o]=yt(.42+(i[o]-.5)*.06+Math.sin(a/256*Math.PI*2*12)*.015)}return{ormMap:$t(256,null,r,null),uvScale:[1,1],normalScale:0,tinted:!0}});Nt("carpetPile",n=>{const i=pn(512,512);gi(i,[1,1,1]);const r=yn(n,512,{p0x:64,p0y:192,octaves:3,gain:.5}),s=i.d;for(let l=0;l<512;l++)for(let u=0;u<512;u++){const c=l*512+u,h=Math.cos(l/256*Math.PI*2)*.03,d=yt(.9+(r[c]-.5)*.16+h);s[c*3]=d,s[c*3+1]=d,s[c*3+2]=d}for(let l=0;l<1200;l++){const u=n.pick([[1.1,0],[.78,8],[.92,-10]]),c=hi(16777215,u[0],u[1],1);if(u[1]!==0){const h=n.range(0,1);c[0]=c[0]*(.94+h*.12),c[2]=c[2]*(1.06-h*.12)}ho(i,n.range(0,512),n.range(0,512),n.range(1,2),c,.25)}const a=yn(n,512,{p0x:43,p0y:128,octaves:3}),o=new Float32Array(512*512);for(let l=0;l<o.length;l++)o[l]=yt(.92+(a[l]-.5)*.06);return{map:fn(i),normalMap:ri(a,512,.6),ormMap:$t(512,null,o,null),uvScale:[1,1],normalScale:.7,tinted:!0}});Nt("ceramicTile",(n,e={})=>{const i=e.tile??.3,r=2,s=i*r,a=Math.max(2,Math.round(.003*512/s)),o=3,l=512/r,u=pi(12104358),c=[];for(let m=0;m<r*r;m++)c.push({c:hi(14473423,1+n.range(-.03,.03),n.range(-2,2)),g:n.range(-1,1)});const h=pn(512,512),d=new Float32Array(512*512),f=new Float32Array(512*512),_=new Float32Array(512*512),v=a/2;for(let m=0;m<512;m++)for(let p=0;p<512;p++){const x=m*512+p,M=Math.floor(p/l),E=Math.floor(m/l),P=p-M*l,T=m-E*l,y=Math.min(P,l-P,T,l-T);if(y<v){h.d[x*3]=u[0],h.d[x*3+1]=u[1],h.d[x*3+2]=u[2],d[x]=.85,f[x]=.25,_[x]=.62;continue}const A=c[E*r+M],D=(P/l+T/l)/2,g=1.03-.06*(A.g>0?D:1-D);h.d[x*3]=yt(A.c[0]*g),h.d[x*3+1]=yt(A.c[1]*g),h.d[x*3+2]=yt(A.c[2]*g),d[x]=.08;const S=yt((y-v)/o);f[x]=.25+.75*S,_[x]=.62+.38*S}return{map:fn(h),normalMap:ri(f,512,2),ormMap:$t(512,_,d,null),uvScale:[s,s],normalScale:.8,tinted:!1}});Nt("fabricWeave",n=>{const i=pn(256,256),r=new Float32Array(256*256),s=new Float32Array(256*256),a=128,o=new Float32Array(a*8),l=new Float32Array(a*8);for(let c=0;c<o.length;c++)o[c]=n.range(-.035,.035);for(let c=0;c<l.length;c++)l[c]=n.range(-.035,.035);const u=yn(n,256,{p0:64,octaves:2});for(let c=0;c<256;c++)for(let h=0;h<256;h++){const d=c*256+h,f=(h>>1&1^c>>1&1)===0,_=h>>1,v=c>>1,m=f?o[(_*8+(c>>5&7))%o.length]:l[(v*8+(h>>5&7))%l.length],p=yt((f?1.06:.94)+m+(u[d]-.5)*.06);i.d[d*3]=p,i.d[d*3+1]=p,i.d[d*3+2]=p,r[d]=f?.66:.8,s[d]=f?1:.3}return{map:fn(i),normalMap:ri(sr(s,256,256,1),256,.8),ormMap:$t(256,null,r,null),uvScale:[.25,.25],normalScale:.6,tinted:!0}});Nt("joineryTimber",n=>{const i=pn(512,512);gi(i,[1,1,1]);const r=yn(n,512,{p0x:48,p0y:8,octaves:4}),s=i.d;for(let l=0;l<512*512;l++){const u=yt(.94+(r[l]-.5)*.22);s[l*3]=u,s[l*3+1]=u,s[l*3+2]=u}const a=hi(16777215,.72);for(let l=0;l<220;l++){const u=n.range(0,512),c=n.range(2,6),h=512/n.int(1,2),d=n.range(0,Math.PI*2);Hd(i,u,c,h,d,n.range(2,3.5),a,n.range(.03,.09))}const o=new Float32Array(512*512);for(let l=0;l<o.length;l++)o[l]=yt(.55+(r[l]-.5)*.08);return{map:fn(i),ormMap:$t(512,null,o,null),uvScale:[1,1],normalScale:0,tinted:!0}});Nt("vinylSheet",n=>{const i=pn(512,512);gi(i,14209732);const r=[13222578,15131093,11906460,14472902].map(pi);for(let l=0;l<3e3;l++)ho(i,n.range(0,512),n.range(0,512),n.range(1,3),n.pick(r),.35);const s=yn(n,512,{p0:32,octaves:3}),a=new Float32Array(512*512);for(let l=0;l<a.length;l++)a[l]=yt(.28+(s[l]-.5)*.12);const o={w:512,h:512,d:new Float32Array(512*512*3)};for(let l=0;l<12;l++){const u=n.range(0,512),c=n.range(0,512),h=n.range(40,120),d=n.range(0,Math.PI*2),f=n.range(.6,2.2),_=[];for(let v=0;v<=24;v++){const m=d+f*(v/24);_.push([u+Math.cos(m)*h,c+Math.sin(m)*h])}U0(i,_,n.range(2,4),hi(14209732,.88),.3),U0(o,_,n.range(2,4),[1,1,1],1)}for(let l=0;l<a.length;l++)a[l]=yt(a[l]+o.d[l*3]*.15);return{map:fn(i),ormMap:$t(512,null,a,null),uvScale:[1,1],normalScale:0,tinted:!1}});Nt("laminateBench",n=>{const r=pn(512,512);gi(r,fi.benchtop);const s=[9274743,14077886,7235417].map(pi);for(let u=0;u<2e3;u++)ho(r,n.range(0,512),n.range(0,512),n.range(1,2.5),n.pick(s),.3);const a=new Float32Array(512*512);for(let u=0;u<a.length;u++)a[u]=.28;const o=Math.max(2,Math.round(.006*512/.6)),l=hi(fi.benchtop,.82);for(let u=0;u<512;u++)if(Math.min(u,512-u)<o)for(let h=0;h<512;h++)Ec(r,h,u,l,.85),a[u*512+h]=.45;return{map:fn(r),ormMap:$t(512,null,a,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});Nt("ceilingGrid",n=>{const r=pn(512,512);gi(r,15526370);const s=Math.max(2,Math.round(.015*512/1.2)),a=Math.max(2,Math.round(.015*512/.6)),o=pi(14210509),l=pi(12434098),u=yn(n,512,{p0:64,octaves:2}),c=new Float32Array(512*512);for(let h=0;h<512;h++)for(let d=0;d<512;d++){const f=h*512+d,_=Math.min(d,512-d),v=Math.min(h,512-h);if(_<s/2||v<a/2){const x=_>=s/2-2&&_<s/2||v>=a/2-2&&v<a/2?l:o;r.d[f*3]=x[0],r.d[f*3+1]=x[1],r.d[f*3+2]=x[2],c[f]=.55}else{const p=1+(u[f]-.5)*.04;r.d[f*3]*=p,r.d[f*3+1]*=p,r.d[f*3+2]*=p,c[f]=.9}}return{map:fn(r),ormMap:$t(512,null,c,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});Nt("applianceEnamel",n=>{const i=yn(n,256,{p0:64,octaves:3}),r=new Float32Array(256*256);for(let s=0;s<r.length;s++)r[s]=yt(.3+(i[s]-.5)*.04);return{ormMap:$t(256,null,r,null),uvScale:[1,1],normalScale:0,tinted:!0}});Nt("metalBrushed",n=>{const i=new Float32Array(65536),r=new Float32Array(256*256),s=yn(n,256,{p0x:8,p0y:256,octaves:2});for(let a=0;a<256;a++){const o=n.range(-.1,.1);for(let l=0;l<256;l++){const u=a*256+l;i[u]=yt(.35+o*.6+(s[u]-.5)*.1)}}return{ormMap:$t(256,null,i,r),uvScale:[.4,.4],normalScale:0,tinted:!0}});Nt("quiltFolds",n=>{const i=[],r=n.int(5,9);for(let d=0;d<r;d++)i.push({a:n.range(.4,1),c:n.range(.05,.95),w:n.range(.06,.14)});const s=d=>{let f=0;for(const _ of i)f+=_.a*Math.exp(-(((d-_.c)/_.w)**2));return f+=.5*Math.exp(-((d/.04)**2))+.5*Math.exp(-(((1-d)/.04)**2)),f};let a=1/0,o=-1/0;for(let d=0;d<=256;d++){const f=s(d/256);f<a&&(a=f),f>o&&(o=f)}const l=o-a||1,u=d=>(s(yt(d))-a)/l,c=pn(512,256),h=new Float32Array(512*256);for(let d=0;d<512;d++){const f=u(d/511),_=.9+.1*f;for(let v=0;v<256;v++){const m=v*512+d;c.d[m*3]=_,c.d[m*3+1]=_,c.d[m*3+2]=_,h[m]=f}}return{map:D0(fn(c)),normalMap:D0(ri(h,512,3,256)),uvScale:null,normalScale:1,field:u,folds:i,tinted:!0}});Nt("pictureArt",n=>{const i=[[14272936,10251087,4148050,15130057],[8361635,14213090,3095106,12820586],[11056266,15196880,6056775,9067068],[13609376,8015698,15722204,3814198],[9415096,15788760,4479587,12153919]],r=[];for(let s=0;s<5;s++){const a=i[s].map(pi),o=pn(256,256);gi(o,a[n.int(0,3)]);const l=n.int(0,2);if(l===0){let c=0;for(;c<256;){const h=n.int(12,48);kn(o,0,c,256,Math.min(256,c+h),a[n.int(0,3)],n.range(.5,1)),c+=h}}else if(l===1)for(let c=0;c<n.int(5,11);c++){const h=n.range(0,179.2),d=n.range(0,256*.7);kn(o,h,d,h+n.range(30,110),d+n.range(30,110),a[n.int(0,3)],n.range(.55,.95))}else{const c=n.range(115.2,174.08);kn(o,0,0,256,c,a[0],1),kn(o,0,c,256,256,a[2],1);for(let h=0;h<n.int(3,7);h++){const d=n.range(c-40,c+40);kn(o,0,d,256,d+n.range(3,10),a[n.int(0,3)],n.range(.3,.7))}ho(o,n.range(256*.2,256*.8),n.range(20,c-20),n.range(12,26),a[3],.9)}const u=hi(16777215,.97);kn(o,0,0,256,6,u),kn(o,0,250,256,256,u),kn(o,0,0,6,256,u),kn(o,250,0,256,256,u),r.push(D0(fn(o)))}return{maps:r,map:r[0],uvScale:null,normalScale:0,prints:5,tinted:!1}});Nt("garmentKnit",n=>{const i=pn(256,256),r=new Float32Array(256*256),s=new Float32Array(256*256),a=16,o=12,l=yn(n,256,{p0:64,octaves:2});for(let u=0;u<256;u++)for(let c=0;c<256;c++){const h=u*256+c,d=c%a/a*2-1,f=Math.cos(d*Math.PI*.5),_=(c/a|0)%2?o/2:0,v=(u+_)%o/o,m=1-Math.abs(v*2-1)*.45,p=yt(f*.75+m*.25+(l[h]-.5)*.1),x=yt(.8+p*.28);i.d[h*3]=x,i.d[h*3+1]=x,i.d[h*3+2]=x,r[h]=.94-p*.1,s[h]=p}return{map:fn(i),normalMap:ri(sr(s,256,256,1),256,1.2),ormMap:$t(256,null,r,null),uvScale:[.16,.16],normalScale:1.1,tinted:!0}});Nt("garmentDenim",n=>{const i=pn(256,256),r=new Float32Array(256*256),s=new Float32Array(256*256),a=yn(n,256,{p0:96,octaves:3}),o=new Float32Array(256);for(let l=0;l<256;l++)o[l]=n.range(-.05,.05);for(let l=0;l<256;l++)for(let u=0;u<256;u++){const c=l*256+u,h=(u+l)%3!==0,d=(u>>1&1)===0,_=yt((h?d?1.02:.9:.72)+o[(u+l*3)%256]+(a[c]-.5)*.07);i.d[c*3]=_,i.d[c*3+1]=_,i.d[c*3+2]=_,r[c]=h?.78:.88,s[c]=h?1:.25}return{map:fn(i),normalMap:ri(sr(s,256,256,1),256,.9),ormMap:$t(256,null,r,null),uvScale:[.12,.12],normalScale:.85,tinted:!0}});Nt("garmentCotton",n=>{const i=pn(256,256),r=new Float32Array(256*256),s=new Float32Array(256*256),a=yn(n,256,{p0:48,octaves:3});for(let o=0;o<256;o++)for(let l=0;l<256;l++){const u=o*256+l,c=(l&1^o&1)===0,h=yt((c?1.02:.97)+(a[u]-.5)*.09);i.d[u*3]=h,i.d[u*3+1]=h,i.d[u*3+2]=h,r[u]=.88-(c?.03:0),s[u]=c?.7:.4}return{map:fn(i),normalMap:ri(sr(s,256,256,1),256,.45),ormMap:$t(256,null,r,null),uvScale:[.09,.09],normalScale:.4,tinted:!0}});Nt("garmentButtons",n=>{const i=pn(64,256);gi(i,[.97,.97,.97]);const r=new Float32Array(64*256).fill(.86),s=new Float32Array(64*256).fill(.45),a=64/2,o=5,l=64*.2;for(let u=0;u<256;u++)for(let c=0;c<64;c++){const h=u*64+c,d=Math.abs(c-a);d<64*.3&&(s[h]=.8),d>64*.3&&d<64*.36&&(s[h]=.2)}for(let u=0;u<o;u++){const c=256*((u+.7)/(o+.4));for(let h=Math.floor(c-l-2);h<=Math.ceil(c+l+2);h++)if(!(h<0||h>=256))for(let d=0;d<64;d++){const f=Math.hypot(d-a,h-c);if(f>l)continue;const _=h*64+d,v=Math.sqrt(Math.max(0,1-(f/l)**2));s[_]=.8+v*.2;const m=.86+v*.16;i.d[_*3]=m,i.d[_*3+1]=m,i.d[_*3+2]=m,r[_]=.42,Math.abs(h-c)<l*.16&&Math.abs(Math.abs(d-a)-l*.3)<l*.14&&(s[_]=.6,i.d[_*3]=.62,i.d[_*3+1]=.62,i.d[_*3+2]=.62)}}return{map:fn(i),normalMap:ri(sr(s,64,256,1),64,1.4,256),ormMap:$t(64,null,r,null,256),uvScale:[1,1],normalScale:1,tinted:!0,noTile:!0}});Nt("garmentZip",n=>{const i=pn(64,256);gi(i,[.95,.95,.95]);const r=new Float32Array(64*256).fill(.86),s=new Float32Array(64*256).fill(.45),a=64/2,o=7;for(let u=0;u<256;u++)for(let c=0;c<64;c++){const h=u*64+c,d=c-a,f=Math.abs(d);if(f<64*.34&&(s[h]=.62,r[h]=.82),f<64*.17){const _=d<0?0:o/2,m=(u+_)%o/o<.55;s[h]=m?1:.5;const p=m?1.06:.74;i.d[h*3]=p,i.d[h*3+1]=p,i.d[h*3+2]=p,r[h]=m?.3:.55}}const l=256*.14;for(let u=Math.floor(l);u<l+256*.055;u++)for(let c=Math.floor(a-64*.11);c<a+64*.11;c++){const h=u*64+c;h<0||h>=64*256||(s[h]=1,r[h]=.28,i.d[h*3]=1.1,i.d[h*3+1]=1.1,i.d[h*3+2]=1.1)}return{map:fn(i),normalMap:ri(sr(s,64,256,1),64,1.6,256),ormMap:$t(64,null,r,null,256),uvScale:[1,1],normalScale:1.2,tinted:!0,noTile:!0}});Nt("garmentPlate",n=>{const i=pn(256,256);gi(i,[1,1,1]);const r=new Float32Array(256*256).fill(.42),s=new Float32Array(256*256).fill(.72),a=yn(n,256,{p0:64,octaves:3}),o=128;for(let u=0;u<256;u++)for(let c=0;c<256;c++){const h=u*256+c,d=Math.min(c%o,o-1-c%o),f=Math.min(u%o,o-1-u%o),_=Math.min(d,f);let v=.72,m=1,p=.42;if(_<2)v=.22,m=.93,p=.58;else if(_<5){const x=(_-2)/3;v=.22+x*.5,m=.93+x*.08,p=.58-x*.16}m+=(a[h]-.5)*.05,i.d[h*3]=m,i.d[h*3+1]=m,i.d[h*3+2]=m,r[h]=p,s[h]=v}const l=2;for(let u=0;u<256;u+=o)for(let c=0;c<256;c+=o)for(const[h,d]of[[7,7],[o-7,7],[7,o-7],[o-7,o-7]])for(let f=-l-1;f<=l+1;f++)for(let _=-l-1;_<=l+1;_++){const v=(c+h+_+256)%256,m=(u+d+f+256)%256,p=Math.hypot(_,f);if(p>l)continue;const x=m*256+v,M=Math.sqrt(Math.max(0,1-(p/l)**2));s[x]=.82+M*.18;const E=1.02+M*.1;i.d[x*3]=E,i.d[x*3+1]=E,i.d[x*3+2]=E,r[x]=.3}return{map:fn(i),normalMap:ri(sr(s,256,256,1),256,1.5),ormMap:$t(256,null,r,null),uvScale:[.34,.34],normalScale:1.45,tinted:!0}});class _x{constructor(){this._handlers=new Map,this._log=[]}on(e,t){return this._handlers.has(e)||this._handlers.set(e,new Set),this._handlers.get(e).add(t),()=>this.off(e,t)}once(e,t){const i=this.on(e,r=>{i(),t(r)});return i}off(e,t){var i;(i=this._handlers.get(e))==null||i.delete(t)}emit(e,t={}){this._log.push({type:e,payload:t,at:performance.now()}),this._log.length>400&&this._log.shift();const i=this._handlers.get(e);if(i)for(const o of[...i])o(t,e);const r=e.split(":")[0]+":*",s=this._handlers.get(r);if(s)for(const o of[...s])o(t,e);const a=this._handlers.get("*");if(a)for(const o of[...a])o(t,e)}recent(e=40){return this._log.slice(-e)}}const vx={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],sprint:["ShiftLeft","ShiftRight"],jump:["Space"],interact:["KeyE"],camera:["KeyV"],phone:["KeyQ"],journal:["KeyJ"],inventory:["KeyI"],map:["KeyM"],wait:["KeyT"],rotate:["KeyR"],furnishDone:["KeyF"],furnishSell:["KeyX"],cancel:["Escape"]},xx=2e3;class Mx{constructor(e,t){this.bus=e,this.dom=t,this.bindings={...vx},this.down=new Set,this.pressed=new Set,this.mouse={dx:0,dy:0,sensitivity:.0022,invertY:!1},this.locked=!1,this.lockPending=!1,this._lockTimer=0,this.enabled=!0,this._attach()}clearHeld(){this.down.clear(),this.pressed.clear(),this.mouse.dx=0,this.mouse.dy=0}_attach(){window.addEventListener("keydown",e=>{if(e.repeat)return;Object.values(this.bindings).some(i=>i.includes(e.code))&&e.code!=="Escape"&&e.preventDefault(),this.down.add(e.code),this.pressed.add(e.code),this.bus.emit("input:key",{code:e.code});for(const[i,r]of Object.entries(this.bindings))r.includes(e.code)&&this.bus.emit("action:"+i,{})}),window.addEventListener("keyup",e=>this.down.delete(e.code)),window.addEventListener("blur",()=>this.clearHeld()),window.addEventListener("focus",()=>this.clearHeld()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clearHeld()}),document.addEventListener("pointerlockchange",()=>{this._settleLock(),this.locked=document.pointerLockElement===this.dom,this.locked||this.clearHeld(),this.bus.emit("input:pointerlock",{locked:this.locked})}),document.addEventListener("pointerlockerror",e=>this._failLock(e)),window.addEventListener("mousemove",e=>{this.locked&&(this.mouse.dx+=e.movementX,this.mouse.dy+=e.movementY)}),window.addEventListener("mousedown",e=>{this.pressed.add("Mouse"+e.button),this.down.add("Mouse"+e.button)}),window.addEventListener("mouseup",e=>this.down.delete("Mouse"+e.button)),window.addEventListener("wheel",e=>{this.bus.emit("input:wheel",{delta:Math.sign(e.deltaY)})},{passive:!0})}_settleLock(){this.lockPending=!1,clearTimeout(this._lockTimer),this._lockTimer=0}_failLock(e){const t=this.lockPending;this._settleLock(),t&&(this.locked=!1,console.warn("[input] pointer lock request refused",e||""),this.bus.emit("input:pointerlockfailed",{error:e||null}))}requestLock(){var t,i;if(this.locked||this.lockPending||!((t=this.dom)!=null&&t.requestPointerLock))return;this.lockPending=!0,clearTimeout(this._lockTimer),this._lockTimer=setTimeout(()=>{this.lockPending=!1},xx);let e;try{e=this.dom.requestPointerLock()}catch(r){this._failLock(r);return}(i=e==null?void 0:e.catch)==null||i.call(e,r=>this._failLock(r))}requestLockFresh(){this.locked||(this._settleLock(),this.requestLock())}releaseLock(){var e;this._settleLock(),this.locked=!1,(e=document.exitPointerLock)==null||e.call(document)}isDown(e){return this.enabled?(this.bindings[e]||[]).some(t=>this.down.has(t)):!1}wasPressed(e){return this.enabled?(this.bindings[e]||[]).some(t=>this.pressed.has(t)):!1}axis(){let e=0,t=0;this.isDown("forward")&&(t+=1),this.isDown("back")&&(t-=1),this.isDown("right")&&(e+=1),this.isDown("left")&&(e-=1);const i=Math.hypot(e,t);return i>1?{x:e/i,y:t/i}:{x:e,y:t}}consumeMouse(){const e={dx:this.mouse.dx,dy:this.mouse.dy};return this.mouse.dx=0,this.mouse.dy=0,e}endFrame(){this.pressed.clear()}}const N0=n=>Number.isFinite(n)&&n>0?n:0;function bc(n={}){const e=n.max??100,t=n.shield??0;return{max:e,hp:Math.min(n.hp??e,e),shield:t,shieldMax:n.shieldMax??t,thresholds:[...n.thresholds??[]].sort((i,r)=>r-i),dead:(n.hp??e)<=0}}function Sx(n,e,t){const i=[];for(const r of n.thresholds){const s=n.max*r;e>s&&t<=s&&i.push({at:r,hp:s})}return i}function Wd(n,e={}){const t=[];if(n.dead)return{state:n,events:t};const i=N0(e.amount),r=e.crit?i*(e.critMul??2):i,s=e.kind??null,a=e.source??null;let{hp:o,shield:l}=n,u=r;if(l>0&&!e.ignoreShield&&u>0){const d=Math.min(l,u);l-=d,u-=d,t.push({type:"absorbed",amount:d,shield:l,kind:s,source:a}),l===0&&t.push({type:"shieldBroken",overflow:u,kind:s,source:a})}const c=o;o=Math.max(0,o-u),(u>0||r===0)&&t.push({type:"damaged",amount:u,hp:o,was:c,kind:s,source:a});for(const d of Sx(n,c,o))t.push({type:"threshold",at:d.at,hp:d.hp,kind:s,source:a});const h=o<=0;return h&&t.push({type:"died",kind:s,source:a}),{state:{...n,hp:o,shield:l,dead:h},events:t}}function F0(n,e={}){const t=[];if(n.dead)return{state:n,events:t};const i=Math.min(n.max,n.hp+N0(e.amount)),r=Math.min(n.shieldMax,n.shield+N0(e.shield));return i!==n.hp&&t.push({type:"healed",amount:i-n.hp,hp:i,was:n.hp,source:e.source??null}),r!==n.shield&&t.push({type:"shielded",amount:r-n.shield,shield:r,source:e.source??null}),{state:{...n,hp:i,shield:r},events:t}}const Xd=n=>n.max>0?n.hp/n.max:0,wc=n=>n.shieldMax>0?n.shield/n.shieldMax:0,yx=1e-9,Ex=n=>n>0?60/n:0;function bx(n={}){const e=n.magazine??30;return{magazine:e,loaded:Math.min(n.loaded??e,e),reserve:n.reserve??e*6,interval:Ex(n.rpm??600),reloadTime:n.reloadTime??2,burst:n.burst??0,auto:n.auto??!0,maxCatchUp:n.maxCatchUp??.25,nextShotAt:0,reloadEndsAt:0,reloading:!1,fired:!1,burstLeft:0}}const qd=(n,e)=>n.reloading&&e<n.reloadEndsAt;function wx(n,e){if(!n.reloading||e<n.reloadEndsAt)return{state:n,events:[]};const t=n.magazine-n.loaded,i=Math.min(t,n.reserve),r=n.loaded+i,s=n.reserve===1/0?1/0:n.reserve-i;return{state:{...n,loaded:r,reserve:s,reloading:!1,reloadEndsAt:0},events:[{type:"reloaded",at:e,loaded:r,reserve:s,took:i}]}}function Tx(n,e,t={}){const i=[],r=[];if(qd(n,e))return t.pressed&&i.push({type:"blocked",why:"reloading",at:e}),{state:n,shots:r,events:i};if(!(n.auto?t.held||t.pressed:!!t.pressed))return{state:n,shots:r,events:i};if(n.loaded<=0)return t.pressed&&i.push({type:"dry",at:e}),{state:n,shots:r,events:i};let a=n.loaded,o=n.nextShotAt;(!n.fired||t.pressed||e-o>n.maxCatchUp)&&(o=e);const l=n.burst>0;let u=l?t.pressed?n.burst:n.burstLeft:0;for(;a>0&&o<=e+yx&&(!l||u>0)&&(r.push({at:Math.min(o,e),remaining:a-1}),a--,u--,o+=n.interval,!(n.interval<=0)););return r.length&&i.push({type:"fired",count:r.length,loaded:a,at:e}),a===0&&n.loaded>0&&i.push({type:"emptied",at:e}),{state:{...n,loaded:a,nextShotAt:o,burstLeft:l?Math.max(0,u):0,fired:n.fired||r.length>0},shots:r,events:i}}function Ax(n,e){return n.reloading?{state:n,events:[]}:n.loaded>=n.magazine?{state:n,events:[{type:"refused",why:"full",at:e}]}:n.reserve<=0?{state:n,events:[{type:"refused",why:"empty",at:e}]}:{state:{...n,reloading:!0,reloadEndsAt:e+n.reloadTime},events:[{type:"reloading",at:e,endsAt:e+n.reloadTime}]}}const Rx=.26,Cx=.13,Lx=2.4,Kr=(n,e,t)=>n+(e-n)*t,Qu=(n,e,t,i)=>i<=0?e:Math.max(0,Math.min(1,n+(e-n)*Math.min(1,t/i))),fl={x:0,y:0,z:-.3,pitch:0,yaw:0,roll:0};function eh(n,e,t,i){return i.x=Kr(n.x,e.x,t),i.y=Kr(n.y,e.y,t),i.z=Kr(n.z,e.z,t),i.pitch=Kr(n.pitch,e.pitch,t),i.yaw=Kr(n.yaw,e.yaw,t),i.roll=Kr(n.roll,e.roll,t),i}function Px(n={}){if(!n.model)throw new Error("makeViewmodel: needs a { model }");const e={...fl,...n.rest??{}},t={...fl,...n.aim??e},i=n.stowDrop??.23,r={...e,y:e.y-i},s=n.drawTime??Rx,a=n.aimTime??Cx,o=n.reach??6,l=n.cone??.3,u=new co,c=new Mn(n.fov??48,1,.01,1),h=new Sn;let d=n.model,f=n.emitter??null;h.add(d),u.add(h);const _=new Mc(16777215,n.keyIntensity??2.2);_.position.set(.4,.8,.6),u.add(_,new Sc(16777215,n.fillIntensity??.9));let v=0,m=0,p=0,x=0;const M={...r},E={...fl},P={scene:u,camera:c,model:n.model,get out(){return p===1},get drawn(){return v},get aiming(){return x===1&&v>.6},get liveReach(){return this.aiming?o*Lx:o},get liveCone(){return l},channel(T="tool"){return{id:T,get radius(){return P.liveReach},get cone(){return P.liveCone},when:()=>P.aiming,filter:y=>{var A;return((A=y==null?void 0:y.data)==null?void 0:A.tool)!==!1}}},swap(T,y){const A=d;return d&&h.remove(d),d=T??null,d&&h.add(d),P.model=d,f=y??null,A},draw(){p=1},stow(){p=0,x=0},toggle(){p=p?0:1,p||(x=0)},setAim(T){x=T?1:0,T&&(p=1)},ray(T,y=new I,A=new I){return y.copy(T.position),T.getWorldDirection(A),{origin:y,dir:A}},emitterAt(T=new I){return f?(f.updateWorldMatrix(!0,!1),T.setFromMatrixPosition(f.matrixWorld)):T.set(0,0,0)},update(T){return v=Qu(v,p,T,s),m=Qu(m,x&&v>.6?1:0,T,a),eh(r,e,v,E),eh(E,t,m,M),h.position.set(M.x,M.y,M.z),h.rotation.set(M.pitch,M.yaw,M.roll,"YXZ"),h.visible=v>.001,M},pass(T,y){if(h.visible===!1)return;c.aspect=(y==null?void 0:y.aspect)??c.aspect,c.updateProjectionMatrix();const A=T.autoClear;T.autoClear=!1,T.clearDepth(),T.render(u,c),T.autoClear=A},dispose(){u.traverse(T=>{var y,A;T.isMesh&&((y=T.geometry)==null||y.dispose(),Array.isArray(T.material)?T.material.forEach(D=>D.dispose()):(A=T.material)==null||A.dispose())})}};return P.update(0),P}function Tc(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,l=new ii;let u=0;for(let c=0;c<n.length;++c){const h=n[c];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in h.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(h.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in h.morphAttributes){if(!r.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,f,c),u+=f}}if(t){let c=0;const h=[];for(let d=0;d<n.length;++d){const f=n[d].index;for(let _=0;_<f.count;++_)h.push(f.getX(_)+c);c+=n[d].attributes.position.count}l.setIndex(h)}for(const c in s){const h=th(s[c]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,h)}for(const c in a){const h=a[c][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<h;++d){const f=[];for(let v=0;v<a[c].length;++v)f.push(a[c][v][d]);const _=th(f);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(_)}}return l}function th(n){let e,t,i,r=-1,s=0;for(let u=0;u<n.length;++u){const c=n[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*t}const a=new e(s),o=new An(a,t,i);let l=0;for(let u=0;u<n.length;++u){const c=n[u];if(c.isInterleavedBufferAttribute){const h=l/t;for(let d=0,f=c.count;d<f;d++)for(let _=0;_<t;_++){const v=c.getComponent(d,_);o.setComponent(d+h,_,v)}}else a.set(c.array,l);l+=c.count*t}return r!==void 0&&(o.gpuType=r),o}const Ix=12,ss=24,Yd=n=>n.startsWith("glow"),nh=new en,Dx=new zt,Ux=new I,Nx=new I(1,1,1),Fx=new Ve,ih=new I;function Ma(n,e=new Ve){const[,,,,t,i,r,,s=0,a=0,o=0]=n;return nh.set(s,a,o),e.compose(Ux.set(t,i,r),Dx.setFromEuler(nh),Nx)}function fo(n,e={}){const t=Object.keys(n.bones),i={};for(const x of t){const M=n.bones[x],E=new Fd;E.name=x,E.position.set(...M.at),M.rot&&E.rotation.set(...M.rot),i[x]=E}const r=new Sn;r.name=n.id??"box-rig";for(const x of t){const M=n.bones[x].parent;if(M===void 0)r.add(i[x]);else if(i[M])i[M].add(i[x]);else throw new Error(`BoxRig '${r.name}': bone '${x}' has unknown parent '${M}'`)}r.updateMatrixWorld(!0);const s=new Map(t.map((x,M)=>[x,M])),a={solid:[],glow:[]},o=new Qe,l=new Ve;n.parts.forEach((x,M)=>{const[E,P,T,y,,,,A]=x;if(!s.has(E))throw new Error(`BoxRig '${r.name}': part ${M} rides unknown bone '${E}'`);const D=n.palette[A];if(D===void 0)throw new Error(`BoxRig '${r.name}': part ${M} has unknown colour '${A}'`);const g=new cn(P,T,y);g.deleteAttribute("uv"),g.applyMatrix4(Fx.multiplyMatrices(i[E].matrixWorld,Ma(x,l))),o.set(D);const S=g.attributes.position.count,R=new Float32Array(S*3),L=new Uint16Array(S*4),F=new Float32Array(S*4),N=s.get(E);for(let U=0;U<S;U++)R[U*3]=o.r,R[U*3+1]=o.g,R[U*3+2]=o.b,L[U*4]=N,F[U*4]=1;g.setAttribute("color",new An(R,3)),g.setAttribute("skinIndex",new ac(L,4)),g.setAttribute("skinWeight",new An(F,4)),a[Yd(A)?"glow":"solid"].push({g,part:x})});const u=new dc(t.map(x=>i[x])),c=[],h=(x,M)=>{const E=a[x];if(!E.length)return null;const P=E.length===1?E[0].g:Tc(E.map(y=>y.g),!1);if(!P)throw new Error(`BoxRig '${r.name}': ${x} boxes would not merge`);E.length>1&&E.forEach(y=>y.g.dispose());const T=new Qv(P,M);return T.name=`${r.name}:${x}`,T.userData.parts=E.map(y=>y.part),r.add(T),T.bind(u),c.push(T),T},d=h("solid",e.solidMaterial??new Fi({vertexColors:!0,roughness:.85,metalness:0})),f=h("glow",e.glowMaterial??new dn({vertexColors:!0})),_=new Ni;for(const x of c)x.geometry.computeBoundingBox(),_.union(x.geometry.boundingBox);const v=_.clone().expandByPoint(ih.set(0,0,0)).getBoundingSphere(new Ts);v.radius=v.radius*1.25+.4;for(const x of c)x.boundingSphere=v.clone();for(const x of t){const M=i[x];M.userData.rest={p:M.position.clone(),r:M.rotation.clone()}}const m=n.scale??1;r.scale.setScalar(m);const p=f?f.geometry.attributes.color.array.slice():null;return{root:r,bones:i,skeleton:u,solid:d,glow:f,meshes:c,scale:m,reset(){for(const x of t){const M=i[x];M.position.copy(M.userData.rest.p),M.rotation.copy(M.userData.rest.r)}},partAt(x,M){var P;const E=(P=x==null?void 0:x.userData)==null?void 0:P.parts;return E&&Number.isInteger(M)?E[Math.floor(M/Ix)]??null:null},bounds(x=[]){const M=new Ni;for(const E of c){const P=E.geometry.attributes.position;E.userData.parts.forEach((T,y)=>{if(!x.includes(T[0]))for(let A=y*ss;A<(y+1)*ss;A++)M.expandByPoint(ih.fromBufferAttribute(P,A))})}return M.min.multiplyScalar(m),M.max.multiplyScalar(m),M},setGlowLit(x,M=()=>!1){if(!f)return;const E=f.geometry.attributes.color;f.userData.parts.forEach((P,T)=>{const y=x||M(P)?1:.1;for(let A=T*ss*3;A<(T+1)*ss*3;A++)E.array[A]=p[A]*y}),E.needsUpdate=!0},dispose(){for(const x of c)x.geometry.dispose();u.dispose()}}}const At=(n,e,t)=>n<e?e:n>t?t:n,Ln=(n,e,t)=>n+(e-n)*t,ys=n=>n<=0?0:n>=1?1:n*n*(3-2*n),oi=n=>{const e=1-At(n,0,1);return 1-e*e*e},yr=n=>{const e=At(n,0,1);return e*e},pl=(n,e,t,i)=>t<=0?e:n+(e-n)*(1-Math.exp(-Math.LN2*i/t));function Jn(n,e,t,i){const r=2*Math.LN2/t,s=n.x-e,a=n.v+s*r,o=Math.exp(-r*i);n.x=o*(s+a*i)+e,n.v=o*(n.v-a*r*i)}const Os=(n,e)=>n*Math.E/e,rh=n=>2*Math.LN2*n;function Ox(n,e,t,i){if(i<=0)return e?1:0;if(e){if(n>=1)return 1;const s=1-Math.cbrt(1-n)+t/i;return s>=1?1:1-(1-s)**3}if(n<=0)return 0;const r=Math.cbrt(n)-t/i;return r<=0?0:r**3}function $d(n,e,t,i){if(!i)return ys(n);const r=!!i.in&&i.in.some(a=>Math.abs(a-t)<1e-9),s=!!i.out&&i.out.some(a=>Math.abs(a-e)<1e-9);return r&&s?At(n,0,1):r?yr(n):s?oi(n):ys(n)}function Bn(n,e,t=[],i=null){const r=n[0].length-1;if(e<=n[0][0]){for(let c=0;c<r;c++)t[c]=n[0][c+1];return t}const s=n[n.length-1];if(e>=s[0]){for(let c=0;c<r;c++)t[c]=s[c+1];return t}let a=1;for(;n[a][0]<e;)a++;const o=n[a-1],l=n[a],u=$d((e-o[0])/(l[0]-o[0]||1),o[0],l[0],i);for(let c=0;c<r;c++)t[c]=o[c+1]+(l[c+1]-o[c+1])*u;return t}function sh(n,e,t=null){if(e<=n[0][0])return{from:n[0][1],to:n[0][1],w:1,extra:n[0].slice(2)};const i=n[n.length-1];if(e>=i[0])return{from:i[1],to:i[1],w:1,extra:i.slice(2)};let r=1;for(;n[r][0]<e;)r++;const s=n[r-1],a=n[r],o=$d((e-s[0])/(a[0]-s[0]||1),s[0],a[0],t);return{from:s[1],to:a[1],w:o,extra:s.slice(2).map((l,u)=>l+(a[u+2]-l)*o)}}const Er=n=>{const e=Math.sin(n*12.9898+78.233)*43758.5453;return(e-Math.floor(e))*2-1},kx={pelvis:{at:[0,.92,0]},spine:{parent:"pelvis",at:[0,.06,0]},chest:{parent:"spine",at:[0,.24,0]},head:{parent:"chest",at:[0,.34,0]},armL:{parent:"chest",at:[.28,.26,0]},foreL:{parent:"armL",at:[0,-.32,0]},handL:{parent:"foreL",at:[0,-.28,0]},armR:{parent:"chest",at:[-.28,.26,0]},foreR:{parent:"armR",at:[0,-.32,0]},handR:{parent:"foreR",at:[0,-.28,0]},thighL:{parent:"pelvis",at:[.1,-.04,0]},shinL:{parent:"thighL",at:[0,-.42,0]},footL:{parent:"shinL",at:[0,-.38,0]},thighR:{parent:"pelvis",at:[-.1,-.04,0]},shinR:{parent:"thighR",at:[0,-.42,0]},footR:{parent:"shinR",at:[0,-.38,0]},capeA:{parent:"chest",at:[0,.26,-.14]},capeB:{parent:"capeA",at:[0,-.52,0]},mark:{parent:"pelvis",at:[0,-.02,.13]},skirtB:{parent:"pelvis",at:[0,-.02,-.13]}},Kd=[["pelvis",.36,.16,.23,0,0,0,"suit"],["spine",.4,.26,.23,0,.12,0,"suit"],["chest",.44,.3,.25,0,.14,0,"suit"],["chest",.13,.08,.13,0,.32,0,"suit"],["head",.21,.23,.23,0,.115,0,"mask"],["armL",.12,.34,.13,0,-.16,0,"suit"],["foreL",.11,.3,.12,0,-.14,0,"suit"],["handL",.1,.1,.1,0,-.05,0,"glove"],["armR",.12,.34,.13,0,-.16,0,"suit"],["foreR",.11,.3,.12,0,-.14,0,"suit"],["handR",.1,.1,.1,0,-.05,0,"glove"],["thighL",.17,.44,.19,0,-.21,0,"suit"],["shinL",.15,.4,.17,0,-.2,0,"suit"],["footL",.18,.09,.3,0,-.035,.05,"boot"],["thighR",.17,.44,.19,0,-.21,0,"suit"],["shinR",.15,.4,.17,0,-.2,0,"suit"],["footR",.18,.09,.3,0,-.035,.05,"boot"]],Bx={thighL:[-.1,0,0],thighR:[-.1,0,0],shinL:[.2,0,0],shinR:[.2,0,0],footL:[-.1,0,0],footR:[-.1,0,0],spine:[.05,0,0],chest:[.05,0,0],head:[-.1,0,0],armL:[-.35,0,.18],armR:[-.35,0,-.18],foreL:[-.8,0,0],foreR:[-.8,0,0],capeA:[.1,0,0],skirtB:[.06,0,0],mark:[-.04,0,0]},zx=-.01,Ho=Math.PI*2;function Hx(n,e,t=1){for(const i in e){const r=e[i],s=n[i];s&&(s.rotation.x+=r[0]*t,s.rotation.y+=r[1]*t,s.rotation.z+=r[2]*t)}}function Gx(n,e,t){n.armL.rotation.z+=t,n.armR.rotation.z-=t,n.foreL.rotation.x+=-.12,n.foreR.rotation.x+=-.12,n.chest.rotation.x+=.012*Math.sin(Ho*e/3.2),n.capeA.rotation.x+=.03*Math.sin(Ho*e/2.6),n.mark.rotation.x+=.02*Math.sin(Ho*e/2.6+1),n.skirtB.rotation.x+=.02*Math.sin(Ho*e/2.6+2)}const Vx=(n,e,t)=>({id:`risen-${n}`,bones:kx,parts:[...Kd,...e],palette:t}),Wx={titanPlate:{plate:"#595d60",plateDark:"#3a3d40",plateEdge:"#a9b3b8",gauntlet:"#595d60",cloth:"#5d6142",clothDark:"#41442e",clothTrim:"#c8bfa6",sleeve:"#2b2e31",classItem:"#5d6142",classItemMark:"#c8bfa6",suit:"#2b2e31",glove:"#3b2f27",leather:"#5a3e2b",strap:"#4a3a2c",boot:"#2a2622",mask:"#151719",glowVisor:"#dff3ff",glowElement:"#6fd3ff"},hunterCloak:{plate:"#7d858a",plateDark:"#4a4f53",plateEdge:"#b9c1c5",gauntlet:"#7d858a",cloth:"#3e3530",clothDark:"#2c2622",clothTrim:"#bdb29a",sleeve:"#4f6660",classItem:"#3e3530",classItemMark:"#8a4a2b",suit:"#2b2e31",glove:"#3b2f27",leather:"#5a3e2b",strap:"#8a4a2b",boot:"#2a2622",mask:"#151719",glowVisor:"#dff3ff",glowElement:"#ff8a2a"},warlockRobe:{plate:"#4a4f53",plateDark:"#33373a",plateEdge:"#8d969b",gauntlet:"#5a3e2b",cloth:"#6e6450",clothDark:"#4f483a",clothTrim:"#c8bfa6",sleeve:"#6e6450",classItem:"#c8bfa6",classItemMark:"#8a7a5a",suit:"#2b2e31",glove:"#3b2f27",leather:"#5a3e2b",strap:"#8a7a5a",boot:"#2a2622",mask:"#151719",glowVisor:"#dff3ff",glowElement:"#c9a9ff"}},mt=(n,e,t,i,r,s,a,o,l=0,u=0,c=0,h=o)=>[[n,e,t,i,r,s,a,o,l,u,c],[n.replace(/L$/,"R"),e,t,i,-r,s,a,h,l,-u,-c]],Xx={parts:[["head",.25,.12,.27,0,.215,-.01,"plate"],["head",.23,.03,.25,0,.265,-.005,"plate",-.1],["head",.266,.03,.03,0,.18,.122,"plateEdge"],...mt("head",.1,.14,.05,.066,.05,.105,"plate"),["head",.17,.022,.012,0,.14,.119,"glowVisor"],["head",.04,.1,.03,0,.12,.14,"plateEdge"],...mt("head",.03,.1,.14,.12,.1,-.02,"plateDark"),["head",.24,.2,.08,0,.1,-.14,"plate",.35],["chest",.58,.2,.32,0,.2,.005,"plate"],["chest",.46,.13,.3,0,.045,.005,"plate"],["chest",.26,.03,.02,0,.235,.172,"plateEdge"],["chest",.12,.07,.02,-.13,.155,.172,"plateEdge"],["chest",.26,.06,.24,0,.32,0,"plateDark"],["chest",.3,.03,.05,0,.315,.105,"clothTrim"],["chest",.34,.07,.12,0,.335,-.105,"cloth"],["chest",.4,.16,.02,0,.19,-.17,"plateDark"],...mt("chest",.018,.12,.1,.297,.2,0,"strap"),["spine",.3,.07,.04,0,.17,.125,"plateDark"],["spine",.28,.07,.04,0,.095,.125,"plateDark"],["spine",.42,.05,.25,0,.205,0,"clothDark"],["pelvis",.4,.06,.25,0,.06,0,"leather"],["pelvis",.07,.04,.02,0,.06,.13,"plateEdge"],...mt("pelvis",.024,.12,.18,.205,-.025,0,"plateDark"),["skirtB",.3,.14,.025,0,-.02,-.025,"plateDark"],["mark",.25,.46,.02,0,-.21,.035,"classItem",-.06],["mark",.035,.38,.02,.055,-.2091,.05,"classItemMark",-.06],["mark",.11,.05,.04,-.06,-.4546,.0497,"clothDark",-.06],["mark",.07,.07,.02,-.06,-.1193,.0446,"clothTrim",-.06],...mt("mark",.03,.08,.08,.09,.0293,.0156,"strap",-.06),...mt("armL",.25,.11,.3,.055,.005,0,"plate",0,0,-.2,"plateDark"),...mt("armL",.2,.06,.26,.08,-.075,0,"plate",0,0,-.28,"plateDark"),...mt("armL",.27,.025,.02,.049,-.0244,.155,"plateEdge",0,0,-.2),...mt("armL",.03,.09,.11,.072,-.2,0,"plate"),...mt("armL",.14,.05,.15,0,-.07,0,"clothDark"),...mt("armL",.16,.05,.17,0,-.12,0,"cloth"),...mt("armL",.14,.03,.15,0,-.26,0,"strap"),...mt("foreL",.14,.22,.15,0,-.17,0,"gauntlet"),...mt("foreL",.16,.05,.17,0,-.255,0,"plate"),...mt("foreL",.13,.055,.05,0,-.0275,-.075,"plateDark"),...mt("foreL",.16,.02,.17,0,-.08,0,"plateEdge"),...mt("handL",.018,.06,.08,.058,-.04,0,"plate"),...mt("handL",.012,.03,.04,.07,-.04,0,"plateEdge"),...mt("handL",.04,.03,.06,.059,-.075,0,"plateDark"),...mt("handL",.012,.012,.04,.082,-.075,0,"glowElement"),...mt("thighL",.15,.24,.03,.03,-.13,.108,"plate",0,.4),...mt("thighL",.19,.03,.21,0,-.28,0,"strap"),...mt("shinL",.13,.09,.05,0,-.01,.1,"plate"),...mt("shinL",.17,.28,.04,0,-.22,.095,"plate"),...mt("shinL",.19,.03,.2,0,-.3,0,"strap"),...mt("footL",.2,.056,.13,0,-.009,.145,"plate"),...mt("footL",.18,.05,.21,0,.035,0,"leather")],previewArmOut:.1,clothLimits:{mark:[-.6,0]},targets:{boxes:[60,85],topY:[1.83,1.87],minY:[-.005,.005],visorY:[1.68,1.72],shoulderSpan:[.86,.96],chestSpan:[.54,.62],waistSpanMax:.46,hemSpanMax:.46,vRatioMin:1.85,armourShare:[.7,.9],detail:{bones:["armL","foreL","handL","armR","foreR","handR","chest"],min:.4},mark:{topMin:.86,bottom:[.38,.48],width:[.22,.28]},clothNearHead:{bones:["head","chest"],above:1.45,min:1}}},qx={parts:[["head",.226,.246,.246,0,.115,0,"plateDark"],["head",.2,.03,.02,0,.178,.133,"plate"],["head",.12,.018,.008,0,.14,.127,"glowVisor"],["head",.17,.095,.025,0,.062,.1355,"plate"],["head",.19,.05,.13,0,.005,.07,"plateDark"],["head",.022,.12,.022,-.045,-.02,.17,"leather",-.35,0,-.3],["head",.07,.06,.05,0,.055,.168,"mask"],["head",.05,.05,.075,.078,.036,.168,"plate",.35,.5,0],["head",.05,.05,.075,-.078,.036,.168,"plate",.35,-.5,0],["head",.068,.068,.012,.0979,.0235,.2022,"strap",.35,.5,0],["head",.068,.068,.012,-.0979,.0235,.2022,"strap",.35,-.5,0],["head",.28,.28,.21,0,.11,-.045,"classItem"],["head",.25,.06,.21,0,.28,-.045,"classItem"],["head",.25,.04,.1,0,.26,.105,"classItem",.2,0,0],["head",.03,.21,.09,.125,.11,.1,"classItem"],["head",.03,.21,.09,-.125,.11,.1,"classItem"],["chest",.18,.06,.19,0,.32,.005,"clothTrim"],["chest",.06,.16,.02,.06,.2,.185,"clothTrim",0,0,.1],["chest",.34,.22,.03,0,.145,.14,"plateEdge"],["chest",.32,.025,.05,0,.255,.139,"plate"],["chest",.3,.22,.015,0,.15,-.1325,"plateDark"],["chest",.035,.32,.02,.12,.125,.176,"strap"],["chest",.035,.32,.02,-.12,.125,.176,"strap"],["chest",.1,.07,.04,.09,0,.145,"leather"],["chest",.1,.07,.04,-.09,0,.145,"leather"],["spine",.26,.09,.025,0,.135,.1275,"plateDark"],["armL",.15,.035,.17,.012,.022,0,"plate",0,0,-.28],["armR",.15,.035,.17,-.012,.022,0,"plate",0,0,.28],["armL",.13,.03,.15,.025,-.03,0,"plateDark",0,0,-.4],["armR",.13,.03,.15,-.025,-.03,0,"plateDark",0,0,.4],["foreL",.13,.26,.14,0,-.13,0,"sleeve"],["foreR",.13,.26,.14,0,-.13,0,"sleeve"],["foreL",.148,.02,.158,0,-.27,0,"clothTrim"],["foreR",.148,.02,.158,0,-.27,0,"clothTrim"],["foreL",.13,.02,.14,0,-.3,0,"strap"],["foreR",.13,.02,.14,0,-.3,0,"strap"],["handL",.014,.02,.07,.057,-.07,0,"gauntlet"],["handR",.014,.02,.07,-.057,-.07,0,"gauntlet"],["handL",.01,.014,.086,.055,-.089,0,"glowElement"],["handR",.01,.014,.086,-.055,-.089,0,"glowElement"],["pelvis",.42,.05,.25,0,.065,0,"leather"],["pelvis",.05,.035,.012,0,.065,.131,"plateEdge"],["thighL",.15,.28,.025,.012,-.18,.1075,"plateDark",0,.2,0],["thighR",.15,.28,.025,-.012,-.18,.1075,"plateDark",0,-.2,0],["thighL",.19,.03,.21,0,-.36,0,"strap"],["thighR",.19,.03,.21,0,-.36,0,"strap"],["thighL",.035,.17,.05,.1,-.15,.03,"leather",0,0,.15],["shinL",.13,.09,.06,0,0,.1,"plateDark"],["shinR",.13,.09,.06,0,0,.1,"plateDark"],["shinL",.12,.27,.025,0,-.19,.0975,"plateDark"],["shinR",.12,.27,.025,0,-.19,.0975,"plateEdge"],["shinL",.025,.2,.09,.0825,-.18,.03,"plateDark"],["shinR",.025,.2,.09,-.0825,-.18,.03,"plateEdge"],["shinL",.168,.025,.188,0,-.25,0,"strap"],["shinR",.168,.025,.188,0,-.25,0,"strap"],["shinL",.17,.08,.19,0,-.345,0,"boot"],["shinR",.17,.08,.19,0,-.345,0,"boot"],["footL",.196,.05,.11,0,-.005,.155,"plateDark"],["footR",.196,.05,.11,0,-.005,.155,"plateDark"],["capeA",.28,.12,.03,0,.07,-.03,"classItem",.5,0,0],["capeA",.49,.335,.02,0,-.1125,-.02,"classItem"],["capeA",.45,.29,.035,0,-.385,-.0125,"classItem"],["capeA",.11,.09,.008,-.11,-.17,-.034,"clothDark"],["capeA",.43,.025,.008,0,-.47,-.034,"classItemMark"],["capeB",.09,.39,.02,.19,-.165,-.02,"classItem",0,0,.05],["capeB",.09,.44,.02,.095,-.19,-.02,"classItem"],["capeB",.09,.47,.02,0,-.205,-.02,"classItem"],["capeB",.09,.41,.02,-.095,-.175,-.02,"classItem"],["capeB",.09,.35,.02,-.19,-.145,-.02,"classItem",0,0,-.05],["capeB",.05,.14,.012,.1425,-.36,-.037,"clothDark",0,0,.06]],previewArmOut:.12,clothLimits:{capeA:[-.05,.35],capeB:[-.4,.6]},targets:{boxes:[50,75],topY:[1.85,1.9],visorY:[1.68,1.72],visorRecess:.02,shoulderSpan:[.68,.76],chestSpan:[.46,.52],waistSpan:[.42,.48],hemSpanMax:.5,armourShare:[.4,.6],detailShareMin:.35,capeBottom:[.5,.62],capeBackZ:-.16,capeShoulderSpan:.4,hemLevels:3,hemStep:.04,caydeWidth:.06,mismatch:{bone:"shinR",key:"plateEdge",pair:"plateDark"}}},Ac=Math.PI/4,Es=[],ft=(...n)=>Es.push(n),tn=(n,e,t,i,r,s,a,o,l=0,u=0,c=0)=>{Es.push([n,e,t,i,r,s,a,o,l,u,c]),Es.push([n.replace(/L$/,"R"),e,t,i,-r,s,a,o,l,-u,-c])},Rs=(n,e,t,i,r,s,a,o,l=0,u=0,c=0)=>{Es.push([n,e,t,i,r,s,a,o,l,u,c]),Es.push([n,e,t,i,-r,s,a,o,l,-u,-c])};ft("head",.15,.128,.165,0,.234,-.0075,"plate");ft("head",.27,.088,.285,0,.194,-.0075,"plate");Rs("head",.035,.125,.255,.1175,.0925,-.0225,"plate");ft("head",.2,.125,.035,0,.0925,-.1325,"plate");Rs("head",.085,.03,.165,.0944,.2574,-.0075,"plate",0,0,-Ac);ft("head",.15,.03,.085,0,.2574,.0944,"plate",Ac,0,0);ft("head",.15,.03,.085,0,.2574,-.1094,"plate",-Ac,0,0);ft("head",.2,.022,.012,0,.162,.141,"plateEdge");ft("head",.14,.018,.01,0,.14,.12,"glowVisor");ft("chest",.24,.08,.04,0,.325,-.095,"cloth");Rs("chest",.035,.08,.17,.1025,.325,-.01,"cloth");ft("chest",.5,.1,.28,0,.25,0,"cloth");ft("chest",.5,.22,.28,0,.09,0,"cloth");ft("chest",.2,.2,.03,0,.14,.152,"plate");Rs("chest",.075,.28,.02,.105,.15,.172,"clothTrim",0,0,-.3);ft("chest",.07,.06,.012,-.17,.02,.146,"clothDark");ft("spine",.48,.28,.26,0,.12,0,"cloth");ft("spine",.52,.055,.29,0,.03,0,"clothTrim");ft("spine",.06,.045,.012,0,.03,.151,"plateEdge");Rs("spine",.024,.024,.01,.065,.11,.135,"plateEdge");Rs("spine",.024,.024,.01,.065,.18,.135,"plateEdge");ft("spine",.09,.08,.05,-.15,-.03,.16,"leather");ft("pelvis",.5,.185,.27,0,-.0025,0,"cloth");tn("thighL",.22,.3,.03,.03,-.13,.123,"cloth");tn("thighL",.26,.16,.034,.05,-.36,.125,"cloth");tn("thighL",.276,.03,.05,.05,-.445,.125,"clothDark");tn("thighL",.075,.35,.265,.1335,-.1493,-.0075,"cloth",0,0,.22);tn("thighL",.07,.17,.29,.1852,-.3666,-.01,"cloth",0,0,.22);tn("thighL",.09,.03,.316,.2027,-.4447,-.0065,"clothDark",0,0,.22);ft("skirtB",.48,.33,.03,0,-.135,-.02,"cloth");ft("skirtB",.58,.16,.034,0,-.38,-.022,"cloth");ft("skirtB",.596,.03,.05,0,-.465,-.022,"clothDark");ft("skirtB",.016,.3,.01,0,-.29,-.042,"clothDark");ft("skirtB",.3,.045,.012,0,-.06,-.041,"clothTrim");tn("shinL",.12,.09,.024,0,-.03,.099,"plate");tn("shinL",.166,.15,.186,0,-.18,0,"leather");tn("shinL",.182,.17,.202,0,-.325,0,"boot");tn("armL",.15,.37,.16,0,-.165,0,"sleeve");ft("armL",.15,.045,.19,.012,.02,0,"plate",0,0,-.25);ft("armR",.15,.045,.19,-.012,.02,0,"plateEdge",0,0,.25);tn("foreL",.145,.25,.155,0,-.105,0,"sleeve");tn("foreL",.161,.045,.171,0,-.2225,0,"clothDark");tn("foreL",.128,.1,.138,0,-.265,0,"gauntlet");tn("foreL",.144,.012,.154,0,-.26,0,"strap");tn("foreL",.144,.012,.154,0,-.295,0,"strap");ft("armL",.172,.07,.182,0,-.15,0,"classItem");ft("armL",.188,.012,.198,0,-.15,0,"classItemMark");ft("armL",.02,.11,.05,.096,-.215,-.03,"classItem");ft("armL",.008,.006,.06,.09,-.175,.035,"glowElement");tn("handL",.008,.05,.05,-.054,-.055,0,"glowElement");tn("handL",.008,.06,.006,.054,-.055,0,"glowElement");const Yx={parts:Es,previewArmOut:.2,clothLimits:{skirtB:[-.2,.6]},targets:{boxes:[50,75],topY:[1.82,1.87],minY:[-.005,.005],visorY:[1.68,1.72],shoulderSpan:[.7,.78],chestSpan:[.48,.54],waistSpan:[.5,.58],hemSpanMin:.6,hemOverChestMin:.08,coatBottom:[.34,.48],armourShare:[.12,.3],detailShareMin:.45,bond:{parts:[1,2],boneY:[-.22,-.1],worldY:[1.26,1.38],wrapW:.13,wrapD:.14,threadMaxArea:.01},chamfers:{min:2,rad:[.5,1]},kneelFloor:-.02}},ml=.24,Rc={cameraMotion:1},O0=.15,$x=.06,po={arc:{hud:"#7bd3f7",glow:"#6fd3ff"},solar:{hud:"#f07a2a",glow:"#ff8a2a"},void:{hud:"#a57be0",glow:"#c9a9ff"}},Vn={titanPlate:{element:"arc",grenade:"titan.grenade",melee:"titan.melee",class:"titan.class",super:"titan.super"},hunterCloak:{element:"solar",grenade:"hunter.grenade",melee:"hunter.melee",class:"hunter.class",super:"hunter.super"},warlockRobe:{element:"void",grenade:"warlock.grenade",melee:"warlock.melee",class:"warlock.class",super:"warlock.super"}},gl={speed:7.5,lift:4.2,gravity:14,lifetime:2.5,floorY:.1,wallPad:.15},Qn={"titan.grenade":{slot:"grenade",view:"fp",seconds:.62,events:[[.48,"release"],[1,"end"]],commit:"release",move:[[0,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{kind:"pulse",lob:gl,selfScale:.6,radius:3.2,blast:40,pulses:[[.6,30],[1.2,30],[1.8,30]]}},"hunter.grenade":{slot:"grenade",view:"fp",seconds:.62,events:[[.48,"release"],[1,"end"]],commit:"release",move:[[0,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{kind:"blaze",lob:gl,selfScale:.6,radius:3.2,blast:100,burn:{seconds:3,every:.5,damage:5}}},"warlock.grenade":{slot:"grenade",view:"fp",seconds:.62,events:[[.48,"release"],[1,"end"]],commit:"release",move:[[0,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{kind:"sink",lob:gl,selfScale:.6,radius:3,seconds:2.4,every:.3,ticks:8,damage:17}},"titan.melee":{slot:"melee",view:"fp",seconds:.95,events:[[.17,"impact"],[.45,"recoverable"],[1,"end"]],commit:"recoverable",move:[[0,"driven"],[.17,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{reach:4.5,coneDeg:15,lungeMax:2.5,strikeRange:2.6,basic:80,charged:120,snap:1.2,burn:null}},"hunter.melee":{slot:"melee",view:"fp",seconds:.93,events:[[.143,"impact"],[.45,"recoverable"],[1,"end"]],commit:"recoverable",move:[[0,"driven"],[.143,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:96,tuning:{reach:4.5,coneDeg:15,lungeMax:2.5,strikeRange:2.6,basic:80,charged:120,snap:1.2,burn:{seconds:3,every:.5,damage:5}}},"warlock.melee":{slot:"melee",view:"fp",seconds:.95,events:[[.158,"impact"],[.45,"recoverable"],[1,"end"]],commit:"recoverable",move:[[0,"driven"],[.158,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{reach:4.5,coneDeg:15,lungeMax:2.5,strikeRange:2.6,basic:80,charged:120,snap:1.2,burn:null}},"titan.class":{slot:"class",view:"fp",seconds:.7,events:[[.57,"plant"],[1,"end"]],commit:"plant",move:[[0,"locked"],[.643,"free"]],grounded:!0,camera:null,damageTaken:1,cooldown:38*ml,launchCooldown:38,tuning:{wall:{width:2.4,height:1.15,depth:.25,ahead:1.5,rise:.25,seconds:20,sink:.25,hp:500},zone:{near:.1,far:1.8,lateral:1.3},rearm:.5}},"hunter.class":{slot:"class",view:"tp",seconds:.5,events:[[.6,"reload"],[1,"end"]],commit:"reload",move:[[0,"driven"],[1,"free"]],grounded:!0,camera:"roll",damageTaken:1,cooldown:25*ml,launchCooldown:25,tuning:{distance:4,travel:[.04,.74],noInputBackMin:3,untargetable:!0}},"warlock.class":{slot:"class",view:"tp",seconds:2,events:[[.75,"plant"],[1,"end"]],commit:"plant",move:[[0,"locked"],[1,"free"]],grounded:!0,camera:"circle",damageTaken:.8,cooldown:83*ml,launchCooldown:83,tuning:{radius:3.75,seconds:15,weaponScale:1.2,heal:40,fadeIn:.2,fadeOut:.5}},"titan.super":{slot:"super",view:"tp",seconds:1.6,events:[[.5,"impact"],[1,"end"]],commit:"impact",move:[[0,"driven"],[.5375,"locked"],[1,"free"]],grounded:!1,camera:"slam",damageTaken:.4,cooldown:null,launchCooldown:null,tuning:{radius:7,centreHeight:1,damage:99999,spend:"impact",shake:{amplitude:.05,seconds:.3}}},"hunter.super":{slot:"super",view:"tp",seconds:.8,events:[[.55,"release"],[1,"end"]],commit:"release",move:[[0,"driven"],[.55,"locked"],[1,"free"]],grounded:!1,camera:"throw",damageTaken:1,cooldown:null,launchCooldown:null,tuning:{speed:40,radius:.06,range:40,damage:99999,pierce:!0,hitBurst:{radius:.8,seconds:.15},spend:"release"}},"warlock.super":{slot:"super",view:"tp",seconds:1.2,events:[[.58,"release"],[1,"end"]],commit:"release",move:[[0,"driven"],[.58,"locked"],[1,"free"]],grounded:!1,camera:"burst",damageTaken:.46,cooldown:null,launchCooldown:null,tuning:{diameter:.45,speed:18,lifetime:3,radius:6,damage:99999,spend:"release"}}},oh=Math.PI*2,Kx=Math.PI/4,jx=-.01,fa={"hunter.class":{bones:{armL:[[0,0,0,0],[.12,-.55,0,-.03],[.2,-.15,0,-.13],[.5,-.15,0,-.13],[.6,-.75,0,.37],[.72,-.35,0,.42],[.85,-.2,0,.22],[1,0,0,0]],armR:[[0,0,0,0],[.12,-.55,0,.03],[.2,-.15,0,.13],[.5,-.15,0,.13],[.6,.6,0,-.12],[.72,.5,0,-.17],[.85,.15,0,-.12],[1,0,0,0]],capeA:[[0,0,0,0],[.12,.1,0,0],[.2,-.35,0,0],[.5,-.35,0,0],[.6,-.2,0,0],[.72,.15,0,0],[.85,0,0,0],[1,0,0,0]],capeB:[[0,0,0,0],[.12,0,0,0],[.2,-.35,0,0],[.5,-.35,0,0],[.6,-.2,0,0],[.72,.15,0,0],[.85,0,0,0],[1,0,0,0]],chest:[[0,0,0,0],[.12,.35,0,0],[.2,.55,0,0],[.5,.55,0,0],[.6,.25,0,0],[.72,.2,0,0],[.85,.1,0,0],[1,0,0,0]],footL:[[0,0,0,0],[.12,-.477,0,0],[.2,.4,0,0],[.5,.4,0,0],[.6,.2,0,0],[.72,-.571,0,0],[.85,-.632,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.12,-.477,0,0],[.2,.4,0,0],[.5,.4,0,0],[.6,.1,0,0],[.72,1.279,0,0],[.85,-.931,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.12,-.6,0,0],[.2,-1.2,0,0],[.5,-1.2,0,0],[.6,.2,0,0],[.72,.3,0,0],[.85,.1,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.12,-.6,0,0],[.2,-1.2,0,0],[.5,-1.2,0,0],[.6,-.1,0,0],[.72,.1,0,0],[.85,0,0,0],[1,0,0,0]],head:[[0,0,0,0],[.12,.4,0,0],[.2,.8,0,0],[.5,.8,0,0],[.6,.45,0,0],[.72,.05,0,0],[.85,0,0,0],[1,0,0,0]],shinL:[[0,0,0,0],[.12,1.527,0,0],[.2,2.3,0,0],[.5,2.3,0,0],[.6,1.8,0,0],[.72,1.721,0,0],[.85,1.282,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.12,1.527,0,0],[.2,2.3,0,0],[.5,2.3,0,0],[.6,1.5,0,0],[.72,1.371,0,0],[.85,1.181,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.12,.3,0,0],[.2,.45,0,0],[.5,.45,0,0],[.6,.3,0,0],[.72,.2,0,0],[.85,.15,0,0],[1,0,0,0]],thighL:[[0,0,0,0],[.12,-1.05,0,.05],[.2,-2.1,0,.12],[.5,-2.1,0,.12],[.6,-1.6,0,.1],[.72,-1.15,0,.1],[.85,-.65,0,.08],[1,0,0,0]],thighR:[[0,0,0,0],[.12,-1.05,0,-.05],[.2,-2.1,0,-.12],[.5,-2.1,0,-.12],[.6,-1.4,0,-.1],[.72,.1,0,0],[.85,-.25,0,-.08],[1,0,0,0]],pelvis:[[0,0,0,0],[.12,0,0,0],[.72,oh,0,0],[1,oh,0,0]]},pelvisPos:[[0,0,0,0],[.12,0,-.3,0],[.16,0,-.402,-.012],[.2,0,-.483,-.038],[.24,0,-.433,-.056],[.28,0,-.41,-.035],[.32,0,-.141,.095],[.36,0,-.012,.286],[.4,0,-.197,.337],[.44,0,-.464,.422],[.48,0,-.676,.432],[.52,0,-.566,.322],[.56,0,-.494,.072],[.6,0,-.496,-.049],[.64,0,-.265,-.013],[.68,0,-.148,-.002],[.72,0,-.36,0],[.85,0,-.2,0],[1,0,0,0]],root:[[0,0,0,0],[1,0,0,0]],ground:[[0,1],[1,1]],glow:[[0,0]],face:"move",cloth:[[0,1],[.12,0],[.72,0],[.85,1],[1,1]]},"warlock.class":{bones:{armL:[[0,0,0,0],[.12,-.2,0,-.13],[.4,.15,0,.57],[.62,.13,0,.6],[.75,.45,0,.77],[.85,.5,0,.77],[.93,-.05,0,.42],[1,0,0,0]],armR:[[0,0,0,0],[.12,-.2,0,.13],[.4,-2.5,0,-.07],[.62,-2.53,0,-.07],[.75,-.95,0,.06],[.85,-.97,0,.06],[.93,-.25,0,-.27],[1,0,0,0]],chest:[[0,0,0,0],[.12,-.1,0,0],[.4,-.2,.15,0],[.62,-.22,.15,0],[.75,.55,-.15,0],[.85,.58,-.15,0],[.93,.05,0,0],[1,0,0,0]],footL:[[0,0,0,0],[.12,-.491,0,0],[.4,-.308,0,0],[.62,-.355,0,0],[.75,-.527,0,0],[.85,-.558,0,0],[.93,-.579,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.12,-.491,0,0],[.4,-.416,0,0],[.62,-.467,0,0],[.75,-1.353,0,0],[.85,-1.393,0,0],[.93,-.859,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.12,-1.15,0,0],[.4,.4,0,0],[.62,.38,0,0],[.75,.2,0,0],[.85,.15,0,0],[.93,.3,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.12,-1.15,0,0],[.4,.55,0,0],[.62,.58,0,0],[.75,.75,0,0],[.85,.73,0,0],[.93,.3,0,0],[1,0,0,0]],head:[[0,0,0,0],[.12,.3,0,0],[.4,-.2,0,0],[.62,-.22,0,0],[.75,.15,0,0],[.85,.18,0,0],[.93,.05,0,0],[1,0,0,0]],shinL:[[0,0,0,0],[.12,.741,0,0],[.4,.508,0,0],[.62,.575,0,0],[.75,1.627,0,0],[.85,1.678,0,0],[.93,1.129,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.12,.741,0,0],[.4,.366,0,0],[.62,.417,0,0],[.75,1.403,0,0],[.85,1.443,0,0],[.93,.959,0,0],[1,0,0,0]],skirtB:[[0,0,0,0],[.12,0,0,0],[.4,0,0,0],[.62,0,0,0],[.75,.24,0,0],[.85,.24,0,0],[.93,0,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.12,0,0,0],[.4,-.1,0,0],[.62,-.11,0,0],[.75,.4,0,0],[.85,.42,0,0],[.93,.1,0,0],[1,0,0,0]],thighL:[[0,0,0,0],[.12,-.25,0,.06],[.4,-.2,0,.1],[.62,-.22,0,.1],[.75,-1.1,0,.1],[.85,-1.12,0,.1],[.93,-.55,0,.08],[1,0,0,0]],thighR:[[0,0,0,0],[.12,-.25,0,-.06],[.4,.05,0,-.08],[.62,.05,0,-.08],[.75,-.05,0,-.06],[.85,-.05,0,-.06],[.93,-.1,0,-.06],[1,0,0,0]]},pelvisPos:[[0,0,0,0],[.12,0,-.08,0],[.4,0,-.04,0],[.62,0,-.05,0],[.75,0,-.33,0],[.85,0,-.345,0],[.93,0,-.16,0],[1,0,0,0]],root:[[0,0,0,0],[1,0,0,0]],ground:[[0,1],[1,1]],glow:[[0,0],[.4,1],[.95,0]],face:"cast",faceOffset:[[0,0],[.62,0],[.75,.436],[.85,.436],[1,0]],ease:{in:[.75],out:[],tracks:["armR","foreR"]}},"titan.super":{bones:{armL:[[0,0,0,0],[.1,1.05,0,.12],[.22,-1.65,0,-.08],[.34,-2.5,0,-.4],[.44,-2.25,0,-.38],[.5,-.7,0,-.3],[.75,-.67,0,-.3],[.88,-.2,0,.07],[1,0,0,0]],armR:[[0,0,0,0],[.1,1.05,0,-.12],[.22,-1.65,0,.08],[.34,-2.5,0,.4],[.44,-2.25,0,.38],[.5,-.7,0,.3],[.75,-.67,0,.3],[.88,-.2,0,-.07],[1,0,0,0]],chest:[[0,0,0,0],[.1,.3,0,0],[.22,-.2,0,0],[.34,-.35,0,0],[.44,0,0,0],[.5,.65,0,0],[.75,.69,0,0],[.88,.25,0,0],[1,0,0,0]],footL:[[0,0,0,0],[.1,-.697,0,0],[.22,.65,0,0],[.34,.45,0,0],[.44,.4,0,0],[.5,-.789,0,0],[.75,-.828,0,0],[.88,-.536,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.1,-.697,0,0],[.22,.65,0,0],[.34,.45,0,0],[.44,.4,0,0],[.5,1.279,0,0],[.75,1.279,0,0],[.88,-1.027,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.1,.5,0,0],[.22,.2,0,0],[.34,.45,0,0],[.44,.55,0,0],[.5,.7,0,0],[.75,.68,0,0],[.88,.2,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.1,.5,0,0],[.22,.2,0,0],[.34,.45,0,0],[.44,.55,0,0],[.5,.7,0,0],[.75,.68,0,0],[.88,.2,0,0],[1,0,0,0]],head:[[0,0,0,0],[.1,-.2,0,0],[.22,-.1,0,0],[.34,.15,0,0],[.44,.2,0,0],[.5,.15,0,0],[.75,.2,0,0],[.88,0,0,0],[1,0,0,0]],mark:[[0,0,0,0],[.1,.24,0,0],[.22,.39,0,0],[.34,-.26,0,0],[.44,-.36,0,0],[.5,-.96,0,0],[.75,-.96,0,0],[.88,0,0,0],[1,0,0,0]],shinL:[[0,0,0,0],[.1,1.547,0,0],[.22,-.05,0,0],[.34,1.7,0,0],[.44,1.4,0,0],[.5,2.139,0,0],[.75,2.198,0,0],[.88,1.386,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.1,1.547,0,0],[.22,-.05,0,0],[.34,1.7,0,0],[.44,1.4,0,0],[.5,2.196,0,0],[.75,2.259,0,0],[.88,1.327,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.1,.15,0,0],[.22,-.1,0,0],[.34,-.15,0,0],[.44,-.05,0,0],[.5,.3,0,0],[.75,.32,0,0],[.88,.15,0,0],[1,0,0,0]],thighL:[[0,0,0,0],[.1,-.85,0,.08],[.22,.15,0,.06],[.34,-1.2,0,.1],[.44,-1,0,.1],[.5,-1.35,0,.12],[.75,-1.37,0,.12],[.88,-.85,0,.1],[1,0,0,0]],thighR:[[0,0,0,0],[.1,-.85,0,-.08],[.22,.15,0,-.06],[.34,-1.2,0,-.1],[.44,-1,0,-.1],[.5,-.725,0,0],[.75,-.788,0,0],[.88,-.3,0,-.08],[1,0,0,0]]},pelvisPos:[[0,0,0,0],[.1,0,-.28,0],[.22,0,0,0],[.34,0,0,0],[.44,0,0,0],[.5,0,-.5,0],[.75,0,-.52,0],[.88,0,-.24,0],[1,0,0,0]],root:[[0,0,0,0],[.1,0,0,0],[.22,0,.75,0],[.34,0,1.3,0],[.44,0,1.08,0],[.5,0,0,0],[.75,0,0,0],[.88,0,0,0],[1,0,0,0]],ground:[[0,1],[.1,1],[.16,0],[.46,0],[.5,1],[1,1]],glow:[[0,0],[.1,1],[.8,0]],face:"cast",faceOffset:[[0,0],[.46,0],[.5,-.436],[.75,-.436],[.88,0],[1,0]],ease:{in:[.5],out:[],tracks:["root","armL","armR","foreL","foreR"]}},"hunter.super":{bones:{armL:[[0,0,0,0],[.16,.15,0,.12],[.36,-.95,0,-.98],[.48,-1.1,0,-.03],[.55,.65,0,.27],[.62,.65,0,.27],[.75,.65,0,.27],[.88,.25,0,.12],[1,0,0,0]],armR:[[0,0,0,0],[.16,-.45,0,.53],[.36,-.75,0,-.57],[.48,-1.85,0,-.42],[.55,-1.65,0,.03],[.62,-.95,0,.08],[.75,-.91,0,.08],[.88,-.6,0,-.02],[1,0,0,0]],capeA:[[0,0,0,0],[.16,0,0,0],[.36,0,0,0],[.48,.2,0,0],[.55,.15,0,0],[.62,.15,0,0],[.75,.15,0,0],[.88,0,0,0],[1,0,0,0]],chest:[[0,0,0,0],[.16,.1,.2,0],[.36,-.05,-.25,0],[.48,-.15,-.3,0],[.55,.05,.1,0],[.62,.15,.2,0],[.75,.17,.22,0],[.88,0,.1,0],[1,0,0,0]],footL:[[0,0,0,0],[.16,-.427,0,0],[.36,-.425,0,0],[.48,-.409,0,0],[.55,-.408,0,0],[.62,-.408,0,0],[.75,-.408,0,0],[.88,-.299,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.16,-.467,0,0],[.36,-.514,0,0],[.48,-.583,0,0],[.55,-.649,0,0],[.62,-.649,0,0],[.75,-.649,0,0],[.88,-.363,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.16,.2,0,0],[.36,.1,0,0],[.48,.65,0,0],[.55,.3,0,0],[.62,.3,0,0],[.75,.3,0,0],[.88,.2,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.16,-.2,0,0],[.36,-.2,0,0],[.48,-1,0,0],[.55,.6,0,0],[.62,.55,0,0],[.75,.55,0,0],[.88,.25,0,0],[1,0,0,0]],head:[[0,0,0,0],[.16,.4,.1,0],[.36,.15,-.3,0],[.48,.1,.4,0],[.55,.1,-.1,0],[.62,.1,-.1,0],[.75,.1,-.1,0],[.88,0,-.15,0],[1,0,0,0]],shinL:[[0,0,0,0],[.16,.527,0,0],[.36,.625,0,0],[.48,.759,0,0],[.55,.858,0,0],[.62,.858,0,0],[.75,.858,0,0],[.88,.419,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.16,.417,0,0],[.36,.364,0,0],[.48,.333,0,0],[.55,.349,0,0],[.62,.349,0,0],[.75,.349,0,0],[.88,.263,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.16,.05,.15,0],[.36,-.05,-.15,0],[.48,-.1,-.12,0],[.55,0,.05,0],[.62,.05,.1,0],[.75,.05,.1,0],[.88,-.02,.08,0],[1,0,0,0]],thighL:[[0,0,0,0],[.16,-.1,0,.08],[.36,-.2,0,.1],[.48,-.35,0,.1],[.55,-.45,0,.1],[.62,-.45,0,.1],[.75,-.45,0,.1],[.88,-.12,0,.06],[1,0,0,0]],thighR:[[0,0,0,0],[.16,.05,0,-.06],[.36,.15,0,-.08],[.48,.25,0,-.1],[.55,.3,0,-.1],[.62,.3,0,-.1],[.75,.3,0,-.1],[.88,.1,0,-.05],[1,0,0,0]]},pelvisPos:[[0,0,0,0],[.16,0,-.05,0],[.36,0,-.06,0],[.48,0,-.08,0],[.55,0,-.1,0],[.62,0,-.11,0],[.75,0,-.11,0],[.88,0,-.03,0],[1,0,0,0]],root:[[0,0,0,0],[1,0,0,0]],ground:[[0,1],[1,1]],glow:[[0,0],[.36,1],[.6,0]],face:"viewUntilRelease",ease:{in:[.55],out:[.55],tracks:["armR","foreR","chest","spine"]},props:[{kind:"knife",bone:"handR",on:[[0,0],[.16,1],[.55,0]],glow:[[0,0],[.36,1],[.55,0]]}]},"warlock.super":{bones:{armL:[[0,0,0,0],[.15,-.6,0,-.73],[.45,-.6,0,-.58],[.54,-1.1,0,-1.03],[.58,-1.5,0,-.78],[.66,-1.05,0,-.63],[.78,-1.01,0,-.63],[.88,-.45,0,-.18],[1,0,0,0]],armR:[[0,0,0,0],[.15,-.4,0,-.02],[.45,-.35,0,-.17],[.54,0,0,-.52],[.58,-1.5,0,.03],[.66,-1.1,0,.13],[.78,-1.06,0,.13],[.88,-.5,0,.08],[1,0,0,0]],chest:[[0,0,0,0],[.15,0,-.25,0],[.45,-.05,-.3,0],[.54,-.17,-.55,0],[.58,.05,-.2,0],[.66,.17,-.05,0],[.78,.19,-.03,0],[.88,.05,0,0],[1,0,0,0]],footL:[[0,0,0,0],[.15,-.547,0,0],[.45,-.674,0,0],[.54,-.508,0,0],[.58,-.546,0,0],[.66,-.566,0,0],[.78,-.585,0,0],[.88,-.454,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.15,-.608,0,0],[.45,-.757,0,0],[.54,-.745,0,0],[.58,-.805,0,0],[.66,-.89,0,0],[.78,-.922,0,0],[.88,-.6,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.15,.2,0,0],[.45,.1,0,0],[.54,-.3,0,0],[.58,.5,0,0],[.66,.72,0,0],[.78,.7,0,0],[.88,.1,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.15,.1,0,0],[.45,.05,0,0],[.54,-1.2,0,0],[.58,.5,0,0],[.66,.72,0,0],[.78,.7,0,0],[.88,.1,0,0],[1,0,0,0]],head:[[0,0,0,0],[.15,.35,.15,0],[.45,.35,.2,0],[.54,.2,.55,0],[.58,.15,.2,0],[.66,.15,.05,0],[.78,.16,.03,0],[.88,.1,0,0],[1,0,0,0]],shinL:[[0,0,0,0],[.15,.847,0,0],[.45,1.024,0,0],[.54,.958,0,0],[.58,1.046,0,0],[.66,1.166,0,0],[.78,1.205,0,0],[.88,.754,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.15,.808,0,0],[.45,.957,0,0],[.54,.545,0,0],[.58,.555,0,0],[.66,.59,0,0],[.78,.622,0,0],[.88,.45,0,0],[1,0,0,0]],skirtB:[[0,0,0,0],[.15,0,0,0],[.45,0,0,0],[.54,0,0,0],[.58,0,0,0],[.66,.14,0,0],[.78,.14,0,0],[.88,0,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.15,-.05,-.1,0],[.45,-.05,-.12,0],[.54,-.1,-.2,0],[.58,0,-.1,0],[.66,.07,-.05,0],[.78,.08,-.05,0],[.88,.01,0,0],[1,0,0,0]],thighL:[[0,0,0,0],[.15,-.3,0,.08],[.45,-.35,0,.1],[.54,-.45,0,.12],[.58,-.5,0,.12],[.66,-.6,0,.12],[.78,-.62,0,.12],[.88,-.3,0,.08],[1,0,0,0]],thighR:[[0,0,0,0],[.15,-.2,0,-.08],[.45,-.2,0,-.1],[.54,.2,0,-.1],[.58,.25,0,-.1],[.66,.3,0,-.1],[.78,.3,0,-.1],[.88,.15,0,-.08],[1,0,0,0]]},pelvisPos:[[0,0,0,0],[.15,0,-.1,0],[.45,0,-.14,0],[.54,0,-.12,0],[.58,0,-.14,0],[.66,0,-.17,0],[.78,0,-.18,0],[.88,0,-.08,0],[1,0,0,0]],root:[[0,0,0,0],[.15,0,.05,0],[.45,0,.12,0],[.54,0,.12,0],[.58,0,.1,0],[.66,0,.06,0],[.78,0,.04,0],[.88,0,0,0],[1,0,0,0]],ground:[[0,1],[1,1]],glow:[[0,0],[.1,1],[.7,0]],face:"viewUntilRelease",ease:{in:[.58],out:[.58],tracks:["armL","armR","foreL","foreR"]}}},Zx={knife:[["handR",.026,.05,.026,0,-.105,.01,"leather"],["handR",.03,.01,.05,0,-.135,.01,"guard"],["handR",.008,.16,.032,0,-.22,.01,"blade"],["handR",.0078,.022,.022,0,-.3,.01,"blade",Kx,0,0],["handR",.0035,.15,.004,0,-.215,.028,"edge"],["handR",.001,.14,.014,.0046,-.215,.012,"glowElement"],["handR",.001,.14,.014,-.0046,-.215,.012,"glowElement"]]},Go=Math.PI/4,ah={left:[-.24,-.28,.06]},Jx=[.01,-.048,-.066],Qx={"titan.grenade.wind":{at:[-.265,-.223,-.249],fingers:[.092,.925,.37],back:[-.447,0,.894]},"titan.grenade.high":{at:[-.238,-.005,-.32],fingers:[.095,.953,.286],back:[-.37,.092,.925]},"titan.grenade.release":{at:[-.08,.007,-.412],fingers:[.238,.19,-.952],back:[-.183,.913,.365]},"titan.grenade.follow":{at:[.116,-.205,-.4],fingers:[.29,-.677,-.677],back:[.198,.693,-.693]},"hunter.grenade.reach":{at:[-.298,-.034,-.24],fingers:[0,.894,.447],back:[-.514,0,.857]},"hunter.grenade.cock":{at:[-.257,-.027,-.316],fingers:[.089,.891,.445],back:[-.447,0,.894]},"hunter.grenade.release":{at:[-.079,.017,-.403],fingers:[.276,.276,-.921],back:[-.276,.921,.276]},"hunter.grenade.follow":{at:[.087,-.166,-.42],fingers:[.196,-.588,-.784],back:[.1,.796,-.597]},"warlock.grenade.wind":{at:[-.229,-.147,-.213],fingers:[0,-.958,.287],back:[0,.287,.958]},"warlock.grenade.swing":{at:[-.161,-.162,-.289],fingers:[.099,-.099,-.99],back:[0,-1,0]},"warlock.grenade.release":{at:[-.034,-.118,-.419],fingers:[.091,.409,-.908],back:[0,-.912,-.41]},"warlock.grenade.follow":{at:[.04,-.164,-.443],fingers:[.092,.829,-.552],back:[0,-.514,-.857]},"titan.melee.wind":{at:[-.274,-.226,-.22],fingers:[.337,.421,-.842],back:[-.432,.864,.259]},"titan.melee.hit":{at:[-.068,-.002,-.427],fingers:[.119,.059,-.991],back:[-.287,.958,0]},"titan.melee.drive":{at:[-.061,-.008,-.457],fingers:[.119,.059,-.991],back:[-.287,.958,0]},"titan.melee.back":{at:[-.225,-.132,-.315],fingers:[.276,.276,-.921],back:[-.44,.88,.176]},"hunter.melee.wind":{at:[-.318,-.201,-.24],fingers:[.732,.329,-.596],back:[-.607,.713,-.351]},"hunter.melee.stab":{at:[-.08,.051,-.413],fingers:[.976,-.191,.109],back:[.196,.98,-.039]},"hunter.melee.drive":{at:[-.07,.046,-.438],fingers:[.976,-.191,.109],back:[.196,.98,-.039]},"hunter.melee.back":{at:[-.244,-.06,-.379],fingers:[.978,-.097,-.184],back:[-.015,.85,-.527]},"warlock.melee.wind":{at:[-.292,-.205,-.22],fingers:[.095,.953,.286],back:[-.981,0,.196]},"warlock.melee.push":{at:[-.044,-.071,-.435],fingers:[.049,.979,-.196],back:[0,.148,.989]},"warlock.melee.press":{at:[-.042,-.073,-.475],fingers:[.049,.979,-.196],back:[0,.148,.989]},"warlock.melee.after":{at:[-.208,-.164,-.341],fingers:[.198,.693,-.693],back:[-.348,.348,.87]},"titan.class.rise":{at:[-.315,-.087,-.277],fingers:[.095,.953,.286],back:[-.958,0,.287]},"titan.class.raise":{at:[-.247,-.002,-.366],fingers:[.238,.952,.19],back:[-.514,0,.857]},"titan.class.slam":{at:[-.124,-.111,-.357],fingers:[.094,-.329,-.94],back:[-.095,.953,-.286]},"titan.class.press":{at:[-.125,-.134,-.377],fingers:[.094,-.329,-.94],back:[-.095,.953,-.286]}},lh={"titan.grenade":{down:.1,ready:.61,ease:{in:[.48],out:[.48]},left:[[0,"grip",.6],[.14,"grip",.6],[.22,"titan.grenade.wind",.75],[.36,"titan.grenade.high",.75],[.48,"titan.grenade.release",.35],[.58,"titan.grenade.follow",.3],[.595,"offLeft",.6],[.61,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.14,0],[.22,1],[.595,1],[.61,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.054,-2,-3,5,-.15,.2,0],[.36,-6,6,10,.6,.5,-.2],[.426,8,-6,-22,-.8,-.6,.25],[.48,5,-7,-18,-.9,-.4,.25],[.58,-3,2,6,.3,.2,-.1],[.72,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:[[0,0],[.12,1],[.48,0]],propKind:"grenade",glow:[[0,0],[.14,1],[.52,0]]},"hunter.grenade":{down:.1,ready:.61,ease:{in:[.48],out:[.48]},left:[[0,"grip",.6],[.14,"grip",.6],[.2,"hunter.grenade.reach",.75],[.26,"hunter.grenade.cock",.75],[.38,"hunter.grenade.cock",.75],[.48,"hunter.grenade.release",.35],[.58,"hunter.grenade.follow",.3],[.595,"offLeft",.6],[.61,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.14,0],[.2,1],[.595,1],[.61,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.054,-2,-3,5,-.15,.2,0],[.36,-5,5,8,.5,.5,-.15],[.426,7,-5,-18,-.7,-.5,.2],[.48,4,-6,-15,-.8,-.35,.2],[.58,-3,2,5,.25,.15,-.1],[.72,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:[[0,0],[.12,1],[.48,0]],propKind:"grenade",glow:[[0,0],[.14,1],[.52,0]]},"warlock.grenade":{down:.1,ready:.61,ease:{in:[.48],out:[.48]},left:[[0,"grip",.6],[.14,"grip",.6],[.2,"warlock.grenade.wind",.7],[.34,"warlock.grenade.swing",.65],[.48,"warlock.grenade.release",.3],[.56,"warlock.grenade.follow",.25],[.595,"offLeft",.6],[.61,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.14,0],[.2,1],[.595,1],[.61,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.054,-2,-3,5,-.15,.2,0],[.34,-3,-6,6,-.4,.3,-.1],[.426,4,6,-16,.5,-.4,.15],[.48,3,5,-14,.6,-.3,.15],[.58,-2,-3,5,-.2,.1,-.05],[.72,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:[[0,0],[.12,1],[.48,0]],propKind:"grenade",glow:[[0,0],[.14,1],[.52,0]]},"titan.melee":{down:.07,ready:.48,ease:{in:[.17],out:[.17]},left:[[0,"grip",.6],[.065,"grip",.6],[.1,"titan.melee.wind",1],[.17,"titan.melee.hit",1],[.24,"titan.melee.drive",1],[.43,"titan.melee.back",1],[.465,"offLeft",.8],[.48,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.065,0],[.1,1],[.465,1],[.48,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.07,-8,3,10,.4,.6,-.2],[.135,10,-6,-34,-.9,-.8,.3],[.17,6,-8,-30,-1,-.6,.3],[.26,-6,3,12,.5,.4,-.2],[.4,2,-1,-4,-.15,-.1,.05],[.55,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:null,propKind:null,glow:[[0,0],[.02,1],[.56,0]],glowCharged:!0},"hunter.melee":{down:.07,ready:.48,ease:{in:[.143],out:[.143]},left:[[0,"grip",.6],[.065,"grip",.6],[.095,"hunter.melee.wind",1],[.143,"hunter.melee.stab",1],[.22,"hunter.melee.drive",1],[.43,"hunter.melee.back",1],[.465,"offLeft",1],[.48,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.065,0],[.095,1],[.465,1],[.48,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.0714,-6,2,8,.3,.6,-.2],[.107,8,-4,-20,-.6,-.7,.3],[.143,5,-5,-18,-.7,-.5,.3],[.22,4,-4,-14,-.5,-.4,.2],[.3,-5,2,8,.3,.4,-.15],[.4,1,0,-2,-.1,-.1,0],[.5,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:[[0,0],[.015,1],[.46,0]],propKind:"knife",glow:[[0,0],[.015,1],[.44,0]],glowCharged:!0},"warlock.melee":{down:.07,ready:.48,ease:{in:[.158],out:[.158]},left:[[0,"grip",.6],[.065,"grip",.6],[.1,"warlock.melee.wind",.3],[.158,"warlock.melee.push",.45],[.23,"warlock.melee.press",.45],[.43,"warlock.melee.after",.3],[.465,"offLeft",.6],[.48,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.065,0],[.1,1],[.465,1],[.48,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.07,-6,2,8,.3,.5,-.15],[.123,8,-3,-24,-.5,-.6,.2],[.158,5,-4,-20,-.6,-.5,.2],[.25,-4,2,8,.3,.3,-.1],[.4,1,0,-2,-.1,-.05,0],[.55,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:null,propKind:null,glow:[[0,0],[.02,1],[.56,0]],glowCharged:!0},"titan.class":{down:.1,ready:.68,ease:{in:[.57],out:[.57]},left:[[0,"grip",.6],[.13,"grip",.6],[.22,"titan.class.rise",1],[.34,"titan.class.raise",1],[.44,"titan.class.raise",1],[.57,"titan.class.slam",.25],[.63,"titan.class.press",.25],[.665,"offLeft",.6],[.68,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.13,0],[.22,1],[.665,1],[.68,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.048,0,-4,3,-.2,0,0],[.34,-4,8,6,.6,.5,-.2],[.44,-5,10,8,.7,.6,-.2],[.522,4,-30,-10,-1.2,-.3,.3],[.57,3,-35,-8,-1.3,-.2,.3],[.66,-2,6,3,.4,.1,-.1],[.8,1,-2,0,-.1,0,0],[.92,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:null,propKind:null,glow:[[0,0],[.2,1],[.66,0]]},"hunter.class":{tp:!0,down:.1,ready:1},"warlock.class":{tp:!0,down:.1,ready:1},"titan.super":{tp:!0,down:.1,ready:1},"hunter.super":{tp:!0,down:.1,ready:1},"warlock.super":{tp:!0,down:.1,ready:1}},eM={blade:"#7d858a",edge:"#a9b3b8",leather:"#5a3e2b",cord:"#8a7a5a",guard:"#3a3d40",voidCore:"#231a30",glowCore:"#f4f1ea",glowElement:"#ffffff"},sn=.01,on=-.048,an=-.066,ch={grenade:{arc:[["hand",.03,.03,.03,sn,on,an,"glowCore",.6,.4,0],["hand",.072,.004,.004,sn,on,an,"glowElement",.3,.9,.5],["hand",.072,.004,.004,sn,on,an,"glowElement",1.2,.2,1.4],["hand",.072,.004,.004,sn,on,an,"glowElement",.9,1.6,.2],["hand",.06,.004,.004,sn,on,an,"glowElement",2.1,.7,2.6]],solar:[["hand",.026,.026,.026,sn,on,an,"glowCore"],["hand",.036,.036,.036,sn,on,an,"glowElement",Go,0,0],["hand",.036,.036,.036,sn,on,an,"glowElement",0,Go,0],["hand",.036,.036,.036,sn,on,an,"glowElement",0,0,Go]],void:[["hand",.026,.026,.026,sn,on,an,"voidCore"],["hand",.004,.04,.04,sn+.024,on,an,"glowElement"],["hand",.004,.04,.04,sn-.024,on,an,"glowElement"],["hand",.04,.004,.04,sn,on+.024,an,"glowElement"],["hand",.04,.004,.04,sn,on-.024,an,"glowElement"],["hand",.04,.04,.004,sn,on,an+.024,"glowElement"],["hand",.04,.04,.004,sn,on,an-.024,"glowElement"]]},knife:[["hand",.1,.02,.02,0,-.037,-.08,"leather"],["hand",.06,.022,.022,.004,-.037,-.08,"cord"],["hand",.012,.026,.026,.056,-.037,-.08,"guard"],["hand",.008,.034,.03,-.054,-.037,-.08,"guard"],["hand",.142,.024,.005,-.129,-.037,-.08,"blade"],["hand",.017,.017,.0048,-.2,-.037,-.08,"blade",0,0,Go],["hand",.128,.0045,.0035,-.126,-.0475,-.08,"edge"],["hand",.112,.01,.001,-.128,-.036,-.077,"glowElement"],["hand",.112,.01,.001,-.128,-.036,-.083,"glowElement"]]},tM=(n,e)=>n==="grenade"?ch.grenade[e]:ch[n];function jd(n,e,t,i){const r={...eM,glowElement:po[e].glow},s=new Sn;s.name=i,s.visible=!1;const a=new Qe,o={group:s,solid:null,glow:null,rows:n};for(const l of[!1,!0]){const u=n.filter(f=>Yd(f[7])===l);if(!u.length)continue;const c=u.map(f=>{const _=r[f[7]];if(_===void 0)throw new Error(`props: '${i}' uses unknown colour '${f[7]}'`);const v=new cn(f[1],f[2],f[3]);v.deleteAttribute("uv"),v.applyMatrix4(Ma(f)),a.set(_);const m=v.attributes.position.count,p=new Float32Array(m*3);for(let x=0;x<m;x++)p[x*3]=a.r,p[x*3+1]=a.g,p[x*3+2]=a.b;return v.setAttribute("color",new An(p,3)),v}),h=c.length===1?c[0]:Tc(c,!1);c.length>1&&c.forEach(f=>f.dispose());const d=new vt(h,l?t.glowMaterial:t.solidMaterial);d.name=`${i}:${l?"glow":"solid"}`,d.frustumCulled=!1,d.userData.parts=u,s.add(d),o[l?"glow":"solid"]=d}return o.dispose=()=>{for(const l of[o.solid,o.glow])l==null||l.geometry.dispose()},o}function nM(n,e,t){const i=tM(n,e);if(!i)throw new Error(`fpProps: no prop '${n}' for '${e}'`);return jd(i,e,t,`fp-prop-${n}-${e}`)}const jn={halflife:.12,kFwd:.05,max:.6,capeB:.5,skirtB:.8,markFwd:.3,markFall:-.8},iM={titanPlate:Xx,hunterCloak:qx,warlockRobe:Yx},rM=[-.6,jn.max];function _l(n,e){if(!n)return 0;let t=n[0][1];for(const i of n)i[0]<=e&&(t=i[1]);return t}const sM=new Ve,uh=new Ve,oM=new I,aM=new I,lM=new I,vl=[],xl=[],cM=[0,0,0],Ml=(n,e)=>n.ease&&n.ease.tracks.includes(e)?n.ease:null;function Sa(n,e){const t=iM[n];if(!t)throw new Error(`GuardianBody: unknown class '${n}'`);const i=Vn[n].element,r={...Wx[n],glowElement:po[i].glow},s={solidMaterial:e.solid,glowMaterial:e.glow},a=fo(Vx(n,t.parts,r),s),{root:o,bones:l}=a,u={};for(const M of Object.values(fa))for(const E of M.props??[]){if(u[E.kind])continue;const P=jd(Zx[E.kind],i,s,`risen-${E.kind}`);l[E.bone].add(P.group),u[E.kind]=P}const c=new Qe(r.glove);function h(){if(!a.glow)return;const M=a.glow.geometry.attributes.color;a.glow.userData.parts.forEach((E,P)=>{if(E[7]==="glowElement")for(let T=P*ss*3;T<(P+1)*ss*3;T+=3)M.array[T]=c.r,M.array[T+1]=c.g,M.array[T+2]=c.b})}function d(){let M=1/0;for(const E of Kd){uh.multiplyMatrices(l[E[0]].matrixWorld,Ma(E,sM));for(const P of[-.5,.5])for(const T of[-.5,.5])for(const y of[-.5,.5])M=Math.min(M,oM.set(P*E[1],T*E[2],y*E[3]).applyMatrix4(uh).y)}return M}const f={x:0,v:0},_={x:0,v:0};let v=null;const m=new I,p=new I;let x=null;return{root:o,rig:a,classId:n,props:u,pose(M,E={}){var re;const P=E.base??"ready",T=E.clip??null,y=E.t??0,A=E.w??1,D=E.feet??null,g=E.facing??0,S=E.dt??0,R=T?fa[T]:null;if(T&&!R)throw new Error(`GuardianBody: no third-person clip '${T}'`);const L=P==="preview";a.reset();let F=0;L?Gx(l,M,t.previewArmOut):(Hx(l,Bx),F=zx);const N=cM;if(N[0]=0,N[1]=0,N[2]=0,R){for(const ie in R.bones){const Me=l[ie];if(!Me)continue;const Ce=Bn(R.bones[ie],y,xl,Ml(R,ie));Me.rotation.x+=Ce[0]*A,Me.rotation.y+=Ce[1]*A,Me.rotation.z+=Ce[2]*A}if(R.pelvisPos){const ie=Bn(R.pelvisPos,y,xl,Ml(R,"pelvisPos"));l.pelvis.position.x+=ie[0]*A,l.pelvis.position.y+=ie[1]*A,l.pelvis.position.z+=ie[2]*A}if(R.root){const ie=Bn(R.root,y,xl,Ml(R,"root"));N[0]=ie[0]*A,N[1]=ie[1]*A,N[2]=ie[2]*A}}const U=g+(R&&R.faceOffset?Bn(R.faceOffset,y,vl)[0]*A:0)+Math.PI,Y=Math.cos(U),G=Math.sin(U);if(m.set((D?D.x:0)+Y*N[0]+G*N[2],(D?D.y:0)+F+N[1],(D?D.z:0)-G*N[0]+Y*N[2]),!L){if(S>0&&v){p.subVectors(m,v).divideScalar(S);const ie=p.x*-Math.sin(g)+p.z*-Math.cos(g);Jn(f,At(jn.kFwd*ie,0,jn.max),jn.halflife,S),Jn(_,At(-.12*p.y,0,jn.max),jn.halflife,S);const Me=At(f.x+_.x,-.6,jn.max),Ce={capeA:Me,capeB:jn.capeB*Me,skirtB:jn.skirtB*Me,mark:jn.markFwd*f.x+jn.markFall*_.x},z=R&&R.cloth?Bn(R.cloth,y,vl)[0]:1;for(const q in Ce){const[K,Z]=((re=t.clothLimits)==null?void 0:re[q])??rM;l[q].rotation.x+=At(Ce[q],K,Z)*z}}v=(v??new I).copy(m)}if(o.position.copy(m),o.rotation.set(0,U,0),o.updateMatrixWorld(!0),R&&R.ground){const ie=Bn(R.ground,y,vl)[0]*A*Math.max(0,jx-d());ie>0&&(o.position.y+=ie,o.updateMatrixWorld(!0))}const se=L?!1:E.glow??(R?_l(R.glow,y)===1:!1);se!==x&&(a.setGlowLit(se,ie=>ie[7]==="glowVisor"),se||h(),x=se);for(const ie in u)u[ie].group.visible=!1,u[ie].glow&&(u[ie].glow.visible=!1);for(const ie of(R==null?void 0:R.props)??[]){const Me=u[ie.kind];Me.group.visible=_l(ie.on,y)===1,Me.glow&&(Me.glow.visible=_l(ie.glow,y)===1)}},headWorld(M=new I){return M.set(0,.115,0).applyMatrix4(l.head.matrixWorld)},handWorld(M,E=new I){return E.set(0,-.05,0).applyMatrix4(l[`hand${M}`].matrixWorld)},handsMid(M=new I){return M.addVectors(this.handWorld("L",aM),this.handWorld("R",lM)).multiplyScalar(.5)},chestWorld(M=new I){return M.setFromMatrixPosition(l.chest.matrixWorld)},resetCloth(){f.x=0,f.v=0,_.x=0,_.v=0,v=null},dispose(){a.dispose();for(const M in u)u[M].dispose()}}}const si=Math.PI/180,hh=.55,uM=.2,hM=.35,dM=.8,dh={amplitude:.05,seconds:.35},Lr={roll:{side:.35,height:1.4,distance:2.2,pitch:[-40*si,30*si],k0:1,blendOut:0,blendBack:0},circle:{side:.5,height:1.35,distance:3,pitch:[-50*si,30*si],k0:.55,blendOut:.24,blendBack:.2},slam:{side:.6,height:1.6,distance:4,pitch:[-60*si,35*si],k0:.55,blendOut:.32,blendBack:.28},throw:{side:.45,height:1.5,distance:2.6,pitch:[-40*si,30*si],k0:.55,blendOut:.2,blendBack:.18,aimed:!0},burst:{side:.55,height:1.5,distance:3.4,pitch:[-60*si,35*si],k0:.55,blendOut:.27,blendBack:.24,aimed:!0}},fM=30;function pM({room:n,fov:e=70,radius:t=uM,moments:i=Lr,comfort:r=Rc}){let s="fp",a=null,o=hh,l=0,u=0,c=0,h=0,d=0,f=0,_=0,v=null,m=0,p=0;const x=new I,M=new zt,E=new en(0,0,0,"YXZ"),P=new I,T=new I,y=new zt,A=new I;function D(L,F,N,U,Y,G,se){se.setFromEuler(E.set(U,N,0,"YXZ")),P.set(L.side,0,Y).applyQuaternion(se);const re=F.x,ie=F.y+L.height,Me=F.z;let Ce=1;return Ce=g(Ce,re,P.x,-n.halfW+t,n.halfW-t),Ce=g(Ce,ie,P.y,t,n.wallH-t),Ce=g(Ce,Me,P.z,n.far+t,n.near-t),Ce=At(Ce,0,1),G.set(re+Ce*P.x,ie+Ce*P.y,Me+Ce*P.z),P.length()*Ce}function g(L,F,N,U,Y){return N>0?Math.min(L,(Y-F)/N):N<0?Math.min(L,(U-F)/N):L}function S(L,F){if(F.set(0,0,0),v===null||!(p>0)||L<v||L>=v+p)return F;const N=(L-v)/p,U=m*(1-N)*(1-N)*r.cameraMotion,Y=(L-v)*fM,G=Math.floor(Y),se=ys(Y-G),re=ie=>Ln(Er(G*7+ie*13),Er((G+1)*7+ie*13),se);return F.set(U*re(1),U*re(2),0)}const R=()=>s!=="fp";return{start(L,F,N){const U=i[L];if(!U)return!1;let Y=0;if(N){const G=At(N.pitch,U.pitch[0],U.pitch[1]);if(D(U,N.feet,N.yaw,G,U.distance,T,y)<dM)return!1;Y=N.pitch-G}return a=U,o=U.k0??hh,s="out",c=F,l=o,d=Y,v=null,!0},finish(L){s!=="out"&&s!=="tp"||(u=l,s="back",h=L)},update(L,{feet:F,yaw:N,pitch:U}){if(_=L,s==="fp")return{mode:s,k:0};if(s==="out"&&(!(a.blendOut>0)||L>=c+a.blendOut?(s="tp",l=1):l=o+(1-o)*ys((L-c)/a.blendOut)),s==="back"){if(!(a.blendBack>0)||L>=h+a.blendBack)return s="fp",l=0,f=0,{mode:s,k:l};l=u+(o-u)*yr((L-h)/a.blendBack)}const Y=At(U-d,a.pitch[0],a.pitch[1]);return f=D(a,F,N,Y,a.distance*Ln(o,l,r.cameraMotion),x,M),{mode:s,k:l}},apply(L){L.position.copy(x).add(S(_,A).applyQuaternion(M)),L.quaternion.copy(M),L.fov!==e&&(L.fov=e,L.updateProjectionMatrix())},shake(L,F,N){v=L,m=Math.min(F,dh.amplitude),p=Math.min(N,dh.seconds)},clampPitch(L){return R()?At(L,a.pitch[0],a.pitch[1]):L},bodyVisible(L){return R()&&x.distanceTo(L)>=hM},reset(){s="fp",a=null,l=0,f=0,d=0,v=null},get active(){return R()},get mode(){return s},get k(){return l},get boom(){return f},get pitchLimits(){return R()?[a.pitch[0],a.pitch[1]]:null},get aimed(){return R()&&!!a.aimed},position:x,quaternion:M}}const mM=n=>n<0?0:n>1?1:n,gM=(n,e)=>{let t=n[0][1];for(const i of n)i[0]<=e&&(t=i[1]);return t},_M=()=>({move:"free",jump:!1,fire:!1,aim:!1,reload:!1,swap:!1,keys:{grenade:"start",melee:"start",class:"start",super:"start"}});function vM({abilities:n,moments:e}){let t=null;const i=a=>t&&a<t.returnAt,r=a=>mM((a-t.startAt)/t.seconds);function s(a){if(!i(a))return"start";if(t.def.view==="tp")return"ignore";const o=t.def.events.find(([,l])=>l===t.def.commit)[0];return r(a)>=o?"interrupt":"ignore"}return{get current(){return t&&{id:t.id,startAt:t.startAt,seconds:t.seconds,returnAt:t.returnAt,charged:t.charged}},start(a,o,{grounded:l=!0,charged:u=!1}={}){const c=n[a];if(!c||c.grounded&&!l||c.slot==="super"&&!u||s(o)==="ignore")return!1;const h=c.camera?e[c.camera].blendBack:0;return t={id:a,def:c,startAt:o,seconds:c.seconds,returnAt:o+c.seconds+h,charged:!!u,lastT:0},!0},reset(){t=null},update(a){if(!t)return[];const o=[],l=a>=t.returnAt?1:r(a);for(const[u,c]of t.def.events)u>t.lastT&&u<=l&&o.push({id:t.id,name:c,at:t.startAt+u*t.seconds});return t.lastT=Math.max(t.lastT,l),a>=t.returnAt&&(t=null),o},phase(a){return t?r(a):0},locks(a){if(!i(a))return _M();const o=s(a),l=gM(t.def.move,r(a)),u=t.def.view==="tp";return{move:l,jump:u||l!=="free",fire:u,aim:u,reload:!0,swap:!0,keys:{grenade:o,melee:o,class:o,super:o}}}}}const Zd={};for(const n of Object.keys(Vn)){const e=Vn[n];for(const t of["grenade","melee","class","super"])Zd[e[t]]=po[e.element].glow}const xM=(n,e)=>n.events.find(([,t])=>t===e)[0]*n.seconds;function MM(n){const{scene:e,ROOM:t,camera:i,fp:r,runner:s,moment:a,player:o,view:l,PLAYER_RADIUS:u,now:c,classId:h,body:d,moveAxis:f,ability:_,superCharge:v,weapons:m,legacy:p}=n;let x=null,M=null,E=null,P=0,T=null,y=null,A=0,D=!1,g=null;const S=new Sn;S.name="risen-effects",e&&e.add(S);const R=new I,L=(z,q)=>{M={ev:z,spawn:q}},F=z=>L(z,(q,K)=>p.throwGrenade(q,K,Zd[z.id])),N=()=>p.meleeStrike(),U=()=>p.ward(),Y=()=>p.superWipe(),G={"titan.grenade":{release:F},"hunter.grenade":{release:F},"warlock.grenade":{release:F},"titan.melee":{impact:N},"hunter.melee":{impact:N},"warlock.melee":{impact:N},"titan.class":{plant:U},"hunter.class":{reload:U},"warlock.class":{plant:U},"titan.super":{impact:Y},"hunter.super":{release:Y},"warlock.super":{release:Y}};function se(z,q){let K=1/0;return z>0&&(K=Math.min(K,(t.halfW-u-o.x)/z)),z<0&&(K=Math.min(K,(-t.halfW+u-o.x)/z)),q>0&&(K=Math.min(K,(t.near-u-o.z)/q)),q<0&&(K=Math.min(K,(t.far+u-o.z)/q)),K}function re(){const z=f(),q=Math.sin(l.yaw),K=Math.cos(l.yaw),Z=-q*z.y+K*z.x,ge=-K*z.y-q*z.x,Te=Math.hypot(Z,ge);return Te>0?{x:Z/Te,z:ge/Te}:null}function ie(z,q){const K=Vn[h()][z],Z=Qn[K];if(z==="super"?v.get()<1:!_.ready(z))return"refused";if(s.locks(q).keys[z]==="ignore")return"ignored";const ge=o.y<=0;if(!s.start(K,q,{grounded:ge,charged:!0}))return"refused";if(x=null,z!=="super"&&_.use(z),m.cancelReload(),D=!1,E=null,T=null,y=null,A=l.yaw,K==="hunter.class"){let ke=re();if(!ke){const ze={x:Math.sin(l.yaw),z:Math.cos(l.yaw)};ke=se(ze.x,ze.z)>=Z.tuning.noInputBackMin?ze:{x:-ze.x,z:-ze.z}}E={id:K,startAt:q,dir:ke},P=0,A=Math.atan2(-ke.x,-ke.z)}Z.slot==="super"&&(T={id:K,startAt:q,y0:o.y,until:q+xM(Z,Z.commit)});let Te=0;return Z.view==="tp"&&(Te=Lr[Z.camera].blendBack,a.start(Z.camera,q,{feet:o,yaw:l.yaw,pitch:l.pitch})&&d().resetCloth()),r.act(K,q,Z.seconds+Te,z==="melee"?{charged:!0}:{}),"started"}function Me(z){const q=fa[z].face;return q==="view"||q==="viewUntilRelease"&&!D?l.yaw:A}function Ce(){}return{press(z){const q=c(),K=ie(z,q);return K==="ignored"&&(x={slot:z,at:q}),K==="started"},onEvents(z){var q,K;for(const Z of z){const ge=Qn[Z.id];Z.name==="release"&&(D=!0,ge.view==="tp"&&fa[Z.id].face==="viewUntilRelease"&&(A=l.yaw)),ge.slot==="super"&&Z.name===ge.tuning.spend&&v.set(0),(K=(q=G[Z.id])==null?void 0:q[Z.name])==null||K.call(q,Z),Z.name==="end"&&ge.view==="tp"&&a.finish(Z.at)}},update(z){if(!x)return;const q=c();(q-x.at>O0||ie(x.slot,q)==="started")&&(x=null)},lateUpdate(z){if(M){const{spawn:ge}=M;M=null,ge(r.leftHandWorld(i,new I),i.getWorldDirection(new I))}const q=g===null?0:z-g;g=z;const K=d();if(!K)return;const Z=s.current;if(Z&&Qn[Z.id].view==="tp"&&a.active){const ge=At((z-Z.startAt)/Z.seconds,0,1);K.pose(z,{clip:Z.id,t:ge,feet:o,facing:Me(Z.id),dt:q}),K.root.visible=a.bodyVisible(K.headWorld(R))}else K.root.visible=!1},drive(z,q){const K=s.current;if(!K)return null;const Z=c();if(E&&E.id===K.id&&E.startAt===K.startAt){const[ge,Te]=Qn[K.id].tuning.travel,ke=ys(At(((Z-K.startAt)/K.seconds-ge)/(Te-ge),0,1)),ze=Qn[K.id].tuning.distance*(ke-P);return q.x+=E.dir.x*ze,q.z+=E.dir.z*ze,P=ke,null}return T&&T.id===K.id&&T.startAt===K.startAt&&T.y0>0?(q.y=T.y0*(1-ys((Z-T.until)/$x)),{velY:0}):null},pushOut(){},locks(z){const q=s.locks(z),K=s.current;return K&&Qn[K.id].slot==="melee"&&y===null&&(q.move="free",q.jump=!1),q},weaponDamageScale(){return 1},buffs(){return{emboldened:{on:!1,left:0}}},get aiming(){return a.aimed&&!D},get busy(){return s.current!==null||a.active||x!==null&&c()-x.at<=O0},setClass(z){if(!Vn[z])return;s.reset(),a.reset(),x=null,M=null,E=null,T=null,y=null,D=!1;const q=d();q&&(q.root.visible=!1)},clearWorld:Ce,get effectsRoot(){return S}}}const SM="Risen",yM="Character and loadout — Esc to resume",EM="Kit",bM={titanPlate:{label:"Plate"},hunterCloak:{label:"Cloak"},warlockRobe:{label:"Coat"}},wM={arc:"Arc",solar:"Solar",void:"Void"},TM={grenade:"Grenade",melee:"Melee",class:"Class ability",super:"Super"},AM={grenade:"Q",melee:"C",class:"V",super:"F"},RM={"titan.grenade":{name:"Arc Beacon"},"titan.melee":{name:"Punch",charged:"Arc Fist"},"titan.class":{name:"Wall of Light"},"titan.super":{name:"Arc Slam"},"hunter.grenade":{name:"Solar Blaze"},"hunter.melee":{name:"Knife",charged:"Solar Knife"},"hunter.class":{name:"Roll"},"hunter.super":{name:"Knife of Light"},"warlock.grenade":{name:"Void Sink"},"warlock.melee":{name:"Palm",charged:"Void Palm"},"warlock.class":{name:"Circle of Light"},"warlock.super":{name:"Void Burst"}},CM={emboldened:"Emboldened"},LM={title:"Camera motion",full:"Full",half:"Half",off:"Off"},k0={overTitle:"PRE-DESTINY",title:"RUSTLIGHT",press:"PRESS",enterKey:"Enter",begin:"TO BEGIN",loading:"LOADING…",stillLoading:"Still loading… Reload the page",reload:"Reload",noWebgl:"This browser can't draw the game. Try an up-to-date Chrome, Edge, Firefox or Safari.",failed:"The range didn't load. Reload the page to try again."},PM={heading:SM,menuSub:yM,kitTitle:EM,classes:bM,elements:wM,slots:TM,keys:AM,abilities:RM,buffs:CM,comfort:LM,start:k0};function IM({raycaster:n,strikeRay:e,getWeapon:t,setWeapon:i,cancelEngineReload:r,fp:s,now:a,getSuperCharge:o,setSuperChargeValue:l,episode:u,moment:c,pitchLimit:h}){const d=(v,m,p)=>v<m?m:v>p?p:v;let f=0,_=!1;return{strikeRaycast(v,m,p){const x=n.far;n.set(v,m),n.far=p;const M=e(n);return n.far=x,M},fillMagazine(){let v=r(t());const m=Math.min(v.magazine-v.loaded,v.reserve);v={...v,loaded:v.loaded+m,reserve:v.reserve===1/0?1/0:v.reserve-m},i(v),s.reloading&&s.cutReload(a())},setSuperCharge(v){const m=o()>=1,p=d(v,0,1);l(p),!m&&p>=1&&u.fire("flag","super-ready")},notePitch(v){c.active&&!_&&(f=v),_=c.active},pitchWindow(){if(!c.active)return[-h,h];const[v,m]=c.pitchLimits;return[Math.min(v,f),Math.max(m,f)]}}}const DM={cloth:"#8a1c1c",clothDark:"#5e1414",armour:"#3a3b40",armour2:"#4a4c52",suit:"#26262a",face:"#161618",metal:"#2a2c30",cap:"#3b2a20",rust:"#7a4a2a",bone:"#d6ccb4",mantle:"#4a3526",glowEye:"#8ec8f2",glowArc:"#9fd8ff",shell:"#261b3a",rim:"#3a2d58",shell2:"#1a1428",bezel:"#3b3550",lens:"#1a1238",glowViolet:"#b36bff",hull:"#8a2e22",under:"#4d1a14",gun:"#2a2624",glowShank:"#cfe8ff",glowExhaust:"#ff9a3c"};function Vo(n){const e={},t=[],i=(D,g,S,R,L,F,N,U,Y=0,G=0,se=0)=>t.push([D,g,S,R,L,F,N,U,Y,G,se]),r=n.leg,s=1.25,a=1.05,o=-.55,l=-.55+s,u=-.55+s-a,c=.06+r.thigh*Math.cos(o)+r.shin*Math.cos(l)+r.foot*Math.cos(u),[h,d,f]=n.pelvis;e.pelvis={at:[0,c,0]},i("pelvis",h,d,f,0,0,0,"suit");for(const D of[-1,1]){const g=D<0?"L":"R";e["thigh"+g]={parent:"pelvis",at:[D*n.hipX,-.03,0],rot:[o,0,0]},e["shin"+g]={parent:"thigh"+g,at:[0,-r.thigh,0],rot:[s,0,0]},e["foot"+g]={parent:"shin"+g,at:[0,-r.shin,0],rot:[-a,0,0]},i("thigh"+g,r.w*1.3,r.thigh+.04,r.w*1.45,0,-r.thigh/2,0,"suit"),i("shin"+g,r.w,r.shin+.03,r.w*1.05,0,-r.shin/2,0,"armour"),i("foot"+g,r.w*.85,r.foot,r.w*.85,0,-r.foot/2,0,"suit"),i("foot"+g,r.w*1.3,.05,r.w*3,0,-r.foot,r.w*.9,"armour2",-u,0,0)}const[_,v,m]=n.chest;e.chest={parent:"pelvis",at:[0,d/2+.03,0],rot:[n.hunch,0,0]},i("chest",_,v,m,0,v/2,0,"suit"),i("chest",_*1.1,v*.44,m*1.08,0,v*.74,.01,"armour"),n.rust&&i("chest",_*.42,v*.26,.03,_*.14,v*.4,m/2+.02,"rust"),i("chest",.14,.1,.13,0,v+.03,.05,"suit");const[p,x,M]=n.head;e.head={parent:"chest",at:[0,v+.07,.08],rot:[-n.hunch*.85,0,0]},i("head",p,x,M,0,x/2,0,"armour"),i("head",p*.84,x*.52,.03,0,x*.58,M/2+.012,"face");const E=n.eye;for(const D of[-1,1])for(const g of[-1,1])i("head",E,E,.02,D*E*.95,x*.6+g*E*.9,M/2+.03,"glowEye");i("head",p*.42,x*.3,M*.36,0,x*.17,M/2+M*.13,"armour2");const P=n.horn;for(const D of[-1,1])i("head",P,.05,.055,D*(p/2+P/2-.02),x*.62,-M*.1,"armour2",0,D*.35,D*.18),i("head",P*.75,.045,.05,D*(p/2+P*.95),x*.62+P*.3,-M*.25,"armour2",0,D*.7,D*.9);if(n.hooks)for(const D of[-1,1])i("head",.05,.07,.05,D*p*.2,x+.035,-M*.1,"armour2");if(n.crownStubs)for(const D of[-1,1])i("head",.045,.14,.045,D*p*.34,x+.06,-M*.22,"bone",-.35,0,D*-.2);const T=n.arm.upper,y=n.arm.fore,A=n.arm.t;for(const D of[-1,1]){const g=D<0?"L":"R";e["arm"+g]={parent:"chest",at:[D*(_/2+A/2),v*.86,0],rot:[-n.hunch+n.armFwd,0,D*.1]},e["fore"+g]={parent:"arm"+g,at:[0,-T,0],rot:[-n.elbow,0,0]},i("arm"+g,A,T+.03,A,0,-T/2,0,"suit"),i("arm"+g,A*1.55,.11,A*1.55,0,-.03,0,"armour"),i("fore"+g,A*1.05,y,A*1.12,0,-y/2,0,"armour")}if(n.lower){const D=T*.7,g=y*.7,S=A*.62;for(const R of[-1,1]){const L=R<0?"L":"R";e["arm2"+L]={parent:"chest",at:[R*(_/2+S/2-.01),v*.34,.03],rot:[-n.hunch+n.lower.fwd,0,R*.3]},e["fore2"+L]={parent:"arm2"+L,at:[0,-D,0],rot:[-n.lower.elbow,0,0]},i("arm2"+L,S,D+.02,S,0,-D/2,0,"suit"),i("fore2"+L,S*1.05,g,S*1.12,0,-g/2,0,"armour"),n.lowerBlades&&(i("fore2"+L,.06,.07,.06,0,-g-.02,0,"metal"),i("fore2"+L,.035,.62,.07,0,-g-.36,0,"glowArc"))}}if(n.caps)for(const D of[-1,1])i("chest",.1,.1,.1,D*(_/2+.035),v*.36,.02,"cap",0,0,D*.6);if(n.pauldron){const[D,g,S]=n.pauldron;for(const R of[-1,1])i("chest",D,g,S,R*(_/2+D*.28),v*.96,0,"armour2",0,0,-R*.28),n.trim&&i("chest",D*1.04,.035,S*1.04,R*(_/2+D*.3),v*.96+g/2,0,"bone",0,0,-R*.28)}if(n.trim&&i("chest",_*.9,.04,.03,0,v*.55,m/2+.035,"bone"),n.pack&&i("chest",.28,.34,.15,0,v*.5,-m/2-.075,"armour2"),n.mantle&&i("chest",_*1.2,.13,m*1.25,0,v+.01,-.02,"mantle"),n.cowl&&(i("head",p+.05,x*.85,.05,0,x*.45,-M/2-.02,"cloth"),i("pelvis",h*.72,.36,.025,0,-.21,f/2+.02,"cloth"),i("pelvis",h*.8,.28,.025,0,-.17,-f/2-.02,"clothDark")),n.cape){const D=n.cape;e.cape={parent:"chest",at:[0,v*D.top,-m/2-.045-(n.pack?.15:0)],rot:[-n.hunch+.06,0,0]},i("cape",D.w,D.len,.03,0,-D.len/2,0,"cloth");const g=D.hem,S=D.w/(g*2);for(let R=0;R<g;R++)i("cape",S,.07+R%2*.07,.028,-D.w/2+S*(2*R+1),-D.len-.035-R%2*.035,0,"clothDark")}if(n.banner&&(e.banner={parent:"chest",at:[.12,v*.9,-m/2-.26],rot:[-n.hunch,0,0]},i("banner",.05,1.05,.05,0,.02,0,"metal"),i("banner",.46,.55,.03,.25,.24,0,"cloth"),i("banner",.46,.07,.035,.25,.04,0,"bone")),n.weapon==="pistol")i("foreR",.065,.2,.1,0,-y-.08,.02,"metal"),i("foreR",.035,.03,.035,0,-y-.19,.02,"glowArc"),i("foreL",.05,.06,.05,0,-y-.02,0,"metal"),i("foreL",.028,.28,.055,0,-y-.19,0,"glowArc");else if(n.weapon==="wire")i("foreR",.1,.32,.13,.04,-y+.06,.02,"armour2"),i("foreR",.07,1.36,.1,.04,-y-.5,.02,"metal"),i("foreR",.03,.26,.035,.04,-y-.42,.08,"glowArc");else if(n.weapon==="shock"){i("foreR",.11,.95,.15,.05,-y-.28,0,"metal");for(const D of[-1,1])i("foreR",.02,.62,.02,.05+D*.05,-y-.3,.085,"glowArc")}return{bones:e,parts:t}}function UM(){const e={core:{at:[0,2.05,0]},eye:{parent:"core",at:[0,0,.621]}},t=[],i=(o,...l)=>t.push([o,...l]);i("core",1.15,1.15*.72,1.15*.72,0,0,0,"shell"),i("core",1.15*.72,1.15,1.15*.72,0,0,0,"shell"),i("core",1.15*.72,1.15*.72,1.15,0,0,0,"shell"),i("core",1.15*.86,1.15*.86,1.15*.6,0,0,0,"rim",0,0,Math.PI/4),i("core",1.15*.62,1.15*.62,.06,0,0,1.15/2+.02,"shell2");const r=1.15*.3,s=1.15*.05,a=1.15/2+.06;return i("core",r,s,.04,0,r/2-s/2,a,"glowViolet"),i("core",r,s,.04,0,-r/2+s/2,a,"glowViolet"),i("core",s,r,.04,-r/2+s/2,0,a,"glowViolet"),i("core",s,r,.04,r/2-s/2,0,a,"glowViolet"),i("core",r-s*2,r-s*2,.03,0,0,a-.012,"lens"),i("core",1.15*.26,.05,.06,-1.15*.13,1.15*.24,a-.005,"bezel",0,0,.35),i("core",.05,1.15*.28,.06,1.15*.25,-1.15*.02,a-.005,"bezel"),i("core",1.15*.24,.05,.06,-1.15*.05,-1.15*.24,a-.005,"bezel",0,0,-.2),{bones:e,parts:t}}function NM(){const n={hull:{at:[0,1.9,0]}},e=[],t=(...i)=>e.push(["hull",...i]);t(.9,.5,.75,0,0,0,"hull"),t(.8,.12,.66,0,-.29,0,"under"),t(.56,.3,.04,0,.02,.39,"face"),t(.1,.1,.03,0,.1,.415,"glowShank");for(const i of[-1,1])t(.065,.065,.03,i*.14,-.06,.415,"glowShank"),t(.36,.26,.42,i*.62,.16,-.02,"hull",0,0,i*.22),t(.26,.05,.26,i*.64,.31,-.02,"face",0,0,i*.22),t(.2,.04,.2,i*.6,0,-.02,"glowExhaust"),t(.05,.8,.08,i*.3,-.62,-.22,"under",.45,0,i*.35);return t(.12,.12,.46,0,-.38,.22,"gun"),t(.06,.06,.04,0,-.38,.47,"glowArc"),{bones:n,parts:e}}const fh={hunch:.18,leg:{thigh:.55,shin:.62,foot:.4,w:.12},hipX:.16,pelvis:[.44,.22,.3],chest:[.66,.6,.4],head:[.32,.3,.36],eye:.036,horn:.32,hooks:!0,arm:{upper:.46,fore:.44,t:.11},armFwd:.35,elbow:1.9,lower:{fwd:.55,elbow:1.2},pauldron:[.3,.16,.36],pack:!0,cape:{w:.78,len:1.2,top:.98,hem:4},weapon:"shock"},ai=n=>n.userData.rest,Wo=(n,e,t,i,r)=>{n&&(n.rotation.x=ai(n).r.x+Math.sin(e*i+r)*t)},jr=(n,e,t={})=>({id:n,...e,palette:DM,...t}),Xo=["cape","banner"],ph={colour:"#5fb8ff",element:"arc",opacity:.22,pad:1.12,regenDelay:4,regenSeconds:1.5},FM=[{id:"dreg",name:"Dreg",faction:"fallen",rank:"minor",tier:"fodder",body:"biped",health:{max:80},crit:{bones:["head"]},noHit:Xo,ether:!0,spec:jr("dreg",Vo({hunch:.55,leg:{thigh:.34,shin:.4,foot:.27,w:.07},hipX:.1,pelvis:[.26,.16,.2],chest:[.36,.42,.26],head:[.2,.19,.28],eye:.028,horn:.14,arm:{upper:.3,fore:.3,t:.06},armFwd:.2,elbow:1.35,caps:!0,cowl:!0,rust:!0,weapon:"pistol"})),idle:(n,e,t)=>{const i=Math.floor(n*1.3+t.phase*3);e.head.rotation.y=ai(e.head).r.y+Math.sin(i*12.9898)*.55,e.pelvis.position.y=ai(e.pelvis).p.y+Math.sin(n*6+t.phase)*.012}},{id:"vandal",name:"Vandal",faction:"fallen",rank:"minor",tier:"skirmisher",body:"biped",health:{max:150},crit:{bones:["head"]},noHit:Xo,ether:!0,spec:jr("vandal",Vo({hunch:.35,leg:{thigh:.45,shin:.55,foot:.36,w:.085},hipX:.12,pelvis:[.32,.18,.24],chest:[.46,.5,.3],head:[.26,.24,.32],eye:.032,horn:.24,hooks:!0,arm:{upper:.38,fore:.36,t:.075},armFwd:.3,elbow:1.85,lower:{fwd:.15,elbow:.55},cape:{w:.42,len:.78,top:.95,hem:3},weapon:"wire"})),idle:(n,e,t)=>{e.chest.rotation.x=ai(e.chest).r.x+Math.sin(n*1.6+t.phase)*.025,Wo(e.cape,n,.05,1.3,t.phase)}},{id:"captain",name:"Captain",faction:"fallen",rank:"elite",tier:"heavy",body:"biped",health:{max:320},shield:{...ph,amount:160},crit:{bones:["head"]},noHit:Xo,ether:!0,spec:jr("captain",Vo(fh)),idle:(n,e,t)=>{e.head.rotation.z=ai(e.head).r.z+Math.sin(n*.5+t.phase)*.08,Wo(e.cape,n,.035,.9,t.phase)}},{id:"boss",name:"Boss Captain",faction:"fallen",rank:"boss",tier:"heavy",body:"biped",health:{max:1100},shield:{...ph,amount:400},crit:{bones:["head"]},noHit:Xo,ether:!0,spec:jr("boss",Vo({...fh,horn:.36,crownStubs:!0,trim:!0,mantle:!0,banner:!0,lowerBlades:!0,lower:{fwd:.55,elbow:1.75},cape:{w:.8,len:1.5,top:.98,hem:5}}),{scale:1.2}),idle:(n,e,t)=>{e.head.rotation.z=ai(e.head).r.z+Math.sin(n*.45+t.phase)*.07,Wo(e.cape,n,.03,.8,t.phase),Wo(e.banner,n,.04,1.1,t.phase+1)}},{id:"servitor",name:"Servitor",faction:"fallen",rank:"elite",tier:"heavy",body:"servitor",health:{max:500},crit:{keys:["glowViolet","lens"]},aura:{bone:"core",at:[0,0,0],r:.95,colour:"#b08cff",opacity:.12},spec:jr("servitor",UM()),idle:(n,e,t)=>{e.core.position.y=ai(e.core).p.y+Math.sin(n*Math.PI+t.phase)*.1,e.core.rotation.z=ai(e.core).r.z+Math.sin(n*.35+t.phase)*.12}},{id:"shank",name:"Shank",faction:"fallen",rank:"minor",tier:"skirmisher",body:"shank",health:{max:60},crit:null,spec:jr("shank",NM()),idle:(n,e,t)=>{e.hull.position.y=ai(e.hull).p.y+Math.sin(n*2.6+t.phase)*.05,e.hull.rotation.z=ai(e.hull).r.z+Math.sin(n*1.3+t.phase)*.06}}],mh=Math.PI/180,Jd=Math.tan(Math.PI/8),OM=Math.tan(Math.PI/6),Qd={gunmetal:"#2d3034",blued:"#252b33",iron:"#3a3d40",steel:"#7d858a",plasteel:"#a9b3b8",olive:"#5f6b4a",wood:"#6b5238",rubber:"#1f2226",leather:"#5a3e2b",cord:"#8a7a5a",cloth:"#bdb29a",brass:"#a8843c",bore:"#0d0e10",reticle:"#0d0e10",glowDot:"#ff5a36",glowBead:"#f2e6c0"},kM="#9fc4d0",wr=(n,e,t,i,r,s,a)=>[0,1,2,3].map(o=>[n,2*e,2*e*Jd,t,i,r,s,a,0,0,o*Math.PI/4]),gh=(n,e,t,i,r,s,a)=>[0,1,2].map(o=>[n,2*e*OM,2*e,t,i,r,s,a,0,0,o*Math.PI/3]);function qo(n,e,t,i,r,s,a,o){const l=[],u=e+t/2,c=2*(e+t)*Jd+6e-4;for(let h=0;h<8;h++){const d=h*Math.PI/4;l.push([n,c,t,i,r+Math.sin(d)*u,s+Math.cos(d)*u,a,o,0,0,-d])}return l}const bi=(n,e,t,i)=>({bone:n,at:e,fingers:t,back:i}),ks=(n,e)=>({bone:n,at:e}),BM={body:{at:[0,0,0]},mag:{parent:"body",at:[0,-.004,-.105]},bolt:{parent:"body",at:[.03,.052,-.03]}},zM=[["body",.056,.07,.26,0,.045,-.055,"gunmetal"],["body",.058,.012,.2,0,.086,-.07,"olive"],["body",.024,.008,.11,0,.096,-.03,"iron"],["body",.044,.024,.13,0,0,-.01,"gunmetal"],["body",.052,.054,.18,0,.04,-.275,"iron"],["body",.056,.058,.016,0,.04,-.22,"cord"],["body",.056,.058,.016,0,.04,-.275,"cord"],["body",.056,.058,.016,0,.04,-.33,"cord"],...wr("body",.017,.12,0,.047,-.425,"blued"),...wr("body",.02,.01,0,.047,-.395,"steel"),...wr("body",.02,.01,0,.047,-.455,"steel"),["body",.018,.018,.045,0,.047,-.5075,"iron"],["body",.024,.024,.012,0,.047,-.536,"steel"],["body",.05,.02,.07,0,0,-.105,"gunmetal"],["body",.012,.008,.06,0,-.028,-.04,"iron"],["body",.012,.03,.008,0,-.014,-.068,"iron"],["body",.006,.022,.008,0,-.008,-.035,"steel"],["body",.04,.105,.048,0,-.048,.028,"rubber",-.3,0,0],["body",.04,.068,.15,0,.028,.15,"wood"],["body",.044,.088,.018,0,.022,.234,"leather"],["body",.042,.012,.08,0,.066,.16,"cord"],["body",.002,.004,.012,-.029,.045,-.006,"steel",.5,0,0],["body",.002,.004,.012,-.029,.045,-.014,"steel",-.5,0,0],["body",.03,.012,.05,0,.106,-.01,"iron"],["body",.004,.034,.012,-.016,.129,-.03,"iron"],["body",.004,.034,.012,.016,.129,-.03,"iron"],["body",.036,.004,.012,0,.148,-.03,"iron"],["body",.038,.008,.014,0,.115,-.03,"cloth"],["body",.028,.028,.002,0,.13,-.03,"glass"],["body",.0012,.0012,8e-4,0,.13,-.0315,"glowDot"],["bolt",.006,.018,.03,0,0,0,"steel"],["mag",.034,.125,.06,0,-.062,.004,"gunmetal",.1,0,0],["mag",.04,.012,.068,0,-.128,-.003,"steel",.1,0,0],["mag",.036,.02,.062,0,-.03,.002,"olive",.1,0,0]],HM={frame:{at:[0,0,0]},crane:{parent:"frame",at:[-.017,.022,-.02]},cyl:{parent:"crane",at:[.017,.022,0]},block:{parent:"cyl",at:[0,0,.03]},hammer:{parent:"frame",at:[0,.052,.022]}},GM=[["frame",.034,.04,.24,0,.058,-.172,"blued"],["frame",.028,.03,.13,0,.023,-.227,"blued"],["frame",.04,.074,.012,0,.042,-.15,"cord"],["frame",.036,.004,.15,0,.08,-.18,"steel"],["frame",.002,.022,.11,.018,.056,-.1,"plasteel"],["frame",.002,.022,.11,-.018,.056,-.1,"plasteel"],["frame",.012,.012,.003,0,.058,-.2935,"bore"],["frame",.036,.02,.08,0,.006,-.012,"blued"],["frame",.03,.01,.064,0,.073,-.02,"blued"],["frame",.04,.06,.012,0,.04,.018,"blued"],["frame",.024,.012,.02,0,.082,.012,"iron"],["frame",.009,.009,.006,-.0075,.0925,.008,"steel"],["frame",.009,.009,.006,.0075,.0925,.008,"steel"],["frame",.0035,.016,.01,0,.086,-.283,"steel"],["frame",.003,.003,.003,0,.0955,-.281,"glowBead"],["frame",.01,.008,.045,0,-.026,-.028,"blued"],["frame",.01,.028,.008,0,-.012,-.05,"blued"],["frame",.006,.018,.008,0,-.008,-.02,"steel"],["frame",.03,.026,.026,0,.002,.02,"blued"],["frame",.034,.085,.042,0,-.04,.036,"wood",-.35,0,0],["frame",.04,.012,.05,0,-.083,.052,"iron",-.35,0,0],["frame",.004,.01,.014,-.021,.048,.012,"brass"],...gh("cyl",.022,.064,0,0,0,"iron"),["cyl",.006,.004,.058,.0235*Math.cos(Math.PI/6),.0235*Math.sin(Math.PI/6),0,"brass",0,0,-Math.PI/3],["cyl",.008,.008,.05,0,0,-.057,"steel"],["crane",.01,.018,.01,.008,.01,-.056,"blued"],...gh("block",.02,.006,0,0,.002,"brass"),["hammer",.012,.028,.012,0,.012,.004,"blued"],["hammer",.014,.008,.018,0,.026,.012,"steel"]],On=.124,B0=.15,VM={body:{at:[0,0,0]},mag:{parent:"body",at:[0,-.004,.095]}},WM=[["body",.058,.08,.5,0,.045,.05,"blued"],["body",.062,.028,.44,0,.072,.04,"plasteel"],["body",.064,.04,.15,0,.022,.2,"plasteel"],["body",.064,.1,.02,0,.035,.31,"rubber"],["body",.066,.02,.09,0,.082,.23,"cloth"],["body",.05,.05,.12,0,.052,-.26,"iron"],...wr("body",.02,.26,0,.004,-.25,"blued"),...wr("body",.023,.028,0,.004,-.18,"cloth"),...wr("body",.023,.028,0,.004,-.32,"cloth"),["body",.018,.018,.07,0,.055,-.355,"iron"],["body",.034,.03,.05,0,.055,-.415,"iron"],["body",.036,.004,.008,0,.049,-.405,"bore"],["body",.036,.004,.008,0,.061,-.405,"bore"],["body",.036,.004,.008,0,.049,-.425,"bore"],["body",.036,.004,.008,0,.061,-.425,"bore"],["body",.036,.092,.046,0,-.044,.012,"rubber",-.3,0,0],["body",.01,.008,.07,0,-.024,-.036,"iron"],["body",.01,.026,.008,0,-.01,-.068,"iron"],["body",.006,.02,.008,0,-.008,-.03,"steel"],["body",.046,.016,.072,0,-.002,.095,"blued"],["body",.004,.02,.045,.031,.05,.13,"bore"],["body",.018,.008,.012,0,.09,.118,"iron"],["body",.03,.006,.01,0,.089,.098,"cord"],...qo("body",.025,.004,.006,0,On,B0+.003,"rubber"),...qo("body",.024,.005,.02,0,On,B0-.01,"blued"),...qo("body",.026,.004,.025,0,On,.1175,"iron"),...qo("body",.03,.006,.02,0,On,.095,"blued"),["body",4e-4,.012,4e-4,0,On-.01,.088,"reticle"],["body",.016,4e-4,4e-4,-.012,On,.088,"reticle"],["body",.016,4e-4,4e-4,.012,On,.088,"reticle"],["body",8e-4,8e-4,4e-4,0,On,.0877,"glowDot"],["body",.058,.058,.001,0,On,.0865,"glass"],...wr("body",.0302,.001,0,On,.085,"mask"),["mag",.03,.078,.058,0,-.04,0,"iron"],["mag",.036,.01,.064,0,-.083,0,"steel"],["mag",.032,.018,.06,0,-.016,0,"plasteel"]],ya=[{id:"auto",label:"Auto rifle",damage:21,precision:1.5,ammoType:"primary",stats:{magazine:30,rpm:600,reserve:1/0,auto:!0},spec:{id:"auto",bones:BM,parts:zM},sight:{kind:"reflex",rear:[0,.13,.012],front:[0,.13,-.0315],eyeRelief:.11},sockets:{muzzle:ks("body",[0,.047,-.542]),port:ks("body",[.03,.052,-.03]),rightGrip:bi("body",[.034,-.02,.093],[0,-.29,-.96],[1,0,0]),leftHold:bi("body",[-.056,-.004,-.278],[1,0,0],[0,-1,0]),leftMag:bi("mag",[0,-.15,.047],[0,0,-1],[0,-1,0])},hip:{at:[.17,-.165,-.42],rot:[0,-2,0]},zoom:1.6,adsTime:.25,readyTime:.31,stowTime:.28,adsSlide:.05,casings:!0,recoil:{aim:{pitch:.26,direction:72,climbCap:3.5,hold:.12,halflife:.1},kick:{rise:[1.2,.35],back:[6,1],roll:[.8,.15],tp:.028},flash:.09},reload:{clip:1.9,seat:.55,gun:[[0,0,0,0,0,0,0],[.12,-30,20,30,6,0,-28],[.64,-30,20,30,6,0,-28],[.82,-15,10,15,3,0,-14],[1,0,0,0,0,0,0]],left:[[0,"leftHold",.6],[.06,"leftHold",.6],[.16,"leftMag",.9],[.3,"offLeft",.9],[.36,"offLeft",.9],[.48,"belowMag",.9],[.55,"leftMag",.9],[.6,"leftMag",.3],[.8,"leftHold",.6]],mag:[[0,0],[.16,1],[.55,0]],events:[[.16,"grab"],[.55,"seat"],[.6,"slap"],[1,"settle"]]}},{id:"hand",label:"Hand cannon",damage:55,precision:1.5,ammoType:"special",reserveCap:24,stats:{magazine:8,rpm:140,reserve:12,auto:!1},spec:{id:"hand",bones:HM,parts:GM},sight:{kind:"iron",rear:[0,.0955,.008],front:[0,.0955,-.281],eyeRelief:.25},sockets:{muzzle:ks("frame",[0,.058,-.295]),rightGrip:bi("frame",[.034,-.011,.097],[0,-.34,-.94],[1,0,0]),cylFront:bi("cyl",[0,.045,-.06],[0,0,1],[0,1,0]),leftBlock:bi("block",[0,.05,.024],[0,-1,0],[0,0,1])},oneHanded:!0,hip:{at:[.15,-.14,-.38],rot:[1,-3,0]},zoom:1.4,adsTime:.21,readyTime:.26,stowTime:.29,adsSlide:.06,casings:!1,recoil:{aim:{pitch:1.8,direction:85,hold:.06,halflife:.05},kick:{rise:[6,2],back:[22,2],roll:[1.5,.3],tp:.045},flash:.14},reload:{clip:1.85,seat:.8,gun:[[0,0,0,0,0,0,0],[.14,20,20,0,24,0,-15],[.35,10,25,40,38,-5,-15],[.62,10,25,40,38,-5,-15],[.69,-100,20,40,10,0,-80],[.9,-100,20,40,10,0,-80],[.97,0,0,0,6,0,0],[1,0,0,0,0,0,0]],left:[[0,"offLeft",.5],[.18,"offLeft",.5],[.33,"cylFront",.4],[.52,"cylFront",.4],[.58,"offLeft",.8],[.66,"offLeft",.8],[.75,"leftBlock",.8],[.8,"leftBlock",.8],[.9,"offLeft",.3]],crane:[[0,0],[.06,0],[.14,95],[.9,95],[.95,0]],ejector:[[0,0],[.4,0],[.46,22],[.52,0]],cylTurn:[[0,0],[.9,0],[.97,60]],block:[[0,0],[.6,1],[.8,0]],events:[[.06,"latch"],[.46,"eject"],[.6,"newBlock"],[.8,"seat"],[.95,"snap"],[1,"settle"]]}},{id:"pulse",label:"Pulse rifle",damage:15,precision:1.5,ammoType:"primary",stats:{magazine:21,rpm:900,reserve:1/0,auto:!0,burst:3},burstCycle:.4,spec:{id:"pulse",bones:VM,parts:WM},sight:{kind:"scope",rear:[0,On,B0],front:[0,On,.0877],eyeRelief:.06},sockets:{muzzle:ks("body",[0,.055,-.442]),port:ks("body",[.031,.05,.13]),rightGrip:bi("body",[.034,-.022,.078],[0,-.29,-.96],[1,0,0]),leftHold:bi("body",[-.056,-.032,-.262],[1,0,0],[0,-1,0]),leftMag:bi("mag",[0,-.104,.05],[0,0,-1],[0,-1,0])},hip:{at:[.16,-.175,-.45],rot:[0,-2,0]},zoom:2.3,adsTime:.31,readyTime:.31,stowTime:.28,adsSlide:.08,casings:!0,recoil:{aim:{pitch:.34,direction:90,hold:.03,halflife:.045},kick:{rise:[1.6,.5],back:[7,0],roll:[.6,.15],tp:.022},flash:.06},reload:{clip:1.9,seat:.58,gun:[[0,0,0,0,0,0,0],[.16,-50,30,60,8,-14,-42],[.4,-60,20,80,10,-16,-46],[.46,-50,30,60,8,-14,-42],[.68,-50,30,60,8,-14,-42],[.84,-25,15,30,4,-7,-20],[1,0,0,0,0,0,0]],left:[[0,"leftHold",.6],[.1,"leftHold",.6],[.26,"leftMag",.9],[.4,"offLeft",.9],[.44,"offLeft",.9],[.53,"belowMag",.9],[.58,"leftMag",.9],[.62,"leftMag",0],[.66,"leftMag",0],[.82,"leftHold",.6]],mag:[[0,0],[.26,1],[.58,0]],events:[[.26,"grab"],[.58,"seat"],[1,"settle"]]}}],_h={offLeft:{at:[-.16,-.62,-.3],fingers:[.3,.6,-1],back:[-1,0,0]},offRight:{at:[.2,-.62,-.28],fingers:[-.3,.6,-1],back:[1,0,0]}},XM=.05,qM=(n,e)=>2*Math.atan(Math.tan(n*mh/2)/e)/mh,vh=["glass","mask"],YM=new dn({color:kM,transparent:!0,opacity:.12,depthWrite:!1}),$M=new dn({colorWrite:!1}),xh=new I,Bs=new I,zs=new I,KM=new Ve;function z0(n,e,t=new zt){return zs.set(...n).normalize().negate(),Bs.set(...e),Bs.addScaledVector(zs,-Bs.dot(zs)).normalize(),xh.crossVectors(Bs,zs),t.setFromRotationMatrix(KM.makeBasis(xh,Bs,zs))}function jM(n,e,t){const i=new I(...n),s=new I(...e).clone().sub(i).normalize(),a=new I(0,1,0),o=a.addScaledVector(s,-a.dot(s)).normalize(),l=s.clone().negate(),u=new I().crossVectors(o,l),c=new zt().setFromRotationMatrix(new Ve().makeBasis(u,o,l)).invert(),h=new I(0,0,-t).sub(i.clone().applyQuaternion(c));return{q:c,p:h}}function ef(n,e={}){const t=n.spec,i=fo({id:t.id,bones:t.bones,parts:t.parts.filter(a=>!vh.includes(a[7])),palette:Qd},{solidMaterial:e.solidMaterial,glowMaterial:e.glowMaterial}),r=[];if(!e.icon)for(const a of vh){const o=new Map;for(const l of t.parts){if(l[7]!==a)continue;const u=new cn(l[1],l[2],l[3]);u.deleteAttribute("uv"),u.applyMatrix4(Ma(l)),o.has(l[0])||o.set(l[0],[]),o.get(l[0]).push(u)}for(const[l,u]of o){const c=new vt(u.length===1?u[0]:Tc(u,!1),a==="mask"?$M:YM);c.name=`${t.id}:${a}`,a==="mask"&&(c.renderOrder=-1),i.bones[l].add(c),r.push(c)}}const s={};for(const[a,o]of Object.entries(n.sockets??{})){const l=new Ht;l.name=`${t.id}:${a}`,l.position.set(...o.at),o.fingers&&z0(o.fingers,o.back,l.quaternion),i.bones[o.bone].add(l),s[a]=l}for(const a of[...i.meshes,...r])a.frustumCulled=!1;return i.root.updateMatrixWorld(!0),{group:i.root,rig:i,bones:i.bones,sockets:s,extras:r,weapon:n}}const H0={glove:"#3b2f27",gloveDark:"#2a221c",plate:"#595d60",plateLight:"#a9b3b8",steel:"#7d858a",bandRust:"#8a4a2b",bandCloth:"#bdb29a",knit:"#4f6660",bracer:"#5a3e2b",cord:"#8a7a5a",sleeve:"#6e6450",sleeveDark:"#4f483a",undersuit:"#2b2e31",glowElement:"#ffffff"},ZM={hand:{at:[0,0,0]},fingers:{parent:"hand",at:[.004,0,-.098]},fingersTip:{parent:"fingers",at:[0,0,-.045]},thumb:{parent:"hand",at:[-.04,-.008,-.03],rot:[0,.6,0]},thumbTip:{parent:"thumb",at:[0,0,-.045]}},JM=[["hand",.085,.032,.098,0,0,-.049,"glove"],["fingers",.08,.026,.047,0,0,-.022,"glove"],["fingersTip",.077,.024,.04,0,0,-.019,"gloveDark"],["thumb",.026,.025,.047,0,0,-.022,"glove"],["thumbTip",.023,.022,.036,0,0,-.017,"gloveDark"]],Mh={titanPlate:[["hand",.092,.014,.055,0,.022,-.062,"plate"],["hand",.07,.006,.03,0,.03,-.028,"plateLight"],["hand",.112,.102,.092,0,0,.036,"plate"],["fingers",.082,.008,.04,0,.016,-.022,"plate"]],hunterCloak:[...[-.03,-.01,.01,.03].map(n=>["hand",.016,.01,.018,n,.02,-.09,"steel"]),["hand",.094,.09,.012,0,0,.02,"bandRust"],["hand",.094,.09,.012,0,0,.036,"bandCloth"]],warlockRobe:[["hand",.098,.092,.12,0,0,.07,"bracer"],["hand",.102,.096,.01,0,0,.04,"cord"],["hand",.102,.096,.01,0,0,.1,"cord"],["hand",.004,.004,.08,0,.017,-.05,"cord"]]},QM={titanPlate:[["fingers",.07,.004,.024,0,.0215,-.016,"glowElement"]],hunterCloak:[["hand",.078,.004,.008,0,.0185,-.074,"glowElement"]],warlockRobe:[["hand",.056,.004,.06,0,-.0175,-.05,"glowElement"],["hand",.004,.0025,.06,.022,.01725,-.05,"glowElement"]]},Sl={titanPlate:{fore:[.105,.1,"plate"],upper:[.12,.115,"undersuit"]},hunterCloak:{fore:[.08,.076,"knit"],upper:[.105,.1,"undersuit"]},warlockRobe:{fore:[.115,.105,"sleeve"],upper:[.13,.12,"sleeveDark"]}},Sh={upper:.32,fore:.3},eS={right:[.26,-.58,.02],left:[-.3,-.62,0]},tS={right:[1,-1,.5],left:[-1,-1,.5]};function nS(n,e){const t=Mh[n]?n:"hunterCloak",i=[...JM,...Mh[t],...QM[t]],r=e==="left",s=Object.fromEntries(Object.entries(ZM).map(([a,o])=>[a,{...o,at:r?[-o.at[0],o.at[1],o.at[2]]:o.at,...o.rot?{rot:r?[o.rot[0],-o.rot[1],-o.rot[2]]:o.rot}:{}}]));return{id:`hand-${e}-${n}`,bones:s,parts:i.map(([a,o,l,u,c,h,d,f,_=0,v=0,m=0])=>r?[a,o,l,u,-c,h,d,f,_,-v,-m]:[a,o,l,u,c,h,d,f,_,v,m]),palette:H0}}const gt=Math.PI/180,yh={x:0,y:0,z:0,pitch:0,yaw:0,roll:0},G0=50,Yo=.6,Eh=.12,dr=.15,$o={y:-.22,z:.04,pitch:-30,roll:25},Hs={x:.004,halflife:.07},fr={yaw:2.5*gt,pitch:2*gt,roll:4*gt,x:.012},iS=1.5,rS=4.2,sS=.045,yl=.7,bh=9.8;function oS(){const n=new Map;return e=>(n.has(e)||n.set(e,new Fi({color:e,roughness:.85,metalness:0})),n.get(e))}function aS(n={}){const e=n.hipFov??70,t=new Sn;t.name="first-person";const i=new Sn,r=new Sn,s=new Sn;t.add(i),i.add(r),r.add(s);const a=new Fi({vertexColors:!0,roughness:.7,metalness:0}),o=new dn({vertexColors:!0}),l=ya.map((Q,te)=>{const ce=ef(Q,{solidMaterial:a,glowMaterial:o});ce.group.visible=te===0,s.add(ce.group);const le=jM(Q.sight.rear,Q.sight.front,Q.sight.eyeRelief);return{...ce,w:Q,aim:le,aimFwd:le.p.clone().add(new I(0,0,-Q.adsSlide)),hipP:new I(...Q.hip.at),hipQ:new zt().setFromEuler(new en(Q.hip.rot[0]*gt,Q.hip.rot[1]*gt,Q.hip.rot[2]*gt,"YXZ")),front:new I(...Q.sight.front)}}),u=oS(),c=new cn(1,1,1);let h=n.classId??"hunterCloak";const d={};function f(){var Q;for(const te of["right","left"]){const ce=d[te];ce&&(t.remove(ce.rig.root,ce.upper,ce.fore),ce.rig.dispose());const le=nS(h,te),be=po[(Q=Vn[h])==null?void 0:Q.element];be&&(le.palette={...le.palette,glowElement:be.glow});const Be=fo(le,{solidMaterial:a,glowMaterial:o});for(const rt of Be.meshes)rt.frustumCulled=!1;Be.glow&&(Be.glow.visible=!1);const ot=Sl[h]??Sl.hunterCloak,Et=new vt(c,u(H0[ot.upper[2]])),pt=new vt(c,u(H0[ot.fore[2]]));t.add(Be.root,Et,pt),d[te]={rig:Be,upper:Et,fore:pt,look:ot}}}f();const _={solidMaterial:a,glowMaterial:o};let v={};function m(){var te,ce;for(const le of Object.values(v))(te=le.group.parent)==null||te.remove(le.group),le.dispose();if(v={},!n.buildProp)return;const Q=Vn[h];if(Q)for(const le of["grenade","melee","class","super"]){const be=(ce=lh[Q[le]])==null?void 0:ce.propKind;!be||v[be]||(v[be]=n.buildProp(be,Q.element,_),d.left.rig.bones.hand.add(v[be].group))}}m();const p=new Sn,x=(Q,te=1)=>new dn({color:Q,transparent:!0,opacity:te,depthWrite:!1,blending:Js,toneMapped:!1}),M=new vt(new cn(.03,.03,.004),x(16773584)),E=new cn(.012,.004,1).translate(0,0,-.5),P=[0,1,2,3].map(Q=>{const te=new Sn;te.rotation.z=Q*Math.PI/2;const ce=new vt(E,x(16757575,.9));return ce.rotation.y=.35,te.add(ce),{pivot:te,petal:ce}});p.add(M,...P.map(Q=>Q.pivot)),p.visible=!1,s.add(p);const T=new cn(.009,.009,.024),y=new Fi({color:Qd.brass,roughness:.5,metalness:0}),A=Array.from({length:16},()=>{const Q=new vt(T,y);return Q.visible=!1,Q.frustumCulled=!1,t.add(Q),{mesh:Q,age:yl,vel:new I,spin:new I}});let D=0;const g=new uo(.023,.023,.006,6).rotateX(Math.PI/2),S={mesh:new vt(g,y),age:1,vel:new I,spin:new I};S.mesh.visible=!1,S.mesh.frustumCulled=!1,t.add(S.mesh);let R=0,L=null,F=null,N=null,U=null;const Y=new zt,G=new en(0,0,0,"YXZ"),se=new I,re={x:0,y:0,z:0,pitch:0,yaw:0,roll:0};let ie=0;const Me={p:new I,q:new zt,curl:.6,shoulder:0,cam:[0,0,0,0,0,0]};let Ce=!1,z=0,q=e;const K={pitch:0,yaw:0},Z={rise:{x:0,v:0},roll:{x:0,v:0},back:{x:0,v:0}},ge={yaw:{x:0,v:0},pitch:{x:0,v:0},roll:{x:0,v:0},x:{x:0,v:0}},Te={x:0,v:0},ke={x:0,v:0};let ze=0,qe=0,O=-1/0,kt=0,je=-1/0,Ze=0,De=0,lt=[],Ne=0;const C={speed:0,airborne:!1},b=()=>l[R],V=Q=>N?(Q-N.at)/l[N.gun].w.reload.clip:0,j=new I,ne=new zt,J=new zt,Ae=new en(0,0,0,"YXZ"),ue=new I,fe=new Ve,Ye=new Ve,oe=new I(1,1,1),he=[],Ue=new I,Fe=new I,Ee=new zt;function Ke(Q,te,ce,le,be=0){const Be=Q.w.sockets[te],ot=Q.sockets[te],Et=Q.bones[Be.bone];if(Et.parent&&Et.parent.isBone&&(Be.bone==="mag"||Be.bone==="block")){const pt=Et.userData.rest;fe.copy(Et.parent.matrixWorld),Ue.copy(pt.p),Ue.y-=be,fe.multiply(Ye.compose(Ue,Ee.setFromEuler(pt.r),oe)),fe.multiply(Ye.compose(ot.position,ot.quaternion,oe))}else ot.updateWorldMatrix(!1,!1),fe.copy(ot.matrixWorld);fe.decompose(ce,le,Fe)}function Oe(Q,te,ce,le){if(_h[te]){const be=_h[te];ce.set(...be.at),z0(be.fingers,be.back,le);return}if(te==="belowMag"){Ke(Q,"leftMag",ce,le,XM);return}Ke(Q,te,ce,le)}const dt=Q=>Q.w.oneHanded?"offLeft":"leftHold";function B(Q,te){return te>=Q.readyStart?1-oi((te-Q.readyStart)/b().w.readyTime):yr((te-Q.lowerAt)/Q.clip.down)}const me={p:new I,q:new zt};function $(Q,te,ce,le){if(te==="grip"){ce.copy(me.p),le.copy(me.q);return}const be=Qx[te];if(be){ce.set(...be.at),z0(be.fingers,be.back,le);return}Oe(Q,te,ce,le)}const ee={position:new I,quaternion:new zt};function _e(Q,te,ce,le){const be=Q.bones[te],Be=Q.sockets[ce];fe.compose(le.position,le.quaternion,oe),Ye.compose(Be.position,Be.quaternion,oe).invert(),fe.multiply(Ye),Ye.copy(be.parent.matrixWorld).invert(),Ye.multiply(fe).decompose(be.position,be.quaternion,Fe)}const ve=new I;function Je(Q,te,ce,le=0){const be=j.set(...eS[te]);le>0&&ah[te]&&be.lerp(ve.set(...ah[te]),le);const Be=Sh.upper,ot=Sh.fore,Et=ue.copy(ce).sub(be),pt=At(Et.length(),Math.abs(Be-ot)+.001,Be+ot-.001),rt=Et.normalize(),mn=new I(...tS[te]);mn.addScaledVector(rt,-mn.dot(rt)).normalize();const w=(Be*Be+pt*pt-ot*ot)/(2*Be*pt),k=Math.sqrt(Math.max(0,1-w*w)),W=be.clone().addScaledVector(rt,Be*w).addScaledVector(mn,Be*k);Kt(Q.upper,be,W,Q.look.upper,mn),Kt(Q.fore,W,ce,Q.look.fore,mn)}const Lt=new I,Wt=new I,$e=new I;function Kt(Q,te,ce,le,be){$e.copy(ce).sub(te);const Be=$e.length();$e.divideScalar(Be||1),Wt.copy(be).addScaledVector($e,-be.dot($e)).normalize(),Lt.crossVectors(Wt,$e),Q.quaternion.setFromRotationMatrix(fe.makeBasis(Lt,Wt,$e)),Q.position.copy(te).add(ce).multiplyScalar(.5),Q.scale.set(le[0],le[1],Be+.04)}function Wn(Q){const te=Q.sockets.port;if(!te)return;const ce=A[D];D=(D+1)%A.length,te.getWorldPosition(ce.mesh.position);const le=Er(kt*3.1);ce.vel.set(1.6+.4*(1+le),1.2+.3*(1-le),.3+.15*(1+le)),ce.spin.set(12*le,9,14*-le),ce.mesh.quaternion.copy(i.quaternion),ce.age=0,ce.mesh.visible=!0}const Xn={rig:t,guns:l,recoil:K,get active(){return R},get adsE(){return z},get worldFov(){return q},get magnification(){return Ln(1,b().w.zoom,z)},get swapping(){return!!L},get dipping(){return!!F},get busy(){return!!L||!!F||!!U},get acting(){return!!U},get lowered(){return ie},get actionId(){return U?U.id:null},get actionT(){return U?At((Ne-U.at)/U.seconds,0,1):0},get camOffset(){return re},get props(){return v},get reloading(){return!!N&&!N.cutAt},get classId(){return h},setAim(Q){Ce=!!Q},setClass(Q){Q===h||!Sl[Q]||(h=Q,U=null,f(),m(),Xn.update(0,Ne,C))},requestSwap(Q,te){if(!l[Q])return!1;if(L){if(L.phase==="stow")return L.to=Q,!0;if(Q===R)return!1;const ce=At((te-L.at)/b().w.readyTime,0,1),le=1-oi(ce);return L={phase:"stow",at:te-Math.sqrt(le)*b().w.stowTime,to:Q},!0}return Q===R?!1:(Xn.cutReload(te),L={phase:"stow",at:te,to:Q},!0)},startReload(Q){N={at:Q,gun:R,lastT:0,cutAt:null},lt=[]},cutReload(Q){N&&N.cutAt===null&&(N.cutAt=Q)},dip(Q){Xn.cutReload(Q);let te=0;if(F){const ce=(Q-F.at)/dr;te=ce<1?yr(ce):1-oi((Q-F.at-dr)/b().w.readyTime)}F={at:Q-Math.sqrt(te)*dr}},act(Q,te,ce,le={}){const be=lh[Q];if(!be||!(ce>0))return!1;Xn.cutReload(te);let Be=0;if(F){const Et=(te-F.at)/dr;Be=Et<1?yr(Et):1-oi((te-F.at-dr)/b().w.readyTime)}U&&(Be=Math.max(Be,B(U,te)));const ot=U?{p:Me.p.clone(),q:Me.q.clone(),curl:Me.curl,shoulder:Me.shoulder,cam:Me.cam.slice()}:null;return F=null,U={id:Q,clip:be,at:te,seconds:ce,charged:!!le.charged,from:ot,lowerAt:te-Math.sqrt(At(Be,0,1))*be.down,readyStart:be.tp?Math.max(te+be.down,te+ce-b().w.readyTime):te+be.ready*ce},!0},onShot(Q){const te=b(),ce=te.w.recoil,le=Ln(1,te.w.zoom,z);kt++,O=Q,je=Q,te.w.id==="hand"&&Ze++;const be=ce.aim.pitch*gt/le,Be=K.pitch;K.pitch=ce.aim.climbCap?Math.max(Be,Math.min(Be+be,ce.aim.climbCap*gt/le)):Be+be;const ot=ce.aim.direction,Et=Math.sin((ot+5)*Math.PI/10)*(100-ot)/100,pt=(100-ot)/100;K.yaw+=-(Et+Er(kt)*pt)*.5*be;const rt=ce.kick.tp;Z.rise.v+=Os(Ln(ce.kick.rise[0],ce.kick.rise[1],z)*gt,rt),Z.back.v+=Os(Ln(ce.kick.back[0],ce.kick.back[1],z)/1e3,rt),Z.roll.v+=Os(Ln(ce.kick.roll[0],ce.kick.roll[1],z)*gt*Er(kt+17),rt),p.userData.at=Q,p.userData.n=kt,te.w.casings&&Wn(te)},update(Q,te,ce={}){const le=Math.max(0,Q);Ne=te,C.speed=ce.speed??0,C.airborne=!!ce.airborne;let be=0;if(L&&L.phase==="stow"){const xe=(te-L.at)/b().w.stowTime;xe>=1?(l[R].group.visible=!1,R=L.to,l[R].group.visible=!0,L={phase:"ready",at:te,to:R},Z.rise.x=Z.rise.v=Z.back.x=Z.back.v=Z.roll.x=Z.roll.v=0,be=1):be=yr(xe)}if(L&&L.phase==="ready"){const xe=(te-L.at)/b().w.readyTime;xe>=1?L=null:be=Math.max(be,1-oi(xe))}if(F){const xe=(te-F.at)/dr;if(xe<1)be=Math.max(be,yr(xe));else{const ut=(te-F.at-dr)/b().w.readyTime;ut>=1?F=null:be=Math.max(be,1-oi(ut))}}let Be=0,ot=0;if(U){const xe=U,ut=(te-xe.at)/xe.seconds;Be=At(ut,0,1),be=Math.max(be,B(xe,te)),ot=xe.from?1-oi((te-xe.at)/Eh):0,te>=xe.readyStart+b().w.readyTime&&(U=null)}ie=be;let Et=0,pt=0,rt=1;if(N){const xe=l[N.gun].w.reload;if(Et=V(te),N.gun!==R)N=null;else{Ce&&Et>=xe.seat&&Xn.cutReload(te);const ut=N.cutAt===null?1/0:(N.cutAt-N.at)/xe.clip;pt=Math.min(Et,ut,1);for(const[Pt,vo]of xe.events){if(Pt<=N.lastT||Pt>pt||lt.includes(vo))continue;lt.push(vo);const Ia={seat:[1.2,4],slap:[.4,0],settle:[.3,0],snap:[2,0],latch:[.6,0],eject:[.8,0]}[vo];if(Ia){const Ps=l[N.gun].w.recoil.kick.tp;Z.rise.v+=Os(Ia[0]*gt,Ps),Z.back.v-=Os(Ia[1]/1e3,Ps)}if(vo==="eject"){const Ps=b();Ps.bones.block.updateWorldMatrix(!0,!1),Ps.bones.block.matrixWorld.decompose(S.mesh.position,S.mesh.quaternion,ue),S.vel.set(-.4,-.6,.2),S.spin.set(4,7,2),S.age=0,S.mesh.visible=!0}}N.lastT=Math.max(N.lastT,pt),N.cutAt!==null&&(rt=1-oi((te-N.cutAt)/Eh)),(Et>=1||rt<=0)&&(xe.cylTurn&&pt>=xe.cylTurn[1][0]&&(De=(De+60)%360),N=null)}}const mn=!!N,w=b(),k=mn?w.w.reload:null,W=mn&&Et>=k.seat,X=!L&&!F&&!U&&(!mn||W||N.cutAt!==null);if(z=Ox(z,Ce&&X,le,U?Math.min(w.w.adsTime,U.clip.down):w.w.adsTime),q=qM(e,Ln(1,w.w.zoom,z)),z<Yo){const xe=z/Yo;i.position.lerpVectors(w.hipP,w.aimFwd,xe),i.quaternion.slerpQuaternions(w.hipQ,w.aim.q,xe)}else i.position.lerpVectors(w.aimFwd,w.aim.p,(z-Yo)/(1-Yo)),i.quaternion.copy(w.aim.q);let H=0,ae=0,pe=0,Se=0,we=0,Pe=0;mn&&(Bn(k.gun,pt,he),H+=he[0]/1e3*rt,ae+=he[1]/1e3*rt,pe+=he[2]/1e3*rt,Se+=he[3]*rt,we+=he[4]*rt,Pe+=he[5]*rt),be>0&&(ae+=$o.y*be,pe+=$o.z*be,Se+=$o.pitch*be,Pe+=$o.roll*be),Jn(Te,ce.airborne?1:0,.1,le),ce.landed>0&&(ke.v-=Math.min(.35,.035*ce.landed)),Jn(ke,0,rh(.07),le);const Ie=1-z;ae+=(.012*Te.x+ke.x)*Ie,Se+=-2.5*Te.x*Ie,i.position.x+=H,i.position.y+=ae,i.position.z+=pe,Ae.set(Se*gt,we*gt,Pe*gt,"YXZ"),i.quaternion.multiply(ne.setFromEuler(Ae));const Re=le>0?(ce.lookYaw??0)/le:0,st=le>0?(ce.lookPitch??0)/le:0;Jn(ge.yaw,At(-.012*Re,-fr.yaw,fr.yaw),Hs.halflife,le),Jn(ge.pitch,At(-.01*st,-fr.pitch,fr.pitch),Hs.halflife,le),Jn(ge.roll,At(-.02*Re,-fr.roll,fr.roll),Hs.halflife,le),Jn(ge.x,At(Hs.x*Re,-.012,fr.x),Hs.halflife,le);const ct=ce.speed??0;ze+=ct*le/iS,qe=pl(qe,At(ct/rS,0,1)*(ce.airborne?0:1),.08,le);const xt=1-At(ct/.5,0,1),jt=1-.9*z;r.position.set((ge.x.x+.006*Math.sin(Math.PI*ze)*qe)*Ie,(-.004*((1-Math.cos(2*Math.PI*ze))/2)*qe+.0012*Math.sin(Math.PI*.5*te)*xt)*Ie,0),r.rotation.set((ge.pitch.x+.15*gt*Math.sin(Math.PI*.5*te+.7)*xt)*jt,ge.yaw.x*jt,(ge.roll.x+.8*gt*Math.sin(Math.PI*ze)*qe)*jt,"YXZ");const et=rh(w.w.recoil.kick.tp);Jn(Z.rise,0,et,le),Jn(Z.back,0,et,le),Jn(Z.roll,0,et,le);const Le=j.copy(w.front).multiplyScalar(z);Ae.set(Z.rise.x,0,Z.roll.x,"YXZ"),s.quaternion.setFromEuler(Ae),s.position.copy(Le).sub(ue.copy(Le).applyQuaternion(s.quaternion)).add(ue.set(0,0,Z.back.x));const Dt=w.w.recoil.aim;te-O>Dt.hold&&(K.pitch=pl(K.pitch,0,Dt.halflife,le),K.yaw=pl(K.yaw,0,Dt.halflife,le));for(const xe of l)xe.rig.reset();const Ge=te-je,Bt=w.bones;if(w.w.id==="auto"&&Ge<.045&&(Bt.bolt.position.z+=.022*(Ge<.012?Ge/.012:1-(Ge-.012)/.033)),w.w.id==="hand"){Ge<.06&&(Bt.hammer.rotation.x+=.25*(Ge<.015?Ge/.015:1-(Ge-.015)/.045));const xe=Ge<.06?0:oi((Ge-.06)/.16);if(Bt.cyl.rotation.z+=((Math.max(0,Ze-1)+(Ze>0?xe:0))*60+De)*gt,mn){Bt.crane.rotation.z+=Bn(k.crane,pt,he)[0]*gt*rt;const ut=Bn(k.cylTurn,pt,he)[0];Bt.cyl.rotation.z+=(pt>=k.cylTurn[1][0]?Ln(60,ut,rt):ut)*gt,Bt.block.position.z+=Bn(k.ejector,pt,he)[0]/1e3*rt}}const ki=p.userData.at??-1/0;if(p.visible=te-ki<sS&&!L,p.visible){const xe=p.userData.n??0;p.position.copy(w.sockets.muzzle.position),p.rotation.set(0,0,(Er(xe*5.3)*.5+.5)*Math.PI*.5);const ut=(1+.15*Er(xe*2.7))*(1-.45*z);p.scale.setScalar(ut);for(const Pt of P)Pt.petal.scale.set(1,1,w.w.recoil.flash)}t.updateMatrixWorld(!0);const Ft=d.right.rig,bt=d.left.rig;Ft.reset(),bt.reset(),Ke(w,"rightGrip",Ft.root.position,Ft.root.quaternion),Cs(Ft.bones,.85);const wt=dt(w);let Zt=.6,Ir=0;if(mn){const xe=sh(k.left,pt);Oe(w,xe.from,j,ne),Oe(w,xe.to,ue,J),bt.root.position.lerpVectors(j,ue,xe.w),bt.root.quaternion.slerpQuaternions(ne,J,xe.w),ee.position.copy(bt.root.position),ee.quaternion.copy(bt.root.quaternion),Zt=xe.extra[0],rt<1&&(Oe(w,wt,j,ne),bt.root.position.lerp(j,1-rt),bt.root.quaternion.slerp(ne,1-rt),Zt=Ln(.6,Zt,rt)),Ir=qn(k.mag??k.block,pt)}else Oe(w,wt,bt.root.position,bt.root.quaternion);let Xt=0,Dr=!1,Ls=!1;const Nn=Me.cam.fill(0);if(U){const xe=U.clip;if(xe.left){me.p.copy(bt.root.position),me.q.copy(bt.root.quaternion);const ut=sh(xe.left,Be,xe.ease);$(w,ut.from,j,ne),$(w,ut.to,ue,J),bt.root.position.lerpVectors(j,ue,ut.w),bt.root.quaternion.slerpQuaternions(ne,J,ut.w),Zt=ut.extra[0],Xt=Bn(xe.shoulder,Be,he)[0],Bn(xe.cam,Be,he);for(let Pt=0;Pt<6;Pt++)Nn[Pt]=he[Pt];Dr=qn(xe.prop,Be)>0,Ls=qn(xe.glow,Be)>0&&(!xe.glowCharged||U.charged)}if(ot>0){const ut=U.from;bt.root.position.lerp(ut.p,ot),bt.root.quaternion.slerp(ut.q,ot),Zt=Ln(Zt,ut.curl,ot),Xt=Ln(Xt,ut.shoulder,ot);for(let Pt=0;Pt<6;Pt++)Nn[Pt]=Ln(Nn[Pt],ut.cam[Pt],ot)}}Me.p.copy(bt.root.position),Me.q.copy(bt.root.quaternion),Me.curl=Zt,Me.shoulder=Xt;const Ur=Rc.cameraMotion;re.x=Nn[0]/1e3*Ur,re.y=Nn[1]/1e3*Ur,re.z=Nn[2]/1e3*Ur,re.pitch=Nn[3]*gt*Ur,re.yaw=Nn[4]*gt*Ur,re.roll=Nn[5]*gt*Ur;const Nf=U==null?void 0:U.clip.propKind;for(const[xe,ut]of Object.entries(v))ut.group.visible=Dr&&xe===Nf,ut.glow&&(ut.glow.visible=xe!=="knife"||Ls);if(d.left.rig.glow&&(d.left.rig.glow.visible=Ls),Cs(bt.bones,Zt),Ft.root.updateMatrixWorld(!0),bt.root.updateMatrixWorld(!0),Je(d.right,"right",Ft.root.position),Je(d.left,"left",bt.root.position,Xt),Ir>0)for(const[xe,ut]of[["mag","leftMag"],["block","leftBlock"]]){const Pt=w.bones[xe];Pt&&(j.copy(Pt.position),ne.copy(Pt.quaternion),_e(w,xe,ut,ee),rt<1&&(Pt.position.lerpVectors(j,Pt.position,rt),Pt.quaternion.slerpQuaternions(ne,Pt.quaternion,rt)))}if(w.w.id==="hand"&&mn){const xe=pt>=.46&&pt<.6&&rt>=1;Bt.block.scale.setScalar(xe?1e-4:1)}w.group.updateMatrixWorld(!0);for(const xe of A)xe.age>=yl||(xe.age+=le,xe.vel.y-=bh*le,xe.mesh.position.addScaledVector(xe.vel,le),xe.mesh.rotation.x+=xe.spin.x*le,xe.mesh.rotation.y+=xe.spin.y*le,xe.mesh.rotation.z+=xe.spin.z*le,xe.age>=yl&&(xe.mesh.visible=!1));return S.age<1&&(S.age+=le,S.vel.y-=bh*le,S.mesh.position.addScaledVector(S.vel,le),S.mesh.rotation.x+=S.spin.x*le,S.mesh.rotation.y+=S.spin.y*le,S.age>=1&&(S.mesh.visible=!1)),Xn},muzzleWorld(Q,te=new I){b().sockets.muzzle.getWorldPosition(te);const le=Math.tan(Q.fov*gt/2)/Math.tan(G0*gt/2);return te.x*=le,te.y*=le,te.applyQuaternion(Q.quaternion).add(Q.position)},leftHandWorld(Q,te=new I){const ce=d.left.rig.bones.hand;ce.updateWorldMatrix(!0,!1),te.set(...Jx).applyMatrix4(ce.matrixWorld);const le=Math.tan(Q.fov*gt/2)/Math.tan(G0*gt/2);return te.x*=le,te.y*=le,Y.setFromEuler(G.set(re.pitch,re.yaw,re.roll,"YXZ")),te.applyQuaternion(Y).add(se.set(re.x,re.y,re.z)),te.applyQuaternion(Q.quaternion).add(Q.position)}};function Cs(Q,te){Q.fingers.rotation.x-=te*1.2,Q.fingersTip.rotation.x-=te*1,Q.thumb.rotation.x-=te*.4}function qn(Q,te){if(!Q)return 0;let ce=Q[0][1];for(const le of Q)le[0]<=te&&(ce=le[1]);return ce}for(const Q of Object.values(d))Q.rig.reset();return Xn.update(0,0,{}),Xn}const tf=.1,wh=1e-9,Th=n=>n.burstLeft?{...n,burstLeft:0}:n;function lS(){let n=-1/0,e=-1/0,t=!1;return{pull(i,r,s,{held:a=!1,pressed:o=!1,blocked:l=!1}={}){if(o&&(n=s),a||(t=!1),l)return t=!1,{state:Th(i),shots:[],events:[]};const u=s-n<=tf;let c=a,h;if(r.burstCycle>0){const _=e+r.burstCycle;h=(a||u)&&s+wh>=_,!h&&i.burstLeft>0&&s<_&&(c=!0)}else h=u&&s+wh>=i.nextShotAt;const d=Tx(i,s,{held:c,pressed:h});let f=d.state;if(d.shots.length&&(n=-1/0,r.burstCycle>0&&h)){const _=e+r.burstCycle;e=t&&s-_<i.maxCatchUp?_:d.shots[0].at,t=a}return d.events.some(_=>_.type==="emptied")&&(f=Th(f)),{state:f,shots:d.shots,events:d.events}}}}const cS={iron:"#3a3d40",iron2:"#595d60",plasteel:"#a9b3b8",gunmetal:"#2d3034",leather:"#5a3e2b",gambeson:"#bdb29a",linen:"#9b8f78",rust:"#8a4a2b",tarp:"#4f6660",wood:"#6b5238",face:"#151719",steel:"#7d858a",oxblood:"#7a1e1e",oxbloodDark:"#4e1414",slate:"#3f5a78",slateDark:"#2a3d52",teal:"#1f5e5a",tealDark:"#143f3c",pikeHull:"#3b3a3f",ghostShell:"#cfd6da",glowArc:"#6fd3ff",glowSolar:"#ff8a2a",glowVoid:"#a76bff",glowRed:"#ff4a3a",glowGhost:"#e8f6ff"};function Xs(n={}){const e=n.scale??1,t=n.bulk??1,i=n.keys??{},r=(d,f)=>i[d]??f,s={},a=[],o=(d,f,_,v,m,p,x,M,E=0,P=0,T=0)=>a.push([d,f*e,_*e,v*e,m*e,p*e,x*e,M,E,P,T]),l=(d,f,_)=>[d*e,f*e,_*e];s.pelvis={parent:n.pelvisParent,at:n.pelvisAt??l(0,.92,0)},n.pelvisParent===void 0&&delete s.pelvis.parent,o("pelvis",.36*t,.16,.23*t,0,0,0,r("legs","linen"));const u=n.seated?1.45:0;for(const d of[-1,1]){const f=d<0?"L":"R";s["thigh"+f]={parent:"pelvis",at:l(d*.1*t,-.04,0),rot:[-u,0,d*(n.stance??0)]},s["shin"+f]={parent:"thigh"+f,at:l(0,-.42,0),rot:[u,0,0]},o("thigh"+f,.17*t,.44,.19*t,0,-.21,0,r("legs","linen")),o("shin"+f,.15*t,.42,.17*t,0,-.21,0,r("shins",r("legs","linen"))),o("shin"+f,.18*t,.08,.3*t,0,-.42,.05,r("boots","leather")),n.greaves&&o("shin"+f,.17*t,.26,.05,0,-.24,.1*t,r("greaves","iron2"))}s.chest={parent:"pelvis",at:l(0,.06,0),rot:[n.lean??0,0,0]},o("chest",.44*t,.52,.25*t,0,.26,0,r("torso","linen")),o("chest",.13,.08,.13,0,.56,0,r("neck","leather")),n.plate&&o("chest",.5*t,.32,.3*t,0,.34,.01,r("plate","iron")),n.plate2&&o("chest",.42*t,.12,.28*t,0,.1,.01,r("plate2","iron")),s.head={parent:"chest",at:l(0,.58,0)};const c=n.helm??"great";if(c==="great"?(o("head",.26,.28,.28,0,.14,0,r("helm","iron")),o("head",.19,.03,.02,0,.16,.145,r("visor","glowArc"))):c==="stepped"?(o("head",.24,.22,.26,0,.11,0,r("helm","iron")),o("head",.18,.1,.2,0,.27,-.01,r("helm","iron")),o("head",.2,.035,.02,0,.13,.135,r("visor","glowVoid"))):c==="hood"?(o("head",.21,.23,.23,0,.12,0,"face"),o("head",.12,.022,.02,0,.14,.125,r("visor","glowSolar")),o("head",.29,.3,.28,0,.15,-.035,r("hood","slate")),o("head",.12,.12,.14,0,.33,-.03,r("hood","slate"),-.55,0,0)):c==="wrap"&&(o("head",.22,.24,.24,0,.12,0,r("wrap","linen")),o("head",.28,.22,.28,.02,.17,-.03,r("hood","tarp")),o("head",.2,.03,.02,0,.13,.125,"face")),n.crown){const d=c==="stepped"?.32:.28,f=[[0,.13,.1],[-.1,.1,.075],[.1,.1,.075],[-.12,-.05,.06],[.12,-.05,.06]].slice(0,n.crown);for(const[_,v,m]of f)o("head",.035,m,.035,_,d+m/2,v,r("crown","iron2"))}for(const d of[-1,1]){const f=d<0?"L":"R",_=(n.arms??{})[f]??{};s["arm"+f]={parent:"chest",at:l(d*(.22*t+.06),.5,0),rot:[_.fwd??0,0,d*(_.out??.06)]},s["fore"+f]={parent:"arm"+f,at:l(0,-.32,0),rot:[-(_.elbow??.1),0,0]},o("arm"+f,.12*t,.34,.13*t,0,-.16,0,r("arms",r("torso","linen"))),o("fore"+f,.11*t,.3,.12*t,0,-.15,0,r("forearms",r("arms",r("torso","linen")))),o("fore"+f,.1,.1,.1,0,-.33,0,r("hands","leather")),n.gauntlets&&o("fore"+f,.13*t,.16,.14*t,0,-.19,0,r("gauntlets","iron"));const v=(n.pauldrons??{})[f];v&&o("arm"+f,v.size[0]*t,v.size[1],v.size[2]*t,d*.02,0,0,v.key,0,0,d*-.22),(n.glowHands??[]).includes(f)&&o("fore"+f,.14,.14,.14,0,-.34,.01,n.glowKey??"glowArc")}if(n.mantle&&(o("chest",.64*t,.12,.4*t,0,.5,-.02,n.mantle),o("chest",.54*t,.1,.33*t,0,.43,-.06,n.mantle)),n.tabard&&o("chest",.26*t,.78,.03,0,.02,.15*t,n.tabard),n.sash&&(o("chest",.08,.66,.27*t,0,.27,.005,n.sash,0,0,.7),o("chest",.46*t,.07,.27*t,0,.03,0,n.sash)),n.tarpCape&&o("chest",.5,.8,.02,.1,.12,-.16*t,n.tarpCape,.08,0,.18),n.cloak){const d=n.cloak;s.cape={parent:"chest",at:l(0,.5,-.14*t),rot:[-(n.lean??0)+.05,0,0]},o("cape",.46*t,d.len*.7,.03,0,-d.len*.35,0,d.key);for(const f of[-1,1])o("cape",.2*t,d.len*.34,.03,f*.12*t,-d.len*.86,0,d.dark??d.key)}if(n.coat){const d=n.coat;for(const f of[-1,1])o("pelvis",.19*t,d.len,.05,f*.1*t,-d.len/2+.06,.13*t,d.key),o("pelvis",.05,d.len*.95,.26*t,f*.2*t,-d.len/2+.06,0,d.dark);o("pelvis",.42*t,d.len,.05,0,-d.len/2+.06,-.13*t,d.key);for(const f of[.3,.6])o("pelvis",.43*t,.03,.055,0,-d.len*f,-.13*t,d.dark)}if(n.banner){s.banner={parent:"chest",at:l(.14*t,.35,-.2*t)},o("banner",.05,1.5,.05,0,.4,0,"wood"),o("banner",.5,.66,.03,.27,.8,0,n.banner.key);for(const[d,f,_,v,m]of n.banner.sigil)o("banner",d,f,.035,_,v,0,n.banner.mark,0,0,m)}n.trophy&&(o("chest",.05,.9,.08,.06,.28,-.21*t,"steel",0,0,.55),o("chest",.015,.7,.02,.06,.28,-.26*t,"glowArc",0,0,.55));const h=(d,f)=>f.forEach(_=>o(d,..._));return n.weapon==="slug"&&h("foreR",[[.1,.36,.14,0,-.44,.04,"gunmetal"],[.065,.5,.07,0,-.84,.04,"iron"],[.08,.2,.12,0,-.22,.05,"plasteel"],[.07,.12,.13,0,-.46,-.07,"plasteel"]]),n.weapon==="handcannon"&&h("foreR",[[.07,.26,.1,0,-.45,.03,"gunmetal"],[.1,.09,.1,0,-.39,.03,"iron2"]]),n.weapon==="longrifle"&&h("foreR",[[.06,1.05,.09,0,-.7,.03,"gunmetal"],[.05,.3,.06,0,-.5,.09,"plasteel"],[.08,.22,.11,0,-.24,.05,"wood"]]),n.weapon==="wrapped"&&h("foreR",[[.09,.8,.1,0,-.62,.03,"gunmetal"],[.08,.22,.12,0,-.22,.05,"wood"],[.11,.08,.12,0,-.58,.03,"linen"],[.11,.07,.12,0,-.84,.03,"linen"],[.07,.14,.12,0,-.48,-.08,"rust"]]),n.weapon==="short"&&h("foreR",[[.07,.34,.1,0,-.48,.03,"gunmetal"]]),n.blade&&h("foreL",[[.05,.12,.08,0,-.26,.02,"steel"],[.02,.45,.06,0,-.52,.02,n.blade]]),{bones:s,parts:a}}function El({at:n=[.5,2.1,.1],fin:e="ghostShell",size:t=1}={}){const i={ghost:{at:n}},r=[],s=(a,o,l,u,c,h,d,f=0,_=0,v=0)=>r.push(["ghost",a*t,o*t,l*t,u*t,c*t,h*t,d,f,_,v]);return s(.13,.13,.13,0,0,0,"ghostShell",.62,.78,0),s(.05,.17,.035,.11,.03,-.02,e,0,0,-.5),s(.05,.17,.035,-.11,.03,-.02,"ghostShell",0,0,.5),s(.12,.035,.08,0,-.11,-.01,"ghostShell"),s(.05,.05,.02,0,0,.125,"glowGhost"),{bones:i,parts:r}}function uS(){const n={pike:{at:[0,.72,0]}},e=[],t=(...r)=>e.push(["pike",...r]);t(.72,.3,1.3,0,0,0,"pikeHull"),t(.5,.22,.55,0,-.04,.88,"pikeHull",.22,0,0),t(.82,.46,.6,0,.08,-.85,"iron"),t(.5,.08,1,0,-.19,-.05,"iron2");for(const r of[-1,1])t(.08,.1,.75,r*.28,-.1,.95,"gunmetal"),t(.09,.05,.03,r*.16,.03,1.16,"glowRed");t(.46,.04,.46,.08,.17,.15,"plasteel",0,0,.08),t(.42,.05,.5,0,.18,-.3,"tarp"),t(.32,.26,.32,0,.44,-.85,"wood");const i=Xs({pelvisParent:"pike",pelvisAt:[0,1.02-.72,-.3],seated:!0,bulk:1.1,lean:.25,helm:"wrap",sash:"oxblood",keys:{torso:"linen",legs:"linen"},weapon:"short",arms:{R:{fwd:-.9,elbow:.5},L:{fwd:-.9,elbow:.5,out:-.1}}});return{bones:{...n,...i.bones},parts:[...e,...i.parts]}}function hS(){const n={base:{at:[0,0,0]},head:{parent:"base",at:[0,1,0]}},e=[],t=(i,...r)=>e.push([i,...r]);t("base",.55,.9,.55,0,.45,0,"iron"),t("base",.7,.08,.7,0,.92,0,"iron2"),t("head",.56,.42,.62,0,.14,0,"iron2"),t("head",.62,.05,.66,0,.37,0,"plasteel");for(const i of[-1,1])t("head",.09,.09,.75,i*.13,.12,.65,"gunmetal");return t("head",.12,.06,.03,0,.26,.325,"glowRed"),{bones:n,parts:e}}const bl=(n,e)=>({bones:{...n.bones,...e.bones},parts:[...n.parts,...e.parts]}),vr=n=>n.userData.rest,wl=(n,e,t,i,r)=>{n&&(n.rotation.x=vr(n).r.x+Math.sin(e*i+r)*t)},Zr=(n,e)=>({id:n,...e,palette:cS}),Ah={R:{fwd:-.5,elbow:1.07},L:{fwd:-.9,elbow:.6,out:-.25}},Tl=["ghost","banner"],dS=[{id:"levy",name:"Levy",faction:"warlord",rank:"minor",tier:"skirmisher",body:"human",health:{max:110},crit:{bones:["head"]},noHit:["cape"],spec:Zr("levy",Xs({scale:.97,bulk:1.12,lean:.08,helm:"wrap",sash:"oxblood",tarpCape:"tarp",keys:{torso:"linen",legs:"linen",shins:"leather"},pauldrons:{L:{size:[.26,.1,.3],key:"rust"}},weapon:"wrapped",arms:Ah})),idle:(n,e,t)=>{e.pelvis.position.y=vr(e.pelvis).p.y+Math.sin(n*1.8+t.phase)*.012,e.chest.rotation.z=vr(e.chest).r.z+Math.sin(n*.9+t.phase)*.03}},{id:"outrider",name:"Pike Outrider",faction:"warlord",rank:"minor",tier:"skirmisher",body:"pike",health:{max:260},crit:{bones:["head"]},spec:Zr("outrider",uS()),idle:(n,e,t)=>{const i=Math.max(0,Math.sin(n*.7+t.phase)-.92)*.9;e.pike.position.y=vr(e.pike).p.y+Math.sin(n*3.1+t.phase)*.03-i,e.pike.rotation.x=vr(e.pike).r.x+i*.3}},{id:"champion",name:"Lesser Warlord",faction:"warlord",rank:"elite",tier:"heavy",body:"human",health:{max:520},crit:{bones:["head"]},noHit:["cape","banner","ghost"],measureAside:Tl,ghost:{speed:1,hover:[0,1.45,.32]},spec:Zr("champion",bl(Xs({scale:1.05,helm:"hood",keys:{torso:"leather",legs:"iron",shins:"iron2",hood:"slate",visor:"glowSolar"},cloak:{len:1.15,key:"slate",dark:"slateDark"},gauntlets:!0,pauldrons:{R:{size:[.2,.1,.24],key:"slate"},L:{size:[.16,.08,.2],key:"plasteel"}},weapon:"handcannon",blade:"glowSolar",glowHands:["L"],glowKey:"glowSolar",arms:{R:{fwd:-.9,elbow:.75},L:{fwd:-.35,elbow:.9,out:.05}}}),El({at:[.5,2.05,.05],fin:"slate",size:.85}))),idle:(n,e,t)=>{wl(e.cape,n,.05,1.2,t.phase)}},{id:"warlord",name:"Warlord",faction:"warlord",rank:"boss",tier:"heavy",body:"human",health:{max:1400},crit:{bones:["head"]},noHit:["cape","banner","ghost"],measureAside:Tl,ghost:{speed:.7,hover:[0,1.6,.38]},spec:Zr("warlord",bl(Xs({scale:1.15,bulk:1.25,helm:"great",crown:5,plate:!0,plate2:!0,greaves:!0,gauntlets:!0,keys:{torso:"gambeson",legs:"leather",shins:"iron",plate:"oxblood",plate2:"iron",arms:"iron2",forearms:"iron",visor:"glowArc"},pauldrons:{L:{size:[.3,.19,.36],key:"oxblood"},R:{size:[.17,.09,.22],key:"plasteel"}},mantle:"leather",tabard:"oxblood",trophy:!0,banner:{key:"oxblood",mark:"plasteel",sigil:[[.16,.16,.27,.86,Math.PI/4],[.36,.05,.27,.6,0]]},weapon:"slug",glowHands:["L"],glowKey:"glowArc",arms:{R:{fwd:-.5,elbow:1.07},L:{fwd:-.15,elbow:.45,out:.12}}}),El({at:[.62,2.3,.1],fin:"oxblood"}))),idle:(n,e,t)=>{e.head.rotation.y=vr(e.head).r.y+Math.sin(n*.4+t.phase)*.25,wl(e.banner,n,.04,1.1,t.phase)}},{id:"rival",name:"Rival Warlord",faction:"warlord",rank:"boss",tier:"heavy",body:"human",health:{max:1200},crit:{bones:["head"]},noHit:["cape","banner","ghost"],measureAside:Tl,ghost:{speed:-.75,hover:[0,1.55,.36]},spec:Zr("rival",bl(Xs({scale:1.1,helm:"stepped",crown:3,keys:{torso:"teal",legs:"leather",arms:"teal",forearms:"iron2",helm:"iron",crown:"iron2",visor:"glowVoid"},coat:{len:.95,key:"teal",dark:"tealDark"},gauntlets:!0,pauldrons:{L:{size:[.18,.1,.24],key:"iron2"}},banner:{key:"teal",mark:"gambeson",sigil:[[.08,.4,.2,.8,0],[.08,.4,.34,.8,0]]},weapon:"longrifle",glowHands:["L","R"],glowKey:"glowVoid",arms:Ah}),El({at:[-.6,2.2,.1],fin:"teal"}))),idle:(n,e,t)=>{wl(e.banner,n,.04,1,t.phase+1)}},{id:"turret",name:"Gate Turret",faction:"warlord",rank:"minor",tier:null,body:"turret",health:{max:240},crit:{keys:["glowRed"]},faces:!1,spec:Zr("turret",hS()),idle:(n,e,t)=>{e.head.rotation.y=vr(e.head).r.y+Math.sin(n*.6+t.phase)*.7}}],fS=Object.freeze({fodder:{sight:28,band:[1.6,4],speed:3.4,sprint:1.35,reaction:[.3,.55],cooldown:1.1,attack:5,strafe:.15,lose:4,turn:4},skirmisher:{sight:38,band:[7,14],speed:2.6,sprint:1.2,reaction:[.22,.45],cooldown:1.6,attack:20,strafe:.75,lose:6,turn:3},heavy:{sight:45,band:[10,20],speed:1.7,sprint:1.1,reaction:[.4,.7],cooldown:2.4,attack:26,strafe:.25,lose:9,turn:1.6}}),Ko=.55,Zn=3,Al=1.5,Rh=.8,Rl=.6,pS=.5,Ch=.6,Lh=.35,Cl=1,mS=.45,gS=.12,_S=.9,vS=.07,Ll=Math.PI*2;let xS=0;const wi=n=>{const e=Math.max(0,Math.min(1,n));return e*e*(3-2*e)},Ri=(n,e,t)=>n+(e-n)*t,qi=n=>n.userData.rest,MS={biped(n,e){n.pelvis.position.y=qi(n.pelvis).p.y*(1-.5*e);for(const t of["L","R"])n["thigh"+t].rotation.x-=.95*e,n["shin"+t].rotation.x+=1.35*e,n["foot"+t].rotation.x-=.4*e,n["arm"+t].rotation.x+=.35*e,n["arm"+t].rotation.z+=(t==="L"?-.25:.25)*e,n["arm2"+t]&&(n["arm2"+t].rotation.x+=.3*e);n.chest.rotation.x+=.85*e,n.head.rotation.x+=.45*e,n.cape&&(n.cape.rotation.x-=.35*e),n.banner&&(n.banner.rotation.x-=.25*e)},human(n,e){n.pelvis.position.y=qi(n.pelvis).p.y*(1-.47*e);for(const t of["L","R"])n["thigh"+t].rotation.x-=1.35*e,n["shin"+t].rotation.x+=1.9*e,n["arm"+t].rotation.x=Ri(qi(n["arm"+t]).r.x,-.25,e),n["fore"+t].rotation.x=Ri(qi(n["fore"+t]).r.x,-.15,e);n.chest.rotation.x+=.55*e,n.head.rotation.x+=.35*e,n.cape&&(n.cape.rotation.x-=.3*e),n.banner&&(n.banner.rotation.x-=.2*e)},servitor(n,e){n.core.position.y=Ri(qi(n.core).p.y,.62,e),n.core.rotation.z+=.5*e,n.core.rotation.x+=.35*e},shank(n,e){n.hull.position.y=Ri(qi(n.hull).p.y,.5,e),n.hull.rotation.z+=.7*e,n.hull.rotation.x+=.3*e},pike(n,e){n.pike.position.y=Ri(qi(n.pike).p.y,.2,e),n.pike.rotation.z+=.2*e,n.pike.rotation.x+=.08*e,n.chest.rotation.x+=.65*e,n.head.rotation.x+=.35*e},turret(n,e){n.head.rotation.x+=.5*e,n.head.position.y-=.1*e}},Pl={biped(n,e){n.chest.rotation.x-=.22*e,n.head.rotation.x-=.18*e},human(n,e){n.chest.rotation.x-=.2*e,n.head.rotation.x-=.15*e},servitor(n,e){n.core.rotation.y+=.7*e},shank(n,e){n.hull.rotation.z+=.35*e,n.hull.position.y+=.05*e},pike(n,e){n.pike.rotation.z+=.12*e,n.chest.rotation.x-=.2*e},turret(n,e){n.head.rotation.y+=.25*e}},nf=n=>{var e;return bc({max:n.health.max,shield:((e=n.shield)==null?void 0:e.amount)??0})},SS=new gc(1,3),yS=new cn(.5,1,.5).translate(0,.5,0),ES=3.4;function Ph(n,e,t,i){const r=new dn({color:n.colour,transparent:!0,opacity:n.opacity,depthWrite:!1,blending:Js}),s=new Sn;return s.add(new vt(SS,r)),s.position.copy(i),s.scale.copy(t),e.add(s),{group:s,fillMat:r,base:n.opacity,scale:t.clone()}}function bS(n,e){var l,u;const t=new Fi({vertexColors:!0,roughness:.85,metalness:0,emissive:16777215,emissiveIntensity:0}),i=new dn({vertexColors:!0}),r=fo(n.spec,{solidMaterial:t,glowMaterial:i});r.root.position.set(e.x??0,0,e.z??0),r.root.rotation.y=e.yaw??0,(l=e.scene)==null||l.add(r.root);const s=r.bounds(n.measureAside??[]);let a=null;if(n.shield){const c=n.shield.pad/r.scale,h=s.getSize(new I).multiplyScalar(.5*c);a=Ph(n.shield,r.root,h,s.getCenter(new I).divideScalar(r.scale))}const o={unit:n,id:n.id,name:n.name,rank:n.rank,faction:n.faction,rig:r,root:r.root,bones:r.bones,meshes:r.meshes,phase:(e.index??0)*1.7,health:nf(n),diedAt:null,revivedAt:null,respawnAt:null,lastHitAt:-1/0,flashUntil:-1/0,shieldHitAt:-1/0,shieldBrokeAt:-1/0,flinch:0,etherClock:0,height:s.max.y-s.min.y,top:s.max.y,bottom:s.min.y,footprint:Math.min(.8,Math.max(.3,-s.min.x,s.max.x,-s.min.z)),turn:n.turn??((u=fS[n.tier])==null?void 0:u.turn)??2,shell:a,aura:n.aura?Ph(n.aura,r.bones[n.aura.bone],new I().setScalar(n.aura.r),new I(...n.aura.at)):null,column:null,scene:e.scene??null};return n.ghost&&(o.column=new vt(yS,new dn({color:15136511,transparent:!0,opacity:0,blending:Js,depthWrite:!1})),o.column.visible=!1,o.column.position.set(n.ghost.hover[0],0,n.ghost.hover[2]*.5),r.root.add(o.column)),r.root.updateMatrixWorld(!0),o}function Cc(n,e=.5,t=new I){return t.set(n.root.position.x,n.root.position.y+n.bottom+n.height*e,n.root.position.z)}function wS(n,e){var s,a,o,l,u;const t=n.rig.partAt(e.object,e.faceIndex);if(!t)return null;const i=n.unit;if((s=i.noHit)!=null&&s.includes(t[0]))return null;const r=!!((o=(a=i.crit)==null?void 0:a.bones)!=null&&o.includes(t[0])||(u=(l=i.crit)==null?void 0:l.keys)!=null&&u.includes(t[7]));return{part:t,crit:r&&n.health.shield<=0}}function TS(n,{amount:e,source:t,at:i,crit:r=!1}){if(n.health.dead)return{events:[],killed:!1};const{state:s,events:a}=Wd(n.health,{amount:e,source:t});n.health=s,n.lastHitAt=i;let o=!1;for(const l of a)l.type==="absorbed"&&(n.shieldHitAt=i),l.type==="shieldBroken"&&(n.shieldBrokeAt=i),l.type==="damaged"&&(n.flashUntil=i+gS,n.flinch=Math.min(1,n.flinch+(r?.9:.55))),l.type==="died"&&(o=!0,n.diedAt=i,n.respawnAt=i+Zn,n.revivedAt=null,n.etherClock=0,n.rig.setGlowLit(!1,u=>u[0]==="ghost"));return{events:a,killed:o}}function Ih(n,e){n.health=nf(n.unit),n.diedAt=null,n.respawnAt=null,n.revivedAt=e,n.flinch=0,n.lastHitAt=-1/0,n.rig.setGlowLit(!0)}const jo=new I,AS=new I;function RS(n,e,t,i,r){const s=qi(n).p,a=Math.hypot(s.x,s.z),o=Math.atan2(s.z,s.x)+e*i+t;return r.set(Math.cos(o)*a,s.y+Math.sin(e*2.2+t)*.05,Math.sin(o)*a),Math.PI/2-o}function CS(n,e,t,i={}){var f,_;const{unit:r,rig:s,bones:a,root:o}=n;s.reset();let l=n.health.dead,u=l?t-n.diedAt:0,c=0,h=0,d=!0;if(l&&r.ghost?u<Ko?c=wi(u/Ko):u<Zn?c=1:u<Zn+Cl?c=1-wi((u-Zn)/Cl):Ih(n,n.diedAt+Zn+Cl):l&&(u<Ko?c=wi(u/Ko):u<Al?c=1:u<Al+Rh?(c=1,h=wi((u-Al)/Rh)):u<Zn?(c=1,h=1,d=!1):u<Zn+Rl?h=1-wi((u-Zn)/Rl):Ih(n,n.diedAt+Zn+Rl)),l=n.health.dead,(!l||!r.ghost&&u>=Zn)&&((f=r.idle)==null||f.call(r,t,a,n)),n.flinch*=Math.exp(-9*e),!l&&n.flinch>.001&&((_=Pl[r.body])==null||_.call(Pl,a,n.flinch)),c>0&&MS[r.body](a,c),r.ghost&&a.ghost){const v=a.ghost,m=RS(v,t,n.phase,r.ghost.speed,jo);let p=0;l?p=wi((u-pS)/Ch):n.revivedAt!==null&&(p=1-wi((t-n.revivedAt)/Ch));const[x,M,E]=r.ghost.hover;v.position.set(Ri(jo.x,x,p),Ri(jo.y,M+Math.sin(t*2.4+n.phase)*.04,p),Ri(jo.z,E,p)),v.rotation.y=Ri(m,0,p),v.rotation.x=.55*p}if(n.column){const v=Zn-Lh;let m=0;l&&u>=v?m=wi((u-v)/Lh):!l&&n.revivedAt!==null&&(m=1-wi((t-n.revivedAt)/mS)),n.column.visible=m>.001,n.column.material.opacity=.5*m,n.column.scale.set(1.3-.3*m,ES*Math.max(m,.001),1.3-.3*m)}if(r.shield&&!l){const v=n.health;t-n.lastHitAt>=r.shield.regenDelay&&v.shield<v.shieldMax&&(n.health=F0(v,{shield:v.shieldMax/r.shield.regenSeconds*e,source:"regen"}).state)}if(n.shell){const v=n.shell,m=t-n.shieldBrokeAt;if(!l&&n.health.shield>0){const p=t-n.shieldHitAt<.1?2.2:1,x=.35+.65*wc(n.health);v.group.visible=!0,v.group.scale.copy(v.scale),v.fillMat.opacity=v.base*x*p}else if(m>=0&&m<.3){const p=m/.3;v.group.visible=!0,v.group.scale.copy(v.scale).multiplyScalar(1+.35*p),v.fillMat.opacity=v.base*2.5*(1-p)}else v.group.visible=!1}if(n.aura&&(n.aura.group.visible=!l,n.aura.fillMat.opacity=n.aura.base*(.8+.2*Math.sin(t*2+n.phase))),!l&&i.face&&r.faces!==!1){const m=((Math.atan2(i.face.x-o.position.x,i.face.z-o.position.z)-o.rotation.y+Math.PI)%Ll+Ll)%Ll-Math.PI,p=n.turn*e;o.rotation.y+=Math.max(-p,Math.min(p,m))}if(o.position.y=-h*(n.top+.15),o.visible=d,s.solid.material.emissiveIntensity=t<n.flashUntil?xS:0,o.updateMatrixWorld(!0),l&&r.ether&&u<_S&&a.head)for(n.etherClock-=e;n.etherClock<=0;)PS(n.scene,a.head.getWorldPosition(AS)),n.etherClock+=vS}const rf=48,sa=1.1;let Yi=null;function LS(n){if((Yi==null?void 0:Yi.scene)===n)return Yi;const e=new cn(1,1,1),t=new dn({color:15791864,transparent:!0,opacity:.5,depthWrite:!1}),i=Array.from({length:rf},()=>{const r=new vt(e,t);return r.visible=!1,n.add(r),{mesh:r,age:sa,vel:new I,spin:0}});return Yi={scene:n,items:i,next:0},Yi}function PS(n,e){if(!n)return;const t=LS(n),i=t.items[t.next];t.next=(t.next+1)%rf,i.age=0,i.mesh.position.copy(e),i.vel.set((Math.random()-.5)*.5,.7+Math.random()*.4,(Math.random()-.5)*.5),i.spin=(Math.random()-.5)*3,i.mesh.visible=!0}function IS(n){if(Yi)for(const e of Yi.items){if(e.age>=sa)continue;if(e.age+=n,e.age>=sa){e.mesh.visible=!1;continue}const t=e.age/sa;e.mesh.position.addScaledVector(e.vel,n),e.vel.multiplyScalar(Math.exp(-1.2*n)),e.mesh.rotation.y+=e.spin*n,e.mesh.scale.setScalar((.07+.2*t)*(t<.7?1:1-(t-.7)/.3))}}const DS=Object.freeze(["now","enter","interact","flag","scan","land","talk"]),US=Object.freeze(["now","flag"]),NS=Object.freeze(["now"]);function FS({host:n=null,say:e=null,onBeat:t=null,onCheckpoint:i=null,knows:r=null,triggers:s=DS,levelKinds:a=US,subjectless:o=NS}={}){if(!n)throw new Error("makeEpisode: no host API");const l=[...s],u=new Set(o);let c=null,h=-1,d=!1,f=[],_=new Set;const v=y=>{var A;return r?!!r(y):!!((A=n.knows)!=null&&A.call(n,y))},m=new Map;if(Array.isArray(a))for(const y of a)m.set(y,u.has(y)?()=>!0:A=>v(A));else for(const[y,A]of Object.entries(a??{}))m.set(y,A);function p(y){var L;const A=[],D=new Set,g=[],S=[];for(const F of y.acts??[]){F.id||g.push("an act has no id");for(const N of F.scenes??[]){N.id||g.push(`act ${F.id}: a scene has no id`),S.push({act:F.id,id:N.id,title:N.title??N.id});let U=!0;for(const Y of N.beats??[]){if(!Y.id){g.push(`${F.id}/${N.id}: a beat has no id`);continue}D.has(Y.id)&&g.push(`beat id '${Y.id}' is used twice`),D.add(Y.id),l.includes(Y.trigger)||g.push(`beat '${Y.id}': trigger '${Y.trigger}' is not one of ${l.join(" | ")}`),!u.has(Y.trigger)&&!Y.at&&g.push(`beat '${Y.id}': a '${Y.trigger}' trigger needs an 'at' to name its subject`),U&&Y.optional&&g.push(`beat '${Y.id}' opens scene '${N.id}' and is marked optional — a scene's first beat is where its checkpoint is taken, so it must be arrived at`),Y.talk&&((L=n.talk)!=null&&L.has)&&!n.talk.has(Y.talk)&&g.push(`beat '${Y.id}': conversation '${Y.talk}' is not loaded`),A.push({...Y,act:F.id,scene:N.id,sceneTitle:N.title??N.id,actTitle:F.title??F.id,opensScene:U}),U=!1}}}A.length||g.push("an episode with no beats");const R=new Set(y.teaches??[]);for(const F of A)for(const N of F.grants??[])R.add(N);for(const F of A)for(const N of F.needs??[])R.has(N)||g.push(`beat '${F.id}' needs '${N}', which nothing in this episode grants — list it in the episode's \`teaches\` if a conversation or a reading provides it`);if(g.length)throw new Error(`episode.load('${y.id}'): ${g.length} problem(s) — ${g.join("; ")}`);return{beats:A,scenes:S}}function x(){const y=T.beat;!y||!y.opensScene||_.has(y.scene)||(_.add(y.scene),i==null||i(y))}function M(y){var A,D,g;f.push(y.id),y.say&&(e==null||e(y.say));for(const S of y.grants??[])(A=n.learn)==null||A.call(n,S);y.talk&&((g=(D=n.talk)==null?void 0:D.open)==null||g.call(D,y.talk)),t==null||t(y)}function E(){if(!(d||!c)){d=!0;try{let y=0;x();const A=D=>{const g=m.get(D.trigger);return!!g&&!!g(D.at)};for(;h>=0&&h<c.beats.length&&A(c.beats[h]);){const D=c.beats[h];if((D.needs??[]).some(g=>!v(g))||(M(D),h+=1,x(),++y>c.beats.length+1))break}}finally{d=!1}}}function P(y,A){if(!c)return-1;for(let D=h;D>=0&&D<c.beats.length;D++){const g=c.beats[D];if(g.trigger===y&&g.at===A)return D;if(!g.optional)return-1}return-1}const T={get id(){return(c==null?void 0:c.id)??null},get title(){return(c==null?void 0:c.title)??null},get begun(){return h>=0},get over(){return!!c&&h>=c.beats.length},get beat(){return c&&h>=0&&h<c.beats.length?c.beats[h]:null},get act(){var y;return((y=T.beat)==null?void 0:y.actTitle)??null},get scene(){var y;return((y=T.beat)==null?void 0:y.sceneTitle)??null},get objective(){const y=T.beat;if(!y)return null;if(y.objective)return y.objective;if(!y.optional)return null;for(let A=h+1;A<c.beats.length;A++)if(!c.beats[A].optional)return c.beats[A].objective??null;return null},get note(){var y;return((y=T.beat)==null?void 0:y.note)??null},get done(){return[...f]},get beats(){return c?c.beats.map(y=>y.id):[]},load(y){if(!(y!=null&&y.id)||!y.acts)throw new Error("episode.load: needs { id, acts }");const{beats:A,scenes:D}=p(y);return c={id:y.id,title:y.title??y.id,acts:y.acts,beats:A,scenes:D},h=-1,f=[],_=new Set,T},begin(){return!c||h>=0?!1:(h=0,E(),!0)},fire(y,A){const D=P(y,A);if(D<0)return null;const g=c.beats[D],S=(g.needs??[]).filter(R=>!v(R));if(S.length){const R=g.refuse;return(typeof R=="function"?R(S):R)??"Not yet. There is a piece of this missing."}return h=D,x(),M(g),h+=1,E(),null},wants(y,A){return P(y,A)>=0},save(){var y;return{id:(c==null?void 0:c.id)??null,at:((y=T.beat)==null?void 0:y.id)??null,done:[...f]}},restore(y){if(!c||!y||y.id&&y.id!==c.id)return T;const A=c.beats.findIndex(D=>D.id===y.at);return A<0||(h=A,f=[...y.done??[]],_=new Set(c.beats.slice(0,A+1).map(D=>D.scene))),T}};return T}const Dh=90,Jt=Object.freeze({backdrop:"backdrop",root:"start",over:"start-over",begin:"start-begin",loading:"start-loading",press:"start-press",problem:"start-problem",problemText:"start-problem-text",problemReload:"start-problem-reload"}),Uh=Object.freeze(["title"]),OS="range",Nh="start-pressed";function kS(){return new URL("/range/assets/OFL-D_b4SXWo.txt",import.meta.url).href}const BS=n=>n.code==="Enter"||n.code==="NumpadEnter"||!n.code&&n.key==="Enter",Fh=n=>n.code==="Space"||!n.code&&n.key===" ";function zS({doc:n,win:e,search:t="",build:i=HS(),onClose:r=()=>{},onOpen:s=()=>{}}={}){let a=!1,o=!0,l=!1,u=!1,c=!1,h="title",d=null,f=0,_=0,v=0;const m=g=>{var S;return((S=n==null?void 0:n.getElementById)==null?void 0:S.call(n,g))??null},p=(g,S)=>{const R=m(g);R&&(R.hidden=!S)},x=(g,S,R)=>{var L;return(L=g==null?void 0:g.classList)==null?void 0:L.toggle(S,R)};function M(g){var S,R;o&&((S=g.stopPropagation)==null||S.call(g),!(d||g.isComposing)&&(BS(g)||Fh(g))&&((R=g.preventDefault)==null||R.call(g),g.repeat||A()))}function E(g){var S,R;o&&((S=g.stopPropagation)==null||S.call(g),!d&&Fh(g)&&((R=g.preventDefault)==null||R.call(g)))}function P(g){var R;if(!o||l||d)return;const S=`${(g==null?void 0:g.message)??""} ${((R=g==null?void 0:g.error)==null?void 0:R.message)??""}`;T(/webgl/i.test(S)?"noWebgl":"failed")}function T(g){var R;d=g,p(Jt.loading,!1),p(Jt.press,!1);const S=m(Jt.problemText);S&&(S.textContent=k0[g]),p(Jt.problemReload,g==="failed"),p(Jt.problem,!0),(R=m(Jt.begin))==null||R.setAttribute("aria-disabled","true")}function y(g){p(Jt.loading,g),p(Jt.press,!g)}function A(g){return!o||c||d?!1:l?(c=!0,_++,D(!0),!0):(u=!0,!1)}function D(g,S=!0){var L,F;o=!1,u=!1;const R=m(Jt.root);if(x(n==null?void 0:n.documentElement,"start-open",!1),(F=(L=m(Jt.begin))==null?void 0:L.blur)==null||F.call(L),R&&(R.inert=!0),g)x(R,"st-closing",!0),R==null||R.setAttribute("aria-hidden","true"),x(m(Jt.backdrop),"gone",!0);else{R&&(R.hidden=!0);const N=m(Jt.backdrop);N&&(N.hidden=!0)}S&&(v++,r())}return{boot(){var R,L,F,N,U,Y,G,se;if(a)return o;a=!0;const g=m(Jt.root);x(g,"st-booted",!0),x(n==null?void 0:n.documentElement,"start-open",!0);const S=m(Jt.over);return S&&(S.textContent=k0.overTitle),(F=(L=(R=n==null?void 0:n.documentElement)==null?void 0:R.classList)==null?void 0:L.contains)!=null&&F.call(L,Nh)&&(u=!0,x(n.documentElement,Nh,!1)),(N=e==null?void 0:e.addEventListener)==null||N.call(e,"error",P),(U=e==null?void 0:e.addEventListener)==null||U.call(e,"keydown",M,!0),(Y=e==null?void 0:e.addEventListener)==null||Y.call(e,"keyup",E,!0),(se=(G=m(Jt.begin))==null?void 0:G.addEventListener)==null||se.call(G,"click",()=>A()),GS(t,"dev")===OS&&D(!1,!1),o},ready(){l||(l=!0,!d&&(y(!1),u&&o&&(u=!1,A())))},update(g){f+=Math.max(0,g)},skip(){return o?(D(!1),!0):!1},open(g="title",S={}){var N;if(!Uh.includes(g))throw new Error(`start.open: '${g}' is not built yet (S1 has ${Uh.join(", ")})`);h=g;const R=m(Jt.root);R&&(R.hidden=!1,R.inert=!1,(N=R.removeAttribute)==null||N.call(R,"aria-hidden")),x(R,"st-closing",!1);const L=m(Jt.backdrop);L&&(L.hidden=!1),x(L,"gone",!1),x(n==null?void 0:n.documentElement,"start-open",!0),c=!1,d||y(!!S.loading||!l);const F=o;return o=!0,F||s(),!0},state(){return{open:o,screen:h,ready:l,queued:u,busy:c,problem:d,clock:f,acts:_,closes:v,build:i,licence:kS()}},get isOpen(){return o}}}function HS(){return"ef360e3"}function GS(n,e){const t=typeof n=="string"?n.replace(/^\?/,""):"";for(const i of t.split("&")){const[r,s=""]=i.split("=");if(r===e)try{return decodeURIComponent(s)}catch{return s}}return null}var sd;const ni=zS({doc:document,win:globalThis,search:((sd=globalThis.location)==null?void 0:sd.search)??"",onClose:()=>q2(),onOpen:()=>{Oi=!0}});let Oi=ni.boot();const Ea=document.getElementById("view"),Dn=new hc({canvas:Ea,antialias:!0});Dn.setPixelRatio(Math.min(devicePixelRatio||1,2));Dn.setSize(innerWidth||1280,innerHeight||720,!1);Dn.outputColorSpace=Pn;Dn.toneMapping=j0;Dn.toneMappingExposure=1;lx(Dn);const ht=new co;ht.background=new Qe(1053204);const Rt=new Mn(70,(innerWidth||1280)/(innerHeight||720),.05,200),sf=1.7,ln=new Mn(70,(innerWidth||1280)/(innerHeight||720),.05,200);ht.add(new Sc(3949127,.85));const of=new Mc(16777215,1.6);of.position.set(4,8,6);ht.add(of);ht.add(new xc(14674158,3813928,.9));const tt={halfW:7.5,wallH:4.6,near:2,far:-24},ba=(tt.near+tt.far)/2,wa=tt.near-tt.far,Lc=rr(tt.halfW*2,.2,wa,fi.floorTimber,{castShadow:!1});Lc.position.set(0,-.1,ba);ht.add(Lc);const Pc=rr(tt.halfW*2+.4,.2,wa,fi.ceiling,{castShadow:!1});Pc.position.set(0,tt.wallH+.1,ba);ht.add(Pc);const Ic=rr(.2,tt.wallH,wa,fi.wall);Ic.position.set(-tt.halfW-.1,tt.wallH/2,ba);ht.add(Ic);const Dc=rr(.2,tt.wallH,wa,fi.wall);Dc.position.set(tt.halfW+.1,tt.wallH/2,ba);ht.add(Dc);const Uc=rr(tt.halfW*2+.4,tt.wallH,.2,fi.wallUpper);Uc.position.set(0,tt.wallH/2,tt.far-.1);ht.add(Uc);const Nc=rr(tt.halfW*2+.4,tt.wallH,.2,fi.wallUpper);Nc.position.set(0,tt.wallH/2,tt.near+.1);ht.add(Nc);const af=[Ic,Dc,Uc,Nc,Lc,Pc];for(const n of[-5,-10,-20]){const e=rr(tt.halfW*2,.01,.06,fi.trim,{castShadow:!1,receiveShadow:!1});e.position.set(0,.001,n),ht.add(e)}const lf=-2.5,cf=rr(.05,.01,lf-tt.far,fi.trim,{castShadow:!1,receiveShadow:!1});cf.position.set(0,.001,(lf+tt.far)/2);ht.add(cf);const Fc=Object.fromEntries([...FM,...dS].map(n=>[n.id,n])),VS=(n,e)=>e*Math.tan(oo.degToRad(n)),WS=[["boss",-3.5,20],["captain",-8.5,10],["servitor",-13,20],["shank",-19,15],["vandal",-27,10],["dreg",-36,5],["warlord",4,20],["champion",8.5,10],["rival",13,20],["outrider",19,15],["turret",27,10],["levy",36,5]],mi=WS.map(([n,e,t],i)=>bS(Fc[n],{scene:ht,x:VS(e,t),z:-t,index:i})),Il={x:0,z:0};let ye=0;const Ta=70,_i=ya.map(n=>({id:n.id,label:n.label,damage:n.damage,precision:n.precision,ammoType:n.ammoType,reserveCap:n.reserveCap,burstCycle:n.burstCycle??0,stats:{...n.stats,reloadTime:n.reload.clip*n.reload.seat}})),Pi=_i.map(n=>bx(n.stats));let Gn=0,Ct=Pi[0];const Aa="hunterCloak",it=aS({hipFov:Ta,classId:Aa,buildProp:nM}),vi=Px({model:it.rig,rest:yh,aim:yh,stowDrop:0,drawTime:0,aimTime:0,fov:G0,keyIntensity:1.6,fillIntensity:.12});vi.scene.add(new xc(14674158,3813928,.9));vi.camera.far=3;vi.camera.updateProjectionMatrix();vi.draw();const Oc=n=>n.reloading?{...n,reloading:!1,reloadEndsAt:0}:n;function ds(n){n===Gn||!_i[n]||_t.locks(ye).swap||it.requestSwap(n,ye)&&(Pi[Gn]=Oc(Ct),Gn=n,Ct=Pi[n],Ut.fire("switch","weapon"))}const XS=new cn(.02,.02,1),uf=new dn({color:16773824,transparent:!0,opacity:0}),js=new vt(XS,uf);js.frustumCulled=!1;ht.add(js);let hf=-1/0;const Oh=new I,kh=new I,qS=new I(0,0,1);function YS(n,e){const t=n.distanceTo(e);kh.copy(n).add(e).multiplyScalar(.5),js.position.copy(kh),Oh.copy(e).sub(n).normalize(),js.quaternion.setFromUnitVectors(qS,Oh),js.scale.set(1,1,Math.max(t,.01)),hf=ye+.05}const Ra=new vt(xa.sphere,new dn({color:16769162}));Ra.scale.setScalar(1e-4);ht.add(Ra);let df=-1/0,ff=.06;function Ca(n,e=.06){Ra.position.copy(n),df=ye+(e>.3?.28:e>.12?.18:.09),ff=e}let Bh=0;function pf(n,e=!1){const t=document.getElementById("hitmarker");t&&(t.classList.remove("fade"),t.classList.toggle("kill",n),t.classList.toggle("crit",e&&!n),t.offsetWidth,t.classList.add("show"),clearTimeout(Bh),Bh=setTimeout(()=>{t.classList.remove("show"),t.classList.add("fade")},60))}const os=new Od;os.far=100;const $S=oo.degToRad(1.4),KS=oo.degToRad(.22),zh=new I,Dl=new I,Hh=new I;function jS(n){const e=it.adsE>=.9?KS/it.magnification:$S;if(e<=0)return;const t=Math.random()*Math.PI*2,i=Math.random()*e;zh.set(Math.abs(n.y)<.99?0:1,Math.abs(n.y)<.99?1:0,0),Dl.crossVectors(n,zh).normalize(),Hh.crossVectors(Dl,n).normalize(),n.addScaledVector(Dl,Math.cos(t)*i).addScaledVector(Hh,Math.sin(t)*i).normalize()}const ZS=mi.flatMap(n=>n.meshes),JS=new Map(mi.flatMap(n=>n.meshes.map(e=>[e,n])));function to(n){for(const e of n.intersectObjects(ZS,!1)){const t=JS.get(e.object);if(t.health.dead)continue;const i=wS(t,e);if(i)return{target:t,point:e.point,crit:i.crit}}return null}function mo(n,e,t,i=!1){const r=TS(n,{amount:e,source:t,at:ye,crit:i});return r.killed&&c2(Cc(n,0),t==="player-super"?"super":"weapon"),r}function QS(n){const e=new I,t=new I;vi.ray(Rt,e,t),jS(t),os.set(e,t);const i=to(os);let r;if(i){r=i.point;const s=_i[Gn],a=i.crit?s.damage*s.precision:s.damage,o=(ye<kc?a*u2:a)*_t.weaponDamageScale(),{killed:l}=mo(i.target,o,"player",i.crit);pf(l,i.crit)}else{const s=os.intersectObjects(af,!1);r=s.length?s[0].point:e.clone().addScaledVector(t,os.far)}Ca(r),YS(it.muzzleWorld(Rt),r),it.onShot((n==null?void 0:n.at)??ye)}const e2=lS();let Zo=-1/0;function mf(n=_t.locks(ye)){const e=_i[Gn],t=It.down.has("Mouse0")||ro.fire;let i=It.pressed.has("Mouse0")||ro.fire;const r=it.busy||n.fire;r?(i||t)&&(Zo=ye):Zo>-1/0&&((t||ye-Zo<=ya[Gn].readyTime+tf)&&(i=!0),Zo=-1/0),!r&&t&&it.reloading&&!qd(Ct,ye)&&it.cutReload(ye);const s=e2.pull(Ct,e,ye,{held:t,pressed:i,blocked:r});Ct=s.state,s.shots.length&&it.reloading&&it.cutReload(ye);for(const a of s.shots)QS(a);for(const a of s.events)(a.type==="dry"||a.type==="emptied")&&no();!r&&t&&Ct.loaded<=0&&!Ct.reloading&&no()}let qs=-1/0;function no(){if(it.busy||_t.locks(ye).reload)return;const n=Ax(Ct,ye);Ct=n.state,n.events.some(e=>e.type==="reloading")&&it.startReload(ye)}const Tr={melee:{cooldown:4,readyAt:0},grenade:{cooldown:14,readyAt:0},class:{cooldown:22,readyAt:0}},t2=n=>ye>=Tr[n].readyAt,n2=n=>{Tr[n].readyAt=ye+Tr[n].cooldown};let Un=0;const i2=.34;let Ji=0;const r2=.25,Gh=8,fs=[],s2=14,o2=.7;function a2(n){const e=new vt(xa.box,new Fi({color:5163386,emissive:1989684,emissiveIntensity:1.1,roughness:.55}));e.scale.set(.16,.16,.16),e.position.set(n.x,.14,n.z),ht.add(e),fs.push({mesh:e,bornAt:ye})}function l2(n){for(let e=fs.length-1;e>=0;e--){const t=fs[e];t.mesh.rotation.y+=n*1.6,t.mesh.position.y=.14+Math.sin((ye-t.bornAt)*3)*.03;const i=t.mesh.position.x-He.x,r=t.mesh.position.z-He.z,s=Math.hypot(i,r)<o2,a=ye-t.bornAt>s2;s&&(_i.forEach((o,l)=>{if(o.ammoType!=="special")return;const u=o.reserveCap??1/0;l===Gn?Ct={...Ct,reserve:Math.min(u,Ct.reserve+Gh)}:Pi[l]={...Pi[l],reserve:Math.min(u,Pi[l].reserve+Gh)}}),Ut.fire("pickup","special-ammo")),(s||a)&&(ht.remove(t.mesh),fs.splice(e,1))}}function c2(n,e="weapon"){if(e!=="super"){const t=Un>=1;Un=Math.min(1,Un+i2),!t&&Un>=1&&Ut.fire("flag","super-ready")}Ji>=1?(n&&a2(n),Ji=0):Ji=Math.min(1,Ji+r2),P2()}let kc=-1/0;const u2=1.6,h2=6;function d2(){kc=ye+h2,Ut.fire("ability","class")}const f2=2.6,p2=80;function m2(){const n=new I,e=new I;vi.ray(Rt,n,e);const t=tr.strikeRaycast(n,e,f2);if(t){const{killed:i}=mo(t.target,p2,"player-melee");Ca(t.point,.1),pf(i),Ut.fire("ability","melee")}}const g2=14,Ul=3.2,Vh=120,_2=2.5,V0=new Fi({color:16734780,emissive:16742972,emissiveIntensity:2,roughness:.5,metalness:0}),Ii=new vt(xa.sphere,V0);Ii.scale.setScalar(.16);Ii.visible=!1;ht.add(Ii);const W0=new I,v2=.6,Wh=new I,x2=new I;let io=!1,gf=-1/0;function M2(n,e,t){io&&_f(Ii.position.clone()),V0.color.set(t),V0.emissive.set(t),Ii.position.copy(n),W0.copy(e).multiplyScalar(7.5).add(new I(0,4.2,0)),Ii.visible=!0,io=!0,gf=ye,Ut.fire("ability","grenade")}function _f(n){Ca(n,.75),Wh.set(He.x,He.y+1,He.z);const e=Wh.distanceTo(n);e<Ul&&Mf(Vh*v2*(1-.5*(e/Ul)),"player-grenade");for(const t of mi)t.health.dead||Cc(t,.5,x2).distanceTo(n)>Ul||mo(t,Vh,"player-grenade")}function S2(n){if(!io)return;W0.y-=g2*n,Ii.position.addScaledVector(W0,n);const e=Ii.position;(e.y<=.1||e.x<-tt.halfW+.15||e.x>tt.halfW-.15||e.z<tt.far+.15||e.z>tt.near-.15||ye-gf>_2)&&(_f(e.clone()),Ii.visible=!1,io=!1)}function y2(){const n=new I,e=new I;vi.ray(Rt,n,e),Ca(n.clone().addScaledVector(e,3.5),.6);for(const t of mi)t.health.dead||mo(t,99999,"player-super");Ut.fire("ability","super")}const Bc=70,La=130,Xh=2.75,E2=2.25,b2=Bc/2.7,w2=La/2.75;let Yt=bc({max:Bc,shield:La}),vf=-1/0,xf=!1;function Mf(n,e="world"){if(Yt.dead)return;const{state:t,events:i}=Wd(Yt,{amount:n,source:e});Yt=t,vf=ye,i.some(r=>r.type==="died")&&(Yt=bc({max:Bc,shield:La}),Hc("r-down"))}function T2(n){if(Yt.dead)return;const e=ye-vf;e>=Xh&&Yt.hp<Yt.max&&(Yt=F0(Yt,{amount:b2*n,source:"regen"}).state),e>=Xh+E2&&Yt.shield<Yt.shieldMax&&(Yt=F0(Yt,{shield:w2*n,source:"regen"}).state)}const Sf={ghost:{name:"Ghost"}},zc={"r-hello":{speaker:"ghost",text:"Range is live. Five, ten and twenty metres. Let's see what your hands remember."},"r-targets":{speaker:"ghost",text:"Good. They stand back up on their own. Try something else in your kit."},"r-switch":{speaker:"ghost",text:"Feel the difference? Grenade next. Lob it, and not at your own feet."},"r-grenade":{speaker:"ghost",text:"Loud. Now get in close and hit one. Your fists count too."},"r-melee":{speaker:"ghost",text:"That'll do. Your class ability now. It doesn't last, so make it count."},"r-class":{speaker:"ghost",text:"Every kill feeds your Super. Break a few more and I'll tell you when it's ready."},"r-super-ready":{speaker:"ghost",text:"There. That's your Super. Let it out."},"r-super":{speaker:"ghost",text:"That's what you are now. Kills build special ammo too. Watch for the drop."},"r-ammo":{speaker:"ghost",text:"Special ammo. The hand cannon's fed. The range is yours."},"r-down":{speaker:"ghost",text:"Up you get. Maybe keep your own grenades a bit further away."}};for(const[n,e]of Object.entries(zc)){if(!Sf[e.speaker])throw new Error(`comms: line '${n}' has unknown speaker '${e.speaker}'`);if(e.text.length>Dh)throw new Error(`comms: line '${n}' is ${e.text.length} chars, over MAX_LINE ${Dh}`)}const vn={queue:[],current:null,until:0,endedAt:-1/0},A2=.8,R2=n=>Math.max(2.4,.8+n.length*.05);function Hc(n){const e=zc[n];if(!e)throw new Error(`comms: no line '${n}'`);vn.queue=[{id:n,...e}]}function C2(){if(vn.current&&ye>=vn.until){const n=vn.current;vn.current=null,vn.endedAt=ye,Ut.fire("vo",n.id)}!vn.current&&vn.queue.length&&(vn.current=vn.queue.shift(),vn.until=ye+R2(vn.current.text))}const yf={id:"test-range",title:"Test Range",acts:[{id:"range",title:"Test Range",scenes:[{id:"drills",title:"Drills",beats:[{id:"r-01",trigger:"now",vo:"r-hello"},{id:"r-02",trigger:"kill",at:"target",count:3,progress:"kills",label:"Enemies defeated",objective:"Defeat enemies",vo:"r-targets"},{id:"r-03",trigger:"switch",at:"weapon",key:"1 2 3",objective:"Switch weapons",vo:"r-switch"},{id:"r-04",trigger:"ability",at:"grenade",key:"Q",objective:"Throw a grenade",vo:"r-grenade"},{id:"r-05",trigger:"ability",at:"melee",key:"C",objective:"Melee a target",vo:"r-melee"},{id:"r-06",trigger:"ability",at:"class",key:"V",objective:"Use your class ability",vo:"r-class"},{id:"r-07",trigger:"flag",at:"super-ready",progress:"super",label:"Super energy",objective:"Charge your Super",vo:"r-super-ready"},{id:"r-08",trigger:"ability",at:"super",key:"F",objective:"Cast your Super",vo:"r-super"},{id:"r-09",trigger:"pickup",at:"special-ammo",progress:"special",label:"Special ammo",objective:"Collect special ammo",vo:"r-ammo"}]}]}]},L2="Free fire",Nl=new Set,Ut=FS({host:{knows:n=>Nl.has(n),learn:n=>Nl.add(n)},knows:n=>n==="super-ready"?Un>=1:Nl.has(n),triggers:["now","flag","vo","kill","switch","ability","pickup"],onBeat:n=>{n.vo&&Hc(n.vo)}});Ut.load(yf);for(const n of yf.acts[0].scenes[0].beats)if(n.vo&&!zc[n.vo])throw new Error(`episode: beat '${n.id}' plays missing line '${n.vo}'`);let as={id:null,n:0};function P2(){const n=Ut.beat;!n||n.trigger!=="kill"||(as.id!==n.id&&(as={id:n.id,n:0}),as.n+=1,as.n>=(n.count??1)&&Ut.fire("kill",n.at))}const go=new _x,It=new Mx(go,Ea);Ea.addEventListener("click",()=>{Oi||It.locked||It.requestLock()});Ea.addEventListener("contextmenu",n=>n.preventDefault());go.on("input:wheel",({delta:n})=>{if(Oi||!It.locked)return;const e=_i.length;ds((Gn+(n>0?1:-1)+e)%e)});go.on("input:pointerlock",({locked:n})=>{var e;(e=document.getElementById("hint"))==null||e.classList.toggle("gone",n),!n&&!ti&&Ut.begun&&!Oi&&(Pa(),Af=performance.now()),n&&!Ut.begun&&Ut.begin()});const I2=["MetaLeft","MetaRight","ControlLeft","ControlRight","AltLeft","AltRight"];go.on("input:key",({code:n})=>{if(Oi||ti||!It.locked||I2.some(t=>It.down.has(t)))return;const e=_t.locks(ye);n==="KeyR"&&(e.reload?qs=ye:no()),n==="KeyQ"&&_t.press("grenade"),n==="KeyC"&&_t.press("melee"),n==="KeyV"&&_t.press("class"),n==="KeyF"&&_t.press("super"),n==="Digit1"&&ds(0),n==="Digit2"&&ds(1),n==="Digit3"&&ds(2)});const Tt={yaw:0,pitch:0},D2=1.5,He={x:0,z:0,y:0},U2=4.2,xr=.35,N2=20,F2=6.4,O2=5.6,k2=1;let pr=0,Fl=0;const ro={aim:!1,fire:!1},Ol=new en(0,0,0,"YXZ"),qh=new I,Yh=new I,Jr=new I,kl=(n,e,t)=>Math.max(e,Math.min(t,n)),ps={solid:new Fi({vertexColors:!0,roughness:.85,metalness:0}),glow:new dn({vertexColors:!0})},$h=new dn({color:0}),B2={x:0,y:0},Zs=new I;let _o=Aa,oa=null,En=Sa(Aa,ps);En.root.visible=!1;ht.add(En.root);const bn=pM({room:tt,fov:Ta,radius:.2}),Gc=vM({abilities:Qn,moments:Lr}),tr=IM({raycaster:os,strikeRay:to,getWeapon:()=>Ct,setWeapon:n=>{Ct=n},cancelEngineReload:Oc,fp:it,now:()=>ye,getSuperCharge:()=>Un,setSuperChargeValue:n=>{Un=n},episode:Ut,moment:bn,pitchLimit:D2}),_t=MM({scene:ht,ROOM:tt,camera:Rt,fp:it,runner:Gc,moment:bn,player:He,view:Tt,PLAYER_RADIUS:xr,strikeRaycast:tr.strikeRaycast,now:()=>ye,classId:()=>_o,body:()=>En,moveAxis:()=>It.axis(),ability:{ready:n=>t2(n)&&!(n==="grenade"&&io),use:n2},superCharge:{get:()=>Un,set:tr.setSuperCharge},weapons:{fillMagazine:tr.fillMagazine,cancelReload:()=>{Ct=Oc(Ct)}},legacy:{throwGrenade:M2,meleeStrike:m2,ward:d2,superWipe:y2}});let Li=null,Ar=null,ti=!1,Ef=Aa;const $i=document.getElementById("preview-canvas");let ci=null,di=null,ms=null,Qt=null,X0=0,pa=0,bf=!0;function Vc(n){Vn[n]&&(Ef=n,di&&(Qt&&(di.remove(Qt.root),Qt.dispose()),Qt=Sa(n,ps),Qt.pose(X0,{base:"preview"}),Qt.root.position.set(0,0,0),Qt.root.rotation.set(0,pa,0),Qt.root.updateMatrixWorld(!0),di.add(Qt.root)),document.querySelectorAll("#menu-classes button").forEach(e=>e.classList.toggle("active",e.dataset.garment===n)),oa=n,wf())}function wf(){if(!oa||_t.busy)return;const n=oa;oa=null,n!==_o&&Wc(n)}function Wc(n){_o=n,it.setClass(n),ht.remove(En.root),En.dispose(),En=Sa(n,ps),En.root.visible=!1,ht.add(En.root),_t.setClass(n)}function z2(){if(ci||!$i)return;ci=new hc({canvas:$i,antialias:!0,alpha:!0}),ci.setPixelRatio(Math.min(devicePixelRatio||1,2)),ci.outputColorSpace=Pn,ci.toneMapping=j0,di=new co,di.add(new Sc(3949127,.85));const n=new Mc(16777215,1.6);n.position.set(2,3,3),di.add(n),di.add(new xc(14674158,3813928,.9)),ms=new Mn(40,1,.05,10),ms.position.set(0,1.1,3.2),ms.lookAt(0,.94,0),Vc(Ef)}function Tf(){const n=document.getElementById("menu-inventory");n&&(n.innerHTML=_i.map((e,t)=>{const i=t===Gn?Ct:Pi[t],r=i.reserve===1/0?"∞":i.reserve;return`<div class="inv-slot${t===Gn?" equipped":""}" data-index="${t}">
      <span>${e.label} &middot; ${i.loaded}/${r}</span>
      <span class="ammo-tag ${e.ammoType}">${e.ammoType}</span>
    </div>`}).join(""),n.querySelectorAll(".inv-slot").forEach(e=>{e.addEventListener("click",()=>{ds(Number(e.dataset.index)),Tf()})}))}function Pa(){ti=!ti;const n=document.getElementById("menu");if(n&&(n.hidden=!ti),ti){It.releaseLock(),z2();const e=($i==null?void 0:$i.clientWidth)||360,t=($i==null?void 0:$i.clientHeight)||220;ci&&(ci.setSize(e,t,!1),ms.aspect=e/t,ms.updateProjectionMatrix()),Tf()}else It.requestLockFresh(),Un>=1&&If()}let Af=-1/0;go.on("action:cancel",()=>{Oi||ti&&performance.now()-Af<300||Pa()});var od;(od=document.getElementById("menu-resume"))==null||od.addEventListener("click",()=>{ti&&Pa()});document.querySelectorAll("#menu-classes button").forEach(n=>{n.addEventListener("click",()=>Vc(n.dataset.garment))});const ma=n=>Object.keys(Vn).find(e=>Object.values(Vn[e]).includes(n));function H2(n,e=0){if(ni.skip(),n===null){Li&&(bn.finish(ye-Lr[Qn[Li.id].camera].blendBack-.001),bn.update(ye,{feet:Zs.set(He.x,He.y,He.z),yaw:Tt.yaw,pitch:Tt.pitch})),Li=null,En.root.visible=bn.active,bs();return}const t=Qn[n];if(!(t!=null&&t.camera))throw new Error(`poseAt: '${n}' is not a third-person ability`);ma(n)!==_o&&Wc(ma(n)),Li={id:n,t:e},bn.start(t.camera,ye-Lr[t.camera].blendOut-.001),bn.update(ye,{feet:Zs.set(He.x,He.y,He.z),yaw:Tt.yaw,pitch:Tt.pitch}),En.root.visible=!0,En.pose(ye,{base:"ready",clip:n,t:e,feet:Zs,facing:Tt.yaw}),bs()}function G2(n,e=0,{charged:t=!0}={}){ni.skip();const i=Qn[n];if(it.swapping)throw new Error("fpAt: a swap is running");ma(n)!==_o&&Wc(ma(n));const r=i.seconds+(i.camera?Lr[i.camera].blendBack:0);it.act(n,ye-e*i.seconds,r,{charged:t}),it.update(0,ye,{}),bs()}function q0(n){ni.skip(),ht.overrideMaterial=n?$h:null,ht.background.set(n?16777215:1053204),di&&(di.overrideMaterial=n?$h:null,ci.setClearColor(n?16777215:0,n?1:0))}let mr=null;function V2(n){if(ni.skip(),mr){for(const l of mr.items)ht.remove(l.root),l.dispose();for(const[l,u]of mr.visible)l.visible=u;q0(!1),Ar=null,mr=null}if(!n){bs();return}const{bodies:e,distance:t=8,eye:i=sf,yaw:r=0,spacing:s=1.2,silhouette:a=!1}=n;mr={items:[],visible:new Map};const o=new Set;e.forEach((l,u)=>{let c;if(Vn[l])c=Sa(l,ps),c.pose(0,{base:"ready"});else{const h=fo(Fc[l].spec,{solidMaterial:ps.solid,glowMaterial:ps.glow});c={root:h.root,dispose:()=>h.dispose()}}c.root.position.x=(u-(e.length-1)/2)*s,c.root.position.z=-t,c.root.rotation.y=r,c.root.updateMatrixWorld(!0),ht.add(c.root),o.add(c.root),mr.items.push(c)});for(const l of ht.children)l!==_t.effectsRoot&&(mr.visible.set(l,l.visible),l.visible=o.has(l)||!a&&(l.isLight||af.includes(l)));_t.clearWorld(),q0(a),Ar={position:[0,i,0],target:[0,i,-t]},bs()}function W2(n){ni.skip(),bf=n===null,n!==null&&(pa=n)}function Rf(n){if(Oi){It.consumeMouse(),ni.update(n),It.endFrame();return}if(ti){Qt&&(X0+=n,bf&&(pa+=n*.6),Qt.pose(X0,{base:"preview"}),Qt.root.position.set(0,0,0),Qt.root.rotation.set(0,pa,0),Qt.root.updateMatrixWorld(!0)),It.endFrame();return}ye+=n,wf();const e=_t.locks(ye),t=It.locked&&It.down.has("Mouse2")||ro.aim;t&&(Lf=ye),it.setAim(t&&!e.aim);const{dx:i,dy:r}=It.consumeMouse();let s=0,a=0;if(tr.notePitch(Tt.pitch),It.locked){const f=It.mouse.sensitivity*(Rt.fov/Ta);s=-i*f,a=-r*f,Tt.yaw+=s,Tt.pitch+=a;const _=it.recoil;if(_.pitch>0&&a<0){const p=Math.min(_.pitch,-a);_.pitch-=p,Tt.pitch+=p}if(_.yaw>0&&s<0){const p=Math.min(_.yaw,-s);_.yaw-=p,Tt.yaw+=p}if(_.yaw<0&&s>0){const p=Math.min(-_.yaw,s);_.yaw+=p,Tt.yaw-=p}const[v,m]=tr.pitchWindow();Tt.pitch=kl(Tt.pitch,v,m)}Rt.rotation.set(Tt.pitch+it.recoil.pitch,Tt.yaw+it.recoil.yaw,0,"YXZ"),Ol.set(0,Tt.yaw,0,"YXZ");const o=e.move==="free"?It.axis():B2;qh.set(0,0,-1).applyEuler(Ol),Yh.set(1,0,0).applyEuler(Ol),Jr.set(0,0,0).addScaledVector(qh,o.y).addScaledVector(Yh,o.x),Jr.lengthSq()>0&&Jr.normalize();const l=Jr.lengthSq()>0?U2*(1-.25*it.adsE):0;let u=null;e.move==="driven"?(u=_t.drive(n,He),u&&(pr=u.velY)):(He.x+=Jr.x*l*n,He.z+=Jr.z*l*n),He.x=kl(He.x,-tt.halfW+xr,tt.halfW-xr),He.z=kl(He.z,tt.far+xr,tt.near-xr);for(const f of mi){if(f.health.dead)continue;const _=He.x-f.root.position.x,v=He.z-f.root.position.z,m=f.footprint+xr,p=_*_+v*v;if(p>=m*m)continue;const x=Math.sqrt(p);if(x<1e-6){He.z=f.root.position.z+m;continue}He.x=f.root.position.x+_/x*m,He.z=f.root.position.z+v/x*m}_t.pushOut(He,xr);const c=He.y<=0;It.wasPressed("jump")&&!e.jump&&(c?(pr=F2,Fl=0):Fl<k2&&(pr=O2,Fl++));let h=0;u||(pr-=N2*n,He.y=Math.max(0,He.y+pr*n),He.y<=0&&(c||(h=Math.max(0,-pr)),He.y=0,pr=0)),Rt.position.set(He.x,sf+He.y,He.z),Li||_t.onEvents(Gc.update(ye)),_t.update(n),qs>-1/0&&(ye-qs>O0?qs=-1/0:!_t.locks(ye).reload&&!it.busy&&(qs=-1/0,no())),S2(n),l2(n),T2(n),C2(),(It.locked||ro.fire)&&mf(e),Ct=wx(Ct,ye).state,it.update(n,ye,{lookYaw:s,lookPitch:a,speed:l,airborne:He.y>0,landed:h}),vi.update(n),Rt.fov=it.worldFov,Rt.updateProjectionMatrix(),Rt.rotation.set(Tt.pitch+it.recoil.pitch,Tt.yaw+it.recoil.yaw,0,"YXZ"),bn.update(ye,{feet:Zs.set(He.x,He.y,He.z),yaw:Tt.yaw,pitch:Tt.pitch}),bs(),_t.lateUpdate(ye),Li&&(En.pose(ye,{base:"ready",clip:Li.id,t:Li.t,feet:Zs,facing:Tt.yaw}),En.root.visible=!0),document.body.classList.toggle("third-person",bn.active),document.body.classList.toggle("tp-aim",bn.active&&_t.aiming),uf.opacity=ye<hf?.9:0,Ra.scale.setScalar(ye<df?ff:1e-4);const d=document.getElementById("cross");d&&(d.style.opacity=(1-Pf(.5,.85,it.adsE)).toFixed(3)),Il.x=He.x,Il.z=He.z;for(const f of mi)CS(f,n,ye,{face:Il});IS(n),Df(n),It.endFrame()}const X2=new co;function Cf(){if(Oi&&!Ar&&!Li){Dn.setClearColor(0,0),Dn.render(X2,ln);return}Dn.render(ht,ln),!bn.active&&!Ar&&vi.pass(Dn,ln),ti&&ci&&Qt&&ci.render(di,ms)}function q2(){Oi=!1,Dn.setClearColor(0,1)}const Y2=new I,$2=new zt,K2=new en(0,0,0,"YXZ");function bs(){if(Ar)ln.position.set(...Ar.position),ln.lookAt(...Ar.target),ln.fov=Ta;else if(bn.active)bn.apply(ln);else{const n=it.camOffset;ln.position.copy(Rt.position).add(Y2.set(n.x,n.y,n.z).applyQuaternion(Rt.quaternion)),ln.quaternion.copy(Rt.quaternion).multiply($2.setFromEuler(K2.set(n.pitch,n.yaw,n.roll,"YXZ"))),ln.fov=Rt.fov}ln.aspect=Rt.aspect,ln.updateProjectionMatrix(),ln.updateMatrixWorld()}const Kh=132,jh=48;function j2(){const n=document.createElement("canvas");n.width=Kh,n.height=jh;let e;try{e=new hc({canvas:n,alpha:!0,antialias:!0,preserveDrawingBuffer:!0})}catch{return _i.map(()=>"")}e.setClearColor(0,0);const t=new co;t.overrideMaterial=new dn({color:16777215});const i=new cc(-1,1,1,-1,.01,10),r=new I,s=new I,a=ya.map(o=>ef(o,{icon:!0})).map(({group:o})=>{const l=o;t.add(l),l.updateMatrixWorld(!0);const u=new Ni().setFromObject(l);u.getSize(r),u.getCenter(s);let c=r.z/2*1.08,h=r.y/2*1.08;const d=Kh/jh;return c/h>d?h=c/d:c=h*d,i.left=-c,i.right=c,i.top=h,i.bottom=-h,i.position.set(s.x+2,s.y,s.z),i.lookAt(s),i.updateProjectionMatrix(),e.render(t,i),t.remove(l),n.toDataURL("image/png")});return t.overrideMaterial.dispose(),e.dispose(),e.forceContextLoss(),a}const Y0=j2(),Bl=60,Z2=Math.cos(oo.degToRad(4)),Zh=2.5,Jh=new Map,Qr=new Od,es=new I,zl=new I,Hl=new I,Gl=new I;function J2(n,e){let t=Jh.get(n);return t||(t=document.createElement("div"),t.className=`plate ${n.rank}`,t.innerHTML=`<div class="col"><div class="name">${n.name}</div><div class="bar"><i class="fill"></i><i class="shield"></i></div></div>`,e.appendChild(t),Jh.set(n,t),t)}function Q2(){var r;const n=document.getElementById("nameplates");if(!n)return;Rt.updateMatrixWorld(),Rt.getWorldDirection(Hl),Qr.set(Rt.position,Hl),Qr.far=Bl;const e=((r=to(Qr))==null?void 0:r.target)??null,t=innerWidth||1280,i=innerHeight||720;for(const s of mi){const a=J2(s,n);Cc(s,.62,zl);const o=zl.distanceTo(Rt.position);let l=s===e;if(!l&&o<Bl&&(Gl.copy(zl).sub(Rt.position).divideScalar(o||1),Gl.dot(Hl)>Z2)){Qr.set(Rt.position,Gl),Qr.far=o;const f=to(Qr);l=!f||f.target===s}l&&(s.plateSeenAt=ye);const u=o<Bl&&(ye-(s.plateSeenAt??-1/0)<Zh||ye-s.lastHitAt<Zh);es.set(s.root.position.x,s.root.position.y+s.top+.2,s.root.position.z).project(ln);const c=es.z<1&&Math.abs(es.x)<1.05&&Math.abs(es.y)<1.05;if(a.hidden=s.health.dead||!c,a.classList.toggle("on",u),a.hidden)continue;const h=(es.x*.5+.5)*t,d=(-es.y*.5+.5)*i;a.style.transform=`translate(${h.toFixed(1)}px, ${d.toFixed(1)}px) translate(-50%, -100%)`,a.querySelector(".fill").style.width=`${(Xd(s.health)*100).toFixed(1)}%`,a.querySelector(".shield").style.width=`${(wc(s.health)*100).toFixed(1)}%`}}function ey(n,e,t){const i=document.getElementById(n);i&&(i.style.setProperty("--pct",`${Math.round(e*100)}%`),i.classList.toggle("ready",t))}const Ys=Math.PI*2,ls=8,Vl=24,ty=48,ny=.8,is=92,ts=is*.4,$0=[];let Lf=-1/0;const iy="http://www.w3.org/2000/svg",br=(n,e)=>`${(100+n*Math.sin(e)).toFixed(2)} ${(100-n*Math.cos(e)).toFixed(2)}`,Qh=(n,e,t)=>`M${br(n,e)} A${n} ${n} 0 0 1 ${br(n,t)}`;function Xi(n,e){const t=document.createElementNS(iy,n);for(const[i,r]of Object.entries(e))t.setAttribute(i,String(r));return t}function ry(){const n=document.getElementById("radar-svg");if(!n)return;Xi("defs",{}),n.appendChild(Xi("circle",{cx:100,cy:100,r:is,fill:"rgba(12,17,22,0.38)",stroke:"rgba(255,255,255,0.24)","stroke-width":1.4})),n.appendChild(Xi("circle",{cx:100,cy:100,r:ts,fill:"none",stroke:"rgba(255,255,255,0.2)","stroke-width":1.2}));const e=Ys/ls,t=oo.degToRad(1.5);for(let i=0;i<ls;i++){const r=(i-.5)*e+t/2,s=(i+.5)*e-t/2,a=Xi("path",{d:`M${br(ts,r)} L${br(is,r)} A${is} ${is} 0 0 1 ${br(is,s)} L${br(ts,s)} A${ts} ${ts} 0 0 0 ${br(ts,r)} Z`,fill:"#b8452f",opacity:0}),o=(r+s)/2,l=(s-r)*.3,u=Xi("g",{opacity:0});u.append(Xi("path",{d:Qh(96,r,s),fill:"none",stroke:"#e04a32","stroke-width":3,opacity:.4}),Xi("path",{d:Qh(96,o-l,o+l),fill:"none",stroke:"#e04a32","stroke-width":3})),n.append(a,u),$0.push({fill:a,far:u,near:0,farValue:0})}n.appendChild(Xi("path",{d:"M100 90 L107.5 109 L100 104.5 L92.5 109 Z",fill:"#4a82e6",stroke:"#a9c6f5","stroke-width":1.2,"stroke-linejoin":"round"}))}ry();const ed=(n,e,t)=>n+(e-n)*Math.min(1,t/(e>n?.15:.4));function Pf(n,e,t){const i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)}function sy(n){var r;if((r=document.getElementById("radar"))==null||r.classList.toggle("ads",ye-Lf<ny),!$0.length)return;const e=new Array(ls).fill(0),t=new Array(ls).fill(0),i=Ys/ls;for(const s of mi){if(s.health.dead)continue;const a=s.root.position.x-He.x,o=s.root.position.z-He.z,l=Math.hypot(a,o);if(l>ty)continue;const u=((Math.atan2(a,-o)+Tt.yaw)%Ys+Ys)%Ys,c=Math.round(u/i)%ls;l>=Vl*.7&&(t[c]=1),l<Vl&&(e[c]=Math.max(e[c],1-l/Vl))}$0.forEach((s,a)=>{s.near=ed(s.near,e[a],n),s.farValue=ed(s.farValue,t[a],n),s.fill.setAttribute("opacity",(.7*Pf(0,.75,s.near)).toFixed(2)),s.far.setAttribute("opacity",s.farValue.toFixed(2))})}function In(n,e){n&&n.textContent!==e&&(n.textContent=e)}const oy=.7;let Gs,Vs,Wl=-1/0;function ay(n){return n!=null&&n.progress?n.progress==="kills"?`${as.id===n.id?as.n:0}/${n.count??1}`:n.progress==="super"?`${Math.round(Un*100)}%`:n.progress==="special"?fs.length?"Dropped":`${Math.round(Ji*100)}%`:"":""}function ly(n){return(n==null?void 0:n.progress)==="kills"?`${n.count??1}/${n.count??1}`:(n==null?void 0:n.progress)==="super"?"100%":(n==null?void 0:n.progress)==="special"?"Collected":""}let Xl=null;function cy(){const n=document.getElementById("objective");if(!n)return;const e=n.querySelector(".obj.main"),t=n.querySelector(".obj.sub"),i=n.querySelector(".obj.value"),r=Ut.begun?Ut.over?L2:Ut.objective:null;if(r!==Gs&&r!==Vs&&(Vs=r,Gs?(Wl=ye+oy,n.classList.remove("fresh"),n.classList.add("complete"),In(e.querySelector(".key"),""),In(i.querySelector(".count"),ly(Xl))):Wl=ye),Vs!==void 0&&ye>=Wl&&(Gs=Vs,Vs=void 0,Xl=Ut.over?null:Ut.beat,n.hidden=!Gs,In(e.querySelector(".text"),Gs??""),n.classList.remove("complete","fresh"),n.offsetWidth,n.classList.add("fresh")),n.classList.contains("complete"))return;const s=Xl,a=!!(s!=null&&s.progress);e.classList.toggle("step",a),In(e.querySelector(".key"),(s==null?void 0:s.key)??""),t.hidden=!a,i.hidden=!a,a&&(In(t.querySelector(".label"),s.label??""),In(i.querySelector(".count"),ay(s)))}function uy(){const n=document.getElementById("buff-ward");if(!n)return;const e=kc-ye;n.hidden=e<=0,e>0&&In(n.querySelector(".time"),`${Math.ceil(e)}s`)}let td=La;function hy(){var s;const n=document.getElementById("vitals");if(!n)return;const e=Xd(Yt),t=wc(Yt),i=Yt.shield<=0;n.classList.toggle("shown",e<1||t<1),n.classList.toggle("broken",i&&e<1),n.classList.toggle("critical",i&&e<.5),i&&td>0&&(n.classList.remove("shattered"),n.offsetWidth,n.classList.add("shattered")),td=Yt.shield,n.style.setProperty("--hp",e.toFixed(3)),n.style.setProperty("--sh",t.toFixed(3)),(s=document.getElementById("zone"))==null||s.classList.toggle("on",xf);const r=document.getElementById("vignette");r&&(r.style.opacity=i?Math.min(.9,(1-e)*1.2).toFixed(2):"0")}function dy(){const n=document.getElementById("comms"),e=document.getElementById("subtitle");if(!n||!e)return;const t=vn.current,i=!!t||ye-vn.endedAt<A2;n.classList.toggle("on",i),e.classList.toggle("on",i),t&&(In(n.querySelector(".speaker"),Sf[t.speaker].name),In(e.querySelector(".line"),t.text))}let nd=null;function fy(){const n=document.getElementById("weapons");return n?(n.innerHTML=_i.map((e,t)=>`
    <div class="wpn">
      ${Y0[t]?`<img class="icon" alt="" src="${Y0[t]}">`:'<span class="icon"></span>'}
      <span class="ammo-type ${e.ammoType}"><i></i><i></i><i></i></span>
      <span class="reserve"></span>
      <span class="mag"></span>
      ${e.ammoType==="special"?'<div class="meter"><div class="fill"></div></div>':""}
    </div>`).join(""),[...n.querySelectorAll(".wpn")]):[]}let id=!1;function If(){const n=document.getElementById("super-flash");n&&(n.classList.remove("show"),n.offsetWidth,n.classList.add("show"))}function py(){const n=document.getElementById("super");if(n){const t=Un>=1;n.style.setProperty("--charge",Un.toFixed(3)),n.classList.toggle("ready",t),t&&!id&&If(),id=t}for(const[t,i]of[["ab-grenade","grenade"],["ab-melee","melee"],["ab-class","class"]]){const r=Math.max(0,Tr[i].readyAt-ye),s=Tr[i].cooldown>0?r/Tr[i].cooldown:0;ey(t,s,r<=0)}nd??(nd=fy());const e="∞";nd.forEach((t,i)=>{const r=i===Gn,s=r?Ct:Pi[i],a=s.reserve===1/0;t.classList.toggle("active",r),t.style.order=r?"0":String(i+1),r?(In(t.querySelector(".mag"),String(s.loaded)),In(t.querySelector(".reserve"),a?e:String(s.reserve))):(In(t.querySelector(".mag"),""),In(t.querySelector(".reserve"),a?e:String(s.loaded+s.reserve))),t.classList.toggle("low",s.loaded<=Math.floor(s.magazine*.2)),t.classList.toggle("empty",!a&&s.loaded+s.reserve===0);const o=t.querySelector(".meter");o&&(o.firstElementChild.style.width=`${Math.round(Ji*100)}%`,o.classList.toggle("full",Ji>=1))})}function Df(n=0){sy(n),Q2(),cy(),uy(),hy(),dy(),py()}addEventListener("resize",()=>{if(!(!innerWidth||!innerHeight)){Dn.setSize(innerWidth,innerHeight,!1);for(const n of[Rt,ln])n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix()}});let rd=performance.now();function Uf(n){const e=Math.min((n-rd)/1e3,.25);rd=n,Rf(e),Cf(),requestAnimationFrame(Uf)}requestAnimationFrame(Uf);window.game={scene:ht,camera:Rt,renderCamera:ln,renderer:Dn,view:Tt,player:He,weapon:()=>Ct,targets:mi,update:Rf,render:Cf,viewmodel:vi,units:Fc,strikeRay:to,hitTarget:mo,input:It,attemptFire:mf,doReload:no,throwGrenade:()=>_t.press("grenade"),doMelee:()=>_t.press("melee"),useClassAbility:()=>_t.press("class"),useSuper:()=>_t.press("super"),ability:()=>Tr,superCharge:()=>Un,setSuperCharge:tr.setSuperCharge,switchWeapon:ds,weaponDefs:()=>_i,activeWeapon:()=>Gn,fp:it,debug:ro,specialMeter:()=>Ji,ammoBricks:()=>fs,weaponStates:Pi,toggleMenu:Pa,menuOpen:()=>ti,setGarment:Vc,previewBody:()=>Qt,guardian:{get body(){return En},get previewBody(){return Qt},runner:Gc,moment:bn,game:_t,comfort:Rc,seam:tr,data:{ABILITIES:Qn,CLASSES:Vn,ELEMENTS:po,MOMENTS:Lr,NAMES:PM},poseAt:H2,fpAt:G2,silhouette:q0,stage:V2,previewView:W2},episode:Ut,comms:vn,sayLine:Hc,hurtPlayer:Mf,playerHealth:()=>Yt,updateHud:Df,weaponIcons:Y0,setRestrictedZone:n=>{xf=!!n},start:{open:(n,e)=>ni.open(n,e),state:()=>ni.state(),skip:()=>ni.skip()},simTime:()=>ye};console.log(`PRE-DESTINY test range booted — ${mi.length} enemies in two lanes, magazine ${Ct.magazine}, reserve ${Ct.reserve}, reload ${Ct.reloadTime}s`);ni.ready();
