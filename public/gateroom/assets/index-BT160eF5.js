(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Go="169",fm={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},pm={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$d=0,wl=1,Jd=2,mm=3,gm=0,Yl=1,ql=2,Un=3,Hn=0,Xe=1,On=2,si=0,es=1,Al=2,El=3,Tl=4,Qd=5,Si=100,jd=101,tf=102,ef=103,nf=104,sf=200,rf=201,af=202,of=203,io=204,so=205,cf=206,lf=207,hf=208,uf=209,df=210,ff=211,pf=212,mf=213,gf=214,ro=0,ao=1,oo=2,rs=3,co=4,lo=5,ho=6,uo=7,Wr=0,_f=1,xf=2,ri=0,yf=1,vf=2,Mf=3,Zl=4,Sf=5,bf=6,wf=7,Rl="attached",Af="detached",Wo=300,ai=301,Ei=302,Ar=303,Er=304,Ks=306,Vs=1e3,un=1001,Tr=1002,Pe=1003,Kl=1004,_m=1004,Ns=1005,xm=1005,Se=1006,mr=1007,ym=1007,Tn=1008,vm=1008,Vn=1009,$l=1010,Jl=1011,Gs=1012,Xo=1013,oi=1014,en=1015,$s=1016,Yo=1017,qo=1018,as=1020,Ql=35902,jl=1021,th=1022,We=1023,eh=1024,nh=1025,ns=1026,os=1027,Zo=1028,Xr=1029,ih=1030,Ko=1031,Mm=1032,$o=1033,gr=33776,_r=33777,xr=33778,yr=33779,fo=35840,po=35841,mo=35842,go=35843,_o=36196,xo=37492,yo=37496,vo=37808,Mo=37809,So=37810,bo=37811,wo=37812,Ao=37813,Eo=37814,To=37815,Ro=37816,Co=37817,Io=37818,Po=37819,Lo=37820,Do=37821,vr=36492,Uo=36494,No=36495,sh=36283,Oo=36284,Fo=36285,Bo=36286,Ef=2200,Tf=2201,Rf=2202,Rr=2300,zo=2301,ja=2302,Ji=2400,Qi=2401,Cr=2402,Jo=2500,rh=2501,Sm=0,bm=1,wm=2,Cf=3200,If=3201,Am=3202,Em=3203,Ci=0,Pf=1,ei="",je="srgb",li="srgb-linear",Qo="display-p3",Yr="display-p3-linear",Ir="linear",he="srgb",Pr="rec709",Lr="p3",Tm=0,Zi=7680,Rm=7681,Cm=7682,Im=7683,Pm=34055,Lm=34056,Dm=5386,Um=512,Nm=513,Om=514,Fm=515,Bm=516,zm=517,km=518,Cl=519,Lf=512,Df=513,Uf=514,ah=515,Nf=516,Of=517,Ff=518,Bf=519,Dr=35044,Hm=35048,Vm=35040,Gm=35045,Wm=35049,Xm=35041,Ym=35046,qm=35050,Zm=35042,Km="100",Il="300 es",Fn=2e3,Ur=2001;class Wn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tu=1234567;const is=Math.PI/180,Ws=180/Math.PI;function fn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[s&255]+Ue[s>>8&255]+Ue[s>>16&255]+Ue[s>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function xe(s,t,e){return Math.max(t,Math.min(e,s))}function oh(s,t){return(s%t+t)%t}function $m(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Jm(s,t,e){return s!==t?(e-s)/(t-s):0}function Mr(s,t,e){return(1-e)*s+e*t}function Qm(s,t,e,n){return Mr(s,t,1-Math.exp(-e*n))}function jm(s,t=1){return t-Math.abs(oh(s,t*2)-t)}function t0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function e0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function n0(s,t){return s+Math.floor(Math.random()*(t-s+1))}function i0(s,t){return s+Math.random()*(t-s)}function s0(s){return s*(.5-Math.random())}function r0(s){s!==void 0&&(tu=s);let t=tu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function a0(s){return s*is}function o0(s){return s*Ws}function c0(s){return(s&s-1)===0&&s!==0}function l0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function h0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function u0(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),p=a((n-t)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*p,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*p,o*l);break;case"ZYZ":s.set(c*p,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ge(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Yt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const d0={DEG2RAD:is,RAD2DEG:Ws,generateUUID:fn,clamp:xe,euclideanModulo:oh,mapLinear:$m,inverseLerp:Jm,lerp:Mr,damp:Qm,pingpong:jm,smoothstep:t0,smootherstep:e0,randInt:n0,randFloat:i0,randFloatSpread:s0,seededRandom:r0,degToRad:a0,radToDeg:o0,isPowerOfTwo:c0,ceilPowerOfTwo:l0,floorPowerOfTwo:h0,setQuaternionFromProperEuler:u0,normalize:Yt,denormalize:Ge};class j{constructor(t=0,e=0){j.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,i,r,a,o,c,l){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],_=i[0],g=i[3],m=i[6],y=i[1],x=i[4],M=i[7],R=i[2],A=i[5],w=i[8];return r[0]=a*_+o*y+c*R,r[3]=a*g+o*x+c*A,r[6]=a*m+o*M+c*w,r[1]=l*_+h*y+u*R,r[4]=l*g+h*x+u*A,r[7]=l*m+h*M+u*w,r[2]=d*_+f*y+p*R,r[5]=d*g+f*x+p*A,r[8]=d*m+f*M+p*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,p=e*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=u*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Lc.makeScale(t,e)),this}rotate(t){return this.premultiply(Lc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Lc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Lc=new Gt;function zf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}const f0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Os(s,t){return new f0[s](t)}function Nr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function kf(){const s=Nr("canvas");return s.style.display="block",s}const eu={};function to(s){s in eu||(eu[s]=!0,console.warn(s))}function p0(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function m0(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function g0(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const nu=new Gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),iu=new Gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),js={[li]:{transfer:Ir,primaries:Pr,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[je]:{transfer:he,primaries:Pr,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Yr]:{transfer:Ir,primaries:Lr,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(iu),fromReference:s=>s.applyMatrix3(nu)},[Qo]:{transfer:he,primaries:Lr,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(iu),fromReference:s=>s.applyMatrix3(nu).convertLinearToSRGB()}},_0=new Set([li,Yr]),ne={enabled:!0,_workingColorSpace:li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!_0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=js[t].toReference,i=js[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return js[s].primaries},getTransfer:function(s){return s===ei?Ir:js[s].transfer},getLuminanceCoefficients:function(s,t=this._workingColorSpace){return s.fromArray(js[t].luminanceCoefficients)}};function ks(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Dc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let _s;class Hf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_s===void 0&&(_s=Nr("canvas")),_s.width=t.width,_s.height=t.height;const n=_s.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_s}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Nr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ks(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ks(e[n]/255)*255):e[n]=ks(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let x0=0;class ji{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=fn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Uc(i[a].image)):r.push(Uc(i[a]))}else r=Uc(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Uc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Hf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let y0=0;class ye extends Wn{constructor(t=ye.DEFAULT_IMAGE,e=ye.DEFAULT_MAPPING,n=un,i=un,r=Se,a=Tn,o=We,c=Vn,l=ye.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=fn(),this.name="",this.source=new ji(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vs:t.x=t.x-Math.floor(t.x);break;case un:t.x=t.x<0?0:1;break;case Tr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vs:t.y=t.y-Math.floor(t.y);break;case un:t.y=t.y<0?0:1;break;case Tr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ye.DEFAULT_IMAGE=null;ye.DEFAULT_MAPPING=Wo;ye.DEFAULT_ANISOTROPY=1;class te{constructor(t=0,e=0,n=0,i=1){te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],p=c[9],_=c[2],g=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,M=(f+1)/2,R=(m+1)/2,A=(h+d)/4,w=(u+_)/4,C=(p+g)/4;return x>M&&x>R?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=A/n,r=w/n):M>R?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=A/i,r=C/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=w/r,i=C/r),this.set(n,i,r,e),this}let y=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vf extends Wn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Se,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ye(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ji(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends Vf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class jo extends ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class v0 extends Cn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new jo(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class ch extends ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class M0 extends Cn{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new ch(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class nn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],p=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=p,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==p){let g=1-o;const m=c*d+l*f+h*p+u*_,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const R=Math.sqrt(x),A=Math.atan2(R,m*y);g=Math.sin(g*A)/R,o=Math.sin(o*A)/R}const M=o*y;if(c=c*g+d*M,l=l*g+f*M,h=h*g+p*M,u=u*g+_*M,g===1-o){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*u+c*f-l*d,t[e+1]=c*p+h*d+l*u-o*f,t[e+2]=l*p+h*f+o*d-c*u,t[e+3]=h*p-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),p=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u+d*f*p;break;case"YZX":this._x=d*h*u+l*f*p,this._y=l*f*u+d*h*p,this._z=l*h*p-d*f*u,this._w=l*h*u-d*f*p;break;case"XZY":this._x=d*h*u-l*f*p,this._y=l*f*u-d*h*p,this._z=l*h*p+d*f*u,this._w=l*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(su.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(su.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Nc.copy(this).projectOnVector(t),this.sub(Nc)}reflect(t){return this.sub(Nc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nc=new P,su=new nn;class Be{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox)),sa.applyMatrix4(t.matrixWorld),this.union(sa)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(tr),ra.subVectors(this.max,tr),xs.subVectors(t.a,tr),ys.subVectors(t.b,tr),vs.subVectors(t.c,tr),ui.subVectors(ys,xs),di.subVectors(vs,ys),Ni.subVectors(xs,vs);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ni.z,Ni.y,ui.z,0,-ui.x,di.z,0,-di.x,Ni.z,0,-Ni.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ni.y,Ni.x,0];return!Oc(e,xs,ys,vs,ra)||(e=[1,0,0,0,1,0,0,0,1],!Oc(e,xs,ys,vs,ra))?!1:(aa.crossVectors(ui,di),e=[aa.x,aa.y,aa.z],Oc(e,xs,ys,vs,ra))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Kn=[new P,new P,new P,new P,new P,new P,new P,new P],Mn=new P,sa=new Be,xs=new P,ys=new P,vs=new P,ui=new P,di=new P,Ni=new P,tr=new P,ra=new P,aa=new P,Oi=new P;function Oc(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Oi.fromArray(s,r);const o=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),c=t.dot(Oi),l=e.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const S0=new Be,er=new P,Fc=new P;class ze{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):S0.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;er.subVectors(t,this.center);const e=er.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(er,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(er.copy(t.center).add(Fc)),this.expandByPoint(er.copy(t.center).sub(Fc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new P,Bc=new P,oa=new P,fi=new P,zc=new P,ca=new P,kc=new P;class Js{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Bc.copy(t).add(e).multiplyScalar(.5),oa.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(Bc);const r=t.distanceTo(e)*.5,a=-this.direction.dot(oa),o=fi.dot(this.direction),c=-fi.dot(oa),l=fi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,p;if(h>0)if(u=a*c-o,d=a*o-c,p=r*h,u>=0)if(d>=-p)if(d<=p){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=p?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Bc).addScaledVector(oa,d),f}intersectSphere(t,e){$n.subVectors(t.center,this.origin);const n=$n.dot(this.direction),i=$n.dot($n)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,i,r){zc.subVectors(e,t),ca.subVectors(n,t),kc.crossVectors(zc,ca);let a=this.direction.dot(kc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,t);const c=o*this.direction.dot(ca.crossVectors(fi,ca));if(c<0)return null;const l=o*this.direction.dot(zc.cross(fi));if(l<0||c+l>a)return null;const h=-o*fi.dot(kc);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(t,e,n,i,r,a,o,c,l,h,u,d,f,p,_,g){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,u,d,f,p,_,g)}set(t,e,n,i,r,a,o,c,l,h,u,d,f,p,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ms.setFromMatrixColumn(t,0).length(),r=1/Ms.setFromMatrixColumn(t,1).length(),a=1/Ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,f=a*u,p=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+p*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=p+f*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,p=l*h,_=l*u;e[0]=d+_*o,e[4]=p*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,p=l*h,_=l*u;e[0]=d-_*o,e[4]=-a*u,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*h,f=a*u,p=o*h,_=o*u;e[0]=c*h,e[4]=p*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-p,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,f=a*l,p=o*c,_=o*l;e[0]=c*h,e[4]=_-d*u,e[8]=p*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+p,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*c,f=a*l,p=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=a*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(b0,t,w0)}lookAt(t,e,n){const i=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),pi.crossVectors(n,on),pi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),pi.crossVectors(n,on)),pi.normalize(),la.crossVectors(on,pi),i[0]=pi.x,i[4]=la.x,i[8]=on.x,i[1]=pi.y,i[5]=la.y,i[9]=on.y,i[2]=pi.z,i[6]=la.z,i[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],y=n[3],x=n[7],M=n[11],R=n[15],A=i[0],w=i[4],C=i[8],B=i[12],v=i[1],b=i[5],N=i[9],L=i[13],D=i[2],G=i[6],O=i[10],W=i[14],V=i[3],nt=i[7],at=i[11],dt=i[15];return r[0]=a*A+o*v+c*D+l*V,r[4]=a*w+o*b+c*G+l*nt,r[8]=a*C+o*N+c*O+l*at,r[12]=a*B+o*L+c*W+l*dt,r[1]=h*A+u*v+d*D+f*V,r[5]=h*w+u*b+d*G+f*nt,r[9]=h*C+u*N+d*O+f*at,r[13]=h*B+u*L+d*W+f*dt,r[2]=p*A+_*v+g*D+m*V,r[6]=p*w+_*b+g*G+m*nt,r[10]=p*C+_*N+g*O+m*at,r[14]=p*B+_*L+g*W+m*dt,r[3]=y*A+x*v+M*D+R*V,r[7]=y*w+x*b+M*G+R*nt,r[11]=y*C+x*N+M*O+R*at,r[15]=y*B+x*L+M*W+R*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15];return p*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+_*(+e*c*f-e*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+g*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+m*(-i*o*h-e*c*u+e*o*d+i*a*u-n*a*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],y=u*g*l-_*d*l+_*c*f-o*g*f-u*c*m+o*d*m,x=p*d*l-h*g*l-p*c*f+a*g*f+h*c*m-a*d*m,M=h*_*l-p*u*l+p*o*f-a*_*f-h*o*m+a*u*m,R=p*u*c-h*_*c-p*o*d+a*_*d+h*o*g-a*u*g,A=e*y+n*x+i*M+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=y*w,t[1]=(_*d*r-u*g*r-_*i*f+n*g*f+u*i*m-n*d*m)*w,t[2]=(o*g*r-_*c*r+_*i*l-n*g*l-o*i*m+n*c*m)*w,t[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*w,t[4]=x*w,t[5]=(h*g*r-p*d*r+p*i*f-e*g*f-h*i*m+e*d*m)*w,t[6]=(p*c*r-a*g*r-p*i*l+e*g*l+a*i*m-e*c*m)*w,t[7]=(a*d*r-h*c*r+h*i*l-e*d*l-a*i*f+e*c*f)*w,t[8]=M*w,t[9]=(p*u*r-h*_*r-p*n*f+e*_*f+h*n*m-e*u*m)*w,t[10]=(a*_*r-p*o*r+p*n*l-e*_*l-a*n*m+e*o*m)*w,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*w,t[12]=R*w,t[13]=(h*_*i-p*u*i+p*n*d-e*_*d-h*n*g+e*u*g)*w,t[14]=(p*o*i-a*_*i-p*n*c+e*_*c+a*n*g-e*o*g)*w,t[15]=(a*u*i-h*o*i+h*n*c-e*u*c-a*n*d+e*o*d)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,p=r*u,_=a*h,g=a*u,m=o*u,y=c*l,x=c*h,M=c*u,R=n.x,A=n.y,w=n.z;return i[0]=(1-(_+m))*R,i[1]=(f+M)*R,i[2]=(p-x)*R,i[3]=0,i[4]=(f-M)*A,i[5]=(1-(d+m))*A,i[6]=(g+y)*A,i[7]=0,i[8]=(p+x)*w,i[9]=(g-y)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ms.set(i[0],i[1],i[2]).length();const a=Ms.set(i[4],i[5],i[6]).length(),o=Ms.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Sn.copy(this);const l=1/r,h=1/a,u=1/o;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,e.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Fn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,p;if(o===Fn)f=-(a+r)/(a-r),p=-2*a*r/(a-r);else if(o===Ur)f=-a/(a-r),p=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Fn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*l,f=(n+i)*h;let p,_;if(o===Fn)p=(a+r)*u,_=-2*u;else if(o===Ur)p=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ms=new P,Sn=new Ot,b0=new P(0,0,0),w0=new P(1,1,1),pi=new P,la=new P,on=new P,ru=new Ot,au=new nn;class pn{constructor(t=0,e=0,n=0,i=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ru,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return au.setFromEuler(this),this.setFromQuaternion(au,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class tc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let A0=0;const ou=new P,Ss=new nn,Jn=new Ot,ha=new P,nr=new P,E0=new P,T0=new nn,cu=new P(1,0,0),lu=new P(0,1,0),hu=new P(0,0,1),uu={type:"added"},R0={type:"removed"},bs={type:"childadded",child:null},Hc={type:"childremoved",child:null};class ee extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ee.DEFAULT_UP.clone();const t=new P,e=new pn,n=new nn,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ot},normalMatrix:{value:new Gt}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(cu,t)}rotateY(t){return this.rotateOnAxis(lu,t)}rotateZ(t){return this.rotateOnAxis(hu,t)}translateOnAxis(t,e){return ou.copy(t).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cu,t)}translateY(t){return this.translateOnAxis(lu,t)}translateZ(t){return this.translateOnAxis(hu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ha.copy(t):ha.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(nr,ha,this.up):Jn.lookAt(ha,nr,this.up),this.quaternion.setFromRotationMatrix(Jn),i&&(Jn.extractRotation(i.matrixWorld),Ss.setFromRotationMatrix(Jn),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uu),bs.child=t,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(R0),Hc.child=t,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uu),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,E0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,T0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ee.DEFAULT_UP=new P(0,1,0);ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new P,Qn=new P,Vc=new P,jn=new P,ws=new P,As=new P,du=new P,Gc=new P,Wc=new P,Xc=new P,Yc=new te,qc=new te,Zc=new te;class tn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),bn.subVectors(t,e),i.cross(bn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){bn.subVectors(i,e),Qn.subVectors(n,e),Vc.subVectors(t,e);const a=bn.dot(bn),o=bn.dot(Qn),c=bn.dot(Vc),l=Qn.dot(Qn),h=Qn.dot(Vc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,p=(a*h-o*c)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,jn.x),c.addScaledVector(a,jn.y),c.addScaledVector(o,jn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return Yc.setScalar(0),qc.setScalar(0),Zc.setScalar(0),Yc.fromBufferAttribute(t,e),qc.fromBufferAttribute(t,n),Zc.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Yc,r.x),a.addScaledVector(qc,r.y),a.addScaledVector(Zc,r.z),a}static isFrontFacing(t,e,n,i){return bn.subVectors(n,e),Qn.subVectors(t,e),bn.cross(Qn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),bn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return tn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ws.subVectors(i,n),As.subVectors(r,n),Gc.subVectors(t,n);const c=ws.dot(Gc),l=As.dot(Gc);if(c<=0&&l<=0)return e.copy(n);Wc.subVectors(t,i);const h=ws.dot(Wc),u=As.dot(Wc);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ws,a);Xc.subVectors(t,r);const f=ws.dot(Xc),p=As.dot(Xc);if(p>=0&&f<=p)return e.copy(r);const _=f*l-c*p;if(_<=0&&l>=0&&p<=0)return o=l/(l-p),e.copy(n).addScaledVector(As,o);const g=h*p-f*u;if(g<=0&&u-h>=0&&f-p>=0)return du.subVectors(r,i),o=(u-h)/(u-h+(f-p)),e.copy(i).addScaledVector(du,o);const m=1/(g+_+d);return a=_*m,o=d*m,e.copy(n).addScaledVector(ws,a).addScaledVector(As,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},ua={h:0,s:0,l:0};function Kc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=oh(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Kc(a,r,t+1/3),this.g=Kc(a,r,t),this.b=Kc(a,r,t-1/3)}return ne.toWorkingColorSpace(this,i),this}setStyle(t,e=je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=je){const n=Gf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}copyLinearToSRGB(t){return this.r=Dc(t.r),this.g=Dc(t.g),this.b=Dc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=je){return ne.fromWorkingColorSpace(Ne.copy(this),t),Math.round(xe(Ne.r*255,0,255))*65536+Math.round(xe(Ne.g*255,0,255))*256+Math.round(xe(Ne.b*255,0,255))}getHexString(t=je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,i=Ne.g,r=Ne.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=je){ne.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,i=Ne.b;return t!==je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(ua);const n=Mr(mi.h,ua.h,e),i=Mr(mi.s,ua.s,e),r=Mr(mi.l,ua.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new xt;xt.NAMES=Gf;let C0=0;class ke extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:C0++}),this.uuid=fn(),this.name="",this.type="Material",this.blending=es,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=io,this.blendDst=so,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==io&&(n.blendSrc=this.blendSrc),this.blendDst!==so&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ii extends ke{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ni=I0();function I0(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function Je(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=xe(s,-65504,65504),ni.floatView[0]=s;const t=ni.uint32View[0],e=t>>23&511;return ni.baseTable[e]+((t&8388607)>>ni.shiftTable[e])}function fr(s){const t=s>>10;return ni.uint32View[0]=ni.mantissaTable[ni.offsetTable[t]+(s&1023)]+ni.exponentTable[t],ni.floatView[0]}const P0={toHalfFloat:Je,fromHalfFloat:fr},Ae=new P,da=new j;class Kt{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dr,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)da.fromBufferAttribute(this,e),da.applyMatrix3(t),this.setXY(e,da.x,da.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ge(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ge(e,this.array)),e}setX(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ge(e,this.array)),e}setY(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ge(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ge(e,this.array)),e}setW(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array),i=Yt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dr&&(t.usage=this.usage),t}}class L0 extends Kt{constructor(t,e,n){super(new Int8Array(t),e,n)}}class D0 extends Kt{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class U0 extends Kt{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class N0 extends Kt{constructor(t,e,n){super(new Int16Array(t),e,n)}}class lh extends Kt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class O0 extends Kt{constructor(t,e,n){super(new Int32Array(t),e,n)}}class hh extends Kt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class F0 extends Kt{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=fr(this.array[t*this.itemSize]);return this.normalized&&(e=Ge(e,this.array)),e}setX(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize]=Je(e),this}getY(t){let e=fr(this.array[t*this.itemSize+1]);return this.normalized&&(e=Ge(e,this.array)),e}setY(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize+1]=Je(e),this}getZ(t){let e=fr(this.array[t*this.itemSize+2]);return this.normalized&&(e=Ge(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize+2]=Je(e),this}getW(t){let e=fr(this.array[t*this.itemSize+3]);return this.normalized&&(e=Ge(e,this.array)),e}setW(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize+3]=Je(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array)),this.array[t+0]=Je(e),this.array[t+1]=Je(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array),i=Yt(i,this.array)),this.array[t+0]=Je(e),this.array[t+1]=Je(n),this.array[t+2]=Je(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[t+0]=Je(e),this.array[t+1]=Je(n),this.array[t+2]=Je(i),this.array[t+3]=Je(r),this}}class Ct extends Kt{constructor(t,e,n){super(new Float32Array(t),e,n)}}let B0=0;const gn=new Ot,$c=new ee,Es=new P,cn=new Be,ir=new Be,Ce=new P;class Wt extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zf(t)?hh:lh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return $c.lookAt(t),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ct(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Be);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ze);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(cn.min,ir.min),cn.expandByPoint(Ce),Ce.addVectors(cn.max,ir.max),cn.expandByPoint(Ce)):(cn.expandByPoint(ir.min),cn.expandByPoint(ir.max))}cn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ce.fromBufferAttribute(o,l),c&&(Es.fromBufferAttribute(t,l),Ce.add(Es)),i=Math.max(i,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new P,c[C]=new P;const l=new P,h=new P,u=new P,d=new j,f=new j,p=new j,_=new P,g=new P;function m(C,B,v){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,B),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,B),p.fromBufferAttribute(r,v),h.sub(l),u.sub(l),f.sub(d),p.sub(d);const b=1/(f.x*p.y-p.x*f.y);isFinite(b)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(b),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(b),o[C].add(_),o[B].add(_),o[v].add(_),c[C].add(g),c[B].add(g),c[v].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,B=y.length;C<B;++C){const v=y[C],b=v.start,N=v.count;for(let L=b,D=b+N;L<D;L+=3)m(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const x=new P,M=new P,R=new P,A=new P;function w(C){R.fromBufferAttribute(i,C),A.copy(R);const B=o[C];x.copy(B),x.sub(R.multiplyScalar(R.dot(B))).normalize(),M.crossVectors(A,B);const b=M.dot(c[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,b)}for(let C=0,B=y.length;C<B;++C){const v=y[C],b=v.start,N=v.count;for(let L=b,D=b+N;L<D;L+=3)w(t.getX(L+0)),w(t.getX(L+1)),w(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,f=t.count;d<f;d+=3){const p=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,p=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let m=0;m<h;m++)d[p++]=l[f++]}return new Kt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Wt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fu=new Ot,Fi=new Js,fa=new ze,pu=new P,pa=new P,ma=new P,ga=new P,Jc=new P,_a=new P,mu=new P,xa=new P;class se extends ee{constructor(t=new Wt,e=new Ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){_a.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Jc.fromBufferAttribute(u,t),a?_a.addScaledVector(Jc,h):_a.addScaledVector(Jc.sub(e),h))}e.add(_a)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(r),Fi.copy(t.ray).recast(t.near),!(fa.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(fa,pu)===null||Fi.origin.distanceToSquared(pu)>(t.far-t.near)**2))&&(fu.copy(r).invert(),Fi.copy(t.ray).applyMatrix4(fu),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,R=x;M<R;M+=3){const A=o.getX(M),w=o.getX(M+1),C=o.getX(M+2);i=ya(this,m,t,n,l,h,u,A,w,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const y=o.getX(g),x=o.getX(g+1),M=o.getX(g+2);i=ya(this,a,t,n,l,h,u,y,x,M),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let M=y,R=x;M<R;M+=3){const A=M,w=M+1,C=M+2;i=ya(this,m,t,n,l,h,u,A,w,C),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const y=g,x=g+1,M=g+2;i=ya(this,a,t,n,l,h,u,y,x,M),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function z0(s,t,e,n,i,r,a,o){let c;if(t.side===Xe?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Hn,o),c===null)return null;xa.copy(o),xa.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(xa);return l<e.near||l>e.far?null:{distance:l,point:xa.clone(),object:s}}function ya(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,pa),s.getVertexPosition(c,ma),s.getVertexPosition(l,ga);const h=z0(s,t,e,n,pa,ma,ga,mu);if(h){const u=new P;tn.getBarycoord(mu,pa,ma,ga,u),i&&(h.uv=tn.getInterpolatedAttribute(i,o,c,l,u,new j)),r&&(h.uv1=tn.getInterpolatedAttribute(r,o,c,l,u,new j)),a&&(h.normal=tn.getInterpolatedAttribute(a,o,c,l,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new P,materialIndex:0};tn.getNormal(pa,ma,ga,d.normal),h.face=d,h.barycoord=u}return h}class Ye extends Wt{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,i,a,2),p("x","z","y",1,-1,t,n,-e,i,a,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(u,2));function p(_,g,m,y,x,M,R,A,w,C,B){const v=M/w,b=R/C,N=M/2,L=R/2,D=A/2,G=w+1,O=C+1;let W=0,V=0;const nt=new P;for(let at=0;at<O;at++){const dt=at*b-L;for(let Ft=0;Ft<G;Ft++){const qt=Ft*v-N;nt[_]=qt*y,nt[g]=dt*x,nt[m]=D,l.push(nt.x,nt.y,nt.z),nt[_]=0,nt[g]=0,nt[m]=A>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(Ft/w),u.push(1-at/C),W+=1}}for(let at=0;at<C;at++)for(let dt=0;dt<w;dt++){const Ft=d+dt+G*at,qt=d+dt+G*(at+1),K=d+(dt+1)+G*(at+1),U=d+(dt+1)+G*at;c.push(Ft,qt,U),c.push(qt,K,U),V+=6}o.addGroup(f,V,B),f+=V,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ye(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ve(s){const t={};for(let e=0;e<s.length;e++){const n=Xs(s[e]);for(const i in n)t[i]=n[i]}return t}function k0(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Wf(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const Xf={clone:Xs,merge:Ve};var H0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class In extends ke{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H0,this.fragmentShader=V0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=k0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ec extends ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=Fn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new P,gu=new j,_u=new j;class Ie extends ec{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,gu,_u),e.subVectors(_u,gu)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(is*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ts=-90,Rs=1;class Yf extends ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ie(Ts,Rs,t,e);i.layers=this.layers,this.add(i);const r=new Ie(Ts,Rs,t,e);r.layers=this.layers,this.add(r);const a=new Ie(Ts,Rs,t,e);a.layers=this.layers,this.add(a);const o=new Ie(Ts,Rs,t,e);o.layers=this.layers,this.add(o);const c=new Ie(Ts,Rs,t,e);c.layers=this.layers,this.add(c);const l=new Ie(Ts,Rs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class qr extends ye{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ai,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qf extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new qr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Se}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ye(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:Xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:si});r.uniforms.tEquirect.value=e;const a=new se(i,r),o=e.minFilter;return e.minFilter===Tn&&(e.minFilter=Se),new Yf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Qc=new P,G0=new P,W0=new Gt;class Mi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Qc.subVectors(n,e).cross(G0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||W0.getNormalMatrix(t),i=this.coplanarPoint(Qc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new ze,va=new P;class Zr{constructor(t=new Mi,e=new Mi,n=new Mi,i=new Mi,r=new Mi,a=new Mi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],p=i[9],_=i[10],g=i[11],m=i[12],y=i[13],x=i[14],M=i[15];if(n[0].setComponents(c-r,d-l,g-f,M-m).normalize(),n[1].setComponents(c+r,d+l,g+f,M+m).normalize(),n[2].setComponents(c+a,d+h,g+p,M+y).normalize(),n[3].setComponents(c-a,d-h,g-p,M-y).normalize(),n[4].setComponents(c-o,d-u,g-_,M-x).normalize(),e===Fn)n[5].setComponents(c+o,d+u,g+_,M+x).normalize();else if(e===Ur)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(va.x=i.normal.x>0?t.max.x:t.min.x,va.y=i.normal.y>0?t.max.y:t.min.y,va.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(va)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zf(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function X0(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){const p=u[d],_=u[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){const _=u[f];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class us extends Wt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=t/o,d=e/c,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const y=m*d-a;for(let x=0;x<l;x++){const M=x*u-r;p.push(M,-y,0),_.push(0,0,1),g.push(x/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let y=0;y<o;y++){const x=y+l*m,M=y+l*(m+1),R=y+1+l*(m+1),A=y+1+l*m;f.push(x,M,A),f.push(M,R,A)}this.setIndex(f),this.setAttribute("position",new Ct(p,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.width,t.height,t.widthSegments,t.heightSegments)}}var Y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q0=`#ifdef USE_ALPHAHASH
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
#endif`,Z0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Q0=`#ifdef USE_AOMAP
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
#endif`,j0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tg=`#ifdef USE_BATCHING
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
#endif`,eg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ig=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rg=`#ifdef USE_IRIDESCENCE
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
#endif`,ag=`#ifdef USE_BUMPMAP
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
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mg=`#define PI 3.141592653589793
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
} // validated`,gg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_g=`vec3 transformedNormal = objectNormal;
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
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sg="gl_FragColor = linearToOutputTexel( gl_FragColor );",bg=`
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
}`,wg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Eg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
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
#endif`,Cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ig=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dg=`#ifdef USE_GRADIENTMAP
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
}`,Ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ng=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fg=`uniform bool receiveShadow;
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
#endif`,Bg=`#ifdef USE_ENVMAP
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
#endif`,zg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gg=`PhysicalMaterial material;
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
#endif`,Wg=`struct PhysicalMaterial {
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
}`,Xg=`
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
#endif`,Yg=`#if defined( RE_IndirectDiffuse )
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
#endif`,qg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$g=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,e_=`#if defined( USE_POINTS_UV )
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
#endif`,n_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,r_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o_=`#ifdef USE_MORPHTARGETS
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
#endif`,c_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,h_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,u_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p_=`#ifdef USE_NORMALMAP
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
#endif`,m_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,__=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,R_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,I_=`float getShadowMask() {
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
}`,P_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L_=`#ifdef USE_SKINNING
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
#endif`,D_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U_=`#ifdef USE_SKINNING
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
#endif`,N_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z_=`#ifdef USE_TRANSMISSION
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
#endif`,k_=`#ifdef USE_TRANSMISSION
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
#endif`,H_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y_=`uniform sampler2D t2D;
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
}`,q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J_=`#include <common>
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
}`,Q_=`#if DEPTH_PACKING == 3200
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
}`,j_=`#define DISTANCE
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
}`,tx=`#define DISTANCE
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`uniform float scale;
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
}`,sx=`uniform vec3 diffuse;
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
}`,rx=`#include <common>
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
}`,ax=`uniform vec3 diffuse;
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
}`,ox=`#define LAMBERT
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
}`,cx=`#define LAMBERT
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
}`,lx=`#define MATCAP
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
}`,hx=`#define MATCAP
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
}`,ux=`#define NORMAL
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
}`,dx=`#define NORMAL
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
}`,fx=`#define PHONG
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
}`,px=`#define PHONG
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
}`,mx=`#define STANDARD
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
}`,gx=`#define STANDARD
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
}`,_x=`#define TOON
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
}`,xx=`#define TOON
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
}`,yx=`uniform float size;
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
}`,vx=`uniform vec3 diffuse;
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
}`,Mx=`#include <common>
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
}`,Sx=`uniform vec3 color;
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
}`,bx=`uniform float rotation;
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
}`,wx=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Y0,alphahash_pars_fragment:q0,alphamap_fragment:Z0,alphamap_pars_fragment:K0,alphatest_fragment:$0,alphatest_pars_fragment:J0,aomap_fragment:Q0,aomap_pars_fragment:j0,batching_pars_vertex:tg,batching_vertex:eg,begin_vertex:ng,beginnormal_vertex:ig,bsdfs:sg,iridescence_fragment:rg,bumpmap_pars_fragment:ag,clipping_planes_fragment:og,clipping_planes_pars_fragment:cg,clipping_planes_pars_vertex:lg,clipping_planes_vertex:hg,color_fragment:ug,color_pars_fragment:dg,color_pars_vertex:fg,color_vertex:pg,common:mg,cube_uv_reflection_fragment:gg,defaultnormal_vertex:_g,displacementmap_pars_vertex:xg,displacementmap_vertex:yg,emissivemap_fragment:vg,emissivemap_pars_fragment:Mg,colorspace_fragment:Sg,colorspace_pars_fragment:bg,envmap_fragment:wg,envmap_common_pars_fragment:Ag,envmap_pars_fragment:Eg,envmap_pars_vertex:Tg,envmap_physical_pars_fragment:Bg,envmap_vertex:Rg,fog_vertex:Cg,fog_pars_vertex:Ig,fog_fragment:Pg,fog_pars_fragment:Lg,gradientmap_pars_fragment:Dg,lightmap_pars_fragment:Ug,lights_lambert_fragment:Ng,lights_lambert_pars_fragment:Og,lights_pars_begin:Fg,lights_toon_fragment:zg,lights_toon_pars_fragment:kg,lights_phong_fragment:Hg,lights_phong_pars_fragment:Vg,lights_physical_fragment:Gg,lights_physical_pars_fragment:Wg,lights_fragment_begin:Xg,lights_fragment_maps:Yg,lights_fragment_end:qg,logdepthbuf_fragment:Zg,logdepthbuf_pars_fragment:Kg,logdepthbuf_pars_vertex:$g,logdepthbuf_vertex:Jg,map_fragment:Qg,map_pars_fragment:jg,map_particle_fragment:t_,map_particle_pars_fragment:e_,metalnessmap_fragment:n_,metalnessmap_pars_fragment:i_,morphinstance_vertex:s_,morphcolor_vertex:r_,morphnormal_vertex:a_,morphtarget_pars_vertex:o_,morphtarget_vertex:c_,normal_fragment_begin:l_,normal_fragment_maps:h_,normal_pars_fragment:u_,normal_pars_vertex:d_,normal_vertex:f_,normalmap_pars_fragment:p_,clearcoat_normal_fragment_begin:m_,clearcoat_normal_fragment_maps:g_,clearcoat_pars_fragment:__,iridescence_pars_fragment:x_,opaque_fragment:y_,packing:v_,premultiplied_alpha_fragment:M_,project_vertex:S_,dithering_fragment:b_,dithering_pars_fragment:w_,roughnessmap_fragment:A_,roughnessmap_pars_fragment:E_,shadowmap_pars_fragment:T_,shadowmap_pars_vertex:R_,shadowmap_vertex:C_,shadowmask_pars_fragment:I_,skinbase_vertex:P_,skinning_pars_vertex:L_,skinning_vertex:D_,skinnormal_vertex:U_,specularmap_fragment:N_,specularmap_pars_fragment:O_,tonemapping_fragment:F_,tonemapping_pars_fragment:B_,transmission_fragment:z_,transmission_pars_fragment:k_,uv_pars_fragment:H_,uv_pars_vertex:V_,uv_vertex:G_,worldpos_vertex:W_,background_vert:X_,background_frag:Y_,backgroundCube_vert:q_,backgroundCube_frag:Z_,cube_vert:K_,cube_frag:$_,depth_vert:J_,depth_frag:Q_,distanceRGBA_vert:j_,distanceRGBA_frag:tx,equirect_vert:ex,equirect_frag:nx,linedashed_vert:ix,linedashed_frag:sx,meshbasic_vert:rx,meshbasic_frag:ax,meshlambert_vert:ox,meshlambert_frag:cx,meshmatcap_vert:lx,meshmatcap_frag:hx,meshnormal_vert:ux,meshnormal_frag:dx,meshphong_vert:fx,meshphong_frag:px,meshphysical_vert:mx,meshphysical_frag:gx,meshtoon_vert:_x,meshtoon_frag:xx,points_vert:yx,points_frag:vx,shadow_vert:Mx,shadow_frag:Sx,sprite_vert:bx,sprite_frag:wx},gt={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},En={basic:{uniforms:Ve([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Ve([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new xt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Ve([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Ve([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Ve([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new xt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Ve([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Ve([gt.points,gt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Ve([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Ve([gt.common,gt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Ve([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Ve([gt.sprite,gt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Ve([gt.common,gt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Ve([gt.lights,gt.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};En.physical={uniforms:Ve([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Ma={r:0,b:0,g:0},zi=new pn,Ax=new Ot;function Ex(s,t,e,n,i,r,a){const o=new xt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function p(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const M=p(y);M===null?m(o,c):M&&M.isColor&&(m(M,1),x=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(y,x){const M=p(x);M&&(M.isCubeTexture||M.mapping===Ks)?(h===void 0&&(h=new se(new Ye(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Xs(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),zi.copy(x.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(zi)),h.material.toneMapped=ne.getTransfer(M.colorSpace)!==he,(u!==M||d!==M.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new se(new us(2,2),new In({name:"BackgroundMaterial",uniforms:Xs(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ne.getTransfer(M.colorSpace)!==he,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,x){y.getRGB(Ma,Wf(s)),n.buffers.color.setClear(Ma.r,Ma.g,Ma.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),c=x,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,m(o,c)},render:_,addToRenderList:g}}function Tx(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(v,b,N,L,D){let G=!1;const O=u(L,N,b);r!==O&&(r=O,l(r.object)),G=f(v,L,N,D),G&&p(v,L,N,D),D!==null&&t.update(D,s.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(v,b,N,L),D!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,b,N){const L=N.wireframe===!0;let D=n[v.id];D===void 0&&(D={},n[v.id]=D);let G=D[b.id];G===void 0&&(G={},D[b.id]=G);let O=G[L];return O===void 0&&(O=d(c()),G[L]=O),O}function d(v){const b=[],N=[],L=[];for(let D=0;D<e;D++)b[D]=0,N[D]=0,L[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:N,attributeDivisors:L,object:v,attributes:{},index:null}}function f(v,b,N,L){const D=r.attributes,G=b.attributes;let O=0;const W=N.getAttributes();for(const V in W)if(W[V].location>=0){const at=D[V];let dt=G[V];if(dt===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(dt=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(dt=v.instanceColor)),at===void 0||at.attribute!==dt||dt&&at.data!==dt.data)return!0;O++}return r.attributesNum!==O||r.index!==L}function p(v,b,N,L){const D={},G=b.attributes;let O=0;const W=N.getAttributes();for(const V in W)if(W[V].location>=0){let at=G[V];at===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(at=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(at=v.instanceColor));const dt={};dt.attribute=at,at&&at.data&&(dt.data=at.data),D[V]=dt,O++}r.attributes=D,r.attributesNum=O,r.index=L}function _(){const v=r.newAttributes;for(let b=0,N=v.length;b<N;b++)v[b]=0}function g(v){m(v,0)}function m(v,b){const N=r.newAttributes,L=r.enabledAttributes,D=r.attributeDivisors;N[v]=1,L[v]===0&&(s.enableVertexAttribArray(v),L[v]=1),D[v]!==b&&(s.vertexAttribDivisor(v,b),D[v]=b)}function y(){const v=r.newAttributes,b=r.enabledAttributes;for(let N=0,L=b.length;N<L;N++)b[N]!==v[N]&&(s.disableVertexAttribArray(N),b[N]=0)}function x(v,b,N,L,D,G,O){O===!0?s.vertexAttribIPointer(v,b,N,D,G):s.vertexAttribPointer(v,b,N,L,D,G)}function M(v,b,N,L){_();const D=L.attributes,G=N.getAttributes(),O=b.defaultAttributeValues;for(const W in G){const V=G[W];if(V.location>=0){let nt=D[W];if(nt===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(nt=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(nt=v.instanceColor)),nt!==void 0){const at=nt.normalized,dt=nt.itemSize,Ft=t.get(nt);if(Ft===void 0)continue;const qt=Ft.buffer,K=Ft.type,U=Ft.bytesPerElement,ot=K===s.INT||K===s.UNSIGNED_INT||nt.gpuType===Xo;if(nt.isInterleavedBufferAttribute){const tt=nt.data,_t=tt.stride,pt=nt.offset;if(tt.isInstancedInterleavedBuffer){for(let Mt=0;Mt<V.locationSize;Mt++)m(V.location+Mt,tt.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Mt=0;Mt<V.locationSize;Mt++)g(V.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,qt);for(let Mt=0;Mt<V.locationSize;Mt++)x(V.location+Mt,dt/V.locationSize,K,at,_t*U,(pt+dt/V.locationSize*Mt)*U,ot)}else{if(nt.isInstancedBufferAttribute){for(let tt=0;tt<V.locationSize;tt++)m(V.location+tt,nt.meshPerAttribute);v.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let tt=0;tt<V.locationSize;tt++)g(V.location+tt);s.bindBuffer(s.ARRAY_BUFFER,qt);for(let tt=0;tt<V.locationSize;tt++)x(V.location+tt,dt/V.locationSize,K,at,dt*U,dt/V.locationSize*tt*U,ot)}}else if(O!==void 0){const at=O[W];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(V.location,at);break;case 3:s.vertexAttrib3fv(V.location,at);break;case 4:s.vertexAttrib4fv(V.location,at);break;default:s.vertexAttrib1fv(V.location,at)}}}}y()}function R(){C();for(const v in n){const b=n[v];for(const N in b){const L=b[N];for(const D in L)h(L[D].object),delete L[D];delete b[N]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const b=n[v.id];for(const N in b){const L=b[N];for(const D in L)h(L[D].object),delete L[D];delete b[N]}delete n[v.id]}function w(v){for(const b in n){const N=n[b];if(N[v.id]===void 0)continue;const L=N[v.id];for(const D in L)h(L[D].object),delete L[D];delete N[v.id]}}function C(){B(),a=!0,r!==i&&(r=i,l(r.object))}function B(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:B,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function Rx(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<l.length;p++)a(l[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];for(let _=0;_<d.length;_++)e.update(p,n,d[_])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Cx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==We&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const C=w===$s&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Vn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==en&&!C)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const w=t.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:R,maxSamples:A}}function Ix(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Mi,o=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):l();else{const y=r?0:n,x=y*4;let M=m.clippingState||null;c.value=M,M=h(p,d,x,f);for(let R=0;R!==x;++R)M[R]=e[R];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,p!==!0||g===null){const m=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,M=f;x!==_;++x,M+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(g,M),g[M+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Px(s){let t=new WeakMap;function e(a,o){return o===Ar?a.mapping=ai:o===Er&&(a.mapping=Ei),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ar||o===Er)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new qf(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class nc extends ec{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Fs=4,xu=[.125,.215,.35,.446,.526,.582],$i=20,jc=new nc,yu=new xt;let tl=null,el=0,nl=0,il=!1;const Ki=(1+Math.sqrt(5))/2,Cs=1/Ki,vu=[new P(-Ki,Cs,0),new P(Ki,Cs,0),new P(-Cs,0,Ki),new P(Cs,0,Ki),new P(0,Ki,-Cs),new P(0,Ki,Cs),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Pl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){tl=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tl,el,nl),this._renderer.xr.enabled=il,t.scissorTest=!1,Sa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ai||t.mapping===Ei?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tl=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),nl=this._renderer.getActiveMipmapLevel(),il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Se,minFilter:Se,generateMipmaps:!1,type:$s,format:We,colorSpace:li,depthBuffer:!1},i=Mu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lx(r)),this._blurMaterial=Dx(r,t,e)}return i}_compileMaterial(t){const e=new se(this._lodPlanes[0],t);this._renderer.compile(e,jc)}_sceneToCubeUV(t,e,n,i){const o=new Ie(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(yu),h.toneMapping=ri,h.autoClear=!1;const f=new Ii({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),p=new se(new Ye,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(yu),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):y===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));const x=this._cubeSize;Sa(i,y*x,m>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(p,o),h.render(t,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ai||t.mapping===Ei;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Su());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new se(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Sa(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,jc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vu[(i-r-1)%vu.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new se(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*$i-1),_=r/p,g=isFinite(r)?1+Math.floor(h*_):$i;g>$i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$i}`);const m=[];let y=0;for(let w=0;w<$i;++w){const C=w/_,B=Math.exp(-C*C/2);m.push(B),w===0?y+=B:w<g&&(y+=2*B)}for(let w=0;w<m.length;w++)m[w]=m[w]/y;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-n;const M=this._sizeLods[i],R=3*M*(i>x-Fs?i-x+Fs:0),A=4*(this._cubeSize-M);Sa(e,R,A,3*M,2*M),c.setRenderTarget(e),c.render(u,jc)}}function Lx(s){const t=[],e=[],n=[];let i=s;const r=s-Fs+1+xu.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-Fs?c=xu[a-s+Fs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,_=3,g=2,m=1,y=new Float32Array(_*p*f),x=new Float32Array(g*p*f),M=new Float32Array(m*p*f);for(let A=0;A<f;A++){const w=A%3*2/3-1,C=A>2?0:-1,B=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(B,_*p*A),x.set(d,g*p*A);const v=[A,A,A,A,A,A];M.set(v,m*p*A)}const R=new Wt;R.setAttribute("position",new Kt(y,_)),R.setAttribute("uv",new Kt(x,g)),R.setAttribute("faceIndex",new Kt(M,m)),t.push(R),i>Fs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Mu(s,t,e){const n=new Cn(s,t,e);return n.texture.mapping=Ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sa(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Dx(s,t,e){const n=new Float32Array($i),i=new P(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:uh(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function Su(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function bu(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function uh(){return`

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
	`}function Ux(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ar||c===Er,h=c===ai||c===Ei;if(l||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Pl(s)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Pl(s)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Nx(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&to("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ox(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);for(const p in d.morphAttributes){const _=d.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)t.remove(_[g])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const p in d)t.update(d[p],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const p in f){const _=f[p];for(let g=0,m=_.length;g<m;g++)t.update(_[g],s.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,p=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let x=0,M=y.length;x<M;x+=3){const R=y[x+0],A=y[x+1],w=y[x+2];d.push(R,A,A,w,w,R)}}else if(p!==void 0){const y=p.array;_=p.version;for(let x=0,M=y.length/3-1;x<M;x+=3){const R=x+0,A=x+1,w=x+2;d.push(R,A,A,w,w,R)}}else return;const g=new(zf(d)?hh:lh)(d,1);g.version=_;const m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Fx(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,d*a,p),e.update(f,n,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];e.update(g,n,1)}function u(d,f,p,_){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)l(d[m]/a,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,p);let m=0;for(let y=0;y<p;y++)m+=f[y];for(let y=0;y<_.length;y++)e.update(m,n,_[y])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Bx(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function zx(s,t,e){const n=new WeakMap,i=new te;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let v=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let M=0;p===!0&&(M=1),_===!0&&(M=2),g===!0&&(M=3);let R=o.attributes.position.count*M,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const w=new Float32Array(R*A*4*u),C=new jo(w,R,A,u);C.type=en,C.needsUpdate=!0;const B=M*4;for(let b=0;b<u;b++){const N=m[b],L=y[b],D=x[b],G=R*A*4*b;for(let O=0;O<N.count;O++){const W=O*B;p===!0&&(i.fromBufferAttribute(N,O),w[G+W+0]=i.x,w[G+W+1]=i.y,w[G+W+2]=i.z,w[G+W+3]=0),_===!0&&(i.fromBufferAttribute(L,O),w[G+W+4]=i.x,w[G+W+5]=i.y,w[G+W+6]=i.z,w[G+W+7]=0),g===!0&&(i.fromBufferAttribute(D,O),w[G+W+8]=i.x,w[G+W+9]=i.y,w[G+W+10]=i.z,w[G+W+11]=D.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new j(R,A)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const _=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function kx(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class dh extends ye{constructor(t,e,n,i,r,a,o,c,l,h=ns){if(h!==ns&&h!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=oi),n===void 0&&h===os&&(n=as),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Pe,this.minFilter=c!==void 0?c:Pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Kf=new ye,wu=new dh(1,1),$f=new jo,Jf=new ch,Qf=new qr,Au=[],Eu=[],Tu=new Float32Array(16),Ru=new Float32Array(9),Cu=new Float32Array(4);function Qs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Au[i];if(r===void 0&&(r=new Float32Array(i),Au[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Te(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Re(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ic(s,t){let e=Eu[t];e===void 0&&(e=new Int32Array(t),Eu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Hx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Vx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;s.uniform2fv(this.addr,t),Re(e,t)}}function Gx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;s.uniform3fv(this.addr,t),Re(e,t)}}function Wx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;s.uniform4fv(this.addr,t),Re(e,t)}}function Xx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Te(e,n))return;Cu.set(n),s.uniformMatrix2fv(this.addr,!1,Cu),Re(e,n)}}function Yx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Te(e,n))return;Ru.set(n),s.uniformMatrix3fv(this.addr,!1,Ru),Re(e,n)}}function qx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Te(e,n))return;Tu.set(n),s.uniformMatrix4fv(this.addr,!1,Tu),Re(e,n)}}function Zx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Kx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;s.uniform2iv(this.addr,t),Re(e,t)}}function $x(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;s.uniform3iv(this.addr,t),Re(e,t)}}function Jx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;s.uniform4iv(this.addr,t),Re(e,t)}}function Qx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function jx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;s.uniform2uiv(this.addr,t),Re(e,t)}}function ty(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;s.uniform3uiv(this.addr,t),Re(e,t)}}function ey(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;s.uniform4uiv(this.addr,t),Re(e,t)}}function ny(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(wu.compareFunction=ah,r=wu):r=Kf,e.setTexture2D(t||r,i)}function iy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Jf,i)}function sy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Qf,i)}function ry(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||$f,i)}function ay(s){switch(s){case 5126:return Hx;case 35664:return Vx;case 35665:return Gx;case 35666:return Wx;case 35674:return Xx;case 35675:return Yx;case 35676:return qx;case 5124:case 35670:return Zx;case 35667:case 35671:return Kx;case 35668:case 35672:return $x;case 35669:case 35673:return Jx;case 5125:return Qx;case 36294:return jx;case 36295:return ty;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return sy;case 36289:case 36303:case 36311:case 36292:return ry}}function oy(s,t){s.uniform1fv(this.addr,t)}function cy(s,t){const e=Qs(t,this.size,2);s.uniform2fv(this.addr,e)}function ly(s,t){const e=Qs(t,this.size,3);s.uniform3fv(this.addr,e)}function hy(s,t){const e=Qs(t,this.size,4);s.uniform4fv(this.addr,e)}function uy(s,t){const e=Qs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function dy(s,t){const e=Qs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function fy(s,t){const e=Qs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function py(s,t){s.uniform1iv(this.addr,t)}function my(s,t){s.uniform2iv(this.addr,t)}function gy(s,t){s.uniform3iv(this.addr,t)}function _y(s,t){s.uniform4iv(this.addr,t)}function xy(s,t){s.uniform1uiv(this.addr,t)}function yy(s,t){s.uniform2uiv(this.addr,t)}function vy(s,t){s.uniform3uiv(this.addr,t)}function My(s,t){s.uniform4uiv(this.addr,t)}function Sy(s,t,e){const n=this.cache,i=t.length,r=ic(e,i);Te(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Kf,r[a])}function by(s,t,e){const n=this.cache,i=t.length,r=ic(e,i);Te(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Jf,r[a])}function wy(s,t,e){const n=this.cache,i=t.length,r=ic(e,i);Te(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Qf,r[a])}function Ay(s,t,e){const n=this.cache,i=t.length,r=ic(e,i);Te(n,r)||(s.uniform1iv(this.addr,r),Re(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||$f,r[a])}function Ey(s){switch(s){case 5126:return oy;case 35664:return cy;case 35665:return ly;case 35666:return hy;case 35674:return uy;case 35675:return dy;case 35676:return fy;case 5124:case 35670:return py;case 35667:case 35671:return my;case 35668:case 35672:return gy;case 35669:case 35673:return _y;case 5125:return xy;case 36294:return yy;case 36295:return vy;case 36296:return My;case 35678:case 36198:case 36298:case 36306:case 35682:return Sy;case 35679:case 36299:case 36307:return by;case 35680:case 36300:case 36308:case 36293:return wy;case 36289:case 36303:case 36311:case 36292:return Ay}}class Ty{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ay(e.type)}}class Ry{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ey(e.type)}}class Cy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const sl=/(\w+)(\])?(\[|\.)?/g;function Iu(s,t){s.seq.push(t),s.map[t.id]=t}function Iy(s,t,e){const n=s.name,i=n.length;for(sl.lastIndex=0;;){const r=sl.exec(n),a=sl.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Iu(e,l===void 0?new Ty(o,s,t):new Ry(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Cy(o),Iu(e,u)),e=u}}}class eo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Iy(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Pu(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Py=37297;let Ly=0;function Dy(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Uy(s){const t=ne.getPrimaries(ne.workingColorSpace),e=ne.getPrimaries(s);let n;switch(t===e?n="":t===Lr&&e===Pr?n="LinearDisplayP3ToLinearSRGB":t===Pr&&e===Lr&&(n="LinearSRGBToLinearDisplayP3"),s){case li:case Yr:return[n,"LinearTransferOETF"];case je:case Qo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Lu(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Dy(s.getShaderSource(t),a)}else return i}function Ny(s,t){const e=Uy(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Oy(s,t){let e;switch(t){case yf:e="Linear";break;case vf:e="Reinhard";break;case Mf:e="Cineon";break;case Zl:e="ACESFilmic";break;case bf:e="AgX";break;case wf:e="Neutral";break;case Sf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ba=new P;function Fy(){ne.getLuminanceCoefficients(ba);const s=ba.x.toFixed(4),t=ba.y.toFixed(4),e=ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function By(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pr).join(`
`)}function zy(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ky(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function pr(s){return s!==""}function Du(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Uu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ll(s){return s.replace(Hy,Gy)}const Vy=new Map;function Gy(s,t){let e=Zt[t];if(e===void 0){const n=Vy.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ll(e)}const Wy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nu(s){return s.replace(Wy,Xy)}function Xy(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ou(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Yy(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Yl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ql?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function qy(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ai:case Ei:t="ENVMAP_TYPE_CUBE";break;case Ks:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zy(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ei:t="ENVMAP_MODE_REFRACTION";break}return t}function Ky(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Wr:t="ENVMAP_BLENDING_MULTIPLY";break;case _f:t="ENVMAP_BLENDING_MIX";break;case xf:t="ENVMAP_BLENDING_ADD";break}return t}function $y(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Jy(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Yy(e),l=qy(e),h=Zy(e),u=Ky(e),d=$y(e),f=By(e),p=zy(r),_=i.createProgram();let g,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(pr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(pr).join(`
`),m.length>0&&(m+=`
`)):(g=[Ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),m=[Ou(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ri?"#define TONE_MAPPING":"",e.toneMapping!==ri?Zt.tonemapping_pars_fragment:"",e.toneMapping!==ri?Oy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Ny("linearToOutputTexel",e.outputColorSpace),Fy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),a=Ll(a),a=Du(a,e),a=Uu(a,e),o=Ll(o),o=Du(o,e),o=Uu(o,e),a=Nu(a),o=Nu(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Il?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Il?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+g+a,M=y+m+o,R=Pu(i,i.VERTEX_SHADER,x),A=Pu(i,i.FRAGMENT_SHADER,M);i.attachShader(_,R),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(b){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),L=i.getShaderInfoLog(R).trim(),D=i.getShaderInfoLog(A).trim();let G=!0,O=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,R,A);else{const W=Lu(i,R,"vertex"),V=Lu(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+N+`
`+W+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(L===""||D==="")&&(O=!1);O&&(b.diagnostics={runnable:G,programLog:N,vertexShader:{log:L,prefix:g},fragmentShader:{log:D,prefix:m}})}i.deleteShader(R),i.deleteShader(A),C=new eo(i,_),B=ky(i,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let B;this.getAttributes=function(){return B===void 0&&w(this),B};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Py)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ly++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let Qy=0;class jy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tv(t),e.set(t,n)),n}}class tv{constructor(t){this.id=Qy++,this.code=t,this.usedTimes=0}}function ev(s,t,e,n,i,r,a){const o=new tc,c=new jy,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,b,N,L,D){const G=L.fog,O=D.geometry,W=v.isMeshStandardMaterial?L.environment:null,V=(v.isMeshStandardMaterial?e:t).get(v.envMap||W),nt=V&&V.mapping===Ks?V.image.height:null,at=_[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const dt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ft=dt!==void 0?dt.length:0;let qt=0;O.morphAttributes.position!==void 0&&(qt=1),O.morphAttributes.normal!==void 0&&(qt=2),O.morphAttributes.color!==void 0&&(qt=3);let K,U,ot,tt;if(at){const $e=En[at];K=$e.vertexShader,U=$e.fragmentShader}else K=v.vertexShader,U=v.fragmentShader,c.update(v),ot=c.getVertexShaderID(v),tt=c.getFragmentShaderID(v);const _t=s.getRenderTarget(),pt=D.isInstancedMesh===!0,Mt=D.isBatchedMesh===!0,bt=!!v.map,q=!!v.matcap,I=!!V,lt=!!v.aoMap,st=!!v.lightMap,it=!!v.bumpMap,ht=!!v.normalMap,It=!!v.displacementMap,ct=!!v.emissiveMap,T=!!v.metalnessMap,S=!!v.roughnessMap,H=v.anisotropy>0,$=v.clearcoat>0,Q=v.dispersion>0,J=v.iridescence>0,Tt=v.sheen>0,mt=v.transmission>0,St=H&&!!v.anisotropyMap,$t=$&&!!v.clearcoatMap,ut=$&&!!v.clearcoatNormalMap,Et=$&&!!v.clearcoatRoughnessMap,kt=J&&!!v.iridescenceMap,Ht=J&&!!v.iridescenceThicknessMap,Rt=Tt&&!!v.sheenColorMap,Jt=Tt&&!!v.sheenRoughnessMap,Xt=!!v.specularMap,le=!!v.specularColorMap,F=!!v.specularIntensityMap,wt=mt&&!!v.transmissionMap,Z=mt&&!!v.thicknessMap,et=!!v.gradientMap,yt=!!v.alphaMap,At=v.alphaTest>0,Qt=!!v.alphaHash,we=!!v.extensions;let Ke=ri;v.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Ke=s.toneMapping);const ie={shaderID:at,shaderType:v.type,shaderName:v.name,vertexShader:K,fragmentShader:U,defines:v.defines,customVertexShaderID:ot,customFragmentShaderID:tt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:Mt,batchingColor:Mt&&D._colorsTexture!==null,instancing:pt,instancingColor:pt&&D.instanceColor!==null,instancingMorph:pt&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_t===null?s.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:li,alphaToCoverage:!!v.alphaToCoverage,map:bt,matcap:q,envMap:I,envMapMode:I&&V.mapping,envMapCubeUVHeight:nt,aoMap:lt,lightMap:st,bumpMap:it,normalMap:ht,displacementMap:f&&It,emissiveMap:ct,normalMapObjectSpace:ht&&v.normalMapType===Pf,normalMapTangentSpace:ht&&v.normalMapType===Ci,metalnessMap:T,roughnessMap:S,anisotropy:H,anisotropyMap:St,clearcoat:$,clearcoatMap:$t,clearcoatNormalMap:ut,clearcoatRoughnessMap:Et,dispersion:Q,iridescence:J,iridescenceMap:kt,iridescenceThicknessMap:Ht,sheen:Tt,sheenColorMap:Rt,sheenRoughnessMap:Jt,specularMap:Xt,specularColorMap:le,specularIntensityMap:F,transmission:mt,transmissionMap:wt,thicknessMap:Z,gradientMap:et,opaque:v.transparent===!1&&v.blending===es&&v.alphaToCoverage===!1,alphaMap:yt,alphaTest:At,alphaHash:Qt,combine:v.combine,mapUv:bt&&g(v.map.channel),aoMapUv:lt&&g(v.aoMap.channel),lightMapUv:st&&g(v.lightMap.channel),bumpMapUv:it&&g(v.bumpMap.channel),normalMapUv:ht&&g(v.normalMap.channel),displacementMapUv:It&&g(v.displacementMap.channel),emissiveMapUv:ct&&g(v.emissiveMap.channel),metalnessMapUv:T&&g(v.metalnessMap.channel),roughnessMapUv:S&&g(v.roughnessMap.channel),anisotropyMapUv:St&&g(v.anisotropyMap.channel),clearcoatMapUv:$t&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ut&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&g(v.sheenRoughnessMap.channel),specularMapUv:Xt&&g(v.specularMap.channel),specularColorMapUv:le&&g(v.specularColorMap.channel),specularIntensityMapUv:F&&g(v.specularIntensityMap.channel),transmissionMapUv:wt&&g(v.transmissionMap.channel),thicknessMapUv:Z&&g(v.thicknessMap.channel),alphaMapUv:yt&&g(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ht||H),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(bt||yt),fog:!!G,useFog:v.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:qt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ke,decodeVideoTexture:bt&&v.map.isVideoTexture===!0&&ne.getTransfer(v.map.colorSpace)===he,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===On,flipSided:v.side===Xe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:we&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&v.extensions.multiDraw===!0||Mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ie.vertexUv1s=l.has(1),ie.vertexUv2s=l.has(2),ie.vertexUv3s=l.has(3),l.clear(),ie}function y(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)b.push(N),b.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(x(b,v),M(b,v),b.push(s.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function x(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function M(v,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),v.push(o.mask)}function R(v){const b=_[v.type];let N;if(b){const L=En[b];N=Xf.clone(L.uniforms)}else N=v.uniforms;return N}function A(v,b){let N;for(let L=0,D=h.length;L<D;L++){const G=h[L];if(G.cacheKey===b){N=G,++N.usedTimes;break}}return N===void 0&&(N=new Jy(s,b,v,r),h.push(N)),N}function w(v){if(--v.usedTimes===0){const b=h.indexOf(v);h[b]=h[h.length-1],h.pop(),v.destroy()}}function C(v){c.remove(v)}function B(){c.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:R,acquireProgram:A,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:B}}function nv(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function iv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Fu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Bu(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,p,_,g){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:_,group:g},s[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=_,m.group=g),t++,m}function o(u,d,f,p,_,g){const m=a(u,d,f,p,_,g);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function c(u,d,f,p,_,g){const m=a(u,d,f,p,_,g);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function l(u,d){e.length>1&&e.sort(u||iv),n.length>1&&n.sort(d||Fu),i.length>1&&i.sort(d||Fu)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function sv(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Bu,s.set(n,[a])):i>=r.length?(a=new Bu,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function rv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new xt};break;case"SpotLight":e={position:new P,direction:new P,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function av(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let ov=0;function cv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function lv(s){const t=new rv,e=av(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,r=new Ot,a=new Ot;function o(l){let h=0,u=0,d=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,y=0,x=0,M=0,R=0,A=0,w=0;l.sort(cv);for(let B=0,v=l.length;B<v;B++){const b=l[B],N=b.color,L=b.intensity,D=b.distance,G=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=N.r*L,u+=N.g*L,d+=N.b*L;else if(b.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(b.sh.coefficients[O],L);w++}else if(b.isDirectionalLight){const O=t.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const W=b.shadow,V=e.get(b);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=b.shadow.matrix,y++}n.directional[f]=O,f++}else if(b.isSpotLight){const O=t.get(b);O.position.setFromMatrixPosition(b.matrixWorld),O.color.copy(N).multiplyScalar(L),O.distance=D,O.coneCos=Math.cos(b.angle),O.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),O.decay=b.decay,n.spot[_]=O;const W=b.shadow;if(b.map&&(n.spotLightMap[R]=b.map,R++,W.updateMatrices(b),b.castShadow&&A++),n.spotLightMatrix[_]=W.matrix,b.castShadow){const V=e.get(b);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=G,M++}_++}else if(b.isRectAreaLight){const O=t.get(b);O.color.copy(N).multiplyScalar(L),O.halfWidth.set(b.width*.5,0,0),O.halfHeight.set(0,b.height*.5,0),n.rectArea[g]=O,g++}else if(b.isPointLight){const O=t.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity),O.distance=b.distance,O.decay=b.decay,b.castShadow){const W=b.shadow,V=e.get(b);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=G,n.pointShadowMatrix[p]=b.shadow.matrix,x++}n.point[p]=O,p++}else if(b.isHemisphereLight){const O=t.get(b);O.skyColor.copy(b.color).multiplyScalar(L),O.groundColor.copy(b.groundColor).multiplyScalar(L),n.hemi[m]=O,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==p||C.spotLength!==_||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==M||C.numSpotMaps!==R||C.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,C.directionalLength=f,C.pointLength=p,C.spotLength=_,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=M,C.numSpotMaps=R,C.numLightProbes=w,n.version=ov++)}function c(l,h){let u=0,d=0,f=0,p=0,_=0;const g=h.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){const x=l[m];if(x.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),u++}else if(x.isSpotLight){const M=n.spot[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const M=n.rectArea[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(g),_++}}}return{setup:o,setupView:c,state:n}}function zu(s){const t=new lv(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function hv(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new zu(s),t.set(i,[o])):r>=a.length?(o=new zu(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class fh extends ke{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ph extends ke{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dv=`uniform sampler2D shadow_pass;
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
}`;function fv(s,t,e){let n=new Zr;const i=new j,r=new j,a=new te,o=new fh({depthPacking:If}),c=new ph,l={},h=e.maxTextureSize,u={[Hn]:Xe,[Xe]:Hn,[On]:On},d=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:uv,fragmentShader:dv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new Wt;p.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new se(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let m=this.type;this.render=function(A,w,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const B=s.getRenderTarget(),v=s.getActiveCubeFace(),b=s.getActiveMipmapLevel(),N=s.state;N.setBlending(si),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const L=m!==Un&&this.type===Un,D=m===Un&&this.type!==Un;for(let G=0,O=A.length;G<O;G++){const W=A[G],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const nt=V.getFrameExtents();if(i.multiply(nt),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/nt.x),i.x=r.x*nt.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/nt.y),i.y=r.y*nt.y,V.mapSize.y=r.y)),V.map===null||L===!0||D===!0){const dt=this.type!==Un?{minFilter:Pe,magFilter:Pe}:{};V.map!==null&&V.map.dispose(),V.map=new Cn(i.x,i.y,dt),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const at=V.getViewportCount();for(let dt=0;dt<at;dt++){const Ft=V.getViewport(dt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),N.viewport(a),V.updateMatrices(W,dt),n=V.getFrustum(),M(w,C,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===Un&&y(V,C),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(B,v,b)};function y(A,w){const C=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Cn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(w,null,C,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(w,null,C,f,_,null)}function x(A,w,C,B){let v=null;const b=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)v=b;else if(v=C.isPointLight===!0?c:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const N=v.uuid,L=w.uuid;let D=l[N];D===void 0&&(D={},l[N]=D);let G=D[L];G===void 0&&(G=v.clone(),D[L]=G,w.addEventListener("dispose",R)),v=G}if(v.visible=w.visible,v.wireframe=w.wireframe,B===Un?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=s.properties.get(v);N.light=C}return v}function M(A,w,C,B,v){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Un)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const L=t.update(A),D=A.material;if(Array.isArray(D)){const G=L.groups;for(let O=0,W=G.length;O<W;O++){const V=G[O],nt=D[V.materialIndex];if(nt&&nt.visible){const at=x(A,nt,B,v);A.onBeforeShadow(s,A,w,C,L,at,V),s.renderBufferDirect(C,null,L,at,A,V),A.onAfterShadow(s,A,w,C,L,at,V)}}}else if(D.visible){const G=x(A,D,B,v);A.onBeforeShadow(s,A,w,C,L,G,null),s.renderBufferDirect(C,null,L,G,A,null),A.onAfterShadow(s,A,w,C,L,G,null)}}const N=A.children;for(let L=0,D=N.length;L<D;L++)M(N[L],w,C,B,v)}function R(A){A.target.removeEventListener("dispose",R);for(const C in l){const B=l[C],v=A.target.uuid;v in B&&(B[v].dispose(),delete B[v])}}}const pv={[ro]:ao,[oo]:ho,[co]:uo,[rs]:lo,[ao]:ro,[ho]:oo,[uo]:co,[lo]:rs};function mv(s){function t(){let F=!1;const wt=new te;let Z=null;const et=new te(0,0,0,0);return{setMask:function(yt){Z!==yt&&!F&&(s.colorMask(yt,yt,yt,yt),Z=yt)},setLocked:function(yt){F=yt},setClear:function(yt,At,Qt,we,Ke){Ke===!0&&(yt*=we,At*=we,Qt*=we),wt.set(yt,At,Qt,we),et.equals(wt)===!1&&(s.clearColor(yt,At,Qt,we),et.copy(wt))},reset:function(){F=!1,Z=null,et.set(-1,0,0,0)}}}function e(){let F=!1,wt=!1,Z=null,et=null,yt=null;return{setReversed:function(At){wt=At},setTest:function(At){At?ot(s.DEPTH_TEST):tt(s.DEPTH_TEST)},setMask:function(At){Z!==At&&!F&&(s.depthMask(At),Z=At)},setFunc:function(At){if(wt&&(At=pv[At]),et!==At){switch(At){case ro:s.depthFunc(s.NEVER);break;case ao:s.depthFunc(s.ALWAYS);break;case oo:s.depthFunc(s.LESS);break;case rs:s.depthFunc(s.LEQUAL);break;case co:s.depthFunc(s.EQUAL);break;case lo:s.depthFunc(s.GEQUAL);break;case ho:s.depthFunc(s.GREATER);break;case uo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}et=At}},setLocked:function(At){F=At},setClear:function(At){yt!==At&&(s.clearDepth(At),yt=At)},reset:function(){F=!1,Z=null,et=null,yt=null}}}function n(){let F=!1,wt=null,Z=null,et=null,yt=null,At=null,Qt=null,we=null,Ke=null;return{setTest:function(ie){F||(ie?ot(s.STENCIL_TEST):tt(s.STENCIL_TEST))},setMask:function(ie){wt!==ie&&!F&&(s.stencilMask(ie),wt=ie)},setFunc:function(ie,$e,Zn){(Z!==ie||et!==$e||yt!==Zn)&&(s.stencilFunc(ie,$e,Zn),Z=ie,et=$e,yt=Zn)},setOp:function(ie,$e,Zn){(At!==ie||Qt!==$e||we!==Zn)&&(s.stencilOp(ie,$e,Zn),At=ie,Qt=$e,we=Zn)},setLocked:function(ie){F=ie},setClear:function(ie){Ke!==ie&&(s.clearStencil(ie),Ke=ie)},reset:function(){F=!1,wt=null,Z=null,et=null,yt=null,At=null,Qt=null,we=null,Ke=null}}}const i=new t,r=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,p=!1,_=null,g=null,m=null,y=null,x=null,M=null,R=null,A=new xt(0,0,0),w=0,C=!1,B=null,v=null,b=null,N=null,L=null;const D=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,O=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=O>=1):W.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=O>=2);let V=null,nt={};const at=s.getParameter(s.SCISSOR_BOX),dt=s.getParameter(s.VIEWPORT),Ft=new te().fromArray(at),qt=new te().fromArray(dt);function K(F,wt,Z,et){const yt=new Uint8Array(4),At=s.createTexture();s.bindTexture(F,At),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Qt=0;Qt<Z;Qt++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(wt,0,s.RGBA,1,1,et,0,s.RGBA,s.UNSIGNED_BYTE,yt):s.texImage2D(wt+Qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,yt);return At}const U={};U[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),U[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),U[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),U[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ot(s.DEPTH_TEST),r.setFunc(rs),st(!1),it(wl),ot(s.CULL_FACE),I(si);function ot(F){l[F]!==!0&&(s.enable(F),l[F]=!0)}function tt(F){l[F]!==!1&&(s.disable(F),l[F]=!1)}function _t(F,wt){return h[F]!==wt?(s.bindFramebuffer(F,wt),h[F]=wt,F===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=wt),F===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=wt),!0):!1}function pt(F,wt){let Z=d,et=!1;if(F){Z=u.get(wt),Z===void 0&&(Z=[],u.set(wt,Z));const yt=F.textures;if(Z.length!==yt.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let At=0,Qt=yt.length;At<Qt;At++)Z[At]=s.COLOR_ATTACHMENT0+At;Z.length=yt.length,et=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,et=!0);et&&s.drawBuffers(Z)}function Mt(F){return f!==F?(s.useProgram(F),f=F,!0):!1}const bt={[Si]:s.FUNC_ADD,[jd]:s.FUNC_SUBTRACT,[tf]:s.FUNC_REVERSE_SUBTRACT};bt[ef]=s.MIN,bt[nf]=s.MAX;const q={[sf]:s.ZERO,[rf]:s.ONE,[af]:s.SRC_COLOR,[io]:s.SRC_ALPHA,[df]:s.SRC_ALPHA_SATURATE,[hf]:s.DST_COLOR,[cf]:s.DST_ALPHA,[of]:s.ONE_MINUS_SRC_COLOR,[so]:s.ONE_MINUS_SRC_ALPHA,[uf]:s.ONE_MINUS_DST_COLOR,[lf]:s.ONE_MINUS_DST_ALPHA,[ff]:s.CONSTANT_COLOR,[pf]:s.ONE_MINUS_CONSTANT_COLOR,[mf]:s.CONSTANT_ALPHA,[gf]:s.ONE_MINUS_CONSTANT_ALPHA};function I(F,wt,Z,et,yt,At,Qt,we,Ke,ie){if(F===si){p===!0&&(tt(s.BLEND),p=!1);return}if(p===!1&&(ot(s.BLEND),p=!0),F!==Qd){if(F!==_||ie!==C){if((g!==Si||x!==Si)&&(s.blendEquation(s.FUNC_ADD),g=Si,x=Si),ie)switch(F){case es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Al:s.blendFunc(s.ONE,s.ONE);break;case El:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Al:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case El:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}m=null,y=null,M=null,R=null,A.set(0,0,0),w=0,_=F,C=ie}return}yt=yt||wt,At=At||Z,Qt=Qt||et,(wt!==g||yt!==x)&&(s.blendEquationSeparate(bt[wt],bt[yt]),g=wt,x=yt),(Z!==m||et!==y||At!==M||Qt!==R)&&(s.blendFuncSeparate(q[Z],q[et],q[At],q[Qt]),m=Z,y=et,M=At,R=Qt),(we.equals(A)===!1||Ke!==w)&&(s.blendColor(we.r,we.g,we.b,Ke),A.copy(we),w=Ke),_=F,C=!1}function lt(F,wt){F.side===On?tt(s.CULL_FACE):ot(s.CULL_FACE);let Z=F.side===Xe;wt&&(Z=!Z),st(Z),F.blending===es&&F.transparent===!1?I(si):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),i.setMask(F.colorWrite);const et=F.stencilWrite;a.setTest(et),et&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),It(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ot(s.SAMPLE_ALPHA_TO_COVERAGE):tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function st(F){B!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),B=F)}function it(F){F!==$d?(ot(s.CULL_FACE),F!==v&&(F===wl?s.cullFace(s.BACK):F===Jd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):tt(s.CULL_FACE),v=F}function ht(F){F!==b&&(G&&s.lineWidth(F),b=F)}function It(F,wt,Z){F?(ot(s.POLYGON_OFFSET_FILL),(N!==wt||L!==Z)&&(s.polygonOffset(wt,Z),N=wt,L=Z)):tt(s.POLYGON_OFFSET_FILL)}function ct(F){F?ot(s.SCISSOR_TEST):tt(s.SCISSOR_TEST)}function T(F){F===void 0&&(F=s.TEXTURE0+D-1),V!==F&&(s.activeTexture(F),V=F)}function S(F,wt,Z){Z===void 0&&(V===null?Z=s.TEXTURE0+D-1:Z=V);let et=nt[Z];et===void 0&&(et={type:void 0,texture:void 0},nt[Z]=et),(et.type!==F||et.texture!==wt)&&(V!==Z&&(s.activeTexture(Z),V=Z),s.bindTexture(F,wt||U[F]),et.type=F,et.texture=wt)}function H(){const F=nt[V];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function St(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $t(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function kt(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ht(F){Ft.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Ft.copy(F))}function Rt(F){qt.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),qt.copy(F))}function Jt(F,wt){let Z=c.get(wt);Z===void 0&&(Z=new WeakMap,c.set(wt,Z));let et=Z.get(F);et===void 0&&(et=s.getUniformBlockIndex(wt,F.name),Z.set(F,et))}function Xt(F,wt){const et=c.get(wt).get(F);o.get(wt)!==et&&(s.uniformBlockBinding(wt,et,F.__bindingPointIndex),o.set(wt,et))}function le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},V=null,nt={},h={},u=new WeakMap,d=[],f=null,p=!1,_=null,g=null,m=null,y=null,x=null,M=null,R=null,A=new xt(0,0,0),w=0,C=!1,B=null,v=null,b=null,N=null,L=null,Ft.set(0,0,s.canvas.width,s.canvas.height),qt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:ot,disable:tt,bindFramebuffer:_t,drawBuffers:pt,useProgram:Mt,setBlending:I,setMaterial:lt,setFlipSided:st,setCullFace:it,setLineWidth:ht,setPolygonOffset:It,setScissorTest:ct,activeTexture:T,bindTexture:S,unbindTexture:H,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:Et,texImage3D:kt,updateUBOMapping:Jt,uniformBlockBinding:Xt,texStorage2D:$t,texStorage3D:ut,texSubImage2D:J,texSubImage3D:Tt,compressedTexSubImage2D:mt,compressedTexSubImage3D:St,scissor:Ht,viewport:Rt,reset:le}}function gv(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function _v(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function xv(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function Dl(s,t,e,n){const i=yv(n);switch(e){case jl:return s*t;case eh:return s*t;case nh:return s*t*2;case Zo:return s*t/i.components*i.byteLength;case Xr:return s*t/i.components*i.byteLength;case ih:return s*t*2/i.components*i.byteLength;case Ko:return s*t*2/i.components*i.byteLength;case th:return s*t*3/i.components*i.byteLength;case We:return s*t*4/i.components*i.byteLength;case $o:return s*t*4/i.components*i.byteLength;case gr:case _r:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xr:case yr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case po:case go:return Math.max(s,16)*Math.max(t,8)/4;case fo:case mo:return Math.max(s,8)*Math.max(t,8)/2;case _o:case xo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case yo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case So:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case bo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case wo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case To:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Co:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Io:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Po:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Lo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Do:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case vr:case Uo:case No:return Math.ceil(s/4)*Math.ceil(t/4)*16;case sh:case Oo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Fo:case Bo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yv(s){switch(s){case Vn:case $l:return{byteLength:1,components:1};case Gs:case Jl:case $s:return{byteLength:2,components:1};case Yo:case qo:return{byteLength:2,components:4};case oi:case Xo:case en:return{byteLength:4,components:1};case Ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}const vv={contain:gv,cover:_v,fill:xv,getByteLength:Dl};function Mv(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new j,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,S){return f?new OffscreenCanvas(T,S):Nr("canvas")}function _(T,S,H){let $=1;const Q=ct(T);if((Q.width>H||Q.height>H)&&($=H/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const J=Math.floor($*Q.width),Tt=Math.floor($*Q.height);u===void 0&&(u=p(J,Tt));const mt=S?p(J,Tt):u;return mt.width=J,mt.height=Tt,mt.getContext("2d").drawImage(T,0,0,J,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+J+"x"+Tt+")."),mt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function g(T){return T.generateMipmaps&&T.minFilter!==Pe&&T.minFilter!==Se}function m(T){s.generateMipmap(T)}function y(T,S,H,$,Q=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=S;if(S===s.RED&&(H===s.FLOAT&&(J=s.R32F),H===s.HALF_FLOAT&&(J=s.R16F),H===s.UNSIGNED_BYTE&&(J=s.R8)),S===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.R8UI),H===s.UNSIGNED_SHORT&&(J=s.R16UI),H===s.UNSIGNED_INT&&(J=s.R32UI),H===s.BYTE&&(J=s.R8I),H===s.SHORT&&(J=s.R16I),H===s.INT&&(J=s.R32I)),S===s.RG&&(H===s.FLOAT&&(J=s.RG32F),H===s.HALF_FLOAT&&(J=s.RG16F),H===s.UNSIGNED_BYTE&&(J=s.RG8)),S===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.RG8UI),H===s.UNSIGNED_SHORT&&(J=s.RG16UI),H===s.UNSIGNED_INT&&(J=s.RG32UI),H===s.BYTE&&(J=s.RG8I),H===s.SHORT&&(J=s.RG16I),H===s.INT&&(J=s.RG32I)),S===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.RGB8UI),H===s.UNSIGNED_SHORT&&(J=s.RGB16UI),H===s.UNSIGNED_INT&&(J=s.RGB32UI),H===s.BYTE&&(J=s.RGB8I),H===s.SHORT&&(J=s.RGB16I),H===s.INT&&(J=s.RGB32I)),S===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),H===s.UNSIGNED_INT&&(J=s.RGBA32UI),H===s.BYTE&&(J=s.RGBA8I),H===s.SHORT&&(J=s.RGBA16I),H===s.INT&&(J=s.RGBA32I)),S===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),S===s.RGBA){const Tt=Q?Ir:ne.getTransfer($);H===s.FLOAT&&(J=s.RGBA32F),H===s.HALF_FLOAT&&(J=s.RGBA16F),H===s.UNSIGNED_BYTE&&(J=Tt===he?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(T,S){let H;return T?S===null||S===oi||S===as?H=s.DEPTH24_STENCIL8:S===en?H=s.DEPTH32F_STENCIL8:S===Gs&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===oi||S===as?H=s.DEPTH_COMPONENT24:S===en?H=s.DEPTH_COMPONENT32F:S===Gs&&(H=s.DEPTH_COMPONENT16),H}function M(T,S){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==Pe&&T.minFilter!==Se?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function R(T){const S=T.target;S.removeEventListener("dispose",R),w(S),S.isVideoTexture&&h.delete(S)}function A(T){const S=T.target;S.removeEventListener("dispose",A),B(S)}function w(T){const S=n.get(T);if(S.__webglInit===void 0)return;const H=T.source,$=d.get(H);if($){const Q=$[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&C(T),Object.keys($).length===0&&d.delete(H)}n.remove(T)}function C(T){const S=n.get(T);s.deleteTexture(S.__webglTexture);const H=T.source,$=d.get(H);delete $[S.__cacheKey],a.memory.textures--}function B(T){const S=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let Q=0;Q<S.__webglFramebuffer[$].length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[$][Q]);else s.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)s.deleteFramebuffer(S.__webglFramebuffer[$]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=T.textures;for(let $=0,Q=H.length;$<Q;$++){const J=n.get(H[$]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(H[$])}n.remove(T)}let v=0;function b(){v=0}function N(){const T=v;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),v+=1,T}function L(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function D(T,S){const H=n.get(T);if(T.isVideoTexture&&ht(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qt(H,T,S);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+S)}function G(T,S){const H=n.get(T);if(T.version>0&&H.__version!==T.version){qt(H,T,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+S)}function O(T,S){const H=n.get(T);if(T.version>0&&H.__version!==T.version){qt(H,T,S);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+S)}function W(T,S){const H=n.get(T);if(T.version>0&&H.__version!==T.version){K(H,T,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+S)}const V={[Vs]:s.REPEAT,[un]:s.CLAMP_TO_EDGE,[Tr]:s.MIRRORED_REPEAT},nt={[Pe]:s.NEAREST,[Kl]:s.NEAREST_MIPMAP_NEAREST,[Ns]:s.NEAREST_MIPMAP_LINEAR,[Se]:s.LINEAR,[mr]:s.LINEAR_MIPMAP_NEAREST,[Tn]:s.LINEAR_MIPMAP_LINEAR},at={[Lf]:s.NEVER,[Bf]:s.ALWAYS,[Df]:s.LESS,[ah]:s.LEQUAL,[Uf]:s.EQUAL,[Ff]:s.GEQUAL,[Nf]:s.GREATER,[Of]:s.NOTEQUAL};function dt(T,S){if(S.type===en&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Se||S.magFilter===mr||S.magFilter===Ns||S.magFilter===Tn||S.minFilter===Se||S.minFilter===mr||S.minFilter===Ns||S.minFilter===Tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,V[S.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,V[S.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,V[S.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,nt[S.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,nt[S.minFilter]),S.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,at[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Pe||S.minFilter!==Ns&&S.minFilter!==Tn||S.type===en&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(T,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ft(T,S){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",R));const $=S.source;let Q=d.get($);Q===void 0&&(Q={},d.set($,Q));const J=L(S);if(J!==T.__cacheKey){Q[J]===void 0&&(Q[J]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Q[J].usedTimes++;const Tt=Q[T.__cacheKey];Tt!==void 0&&(Q[T.__cacheKey].usedTimes--,Tt.usedTimes===0&&C(S)),T.__cacheKey=J,T.__webglTexture=Q[J].texture}return H}function qt(T,S,H){let $=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=s.TEXTURE_3D);const Q=Ft(T,S),J=S.source;e.bindTexture($,T.__webglTexture,s.TEXTURE0+H);const Tt=n.get(J);if(J.version!==Tt.__version||Q===!0){e.activeTexture(s.TEXTURE0+H);const mt=ne.getPrimaries(ne.workingColorSpace),St=S.colorSpace===ei?null:ne.getPrimaries(S.colorSpace),$t=S.colorSpace===ei||mt===St?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let ut=_(S.image,!1,i.maxTextureSize);ut=It(S,ut);const Et=r.convert(S.format,S.colorSpace),kt=r.convert(S.type);let Ht=y(S.internalFormat,Et,kt,S.colorSpace,S.isVideoTexture);dt($,S);let Rt;const Jt=S.mipmaps,Xt=S.isVideoTexture!==!0,le=Tt.__version===void 0||Q===!0,F=J.dataReady,wt=M(S,ut);if(S.isDepthTexture)Ht=x(S.format===os,S.type),le&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,Ht,ut.width,ut.height):e.texImage2D(s.TEXTURE_2D,0,Ht,ut.width,ut.height,0,Et,kt,null));else if(S.isDataTexture)if(Jt.length>0){Xt&&le&&e.texStorage2D(s.TEXTURE_2D,wt,Ht,Jt[0].width,Jt[0].height);for(let Z=0,et=Jt.length;Z<et;Z++)Rt=Jt[Z],Xt?F&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,Rt.width,Rt.height,Et,kt,Rt.data):e.texImage2D(s.TEXTURE_2D,Z,Ht,Rt.width,Rt.height,0,Et,kt,Rt.data);S.generateMipmaps=!1}else Xt?(le&&e.texStorage2D(s.TEXTURE_2D,wt,Ht,ut.width,ut.height),F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ut.width,ut.height,Et,kt,ut.data)):e.texImage2D(s.TEXTURE_2D,0,Ht,ut.width,ut.height,0,Et,kt,ut.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xt&&le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Ht,Jt[0].width,Jt[0].height,ut.depth);for(let Z=0,et=Jt.length;Z<et;Z++)if(Rt=Jt[Z],S.format!==We)if(Et!==null)if(Xt){if(F)if(S.layerUpdates.size>0){const yt=Dl(Rt.width,Rt.height,S.format,S.type);for(const At of S.layerUpdates){const Qt=Rt.data.subarray(At*yt/Rt.data.BYTES_PER_ELEMENT,(At+1)*yt/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,At,Rt.width,Rt.height,1,Et,Qt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Rt.width,Rt.height,ut.depth,Et,Rt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,Ht,Rt.width,Rt.height,ut.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,Rt.width,Rt.height,ut.depth,Et,kt,Rt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,Ht,Rt.width,Rt.height,ut.depth,0,Et,kt,Rt.data)}else{Xt&&le&&e.texStorage2D(s.TEXTURE_2D,wt,Ht,Jt[0].width,Jt[0].height);for(let Z=0,et=Jt.length;Z<et;Z++)Rt=Jt[Z],S.format!==We?Et!==null?Xt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,Rt.width,Rt.height,Et,Rt.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,Ht,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?F&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,Rt.width,Rt.height,Et,kt,Rt.data):e.texImage2D(s.TEXTURE_2D,Z,Ht,Rt.width,Rt.height,0,Et,kt,Rt.data)}else if(S.isDataArrayTexture)if(Xt){if(le&&e.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Ht,ut.width,ut.height,ut.depth),F)if(S.layerUpdates.size>0){const Z=Dl(ut.width,ut.height,S.format,S.type);for(const et of S.layerUpdates){const yt=ut.data.subarray(et*Z/ut.data.BYTES_PER_ELEMENT,(et+1)*Z/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,ut.width,ut.height,1,Et,kt,yt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Et,kt,ut.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ht,ut.width,ut.height,ut.depth,0,Et,kt,ut.data);else if(S.isData3DTexture)Xt?(le&&e.texStorage3D(s.TEXTURE_3D,wt,Ht,ut.width,ut.height,ut.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Et,kt,ut.data)):e.texImage3D(s.TEXTURE_3D,0,Ht,ut.width,ut.height,ut.depth,0,Et,kt,ut.data);else if(S.isFramebufferTexture){if(le)if(Xt)e.texStorage2D(s.TEXTURE_2D,wt,Ht,ut.width,ut.height);else{let Z=ut.width,et=ut.height;for(let yt=0;yt<wt;yt++)e.texImage2D(s.TEXTURE_2D,yt,Ht,Z,et,0,Et,kt,null),Z>>=1,et>>=1}}else if(Jt.length>0){if(Xt&&le){const Z=ct(Jt[0]);e.texStorage2D(s.TEXTURE_2D,wt,Ht,Z.width,Z.height)}for(let Z=0,et=Jt.length;Z<et;Z++)Rt=Jt[Z],Xt?F&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,Et,kt,Rt):e.texImage2D(s.TEXTURE_2D,Z,Ht,Et,kt,Rt);S.generateMipmaps=!1}else if(Xt){if(le){const Z=ct(ut);e.texStorage2D(s.TEXTURE_2D,wt,Ht,Z.width,Z.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Et,kt,ut)}else e.texImage2D(s.TEXTURE_2D,0,Ht,Et,kt,ut);g(S)&&m($),Tt.__version=J.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function K(T,S,H){if(S.image.length!==6)return;const $=Ft(T,S),Q=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+H);const J=n.get(Q);if(Q.version!==J.__version||$===!0){e.activeTexture(s.TEXTURE0+H);const Tt=ne.getPrimaries(ne.workingColorSpace),mt=S.colorSpace===ei?null:ne.getPrimaries(S.colorSpace),St=S.colorSpace===ei||Tt===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const $t=S.isCompressedTexture||S.image[0].isCompressedTexture,ut=S.image[0]&&S.image[0].isDataTexture,Et=[];for(let et=0;et<6;et++)!$t&&!ut?Et[et]=_(S.image[et],!0,i.maxCubemapSize):Et[et]=ut?S.image[et].image:S.image[et],Et[et]=It(S,Et[et]);const kt=Et[0],Ht=r.convert(S.format,S.colorSpace),Rt=r.convert(S.type),Jt=y(S.internalFormat,Ht,Rt,S.colorSpace),Xt=S.isVideoTexture!==!0,le=J.__version===void 0||$===!0,F=Q.dataReady;let wt=M(S,kt);dt(s.TEXTURE_CUBE_MAP,S);let Z;if($t){Xt&&le&&e.texStorage2D(s.TEXTURE_CUBE_MAP,wt,Jt,kt.width,kt.height);for(let et=0;et<6;et++){Z=Et[et].mipmaps;for(let yt=0;yt<Z.length;yt++){const At=Z[yt];S.format!==We?Ht!==null?Xt?F&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt,0,0,At.width,At.height,Ht,At.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt,Jt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt,0,0,At.width,At.height,Ht,Rt,At.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt,Jt,At.width,At.height,0,Ht,Rt,At.data)}}}else{if(Z=S.mipmaps,Xt&&le){Z.length>0&&wt++;const et=ct(Et[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,wt,Jt,et.width,et.height)}for(let et=0;et<6;et++)if(ut){Xt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Et[et].width,Et[et].height,Ht,Rt,Et[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Jt,Et[et].width,Et[et].height,0,Ht,Rt,Et[et].data);for(let yt=0;yt<Z.length;yt++){const Qt=Z[yt].image[et].image;Xt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt+1,0,0,Qt.width,Qt.height,Ht,Rt,Qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt+1,Jt,Qt.width,Qt.height,0,Ht,Rt,Qt.data)}}else{Xt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ht,Rt,Et[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Jt,Ht,Rt,Et[et]);for(let yt=0;yt<Z.length;yt++){const At=Z[yt];Xt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt+1,0,0,Ht,Rt,At.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,yt+1,Jt,Ht,Rt,At.image[et])}}}g(S)&&m(s.TEXTURE_CUBE_MAP),J.__version=Q.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function U(T,S,H,$,Q,J){const Tt=r.convert(H.format,H.colorSpace),mt=r.convert(H.type),St=y(H.internalFormat,Tt,mt,H.colorSpace);if(!n.get(S).__hasExternalTextures){const ut=Math.max(1,S.width>>J),Et=Math.max(1,S.height>>J);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,J,St,ut,Et,S.depth,0,Tt,mt,null):e.texImage2D(Q,J,St,ut,Et,0,Tt,mt,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),it(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Q,n.get(H).__webglTexture,0,st(S)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Q,n.get(H).__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(T,S,H){if(s.bindRenderbuffer(s.RENDERBUFFER,T),S.depthBuffer){const $=S.depthTexture,Q=$&&$.isDepthTexture?$.type:null,J=x(S.stencilBuffer,Q),Tt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,mt=st(S);it(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt,J,S.width,S.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,J,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,J,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,T)}else{const $=S.textures;for(let Q=0;Q<$.length;Q++){const J=$[Q],Tt=r.convert(J.format,J.colorSpace),mt=r.convert(J.type),St=y(J.internalFormat,Tt,mt,J.colorSpace),$t=st(S);H&&it(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,St,S.width,S.height):it(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,St,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,St,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function tt(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),D(S.depthTexture,0);const $=n.get(S.depthTexture).__webglTexture,Q=st(S);if(S.depthTexture.format===ns)it(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(S.depthTexture.format===os)it(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function _t(T){const S=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const $=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=$}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");tt(S.__webglFramebuffer,T)}else if(H){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=s.createRenderbuffer(),ot(S.__webglDepthbuffer[$],T,!1);else{const Q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,J)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ot(S.__webglDepthbuffer,T,!1);else{const $=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(T,S,H){const $=n.get(T);S!==void 0&&U($.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&_t(T)}function Mt(T){const S=T.texture,H=n.get(T),$=n.get(S);T.addEventListener("dispose",A);const Q=T.textures,J=T.isWebGLCubeRenderTarget===!0,Tt=Q.length>1;if(Tt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=S.version,a.memory.textures++),J){H.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[mt]=[];for(let St=0;St<S.mipmaps.length;St++)H.__webglFramebuffer[mt][St]=s.createFramebuffer()}else H.__webglFramebuffer[mt]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let mt=0;mt<S.mipmaps.length;mt++)H.__webglFramebuffer[mt]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Tt)for(let mt=0,St=Q.length;mt<St;mt++){const $t=n.get(Q[mt]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),a.memory.textures++)}if(T.samples>0&&it(T)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let mt=0;mt<Q.length;mt++){const St=Q[mt];H.__webglColorRenderbuffer[mt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[mt]);const $t=r.convert(St.format,St.colorSpace),ut=r.convert(St.type),Et=y(St.internalFormat,$t,ut,St.colorSpace,T.isXRRenderTarget===!0),kt=st(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,Et,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,H.__webglColorRenderbuffer[mt])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(H.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),dt(s.TEXTURE_CUBE_MAP,S);for(let mt=0;mt<6;mt++)if(S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)U(H.__webglFramebuffer[mt][St],T,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,St);else U(H.__webglFramebuffer[mt],T,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);g(S)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let mt=0,St=Q.length;mt<St;mt++){const $t=Q[mt],ut=n.get($t);e.bindTexture(s.TEXTURE_2D,ut.__webglTexture),dt(s.TEXTURE_2D,$t),U(H.__webglFramebuffer,T,$t,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,0),g($t)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let mt=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(mt=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(mt,$.__webglTexture),dt(mt,S),S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)U(H.__webglFramebuffer[St],T,S,s.COLOR_ATTACHMENT0,mt,St);else U(H.__webglFramebuffer,T,S,s.COLOR_ATTACHMENT0,mt,0);g(S)&&m(mt),e.unbindTexture()}T.depthBuffer&&_t(T)}function bt(T){const S=T.textures;for(let H=0,$=S.length;H<$;H++){const Q=S[H];if(g(Q)){const J=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Tt=n.get(Q).__webglTexture;e.bindTexture(J,Tt),m(J),e.unbindTexture()}}}const q=[],I=[];function lt(T){if(T.samples>0){if(it(T)===!1){const S=T.textures,H=T.width,$=T.height;let Q=s.COLOR_BUFFER_BIT;const J=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Tt=n.get(T),mt=S.length>1;if(mt)for(let St=0;St<S.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let St=0;St<S.length;St++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),mt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[St]);const $t=n.get(S[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$t,0)}s.blitFramebuffer(0,0,H,$,0,0,H,$,Q,s.NEAREST),c===!0&&(q.length=0,I.length=0,q.push(s.COLOR_ATTACHMENT0+St),T.depthBuffer&&T.resolveDepthBuffer===!1&&(q.push(J),I.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,q))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),mt)for(let St=0;St<S.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,Tt.__webglColorRenderbuffer[St]);const $t=n.get(S[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,$t,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const S=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function st(T){return Math.min(i.maxSamples,T.samples)}function it(T){const S=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ht(T){const S=a.render.frame;h.get(T)!==S&&(h.set(T,S),T.update())}function It(T,S){const H=T.colorSpace,$=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||H!==li&&H!==ei&&(ne.getTransfer(H)===he?($!==We||Q!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function ct(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=b,this.setTexture2D=D,this.setTexture2DArray=G,this.setTexture3D=O,this.setTextureCube=W,this.rebindTextures=pt,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=U,this.useMultisampledRTT=it}function jf(s,t){function e(n,i=ei){let r;const a=ne.getTransfer(i);if(n===Vn)return s.UNSIGNED_BYTE;if(n===Yo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===qo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ql)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===$l)return s.BYTE;if(n===Jl)return s.SHORT;if(n===Gs)return s.UNSIGNED_SHORT;if(n===Xo)return s.INT;if(n===oi)return s.UNSIGNED_INT;if(n===en)return s.FLOAT;if(n===$s)return s.HALF_FLOAT;if(n===jl)return s.ALPHA;if(n===th)return s.RGB;if(n===We)return s.RGBA;if(n===eh)return s.LUMINANCE;if(n===nh)return s.LUMINANCE_ALPHA;if(n===ns)return s.DEPTH_COMPONENT;if(n===os)return s.DEPTH_STENCIL;if(n===Zo)return s.RED;if(n===Xr)return s.RED_INTEGER;if(n===ih)return s.RG;if(n===Ko)return s.RG_INTEGER;if(n===$o)return s.RGBA_INTEGER;if(n===gr||n===_r||n===xr||n===yr)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fo||n===po||n===mo||n===go)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===po)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===go)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_o||n===xo||n===yo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_o||n===xo)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vo||n===Mo||n===So||n===bo||n===wo||n===Ao||n===Eo||n===To||n===Ro||n===Co||n===Io||n===Po||n===Lo||n===Do)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===So)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ao)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Eo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===To)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ro)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Co)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Io)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Po)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Do)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vr||n===Uo||n===No)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===vr)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===No)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sh||n===Oo||n===Fo||n===Bo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===vr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===as?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class tp extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Rn extends ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sv={type:"move"};class rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(l,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;l.inputState.pinching&&d>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sv)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Rn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wv=`
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

}`;class Av{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new ye,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new In({vertexShader:bv,fragmentShader:wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new us(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ev extends Wn{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,p=null;const _=new Av,g=e.getContextAttributes();let m=null,y=null;const x=[],M=[],R=new j;let A=null;const w=new Ie;w.layers.enable(1),w.viewport=new te;const C=new Ie;C.layers.enable(2),C.viewport=new te;const B=[w,C],v=new tp;v.layers.enable(1),v.layers.enable(2);let b=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let U=x[K];return U===void 0&&(U=new rl,x[K]=U),U.getTargetRaySpace()},this.getControllerGrip=function(K){let U=x[K];return U===void 0&&(U=new rl,x[K]=U),U.getGripSpace()},this.getHand=function(K){let U=x[K];return U===void 0&&(U=new rl,x[K]=U),U.getHandSpace()};function L(K){const U=M.indexOf(K.inputSource);if(U===-1)return;const ot=x[U];ot!==void 0&&(ot.update(K.inputSource,K.frame,l||a),ot.dispatchEvent({type:K.type,data:K.inputSource}))}function D(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",G);for(let K=0;K<x.length;K++){const U=M[K];U!==null&&(M[K]=null,x[K].disconnect(U))}b=null,N=null,_.reset(),t.setRenderTarget(m),f=null,d=null,u=null,i=null,y=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",D),i.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){const U={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,U),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Cn(f.framebufferWidth,f.framebufferHeight,{format:We,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let U=null,ot=null,tt=null;g.depth&&(tt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,U=g.stencil?os:ns,ot=g.stencil?as:oi);const _t={colorFormat:e.RGBA8,depthFormat:tt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(_t),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Cn(d.textureWidth,d.textureHeight,{format:We,type:Vn,depthTexture:new dh(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),qt.setContext(i),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(K){for(let U=0;U<K.removed.length;U++){const ot=K.removed[U],tt=M.indexOf(ot);tt>=0&&(M[tt]=null,x[tt].disconnect(ot))}for(let U=0;U<K.added.length;U++){const ot=K.added[U];let tt=M.indexOf(ot);if(tt===-1){for(let pt=0;pt<x.length;pt++)if(pt>=M.length){M.push(ot),tt=pt;break}else if(M[pt]===null){M[pt]=ot,tt=pt;break}if(tt===-1)break}const _t=x[tt];_t&&_t.connect(ot)}}const O=new P,W=new P;function V(K,U,ot){O.setFromMatrixPosition(U.matrixWorld),W.setFromMatrixPosition(ot.matrixWorld);const tt=O.distanceTo(W),_t=U.projectionMatrix.elements,pt=ot.projectionMatrix.elements,Mt=_t[14]/(_t[10]-1),bt=_t[14]/(_t[10]+1),q=(_t[9]+1)/_t[5],I=(_t[9]-1)/_t[5],lt=(_t[8]-1)/_t[0],st=(pt[8]+1)/pt[0],it=Mt*lt,ht=Mt*st,It=tt/(-lt+st),ct=It*-lt;if(U.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ct),K.translateZ(It),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),_t[10]===-1)K.projectionMatrix.copy(U.projectionMatrix),K.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const T=Mt+It,S=bt+It,H=it-ct,$=ht+(tt-ct),Q=q*bt/S*T,J=I*bt/S*T;K.projectionMatrix.makePerspective(H,$,Q,J,T,S),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function nt(K,U){U===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(U.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let U=K.near,ot=K.far;_.texture!==null&&(_.depthNear>0&&(U=_.depthNear),_.depthFar>0&&(ot=_.depthFar)),v.near=C.near=w.near=U,v.far=C.far=w.far=ot,(b!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,N=v.far);const tt=K.parent,_t=v.cameras;nt(v,tt);for(let pt=0;pt<_t.length;pt++)nt(_t[pt],tt);_t.length===2?V(v,w,C):v.projectionMatrix.copy(w.projectionMatrix),at(K,v,tt)};function at(K,U,ot){ot===null?K.matrix.copy(U.matrixWorld):(K.matrix.copy(ot.matrixWorld),K.matrix.invert(),K.matrix.multiply(U.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(U.projectionMatrix),K.projectionMatrixInverse.copy(U.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ws*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let dt=null;function Ft(K,U){if(h=U.getViewerPose(l||a),p=U,h!==null){const ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let tt=!1;ot.length!==v.cameras.length&&(v.cameras.length=0,tt=!0);for(let pt=0;pt<ot.length;pt++){const Mt=ot[pt];let bt=null;if(f!==null)bt=f.getViewport(Mt);else{const I=u.getViewSubImage(d,Mt);bt=I.viewport,pt===0&&(t.setRenderTargetTextures(y,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(y))}let q=B[pt];q===void 0&&(q=new Ie,q.layers.enable(pt),q.viewport=new te,B[pt]=q),q.matrix.fromArray(Mt.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(Mt.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(bt.x,bt.y,bt.width,bt.height),pt===0&&(v.matrix.copy(q.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),tt===!0&&v.cameras.push(q)}const _t=i.enabledFeatures;if(_t&&_t.includes("depth-sensing")){const pt=u.getDepthInformation(ot[0]);pt&&pt.isValid&&pt.texture&&_.init(t,pt,i.renderState)}}for(let ot=0;ot<x.length;ot++){const tt=M[ot],_t=x[ot];tt!==null&&_t!==void 0&&_t.update(tt,U,l||a)}dt&&dt(K,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),p=null}const qt=new Zf;qt.setAnimationLoop(Ft),this.setAnimationLoop=function(K){dt=K},this.dispose=function(){}}}const ki=new pn,Tv=new Ot;function Rv(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Wf(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,y,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,y,x):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Xe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Xe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=t.get(m),x=y.envMap,M=y.envMapRotation;x&&(g.envMap.value=x,ki.copy(M),ki.x*=-1,ki.y*=-1,ki.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),g.envMapRotation.value.setFromMatrix4(Tv.makeRotationFromEuler(ki)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,y,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=x*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xe&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Cv(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const M=x.program;n.uniformBlockBinding(y,M)}function l(y,x){let M=i[y.id];M===void 0&&(p(y),M=h(y),i[y.id]=M,y.addEventListener("dispose",g));const R=x.program;n.updateUBOMapping(y,R);const A=t.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function h(y){const x=u();y.__bindingPointIndex=x;const M=s.createBuffer(),R=y.__size,A=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,R,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,M),M}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=i[y.id],M=y.uniforms,R=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let A=0,w=M.length;A<w;A++){const C=Array.isArray(M[A])?M[A]:[M[A]];for(let B=0,v=C.length;B<v;B++){const b=C[B];if(f(b,A,B,R)===!0){const N=b.__offset,L=Array.isArray(b.value)?b.value:[b.value];let D=0;for(let G=0;G<L.length;G++){const O=L[G],W=_(O);typeof O=="number"||typeof O=="boolean"?(b.__data[0]=O,s.bufferSubData(s.UNIFORM_BUFFER,N+D,b.__data)):O.isMatrix3?(b.__data[0]=O.elements[0],b.__data[1]=O.elements[1],b.__data[2]=O.elements[2],b.__data[3]=0,b.__data[4]=O.elements[3],b.__data[5]=O.elements[4],b.__data[6]=O.elements[5],b.__data[7]=0,b.__data[8]=O.elements[6],b.__data[9]=O.elements[7],b.__data[10]=O.elements[8],b.__data[11]=0):(O.toArray(b.__data,D),D+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,b.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,x,M,R){const A=y.value,w=x+"_"+M;if(R[w]===void 0)return typeof A=="number"||typeof A=="boolean"?R[w]=A:R[w]=A.clone(),!0;{const C=R[w];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return R[w]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function p(y){const x=y.uniforms;let M=0;const R=16;for(let w=0,C=x.length;w<C;w++){const B=Array.isArray(x[w])?x[w]:[x[w]];for(let v=0,b=B.length;v<b;v++){const N=B[v],L=Array.isArray(N.value)?N.value:[N.value];for(let D=0,G=L.length;D<G;D++){const O=L[D],W=_(O),V=M%R,nt=V%W.boundary,at=V+nt;M+=nt,at!==0&&R-at<W.storage&&(M+=R-at),N.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=W.storage}}}const A=M%R;return A>0&&(M+=R-A),y.__size=M,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:m}}class ep{constructor(t={}){const{canvas:e=kf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),p=new Int32Array(4);let _=null,g=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=je,this.toneMapping=ri,this.toneMappingExposure=1;const x=this;let M=!1,R=0,A=0,w=null,C=-1,B=null;const v=new te,b=new te;let N=null;const L=new xt(0);let D=0,G=e.width,O=e.height,W=1,V=null,nt=null;const at=new te(0,0,G,O),dt=new te(0,0,G,O);let Ft=!1;const qt=new Zr;let K=!1,U=!1;const ot=new Ot,tt=new Ot,_t=new P,pt=new te,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function q(){return w===null?W:1}let I=n;function lt(E,z){return e.getContext(E,z)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Go}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",At,!1),I===null){const z="webgl2";if(I=lt(z,E),I===null)throw lt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let st,it,ht,It,ct,T,S,H,$,Q,J,Tt,mt,St,$t,ut,Et,kt,Ht,Rt,Jt,Xt,le,F;function wt(){st=new Nx(I),st.init(),Xt=new jf(I,st),it=new Cx(I,st,t,Xt),ht=new mv(I),it.reverseDepthBuffer&&ht.buffers.depth.setReversed(!0),It=new Bx(I),ct=new nv,T=new Mv(I,st,ht,ct,it,Xt,It),S=new Px(x),H=new Ux(x),$=new X0(I),le=new Tx(I,$),Q=new Ox(I,$,It,le),J=new kx(I,Q,$,It),Ht=new zx(I,it,T),ut=new Ix(ct),Tt=new ev(x,S,H,st,it,le,ut),mt=new Rv(x,ct),St=new sv,$t=new hv(st),kt=new Ex(x,S,H,ht,J,d,c),Et=new fv(x,J,it),F=new Cv(I,It,it,ht),Rt=new Rx(I,st,It),Jt=new Fx(I,st,It),It.programs=Tt.programs,x.capabilities=it,x.extensions=st,x.properties=ct,x.renderLists=St,x.shadowMap=Et,x.state=ht,x.info=It}wt();const Z=new Ev(x,I);this.xr=Z,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=st.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=st.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(G,O,!1))},this.getSize=function(E){return E.set(G,O)},this.setSize=function(E,z,X=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,O=z,e.width=Math.floor(E*W),e.height=Math.floor(z*W),X===!0&&(e.style.width=E+"px",e.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(G*W,O*W).floor()},this.setDrawingBufferSize=function(E,z,X){G=E,O=z,W=X,e.width=Math.floor(E*X),e.height=Math.floor(z*X),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(v)},this.getViewport=function(E){return E.copy(at)},this.setViewport=function(E,z,X,Y){E.isVector4?at.set(E.x,E.y,E.z,E.w):at.set(E,z,X,Y),ht.viewport(v.copy(at).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(dt)},this.setScissor=function(E,z,X,Y){E.isVector4?dt.set(E.x,E.y,E.z,E.w):dt.set(E,z,X,Y),ht.scissor(b.copy(dt).multiplyScalar(W).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(E){ht.setScissorTest(Ft=E)},this.setOpaqueSort=function(E){V=E},this.setTransparentSort=function(E){nt=E},this.getClearColor=function(E){return E.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(E=!0,z=!0,X=!0){let Y=0;if(E){let k=!1;if(w!==null){const ft=w.texture.format;k=ft===$o||ft===Ko||ft===Xr}if(k){const ft=w.texture.type,vt=ft===Vn||ft===oi||ft===Gs||ft===as||ft===Yo||ft===qo,Pt=kt.getClearColor(),Dt=kt.getClearAlpha(),Bt=Pt.r,zt=Pt.g,Ut=Pt.b;vt?(f[0]=Bt,f[1]=zt,f[2]=Ut,f[3]=Dt,I.clearBufferuiv(I.COLOR,0,f)):(p[0]=Bt,p[1]=zt,p[2]=Ut,p[3]=Dt,I.clearBufferiv(I.COLOR,0,p))}else Y|=I.COLOR_BUFFER_BIT}z&&(Y|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",At,!1),St.dispose(),$t.dispose(),ct.dispose(),S.dispose(),H.dispose(),J.dispose(),le.dispose(),F.dispose(),Tt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Yh),Z.removeEventListener("sessionend",qh),Ui.stop()};function et(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=It.autoReset,z=Et.enabled,X=Et.autoUpdate,Y=Et.needsUpdate,k=Et.type;wt(),It.autoReset=E,Et.enabled=z,Et.autoUpdate=X,Et.needsUpdate=Y,Et.type=k}function At(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Qt(E){const z=E.target;z.removeEventListener("dispose",Qt),we(z)}function we(E){Ke(E),ct.remove(E)}function Ke(E){const z=ct.get(E).programs;z!==void 0&&(z.forEach(function(X){Tt.releaseProgram(X)}),E.isShaderMaterial&&Tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,X,Y,k,ft){z===null&&(z=Mt);const vt=k.isMesh&&k.matrixWorld.determinant()<0,Pt=lm(E,z,X,Y,k);ht.setMaterial(Y,vt);let Dt=X.index,Bt=1;if(Y.wireframe===!0){if(Dt=Q.getWireframeAttribute(X),Dt===void 0)return;Bt=2}const zt=X.drawRange,Ut=X.attributes.position;let oe=zt.start*Bt,ue=(zt.start+zt.count)*Bt;ft!==null&&(oe=Math.max(oe,ft.start*Bt),ue=Math.min(ue,(ft.start+ft.count)*Bt)),Dt!==null?(oe=Math.max(oe,0),ue=Math.min(ue,Dt.count)):Ut!=null&&(oe=Math.max(oe,0),ue=Math.min(ue,Ut.count));const ge=ue-oe;if(ge<0||ge===1/0)return;le.setup(k,Y,Pt,X,Dt);let rn,re=Rt;if(Dt!==null&&(rn=$.get(Dt),re=Jt,re.setIndex(rn)),k.isMesh)Y.wireframe===!0?(ht.setLineWidth(Y.wireframeLinewidth*q()),re.setMode(I.LINES)):re.setMode(I.TRIANGLES);else if(k.isLine){let Nt=Y.linewidth;Nt===void 0&&(Nt=1),ht.setLineWidth(Nt*q()),k.isLineSegments?re.setMode(I.LINES):k.isLineLoop?re.setMode(I.LINE_LOOP):re.setMode(I.LINE_STRIP)}else k.isPoints?re.setMode(I.POINTS):k.isSprite&&re.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)re.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))re.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Nt=k._multiDrawStarts,Le=k._multiDrawCounts,ae=k._multiDrawCount,vn=Dt?$.get(Dt).bytesPerElement:1,gs=ct.get(Y).currentProgram.getUniforms();for(let an=0;an<ae;an++)gs.setValue(I,"_gl_DrawID",an),re.render(Nt[an]/vn,Le[an])}else if(k.isInstancedMesh)re.renderInstances(oe,ge,k.count);else if(X.isInstancedBufferGeometry){const Nt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Le=Math.min(X.instanceCount,Nt);re.renderInstances(oe,ge,Le)}else re.render(oe,ge)};function ie(E,z,X){E.transparent===!0&&E.side===On&&E.forceSinglePass===!1?(E.side=Xe,E.needsUpdate=!0,ia(E,z,X),E.side=Hn,E.needsUpdate=!0,ia(E,z,X),E.side=On):ia(E,z,X)}this.compile=function(E,z,X=null){X===null&&(X=E),g=$t.get(X),g.init(z),y.push(g),X.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),E!==X&&E.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(g.pushLight(k),k.castShadow&&g.pushShadow(k))}),g.setupLights();const Y=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ft=k.material;if(ft)if(Array.isArray(ft))for(let vt=0;vt<ft.length;vt++){const Pt=ft[vt];ie(Pt,X,k),Y.add(Pt)}else ie(ft,X,k),Y.add(ft)}),y.pop(),g=null,Y},this.compileAsync=function(E,z,X=null){const Y=this.compile(E,z,X);return new Promise(k=>{function ft(){if(Y.forEach(function(vt){ct.get(vt).currentProgram.isReady()&&Y.delete(vt)}),Y.size===0){k(E);return}setTimeout(ft,10)}st.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let $e=null;function Zn(E){$e&&$e(E)}function Yh(){Ui.stop()}function qh(){Ui.start()}const Ui=new Zf;Ui.setAnimationLoop(Zn),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(E){$e=E,Z.setAnimationLoop(E),E===null?Ui.stop():Ui.start()},Z.addEventListener("sessionstart",Yh),Z.addEventListener("sessionend",qh),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(z),z=Z.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,z,w),g=$t.get(E,y.length),g.init(z),y.push(g),tt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),qt.setFromProjectionMatrix(tt),U=this.localClippingEnabled,K=ut.init(this.clippingPlanes,U),_=St.get(E,m.length),_.init(),m.push(_),Z.enabled===!0&&Z.isPresenting===!0){const ft=x.xr.getDepthSensingMesh();ft!==null&&Rc(ft,z,-1/0,x.sortObjects)}Rc(E,z,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(V,nt),bt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,bt&&kt.addToRenderList(_,E),this.info.render.frame++,K===!0&&ut.beginShadows();const X=g.state.shadowsArray;Et.render(X,E,z),K===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=_.opaque,k=_.transmissive;if(g.setupLights(),z.isArrayCamera){const ft=z.cameras;if(k.length>0)for(let vt=0,Pt=ft.length;vt<Pt;vt++){const Dt=ft[vt];Kh(Y,k,E,Dt)}bt&&kt.render(E);for(let vt=0,Pt=ft.length;vt<Pt;vt++){const Dt=ft[vt];Zh(_,E,Dt,Dt.viewport)}}else k.length>0&&Kh(Y,k,E,z),bt&&kt.render(E),Zh(_,E,z);w!==null&&(T.updateMultisampleRenderTarget(w),T.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(x,E,z),le.resetDefaultState(),C=-1,B=null,y.pop(),y.length>0?(g=y[y.length-1],K===!0&&ut.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Rc(E,z,X,Y){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||qt.intersectsSprite(E)){Y&&pt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(tt);const vt=J.update(E),Pt=E.material;Pt.visible&&_.push(E,vt,Pt,X,pt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||qt.intersectsObject(E))){const vt=J.update(E),Pt=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),pt.copy(E.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),pt.copy(vt.boundingSphere.center)),pt.applyMatrix4(E.matrixWorld).applyMatrix4(tt)),Array.isArray(Pt)){const Dt=vt.groups;for(let Bt=0,zt=Dt.length;Bt<zt;Bt++){const Ut=Dt[Bt],oe=Pt[Ut.materialIndex];oe&&oe.visible&&_.push(E,vt,oe,X,pt.z,Ut)}}else Pt.visible&&_.push(E,vt,Pt,X,pt.z,null)}}const ft=E.children;for(let vt=0,Pt=ft.length;vt<Pt;vt++)Rc(ft[vt],z,X,Y)}function Zh(E,z,X,Y){const k=E.opaque,ft=E.transmissive,vt=E.transparent;g.setupLightsView(X),K===!0&&ut.setGlobalState(x.clippingPlanes,X),Y&&ht.viewport(v.copy(Y)),k.length>0&&na(k,z,X),ft.length>0&&na(ft,z,X),vt.length>0&&na(vt,z,X),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Kh(E,z,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Y.id]===void 0&&(g.state.transmissionRenderTarget[Y.id]=new Cn(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?$s:Vn,minFilter:Tn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const ft=g.state.transmissionRenderTarget[Y.id],vt=Y.viewport||v;ft.setSize(vt.z,vt.w);const Pt=x.getRenderTarget();x.setRenderTarget(ft),x.getClearColor(L),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear(),bt&&kt.render(X);const Dt=x.toneMapping;x.toneMapping=ri;const Bt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),g.setupLightsView(Y),K===!0&&ut.setGlobalState(x.clippingPlanes,Y),na(E,X,Y),T.updateMultisampleRenderTarget(ft),T.updateRenderTargetMipmap(ft),st.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Ut=0,oe=z.length;Ut<oe;Ut++){const ue=z[Ut],ge=ue.object,rn=ue.geometry,re=ue.material,Nt=ue.group;if(re.side===On&&ge.layers.test(Y.layers)){const Le=re.side;re.side=Xe,re.needsUpdate=!0,$h(ge,X,Y,rn,re,Nt),re.side=Le,re.needsUpdate=!0,zt=!0}}zt===!0&&(T.updateMultisampleRenderTarget(ft),T.updateRenderTargetMipmap(ft))}x.setRenderTarget(Pt),x.setClearColor(L,D),Bt!==void 0&&(Y.viewport=Bt),x.toneMapping=Dt}function na(E,z,X){const Y=z.isScene===!0?z.overrideMaterial:null;for(let k=0,ft=E.length;k<ft;k++){const vt=E[k],Pt=vt.object,Dt=vt.geometry,Bt=Y===null?vt.material:Y,zt=vt.group;Pt.layers.test(X.layers)&&$h(Pt,z,X,Dt,Bt,zt)}}function $h(E,z,X,Y,k,ft){E.onBeforeRender(x,z,X,Y,k,ft),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(x,z,X,Y,E,ft),k.transparent===!0&&k.side===On&&k.forceSinglePass===!1?(k.side=Xe,k.needsUpdate=!0,x.renderBufferDirect(X,z,Y,k,E,ft),k.side=Hn,k.needsUpdate=!0,x.renderBufferDirect(X,z,Y,k,E,ft),k.side=On):x.renderBufferDirect(X,z,Y,k,E,ft),E.onAfterRender(x,z,X,Y,k,ft)}function ia(E,z,X){z.isScene!==!0&&(z=Mt);const Y=ct.get(E),k=g.state.lights,ft=g.state.shadowsArray,vt=k.state.version,Pt=Tt.getParameters(E,k.state,ft,z,X),Dt=Tt.getProgramCacheKey(Pt);let Bt=Y.programs;Y.environment=E.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(E.isMeshStandardMaterial?H:S).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?z.environmentRotation:E.envMapRotation,Bt===void 0&&(E.addEventListener("dispose",Qt),Bt=new Map,Y.programs=Bt);let zt=Bt.get(Dt);if(zt!==void 0){if(Y.currentProgram===zt&&Y.lightsStateVersion===vt)return Qh(E,Pt),zt}else Pt.uniforms=Tt.getUniforms(E),E.onBeforeCompile(Pt,x),zt=Tt.acquireProgram(Pt,Dt),Bt.set(Dt,zt),Y.uniforms=Pt.uniforms;const Ut=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=ut.uniform),Qh(E,Pt),Y.needsLights=um(E),Y.lightsStateVersion=vt,Y.needsLights&&(Ut.ambientLightColor.value=k.state.ambient,Ut.lightProbe.value=k.state.probe,Ut.directionalLights.value=k.state.directional,Ut.directionalLightShadows.value=k.state.directionalShadow,Ut.spotLights.value=k.state.spot,Ut.spotLightShadows.value=k.state.spotShadow,Ut.rectAreaLights.value=k.state.rectArea,Ut.ltc_1.value=k.state.rectAreaLTC1,Ut.ltc_2.value=k.state.rectAreaLTC2,Ut.pointLights.value=k.state.point,Ut.pointLightShadows.value=k.state.pointShadow,Ut.hemisphereLights.value=k.state.hemi,Ut.directionalShadowMap.value=k.state.directionalShadowMap,Ut.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ut.spotShadowMap.value=k.state.spotShadowMap,Ut.spotLightMatrix.value=k.state.spotLightMatrix,Ut.spotLightMap.value=k.state.spotLightMap,Ut.pointShadowMap.value=k.state.pointShadowMap,Ut.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=zt,Y.uniformsList=null,zt}function Jh(E){if(E.uniformsList===null){const z=E.currentProgram.getUniforms();E.uniformsList=eo.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Qh(E,z){const X=ct.get(E);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.batchingColor=z.batchingColor,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.instancingMorph=z.instancingMorph,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function lm(E,z,X,Y,k){z.isScene!==!0&&(z=Mt),T.resetTextureUnits();const ft=z.fog,vt=Y.isMeshStandardMaterial?z.environment:null,Pt=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:li,Dt=(Y.isMeshStandardMaterial?H:S).get(Y.envMap||vt),Bt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,zt=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ut=!!X.morphAttributes.position,oe=!!X.morphAttributes.normal,ue=!!X.morphAttributes.color;let ge=ri;Y.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ge=x.toneMapping);const rn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,re=rn!==void 0?rn.length:0,Nt=ct.get(Y),Le=g.state.lights;if(K===!0&&(U===!0||E!==B)){const mn=E===B&&Y.id===C;ut.setState(Y,E,mn)}let ae=!1;Y.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Le.state.version||Nt.outputColorSpace!==Pt||k.isBatchedMesh&&Nt.batching===!1||!k.isBatchedMesh&&Nt.batching===!0||k.isBatchedMesh&&Nt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Nt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Nt.instancing===!1||!k.isInstancedMesh&&Nt.instancing===!0||k.isSkinnedMesh&&Nt.skinning===!1||!k.isSkinnedMesh&&Nt.skinning===!0||k.isInstancedMesh&&Nt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Nt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Nt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Nt.instancingMorph===!1&&k.morphTexture!==null||Nt.envMap!==Dt||Y.fog===!0&&Nt.fog!==ft||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ut.numPlanes||Nt.numIntersection!==ut.numIntersection)||Nt.vertexAlphas!==Bt||Nt.vertexTangents!==zt||Nt.morphTargets!==Ut||Nt.morphNormals!==oe||Nt.morphColors!==ue||Nt.toneMapping!==ge||Nt.morphTargetsCount!==re)&&(ae=!0):(ae=!0,Nt.__version=Y.version);let vn=Nt.currentProgram;ae===!0&&(vn=ia(Y,z,k));let gs=!1,an=!1,Cc=!1;const ve=vn.getUniforms(),hi=Nt.uniforms;if(ht.useProgram(vn.program)&&(gs=!0,an=!0,Cc=!0),Y.id!==C&&(C=Y.id,an=!0),gs||B!==E){it.reverseDepthBuffer?(ot.copy(E.projectionMatrix),m0(ot),g0(ot),ve.setValue(I,"projectionMatrix",ot)):ve.setValue(I,"projectionMatrix",E.projectionMatrix),ve.setValue(I,"viewMatrix",E.matrixWorldInverse);const mn=ve.map.cameraPosition;mn!==void 0&&mn.setValue(I,_t.setFromMatrixPosition(E.matrixWorld)),it.logarithmicDepthBuffer&&ve.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ve.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),B!==E&&(B=E,an=!0,Cc=!0)}if(k.isSkinnedMesh){ve.setOptional(I,k,"bindMatrix"),ve.setOptional(I,k,"bindMatrixInverse");const mn=k.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),ve.setValue(I,"boneTexture",mn.boneTexture,T))}k.isBatchedMesh&&(ve.setOptional(I,k,"batchingTexture"),ve.setValue(I,"batchingTexture",k._matricesTexture,T),ve.setOptional(I,k,"batchingIdTexture"),ve.setValue(I,"batchingIdTexture",k._indirectTexture,T),ve.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&ve.setValue(I,"batchingColorTexture",k._colorsTexture,T));const Ic=X.morphAttributes;if((Ic.position!==void 0||Ic.normal!==void 0||Ic.color!==void 0)&&Ht.update(k,X,vn),(an||Nt.receiveShadow!==k.receiveShadow)&&(Nt.receiveShadow=k.receiveShadow,ve.setValue(I,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(hi.envMap.value=Dt,hi.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(hi.envMapIntensity.value=z.environmentIntensity),an&&(ve.setValue(I,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&hm(hi,Cc),ft&&Y.fog===!0&&mt.refreshFogUniforms(hi,ft),mt.refreshMaterialUniforms(hi,Y,W,O,g.state.transmissionRenderTarget[E.id]),eo.upload(I,Jh(Nt),hi,T)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(eo.upload(I,Jh(Nt),hi,T),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ve.setValue(I,"center",k.center),ve.setValue(I,"modelViewMatrix",k.modelViewMatrix),ve.setValue(I,"normalMatrix",k.normalMatrix),ve.setValue(I,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const mn=Y.uniformsGroups;for(let Pc=0,dm=mn.length;Pc<dm;Pc++){const jh=mn[Pc];F.update(jh,vn),F.bind(jh,vn)}}return vn}function hm(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function um(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,z,X){ct.get(E.texture).__webglTexture=z,ct.get(E.depthTexture).__webglTexture=X;const Y=ct.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,z){const X=ct.get(E);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,X=0){w=E,R=z,A=X;let Y=!0,k=null,ft=!1,vt=!1;if(E){const Dt=ct.get(E);if(Dt.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1;else if(Dt.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(Dt.__hasExternalTextures)T.rebindTextures(E,ct.get(E.texture).__webglTexture,ct.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ut=E.depthTexture;if(Dt.__boundDepthTexture!==Ut){if(Ut!==null&&ct.has(Ut)&&(E.width!==Ut.image.width||E.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const Bt=E.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(vt=!0);const zt=ct.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[z])?k=zt[z][X]:k=zt[z],ft=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?k=ct.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?k=zt[X]:k=zt,v.copy(E.viewport),b.copy(E.scissor),N=E.scissorTest}else v.copy(at).multiplyScalar(W).floor(),b.copy(dt).multiplyScalar(W).floor(),N=Ft;if(ht.bindFramebuffer(I.FRAMEBUFFER,k)&&Y&&ht.drawBuffers(E,k),ht.viewport(v),ht.scissor(b),ht.setScissorTest(N),ft){const Dt=ct.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,Dt.__webglTexture,X)}else if(vt){const Dt=ct.get(E.texture),Bt=z||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Dt.__webglTexture,X||0,Bt)}C=-1},this.readRenderTargetPixels=function(E,z,X,Y,k,ft,vt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&vt!==void 0&&(Pt=Pt[vt]),Pt){ht.bindFramebuffer(I.FRAMEBUFFER,Pt);try{const Dt=E.texture,Bt=Dt.format,zt=Dt.type;if(!it.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-Y&&X>=0&&X<=E.height-k&&I.readPixels(z,X,Y,k,Xt.convert(Bt),Xt.convert(zt),ft)}finally{const Dt=w!==null?ct.get(w).__webglFramebuffer:null;ht.bindFramebuffer(I.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,z,X,Y,k,ft,vt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&vt!==void 0&&(Pt=Pt[vt]),Pt){const Dt=E.texture,Bt=Dt.format,zt=Dt.type;if(!it.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=E.width-Y&&X>=0&&X<=E.height-k){ht.bindFramebuffer(I.FRAMEBUFFER,Pt);const Ut=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ut),I.bufferData(I.PIXEL_PACK_BUFFER,ft.byteLength,I.STREAM_READ),I.readPixels(z,X,Y,k,Xt.convert(Bt),Xt.convert(zt),0);const oe=w!==null?ct.get(w).__webglFramebuffer:null;ht.bindFramebuffer(I.FRAMEBUFFER,oe);const ue=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await p0(I,ue,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ut),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ft),I.deleteBuffer(Ut),I.deleteSync(ue),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,z=null,X=0){E.isTexture!==!0&&(to("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1]);const Y=Math.pow(2,-X),k=Math.floor(E.image.width*Y),ft=Math.floor(E.image.height*Y),vt=z!==null?z.x:0,Pt=z!==null?z.y:0;T.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,vt,Pt,k,ft),ht.unbindTexture()},this.copyTextureToTexture=function(E,z,X=null,Y=null,k=0){E.isTexture!==!0&&(to("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,E=arguments[1],z=arguments[2],k=arguments[3]||0,X=null);let ft,vt,Pt,Dt,Bt,zt;X!==null?(ft=X.max.x-X.min.x,vt=X.max.y-X.min.y,Pt=X.min.x,Dt=X.min.y):(ft=E.image.width,vt=E.image.height,Pt=0,Dt=0),Y!==null?(Bt=Y.x,zt=Y.y):(Bt=0,zt=0);const Ut=Xt.convert(z.format),oe=Xt.convert(z.type);T.setTexture2D(z,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const ue=I.getParameter(I.UNPACK_ROW_LENGTH),ge=I.getParameter(I.UNPACK_IMAGE_HEIGHT),rn=I.getParameter(I.UNPACK_SKIP_PIXELS),re=I.getParameter(I.UNPACK_SKIP_ROWS),Nt=I.getParameter(I.UNPACK_SKIP_IMAGES),Le=E.isCompressedTexture?E.mipmaps[k]:E.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Le.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Le.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Dt),E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,k,Bt,zt,ft,vt,Ut,oe,Le.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,k,Bt,zt,Le.width,Le.height,Ut,Le.data):I.texSubImage2D(I.TEXTURE_2D,k,Bt,zt,ft,vt,Ut,oe,Le),I.pixelStorei(I.UNPACK_ROW_LENGTH,ue),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ge),I.pixelStorei(I.UNPACK_SKIP_PIXELS,rn),I.pixelStorei(I.UNPACK_SKIP_ROWS,re),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Nt),k===0&&z.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ht.unbindTexture()},this.copyTextureToTexture3D=function(E,z,X=null,Y=null,k=0){E.isTexture!==!0&&(to("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,E=arguments[2],z=arguments[3],k=arguments[4]||0);let ft,vt,Pt,Dt,Bt,zt,Ut,oe,ue;const ge=E.isCompressedTexture?E.mipmaps[k]:E.image;X!==null?(ft=X.max.x-X.min.x,vt=X.max.y-X.min.y,Pt=X.max.z-X.min.z,Dt=X.min.x,Bt=X.min.y,zt=X.min.z):(ft=ge.width,vt=ge.height,Pt=ge.depth,Dt=0,Bt=0,zt=0),Y!==null?(Ut=Y.x,oe=Y.y,ue=Y.z):(Ut=0,oe=0,ue=0);const rn=Xt.convert(z.format),re=Xt.convert(z.type);let Nt;if(z.isData3DTexture)T.setTexture3D(z,0),Nt=I.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)T.setTexture2DArray(z,0),Nt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const Le=I.getParameter(I.UNPACK_ROW_LENGTH),ae=I.getParameter(I.UNPACK_IMAGE_HEIGHT),vn=I.getParameter(I.UNPACK_SKIP_PIXELS),gs=I.getParameter(I.UNPACK_SKIP_ROWS),an=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ge.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ge.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Dt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Bt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,zt),E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Nt,k,Ut,oe,ue,ft,vt,Pt,rn,re,ge.data):z.isCompressedArrayTexture?I.compressedTexSubImage3D(Nt,k,Ut,oe,ue,ft,vt,Pt,rn,ge.data):I.texSubImage3D(Nt,k,Ut,oe,ue,ft,vt,Pt,rn,re,ge),I.pixelStorei(I.UNPACK_ROW_LENGTH,Le),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ae),I.pixelStorei(I.UNPACK_SKIP_PIXELS,vn),I.pixelStorei(I.UNPACK_SKIP_ROWS,gs),I.pixelStorei(I.UNPACK_SKIP_IMAGES,an),k===0&&z.generateMipmaps&&I.generateMipmap(Nt),ht.unbindTexture()},this.initRenderTarget=function(E){ct.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),ht.unbindTexture()},this.resetState=function(){R=0,A=0,w=null,ht.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Qo?"display-p3":"srgb",e.unpackColorSpace=ne.workingColorSpace===Yr?"display-p3":"srgb"}}class sc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new xt(t),this.density=e}clone(){return new sc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new xt(t),this.near=e,this.far=n}clone(){return new rc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class mh extends ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ac{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Dr,this.updateRanges=[],this.version=0,this.uuid=fn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const He=new P;class cs{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ge(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Yt(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Yt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Yt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Yt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Yt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ge(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ge(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ge(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ge(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array),i=Yt(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Kt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new cs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class gh extends ke{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Is;const sr=new P,Ps=new P,Ls=new P,Ds=new j,rr=new j,np=new Ot,wa=new P,ar=new P,Aa=new P,ku=new j,al=new j,Hu=new j;class ip extends ee{constructor(t=new gh){if(super(),this.isSprite=!0,this.type="Sprite",Is===void 0){Is=new Wt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ac(e,5);Is.setIndex([0,1,2,0,2,3]),Is.setAttribute("position",new cs(n,3,0,!1)),Is.setAttribute("uv",new cs(n,2,3,!1))}this.geometry=Is,this.material=t,this.center=new j(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ps.setFromMatrixScale(this.matrixWorld),np.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ls.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ps.multiplyScalar(-Ls.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Ea(wa.set(-.5,-.5,0),Ls,a,Ps,i,r),Ea(ar.set(.5,-.5,0),Ls,a,Ps,i,r),Ea(Aa.set(.5,.5,0),Ls,a,Ps,i,r),ku.set(0,0),al.set(1,0),Hu.set(1,1);let o=t.ray.intersectTriangle(wa,ar,Aa,!1,sr);if(o===null&&(Ea(ar.set(-.5,.5,0),Ls,a,Ps,i,r),al.set(0,1),o=t.ray.intersectTriangle(wa,Aa,ar,!1,sr),o===null))return;const c=t.ray.origin.distanceTo(sr);c<t.near||c>t.far||e.push({distance:c,point:sr.clone(),uv:tn.getInterpolation(sr,wa,ar,Aa,ku,al,Hu,new j),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ea(s,t,e,n,i,r){Ds.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(rr.x=r*Ds.x-i*Ds.y,rr.y=i*Ds.x+r*Ds.y):rr.copy(Ds),s.copy(t),s.x+=rr.x,s.y+=rr.y,s.applyMatrix4(np)}const Ta=new P,Vu=new P;class sp extends ee{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){const i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){Ta.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(Ta);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){Ta.setFromMatrixPosition(t.matrixWorld),Vu.setFromMatrixPosition(this.matrixWorld);const n=Ta.distanceTo(Vu)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let a=e[i].distance;if(e[i].object.visible&&(a-=a*e[i].hysteresis),n>=a)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);this.autoUpdate===!1&&(e.object.autoUpdate=!1),e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];e.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return e}}const Gu=new P,Wu=new te,Xu=new te,Iv=new P,Yu=new Ot,Ra=new P,ol=new ze,qu=new Ot,cl=new Js;class rp extends se{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rl,this.bindMatrix=new Ot,this.bindMatrixInverse=new Ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Be),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ra),this.boundingBox.expandByPoint(Ra)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ze),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ra),this.boundingSphere.expandByPoint(Ra)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ol.copy(this.boundingSphere),ol.applyMatrix4(i),t.ray.intersectsSphere(ol)!==!1&&(qu.copy(i).invert(),cl.copy(t.ray).applyMatrix4(qu),!(this.boundingBox!==null&&cl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,cl)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new te,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Rl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Af?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Wu.fromBufferAttribute(i.attributes.skinIndex,t),Xu.fromBufferAttribute(i.attributes.skinWeight,t),Gu.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=Xu.getComponent(r);if(a!==0){const o=Wu.getComponent(r);Yu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Iv.copy(Gu).applyMatrix4(Yu),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class _h extends ee{constructor(){super(),this.isBone=!0,this.type="Bone"}}class zn extends ye{constructor(t=null,e=1,n=1,i,r,a,o,c,l=Pe,h=Pe,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zu=new Ot,Pv=new Ot;class oc{constructor(t=[],e=[]){this.uuid=fn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ot)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Ot;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:Pv;Zu.multiplyMatrices(o,e[r]),Zu.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new oc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new zn(e,t,t,We,en);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new _h),this.bones.push(a),this.boneInverses.push(new Ot().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class Ys extends Kt{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Us=new Ot,Ku=new Ot,Ca=[],$u=new Be,Lv=new Ot,or=new se,cr=new ze;class ap extends se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ys(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Lv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Be),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Us),$u.copy(t.boundingBox).applyMatrix4(Us),this.boundingBox.union($u)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ze),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Us),cr.copy(t.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(n),t.ray.intersectsSphere(cr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Us),Ku.multiplyMatrices(n,Us),or.matrixWorld=Ku,or.raycast(t,Ca);for(let a=0,o=Ca.length;a<o;a++){const c=Ca[a];c.instanceId=r,c.object=this,e.push(c)}Ca.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ys(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new zn(new Float32Array(i*this.count),i,this.count,Zo,en));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function Dv(s,t){return s.z-t.z}function Uv(s,t){return t.z-s.z}class Nv{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n){const i=this.pool,r=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});const a=i[this.index];r.push(a),this.index++,a.start=t.start,a.count=t.count,a.z=e,a.index=n}reset(){this.list.length=0,this.index=0}}const _i=new Ot,ll=new Ot,Ov=new Ot,Fv=new xt(1,1,1),Ju=new Ot,hl=new Zr,Ia=new Be,Hi=new ze,lr=new P,Qu=new P,Bv=new P,ul=new Nv,Oe=new se,Pa=[];function zv(s,t,e=0){const n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)t.setComponent(r+e,a,s.getComponent(r,a))}else t.array.set(s.array,e*n);t.needsUpdate=!0}class op extends se{get maxInstanceCount(){return this._maxInstanceCount}constructor(t,e,n=e*2,i){super(new Wt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._availableInstanceIds=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new zn(e,t,t,We,en);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new zn(e,t,t,Xr,oi);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new zn(e,t,t,We,en);n.colorSpace=ne.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const a=t.getAttribute(r),{array:o,itemSize:c,normalized:l}=a,h=new o.constructor(n*c),u=new Kt(h,c,l);e.setAttribute(r,u)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new Kt(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Be);const t=this.boundingBox,e=this._drawInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,_i),this.getBoundingBoxAt(r,Ia).applyMatrix4(_i),t.union(Ia)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ze);const t=this.boundingSphere,e=this._drawInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,_i),this.getBoundingSphereAt(r,Hi).applyMatrix4(_i),t.union(Hi)}}addInstance(t){if(this._drawInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let i=null;this._availableInstanceIds.length>0?(i=this._availableInstanceIds.pop(),this._drawInfo[i]=n):(i=this._drawInfo.length,this._drawInfo.push(n));const r=this._matricesTexture,a=r.image.data;Ov.toArray(a,i*16),r.needsUpdate=!0;const o=this._colorsTexture;return o&&(Fv.toArray(o.image.data,i*4),o.needsUpdate=!0),i}addGeometry(t,e=-1,n=-1){if(this._initializeGeometry(t),this._validateGeometry(t),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let r=null;const a=this._reservedRanges,o=this._drawRanges,c=this._bounds;this._geometryCount!==0&&(r=a[a.length-1]),e===-1?i.vertexCount=t.getAttribute("position").count:i.vertexCount=e,r===null?i.vertexStart=0:i.vertexStart=r.vertexStart+r.vertexCount;const l=t.getIndex(),h=l!==null;if(h&&(n===-1?i.indexCount=l.count:i.indexCount=n,r===null?i.indexStart=0:i.indexStart=r.indexStart+r.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const u=this._geometryCount;return this._geometryCount++,a.push(i),o.push({start:h?i.indexStart:i.vertexStart,count:-1}),c.push({boxInitialized:!1,box:new Be,sphereInitialized:!1,sphere:new ze}),this.setGeometryAt(u,t),u}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=e.getIndex(),o=this._reservedRanges[t];if(i&&a.count>o.indexCount||e.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=o.vertexStart,l=o.vertexCount;for(const f in n.attributes){const p=e.getAttribute(f),_=n.getAttribute(f);zv(p,_,c);const g=p.itemSize;for(let m=p.count,y=l;m<y;m++){const x=c+m;for(let M=0;M<g;M++)_.setComponent(x,M,0)}_.needsUpdate=!0,_.addUpdateRange(c*g,l*g)}if(i){const f=o.indexStart;for(let p=0;p<a.count;p++)r.setX(f+p,c+a.getX(p));for(let p=a.count,_=o.indexCount;p<_;p++)r.setX(f+p,c);r.needsUpdate=!0,r.addUpdateRange(f,o.indexCount)}const h=this._bounds[t];e.boundingBox!==null?(h.box.copy(e.boundingBox),h.boxInitialized=!0):h.boxInitialized=!1,e.boundingSphere!==null?(h.sphere.copy(e.boundingSphere),h.sphereInitialized=!0):h.sphereInitialized=!1;const u=this._drawRanges[t],d=e.getAttribute("position");return u.count=i?a.count:d.count,this._visibilityChanged=!0,t}deleteInstance(t){const e=this._drawInfo;return t>=e.length||e[t].active===!1?this:(e[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this)}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this._bounds[t],i=n.box,r=this.geometry;if(n.boxInitialized===!1){i.makeEmpty();const a=r.index,o=r.attributes.position,c=this._drawRanges[t];for(let l=c.start,h=c.start+c.count;l<h;l++){let u=l;a&&(u=a.getX(u)),i.expandByPoint(lr.fromBufferAttribute(o,u))}n.boxInitialized=!0}return e.copy(i),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this._bounds[t],i=n.sphere,r=this.geometry;if(n.sphereInitialized===!1){i.makeEmpty(),this.getBoundingBoxAt(t,Ia),Ia.getCenter(i.center);const a=r.index,o=r.attributes.position,c=this._drawRanges[t];let l=0;for(let h=c.start,u=c.start+c.count;h<u;h++){let d=h;a&&(d=a.getX(d)),lr.fromBufferAttribute(o,d),l=Math.max(l,i.center.distanceToSquared(lr))}i.radius=Math.sqrt(l),n.sphereInitialized=!0}return e.copy(i),e}setMatrixAt(t,e){const n=this._drawInfo,i=this._matricesTexture,r=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?this:(e.toArray(r,t*16),i.needsUpdate=!0,this)}getMatrixAt(t,e){const n=this._drawInfo,i=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?null:e.fromArray(i,t*16)}setColorAt(t,e){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,r=this._drawInfo;return t>=r.length||r[t].active===!1?this:(e.toArray(i,t*4),n.needsUpdate=!0,this)}getColorAt(t,e){const n=this._colorsTexture.image.data,i=this._drawInfo;return t>=i.length||i[t].active===!1?null:e.fromArray(n,t*4)}setVisibleAt(t,e){const n=this._drawInfo;return t>=n.length||n[t].active===!1||n[t].visible===e?this:(n[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){const e=this._drawInfo;return t>=e.length||e[t].active===!1?!1:e[t].visible}setGeometryIdAt(t,e){const n=this._drawInfo;return t>=n.length||n[t].active===!1||e<0||e>=this._geometryCount?null:(n[t].geometryIndex=e,this)}getGeometryIdAt(t){const e=this._drawInfo;return t>=e.length||e[t].active===!1?-1:e[t].geometryIndex}getGeometryRangeAt(t,e={}){if(t<0||t>=this._geometryCount)return null;const n=this._drawRanges[t];return e.start=n.start,e.count=n.count,e}raycast(t,e){const n=this._drawInfo,i=this._drawRanges,r=this.matrixWorld,a=this.geometry;Oe.material=this.material,Oe.geometry.index=a.index,Oe.geometry.attributes=a.attributes,Oe.geometry.boundingBox===null&&(Oe.geometry.boundingBox=new Be),Oe.geometry.boundingSphere===null&&(Oe.geometry.boundingSphere=new ze);for(let o=0,c=n.length;o<c;o++){if(!n[o].visible||!n[o].active)continue;const l=n[o].geometryIndex,h=i[l];Oe.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,Oe.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,Oe.geometry.boundingBox),this.getBoundingSphereAt(l,Oe.geometry.boundingSphere),Oe.raycast(t,Pa);for(let u=0,d=Pa.length;u<d;u++){const f=Pa[u];f.object=this,f.batchId=o,e.push(f)}Pa.length=0}Oe.material=null,Oe.geometry.index=null,Oe.geometry.attributes={},Oe.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._drawRanges=t._drawRanges.map(e=>({...e})),this._reservedRanges=t._reservedRanges.map(e=>({...e})),this._drawInfo=t._drawInfo.map(e=>({...e})),this._bounds=t._bounds.map(e=>({boxInitialized:e.boxInitialized,box:e.box.clone(),sphereInitialized:e.sphereInitialized,sphere:e.sphere.clone()})),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,c=this._drawInfo,l=this._multiDrawStarts,h=this._multiDrawCounts,u=this._drawRanges,d=this.perObjectFrustumCulled,f=this._indirectTexture,p=f.image.data;d&&(Ju.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),hl.setFromProjectionMatrix(Ju,t.coordinateSystem));let _=0;if(this.sortObjects){ll.copy(this.matrixWorld).invert(),lr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(ll),Qu.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(ll);for(let y=0,x=c.length;y<x;y++)if(c[y].visible&&c[y].active){const M=c[y].geometryIndex;this.getMatrixAt(y,_i),this.getBoundingSphereAt(M,Hi).applyMatrix4(_i);let R=!1;if(d&&(R=!hl.intersectsSphere(Hi)),!R){const A=Bv.subVectors(Hi.center,lr).dot(Qu);ul.push(u[M],A,y)}}const g=ul.list,m=this.customSort;m===null?g.sort(r.transparent?Uv:Dv):m.call(this,g,n);for(let y=0,x=g.length;y<x;y++){const M=g[y];l[_]=M.start*o,h[_]=M.count,p[_]=M.index,_++}ul.reset()}else for(let g=0,m=c.length;g<m;g++)if(c[g].visible&&c[g].active){const y=c[g].geometryIndex;let x=!1;if(d&&(this.getMatrixAt(g,_i),this.getBoundingSphereAt(y,Hi).applyMatrix4(_i),x=!hl.intersectsSphere(Hi)),!x){const M=u[y];l[_]=M.start*o,h[_]=M.count,p[_]=g,_++}}f.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,a){this.onBeforeRender(t,null,i,r,a)}}class qe extends ke{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ko=new P,Ho=new P,ju=new Ot,hr=new Js,La=new ze,dl=new P,td=new P;class Ti extends ee{constructor(t=new Wt,e=new qe){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ko.fromBufferAttribute(e,i-1),Ho.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ko.distanceTo(Ho);t.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(i),La.radius+=r,t.ray.intersectsSphere(La)===!1)return;ju.copy(i).invert(),hr.copy(t.ray).applyMatrix4(ju);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=l){const m=h.getX(_),y=h.getX(_+1),x=Da(this,t,hr,c,m,y);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(f),m=Da(this,t,hr,c,_,g);m&&e.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=f,g=p-1;_<g;_+=l){const m=Da(this,t,hr,c,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=Da(this,t,hr,c,p-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Da(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(ko.fromBufferAttribute(a,i),Ho.fromBufferAttribute(a,r),e.distanceSqToSegment(ko,Ho,dl,td)>n)return;dl.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(dl);if(!(c<t.near||c>t.far))return{distance:c,point:td.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const ed=new P,nd=new P;class Xn extends Ti{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)ed.fromBufferAttribute(e,i),nd.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ed.distanceTo(nd);t.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cp extends Ti{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class xh extends ke{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const id=new Ot,Ul=new Js,Ua=new ze,Na=new P;class lp extends ee{constructor(t=new Wt,e=new xh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(i),Ua.radius+=r,t.ray.intersectsSphere(Ua)===!1)return;id.copy(i).invert(),Ul.copy(t.ray).applyMatrix4(id);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let p=d,_=f;p<_;p++){const g=l.getX(p);Na.fromBufferAttribute(u,g),sd(Na,g,c,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,_=f;p<_;p++)Na.fromBufferAttribute(u,p),sd(Na,p,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function sd(s,t,e,n,i,r,a){const o=Ul.distanceSqToPoint(s);if(o<e){const c=new P;Ul.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class kv extends ye{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Se,this.magFilter=r!==void 0?r:Se,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Hv extends ye{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Pe,this.minFilter=Pe,this.generateMipmaps=!1,this.needsUpdate=!0}}class cc extends ye{constructor(t,e,n,i,r,a,o,c,l,h,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class Vv extends cc{constructor(t,e,n,i,r,a){super(t,e,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=un,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gv extends cc{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,ai),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class lc extends ye{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new j:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,i=[],r=[],a=[],o=new P,c=new Ot;for(let f=0;f<=t;f++){const p=f/t;i[f]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(xe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(xe(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hc extends Ln{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new j){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class hp extends hc{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function yh(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Oa=new P,fl=new yh,pl=new yh,ml=new yh;class up extends Ln{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Oa.subVectors(i[0],i[1]).add(i[0]),l=Oa);const u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Oa.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Oa),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),fl.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,_,g),pl.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,_,g),ml.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(fl.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),pl.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ml.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(fl.calc(c),pl.calc(c),ml.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function rd(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function Wv(s,t){const e=1-s;return e*e*t}function Xv(s,t){return 2*(1-s)*s*t}function Yv(s,t){return s*s*t}function Sr(s,t,e,n){return Wv(s,t)+Xv(s,e)+Yv(s,n)}function qv(s,t){const e=1-s;return e*e*e*t}function Zv(s,t){const e=1-s;return 3*e*e*s*t}function Kv(s,t){return 3*(1-s)*s*s*t}function $v(s,t){return s*s*s*t}function br(s,t,e,n,i){return qv(s,t)+Zv(s,e)+Kv(s,n)+$v(s,i)}class vh extends Ln{constructor(t=new j,e=new j,n=new j,i=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new j){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(br(t,i.x,r.x,a.x,o.x),br(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class dp extends Ln{constructor(t=new P,e=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(br(t,i.x,r.x,a.x,o.x),br(t,i.y,r.y,a.y,o.y),br(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Mh extends Ln{constructor(t=new j,e=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new j){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fp extends Ln{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sh extends Ln{constructor(t=new j,e=new j,n=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new j){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Sr(t,i.x,r.x,a.x),Sr(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bh extends Ln{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Sr(t,i.x,r.x,a.x),Sr(t,i.y,r.y,a.y),Sr(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wh extends Ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new j){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(rd(o,c.x,l.x,h.x,u.x),rd(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new j().fromArray(i))}return this}}var Vo=Object.freeze({__proto__:null,ArcCurve:hp,CatmullRomCurve3:up,CubicBezierCurve:vh,CubicBezierCurve3:dp,EllipseCurve:hc,LineCurve:Mh,LineCurve3:fp,QuadraticBezierCurve:Sh,QuadraticBezierCurve3:bh,SplineCurve:wh});class pp extends Ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Vo[i.type]().fromJSON(i))}return this}}class Or extends pp{constructor(t){super(),this.type="Path",this.currentPoint=new j,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Mh(this.currentPoint.clone(),new j(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Sh(this.currentPoint.clone(),new j(t,e),new j(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new vh(this.currentPoint.clone(),new j(t,e),new j(n,i),new j(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new wh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){const l=new hc(t,e,n,i,r,a,o,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Kr extends Wt{constructor(t=[new j(0,-.5),new j(.5,0),new j(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=xe(i,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],h=1/e,u=new P,d=new j,f=new P,p=new P,_=new P;let g=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(p)}for(let y=0;y<=e;y++){const x=n+y*h*i,M=Math.sin(x),R=Math.cos(x);for(let A=0;A<=t.length-1;A++){u.x=t[A].x*M,u.y=t[A].y,u.z=t[A].x*R,a.push(u.x,u.y,u.z),d.x=y/e,d.y=A/(t.length-1),o.push(d.x,d.y);const w=c[3*A+0]*M,C=c[3*A+1],B=c[3*A+0]*R;l.push(w,C,B)}}for(let y=0;y<e;y++)for(let x=0;x<t.length-1;x++){const M=x+y*t.length,R=M,A=M+t.length,w=M+t.length+1,C=M+1;r.push(R,A,C),r.push(w,C,A)}this.setIndex(r),this.setAttribute("position",new Ct(a,3)),this.setAttribute("uv",new Ct(o,2)),this.setAttribute("normal",new Ct(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kr(t.points,t.segments,t.phiStart,t.phiLength)}}class uc extends Kr{constructor(t=1,e=1,n=4,i=8){const r=new Or;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new uc(t.radius,t.length,t.capSegments,t.radialSegments)}}class dc extends Wt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new P,h=new j;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ct(a,3)),this.setAttribute("normal",new Ct(o,3)),this.setAttribute("uv",new Ct(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Pi extends Wt{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let p=0;const _=[],g=n/2;let m=0;y(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ct(u,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(f,2));function y(){const M=new P,R=new P;let A=0;const w=(e-t)/n;for(let C=0;C<=r;C++){const B=[],v=C/r,b=v*(e-t)+t;for(let N=0;N<=i;N++){const L=N/i,D=L*c+o,G=Math.sin(D),O=Math.cos(D);R.x=b*G,R.y=-v*n+g,R.z=b*O,u.push(R.x,R.y,R.z),M.set(G,w,O).normalize(),d.push(M.x,M.y,M.z),f.push(L,1-v),B.push(p++)}_.push(B)}for(let C=0;C<i;C++)for(let B=0;B<r;B++){const v=_[B][C],b=_[B+1][C],N=_[B+1][C+1],L=_[B][C+1];t>0&&(h.push(v,b,L),A+=3),e>0&&(h.push(b,N,L),A+=3)}l.addGroup(m,A,0),m+=A}function x(M){const R=p,A=new j,w=new P;let C=0;const B=M===!0?t:e,v=M===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,g*v,0),d.push(0,v,0),f.push(.5,.5),p++;const b=p;for(let N=0;N<=i;N++){const D=N/i*c+o,G=Math.cos(D),O=Math.sin(D);w.x=B*O,w.y=g*v,w.z=B*G,u.push(w.x,w.y,w.z),d.push(0,v,0),A.x=G*.5+.5,A.y=O*.5*v+.5,f.push(A.x,A.y),p++}for(let N=0;N<i;N++){const L=R+N,D=b+N;M===!0?h.push(D,D+1,L):h.push(D+1,D,L),C+=3}l.addGroup(m,C,M===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $r extends Pi{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new $r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Li extends Wt{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Ct(r,3)),this.setAttribute("normal",new Ct(r.slice(),3)),this.setAttribute("uv",new Ct(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new P,M=new P,R=new P;for(let A=0;A<e.length;A+=3)f(e[A+0],x),f(e[A+1],M),f(e[A+2],R),c(x,M,R,y)}function c(y,x,M,R){const A=R+1,w=[];for(let C=0;C<=A;C++){w[C]=[];const B=y.clone().lerp(M,C/A),v=x.clone().lerp(M,C/A),b=A-C;for(let N=0;N<=b;N++)N===0&&C===A?w[C][N]=B:w[C][N]=B.clone().lerp(v,N/b)}for(let C=0;C<A;C++)for(let B=0;B<2*(A-C)-1;B++){const v=Math.floor(B/2);B%2===0?(d(w[C][v+1]),d(w[C+1][v]),d(w[C][v])):(d(w[C][v+1]),d(w[C+1][v+1]),d(w[C+1][v]))}}function l(y){const x=new P;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(y),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function h(){const y=new P;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const M=g(y)/2/Math.PI+.5,R=m(y)/Math.PI+.5;a.push(M,1-R)}p(),u()}function u(){for(let y=0;y<a.length;y+=6){const x=a[y+0],M=a[y+2],R=a[y+4],A=Math.max(x,M,R),w=Math.min(x,M,R);A>.9&&w<.1&&(x<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,x){const M=y*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function p(){const y=new P,x=new P,M=new P,R=new P,A=new j,w=new j,C=new j;for(let B=0,v=0;B<r.length;B+=9,v+=6){y.set(r[B+0],r[B+1],r[B+2]),x.set(r[B+3],r[B+4],r[B+5]),M.set(r[B+6],r[B+7],r[B+8]),A.set(a[v+0],a[v+1]),w.set(a[v+2],a[v+3]),C.set(a[v+4],a[v+5]),R.copy(y).add(x).add(M).divideScalar(3);const b=g(R);_(A,v+0,y,b),_(w,v+2,x,b),_(C,v+4,M,b)}}function _(y,x,M,R){R<0&&y.x===1&&(a[x]=y.x-1),M.x===0&&M.z===0&&(a[x]=R/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.vertices,t.indices,t.radius,t.details)}}class fc extends Li{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new fc(t.radius,t.detail)}}const Fa=new P,Ba=new P,gl=new P,za=new tn;class mp extends Wt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(is*e),a=t.getIndex(),o=t.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<c;p+=3){a?(l[0]=a.getX(p),l[1]=a.getX(p+1),l[2]=a.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:_,b:g,c:m}=za;if(_.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),m.fromBufferAttribute(o,l[2]),za.getNormal(gl),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const x=(y+1)%3,M=u[y],R=u[x],A=za[h[y]],w=za[h[x]],C=`${M}_${R}`,B=`${R}_${M}`;B in d&&d[B]?(gl.dot(d[B].normal)<=r&&(f.push(A.x,A.y,A.z),f.push(w.x,w.y,w.z)),d[B]=null):C in d||(d[C]={index0:l[y],index1:l[x],normal:gl.clone()})}}for(const p in d)if(d[p]){const{index0:_,index1:g}=d[p];Fa.fromBufferAttribute(o,_),Ba.fromBufferAttribute(o,g),f.push(Fa.x,Fa.y,Fa.z),f.push(Ba.x,Ba.y,Ba.z)}this.setAttribute("position",new Ct(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ss extends Or{constructor(t){super(t),this.uuid=fn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Or().fromJSON(i))}return this}}const Jv={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=gp(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(n&&(r=nM(s,t,r,e)),s.length>80*e){o=l=s[0],c=h=s[1];for(let p=e;p<i;p+=e)u=s[p],d=s[p+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return Fr(r,a,e,o,c,f,0),a}};function gp(s,t,e,n,i){let r,a;if(i===fM(s,t,e,n)>0)for(r=t;r<e;r+=n)a=ad(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=ad(r,s[r],s[r+1],a);return a&&pc(a,a.next)&&(zr(a),a=a.next),a}function ls(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(pc(e,e.next)||me(e.prev,e,e.next)===0)){if(zr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Fr(s,t,e,n,i,r,a){if(!s)return;!a&&r&&oM(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?jv(s,n,i,r):Qv(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(l.i/e|0),zr(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=tM(ls(s),t,e),Fr(s,t,e,n,i,r,2)):a===2&&eM(s,t,e,n,i,r):Fr(ls(s),t,e,n,i,r,1);break}}}function Qv(s){const t=s.prev,e=s,n=s.next;if(me(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=i>r?i>a?i:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l;let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&Bs(i,o,r,c,a,l,p.x,p.y)&&me(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function jv(s,t,e,n){const i=s.prev,r=s,a=s.next;if(me(i,r,a)>=0)return!1;const o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,p=h<u?h<d?h:d:u<d?u:d,_=o>c?o>l?o:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,m=Nl(f,p,t,e,n),y=Nl(_,g,t,e,n);let x=s.prevZ,M=s.nextZ;for(;x&&x.z>=m&&M&&M.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==a&&Bs(o,h,c,u,l,d,x.x,x.y)&&me(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=f&&M.x<=_&&M.y>=p&&M.y<=g&&M!==i&&M!==a&&Bs(o,h,c,u,l,d,M.x,M.y)&&me(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==a&&Bs(o,h,c,u,l,d,x.x,x.y)&&me(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=_&&M.y>=p&&M.y<=g&&M!==i&&M!==a&&Bs(o,h,c,u,l,d,M.x,M.y)&&me(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function tM(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!pc(i,r)&&_p(i,n,n.next,r)&&Br(i,r)&&Br(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),zr(n),zr(n.next),n=s=r),n=n.next}while(n!==s);return ls(n)}function eM(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&hM(a,o)){let c=xp(a,o);a=ls(a,a.next),c=ls(c,c.next),Fr(a,t,e,n,i,r,0),Fr(c,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function nM(s,t,e,n){const i=[];let r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:s.length,l=gp(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(lM(l));for(i.sort(iM),r=0;r<i.length;r++)e=sM(i[r],e);return e}function iM(s,t){return s.x-t.x}function sM(s,t){const e=rM(s,t);if(!e)return t;const n=xp(e,s);return ls(n,n.next),ls(e,e.next)}function rM(s,t){let e=t,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,c=i.x,l=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&Bs(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Br(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&aM(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function aM(s,t){return me(s.prev,s,t.prev)<0&&me(t.next,s,s.next)<0}function oM(s,t,e,n){let i=s;do i.z===0&&(i.z=Nl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,cM(i)}function cM(s){let t,e,n,i,r,a,o,c,l=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,l*=2}while(a>1);return s}function Nl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function lM(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Bs(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function hM(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!uM(s,t)&&(Br(s,t)&&Br(t,s)&&dM(s,t)&&(me(s.prev,s,t.prev)||me(s,t.prev,t))||pc(s,t)&&me(s.prev,s,s.next)>0&&me(t.prev,t,t.next)>0)}function me(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function pc(s,t){return s.x===t.x&&s.y===t.y}function _p(s,t,e,n){const i=Ha(me(s,t,e)),r=Ha(me(s,t,n)),a=Ha(me(e,n,s)),o=Ha(me(e,n,t));return!!(i!==r&&a!==o||i===0&&ka(s,e,t)||r===0&&ka(s,n,t)||a===0&&ka(e,s,n)||o===0&&ka(e,t,n))}function ka(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ha(s){return s>0?1:s<0?-1:0}function uM(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&_p(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Br(s,t){return me(s.prev,s,s.next)<0?me(s,t,s.next)>=0&&me(s,s.prev,t)>=0:me(s,t,s.prev)<0||me(s,s.next,t)<0}function dM(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function xp(s,t){const e=new Ol(s.i,s.x,s.y),n=new Ol(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ad(s,t,e,n){const i=new Ol(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function zr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ol(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fM(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class kn{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return kn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];od(t),cd(n,t);let a=t.length;e.forEach(od);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,cd(n,e[c]);const o=Jv.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function od(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function cd(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class mc extends Wt{constructor(t=new ss([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new Ct(i,3)),this.setAttribute("uv",new Ct(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:pM;let x,M=!1,R,A,w,C;m&&(x=m.getSpacedPoints(h),M=!0,d=!1,R=m.computeFrenetFrames(h,!1),A=new P,w=new P,C=new P),d||(g=0,f=0,p=0,_=0);const B=o.extractPoints(l);let v=B.shape;const b=B.holes;if(!kn.isClockWise(v)){v=v.reverse();for(let q=0,I=b.length;q<I;q++){const lt=b[q];kn.isClockWise(lt)&&(b[q]=lt.reverse())}}const L=kn.triangulateShape(v,b),D=v;for(let q=0,I=b.length;q<I;q++){const lt=b[q];v=v.concat(lt)}function G(q,I,lt){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(I,lt)}const O=v.length,W=L.length;function V(q,I,lt){let st,it,ht;const It=q.x-I.x,ct=q.y-I.y,T=lt.x-q.x,S=lt.y-q.y,H=It*It+ct*ct,$=It*S-ct*T;if(Math.abs($)>Number.EPSILON){const Q=Math.sqrt(H),J=Math.sqrt(T*T+S*S),Tt=I.x-ct/Q,mt=I.y+It/Q,St=lt.x-S/J,$t=lt.y+T/J,ut=((St-Tt)*S-($t-mt)*T)/(It*S-ct*T);st=Tt+It*ut-q.x,it=mt+ct*ut-q.y;const Et=st*st+it*it;if(Et<=2)return new j(st,it);ht=Math.sqrt(Et/2)}else{let Q=!1;It>Number.EPSILON?T>Number.EPSILON&&(Q=!0):It<-Number.EPSILON?T<-Number.EPSILON&&(Q=!0):Math.sign(ct)===Math.sign(S)&&(Q=!0),Q?(st=-ct,it=It,ht=Math.sqrt(H)):(st=It,it=ct,ht=Math.sqrt(H/2))}return new j(st/ht,it/ht)}const nt=[];for(let q=0,I=D.length,lt=I-1,st=q+1;q<I;q++,lt++,st++)lt===I&&(lt=0),st===I&&(st=0),nt[q]=V(D[q],D[lt],D[st]);const at=[];let dt,Ft=nt.concat();for(let q=0,I=b.length;q<I;q++){const lt=b[q];dt=[];for(let st=0,it=lt.length,ht=it-1,It=st+1;st<it;st++,ht++,It++)ht===it&&(ht=0),It===it&&(It=0),dt[st]=V(lt[st],lt[ht],lt[It]);at.push(dt),Ft=Ft.concat(dt)}for(let q=0;q<g;q++){const I=q/g,lt=f*Math.cos(I*Math.PI/2),st=p*Math.sin(I*Math.PI/2)+_;for(let it=0,ht=D.length;it<ht;it++){const It=G(D[it],nt[it],st);tt(It.x,It.y,-lt)}for(let it=0,ht=b.length;it<ht;it++){const It=b[it];dt=at[it];for(let ct=0,T=It.length;ct<T;ct++){const S=G(It[ct],dt[ct],st);tt(S.x,S.y,-lt)}}}const qt=p+_;for(let q=0;q<O;q++){const I=d?G(v[q],Ft[q],qt):v[q];M?(w.copy(R.normals[0]).multiplyScalar(I.x),A.copy(R.binormals[0]).multiplyScalar(I.y),C.copy(x[0]).add(w).add(A),tt(C.x,C.y,C.z)):tt(I.x,I.y,0)}for(let q=1;q<=h;q++)for(let I=0;I<O;I++){const lt=d?G(v[I],Ft[I],qt):v[I];M?(w.copy(R.normals[q]).multiplyScalar(lt.x),A.copy(R.binormals[q]).multiplyScalar(lt.y),C.copy(x[q]).add(w).add(A),tt(C.x,C.y,C.z)):tt(lt.x,lt.y,u/h*q)}for(let q=g-1;q>=0;q--){const I=q/g,lt=f*Math.cos(I*Math.PI/2),st=p*Math.sin(I*Math.PI/2)+_;for(let it=0,ht=D.length;it<ht;it++){const It=G(D[it],nt[it],st);tt(It.x,It.y,u+lt)}for(let it=0,ht=b.length;it<ht;it++){const It=b[it];dt=at[it];for(let ct=0,T=It.length;ct<T;ct++){const S=G(It[ct],dt[ct],st);M?tt(S.x,S.y+x[h-1].y,x[h-1].x+lt):tt(S.x,S.y,u+lt)}}}K(),U();function K(){const q=i.length/3;if(d){let I=0,lt=O*I;for(let st=0;st<W;st++){const it=L[st];_t(it[2]+lt,it[1]+lt,it[0]+lt)}I=h+g*2,lt=O*I;for(let st=0;st<W;st++){const it=L[st];_t(it[0]+lt,it[1]+lt,it[2]+lt)}}else{for(let I=0;I<W;I++){const lt=L[I];_t(lt[2],lt[1],lt[0])}for(let I=0;I<W;I++){const lt=L[I];_t(lt[0]+O*h,lt[1]+O*h,lt[2]+O*h)}}n.addGroup(q,i.length/3-q,0)}function U(){const q=i.length/3;let I=0;ot(D,I),I+=D.length;for(let lt=0,st=b.length;lt<st;lt++){const it=b[lt];ot(it,I),I+=it.length}n.addGroup(q,i.length/3-q,1)}function ot(q,I){let lt=q.length;for(;--lt>=0;){const st=lt;let it=lt-1;it<0&&(it=q.length-1);for(let ht=0,It=h+g*2;ht<It;ht++){const ct=O*ht,T=O*(ht+1),S=I+st+ct,H=I+it+ct,$=I+it+T,Q=I+st+T;pt(S,H,$,Q)}}}function tt(q,I,lt){c.push(q),c.push(I),c.push(lt)}function _t(q,I,lt){Mt(q),Mt(I),Mt(lt);const st=i.length/3,it=y.generateTopUV(n,i,st-3,st-2,st-1);bt(it[0]),bt(it[1]),bt(it[2])}function pt(q,I,lt,st){Mt(q),Mt(I),Mt(st),Mt(I),Mt(lt),Mt(st);const it=i.length/3,ht=y.generateSideWallUV(n,i,it-6,it-3,it-2,it-1);bt(ht[0]),bt(ht[1]),bt(ht[3]),bt(ht[1]),bt(ht[2]),bt(ht[3])}function Mt(q){i.push(c[q*3+0]),i.push(c[q*3+1]),i.push(c[q*3+2])}function bt(q){r.push(q.x),r.push(q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return mM(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Vo[i.type]().fromJSON(i)),new mc(n,t.options)}}const pM={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new j(r,a),new j(o,c),new j(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],p=t[i*3+2],_=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new j(a,1-c),new j(l,1-u),new j(d,1-p),new j(_,1-m)]:[new j(o,1-c),new j(h,1-u),new j(f,1-p),new j(g,1-m)]}};function mM(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class gc extends Li{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new gc(t.radius,t.detail)}}class Jr extends Li{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Jr(t.radius,t.detail)}}class _c extends Wt{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],h=[];let u=t;const d=(e-t)/i,f=new P,p=new j;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const m=r+g/n*a;f.x=u*Math.cos(m),f.y=u*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}u+=d}for(let _=0;_<i;_++){const g=_*(n+1);for(let m=0;m<n;m++){const y=m+g,x=y,M=y+n+1,R=y+n+2,A=y+1;o.push(x,M,A),o.push(M,R,A)}}this.setIndex(o),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _c(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class xc extends Wt{constructor(t=new ss([new j(0,.5),new j(-.5,-.5),new j(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ct(i,3)),this.setAttribute("normal",new Ct(r,3)),this.setAttribute("uv",new Ct(a,2));function l(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const p=d.holes;kn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const y=p[g];kn.isClockWise(y)===!0&&(p[g]=y.reverse())}const _=kn.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const y=p[g];f=f.concat(y)}for(let g=0,m=f.length;g<m;g++){const y=f[g];i.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let g=0,m=_.length;g<m;g++){const y=_[g],x=y[0]+u,M=y[1]+u,R=y[2]+u;n.push(x,M,R),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return gM(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const a=e[t.shapes[i]];n.push(a)}return new xc(n,t.curveSegments)}}function gM(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class ds extends Wt{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new P,d=new P,f=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const y=[],x=m/n;let M=0;m===0&&a===0?M=.5/e:m===n&&c===Math.PI&&(M=-.5/e);for(let R=0;R<=e;R++){const A=R/e;u.x=-t*Math.cos(i+A*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(i+A*r)*Math.sin(a+x*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(A+M,1-x),y.push(l++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const x=h[m][y+1],M=h[m][y],R=h[m+1][y],A=h[m+1][y+1];(m!==0||a>0)&&f.push(x,M,A),(m!==n-1||c<Math.PI)&&f.push(M,R,A)}this.setIndex(f),this.setAttribute("position",new Ct(p,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class yc extends Li{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new yc(t.radius,t.detail)}}class vc extends Wt{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new P,u=new P,d=new P;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){const _=p/i*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(p/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){const _=(i+1)*f+p-1,g=(i+1)*(f-1)+p-1,m=(i+1)*(f-1)+p,y=(i+1)*f+p;a.push(_,g,y),a.push(g,m,y)}this.setIndex(a),this.setAttribute("position",new Ct(o,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Mc extends Wt{constructor(t=1,e=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],c=[],l=[],h=[],u=new P,d=new P,f=new P,p=new P,_=new P,g=new P,m=new P;for(let x=0;x<=n;++x){const M=x/n*r*Math.PI*2;y(M,r,a,t,f),y(M+.01,r,a,t,p),g.subVectors(p,f),m.addVectors(p,f),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let R=0;R<=i;++R){const A=R/i*Math.PI*2,w=-e*Math.cos(A),C=e*Math.sin(A);u.x=f.x+(w*m.x+C*_.x),u.y=f.y+(w*m.y+C*_.y),u.z=f.z+(w*m.z+C*_.z),c.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),l.push(d.x,d.y,d.z),h.push(x/n),h.push(R/i)}}for(let x=1;x<=n;x++)for(let M=1;M<=i;M++){const R=(i+1)*(x-1)+(M-1),A=(i+1)*x+(M-1),w=(i+1)*x+M,C=(i+1)*(x-1)+M;o.push(R,A,C),o.push(A,w,C)}this.setIndex(o),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(h,2));function y(x,M,R,A,w){const C=Math.cos(x),B=Math.sin(x),v=R/M*x,b=Math.cos(v);w.x=A*(2+b)*.5*C,w.y=A*(2+b)*B*.5,w.z=A*Math.sin(v)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mc(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Sc extends Wt{constructor(t=new bh(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,c=new P,l=new j;let h=new P;const u=[],d=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Ct(u,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(f,2));function _(){for(let x=0;x<e;x++)g(x);g(r===!1?e:0),y(),m()}function g(x){h=t.getPointAt(x/e,h);const M=a.normals[x],R=a.binormals[x];for(let A=0;A<=i;A++){const w=A/i*Math.PI*2,C=Math.sin(w),B=-Math.cos(w);c.x=B*M.x+C*R.x,c.y=B*M.y+C*R.y,c.z=B*M.z+C*R.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function m(){for(let x=1;x<=e;x++)for(let M=1;M<=i;M++){const R=(i+1)*(x-1)+(M-1),A=(i+1)*x+(M-1),w=(i+1)*x+M,C=(i+1)*(x-1)+M;p.push(R,A,C),p.push(A,w,C)}}function y(){for(let x=0;x<=e;x++)for(let M=0;M<=i;M++)l.x=x/e,l.y=M/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Sc(new Vo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class yp extends Wt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new P,r=new P;if(t.index!==null){const a=t.attributes.position,o=t.index;let c=t.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){const u=c[l],d=u.start,f=u.count;for(let p=d,_=d+f;p<_;p+=3)for(let g=0;g<3;g++){const m=o.getX(p+g),y=o.getX(p+(g+1)%3);i.fromBufferAttribute(a,m),r.fromBufferAttribute(a,y),ld(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const a=t.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){const h=3*o+l,u=3*o+(l+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),ld(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ct(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function ld(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var hd=Object.freeze({__proto__:null,BoxGeometry:Ye,CapsuleGeometry:uc,CircleGeometry:dc,ConeGeometry:$r,CylinderGeometry:Pi,DodecahedronGeometry:fc,EdgesGeometry:mp,ExtrudeGeometry:mc,IcosahedronGeometry:gc,LatheGeometry:Kr,OctahedronGeometry:Jr,PlaneGeometry:us,PolyhedronGeometry:Li,RingGeometry:_c,ShapeGeometry:xc,SphereGeometry:ds,TetrahedronGeometry:yc,TorusGeometry:vc,TorusKnotGeometry:Mc,TubeGeometry:Sc,WireframeGeometry:yp});class vp extends ke{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new xt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Mp extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ri extends ke{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ci,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Sp extends Ri{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new j(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class bp extends ke{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xt(16777215),this.specular=new xt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ci,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wp extends ke{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ci,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class Ap extends ke{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ci,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Ep extends ke{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ci,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Wr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Tp extends ke{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new xt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ci,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Rp extends qe{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function ts(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Cp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ip(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Fl(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let c=0;c!==t;++c)i[a++]=s[o+c]}return i}function Ah(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=s[i++];while(r!==void 0)}function _M(s,t,e,n,i=30){const r=s.clone();r.name=t;const a=[];for(let c=0;c<r.tracks.length;++c){const l=r.tracks[c],h=l.getValueSize(),u=[],d=[];for(let f=0;f<l.times.length;++f){const p=l.times[f]*i;if(!(p<e||p>=n)){u.push(l.times[f]);for(let _=0;_<h;++_)d.push(l.values[f*h+_])}}u.length!==0&&(l.times=ts(u,l.times.constructor),l.values=ts(d,l.values.constructor),a.push(l))}r.tracks=a;let o=1/0;for(let c=0;c<r.tracks.length;++c)o>r.tracks[c].times[0]&&(o=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*o);return r.resetDuration(),r}function xM(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,r=t/n;for(let a=0;a<i;++a){const o=e.tracks[a],c=o.ValueTypeName;if(c==="bool"||c==="string")continue;const l=s.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===c});if(l===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=o.times.length-1;let _;if(r<=o.times[0]){const m=h,y=u-h;_=o.values.slice(m,y)}else if(r>=o.times[p]){const m=p*u+h,y=m+u-h;_=o.values.slice(m,y)}else{const m=o.createInterpolant(),y=h,x=u-h;m.evaluate(r),_=m.resultBuffer.slice(y,x)}c==="quaternion"&&new nn().fromArray(_).normalize().conjugate().toArray(_);const g=l.times.length;for(let m=0;m<g;++m){const y=m*f+d;if(c==="quaternion")nn.multiplyQuaternionsFlat(l.values,y,_,0,l.values,y);else{const x=f-d*2;for(let M=0;M<x;++M)l.values[y+M]-=_[M]}}}return s.blendMode=rh,s}const yM={convertArray:ts,isTypedArray:Cp,getKeyframeOrder:Ip,sortedArray:Fl,flattenJSON:Ah,subclip:_M,makeClipAdditive:xM};class Qr{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Pp extends Qr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ji,endingEnd:Ji}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,a=t+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Qi:r=t,o=2*e-n;break;case Cr:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Qi:a=t,c=2*n-e;break;case Cr:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}const l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),_=p*p,g=_*p,m=-d*g+2*d*_-d*p,y=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*p+1,x=(-1-f)*g+(1.5+f)*_+.5*p,M=f*g-f*_;for(let R=0;R!==o;++R)r[R]=m*a[h+R]+y*a[l+R]+x*a[c+R]+M*a[u+R];return r}}class Eh extends Qr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}}class Lp extends Qr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Dn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ts(e,this.TimeBufferType),this.values=ts(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ts(t.times,Array),values:ts(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Lp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Eh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Pp(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Rr:e=this.InterpolantFactoryMethodDiscrete;break;case zo:e=this.InterpolantFactoryMethodLinear;break;case ja:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rr;case this.InterpolantFactoryMethodLinear:return zo;case this.InterpolantFactoryMethodSmooth:return ja}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&Cp(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ja,r=t.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){const _=e[u+p];if(_!==e[d+p]||_!==e[f+p]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=zo;class fs extends Dn{constructor(t,e,n){super(t,e,n)}}fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Rr;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Th extends Dn{}Th.prototype.ValueTypeName="color";class kr extends Dn{}kr.prototype.ValueTypeName="number";class Dp extends Qr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e);let l=t*o;for(let h=l+o;l!==h;l+=4)nn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class jr extends Dn{InterpolantFactoryMethodLinear(t){return new Dp(this.times,this.values,this.getValueSize(),t)}}jr.prototype.ValueTypeName="quaternion";jr.prototype.InterpolantFactoryMethodSmooth=void 0;class ps extends Dn{constructor(t,e,n){super(t,e,n)}}ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Rr;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;class Hr extends Dn{}Hr.prototype.ValueTypeName="vector";class Vr{constructor(t="",e=-1,n=[],i=Jo){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=fn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(MM(n[a]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(Dn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=Ip(c);c=Fl(c,1,h),l=Fl(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new kr(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){const l=t[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,p,_){if(f.length!==0){const g=[],m=[];Ah(f,g,m,p),g.length!==0&&_.push(new u(d,g,m))}},i=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let _=0;_<d[p].morphTargets.length;_++)f[d[p].morphTargets[_]]=-1;for(const _ in f){const g=[],m=[];for(let y=0;y!==d[p].morphTargets.length;++y){const x=d[p];g.push(x.time),m.push(x.morphTarget===_?1:0)}i.push(new kr(".morphTargetInfluence["+_+"]",g,m))}c=f.length*a}else{const f=".bones["+e[u].name+"]";n(Hr,f+".position",d,"pos",i),n(jr,f+".quaternion",d,"rot",i),n(Hr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function vM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return kr;case"vector":case"vector2":case"vector3":case"vector4":return Hr;case"color":return Th;case"quaternion":return jr;case"bool":case"boolean":return fs;case"string":return ps}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function MM(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=vM(s.type);if(s.times===void 0){const e=[],n=[];Ah(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const ii={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Rh{constructor(t,e,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],p=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}}const Up=new Rh;class sn{constructor(t){this.manager=t!==void 0?t:Up,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}sn.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class SM extends Error{constructor(t,e){super(t),this.response=e}}class ci extends sn{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ii.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ti[t]!==void 0){ti[t].push({onLoad:e,onProgress:n,onError:i});return}ti[t]=[],ti[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=ti[t],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let _=0;const g=new ReadableStream({start(m){y();function y(){u.read().then(({done:x,value:M})=>{if(x)m.close();else{_+=M.byteLength;const R=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let A=0,w=h.length;A<w;A++){const C=h[A];C.onProgress&&C.onProgress(R)}m.enqueue(M),y()}},x=>{m.error(x)})}}});return new Response(g)}else throw new SM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{ii.add(t,l);const h=ti[t];delete ti[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=ti[t];if(h===void 0)throw this.manager.itemError(t),l;delete ti[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class bM extends sn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new ci(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){const e=[];for(let n=0;n<t.length;n++){const i=Vr.parse(t[n]);e.push(i)}return e}}class wM extends sn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=[],o=new cc,c=new ci(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(r.withCredentials);let l=0;function h(u){c.load(t[u],function(d){const f=r.parse(d,!0);a[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},l+=1,l===6&&(f.mipmapCount===1&&(o.minFilter=Se),o.image=a,o.format=f.format,o.needsUpdate=!0,e&&e(o))},n,i)}if(Array.isArray(t))for(let u=0,d=t.length;u<d;++u)h(u);else c.load(t,function(u){const d=r.parse(u,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let _=0;_<d.mipmapCount;_++)a[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+_]),a[p].format=d.format,a[p].width=d.width,a[p].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=Se),o.format=d.format,o.needsUpdate=!0,e&&e(o)},n,i);return o}}class Gr extends sn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ii.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Nr("img");function c(){h(),ii.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class AM extends sn{constructor(t){super(t)}load(t,e,n,i){const r=new qr;r.colorSpace=je;const a=new Gr(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(l){a.load(t[l],function(h){r.images[l]=h,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let l=0;l<t.length;++l)c(l);return r}}class EM extends sn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new zn,o=new ci(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(t,function(c){let l;try{l=r.parse(c)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:un,a.wrapT=l.wrapT!==void 0?l.wrapT:un,a.magFilter=l.magFilter!==void 0?l.magFilter:Se,a.minFilter=l.minFilter!==void 0?l.minFilter:Se,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=Tn),l.mipmapCount===1&&(a.minFilter=Se),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,e&&e(a,l)},n,i),a}}class TM extends sn{constructor(t){super(t)}load(t,e,n,i){const r=new ye,a=new Gr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class Di extends ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Np extends Di{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const _l=new Ot,ud=new P,dd=new P;class Ch{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zr,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ud.setFromMatrixPosition(t.matrixWorld),e.position.copy(ud),dd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dd),e.updateMatrixWorld(),_l.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_l),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_l)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class RM extends Ch{constructor(){super(new Ie(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ws*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Op extends Di{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ee.DEFAULT_UP),this.updateMatrix(),this.target=new ee,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new RM}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const fd=new Ot,ur=new P,xl=new P;class CM extends Ch{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new j(4,2),this._viewportCount=6,this._viewports=[new te(2,1,1,1),new te(0,1,1,1),new te(3,1,1,1),new te(1,1,1,1),new te(3,0,1,1),new te(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ur.setFromMatrixPosition(t.matrixWorld),n.position.copy(ur),xl.copy(n.position),xl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(xl),n.updateMatrixWorld(),i.makeTranslation(-ur.x,-ur.y,-ur.z),fd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fd)}}class Ih extends Di{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new CM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class IM extends Ch{constructor(){super(new nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fp extends Di{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ee.DEFAULT_UP),this.updateMatrix(),this.target=new ee,this.shadow=new IM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ph extends Di{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bp extends Di{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class zp{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new P)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*i),e.addScaledVector(a[2],.488603*r),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],1.092548*(n*i)),e.addScaledVector(a[5],1.092548*(i*r)),e.addScaledVector(a[6],.315392*(3*r*r-1)),e.addScaledVector(a[7],1.092548*(n*r)),e.addScaledVector(a[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*i),e.addScaledVector(a[2],2*.511664*r),e.addScaledVector(a[3],2*.511664*n),e.addScaledVector(a[4],2*.429043*n*i),e.addScaledVector(a[5],2*.429043*i*r),e.addScaledVector(a[6],.743125*r*r-.247708),e.addScaledVector(a[7],2*.429043*n*r),e.addScaledVector(a[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}class kp extends Di{constructor(t=new zp,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class bc extends sn{constructor(t){super(t),this.textures={}}load(t,e,n,i){const r=this,a=new ci(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){const e=this.textures;function n(r){return e[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),e[r]}const i=this.createMaterialFromType(t.type);if(t.uuid!==void 0&&(i.uuid=t.uuid),t.name!==void 0&&(i.name=t.name),t.color!==void 0&&i.color!==void 0&&i.color.setHex(t.color),t.roughness!==void 0&&(i.roughness=t.roughness),t.metalness!==void 0&&(i.metalness=t.metalness),t.sheen!==void 0&&(i.sheen=t.sheen),t.sheenColor!==void 0&&(i.sheenColor=new xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(i.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(t.emissive),t.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(t.specular),t.specularIntensity!==void 0&&(i.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(i.shininess=t.shininess),t.clearcoat!==void 0&&(i.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(i.dispersion=t.dispersion),t.iridescence!==void 0&&(i.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(i.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(i.transmission=t.transmission),t.thickness!==void 0&&(i.thickness=t.thickness),t.attenuationDistance!==void 0&&(i.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(i.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(i.fog=t.fog),t.flatShading!==void 0&&(i.flatShading=t.flatShading),t.blending!==void 0&&(i.blending=t.blending),t.combine!==void 0&&(i.combine=t.combine),t.side!==void 0&&(i.side=t.side),t.shadowSide!==void 0&&(i.shadowSide=t.shadowSide),t.opacity!==void 0&&(i.opacity=t.opacity),t.transparent!==void 0&&(i.transparent=t.transparent),t.alphaTest!==void 0&&(i.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(i.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(i.depthFunc=t.depthFunc),t.depthTest!==void 0&&(i.depthTest=t.depthTest),t.depthWrite!==void 0&&(i.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(i.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(i.blendSrc=t.blendSrc),t.blendDst!==void 0&&(i.blendDst=t.blendDst),t.blendEquation!==void 0&&(i.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(i.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(i.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(i.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(i.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(i.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(i.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(i.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(i.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(i.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(i.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(i.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(i.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(i.rotation=t.rotation),t.linewidth!==void 0&&(i.linewidth=t.linewidth),t.dashSize!==void 0&&(i.dashSize=t.dashSize),t.gapSize!==void 0&&(i.gapSize=t.gapSize),t.scale!==void 0&&(i.scale=t.scale),t.polygonOffset!==void 0&&(i.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(i.dithering=t.dithering),t.alphaToCoverage!==void 0&&(i.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(i.forceSinglePass=t.forceSinglePass),t.visible!==void 0&&(i.visible=t.visible),t.toneMapped!==void 0&&(i.toneMapped=t.toneMapped),t.userData!==void 0&&(i.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?i.vertexColors=t.vertexColors>0:i.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const r in t.uniforms){const a=t.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new xt().setHex(a.value);break;case"v2":i.uniforms[r].value=new j().fromArray(a.value);break;case"v3":i.uniforms[r].value=new P().fromArray(a.value);break;case"v4":i.uniforms[r].value=new te().fromArray(a.value);break;case"m3":i.uniforms[r].value=new Gt().fromArray(a.value);break;case"m4":i.uniforms[r].value=new Ot().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(t.defines!==void 0&&(i.defines=t.defines),t.vertexShader!==void 0&&(i.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(i.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(i.glslVersion=t.glslVersion),t.extensions!==void 0)for(const r in t.extensions)i.extensions[r]=t.extensions[r];if(t.lights!==void 0&&(i.lights=t.lights),t.clipping!==void 0&&(i.clipping=t.clipping),t.size!==void 0&&(i.size=t.size),t.sizeAttenuation!==void 0&&(i.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(i.map=n(t.map)),t.matcap!==void 0&&(i.matcap=n(t.matcap)),t.alphaMap!==void 0&&(i.alphaMap=n(t.alphaMap)),t.bumpMap!==void 0&&(i.bumpMap=n(t.bumpMap)),t.bumpScale!==void 0&&(i.bumpScale=t.bumpScale),t.normalMap!==void 0&&(i.normalMap=n(t.normalMap)),t.normalMapType!==void 0&&(i.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new j().fromArray(r)}return t.displacementMap!==void 0&&(i.displacementMap=n(t.displacementMap)),t.displacementScale!==void 0&&(i.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(i.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(i.roughnessMap=n(t.roughnessMap)),t.metalnessMap!==void 0&&(i.metalnessMap=n(t.metalnessMap)),t.emissiveMap!==void 0&&(i.emissiveMap=n(t.emissiveMap)),t.emissiveIntensity!==void 0&&(i.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(i.specularMap=n(t.specularMap)),t.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(t.specularIntensityMap)),t.specularColorMap!==void 0&&(i.specularColorMap=n(t.specularColorMap)),t.envMap!==void 0&&(i.envMap=n(t.envMap)),t.envMapRotation!==void 0&&i.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(i.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(i.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(i.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(i.lightMap=n(t.lightMap)),t.lightMapIntensity!==void 0&&(i.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(i.aoMap=n(t.aoMap)),t.aoMapIntensity!==void 0&&(i.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(i.gradientMap=n(t.gradientMap)),t.clearcoatMap!==void 0&&(i.clearcoatMap=n(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new j().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(i.iridescenceMap=n(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(i.transmissionMap=n(t.transmissionMap)),t.thicknessMap!==void 0&&(i.thicknessMap=n(t.thicknessMap)),t.anisotropyMap!==void 0&&(i.anisotropyMap=n(t.anisotropyMap)),t.sheenColorMap!==void 0&&(i.sheenColorMap=n(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(t.sheenRoughnessMap)),i}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return bc.createMaterialFromType(t)}static createMaterialFromType(t){const e={ShadowMaterial:vp,SpriteMaterial:gh,RawShaderMaterial:Mp,ShaderMaterial:In,PointsMaterial:xh,MeshPhysicalMaterial:Sp,MeshStandardMaterial:Ri,MeshPhongMaterial:bp,MeshToonMaterial:wp,MeshNormalMaterial:Ap,MeshLambertMaterial:Ep,MeshDepthMaterial:fh,MeshDistanceMaterial:ph,MeshBasicMaterial:Ii,MeshMatcapMaterial:Tp,LineDashedMaterial:Rp,LineBasicMaterial:qe,Material:ke};return new e[t]}}class Bl{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Hp extends Wt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Vp extends sn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new ci(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(t,function(o){try{e(r.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){const e={},n={};function i(f,p){if(e[p]!==void 0)return e[p];const g=f.interleavedBuffers[p],m=r(f,g.buffer),y=Os(g.type,m),x=new ac(y,g.stride);return x.uuid=g.uuid,e[p]=x,x}function r(f,p){if(n[p]!==void 0)return n[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const a=t.isInstancedBufferGeometry?new Hp:new Wt,o=t.data.index;if(o!==void 0){const f=Os(o.type,o.array);a.setIndex(new Kt(f,1))}const c=t.data.attributes;for(const f in c){const p=c[f];let _;if(p.isInterleavedBufferAttribute){const g=i(t.data,p.data);_=new cs(g,p.itemSize,p.offset,p.normalized)}else{const g=Os(p.type,p.array),m=p.isInstancedBufferAttribute?Ys:Kt;_=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),a.setAttribute(f,_)}const l=t.data.morphAttributes;if(l)for(const f in l){const p=l[f],_=[];for(let g=0,m=p.length;g<m;g++){const y=p[g];let x;if(y.isInterleavedBufferAttribute){const M=i(t.data,y.data);x=new cs(M,y.itemSize,y.offset,y.normalized)}else{const M=Os(y.type,y.array);x=new Kt(M,y.itemSize,y.normalized)}y.name!==void 0&&(x.name=y.name),_.push(x)}a.morphAttributes[f]=_}t.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const u=t.data.groups||t.data.drawcalls||t.data.offsets;if(u!==void 0)for(let f=0,p=u.length;f!==p;++f){const _=u[f];a.addGroup(_.start,_.count,_.materialIndex)}const d=t.data.boundingSphere;if(d!==void 0){const f=new P;d.center!==void 0&&f.fromArray(d.center),a.boundingSphere=new ze(f,d.radius)}return t.name&&(a.name=t.name),t.userData&&(a.userData=t.userData),a}}class PM extends sn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=this.path===""?Bl.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||a;const o=new ci(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(c){let l=null;try{l=JSON.parse(c)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+t+".",u.message);return}const h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),console.error("THREE.ObjectLoader: Can't load "+t);return}r.parse(l,e)},n,i)}async loadAsync(t,e){const n=this,i=this.path===""?Bl.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;const r=new ci(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(t,e),o=JSON.parse(a),c=o.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(o)}parse(t,e){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),a=this.parseImages(t.images,function(){e!==void 0&&e(l)}),o=this.parseTextures(t.textures,a),c=this.parseMaterials(t.materials,o),l=this.parseObject(t.object,r,c,o,n),h=this.parseSkeletons(t.skeletons,l);if(this.bindSkeletons(l,h),this.bindLightTargets(l),e!==void 0){let u=!1;for(const d in a)if(a[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&e(l)}return l}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),a=this.parseTextures(t.textures,r),o=this.parseMaterials(t.materials,a),c=this.parseObject(t.object,i,o,a,e),l=this.parseSkeletons(t.skeletons,c);return this.bindSkeletons(c,l),this.bindLightTargets(c),c}parseShapes(t){const e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){const r=new ss().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){const n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,a=t.length;r<a;r++){const o=new oc().fromJSON(t[r],i);n[o.uuid]=o}return n}parseGeometries(t,e){const n={};if(t!==void 0){const i=new Vp;for(let r=0,a=t.length;r<a;r++){let o;const c=t[r];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(c);break;default:c.type in hd?o=hd[c.type].fromJSON(c,e):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}o.uuid=c.uuid,c.name!==void 0&&(o.name=c.name),c.userData!==void 0&&(o.userData=c.userData),n[c.uuid]=o}}return n}parseMaterials(t,e){const n={},i={};if(t!==void 0){const r=new bc;r.setTextures(e);for(let a=0,o=t.length;a<o;a++){const c=t[a];n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(t){const e={};if(t!==void 0)for(let n=0;n<t.length;n++){const i=t[n],r=Vr.parse(i);e[r.uuid]=r}return e}parseImages(t,e){const n=this,i={};let r;function a(c){return n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function o(c){if(typeof c=="string"){const l=c,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return a(h)}else return c.data?{data:Os(c.type,c.data),width:c.width,height:c.height}:null}if(t!==void 0&&t.length>0){const c=new Rh(e);r=new Gr(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,h=t.length;l<h;l++){const u=t[l],d=u.url;if(Array.isArray(d)){const f=[];for(let p=0,_=d.length;p<_;p++){const g=d[p],m=o(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new zn(m.data,m.width,m.height)))}i[u.uuid]=new ji(f)}else{const f=o(u.url);i[u.uuid]=new ji(f)}}}return i}async parseImagesAsync(t){const e=this,n={};let i;async function r(a){if(typeof a=="string"){const o=a,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:e.resourcePath+o;return await i.loadAsync(c)}else return a.data?{data:Os(a.type,a.data),width:a.width,height:a.height}:null}if(t!==void 0&&t.length>0){i=new Gr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=t.length;a<o;a++){const c=t[a],l=c.url;if(Array.isArray(l)){const h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new zn(p.data,p.width,p.height)))}n[c.uuid]=new ji(h)}else{const h=await r(c.url);n[c.uuid]=new ji(h)}}}return n}parseTextures(t,e){function n(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const i={};if(t!==void 0)for(let r=0,a=t.length;r<a;r++){const o=t[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),e[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const c=e[o.image],l=c.data;let h;Array.isArray(l)?(h=new qr,l.length===6&&(h.needsUpdate=!0)):(l&&l.data?h=new zn:h=new ye,l&&(h.needsUpdate=!0)),h.source=c,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,LM)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],pd),h.wrapT=n(o.wrap[1],pd)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,md)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,md)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(t,e,n,i,r){let a;function o(d){return e[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),e[d]}function c(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let p=0,_=d.length;p<_;p++){const g=d[p];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function l(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(t.type){case"Scene":a=new mh,t.background!==void 0&&(Number.isInteger(t.background)?a.background=new xt(t.background):a.background=l(t.background)),t.environment!==void 0&&(a.environment=l(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?a.fog=new rc(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(a.fog=new sc(t.fog.color,t.fog.density)),t.fog.name!==""&&(a.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(a.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(a.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&a.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":a=new Ie(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(a.focus=t.focus),t.zoom!==void 0&&(a.zoom=t.zoom),t.filmGauge!==void 0&&(a.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(a.filmOffset=t.filmOffset),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"OrthographicCamera":a=new nc(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(a.zoom=t.zoom),t.view!==void 0&&(a.view=Object.assign({},t.view));break;case"AmbientLight":a=new Ph(t.color,t.intensity);break;case"DirectionalLight":a=new Fp(t.color,t.intensity),a.target=t.target||"";break;case"PointLight":a=new Ih(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":a=new Bp(t.color,t.intensity,t.width,t.height);break;case"SpotLight":a=new Op(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),a.target=t.target||"";break;case"HemisphereLight":a=new Np(t.color,t.groundColor,t.intensity);break;case"LightProbe":a=new kp().fromJSON(t);break;case"SkinnedMesh":h=o(t.geometry),u=c(t.material),a=new rp(h,u),t.bindMode!==void 0&&(a.bindMode=t.bindMode),t.bindMatrix!==void 0&&a.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(a.skeleton=t.skeleton);break;case"Mesh":h=o(t.geometry),u=c(t.material),a=new se(h,u);break;case"InstancedMesh":h=o(t.geometry),u=c(t.material);const d=t.count,f=t.instanceMatrix,p=t.instanceColor;a=new ap(h,u,d),a.instanceMatrix=new Ys(new Float32Array(f.array),16),p!==void 0&&(a.instanceColor=new Ys(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":h=o(t.geometry),u=c(t.material),a=new op(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=t.perObjectFrustumCulled,a.sortObjects=t.sortObjects,a._drawRanges=t.drawRanges,a._reservedRanges=t.reservedRanges,a._visibility=t.visibility,a._active=t.active,a._bounds=t.bounds.map(_=>{const g=new Be;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);const m=new ze;return m.radius=_.sphereRadius,m.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:m}}),a._maxInstanceCount=t.maxInstanceCount,a._maxVertexCount=t.maxVertexCount,a._maxIndexCount=t.maxIndexCount,a._geometryInitialized=t.geometryInitialized,a._geometryCount=t.geometryCount,a._matricesTexture=l(t.matricesTexture.uuid),t.colorsTexture!==void 0&&(a._colorsTexture=l(t.colorsTexture.uuid));break;case"LOD":a=new sp;break;case"Line":a=new Ti(o(t.geometry),c(t.material));break;case"LineLoop":a=new cp(o(t.geometry),c(t.material));break;case"LineSegments":a=new Xn(o(t.geometry),c(t.material));break;case"PointCloud":case"Points":a=new lp(o(t.geometry),c(t.material));break;case"Sprite":a=new ip(c(t.material));break;case"Group":a=new Rn;break;case"Bone":a=new _h;break;default:a=new ee}if(a.uuid=t.uuid,t.name!==void 0&&(a.name=t.name),t.matrix!==void 0?(a.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=t.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(t.position!==void 0&&a.position.fromArray(t.position),t.rotation!==void 0&&a.rotation.fromArray(t.rotation),t.quaternion!==void 0&&a.quaternion.fromArray(t.quaternion),t.scale!==void 0&&a.scale.fromArray(t.scale)),t.up!==void 0&&a.up.fromArray(t.up),t.castShadow!==void 0&&(a.castShadow=t.castShadow),t.receiveShadow!==void 0&&(a.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(a.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(a.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(a.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(a.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(a.visible=t.visible),t.frustumCulled!==void 0&&(a.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(a.renderOrder=t.renderOrder),t.userData!==void 0&&(a.userData=t.userData),t.layers!==void 0&&(a.layers.mask=t.layers),t.children!==void 0){const d=t.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],e,n,i,r))}if(t.animations!==void 0){const d=t.animations;for(let f=0;f<d.length;f++){const p=d[f];a.animations.push(r[p])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(a.autoUpdate=t.autoUpdate);const d=t.levels;for(let f=0;f<d.length;f++){const p=d[f],_=a.getObjectByProperty("uuid",p.object);_!==void 0&&a.addLevel(_,p.distance,p.hysteresis)}}return a}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=e[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){const n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new ee}})}}const LM={UVMapping:Wo,CubeReflectionMapping:ai,CubeRefractionMapping:Ei,EquirectangularReflectionMapping:Ar,EquirectangularRefractionMapping:Er,CubeUVReflectionMapping:Ks},pd={RepeatWrapping:Vs,ClampToEdgeWrapping:un,MirroredRepeatWrapping:Tr},md={NearestFilter:Pe,NearestMipmapNearestFilter:Kl,NearestMipmapLinearFilter:Ns,LinearFilter:Se,LinearMipmapNearestFilter:mr,LinearMipmapLinearFilter:Tn};class DM extends sn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ii.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ii.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),ii.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});ii.add(t,c),r.manager.itemStart(t)}}let Va;class Lh{static getContext(){return Va===void 0&&(Va=new(window.AudioContext||window.webkitAudioContext)),Va}static setContext(t){Va=t}}class UM extends sn{constructor(t){super(t)}load(t,e,n,i){const r=this,a=new ci(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(c){try{const l=c.slice(0);Lh.getContext().decodeAudioData(l,function(u){e(u)}).catch(o)}catch(l){o(l)}},n,i);function o(c){i?i(c):console.error(c),r.manager.itemError(t)}}}const gd=new Ot,_d=new Ot,Vi=new Ot;class NM{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ie,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ie,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,Vi.copy(t.projectionMatrix);const i=e.eyeSep/2,r=i*e.near/e.focus,a=e.near*Math.tan(is*e.fov*.5)/e.zoom;let o,c;_d.elements[12]=-i,gd.elements[12]=i,o=-a*e.aspect+r,c=a*e.aspect+r,Vi.elements[0]=2*e.near/(c-o),Vi.elements[8]=(c+o)/(c-o),this.cameraL.projectionMatrix.copy(Vi),o=-a*e.aspect-r,c=a*e.aspect-r,Vi.elements[0]=2*e.near/(c-o),Vi.elements[8]=(c+o)/(c-o),this.cameraR.projectionMatrix.copy(Vi)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(_d),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(gd)}}class Gp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=xd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function xd(){return performance.now()}const Gi=new P,yd=new nn,OM=new P,Wi=new P;class FM extends ee{constructor(){super(),this.type="AudioListener",this.context=Lh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Gp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Gi,yd,OM),Wi.set(0,0,-1).applyQuaternion(yd),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Gi.x,i),e.positionY.linearRampToValueAtTime(Gi.y,i),e.positionZ.linearRampToValueAtTime(Gi.z,i),e.forwardX.linearRampToValueAtTime(Wi.x,i),e.forwardY.linearRampToValueAtTime(Wi.y,i),e.forwardZ.linearRampToValueAtTime(Wi.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(Gi.x,Gi.y,Gi.z),e.setOrientation(Wi.x,Wi.y,Wi.z,n.x,n.y,n.z)}}class Wp extends ee{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const Xi=new P,vd=new nn,BM=new P,Yi=new P;class zM extends Wp{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Xi,vd,BM),Yi.set(0,0,1).applyQuaternion(vd);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(Xi.x,n),e.positionY.linearRampToValueAtTime(Xi.y,n),e.positionZ.linearRampToValueAtTime(Xi.z,n),e.orientationX.linearRampToValueAtTime(Yi.x,n),e.orientationY.linearRampToValueAtTime(Yi.y,n),e.orientationZ.linearRampToValueAtTime(Yi.z,n)}else e.setPosition(Xi.x,Xi.y,Xi.z),e.setOrientation(Yi.x,Yi.y,Yi.z)}}class kM{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class Xp{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,a;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=e*this._origIndex;this._mixBufferRegion(n,i,c,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let c=e,l=e+e;c!==l;++c)if(n[c]!==n[c+e]){o.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,a=i;r!==a;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){nn.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const a=this._workIndex*r;nn.multiplyQuaternionsFlat(t,a,t,e,t,n),nn.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const c=e+o;t[c]=t[c]*a+t[n+o]*i}}_lerpAdditive(t,e,n,i,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[n+a]*i}}}const Dh="\\[\\]\\.:\\/",HM=new RegExp("["+Dh+"]","g"),Uh="[^"+Dh+"]",VM="[^"+Dh.replace("\\.","")+"]",GM=/((?:WC+[\/:])*)/.source.replace("WC",Uh),WM=/(WCOD+)?/.source.replace("WCOD",VM),XM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uh),YM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uh),qM=new RegExp("^"+GM+WM+XM+YM+"$"),ZM=["material","materials","bones","map"];class KM{constructor(t,e,n){const i=n||jt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class jt{constructor(t,e,n){this.path=e,this.parsedPath=n||jt.parseTrackName(e),this.node=jt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new jt.Composite(t,e,n):new jt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(HM,"")}static parseTrackName(t){const e=qM.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);ZM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=jt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const a=t[i];if(a===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}jt.Composite=KM;jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};jt.prototype.GetterByBindingType=[jt.prototype._getValue_direct,jt.prototype._getValue_array,jt.prototype._getValue_arrayElement,jt.prototype._getValue_toArray];jt.prototype.SetterByBindingTypeAndVersioning=[[jt.prototype._setValue_direct,jt.prototype._setValue_direct_setNeedsUpdate,jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_array,jt.prototype._setValue_array_setNeedsUpdate,jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_arrayElement,jt.prototype._setValue_arrayElement_setNeedsUpdate,jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_fromArray,jt.prototype._setValue_fromArray_setNeedsUpdate,jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class $M{constructor(){this.isAnimationObjectGroup=!0,this.uuid=fn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length;let o,c=t.length,l=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const d=arguments[h],f=d.uuid;let p=e[f];if(p===void 0){p=c++,e[f]=p,t.push(d);for(let _=0,g=a;_!==g;++_)r[_].push(new jt(d,n[_],i[_]))}else if(p<l){o=t[p];const _=--l,g=t[_];e[g.uuid]=p,t[p]=g,e[f]=_,t[_]=d;for(let m=0,y=a;m!==y;++m){const x=r[m],M=x[_];let R=x[p];x[p]=M,R===void 0&&(R=new jt(d,n[m],i[m])),x[_]=R}}else t[p]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const c=arguments[a],l=c.uuid,h=e[l];if(h!==void 0&&h>=r){const u=r++,d=t[u];e[d.uuid]=h,t[h]=d,e[l]=u,t[u]=c;for(let f=0,p=i;f!==p;++f){const _=n[f],g=_[u],m=_[h];_[h]=g,_[u]=m}}}this.nCachedObjects_=r}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,a=t.length;for(let o=0,c=arguments.length;o!==c;++o){const l=arguments[o],h=l.uuid,u=e[h];if(u!==void 0)if(delete e[h],u<r){const d=--r,f=t[d],p=--a,_=t[p];e[f.uuid]=u,t[u]=f,e[_.uuid]=d,t[d]=_,t.pop();for(let g=0,m=i;g!==m;++g){const y=n[g],x=y[d],M=y[p];y[u]=x,y[d]=M,y.pop()}}else{const d=--a,f=t[d];d>0&&(e[f.uuid]=u),t[u]=f,t.pop();for(let p=0,_=i;p!==_;++p){const g=n[p];g[u]=g[d],g.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const a=this._paths,o=this._parsedPaths,c=this._objects,l=c.length,h=this.nCachedObjects_,u=new Array(l);i=r.length,n[t]=i,a.push(t),o.push(e),r.push(u);for(let d=h,f=c.length;d!==f;++d){const p=c[d];u[d]=new jt(p,t,e)}return u}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,c=a[o],l=t[o];e[l]=n,a[n]=c,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}class Yp{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,a=r.length,o=new Array(a),c={endingStart:Ji,endingEnd:Ji};for(let l=0;l!==a;++l){const h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Tf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,r=t._clip.duration,a=r/i,o=i/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=t/a,l[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const c=(t-r)*n;c<0||n===0?e=0:(this._startTime=null,e=n*c)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case rh:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Jo:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const a=n===Rf;if(t===0)return r===-1?i:a&&(r&1)===1?e-i:i;if(n===Ef){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){const o=Math.floor(i/e);i-=e*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(c===1){const l=t<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Qi,i.endingEnd=Qi):(t?i.endingStart=this.zeroSlopeAtStart?Qi:Ji:i.endingStart=Cr,e?i.endingEnd=this.zeroSlopeAtEnd?Qi:Ji:i.endingEnd=Cr)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=e,o[1]=r+t,c[1]=n,this}}const JM=new Float32Array(1);class QM extends Wn{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,a=t._propertyBindings,o=t._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let p=h[f];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,c,f));continue}const _=e&&e._propertyBindings[u].binding.parsedPath;p=new Xp(jt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,c,f),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=t._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),t._byClipCacheIndex=null;const u=o.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=e[e.length-1],l=t._cacheIndex;c._cacheIndex=l,e[l]=c,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Eh(new Float32Array(2),new Float32Array(2),1,JM),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let a=typeof t=="string"?Vr.findByName(i,t):t;const o=a!==null?a.uuid:t,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Jo),c!==void 0){const u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const h=new Yp(this,a,e,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?Vr.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let l=0;l!==n;++l)e[l]._update(i,t,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const h=l._cacheIndex,u=e[e.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[e];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Nh{constructor(t){this.value=t}clone(){return new Nh(this.value.clone===void 0?this.value:this.value.clone())}}let jM=0;class tS extends Wn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:jM++}),this.name="",this.usage=Dr,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){const r=Array.isArray(e[n])?e[n]:[e[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class eS extends ac{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class nS{constructor(t,e,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const Md=new Ot;class iS{constructor(t,e,n=0,i=1/0){this.ray=new Js(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new tc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Md.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Md),this}intersectObject(t,e=!0,n=[]){return zl(t,this,n,e),n.sort(Sd),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)zl(t[i],this,n,e);return n.sort(Sd),n}}function Sd(s,t){return s.distance-t.distance}function zl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)zl(r[a],t,e,!0)}}class sS{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(xe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class rS{constructor(t=1,e=0,n=0){return this.radius=t,this.theta=e,this.y=n,this}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}}class Oh{constructor(t,e,n,i){Oh.prototype.isMatrix2=!0,this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}}const bd=new j;class aS{constructor(t=new j(1/0,1/0),e=new j(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=bd.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bd).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wd=new P,Ga=new P;class oS{constructor(t=new P,e=new P){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){wd.subVectors(t,this.start),Ga.subVectors(this.end,this.start);const n=Ga.dot(Ga);let r=Ga.dot(wd)/n;return e&&(r=xe(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Ad=new P;class cS extends ee{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new Wt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,c=32;a<c;a++,o++){const l=a/c*Math.PI*2,h=o/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Ct(i,3));const r=new qe({fog:!1,toneMapped:!1});this.cone=new Xn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),Ad.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Ad),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const xi=new P,Wa=new Ot,yl=new Ot;class lS extends Xn{constructor(t){const e=qp(t),n=new Wt,i=[],r=[],a=new xt(0,0,1),o=new xt(0,1,0);for(let l=0;l<e.length;l++){const h=e[l];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Ct(i,3)),n.setAttribute("color",new Ct(r,3));const c=new qe({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");yl.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<e.length;r++){const o=e[r];o.parent&&o.parent.isBone&&(Wa.multiplyMatrices(yl,o.matrixWorld),xi.setFromMatrixPosition(Wa),i.setXYZ(a,xi.x,xi.y,xi.z),Wa.multiplyMatrices(yl,o.parent.matrixWorld),xi.setFromMatrixPosition(Wa),i.setXYZ(a+1,xi.x,xi.y,xi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose()}}function qp(s){const t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push.apply(t,qp(s.children[e]));return t}class hS extends se{constructor(t,e,n){const i=new ds(e,4,2),r=new Ii({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const uS=new P,Ed=new xt,Td=new xt;class dS extends ee{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Jr(e);i.rotateY(Math.PI*.5),this.material=new Ii({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new Kt(a,3)),this.add(new se(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");Ed.copy(this.light.color),Td.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){const r=n<i/2?Ed:Td;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),t.lookAt(uS.setFromMatrixPosition(this.light.matrixWorld).negate())}}class fS extends Xn{constructor(t=10,e=10,n=4473924,i=8947848){n=new xt(n),i=new xt(i);const r=e/2,a=t/e,o=t/2,c=[],l=[];for(let d=0,f=0,p=-o;d<=e;d++,p+=a){c.push(-o,0,p,o,0,p),c.push(p,0,-o,p,0,o);const _=d===r?n:i;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const h=new Wt;h.setAttribute("position",new Ct(c,3)),h.setAttribute("color",new Ct(l,3));const u=new qe({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class pS extends Xn{constructor(t=10,e=16,n=8,i=64,r=4473924,a=8947848){r=new xt(r),a=new xt(a);const o=[],c=[];if(e>1)for(let u=0;u<e;u++){const d=u/e*(Math.PI*2),f=Math.sin(d)*t,p=Math.cos(d)*t;o.push(0,0,0),o.push(f,0,p);const _=u&1?r:a;c.push(_.r,_.g,_.b),c.push(_.r,_.g,_.b)}for(let u=0;u<n;u++){const d=u&1?r:a,f=t-t/n*u;for(let p=0;p<i;p++){let _=p/i*(Math.PI*2),g=Math.sin(_)*f,m=Math.cos(_)*f;o.push(g,0,m),c.push(d.r,d.g,d.b),_=(p+1)/i*(Math.PI*2),g=Math.sin(_)*f,m=Math.cos(_)*f,o.push(g,0,m),c.push(d.r,d.g,d.b)}}const l=new Wt;l.setAttribute("position",new Ct(o,3)),l.setAttribute("color",new Ct(c,3));const h=new qe({vertexColors:!0,toneMapped:!1});super(l,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Rd=new P,Xa=new P,Cd=new P;class mS extends ee{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new Wt;i.setAttribute("position",new Ct([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new qe({fog:!1,toneMapped:!1});this.lightPlane=new Ti(i,r),this.add(this.lightPlane),i=new Wt,i.setAttribute("position",new Ct([0,0,0,0,0,1],3)),this.targetLine=new Ti(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Rd.setFromMatrixPosition(this.light.matrixWorld),Xa.setFromMatrixPosition(this.light.target.matrixWorld),Cd.subVectors(Xa,Rd),this.lightPlane.lookAt(Xa),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Xa),this.targetLine.scale.z=Cd.length()}}const Ya=new P,_e=new ec;class gS extends Xn{constructor(t){const e=new Wt,n=new qe({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,_){c(p),c(_)}function c(p){i.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(i.length/3-1)}e.setAttribute("position",new Ct(i,3)),e.setAttribute("color",new Ct(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const l=new xt(16755200),h=new xt(16711680),u=new xt(43775),d=new xt(16777215),f=new xt(3355443);this.setColors(l,h,u,d,f)}setColors(t,e,n,i,r){const o=this.geometry.getAttribute("color");o.setXYZ(0,t.r,t.g,t.b),o.setXYZ(1,t.r,t.g,t.b),o.setXYZ(2,t.r,t.g,t.b),o.setXYZ(3,t.r,t.g,t.b),o.setXYZ(4,t.r,t.g,t.b),o.setXYZ(5,t.r,t.g,t.b),o.setXYZ(6,t.r,t.g,t.b),o.setXYZ(7,t.r,t.g,t.b),o.setXYZ(8,t.r,t.g,t.b),o.setXYZ(9,t.r,t.g,t.b),o.setXYZ(10,t.r,t.g,t.b),o.setXYZ(11,t.r,t.g,t.b),o.setXYZ(12,t.r,t.g,t.b),o.setXYZ(13,t.r,t.g,t.b),o.setXYZ(14,t.r,t.g,t.b),o.setXYZ(15,t.r,t.g,t.b),o.setXYZ(16,t.r,t.g,t.b),o.setXYZ(17,t.r,t.g,t.b),o.setXYZ(18,t.r,t.g,t.b),o.setXYZ(19,t.r,t.g,t.b),o.setXYZ(20,t.r,t.g,t.b),o.setXYZ(21,t.r,t.g,t.b),o.setXYZ(22,t.r,t.g,t.b),o.setXYZ(23,t.r,t.g,t.b),o.setXYZ(24,e.r,e.g,e.b),o.setXYZ(25,e.r,e.g,e.b),o.setXYZ(26,e.r,e.g,e.b),o.setXYZ(27,e.r,e.g,e.b),o.setXYZ(28,e.r,e.g,e.b),o.setXYZ(29,e.r,e.g,e.b),o.setXYZ(30,e.r,e.g,e.b),o.setXYZ(31,e.r,e.g,e.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0}update(){const t=this.geometry,e=this.pointMap,n=1,i=1;_e.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Me("c",e,t,_e,0,0,-1),Me("t",e,t,_e,0,0,1),Me("n1",e,t,_e,-n,-i,-1),Me("n2",e,t,_e,n,-i,-1),Me("n3",e,t,_e,-n,i,-1),Me("n4",e,t,_e,n,i,-1),Me("f1",e,t,_e,-n,-i,1),Me("f2",e,t,_e,n,-i,1),Me("f3",e,t,_e,-n,i,1),Me("f4",e,t,_e,n,i,1),Me("u1",e,t,_e,n*.7,i*1.1,-1),Me("u2",e,t,_e,-n*.7,i*1.1,-1),Me("u3",e,t,_e,0,i*2,-1),Me("cf1",e,t,_e,-n,0,1),Me("cf2",e,t,_e,n,0,1),Me("cf3",e,t,_e,0,-i,1),Me("cf4",e,t,_e,0,i,1),Me("cn1",e,t,_e,-n,0,-1),Me("cn2",e,t,_e,n,0,-1),Me("cn3",e,t,_e,0,-i,-1),Me("cn4",e,t,_e,0,i,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Me(s,t,e,n,i,r,a){Ya.set(i,r,a).unproject(n);const o=t[s];if(o!==void 0){const c=e.getAttribute("position");for(let l=0,h=o.length;l<h;l++)c.setXYZ(o[l],Ya.x,Ya.y,Ya.z)}}const qa=new Be;class _S extends Xn{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new Wt;r.setIndex(new Kt(n,1)),r.setAttribute("position",new Kt(i,3)),super(r,new qe({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&qa.setFromObject(this.object),qa.isEmpty())return;const e=qa.min,n=qa.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=e.x,r[4]=n.y,r[5]=n.z,r[6]=e.x,r[7]=e.y,r[8]=n.z,r[9]=n.x,r[10]=e.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=e.z,r[15]=e.x,r[16]=n.y,r[17]=e.z,r[18]=e.x,r[19]=e.y,r[20]=e.z,r[21]=n.x,r[22]=e.y,r[23]=e.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class xS extends Xn{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Wt;r.setIndex(new Kt(n,1)),r.setAttribute("position",new Ct(i,3)),super(r,new qe({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class yS extends Ti{constructor(t,e=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new Wt;a.setAttribute("position",new Ct(r,3)),a.computeBoundingSphere(),super(a,new qe({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new Wt;c.setAttribute("position",new Ct(o,3)),c.computeBoundingSphere(),this.add(new se(c,new Ii({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Id=new P;let Za,vl;class vS extends ee{constructor(t=new P(0,0,1),e=new P(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Za===void 0&&(Za=new Wt,Za.setAttribute("position",new Ct([0,0,0,0,1,0],3)),vl=new Pi(0,.5,1,5,1),vl.translate(0,-.5,0)),this.position.copy(e),this.line=new Ti(Za,new qe({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new se(vl,new Ii({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Id.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Id,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class MS extends Xn{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Wt;i.setAttribute("position",new Ct(e,3)),i.setAttribute("color",new Ct(n,3));const r=new qe({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){const i=new xt,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class SS{constructor(){this.type="ShapePath",this.color=new xt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Or,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,a){return this.currentPath.bezierCurveTo(t,e,n,i,r,a),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(m){const y=[];for(let x=0,M=m.length;x<M;x++){const R=m[x],A=new ss;A.curves=R.curves,y.push(A)}return y}function n(m,y){const x=y.length;let M=!1;for(let R=x-1,A=0;A<x;R=A++){let w=y[R],C=y[A],B=C.x-w.x,v=C.y-w.y;if(Math.abs(v)>Number.EPSILON){if(v<0&&(w=y[A],B=-B,C=y[R],v=-v),m.y<w.y||m.y>C.y)continue;if(m.y===w.y){if(m.x===w.x)return!0}else{const b=v*(m.x-w.x)-B*(m.y-w.y);if(b===0)return!0;if(b<0)continue;M=!M}}else{if(m.y!==w.y)continue;if(C.x<=m.x&&m.x<=w.x||w.x<=m.x&&m.x<=C.x)return!0}}return M}const i=kn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c;const l=[];if(r.length===1)return o=r[0],c=new ss,c.curves=o.curves,l.push(c),l;let h=!i(r[0].getPoints());h=t?!h:h;const u=[],d=[];let f=[],p=0,_;d[p]=void 0,f[p]=[];for(let m=0,y=r.length;m<y;m++)o=r[m],_=o.getPoints(),a=i(_),a=t?!a:a,a?(!h&&d[p]&&p++,d[p]={s:new ss,p:_},d[p].s.curves=o.curves,h&&p++,f[p]=[]):f[p].push({h:o,p:_[0]});if(!d[0])return e(r);if(d.length>1){let m=!1,y=0;for(let x=0,M=d.length;x<M;x++)u[x]=[];for(let x=0,M=d.length;x<M;x++){const R=f[x];for(let A=0;A<R.length;A++){const w=R[A];let C=!0;for(let B=0;B<d.length;B++)n(w.p,d[B].p)&&(x!==B&&y++,C?(C=!1,u[B].push(w)):m=!0);C&&u[x].push(w)}}y>0&&m===!1&&(f=u)}let g;for(let m=0,y=d.length;m<y;m++){c=d[m].s,l.push(c),g=f[m];for(let x=0,M=g.length;x<M;x++)c.holes.push(g[x].h)}return l}}class bS extends Wn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}class wS extends Cn{constructor(t=1,e=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(t,e,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);const AS=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Zl,AddEquation:Si,AddOperation:xf,AdditiveAnimationBlendMode:rh,AdditiveBlending:Al,AgXToneMapping:bf,AlphaFormat:jl,AlwaysCompare:Bf,AlwaysDepth:ao,AlwaysStencilFunc:Cl,AmbientLight:Ph,AnimationAction:Yp,AnimationClip:Vr,AnimationLoader:bM,AnimationMixer:QM,AnimationObjectGroup:$M,AnimationUtils:yM,ArcCurve:hp,ArrayCamera:tp,ArrowHelper:vS,AttachedBindMode:Rl,Audio:Wp,AudioAnalyser:kM,AudioContext:Lh,AudioListener:FM,AudioLoader:UM,AxesHelper:MS,BackSide:Xe,BasicDepthPacking:Cf,BasicShadowMap:gm,BatchedMesh:op,Bone:_h,BooleanKeyframeTrack:fs,Box2:aS,Box3:Be,Box3Helper:xS,BoxGeometry:Ye,BoxHelper:_S,BufferAttribute:Kt,BufferGeometry:Wt,BufferGeometryLoader:Vp,ByteType:$l,Cache:ii,Camera:ec,CameraHelper:gS,CanvasTexture:lc,CapsuleGeometry:uc,CatmullRomCurve3:up,CineonToneMapping:Mf,CircleGeometry:dc,ClampToEdgeWrapping:un,Clock:Gp,Color:xt,ColorKeyframeTrack:Th,ColorManagement:ne,CompressedArrayTexture:Vv,CompressedCubeTexture:Gv,CompressedTexture:cc,CompressedTextureLoader:wM,ConeGeometry:$r,ConstantAlphaFactor:mf,ConstantColorFactor:ff,Controls:bS,CubeCamera:Yf,CubeReflectionMapping:ai,CubeRefractionMapping:Ei,CubeTexture:qr,CubeTextureLoader:AM,CubeUVReflectionMapping:Ks,CubicBezierCurve:vh,CubicBezierCurve3:dp,CubicInterpolant:Pp,CullFaceBack:wl,CullFaceFront:Jd,CullFaceFrontBack:mm,CullFaceNone:$d,Curve:Ln,CurvePath:pp,CustomBlending:Qd,CustomToneMapping:Sf,CylinderGeometry:Pi,Cylindrical:rS,Data3DTexture:ch,DataArrayTexture:jo,DataTexture:zn,DataTextureLoader:EM,DataUtils:P0,DecrementStencilOp:Im,DecrementWrapStencilOp:Lm,DefaultLoadingManager:Up,DepthFormat:ns,DepthStencilFormat:os,DepthTexture:dh,DetachedBindMode:Af,DirectionalLight:Fp,DirectionalLightHelper:mS,DiscreteInterpolant:Lp,DisplayP3ColorSpace:Qo,DodecahedronGeometry:fc,DoubleSide:On,DstAlphaFactor:cf,DstColorFactor:hf,DynamicCopyUsage:qm,DynamicDrawUsage:Hm,DynamicReadUsage:Wm,EdgesGeometry:mp,EllipseCurve:hc,EqualCompare:Uf,EqualDepth:co,EqualStencilFunc:Om,EquirectangularReflectionMapping:Ar,EquirectangularRefractionMapping:Er,Euler:pn,EventDispatcher:Wn,ExtrudeGeometry:mc,FileLoader:ci,Float16BufferAttribute:F0,Float32BufferAttribute:Ct,FloatType:en,Fog:rc,FogExp2:sc,FramebufferTexture:Hv,FrontSide:Hn,Frustum:Zr,GLBufferAttribute:nS,GLSL1:Km,GLSL3:Il,GreaterCompare:Nf,GreaterDepth:ho,GreaterEqualCompare:Ff,GreaterEqualDepth:lo,GreaterEqualStencilFunc:km,GreaterStencilFunc:Bm,GridHelper:fS,Group:Rn,HalfFloatType:$s,HemisphereLight:Np,HemisphereLightHelper:dS,IcosahedronGeometry:gc,ImageBitmapLoader:DM,ImageLoader:Gr,ImageUtils:Hf,IncrementStencilOp:Cm,IncrementWrapStencilOp:Pm,InstancedBufferAttribute:Ys,InstancedBufferGeometry:Hp,InstancedInterleavedBuffer:eS,InstancedMesh:ap,Int16BufferAttribute:N0,Int32BufferAttribute:O0,Int8BufferAttribute:L0,IntType:Xo,InterleavedBuffer:ac,InterleavedBufferAttribute:cs,Interpolant:Qr,InterpolateDiscrete:Rr,InterpolateLinear:zo,InterpolateSmooth:ja,InvertStencilOp:Dm,KeepStencilOp:Zi,KeyframeTrack:Dn,LOD:sp,LatheGeometry:Kr,Layers:tc,LessCompare:Df,LessDepth:oo,LessEqualCompare:ah,LessEqualDepth:rs,LessEqualStencilFunc:Fm,LessStencilFunc:Nm,Light:Di,LightProbe:kp,Line:Ti,Line3:oS,LineBasicMaterial:qe,LineCurve:Mh,LineCurve3:fp,LineDashedMaterial:Rp,LineLoop:cp,LineSegments:Xn,LinearDisplayP3ColorSpace:Yr,LinearFilter:Se,LinearInterpolant:Eh,LinearMipMapLinearFilter:vm,LinearMipMapNearestFilter:ym,LinearMipmapLinearFilter:Tn,LinearMipmapNearestFilter:mr,LinearSRGBColorSpace:li,LinearToneMapping:yf,LinearTransfer:Ir,Loader:sn,LoaderUtils:Bl,LoadingManager:Rh,LoopOnce:Ef,LoopPingPong:Rf,LoopRepeat:Tf,LuminanceAlphaFormat:nh,LuminanceFormat:eh,MOUSE:fm,Material:ke,MaterialLoader:bc,MathUtils:d0,Matrix2:Oh,Matrix3:Gt,Matrix4:Ot,MaxEquation:nf,Mesh:se,MeshBasicMaterial:Ii,MeshDepthMaterial:fh,MeshDistanceMaterial:ph,MeshLambertMaterial:Ep,MeshMatcapMaterial:Tp,MeshNormalMaterial:Ap,MeshPhongMaterial:bp,MeshPhysicalMaterial:Sp,MeshStandardMaterial:Ri,MeshToonMaterial:wp,MinEquation:ef,MirroredRepeatWrapping:Tr,MixOperation:_f,MultiplyBlending:Tl,MultiplyOperation:Wr,NearestFilter:Pe,NearestMipMapLinearFilter:xm,NearestMipMapNearestFilter:_m,NearestMipmapLinearFilter:Ns,NearestMipmapNearestFilter:Kl,NeutralToneMapping:wf,NeverCompare:Lf,NeverDepth:ro,NeverStencilFunc:Um,NoBlending:si,NoColorSpace:ei,NoToneMapping:ri,NormalAnimationBlendMode:Jo,NormalBlending:es,NotEqualCompare:Of,NotEqualDepth:uo,NotEqualStencilFunc:zm,NumberKeyframeTrack:kr,Object3D:ee,ObjectLoader:PM,ObjectSpaceNormalMap:Pf,OctahedronGeometry:Jr,OneFactor:rf,OneMinusConstantAlphaFactor:gf,OneMinusConstantColorFactor:pf,OneMinusDstAlphaFactor:lf,OneMinusDstColorFactor:uf,OneMinusSrcAlphaFactor:so,OneMinusSrcColorFactor:of,OrthographicCamera:nc,P3Primaries:Lr,PCFShadowMap:Yl,PCFSoftShadowMap:ql,PMREMGenerator:Pl,Path:Or,PerspectiveCamera:Ie,Plane:Mi,PlaneGeometry:us,PlaneHelper:yS,PointLight:Ih,PointLightHelper:hS,Points:lp,PointsMaterial:xh,PolarGridHelper:pS,PolyhedronGeometry:Li,PositionalAudio:zM,PropertyBinding:jt,PropertyMixer:Xp,QuadraticBezierCurve:Sh,QuadraticBezierCurve3:bh,Quaternion:nn,QuaternionKeyframeTrack:jr,QuaternionLinearInterpolant:Dp,RED_GREEN_RGTC2_Format:Fo,RED_RGTC1_Format:sh,REVISION:Go,RGBADepthPacking:If,RGBAFormat:We,RGBAIntegerFormat:$o,RGBA_ASTC_10x10_Format:Po,RGBA_ASTC_10x5_Format:Ro,RGBA_ASTC_10x6_Format:Co,RGBA_ASTC_10x8_Format:Io,RGBA_ASTC_12x10_Format:Lo,RGBA_ASTC_12x12_Format:Do,RGBA_ASTC_4x4_Format:vo,RGBA_ASTC_5x4_Format:Mo,RGBA_ASTC_5x5_Format:So,RGBA_ASTC_6x5_Format:bo,RGBA_ASTC_6x6_Format:wo,RGBA_ASTC_8x5_Format:Ao,RGBA_ASTC_8x6_Format:Eo,RGBA_ASTC_8x8_Format:To,RGBA_BPTC_Format:vr,RGBA_ETC2_EAC_Format:yo,RGBA_PVRTC_2BPPV1_Format:go,RGBA_PVRTC_4BPPV1_Format:mo,RGBA_S3TC_DXT1_Format:_r,RGBA_S3TC_DXT3_Format:xr,RGBA_S3TC_DXT5_Format:yr,RGBDepthPacking:Am,RGBFormat:th,RGBIntegerFormat:Mm,RGB_BPTC_SIGNED_Format:Uo,RGB_BPTC_UNSIGNED_Format:No,RGB_ETC1_Format:_o,RGB_ETC2_Format:xo,RGB_PVRTC_2BPPV1_Format:po,RGB_PVRTC_4BPPV1_Format:fo,RGB_S3TC_DXT1_Format:gr,RGDepthPacking:Em,RGFormat:ih,RGIntegerFormat:Ko,RawShaderMaterial:Mp,Ray:Js,Raycaster:iS,Rec709Primaries:Pr,RectAreaLight:Bp,RedFormat:Zo,RedIntegerFormat:Xr,ReinhardToneMapping:vf,RenderTarget:Vf,RepeatWrapping:Vs,ReplaceStencilOp:Rm,ReverseSubtractEquation:tf,RingGeometry:_c,SIGNED_RED_GREEN_RGTC2_Format:Bo,SIGNED_RED_RGTC1_Format:Oo,SRGBColorSpace:je,SRGBTransfer:he,Scene:mh,ShaderChunk:Zt,ShaderLib:En,ShaderMaterial:In,ShadowMaterial:vp,Shape:ss,ShapeGeometry:xc,ShapePath:SS,ShapeUtils:kn,ShortType:Jl,Skeleton:oc,SkeletonHelper:lS,SkinnedMesh:rp,Source:ji,Sphere:ze,SphereGeometry:ds,Spherical:sS,SphericalHarmonics3:zp,SplineCurve:wh,SpotLight:Op,SpotLightHelper:cS,Sprite:ip,SpriteMaterial:gh,SrcAlphaFactor:io,SrcAlphaSaturateFactor:df,SrcColorFactor:af,StaticCopyUsage:Ym,StaticDrawUsage:Dr,StaticReadUsage:Gm,StereoCamera:NM,StreamCopyUsage:Zm,StreamDrawUsage:Vm,StreamReadUsage:Xm,StringKeyframeTrack:ps,SubtractEquation:jd,SubtractiveBlending:El,TOUCH:pm,TangentSpaceNormalMap:Ci,TetrahedronGeometry:yc,Texture:ye,TextureLoader:TM,TextureUtils:vv,TorusGeometry:vc,TorusKnotGeometry:Mc,Triangle:tn,TriangleFanDrawMode:wm,TriangleStripDrawMode:bm,TrianglesDrawMode:Sm,TubeGeometry:Sc,UVMapping:Wo,Uint16BufferAttribute:lh,Uint32BufferAttribute:hh,Uint8BufferAttribute:D0,Uint8ClampedBufferAttribute:U0,Uniform:Nh,UniformsGroup:tS,UniformsLib:gt,UniformsUtils:Xf,UnsignedByteType:Vn,UnsignedInt248Type:as,UnsignedInt5999Type:Ql,UnsignedIntType:oi,UnsignedShort4444Type:Yo,UnsignedShort5551Type:qo,UnsignedShortType:Gs,VSMShadowMap:Un,Vector2:j,Vector3:P,Vector4:te,VectorKeyframeTrack:Hr,VideoTexture:kv,WebGL3DRenderTarget:M0,WebGLArrayRenderTarget:v0,WebGLCoordinateSystem:Fn,WebGLCubeRenderTarget:qf,WebGLMultipleRenderTargets:wS,WebGLRenderTarget:Cn,WebGLRenderer:ep,WebGLUtils:jf,WebGPUCoordinateSystem:Ur,WireframeGeometry:yp,WrapAroundEnding:Cr,ZeroCurvatureEnding:Ji,ZeroFactor:sf,ZeroSlopeEnding:Qi,ZeroStencilOp:Tm,createCanvasElement:kf},Symbol.toStringTag,{value:"Module"}));function ES(s){let t=1779033703^s.length;for(let e=0;e<s.length;e++)t=Math.imul(t^s.charCodeAt(e),3432918353),t=t<<13|t>>>19;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),t^=t>>>16,t>>>0)}function TS(s){return()=>{s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class wc{constructor(t="lifesim"){this.seed=String(t),this._next=TS(ES(this.seed)()),this._children=new Map}child(t){return this._children.has(t)||this._children.set(t,new wc(`${this.seed}:${t}`)),this._children.get(t)}float(){return this._next()}range(t,e){return t+this._next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}chance(t){return this._next()<t}sign(){return this._next()<.5?-1:1}pick(t){return t[Math.floor(this._next()*t.length)]}pickMany(t,e){const n=this.shuffle([...t]);return n.slice(0,Math.min(e,n.length))}shuffle(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(this._next()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}weighted(t){const e=Array.isArray(t)?t:[...t].map(([r,a])=>({value:r,weight:a}));let n=0;for(const r of e)n+=Math.max(0,r.weight??1);if(n<=0)return e[0];let i=this._next()*n;for(const r of e)if(i-=Math.max(0,r.weight??1),i<=0)return r;return e[e.length-1]}gaussian(t=0,e=1){let n=0,i=0;for(;n===0;)n=this._next();for(;i===0;)i=this._next();return t+e*Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*i)}stat(t,e,n=0,i=100){return Math.max(n,Math.min(i,Math.round(this.gaussian(t,e))))}}const qs={glass:6453644,metal:9146777,metalDark:4870231},dn={ceiling:15525851,wall:13814974,trim:16249834,floorTimber:9072722,benchtop:12168342,tile:13622754,tileFloor:12104358,metalDull:9146777};function RS(s){const t=a=>a<=.04045?a/12.92:((a+.055)/1.055)**2.4,e=t((s>>16&255)/255),n=t((s>>8&255)/255),i=t((s&255)/255),r=.2126*e+.7152*n+.0722*i;return r>.008856?116*Math.cbrt(r)-16:903.3*r}const Pd=86,CS=new Set([dn.ceiling,dn.tile]);function IS(s,t){if(t<=2||CS.has(s))return s;const e=RS(s);if(e>Pd)throw new Error(`value plan: ${t.toFixed(1)} m2 of #${s.toString(16).padStart(6,"0")} is L* ${e.toFixed(0)}, above the ${Pd} cap for large areas`);return s}const Hs=new Map,PS=["roughness","metalness","flat","transparent","opacity","side","emissive","emissiveIntensity","vertexColors"];function ln(s,t={}){let e=String(s);for(const i of PS)t[i]!==void 0&&(e+="|"+i+"="+JSON.stringify(t[i]));if(Hs.has(e))return Hs.get(e);const n=new Ri({color:s,roughness:t.roughness??.85,metalness:t.metalness??0,flatShading:t.flat??!1,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??Hn,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,vertexColors:t.vertexColors??!1});return Hs.set(e,n),n}function Zp(s,t){if(Hs.has(s))return Hs.get(s);const e=t();return Hs.set(s,e),e}const LS=s=>{s.fragmentShader=s.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
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
    gl_FragColor.a = max( ghA, 0.80 * ghLit );`)};function Fh(s){return s.onBeforeCompile=LS,s}function DS(){return Zp("window",()=>Fh(new Ri({color:qs.glass,roughness:.1,metalness:0,transparent:!0,opacity:.28,depthWrite:!1,emissive:new xt(16767392),emissiveIntensity:0})))}function US(){return Zp("windowinner",()=>Fh(new Ri({color:qs.glass,roughness:.1,metalness:0,transparent:!0,opacity:.1,depthWrite:!1})))}new Ye(1,1,1),new us(1,1),new Pi(.5,.5,1,10),new $r(.5,1,8),new ds(.5,12,10);const NS=new Set;function Bh(s){NS.add(s)}let Kp=8,kl=null;function OS(s){kl=s,Kp=Math.min(8,s.capabilities.getMaxAnisotropy())}let FS=s=>{const t=document.createElement("canvas");return t.width=t.height=s,t};const $p=(s,t=s)=>{const e=FS(s);return e.width=s,e.height=t,e};let Jp=0;function zh(s,t){return t&&(s.colorSpace=je),s.wrapS=s.wrapT=Vs,s.anisotropy=Kp,s.generateMipmaps=!0,s.minFilter=Tn,s.magFilter=Se,Jp+=s.image.width*s.image.height*4*4/3,kl&&kl.initTexture(s),s}function Yn(s){return zh(new lc(BS(s)),!0)}function Hl(s){return s.wrapS=s.wrapT=un,s}function BS(s){const t=$p(s.w,s.h),e=t.getContext("2d"),n=e.createImageData(s.w,s.h),i=n.data,r=s.d,a=s.w*s.h;for(let o=0,c=0,l=0;o<a;o++,c+=3,l+=4){const h=r[c],u=r[c+1],d=r[c+2];i[l]=(h<0?0:h>1?1:h)*255+.5,i[l+1]=(u<0?0:u>1?1:u)*255+.5,i[l+2]=(d<0?0:d>1?1:d)*255+.5,i[l+3]=255}return e.putImageData(n,0,0),t}const be=s=>s<0?0:s>1?1:s,Gn=s=>[(s>>16&255)/255,(s>>8&255)/255,(s&255)/255];function zS(s){const[t,e,n]=s,i=Math.max(t,e,n),r=Math.min(t,e,n),a=(i+r)/2;if(i===r)return[0,0,a];const o=i-r,c=a>.5?o/(2-i-r):o/(i+r);let l;return i===t?l=((e-n)/o+(e<n?6:0))/6:i===e?l=((n-t)/o+2)/6:l=((t-e)/o+4)/6,[l,c,a]}function kS(s,t,e){if(t===0)return[e,e,e];const n=e<.5?e*(1+t):e+t-e*t,i=2*e-n,r=a=>(a=(a%1+1)%1,a<1/6?i+(n-i)*6*a:a<1/2?n:a<2/3?i+(n-i)*(2/3-a)*6:i);return[r(s+1/3),r(s),r(s-1/3)]}function Bn(s,t=1,e=0,n=1){const[i,r,a]=zS(Array.isArray(s)?s:Gn(s));return kS(i+e/360,be(r*n),be(a*t))}function qn(s,t){return{w:s,h:t,d:new Float32Array(s*t*3)}}function ms(s,t){const e=Array.isArray(t)?t:Gn(t),n=s.d;for(let i=0;i<n.length;i+=3)n[i]=e[0],n[i+1]=e[1],n[i+2]=e[2]}function kh(s,t,e,n,i){if(i<=0)return;const r=s.w,a=s.h;let o=t,c=e;(o<0||o>=r)&&(o=(o%r+r)%r),(c<0||c>=a)&&(c=(c%a+a)%a);const l=(c*r+o)*3,h=s.d,u=1-i;h[l]=h[l]*u+n[0]*i,h[l+1]=h[l+1]*u+n[1]*i,h[l+2]=h[l+2]*u+n[2]*i}function xn(s,t,e,n,i,r,a=1){const o=Array.isArray(r)?r:Gn(r),c=Math.round(t),l=Math.round(n),h=Math.round(e),u=Math.round(i);if(a<1){for(let _=h;_<u;_++)for(let g=c;g<l;g++)kh(s,g,_,o,a);return}const d=s.w,f=s.h,p=s.d;for(let _=h;_<u;_++){let g=_;(g<0||g>=f)&&(g=(g%f+f)%f);const m=g*d;for(let y=c;y<l;y++){let x=y;(x<0||x>=d)&&(x=(x%d+d)%d);const M=(m+x)*3;p[M]=o[0],p[M+1]=o[1],p[M+2]=o[2]}}}function ta(s,t,e,n,i,r=1){const a=n+1;for(let o=Math.floor(e-a);o<=Math.ceil(e+a);o++)for(let c=Math.floor(t-a);c<=Math.ceil(t+a);c++){const l=c+.5-t,h=o+.5-e,u=be(n-Math.sqrt(l*l+h*h)+.5);u>0&&kh(s,c,o,i,r*u)}}function Vl(s,t,e,n,i=1){const r=Math.max(1,e)/2;for(let a=1;a<t.length;a++){const[o,c]=t[a-1],[l,h]=t[a],u=Math.hypot(l-o,h-c),d=Math.max(1,Math.ceil(u));for(let f=0;f<=d;f++){const p=f/d;ta(s,o+(l-o)*p,c+(h-c)*p,r,n,i)}}}function Qp(s,t,e,n,i,r,a,o){const c=s.w,l=s.h,h=s.d,u=r/2,d=a[0],f=a[1],p=a[2],_=Math.PI*2/n;for(let g=0;g<l;g++){const m=g*c,y=t+e*Math.sin(g*_+i),x=y-u,M=y+u,R=Math.floor(x),A=Math.ceil(M);for(let w=R;w<=A;w++){const C=be(Math.min(w+1,M)-Math.max(w,x));if(C<=0)continue;const B=o*C,v=1-B;let b=w;(b<0||b>=c)&&(b=(b%c+c)%c);const N=(m+b)*3;h[N]=h[N]*v+d*B,h[N+1]=h[N+1]*v+f*B,h[N+2]=h[N+2]*v+p*B}}}const Ld=s=>s*s*(3-2*s);function HS(s,t,e){const n=new Float32Array(t*e);for(let i=0;i<n.length;i++)n[i]=s.float();return n}const Dd=256;function Pn(s,t,e={}){const{p0:n=32,octaves:i=4,gain:r=.5,lacunarity:a=2,h:o=t}=e,c=e.p0x??n,l=e.p0y??n,h=new Float32Array(t*o),u=[];let d=1,f=0;for(let R=0;R<i;R++){const A=Math.min(Dd,Math.max(1,Math.round(c*a**R))),w=Math.min(Dd,Math.max(1,Math.round(l*a**R)));u.push({lat:HS(s,A,w),px:A,py:w,amp:d}),f+=d,d*=r}const p=new Float64Array(t*o),_=new Int32Array(t),g=new Int32Array(t),m=new Float64Array(t);for(let R=0;R<u.length;R++){const A=u[R],w=A.lat,C=A.px,B=A.py,v=A.amp,b=C/t,N=B/o;for(let L=0;L<t;L++){const D=L*b,G=D|0,O=G>=C?G%C:G;_[L]=O,g[L]=O+1>=C?0:O+1,m[L]=Ld(D-G)}for(let L=0;L<o;L++){const D=L*N,G=D|0,O=Ld(D-G),W=1-O,V=G>=B?G%B:G,nt=V*C,at=(V+1>=B?0:V+1)*C,dt=L*t;for(let Ft=0;Ft<t;Ft++){const qt=_[Ft],K=g[Ft],U=m[Ft],ot=w[nt+qt],tt=w[nt+K],_t=w[at+qt],pt=w[at+K];p[dt+Ft]+=v*((ot+(tt-ot)*U)*W+(_t+(pt-_t)*U)*O)}}}let y=1/0,x=-1/0;for(let R=0;R<h.length;R++){h[R]=p[R]/f;const A=h[R];A<y&&(y=A),A>x&&(x=A)}const M=x-y||1;for(let R=0;R<h.length;R++)h[R]=(h[R]-y)/M;return h}function jp(s,t,e,n){const i=new Float32Array(t*e),r=new Float32Array(t*e),a=2*n+1,o=new Int32Array(t),c=new Int32Array(t);for(let u=0;u<t;u++)o[u]=((u-n)%t+t)%t,c[u]=(u+n+1)%t;for(let u=0;u<e;u++){const d=u*t;let f=0;for(let p=-n;p<=n;p++)f+=s[d+(p%t+t)%t];for(let p=0;p<t;p++)i[d+p]=f/a,f-=s[d+o[p]],f+=s[d+c[p]]}const l=new Int32Array(e),h=new Int32Array(e);for(let u=0;u<e;u++)l[u]=((u-n)%e+e)%e*t,h[u]=(u+n+1)%e*t;for(let u=0;u<t;u++){let d=0;for(let f=-n;f<=n;f++)d+=i[(f%e+e)%e*t+u];for(let f=0;f<e;f++)r[f*t+u]=d/a,d-=i[l[f]+u],d+=i[h[f]+u]}return r}function VS(s,t,e=1.5,n=null){const i=n??s.length/t,r=new Uint8Array(t*i*4),a=e/8,o=new Int32Array(t),c=new Int32Array(t);for(let l=0;l<t;l++)o[l]=(l-1+t)%t,c[l]=(l+1)%t;for(let l=0;l<i;l++){const h=(l-1+i)%i*t,u=l*t,d=(l+1)%i*t;let f=u*4;for(let p=0;p<t;p++,f+=4){const _=o[p],g=c[p],m=s[h+_],y=s[h+p],x=s[h+g],M=s[u+_],R=s[u+g],A=s[d+_],w=s[d+p],C=s[d+g],B=x+2*R+C-(m+2*M+A),v=A+2*w+C-(m+2*y+x),b=-B*a,N=v*a,L=1/Math.sqrt(b*b+N*N+1);r[f]=(b*L*.5+.5)*255+.5,r[f+1]=(N*L*.5+.5)*255+.5,r[f+2]=(L*.5+.5)*255+.5,r[f+3]=255}}return r}function ea(s,t,e=1.5,n=null){const i=n??s.length/t;return zh(new lc(tm(VS(s,t,e,i),t,i)),!1)}function tm(s,t,e){const n=$p(t,e),i=n.getContext("2d"),r=i.createImageData(t,e);return r.data.set(s),i.putImageData(r,0,0),n}function GS(s,t,e,n,i=null){const a=s*(i??s),o=new Uint8Array(a*4);for(let c=0,l=0;c<a;c++,l+=4){const h=t?t[c]:1,u=e?e[c]:.85,d=n?n[c]:0;o[l]=(h<0?0:h>1?1:h)*255+.5,o[l+1]=(u<0?0:u>1?1:u)*255+.5,o[l+2]=(d<0?0:d>1?1:d)*255+.5,o[l+3]=255}return o}function yn(s,t,e,n,i=null){const r=i??s;return zh(new lc(tm(GS(s,t,e,n,r),s,r)),!1)}const Hh={},wr=new Map;let em=null;function Ze(s,t){Hh[s]=t}const WS=s=>{const t=Object.keys(s).sort();return t.length?t.map(e=>e+"="+JSON.stringify(s[e])).join(","):""};function XS(s,t=null,e={}){const n=Hh[s];if(!n)throw new Error(`Textures: no recipe named '${s}'`);const i=WS(e),r=i?s+"#"+i:s;if(wr.has(r))return wr.get(r);const a=t||(em||new wc("textures")).child("tex."+r),o=n(a,e);return o.name=s,wr.set(r,o),o}function YS(){var s,t;for(const e of wr.values()){for(const n of["map","normalMap","ormMap"])(t=(s=e[n])==null?void 0:s.dispose)==null||t.call(s);if(e.maps)for(const n of e.maps)n.dispose()}wr.clear(),Jp=0,em=null}Bh(YS);const Ml={blackbutt:{base:13214581,dark:10122054,rough:.4},spottedGum:{base:11040332,dark:8015662,rough:.38},jarrah:{base:9061685,dark:6040352,rough:.44},tasOak:{base:14072722,dark:11111779,rough:.42},pine:{base:14467213,dark:11571294,rough:.5}};Ze("timberFloor",(s,t={})=>{const a=1.9500000000000002,o=1024/a,c=1024/15,l=Math.max(2,Math.round(.004*o)),h=t.species||s.pick(Object.keys(Ml)),u=Ml[h]||Ml.blackbutt,d=qn(1024,1024);ms(d,Bn(u.dark,.72));const f=Gn(u.dark),p=Bn(u.base,1.25),_=[];for(let A=0;A<15;A++){const w=A*c+l/2,C=(A+1)*c-l/2,B=Bn(u.base,1+s.range(-.06,.06),s.range(-3,3));xn(d,w,0,C,1024,B);const v=Math.round(s.range(.15,.85)*1024);_.push(v),xn(d,w,v,C,v+2,Bn(u.dark,.8),.85),xn(d,w,v-2,C,v,p,.25);const b=s.int(28,60);for(let N=0;N<b;N++){const L=s.range(w+1,C-1),D=s.range(1.5,4),G=1024/s.int(2,5),O=s.range(0,Math.PI*2),W=s.range(2,3),V=s.range(.04,.12),nt=s.chance(.25)?p:f;Qp(d,L,D,G,O,W,nt,V)}if(s.chance(.2)){const N=s.range(204.8,819.2),L=s.range(60,160),D=s.range(w+4,C-4);for(let G=0;G<s.int(2,4);G++){const O=(G+1)*s.range(3,7),W=[];for(let V=0;V<=16;V++){const nt=V/16;W.push([D+(nt-.5)*2*O,N-L*(1-(nt-.5)**2*4)])}Vl(d,W,2,f,.06)}}}const g=Pn(s,512,{p0:64,octaves:3}),m=new Float32Array(512*512),y=new Float32Array(512*512),x=new Float32Array(512*512),M=512/15,R=l*512/1024;for(let A=0;A<512;A++)for(let w=0;w<512;w++){const C=A*512+w,B=Math.floor(w/M),v=w-B*M,b=v<R/2||v>M-R/2,N=A*1024/512,L=_[B],D=N>=L-1&&N<=L+2,G=b||D;y[C]=G?.15:.75,m[C]=be(u.rough+(G?.1:0)+(g[C]-.5)*.1),x[C]=G?.72:1}return{map:Yn(d),normalMap:ea(jp(y,512,512,1),512,1.2),ormMap:yn(512,x,m,null),uvScale:[a,a],normalScale:.5,species:h,tinted:!1}});Ze("plasterWall",(s,t={})=>{const i=t.rough??.88,r=Pn(s,256,{p0:64,octaves:3,gain:.45}),a=new Float32Array(256*256),o=.4*256/2;for(let c=0;c<256;c++)for(let l=0;l<256;l++){const h=c*256+l;let u=i+(r[h]**1.5-.5)*.1;t.ceiling||(u+=Math.cos(l/o*Math.PI*2)*.02),a[h]=be(u)}return{ormMap:yn(256,null,a,null),uvScale:[2,2],normalScale:0,tinted:!0}});Ze("plasterCeiling",s=>Hh.plasterWall(s,{rough:.93,ceiling:!0}));Ze("paintedJoinery",s=>{const n=Pn(s,256,{p0:64,octaves:3}),i=new Float32Array(256*256);for(let r=0;r<256;r++)for(let a=0;a<256;a++){const o=r*256+a;i[o]=be(.42+(n[o]-.5)*.06+Math.sin(a/256*Math.PI*2*12)*.015)}return{ormMap:yn(256,null,i,null),uvScale:[1,1],normalScale:0,tinted:!0}});Ze("carpetPile",s=>{const n=qn(512,512);ms(n,[1,1,1]);const i=Pn(s,512,{p0x:64,p0y:192,octaves:3,gain:.5}),r=n.d;for(let c=0;c<512;c++)for(let l=0;l<512;l++){const h=c*512+l,u=Math.cos(c/256*Math.PI*2)*.03,d=be(.9+(i[h]-.5)*.16+u);r[h*3]=d,r[h*3+1]=d,r[h*3+2]=d}for(let c=0;c<1200;c++){const l=s.pick([[1.1,0],[.78,8],[.92,-10]]),h=Bn(16777215,l[0],l[1],1);if(l[1]!==0){const u=s.range(0,1);h[0]=h[0]*(.94+u*.12),h[2]=h[2]*(1.06-u*.12)}ta(n,s.range(0,512),s.range(0,512),s.range(1,2),h,.25)}const a=Pn(s,512,{p0x:43,p0y:128,octaves:3}),o=new Float32Array(512*512);for(let c=0;c<o.length;c++)o[c]=be(.92+(a[c]-.5)*.06);return{map:Yn(n),normalMap:ea(a,512,.6),ormMap:yn(512,null,o,null),uvScale:[1,1],normalScale:.7,tinted:!0}});Ze("ceramicTile",(s,t={})=>{const n=t.tile??.3,i=2,r=n*i,a=Math.max(2,Math.round(.003*512/r)),o=3,c=512/i,l=Gn(12104358),h=[];for(let g=0;g<i*i;g++)h.push({c:Bn(14473423,1+s.range(-.03,.03),s.range(-2,2)),g:s.range(-1,1)});const u=qn(512,512),d=new Float32Array(512*512),f=new Float32Array(512*512),p=new Float32Array(512*512),_=a/2;for(let g=0;g<512;g++)for(let m=0;m<512;m++){const y=g*512+m,x=Math.floor(m/c),M=Math.floor(g/c),R=m-x*c,A=g-M*c,w=Math.min(R,c-R,A,c-A);if(w<_){u.d[y*3]=l[0],u.d[y*3+1]=l[1],u.d[y*3+2]=l[2],d[y]=.85,f[y]=.25,p[y]=.62;continue}const C=h[M*i+x],B=(R/c+A/c)/2,v=1.03-.06*(C.g>0?B:1-B);u.d[y*3]=be(C.c[0]*v),u.d[y*3+1]=be(C.c[1]*v),u.d[y*3+2]=be(C.c[2]*v),d[y]=.08;const b=be((w-_)/o);f[y]=.25+.75*b,p[y]=.62+.38*b}return{map:Yn(u),normalMap:ea(f,512,2),ormMap:yn(512,p,d,null),uvScale:[r,r],normalScale:.8,tinted:!1}});Ze("fabricWeave",s=>{const n=qn(256,256),i=new Float32Array(256*256),r=new Float32Array(256*256),a=128,o=new Float32Array(a*8),c=new Float32Array(a*8);for(let h=0;h<o.length;h++)o[h]=s.range(-.035,.035);for(let h=0;h<c.length;h++)c[h]=s.range(-.035,.035);const l=Pn(s,256,{p0:64,octaves:2});for(let h=0;h<256;h++)for(let u=0;u<256;u++){const d=h*256+u,f=(u>>1&1^h>>1&1)===0,p=u>>1,_=h>>1,g=f?o[(p*8+(h>>5&7))%o.length]:c[(_*8+(u>>5&7))%c.length],m=be((f?1.06:.94)+g+(l[d]-.5)*.06);n.d[d*3]=m,n.d[d*3+1]=m,n.d[d*3+2]=m,i[d]=f?.66:.8,r[d]=f?1:.3}return{map:Yn(n),normalMap:ea(jp(r,256,256,1),256,.8),ormMap:yn(256,null,i,null),uvScale:[.25,.25],normalScale:.6,tinted:!0}});Ze("joineryTimber",s=>{const n=qn(512,512);ms(n,[1,1,1]);const i=Pn(s,512,{p0x:48,p0y:8,octaves:4}),r=n.d;for(let c=0;c<512*512;c++){const l=be(.94+(i[c]-.5)*.22);r[c*3]=l,r[c*3+1]=l,r[c*3+2]=l}const a=Bn(16777215,.72);for(let c=0;c<220;c++){const l=s.range(0,512),h=s.range(2,6),u=512/s.int(1,2),d=s.range(0,Math.PI*2);Qp(n,l,h,u,d,s.range(2,3.5),a,s.range(.03,.09))}const o=new Float32Array(512*512);for(let c=0;c<o.length;c++)o[c]=be(.55+(i[c]-.5)*.08);return{map:Yn(n),ormMap:yn(512,null,o,null),uvScale:[1,1],normalScale:0,tinted:!0}});Ze("vinylSheet",s=>{const n=qn(512,512);ms(n,14209732);const i=[13222578,15131093,11906460,14472902].map(Gn);for(let c=0;c<3e3;c++)ta(n,s.range(0,512),s.range(0,512),s.range(1,3),s.pick(i),.35);const r=Pn(s,512,{p0:32,octaves:3}),a=new Float32Array(512*512);for(let c=0;c<a.length;c++)a[c]=be(.28+(r[c]-.5)*.12);const o={w:512,h:512,d:new Float32Array(512*512*3)};for(let c=0;c<12;c++){const l=s.range(0,512),h=s.range(0,512),u=s.range(40,120),d=s.range(0,Math.PI*2),f=s.range(.6,2.2),p=[];for(let _=0;_<=24;_++){const g=d+f*(_/24);p.push([l+Math.cos(g)*u,h+Math.sin(g)*u])}Vl(n,p,s.range(2,4),Bn(14209732,.88),.3),Vl(o,p,s.range(2,4),[1,1,1],1)}for(let c=0;c<a.length;c++)a[c]=be(a[c]+o.d[c*3]*.15);return{map:Yn(n),ormMap:yn(512,null,a,null),uvScale:[1,1],normalScale:0,tinted:!1}});Ze("laminateBench",s=>{const i=qn(512,512);ms(i,dn.benchtop);const r=[9274743,14077886,7235417].map(Gn);for(let l=0;l<2e3;l++)ta(i,s.range(0,512),s.range(0,512),s.range(1,2.5),s.pick(r),.3);const a=new Float32Array(512*512);for(let l=0;l<a.length;l++)a[l]=.28;const o=Math.max(2,Math.round(.006*512/.6)),c=Bn(dn.benchtop,.82);for(let l=0;l<512;l++)if(Math.min(l,512-l)<o)for(let u=0;u<512;u++)kh(i,u,l,c,.85),a[l*512+u]=.45;return{map:Yn(i),ormMap:yn(512,null,a,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});Ze("ceilingGrid",s=>{const i=qn(512,512);ms(i,15526370);const r=Math.max(2,Math.round(.015*512/1.2)),a=Math.max(2,Math.round(.015*512/.6)),o=Gn(14210509),c=Gn(12434098),l=Pn(s,512,{p0:64,octaves:2}),h=new Float32Array(512*512);for(let u=0;u<512;u++)for(let d=0;d<512;d++){const f=u*512+d,p=Math.min(d,512-d),_=Math.min(u,512-u);if(p<r/2||_<a/2){const y=p>=r/2-2&&p<r/2||_>=a/2-2&&_<a/2?c:o;i.d[f*3]=y[0],i.d[f*3+1]=y[1],i.d[f*3+2]=y[2],h[f]=.55}else{const m=1+(l[f]-.5)*.04;i.d[f*3]*=m,i.d[f*3+1]*=m,i.d[f*3+2]*=m,h[f]=.9}}return{map:Yn(i),ormMap:yn(512,null,h,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});Ze("applianceEnamel",s=>{const n=Pn(s,256,{p0:64,octaves:3}),i=new Float32Array(256*256);for(let r=0;r<i.length;r++)i[r]=be(.3+(n[r]-.5)*.04);return{ormMap:yn(256,null,i,null),uvScale:[1,1],normalScale:0,tinted:!0}});Ze("metalBrushed",s=>{const n=new Float32Array(65536),i=new Float32Array(256*256),r=Pn(s,256,{p0x:8,p0y:256,octaves:2});for(let a=0;a<256;a++){const o=s.range(-.1,.1);for(let c=0;c<256;c++){const l=a*256+c;n[l]=be(.35+o*.6+(r[l]-.5)*.1)}}return{ormMap:yn(256,null,n,i),uvScale:[.4,.4],normalScale:0,tinted:!0}});Ze("quiltFolds",s=>{const n=[],i=s.int(5,9);for(let d=0;d<i;d++)n.push({a:s.range(.4,1),c:s.range(.05,.95),w:s.range(.06,.14)});const r=d=>{let f=0;for(const p of n)f+=p.a*Math.exp(-(((d-p.c)/p.w)**2));return f+=.5*Math.exp(-((d/.04)**2))+.5*Math.exp(-(((1-d)/.04)**2)),f};let a=1/0,o=-1/0;for(let d=0;d<=256;d++){const f=r(d/256);f<a&&(a=f),f>o&&(o=f)}const c=o-a||1,l=d=>(r(be(d))-a)/c,h=qn(512,256),u=new Float32Array(512*256);for(let d=0;d<512;d++){const f=l(d/511),p=.9+.1*f;for(let _=0;_<256;_++){const g=_*512+d;h.d[g*3]=p,h.d[g*3+1]=p,h.d[g*3+2]=p,u[g]=f}}return{map:Hl(Yn(h)),normalMap:Hl(ea(u,512,3,256)),uvScale:null,normalScale:1,field:l,folds:n,tinted:!0}});Ze("pictureArt",s=>{const n=[[14272936,10251087,4148050,15130057],[8361635,14213090,3095106,12820586],[11056266,15196880,6056775,9067068],[13609376,8015698,15722204,3814198],[9415096,15788760,4479587,12153919]],i=[];for(let r=0;r<5;r++){const a=n[r].map(Gn),o=qn(256,256);ms(o,a[s.int(0,3)]);const c=s.int(0,2);if(c===0){let h=0;for(;h<256;){const u=s.int(12,48);xn(o,0,h,256,Math.min(256,h+u),a[s.int(0,3)],s.range(.5,1)),h+=u}}else if(c===1)for(let h=0;h<s.int(5,11);h++){const u=s.range(0,179.2),d=s.range(0,256*.7);xn(o,u,d,u+s.range(30,110),d+s.range(30,110),a[s.int(0,3)],s.range(.55,.95))}else{const h=s.range(115.2,174.08);xn(o,0,0,256,h,a[0],1),xn(o,0,h,256,256,a[2],1);for(let u=0;u<s.int(3,7);u++){const d=s.range(h-40,h+40);xn(o,0,d,256,d+s.range(3,10),a[s.int(0,3)],s.range(.3,.7))}ta(o,s.range(256*.2,256*.8),s.range(20,h-20),s.range(12,26),a[3],.9)}const l=Bn(16777215,.97);xn(o,0,0,256,6,l),xn(o,0,250,256,256,l),xn(o,0,0,6,256,l),xn(o,250,0,256,256,l),i.push(Hl(Yn(o)))}return{maps:i,map:i[0],uvScale:null,normalScale:0,prints:5,tinted:!1}});const qS={wall:{recipe:"plasterWall",r:1,m:0,cast:!0,tint:!0},wallWet:{recipe:"ceramicTile",r:1,m:0,cast:!0,tint:!1},ceiling:{recipe:"plasterCeiling",r:1,m:0,cast:!1,tint:!0},trim:{recipe:"paintedJoinery",r:1,m:0,cast:!0,tint:!0},doorLeaf:{recipe:"paintedJoinery",r:1,m:0,cast:!0,tint:!0},floorTimber:{recipe:"timberFloor",r:1,m:0,cast:!1,tint:!1},carpet:{recipe:"carpetPile",r:1,m:0,cast:!1,tint:!0},vinyl:{recipe:"vinylSheet",r:1,m:0,cast:!1,tint:!1},tile:{recipe:"ceramicTile",r:1,m:0,cast:!1,tint:!1},joinery:{recipe:"joineryTimber",r:1,m:0,cast:!0,tint:!0},fabric:{recipe:"fabricWeave",r:1,m:0,cast:!0,tint:!0},bedding:{recipe:"fabricWeave",r:1,m:0,cast:!0,tint:!0},bench:{recipe:"laminateBench",r:1,m:0,cast:!0,tint:!1},appliance:{recipe:"applianceEnamel",r:1,m:0,cast:!0,tint:!0},metal:{recipe:"metalBrushed",r:1,m:1,cast:!0,tint:!0},chrome:{recipe:null,r:.18,m:0,cast:!0,tint:!1},ceramic:{recipe:null,r:.12,m:0,cast:!0,tint:!1},screen:{recipe:null,r:.08,m:0,cast:!1,tint:!1},glass:{recipe:null,r:.1,m:0,cast:!1,tint:!1,alpha:.28},ceilingGrid:{recipe:"ceilingGrid",r:1,m:0,cast:!1,tint:!1},quilt:{recipe:"quiltFolds",r:.8,m:0,cast:!0,tint:!0},artwork:{recipe:"pictureArt",r:.55,m:0,cast:!1,tint:!1}},zs=new Map;function vi(s,t=16777215,e=null,n={}){const i=qS[s];if(!i)throw new Error(`Surfaces: no surface named '${s}'`);const r=Object.keys(n).sort().map(h=>h+"="+JSON.stringify(n[h])).join(","),a=s+"|"+t+"|"+r;if(zs.has(a))return zs.get(a);const o={color:t,roughness:i.r,metalness:i.m,vertexColors:!0};i.alpha!==void 0&&(o.transparent=!0,o.opacity=i.alpha,o.depthWrite=!1);const c=h=>i.alpha!==void 0?Fh(h):h;if(i.recipe){const{print:h,...u}=n,d=Object.keys(u).sort().map(m=>m+"="+JSON.stringify(u[m])).join(","),f=e?e.child("tex."+i.recipe+(d?"#"+d:"")):null,p=XS(i.recipe,f,u),_=p.maps?p.maps[Math.min(p.maps.length-1,h??0)]:p.map;if(_&&(o.map=_),p.normalMap){o.normalMap=p.normalMap;const m=p.normalScale??1;o.normalScale=new j(m,m)}p.ormMap?(o.aoMap=p.ormMap,o.roughnessMap=p.ormMap,o.aoMapIntensity=1,o.roughness=1,i.m===1&&(o.metalnessMap=p.ormMap,o.metalness=1)):o.roughness=i.r===1?.85:i.r;const g=c(new Ri(o));return p.uvScale&&(g.userData.uvScale=p.uvScale),g.userData.cast=i.cast,g.userData.surface=s,zs.set(a,g),g}const l=c(new Ri(o));return l.userData.cast=i.cast,l.userData.surface=s,zs.set(a,l),l}function ZS(){for(const s of zs.values())s.dispose();zs.clear()}Bh(ZS);const Vt={wallThick:.17,storey:2.65,cornice:.09,doorH:2.05,winSill:.95,winHead:2.15,extWall:.25,skirtProud:.018,archW:.09,archProud:.018,archQuirk:.006,corniceGirth:.075,reveal:.019,skirtCommercial:.1,leafT:.035,switchH:1.05,gpoH:.3},wn={thin:.002,furniture:.003,joinery:.005},Ud=new Set;function Gl(s,t,e={}){if(e.material)return e.material;try{return vi(s,t,null,e.recipe||{})}catch(n){Ud.has(s)||(Ud.add(s),console.error(`RoomKit: surface '${s}' unavailable, falling back to flat colour`,n))}return ln(t,e)}function ce(s,t,e,n,i,r={}){var l;const a=Gl(s,i,r),o=r.chamfer?KS(t,e,n,r.chamfer):r.graded?$S(t,e,n,r.gradeEdge):new Ye(Math.max(t,.001),Math.max(e,.001),Math.max(n,.001)),c=new se(o,a);return c.castShadow=r.cast??((l=a.userData)==null?void 0:l.cast)??!1,c.receiveShadow=!0,c}const Zs=new Map,wi=s=>Math.round(s*1e3);function nm(s,t,e){const n=new Float32Array(e*2);for(let i=0;i<e;i++){const r=i*3,a=Math.abs(t[r]),o=Math.abs(t[r+1]),c=Math.abs(t[r+2]);o>=a&&o>=c?(n[i*2]=s[r],n[i*2+1]=s[r+2]):a>=c?(n[i*2]=s[r+2],n[i*2+1]=s[r+1]):(n[i*2]=s[r],n[i*2+1]=s[r+1])}return n}function im(s){const t=s.length*3,e=new Float32Array(t*3),n=new Float32Array(t*3);let i=0;for(const a of s){const[o,c,l]=a;let h=c[0]-o[0],u=c[1]-o[1],d=c[2]-o[2],f=l[0]-o[0],p=l[1]-o[1],_=l[2]-o[2],g=u*_-d*p,m=d*f-h*_,y=h*p-u*f;const x=(o[0]+c[0]+l[0])/3,M=(o[1]+c[1]+l[1])/3,R=(o[2]+c[2]+l[2])/3;let A=c,w=l;g*x+m*M+y*R<0&&(A=l,w=c,g=-g,m=-m,y=-y);const C=Math.hypot(g,m,y)||1;g/=C,m/=C,y/=C;for(const B of[o,A,w])e[i*3]=B[0],e[i*3+1]=B[1],e[i*3+2]=B[2],n[i*3]=g,n[i*3+1]=m,n[i*3+2]=y,i++}const r=new Wt;return r.setAttribute("position",new Kt(e,3)),r.setAttribute("normal",new Kt(n,3)),r.setAttribute("uv",new Kt(nm(e,n,t),2)),r.setAttribute("color",new Kt(new Float32Array(t*3).fill(1),3)),r}function KS(s,t,e,n=wn.furniture){s=Math.max(s,.001),t=Math.max(t,.001),e=Math.max(e,.001);const i=Math.min(n,Math.min(s,t,e)/2-5e-4);if(!(i>2e-4))return new Ye(s,t,e);const r=`c${wi(s)},${wi(t)},${wi(e)},${wi(i)}`,a=Zs.get(r);if(a)return a;const o=s/2,c=t/2,l=e/2,h=[o-i,c-i,l-i],u=[o,c,l],d=(m,y)=>[(y===0?u[0]:h[0])*m[0],(y===1?u[1]:h[1])*m[1],(y===2?u[2]:h[2])*m[2]],f=[];for(const m of[-1,1])for(const y of[-1,1])for(const x of[-1,1])f.push([m,y,x]);const p=[],_=(m,y,x,M)=>{p.push([m,y,x]),p.push([m,x,M])};for(let m=0;m<3;m++){const y=(m+1)%3,x=(m+2)%3;for(const M of[-1,1]){const R=(A,w)=>{const C=[0,0,0];return C[m]=M,C[y]=A,C[x]=w,d(C,m)};_(R(-1,-1),R(1,-1),R(1,1),R(-1,1))}}for(let m=0;m<3;m++)for(let y=m+1;y<3;y++){const x=3-m-y;for(const M of[-1,1])for(const R of[-1,1]){const A=[0,0,0];A[m]=M,A[y]=R,A[x]=-1;const w=[0,0,0];w[m]=M,w[y]=R,w[x]=1,_(d(A,m),d(A,y),d(w,y),d(w,m))}}for(const m of f)p.push([d(m,0),d(m,1),d(m,2)]);const g=im(p);return Zs.set(r,g),g}const Ka=[0,.05,.18,.55];function Nd(s,t=.12){const e=t/.12,n=[0];for(let i=1;i<Ka.length;i++){const r=Ka[i]*e;r<s/2-1e-4&&n.push(r)}n.push(s/2);for(let i=Ka.length-1;i>=1;i--){const r=s-Ka[i]*e;r>s/2+1e-4&&n.push(r)}return n.push(s),n}function Od(s,t,e,n,i,r){const a=(o,c)=>[t[0]+e[0]*o+n[0]*c,t[1]+e[1]*o+n[1]*c,t[2]+e[2]*o+n[2]*c];for(let o=0;o<i.length-1;o++)for(let c=0;c<r.length-1;c++){const l=a(i[o],r[c]),h=a(i[o+1],r[c]),u=a(i[o+1],r[c+1]),d=a(i[o],r[c+1]);s.push([l,h,u]),s.push([l,u,d])}}function $S(s,t,e,n=.12){const i=`g${wi(s)},${wi(t)},${wi(e)},${wi(n)}`,r=Zs.get(i);if(r)return r;const a=e<=s&&e<=t?2:t<=s?1:0,[o,c,l]=a===2?[s,t,e]:a===1?[s,e,t]:[e,t,s],h=o/2,u=c/2,d=l/2,f=Nd(o,n),p=Nd(c,n),_=[];Od(_,[-h,-u,d],[1,0,0],[0,1,0],f,p),Od(_,[-h,-u,-d],[1,0,0],[0,1,0],f,p);const g=(y,x,M,R)=>{_.push([y,x,M]),_.push([y,M,R])};g([h,-u,-d],[h,u,-d],[h,u,d],[h,-u,d]),g([-h,-u,-d],[-h,u,-d],[-h,u,d],[-h,-u,d]),g([-h,u,-d],[h,u,-d],[h,u,d],[-h,u,d]),g([-h,-u,-d],[h,-u,-d],[h,-u,d],[-h,-u,d]);const m=im(_);if(a===1?m.rotateX(-Math.PI/2):a===0&&m.rotateY(Math.PI/2),a!==2){const y=m.attributes.position.array,x=m.attributes.normal.array;m.setAttribute("uv",new Kt(nm(y,x,m.attributes.position.count),2))}return Zs.set(i,m),m}Bh(()=>{for(const s of Zs.values())s.dispose();Zs.clear()});class JS{constructor(){this.group=new Rn,this.colliders=[],this.doors=[],this.interactables=[],this.spots={},this.lights=[],this.faces={},this.decals=[]}add(t){return this.group.add(t),t}solid(t,e,n,i,r,a,o=!1){this.colliders.push({min:new P(t-i/2,e,n-a/2),max:new P(t+i/2,e+r,n+a/2),walkable:o})}spot(t,e,n,i){return this.spots[t]=new P(e,n,i),this.spots[t]}interact(t,e,n,i,r,a,o={},c=1.8){this.interactables.push({id:t,label:e,pos:new P(n,i,r),action:a,data:o,radius:c})}light(t,e,n,i=16770756,r=9,a=13){const o=new Ih(i,r,a,2);return o.position.set(t,e,n),this.group.add(o),this.lights.push(o),o}}function QS(s,t,e,n,i,r,a=dn.floorTimber,o={}){const c=o.thickness??.16,l=ce(o.surface??"floorTimber",n,c,i,a,{graded:!0,gradeEdge:o.gradeEdge??.12,cast:!1});return l.position.set(t,r-c/2,e),s.add(l),s.solid(t,r-c,e,n,c,i,!0),l}function jS(s,t,e,n,i,r,a=dn.ceiling,o={}){const c=o.thickness??Vt.cornice,l=ce(o.surface??"ceiling",n,c,i,a,{graded:!0,gradeEdge:o.gradeEdge??.12,cast:!1});return l.position.set(t,r+c/2,e),s.add(l),l}function tb(s,t,e,n,i=0,r={}){const a=ce("trim",.075,.115,.01,r.colour??dn.trim,{});a.position.set(t,e,n),a.rotation.y=i,s.add(a);const o=ce("trim",.03,.055,.004,r.colour??dn.trim,{});return o.rotation.y=i,o.position.set(t,e,n),o.translateZ(.007),s.add(o),a}function eb(s,t,e,n,i=0,r={}){const a=ce("trim",.115,.075,.01,r.colour??dn.trim,{});return a.position.set(t,e,n),a.rotation.y=i,s.add(a),a}new Be;function nb(s,t,e,n){if(s.door===!1||s.leaf===!1||s.door===void 0&&s.leaf===void 0&&t<=1.005)return null;const i=s.door||{},r=t>=1.25,a=i.style??(s.leaf?"panel":r?"glazed":"panel");return{label:i.label??"door",style:a,pair:i.pair??r,auto:i.auto??!1,startsShut:i.startsShut??!0,face:i.swing??n,colour:i.colour??s.leaf??(a==="glazed"?qs.metal:e),surfaceName:i.surface??s.leafSurface??"doorLeaf",triggerR:i.triggerR,dwell:i.dwell,leaves:[]}}function $a(s,t,e,n,i,r={}){const{y0:a=0,height:o=Vt.storey,thickness:c=Vt.wallThick,colour:l=dn.wall,innerColour:h=null,outerColour:u=null,openings:d=[],skirting:f=!0,skirtStyle:p="timber",cornice:_=!0,corniceStyle:g="cove",autoServices:m=!0,inner:y=null,surface:x="wall",trimColour:M=dn.trim,graded:R=!0,name:A=null}=r,w=h??u,C=n-t,B=i-e,v=Math.hypot(C,B);if(v<.01)return;const b=C/v,N=B/v,L=Math.atan2(-N,b),D=-N,G=b,O=c/2,W=(U,ot,tt,_t=0,pt=0)=>(U.position.set(t+b*ot+D*_t,tt,e+N*ot+G*_t),U.rotation.y=L+pt,s.add(U),U),V=(U,ot,tt,_t={})=>ce("trim",U,ot,tt,_t.colour??M,_t),nt=y===null?[-1,1]:[y],at=(U,ot,tt,_t)=>{const pt=ot-U,Mt=_t-tt;if(pt<=.005||Mt<=.005)return;const bt=(U+ot)/2,q=_&&g==="shadowline"&&Math.abs(_t-(a+o))<.02,I=q?Mt-.01:Mt,lt=pt>=1.2&&I>=1.2,st=ce(x,pt,I,c,l,{graded:R&&lt,cast:!0});if(W(st,bt,tt+I/2),q){const T=ce(x,pt,.01,c-.02,l,{});W(T,bt,_t-.005)}const it=Math.abs(b)*pt+Math.abs(N)*c,ht=Math.abs(N)*pt+Math.abs(b)*c,It=t+b*bt,ct=e+N*bt;if(s.solid(It,tt,ct,it,Mt,ht),w)for(const T of nt){const S=ce(x,pt,I,.02,w,{graded:R&&lt});W(S,bt,tt+I/2,T*(O+.01))}if(f&&p&&tt-a<.02)if(p==="commercial"){const T=V(pt,Vt.skirtCommercial,c+.04,{colour:dn.tileFloor,chamfer:wn.thin});W(T,bt,tt+Vt.skirtCommercial/2)}else{const T=[[.112,Vt.skirtProud,0,wn.thin],[.018,.014,.112,0],[.008,.008,.13,0]];for(const[S,H,$,Q]of T){const J=V(pt,S,c+H*2,{chamfer:Q});W(J,bt,tt+$+S/2)}}if(_&&g==="cove"&&Math.abs(_t-(a+o))<.02){const T=Vt.corniceGirth/Math.SQRT2;for(const S of nt){const H=V(pt,Vt.corniceGirth,.008,{chamfer:0});W(H,bt,_t-T/2,S*(O+T/2)),H.rotation.order="YXZ",H.rotation.set(-S*Math.PI/4,L,0)}}},dt=(U,ot,tt,_t)=>{const pt=_t-tt;for(const bt of[-1,1]){const q=V(Vt.reveal,pt,c,{});W(q,U+bt*(ot/2-Vt.reveal/2),tt+pt/2)}const Mt=V(ot,Vt.reveal,c,{});W(Mt,U,_t-Vt.reveal/2)},Ft=(U,ot,tt,_t)=>{const pt=ot-2*Vt.reveal,Mt=pt/2+Vt.archQuirk,bt=_t+Vt.archQuirk;for(const q of[-1,1])for(const I of[-1,1]){const lt=V(Vt.archW,bt-tt+.002,Vt.archProud,{chamfer:wn.joinery});if(W(lt,U+q*(Mt+Vt.archW/2),tt+(bt-tt)/2,I*(O+Vt.archProud/2)),tt-a<.02){const st=V(Vt.archW+.02,.15,.032,{});W(st,U+q*(Mt+Vt.archW/2),tt+.075,I*(O+.016))}}for(const q of[-1,1]){const I=V(pt+2*(Vt.archW+Vt.archQuirk),Vt.archW,Vt.archProud,{chamfer:wn.joinery});W(I,U,bt+Vt.archW/2,q*(O+Vt.archProud/2))}},qt=[...d].sort((U,ot)=>U.at-ot.at);let K=0;for(const U of qt){const ot=U.width/2,tt=Math.max(0,U.at-ot),_t=Math.min(v,U.at+ot),pt=U.kind==="window"?U.sill??Vt.winSill:0,Mt=U.kind==="window"?U.head??Vt.winHead:U.head??(U.kind==="arch"?2.25:Vt.doorH);if(at(K,tt,a,a+o),pt>0&&at(tt,_t,a,a+pt),at(tt,_t,a+Mt,a+o),K=_t,U.kind==="window"){const bt=Mt-pt,q=a+(pt+Mt)/2,I=y===null?1:-y,lt=new se(new Ye(U.width-2*Vt.reveal-.002,bt-.002,.006),DS());lt.castShadow=!1,lt.receiveShadow=!0,W(lt,U.at,q,I*.015);const st=new se(new Ye(U.width-2*Vt.reveal-.002,bt-.002,.006),US());st.castShadow=!1,st.receiveShadow=!0,W(st,U.at,q,-I*.015),dt(U.at,U.width,a+pt,a+Mt),Ft(U.at,U.width,a+pt,a+Mt);const it=Math.max(1,Math.round((U.width-2*Vt.reveal)/.9)),ht=U.width-2*Vt.reveal;for(let ct=1;ct<it;ct++){const T=V(.04,bt,.05,{chamfer:wn.joinery});W(T,U.at-ht/2+ht/it*ct,q)}const It=U.restrictor?Math.min(a+1.7,a+Mt-.1):a+pt+bt/3;if(bt>.55){const ct=V(ht,.04,.05,{chamfer:wn.joinery});W(ct,U.at,It)}if(U.restrictor){const ct=V(.06,.02,.03,{colour:dn.metalDull,chamfer:wn.thin});W(ct,U.at+ht/4,a+pt+.02,0)}for(const ct of nt){const T=V(U.width+.09,.025,c/2+.03,{chamfer:wn.joinery});W(T,U.at,a+pt-.0125,ct*(c/4+.015))}if(y!==null){const ct=V(U.width+.12,.04,.09,{chamfer:wn.joinery});W(ct,U.at,a+pt-.02,-y*(O+.045)),ct.rotation.order="YXZ",ct.rotation.set(y*.1,L,0)}if(U.curtains){ib(s,t+b*U.at,a+Mt+.15,e+N*U.at,L,U.width+.4,{offset:(y??1)*(O+.09)});const ct=[.3,.22],T=y??1;for(const H of[-1,1]){const $=ct[H<0?0:1],Q=U.width*$,J=6;for(let Tt=0;Tt<J;Tt++){const mt=Q/J,St=ce("fabric",mt*1.35,bt+.35,.045,U.curtains,{cast:!0}),$t=U.at+H*(U.width/2-Q+(Tt+.5)*mt);W(St,$t,q+.1,T*(O+.075),Tt%2?.175:-.175)}}const S=V(U.width+.44,.12,.09,{chamfer:wn.joinery});W(S,U.at,a+Mt+.21,T*(O+.055))}}else if((U.kind==="door"||U.kind==="arch")&&(dt(U.at,U.width,a,a+Mt),Ft(U.at,U.width,a,a+Mt),U.kind==="door")){const bt=U.swing??1,q=U.width/2-Vt.reveal,I=O-.045;for(const it of[-1,1]){const ht=V(.013,Mt-.02,.03,{});W(ht,U.at+it*(q-.0055),a+(Mt-.02)/2,bt*I)}const lt=V(U.width-2*Vt.reveal,.014,.03,{});W(lt,U.at,a+Mt-.025,bt*I);const st=nb(U,U.width,M,bt);if(st){const it=I+.015+Vt.leafT,ht=Mt-Vt.reveal-.02,It=st.pair?q-.006:2*q-.006,ct=st.face,T=st.pair?[1,-1]:[ct];for(const S of T){const H=U.at+S*(q-.003),$=ct*it;st.leaves.push({hx:t+b*H+D*$,hz:e+N*H+G*$,y:a,baseRot:L,phiOpen:S*ct*Math.PI/2,leafRot:S>0?0:Math.PI,dx:-S*It/2,dz:-ct*Vt.leafT/2,lw:It,lh:ht});for(const Q of[.15,1.02,1.89]){if(Q>ht-.1)continue;const J=ce("chrome",.016,.1,.016,qs.metal,{chamfer:.001,cast:!1});W(J,H,a+.015+Q,$)}}st.centre={x:t+b*U.at,z:e+N*U.at},st.y0=a,s.doors.push(st)}}if(m&&U.kind==="door"){const bt=-(U.swing??1);for(const q of[-1,1])tb(s,t+b*(U.at+bt*(U.width/2+Vt.archW+.15))+D*q*(O+.006),a+Vt.switchH,e+N*(U.at+bt*(U.width/2+Vt.archW+.15))+G*q*(O+.006),L+(q<0?Math.PI:0))}}if(at(K,v,a,a+o),m&&y!==null&&a+Vt.gpoH<a+o){const U=Math.max(1,Math.floor(v/3.5));for(let ot=0;ot<U;ot++){const tt=(ot+.5)*(v/U);qt.some(_t=>Math.abs(_t.at-tt)<_t.width/2+.25)||eb(s,t+b*tt+D*y*(O+.006),a+Vt.gpoH,e+N*tt+G*y*(O+.006),L+(y<0?Math.PI:0))}}A&&(s.faces[A]={a:{x:t,z:e},b:{x:n,z:i},u:{x:b,z:N},n:{x:D,z:G},angle:L,thickness:c,y0:a,height:o,length:v,face:U=>({x:(t+n)/2+D*U*(c/2),z:(e+i)/2+G*U*(c/2),nx:D*U,nz:G*U,rotY:L+(U<0?Math.PI:0)})})}function ib(s,t,e,n,i=0,r=1.6,a={}){const o=new Rn,c=new se(new Pi(.0125,.0125,r,8),Gl("chrome",a.colour??qs.metalDark));c.rotation.z=Math.PI/2,o.add(c);for(const l of[-1,1]){const h=new se(new ds(.0175,8,6),Gl("chrome",a.colour??qs.metalDark));h.position.x=l*r/2,o.add(h)}return o.rotation.y=i,o.position.set(t,e,n),o.translateZ(a.offset??0),s.add(o),o}function sm(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new Wt;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let p=0;p<f.count;++p)u.push(f.getX(p)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Fd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in a){const u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<a[h].length;++_)f.push(a[h][_][d]);const p=Fd(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}return c}function Fd(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const a=new t(r),o=new Kt(a,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let p=0;p<e;p++){const _=h.getComponent(d,p);o.setComponent(d+u,p,_)}}else a.set(h.array,c);c+=h.count*e}return i!==void 0&&(o.gpuType=i),o}const sb=new Set(["position","normal","uv","color"]);function rb(s,t={}){var o,c;s.updateMatrixWorld(!0);const e=new Map,n=[],i=new Set;s.traverse(l=>{var p,_;if(l===s)return;for(let g=l.parent;g&&g!==s;g=g.parent)if(i.has(g))return;if(l.isInstancedMesh||l.userData.isSign||l.isLight){n.push(l),i.add(l);return}if(!l.isMesh||!((_=(p=l.geometry)==null?void 0:p.attributes)!=null&&_.position))return;const h=l.material.uuid;e.has(h)||e.set(h,{material:l.material,geos:[],cast:!1});const u=l.geometry.clone();u.applyMatrix4(l.matrixWorld);for(const g of Object.keys(u.attributes))sb.has(g)||u.deleteAttribute(g);const d=u.attributes.position.count;u.attributes.uv||u.setAttribute("uv",new Kt(new Float32Array(d*2),2)),u.attributes.color||u.setAttribute("color",new Kt(new Float32Array(d*3).fill(1),3));const f=e.get(h);f.geos.push(u.index?u.toNonIndexed():u),f.cast=f.cast||l.castShadow});const r=t.colliders?new Wl(t.colliders,1):null,a=new Rn;for(const{material:l,geos:h,cast:u}of e.values()){if(!h.length)continue;const d=h.length===1?h[0]:sm(h,!1);if(!d){console.error("bakeGroup: merge returned null (mismatched attributes)",l);continue}const f=((o=l.userData)==null?void 0:o.decal)===!0,p=(c=l.userData)==null?void 0:c.uvScale;p&&!f&&ab(d,p[0],p[1]),r&&!f&&ub(d,r);const _=new se(d,l);_.castShadow=f?!1:u,_.receiveShadow=!f,f&&(_.renderOrder=2),a.add(_)}for(const l of n)a.add(l);return a}function ab(s,t,e=t){const n=s.attributes.position.count,i=s.attributes.position.array,r=s.attributes.normal.array,a=new Float32Array(n*2);for(let o=0;o<n;o++){const c=o*3,l=Math.abs(r[c]),h=Math.abs(r[c+1]),u=Math.abs(r[c+2]);let d,f;h>=l&&h>=u?(d=i[c],f=i[c+2]):l>=u?(d=i[c+2],f=i[c+1]):(d=i[c],f=i[c+1]),a[o*2]=d/t,a[o*2+1]=f/e}s.setAttribute("uv",new Kt(a,2))}const Sl=512,Bd=1024;function zd(s,t,e){return((s+Sl)*Bd+(t+Sl))*Bd+(e+Sl)}class Wl{constructor(t,e=1){this.cell=e,this.boxes=t,this.bins=new Map;for(let n=0;n<t.length;n++){const i=t[n],r=Math.floor(i.min.x/e),a=Math.floor(i.max.x/e),o=Math.floor(i.min.y/e),c=Math.floor(i.max.y/e),l=Math.floor(i.min.z/e),h=Math.floor(i.max.z/e);for(let u=r;u<=a;u++)for(let d=o;d<=c;d++)for(let f=l;f<=h;f++){const p=zd(u,d,f);let _=this.bins.get(p);_||(_=[],this.bins.set(p,_)),_.push(n)}}this._stamp=new Int32Array(t.length),this._epoch=0,this._out=[]}near(t,e,n,i){const r=this.cell,a=this._out;a.length=0;const o=++this._epoch,c=Math.floor((t-i)/r),l=Math.floor((t+i)/r),h=Math.floor((e-i)/r),u=Math.floor((e+i)/r),d=Math.floor((n-i)/r),f=Math.floor((n+i)/r);for(let p=c;p<=l;p++)for(let _=h;_<=u;_++)for(let g=d;g<=f;g++){const m=this.bins.get(zd(p,_,g));if(m)for(let y=0;y<m.length;y++){const x=m[y];this._stamp[x]!==o&&(this._stamp[x]=o,a.push(this.boxes[x]))}}return a}}const ob=.18,cb=.55,kd=.75,lb=.3,Hd=.55,hb=1.2;function ub(s,t){const e=t instanceof Wl?t:new Wl(t,1),n=Array.isArray(s)?s:[s];for(const i of n)db(i,e)}function db(s,t){const e=s.attributes.color;if(!e||e.itemSize!==3||e.normalized||!s.attributes.normal)return;const n=s.attributes.position.array,i=s.attributes.normal.array,r=e.array,a=s.attributes.position.count;for(let o=0;o<a;o++){const c=o*3,l=i[c],h=i[c+1],u=i[c+2],d=n[c]+l*.01,f=n[c+1]+h*.01,p=n[c+2]+u*.01;let _=0;const g=t.near(d,f,p,hb);for(let y=0;y<g.length;y++){const x=g[y],M=Math.max(x.min.x-d,0,d-x.max.x),R=Math.max(x.min.y-f,0,f-x.max.y),A=Math.max(x.min.z-p,0,p-x.max.z),w=Math.sqrt(M*M+R*R+A*A);if(w>kd*3)continue;const C=(x.min.x+x.max.x)/2-d,B=(x.min.y+x.max.y)/2-f,v=(x.min.z+x.max.z)/2-p;l*C+h*B+u*v<=0||(_+=cb*Math.exp(-w/ob)+lb*Math.exp(-w/kd))}const m=Math.max(Hd,1-Math.min(1-Hd,_));r[c]*=m,r[c+1]*=m,r[c+2]*=m}e.needsUpdate=!0}const de=Object.freeze({outer:2.42,inner:1.8,axial:.55,segments:44,chamfer:.035,trackDepth:.14,trackInner:1.93,trackOuter:2.15,chevrons:9,chevronStart:Math.PI/2,glyphs:39}),fb=Object.freeze({faces:2*Math.PI*(de.outer**2-de.inner**2),rimOuter:2*Math.PI*de.outer*de.axial,rimInner:2*Math.PI*de.inner*de.axial,get total(){return this.faces+this.rimOuter+this.rimInner},throat:Math.PI*de.inner**2}),rt=Object.freeze({W:14,D:11,PAD:0,FLOOR:-1.22,RING_Y:1.2,CROWN:3.62,GALLERY_SOFFIT:3.92,GALLERY_FLOOR:4.12,CEIL:6.92,CEIL_H:8.14,RING_X:-4.4,RING_Z:0,RAMP_STEPS:20,RAMP_GOING:.44,RAMP_RISE:.061,RAMP_WIDTH:3.2}),dr=Object.freeze(((s,t)=>{let e=s;return t.map(([n,i])=>{const r=Object.freeze({name:n,y0:e,height:i,top:e+i});return e+=i,r})})(rt.FLOOR,[["A",2.8],["B",2.8],["C",2.54]])),Lt=Object.freeze({RING_BODY:3816510,RING_EDGE:8883084,TRACK:2829615,CHEVRON_DARK:2369579,CHEVRON_LIT:16774365,CONCRETE:5658193,CONCRETE_DARK:4145212,DECK:4868935,RAMP_TREAD:5987415,BAND:6974308,GLASS:9414324,STRIP:16770235,HAZARD:12096047,LINE:10133668,LAMP:16771528,SIGN:13159372,PLINTH:5198157,DARK:1974306,GLYPH:9278616}),Vd=12,Ja=.32,Gd=16;function pb(s=null){const t={};return t.RING_BODY=ln(Lt.RING_BODY,{roughness:.52,metalness:0,flat:!0}),t.RING_EDGE=ln(Lt.RING_EDGE,{roughness:.38,metalness:0,flat:!0}),t.TRACK=ln(Lt.TRACK,{roughness:.66,metalness:0,flat:!0}),t.CHEVRON_DARK=ln(Lt.CHEVRON_DARK,{roughness:.44,metalness:0,flat:!0}),t.CHEVRON_LIT=ln(Lt.CHEVRON_LIT,{roughness:.3,metalness:0,emissive:16770744,emissiveIntensity:1.5}),t.CONCRETE=vi("trim",Lt.CONCRETE,s),t.CONCRETE_DARK=vi("trim",Lt.CONCRETE_DARK,s),t.DECK=vi("vinyl",Lt.DECK,s),t.RAMP_TREAD=vi("trim",Lt.RAMP_TREAD,s),t.BAND=vi("appliance",Lt.BAND,s),t.GLASS=vi("glass",Lt.GLASS,s),t.HAZARD=ln(Lt.HAZARD,{roughness:.7,metalness:0}),t.LINE=ln(Lt.LINE,{roughness:.8,metalness:0}),t.SIGN=ln(Lt.SIGN,{roughness:.75,metalness:0}),t.PLINTH=vi("trim",Lt.PLINTH,s),t.DARK=ln(Lt.DARK,{roughness:.9,metalness:0}),t.GLYPH=ln(Lt.GLYPH,{roughness:.7,metalness:0}),t.STRIP=ln(Lt.STRIP,{roughness:.4,metalness:0,emissive:16768160,emissiveIntensity:.9}),t.LAMP=ln(Lt.LAMP,{roughness:.35,metalness:0,emissive:16770744,emissiveIntensity:1.6}),t}function mb(){const s=new Map,t=[],e=(n,i,r)=>{const a=(s.get(i)??0)+r;return s.set(i,a),IS(i,a),t.push({name:n,colour:i,area:r,total:a}),i};return e.plans=t,e.totalFor=n=>s.get(n)??0,e}const fe=rt.W/2,Ee=rt.D/2,Fe=Vt.extWall,An=-5.5,qi=3.6,_n=An+1.8,Qa=-6.4,yi=_n+rt.RAMP_STEPS*rt.RAMP_GOING;function gb(s,t,e,n=null){const i=e.plans;e("DECK",Lt.DECK,rt.W*rt.D),QS(t,0,0,rt.W,rt.D,rt.FLOOR,Lt.DECK,{surface:"vinyl",thickness:.24});const r=t.colliders.length;e("CONCRETE_DARK",Lt.CONCRETE_DARK,rt.W*rt.D),jS(t,0,0,rt.W,rt.D,rt.CEIL,Lt.CONCRETE_DARK,{surface:"trim",thickness:.18});const a={thickness:Fe,colour:Lt.CONCRETE,surface:"trim",skirting:!1,cornice:!1,autoServices:!1,graded:!1,inner:1};e("CONCRETE",Lt.CONCRETE,2*(rt.W+rt.D)*rt.CEIL_H);const o=[];for(const L of dr){const D={...a,y0:L.y0,height:L.height};$a(t,-fe,-Ee,fe,-Ee,{...D,name:`south.${L.name}`}),$a(t,fe,-Ee,fe,Ee,{...D,name:`east.${L.name}`}),$a(t,fe,Ee,-fe,Ee,{...D,name:`north.${L.name}`}),$a(t,-fe,Ee,-fe,-Ee,{...D,name:`west.${L.name}`}),o.push({...L,top:L.y0+L.height})}const c=t.colliders.length-r;for(const L of[dr[0].y0+dr[0].height,dr[1].y0+dr[1].height])for(const[D,G,O,W]of[[-fe,-Ee,fe,-Ee],[fe,-Ee,fe,Ee],[fe,Ee,-fe,Ee],[-fe,Ee,-fe,-Ee]]){const V=Math.hypot(O-D,W-G),nt=ce("appliance",V,.24,.18,Lt.BAND,{material:s.BAND,cast:!0});nt.position.set((D+O)/2,L,(G+W)/2),nt.rotation.y=Math.atan2(-(W-G),O-D);const at=-(W-G)/V,dt=(O-D)/V;nt.position.x+=at*(Fe/2+.07),nt.position.z+=dt*(Fe/2+.07),t.add(nt)}e("BAND",Lt.BAND,2*2*(rt.W+rt.D)*.24),e("CONCRETE_DARK",Lt.CONCRETE_DARK,rt.D*(rt.CEIL-rt.FLOOR));const l=ce("trim",.2,rt.CEIL-rt.FLOOR,rt.D-Fe,Lt.CONCRETE_DARK,{material:s.CONCRETE_DARK,cast:!0});l.position.set(Qa,(rt.CEIL+rt.FLOOR)/2,0),t.add(l),t.solid(Qa,rt.FLOOR,0,.2,rt.CEIL-rt.FLOOR,rt.D-Fe);const h=_n-An,u=(An+_n)/2;e("PLINTH",Lt.PLINTH,h*qi+2*(h+qi)*1.22);const d=ce("trim",h,1.22,qi,Lt.PLINTH,{material:s.PLINTH,cast:!0});d.position.set(u,rt.PAD-.61,0),t.add(d),t.solid(u,rt.FLOOR,0,h,1.22,qi,!0),e("HAZARD",Lt.HAZARD,2*qi*.12);for(const L of[An+.06,_n-.06]){const D=ce("trim",.12,.012,qi,Lt.HAZARD,{material:s.HAZARD,cast:!1});D.position.set(L,rt.PAD+.006,0),t.add(D)}e("GLYPH",Lt.GLYPH,7*.18*.18);for(let L=0;L<7;L++){const D=ce("trim",.18,.01,.18,Lt.GLYPH,{material:s.GLYPH,cast:!1});D.position.set(_n-.42,rt.PAD+.005,-1.08+L*.36),t.add(D)}const f=[];for(let L=0;L<rt.RAMP_STEPS;L++){const D=_n+L*rt.RAMP_GOING,G=rt.PAD-(L+1)*rt.RAMP_RISE;t.solid(D+rt.RAMP_GOING/2,G-.2,0,rt.RAMP_GOING,.2,rt.RAMP_WIDTH,!0),f.push({i:L,x0:D,top:G})}const p=Math.hypot(rt.RAMP_STEPS*rt.RAMP_GOING,1.22),_=Math.atan2(1.22,rt.RAMP_STEPS*rt.RAMP_GOING);e("RAMP_TREAD",Lt.RAMP_TREAD,p*rt.RAMP_WIDTH);const g=ce("trim",p,.14,rt.RAMP_WIDTH,Lt.RAMP_TREAD,{material:s.RAMP_TREAD,cast:!0});g.position.set((_n+yi)/2,(rt.PAD+rt.FLOOR)/2-.06,0),g.rotation.z=_,t.add(g);for(const L of[-rt.RAMP_WIDTH/2-.11,rt.RAMP_WIDTH/2+.11]){const D=ce("trim",p,.36,.22,Lt.PLINTH,{material:s.PLINTH,cast:!0});D.position.set((_n+yi)/2,(rt.PAD+rt.FLOOR)/2+.04,L),D.rotation.z=_,t.add(D)}e("LINE",Lt.LINE,2*(fe-yi)*.1+2*rt.D*.1);for(const L of[-rt.RAMP_WIDTH/2,rt.RAMP_WIDTH/2]){const D=ce("trim",fe-yi,.01,.1,Lt.LINE,{material:s.LINE,cast:!1});D.position.set((yi+fe)/2,rt.FLOOR+.005,L),t.add(D)}for(const L of[yi+.4,fe-1.2]){const D=ce("trim",.1,.01,rt.D-1.2,Lt.LINE,{material:s.LINE,cast:!1});D.position.set(L,rt.FLOOR+.005,0),t.add(D)}const m=2.6,y=Ee-Fe/2-m/2;e("PLINTH",Lt.PLINTH,rt.W*m);const x=ce("trim",rt.W-Fe,.2,m,Lt.PLINTH,{material:s.PLINTH,cast:!0});x.position.set(0,rt.GALLERY_FLOOR-.1,y),t.add(x),t.solid(0,rt.GALLERY_FLOOR-.2,y,rt.W-Fe,.2,m,!0),e("GLASS",Lt.GLASS,12*1.4);const M=ce("glass",12,1.4,.04,Lt.GLASS,{material:s.GLASS,cast:!1});M.position.set(0,rt.GALLERY_FLOOR+.7,y-m/2+.02),t.add(M),e("BAND",Lt.BAND,12*.3);const R=ce("appliance",12,.3,.12,Lt.BAND,{material:s.BAND,cast:!0});R.position.set(0,rt.GALLERY_FLOOR+.15,y-m/2),t.add(R);const A=2.6,w=2.4;e("DARK",Lt.DARK,2*w*.3+A*.3);for(const[L,D,G,O]of[[.3,w,rt.FLOOR+w/2,-A/2],[.3,w,rt.FLOOR+w/2,A/2],[.3,.3,rt.FLOOR+w,0]]){const W=ce("trim",.3,D,O===0?A:.3,Lt.DARK,{material:s.DARK,cast:!0});W.position.set(fe-Fe/2-.15,G,O===0?0:O),t.add(W)}e("SIGN",Lt.SIGN,3*1.2*.32);for(const[L,D,G]of[[fe-Fe-.03,2.4,-Math.PI/2],[-fe+Fe+.03,-2.4,Math.PI/2],[2,-Ee+Fe+.03,0]]){const O=ce("trim",1.2,.32,.02,Lt.SIGN,{material:s.SIGN,cast:!1});O.position.set(L,rt.FLOOR+2.1,D),O.rotation.y=G,t.add(O)}e("LAMP",Lt.LAMP,Vd*Ja*Ja);const C=[];for(let L=0;L<Vd;L++){const D=L%4,G=L/4|0,O=-5.25+D*3.5,W=-3.4+G*3.4,V=ce("trim",Ja,.06,Ja,Lt.LAMP,{material:s.LAMP,cast:!1});V.position.set(O,rt.CEIL-.22,W),t.add(V),C.push(V)}e("STRIP",Lt.STRIP,Gd*1.2*.06);for(let L=0;L<Gd;L++){const D=L%2===0?-1:1,G=L/2|0,O=ce("trim",1.2,.06,.04,Lt.STRIP,{material:s.STRIP,cast:!1});O.position.set(-5.6+G*1.7,rt.FLOOR+2.45,D*(Ee-Fe/2-.04)),t.add(O)}t.light(-4.6,rt.CEIL-.5,0,16770756,14,16),t.light(-1.2,rt.CEIL-.5,-2.6,16770756,10,14),t.light(-1.2,rt.CEIL-.5,2.6,16770756,10,14),t.light(3.4,rt.CEIL-.5,0,16770756,10,14),t.light(An+1,1.2,0,12374248,6,7),t.spot("spawn",6.1,rt.FLOOR,0),t.spot("hall_east",6.1,rt.FLOOR,0),t.spot("ramp_foot",yi-.6,rt.FLOOR,0),t.spot("ramp_head",_n+.4,rt.PAD-rt.RAMP_RISE,0),t.spot("pad",An+.9,rt.PAD,0);const B=fe-Fe/2,v=Ee-Fe/2,b=[{nx:1,nz:0,d:B},{nx:-1,nz:0,d:B},{nx:0,nz:1,d:v},{nx:0,nz:-1,d:v}],N=[{x:An,z:0,hw:.32,hd:2.42,rotY:0,y0:rt.FLOOR,y1:rt.CROWN},{x:Qa,z:0,hw:.1,hd:(rt.D-Fe)/2,rotY:0,y0:rt.FLOOR,y1:rt.CEIL},{x:(An+_n)/2,z:0,hw:(_n-An)/2,hd:qi/2,rotY:0,y0:rt.FLOOR,y1:rt.PAD-.42}];return t.userData??(t.userData={}),t.userData.collision={planes:b,hulls:[],boxes:N},{plans:i,lamps:C,bands:o,wallColliders:c,treads:f,collision:t.userData.collision,geometry:{RING_X:An,PAD_E:_n,RAMP_END:yi,ALCOVE_X:Qa,FACE_X:B,FACE_Z:v}}}function Wd(s,t){const e=s.length===1?s[0]:sm(s,!1);if(!e)throw new Error(`Gate: ${t} merge returned null — mismatched attributes (indexed vs non-indexed is the usual cause; sweep() is non-indexed)`);return e}function bl(s,t,e,n=!1){const i=[],r=s.length,a=Math.PI*2/e;for(const c of t){const l=s[c],h=s[(c+1)%r];if(!(!n&&c+1>=r))for(let u=0;u<e;u++){const d=u*a,f=(u+1)*a,p=Math.cos(d),_=Math.sin(d),g=Math.cos(f),m=Math.sin(f),y=[l[0]*p,l[0]*_,l[1]],x=[h[0]*p,h[0]*_,h[1]],M=[h[0]*g,h[0]*m,h[1]],R=[l[0]*g,l[0]*m,l[1]];i.push(...y,...x,...M,...y,...M,...R)}}const o=new Wt;return o.setAttribute("position",new Ct(i,3)),o.computeVertexNormals(),o.setAttribute("uv",new Ct(new Float32Array(i.length/3*2),2)),o}function _b(s,t){const e=new Rn;e.name="gate";const n=new Rn;n.name="gate.spin",e.add(n);const i=de.outer,r=de.inner,a=de.axial/2,o=de.chamfer,c=de.trackInner,l=de.trackOuter,h=de.trackDepth,u=de.segments,d=[[r+o,+a],[c,+a],[l,+a],[i-o,+a],[i,+a-o],[i,-a+o],[i-o,-a],[r+o,-a],[r,-a+o],[r,+a-o]];t("RING_BODY",Lt.RING_BODY,fb.total);const f=new se(bl(d,[0,2,4,6,8],u,!0),s.RING_BODY);f.name="ring.body",f.castShadow=!0,f.receiveShadow=!0,n.add(f);const p=2*Math.PI*(2*i+2*r)*o*Math.SQRT2;t("RING_EDGE",Lt.RING_EDGE,p);const _=[bl(d,[3,5,7,9],u,!0)],g=[[c,+a],[c,+a-h],[l,+a-h],[l,+a]],m=2*Math.PI*(c*h+l*h+(l-c)*(c+l)/2);t("TRACK",Lt.TRACK,m);const y=new se(bl(g,[0,1,2],u,!1),s.TRACK);y.name="ring.track",y.receiveShadow=!0,n.add(y);const x=(c+l)/2,M=.15,R=.1,A=.012;t("RING_EDGE",Lt.RING_EDGE,de.glyphs*M*R);for(let nt=0;nt<de.glyphs;nt++){const at=nt/de.glyphs*Math.PI*2,dt=new Ye(M,R,A);dt.applyMatrix4(new Ot().makeTranslation(x*Math.cos(at),x*Math.sin(at),a-h+A/2).multiply(new Ot().makeRotationZ(at-Math.PI/2))),_.push(dt.toNonIndexed())}const w=new se(Wd(_,"edges+glyphs"),s.RING_EDGE);w.name="ring.edges",w.castShadow=!0,n.add(w);const C=[],B=.44,v=.34,b=de.axial+.12,N=.26,L=.15,D=.03;t("CHEVRON_DARK",Lt.CHEVRON_DARK,de.chevrons*2*(B*v+B*b+v*b)),t("CHEVRON_LIT",Lt.CHEVRON_LIT,de.chevrons*(N*L+2*(N+L)*D));const G=[],O=new Ye(N,L,D);for(let nt=0;nt<de.chevrons;nt++){const at=de.chevronStart+nt/de.chevrons*Math.PI*2,dt=Math.cos(at),Ft=Math.sin(at),qt=i-v/2+.09,K=new Ye(B,v,b);K.applyMatrix4(new Ot().makeTranslation(qt*dt,qt*Ft,0).multiply(new Ot().makeRotationZ(at-Math.PI/2))),G.push(K.toNonIndexed());const U=new se(O,s.CHEVRON_DARK),ot=(c+l)/2+.05;U.position.set(ot*dt,ot*Ft,a+D/2+.004),U.rotation.z=at-Math.PI/2,U.name=`gate.chevron.${nt}.claw`,e.add(U),C.push({claw:U,angle:at,locked:!1})}const W=new se(Wd(G,"chevron housings"),s.CHEVRON_DARK);W.name="gate.chevron.housings",W.castShadow=!0,e.add(W);const V={group:e,spin:n,chevrons:C,t:0,state:"idle",lockedCount:0,setLocked(nt,at){const dt=C[nt];return!dt||dt.locked===at?!1:(dt.locked=at,dt.claw.material=at?s.CHEVRON_LIT:s.CHEVRON_DARK,V.lockedCount+=at?1:-1,!0)},reset(){for(let nt=0;nt<C.length;nt++)V.setLocked(nt,!1);V.t=0,V.state="idle"}};return V}const Nn={RADIUS:.34,HEIGHT:1.75,EYE:1.62,STEP:.42,GRAVITY:22,SPEED:2.6,RUN:4.2},xb=14,yb=3,Xd=.0022,Yd=Math.PI/2-.05,vb=.72,Mb=6,Sb=.06,bb=.1,wb=1500,no=[];for(let s=0;s<6;s++){const t=s*Math.PI/3;no.push({nx:Math.sin(t),nz:Math.cos(t)})}const bi=[],Xl={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],run:["ShiftLeft","ShiftRight"],interact:["KeyE"]},Ab=new Set(Object.values(Xl).flat());function rm(s,t,e,n={}){const i=n.radius??Nn.RADIUS,r=n.y??0,a=n.height??Nn.HEIGHT,o=n.onPush||null;let c=0;const l=(s==null?void 0:s.planes)||bi;for(let d=0;d<l.length;d++){const f=l[d],p=t*f.nx+e*f.nz,_=f.d-i;if(p<=_)continue;const g=p-_;t-=f.nx*g,e-=f.nz*g,c++,o&&o(-f.nx,-f.nz)}const h=(s==null?void 0:s.hulls)||bi;for(let d=0;d<h.length;d++){const f=h[d],p=f.y0??0;if(r+a<=p||r>=f.y1)continue;let _=0,g=-1/0;for(let M=0;M<6;M++){const R=t*no[M].nx+e*no[M].nz;R>g&&(g=R,_=M)}const m=f.apothem+i;if(g>=m)continue;const y=no[_],x=m-g;t+=y.nx*x,e+=y.nz*x,c++,o&&o(y.nx,y.nz)}const u=(s==null?void 0:s.boxes)||bi;for(let d=0;d<u.length;d++){const f=u[d],p=f.y0??0;if(r+a<=p||r>=f.y1)continue;const _=Math.cos(f.rotY),g=Math.sin(f.rotY),m=t-f.x,y=e-f.z,x=m*_-y*g,M=m*g+y*_,R=f.hw+i,A=f.hd+i,w=R-Math.abs(x),C=A-Math.abs(M);if(w<=0||C<=0)continue;let B=0,v=0,b;w<C?(B=x>=0?1:-1,b=w):(v=M>=0?1:-1,b=C);const N=B*_+v*g,L=-B*g+v*_;t+=N*b,e+=L*b,c++,o&&o(N,L)}return{x:t,z:e,contacts:c}}function Eb(s,t,e,n={}){const i=(n.radius??Nn.RADIUS)-(n.tolerance??Sb);return rm(s,t,e,{radius:i,y:n.y,height:n.height}).contacts>0}class Tb{constructor(t,e,n={}){var c,l;this.camera=t,this.build=e,this.dom=n.dom||(typeof document<"u"?document.body:null),this.collision=((c=e==null?void 0:e.userData)==null?void 0:c.collision)||null,this.collision||(console.warn("[walker] build.userData.collision is missing — the player will walk through the walls. Hall.js publishes it."),this.collision={planes:bi,hulls:bi,boxes:bi}),this.position=new P,this.velocity=new P,this.yaw=0,this.pitch=0,this.onGround=!0,this.horizontalSpeed=0,this.enabled=n.enabled??!1,this.wish={ax:0,az:0,run:!1},this._readsInputExplicit=n.readsInput!==void 0,this._readsInput=n.readsInput??!1,this.floorY=n.floorY??0,this.prompt=null,this.driveCamera=!0,this._locked=!1,this._lockPending=!1,this._lockTimer=0,this._down=new Set,this._pressed=new Set,this._mouseDX=0,this._mouseDY=0,this._target=null,this._targetLabel=null,this._interactFns=[],this._pauseFns=[],this._bob=0,this._lastSafe=new P,this._warnedFloor=!1,this._fwd=new P,this._dir=new P,this._killInto=(h,u)=>{const d=this.velocity.x*h+this.velocity.z*u;d<0&&(this.velocity.x-=h*d,this.velocity.z-=u*d)};const i=n.spawn||((l=e==null?void 0:e.spots)==null?void 0:l.spawn)||{x:0,y:0,z:0},r=i.x??i[0]??0,a=i.y??i[1]??0,o=i.z??i[2]??0;this.teleport(r,a,o,n.yaw??0),this._attach()}_attach(){var t;typeof window>"u"||(this._readsInputExplicit||(this._readsInput=!0),this._h={keydown:e=>{e.repeat||(this._locked&&Ab.has(e.code)&&e.preventDefault(),this._down.add(e.code),this._pressed.add(e.code))},keyup:e=>this._down.delete(e.code),blur:()=>this._clearHeld(),focus:()=>this._clearHeld(),visibility:()=>{document.hidden&&this._clearHeld()},mousemove:e=>{this._locked&&(this._mouseDX+=e.movementX,this._mouseDY+=e.movementY)},mousedown:e=>{this._pressed.add("Mouse"+e.button),this._down.add("Mouse"+e.button)},mouseup:e=>this._down.delete("Mouse"+e.button),domdown:()=>{this._locked||this.requestLock()},lockchange:()=>{this._settleLock(),this._setLocked(document.pointerLockElement===this.dom)},lockerror:e=>this._failLock(e)},window.addEventListener("keydown",this._h.keydown),window.addEventListener("keyup",this._h.keyup),window.addEventListener("blur",this._h.blur),window.addEventListener("focus",this._h.focus),document.addEventListener("visibilitychange",this._h.visibility),window.addEventListener("mousemove",this._h.mousemove),window.addEventListener("mousedown",this._h.mousedown),window.addEventListener("mouseup",this._h.mouseup),(t=this.dom)==null||t.addEventListener("mousedown",this._h.domdown),document.addEventListener("pointerlockchange",this._h.lockchange),document.addEventListener("pointerlockerror",this._h.lockerror))}dispose(){var t;this._settleLock(),!(typeof window>"u"||!this._h)&&(window.removeEventListener("keydown",this._h.keydown),window.removeEventListener("keyup",this._h.keyup),window.removeEventListener("blur",this._h.blur),window.removeEventListener("focus",this._h.focus),document.removeEventListener("visibilitychange",this._h.visibility),window.removeEventListener("mousemove",this._h.mousemove),window.removeEventListener("mousedown",this._h.mousedown),window.removeEventListener("mouseup",this._h.mouseup),(t=this.dom)==null||t.removeEventListener("mousedown",this._h.domdown),document.removeEventListener("pointerlockchange",this._h.lockchange),document.removeEventListener("pointerlockerror",this._h.lockerror),this._h=null,this._interactFns.length=0,this._pauseFns.length=0,this._locked&&this.releaseLock())}get locked(){return this._locked}get paused(){return!this._locked}get stepPhase(){return this._bob}onPause(t){return t&&this._pauseFns.push(t),this}requestLock(){var e,n;if(this._locked||this._lockPending||!((e=this.dom)!=null&&e.requestPointerLock))return;this._lockPending=!0,clearTimeout(this._lockTimer),this._lockTimer=setTimeout(()=>{this._lockPending=!1},wb);let t;try{t=this.dom.requestPointerLock()}catch(i){this._failLock(i);return}(n=t==null?void 0:t.catch)==null||n.call(t,i=>this._failLock(i))}releaseLock(){var t;this._settleLock(),this._setLocked(!1),typeof document<"u"&&((t=document.exitPointerLock)==null||t.call(document))}_settleLock(){this._lockPending=!1,clearTimeout(this._lockTimer),this._lockTimer=0}_failLock(t){const e=this._lockPending;this._settleLock(),e&&(this._setLocked(!1),console.warn("[walker] pointer lock refused; staying paused",t||""))}_setLocked(t){if(this._locked!==t){this._locked=t,this._clearHeld(),t||this._setTarget(null);for(const e of this._pauseFns)e(!t)}}_clearHeld(){this._down.clear(),this._pressed.clear(),this._mouseDX=0,this._mouseDY=0}_isDown(t){return Xl[t].some(e=>this._down.has(e))}_wasPressed(t){return Xl[t].some(e=>this._pressed.has(e))}update(t){if(t=Math.min(t,bb),!(t>0)){this._pressed.clear();return}if(this._locked&&(this.yaw-=this._mouseDX*Xd,this.pitch-=this._mouseDY*Xd,this.pitch=Math.max(-Yd,Math.min(Yd,this.pitch))),this._mouseDX=0,this._mouseDY=0,this._readsInput&&(this._locked||this.enabled)){let e=0,n=0;this._isDown("forward")&&(n+=1),this._isDown("back")&&(n-=1),this._isDown("right")&&(e+=1),this._isDown("left")&&(e-=1);const i=Math.hypot(e,n);i>1&&(e/=i,n/=i),this.wish.ax=e,this.wish.az=n,this.wish.run=this._isDown("run")}if(this._locked||this.enabled?this._move(t):(this.velocity.x=0,this.velocity.z=0,this.horizontalSpeed=0,this._applyGravity(t)),this.driveCamera&&this._commitCamera(t),this._updateTarget(),this._target&&(this._wasPressed("interact")||this._pressed.has("Mouse0"))){const e=this._target;for(const n of this._interactFns)n(e)}this._pressed.clear()}_move(t){const{ax:e,az:n}=this.wish,i=Math.sin(this.yaw),r=Math.cos(this.yaw),a=this._dir.set(i*n+-r*e,0,r*n+i*e);a.lengthSq()>0&&a.normalize();const o=this.wish.run?Nn.RUN:Nn.SPEED,c=this.onGround?xb:yb,l=Math.min(1,c*t);this.velocity.x+=(a.x*o-this.velocity.x)*l,this.velocity.z+=(a.z*o-this.velocity.z)*l,this._applyGravity(t),this._collide(t);const h=this._floorUnder(this.position.x,this.position.z,this.position.y);this.position.y<h&&(this.position.y=h,this.velocity.y=0,this.onGround=!0),this.horizontalSpeed=Math.hypot(this.velocity.x,this.velocity.z)}_applyGravity(t){this.velocity.y-=Nn.GRAVITY*t,this.position.y+=this.velocity.y*t;const e=this._floorUnder(this.position.x,this.position.z,this.position.y);this.position.y<=e?(this.position.y=e,this.velocity.y=0,this.onGround=!0):this.onGround=!1}_floorUnder(t,e,n){var o;const i=Nn.RADIUS;let r=-1/0;const a=((o=this.build)==null?void 0:o.colliders)||bi;for(let c=0;c<a.length;c++){const l=a[c];l.walkable&&(t<l.min.x-i||t>l.max.x+i||e<l.min.z-i||e>l.max.z+i||l.max.y<=n+Nn.STEP&&l.max.y>r&&(r=l.max.y))}return r===-1/0?(this._warnedFloor||(this._warnedFloor=!0,console.warn(`[walker] no walkable collider under the player — holding at y = ${this.floorY}. floor() is the only thing that makes one.`)),this.floorY):r}_collide(t){this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t;for(let e=0;e<Mb;e++){const n=rm(this.collision,this.position.x,this.position.z,{y:this.position.y,onPush:this._killInto});if(this.position.x=n.x,this.position.z=n.z,!n.contacts)break}Eb(this.collision,this.position.x,this.position.z,{y:this.position.y})?(this.position.x=this._lastSafe.x,this.position.z=this._lastSafe.z,this.velocity.x=0,this.velocity.z=0):this._lastSafe.copy(this.position)}_commitCamera(t){const e=this.position.y+Nn.EYE;let n=0,i=0;this.horizontalSpeed>.3?(this._bob+=t*this.horizontalSpeed*1.9,i=Math.sin(this._bob*2)*.035,n=Math.cos(this._bob)*.014):this._bob=0,this.camera.position.set(this.position.x+n,e+i,this.position.z),this.camera.rotation.set(this.pitch,this.yaw+Math.PI,0,"YXZ")}get target(){return this._target}onInteract(t){return t&&this._interactFns.push(t),this}_updateTarget(){var o;if(!this._locked){this._setTarget(null);return}const t=((o=this.build)==null?void 0:o.interactables)||bi;if(!t.length){this._setTarget(null);return}this.camera.getWorldDirection(this._fwd);const e=this.camera.position,n=this.position.x,i=this.position.z;let r=null,a=1/0;for(let c=0;c<t.length;c++){const l=t[c],h=l.pos.x-n,u=l.pos.z-i,d=Math.hypot(h,u);if(d>=(l.radius||1.8))continue;const f=l.pos.x-e.x,p=l.pos.y-e.y,_=l.pos.z-e.z,g=Math.hypot(f,p,_)||1,m=(f*this._fwd.x+p*this._fwd.y+_*this._fwd.z)/g,y=Math.acos(Math.min(1,Math.max(-1,m)));if(y>vb)continue;const x=y+d*.1;x>=a||(a=x,r=l)}this._setTarget(r)}_setTarget(t){const e=t?t.label:null;this._target===t&&this._targetLabel===e||(this._target=t,this._targetLabel=e,this.prompt=t?{id:t.id,label:t.label}:null)}teleport(t,e=0,n=0,i){if(t&&typeof t=="object"){const r=t;i=typeof e=="number"?e:void 0,t=r.x??r[0]??0,n=r.z??r[2]??0,e=r.y??r[1]??0}return this.position.set(t,e,n),this.position.y=Math.max(e,this._floorUnder(t,n,e)),this.velocity.set(0,0,0),this.horizontalSpeed=0,this.onGround=!0,this._bob=0,typeof i=="number"&&(this.yaw=i),this._lastSafe.copy(this.position),this.driveCamera&&this._commitCamera(0),this.position}setWorld(t){var e,n;if(!t)throw new Error("Walker.setWorld: no world");return this.world=t,this.build=t.build??this.build,this.collision=t.collision??((n=(e=t.build)==null?void 0:e.userData)==null?void 0:n.collision)??this.collision,this.surface=t.surface??null,this._warnedFloor=!1,this._lastSafe.copy(this.position),this._setTarget(null),this}crossTo(t,e=0){return this.position.applyMatrix4(t),qd.set(t.elements[0],t.elements[1],t.elements[2],t.elements[4],t.elements[5],t.elements[6],t.elements[8],t.elements[9],t.elements[10]),this.velocity.applyMatrix3(qd),this.yaw+=e,this.yaw>Math.PI?this.yaw-=2*Math.PI:this.yaw<=-Math.PI&&(this.yaw+=2*Math.PI),this._lastSafe.copy(this.position),this.position}}const qd=new Gt,Ai=document.getElementById("view"),De=new ep({canvas:Ai,antialias:!0,powerPreference:"high-performance"});De.setPixelRatio(Math.min(devicePixelRatio||1,2));De.setSize(innerWidth||1280,innerHeight||720,!1);De.outputColorSpace=je;De.toneMapping=Zl;const am=1.25;De.toneMappingExposure=am;De.shadowMap.type=ql;De.shadowMap.enabled=!0;OS(De);const hs=new mh;hs.background=new xt(723981);const hn=new Ie(64,(innerWidth||1280)/(innerHeight||720),.25,400);hs.add(new Ph(3356991,.55));const om=new wc("longstep"),Vh=pb(om),Ac=mb(),Ec=new JS,Rb=gb(Vh,Ec,Ac,om),Gh=rb(Ec.group);hs.add(Gh);const Tc=_b(Vh,Ac);hs.add(Tc.group);Tc.group.position.set(An,rt.RING_Y,0);Tc.group.rotation.y=Math.PI/2;const pe=new Tb(hn,Ec,{enabled:!0,floorY:rt.FLOOR,yaw:-Math.PI/2}),Cb={get yaw(){return pe.yaw},set yaw(s){pe.yaw=s},get pitch(){return pe.pitch},set pitch(s){pe.pitch=s}},Qe={dragging:!1,moved:0,lastX:0,lastY:0,speed:.0042},Zd=1.45;Ai.addEventListener("pointerdown",s=>{var t;Qe.dragging=!0,Qe.moved=0,Qe.lastX=s.clientX,Qe.lastY=s.clientY,Ai.setPointerCapture(s.pointerId),(t=document.getElementById("hint"))==null||t.classList.add("gone")});Ai.addEventListener("pointerup",s=>{var t;Qe.dragging=!1,Ai.hasPointerCapture(s.pointerId)&&Ai.releasePointerCapture(s.pointerId),Qe.moved<4&&((t=pe.requestLock)==null||t.call(pe))});Ai.addEventListener("pointermove",s=>{if(!Qe.dragging)return;const t=s.clientX-Qe.lastX,e=s.clientY-Qe.lastY;Qe.moved+=Math.abs(t)+Math.abs(e),pe.yaw-=t*Qe.speed,pe.pitch-=e*Qe.speed,pe.pitch=Math.max(-Zd,Math.min(Zd,pe.pitch)),Qe.lastX=s.clientX,Qe.lastY=s.clientY});function Wh(s){pe.update(s)}function Xh(){De.render(hs,hn)}addEventListener("resize",()=>{!innerWidth||!innerHeight||(De.setSize(innerWidth,innerHeight,!1),hn.aspect=innerWidth/innerHeight,hn.updateProjectionMatrix())});let Kd=performance.now();function cm(s){const t=Math.min((s-Kd)/1e3,.25);Kd=s,Wh(t),Xh(),requestAnimationFrame(cm)}requestAnimationFrame(cm);const Ib="http://localhost:5399/shot";window.shot=async function(t="shot",e=null){e!=null&&e.pos&&pe.teleport(e.pos[0],e.pos[1]??rt.FLOOR,e.pos[2],e.yaw),(e==null?void 0:e.yaw)!==void 0&&(pe.yaw=e.yaw),(e==null?void 0:e.pitch)!==void 0&&(pe.pitch=e.pitch),(e==null?void 0:e.still)!==!1&&(pe.velocity.set(0,0,0),pe.wish.ax=0,pe.wish.az=0);const n=1280,i=720,r=De.getPixelRatio(),a=De.getSize(new j),o=hn.aspect;r!==1&&De.setPixelRatio(1),De.setSize(n,i,!1),hn.aspect=n/i,hn.updateProjectionMatrix();const c=Math.max(1,(e==null?void 0:e.settle)??90);for(let h=0;h<c;h++)Wh(1/60);e!=null&&e.free&&(pe.driveCamera=!1,hn.position.set(...e.free.pos),hn.lookAt(...e.free.look),hn.updateMatrixWorld(!0)),Xh(),e!=null&&e.free&&(pe.driveCamera=!0);const l=Ai.toDataURL("image/png");r!==1&&De.setPixelRatio(r),a.x>0&&a.y>0&&(De.setSize(a.x,a.y,!1),hn.aspect=o,hn.updateProjectionMatrix());try{return await(await fetch(Ib,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:t,dataURL:l})})).json()}catch(h){return{ok:!1,error:String(h)}}};window.game={THREE:AS,scene:hs,camera:hn,renderer:De,view:Cb,update:Wh,render:Xh,walker:pe,WALK:Nn,P:Vh,plan:Ac,b:Ec,baked:Gh,hall:Rb,gate:Tc,HALL:rt,RING:de,buckets:()=>{const s=new Map;return hs.traverse(t=>{!t.isMesh||!t.material||s.set(t.material.uuid,(s.get(t.material.uuid)??0)+1)}),s}};console.log(`THE LONG STEP — Hall Three. baked ${Gh.children.filter(s=>s.isMesh).length} buckets, ${Ac.plans.length} planned surfaces, exposure ${am}, spawn ${pe.position.x.toFixed(2)}, ${pe.position.y.toFixed(3)}, ${pe.position.z.toFixed(2)}`);
