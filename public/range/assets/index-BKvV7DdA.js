(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gc="169",pp=0,fu=1,mp=2,zd=1,gp=2,Ai=3,Ui=0,In=1,Ri=2,er=0,gs=1,ro=2,du=3,hu=4,_p=5,yr=100,vp=101,xp=102,Mp=103,Sp=104,yp=200,bp=201,Ep=202,wp=203,d0=204,h0=205,Tp=206,Ap=207,Rp=208,Lp=209,Cp=210,Pp=211,Ip=212,Dp=213,Up=214,p0=0,m0=1,g0=2,ys=3,_0=4,v0=5,x0=6,M0=7,Hd=0,Np=1,kp=2,tr=0,Fp=1,Op=2,Bp=3,_c=4,zp=5,Hp=6,Gp=7,pu="attached",Vp="detached",Gd=300,bs=301,Es=302,S0=303,y0=304,La=306,xa=1e3,Zi=1001,b0=1002,Cn=1003,Wp=1004,Ao=1005,Xn=1006,$a=1007,Ji=1008,Ni=1009,Vd=1010,Wd=1011,so=1012,vc=1013,Pr=1014,di=1015,fo=1016,xc=1017,Mc=1018,ws=1020,Xd=35902,qd=1021,Yd=1022,qn=1023,$d=1024,Kd=1025,_s=1026,Ts=1027,jd=1028,Sc=1029,Zd=1030,yc=1031,bc=1033,aa=33776,la=33777,ca=33778,ua=33779,E0=35840,w0=35841,T0=35842,A0=35843,R0=36196,L0=37492,C0=37496,P0=37808,I0=37809,D0=37810,U0=37811,N0=37812,k0=37813,F0=37814,O0=37815,B0=37816,z0=37817,H0=37818,G0=37819,V0=37820,W0=37821,fa=36492,X0=36494,q0=36495,Jd=36283,Y0=36284,$0=36285,K0=36286,Xp=3200,qp=3201,Qd=0,Yp=1,ji="",Fn="srgb",rr="srgb-linear",Ec="display-p3",Ca="display-p3-linear",Ma="linear",At="srgb",Sa="rec709",ya="p3",zr=7680,mu=519,$p=512,Kp=513,jp=514,eh=515,Zp=516,Jp=517,Qp=518,em=519,gu=35044,_u="300 es",Ci=2e3,ba=2001;class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vu=1234567;const eo=Math.PI/180,oo=180/Math.PI;function kr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function wn(n,e,t){return Math.max(e,Math.min(t,n))}function wc(n,e){return(n%e+e)%e}function tm(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function nm(n,e,t){return n!==e?(t-n)/(e-n):0}function to(n,e,t){return(1-t)*n+t*e}function im(n,e,t,i){return to(n,e,1-Math.exp(-t*i))}function rm(n,e=1){return e-Math.abs(wc(n,e*2)-e)}function sm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function om(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function am(n,e){return n+Math.floor(Math.random()*(e-n+1))}function lm(n,e){return n+Math.random()*(e-n)}function cm(n){return n*(.5-Math.random())}function um(n){n!==void 0&&(vu=n);let e=vu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fm(n){return n*eo}function dm(n){return n*oo}function hm(n){return(n&n-1)===0&&n!==0}function pm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function mm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function gm(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),u=s((e+i)/2),c=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),h=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*c,l*f,l*d,o*u);break;case"YZY":n.set(l*d,o*c,l*f,o*u);break;case"ZXZ":n.set(l*f,l*d,o*c,o*u);break;case"XZX":n.set(o*c,l*_,l*h,o*u);break;case"YXY":n.set(l*h,o*c,l*_,o*u);break;case"ZYZ":n.set(l*_,l*h,o*c,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function cs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ho={DEG2RAD:eo,RAD2DEG:oo,generateUUID:kr,clamp:wn,euclideanModulo:wc,mapLinear:tm,inverseLerp:nm,lerp:to,damp:im,pingpong:rm,smoothstep:sm,smootherstep:om,randInt:am,randFloat:lm,randFloatSpread:cm,seededRandom:um,degToRad:fm,radToDeg:dm,isPowerOfTwo:hm,ceilPowerOfTwo:pm,floorPowerOfTwo:mm,setQuaternionFromProperEuler:gm,normalize:yn,denormalize:cs};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,i,r,s,a,o,l,u){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u)}set(e,t,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],h=i[5],_=i[8],v=r[0],m=r[3],p=r[6],S=r[1],x=r[4],E=r[7],R=r[2],b=r[5],y=r[8];return s[0]=a*v+o*S+l*R,s[3]=a*m+o*x+l*b,s[6]=a*p+o*E+l*y,s[1]=u*v+c*S+f*R,s[4]=u*m+c*x+f*b,s[7]=u*p+c*E+f*y,s[2]=d*v+h*S+_*R,s[5]=d*m+h*x+_*b,s[8]=d*p+h*E+_*y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=c*a-o*u,d=o*l-c*s,h=u*s-a*l,_=t*f+i*d+r*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*u-c*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(c*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=h*v,e[7]=(i*l-u*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ka.makeScale(e,t)),this}rotate(e){return this.premultiply(Ka.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ka.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ka=new et;function th(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _m(){const n=Ea("canvas");return n.style.display="block",n}const xu={};function da(n){n in xu||(xu[n]=!0,console.warn(n))}function vm(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function xm(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Mm(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Mu=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Su=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fs={[rr]:{transfer:Ma,primaries:Sa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Fn]:{transfer:At,primaries:Sa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ca]:{transfer:Ma,primaries:ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Su),fromReference:n=>n.applyMatrix3(Mu)},[Ec]:{transfer:At,primaries:ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Su),fromReference:n=>n.applyMatrix3(Mu).convertLinearToSRGB()}},Sm=new Set([rr,Ca]),pt={enabled:!0,_workingColorSpace:rr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Sm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Fs[e].toReference,r=Fs[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Fs[n].primaries},getTransfer:function(n){return n===ji?Ma:Fs[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Fs[e].luminanceCoefficients)}};function vs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ja(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hr;class ym{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hr===void 0&&(Hr=Ea("canvas")),Hr.width=e.width,Hr.height=e.height;const i=Hr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Hr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ea("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=vs(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vs(t[i]/255)*255):t[i]=vs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bm=0;class nh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=kr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Za(r[a].image)):s.push(Za(r[a]))}else s=Za(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Za(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ym.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Em=0;class _n extends Cs{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,i=Zi,r=Zi,s=Xn,a=Ji,o=qn,l=Ni,u=_n.DEFAULT_ANISOTROPY,c=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=kr(),this.name="",this.source=new nh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xa:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case b0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xa:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case b0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Gd;_n.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],h=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(u+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,E=(h+1)/2,R=(p+1)/2,b=(c+d)/4,y=(f+v)/4,A=(_+m)/4;return x>E&&x>R?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=b/i,s=y/i):E>R?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=b/r,s=A/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=y/s,r=A/s),this.set(i,r,s,t),this}let S=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(d-c)*(d-c));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(f-v)/S,this.z=(d-c)/S,this.w=Math.acos((u+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wm extends Cs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new _n(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new nh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ir extends wm{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ih extends _n{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tm extends _n{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yt{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[a+0],h=s[a+1],_=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=h,e[t+2]=_,e[t+3]=v;return}if(f!==v||l!==d||u!==h||c!==_){let m=1-o;const p=l*d+u*h+c*_+f*v,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),b=Math.atan2(R,p*S);m=Math.sin(m*b)/R,o=Math.sin(o*b)/R}const E=o*S;if(l=l*m+d*E,u=u*m+h*E,c=c*m+_*E,f=f*m+v*E,m===1-o){const R=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=R,u*=R,c*=R,f*=R}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[a],d=s[a+1],h=s[a+2],_=s[a+3];return e[t]=o*_+c*f+l*h-u*d,e[t+1]=l*_+c*d+u*f-o*h,e[t+2]=u*_+c*h+o*d-l*f,e[t+3]=c*_-o*f-l*d-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),f=o(s/2),d=l(i/2),h=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*c*f+u*h*_,this._y=u*h*f-d*c*_,this._z=u*c*_+d*h*f,this._w=u*c*f-d*h*_;break;case"YXZ":this._x=d*c*f+u*h*_,this._y=u*h*f-d*c*_,this._z=u*c*_-d*h*f,this._w=u*c*f+d*h*_;break;case"ZXY":this._x=d*c*f-u*h*_,this._y=u*h*f+d*c*_,this._z=u*c*_+d*h*f,this._w=u*c*f-d*h*_;break;case"ZYX":this._x=d*c*f-u*h*_,this._y=u*h*f+d*c*_,this._z=u*c*_-d*h*f,this._w=u*c*f+d*h*_;break;case"YZX":this._x=d*c*f+u*h*_,this._y=u*h*f+d*c*_,this._z=u*c*_-d*h*f,this._w=u*c*f-d*h*_;break;case"XZY":this._x=d*c*f-u*h*_,this._y=u*h*f-d*c*_,this._z=u*c*_+d*h*f,this._w=u*c*f+d*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(c-l)*h,this._y=(s-u)*h,this._z=(a-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(c-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+u)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(s-u)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-r)/h,this._x=(s+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*u+a*f-o*c,this.y=i+l*c+o*u-s*f,this.z=r+l*f+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ja.copy(this).projectOnVector(e),this.sub(Ja)}reflect(e){return this.sub(Ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(wn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new U,yu=new Yt;class ki{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jn):jn.fromBufferAttribute(s,a),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ro.copy(i.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),Lo.subVectors(this.max,Os),Gr.subVectors(e.a,Os),Vr.subVectors(e.b,Os),Wr.subVectors(e.c,Os),zi.subVectors(Vr,Gr),Hi.subVectors(Wr,Vr),ar.subVectors(Gr,Wr);let t=[0,-zi.z,zi.y,0,-Hi.z,Hi.y,0,-ar.z,ar.y,zi.z,0,-zi.x,Hi.z,0,-Hi.x,ar.z,0,-ar.x,-zi.y,zi.x,0,-Hi.y,Hi.x,0,-ar.y,ar.x,0];return!Qa(t,Gr,Vr,Wr,Lo)||(t=[1,0,0,0,1,0,0,0,1],!Qa(t,Gr,Vr,Wr,Lo))?!1:(Co.crossVectors(zi,Hi),t=[Co.x,Co.y,Co.z],Qa(t,Gr,Vr,Wr,Lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mi=[new U,new U,new U,new U,new U,new U,new U,new U],jn=new U,Ro=new ki,Gr=new U,Vr=new U,Wr=new U,zi=new U,Hi=new U,ar=new U,Os=new U,Lo=new U,Co=new U,lr=new U;function Qa(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){lr.fromArray(n,s);const o=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),l=e.dot(lr),u=t.dot(lr),c=i.dot(lr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const Am=new ki,Bs=new U,el=new U;class Ps{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Am.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bs.subVectors(e,this.center);const t=Bs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Bs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(el.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bs.copy(e.center).add(el)),this.expandByPoint(Bs.copy(e.center).sub(el))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new U,tl=new U,Po=new U,Gi=new U,nl=new U,Io=new U,il=new U;class Tc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){tl.copy(e).add(t).multiplyScalar(.5),Po.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(tl);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Po),o=Gi.dot(this.direction),l=-Gi.dot(Po),u=Gi.lengthSq(),c=Math.abs(1-a*a);let f,d,h,_;if(c>0)if(f=a*l-o,d=a*o-l,_=s*c,f>=0)if(d>=-_)if(d<=_){const v=1/c;f*=v,d*=v,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+u}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+u):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+u);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(tl).addScaledVector(Po,d),h}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,r,s){nl.subVectors(t,e),Io.subVectors(i,e),il.crossVectors(nl,Io);let a=this.direction.dot(il),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gi.subVectors(this.origin,e);const l=o*this.direction.dot(Io.crossVectors(Gi,Io));if(l<0)return null;const u=o*this.direction.dot(nl.cross(Gi));if(u<0||l+u>a)return null;const c=-o*Gi.dot(il);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,t,i,r,s,a,o,l,u,c,f,d,h,_,v,m){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u,c,f,d,h,_,v,m)}set(e,t,i,r,s,a,o,l,u,c,f,d,h,_,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=u,p[6]=c,p[10]=f,p[14]=d,p[3]=h,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),a=1/Xr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*c,h=a*f,_=o*c,v=o*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=h+_*u,t[5]=d-v*u,t[9]=-o*l,t[2]=v-d*u,t[6]=_+h*u,t[10]=a*l}else if(e.order==="YXZ"){const d=l*c,h=l*f,_=u*c,v=u*f;t[0]=d+v*o,t[4]=_*o-h,t[8]=a*u,t[1]=a*f,t[5]=a*c,t[9]=-o,t[2]=h*o-_,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*c,h=l*f,_=u*c,v=u*f;t[0]=d-v*o,t[4]=-a*f,t[8]=_+h*o,t[1]=h+_*o,t[5]=a*c,t[9]=v-d*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*c,h=a*f,_=o*c,v=o*f;t[0]=l*c,t[4]=_*u-h,t[8]=d*u+v,t[1]=l*f,t[5]=v*u+d,t[9]=h*u-_,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*u,_=o*l,v=o*u;t[0]=l*c,t[4]=v-d*f,t[8]=_*f+h,t[1]=f,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=h*f+_,t[10]=d-v*f}else if(e.order==="XZY"){const d=a*l,h=a*u,_=o*l,v=o*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+v,t[5]=a*c,t[9]=h*f-_,t[2]=_*f-h,t[6]=o*c,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rm,e,Lm)}lookAt(e,t,i){const r=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Vi.crossVectors(i,Un),Vi.lengthSq()===0&&(Math.abs(i.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Vi.crossVectors(i,Un)),Vi.normalize(),Do.crossVectors(Un,Vi),r[0]=Vi.x,r[4]=Do.x,r[8]=Un.x,r[1]=Vi.y,r[5]=Do.y,r[9]=Un.y,r[2]=Vi.z,r[6]=Do.z,r[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],h=i[13],_=i[2],v=i[6],m=i[10],p=i[14],S=i[3],x=i[7],E=i[11],R=i[15],b=r[0],y=r[4],A=r[8],L=r[12],g=r[1],M=r[5],P=r[9],D=r[13],F=r[2],k=r[6],N=r[10],X=r[14],V=r[3],ce=r[7],de=r[11],le=r[15];return s[0]=a*b+o*g+l*F+u*V,s[4]=a*y+o*M+l*k+u*ce,s[8]=a*A+o*P+l*N+u*de,s[12]=a*L+o*D+l*X+u*le,s[1]=c*b+f*g+d*F+h*V,s[5]=c*y+f*M+d*k+h*ce,s[9]=c*A+f*P+d*N+h*de,s[13]=c*L+f*D+d*X+h*le,s[2]=_*b+v*g+m*F+p*V,s[6]=_*y+v*M+m*k+p*ce,s[10]=_*A+v*P+m*N+p*de,s[14]=_*L+v*D+m*X+p*le,s[3]=S*b+x*g+E*F+R*V,s[7]=S*y+x*M+E*k+R*ce,s[11]=S*A+x*P+E*N+R*de,s[15]=S*L+x*D+E*X+R*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],h=e[14],_=e[3],v=e[7],m=e[11],p=e[15];return _*(+s*l*f-r*u*f-s*o*d+i*u*d+r*o*h-i*l*h)+v*(+t*l*h-t*u*d+s*a*d-r*a*h+r*u*c-s*l*c)+m*(+t*u*f-t*o*h-s*a*f+i*a*h+s*o*c-i*u*c)+p*(-r*o*c-t*l*f+t*o*d+r*a*f-i*a*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],h=e[11],_=e[12],v=e[13],m=e[14],p=e[15],S=f*m*u-v*d*u+v*l*h-o*m*h-f*l*p+o*d*p,x=_*d*u-c*m*u-_*l*h+a*m*h+c*l*p-a*d*p,E=c*v*u-_*f*u+_*o*h-a*v*h-c*o*p+a*f*p,R=_*f*l-c*v*l-_*o*d+a*v*d+c*o*m-a*f*m,b=t*S+i*x+r*E+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/b;return e[0]=S*y,e[1]=(v*d*s-f*m*s-v*r*h+i*m*h+f*r*p-i*d*p)*y,e[2]=(o*m*s-v*l*s+v*r*u-i*m*u-o*r*p+i*l*p)*y,e[3]=(f*l*s-o*d*s-f*r*u+i*d*u+o*r*h-i*l*h)*y,e[4]=x*y,e[5]=(c*m*s-_*d*s+_*r*h-t*m*h-c*r*p+t*d*p)*y,e[6]=(_*l*s-a*m*s-_*r*u+t*m*u+a*r*p-t*l*p)*y,e[7]=(a*d*s-c*l*s+c*r*u-t*d*u-a*r*h+t*l*h)*y,e[8]=E*y,e[9]=(_*f*s-c*v*s-_*i*h+t*v*h+c*i*p-t*f*p)*y,e[10]=(a*v*s-_*o*s+_*i*u-t*v*u-a*i*p+t*o*p)*y,e[11]=(c*o*s-a*f*s-c*i*u+t*f*u+a*i*h-t*o*h)*y,e[12]=R*y,e[13]=(c*v*r-_*f*r+_*i*d-t*v*d-c*i*m+t*f*m)*y,e[14]=(_*o*r-a*v*r-_*i*l+t*v*l+a*i*m-t*o*m)*y,e[15]=(a*f*r-c*o*r+c*i*l-t*f*l-a*i*d+t*o*d)*y,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,f=o+o,d=s*u,h=s*c,_=s*f,v=a*c,m=a*f,p=o*f,S=l*u,x=l*c,E=l*f,R=i.x,b=i.y,y=i.z;return r[0]=(1-(v+p))*R,r[1]=(h+E)*R,r[2]=(_-x)*R,r[3]=0,r[4]=(h-E)*b,r[5]=(1-(d+p))*b,r[6]=(m+S)*b,r[7]=0,r[8]=(_+x)*y,r[9]=(m-S)*y,r[10]=(1-(d+v))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Xr.set(r[0],r[1],r[2]).length();const a=Xr.set(r[4],r[5],r[6]).length(),o=Xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Zn.copy(this);const u=1/s,c=1/a,f=1/o;return Zn.elements[0]*=u,Zn.elements[1]*=u,Zn.elements[2]*=u,Zn.elements[4]*=c,Zn.elements[5]*=c,Zn.elements[6]*=c,Zn.elements[8]*=f,Zn.elements[9]*=f,Zn.elements[10]*=f,t.setFromRotationMatrix(Zn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Ci){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let h,_;if(o===Ci)h=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ba)h=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Ci){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(a-s),d=(t+e)*u,h=(i+r)*c;let _,v;if(o===Ci)_=(a+s)*f,v=-2*f;else if(o===ba)_=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xr=new U,Zn=new Ze,Rm=new U(0,0,0),Lm=new U(1,1,1),Vi=new U,Do=new U,Un=new U,bu=new Ze,Eu=new Yt;class on{constructor(e=0,t=0,i=0,r=on.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(wn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(wn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(wn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-wn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eu.setFromEuler(this),this.setFromQuaternion(Eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class Ac{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cm=0;const wu=new U,qr=new Yt,yi=new Ze,Uo=new U,zs=new U,Pm=new U,Im=new Yt,Tu=new U(1,0,0),Au=new U(0,1,0),Ru=new U(0,0,1),Lu={type:"added"},Dm={type:"removed"},Yr={type:"childadded",child:null},rl={type:"childremoved",child:null};class $t extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new U,t=new on,i=new Yt,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ze},normalMatrix:{value:new et}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Tu,e)}rotateY(e){return this.rotateOnAxis(Au,e)}rotateZ(e){return this.rotateOnAxis(Ru,e)}translateOnAxis(e,t){return wu.copy(e).applyQuaternion(this.quaternion),this.position.add(wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tu,e)}translateY(e){return this.translateOnAxis(Au,e)}translateZ(e){return this.translateOnAxis(Ru,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Uo.copy(e):Uo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(zs,Uo,this.up):yi.lookAt(Uo,zs,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),qr.setFromRotationMatrix(yi),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lu),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dm),rl.child=e,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lu),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,e,Pm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Im,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$t.DEFAULT_UP=new U(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new U,bi=new U,sl=new U,Ei=new U,$r=new U,Kr=new U,Cu=new U,ol=new U,al=new U,ll=new U,cl=new Lt,ul=new Lt,fl=new Lt;class ii{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jn.subVectors(e,t),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Jn.subVectors(r,t),bi.subVectors(i,t),sl.subVectors(e,t);const a=Jn.dot(Jn),o=Jn.dot(bi),l=Jn.dot(sl),u=bi.dot(bi),c=bi.dot(sl),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(u*l-o*c)*d,_=(a*c-o*l)*d;return s.set(1-h-_,_,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return cl.setScalar(0),ul.setScalar(0),fl.setScalar(0),cl.fromBufferAttribute(e,t),ul.fromBufferAttribute(e,i),fl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(cl,s.x),a.addScaledVector(ul,s.y),a.addScaledVector(fl,s.z),a}static isFrontFacing(e,t,i,r){return Jn.subVectors(i,t),bi.subVectors(e,t),Jn.cross(bi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Jn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ii.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;$r.subVectors(r,i),Kr.subVectors(s,i),ol.subVectors(e,i);const l=$r.dot(ol),u=Kr.dot(ol);if(l<=0&&u<=0)return t.copy(i);al.subVectors(e,r);const c=$r.dot(al),f=Kr.dot(al);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector($r,a);ll.subVectors(e,s);const h=$r.dot(ll),_=Kr.dot(ll);if(_>=0&&h<=_)return t.copy(s);const v=h*u-l*_;if(v<=0&&u>=0&&_<=0)return o=u/(u-_),t.copy(i).addScaledVector(Kr,o);const m=c*_-h*f;if(m<=0&&f-c>=0&&h-_>=0)return Cu.subVectors(s,r),o=(f-c)/(f-c+(h-_)),t.copy(r).addScaledVector(Cu,o);const p=1/(m+v+d);return a=v*p,o=d*p,t.copy(i).addScaledVector($r,a).addScaledVector(Kr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},No={h:0,s:0,l:0};function dl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=pt.workingColorSpace){if(e=wc(e,1),t=wn(t,0,1),i=wn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=dl(a,s,e+1/3),this.g=dl(a,s,e),this.b=dl(a,s,e-1/3)}return pt.toWorkingColorSpace(this,r),this}setStyle(e,t=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){const i=rh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=ja(e.r),this.g=ja(e.g),this.b=ja(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return pt.fromWorkingColorSpace(un.copy(this),e),Math.round(wn(un.r*255,0,255))*65536+Math.round(wn(un.g*255,0,255))*256+Math.round(wn(un.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(un.copy(this),t);const i=un.r,r=un.g,s=un.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Fn){pt.fromWorkingColorSpace(un.copy(this),e);const t=un.r,i=un.g,r=un.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(No);const i=to(Wi.h,No.h,t),r=to(Wi.s,No.s,t),s=to(Wi.l,No.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new nt;nt.NAMES=rh;let Um=0;class po extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=kr(),this.name="",this.type="Material",this.blending=gs,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=d0,this.blendDst=h0,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zr,this.stencilZFail=zr,this.stencilZPass=zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==d0&&(i.blendSrc=this.blendSrc),this.blendDst!==h0&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xn extends po{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new U,ko=new at;class Dn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gu,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXY(t,ko.x,ko.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=cs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=yn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array),r=yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array),r=yn(r,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gu&&(e.usage=this.usage),e}}class Rc extends Dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class sh extends Dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class vn extends Dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Nm=0;const Hn=new Ze,hl=new $t,jr=new U,Nn=new ki,Hs=new ki,Jt=new U;class si extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(th(e)?sh:Rc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,i){return Hn.makeTranslation(e,t,i),this.applyMatrix4(Hn),this}scale(e,t,i){return Hn.makeScale(e,t,i),this.applyMatrix4(Hn),this}lookAt(e){return hl.lookAt(e),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Nn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(Nn.min,Hs.min),Nn.expandByPoint(Jt),Jt.addVectors(Nn.max,Hs.max),Nn.expandByPoint(Jt)):(Nn.expandByPoint(Hs.min),Nn.expandByPoint(Hs.max))}Nn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Jt.fromBufferAttribute(o,u),l&&(jr.fromBufferAttribute(e,u),Jt.add(jr)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<i.count;A++)o[A]=new U,l[A]=new U;const u=new U,c=new U,f=new U,d=new at,h=new at,_=new at,v=new U,m=new U;function p(A,L,g){u.fromBufferAttribute(i,A),c.fromBufferAttribute(i,L),f.fromBufferAttribute(i,g),d.fromBufferAttribute(s,A),h.fromBufferAttribute(s,L),_.fromBufferAttribute(s,g),c.sub(u),f.sub(u),h.sub(d),_.sub(d);const M=1/(h.x*_.y-_.x*h.y);isFinite(M)&&(v.copy(c).multiplyScalar(_.y).addScaledVector(f,-h.y).multiplyScalar(M),m.copy(f).multiplyScalar(h.x).addScaledVector(c,-_.x).multiplyScalar(M),o[A].add(v),o[L].add(v),o[g].add(v),l[A].add(m),l[L].add(m),l[g].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let A=0,L=S.length;A<L;++A){const g=S[A],M=g.start,P=g.count;for(let D=M,F=M+P;D<F;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const x=new U,E=new U,R=new U,b=new U;function y(A){R.fromBufferAttribute(r,A),b.copy(R);const L=o[A];x.copy(L),x.sub(R.multiplyScalar(R.dot(L))).normalize(),E.crossVectors(b,L);const M=E.dot(l[A])<0?-1:1;a.setXYZW(A,x.x,x.y,x.z,M)}for(let A=0,L=S.length;A<L;++A){const g=S[A],M=g.start,P=g.count;for(let D=M,F=M+P;D<F;D+=3)y(e.getX(D+0)),y(e.getX(D+1)),y(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,u=new U,c=new U,f=new U;if(e)for(let d=0,h=e.count;d<h;d+=3){const _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,m),o.add(c),l.add(c),u.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,f=o.normalized,d=new u.constructor(l.length*c);let h=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?h=l[v]*o.data.stride+o.offset:h=l[v]*c;for(let p=0;p<c;p++)d[_++]=u[h++]}return new Dn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new si,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,f=u.length;c<f;c++){const d=u[c],h=e(d,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const h=u[f];c.push(h.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,h=f.length;d<h;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pu=new Ze,cr=new Tc,Fo=new Ps,Iu=new U,Oo=new U,Bo=new U,zo=new U,pl=new U,Ho=new U,Du=new U,Go=new U;class Et extends $t{constructor(e=new si,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ho.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],f=s[l];c!==0&&(pl.fromBufferAttribute(f,e),a?Ho.addScaledVector(pl,c):Ho.addScaledVector(pl.sub(t),c))}t.add(Ho)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(Fo.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Fo,Iu)===null||cr.origin.distanceToSquared(Iu)>(e.far-e.near)**2))&&(Pu.copy(s).invert(),cr.copy(e.ray).applyMatrix4(Pu),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,cr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],p=a[m.materialIndex],S=Math.max(m.start,h.start),x=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let E=S,R=x;E<R;E+=3){const b=o.getX(E),y=o.getX(E+1),A=o.getX(E+2);r=Vo(this,p,e,i,u,c,f,b,y,A),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let m=_,p=v;m<p;m+=3){const S=o.getX(m),x=o.getX(m+1),E=o.getX(m+2);r=Vo(this,a,e,i,u,c,f,S,x,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=d.length;_<v;_++){const m=d[_],p=a[m.materialIndex],S=Math.max(m.start,h.start),x=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let E=S,R=x;E<R;E+=3){const b=E,y=E+1,A=E+2;r=Vo(this,p,e,i,u,c,f,b,y,A),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=_,p=v;m<p;m+=3){const S=m,x=m+1,E=m+2;r=Vo(this,a,e,i,u,c,f,S,x,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function km(n,e,t,i,r,s,a,o){let l;if(e.side===In?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ui,o),l===null)return null;Go.copy(o),Go.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Go);return u<t.near||u>t.far?null:{distance:u,point:Go.clone(),object:n}}function Vo(n,e,t,i,r,s,a,o,l,u){n.getVertexPosition(o,Oo),n.getVertexPosition(l,Bo),n.getVertexPosition(u,zo);const c=km(n,e,t,i,Oo,Bo,zo,Du);if(c){const f=new U;ii.getBarycoord(Du,Oo,Bo,zo,f),r&&(c.uv=ii.getInterpolatedAttribute(r,o,l,u,f,new at)),s&&(c.uv1=ii.getInterpolatedAttribute(s,o,l,u,f,new at)),a&&(c.normal=ii.getInterpolatedAttribute(a,o,l,u,f,new U),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new U,materialIndex:0};ii.getNormal(Oo,Bo,zo,d.normal),c.face=d,c.barycoord=f}return c}class gn extends si{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],f=[];let d=0,h=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new vn(u,3)),this.setAttribute("normal",new vn(c,3)),this.setAttribute("uv",new vn(f,2));function _(v,m,p,S,x,E,R,b,y,A,L){const g=E/y,M=R/A,P=E/2,D=R/2,F=b/2,k=y+1,N=A+1;let X=0,V=0;const ce=new U;for(let de=0;de<N;de++){const le=de*M-D;for(let Se=0;Se<k;Se++){const Ie=Se*g-P;ce[v]=Ie*S,ce[m]=le*x,ce[p]=F,u.push(ce.x,ce.y,ce.z),ce[v]=0,ce[m]=0,ce[p]=b>0?1:-1,c.push(ce.x,ce.y,ce.z),f.push(Se/y),f.push(1-de/A),X+=1}}for(let de=0;de<A;de++)for(let le=0;le<y;le++){const Se=d+le+k*de,Ie=d+le+k*(de+1),B=d+(le+1)+k*(de+1),K=d+(le+1)+k*de;l.push(Se,Ie,K),l.push(Ie,B,K),V+=6}o.addGroup(h,V,L),h+=V,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function As(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function bn(n){const e={};for(let t=0;t<n.length;t++){const i=As(n[t]);for(const r in i)e[r]=i[r]}return e}function Fm(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function oh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const Om={clone:As,merge:bn};var Bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends po{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bm,this.fragmentShader=zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=Fm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ah extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new U,Uu=new at,Nu=new at;class mn extends ah{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,Uu,Nu),t.subVectors(Nu,Uu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(eo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zr=-90,Jr=1;class Hm extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(Zr,Jr,e,t);r.layers=this.layers,this.add(r);const s=new mn(Zr,Jr,e,t);s.layers=this.layers,this.add(s);const a=new mn(Zr,Jr,e,t);a.layers=this.layers,this.add(a);const o=new mn(Zr,Jr,e,t);o.layers=this.layers,this.add(o);const l=new mn(Zr,Jr,e,t);l.layers=this.layers,this.add(l);const u=new mn(Zr,Jr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ba)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,d,h),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class lh extends _n{constructor(e,t,i,r,s,a,o,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:bs,super(e,t,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gm extends Ir{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lh(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new gn(5,5,5),s=new ir({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:er});s.uniforms.tEquirect.value=t;const a=new Et(r,s),o=t.minFilter;return t.minFilter===Ji&&(t.minFilter=Xn),new Hm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const ml=new U,Vm=new U,Wm=new et;class vr{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ml.subVectors(i,t).cross(Vm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ml),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Wm.getNormalMatrix(e),r=this.coplanarPoint(ml).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new Ps,Wo=new U;class Lc{constructor(e=new vr,t=new vr,i=new vr,r=new vr,s=new vr,a=new vr){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ci){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],h=r[8],_=r[9],v=r[10],m=r[11],p=r[12],S=r[13],x=r[14],E=r[15];if(i[0].setComponents(l-s,d-u,m-h,E-p).normalize(),i[1].setComponents(l+s,d+u,m+h,E+p).normalize(),i[2].setComponents(l+a,d+c,m+_,E+S).normalize(),i[3].setComponents(l-a,d-c,m-_,E-S).normalize(),i[4].setComponents(l-o,d-f,m-v,E-x).normalize(),t===Ci)i[5].setComponents(l+o,d+f,m+v,E+x).normalize();else if(t===ba)i[5].setComponents(o,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Wo.x=r.normal.x>0?e.max.x:e.min.x,Wo.y=r.normal.y>0?e.max.y:e.min.y,Wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ch(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Xm(n){const e=new WeakMap;function t(o,l){const u=o.array,c=o.usage,f=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,c),o.onUploadCallback();let h;if(u instanceof Float32Array)h=n.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=n.SHORT;else if(u instanceof Uint32Array)h=n.UNSIGNED_INT;else if(u instanceof Int32Array)h=n.INT;else if(u instanceof Int8Array)h=n.BYTE;else if(u instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,u){const c=l.array,f=l.updateRanges;if(n.bindBuffer(u,o),f.length===0)n.bufferSubData(u,0,c);else{f.sort((h,_)=>h.start-_.start);let d=0;for(let h=1;h<f.length;h++){const _=f[d],v=f[h];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,f[d]=v)}f.length=d+1;for(let h=0,_=f.length;h<_;h++){const v=f[h];n.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,t(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}class mo extends si{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,f=e/o,d=t/l,h=[],_=[],v=[],m=[];for(let p=0;p<c;p++){const S=p*d-a;for(let x=0;x<u;x++){const E=x*f-s;_.push(E,-S,0),v.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const x=S+u*p,E=S+u*(p+1),R=S+1+u*(p+1),b=S+1+u*p;h.push(x,E,b),h.push(E,R,b)}this.setIndex(h),this.setAttribute("position",new vn(_,3)),this.setAttribute("normal",new vn(v,3)),this.setAttribute("uv",new vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mo(e.width,e.height,e.widthSegments,e.heightSegments)}}var qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ym=`#ifdef USE_ALPHAHASH
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
#endif`,$m=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jm=`#ifdef USE_AOMAP
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
#endif`,Qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eg=`#ifdef USE_BATCHING
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
#endif`,tg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ig=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sg=`#ifdef USE_IRIDESCENCE
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
#endif`,og=`#ifdef USE_BUMPMAP
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
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",bg=`
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
}`,Eg=`#ifdef USE_ENVMAP
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
#endif`,wg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ig=`#ifdef USE_FOG
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
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
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
#endif`,Og=`#ifdef USE_ENVMAP
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
#endif`,Bg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zg=`varying vec3 vViewPosition;
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
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vg=`PhysicalMaterial material;
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
#endif`,qg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$g=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t_=`#if defined( USE_POINTS_UV )
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
#endif`,r_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a_=`#ifdef USE_MORPHTARGETS
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
#endif`,l_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,f_=`#ifndef FLAT_SHADED
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
#endif`,h_=`#ifndef FLAT_SHADED
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
#endif`,v_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,x_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,S_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C_=`float getShadowMask() {
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
#endif`,I_=`#ifdef USE_SKINNING
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
#endif`,k_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,O_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,B_=`#ifdef USE_TRANSMISSION
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
#endif`,z_=`#ifdef USE_TRANSMISSION
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
#endif`,G_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,V_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
}`,q_=`uniform sampler2D t2D;
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
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z_=`#include <common>
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
}`,J_=`#if DEPTH_PACKING == 3200
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
}`,Q_=`#define DISTANCE
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
}`,e1=`#define DISTANCE
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
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`uniform float scale;
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
}`,r1=`uniform vec3 diffuse;
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
}`,s1=`#include <common>
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
}`,o1=`uniform vec3 diffuse;
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
}`,a1=`#define LAMBERT
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
}`,l1=`#define LAMBERT
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
}`,c1=`#define MATCAP
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
}`,u1=`#define MATCAP
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
}`,f1=`#define NORMAL
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
}`,d1=`#define NORMAL
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
}`,h1=`#define PHONG
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
}`,p1=`#define PHONG
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
}`,m1=`#define STANDARD
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
}`,g1=`#define STANDARD
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
}`,_1=`#define TOON
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
}`,v1=`#define TOON
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
}`,x1=`uniform float size;
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
}`,M1=`uniform vec3 diffuse;
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
}`,S1=`#include <common>
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
}`,y1=`uniform vec3 color;
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
}`,b1=`uniform float rotation;
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
}`,E1=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:qm,alphahash_pars_fragment:Ym,alphamap_fragment:$m,alphamap_pars_fragment:Km,alphatest_fragment:jm,alphatest_pars_fragment:Zm,aomap_fragment:Jm,aomap_pars_fragment:Qm,batching_pars_vertex:eg,batching_vertex:tg,begin_vertex:ng,beginnormal_vertex:ig,bsdfs:rg,iridescence_fragment:sg,bumpmap_pars_fragment:og,clipping_planes_fragment:ag,clipping_planes_pars_fragment:lg,clipping_planes_pars_vertex:cg,clipping_planes_vertex:ug,color_fragment:fg,color_pars_fragment:dg,color_pars_vertex:hg,color_vertex:pg,common:mg,cube_uv_reflection_fragment:gg,defaultnormal_vertex:_g,displacementmap_pars_vertex:vg,displacementmap_vertex:xg,emissivemap_fragment:Mg,emissivemap_pars_fragment:Sg,colorspace_fragment:yg,colorspace_pars_fragment:bg,envmap_fragment:Eg,envmap_common_pars_fragment:wg,envmap_pars_fragment:Tg,envmap_pars_vertex:Ag,envmap_physical_pars_fragment:Og,envmap_vertex:Rg,fog_vertex:Lg,fog_pars_vertex:Cg,fog_fragment:Pg,fog_pars_fragment:Ig,gradientmap_pars_fragment:Dg,lightmap_pars_fragment:Ug,lights_lambert_fragment:Ng,lights_lambert_pars_fragment:kg,lights_pars_begin:Fg,lights_toon_fragment:Bg,lights_toon_pars_fragment:zg,lights_phong_fragment:Hg,lights_phong_pars_fragment:Gg,lights_physical_fragment:Vg,lights_physical_pars_fragment:Wg,lights_fragment_begin:Xg,lights_fragment_maps:qg,lights_fragment_end:Yg,logdepthbuf_fragment:$g,logdepthbuf_pars_fragment:Kg,logdepthbuf_pars_vertex:jg,logdepthbuf_vertex:Zg,map_fragment:Jg,map_pars_fragment:Qg,map_particle_fragment:e_,map_particle_pars_fragment:t_,metalnessmap_fragment:n_,metalnessmap_pars_fragment:i_,morphinstance_vertex:r_,morphcolor_vertex:s_,morphnormal_vertex:o_,morphtarget_pars_vertex:a_,morphtarget_vertex:l_,normal_fragment_begin:c_,normal_fragment_maps:u_,normal_pars_fragment:f_,normal_pars_vertex:d_,normal_vertex:h_,normalmap_pars_fragment:p_,clearcoat_normal_fragment_begin:m_,clearcoat_normal_fragment_maps:g_,clearcoat_pars_fragment:__,iridescence_pars_fragment:v_,opaque_fragment:x_,packing:M_,premultiplied_alpha_fragment:S_,project_vertex:y_,dithering_fragment:b_,dithering_pars_fragment:E_,roughnessmap_fragment:w_,roughnessmap_pars_fragment:T_,shadowmap_pars_fragment:A_,shadowmap_pars_vertex:R_,shadowmap_vertex:L_,shadowmask_pars_fragment:C_,skinbase_vertex:P_,skinning_pars_vertex:I_,skinning_vertex:D_,skinnormal_vertex:U_,specularmap_fragment:N_,specularmap_pars_fragment:k_,tonemapping_fragment:F_,tonemapping_pars_fragment:O_,transmission_fragment:B_,transmission_pars_fragment:z_,uv_pars_fragment:H_,uv_pars_vertex:G_,uv_vertex:V_,worldpos_vertex:W_,background_vert:X_,background_frag:q_,backgroundCube_vert:Y_,backgroundCube_frag:$_,cube_vert:K_,cube_frag:j_,depth_vert:Z_,depth_frag:J_,distanceRGBA_vert:Q_,distanceRGBA_frag:e1,equirect_vert:t1,equirect_frag:n1,linedashed_vert:i1,linedashed_frag:r1,meshbasic_vert:s1,meshbasic_frag:o1,meshlambert_vert:a1,meshlambert_frag:l1,meshmatcap_vert:c1,meshmatcap_frag:u1,meshnormal_vert:f1,meshnormal_frag:d1,meshphong_vert:h1,meshphong_frag:p1,meshphysical_vert:m1,meshphysical_frag:g1,meshtoon_vert:_1,meshtoon_frag:v1,points_vert:x1,points_frag:M1,shadow_vert:S1,shadow_frag:y1,sprite_vert:b1,sprite_frag:E1},Me={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},ui={basic:{uniforms:bn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:bn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new nt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:bn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:bn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:bn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new nt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:bn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:bn([Me.points,Me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:bn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:bn([Me.common,Me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:bn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:bn([Me.sprite,Me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:bn([Me.common,Me.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:bn([Me.lights,Me.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ui.physical={uniforms:bn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Xo={r:0,b:0,g:0},fr=new on,w1=new Ze;function T1(n,e,t,i,r,s,a){const o=new nt(0);let l=s===!0?0:1,u,c,f=null,d=0,h=null;function _(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function v(S){let x=!1;const E=_(S);E===null?p(o,l):E&&E.isColor&&(p(E,1),x=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,x){const E=_(x);E&&(E.isCubeTexture||E.mapping===La)?(c===void 0&&(c=new Et(new gn(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:As(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,b,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),fr.copy(x.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(w1.makeRotationFromEuler(fr)),c.material.toneMapped=pt.getTransfer(E.colorSpace)!==At,(f!==E||d!==E.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=E,d=E.version,h=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new Et(new mo(2,2),new ir({name:"BackgroundMaterial",uniforms:As(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=pt.getTransfer(E.colorSpace)!==At,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,f=E,d=E.version,h=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null))}function p(S,x){S.getRGB(Xo,oh(n)),i.buffers.color.setClear(Xo.r,Xo.g,Xo.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:v,addToRenderList:m}}function A1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(g,M,P,D,F){let k=!1;const N=f(D,P,M);s!==N&&(s=N,u(s.object)),k=h(g,D,P,F),k&&_(g,D,P,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,E(g,M,P,D),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function u(g){return n.bindVertexArray(g)}function c(g){return n.deleteVertexArray(g)}function f(g,M,P){const D=P.wireframe===!0;let F=i[g.id];F===void 0&&(F={},i[g.id]=F);let k=F[M.id];k===void 0&&(k={},F[M.id]=k);let N=k[D];return N===void 0&&(N=d(l()),k[D]=N),N}function d(g){const M=[],P=[],D=[];for(let F=0;F<t;F++)M[F]=0,P[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:P,attributeDivisors:D,object:g,attributes:{},index:null}}function h(g,M,P,D){const F=s.attributes,k=M.attributes;let N=0;const X=P.getAttributes();for(const V in X)if(X[V].location>=0){const de=F[V];let le=k[V];if(le===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(le=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(le=g.instanceColor)),de===void 0||de.attribute!==le||le&&de.data!==le.data)return!0;N++}return s.attributesNum!==N||s.index!==D}function _(g,M,P,D){const F={},k=M.attributes;let N=0;const X=P.getAttributes();for(const V in X)if(X[V].location>=0){let de=k[V];de===void 0&&(V==="instanceMatrix"&&g.instanceMatrix&&(de=g.instanceMatrix),V==="instanceColor"&&g.instanceColor&&(de=g.instanceColor));const le={};le.attribute=de,de&&de.data&&(le.data=de.data),F[V]=le,N++}s.attributes=F,s.attributesNum=N,s.index=D}function v(){const g=s.newAttributes;for(let M=0,P=g.length;M<P;M++)g[M]=0}function m(g){p(g,0)}function p(g,M){const P=s.newAttributes,D=s.enabledAttributes,F=s.attributeDivisors;P[g]=1,D[g]===0&&(n.enableVertexAttribArray(g),D[g]=1),F[g]!==M&&(n.vertexAttribDivisor(g,M),F[g]=M)}function S(){const g=s.newAttributes,M=s.enabledAttributes;for(let P=0,D=M.length;P<D;P++)M[P]!==g[P]&&(n.disableVertexAttribArray(P),M[P]=0)}function x(g,M,P,D,F,k,N){N===!0?n.vertexAttribIPointer(g,M,P,F,k):n.vertexAttribPointer(g,M,P,D,F,k)}function E(g,M,P,D){v();const F=D.attributes,k=P.getAttributes(),N=M.defaultAttributeValues;for(const X in k){const V=k[X];if(V.location>=0){let ce=F[X];if(ce===void 0&&(X==="instanceMatrix"&&g.instanceMatrix&&(ce=g.instanceMatrix),X==="instanceColor"&&g.instanceColor&&(ce=g.instanceColor)),ce!==void 0){const de=ce.normalized,le=ce.itemSize,Se=e.get(ce);if(Se===void 0)continue;const Ie=Se.buffer,B=Se.type,K=Se.bytesPerElement,Z=B===n.INT||B===n.UNSIGNED_INT||ce.gpuType===vc;if(ce.isInterleavedBufferAttribute){const Q=ce.data,re=Q.stride,ve=ce.offset;if(Q.isInstancedInterleavedBuffer){for(let ye=0;ye<V.locationSize;ye++)p(V.location+ye,Q.meshPerAttribute);g.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ye=0;ye<V.locationSize;ye++)m(V.location+ye);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let ye=0;ye<V.locationSize;ye++)x(V.location+ye,le/V.locationSize,B,de,re*K,(ve+le/V.locationSize*ye)*K,Z)}else{if(ce.isInstancedBufferAttribute){for(let Q=0;Q<V.locationSize;Q++)p(V.location+Q,ce.meshPerAttribute);g.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Q=0;Q<V.locationSize;Q++)m(V.location+Q);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let Q=0;Q<V.locationSize;Q++)x(V.location+Q,le/V.locationSize,B,de,le*K,le/V.locationSize*Q*K,Z)}}else if(N!==void 0){const de=N[X];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(V.location,de);break;case 3:n.vertexAttrib3fv(V.location,de);break;case 4:n.vertexAttrib4fv(V.location,de);break;default:n.vertexAttrib1fv(V.location,de)}}}}S()}function R(){A();for(const g in i){const M=i[g];for(const P in M){const D=M[P];for(const F in D)c(D[F].object),delete D[F];delete M[P]}delete i[g]}}function b(g){if(i[g.id]===void 0)return;const M=i[g.id];for(const P in M){const D=M[P];for(const F in D)c(D[F].object),delete D[F];delete M[P]}delete i[g.id]}function y(g){for(const M in i){const P=i[M];if(P[g.id]===void 0)continue;const D=P[g.id];for(const F in D)c(D[F].object),delete D[F];delete P[g.id]}}function A(){L(),a=!0,s!==r&&(s=r,u(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:L,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:y,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function R1(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function a(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function o(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let h=0;for(let _=0;_<f;_++)h+=c[_];t.update(h,i,1)}function l(u,c,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<u.length;_++)a(u[_],c[_],d[_]);else{h.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let _=0;for(let v=0;v<f;v++)_+=c[v];for(let v=0;v<d.length;v++)t.update(_,i,d[v])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function L1(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(y){return!(y!==qn&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){const A=y===fo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==Ni&&i.convert(y)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==di&&!A)}function l(y){if(y==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const y=e.get("EXT_clip_control");y.clipControlEXT(y.LOWER_LEFT_EXT,y.ZERO_TO_ONE_EXT)}const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:R,maxSamples:b}}function C1(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new vr,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=c(f,d,0)},this.setState=function(f,d,h){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const S=s?0:i,x=S*4;let E=p.clippingState||null;l.value=E,E=c(_,d,x,h);for(let R=0;R!==x;++R)E[R]=t[R];p.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,h,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const p=h+v*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,E=h;x!==v;++x,E+=4)a.copy(f[x]).applyMatrix4(S,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function P1(n){let e=new WeakMap;function t(a,o){return o===S0?a.mapping=bs:o===y0&&(a.mapping=Es),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===S0||o===y0)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Gm(l.height);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Cc extends ah{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const fs=4,ku=[.125,.215,.35,.446,.526,.582],br=20,gl=new Cc,Fu=new nt;let _l=null,vl=0,xl=0,Ml=!1;const xr=(1+Math.sqrt(5))/2,Qr=1/xr,Ou=[new U(-xr,Qr,0),new U(xr,Qr,0),new U(-Qr,0,xr),new U(Qr,0,xr),new U(0,xr,-Qr),new U(0,xr,Qr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Bu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_l,vl,xl),this._renderer.xr.enabled=Ml,e.scissorTest=!1,qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),Ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:fo,format:qn,colorSpace:rr,depthBuffer:!1},r=zu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=I1(s)),this._blurMaterial=D1(s,e,t)}return r}_compileMaterial(e){const t=new Et(this._lodPlanes[0],e);this._renderer.compile(t,gl)}_sceneToCubeUV(e,t,i,r){const o=new mn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Fu),c.toneMapping=tr,c.autoClear=!1;const h=new xn({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),_=new Et(new gn,h);let v=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,v=!0):(h.color.copy(Fu),v=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(u[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,u[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,u[p]));const x=this._cubeSize;qo(r,S*x,p>2?x:0,x,x),c.setRenderTarget(r),v&&c.render(_,o),c.render(e,o)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===bs||e.mapping===Es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Et(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;qo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,gl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ou[(r-s-1)%Ou.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Et(this._lodPlanes[r],u),d=u.uniforms,h=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*br-1),v=s/_,m=isFinite(s)?1+Math.floor(c*v):br;m>br&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const p=[];let S=0;for(let y=0;y<br;++y){const A=y/v,L=Math.exp(-A*A/2);p.push(L),y===0?S+=L:y<m&&(S+=2*L)}for(let y=0;y<p.length;y++)p[y]=p[y]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-i;const E=this._sizeLods[r],R=3*E*(r>x-fs?r-x+fs:0),b=4*(this._cubeSize-E);qo(t,R,b,3*E,2*E),l.setRenderTarget(t),l.render(f,gl)}}function I1(n){const e=[],t=[],i=[];let r=n;const s=n-fs+1+ku.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-fs?l=ku[a-n+fs-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],h=6,_=6,v=3,m=2,p=1,S=new Float32Array(v*_*h),x=new Float32Array(m*_*h),E=new Float32Array(p*_*h);for(let b=0;b<h;b++){const y=b%3*2/3-1,A=b>2?0:-1,L=[y,A,0,y+2/3,A,0,y+2/3,A+1,0,y,A,0,y+2/3,A+1,0,y,A+1,0];S.set(L,v*_*b),x.set(d,m*_*b);const g=[b,b,b,b,b,b];E.set(g,p*_*b)}const R=new si;R.setAttribute("position",new Dn(S,v)),R.setAttribute("uv",new Dn(x,m)),R.setAttribute("faceIndex",new Dn(E,p)),e.push(R),r>fs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function zu(n,e,t){const i=new Ir(n,e,t);return i.texture.mapping=La,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qo(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function D1(n,e,t){const i=new Float32Array(br),r=new U(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Hu(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Gu(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Pc(){return`

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
	`}function U1(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===S0||l===y0,c=l===bs||l===Es;if(u||c){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Bu(n)),f=u?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return u&&h&&h.height>0||c&&h&&r(h)?(t===null&&(t=new Bu(n)),f=u?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function N1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&da("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function k1(n,e,t,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const v=d.morphAttributes[_];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const h=f.morphAttributes;for(const _ in h){const v=h[_];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function u(f){const d=[],h=f.index,_=f.attributes.position;let v=0;if(h!==null){const S=h.array;v=h.version;for(let x=0,E=S.length;x<E;x+=3){const R=S[x+0],b=S[x+1],y=S[x+2];d.push(R,b,b,y,y,R)}}else if(_!==void 0){const S=_.array;v=_.version;for(let x=0,E=S.length/3-1;x<E;x+=3){const R=x+0,b=x+1,y=x+2;d.push(R,b,b,y,y,R)}}else return;const m=new(th(d)?sh:Rc)(d,1);m.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function c(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function F1(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,s,d*a),t.update(h,i,1)}function u(d,h,_){_!==0&&(n.drawElementsInstanced(i,h,s,d*a,_),t.update(h,i,_))}function c(d,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=h[p];t.update(m,i,1)}function f(d,h,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)u(d[p]/a,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,v,0,_);let p=0;for(let S=0;S<_;S++)p+=h[S];for(let S=0;S<v.length;S++)t.update(p,i,v[S])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function O1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function B1(n,e,t){const i=new WeakMap,r=new Lt;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let L=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();const h=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;h===!0&&(x=1),_===!0&&(x=2),v===!0&&(x=3);let E=o.attributes.position.count*x,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const b=new Float32Array(E*R*4*f),y=new ih(b,E,R,f);y.type=di,y.needsUpdate=!0;const A=x*4;for(let g=0;g<f;g++){const M=m[g],P=p[g],D=S[g],F=E*R*4*g;for(let k=0;k<M.count;k++){const N=k*A;h===!0&&(r.fromBufferAttribute(M,k),b[F+N+0]=r.x,b[F+N+1]=r.y,b[F+N+2]=r.z,b[F+N+3]=0),_===!0&&(r.fromBufferAttribute(P,k),b[F+N+4]=r.x,b[F+N+5]=r.y,b[F+N+6]=r.z,b[F+N+7]=0),v===!0&&(r.fromBufferAttribute(D,k),b[F+N+8]=r.x,b[F+N+9]=r.y,b[F+N+10]=r.z,b[F+N+11]=D.itemSize===4?r.w:1)}}d={count:f,texture:y,size:new at(E,R)},i.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let h=0;for(let v=0;v<u.length;v++)h+=u[v];const _=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function z1(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}class uh extends _n{constructor(e,t,i,r,s,a,o,l,u,c=_s){if(c!==_s&&c!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===_s&&(i=Pr),i===void 0&&c===Ts&&(i=ws),super(null,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Cn,this.minFilter=l!==void 0?l:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const fh=new _n,Vu=new uh(1,1),dh=new ih,hh=new Tm,ph=new lh,Wu=[],Xu=[],qu=new Float32Array(16),Yu=new Float32Array(9),$u=new Float32Array(4);function Is(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Wu[r];if(s===void 0&&(s=new Float32Array(r),Wu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pa(n,e){let t=Xu[e];t===void 0&&(t=new Int32Array(e),Xu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function H1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function G1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2fv(this.addr,e),jt(t,e)}}function V1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;n.uniform3fv(this.addr,e),jt(t,e)}}function W1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4fv(this.addr,e),jt(t,e)}}function X1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,i))return;$u.set(i),n.uniformMatrix2fv(this.addr,!1,$u),jt(t,i)}}function q1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,i))return;Yu.set(i),n.uniformMatrix3fv(this.addr,!1,Yu),jt(t,i)}}function Y1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,i))return;qu.set(i),n.uniformMatrix4fv(this.addr,!1,qu),jt(t,i)}}function $1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function K1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2iv(this.addr,e),jt(t,e)}}function j1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3iv(this.addr,e),jt(t,e)}}function Z1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4iv(this.addr,e),jt(t,e)}}function J1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Q1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;n.uniform2uiv(this.addr,e),jt(t,e)}}function ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;n.uniform3uiv(this.addr,e),jt(t,e)}}function tv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;n.uniform4uiv(this.addr,e),jt(t,e)}}function nv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Vu.compareFunction=eh,s=Vu):s=fh,t.setTexture2D(e||s,r)}function iv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||hh,r)}function rv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ph,r)}function sv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||dh,r)}function ov(n){switch(n){case 5126:return H1;case 35664:return G1;case 35665:return V1;case 35666:return W1;case 35674:return X1;case 35675:return q1;case 35676:return Y1;case 5124:case 35670:return $1;case 35667:case 35671:return K1;case 35668:case 35672:return j1;case 35669:case 35673:return Z1;case 5125:return J1;case 36294:return Q1;case 36295:return ev;case 36296:return tv;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return sv}}function av(n,e){n.uniform1fv(this.addr,e)}function lv(n,e){const t=Is(e,this.size,2);n.uniform2fv(this.addr,t)}function cv(n,e){const t=Is(e,this.size,3);n.uniform3fv(this.addr,t)}function uv(n,e){const t=Is(e,this.size,4);n.uniform4fv(this.addr,t)}function fv(n,e){const t=Is(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function dv(n,e){const t=Is(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function hv(n,e){const t=Is(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function pv(n,e){n.uniform1iv(this.addr,e)}function mv(n,e){n.uniform2iv(this.addr,e)}function gv(n,e){n.uniform3iv(this.addr,e)}function _v(n,e){n.uniform4iv(this.addr,e)}function vv(n,e){n.uniform1uiv(this.addr,e)}function xv(n,e){n.uniform2uiv(this.addr,e)}function Mv(n,e){n.uniform3uiv(this.addr,e)}function Sv(n,e){n.uniform4uiv(this.addr,e)}function yv(n,e,t){const i=this.cache,r=e.length,s=Pa(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||fh,s[a])}function bv(n,e,t){const i=this.cache,r=e.length,s=Pa(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||hh,s[a])}function Ev(n,e,t){const i=this.cache,r=e.length,s=Pa(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ph,s[a])}function wv(n,e,t){const i=this.cache,r=e.length,s=Pa(t,r);Kt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||dh,s[a])}function Tv(n){switch(n){case 5126:return av;case 35664:return lv;case 35665:return cv;case 35666:return uv;case 35674:return fv;case 35675:return dv;case 35676:return hv;case 5124:case 35670:return pv;case 35667:case 35671:return mv;case 35668:case 35672:return gv;case 35669:case 35673:return _v;case 5125:return vv;case 36294:return xv;case 36295:return Mv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return yv;case 35679:case 36299:case 36307:return bv;case 35680:case 36300:case 36308:case 36293:return Ev;case 36289:case 36303:case 36311:case 36292:return wv}}class Av{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ov(t.type)}}class Rv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tv(t.type)}}class Lv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Sl=/(\w+)(\])?(\[|\.)?/g;function Ku(n,e){n.seq.push(e),n.map[e.id]=e}function Cv(n,e,t){const i=n.name,r=i.length;for(Sl.lastIndex=0;;){const s=Sl.exec(i),a=Sl.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Ku(t,u===void 0?new Av(o,n,e):new Rv(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Lv(o),Ku(t,f)),t=f}}}class ha{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Cv(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function ju(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Pv=37297;let Iv=0;function Dv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Uv(n){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(n);let i;switch(e===t?i="":e===ya&&t===Sa?i="LinearDisplayP3ToLinearSRGB":e===Sa&&t===ya&&(i="LinearSRGBToLinearDisplayP3"),n){case rr:case Ca:return[i,"LinearTransferOETF"];case Fn:case Ec:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Zu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Dv(n.getShaderSource(e),a)}else return r}function Nv(n,e){const t=Uv(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function kv(n,e){let t;switch(e){case Fp:t="Linear";break;case Op:t="Reinhard";break;case Bp:t="Cineon";break;case _c:t="ACESFilmic";break;case Hp:t="AgX";break;case Gp:t="Neutral";break;case zp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Yo=new U;function Fv(){pt.getLuminanceCoefficients(Yo);const n=Yo.x.toFixed(4),e=Yo.y.toFixed(4),t=Yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ov(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function Bv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function js(n){return n!==""}function Ju(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hv=/^[ \t]*#include +<([\w\d./]+)>/gm;function j0(n){return n.replace(Hv,Vv)}const Gv=new Map;function Vv(n,e){let t=Qe[e];if(t===void 0){const i=Gv.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return j0(t)}const Wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ef(n){return n.replace(Wv,Xv)}function Xv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function qv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===zd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===gp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function Yv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case bs:case Es:e="ENVMAP_TYPE_CUBE";break;case La:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $v(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function Kv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hd:e="ENVMAP_BLENDING_MULTIPLY";break;case Np:e="ENVMAP_BLENDING_MIX";break;case kp:e="ENVMAP_BLENDING_ADD";break}return e}function jv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Zv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=qv(t),u=Yv(t),c=$v(t),f=Kv(t),d=jv(t),h=Ov(t),_=Bv(s),v=r.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(js).join(`
`),p.length>0&&(p+=`
`)):(m=[tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?Qe.tonemapping_pars_fragment:"",t.toneMapping!==tr?kv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Nv("linearToOutputTexel",t.outputColorSpace),Fv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(js).join(`
`)),a=j0(a),a=Ju(a,t),a=Qu(a,t),o=j0(o),o=Ju(o,t),o=Qu(o,t),a=ef(a),o=ef(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===_u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=S+m+a,E=S+p+o,R=ju(r,r.VERTEX_SHADER,x),b=ju(r,r.FRAGMENT_SHADER,E);r.attachShader(v,R),r.attachShader(v,b),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function y(M){if(n.debug.checkShaderErrors){const P=r.getProgramInfoLog(v).trim(),D=r.getShaderInfoLog(R).trim(),F=r.getShaderInfoLog(b).trim();let k=!0,N=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,R,b);else{const X=Zu(r,R,"vertex"),V=Zu(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+P+`
`+X+`
`+V)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(D===""||F==="")&&(N=!1);N&&(M.diagnostics={runnable:k,programLog:P,vertexShader:{log:D,prefix:m},fragmentShader:{log:F,prefix:p}})}r.deleteShader(R),r.deleteShader(b),A=new ha(r,v),L=zv(r,v)}let A;this.getUniforms=function(){return A===void 0&&y(this),A};let L;this.getAttributes=function(){return L===void 0&&y(this),L};let g=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=r.getProgramParameter(v,Pv)),g},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Iv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=b,this}let Jv=0;class Qv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ex(e),t.set(e,i)),i}}class ex{constructor(e){this.id=Jv++,this.code=e,this.usedTimes=0}}function tx(n,e,t,i,r,s,a){const o=new Ac,l=new Qv,u=new Set,c=[],f=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,h=r.vertexTextures;let _=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return u.add(g),g===0?"uv":`uv${g}`}function p(g,M,P,D,F){const k=D.fog,N=F.geometry,X=g.isMeshStandardMaterial?D.environment:null,V=(g.isMeshStandardMaterial?t:e).get(g.envMap||X),ce=V&&V.mapping===La?V.image.height:null,de=v[g.type];g.precision!==null&&(_=r.getMaxPrecision(g.precision),_!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",_,"instead."));const le=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Se=le!==void 0?le.length:0;let Ie=0;N.morphAttributes.position!==void 0&&(Ie=1),N.morphAttributes.normal!==void 0&&(Ie=2),N.morphAttributes.color!==void 0&&(Ie=3);let B,K,Z,Q;if(de){const it=ui[de];B=it.vertexShader,K=it.fragmentShader}else B=g.vertexShader,K=g.fragmentShader,l.update(g),Z=l.getVertexShaderID(g),Q=l.getFragmentShaderID(g);const re=n.getRenderTarget(),ve=F.isInstancedMesh===!0,ye=F.isBatchedMesh===!0,We=!!g.map,$e=!!g.matcap,O=!!V,Ot=!!g.aoMap,Je=!!g.lightMap,tt=!!g.bumpMap,ze=!!g.normalMap,ct=!!g.displacementMap,ke=!!g.emissiveMap,C=!!g.metalnessMap,w=!!g.roughnessMap,Y=g.anisotropy>0,ee=g.clearcoat>0,ae=g.dispersion>0,te=g.iridescence>0,Pe=g.sheen>0,pe=g.transmission>0,me=Y&&!!g.anisotropyMap,Ke=ee&&!!g.clearcoatMap,he=ee&&!!g.clearcoatNormalMap,ge=ee&&!!g.clearcoatRoughnessMap,Fe=te&&!!g.iridescenceMap,He=te&&!!g.iridescenceThicknessMap,Te=Pe&&!!g.sheenColorMap,Ye=Pe&&!!g.sheenRoughnessMap,Ge=!!g.specularMap,ht=!!g.specularColorMap,G=!!g.specularIntensityMap,xe=pe&&!!g.transmissionMap,j=pe&&!!g.thicknessMap,se=!!g.gradientMap,I=!!g.alphaMap,$=g.alphaTest>0,ne=!!g.alphaHash,Re=!!g.extensions;let qe=tr;g.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(qe=n.toneMapping);const De={shaderID:de,shaderType:g.type,shaderName:g.name,vertexShader:B,fragmentShader:K,defines:g.defines,customVertexShaderID:Z,customFragmentShaderID:Q,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:_,batching:ye,batchingColor:ye&&F._colorsTexture!==null,instancing:ve,instancingColor:ve&&F.instanceColor!==null,instancingMorph:ve&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:rr,alphaToCoverage:!!g.alphaToCoverage,map:We,matcap:$e,envMap:O,envMapMode:O&&V.mapping,envMapCubeUVHeight:ce,aoMap:Ot,lightMap:Je,bumpMap:tt,normalMap:ze,displacementMap:h&&ct,emissiveMap:ke,normalMapObjectSpace:ze&&g.normalMapType===Yp,normalMapTangentSpace:ze&&g.normalMapType===Qd,metalnessMap:C,roughnessMap:w,anisotropy:Y,anisotropyMap:me,clearcoat:ee,clearcoatMap:Ke,clearcoatNormalMap:he,clearcoatRoughnessMap:ge,dispersion:ae,iridescence:te,iridescenceMap:Fe,iridescenceThicknessMap:He,sheen:Pe,sheenColorMap:Te,sheenRoughnessMap:Ye,specularMap:Ge,specularColorMap:ht,specularIntensityMap:G,transmission:pe,transmissionMap:xe,thicknessMap:j,gradientMap:se,opaque:g.transparent===!1&&g.blending===gs&&g.alphaToCoverage===!1,alphaMap:I,alphaTest:$,alphaHash:ne,combine:g.combine,mapUv:We&&m(g.map.channel),aoMapUv:Ot&&m(g.aoMap.channel),lightMapUv:Je&&m(g.lightMap.channel),bumpMapUv:tt&&m(g.bumpMap.channel),normalMapUv:ze&&m(g.normalMap.channel),displacementMapUv:ct&&m(g.displacementMap.channel),emissiveMapUv:ke&&m(g.emissiveMap.channel),metalnessMapUv:C&&m(g.metalnessMap.channel),roughnessMapUv:w&&m(g.roughnessMap.channel),anisotropyMapUv:me&&m(g.anisotropyMap.channel),clearcoatMapUv:Ke&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&m(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:He&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&m(g.sheenRoughnessMap.channel),specularMapUv:Ge&&m(g.specularMap.channel),specularColorMapUv:ht&&m(g.specularColorMap.channel),specularIntensityMapUv:G&&m(g.specularIntensityMap.channel),transmissionMapUv:xe&&m(g.transmissionMap.channel),thicknessMapUv:j&&m(g.thicknessMap.channel),alphaMapUv:I&&m(g.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ze||Y),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(We||I),fog:!!k,useFog:g.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ie,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:qe,decodeVideoTexture:We&&g.map.isVideoTexture===!0&&pt.getTransfer(g.map.colorSpace)===At,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ri,flipSided:g.side===In,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Re&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&g.extensions.multiDraw===!0||ye)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return De.vertexUv1s=u.has(1),De.vertexUv2s=u.has(2),De.vertexUv3s=u.has(3),u.clear(),De}function S(g){const M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(const P in g.defines)M.push(P),M.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(x(M,g),E(M,g),M.push(n.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function x(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapCubeUVHeight),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.morphAttributeCount),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function E(g,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),g.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),g.push(o.mask)}function R(g){const M=v[g.type];let P;if(M){const D=ui[M];P=Om.clone(D.uniforms)}else P=g.uniforms;return P}function b(g,M){let P;for(let D=0,F=c.length;D<F;D++){const k=c[D];if(k.cacheKey===M){P=k,++P.usedTimes;break}}return P===void 0&&(P=new Zv(n,M,g,s),c.push(P)),P}function y(g){if(--g.usedTimes===0){const M=c.indexOf(g);c[M]=c[c.length-1],c.pop(),g.destroy()}}function A(g){l.remove(g)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:S,getUniforms:R,acquireProgram:b,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:L}}function nx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function ix(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function nf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function rf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,h,_,v,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function o(f,d,h,_,v,m){const p=a(f,d,h,_,v,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(f,d,h,_,v,m){const p=a(f,d,h,_,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function u(f,d){t.length>1&&t.sort(f||ix),i.length>1&&i.sort(d||nf),r.length>1&&r.sort(d||nf)}function c(){for(let f=e,d=n.length;f<d;f++){const h=n[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:u}}function rx(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new rf,n.set(i,[a])):r>=s.length?(a=new rf,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function sx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new nt};break;case"SpotLight":t={position:new U,direction:new U,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function ox(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ax=0;function lx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cx(n){const e=new sx,t=ox(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,s=new Ze,a=new Ze;function o(u){let c=0,f=0,d=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let h=0,_=0,v=0,m=0,p=0,S=0,x=0,E=0,R=0,b=0,y=0;u.sort(lx);for(let L=0,g=u.length;L<g;L++){const M=u[L],P=M.color,D=M.intensity,F=M.distance,k=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)c+=P.r*D,f+=P.g*D,d+=P.b*D;else if(M.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(M.sh.coefficients[N],D);y++}else if(M.isDirectionalLight){const N=e.get(M);if(N.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const X=M.shadow,V=t.get(M);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=k,i.directionalShadowMatrix[h]=M.shadow.matrix,S++}i.directional[h]=N,h++}else if(M.isSpotLight){const N=e.get(M);N.position.setFromMatrixPosition(M.matrixWorld),N.color.copy(P).multiplyScalar(D),N.distance=F,N.coneCos=Math.cos(M.angle),N.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),N.decay=M.decay,i.spot[v]=N;const X=M.shadow;if(M.map&&(i.spotLightMap[R]=M.map,R++,X.updateMatrices(M),M.castShadow&&b++),i.spotLightMatrix[v]=X.matrix,M.castShadow){const V=t.get(M);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,i.spotShadow[v]=V,i.spotShadowMap[v]=k,E++}v++}else if(M.isRectAreaLight){const N=e.get(M);N.color.copy(P).multiplyScalar(D),N.halfWidth.set(M.width*.5,0,0),N.halfHeight.set(0,M.height*.5,0),i.rectArea[m]=N,m++}else if(M.isPointLight){const N=e.get(M);if(N.color.copy(M.color).multiplyScalar(M.intensity),N.distance=M.distance,N.decay=M.decay,M.castShadow){const X=M.shadow,V=t.get(M);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=k,i.pointShadowMatrix[_]=M.shadow.matrix,x++}i.point[_]=N,_++}else if(M.isHemisphereLight){const N=e.get(M);N.skyColor.copy(M.color).multiplyScalar(D),N.groundColor.copy(M.groundColor).multiplyScalar(D),i.hemi[p]=N,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const A=i.hash;(A.directionalLength!==h||A.pointLength!==_||A.spotLength!==v||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==S||A.numPointShadows!==x||A.numSpotShadows!==E||A.numSpotMaps!==R||A.numLightProbes!==y)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=E+R-b,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=y,A.directionalLength=h,A.pointLength=_,A.spotLength=v,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=S,A.numPointShadows=x,A.numSpotShadows=E,A.numSpotMaps=R,A.numLightProbes=y,i.version=ax++)}function l(u,c){let f=0,d=0,h=0,_=0,v=0;const m=c.matrixWorldInverse;for(let p=0,S=u.length;p<S;p++){const x=u[p];if(x.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(x.isSpotLight){const E=i.spot[h];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(x.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function sf(n){const e=new cx(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function a(c){i.push(c)}function o(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function ux(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new sf(n),e.set(r,[o])):s>=a.length?(o=new sf(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class fx extends po{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dx extends po{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,px=`uniform sampler2D shadow_pass;
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
}`;function mx(n,e,t){let i=new Lc;const r=new at,s=new at,a=new Lt,o=new fx({depthPacking:qp}),l=new dx,u={},c=t.maxTextureSize,f={[Ui]:In,[In]:Ui,[Ri]:Ri},d=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:hx,fragmentShader:px}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const _=new si;_.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Et(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zd;let p=this.type;this.render=function(b,y,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const L=n.getRenderTarget(),g=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),P=n.state;P.setBlending(er),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const D=p!==Ai&&this.type===Ai,F=p===Ai&&this.type!==Ai;for(let k=0,N=b.length;k<N;k++){const X=b[k],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ce=V.getFrameExtents();if(r.multiply(ce),s.copy(V.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/ce.x),r.x=s.x*ce.x,V.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/ce.y),r.y=s.y*ce.y,V.mapSize.y=s.y)),V.map===null||D===!0||F===!0){const le=this.type!==Ai?{minFilter:Cn,magFilter:Cn}:{};V.map!==null&&V.map.dispose(),V.map=new Ir(r.x,r.y,le),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const de=V.getViewportCount();for(let le=0;le<de;le++){const Se=V.getViewport(le);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),P.viewport(a),V.updateMatrices(X,le),i=V.getFrustum(),E(y,A,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===Ai&&S(V,A),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(L,g,M)};function S(b,y){const A=e.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ir(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(y,null,A,d,v,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(y,null,A,h,v,null)}function x(b,y,A,L){let g=null;const M=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(M!==void 0)g=M;else if(g=A.isPointLight===!0?l:o,n.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const P=g.uuid,D=y.uuid;let F=u[P];F===void 0&&(F={},u[P]=F);let k=F[D];k===void 0&&(k=g.clone(),F[D]=k,y.addEventListener("dispose",R)),g=k}if(g.visible=y.visible,g.wireframe=y.wireframe,L===Ai?g.side=y.shadowSide!==null?y.shadowSide:y.side:g.side=y.shadowSide!==null?y.shadowSide:f[y.side],g.alphaMap=y.alphaMap,g.alphaTest=y.alphaTest,g.map=y.map,g.clipShadows=y.clipShadows,g.clippingPlanes=y.clippingPlanes,g.clipIntersection=y.clipIntersection,g.displacementMap=y.displacementMap,g.displacementScale=y.displacementScale,g.displacementBias=y.displacementBias,g.wireframeLinewidth=y.wireframeLinewidth,g.linewidth=y.linewidth,A.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const P=n.properties.get(g);P.light=A}return g}function E(b,y,A,L,g){if(b.visible===!1)return;if(b.layers.test(y.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&g===Ai)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);const D=e.update(b),F=b.material;if(Array.isArray(F)){const k=D.groups;for(let N=0,X=k.length;N<X;N++){const V=k[N],ce=F[V.materialIndex];if(ce&&ce.visible){const de=x(b,ce,L,g);b.onBeforeShadow(n,b,y,A,D,de,V),n.renderBufferDirect(A,null,D,de,b,V),b.onAfterShadow(n,b,y,A,D,de,V)}}}else if(F.visible){const k=x(b,F,L,g);b.onBeforeShadow(n,b,y,A,D,k,null),n.renderBufferDirect(A,null,D,k,b,null),b.onAfterShadow(n,b,y,A,D,k,null)}}const P=b.children;for(let D=0,F=P.length;D<F;D++)E(P[D],y,A,L,g)}function R(b){b.target.removeEventListener("dispose",R);for(const A in u){const L=u[A],g=b.target.uuid;g in L&&(L[g].dispose(),delete L[g])}}}const gx={[p0]:m0,[g0]:x0,[_0]:M0,[ys]:v0,[m0]:p0,[x0]:g0,[M0]:_0,[v0]:ys};function _x(n){function e(){let G=!1;const xe=new Lt;let j=null;const se=new Lt(0,0,0,0);return{setMask:function(I){j!==I&&!G&&(n.colorMask(I,I,I,I),j=I)},setLocked:function(I){G=I},setClear:function(I,$,ne,Re,qe){qe===!0&&(I*=Re,$*=Re,ne*=Re),xe.set(I,$,ne,Re),se.equals(xe)===!1&&(n.clearColor(I,$,ne,Re),se.copy(xe))},reset:function(){G=!1,j=null,se.set(-1,0,0,0)}}}function t(){let G=!1,xe=!1,j=null,se=null,I=null;return{setReversed:function($){xe=$},setTest:function($){$?Z(n.DEPTH_TEST):Q(n.DEPTH_TEST)},setMask:function($){j!==$&&!G&&(n.depthMask($),j=$)},setFunc:function($){if(xe&&($=gx[$]),se!==$){switch($){case p0:n.depthFunc(n.NEVER);break;case m0:n.depthFunc(n.ALWAYS);break;case g0:n.depthFunc(n.LESS);break;case ys:n.depthFunc(n.LEQUAL);break;case _0:n.depthFunc(n.EQUAL);break;case v0:n.depthFunc(n.GEQUAL);break;case x0:n.depthFunc(n.GREATER);break;case M0:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=$}},setLocked:function($){G=$},setClear:function($){I!==$&&(n.clearDepth($),I=$)},reset:function(){G=!1,j=null,se=null,I=null}}}function i(){let G=!1,xe=null,j=null,se=null,I=null,$=null,ne=null,Re=null,qe=null;return{setTest:function(De){G||(De?Z(n.STENCIL_TEST):Q(n.STENCIL_TEST))},setMask:function(De){xe!==De&&!G&&(n.stencilMask(De),xe=De)},setFunc:function(De,it,kt){(j!==De||se!==it||I!==kt)&&(n.stencilFunc(De,it,kt),j=De,se=it,I=kt)},setOp:function(De,it,kt){($!==De||ne!==it||Re!==kt)&&(n.stencilOp(De,it,kt),$=De,ne=it,Re=kt)},setLocked:function(De){G=De},setClear:function(De){qe!==De&&(n.clearStencil(De),qe=De)},reset:function(){G=!1,xe=null,j=null,se=null,I=null,$=null,ne=null,Re=null,qe=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,d=[],h=null,_=!1,v=null,m=null,p=null,S=null,x=null,E=null,R=null,b=new nt(0,0,0),y=0,A=!1,L=null,g=null,M=null,P=null,D=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,N=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=N>=1):X.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=N>=2);let V=null,ce={};const de=n.getParameter(n.SCISSOR_BOX),le=n.getParameter(n.VIEWPORT),Se=new Lt().fromArray(de),Ie=new Lt().fromArray(le);function B(G,xe,j,se){const I=new Uint8Array(4),$=n.createTexture();n.bindTexture(G,$),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ne=0;ne<j;ne++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,se,0,n.RGBA,n.UNSIGNED_BYTE,I):n.texImage2D(xe+ne,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,I);return $}const K={};K[n.TEXTURE_2D]=B(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=B(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=B(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=B(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Z(n.DEPTH_TEST),s.setFunc(ys),Je(!1),tt(fu),Z(n.CULL_FACE),O(er);function Z(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function Q(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function re(G,xe){return c[G]!==xe?(n.bindFramebuffer(G,xe),c[G]=xe,G===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=xe),G===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function ve(G,xe){let j=d,se=!1;if(G){j=f.get(xe),j===void 0&&(j=[],f.set(xe,j));const I=G.textures;if(j.length!==I.length||j[0]!==n.COLOR_ATTACHMENT0){for(let $=0,ne=I.length;$<ne;$++)j[$]=n.COLOR_ATTACHMENT0+$;j.length=I.length,se=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,se=!0);se&&n.drawBuffers(j)}function ye(G){return h!==G?(n.useProgram(G),h=G,!0):!1}const We={[yr]:n.FUNC_ADD,[vp]:n.FUNC_SUBTRACT,[xp]:n.FUNC_REVERSE_SUBTRACT};We[Mp]=n.MIN,We[Sp]=n.MAX;const $e={[yp]:n.ZERO,[bp]:n.ONE,[Ep]:n.SRC_COLOR,[d0]:n.SRC_ALPHA,[Cp]:n.SRC_ALPHA_SATURATE,[Rp]:n.DST_COLOR,[Tp]:n.DST_ALPHA,[wp]:n.ONE_MINUS_SRC_COLOR,[h0]:n.ONE_MINUS_SRC_ALPHA,[Lp]:n.ONE_MINUS_DST_COLOR,[Ap]:n.ONE_MINUS_DST_ALPHA,[Pp]:n.CONSTANT_COLOR,[Ip]:n.ONE_MINUS_CONSTANT_COLOR,[Dp]:n.CONSTANT_ALPHA,[Up]:n.ONE_MINUS_CONSTANT_ALPHA};function O(G,xe,j,se,I,$,ne,Re,qe,De){if(G===er){_===!0&&(Q(n.BLEND),_=!1);return}if(_===!1&&(Z(n.BLEND),_=!0),G!==_p){if(G!==v||De!==A){if((m!==yr||x!==yr)&&(n.blendEquation(n.FUNC_ADD),m=yr,x=yr),De)switch(G){case gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ro:n.blendFunc(n.ONE,n.ONE);break;case du:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ro:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case du:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}p=null,S=null,E=null,R=null,b.set(0,0,0),y=0,v=G,A=De}return}I=I||xe,$=$||j,ne=ne||se,(xe!==m||I!==x)&&(n.blendEquationSeparate(We[xe],We[I]),m=xe,x=I),(j!==p||se!==S||$!==E||ne!==R)&&(n.blendFuncSeparate($e[j],$e[se],$e[$],$e[ne]),p=j,S=se,E=$,R=ne),(Re.equals(b)===!1||qe!==y)&&(n.blendColor(Re.r,Re.g,Re.b,qe),b.copy(Re),y=qe),v=G,A=!1}function Ot(G,xe){G.side===Ri?Q(n.CULL_FACE):Z(n.CULL_FACE);let j=G.side===In;xe&&(j=!j),Je(j),G.blending===gs&&G.transparent===!1?O(er):O(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),s.setFunc(G.depthFunc),s.setTest(G.depthTest),s.setMask(G.depthWrite),r.setMask(G.colorWrite);const se=G.stencilWrite;a.setTest(se),se&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ct(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):Q(n.SAMPLE_ALPHA_TO_COVERAGE)}function Je(G){L!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),L=G)}function tt(G){G!==pp?(Z(n.CULL_FACE),G!==g&&(G===fu?n.cullFace(n.BACK):G===mp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Q(n.CULL_FACE),g=G}function ze(G){G!==M&&(k&&n.lineWidth(G),M=G)}function ct(G,xe,j){G?(Z(n.POLYGON_OFFSET_FILL),(P!==xe||D!==j)&&(n.polygonOffset(xe,j),P=xe,D=j)):Q(n.POLYGON_OFFSET_FILL)}function ke(G){G?Z(n.SCISSOR_TEST):Q(n.SCISSOR_TEST)}function C(G){G===void 0&&(G=n.TEXTURE0+F-1),V!==G&&(n.activeTexture(G),V=G)}function w(G,xe,j){j===void 0&&(V===null?j=n.TEXTURE0+F-1:j=V);let se=ce[j];se===void 0&&(se={type:void 0,texture:void 0},ce[j]=se),(se.type!==G||se.texture!==xe)&&(V!==j&&(n.activeTexture(j),V=j),n.bindTexture(G,xe||K[G]),se.type=G,se.texture=xe)}function Y(){const G=ce[V];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ae(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function te(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ke(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function he(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function He(G){Se.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Se.copy(G))}function Te(G){Ie.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Ie.copy(G))}function Ye(G,xe){let j=l.get(xe);j===void 0&&(j=new WeakMap,l.set(xe,j));let se=j.get(G);se===void 0&&(se=n.getUniformBlockIndex(xe,G.name),j.set(G,se))}function Ge(G,xe){const se=l.get(xe).get(G);o.get(xe)!==se&&(n.uniformBlockBinding(xe,se,G.__bindingPointIndex),o.set(xe,se))}function ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},V=null,ce={},c={},f=new WeakMap,d=[],h=null,_=!1,v=null,m=null,p=null,S=null,x=null,E=null,R=null,b=new nt(0,0,0),y=0,A=!1,L=null,g=null,M=null,P=null,D=null,Se.set(0,0,n.canvas.width,n.canvas.height),Ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:Z,disable:Q,bindFramebuffer:re,drawBuffers:ve,useProgram:ye,setBlending:O,setMaterial:Ot,setFlipSided:Je,setCullFace:tt,setLineWidth:ze,setPolygonOffset:ct,setScissorTest:ke,activeTexture:C,bindTexture:w,unbindTexture:Y,compressedTexImage2D:ee,compressedTexImage3D:ae,texImage2D:ge,texImage3D:Fe,updateUBOMapping:Ye,uniformBlockBinding:Ge,texStorage2D:Ke,texStorage3D:he,texSubImage2D:te,texSubImage3D:Pe,compressedTexSubImage2D:pe,compressedTexSubImage3D:me,scissor:He,viewport:Te,reset:ht}}function of(n,e,t,i){const r=vx(i);switch(t){case qd:return n*e;case $d:return n*e;case Kd:return n*e*2;case jd:return n*e/r.components*r.byteLength;case Sc:return n*e/r.components*r.byteLength;case Zd:return n*e*2/r.components*r.byteLength;case yc:return n*e*2/r.components*r.byteLength;case Yd:return n*e*3/r.components*r.byteLength;case qn:return n*e*4/r.components*r.byteLength;case bc:return n*e*4/r.components*r.byteLength;case aa:case la:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ca:case ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case w0:case A0:return Math.max(n,16)*Math.max(e,8)/4;case E0:case T0:return Math.max(n,8)*Math.max(e,8)/2;case R0:case L0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case C0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case P0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case I0:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case D0:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case U0:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case N0:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case k0:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case F0:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case O0:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case B0:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case z0:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case H0:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case G0:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case V0:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case W0:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case fa:case X0:case q0:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Jd:case Y0:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $0:case K0:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vx(n){switch(n){case Ni:case Vd:return{byteLength:1,components:1};case so:case Wd:case fo:return{byteLength:2,components:1};case xc:case Mc:return{byteLength:2,components:4};case Pr:case vc:case di:return{byteLength:4,components:1};case Xd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function xx(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new at,c=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,w){return h?new OffscreenCanvas(C,w):Ea("canvas")}function v(C,w,Y){let ee=1;const ae=ke(C);if((ae.width>Y||ae.height>Y)&&(ee=Y/Math.max(ae.width,ae.height)),ee<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const te=Math.floor(ee*ae.width),Pe=Math.floor(ee*ae.height);f===void 0&&(f=_(te,Pe));const pe=w?_(te,Pe):f;return pe.width=te,pe.height=Pe,pe.getContext("2d").drawImage(C,0,0,te,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+te+"x"+Pe+")."),pe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==Cn&&C.minFilter!==Xn}function p(C){n.generateMipmap(C)}function S(C,w,Y,ee,ae=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let te=w;if(w===n.RED&&(Y===n.FLOAT&&(te=n.R32F),Y===n.HALF_FLOAT&&(te=n.R16F),Y===n.UNSIGNED_BYTE&&(te=n.R8)),w===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(te=n.R8UI),Y===n.UNSIGNED_SHORT&&(te=n.R16UI),Y===n.UNSIGNED_INT&&(te=n.R32UI),Y===n.BYTE&&(te=n.R8I),Y===n.SHORT&&(te=n.R16I),Y===n.INT&&(te=n.R32I)),w===n.RG&&(Y===n.FLOAT&&(te=n.RG32F),Y===n.HALF_FLOAT&&(te=n.RG16F),Y===n.UNSIGNED_BYTE&&(te=n.RG8)),w===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(te=n.RG8UI),Y===n.UNSIGNED_SHORT&&(te=n.RG16UI),Y===n.UNSIGNED_INT&&(te=n.RG32UI),Y===n.BYTE&&(te=n.RG8I),Y===n.SHORT&&(te=n.RG16I),Y===n.INT&&(te=n.RG32I)),w===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(te=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(te=n.RGB16UI),Y===n.UNSIGNED_INT&&(te=n.RGB32UI),Y===n.BYTE&&(te=n.RGB8I),Y===n.SHORT&&(te=n.RGB16I),Y===n.INT&&(te=n.RGB32I)),w===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(te=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(te=n.RGBA16UI),Y===n.UNSIGNED_INT&&(te=n.RGBA32UI),Y===n.BYTE&&(te=n.RGBA8I),Y===n.SHORT&&(te=n.RGBA16I),Y===n.INT&&(te=n.RGBA32I)),w===n.RGB&&Y===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),w===n.RGBA){const Pe=ae?Ma:pt.getTransfer(ee);Y===n.FLOAT&&(te=n.RGBA32F),Y===n.HALF_FLOAT&&(te=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(te=Pe===At?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function x(C,w){let Y;return C?w===null||w===Pr||w===ws?Y=n.DEPTH24_STENCIL8:w===di?Y=n.DEPTH32F_STENCIL8:w===so&&(Y=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Pr||w===ws?Y=n.DEPTH_COMPONENT24:w===di?Y=n.DEPTH_COMPONENT32F:w===so&&(Y=n.DEPTH_COMPONENT16),Y}function E(C,w){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Cn&&C.minFilter!==Xn?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function R(C){const w=C.target;w.removeEventListener("dispose",R),y(w),w.isVideoTexture&&c.delete(w)}function b(C){const w=C.target;w.removeEventListener("dispose",b),L(w)}function y(C){const w=i.get(C);if(w.__webglInit===void 0)return;const Y=C.source,ee=d.get(Y);if(ee){const ae=ee[w.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&A(C),Object.keys(ee).length===0&&d.delete(Y)}i.remove(C)}function A(C){const w=i.get(C);n.deleteTexture(w.__webglTexture);const Y=C.source,ee=d.get(Y);delete ee[w.__cacheKey],a.memory.textures--}function L(C){const w=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(w.__webglFramebuffer[ee]))for(let ae=0;ae<w.__webglFramebuffer[ee].length;ae++)n.deleteFramebuffer(w.__webglFramebuffer[ee][ae]);else n.deleteFramebuffer(w.__webglFramebuffer[ee]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[ee])}else{if(Array.isArray(w.__webglFramebuffer))for(let ee=0;ee<w.__webglFramebuffer.length;ee++)n.deleteFramebuffer(w.__webglFramebuffer[ee]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ee=0;ee<w.__webglColorRenderbuffer.length;ee++)w.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[ee]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Y=C.textures;for(let ee=0,ae=Y.length;ee<ae;ee++){const te=i.get(Y[ee]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),a.memory.textures--),i.remove(Y[ee])}i.remove(C)}let g=0;function M(){g=0}function P(){const C=g;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),g+=1,C}function D(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function F(C,w){const Y=i.get(C);if(C.isVideoTexture&&ze(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(Y,C,w);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+w)}function k(C,w){const Y=i.get(C);if(C.version>0&&Y.__version!==C.version){Ie(Y,C,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+w)}function N(C,w){const Y=i.get(C);if(C.version>0&&Y.__version!==C.version){Ie(Y,C,w);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+w)}function X(C,w){const Y=i.get(C);if(C.version>0&&Y.__version!==C.version){B(Y,C,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+w)}const V={[xa]:n.REPEAT,[Zi]:n.CLAMP_TO_EDGE,[b0]:n.MIRRORED_REPEAT},ce={[Cn]:n.NEAREST,[Wp]:n.NEAREST_MIPMAP_NEAREST,[Ao]:n.NEAREST_MIPMAP_LINEAR,[Xn]:n.LINEAR,[$a]:n.LINEAR_MIPMAP_NEAREST,[Ji]:n.LINEAR_MIPMAP_LINEAR},de={[$p]:n.NEVER,[em]:n.ALWAYS,[Kp]:n.LESS,[eh]:n.LEQUAL,[jp]:n.EQUAL,[Qp]:n.GEQUAL,[Zp]:n.GREATER,[Jp]:n.NOTEQUAL};function le(C,w){if(w.type===di&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Xn||w.magFilter===$a||w.magFilter===Ao||w.magFilter===Ji||w.minFilter===Xn||w.minFilter===$a||w.minFilter===Ao||w.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,V[w.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,V[w.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,V[w.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ce[w.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ce[w.minFilter]),w.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,de[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Cn||w.minFilter!==Ao&&w.minFilter!==Ji||w.type===di&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Se(C,w){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",R));const ee=w.source;let ae=d.get(ee);ae===void 0&&(ae={},d.set(ee,ae));const te=D(w);if(te!==C.__cacheKey){ae[te]===void 0&&(ae[te]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ae[te].usedTimes++;const Pe=ae[C.__cacheKey];Pe!==void 0&&(ae[C.__cacheKey].usedTimes--,Pe.usedTimes===0&&A(w)),C.__cacheKey=te,C.__webglTexture=ae[te].texture}return Y}function Ie(C,w,Y){let ee=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ee=n.TEXTURE_3D);const ae=Se(C,w),te=w.source;t.bindTexture(ee,C.__webglTexture,n.TEXTURE0+Y);const Pe=i.get(te);if(te.version!==Pe.__version||ae===!0){t.activeTexture(n.TEXTURE0+Y);const pe=pt.getPrimaries(pt.workingColorSpace),me=w.colorSpace===ji?null:pt.getPrimaries(w.colorSpace),Ke=w.colorSpace===ji||pe===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let he=v(w.image,!1,r.maxTextureSize);he=ct(w,he);const ge=s.convert(w.format,w.colorSpace),Fe=s.convert(w.type);let He=S(w.internalFormat,ge,Fe,w.colorSpace,w.isVideoTexture);le(ee,w);let Te;const Ye=w.mipmaps,Ge=w.isVideoTexture!==!0,ht=Pe.__version===void 0||ae===!0,G=te.dataReady,xe=E(w,he);if(w.isDepthTexture)He=x(w.format===Ts,w.type),ht&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,He,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,He,he.width,he.height,0,ge,Fe,null));else if(w.isDataTexture)if(Ye.length>0){Ge&&ht&&t.texStorage2D(n.TEXTURE_2D,xe,He,Ye[0].width,Ye[0].height);for(let j=0,se=Ye.length;j<se;j++)Te=Ye[j],Ge?G&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,Te.width,Te.height,ge,Fe,Te.data):t.texImage2D(n.TEXTURE_2D,j,He,Te.width,Te.height,0,ge,Fe,Te.data);w.generateMipmaps=!1}else Ge?(ht&&t.texStorage2D(n.TEXTURE_2D,xe,He,he.width,he.height),G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he.width,he.height,ge,Fe,he.data)):t.texImage2D(n.TEXTURE_2D,0,He,he.width,he.height,0,ge,Fe,he.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ge&&ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,He,Ye[0].width,Ye[0].height,he.depth);for(let j=0,se=Ye.length;j<se;j++)if(Te=Ye[j],w.format!==qn)if(ge!==null)if(Ge){if(G)if(w.layerUpdates.size>0){const I=of(Te.width,Te.height,w.format,w.type);for(const $ of w.layerUpdates){const ne=Te.data.subarray($*I/Te.data.BYTES_PER_ELEMENT,($+1)*I/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,$,Te.width,Te.height,1,ge,ne,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,Te.width,Te.height,he.depth,ge,Te.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,He,Te.width,Te.height,he.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,Te.width,Te.height,he.depth,ge,Fe,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,He,Te.width,Te.height,he.depth,0,ge,Fe,Te.data)}else{Ge&&ht&&t.texStorage2D(n.TEXTURE_2D,xe,He,Ye[0].width,Ye[0].height);for(let j=0,se=Ye.length;j<se;j++)Te=Ye[j],w.format!==qn?ge!==null?Ge?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,Te.width,Te.height,ge,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,j,He,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?G&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,Te.width,Te.height,ge,Fe,Te.data):t.texImage2D(n.TEXTURE_2D,j,He,Te.width,Te.height,0,ge,Fe,Te.data)}else if(w.isDataArrayTexture)if(Ge){if(ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,xe,He,he.width,he.height,he.depth),G)if(w.layerUpdates.size>0){const j=of(he.width,he.height,w.format,w.type);for(const se of w.layerUpdates){const I=he.data.subarray(se*j/he.data.BYTES_PER_ELEMENT,(se+1)*j/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,he.width,he.height,1,ge,Fe,I)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ge,Fe,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,He,he.width,he.height,he.depth,0,ge,Fe,he.data);else if(w.isData3DTexture)Ge?(ht&&t.texStorage3D(n.TEXTURE_3D,xe,He,he.width,he.height,he.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ge,Fe,he.data)):t.texImage3D(n.TEXTURE_3D,0,He,he.width,he.height,he.depth,0,ge,Fe,he.data);else if(w.isFramebufferTexture){if(ht)if(Ge)t.texStorage2D(n.TEXTURE_2D,xe,He,he.width,he.height);else{let j=he.width,se=he.height;for(let I=0;I<xe;I++)t.texImage2D(n.TEXTURE_2D,I,He,j,se,0,ge,Fe,null),j>>=1,se>>=1}}else if(Ye.length>0){if(Ge&&ht){const j=ke(Ye[0]);t.texStorage2D(n.TEXTURE_2D,xe,He,j.width,j.height)}for(let j=0,se=Ye.length;j<se;j++)Te=Ye[j],Ge?G&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ge,Fe,Te):t.texImage2D(n.TEXTURE_2D,j,He,ge,Fe,Te);w.generateMipmaps=!1}else if(Ge){if(ht){const j=ke(he);t.texStorage2D(n.TEXTURE_2D,xe,He,j.width,j.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Fe,he)}else t.texImage2D(n.TEXTURE_2D,0,He,ge,Fe,he);m(w)&&p(ee),Pe.__version=te.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function B(C,w,Y){if(w.image.length!==6)return;const ee=Se(C,w),ae=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+Y);const te=i.get(ae);if(ae.version!==te.__version||ee===!0){t.activeTexture(n.TEXTURE0+Y);const Pe=pt.getPrimaries(pt.workingColorSpace),pe=w.colorSpace===ji?null:pt.getPrimaries(w.colorSpace),me=w.colorSpace===ji||Pe===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ke=w.isCompressedTexture||w.image[0].isCompressedTexture,he=w.image[0]&&w.image[0].isDataTexture,ge=[];for(let se=0;se<6;se++)!Ke&&!he?ge[se]=v(w.image[se],!0,r.maxCubemapSize):ge[se]=he?w.image[se].image:w.image[se],ge[se]=ct(w,ge[se]);const Fe=ge[0],He=s.convert(w.format,w.colorSpace),Te=s.convert(w.type),Ye=S(w.internalFormat,He,Te,w.colorSpace),Ge=w.isVideoTexture!==!0,ht=te.__version===void 0||ee===!0,G=ae.dataReady;let xe=E(w,Fe);le(n.TEXTURE_CUBE_MAP,w);let j;if(Ke){Ge&&ht&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ye,Fe.width,Fe.height);for(let se=0;se<6;se++){j=ge[se].mipmaps;for(let I=0;I<j.length;I++){const $=j[I];w.format!==qn?He!==null?Ge?G&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,0,0,$.width,$.height,He,$.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,Ye,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,0,0,$.width,$.height,He,Te,$.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,I,Ye,$.width,$.height,0,He,Te,$.data)}}}else{if(j=w.mipmaps,Ge&&ht){j.length>0&&xe++;const se=ke(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ye,se.width,se.height)}for(let se=0;se<6;se++)if(he){Ge?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ge[se].width,ge[se].height,He,Te,ge[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ye,ge[se].width,ge[se].height,0,He,Te,ge[se].data);for(let I=0;I<j.length;I++){const ne=j[I].image[se].image;Ge?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,0,0,ne.width,ne.height,He,Te,ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,Ye,ne.width,ne.height,0,He,Te,ne.data)}}else{Ge?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,He,Te,ge[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ye,He,Te,ge[se]);for(let I=0;I<j.length;I++){const $=j[I];Ge?G&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,0,0,He,Te,$.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,I+1,Ye,He,Te,$.image[se])}}}m(w)&&p(n.TEXTURE_CUBE_MAP),te.__version=ae.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function K(C,w,Y,ee,ae,te){const Pe=s.convert(Y.format,Y.colorSpace),pe=s.convert(Y.type),me=S(Y.internalFormat,Pe,pe,Y.colorSpace);if(!i.get(w).__hasExternalTextures){const he=Math.max(1,w.width>>te),ge=Math.max(1,w.height>>te);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,te,me,he,ge,w.depth,0,Pe,pe,null):t.texImage2D(ae,te,me,he,ge,0,Pe,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),tt(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,ae,i.get(Y).__webglTexture,0,Je(w)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,ae,i.get(Y).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(C,w,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,C),w.depthBuffer){const ee=w.depthTexture,ae=ee&&ee.isDepthTexture?ee.type:null,te=x(w.stencilBuffer,ae),Pe=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=Je(w);tt(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,te,w.width,w.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,te,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,te,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Pe,n.RENDERBUFFER,C)}else{const ee=w.textures;for(let ae=0;ae<ee.length;ae++){const te=ee[ae],Pe=s.convert(te.format,te.colorSpace),pe=s.convert(te.type),me=S(te.internalFormat,Pe,pe,te.colorSpace),Ke=Je(w);Y&&tt(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,me,w.width,w.height):tt(w)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ke,me,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,me,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Q(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),F(w.depthTexture,0);const ee=i.get(w.depthTexture).__webglTexture,ae=Je(w);if(w.depthTexture.format===_s)tt(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(w.depthTexture.format===Ts)tt(w)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function re(C){const w=i.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const ee=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ee){const ae=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ee.removeEventListener("dispose",ae)};ee.addEventListener("dispose",ae),w.__depthDisposeCallback=ae}w.__boundDepthTexture=ee}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Q(w.__webglFramebuffer,C)}else if(Y){w.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ee]),w.__webglDepthbuffer[ee]===void 0)w.__webglDepthbuffer[ee]=n.createRenderbuffer(),Z(w.__webglDepthbuffer[ee],C,!1);else{const ae=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=w.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,te)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Z(w.__webglDepthbuffer,C,!1);else{const ee=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,ae)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(C,w,Y){const ee=i.get(C);w!==void 0&&K(ee.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&re(C)}function ye(C){const w=C.texture,Y=i.get(C),ee=i.get(w);C.addEventListener("dispose",b);const ae=C.textures,te=C.isWebGLCubeRenderTarget===!0,Pe=ae.length>1;if(Pe||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=w.version,a.memory.textures++),te){Y.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[pe]=[];for(let me=0;me<w.mipmaps.length;me++)Y.__webglFramebuffer[pe][me]=n.createFramebuffer()}else Y.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let pe=0;pe<w.mipmaps.length;pe++)Y.__webglFramebuffer[pe]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Pe)for(let pe=0,me=ae.length;pe<me;pe++){const Ke=i.get(ae[pe]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&tt(C)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let pe=0;pe<ae.length;pe++){const me=ae[pe];Y.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[pe]);const Ke=s.convert(me.format,me.colorSpace),he=s.convert(me.type),ge=S(me.internalFormat,Ke,he,me.colorSpace,C.isXRRenderTarget===!0),Fe=Je(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,ge,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,Y.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Z(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),le(n.TEXTURE_CUBE_MAP,w);for(let pe=0;pe<6;pe++)if(w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)K(Y.__webglFramebuffer[pe][me],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,me);else K(Y.__webglFramebuffer[pe],C,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(w)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let pe=0,me=ae.length;pe<me;pe++){const Ke=ae[pe],he=i.get(Ke);t.bindTexture(n.TEXTURE_2D,he.__webglTexture),le(n.TEXTURE_2D,Ke),K(Y.__webglFramebuffer,C,Ke,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),m(Ke)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(pe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ee.__webglTexture),le(pe,w),w.mipmaps&&w.mipmaps.length>0)for(let me=0;me<w.mipmaps.length;me++)K(Y.__webglFramebuffer[me],C,w,n.COLOR_ATTACHMENT0,pe,me);else K(Y.__webglFramebuffer,C,w,n.COLOR_ATTACHMENT0,pe,0);m(w)&&p(pe),t.unbindTexture()}C.depthBuffer&&re(C)}function We(C){const w=C.textures;for(let Y=0,ee=w.length;Y<ee;Y++){const ae=w[Y];if(m(ae)){const te=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Pe=i.get(ae).__webglTexture;t.bindTexture(te,Pe),p(te),t.unbindTexture()}}}const $e=[],O=[];function Ot(C){if(C.samples>0){if(tt(C)===!1){const w=C.textures,Y=C.width,ee=C.height;let ae=n.COLOR_BUFFER_BIT;const te=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=i.get(C),pe=w.length>1;if(pe)for(let me=0;me<w.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let me=0;me<w.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[me]);const Ke=i.get(w[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ke,0)}n.blitFramebuffer(0,0,Y,ee,0,0,Y,ee,ae,n.NEAREST),l===!0&&($e.length=0,O.length=0,$e.push(n.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&($e.push(te),O.push(te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,O)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let me=0;me<w.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,Pe.__webglColorRenderbuffer[me]);const Ke=i.get(w[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Ke,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const w=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function Je(C){return Math.min(r.maxSamples,C.samples)}function tt(C){const w=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ze(C){const w=a.render.frame;c.get(C)!==w&&(c.set(C,w),C.update())}function ct(C,w){const Y=C.colorSpace,ee=C.format,ae=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==rr&&Y!==ji&&(pt.getTransfer(Y)===At?(ee!==qn||ae!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),w}function ke(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=P,this.resetTextureUnits=M,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=N,this.setTextureCube=X,this.rebindTextures=ve,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=K,this.useMultisampledRTT=tt}function Mx(n,e){function t(i,r=ji){let s;const a=pt.getTransfer(r);if(i===Ni)return n.UNSIGNED_BYTE;if(i===xc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Mc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Vd)return n.BYTE;if(i===Wd)return n.SHORT;if(i===so)return n.UNSIGNED_SHORT;if(i===vc)return n.INT;if(i===Pr)return n.UNSIGNED_INT;if(i===di)return n.FLOAT;if(i===fo)return n.HALF_FLOAT;if(i===qd)return n.ALPHA;if(i===Yd)return n.RGB;if(i===qn)return n.RGBA;if(i===$d)return n.LUMINANCE;if(i===Kd)return n.LUMINANCE_ALPHA;if(i===_s)return n.DEPTH_COMPONENT;if(i===Ts)return n.DEPTH_STENCIL;if(i===jd)return n.RED;if(i===Sc)return n.RED_INTEGER;if(i===Zd)return n.RG;if(i===yc)return n.RG_INTEGER;if(i===bc)return n.RGBA_INTEGER;if(i===aa||i===la||i===ca||i===ua)if(a===At)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===aa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===aa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ua)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===E0||i===w0||i===T0||i===A0)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===E0)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===w0)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===T0)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===A0)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===R0||i===L0||i===C0)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===R0||i===L0)return a===At?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===C0)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===P0||i===I0||i===D0||i===U0||i===N0||i===k0||i===F0||i===O0||i===B0||i===z0||i===H0||i===G0||i===V0||i===W0)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===P0)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===I0)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===D0)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===U0)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===N0)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===k0)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===F0)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===O0)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===B0)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===z0)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===H0)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===G0)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===V0)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===W0)return a===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fa||i===X0||i===q0)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===fa)return a===At?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===X0)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===q0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jd||i===Y0||i===$0||i===K0)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===fa)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Y0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$0)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===K0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ws?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Sx extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Tn extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yx={type:"move"};class yl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(u,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),h=.02,_=.005;u.inputState.pinching&&d>h+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=h-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Tn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const bx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ex=`
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

}`;class wx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new _n,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ir({vertexShader:bx,fragmentShader:Ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new mo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tx extends Cs{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,f=null,d=null,h=null,_=null;const v=new wx,m=t.getContextAttributes();let p=null,S=null;const x=[],E=[],R=new at;let b=null;const y=new mn;y.layers.enable(1),y.viewport=new Lt;const A=new mn;A.layers.enable(2),A.viewport=new Lt;const L=[y,A],g=new Sx;g.layers.enable(1),g.layers.enable(2);let M=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=x[B];return K===void 0&&(K=new yl,x[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=x[B];return K===void 0&&(K=new yl,x[B]=K),K.getGripSpace()},this.getHand=function(B){let K=x[B];return K===void 0&&(K=new yl,x[B]=K),K.getHandSpace()};function D(B){const K=E.indexOf(B.inputSource);if(K===-1)return;const Z=x[K];Z!==void 0&&(Z.update(B.inputSource,B.frame,u||a),Z.dispatchEvent({type:B.type,data:B.inputSource}))}function F(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",k);for(let B=0;B<x.length;B++){const K=E[B];K!==null&&(E[B]=null,x[B].disconnect(K))}M=null,P=null,v.reset(),e.setRenderTarget(p),h=null,d=null,f=null,r=null,S=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(B){u=B},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",F),r.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const K={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Ir(h.framebufferWidth,h.framebufferHeight,{format:qn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let K=null,Z=null,Q=null;m.depth&&(Q=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=m.stencil?Ts:_s,Z=m.stencil?ws:Pr);const re={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(re),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Ir(d.textureWidth,d.textureHeight,{format:qn,type:Ni,depthTexture:new uh(d.textureWidth,d.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function k(B){for(let K=0;K<B.removed.length;K++){const Z=B.removed[K],Q=E.indexOf(Z);Q>=0&&(E[Q]=null,x[Q].disconnect(Z))}for(let K=0;K<B.added.length;K++){const Z=B.added[K];let Q=E.indexOf(Z);if(Q===-1){for(let ve=0;ve<x.length;ve++)if(ve>=E.length){E.push(Z),Q=ve;break}else if(E[ve]===null){E[ve]=Z,Q=ve;break}if(Q===-1)break}const re=x[Q];re&&re.connect(Z)}}const N=new U,X=new U;function V(B,K,Z){N.setFromMatrixPosition(K.matrixWorld),X.setFromMatrixPosition(Z.matrixWorld);const Q=N.distanceTo(X),re=K.projectionMatrix.elements,ve=Z.projectionMatrix.elements,ye=re[14]/(re[10]-1),We=re[14]/(re[10]+1),$e=(re[9]+1)/re[5],O=(re[9]-1)/re[5],Ot=(re[8]-1)/re[0],Je=(ve[8]+1)/ve[0],tt=ye*Ot,ze=ye*Je,ct=Q/(-Ot+Je),ke=ct*-Ot;if(K.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ke),B.translateZ(ct),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),re[10]===-1)B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const C=ye+ct,w=We+ct,Y=tt-ke,ee=ze+(Q-ke),ae=$e*We/w*C,te=O*We/w*C;B.projectionMatrix.makePerspective(Y,ee,ae,te,C,w),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function ce(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let K=B.near,Z=B.far;v.texture!==null&&(v.depthNear>0&&(K=v.depthNear),v.depthFar>0&&(Z=v.depthFar)),g.near=A.near=y.near=K,g.far=A.far=y.far=Z,(M!==g.near||P!==g.far)&&(r.updateRenderState({depthNear:g.near,depthFar:g.far}),M=g.near,P=g.far);const Q=B.parent,re=g.cameras;ce(g,Q);for(let ve=0;ve<re.length;ve++)ce(re[ve],Q);re.length===2?V(g,y,A):g.projectionMatrix.copy(y.projectionMatrix),de(B,g,Q)};function de(B,K,Z){Z===null?B.matrix.copy(K.matrixWorld):(B.matrix.copy(Z.matrixWorld),B.matrix.invert(),B.matrix.multiply(K.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(K.projectionMatrix),B.projectionMatrixInverse.copy(K.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=oo*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=B)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(g)};let le=null;function Se(B,K){if(c=K.getViewerPose(u||a),_=K,c!==null){const Z=c.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Q=!1;Z.length!==g.cameras.length&&(g.cameras.length=0,Q=!0);for(let ve=0;ve<Z.length;ve++){const ye=Z[ve];let We=null;if(h!==null)We=h.getViewport(ye);else{const O=f.getViewSubImage(d,ye);We=O.viewport,ve===0&&(e.setRenderTargetTextures(S,O.colorTexture,d.ignoreDepthValues?void 0:O.depthStencilTexture),e.setRenderTarget(S))}let $e=L[ve];$e===void 0&&($e=new mn,$e.layers.enable(ve),$e.viewport=new Lt,L[ve]=$e),$e.matrix.fromArray(ye.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(ye.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(We.x,We.y,We.width,We.height),ve===0&&(g.matrix.copy($e.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),Q===!0&&g.cameras.push($e)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")){const ve=f.getDepthInformation(Z[0]);ve&&ve.isValid&&ve.texture&&v.init(e,ve,r.renderState)}}for(let Z=0;Z<x.length;Z++){const Q=E[Z],re=x[Z];Q!==null&&re!==void 0&&re.update(Q,K,u||a)}le&&le(B,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),_=null}const Ie=new ch;Ie.setAnimationLoop(Se),this.setAnimationLoop=function(B){le=B},this.dispose=function(){}}}const dr=new on,Ax=new Ze;function Rx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,oh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,x,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,x):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===In&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===In&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),x=S.envMap,E=S.envMapRotation;x&&(m.envMap.value=x,dr.copy(E),dr.x*=-1,dr.y*=-1,dr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),m.envMapRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(dr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===In&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Lx(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){const E=x.program;i.uniformBlockBinding(S,E)}function u(S,x){let E=r[S.id];E===void 0&&(_(S),E=c(S),r[S.id]=E,S.addEventListener("dispose",m));const R=x.program;i.updateUBOMapping(S,R);const b=e.render.frame;s[S.id]!==b&&(d(S),s[S.id]=b)}function c(S){const x=f();S.__bindingPointIndex=x;const E=n.createBuffer(),R=S.__size,b=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,R,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,E),E}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=r[S.id],E=S.uniforms,R=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let b=0,y=E.length;b<y;b++){const A=Array.isArray(E[b])?E[b]:[E[b]];for(let L=0,g=A.length;L<g;L++){const M=A[L];if(h(M,b,L,R)===!0){const P=M.__offset,D=Array.isArray(M.value)?M.value:[M.value];let F=0;for(let k=0;k<D.length;k++){const N=D[k],X=v(N);typeof N=="number"||typeof N=="boolean"?(M.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,P+F,M.__data)):N.isMatrix3?(M.__data[0]=N.elements[0],M.__data[1]=N.elements[1],M.__data[2]=N.elements[2],M.__data[3]=0,M.__data[4]=N.elements[3],M.__data[5]=N.elements[4],M.__data[6]=N.elements[5],M.__data[7]=0,M.__data[8]=N.elements[6],M.__data[9]=N.elements[7],M.__data[10]=N.elements[8],M.__data[11]=0):(N.toArray(M.__data,F),F+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,M.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(S,x,E,R){const b=S.value,y=x+"_"+E;if(R[y]===void 0)return typeof b=="number"||typeof b=="boolean"?R[y]=b:R[y]=b.clone(),!0;{const A=R[y];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return R[y]=b,!0}else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function _(S){const x=S.uniforms;let E=0;const R=16;for(let y=0,A=x.length;y<A;y++){const L=Array.isArray(x[y])?x[y]:[x[y]];for(let g=0,M=L.length;g<M;g++){const P=L[g],D=Array.isArray(P.value)?P.value:[P.value];for(let F=0,k=D.length;F<k;F++){const N=D[F],X=v(N),V=E%R,ce=V%X.boundary,de=V+ce;E+=ce,de!==0&&R-de<X.storage&&(E+=R-de),P.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=E,E+=X.storage}}}const b=E%R;return b>0&&(E+=R-b),S.__size=E,S.__cache={},this}function v(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:u,dispose:p}}class Ic{constructor(e={}){const{canvas:t=_m(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const h=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this.toneMapping=tr,this.toneMappingExposure=1;const x=this;let E=!1,R=0,b=0,y=null,A=-1,L=null;const g=new Lt,M=new Lt;let P=null;const D=new nt(0);let F=0,k=t.width,N=t.height,X=1,V=null,ce=null;const de=new Lt(0,0,k,N),le=new Lt(0,0,k,N);let Se=!1;const Ie=new Lc;let B=!1,K=!1;const Z=new Ze,Q=new Ze,re=new U,ve=new Lt,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function $e(){return y===null?X:1}let O=i;function Ot(T,z){return t.getContext(T,z)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gc}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",$,!1),O===null){const z="webgl2";if(O=Ot(z,T),O===null)throw Ot(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Je,tt,ze,ct,ke,C,w,Y,ee,ae,te,Pe,pe,me,Ke,he,ge,Fe,He,Te,Ye,Ge,ht,G;function xe(){Je=new N1(O),Je.init(),Ge=new Mx(O,Je),tt=new L1(O,Je,e,Ge),ze=new _x(O),tt.reverseDepthBuffer&&ze.buffers.depth.setReversed(!0),ct=new O1(O),ke=new nx,C=new xx(O,Je,ze,ke,tt,Ge,ct),w=new P1(x),Y=new U1(x),ee=new Xm(O),ht=new A1(O,ee),ae=new k1(O,ee,ct,ht),te=new z1(O,ae,ee,ct),He=new B1(O,tt,C),he=new C1(ke),Pe=new tx(x,w,Y,Je,tt,ht,he),pe=new Rx(x,ke),me=new rx,Ke=new ux(Je),Fe=new T1(x,w,Y,ze,te,d,l),ge=new mx(x,te,tt),G=new Lx(O,ct,tt,ze),Te=new R1(O,Je,ct),Ye=new F1(O,Je,ct),ct.programs=Pe.programs,x.capabilities=tt,x.extensions=Je,x.properties=ke,x.renderLists=me,x.shadowMap=ge,x.state=ze,x.info=ct}xe();const j=new Tx(x,O);this.xr=j,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const T=Je.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Je.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(T){T!==void 0&&(X=T,this.setSize(k,N,!1))},this.getSize=function(T){return T.set(k,N)},this.setSize=function(T,z,q=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,N=z,t.width=Math.floor(T*X),t.height=Math.floor(z*X),q===!0&&(t.style.width=T+"px",t.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(k*X,N*X).floor()},this.setDrawingBufferSize=function(T,z,q){k=T,N=z,X=q,t.width=Math.floor(T*q),t.height=Math.floor(z*q),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(g)},this.getViewport=function(T){return T.copy(de)},this.setViewport=function(T,z,q,W){T.isVector4?de.set(T.x,T.y,T.z,T.w):de.set(T,z,q,W),ze.viewport(g.copy(de).multiplyScalar(X).round())},this.getScissor=function(T){return T.copy(le)},this.setScissor=function(T,z,q,W){T.isVector4?le.set(T.x,T.y,T.z,T.w):le.set(T,z,q,W),ze.scissor(M.copy(le).multiplyScalar(X).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(T){ze.setScissorTest(Se=T)},this.setOpaqueSort=function(T){V=T},this.setTransparentSort=function(T){ce=T},this.getClearColor=function(T){return T.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(T=!0,z=!0,q=!0){let W=0;if(T){let H=!1;if(y!==null){const oe=y.texture.format;H=oe===bc||oe===yc||oe===Sc}if(H){const oe=y.texture.type,_e=oe===Ni||oe===Pr||oe===so||oe===ws||oe===xc||oe===Mc,Ee=Fe.getClearColor(),Ce=Fe.getClearAlpha(),Oe=Ee.r,Be=Ee.g,be=Ee.b;_e?(h[0]=Oe,h[1]=Be,h[2]=be,h[3]=Ce,O.clearBufferuiv(O.COLOR,0,h)):(_[0]=Oe,_[1]=Be,_[2]=be,_[3]=Ce,O.clearBufferiv(O.COLOR,0,_))}else W|=O.COLOR_BUFFER_BIT}z&&(W|=O.DEPTH_BUFFER_BIT,O.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),q&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",$,!1),me.dispose(),Ke.dispose(),ke.dispose(),w.dispose(),Y.dispose(),te.dispose(),ht.dispose(),G.dispose(),Pe.dispose(),j.dispose(),j.removeEventListener("sessionstart",Pt),j.removeEventListener("sessionend",ln),Bt.stop()};function se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=ct.autoReset,z=ge.enabled,q=ge.autoUpdate,W=ge.needsUpdate,H=ge.type;xe(),ct.autoReset=T,ge.enabled=z,ge.autoUpdate=q,ge.needsUpdate=W,ge.type=H}function $(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ne(T){const z=T.target;z.removeEventListener("dispose",ne),Re(z)}function Re(T){qe(T),ke.remove(T)}function qe(T){const z=ke.get(T).programs;z!==void 0&&(z.forEach(function(q){Pe.releaseProgram(q)}),T.isShaderMaterial&&Pe.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,q,W,H,oe){z===null&&(z=ye);const _e=H.isMesh&&H.matrixWorld.determinant()<0,Ee=ut(T,z,q,W,H);ze.setMaterial(W,_e);let Ce=q.index,Oe=1;if(W.wireframe===!0){if(Ce=ae.getWireframeAttribute(q),Ce===void 0)return;Oe=2}const Be=q.drawRange,be=q.attributes.position;let dt=Be.start*Oe,gt=(Be.start+Be.count)*Oe;oe!==null&&(dt=Math.max(dt,oe.start*Oe),gt=Math.min(gt,(oe.start+oe.count)*Oe)),Ce!==null?(dt=Math.max(dt,0),gt=Math.min(gt,Ce.count)):be!=null&&(dt=Math.max(dt,0),gt=Math.min(gt,be.count));const Tt=gt-dt;if(Tt<0||Tt===1/0)return;ht.setup(H,W,Ee,q,Ce);let nn,st=Te;if(Ce!==null&&(nn=ee.get(Ce),st=Ye,st.setIndex(nn)),H.isMesh)W.wireframe===!0?(ze.setLineWidth(W.wireframeLinewidth*$e()),st.setMode(O.LINES)):st.setMode(O.TRIANGLES);else if(H.isLine){let Ue=W.linewidth;Ue===void 0&&(Ue=1),ze.setLineWidth(Ue*$e()),H.isLineSegments?st.setMode(O.LINES):H.isLineLoop?st.setMode(O.LINE_LOOP):st.setMode(O.LINE_STRIP)}else H.isPoints?st.setMode(O.POINTS):H.isSprite&&st.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)st.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))st.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ue=H._multiDrawStarts,zt=H._multiDrawCounts,je=H._multiDrawCount,qt=Ce?ee.get(Ce).bytesPerElement:1,Bi=ke.get(W).currentProgram.getUniforms();for(let Wt=0;Wt<je;Wt++)Bi.setValue(O,"_gl_DrawID",Wt),st.render(Ue[Wt]/qt,zt[Wt])}else if(H.isInstancedMesh)st.renderInstances(dt,Tt,H.count);else if(q.isInstancedBufferGeometry){const Ue=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,zt=Math.min(q.instanceCount,Ue);st.renderInstances(dt,Tt,zt)}else st.render(dt,Tt)};function De(T,z,q){T.transparent===!0&&T.side===Ri&&T.forceSinglePass===!1?(T.side=In,T.needsUpdate=!0,Ve(T,z,q),T.side=Ui,T.needsUpdate=!0,Ve(T,z,q),T.side=Ri):Ve(T,z,q)}this.compile=function(T,z,q=null){q===null&&(q=T),m=Ke.get(q),m.init(z),S.push(m),q.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),T!==q&&T.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const W=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const oe=H.material;if(oe)if(Array.isArray(oe))for(let _e=0;_e<oe.length;_e++){const Ee=oe[_e];De(Ee,q,H),W.add(Ee)}else De(oe,q,H),W.add(oe)}),S.pop(),m=null,W},this.compileAsync=function(T,z,q=null){const W=this.compile(T,z,q);return new Promise(H=>{function oe(){if(W.forEach(function(_e){ke.get(_e).currentProgram.isReady()&&W.delete(_e)}),W.size===0){H(T);return}setTimeout(oe,10)}Je.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let it=null;function kt(T){it&&it(T)}function Pt(){Bt.stop()}function ln(){Bt.start()}const Bt=new ch;Bt.setAnimationLoop(kt),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(T){it=T,j.setAnimationLoop(T),T===null?Bt.stop():Bt.start()},j.addEventListener("sessionstart",Pt),j.addEventListener("sessionend",ln),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(z),z=j.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,z,y),m=Ke.get(T,S.length),m.init(z),S.push(m),Q.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ie.setFromProjectionMatrix(Q),K=this.localClippingEnabled,B=he.init(this.clippingPlanes,K),v=me.get(T,p.length),v.init(),p.push(v),j.enabled===!0&&j.isPresenting===!0){const oe=x.xr.getDepthSensingMesh();oe!==null&&J(oe,z,-1/0,x.sortObjects)}J(T,z,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(V,ce),We=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,We&&Fe.addToRenderList(v,T),this.info.render.frame++,B===!0&&he.beginShadows();const q=m.state.shadowsArray;ge.render(q,T,z),B===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=v.opaque,H=v.transmissive;if(m.setupLights(),z.isArrayCamera){const oe=z.cameras;if(H.length>0)for(let _e=0,Ee=oe.length;_e<Ee;_e++){const Ce=oe[_e];ue(W,H,T,Ce)}We&&Fe.render(T);for(let _e=0,Ee=oe.length;_e<Ee;_e++){const Ce=oe[_e];ie(v,T,Ce,Ce.viewport)}}else H.length>0&&ue(W,H,T,z),We&&Fe.render(T),ie(v,T,z);y!==null&&(C.updateMultisampleRenderTarget(y),C.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(x,T,z),ht.resetDefaultState(),A=-1,L=null,S.pop(),S.length>0?(m=S[S.length-1],B===!0&&he.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function J(T,z,q,W){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ie.intersectsSprite(T)){W&&ve.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Q);const _e=te.update(T),Ee=T.material;Ee.visible&&v.push(T,_e,Ee,q,ve.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ie.intersectsObject(T))){const _e=te.update(T),Ee=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ve.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),ve.copy(_e.boundingSphere.center)),ve.applyMatrix4(T.matrixWorld).applyMatrix4(Q)),Array.isArray(Ee)){const Ce=_e.groups;for(let Oe=0,Be=Ce.length;Oe<Be;Oe++){const be=Ce[Oe],dt=Ee[be.materialIndex];dt&&dt.visible&&v.push(T,_e,dt,q,ve.z,be)}}else Ee.visible&&v.push(T,_e,Ee,q,ve.z,null)}}const oe=T.children;for(let _e=0,Ee=oe.length;_e<Ee;_e++)J(oe[_e],z,q,W)}function ie(T,z,q,W){const H=T.opaque,oe=T.transmissive,_e=T.transparent;m.setupLightsView(q),B===!0&&he.setGlobalState(x.clippingPlanes,q),W&&ze.viewport(g.copy(W)),H.length>0&&fe(H,z,q),oe.length>0&&fe(oe,z,q),_e.length>0&&fe(_e,z,q),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function ue(T,z,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Ir(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?fo:Ni,minFilter:Ji,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const oe=m.state.transmissionRenderTarget[W.id],_e=W.viewport||g;oe.setSize(_e.z,_e.w);const Ee=x.getRenderTarget();x.setRenderTarget(oe),x.getClearColor(D),F=x.getClearAlpha(),F<1&&x.setClearColor(16777215,.5),x.clear(),We&&Fe.render(q);const Ce=x.toneMapping;x.toneMapping=tr;const Oe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),B===!0&&he.setGlobalState(x.clippingPlanes,W),fe(T,q,W),C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let be=0,dt=z.length;be<dt;be++){const gt=z[be],Tt=gt.object,nn=gt.geometry,st=gt.material,Ue=gt.group;if(st.side===Ri&&Tt.layers.test(W.layers)){const zt=st.side;st.side=In,st.needsUpdate=!0,Le(Tt,q,W,nn,st,Ue),st.side=zt,st.needsUpdate=!0,Be=!0}}Be===!0&&(C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe))}x.setRenderTarget(Ee),x.setClearColor(D,F),Oe!==void 0&&(W.viewport=Oe),x.toneMapping=Ce}function fe(T,z,q){const W=z.isScene===!0?z.overrideMaterial:null;for(let H=0,oe=T.length;H<oe;H++){const _e=T[H],Ee=_e.object,Ce=_e.geometry,Oe=W===null?_e.material:W,Be=_e.group;Ee.layers.test(q.layers)&&Le(Ee,z,q,Ce,Oe,Be)}}function Le(T,z,q,W,H,oe){T.onBeforeRender(x,z,q,W,H,oe),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(x,z,q,W,T,oe),H.transparent===!0&&H.side===Ri&&H.forceSinglePass===!1?(H.side=In,H.needsUpdate=!0,x.renderBufferDirect(q,z,W,H,T,oe),H.side=Ui,H.needsUpdate=!0,x.renderBufferDirect(q,z,W,H,T,oe),H.side=Ri):x.renderBufferDirect(q,z,W,H,T,oe),T.onAfterRender(x,z,q,W,H,oe)}function Ve(T,z,q){z.isScene!==!0&&(z=ye);const W=ke.get(T),H=m.state.lights,oe=m.state.shadowsArray,_e=H.state.version,Ee=Pe.getParameters(T,H.state,oe,z,q),Ce=Pe.getProgramCacheKey(Ee);let Oe=W.programs;W.environment=T.isMeshStandardMaterial?z.environment:null,W.fog=z.fog,W.envMap=(T.isMeshStandardMaterial?Y:w).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",ne),Oe=new Map,W.programs=Oe);let Be=Oe.get(Ce);if(Be!==void 0){if(W.currentProgram===Be&&W.lightsStateVersion===_e)return xt(T,Ee),Be}else Ee.uniforms=Pe.getUniforms(T),T.onBeforeCompile(Ee,x),Be=Pe.acquireProgram(Ee,Ce),Oe.set(Ce,Be),W.uniforms=Ee.uniforms;const be=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=he.uniform),xt(T,Ee),W.needsLights=Vt(T),W.lightsStateVersion=_e,W.needsLights&&(be.ambientLightColor.value=H.state.ambient,be.lightProbe.value=H.state.probe,be.directionalLights.value=H.state.directional,be.directionalLightShadows.value=H.state.directionalShadow,be.spotLights.value=H.state.spot,be.spotLightShadows.value=H.state.spotShadow,be.rectAreaLights.value=H.state.rectArea,be.ltc_1.value=H.state.rectAreaLTC1,be.ltc_2.value=H.state.rectAreaLTC2,be.pointLights.value=H.state.point,be.pointLightShadows.value=H.state.pointShadow,be.hemisphereLights.value=H.state.hemi,be.directionalShadowMap.value=H.state.directionalShadowMap,be.directionalShadowMatrix.value=H.state.directionalShadowMatrix,be.spotShadowMap.value=H.state.spotShadowMap,be.spotLightMatrix.value=H.state.spotLightMatrix,be.spotLightMap.value=H.state.spotLightMap,be.pointShadowMap.value=H.state.pointShadowMap,be.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Be,W.uniformsList=null,Be}function lt(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=ha.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function xt(T,z){const q=ke.get(T);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function ut(T,z,q,W,H){z.isScene!==!0&&(z=ye),C.resetTextureUnits();const oe=z.fog,_e=W.isMeshStandardMaterial?z.environment:null,Ee=y===null?x.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:rr,Ce=(W.isMeshStandardMaterial?Y:w).get(W.envMap||_e),Oe=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Be=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),be=!!q.morphAttributes.position,dt=!!q.morphAttributes.normal,gt=!!q.morphAttributes.color;let Tt=tr;W.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(Tt=x.toneMapping);const nn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,st=nn!==void 0?nn.length:0,Ue=ke.get(W),zt=m.state.lights;if(B===!0&&(K===!0||T!==L)){const Zt=T===L&&W.id===A;he.setState(W,T,Zt)}let je=!1;W.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==zt.state.version||Ue.outputColorSpace!==Ee||H.isBatchedMesh&&Ue.batching===!1||!H.isBatchedMesh&&Ue.batching===!0||H.isBatchedMesh&&Ue.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ue.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ue.instancing===!1||!H.isInstancedMesh&&Ue.instancing===!0||H.isSkinnedMesh&&Ue.skinning===!1||!H.isSkinnedMesh&&Ue.skinning===!0||H.isInstancedMesh&&Ue.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ue.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ue.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ue.instancingMorph===!1&&H.morphTexture!==null||Ue.envMap!==Ce||W.fog===!0&&Ue.fog!==oe||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==he.numPlanes||Ue.numIntersection!==he.numIntersection)||Ue.vertexAlphas!==Oe||Ue.vertexTangents!==Be||Ue.morphTargets!==be||Ue.morphNormals!==dt||Ue.morphColors!==gt||Ue.toneMapping!==Tt||Ue.morphTargetsCount!==st)&&(je=!0):(je=!0,Ue.__version=W.version);let qt=Ue.currentProgram;je===!0&&(qt=Ve(W,z,H));let Bi=!1,Wt=!1,It=!1;const Dt=qt.getUniforms(),rn=Ue.uniforms;if(ze.useProgram(qt.program)&&(Bi=!0,Wt=!0,It=!0),W.id!==A&&(A=W.id,Wt=!0),Bi||L!==T){tt.reverseDepthBuffer?(Z.copy(T.projectionMatrix),xm(Z),Mm(Z),Dt.setValue(O,"projectionMatrix",Z)):Dt.setValue(O,"projectionMatrix",T.projectionMatrix),Dt.setValue(O,"viewMatrix",T.matrixWorldInverse);const Zt=Dt.map.cameraPosition;Zt!==void 0&&Zt.setValue(O,re.setFromMatrixPosition(T.matrixWorld)),tt.logarithmicDepthBuffer&&Dt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Dt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),L!==T&&(L=T,Wt=!0,It=!0)}if(H.isSkinnedMesh){Dt.setOptional(O,H,"bindMatrix"),Dt.setOptional(O,H,"bindMatrixInverse");const Zt=H.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Dt.setValue(O,"boneTexture",Zt.boneTexture,C))}H.isBatchedMesh&&(Dt.setOptional(O,H,"batchingTexture"),Dt.setValue(O,"batchingTexture",H._matricesTexture,C),Dt.setOptional(O,H,"batchingIdTexture"),Dt.setValue(O,"batchingIdTexture",H._indirectTexture,C),Dt.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&Dt.setValue(O,"batchingColorTexture",H._colorsTexture,C));const Fr=q.morphAttributes;if((Fr.position!==void 0||Fr.normal!==void 0||Fr.color!==void 0)&&He.update(H,q,qt),(Wt||Ue.receiveShadow!==H.receiveShadow)&&(Ue.receiveShadow=H.receiveShadow,Dt.setValue(O,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(rn.envMap.value=Ce,rn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&z.environment!==null&&(rn.envMapIntensity.value=z.environmentIntensity),Wt&&(Dt.setValue(O,"toneMappingExposure",x.toneMappingExposure),Ue.needsLights&&rt(rn,It),oe&&W.fog===!0&&pe.refreshFogUniforms(rn,oe),pe.refreshMaterialUniforms(rn,W,X,N,m.state.transmissionRenderTarget[T.id]),ha.upload(O,lt(Ue),rn,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ha.upload(O,lt(Ue),rn,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Dt.setValue(O,"center",H.center),Dt.setValue(O,"modelViewMatrix",H.modelViewMatrix),Dt.setValue(O,"normalMatrix",H.normalMatrix),Dt.setValue(O,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Zt=W.uniformsGroups;for(let Or=0,Ns=Zt.length;Or<Ns;Or++){const zn=Zt[Or];G.update(zn,qt),G.bind(zn,qt)}}return qt}function rt(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Vt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,z,q){ke.get(T.texture).__webglTexture=z,ke.get(T.depthTexture).__webglTexture=q;const W=ke.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=q===void 0,W.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,z){const q=ke.get(T);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,q=0){y=T,R=z,b=q;let W=!0,H=null,oe=!1,_e=!1;if(T){const Ce=ke.get(T);if(Ce.__useDefaultFramebuffer!==void 0)ze.bindFramebuffer(O.FRAMEBUFFER,null),W=!1;else if(Ce.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(Ce.__hasExternalTextures)C.rebindTextures(T,ke.get(T.texture).__webglTexture,ke.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const be=T.depthTexture;if(Ce.__boundDepthTexture!==be){if(be!==null&&ke.has(be)&&(T.width!==be.image.width||T.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(_e=!0);const Be=ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[z])?H=Be[z][q]:H=Be[z],oe=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?H=ke.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?H=Be[q]:H=Be,g.copy(T.viewport),M.copy(T.scissor),P=T.scissorTest}else g.copy(de).multiplyScalar(X).floor(),M.copy(le).multiplyScalar(X).floor(),P=Se;if(ze.bindFramebuffer(O.FRAMEBUFFER,H)&&W&&ze.drawBuffers(T,H),ze.viewport(g),ze.scissor(M),ze.setScissorTest(P),oe){const Ce=ke.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ce.__webglTexture,q)}else if(_e){const Ce=ke.get(T.texture),Oe=z||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ce.__webglTexture,q||0,Oe)}A=-1},this.readRenderTargetPixels=function(T,z,q,W,H,oe,_e){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee){ze.bindFramebuffer(O.FRAMEBUFFER,Ee);try{const Ce=T.texture,Oe=Ce.format,Be=Ce.type;if(!tt.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-W&&q>=0&&q<=T.height-H&&O.readPixels(z,q,W,H,Ge.convert(Oe),Ge.convert(Be),oe)}finally{const Ce=y!==null?ke.get(y).__webglFramebuffer:null;ze.bindFramebuffer(O.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,z,q,W,H,oe,_e){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee){const Ce=T.texture,Oe=Ce.format,Be=Ce.type;if(!tt.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=T.width-W&&q>=0&&q<=T.height-H){ze.bindFramebuffer(O.FRAMEBUFFER,Ee);const be=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,be),O.bufferData(O.PIXEL_PACK_BUFFER,oe.byteLength,O.STREAM_READ),O.readPixels(z,q,W,H,Ge.convert(Oe),Ge.convert(Be),0);const dt=y!==null?ke.get(y).__webglFramebuffer:null;ze.bindFramebuffer(O.FRAMEBUFFER,dt);const gt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await vm(O,gt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,be),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,oe),O.deleteBuffer(be),O.deleteSync(gt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,z=null,q=0){T.isTexture!==!0&&(da("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1]);const W=Math.pow(2,-q),H=Math.floor(T.image.width*W),oe=Math.floor(T.image.height*W),_e=z!==null?z.x:0,Ee=z!==null?z.y:0;C.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,_e,Ee,H,oe),ze.unbindTexture()},this.copyTextureToTexture=function(T,z,q=null,W=null,H=0){T.isTexture!==!0&&(da("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],z=arguments[2],H=arguments[3]||0,q=null);let oe,_e,Ee,Ce,Oe,Be;q!==null?(oe=q.max.x-q.min.x,_e=q.max.y-q.min.y,Ee=q.min.x,Ce=q.min.y):(oe=T.image.width,_e=T.image.height,Ee=0,Ce=0),W!==null?(Oe=W.x,Be=W.y):(Oe=0,Be=0);const be=Ge.convert(z.format),dt=Ge.convert(z.type);C.setTexture2D(z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const gt=O.getParameter(O.UNPACK_ROW_LENGTH),Tt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),nn=O.getParameter(O.UNPACK_SKIP_PIXELS),st=O.getParameter(O.UNPACK_SKIP_ROWS),Ue=O.getParameter(O.UNPACK_SKIP_IMAGES),zt=T.isCompressedTexture?T.mipmaps[H]:T.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,zt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,zt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ee),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ce),T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,H,Oe,Be,oe,_e,be,dt,zt.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,H,Oe,Be,zt.width,zt.height,be,zt.data):O.texSubImage2D(O.TEXTURE_2D,H,Oe,Be,oe,_e,be,dt,zt),O.pixelStorei(O.UNPACK_ROW_LENGTH,gt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Tt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,nn),O.pixelStorei(O.UNPACK_SKIP_ROWS,st),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ue),H===0&&z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),ze.unbindTexture()},this.copyTextureToTexture3D=function(T,z,q=null,W=null,H=0){T.isTexture!==!0&&(da("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,W=arguments[1]||null,T=arguments[2],z=arguments[3],H=arguments[4]||0);let oe,_e,Ee,Ce,Oe,Be,be,dt,gt;const Tt=T.isCompressedTexture?T.mipmaps[H]:T.image;q!==null?(oe=q.max.x-q.min.x,_e=q.max.y-q.min.y,Ee=q.max.z-q.min.z,Ce=q.min.x,Oe=q.min.y,Be=q.min.z):(oe=Tt.width,_e=Tt.height,Ee=Tt.depth,Ce=0,Oe=0,Be=0),W!==null?(be=W.x,dt=W.y,gt=W.z):(be=0,dt=0,gt=0);const nn=Ge.convert(z.format),st=Ge.convert(z.type);let Ue;if(z.isData3DTexture)C.setTexture3D(z,0),Ue=O.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)C.setTexture2DArray(z,0),Ue=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const zt=O.getParameter(O.UNPACK_ROW_LENGTH),je=O.getParameter(O.UNPACK_IMAGE_HEIGHT),qt=O.getParameter(O.UNPACK_SKIP_PIXELS),Bi=O.getParameter(O.UNPACK_SKIP_ROWS),Wt=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Tt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Tt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ce),O.pixelStorei(O.UNPACK_SKIP_ROWS,Oe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Be),T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Ue,H,be,dt,gt,oe,_e,Ee,nn,st,Tt.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(Ue,H,be,dt,gt,oe,_e,Ee,nn,Tt.data):O.texSubImage3D(Ue,H,be,dt,gt,oe,_e,Ee,nn,st,Tt),O.pixelStorei(O.UNPACK_ROW_LENGTH,zt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,je),O.pixelStorei(O.UNPACK_SKIP_PIXELS,qt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Bi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Wt),H===0&&z.generateMipmaps&&O.generateMipmap(Ue),ze.unbindTexture()},this.initRenderTarget=function(T){ke.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),ze.unbindTexture()},this.resetState=function(){R=0,b=0,y=null,ze.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ec?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===Ca?"display-p3":"srgb"}}class go extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const af=new U,lf=new Lt,cf=new Lt,Cx=new U,uf=new Ze,$o=new U,bl=new Ps,ff=new Ze,El=new Tc;class Px extends Et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=pu,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ki),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,$o),this.boundingBox.expandByPoint($o)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ps),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,$o),this.boundingSphere.expandByPoint($o)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bl.copy(this.boundingSphere),bl.applyMatrix4(r),e.ray.intersectsSphere(bl)!==!1&&(ff.copy(r).invert(),El.copy(e.ray).applyMatrix4(ff),!(this.boundingBox!==null&&El.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,El)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Lt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===pu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;lf.fromBufferAttribute(r.attributes.skinIndex,e),cf.fromBufferAttribute(r.attributes.skinWeight,e),af.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=cf.getComponent(s);if(a!==0){const o=lf.getComponent(s);uf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Cx.copy(af).applyMatrix4(uf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class mh extends $t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ix extends _n{constructor(e=null,t=1,i=1,r,s,a,o,l,u=Cn,c=Cn,f,d){super(null,a,o,l,u,c,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const df=new Ze,Dx=new Ze;class Dc{constructor(e=[],t=[]){this.uuid=kr(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ze;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Dx;df.multiplyMatrices(o,t[s]),df.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Dc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Ix(t,e,e,qn,di);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new mh),this.bones.push(a),this.boneInverses.push(new Ze().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class Uc extends _n{constructor(e,t,i,r,s,a,o,l,u){super(e,t,i,r,s,a,o,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _o extends si{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],f=[],d=[],h=[];let _=0;const v=[],m=i/2;let p=0;S(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(c),this.setAttribute("position",new vn(f,3)),this.setAttribute("normal",new vn(d,3)),this.setAttribute("uv",new vn(h,2));function S(){const E=new U,R=new U;let b=0;const y=(t-e)/i;for(let A=0;A<=s;A++){const L=[],g=A/s,M=g*(t-e)+e;for(let P=0;P<=r;P++){const D=P/r,F=D*l+o,k=Math.sin(F),N=Math.cos(F);R.x=M*k,R.y=-g*i+m,R.z=M*N,f.push(R.x,R.y,R.z),E.set(k,y,N).normalize(),d.push(E.x,E.y,E.z),h.push(D,1-g),L.push(_++)}v.push(L)}for(let A=0;A<r;A++)for(let L=0;L<s;L++){const g=v[L][A],M=v[L+1][A],P=v[L+1][A+1],D=v[L][A+1];e>0&&(c.push(g,M,D),b+=3),t>0&&(c.push(M,P,D),b+=3)}u.addGroup(p,b,0),p+=b}function x(E){const R=_,b=new at,y=new U;let A=0;const L=E===!0?e:t,g=E===!0?1:-1;for(let P=1;P<=r;P++)f.push(0,m*g,0),d.push(0,g,0),h.push(.5,.5),_++;const M=_;for(let P=0;P<=r;P++){const F=P/r*l+o,k=Math.cos(F),N=Math.sin(F);y.x=L*N,y.y=m*g,y.z=L*k,f.push(y.x,y.y,y.z),d.push(0,g,0),b.x=k*.5+.5,b.y=N*.5*g+.5,h.push(b.x,b.y),_++}for(let P=0;P<r;P++){const D=R+P,F=M+P;E===!0?c.push(F,F+1,D):c.push(F+1,F,D),A+=3}u.addGroup(p,A,E===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nc extends _o{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Nc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kc extends si{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),u(i),c(),this.setAttribute("position",new vn(s,3)),this.setAttribute("normal",new vn(s.slice(),3)),this.setAttribute("uv",new vn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const x=new U,E=new U,R=new U;for(let b=0;b<t.length;b+=3)h(t[b+0],x),h(t[b+1],E),h(t[b+2],R),l(x,E,R,S)}function l(S,x,E,R){const b=R+1,y=[];for(let A=0;A<=b;A++){y[A]=[];const L=S.clone().lerp(E,A/b),g=x.clone().lerp(E,A/b),M=b-A;for(let P=0;P<=M;P++)P===0&&A===b?y[A][P]=L:y[A][P]=L.clone().lerp(g,P/M)}for(let A=0;A<b;A++)for(let L=0;L<2*(b-A)-1;L++){const g=Math.floor(L/2);L%2===0?(d(y[A][g+1]),d(y[A+1][g]),d(y[A][g])):(d(y[A][g+1]),d(y[A+1][g+1]),d(y[A+1][g]))}}function u(S){const x=new U;for(let E=0;E<s.length;E+=3)x.x=s[E+0],x.y=s[E+1],x.z=s[E+2],x.normalize().multiplyScalar(S),s[E+0]=x.x,s[E+1]=x.y,s[E+2]=x.z}function c(){const S=new U;for(let x=0;x<s.length;x+=3){S.x=s[x+0],S.y=s[x+1],S.z=s[x+2];const E=m(S)/2/Math.PI+.5,R=p(S)/Math.PI+.5;a.push(E,1-R)}_(),f()}function f(){for(let S=0;S<a.length;S+=6){const x=a[S+0],E=a[S+2],R=a[S+4],b=Math.max(x,E,R),y=Math.min(x,E,R);b>.9&&y<.1&&(x<.2&&(a[S+0]+=1),E<.2&&(a[S+2]+=1),R<.2&&(a[S+4]+=1))}}function d(S){s.push(S.x,S.y,S.z)}function h(S,x){const E=S*3;x.x=e[E+0],x.y=e[E+1],x.z=e[E+2]}function _(){const S=new U,x=new U,E=new U,R=new U,b=new at,y=new at,A=new at;for(let L=0,g=0;L<s.length;L+=9,g+=6){S.set(s[L+0],s[L+1],s[L+2]),x.set(s[L+3],s[L+4],s[L+5]),E.set(s[L+6],s[L+7],s[L+8]),b.set(a[g+0],a[g+1]),y.set(a[g+2],a[g+3]),A.set(a[g+4],a[g+5]),R.copy(S).add(x).add(E).divideScalar(3);const M=m(R);v(b,g+0,S,M),v(y,g+2,x,M),v(A,g+4,E,M)}}function v(S,x,E,R){R<0&&S.x===1&&(a[x]=S.x-1),E.x===0&&E.z===0&&(a[x]=R/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.vertices,e.indices,e.radius,e.details)}}class Fc extends kc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fc(e.radius,e.detail)}}class Oc extends si{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const c=[],f=new U,d=new U,h=[],_=[],v=[],m=[];for(let p=0;p<=i;p++){const S=[],x=p/i;let E=0;p===0&&a===0?E=.5/t:p===i&&l===Math.PI&&(E=-.5/t);for(let R=0;R<=t;R++){const b=R/t;f.x=-e*Math.cos(r+b*s)*Math.sin(a+x*o),f.y=e*Math.cos(a+x*o),f.z=e*Math.sin(r+b*s)*Math.sin(a+x*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(b+E,1-x),S.push(u++)}c.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){const x=c[p][S+1],E=c[p][S],R=c[p+1][S],b=c[p+1][S+1];(p!==0||a>0)&&h.push(x,E,b),(p!==i-1||l<Math.PI)&&h.push(E,R,b)}this.setIndex(h),this.setAttribute("position",new vn(_,3)),this.setAttribute("normal",new vn(v,3)),this.setAttribute("uv",new vn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fi extends po{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qd,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bc extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ia extends Bc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const wl=new Ze,hf=new U,pf=new U;class Ux{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lc,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;hf.setFromMatrixPosition(e.matrixWorld),t.position.copy(hf),pf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pf),t.updateMatrixWorld(),wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Nx extends Ux{constructor(){super(new Cc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Da extends Bc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new Nx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ua extends Bc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const mf=new Ze;class gh{constructor(e,t,i=0,r=1/0){this.ray=new Tc(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ac,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mf),this}intersectObject(e,t=!0,i=[]){return Z0(e,this,i,t),i.sort(gf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Z0(e[r],this,i,t);return i.sort(gf),i}}function gf(n,e){return n.distance-e.distance}function Z0(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let a=0,o=s.length;a<o;a++)Z0(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);function kx(n){let e=1779033703^n.length;for(let t=0;t<n.length;t++)e=Math.imul(e^n.charCodeAt(t),3432918353),e=e<<13|e>>>19;return()=>(e=Math.imul(e^e>>>16,2246822507),e=Math.imul(e^e>>>13,3266489909),e^=e>>>16,e>>>0)}function Fx(n){return()=>{n|=0,n=n+1831565813|0;let e=Math.imul(n^n>>>15,1|n);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}class Ds{constructor(e="lifesim"){this.seed=String(e),this._next=Fx(kx(this.seed)()),this._children=new Map}child(e){return this._children.has(e)||this._children.set(e,new Ds(`${this.seed}:${e}`)),this._children.get(e)}float(){return this._next()}range(e,t){return e+this._next()*(t-e)}int(e,t){return Math.floor(this.range(e,t+1))}chance(e){return this._next()<e}sign(){return this._next()<.5?-1:1}pick(e){return e[Math.floor(this._next()*e.length)]}pickMany(e,t){const i=this.shuffle([...e]);return i.slice(0,Math.min(t,i.length))}shuffle(e){for(let t=e.length-1;t>0;t--){const i=Math.floor(this._next()*(t+1));[e[t],e[i]]=[e[i],e[t]]}return e}weighted(e){const t=Array.isArray(e)?e:[...e].map(([s,a])=>({value:s,weight:a}));let i=0;for(const s of t)i+=Math.max(0,s.weight??1);if(i<=0)return t[0];let r=this._next()*i;for(const s of t)if(r-=Math.max(0,s.weight??1),r<=0)return s;return t[t.length-1]}gaussian(e=0,t=1){let i=0,r=0;for(;i===0;)i=this._next();for(;r===0;)r=this._next();return e+t*Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*r)}stat(e,t,i=0,r=100){return Math.max(i,Math.min(r,Math.round(this.gaussian(e,t))))}}const mi={ceiling:15525851,wall:13814974,wallUpper:14210248,trim:16249834,floorTimber:9072722,benchtop:12168342},Tl=new Map,Ox=["roughness","metalness","flat","transparent","opacity","side","emissive","emissiveIntensity","vertexColors"];function Bx(n,e={}){let t=String(n);for(const r of Ox)e[r]!==void 0&&(t+="|"+r+"="+JSON.stringify(e[r]));if(Tl.has(t))return Tl.get(t);const i=new Fi({color:n,roughness:e.roughness??.85,metalness:e.metalness??0,flatShading:e.flat??!1,transparent:e.transparent??!1,opacity:e.opacity??1,side:e.side??Ui,emissive:e.emissive??0,emissiveIntensity:e.emissiveIntensity??1,vertexColors:e.vertexColors??!1});return Tl.set(t,i),i}const Na={box:new gn(1,1,1),plane:new mo(1,1),cyl:new _o(.5,.5,1,10),cone:new Nc(.5,1,8),sphere:new Oc(.5,12,10)};function sr(n,e,t,i,r={}){const s=new Et(Na.box,r.material||Bx(i,r));return s.scale.set(n,e,t),s.castShadow=r.castShadow??!0,s.receiveShadow=r.receiveShadow??!0,s}const zx=new Set;function Hx(n){zx.add(n)}let _h=8,J0=null;function Gx(n){J0=n,_h=Math.min(8,n.capabilities.getMaxAnisotropy())}let Vx=n=>{const e=document.createElement("canvas");return e.width=e.height=n,e};const vh=(n,e=n)=>{const t=Vx(n);return t.width=n,t.height=e,t};let xh=0;function zc(n,e){return e&&(n.colorSpace=Fn),n.wrapS=n.wrapT=xa,n.anisotropy=_h,n.generateMipmaps=!0,n.minFilter=Ji,n.magFilter=Xn,xh+=n.image.width*n.image.height*4*4/3,J0&&J0.initTexture(n),n}function Mn(n){return zc(new Uc(Wx(n)),!0)}function Q0(n){return n.wrapS=n.wrapT=Zi,n}function Wx(n){const e=vh(n.w,n.h),t=e.getContext("2d"),i=t.createImageData(n.w,n.h),r=i.data,s=n.d,a=n.w*n.h;for(let o=0,l=0,u=0;o<a;o++,l+=3,u+=4){const c=s[l],f=s[l+1],d=s[l+2];r[u]=(c<0?0:c>1?1:c)*255+.5,r[u+1]=(f<0?0:f>1?1:f)*255+.5,r[u+2]=(d<0?0:d>1?1:d)*255+.5,r[u+3]=255}return t.putImageData(i,0,0),e}const Ct=n=>n<0?0:n>1?1:n,gi=n=>[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255];function Xx(n){const[e,t,i]=n,r=Math.max(e,t,i),s=Math.min(e,t,i),a=(r+s)/2;if(r===s)return[0,0,a];const o=r-s,l=a>.5?o/(2-r-s):o/(r+s);let u;return r===e?u=((t-i)/o+(t<i?6:0))/6:r===t?u=((i-e)/o+2)/6:u=((e-t)/o+4)/6,[u,l,a]}function qx(n,e,t){if(e===0)return[t,t,t];const i=t<.5?t*(1+e):t+e-t*e,r=2*t-i,s=a=>(a=(a%1+1)%1,a<1/6?r+(i-r)*6*a:a<1/2?i:a<2/3?r+(i-r)*(2/3-a)*6:r);return[s(n+1/3),s(n),s(n-1/3)]}function hi(n,e=1,t=0,i=1){const[r,s,a]=Xx(Array.isArray(n)?n:gi(n));return qx(r+t/360,Ct(s*i),Ct(a*e))}function Sn(n,e){return{w:n,h:e,d:new Float32Array(n*e*3)}}function vi(n,e){const t=Array.isArray(e)?e:gi(e),i=n.d;for(let r=0;r<i.length;r+=3)i[r]=t[0],i[r+1]=t[1],i[r+2]=t[2]}function Hc(n,e,t,i,r){if(r<=0)return;const s=n.w,a=n.h;let o=e,l=t;(o<0||o>=s)&&(o=(o%s+s)%s),(l<0||l>=a)&&(l=(l%a+a)%a);const u=(l*s+o)*3,c=n.d,f=1-r;c[u]=c[u]*f+i[0]*r,c[u+1]=c[u+1]*f+i[1]*r,c[u+2]=c[u+2]*f+i[2]*r}function Vn(n,e,t,i,r,s,a=1){const o=Array.isArray(s)?s:gi(s),l=Math.round(e),u=Math.round(i),c=Math.round(t),f=Math.round(r);if(a<1){for(let v=c;v<f;v++)for(let m=l;m<u;m++)Hc(n,m,v,o,a);return}const d=n.w,h=n.h,_=n.d;for(let v=c;v<f;v++){let m=v;(m<0||m>=h)&&(m=(m%h+h)%h);const p=m*d;for(let S=l;S<u;S++){let x=S;(x<0||x>=d)&&(x=(x%d+d)%d);const E=(p+x)*3;_[E]=o[0],_[E+1]=o[1],_[E+2]=o[2]}}}function vo(n,e,t,i,r,s=1){const a=i+1;for(let o=Math.floor(t-a);o<=Math.ceil(t+a);o++)for(let l=Math.floor(e-a);l<=Math.ceil(e+a);l++){const u=l+.5-e,c=o+.5-t,f=Ct(i-Math.sqrt(u*u+c*c)+.5);f>0&&Hc(n,l,o,r,s*f)}}function ec(n,e,t,i,r=1){const s=Math.max(1,t)/2;for(let a=1;a<e.length;a++){const[o,l]=e[a-1],[u,c]=e[a],f=Math.hypot(u-o,c-l),d=Math.max(1,Math.ceil(f));for(let h=0;h<=d;h++){const _=h/d;vo(n,o+(u-o)*_,l+(c-l)*_,s,i,r)}}}function Mh(n,e,t,i,r,s,a,o){const l=n.w,u=n.h,c=n.d,f=s/2,d=a[0],h=a[1],_=a[2],v=Math.PI*2/i;for(let m=0;m<u;m++){const p=m*l,S=e+t*Math.sin(m*v+r),x=S-f,E=S+f,R=Math.floor(x),b=Math.ceil(E);for(let y=R;y<=b;y++){const A=Ct(Math.min(y+1,E)-Math.max(y,x));if(A<=0)continue;const L=o*A,g=1-L;let M=y;(M<0||M>=l)&&(M=(M%l+l)%l);const P=(p+M)*3;c[P]=c[P]*g+d*L,c[P+1]=c[P+1]*g+h*L,c[P+2]=c[P+2]*g+_*L}}}const _f=n=>n*n*(3-2*n);function Yx(n,e,t){const i=new Float32Array(e*t);for(let r=0;r<i.length;r++)i[r]=n.float();return i}const vf=256;function An(n,e,t={}){const{p0:i=32,octaves:r=4,gain:s=.5,lacunarity:a=2,h:o=e}=t,l=t.p0x??i,u=t.p0y??i,c=new Float32Array(e*o),f=[];let d=1,h=0;for(let R=0;R<r;R++){const b=Math.min(vf,Math.max(1,Math.round(l*a**R))),y=Math.min(vf,Math.max(1,Math.round(u*a**R)));f.push({lat:Yx(n,b,y),px:b,py:y,amp:d}),h+=d,d*=s}const _=new Float64Array(e*o),v=new Int32Array(e),m=new Int32Array(e),p=new Float64Array(e);for(let R=0;R<f.length;R++){const b=f[R],y=b.lat,A=b.px,L=b.py,g=b.amp,M=A/e,P=L/o;for(let D=0;D<e;D++){const F=D*M,k=F|0,N=k>=A?k%A:k;v[D]=N,m[D]=N+1>=A?0:N+1,p[D]=_f(F-k)}for(let D=0;D<o;D++){const F=D*P,k=F|0,N=_f(F-k),X=1-N,V=k>=L?k%L:k,ce=V*A,de=(V+1>=L?0:V+1)*A,le=D*e;for(let Se=0;Se<e;Se++){const Ie=v[Se],B=m[Se],K=p[Se],Z=y[ce+Ie],Q=y[ce+B],re=y[de+Ie],ve=y[de+B];_[le+Se]+=g*((Z+(Q-Z)*K)*X+(re+(ve-re)*K)*N)}}}let S=1/0,x=-1/0;for(let R=0;R<c.length;R++){c[R]=_[R]/h;const b=c[R];b<S&&(S=b),b>x&&(x=b)}const E=x-S||1;for(let R=0;R<c.length;R++)c[R]=(c[R]-S)/E;return c}function or(n,e,t,i){const r=new Float32Array(e*t),s=new Float32Array(e*t),a=2*i+1,o=new Int32Array(e),l=new Int32Array(e);for(let f=0;f<e;f++)o[f]=((f-i)%e+e)%e,l[f]=(f+i+1)%e;for(let f=0;f<t;f++){const d=f*e;let h=0;for(let _=-i;_<=i;_++)h+=n[d+(_%e+e)%e];for(let _=0;_<e;_++)r[d+_]=h/a,h-=n[d+o[_]],h+=n[d+l[_]]}const u=new Int32Array(t),c=new Int32Array(t);for(let f=0;f<t;f++)u[f]=((f-i)%t+t)%t*e,c[f]=(f+i+1)%t*e;for(let f=0;f<e;f++){let d=0;for(let h=-i;h<=i;h++)d+=r[(h%t+t)%t*e+f];for(let h=0;h<t;h++)s[h*e+f]=d/a,d-=r[u[h]+f],d+=r[c[h]+f]}return s}function $x(n,e,t=1.5,i=null){const r=i??n.length/e,s=new Uint8Array(e*r*4),a=t/8,o=new Int32Array(e),l=new Int32Array(e);for(let u=0;u<e;u++)o[u]=(u-1+e)%e,l[u]=(u+1)%e;for(let u=0;u<r;u++){const c=(u-1+r)%r*e,f=u*e,d=(u+1)%r*e;let h=f*4;for(let _=0;_<e;_++,h+=4){const v=o[_],m=l[_],p=n[c+v],S=n[c+_],x=n[c+m],E=n[f+v],R=n[f+m],b=n[d+v],y=n[d+_],A=n[d+m],L=x+2*R+A-(p+2*E+b),g=b+2*y+A-(p+2*S+x),M=-L*a,P=g*a,D=1/Math.sqrt(M*M+P*P+1);s[h]=(M*D*.5+.5)*255+.5,s[h+1]=(P*D*.5+.5)*255+.5,s[h+2]=(D*.5+.5)*255+.5,s[h+3]=255}}return s}function oi(n,e,t=1.5,i=null){const r=i??n.length/e;return zc(new Uc(Sh($x(n,e,t,r),e,r)),!1)}function Sh(n,e,t){const i=vh(e,t),r=i.getContext("2d"),s=r.createImageData(e,t);return s.data.set(n),r.putImageData(s,0,0),i}function Kx(n,e,t,i,r=null){const a=n*(r??n),o=new Uint8Array(a*4);for(let l=0,u=0;l<a;l++,u+=4){const c=e?e[l]:1,f=t?t[l]:.85,d=i?i[l]:0;o[u]=(c<0?0:c>1?1:c)*255+.5,o[u+1]=(f<0?0:f>1?1:f)*255+.5,o[u+2]=(d<0?0:d>1?1:d)*255+.5,o[u+3]=255}return o}function tn(n,e,t,i,r=null){const s=r??n;return zc(new Uc(Sh(Kx(n,e,t,i,s),n,s)),!1)}const yh={},xf=new Map;function Gt(n,e){yh[n]=e}function jx(){var n,e;for(const t of xf.values()){for(const i of["map","normalMap","ormMap"])(e=(n=t[i])==null?void 0:n.dispose)==null||e.call(n);if(t.maps)for(const i of t.maps)i.dispose()}xf.clear(),xh=0}Hx(jx);const Al={blackbutt:{base:13214581,dark:10122054,rough:.4},spottedGum:{base:11040332,dark:8015662,rough:.38},jarrah:{base:9061685,dark:6040352,rough:.44},tasOak:{base:14072722,dark:11111779,rough:.42},pine:{base:14467213,dark:11571294,rough:.5}};Gt("timberFloor",(n,e={})=>{const a=1.9500000000000002,o=1024/a,l=1024/15,u=Math.max(2,Math.round(.004*o)),c=e.species||n.pick(Object.keys(Al)),f=Al[c]||Al.blackbutt,d=Sn(1024,1024);vi(d,hi(f.dark,.72));const h=gi(f.dark),_=hi(f.base,1.25),v=[];for(let b=0;b<15;b++){const y=b*l+u/2,A=(b+1)*l-u/2,L=hi(f.base,1+n.range(-.06,.06),n.range(-3,3));Vn(d,y,0,A,1024,L);const g=Math.round(n.range(.15,.85)*1024);v.push(g),Vn(d,y,g,A,g+2,hi(f.dark,.8),.85),Vn(d,y,g-2,A,g,_,.25);const M=n.int(28,60);for(let P=0;P<M;P++){const D=n.range(y+1,A-1),F=n.range(1.5,4),k=1024/n.int(2,5),N=n.range(0,Math.PI*2),X=n.range(2,3),V=n.range(.04,.12),ce=n.chance(.25)?_:h;Mh(d,D,F,k,N,X,ce,V)}if(n.chance(.2)){const P=n.range(204.8,819.2),D=n.range(60,160),F=n.range(y+4,A-4);for(let k=0;k<n.int(2,4);k++){const N=(k+1)*n.range(3,7),X=[];for(let V=0;V<=16;V++){const ce=V/16;X.push([F+(ce-.5)*2*N,P-D*(1-(ce-.5)**2*4)])}ec(d,X,2,h,.06)}}}const m=An(n,512,{p0:64,octaves:3}),p=new Float32Array(512*512),S=new Float32Array(512*512),x=new Float32Array(512*512),E=512/15,R=u*512/1024;for(let b=0;b<512;b++)for(let y=0;y<512;y++){const A=b*512+y,L=Math.floor(y/E),g=y-L*E,M=g<R/2||g>E-R/2,P=b*1024/512,D=v[L],F=P>=D-1&&P<=D+2,k=M||F;S[A]=k?.15:.75,p[A]=Ct(f.rough+(k?.1:0)+(m[A]-.5)*.1),x[A]=k?.72:1}return{map:Mn(d),normalMap:oi(or(S,512,512,1),512,1.2),ormMap:tn(512,x,p,null),uvScale:[a,a],normalScale:.5,species:c,tinted:!1}});Gt("plasterWall",(n,e={})=>{const r=e.rough??.88,s=An(n,256,{p0:64,octaves:3,gain:.45}),a=new Float32Array(256*256),o=.4*256/2;for(let l=0;l<256;l++)for(let u=0;u<256;u++){const c=l*256+u;let f=r+(s[c]**1.5-.5)*.1;e.ceiling||(f+=Math.cos(u/o*Math.PI*2)*.02),a[c]=Ct(f)}return{ormMap:tn(256,null,a,null),uvScale:[2,2],normalScale:0,tinted:!0}});Gt("plasterCeiling",n=>yh.plasterWall(n,{rough:.93,ceiling:!0}));Gt("paintedJoinery",n=>{const i=An(n,256,{p0:64,octaves:3}),r=new Float32Array(256*256);for(let s=0;s<256;s++)for(let a=0;a<256;a++){const o=s*256+a;r[o]=Ct(.42+(i[o]-.5)*.06+Math.sin(a/256*Math.PI*2*12)*.015)}return{ormMap:tn(256,null,r,null),uvScale:[1,1],normalScale:0,tinted:!0}});Gt("carpetPile",n=>{const i=Sn(512,512);vi(i,[1,1,1]);const r=An(n,512,{p0x:64,p0y:192,octaves:3,gain:.5}),s=i.d;for(let l=0;l<512;l++)for(let u=0;u<512;u++){const c=l*512+u,f=Math.cos(l/256*Math.PI*2)*.03,d=Ct(.9+(r[c]-.5)*.16+f);s[c*3]=d,s[c*3+1]=d,s[c*3+2]=d}for(let l=0;l<1200;l++){const u=n.pick([[1.1,0],[.78,8],[.92,-10]]),c=hi(16777215,u[0],u[1],1);if(u[1]!==0){const f=n.range(0,1);c[0]=c[0]*(.94+f*.12),c[2]=c[2]*(1.06-f*.12)}vo(i,n.range(0,512),n.range(0,512),n.range(1,2),c,.25)}const a=An(n,512,{p0x:43,p0y:128,octaves:3}),o=new Float32Array(512*512);for(let l=0;l<o.length;l++)o[l]=Ct(.92+(a[l]-.5)*.06);return{map:Mn(i),normalMap:oi(a,512,.6),ormMap:tn(512,null,o,null),uvScale:[1,1],normalScale:.7,tinted:!0}});Gt("ceramicTile",(n,e={})=>{const i=e.tile??.3,r=2,s=i*r,a=Math.max(2,Math.round(.003*512/s)),o=3,l=512/r,u=gi(12104358),c=[];for(let m=0;m<r*r;m++)c.push({c:hi(14473423,1+n.range(-.03,.03),n.range(-2,2)),g:n.range(-1,1)});const f=Sn(512,512),d=new Float32Array(512*512),h=new Float32Array(512*512),_=new Float32Array(512*512),v=a/2;for(let m=0;m<512;m++)for(let p=0;p<512;p++){const S=m*512+p,x=Math.floor(p/l),E=Math.floor(m/l),R=p-x*l,b=m-E*l,y=Math.min(R,l-R,b,l-b);if(y<v){f.d[S*3]=u[0],f.d[S*3+1]=u[1],f.d[S*3+2]=u[2],d[S]=.85,h[S]=.25,_[S]=.62;continue}const A=c[E*r+x],L=(R/l+b/l)/2,g=1.03-.06*(A.g>0?L:1-L);f.d[S*3]=Ct(A.c[0]*g),f.d[S*3+1]=Ct(A.c[1]*g),f.d[S*3+2]=Ct(A.c[2]*g),d[S]=.08;const M=Ct((y-v)/o);h[S]=.25+.75*M,_[S]=.62+.38*M}return{map:Mn(f),normalMap:oi(h,512,2),ormMap:tn(512,_,d,null),uvScale:[s,s],normalScale:.8,tinted:!1}});Gt("fabricWeave",n=>{const i=Sn(256,256),r=new Float32Array(256*256),s=new Float32Array(256*256),a=128,o=new Float32Array(a*8),l=new Float32Array(a*8);for(let c=0;c<o.length;c++)o[c]=n.range(-.035,.035);for(let c=0;c<l.length;c++)l[c]=n.range(-.035,.035);const u=An(n,256,{p0:64,octaves:2});for(let c=0;c<256;c++)for(let f=0;f<256;f++){const d=c*256+f,h=(f>>1&1^c>>1&1)===0,_=f>>1,v=c>>1,m=h?o[(_*8+(c>>5&7))%o.length]:l[(v*8+(f>>5&7))%l.length],p=Ct((h?1.06:.94)+m+(u[d]-.5)*.06);i.d[d*3]=p,i.d[d*3+1]=p,i.d[d*3+2]=p,r[d]=h?.66:.8,s[d]=h?1:.3}return{map:Mn(i),normalMap:oi(or(s,256,256,1),256,.8),ormMap:tn(256,null,r,null),uvScale:[.25,.25],normalScale:.6,tinted:!0}});Gt("joineryTimber",n=>{const i=Sn(512,512);vi(i,[1,1,1]);const r=An(n,512,{p0x:48,p0y:8,octaves:4}),s=i.d;for(let l=0;l<512*512;l++){const u=Ct(.94+(r[l]-.5)*.22);s[l*3]=u,s[l*3+1]=u,s[l*3+2]=u}const a=hi(16777215,.72);for(let l=0;l<220;l++){const u=n.range(0,512),c=n.range(2,6),f=512/n.int(1,2),d=n.range(0,Math.PI*2);Mh(i,u,c,f,d,n.range(2,3.5),a,n.range(.03,.09))}const o=new Float32Array(512*512);for(let l=0;l<o.length;l++)o[l]=Ct(.55+(r[l]-.5)*.08);return{map:Mn(i),ormMap:tn(512,null,o,null),uvScale:[1,1],normalScale:0,tinted:!0}});Gt("vinylSheet",n=>{const i=Sn(512,512);vi(i,14209732);const r=[13222578,15131093,11906460,14472902].map(gi);for(let l=0;l<3e3;l++)vo(i,n.range(0,512),n.range(0,512),n.range(1,3),n.pick(r),.35);const s=An(n,512,{p0:32,octaves:3}),a=new Float32Array(512*512);for(let l=0;l<a.length;l++)a[l]=Ct(.28+(s[l]-.5)*.12);const o={w:512,h:512,d:new Float32Array(512*512*3)};for(let l=0;l<12;l++){const u=n.range(0,512),c=n.range(0,512),f=n.range(40,120),d=n.range(0,Math.PI*2),h=n.range(.6,2.2),_=[];for(let v=0;v<=24;v++){const m=d+h*(v/24);_.push([u+Math.cos(m)*f,c+Math.sin(m)*f])}ec(i,_,n.range(2,4),hi(14209732,.88),.3),ec(o,_,n.range(2,4),[1,1,1],1)}for(let l=0;l<a.length;l++)a[l]=Ct(a[l]+o.d[l*3]*.15);return{map:Mn(i),ormMap:tn(512,null,a,null),uvScale:[1,1],normalScale:0,tinted:!1}});Gt("laminateBench",n=>{const r=Sn(512,512);vi(r,mi.benchtop);const s=[9274743,14077886,7235417].map(gi);for(let u=0;u<2e3;u++)vo(r,n.range(0,512),n.range(0,512),n.range(1,2.5),n.pick(s),.3);const a=new Float32Array(512*512);for(let u=0;u<a.length;u++)a[u]=.28;const o=Math.max(2,Math.round(.006*512/.6)),l=hi(mi.benchtop,.82);for(let u=0;u<512;u++)if(Math.min(u,512-u)<o)for(let f=0;f<512;f++)Hc(r,f,u,l,.85),a[u*512+f]=.45;return{map:Mn(r),ormMap:tn(512,null,a,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});Gt("ceilingGrid",n=>{const r=Sn(512,512);vi(r,15526370);const s=Math.max(2,Math.round(.015*512/1.2)),a=Math.max(2,Math.round(.015*512/.6)),o=gi(14210509),l=gi(12434098),u=An(n,512,{p0:64,octaves:2}),c=new Float32Array(512*512);for(let f=0;f<512;f++)for(let d=0;d<512;d++){const h=f*512+d,_=Math.min(d,512-d),v=Math.min(f,512-f);if(_<s/2||v<a/2){const S=_>=s/2-2&&_<s/2||v>=a/2-2&&v<a/2?l:o;r.d[h*3]=S[0],r.d[h*3+1]=S[1],r.d[h*3+2]=S[2],c[h]=.55}else{const p=1+(u[h]-.5)*.04;r.d[h*3]*=p,r.d[h*3+1]*=p,r.d[h*3+2]*=p,c[h]=.9}}return{map:Mn(r),ormMap:tn(512,null,c,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});Gt("applianceEnamel",n=>{const i=An(n,256,{p0:64,octaves:3}),r=new Float32Array(256*256);for(let s=0;s<r.length;s++)r[s]=Ct(.3+(i[s]-.5)*.04);return{ormMap:tn(256,null,r,null),uvScale:[1,1],normalScale:0,tinted:!0}});Gt("metalBrushed",n=>{const i=new Float32Array(65536),r=new Float32Array(256*256),s=An(n,256,{p0x:8,p0y:256,octaves:2});for(let a=0;a<256;a++){const o=n.range(-.1,.1);for(let l=0;l<256;l++){const u=a*256+l;i[u]=Ct(.35+o*.6+(s[u]-.5)*.1)}}return{ormMap:tn(256,null,i,r),uvScale:[.4,.4],normalScale:0,tinted:!0}});Gt("quiltFolds",n=>{const i=[],r=n.int(5,9);for(let d=0;d<r;d++)i.push({a:n.range(.4,1),c:n.range(.05,.95),w:n.range(.06,.14)});const s=d=>{let h=0;for(const _ of i)h+=_.a*Math.exp(-(((d-_.c)/_.w)**2));return h+=.5*Math.exp(-((d/.04)**2))+.5*Math.exp(-(((1-d)/.04)**2)),h};let a=1/0,o=-1/0;for(let d=0;d<=256;d++){const h=s(d/256);h<a&&(a=h),h>o&&(o=h)}const l=o-a||1,u=d=>(s(Ct(d))-a)/l,c=Sn(512,256),f=new Float32Array(512*256);for(let d=0;d<512;d++){const h=u(d/511),_=.9+.1*h;for(let v=0;v<256;v++){const m=v*512+d;c.d[m*3]=_,c.d[m*3+1]=_,c.d[m*3+2]=_,f[m]=h}}return{map:Q0(Mn(c)),normalMap:Q0(oi(f,512,3,256)),uvScale:null,normalScale:1,field:u,folds:i,tinted:!0}});Gt("pictureArt",n=>{const i=[[14272936,10251087,4148050,15130057],[8361635,14213090,3095106,12820586],[11056266,15196880,6056775,9067068],[13609376,8015698,15722204,3814198],[9415096,15788760,4479587,12153919]],r=[];for(let s=0;s<5;s++){const a=i[s].map(gi),o=Sn(256,256);vi(o,a[n.int(0,3)]);const l=n.int(0,2);if(l===0){let c=0;for(;c<256;){const f=n.int(12,48);Vn(o,0,c,256,Math.min(256,c+f),a[n.int(0,3)],n.range(.5,1)),c+=f}}else if(l===1)for(let c=0;c<n.int(5,11);c++){const f=n.range(0,179.2),d=n.range(0,256*.7);Vn(o,f,d,f+n.range(30,110),d+n.range(30,110),a[n.int(0,3)],n.range(.55,.95))}else{const c=n.range(115.2,174.08);Vn(o,0,0,256,c,a[0],1),Vn(o,0,c,256,256,a[2],1);for(let f=0;f<n.int(3,7);f++){const d=n.range(c-40,c+40);Vn(o,0,d,256,d+n.range(3,10),a[n.int(0,3)],n.range(.3,.7))}vo(o,n.range(256*.2,256*.8),n.range(20,c-20),n.range(12,26),a[3],.9)}const u=hi(16777215,.97);Vn(o,0,0,256,6,u),Vn(o,0,250,256,256,u),Vn(o,0,0,6,256,u),Vn(o,250,0,256,256,u),r.push(Q0(Mn(o)))}return{maps:r,map:r[0],uvScale:null,normalScale:0,prints:5,tinted:!1}});Gt("garmentKnit",n=>{const i=Sn(256,256),r=new Float32Array(256*256),s=new Float32Array(256*256),a=16,o=12,l=An(n,256,{p0:64,octaves:2});for(let u=0;u<256;u++)for(let c=0;c<256;c++){const f=u*256+c,d=c%a/a*2-1,h=Math.cos(d*Math.PI*.5),_=(c/a|0)%2?o/2:0,v=(u+_)%o/o,m=1-Math.abs(v*2-1)*.45,p=Ct(h*.75+m*.25+(l[f]-.5)*.1),S=Ct(.8+p*.28);i.d[f*3]=S,i.d[f*3+1]=S,i.d[f*3+2]=S,r[f]=.94-p*.1,s[f]=p}return{map:Mn(i),normalMap:oi(or(s,256,256,1),256,1.2),ormMap:tn(256,null,r,null),uvScale:[.16,.16],normalScale:1.1,tinted:!0}});Gt("garmentDenim",n=>{const i=Sn(256,256),r=new Float32Array(256*256),s=new Float32Array(256*256),a=An(n,256,{p0:96,octaves:3}),o=new Float32Array(256);for(let l=0;l<256;l++)o[l]=n.range(-.05,.05);for(let l=0;l<256;l++)for(let u=0;u<256;u++){const c=l*256+u,f=(u+l)%3!==0,d=(u>>1&1)===0,_=Ct((f?d?1.02:.9:.72)+o[(u+l*3)%256]+(a[c]-.5)*.07);i.d[c*3]=_,i.d[c*3+1]=_,i.d[c*3+2]=_,r[c]=f?.78:.88,s[c]=f?1:.25}return{map:Mn(i),normalMap:oi(or(s,256,256,1),256,.9),ormMap:tn(256,null,r,null),uvScale:[.12,.12],normalScale:.85,tinted:!0}});Gt("garmentCotton",n=>{const i=Sn(256,256),r=new Float32Array(256*256),s=new Float32Array(256*256),a=An(n,256,{p0:48,octaves:3});for(let o=0;o<256;o++)for(let l=0;l<256;l++){const u=o*256+l,c=(l&1^o&1)===0,f=Ct((c?1.02:.97)+(a[u]-.5)*.09);i.d[u*3]=f,i.d[u*3+1]=f,i.d[u*3+2]=f,r[u]=.88-(c?.03:0),s[u]=c?.7:.4}return{map:Mn(i),normalMap:oi(or(s,256,256,1),256,.45),ormMap:tn(256,null,r,null),uvScale:[.09,.09],normalScale:.4,tinted:!0}});Gt("garmentButtons",n=>{const i=Sn(64,256);vi(i,[.97,.97,.97]);const r=new Float32Array(64*256).fill(.86),s=new Float32Array(64*256).fill(.45),a=64/2,o=5,l=64*.2;for(let u=0;u<256;u++)for(let c=0;c<64;c++){const f=u*64+c,d=Math.abs(c-a);d<64*.3&&(s[f]=.8),d>64*.3&&d<64*.36&&(s[f]=.2)}for(let u=0;u<o;u++){const c=256*((u+.7)/(o+.4));for(let f=Math.floor(c-l-2);f<=Math.ceil(c+l+2);f++)if(!(f<0||f>=256))for(let d=0;d<64;d++){const h=Math.hypot(d-a,f-c);if(h>l)continue;const _=f*64+d,v=Math.sqrt(Math.max(0,1-(h/l)**2));s[_]=.8+v*.2;const m=.86+v*.16;i.d[_*3]=m,i.d[_*3+1]=m,i.d[_*3+2]=m,r[_]=.42,Math.abs(f-c)<l*.16&&Math.abs(Math.abs(d-a)-l*.3)<l*.14&&(s[_]=.6,i.d[_*3]=.62,i.d[_*3+1]=.62,i.d[_*3+2]=.62)}}return{map:Mn(i),normalMap:oi(or(s,64,256,1),64,1.4,256),ormMap:tn(64,null,r,null,256),uvScale:[1,1],normalScale:1,tinted:!0,noTile:!0}});Gt("garmentZip",n=>{const i=Sn(64,256);vi(i,[.95,.95,.95]);const r=new Float32Array(64*256).fill(.86),s=new Float32Array(64*256).fill(.45),a=64/2,o=7;for(let u=0;u<256;u++)for(let c=0;c<64;c++){const f=u*64+c,d=c-a,h=Math.abs(d);if(h<64*.34&&(s[f]=.62,r[f]=.82),h<64*.17){const _=d<0?0:o/2,m=(u+_)%o/o<.55;s[f]=m?1:.5;const p=m?1.06:.74;i.d[f*3]=p,i.d[f*3+1]=p,i.d[f*3+2]=p,r[f]=m?.3:.55}}const l=256*.14;for(let u=Math.floor(l);u<l+256*.055;u++)for(let c=Math.floor(a-64*.11);c<a+64*.11;c++){const f=u*64+c;f<0||f>=64*256||(s[f]=1,r[f]=.28,i.d[f*3]=1.1,i.d[f*3+1]=1.1,i.d[f*3+2]=1.1)}return{map:Mn(i),normalMap:oi(or(s,64,256,1),64,1.6,256),ormMap:tn(64,null,r,null,256),uvScale:[1,1],normalScale:1.2,tinted:!0,noTile:!0}});Gt("garmentPlate",n=>{const i=Sn(256,256);vi(i,[1,1,1]);const r=new Float32Array(256*256).fill(.42),s=new Float32Array(256*256).fill(.72),a=An(n,256,{p0:64,octaves:3}),o=128;for(let u=0;u<256;u++)for(let c=0;c<256;c++){const f=u*256+c,d=Math.min(c%o,o-1-c%o),h=Math.min(u%o,o-1-u%o),_=Math.min(d,h);let v=.72,m=1,p=.42;if(_<2)v=.22,m=.93,p=.58;else if(_<5){const S=(_-2)/3;v=.22+S*.5,m=.93+S*.08,p=.58-S*.16}m+=(a[f]-.5)*.05,i.d[f*3]=m,i.d[f*3+1]=m,i.d[f*3+2]=m,r[f]=p,s[f]=v}const l=2;for(let u=0;u<256;u+=o)for(let c=0;c<256;c+=o)for(const[f,d]of[[7,7],[o-7,7],[7,o-7],[o-7,o-7]])for(let h=-l-1;h<=l+1;h++)for(let _=-l-1;_<=l+1;_++){const v=(c+f+_+256)%256,m=(u+d+h+256)%256,p=Math.hypot(_,h);if(p>l)continue;const S=m*256+v,x=Math.sqrt(Math.max(0,1-(p/l)**2));s[S]=.82+x*.18;const E=1.02+x*.1;i.d[S*3]=E,i.d[S*3+1]=E,i.d[S*3+2]=E,r[S]=.3}return{map:Mn(i),normalMap:oi(or(s,256,256,1),256,1.5),ormMap:tn(256,null,r,null),uvScale:[.34,.34],normalScale:1.45,tinted:!0}});class Zx{constructor(){this._handlers=new Map,this._log=[]}on(e,t){return this._handlers.has(e)||this._handlers.set(e,new Set),this._handlers.get(e).add(t),()=>this.off(e,t)}once(e,t){const i=this.on(e,r=>{i(),t(r)});return i}off(e,t){var i;(i=this._handlers.get(e))==null||i.delete(t)}emit(e,t={}){this._log.push({type:e,payload:t,at:performance.now()}),this._log.length>400&&this._log.shift();const i=this._handlers.get(e);if(i)for(const o of[...i])o(t,e);const r=e.split(":")[0]+":*",s=this._handlers.get(r);if(s)for(const o of[...s])o(t,e);const a=this._handlers.get("*");if(a)for(const o of[...a])o(t,e)}recent(e=40){return this._log.slice(-e)}}const Jx={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],sprint:["ShiftLeft","ShiftRight"],jump:["Space"],interact:["KeyE"],camera:["KeyV"],phone:["KeyQ"],journal:["KeyJ"],inventory:["KeyI"],map:["KeyM"],wait:["KeyT"],rotate:["KeyR"],furnishDone:["KeyF"],furnishSell:["KeyX"],cancel:["Escape"]},Qx=2e3;class e2{constructor(e,t){this.bus=e,this.dom=t,this.bindings={...Jx},this.down=new Set,this.pressed=new Set,this.mouse={dx:0,dy:0,sensitivity:.0022,invertY:!1},this.locked=!1,this.lockPending=!1,this._lockTimer=0,this.enabled=!0,this._attach()}clearHeld(){this.down.clear(),this.pressed.clear(),this.mouse.dx=0,this.mouse.dy=0}_attach(){window.addEventListener("keydown",e=>{if(e.repeat)return;Object.values(this.bindings).some(i=>i.includes(e.code))&&e.code!=="Escape"&&e.preventDefault(),this.down.add(e.code),this.pressed.add(e.code),this.bus.emit("input:key",{code:e.code});for(const[i,r]of Object.entries(this.bindings))r.includes(e.code)&&this.bus.emit("action:"+i,{})}),window.addEventListener("keyup",e=>this.down.delete(e.code)),window.addEventListener("blur",()=>this.clearHeld()),window.addEventListener("focus",()=>this.clearHeld()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.clearHeld()}),document.addEventListener("pointerlockchange",()=>{this._settleLock(),this.locked=document.pointerLockElement===this.dom,this.locked||this.clearHeld(),this.bus.emit("input:pointerlock",{locked:this.locked})}),document.addEventListener("pointerlockerror",e=>this._failLock(e)),window.addEventListener("mousemove",e=>{this.locked&&(this.mouse.dx+=e.movementX,this.mouse.dy+=e.movementY)}),window.addEventListener("mousedown",e=>{this.pressed.add("Mouse"+e.button),this.down.add("Mouse"+e.button)}),window.addEventListener("mouseup",e=>this.down.delete("Mouse"+e.button)),window.addEventListener("wheel",e=>{this.bus.emit("input:wheel",{delta:Math.sign(e.deltaY)})},{passive:!0})}_settleLock(){this.lockPending=!1,clearTimeout(this._lockTimer),this._lockTimer=0}_failLock(e){const t=this.lockPending;this._settleLock(),t&&(this.locked=!1,console.warn("[input] pointer lock request refused",e||""),this.bus.emit("input:pointerlockfailed",{error:e||null}))}requestLock(){var t,i;if(this.locked||this.lockPending||!((t=this.dom)!=null&&t.requestPointerLock))return;this.lockPending=!0,clearTimeout(this._lockTimer),this._lockTimer=setTimeout(()=>{this.lockPending=!1},Qx);let e;try{e=this.dom.requestPointerLock()}catch(r){this._failLock(r);return}(i=e==null?void 0:e.catch)==null||i.call(e,r=>this._failLock(r))}requestLockFresh(){this.locked||(this._settleLock(),this.requestLock())}releaseLock(){var e;this._settleLock(),this.locked=!1,(e=document.exitPointerLock)==null||e.call(document)}isDown(e){return this.enabled?(this.bindings[e]||[]).some(t=>this.down.has(t)):!1}wasPressed(e){return this.enabled?(this.bindings[e]||[]).some(t=>this.pressed.has(t)):!1}axis(){let e=0,t=0;this.isDown("forward")&&(t+=1),this.isDown("back")&&(t-=1),this.isDown("right")&&(e+=1),this.isDown("left")&&(e-=1);const i=Math.hypot(e,t);return i>1?{x:e/i,y:t/i}:{x:e,y:t}}consumeMouse(){const e={dx:this.mouse.dx,dy:this.mouse.dy};return this.mouse.dx=0,this.mouse.dy=0,e}endFrame(){this.pressed.clear()}}const tc=n=>Number.isFinite(n)&&n>0?n:0;function Gc(n={}){const e=n.max??100,t=n.shield??0;return{max:e,hp:Math.min(n.hp??e,e),shield:t,shieldMax:n.shieldMax??t,thresholds:[...n.thresholds??[]].sort((i,r)=>r-i),dead:(n.hp??e)<=0}}function t2(n,e,t){const i=[];for(const r of n.thresholds){const s=n.max*r;e>s&&t<=s&&i.push({at:r,hp:s})}return i}function bh(n,e={}){const t=[];if(n.dead)return{state:n,events:t};const i=tc(e.amount),r=e.crit?i*(e.critMul??2):i,s=e.kind??null,a=e.source??null;let{hp:o,shield:l}=n,u=r;if(l>0&&!e.ignoreShield&&u>0){const d=Math.min(l,u);l-=d,u-=d,t.push({type:"absorbed",amount:d,shield:l,kind:s,source:a}),l===0&&t.push({type:"shieldBroken",overflow:u,kind:s,source:a})}const c=o;o=Math.max(0,o-u),(u>0||r===0)&&t.push({type:"damaged",amount:u,hp:o,was:c,kind:s,source:a});for(const d of t2(n,c,o))t.push({type:"threshold",at:d.at,hp:d.hp,kind:s,source:a});const f=o<=0;return f&&t.push({type:"died",kind:s,source:a}),{state:{...n,hp:o,shield:l,dead:f},events:t}}function nc(n,e={}){const t=[];if(n.dead)return{state:n,events:t};const i=Math.min(n.max,n.hp+tc(e.amount)),r=Math.min(n.shieldMax,n.shield+tc(e.shield));return i!==n.hp&&t.push({type:"healed",amount:i-n.hp,hp:i,was:n.hp,source:e.source??null}),r!==n.shield&&t.push({type:"shielded",amount:r-n.shield,shield:r,source:e.source??null}),{state:{...n,hp:i,shield:r},events:t}}const Eh=n=>n.max>0?n.hp/n.max:0,Vc=n=>n.shieldMax>0?n.shield/n.shieldMax:0,n2=1e-9,i2=n=>n>0?60/n:0;function r2(n={}){const e=n.magazine??30;return{magazine:e,loaded:Math.min(n.loaded??e,e),reserve:n.reserve??e*6,interval:i2(n.rpm??600),reloadTime:n.reloadTime??2,burst:n.burst??0,auto:n.auto??!0,maxCatchUp:n.maxCatchUp??.25,nextShotAt:0,reloadEndsAt:0,reloading:!1,fired:!1,burstLeft:0}}const wh=(n,e)=>n.reloading&&e<n.reloadEndsAt;function s2(n,e){if(!n.reloading||e<n.reloadEndsAt)return{state:n,events:[]};const t=n.magazine-n.loaded,i=Math.min(t,n.reserve),r=n.loaded+i,s=n.reserve===1/0?1/0:n.reserve-i;return{state:{...n,loaded:r,reserve:s,reloading:!1,reloadEndsAt:0},events:[{type:"reloaded",at:e,loaded:r,reserve:s,took:i}]}}function o2(n,e,t={}){const i=[],r=[];if(wh(n,e))return t.pressed&&i.push({type:"blocked",why:"reloading",at:e}),{state:n,shots:r,events:i};if(!(n.auto?t.held||t.pressed:!!t.pressed))return{state:n,shots:r,events:i};if(n.loaded<=0)return t.pressed&&i.push({type:"dry",at:e}),{state:n,shots:r,events:i};let a=n.loaded,o=n.nextShotAt;(!n.fired||t.pressed||e-o>n.maxCatchUp)&&(o=e);const l=n.burst>0;let u=l?t.pressed?n.burst:n.burstLeft:0;for(;a>0&&o<=e+n2&&(!l||u>0)&&(r.push({at:Math.min(o,e),remaining:a-1}),a--,u--,o+=n.interval,!(n.interval<=0)););return r.length&&i.push({type:"fired",count:r.length,loaded:a,at:e}),a===0&&n.loaded>0&&i.push({type:"emptied",at:e}),{state:{...n,loaded:a,nextShotAt:o,burstLeft:l?Math.max(0,u):0,fired:n.fired||r.length>0},shots:r,events:i}}function a2(n,e){return n.reloading?{state:n,events:[]}:n.loaded>=n.magazine?{state:n,events:[{type:"refused",why:"full",at:e}]}:n.reserve<=0?{state:n,events:[{type:"refused",why:"empty",at:e}]}:{state:{...n,reloading:!0,reloadEndsAt:e+n.reloadTime},events:[{type:"reloading",at:e,endsAt:e+n.reloadTime}]}}const l2=.26,c2=.13,u2=2.4,es=(n,e,t)=>n+(e-n)*t,Mf=(n,e,t,i)=>i<=0?e:Math.max(0,Math.min(1,n+(e-n)*Math.min(1,t/i))),Rl={x:0,y:0,z:-.3,pitch:0,yaw:0,roll:0};function Sf(n,e,t,i){return i.x=es(n.x,e.x,t),i.y=es(n.y,e.y,t),i.z=es(n.z,e.z,t),i.pitch=es(n.pitch,e.pitch,t),i.yaw=es(n.yaw,e.yaw,t),i.roll=es(n.roll,e.roll,t),i}function f2(n={}){if(!n.model)throw new Error("makeViewmodel: needs a { model }");const e={...Rl,...n.rest??{}},t={...Rl,...n.aim??e},i=n.stowDrop??.23,r={...e,y:e.y-i},s=n.drawTime??l2,a=n.aimTime??c2,o=n.reach??6,l=n.cone??.3,u=new go,c=new mn(n.fov??48,1,.01,1),f=new Tn;let d=n.model,h=n.emitter??null;f.add(d),u.add(f);const _=new Da(16777215,n.keyIntensity??2.2);_.position.set(.4,.8,.6),u.add(_,new Ua(16777215,n.fillIntensity??.9));let v=0,m=0,p=0,S=0;const x={...r},E={...Rl},R={scene:u,camera:c,model:n.model,get out(){return p===1},get drawn(){return v},get aiming(){return S===1&&v>.6},get liveReach(){return this.aiming?o*u2:o},get liveCone(){return l},channel(b="tool"){return{id:b,get radius(){return R.liveReach},get cone(){return R.liveCone},when:()=>R.aiming,filter:y=>{var A;return((A=y==null?void 0:y.data)==null?void 0:A.tool)!==!1}}},swap(b,y){const A=d;return d&&f.remove(d),d=b??null,d&&f.add(d),R.model=d,h=y??null,A},draw(){p=1},stow(){p=0,S=0},toggle(){p=p?0:1,p||(S=0)},setAim(b){S=b?1:0,b&&(p=1)},ray(b,y=new U,A=new U){return y.copy(b.position),b.getWorldDirection(A),{origin:y,dir:A}},emitterAt(b=new U){return h?(h.updateWorldMatrix(!0,!1),b.setFromMatrixPosition(h.matrixWorld)):b.set(0,0,0)},update(b){return v=Mf(v,p,b,s),m=Mf(m,S&&v>.6?1:0,b,a),Sf(r,e,v,E),Sf(E,t,m,x),f.position.set(x.x,x.y,x.z),f.rotation.set(x.pitch,x.yaw,x.roll,"YXZ"),f.visible=v>.001,x},pass(b,y){if(f.visible===!1)return;c.aspect=(y==null?void 0:y.aspect)??c.aspect,c.updateProjectionMatrix();const A=b.autoClear;b.autoClear=!1,b.clearDepth(),b.render(u,c),b.autoClear=A},dispose(){u.traverse(b=>{var y,A;b.isMesh&&((y=b.geometry)==null||y.dispose(),Array.isArray(b.material)?b.material.forEach(L=>L.dispose()):(A=b.material)==null||A.dispose())})}};return R.update(0),R}function Wc(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},a={},o=n[0].morphTargetsRelative,l=new si;let u=0;for(let c=0;c<n.length;++c){const f=n[c];let d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in f.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(f.attributes[h]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in f.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;a[h]===void 0&&(a[h]=[]),a[h].push(f.morphAttributes[h])}if(e){let h;if(t)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,h,c),u+=h}}if(t){let c=0;const f=[];for(let d=0;d<n.length;++d){const h=n[d].index;for(let _=0;_<h.count;++_)f.push(h.getX(_)+c);c+=n[d].attributes.position.count}l.setIndex(f)}for(const c in s){const f=yf(s[c]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,f)}for(const c in a){const f=a[c][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let d=0;d<f;++d){const h=[];for(let v=0;v<a[c].length;++v)h.push(a[c][v][d]);const _=yf(h);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(_)}}return l}function yf(n){let e,t,i,r=-1,s=0;for(let u=0;u<n.length;++u){const c=n[u];if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.count*t}const a=new e(s),o=new Dn(a,t,i);let l=0;for(let u=0;u<n.length;++u){const c=n[u];if(c.isInterleavedBufferAttribute){const f=l/t;for(let d=0,h=c.count;d<h;d++)for(let _=0;_<t;_++){const v=c.getComponent(d,_);o.setComponent(d+f,_,v)}}else a.set(c.array,l);l+=c.count*t}return r!==void 0&&(o.gpuType=r),o}const d2=12,ds=24,Th=n=>n.startsWith("glow"),bf=new on,h2=new Yt,p2=new U,m2=new U(1,1,1),g2=new Ze,Ef=new U;function ka(n,e=new Ze){const[,,,,t,i,r,,s=0,a=0,o=0]=n;return bf.set(s,a,o),e.compose(p2.set(t,i,r),h2.setFromEuler(bf),m2)}function xo(n,e={}){const t=Object.keys(n.bones),i={};for(const S of t){const x=n.bones[S],E=new mh;E.name=S,E.position.set(...x.at),x.rot&&E.rotation.set(...x.rot),i[S]=E}const r=new Tn;r.name=n.id??"box-rig";for(const S of t){const x=n.bones[S].parent;if(x===void 0)r.add(i[S]);else if(i[x])i[x].add(i[S]);else throw new Error(`BoxRig '${r.name}': bone '${S}' has unknown parent '${x}'`)}r.updateMatrixWorld(!0);const s=new Map(t.map((S,x)=>[S,x])),a={solid:[],glow:[]},o=new nt,l=new Ze;n.parts.forEach((S,x)=>{const[E,R,b,y,,,,A]=S;if(!s.has(E))throw new Error(`BoxRig '${r.name}': part ${x} rides unknown bone '${E}'`);const L=n.palette[A];if(L===void 0)throw new Error(`BoxRig '${r.name}': part ${x} has unknown colour '${A}'`);const g=new gn(R,b,y);g.deleteAttribute("uv"),g.applyMatrix4(g2.multiplyMatrices(i[E].matrixWorld,ka(S,l))),o.set(L);const M=g.attributes.position.count,P=new Float32Array(M*3),D=new Uint16Array(M*4),F=new Float32Array(M*4),k=s.get(E);for(let N=0;N<M;N++)P[N*3]=o.r,P[N*3+1]=o.g,P[N*3+2]=o.b,D[N*4]=k,F[N*4]=1;g.setAttribute("color",new Dn(P,3)),g.setAttribute("skinIndex",new Rc(D,4)),g.setAttribute("skinWeight",new Dn(F,4)),a[Th(A)?"glow":"solid"].push({g,part:S})});const u=new Dc(t.map(S=>i[S])),c=[],f=(S,x)=>{const E=a[S];if(!E.length)return null;const R=E.length===1?E[0].g:Wc(E.map(y=>y.g),!1);if(!R)throw new Error(`BoxRig '${r.name}': ${S} boxes would not merge`);E.length>1&&E.forEach(y=>y.g.dispose());const b=new Px(R,x);return b.name=`${r.name}:${S}`,b.userData.parts=E.map(y=>y.part),r.add(b),b.bind(u),c.push(b),b},d=f("solid",e.solidMaterial??new Fi({vertexColors:!0,roughness:.85,metalness:0})),h=f("glow",e.glowMaterial??new xn({vertexColors:!0})),_=new ki;for(const S of c)S.geometry.computeBoundingBox(),_.union(S.geometry.boundingBox);const v=_.clone().expandByPoint(Ef.set(0,0,0)).getBoundingSphere(new Ps);v.radius=v.radius*1.25+.4;for(const S of c)S.boundingSphere=v.clone();for(const S of t){const x=i[S];x.userData.rest={p:x.position.clone(),r:x.rotation.clone()}}const m=n.scale??1;r.scale.setScalar(m);const p=h?h.geometry.attributes.color.array.slice():null;return{root:r,bones:i,skeleton:u,solid:d,glow:h,meshes:c,scale:m,reset(){for(const S of t){const x=i[S];x.position.copy(x.userData.rest.p),x.rotation.copy(x.userData.rest.r)}},partAt(S,x){var R;const E=(R=S==null?void 0:S.userData)==null?void 0:R.parts;return E&&Number.isInteger(x)?E[Math.floor(x/d2)]??null:null},bounds(S=[]){const x=new ki;for(const E of c){const R=E.geometry.attributes.position;E.userData.parts.forEach((b,y)=>{if(!S.includes(b[0]))for(let A=y*ds;A<(y+1)*ds;A++)x.expandByPoint(Ef.fromBufferAttribute(R,A))})}return x.min.multiplyScalar(m),x.max.multiplyScalar(m),x},setGlowLit(S,x=()=>!1){if(!h)return;const E=h.geometry.attributes.color;h.userData.parts.forEach((R,b)=>{const y=S||x(R)?1:.1;for(let A=b*ds*3;A<(b+1)*ds*3;A++)E.array[A]=p[A]*y}),E.needsUpdate=!0},dispose(){for(const S of c)S.geometry.dispose();u.dispose()}}}const Ut=(n,e,t)=>n<e?e:n>t?t:n,kn=(n,e,t)=>n+(e-n)*t,Rs=n=>n<=0?0:n>=1?1:n*n*(3-2*n),li=n=>{const e=1-Ut(n,0,1);return 1-e*e*e},Er=n=>{const e=Ut(n,0,1);return e*e},Ll=(n,e,t,i)=>t<=0?e:n+(e-n)*(1-Math.exp(-Math.LN2*i/t));function ti(n,e,t,i){const r=2*Math.LN2/t,s=n.x-e,a=n.v+s*r,o=Math.exp(-r*i);n.x=o*(s+a*i)+e,n.v=o*(n.v-a*r*i)}const Gs=(n,e)=>n*Math.E/e,wf=n=>2*Math.LN2*n;function _2(n,e,t,i){if(i<=0)return e?1:0;if(e){if(n>=1)return 1;const s=1-Math.cbrt(1-n)+t/i;return s>=1?1:1-(1-s)**3}if(n<=0)return 0;const r=Math.cbrt(n)-t/i;return r<=0?0:r**3}function Ah(n,e,t,i){if(!i)return Rs(n);const r=!!i.in&&i.in.some(a=>Math.abs(a-t)<1e-9),s=!!i.out&&i.out.some(a=>Math.abs(a-e)<1e-9);return r&&s?Ut(n,0,1):r?Er(n):s?li(n):Rs(n)}function Wn(n,e,t=[],i=null){const r=n[0].length-1;if(e<=n[0][0]){for(let c=0;c<r;c++)t[c]=n[0][c+1];return t}const s=n[n.length-1];if(e>=s[0]){for(let c=0;c<r;c++)t[c]=s[c+1];return t}let a=1;for(;n[a][0]<e;)a++;const o=n[a-1],l=n[a],u=Ah((e-o[0])/(l[0]-o[0]||1),o[0],l[0],i);for(let c=0;c<r;c++)t[c]=o[c+1]+(l[c+1]-o[c+1])*u;return t}function Tf(n,e,t=null){if(e<=n[0][0])return{from:n[0][1],to:n[0][1],w:1,extra:n[0].slice(2)};const i=n[n.length-1];if(e>=i[0])return{from:i[1],to:i[1],w:1,extra:i.slice(2)};let r=1;for(;n[r][0]<e;)r++;const s=n[r-1],a=n[r],o=Ah((e-s[0])/(a[0]-s[0]||1),s[0],a[0],t);return{from:s[1],to:a[1],w:o,extra:s.slice(2).map((l,u)=>l+(a[u+2]-l)*o)}}const wr=n=>{const e=Math.sin(n*12.9898+78.233)*43758.5453;return(e-Math.floor(e))*2-1},v2={pelvis:{at:[0,.92,0]},spine:{parent:"pelvis",at:[0,.06,0]},chest:{parent:"spine",at:[0,.24,0]},head:{parent:"chest",at:[0,.34,0]},armL:{parent:"chest",at:[.28,.26,0]},foreL:{parent:"armL",at:[0,-.32,0]},handL:{parent:"foreL",at:[0,-.28,0]},armR:{parent:"chest",at:[-.28,.26,0]},foreR:{parent:"armR",at:[0,-.32,0]},handR:{parent:"foreR",at:[0,-.28,0]},thighL:{parent:"pelvis",at:[.1,-.04,0]},shinL:{parent:"thighL",at:[0,-.42,0]},footL:{parent:"shinL",at:[0,-.38,0]},thighR:{parent:"pelvis",at:[-.1,-.04,0]},shinR:{parent:"thighR",at:[0,-.42,0]},footR:{parent:"shinR",at:[0,-.38,0]},capeA:{parent:"chest",at:[0,.26,-.14]},capeB:{parent:"capeA",at:[0,-.52,0]},mark:{parent:"pelvis",at:[0,-.02,.13]},skirtB:{parent:"pelvis",at:[0,-.02,-.13]}},Rh=[["pelvis",.36,.16,.23,0,0,0,"suit"],["spine",.4,.26,.23,0,.12,0,"suit"],["chest",.44,.3,.25,0,.14,0,"suit"],["chest",.13,.08,.13,0,.32,0,"suit"],["head",.21,.23,.23,0,.115,0,"mask"],["armL",.12,.34,.13,0,-.16,0,"suit"],["foreL",.11,.3,.12,0,-.14,0,"suit"],["handL",.1,.1,.1,0,-.05,0,"glove"],["armR",.12,.34,.13,0,-.16,0,"suit"],["foreR",.11,.3,.12,0,-.14,0,"suit"],["handR",.1,.1,.1,0,-.05,0,"glove"],["thighL",.17,.44,.19,0,-.21,0,"suit"],["shinL",.15,.4,.17,0,-.2,0,"suit"],["footL",.18,.09,.3,0,-.035,.05,"boot"],["thighR",.17,.44,.19,0,-.21,0,"suit"],["shinR",.15,.4,.17,0,-.2,0,"suit"],["footR",.18,.09,.3,0,-.035,.05,"boot"]],x2={thighL:[-.1,0,0],thighR:[-.1,0,0],shinL:[.2,0,0],shinR:[.2,0,0],footL:[-.1,0,0],footR:[-.1,0,0],spine:[.05,0,0],chest:[.05,0,0],head:[-.1,0,0],armL:[-.35,0,.18],armR:[-.35,0,-.18],foreL:[-.8,0,0],foreR:[-.8,0,0],capeA:[.1,0,0],skirtB:[.06,0,0],mark:[-.04,0,0]},M2=-.01,Ko=Math.PI*2;function S2(n,e,t=1){for(const i in e){const r=e[i],s=n[i];s&&(s.rotation.x+=r[0]*t,s.rotation.y+=r[1]*t,s.rotation.z+=r[2]*t)}}function y2(n,e,t){n.armL.rotation.z+=t,n.armR.rotation.z-=t,n.foreL.rotation.x+=-.12,n.foreR.rotation.x+=-.12,n.chest.rotation.x+=.012*Math.sin(Ko*e/3.2),n.capeA.rotation.x+=.03*Math.sin(Ko*e/2.6),n.mark.rotation.x+=.02*Math.sin(Ko*e/2.6+1),n.skirtB.rotation.x+=.02*Math.sin(Ko*e/2.6+2)}const b2=(n,e,t)=>({id:`risen-${n}`,bones:v2,parts:[...Rh,...e],palette:t}),E2={titanPlate:{plate:"#595d60",plateDark:"#3a3d40",plateEdge:"#a9b3b8",gauntlet:"#595d60",cloth:"#5d6142",clothDark:"#41442e",clothTrim:"#c8bfa6",sleeve:"#2b2e31",classItem:"#5d6142",classItemMark:"#c8bfa6",suit:"#2b2e31",glove:"#3b2f27",leather:"#5a3e2b",strap:"#4a3a2c",boot:"#2a2622",mask:"#151719",glowVisor:"#dff3ff",glowElement:"#6fd3ff"},hunterCloak:{plate:"#7d858a",plateDark:"#4a4f53",plateEdge:"#b9c1c5",gauntlet:"#7d858a",cloth:"#3e3530",clothDark:"#2c2622",clothTrim:"#bdb29a",sleeve:"#4f6660",classItem:"#3e3530",classItemMark:"#8a4a2b",suit:"#2b2e31",glove:"#3b2f27",leather:"#5a3e2b",strap:"#8a4a2b",boot:"#2a2622",mask:"#151719",glowVisor:"#dff3ff",glowElement:"#ff8a2a"},warlockRobe:{plate:"#4a4f53",plateDark:"#33373a",plateEdge:"#8d969b",gauntlet:"#5a3e2b",cloth:"#6e6450",clothDark:"#4f483a",clothTrim:"#c8bfa6",sleeve:"#6e6450",classItem:"#c8bfa6",classItemMark:"#8a7a5a",suit:"#2b2e31",glove:"#3b2f27",leather:"#5a3e2b",strap:"#8a7a5a",boot:"#2a2622",mask:"#151719",glowVisor:"#dff3ff",glowElement:"#c9a9ff"}},Mt=(n,e,t,i,r,s,a,o,l=0,u=0,c=0,f=o)=>[[n,e,t,i,r,s,a,o,l,u,c],[n.replace(/L$/,"R"),e,t,i,-r,s,a,f,l,-u,-c]],w2={parts:[["head",.25,.12,.27,0,.215,-.01,"plate"],["head",.23,.03,.25,0,.265,-.005,"plate",-.1],["head",.266,.03,.03,0,.18,.122,"plateEdge"],...Mt("head",.1,.14,.05,.066,.05,.105,"plate"),["head",.17,.022,.012,0,.14,.119,"glowVisor"],["head",.04,.1,.03,0,.12,.14,"plateEdge"],...Mt("head",.03,.1,.14,.12,.1,-.02,"plateDark"),["head",.24,.2,.08,0,.1,-.14,"plate",.35],["chest",.58,.2,.32,0,.2,.005,"plate"],["chest",.46,.13,.3,0,.045,.005,"plate"],["chest",.26,.03,.02,0,.235,.172,"plateEdge"],["chest",.12,.07,.02,-.13,.155,.172,"plateEdge"],["chest",.26,.06,.24,0,.32,0,"plateDark"],["chest",.3,.03,.05,0,.315,.105,"clothTrim"],["chest",.34,.07,.12,0,.335,-.105,"cloth"],["chest",.4,.16,.02,0,.19,-.17,"plateDark"],...Mt("chest",.018,.12,.1,.297,.2,0,"strap"),["spine",.3,.07,.04,0,.17,.125,"plateDark"],["spine",.28,.07,.04,0,.095,.125,"plateDark"],["spine",.42,.05,.25,0,.205,0,"clothDark"],["pelvis",.4,.06,.25,0,.06,0,"leather"],["pelvis",.07,.04,.02,0,.06,.13,"plateEdge"],...Mt("pelvis",.024,.12,.18,.205,-.025,0,"plateDark"),["skirtB",.3,.14,.025,0,-.02,-.025,"plateDark"],["mark",.25,.46,.02,0,-.21,.035,"classItem",-.06],["mark",.035,.38,.02,.055,-.2091,.05,"classItemMark",-.06],["mark",.11,.05,.04,-.06,-.4546,.0497,"clothDark",-.06],["mark",.07,.07,.02,-.06,-.1193,.0446,"clothTrim",-.06],...Mt("mark",.03,.08,.08,.09,.0293,.0156,"strap",-.06),...Mt("armL",.25,.11,.3,.055,.005,0,"plate",0,0,-.2,"plateDark"),...Mt("armL",.2,.06,.26,.08,-.075,0,"plate",0,0,-.28,"plateDark"),...Mt("armL",.27,.025,.02,.049,-.0244,.155,"plateEdge",0,0,-.2),...Mt("armL",.03,.09,.11,.072,-.2,0,"plate"),...Mt("armL",.14,.05,.15,0,-.07,0,"clothDark"),...Mt("armL",.16,.05,.17,0,-.12,0,"cloth"),...Mt("armL",.14,.03,.15,0,-.26,0,"strap"),...Mt("foreL",.14,.22,.15,0,-.17,0,"gauntlet"),...Mt("foreL",.16,.05,.17,0,-.255,0,"plate"),...Mt("foreL",.13,.055,.05,0,-.0275,-.075,"plateDark"),...Mt("foreL",.16,.02,.17,0,-.08,0,"plateEdge"),...Mt("handL",.018,.06,.08,.058,-.04,0,"plate"),...Mt("handL",.012,.03,.04,.07,-.04,0,"plateEdge"),...Mt("handL",.04,.03,.06,.059,-.075,0,"plateDark"),...Mt("handL",.012,.012,.04,.082,-.075,0,"glowElement"),...Mt("thighL",.15,.24,.03,.03,-.13,.108,"plate",0,.4),...Mt("thighL",.19,.03,.21,0,-.28,0,"strap"),...Mt("shinL",.13,.09,.05,0,-.01,.1,"plate"),...Mt("shinL",.17,.28,.04,0,-.22,.095,"plate"),...Mt("shinL",.19,.03,.2,0,-.3,0,"strap"),...Mt("footL",.2,.056,.13,0,-.009,.145,"plate"),...Mt("footL",.18,.05,.21,0,.035,0,"leather")],previewArmOut:.1,clothLimits:{mark:[-.6,0]},targets:{boxes:[60,85],topY:[1.83,1.87],minY:[-.005,.005],visorY:[1.68,1.72],shoulderSpan:[.86,.96],chestSpan:[.54,.62],waistSpanMax:.46,hemSpanMax:.46,vRatioMin:1.85,armourShare:[.7,.9],detail:{bones:["armL","foreL","handL","armR","foreR","handR","chest"],min:.4},mark:{topMin:.86,bottom:[.38,.48],width:[.22,.28]},clothNearHead:{bones:["head","chest"],above:1.45,min:1}}},T2={parts:[["head",.226,.246,.246,0,.115,0,"plateDark"],["head",.2,.03,.02,0,.178,.133,"plate"],["head",.12,.018,.008,0,.14,.127,"glowVisor"],["head",.17,.095,.025,0,.062,.1355,"plate"],["head",.19,.05,.13,0,.005,.07,"plateDark"],["head",.022,.12,.022,-.045,-.02,.17,"leather",-.35,0,-.3],["head",.07,.06,.05,0,.055,.168,"mask"],["head",.05,.05,.075,.078,.036,.168,"plate",.35,.5,0],["head",.05,.05,.075,-.078,.036,.168,"plate",.35,-.5,0],["head",.068,.068,.012,.0979,.0235,.2022,"strap",.35,.5,0],["head",.068,.068,.012,-.0979,.0235,.2022,"strap",.35,-.5,0],["head",.28,.28,.21,0,.11,-.045,"classItem"],["head",.25,.06,.21,0,.28,-.045,"classItem"],["head",.25,.04,.1,0,.26,.105,"classItem",.2,0,0],["head",.03,.21,.09,.125,.11,.1,"classItem"],["head",.03,.21,.09,-.125,.11,.1,"classItem"],["chest",.18,.06,.19,0,.32,.005,"clothTrim"],["chest",.06,.16,.02,.06,.2,.185,"clothTrim",0,0,.1],["chest",.34,.22,.03,0,.145,.14,"plateEdge"],["chest",.32,.025,.05,0,.255,.139,"plate"],["chest",.3,.22,.015,0,.15,-.1325,"plateDark"],["chest",.035,.32,.02,.12,.125,.176,"strap"],["chest",.035,.32,.02,-.12,.125,.176,"strap"],["chest",.1,.07,.04,.09,0,.145,"leather"],["chest",.1,.07,.04,-.09,0,.145,"leather"],["spine",.26,.09,.025,0,.135,.1275,"plateDark"],["armL",.15,.035,.17,.012,.022,0,"plate",0,0,-.28],["armR",.15,.035,.17,-.012,.022,0,"plate",0,0,.28],["armL",.13,.03,.15,.025,-.03,0,"plateDark",0,0,-.4],["armR",.13,.03,.15,-.025,-.03,0,"plateDark",0,0,.4],["foreL",.13,.26,.14,0,-.13,0,"sleeve"],["foreR",.13,.26,.14,0,-.13,0,"sleeve"],["foreL",.148,.02,.158,0,-.27,0,"clothTrim"],["foreR",.148,.02,.158,0,-.27,0,"clothTrim"],["foreL",.13,.02,.14,0,-.3,0,"strap"],["foreR",.13,.02,.14,0,-.3,0,"strap"],["handL",.014,.02,.07,.057,-.07,0,"gauntlet"],["handR",.014,.02,.07,-.057,-.07,0,"gauntlet"],["handL",.01,.014,.086,.055,-.089,0,"glowElement"],["handR",.01,.014,.086,-.055,-.089,0,"glowElement"],["pelvis",.42,.05,.25,0,.065,0,"leather"],["pelvis",.05,.035,.012,0,.065,.131,"plateEdge"],["thighL",.15,.28,.025,.012,-.18,.1075,"plateDark",0,.2,0],["thighR",.15,.28,.025,-.012,-.18,.1075,"plateDark",0,-.2,0],["thighL",.19,.03,.21,0,-.36,0,"strap"],["thighR",.19,.03,.21,0,-.36,0,"strap"],["thighL",.035,.17,.05,.1,-.15,.03,"leather",0,0,.15],["shinL",.13,.09,.06,0,0,.1,"plateDark"],["shinR",.13,.09,.06,0,0,.1,"plateDark"],["shinL",.12,.27,.025,0,-.19,.0975,"plateDark"],["shinR",.12,.27,.025,0,-.19,.0975,"plateEdge"],["shinL",.025,.2,.09,.0825,-.18,.03,"plateDark"],["shinR",.025,.2,.09,-.0825,-.18,.03,"plateEdge"],["shinL",.168,.025,.188,0,-.25,0,"strap"],["shinR",.168,.025,.188,0,-.25,0,"strap"],["shinL",.17,.08,.19,0,-.345,0,"boot"],["shinR",.17,.08,.19,0,-.345,0,"boot"],["footL",.196,.05,.11,0,-.005,.155,"plateDark"],["footR",.196,.05,.11,0,-.005,.155,"plateDark"],["capeA",.28,.12,.03,0,.07,-.03,"classItem",.5,0,0],["capeA",.49,.335,.02,0,-.1125,-.02,"classItem"],["capeA",.45,.29,.035,0,-.385,-.0125,"classItem"],["capeA",.11,.09,.008,-.11,-.17,-.034,"clothDark"],["capeA",.43,.025,.008,0,-.47,-.034,"classItemMark"],["capeB",.09,.39,.02,.19,-.165,-.02,"classItem",0,0,.05],["capeB",.09,.44,.02,.095,-.19,-.02,"classItem"],["capeB",.09,.47,.02,0,-.205,-.02,"classItem"],["capeB",.09,.41,.02,-.095,-.175,-.02,"classItem"],["capeB",.09,.35,.02,-.19,-.145,-.02,"classItem",0,0,-.05],["capeB",.05,.14,.012,.1425,-.36,-.037,"clothDark",0,0,.06]],previewArmOut:.12,clothLimits:{capeA:[-.05,.35],capeB:[-.4,.6]},targets:{boxes:[50,75],topY:[1.85,1.9],visorY:[1.68,1.72],visorRecess:.02,shoulderSpan:[.68,.76],chestSpan:[.46,.52],waistSpan:[.42,.48],hemSpanMax:.5,armourShare:[.4,.6],detailShareMin:.35,capeBottom:[.5,.62],capeBackZ:-.16,capeShoulderSpan:.4,hemLevels:3,hemStep:.04,caydeWidth:.06,mismatch:{bone:"shinR",key:"plateEdge",pair:"plateDark"}}},Xc=Math.PI/4,Ls=[],vt=(...n)=>Ls.push(n),an=(n,e,t,i,r,s,a,o,l=0,u=0,c=0)=>{Ls.push([n,e,t,i,r,s,a,o,l,u,c]),Ls.push([n.replace(/L$/,"R"),e,t,i,-r,s,a,o,l,-u,-c])},Us=(n,e,t,i,r,s,a,o,l=0,u=0,c=0)=>{Ls.push([n,e,t,i,r,s,a,o,l,u,c]),Ls.push([n,e,t,i,-r,s,a,o,l,-u,-c])};vt("head",.15,.128,.165,0,.234,-.0075,"plate");vt("head",.27,.088,.285,0,.194,-.0075,"plate");Us("head",.035,.125,.255,.1175,.0925,-.0225,"plate");vt("head",.2,.125,.035,0,.0925,-.1325,"plate");Us("head",.085,.03,.165,.0944,.2574,-.0075,"plate",0,0,-Xc);vt("head",.15,.03,.085,0,.2574,.0944,"plate",Xc,0,0);vt("head",.15,.03,.085,0,.2574,-.1094,"plate",-Xc,0,0);vt("head",.2,.022,.012,0,.162,.141,"plateEdge");vt("head",.14,.018,.01,0,.14,.12,"glowVisor");vt("chest",.24,.08,.04,0,.325,-.095,"cloth");Us("chest",.035,.08,.17,.1025,.325,-.01,"cloth");vt("chest",.5,.1,.28,0,.25,0,"cloth");vt("chest",.5,.22,.28,0,.09,0,"cloth");vt("chest",.2,.2,.03,0,.14,.152,"plate");Us("chest",.075,.28,.02,.105,.15,.172,"clothTrim",0,0,-.3);vt("chest",.07,.06,.012,-.17,.02,.146,"clothDark");vt("spine",.48,.28,.26,0,.12,0,"cloth");vt("spine",.52,.055,.29,0,.03,0,"clothTrim");vt("spine",.06,.045,.012,0,.03,.151,"plateEdge");Us("spine",.024,.024,.01,.065,.11,.135,"plateEdge");Us("spine",.024,.024,.01,.065,.18,.135,"plateEdge");vt("spine",.09,.08,.05,-.15,-.03,.16,"leather");vt("pelvis",.5,.185,.27,0,-.0025,0,"cloth");an("thighL",.22,.3,.03,.03,-.13,.123,"cloth");an("thighL",.26,.16,.034,.05,-.36,.125,"cloth");an("thighL",.276,.03,.05,.05,-.445,.125,"clothDark");an("thighL",.075,.35,.265,.1335,-.1493,-.0075,"cloth",0,0,.22);an("thighL",.07,.17,.29,.1852,-.3666,-.01,"cloth",0,0,.22);an("thighL",.09,.03,.316,.2027,-.4447,-.0065,"clothDark",0,0,.22);vt("skirtB",.48,.33,.03,0,-.135,-.02,"cloth");vt("skirtB",.58,.16,.034,0,-.38,-.022,"cloth");vt("skirtB",.596,.03,.05,0,-.465,-.022,"clothDark");vt("skirtB",.016,.3,.01,0,-.29,-.042,"clothDark");vt("skirtB",.3,.045,.012,0,-.06,-.041,"clothTrim");an("shinL",.12,.09,.024,0,-.03,.099,"plate");an("shinL",.166,.15,.186,0,-.18,0,"leather");an("shinL",.182,.17,.202,0,-.325,0,"boot");an("armL",.15,.37,.16,0,-.165,0,"sleeve");vt("armL",.15,.045,.19,.012,.02,0,"plate",0,0,-.25);vt("armR",.15,.045,.19,-.012,.02,0,"plateEdge",0,0,.25);an("foreL",.145,.25,.155,0,-.105,0,"sleeve");an("foreL",.161,.045,.171,0,-.2225,0,"clothDark");an("foreL",.128,.1,.138,0,-.265,0,"gauntlet");an("foreL",.144,.012,.154,0,-.26,0,"strap");an("foreL",.144,.012,.154,0,-.295,0,"strap");vt("armL",.172,.07,.182,0,-.15,0,"classItem");vt("armL",.188,.012,.198,0,-.15,0,"classItemMark");vt("armL",.02,.11,.05,.096,-.215,-.03,"classItem");vt("armL",.008,.006,.06,.09,-.175,.035,"glowElement");an("handL",.008,.05,.05,-.054,-.055,0,"glowElement");an("handL",.008,.06,.006,.054,-.055,0,"glowElement");const A2={parts:Ls,previewArmOut:.2,clothLimits:{skirtB:[-.2,.6]},targets:{boxes:[50,75],topY:[1.82,1.87],minY:[-.005,.005],visorY:[1.68,1.72],shoulderSpan:[.7,.78],chestSpan:[.48,.54],waistSpan:[.5,.58],hemSpanMin:.6,hemOverChestMin:.08,coatBottom:[.34,.48],armourShare:[.12,.3],detailShareMin:.45,bond:{parts:[1,2],boneY:[-.22,-.1],worldY:[1.26,1.38],wrapW:.13,wrapD:.14,threadMaxArea:.01},chamfers:{min:2,rad:[.5,1]},kneelFloor:-.02}},Cl=.24,qc={cameraMotion:1},ic=.15,R2=.06,Mo={arc:{hud:"#7bd3f7",glow:"#6fd3ff"},solar:{hud:"#f07a2a",glow:"#ff8a2a"},void:{hud:"#a57be0",glow:"#c9a9ff"}},$n={titanPlate:{element:"arc",grenade:"titan.grenade",melee:"titan.melee",class:"titan.class",super:"titan.super"},hunterCloak:{element:"solar",grenade:"hunter.grenade",melee:"hunter.melee",class:"hunter.class",super:"hunter.super"},warlockRobe:{element:"void",grenade:"warlock.grenade",melee:"warlock.melee",class:"warlock.class",super:"warlock.super"}},Pl={speed:7.5,lift:4.2,gravity:14,lifetime:2.5,floorY:.1,wallPad:.15},ni={"titan.grenade":{slot:"grenade",view:"fp",seconds:.62,events:[[.48,"release"],[1,"end"]],commit:"release",move:[[0,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{kind:"pulse",lob:Pl,selfScale:.6,radius:3.2,blast:40,pulses:[[.6,30],[1.2,30],[1.8,30]]}},"hunter.grenade":{slot:"grenade",view:"fp",seconds:.62,events:[[.48,"release"],[1,"end"]],commit:"release",move:[[0,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{kind:"blaze",lob:Pl,selfScale:.6,radius:3.2,blast:100,burn:{seconds:3,every:.5,damage:5}}},"warlock.grenade":{slot:"grenade",view:"fp",seconds:.62,events:[[.48,"release"],[1,"end"]],commit:"release",move:[[0,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{kind:"sink",lob:Pl,selfScale:.6,radius:3,seconds:2.4,every:.3,ticks:8,damage:17}},"titan.melee":{slot:"melee",view:"fp",seconds:.95,events:[[.17,"impact"],[.45,"recoverable"],[1,"end"]],commit:"recoverable",move:[[0,"driven"],[.17,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{reach:4.5,coneDeg:15,lungeMax:2.5,strikeRange:2.6,basic:80,charged:120,snap:1.2,burn:null}},"hunter.melee":{slot:"melee",view:"fp",seconds:.93,events:[[.143,"impact"],[.45,"recoverable"],[1,"end"]],commit:"recoverable",move:[[0,"driven"],[.143,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:96,tuning:{reach:4.5,coneDeg:15,lungeMax:2.5,strikeRange:2.6,basic:80,charged:120,snap:1.2,burn:{seconds:3,every:.5,damage:5}}},"warlock.melee":{slot:"melee",view:"fp",seconds:.95,events:[[.158,"impact"],[.45,"recoverable"],[1,"end"]],commit:"recoverable",move:[[0,"driven"],[.158,"free"]],grounded:!1,camera:null,damageTaken:1,cooldown:null,launchCooldown:83,tuning:{reach:4.5,coneDeg:15,lungeMax:2.5,strikeRange:2.6,basic:80,charged:120,snap:1.2,burn:null}},"titan.class":{slot:"class",view:"fp",seconds:.7,events:[[.57,"plant"],[1,"end"]],commit:"plant",move:[[0,"locked"],[.643,"free"]],grounded:!0,camera:null,damageTaken:1,cooldown:38*Cl,launchCooldown:38,tuning:{wall:{width:2.4,height:1.15,depth:.25,ahead:1.5,rise:.25,seconds:20,sink:.25,hp:500},zone:{near:.1,far:1.8,lateral:1.3},rearm:.5}},"hunter.class":{slot:"class",view:"tp",seconds:.5,events:[[.6,"reload"],[1,"end"]],commit:"reload",move:[[0,"driven"],[1,"free"]],grounded:!0,camera:"roll",damageTaken:1,cooldown:25*Cl,launchCooldown:25,tuning:{distance:4,travel:[.04,.74],noInputBackMin:3,untargetable:!0}},"warlock.class":{slot:"class",view:"tp",seconds:2,events:[[.75,"plant"],[1,"end"]],commit:"plant",move:[[0,"locked"],[1,"free"]],grounded:!0,camera:"circle",damageTaken:.8,cooldown:83*Cl,launchCooldown:83,tuning:{radius:3.75,seconds:15,weaponScale:1.2,heal:40,fadeIn:.2,fadeOut:.5}},"titan.super":{slot:"super",view:"tp",seconds:1.6,events:[[.5,"impact"],[1,"end"]],commit:"impact",move:[[0,"driven"],[.5375,"locked"],[1,"free"]],grounded:!1,camera:"slam",damageTaken:.4,cooldown:null,launchCooldown:null,tuning:{radius:7,centreHeight:1,damage:99999,spend:"impact",shake:{amplitude:.05,seconds:.3}}},"hunter.super":{slot:"super",view:"tp",seconds:.8,events:[[.55,"release"],[1,"end"]],commit:"release",move:[[0,"driven"],[.55,"locked"],[1,"free"]],grounded:!1,camera:"throw",damageTaken:1,cooldown:null,launchCooldown:null,tuning:{speed:40,radius:.06,range:40,damage:99999,pierce:!0,hitBurst:{radius:.8,seconds:.15},spend:"release"}},"warlock.super":{slot:"super",view:"tp",seconds:1.2,events:[[.58,"release"],[1,"end"]],commit:"release",move:[[0,"driven"],[.58,"locked"],[1,"free"]],grounded:!1,camera:"burst",damageTaken:.46,cooldown:null,launchCooldown:null,tuning:{diameter:.45,speed:18,lifetime:3,radius:6,damage:99999,spend:"release"}}},Af=Math.PI*2,L2=Math.PI/4,C2=-.01,wa={"hunter.class":{bones:{armL:[[0,0,0,0],[.12,-.55,0,-.03],[.2,-.15,0,-.13],[.5,-.15,0,-.13],[.6,-.75,0,.37],[.72,-.35,0,.42],[.85,-.2,0,.22],[1,0,0,0]],armR:[[0,0,0,0],[.12,-.55,0,.03],[.2,-.15,0,.13],[.5,-.15,0,.13],[.6,.6,0,-.12],[.72,.5,0,-.17],[.85,.15,0,-.12],[1,0,0,0]],capeA:[[0,0,0,0],[.12,.1,0,0],[.2,-.35,0,0],[.5,-.35,0,0],[.6,-.2,0,0],[.72,.15,0,0],[.85,0,0,0],[1,0,0,0]],capeB:[[0,0,0,0],[.12,0,0,0],[.2,-.35,0,0],[.5,-.35,0,0],[.6,-.2,0,0],[.72,.15,0,0],[.85,0,0,0],[1,0,0,0]],chest:[[0,0,0,0],[.12,.35,0,0],[.2,.55,0,0],[.5,.55,0,0],[.6,.25,0,0],[.72,.2,0,0],[.85,.1,0,0],[1,0,0,0]],footL:[[0,0,0,0],[.12,-.477,0,0],[.2,.4,0,0],[.5,.4,0,0],[.6,.2,0,0],[.72,-.571,0,0],[.85,-.632,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.12,-.477,0,0],[.2,.4,0,0],[.5,.4,0,0],[.6,.1,0,0],[.72,1.279,0,0],[.85,-.931,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.12,-.6,0,0],[.2,-1.2,0,0],[.5,-1.2,0,0],[.6,.2,0,0],[.72,.3,0,0],[.85,.1,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.12,-.6,0,0],[.2,-1.2,0,0],[.5,-1.2,0,0],[.6,-.1,0,0],[.72,.1,0,0],[.85,0,0,0],[1,0,0,0]],head:[[0,0,0,0],[.12,.4,0,0],[.2,.8,0,0],[.5,.8,0,0],[.6,.45,0,0],[.72,.05,0,0],[.85,0,0,0],[1,0,0,0]],shinL:[[0,0,0,0],[.12,1.527,0,0],[.2,2.3,0,0],[.5,2.3,0,0],[.6,1.8,0,0],[.72,1.721,0,0],[.85,1.282,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.12,1.527,0,0],[.2,2.3,0,0],[.5,2.3,0,0],[.6,1.5,0,0],[.72,1.371,0,0],[.85,1.181,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.12,.3,0,0],[.2,.45,0,0],[.5,.45,0,0],[.6,.3,0,0],[.72,.2,0,0],[.85,.15,0,0],[1,0,0,0]],thighL:[[0,0,0,0],[.12,-1.05,0,.05],[.2,-2.1,0,.12],[.5,-2.1,0,.12],[.6,-1.6,0,.1],[.72,-1.15,0,.1],[.85,-.65,0,.08],[1,0,0,0]],thighR:[[0,0,0,0],[.12,-1.05,0,-.05],[.2,-2.1,0,-.12],[.5,-2.1,0,-.12],[.6,-1.4,0,-.1],[.72,.1,0,0],[.85,-.25,0,-.08],[1,0,0,0]],pelvis:[[0,0,0,0],[.12,0,0,0],[.72,Af,0,0],[1,Af,0,0]]},pelvisPos:[[0,0,0,0],[.12,0,-.3,0],[.16,0,-.402,-.012],[.2,0,-.483,-.038],[.24,0,-.433,-.056],[.28,0,-.41,-.035],[.32,0,-.141,.095],[.36,0,-.012,.286],[.4,0,-.197,.337],[.44,0,-.464,.422],[.48,0,-.676,.432],[.52,0,-.566,.322],[.56,0,-.494,.072],[.6,0,-.496,-.049],[.64,0,-.265,-.013],[.68,0,-.148,-.002],[.72,0,-.36,0],[.85,0,-.2,0],[1,0,0,0]],root:[[0,0,0,0],[1,0,0,0]],ground:[[0,1],[1,1]],glow:[[0,0]],face:"move",cloth:[[0,1],[.12,0],[.72,0],[.85,1],[1,1]]},"warlock.class":{bones:{armL:[[0,0,0,0],[.12,-.2,0,-.13],[.4,.15,0,.57],[.62,.13,0,.6],[.75,.45,0,.77],[.85,.5,0,.77],[.93,-.05,0,.42],[1,0,0,0]],armR:[[0,0,0,0],[.12,-.2,0,.13],[.4,-2.5,0,-.07],[.62,-2.53,0,-.07],[.75,-.95,0,.06],[.85,-.97,0,.06],[.93,-.25,0,-.27],[1,0,0,0]],chest:[[0,0,0,0],[.12,-.1,0,0],[.4,-.2,.15,0],[.62,-.22,.15,0],[.75,.55,-.15,0],[.85,.58,-.15,0],[.93,.05,0,0],[1,0,0,0]],footL:[[0,0,0,0],[.12,-.491,0,0],[.4,-.308,0,0],[.62,-.355,0,0],[.75,-.527,0,0],[.85,-.558,0,0],[.93,-.579,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.12,-.491,0,0],[.4,-.416,0,0],[.62,-.467,0,0],[.75,-1.353,0,0],[.85,-1.393,0,0],[.93,-.859,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.12,-1.15,0,0],[.4,.4,0,0],[.62,.38,0,0],[.75,.2,0,0],[.85,.15,0,0],[.93,.3,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.12,-1.15,0,0],[.4,.55,0,0],[.62,.58,0,0],[.75,.75,0,0],[.85,.73,0,0],[.93,.3,0,0],[1,0,0,0]],head:[[0,0,0,0],[.12,.3,0,0],[.4,-.2,0,0],[.62,-.22,0,0],[.75,.15,0,0],[.85,.18,0,0],[.93,.05,0,0],[1,0,0,0]],shinL:[[0,0,0,0],[.12,.741,0,0],[.4,.508,0,0],[.62,.575,0,0],[.75,1.627,0,0],[.85,1.678,0,0],[.93,1.129,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.12,.741,0,0],[.4,.366,0,0],[.62,.417,0,0],[.75,1.403,0,0],[.85,1.443,0,0],[.93,.959,0,0],[1,0,0,0]],skirtB:[[0,0,0,0],[.12,0,0,0],[.4,0,0,0],[.62,0,0,0],[.75,.24,0,0],[.85,.24,0,0],[.93,0,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.12,0,0,0],[.4,-.1,0,0],[.62,-.11,0,0],[.75,.4,0,0],[.85,.42,0,0],[.93,.1,0,0],[1,0,0,0]],thighL:[[0,0,0,0],[.12,-.25,0,.06],[.4,-.2,0,.1],[.62,-.22,0,.1],[.75,-1.1,0,.1],[.85,-1.12,0,.1],[.93,-.55,0,.08],[1,0,0,0]],thighR:[[0,0,0,0],[.12,-.25,0,-.06],[.4,.05,0,-.08],[.62,.05,0,-.08],[.75,-.05,0,-.06],[.85,-.05,0,-.06],[.93,-.1,0,-.06],[1,0,0,0]]},pelvisPos:[[0,0,0,0],[.12,0,-.08,0],[.4,0,-.04,0],[.62,0,-.05,0],[.75,0,-.33,0],[.85,0,-.345,0],[.93,0,-.16,0],[1,0,0,0]],root:[[0,0,0,0],[1,0,0,0]],ground:[[0,1],[1,1]],glow:[[0,0],[.4,1],[.95,0]],face:"cast",faceOffset:[[0,0],[.62,0],[.75,.436],[.85,.436],[1,0]],ease:{in:[.75],out:[],tracks:["armR","foreR"]}},"titan.super":{bones:{armL:[[0,0,0,0],[.1,1.05,0,.12],[.22,-1.65,0,-.08],[.34,-2.5,0,-.4],[.44,-2.25,0,-.38],[.5,-.7,0,-.3],[.75,-.67,0,-.3],[.88,-.2,0,.07],[1,0,0,0]],armR:[[0,0,0,0],[.1,1.05,0,-.12],[.22,-1.65,0,.08],[.34,-2.5,0,.4],[.44,-2.25,0,.38],[.5,-.7,0,.3],[.75,-.67,0,.3],[.88,-.2,0,-.07],[1,0,0,0]],chest:[[0,0,0,0],[.1,.3,0,0],[.22,-.2,0,0],[.34,-.35,0,0],[.44,0,0,0],[.5,.65,0,0],[.75,.69,0,0],[.88,.25,0,0],[1,0,0,0]],footL:[[0,0,0,0],[.1,-.697,0,0],[.22,.65,0,0],[.34,.45,0,0],[.44,.4,0,0],[.5,-.789,0,0],[.75,-.828,0,0],[.88,-.536,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.1,-.697,0,0],[.22,.65,0,0],[.34,.45,0,0],[.44,.4,0,0],[.5,1.279,0,0],[.75,1.279,0,0],[.88,-1.027,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.1,.5,0,0],[.22,.2,0,0],[.34,.45,0,0],[.44,.55,0,0],[.5,.7,0,0],[.75,.68,0,0],[.88,.2,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.1,.5,0,0],[.22,.2,0,0],[.34,.45,0,0],[.44,.55,0,0],[.5,.7,0,0],[.75,.68,0,0],[.88,.2,0,0],[1,0,0,0]],head:[[0,0,0,0],[.1,-.2,0,0],[.22,-.1,0,0],[.34,.15,0,0],[.44,.2,0,0],[.5,.15,0,0],[.75,.2,0,0],[.88,0,0,0],[1,0,0,0]],mark:[[0,0,0,0],[.1,.24,0,0],[.22,.39,0,0],[.34,-.26,0,0],[.44,-.36,0,0],[.5,-.96,0,0],[.75,-.96,0,0],[.88,0,0,0],[1,0,0,0]],shinL:[[0,0,0,0],[.1,1.547,0,0],[.22,-.05,0,0],[.34,1.7,0,0],[.44,1.4,0,0],[.5,2.139,0,0],[.75,2.198,0,0],[.88,1.386,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.1,1.547,0,0],[.22,-.05,0,0],[.34,1.7,0,0],[.44,1.4,0,0],[.5,2.196,0,0],[.75,2.259,0,0],[.88,1.327,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.1,.15,0,0],[.22,-.1,0,0],[.34,-.15,0,0],[.44,-.05,0,0],[.5,.3,0,0],[.75,.32,0,0],[.88,.15,0,0],[1,0,0,0]],thighL:[[0,0,0,0],[.1,-.85,0,.08],[.22,.15,0,.06],[.34,-1.2,0,.1],[.44,-1,0,.1],[.5,-1.35,0,.12],[.75,-1.37,0,.12],[.88,-.85,0,.1],[1,0,0,0]],thighR:[[0,0,0,0],[.1,-.85,0,-.08],[.22,.15,0,-.06],[.34,-1.2,0,-.1],[.44,-1,0,-.1],[.5,-.725,0,0],[.75,-.788,0,0],[.88,-.3,0,-.08],[1,0,0,0]]},pelvisPos:[[0,0,0,0],[.1,0,-.28,0],[.22,0,0,0],[.34,0,0,0],[.44,0,0,0],[.5,0,-.5,0],[.75,0,-.52,0],[.88,0,-.24,0],[1,0,0,0]],root:[[0,0,0,0],[.1,0,0,0],[.22,0,.75,0],[.34,0,1.3,0],[.44,0,1.08,0],[.5,0,0,0],[.75,0,0,0],[.88,0,0,0],[1,0,0,0]],ground:[[0,1],[.1,1],[.16,0],[.46,0],[.5,1],[1,1]],glow:[[0,0],[.1,1],[.8,0]],face:"cast",faceOffset:[[0,0],[.46,0],[.5,-.436],[.75,-.436],[.88,0],[1,0]],ease:{in:[.5],out:[],tracks:["root","armL","armR","foreL","foreR"]}},"hunter.super":{bones:{armL:[[0,0,0,0],[.16,.15,0,.12],[.36,-.95,0,-.98],[.48,-1.1,0,-.03],[.55,.65,0,.27],[.62,.65,0,.27],[.75,.65,0,.27],[.88,.25,0,.12],[1,0,0,0]],armR:[[0,0,0,0],[.16,-.45,0,.53],[.36,-.75,0,-.57],[.48,-1.85,0,-.42],[.55,-1.65,0,.03],[.62,-.95,0,.08],[.75,-.91,0,.08],[.88,-.6,0,-.02],[1,0,0,0]],capeA:[[0,0,0,0],[.16,0,0,0],[.36,0,0,0],[.48,.2,0,0],[.55,.15,0,0],[.62,.15,0,0],[.75,.15,0,0],[.88,0,0,0],[1,0,0,0]],chest:[[0,0,0,0],[.16,.1,.2,0],[.36,-.05,-.25,0],[.48,-.15,-.3,0],[.55,.05,.1,0],[.62,.15,.2,0],[.75,.17,.22,0],[.88,0,.1,0],[1,0,0,0]],footL:[[0,0,0,0],[.16,-.427,0,0],[.36,-.425,0,0],[.48,-.409,0,0],[.55,-.408,0,0],[.62,-.408,0,0],[.75,-.408,0,0],[.88,-.299,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.16,-.467,0,0],[.36,-.514,0,0],[.48,-.583,0,0],[.55,-.649,0,0],[.62,-.649,0,0],[.75,-.649,0,0],[.88,-.363,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.16,.2,0,0],[.36,.1,0,0],[.48,.65,0,0],[.55,.3,0,0],[.62,.3,0,0],[.75,.3,0,0],[.88,.2,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.16,-.2,0,0],[.36,-.2,0,0],[.48,-1,0,0],[.55,.6,0,0],[.62,.55,0,0],[.75,.55,0,0],[.88,.25,0,0],[1,0,0,0]],head:[[0,0,0,0],[.16,.4,.1,0],[.36,.15,-.3,0],[.48,.1,.4,0],[.55,.1,-.1,0],[.62,.1,-.1,0],[.75,.1,-.1,0],[.88,0,-.15,0],[1,0,0,0]],shinL:[[0,0,0,0],[.16,.527,0,0],[.36,.625,0,0],[.48,.759,0,0],[.55,.858,0,0],[.62,.858,0,0],[.75,.858,0,0],[.88,.419,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.16,.417,0,0],[.36,.364,0,0],[.48,.333,0,0],[.55,.349,0,0],[.62,.349,0,0],[.75,.349,0,0],[.88,.263,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.16,.05,.15,0],[.36,-.05,-.15,0],[.48,-.1,-.12,0],[.55,0,.05,0],[.62,.05,.1,0],[.75,.05,.1,0],[.88,-.02,.08,0],[1,0,0,0]],thighL:[[0,0,0,0],[.16,-.1,0,.08],[.36,-.2,0,.1],[.48,-.35,0,.1],[.55,-.45,0,.1],[.62,-.45,0,.1],[.75,-.45,0,.1],[.88,-.12,0,.06],[1,0,0,0]],thighR:[[0,0,0,0],[.16,.05,0,-.06],[.36,.15,0,-.08],[.48,.25,0,-.1],[.55,.3,0,-.1],[.62,.3,0,-.1],[.75,.3,0,-.1],[.88,.1,0,-.05],[1,0,0,0]]},pelvisPos:[[0,0,0,0],[.16,0,-.05,0],[.36,0,-.06,0],[.48,0,-.08,0],[.55,0,-.1,0],[.62,0,-.11,0],[.75,0,-.11,0],[.88,0,-.03,0],[1,0,0,0]],root:[[0,0,0,0],[1,0,0,0]],ground:[[0,1],[1,1]],glow:[[0,0],[.36,1],[.6,0]],face:"viewUntilRelease",ease:{in:[.55],out:[.55],tracks:["armR","foreR","chest","spine"]},props:[{kind:"knife",bone:"handR",on:[[0,0],[.16,1],[.55,0]],glow:[[0,0],[.36,1],[.55,0]]}]},"warlock.super":{bones:{armL:[[0,0,0,0],[.15,-.6,0,-.73],[.45,-.6,0,-.58],[.54,-1.1,0,-1.03],[.58,-1.5,0,-.78],[.66,-1.05,0,-.63],[.78,-1.01,0,-.63],[.88,-.45,0,-.18],[1,0,0,0]],armR:[[0,0,0,0],[.15,-.4,0,-.02],[.45,-.35,0,-.17],[.54,0,0,-.52],[.58,-1.5,0,.03],[.66,-1.1,0,.13],[.78,-1.06,0,.13],[.88,-.5,0,.08],[1,0,0,0]],chest:[[0,0,0,0],[.15,0,-.25,0],[.45,-.05,-.3,0],[.54,-.17,-.55,0],[.58,.05,-.2,0],[.66,.17,-.05,0],[.78,.19,-.03,0],[.88,.05,0,0],[1,0,0,0]],footL:[[0,0,0,0],[.15,-.547,0,0],[.45,-.674,0,0],[.54,-.508,0,0],[.58,-.546,0,0],[.66,-.566,0,0],[.78,-.585,0,0],[.88,-.454,0,0],[1,0,0,0]],footR:[[0,0,0,0],[.15,-.608,0,0],[.45,-.757,0,0],[.54,-.745,0,0],[.58,-.805,0,0],[.66,-.89,0,0],[.78,-.922,0,0],[.88,-.6,0,0],[1,0,0,0]],foreL:[[0,0,0,0],[.15,.2,0,0],[.45,.1,0,0],[.54,-.3,0,0],[.58,.5,0,0],[.66,.72,0,0],[.78,.7,0,0],[.88,.1,0,0],[1,0,0,0]],foreR:[[0,0,0,0],[.15,.1,0,0],[.45,.05,0,0],[.54,-1.2,0,0],[.58,.5,0,0],[.66,.72,0,0],[.78,.7,0,0],[.88,.1,0,0],[1,0,0,0]],head:[[0,0,0,0],[.15,.35,.15,0],[.45,.35,.2,0],[.54,.2,.55,0],[.58,.15,.2,0],[.66,.15,.05,0],[.78,.16,.03,0],[.88,.1,0,0],[1,0,0,0]],shinL:[[0,0,0,0],[.15,.847,0,0],[.45,1.024,0,0],[.54,.958,0,0],[.58,1.046,0,0],[.66,1.166,0,0],[.78,1.205,0,0],[.88,.754,0,0],[1,0,0,0]],shinR:[[0,0,0,0],[.15,.808,0,0],[.45,.957,0,0],[.54,.545,0,0],[.58,.555,0,0],[.66,.59,0,0],[.78,.622,0,0],[.88,.45,0,0],[1,0,0,0]],skirtB:[[0,0,0,0],[.15,0,0,0],[.45,0,0,0],[.54,0,0,0],[.58,0,0,0],[.66,.14,0,0],[.78,.14,0,0],[.88,0,0,0],[1,0,0,0]],spine:[[0,0,0,0],[.15,-.05,-.1,0],[.45,-.05,-.12,0],[.54,-.1,-.2,0],[.58,0,-.1,0],[.66,.07,-.05,0],[.78,.08,-.05,0],[.88,.01,0,0],[1,0,0,0]],thighL:[[0,0,0,0],[.15,-.3,0,.08],[.45,-.35,0,.1],[.54,-.45,0,.12],[.58,-.5,0,.12],[.66,-.6,0,.12],[.78,-.62,0,.12],[.88,-.3,0,.08],[1,0,0,0]],thighR:[[0,0,0,0],[.15,-.2,0,-.08],[.45,-.2,0,-.1],[.54,.2,0,-.1],[.58,.25,0,-.1],[.66,.3,0,-.1],[.78,.3,0,-.1],[.88,.15,0,-.08],[1,0,0,0]]},pelvisPos:[[0,0,0,0],[.15,0,-.1,0],[.45,0,-.14,0],[.54,0,-.12,0],[.58,0,-.14,0],[.66,0,-.17,0],[.78,0,-.18,0],[.88,0,-.08,0],[1,0,0,0]],root:[[0,0,0,0],[.15,0,.05,0],[.45,0,.12,0],[.54,0,.12,0],[.58,0,.1,0],[.66,0,.06,0],[.78,0,.04,0],[.88,0,0,0],[1,0,0,0]],ground:[[0,1],[1,1]],glow:[[0,0],[.1,1],[.7,0]],face:"viewUntilRelease",ease:{in:[.58],out:[.58],tracks:["armL","armR","foreL","foreR"]}}},P2={knife:[["handR",.026,.05,.026,0,-.105,.01,"leather"],["handR",.03,.01,.05,0,-.135,.01,"guard"],["handR",.008,.16,.032,0,-.22,.01,"blade"],["handR",.0078,.022,.022,0,-.3,.01,"blade",L2,0,0],["handR",.0035,.15,.004,0,-.215,.028,"edge"],["handR",.001,.14,.014,.0046,-.215,.012,"glowElement"],["handR",.001,.14,.014,-.0046,-.215,.012,"glowElement"]]},jo=Math.PI/4,Rf={left:[-.24,-.28,.06]},I2=[.01,-.048,-.066],D2={"titan.grenade.wind":{at:[-.265,-.223,-.249],fingers:[.092,.925,.37],back:[-.447,0,.894]},"titan.grenade.high":{at:[-.238,-.005,-.32],fingers:[.095,.953,.286],back:[-.37,.092,.925]},"titan.grenade.release":{at:[-.08,.007,-.412],fingers:[.238,.19,-.952],back:[-.183,.913,.365]},"titan.grenade.follow":{at:[.116,-.205,-.4],fingers:[.29,-.677,-.677],back:[.198,.693,-.693]},"hunter.grenade.reach":{at:[-.298,-.034,-.24],fingers:[0,.894,.447],back:[-.514,0,.857]},"hunter.grenade.cock":{at:[-.257,-.027,-.316],fingers:[.089,.891,.445],back:[-.447,0,.894]},"hunter.grenade.release":{at:[-.079,.017,-.403],fingers:[.276,.276,-.921],back:[-.276,.921,.276]},"hunter.grenade.follow":{at:[.087,-.166,-.42],fingers:[.196,-.588,-.784],back:[.1,.796,-.597]},"warlock.grenade.wind":{at:[-.229,-.147,-.213],fingers:[0,-.958,.287],back:[0,.287,.958]},"warlock.grenade.swing":{at:[-.161,-.162,-.289],fingers:[.099,-.099,-.99],back:[0,-1,0]},"warlock.grenade.release":{at:[-.034,-.118,-.419],fingers:[.091,.409,-.908],back:[0,-.912,-.41]},"warlock.grenade.follow":{at:[.04,-.164,-.443],fingers:[.092,.829,-.552],back:[0,-.514,-.857]},"titan.melee.wind":{at:[-.274,-.226,-.22],fingers:[.337,.421,-.842],back:[-.432,.864,.259]},"titan.melee.hit":{at:[-.068,-.002,-.427],fingers:[.119,.059,-.991],back:[-.287,.958,0]},"titan.melee.drive":{at:[-.061,-.008,-.457],fingers:[.119,.059,-.991],back:[-.287,.958,0]},"titan.melee.back":{at:[-.225,-.132,-.315],fingers:[.276,.276,-.921],back:[-.44,.88,.176]},"hunter.melee.wind":{at:[-.318,-.201,-.24],fingers:[.732,.329,-.596],back:[-.607,.713,-.351]},"hunter.melee.stab":{at:[-.08,.051,-.413],fingers:[.976,-.191,.109],back:[.196,.98,-.039]},"hunter.melee.drive":{at:[-.07,.046,-.438],fingers:[.976,-.191,.109],back:[.196,.98,-.039]},"hunter.melee.back":{at:[-.244,-.06,-.379],fingers:[.978,-.097,-.184],back:[-.015,.85,-.527]},"warlock.melee.wind":{at:[-.292,-.205,-.22],fingers:[.095,.953,.286],back:[-.981,0,.196]},"warlock.melee.push":{at:[-.044,-.071,-.435],fingers:[.049,.979,-.196],back:[0,.148,.989]},"warlock.melee.press":{at:[-.042,-.073,-.475],fingers:[.049,.979,-.196],back:[0,.148,.989]},"warlock.melee.after":{at:[-.208,-.164,-.341],fingers:[.198,.693,-.693],back:[-.348,.348,.87]},"titan.class.rise":{at:[-.315,-.087,-.277],fingers:[.095,.953,.286],back:[-.958,0,.287]},"titan.class.raise":{at:[-.247,-.002,-.366],fingers:[.238,.952,.19],back:[-.514,0,.857]},"titan.class.slam":{at:[-.124,-.111,-.357],fingers:[.094,-.329,-.94],back:[-.095,.953,-.286]},"titan.class.press":{at:[-.125,-.134,-.377],fingers:[.094,-.329,-.94],back:[-.095,.953,-.286]}},Lf={"titan.grenade":{down:.1,ready:.61,ease:{in:[.48],out:[.48]},left:[[0,"grip",.6],[.14,"grip",.6],[.22,"titan.grenade.wind",.75],[.36,"titan.grenade.high",.75],[.48,"titan.grenade.release",.35],[.58,"titan.grenade.follow",.3],[.595,"offLeft",.6],[.61,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.14,0],[.22,1],[.595,1],[.61,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.054,-2,-3,5,-.15,.2,0],[.36,-6,6,10,.6,.5,-.2],[.426,8,-6,-22,-.8,-.6,.25],[.48,5,-7,-18,-.9,-.4,.25],[.58,-3,2,6,.3,.2,-.1],[.72,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:[[0,0],[.12,1],[.48,0]],propKind:"grenade",glow:[[0,0],[.14,1],[.52,0]]},"hunter.grenade":{down:.1,ready:.61,ease:{in:[.48],out:[.48]},left:[[0,"grip",.6],[.14,"grip",.6],[.2,"hunter.grenade.reach",.75],[.26,"hunter.grenade.cock",.75],[.38,"hunter.grenade.cock",.75],[.48,"hunter.grenade.release",.35],[.58,"hunter.grenade.follow",.3],[.595,"offLeft",.6],[.61,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.14,0],[.2,1],[.595,1],[.61,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.054,-2,-3,5,-.15,.2,0],[.36,-5,5,8,.5,.5,-.15],[.426,7,-5,-18,-.7,-.5,.2],[.48,4,-6,-15,-.8,-.35,.2],[.58,-3,2,5,.25,.15,-.1],[.72,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:[[0,0],[.12,1],[.48,0]],propKind:"grenade",glow:[[0,0],[.14,1],[.52,0]]},"warlock.grenade":{down:.1,ready:.61,ease:{in:[.48],out:[.48]},left:[[0,"grip",.6],[.14,"grip",.6],[.2,"warlock.grenade.wind",.7],[.34,"warlock.grenade.swing",.65],[.48,"warlock.grenade.release",.3],[.56,"warlock.grenade.follow",.25],[.595,"offLeft",.6],[.61,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.14,0],[.2,1],[.595,1],[.61,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.054,-2,-3,5,-.15,.2,0],[.34,-3,-6,6,-.4,.3,-.1],[.426,4,6,-16,.5,-.4,.15],[.48,3,5,-14,.6,-.3,.15],[.58,-2,-3,5,-.2,.1,-.05],[.72,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:[[0,0],[.12,1],[.48,0]],propKind:"grenade",glow:[[0,0],[.14,1],[.52,0]]},"titan.melee":{down:.07,ready:.48,ease:{in:[.17],out:[.17]},left:[[0,"grip",.6],[.065,"grip",.6],[.1,"titan.melee.wind",1],[.17,"titan.melee.hit",1],[.24,"titan.melee.drive",1],[.43,"titan.melee.back",1],[.465,"offLeft",.8],[.48,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.065,0],[.1,1],[.465,1],[.48,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.07,-8,3,10,.4,.6,-.2],[.135,10,-6,-34,-.9,-.8,.3],[.17,6,-8,-30,-1,-.6,.3],[.26,-6,3,12,.5,.4,-.2],[.4,2,-1,-4,-.15,-.1,.05],[.55,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:null,propKind:null,glow:[[0,0],[.02,1],[.56,0]],glowCharged:!0},"hunter.melee":{down:.07,ready:.48,ease:{in:[.143],out:[.143]},left:[[0,"grip",.6],[.065,"grip",.6],[.095,"hunter.melee.wind",1],[.143,"hunter.melee.stab",1],[.22,"hunter.melee.drive",1],[.43,"hunter.melee.back",1],[.465,"offLeft",1],[.48,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.065,0],[.095,1],[.465,1],[.48,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.0714,-6,2,8,.3,.6,-.2],[.107,8,-4,-20,-.6,-.7,.3],[.143,5,-5,-18,-.7,-.5,.3],[.22,4,-4,-14,-.5,-.4,.2],[.3,-5,2,8,.3,.4,-.15],[.4,1,0,-2,-.1,-.1,0],[.5,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:[[0,0],[.015,1],[.46,0]],propKind:"knife",glow:[[0,0],[.015,1],[.44,0]],glowCharged:!0},"warlock.melee":{down:.07,ready:.48,ease:{in:[.158],out:[.158]},left:[[0,"grip",.6],[.065,"grip",.6],[.1,"warlock.melee.wind",.3],[.158,"warlock.melee.push",.45],[.23,"warlock.melee.press",.45],[.43,"warlock.melee.after",.3],[.465,"offLeft",.6],[.48,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.065,0],[.1,1],[.465,1],[.48,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.07,-6,2,8,.3,.5,-.15],[.123,8,-3,-24,-.5,-.6,.2],[.158,5,-4,-20,-.6,-.5,.2],[.25,-4,2,8,.3,.3,-.1],[.4,1,0,-2,-.1,-.05,0],[.55,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:null,propKind:null,glow:[[0,0],[.02,1],[.56,0]],glowCharged:!0},"titan.class":{down:.1,ready:.68,ease:{in:[.57],out:[.57]},left:[[0,"grip",.6],[.13,"grip",.6],[.22,"titan.class.rise",1],[.34,"titan.class.raise",1],[.44,"titan.class.raise",1],[.57,"titan.class.slam",.25],[.63,"titan.class.press",.25],[.665,"offLeft",.6],[.68,"grip",.6],[1,"grip",.6]],shoulder:[[0,0],[.13,0],[.22,1],[.665,1],[.68,0],[1,0]],cam:[[0,0,0,0,0,0,0],[.048,0,-4,3,-.2,0,0],[.34,-4,8,6,.6,.5,-.2],[.44,-5,10,8,.7,.6,-.2],[.522,4,-30,-10,-1.2,-.3,.3],[.57,3,-35,-8,-1.3,-.2,.3],[.66,-2,6,3,.4,.1,-.1],[.8,1,-2,0,-.1,0,0],[.92,0,0,0,0,0,0],[1,0,0,0,0,0,0]],prop:null,propKind:null,glow:[[0,0],[.2,1],[.66,0]]},"hunter.class":{tp:!0,down:.1,ready:1},"warlock.class":{tp:!0,down:.1,ready:1},"titan.super":{tp:!0,down:.1,ready:1},"hunter.super":{tp:!0,down:.1,ready:1},"warlock.super":{tp:!0,down:.1,ready:1}},U2={blade:"#7d858a",edge:"#a9b3b8",leather:"#5a3e2b",cord:"#8a7a5a",guard:"#3a3d40",voidCore:"#231a30",glowCore:"#f4f1ea",glowElement:"#ffffff"},fn=.01,dn=-.048,hn=-.066,Cf={grenade:{arc:[["hand",.03,.03,.03,fn,dn,hn,"glowCore",.6,.4,0],["hand",.072,.004,.004,fn,dn,hn,"glowElement",.3,.9,.5],["hand",.072,.004,.004,fn,dn,hn,"glowElement",1.2,.2,1.4],["hand",.072,.004,.004,fn,dn,hn,"glowElement",.9,1.6,.2],["hand",.06,.004,.004,fn,dn,hn,"glowElement",2.1,.7,2.6]],solar:[["hand",.026,.026,.026,fn,dn,hn,"glowCore"],["hand",.036,.036,.036,fn,dn,hn,"glowElement",jo,0,0],["hand",.036,.036,.036,fn,dn,hn,"glowElement",0,jo,0],["hand",.036,.036,.036,fn,dn,hn,"glowElement",0,0,jo]],void:[["hand",.026,.026,.026,fn,dn,hn,"voidCore"],["hand",.004,.04,.04,fn+.024,dn,hn,"glowElement"],["hand",.004,.04,.04,fn-.024,dn,hn,"glowElement"],["hand",.04,.004,.04,fn,dn+.024,hn,"glowElement"],["hand",.04,.004,.04,fn,dn-.024,hn,"glowElement"],["hand",.04,.04,.004,fn,dn,hn+.024,"glowElement"],["hand",.04,.04,.004,fn,dn,hn-.024,"glowElement"]]},knife:[["hand",.1,.02,.02,0,-.037,-.08,"leather"],["hand",.06,.022,.022,.004,-.037,-.08,"cord"],["hand",.012,.026,.026,.056,-.037,-.08,"guard"],["hand",.008,.034,.03,-.054,-.037,-.08,"guard"],["hand",.142,.024,.005,-.129,-.037,-.08,"blade"],["hand",.017,.017,.0048,-.2,-.037,-.08,"blade",0,0,jo],["hand",.128,.0045,.0035,-.126,-.0475,-.08,"edge"],["hand",.112,.01,.001,-.128,-.036,-.077,"glowElement"],["hand",.112,.01,.001,-.128,-.036,-.083,"glowElement"]]},N2=(n,e)=>n==="grenade"?Cf.grenade[e]:Cf[n];function Lh(n,e,t,i){const r={...U2,glowElement:Mo[e].glow},s=new Tn;s.name=i,s.visible=!1;const a=new nt,o={group:s,solid:null,glow:null,rows:n};for(const l of[!1,!0]){const u=n.filter(h=>Th(h[7])===l);if(!u.length)continue;const c=u.map(h=>{const _=r[h[7]];if(_===void 0)throw new Error(`props: '${i}' uses unknown colour '${h[7]}'`);const v=new gn(h[1],h[2],h[3]);v.deleteAttribute("uv"),v.applyMatrix4(ka(h)),a.set(_);const m=v.attributes.position.count,p=new Float32Array(m*3);for(let S=0;S<m;S++)p[S*3]=a.r,p[S*3+1]=a.g,p[S*3+2]=a.b;return v.setAttribute("color",new Dn(p,3)),v}),f=c.length===1?c[0]:Wc(c,!1);c.length>1&&c.forEach(h=>h.dispose());const d=new Et(f,l?t.glowMaterial:t.solidMaterial);d.name=`${i}:${l?"glow":"solid"}`,d.frustumCulled=!1,d.userData.parts=u,s.add(d),o[l?"glow":"solid"]=d}return o.dispose=()=>{for(const l of[o.solid,o.glow])l==null||l.geometry.dispose()},o}function k2(n,e,t){const i=N2(n,e);if(!i)throw new Error(`fpProps: no prop '${n}' for '${e}'`);return Lh(i,e,t,`fp-prop-${n}-${e}`)}const Qn={halflife:.12,kFwd:.05,max:.6,capeB:.5,skirtB:.8,markFwd:.3,markFall:-.8},F2={titanPlate:w2,hunterCloak:T2,warlockRobe:A2},O2=[-.6,Qn.max];function Il(n,e){if(!n)return 0;let t=n[0][1];for(const i of n)i[0]<=e&&(t=i[1]);return t}const B2=new Ze,Pf=new Ze,z2=new U,H2=new U,G2=new U,Dl=[],Ul=[],V2=[0,0,0],Nl=(n,e)=>n.ease&&n.ease.tracks.includes(e)?n.ease:null;function So(n,e){const t=F2[n];if(!t)throw new Error(`GuardianBody: unknown class '${n}'`);const i=$n[n].element,r={...E2[n],glowElement:Mo[i].glow},s={solidMaterial:e.solid,glowMaterial:e.glow},a=xo(b2(n,t.parts,r),s),{root:o,bones:l}=a,u={};for(const x of Object.values(wa))for(const E of x.props??[]){if(u[E.kind])continue;const R=Lh(P2[E.kind],i,s,`risen-${E.kind}`);l[E.bone].add(R.group),u[E.kind]=R}const c=new nt(r.glove);function f(){if(!a.glow)return;const x=a.glow.geometry.attributes.color;a.glow.userData.parts.forEach((E,R)=>{if(E[7]==="glowElement")for(let b=R*ds*3;b<(R+1)*ds*3;b+=3)x.array[b]=c.r,x.array[b+1]=c.g,x.array[b+2]=c.b})}function d(){let x=1/0;for(const E of Rh){Pf.multiplyMatrices(l[E[0]].matrixWorld,ka(E,B2));for(const R of[-.5,.5])for(const b of[-.5,.5])for(const y of[-.5,.5])x=Math.min(x,z2.set(R*E[1],b*E[2],y*E[3]).applyMatrix4(Pf).y)}return x}const h={x:0,v:0},_={x:0,v:0};let v=null;const m=new U,p=new U;let S=null;return{root:o,rig:a,classId:n,props:u,pose(x,E={}){var de;const R=E.base??"ready",b=E.clip??null,y=E.t??0,A=E.w??1,L=E.feet??null,g=E.facing??0,M=E.dt??0,P=b?wa[b]:null;if(b&&!P)throw new Error(`GuardianBody: no third-person clip '${b}'`);const D=R==="preview";a.reset();let F=0;D?y2(l,x,t.previewArmOut):(S2(l,x2),F=M2);const k=V2;if(k[0]=0,k[1]=0,k[2]=0,P){for(const le in P.bones){const Se=l[le];if(!Se)continue;const Ie=Wn(P.bones[le],y,Ul,Nl(P,le));Se.rotation.x+=Ie[0]*A,Se.rotation.y+=Ie[1]*A,Se.rotation.z+=Ie[2]*A}if(P.pelvisPos){const le=Wn(P.pelvisPos,y,Ul,Nl(P,"pelvisPos"));l.pelvis.position.x+=le[0]*A,l.pelvis.position.y+=le[1]*A,l.pelvis.position.z+=le[2]*A}if(P.root){const le=Wn(P.root,y,Ul,Nl(P,"root"));k[0]=le[0]*A,k[1]=le[1]*A,k[2]=le[2]*A}}const N=g+(P&&P.faceOffset?Wn(P.faceOffset,y,Dl)[0]*A:0)+Math.PI,X=Math.cos(N),V=Math.sin(N);if(m.set((L?L.x:0)+X*k[0]+V*k[2],(L?L.y:0)+F+k[1],(L?L.z:0)-V*k[0]+X*k[2]),!D){if(M>0&&v){p.subVectors(m,v).divideScalar(M);const le=p.x*-Math.sin(g)+p.z*-Math.cos(g);ti(h,Ut(Qn.kFwd*le,0,Qn.max),Qn.halflife,M),ti(_,Ut(-.12*p.y,0,Qn.max),Qn.halflife,M);const Se=Ut(h.x+_.x,-.6,Qn.max),Ie={capeA:Se,capeB:Qn.capeB*Se,skirtB:Qn.skirtB*Se,mark:Qn.markFwd*h.x+Qn.markFall*_.x},B=P&&P.cloth?Wn(P.cloth,y,Dl)[0]:1;for(const K in Ie){const[Z,Q]=((de=t.clothLimits)==null?void 0:de[K])??O2;l[K].rotation.x+=Ut(Ie[K],Z,Q)*B}}v=(v??new U).copy(m)}if(o.position.copy(m),o.rotation.set(0,N,0),o.updateMatrixWorld(!0),P&&P.ground){const le=Wn(P.ground,y,Dl)[0]*A*Math.max(0,C2-d());le>0&&(o.position.y+=le,o.updateMatrixWorld(!0))}const ce=D?!1:E.glow??(P?Il(P.glow,y)===1:!1);ce!==S&&(a.setGlowLit(ce,le=>le[7]==="glowVisor"),ce||f(),S=ce);for(const le in u)u[le].group.visible=!1,u[le].glow&&(u[le].glow.visible=!1);for(const le of(P==null?void 0:P.props)??[]){const Se=u[le.kind];Se.group.visible=Il(le.on,y)===1,Se.glow&&(Se.glow.visible=Il(le.glow,y)===1)}},headWorld(x=new U){return x.set(0,.115,0).applyMatrix4(l.head.matrixWorld)},handWorld(x,E=new U){return E.set(0,-.05,0).applyMatrix4(l[`hand${x}`].matrixWorld)},handsMid(x=new U){return x.addVectors(this.handWorld("L",H2),this.handWorld("R",G2)).multiplyScalar(.5)},chestWorld(x=new U){return x.setFromMatrixPosition(l.chest.matrixWorld)},resetCloth(){h.x=0,h.v=0,_.x=0,_.v=0,v=null},dispose(){a.dispose();for(const x in u)u[x].dispose()}}}const ai=Math.PI/180,If=.55,W2=.2,X2=.35,q2=.8,Df={amplitude:.05,seconds:.35},Dr={roll:{side:.35,height:1.4,distance:2.2,pitch:[-40*ai,30*ai],k0:1,blendOut:0,blendBack:0},circle:{side:.5,height:1.35,distance:3,pitch:[-50*ai,30*ai],k0:.55,blendOut:.24,blendBack:.2},slam:{side:.6,height:1.6,distance:4,pitch:[-60*ai,35*ai],k0:.55,blendOut:.32,blendBack:.28},throw:{side:.45,height:1.5,distance:2.6,pitch:[-40*ai,30*ai],k0:.55,blendOut:.2,blendBack:.18,aimed:!0},burst:{side:.55,height:1.5,distance:3.4,pitch:[-60*ai,35*ai],k0:.55,blendOut:.27,blendBack:.24,aimed:!0}},Y2=30;function $2({room:n,fov:e=70,radius:t=W2,moments:i=Dr,comfort:r=qc}){let s="fp",a=null,o=If,l=0,u=0,c=0,f=0,d=0,h=0,_=0,v=null,m=0,p=0;const S=new U,x=new Yt,E=new on(0,0,0,"YXZ"),R=new U,b=new U,y=new Yt,A=new U;function L(D,F,k,N,X,V,ce){ce.setFromEuler(E.set(N,k,0,"YXZ")),R.set(D.side,0,X).applyQuaternion(ce);const de=F.x,le=F.y+D.height,Se=F.z;let Ie=1;return Ie=g(Ie,de,R.x,-n.halfW+t,n.halfW-t),Ie=g(Ie,le,R.y,t,n.wallH-t),Ie=g(Ie,Se,R.z,n.far+t,n.near-t),Ie=Ut(Ie,0,1),V.set(de+Ie*R.x,le+Ie*R.y,Se+Ie*R.z),R.length()*Ie}function g(D,F,k,N,X){return k>0?Math.min(D,(X-F)/k):k<0?Math.min(D,(N-F)/k):D}function M(D,F){if(F.set(0,0,0),v===null||!(p>0)||D<v||D>=v+p)return F;const k=(D-v)/p,N=m*(1-k)*(1-k)*r.cameraMotion,X=(D-v)*Y2,V=Math.floor(X),ce=Rs(X-V),de=le=>kn(wr(V*7+le*13),wr((V+1)*7+le*13),ce);return F.set(N*de(1),N*de(2),0)}const P=()=>s!=="fp";return{start(D,F,k){const N=i[D];if(!N)return!1;let X=0;if(k){const V=Ut(k.pitch,N.pitch[0],N.pitch[1]);if(L(N,k.feet,k.yaw,V,N.distance,b,y)<q2)return!1;X=k.pitch-V}return a=N,o=N.k0??If,s="out",c=F,l=o,d=X,v=null,!0},finish(D){s!=="out"&&s!=="tp"||(u=l,s="back",f=D)},update(D,{feet:F,yaw:k,pitch:N}){if(_=D,s==="fp")return{mode:s,k:0};if(s==="out"&&(!(a.blendOut>0)||D>=c+a.blendOut?(s="tp",l=1):l=o+(1-o)*Rs((D-c)/a.blendOut)),s==="back"){if(!(a.blendBack>0)||D>=f+a.blendBack)return s="fp",l=0,h=0,{mode:s,k:l};l=u+(o-u)*Er((D-f)/a.blendBack)}const X=Ut(N-d,a.pitch[0],a.pitch[1]);return h=L(a,F,k,X,a.distance*kn(o,l,r.cameraMotion),S,x),{mode:s,k:l}},apply(D){D.position.copy(S).add(M(_,A).applyQuaternion(x)),D.quaternion.copy(x),D.fov!==e&&(D.fov=e,D.updateProjectionMatrix())},shake(D,F,k){v=D,m=Math.min(F,Df.amplitude),p=Math.min(k,Df.seconds)},clampPitch(D){return P()?Ut(D,a.pitch[0],a.pitch[1]):D},bodyVisible(D){return P()&&S.distanceTo(D)>=X2},reset(){s="fp",a=null,l=0,h=0,d=0,v=null},get active(){return P()},get mode(){return s},get k(){return l},get boom(){return h},get pitchLimits(){return P()?[a.pitch[0],a.pitch[1]]:null},get aimed(){return P()&&!!a.aimed},position:S,quaternion:x}}const K2=n=>n<0?0:n>1?1:n,j2=(n,e)=>{let t=n[0][1];for(const i of n)i[0]<=e&&(t=i[1]);return t},Z2=()=>({move:"free",jump:!1,fire:!1,aim:!1,reload:!1,swap:!1,keys:{grenade:"start",melee:"start",class:"start",super:"start"}});function J2({abilities:n,moments:e}){let t=null;const i=a=>t&&a<t.returnAt,r=a=>K2((a-t.startAt)/t.seconds);function s(a){if(!i(a))return"start";if(t.def.view==="tp")return"ignore";const o=t.def.events.find(([,l])=>l===t.def.commit)[0];return r(a)>=o?"interrupt":"ignore"}return{get current(){return t&&{id:t.id,startAt:t.startAt,seconds:t.seconds,returnAt:t.returnAt,charged:t.charged}},start(a,o,{grounded:l=!0,charged:u=!1}={}){const c=n[a];if(!c||c.grounded&&!l||c.slot==="super"&&!u||s(o)==="ignore")return!1;const f=c.camera?e[c.camera].blendBack:0;return t={id:a,def:c,startAt:o,seconds:c.seconds,returnAt:o+c.seconds+f,charged:!!u,lastT:0},!0},reset(){t=null},update(a){if(!t)return[];const o=[],l=a>=t.returnAt?1:r(a);for(const[u,c]of t.def.events)u>t.lastT&&u<=l&&o.push({id:t.id,name:c,at:t.startAt+u*t.seconds});return t.lastT=Math.max(t.lastT,l),a>=t.returnAt&&(t=null),o},phase(a){return t?r(a):0},locks(a){if(!i(a))return Z2();const o=s(a),l=j2(t.def.move,r(a)),u=t.def.view==="tp";return{move:l,jump:u||l!=="free",fire:u,aim:u,reload:!0,swap:!0,keys:{grenade:o,melee:o,class:o,super:o}}}}}const Ch={};for(const n of Object.keys($n)){const e=$n[n];for(const t of["grenade","melee","class","super"])Ch[e[t]]=Mo[e.element].glow}const Q2=(n,e)=>n.events.find(([,t])=>t===e)[0]*n.seconds;function eM(n){const{scene:e,ROOM:t,camera:i,fp:r,runner:s,moment:a,player:o,view:l,PLAYER_RADIUS:u,now:c,classId:f,body:d,moveAxis:h,ability:_,superCharge:v,weapons:m,legacy:p}=n;let S=null,x=null,E=null,R=0,b=null,y=null,A=0,L=!1,g=null;const M=new Tn;M.name="risen-effects",e&&e.add(M);const P=new U,D=(B,K)=>{x={ev:B,spawn:K}},F=B=>D(B,(K,Z)=>p.throwGrenade(K,Z,Ch[B.id])),k=()=>p.meleeStrike(),N=()=>p.ward(),X=()=>p.superWipe(),V={"titan.grenade":{release:F},"hunter.grenade":{release:F},"warlock.grenade":{release:F},"titan.melee":{impact:k},"hunter.melee":{impact:k},"warlock.melee":{impact:k},"titan.class":{plant:N},"hunter.class":{reload:N},"warlock.class":{plant:N},"titan.super":{impact:X},"hunter.super":{release:X},"warlock.super":{release:X}};function ce(B,K){let Z=1/0;return B>0&&(Z=Math.min(Z,(t.halfW-u-o.x)/B)),B<0&&(Z=Math.min(Z,(-t.halfW+u-o.x)/B)),K>0&&(Z=Math.min(Z,(t.near-u-o.z)/K)),K<0&&(Z=Math.min(Z,(t.far+u-o.z)/K)),Z}function de(){const B=h(),K=Math.sin(l.yaw),Z=Math.cos(l.yaw),Q=-K*B.y+Z*B.x,re=-Z*B.y-K*B.x,ve=Math.hypot(Q,re);return ve>0?{x:Q/ve,z:re/ve}:null}function le(B,K){const Z=$n[f()][B],Q=ni[Z];if(B==="super"?v.get()<1:!_.ready(B))return"refused";if(s.locks(K).keys[B]==="ignore")return"ignored";const re=o.y<=0;if(!s.start(Z,K,{grounded:re,charged:!0}))return"refused";if(S=null,B!=="super"&&_.use(B),m.cancelReload(),L=!1,E=null,b=null,y=null,A=l.yaw,Z==="hunter.class"){let ye=de();if(!ye){const We={x:Math.sin(l.yaw),z:Math.cos(l.yaw)};ye=ce(We.x,We.z)>=Q.tuning.noInputBackMin?We:{x:-We.x,z:-We.z}}E={id:Z,startAt:K,dir:ye},R=0,A=Math.atan2(-ye.x,-ye.z)}Q.slot==="super"&&(b={id:Z,startAt:K,y0:o.y,until:K+Q2(Q,Q.commit)});let ve=0;return Q.view==="tp"&&(ve=Dr[Q.camera].blendBack,a.start(Q.camera,K,{feet:o,yaw:l.yaw,pitch:l.pitch})&&d().resetCloth()),r.act(Z,K,Q.seconds+ve,B==="melee"?{charged:!0}:{}),"started"}function Se(B){const K=wa[B].face;return K==="view"||K==="viewUntilRelease"&&!L?l.yaw:A}function Ie(){}return{press(B){const K=c(),Z=le(B,K);return Z==="ignored"&&(S={slot:B,at:K}),Z==="started"},onEvents(B){var K,Z;for(const Q of B){const re=ni[Q.id];Q.name==="release"&&(L=!0,re.view==="tp"&&wa[Q.id].face==="viewUntilRelease"&&(A=l.yaw)),re.slot==="super"&&Q.name===re.tuning.spend&&v.set(0),(Z=(K=V[Q.id])==null?void 0:K[Q.name])==null||Z.call(K,Q),Q.name==="end"&&re.view==="tp"&&a.finish(Q.at)}},update(B){if(!S)return;const K=c();(K-S.at>ic||le(S.slot,K)==="started")&&(S=null)},lateUpdate(B){if(x){const{spawn:re}=x;x=null,re(r.leftHandWorld(i,new U),i.getWorldDirection(new U))}const K=g===null?0:B-g;g=B;const Z=d();if(!Z)return;const Q=s.current;if(Q&&ni[Q.id].view==="tp"&&a.active){const re=Ut((B-Q.startAt)/Q.seconds,0,1);Z.pose(B,{clip:Q.id,t:re,feet:o,facing:Se(Q.id),dt:K}),Z.root.visible=a.bodyVisible(Z.headWorld(P))}else Z.root.visible=!1},drive(B,K){const Z=s.current;if(!Z)return null;const Q=c();if(E&&E.id===Z.id&&E.startAt===Z.startAt){const[re,ve]=ni[Z.id].tuning.travel,ye=Rs(Ut(((Q-Z.startAt)/Z.seconds-re)/(ve-re),0,1)),We=ni[Z.id].tuning.distance*(ye-R);return K.x+=E.dir.x*We,K.z+=E.dir.z*We,R=ye,null}return b&&b.id===Z.id&&b.startAt===Z.startAt&&b.y0>0?(K.y=b.y0*(1-Rs((Q-b.until)/R2)),{velY:0}):null},pushOut(){},locks(B){const K=s.locks(B),Z=s.current;return Z&&ni[Z.id].slot==="melee"&&y===null&&(K.move="free",K.jump=!1),K},weaponDamageScale(){return 1},buffs(){return{emboldened:{on:!1,left:0}}},get aiming(){return a.aimed&&!L},get busy(){return s.current!==null||a.active||S!==null&&c()-S.at<=ic},setClass(B){if(!$n[B])return;s.reset(),a.reset(),S=null,x=null,E=null,b=null,y=null,L=!1;const K=d();K&&(K.root.visible=!1)},clearWorld:Ie,get effectsRoot(){return M}}}const tM="Risen",nM="Character and loadout — Esc to resume",iM="Kit",pa={titanPlate:{label:"Plate"},hunterCloak:{label:"Cloak"},warlockRobe:{label:"Coat"}},rM={arc:"Arc",solar:"Solar",void:"Void"},sM={grenade:"Grenade",melee:"Melee",class:"Class ability",super:"Super"},Ph={grenade:"Q",melee:"C",class:"V",super:"F"},ma={"titan.grenade":{name:"Arc Beacon"},"titan.melee":{name:"Punch",charged:"Arc Fist"},"titan.class":{name:"Wall of Light"},"titan.super":{name:"Arc Slam"},"hunter.grenade":{name:"Solar Blaze"},"hunter.melee":{name:"Knife",charged:"Solar Knife"},"hunter.class":{name:"Roll"},"hunter.super":{name:"Knife of Light"},"warlock.grenade":{name:"Void Sink"},"warlock.melee":{name:"Palm",charged:"Void Palm"},"warlock.class":{name:"Circle of Light"},"warlock.super":{name:"Void Burst"}},oM={emboldened:"Emboldened"},aM={title:"Camera motion",full:"Full",half:"Half",off:"Off"},ga={overTitle:"PRE-DESTINY",title:"RUSTLIGHT",press:"PRESS",enterKey:"Enter",begin:"TO BEGIN",loading:"LOADING…",stillLoading:"Still loading… Reload the page",reload:"Reload",noWebgl:"This browser can't draw the game. Try an up-to-date Chrome, Edge, Firefox or Safari.",failed:"The range didn't load. Reload the page to try again.",anyKey:"PRESS ANY KEY",gateNote:"Sound on · Esc for silence",music:"Music",musicKey:"M",kitHeading:"CHOOSE YOUR KIT",kitAbility:"KIT ABILITY",kitKey:Ph.class,kitNote:"This character's kit is fixed once they rise.",kits:{titanPlate:{name:pa.titanPlate.label,traits:"SHELTER • ENDURANCE • RESOLVE",line:"Salvaged steel on a body that will not stay dead. Wear it and stand, so the Ghostless can run.",abilityName:ma["titan.class"].name,ability:"Raise a low wall of Arc Light and fight from behind it."},hunterCloak:{name:pa.hunterCloak.label,traits:"NERVE • CUNNING • SPEED",line:"Road-worn and hard to pin down: strike first, strip the ruins for what you need, be gone by dark.",abilityName:ma["hunter.class"].name,ability:"Tumble clear of danger and come up reloaded."},warlockRobe:{name:pa.warlockRobe.label,traits:"STUDY • PATIENCE • WILL",line:"You woke with no past, so you write everything down, and bend Void Light to keep the others fighting.",abilityName:ma["warlock.class"].name,ability:"Set a ring of Void Light; weapons inside it hit harder."}},escKey:"Esc",back:"Back",select:"Select",veil:"CLICK TO PLAY",veilHint:"WASD move · Space jump/double-jump · click fire (hold for auto) · right-click aim · R reload · 1/2/3 or scroll switch weapon · Q grenade · C melee · V kit ability · F super · Esc character screen"},lM={heading:tM,menuSub:nM,kitTitle:iM,classes:pa,elements:rM,slots:sM,keys:Ph,abilities:ma,buffs:oM,comfort:aM,start:ga};function cM({raycaster:n,strikeRay:e,getWeapon:t,setWeapon:i,cancelEngineReload:r,fp:s,now:a,getSuperCharge:o,setSuperChargeValue:l,episode:u,moment:c,pitchLimit:f}){const d=(v,m,p)=>v<m?m:v>p?p:v;let h=0,_=!1;return{strikeRaycast(v,m,p){const S=n.far;n.set(v,m),n.far=p;const x=e(n);return n.far=S,x},fillMagazine(){let v=r(t());const m=Math.min(v.magazine-v.loaded,v.reserve);v={...v,loaded:v.loaded+m,reserve:v.reserve===1/0?1/0:v.reserve-m},i(v),s.reloading&&s.cutReload(a())},setSuperCharge(v){const m=o()>=1,p=d(v,0,1);l(p),!m&&p>=1&&u.fire("flag","super-ready")},notePitch(v){c.active&&!_&&(h=v),_=c.active},pitchWindow(){if(!c.active)return[-f,f];const[v,m]=c.pitchLimits;return[Math.min(v,h),Math.max(m,h)]}}}const uM={cloth:"#8a1c1c",clothDark:"#5e1414",armour:"#3a3b40",armour2:"#4a4c52",suit:"#26262a",face:"#161618",metal:"#2a2c30",cap:"#3b2a20",rust:"#7a4a2a",bone:"#d6ccb4",mantle:"#4a3526",glowEye:"#8ec8f2",glowArc:"#9fd8ff",shell:"#261b3a",rim:"#3a2d58",shell2:"#1a1428",bezel:"#3b3550",lens:"#1a1238",glowViolet:"#b36bff",hull:"#8a2e22",under:"#4d1a14",gun:"#2a2624",glowShank:"#cfe8ff",glowExhaust:"#ff9a3c"};function Zo(n){const e={},t=[],i=(L,g,M,P,D,F,k,N,X=0,V=0,ce=0)=>t.push([L,g,M,P,D,F,k,N,X,V,ce]),r=n.leg,s=1.25,a=1.05,o=-.55,l=-.55+s,u=-.55+s-a,c=.06+r.thigh*Math.cos(o)+r.shin*Math.cos(l)+r.foot*Math.cos(u),[f,d,h]=n.pelvis;e.pelvis={at:[0,c,0]},i("pelvis",f,d,h,0,0,0,"suit");for(const L of[-1,1]){const g=L<0?"L":"R";e["thigh"+g]={parent:"pelvis",at:[L*n.hipX,-.03,0],rot:[o,0,0]},e["shin"+g]={parent:"thigh"+g,at:[0,-r.thigh,0],rot:[s,0,0]},e["foot"+g]={parent:"shin"+g,at:[0,-r.shin,0],rot:[-a,0,0]},i("thigh"+g,r.w*1.3,r.thigh+.04,r.w*1.45,0,-r.thigh/2,0,"suit"),i("shin"+g,r.w,r.shin+.03,r.w*1.05,0,-r.shin/2,0,"armour"),i("foot"+g,r.w*.85,r.foot,r.w*.85,0,-r.foot/2,0,"suit"),i("foot"+g,r.w*1.3,.05,r.w*3,0,-r.foot,r.w*.9,"armour2",-u,0,0)}const[_,v,m]=n.chest;e.chest={parent:"pelvis",at:[0,d/2+.03,0],rot:[n.hunch,0,0]},i("chest",_,v,m,0,v/2,0,"suit"),i("chest",_*1.1,v*.44,m*1.08,0,v*.74,.01,"armour"),n.rust&&i("chest",_*.42,v*.26,.03,_*.14,v*.4,m/2+.02,"rust"),i("chest",.14,.1,.13,0,v+.03,.05,"suit");const[p,S,x]=n.head;e.head={parent:"chest",at:[0,v+.07,.08],rot:[-n.hunch*.85,0,0]},i("head",p,S,x,0,S/2,0,"armour"),i("head",p*.84,S*.52,.03,0,S*.58,x/2+.012,"face");const E=n.eye;for(const L of[-1,1])for(const g of[-1,1])i("head",E,E,.02,L*E*.95,S*.6+g*E*.9,x/2+.03,"glowEye");i("head",p*.42,S*.3,x*.36,0,S*.17,x/2+x*.13,"armour2");const R=n.horn;for(const L of[-1,1])i("head",R,.05,.055,L*(p/2+R/2-.02),S*.62,-x*.1,"armour2",0,L*.35,L*.18),i("head",R*.75,.045,.05,L*(p/2+R*.95),S*.62+R*.3,-x*.25,"armour2",0,L*.7,L*.9);if(n.hooks)for(const L of[-1,1])i("head",.05,.07,.05,L*p*.2,S+.035,-x*.1,"armour2");if(n.crownStubs)for(const L of[-1,1])i("head",.045,.14,.045,L*p*.34,S+.06,-x*.22,"bone",-.35,0,L*-.2);const b=n.arm.upper,y=n.arm.fore,A=n.arm.t;for(const L of[-1,1]){const g=L<0?"L":"R";e["arm"+g]={parent:"chest",at:[L*(_/2+A/2),v*.86,0],rot:[-n.hunch+n.armFwd,0,L*.1]},e["fore"+g]={parent:"arm"+g,at:[0,-b,0],rot:[-n.elbow,0,0]},i("arm"+g,A,b+.03,A,0,-b/2,0,"suit"),i("arm"+g,A*1.55,.11,A*1.55,0,-.03,0,"armour"),i("fore"+g,A*1.05,y,A*1.12,0,-y/2,0,"armour")}if(n.lower){const L=b*.7,g=y*.7,M=A*.62;for(const P of[-1,1]){const D=P<0?"L":"R";e["arm2"+D]={parent:"chest",at:[P*(_/2+M/2-.01),v*.34,.03],rot:[-n.hunch+n.lower.fwd,0,P*.3]},e["fore2"+D]={parent:"arm2"+D,at:[0,-L,0],rot:[-n.lower.elbow,0,0]},i("arm2"+D,M,L+.02,M,0,-L/2,0,"suit"),i("fore2"+D,M*1.05,g,M*1.12,0,-g/2,0,"armour"),n.lowerBlades&&(i("fore2"+D,.06,.07,.06,0,-g-.02,0,"metal"),i("fore2"+D,.035,.62,.07,0,-g-.36,0,"glowArc"))}}if(n.caps)for(const L of[-1,1])i("chest",.1,.1,.1,L*(_/2+.035),v*.36,.02,"cap",0,0,L*.6);if(n.pauldron){const[L,g,M]=n.pauldron;for(const P of[-1,1])i("chest",L,g,M,P*(_/2+L*.28),v*.96,0,"armour2",0,0,-P*.28),n.trim&&i("chest",L*1.04,.035,M*1.04,P*(_/2+L*.3),v*.96+g/2,0,"bone",0,0,-P*.28)}if(n.trim&&i("chest",_*.9,.04,.03,0,v*.55,m/2+.035,"bone"),n.pack&&i("chest",.28,.34,.15,0,v*.5,-m/2-.075,"armour2"),n.mantle&&i("chest",_*1.2,.13,m*1.25,0,v+.01,-.02,"mantle"),n.cowl&&(i("head",p+.05,S*.85,.05,0,S*.45,-x/2-.02,"cloth"),i("pelvis",f*.72,.36,.025,0,-.21,h/2+.02,"cloth"),i("pelvis",f*.8,.28,.025,0,-.17,-h/2-.02,"clothDark")),n.cape){const L=n.cape;e.cape={parent:"chest",at:[0,v*L.top,-m/2-.045-(n.pack?.15:0)],rot:[-n.hunch+.06,0,0]},i("cape",L.w,L.len,.03,0,-L.len/2,0,"cloth");const g=L.hem,M=L.w/(g*2);for(let P=0;P<g;P++)i("cape",M,.07+P%2*.07,.028,-L.w/2+M*(2*P+1),-L.len-.035-P%2*.035,0,"clothDark")}if(n.banner&&(e.banner={parent:"chest",at:[.12,v*.9,-m/2-.26],rot:[-n.hunch,0,0]},i("banner",.05,1.05,.05,0,.02,0,"metal"),i("banner",.46,.55,.03,.25,.24,0,"cloth"),i("banner",.46,.07,.035,.25,.04,0,"bone")),n.weapon==="pistol")i("foreR",.065,.2,.1,0,-y-.08,.02,"metal"),i("foreR",.035,.03,.035,0,-y-.19,.02,"glowArc"),i("foreL",.05,.06,.05,0,-y-.02,0,"metal"),i("foreL",.028,.28,.055,0,-y-.19,0,"glowArc");else if(n.weapon==="wire")i("foreR",.1,.32,.13,.04,-y+.06,.02,"armour2"),i("foreR",.07,1.36,.1,.04,-y-.5,.02,"metal"),i("foreR",.03,.26,.035,.04,-y-.42,.08,"glowArc");else if(n.weapon==="shock"){i("foreR",.11,.95,.15,.05,-y-.28,0,"metal");for(const L of[-1,1])i("foreR",.02,.62,.02,.05+L*.05,-y-.3,.085,"glowArc")}return{bones:e,parts:t}}function fM(){const e={core:{at:[0,2.05,0]},eye:{parent:"core",at:[0,0,.621]}},t=[],i=(o,...l)=>t.push([o,...l]);i("core",1.15,1.15*.72,1.15*.72,0,0,0,"shell"),i("core",1.15*.72,1.15,1.15*.72,0,0,0,"shell"),i("core",1.15*.72,1.15*.72,1.15,0,0,0,"shell"),i("core",1.15*.86,1.15*.86,1.15*.6,0,0,0,"rim",0,0,Math.PI/4),i("core",1.15*.62,1.15*.62,.06,0,0,1.15/2+.02,"shell2");const r=1.15*.3,s=1.15*.05,a=1.15/2+.06;return i("core",r,s,.04,0,r/2-s/2,a,"glowViolet"),i("core",r,s,.04,0,-r/2+s/2,a,"glowViolet"),i("core",s,r,.04,-r/2+s/2,0,a,"glowViolet"),i("core",s,r,.04,r/2-s/2,0,a,"glowViolet"),i("core",r-s*2,r-s*2,.03,0,0,a-.012,"lens"),i("core",1.15*.26,.05,.06,-1.15*.13,1.15*.24,a-.005,"bezel",0,0,.35),i("core",.05,1.15*.28,.06,1.15*.25,-1.15*.02,a-.005,"bezel"),i("core",1.15*.24,.05,.06,-1.15*.05,-1.15*.24,a-.005,"bezel",0,0,-.2),{bones:e,parts:t}}function dM(){const n={hull:{at:[0,1.9,0]}},e=[],t=(...i)=>e.push(["hull",...i]);t(.9,.5,.75,0,0,0,"hull"),t(.8,.12,.66,0,-.29,0,"under"),t(.56,.3,.04,0,.02,.39,"face"),t(.1,.1,.03,0,.1,.415,"glowShank");for(const i of[-1,1])t(.065,.065,.03,i*.14,-.06,.415,"glowShank"),t(.36,.26,.42,i*.62,.16,-.02,"hull",0,0,i*.22),t(.26,.05,.26,i*.64,.31,-.02,"face",0,0,i*.22),t(.2,.04,.2,i*.6,0,-.02,"glowExhaust"),t(.05,.8,.08,i*.3,-.62,-.22,"under",.45,0,i*.35);return t(.12,.12,.46,0,-.38,.22,"gun"),t(.06,.06,.04,0,-.38,.47,"glowArc"),{bones:n,parts:e}}const Uf={hunch:.18,leg:{thigh:.55,shin:.62,foot:.4,w:.12},hipX:.16,pelvis:[.44,.22,.3],chest:[.66,.6,.4],head:[.32,.3,.36],eye:.036,horn:.32,hooks:!0,arm:{upper:.46,fore:.44,t:.11},armFwd:.35,elbow:1.9,lower:{fwd:.55,elbow:1.2},pauldron:[.3,.16,.36],pack:!0,cape:{w:.78,len:1.2,top:.98,hem:4},weapon:"shock"},ci=n=>n.userData.rest,Jo=(n,e,t,i,r)=>{n&&(n.rotation.x=ci(n).r.x+Math.sin(e*i+r)*t)},ts=(n,e,t={})=>({id:n,...e,palette:uM,...t}),Qo=["cape","banner"],Nf={colour:"#5fb8ff",element:"arc",opacity:.22,pad:1.12,regenDelay:4,regenSeconds:1.5},hM=[{id:"dreg",name:"Dreg",faction:"fallen",rank:"minor",tier:"fodder",body:"biped",health:{max:80},crit:{bones:["head"]},noHit:Qo,ether:!0,spec:ts("dreg",Zo({hunch:.55,leg:{thigh:.34,shin:.4,foot:.27,w:.07},hipX:.1,pelvis:[.26,.16,.2],chest:[.36,.42,.26],head:[.2,.19,.28],eye:.028,horn:.14,arm:{upper:.3,fore:.3,t:.06},armFwd:.2,elbow:1.35,caps:!0,cowl:!0,rust:!0,weapon:"pistol"})),idle:(n,e,t)=>{const i=Math.floor(n*1.3+t.phase*3);e.head.rotation.y=ci(e.head).r.y+Math.sin(i*12.9898)*.55,e.pelvis.position.y=ci(e.pelvis).p.y+Math.sin(n*6+t.phase)*.012}},{id:"vandal",name:"Vandal",faction:"fallen",rank:"minor",tier:"skirmisher",body:"biped",health:{max:150},crit:{bones:["head"]},noHit:Qo,ether:!0,spec:ts("vandal",Zo({hunch:.35,leg:{thigh:.45,shin:.55,foot:.36,w:.085},hipX:.12,pelvis:[.32,.18,.24],chest:[.46,.5,.3],head:[.26,.24,.32],eye:.032,horn:.24,hooks:!0,arm:{upper:.38,fore:.36,t:.075},armFwd:.3,elbow:1.85,lower:{fwd:.15,elbow:.55},cape:{w:.42,len:.78,top:.95,hem:3},weapon:"wire"})),idle:(n,e,t)=>{e.chest.rotation.x=ci(e.chest).r.x+Math.sin(n*1.6+t.phase)*.025,Jo(e.cape,n,.05,1.3,t.phase)}},{id:"captain",name:"Captain",faction:"fallen",rank:"elite",tier:"heavy",body:"biped",health:{max:320},shield:{...Nf,amount:160},crit:{bones:["head"]},noHit:Qo,ether:!0,spec:ts("captain",Zo(Uf)),idle:(n,e,t)=>{e.head.rotation.z=ci(e.head).r.z+Math.sin(n*.5+t.phase)*.08,Jo(e.cape,n,.035,.9,t.phase)}},{id:"boss",name:"Boss Captain",faction:"fallen",rank:"boss",tier:"heavy",body:"biped",health:{max:1100},shield:{...Nf,amount:400},crit:{bones:["head"]},noHit:Qo,ether:!0,spec:ts("boss",Zo({...Uf,horn:.36,crownStubs:!0,trim:!0,mantle:!0,banner:!0,lowerBlades:!0,lower:{fwd:.55,elbow:1.75},cape:{w:.8,len:1.5,top:.98,hem:5}}),{scale:1.2}),idle:(n,e,t)=>{e.head.rotation.z=ci(e.head).r.z+Math.sin(n*.45+t.phase)*.07,Jo(e.cape,n,.03,.8,t.phase),Jo(e.banner,n,.04,1.1,t.phase+1)}},{id:"servitor",name:"Servitor",faction:"fallen",rank:"elite",tier:"heavy",body:"servitor",health:{max:500},crit:{keys:["glowViolet","lens"]},aura:{bone:"core",at:[0,0,0],r:.95,colour:"#b08cff",opacity:.12},spec:ts("servitor",fM()),idle:(n,e,t)=>{e.core.position.y=ci(e.core).p.y+Math.sin(n*Math.PI+t.phase)*.1,e.core.rotation.z=ci(e.core).r.z+Math.sin(n*.35+t.phase)*.12}},{id:"shank",name:"Shank",faction:"fallen",rank:"minor",tier:"skirmisher",body:"shank",health:{max:60},crit:null,spec:ts("shank",dM()),idle:(n,e,t)=>{e.hull.position.y=ci(e.hull).p.y+Math.sin(n*2.6+t.phase)*.05,e.hull.rotation.z=ci(e.hull).r.z+Math.sin(n*1.3+t.phase)*.06}}],kf=Math.PI/180,Ih=Math.tan(Math.PI/8),pM=Math.tan(Math.PI/6),Dh={gunmetal:"#2d3034",blued:"#252b33",iron:"#3a3d40",steel:"#7d858a",plasteel:"#a9b3b8",olive:"#5f6b4a",wood:"#6b5238",rubber:"#1f2226",leather:"#5a3e2b",cord:"#8a7a5a",cloth:"#bdb29a",brass:"#a8843c",bore:"#0d0e10",reticle:"#0d0e10",glowDot:"#ff5a36",glowBead:"#f2e6c0"},mM="#9fc4d0",Ar=(n,e,t,i,r,s,a)=>[0,1,2,3].map(o=>[n,2*e,2*e*Ih,t,i,r,s,a,0,0,o*Math.PI/4]),Ff=(n,e,t,i,r,s,a)=>[0,1,2].map(o=>[n,2*e*pM,2*e,t,i,r,s,a,0,0,o*Math.PI/3]);function ea(n,e,t,i,r,s,a,o){const l=[],u=e+t/2,c=2*(e+t)*Ih+6e-4;for(let f=0;f<8;f++){const d=f*Math.PI/4;l.push([n,c,t,i,r+Math.sin(d)*u,s+Math.cos(d)*u,a,o,0,0,-d])}return l}const wi=(n,e,t,i)=>({bone:n,at:e,fingers:t,back:i}),Vs=(n,e)=>({bone:n,at:e}),gM={body:{at:[0,0,0]},mag:{parent:"body",at:[0,-.004,-.105]},bolt:{parent:"body",at:[.03,.052,-.03]}},_M=[["body",.056,.07,.26,0,.045,-.055,"gunmetal"],["body",.058,.012,.2,0,.086,-.07,"olive"],["body",.024,.008,.11,0,.096,-.03,"iron"],["body",.044,.024,.13,0,0,-.01,"gunmetal"],["body",.052,.054,.18,0,.04,-.275,"iron"],["body",.056,.058,.016,0,.04,-.22,"cord"],["body",.056,.058,.016,0,.04,-.275,"cord"],["body",.056,.058,.016,0,.04,-.33,"cord"],...Ar("body",.017,.12,0,.047,-.425,"blued"),...Ar("body",.02,.01,0,.047,-.395,"steel"),...Ar("body",.02,.01,0,.047,-.455,"steel"),["body",.018,.018,.045,0,.047,-.5075,"iron"],["body",.024,.024,.012,0,.047,-.536,"steel"],["body",.05,.02,.07,0,0,-.105,"gunmetal"],["body",.012,.008,.06,0,-.028,-.04,"iron"],["body",.012,.03,.008,0,-.014,-.068,"iron"],["body",.006,.022,.008,0,-.008,-.035,"steel"],["body",.04,.105,.048,0,-.048,.028,"rubber",-.3,0,0],["body",.04,.068,.15,0,.028,.15,"wood"],["body",.044,.088,.018,0,.022,.234,"leather"],["body",.042,.012,.08,0,.066,.16,"cord"],["body",.002,.004,.012,-.029,.045,-.006,"steel",.5,0,0],["body",.002,.004,.012,-.029,.045,-.014,"steel",-.5,0,0],["body",.03,.012,.05,0,.106,-.01,"iron"],["body",.004,.034,.012,-.016,.129,-.03,"iron"],["body",.004,.034,.012,.016,.129,-.03,"iron"],["body",.036,.004,.012,0,.148,-.03,"iron"],["body",.038,.008,.014,0,.115,-.03,"cloth"],["body",.028,.028,.002,0,.13,-.03,"glass"],["body",.0012,.0012,8e-4,0,.13,-.0315,"glowDot"],["bolt",.006,.018,.03,0,0,0,"steel"],["mag",.034,.125,.06,0,-.062,.004,"gunmetal",.1,0,0],["mag",.04,.012,.068,0,-.128,-.003,"steel",.1,0,0],["mag",.036,.02,.062,0,-.03,.002,"olive",.1,0,0]],vM={frame:{at:[0,0,0]},crane:{parent:"frame",at:[-.017,.022,-.02]},cyl:{parent:"crane",at:[.017,.022,0]},block:{parent:"cyl",at:[0,0,.03]},hammer:{parent:"frame",at:[0,.052,.022]}},xM=[["frame",.034,.04,.24,0,.058,-.172,"blued"],["frame",.028,.03,.13,0,.023,-.227,"blued"],["frame",.04,.074,.012,0,.042,-.15,"cord"],["frame",.036,.004,.15,0,.08,-.18,"steel"],["frame",.002,.022,.11,.018,.056,-.1,"plasteel"],["frame",.002,.022,.11,-.018,.056,-.1,"plasteel"],["frame",.012,.012,.003,0,.058,-.2935,"bore"],["frame",.036,.02,.08,0,.006,-.012,"blued"],["frame",.03,.01,.064,0,.073,-.02,"blued"],["frame",.04,.06,.012,0,.04,.018,"blued"],["frame",.024,.012,.02,0,.082,.012,"iron"],["frame",.009,.009,.006,-.0075,.0925,.008,"steel"],["frame",.009,.009,.006,.0075,.0925,.008,"steel"],["frame",.0035,.016,.01,0,.086,-.283,"steel"],["frame",.003,.003,.003,0,.0955,-.281,"glowBead"],["frame",.01,.008,.045,0,-.026,-.028,"blued"],["frame",.01,.028,.008,0,-.012,-.05,"blued"],["frame",.006,.018,.008,0,-.008,-.02,"steel"],["frame",.03,.026,.026,0,.002,.02,"blued"],["frame",.034,.085,.042,0,-.04,.036,"wood",-.35,0,0],["frame",.04,.012,.05,0,-.083,.052,"iron",-.35,0,0],["frame",.004,.01,.014,-.021,.048,.012,"brass"],...Ff("cyl",.022,.064,0,0,0,"iron"),["cyl",.006,.004,.058,.0235*Math.cos(Math.PI/6),.0235*Math.sin(Math.PI/6),0,"brass",0,0,-Math.PI/3],["cyl",.008,.008,.05,0,0,-.057,"steel"],["crane",.01,.018,.01,.008,.01,-.056,"blued"],...Ff("block",.02,.006,0,0,.002,"brass"),["hammer",.012,.028,.012,0,.012,.004,"blued"],["hammer",.014,.008,.018,0,.026,.012,"steel"]],Gn=.124,rc=.15,MM={body:{at:[0,0,0]},mag:{parent:"body",at:[0,-.004,.095]}},SM=[["body",.058,.08,.5,0,.045,.05,"blued"],["body",.062,.028,.44,0,.072,.04,"plasteel"],["body",.064,.04,.15,0,.022,.2,"plasteel"],["body",.064,.1,.02,0,.035,.31,"rubber"],["body",.066,.02,.09,0,.082,.23,"cloth"],["body",.05,.05,.12,0,.052,-.26,"iron"],...Ar("body",.02,.26,0,.004,-.25,"blued"),...Ar("body",.023,.028,0,.004,-.18,"cloth"),...Ar("body",.023,.028,0,.004,-.32,"cloth"),["body",.018,.018,.07,0,.055,-.355,"iron"],["body",.034,.03,.05,0,.055,-.415,"iron"],["body",.036,.004,.008,0,.049,-.405,"bore"],["body",.036,.004,.008,0,.061,-.405,"bore"],["body",.036,.004,.008,0,.049,-.425,"bore"],["body",.036,.004,.008,0,.061,-.425,"bore"],["body",.036,.092,.046,0,-.044,.012,"rubber",-.3,0,0],["body",.01,.008,.07,0,-.024,-.036,"iron"],["body",.01,.026,.008,0,-.01,-.068,"iron"],["body",.006,.02,.008,0,-.008,-.03,"steel"],["body",.046,.016,.072,0,-.002,.095,"blued"],["body",.004,.02,.045,.031,.05,.13,"bore"],["body",.018,.008,.012,0,.09,.118,"iron"],["body",.03,.006,.01,0,.089,.098,"cord"],...ea("body",.025,.004,.006,0,Gn,rc+.003,"rubber"),...ea("body",.024,.005,.02,0,Gn,rc-.01,"blued"),...ea("body",.026,.004,.025,0,Gn,.1175,"iron"),...ea("body",.03,.006,.02,0,Gn,.095,"blued"),["body",4e-4,.012,4e-4,0,Gn-.01,.088,"reticle"],["body",.016,4e-4,4e-4,-.012,Gn,.088,"reticle"],["body",.016,4e-4,4e-4,.012,Gn,.088,"reticle"],["body",8e-4,8e-4,4e-4,0,Gn,.0877,"glowDot"],["body",.058,.058,.001,0,Gn,.0865,"glass"],...Ar("body",.0302,.001,0,Gn,.085,"mask"),["mag",.03,.078,.058,0,-.04,0,"iron"],["mag",.036,.01,.064,0,-.083,0,"steel"],["mag",.032,.018,.06,0,-.016,0,"plasteel"]],yo=[{id:"auto",label:"Auto rifle",damage:21,precision:1.5,ammoType:"primary",stats:{magazine:30,rpm:600,reserve:1/0,auto:!0},spec:{id:"auto",bones:gM,parts:_M},sight:{kind:"reflex",rear:[0,.13,.012],front:[0,.13,-.0315],eyeRelief:.11},sockets:{muzzle:Vs("body",[0,.047,-.542]),port:Vs("body",[.03,.052,-.03]),rightGrip:wi("body",[.034,-.02,.093],[0,-.29,-.96],[1,0,0]),leftHold:wi("body",[-.056,-.004,-.278],[1,0,0],[0,-1,0]),leftMag:wi("mag",[0,-.15,.047],[0,0,-1],[0,-1,0])},hip:{at:[.17,-.165,-.42],rot:[0,-2,0]},zoom:1.6,adsTime:.25,readyTime:.31,stowTime:.28,adsSlide:.05,casings:!0,recoil:{aim:{pitch:.26,direction:72,climbCap:3.5,hold:.12,halflife:.1},kick:{rise:[1.2,.35],back:[6,1],roll:[.8,.15],tp:.028},flash:.09},reload:{clip:1.9,seat:.55,gun:[[0,0,0,0,0,0,0],[.12,-30,20,30,6,0,-28],[.64,-30,20,30,6,0,-28],[.82,-15,10,15,3,0,-14],[1,0,0,0,0,0,0]],left:[[0,"leftHold",.6],[.06,"leftHold",.6],[.16,"leftMag",.9],[.3,"offLeft",.9],[.36,"offLeft",.9],[.48,"belowMag",.9],[.55,"leftMag",.9],[.6,"leftMag",.3],[.8,"leftHold",.6]],mag:[[0,0],[.16,1],[.55,0]],events:[[.16,"grab"],[.55,"seat"],[.6,"slap"],[1,"settle"]]}},{id:"hand",label:"Hand cannon",damage:55,precision:1.5,ammoType:"special",reserveCap:24,stats:{magazine:8,rpm:140,reserve:12,auto:!1},spec:{id:"hand",bones:vM,parts:xM},sight:{kind:"iron",rear:[0,.0955,.008],front:[0,.0955,-.281],eyeRelief:.25},sockets:{muzzle:Vs("frame",[0,.058,-.295]),rightGrip:wi("frame",[.034,-.011,.097],[0,-.34,-.94],[1,0,0]),cylFront:wi("cyl",[0,.045,-.06],[0,0,1],[0,1,0]),leftBlock:wi("block",[0,.05,.024],[0,-1,0],[0,0,1])},oneHanded:!0,hip:{at:[.15,-.14,-.38],rot:[1,-3,0]},zoom:1.4,adsTime:.21,readyTime:.26,stowTime:.29,adsSlide:.06,casings:!1,recoil:{aim:{pitch:1.8,direction:85,hold:.06,halflife:.05},kick:{rise:[6,2],back:[22,2],roll:[1.5,.3],tp:.045},flash:.14},reload:{clip:1.85,seat:.8,gun:[[0,0,0,0,0,0,0],[.14,20,20,0,24,0,-15],[.35,10,25,40,38,-5,-15],[.62,10,25,40,38,-5,-15],[.69,-100,20,40,10,0,-80],[.9,-100,20,40,10,0,-80],[.97,0,0,0,6,0,0],[1,0,0,0,0,0,0]],left:[[0,"offLeft",.5],[.18,"offLeft",.5],[.33,"cylFront",.4],[.52,"cylFront",.4],[.58,"offLeft",.8],[.66,"offLeft",.8],[.75,"leftBlock",.8],[.8,"leftBlock",.8],[.9,"offLeft",.3]],crane:[[0,0],[.06,0],[.14,95],[.9,95],[.95,0]],ejector:[[0,0],[.4,0],[.46,22],[.52,0]],cylTurn:[[0,0],[.9,0],[.97,60]],block:[[0,0],[.6,1],[.8,0]],events:[[.06,"latch"],[.46,"eject"],[.6,"newBlock"],[.8,"seat"],[.95,"snap"],[1,"settle"]]}},{id:"pulse",label:"Pulse rifle",damage:15,precision:1.5,ammoType:"primary",stats:{magazine:21,rpm:900,reserve:1/0,auto:!0,burst:3},burstCycle:.4,spec:{id:"pulse",bones:MM,parts:SM},sight:{kind:"scope",rear:[0,Gn,rc],front:[0,Gn,.0877],eyeRelief:.06},sockets:{muzzle:Vs("body",[0,.055,-.442]),port:Vs("body",[.031,.05,.13]),rightGrip:wi("body",[.034,-.022,.078],[0,-.29,-.96],[1,0,0]),leftHold:wi("body",[-.056,-.032,-.262],[1,0,0],[0,-1,0]),leftMag:wi("mag",[0,-.104,.05],[0,0,-1],[0,-1,0])},hip:{at:[.16,-.175,-.45],rot:[0,-2,0]},zoom:2.3,adsTime:.31,readyTime:.31,stowTime:.28,adsSlide:.08,casings:!0,recoil:{aim:{pitch:.34,direction:90,hold:.03,halflife:.045},kick:{rise:[1.6,.5],back:[7,0],roll:[.6,.15],tp:.022},flash:.06},reload:{clip:1.9,seat:.58,gun:[[0,0,0,0,0,0,0],[.16,-50,30,60,8,-14,-42],[.4,-60,20,80,10,-16,-46],[.46,-50,30,60,8,-14,-42],[.68,-50,30,60,8,-14,-42],[.84,-25,15,30,4,-7,-20],[1,0,0,0,0,0,0]],left:[[0,"leftHold",.6],[.1,"leftHold",.6],[.26,"leftMag",.9],[.4,"offLeft",.9],[.44,"offLeft",.9],[.53,"belowMag",.9],[.58,"leftMag",.9],[.62,"leftMag",0],[.66,"leftMag",0],[.82,"leftHold",.6]],mag:[[0,0],[.26,1],[.58,0]],events:[[.26,"grab"],[.58,"seat"],[1,"settle"]]}}],Of={offLeft:{at:[-.16,-.62,-.3],fingers:[.3,.6,-1],back:[-1,0,0]},offRight:{at:[.2,-.62,-.28],fingers:[-.3,.6,-1],back:[1,0,0]}},yM=.05,bM=(n,e)=>2*Math.atan(Math.tan(n*kf/2)/e)/kf,Bf=["glass","mask"],EM=new xn({color:mM,transparent:!0,opacity:.12,depthWrite:!1}),wM=new xn({colorWrite:!1}),zf=new U,Ws=new U,Xs=new U,TM=new Ze;function sc(n,e,t=new Yt){return Xs.set(...n).normalize().negate(),Ws.set(...e),Ws.addScaledVector(Xs,-Ws.dot(Xs)).normalize(),zf.crossVectors(Ws,Xs),t.setFromRotationMatrix(TM.makeBasis(zf,Ws,Xs))}function AM(n,e,t){const i=new U(...n),s=new U(...e).clone().sub(i).normalize(),a=new U(0,1,0),o=a.addScaledVector(s,-a.dot(s)).normalize(),l=s.clone().negate(),u=new U().crossVectors(o,l),c=new Yt().setFromRotationMatrix(new Ze().makeBasis(u,o,l)).invert(),f=new U(0,0,-t).sub(i.clone().applyQuaternion(c));return{q:c,p:f}}function Yc(n,e={}){const t=n.spec,i=xo({id:t.id,bones:t.bones,parts:t.parts.filter(a=>!Bf.includes(a[7])),palette:Dh},{solidMaterial:e.solidMaterial,glowMaterial:e.glowMaterial}),r=[];if(!e.icon)for(const a of Bf){const o=new Map;for(const l of t.parts){if(l[7]!==a)continue;const u=new gn(l[1],l[2],l[3]);u.deleteAttribute("uv"),u.applyMatrix4(ka(l)),o.has(l[0])||o.set(l[0],[]),o.get(l[0]).push(u)}for(const[l,u]of o){const c=new Et(u.length===1?u[0]:Wc(u,!1),a==="mask"?wM:EM);c.name=`${t.id}:${a}`,a==="mask"&&(c.renderOrder=-1),i.bones[l].add(c),r.push(c)}}const s={};for(const[a,o]of Object.entries(n.sockets??{})){const l=new $t;l.name=`${t.id}:${a}`,l.position.set(...o.at),o.fingers&&sc(o.fingers,o.back,l.quaternion),i.bones[o.bone].add(l),s[a]=l}for(const a of[...i.meshes,...r])a.frustumCulled=!1;return i.root.updateMatrixWorld(!0),{group:i.root,rig:i,bones:i.bones,sockets:s,extras:r,weapon:n}}const oc={glove:"#3b2f27",gloveDark:"#2a221c",plate:"#595d60",plateLight:"#a9b3b8",steel:"#7d858a",bandRust:"#8a4a2b",bandCloth:"#bdb29a",knit:"#4f6660",bracer:"#5a3e2b",cord:"#8a7a5a",sleeve:"#6e6450",sleeveDark:"#4f483a",undersuit:"#2b2e31",glowElement:"#ffffff"},RM={hand:{at:[0,0,0]},fingers:{parent:"hand",at:[.004,0,-.098]},fingersTip:{parent:"fingers",at:[0,0,-.045]},thumb:{parent:"hand",at:[-.04,-.008,-.03],rot:[0,.6,0]},thumbTip:{parent:"thumb",at:[0,0,-.045]}},LM=[["hand",.085,.032,.098,0,0,-.049,"glove"],["fingers",.08,.026,.047,0,0,-.022,"glove"],["fingersTip",.077,.024,.04,0,0,-.019,"gloveDark"],["thumb",.026,.025,.047,0,0,-.022,"glove"],["thumbTip",.023,.022,.036,0,0,-.017,"gloveDark"]],Hf={titanPlate:[["hand",.092,.014,.055,0,.022,-.062,"plate"],["hand",.07,.006,.03,0,.03,-.028,"plateLight"],["hand",.112,.102,.092,0,0,.036,"plate"],["fingers",.082,.008,.04,0,.016,-.022,"plate"]],hunterCloak:[...[-.03,-.01,.01,.03].map(n=>["hand",.016,.01,.018,n,.02,-.09,"steel"]),["hand",.094,.09,.012,0,0,.02,"bandRust"],["hand",.094,.09,.012,0,0,.036,"bandCloth"]],warlockRobe:[["hand",.098,.092,.12,0,0,.07,"bracer"],["hand",.102,.096,.01,0,0,.04,"cord"],["hand",.102,.096,.01,0,0,.1,"cord"],["hand",.004,.004,.08,0,.017,-.05,"cord"]]},CM={titanPlate:[["fingers",.07,.004,.024,0,.0215,-.016,"glowElement"]],hunterCloak:[["hand",.078,.004,.008,0,.0185,-.074,"glowElement"]],warlockRobe:[["hand",.056,.004,.06,0,-.0175,-.05,"glowElement"],["hand",.004,.0025,.06,.022,.01725,-.05,"glowElement"]]},kl={titanPlate:{fore:[.105,.1,"plate"],upper:[.12,.115,"undersuit"]},hunterCloak:{fore:[.08,.076,"knit"],upper:[.105,.1,"undersuit"]},warlockRobe:{fore:[.115,.105,"sleeve"],upper:[.13,.12,"sleeveDark"]}},Gf={upper:.32,fore:.3},PM={right:[.26,-.58,.02],left:[-.3,-.62,0]},IM={right:[1,-1,.5],left:[-1,-1,.5]};function DM(n,e){const t=Hf[n]?n:"hunterCloak",i=[...LM,...Hf[t],...CM[t]],r=e==="left",s=Object.fromEntries(Object.entries(RM).map(([a,o])=>[a,{...o,at:r?[-o.at[0],o.at[1],o.at[2]]:o.at,...o.rot?{rot:r?[o.rot[0],-o.rot[1],-o.rot[2]]:o.rot}:{}}]));return{id:`hand-${e}-${n}`,bones:s,parts:i.map(([a,o,l,u,c,f,d,h,_=0,v=0,m=0])=>r?[a,o,l,u,-c,f,d,h,_,-v,-m]:[a,o,l,u,c,f,d,h,_,v,m]),palette:oc}}const St=Math.PI/180,Vf={x:0,y:0,z:0,pitch:0,yaw:0,roll:0},ac=50,ta=.6,Wf=.12,hr=.15,na={y:-.22,z:.04,pitch:-30,roll:25},qs={x:.004,halflife:.07},pr={yaw:2.5*St,pitch:2*St,roll:4*St,x:.012},UM=1.5,NM=4.2,kM=.045,Fl=.7,Xf=9.8;function FM(){const n=new Map;return e=>(n.has(e)||n.set(e,new Fi({color:e,roughness:.85,metalness:0})),n.get(e))}function OM(n={}){const e=n.hipFov??70,t=new Tn;t.name="first-person";const i=new Tn,r=new Tn,s=new Tn;t.add(i),i.add(r),r.add(s);const a=new Fi({vertexColors:!0,roughness:.7,metalness:0}),o=new xn({vertexColors:!0}),l=yo.map((J,ie)=>{const ue=Yc(J,{solidMaterial:a,glowMaterial:o});ue.group.visible=ie===0,s.add(ue.group);const fe=AM(J.sight.rear,J.sight.front,J.sight.eyeRelief);return{...ue,w:J,aim:fe,aimFwd:fe.p.clone().add(new U(0,0,-J.adsSlide)),hipP:new U(...J.hip.at),hipQ:new Yt().setFromEuler(new on(J.hip.rot[0]*St,J.hip.rot[1]*St,J.hip.rot[2]*St,"YXZ")),front:new U(...J.sight.front)}}),u=FM(),c=new gn(1,1,1);let f=n.classId??"hunterCloak";const d={};function h(){var J;for(const ie of["right","left"]){const ue=d[ie];ue&&(t.remove(ue.rig.root,ue.upper,ue.fore),ue.rig.dispose());const fe=DM(f,ie),Le=Mo[(J=$n[f])==null?void 0:J.element];Le&&(fe.palette={...fe.palette,glowElement:Le.glow});const Ve=xo(fe,{solidMaterial:a,glowMaterial:o});for(const rt of Ve.meshes)rt.frustumCulled=!1;Ve.glow&&(Ve.glow.visible=!1);const lt=kl[f]??kl.hunterCloak,xt=new Et(c,u(oc[lt.upper[2]])),ut=new Et(c,u(oc[lt.fore[2]]));t.add(Ve.root,xt,ut),d[ie]={rig:Ve,upper:xt,fore:ut,look:lt}}}h();const _={solidMaterial:a,glowMaterial:o};let v={};function m(){var ie,ue;for(const fe of Object.values(v))(ie=fe.group.parent)==null||ie.remove(fe.group),fe.dispose();if(v={},!n.buildProp)return;const J=$n[f];if(J)for(const fe of["grenade","melee","class","super"]){const Le=(ue=Lf[J[fe]])==null?void 0:ue.propKind;!Le||v[Le]||(v[Le]=n.buildProp(Le,J.element,_),d.left.rig.bones.hand.add(v[Le].group))}}m();const p=new Tn,S=(J,ie=1)=>new xn({color:J,transparent:!0,opacity:ie,depthWrite:!1,blending:ro,toneMapped:!1}),x=new Et(new gn(.03,.03,.004),S(16773584)),E=new gn(.012,.004,1).translate(0,0,-.5),R=[0,1,2,3].map(J=>{const ie=new Tn;ie.rotation.z=J*Math.PI/2;const ue=new Et(E,S(16757575,.9));return ue.rotation.y=.35,ie.add(ue),{pivot:ie,petal:ue}});p.add(x,...R.map(J=>J.pivot)),p.visible=!1,s.add(p);const b=new gn(.009,.009,.024),y=new Fi({color:Dh.brass,roughness:.5,metalness:0}),A=Array.from({length:16},()=>{const J=new Et(b,y);return J.visible=!1,J.frustumCulled=!1,t.add(J),{mesh:J,age:Fl,vel:new U,spin:new U}});let L=0;const g=new _o(.023,.023,.006,6).rotateX(Math.PI/2),M={mesh:new Et(g,y),age:1,vel:new U,spin:new U};M.mesh.visible=!1,M.mesh.frustumCulled=!1,t.add(M.mesh);let P=0,D=null,F=null,k=null,N=null;const X=new Yt,V=new on(0,0,0,"YXZ"),ce=new U,de={x:0,y:0,z:0,pitch:0,yaw:0,roll:0};let le=0;const Se={p:new U,q:new Yt,curl:.6,shoulder:0,cam:[0,0,0,0,0,0]};let Ie=!1,B=0,K=e;const Z={pitch:0,yaw:0},Q={rise:{x:0,v:0},roll:{x:0,v:0},back:{x:0,v:0}},re={yaw:{x:0,v:0},pitch:{x:0,v:0},roll:{x:0,v:0},x:{x:0,v:0}},ve={x:0,v:0},ye={x:0,v:0};let We=0,$e=0,O=-1/0,Ot=0,Je=-1/0,tt=0,ze=0,ct=[],ke=0;const C={speed:0,airborne:!1},w=()=>l[P],Y=J=>k?(J-k.at)/l[k.gun].w.reload.clip:0,ee=new U,ae=new Yt,te=new Yt,Pe=new on(0,0,0,"YXZ"),pe=new U,me=new Ze,Ke=new Ze,he=new U(1,1,1),ge=[],Fe=new U,He=new U,Te=new Yt;function Ye(J,ie,ue,fe,Le=0){const Ve=J.w.sockets[ie],lt=J.sockets[ie],xt=J.bones[Ve.bone];if(xt.parent&&xt.parent.isBone&&(Ve.bone==="mag"||Ve.bone==="block")){const ut=xt.userData.rest;me.copy(xt.parent.matrixWorld),Fe.copy(ut.p),Fe.y-=Le,me.multiply(Ke.compose(Fe,Te.setFromEuler(ut.r),he)),me.multiply(Ke.compose(lt.position,lt.quaternion,he))}else lt.updateWorldMatrix(!1,!1),me.copy(lt.matrixWorld);me.decompose(ue,fe,He)}function Ge(J,ie,ue,fe){if(Of[ie]){const Le=Of[ie];ue.set(...Le.at),sc(Le.fingers,Le.back,fe);return}if(ie==="belowMag"){Ye(J,"leftMag",ue,fe,yM);return}Ye(J,ie,ue,fe)}const ht=J=>J.w.oneHanded?"offLeft":"leftHold";function G(J,ie){return ie>=J.readyStart?1-li((ie-J.readyStart)/w().w.readyTime):Er((ie-J.lowerAt)/J.clip.down)}const xe={p:new U,q:new Yt};function j(J,ie,ue,fe){if(ie==="grip"){ue.copy(xe.p),fe.copy(xe.q);return}const Le=D2[ie];if(Le){ue.set(...Le.at),sc(Le.fingers,Le.back,fe);return}Ge(J,ie,ue,fe)}const se={position:new U,quaternion:new Yt};function I(J,ie,ue,fe){const Le=J.bones[ie],Ve=J.sockets[ue];me.compose(fe.position,fe.quaternion,he),Ke.compose(Ve.position,Ve.quaternion,he).invert(),me.multiply(Ke),Ke.copy(Le.parent.matrixWorld).invert(),Ke.multiply(me).decompose(Le.position,Le.quaternion,He)}const $=new U;function ne(J,ie,ue,fe=0){const Le=ee.set(...PM[ie]);fe>0&&Rf[ie]&&Le.lerp($.set(...Rf[ie]),fe);const Ve=Gf.upper,lt=Gf.fore,xt=pe.copy(ue).sub(Le),ut=Ut(xt.length(),Math.abs(Ve-lt)+.001,Ve+lt-.001),rt=xt.normalize(),Vt=new U(...IM[ie]);Vt.addScaledVector(rt,-Vt.dot(rt)).normalize();const T=(Ve*Ve+ut*ut-lt*lt)/(2*Ve*ut),z=Math.sqrt(Math.max(0,1-T*T)),q=Le.clone().addScaledVector(rt,Ve*T).addScaledVector(Vt,Ve*z);it(J.upper,Le,q,J.look.upper,Vt),it(J.fore,q,ue,J.look.fore,Vt)}const Re=new U,qe=new U,De=new U;function it(J,ie,ue,fe,Le){De.copy(ue).sub(ie);const Ve=De.length();De.divideScalar(Ve||1),qe.copy(Le).addScaledVector(De,-Le.dot(De)).normalize(),Re.crossVectors(qe,De),J.quaternion.setFromRotationMatrix(me.makeBasis(Re,qe,De)),J.position.copy(ie).add(ue).multiplyScalar(.5),J.scale.set(fe[0],fe[1],Ve+.04)}function kt(J){const ie=J.sockets.port;if(!ie)return;const ue=A[L];L=(L+1)%A.length,ie.getWorldPosition(ue.mesh.position);const fe=wr(Ot*3.1);ue.vel.set(1.6+.4*(1+fe),1.2+.3*(1-fe),.3+.15*(1+fe)),ue.spin.set(12*fe,9,14*-fe),ue.mesh.quaternion.copy(i.quaternion),ue.age=0,ue.mesh.visible=!0}const Pt={rig:t,guns:l,recoil:Z,get active(){return P},get adsE(){return B},get worldFov(){return K},get magnification(){return kn(1,w().w.zoom,B)},get swapping(){return!!D},get dipping(){return!!F},get busy(){return!!D||!!F||!!N},get acting(){return!!N},get lowered(){return le},get actionId(){return N?N.id:null},get actionT(){return N?Ut((ke-N.at)/N.seconds,0,1):0},get camOffset(){return de},get props(){return v},get reloading(){return!!k&&!k.cutAt},get classId(){return f},setAim(J){Ie=!!J},setClass(J){J===f||!kl[J]||(f=J,N=null,h(),m(),Pt.update(0,ke,C))},requestSwap(J,ie){if(!l[J])return!1;if(D){if(D.phase==="stow")return D.to=J,!0;if(J===P)return!1;const ue=Ut((ie-D.at)/w().w.readyTime,0,1),fe=1-li(ue);return D={phase:"stow",at:ie-Math.sqrt(fe)*w().w.stowTime,to:J},!0}return J===P?!1:(Pt.cutReload(ie),D={phase:"stow",at:ie,to:J},!0)},startReload(J){k={at:J,gun:P,lastT:0,cutAt:null},ct=[]},cutReload(J){k&&k.cutAt===null&&(k.cutAt=J)},dip(J){Pt.cutReload(J);let ie=0;if(F){const ue=(J-F.at)/hr;ie=ue<1?Er(ue):1-li((J-F.at-hr)/w().w.readyTime)}F={at:J-Math.sqrt(ie)*hr}},act(J,ie,ue,fe={}){const Le=Lf[J];if(!Le||!(ue>0))return!1;Pt.cutReload(ie);let Ve=0;if(F){const xt=(ie-F.at)/hr;Ve=xt<1?Er(xt):1-li((ie-F.at-hr)/w().w.readyTime)}N&&(Ve=Math.max(Ve,G(N,ie)));const lt=N?{p:Se.p.clone(),q:Se.q.clone(),curl:Se.curl,shoulder:Se.shoulder,cam:Se.cam.slice()}:null;return F=null,N={id:J,clip:Le,at:ie,seconds:ue,charged:!!fe.charged,from:lt,lowerAt:ie-Math.sqrt(Ut(Ve,0,1))*Le.down,readyStart:Le.tp?Math.max(ie+Le.down,ie+ue-w().w.readyTime):ie+Le.ready*ue},!0},onShot(J){const ie=w(),ue=ie.w.recoil,fe=kn(1,ie.w.zoom,B);Ot++,O=J,Je=J,ie.w.id==="hand"&&tt++;const Le=ue.aim.pitch*St/fe,Ve=Z.pitch;Z.pitch=ue.aim.climbCap?Math.max(Ve,Math.min(Ve+Le,ue.aim.climbCap*St/fe)):Ve+Le;const lt=ue.aim.direction,xt=Math.sin((lt+5)*Math.PI/10)*(100-lt)/100,ut=(100-lt)/100;Z.yaw+=-(xt+wr(Ot)*ut)*.5*Le;const rt=ue.kick.tp;Q.rise.v+=Gs(kn(ue.kick.rise[0],ue.kick.rise[1],B)*St,rt),Q.back.v+=Gs(kn(ue.kick.back[0],ue.kick.back[1],B)/1e3,rt),Q.roll.v+=Gs(kn(ue.kick.roll[0],ue.kick.roll[1],B)*St*wr(Ot+17),rt),p.userData.at=J,p.userData.n=Ot,ie.w.casings&&kt(ie)},update(J,ie,ue={}){const fe=Math.max(0,J);ke=ie,C.speed=ue.speed??0,C.airborne=!!ue.airborne;let Le=0;if(D&&D.phase==="stow"){const we=(ie-D.at)/w().w.stowTime;we>=1?(l[P].group.visible=!1,P=D.to,l[P].group.visible=!0,D={phase:"ready",at:ie,to:P},Q.rise.x=Q.rise.v=Q.back.x=Q.back.v=Q.roll.x=Q.roll.v=0,Le=1):Le=Er(we)}if(D&&D.phase==="ready"){const we=(ie-D.at)/w().w.readyTime;we>=1?D=null:Le=Math.max(Le,1-li(we))}if(F){const we=(ie-F.at)/hr;if(we<1)Le=Math.max(Le,Er(we));else{const _t=(ie-F.at-hr)/w().w.readyTime;_t>=1?F=null:Le=Math.max(Le,1-li(_t))}}let Ve=0,lt=0;if(N){const we=N,_t=(ie-we.at)/we.seconds;Ve=Ut(_t,0,1),Le=Math.max(Le,G(we,ie)),lt=we.from?1-li((ie-we.at)/Wf):0,ie>=we.readyStart+w().w.readyTime&&(N=null)}le=Le;let xt=0,ut=0,rt=1;if(k){const we=l[k.gun].w.reload;if(xt=Y(ie),k.gun!==P)k=null;else{Ie&&xt>=we.seat&&Pt.cutReload(ie);const _t=k.cutAt===null?1/0:(k.cutAt-k.at)/we.clip;ut=Math.min(xt,_t,1);for(const[Ft,To]of we.events){if(Ft<=k.lastT||Ft>ut||ct.includes(To))continue;ct.push(To);const Ya={seat:[1.2,4],slap:[.4,0],settle:[.3,0],snap:[2,0],latch:[.6,0],eject:[.8,0]}[To];if(Ya){const ks=l[k.gun].w.recoil.kick.tp;Q.rise.v+=Gs(Ya[0]*St,ks),Q.back.v-=Gs(Ya[1]/1e3,ks)}if(To==="eject"){const ks=w();ks.bones.block.updateWorldMatrix(!0,!1),ks.bones.block.matrixWorld.decompose(M.mesh.position,M.mesh.quaternion,pe),M.vel.set(-.4,-.6,.2),M.spin.set(4,7,2),M.age=0,M.mesh.visible=!0}}k.lastT=Math.max(k.lastT,ut),k.cutAt!==null&&(rt=1-li((ie-k.cutAt)/Wf)),(xt>=1||rt<=0)&&(we.cylTurn&&ut>=we.cylTurn[1][0]&&(ze=(ze+60)%360),k=null)}}const Vt=!!k,T=w(),z=Vt?T.w.reload:null,q=Vt&&xt>=z.seat,W=!D&&!F&&!N&&(!Vt||q||k.cutAt!==null);if(B=_2(B,Ie&&W,fe,N?Math.min(T.w.adsTime,N.clip.down):T.w.adsTime),K=bM(e,kn(1,T.w.zoom,B)),B<ta){const we=B/ta;i.position.lerpVectors(T.hipP,T.aimFwd,we),i.quaternion.slerpQuaternions(T.hipQ,T.aim.q,we)}else i.position.lerpVectors(T.aimFwd,T.aim.p,(B-ta)/(1-ta)),i.quaternion.copy(T.aim.q);let H=0,oe=0,_e=0,Ee=0,Ce=0,Oe=0;Vt&&(Wn(z.gun,ut,ge),H+=ge[0]/1e3*rt,oe+=ge[1]/1e3*rt,_e+=ge[2]/1e3*rt,Ee+=ge[3]*rt,Ce+=ge[4]*rt,Oe+=ge[5]*rt),Le>0&&(oe+=na.y*Le,_e+=na.z*Le,Ee+=na.pitch*Le,Oe+=na.roll*Le),ti(ve,ue.airborne?1:0,.1,fe),ue.landed>0&&(ye.v-=Math.min(.35,.035*ue.landed)),ti(ye,0,wf(.07),fe);const Be=1-B;oe+=(.012*ve.x+ye.x)*Be,Ee+=-2.5*ve.x*Be,i.position.x+=H,i.position.y+=oe,i.position.z+=_e,Pe.set(Ee*St,Ce*St,Oe*St,"YXZ"),i.quaternion.multiply(ae.setFromEuler(Pe));const be=fe>0?(ue.lookYaw??0)/fe:0,dt=fe>0?(ue.lookPitch??0)/fe:0;ti(re.yaw,Ut(-.012*be,-pr.yaw,pr.yaw),qs.halflife,fe),ti(re.pitch,Ut(-.01*dt,-pr.pitch,pr.pitch),qs.halflife,fe),ti(re.roll,Ut(-.02*be,-pr.roll,pr.roll),qs.halflife,fe),ti(re.x,Ut(qs.x*be,-.012,pr.x),qs.halflife,fe);const gt=ue.speed??0;We+=gt*fe/UM,$e=Ll($e,Ut(gt/NM,0,1)*(ue.airborne?0:1),.08,fe);const Tt=1-Ut(gt/.5,0,1),nn=1-.9*B;r.position.set((re.x.x+.006*Math.sin(Math.PI*We)*$e)*Be,(-.004*((1-Math.cos(2*Math.PI*We))/2)*$e+.0012*Math.sin(Math.PI*.5*ie)*Tt)*Be,0),r.rotation.set((re.pitch.x+.15*St*Math.sin(Math.PI*.5*ie+.7)*Tt)*nn,re.yaw.x*nn,(re.roll.x+.8*St*Math.sin(Math.PI*We)*$e)*nn,"YXZ");const st=wf(T.w.recoil.kick.tp);ti(Q.rise,0,st,fe),ti(Q.back,0,st,fe),ti(Q.roll,0,st,fe);const Ue=ee.copy(T.front).multiplyScalar(B);Pe.set(Q.rise.x,0,Q.roll.x,"YXZ"),s.quaternion.setFromEuler(Pe),s.position.copy(Ue).sub(pe.copy(Ue).applyQuaternion(s.quaternion)).add(pe.set(0,0,Q.back.x));const zt=T.w.recoil.aim;ie-O>zt.hold&&(Z.pitch=Ll(Z.pitch,0,zt.halflife,fe),Z.yaw=Ll(Z.yaw,0,zt.halflife,fe));for(const we of l)we.rig.reset();const je=ie-Je,qt=T.bones;if(T.w.id==="auto"&&je<.045&&(qt.bolt.position.z+=.022*(je<.012?je/.012:1-(je-.012)/.033)),T.w.id==="hand"){je<.06&&(qt.hammer.rotation.x+=.25*(je<.015?je/.015:1-(je-.015)/.045));const we=je<.06?0:li((je-.06)/.16);if(qt.cyl.rotation.z+=((Math.max(0,tt-1)+(tt>0?we:0))*60+ze)*St,Vt){qt.crane.rotation.z+=Wn(z.crane,ut,ge)[0]*St*rt;const _t=Wn(z.cylTurn,ut,ge)[0];qt.cyl.rotation.z+=(ut>=z.cylTurn[1][0]?kn(60,_t,rt):_t)*St,qt.block.position.z+=Wn(z.ejector,ut,ge)[0]/1e3*rt}}const Bi=p.userData.at??-1/0;if(p.visible=ie-Bi<kM&&!D,p.visible){const we=p.userData.n??0;p.position.copy(T.sockets.muzzle.position),p.rotation.set(0,0,(wr(we*5.3)*.5+.5)*Math.PI*.5);const _t=(1+.15*wr(we*2.7))*(1-.45*B);p.scale.setScalar(_t);for(const Ft of R)Ft.petal.scale.set(1,1,T.w.recoil.flash)}t.updateMatrixWorld(!0);const Wt=d.right.rig,It=d.left.rig;Wt.reset(),It.reset(),Ye(T,"rightGrip",Wt.root.position,Wt.root.quaternion),ln(Wt.bones,.85);const Dt=ht(T);let rn=.6,Fr=0;if(Vt){const we=Tf(z.left,ut);Ge(T,we.from,ee,ae),Ge(T,we.to,pe,te),It.root.position.lerpVectors(ee,pe,we.w),It.root.quaternion.slerpQuaternions(ae,te,we.w),se.position.copy(It.root.position),se.quaternion.copy(It.root.quaternion),rn=we.extra[0],rt<1&&(Ge(T,Dt,ee,ae),It.root.position.lerp(ee,1-rt),It.root.quaternion.slerp(ae,1-rt),rn=kn(.6,rn,rt)),Fr=Bt(z.mag??z.block,ut)}else Ge(T,Dt,It.root.position,It.root.quaternion);let Zt=0,Or=!1,Ns=!1;const zn=Se.cam.fill(0);if(N){const we=N.clip;if(we.left){xe.p.copy(It.root.position),xe.q.copy(It.root.quaternion);const _t=Tf(we.left,Ve,we.ease);j(T,_t.from,ee,ae),j(T,_t.to,pe,te),It.root.position.lerpVectors(ee,pe,_t.w),It.root.quaternion.slerpQuaternions(ae,te,_t.w),rn=_t.extra[0],Zt=Wn(we.shoulder,Ve,ge)[0],Wn(we.cam,Ve,ge);for(let Ft=0;Ft<6;Ft++)zn[Ft]=ge[Ft];Or=Bt(we.prop,Ve)>0,Ns=Bt(we.glow,Ve)>0&&(!we.glowCharged||N.charged)}if(lt>0){const _t=N.from;It.root.position.lerp(_t.p,lt),It.root.quaternion.slerp(_t.q,lt),rn=kn(rn,_t.curl,lt),Zt=kn(Zt,_t.shoulder,lt);for(let Ft=0;Ft<6;Ft++)zn[Ft]=kn(zn[Ft],_t.cam[Ft],lt)}}Se.p.copy(It.root.position),Se.q.copy(It.root.quaternion),Se.curl=rn,Se.shoulder=Zt;const Br=qc.cameraMotion;de.x=zn[0]/1e3*Br,de.y=zn[1]/1e3*Br,de.z=zn[2]/1e3*Br,de.pitch=zn[3]*St*Br,de.yaw=zn[4]*St*Br,de.roll=zn[5]*St*Br;const hp=N==null?void 0:N.clip.propKind;for(const[we,_t]of Object.entries(v))_t.group.visible=Or&&we===hp,_t.glow&&(_t.glow.visible=we!=="knife"||Ns);if(d.left.rig.glow&&(d.left.rig.glow.visible=Ns),ln(It.bones,rn),Wt.root.updateMatrixWorld(!0),It.root.updateMatrixWorld(!0),ne(d.right,"right",Wt.root.position),ne(d.left,"left",It.root.position,Zt),Fr>0)for(const[we,_t]of[["mag","leftMag"],["block","leftBlock"]]){const Ft=T.bones[we];Ft&&(ee.copy(Ft.position),ae.copy(Ft.quaternion),I(T,we,_t,se),rt<1&&(Ft.position.lerpVectors(ee,Ft.position,rt),Ft.quaternion.slerpQuaternions(ae,Ft.quaternion,rt)))}if(T.w.id==="hand"&&Vt){const we=ut>=.46&&ut<.6&&rt>=1;qt.block.scale.setScalar(we?1e-4:1)}T.group.updateMatrixWorld(!0);for(const we of A)we.age>=Fl||(we.age+=fe,we.vel.y-=Xf*fe,we.mesh.position.addScaledVector(we.vel,fe),we.mesh.rotation.x+=we.spin.x*fe,we.mesh.rotation.y+=we.spin.y*fe,we.mesh.rotation.z+=we.spin.z*fe,we.age>=Fl&&(we.mesh.visible=!1));return M.age<1&&(M.age+=fe,M.vel.y-=Xf*fe,M.mesh.position.addScaledVector(M.vel,fe),M.mesh.rotation.x+=M.spin.x*fe,M.mesh.rotation.y+=M.spin.y*fe,M.age>=1&&(M.mesh.visible=!1)),Pt},muzzleWorld(J,ie=new U){w().sockets.muzzle.getWorldPosition(ie);const fe=Math.tan(J.fov*St/2)/Math.tan(ac*St/2);return ie.x*=fe,ie.y*=fe,ie.applyQuaternion(J.quaternion).add(J.position)},leftHandWorld(J,ie=new U){const ue=d.left.rig.bones.hand;ue.updateWorldMatrix(!0,!1),ie.set(...I2).applyMatrix4(ue.matrixWorld);const fe=Math.tan(J.fov*St/2)/Math.tan(ac*St/2);return ie.x*=fe,ie.y*=fe,X.setFromEuler(V.set(de.pitch,de.yaw,de.roll,"YXZ")),ie.applyQuaternion(X).add(ce.set(de.x,de.y,de.z)),ie.applyQuaternion(J.quaternion).add(J.position)}};function ln(J,ie){J.fingers.rotation.x-=ie*1.2,J.fingersTip.rotation.x-=ie*1,J.thumb.rotation.x-=ie*.4}function Bt(J,ie){if(!J)return 0;let ue=J[0][1];for(const fe of J)fe[0]<=ie&&(ue=fe[1]);return ue}for(const J of Object.values(d))J.rig.reset();return Pt.update(0,0,{}),Pt}const Uh=.1,qf=1e-9,Yf=n=>n.burstLeft?{...n,burstLeft:0}:n;function BM(){let n=-1/0,e=-1/0,t=!1;return{pull(i,r,s,{held:a=!1,pressed:o=!1,blocked:l=!1}={}){if(o&&(n=s),a||(t=!1),l)return t=!1,{state:Yf(i),shots:[],events:[]};const u=s-n<=Uh;let c=a,f;if(r.burstCycle>0){const _=e+r.burstCycle;f=(a||u)&&s+qf>=_,!f&&i.burstLeft>0&&s<_&&(c=!0)}else f=u&&s+qf>=i.nextShotAt;const d=o2(i,s,{held:c,pressed:f});let h=d.state;if(d.shots.length&&(n=-1/0,r.burstCycle>0&&f)){const _=e+r.burstCycle;e=t&&s-_<i.maxCatchUp?_:d.shots[0].at,t=a}return d.events.some(_=>_.type==="emptied")&&(h=Yf(h)),{state:h,shots:d.shots,events:d.events}}}}const zM={iron:"#3a3d40",iron2:"#595d60",plasteel:"#a9b3b8",gunmetal:"#2d3034",leather:"#5a3e2b",gambeson:"#bdb29a",linen:"#9b8f78",rust:"#8a4a2b",tarp:"#4f6660",wood:"#6b5238",face:"#151719",steel:"#7d858a",oxblood:"#7a1e1e",oxbloodDark:"#4e1414",slate:"#3f5a78",slateDark:"#2a3d52",teal:"#1f5e5a",tealDark:"#143f3c",pikeHull:"#3b3a3f",ghostShell:"#cfd6da",glowArc:"#6fd3ff",glowSolar:"#ff8a2a",glowVoid:"#a76bff",glowRed:"#ff4a3a",glowGhost:"#e8f6ff"};function Zs(n={}){const e=n.scale??1,t=n.bulk??1,i=n.keys??{},r=(d,h)=>i[d]??h,s={},a=[],o=(d,h,_,v,m,p,S,x,E=0,R=0,b=0)=>a.push([d,h*e,_*e,v*e,m*e,p*e,S*e,x,E,R,b]),l=(d,h,_)=>[d*e,h*e,_*e];s.pelvis={parent:n.pelvisParent,at:n.pelvisAt??l(0,.92,0)},n.pelvisParent===void 0&&delete s.pelvis.parent,o("pelvis",.36*t,.16,.23*t,0,0,0,r("legs","linen"));const u=n.seated?1.45:0;for(const d of[-1,1]){const h=d<0?"L":"R";s["thigh"+h]={parent:"pelvis",at:l(d*.1*t,-.04,0),rot:[-u,0,d*(n.stance??0)]},s["shin"+h]={parent:"thigh"+h,at:l(0,-.42,0),rot:[u,0,0]},o("thigh"+h,.17*t,.44,.19*t,0,-.21,0,r("legs","linen")),o("shin"+h,.15*t,.42,.17*t,0,-.21,0,r("shins",r("legs","linen"))),o("shin"+h,.18*t,.08,.3*t,0,-.42,.05,r("boots","leather")),n.greaves&&o("shin"+h,.17*t,.26,.05,0,-.24,.1*t,r("greaves","iron2"))}s.chest={parent:"pelvis",at:l(0,.06,0),rot:[n.lean??0,0,0]},o("chest",.44*t,.52,.25*t,0,.26,0,r("torso","linen")),o("chest",.13,.08,.13,0,.56,0,r("neck","leather")),n.plate&&o("chest",.5*t,.32,.3*t,0,.34,.01,r("plate","iron")),n.plate2&&o("chest",.42*t,.12,.28*t,0,.1,.01,r("plate2","iron")),s.head={parent:"chest",at:l(0,.58,0)};const c=n.helm??"great";if(c==="great"?(o("head",.26,.28,.28,0,.14,0,r("helm","iron")),o("head",.19,.03,.02,0,.16,.145,r("visor","glowArc"))):c==="stepped"?(o("head",.24,.22,.26,0,.11,0,r("helm","iron")),o("head",.18,.1,.2,0,.27,-.01,r("helm","iron")),o("head",.2,.035,.02,0,.13,.135,r("visor","glowVoid"))):c==="hood"?(o("head",.21,.23,.23,0,.12,0,"face"),o("head",.12,.022,.02,0,.14,.125,r("visor","glowSolar")),o("head",.29,.3,.28,0,.15,-.035,r("hood","slate")),o("head",.12,.12,.14,0,.33,-.03,r("hood","slate"),-.55,0,0)):c==="wrap"&&(o("head",.22,.24,.24,0,.12,0,r("wrap","linen")),o("head",.28,.22,.28,.02,.17,-.03,r("hood","tarp")),o("head",.2,.03,.02,0,.13,.125,"face")),n.crown){const d=c==="stepped"?.32:.28,h=[[0,.13,.1],[-.1,.1,.075],[.1,.1,.075],[-.12,-.05,.06],[.12,-.05,.06]].slice(0,n.crown);for(const[_,v,m]of h)o("head",.035,m,.035,_,d+m/2,v,r("crown","iron2"))}for(const d of[-1,1]){const h=d<0?"L":"R",_=(n.arms??{})[h]??{};s["arm"+h]={parent:"chest",at:l(d*(.22*t+.06),.5,0),rot:[_.fwd??0,0,d*(_.out??.06)]},s["fore"+h]={parent:"arm"+h,at:l(0,-.32,0),rot:[-(_.elbow??.1),0,0]},o("arm"+h,.12*t,.34,.13*t,0,-.16,0,r("arms",r("torso","linen"))),o("fore"+h,.11*t,.3,.12*t,0,-.15,0,r("forearms",r("arms",r("torso","linen")))),o("fore"+h,.1,.1,.1,0,-.33,0,r("hands","leather")),n.gauntlets&&o("fore"+h,.13*t,.16,.14*t,0,-.19,0,r("gauntlets","iron"));const v=(n.pauldrons??{})[h];v&&o("arm"+h,v.size[0]*t,v.size[1],v.size[2]*t,d*.02,0,0,v.key,0,0,d*-.22),(n.glowHands??[]).includes(h)&&o("fore"+h,.14,.14,.14,0,-.34,.01,n.glowKey??"glowArc")}if(n.mantle&&(o("chest",.64*t,.12,.4*t,0,.5,-.02,n.mantle),o("chest",.54*t,.1,.33*t,0,.43,-.06,n.mantle)),n.tabard&&o("chest",.26*t,.78,.03,0,.02,.15*t,n.tabard),n.sash&&(o("chest",.08,.66,.27*t,0,.27,.005,n.sash,0,0,.7),o("chest",.46*t,.07,.27*t,0,.03,0,n.sash)),n.tarpCape&&o("chest",.5,.8,.02,.1,.12,-.16*t,n.tarpCape,.08,0,.18),n.cloak){const d=n.cloak;s.cape={parent:"chest",at:l(0,.5,-.14*t),rot:[-(n.lean??0)+.05,0,0]},o("cape",.46*t,d.len*.7,.03,0,-d.len*.35,0,d.key);for(const h of[-1,1])o("cape",.2*t,d.len*.34,.03,h*.12*t,-d.len*.86,0,d.dark??d.key)}if(n.coat){const d=n.coat;for(const h of[-1,1])o("pelvis",.19*t,d.len,.05,h*.1*t,-d.len/2+.06,.13*t,d.key),o("pelvis",.05,d.len*.95,.26*t,h*.2*t,-d.len/2+.06,0,d.dark);o("pelvis",.42*t,d.len,.05,0,-d.len/2+.06,-.13*t,d.key);for(const h of[.3,.6])o("pelvis",.43*t,.03,.055,0,-d.len*h,-.13*t,d.dark)}if(n.banner){s.banner={parent:"chest",at:l(.14*t,.35,-.2*t)},o("banner",.05,1.5,.05,0,.4,0,"wood"),o("banner",.5,.66,.03,.27,.8,0,n.banner.key);for(const[d,h,_,v,m]of n.banner.sigil)o("banner",d,h,.035,_,v,0,n.banner.mark,0,0,m)}n.trophy&&(o("chest",.05,.9,.08,.06,.28,-.21*t,"steel",0,0,.55),o("chest",.015,.7,.02,.06,.28,-.26*t,"glowArc",0,0,.55));const f=(d,h)=>h.forEach(_=>o(d,..._));return n.weapon==="slug"&&f("foreR",[[.1,.36,.14,0,-.44,.04,"gunmetal"],[.065,.5,.07,0,-.84,.04,"iron"],[.08,.2,.12,0,-.22,.05,"plasteel"],[.07,.12,.13,0,-.46,-.07,"plasteel"]]),n.weapon==="handcannon"&&f("foreR",[[.07,.26,.1,0,-.45,.03,"gunmetal"],[.1,.09,.1,0,-.39,.03,"iron2"]]),n.weapon==="longrifle"&&f("foreR",[[.06,1.05,.09,0,-.7,.03,"gunmetal"],[.05,.3,.06,0,-.5,.09,"plasteel"],[.08,.22,.11,0,-.24,.05,"wood"]]),n.weapon==="wrapped"&&f("foreR",[[.09,.8,.1,0,-.62,.03,"gunmetal"],[.08,.22,.12,0,-.22,.05,"wood"],[.11,.08,.12,0,-.58,.03,"linen"],[.11,.07,.12,0,-.84,.03,"linen"],[.07,.14,.12,0,-.48,-.08,"rust"]]),n.weapon==="short"&&f("foreR",[[.07,.34,.1,0,-.48,.03,"gunmetal"]]),n.blade&&f("foreL",[[.05,.12,.08,0,-.26,.02,"steel"],[.02,.45,.06,0,-.52,.02,n.blade]]),{bones:s,parts:a}}function Ol({at:n=[.5,2.1,.1],fin:e="ghostShell",size:t=1}={}){const i={ghost:{at:n}},r=[],s=(a,o,l,u,c,f,d,h=0,_=0,v=0)=>r.push(["ghost",a*t,o*t,l*t,u*t,c*t,f*t,d,h,_,v]);return s(.13,.13,.13,0,0,0,"ghostShell",.62,.78,0),s(.05,.17,.035,.11,.03,-.02,e,0,0,-.5),s(.05,.17,.035,-.11,.03,-.02,"ghostShell",0,0,.5),s(.12,.035,.08,0,-.11,-.01,"ghostShell"),s(.05,.05,.02,0,0,.125,"glowGhost"),{bones:i,parts:r}}function HM(){const n={pike:{at:[0,.72,0]}},e=[],t=(...r)=>e.push(["pike",...r]);t(.72,.3,1.3,0,0,0,"pikeHull"),t(.5,.22,.55,0,-.04,.88,"pikeHull",.22,0,0),t(.82,.46,.6,0,.08,-.85,"iron"),t(.5,.08,1,0,-.19,-.05,"iron2");for(const r of[-1,1])t(.08,.1,.75,r*.28,-.1,.95,"gunmetal"),t(.09,.05,.03,r*.16,.03,1.16,"glowRed");t(.46,.04,.46,.08,.17,.15,"plasteel",0,0,.08),t(.42,.05,.5,0,.18,-.3,"tarp"),t(.32,.26,.32,0,.44,-.85,"wood");const i=Zs({pelvisParent:"pike",pelvisAt:[0,1.02-.72,-.3],seated:!0,bulk:1.1,lean:.25,helm:"wrap",sash:"oxblood",keys:{torso:"linen",legs:"linen"},weapon:"short",arms:{R:{fwd:-.9,elbow:.5},L:{fwd:-.9,elbow:.5,out:-.1}}});return{bones:{...n,...i.bones},parts:[...e,...i.parts]}}function GM(){const n={base:{at:[0,0,0]},head:{parent:"base",at:[0,1,0]}},e=[],t=(i,...r)=>e.push([i,...r]);t("base",.55,.9,.55,0,.45,0,"iron"),t("base",.7,.08,.7,0,.92,0,"iron2"),t("head",.56,.42,.62,0,.14,0,"iron2"),t("head",.62,.05,.66,0,.37,0,"plasteel");for(const i of[-1,1])t("head",.09,.09,.75,i*.13,.12,.65,"gunmetal");return t("head",.12,.06,.03,0,.26,.325,"glowRed"),{bones:n,parts:e}}const Bl=(n,e)=>({bones:{...n.bones,...e.bones},parts:[...n.parts,...e.parts]}),Mr=n=>n.userData.rest,zl=(n,e,t,i,r)=>{n&&(n.rotation.x=Mr(n).r.x+Math.sin(e*i+r)*t)},ns=(n,e)=>({id:n,...e,palette:zM}),$f={R:{fwd:-.5,elbow:1.07},L:{fwd:-.9,elbow:.6,out:-.25}},Hl=["ghost","banner"],VM=[{id:"levy",name:"Levy",faction:"warlord",rank:"minor",tier:"skirmisher",body:"human",health:{max:110},crit:{bones:["head"]},noHit:["cape"],spec:ns("levy",Zs({scale:.97,bulk:1.12,lean:.08,helm:"wrap",sash:"oxblood",tarpCape:"tarp",keys:{torso:"linen",legs:"linen",shins:"leather"},pauldrons:{L:{size:[.26,.1,.3],key:"rust"}},weapon:"wrapped",arms:$f})),idle:(n,e,t)=>{e.pelvis.position.y=Mr(e.pelvis).p.y+Math.sin(n*1.8+t.phase)*.012,e.chest.rotation.z=Mr(e.chest).r.z+Math.sin(n*.9+t.phase)*.03}},{id:"outrider",name:"Pike Outrider",faction:"warlord",rank:"minor",tier:"skirmisher",body:"pike",health:{max:260},crit:{bones:["head"]},spec:ns("outrider",HM()),idle:(n,e,t)=>{const i=Math.max(0,Math.sin(n*.7+t.phase)-.92)*.9;e.pike.position.y=Mr(e.pike).p.y+Math.sin(n*3.1+t.phase)*.03-i,e.pike.rotation.x=Mr(e.pike).r.x+i*.3}},{id:"champion",name:"Lesser Warlord",faction:"warlord",rank:"elite",tier:"heavy",body:"human",health:{max:520},crit:{bones:["head"]},noHit:["cape","banner","ghost"],measureAside:Hl,ghost:{speed:1,hover:[0,1.45,.32]},spec:ns("champion",Bl(Zs({scale:1.05,helm:"hood",keys:{torso:"leather",legs:"iron",shins:"iron2",hood:"slate",visor:"glowSolar"},cloak:{len:1.15,key:"slate",dark:"slateDark"},gauntlets:!0,pauldrons:{R:{size:[.2,.1,.24],key:"slate"},L:{size:[.16,.08,.2],key:"plasteel"}},weapon:"handcannon",blade:"glowSolar",glowHands:["L"],glowKey:"glowSolar",arms:{R:{fwd:-.9,elbow:.75},L:{fwd:-.35,elbow:.9,out:.05}}}),Ol({at:[.5,2.05,.05],fin:"slate",size:.85}))),idle:(n,e,t)=>{zl(e.cape,n,.05,1.2,t.phase)}},{id:"warlord",name:"Warlord",faction:"warlord",rank:"boss",tier:"heavy",body:"human",health:{max:1400},crit:{bones:["head"]},noHit:["cape","banner","ghost"],measureAside:Hl,ghost:{speed:.7,hover:[0,1.6,.38]},spec:ns("warlord",Bl(Zs({scale:1.15,bulk:1.25,helm:"great",crown:5,plate:!0,plate2:!0,greaves:!0,gauntlets:!0,keys:{torso:"gambeson",legs:"leather",shins:"iron",plate:"oxblood",plate2:"iron",arms:"iron2",forearms:"iron",visor:"glowArc"},pauldrons:{L:{size:[.3,.19,.36],key:"oxblood"},R:{size:[.17,.09,.22],key:"plasteel"}},mantle:"leather",tabard:"oxblood",trophy:!0,banner:{key:"oxblood",mark:"plasteel",sigil:[[.16,.16,.27,.86,Math.PI/4],[.36,.05,.27,.6,0]]},weapon:"slug",glowHands:["L"],glowKey:"glowArc",arms:{R:{fwd:-.5,elbow:1.07},L:{fwd:-.15,elbow:.45,out:.12}}}),Ol({at:[.62,2.3,.1],fin:"oxblood"}))),idle:(n,e,t)=>{e.head.rotation.y=Mr(e.head).r.y+Math.sin(n*.4+t.phase)*.25,zl(e.banner,n,.04,1.1,t.phase)}},{id:"rival",name:"Rival Warlord",faction:"warlord",rank:"boss",tier:"heavy",body:"human",health:{max:1200},crit:{bones:["head"]},noHit:["cape","banner","ghost"],measureAside:Hl,ghost:{speed:-.75,hover:[0,1.55,.36]},spec:ns("rival",Bl(Zs({scale:1.1,helm:"stepped",crown:3,keys:{torso:"teal",legs:"leather",arms:"teal",forearms:"iron2",helm:"iron",crown:"iron2",visor:"glowVoid"},coat:{len:.95,key:"teal",dark:"tealDark"},gauntlets:!0,pauldrons:{L:{size:[.18,.1,.24],key:"iron2"}},banner:{key:"teal",mark:"gambeson",sigil:[[.08,.4,.2,.8,0],[.08,.4,.34,.8,0]]},weapon:"longrifle",glowHands:["L","R"],glowKey:"glowVoid",arms:$f}),Ol({at:[-.6,2.2,.1],fin:"teal"}))),idle:(n,e,t)=>{zl(e.banner,n,.04,1,t.phase+1)}},{id:"turret",name:"Gate Turret",faction:"warlord",rank:"minor",tier:null,body:"turret",health:{max:240},crit:{keys:["glowRed"]},faces:!1,spec:ns("turret",GM()),idle:(n,e,t)=>{e.head.rotation.y=Mr(e.head).r.y+Math.sin(n*.6+t.phase)*.7}}],WM=Object.freeze({fodder:{sight:28,band:[1.6,4],speed:3.4,sprint:1.35,reaction:[.3,.55],cooldown:1.1,attack:5,strafe:.15,lose:4,turn:4},skirmisher:{sight:38,band:[7,14],speed:2.6,sprint:1.2,reaction:[.22,.45],cooldown:1.6,attack:20,strafe:.75,lose:6,turn:3},heavy:{sight:45,band:[10,20],speed:1.7,sprint:1.1,reaction:[.4,.7],cooldown:2.4,attack:26,strafe:.25,lose:9,turn:1.6}}),ia=.55,ei=3,Gl=1.5,Kf=.8,Vl=.6,XM=.5,jf=.6,Zf=.35,Wl=1,qM=.45,YM=.12,$M=.9,KM=.07,Xl=Math.PI*2;let jM=0;const Ti=n=>{const e=Math.max(0,Math.min(1,n));return e*e*(3-2*e)},Li=(n,e,t)=>n+(e-n)*t,Yi=n=>n.userData.rest,ZM={biped(n,e){n.pelvis.position.y=Yi(n.pelvis).p.y*(1-.5*e);for(const t of["L","R"])n["thigh"+t].rotation.x-=.95*e,n["shin"+t].rotation.x+=1.35*e,n["foot"+t].rotation.x-=.4*e,n["arm"+t].rotation.x+=.35*e,n["arm"+t].rotation.z+=(t==="L"?-.25:.25)*e,n["arm2"+t]&&(n["arm2"+t].rotation.x+=.3*e);n.chest.rotation.x+=.85*e,n.head.rotation.x+=.45*e,n.cape&&(n.cape.rotation.x-=.35*e),n.banner&&(n.banner.rotation.x-=.25*e)},human(n,e){n.pelvis.position.y=Yi(n.pelvis).p.y*(1-.47*e);for(const t of["L","R"])n["thigh"+t].rotation.x-=1.35*e,n["shin"+t].rotation.x+=1.9*e,n["arm"+t].rotation.x=Li(Yi(n["arm"+t]).r.x,-.25,e),n["fore"+t].rotation.x=Li(Yi(n["fore"+t]).r.x,-.15,e);n.chest.rotation.x+=.55*e,n.head.rotation.x+=.35*e,n.cape&&(n.cape.rotation.x-=.3*e),n.banner&&(n.banner.rotation.x-=.2*e)},servitor(n,e){n.core.position.y=Li(Yi(n.core).p.y,.62,e),n.core.rotation.z+=.5*e,n.core.rotation.x+=.35*e},shank(n,e){n.hull.position.y=Li(Yi(n.hull).p.y,.5,e),n.hull.rotation.z+=.7*e,n.hull.rotation.x+=.3*e},pike(n,e){n.pike.position.y=Li(Yi(n.pike).p.y,.2,e),n.pike.rotation.z+=.2*e,n.pike.rotation.x+=.08*e,n.chest.rotation.x+=.65*e,n.head.rotation.x+=.35*e},turret(n,e){n.head.rotation.x+=.5*e,n.head.position.y-=.1*e}},ql={biped(n,e){n.chest.rotation.x-=.22*e,n.head.rotation.x-=.18*e},human(n,e){n.chest.rotation.x-=.2*e,n.head.rotation.x-=.15*e},servitor(n,e){n.core.rotation.y+=.7*e},shank(n,e){n.hull.rotation.z+=.35*e,n.hull.position.y+=.05*e},pike(n,e){n.pike.rotation.z+=.12*e,n.chest.rotation.x-=.2*e},turret(n,e){n.head.rotation.y+=.25*e}},Nh=n=>{var e;return Gc({max:n.health.max,shield:((e=n.shield)==null?void 0:e.amount)??0})},JM=new Fc(1,3),QM=new gn(.5,1,.5).translate(0,.5,0),eS=3.4;function Jf(n,e,t,i){const r=new xn({color:n.colour,transparent:!0,opacity:n.opacity,depthWrite:!1,blending:ro}),s=new Tn;return s.add(new Et(JM,r)),s.position.copy(i),s.scale.copy(t),e.add(s),{group:s,fillMat:r,base:n.opacity,scale:t.clone()}}function tS(n,e){var l,u;const t=new Fi({vertexColors:!0,roughness:.85,metalness:0,emissive:16777215,emissiveIntensity:0}),i=new xn({vertexColors:!0}),r=xo(n.spec,{solidMaterial:t,glowMaterial:i});r.root.position.set(e.x??0,0,e.z??0),r.root.rotation.y=e.yaw??0,(l=e.scene)==null||l.add(r.root);const s=r.bounds(n.measureAside??[]);let a=null;if(n.shield){const c=n.shield.pad/r.scale,f=s.getSize(new U).multiplyScalar(.5*c);a=Jf(n.shield,r.root,f,s.getCenter(new U).divideScalar(r.scale))}const o={unit:n,id:n.id,name:n.name,rank:n.rank,faction:n.faction,rig:r,root:r.root,bones:r.bones,meshes:r.meshes,phase:(e.index??0)*1.7,health:Nh(n),diedAt:null,revivedAt:null,respawnAt:null,lastHitAt:-1/0,flashUntil:-1/0,shieldHitAt:-1/0,shieldBrokeAt:-1/0,flinch:0,etherClock:0,height:s.max.y-s.min.y,top:s.max.y,bottom:s.min.y,footprint:Math.min(.8,Math.max(.3,-s.min.x,s.max.x,-s.min.z)),turn:n.turn??((u=WM[n.tier])==null?void 0:u.turn)??2,shell:a,aura:n.aura?Jf(n.aura,r.bones[n.aura.bone],new U().setScalar(n.aura.r),new U(...n.aura.at)):null,column:null,scene:e.scene??null};return n.ghost&&(o.column=new Et(QM,new xn({color:15136511,transparent:!0,opacity:0,blending:ro,depthWrite:!1})),o.column.visible=!1,o.column.position.set(n.ghost.hover[0],0,n.ghost.hover[2]*.5),r.root.add(o.column)),r.root.updateMatrixWorld(!0),o}function $c(n,e=.5,t=new U){return t.set(n.root.position.x,n.root.position.y+n.bottom+n.height*e,n.root.position.z)}function nS(n,e){var s,a,o,l,u;const t=n.rig.partAt(e.object,e.faceIndex);if(!t)return null;const i=n.unit;if((s=i.noHit)!=null&&s.includes(t[0]))return null;const r=!!((o=(a=i.crit)==null?void 0:a.bones)!=null&&o.includes(t[0])||(u=(l=i.crit)==null?void 0:l.keys)!=null&&u.includes(t[7]));return{part:t,crit:r&&n.health.shield<=0}}function iS(n,{amount:e,source:t,at:i,crit:r=!1}){if(n.health.dead)return{events:[],killed:!1};const{state:s,events:a}=bh(n.health,{amount:e,source:t});n.health=s,n.lastHitAt=i;let o=!1;for(const l of a)l.type==="absorbed"&&(n.shieldHitAt=i),l.type==="shieldBroken"&&(n.shieldBrokeAt=i),l.type==="damaged"&&(n.flashUntil=i+YM,n.flinch=Math.min(1,n.flinch+(r?.9:.55))),l.type==="died"&&(o=!0,n.diedAt=i,n.respawnAt=i+ei,n.revivedAt=null,n.etherClock=0,n.rig.setGlowLit(!1,u=>u[0]==="ghost"));return{events:a,killed:o}}function Qf(n,e){n.health=Nh(n.unit),n.diedAt=null,n.respawnAt=null,n.revivedAt=e,n.flinch=0,n.lastHitAt=-1/0,n.rig.setGlowLit(!0)}const ra=new U,rS=new U;function sS(n,e,t,i,r){const s=Yi(n).p,a=Math.hypot(s.x,s.z),o=Math.atan2(s.z,s.x)+e*i+t;return r.set(Math.cos(o)*a,s.y+Math.sin(e*2.2+t)*.05,Math.sin(o)*a),Math.PI/2-o}function oS(n,e,t,i={}){var h,_;const{unit:r,rig:s,bones:a,root:o}=n;s.reset();let l=n.health.dead,u=l?t-n.diedAt:0,c=0,f=0,d=!0;if(l&&r.ghost?u<ia?c=Ti(u/ia):u<ei?c=1:u<ei+Wl?c=1-Ti((u-ei)/Wl):Qf(n,n.diedAt+ei+Wl):l&&(u<ia?c=Ti(u/ia):u<Gl?c=1:u<Gl+Kf?(c=1,f=Ti((u-Gl)/Kf)):u<ei?(c=1,f=1,d=!1):u<ei+Vl?f=1-Ti((u-ei)/Vl):Qf(n,n.diedAt+ei+Vl)),l=n.health.dead,(!l||!r.ghost&&u>=ei)&&((h=r.idle)==null||h.call(r,t,a,n)),n.flinch*=Math.exp(-9*e),!l&&n.flinch>.001&&((_=ql[r.body])==null||_.call(ql,a,n.flinch)),c>0&&ZM[r.body](a,c),r.ghost&&a.ghost){const v=a.ghost,m=sS(v,t,n.phase,r.ghost.speed,ra);let p=0;l?p=Ti((u-XM)/jf):n.revivedAt!==null&&(p=1-Ti((t-n.revivedAt)/jf));const[S,x,E]=r.ghost.hover;v.position.set(Li(ra.x,S,p),Li(ra.y,x+Math.sin(t*2.4+n.phase)*.04,p),Li(ra.z,E,p)),v.rotation.y=Li(m,0,p),v.rotation.x=.55*p}if(n.column){const v=ei-Zf;let m=0;l&&u>=v?m=Ti((u-v)/Zf):!l&&n.revivedAt!==null&&(m=1-Ti((t-n.revivedAt)/qM)),n.column.visible=m>.001,n.column.material.opacity=.5*m,n.column.scale.set(1.3-.3*m,eS*Math.max(m,.001),1.3-.3*m)}if(r.shield&&!l){const v=n.health;t-n.lastHitAt>=r.shield.regenDelay&&v.shield<v.shieldMax&&(n.health=nc(v,{shield:v.shieldMax/r.shield.regenSeconds*e,source:"regen"}).state)}if(n.shell){const v=n.shell,m=t-n.shieldBrokeAt;if(!l&&n.health.shield>0){const p=t-n.shieldHitAt<.1?2.2:1,S=.35+.65*Vc(n.health);v.group.visible=!0,v.group.scale.copy(v.scale),v.fillMat.opacity=v.base*S*p}else if(m>=0&&m<.3){const p=m/.3;v.group.visible=!0,v.group.scale.copy(v.scale).multiplyScalar(1+.35*p),v.fillMat.opacity=v.base*2.5*(1-p)}else v.group.visible=!1}if(n.aura&&(n.aura.group.visible=!l,n.aura.fillMat.opacity=n.aura.base*(.8+.2*Math.sin(t*2+n.phase))),!l&&i.face&&r.faces!==!1){const m=((Math.atan2(i.face.x-o.position.x,i.face.z-o.position.z)-o.rotation.y+Math.PI)%Xl+Xl)%Xl-Math.PI,p=n.turn*e;o.rotation.y+=Math.max(-p,Math.min(p,m))}if(o.position.y=-f*(n.top+.15),o.visible=d,s.solid.material.emissiveIntensity=t<n.flashUntil?jM:0,o.updateMatrixWorld(!0),l&&r.ether&&u<$M&&a.head)for(n.etherClock-=e;n.etherClock<=0;)lS(n.scene,a.head.getWorldPosition(rS)),n.etherClock+=KM}const kh=48,_a=1.1;let $i=null;function aS(n){if(($i==null?void 0:$i.scene)===n)return $i;const e=new gn(1,1,1),t=new xn({color:15791864,transparent:!0,opacity:.5,depthWrite:!1}),i=Array.from({length:kh},()=>{const r=new Et(e,t);return r.visible=!1,n.add(r),{mesh:r,age:_a,vel:new U,spin:0}});return $i={scene:n,items:i,next:0},$i}function lS(n,e){if(!n)return;const t=aS(n),i=t.items[t.next];t.next=(t.next+1)%kh,i.age=0,i.mesh.position.copy(e),i.vel.set((Math.random()-.5)*.5,.7+Math.random()*.4,(Math.random()-.5)*.5),i.spin=(Math.random()-.5)*3,i.mesh.visible=!0}function cS(n){if($i)for(const e of $i.items){if(e.age>=_a)continue;if(e.age+=n,e.age>=_a){e.mesh.visible=!1;continue}const t=e.age/_a;e.mesh.position.addScaledVector(e.vel,n),e.vel.multiplyScalar(Math.exp(-1.2*n)),e.mesh.rotation.y+=e.spin*n,e.mesh.scale.setScalar((.07+.2*t)*(t<.7?1:1-(t-.7)/.3))}}const uS=Object.freeze(["now","enter","interact","flag","scan","land","talk"]),fS=Object.freeze(["now","flag"]),dS=Object.freeze(["now"]);function hS({host:n=null,say:e=null,onBeat:t=null,onCheckpoint:i=null,knows:r=null,triggers:s=uS,levelKinds:a=fS,subjectless:o=dS}={}){if(!n)throw new Error("makeEpisode: no host API");const l=[...s],u=new Set(o);let c=null,f=-1,d=!1,h=[],_=new Set;const v=y=>{var A;return r?!!r(y):!!((A=n.knows)!=null&&A.call(n,y))},m=new Map;if(Array.isArray(a))for(const y of a)m.set(y,u.has(y)?()=>!0:A=>v(A));else for(const[y,A]of Object.entries(a??{}))m.set(y,A);function p(y){var D;const A=[],L=new Set,g=[],M=[];for(const F of y.acts??[]){F.id||g.push("an act has no id");for(const k of F.scenes??[]){k.id||g.push(`act ${F.id}: a scene has no id`),M.push({act:F.id,id:k.id,title:k.title??k.id});let N=!0;for(const X of k.beats??[]){if(!X.id){g.push(`${F.id}/${k.id}: a beat has no id`);continue}L.has(X.id)&&g.push(`beat id '${X.id}' is used twice`),L.add(X.id),l.includes(X.trigger)||g.push(`beat '${X.id}': trigger '${X.trigger}' is not one of ${l.join(" | ")}`),!u.has(X.trigger)&&!X.at&&g.push(`beat '${X.id}': a '${X.trigger}' trigger needs an 'at' to name its subject`),N&&X.optional&&g.push(`beat '${X.id}' opens scene '${k.id}' and is marked optional — a scene's first beat is where its checkpoint is taken, so it must be arrived at`),X.talk&&((D=n.talk)!=null&&D.has)&&!n.talk.has(X.talk)&&g.push(`beat '${X.id}': conversation '${X.talk}' is not loaded`),A.push({...X,act:F.id,scene:k.id,sceneTitle:k.title??k.id,actTitle:F.title??F.id,opensScene:N}),N=!1}}}A.length||g.push("an episode with no beats");const P=new Set(y.teaches??[]);for(const F of A)for(const k of F.grants??[])P.add(k);for(const F of A)for(const k of F.needs??[])P.has(k)||g.push(`beat '${F.id}' needs '${k}', which nothing in this episode grants — list it in the episode's \`teaches\` if a conversation or a reading provides it`);if(g.length)throw new Error(`episode.load('${y.id}'): ${g.length} problem(s) — ${g.join("; ")}`);return{beats:A,scenes:M}}function S(){const y=b.beat;!y||!y.opensScene||_.has(y.scene)||(_.add(y.scene),i==null||i(y))}function x(y){var A,L,g;h.push(y.id),y.say&&(e==null||e(y.say));for(const M of y.grants??[])(A=n.learn)==null||A.call(n,M);y.talk&&((g=(L=n.talk)==null?void 0:L.open)==null||g.call(L,y.talk)),t==null||t(y)}function E(){if(!(d||!c)){d=!0;try{let y=0;S();const A=L=>{const g=m.get(L.trigger);return!!g&&!!g(L.at)};for(;f>=0&&f<c.beats.length&&A(c.beats[f]);){const L=c.beats[f];if((L.needs??[]).some(g=>!v(g))||(x(L),f+=1,S(),++y>c.beats.length+1))break}}finally{d=!1}}}function R(y,A){if(!c)return-1;for(let L=f;L>=0&&L<c.beats.length;L++){const g=c.beats[L];if(g.trigger===y&&g.at===A)return L;if(!g.optional)return-1}return-1}const b={get id(){return(c==null?void 0:c.id)??null},get title(){return(c==null?void 0:c.title)??null},get begun(){return f>=0},get over(){return!!c&&f>=c.beats.length},get beat(){return c&&f>=0&&f<c.beats.length?c.beats[f]:null},get act(){var y;return((y=b.beat)==null?void 0:y.actTitle)??null},get scene(){var y;return((y=b.beat)==null?void 0:y.sceneTitle)??null},get objective(){const y=b.beat;if(!y)return null;if(y.objective)return y.objective;if(!y.optional)return null;for(let A=f+1;A<c.beats.length;A++)if(!c.beats[A].optional)return c.beats[A].objective??null;return null},get note(){var y;return((y=b.beat)==null?void 0:y.note)??null},get done(){return[...h]},get beats(){return c?c.beats.map(y=>y.id):[]},load(y){if(!(y!=null&&y.id)||!y.acts)throw new Error("episode.load: needs { id, acts }");const{beats:A,scenes:L}=p(y);return c={id:y.id,title:y.title??y.id,acts:y.acts,beats:A,scenes:L},f=-1,h=[],_=new Set,b},begin(){return!c||f>=0?!1:(f=0,E(),!0)},fire(y,A){const L=R(y,A);if(L<0)return null;const g=c.beats[L],M=(g.needs??[]).filter(P=>!v(P));if(M.length){const P=g.refuse;return(typeof P=="function"?P(M):P)??"Not yet. There is a piece of this missing."}return f=L,S(),x(g),f+=1,E(),null},wants(y,A){return R(y,A)>=0},save(){var y;return{id:(c==null?void 0:c.id)??null,at:((y=b.beat)==null?void 0:y.id)??null,done:[...h]}},restore(y){if(!c||!y||y.id&&y.id!==c.id)return b;const A=c.beats.findIndex(L=>L.id===y.at);return A<0||(f=A,h=[...y.done??[]],_=new Set(c.beats.slice(0,A+1).map(L=>L.scene))),b}};return b}const ed=90,mr=1e-4;class pS{constructor(e,t){this.ctx=e,this.rng=t,this.cache=new Map}get(e="white"){if(this.cache.has(e))return this.cache.get(e);const t=Math.floor(this.ctx.sampleRate*2),i=this.ctx.createBuffer(1,t,this.ctx.sampleRate),r=i.getChannelData(0),s=this.rng;if(e==="brown"){let a=0;for(let o=0;o<t;o++){const l=s.float()*2-1;a=(a+.02*l)/1.02,r[o]=a*3.5}}else if(e==="pink"){let a=0,o=0,l=0,u=0,c=0,f=0,d=0;for(let h=0;h<t;h++){const _=s.float()*2-1;a=.99886*a+_*.0555179,o=.99332*o+_*.0750759,l=.969*l+_*.153852,u=.8665*u+_*.3104856,c=.55*c+_*.5329522,f=-.7616*f-_*.016898,r[h]=(a+o+l+u+c+f+d+_*.5362)*.11,d=_*.115926}}else for(let a=0;a<t;a++)r[a]=s.float()*2-1;return this.cache.set(e,i),i}}function mS(n,e,t,i,r,s){const a=!!s.loop,o=r+(t.at||0),l=a?1/0:Math.max(.02,t.dur??.2),u=(t.peak??1)*(s.gain??1);if(u<=0)return null;const c=Math.max(.001,t.a??.005),f=Math.max(0,t.d??0),d=t.s??1,h=Math.max(.005,t.r??.05),_=n.createGain();_.gain.value=mr,_.connect(i);let v,m=null;const p=s.rate??1;if(t.src==="noise")v=n.createBufferSource(),v.buffer=e.get(t.noise||"white"),v.loop=!0,v.loopStart=0,v.playbackRate.value=p;else{v=n.createOscillator(),v.type=t.wave||"sine";const L=t.jitter||0,g=L?1+(s.jitterRoll??0)*L:1,M=Math.max(8,(t.freq??440)*g*p);if(m=v.frequency,m.setValueAtTime(M,o),t.to!=null&&!a){const P=Math.max(8,t.to*g*p),D=o+l;t.glide==="lin"?m.linearRampToValueAtTime(P,D):m.exponentialRampToValueAtTime(P,D)}}let S=v,x=null;if(t.filter){const L=n.createBiquadFilter();L.type=t.filter.type||"lowpass",L.Q.value=t.filter.q??1;const g=Math.max(20,t.filter.freq??1e3);L.frequency.setValueAtTime(g,o),t.filter.to!=null&&!a&&L.frequency.exponentialRampToValueAtTime(Math.max(20,t.filter.to),o+l),x=L.frequency,S.connect(L),S=L}let E=null,R=null;if(t.lfo&&t.lfo.rate>0){E=n.createOscillator(),E.type="sine",E.frequency.value=t.lfo.rate;const L=n.createGain();if(t.lfo.target==="gain"){const g=Math.min(1,Math.max(0,t.lfo.depth??.5));R=n.createGain(),R.gain.value=1-g*.5,L.gain.value=g*.5,E.connect(L),L.connect(R.gain),S.connect(R),S=R}else t.lfo.target==="filter"&&x?(L.gain.value=t.lfo.depth??200,E.connect(L),L.connect(x)):m&&(L.gain.value=t.lfo.depth??20,E.connect(L),L.connect(m));E.start(o)}S.connect(_);const b=_.gain;b.setValueAtTime(mr,o),b.linearRampToValueAtTime(u,o+c);const y=Math.max(mr,u*d);f>0&&b.linearRampToValueAtTime(y,o+c+f);let A=1/0;if(a)v.start(o,t.src==="noise"?s.noiseOffset??0:void 0);else{const L=Math.max(o+c+f,o+l-h);b.setValueAtTime(Math.max(mr,f>0?y:u),L),b.linearRampToValueAtTime(mr,o+l),A=o+l+.02,v.start(o,t.src==="noise"?s.noiseOffset??0:void 0),v.stop(A),E&&E.stop(A)}return{endsAt:A,stop(L){const g=Math.max(L,n.currentTime);try{b.cancelScheduledValues(g),b.setValueAtTime(Math.max(mr,b.value),g),b.linearRampToValueAtTime(mr,g+h),v.stop(g+h+.02),E&&E.stop(g+h+.02)}catch{}}}}function td(n,e,t,i,r={}){const s=Math.max(r.when??n.currentTime,n.currentTime),a=!!t.loop,o=[];let l=s;for(const u of t.layers||[]){const c=mS(n,e,u,i,s,{...r,loop:a});c&&(o.push(c),c.endsAt>l&&c.endsAt!==1/0&&(l=c.endsAt))}return{endsAt:a?1/0:l,stop(u=n.currentTime){for(const c of o)c.stop(u)}}}const Ta=1e-4,nd=(n,e)=>n==null||e==null?1:2**((n-e)/12);function Kc(n){var r;const e=60/n.bpm,t=(((r=n.intro)==null?void 0:r.bars)??0)*n.beatsPerBar,i=n.loop.bars*n.beatsPerBar;return{beat:e,intro:t,loop:i,introSeconds:t*e,loopSeconds:i*e}}function gS(n,e){return{...n,loop:!1,layers:n.layers.map(t=>({...t,dur:Math.max(.02,e)+(t.r??.05)}))}}function _S(n,e){if(!e)return n;const t=new Map;for(const i of n){if(e[i.voice]==null||i.midi==null)continue;const r=`${i.voice}@${i.beat}`;t.has(r)||t.set(r,[]),t.get(r).push(i)}for(const i of t.values()){i.sort((s,a)=>s.midi-a.midi);const r=e[i[0].voice];for(let s=0;s<i.length;s++)i[s].pan=i.length<2?0:Number((-r+2*r*s/(i.length-1)).toFixed(3))}return n}function vS(n,e,t){var o;const i=Kc(n),r=n.beatsPerBar,s=[],a=(l,[u,c,f,d,h,_],v)=>s.push({beat:l+u*r+c,voice:f,midi:d,beats:h,gain:_,pass:t,...v});if(t<0)for(const l of((o=n.intro)==null?void 0:o.events)??[])a(0,l);else{const l=i.intro+t*i.loop;for(const c of n.loop.events)a(l,c);const u=new Ds(`${e}:pass${t}`);for(const c of n.loop.vary??[])if(c.scatter){const[f,d]=c.scatter,h=[];for(let v=f*r;v<d*r-1e-9;v+=c.step)h.push(v);const _=u.int(c.count[0],c.count[1]);for(const v of u.pickMany(h,_)){const m=u.pick(c.pick),p=u.range(c.gain[0],c.gain[1]);s.push({beat:l+v,voice:c.voice,midi:m,beats:c.beats,gain:p,pass:t,vary:!0})}}else u.chance(c.p)&&a(l,[c.at[0],c.at[1],c.voice,c.midi,c.beats,c.gain],{vary:!0})}return _S(s,n.spread).sort((l,u)=>l.beat-u.beat)}function xS({score:n,seed:e,now:t,play:i,ahead:r=2.4,late:s=.25}){const a=Kc(n);let o=null,l=0,u=!1,c=0,f=0;const d=new Map,h=v=>v<a.intro?-1:Math.floor((v-a.intro)/a.loop),_=v=>(d.has(v)||d.set(v,vS(n,e,v)),d.get(v));return{start(v){if(o!==null)return!1;o=v,l=v;for(const m of n.beds??[])i({...m,bed:!0,beat:0,pass:-1},v);return!0},pump(){var E;if(o===null||u)return 0;const v=t(),m=v+r;if(m<=l)return 0;const p=h((l-o)/a.beat),S=h((m-o)/a.beat);let x=0;for(let R=p;R<=S;R++)if(!(R<0&&!(((E=n.intro)==null?void 0:E.bars)>0)))for(const b of _(R)){const y=o+b.beat*a.beat;if(!(y<l||y>=m)){if(y<v-s){f++;continue}i(b,y),c++,x++}}for(const R of d.keys())R<p&&d.delete(R);return l=m,x},stop(){u=!0},state(){return{started:o!==null,t0:o,horizon:l,played:c,skipped:f,stopped:u,memo:d.size}}}}function MS(n,{seconds:e=2.6,rt60:t=2.4,preDelay:i=.02,seed:r="room"}={}){const s=n.sampleRate,a=Math.max(1,Math.round(e*s)),o=n.createBuffer(2,a,s),l=Math.round(i*s),u=Math.round(.005*s),c=Math.round(.05*s);for(let f=0;f<2;f++){const d=new Ds(`${r}:ir${f}`),h=o.getChannelData(f);let _=0;for(let v=l;v<a;v++){const m=(v-l)/s,p=9e3*(1500/9e3)**(m/e);_+=(1-Math.exp(-2*Math.PI*p/s))*(d.float()*2-1-_);const S=Math.min(1,(v-l)/u,(a-1-v)/c);h[v]=_*10**(-3*m/t)*S}}return o}function SS(n,{seconds:e=12,seed:t="bed"}={}){const i=Math.max(1,Math.round(e*n.sampleRate)),r=n.createBuffer(1,i,n.sampleRate),s=r.getChannelData(0),a=new Ds(t);for(let o=0;o<i;o++)s[o]=a.float()*2-1;return r}function yS(n,e,t,i){n.cancelScheduledValues(t),n.setValueAtTime(Math.max(Ta,n.value),t),n.linearRampToValueAtTime(Math.max(Ta,e),t+Math.max(.005,i))}function bS({ctx:n,score:e,voices:t,seed:i=e.seed??"music",mix:r={},ahead:s,late:a}){const o=Kc(e),l=new pS(n,new Ds(`${i}:noise`)),u=n.createDynamicsCompressor();u.threshold.value=-6,u.knee.value=0,u.ratio.value=20,u.attack.value=.003,u.release.value=.25;const c=n.createGain();c.gain.value=10**(-3.42/20),u.connect(c),c.connect(n.destination);const f=n.createGain();f.gain.value=r.level??1,f.connect(u);const d=n.createGain();d.gain.value=Ta,d.connect(f);const h=r.reverb??{};if(h.send>0){const b=n.createGain();b.gain.value=h.send,b.channelCount=1,b.channelCountMode="explicit";const y=n.createConvolver();y.buffer=MS(n,{seconds:h.seconds,rt60:h.rt60,preDelay:h.preDelay,seed:`${i}:room`});const A=n.createGain();A.gain.value=h.wet??1,d.connect(b),b.connect(y),y.connect(A),A.connect(f)}const _=n.createGain();_.gain.value=1,_.connect(u);const v=new Map,m=b=>{const y=Math.max(-1,Math.min(1,b||0));if(!y)return d;const A=y.toFixed(3);if(!v.has(A)){let L=d;try{const g=n.createStereoPanner();g.pan.value=y;const M=n.createGain();M.gain.value=Math.SQRT2,g.connect(M),M.connect(d),L=g}catch{L=d}v.set(A,L)}return v.get(A)},p=new Map,S=b=>{if(!b.bed||!b.noiseSeconds)return l;const y=`${b.voice}:${b.noiseSeconds}:${b.rate??1}`;if(!p.has(y)){const A=SS(n,{seconds:b.noiseSeconds,seed:`${i}:bed:${y}`});p.set(y,{get:(L="white")=>L==="white"?A:l.get(L)})}return p.get(y)},x=[],R=xS({score:e,seed:i,now:()=>n.currentTime,play:(b,y)=>{const A=t[b.voice];if(!A)return;const L=b.bed?b.rate??1:nd(b.midi,A.ref),g=!b.bed&&A.held?gS(A,b.beats*o.beat):A,M=td(n,S(b),g,m(b.pan??A.pan??0),{when:y,rate:L,gain:b.gain??1,noiseOffset:b.offset??0});b.bed&&x.push(M)},ahead:s,late:a});return{ctx:n,start(b=n.currentTime,y=r.fadeIn??4){return R.start(b)?(d.gain.cancelScheduledValues(b),d.gain.setValueAtTime(Ta,b),d.gain.linearRampToValueAtTime(1,b+Math.max(.005,y)),R.pump(),!0):!1},pump:()=>R.pump(),fade(b,y){yS(d.gain,b,n.currentTime,y)},halt(b=n.currentTime){R.stop();for(const y of x.splice(0))y.stop(b)},sting(b,{gain:y=1,midi:A=null}={}){return td(n,l,b,_,{when:n.currentTime,rate:nd(A,b.ref),gain:y})},get level(){return d.gain.value},state:()=>R.state()}}function ES({AudioContext:n=null,storage:e=null,key:t=null,doc:i=null,score:r,voices:s,sting:a=null,mix:o={},lead:l=.1}={}){if(e&&typeof t!="string")throw new TypeError("makeMusicDeck: a storage needs its own prefixed key");const u=typeof n=="function";let c=null,f=null,d=R(),h=!1,_=!1,v=!1,m=!1,p=!1,S=!1,x=null;const E=[];function R(){var k;try{return((k=e==null?void 0:e.getItem)==null?void 0:k.call(e,t))!=="off"}catch{return!0}}function b(k){var N;try{(N=e==null?void 0:e.setItem)==null||N.call(e,t,k?"on":"off")}catch{}}function y(){if(c||!u||_)return c;try{c=new n,f=bS({ctx:c,score:r,voices:s,mix:o})}catch{c=null,f=null}return c&&!S&&(i!=null&&i.addEventListener)&&(S=!0,i.addEventListener("visibilitychange",D)),c}const A=()=>(c==null?void 0:c.state)==="running";function L(k,N){try{const X=c.createConstantSource(),V=c.createGain();V.gain.value=0,X.connect(V),V.connect(c.destination),X.onended=()=>{try{X.disconnect(),V.disconnect()}catch{}N()},X.start(),X.stop(c.currentTime+k)}catch{N()}}function g(k){var N,X;E.push(k);try{const V=(N=c==null?void 0:c.suspend)==null?void 0:N.call(c);(X=V==null?void 0:V.catch)==null||X.call(V,()=>{})}catch{}}function M(k){var N,X,V;E.push(k),x=(f==null?void 0:f.state())??x;try{(N=i==null?void 0:i.removeEventListener)==null||N.call(i,"visibilitychange",D)}catch{}try{const ce=(X=c==null?void 0:c.close)==null?void 0:X.call(c);(V=ce==null?void 0:ce.catch)==null||V.call(ce,()=>{})}catch{}c=null,f=null}function P(){var k;try{return Promise.resolve((k=c==null?void 0:c.resume)==null?void 0:k.call(c)).then(()=>A(),()=>!1)}catch{return Promise.resolve(!1)}}function D(){if(!(!c||_)){if(i.hidden)A()&&(m=!0,g("hidden"));else if(m){if(m=!1,!d)return;P().then(k=>{k&&p&&!_&&F.play()})}}}const F={get available(){return u},probe(){return!u||!d?"none":(y(),c?c.state:"none")},unlock(){return!u||_||!y()?Promise.resolve(!1):P()},play(){return!f||!d||h||_||!A()?!1:i!=null&&i.hidden?(m=!0,p=!0,g("hidden"),!1):(p=!1,h=f.start(c.currentTime+l,o.fadeIn),h)},pump(){h&&!m&&!_&&f.pump()},toggle(){if(d=!d,b(d),d){if(!y())return d;P().then(k=>{!k||!d||_||(h?f.fade(1,o.mute??.3):F.play())})}else A()&&(f.fade(0,o.mute??.3),L((o.mute??.3)+.05,()=>{d||g("muted")}));return d},silence(){d=!1},carry(k=!0){v=!!k},end(){return!c||_?!1:(A()&&d&&a&&f.sting(a),v&&h?!0:F.stop(o.fadeOut??2.5))},stop(k=1.5){return!c||_?!1:(_=!0,A()?(f.fade(0,k),L(k+.1,()=>{f==null||f.halt(),M("ended")}),!0):(f==null||f.halt(),M("stopped"),!0))},state(){return{available:u,context:(c==null?void 0:c.state)??"none",wanted:d,playing:h,ended:_,carry:v,hidden:m,waiting:p,suspends:[...E],sequencer:(f==null?void 0:f.state())??x}}};return F}const lc=[2,4,5,7,9,10,0],wS=[...lc,3],TS=[2,4,6,7,9,11,1],AS=Object.freeze({name:"Cold Iron",seed:"cold-iron",bpm:50,beatsPerBar:4,beds:[{voice:"wind",rate:1,gain:1},{voice:"wind",rate:.917,gain:.8,offset:.7},{voice:"drone",rate:1,gain:1}],intro:{bars:1,events:[[0,2,"toll",50,0,.8]]},loop:{bars:16,events:[[0,0,"pad",53,8,1],[0,0,"pad",57,8,1],[0,0,"pad",64,8,.8],[0,0,"toll",50,0,1],[2,0,"pad",53,8,1],[2,0,"pad",58,8,1],[2,0,"pad",62,8,.85],[4,0,"padDark",55,8,1],[4,0,"padDark",58,8,1],[4,0,"padDark",63,8,.85],[6,0,"pad",53,8,1],[6,0,"pad",57,8,1],[6,0,"pad",62,8,.85],[8,0,"pad",52,8,1],[8,0,"pad",55,8,1],[8,0,"pad",60,8,.9],[8,0,"toll",45,0,.9],[8,0,"voice",64,16,.9],[9,0,"horn",62,2,.9],[9,2,"horn",69,2,1],[10,0,"horn",67,1,.85],[10,1,"horn",69,3,.95],[10,0,"pad",60,8,.95],[10,0,"pad",64,8,.95],[10,0,"pad",69,8,.8],[12,0,"pad",54,8,1],[12,0,"pad",57,8,1],[12,0,"pad",62,8,.9],[12,0,"pad",64,8,.7],[12,0,"thud",null,0,1],[12,0,"toll",50,0,1],[12,0,"voice",66,8,.9],[12,0,"horn",69,2,1],[12,2,"horn",66,2,.95],[13,0,"horn",64,1,.85],[13,1,"horn",62,3,.95],[14,0,"pad",50,6,.7],[14,0,"pad",57,6,.7]],vary:[{p:.5,at:[6,2],voice:"toll",midi:57,beats:0,gain:.5},{scatter:[0,4],step:.5,count:[0,1],voice:"spark",pick:[74,77,79,81,84,86],beats:0,gain:[.5,.8]},{scatter:[6,12],step:.5,count:[0,2],voice:"spark",pick:[74,77,79,81,84,86],beats:0,gain:[.5,.8]},{scatter:[12,16],step:.5,count:[3,6],voice:"spark",pick:[74,76,78,81,83,86,88,90],beats:0,gain:[.6,1]}]},sections:[{bars:[0,4],pcs:lc},{bars:[4,6],pcs:wS},{bars:[6,12],pcs:lc},{bars:[12,16],pcs:TS}]}),RS=Object.freeze({wind:{loop:!0,layers:[{src:"noise",noise:"white",filter:{type:"bandpass",freq:520,q:.8},lfo:{rate:.05,target:"filter",depth:220},a:4,r:3,peak:.05}]},drone:{loop:!0,ref:38,layers:[{wave:"sawtooth",freq:73.42,filter:{type:"lowpass",freq:380,q:.7},lfo:{rate:.07,target:"filter",depth:90},a:5,r:4,peak:.1},{wave:"sawtooth",freq:73.64,filter:{type:"lowpass",freq:380,q:.7},lfo:{rate:.05,target:"filter",depth:70},a:5,r:4,peak:.08},{wave:"triangle",freq:110,filter:{type:"lowpass",freq:600},a:6,r:4,peak:.05}]},pad:{held:!0,ref:57,layers:[{wave:"sawtooth",freq:220,filter:{type:"lowpass",freq:900,q:.6},lfo:{rate:.11,target:"filter",depth:180},a:2.4,s:1,r:2.8,peak:.035},{wave:"triangle",freq:220.77,filter:{type:"lowpass",freq:1400},a:2.8,r:3,peak:.03}]},padDark:{held:!0,ref:57,layers:[{wave:"sawtooth",freq:220,filter:{type:"lowpass",freq:560,q:.6},lfo:{rate:.09,target:"filter",depth:120},a:2.4,s:1,r:2.8,peak:.038},{wave:"triangle",freq:220.77,filter:{type:"lowpass",freq:900},a:2.8,r:3,peak:.03}]},voice:{held:!0,ref:69,layers:[{wave:"sawtooth",freq:440,filter:{type:"bandpass",freq:730,q:5},lfo:{rate:4.6,target:"freq",depth:3.5},a:1.8,r:2.4,peak:.05},{wave:"sawtooth",freq:440,filter:{type:"bandpass",freq:1090,q:7},lfo:{rate:4.6,target:"freq",depth:3.5},a:1.8,r:2.4,peak:.03},{wave:"sawtooth",freq:440,filter:{type:"bandpass",freq:2440,q:9},lfo:{rate:4.6,target:"freq",depth:3.5},a:1.8,r:2.4,peak:.012}]},horn:{held:!0,ref:62,layers:[{wave:"sawtooth",freq:293.66,filter:{type:"lowpass",freq:350,to:1500,q:1.2},a:.35,d:.6,s:.75,r:.9,peak:.06},{wave:"sawtooth",freq:294.83,filter:{type:"lowpass",freq:300,to:1300},a:.4,r:.9,peak:.045},{wave:"triangle",freq:146.83,filter:{type:"lowpass",freq:500},a:.5,r:1,peak:.03}]},toll:{ref:50,layers:[{wave:"sine",freq:73.42,a:.003,d:2.45,s:.35,r:4.2,dur:7,peak:.05},{wave:"sine",freq:146.83,a:.003,d:2.1,s:.35,r:3.6,dur:6,peak:.06},{wave:"sine",freq:174.73,a:.003,d:1.575,s:.35,r:2.7,dur:4.5,peak:.035},{wave:"sine",freq:220.25,a:.003,d:1.225,s:.35,r:2.1,dur:3.5,peak:.025},{wave:"sine",freq:293.66,a:.003,d:1.05,s:.35,r:1.8,dur:3,peak:.03},{wave:"sine",freq:405.25,a:.003,d:.63,s:.35,r:1.08,dur:1.8,peak:.015},{wave:"sine",freq:792.9,a:.003,d:.315,s:.35,r:.54,dur:.9,peak:.01},{src:"noise",noise:"white",filter:{type:"bandpass",freq:2400,q:1.5},a:.002,r:.03,dur:.04,peak:.05}]},spark:{ref:81,layers:[{wave:"sine",freq:880,a:.004,d:.25,s:.2,r:.6,dur:1.1,peak:.02},{wave:"sine",freq:2648.8,a:.004,r:.25,dur:.3,peak:.006}]},thud:{layers:[{wave:"sine",freq:62,to:40,a:.005,d:.4,s:.3,r:.9,dur:1.6,peak:.18},{wave:"sine",freq:124,to:80,a:.005,r:.3,dur:.5,peak:.05},{src:"noise",noise:"white",filter:{type:"lowpass",freq:240},a:.002,r:.08,dur:.12,peak:.08}]}}),LS=Object.freeze({ref:55,layers:[{wave:"sine",freq:196,a:.002,d:.6,s:.35,r:1.1,dur:1.8,peak:.12},{wave:"sine",freq:540.96,a:.002,d:.3,s:.3,r:.55,dur:.9,peak:.05},{wave:"sine",freq:1058.4,a:.002,d:.1,s:.3,r:.2,dur:.35,peak:.025},{src:"noise",noise:"white",filter:{type:"bandpass",freq:300,to:2600,q:.9},a:.25,r:.4,dur:.8,peak:.05}]}),CS=Object.freeze({level:1,fadeIn:4,fadeOut:2.5,mute:.3,reverb:{seconds:2.6,rt60:2.4,preDelay:.02,send:.3,wet:1}}),PS=Object.freeze({titanPlate:"M26 12 L74 12 L82 20 L82 46 L18 46 L18 20 Z M12 54 L88 54 L88 78 L78 88 L22 88 L12 78 Z M26 24 L33 24 L33 31 L26 31 Z M67 24 L74 24 L74 31 L67 31 Z M22 70 L29 70 L29 77 L22 77 Z M71 70 L78 70 L78 77 L71 77 Z",hunterCloak:"M42 6 L58 6 L66 16 L68 32 L84 40 L90 92 L78 84 L68 94 L58 86 L50 94 L42 86 L32 94 L22 84 L10 92 L16 40 L32 32 L34 16 Z M48 40 L52 40 L52 82 L48 82 Z M50 31 L54 35 L50 39 L46 35 Z",warlockRobe:"M34 8 L46 8 L50 16 L54 8 L66 8 L70 20 L84 28 L92 94 L54 94 L50 80 L46 94 L8 94 L16 28 L30 20 Z M50 28 L52 34 L55.5 36 L52 38 L50 46 L48 38 L44.5 36 L48 34 Z"}),IS=Object.freeze({titanPlate:"M50 6 L55 20.5 L62 24 L55 27.5 L50 42 L45 27.5 L38 24 L45 20.5 Z M14 85 V52 L21 46 H79 L86 52 V85 Z M24 56 H31 V63 H24 Z M69 56 H76 V63 H69 Z M4 88 H96 V94 H4 Z",hunterCloak:"M15.5 85 L21 64.5 L34 52.5 L52.5 52.5 L64.5 61 L69 70 L64 72.5 L79.5 81.5 L82 63.5 L77 66 L71.5 55 L55.5 43.5 L30 43.5 L13 59.5 L6.5 83 Z M43 6 L47 19 L53 22 L47 25 L43 38 L39 25 L33 22 L39 19 Z M4 88 H96 V94 H4 Z",warlockRobe:"M50 22 L54.5 39.5 L60.5 44 L54.5 48.5 L50 66 L45.5 48.5 L39.5 44 L45.5 39.5 Z M91 77 L81 83.5 L72.5 80 L80 76.5 Z M77 85 L52.5 87.5 L52 82 L70 80.5 Z M47.5 87.5 L23 85 L30 80.5 L48 82 Z M19 83.5 L9 77 L20 76.5 L27.5 80 Z M9 75 L19 68.5 L27.5 72 L20 75.5 Z M23 67 L47.5 64.5 L48 70 L30 71.5 Z M52.5 64.5 L77 67 L70 71.5 L52 70 Z M81 68.5 L91 75 L80 75.5 L72.5 72 Z"}),Ne=Object.freeze({backdrop:"backdrop",root:"start",over:"start-over",begin:"start-begin",loading:"start-loading",press:"start-press",problem:"start-problem",problemText:"start-problem-text",problemReload:"start-problem-reload",gate:"start-gate",sound:"start-sound",kit:"start-kit",banner0:"start-kit-0",banner1:"start-kit-1",banner2:"start-kit-2",kitMark:"start-kit-mark",kitName:"start-kit-name",kitTraits:"start-kit-traits",kitLine:"start-kit-line",kitIcon:"start-kit-icon",kitBlock:"start-kit-block",kitTurn:"start-kit-turn",kitAbilityName:"start-kit-ability-name",kitAbility:"start-kit-ability",kitBack:"start-kit-back",kitSelect:"start-kit-select",veil:"start-veil"}),cc=Object.freeze(["title","kit"]),is=Object.freeze(["titanPlate","hunterCloak","warlockRobe"]),id=1,rd=Object.freeze({secs:.4,reduced:.15}),DS=[["kitName","name"],["kitTraits","traits"],["kitLine","line"],["kitAbilityName","abilityName"],["kitAbility","ability"]],Ys=["banner0","banner1","banner2"],US="range",sd="start-pressed",od=Object.freeze({wait:"st-wait",go:"st-go",still:"st-still"}),NS="pd_music";function kS(){return new URL("/range/assets/OFL-D_b4SXWo.txt",import.meta.url).href}const Yl=n=>n.code==="Enter"||n.code==="NumpadEnter"||!n.code&&n.key==="Enter",sa=n=>n.code==="Space"||!n.code&&n.key===" ",FS=n=>n.key==="Escape"||n.code==="Escape",OS=n=>{const e=/^(?:Digit|Numpad)([123])$/.exec(n.code??"")??(!n.code&&/^[123]$/.exec(n.key??"")?[0,n.key]:null);return e?Number(e[1])-1:-1},BS=n=>{const e=n.code||n.key;return e==="ArrowLeft"?-1:e==="ArrowRight"?1:0},ad=n=>(n.code==="KeyM"||!n.code&&(n.key==="m"||n.key==="M"))&&!n.ctrlKey&&!n.metaKey&&!n.altKey,zS=["Shift","Control","Alt","Meta","CapsLock","Fn","AltGraph"],HS=.5;function GS(n){try{return(n==null?void 0:n.AudioContext)??(n==null?void 0:n.webkitAudioContext)??null}catch{return null}}function VS(n){try{return(n==null?void 0:n.localStorage)??null}catch{return null}}function WS({doc:n,win:e,search:t="",build:i=XS(),onClose:r=()=>{},onOpen:s=()=>{},audio:a=void 0,storage:o=void 0,screens:l=["title"],input:u=null,onPick:c=()=>{},showroom:f=null,reduced:d=!1}={}){const h=l.includes("kit"),_=()=>typeof u=="function"?u():u,v=()=>typeof f=="function"?f():f;let m=!1,p=!0,S=!1,x=!1,E=!1,R="title",b=null,y=0,A=0,L=0,g=null,M=!1,P=0,D=!1,F=0,k=-1,N=id,X=!1,V=0,ce=!1,de=0,le=0,Se=0,Ie=id,B=null;const K=4;let Z=null,Q=null;const re=I=>{var $;return(($=n==null?void 0:n.getElementById)==null?void 0:$.call(n,I))??null},ve=(I,$)=>{const ne=re(I);ne&&(ne.hidden=!$)},ye=(I,$,ne)=>{var Re;return(Re=I==null?void 0:I.classList)==null?void 0:Re.toggle($,ne)},We=()=>S&&F===0;function $e(I){var $,ne;if(!(!p||X)&&(($=I.stopPropagation)==null||$.call(I),!I.isComposing)){if(M){O(I);return}if(!b){if(R==="kit"){Y(I);return}if(ad(I)){I.repeat||C();return}if(Yl(I)||sa(I)){if((ne=I.preventDefault)==null||ne.call(I),I.repeat)return;I.target&&I.target===re(Ne.sound)?C():j("begin")}}}}function O(I){var ne,Re;if(I.repeat)return;if(I.key==="Escape"||I.code==="Escape"){(ne=I.preventDefault)==null||ne.call(I),tt();return}if(zS.includes(I.key))return;const $=Yl(I)||sa(I);$&&((Re=I.preventDefault)==null||Re.call(I)),Ot($&&We())}function Ot(I=!1){!M||!p||(P++,I&&(x=!0,k=y),g.unlock().then($=>{!M||!p||(x?Je():$&&ct(!0))}))}function Je(){!x||!S||!p||(x=!1,k=-1,M&&(M=!1,ve(Ne.gate,!1)),j("begin"))}function tt(){g==null||g.silence(),ct(!1)}function ze(){M=!0,ve(Ne.gate,!0),ye(re(Ne.gate),"st-gate-gone",!1)}function ct(I){var ne;if(!M)return;M=!1;const $=re(Ne.gate);ye($,"st-gate-gone",!0),(ne=$==null?void 0:$.setAttribute)==null||ne.call($,"aria-hidden","true"),ke(I)}function ke(I=!0){D||(D=!0,ye(n==null?void 0:n.documentElement,od.go,!0),I&&(g==null||g.play()),w())}function C(){!g||M||b||(g.toggle(),w())}function w(){var ne;const I=re(Ne.sound);if(!I)return;const $=!!(g!=null&&g.state().wanted);(ne=I.setAttribute)==null||ne.call(I,"aria-pressed",$?"true":"false"),ye(I,"st-sound-off",!$)}function Y(I){var Re,qe,De;if(ad(I)){I.repeat||C();return}if(FS(I)){(Re=I.preventDefault)==null||Re.call(I),I.repeat||ae();return}const $=OS(I);if($>=0){I.repeat||me($,!0);return}const ne=BS(I);if(ne){(qe=I.preventDefault)==null||qe.call(I),me(Math.max(0,Math.min(is.length-1,N+ne)),!0);return}if(Yl(I)||sa(I)){if((De=I.preventDefault)==null||De.call(I),I.repeat)return;I.target&&I.target===re(Ne.kitBack)?ae():I.target&&I.target===re(Ne.sound)?C():j("select")}}function ee(I=N){var ne,Re,qe;R="kit",ke(),g==null||g.carry(!0);const $=re(Ne.root);ye($,"st-on-kit",!0),ve(Ne.kit,!0),(Re=(ne=re(Ne.begin))==null?void 0:ne.blur)==null||Re.call(ne),(qe=v())==null||qe.setVisible(!0),me(I,!0)}function ae(){var I,$,ne;B!==null&&Fe({pointerId:B.id}),R="title",ye(re(Ne.root),"st-on-kit",!1),ve(Ne.kit,!1),(I=v())==null||I.setVisible(!1);for(const Re of Ys)(ne=($=re(Ne[Re]))==null?void 0:$.blur)==null||ne.call($)}function te(I){return typeof(I==null?void 0:I.clientX)=="number"&&(Z={x:I.clientX,y:I.clientY}),Z}function Pe(I){const $=typeof(I==null?void 0:I.clientX)=="number"?{x:I.clientX,y:I.clientY}:Z;return!Q||!$?!1:Math.hypot($.x-Q.x,$.y-Q.y)<=K}function pe(I,$){return te($),Pe($)||(Q=null,I===N)?!1:(me(I),!0)}function me(I,$=!1){var qe,De,it,kt,Pt,ln,Bt;if(I<0||I>=is.length)return;$&&(Q=Z);const ne=I!==N;if(N=I,de++,ne&&R==="kit"){Se++;const J=re(Ne.kitBlock);ye(J,"st-from-right",I>Ie),ye(J,"st-from-left",I<Ie),ye(J,"st-slide-a",Se%2===1),ye(J,"st-slide-b",Se%2===0)}Ie=I;const Re=is[I];Ys.forEach((J,ie)=>{var fe;const ue=re(Ne[J]);ye(ue,"st-chosen",ie===I),(fe=ue==null?void 0:ue.setAttribute)==null||fe.call(ue,"aria-pressed",ie===I?"true":"false")});for(const[J,ie]of DS){const ue=re(Ne[J]);ue&&(ue.textContent=ga.kits[Re][ie])}(De=(qe=re(Ne.kitMark))==null?void 0:qe.setAttribute)==null||De.call(qe,"d",PS[Re]),(kt=(it=re(Ne.kitIcon))==null?void 0:it.setAttribute)==null||kt.call(it,"d",IS[Re]),(Pt=v())==null||Pt.swap(Re),$&&((Bt=(ln=re(Ne[Ys[I]]))==null?void 0:ln.focus)==null||Bt.call(ln))}function Ke(I){var $,ne,Re,qe;te(I),!(!(p&&!X&&R==="kit")||B!==null)&&((I==null?void 0:I.button)!==void 0&&I.button!==0||(B={id:I==null?void 0:I.pointerId,x:(I==null?void 0:I.clientX)??0},B.id!==void 0&&((ne=($=re(Ne.kitTurn))==null?void 0:$.setPointerCapture)==null||ne.call($,B.id)),(Re=I==null?void 0:I.preventDefault)==null||Re.call(I),(qe=v())==null||qe.grab()))}const he=I=>B!==null&&((I==null?void 0:I.pointerId)===void 0||B.id===void 0||I.pointerId===B.id);function ge(I){var $;te(I),he(I)&&(($=v())==null||$.drag(((I==null?void 0:I.clientX)??0)-B.x))}function Fe(I){var $,ne,Re;he(I)&&(B.id!==void 0&&((ne=($=re(Ne.kitTurn))==null?void 0:$.releasePointerCapture)==null||ne.call($,B.id)),B=null,(Re=v())==null||Re.drop())}function He(){var $,ne,Re,qe,De,it,kt;(ne=($=_())==null?void 0:$.requestLockFresh)==null||ne.call($);try{c(is[N])}catch{return(qe=(Re=_())==null?void 0:Re.releaseLock)==null||qe.call(Re),E=!1,!1}B!==null&&Fe({pointerId:B.id}),(De=v())==null||De.setVisible(!1),le++,X=!0,V=0,g==null||g.carry(!1),g==null||g.end();const I=re(Ne.root);for(const Pt of[...Ys,"kitBack","kitSelect","sound"])(kt=(it=re(Ne[Pt]))==null?void 0:it.blur)==null||kt.call(it);return I&&(I.inert=!0),ye(I,"st-handing",!0),!0}function Te(){var I;X=!1,se(!1),(I=_())!=null&&I.locked||Ye(!0)}function Ye(I){ce=!!I,ve(Ne.veil,ce),ye(n==null?void 0:n.documentElement,"st-veil-up",ce)}function Ge(I){var $,ne;!p||X||(($=I.stopPropagation)==null||$.call(I),!b&&sa(I)&&((ne=I.preventDefault)==null||ne.call(I)))}function ht(I){var ne;if(!p||S||b)return;const $=`${(I==null?void 0:I.message)??""} ${((ne=I==null?void 0:I.error)==null?void 0:ne.message)??""}`;G(/webgl/i.test($)?"noWebgl":"failed")}function G(I){var ne;b=I,M&&(M=!1,ve(Ne.gate,!1)),ke(!1),ve(Ne.sound,!1),ve(Ne.loading,!1),ve(Ne.press,!1);const $=re(Ne.problemText);$&&($.textContent=ga[I]),ve(Ne.problemReload,I==="failed"),ve(Ne.problem,!0),(ne=re(Ne.begin))==null||ne.setAttribute("aria-disabled","true")}function xe(I){ve(Ne.loading,I),ve(Ne.press,!I)}function j(I){return!p||E||b||M?!1:I==="select"?R!=="kit"?!1:(E=!0,A++,He()):I!=="begin"||R!=="title"?!1:S?(A++,h?(ee(),!0):(E=!0,se(!0),!0)):(x=!0,!1)}function se(I,$=!0){var Re,qe,De,it,kt,Pt,ln;B!==null&&Fe({pointerId:B.id}),p=!1,x=!1,X=!1,(qe=(Re=v())==null?void 0:Re.dispose)==null||qe.call(Re),(De=v())==null||De.setVisible(!1);const ne=re(Ne.root);if(ye(n==null?void 0:n.documentElement,"start-open",!1),(kt=(it=re(Ne.begin))==null?void 0:it.blur)==null||kt.call(it),(ln=(Pt=re(Ne.sound))==null?void 0:Pt.blur)==null||ln.call(Pt),ne&&(ne.inert=!0),M&&(M=!1,ve(Ne.gate,!1)),I?g==null||g.end():g==null||g.stop(.05),I)ye(ne,"st-closing",!0),ne==null||ne.setAttribute("aria-hidden","true"),ye(re(Ne.backdrop),"gone",!0);else{ne&&(ne.hidden=!0);const Bt=re(Ne.backdrop);Bt&&(Bt.hidden=!0)}ye(ne,"st-handing",!1),$&&(L++,r())}return{boot(){var qe,De,it,kt,Pt,ln,Bt,J,ie,ue,fe,Le,Ve,lt,xt,ut,rt,Vt,T,z,q;if(m)return p;m=!0;const I=re(Ne.root);ye(I,"st-booted",!0),ye(n==null?void 0:n.documentElement,"start-open",!0);const $=re(Ne.over);$&&($.textContent=ga.overTitle),(it=(De=(qe=n==null?void 0:n.documentElement)==null?void 0:qe.classList)==null?void 0:De.contains)!=null&&it.call(De,sd)&&(x=!0,ye(n.documentElement,sd,!1)),(kt=e==null?void 0:e.addEventListener)==null||kt.call(e,"error",ht),(Pt=e==null?void 0:e.addEventListener)==null||Pt.call(e,"keydown",$e,!0),(ln=e==null?void 0:e.addEventListener)==null||ln.call(e,"keyup",Ge,!0),(J=(Bt=re(Ne.begin))==null?void 0:Bt.addEventListener)==null||J.call(Bt,"click",W=>{(W==null?void 0:W.detail)>1||j("begin")}),(ue=(ie=re(Ne.gate))==null?void 0:ie.addEventListener)==null||ue.call(ie,"click",()=>Ot(We())),(Le=(fe=re(Ne.sound))==null?void 0:fe.addEventListener)==null||Le.call(fe,"click",W=>{var H,oe;C(),W!=null&&W.detail&&((oe=(H=re(Ne.sound))==null?void 0:H.blur)==null||oe.call(H))}),Ys.forEach((W,H)=>{var Ee,Ce,Oe,Be;const oe=re(Ne[W]),_e=()=>p&&!X&&R==="kit";(Ee=oe==null?void 0:oe.addEventListener)==null||Ee.call(oe,"pointerenter",be=>{_e()&&pe(H,be)}),(Ce=oe==null?void 0:oe.addEventListener)==null||Ce.call(oe,"pointermove",be=>{_e()&&pe(H,be)}),(Oe=oe==null?void 0:oe.addEventListener)==null||Oe.call(oe,"focus",be=>{_e()&&H!==N&&me(H),Q=te(be)}),(Be=oe==null?void 0:oe.addEventListener)==null||Be.call(oe,"click",be=>{!_e()||(be==null?void 0:be.detail)>1||(H===N?j("select"):me(H))})});const ne=re(Ne.kitTurn);(Ve=ne==null?void 0:ne.addEventListener)==null||Ve.call(ne,"pointerdown",Ke),(lt=ne==null?void 0:ne.addEventListener)==null||lt.call(ne,"pointermove",ge);for(const W of["pointerup","pointercancel","lostpointercapture"])(xt=ne==null?void 0:ne.addEventListener)==null||xt.call(ne,W,Fe);if((rt=(ut=re(Ne.kitSelect))==null?void 0:ut.addEventListener)==null||rt.call(ut,"click",W=>{(W==null?void 0:W.detail)>1||j("select")}),(T=(Vt=re(Ne.kitBack))==null?void 0:Vt.addEventListener)==null||T.call(Vt,"click",()=>{p&&!X&&R==="kit"&&ae()}),(q=(z=re(Ne.veil))==null?void 0:z.addEventListener)==null||q.call(z,"click",()=>{var W,H;ce&&((H=(W=_())==null?void 0:W.requestLockFresh)==null||H.call(W))}),qS(t,"dev")===US)return se(!1,!1),p;const Re=a===void 0?GS(e):a;if(typeof Re=="function"){g=ES({AudioContext:Re,storage:o===void 0?VS(e):o,key:NS,doc:n,score:AS,voices:RS,sting:LS,mix:CS}),ve(Ne.sound,!0),w();const W=g.probe();!x&&W!=="none"&&W!=="running"&&ze()}return p},ready(){S||(S=!0,!b&&(xe(!1),x&&p&&(x=!1,j("begin")),p&&!M&&ke()))},update(I){var $;y+=Math.max(0,I),S&&F++,x&&M&&k>=0&&y-k>=HS&&Je(),g==null||g.pump(),R==="kit"&&(($=v())==null||$.update(I)),X&&(V+=Math.max(0,I),V>=(d?rd.reduced:rd.secs)-1e-9&&Te())},pick(I){return!p||R!=="kit"||X?!1:(me(I),!0)},pointerLock(I){I&&ce&&Ye(!1)},skip(){return p?(se(!1),!0):!1},open(I="title",$={}){var De;if(!cc.includes(I))throw new Error(`start.open: '${I}' is not built yet (built: ${cc.join(", ")})`);const ne=re(Ne.root);ne&&(ne.hidden=!1,ne.inert=!1,(De=ne.removeAttribute)==null||De.call(ne,"aria-hidden")),ye(ne,"st-closing",!1),ye(ne,"st-handing",!1);const Re=re(Ne.backdrop);Re&&(Re.hidden=!1),ye(Re,"gone",!1),ye(n==null?void 0:n.documentElement,"start-open",!0),E=!1,b||xe(!!$.loading||!S),ye(n==null?void 0:n.documentElement,od.still,!!$.still),M||ke(!1),X=!1,Ye(!1);const qe=p;return p=!0,I==="kit"?ee($.kit===void 0?N:Math.max(0,is.indexOf($.kit))):ae(),qe||s(),!0},music:{continue:(I=!0)=>g==null?void 0:g.carry(I),stop:I=>(g==null?void 0:g.stop(I))??!1},state(){return{open:p,screen:R,ready:S,queued:x,busy:E,problem:b,clock:y,acts:A,closes:L,build:i,licence:kS(),gate:M,gatePresses:P,going:D,frames:F,sound:(g==null?void 0:g.state())??null,kit:is[N],handing:X,veil:ce,picks:de,selects:le,slides:Se,turning:B!==null}},get isOpen(){return p},get handing(){return X},get showsBody(){return p&&!X&&R==="kit"}}}function XS(){return"96f60ee"}function qS(n,e){const t=typeof n=="string"?n.replace(/^\?/,""):"";for(const i of t.split("&")){const[r,s=""]=i.split("=");if(r===e)try{return decodeURIComponent(s)}catch{return s}}return null}const ld=Object.freeze({risen:Object.freeze({height:.81,top:.094,x:.262}),kit:Object.freeze({height:.875,top:.056,x:.227}),customise:Object.freeze({height:.88,top:.06,x:.24})}),$l=4.2,Kl=.93,cd=1.8839,YS=-.0541,rs=.18,$S=.008,jl=Object.freeze({wait:2,secs:.6}),ud=.12,fd=Object.freeze({w:960,h:540,query:"(max-width: 959.98px), (max-height: 539.98px)"}),KS=Object.freeze([-3,4,4]),jS="hand",Zl=Object.freeze({at:Object.freeze([0,-.085,.015]),pitch:1,yaw:Math.PI});function ZS(n,e){const t=Math.min(n/1280,e/720);return{s:t,x:(n-1280*t)/2,y:(e-720*t)/2,w:1280*t,h:720*t}}function JS(n,e,t,i){const r=ZS(e,t),s=i.height*r.h*$l/(cd-YS);n.fov=2*Math.atan(t/(2*s))*180/Math.PI,n.aspect=e/t;const a=r.x+i.x*r.w,o=r.y+i.top*r.h+s*(cd-Kl)/$l;n.setViewOffset(e,t,e/2-a,t/2-o,e,t),n.position.set(0,Kl,$l),n.lookAt(0,Kl,0),n.updateProjectionMatrix(),n.updateMatrixWorld()}function QS({materials:n,reduced:e=!1}={}){const t=new go;t.add(new Ua(3949127,.85));const i=new Da(16777215,1.6);i.position.set(...KS),t.add(i),t.add(new Ia(14674158,3813928,.9));const r=new mn(30,16/9,.1,20),s=()=>{const M=Yc(yo.find(P=>P.id===jS),{icon:!0,solidMaterial:n.solid,glowMaterial:n.glow});return M.group.position.set(...Zl.at),M.group.rotation.set(Zl.pitch,Zl.yaw,0),M};let a=s(),o=null,l=null,u=rs,c=0,f="kit",d=[1280,720],h=0,_=!1,v=!1,m=null,p=1,S,x=null,E=!1,R=0,b=-1,y=0;function A(){if(!(m!=null&&m.style))return;const M=p>=1?"":String(p.toFixed(3));if(M!==S)try{m.style.opacity=M,S=M}catch{}}function L(){o&&(o.pose(e?0:c,{base:"preview"}),o.root.position.set(0,0,0),o.root.rotation.set(0,u,0),o.root.updateMatrixWorld(!0))}const g={scene:t,camera:r,get gun(){return a},show(M){return M===l?!1:(a||(a=s()),a.group.removeFromParent(),o&&(t.remove(o.root),o.dispose()),o=So(M,n),l=M,h++,o.rig.bones.handR.add(a.group),t.add(o.root),L(),!0)},swap(M){return M===l&&x===null?!1:e||!o||!_||v?(x=null,p=1,A(),g.show(M)):M===l?(x=null,!1):(x=M,!0)},setVisible(M){_=!!M,_||(x!==null&&(g.show(x),x=null),p=1,A())},update(M){const P=Math.max(0,M);if(c+=P,x!==null?(p-=P/ud,p<=0&&(p=0,g.show(x),x=null)):p<1&&(p=Math.min(1,p+P/ud)),A(),!E&&b>=0){b+=P;const D=Math.min(1,Math.max(0,(b-jl.wait)/jl.secs));b>=jl.wait&&(u=y+(rs-y)*(.5-.5*Math.cos(Math.PI*D))),D>=1&&(b=-1,u=rs)}L()},resize(M,P){d=[M||1280,P||720],v=d[0]<fd.w||d[1]<fd.h,JS(r,d[0],d[1],ld[f])},usePreset(M){return ld[M]?(f=M,g.resize(...d),!0):!1},view(M=rs){E=!1,b=-1,u=M,L()},grab(){E=!0,b=-1,R=u},drag(M){return E?(u=R+M*$S,L(),!0):!1},drop(){if(!E||(E=!1,e))return!1;const M=Math.PI*2;return y=rs+((u-rs)%M+M*1.5)%M-Math.PI,u=y,b=0,!0},render(M){M.setClearColor(0,0),m=M.domElement??m,o&&(o.root.visible=_&&!v),A(),M.render(t,r)},meshes(){const M=[];return o==null||o.root.traverseVisible(P=>{P.isMesh&&M.push(P)}),M},dispose(){var M,P,D,F;a==null||a.group.removeFromParent(),o&&(t.remove(o.root),o.dispose()),o=null,l=null,x=null,p=1,A(),(P=(M=a==null?void 0:a.rig)==null?void 0:M.dispose)==null||P.call(M);for(const k of(a==null?void 0:a.extras)??[])(F=(D=k.geometry)==null?void 0:D.dispose)==null||F.call(D);return a=null,!0},state(){return{garment:l,yaw:u,preset:f,builds:h,visible:_,clock:c,reduced:e,compact:v,alpha:p,swapTo:x,dragging:E,settling:b>=0}}};return g.resize(...d),g}var Ud,Nd;const Fh=((Nd=(Ud=globalThis.matchMedia)==null?void 0:Ud.call(globalThis,"(prefers-reduced-motion: reduce)"))==null?void 0:Nd.matches)??!1;let Ur=null,Rt=null;var kd;const Pn=WS({doc:document,win:globalThis,search:((kd=globalThis.location)==null?void 0:kd.search)??"",onClose:()=>nb(),onOpen:()=>{Oi=!0},screens:cc,input:()=>Rt,showroom:()=>Ur,onPick:n=>Xa(n),reduced:Fh});let Oi=Pn.boot();const Fa=document.getElementById("view"),en=new Ic({canvas:Fa,antialias:!0});en.setPixelRatio(Math.min(devicePixelRatio||1,2));en.setSize(innerWidth||1280,innerHeight||720,!1);en.outputColorSpace=Fn;en.toneMapping=_c;en.toneMappingExposure=1;Gx(en);const mt=new go;mt.background=new nt(1053204);const wt=new mn(70,(innerWidth||1280)/(innerHeight||720),.05,200),jc=1.7,pn=new mn(70,(innerWidth||1280)/(innerHeight||720),.05,200);mt.add(new Ua(3949127,.85));const Oh=new Da(16777215,1.6);Oh.position.set(4,8,6);mt.add(Oh);mt.add(new Ia(14674158,3813928,.9));const ot={halfW:7.5,wallH:4.6,near:2,far:-24},Oa=(ot.near+ot.far)/2,Ba=ot.near-ot.far,Zc=sr(ot.halfW*2,.2,Ba,mi.floorTimber,{castShadow:!1});Zc.position.set(0,-.1,Oa);mt.add(Zc);const Jc=sr(ot.halfW*2+.4,.2,Ba,mi.ceiling,{castShadow:!1});Jc.position.set(0,ot.wallH+.1,Oa);mt.add(Jc);const Qc=sr(.2,ot.wallH,Ba,mi.wall);Qc.position.set(-ot.halfW-.1,ot.wallH/2,Oa);mt.add(Qc);const eu=sr(.2,ot.wallH,Ba,mi.wall);eu.position.set(ot.halfW+.1,ot.wallH/2,Oa);mt.add(eu);const tu=sr(ot.halfW*2+.4,ot.wallH,.2,mi.wallUpper);tu.position.set(0,ot.wallH/2,ot.far-.1);mt.add(tu);const nu=sr(ot.halfW*2+.4,ot.wallH,.2,mi.wallUpper);nu.position.set(0,ot.wallH/2,ot.near+.1);mt.add(nu);const Bh=[Qc,eu,tu,nu,Zc,Jc];for(const n of[-5,-10,-20]){const e=sr(ot.halfW*2,.01,.06,mi.trim,{castShadow:!1,receiveShadow:!1});e.position.set(0,.001,n),mt.add(e)}const zh=-2.5,Hh=sr(.05,.01,zh-ot.far,mi.trim,{castShadow:!1,receiveShadow:!1});Hh.position.set(0,.001,(zh+ot.far)/2);mt.add(Hh);const iu=Object.fromEntries([...hM,...VM].map(n=>[n.id,n])),ey=(n,e)=>e*Math.tan(ho.degToRad(n)),ty=[["boss",-3.5,20],["captain",-8.5,10],["servitor",-13,20],["shank",-19,15],["vandal",-27,10],["dreg",-36,5],["warlord",4,20],["champion",8.5,10],["rival",13,20],["outrider",19,15],["turret",27,10],["levy",36,5]],_i=ty.map(([n,e,t],i)=>tS(iu[n],{scene:mt,x:ey(e,t),z:-t,index:i})),Jl={x:0,z:0};let Ae=0;const za=70,xi=yo.map(n=>({id:n.id,label:n.label,damage:n.damage,precision:n.precision,ammoType:n.ammoType,reserveCap:n.reserveCap,burstCycle:n.burstCycle??0,stats:{...n.stats,reloadTime:n.reload.clip*n.reload.seat}})),Ii=xi.map(n=>r2(n.stats));let Yn=0,Nt=Ii[0];const Ha="hunterCloak",ft=OM({hipFov:za,classId:Ha,buildProp:k2}),Kn=f2({model:ft.rig,rest:Vf,aim:Vf,stowDrop:0,drawTime:0,aimTime:0,fov:ac,keyIntensity:1.6,fillIntensity:.12});Kn.scene.add(new Ia(14674158,3813928,.9));Kn.camera.far=3;Kn.camera.updateProjectionMatrix();Kn.draw();const ru=n=>n.reloading?{...n,reloading:!1,reloadEndsAt:0}:n;function xs(n){n===Yn||!xi[n]||bt.locks(Ae).swap||ft.requestSwap(n,Ae)&&(Ii[Yn]=ru(Nt),Yn=n,Nt=Ii[n],Ht.fire("switch","weapon"))}const ny=new gn(.02,.02,1),Gh=new xn({color:16773824,transparent:!0,opacity:0}),no=new Et(ny,Gh);no.frustumCulled=!1;mt.add(no);let Vh=-1/0;const dd=new U,hd=new U,iy=new U(0,0,1);function ry(n,e){const t=n.distanceTo(e);hd.copy(n).add(e).multiplyScalar(.5),no.position.copy(hd),dd.copy(e).sub(n).normalize(),no.quaternion.setFromUnitVectors(iy,dd),no.scale.set(1,1,Math.max(t,.01)),Vh=Ae+.05}const Ga=new Et(Na.sphere,new xn({color:16769162}));Ga.scale.setScalar(1e-4);mt.add(Ga);let Wh=-1/0,Xh=.06;function Va(n,e=.06){Ga.position.copy(n),Wh=Ae+(e>.3?.28:e>.12?.18:.09),Xh=e}let pd=0;function qh(n,e=!1){const t=document.getElementById("hitmarker");t&&(t.classList.remove("fade"),t.classList.toggle("kill",n),t.classList.toggle("crit",e&&!n),t.offsetWidth,t.classList.add("show"),clearTimeout(pd),pd=setTimeout(()=>{t.classList.remove("show"),t.classList.add("fade")},60))}const hs=new gh;hs.far=100;const sy=ho.degToRad(1.4),oy=ho.degToRad(.22),md=new U,Ql=new U,gd=new U;function ay(n){const e=ft.adsE>=.9?oy/ft.magnification:sy;if(e<=0)return;const t=Math.random()*Math.PI*2,i=Math.random()*e;md.set(Math.abs(n.y)<.99?0:1,Math.abs(n.y)<.99?1:0,0),Ql.crossVectors(n,md).normalize(),gd.crossVectors(Ql,n).normalize(),n.addScaledVector(Ql,Math.cos(t)*i).addScaledVector(gd,Math.sin(t)*i).normalize()}const ly=_i.flatMap(n=>n.meshes),cy=new Map(_i.flatMap(n=>n.meshes.map(e=>[e,n])));function ao(n){for(const e of n.intersectObjects(ly,!1)){const t=cy.get(e.object);if(t.health.dead)continue;const i=nS(t,e);if(i)return{target:t,point:e.point,crit:i.crit}}return null}function bo(n,e,t,i=!1){const r=iS(n,{amount:e,source:t,at:Ae,crit:i});return r.killed&&My($c(n,0),t==="player-super"?"super":"weapon"),r}function uy(n){const e=new U,t=new U;Kn.ray(wt,e,t),ay(t),hs.set(e,t);const i=ao(hs);let r;if(i){r=i.point;const s=xi[Yn],a=i.crit?s.damage*s.precision:s.damage,o=(Ae<su?a*Sy:a)*bt.weaponDamageScale(),{killed:l}=bo(i.target,o,"player",i.crit);qh(l,i.crit)}else{const s=hs.intersectObjects(Bh,!1);r=s.length?s[0].point:e.clone().addScaledVector(t,hs.far)}Va(r),ry(ft.muzzleWorld(wt),r),ft.onShot((n==null?void 0:n.at)??Ae)}const fy=BM();let oa=-1/0;function Yh(n=bt.locks(Ae)){const e=xi[Yn],t=Rt.down.has("Mouse0")||uo.fire;let i=Rt.pressed.has("Mouse0")||uo.fire;const r=ft.busy||n.fire;r?(i||t)&&(oa=Ae):oa>-1/0&&((t||Ae-oa<=yo[Yn].readyTime+Uh)&&(i=!0),oa=-1/0),!r&&t&&ft.reloading&&!wh(Nt,Ae)&&ft.cutReload(Ae);const s=fy.pull(Nt,e,Ae,{held:t,pressed:i,blocked:r});Nt=s.state,s.shots.length&&ft.reloading&&ft.cutReload(Ae);for(const a of s.shots)uy(a);for(const a of s.events)(a.type==="dry"||a.type==="emptied")&&lo();!r&&t&&Nt.loaded<=0&&!Nt.reloading&&lo()}let Js=-1/0;function lo(){if(ft.busy||bt.locks(Ae).reload)return;const n=a2(Nt,Ae);Nt=n.state,n.events.some(e=>e.type==="reloading")&&ft.startReload(Ae)}const Rr={melee:{cooldown:4,readyAt:0},grenade:{cooldown:14,readyAt:0},class:{cooldown:22,readyAt:0}},dy=n=>Ae>=Rr[n].readyAt,hy=n=>{Rr[n].readyAt=Ae+Rr[n].cooldown};let Bn=0;const py=.34;let Qi=0;const my=.25,_d=8,Ms=[],gy=14,_y=.7;function vy(n){const e=new Et(Na.box,new Fi({color:5163386,emissive:1989684,emissiveIntensity:1.1,roughness:.55}));e.scale.set(.16,.16,.16),e.position.set(n.x,.14,n.z),mt.add(e),Ms.push({mesh:e,bornAt:Ae})}function xy(n){for(let e=Ms.length-1;e>=0;e--){const t=Ms[e];t.mesh.rotation.y+=n*1.6,t.mesh.position.y=.14+Math.sin((Ae-t.bornAt)*3)*.03;const i=t.mesh.position.x-Xe.x,r=t.mesh.position.z-Xe.z,s=Math.hypot(i,r)<_y,a=Ae-t.bornAt>gy;s&&(xi.forEach((o,l)=>{if(o.ammoType!=="special")return;const u=o.reserveCap??1/0;l===Yn?Nt={...Nt,reserve:Math.min(u,Nt.reserve+_d)}:Ii[l]={...Ii[l],reserve:Math.min(u,Ii[l].reserve+_d)}}),Ht.fire("pickup","special-ammo")),(s||a)&&(mt.remove(t.mesh),Ms.splice(e,1))}}function My(n,e="weapon"){if(e!=="super"){const t=Bn>=1;Bn=Math.min(1,Bn+py),!t&&Bn>=1&&Ht.fire("flag","super-ready")}Qi>=1?(n&&vy(n),Qi=0):Qi=Math.min(1,Qi+my),Gy()}let su=-1/0;const Sy=1.6,yy=6;function by(){su=Ae+yy,Ht.fire("ability","class")}const Ey=2.6,wy=80;function Ty(){const n=new U,e=new U;Kn.ray(wt,n,e);const t=nr.strikeRaycast(n,e,Ey);if(t){const{killed:i}=bo(t.target,wy,"player-melee");Va(t.point,.1),qh(i),Ht.fire("ability","melee")}}const Ay=14,e0=3.2,vd=120,Ry=2.5,uc=new Fi({color:16734780,emissive:16742972,emissiveIntensity:2,roughness:.5,metalness:0}),Di=new Et(Na.sphere,uc);Di.scale.setScalar(.16);Di.visible=!1;mt.add(Di);const fc=new U,Ly=.6,xd=new U,Cy=new U;let co=!1,$h=-1/0;function Py(n,e,t){co&&Kh(Di.position.clone()),uc.color.set(t),uc.emissive.set(t),Di.position.copy(n),fc.copy(e).multiplyScalar(7.5).add(new U(0,4.2,0)),Di.visible=!0,co=!0,$h=Ae,Ht.fire("ability","grenade")}function Kh(n){Va(n,.75),xd.set(Xe.x,Xe.y+1,Xe.z);const e=xd.distanceTo(n);e<e0&&Jh(vd*Ly*(1-.5*(e/e0)),"player-grenade");for(const t of _i)t.health.dead||$c(t,.5,Cy).distanceTo(n)>e0||bo(t,vd,"player-grenade")}function Iy(n){if(!co)return;fc.y-=Ay*n,Di.position.addScaledVector(fc,n);const e=Di.position;(e.y<=.1||e.x<-ot.halfW+.15||e.x>ot.halfW-.15||e.z<ot.far+.15||e.z>ot.near-.15||Ae-$h>Ry)&&(Kh(e.clone()),Di.visible=!1,co=!1)}function Dy(){const n=new U,e=new U;Kn.ray(wt,n,e),Va(n.clone().addScaledVector(e,3.5),.6);for(const t of _i)t.health.dead||bo(t,99999,"player-super");Ht.fire("ability","super")}const ou=70,Wa=130,Md=2.75,Uy=2.25,Ny=ou/2.7,ky=Wa/2.75;let Qt=Gc({max:ou,shield:Wa}),jh=-1/0,Zh=!1;function Jh(n,e="world"){if(Qt.dead)return;const{state:t,events:i}=bh(Qt,{amount:n,source:e});Qt=t,jh=Ae,i.some(r=>r.type==="died")&&(Qt=Gc({max:ou,shield:Wa}),lu("r-down"))}function Fy(n){if(Qt.dead)return;const e=Ae-jh;e>=Md&&Qt.hp<Qt.max&&(Qt=nc(Qt,{amount:Ny*n,source:"regen"}).state),e>=Md+Uy&&Qt.shield<Qt.shieldMax&&(Qt=nc(Qt,{shield:ky*n,source:"regen"}).state)}const Qh={ghost:{name:"Ghost"}},au={"r-hello":{speaker:"ghost",text:"Range is live. Five, ten and twenty metres. Let's see what your hands remember."},"r-targets":{speaker:"ghost",text:"Good. They stand back up on their own. Try something else in your kit."},"r-switch":{speaker:"ghost",text:"Feel the difference? Grenade next. Lob it, and not at your own feet."},"r-grenade":{speaker:"ghost",text:"Loud. Now get in close and hit one. Your fists count too."},"r-melee":{speaker:"ghost",text:"That'll do. Your class ability now. It doesn't last, so make it count."},"r-class":{speaker:"ghost",text:"Every kill feeds your Super. Break a few more and I'll tell you when it's ready."},"r-super-ready":{speaker:"ghost",text:"There. That's your Super. Let it out."},"r-super":{speaker:"ghost",text:"That's what you are now. Kills build special ammo too. Watch for the drop."},"r-ammo":{speaker:"ghost",text:"Special ammo. The hand cannon's fed. The range is yours."},"r-down":{speaker:"ghost",text:"Up you get. Maybe keep your own grenades a bit further away."}};for(const[n,e]of Object.entries(au)){if(!Qh[e.speaker])throw new Error(`comms: line '${n}' has unknown speaker '${e.speaker}'`);if(e.text.length>ed)throw new Error(`comms: line '${n}' is ${e.text.length} chars, over MAX_LINE ${ed}`)}const En={queue:[],current:null,until:0,endedAt:-1/0},Oy=.8,By=n=>Math.max(2.4,.8+n.length*.05);function lu(n){const e=au[n];if(!e)throw new Error(`comms: no line '${n}'`);En.queue=[{id:n,...e}]}function zy(){if(En.current&&Ae>=En.until){const n=En.current;En.current=null,En.endedAt=Ae,Ht.fire("vo",n.id)}!En.current&&En.queue.length&&(En.current=En.queue.shift(),En.until=Ae+By(En.current.text))}const ep={id:"test-range",title:"Test Range",acts:[{id:"range",title:"Test Range",scenes:[{id:"drills",title:"Drills",beats:[{id:"r-01",trigger:"now",vo:"r-hello"},{id:"r-02",trigger:"kill",at:"target",count:3,progress:"kills",label:"Enemies defeated",objective:"Defeat enemies",vo:"r-targets"},{id:"r-03",trigger:"switch",at:"weapon",key:"1 2 3",objective:"Switch weapons",vo:"r-switch"},{id:"r-04",trigger:"ability",at:"grenade",key:"Q",objective:"Throw a grenade",vo:"r-grenade"},{id:"r-05",trigger:"ability",at:"melee",key:"C",objective:"Melee a target",vo:"r-melee"},{id:"r-06",trigger:"ability",at:"class",key:"V",objective:"Use your class ability",vo:"r-class"},{id:"r-07",trigger:"flag",at:"super-ready",progress:"super",label:"Super energy",objective:"Charge your Super",vo:"r-super-ready"},{id:"r-08",trigger:"ability",at:"super",key:"F",objective:"Cast your Super",vo:"r-super"},{id:"r-09",trigger:"pickup",at:"special-ammo",progress:"special",label:"Special ammo",objective:"Collect special ammo",vo:"r-ammo"}]}]}]},Hy="Free fire",t0=new Set,Ht=hS({host:{knows:n=>t0.has(n),learn:n=>t0.add(n)},knows:n=>n==="super-ready"?Bn>=1:t0.has(n),triggers:["now","flag","vo","kill","switch","ability","pickup"],onBeat:n=>{n.vo&&lu(n.vo)}});Ht.load(ep);for(const n of ep.acts[0].scenes[0].beats)if(n.vo&&!au[n.vo])throw new Error(`episode: beat '${n.id}' plays missing line '${n.vo}'`);let ps={id:null,n:0};function Gy(){const n=Ht.beat;!n||n.trigger!=="kill"||(ps.id!==n.id&&(ps={id:n.id,n:0}),ps.n+=1,ps.n>=(n.count??1)&&Ht.fire("kill",n.at))}const Eo=new Zx;Rt=new e2(Eo,Fa);Fa.addEventListener("click",()=>{Oi||Rt.locked||Rt.requestLock()});Fa.addEventListener("contextmenu",n=>n.preventDefault());Eo.on("input:wheel",({delta:n})=>{if(Oi||!Rt.locked)return;const e=xi.length;xs((Yn+(n>0?1:-1)+e)%e)});Eo.on("input:pointerlock",({locked:n})=>{var e;(e=document.getElementById("hint"))==null||e.classList.toggle("gone",n),Pn.pointerLock(n),!n&&!ri&&Ht.begun&&!Oi&&(qa(),sp=performance.now()),n&&!Ht.begun&&Ht.begin()});const Vy=["MetaLeft","MetaRight","ControlLeft","ControlRight","AltLeft","AltRight"];Eo.on("input:key",({code:n})=>{if(Oi||ri||!Rt.locked||Vy.some(t=>Rt.down.has(t)))return;const e=bt.locks(Ae);n==="KeyR"&&(e.reload?Js=Ae:lo()),n==="KeyQ"&&bt.press("grenade"),n==="KeyC"&&bt.press("melee"),n==="KeyV"&&bt.press("class"),n==="KeyF"&&bt.press("super"),n==="Digit1"&&xs(0),n==="Digit2"&&xs(1),n==="Digit3"&&xs(2)});const yt={yaw:0,pitch:0},Wy=1.5,Xe={x:0,z:0,y:0},Xy=4.2,Sr=.35,qy=20,Yy=6.4,$y=5.6,Ky=1;let gr=0,n0=0;const uo={aim:!1,fire:!1},i0=new on(0,0,0,"YXZ"),Sd=new U,yd=new U,ss=new U,r0=(n,e,t)=>Math.max(e,Math.min(t,n)),Lr={solid:new Fi({vertexColors:!0,roughness:.85,metalness:0}),glow:new xn({vertexColors:!0})},bd=new xn({color:0});Ur=QS({materials:Lr,reduced:Fh});Ur.resize(innerWidth||1280,innerHeight||720);const jy={x:0,y:0},io=new U;let wo=Ha,va=null,Rn=So(Ha,Lr);Rn.root.visible=!1;mt.add(Rn.root);const Ln=$2({room:ot,fov:za,radius:.2}),cu=J2({abilities:ni,moments:Dr}),nr=cM({raycaster:hs,strikeRay:ao,getWeapon:()=>Nt,setWeapon:n=>{Nt=n},cancelEngineReload:ru,fp:ft,now:()=>Ae,getSuperCharge:()=>Bn,setSuperChargeValue:n=>{Bn=n},episode:Ht,moment:Ln,pitchLimit:Wy}),bt=eM({scene:mt,ROOM:ot,camera:wt,fp:ft,runner:cu,moment:Ln,player:Xe,view:yt,PLAYER_RADIUS:Sr,strikeRaycast:nr.strikeRaycast,now:()=>Ae,classId:()=>wo,body:()=>Rn,moveAxis:()=>Rt.axis(),ability:{ready:n=>dy(n)&&!(n==="grenade"&&co),use:hy},superCharge:{get:()=>Bn,set:nr.setSuperCharge},weapons:{fillMagazine:nr.fillMagazine,cancelReload:()=>{Nt=ru(Nt)}},legacy:{throwGrenade:Py,meleeStrike:Ty,ward:by,superWipe:Dy}});let Pi=null,Cr=null,ri=!1,tp=Ha;const Ki=document.getElementById("preview-canvas");let fi=null,pi=null,Ss=null,sn=null,dc=0,Aa=0,np=!0;function Xa(n){$n[n]&&(tp=n,pi&&(sn&&(pi.remove(sn.root),sn.dispose()),sn=So(n,Lr),sn.pose(dc,{base:"preview"}),sn.root.position.set(0,0,0),sn.root.rotation.set(0,Aa,0),sn.root.updateMatrixWorld(!0),pi.add(sn.root)),document.querySelectorAll("#menu-classes button").forEach(e=>e.classList.toggle("active",e.dataset.garment===n)),va=n,ip())}function ip(){if(!va||bt.busy)return;const n=va;va=null,n!==wo&&uu(n)}function uu(n){wo=n,ft.setClass(n),mt.remove(Rn.root),Rn.dispose(),Rn=So(n,Lr),Rn.root.visible=!1,mt.add(Rn.root),bt.setClass(n)}function Zy(){if(fi||!Ki)return;fi=new Ic({canvas:Ki,antialias:!0,alpha:!0}),fi.setPixelRatio(Math.min(devicePixelRatio||1,2)),fi.outputColorSpace=Fn,fi.toneMapping=_c,pi=new go,pi.add(new Ua(3949127,.85));const n=new Da(16777215,1.6);n.position.set(2,3,3),pi.add(n),pi.add(new Ia(14674158,3813928,.9)),Ss=new mn(40,1,.05,10),Ss.position.set(0,1.1,3.2),Ss.lookAt(0,.94,0),Xa(tp)}function rp(){const n=document.getElementById("menu-inventory");n&&(n.innerHTML=xi.map((e,t)=>{const i=t===Yn?Nt:Ii[t],r=i.reserve===1/0?"∞":i.reserve;return`<div class="inv-slot${t===Yn?" equipped":""}" data-index="${t}">
      <span>${e.label} &middot; ${i.loaded}/${r}</span>
      <span class="ammo-tag ${e.ammoType}">${e.ammoType}</span>
    </div>`}).join(""),n.querySelectorAll(".inv-slot").forEach(e=>{e.addEventListener("click",()=>{xs(Number(e.dataset.index)),rp()})}))}function qa(){ri=!ri;const n=document.getElementById("menu");if(n&&(n.hidden=!ri),ri){Rt.releaseLock(),Zy();const e=(Ki==null?void 0:Ki.clientWidth)||360,t=(Ki==null?void 0:Ki.clientHeight)||220;fi&&(fi.setSize(e,t,!1),Ss.aspect=e/t,Ss.updateProjectionMatrix()),rp()}else Rt.requestLockFresh(),Bn>=1&&up()}let sp=-1/0;Eo.on("action:cancel",()=>{Oi||ri&&performance.now()-sp<300||qa()});var Fd;(Fd=document.getElementById("menu-resume"))==null||Fd.addEventListener("click",()=>{ri&&qa()});document.querySelectorAll("#menu-classes button").forEach(n=>{n.addEventListener("click",()=>Xa(n.dataset.garment))});const Ra=n=>Object.keys($n).find(e=>Object.values($n[e]).includes(n));function Jy(n,e=0){if(Pn.skip(),n===null){Pi&&(Ln.finish(Ae-Dr[ni[Pi.id].camera].blendBack-.001),Ln.update(Ae,{feet:io.set(Xe.x,Xe.y,Xe.z),yaw:yt.yaw,pitch:yt.pitch})),Pi=null,Rn.root.visible=Ln.active,Nr();return}const t=ni[n];if(!(t!=null&&t.camera))throw new Error(`poseAt: '${n}' is not a third-person ability`);Ra(n)!==wo&&uu(Ra(n)),Pi={id:n,t:e},Ln.start(t.camera,Ae-Dr[t.camera].blendOut-.001),Ln.update(Ae,{feet:io.set(Xe.x,Xe.y,Xe.z),yaw:yt.yaw,pitch:yt.pitch}),Rn.root.visible=!0,Rn.pose(Ae,{base:"ready",clip:n,t:e,feet:io,facing:yt.yaw}),Nr()}function Qy(n,e=0,{charged:t=!0}={}){Pn.skip();const i=ni[n];if(ft.swapping)throw new Error("fpAt: a swap is running");Ra(n)!==wo&&uu(Ra(n));const r=i.seconds+(i.camera?Dr[i.camera].blendBack:0);ft.act(n,Ae-e*i.seconds,r,{charged:t}),ft.update(0,Ae,{}),Nr()}function hc(n){Pn.skip(),mt.overrideMaterial=n?bd:null,mt.background.set(n?16777215:1053204),pi&&(pi.overrideMaterial=n?bd:null,fi.setClearColor(n?16777215:0,n?1:0))}let _r=null;function eb(n){if(Pn.skip(),_r){for(const l of _r.items)mt.remove(l.root),l.dispose();for(const[l,u]of _r.visible)l.visible=u;hc(!1),Cr=null,_r=null}if(!n){Nr();return}const{bodies:e,distance:t=8,eye:i=jc,yaw:r=0,spacing:s=1.2,silhouette:a=!1}=n;_r={items:[],visible:new Map};const o=new Set;e.forEach((l,u)=>{let c;if($n[l])c=So(l,Lr),c.pose(0,{base:"ready"});else{const f=xo(iu[l].spec,{solidMaterial:Lr.solid,glowMaterial:Lr.glow});c={root:f.root,dispose:()=>f.dispose()}}c.root.position.x=(u-(e.length-1)/2)*s,c.root.position.z=-t,c.root.rotation.y=r,c.root.updateMatrixWorld(!0),mt.add(c.root),o.add(c.root),_r.items.push(c)});for(const l of mt.children)l!==bt.effectsRoot&&(_r.visible.set(l,l.visible),l.visible=o.has(l)||!a&&(l.isLight||Bh.includes(l)));bt.clearWorld(),hc(a),Cr={position:[0,i,0],target:[0,i,-t]},Nr()}function tb(n){Pn.skip(),np=n===null,n!==null&&(Aa=n)}function op(n){if(Oi){Rt.consumeMouse(),Pn.update(n),Rt.endFrame();return}if(ri){sn&&(dc+=n,np&&(Aa+=n*.6),sn.pose(dc,{base:"preview"}),sn.root.position.set(0,0,0),sn.root.rotation.set(0,Aa,0),sn.root.updateMatrixWorld(!0)),Rt.endFrame();return}Ae+=n,ip();const e=bt.locks(Ae),t=Rt.locked&&Rt.down.has("Mouse2")||uo.aim;t&&(lp=Ae),ft.setAim(t&&!e.aim);const{dx:i,dy:r}=Rt.consumeMouse();let s=0,a=0;if(nr.notePitch(yt.pitch),Rt.locked){const h=Rt.mouse.sensitivity*(wt.fov/za);s=-i*h,a=-r*h,yt.yaw+=s,yt.pitch+=a;const _=ft.recoil;if(_.pitch>0&&a<0){const p=Math.min(_.pitch,-a);_.pitch-=p,yt.pitch+=p}if(_.yaw>0&&s<0){const p=Math.min(_.yaw,-s);_.yaw-=p,yt.yaw+=p}if(_.yaw<0&&s>0){const p=Math.min(-_.yaw,s);_.yaw+=p,yt.yaw-=p}const[v,m]=nr.pitchWindow();yt.pitch=r0(yt.pitch,v,m)}wt.rotation.set(yt.pitch+ft.recoil.pitch,yt.yaw+ft.recoil.yaw,0,"YXZ"),i0.set(0,yt.yaw,0,"YXZ");const o=e.move==="free"?Rt.axis():jy;Sd.set(0,0,-1).applyEuler(i0),yd.set(1,0,0).applyEuler(i0),ss.set(0,0,0).addScaledVector(Sd,o.y).addScaledVector(yd,o.x),ss.lengthSq()>0&&ss.normalize();const l=ss.lengthSq()>0?Xy*(1-.25*ft.adsE):0;let u=null;e.move==="driven"?(u=bt.drive(n,Xe),u&&(gr=u.velY)):(Xe.x+=ss.x*l*n,Xe.z+=ss.z*l*n),Xe.x=r0(Xe.x,-ot.halfW+Sr,ot.halfW-Sr),Xe.z=r0(Xe.z,ot.far+Sr,ot.near-Sr);for(const h of _i){if(h.health.dead)continue;const _=Xe.x-h.root.position.x,v=Xe.z-h.root.position.z,m=h.footprint+Sr,p=_*_+v*v;if(p>=m*m)continue;const S=Math.sqrt(p);if(S<1e-6){Xe.z=h.root.position.z+m;continue}Xe.x=h.root.position.x+_/S*m,Xe.z=h.root.position.z+v/S*m}bt.pushOut(Xe,Sr);const c=Xe.y<=0;Rt.wasPressed("jump")&&!e.jump&&(c?(gr=Yy,n0=0):n0<Ky&&(gr=$y,n0++));let f=0;u||(gr-=qy*n,Xe.y=Math.max(0,Xe.y+gr*n),Xe.y<=0&&(c||(f=Math.max(0,-gr)),Xe.y=0,gr=0)),wt.position.set(Xe.x,jc+Xe.y,Xe.z),Pi||bt.onEvents(cu.update(Ae)),bt.update(n),Js>-1/0&&(Ae-Js>ic?Js=-1/0:!bt.locks(Ae).reload&&!ft.busy&&(Js=-1/0,lo())),Iy(n),xy(n),Fy(n),zy(),(Rt.locked||uo.fire)&&Yh(e),Nt=s2(Nt,Ae).state,ft.update(n,Ae,{lookYaw:s,lookPitch:a,speed:l,airborne:Xe.y>0,landed:f}),Kn.update(n),wt.fov=ft.worldFov,wt.updateProjectionMatrix(),wt.rotation.set(yt.pitch+ft.recoil.pitch,yt.yaw+ft.recoil.yaw,0,"YXZ"),Ln.update(Ae,{feet:io.set(Xe.x,Xe.y,Xe.z),yaw:yt.yaw,pitch:yt.pitch}),Nr(),bt.lateUpdate(Ae),Pi&&(Rn.pose(Ae,{base:"ready",clip:Pi.id,t:Pi.t,feet:io,facing:yt.yaw}),Rn.root.visible=!0),document.body.classList.toggle("third-person",Ln.active),document.body.classList.toggle("tp-aim",Ln.active&&bt.aiming),Gh.opacity=Ae<Vh?.9:0,Ga.scale.setScalar(Ae<Wh?Xh:1e-4);const d=document.getElementById("cross");d&&(d.style.opacity=(1-cp(.5,.85,ft.adsE)).toFixed(3)),Jl.x=Xe.x,Jl.z=Xe.z;for(const h of _i)oS(h,n,Ae,{face:Jl});cS(n),fp(n),Rt.endFrame()}function ap(){if(Oi&&!Cr&&!Pi){if(!Pn.handing){Ur.render(en);return}wt.position.set(Xe.x,jc+Xe.y,Xe.z),wt.rotation.set(yt.pitch,yt.yaw,0,"YXZ"),Nr()}en.render(mt,pn),!Ln.active&&!Cr&&Kn.pass(en,pn),ri&&fi&&sn&&fi.render(pi,Ss)}function nb(){Oi=!1,en.setClearColor(0,1)}const ib=new U,rb=new Yt,sb=new on(0,0,0,"YXZ");function Nr(){if(Cr)pn.position.set(...Cr.position),pn.lookAt(...Cr.target),pn.fov=za;else if(Ln.active)Ln.apply(pn);else{const n=ft.camOffset;pn.position.copy(wt.position).add(ib.set(n.x,n.y,n.z).applyQuaternion(wt.quaternion)),pn.quaternion.copy(wt.quaternion).multiply(rb.setFromEuler(sb.set(n.pitch,n.yaw,n.roll,"YXZ"))),pn.fov=wt.fov}pn.aspect=wt.aspect,pn.updateProjectionMatrix(),pn.updateMatrixWorld()}const Ed=132,wd=48;function ob(){const n=document.createElement("canvas");n.width=Ed,n.height=wd;let e;try{e=new Ic({canvas:n,alpha:!0,antialias:!0,preserveDrawingBuffer:!0})}catch{return xi.map(()=>"")}e.setClearColor(0,0);const t=new go;t.overrideMaterial=new xn({color:16777215});const i=new Cc(-1,1,1,-1,.01,10),r=new U,s=new U,a=yo.map(o=>Yc(o,{icon:!0})).map(({group:o})=>{const l=o;t.add(l),l.updateMatrixWorld(!0);const u=new ki().setFromObject(l);u.getSize(r),u.getCenter(s);let c=r.z/2*1.08,f=r.y/2*1.08;const d=Ed/wd;return c/f>d?f=c/d:c=f*d,i.left=-c,i.right=c,i.top=f,i.bottom=-f,i.position.set(s.x+2,s.y,s.z),i.lookAt(s),i.updateProjectionMatrix(),e.render(t,i),t.remove(l),n.toDataURL("image/png")});return t.overrideMaterial.dispose(),e.dispose(),e.forceContextLoss(),a}const pc=ob(),s0=60,ab=Math.cos(ho.degToRad(4)),Td=2.5,Ad=new Map,os=new gh,as=new U,o0=new U,a0=new U,l0=new U;function lb(n,e){let t=Ad.get(n);return t||(t=document.createElement("div"),t.className=`plate ${n.rank}`,t.innerHTML=`<div class="col"><div class="name">${n.name}</div><div class="bar"><i class="fill"></i><i class="shield"></i></div></div>`,e.appendChild(t),Ad.set(n,t),t)}function cb(){var r;const n=document.getElementById("nameplates");if(!n)return;wt.updateMatrixWorld(),wt.getWorldDirection(a0),os.set(wt.position,a0),os.far=s0;const e=((r=ao(os))==null?void 0:r.target)??null,t=innerWidth||1280,i=innerHeight||720;for(const s of _i){const a=lb(s,n);$c(s,.62,o0);const o=o0.distanceTo(wt.position);let l=s===e;if(!l&&o<s0&&(l0.copy(o0).sub(wt.position).divideScalar(o||1),l0.dot(a0)>ab)){os.set(wt.position,l0),os.far=o;const h=ao(os);l=!h||h.target===s}l&&(s.plateSeenAt=Ae);const u=o<s0&&(Ae-(s.plateSeenAt??-1/0)<Td||Ae-s.lastHitAt<Td);as.set(s.root.position.x,s.root.position.y+s.top+.2,s.root.position.z).project(pn);const c=as.z<1&&Math.abs(as.x)<1.05&&Math.abs(as.y)<1.05;if(a.hidden=s.health.dead||!c,a.classList.toggle("on",u),a.hidden)continue;const f=(as.x*.5+.5)*t,d=(-as.y*.5+.5)*i;a.style.transform=`translate(${f.toFixed(1)}px, ${d.toFixed(1)}px) translate(-50%, -100%)`,a.querySelector(".fill").style.width=`${(Eh(s.health)*100).toFixed(1)}%`,a.querySelector(".shield").style.width=`${(Vc(s.health)*100).toFixed(1)}%`}}function ub(n,e,t){const i=document.getElementById(n);i&&(i.style.setProperty("--pct",`${Math.round(e*100)}%`),i.classList.toggle("ready",t))}const Qs=Math.PI*2,ms=8,c0=24,fb=48,db=.8,us=92,ls=us*.4,mc=[];let lp=-1/0;const hb="http://www.w3.org/2000/svg",Tr=(n,e)=>`${(100+n*Math.sin(e)).toFixed(2)} ${(100-n*Math.cos(e)).toFixed(2)}`,Rd=(n,e,t)=>`M${Tr(n,e)} A${n} ${n} 0 0 1 ${Tr(n,t)}`;function qi(n,e){const t=document.createElementNS(hb,n);for(const[i,r]of Object.entries(e))t.setAttribute(i,String(r));return t}function pb(){const n=document.getElementById("radar-svg");if(!n)return;qi("defs",{}),n.appendChild(qi("circle",{cx:100,cy:100,r:us,fill:"rgba(12,17,22,0.38)",stroke:"rgba(255,255,255,0.24)","stroke-width":1.4})),n.appendChild(qi("circle",{cx:100,cy:100,r:ls,fill:"none",stroke:"rgba(255,255,255,0.2)","stroke-width":1.2}));const e=Qs/ms,t=ho.degToRad(1.5);for(let i=0;i<ms;i++){const r=(i-.5)*e+t/2,s=(i+.5)*e-t/2,a=qi("path",{d:`M${Tr(ls,r)} L${Tr(us,r)} A${us} ${us} 0 0 1 ${Tr(us,s)} L${Tr(ls,s)} A${ls} ${ls} 0 0 0 ${Tr(ls,r)} Z`,fill:"#b8452f",opacity:0}),o=(r+s)/2,l=(s-r)*.3,u=qi("g",{opacity:0});u.append(qi("path",{d:Rd(96,r,s),fill:"none",stroke:"#e04a32","stroke-width":3,opacity:.4}),qi("path",{d:Rd(96,o-l,o+l),fill:"none",stroke:"#e04a32","stroke-width":3})),n.append(a,u),mc.push({fill:a,far:u,near:0,farValue:0})}n.appendChild(qi("path",{d:"M100 90 L107.5 109 L100 104.5 L92.5 109 Z",fill:"#4a82e6",stroke:"#a9c6f5","stroke-width":1.2,"stroke-linejoin":"round"}))}pb();const Ld=(n,e,t)=>n+(e-n)*Math.min(1,t/(e>n?.15:.4));function cp(n,e,t){const i=Math.max(0,Math.min(1,(t-n)/(e-n)));return i*i*(3-2*i)}function mb(n){var r;if((r=document.getElementById("radar"))==null||r.classList.toggle("ads",Ae-lp<db),!mc.length)return;const e=new Array(ms).fill(0),t=new Array(ms).fill(0),i=Qs/ms;for(const s of _i){if(s.health.dead)continue;const a=s.root.position.x-Xe.x,o=s.root.position.z-Xe.z,l=Math.hypot(a,o);if(l>fb)continue;const u=((Math.atan2(a,-o)+yt.yaw)%Qs+Qs)%Qs,c=Math.round(u/i)%ms;l>=c0*.7&&(t[c]=1),l<c0&&(e[c]=Math.max(e[c],1-l/c0))}mc.forEach((s,a)=>{s.near=Ld(s.near,e[a],n),s.farValue=Ld(s.farValue,t[a],n),s.fill.setAttribute("opacity",(.7*cp(0,.75,s.near)).toFixed(2)),s.far.setAttribute("opacity",s.farValue.toFixed(2))})}function On(n,e){n&&n.textContent!==e&&(n.textContent=e)}const gb=.7;let $s,Ks,u0=-1/0;function _b(n){return n!=null&&n.progress?n.progress==="kills"?`${ps.id===n.id?ps.n:0}/${n.count??1}`:n.progress==="super"?`${Math.round(Bn*100)}%`:n.progress==="special"?Ms.length?"Dropped":`${Math.round(Qi*100)}%`:"":""}function vb(n){return(n==null?void 0:n.progress)==="kills"?`${n.count??1}/${n.count??1}`:(n==null?void 0:n.progress)==="super"?"100%":(n==null?void 0:n.progress)==="special"?"Collected":""}let f0=null;function xb(){const n=document.getElementById("objective");if(!n)return;const e=n.querySelector(".obj.main"),t=n.querySelector(".obj.sub"),i=n.querySelector(".obj.value"),r=Ht.begun?Ht.over?Hy:Ht.objective:null;if(r!==$s&&r!==Ks&&(Ks=r,$s?(u0=Ae+gb,n.classList.remove("fresh"),n.classList.add("complete"),On(e.querySelector(".key"),""),On(i.querySelector(".count"),vb(f0))):u0=Ae),Ks!==void 0&&Ae>=u0&&($s=Ks,Ks=void 0,f0=Ht.over?null:Ht.beat,n.hidden=!$s,On(e.querySelector(".text"),$s??""),n.classList.remove("complete","fresh"),n.offsetWidth,n.classList.add("fresh")),n.classList.contains("complete"))return;const s=f0,a=!!(s!=null&&s.progress);e.classList.toggle("step",a),On(e.querySelector(".key"),(s==null?void 0:s.key)??""),t.hidden=!a,i.hidden=!a,a&&(On(t.querySelector(".label"),s.label??""),On(i.querySelector(".count"),_b(s)))}function Mb(){const n=document.getElementById("buff-ward");if(!n)return;const e=su-Ae;n.hidden=e<=0,e>0&&On(n.querySelector(".time"),`${Math.ceil(e)}s`)}let Cd=Wa;function Sb(){var s;const n=document.getElementById("vitals");if(!n)return;const e=Eh(Qt),t=Vc(Qt),i=Qt.shield<=0;n.classList.toggle("shown",e<1||t<1),n.classList.toggle("broken",i&&e<1),n.classList.toggle("critical",i&&e<.5),i&&Cd>0&&(n.classList.remove("shattered"),n.offsetWidth,n.classList.add("shattered")),Cd=Qt.shield,n.style.setProperty("--hp",e.toFixed(3)),n.style.setProperty("--sh",t.toFixed(3)),(s=document.getElementById("zone"))==null||s.classList.toggle("on",Zh);const r=document.getElementById("vignette");r&&(r.style.opacity=i?Math.min(.9,(1-e)*1.2).toFixed(2):"0")}function yb(){const n=document.getElementById("comms"),e=document.getElementById("subtitle");if(!n||!e)return;const t=En.current,i=!!t||Ae-En.endedAt<Oy;n.classList.toggle("on",i),e.classList.toggle("on",i),t&&(On(n.querySelector(".speaker"),Qh[t.speaker].name),On(e.querySelector(".line"),t.text))}let Pd=null;function bb(){const n=document.getElementById("weapons");return n?(n.innerHTML=xi.map((e,t)=>`
    <div class="wpn">
      ${pc[t]?`<img class="icon" alt="" src="${pc[t]}">`:'<span class="icon"></span>'}
      <span class="ammo-type ${e.ammoType}"><i></i><i></i><i></i></span>
      <span class="reserve"></span>
      <span class="mag"></span>
      ${e.ammoType==="special"?'<div class="meter"><div class="fill"></div></div>':""}
    </div>`).join(""),[...n.querySelectorAll(".wpn")]):[]}let Id=!1;function up(){const n=document.getElementById("super-flash");n&&(n.classList.remove("show"),n.offsetWidth,n.classList.add("show"))}function Eb(){const n=document.getElementById("super");if(n){const t=Bn>=1;n.style.setProperty("--charge",Bn.toFixed(3)),n.classList.toggle("ready",t),t&&!Id&&up(),Id=t}for(const[t,i]of[["ab-grenade","grenade"],["ab-melee","melee"],["ab-class","class"]]){const r=Math.max(0,Rr[i].readyAt-Ae),s=Rr[i].cooldown>0?r/Rr[i].cooldown:0;ub(t,s,r<=0)}Pd??(Pd=bb());const e="∞";Pd.forEach((t,i)=>{const r=i===Yn,s=r?Nt:Ii[i],a=s.reserve===1/0;t.classList.toggle("active",r),t.style.order=r?"0":String(i+1),r?(On(t.querySelector(".mag"),String(s.loaded)),On(t.querySelector(".reserve"),a?e:String(s.reserve))):(On(t.querySelector(".mag"),""),On(t.querySelector(".reserve"),a?e:String(s.loaded+s.reserve))),t.classList.toggle("low",s.loaded<=Math.floor(s.magazine*.2)),t.classList.toggle("empty",!a&&s.loaded+s.reserve===0);const o=t.querySelector(".meter");o&&(o.firstElementChild.style.width=`${Math.round(Qi*100)}%`,o.classList.toggle("full",Qi>=1))})}function fp(n=0){mb(n),cb(),xb(),Mb(),Sb(),yb(),Eb()}addEventListener("resize",()=>{if(!(!innerWidth||!innerHeight)){en.setSize(innerWidth,innerHeight,!1);for(const n of[wt,pn])n.aspect=innerWidth/innerHeight,n.updateProjectionMatrix();Ur.resize(innerWidth,innerHeight)}});let Dd=performance.now();function dp(n){const e=Math.min((n-Dd)/1e3,.25);Dd=n,op(e),ap(),requestAnimationFrame(dp)}requestAnimationFrame(dp);window.game={scene:mt,camera:wt,renderCamera:pn,renderer:en,view:yt,player:Xe,weapon:()=>Nt,targets:_i,update:op,render:ap,viewmodel:Kn,units:iu,strikeRay:ao,hitTarget:bo,input:Rt,attemptFire:Yh,doReload:lo,throwGrenade:()=>bt.press("grenade"),doMelee:()=>bt.press("melee"),useClassAbility:()=>bt.press("class"),useSuper:()=>bt.press("super"),ability:()=>Rr,superCharge:()=>Bn,setSuperCharge:nr.setSuperCharge,switchWeapon:xs,weaponDefs:()=>xi,activeWeapon:()=>Yn,fp:ft,debug:uo,specialMeter:()=>Qi,ammoBricks:()=>Ms,weaponStates:Ii,toggleMenu:qa,menuOpen:()=>ri,setGarment:Xa,previewBody:()=>sn,guardian:{get body(){return Rn},get previewBody(){return sn},runner:cu,moment:Ln,game:bt,comfort:qc,seam:nr,data:{ABILITIES:ni,CLASSES:$n,ELEMENTS:Mo,MOMENTS:Dr,NAMES:lM},poseAt:Jy,fpAt:Qy,silhouette:hc,stage:eb,previewView:tb},episode:Ht,comms:En,sayLine:lu,hurtPlayer:Jh,playerHealth:()=>Qt,updateHud:fp,weaponIcons:pc,setRestrictedZone:n=>{Zh=!!n},start:{open:(n,e)=>Pn.open(n,e),state:()=>Pn.state(),skip:()=>Pn.skip(),pick:n=>Pn.pick(n),view:n=>Ur.view(n),showroom:Ur},simTime:()=>Ae};console.log(`PRE-DESTINY test range booted — ${_i.length} enemies in two lanes, magazine ${Nt.magazine}, reserve ${Nt.reserve}, reload ${Nt.reloadTime}s`);var Od;(Od=en.compile)==null||Od.call(en,mt,pn);var Bd;(Bd=en.compile)==null||Bd.call(en,Kn.scene,Kn.camera);Pn.ready();
