(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ec="169",Xd=0,Zc=1,qd=2,_h=1,Yd=2,Ti=3,Di=0,Tn=1,Ai=2,Qi=0,us=1,eo=2,Jc=3,Qc=4,$d=5,Sr=100,Kd=101,jd=102,Zd=103,Jd=104,Qd=200,ep=201,tp=202,np=203,jl=204,Zl=205,ip=206,rp=207,sp=208,op=209,ap=210,lp=211,cp=212,up=213,fp=214,Jl=0,Ql=1,e0=2,_s=3,t0=4,n0=5,i0=6,r0=7,vh=0,hp=1,dp=2,er=0,pp=1,mp=2,gp=3,tc=4,_p=5,vp=6,xp=7,eu="attached",Mp="detached",xh=300,vs=301,xs=302,s0=303,o0=304,xa=306,ca=1e3,ji=1001,a0=1002,wn=1003,Sp=1004,So=1005,zn=1006,Fa=1007,Zi=1008,Ui=1009,Mh=1010,Sh=1011,to=1012,nc=1013,Cr=1014,ui=1015,ao=1016,ic=1017,rc=1018,Ms=1020,yh=35902,bh=1021,Eh=1022,Hn=1023,wh=1024,Th=1025,fs=1026,Ss=1027,Ah=1028,sc=1029,Rh=1030,oc=1031,ac=1033,ea=33776,ta=33777,na=33778,ia=33779,l0=35840,c0=35841,u0=35842,f0=35843,h0=36196,d0=37492,p0=37496,m0=37808,g0=37809,_0=37810,v0=37811,x0=37812,M0=37813,S0=37814,y0=37815,b0=37816,E0=37817,w0=37818,T0=37819,A0=37820,R0=37821,ra=36492,C0=36494,L0=36495,Ch=36283,P0=36284,I0=36285,D0=36286,yp=3200,bp=3201,Lh=0,Ep=1,Ki="",Pn="srgb",ir="srgb-linear",lc="display-p3",Ma="display-p3-linear",ua="linear",yt="srgb",fa="rec709",ha="p3",Fr=7680,tu=519,wp=512,Tp=513,Ap=514,Ph=515,Rp=516,Cp=517,Lp=518,Pp=519,nu=35044,iu="300 es",Ci=2e3,da=2001;class Ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ru=1234567;const js=Math.PI/180,no=180/Math.PI;function Ir(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function xn(n,e,t){return Math.max(e,Math.min(t,n))}function cc(n,e){return(n%e+e)%e}function Ip(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Dp(n,e,t){return n!==e?(t-n)/(e-n):0}function Zs(n,e,t){return(1-t)*n+t*e}function Up(n,e,t,i){return Zs(n,e,1-Math.exp(-t*i))}function Np(n,e=1){return e-Math.abs(cc(n,e*2)-e)}function Fp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Op(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function kp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Bp(n,e){return n+Math.random()*(e-n)}function zp(n){return n*(.5-Math.random())}function Hp(n){n!==void 0&&(ru=n);let e=ru+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gp(n){return n*js}function Vp(n){return n*no}function Wp(n){return(n&n-1)===0&&n!==0}function Xp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function qp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Yp(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*f,l*h,a*u);break;case"YZY":n.set(l*h,a*c,l*f,a*u);break;case"ZXZ":n.set(l*f,l*h,a*c,a*u);break;case"XZX":n.set(a*c,l*g,l*d,a*u);break;case"YXY":n.set(l*d,a*c,l*g,a*u);break;case"ZYZ":n.set(l*g,l*d,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function is(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const lo={DEG2RAD:js,RAD2DEG:no,generateUUID:Ir,clamp:xn,euclideanModulo:cc,mapLinear:Ip,inverseLerp:Dp,lerp:Zs,damp:Up,pingpong:Np,smoothstep:Fp,smootherstep:Op,randInt:kp,randFloat:Bp,randFloatSpread:zp,seededRandom:Hp,degToRad:Gp,radToDeg:Vp,isPowerOfTwo:Wp,ceilPowerOfTwo:Xp,floorPowerOfTwo:qp,setQuaternionFromProperEuler:Yp,normalize:gn,denormalize:is};class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,r,s,o,a,l,u){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],d=i[5],g=i[8],_=r[0],m=r[3],p=r[6],x=r[1],M=r[4],E=r[7],C=r[2],y=r[5],S=r[8];return s[0]=o*_+a*x+l*C,s[3]=o*m+a*M+l*y,s[6]=o*p+a*E+l*S,s[1]=u*_+c*x+f*C,s[4]=u*m+c*M+f*y,s[7]=u*p+c*E+f*S,s[2]=h*_+d*x+g*C,s[5]=h*m+d*M+g*y,s[8]=h*p+d*E+g*S,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,d=u*s-o*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Oa.makeScale(e,t)),this}rotate(e){return this.premultiply(Oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oa=new Ye;function Ih(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function pa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $p(){const n=pa("canvas");return n.style.display="block",n}const su={};function sa(n){n in su||(su[n]=!0,console.warn(n))}function Kp(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function jp(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zp(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ou=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),au=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Us={[ir]:{transfer:ua,primaries:fa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Pn]:{transfer:yt,primaries:fa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ma]:{transfer:ua,primaries:ha,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(au),fromReference:n=>n.applyMatrix3(ou)},[lc]:{transfer:yt,primaries:ha,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(au),fromReference:n=>n.applyMatrix3(ou).convertLinearToSRGB()}},Jp=new Set([ir,Ma]),ct={enabled:!0,_workingColorSpace:ir,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Jp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Us[e].toReference,r=Us[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Us[n].primaries},getTransfer:function(n){return n===Ki?ua:Us[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Us[e].luminanceCoefficients)}};function hs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ka(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Or;class Qp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Or===void 0&&(Or=pa("canvas")),Or.width=e.width,Or.height=e.height;const i=Or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Or}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=hs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hs(t[i]/255)*255):t[i]=hs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let em=0;class Dh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Ir(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ba(r[o].image)):s.push(Ba(r[o]))}else s=Ba(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ba(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tm=0;class un extends Ts{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,i=ji,r=ji,s=zn,o=Zi,a=Hn,l=Ui,u=un.DEFAULT_ANISOTROPY,c=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Ir(),this.name="",this.source=new Dh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ca:e.x=e.x-Math.floor(e.x);break;case ji:e.x=e.x<0?0:1;break;case a0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ca:e.y=e.y-Math.floor(e.y);break;case ji:e.y=e.y<0?0:1;break;case a0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=xh;un.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(u+1)/2,E=(d+1)/2,C=(p+1)/2,y=(c+h)/4,S=(f+_)/4,A=(g+m)/4;return M>E&&M>C?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=y/i,s=S/i):E>C?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=y/r,s=A/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=S/s,r=A/s),this.set(i,r,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-c)*(h-c));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(f-_)/x,this.z=(h-c)/x,this.w=Math.acos((u+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nm extends Ts{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends nm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Uh extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class im extends un{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ht{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||u!==d||c!==g){let m=1-a;const p=l*h+u*d+c*g+f*_,x=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const C=Math.sqrt(M),y=Math.atan2(C,p*x);m=Math.sin(m*y)/C,a=Math.sin(a*y)/C}const E=a*x;if(l=l*m+h*E,u=u*m+d*E,c=c*m+g*E,f=f*m+_*E,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=C,u*=C,c*=C,f*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+c*f+l*d-u*h,e[t+1]=l*g+c*h+u*f-a*d,e[t+2]=u*g+c*d+a*h-l*f,e[t+3]=c*g-a*f-l*h-u*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f-h*d*g;break;case"YXZ":this._x=h*c*f+u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f+h*d*g;break;case"ZXY":this._x=h*c*f-u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f-h*d*g;break;case"ZYX":this._x=h*c*f-u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f+h*d*g;break;case"YZX":this._x=h*c*f+u*d*g,this._y=u*d*f+h*c*g,this._z=u*c*g-h*d*f,this._w=u*c*f-h*d*g;break;case"XZY":this._x=h*c*f-u*d*g,this._y=u*d*f-h*c*g,this._z=u*c*g+h*d*f,this._w=u*c*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(c-l)*d,this._y=(s-u)*d,this._z=(o-r)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(c-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+u)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(s-u)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+c)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-r)/d,this._x=(s+u)/d,this._y=(l+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return za.copy(this).projectOnVector(e),this.sub(za)}reflect(e){return this.sub(za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(xn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new D,lu=new Ht;class Ni{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(s,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yo.copy(i.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ns),bo.subVectors(this.max,Ns),kr.subVectors(e.a,Ns),Br.subVectors(e.b,Ns),zr.subVectors(e.c,Ns),Bi.subVectors(Br,kr),zi.subVectors(zr,Br),or.subVectors(kr,zr);let t=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-or.z,or.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,or.z,0,-or.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-or.y,or.x,0];return!Ha(t,kr,Br,zr,bo)||(t=[1,0,0,0,1,0,0,0,1],!Ha(t,kr,Br,zr,bo))?!1:(Eo.crossVectors(Bi,zi),t=[Eo.x,Eo.y,Eo.z],Ha(t,kr,Br,zr,bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xi=[new D,new D,new D,new D,new D,new D,new D,new D],Yn=new D,yo=new Ni,kr=new D,Br=new D,zr=new D,Bi=new D,zi=new D,or=new D,Ns=new D,bo=new D,Eo=new D,ar=new D;function Ha(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ar.fromArray(n,s);const a=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),l=e.dot(ar),u=t.dot(ar),c=i.dot(ar);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const rm=new Ni,Fs=new D,Ga=new D;class As{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):rm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);const t=Fs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Fs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ga.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(Ga)),this.expandByPoint(Fs.copy(e.center).sub(Ga))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new D,Va=new D,wo=new D,Hi=new D,Wa=new D,To=new D,Xa=new D;class uc{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Va.copy(e).add(t).multiplyScalar(.5),wo.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Va);const s=e.distanceTo(t)*.5,o=-this.direction.dot(wo),a=Hi.dot(this.direction),l=-Hi.dot(wo),u=Hi.lengthSq(),c=Math.abs(1-o*o);let f,h,d,g;if(c>0)if(f=o*l-a,h=o*a-l,g=s*c,f>=0)if(h>=-g)if(h<=g){const _=1/c;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Va).addScaledVector(wo,h),d}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,i,r,s){Wa.subVectors(t,e),To.subVectors(i,e),Xa.crossVectors(Wa,To);let o=this.direction.dot(Xa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,e);const l=a*this.direction.dot(To.crossVectors(Hi,To));if(l<0)return null;const u=a*this.direction.dot(Wa.cross(Hi));if(u<0||l+u>o)return null;const c=-a*Hi.dot(Xa);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,i,r,s,o,a,l,u,c,f,h,d,g,_,m){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,d,g,_,m)}set(e,t,i,r,s,o,a,l,u,c,f,h,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),o=1/Hr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,d=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=d+g*u,t[5]=h-_*u,t[9]=-a*l,t[2]=_-h*u,t[6]=g+d*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,d=l*f,g=u*c,_=u*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,d=l*f,g=u*c,_=u*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*c,t[9]=_-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,d=o*f,g=a*c,_=a*f;t[0]=l*c,t[4]=g*u-d,t[8]=h*u+_,t[1]=l*f,t[5]=_*u+h,t[9]=d*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+_,t[5]=o*c,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*c,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sm,e,om)}lookAt(e,t,i){const r=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Gi.crossVectors(i,Rn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Gi.crossVectors(i,Rn)),Gi.normalize(),Ao.crossVectors(Rn,Gi),r[0]=Gi.x,r[4]=Ao.x,r[8]=Rn.x,r[1]=Gi.y,r[5]=Ao.y,r[9]=Rn.y,r[2]=Gi.z,r[6]=Ao.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],x=i[3],M=i[7],E=i[11],C=i[15],y=r[0],S=r[4],A=r[8],R=r[12],v=r[1],b=r[5],P=r[9],I=r[13],O=r[2],U=r[6],N=r[10],q=r[14],G=r[3],oe=r[7],ae=r[11],re=r[15];return s[0]=o*y+a*v+l*O+u*G,s[4]=o*S+a*b+l*U+u*oe,s[8]=o*A+a*P+l*N+u*ae,s[12]=o*R+a*I+l*q+u*re,s[1]=c*y+f*v+h*O+d*G,s[5]=c*S+f*b+h*U+d*oe,s[9]=c*A+f*P+h*N+d*ae,s[13]=c*R+f*I+h*q+d*re,s[2]=g*y+_*v+m*O+p*G,s[6]=g*S+_*b+m*U+p*oe,s[10]=g*A+_*P+m*N+p*ae,s[14]=g*R+_*I+m*q+p*re,s[3]=x*y+M*v+E*O+C*G,s[7]=x*S+M*b+E*U+C*oe,s[11]=x*A+M*P+E*N+C*ae,s[15]=x*R+M*I+E*q+C*re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*d-i*l*d)+_*(+t*l*d-t*u*h+s*o*h-r*o*d+r*u*c-s*l*c)+m*(+t*u*f-t*a*d-s*o*f+i*o*d+s*a*c-i*u*c)+p*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=f*m*u-_*h*u+_*l*d-a*m*d-f*l*p+a*h*p,M=g*h*u-c*m*u-g*l*d+o*m*d+c*l*p-o*h*p,E=c*_*u-g*f*u+g*a*d-o*_*d-c*a*p+o*f*p,C=g*f*l-c*_*l-g*a*h+o*_*h+c*a*m-o*f*m,y=t*x+i*M+r*E+s*C;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/y;return e[0]=x*S,e[1]=(_*h*s-f*m*s-_*r*d+i*m*d+f*r*p-i*h*p)*S,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*p+i*l*p)*S,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*d-i*l*d)*S,e[4]=M*S,e[5]=(c*m*s-g*h*s+g*r*d-t*m*d-c*r*p+t*h*p)*S,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*p-t*l*p)*S,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*d+t*l*d)*S,e[8]=E*S,e[9]=(g*f*s-c*_*s-g*i*d+t*_*d+c*i*p-t*f*p)*S,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*p+t*a*p)*S,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*d-t*a*d)*S,e[12]=C*S,e[13]=(c*_*r-g*f*r+g*i*h-t*_*h-c*i*m+t*f*m)*S,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*S,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*S,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,d=s*c,g=s*f,_=o*c,m=o*f,p=a*f,x=l*u,M=l*c,E=l*f,C=i.x,y=i.y,S=i.z;return r[0]=(1-(_+p))*C,r[1]=(d+E)*C,r[2]=(g-M)*C,r[3]=0,r[4]=(d-E)*y,r[5]=(1-(h+p))*y,r[6]=(m+x)*y,r[7]=0,r[8]=(g+M)*S,r[9]=(m-x)*S,r[10]=(1-(h+_))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Hr.set(r[0],r[1],r[2]).length();const o=Hr.set(r[4],r[5],r[6]).length(),a=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],$n.copy(this);const u=1/s,c=1/o,f=1/a;return $n.elements[0]*=u,$n.elements[1]*=u,$n.elements[2]*=u,$n.elements[4]*=c,$n.elements[5]*=c,$n.elements[6]*=c,$n.elements[8]*=f,$n.elements[9]*=f,$n.elements[10]*=f,t.setFromRotationMatrix($n),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ci){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let d,g;if(a===Ci)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===da)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ci){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,d=(i+r)*c;let g,_;if(a===Ci)g=(o+s)*f,_=-2*f;else if(a===da)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Hr=new D,$n=new Xe,sm=new D(0,0,0),om=new D(1,1,1),Gi=new D,Ao=new D,Rn=new D,cu=new Xe,uu=new Ht;class en{constructor(e=0,t=0,i=0,r=en.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(xn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return cu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uu.setFromEuler(this),this.setFromQuaternion(uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class fc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let am=0;const fu=new D,Gr=new Ht,Si=new Xe,Ro=new D,Os=new D,lm=new D,cm=new Ht,hu=new D(1,0,0),du=new D(0,1,0),pu=new D(0,0,1),mu={type:"added"},um={type:"removed"},Vr={type:"childadded",child:null},qa={type:"childremoved",child:null};class Gt extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new D,t=new en,i=new Ht,r=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ye}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(hu,e)}rotateY(e){return this.rotateOnAxis(du,e)}rotateZ(e){return this.rotateOnAxis(pu,e)}translateOnAxis(e,t){return fu.copy(e).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hu,e)}translateY(e){return this.translateOnAxis(du,e)}translateZ(e){return this.translateOnAxis(pu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ro.copy(e):Ro.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Os,Ro,this.up):Si.lookAt(Ro,Os,this.up),this.quaternion.setFromRotationMatrix(Si),r&&(Si.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(Si),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mu),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(um),qa.child=e,this.dispatchEvent(qa),qa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mu),Vr.child=e,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,e,lm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,cm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new D(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new D,yi=new D,Ya=new D,bi=new D,Wr=new D,Xr=new D,gu=new D,$a=new D,Ka=new D,ja=new D,Za=new bt,Ja=new bt,Qa=new bt;class ei{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Kn.subVectors(e,t),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Kn.subVectors(r,t),yi.subVectors(i,t),Ya.subVectors(e,t);const o=Kn.dot(Kn),a=Kn.dot(yi),l=Kn.dot(Ya),u=yi.dot(yi),c=yi.dot(Ya),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(u*l-a*c)*h,g=(o*c-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Za.setScalar(0),Ja.setScalar(0),Qa.setScalar(0),Za.fromBufferAttribute(e,t),Ja.fromBufferAttribute(e,i),Qa.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Za,s.x),o.addScaledVector(Ja,s.y),o.addScaledVector(Qa,s.z),o}static isFrontFacing(e,t,i,r){return Kn.subVectors(i,t),yi.subVectors(e,t),Kn.cross(yi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Kn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ei.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Wr.subVectors(r,i),Xr.subVectors(s,i),$a.subVectors(e,i);const l=Wr.dot($a),u=Xr.dot($a);if(l<=0&&u<=0)return t.copy(i);Ka.subVectors(e,r);const c=Wr.dot(Ka),f=Xr.dot(Ka);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Wr,o);ja.subVectors(e,s);const d=Wr.dot(ja),g=Xr.dot(ja);if(g>=0&&d<=g)return t.copy(s);const _=d*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(Xr,a);const m=c*g-d*f;if(m<=0&&f-c>=0&&d-g>=0)return gu.subVectors(s,r),a=(f-c)/(f-c+(d-g)),t.copy(r).addScaledVector(gu,a);const p=1/(m+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(Wr,o).addScaledVector(Xr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Co={h:0,s:0,l:0};function el(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ct.workingColorSpace){if(e=cc(e,1),t=xn(t,0,1),i=xn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=el(o,s,e+1/3),this.g=el(o,s,e),this.b=el(o,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,t=Pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pn){const i=Nh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pn){return ct.fromWorkingColorSpace(rn.copy(this),e),Math.round(xn(rn.r*255,0,255))*65536+Math.round(xn(rn.g*255,0,255))*256+Math.round(xn(rn.b*255,0,255))}getHexString(e=Pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(rn.copy(this),t);const i=rn.r,r=rn.g,s=rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Pn){ct.fromWorkingColorSpace(rn.copy(this),e);const t=rn.r,i=rn.g,r=rn.b;return e!==Pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(Co);const i=Zs(Vi.h,Co.h,t),r=Zs(Vi.s,Co.s,t),s=Zs(Vi.l,Co.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new Qe;Qe.NAMES=Nh;let fm=0;class co extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Ir(),this.name="",this.type="Material",this.blending=us,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jl,this.blendDst=Zl,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jl&&(i.blendSrc=this.blendSrc),this.blendDst!==Zl&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hn extends co{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new D,Lo=new nt;class An{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=nu,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Lo.fromBufferAttribute(this,t),Lo.applyMatrix3(e),this.setXY(t,Lo.x,Lo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=is(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=is(t,this.array)),t}setX(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=is(t,this.array)),t}setY(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=is(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=is(t,this.array)),t}setW(e,t){return this.normalized&&(t=gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=gn(t,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nu&&(e.usage=this.usage),e}}class hc extends An{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Fh extends An{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class fn extends An{constructor(e,t,i){super(new Float32Array(e),t,i)}}let hm=0;const Fn=new Xe,tl=new Gt,qr=new D,Cn=new Ni,ks=new Ni,Yt=new D;class ii extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=Ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ih(e)?Fh:hc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,i){return Fn.makeTranslation(e,t,i),this.applyMatrix4(Fn),this}scale(e,t,i){return Fn.makeScale(e,t,i),this.applyMatrix4(Fn),this}lookAt(e){return tl.lookAt(e),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new fn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ks.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(Cn.min,ks.min),Cn.expandByPoint(Yt),Yt.addVectors(Cn.max,ks.max),Cn.expandByPoint(Yt)):(Cn.expandByPoint(ks.min),Cn.expandByPoint(ks.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Yt.fromBufferAttribute(a,u),l&&(qr.fromBufferAttribute(e,u),Yt.add(qr)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<i.count;A++)a[A]=new D,l[A]=new D;const u=new D,c=new D,f=new D,h=new nt,d=new nt,g=new nt,_=new D,m=new D;function p(A,R,v){u.fromBufferAttribute(i,A),c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,v),h.fromBufferAttribute(s,A),d.fromBufferAttribute(s,R),g.fromBufferAttribute(s,v),c.sub(u),f.sub(u),d.sub(h),g.sub(h);const b=1/(d.x*g.y-g.x*d.y);isFinite(b)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(b),m.copy(f).multiplyScalar(d.x).addScaledVector(c,-g.x).multiplyScalar(b),a[A].add(_),a[R].add(_),a[v].add(_),l[A].add(m),l[R].add(m),l[v].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let A=0,R=x.length;A<R;++A){const v=x[A],b=v.start,P=v.count;for(let I=b,O=b+P;I<O;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const M=new D,E=new D,C=new D,y=new D;function S(A){C.fromBufferAttribute(r,A),y.copy(C);const R=a[A];M.copy(R),M.sub(C.multiplyScalar(C.dot(R))).normalize(),E.crossVectors(y,R);const b=E.dot(l[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,b)}for(let A=0,R=x.length;A<R;++A){const v=x[A],b=v.start,P=v.count;for(let I=b,O=b+P;I<O;I+=3)S(e.getX(I+0)),S(e.getX(I+1)),S(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new D,s=new D,o=new D,a=new D,l=new D,u=new D,c=new D,f=new D;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*c;for(let p=0;p<c;p++)h[g++]=u[d++]}return new An(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ii,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const d=u[f];c.push(d.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,d=f.length;h<d;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _u=new Xe,lr=new uc,Po=new As,vu=new D,Io=new D,Do=new D,Uo=new D,nl=new D,No=new D,xu=new D,Fo=new D;class xt extends Gt{constructor(e=new ii,t=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){No.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(nl.fromBufferAttribute(f,e),o?No.addScaledVector(nl,c):No.addScaledVector(nl.sub(t),c))}t.add(No)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(s),lr.copy(e.ray).recast(e.near),!(Po.containsPoint(lr.origin)===!1&&(lr.intersectSphere(Po,vu)===null||lr.origin.distanceToSquared(vu)>(e.far-e.near)**2))&&(_u.copy(s).invert(),lr.copy(e.ray).applyMatrix4(_u),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,lr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let E=x,C=M;E<C;E+=3){const y=a.getX(E),S=a.getX(E+1),A=a.getX(E+2);r=Oo(this,p,e,i,u,c,f,y,S,A),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),M=a.getX(m+1),E=a.getX(m+2);r=Oo(this,o,e,i,u,c,f,x,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let E=x,C=M;E<C;E+=3){const y=E,S=E+1,A=E+2;r=Oo(this,p,e,i,u,c,f,y,S,A),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const x=m,M=m+1,E=m+2;r=Oo(this,o,e,i,u,c,f,x,M,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function dm(n,e,t,i,r,s,o,a){let l;if(e.side===Tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Di,a),l===null)return null;Fo.copy(a),Fo.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Fo);return u<t.near||u>t.far?null:{distance:u,point:Fo.clone(),object:n}}function Oo(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Io),n.getVertexPosition(l,Do),n.getVertexPosition(u,Uo);const c=dm(n,e,t,i,Io,Do,Uo,xu);if(c){const f=new D;ei.getBarycoord(xu,Io,Do,Uo,f),r&&(c.uv=ei.getInterpolatedAttribute(r,a,l,u,f,new nt)),s&&(c.uv1=ei.getInterpolatedAttribute(s,a,l,u,f,new nt)),o&&(c.normal=ei.getInterpolatedAttribute(o,a,l,u,f,new D),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new D,materialIndex:0};ei.getNormal(Io,Do,Uo,h.normal),c.face=h,c.barycoord=f}return c}class cn extends ii{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new fn(u,3)),this.setAttribute("normal",new fn(c,3)),this.setAttribute("uv",new fn(f,2));function g(_,m,p,x,M,E,C,y,S,A,R){const v=E/S,b=C/A,P=E/2,I=C/2,O=y/2,U=S+1,N=A+1;let q=0,G=0;const oe=new D;for(let ae=0;ae<N;ae++){const re=ae*b-I;for(let Me=0;Me<U;Me++){const Ce=Me*v-P;oe[_]=Ce*x,oe[m]=re*M,oe[p]=O,u.push(oe.x,oe.y,oe.z),oe[_]=0,oe[m]=0,oe[p]=y>0?1:-1,c.push(oe.x,oe.y,oe.z),f.push(Me/S),f.push(1-ae/A),q+=1}}for(let ae=0;ae<A;ae++)for(let re=0;re<S;re++){const Me=h+re+U*ae,Ce=h+re+U*(ae+1),z=h+(re+1)+U*(ae+1),Y=h+(re+1)+U*ae;l.push(Me,Ce,Y),l.push(Ce,z,Y),G+=6}a.addGroup(d,G,R),d+=G,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function _n(n){const e={};for(let t=0;t<n.length;t++){const i=ys(n[t]);for(const r in i)e[r]=i[r]}return e}function pm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Oh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const mm={clone:ys,merge:_n};var gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_m=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends co{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gm,this.fragmentShader=_m,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=pm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class kh extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new D,Mu=new nt,Su=new nt;class Mn extends kh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=no*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return no*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,Mu,Su),t.subVectors(Su,Mu)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(js*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Yr=-90,$r=1;class vm extends Gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(Yr,$r,e,t);r.layers=this.layers,this.add(r);const s=new Mn(Yr,$r,e,t);s.layers=this.layers,this.add(s);const o=new Mn(Yr,$r,e,t);o.layers=this.layers,this.add(o);const a=new Mn(Yr,$r,e,t);a.layers=this.layers,this.add(a);const l=new Mn(Yr,$r,e,t);l.layers=this.layers,this.add(l);const u=new Mn(Yr,$r,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===da)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Bh extends un{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:vs,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xm extends Lr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Bh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new cn(5,5,5),s=new nr({name:"CubemapFromEquirect",uniforms:ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:Qi});s.uniforms.tEquirect.value=t;const o=new xt(r,s),a=t.minFilter;return t.minFilter===Zi&&(t.minFilter=zn),new vm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const il=new D,Mm=new D,Sm=new Ye;class _r{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=il.subVectors(i,t).cross(Mm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(il),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Sm.getNormalMatrix(e),r=this.coplanarPoint(il).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cr=new As,ko=new D;class dc{constructor(e=new _r,t=new _r,i=new _r,r=new _r,s=new _r,o=new _r){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ci){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],x=r[13],M=r[14],E=r[15];if(i[0].setComponents(l-s,h-u,m-d,E-p).normalize(),i[1].setComponents(l+s,h+u,m+d,E+p).normalize(),i[2].setComponents(l+o,h+c,m+g,E+x).normalize(),i[3].setComponents(l-o,h-c,m-g,E-x).normalize(),i[4].setComponents(l-a,h-f,m-_,E-M).normalize(),t===Ci)i[5].setComponents(l+a,h+f,m+_,E+M).normalize();else if(t===da)i[5].setComponents(a,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ko.x=r.normal.x>0?e.max.x:e.min.x,ko.y=r.normal.y>0?e.max.y:e.min.y,ko.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zh(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ym(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let d;if(u instanceof Float32Array)d=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)d=n.SHORT;else if(u instanceof Uint32Array)d=n.UNSIGNED_INT;else if(u instanceof Int32Array)d=n.INT;else if(u instanceof Int8Array)d=n.BYTE;else if(u instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:d,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,a),f.length===0)n.bufferSubData(u,0,c);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){const g=f[h],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){const _=f[d];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class uo extends ii{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const x=p*h-o;for(let M=0;M<u;M++){const E=M*f-s;g.push(E,-x,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const M=x+u*p,E=x+u*(p+1),C=x+1+u*(p+1),y=x+1+u*p;d.push(M,E,y),d.push(E,C,y)}this.setIndex(d),this.setAttribute("position",new fn(g,3)),this.setAttribute("normal",new fn(_,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.widthSegments,e.heightSegments)}}var bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Em=`#ifdef USE_ALPHAHASH
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
#endif`,wm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cm=`#ifdef USE_AOMAP
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
#endif`,Lm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pm=`#ifdef USE_BATCHING
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
#endif`,Im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Um=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fm=`#ifdef USE_IRIDESCENCE
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
#endif`,Om=`#ifdef USE_BUMPMAP
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
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qm=`#define PI 3.141592653589793
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
} // validated`,Ym=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$m=`vec3 transformedNormal = objectNormal;
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
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",eg=`
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
}`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,rg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
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
#endif`,og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ug=`#ifdef USE_GRADIENTMAP
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
}`,fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pg=`uniform bool receiveShadow;
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
#endif`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mg=`PhysicalMaterial material;
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
#endif`,Sg=`struct PhysicalMaterial {
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
}`,yg=`
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
#endif`,bg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ag=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ig=`#if defined( USE_POINTS_UV )
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
#endif`,Dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kg=`#ifdef USE_MORPHTARGETS
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
#endif`,Bg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xg=`#ifdef USE_NORMALMAP
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
#endif`,qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qg=`vec4 mvPosition = vec4( transformed, 1.0 );
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
#endif`,h_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d_=`#ifdef USE_SPECULARMAP
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
}`,C_=`#if DEPTH_PACKING == 3200
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
}`,L_=`#define DISTANCE
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
}`,N_=`uniform vec3 diffuse;
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
}`,F_=`#include <common>
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
}`,k_=`#define LAMBERT
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
}`,K_=`#define TOON
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
}`,j_=`uniform float size;
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
}`,e1=`uniform float rotation;
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
}`,t1=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:bm,alphahash_pars_fragment:Em,alphamap_fragment:wm,alphamap_pars_fragment:Tm,alphatest_fragment:Am,alphatest_pars_fragment:Rm,aomap_fragment:Cm,aomap_pars_fragment:Lm,batching_pars_vertex:Pm,batching_vertex:Im,begin_vertex:Dm,beginnormal_vertex:Um,bsdfs:Nm,iridescence_fragment:Fm,bumpmap_pars_fragment:Om,clipping_planes_fragment:km,clipping_planes_pars_fragment:Bm,clipping_planes_pars_vertex:zm,clipping_planes_vertex:Hm,color_fragment:Gm,color_pars_fragment:Vm,color_pars_vertex:Wm,color_vertex:Xm,common:qm,cube_uv_reflection_fragment:Ym,defaultnormal_vertex:$m,displacementmap_pars_vertex:Km,displacementmap_vertex:jm,emissivemap_fragment:Zm,emissivemap_pars_fragment:Jm,colorspace_fragment:Qm,colorspace_pars_fragment:eg,envmap_fragment:tg,envmap_common_pars_fragment:ng,envmap_pars_fragment:ig,envmap_pars_vertex:rg,envmap_physical_pars_fragment:mg,envmap_vertex:sg,fog_vertex:og,fog_pars_vertex:ag,fog_fragment:lg,fog_pars_fragment:cg,gradientmap_pars_fragment:ug,lightmap_pars_fragment:fg,lights_lambert_fragment:hg,lights_lambert_pars_fragment:dg,lights_pars_begin:pg,lights_toon_fragment:gg,lights_toon_pars_fragment:_g,lights_phong_fragment:vg,lights_phong_pars_fragment:xg,lights_physical_fragment:Mg,lights_physical_pars_fragment:Sg,lights_fragment_begin:yg,lights_fragment_maps:bg,lights_fragment_end:Eg,logdepthbuf_fragment:wg,logdepthbuf_pars_fragment:Tg,logdepthbuf_pars_vertex:Ag,logdepthbuf_vertex:Rg,map_fragment:Cg,map_pars_fragment:Lg,map_particle_fragment:Pg,map_particle_pars_fragment:Ig,metalnessmap_fragment:Dg,metalnessmap_pars_fragment:Ug,morphinstance_vertex:Ng,morphcolor_vertex:Fg,morphnormal_vertex:Og,morphtarget_pars_vertex:kg,morphtarget_vertex:Bg,normal_fragment_begin:zg,normal_fragment_maps:Hg,normal_pars_fragment:Gg,normal_pars_vertex:Vg,normal_vertex:Wg,normalmap_pars_fragment:Xg,clearcoat_normal_fragment_begin:qg,clearcoat_normal_fragment_maps:Yg,clearcoat_pars_fragment:$g,iridescence_pars_fragment:Kg,opaque_fragment:jg,packing:Zg,premultiplied_alpha_fragment:Jg,project_vertex:Qg,dithering_fragment:e_,dithering_pars_fragment:t_,roughnessmap_fragment:n_,roughnessmap_pars_fragment:i_,shadowmap_pars_fragment:r_,shadowmap_pars_vertex:s_,shadowmap_vertex:o_,shadowmask_pars_fragment:a_,skinbase_vertex:l_,skinning_pars_vertex:c_,skinning_vertex:u_,skinnormal_vertex:f_,specularmap_fragment:h_,specularmap_pars_fragment:d_,tonemapping_fragment:p_,tonemapping_pars_fragment:m_,transmission_fragment:g_,transmission_pars_fragment:__,uv_pars_fragment:v_,uv_pars_vertex:x_,uv_vertex:M_,worldpos_vertex:S_,background_vert:y_,background_frag:b_,backgroundCube_vert:E_,backgroundCube_frag:w_,cube_vert:T_,cube_frag:A_,depth_vert:R_,depth_frag:C_,distanceRGBA_vert:L_,distanceRGBA_frag:P_,equirect_vert:I_,equirect_frag:D_,linedashed_vert:U_,linedashed_frag:N_,meshbasic_vert:F_,meshbasic_frag:O_,meshlambert_vert:k_,meshlambert_frag:B_,meshmatcap_vert:z_,meshmatcap_frag:H_,meshnormal_vert:G_,meshnormal_frag:V_,meshphong_vert:W_,meshphong_frag:X_,meshphysical_vert:q_,meshphysical_frag:Y_,meshtoon_vert:$_,meshtoon_frag:K_,points_vert:j_,points_frag:Z_,shadow_vert:J_,shadow_frag:Q_,sprite_vert:e1,sprite_frag:t1},me={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},li={basic:{uniforms:_n([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:_n([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Qe(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:_n([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:_n([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:_n([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Qe(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:_n([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:_n([me.points,me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:_n([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:_n([me.common,me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:_n([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:_n([me.sprite,me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:_n([me.common,me.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:_n([me.lights,me.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};li.physical={uniforms:_n([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Bo={r:0,b:0,g:0},ur=new en,n1=new Xe;function i1(n,e,t,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,u,c,f=null,h=0,d=null;function g(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?t:e).get(M)),M}function _(x){let M=!1;const E=g(x);E===null?p(a,l):E&&E.isColor&&(p(E,1),M=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,M){const E=g(M);E&&(E.isCubeTexture||E.mapping===xa)?(c===void 0&&(c=new xt(new cn(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:ys(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,y,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),ur.copy(M.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(n1.makeRotationFromEuler(ur)),c.material.toneMapped=ct.getTransfer(E.colorSpace)!==yt,(f!==E||h!==E.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,h=E.version,d=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new xt(new uo(2,2),new nr({name:"BackgroundMaterial",uniforms:ys(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.toneMapped=ct.getTransfer(E.colorSpace)!==yt,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||h!==E.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=E,h=E.version,d=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function p(x,M){x.getRGB(Bo,Oh(n)),i.buffers.color.setClear(Bo.r,Bo.g,Bo.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m}}function r1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(v,b,P,I,O){let U=!1;const N=f(I,P,b);s!==N&&(s=N,u(s.object)),U=d(v,I,P,O),U&&g(v,I,P,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,E(v,b,P,I),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function u(v){return n.bindVertexArray(v)}function c(v){return n.deleteVertexArray(v)}function f(v,b,P){const I=P.wireframe===!0;let O=i[v.id];O===void 0&&(O={},i[v.id]=O);let U=O[b.id];U===void 0&&(U={},O[b.id]=U);let N=U[I];return N===void 0&&(N=h(l()),U[I]=N),N}function h(v){const b=[],P=[],I=[];for(let O=0;O<t;O++)b[O]=0,P[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:P,attributeDivisors:I,object:v,attributes:{},index:null}}function d(v,b,P,I){const O=s.attributes,U=b.attributes;let N=0;const q=P.getAttributes();for(const G in q)if(q[G].location>=0){const ae=O[G];let re=U[G];if(re===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(re=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(re=v.instanceColor)),ae===void 0||ae.attribute!==re||re&&ae.data!==re.data)return!0;N++}return s.attributesNum!==N||s.index!==I}function g(v,b,P,I){const O={},U=b.attributes;let N=0;const q=P.getAttributes();for(const G in q)if(q[G].location>=0){let ae=U[G];ae===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(ae=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(ae=v.instanceColor));const re={};re.attribute=ae,ae&&ae.data&&(re.data=ae.data),O[G]=re,N++}s.attributes=O,s.attributesNum=N,s.index=I}function _(){const v=s.newAttributes;for(let b=0,P=v.length;b<P;b++)v[b]=0}function m(v){p(v,0)}function p(v,b){const P=s.newAttributes,I=s.enabledAttributes,O=s.attributeDivisors;P[v]=1,I[v]===0&&(n.enableVertexAttribArray(v),I[v]=1),O[v]!==b&&(n.vertexAttribDivisor(v,b),O[v]=b)}function x(){const v=s.newAttributes,b=s.enabledAttributes;for(let P=0,I=b.length;P<I;P++)b[P]!==v[P]&&(n.disableVertexAttribArray(P),b[P]=0)}function M(v,b,P,I,O,U,N){N===!0?n.vertexAttribIPointer(v,b,P,O,U):n.vertexAttribPointer(v,b,P,I,O,U)}function E(v,b,P,I){_();const O=I.attributes,U=P.getAttributes(),N=b.defaultAttributeValues;for(const q in U){const G=U[q];if(G.location>=0){let oe=O[q];if(oe===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(oe=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(oe=v.instanceColor)),oe!==void 0){const ae=oe.normalized,re=oe.itemSize,Me=e.get(oe);if(Me===void 0)continue;const Ce=Me.buffer,z=Me.type,Y=Me.bytesPerElement,Z=z===n.INT||z===n.UNSIGNED_INT||oe.gpuType===nc;if(oe.isInterleavedBufferAttribute){const J=oe.data,V=J.stride,se=oe.offset;if(J.isInstancedInterleavedBuffer){for(let le=0;le<G.locationSize;le++)p(G.location+le,J.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let le=0;le<G.locationSize;le++)m(G.location+le);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let le=0;le<G.locationSize;le++)M(G.location+le,re/G.locationSize,z,ae,V*Y,(se+re/G.locationSize*le)*Y,Z)}else{if(oe.isInstancedBufferAttribute){for(let J=0;J<G.locationSize;J++)p(G.location+J,oe.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let J=0;J<G.locationSize;J++)m(G.location+J);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let J=0;J<G.locationSize;J++)M(G.location+J,re/G.locationSize,z,ae,re*Y,re/G.locationSize*J*Y,Z)}}else if(N!==void 0){const ae=N[q];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(G.location,ae);break;case 3:n.vertexAttrib3fv(G.location,ae);break;case 4:n.vertexAttrib4fv(G.location,ae);break;default:n.vertexAttrib1fv(G.location,ae)}}}}x()}function C(){A();for(const v in i){const b=i[v];for(const P in b){const I=b[P];for(const O in I)c(I[O].object),delete I[O];delete b[P]}delete i[v]}}function y(v){if(i[v.id]===void 0)return;const b=i[v.id];for(const P in b){const I=b[P];for(const O in I)c(I[O].object),delete I[O];delete b[P]}delete i[v.id]}function S(v){for(const b in i){const P=i[b];if(P[v.id]===void 0)continue;const I=P[v.id];for(const O in I)c(I[O].object),delete I[O];delete P[v.id]}}function A(){R(),o=!0,s!==r&&(s=r,u(s.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:R,dispose:C,releaseStatesOfGeometry:y,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function s1(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let d=0;for(let g=0;g<f;g++)d+=c[g];t.update(d,i,1)}function l(u,c,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<u.length;g++)o(u[g],c[g],h[g]);else{d.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=c[_];for(let _=0;_<h.length;_++)t.update(g,i,h[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function o1(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(S){return!(S!==Hn&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const A=S===ao&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Ui&&i.convert(S)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==ui&&!A)}function l(S){if(S==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const S=e.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,y=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:E,vertexTextures:C,maxSamples:y}}function a1(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new _r,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const x=s?0:i,M=x*4;let E=p.clippingState||null;l.value=E,E=c(g,h,M,d);for(let C=0;C!==M;++C)E[C]=t[C];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,E=d;M!==_;++M,E+=4)o.copy(f[M]).applyMatrix4(x,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function l1(n){let e=new WeakMap;function t(o,a){return a===s0?o.mapping=vs:a===o0&&(o.mapping=xs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===s0||a===o0)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new xm(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class pc extends kh{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ss=4,yu=[.125,.215,.35,.446,.526,.582],yr=20,rl=new pc,bu=new Qe;let sl=null,ol=0,al=0,ll=!1;const vr=(1+Math.sqrt(5))/2,Kr=1/vr,Eu=[new D(-vr,Kr,0),new D(vr,Kr,0),new D(-Kr,0,vr),new D(Kr,0,vr),new D(0,vr,-Kr),new D(0,vr,Kr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class wu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){sl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Au(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sl,ol,al),this._renderer.xr.enabled=ll,e.scissorTest=!1,zo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sl=this._renderer.getRenderTarget(),ol=this._renderer.getActiveCubeFace(),al=this._renderer.getActiveMipmapLevel(),ll=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:ao,format:Hn,colorSpace:ir,depthBuffer:!1},r=Tu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=c1(s)),this._blurMaterial=u1(s,e,t)}return r}_compileMaterial(e){const t=new xt(this._lodPlanes[0],e);this._renderer.compile(t,rl)}_sceneToCubeUV(e,t,i,r){const a=new Mn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(bu),c.toneMapping=er,c.autoClear=!1;const d=new hn({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new xt(new cn,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(bu),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const M=this._cubeSize;zo(r,x*M,p>2?M:0,M,M),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===vs||e.mapping===xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Au());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new xt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;zo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,rl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Eu[(r-s-1)%Eu.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new xt(this._lodPlanes[r],u),h=u.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*yr-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):yr;m>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yr}`);const p=[];let x=0;for(let S=0;S<yr;++S){const A=S/_,R=Math.exp(-A*A/2);p.push(R),S===0?x+=R:S<m&&(x+=2*R)}for(let S=0;S<p.length;S++)p[S]=p[S]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;const E=this._sizeLods[r],C=3*E*(r>M-ss?r-M+ss:0),y=4*(this._cubeSize-E);zo(t,C,y,3*E,2*E),l.setRenderTarget(t),l.render(f,rl)}}function c1(n){const e=[],t=[],i=[];let r=n;const s=n-ss+1+yu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ss?l=yu[o-n+ss-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],d=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*d),M=new Float32Array(m*g*d),E=new Float32Array(p*g*d);for(let y=0;y<d;y++){const S=y%3*2/3-1,A=y>2?0:-1,R=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];x.set(R,_*g*y),M.set(h,m*g*y);const v=[y,y,y,y,y,y];E.set(v,p*g*y)}const C=new ii;C.setAttribute("position",new An(x,_)),C.setAttribute("uv",new An(M,m)),C.setAttribute("faceIndex",new An(E,p)),e.push(C),r>ss&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Tu(n,e,t){const i=new Lr(n,e,t);return i.texture.mapping=xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function u1(n,e,t){const i=new Float32Array(yr),r=new D(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mc(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Au(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Ru(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function mc(){return`

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
	`}function f1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===s0||l===o0,c=l===vs||l===xs;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new wu(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return u&&d&&d.height>0||c&&d&&r(d)?(t===null&&(t=new wu(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function h1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&sa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function d1(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],n.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let M=0,E=x.length;M<E;M+=3){const C=x[M+0],y=x[M+1],S=x[M+2];h.push(C,y,y,S,S,C)}}else if(g!==void 0){const x=g.array;_=g.version;for(let M=0,E=x.length/3-1;M<E;M+=3){const C=M+0,y=M+1,S=M+2;h.push(C,y,y,S,S,C)}}else return;const m=new(Ih(h)?Fh:hc)(h,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function c(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function p1(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,s,h*o),t.update(d,i,1)}function u(h,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,h*o,g),t.update(d,i,g))}function c(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function f(h,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)u(h[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,h,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=d[x];for(let x=0;x<_.length;x++)t.update(p,i,_[x])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function m1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function g1(n,e,t){const i=new WeakMap,r=new bt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let R=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",R)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let E=a.attributes.position.count*M,C=1;E>e.maxTextureSize&&(C=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const y=new Float32Array(E*C*4*f),S=new Uh(y,E,C,f);S.type=ui,S.needsUpdate=!0;const A=M*4;for(let v=0;v<f;v++){const b=m[v],P=p[v],I=x[v],O=E*C*4*v;for(let U=0;U<b.count;U++){const N=U*A;d===!0&&(r.fromBufferAttribute(b,U),y[O+N+0]=r.x,y[O+N+1]=r.y,y[O+N+2]=r.z,y[O+N+3]=0),g===!0&&(r.fromBufferAttribute(P,U),y[O+N+4]=r.x,y[O+N+5]=r.y,y[O+N+6]=r.z,y[O+N+7]=0),_===!0&&(r.fromBufferAttribute(I,U),y[O+N+8]=r.x,y[O+N+9]=r.y,y[O+N+10]=r.z,y[O+N+11]=I.itemSize===4?r.w:1)}}h={count:f,texture:S,size:new nt(E,C)},i.set(a,h),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<u.length;_++)d+=u[_];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function _1(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class Hh extends un{constructor(e,t,i,r,s,o,a,l,u,c=fs){if(c!==fs&&c!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===fs&&(i=Cr),i===void 0&&c===Ss&&(i=Ms),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wn,this.minFilter=l!==void 0?l:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Gh=new un,Cu=new Hh(1,1),Vh=new Uh,Wh=new im,Xh=new Bh,Lu=[],Pu=[],Iu=new Float32Array(16),Du=new Float32Array(9),Uu=new Float32Array(4);function Rs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Lu[r];if(s===void 0&&(s=new Float32Array(r),Lu[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Sa(n,e){let t=Pu[e];t===void 0&&(t=new Int32Array(e),Pu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function v1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function x1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),Wt(t,e)}}function M1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),Wt(t,e)}}function S1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),Wt(t,e)}}function y1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;Uu.set(i),n.uniformMatrix2fv(this.addr,!1,Uu),Wt(t,i)}}function b1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;Du.set(i),n.uniformMatrix3fv(this.addr,!1,Du),Wt(t,i)}}function E1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,i))return;Iu.set(i),n.uniformMatrix4fv(this.addr,!1,Iu),Wt(t,i)}}function w1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function T1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2iv(this.addr,e),Wt(t,e)}}function A1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3iv(this.addr,e),Wt(t,e)}}function R1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4iv(this.addr,e),Wt(t,e)}}function C1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function L1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2uiv(this.addr,e),Wt(t,e)}}function P1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3uiv(this.addr,e),Wt(t,e)}}function I1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4uiv(this.addr,e),Wt(t,e)}}function D1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Cu.compareFunction=Ph,s=Cu):s=Gh,t.setTexture2D(e||s,r)}function U1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Wh,r)}function N1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Xh,r)}function F1(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Vh,r)}function O1(n){switch(n){case 5126:return v1;case 35664:return x1;case 35665:return M1;case 35666:return S1;case 35674:return y1;case 35675:return b1;case 35676:return E1;case 5124:case 35670:return w1;case 35667:case 35671:return T1;case 35668:case 35672:return A1;case 35669:case 35673:return R1;case 5125:return C1;case 36294:return L1;case 36295:return P1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return D1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return F1}}function k1(n,e){n.uniform1fv(this.addr,e)}function B1(n,e){const t=Rs(e,this.size,2);n.uniform2fv(this.addr,t)}function z1(n,e){const t=Rs(e,this.size,3);n.uniform3fv(this.addr,t)}function H1(n,e){const t=Rs(e,this.size,4);n.uniform4fv(this.addr,t)}function G1(n,e){const t=Rs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function V1(n,e){const t=Rs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function W1(n,e){const t=Rs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function X1(n,e){n.uniform1iv(this.addr,e)}function q1(n,e){n.uniform2iv(this.addr,e)}function Y1(n,e){n.uniform3iv(this.addr,e)}function $1(n,e){n.uniform4iv(this.addr,e)}function K1(n,e){n.uniform1uiv(this.addr,e)}function j1(n,e){n.uniform2uiv(this.addr,e)}function Z1(n,e){n.uniform3uiv(this.addr,e)}function J1(n,e){n.uniform4uiv(this.addr,e)}function Q1(n,e,t){const i=this.cache,r=e.length,s=Sa(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Gh,s[o])}function ev(n,e,t){const i=this.cache,r=e.length,s=Sa(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Wh,s[o])}function tv(n,e,t){const i=this.cache,r=e.length,s=Sa(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Xh,s[o])}function nv(n,e,t){const i=this.cache,r=e.length,s=Sa(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Vh,s[o])}function iv(n){switch(n){case 5126:return k1;case 35664:return B1;case 35665:return z1;case 35666:return H1;case 35674:return G1;case 35675:return V1;case 35676:return W1;case 5124:case 35670:return X1;case 35667:case 35671:return q1;case 35668:case 35672:return Y1;case 35669:case 35673:return $1;case 5125:return K1;case 36294:return j1;case 36295:return Z1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return Q1;case 35679:case 36299:case 36307:return ev;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return nv}}class rv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=O1(t.type)}}class sv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iv(t.type)}}class ov{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const cl=/(\w+)(\])?(\[|\.)?/g;function Nu(n,e){n.seq.push(e),n.map[e.id]=e}function av(n,e,t){const i=n.name,r=i.length;for(cl.lastIndex=0;;){const s=cl.exec(i),o=cl.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Nu(t,u===void 0?new rv(a,n,e):new sv(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new ov(a),Nu(t,f)),t=f}}}class oa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);av(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Fu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const lv=37297;let cv=0;function uv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function fv(n){const e=ct.getPrimaries(ct.workingColorSpace),t=ct.getPrimaries(n);let i;switch(e===t?i="":e===ha&&t===fa?i="LinearDisplayP3ToLinearSRGB":e===fa&&t===ha&&(i="LinearSRGBToLinearDisplayP3"),n){case ir:case Ma:return[i,"LinearTransferOETF"];case Pn:case lc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ou(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+uv(n.getShaderSource(e),o)}else return r}function hv(n,e){const t=fv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function dv(n,e){let t;switch(e){case pp:t="Linear";break;case mp:t="Reinhard";break;case gp:t="Cineon";break;case tc:t="ACESFilmic";break;case vp:t="AgX";break;case xp:t="Neutral";break;case _p:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ho=new D;function pv(){ct.getLuminanceCoefficients(Ho);const n=Ho.x.toFixed(4),e=Ho.y.toFixed(4),t=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function gv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _v(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function qs(n){return n!==""}function ku(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function U0(n){return n.replace(vv,Mv)}const xv=new Map;function Mv(n,e){let t=qe[e];if(t===void 0){const i=xv.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return U0(t)}const Sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zu(n){return n.replace(Sv,yv)}function yv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function bv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===_h?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function Ev(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case vs:case xs:e="ENVMAP_TYPE_CUBE";break;case xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function Tv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vh:e="ENVMAP_BLENDING_MULTIPLY";break;case hp:e="ENVMAP_BLENDING_MIX";break;case dp:e="ENVMAP_BLENDING_ADD";break}return e}function Av(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Rv(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=bv(t),u=Ev(t),c=wv(t),f=Tv(t),h=Av(t),d=mv(t),g=gv(s),_=r.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qs).join(`
`),p.length>0&&(p+=`
`)):(m=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),p=[Hu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==er?"#define TONE_MAPPING":"",t.toneMapping!==er?qe.tonemapping_pars_fragment:"",t.toneMapping!==er?dv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,hv("linearToOutputTexel",t.outputColorSpace),pv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qs).join(`
`)),o=U0(o),o=ku(o,t),o=Bu(o,t),a=U0(a),a=ku(a,t),a=Bu(a,t),o=zu(o),a=zu(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+o,E=x+p+a,C=Fu(r,r.VERTEX_SHADER,M),y=Fu(r,r.FRAGMENT_SHADER,E);r.attachShader(_,C),r.attachShader(_,y),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function S(b){if(n.debug.checkShaderErrors){const P=r.getProgramInfoLog(_).trim(),I=r.getShaderInfoLog(C).trim(),O=r.getShaderInfoLog(y).trim();let U=!0,N=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,y);else{const q=Ou(r,C,"vertex"),G=Ou(r,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+P+`
`+q+`
`+G)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(I===""||O==="")&&(N=!1);N&&(b.diagnostics={runnable:U,programLog:P,vertexShader:{log:I,prefix:m},fragmentShader:{log:O,prefix:p}})}r.deleteShader(C),r.deleteShader(y),A=new oa(r,_),R=_v(r,_)}let A;this.getUniforms=function(){return A===void 0&&S(this),A};let R;this.getAttributes=function(){return R===void 0&&S(this),R};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,lv)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=y,this}let Cv=0;class Lv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Pv(e),t.set(e,i)),i}}class Pv{constructor(e){this.id=Cv++,this.code=e,this.usedTimes=0}}function Iv(n,e,t,i,r,s,o){const a=new fc,l=new Lv,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,d=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return u.add(v),v===0?"uv":`uv${v}`}function p(v,b,P,I,O){const U=I.fog,N=O.geometry,q=v.isMeshStandardMaterial?I.environment:null,G=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),oe=G&&G.mapping===xa?G.image.height:null,ae=_[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const re=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Me=re!==void 0?re.length:0;let Ce=0;N.morphAttributes.position!==void 0&&(Ce=1),N.morphAttributes.normal!==void 0&&(Ce=2),N.morphAttributes.color!==void 0&&(Ce=3);let z,Y,Z,J;if(ae){const jt=li[ae];z=jt.vertexShader,Y=jt.fragmentShader}else z=v.vertexShader,Y=v.fragmentShader,l.update(v),Z=l.getVertexShaderID(v),J=l.getFragmentShaderID(v);const V=n.getRenderTarget(),se=O.isInstancedMesh===!0,le=O.isBatchedMesh===!0,Le=!!v.map,Oe=!!v.matcap,F=!!G,Mt=!!v.aoMap,Ge=!!v.lightMap,$e=!!v.bumpMap,De=!!v.normalMap,it=!!v.displacementMap,Ue=!!v.emissiveMap,L=!!v.metalnessMap,w=!!v.roughnessMap,W=v.anisotropy>0,K=v.clearcoat>0,te=v.dispersion>0,Q=v.iridescence>0,Re=v.sheen>0,de=v.transmission>0,ge=W&&!!v.anisotropyMap,Ke=K&&!!v.clearcoatMap,ce=K&&!!v.clearcoatNormalMap,pe=K&&!!v.clearcoatRoughnessMap,ke=Q&&!!v.iridescenceMap,Be=Q&&!!v.iridescenceThicknessMap,we=Re&&!!v.sheenColorMap,Ze=Re&&!!v.sheenRoughnessMap,ze=!!v.specularMap,dt=!!v.specularColorMap,B=!!v.specularIntensityMap,ve=de&&!!v.transmissionMap,j=de&&!!v.thicknessMap,ne=!!v.gradientMap,xe=!!v.alphaMap,Se=v.alphaTest>0,Je=!!v.alphaHash,It=!!v.extensions;let Xt=er;v.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Xt=n.toneMapping);const je={shaderID:ae,shaderType:v.type,shaderName:v.name,vertexShader:z,fragmentShader:Y,defines:v.defines,customVertexShaderID:Z,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:le,batchingColor:le&&O._colorsTexture!==null,instancing:se,instancingColor:se&&O.instanceColor!==null,instancingMorph:se&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:V===null?n.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ir,alphaToCoverage:!!v.alphaToCoverage,map:Le,matcap:Oe,envMap:F,envMapMode:F&&G.mapping,envMapCubeUVHeight:oe,aoMap:Mt,lightMap:Ge,bumpMap:$e,normalMap:De,displacementMap:d&&it,emissiveMap:Ue,normalMapObjectSpace:De&&v.normalMapType===Ep,normalMapTangentSpace:De&&v.normalMapType===Lh,metalnessMap:L,roughnessMap:w,anisotropy:W,anisotropyMap:ge,clearcoat:K,clearcoatMap:Ke,clearcoatNormalMap:ce,clearcoatRoughnessMap:pe,dispersion:te,iridescence:Q,iridescenceMap:ke,iridescenceThicknessMap:Be,sheen:Re,sheenColorMap:we,sheenRoughnessMap:Ze,specularMap:ze,specularColorMap:dt,specularIntensityMap:B,transmission:de,transmissionMap:ve,thicknessMap:j,gradientMap:ne,opaque:v.transparent===!1&&v.blending===us&&v.alphaToCoverage===!1,alphaMap:xe,alphaTest:Se,alphaHash:Je,combine:v.combine,mapUv:Le&&m(v.map.channel),aoMapUv:Mt&&m(v.aoMap.channel),lightMapUv:Ge&&m(v.lightMap.channel),bumpMapUv:$e&&m(v.bumpMap.channel),normalMapUv:De&&m(v.normalMap.channel),displacementMapUv:it&&m(v.displacementMap.channel),emissiveMapUv:Ue&&m(v.emissiveMap.channel),metalnessMapUv:L&&m(v.metalnessMap.channel),roughnessMapUv:w&&m(v.roughnessMap.channel),anisotropyMapUv:ge&&m(v.anisotropyMap.channel),clearcoatMapUv:Ke&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ce&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&m(v.sheenRoughnessMap.channel),specularMapUv:ze&&m(v.specularMap.channel),specularColorMapUv:dt&&m(v.specularColorMap.channel),specularIntensityMapUv:B&&m(v.specularIntensityMap.channel),transmissionMapUv:ve&&m(v.transmissionMap.channel),thicknessMapUv:j&&m(v.thicknessMap.channel),alphaMapUv:xe&&m(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(De||W),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(Le||xe),fog:!!U,useFog:v.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ce,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Le&&v.map.isVideoTexture===!0&&ct.getTransfer(v.map.colorSpace)===yt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ai,flipSided:v.side===Tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:It&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&v.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return je.vertexUv1s=u.has(1),je.vertexUv2s=u.has(2),je.vertexUv3s=u.has(3),u.clear(),je}function x(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)b.push(P),b.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(M(b,v),E(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function M(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function E(v,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),v.push(a.mask)}function C(v){const b=_[v.type];let P;if(b){const I=li[b];P=mm.clone(I.uniforms)}else P=v.uniforms;return P}function y(v,b){let P;for(let I=0,O=c.length;I<O;I++){const U=c[I];if(U.cacheKey===b){P=U,++P.usedTimes;break}}return P===void 0&&(P=new Rv(n,b,v,s),c.push(P)),P}function S(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),v.destroy()}}function A(v){l.remove(v)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:C,acquireProgram:y,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:R}}function Dv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Uv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Gu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,d,g,_,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,h,d,g,_,m){const p=o(f,h,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function u(f,h){t.length>1&&t.sort(f||Uv),i.length>1&&i.sort(h||Gu),r.length>1&&r.sort(h||Gu)}function c(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function Nv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Vu,n.set(i,[o])):r>=s.length?(o=new Vu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Fv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Qe};break;case"SpotLight":t={position:new D,direction:new D,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function Ov(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let kv=0;function Bv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function zv(n){const e=new Fv,t=Ov(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new D);const r=new D,s=new Xe,o=new Xe;function a(u){let c=0,f=0,h=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,x=0,M=0,E=0,C=0,y=0,S=0;u.sort(Bv);for(let R=0,v=u.length;R<v;R++){const b=u[R],P=b.color,I=b.intensity,O=b.distance,U=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)c+=P.r*I,f+=P.g*I,h+=P.b*I;else if(b.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(b.sh.coefficients[N],I);S++}else if(b.isDirectionalLight){const N=e.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const q=b.shadow,G=t.get(b);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,i.directionalShadow[d]=G,i.directionalShadowMap[d]=U,i.directionalShadowMatrix[d]=b.shadow.matrix,x++}i.directional[d]=N,d++}else if(b.isSpotLight){const N=e.get(b);N.position.setFromMatrixPosition(b.matrixWorld),N.color.copy(P).multiplyScalar(I),N.distance=O,N.coneCos=Math.cos(b.angle),N.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),N.decay=b.decay,i.spot[_]=N;const q=b.shadow;if(b.map&&(i.spotLightMap[C]=b.map,C++,q.updateMatrices(b),b.castShadow&&y++),i.spotLightMatrix[_]=q.matrix,b.castShadow){const G=t.get(b);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=U,E++}_++}else if(b.isRectAreaLight){const N=e.get(b);N.color.copy(P).multiplyScalar(I),N.halfWidth.set(b.width*.5,0,0),N.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=N,m++}else if(b.isPointLight){const N=e.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),N.distance=b.distance,N.decay=b.decay,b.castShadow){const q=b.shadow,G=t.get(b);G.shadowIntensity=q.intensity,G.shadowBias=q.bias,G.shadowNormalBias=q.normalBias,G.shadowRadius=q.radius,G.shadowMapSize=q.mapSize,G.shadowCameraNear=q.camera.near,G.shadowCameraFar=q.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=U,i.pointShadowMatrix[g]=b.shadow.matrix,M++}i.point[g]=N,g++}else if(b.isHemisphereLight){const N=e.get(b);N.skyColor.copy(b.color).multiplyScalar(I),N.groundColor.copy(b.groundColor).multiplyScalar(I),i.hemi[p]=N,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const A=i.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==x||A.numPointShadows!==M||A.numSpotShadows!==E||A.numSpotMaps!==C||A.numLightProbes!==S)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+C-y,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=S,A.directionalLength=d,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=x,A.numPointShadows=M,A.numSpotShadows=E,A.numSpotMaps=C,A.numLightProbes=S,i.version=kv++)}function l(u,c){let f=0,h=0,d=0,g=0,_=0;const m=c.matrixWorldInverse;for(let p=0,x=u.length;p<x;p++){const M=u[p];if(M.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(M.isSpotLight){const E=i.spot[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Wu(n){const e=new zv(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Hv(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Wu(n),e.set(r,[a])):s>=o.length?(a=new Wu(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Gv extends co{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vv extends co{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xv=`uniform sampler2D shadow_pass;
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
}`;function qv(n,e,t){let i=new dc;const r=new nt,s=new nt,o=new bt,a=new Gv({depthPacking:bp}),l=new Vv,u={},c=t.maxTextureSize,f={[Di]:Tn,[Tn]:Di,[Ai]:Ai},h=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Wv,fragmentShader:Xv}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new ii;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_h;let p=this.type;this.render=function(y,S,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const R=n.getRenderTarget(),v=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Qi),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const I=p!==Ti&&this.type===Ti,O=p===Ti&&this.type!==Ti;for(let U=0,N=y.length;U<N;U++){const q=y[U],G=q.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const oe=G.getFrameExtents();if(r.multiply(oe),s.copy(G.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/oe.x),r.x=s.x*oe.x,G.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/oe.y),r.y=s.y*oe.y,G.mapSize.y=s.y)),G.map===null||I===!0||O===!0){const re=this.type!==Ti?{minFilter:wn,magFilter:wn}:{};G.map!==null&&G.map.dispose(),G.map=new Lr(r.x,r.y,re),G.map.texture.name=q.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ae=G.getViewportCount();for(let re=0;re<ae;re++){const Me=G.getViewport(re);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),P.viewport(o),G.updateMatrices(q,re),i=G.getFrustum(),E(S,A,G.camera,q,this.type)}G.isPointLightShadow!==!0&&this.type===Ti&&x(G,A),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(R,v,b)};function x(y,S){const A=e.update(_);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,d.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Lr(r.x,r.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(S,null,A,h,_,null),d.uniforms.shadow_pass.value=y.mapPass.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(S,null,A,d,_,null)}function M(y,S,A,R){let v=null;const b=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(b!==void 0)v=b;else if(v=A.isPointLight===!0?l:a,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const P=v.uuid,I=S.uuid;let O=u[P];O===void 0&&(O={},u[P]=O);let U=O[I];U===void 0&&(U=v.clone(),O[I]=U,S.addEventListener("dispose",C)),v=U}if(v.visible=S.visible,v.wireframe=S.wireframe,R===Ti?v.side=S.shadowSide!==null?S.shadowSide:S.side:v.side=S.shadowSide!==null?S.shadowSide:f[S.side],v.alphaMap=S.alphaMap,v.alphaTest=S.alphaTest,v.map=S.map,v.clipShadows=S.clipShadows,v.clippingPlanes=S.clippingPlanes,v.clipIntersection=S.clipIntersection,v.displacementMap=S.displacementMap,v.displacementScale=S.displacementScale,v.displacementBias=S.displacementBias,v.wireframeLinewidth=S.wireframeLinewidth,v.linewidth=S.linewidth,A.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const P=n.properties.get(v);P.light=A}return v}function E(y,S,A,R,v){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===Ti)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);const I=e.update(y),O=y.material;if(Array.isArray(O)){const U=I.groups;for(let N=0,q=U.length;N<q;N++){const G=U[N],oe=O[G.materialIndex];if(oe&&oe.visible){const ae=M(y,oe,R,v);y.onBeforeShadow(n,y,S,A,I,ae,G),n.renderBufferDirect(A,null,I,ae,y,G),y.onAfterShadow(n,y,S,A,I,ae,G)}}}else if(O.visible){const U=M(y,O,R,v);y.onBeforeShadow(n,y,S,A,I,U,null),n.renderBufferDirect(A,null,I,U,y,null),y.onAfterShadow(n,y,S,A,I,U,null)}}const P=y.children;for(let I=0,O=P.length;I<O;I++)E(P[I],S,A,R,v)}function C(y){y.target.removeEventListener("dispose",C);for(const A in u){const R=u[A],v=y.target.uuid;v in R&&(R[v].dispose(),delete R[v])}}}const Yv={[Jl]:Ql,[e0]:i0,[t0]:r0,[_s]:n0,[Ql]:Jl,[i0]:e0,[r0]:t0,[n0]:_s};function $v(n){function e(){let B=!1;const ve=new bt;let j=null;const ne=new bt(0,0,0,0);return{setMask:function(xe){j!==xe&&!B&&(n.colorMask(xe,xe,xe,xe),j=xe)},setLocked:function(xe){B=xe},setClear:function(xe,Se,Je,It,Xt){Xt===!0&&(xe*=It,Se*=It,Je*=It),ve.set(xe,Se,Je,It),ne.equals(ve)===!1&&(n.clearColor(xe,Se,Je,It),ne.copy(ve))},reset:function(){B=!1,j=null,ne.set(-1,0,0,0)}}}function t(){let B=!1,ve=!1,j=null,ne=null,xe=null;return{setReversed:function(Se){ve=Se},setTest:function(Se){Se?Z(n.DEPTH_TEST):J(n.DEPTH_TEST)},setMask:function(Se){j!==Se&&!B&&(n.depthMask(Se),j=Se)},setFunc:function(Se){if(ve&&(Se=Yv[Se]),ne!==Se){switch(Se){case Jl:n.depthFunc(n.NEVER);break;case Ql:n.depthFunc(n.ALWAYS);break;case e0:n.depthFunc(n.LESS);break;case _s:n.depthFunc(n.LEQUAL);break;case t0:n.depthFunc(n.EQUAL);break;case n0:n.depthFunc(n.GEQUAL);break;case i0:n.depthFunc(n.GREATER);break;case r0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ne=Se}},setLocked:function(Se){B=Se},setClear:function(Se){xe!==Se&&(n.clearDepth(Se),xe=Se)},reset:function(){B=!1,j=null,ne=null,xe=null}}}function i(){let B=!1,ve=null,j=null,ne=null,xe=null,Se=null,Je=null,It=null,Xt=null;return{setTest:function(je){B||(je?Z(n.STENCIL_TEST):J(n.STENCIL_TEST))},setMask:function(je){ve!==je&&!B&&(n.stencilMask(je),ve=je)},setFunc:function(je,jt,Wn){(j!==je||ne!==jt||xe!==Wn)&&(n.stencilFunc(je,jt,Wn),j=je,ne=jt,xe=Wn)},setOp:function(je,jt,Wn){(Se!==je||Je!==jt||It!==Wn)&&(n.stencilOp(je,jt,Wn),Se=je,Je=jt,It=Wn)},setLocked:function(je){B=je},setClear:function(je){Xt!==je&&(n.clearStencil(je),Xt=je)},reset:function(){B=!1,ve=null,j=null,ne=null,xe=null,Se=null,Je=null,It=null,Xt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,h=[],d=null,g=!1,_=null,m=null,p=null,x=null,M=null,E=null,C=null,y=new Qe(0,0,0),S=0,A=!1,R=null,v=null,b=null,P=null,I=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,N=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(q)[1]),U=N>=1):q.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),U=N>=2);let G=null,oe={};const ae=n.getParameter(n.SCISSOR_BOX),re=n.getParameter(n.VIEWPORT),Me=new bt().fromArray(ae),Ce=new bt().fromArray(re);function z(B,ve,j,ne){const xe=new Uint8Array(4),Se=n.createTexture();n.bindTexture(B,Se),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<j;Je++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(ve+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return Se}const Y={};Y[n.TEXTURE_2D]=z(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),s.setFunc(_s),Ge(!1),$e(Zc),Z(n.CULL_FACE),F(Qi);function Z(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function J(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function V(B,ve){return c[B]!==ve?(n.bindFramebuffer(B,ve),c[B]=ve,B===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=ve),B===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function se(B,ve){let j=h,ne=!1;if(B){j=f.get(ve),j===void 0&&(j=[],f.set(ve,j));const xe=B.textures;if(j.length!==xe.length||j[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,Je=xe.length;Se<Je;Se++)j[Se]=n.COLOR_ATTACHMENT0+Se;j.length=xe.length,ne=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ne=!0);ne&&n.drawBuffers(j)}function le(B){return d!==B?(n.useProgram(B),d=B,!0):!1}const Le={[Sr]:n.FUNC_ADD,[Kd]:n.FUNC_SUBTRACT,[jd]:n.FUNC_REVERSE_SUBTRACT};Le[Zd]=n.MIN,Le[Jd]=n.MAX;const Oe={[Qd]:n.ZERO,[ep]:n.ONE,[tp]:n.SRC_COLOR,[jl]:n.SRC_ALPHA,[ap]:n.SRC_ALPHA_SATURATE,[sp]:n.DST_COLOR,[ip]:n.DST_ALPHA,[np]:n.ONE_MINUS_SRC_COLOR,[Zl]:n.ONE_MINUS_SRC_ALPHA,[op]:n.ONE_MINUS_DST_COLOR,[rp]:n.ONE_MINUS_DST_ALPHA,[lp]:n.CONSTANT_COLOR,[cp]:n.ONE_MINUS_CONSTANT_COLOR,[up]:n.CONSTANT_ALPHA,[fp]:n.ONE_MINUS_CONSTANT_ALPHA};function F(B,ve,j,ne,xe,Se,Je,It,Xt,je){if(B===Qi){g===!0&&(J(n.BLEND),g=!1);return}if(g===!1&&(Z(n.BLEND),g=!0),B!==$d){if(B!==_||je!==A){if((m!==Sr||M!==Sr)&&(n.blendEquation(n.FUNC_ADD),m=Sr,M=Sr),je)switch(B){case us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case eo:n.blendFunc(n.ONE,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case eo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}p=null,x=null,E=null,C=null,y.set(0,0,0),S=0,_=B,A=je}return}xe=xe||ve,Se=Se||j,Je=Je||ne,(ve!==m||xe!==M)&&(n.blendEquationSeparate(Le[ve],Le[xe]),m=ve,M=xe),(j!==p||ne!==x||Se!==E||Je!==C)&&(n.blendFuncSeparate(Oe[j],Oe[ne],Oe[Se],Oe[Je]),p=j,x=ne,E=Se,C=Je),(It.equals(y)===!1||Xt!==S)&&(n.blendColor(It.r,It.g,It.b,Xt),y.copy(It),S=Xt),_=B,A=!1}function Mt(B,ve){B.side===Ai?J(n.CULL_FACE):Z(n.CULL_FACE);let j=B.side===Tn;ve&&(j=!j),Ge(j),B.blending===us&&B.transparent===!1?F(Qi):F(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),s.setFunc(B.depthFunc),s.setTest(B.depthTest),s.setMask(B.depthWrite),r.setMask(B.colorWrite);const ne=B.stencilWrite;o.setTest(ne),ne&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),it(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):J(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(B){R!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),R=B)}function $e(B){B!==Xd?(Z(n.CULL_FACE),B!==v&&(B===Zc?n.cullFace(n.BACK):B===qd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):J(n.CULL_FACE),v=B}function De(B){B!==b&&(U&&n.lineWidth(B),b=B)}function it(B,ve,j){B?(Z(n.POLYGON_OFFSET_FILL),(P!==ve||I!==j)&&(n.polygonOffset(ve,j),P=ve,I=j)):J(n.POLYGON_OFFSET_FILL)}function Ue(B){B?Z(n.SCISSOR_TEST):J(n.SCISSOR_TEST)}function L(B){B===void 0&&(B=n.TEXTURE0+O-1),G!==B&&(n.activeTexture(B),G=B)}function w(B,ve,j){j===void 0&&(G===null?j=n.TEXTURE0+O-1:j=G);let ne=oe[j];ne===void 0&&(ne={type:void 0,texture:void 0},oe[j]=ne),(ne.type!==B||ne.texture!==ve)&&(G!==j&&(n.activeTexture(j),G=j),n.bindTexture(B,ve||Y[B]),ne.type=B,ne.texture=ve)}function W(){const B=oe[G];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function de(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ke(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ke(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(B){Me.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Me.copy(B))}function we(B){Ce.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Ce.copy(B))}function Ze(B,ve){let j=l.get(ve);j===void 0&&(j=new WeakMap,l.set(ve,j));let ne=j.get(B);ne===void 0&&(ne=n.getUniformBlockIndex(ve,B.name),j.set(B,ne))}function ze(B,ve){const ne=l.get(ve).get(B);a.get(ve)!==ne&&(n.uniformBlockBinding(ve,ne,B.__bindingPointIndex),a.set(ve,ne))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},G=null,oe={},c={},f=new WeakMap,h=[],d=null,g=!1,_=null,m=null,p=null,x=null,M=null,E=null,C=null,y=new Qe(0,0,0),S=0,A=!1,R=null,v=null,b=null,P=null,I=null,Me.set(0,0,n.canvas.width,n.canvas.height),Ce.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Z,disable:J,bindFramebuffer:V,drawBuffers:se,useProgram:le,setBlending:F,setMaterial:Mt,setFlipSided:Ge,setCullFace:$e,setLineWidth:De,setPolygonOffset:it,setScissorTest:Ue,activeTexture:L,bindTexture:w,unbindTexture:W,compressedTexImage2D:K,compressedTexImage3D:te,texImage2D:pe,texImage3D:ke,updateUBOMapping:Ze,uniformBlockBinding:ze,texStorage2D:Ke,texStorage3D:ce,texSubImage2D:Q,texSubImage3D:Re,compressedTexSubImage2D:de,compressedTexSubImage3D:ge,scissor:Be,viewport:we,reset:dt}}function Xu(n,e,t,i){const r=Kv(i);switch(t){case bh:return n*e;case wh:return n*e;case Th:return n*e*2;case Ah:return n*e/r.components*r.byteLength;case sc:return n*e/r.components*r.byteLength;case Rh:return n*e*2/r.components*r.byteLength;case oc:return n*e*2/r.components*r.byteLength;case Eh:return n*e*3/r.components*r.byteLength;case Hn:return n*e*4/r.components*r.byteLength;case ac:return n*e*4/r.components*r.byteLength;case ea:case ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case na:case ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case c0:case f0:return Math.max(n,16)*Math.max(e,8)/4;case l0:case u0:return Math.max(n,8)*Math.max(e,8)/2;case h0:case d0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case p0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case m0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case g0:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case _0:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case v0:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case x0:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case M0:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case S0:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case y0:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case b0:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case E0:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case w0:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case T0:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case A0:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case R0:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ra:case C0:case L0:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ch:case P0:return Math.ceil(n/4)*Math.ceil(e/4)*8;case I0:case D0:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kv(n){switch(n){case Ui:case Mh:return{byteLength:1,components:1};case to:case Sh:case ao:return{byteLength:2,components:1};case ic:case rc:return{byteLength:2,components:4};case Cr:case nc:case ui:return{byteLength:4,components:1};case yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function jv(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new nt,c=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,w){return d?new OffscreenCanvas(L,w):pa("canvas")}function _(L,w,W){let K=1;const te=Ue(L);if((te.width>W||te.height>W)&&(K=W/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Q=Math.floor(K*te.width),Re=Math.floor(K*te.height);f===void 0&&(f=g(Q,Re));const de=w?g(Q,Re):f;return de.width=Q,de.height=Re,de.getContext("2d").drawImage(L,0,0,Q,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Q+"x"+Re+")."),de}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==wn&&L.minFilter!==zn}function p(L){n.generateMipmap(L)}function x(L,w,W,K,te=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Q=w;if(w===n.RED&&(W===n.FLOAT&&(Q=n.R32F),W===n.HALF_FLOAT&&(Q=n.R16F),W===n.UNSIGNED_BYTE&&(Q=n.R8)),w===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.R8UI),W===n.UNSIGNED_SHORT&&(Q=n.R16UI),W===n.UNSIGNED_INT&&(Q=n.R32UI),W===n.BYTE&&(Q=n.R8I),W===n.SHORT&&(Q=n.R16I),W===n.INT&&(Q=n.R32I)),w===n.RG&&(W===n.FLOAT&&(Q=n.RG32F),W===n.HALF_FLOAT&&(Q=n.RG16F),W===n.UNSIGNED_BYTE&&(Q=n.RG8)),w===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.RG8UI),W===n.UNSIGNED_SHORT&&(Q=n.RG16UI),W===n.UNSIGNED_INT&&(Q=n.RG32UI),W===n.BYTE&&(Q=n.RG8I),W===n.SHORT&&(Q=n.RG16I),W===n.INT&&(Q=n.RG32I)),w===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),W===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),W===n.UNSIGNED_INT&&(Q=n.RGB32UI),W===n.BYTE&&(Q=n.RGB8I),W===n.SHORT&&(Q=n.RGB16I),W===n.INT&&(Q=n.RGB32I)),w===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),W===n.UNSIGNED_INT&&(Q=n.RGBA32UI),W===n.BYTE&&(Q=n.RGBA8I),W===n.SHORT&&(Q=n.RGBA16I),W===n.INT&&(Q=n.RGBA32I)),w===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),w===n.RGBA){const Re=te?ua:ct.getTransfer(K);W===n.FLOAT&&(Q=n.RGBA32F),W===n.HALF_FLOAT&&(Q=n.RGBA16F),W===n.UNSIGNED_BYTE&&(Q=Re===yt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function M(L,w){let W;return L?w===null||w===Cr||w===Ms?W=n.DEPTH24_STENCIL8:w===ui?W=n.DEPTH32F_STENCIL8:w===to&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Cr||w===Ms?W=n.DEPTH_COMPONENT24:w===ui?W=n.DEPTH_COMPONENT32F:w===to&&(W=n.DEPTH_COMPONENT16),W}function E(L,w){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==wn&&L.minFilter!==zn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function C(L){const w=L.target;w.removeEventListener("dispose",C),S(w),w.isVideoTexture&&c.delete(w)}function y(L){const w=L.target;w.removeEventListener("dispose",y),R(w)}function S(L){const w=i.get(L);if(w.__webglInit===void 0)return;const W=L.source,K=h.get(W);if(K){const te=K[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&A(L),Object.keys(K).length===0&&h.delete(W)}i.remove(L)}function A(L){const w=i.get(L);n.deleteTexture(w.__webglTexture);const W=L.source,K=h.get(W);delete K[w.__cacheKey],o.memory.textures--}function R(L){const w=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let te=0;te<w.__webglFramebuffer[K].length;te++)n.deleteFramebuffer(w.__webglFramebuffer[K][te]);else n.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)n.deleteFramebuffer(w.__webglFramebuffer[K]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const W=L.textures;for(let K=0,te=W.length;K<te;K++){const Q=i.get(W[K]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(W[K])}i.remove(L)}let v=0;function b(){v=0}function P(){const L=v;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),v+=1,L}function I(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function O(L,w){const W=i.get(L);if(L.isVideoTexture&&De(L),L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){const K=L.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(W,L,w);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+w)}function U(L,w){const W=i.get(L);if(L.version>0&&W.__version!==L.version){Ce(W,L,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+w)}function N(L,w){const W=i.get(L);if(L.version>0&&W.__version!==L.version){Ce(W,L,w);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+w)}function q(L,w){const W=i.get(L);if(L.version>0&&W.__version!==L.version){z(W,L,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+w)}const G={[ca]:n.REPEAT,[ji]:n.CLAMP_TO_EDGE,[a0]:n.MIRRORED_REPEAT},oe={[wn]:n.NEAREST,[Sp]:n.NEAREST_MIPMAP_NEAREST,[So]:n.NEAREST_MIPMAP_LINEAR,[zn]:n.LINEAR,[Fa]:n.LINEAR_MIPMAP_NEAREST,[Zi]:n.LINEAR_MIPMAP_LINEAR},ae={[wp]:n.NEVER,[Pp]:n.ALWAYS,[Tp]:n.LESS,[Ph]:n.LEQUAL,[Ap]:n.EQUAL,[Lp]:n.GEQUAL,[Rp]:n.GREATER,[Cp]:n.NOTEQUAL};function re(L,w){if(w.type===ui&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===zn||w.magFilter===Fa||w.magFilter===So||w.magFilter===Zi||w.minFilter===zn||w.minFilter===Fa||w.minFilter===So||w.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,G[w.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,G[w.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,G[w.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,oe[w.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,oe[w.minFilter]),w.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,ae[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===wn||w.minFilter!==So&&w.minFilter!==Zi||w.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Me(L,w){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",C));const K=w.source;let te=h.get(K);te===void 0&&(te={},h.set(K,te));const Q=I(w);if(Q!==L.__cacheKey){te[Q]===void 0&&(te[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),te[Q].usedTimes++;const Re=te[L.__cacheKey];Re!==void 0&&(te[L.__cacheKey].usedTimes--,Re.usedTimes===0&&A(w)),L.__cacheKey=Q,L.__webglTexture=te[Q].texture}return W}function Ce(L,w,W){let K=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=n.TEXTURE_3D);const te=Me(L,w),Q=w.source;t.bindTexture(K,L.__webglTexture,n.TEXTURE0+W);const Re=i.get(Q);if(Q.version!==Re.__version||te===!0){t.activeTexture(n.TEXTURE0+W);const de=ct.getPrimaries(ct.workingColorSpace),ge=w.colorSpace===Ki?null:ct.getPrimaries(w.colorSpace),Ke=w.colorSpace===Ki||de===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ce=_(w.image,!1,r.maxTextureSize);ce=it(w,ce);const pe=s.convert(w.format,w.colorSpace),ke=s.convert(w.type);let Be=x(w.internalFormat,pe,ke,w.colorSpace,w.isVideoTexture);re(K,w);let we;const Ze=w.mipmaps,ze=w.isVideoTexture!==!0,dt=Re.__version===void 0||te===!0,B=Q.dataReady,ve=E(w,ce);if(w.isDepthTexture)Be=M(w.format===Ss,w.type),dt&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Be,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Be,ce.width,ce.height,0,pe,ke,null));else if(w.isDataTexture)if(Ze.length>0){ze&&dt&&t.texStorage2D(n.TEXTURE_2D,ve,Be,Ze[0].width,Ze[0].height);for(let j=0,ne=Ze.length;j<ne;j++)we=Ze[j],ze?B&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,we.width,we.height,pe,ke,we.data):t.texImage2D(n.TEXTURE_2D,j,Be,we.width,we.height,0,pe,ke,we.data);w.generateMipmaps=!1}else ze?(dt&&t.texStorage2D(n.TEXTURE_2D,ve,Be,ce.width,ce.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,pe,ke,ce.data)):t.texImage2D(n.TEXTURE_2D,0,Be,ce.width,ce.height,0,pe,ke,ce.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ze&&dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Be,Ze[0].width,Ze[0].height,ce.depth);for(let j=0,ne=Ze.length;j<ne;j++)if(we=Ze[j],w.format!==Hn)if(pe!==null)if(ze){if(B)if(w.layerUpdates.size>0){const xe=Xu(we.width,we.height,w.format,w.type);for(const Se of w.layerUpdates){const Je=we.data.subarray(Se*xe/we.data.BYTES_PER_ELEMENT,(Se+1)*xe/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,Se,we.width,we.height,1,pe,Je,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,we.width,we.height,ce.depth,pe,we.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Be,we.width,we.height,ce.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,we.width,we.height,ce.depth,pe,ke,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,Be,we.width,we.height,ce.depth,0,pe,ke,we.data)}else{ze&&dt&&t.texStorage2D(n.TEXTURE_2D,ve,Be,Ze[0].width,Ze[0].height);for(let j=0,ne=Ze.length;j<ne;j++)we=Ze[j],w.format!==Hn?pe!==null?ze?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,we.width,we.height,pe,we.data):t.compressedTexImage2D(n.TEXTURE_2D,j,Be,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?B&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,we.width,we.height,pe,ke,we.data):t.texImage2D(n.TEXTURE_2D,j,Be,we.width,we.height,0,pe,ke,we.data)}else if(w.isDataArrayTexture)if(ze){if(dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Be,ce.width,ce.height,ce.depth),B)if(w.layerUpdates.size>0){const j=Xu(ce.width,ce.height,w.format,w.type);for(const ne of w.layerUpdates){const xe=ce.data.subarray(ne*j/ce.data.BYTES_PER_ELEMENT,(ne+1)*j/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,ce.width,ce.height,1,pe,ke,xe)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,pe,ke,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,ce.width,ce.height,ce.depth,0,pe,ke,ce.data);else if(w.isData3DTexture)ze?(dt&&t.texStorage3D(n.TEXTURE_3D,ve,Be,ce.width,ce.height,ce.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,pe,ke,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Be,ce.width,ce.height,ce.depth,0,pe,ke,ce.data);else if(w.isFramebufferTexture){if(dt)if(ze)t.texStorage2D(n.TEXTURE_2D,ve,Be,ce.width,ce.height);else{let j=ce.width,ne=ce.height;for(let xe=0;xe<ve;xe++)t.texImage2D(n.TEXTURE_2D,xe,Be,j,ne,0,pe,ke,null),j>>=1,ne>>=1}}else if(Ze.length>0){if(ze&&dt){const j=Ue(Ze[0]);t.texStorage2D(n.TEXTURE_2D,ve,Be,j.width,j.height)}for(let j=0,ne=Ze.length;j<ne;j++)we=Ze[j],ze?B&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,pe,ke,we):t.texImage2D(n.TEXTURE_2D,j,Be,pe,ke,we);w.generateMipmaps=!1}else if(ze){if(dt){const j=Ue(ce);t.texStorage2D(n.TEXTURE_2D,ve,Be,j.width,j.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,ke,ce)}else t.texImage2D(n.TEXTURE_2D,0,Be,pe,ke,ce);m(w)&&p(K),Re.__version=Q.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function z(L,w,W){if(w.image.length!==6)return;const K=Me(L,w),te=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+W);const Q=i.get(te);if(te.version!==Q.__version||K===!0){t.activeTexture(n.TEXTURE0+W);const Re=ct.getPrimaries(ct.workingColorSpace),de=w.colorSpace===Ki?null:ct.getPrimaries(w.colorSpace),ge=w.colorSpace===Ki||Re===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ke=w.isCompressedTexture||w.image[0].isCompressedTexture,ce=w.image[0]&&w.image[0].isDataTexture,pe=[];for(let ne=0;ne<6;ne++)!Ke&&!ce?pe[ne]=_(w.image[ne],!0,r.maxCubemapSize):pe[ne]=ce?w.image[ne].image:w.image[ne],pe[ne]=it(w,pe[ne]);const ke=pe[0],Be=s.convert(w.format,w.colorSpace),we=s.convert(w.type),Ze=x(w.internalFormat,Be,we,w.colorSpace),ze=w.isVideoTexture!==!0,dt=Q.__version===void 0||K===!0,B=te.dataReady;let ve=E(w,ke);re(n.TEXTURE_CUBE_MAP,w);let j;if(Ke){ze&&dt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Ze,ke.width,ke.height);for(let ne=0;ne<6;ne++){j=pe[ne].mipmaps;for(let xe=0;xe<j.length;xe++){const Se=j[xe];w.format!==Hn?Be!==null?ze?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,0,0,Se.width,Se.height,Be,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,Ze,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,0,0,Se.width,Se.height,Be,we,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,Ze,Se.width,Se.height,0,Be,we,Se.data)}}}else{if(j=w.mipmaps,ze&&dt){j.length>0&&ve++;const ne=Ue(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,Ze,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ce){ze?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,pe[ne].width,pe[ne].height,Be,we,pe[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ze,pe[ne].width,pe[ne].height,0,Be,we,pe[ne].data);for(let xe=0;xe<j.length;xe++){const Je=j[xe].image[ne].image;ze?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,0,0,Je.width,Je.height,Be,we,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,Ze,Je.width,Je.height,0,Be,we,Je.data)}}else{ze?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Be,we,pe[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ze,Be,we,pe[ne]);for(let xe=0;xe<j.length;xe++){const Se=j[xe];ze?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,0,0,Be,we,Se.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,Ze,Be,we,Se.image[ne])}}}m(w)&&p(n.TEXTURE_CUBE_MAP),Q.__version=te.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Y(L,w,W,K,te,Q){const Re=s.convert(W.format,W.colorSpace),de=s.convert(W.type),ge=x(W.internalFormat,Re,de,W.colorSpace);if(!i.get(w).__hasExternalTextures){const ce=Math.max(1,w.width>>Q),pe=Math.max(1,w.height>>Q);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,Q,ge,ce,pe,w.depth,0,Re,de,null):t.texImage2D(te,Q,ge,ce,pe,0,Re,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),$e(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,te,i.get(W).__webglTexture,0,Ge(w)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,te,i.get(W).__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(L,w,W){if(n.bindRenderbuffer(n.RENDERBUFFER,L),w.depthBuffer){const K=w.depthTexture,te=K&&K.isDepthTexture?K.type:null,Q=M(w.stencilBuffer,te),Re=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=Ge(w);$e(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,Q,w.width,w.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,Q,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Q,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,L)}else{const K=w.textures;for(let te=0;te<K.length;te++){const Q=K[te],Re=s.convert(Q.format,Q.colorSpace),de=s.convert(Q.type),ge=x(Q.internalFormat,Re,de,Q.colorSpace),Ke=Ge(w);W&&$e(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,ge,w.width,w.height):$e(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke,ge,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ge,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function J(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),O(w.depthTexture,0);const K=i.get(w.depthTexture).__webglTexture,te=Ge(w);if(w.depthTexture.format===fs)$e(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(w.depthTexture.format===Ss)$e(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function V(L){const w=i.get(L),W=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const K=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){const te=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),w.__depthDisposeCallback=te}w.__boundDepthTexture=K}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");J(w.__webglFramebuffer,L)}else if(W){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=n.createRenderbuffer(),Z(w.__webglDepthbuffer[K],L,!1);else{const te=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Z(w.__webglDepthbuffer,L,!1);else{const K=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function se(L,w,W){const K=i.get(L);w!==void 0&&Y(K.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&V(L)}function le(L){const w=L.texture,W=i.get(L),K=i.get(w);L.addEventListener("dispose",y);const te=L.textures,Q=L.isWebGLCubeRenderTarget===!0,Re=te.length>1;if(Re||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=w.version,o.memory.textures++),Q){W.__webglFramebuffer=[];for(let de=0;de<6;de++)if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer[de]=[];for(let ge=0;ge<w.mipmaps.length;ge++)W.__webglFramebuffer[de][ge]=n.createFramebuffer()}else W.__webglFramebuffer[de]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){W.__webglFramebuffer=[];for(let de=0;de<w.mipmaps.length;de++)W.__webglFramebuffer[de]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Re)for(let de=0,ge=te.length;de<ge;de++){const Ke=i.get(te[de]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&$e(L)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let de=0;de<te.length;de++){const ge=te[de];W.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[de]);const Ke=s.convert(ge.format,ge.colorSpace),ce=s.convert(ge.type),pe=x(ge.internalFormat,Ke,ce,ge.colorSpace,L.isXRRenderTarget===!0),ke=Ge(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,pe,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,W.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Z(W.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),re(n.TEXTURE_CUBE_MAP,w);for(let de=0;de<6;de++)if(w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)Y(W.__webglFramebuffer[de][ge],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ge);else Y(W.__webglFramebuffer[de],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(w)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let de=0,ge=te.length;de<ge;de++){const Ke=te[de],ce=i.get(Ke);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),re(n.TEXTURE_2D,Ke),Y(W.__webglFramebuffer,L,Ke,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),m(Ke)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(de=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,K.__webglTexture),re(de,w),w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)Y(W.__webglFramebuffer[ge],L,w,n.COLOR_ATTACHMENT0,de,ge);else Y(W.__webglFramebuffer,L,w,n.COLOR_ATTACHMENT0,de,0);m(w)&&p(de),t.unbindTexture()}L.depthBuffer&&V(L)}function Le(L){const w=L.textures;for(let W=0,K=w.length;W<K;W++){const te=w[W];if(m(te)){const Q=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Re=i.get(te).__webglTexture;t.bindTexture(Q,Re),p(Q),t.unbindTexture()}}}const Oe=[],F=[];function Mt(L){if(L.samples>0){if($e(L)===!1){const w=L.textures,W=L.width,K=L.height;let te=n.COLOR_BUFFER_BIT;const Q=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(L),de=w.length>1;if(de)for(let ge=0;ge<w.length;ge++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let ge=0;ge<w.length;ge++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[ge]);const Ke=i.get(w[ge]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ke,0)}n.blitFramebuffer(0,0,W,K,0,0,W,K,te,n.NEAREST),l===!0&&(Oe.length=0,F.length=0,Oe.push(n.COLOR_ATTACHMENT0+ge),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Oe.push(Q),F.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let ge=0;ge<w.length;ge++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,Re.__webglColorRenderbuffer[ge]);const Ke=i.get(w[ge]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const w=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Ge(L){return Math.min(r.maxSamples,L.samples)}function $e(L){const w=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function De(L){const w=o.render.frame;c.get(L)!==w&&(c.set(L,w),L.update())}function it(L,w){const W=L.colorSpace,K=L.format,te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==ir&&W!==Ki&&(ct.getTransfer(W)===yt?(K!==Hn||te!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),w}function Ue(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=P,this.resetTextureUnits=b,this.setTexture2D=O,this.setTexture2DArray=U,this.setTexture3D=N,this.setTextureCube=q,this.rebindTextures=se,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=V,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=$e}function Zv(n,e){function t(i,r=Ki){let s;const o=ct.getTransfer(r);if(i===Ui)return n.UNSIGNED_BYTE;if(i===ic)return n.UNSIGNED_SHORT_4_4_4_4;if(i===rc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===yh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Mh)return n.BYTE;if(i===Sh)return n.SHORT;if(i===to)return n.UNSIGNED_SHORT;if(i===nc)return n.INT;if(i===Cr)return n.UNSIGNED_INT;if(i===ui)return n.FLOAT;if(i===ao)return n.HALF_FLOAT;if(i===bh)return n.ALPHA;if(i===Eh)return n.RGB;if(i===Hn)return n.RGBA;if(i===wh)return n.LUMINANCE;if(i===Th)return n.LUMINANCE_ALPHA;if(i===fs)return n.DEPTH_COMPONENT;if(i===Ss)return n.DEPTH_STENCIL;if(i===Ah)return n.RED;if(i===sc)return n.RED_INTEGER;if(i===Rh)return n.RG;if(i===oc)return n.RG_INTEGER;if(i===ac)return n.RGBA_INTEGER;if(i===ea||i===ta||i===na||i===ia)if(o===yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ea)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ia)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ea)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ta)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===na)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ia)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===l0||i===c0||i===u0||i===f0)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===l0)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===c0)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===u0)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===f0)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===h0||i===d0||i===p0)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===h0||i===d0)return o===yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===p0)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===m0||i===g0||i===_0||i===v0||i===x0||i===M0||i===S0||i===y0||i===b0||i===E0||i===w0||i===T0||i===A0||i===R0)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===m0)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===g0)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_0)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===v0)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===x0)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===M0)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===S0)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===y0)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===b0)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===E0)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===w0)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===T0)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===A0)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===R0)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ra||i===C0||i===L0)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ra)return o===yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===C0)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===L0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ch||i===P0||i===I0||i===D0)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ra)return s.COMPRESSED_RED_RGTC1_EXT;if(i===P0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===I0)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===D0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ms?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Jv extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sn extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qv={type:"move"};class ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(u,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),d=.02,g=.005;u.inputState.pinching&&h>d+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=d-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Sn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tx=`
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

}`;class nx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new nr({vertexShader:ex,fragmentShader:tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new uo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ix extends Ts{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,d=null,g=null;const _=new nx,m=t.getContextAttributes();let p=null,x=null;const M=[],E=[],C=new nt;let y=null;const S=new Mn;S.layers.enable(1),S.viewport=new bt;const A=new Mn;A.layers.enable(2),A.viewport=new bt;const R=[S,A],v=new Jv;v.layers.enable(1),v.layers.enable(2);let b=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Y=M[z];return Y===void 0&&(Y=new ul,M[z]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(z){let Y=M[z];return Y===void 0&&(Y=new ul,M[z]=Y),Y.getGripSpace()},this.getHand=function(z){let Y=M[z];return Y===void 0&&(Y=new ul,M[z]=Y),Y.getHandSpace()};function I(z){const Y=E.indexOf(z.inputSource);if(Y===-1)return;const Z=M[Y];Z!==void 0&&(Z.update(z.inputSource,z.frame,u||o),Z.dispatchEvent({type:z.type,data:z.inputSource}))}function O(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",U);for(let z=0;z<M.length;z++){const Y=E[z];Y!==null&&(E[z]=null,M[z].disconnect(Y))}b=null,P=null,_.reset(),e.setRenderTarget(p),d=null,h=null,f=null,r=null,x=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(z){u=z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",O),r.addEventListener("inputsourceschange",U),m.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const Y={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new Lr(d.framebufferWidth,d.framebufferHeight,{format:Hn,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Y=null,Z=null,J=null;m.depth&&(J=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=m.stencil?Ss:fs,Z=m.stencil?Ms:Cr);const V={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(V),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new Lr(h.textureWidth,h.textureHeight,{format:Hn,type:Ui,depthTexture:new Hh(h.textureWidth,h.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function U(z){for(let Y=0;Y<z.removed.length;Y++){const Z=z.removed[Y],J=E.indexOf(Z);J>=0&&(E[J]=null,M[J].disconnect(Z))}for(let Y=0;Y<z.added.length;Y++){const Z=z.added[Y];let J=E.indexOf(Z);if(J===-1){for(let se=0;se<M.length;se++)if(se>=E.length){E.push(Z),J=se;break}else if(E[se]===null){E[se]=Z,J=se;break}if(J===-1)break}const V=M[J];V&&V.connect(Z)}}const N=new D,q=new D;function G(z,Y,Z){N.setFromMatrixPosition(Y.matrixWorld),q.setFromMatrixPosition(Z.matrixWorld);const J=N.distanceTo(q),V=Y.projectionMatrix.elements,se=Z.projectionMatrix.elements,le=V[14]/(V[10]-1),Le=V[14]/(V[10]+1),Oe=(V[9]+1)/V[5],F=(V[9]-1)/V[5],Mt=(V[8]-1)/V[0],Ge=(se[8]+1)/se[0],$e=le*Mt,De=le*Ge,it=J/(-Mt+Ge),Ue=it*-Mt;if(Y.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ue),z.translateZ(it),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),V[10]===-1)z.projectionMatrix.copy(Y.projectionMatrix),z.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const L=le+it,w=Le+it,W=$e-Ue,K=De+(J-Ue),te=Oe*Le/w*L,Q=F*Le/w*L;z.projectionMatrix.makePerspective(W,K,te,Q,L,w),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function oe(z,Y){Y===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Y.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;let Y=z.near,Z=z.far;_.texture!==null&&(_.depthNear>0&&(Y=_.depthNear),_.depthFar>0&&(Z=_.depthFar)),v.near=A.near=S.near=Y,v.far=A.far=S.far=Z,(b!==v.near||P!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,P=v.far);const J=z.parent,V=v.cameras;oe(v,J);for(let se=0;se<V.length;se++)oe(V[se],J);V.length===2?G(v,S,A):v.projectionMatrix.copy(S.projectionMatrix),ae(z,v,J)};function ae(z,Y,Z){Z===null?z.matrix.copy(Y.matrixWorld):(z.matrix.copy(Z.matrixWorld),z.matrix.invert(),z.matrix.multiply(Y.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Y.projectionMatrix),z.projectionMatrixInverse.copy(Y.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=no*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let re=null;function Me(z,Y){if(c=Y.getViewerPose(u||o),g=Y,c!==null){const Z=c.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let J=!1;Z.length!==v.cameras.length&&(v.cameras.length=0,J=!0);for(let se=0;se<Z.length;se++){const le=Z[se];let Le=null;if(d!==null)Le=d.getViewport(le);else{const F=f.getViewSubImage(h,le);Le=F.viewport,se===0&&(e.setRenderTargetTextures(x,F.colorTexture,h.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(x))}let Oe=R[se];Oe===void 0&&(Oe=new Mn,Oe.layers.enable(se),Oe.viewport=new bt,R[se]=Oe),Oe.matrix.fromArray(le.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(le.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(Le.x,Le.y,Le.width,Le.height),se===0&&(v.matrix.copy(Oe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),J===!0&&v.cameras.push(Oe)}const V=r.enabledFeatures;if(V&&V.includes("depth-sensing")){const se=f.getDepthInformation(Z[0]);se&&se.isValid&&se.texture&&_.init(e,se,r.renderState)}}for(let Z=0;Z<M.length;Z++){const J=E[Z],V=M[Z];J!==null&&V!==void 0&&V.update(J,Y,u||o)}re&&re(z,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const Ce=new zh;Ce.setAnimationLoop(Me),this.setAnimationLoop=function(z){re=z},this.dispose=function(){}}}const fr=new en,rx=new Xe;function sx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Oh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,x,M,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,M):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),M=x.envMap,E=x.envMapRotation;M&&(m.envMap.value=M,fr.copy(E),fr.x*=-1,fr.y*=-1,fr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),m.envMapRotation.value.setFromMatrix4(rx.makeRotationFromEuler(fr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ox(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const E=M.program;i.uniformBlockBinding(x,E)}function u(x,M){let E=r[x.id];E===void 0&&(g(x),E=c(x),r[x.id]=E,x.addEventListener("dispose",m));const C=M.program;i.updateUBOMapping(x,C);const y=e.render.frame;s[x.id]!==y&&(h(x),s[x.id]=y)}function c(x){const M=f();x.__bindingPointIndex=M;const E=n.createBuffer(),C=x.__size,y=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,C,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const M=r[x.id],E=x.uniforms,C=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let y=0,S=E.length;y<S;y++){const A=Array.isArray(E[y])?E[y]:[E[y]];for(let R=0,v=A.length;R<v;R++){const b=A[R];if(d(b,y,R,C)===!0){const P=b.__offset,I=Array.isArray(b.value)?b.value:[b.value];let O=0;for(let U=0;U<I.length;U++){const N=I[U],q=_(N);typeof N=="number"||typeof N=="boolean"?(b.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,P+O,b.__data)):N.isMatrix3?(b.__data[0]=N.elements[0],b.__data[1]=N.elements[1],b.__data[2]=N.elements[2],b.__data[3]=0,b.__data[4]=N.elements[3],b.__data[5]=N.elements[4],b.__data[6]=N.elements[5],b.__data[7]=0,b.__data[8]=N.elements[6],b.__data[9]=N.elements[7],b.__data[10]=N.elements[8],b.__data[11]=0):(N.toArray(b.__data,O),O+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,M,E,C){const y=x.value,S=M+"_"+E;if(C[S]===void 0)return typeof y=="number"||typeof y=="boolean"?C[S]=y:C[S]=y.clone(),!0;{const A=C[S];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return C[S]=y,!0}else if(A.equals(y)===!1)return A.copy(y),!0}return!1}function g(x){const M=x.uniforms;let E=0;const C=16;for(let S=0,A=M.length;S<A;S++){const R=Array.isArray(M[S])?M[S]:[M[S]];for(let v=0,b=R.length;v<b;v++){const P=R[v],I=Array.isArray(P.value)?P.value:[P.value];for(let O=0,U=I.length;O<U;O++){const N=I[O],q=_(N),G=E%C,oe=G%q.boundary,ae=G+oe;E+=oe,ae!==0&&C-ae<q.storage&&(E+=C-ae),P.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=E,E+=q.storage}}}const y=E%C;return y>0&&(E+=C-y),x.__size=E,x.__cache={},this}function _(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function p(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}class gc{constructor(e={}){const{canvas:t=$p(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pn,this.toneMapping=er,this.toneMappingExposure=1;const M=this;let E=!1,C=0,y=0,S=null,A=-1,R=null;const v=new bt,b=new bt;let P=null;const I=new Qe(0);let O=0,U=t.width,N=t.height,q=1,G=null,oe=null;const ae=new bt(0,0,U,N),re=new bt(0,0,U,N);let Me=!1;const Ce=new dc;let z=!1,Y=!1;const Z=new Xe,J=new Xe,V=new D,se=new bt,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function Oe(){return S===null?q:1}let F=i;function Mt(T,k){return t.getContext(T,k)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ec}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",Se,!1),F===null){const k="webgl2";if(F=Mt(k,T),F===null)throw Mt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ge,$e,De,it,Ue,L,w,W,K,te,Q,Re,de,ge,Ke,ce,pe,ke,Be,we,Ze,ze,dt,B;function ve(){Ge=new h1(F),Ge.init(),ze=new Zv(F,Ge),$e=new o1(F,Ge,e,ze),De=new $v(F),$e.reverseDepthBuffer&&De.buffers.depth.setReversed(!0),it=new m1(F),Ue=new Dv,L=new jv(F,Ge,De,Ue,$e,ze,it),w=new l1(M),W=new f1(M),K=new ym(F),dt=new r1(F,K),te=new d1(F,K,it,dt),Q=new _1(F,te,K,it),Be=new g1(F,$e,L),ce=new a1(Ue),Re=new Iv(M,w,W,Ge,$e,dt,ce),de=new sx(M,Ue),ge=new Nv,Ke=new Hv(Ge),ke=new i1(M,w,W,De,Q,h,l),pe=new qv(M,Q,$e),B=new ox(F,it,$e,De),we=new s1(F,Ge,it),Ze=new p1(F,Ge,it),it.programs=Re.programs,M.capabilities=$e,M.extensions=Ge,M.properties=Ue,M.renderLists=ge,M.shadowMap=pe,M.state=De,M.info=it}ve();const j=new ix(M,F);this.xr=j,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=Ge.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ge.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(U,N,!1))},this.getSize=function(T){return T.set(U,N)},this.setSize=function(T,k,X=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=T,N=k,t.width=Math.floor(T*q),t.height=Math.floor(k*q),X===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(U*q,N*q).floor()},this.setDrawingBufferSize=function(T,k,X){U=T,N=k,q=X,t.width=Math.floor(T*X),t.height=Math.floor(k*X),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(v)},this.getViewport=function(T){return T.copy(ae)},this.setViewport=function(T,k,X,$){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,k,X,$),De.viewport(v.copy(ae).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(re)},this.setScissor=function(T,k,X,$){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,k,X,$),De.scissor(b.copy(re).multiplyScalar(q).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(T){De.setScissorTest(Me=T)},this.setOpaqueSort=function(T){G=T},this.setTransparentSort=function(T){oe=T},this.getClearColor=function(T){return T.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(T=!0,k=!0,X=!0){let $=0;if(T){let H=!1;if(S!==null){const ue=S.texture.format;H=ue===ac||ue===oc||ue===sc}if(H){const ue=S.texture.type,_e=ue===Ui||ue===Cr||ue===to||ue===Ms||ue===ic||ue===rc,be=ke.getClearColor(),Ae=ke.getClearAlpha(),Ne=be.r,Fe=be.g,Pe=be.b;_e?(d[0]=Ne,d[1]=Fe,d[2]=Pe,d[3]=Ae,F.clearBufferuiv(F.COLOR,0,d)):(g[0]=Ne,g[1]=Fe,g[2]=Pe,g[3]=Ae,F.clearBufferiv(F.COLOR,0,g))}else $|=F.COLOR_BUFFER_BIT}k&&($|=F.DEPTH_BUFFER_BIT,F.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),ge.dispose(),Ke.dispose(),Ue.dispose(),w.dispose(),W.dispose(),Q.dispose(),dt.dispose(),B.dispose(),Re.dispose(),j.dispose(),j.removeEventListener("sessionstart",Xn),j.removeEventListener("sessionend",Ps),qn.stop()};function ne(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=it.autoReset,k=pe.enabled,X=pe.autoUpdate,$=pe.needsUpdate,H=pe.type;ve(),it.autoReset=T,pe.enabled=k,pe.autoUpdate=X,pe.needsUpdate=$,pe.type=H}function Se(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Je(T){const k=T.target;k.removeEventListener("dispose",Je),It(k)}function It(T){Xt(T),Ue.remove(T)}function Xt(T){const k=Ue.get(T).programs;k!==void 0&&(k.forEach(function(X){Re.releaseProgram(X)}),T.isShaderMaterial&&Re.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,X,$,H,ue){k===null&&(k=le);const _e=H.isMesh&&H.matrixWorld.determinant()<0,be=mt(T,k,X,$,H);De.setMaterial($,_e);let Ae=X.index,Ne=1;if($.wireframe===!0){if(Ae=te.getWireframeAttribute(X),Ae===void 0)return;Ne=2}const Fe=X.drawRange,Pe=X.attributes.position;let ot=Fe.start*Ne,ut=(Fe.start+Fe.count)*Ne;ue!==null&&(ot=Math.max(ot,ue.start*Ne),ut=Math.min(ut,(ue.start+ue.count)*Ne)),Ae!==null?(ot=Math.max(ot,0),ut=Math.min(ut,Ae.count)):Pe!=null&&(ot=Math.max(ot,0),ut=Math.min(ut,Pe.count));const St=ut-ot;if(St<0||St===1/0)return;dt.setup(H,$,be,X,Ae);let Zt,et=we;if(Ae!==null&&(Zt=K.get(Ae),et=Ze,et.setIndex(Zt)),H.isMesh)$.wireframe===!0?(De.setLineWidth($.wireframeLinewidth*Oe()),et.setMode(F.LINES)):et.setMode(F.TRIANGLES);else if(H.isLine){let Ie=$.linewidth;Ie===void 0&&(Ie=1),De.setLineWidth(Ie*Oe()),H.isLineSegments?et.setMode(F.LINES):H.isLineLoop?et.setMode(F.LINE_LOOP):et.setMode(F.LINE_STRIP)}else H.isPoints?et.setMode(F.POINTS):H.isSprite&&et.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)et.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))et.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ie=H._multiDrawStarts,Nt=H._multiDrawCounts,We=H._multiDrawCount,zt=Ae?K.get(Ae).bytesPerElement:1,ki=Ue.get($).currentProgram.getUniforms();for(let kt=0;kt<We;kt++)ki.setValue(F,"_gl_DrawID",kt),et.render(Ie[kt]/zt,Nt[kt])}else if(H.isInstancedMesh)et.renderInstances(ot,St,H.count);else if(X.isInstancedBufferGeometry){const Ie=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Nt=Math.min(X.instanceCount,Ie);et.renderInstances(ot,St,Nt)}else et.render(ot,St)};function je(T,k,X){T.transparent===!0&&T.side===Ai&&T.forceSinglePass===!1?(T.side=Tn,T.needsUpdate=!0,He(T,k,X),T.side=Di,T.needsUpdate=!0,He(T,k,X),T.side=Ai):He(T,k,X)}this.compile=function(T,k,X=null){X===null&&(X=T),m=Ke.get(X),m.init(k),x.push(m),X.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==X&&T.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const $=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ue=H.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){const be=ue[_e];je(be,X,H),$.add(be)}else je(ue,X,H),$.add(ue)}),x.pop(),m=null,$},this.compileAsync=function(T,k,X=null){const $=this.compile(T,k,X);return new Promise(H=>{function ue(){if($.forEach(function(_e){Ue.get(_e).currentProgram.isReady()&&$.delete(_e)}),$.size===0){H(T);return}setTimeout(ue,10)}Ge.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let jt=null;function Wn(T){jt&&jt(T)}function Xn(){qn.stop()}function Ps(){qn.start()}const qn=new zh;qn.setAnimationLoop(Wn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(T){jt=T,j.setAnimationLoop(T),T===null?qn.stop():qn.start()},j.addEventListener("sessionstart",Xn),j.addEventListener("sessionend",Ps),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(k),k=j.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,k,S),m=Ke.get(T,x.length),m.init(k),x.push(m),J.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ce.setFromProjectionMatrix(J),Y=this.localClippingEnabled,z=ce.init(this.clippingPlanes,Y),_=ge.get(T,p.length),_.init(),p.push(_),j.enabled===!0&&j.isPresenting===!0){const ue=M.xr.getDepthSensingMesh();ue!==null&&ee(ue,k,-1/0,M.sortObjects)}ee(T,k,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(G,oe),Le=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Le&&ke.addToRenderList(_,T),this.info.render.frame++,z===!0&&ce.beginShadows();const X=m.state.shadowsArray;pe.render(X,T,k),z===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=_.opaque,H=_.transmissive;if(m.setupLights(),k.isArrayCamera){const ue=k.cameras;if(H.length>0)for(let _e=0,be=ue.length;_e<be;_e++){const Ae=ue[_e];he($,H,T,Ae)}Le&&ke.render(T);for(let _e=0,be=ue.length;_e<be;_e++){const Ae=ue[_e];ie(_,T,Ae,Ae.viewport)}}else H.length>0&&he($,H,T,k),Le&&ke.render(T),ie(_,T,k);S!==null&&(L.updateMultisampleRenderTarget(S),L.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(M,T,k),dt.resetDefaultState(),A=-1,R=null,x.pop(),x.length>0?(m=x[x.length-1],z===!0&&ce.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function ee(T,k,X,$){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ce.intersectsSprite(T)){$&&se.setFromMatrixPosition(T.matrixWorld).applyMatrix4(J);const _e=Q.update(T),be=T.material;be.visible&&_.push(T,_e,be,X,se.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ce.intersectsObject(T))){const _e=Q.update(T),be=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),se.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),se.copy(_e.boundingSphere.center)),se.applyMatrix4(T.matrixWorld).applyMatrix4(J)),Array.isArray(be)){const Ae=_e.groups;for(let Ne=0,Fe=Ae.length;Ne<Fe;Ne++){const Pe=Ae[Ne],ot=be[Pe.materialIndex];ot&&ot.visible&&_.push(T,_e,ot,X,se.z,Pe)}}else be.visible&&_.push(T,_e,be,X,se.z,null)}}const ue=T.children;for(let _e=0,be=ue.length;_e<be;_e++)ee(ue[_e],k,X,$)}function ie(T,k,X,$){const H=T.opaque,ue=T.transmissive,_e=T.transparent;m.setupLightsView(X),z===!0&&ce.setGlobalState(M.clippingPlanes,X),$&&De.viewport(v.copy($)),H.length>0&&fe(H,k,X),ue.length>0&&fe(ue,k,X),_e.length>0&&fe(_e,k,X),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function he(T,k,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new Lr(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?ao:Ui,minFilter:Zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const ue=m.state.transmissionRenderTarget[$.id],_e=$.viewport||v;ue.setSize(_e.z,_e.w);const be=M.getRenderTarget();M.setRenderTarget(ue),M.getClearColor(I),O=M.getClearAlpha(),O<1&&M.setClearColor(16777215,.5),M.clear(),Le&&ke.render(X);const Ae=M.toneMapping;M.toneMapping=er;const Ne=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),z===!0&&ce.setGlobalState(M.clippingPlanes,$),fe(T,X,$),L.updateMultisampleRenderTarget(ue),L.updateRenderTargetMipmap(ue),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Pe=0,ot=k.length;Pe<ot;Pe++){const ut=k[Pe],St=ut.object,Zt=ut.geometry,et=ut.material,Ie=ut.group;if(et.side===Ai&&St.layers.test($.layers)){const Nt=et.side;et.side=Tn,et.needsUpdate=!0,Te(St,X,$,Zt,et,Ie),et.side=Nt,et.needsUpdate=!0,Fe=!0}}Fe===!0&&(L.updateMultisampleRenderTarget(ue),L.updateRenderTargetMipmap(ue))}M.setRenderTarget(be),M.setClearColor(I,O),Ne!==void 0&&($.viewport=Ne),M.toneMapping=Ae}function fe(T,k,X){const $=k.isScene===!0?k.overrideMaterial:null;for(let H=0,ue=T.length;H<ue;H++){const _e=T[H],be=_e.object,Ae=_e.geometry,Ne=$===null?_e.material:$,Fe=_e.group;be.layers.test(X.layers)&&Te(be,k,X,Ae,Ne,Fe)}}function Te(T,k,X,$,H,ue){T.onBeforeRender(M,k,X,$,H,ue),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(M,k,X,$,T,ue),H.transparent===!0&&H.side===Ai&&H.forceSinglePass===!1?(H.side=Tn,H.needsUpdate=!0,M.renderBufferDirect(X,k,$,H,T,ue),H.side=Di,H.needsUpdate=!0,M.renderBufferDirect(X,k,$,H,T,ue),H.side=Ai):M.renderBufferDirect(X,k,$,H,T,ue),T.onAfterRender(M,k,X,$,H,ue)}function He(T,k,X){k.isScene!==!0&&(k=le);const $=Ue.get(T),H=m.state.lights,ue=m.state.shadowsArray,_e=H.state.version,be=Re.getParameters(T,H.state,ue,k,X),Ae=Re.getProgramCacheKey(be);let Ne=$.programs;$.environment=T.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(T.isMeshStandardMaterial?W:w).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",Je),Ne=new Map,$.programs=Ne);let Fe=Ne.get(Ae);if(Fe!==void 0){if($.currentProgram===Fe&&$.lightsStateVersion===_e)return wt(T,be),Fe}else be.uniforms=Re.getUniforms(T),T.onBeforeCompile(be,M),Fe=Re.acquireProgram(be,Ae),Ne.set(Ae,Fe),$.uniforms=be.uniforms;const Pe=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=ce.uniform),wt(T,be),$.needsLights=mn(T),$.lightsStateVersion=_e,$.needsLights&&(Pe.ambientLightColor.value=H.state.ambient,Pe.lightProbe.value=H.state.probe,Pe.directionalLights.value=H.state.directional,Pe.directionalLightShadows.value=H.state.directionalShadow,Pe.spotLights.value=H.state.spot,Pe.spotLightShadows.value=H.state.spotShadow,Pe.rectAreaLights.value=H.state.rectArea,Pe.ltc_1.value=H.state.rectAreaLTC1,Pe.ltc_2.value=H.state.rectAreaLTC2,Pe.pointLights.value=H.state.point,Pe.pointLightShadows.value=H.state.pointShadow,Pe.hemisphereLights.value=H.state.hemi,Pe.directionalShadowMap.value=H.state.directionalShadowMap,Pe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Pe.spotShadowMap.value=H.state.spotShadowMap,Pe.spotLightMatrix.value=H.state.spotLightMatrix,Pe.spotLightMap.value=H.state.spotLightMap,Pe.pointShadowMap.value=H.state.pointShadowMap,Pe.pointShadowMatrix.value=H.state.pointShadowMatrix),$.currentProgram=Fe,$.uniformsList=null,Fe}function lt(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=oa.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function wt(T,k){const X=Ue.get(T);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function mt(T,k,X,$,H){k.isScene!==!0&&(k=le),L.resetTextureUnits();const ue=k.fog,_e=$.isMeshStandardMaterial?k.environment:null,be=S===null?M.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:ir,Ae=($.isMeshStandardMaterial?W:w).get($.envMap||_e),Ne=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Fe=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Pe=!!X.morphAttributes.position,ot=!!X.morphAttributes.normal,ut=!!X.morphAttributes.color;let St=er;$.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(St=M.toneMapping);const Zt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,et=Zt!==void 0?Zt.length:0,Ie=Ue.get($),Nt=m.state.lights;if(z===!0&&(Y===!0||T!==R)){const qt=T===R&&$.id===A;ce.setState($,T,qt)}let We=!1;$.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Nt.state.version||Ie.outputColorSpace!==be||H.isBatchedMesh&&Ie.batching===!1||!H.isBatchedMesh&&Ie.batching===!0||H.isBatchedMesh&&Ie.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ie.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ie.instancing===!1||!H.isInstancedMesh&&Ie.instancing===!0||H.isSkinnedMesh&&Ie.skinning===!1||!H.isSkinnedMesh&&Ie.skinning===!0||H.isInstancedMesh&&Ie.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ie.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ie.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ie.instancingMorph===!1&&H.morphTexture!==null||Ie.envMap!==Ae||$.fog===!0&&Ie.fog!==ue||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ce.numPlanes||Ie.numIntersection!==ce.numIntersection)||Ie.vertexAlphas!==Ne||Ie.vertexTangents!==Fe||Ie.morphTargets!==Pe||Ie.morphNormals!==ot||Ie.morphColors!==ut||Ie.toneMapping!==St||Ie.morphTargetsCount!==et)&&(We=!0):(We=!0,Ie.__version=$.version);let zt=Ie.currentProgram;We===!0&&(zt=He($,k,H));let ki=!1,kt=!1,Tt=!1;const At=zt.getUniforms(),Jt=Ie.uniforms;if(De.useProgram(zt.program)&&(ki=!0,kt=!0,Tt=!0),$.id!==A&&(A=$.id,kt=!0),ki||R!==T){$e.reverseDepthBuffer?(Z.copy(T.projectionMatrix),jp(Z),Zp(Z),At.setValue(F,"projectionMatrix",Z)):At.setValue(F,"projectionMatrix",T.projectionMatrix),At.setValue(F,"viewMatrix",T.matrixWorldInverse);const qt=At.map.cameraPosition;qt!==void 0&&qt.setValue(F,V.setFromMatrixPosition(T.matrixWorld)),$e.logarithmicDepthBuffer&&At.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&At.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),R!==T&&(R=T,kt=!0,Tt=!0)}if(H.isSkinnedMesh){At.setOptional(F,H,"bindMatrix"),At.setOptional(F,H,"bindMatrixInverse");const qt=H.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),At.setValue(F,"boneTexture",qt.boneTexture,L))}H.isBatchedMesh&&(At.setOptional(F,H,"batchingTexture"),At.setValue(F,"batchingTexture",H._matricesTexture,L),At.setOptional(F,H,"batchingIdTexture"),At.setValue(F,"batchingIdTexture",H._indirectTexture,L),At.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&At.setValue(F,"batchingColorTexture",H._colorsTexture,L));const Dr=X.morphAttributes;if((Dr.position!==void 0||Dr.normal!==void 0||Dr.color!==void 0)&&Be.update(H,X,zt),(kt||Ie.receiveShadow!==H.receiveShadow)&&(Ie.receiveShadow=H.receiveShadow,At.setValue(F,"receiveShadow",H.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Jt.envMap.value=Ae,Jt.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(Jt.envMapIntensity.value=k.environmentIntensity),kt&&(At.setValue(F,"toneMappingExposure",M.toneMappingExposure),Ie.needsLights&&st(Jt,Tt),ue&&$.fog===!0&&de.refreshFogUniforms(Jt,ue),de.refreshMaterialUniforms(Jt,$,q,N,m.state.transmissionRenderTarget[T.id]),oa.upload(F,lt(Ie),Jt,L)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(oa.upload(F,lt(Ie),Jt,L),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&At.setValue(F,"center",H.center),At.setValue(F,"modelViewMatrix",H.modelViewMatrix),At.setValue(F,"normalMatrix",H.normalMatrix),At.setValue(F,"modelMatrix",H.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const qt=$.uniformsGroups;for(let Ur=0,Is=qt.length;Ur<Is;Ur++){const Nn=qt[Ur];B.update(Nn,zt),B.bind(Nn,zt)}}return zt}function st(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function mn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,k,X){Ue.get(T.texture).__webglTexture=k,Ue.get(T.depthTexture).__webglTexture=X;const $=Ue.get(T);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=X===void 0,$.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){const X=Ue.get(T);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,X=0){S=T,C=k,y=X;let $=!0,H=null,ue=!1,_e=!1;if(T){const Ae=Ue.get(T);if(Ae.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(F.FRAMEBUFFER,null),$=!1;else if(Ae.__webglFramebuffer===void 0)L.setupRenderTarget(T);else if(Ae.__hasExternalTextures)L.rebindTextures(T,Ue.get(T.texture).__webglTexture,Ue.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Pe=T.depthTexture;if(Ae.__boundDepthTexture!==Pe){if(Pe!==null&&Ue.has(Pe)&&(T.width!==Pe.image.width||T.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(T)}}const Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(_e=!0);const Fe=Ue.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[k])?H=Fe[k][X]:H=Fe[k],ue=!0):T.samples>0&&L.useMultisampledRTT(T)===!1?H=Ue.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?H=Fe[X]:H=Fe,v.copy(T.viewport),b.copy(T.scissor),P=T.scissorTest}else v.copy(ae).multiplyScalar(q).floor(),b.copy(re).multiplyScalar(q).floor(),P=Me;if(De.bindFramebuffer(F.FRAMEBUFFER,H)&&$&&De.drawBuffers(T,H),De.viewport(v),De.scissor(b),De.setScissorTest(P),ue){const Ae=Ue.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae.__webglTexture,X)}else if(_e){const Ae=Ue.get(T.texture),Ne=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ae.__webglTexture,X||0,Ne)}A=-1},this.readRenderTargetPixels=function(T,k,X,$,H,ue,_e){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be){De.bindFramebuffer(F.FRAMEBUFFER,be);try{const Ae=T.texture,Ne=Ae.format,Fe=Ae.type;if(!$e.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-$&&X>=0&&X<=T.height-H&&F.readPixels(k,X,$,H,ze.convert(Ne),ze.convert(Fe),ue)}finally{const Ae=S!==null?Ue.get(S).__webglFramebuffer:null;De.bindFramebuffer(F.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(T,k,X,$,H,ue,_e){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be){const Ae=T.texture,Ne=Ae.format,Fe=Ae.type;if(!$e.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=T.width-$&&X>=0&&X<=T.height-H){De.bindFramebuffer(F.FRAMEBUFFER,be);const Pe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Pe),F.bufferData(F.PIXEL_PACK_BUFFER,ue.byteLength,F.STREAM_READ),F.readPixels(k,X,$,H,ze.convert(Ne),ze.convert(Fe),0);const ot=S!==null?Ue.get(S).__webglFramebuffer:null;De.bindFramebuffer(F.FRAMEBUFFER,ot);const ut=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Kp(F,ut,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Pe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ue),F.deleteBuffer(Pe),F.deleteSync(ut),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,k=null,X=0){T.isTexture!==!0&&(sa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,T=arguments[1]);const $=Math.pow(2,-X),H=Math.floor(T.image.width*$),ue=Math.floor(T.image.height*$),_e=k!==null?k.x:0,be=k!==null?k.y:0;L.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,_e,be,H,ue),De.unbindTexture()},this.copyTextureToTexture=function(T,k,X=null,$=null,H=0){T.isTexture!==!0&&(sa("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,T=arguments[1],k=arguments[2],H=arguments[3]||0,X=null);let ue,_e,be,Ae,Ne,Fe;X!==null?(ue=X.max.x-X.min.x,_e=X.max.y-X.min.y,be=X.min.x,Ae=X.min.y):(ue=T.image.width,_e=T.image.height,be=0,Ae=0),$!==null?(Ne=$.x,Fe=$.y):(Ne=0,Fe=0);const Pe=ze.convert(k.format),ot=ze.convert(k.type);L.setTexture2D(k,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const ut=F.getParameter(F.UNPACK_ROW_LENGTH),St=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Zt=F.getParameter(F.UNPACK_SKIP_PIXELS),et=F.getParameter(F.UNPACK_SKIP_ROWS),Ie=F.getParameter(F.UNPACK_SKIP_IMAGES),Nt=T.isCompressedTexture?T.mipmaps[H]:T.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Nt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Nt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,be),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ae),T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,H,Ne,Fe,ue,_e,Pe,ot,Nt.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,H,Ne,Fe,Nt.width,Nt.height,Pe,Nt.data):F.texSubImage2D(F.TEXTURE_2D,H,Ne,Fe,ue,_e,Pe,ot,Nt),F.pixelStorei(F.UNPACK_ROW_LENGTH,ut),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,St),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Zt),F.pixelStorei(F.UNPACK_SKIP_ROWS,et),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ie),H===0&&k.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(T,k,X=null,$=null,H=0){T.isTexture!==!0&&(sa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,$=arguments[1]||null,T=arguments[2],k=arguments[3],H=arguments[4]||0);let ue,_e,be,Ae,Ne,Fe,Pe,ot,ut;const St=T.isCompressedTexture?T.mipmaps[H]:T.image;X!==null?(ue=X.max.x-X.min.x,_e=X.max.y-X.min.y,be=X.max.z-X.min.z,Ae=X.min.x,Ne=X.min.y,Fe=X.min.z):(ue=St.width,_e=St.height,be=St.depth,Ae=0,Ne=0,Fe=0),$!==null?(Pe=$.x,ot=$.y,ut=$.z):(Pe=0,ot=0,ut=0);const Zt=ze.convert(k.format),et=ze.convert(k.type);let Ie;if(k.isData3DTexture)L.setTexture3D(k,0),Ie=F.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)L.setTexture2DArray(k,0),Ie=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const Nt=F.getParameter(F.UNPACK_ROW_LENGTH),We=F.getParameter(F.UNPACK_IMAGE_HEIGHT),zt=F.getParameter(F.UNPACK_SKIP_PIXELS),ki=F.getParameter(F.UNPACK_SKIP_ROWS),kt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,St.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,St.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ae),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ne),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Fe),T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Ie,H,Pe,ot,ut,ue,_e,be,Zt,et,St.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(Ie,H,Pe,ot,ut,ue,_e,be,Zt,St.data):F.texSubImage3D(Ie,H,Pe,ot,ut,ue,_e,be,Zt,et,St),F.pixelStorei(F.UNPACK_ROW_LENGTH,Nt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,We),F.pixelStorei(F.UNPACK_SKIP_PIXELS,zt),F.pixelStorei(F.UNPACK_SKIP_ROWS,ki),F.pixelStorei(F.UNPACK_SKIP_IMAGES,kt),H===0&&k.generateMipmaps&&F.generateMipmap(Ie),De.unbindTexture()},this.initRenderTarget=function(T){Ue.get(T).__webglFramebuffer===void 0&&L.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?L.setTextureCube(T,0):T.isData3DTexture?L.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?L.setTexture2DArray(T,0):L.setTexture2D(T,0),De.unbindTexture()},this.resetState=function(){C=0,y=0,S=null,De.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===lc?"display-p3":"srgb",t.unpackColorSpace=ct.workingColorSpace===Ma?"display-p3":"srgb"}}class fo extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qu=new D,Yu=new bt,$u=new bt,ax=new D,Ku=new Xe,Go=new D,fl=new As,ju=new Xe,hl=new uc;class lx extends xt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=eu,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ni),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Go),this.boundingBox.expandByPoint(Go)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new As),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Go),this.boundingSphere.expandByPoint(Go)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fl.copy(this.boundingSphere),fl.applyMatrix4(r),e.ray.intersectsSphere(fl)!==!1&&(ju.copy(r).invert(),hl.copy(e.ray).applyMatrix4(ju),!(this.boundingBox!==null&&hl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,hl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new bt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===eu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Mp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Yu.fromBufferAttribute(r.attributes.skinIndex,e),$u.fromBufferAttribute(r.attributes.skinWeight,e),qu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=$u.getComponent(s);if(o!==0){const a=Yu.getComponent(s);Ku.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(ax.copy(qu).applyMatrix4(Ku),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class qh extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class cx extends un{constructor(e=null,t=1,i=1,r,s,o,a,l,u=wn,c=wn,f,h){super(null,o,a,l,u,c,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zu=new Xe,ux=new Xe;class _c{constructor(e=[],t=[]){this.uuid=Ir(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Xe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:ux;Zu.multiplyMatrices(a,t[s]),Zu.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new _c(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new cx(t,e,e,Hn,ui);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new qh),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class vc extends un{constructor(e,t,i,r,s,o,a,l,u){super(e,t,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ho extends ii{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],f=[],h=[],d=[];let g=0;const _=[],m=i/2;let p=0;x(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new fn(f,3)),this.setAttribute("normal",new fn(h,3)),this.setAttribute("uv",new fn(d,2));function x(){const E=new D,C=new D;let y=0;const S=(t-e)/i;for(let A=0;A<=s;A++){const R=[],v=A/s,b=v*(t-e)+e;for(let P=0;P<=r;P++){const I=P/r,O=I*l+a,U=Math.sin(O),N=Math.cos(O);C.x=b*U,C.y=-v*i+m,C.z=b*N,f.push(C.x,C.y,C.z),E.set(U,S,N).normalize(),h.push(E.x,E.y,E.z),d.push(I,1-v),R.push(g++)}_.push(R)}for(let A=0;A<r;A++)for(let R=0;R<s;R++){const v=_[R][A],b=_[R+1][A],P=_[R+1][A+1],I=_[R][A+1];e>0&&(c.push(v,b,I),y+=3),t>0&&(c.push(b,P,I),y+=3)}u.addGroup(p,y,0),p+=y}function M(E){const C=g,y=new nt,S=new D;let A=0;const R=E===!0?e:t,v=E===!0?1:-1;for(let P=1;P<=r;P++)f.push(0,m*v,0),h.push(0,v,0),d.push(.5,.5),g++;const b=g;for(let P=0;P<=r;P++){const O=P/r*l+a,U=Math.cos(O),N=Math.sin(O);S.x=R*N,S.y=m*v,S.z=R*U,f.push(S.x,S.y,S.z),h.push(0,v,0),y.x=U*.5+.5,y.y=N*.5*v+.5,d.push(y.x,y.y),g++}for(let P=0;P<r;P++){const I=C+P,O=b+P;E===!0?c.push(O,O+1,I):c.push(O+1,O,I),A+=3}u.addGroup(p,A,E===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xc extends ho{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new xc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mc extends ii{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new fn(s,3)),this.setAttribute("normal",new fn(s.slice(),3)),this.setAttribute("uv",new fn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const M=new D,E=new D,C=new D;for(let y=0;y<t.length;y+=3)d(t[y+0],M),d(t[y+1],E),d(t[y+2],C),l(M,E,C,x)}function l(x,M,E,C){const y=C+1,S=[];for(let A=0;A<=y;A++){S[A]=[];const R=x.clone().lerp(E,A/y),v=M.clone().lerp(E,A/y),b=y-A;for(let P=0;P<=b;P++)P===0&&A===y?S[A][P]=R:S[A][P]=R.clone().lerp(v,P/b)}for(let A=0;A<y;A++)for(let R=0;R<2*(y-A)-1;R++){const v=Math.floor(R/2);R%2===0?(h(S[A][v+1]),h(S[A+1][v]),h(S[A][v])):(h(S[A][v+1]),h(S[A+1][v+1]),h(S[A+1][v]))}}function u(x){const M=new D;for(let E=0;E<s.length;E+=3)M.x=s[E+0],M.y=s[E+1],M.z=s[E+2],M.normalize().multiplyScalar(x),s[E+0]=M.x,s[E+1]=M.y,s[E+2]=M.z}function c(){const x=new D;for(let M=0;M<s.length;M+=3){x.x=s[M+0],x.y=s[M+1],x.z=s[M+2];const E=m(x)/2/Math.PI+.5,C=p(x)/Math.PI+.5;o.push(E,1-C)}g(),f()}function f(){for(let x=0;x<o.length;x+=6){const M=o[x+0],E=o[x+2],C=o[x+4],y=Math.max(M,E,C),S=Math.min(M,E,C);y>.9&&S<.1&&(M<.2&&(o[x+0]+=1),E<.2&&(o[x+2]+=1),C<.2&&(o[x+4]+=1))}}function h(x){s.push(x.x,x.y,x.z)}function d(x,M){const E=x*3;M.x=e[E+0],M.y=e[E+1],M.z=e[E+2]}function g(){const x=new D,M=new D,E=new D,C=new D,y=new nt,S=new nt,A=new nt;for(let R=0,v=0;R<s.length;R+=9,v+=6){x.set(s[R+0],s[R+1],s[R+2]),M.set(s[R+3],s[R+4],s[R+5]),E.set(s[R+6],s[R+7],s[R+8]),y.set(o[v+0],o[v+1]),S.set(o[v+2],o[v+3]),A.set(o[v+4],o[v+5]),C.copy(x).add(M).add(E).divideScalar(3);const b=m(C);_(y,v+0,x,b),_(S,v+2,M,b),_(A,v+4,E,b)}}function _(x,M,E,C){C<0&&x.x===1&&(o[M]=x.x-1),E.x===0&&E.z===0&&(o[M]=C/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mc(e.vertices,e.indices,e.radius,e.details)}}class Sc extends Mc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sc(e.radius,e.detail)}}class yc extends ii{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new D,h=new D,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const x=[],M=p/i;let E=0;p===0&&o===0?E=.5/t:p===i&&l===Math.PI&&(E=-.5/t);for(let C=0;C<=t;C++){const y=C/t;f.x=-e*Math.cos(r+y*s)*Math.sin(o+M*a),f.y=e*Math.cos(o+M*a),f.z=e*Math.sin(r+y*s)*Math.sin(o+M*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(y+E,1-M),x.push(u++)}c.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const M=c[p][x+1],E=c[p][x],C=c[p+1][x],y=c[p+1][x+1];(p!==0||o>0)&&d.push(M,E,y),(p!==i-1||l<Math.PI)&&d.push(E,C,y)}this.setIndex(d),this.setAttribute("position",new fn(g,3)),this.setAttribute("normal",new fn(_,3)),this.setAttribute("uv",new fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fi extends co{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lh,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bc extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ec extends bc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const dl=new Xe,Ju=new D,Qu=new D;class fx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dc,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ju.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ju),Qu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qu),t.updateMatrixWorld(),dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hx extends fx{constructor(){super(new pc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wc extends bc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new hx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Tc extends bc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ef=new Xe;class Yh{constructor(e,t,i=0,r=1/0){this.ray=new uc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new fc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ef.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ef),this}intersectObject(e,t=!0,i=[]){return N0(e,this,i,t),i.sort(tf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)N0(e[r],this,i,t);return i.sort(tf),i}}function tf(n,e){return n.distance-e.distance}function N0(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)N0(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ec}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ec);function dx(n){let e=1779033703^n.length;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),3432918353),e=e<<13|e>>>19;return()=>(e=Math.imul(e^e>>>16,2246822507),e=Math.imul(e^e>>>13,3266489909),e^=e>>>16,e>>>0)}function px(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}class Cs{constructor(e="lifesim"){this.seed=String(e),this._next=px(dx(this.seed)()),this._children=new Map}child(e){return this._children.has(e)||this._children.set(e,new Cs(`${this.seed}:${e}`)),this._children.get(e)}float(){return this._next()}range(e,t){return e+this._next()*(t-e)}int(e,t){return Math.floor(this.range(e,t+1))}chance(e){return this._next()<e}sign(){return this._next()<.5?-1:1}pick(e){return e[Math.floor(this._next()*e.length)]}pickMany(e,t){const i=this.shuffle([...e]);return i.slice(0,Math.min(t,i.length))}shuffle(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(this._next()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}weighted(e){const t=Array.isArray(e)?e:[...e].map(([s,o])=>({value:s,weight:o}));let i=0;for(const s of t)i+=Math.max(0,s.weight??1);if(i<=0)return t[0];let r=this._next()*i;for(const s of t)if(r-=Math.max(0,s.weight??1),r<=0)return s;return t[t.length-1]}gaussian(e=0,t=1){let i=0,r=0;for(;i===0;)i=this._next();for(;r===0;)r=this._next();return e+t*Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*r)}stat(e,t,i=0,r=100){return Math.max(i,Math.min(r,Math.round(this.gaussian(e,t))))}}const di={ceiling:15525851,wall:13814974,wallUpper:14210248,trim:16249834,floorTimber:9072722,benchtop:12168342},pl=new Map,mx=["roughness","metalness","flat","transparent","opacity","side","emissive","emissiveIntensity","vertexColors"];function gx(n,e={}){let t=String(n);for(const r of mx)e[r]!==void 0&&(t+="|"+r+"="+JSON.stringify(e[r]));if(pl.has(t))return pl.get(t);const i=new Fi({color:n,roughness:e.roughness??.85,metalness:e.metalness??0,flatShading:e.flat??!1,transparent:e.transparent??!1,opacity:e.opacity??1,side:e.side??Di,emissive:e.emissive??0,emissiveIntensity:e.emissiveIntensity??1,vertexColors:e.vertexColors??!1});return pl.set(t,i),i}const ya={box:new cn(1,1,1),plane:new uo(1,1),cyl:new ho(.5,.5,1,10),cone:new xc(.5,1,8),sphere:new yc(.5,12,10)};function rr(n,e,t,i,r={}){const s=new xt(ya.box,r.material||gx(i,r));return s.scale.set(n,e,t),s.castShadow=r.castShadow??!0,s.receiveShadow=r.receiveShadow??!0,s}const _x=new Set;function vx(n){_x.add(n)}let $h=8,F0=null;function xx(n){F0=n,$h=Math.min(8,n.capabilities.getMaxAnisotropy())}let Mx=n=>{const e=document.createElement("canvas");return e.width=e.height=n,e};const Kh=(n,e=n)=>{const t=Mx(n);return t.width=n,t.height=e,t};let jh=0;function Ac(n,e){return e&&(n.colorSpace=Pn),n.wrapS=n.wrapT=ca,n.anisotropy=$h,n.generateMipmaps=!0,n.minFilter=Zi,n.magFilter=zn,jh+=n.image.width*n.image.height*4*4/3,F0&&F0.initTexture(n),n}function dn(n){return Ac(new vc(Sx(n)),!0)}function O0(n){return n.wrapS=n.wrapT=ji,n}function Sx(n){const e=Kh(n.w,n.h),t=e.getContext("2d"),i=t.createImageData(n.w,n.h),r=i.data,s=n.d,o=n.w*n.h;for(let a=0,l=0,u=0;a<o;a++,l+=3,u+=4){const c=s[l],f=s[l+1],h=s[l+2];r[u]=(c<0?0:c>1?1:c)*255+.5,r[u+1]=(f<0?0:f>1?1:f)*255+.5,r[u+2]=(h<0?0:h>1?1:h)*255+.5,r[u+3]=255}return t.putImageData(i,0,0),e}const Et=n=>n<0?0:n>1?1:n,pi=n=>[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255];function yx(n){const[e,t,i]=n,r=Math.max(e,t,i),s=Math.min(e,t,i),o=(r+s)/2;if(r===s)return[0,0,o];const a=r-s,l=o>.5?a/(2-r-s):a/(r+s);let u;return r===e?u=((t-i)/a+(t<i?6:0))/6:r===t?u=((i-e)/a+2)/6:u=((e-t)/a+4)/6,[u,l,o]}function bx(n,e,t){if(e===0)return[t,t,t];const i=t<.5?t*(1+e):t+e-t*e,r=2*t-i,s=o=>(o=(o%1+1)%1,o<1/6?r+(i-r)*6*o:o<1/2?i:o<2/3?r+(i-r)*(2/3-o)*6:r);return[s(n+1/3),s(n),s(n-1/3)]}function fi(n,e=1,t=0,i=1){const[r,s,o]=yx(Array.isArray(n)?n:pi(n));return bx(r+t/360,Et(s*i),Et(o*e))}function pn(n,e){return{w:n,h:e,d:new Float32Array(n*e*3)}}function gi(n,e){const t=Array.isArray(e)?e:pi(e),i=n.d;for(let r=0;r<i.length;r+=3)i[r]=t[0],i[r+1]=t[1],i[r+2]=t[2]}function Rc(n,e,t,i,r){if(r<=0)return;const s=n.w,o=n.h;let a=e,l=t;(a<0||a>=s)&&(a=(a%s+s)%s),(l<0||l>=o)&&(l=(l%o+o)%o);const u=(l*s+a)*3,c=n.d,f=1-r;c[u]=c[u]*f+i[0]*r,c[u+1]=c[u+1]*f+i[1]*r,c[u+2]=c[u+2]*f+i[2]*r}function kn(n,e,t,i,r,s,o=1){const a=Array.isArray(s)?s:pi(s),l=Math.round(e),u=Math.round(i),c=Math.round(t),f=Math.round(r);if(o<1){for(let _=c;_<f;_++)for(let m=l;m<u;m++)Rc(n,m,_,a,o);return}const h=n.w,d=n.h,g=n.d;for(let _=c;_<f;_++){let m=_;(m<0||m>=d)&&(m=(m%d+d)%d);const p=m*h;for(let x=l;x<u;x++){let M=x;(M<0||M>=h)&&(M=(M%h+h)%h);const E=(p+M)*3;g[E]=a[0],g[E+1]=a[1],g[E+2]=a[2]}}}function po(n,e,t,i,r,s=1){const o=i+1;for(let a=Math.floor(t-o);a<=Math.ceil(t+o);a++)for(let l=Math.floor(e-o);l<=Math.ceil(e+o);l++){const u=l+.5-e,c=a+.5-t,f=Et(i-Math.sqrt(u*u+c*c)+.5);f>0&&Rc(n,l,a,r,s*f)}}function k0(n,e,t,i,r=1){const s=Math.max(1,t)/2;for(let o=1;o<e.length;o++){const[a,l]=e[o-1],[u,c]=e[o],f=Math.hypot(u-a,c-l),h=Math.max(1,Math.ceil(f));for(let d=0;d<=h;d++){const g=d/h;po(n,a+(u-a)*g,l+(c-l)*g,s,i,r)}}}function Zh(n,e,t,i,r,s,o,a){const l=n.w,u=n.h,c=n.d,f=s/2,h=o[0],d=o[1],g=o[2],_=Math.PI*2/i;for(let m=0;m<u;m++){const p=m*l,x=e+t*Math.sin(m*_+r),M=x-f,E=x+f,C=Math.floor(M),y=Math.ceil(E);for(let S=C;S<=y;S++){const A=Et(Math.min(S+1,E)-Math.max(S,M));if(A<=0)continue;const R=a*A,v=1-R;let b=S;(b<0||b>=l)&&(b=(b%l+l)%l);const P=(p+b)*3;c[P]=c[P]*v+h*R,c[P+1]=c[P+1]*v+d*R,c[P+2]=c[P+2]*v+g*R}}}const nf=n=>n*n*(3-2*n);function Ex(n,e,t){const i=new Float32Array(e*t);for(let r=0;r<i.length;r++)i[r]=n.float();return i}const rf=256;function yn(n,e,t={}){const{p0:i=32,octaves:r=4,gain:s=.5,lacunarity:o=2,h:a=e}=t,l=t.p0x??i,u=t.p0y??i,c=new Float32Array(e*a),f=[];let h=1,d=0;for(let C=0;C<r;C++){const y=Math.min(rf,Math.max(1,Math.round(l*o**C))),S=Math.min(rf,Math.max(1,Math.round(u*o**C)));f.push({lat:Ex(n,y,S),px:y,py:S,amp:h}),d+=h,h*=s}const g=new Float64Array(e*a),_=new Int32Array(e),m=new Int32Array(e),p=new Float64Array(e);for(let C=0;C<f.length;C++){const y=f[C],S=y.lat,A=y.px,R=y.py,v=y.amp,b=A/e,P=R/a;for(let I=0;I<e;I++){const O=I*b,U=O|0,N=U>=A?U%A:U;_[I]=N,m[I]=N+1>=A?0:N+1,p[I]=nf(O-U)}for(let I=0;I<a;I++){const O=I*P,U=O|0,N=nf(O-U),q=1-N,G=U>=R?U%R:U,oe=G*A,ae=(G+1>=R?0:G+1)*A,re=I*e;for(let Me=0;Me<e;Me++){const Ce=_[Me],z=m[Me],Y=p[Me],Z=S[oe+Ce],J=S[oe+z],V=S[ae+Ce],se=S[ae+z];g[re+Me]+=v*((Z+(J-Z)*Y)*q+(V+(se-V)*Y)*N)}}}let x=1/0,M=-1/0;for(let C=0;C<c.length;C++){c[C]=g[C]/d;const y=c[C];y<x&&(x=y),y>M&&(M=y)}const E=M-x||1;for(let C=0;C<c.length;C++)c[C]=(c[C]-x)/E;return c}function sr(n,e,t,i){const r=new Float32Array(e*t),s=new Float32Array(e*t),o=2*i+1,a=new Int32Array(e),l=new Int32Array(e);for(let f=0;f<e;f++)a[f]=((f-i)%e+e)%e,l[f]=(f+i+1)%e;for(let f=0;f<t;f++){const h=f*e;let d=0;for(let g=-i;g<=i;g++)d+=n[h+(g%e+e)%e];for(let g=0;g<e;g++)r[h+g]=d/o,d-=n[h+a[g]],d+=n[h+l[g]]}const u=new Int32Array(t),c=new Int32Array(t);for(let f=0;f<t;f++)u[f]=((f-i)%t+t)%t*e,c[f]=(f+i+1)%t*e;for(let f=0;f<e;f++){let h=0;for(let d=-i;d<=i;d++)h+=r[(d%t+t)%t*e+f];for(let d=0;d<t;d++)s[d*e+f]=h/o,h-=r[u[d]+f],h+=r[c[d]+f]}return s}function wx(n,e,t=1.5,i=null){const r=i??n.length/e,s=new Uint8Array(e*r*4),o=t/8,a=new Int32Array(e),l=new Int32Array(e);for(let u=0;u<e;u++)a[u]=(u-1+e)%e,l[u]=(u+1)%e;for(let u=0;u<r;u++){const c=(u-1+r)%r*e,f=u*e,h=(u+1)%r*e;let d=f*4;for(let g=0;g<e;g++,d+=4){const _=a[g],m=l[g],p=n[c+_],x=n[c+g],M=n[c+m],E=n[f+_],C=n[f+m],y=n[h+_],S=n[h+g],A=n[h+m],R=M+2*C+A-(p+2*E+y),v=y+2*S+A-(p+2*x+M),b=-R*o,P=v*o,I=1/Math.sqrt(b*b+P*P+1);s[d]=(b*I*.5+.5)*255+.5,s[d+1]=(P*I*.5+.5)*255+.5,s[d+2]=(I*.5+.5)*255+.5,s[d+3]=255}}return s}function ri(n,e,t=1.5,i=null){const r=i??n.length/e;return Ac(new vc(Jh(wx(n,e,t,r),e,r)),!1)}function Jh(n,e,t){const i=Kh(e,t),r=i.getContext("2d"),s=r.createImageData(e,t);return s.data.set(n),r.putImageData(s,0,0),i}function Tx(n,e,t,i,r=null){const o=n*(r??n),a=new Uint8Array(o*4);for(let l=0,u=0;l<o;l++,u+=4){const c=e?e[l]:1,f=t?t[l]:.85,h=i?i[l]:0;a[u]=(c<0?0:c>1?1:c)*255+.5,a[u+1]=(f<0?0:f>1?1:f)*255+.5,a[u+2]=(h<0?0:h>1?1:h)*255+.5,a[u+3]=255}return a}function Kt(n,e,t,i,r=null){const s=r??n;return Ac(new vc(Jh(Tx(n,e,t,i,s),n,s)),!1)}const Qh={},sf=new Map;function Ot(n,e){Qh[n]=e}function Ax(){var n,e;for(const t of sf.values()){for(const i of["map","normalMap","ormMap"])(e=(n=t[i])==null?void 0:n.dispose)==null||e.call(n);if(t.maps)for(const i of t.maps)i.dispose()}sf.clear(),jh=0}vx(Ax);const ml={blackbutt:{base:13214581,dark:10122054,rough:.4},spottedGum:{base:11040332,dark:8015662,rough:.38},jarrah:{base:9061685,dark:6040352,rough:.44},tasOak:{base:14072722,dark:11111779,rough:.42},pine:{base:14467213,dark:11571294,rough:.5}};Ot("timberFloor",(n,e={})=>{const o=1.9500000000000002,a=1024/o,l=1024/15,u=Math.max(2,Math.round(.004*a)),c=e.species||n.pick(Object.keys(ml)),f=ml[c]||ml.blackbutt,h=pn(1024,1024);gi(h,fi(f.dark,.72));const d=pi(f.dark),g=fi(f.base,1.25),_=[];for(let y=0;y<15;y++){const S=y*l+u/2,A=(y+1)*l-u/2,R=fi(f.base,1+n.range(-.06,.06),n.range(-3,3));kn(h,S,0,A,1024,R);const v=Math.round(n.range(.15,.85)*1024);_.push(v),kn(h,S,v,A,v+2,fi(f.dark,.8),.85),kn(h,S,v-2,A,v,g,.25);const b=n.int(28,60);for(let P=0;P<b;P++){const I=n.range(S+1,A-1),O=n.range(1.5,4),U=1024/n.int(2,5),N=n.range(0,Math.PI*2),q=n.range(2,3),G=n.range(.04,.12),oe=n.chance(.25)?g:d;Zh(h,I,O,U,N,q,oe,G)}if(n.chance(.2)){const P=n.range(204.8,819.2),I=n.range(60,160),O=n.range(S+4,A-4);for(let U=0;U<n.int(2,4);U++){const N=(U+1)*n.range(3,7),q=[];for(let G=0;G<=16;G++){const oe=G/16;q.push([O+(oe-.5)*2*N,P-I*(1-(oe-.5)**2*4)])}k0(h,q,2,d,.06)}}}const m=yn(n,512,{p0:64,octaves:3}),p=new Float32Array(512*512),x=new Float32Array(512*512),M=new Float32Array(512*512),E=512/15,C=u*512/1024;for(let y=0;y<512;y++)for(let S=0;S<512;S++){const A=y*512+S,R=Math.floor(S/E),v=S-R*E,b=v<C/2||v>E-C/2,P=y*1024/512,I=_[R],O=P>=I-1&&P<=I+2,U=b||O;x[A]=U?.15:.75,p[A]=Et(f.rough+(U?.1:0)+(m[A]-.5)*.1),M[A]=U?.72:1}return{map:dn(h),normalMap:ri(sr(x,512,512,1),512,1.2),ormMap:Kt(512,M,p,null),uvScale:[o,o],normalScale:.5,species:c,tinted:!1}});Ot("plasterWall",(n,e={})=>{const r=e.rough??.88,s=yn(n,256,{p0:64,octaves:3,gain:.45}),o=new Float32Array(256*256),a=.4*256/2;for(let l=0;l<256;l++)for(let u=0;u<256;u++){const c=l*256+u;let f=r+(s[c]**1.5-.5)*.1;e.ceiling||(f+=Math.cos(u/a*Math.PI*2)*.02),o[c]=Et(f)}return{ormMap:Kt(256,null,o,null),uvScale:[2,2],normalScale:0,tinted:!0}});Ot("plasterCeiling",n=>Qh.plasterWall(n,{rough:.93,ceiling:!0}));Ot("paintedJoinery",n=>{const i=yn(n,256,{p0:64,octaves:3}),r=new Float32Array(256*256);for(let s=0;s<256;s++)for(let o=0;o<256;o++){const a=s*256+o;r[a]=Et(.42+(i[a]-.5)*.06+Math.sin(o/256*Math.PI*2*12)*.015)}return{ormMap:Kt(256,null,r,null),uvScale:[1,1],normalScale:0,tinted:!0}});Ot("carpetPile",n=>{const i=pn(512,512);gi(i,[1,1,1]);const r=yn(n,512,{p0x:64,p0y:192,octaves:3,gain:.5}),s=i.d;for(let l=0;l<512;l++)for(let u=0;u<512;u++){const c=l*512+u,f=Math.cos(l/256*Math.PI*2)*.03,h=Et(.9+(r[c]-.5)*.16+f);s[c*3]=h,s[c*3+1]=h,s[c*3+2]=h}for(let l=0;l<1200;l++){const u=n.pick([[1.1,0],[.78,8],[.92,-10]]),c=fi(16777215,u[0],u[1],1);if(u[1]!==0){const f=n.range(0,1);c[0]=c[0]*(.94+f*.12),c[2]=c[2]*(1.06-f*.12)}po(i,n.range(0,512),n.range(0,512),n.range(1,2),c,.25)}const o=yn(n,512,{p0x:43,p0y:128,octaves:3}),a=new Float32Array(512*512);for(let l=0;l<a.length;l++)a[l]=Et(.92+(o[l]-.5)*.06);return{map:dn(i),normalMap:ri(o,512,.6),ormMap:Kt(512,null,a,null),uvScale:[1,1],normalScale:.7,tinted:!0}});Ot("ceramicTile",(n,e={})=>{const i=e.tile??.3,r=2,s=i*r,o=Math.max(2,Math.round(.003*512/s)),a=3,l=512/r,u=pi(12104358),c=[];for(let m=0;m<r*r;m++)c.push({c:fi(14473423,1+n.range(-.03,.03),n.range(-2,2)),g:n.range(-1,1)});const f=pn(512,512),h=new Float32Array(512*512),d=new Float32Array(512*512),g=new Float32Array(512*512),_=o/2;for(let m=0;m<512;m++)for(let p=0;p<512;p++){const x=m*512+p,M=Math.floor(p/l),E=Math.floor(m/l),C=p-M*l,y=m-E*l,S=Math.min(C,l-C,y,l-y);if(S<_){f.d[x*3]=u[0],f.d[x*3+1]=u[1],f.d[x*3+2]=u[2],h[x]=.85,d[x]=.25,g[x]=.62;continue}const A=c[E*r+M],R=(C/l+y/l)/2,v=1.03-.06*(A.g>0?R:1-R);f.d[x*3]=Et(A.c[0]*v),f.d[x*3+1]=Et(A.c[1]*v),f.d[x*3+2]=Et(A.c[2]*v),h[x]=.08;const b=Et((S-_)/a);d[x]=.25+.75*b,g[x]=.62+.38*b}return{map:dn(f),normalMap:ri(d,512,2),ormMap:Kt(512,g,h,null),uvScale:[s,s],normalScale:.8,tinted:!1}});Ot("fabricWeave",n=>{const i=pn(256,256),r=new Float32Array(256*256),s=new Float32Array(256*256),o=128,a=new Float32Array(o*8),l=new Float32Array(o*8);for(let c=0;c<a.length;c++)a[c]=n.range(-.035,.035);for(let c=0;c<l.length;c++)l[c]=n.range(-.035,.035);const u=yn(n,256,{p0:64,octaves:2});for(let c=0;c<256;c++)for(let f=0;f<256;f++){const h=c*256+f,d=(f>>1&1^c>>1&1)===0,g=f>>1,_=c>>1,m=d?a[(g*8+(c>>5&7))%a.length]:l[(_*8+(f>>5&7))%l.length],p=Et((d?1.06:.94)+m+(u[h]-.5)*.06);i.d[h*3]=p,i.d[h*3+1]=p,i.d[h*3+2]=p,r[h]=d?.66:.8,s[h]=d?1:.3}return{map:dn(i),normalMap:ri(sr(s,256,256,1),256,.8),ormMap:Kt(256,null,r,null),uvScale:[.25,.25],normalScale:.6,tinted:!0}});Ot("joineryTimber",n=>{const i=pn(512,512);gi(i,[1,1,1]);const r=yn(n,512,{p0x:48,p0y:8,octaves:4}),s=i.d;for(let l=0;l<512*512;l++){const u=Et(.94+(r[l]-.5)*.22);s[l*3]=u,s[l*3+1]=u,s[l*3+2]=u}const o=fi(16777215,.72);for(let l=0;l<220;l++){const u=n.range(0,512),c=n.range(2,6),f=512/n.int(1,2),h=n.range(0,Math.PI*2);Zh(i,u,c,f,h,n.range(2,3.5),o,n.range(.03,.09))}const a=new Float32Array(512*512);for(let l=0;l<a.length;l++)a[l]=Et(.55+(r[l]-.5)*.08);return{map:dn(i),ormMap:Kt(512,null,a,null),uvScale:[1,1],normalScale:0,tinted:!0}});Ot("vinylSheet",n=>{const i=pn(512,512);gi(i,14209732);const r=[13222578,15131093,11906460,14472902].map(pi);for(let l=0;l<3e3;l++)po(i,n.range(0,512),n.range(0,512),n.range(1,3),n.pick(r),.35);const s=yn(n,512,{p0:32,octaves:3}),o=new Float32Array(512*512);for(let l=0;l<o.length;l++)o[l]=Et(.28+(s[l]-.5)*.12);const a={w:512,h:512,d:new Float32Array(512*512*3)};for(let l=0;l<12;l++){const u=n.range(0,512),c=n.range(0,512),f=n.range(40,120),h=n.range(0,Math.PI*2),d=n.range(.6,2.2),g=[];for(let _=0;_<=24;_++){const m=h+d*(_/24);g.push([u+Math.cos(m)*f,c+Math.sin(m)*f])}k0(i,g,n.range(2,4),fi(14209732,.88),.3),k0(a,g,n.range(2,4),[1,1,1],1)}for(let l=0;l<o.length;l++)o[l]=Et(o[l]+a.d[l*3]*.15);return{map:dn(i),ormMap:Kt(512,null,o,null),uvScale:[1,1],normalScale:0,tinted:!1}});Ot("laminateBench",n=>{const r=pn(512,512);gi(r,di.benchtop);const s=[9274743,14077886,7235417].map(pi);for(let u=0;u<2e3;u++)po(r,n.range(0,512),n.range(0,512),n.range(1,2.5),n.pick(s),.3);const o=new Float32Array(512*512);for(let u=0;u<o.length;u++)o[u]=.28;const a=Math.max(2,Math.round(.006*512/.6)),l=fi(di.benchtop,.82);for(let u=0;u<512;u++)if(Math.min(u,512-u)<a)for(let f=0;f<512;f++)Rc(r,f,u,l,.85),o[u*512+f]=.45;return{map:dn(r),ormMap:Kt(512,null,o,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});Ot("ceilingGrid",n=>{const r=pn(512,512);gi(r,15526370);const s=Math.max(2,Math.round(.015*512/1.2)),o=Math.max(2,Math.round(.015*512/.6)),a=pi(14210509),l=pi(12434098),u=yn(n,512,{p0:64,octaves:2}),c=new Float32Array(512*512);for(let f=0;f<512;f++)for(let h=0;h<512;h++){const d=f*512+h,g=Math.min(h,512-h),_=Math.min(f,512-f);if(g<s/2||_<o/2){const x=g>=s/2-2&&g<s/2||_>=o/2-2&&_<o/2?l:a;r.d[d*3]=x[0],r.d[d*3+1]=x[1],r.d[d*3+2]=x[2],c[d]=.55}else{const p=1+(u[d]-.5)*.04;r.d[d*3]*=p,r.d[d*3+1]*=p,r.d[d*3+2]*=p,c[d]=.9}}return{map:dn(r),ormMap:Kt(512,null,c,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});Ot("applianceEnamel",n=>{const i=yn(n,256,{p0:64,octaves:3}),r=new Float32Array(256*256);for(let s=0;s<r.length;s++)r[s]=Et(.3+(i[s]-.5)*.04);return{ormMap:Kt(256,null,r,null),uvScale:[1,1],normalScale:0,tinted:!0}});Ot("metalBrushed",n=>{const i=new Float32Array(65536),r=new Float32Array(256*256),s=yn(n,256,{p0x:8,p0y:256,octaves:2});for(let o=0;o<256;o++){const a=n.range(-.1,.1);for(let l=0;l<256;l++){const u=o*256+l;i[u]=Et(.35+a*.6+(s[u]-.5)*.1)}}return{ormMap:Kt(256,null,i,r),uvScale:[.4,.4],normalScale:0,tinted:!0}});Ot("quiltFolds",n=>{const i=[],r=n.int(5,9);for(let h=0;h<r;h++)i.push({a:n.range(.4,1),c:n.range(.05,.95),w:n.range(.06,.14)});const s=h=>{let d=0;for(const g of i)d+=g.a*Math.exp(-(((h-g.c)/g.w)**2));return d+=.5*Math.exp(-((h/.04)**2))+.5*Math.exp(-(((1-h)/.04)**2)),d};let o=1/0,a=-1/0;for(let h=0;h<=256;h++){const d=s(h/256);d<o&&(o=d),d>a&&(a=d)}const l=a-o||1,u=h=>(s(Et(h))-o)/l,c=pn(512,256),f=new Float32Array(512*256);for(let h=0;h<512;h++){const d=u(h/511),g=.9+.1*d;for(let _=0;_<256;_++){const m=_*512+h;c.d[m*3]=g,c.d[m*3+1]=g,c.d[m*3+2]=g,f[m]=d}}return{map:O0(dn(c)),normalMap:O0(ri(f,512,3,256)),uvScale:null,normalScale:1,field:u,folds:i,tinted:!0}});Ot("pictureArt",n=>{const i=[[14272936,10251087,4148050,15130057],[8361635,14213090,3095106,12820586],[11056266,15196880,6056775,9067068],[13609376,8015698,15722204,3814198],[9415096,15788760,4479587,12153919]],r=[];for(let s=0;s<5;s++){const o=i[s].map(pi),a=pn(256,256);gi(a,o[n.int(0,3)]);const l=n.int(0,2);if(l===0){let c=0;for(;c<256;){const f=n.int(12,48);kn(a,0,c,256,Math.min(256,c+f),o[n.int(0,3)],n.range(.5,1)),c+=f}}else if(l===1)for(let c=0;c<n.int(5,11);c++){const f=n.range(0,179.2),h=n.range(0,256*.7);kn(a,f,h,f+n.range(30,110),h+n.range(30,110),o[n.int(0,3)],n.range(.55,.95))}else{const c=n.range(115.2,174.08);kn(a,0,0,256,c,o[0],1),kn(a,0,c,256,256,o[2],1);for(let f=0;f<n.int(3,7);f++){const h=n.range(c-40,c+40);kn(a,0,h,256,h+n.range(3,10),o[n.int(0,3)],n.range(.3,.7))}po(a,n.range(256*.2,256*.8),n.range(20,c-20),n.range(12,26),o[3],.9)}const u=fi(16777215,.97);kn(a,0,0,256,6,u),kn(a,0,250,256,256,u),kn(a,0,0,6,256,u),kn(a,250,0,256,256,u),r.push(O0(dn(a)))}return{maps:r,map:r[0],uvScale:null,normalScale:0,prints:5,tinted:!1}});Ot("garmentKnit",n=>{const i=pn(256,256),r=new Float32Array(256*256),s=new Float32Array(256*256),o=16,a=12,l=yn(n,256,{p0:64,octaves:2});for(let u=0;u<256;u++)for(let c=0;c<256;c++){const f=u*256+c,h=c%o/o*2-1,d=Math.cos(h*Math.PI*.5),g=(c/o|0)%2?a/2:0,_=(u+g)%a/a,m=1-Math.abs(_*2-1)*.45,p=Et(d*.75+m*.25+(l[f]-.5)*.1),x=Et(.8+p*.28);i.d[f*3]=x,i.d[f*3+1]=x,i.d[f*3+2]=x,r[f]=.94-p*.1,s[f]=p}return{map:dn(i),normalMap:ri(sr(s,256,256,1),256,1.2),ormMap:Kt(256,null,r,null),uvScale:[.16,.16],normalScale:1.1,tinted:!0}});Ot("garmentDenim",n=>{const i=pn(256,256),r=new Float32Array(256*256),s=new Float32Array(256*256),o=yn(n,256,{p0:96,octaves:3}),a=new Float32Array(256);for(let l=0;l<256;l++)a[l]=n.range(-.05,.05);for(let l=0;l<256;l++)for(let u=0;u<256;u++){const c=l*256+u,f=(u+l)%3!==0,h=(u>>1&1)===0,g=Et((f?h?1.02:.9:.72)+a[(u+l*3)%256]+(o[c]-.5)*.07);i.d[c*3]=g,i.d[c*3+1]=g,i.d[c*3+2]=g,r[c]=f?.78:.88,s[c]=f?1:.25}return{map:dn(i),normalMap:ri(sr(s,256,256,1),256,.9),ormMap:Kt(256,null,r,null),uvScale:[.12,.12],normalScale:.85,tinted:!0}});Ot("garmentCotton",n=>{const i=pn(256,256),r=new Float32Array(256*256),s=new Float32Array(256*256),o=yn(n,256,{p0:48,octaves:3});for(let a=0;a<256;a++)for(let l=0;l<256;l++){const u=a*256+l,c=(l&1^a&1)===0,f=Et((c?1.02:.97)+(o[u]-.5)*.09);i.d[u*3]=f,i.d[u*3+1]=f,i.d[u*3+2]=f,r[u]=.88-(c?.03:0),s[u]=c?.7:.4}return{map:dn(i),normalMap:ri(sr(s,256,256,1),256,.45),ormMap:Kt(256,null,r,null),uvScale:[.09,.09],normalScale:.4,tinted:!0}});Ot("garmentButtons",n=>{const i=pn(64,256);gi(i,[.97,.97,.97]);const r=new Float32Array(64*256).fill(.86),s=new Float32Array(64*256).fill(.45),o=64/2,a=5,l=64*.2;for(let u=0;u<256;u++)for(let c=0;c<64;c++){const f=u*64+c,h=Math.abs(c-o);h<64*.3&&(s[f]=.8),h>64*.3&&h<64*.36&&(s[f]=.2)}for(let u=0;u<a;u++){const c=256*((u+.7)/(a+.4));for(let f=Math.floor(c-l-2);f<=Math.ceil(c+l+2);f++)if(!(f<0||f>=256))for(let h=0;h<64;h++){const d=Math.hypot(h-o,f-c);if(d>l)continue;const g=f*64+h,_=Math.sqrt(Math.max(0,1-(d/l)**2));s[g]=.8+_*.2;const m=.86+_*.16;i.d[g*3]=m,i.d[g*3+1]=m,i.d[g*3+2]=m,r[g]=.42,Math.abs(f-c)<l*.16&&Math.abs(Math.abs(h-o)-l*.3)<l*.14&&(s[g]=.6,i.d[g*3]=.62,i.d[g*3+1]=.62,i.d[g*3+2]=.62)}}return{map:dn(i),normalMap:ri(sr(s,64,256,1),64,1.4,256),ormMap:Kt(64,null,r,null,256),uvScale:[1,1],normalScale:1,tinted:!0,noTile:!0}});Ot("garmentZip",n=>{const i=pn(64,256);gi(i,[.95,.95,.95]);const r=new Float32Array(64*256).fill(.86),s=new Float32Array(64*256).fill(.45),o=64/2,a=7;for(let u=0;u<256;u++)for(let c=0;c<64;c++){const f=u*64+c,h=c-o,d=Math.abs(h);if(d<64*.34&&(s[f]=.62,r[f]=.82),d<64*.17){const g=h<0?0:a/2,m=(u+g)%a/a<.55;s[f]=m?1:.5;const p=m?1.06:.74;i.d[f*3]=p,i.d[f*3+1]=p,i.d[f*3+2]=p,r[f]=m?.3:.55}}const l=256*.14;for(let u=Math.floor(l);u<l+256*.055;u++)for(let c=Math.floor(o-64*.11);c<o+64*.11;c++){const f=u*64+c;f<0||f>=64*256||(s[f]=1,r[f]=.28,i.d[f*3]=1.1,i.d[f*3+1]=1.1,i.d[f*3+2]=1.1)}return{map:dn(i),normalMap:ri(sr(s,64,256,1),64,1.6,256),ormMap:Kt(64,null,r,null,256),uvScale:[1,1],normalScale:1.2,tinted:!0,noTile:!0}});Ot("garmentPlate",n=>{const i=pn(256,256);gi(i,[1,1,1]);const r=new Float32Array(256*256).fill(.42),s=new Float32Array(256*256).fill(.72),o=yn(n,256,{p0:64,octaves:3}),a=128;for(let u=0;u<256;u++)for(let c=0;c<256;c++){const f=u*256+c,h=Math.min(c%a,a-1-c%a),d=Math.min(u%a,a-1-u%a),g=Math.min(h,d);let _=.72,m=1,p=.42;if(g<2)_=.22,m=.93,p=.58;else if(g<5){const x=(g-2)/3;_=.22+x*.5,m=.93+x*.08,p=.58-x*.16}m+=(o[f]-.5)*.05,i.d[f*3]=m,i.d[f*3+1]=m,i.d[f*3+2]=m,r[f]=p,s[f]=_}const l=2;for(let u=0;u<256;u+=a)for(let c=0;c<256;c+=a)for(const[f,h]of[[7,7],[a-7,7],[7,a-7],[a-7,a-7]])for(let d=-l-1;d<=l+1;d++)for(let g=-l-1;g<=l+1;g++){const _=(c+f+g+256)%256,m=(u+h+d+256)%256,p=Math.hypot(g,d);if(p>l)continue;const x=m*256+_,M=Math.sqrt(Math.max(0,1-(p/l)**2));s[x]=.82+M*.18;const E=1.02+M*.1;i.d[x*3]=E,i.d[x*3+1]=E,i.d[x*3+2]=E,r[x]=.3}return{map:dn(i),normalMap:ri(sr(s,256,256,1),256,1.5),ormMap:Kt(256,null,r,null),uvScale:[.34,.34],normalScale:1.45,tinted:!0}});class Rx{constructor(){this._handlers=new Map,this._log=[]}on(e,t){return this._handlers.has(e)||this._handlers.set(e,new Set),this._handlers.get(e).add(t),()=>this.off(e,t)}once(e,t){const i=this.on(e,r=>{i(),t(r)});return i}off(e,t){var i;(i=this._handlers.get(e))==null||i.delete(t)}emit(e,t={}){this._log.push({type:e,payload:t,at:performance.now()}),this._log.length>400&&this._log.shift();const i=this._handlers.get(e);if(i)for(const a of[...i])a(t,e);const r=e.split(":")[0]+":*",s=this._handlers.get(r);if(s)for(const a of[...s])a(t,e);const o=this._handlers.get("*");if(o)for(const a of[...o])a(t,e)}recent(e=40){return this._log.slice(-e)}}const Cx={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],sprint:["ShiftLeft","ShiftRight"],jump:["Space"],interact:["KeyE"],camera:["KeyV"],phone:["KeyQ"],journal:["KeyJ"],inventory:["KeyI"],map:["KeyM"],wait:["KeyT"],rotate:["KeyR"],furnishDone:["KeyF"],furnishSell:["KeyX"],cancel:["Escape"]},Lx=2e3;class Px{constructor(e,t){this.bus=e,this.dom=t,this.bindings={...Cx},this.down=new Set,this.pressed=new Set,this.mouse={dx:0,dy:0,sensitivity:.0022,invertY:!1},this.locked=!1,this.lockPending=!1,this._lockTimer=0,this.enabled=!0,this._attach()}clearHeld(){this.down.clear(),this.pressed.clear(),this.mouse.dx=0,this.mouse.dy=0}_attach(){window.addEventListener("keydown",e=>{if(e.repeat)return;Object.values(this.bindings).some(i=>i.includes(e.code))&&e.code!=="Escape"&&e.preventDefault(),this.down.add(e.code),this.pressed.add(e.code),this.bus.emit("input:key",{code:e.code});for(const[i,r]of Object.entries(this.bindings))r.includes(e.code)&&this.bus.emit("action:"+i,{})}),window.addEventListener("keyup",e=>this.down.delete(e.code)),window.addEventListener("blur",()=>this.clearHeld()),window.addEventListener("focus",()=>this.clearHeld()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clearHeld()}),document.addEventListener("pointerlockchange",()=>{this._settleLock(),this.locked=document.pointerLockElement===this.dom,this.locked||this.clearHeld(),this.bus.emit("input:pointerlock",{locked:this.locked})}),document.addEventListener("pointerlockerror",e=>this._failLock(e)),window.addEventListener("mousemove",e=>{this.locked&&(this.mouse.dx+=e.movementX,this.mouse.dy+=e.movementY)}),window.addEventListener("mousedown",e=>{this.pressed.add("Mouse"+e.button),this.down.add("Mouse"+e.button)}),window.addEventListener("mouseup",e=>this.down.delete("Mouse"+e.button)),window.addEventListener("wheel",e=>{this.bus.emit("input:wheel",{delta:Math.sign(e.deltaY)})},{passive:!0})}_settleLock(){this.lockPending=!1,clearTimeout(this._lockTimer),this._lockTimer=0}_failLock(e){const t=this.lockPending;this._settleLock(),t&&(this.locked=!1,console.warn("[input] pointer lock request refused",e||""),this.bus.emit("input:pointerlockfailed",{error:e||null}))}requestLock(){var t,i;if(this.locked||this.lockPending||!((t=this.dom)!=null&&t.requestPointerLock))return;this.lockPending=!0,clearTimeout(this._lockTimer),this._lockTimer=setTimeout(()=>{this.lockPending=!1},Lx);let e;try{e=this.dom.requestPointerLock()}catch(r){this._failLock(r);return}(i=e==null?void 0:e.catch)==null||i.call(e,r=>this._failLock(r))}requestLockFresh(){this.locked||(this._settleLock(),this.requestLock())}releaseLock(){var e;this._settleLock(),this.locked=!1,(e=document.exitPointerLock)==null||e.call(document)}isDown(e){return this.enabled?(this.bindings[e]||[]).some(t=>this.down.has(t)):!1}wasPressed(e){return this.enabled?(this.bindings[e]||[]).some(t=>this.pressed.has(t)):!1}axis(){let e=0,t=0;this.isDown("forward")&&(t+=1),this.isDown("back")&&(t-=1),this.isDown("right")&&(e+=1),this.isDown("left")&&(e-=1);const i=Math.hypot(e,t);return i>1?{x:e/i,y:t/i}:{x:e,y:t}}consumeMouse(){const e={dx:this.mouse.dx,dy:this.mouse.dy};return this.mouse.dx=0,this.mouse.dy=0,e}endFrame(){this.pressed.clear()}}const B0=n=>Number.isFinite(n)&&n>0?n:0;function Cc(n={}){const e=n.max??100,t=n.shield??0;return{max:e,hp:Math.min(n.hp??e,e),shield:t,shieldMax:n.shieldMax??t,thresholds:[...n.thresholds??[]].sort((i,r)=>r-i),dead:(n.hp??e)<=0}}function Ix(n,e,t){const i=[];for(const r of n.thresholds){const s=n.max*r;e>s&&t<=s&&i.push({at:r,hp:s})}return i}function ed(n,e={}){const t=[];if(n.dead)return{state:n,events:t};const i=B0(e.amount),r=e.crit?i*(e.critMul??2):i,s=e.kind??null,o=e.source??null;let{hp:a,shield:l}=n,u=r;if(l>0&&!e.ignoreShield&&u>0){const h=Math.min(l,u);l-=h,u-=h,t.push({type:"absorbed",amount:h,shield:l,kind:s,source:o}),l===0&&t.push({type:"shieldBroken",overflow:u,kind:s,source:o})}const c=a;a=Math.max(0,a-u),(u>0||r===0)&&t.push({type:"damaged",amount:u,hp:a,was:c,kind:s,source:o});for(const h of Ix(n,c,a))t.push({type:"threshold",at:h.at,hp:h.hp,kind:s,source:o});const f=a<=0;return f&&t.push({type:"died",kind:s,source:o}),{state:{...n,hp:a,shield:l,dead:f},events:t}}function z0(n,e={}){const t=[];if(n.dead)return{state:n,events:t};const i=Math.min(n.max,n.hp+B0(e.amount)),r=Math.min(n.shieldMax,n.shield+B0(e.shield));return i!==n.hp&&t.push({type:"healed",amount:i-n.hp,hp:i,was:n.hp,source:e.source??null}),r!==n.shield&&t.push({type:"shielded",amount:r-n.shield,shield:r,source:e.source??null}),{state:{...n,hp:i,shield:r},events:t}}const td=n=>n.max>0?n.hp/n.max:0,Lc=n=>n.shieldMax>0?n.shield/n.shieldMax:0,Dx=1e-9,Ux=n=>n>0?60/n:0;function Nx(n={}){const e=n.magazine??30;return{magazine:e,loaded:Math.min(n.loaded??e,e),reserve:n.reserve??e*6,interval:Ux(n.rpm??600),reloadTime:n.reloadTime??2,burst:n.burst??0,auto:n.auto??!0,maxCatchUp:n.maxCatchUp??.25,nextShotAt:0,reloadEndsAt:0,reloading:!1,fired:!1,burstLeft:0}}const nd=(n,e)=>n.reloading&&e<n.reloadEndsAt;function Fx(n,e){if(!n.reloading||e<n.reloadEndsAt)return{state:n,events:[]};const t=n.magazine-n.loaded,i=Math.min(t,n.reserve),r=n.loaded+i,s=n.reserve===1/0?1/0:n.reserve-i;return{state:{...n,loaded:r,reserve:s,reloading:!1,reloadEndsAt:0},events:[{type:"reloaded",at:e,loaded:r,reserve:s,took:i}]}}function Ox(n,e,t={}){const i=[],r=[];if(nd(n,e))return t.pressed&&i.push({type:"blocked",why:"reloading",at:e}),{state:n,shots:r,events:i};if(!(n.auto?t.held||t.pressed:!!t.pressed))return{state:n,shots:r,events:i};if(n.loaded<=0)return t.pressed&&i.push({type:"dry",at:e}),{state:n,shots:r,events:i};let o=n.loaded,a=n.nextShotAt;(!n.fired||t.pressed||e-a>n.maxCatchUp)&&(a=e);const l=n.burst>0;let u=l?t.pressed?n.burst:n.burstLeft:0;for(;o>0&&a<=e+Dx&&(!l||u>0)&&(r.push({at:Math.min(a,e),remaining:o-1}),o--,u--,a+=n.interval,!(n.interval<=0)););return r.length&&i.push({type:"fired",count:r.length,loaded:o,at:e}),o===0&&n.loaded>0&&i.push({type:"emptied",at:e}),{state:{...n,loaded:o,nextShotAt:a,burstLeft:l?Math.max(0,u):0,fired:n.fired||r.length>0},shots:r,events:i}}function kx(n,e){return n.reloading?{state:n,events:[]}:n.loaded>=n.magazine?{state:n,events:[{type:"refused",why:"full",at:e}]}:n.reserve<=0?{state:n,events:[{type:"refused",why:"empty",at:e}]}:{state:{...n,reloading:!0,reloadEndsAt:e+n.reloadTime},events:[{type:"reloading",at:e,endsAt:e+n.reloadTime}]}}const Bx=.26,zx=.13,Hx=2.4,jr=(n,e,t)=>n+(e-n)*t,of=(n,e,t,i)=>i<=0?e:Math.max(0,Math.min(1,n+(e-n)*Math.min(1,t/i))),gl={x:0,y:0,z:-.3,pitch:0,yaw:0,roll:0};function af(n,e,t,i){return i.x=jr(n.x,e.x,t),i.y=jr(n.y,e.y,t),i.z=jr(n.z,e.z,t),i.pitch=jr(n.pitch,e.pitch,t),i.yaw=jr(n.yaw,e.yaw,t),i.roll=jr(n.roll,e.roll,t),i}function Gx(n={}){if(!n.model)throw new Error("makeViewmodel: needs a { model }");const e={...gl,...n.rest??{}},t={...gl,...n.aim??e},i=n.stowDrop??.23,r={...e,y:e.y-i},s=n.drawTime??Bx,o=n.aimTime??zx,a=n.reach??6,l=n.cone??.3,u=new fo,c=new Mn(n.fov??48,1,.01,1),f=new Sn;let h=n.model,d=n.emitter??null;f.add(h),u.add(f);const g=new wc(16777215,n.keyIntensity??2.2);g.position.set(.4,.8,.6),u.add(g,new Tc(16777215,n.fillIntensity??.9));let _=0,m=0,p=0,x=0;const M={...r},E={...gl},C={scene:u,camera:c,model:n.model,get out(){return p===1},get drawn(){return _},get aiming(){return x===1&&_>.6},get liveReach(){return this.aiming?a*Hx:a},get liveCone(){return l},channel(y="tool"){return{id:y,get radius(){return C.liveReach},get cone(){return C.liveCone},when:()=>C.aiming,filter:S=>{var A;return((A=S==null?void 0:S.data)==null?void 0:A.tool)!==!1}}},swap(y,S){const A=h;return h&&f.remove(h),h=y??null,h&&f.add(h),C.model=h,d=S??null,A},draw(){p=1},stow(){p=0,x=0},toggle(){p=p?0:1,p||(x=0)},setAim(y){x=y?1:0,y&&(p=1)},ray(y,S=new D,A=new D){return S.copy(y.position),y.getWorldDirection(A),{origin:S,dir:A}},emitterAt(y=new D){return d?(d.updateWorldMatrix(!0,!1),y.setFromMatrixPosition(d.matrixWorld)):y.set(0,0,0)},update(y){return _=of(_,p,y,s),m=of(m,x&&_>.6?1:0,y,o),af(r,e,_,E),af(E,t,m,M),f.position.set(M.x,M.y,M.z),f.rotation.set(M.pitch,M.yaw,M.roll,"YXZ"),f.visible=_>.001,M},pass(y,S){if(f.visible===!1)return;c.aspect=(S==null?void 0:S.aspect)??c.aspect,c.updateProjectionMatrix();const A=y.autoClear;y.autoClear=!1,y.clearDepth(),y.render(u,c),y.autoClear=A},dispose(){u.traverse(y=>{var S,A;y.isMesh&&((S=y.geometry)==null||S.dispose(),Array.isArray(y.material)?y.material.forEach(R=>R.dispose()):(A=y.material)==null||A.dispose())})}};return C.update(0),C}function Pc(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new ii;let u=0;for(let c=0;c<n.length;++c){const f=n[c];let h=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(f.attributes[d]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!r.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,d,c),u+=d}}if(t){let c=0;const f=[];for(let h=0;h<n.length;++h){const d=n[h].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+c);c+=n[h].attributes.position.count}l.setIndex(f)}for(const c in s){const f=lf(s[c]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,f)}for(const c in o){const f=o[c][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let h=0;h<f;++h){const d=[];for(let _=0;_<o[c].length;++_)d.push(o[c][_][h]);const g=lf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(g)}}return l}function lf(n){let e,t,i,r=-1,s=0;for(let u=0;u<n.length;++u){const c=n[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*t}const o=new e(s),a=new An(o,t,i);let l=0;for(let u=0;u<n.length;++u){const c=n[u];if(c.isInterleavedBufferAttribute){const f=l/t;for(let h=0,d=c.count;h<d;h++)for(let g=0;g<t;g++){const _=c.getComponent(h,g);a.setComponent(h+f,g,_)}}else o.set(c.array,l);l+=c.count*t}return r!==void 0&&(a.gpuType=r),a}const Vx=12,os=24,id=n=>n.startsWith("glow"),cf=new en,Wx=new Ht,Xx=new D,qx=new D(1,1,1),Yx=new Xe,uf=new D;function ba(n,e=new Xe){const[,,,,t,i,r,,s=0,o=0,a=0]=n;return cf.set(s,o,a),e.compose(Xx.set(t,i,r),Wx.setFromEuler(cf),qx)}function mo(n,e={}){const t=Object.keys(n.bones),i={};for(const x of t){const M=n.bones[x],E=new qh;E.name=x,E.position.set(...M.at),M.rot&&E.rotation.set(...M.rot),i[x]=E}const r=new Sn;r.name=n.id??"box-rig";for(const x of t){const M=n.bones[x].parent;if(M===void 0)r.add(i[x]);else if(i[M])i[M].add(i[x]);else throw new Error(`BoxRig '${r.name}': bone '${x}' has unknown parent '${M}'`)}r.updateMatrixWorld(!0);const s=new Map(t.map((x,M)=>[x,M])),o={solid:[],glow:[]},a=new Qe,l=new Xe;n.parts.forEach((x,M)=>{const[E,C,y,S,,,,A]=x;if(!s.has(E))throw new Error(`BoxRig '${r.name}': part ${M} rides unknown bone '${E}'`);const R=n.palette[A];if(R===void 0)throw new Error(`BoxRig '${r.name}': part ${M} has unknown colour '${A}'`);const v=new cn(C,y,S);v.deleteAttribute("uv"),v.applyMatrix4(Yx.multiplyMatrices(i[E].matrixWorld,ba(x,l))),a.set(R);const b=v.attributes.position.count,P=new Float32Array(b*3),I=new Uint16Array(b*4),O=new Float32Array(b*4),U=s.get(E);for(let N=0;N<b;N++)P[N*3]=a.r,P[N*3+1]=a.g,P[N*3+2]=a.b,I[N*4]=U,O[N*4]=1;v.setAttribute("color",new An(P,3)),v.setAttribute("skinIndex",new hc(I,4)),v.setAttribute("skinWeight",new An(O,4)),o[id(A)?"glow":"solid"].push({g:v,part:x})});const u=new _c(t.map(x=>i[x])),c=[],f=(x,M)=>{const E=o[x];if(!E.length)return null;const C=E.length===1?E[0].g:Pc(E.map(S=>S.g),!1);if(!C)throw new Error(`BoxRig '${r.name}': ${x} boxes would not merge`);E.length>1&&E.forEach(S=>S.g.dispose());const y=new lx(C,M);return y.name=`${r.name}:${x}`,y.userData.parts=E.map(S=>S.part),r.add(y),y.bind(u),c.push(y),y},h=f("solid",e.solidMaterial??new Fi({vertexColors:!0,roughness:.85,metalness:0})),d=f("glow",e.glowMaterial??new hn({vertexColors:!0})),g=new Ni;for(const x of c)x.geometry.computeBoundingBox(),g.union(x.geometry.boundingBox);const _=g.clone().expandByPoint(uf.set(0,0,0)).getBoundingSphere(new As);_.radius=_.radius*1.25+.4;for(const x of c)x.boundingSphere=_.clone();for(const x of t){const M=i[x];M.userData.rest={p:M.position.clone(),r:M.rotation.clone()}}const m=n.scale??1;r.scale.setScalar(m);const p=d?d.geometry.attributes.color.array.slice():null;return{root:r,bones:i,skeleton:u,solid:h,glow:d,meshes:c,scale:m,reset(){for(const x of t){const M=i[x];M.position.copy(M.userData.rest.p),M.rotation.copy(M.userData.rest.r)}},partAt(x,M){var C;const E=(C=x==null?void 0:x.userData)==null?void 0:C.parts;return E&&Number.isInteger(M)?E[Math.floor(M/Vx)]??null:null},bounds(x=[]){const M=new Ni;for(const E of c){const C=E.geometry.attributes.position;E.userData.parts.forEach((y,S)=>{if(!x.includes(y[0]))for(let A=S*os;A<(S+1)*os;A++)M.expandByPoint(uf.fromBufferAttribute(C,A))})}return M.min.multiplyScalar(m),M.max.multiplyScalar(m),M},setGlowLit(x,M=()=>!1){if(!d)return;const E=d.geometry.attributes.color;d.userData.parts.forEach((C,y)=>{const S=x||M(C)?1:.1;for(let A=y*os*3;A<(y+1)*os*3;A++)E.array[A]=p[A]*S}),E.needsUpdate=!0},dispose(){for(const x of c)x.geometry.dispose();u.dispose()}}}const Ct=(n,e,t)=>n<e?e:n>t?t:n,Ln=(n,e,t)=>n+(e-n)*t,bs=n=>n<=0?0:n>=1?1:n*n*(3-2*n),oi=n=>{const e=1-Ct(n,0,1);return 1-e*e*e},br=n=>{const e=Ct(n,0,1);return e*e},_l=(n,e,t,i)=>t<=0?e:n+(e-n)*(1-Math.exp(-Math.LN2*i/t));function Jn(n,e,t,i){const r=2*Math.LN2/t,s=n.x-e,o=n.v+s*r,a=Math.exp(-r*i);n.x=a*(s+o*i)+e,n.v=a*(n.v-o*r*i)}const Bs=(n,e)=>n*Math.E/e,ff=n=>2*Math.LN2*n;function $x(n,e,t,i){if(i<=0)return e?1:0;if(e){if(n>=1)return 1;const s=1-Math.cbrt(1-n)+t/i;return s>=1?1:1-(1-s)**3}if(n<=0)return 0;const r=Math.cbrt(n)-t/i;return r<=0?0:r**3}function rd(n,e,t,i){if(!i)return bs(n);const r=!!i.in&&i.in.some(o=>Math.abs(o-t)<1e-9),s=!!i.out&&i.out.some(o=>Math.abs(o-e)<1e-9);return r&&s?Ct(n,0,1):r?br(n):s?oi(n):bs(n)}function Bn(n,e,t=[],i=null){const r=n[0].length-1;if(e<=n[0][0]){for(let c=0;c<r;c++)t[c]=n[0][c+1];return t}const s=n[n.length-1];if(e>=s[0]){for(let c=0;c<r;c++)t[c]=s[c+1];return t}let o=1;for(;n[o][0]<e;)o++;const a=n[o-1],l=n[o],u=rd((e-a[0])/(l[0]-a[0]||1),a[0],l[0],i);for(let c=0;c<r;c++)t[c]=a[c+1]+(l[c+1]-a[c+1])*u;return t}function hf(n,e,t=null){if(e<=n[0][0])return{from:n[0][1],to:n[0][1],w:1,extra:n[0].slice(2)};const i=n[n.length-1];if(e>=i[0])return{from:i[1],to:i[1],w:1,extra:i.slice(2)};let r=1;for(;n[r][0]<e;)r++;const s=n[r-1],o=n[r],a=rd((e-s[0])/(o[0]-s[0]||1),s[0],o[0],t);return{from:s[1],to:o[1],w:a,extra:s.slice(2).map((l,u)=>l+(o[u+2]-l)*a)}}const Er=n=>{const e=Math.sin(n*12.9898+78.233)*43758.5453;return(e-Math.floor(e))*2-1},Kx={pelvis:{at:[0,.92,0]},spine:{parent:"pelvis",at:[0,.06,0]},chest:{parent:"spine",at:[0,.24,0]},head:{parent:"chest",at:[0,.34,0]},armL:{parent:"chest",at:[.28,.26,0]},foreL:{parent:"armL",at:[0,-.32,0]},handL:{parent:"foreL",at:[0,-.28,0]},armR:{parent:"chest",at:[-.28,.26,0]},foreR:{parent:"armR",at:[0,-.32,0]},handR:{parent:"foreR",at:[0,-.28,0]},thighL:{parent:"pelvis",at:[.1,-.04,0]},shinL:{parent:"thighL",at:[0,-.42,0]},footL:{parent:"shinL",at:[0,-.38,0]},thighR:{parent:"pelvis",at:[-.1,-.04,0]},shinR:{parent:"thighR",at:[0,-.42,0]},footR:{parent:"shinR",at:[0,-.38,0]},capeA:{parent:"chest",at:[0,.26,-.14]},capeB:{parent:"capeA",at:[0,-.52,0]},mark:{parent:"pelvis",at:[0,-.02,.13]},skirtB:{parent:"pelvis",at:[0,-.02,-.13]}},sd=[["pelvis",.36,.16,.23,0,0,0,"suit"],["spine",.4,.26,.23,0,.12,0,"suit"],["chest",.44,.3,.25,0,.14,0,"suit"],["chest",.13,.08,.13,0,.32,0,"suit"],["head",.21,.23,.23,0,.115,0,"mask"],["armL",.12,.34,.13,0,-.16,0,"suit"],["foreL",.11,.3,.12,0,-.14,0,"suit"],["handL",.1,.1,.1,0,-.05,0,"glove"],["armR",.12,.34,.13,0,-.16,0,"suit"],["foreR",.11,.3,.12,0,-.14,0,"suit"],["handR",.1,.1,.1,0,-.05,0,"glove"],["thighL",.17,.44,.19,0,-.21,0,"suit"],["shinL",.15,.4,.17,0,-.2,0,"suit"],["footL",.18,.09,.3,0,-.035,.05,"boot"],["thighR",.17,.44,.19,0,-.21,0,"suit"],["shinR",.15,.4,.17,0,-.2,0,"suit"],["footR",.18,.09,.3,0,-.035,.05,"boot"]],jx={thighL:[-.1,0,0],thighR:[-.1,0,0],shinL:[.2,0,0],shinR:[.2,0,0],footL:[-.1,0,0],footR:[-.1,0,0],spine:[.05,0,0],chest:[.05,0,0],head:[-.1,0,0],armL:[-.35,0,.18],armR:[-.35,0,-.18],foreL:[-.8,0,0],foreR:[-.8,0,0],capeA:[.1,0,0],skirtB:[.06,0,0],mark:[-.04,0,0]},Zx=-.01,Vo=Math.PI*2;function Jx(n,e,t=1){for(const i in e){const r=e[i],s=n[i];s&&(s.rotation.x+=r[0]*t,s.rotation.y+=r[1]*t,s.rotation.z+=r[2]*t)}}function Qx(n,e,t){n.armL.rotation.z+=t,n.armR.rotation.z-=t,n.foreL.rotation.x+=-.12,n.foreR.rotation.x+=-.12,n.chest.rotation.x+=.012*Math.sin(Vo*e/3.2),n.capeA.rotation.x+=.03*Math.sin(Vo*e/2.6),n.mark.rotation.x+=.02*Math.sin(Vo*e/2.6+1),n.skirtB.rotation.x+=.02*Math.sin(Vo*e/2.6+2)}const eM=(n,e,t)=>({id:`risen-${n}`,bones:Kx,parts:[...sd,...e],palette:t}),tM={titanPlate:{plate:"#595d60",plateDark:"#3a3d40",plateEdge:"#a9b3b8",gauntlet:"#595d60",cloth:"#5d6142",clothDark:"#41442e",clothTrim:"#c8bfa6",sleeve:"#2b2e31",classItem:"#5d6142",classItemMark:"#c8bfa6",suit:"#2b2e31",glove:"#3b2f27",leather:"#5a3e2b",strap:"#4a3a2c",boot:"#2a2622",mask:"#151719",glowVisor:"#dff3ff",glowElement:"#6fd3ff"},hunterCloak:{plate:"#7d858a",plateDark:"#4a4f53",plateEdge:"#b9c1c5",gauntlet:"#7d858a",cloth:"#3e3530",clothDark:"#2c2622",clothTrim:"#bdb29a",sleeve:"#4f6660",classItem:"#3e3530",classItemMark:"#8a4a2b",suit:"#2b2e31",glove:"#3b2f27",leather:"#5a3e2b",strap:"#8a4a2b",boot:"#2a2622",mask:"#151719",glowVisor:"#dff3ff",glowElement:"#ff8a2a"},warlockRobe:{plate:"#4a4f53",plateDark:"#33373a",plateEdge:"#8d969b",gauntlet:"#5a3e2b",cloth:"#6e6450",clothDark:"#4f483a",clothTrim:"#c8bfa6",sleeve:"#6e6450",classItem:"#c8bfa6",classItemMark:"#8a7a5a",suit:"#2b2e31",glove:"#3b2f27",leather:"#5a3e2b",strap:"#8a7a5a",boot:"#2a2622",mask:"#151719",glowVisor:"#dff3ff",glowElement:"#c9a9ff"}},gt=(n,e,t,i,r,s,o,a,l=0,u=0,c=0,f=a)=>[[n,e,t,i,r,s,o,a,l,u,c],[n.replace(/L$/,"R"),e,t,i,-r,s,o,f,l,-u,-c]],nM={parts:[["head",.25,.12,.27,0,.215,-.01,"plate"],["head",.23,.03,.25,0,.265,-.005,"plate",-.1],["head",.266,.03,.03,0,.18,.122,"plateEdge"],...gt("head",.1,.14,.05,.066,.05,.105,"plate"),["head",.17,.022,.012,0,.14,.119,"glowVisor"],["head",.04,.1,.03,0,.12,.14,"plateEdge"],...gt("head",.03,.1,.14,.12,.1,-.02,"plateDark"),["head",.24,.2,.08,0,.1,-.14,"plate",.35],["chest",.58,.2,.32,0,.2,.005,"plate"],["chest",.46,.13,.3,0,.045,.005,"plate"],["chest",.26,.03,.02,0,.235,.172,"plateEdge"],["chest",.12,.07,.02,-.13,.155,.172,"plateEdge"],["chest",.26,.06,.24,0,.32,0,"plateDark"],["chest",.3,.03,.05,0,.315,.105,"clothTrim"],["chest",.34,.07,.12,0,.335,-.105,"cloth"],["chest",.4,.16,.02,0,.19,-.17,"plateDark"],...gt("chest",.018,.12,.1,.297,.2,0,"strap"),["spine",.3,.07,.04,0,.17,.125,"plateDark"],["spine",.28,.07,.04,0,.095,.125,"plateDark"],["spine",.42,.05,.25,0,.205,0,"clothDark"],["pelvis",.4,.06,.25,0,.06,0,"leather"],["pelvis",.07,.04,.02,0,.06,.13,"plateEdge"],...gt("pelvis",.024,.12,.18,.205,-.025,0,"plateDark"),["skirtB",.3,.14,.025,0,-.02,-.025,"plateDark"],["mark",.25,.46,.02,0,-.21,.035,"classItem",-.06],["mark",.035,.38,.02,.055,-.2091,.05,"classItemMark",-.06],["mark",.11,.05,.04,-.06,-.4546,.0497,"clothDark",-.06],["mark",.07,.07,.02,-.06,-.1193,.0446,"clothTrim",-.06],...gt("mark",.03,.08,.08,.09,.0293,.0156,"strap",-.06),...gt("armL",.25,.11,.3,.055,.005,0,"plate",0,0,-.2,"plateDark"),...gt("armL",.2,.06,.26,.08,-.075,0,"plate",0,0,-.28,"plateDark"),...gt("armL",.27,.025,.02,.049,-.0244,.155,"plateEdge",0,0,-.2),...gt("armL",.03,.09,.11,.072,-.2,0,"plate"),...gt("armL",.14,.05,.15,0,-.07,0,"clothDark"),...gt("armL",.16,.05,.17,0,-.12,0,"cloth"),...gt("armL",.14,.03,.15,0,-.26,0,"strap"),...gt("foreL",.14,.22,.15,0,-.17,0,"gauntlet"),...gt("foreL",.16,.05,.17,0,-.255,0,"plate"),...gt("foreL",.13,.055,.05,0,-.0275,-.075,"plateDark"),...gt("foreL",.16,.02,.17,0,-.08,0,"plateEdge"),...gt("handL",.018,.06,.08,.058,-.04,0,"plate"),...gt("handL",.012,.03,.04,.07,-.04,0,"plateEdge"),...gt("handL",.04,.03,.06,.059,-.075,0,"plateDark"),...gt("handL",.012,.012,.04,.082,-.075,0,"glowElement"),...gt("thighL",.15,.24,.03,.03,-.13,.108,"plate",0,.4),...gt("thighL",.19,.03,.21,0,-.28,0,"strap"),...gt("shinL",.13,.09,.05,0,-.01,.1,"plate"),...gt("shinL",.17,.28,.04,0,-.22,.095,"plate"),...gt("shinL",.19,.03,.2,0,-.3,0,"strap"),...gt("footL",.2,.056,.13,0,-.009,.145,"plate"),...gt("footL",.18,.05,.21,0,.035,0,"leather")],previewArmOut:.1,clothLimits:{mark:[-.6,0]},targets:{boxes:[60,85],topY:[1.83,1.87],minY:[-.005,.005],visorY:[1.68,1.72],shoulderSpan:[.86,.96],chestSpan:[.54,.62],waistSpanMax:.46,hemSpanMax:.46,vRatioMin:1.85,armourShare:[.7,.9],detail:{bones:["armL","foreL","handL","armR","foreR","handR","chest"],min:.4},mark:{topMin:.86,bottom:[.38,.48],width:[.22,.28]},clothNearHead:{bones:["head","chest"],above:1.45,min:1}}},iM={parts:[["head",.226,.246,.246,0,.115,0,"plateDark"],["head",.2,.03,.02,0,.178,.133,"plate"],["head",.12,.018,.008,0,.14,.127,"glowVisor"],["head",.17,.095,.025,0,.062,.1355,"plate"],["head",.19,.05,.13,0,.005,.07,"plateDark"],["head",.022,.12,.022,-.045,-.02,.17,"leather",-.35,0,-.3],["head",.07,.06,.05,0,.055,.168,"mask"],["head",.05,.05,.075,.078,.036,.168,"plate",.35,.5,0],["head",.05,.05,.075,-.078,.036,.168,"plate",.35,-.5,0],["head",.068,.068,.012,.0979,.0235,.2022,"strap",.35,.5,0],["head",.068,.068,.012,-.0979,.0235,.2022,"strap",.35,-.5,0],["head",.28,.28,.21,0,.11,-.045,"classItem"],["head",.25,.06,.21,0,.28,-.045,"classItem"],["head",.25,.04,.1,0,.26,.105,"classItem",.2,0,0],["head",.03,.21,.09,.125,.11,.1,"classItem"],["head",.03,.21,.09,-.125,.11,.1,"classItem"],["chest",.18,.06,.19,0,.32,.005,"clothTrim"],["chest",.06,.16,.02,.06,.2,.185,"clothTrim",0,0,.1],["chest",.34,.22,.03,0,.145,.14,"plateEdge"],["chest",.32,.025,.05,0,.255,.139,"plate"],["chest",.3,.22,.015,0,.15,-.1325,"plateDark"],["chest",.035,.32,.02,.12,.125,.176,"strap"],["chest",.035,.32,.02,-.12,.125,.176,"strap"],["chest",.1,.07,.04,.09,0,.145,"leather"],["chest",.1,.07,.04,-.09,0,.145,"leather"],["spine",.26,.09,.025,0,.135,.1275,"plateDark"],["armL",.15,.035,.17,.012,.022,0,"plate",0,0,-.28],["armR",.15,.035,.17,-.012,.022,0,"plate",0,0,.28],["armL",.13,.03,.15,.025,-.03,0,"plateDark",0,0,-.4],["armR",.13,.03,.15,-.025,-.03,0,"plateDark",0,0,.4],["foreL",.13,.26,.14,0,-.13,0,"sleeve"],["foreR",.13,.26,.14,0,-.13,0,"sleeve"],["foreL",.148,.02,.158,0,-.27,0,"clothTrim"],["foreR",.148,.02,.158,0,-.27,0,"clothTrim"],["foreL",.13,.02,.14,0,-.3,0,"strap"],["foreR",.13,.02,.14,0,-.3,0,"strap"],["handL",.014,.02,.07,.057,-.07,0,"gauntlet"],["handR",.014,.02,.07,-.057,-.07,0,"gauntlet"],["handL",.01,.014,.086,.055,-.089,0,"glowElement"],["handR",.01,.014,.086,-.055,-.089,0,"glowElement"],["pelvis",.42,.05,.25,0,.065,0,"leather"],["pelvis",.05,.035,.012,0,.065,.131,"plateEdge"],["thighL",.15,.28,.025,.012,-.18,.1075,"plateDark",0,.2,0],["thighR",.15,.28,.025,-.012,-.18,.1075,"plateDark",0,-.2,0],["thighL",.19,.03,.21,0,-.36,0,"strap"],["thighR",.19,.03,.21,0,-.36,0,"strap"],["thighL",.035,.17,.05,.1,-.15,.03,"leather",0,0,.15],["shinL",.13,.09,.06,0,0,.1,"plateDark"],["shinR",.13,.09,.06,0,0,.1,"plateDark"],["shinL",.12,.27,.025,0,-.19,.0975,"plateDark"],["shinR",.12,.27,.025,0,-.19,.0975,"plateEdge"],["shinL",.025,.2,.09,.0825,-.18,.03,"plateDark"],["shinR",.025,.2,.09,-.0825,-.18,.03,"plateEdge"],["shinL",.168,.025,.188,0,-.25,0,"strap"],["shinR",.168,.025,.188,0,-.25,0,"strap"],["shinL",.17,.08,.19,0,-.345,0,"boot"],["shinR",.17,.08,.19,0,-.345,0,"boot"],["footL",.196,.05,.11,0,-.005,.155,"plateDark"],["footR",.196,.05,.11,0,-.005,.155,"plateDark"],["capeA",.28,.12,.03,0,.07,-.03,"classItem",.5,0,0],["capeA",.49,.335,.02,0,-.1125,-.02,"classItem"],["capeA",.45,.29,.035,0,-.385,-.0125,"classItem"],["capeA",.11,.09,.008,-.11,-.17,-.034,"clothDark"],["capeA",.43,.025,.008,0,-.47,-.034,"classItemMark"],["capeB",.09,.39,.02,.19,-.165,-.02,"classItem",0,0,.05],["capeB",.09,.44,.02,.095,-.19,-.02,"classItem"],["capeB",.09,.47,.02,0,-.205,-.02,"classItem"],["capeB",.09,.41,.02,-.095,-.175,-.02,"classItem"],["capeB",.09,.35,.02,-.19,-.145,-.02,"classItem",0,0,-.05],["capeB",.05,.14,.012,.1425,-.36,-.037,"clothDark",0,0,.06]],previewArmOut:.12,clothLimits:{capeA:[-.05,.35],capeB:[-.4,.6]},targets:{boxes:[50,75],topY:[1.85,1.9],visorY:[1.68,1.72],visorRecess:.02,shoulderSpan:[.68,.76],chestSpan:[.46,.52],waistSpan:[.42,.48],hemSpanMax:.5,armourShare:[.4,.6],detailShareMin:.35,capeBottom:[.5,.62],capeBackZ:-.16,capeShoulderSpan:.4,hemLevels:3,hemStep:.04,caydeWidth:.06,mismatch:{bone:"shinR",key:"plateEdge",pair:"plateDark"}}},Ic=Math.PI/4,Es=[],pt=(...n)=>Es.push(n),tn=(n,e,t,i,r,s,o,a,l=0,u=0,c=0)=>{Es.push([n,e,t,i,r,s,o,a,l,u,c]),Es.push([n.replace(/L$/,"R"),e,t,i,-r,s,o,a,l,-u,-c])},Ls=(n,e,t,i,r,s,o,a,l=0,u=0,c=0)=>{Es.push([n,e,t,i,r,s,o,a,l,u,c]),Es.push([n,e,t,i,-r,s,o,a,l,-u,-c])};pt("head",.15,.128,.165,0,.234,-.0075,"plate");pt("head",.27,.088,.285,0,.194,-.0075,"plate");Ls("head",.035,.125,.255,.1175,.0925,-.0225,"plate");pt("head",.2,.125,.035,0,.0925,-.1325,"plate");Ls("head",.085,.03,.165,.0944,.2574,-.0075,"plate",0,0,-Ic);pt("head",.15,.03,.085,0,.2574,.0944,"plate",Ic,0,0);pt("head",.15,.03,.085,0,.2574,-.1094,"plate",-Ic,0,0);pt("head",.2,.022,.012,0,.162,.141,"plateEdge");pt("head",.14,.018,.01,0,.14,.12,"glowVisor");pt("chest",.24,.08,.04,0,.325,-.095,"cloth");Ls("chest",.035,.08,.17,.1025,.325,-.01,"cloth");pt("chest",.5,.1,.28,0,.25,0,"cloth");pt("chest",.5,.22,.28,0,.09,0,"cloth");pt("chest",.2,.2,.03,0,.14,.152,"plate");Ls("chest",.075,.28,.02,.105,.15,.172,"clothTrim",0,0,-.3);pt("chest",.07,.06,.012,-.17,.02,.146,"clothDark");pt("spine",.48,.28,.26,0,.12,0,"cloth");pt("spine",.52,.055,.29,0,.03,0,"clothTrim");pt("spine",.06,.045,.012,0,.03,.151,"plateEdge");Ls("spine",.024,.024,.01,.065,.11,.135,"plateEdge");Ls("spine",.024,.024,.01,.065,.18,.135,"plateEdge");pt("spine",.09,.08,.05,-.15,-.03,.16,"leather");pt("pelvis",.5,.185,.27,0,-.0025,0,"cloth");tn("thighL",.22,.3,.03,.03,-.13,.123,"cloth");tn("thighL",.26,.16,.034,.05,-.36,.125,"cloth");tn("thighL",.276,.03,.05,.05,-.445,.125,"clothDark");tn("thighL",.075,.35,.265,.1335,-.1493,-.0075,"cloth",0,0,.22);tn("thighL",.07,.17,.29,.1852,-.3666,-.01,"cloth",0,0,.22);tn("thighL",.09,.03,.316,.2027,-.4447,-.0065,"clothDark",0,0,.22);pt("skirtB",.48,.33,.03,0,-.135,-.02,"cloth");pt("skirtB",.58,.16,.034,0,-.38,-.022,"cloth");pt("skirtB",.596,.03,.05,0,-.465,-.022,"clothDark");pt("skirtB",.016,.3,.01,0,-.29,-.042,"clothDark");pt("skirtB",.3,.045,.012,0,-.06,-.041,"clothTrim");tn("shinL",.12,.09,.024,0,-.03,.099,"plate");tn("shinL",.166,.15,.186,0,-.18,0,"leather");tn("shinL",.182,.17,.202,0,-.325,0,"boot");tn("armL",.15,.37,.16,0,-.165,0,"sleeve");pt("armL",.15,.045,.19,.012,.02,0,"plate",0,0,-.25);pt("armR",.15,.045,.19,-.012,.02,0,"plateEdge",0,0,.25);tn("foreL",.145,.25,.155,0,-.105,0,"sleeve");tn("foreL",.161,.045,.171,0,-.2225,0,"clothDark");tn("foreL",.128,.1,.138,0,-.265,0,"gauntlet");tn("foreL",.144,.012,.154,0,-.26,0,"strap");tn("foreL",.144,.012,.154,0,-.295,0,"strap");pt("armL",.172,.07,.182,0,-.15,0,"classItem");pt("armL",.188,.012,.198,0,-.15,0,"classItemMark");pt("armL",.02,.11,.05,.096,-.215,-.03,"classItem");pt("armL",.008,.006,.06,.09,-.175,.035,"glowElement");tn("handL",.008,.05,.05,-.054,-.055,0,"glowElement");tn("handL",.008,.06,.006,.054,-.055,0,"glowElement");const rM={parts:Es,previewArmOut:.2,clothLimits:{skirtB:[-.2,.6]},targets:{boxes:[50,75],topY:[1.82,1.87],minY:[-.005,.005],visorY:[1.68,1.72],shoulderSpan:[.7,.78],chestSpan:[.48,.54],waistSpan:[.5,.58],hemSpanMin:.6,hemOverChestMin:.08,coatBottom:[.34,.48],armourShare:[.12,.3],detailShareMin:.45,bond:{parts:[1,2],boneY:[-.22,-.1],worldY:[1.26,1.38],wrapW:.13,wrapD:.14,threadMaxArea:.01},chamfers:{min:2,rad:[.5,1]},kneelFloor:-.02}},vl=.24,Dc={cameraMotion:1},H0=.15,sM=.06,go={arc:{hud:"#7bd3f7",glow:"#6fd3ff"},solar:{hud:"#f07a2a",glow:"#ff8a2a"},void:{hud:"#a57be0",glow:"#c9a9ff"}},Vn={titanPlate:{element:"arc",grenade:"titan.grenade",melee:"titan.melee",class:"titan.class",super:"titan.super"},hunterCloak:{element:"solar",grenade:"hunter.grenade",melee:"hunter.melee",class:"hunter.class",super:"hunter.super"},warlockRobe:{element:"void",grenade:"warlock.grenade",melee:"warlock.melee",class:"warlock.class",super:"warlock.super"}},xl={speed:7.5,lift:4.2,gravity:14,lifetime:2.5,floorY:.1,wallPad:.15},Qn={"titan.grenade":{slot:"grenade",view:"fp",seconds:.62,events:[[.48,"release"],[1,"end"]],commit:"release",move:[[0,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{kind:"pulse",lob:xl,selfScale:.6,radius:3.2,blast:40,pulses:[[.6,30],[1.2,30],[1.8,30]]}},"hunter.grenade":{slot:"grenade",view:"fp",seconds:.62,events:[[.48,"release"],[1,"end"]],commit:"release",move:[[0,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{kind:"blaze",lob:xl,selfScale:.6,radius:3.2,blast:100,burn:{seconds:3,every:.5,damage:5}}},"warlock.grenade":{slot:"grenade",view:"fp",seconds:.62,events:[[.48,"release"],[1,"end"]],commit:"release",move:[[0,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{kind:"sink",lob:xl,selfScale:.6,radius:3,seconds:2.4,every:.3,ticks:8,damage:17}},"titan.melee":{slot:"melee",view:"fp",seconds:.95,events:[[.17,"impact"],[.45,"recoverable"],[1,"end"]],commit:"recoverable",move:[[0,"driven"],[.17,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{reach:4.5,coneDeg:15,lungeMax:2.5,strikeRange:2.6,basic:80,charged:120,snap:1.2,burn:null}},"hunter.melee":{slot:"melee",view:"fp",seconds:.93,events:[[.143,"impact"],[.45,"recoverable"],[1,"end"]],commit:"recoverable",move:[[0,"driven"],[.143,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:96,tuning:{reach:4.5,coneDeg:15,lungeMax:2.5,strikeRange:2.6,basic:80,charged:120,snap:1.2,burn:{seconds:3,every:.5,damage:5}}},"warlock.melee":{slot:"melee",view:"fp",seconds:.95,events:[[.158,"impact"],[.45,"recoverable"],[1,"end"]],commit:"recoverable",move:[[0,"driven"],[.158,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{reach:4.5,coneDeg:15,lungeMax:2.5,strikeRange:2.6,basic:80,charged:120,snap:1.2,burn:null}},"titan.class":{slot:"class",view:"fp",seconds:.7,events:[[.57,"plant"],[1,"end"]],commit:"plant",move:[[0,"locked"],[.643,"free"]],grounded:!0,camera:null,damageTaken:1,cooldown:38*vl,launchCooldown:38,tuning:{wall:{width:2.4,height:1.15,depth:.25,ahead:1.5,rise:.25,seconds:20,sink:.25,hp:500},zone:{near:.1,far:1.8,lateral:1.3},rearm:.5}},"hunter.class":{slot:"class",view:"tp",seconds:.5,events:[[.6,"reload"],[1,"end"]],commit:"reload",move:[[0,"driven"],[1,"free"]],grounded:!0,camera:"roll",damageTaken:1,cooldown:25*vl,launchCooldown:25,tuning:{distance:4,travel:[.04,.74],noInputBackMin:3,untargetable:!0}},"warlock.class":{slot:"class",view:"tp",seconds:2,events:[[.75,"plant"],[1,"end"]],commit:"plant",move:[[0,"locked"],[1,"free"]],grounded:!0,camera:"circle",damageTaken:.8,cooldown:83*vl,launchCooldown:83,tuning:{radius:3.75,seconds:15,weaponScale:1.2,heal:40,fadeIn:.2,fadeOut:.5}},"titan.super":{slot:"super",view:"tp",seconds:1.6,events:[[.5,"impact"],[1,"end"]],commit:"impact",move:[[0,"driven"],[.5375,"locked"],[1,"free"]],grounded:!1,camera:"slam",damageTaken:.4,cooldown:null,launchCooldown:null,tuning:{radius:7,centreHeight:1,damage:99999,spend:"impact",shake:{amplitude:.05,seconds:.3}}},"hunter.super":{slot:"super",view:"tp",seconds:.8,events:[[.55,"release"],[1,"end"]],commit:"release",move:[[0,"driven"],[.55,"locked"],[1,"free"]],grounded:!1,camera:"throw",damageTaken:1,cooldown:null,launchCooldown:null,tuning:{speed:40,radius:.06,range:40,damage:99999,pierce:!0,hitBurst:{radius:.8,seconds:.15},spend:"release"}},"warlock.super":{slot:"super",view:"tp",seconds:1.2,events:[[.58,"release"],[1,"end"]],commit:"release",move:[[0,"driven"],[.58,"locked"],[1,"free"]],grounded:!1,camera:"burst",damageTaken:.46,cooldown:null,launchCooldown:null,tuning:{diameter:.45,speed:18,lifetime:3,radius:6,damage:99999,spend:"release"}}},df=Math.PI*2,oM=Math.PI/4,aM=-.01,ma={"hunter.class":{bones:{armL:[[0,0,0,0],[.12,-.55,0,-.03],[.2,-.15,0,-.13],[.5,-.15,0,-.13],[.6,-.75,0,.37],[.72,-.35,0,.42],[.85,-.2,0,.22],[1,0,0,0]],armR:[[0,0,0,0],[.12,-.55,0,.03],[.2,-.15,0,.13],[.5,-.15,0,.13],[.6,.6,0,-.12],[.72,.5,0,-.17],[.85,.15,0,-.12],[1,0,0,0]],capeA:[[0,0,0,0],[.12,.1,0,0],[.2,-.35,0,0],[.5,-.35,0,0],[.6,-.2,0,0],[.72,.15,0,0],[.85,0,0,0],[1,0,0,0]],capeB:[[0,0,0,0],[.12,0,0,0],[.2,-.35,0,0],[.5,-.35,0,0],[.6,-.2,0,0],[.72,.15,0,0],[.85,0,0,0],[1,0,0,0]],chest:[[0,0,0,0],[.12,.35,0,0],[.2,.55,0,0],[.5,.55,0,0],[.6,.25,0,0],[.72,.2,0,0],[.85,.1,0,0],[1,0,0,0]],footL:[[0,0,0,0],[.12,-.477,0,0],[.2,.4,0,0],[.5,.4,0,0],[.6,.2,0,0],[.72,-.571,0,0],[.85,-.632,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.12,-.477,0,0],[.2,.4,0,0],[.5,.4,0,0],[.6,.1,0,0],[.72,1.279,0,0],[.85,-.931,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.12,-.6,0,0],[.2,-1.2,0,0],[.5,-1.2,0,0],[.6,.2,0,0],[.72,.3,0,0],[.85,.1,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.12,-.6,0,0],[.2,-1.2,0,0],[.5,-1.2,0,0],[.6,-.1,0,0],[.72,.1,0,0],[.85,0,0,0],[1,0,0,0]],head:[[0,0,0,0],[.12,.4,0,0],[.2,.8,0,0],[.5,.8,0,0],[.6,.45,0,0],[.72,.05,0,0],[.85,0,0,0],[1,0,0,0]],shinL:[[0,0,0,0],[.12,1.527,0,0],[.2,2.3,0,0],[.5,2.3,0,0],[.6,1.8,0,0],[.72,1.721,0,0],[.85,1.282,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.12,1.527,0,0],[.2,2.3,0,0],[.5,2.3,0,0],[.6,1.5,0,0],[.72,1.371,0,0],[.85,1.181,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.12,.3,0,0],[.2,.45,0,0],[.5,.45,0,0],[.6,.3,0,0],[.72,.2,0,0],[.85,.15,0,0],[1,0,0,0]],thighL:[[0,0,0,0],[.12,-1.05,0,.05],[.2,-2.1,0,.12],[.5,-2.1,0,.12],[.6,-1.6,0,.1],[.72,-1.15,0,.1],[.85,-.65,0,.08],[1,0,0,0]],thighR:[[0,0,0,0],[.12,-1.05,0,-.05],[.2,-2.1,0,-.12],[.5,-2.1,0,-.12],[.6,-1.4,0,-.1],[.72,.1,0,0],[.85,-.25,0,-.08],[1,0,0,0]],pelvis:[[0,0,0,0],[.12,0,0,0],[.72,df,0,0],[1,df,0,0]]},pelvisPos:[[0,0,0,0],[.12,0,-.3,0],[.16,0,-.402,-.012],[.2,0,-.483,-.038],[.24,0,-.433,-.056],[.28,0,-.41,-.035],[.32,0,-.141,.095],[.36,0,-.012,.286],[.4,0,-.197,.337],[.44,0,-.464,.422],[.48,0,-.676,.432],[.52,0,-.566,.322],[.56,0,-.494,.072],[.6,0,-.496,-.049],[.64,0,-.265,-.013],[.68,0,-.148,-.002],[.72,0,-.36,0],[.85,0,-.2,0],[1,0,0,0]],root:[[0,0,0,0],[1,0,0,0]],ground:[[0,1],[1,1]],glow:[[0,0]],face:"move",cloth:[[0,1],[.12,0],[.72,0],[.85,1],[1,1]]},"warlock.class":{bones:{armL:[[0,0,0,0],[.12,-.2,0,-.13],[.4,.15,0,.57],[.62,.13,0,.6],[.75,.45,0,.77],[.85,.5,0,.77],[.93,-.05,0,.42],[1,0,0,0]],armR:[[0,0,0,0],[.12,-.2,0,.13],[.4,-2.5,0,-.07],[.62,-2.53,0,-.07],[.75,-.95,0,.06],[.85,-.97,0,.06],[.93,-.25,0,-.27],[1,0,0,0]],chest:[[0,0,0,0],[.12,-.1,0,0],[.4,-.2,.15,0],[.62,-.22,.15,0],[.75,.55,-.15,0],[.85,.58,-.15,0],[.93,.05,0,0],[1,0,0,0]],footL:[[0,0,0,0],[.12,-.491,0,0],[.4,-.308,0,0],[.62,-.355,0,0],[.75,-.527,0,0],[.85,-.558,0,0],[.93,-.579,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.12,-.491,0,0],[.4,-.416,0,0],[.62,-.467,0,0],[.75,-1.353,0,0],[.85,-1.393,0,0],[.93,-.859,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.12,-1.15,0,0],[.4,.4,0,0],[.62,.38,0,0],[.75,.2,0,0],[.85,.15,0,0],[.93,.3,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.12,-1.15,0,0],[.4,.55,0,0],[.62,.58,0,0],[.75,.75,0,0],[.85,.73,0,0],[.93,.3,0,0],[1,0,0,0]],head:[[0,0,0,0],[.12,.3,0,0],[.4,-.2,0,0],[.62,-.22,0,0],[.75,.15,0,0],[.85,.18,0,0],[.93,.05,0,0],[1,0,0,0]],shinL:[[0,0,0,0],[.12,.741,0,0],[.4,.508,0,0],[.62,.575,0,0],[.75,1.627,0,0],[.85,1.678,0,0],[.93,1.129,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.12,.741,0,0],[.4,.366,0,0],[.62,.417,0,0],[.75,1.403,0,0],[.85,1.443,0,0],[.93,.959,0,0],[1,0,0,0]],skirtB:[[0,0,0,0],[.12,0,0,0],[.4,0,0,0],[.62,0,0,0],[.75,.24,0,0],[.85,.24,0,0],[.93,0,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.12,0,0,0],[.4,-.1,0,0],[.62,-.11,0,0],[.75,.4,0,0],[.85,.42,0,0],[.93,.1,0,0],[1,0,0,0]],thighL:[[0,0,0,0],[.12,-.25,0,.06],[.4,-.2,0,.1],[.62,-.22,0,.1],[.75,-1.1,0,.1],[.85,-1.12,0,.1],[.93,-.55,0,.08],[1,0,0,0]],thighR:[[0,0,0,0],[.12,-.25,0,-.06],[.4,.05,0,-.08],[.62,.05,0,-.08],[.75,-.05,0,-.06],[.85,-.05,0,-.06],[.93,-.1,0,-.06],[1,0,0,0]]},pelvisPos:[[0,0,0,0],[.12,0,-.08,0],[.4,0,-.04,0],[.62,0,-.05,0],[.75,0,-.33,0],[.85,0,-.345,0],[.93,0,-.16,0],[1,0,0,0]],root:[[0,0,0,0],[1,0,0,0]],ground:[[0,1],[1,1]],glow:[[0,0],[.4,1],[.95,0]],face:"cast",faceOffset:[[0,0],[.62,0],[.75,.436],[.85,.436],[1,0]],ease:{in:[.75],out:[],tracks:["armR","foreR"]}},"titan.super":{bones:{armL:[[0,0,0,0],[.1,1.05,0,.12],[.22,-1.65,0,-.08],[.34,-2.5,0,-.4],[.44,-2.25,0,-.38],[.5,-.7,0,-.3],[.75,-.67,0,-.3],[.88,-.2,0,.07],[1,0,0,0]],armR:[[0,0,0,0],[.1,1.05,0,-.12],[.22,-1.65,0,.08],[.34,-2.5,0,.4],[.44,-2.25,0,.38],[.5,-.7,0,.3],[.75,-.67,0,.3],[.88,-.2,0,-.07],[1,0,0,0]],chest:[[0,0,0,0],[.1,.3,0,0],[.22,-.2,0,0],[.34,-.35,0,0],[.44,0,0,0],[.5,.65,0,0],[.75,.69,0,0],[.88,.25,0,0],[1,0,0,0]],footL:[[0,0,0,0],[.1,-.697,0,0],[.22,.65,0,0],[.34,.45,0,0],[.44,.4,0,0],[.5,-.789,0,0],[.75,-.828,0,0],[.88,-.536,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.1,-.697,0,0],[.22,.65,0,0],[.34,.45,0,0],[.44,.4,0,0],[.5,1.279,0,0],[.75,1.279,0,0],[.88,-1.027,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.1,.5,0,0],[.22,.2,0,0],[.34,.45,0,0],[.44,.55,0,0],[.5,.7,0,0],[.75,.68,0,0],[.88,.2,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.1,.5,0,0],[.22,.2,0,0],[.34,.45,0,0],[.44,.55,0,0],[.5,.7,0,0],[.75,.68,0,0],[.88,.2,0,0],[1,0,0,0]],head:[[0,0,0,0],[.1,-.2,0,0],[.22,-.1,0,0],[.34,.15,0,0],[.44,.2,0,0],[.5,.15,0,0],[.75,.2,0,0],[.88,0,0,0],[1,0,0,0]],mark:[[0,0,0,0],[.1,.24,0,0],[.22,.39,0,0],[.34,-.26,0,0],[.44,-.36,0,0],[.5,-.96,0,0],[.75,-.96,0,0],[.88,0,0,0],[1,0,0,0]],shinL:[[0,0,0,0],[.1,1.547,0,0],[.22,-.05,0,0],[.34,1.7,0,0],[.44,1.4,0,0],[.5,2.139,0,0],[.75,2.198,0,0],[.88,1.386,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.1,1.547,0,0],[.22,-.05,0,0],[.34,1.7,0,0],[.44,1.4,0,0],[.5,2.196,0,0],[.75,2.259,0,0],[.88,1.327,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.1,.15,0,0],[.22,-.1,0,0],[.34,-.15,0,0],[.44,-.05,0,0],[.5,.3,0,0],[.75,.32,0,0],[.88,.15,0,0],[1,0,0,0]],thighL:[[0,0,0,0],[.1,-.85,0,.08],[.22,.15,0,.06],[.34,-1.2,0,.1],[.44,-1,0,.1],[.5,-1.35,0,.12],[.75,-1.37,0,.12],[.88,-.85,0,.1],[1,0,0,0]],thighR:[[0,0,0,0],[.1,-.85,0,-.08],[.22,.15,0,-.06],[.34,-1.2,0,-.1],[.44,-1,0,-.1],[.5,-.725,0,0],[.75,-.788,0,0],[.88,-.3,0,-.08],[1,0,0,0]]},pelvisPos:[[0,0,0,0],[.1,0,-.28,0],[.22,0,0,0],[.34,0,0,0],[.44,0,0,0],[.5,0,-.5,0],[.75,0,-.52,0],[.88,0,-.24,0],[1,0,0,0]],root:[[0,0,0,0],[.1,0,0,0],[.22,0,.75,0],[.34,0,1.3,0],[.44,0,1.08,0],[.5,0,0,0],[.75,0,0,0],[.88,0,0,0],[1,0,0,0]],ground:[[0,1],[.1,1],[.16,0],[.46,0],[.5,1],[1,1]],glow:[[0,0],[.1,1],[.8,0]],face:"cast",faceOffset:[[0,0],[.46,0],[.5,-.436],[.75,-.436],[.88,0],[1,0]],ease:{in:[.5],out:[],tracks:["root","armL","armR","foreL","foreR"]}},"hunter.super":{bones:{armL:[[0,0,0,0],[.16,.15,0,.12],[.36,-.95,0,-.98],[.48,-1.1,0,-.03],[.55,.65,0,.27],[.62,.65,0,.27],[.75,.65,0,.27],[.88,.25,0,.12],[1,0,0,0]],armR:[[0,0,0,0],[.16,-.45,0,.53],[.36,-.75,0,-.57],[.48,-1.85,0,-.42],[.55,-1.65,0,.03],[.62,-.95,0,.08],[.75,-.91,0,.08],[.88,-.6,0,-.02],[1,0,0,0]],capeA:[[0,0,0,0],[.16,0,0,0],[.36,0,0,0],[.48,.2,0,0],[.55,.15,0,0],[.62,.15,0,0],[.75,.15,0,0],[.88,0,0,0],[1,0,0,0]],chest:[[0,0,0,0],[.16,.1,.2,0],[.36,-.05,-.25,0],[.48,-.15,-.3,0],[.55,.05,.1,0],[.62,.15,.2,0],[.75,.17,.22,0],[.88,0,.1,0],[1,0,0,0]],footL:[[0,0,0,0],[.16,-.427,0,0],[.36,-.425,0,0],[.48,-.409,0,0],[.55,-.408,0,0],[.62,-.408,0,0],[.75,-.408,0,0],[.88,-.299,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.16,-.467,0,0],[.36,-.514,0,0],[.48,-.583,0,0],[.55,-.649,0,0],[.62,-.649,0,0],[.75,-.649,0,0],[.88,-.363,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.16,.2,0,0],[.36,.1,0,0],[.48,.65,0,0],[.55,.3,0,0],[.62,.3,0,0],[.75,.3,0,0],[.88,.2,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.16,-.2,0,0],[.36,-.2,0,0],[.48,-1,0,0],[.55,.6,0,0],[.62,.55,0,0],[.75,.55,0,0],[.88,.25,0,0],[1,0,0,0]],head:[[0,0,0,0],[.16,.4,.1,0],[.36,.15,-.3,0],[.48,.1,.4,0],[.55,.1,-.1,0],[.62,.1,-.1,0],[.75,.1,-.1,0],[.88,0,-.15,0],[1,0,0,0]],shinL:[[0,0,0,0],[.16,.527,0,0],[.36,.625,0,0],[.48,.759,0,0],[.55,.858,0,0],[.62,.858,0,0],[.75,.858,0,0],[.88,.419,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.16,.417,0,0],[.36,.364,0,0],[.48,.333,0,0],[.55,.349,0,0],[.62,.349,0,0],[.75,.349,0,0],[.88,.263,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.16,.05,.15,0],[.36,-.05,-.15,0],[.48,-.1,-.12,0],[.55,0,.05,0],[.62,.05,.1,0],[.75,.05,.1,0],[.88,-.02,.08,0],[1,0,0,0]],thighL:[[0,0,0,0],[.16,-.1,0,.08],[.36,-.2,0,.1],[.48,-.35,0,.1],[.55,-.45,0,.1],[.62,-.45,0,.1],[.75,-.45,0,.1],[.88,-.12,0,.06],[1,0,0,0]],thighR:[[0,0,0,0],[.16,.05,0,-.06],[.36,.15,0,-.08],[.48,.25,0,-.1],[.55,.3,0,-.1],[.62,.3,0,-.1],[.75,.3,0,-.1],[.88,.1,0,-.05],[1,0,0,0]]},pelvisPos:[[0,0,0,0],[.16,0,-.05,0],[.36,0,-.06,0],[.48,0,-.08,0],[.55,0,-.1,0],[.62,0,-.11,0],[.75,0,-.11,0],[.88,0,-.03,0],[1,0,0,0]],root:[[0,0,0,0],[1,0,0,0]],ground:[[0,1],[1,1]],glow:[[0,0],[.36,1],[.6,0]],face:"viewUntilRelease",ease:{in:[.55],out:[.55],tracks:["armR","foreR","chest","spine"]},props:[{kind:"knife",bone:"handR",on:[[0,0],[.16,1],[.55,0]],glow:[[0,0],[.36,1],[.55,0]]}]},"warlock.super":{bones:{armL:[[0,0,0,0],[.15,-.6,0,-.73],[.45,-.6,0,-.58],[.54,-1.1,0,-1.03],[.58,-1.5,0,-.78],[.66,-1.05,0,-.63],[.78,-1.01,0,-.63],[.88,-.45,0,-.18],[1,0,0,0]],armR:[[0,0,0,0],[.15,-.4,0,-.02],[.45,-.35,0,-.17],[.54,0,0,-.52],[.58,-1.5,0,.03],[.66,-1.1,0,.13],[.78,-1.06,0,.13],[.88,-.5,0,.08],[1,0,0,0]],chest:[[0,0,0,0],[.15,0,-.25,0],[.45,-.05,-.3,0],[.54,-.17,-.55,0],[.58,.05,-.2,0],[.66,.17,-.05,0],[.78,.19,-.03,0],[.88,.05,0,0],[1,0,0,0]],footL:[[0,0,0,0],[.15,-.547,0,0],[.45,-.674,0,0],[.54,-.508,0,0],[.58,-.546,0,0],[.66,-.566,0,0],[.78,-.585,0,0],[.88,-.454,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.15,-.608,0,0],[.45,-.757,0,0],[.54,-.745,0,0],[.58,-.805,0,0],[.66,-.89,0,0],[.78,-.922,0,0],[.88,-.6,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.15,.2,0,0],[.45,.1,0,0],[.54,-.3,0,0],[.58,.5,0,0],[.66,.72,0,0],[.78,.7,0,0],[.88,.1,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.15,.1,0,0],[.45,.05,0,0],[.54,-1.2,0,0],[.58,.5,0,0],[.66,.72,0,0],[.78,.7,0,0],[.88,.1,0,0],[1,0,0,0]],head:[[0,0,0,0],[.15,.35,.15,0],[.45,.35,.2,0],[.54,.2,.55,0],[.58,.15,.2,0],[.66,.15,.05,0],[.78,.16,.03,0],[.88,.1,0,0],[1,0,0,0]],shinL:[[0,0,0,0],[.15,.847,0,0],[.45,1.024,0,0],[.54,.958,0,0],[.58,1.046,0,0],[.66,1.166,0,0],[.78,1.205,0,0],[.88,.754,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.15,.808,0,0],[.45,.957,0,0],[.54,.545,0,0],[.58,.555,0,0],[.66,.59,0,0],[.78,.622,0,0],[.88,.45,0,0],[1,0,0,0]],skirtB:[[0,0,0,0],[.15,0,0,0],[.45,0,0,0],[.54,0,0,0],[.58,0,0,0],[.66,.14,0,0],[.78,.14,0,0],[.88,0,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.15,-.05,-.1,0],[.45,-.05,-.12,0],[.54,-.1,-.2,0],[.58,0,-.1,0],[.66,.07,-.05,0],[.78,.08,-.05,0],[.88,.01,0,0],[1,0,0,0]],thighL:[[0,0,0,0],[.15,-.3,0,.08],[.45,-.35,0,.1],[.54,-.45,0,.12],[.58,-.5,0,.12],[.66,-.6,0,.12],[.78,-.62,0,.12],[.88,-.3,0,.08],[1,0,0,0]],thighR:[[0,0,0,0],[.15,-.2,0,-.08],[.45,-.2,0,-.1],[.54,.2,0,-.1],[.58,.25,0,-.1],[.66,.3,0,-.1],[.78,.3,0,-.1],[.88,.15,0,-.08],[1,0,0,0]]},pelvisPos:[[0,0,0,0],[.15,0,-.1,0],[.45,0,-.14,0],[.54,0,-.12,0],[.58,0,-.14,0],[.66,0,-.17,0],[.78,0,-.18,0],[.88,0,-.08,0],[1,0,0,0]],root:[[0,0,0,0],[.15,0,.05,0],[.45,0,.12,0],[.54,0,.12,0],[.58,0,.1,0],[.66,0,.06,0],[.78,0,.04,0],[.88,0,0,0],[1,0,0,0]],ground:[[0,1],[1,1]],glow:[[0,0],[.1,1],[.7,0]],face:"viewUntilRelease",ease:{in:[.58],out:[.58],tracks:["armL","armR","foreL","foreR"]}}},lM={knife:[["handR",.026,.05,.026,0,-.105,.01,"leather"],["handR",.03,.01,.05,0,-.135,.01,"guard"],["handR",.008,.16,.032,0,-.22,.01,"blade"],["handR",.0078,.022,.022,0,-.3,.01,"blade",oM,0,0],["handR",.0035,.15,.004,0,-.215,.028,"edge"],["handR",.001,.14,.014,.0046,-.215,.012,"glowElement"],["handR",.001,.14,.014,-.0046,-.215,.012,"glowElement"]]},Wo=Math.PI/4,pf={left:[-.24,-.28,.06]},cM=[.01,-.048,-.066],uM={"titan.grenade.wind":{at:[-.265,-.223,-.249],fingers:[.092,.925,.37],back:[-.447,0,.894]},"titan.grenade.high":{at:[-.238,-.005,-.32],fingers:[.095,.953,.286],back:[-.37,.092,.925]},"titan.grenade.release":{at:[-.08,.007,-.412],fingers:[.238,.19,-.952],back:[-.183,.913,.365]},"titan.grenade.follow":{at:[.116,-.205,-.4],fingers:[.29,-.677,-.677],back:[.198,.693,-.693]},"hunter.grenade.reach":{at:[-.298,-.034,-.24],fingers:[0,.894,.447],back:[-.514,0,.857]},"hunter.grenade.cock":{at:[-.257,-.027,-.316],fingers:[.089,.891,.445],back:[-.447,0,.894]},"hunter.grenade.release":{at:[-.079,.017,-.403],fingers:[.276,.276,-.921],back:[-.276,.921,.276]},"hunter.grenade.follow":{at:[.087,-.166,-.42],fingers:[.196,-.588,-.784],back:[.1,.796,-.597]},"warlock.grenade.wind":{at:[-.229,-.147,-.213],fingers:[0,-.958,.287],back:[0,.287,.958]},"warlock.grenade.swing":{at:[-.161,-.162,-.289],fingers:[.099,-.099,-.99],back:[0,-1,0]},"warlock.grenade.release":{at:[-.034,-.118,-.419],fingers:[.091,.409,-.908],back:[0,-.912,-.41]},"warlock.grenade.follow":{at:[.04,-.164,-.443],fingers:[.092,.829,-.552],back:[0,-.514,-.857]},"titan.melee.wind":{at:[-.274,-.226,-.22],fingers:[.337,.421,-.842],back:[-.432,.864,.259]},"titan.melee.hit":{at:[-.068,-.002,-.427],fingers:[.119,.059,-.991],back:[-.287,.958,0]},"titan.melee.drive":{at:[-.061,-.008,-.457],fingers:[.119,.059,-.991],back:[-.287,.958,0]},"titan.melee.back":{at:[-.225,-.132,-.315],fingers:[.276,.276,-.921],back:[-.44,.88,.176]},"hunter.melee.wind":{at:[-.318,-.201,-.24],fingers:[.732,.329,-.596],back:[-.607,.713,-.351]},"hunter.melee.stab":{at:[-.08,.051,-.413],fingers:[.976,-.191,.109],back:[.196,.98,-.039]},"hunter.melee.drive":{at:[-.07,.046,-.438],fingers:[.976,-.191,.109],back:[.196,.98,-.039]},"hunter.melee.back":{at:[-.244,-.06,-.379],fingers:[.978,-.097,-.184],back:[-.015,.85,-.527]},"warlock.melee.wind":{at:[-.292,-.205,-.22],fingers:[.095,.953,.286],back:[-.981,0,.196]},"warlock.melee.push":{at:[-.044,-.071,-.435],fingers:[.049,.979,-.196],back:[0,.148,.989]},"warlock.melee.press":{at:[-.042,-.073,-.475],fingers:[.049,.979,-.196],back:[0,.148,.989]},"warlock.melee.after":{at:[-.208,-.164,-.341],fingers:[.198,.693,-.693],back:[-.348,.348,.87]},"titan.class.rise":{at:[-.315,-.087,-.277],fingers:[.095,.953,.286],back:[-.958,0,.287]},"titan.class.raise":{at:[-.247,-.002,-.366],fingers:[.238,.952,.19],back:[-.514,0,.857]},"titan.class.slam":{at:[-.124,-.111,-.357],fingers:[.094,-.329,-.94],back:[-.095,.953,-.286]},"titan.class.press":{at:[-.125,-.134,-.377],fingers:[.094,-.329,-.94],back:[-.095,.953,-.286]}},mf={"titan.grenade":{down:.1,ready:.61,ease:{in:[.48],out:[.48]},left:[[0,"grip",.6],[.14,"grip",.6],[.22,"titan.grenade.wind",.75],[.36,"titan.grenade.high",.75],[.48,"titan.grenade.release",.35],[.58,"titan.grenade.follow",.3],[.595,"offLeft",.6],[.61,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.14,0],[.22,1],[.595,1],[.61,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.054,-2,-3,5,-.15,.2,0],[.36,-6,6,10,.6,.5,-.2],[.426,8,-6,-22,-.8,-.6,.25],[.48,5,-7,-18,-.9,-.4,.25],[.58,-3,2,6,.3,.2,-.1],[.72,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:[[0,0],[.12,1],[.48,0]],propKind:"grenade",glow:[[0,0],[.14,1],[.52,0]]},"hunter.grenade":{down:.1,ready:.61,ease:{in:[.48],out:[.48]},left:[[0,"grip",.6],[.14,"grip",.6],[.2,"hunter.grenade.reach",.75],[.26,"hunter.grenade.cock",.75],[.38,"hunter.grenade.cock",.75],[.48,"hunter.grenade.release",.35],[.58,"hunter.grenade.follow",.3],[.595,"offLeft",.6],[.61,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.14,0],[.2,1],[.595,1],[.61,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.054,-2,-3,5,-.15,.2,0],[.36,-5,5,8,.5,.5,-.15],[.426,7,-5,-18,-.7,-.5,.2],[.48,4,-6,-15,-.8,-.35,.2],[.58,-3,2,5,.25,.15,-.1],[.72,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:[[0,0],[.12,1],[.48,0]],propKind:"grenade",glow:[[0,0],[.14,1],[.52,0]]},"warlock.grenade":{down:.1,ready:.61,ease:{in:[.48],out:[.48]},left:[[0,"grip",.6],[.14,"grip",.6],[.2,"warlock.grenade.wind",.7],[.34,"warlock.grenade.swing",.65],[.48,"warlock.grenade.release",.3],[.56,"warlock.grenade.follow",.25],[.595,"offLeft",.6],[.61,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.14,0],[.2,1],[.595,1],[.61,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.054,-2,-3,5,-.15,.2,0],[.34,-3,-6,6,-.4,.3,-.1],[.426,4,6,-16,.5,-.4,.15],[.48,3,5,-14,.6,-.3,.15],[.58,-2,-3,5,-.2,.1,-.05],[.72,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:[[0,0],[.12,1],[.48,0]],propKind:"grenade",glow:[[0,0],[.14,1],[.52,0]]},"titan.melee":{down:.07,ready:.48,ease:{in:[.17],out:[.17]},left:[[0,"grip",.6],[.065,"grip",.6],[.1,"titan.melee.wind",1],[.17,"titan.melee.hit",1],[.24,"titan.melee.drive",1],[.43,"titan.melee.back",1],[.465,"offLeft",.8],[.48,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.065,0],[.1,1],[.465,1],[.48,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.07,-8,3,10,.4,.6,-.2],[.135,10,-6,-34,-.9,-.8,.3],[.17,6,-8,-30,-1,-.6,.3],[.26,-6,3,12,.5,.4,-.2],[.4,2,-1,-4,-.15,-.1,.05],[.55,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:null,propKind:null,glow:[[0,0],[.02,1],[.56,0]],glowCharged:!0},"hunter.melee":{down:.07,ready:.48,ease:{in:[.143],out:[.143]},left:[[0,"grip",.6],[.065,"grip",.6],[.095,"hunter.melee.wind",1],[.143,"hunter.melee.stab",1],[.22,"hunter.melee.drive",1],[.43,"hunter.melee.back",1],[.465,"offLeft",1],[.48,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.065,0],[.095,1],[.465,1],[.48,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.0714,-6,2,8,.3,.6,-.2],[.107,8,-4,-20,-.6,-.7,.3],[.143,5,-5,-18,-.7,-.5,.3],[.22,4,-4,-14,-.5,-.4,.2],[.3,-5,2,8,.3,.4,-.15],[.4,1,0,-2,-.1,-.1,0],[.5,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:[[0,0],[.015,1],[.46,0]],propKind:"knife",glow:[[0,0],[.015,1],[.44,0]],glowCharged:!0},"warlock.melee":{down:.07,ready:.48,ease:{in:[.158],out:[.158]},left:[[0,"grip",.6],[.065,"grip",.6],[.1,"warlock.melee.wind",.3],[.158,"warlock.melee.push",.45],[.23,"warlock.melee.press",.45],[.43,"warlock.melee.after",.3],[.465,"offLeft",.6],[.48,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.065,0],[.1,1],[.465,1],[.48,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.07,-6,2,8,.3,.5,-.15],[.123,8,-3,-24,-.5,-.6,.2],[.158,5,-4,-20,-.6,-.5,.2],[.25,-4,2,8,.3,.3,-.1],[.4,1,0,-2,-.1,-.05,0],[.55,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:null,propKind:null,glow:[[0,0],[.02,1],[.56,0]],glowCharged:!0},"titan.class":{down:.1,ready:.68,ease:{in:[.57],out:[.57]},left:[[0,"grip",.6],[.13,"grip",.6],[.22,"titan.class.rise",1],[.34,"titan.class.raise",1],[.44,"titan.class.raise",1],[.57,"titan.class.slam",.25],[.63,"titan.class.press",.25],[.665,"offLeft",.6],[.68,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.13,0],[.22,1],[.665,1],[.68,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.048,0,-4,3,-.2,0,0],[.34,-4,8,6,.6,.5,-.2],[.44,-5,10,8,.7,.6,-.2],[.522,4,-30,-10,-1.2,-.3,.3],[.57,3,-35,-8,-1.3,-.2,.3],[.66,-2,6,3,.4,.1,-.1],[.8,1,-2,0,-.1,0,0],[.92,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:null,propKind:null,glow:[[0,0],[.2,1],[.66,0]]},"hunter.class":{tp:!0,down:.1,ready:1},"warlock.class":{tp:!0,down:.1,ready:1},"titan.super":{tp:!0,down:.1,ready:1},"hunter.super":{tp:!0,down:.1,ready:1},"warlock.super":{tp:!0,down:.1,ready:1}},fM={blade:"#7d858a",edge:"#a9b3b8",leather:"#5a3e2b",cord:"#8a7a5a",guard:"#3a3d40",voidCore:"#231a30",glowCore:"#f4f1ea",glowElement:"#ffffff"},sn=.01,on=-.048,an=-.066,gf={grenade:{arc:[["hand",.03,.03,.03,sn,on,an,"glowCore",.6,.4,0],["hand",.072,.004,.004,sn,on,an,"glowElement",.3,.9,.5],["hand",.072,.004,.004,sn,on,an,"glowElement",1.2,.2,1.4],["hand",.072,.004,.004,sn,on,an,"glowElement",.9,1.6,.2],["hand",.06,.004,.004,sn,on,an,"glowElement",2.1,.7,2.6]],solar:[["hand",.026,.026,.026,sn,on,an,"glowCore"],["hand",.036,.036,.036,sn,on,an,"glowElement",Wo,0,0],["hand",.036,.036,.036,sn,on,an,"glowElement",0,Wo,0],["hand",.036,.036,.036,sn,on,an,"glowElement",0,0,Wo]],void:[["hand",.026,.026,.026,sn,on,an,"voidCore"],["hand",.004,.04,.04,sn+.024,on,an,"glowElement"],["hand",.004,.04,.04,sn-.024,on,an,"glowElement"],["hand",.04,.004,.04,sn,on+.024,an,"glowElement"],["hand",.04,.004,.04,sn,on-.024,an,"glowElement"],["hand",.04,.04,.004,sn,on,an+.024,"glowElement"],["hand",.04,.04,.004,sn,on,an-.024,"glowElement"]]},knife:[["hand",.1,.02,.02,0,-.037,-.08,"leather"],["hand",.06,.022,.022,.004,-.037,-.08,"cord"],["hand",.012,.026,.026,.056,-.037,-.08,"guard"],["hand",.008,.034,.03,-.054,-.037,-.08,"guard"],["hand",.142,.024,.005,-.129,-.037,-.08,"blade"],["hand",.017,.017,.0048,-.2,-.037,-.08,"blade",0,0,Wo],["hand",.128,.0045,.0035,-.126,-.0475,-.08,"edge"],["hand",.112,.01,.001,-.128,-.036,-.077,"glowElement"],["hand",.112,.01,.001,-.128,-.036,-.083,"glowElement"]]},hM=(n,e)=>n==="grenade"?gf.grenade[e]:gf[n];function od(n,e,t,i){const r={...fM,glowElement:go[e].glow},s=new Sn;s.name=i,s.visible=!1;const o=new Qe,a={group:s,solid:null,glow:null,rows:n};for(const l of[!1,!0]){const u=n.filter(d=>id(d[7])===l);if(!u.length)continue;const c=u.map(d=>{const g=r[d[7]];if(g===void 0)throw new Error(`props: '${i}' uses unknown colour '${d[7]}'`);const _=new cn(d[1],d[2],d[3]);_.deleteAttribute("uv"),_.applyMatrix4(ba(d)),o.set(g);const m=_.attributes.position.count,p=new Float32Array(m*3);for(let x=0;x<m;x++)p[x*3]=o.r,p[x*3+1]=o.g,p[x*3+2]=o.b;return _.setAttribute("color",new An(p,3)),_}),f=c.length===1?c[0]:Pc(c,!1);c.length>1&&c.forEach(d=>d.dispose());const h=new xt(f,l?t.glowMaterial:t.solidMaterial);h.name=`${i}:${l?"glow":"solid"}`,h.frustumCulled=!1,h.userData.parts=u,s.add(h),a[l?"glow":"solid"]=h}return a.dispose=()=>{for(const l of[a.solid,a.glow])l==null||l.geometry.dispose()},a}function dM(n,e,t){const i=hM(n,e);if(!i)throw new Error(`fpProps: no prop '${n}' for '${e}'`);return od(i,e,t,`fp-prop-${n}-${e}`)}const jn={halflife:.12,kFwd:.05,max:.6,capeB:.5,skirtB:.8,markFwd:.3,markFall:-.8},pM={titanPlate:nM,hunterCloak:iM,warlockRobe:rM},mM=[-.6,jn.max];function Ml(n,e){if(!n)return 0;let t=n[0][1];for(const i of n)i[0]<=e&&(t=i[1]);return t}const gM=new Xe,_f=new Xe,_M=new D,vM=new D,xM=new D,Sl=[],yl=[],MM=[0,0,0],bl=(n,e)=>n.ease&&n.ease.tracks.includes(e)?n.ease:null;function Ea(n,e){const t=pM[n];if(!t)throw new Error(`GuardianBody: unknown class '${n}'`);const i=Vn[n].element,r={...tM[n],glowElement:go[i].glow},s={solidMaterial:e.solid,glowMaterial:e.glow},o=mo(eM(n,t.parts,r),s),{root:a,bones:l}=o,u={};for(const M of Object.values(ma))for(const E of M.props??[]){if(u[E.kind])continue;const C=od(lM[E.kind],i,s,`risen-${E.kind}`);l[E.bone].add(C.group),u[E.kind]=C}const c=new Qe(r.glove);function f(){if(!o.glow)return;const M=o.glow.geometry.attributes.color;o.glow.userData.parts.forEach((E,C)=>{if(E[7]==="glowElement")for(let y=C*os*3;y<(C+1)*os*3;y+=3)M.array[y]=c.r,M.array[y+1]=c.g,M.array[y+2]=c.b})}function h(){let M=1/0;for(const E of sd){_f.multiplyMatrices(l[E[0]].matrixWorld,ba(E,gM));for(const C of[-.5,.5])for(const y of[-.5,.5])for(const S of[-.5,.5])M=Math.min(M,_M.set(C*E[1],y*E[2],S*E[3]).applyMatrix4(_f).y)}return M}const d={x:0,v:0},g={x:0,v:0};let _=null;const m=new D,p=new D;let x=null;return{root:a,rig:o,classId:n,props:u,pose(M,E={}){var ae;const C=E.base??"ready",y=E.clip??null,S=E.t??0,A=E.w??1,R=E.feet??null,v=E.facing??0,b=E.dt??0,P=y?ma[y]:null;if(y&&!P)throw new Error(`GuardianBody: no third-person clip '${y}'`);const I=C==="preview";o.reset();let O=0;I?Qx(l,M,t.previewArmOut):(Jx(l,jx),O=Zx);const U=MM;if(U[0]=0,U[1]=0,U[2]=0,P){for(const re in P.bones){const Me=l[re];if(!Me)continue;const Ce=Bn(P.bones[re],S,yl,bl(P,re));Me.rotation.x+=Ce[0]*A,Me.rotation.y+=Ce[1]*A,Me.rotation.z+=Ce[2]*A}if(P.pelvisPos){const re=Bn(P.pelvisPos,S,yl,bl(P,"pelvisPos"));l.pelvis.position.x+=re[0]*A,l.pelvis.position.y+=re[1]*A,l.pelvis.position.z+=re[2]*A}if(P.root){const re=Bn(P.root,S,yl,bl(P,"root"));U[0]=re[0]*A,U[1]=re[1]*A,U[2]=re[2]*A}}const N=v+(P&&P.faceOffset?Bn(P.faceOffset,S,Sl)[0]*A:0)+Math.PI,q=Math.cos(N),G=Math.sin(N);if(m.set((R?R.x:0)+q*U[0]+G*U[2],(R?R.y:0)+O+U[1],(R?R.z:0)-G*U[0]+q*U[2]),!I){if(b>0&&_){p.subVectors(m,_).divideScalar(b);const re=p.x*-Math.sin(v)+p.z*-Math.cos(v);Jn(d,Ct(jn.kFwd*re,0,jn.max),jn.halflife,b),Jn(g,Ct(-.12*p.y,0,jn.max),jn.halflife,b);const Me=Ct(d.x+g.x,-.6,jn.max),Ce={capeA:Me,capeB:jn.capeB*Me,skirtB:jn.skirtB*Me,mark:jn.markFwd*d.x+jn.markFall*g.x},z=P&&P.cloth?Bn(P.cloth,S,Sl)[0]:1;for(const Y in Ce){const[Z,J]=((ae=t.clothLimits)==null?void 0:ae[Y])??mM;l[Y].rotation.x+=Ct(Ce[Y],Z,J)*z}}_=(_??new D).copy(m)}if(a.position.copy(m),a.rotation.set(0,N,0),a.updateMatrixWorld(!0),P&&P.ground){const re=Bn(P.ground,S,Sl)[0]*A*Math.max(0,aM-h());re>0&&(a.position.y+=re,a.updateMatrixWorld(!0))}const oe=I?!1:E.glow??(P?Ml(P.glow,S)===1:!1);oe!==x&&(o.setGlowLit(oe,re=>re[7]==="glowVisor"),oe||f(),x=oe);for(const re in u)u[re].group.visible=!1,u[re].glow&&(u[re].glow.visible=!1);for(const re of(P==null?void 0:P.props)??[]){const Me=u[re.kind];Me.group.visible=Ml(re.on,S)===1,Me.glow&&(Me.glow.visible=Ml(re.glow,S)===1)}},headWorld(M=new D){return M.set(0,.115,0).applyMatrix4(l.head.matrixWorld)},handWorld(M,E=new D){return E.set(0,-.05,0).applyMatrix4(l[`hand${M}`].matrixWorld)},handsMid(M=new D){return M.addVectors(this.handWorld("L",vM),this.handWorld("R",xM)).multiplyScalar(.5)},chestWorld(M=new D){return M.setFromMatrixPosition(l.chest.matrixWorld)},resetCloth(){d.x=0,d.v=0,g.x=0,g.v=0,_=null},dispose(){o.dispose();for(const M in u)u[M].dispose()}}}const si=Math.PI/180,vf=.55,SM=.2,yM=.35,bM=.8,xf={amplitude:.05,seconds:.35},Pr={roll:{side:.35,height:1.4,distance:2.2,pitch:[-40*si,30*si],k0:1,blendOut:0,blendBack:0},circle:{side:.5,height:1.35,distance:3,pitch:[-50*si,30*si],k0:.55,blendOut:.24,blendBack:.2},slam:{side:.6,height:1.6,distance:4,pitch:[-60*si,35*si],k0:.55,blendOut:.32,blendBack:.28},throw:{side:.45,height:1.5,distance:2.6,pitch:[-40*si,30*si],k0:.55,blendOut:.2,blendBack:.18,aimed:!0},burst:{side:.55,height:1.5,distance:3.4,pitch:[-60*si,35*si],k0:.55,blendOut:.27,blendBack:.24,aimed:!0}},EM=30;function wM({room:n,fov:e=70,radius:t=SM,moments:i=Pr,comfort:r=Dc}){let s="fp",o=null,a=vf,l=0,u=0,c=0,f=0,h=0,d=0,g=0,_=null,m=0,p=0;const x=new D,M=new Ht,E=new en(0,0,0,"YXZ"),C=new D,y=new D,S=new Ht,A=new D;function R(I,O,U,N,q,G,oe){oe.setFromEuler(E.set(N,U,0,"YXZ")),C.set(I.side,0,q).applyQuaternion(oe);const ae=O.x,re=O.y+I.height,Me=O.z;let Ce=1;return Ce=v(Ce,ae,C.x,-n.halfW+t,n.halfW-t),Ce=v(Ce,re,C.y,t,n.wallH-t),Ce=v(Ce,Me,C.z,n.far+t,n.near-t),Ce=Ct(Ce,0,1),G.set(ae+Ce*C.x,re+Ce*C.y,Me+Ce*C.z),C.length()*Ce}function v(I,O,U,N,q){return U>0?Math.min(I,(q-O)/U):U<0?Math.min(I,(N-O)/U):I}function b(I,O){if(O.set(0,0,0),_===null||!(p>0)||I<_||I>=_+p)return O;const U=(I-_)/p,N=m*(1-U)*(1-U)*r.cameraMotion,q=(I-_)*EM,G=Math.floor(q),oe=bs(q-G),ae=re=>Ln(Er(G*7+re*13),Er((G+1)*7+re*13),oe);return O.set(N*ae(1),N*ae(2),0)}const P=()=>s!=="fp";return{start(I,O,U){const N=i[I];if(!N)return!1;let q=0;if(U){const G=Ct(U.pitch,N.pitch[0],N.pitch[1]);if(R(N,U.feet,U.yaw,G,N.distance,y,S)<bM)return!1;q=U.pitch-G}return o=N,a=N.k0??vf,s="out",c=O,l=a,h=q,_=null,!0},finish(I){s!=="out"&&s!=="tp"||(u=l,s="back",f=I)},update(I,{feet:O,yaw:U,pitch:N}){if(g=I,s==="fp")return{mode:s,k:0};if(s==="out"&&(!(o.blendOut>0)||I>=c+o.blendOut?(s="tp",l=1):l=a+(1-a)*bs((I-c)/o.blendOut)),s==="back"){if(!(o.blendBack>0)||I>=f+o.blendBack)return s="fp",l=0,d=0,{mode:s,k:l};l=u+(a-u)*br((I-f)/o.blendBack)}const q=Ct(N-h,o.pitch[0],o.pitch[1]);return d=R(o,O,U,q,o.distance*Ln(a,l,r.cameraMotion),x,M),{mode:s,k:l}},apply(I){I.position.copy(x).add(b(g,A).applyQuaternion(M)),I.quaternion.copy(M),I.fov!==e&&(I.fov=e,I.updateProjectionMatrix())},shake(I,O,U){_=I,m=Math.min(O,xf.amplitude),p=Math.min(U,xf.seconds)},clampPitch(I){return P()?Ct(I,o.pitch[0],o.pitch[1]):I},bodyVisible(I){return P()&&x.distanceTo(I)>=yM},reset(){s="fp",o=null,l=0,d=0,h=0,_=null},get active(){return P()},get mode(){return s},get k(){return l},get boom(){return d},get pitchLimits(){return P()?[o.pitch[0],o.pitch[1]]:null},get aimed(){return P()&&!!o.aimed},position:x,quaternion:M}}const TM=n=>n<0?0:n>1?1:n,AM=(n,e)=>{let t=n[0][1];for(const i of n)i[0]<=e&&(t=i[1]);return t},RM=()=>({move:"free",jump:!1,fire:!1,aim:!1,reload:!1,swap:!1,keys:{grenade:"start",melee:"start",class:"start",super:"start"}});function CM({abilities:n,moments:e}){let t=null;const i=o=>t&&o<t.returnAt,r=o=>TM((o-t.startAt)/t.seconds);function s(o){if(!i(o))return"start";if(t.def.view==="tp")return"ignore";const a=t.def.events.find(([,l])=>l===t.def.commit)[0];return r(o)>=a?"interrupt":"ignore"}return{get current(){return t&&{id:t.id,startAt:t.startAt,seconds:t.seconds,returnAt:t.returnAt,charged:t.charged}},start(o,a,{grounded:l=!0,charged:u=!1}={}){const c=n[o];if(!c||c.grounded&&!l||c.slot==="super"&&!u||s(a)==="ignore")return!1;const f=c.camera?e[c.camera].blendBack:0;return t={id:o,def:c,startAt:a,seconds:c.seconds,returnAt:a+c.seconds+f,charged:!!u,lastT:0},!0},reset(){t=null},update(o){if(!t)return[];const a=[],l=o>=t.returnAt?1:r(o);for(const[u,c]of t.def.events)u>t.lastT&&u<=l&&a.push({id:t.id,name:c,at:t.startAt+u*t.seconds});return t.lastT=Math.max(t.lastT,l),o>=t.returnAt&&(t=null),a},phase(o){return t?r(o):0},locks(o){if(!i(o))return RM();const a=s(o),l=AM(t.def.move,r(o)),u=t.def.view==="tp";return{move:l,jump:u||l!=="free",fire:u,aim:u,reload:!0,swap:!0,keys:{grenade:a,melee:a,class:a,super:a}}}}}const ad={};for(const n of Object.keys(Vn)){const e=Vn[n];for(const t of["grenade","melee","class","super"])ad[e[t]]=go[e.element].glow}const LM=(n,e)=>n.events.find(([,t])=>t===e)[0]*n.seconds;function PM(n){const{scene:e,ROOM:t,camera:i,fp:r,runner:s,moment:o,player:a,view:l,PLAYER_RADIUS:u,now:c,classId:f,body:h,moveAxis:d,ability:g,superCharge:_,weapons:m,legacy:p}=n;let x=null,M=null,E=null,C=0,y=null,S=null,A=0,R=!1,v=null;const b=new Sn;b.name="risen-effects",e&&e.add(b);const P=new D,I=(z,Y)=>{M={ev:z,spawn:Y}},O=z=>I(z,(Y,Z)=>p.throwGrenade(Y,Z,ad[z.id])),U=()=>p.meleeStrike(),N=()=>p.ward(),q=()=>p.superWipe(),G={"titan.grenade":{release:O},"hunter.grenade":{release:O},"warlock.grenade":{release:O},"titan.melee":{impact:U},"hunter.melee":{impact:U},"warlock.melee":{impact:U},"titan.class":{plant:N},"hunter.class":{reload:N},"warlock.class":{plant:N},"titan.super":{impact:q},"hunter.super":{release:q},"warlock.super":{release:q}};function oe(z,Y){let Z=1/0;return z>0&&(Z=Math.min(Z,(t.halfW-u-a.x)/z)),z<0&&(Z=Math.min(Z,(-t.halfW+u-a.x)/z)),Y>0&&(Z=Math.min(Z,(t.near-u-a.z)/Y)),Y<0&&(Z=Math.min(Z,(t.far+u-a.z)/Y)),Z}function ae(){const z=d(),Y=Math.sin(l.yaw),Z=Math.cos(l.yaw),J=-Y*z.y+Z*z.x,V=-Z*z.y-Y*z.x,se=Math.hypot(J,V);return se>0?{x:J/se,z:V/se}:null}function re(z,Y){const Z=Vn[f()][z],J=Qn[Z];if(z==="super"?_.get()<1:!g.ready(z))return"refused";if(s.locks(Y).keys[z]==="ignore")return"ignored";const V=a.y<=0;if(!s.start(Z,Y,{grounded:V,charged:!0}))return"refused";if(x=null,z!=="super"&&g.use(z),m.cancelReload(),R=!1,E=null,y=null,S=null,A=l.yaw,Z==="hunter.class"){let le=ae();if(!le){const Le={x:Math.sin(l.yaw),z:Math.cos(l.yaw)};le=oe(Le.x,Le.z)>=J.tuning.noInputBackMin?Le:{x:-Le.x,z:-Le.z}}E={id:Z,startAt:Y,dir:le},C=0,A=Math.atan2(-le.x,-le.z)}J.slot==="super"&&(y={id:Z,startAt:Y,y0:a.y,until:Y+LM(J,J.commit)});let se=0;return J.view==="tp"&&(se=Pr[J.camera].blendBack,o.start(J.camera,Y,{feet:a,yaw:l.yaw,pitch:l.pitch})&&h().resetCloth()),r.act(Z,Y,J.seconds+se,z==="melee"?{charged:!0}:{}),"started"}function Me(z){const Y=ma[z].face;return Y==="view"||Y==="viewUntilRelease"&&!R?l.yaw:A}function Ce(){}return{press(z){const Y=c(),Z=re(z,Y);return Z==="ignored"&&(x={slot:z,at:Y}),Z==="started"},onEvents(z){var Y,Z;for(const J of z){const V=Qn[J.id];J.name==="release"&&(R=!0,V.view==="tp"&&ma[J.id].face==="viewUntilRelease"&&(A=l.yaw)),V.slot==="super"&&J.name===V.tuning.spend&&_.set(0),(Z=(Y=G[J.id])==null?void 0:Y[J.name])==null||Z.call(Y,J),J.name==="end"&&V.view==="tp"&&o.finish(J.at)}},update(z){if(!x)return;const Y=c();(Y-x.at>H0||re(x.slot,Y)==="started")&&(x=null)},lateUpdate(z){if(M){const{spawn:V}=M;M=null,V(r.leftHandWorld(i,new D),i.getWorldDirection(new D))}const Y=v===null?0:z-v;v=z;const Z=h();if(!Z)return;const J=s.current;if(J&&Qn[J.id].view==="tp"&&o.active){const V=Ct((z-J.startAt)/J.seconds,0,1);Z.pose(z,{clip:J.id,t:V,feet:a,facing:Me(J.id),dt:Y}),Z.root.visible=o.bodyVisible(Z.headWorld(P))}else Z.root.visible=!1},drive(z,Y){const Z=s.current;if(!Z)return null;const J=c();if(E&&E.id===Z.id&&E.startAt===Z.startAt){const[V,se]=Qn[Z.id].tuning.travel,le=bs(Ct(((J-Z.startAt)/Z.seconds-V)/(se-V),0,1)),Le=Qn[Z.id].tuning.distance*(le-C);return Y.x+=E.dir.x*Le,Y.z+=E.dir.z*Le,C=le,null}return y&&y.id===Z.id&&y.startAt===Z.startAt&&y.y0>0?(Y.y=y.y0*(1-bs((J-y.until)/sM)),{velY:0}):null},pushOut(){},locks(z){const Y=s.locks(z),Z=s.current;return Z&&Qn[Z.id].slot==="melee"&&S===null&&(Y.move="free",Y.jump=!1),Y},weaponDamageScale(){return 1},buffs(){return{emboldened:{on:!1,left:0}}},get aiming(){return o.aimed&&!R},get busy(){return s.current!==null||o.active||x!==null&&c()-x.at<=H0},setClass(z){if(!Vn[z])return;s.reset(),o.reset(),x=null,M=null,E=null,y=null,S=null,R=!1;const Y=h();Y&&(Y.root.visible=!1)},clearWorld:Ce,get effectsRoot(){return b}}}const IM="Risen",DM="Character and loadout — Esc to resume",UM="Kit",NM={titanPlate:{label:"Plate"},hunterCloak:{label:"Cloak"},warlockRobe:{label:"Coat"}},FM={arc:"Arc",solar:"Solar",void:"Void"},OM={grenade:"Grenade",melee:"Melee",class:"Class ability",super:"Super"},kM={grenade:"Q",melee:"C",class:"V",super:"F"},BM={"titan.grenade":{name:"Arc Beacon"},"titan.melee":{name:"Punch",charged:"Arc Fist"},"titan.class":{name:"Wall of Light"},"titan.super":{name:"Arc Slam"},"hunter.grenade":{name:"Solar Blaze"},"hunter.melee":{name:"Knife",charged:"Solar Knife"},"hunter.class":{name:"Roll"},"hunter.super":{name:"Knife of Light"},"warlock.grenade":{name:"Void Sink"},"warlock.melee":{name:"Palm",charged:"Void Palm"},"warlock.class":{name:"Circle of Light"},"warlock.super":{name:"Void Burst"}},zM={emboldened:"Emboldened"},HM={title:"Camera motion",full:"Full",half:"Half",off:"Off"},G0={overTitle:"PRE-DESTINY",title:"RUSTLIGHT",press:"PRESS",enterKey:"Enter",begin:"TO BEGIN",loading:"LOADING…",stillLoading:"Still loading… Reload the page",reload:"Reload",noWebgl:"This browser can't draw the game. Try an up-to-date Chrome, Edge, Firefox or Safari.",failed:"The range didn't load. Reload the page to try again.",anyKey:"PRESS ANY KEY",gateNote:"Sound on · Esc for silence",music:"Music",musicKey:"M"},GM={heading:IM,menuSub:DM,kitTitle:UM,classes:NM,elements:FM,slots:OM,keys:kM,abilities:BM,buffs:zM,comfort:HM,start:G0};function VM({raycaster:n,strikeRay:e,getWeapon:t,setWeapon:i,cancelEngineReload:r,fp:s,now:o,getSuperCharge:a,setSuperChargeValue:l,episode:u,moment:c,pitchLimit:f}){const h=(_,m,p)=>_<m?m:_>p?p:_;let d=0,g=!1;return{strikeRaycast(_,m,p){const x=n.far;n.set(_,m),n.far=p;const M=e(n);return n.far=x,M},fillMagazine(){let _=r(t());const m=Math.min(_.magazine-_.loaded,_.reserve);_={..._,loaded:_.loaded+m,reserve:_.reserve===1/0?1/0:_.reserve-m},i(_),s.reloading&&s.cutReload(o())},setSuperCharge(_){const m=a()>=1,p=h(_,0,1);l(p),!m&&p>=1&&u.fire("flag","super-ready")},notePitch(_){c.active&&!g&&(d=_),g=c.active},pitchWindow(){if(!c.active)return[-f,f];const[_,m]=c.pitchLimits;return[Math.min(_,d),Math.max(m,d)]}}}const WM={cloth:"#8a1c1c",clothDark:"#5e1414",armour:"#3a3b40",armour2:"#4a4c52",suit:"#26262a",face:"#161618",metal:"#2a2c30",cap:"#3b2a20",rust:"#7a4a2a",bone:"#d6ccb4",mantle:"#4a3526",glowEye:"#8ec8f2",glowArc:"#9fd8ff",shell:"#261b3a",rim:"#3a2d58",shell2:"#1a1428",bezel:"#3b3550",lens:"#1a1238",glowViolet:"#b36bff",hull:"#8a2e22",under:"#4d1a14",gun:"#2a2624",glowShank:"#cfe8ff",glowExhaust:"#ff9a3c"};function Xo(n){const e={},t=[],i=(R,v,b,P,I,O,U,N,q=0,G=0,oe=0)=>t.push([R,v,b,P,I,O,U,N,q,G,oe]),r=n.leg,s=1.25,o=1.05,a=-.55,l=-.55+s,u=-.55+s-o,c=.06+r.thigh*Math.cos(a)+r.shin*Math.cos(l)+r.foot*Math.cos(u),[f,h,d]=n.pelvis;e.pelvis={at:[0,c,0]},i("pelvis",f,h,d,0,0,0,"suit");for(const R of[-1,1]){const v=R<0?"L":"R";e["thigh"+v]={parent:"pelvis",at:[R*n.hipX,-.03,0],rot:[a,0,0]},e["shin"+v]={parent:"thigh"+v,at:[0,-r.thigh,0],rot:[s,0,0]},e["foot"+v]={parent:"shin"+v,at:[0,-r.shin,0],rot:[-o,0,0]},i("thigh"+v,r.w*1.3,r.thigh+.04,r.w*1.45,0,-r.thigh/2,0,"suit"),i("shin"+v,r.w,r.shin+.03,r.w*1.05,0,-r.shin/2,0,"armour"),i("foot"+v,r.w*.85,r.foot,r.w*.85,0,-r.foot/2,0,"suit"),i("foot"+v,r.w*1.3,.05,r.w*3,0,-r.foot,r.w*.9,"armour2",-u,0,0)}const[g,_,m]=n.chest;e.chest={parent:"pelvis",at:[0,h/2+.03,0],rot:[n.hunch,0,0]},i("chest",g,_,m,0,_/2,0,"suit"),i("chest",g*1.1,_*.44,m*1.08,0,_*.74,.01,"armour"),n.rust&&i("chest",g*.42,_*.26,.03,g*.14,_*.4,m/2+.02,"rust"),i("chest",.14,.1,.13,0,_+.03,.05,"suit");const[p,x,M]=n.head;e.head={parent:"chest",at:[0,_+.07,.08],rot:[-n.hunch*.85,0,0]},i("head",p,x,M,0,x/2,0,"armour"),i("head",p*.84,x*.52,.03,0,x*.58,M/2+.012,"face");const E=n.eye;for(const R of[-1,1])for(const v of[-1,1])i("head",E,E,.02,R*E*.95,x*.6+v*E*.9,M/2+.03,"glowEye");i("head",p*.42,x*.3,M*.36,0,x*.17,M/2+M*.13,"armour2");const C=n.horn;for(const R of[-1,1])i("head",C,.05,.055,R*(p/2+C/2-.02),x*.62,-M*.1,"armour2",0,R*.35,R*.18),i("head",C*.75,.045,.05,R*(p/2+C*.95),x*.62+C*.3,-M*.25,"armour2",0,R*.7,R*.9);if(n.hooks)for(const R of[-1,1])i("head",.05,.07,.05,R*p*.2,x+.035,-M*.1,"armour2");if(n.crownStubs)for(const R of[-1,1])i("head",.045,.14,.045,R*p*.34,x+.06,-M*.22,"bone",-.35,0,R*-.2);const y=n.arm.upper,S=n.arm.fore,A=n.arm.t;for(const R of[-1,1]){const v=R<0?"L":"R";e["arm"+v]={parent:"chest",at:[R*(g/2+A/2),_*.86,0],rot:[-n.hunch+n.armFwd,0,R*.1]},e["fore"+v]={parent:"arm"+v,at:[0,-y,0],rot:[-n.elbow,0,0]},i("arm"+v,A,y+.03,A,0,-y/2,0,"suit"),i("arm"+v,A*1.55,.11,A*1.55,0,-.03,0,"armour"),i("fore"+v,A*1.05,S,A*1.12,0,-S/2,0,"armour")}if(n.lower){const R=y*.7,v=S*.7,b=A*.62;for(const P of[-1,1]){const I=P<0?"L":"R";e["arm2"+I]={parent:"chest",at:[P*(g/2+b/2-.01),_*.34,.03],rot:[-n.hunch+n.lower.fwd,0,P*.3]},e["fore2"+I]={parent:"arm2"+I,at:[0,-R,0],rot:[-n.lower.elbow,0,0]},i("arm2"+I,b,R+.02,b,0,-R/2,0,"suit"),i("fore2"+I,b*1.05,v,b*1.12,0,-v/2,0,"armour"),n.lowerBlades&&(i("fore2"+I,.06,.07,.06,0,-v-.02,0,"metal"),i("fore2"+I,.035,.62,.07,0,-v-.36,0,"glowArc"))}}if(n.caps)for(const R of[-1,1])i("chest",.1,.1,.1,R*(g/2+.035),_*.36,.02,"cap",0,0,R*.6);if(n.pauldron){const[R,v,b]=n.pauldron;for(const P of[-1,1])i("chest",R,v,b,P*(g/2+R*.28),_*.96,0,"armour2",0,0,-P*.28),n.trim&&i("chest",R*1.04,.035,b*1.04,P*(g/2+R*.3),_*.96+v/2,0,"bone",0,0,-P*.28)}if(n.trim&&i("chest",g*.9,.04,.03,0,_*.55,m/2+.035,"bone"),n.pack&&i("chest",.28,.34,.15,0,_*.5,-m/2-.075,"armour2"),n.mantle&&i("chest",g*1.2,.13,m*1.25,0,_+.01,-.02,"mantle"),n.cowl&&(i("head",p+.05,x*.85,.05,0,x*.45,-M/2-.02,"cloth"),i("pelvis",f*.72,.36,.025,0,-.21,d/2+.02,"cloth"),i("pelvis",f*.8,.28,.025,0,-.17,-d/2-.02,"clothDark")),n.cape){const R=n.cape;e.cape={parent:"chest",at:[0,_*R.top,-m/2-.045-(n.pack?.15:0)],rot:[-n.hunch+.06,0,0]},i("cape",R.w,R.len,.03,0,-R.len/2,0,"cloth");const v=R.hem,b=R.w/(v*2);for(let P=0;P<v;P++)i("cape",b,.07+P%2*.07,.028,-R.w/2+b*(2*P+1),-R.len-.035-P%2*.035,0,"clothDark")}if(n.banner&&(e.banner={parent:"chest",at:[.12,_*.9,-m/2-.26],rot:[-n.hunch,0,0]},i("banner",.05,1.05,.05,0,.02,0,"metal"),i("banner",.46,.55,.03,.25,.24,0,"cloth"),i("banner",.46,.07,.035,.25,.04,0,"bone")),n.weapon==="pistol")i("foreR",.065,.2,.1,0,-S-.08,.02,"metal"),i("foreR",.035,.03,.035,0,-S-.19,.02,"glowArc"),i("foreL",.05,.06,.05,0,-S-.02,0,"metal"),i("foreL",.028,.28,.055,0,-S-.19,0,"glowArc");else if(n.weapon==="wire")i("foreR",.1,.32,.13,.04,-S+.06,.02,"armour2"),i("foreR",.07,1.36,.1,.04,-S-.5,.02,"metal"),i("foreR",.03,.26,.035,.04,-S-.42,.08,"glowArc");else if(n.weapon==="shock"){i("foreR",.11,.95,.15,.05,-S-.28,0,"metal");for(const R of[-1,1])i("foreR",.02,.62,.02,.05+R*.05,-S-.3,.085,"glowArc")}return{bones:e,parts:t}}function XM(){const e={core:{at:[0,2.05,0]},eye:{parent:"core",at:[0,0,.621]}},t=[],i=(a,...l)=>t.push([a,...l]);i("core",1.15,1.15*.72,1.15*.72,0,0,0,"shell"),i("core",1.15*.72,1.15,1.15*.72,0,0,0,"shell"),i("core",1.15*.72,1.15*.72,1.15,0,0,0,"shell"),i("core",1.15*.86,1.15*.86,1.15*.6,0,0,0,"rim",0,0,Math.PI/4),i("core",1.15*.62,1.15*.62,.06,0,0,1.15/2+.02,"shell2");const r=1.15*.3,s=1.15*.05,o=1.15/2+.06;return i("core",r,s,.04,0,r/2-s/2,o,"glowViolet"),i("core",r,s,.04,0,-r/2+s/2,o,"glowViolet"),i("core",s,r,.04,-r/2+s/2,0,o,"glowViolet"),i("core",s,r,.04,r/2-s/2,0,o,"glowViolet"),i("core",r-s*2,r-s*2,.03,0,0,o-.012,"lens"),i("core",1.15*.26,.05,.06,-1.15*.13,1.15*.24,o-.005,"bezel",0,0,.35),i("core",.05,1.15*.28,.06,1.15*.25,-1.15*.02,o-.005,"bezel"),i("core",1.15*.24,.05,.06,-1.15*.05,-1.15*.24,o-.005,"bezel",0,0,-.2),{bones:e,parts:t}}function qM(){const n={hull:{at:[0,1.9,0]}},e=[],t=(...i)=>e.push(["hull",...i]);t(.9,.5,.75,0,0,0,"hull"),t(.8,.12,.66,0,-.29,0,"under"),t(.56,.3,.04,0,.02,.39,"face"),t(.1,.1,.03,0,.1,.415,"glowShank");for(const i of[-1,1])t(.065,.065,.03,i*.14,-.06,.415,"glowShank"),t(.36,.26,.42,i*.62,.16,-.02,"hull",0,0,i*.22),t(.26,.05,.26,i*.64,.31,-.02,"face",0,0,i*.22),t(.2,.04,.2,i*.6,0,-.02,"glowExhaust"),t(.05,.8,.08,i*.3,-.62,-.22,"under",.45,0,i*.35);return t(.12,.12,.46,0,-.38,.22,"gun"),t(.06,.06,.04,0,-.38,.47,"glowArc"),{bones:n,parts:e}}const Mf={hunch:.18,leg:{thigh:.55,shin:.62,foot:.4,w:.12},hipX:.16,pelvis:[.44,.22,.3],chest:[.66,.6,.4],head:[.32,.3,.36],eye:.036,horn:.32,hooks:!0,arm:{upper:.46,fore:.44,t:.11},armFwd:.35,elbow:1.9,lower:{fwd:.55,elbow:1.2},pauldron:[.3,.16,.36],pack:!0,cape:{w:.78,len:1.2,top:.98,hem:4},weapon:"shock"},ai=n=>n.userData.rest,qo=(n,e,t,i,r)=>{n&&(n.rotation.x=ai(n).r.x+Math.sin(e*i+r)*t)},Zr=(n,e,t={})=>({id:n,...e,palette:WM,...t}),Yo=["cape","banner"],Sf={colour:"#5fb8ff",element:"arc",opacity:.22,pad:1.12,regenDelay:4,regenSeconds:1.5},YM=[{id:"dreg",name:"Dreg",faction:"fallen",rank:"minor",tier:"fodder",body:"biped",health:{max:80},crit:{bones:["head"]},noHit:Yo,ether:!0,spec:Zr("dreg",Xo({hunch:.55,leg:{thigh:.34,shin:.4,foot:.27,w:.07},hipX:.1,pelvis:[.26,.16,.2],chest:[.36,.42,.26],head:[.2,.19,.28],eye:.028,horn:.14,arm:{upper:.3,fore:.3,t:.06},armFwd:.2,elbow:1.35,caps:!0,cowl:!0,rust:!0,weapon:"pistol"})),idle:(n,e,t)=>{const i=Math.floor(n*1.3+t.phase*3);e.head.rotation.y=ai(e.head).r.y+Math.sin(i*12.9898)*.55,e.pelvis.position.y=ai(e.pelvis).p.y+Math.sin(n*6+t.phase)*.012}},{id:"vandal",name:"Vandal",faction:"fallen",rank:"minor",tier:"skirmisher",body:"biped",health:{max:150},crit:{bones:["head"]},noHit:Yo,ether:!0,spec:Zr("vandal",Xo({hunch:.35,leg:{thigh:.45,shin:.55,foot:.36,w:.085},hipX:.12,pelvis:[.32,.18,.24],chest:[.46,.5,.3],head:[.26,.24,.32],eye:.032,horn:.24,hooks:!0,arm:{upper:.38,fore:.36,t:.075},armFwd:.3,elbow:1.85,lower:{fwd:.15,elbow:.55},cape:{w:.42,len:.78,top:.95,hem:3},weapon:"wire"})),idle:(n,e,t)=>{e.chest.rotation.x=ai(e.chest).r.x+Math.sin(n*1.6+t.phase)*.025,qo(e.cape,n,.05,1.3,t.phase)}},{id:"captain",name:"Captain",faction:"fallen",rank:"elite",tier:"heavy",body:"biped",health:{max:320},shield:{...Sf,amount:160},crit:{bones:["head"]},noHit:Yo,ether:!0,spec:Zr("captain",Xo(Mf)),idle:(n,e,t)=>{e.head.rotation.z=ai(e.head).r.z+Math.sin(n*.5+t.phase)*.08,qo(e.cape,n,.035,.9,t.phase)}},{id:"boss",name:"Boss Captain",faction:"fallen",rank:"boss",tier:"heavy",body:"biped",health:{max:1100},shield:{...Sf,amount:400},crit:{bones:["head"]},noHit:Yo,ether:!0,spec:Zr("boss",Xo({...Mf,horn:.36,crownStubs:!0,trim:!0,mantle:!0,banner:!0,lowerBlades:!0,lower:{fwd:.55,elbow:1.75},cape:{w:.8,len:1.5,top:.98,hem:5}}),{scale:1.2}),idle:(n,e,t)=>{e.head.rotation.z=ai(e.head).r.z+Math.sin(n*.45+t.phase)*.07,qo(e.cape,n,.03,.8,t.phase),qo(e.banner,n,.04,1.1,t.phase+1)}},{id:"servitor",name:"Servitor",faction:"fallen",rank:"elite",tier:"heavy",body:"servitor",health:{max:500},crit:{keys:["glowViolet","lens"]},aura:{bone:"core",at:[0,0,0],r:.95,colour:"#b08cff",opacity:.12},spec:Zr("servitor",XM()),idle:(n,e,t)=>{e.core.position.y=ai(e.core).p.y+Math.sin(n*Math.PI+t.phase)*.1,e.core.rotation.z=ai(e.core).r.z+Math.sin(n*.35+t.phase)*.12}},{id:"shank",name:"Shank",faction:"fallen",rank:"minor",tier:"skirmisher",body:"shank",health:{max:60},crit:null,spec:Zr("shank",qM()),idle:(n,e,t)=>{e.hull.position.y=ai(e.hull).p.y+Math.sin(n*2.6+t.phase)*.05,e.hull.rotation.z=ai(e.hull).r.z+Math.sin(n*1.3+t.phase)*.06}}],yf=Math.PI/180,ld=Math.tan(Math.PI/8),$M=Math.tan(Math.PI/6),cd={gunmetal:"#2d3034",blued:"#252b33",iron:"#3a3d40",steel:"#7d858a",plasteel:"#a9b3b8",olive:"#5f6b4a",wood:"#6b5238",rubber:"#1f2226",leather:"#5a3e2b",cord:"#8a7a5a",cloth:"#bdb29a",brass:"#a8843c",bore:"#0d0e10",reticle:"#0d0e10",glowDot:"#ff5a36",glowBead:"#f2e6c0"},KM="#9fc4d0",Tr=(n,e,t,i,r,s,o)=>[0,1,2,3].map(a=>[n,2*e,2*e*ld,t,i,r,s,o,0,0,a*Math.PI/4]),bf=(n,e,t,i,r,s,o)=>[0,1,2].map(a=>[n,2*e*$M,2*e,t,i,r,s,o,0,0,a*Math.PI/3]);function $o(n,e,t,i,r,s,o,a){const l=[],u=e+t/2,c=2*(e+t)*ld+6e-4;for(let f=0;f<8;f++){const h=f*Math.PI/4;l.push([n,c,t,i,r+Math.sin(h)*u,s+Math.cos(h)*u,o,a,0,0,-h])}return l}const Ei=(n,e,t,i)=>({bone:n,at:e,fingers:t,back:i}),zs=(n,e)=>({bone:n,at:e}),jM={body:{at:[0,0,0]},mag:{parent:"body",at:[0,-.004,-.105]},bolt:{parent:"body",at:[.03,.052,-.03]}},ZM=[["body",.056,.07,.26,0,.045,-.055,"gunmetal"],["body",.058,.012,.2,0,.086,-.07,"olive"],["body",.024,.008,.11,0,.096,-.03,"iron"],["body",.044,.024,.13,0,0,-.01,"gunmetal"],["body",.052,.054,.18,0,.04,-.275,"iron"],["body",.056,.058,.016,0,.04,-.22,"cord"],["body",.056,.058,.016,0,.04,-.275,"cord"],["body",.056,.058,.016,0,.04,-.33,"cord"],...Tr("body",.017,.12,0,.047,-.425,"blued"),...Tr("body",.02,.01,0,.047,-.395,"steel"),...Tr("body",.02,.01,0,.047,-.455,"steel"),["body",.018,.018,.045,0,.047,-.5075,"iron"],["body",.024,.024,.012,0,.047,-.536,"steel"],["body",.05,.02,.07,0,0,-.105,"gunmetal"],["body",.012,.008,.06,0,-.028,-.04,"iron"],["body",.012,.03,.008,0,-.014,-.068,"iron"],["body",.006,.022,.008,0,-.008,-.035,"steel"],["body",.04,.105,.048,0,-.048,.028,"rubber",-.3,0,0],["body",.04,.068,.15,0,.028,.15,"wood"],["body",.044,.088,.018,0,.022,.234,"leather"],["body",.042,.012,.08,0,.066,.16,"cord"],["body",.002,.004,.012,-.029,.045,-.006,"steel",.5,0,0],["body",.002,.004,.012,-.029,.045,-.014,"steel",-.5,0,0],["body",.03,.012,.05,0,.106,-.01,"iron"],["body",.004,.034,.012,-.016,.129,-.03,"iron"],["body",.004,.034,.012,.016,.129,-.03,"iron"],["body",.036,.004,.012,0,.148,-.03,"iron"],["body",.038,.008,.014,0,.115,-.03,"cloth"],["body",.028,.028,.002,0,.13,-.03,"glass"],["body",.0012,.0012,8e-4,0,.13,-.0315,"glowDot"],["bolt",.006,.018,.03,0,0,0,"steel"],["mag",.034,.125,.06,0,-.062,.004,"gunmetal",.1,0,0],["mag",.04,.012,.068,0,-.128,-.003,"steel",.1,0,0],["mag",.036,.02,.062,0,-.03,.002,"olive",.1,0,0]],JM={frame:{at:[0,0,0]},crane:{parent:"frame",at:[-.017,.022,-.02]},cyl:{parent:"crane",at:[.017,.022,0]},block:{parent:"cyl",at:[0,0,.03]},hammer:{parent:"frame",at:[0,.052,.022]}},QM=[["frame",.034,.04,.24,0,.058,-.172,"blued"],["frame",.028,.03,.13,0,.023,-.227,"blued"],["frame",.04,.074,.012,0,.042,-.15,"cord"],["frame",.036,.004,.15,0,.08,-.18,"steel"],["frame",.002,.022,.11,.018,.056,-.1,"plasteel"],["frame",.002,.022,.11,-.018,.056,-.1,"plasteel"],["frame",.012,.012,.003,0,.058,-.2935,"bore"],["frame",.036,.02,.08,0,.006,-.012,"blued"],["frame",.03,.01,.064,0,.073,-.02,"blued"],["frame",.04,.06,.012,0,.04,.018,"blued"],["frame",.024,.012,.02,0,.082,.012,"iron"],["frame",.009,.009,.006,-.0075,.0925,.008,"steel"],["frame",.009,.009,.006,.0075,.0925,.008,"steel"],["frame",.0035,.016,.01,0,.086,-.283,"steel"],["frame",.003,.003,.003,0,.0955,-.281,"glowBead"],["frame",.01,.008,.045,0,-.026,-.028,"blued"],["frame",.01,.028,.008,0,-.012,-.05,"blued"],["frame",.006,.018,.008,0,-.008,-.02,"steel"],["frame",.03,.026,.026,0,.002,.02,"blued"],["frame",.034,.085,.042,0,-.04,.036,"wood",-.35,0,0],["frame",.04,.012,.05,0,-.083,.052,"iron",-.35,0,0],["frame",.004,.01,.014,-.021,.048,.012,"brass"],...bf("cyl",.022,.064,0,0,0,"iron"),["cyl",.006,.004,.058,.0235*Math.cos(Math.PI/6),.0235*Math.sin(Math.PI/6),0,"brass",0,0,-Math.PI/3],["cyl",.008,.008,.05,0,0,-.057,"steel"],["crane",.01,.018,.01,.008,.01,-.056,"blued"],...bf("block",.02,.006,0,0,.002,"brass"),["hammer",.012,.028,.012,0,.012,.004,"blued"],["hammer",.014,.008,.018,0,.026,.012,"steel"]],On=.124,V0=.15,e2={body:{at:[0,0,0]},mag:{parent:"body",at:[0,-.004,.095]}},t2=[["body",.058,.08,.5,0,.045,.05,"blued"],["body",.062,.028,.44,0,.072,.04,"plasteel"],["body",.064,.04,.15,0,.022,.2,"plasteel"],["body",.064,.1,.02,0,.035,.31,"rubber"],["body",.066,.02,.09,0,.082,.23,"cloth"],["body",.05,.05,.12,0,.052,-.26,"iron"],...Tr("body",.02,.26,0,.004,-.25,"blued"),...Tr("body",.023,.028,0,.004,-.18,"cloth"),...Tr("body",.023,.028,0,.004,-.32,"cloth"),["body",.018,.018,.07,0,.055,-.355,"iron"],["body",.034,.03,.05,0,.055,-.415,"iron"],["body",.036,.004,.008,0,.049,-.405,"bore"],["body",.036,.004,.008,0,.061,-.405,"bore"],["body",.036,.004,.008,0,.049,-.425,"bore"],["body",.036,.004,.008,0,.061,-.425,"bore"],["body",.036,.092,.046,0,-.044,.012,"rubber",-.3,0,0],["body",.01,.008,.07,0,-.024,-.036,"iron"],["body",.01,.026,.008,0,-.01,-.068,"iron"],["body",.006,.02,.008,0,-.008,-.03,"steel"],["body",.046,.016,.072,0,-.002,.095,"blued"],["body",.004,.02,.045,.031,.05,.13,"bore"],["body",.018,.008,.012,0,.09,.118,"iron"],["body",.03,.006,.01,0,.089,.098,"cord"],...$o("body",.025,.004,.006,0,On,V0+.003,"rubber"),...$o("body",.024,.005,.02,0,On,V0-.01,"blued"),...$o("body",.026,.004,.025,0,On,.1175,"iron"),...$o("body",.03,.006,.02,0,On,.095,"blued"),["body",4e-4,.012,4e-4,0,On-.01,.088,"reticle"],["body",.016,4e-4,4e-4,-.012,On,.088,"reticle"],["body",.016,4e-4,4e-4,.012,On,.088,"reticle"],["body",8e-4,8e-4,4e-4,0,On,.0877,"glowDot"],["body",.058,.058,.001,0,On,.0865,"glass"],...Tr("body",.0302,.001,0,On,.085,"mask"),["mag",.03,.078,.058,0,-.04,0,"iron"],["mag",.036,.01,.064,0,-.083,0,"steel"],["mag",.032,.018,.06,0,-.016,0,"plasteel"]],wa=[{id:"auto",label:"Auto rifle",damage:21,precision:1.5,ammoType:"primary",stats:{magazine:30,rpm:600,reserve:1/0,auto:!0},spec:{id:"auto",bones:jM,parts:ZM},sight:{kind:"reflex",rear:[0,.13,.012],front:[0,.13,-.0315],eyeRelief:.11},sockets:{muzzle:zs("body",[0,.047,-.542]),port:zs("body",[.03,.052,-.03]),rightGrip:Ei("body",[.034,-.02,.093],[0,-.29,-.96],[1,0,0]),leftHold:Ei("body",[-.056,-.004,-.278],[1,0,0],[0,-1,0]),leftMag:Ei("mag",[0,-.15,.047],[0,0,-1],[0,-1,0])},hip:{at:[.17,-.165,-.42],rot:[0,-2,0]},zoom:1.6,adsTime:.25,readyTime:.31,stowTime:.28,adsSlide:.05,casings:!0,recoil:{aim:{pitch:.26,direction:72,climbCap:3.5,hold:.12,halflife:.1},kick:{rise:[1.2,.35],back:[6,1],roll:[.8,.15],tp:.028},flash:.09},reload:{clip:1.9,seat:.55,gun:[[0,0,0,0,0,0,0],[.12,-30,20,30,6,0,-28],[.64,-30,20,30,6,0,-28],[.82,-15,10,15,3,0,-14],[1,0,0,0,0,0,0]],left:[[0,"leftHold",.6],[.06,"leftHold",.6],[.16,"leftMag",.9],[.3,"offLeft",.9],[.36,"offLeft",.9],[.48,"belowMag",.9],[.55,"leftMag",.9],[.6,"leftMag",.3],[.8,"leftHold",.6]],mag:[[0,0],[.16,1],[.55,0]],events:[[.16,"grab"],[.55,"seat"],[.6,"slap"],[1,"settle"]]}},{id:"hand",label:"Hand cannon",damage:55,precision:1.5,ammoType:"special",reserveCap:24,stats:{magazine:8,rpm:140,reserve:12,auto:!1},spec:{id:"hand",bones:JM,parts:QM},sight:{kind:"iron",rear:[0,.0955,.008],front:[0,.0955,-.281],eyeRelief:.25},sockets:{muzzle:zs("frame",[0,.058,-.295]),rightGrip:Ei("frame",[.034,-.011,.097],[0,-.34,-.94],[1,0,0]),cylFront:Ei("cyl",[0,.045,-.06],[0,0,1],[0,1,0]),leftBlock:Ei("block",[0,.05,.024],[0,-1,0],[0,0,1])},oneHanded:!0,hip:{at:[.15,-.14,-.38],rot:[1,-3,0]},zoom:1.4,adsTime:.21,readyTime:.26,stowTime:.29,adsSlide:.06,casings:!1,recoil:{aim:{pitch:1.8,direction:85,hold:.06,halflife:.05},kick:{rise:[6,2],back:[22,2],roll:[1.5,.3],tp:.045},flash:.14},reload:{clip:1.85,seat:.8,gun:[[0,0,0,0,0,0,0],[.14,20,20,0,24,0,-15],[.35,10,25,40,38,-5,-15],[.62,10,25,40,38,-5,-15],[.69,-100,20,40,10,0,-80],[.9,-100,20,40,10,0,-80],[.97,0,0,0,6,0,0],[1,0,0,0,0,0,0]],left:[[0,"offLeft",.5],[.18,"offLeft",.5],[.33,"cylFront",.4],[.52,"cylFront",.4],[.58,"offLeft",.8],[.66,"offLeft",.8],[.75,"leftBlock",.8],[.8,"leftBlock",.8],[.9,"offLeft",.3]],crane:[[0,0],[.06,0],[.14,95],[.9,95],[.95,0]],ejector:[[0,0],[.4,0],[.46,22],[.52,0]],cylTurn:[[0,0],[.9,0],[.97,60]],block:[[0,0],[.6,1],[.8,0]],events:[[.06,"latch"],[.46,"eject"],[.6,"newBlock"],[.8,"seat"],[.95,"snap"],[1,"settle"]]}},{id:"pulse",label:"Pulse rifle",damage:15,precision:1.5,ammoType:"primary",stats:{magazine:21,rpm:900,reserve:1/0,auto:!0,burst:3},burstCycle:.4,spec:{id:"pulse",bones:e2,parts:t2},sight:{kind:"scope",rear:[0,On,V0],front:[0,On,.0877],eyeRelief:.06},sockets:{muzzle:zs("body",[0,.055,-.442]),port:zs("body",[.031,.05,.13]),rightGrip:Ei("body",[.034,-.022,.078],[0,-.29,-.96],[1,0,0]),leftHold:Ei("body",[-.056,-.032,-.262],[1,0,0],[0,-1,0]),leftMag:Ei("mag",[0,-.104,.05],[0,0,-1],[0,-1,0])},hip:{at:[.16,-.175,-.45],rot:[0,-2,0]},zoom:2.3,adsTime:.31,readyTime:.31,stowTime:.28,adsSlide:.08,casings:!0,recoil:{aim:{pitch:.34,direction:90,hold:.03,halflife:.045},kick:{rise:[1.6,.5],back:[7,0],roll:[.6,.15],tp:.022},flash:.06},reload:{clip:1.9,seat:.58,gun:[[0,0,0,0,0,0,0],[.16,-50,30,60,8,-14,-42],[.4,-60,20,80,10,-16,-46],[.46,-50,30,60,8,-14,-42],[.68,-50,30,60,8,-14,-42],[.84,-25,15,30,4,-7,-20],[1,0,0,0,0,0,0]],left:[[0,"leftHold",.6],[.1,"leftHold",.6],[.26,"leftMag",.9],[.4,"offLeft",.9],[.44,"offLeft",.9],[.53,"belowMag",.9],[.58,"leftMag",.9],[.62,"leftMag",0],[.66,"leftMag",0],[.82,"leftHold",.6]],mag:[[0,0],[.26,1],[.58,0]],events:[[.26,"grab"],[.58,"seat"],[1,"settle"]]}}],Ef={offLeft:{at:[-.16,-.62,-.3],fingers:[.3,.6,-1],back:[-1,0,0]},offRight:{at:[.2,-.62,-.28],fingers:[-.3,.6,-1],back:[1,0,0]}},n2=.05,i2=(n,e)=>2*Math.atan(Math.tan(n*yf/2)/e)/yf,wf=["glass","mask"],r2=new hn({color:KM,transparent:!0,opacity:.12,depthWrite:!1}),s2=new hn({colorWrite:!1}),Tf=new D,Hs=new D,Gs=new D,o2=new Xe;function W0(n,e,t=new Ht){return Gs.set(...n).normalize().negate(),Hs.set(...e),Hs.addScaledVector(Gs,-Hs.dot(Gs)).normalize(),Tf.crossVectors(Hs,Gs),t.setFromRotationMatrix(o2.makeBasis(Tf,Hs,Gs))}function a2(n,e,t){const i=new D(...n),s=new D(...e).clone().sub(i).normalize(),o=new D(0,1,0),a=o.addScaledVector(s,-o.dot(s)).normalize(),l=s.clone().negate(),u=new D().crossVectors(a,l),c=new Ht().setFromRotationMatrix(new Xe().makeBasis(u,a,l)).invert(),f=new D(0,0,-t).sub(i.clone().applyQuaternion(c));return{q:c,p:f}}function ud(n,e={}){const t=n.spec,i=mo({id:t.id,bones:t.bones,parts:t.parts.filter(o=>!wf.includes(o[7])),palette:cd},{solidMaterial:e.solidMaterial,glowMaterial:e.glowMaterial}),r=[];if(!e.icon)for(const o of wf){const a=new Map;for(const l of t.parts){if(l[7]!==o)continue;const u=new cn(l[1],l[2],l[3]);u.deleteAttribute("uv"),u.applyMatrix4(ba(l)),a.has(l[0])||a.set(l[0],[]),a.get(l[0]).push(u)}for(const[l,u]of a){const c=new xt(u.length===1?u[0]:Pc(u,!1),o==="mask"?s2:r2);c.name=`${t.id}:${o}`,o==="mask"&&(c.renderOrder=-1),i.bones[l].add(c),r.push(c)}}const s={};for(const[o,a]of Object.entries(n.sockets??{})){const l=new Gt;l.name=`${t.id}:${o}`,l.position.set(...a.at),a.fingers&&W0(a.fingers,a.back,l.quaternion),i.bones[a.bone].add(l),s[o]=l}for(const o of[...i.meshes,...r])o.frustumCulled=!1;return i.root.updateMatrixWorld(!0),{group:i.root,rig:i,bones:i.bones,sockets:s,extras:r,weapon:n}}const X0={glove:"#3b2f27",gloveDark:"#2a221c",plate:"#595d60",plateLight:"#a9b3b8",steel:"#7d858a",bandRust:"#8a4a2b",bandCloth:"#bdb29a",knit:"#4f6660",bracer:"#5a3e2b",cord:"#8a7a5a",sleeve:"#6e6450",sleeveDark:"#4f483a",undersuit:"#2b2e31",glowElement:"#ffffff"},l2={hand:{at:[0,0,0]},fingers:{parent:"hand",at:[.004,0,-.098]},fingersTip:{parent:"fingers",at:[0,0,-.045]},thumb:{parent:"hand",at:[-.04,-.008,-.03],rot:[0,.6,0]},thumbTip:{parent:"thumb",at:[0,0,-.045]}},c2=[["hand",.085,.032,.098,0,0,-.049,"glove"],["fingers",.08,.026,.047,0,0,-.022,"glove"],["fingersTip",.077,.024,.04,0,0,-.019,"gloveDark"],["thumb",.026,.025,.047,0,0,-.022,"glove"],["thumbTip",.023,.022,.036,0,0,-.017,"gloveDark"]],Af={titanPlate:[["hand",.092,.014,.055,0,.022,-.062,"plate"],["hand",.07,.006,.03,0,.03,-.028,"plateLight"],["hand",.112,.102,.092,0,0,.036,"plate"],["fingers",.082,.008,.04,0,.016,-.022,"plate"]],hunterCloak:[...[-.03,-.01,.01,.03].map(n=>["hand",.016,.01,.018,n,.02,-.09,"steel"]),["hand",.094,.09,.012,0,0,.02,"bandRust"],["hand",.094,.09,.012,0,0,.036,"bandCloth"]],warlockRobe:[["hand",.098,.092,.12,0,0,.07,"bracer"],["hand",.102,.096,.01,0,0,.04,"cord"],["hand",.102,.096,.01,0,0,.1,"cord"],["hand",.004,.004,.08,0,.017,-.05,"cord"]]},u2={titanPlate:[["fingers",.07,.004,.024,0,.0215,-.016,"glowElement"]],hunterCloak:[["hand",.078,.004,.008,0,.0185,-.074,"glowElement"]],warlockRobe:[["hand",.056,.004,.06,0,-.0175,-.05,"glowElement"],["hand",.004,.0025,.06,.022,.01725,-.05,"glowElement"]]},El={titanPlate:{fore:[.105,.1,"plate"],upper:[.12,.115,"undersuit"]},hunterCloak:{fore:[.08,.076,"knit"],upper:[.105,.1,"undersuit"]},warlockRobe:{fore:[.115,.105,"sleeve"],upper:[.13,.12,"sleeveDark"]}},Rf={upper:.32,fore:.3},f2={right:[.26,-.58,.02],left:[-.3,-.62,0]},h2={right:[1,-1,.5],left:[-1,-1,.5]};function d2(n,e){const t=Af[n]?n:"hunterCloak",i=[...c2,...Af[t],...u2[t]],r=e==="left",s=Object.fromEntries(Object.entries(l2).map(([o,a])=>[o,{...a,at:r?[-a.at[0],a.at[1],a.at[2]]:a.at,...a.rot?{rot:r?[a.rot[0],-a.rot[1],-a.rot[2]]:a.rot}:{}}]));return{id:`hand-${e}-${n}`,bones:s,parts:i.map(([o,a,l,u,c,f,h,d,g=0,_=0,m=0])=>r?[o,a,l,u,-c,f,h,d,g,-_,-m]:[o,a,l,u,c,f,h,d,g,_,m]),palette:X0}}const _t=Math.PI/180,Cf={x:0,y:0,z:0,pitch:0,yaw:0,roll:0},q0=50,Ko=.6,Lf=.12,hr=.15,jo={y:-.22,z:.04,pitch:-30,roll:25},Vs={x:.004,halflife:.07},dr={yaw:2.5*_t,pitch:2*_t,roll:4*_t,x:.012},p2=1.5,m2=4.2,g2=.045,wl=.7,Pf=9.8;function _2(){const n=new Map;return e=>(n.has(e)||n.set(e,new Fi({color:e,roughness:.85,metalness:0})),n.get(e))}function v2(n={}){const e=n.hipFov??70,t=new Sn;t.name="first-person";const i=new Sn,r=new Sn,s=new Sn;t.add(i),i.add(r),r.add(s);const o=new Fi({vertexColors:!0,roughness:.7,metalness:0}),a=new hn({vertexColors:!0}),l=wa.map((ee,ie)=>{const he=ud(ee,{solidMaterial:o,glowMaterial:a});he.group.visible=ie===0,s.add(he.group);const fe=a2(ee.sight.rear,ee.sight.front,ee.sight.eyeRelief);return{...he,w:ee,aim:fe,aimFwd:fe.p.clone().add(new D(0,0,-ee.adsSlide)),hipP:new D(...ee.hip.at),hipQ:new Ht().setFromEuler(new en(ee.hip.rot[0]*_t,ee.hip.rot[1]*_t,ee.hip.rot[2]*_t,"YXZ")),front:new D(...ee.sight.front)}}),u=_2(),c=new cn(1,1,1);let f=n.classId??"hunterCloak";const h={};function d(){var ee;for(const ie of["right","left"]){const he=h[ie];he&&(t.remove(he.rig.root,he.upper,he.fore),he.rig.dispose());const fe=d2(f,ie),Te=go[(ee=Vn[f])==null?void 0:ee.element];Te&&(fe.palette={...fe.palette,glowElement:Te.glow});const He=mo(fe,{solidMaterial:o,glowMaterial:a});for(const st of He.meshes)st.frustumCulled=!1;He.glow&&(He.glow.visible=!1);const lt=El[f]??El.hunterCloak,wt=new xt(c,u(X0[lt.upper[2]])),mt=new xt(c,u(X0[lt.fore[2]]));t.add(He.root,wt,mt),h[ie]={rig:He,upper:wt,fore:mt,look:lt}}}d();const g={solidMaterial:o,glowMaterial:a};let _={};function m(){var ie,he;for(const fe of Object.values(_))(ie=fe.group.parent)==null||ie.remove(fe.group),fe.dispose();if(_={},!n.buildProp)return;const ee=Vn[f];if(ee)for(const fe of["grenade","melee","class","super"]){const Te=(he=mf[ee[fe]])==null?void 0:he.propKind;!Te||_[Te]||(_[Te]=n.buildProp(Te,ee.element,g),h.left.rig.bones.hand.add(_[Te].group))}}m();const p=new Sn,x=(ee,ie=1)=>new hn({color:ee,transparent:!0,opacity:ie,depthWrite:!1,blending:eo,toneMapped:!1}),M=new xt(new cn(.03,.03,.004),x(16773584)),E=new cn(.012,.004,1).translate(0,0,-.5),C=[0,1,2,3].map(ee=>{const ie=new Sn;ie.rotation.z=ee*Math.PI/2;const he=new xt(E,x(16757575,.9));return he.rotation.y=.35,ie.add(he),{pivot:ie,petal:he}});p.add(M,...C.map(ee=>ee.pivot)),p.visible=!1,s.add(p);const y=new cn(.009,.009,.024),S=new Fi({color:cd.brass,roughness:.5,metalness:0}),A=Array.from({length:16},()=>{const ee=new xt(y,S);return ee.visible=!1,ee.frustumCulled=!1,t.add(ee),{mesh:ee,age:wl,vel:new D,spin:new D}});let R=0;const v=new ho(.023,.023,.006,6).rotateX(Math.PI/2),b={mesh:new xt(v,S),age:1,vel:new D,spin:new D};b.mesh.visible=!1,b.mesh.frustumCulled=!1,t.add(b.mesh);let P=0,I=null,O=null,U=null,N=null;const q=new Ht,G=new en(0,0,0,"YXZ"),oe=new D,ae={x:0,y:0,z:0,pitch:0,yaw:0,roll:0};let re=0;const Me={p:new D,q:new Ht,curl:.6,shoulder:0,cam:[0,0,0,0,0,0]};let Ce=!1,z=0,Y=e;const Z={pitch:0,yaw:0},J={rise:{x:0,v:0},roll:{x:0,v:0},back:{x:0,v:0}},V={yaw:{x:0,v:0},pitch:{x:0,v:0},roll:{x:0,v:0},x:{x:0,v:0}},se={x:0,v:0},le={x:0,v:0};let Le=0,Oe=0,F=-1/0,Mt=0,Ge=-1/0,$e=0,De=0,it=[],Ue=0;const L={speed:0,airborne:!1},w=()=>l[P],W=ee=>U?(ee-U.at)/l[U.gun].w.reload.clip:0,K=new D,te=new Ht,Q=new Ht,Re=new en(0,0,0,"YXZ"),de=new D,ge=new Xe,Ke=new Xe,ce=new D(1,1,1),pe=[],ke=new D,Be=new D,we=new Ht;function Ze(ee,ie,he,fe,Te=0){const He=ee.w.sockets[ie],lt=ee.sockets[ie],wt=ee.bones[He.bone];if(wt.parent&&wt.parent.isBone&&(He.bone==="mag"||He.bone==="block")){const mt=wt.userData.rest;ge.copy(wt.parent.matrixWorld),ke.copy(mt.p),ke.y-=Te,ge.multiply(Ke.compose(ke,we.setFromEuler(mt.r),ce)),ge.multiply(Ke.compose(lt.position,lt.quaternion,ce))}else lt.updateWorldMatrix(!1,!1),ge.copy(lt.matrixWorld);ge.decompose(he,fe,Be)}function ze(ee,ie,he,fe){if(Ef[ie]){const Te=Ef[ie];he.set(...Te.at),W0(Te.fingers,Te.back,fe);return}if(ie==="belowMag"){Ze(ee,"leftMag",he,fe,n2);return}Ze(ee,ie,he,fe)}const dt=ee=>ee.w.oneHanded?"offLeft":"leftHold";function B(ee,ie){return ie>=ee.readyStart?1-oi((ie-ee.readyStart)/w().w.readyTime):br((ie-ee.lowerAt)/ee.clip.down)}const ve={p:new D,q:new Ht};function j(ee,ie,he,fe){if(ie==="grip"){he.copy(ve.p),fe.copy(ve.q);return}const Te=uM[ie];if(Te){he.set(...Te.at),W0(Te.fingers,Te.back,fe);return}ze(ee,ie,he,fe)}const ne={position:new D,quaternion:new Ht};function xe(ee,ie,he,fe){const Te=ee.bones[ie],He=ee.sockets[he];ge.compose(fe.position,fe.quaternion,ce),Ke.compose(He.position,He.quaternion,ce).invert(),ge.multiply(Ke),Ke.copy(Te.parent.matrixWorld).invert(),Ke.multiply(ge).decompose(Te.position,Te.quaternion,Be)}const Se=new D;function Je(ee,ie,he,fe=0){const Te=K.set(...f2[ie]);fe>0&&pf[ie]&&Te.lerp(Se.set(...pf[ie]),fe);const He=Rf.upper,lt=Rf.fore,wt=de.copy(he).sub(Te),mt=Ct(wt.length(),Math.abs(He-lt)+.001,He+lt-.001),st=wt.normalize(),mn=new D(...h2[ie]);mn.addScaledVector(st,-mn.dot(st)).normalize();const T=(He*He+mt*mt-lt*lt)/(2*He*mt),k=Math.sqrt(Math.max(0,1-T*T)),X=Te.clone().addScaledVector(st,He*T).addScaledVector(mn,He*k);jt(ee.upper,Te,X,ee.look.upper,mn),jt(ee.fore,X,he,ee.look.fore,mn)}const It=new D,Xt=new D,je=new D;function jt(ee,ie,he,fe,Te){je.copy(he).sub(ie);const He=je.length();je.divideScalar(He||1),Xt.copy(Te).addScaledVector(je,-Te.dot(je)).normalize(),It.crossVectors(Xt,je),ee.quaternion.setFromRotationMatrix(ge.makeBasis(It,Xt,je)),ee.position.copy(ie).add(he).multiplyScalar(.5),ee.scale.set(fe[0],fe[1],He+.04)}function Wn(ee){const ie=ee.sockets.port;if(!ie)return;const he=A[R];R=(R+1)%A.length,ie.getWorldPosition(he.mesh.position);const fe=Er(Mt*3.1);he.vel.set(1.6+.4*(1+fe),1.2+.3*(1-fe),.3+.15*(1+fe)),he.spin.set(12*fe,9,14*-fe),he.mesh.quaternion.copy(i.quaternion),he.age=0,he.mesh.visible=!0}const Xn={rig:t,guns:l,recoil:Z,get active(){return P},get adsE(){return z},get worldFov(){return Y},get magnification(){return Ln(1,w().w.zoom,z)},get swapping(){return!!I},get dipping(){return!!O},get busy(){return!!I||!!O||!!N},get acting(){return!!N},get lowered(){return re},get actionId(){return N?N.id:null},get actionT(){return N?Ct((Ue-N.at)/N.seconds,0,1):0},get camOffset(){return ae},get props(){return _},get reloading(){return!!U&&!U.cutAt},get classId(){return f},setAim(ee){Ce=!!ee},setClass(ee){ee===f||!El[ee]||(f=ee,N=null,d(),m(),Xn.update(0,Ue,L))},requestSwap(ee,ie){if(!l[ee])return!1;if(I){if(I.phase==="stow")return I.to=ee,!0;if(ee===P)return!1;const he=Ct((ie-I.at)/w().w.readyTime,0,1),fe=1-oi(he);return I={phase:"stow",at:ie-Math.sqrt(fe)*w().w.stowTime,to:ee},!0}return ee===P?!1:(Xn.cutReload(ie),I={phase:"stow",at:ie,to:ee},!0)},startReload(ee){U={at:ee,gun:P,lastT:0,cutAt:null},it=[]},cutReload(ee){U&&U.cutAt===null&&(U.cutAt=ee)},dip(ee){Xn.cutReload(ee);let ie=0;if(O){const he=(ee-O.at)/hr;ie=he<1?br(he):1-oi((ee-O.at-hr)/w().w.readyTime)}O={at:ee-Math.sqrt(ie)*hr}},act(ee,ie,he,fe={}){const Te=mf[ee];if(!Te||!(he>0))return!1;Xn.cutReload(ie);let He=0;if(O){const wt=(ie-O.at)/hr;He=wt<1?br(wt):1-oi((ie-O.at-hr)/w().w.readyTime)}N&&(He=Math.max(He,B(N,ie)));const lt=N?{p:Me.p.clone(),q:Me.q.clone(),curl:Me.curl,shoulder:Me.shoulder,cam:Me.cam.slice()}:null;return O=null,N={id:ee,clip:Te,at:ie,seconds:he,charged:!!fe.charged,from:lt,lowerAt:ie-Math.sqrt(Ct(He,0,1))*Te.down,readyStart:Te.tp?Math.max(ie+Te.down,ie+he-w().w.readyTime):ie+Te.ready*he},!0},onShot(ee){const ie=w(),he=ie.w.recoil,fe=Ln(1,ie.w.zoom,z);Mt++,F=ee,Ge=ee,ie.w.id==="hand"&&$e++;const Te=he.aim.pitch*_t/fe,He=Z.pitch;Z.pitch=he.aim.climbCap?Math.max(He,Math.min(He+Te,he.aim.climbCap*_t/fe)):He+Te;const lt=he.aim.direction,wt=Math.sin((lt+5)*Math.PI/10)*(100-lt)/100,mt=(100-lt)/100;Z.yaw+=-(wt+Er(Mt)*mt)*.5*Te;const st=he.kick.tp;J.rise.v+=Bs(Ln(he.kick.rise[0],he.kick.rise[1],z)*_t,st),J.back.v+=Bs(Ln(he.kick.back[0],he.kick.back[1],z)/1e3,st),J.roll.v+=Bs(Ln(he.kick.roll[0],he.kick.roll[1],z)*_t*Er(Mt+17),st),p.userData.at=ee,p.userData.n=Mt,ie.w.casings&&Wn(ie)},update(ee,ie,he={}){const fe=Math.max(0,ee);Ue=ie,L.speed=he.speed??0,L.airborne=!!he.airborne;let Te=0;if(I&&I.phase==="stow"){const ye=(ie-I.at)/w().w.stowTime;ye>=1?(l[P].group.visible=!1,P=I.to,l[P].group.visible=!0,I={phase:"ready",at:ie,to:P},J.rise.x=J.rise.v=J.back.x=J.back.v=J.roll.x=J.roll.v=0,Te=1):Te=br(ye)}if(I&&I.phase==="ready"){const ye=(ie-I.at)/w().w.readyTime;ye>=1?I=null:Te=Math.max(Te,1-oi(ye))}if(O){const ye=(ie-O.at)/hr;if(ye<1)Te=Math.max(Te,br(ye));else{const ft=(ie-O.at-hr)/w().w.readyTime;ft>=1?O=null:Te=Math.max(Te,1-oi(ft))}}let He=0,lt=0;if(N){const ye=N,ft=(ie-ye.at)/ye.seconds;He=Ct(ft,0,1),Te=Math.max(Te,B(ye,ie)),lt=ye.from?1-oi((ie-ye.at)/Lf):0,ie>=ye.readyStart+w().w.readyTime&&(N=null)}re=Te;let wt=0,mt=0,st=1;if(U){const ye=l[U.gun].w.reload;if(wt=W(ie),U.gun!==P)U=null;else{Ce&&wt>=ye.seat&&Xn.cutReload(ie);const ft=U.cutAt===null?1/0:(U.cutAt-U.at)/ye.clip;mt=Math.min(wt,ft,1);for(const[Dt,Mo]of ye.events){if(Dt<=U.lastT||Dt>mt||it.includes(Mo))continue;it.push(Mo);const Na={seat:[1.2,4],slap:[.4,0],settle:[.3,0],snap:[2,0],latch:[.6,0],eject:[.8,0]}[Mo];if(Na){const Ds=l[U.gun].w.recoil.kick.tp;J.rise.v+=Bs(Na[0]*_t,Ds),J.back.v-=Bs(Na[1]/1e3,Ds)}if(Mo==="eject"){const Ds=w();Ds.bones.block.updateWorldMatrix(!0,!1),Ds.bones.block.matrixWorld.decompose(b.mesh.position,b.mesh.quaternion,de),b.vel.set(-.4,-.6,.2),b.spin.set(4,7,2),b.age=0,b.mesh.visible=!0}}U.lastT=Math.max(U.lastT,mt),U.cutAt!==null&&(st=1-oi((ie-U.cutAt)/Lf)),(wt>=1||st<=0)&&(ye.cylTurn&&mt>=ye.cylTurn[1][0]&&(De=(De+60)%360),U=null)}}const mn=!!U,T=w(),k=mn?T.w.reload:null,X=mn&&wt>=k.seat,$=!I&&!O&&!N&&(!mn||X||U.cutAt!==null);if(z=$x(z,Ce&&$,fe,N?Math.min(T.w.adsTime,N.clip.down):T.w.adsTime),Y=i2(e,Ln(1,T.w.zoom,z)),z<Ko){const ye=z/Ko;i.position.lerpVectors(T.hipP,T.aimFwd,ye),i.quaternion.slerpQuaternions(T.hipQ,T.aim.q,ye)}else i.position.lerpVectors(T.aimFwd,T.aim.p,(z-Ko)/(1-Ko)),i.quaternion.copy(T.aim.q);let H=0,ue=0,_e=0,be=0,Ae=0,Ne=0;mn&&(Bn(k.gun,mt,pe),H+=pe[0]/1e3*st,ue+=pe[1]/1e3*st,_e+=pe[2]/1e3*st,be+=pe[3]*st,Ae+=pe[4]*st,Ne+=pe[5]*st),Te>0&&(ue+=jo.y*Te,_e+=jo.z*Te,be+=jo.pitch*Te,Ne+=jo.roll*Te),Jn(se,he.airborne?1:0,.1,fe),he.landed>0&&(le.v-=Math.min(.35,.035*he.landed)),Jn(le,0,ff(.07),fe);const Fe=1-z;ue+=(.012*se.x+le.x)*Fe,be+=-2.5*se.x*Fe,i.position.x+=H,i.position.y+=ue,i.position.z+=_e,Re.set(be*_t,Ae*_t,Ne*_t,"YXZ"),i.quaternion.multiply(te.setFromEuler(Re));const Pe=fe>0?(he.lookYaw??0)/fe:0,ot=fe>0?(he.lookPitch??0)/fe:0;Jn(V.yaw,Ct(-.012*Pe,-dr.yaw,dr.yaw),Vs.halflife,fe),Jn(V.pitch,Ct(-.01*ot,-dr.pitch,dr.pitch),Vs.halflife,fe),Jn(V.roll,Ct(-.02*Pe,-dr.roll,dr.roll),Vs.halflife,fe),Jn(V.x,Ct(Vs.x*Pe,-.012,dr.x),Vs.halflife,fe);const ut=he.speed??0;Le+=ut*fe/p2,Oe=_l(Oe,Ct(ut/m2,0,1)*(he.airborne?0:1),.08,fe);const St=1-Ct(ut/.5,0,1),Zt=1-.9*z;r.position.set((V.x.x+.006*Math.sin(Math.PI*Le)*Oe)*Fe,(-.004*((1-Math.cos(2*Math.PI*Le))/2)*Oe+.0012*Math.sin(Math.PI*.5*ie)*St)*Fe,0),r.rotation.set((V.pitch.x+.15*_t*Math.sin(Math.PI*.5*ie+.7)*St)*Zt,V.yaw.x*Zt,(V.roll.x+.8*_t*Math.sin(Math.PI*Le)*Oe)*Zt,"YXZ");const et=ff(T.w.recoil.kick.tp);Jn(J.rise,0,et,fe),Jn(J.back,0,et,fe),Jn(J.roll,0,et,fe);const Ie=K.copy(T.front).multiplyScalar(z);Re.set(J.rise.x,0,J.roll.x,"YXZ"),s.quaternion.setFromEuler(Re),s.position.copy(Ie).sub(de.copy(Ie).applyQuaternion(s.quaternion)).add(de.set(0,0,J.back.x));const Nt=T.w.recoil.aim;ie-F>Nt.hold&&(Z.pitch=_l(Z.pitch,0,Nt.halflife,fe),Z.yaw=_l(Z.yaw,0,Nt.halflife,fe));for(const ye of l)ye.rig.reset();const We=ie-Ge,zt=T.bones;if(T.w.id==="auto"&&We<.045&&(zt.bolt.position.z+=.022*(We<.012?We/.012:1-(We-.012)/.033)),T.w.id==="hand"){We<.06&&(zt.hammer.rotation.x+=.25*(We<.015?We/.015:1-(We-.015)/.045));const ye=We<.06?0:oi((We-.06)/.16);if(zt.cyl.rotation.z+=((Math.max(0,$e-1)+($e>0?ye:0))*60+De)*_t,mn){zt.crane.rotation.z+=Bn(k.crane,mt,pe)[0]*_t*st;const ft=Bn(k.cylTurn,mt,pe)[0];zt.cyl.rotation.z+=(mt>=k.cylTurn[1][0]?Ln(60,ft,st):ft)*_t,zt.block.position.z+=Bn(k.ejector,mt,pe)[0]/1e3*st}}const ki=p.userData.at??-1/0;if(p.visible=ie-ki<g2&&!I,p.visible){const ye=p.userData.n??0;p.position.copy(T.sockets.muzzle.position),p.rotation.set(0,0,(Er(ye*5.3)*.5+.5)*Math.PI*.5);const ft=(1+.15*Er(ye*2.7))*(1-.45*z);p.scale.setScalar(ft);for(const Dt of C)Dt.petal.scale.set(1,1,T.w.recoil.flash)}t.updateMatrixWorld(!0);const kt=h.right.rig,Tt=h.left.rig;kt.reset(),Tt.reset(),Ze(T,"rightGrip",kt.root.position,kt.root.quaternion),Ps(kt.bones,.85);const At=dt(T);let Jt=.6,Dr=0;if(mn){const ye=hf(k.left,mt);ze(T,ye.from,K,te),ze(T,ye.to,de,Q),Tt.root.position.lerpVectors(K,de,ye.w),Tt.root.quaternion.slerpQuaternions(te,Q,ye.w),ne.position.copy(Tt.root.position),ne.quaternion.copy(Tt.root.quaternion),Jt=ye.extra[0],st<1&&(ze(T,At,K,te),Tt.root.position.lerp(K,1-st),Tt.root.quaternion.slerp(te,1-st),Jt=Ln(.6,Jt,st)),Dr=qn(k.mag??k.block,mt)}else ze(T,At,Tt.root.position,Tt.root.quaternion);let qt=0,Ur=!1,Is=!1;const Nn=Me.cam.fill(0);if(N){const ye=N.clip;if(ye.left){ve.p.copy(Tt.root.position),ve.q.copy(Tt.root.quaternion);const ft=hf(ye.left,He,ye.ease);j(T,ft.from,K,te),j(T,ft.to,de,Q),Tt.root.position.lerpVectors(K,de,ft.w),Tt.root.quaternion.slerpQuaternions(te,Q,ft.w),Jt=ft.extra[0],qt=Bn(ye.shoulder,He,pe)[0],Bn(ye.cam,He,pe);for(let Dt=0;Dt<6;Dt++)Nn[Dt]=pe[Dt];Ur=qn(ye.prop,He)>0,Is=qn(ye.glow,He)>0&&(!ye.glowCharged||N.charged)}if(lt>0){const ft=N.from;Tt.root.position.lerp(ft.p,lt),Tt.root.quaternion.slerp(ft.q,lt),Jt=Ln(Jt,ft.curl,lt),qt=Ln(qt,ft.shoulder,lt);for(let Dt=0;Dt<6;Dt++)Nn[Dt]=Ln(Nn[Dt],ft.cam[Dt],lt)}}Me.p.copy(Tt.root.position),Me.q.copy(Tt.root.quaternion),Me.curl=Jt,Me.shoulder=qt;const Nr=Dc.cameraMotion;ae.x=Nn[0]/1e3*Nr,ae.y=Nn[1]/1e3*Nr,ae.z=Nn[2]/1e3*Nr,ae.pitch=Nn[3]*_t*Nr,ae.yaw=Nn[4]*_t*Nr,ae.roll=Nn[5]*_t*Nr;const Wd=N==null?void 0:N.clip.propKind;for(const[ye,ft]of Object.entries(_))ft.group.visible=Ur&&ye===Wd,ft.glow&&(ft.glow.visible=ye!=="knife"||Is);if(h.left.rig.glow&&(h.left.rig.glow.visible=Is),Ps(Tt.bones,Jt),kt.root.updateMatrixWorld(!0),Tt.root.updateMatrixWorld(!0),Je(h.right,"right",kt.root.position),Je(h.left,"left",Tt.root.position,qt),Dr>0)for(const[ye,ft]of[["mag","leftMag"],["block","leftBlock"]]){const Dt=T.bones[ye];Dt&&(K.copy(Dt.position),te.copy(Dt.quaternion),xe(T,ye,ft,ne),st<1&&(Dt.position.lerpVectors(K,Dt.position,st),Dt.quaternion.slerpQuaternions(te,Dt.quaternion,st)))}if(T.w.id==="hand"&&mn){const ye=mt>=.46&&mt<.6&&st>=1;zt.block.scale.setScalar(ye?1e-4:1)}T.group.updateMatrixWorld(!0);for(const ye of A)ye.age>=wl||(ye.age+=fe,ye.vel.y-=Pf*fe,ye.mesh.position.addScaledVector(ye.vel,fe),ye.mesh.rotation.x+=ye.spin.x*fe,ye.mesh.rotation.y+=ye.spin.y*fe,ye.mesh.rotation.z+=ye.spin.z*fe,ye.age>=wl&&(ye.mesh.visible=!1));return b.age<1&&(b.age+=fe,b.vel.y-=Pf*fe,b.mesh.position.addScaledVector(b.vel,fe),b.mesh.rotation.x+=b.spin.x*fe,b.mesh.rotation.y+=b.spin.y*fe,b.age>=1&&(b.mesh.visible=!1)),Xn},muzzleWorld(ee,ie=new D){w().sockets.muzzle.getWorldPosition(ie);const fe=Math.tan(ee.fov*_t/2)/Math.tan(q0*_t/2);return ie.x*=fe,ie.y*=fe,ie.applyQuaternion(ee.quaternion).add(ee.position)},leftHandWorld(ee,ie=new D){const he=h.left.rig.bones.hand;he.updateWorldMatrix(!0,!1),ie.set(...cM).applyMatrix4(he.matrixWorld);const fe=Math.tan(ee.fov*_t/2)/Math.tan(q0*_t/2);return ie.x*=fe,ie.y*=fe,q.setFromEuler(G.set(ae.pitch,ae.yaw,ae.roll,"YXZ")),ie.applyQuaternion(q).add(oe.set(ae.x,ae.y,ae.z)),ie.applyQuaternion(ee.quaternion).add(ee.position)}};function Ps(ee,ie){ee.fingers.rotation.x-=ie*1.2,ee.fingersTip.rotation.x-=ie*1,ee.thumb.rotation.x-=ie*.4}function qn(ee,ie){if(!ee)return 0;let he=ee[0][1];for(const fe of ee)fe[0]<=ie&&(he=fe[1]);return he}for(const ee of Object.values(h))ee.rig.reset();return Xn.update(0,0,{}),Xn}const fd=.1,If=1e-9,Df=n=>n.burstLeft?{...n,burstLeft:0}:n;function x2(){let n=-1/0,e=-1/0,t=!1;return{pull(i,r,s,{held:o=!1,pressed:a=!1,blocked:l=!1}={}){if(a&&(n=s),o||(t=!1),l)return t=!1,{state:Df(i),shots:[],events:[]};const u=s-n<=fd;let c=o,f;if(r.burstCycle>0){const g=e+r.burstCycle;f=(o||u)&&s+If>=g,!f&&i.burstLeft>0&&s<g&&(c=!0)}else f=u&&s+If>=i.nextShotAt;const h=Ox(i,s,{held:c,pressed:f});let d=h.state;if(h.shots.length&&(n=-1/0,r.burstCycle>0&&f)){const g=e+r.burstCycle;e=t&&s-g<i.maxCatchUp?g:h.shots[0].at,t=o}return h.events.some(g=>g.type==="emptied")&&(d=Df(d)),{state:d,shots:h.shots,events:h.events}}}}const M2={iron:"#3a3d40",iron2:"#595d60",plasteel:"#a9b3b8",gunmetal:"#2d3034",leather:"#5a3e2b",gambeson:"#bdb29a",linen:"#9b8f78",rust:"#8a4a2b",tarp:"#4f6660",wood:"#6b5238",face:"#151719",steel:"#7d858a",oxblood:"#7a1e1e",oxbloodDark:"#4e1414",slate:"#3f5a78",slateDark:"#2a3d52",teal:"#1f5e5a",tealDark:"#143f3c",pikeHull:"#3b3a3f",ghostShell:"#cfd6da",glowArc:"#6fd3ff",glowSolar:"#ff8a2a",glowVoid:"#a76bff",glowRed:"#ff4a3a",glowGhost:"#e8f6ff"};function Ys(n={}){const e=n.scale??1,t=n.bulk??1,i=n.keys??{},r=(h,d)=>i[h]??d,s={},o=[],a=(h,d,g,_,m,p,x,M,E=0,C=0,y=0)=>o.push([h,d*e,g*e,_*e,m*e,p*e,x*e,M,E,C,y]),l=(h,d,g)=>[h*e,d*e,g*e];s.pelvis={parent:n.pelvisParent,at:n.pelvisAt??l(0,.92,0)},n.pelvisParent===void 0&&delete s.pelvis.parent,a("pelvis",.36*t,.16,.23*t,0,0,0,r("legs","linen"));const u=n.seated?1.45:0;for(const h of[-1,1]){const d=h<0?"L":"R";s["thigh"+d]={parent:"pelvis",at:l(h*.1*t,-.04,0),rot:[-u,0,h*(n.stance??0)]},s["shin"+d]={parent:"thigh"+d,at:l(0,-.42,0),rot:[u,0,0]},a("thigh"+d,.17*t,.44,.19*t,0,-.21,0,r("legs","linen")),a("shin"+d,.15*t,.42,.17*t,0,-.21,0,r("shins",r("legs","linen"))),a("shin"+d,.18*t,.08,.3*t,0,-.42,.05,r("boots","leather")),n.greaves&&a("shin"+d,.17*t,.26,.05,0,-.24,.1*t,r("greaves","iron2"))}s.chest={parent:"pelvis",at:l(0,.06,0),rot:[n.lean??0,0,0]},a("chest",.44*t,.52,.25*t,0,.26,0,r("torso","linen")),a("chest",.13,.08,.13,0,.56,0,r("neck","leather")),n.plate&&a("chest",.5*t,.32,.3*t,0,.34,.01,r("plate","iron")),n.plate2&&a("chest",.42*t,.12,.28*t,0,.1,.01,r("plate2","iron")),s.head={parent:"chest",at:l(0,.58,0)};const c=n.helm??"great";if(c==="great"?(a("head",.26,.28,.28,0,.14,0,r("helm","iron")),a("head",.19,.03,.02,0,.16,.145,r("visor","glowArc"))):c==="stepped"?(a("head",.24,.22,.26,0,.11,0,r("helm","iron")),a("head",.18,.1,.2,0,.27,-.01,r("helm","iron")),a("head",.2,.035,.02,0,.13,.135,r("visor","glowVoid"))):c==="hood"?(a("head",.21,.23,.23,0,.12,0,"face"),a("head",.12,.022,.02,0,.14,.125,r("visor","glowSolar")),a("head",.29,.3,.28,0,.15,-.035,r("hood","slate")),a("head",.12,.12,.14,0,.33,-.03,r("hood","slate"),-.55,0,0)):c==="wrap"&&(a("head",.22,.24,.24,0,.12,0,r("wrap","linen")),a("head",.28,.22,.28,.02,.17,-.03,r("hood","tarp")),a("head",.2,.03,.02,0,.13,.125,"face")),n.crown){const h=c==="stepped"?.32:.28,d=[[0,.13,.1],[-.1,.1,.075],[.1,.1,.075],[-.12,-.05,.06],[.12,-.05,.06]].slice(0,n.crown);for(const[g,_,m]of d)a("head",.035,m,.035,g,h+m/2,_,r("crown","iron2"))}for(const h of[-1,1]){const d=h<0?"L":"R",g=(n.arms??{})[d]??{};s["arm"+d]={parent:"chest",at:l(h*(.22*t+.06),.5,0),rot:[g.fwd??0,0,h*(g.out??.06)]},s["fore"+d]={parent:"arm"+d,at:l(0,-.32,0),rot:[-(g.elbow??.1),0,0]},a("arm"+d,.12*t,.34,.13*t,0,-.16,0,r("arms",r("torso","linen"))),a("fore"+d,.11*t,.3,.12*t,0,-.15,0,r("forearms",r("arms",r("torso","linen")))),a("fore"+d,.1,.1,.1,0,-.33,0,r("hands","leather")),n.gauntlets&&a("fore"+d,.13*t,.16,.14*t,0,-.19,0,r("gauntlets","iron"));const _=(n.pauldrons??{})[d];_&&a("arm"+d,_.size[0]*t,_.size[1],_.size[2]*t,h*.02,0,0,_.key,0,0,h*-.22),(n.glowHands??[]).includes(d)&&a("fore"+d,.14,.14,.14,0,-.34,.01,n.glowKey??"glowArc")}if(n.mantle&&(a("chest",.64*t,.12,.4*t,0,.5,-.02,n.mantle),a("chest",.54*t,.1,.33*t,0,.43,-.06,n.mantle)),n.tabard&&a("chest",.26*t,.78,.03,0,.02,.15*t,n.tabard),n.sash&&(a("chest",.08,.66,.27*t,0,.27,.005,n.sash,0,0,.7),a("chest",.46*t,.07,.27*t,0,.03,0,n.sash)),n.tarpCape&&a("chest",.5,.8,.02,.1,.12,-.16*t,n.tarpCape,.08,0,.18),n.cloak){const h=n.cloak;s.cape={parent:"chest",at:l(0,.5,-.14*t),rot:[-(n.lean??0)+.05,0,0]},a("cape",.46*t,h.len*.7,.03,0,-h.len*.35,0,h.key);for(const d of[-1,1])a("cape",.2*t,h.len*.34,.03,d*.12*t,-h.len*.86,0,h.dark??h.key)}if(n.coat){const h=n.coat;for(const d of[-1,1])a("pelvis",.19*t,h.len,.05,d*.1*t,-h.len/2+.06,.13*t,h.key),a("pelvis",.05,h.len*.95,.26*t,d*.2*t,-h.len/2+.06,0,h.dark);a("pelvis",.42*t,h.len,.05,0,-h.len/2+.06,-.13*t,h.key);for(const d of[.3,.6])a("pelvis",.43*t,.03,.055,0,-h.len*d,-.13*t,h.dark)}if(n.banner){s.banner={parent:"chest",at:l(.14*t,.35,-.2*t)},a("banner",.05,1.5,.05,0,.4,0,"wood"),a("banner",.5,.66,.03,.27,.8,0,n.banner.key);for(const[h,d,g,_,m]of n.banner.sigil)a("banner",h,d,.035,g,_,0,n.banner.mark,0,0,m)}n.trophy&&(a("chest",.05,.9,.08,.06,.28,-.21*t,"steel",0,0,.55),a("chest",.015,.7,.02,.06,.28,-.26*t,"glowArc",0,0,.55));const f=(h,d)=>d.forEach(g=>a(h,...g));return n.weapon==="slug"&&f("foreR",[[.1,.36,.14,0,-.44,.04,"gunmetal"],[.065,.5,.07,0,-.84,.04,"iron"],[.08,.2,.12,0,-.22,.05,"plasteel"],[.07,.12,.13,0,-.46,-.07,"plasteel"]]),n.weapon==="handcannon"&&f("foreR",[[.07,.26,.1,0,-.45,.03,"gunmetal"],[.1,.09,.1,0,-.39,.03,"iron2"]]),n.weapon==="longrifle"&&f("foreR",[[.06,1.05,.09,0,-.7,.03,"gunmetal"],[.05,.3,.06,0,-.5,.09,"plasteel"],[.08,.22,.11,0,-.24,.05,"wood"]]),n.weapon==="wrapped"&&f("foreR",[[.09,.8,.1,0,-.62,.03,"gunmetal"],[.08,.22,.12,0,-.22,.05,"wood"],[.11,.08,.12,0,-.58,.03,"linen"],[.11,.07,.12,0,-.84,.03,"linen"],[.07,.14,.12,0,-.48,-.08,"rust"]]),n.weapon==="short"&&f("foreR",[[.07,.34,.1,0,-.48,.03,"gunmetal"]]),n.blade&&f("foreL",[[.05,.12,.08,0,-.26,.02,"steel"],[.02,.45,.06,0,-.52,.02,n.blade]]),{bones:s,parts:o}}function Tl({at:n=[.5,2.1,.1],fin:e="ghostShell",size:t=1}={}){const i={ghost:{at:n}},r=[],s=(o,a,l,u,c,f,h,d=0,g=0,_=0)=>r.push(["ghost",o*t,a*t,l*t,u*t,c*t,f*t,h,d,g,_]);return s(.13,.13,.13,0,0,0,"ghostShell",.62,.78,0),s(.05,.17,.035,.11,.03,-.02,e,0,0,-.5),s(.05,.17,.035,-.11,.03,-.02,"ghostShell",0,0,.5),s(.12,.035,.08,0,-.11,-.01,"ghostShell"),s(.05,.05,.02,0,0,.125,"glowGhost"),{bones:i,parts:r}}function S2(){const n={pike:{at:[0,.72,0]}},e=[],t=(...r)=>e.push(["pike",...r]);t(.72,.3,1.3,0,0,0,"pikeHull"),t(.5,.22,.55,0,-.04,.88,"pikeHull",.22,0,0),t(.82,.46,.6,0,.08,-.85,"iron"),t(.5,.08,1,0,-.19,-.05,"iron2");for(const r of[-1,1])t(.08,.1,.75,r*.28,-.1,.95,"gunmetal"),t(.09,.05,.03,r*.16,.03,1.16,"glowRed");t(.46,.04,.46,.08,.17,.15,"plasteel",0,0,.08),t(.42,.05,.5,0,.18,-.3,"tarp"),t(.32,.26,.32,0,.44,-.85,"wood");const i=Ys({pelvisParent:"pike",pelvisAt:[0,1.02-.72,-.3],seated:!0,bulk:1.1,lean:.25,helm:"wrap",sash:"oxblood",keys:{torso:"linen",legs:"linen"},weapon:"short",arms:{R:{fwd:-.9,elbow:.5},L:{fwd:-.9,elbow:.5,out:-.1}}});return{bones:{...n,...i.bones},parts:[...e,...i.parts]}}function y2(){const n={base:{at:[0,0,0]},head:{parent:"base",at:[0,1,0]}},e=[],t=(i,...r)=>e.push([i,...r]);t("base",.55,.9,.55,0,.45,0,"iron"),t("base",.7,.08,.7,0,.92,0,"iron2"),t("head",.56,.42,.62,0,.14,0,"iron2"),t("head",.62,.05,.66,0,.37,0,"plasteel");for(const i of[-1,1])t("head",.09,.09,.75,i*.13,.12,.65,"gunmetal");return t("head",.12,.06,.03,0,.26,.325,"glowRed"),{bones:n,parts:e}}const Al=(n,e)=>({bones:{...n.bones,...e.bones},parts:[...n.parts,...e.parts]}),xr=n=>n.userData.rest,Rl=(n,e,t,i,r)=>{n&&(n.rotation.x=xr(n).r.x+Math.sin(e*i+r)*t)},Jr=(n,e)=>({id:n,...e,palette:M2}),Uf={R:{fwd:-.5,elbow:1.07},L:{fwd:-.9,elbow:.6,out:-.25}},Cl=["ghost","banner"],b2=[{id:"levy",name:"Levy",faction:"warlord",rank:"minor",tier:"skirmisher",body:"human",health:{max:110},crit:{bones:["head"]},noHit:["cape"],spec:Jr("levy",Ys({scale:.97,bulk:1.12,lean:.08,helm:"wrap",sash:"oxblood",tarpCape:"tarp",keys:{torso:"linen",legs:"linen",shins:"leather"},pauldrons:{L:{size:[.26,.1,.3],key:"rust"}},weapon:"wrapped",arms:Uf})),idle:(n,e,t)=>{e.pelvis.position.y=xr(e.pelvis).p.y+Math.sin(n*1.8+t.phase)*.012,e.chest.rotation.z=xr(e.chest).r.z+Math.sin(n*.9+t.phase)*.03}},{id:"outrider",name:"Pike Outrider",faction:"warlord",rank:"minor",tier:"skirmisher",body:"pike",health:{max:260},crit:{bones:["head"]},spec:Jr("outrider",S2()),idle:(n,e,t)=>{const i=Math.max(0,Math.sin(n*.7+t.phase)-.92)*.9;e.pike.position.y=xr(e.pike).p.y+Math.sin(n*3.1+t.phase)*.03-i,e.pike.rotation.x=xr(e.pike).r.x+i*.3}},{id:"champion",name:"Lesser Warlord",faction:"warlord",rank:"elite",tier:"heavy",body:"human",health:{max:520},crit:{bones:["head"]},noHit:["cape","banner","ghost"],measureAside:Cl,ghost:{speed:1,hover:[0,1.45,.32]},spec:Jr("champion",Al(Ys({scale:1.05,helm:"hood",keys:{torso:"leather",legs:"iron",shins:"iron2",hood:"slate",visor:"glowSolar"},cloak:{len:1.15,key:"slate",dark:"slateDark"},gauntlets:!0,pauldrons:{R:{size:[.2,.1,.24],key:"slate"},L:{size:[.16,.08,.2],key:"plasteel"}},weapon:"handcannon",blade:"glowSolar",glowHands:["L"],glowKey:"glowSolar",arms:{R:{fwd:-.9,elbow:.75},L:{fwd:-.35,elbow:.9,out:.05}}}),Tl({at:[.5,2.05,.05],fin:"slate",size:.85}))),idle:(n,e,t)=>{Rl(e.cape,n,.05,1.2,t.phase)}},{id:"warlord",name:"Warlord",faction:"warlord",rank:"boss",tier:"heavy",body:"human",health:{max:1400},crit:{bones:["head"]},noHit:["cape","banner","ghost"],measureAside:Cl,ghost:{speed:.7,hover:[0,1.6,.38]},spec:Jr("warlord",Al(Ys({scale:1.15,bulk:1.25,helm:"great",crown:5,plate:!0,plate2:!0,greaves:!0,gauntlets:!0,keys:{torso:"gambeson",legs:"leather",shins:"iron",plate:"oxblood",plate2:"iron",arms:"iron2",forearms:"iron",visor:"glowArc"},pauldrons:{L:{size:[.3,.19,.36],key:"oxblood"},R:{size:[.17,.09,.22],key:"plasteel"}},mantle:"leather",tabard:"oxblood",trophy:!0,banner:{key:"oxblood",mark:"plasteel",sigil:[[.16,.16,.27,.86,Math.PI/4],[.36,.05,.27,.6,0]]},weapon:"slug",glowHands:["L"],glowKey:"glowArc",arms:{R:{fwd:-.5,elbow:1.07},L:{fwd:-.15,elbow:.45,out:.12}}}),Tl({at:[.62,2.3,.1],fin:"oxblood"}))),idle:(n,e,t)=>{e.head.rotation.y=xr(e.head).r.y+Math.sin(n*.4+t.phase)*.25,Rl(e.banner,n,.04,1.1,t.phase)}},{id:"rival",name:"Rival Warlord",faction:"warlord",rank:"boss",tier:"heavy",body:"human",health:{max:1200},crit:{bones:["head"]},noHit:["cape","banner","ghost"],measureAside:Cl,ghost:{speed:-.75,hover:[0,1.55,.36]},spec:Jr("rival",Al(Ys({scale:1.1,helm:"stepped",crown:3,keys:{torso:"teal",legs:"leather",arms:"teal",forearms:"iron2",helm:"iron",crown:"iron2",visor:"glowVoid"},coat:{len:.95,key:"teal",dark:"tealDark"},gauntlets:!0,pauldrons:{L:{size:[.18,.1,.24],key:"iron2"}},banner:{key:"teal",mark:"gambeson",sigil:[[.08,.4,.2,.8,0],[.08,.4,.34,.8,0]]},weapon:"longrifle",glowHands:["L","R"],glowKey:"glowVoid",arms:Uf}),Tl({at:[-.6,2.2,.1],fin:"teal"}))),idle:(n,e,t)=>{Rl(e.banner,n,.04,1,t.phase+1)}},{id:"turret",name:"Gate Turret",faction:"warlord",rank:"minor",tier:null,body:"turret",health:{max:240},crit:{keys:["glowRed"]},faces:!1,spec:Jr("turret",y2()),idle:(n,e,t)=>{e.head.rotation.y=xr(e.head).r.y+Math.sin(n*.6+t.phase)*.7}}],E2=Object.freeze({fodder:{sight:28,band:[1.6,4],speed:3.4,sprint:1.35,reaction:[.3,.55],cooldown:1.1,attack:5,strafe:.15,lose:4,turn:4},skirmisher:{sight:38,band:[7,14],speed:2.6,sprint:1.2,reaction:[.22,.45],cooldown:1.6,attack:20,strafe:.75,lose:6,turn:3},heavy:{sight:45,band:[10,20],speed:1.7,sprint:1.1,reaction:[.4,.7],cooldown:2.4,attack:26,strafe:.25,lose:9,turn:1.6}}),Zo=.55,Zn=3,Ll=1.5,Nf=.8,Pl=.6,w2=.5,Ff=.6,Of=.35,Il=1,T2=.45,A2=.12,R2=.9,C2=.07,Dl=Math.PI*2;let L2=0;const wi=n=>{const e=Math.max(0,Math.min(1,n));return e*e*(3-2*e)},Ri=(n,e,t)=>n+(e-n)*t,qi=n=>n.userData.rest,P2={biped(n,e){n.pelvis.position.y=qi(n.pelvis).p.y*(1-.5*e);for(const t of["L","R"])n["thigh"+t].rotation.x-=.95*e,n["shin"+t].rotation.x+=1.35*e,n["foot"+t].rotation.x-=.4*e,n["arm"+t].rotation.x+=.35*e,n["arm"+t].rotation.z+=(t==="L"?-.25:.25)*e,n["arm2"+t]&&(n["arm2"+t].rotation.x+=.3*e);n.chest.rotation.x+=.85*e,n.head.rotation.x+=.45*e,n.cape&&(n.cape.rotation.x-=.35*e),n.banner&&(n.banner.rotation.x-=.25*e)},human(n,e){n.pelvis.position.y=qi(n.pelvis).p.y*(1-.47*e);for(const t of["L","R"])n["thigh"+t].rotation.x-=1.35*e,n["shin"+t].rotation.x+=1.9*e,n["arm"+t].rotation.x=Ri(qi(n["arm"+t]).r.x,-.25,e),n["fore"+t].rotation.x=Ri(qi(n["fore"+t]).r.x,-.15,e);n.chest.rotation.x+=.55*e,n.head.rotation.x+=.35*e,n.cape&&(n.cape.rotation.x-=.3*e),n.banner&&(n.banner.rotation.x-=.2*e)},servitor(n,e){n.core.position.y=Ri(qi(n.core).p.y,.62,e),n.core.rotation.z+=.5*e,n.core.rotation.x+=.35*e},shank(n,e){n.hull.position.y=Ri(qi(n.hull).p.y,.5,e),n.hull.rotation.z+=.7*e,n.hull.rotation.x+=.3*e},pike(n,e){n.pike.position.y=Ri(qi(n.pike).p.y,.2,e),n.pike.rotation.z+=.2*e,n.pike.rotation.x+=.08*e,n.chest.rotation.x+=.65*e,n.head.rotation.x+=.35*e},turret(n,e){n.head.rotation.x+=.5*e,n.head.position.y-=.1*e}},Ul={biped(n,e){n.chest.rotation.x-=.22*e,n.head.rotation.x-=.18*e},human(n,e){n.chest.rotation.x-=.2*e,n.head.rotation.x-=.15*e},servitor(n,e){n.core.rotation.y+=.7*e},shank(n,e){n.hull.rotation.z+=.35*e,n.hull.position.y+=.05*e},pike(n,e){n.pike.rotation.z+=.12*e,n.chest.rotation.x-=.2*e},turret(n,e){n.head.rotation.y+=.25*e}},hd=n=>{var e;return Cc({max:n.health.max,shield:((e=n.shield)==null?void 0:e.amount)??0})},I2=new Sc(1,3),D2=new cn(.5,1,.5).translate(0,.5,0),U2=3.4;function kf(n,e,t,i){const r=new hn({color:n.colour,transparent:!0,opacity:n.opacity,depthWrite:!1,blending:eo}),s=new Sn;return s.add(new xt(I2,r)),s.position.copy(i),s.scale.copy(t),e.add(s),{group:s,fillMat:r,base:n.opacity,scale:t.clone()}}function N2(n,e){var l,u;const t=new Fi({vertexColors:!0,roughness:.85,metalness:0,emissive:16777215,emissiveIntensity:0}),i=new hn({vertexColors:!0}),r=mo(n.spec,{solidMaterial:t,glowMaterial:i});r.root.position.set(e.x??0,0,e.z??0),r.root.rotation.y=e.yaw??0,(l=e.scene)==null||l.add(r.root);const s=r.bounds(n.measureAside??[]);let o=null;if(n.shield){const c=n.shield.pad/r.scale,f=s.getSize(new D).multiplyScalar(.5*c);o=kf(n.shield,r.root,f,s.getCenter(new D).divideScalar(r.scale))}const a={unit:n,id:n.id,name:n.name,rank:n.rank,faction:n.faction,rig:r,root:r.root,bones:r.bones,meshes:r.meshes,phase:(e.index??0)*1.7,health:hd(n),diedAt:null,revivedAt:null,respawnAt:null,lastHitAt:-1/0,flashUntil:-1/0,shieldHitAt:-1/0,shieldBrokeAt:-1/0,flinch:0,etherClock:0,height:s.max.y-s.min.y,top:s.max.y,bottom:s.min.y,footprint:Math.min(.8,Math.max(.3,-s.min.x,s.max.x,-s.min.z)),turn:n.turn??((u=E2[n.tier])==null?void 0:u.turn)??2,shell:o,aura:n.aura?kf(n.aura,r.bones[n.aura.bone],new D().setScalar(n.aura.r),new D(...n.aura.at)):null,column:null,scene:e.scene??null};return n.ghost&&(a.column=new xt(D2,new hn({color:15136511,transparent:!0,opacity:0,blending:eo,depthWrite:!1})),a.column.visible=!1,a.column.position.set(n.ghost.hover[0],0,n.ghost.hover[2]*.5),r.root.add(a.column)),r.root.updateMatrixWorld(!0),a}function Uc(n,e=.5,t=new D){return t.set(n.root.position.x,n.root.position.y+n.bottom+n.height*e,n.root.position.z)}function F2(n,e){var s,o,a,l,u;const t=n.rig.partAt(e.object,e.faceIndex);if(!t)return null;const i=n.unit;if((s=i.noHit)!=null&&s.includes(t[0]))return null;const r=!!((a=(o=i.crit)==null?void 0:o.bones)!=null&&a.includes(t[0])||(u=(l=i.crit)==null?void 0:l.keys)!=null&&u.includes(t[7]));return{part:t,crit:r&&n.health.shield<=0}}function O2(n,{amount:e,source:t,at:i,crit:r=!1}){if(n.health.dead)return{events:[],killed:!1};const{state:s,events:o}=ed(n.health,{amount:e,source:t});n.health=s,n.lastHitAt=i;let a=!1;for(const l of o)l.type==="absorbed"&&(n.shieldHitAt=i),l.type==="shieldBroken"&&(n.shieldBrokeAt=i),l.type==="damaged"&&(n.flashUntil=i+A2,n.flinch=Math.min(1,n.flinch+(r?.9:.55))),l.type==="died"&&(a=!0,n.diedAt=i,n.respawnAt=i+Zn,n.revivedAt=null,n.etherClock=0,n.rig.setGlowLit(!1,u=>u[0]==="ghost"));return{events:o,killed:a}}function Bf(n,e){n.health=hd(n.unit),n.diedAt=null,n.respawnAt=null,n.revivedAt=e,n.flinch=0,n.lastHitAt=-1/0,n.rig.setGlowLit(!0)}const Jo=new D,k2=new D;function B2(n,e,t,i,r){const s=qi(n).p,o=Math.hypot(s.x,s.z),a=Math.atan2(s.z,s.x)+e*i+t;return r.set(Math.cos(a)*o,s.y+Math.sin(e*2.2+t)*.05,Math.sin(a)*o),Math.PI/2-a}function z2(n,e,t,i={}){var d,g;const{unit:r,rig:s,bones:o,root:a}=n;s.reset();let l=n.health.dead,u=l?t-n.diedAt:0,c=0,f=0,h=!0;if(l&&r.ghost?u<Zo?c=wi(u/Zo):u<Zn?c=1:u<Zn+Il?c=1-wi((u-Zn)/Il):Bf(n,n.diedAt+Zn+Il):l&&(u<Zo?c=wi(u/Zo):u<Ll?c=1:u<Ll+Nf?(c=1,f=wi((u-Ll)/Nf)):u<Zn?(c=1,f=1,h=!1):u<Zn+Pl?f=1-wi((u-Zn)/Pl):Bf(n,n.diedAt+Zn+Pl)),l=n.health.dead,(!l||!r.ghost&&u>=Zn)&&((d=r.idle)==null||d.call(r,t,o,n)),n.flinch*=Math.exp(-9*e),!l&&n.flinch>.001&&((g=Ul[r.body])==null||g.call(Ul,o,n.flinch)),c>0&&P2[r.body](o,c),r.ghost&&o.ghost){const _=o.ghost,m=B2(_,t,n.phase,r.ghost.speed,Jo);let p=0;l?p=wi((u-w2)/Ff):n.revivedAt!==null&&(p=1-wi((t-n.revivedAt)/Ff));const[x,M,E]=r.ghost.hover;_.position.set(Ri(Jo.x,x,p),Ri(Jo.y,M+Math.sin(t*2.4+n.phase)*.04,p),Ri(Jo.z,E,p)),_.rotation.y=Ri(m,0,p),_.rotation.x=.55*p}if(n.column){const _=Zn-Of;let m=0;l&&u>=_?m=wi((u-_)/Of):!l&&n.revivedAt!==null&&(m=1-wi((t-n.revivedAt)/T2)),n.column.visible=m>.001,n.column.material.opacity=.5*m,n.column.scale.set(1.3-.3*m,U2*Math.max(m,.001),1.3-.3*m)}if(r.shield&&!l){const _=n.health;t-n.lastHitAt>=r.shield.regenDelay&&_.shield<_.shieldMax&&(n.health=z0(_,{shield:_.shieldMax/r.shield.regenSeconds*e,source:"regen"}).state)}if(n.shell){const _=n.shell,m=t-n.shieldBrokeAt;if(!l&&n.health.shield>0){const p=t-n.shieldHitAt<.1?2.2:1,x=.35+.65*Lc(n.health);_.group.visible=!0,_.group.scale.copy(_.scale),_.fillMat.opacity=_.base*x*p}else if(m>=0&&m<.3){const p=m/.3;_.group.visible=!0,_.group.scale.copy(_.scale).multiplyScalar(1+.35*p),_.fillMat.opacity=_.base*2.5*(1-p)}else _.group.visible=!1}if(n.aura&&(n.aura.group.visible=!l,n.aura.fillMat.opacity=n.aura.base*(.8+.2*Math.sin(t*2+n.phase))),!l&&i.face&&r.faces!==!1){const m=((Math.atan2(i.face.x-a.position.x,i.face.z-a.position.z)-a.rotation.y+Math.PI)%Dl+Dl)%Dl-Math.PI,p=n.turn*e;a.rotation.y+=Math.max(-p,Math.min(p,m))}if(a.position.y=-f*(n.top+.15),a.visible=h,s.solid.material.emissiveIntensity=t<n.flashUntil?L2:0,a.updateMatrixWorld(!0),l&&r.ether&&u<R2&&o.head)for(n.etherClock-=e;n.etherClock<=0;)G2(n.scene,o.head.getWorldPosition(k2)),n.etherClock+=C2}const dd=48,aa=1.1;let Yi=null;function H2(n){if((Yi==null?void 0:Yi.scene)===n)return Yi;const e=new cn(1,1,1),t=new hn({color:15791864,transparent:!0,opacity:.5,depthWrite:!1}),i=Array.from({length:dd},()=>{const r=new xt(e,t);return r.visible=!1,n.add(r),{mesh:r,age:aa,vel:new D,spin:0}});return Yi={scene:n,items:i,next:0},Yi}function G2(n,e){if(!n)return;const t=H2(n),i=t.items[t.next];t.next=(t.next+1)%dd,i.age=0,i.mesh.position.copy(e),i.vel.set((Math.random()-.5)*.5,.7+Math.random()*.4,(Math.random()-.5)*.5),i.spin=(Math.random()-.5)*3,i.mesh.visible=!0}function V2(n){if(Yi)for(const e of Yi.items){if(e.age>=aa)continue;if(e.age+=n,e.age>=aa){e.mesh.visible=!1;continue}const t=e.age/aa;e.mesh.position.addScaledVector(e.vel,n),e.vel.multiplyScalar(Math.exp(-1.2*n)),e.mesh.rotation.y+=e.spin*n,e.mesh.scale.setScalar((.07+.2*t)*(t<.7?1:1-(t-.7)/.3))}}const W2=Object.freeze(["now","enter","interact","flag","scan","land","talk"]),X2=Object.freeze(["now","flag"]),q2=Object.freeze(["now"]);function Y2({host:n=null,say:e=null,onBeat:t=null,onCheckpoint:i=null,knows:r=null,triggers:s=W2,levelKinds:o=X2,subjectless:a=q2}={}){if(!n)throw new Error("makeEpisode: no host API");const l=[...s],u=new Set(a);let c=null,f=-1,h=!1,d=[],g=new Set;const _=S=>{var A;return r?!!r(S):!!((A=n.knows)!=null&&A.call(n,S))},m=new Map;if(Array.isArray(o))for(const S of o)m.set(S,u.has(S)?()=>!0:A=>_(A));else for(const[S,A]of Object.entries(o??{}))m.set(S,A);function p(S){var I;const A=[],R=new Set,v=[],b=[];for(const O of S.acts??[]){O.id||v.push("an act has no id");for(const U of O.scenes??[]){U.id||v.push(`act ${O.id}: a scene has no id`),b.push({act:O.id,id:U.id,title:U.title??U.id});let N=!0;for(const q of U.beats??[]){if(!q.id){v.push(`${O.id}/${U.id}: a beat has no id`);continue}R.has(q.id)&&v.push(`beat id '${q.id}' is used twice`),R.add(q.id),l.includes(q.trigger)||v.push(`beat '${q.id}': trigger '${q.trigger}' is not one of ${l.join(" | ")}`),!u.has(q.trigger)&&!q.at&&v.push(`beat '${q.id}': a '${q.trigger}' trigger needs an 'at' to name its subject`),N&&q.optional&&v.push(`beat '${q.id}' opens scene '${U.id}' and is marked optional — a scene's first beat is where its checkpoint is taken, so it must be arrived at`),q.talk&&((I=n.talk)!=null&&I.has)&&!n.talk.has(q.talk)&&v.push(`beat '${q.id}': conversation '${q.talk}' is not loaded`),A.push({...q,act:O.id,scene:U.id,sceneTitle:U.title??U.id,actTitle:O.title??O.id,opensScene:N}),N=!1}}}A.length||v.push("an episode with no beats");const P=new Set(S.teaches??[]);for(const O of A)for(const U of O.grants??[])P.add(U);for(const O of A)for(const U of O.needs??[])P.has(U)||v.push(`beat '${O.id}' needs '${U}', which nothing in this episode grants — list it in the episode's \`teaches\` if a conversation or a reading provides it`);if(v.length)throw new Error(`episode.load('${S.id}'): ${v.length} problem(s) — ${v.join("; ")}`);return{beats:A,scenes:b}}function x(){const S=y.beat;!S||!S.opensScene||g.has(S.scene)||(g.add(S.scene),i==null||i(S))}function M(S){var A,R,v;d.push(S.id),S.say&&(e==null||e(S.say));for(const b of S.grants??[])(A=n.learn)==null||A.call(n,b);S.talk&&((v=(R=n.talk)==null?void 0:R.open)==null||v.call(R,S.talk)),t==null||t(S)}function E(){if(!(h||!c)){h=!0;try{let S=0;x();const A=R=>{const v=m.get(R.trigger);return!!v&&!!v(R.at)};for(;f>=0&&f<c.beats.length&&A(c.beats[f]);){const R=c.beats[f];if((R.needs??[]).some(v=>!_(v))||(M(R),f+=1,x(),++S>c.beats.length+1))break}}finally{h=!1}}}function C(S,A){if(!c)return-1;for(let R=f;R>=0&&R<c.beats.length;R++){const v=c.beats[R];if(v.trigger===S&&v.at===A)return R;if(!v.optional)return-1}return-1}const y={get id(){return(c==null?void 0:c.id)??null},get title(){return(c==null?void 0:c.title)??null},get begun(){return f>=0},get over(){return!!c&&f>=c.beats.length},get beat(){return c&&f>=0&&f<c.beats.length?c.beats[f]:null},get act(){var S;return((S=y.beat)==null?void 0:S.actTitle)??null},get scene(){var S;return((S=y.beat)==null?void 0:S.sceneTitle)??null},get objective(){const S=y.beat;if(!S)return null;if(S.objective)return S.objective;if(!S.optional)return null;for(let A=f+1;A<c.beats.length;A++)if(!c.beats[A].optional)return c.beats[A].objective??null;return null},get note(){var S;return((S=y.beat)==null?void 0:S.note)??null},get done(){return[...d]},get beats(){return c?c.beats.map(S=>S.id):[]},load(S){if(!(S!=null&&S.id)||!S.acts)throw new Error("episode.load: needs { id, acts }");const{beats:A,scenes:R}=p(S);return c={id:S.id,title:S.title??S.id,acts:S.acts,beats:A,scenes:R},f=-1,d=[],g=new Set,y},begin(){return!c||f>=0?!1:(f=0,E(),!0)},fire(S,A){const R=C(S,A);if(R<0)return null;const v=c.beats[R],b=(v.needs??[]).filter(P=>!_(P));if(b.length){const P=v.refuse;return(typeof P=="function"?P(b):P)??"Not yet. There is a piece of this missing."}return f=R,x(),M(v),f+=1,E(),null},wants(S,A){return C(S,A)>=0},save(){var S;return{id:(c==null?void 0:c.id)??null,at:((S=y.beat)==null?void 0:S.id)??null,done:[...d]}},restore(S){if(!c||!S||S.id&&S.id!==c.id)return y;const A=c.beats.findIndex(R=>R.id===S.at);return A<0||(f=A,d=[...S.done??[]],g=new Set(c.beats.slice(0,A+1).map(R=>R.scene))),y}};return y}const zf=90,pr=1e-4;class $2{constructor(e,t){this.ctx=e,this.rng=t,this.cache=new Map}get(e="white"){if(this.cache.has(e))return this.cache.get(e);const t=Math.floor(this.ctx.sampleRate*2),i=this.ctx.createBuffer(1,t,this.ctx.sampleRate),r=i.getChannelData(0),s=this.rng;if(e==="brown"){let o=0;for(let a=0;a<t;a++){const l=s.float()*2-1;o=(o+.02*l)/1.02,r[a]=o*3.5}}else if(e==="pink"){let o=0,a=0,l=0,u=0,c=0,f=0,h=0;for(let d=0;d<t;d++){const g=s.float()*2-1;o=.99886*o+g*.0555179,a=.99332*a+g*.0750759,l=.969*l+g*.153852,u=.8665*u+g*.3104856,c=.55*c+g*.5329522,f=-.7616*f-g*.016898,r[d]=(o+a+l+u+c+f+h+g*.5362)*.11,h=g*.115926}}else for(let o=0;o<t;o++)r[o]=s.float()*2-1;return this.cache.set(e,i),i}}function K2(n,e,t,i,r,s){const o=!!s.loop,a=r+(t.at||0),l=o?1/0:Math.max(.02,t.dur??.2),u=(t.peak??1)*(s.gain??1);if(u<=0)return null;const c=Math.max(.001,t.a??.005),f=Math.max(0,t.d??0),h=t.s??1,d=Math.max(.005,t.r??.05),g=n.createGain();g.gain.value=pr,g.connect(i);let _,m=null;const p=s.rate??1;if(t.src==="noise")_=n.createBufferSource(),_.buffer=e.get(t.noise||"white"),_.loop=!0,_.loopStart=0,_.playbackRate.value=p;else{_=n.createOscillator(),_.type=t.wave||"sine";const R=t.jitter||0,v=R?1+(s.jitterRoll??0)*R:1,b=Math.max(8,(t.freq??440)*v*p);if(m=_.frequency,m.setValueAtTime(b,a),t.to!=null&&!o){const P=Math.max(8,t.to*v*p),I=a+l;t.glide==="lin"?m.linearRampToValueAtTime(P,I):m.exponentialRampToValueAtTime(P,I)}}let x=_,M=null;if(t.filter){const R=n.createBiquadFilter();R.type=t.filter.type||"lowpass",R.Q.value=t.filter.q??1;const v=Math.max(20,t.filter.freq??1e3);R.frequency.setValueAtTime(v,a),t.filter.to!=null&&!o&&R.frequency.exponentialRampToValueAtTime(Math.max(20,t.filter.to),a+l),M=R.frequency,x.connect(R),x=R}let E=null,C=null;if(t.lfo&&t.lfo.rate>0){E=n.createOscillator(),E.type="sine",E.frequency.value=t.lfo.rate;const R=n.createGain();if(t.lfo.target==="gain"){const v=Math.min(1,Math.max(0,t.lfo.depth??.5));C=n.createGain(),C.gain.value=1-v*.5,R.gain.value=v*.5,E.connect(R),R.connect(C.gain),x.connect(C),x=C}else t.lfo.target==="filter"&&M?(R.gain.value=t.lfo.depth??200,E.connect(R),R.connect(M)):m&&(R.gain.value=t.lfo.depth??20,E.connect(R),R.connect(m));E.start(a)}x.connect(g);const y=g.gain;y.setValueAtTime(pr,a),y.linearRampToValueAtTime(u,a+c);const S=Math.max(pr,u*h);f>0&&y.linearRampToValueAtTime(S,a+c+f);let A=1/0;if(o)_.start(a,t.src==="noise"?s.noiseOffset??0:void 0);else{const R=Math.max(a+c+f,a+l-d);y.setValueAtTime(Math.max(pr,f>0?S:u),R),y.linearRampToValueAtTime(pr,a+l),A=a+l+.02,_.start(a,t.src==="noise"?s.noiseOffset??0:void 0),_.stop(A),E&&E.stop(A)}return{endsAt:A,stop(R){const v=Math.max(R,n.currentTime);try{y.cancelScheduledValues(v),y.setValueAtTime(Math.max(pr,y.value),v),y.linearRampToValueAtTime(pr,v+d),_.stop(v+d+.02),E&&E.stop(v+d+.02)}catch{}}}}function Hf(n,e,t,i,r={}){const s=Math.max(r.when??n.currentTime,n.currentTime),o=!!t.loop,a=[];let l=s;for(const u of t.layers||[]){const c=K2(n,e,u,i,s,{...r,loop:o});c&&(a.push(c),c.endsAt>l&&c.endsAt!==1/0&&(l=c.endsAt))}return{endsAt:o?1/0:l,stop(u=n.currentTime){for(const c of a)c.stop(u)}}}const ga=1e-4,Gf=(n,e)=>n==null||e==null?1:2**((n-e)/12);function Nc(n){var r;const e=60/n.bpm,t=(((r=n.intro)==null?void 0:r.bars)??0)*n.beatsPerBar,i=n.loop.bars*n.beatsPerBar;return{beat:e,intro:t,loop:i,introSeconds:t*e,loopSeconds:i*e}}function j2(n,e){return{...n,loop:!1,layers:n.layers.map(t=>({...t,dur:Math.max(.02,e)+(t.r??.05)}))}}function Z2(n,e){if(!e)return n;const t=new Map;for(const i of n){if(e[i.voice]==null||i.midi==null)continue;const r=`${i.voice}@${i.beat}`;t.has(r)||t.set(r,[]),t.get(r).push(i)}for(const i of t.values()){i.sort((s,o)=>s.midi-o.midi);const r=e[i[0].voice];for(let s=0;s<i.length;s++)i[s].pan=i.length<2?0:Number((-r+2*r*s/(i.length-1)).toFixed(3))}return n}function J2(n,e,t){var a;const i=Nc(n),r=n.beatsPerBar,s=[],o=(l,[u,c,f,h,d,g],_)=>s.push({beat:l+u*r+c,voice:f,midi:h,beats:d,gain:g,pass:t,..._});if(t<0)for(const l of((a=n.intro)==null?void 0:a.events)??[])o(0,l);else{const l=i.intro+t*i.loop;for(const c of n.loop.events)o(l,c);const u=new Cs(`${e}:pass${t}`);for(const c of n.loop.vary??[])if(c.scatter){const[f,h]=c.scatter,d=[];for(let _=f*r;_<h*r-1e-9;_+=c.step)d.push(_);const g=u.int(c.count[0],c.count[1]);for(const _ of u.pickMany(d,g)){const m=u.pick(c.pick),p=u.range(c.gain[0],c.gain[1]);s.push({beat:l+_,voice:c.voice,midi:m,beats:c.beats,gain:p,pass:t,vary:!0})}}else u.chance(c.p)&&o(l,[c.at[0],c.at[1],c.voice,c.midi,c.beats,c.gain],{vary:!0})}return Z2(s,n.spread).sort((l,u)=>l.beat-u.beat)}function Q2({score:n,seed:e,now:t,play:i,ahead:r=2.4,late:s=.25}){const o=Nc(n);let a=null,l=0,u=!1,c=0,f=0;const h=new Map,d=_=>_<o.intro?-1:Math.floor((_-o.intro)/o.loop),g=_=>(h.has(_)||h.set(_,J2(n,e,_)),h.get(_));return{start(_){if(a!==null)return!1;a=_,l=_;for(const m of n.beds??[])i({...m,bed:!0,beat:0,pass:-1},_);return!0},pump(){var E;if(a===null||u)return 0;const _=t(),m=_+r;if(m<=l)return 0;const p=d((l-a)/o.beat),x=d((m-a)/o.beat);let M=0;for(let C=p;C<=x;C++)if(!(C<0&&!(((E=n.intro)==null?void 0:E.bars)>0)))for(const y of g(C)){const S=a+y.beat*o.beat;if(!(S<l||S>=m)){if(S<_-s){f++;continue}i(y,S),c++,M++}}for(const C of h.keys())C<p&&h.delete(C);return l=m,M},stop(){u=!0},state(){return{started:a!==null,t0:a,horizon:l,played:c,skipped:f,stopped:u,memo:h.size}}}}function eS(n,{seconds:e=2.6,rt60:t=2.4,preDelay:i=.02,seed:r="room"}={}){const s=n.sampleRate,o=Math.max(1,Math.round(e*s)),a=n.createBuffer(2,o,s),l=Math.round(i*s),u=Math.round(.005*s),c=Math.round(.05*s);for(let f=0;f<2;f++){const h=new Cs(`${r}:ir${f}`),d=a.getChannelData(f);let g=0;for(let _=l;_<o;_++){const m=(_-l)/s,p=9e3*(1500/9e3)**(m/e);g+=(1-Math.exp(-2*Math.PI*p/s))*(h.float()*2-1-g);const x=Math.min(1,(_-l)/u,(o-1-_)/c);d[_]=g*10**(-3*m/t)*x}}return a}function tS(n,{seconds:e=12,seed:t="bed"}={}){const i=Math.max(1,Math.round(e*n.sampleRate)),r=n.createBuffer(1,i,n.sampleRate),s=r.getChannelData(0),o=new Cs(t);for(let a=0;a<i;a++)s[a]=o.float()*2-1;return r}function nS(n,e,t,i){n.cancelScheduledValues(t),n.setValueAtTime(Math.max(ga,n.value),t),n.linearRampToValueAtTime(Math.max(ga,e),t+Math.max(.005,i))}function iS({ctx:n,score:e,voices:t,seed:i=e.seed??"music",mix:r={},ahead:s,late:o}){const a=Nc(e),l=new $2(n,new Cs(`${i}:noise`)),u=n.createDynamicsCompressor();u.threshold.value=-6,u.knee.value=0,u.ratio.value=20,u.attack.value=.003,u.release.value=.25;const c=n.createGain();c.gain.value=10**(-3.42/20),u.connect(c),c.connect(n.destination);const f=n.createGain();f.gain.value=r.level??1,f.connect(u);const h=n.createGain();h.gain.value=ga,h.connect(f);const d=r.reverb??{};if(d.send>0){const y=n.createGain();y.gain.value=d.send,y.channelCount=1,y.channelCountMode="explicit";const S=n.createConvolver();S.buffer=eS(n,{seconds:d.seconds,rt60:d.rt60,preDelay:d.preDelay,seed:`${i}:room`});const A=n.createGain();A.gain.value=d.wet??1,h.connect(y),y.connect(S),S.connect(A),A.connect(f)}const g=n.createGain();g.gain.value=1,g.connect(u);const _=new Map,m=y=>{const S=Math.max(-1,Math.min(1,y||0));if(!S)return h;const A=S.toFixed(3);if(!_.has(A)){let R=h;try{const v=n.createStereoPanner();v.pan.value=S;const b=n.createGain();b.gain.value=Math.SQRT2,v.connect(b),b.connect(h),R=v}catch{R=h}_.set(A,R)}return _.get(A)},p=new Map,x=y=>{if(!y.bed||!y.noiseSeconds)return l;const S=`${y.voice}:${y.noiseSeconds}:${y.rate??1}`;if(!p.has(S)){const A=tS(n,{seconds:y.noiseSeconds,seed:`${i}:bed:${S}`});p.set(S,{get:(R="white")=>R==="white"?A:l.get(R)})}return p.get(S)},M=[],C=Q2({score:e,seed:i,now:()=>n.currentTime,play:(y,S)=>{const A=t[y.voice];if(!A)return;const R=y.bed?y.rate??1:Gf(y.midi,A.ref),v=!y.bed&&A.held?j2(A,y.beats*a.beat):A,b=Hf(n,x(y),v,m(y.pan??A.pan??0),{when:S,rate:R,gain:y.gain??1,noiseOffset:y.offset??0});y.bed&&M.push(b)},ahead:s,late:o});return{ctx:n,start(y=n.currentTime,S=r.fadeIn??4){return C.start(y)?(h.gain.cancelScheduledValues(y),h.gain.setValueAtTime(ga,y),h.gain.linearRampToValueAtTime(1,y+Math.max(.005,S)),C.pump(),!0):!1},pump:()=>C.pump(),fade(y,S){nS(h.gain,y,n.currentTime,S)},halt(y=n.currentTime){C.stop();for(const S of M.splice(0))S.stop(y)},sting(y,{gain:S=1,midi:A=null}={}){return Hf(n,l,y,g,{when:n.currentTime,rate:Gf(A,y.ref),gain:S})},get level(){return h.gain.value},state:()=>C.state()}}function rS({AudioContext:n=null,storage:e=null,key:t=null,doc:i=null,score:r,voices:s,sting:o=null,mix:a={},lead:l=.1}={}){if(e&&typeof t!="string")throw new TypeError("makeMusicDeck: a storage needs its own prefixed key");const u=typeof n=="function";let c=null,f=null,h=C(),d=!1,g=!1,_=!1,m=!1,p=!1,x=!1,M=null;const E=[];function C(){var U;try{return((U=e==null?void 0:e.getItem)==null?void 0:U.call(e,t))!=="off"}catch{return!0}}function y(U){var N;try{(N=e==null?void 0:e.setItem)==null||N.call(e,t,U?"on":"off")}catch{}}function S(){if(c||!u||g)return c;try{c=new n,f=iS({ctx:c,score:r,voices:s,mix:a})}catch{c=null,f=null}return c&&!x&&(i!=null&&i.addEventListener)&&(x=!0,i.addEventListener("visibilitychange",I)),c}const A=()=>(c==null?void 0:c.state)==="running";function R(U,N){try{const q=c.createConstantSource(),G=c.createGain();G.gain.value=0,q.connect(G),G.connect(c.destination),q.onended=()=>{try{q.disconnect(),G.disconnect()}catch{}N()},q.start(),q.stop(c.currentTime+U)}catch{N()}}function v(U){var N,q;E.push(U);try{const G=(N=c==null?void 0:c.suspend)==null?void 0:N.call(c);(q=G==null?void 0:G.catch)==null||q.call(G,()=>{})}catch{}}function b(U){var N,q,G;E.push(U),M=(f==null?void 0:f.state())??M;try{(N=i==null?void 0:i.removeEventListener)==null||N.call(i,"visibilitychange",I)}catch{}try{const oe=(q=c==null?void 0:c.close)==null?void 0:q.call(c);(G=oe==null?void 0:oe.catch)==null||G.call(oe,()=>{})}catch{}c=null,f=null}function P(){var U;try{return Promise.resolve((U=c==null?void 0:c.resume)==null?void 0:U.call(c)).then(()=>A(),()=>!1)}catch{return Promise.resolve(!1)}}function I(){if(!(!c||g)){if(i.hidden)A()&&(m=!0,v("hidden"));else if(m){if(m=!1,!h)return;P().then(U=>{U&&p&&!g&&O.play()})}}}const O={get available(){return u},probe(){return!u||!h?"none":(S(),c?c.state:"none")},unlock(){return!u||g||!S()?Promise.resolve(!1):P()},play(){return!f||!h||d||g||!A()?!1:i!=null&&i.hidden?(m=!0,p=!0,v("hidden"),!1):(p=!1,d=f.start(c.currentTime+l,a.fadeIn),d)},pump(){d&&!m&&!g&&f.pump()},toggle(){if(h=!h,y(h),h){if(!S())return h;P().then(U=>{!U||!h||g||(d?f.fade(1,a.mute??.3):O.play())})}else A()&&(f.fade(0,a.mute??.3),R((a.mute??.3)+.05,()=>{h||v("muted")}));return h},silence(){h=!1},carry(U=!0){_=!!U},end(){return!c||g?!1:(A()&&h&&o&&f.sting(o),_&&d?!0:O.stop(a.fadeOut??2.5))},stop(U=1.5){return!c||g?!1:(g=!0,A()?(f.fade(0,U),R(U+.1,()=>{f==null||f.halt(),b("ended")}),!0):(f==null||f.halt(),b("stopped"),!0))},state(){return{available:u,context:(c==null?void 0:c.state)??"none",wanted:h,playing:d,ended:g,carry:_,hidden:m,waiting:p,suspends:[...E],sequencer:(f==null?void 0:f.state())??M}}};return O}const Y0=[2,4,5,7,9,10,0],sS=[...Y0,3],oS=[2,4,6,7,9,11,1],aS=Object.freeze({name:"Cold Iron",seed:"cold-iron",bpm:50,beatsPerBar:4,beds:[{voice:"wind",rate:1,gain:1},{voice:"wind",rate:.917,gain:.8,offset:.7},{voice:"drone",rate:1,gain:1}],intro:{bars:1,events:[[0,2,"toll",50,0,.8]]},loop:{bars:16,events:[[0,0,"pad",53,8,1],[0,0,"pad",57,8,1],[0,0,"pad",64,8,.8],[0,0,"toll",50,0,1],[2,0,"pad",53,8,1],[2,0,"pad",58,8,1],[2,0,"pad",62,8,.85],[4,0,"padDark",55,8,1],[4,0,"padDark",58,8,1],[4,0,"padDark",63,8,.85],[6,0,"pad",53,8,1],[6,0,"pad",57,8,1],[6,0,"pad",62,8,.85],[8,0,"pad",52,8,1],[8,0,"pad",55,8,1],[8,0,"pad",60,8,.9],[8,0,"toll",45,0,.9],[8,0,"voice",64,16,.9],[9,0,"horn",62,2,.9],[9,2,"horn",69,2,1],[10,0,"horn",67,1,.85],[10,1,"horn",69,3,.95],[10,0,"pad",60,8,.95],[10,0,"pad",64,8,.95],[10,0,"pad",69,8,.8],[12,0,"pad",54,8,1],[12,0,"pad",57,8,1],[12,0,"pad",62,8,.9],[12,0,"pad",64,8,.7],[12,0,"thud",null,0,1],[12,0,"toll",50,0,1],[12,0,"voice",66,8,.9],[12,0,"horn",69,2,1],[12,2,"horn",66,2,.95],[13,0,"horn",64,1,.85],[13,1,"horn",62,3,.95],[14,0,"pad",50,6,.7],[14,0,"pad",57,6,.7]],vary:[{p:.5,at:[6,2],voice:"toll",midi:57,beats:0,gain:.5},{scatter:[0,4],step:.5,count:[0,1],voice:"spark",pick:[74,77,79,81,84,86],beats:0,gain:[.5,.8]},{scatter:[6,12],step:.5,count:[0,2],voice:"spark",pick:[74,77,79,81,84,86],beats:0,gain:[.5,.8]},{scatter:[12,16],step:.5,count:[3,6],voice:"spark",pick:[74,76,78,81,83,86,88,90],beats:0,gain:[.6,1]}]},sections:[{bars:[0,4],pcs:Y0},{bars:[4,6],pcs:sS},{bars:[6,12],pcs:Y0},{bars:[12,16],pcs:oS}]}),lS=Object.freeze({wind:{loop:!0,layers:[{src:"noise",noise:"white",filter:{type:"bandpass",freq:520,q:.8},lfo:{rate:.05,target:"filter",depth:220},a:4,r:3,peak:.05}]},drone:{loop:!0,ref:38,layers:[{wave:"sawtooth",freq:73.42,filter:{type:"lowpass",freq:380,q:.7},lfo:{rate:.07,target:"filter",depth:90},a:5,r:4,peak:.1},{wave:"sawtooth",freq:73.64,filter:{type:"lowpass",freq:380,q:.7},lfo:{rate:.05,target:"filter",depth:70},a:5,r:4,peak:.08},{wave:"triangle",freq:110,filter:{type:"lowpass",freq:600},a:6,r:4,peak:.05}]},pad:{held:!0,ref:57,layers:[{wave:"sawtooth",freq:220,filter:{type:"lowpass",freq:900,q:.6},lfo:{rate:.11,target:"filter",depth:180},a:2.4,s:1,r:2.8,peak:.035},{wave:"triangle",freq:220.77,filter:{type:"lowpass",freq:1400},a:2.8,r:3,peak:.03}]},padDark:{held:!0,ref:57,layers:[{wave:"sawtooth",freq:220,filter:{type:"lowpass",freq:560,q:.6},lfo:{rate:.09,target:"filter",depth:120},a:2.4,s:1,r:2.8,peak:.038},{wave:"triangle",freq:220.77,filter:{type:"lowpass",freq:900},a:2.8,r:3,peak:.03}]},voice:{held:!0,ref:69,layers:[{wave:"sawtooth",freq:440,filter:{type:"bandpass",freq:730,q:5},lfo:{rate:4.6,target:"freq",depth:3.5},a:1.8,r:2.4,peak:.05},{wave:"sawtooth",freq:440,filter:{type:"bandpass",freq:1090,q:7},lfo:{rate:4.6,target:"freq",depth:3.5},a:1.8,r:2.4,peak:.03},{wave:"sawtooth",freq:440,filter:{type:"bandpass",freq:2440,q:9},lfo:{rate:4.6,target:"freq",depth:3.5},a:1.8,r:2.4,peak:.012}]},horn:{held:!0,ref:62,layers:[{wave:"sawtooth",freq:293.66,filter:{type:"lowpass",freq:350,to:1500,q:1.2},a:.35,d:.6,s:.75,r:.9,peak:.06},{wave:"sawtooth",freq:294.83,filter:{type:"lowpass",freq:300,to:1300},a:.4,r:.9,peak:.045},{wave:"triangle",freq:146.83,filter:{type:"lowpass",freq:500},a:.5,r:1,peak:.03}]},toll:{ref:50,layers:[{wave:"sine",freq:73.42,a:.003,d:2.45,s:.35,r:4.2,dur:7,peak:.05},{wave:"sine",freq:146.83,a:.003,d:2.1,s:.35,r:3.6,dur:6,peak:.06},{wave:"sine",freq:174.73,a:.003,d:1.575,s:.35,r:2.7,dur:4.5,peak:.035},{wave:"sine",freq:220.25,a:.003,d:1.225,s:.35,r:2.1,dur:3.5,peak:.025},{wave:"sine",freq:293.66,a:.003,d:1.05,s:.35,r:1.8,dur:3,peak:.03},{wave:"sine",freq:405.25,a:.003,d:.63,s:.35,r:1.08,dur:1.8,peak:.015},{wave:"sine",freq:792.9,a:.003,d:.315,s:.35,r:.54,dur:.9,peak:.01},{src:"noise",noise:"white",filter:{type:"bandpass",freq:2400,q:1.5},a:.002,r:.03,dur:.04,peak:.05}]},spark:{ref:81,layers:[{wave:"sine",freq:880,a:.004,d:.25,s:.2,r:.6,dur:1.1,peak:.02},{wave:"sine",freq:2648.8,a:.004,r:.25,dur:.3,peak:.006}]},thud:{layers:[{wave:"sine",freq:62,to:40,a:.005,d:.4,s:.3,r:.9,dur:1.6,peak:.18},{wave:"sine",freq:124,to:80,a:.005,r:.3,dur:.5,peak:.05},{src:"noise",noise:"white",filter:{type:"lowpass",freq:240},a:.002,r:.08,dur:.12,peak:.08}]}}),cS=Object.freeze({ref:55,layers:[{wave:"sine",freq:196,a:.002,d:.6,s:.35,r:1.1,dur:1.8,peak:.12},{wave:"sine",freq:540.96,a:.002,d:.3,s:.3,r:.55,dur:.9,peak:.05},{wave:"sine",freq:1058.4,a:.002,d:.1,s:.3,r:.2,dur:.35,peak:.025},{src:"noise",noise:"white",filter:{type:"bandpass",freq:300,to:2600,q:.9},a:.25,r:.4,dur:.8,peak:.05}]}),uS=Object.freeze({level:1,fadeIn:4,fadeOut:2.5,mute:.3,reverb:{seconds:2.6,rt60:2.4,preDelay:.02,send:.3,wet:1}}),at=Object.freeze({backdrop:"backdrop",root:"start",over:"start-over",begin:"start-begin",loading:"start-loading",press:"start-press",problem:"start-problem",problemText:"start-problem-text",problemReload:"start-problem-reload",gate:"start-gate",sound:"start-sound"}),Vf=Object.freeze(["title"]),fS="range",Wf="start-pressed",Xf=Object.freeze({wait:"st-wait",go:"st-go",still:"st-still"}),hS="pd_music";function dS(){return new URL("/range/assets/OFL-D_b4SXWo.txt",import.meta.url).href}const qf=n=>n.code==="Enter"||n.code==="NumpadEnter"||!n.code&&n.key==="Enter",Nl=n=>n.code==="Space"||!n.code&&n.key===" ",pS=n=>(n.code==="KeyM"||!n.code&&(n.key==="m"||n.key==="M"))&&!n.ctrlKey&&!n.metaKey&&!n.altKey,mS=["Shift","Control","Alt","Meta","CapsLock","Fn","AltGraph"],gS=.5;function _S(n){try{return(n==null?void 0:n.AudioContext)??(n==null?void 0:n.webkitAudioContext)??null}catch{return null}}function vS(n){try{return(n==null?void 0:n.localStorage)??null}catch{return null}}function xS({doc:n,win:e,search:t="",build:i=MS(),onClose:r=()=>{},onOpen:s=()=>{},audio:o=void 0,storage:a=void 0}={}){let l=!1,u=!0,c=!1,f=!1,h=!1,d="title",g=null,_=0,m=0,p=0,x=null,M=!1,E=0,C=!1,y=0,S=-1;const A=V=>{var se;return((se=n==null?void 0:n.getElementById)==null?void 0:se.call(n,V))??null},R=(V,se)=>{const le=A(V);le&&(le.hidden=!se)},v=(V,se,le)=>{var Le;return(Le=V==null?void 0:V.classList)==null?void 0:Le.toggle(se,le)},b=()=>c&&y===0;function P(V){var se,le;if(u&&((se=V.stopPropagation)==null||se.call(V),!V.isComposing)){if(M){I(V);return}if(!g){if(pS(V)){V.repeat||ae();return}if(qf(V)||Nl(V)){if((le=V.preventDefault)==null||le.call(V),V.repeat)return;V.target&&V.target===A(at.sound)?ae():Z()}}}}function I(V){var le,Le;if(V.repeat)return;if(V.key==="Escape"||V.code==="Escape"){(le=V.preventDefault)==null||le.call(V),N();return}if(mS.includes(V.key))return;const se=qf(V)||Nl(V);se&&((Le=V.preventDefault)==null||Le.call(V)),O(se&&b())}function O(V=!1){!M||!u||(E++,V&&(f=!0,S=_),x.unlock().then(se=>{!M||!u||(f?U():se&&G(!0))}))}function U(){!f||!c||!u||(f=!1,S=-1,M&&(M=!1,R(at.gate,!1)),Z())}function N(){x==null||x.silence(),G(!1)}function q(){M=!0,R(at.gate,!0),v(A(at.gate),"st-gate-gone",!1)}function G(V){var le;if(!M)return;M=!1;const se=A(at.gate);v(se,"st-gate-gone",!0),(le=se==null?void 0:se.setAttribute)==null||le.call(se,"aria-hidden","true"),oe(V)}function oe(V=!0){C||(C=!0,v(n==null?void 0:n.documentElement,Xf.go,!0),V&&(x==null||x.play()),re())}function ae(){!x||M||g||(x.toggle(),re())}function re(){var le;const V=A(at.sound);if(!V)return;const se=!!(x!=null&&x.state().wanted);(le=V.setAttribute)==null||le.call(V,"aria-pressed",se?"true":"false"),v(V,"st-sound-off",!se)}function Me(V){var se,le;u&&((se=V.stopPropagation)==null||se.call(V),!g&&Nl(V)&&((le=V.preventDefault)==null||le.call(V)))}function Ce(V){var le;if(!u||c||g)return;const se=`${(V==null?void 0:V.message)??""} ${((le=V==null?void 0:V.error)==null?void 0:le.message)??""}`;z(/webgl/i.test(se)?"noWebgl":"failed")}function z(V){var le;g=V,M&&(M=!1,R(at.gate,!1)),oe(!1),R(at.sound,!1),R(at.loading,!1),R(at.press,!1);const se=A(at.problemText);se&&(se.textContent=G0[V]),R(at.problemReload,V==="failed"),R(at.problem,!0),(le=A(at.begin))==null||le.setAttribute("aria-disabled","true")}function Y(V){R(at.loading,V),R(at.press,!V)}function Z(V){return!u||h||g||M?!1:c?(h=!0,m++,J(!0),!0):(f=!0,!1)}function J(V,se=!0){var Le,Oe,F,Mt;u=!1,f=!1;const le=A(at.root);if(v(n==null?void 0:n.documentElement,"start-open",!1),(Oe=(Le=A(at.begin))==null?void 0:Le.blur)==null||Oe.call(Le),(Mt=(F=A(at.sound))==null?void 0:F.blur)==null||Mt.call(F),le&&(le.inert=!0),M&&(M=!1,R(at.gate,!1)),V?x==null||x.end():x==null||x.stop(.05),V)v(le,"st-closing",!0),le==null||le.setAttribute("aria-hidden","true"),v(A(at.backdrop),"gone",!0);else{le&&(le.hidden=!0);const Ge=A(at.backdrop);Ge&&(Ge.hidden=!0)}se&&(p++,r())}return{boot(){var Le,Oe,F,Mt,Ge,$e,De,it,Ue,L,w,W;if(l)return u;l=!0;const V=A(at.root);v(V,"st-booted",!0),v(n==null?void 0:n.documentElement,"start-open",!0);const se=A(at.over);if(se&&(se.textContent=G0.overTitle),(F=(Oe=(Le=n==null?void 0:n.documentElement)==null?void 0:Le.classList)==null?void 0:Oe.contains)!=null&&F.call(Oe,Wf)&&(f=!0,v(n.documentElement,Wf,!1)),(Mt=e==null?void 0:e.addEventListener)==null||Mt.call(e,"error",Ce),(Ge=e==null?void 0:e.addEventListener)==null||Ge.call(e,"keydown",P,!0),($e=e==null?void 0:e.addEventListener)==null||$e.call(e,"keyup",Me,!0),(it=(De=A(at.begin))==null?void 0:De.addEventListener)==null||it.call(De,"click",K=>{(K==null?void 0:K.detail)>1||Z()}),(L=(Ue=A(at.gate))==null?void 0:Ue.addEventListener)==null||L.call(Ue,"click",()=>O(b())),(W=(w=A(at.sound))==null?void 0:w.addEventListener)==null||W.call(w,"click",K=>{var te,Q;ae(),K!=null&&K.detail&&((Q=(te=A(at.sound))==null?void 0:te.blur)==null||Q.call(te))}),SS(t,"dev")===fS)return J(!1,!1),u;const le=o===void 0?_S(e):o;if(typeof le=="function"){x=rS({AudioContext:le,storage:a===void 0?vS(e):a,key:hS,doc:n,score:aS,voices:lS,sting:cS,mix:uS}),R(at.sound,!0),re();const K=x.probe();!f&&K!=="none"&&K!=="running"&&q()}return u},ready(){c||(c=!0,!g&&(Y(!1),f&&u&&(f=!1,Z()),u&&!M&&oe()))},update(V){_+=Math.max(0,V),c&&y++,f&&M&&S>=0&&_-S>=gS&&U(),x==null||x.pump()},skip(){return u?(J(!1),!0):!1},open(V="title",se={}){var F;if(!Vf.includes(V))throw new Error(`start.open: '${V}' is not built yet (S1 has ${Vf.join(", ")})`);d=V;const le=A(at.root);le&&(le.hidden=!1,le.inert=!1,(F=le.removeAttribute)==null||F.call(le,"aria-hidden")),v(le,"st-closing",!1);const Le=A(at.backdrop);Le&&(Le.hidden=!1),v(Le,"gone",!1),v(n==null?void 0:n.documentElement,"start-open",!0),h=!1,g||Y(!!se.loading||!c),v(n==null?void 0:n.documentElement,Xf.still,!!se.still),M||oe(!1);const Oe=u;return u=!0,Oe||s(),!0},music:{continue:(V=!0)=>x==null?void 0:x.carry(V),stop:V=>(x==null?void 0:x.stop(V))??!1},state(){return{open:u,screen:d,ready:c,queued:f,busy:h,problem:g,clock:_,acts:m,closes:p,build:i,licence:dS(),gate:M,gatePresses:E,going:C,frames:y,sound:(x==null?void 0:x.state())??null}},get isOpen(){return u}}}function MS(){return"ec84ab1"}function SS(n,e){const t=typeof n=="string"?n.replace(/^\?/,""):"";for(const i of t.split("&")){const[r,s=""]=i.split("=");if(r===e)try{return decodeURIComponent(s)}catch{return s}}return null}var mh;const ni=xS({doc:document,win:globalThis,search:((mh=globalThis.location)==null?void 0:mh.search)??"",onClose:()=>wy(),onOpen:()=>{Oi=!0}});let Oi=ni.boot();const Ta=document.getElementById("view"),Dn=new gc({canvas:Ta,antialias:!0});Dn.setPixelRatio(Math.min(devicePixelRatio||1,2));Dn.setSize(innerWidth||1280,innerHeight||720,!1);Dn.outputColorSpace=Pn;Dn.toneMapping=tc;Dn.toneMappingExposure=1;xx(Dn);const ht=new fo;ht.background=new Qe(1053204);const Lt=new Mn(70,(innerWidth||1280)/(innerHeight||720),.05,200),pd=1.7,ln=new Mn(70,(innerWidth||1280)/(innerHeight||720),.05,200);ht.add(new Tc(3949127,.85));const md=new wc(16777215,1.6);md.position.set(4,8,6);ht.add(md);ht.add(new Ec(14674158,3813928,.9));const tt={halfW:7.5,wallH:4.6,near:2,far:-24},Aa=(tt.near+tt.far)/2,Ra=tt.near-tt.far,Fc=rr(tt.halfW*2,.2,Ra,di.floorTimber,{castShadow:!1});Fc.position.set(0,-.1,Aa);ht.add(Fc);const Oc=rr(tt.halfW*2+.4,.2,Ra,di.ceiling,{castShadow:!1});Oc.position.set(0,tt.wallH+.1,Aa);ht.add(Oc);const kc=rr(.2,tt.wallH,Ra,di.wall);kc.position.set(-tt.halfW-.1,tt.wallH/2,Aa);ht.add(kc);const Bc=rr(.2,tt.wallH,Ra,di.wall);Bc.position.set(tt.halfW+.1,tt.wallH/2,Aa);ht.add(Bc);const zc=rr(tt.halfW*2+.4,tt.wallH,.2,di.wallUpper);zc.position.set(0,tt.wallH/2,tt.far-.1);ht.add(zc);const Hc=rr(tt.halfW*2+.4,tt.wallH,.2,di.wallUpper);Hc.position.set(0,tt.wallH/2,tt.near+.1);ht.add(Hc);const gd=[kc,Bc,zc,Hc,Fc,Oc];for(const n of[-5,-10,-20]){const e=rr(tt.halfW*2,.01,.06,di.trim,{castShadow:!1,receiveShadow:!1});e.position.set(0,.001,n),ht.add(e)}const _d=-2.5,vd=rr(.05,.01,_d-tt.far,di.trim,{castShadow:!1,receiveShadow:!1});vd.position.set(0,.001,(_d+tt.far)/2);ht.add(vd);const Gc=Object.fromEntries([...YM,...b2].map(n=>[n.id,n])),yS=(n,e)=>e*Math.tan(lo.degToRad(n)),bS=[["boss",-3.5,20],["captain",-8.5,10],["servitor",-13,20],["shank",-19,15],["vandal",-27,10],["dreg",-36,5],["warlord",4,20],["champion",8.5,10],["rival",13,20],["outrider",19,15],["turret",27,10],["levy",36,5]],mi=bS.map(([n,e,t],i)=>N2(Gc[n],{scene:ht,x:yS(e,t),z:-t,index:i})),Fl={x:0,z:0};let Ee=0;const Ca=70,_i=wa.map(n=>({id:n.id,label:n.label,damage:n.damage,precision:n.precision,ammoType:n.ammoType,reserveCap:n.reserveCap,burstCycle:n.burstCycle??0,stats:{...n.stats,reloadTime:n.reload.clip*n.reload.seat}})),Pi=_i.map(n=>Nx(n.stats));let Gn=0,Pt=Pi[0];const La="hunterCloak",rt=v2({hipFov:Ca,classId:La,buildProp:dM}),vi=Gx({model:rt.rig,rest:Cf,aim:Cf,stowDrop:0,drawTime:0,aimTime:0,fov:q0,keyIntensity:1.6,fillIntensity:.12});vi.scene.add(new Ec(14674158,3813928,.9));vi.camera.far=3;vi.camera.updateProjectionMatrix();vi.draw();const Vc=n=>n.reloading?{...n,reloading:!1,reloadEndsAt:0}:n;function ds(n){n===Gn||!_i[n]||vt.locks(Ee).swap||rt.requestSwap(n,Ee)&&(Pi[Gn]=Vc(Pt),Gn=n,Pt=Pi[n],Ft.fire("switch","weapon"))}const ES=new cn(.02,.02,1),xd=new hn({color:16773824,transparent:!0,opacity:0}),Js=new xt(ES,xd);Js.frustumCulled=!1;ht.add(Js);let Md=-1/0;const Yf=new D,$f=new D,wS=new D(0,0,1);function TS(n,e){const t=n.distanceTo(e);$f.copy(n).add(e).multiplyScalar(.5),Js.position.copy($f),Yf.copy(e).sub(n).normalize(),Js.quaternion.setFromUnitVectors(wS,Yf),Js.scale.set(1,1,Math.max(t,.01)),Md=Ee+.05}const Pa=new xt(ya.sphere,new hn({color:16769162}));Pa.scale.setScalar(1e-4);ht.add(Pa);let Sd=-1/0,yd=.06;function Ia(n,e=.06){Pa.position.copy(n),Sd=Ee+(e>.3?.28:e>.12?.18:.09),yd=e}let Kf=0;function bd(n,e=!1){const t=document.getElementById("hitmarker");t&&(t.classList.remove("fade"),t.classList.toggle("kill",n),t.classList.toggle("crit",e&&!n),t.offsetWidth,t.classList.add("show"),clearTimeout(Kf),Kf=setTimeout(()=>{t.classList.remove("show"),t.classList.add("fade")},60))}const as=new Yh;as.far=100;const AS=lo.degToRad(1.4),RS=lo.degToRad(.22),jf=new D,Ol=new D,Zf=new D;function CS(n){const e=rt.adsE>=.9?RS/rt.magnification:AS;if(e<=0)return;const t=Math.random()*Math.PI*2,i=Math.random()*e;jf.set(Math.abs(n.y)<.99?0:1,Math.abs(n.y)<.99?1:0,0),Ol.crossVectors(n,jf).normalize(),Zf.crossVectors(Ol,n).normalize(),n.addScaledVector(Ol,Math.cos(t)*i).addScaledVector(Zf,Math.sin(t)*i).normalize()}const LS=mi.flatMap(n=>n.meshes),PS=new Map(mi.flatMap(n=>n.meshes.map(e=>[e,n])));function io(n){for(const e of n.intersectObjects(LS,!1)){const t=PS.get(e.object);if(t.health.dead)continue;const i=F2(t,e);if(i)return{target:t,point:e.point,crit:i.crit}}return null}function _o(n,e,t,i=!1){const r=O2(n,{amount:e,source:t,at:Ee,crit:i});return r.killed&&GS(Uc(n,0),t==="player-super"?"super":"weapon"),r}function IS(n){const e=new D,t=new D;vi.ray(Lt,e,t),CS(t),as.set(e,t);const i=io(as);let r;if(i){r=i.point;const s=_i[Gn],o=i.crit?s.damage*s.precision:s.damage,a=(Ee<Wc?o*VS:o)*vt.weaponDamageScale(),{killed:l}=_o(i.target,a,"player",i.crit);bd(l,i.crit)}else{const s=as.intersectObjects(gd,!1);r=s.length?s[0].point:e.clone().addScaledVector(t,as.far)}Ia(r),TS(rt.muzzleWorld(Lt),r),rt.onShot((n==null?void 0:n.at)??Ee)}const DS=x2();let Qo=-1/0;function Ed(n=vt.locks(Ee)){const e=_i[Gn],t=Ut.down.has("Mouse0")||oo.fire;let i=Ut.pressed.has("Mouse0")||oo.fire;const r=rt.busy||n.fire;r?(i||t)&&(Qo=Ee):Qo>-1/0&&((t||Ee-Qo<=wa[Gn].readyTime+fd)&&(i=!0),Qo=-1/0),!r&&t&&rt.reloading&&!nd(Pt,Ee)&&rt.cutReload(Ee);const s=DS.pull(Pt,e,Ee,{held:t,pressed:i,blocked:r});Pt=s.state,s.shots.length&&rt.reloading&&rt.cutReload(Ee);for(const o of s.shots)IS(o);for(const o of s.events)(o.type==="dry"||o.type==="emptied")&&ro();!r&&t&&Pt.loaded<=0&&!Pt.reloading&&ro()}let $s=-1/0;function ro(){if(rt.busy||vt.locks(Ee).reload)return;const n=kx(Pt,Ee);Pt=n.state,n.events.some(e=>e.type==="reloading")&&rt.startReload(Ee)}const Ar={melee:{cooldown:4,readyAt:0},grenade:{cooldown:14,readyAt:0},class:{cooldown:22,readyAt:0}},US=n=>Ee>=Ar[n].readyAt,NS=n=>{Ar[n].readyAt=Ee+Ar[n].cooldown};let Un=0;const FS=.34;let Ji=0;const OS=.25,Jf=8,ps=[],kS=14,BS=.7;function zS(n){const e=new xt(ya.box,new Fi({color:5163386,emissive:1989684,emissiveIntensity:1.1,roughness:.55}));e.scale.set(.16,.16,.16),e.position.set(n.x,.14,n.z),ht.add(e),ps.push({mesh:e,bornAt:Ee})}function HS(n){for(let e=ps.length-1;e>=0;e--){const t=ps[e];t.mesh.rotation.y+=n*1.6,t.mesh.position.y=.14+Math.sin((Ee-t.bornAt)*3)*.03;const i=t.mesh.position.x-Ve.x,r=t.mesh.position.z-Ve.z,s=Math.hypot(i,r)<BS,o=Ee-t.bornAt>kS;s&&(_i.forEach((a,l)=>{if(a.ammoType!=="special")return;const u=a.reserveCap??1/0;l===Gn?Pt={...Pt,reserve:Math.min(u,Pt.reserve+Jf)}:Pi[l]={...Pi[l],reserve:Math.min(u,Pi[l].reserve+Jf)}}),Ft.fire("pickup","special-ammo")),(s||o)&&(ht.remove(t.mesh),ps.splice(e,1))}}function GS(n,e="weapon"){if(e!=="super"){const t=Un>=1;Un=Math.min(1,Un+FS),!t&&Un>=1&&Ft.fire("flag","super-ready")}Ji>=1?(n&&zS(n),Ji=0):Ji=Math.min(1,Ji+OS),uy()}let Wc=-1/0;const VS=1.6,WS=6;function XS(){Wc=Ee+WS,Ft.fire("ability","class")}const qS=2.6,YS=80;function $S(){const n=new D,e=new D;vi.ray(Lt,n,e);const t=tr.strikeRaycast(n,e,qS);if(t){const{killed:i}=_o(t.target,YS,"player-melee");Ia(t.point,.1),bd(i),Ft.fire("ability","melee")}}const KS=14,kl=3.2,Qf=120,jS=2.5,$0=new Fi({color:16734780,emissive:16742972,emissiveIntensity:2,roughness:.5,metalness:0}),Ii=new xt(ya.sphere,$0);Ii.scale.setScalar(.16);Ii.visible=!1;ht.add(Ii);const K0=new D,ZS=.6,eh=new D,JS=new D;let so=!1,wd=-1/0;function QS(n,e,t){so&&Td(Ii.position.clone()),$0.color.set(t),$0.emissive.set(t),Ii.position.copy(n),K0.copy(e).multiplyScalar(7.5).add(new D(0,4.2,0)),Ii.visible=!0,so=!0,wd=Ee,Ft.fire("ability","grenade")}function Td(n){Ia(n,.75),eh.set(Ve.x,Ve.y+1,Ve.z);const e=eh.distanceTo(n);e<kl&&Cd(Qf*ZS*(1-.5*(e/kl)),"player-grenade");for(const t of mi)t.health.dead||Uc(t,.5,JS).distanceTo(n)>kl||_o(t,Qf,"player-grenade")}function ey(n){if(!so)return;K0.y-=KS*n,Ii.position.addScaledVector(K0,n);const e=Ii.position;(e.y<=.1||e.x<-tt.halfW+.15||e.x>tt.halfW-.15||e.z<tt.far+.15||e.z>tt.near-.15||Ee-wd>jS)&&(Td(e.clone()),Ii.visible=!1,so=!1)}function ty(){const n=new D,e=new D;vi.ray(Lt,n,e),Ia(n.clone().addScaledVector(e,3.5),.6);for(const t of mi)t.health.dead||_o(t,99999,"player-super");Ft.fire("ability","super")}const Xc=70,Da=130,th=2.75,ny=2.25,iy=Xc/2.7,ry=Da/2.75;let $t=Cc({max:Xc,shield:Da}),Ad=-1/0,Rd=!1;function Cd(n,e="world"){if($t.dead)return;const{state:t,events:i}=ed($t,{amount:n,source:e});$t=t,Ad=Ee,i.some(r=>r.type==="died")&&($t=Cc({max:Xc,shield:Da}),Yc("r-down"))}function sy(n){if($t.dead)return;const e=Ee-Ad;e>=th&&$t.hp<$t.max&&($t=z0($t,{amount:iy*n,source:"regen"}).state),e>=th+ny&&$t.shield<$t.shieldMax&&($t=z0($t,{shield:ry*n,source:"regen"}).state)}const Ld={ghost:{name:"Ghost"}},qc={"r-hello":{speaker:"ghost",text:"Range is live. Five, ten and twenty metres. Let's see what your hands remember."},"r-targets":{speaker:"ghost",text:"Good. They stand back up on their own. Try something else in your kit."},"r-switch":{speaker:"ghost",text:"Feel the difference? Grenade next. Lob it, and not at your own feet."},"r-grenade":{speaker:"ghost",text:"Loud. Now get in close and hit one. Your fists count too."},"r-melee":{speaker:"ghost",text:"That'll do. Your class ability now. It doesn't last, so make it count."},"r-class":{speaker:"ghost",text:"Every kill feeds your Super. Break a few more and I'll tell you when it's ready."},"r-super-ready":{speaker:"ghost",text:"There. That's your Super. Let it out."},"r-super":{speaker:"ghost",text:"That's what you are now. Kills build special ammo too. Watch for the drop."},"r-ammo":{speaker:"ghost",text:"Special ammo. The hand cannon's fed. The range is yours."},"r-down":{speaker:"ghost",text:"Up you get. Maybe keep your own grenades a bit further away."}};for(const[n,e]of Object.entries(qc)){if(!Ld[e.speaker])throw new Error(`comms: line '${n}' has unknown speaker '${e.speaker}'`);if(e.text.length>zf)throw new Error(`comms: line '${n}' is ${e.text.length} chars, over MAX_LINE ${zf}`)}const vn={queue:[],current:null,until:0,endedAt:-1/0},oy=.8,ay=n=>Math.max(2.4,.8+n.length*.05);function Yc(n){const e=qc[n];if(!e)throw new Error(`comms: no line '${n}'`);vn.queue=[{id:n,...e}]}function ly(){if(vn.current&&Ee>=vn.until){const n=vn.current;vn.current=null,vn.endedAt=Ee,Ft.fire("vo",n.id)}!vn.current&&vn.queue.length&&(vn.current=vn.queue.shift(),vn.until=Ee+ay(vn.current.text))}const Pd={id:"test-range",title:"Test Range",acts:[{id:"range",title:"Test Range",scenes:[{id:"drills",title:"Drills",beats:[{id:"r-01",trigger:"now",vo:"r-hello"},{id:"r-02",trigger:"kill",at:"target",count:3,progress:"kills",label:"Enemies defeated",objective:"Defeat enemies",vo:"r-targets"},{id:"r-03",trigger:"switch",at:"weapon",key:"1 2 3",objective:"Switch weapons",vo:"r-switch"},{id:"r-04",trigger:"ability",at:"grenade",key:"Q",objective:"Throw a grenade",vo:"r-grenade"},{id:"r-05",trigger:"ability",at:"melee",key:"C",objective:"Melee a target",vo:"r-melee"},{id:"r-06",trigger:"ability",at:"class",key:"V",objective:"Use your class ability",vo:"r-class"},{id:"r-07",trigger:"flag",at:"super-ready",progress:"super",label:"Super energy",objective:"Charge your Super",vo:"r-super-ready"},{id:"r-08",trigger:"ability",at:"super",key:"F",objective:"Cast your Super",vo:"r-super"},{id:"r-09",trigger:"pickup",at:"special-ammo",progress:"special",label:"Special ammo",objective:"Collect special ammo",vo:"r-ammo"}]}]}]},cy="Free fire",Bl=new Set,Ft=Y2({host:{knows:n=>Bl.has(n),learn:n=>Bl.add(n)},knows:n=>n==="super-ready"?Un>=1:Bl.has(n),triggers:["now","flag","vo","kill","switch","ability","pickup"],onBeat:n=>{n.vo&&Yc(n.vo)}});Ft.load(Pd);for(const n of Pd.acts[0].scenes[0].beats)if(n.vo&&!qc[n.vo])throw new Error(`episode: beat '${n.id}' plays missing line '${n.vo}'`);let ls={id:null,n:0};function uy(){const n=Ft.beat;!n||n.trigger!=="kill"||(ls.id!==n.id&&(ls={id:n.id,n:0}),ls.n+=1,ls.n>=(n.count??1)&&Ft.fire("kill",n.at))}const vo=new Rx,Ut=new Px(vo,Ta);Ta.addEventListener("click",()=>{Oi||Ut.locked||Ut.requestLock()});Ta.addEventListener("contextmenu",n=>n.preventDefault());vo.on("input:wheel",({delta:n})=>{if(Oi||!Ut.locked)return;const e=_i.length;ds((Gn+(n>0?1:-1)+e)%e)});vo.on("input:pointerlock",({locked:n})=>{var e;(e=document.getElementById("hint"))==null||e.classList.toggle("gone",n),!n&&!ti&&Ft.begun&&!Oi&&(Ua(),Fd=performance.now()),n&&!Ft.begun&&Ft.begin()});const fy=["MetaLeft","MetaRight","ControlLeft","ControlRight","AltLeft","AltRight"];vo.on("input:key",({code:n})=>{if(Oi||ti||!Ut.locked||fy.some(t=>Ut.down.has(t)))return;const e=vt.locks(Ee);n==="KeyR"&&(e.reload?$s=Ee:ro()),n==="KeyQ"&&vt.press("grenade"),n==="KeyC"&&vt.press("melee"),n==="KeyV"&&vt.press("class"),n==="KeyF"&&vt.press("super"),n==="Digit1"&&ds(0),n==="Digit2"&&ds(1),n==="Digit3"&&ds(2)});const Rt={yaw:0,pitch:0},hy=1.5,Ve={x:0,z:0,y:0},dy=4.2,Mr=.35,py=20,my=6.4,gy=5.6,_y=1;let mr=0,zl=0;const oo={aim:!1,fire:!1},Hl=new en(0,0,0,"YXZ"),nh=new D,ih=new D,Qr=new D,Gl=(n,e,t)=>Math.max(e,Math.min(t,n)),ms={solid:new Fi({vertexColors:!0,roughness:.85,metalness:0}),glow:new hn({vertexColors:!0})},rh=new hn({color:0}),vy={x:0,y:0},Qs=new D;let xo=La,la=null,bn=Ea(La,ms);bn.root.visible=!1;ht.add(bn.root);const En=wM({room:tt,fov:Ca,radius:.2}),$c=CM({abilities:Qn,moments:Pr}),tr=VM({raycaster:as,strikeRay:io,getWeapon:()=>Pt,setWeapon:n=>{Pt=n},cancelEngineReload:Vc,fp:rt,now:()=>Ee,getSuperCharge:()=>Un,setSuperChargeValue:n=>{Un=n},episode:Ft,moment:En,pitchLimit:hy}),vt=PM({scene:ht,ROOM:tt,camera:Lt,fp:rt,runner:$c,moment:En,player:Ve,view:Rt,PLAYER_RADIUS:Mr,strikeRaycast:tr.strikeRaycast,now:()=>Ee,classId:()=>xo,body:()=>bn,moveAxis:()=>Ut.axis(),ability:{ready:n=>US(n)&&!(n==="grenade"&&so),use:NS},superCharge:{get:()=>Un,set:tr.setSuperCharge},weapons:{fillMagazine:tr.fillMagazine,cancelReload:()=>{Pt=Vc(Pt)}},legacy:{throwGrenade:QS,meleeStrike:$S,ward:XS,superWipe:ty}});let Li=null,Rr=null,ti=!1,Id=La;const $i=document.getElementById("preview-canvas");let ci=null,hi=null,gs=null,Qt=null,j0=0,_a=0,Dd=!0;function Kc(n){Vn[n]&&(Id=n,hi&&(Qt&&(hi.remove(Qt.root),Qt.dispose()),Qt=Ea(n,ms),Qt.pose(j0,{base:"preview"}),Qt.root.position.set(0,0,0),Qt.root.rotation.set(0,_a,0),Qt.root.updateMatrixWorld(!0),hi.add(Qt.root)),document.querySelectorAll("#menu-classes button").forEach(e=>e.classList.toggle("active",e.dataset.garment===n)),la=n,Ud())}function Ud(){if(!la||vt.busy)return;const n=la;la=null,n!==xo&&jc(n)}function jc(n){xo=n,rt.setClass(n),ht.remove(bn.root),bn.dispose(),bn=Ea(n,ms),bn.root.visible=!1,ht.add(bn.root),vt.setClass(n)}function xy(){if(ci||!$i)return;ci=new gc({canvas:$i,antialias:!0,alpha:!0}),ci.setPixelRatio(Math.min(devicePixelRatio||1,2)),ci.outputColorSpace=Pn,ci.toneMapping=tc,hi=new fo,hi.add(new Tc(3949127,.85));const n=new wc(16777215,1.6);n.position.set(2,3,3),hi.add(n),hi.add(new Ec(14674158,3813928,.9)),gs=new Mn(40,1,.05,10),gs.position.set(0,1.1,3.2),gs.lookAt(0,.94,0),Kc(Id)}function Nd(){const n=document.getElementById("menu-inventory");n&&(n.innerHTML=_i.map((e,t)=>{const i=t===Gn?Pt:Pi[t],r=i.reserve===1/0?"∞":i.reserve;return`<div class="inv-slot${t===Gn?" equipped":""}" data-index="${t}">
      <span>${e.label} &middot; ${i.loaded}/${r}</span>
      <span class="ammo-tag ${e.ammoType}">${e.ammoType}</span>
    </div>`}).join(""),n.querySelectorAll(".inv-slot").forEach(e=>{e.addEventListener("click",()=>{ds(Number(e.dataset.index)),Nd()})}))}function Ua(){ti=!ti;const n=document.getElementById("menu");if(n&&(n.hidden=!ti),ti){Ut.releaseLock(),xy();const e=($i==null?void 0:$i.clientWidth)||360,t=($i==null?void 0:$i.clientHeight)||220;ci&&(ci.setSize(e,t,!1),gs.aspect=e/t,gs.updateProjectionMatrix()),Nd()}else Ut.requestLockFresh(),Un>=1&&Hd()}let Fd=-1/0;vo.on("action:cancel",()=>{Oi||ti&&performance.now()-Fd<300||Ua()});var gh;(gh=document.getElementById("menu-resume"))==null||gh.addEventListener("click",()=>{ti&&Ua()});document.querySelectorAll("#menu-classes button").forEach(n=>{n.addEventListener("click",()=>Kc(n.dataset.garment))});const va=n=>Object.keys(Vn).find(e=>Object.values(Vn[e]).includes(n));function My(n,e=0){if(ni.skip(),n===null){Li&&(En.finish(Ee-Pr[Qn[Li.id].camera].blendBack-.001),En.update(Ee,{feet:Qs.set(Ve.x,Ve.y,Ve.z),yaw:Rt.yaw,pitch:Rt.pitch})),Li=null,bn.root.visible=En.active,ws();return}const t=Qn[n];if(!(t!=null&&t.camera))throw new Error(`poseAt: '${n}' is not a third-person ability`);va(n)!==xo&&jc(va(n)),Li={id:n,t:e},En.start(t.camera,Ee-Pr[t.camera].blendOut-.001),En.update(Ee,{feet:Qs.set(Ve.x,Ve.y,Ve.z),yaw:Rt.yaw,pitch:Rt.pitch}),bn.root.visible=!0,bn.pose(Ee,{base:"ready",clip:n,t:e,feet:Qs,facing:Rt.yaw}),ws()}function Sy(n,e=0,{charged:t=!0}={}){ni.skip();const i=Qn[n];if(rt.swapping)throw new Error("fpAt: a swap is running");va(n)!==xo&&jc(va(n));const r=i.seconds+(i.camera?Pr[i.camera].blendBack:0);rt.act(n,Ee-e*i.seconds,r,{charged:t}),rt.update(0,Ee,{}),ws()}function Z0(n){ni.skip(),ht.overrideMaterial=n?rh:null,ht.background.set(n?16777215:1053204),hi&&(hi.overrideMaterial=n?rh:null,ci.setClearColor(n?16777215:0,n?1:0))}let gr=null;function yy(n){if(ni.skip(),gr){for(const l of gr.items)ht.remove(l.root),l.dispose();for(const[l,u]of gr.visible)l.visible=u;Z0(!1),Rr=null,gr=null}if(!n){ws();return}const{bodies:e,distance:t=8,eye:i=pd,yaw:r=0,spacing:s=1.2,silhouette:o=!1}=n;gr={items:[],visible:new Map};const a=new Set;e.forEach((l,u)=>{let c;if(Vn[l])c=Ea(l,ms),c.pose(0,{base:"ready"});else{const f=mo(Gc[l].spec,{solidMaterial:ms.solid,glowMaterial:ms.glow});c={root:f.root,dispose:()=>f.dispose()}}c.root.position.x=(u-(e.length-1)/2)*s,c.root.position.z=-t,c.root.rotation.y=r,c.root.updateMatrixWorld(!0),ht.add(c.root),a.add(c.root),gr.items.push(c)});for(const l of ht.children)l!==vt.effectsRoot&&(gr.visible.set(l,l.visible),l.visible=a.has(l)||!o&&(l.isLight||gd.includes(l)));vt.clearWorld(),Z0(o),Rr={position:[0,i,0],target:[0,i,-t]},ws()}function by(n){ni.skip(),Dd=n===null,n!==null&&(_a=n)}function Od(n){if(Oi){Ut.consumeMouse(),ni.update(n),Ut.endFrame();return}if(ti){Qt&&(j0+=n,Dd&&(_a+=n*.6),Qt.pose(j0,{base:"preview"}),Qt.root.position.set(0,0,0),Qt.root.rotation.set(0,_a,0),Qt.root.updateMatrixWorld(!0)),Ut.endFrame();return}Ee+=n,Ud();const e=vt.locks(Ee),t=Ut.locked&&Ut.down.has("Mouse2")||oo.aim;t&&(Bd=Ee),rt.setAim(t&&!e.aim);const{dx:i,dy:r}=Ut.consumeMouse();let s=0,o=0;if(tr.notePitch(Rt.pitch),Ut.locked){const d=Ut.mouse.sensitivity*(Lt.fov/Ca);s=-i*d,o=-r*d,Rt.yaw+=s,Rt.pitch+=o;const g=rt.recoil;if(g.pitch>0&&o<0){const p=Math.min(g.pitch,-o);g.pitch-=p,Rt.pitch+=p}if(g.yaw>0&&s<0){const p=Math.min(g.yaw,-s);g.yaw-=p,Rt.yaw+=p}if(g.yaw<0&&s>0){const p=Math.min(-g.yaw,s);g.yaw+=p,Rt.yaw-=p}const[_,m]=tr.pitchWindow();Rt.pitch=Gl(Rt.pitch,_,m)}Lt.rotation.set(Rt.pitch+rt.recoil.pitch,Rt.yaw+rt.recoil.yaw,0,"YXZ"),Hl.set(0,Rt.yaw,0,"YXZ");const a=e.move==="free"?Ut.axis():vy;nh.set(0,0,-1).applyEuler(Hl),ih.set(1,0,0).applyEuler(Hl),Qr.set(0,0,0).addScaledVector(nh,a.y).addScaledVector(ih,a.x),Qr.lengthSq()>0&&Qr.normalize();const l=Qr.lengthSq()>0?dy*(1-.25*rt.adsE):0;let u=null;e.move==="driven"?(u=vt.drive(n,Ve),u&&(mr=u.velY)):(Ve.x+=Qr.x*l*n,Ve.z+=Qr.z*l*n),Ve.x=Gl(Ve.x,-tt.halfW+Mr,tt.halfW-Mr),Ve.z=Gl(Ve.z,tt.far+Mr,tt.near-Mr);for(const d of mi){if(d.health.dead)continue;const g=Ve.x-d.root.position.x,_=Ve.z-d.root.position.z,m=d.footprint+Mr,p=g*g+_*_;if(p>=m*m)continue;const x=Math.sqrt(p);if(x<1e-6){Ve.z=d.root.position.z+m;continue}Ve.x=d.root.position.x+g/x*m,Ve.z=d.root.position.z+_/x*m}vt.pushOut(Ve,Mr);const c=Ve.y<=0;Ut.wasPressed("jump")&&!e.jump&&(c?(mr=my,zl=0):zl<_y&&(mr=gy,zl++));let f=0;u||(mr-=py*n,Ve.y=Math.max(0,Ve.y+mr*n),Ve.y<=0&&(c||(f=Math.max(0,-mr)),Ve.y=0,mr=0)),Lt.position.set(Ve.x,pd+Ve.y,Ve.z),Li||vt.onEvents($c.update(Ee)),vt.update(n),$s>-1/0&&(Ee-$s>H0?$s=-1/0:!vt.locks(Ee).reload&&!rt.busy&&($s=-1/0,ro())),ey(n),HS(n),sy(n),ly(),(Ut.locked||oo.fire)&&Ed(e),Pt=Fx(Pt,Ee).state,rt.update(n,Ee,{lookYaw:s,lookPitch:o,speed:l,airborne:Ve.y>0,landed:f}),vi.update(n),Lt.fov=rt.worldFov,Lt.updateProjectionMatrix(),Lt.rotation.set(Rt.pitch+rt.recoil.pitch,Rt.yaw+rt.recoil.yaw,0,"YXZ"),En.update(Ee,{feet:Qs.set(Ve.x,Ve.y,Ve.z),yaw:Rt.yaw,pitch:Rt.pitch}),ws(),vt.lateUpdate(Ee),Li&&(bn.pose(Ee,{base:"ready",clip:Li.id,t:Li.t,feet:Qs,facing:Rt.yaw}),bn.root.visible=!0),document.body.classList.toggle("third-person",En.active),document.body.classList.toggle("tp-aim",En.active&&vt.aiming),xd.opacity=Ee<Md?.9:0,Pa.scale.setScalar(Ee<Sd?yd:1e-4);const h=document.getElementById("cross");h&&(h.style.opacity=(1-zd(.5,.85,rt.adsE)).toFixed(3)),Fl.x=Ve.x,Fl.z=Ve.z;for(const d of mi)z2(d,n,Ee,{face:Fl});V2(n),Gd(n),Ut.endFrame()}const Ey=new fo;function kd(){if(Oi&&!Rr&&!Li){Dn.setClearColor(0,0),Dn.render(Ey,ln);return}Dn.render(ht,ln),!En.active&&!Rr&&vi.pass(Dn,ln),ti&&ci&&Qt&&ci.render(hi,gs)}function wy(){Oi=!1,Dn.setClearColor(0,1)}const Ty=new D,Ay=new Ht,Ry=new en(0,0,0,"YXZ");function ws(){if(Rr)ln.position.set(...Rr.position),ln.lookAt(...Rr.target),ln.fov=Ca;else if(En.active)En.apply(ln);else{const n=rt.camOffset;ln.position.copy(Lt.position).add(Ty.set(n.x,n.y,n.z).applyQuaternion(Lt.quaternion)),ln.quaternion.copy(Lt.quaternion).multiply(Ay.setFromEuler(Ry.set(n.pitch,n.yaw,n.roll,"YXZ"))),ln.fov=Lt.fov}ln.aspect=Lt.aspect,ln.updateProjectionMatrix(),ln.updateMatrixWorld()}const sh=132,oh=48;function Cy(){const n=document.createElement("canvas");n.width=sh,n.height=oh;let e;try{e=new gc({canvas:n,alpha:!0,antialias:!0,preserveDrawingBuffer:!0})}catch{return _i.map(()=>"")}e.setClearColor(0,0);const t=new fo;t.overrideMaterial=new hn({color:16777215});const i=new pc(-1,1,1,-1,.01,10),r=new D,s=new D,o=wa.map(a=>ud(a,{icon:!0})).map(({group:a})=>{const l=a;t.add(l),l.updateMatrixWorld(!0);const u=new Ni().setFromObject(l);u.getSize(r),u.getCenter(s);let c=r.z/2*1.08,f=r.y/2*1.08;const h=sh/oh;return c/f>h?f=c/h:c=f*h,i.left=-c,i.right=c,i.top=f,i.bottom=-f,i.position.set(s.x+2,s.y,s.z),i.lookAt(s),i.updateProjectionMatrix(),e.render(t,i),t.remove(l),n.toDataURL("image/png")});return t.overrideMaterial.dispose(),e.dispose(),e.forceContextLoss(),o}const J0=Cy(),Vl=60,Ly=Math.cos(lo.degToRad(4)),ah=2.5,lh=new Map,es=new Yh,ts=new D,Wl=new D,Xl=new D,ql=new D;function Py(n,e){let t=lh.get(n);return t||(t=document.createElement("div"),t.className=`plate ${n.rank}`,t.innerHTML=`<div class="col"><div class="name">${n.name}</div><div class="bar"><i class="fill"></i><i class="shield"></i></div></div>`,e.appendChild(t),lh.set(n,t),t)}function Iy(){var r;const n=document.getElementById("nameplates");if(!n)return;Lt.updateMatrixWorld(),Lt.getWorldDirection(Xl),es.set(Lt.position,Xl),es.far=Vl;const e=((r=io(es))==null?void 0:r.target)??null,t=innerWidth||1280,i=innerHeight||720;for(const s of mi){const o=Py(s,n);Uc(s,.62,Wl);const a=Wl.distanceTo(Lt.position);let l=s===e;if(!l&&a<Vl&&(ql.copy(Wl).sub(Lt.position).divideScalar(a||1),ql.dot(Xl)>Ly)){es.set(Lt.position,ql),es.far=a;const d=io(es);l=!d||d.target===s}l&&(s.plateSeenAt=Ee);const u=a<Vl&&(Ee-(s.plateSeenAt??-1/0)<ah||Ee-s.lastHitAt<ah);ts.set(s.root.position.x,s.root.position.y+s.top+.2,s.root.position.z).project(ln);const c=ts.z<1&&Math.abs(ts.x)<1.05&&Math.abs(ts.y)<1.05;if(o.hidden=s.health.dead||!c,o.classList.toggle("on",u),o.hidden)continue;const f=(ts.x*.5+.5)*t,h=(-ts.y*.5+.5)*i;o.style.transform=`translate(${f.toFixed(1)}px, ${h.toFixed(1)}px) translate(-50%, -100%)`,o.querySelector(".fill").style.width=`${(td(s.health)*100).toFixed(1)}%`,o.querySelector(".shield").style.width=`${(Lc(s.health)*100).toFixed(1)}%`}}function Dy(n,e,t){const i=document.getElementById(n);i&&(i.style.setProperty("--pct",`${Math.round(e*100)}%`),i.classList.toggle("ready",t))}const Ks=Math.PI*2,cs=8,Yl=24,Uy=48,Ny=.8,rs=92,ns=rs*.4,Q0=[];let Bd=-1/0;const Fy="http://www.w3.org/2000/svg",wr=(n,e)=>`${(100+n*Math.sin(e)).toFixed(2)} ${(100-n*Math.cos(e)).toFixed(2)}`,ch=(n,e,t)=>`M${wr(n,e)} A${n} ${n} 0 0 1 ${wr(n,t)}`;function Xi(n,e){const t=document.createElementNS(Fy,n);for(const[i,r]of Object.entries(e))t.setAttribute(i,String(r));return t}function Oy(){const n=document.getElementById("radar-svg");if(!n)return;Xi("defs",{}),n.appendChild(Xi("circle",{cx:100,cy:100,r:rs,fill:"rgba(12,17,22,0.38)",stroke:"rgba(255,255,255,0.24)","stroke-width":1.4})),n.appendChild(Xi("circle",{cx:100,cy:100,r:ns,fill:"none",stroke:"rgba(255,255,255,0.2)","stroke-width":1.2}));const e=Ks/cs,t=lo.degToRad(1.5);for(let i=0;i<cs;i++){const r=(i-.5)*e+t/2,s=(i+.5)*e-t/2,o=Xi("path",{d:`M${wr(ns,r)} L${wr(rs,r)} A${rs} ${rs} 0 0 1 ${wr(rs,s)} L${wr(ns,s)} A${ns} ${ns} 0 0 0 ${wr(ns,r)} Z`,fill:"#b8452f",opacity:0}),a=(r+s)/2,l=(s-r)*.3,u=Xi("g",{opacity:0});u.append(Xi("path",{d:ch(96,r,s),fill:"none",stroke:"#e04a32","stroke-width":3,opacity:.4}),Xi("path",{d:ch(96,a-l,a+l),fill:"none",stroke:"#e04a32","stroke-width":3})),n.append(o,u),Q0.push({fill:o,far:u,near:0,farValue:0})}n.appendChild(Xi("path",{d:"M100 90 L107.5 109 L100 104.5 L92.5 109 Z",fill:"#4a82e6",stroke:"#a9c6f5","stroke-width":1.2,"stroke-linejoin":"round"}))}Oy();const uh=(n,e,t)=>n+(e-n)*Math.min(1,t/(e>n?.15:.4));function zd(n,e,t){const i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)}function ky(n){var r;if((r=document.getElementById("radar"))==null||r.classList.toggle("ads",Ee-Bd<Ny),!Q0.length)return;const e=new Array(cs).fill(0),t=new Array(cs).fill(0),i=Ks/cs;for(const s of mi){if(s.health.dead)continue;const o=s.root.position.x-Ve.x,a=s.root.position.z-Ve.z,l=Math.hypot(o,a);if(l>Uy)continue;const u=((Math.atan2(o,-a)+Rt.yaw)%Ks+Ks)%Ks,c=Math.round(u/i)%cs;l>=Yl*.7&&(t[c]=1),l<Yl&&(e[c]=Math.max(e[c],1-l/Yl))}Q0.forEach((s,o)=>{s.near=uh(s.near,e[o],n),s.farValue=uh(s.farValue,t[o],n),s.fill.setAttribute("opacity",(.7*zd(0,.75,s.near)).toFixed(2)),s.far.setAttribute("opacity",s.farValue.toFixed(2))})}function In(n,e){n&&n.textContent!==e&&(n.textContent=e)}const By=.7;let Ws,Xs,$l=-1/0;function zy(n){return n!=null&&n.progress?n.progress==="kills"?`${ls.id===n.id?ls.n:0}/${n.count??1}`:n.progress==="super"?`${Math.round(Un*100)}%`:n.progress==="special"?ps.length?"Dropped":`${Math.round(Ji*100)}%`:"":""}function Hy(n){return(n==null?void 0:n.progress)==="kills"?`${n.count??1}/${n.count??1}`:(n==null?void 0:n.progress)==="super"?"100%":(n==null?void 0:n.progress)==="special"?"Collected":""}let Kl=null;function Gy(){const n=document.getElementById("objective");if(!n)return;const e=n.querySelector(".obj.main"),t=n.querySelector(".obj.sub"),i=n.querySelector(".obj.value"),r=Ft.begun?Ft.over?cy:Ft.objective:null;if(r!==Ws&&r!==Xs&&(Xs=r,Ws?($l=Ee+By,n.classList.remove("fresh"),n.classList.add("complete"),In(e.querySelector(".key"),""),In(i.querySelector(".count"),Hy(Kl))):$l=Ee),Xs!==void 0&&Ee>=$l&&(Ws=Xs,Xs=void 0,Kl=Ft.over?null:Ft.beat,n.hidden=!Ws,In(e.querySelector(".text"),Ws??""),n.classList.remove("complete","fresh"),n.offsetWidth,n.classList.add("fresh")),n.classList.contains("complete"))return;const s=Kl,o=!!(s!=null&&s.progress);e.classList.toggle("step",o),In(e.querySelector(".key"),(s==null?void 0:s.key)??""),t.hidden=!o,i.hidden=!o,o&&(In(t.querySelector(".label"),s.label??""),In(i.querySelector(".count"),zy(s)))}function Vy(){const n=document.getElementById("buff-ward");if(!n)return;const e=Wc-Ee;n.hidden=e<=0,e>0&&In(n.querySelector(".time"),`${Math.ceil(e)}s`)}let fh=Da;function Wy(){var s;const n=document.getElementById("vitals");if(!n)return;const e=td($t),t=Lc($t),i=$t.shield<=0;n.classList.toggle("shown",e<1||t<1),n.classList.toggle("broken",i&&e<1),n.classList.toggle("critical",i&&e<.5),i&&fh>0&&(n.classList.remove("shattered"),n.offsetWidth,n.classList.add("shattered")),fh=$t.shield,n.style.setProperty("--hp",e.toFixed(3)),n.style.setProperty("--sh",t.toFixed(3)),(s=document.getElementById("zone"))==null||s.classList.toggle("on",Rd);const r=document.getElementById("vignette");r&&(r.style.opacity=i?Math.min(.9,(1-e)*1.2).toFixed(2):"0")}function Xy(){const n=document.getElementById("comms"),e=document.getElementById("subtitle");if(!n||!e)return;const t=vn.current,i=!!t||Ee-vn.endedAt<oy;n.classList.toggle("on",i),e.classList.toggle("on",i),t&&(In(n.querySelector(".speaker"),Ld[t.speaker].name),In(e.querySelector(".line"),t.text))}let hh=null;function qy(){const n=document.getElementById("weapons");return n?(n.innerHTML=_i.map((e,t)=>`
    <div class="wpn">
      ${J0[t]?`<img class="icon" alt="" src="${J0[t]}">`:'<span class="icon"></span>'}
      <span class="ammo-type ${e.ammoType}"><i></i><i></i><i></i></span>
      <span class="reserve"></span>
      <span class="mag"></span>
      ${e.ammoType==="special"?'<div class="meter"><div class="fill"></div></div>':""}
    </div>`).join(""),[...n.querySelectorAll(".wpn")]):[]}let dh=!1;function Hd(){const n=document.getElementById("super-flash");n&&(n.classList.remove("show"),n.offsetWidth,n.classList.add("show"))}function Yy(){const n=document.getElementById("super");if(n){const t=Un>=1;n.style.setProperty("--charge",Un.toFixed(3)),n.classList.toggle("ready",t),t&&!dh&&Hd(),dh=t}for(const[t,i]of[["ab-grenade","grenade"],["ab-melee","melee"],["ab-class","class"]]){const r=Math.max(0,Ar[i].readyAt-Ee),s=Ar[i].cooldown>0?r/Ar[i].cooldown:0;Dy(t,s,r<=0)}hh??(hh=qy());const e="∞";hh.forEach((t,i)=>{const r=i===Gn,s=r?Pt:Pi[i],o=s.reserve===1/0;t.classList.toggle("active",r),t.style.order=r?"0":String(i+1),r?(In(t.querySelector(".mag"),String(s.loaded)),In(t.querySelector(".reserve"),o?e:String(s.reserve))):(In(t.querySelector(".mag"),""),In(t.querySelector(".reserve"),o?e:String(s.loaded+s.reserve))),t.classList.toggle("low",s.loaded<=Math.floor(s.magazine*.2)),t.classList.toggle("empty",!o&&s.loaded+s.reserve===0);const a=t.querySelector(".meter");a&&(a.firstElementChild.style.width=`${Math.round(Ji*100)}%`,a.classList.toggle("full",Ji>=1))})}function Gd(n=0){ky(n),Iy(),Gy(),Vy(),Wy(),Xy(),Yy()}addEventListener("resize",()=>{if(!(!innerWidth||!innerHeight)){Dn.setSize(innerWidth,innerHeight,!1);for(const n of[Lt,ln])n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix()}});let ph=performance.now();function Vd(n){const e=Math.min((n-ph)/1e3,.25);ph=n,Od(e),kd(),requestAnimationFrame(Vd)}requestAnimationFrame(Vd);window.game={scene:ht,camera:Lt,renderCamera:ln,renderer:Dn,view:Rt,player:Ve,weapon:()=>Pt,targets:mi,update:Od,render:kd,viewmodel:vi,units:Gc,strikeRay:io,hitTarget:_o,input:Ut,attemptFire:Ed,doReload:ro,throwGrenade:()=>vt.press("grenade"),doMelee:()=>vt.press("melee"),useClassAbility:()=>vt.press("class"),useSuper:()=>vt.press("super"),ability:()=>Ar,superCharge:()=>Un,setSuperCharge:tr.setSuperCharge,switchWeapon:ds,weaponDefs:()=>_i,activeWeapon:()=>Gn,fp:rt,debug:oo,specialMeter:()=>Ji,ammoBricks:()=>ps,weaponStates:Pi,toggleMenu:Ua,menuOpen:()=>ti,setGarment:Kc,previewBody:()=>Qt,guardian:{get body(){return bn},get previewBody(){return Qt},runner:$c,moment:En,game:vt,comfort:Dc,seam:tr,data:{ABILITIES:Qn,CLASSES:Vn,ELEMENTS:go,MOMENTS:Pr,NAMES:GM},poseAt:My,fpAt:Sy,silhouette:Z0,stage:yy,previewView:by},episode:Ft,comms:vn,sayLine:Yc,hurtPlayer:Cd,playerHealth:()=>$t,updateHud:Gd,weaponIcons:J0,setRestrictedZone:n=>{Rd=!!n},start:{open:(n,e)=>ni.open(n,e),state:()=>ni.state(),skip:()=>ni.skip()},simTime:()=>Ee};console.log(`PRE-DESTINY test range booted — ${mi.length} enemies in two lanes, magazine ${Pt.magazine}, reserve ${Pt.reserve}, reload ${Pt.reloadTime}s`);ni.ready();
