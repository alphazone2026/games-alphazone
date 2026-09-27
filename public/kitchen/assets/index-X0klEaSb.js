(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cl="169",sf=0,$l=1,rf=2,Lh=1,Ih=2,Hn=3,qn=0,Fe=1,$t=2,Wn=0,os=1,fs=2,jl=3,Kl=4,of=5,wi=100,af=101,lf=102,cf=103,hf=104,uf=200,ff=201,df=202,pf=203,pa=204,ma=205,mf=206,gf=207,xf=208,vf=209,_f=210,yf=211,Mf=212,bf=213,wf=214,ga=0,xa=1,va=2,ds=3,_a=4,ya=5,Ma=6,ba=7,Dh=0,Sf=1,Tf=2,si=0,Uh=1,Nh=2,kh=3,hl=4,Ef=5,zh=6,Fh=7,Oh=300,ps=301,ms=302,wa=303,Sa=304,oo=306,oi=1e3,Ti=1001,Ta=1002,on=1003,Af=1004,hr=1005,Sn=1006,wo=1007,Ei=1008,Yn=1009,Bh=1010,Hh=1011,Zs=1012,ul=1013,Ai=1014,Pn=1015,Xn=1016,fl=1017,dl=1018,gs=1020,Gh=35902,Vh=1021,Wh=1022,En=1023,Xh=1024,qh=1025,as=1026,xs=1027,pl=1028,ml=1029,Yh=1030,gl=1031,xl=1033,Gr=33776,Vr=33777,Wr=33778,Xr=33779,Ea=35840,Aa=35841,Ca=35842,Ra=35843,Pa=36196,La=37492,Ia=37496,Da=37808,Ua=37809,Na=37810,ka=37811,za=37812,Fa=37813,Oa=37814,Ba=37815,Ha=37816,Ga=37817,Va=37818,Wa=37819,Xa=37820,qa=37821,qr=36492,Ya=36494,$a=36495,$h=36283,ja=36284,Ka=36285,Za=36286,Cf=3200,Rf=3201,jh=0,Pf=1,ii="",fn="srgb",hi="srgb-linear",vl="display-p3",ao="display-p3-linear",Kr="linear",Se="srgb",Zr="rec709",Jr="p3",ki=7680,Zl=519,Lf=512,If=513,Df=514,Kh=515,Uf=516,Nf=517,kf=518,zf=519,Ja=35044,ls=35048,Jl="300 es",Vn=2e3,Qr=2001;class bs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ql=1234567;const Xs=Math.PI/180,vs=180/Math.PI;function Ln(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function _l(i,t){return(i%t+t)%t}function Ff(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Of(i,t,e){return i!==t?(e-i)/(t-i):0}function qs(i,t,e){return(1-e)*i+e*t}function Bf(i,t,e,n){return qs(i,t,1-Math.exp(-e*n))}function Hf(i,t=1){return t-Math.abs(_l(i,t*2)-t)}function Gf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Vf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Wf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Xf(i,t){return i+Math.random()*(t-i)}function qf(i){return i*(.5-Math.random())}function Yf(i){i!==void 0&&(Ql=i);let t=Ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $f(i){return i*Xs}function jf(i){return i*vs}function Kf(i){return(i&i-1)===0&&i!==0}function Zf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qf(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const td={DEG2RAD:Xs,RAD2DEG:vs,generateUUID:Ln,clamp:ze,euclideanModulo:_l,mapLinear:Ff,inverseLerp:Of,lerp:qs,damp:Bf,pingpong:Hf,smoothstep:Gf,smootherstep:Vf,randInt:Wf,randFloat:Xf,randFloatSpread:qf,seededRandom:Yf,degToRad:$f,radToDeg:jf,isPowerOfTwo:Kf,ceilPowerOfTwo:Zf,floorPowerOfTwo:Jf,setQuaternionFromProperEuler:Qf,normalize:Me,denormalize:Tn};class K{constructor(t=0,e=0){K.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,n,s,r,o,a,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],x=s[0],p=s[3],g=s[6],M=s[1],v=s[4],y=s[7],R=s[2],E=s[5],T=s[8];return r[0]=o*x+a*M+l*R,r[3]=o*p+a*v+l*E,r[6]=o*g+a*y+l*T,r[1]=c*x+h*M+u*R,r[4]=c*p+h*v+u*E,r[7]=c*g+h*y+u*T,r[2]=f*x+d*M+m*R,r[5]=f*p+d*v+m*E,r[8]=f*g+d*y+m*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,m=e*u+n*f+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(So.makeScale(t,e)),this}rotate(t){return this.premultiply(So.makeRotation(-t)),this}translate(t,e){return this.premultiply(So.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const So=new Qt;function Zh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function to(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ed(){const i=to("canvas");return i.style.display="block",i}const tc={};function Yr(i){i in tc||(tc[i]=!0,console.warn(i))}function nd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function id(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function sd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ec=new Qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),nc=new Qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rs={[hi]:{transfer:Kr,primaries:Zr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[fn]:{transfer:Se,primaries:Zr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ao]:{transfer:Kr,primaries:Jr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(nc),fromReference:i=>i.applyMatrix3(ec)},[vl]:{transfer:Se,primaries:Jr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(nc),fromReference:i=>i.applyMatrix3(ec).convertLinearToSRGB()}},rd=new Set([hi,ao]),pe={enabled:!0,_workingColorSpace:hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!rd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Rs[t].toReference,s=Rs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Rs[i].primaries},getTransfer:function(i){return i===ii?Kr:Rs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Rs[t].luminanceCoefficients)}};function cs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function To(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let zi;class od{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=to("canvas")),zi.width=t.width,zi.height=t.height;const n=zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=to("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=cs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(cs(e[n]/255)*255):e[n]=cs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ad=0;class Jh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Ln(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Eo(s[o].image)):r.push(Eo(s[o]))}else r=Eo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?od.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ld=0;class Ye extends bs{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=Ti,s=Ti,r=Sn,o=Ei,a=En,l=Yn,c=Ye.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Ln(),this.name="",this.source=new Jh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oi:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case Ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oi:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case Ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Oh;Ye.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],x=l[2],p=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(d+1)/2,R=(g+1)/2,E=(h+f)/4,T=(u+x)/4,L=(m+p)/4;return v>y&&v>R?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=T/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=E/s,r=L/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=T/r,s=L/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-m)*(p-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(p-m)/M,this.y=(u-x)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cd extends bs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class An extends cd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Qh extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hd extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],m=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==m){let p=1-a;const g=l*f+c*d+h*m+u*x,M=g>=0?1:-1,v=1-g*g;if(v>Number.EPSILON){const R=Math.sqrt(v),E=Math.atan2(R,g*M);p=Math.sin(p*E)/R,a=Math.sin(a*E)/R}const y=a*M;if(l=l*p+f*y,c=c*p+d*y,h=h*p+m*y,u=u*p+x*y,p===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-a*d,t[e+2]=c*m+h*d+a*f-l*u,t[e+3]=h*m-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class A{constructor(t=0,e=0,n=0){A.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ic.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ic.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ao.copy(this).projectOnVector(t),this.sub(Ao)}reflect(t){return this.sub(Ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ao=new A,ic=new dn;class Pi{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ur.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ur.copy(n.boundingBox)),ur.applyMatrix4(t.matrixWorld),this.union(ur)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),fr.subVectors(this.max,Ps),Fi.subVectors(t.a,Ps),Oi.subVectors(t.b,Ps),Bi.subVectors(t.c,Ps),Zn.subVectors(Oi,Fi),Jn.subVectors(Bi,Oi),di.subVectors(Fi,Bi);let e=[0,-Zn.z,Zn.y,0,-Jn.z,Jn.y,0,-di.z,di.y,Zn.z,0,-Zn.x,Jn.z,0,-Jn.x,di.z,0,-di.x,-Zn.y,Zn.x,0,-Jn.y,Jn.x,0,-di.y,di.x,0];return!Co(e,Fi,Oi,Bi,fr)||(e=[1,0,0,0,1,0,0,0,1],!Co(e,Fi,Oi,Bi,fr))?!1:(dr.crossVectors(Zn,Jn),e=[dr.x,dr.y,dr.z],Co(e,Fi,Oi,Bi,fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Un=[new A,new A,new A,new A,new A,new A,new A,new A],yn=new A,ur=new Pi,Fi=new A,Oi=new A,Bi=new A,Zn=new A,Jn=new A,di=new A,Ps=new A,fr=new A,dr=new A,pi=new A;function Co(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){pi.fromArray(i,r);const a=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=t.dot(pi),c=e.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ud=new Pi,Ls=new A,Ro=new A;class ws{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ud.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);const e=Ls.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(Ro)),this.expandByPoint(Ls.copy(t.center).sub(Ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new A,Po=new A,pr=new A,Qn=new A,Lo=new A,mr=new A,Io=new A;class yl{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Po.copy(t).add(e).multiplyScalar(.5),pr.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(Po);const r=t.distanceTo(e)*.5,o=-this.direction.dot(pr),a=Qn.dot(this.direction),l=-Qn.dot(pr),c=Qn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=r*h,u>=0)if(f>=-m)if(f<=m){const x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Po).addScaledVector(pr,f),d}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){Lo.subVectors(e,t),mr.subVectors(n,t),Io.crossVectors(Lo,mr);let o=this.direction.dot(Io),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,t);const l=a*this.direction.dot(mr.crossVectors(Qn,mr));if(l<0)return null;const c=a*this.direction.dot(Lo.cross(Qn));if(c<0||l+c>o)return null;const h=-a*Qn.dot(Io);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,m,x,p){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,x,p)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,m,x,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=x,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Hi.setFromMatrixColumn(t,0).length(),r=1/Hi.setFromMatrixColumn(t,1).length(),o=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f+x*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-m,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,m=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,m=a*h,x=a*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=m*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-x*u}else if(t.order==="XZY"){const f=o*l,d=o*c,m=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fd,t,dd)}lookAt(t,e,n){const s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),ti.crossVectors(n,cn),ti.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),ti.crossVectors(n,cn)),ti.normalize(),gr.crossVectors(cn,ti),s[0]=ti.x,s[4]=gr.x,s[8]=cn.x,s[1]=ti.y,s[5]=gr.y,s[9]=cn.y,s[2]=ti.z,s[6]=gr.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],x=n[6],p=n[10],g=n[14],M=n[3],v=n[7],y=n[11],R=n[15],E=s[0],T=s[4],L=s[8],I=s[12],_=s[1],w=s[5],k=s[9],z=s[13],V=s[2],Y=s[6],B=s[10],tt=s[14],W=s[3],gt=s[7],xt=s[11],_t=s[15];return r[0]=o*E+a*_+l*V+c*W,r[4]=o*T+a*w+l*Y+c*gt,r[8]=o*L+a*k+l*B+c*xt,r[12]=o*I+a*z+l*tt+c*_t,r[1]=h*E+u*_+f*V+d*W,r[5]=h*T+u*w+f*Y+d*gt,r[9]=h*L+u*k+f*B+d*xt,r[13]=h*I+u*z+f*tt+d*_t,r[2]=m*E+x*_+p*V+g*W,r[6]=m*T+x*w+p*Y+g*gt,r[10]=m*L+x*k+p*B+g*xt,r[14]=m*I+x*z+p*tt+g*_t,r[3]=M*E+v*_+y*V+R*W,r[7]=M*T+v*w+y*Y+R*gt,r[11]=M*L+v*k+y*B+R*xt,r[15]=M*I+v*z+y*tt+R*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],x=t[7],p=t[11],g=t[15];return m*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+x*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+p*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+g*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],x=t[13],p=t[14],g=t[15],M=u*p*c-x*f*c+x*l*d-a*p*d-u*l*g+a*f*g,v=m*f*c-h*p*c-m*l*d+o*p*d+h*l*g-o*f*g,y=h*x*c-m*u*c+m*a*d-o*x*d-h*a*g+o*u*g,R=m*u*l-h*x*l-m*a*f+o*x*f+h*a*p-o*u*p,E=e*M+n*v+s*y+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=M*T,t[1]=(x*f*r-u*p*r-x*s*d+n*p*d+u*s*g-n*f*g)*T,t[2]=(a*p*r-x*l*r+x*s*c-n*p*c-a*s*g+n*l*g)*T,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*T,t[4]=v*T,t[5]=(h*p*r-m*f*r+m*s*d-e*p*d-h*s*g+e*f*g)*T,t[6]=(m*l*r-o*p*r-m*s*c+e*p*c+o*s*g-e*l*g)*T,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*T,t[8]=y*T,t[9]=(m*u*r-h*x*r-m*n*d+e*x*d+h*n*g-e*u*g)*T,t[10]=(o*x*r-m*a*r+m*n*c-e*x*c-o*n*g+e*a*g)*T,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*T,t[12]=R*T,t[13]=(h*x*s-m*u*s+m*n*f-e*x*f-h*n*p+e*u*p)*T,t[14]=(m*a*s-o*x*s-m*n*l+e*x*l+o*n*p-e*a*p)*T,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,m=r*u,x=o*h,p=o*u,g=a*u,M=l*c,v=l*h,y=l*u,R=n.x,E=n.y,T=n.z;return s[0]=(1-(x+g))*R,s[1]=(d+y)*R,s[2]=(m-v)*R,s[3]=0,s[4]=(d-y)*E,s[5]=(1-(f+g))*E,s[6]=(p+M)*E,s[7]=0,s[8]=(m+v)*T,s[9]=(p-M)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Hi.set(s[0],s[1],s[2]).length();const o=Hi.set(s[4],s[5],s[6]).length(),a=Hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);const c=1/r,h=1/o,u=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=h,Mn.elements[5]*=h,Mn.elements[6]*=h,Mn.elements[8]*=u,Mn.elements[9]*=u,Mn.elements[10]*=u,e.setFromRotationMatrix(Mn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Vn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,m;if(a===Vn)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Qr)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Vn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,d=(n+s)*h;let m,x;if(a===Vn)m=(o+r)*u,x=-2*u;else if(a===Qr)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Hi=new A,Mn=new ne,fd=new A(0,0,0),dd=new A(1,1,1),ti=new A,gr=new A,cn=new A,sc=new ne,rc=new dn;class $e{constructor(t=0,e=0,n=0,s=$e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rc.setFromEuler(this),this.setFromQuaternion(rc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$e.DEFAULT_ORDER="XYZ";class Ml{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pd=0;const oc=new A,Gi=new dn,kn=new ne,xr=new A,Is=new A,md=new A,gd=new dn,ac=new A(1,0,0),lc=new A(0,1,0),cc=new A(0,0,1),hc={type:"added"},xd={type:"removed"},Vi={type:"childadded",child:null},Do={type:"childremoved",child:null};class De extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new A,e=new $e,n=new dn,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Qt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(ac,t)}rotateY(t){return this.rotateOnAxis(lc,t)}rotateZ(t){return this.rotateOnAxis(cc,t)}translateOnAxis(t,e){return oc.copy(t).applyQuaternion(this.quaternion),this.position.add(oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ac,t)}translateY(t){return this.translateOnAxis(lc,t)}translateZ(t){return this.translateOnAxis(cc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xr.copy(t):xr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Is,xr,this.up):kn.lookAt(xr,Is,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(kn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xd),Do.child=t,this.dispatchEvent(Do),Do.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,md),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,gd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}De.DEFAULT_UP=new A(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new A,zn=new A,Uo=new A,Fn=new A,Wi=new A,Xi=new A,uc=new A,No=new A,ko=new A,zo=new A,Fo=new be,Oo=new be,Bo=new be;class xn{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),bn.subVectors(t,e),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){bn.subVectors(s,e),zn.subVectors(n,e),Uo.subVectors(t,e);const o=bn.dot(bn),a=bn.dot(zn),l=bn.dot(Uo),c=zn.dot(zn),h=zn.dot(Uo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Fo.setScalar(0),Oo.setScalar(0),Bo.setScalar(0),Fo.fromBufferAttribute(t,e),Oo.fromBufferAttribute(t,n),Bo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Fo,r.x),o.addScaledVector(Oo,r.y),o.addScaledVector(Bo,r.z),o}static isFrontFacing(t,e,n,s){return bn.subVectors(n,e),zn.subVectors(t,e),bn.cross(zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),bn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Wi.subVectors(s,n),Xi.subVectors(r,n),No.subVectors(t,n);const l=Wi.dot(No),c=Xi.dot(No);if(l<=0&&c<=0)return e.copy(n);ko.subVectors(t,s);const h=Wi.dot(ko),u=Xi.dot(ko);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Wi,o);zo.subVectors(t,r);const d=Wi.dot(zo),m=Xi.dot(zo);if(m>=0&&d<=m)return e.copy(r);const x=d*c-l*m;if(x<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Xi,a);const p=h*m-d*u;if(p<=0&&u-h>=0&&d-m>=0)return uc.subVectors(r,s),a=(u-h)/(u-h+(d-m)),e.copy(s).addScaledVector(uc,a);const g=1/(p+x+f);return o=x*g,a=f*g,e.copy(n).addScaledVector(Wi,o).addScaledVector(Xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Ho(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class st{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=pe.workingColorSpace){if(t=_l(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ho(o,r,t+1/3),this.g=Ho(o,r,t),this.b=Ho(o,r,t-1/3)}return pe.toWorkingColorSpace(this,s),this}setStyle(t,e=fn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const n=tu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}copyLinearToSRGB(t){return this.r=To(t.r),this.g=To(t.g),this.b=To(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return pe.fromWorkingColorSpace(Xe.copy(this),t),Math.round(ze(Xe.r*255,0,255))*65536+Math.round(ze(Xe.g*255,0,255))*256+Math.round(ze(Xe.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(Xe.copy(this),e);const n=Xe.r,s=Xe.g,r=Xe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=fn){pe.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,s=Xe.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(vr);const n=qs(ei.h,vr.h,e),s=qs(ei.s,vr.s,e),r=qs(ei.l,vr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new st;st.NAMES=tu;let vd=0;class Li extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=os,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pa,this.blendDst=ma,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==os&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pa&&(n.blendSrc=this.blendSrc),this.blendDst!==ma&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xe extends Li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=Dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ke=new A,_r=new K;class Ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ja,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_r.fromBufferAttribute(this,e),_r.applyMatrix3(t),this.setXY(e,_r.x,_r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ja&&(t.usage=this.usage),t}}class eu extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nu extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Kt extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let _d=0;const mn=new ne,Go=new De,qi=new A,hn=new Pi,Ds=new Pi,He=new A;class Te extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zh(t)?nu:eu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return Go.lookAt(t),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Kt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(He.addVectors(hn.min,Ds.min),hn.expandByPoint(He),He.addVectors(hn.max,Ds.max),hn.expandByPoint(He)):(hn.expandByPoint(Ds.min),hn.expandByPoint(Ds.max))}hn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)He.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(He));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)He.fromBufferAttribute(a,c),l&&(qi.fromBufferAttribute(t,c),He.add(qi)),s=Math.max(s,n.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new A,l[L]=new A;const c=new A,h=new A,u=new A,f=new K,d=new K,m=new K,x=new A,p=new A;function g(L,I,_){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,_),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,I),m.fromBufferAttribute(r,_),h.sub(c),u.sub(c),d.sub(f),m.sub(f);const w=1/(d.x*m.y-m.x*d.y);isFinite(w)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(w),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(w),a[L].add(x),a[I].add(x),a[_].add(x),l[L].add(p),l[I].add(p),l[_].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let L=0,I=M.length;L<I;++L){const _=M[L],w=_.start,k=_.count;for(let z=w,V=w+k;z<V;z+=3)g(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const v=new A,y=new A,R=new A,E=new A;function T(L){R.fromBufferAttribute(s,L),E.copy(R);const I=a[L];v.copy(I),v.sub(R.multiplyScalar(R.dot(I))).normalize(),y.crossVectors(E,I);const w=y.dot(l[L])<0?-1:1;o.setXYZW(L,v.x,v.y,v.z,w)}for(let L=0,I=M.length;L<I;++L){const _=M[L],w=_.start,k=_.count;for(let z=w,V=w+k;z<V;z+=3)T(t.getX(z+0)),T(t.getX(z+1)),T(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,h=new A,u=new A;if(t)for(let f=0,d=t.count;f<d;f+=3){const m=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,m=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let g=0;g<h;g++)f[m++]=c[d++]}return new Ue(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fc=new ne,mi=new yl,yr=new ws,dc=new A,Mr=new A,br=new A,wr=new A,Vo=new A,Sr=new A,pc=new A,Tr=new A;class rt extends De{constructor(t=new Te,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Sr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Vo.fromBufferAttribute(u,t),o?Sr.addScaledVector(Vo,h):Sr.addScaledVector(Vo.sub(e),h))}e.add(Sr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(r),mi.copy(t.ray).recast(t.near),!(yr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(yr,dc)===null||mi.origin.distanceToSquared(dc)>(t.far-t.near)**2))&&(fc.copy(r).invert(),mi.copy(t.ray).applyMatrix4(fc),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const p=f[m],g=o[p.materialIndex],M=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,R=v;y<R;y+=3){const E=a.getX(y),T=a.getX(y+1),L=a.getX(y+2);s=Er(this,g,t,n,c,h,u,E,T,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){const M=a.getX(p),v=a.getX(p+1),y=a.getX(p+2);s=Er(this,o,t,n,c,h,u,M,v,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,x=f.length;m<x;m++){const p=f[m],g=o[p.materialIndex],M=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let y=M,R=v;y<R;y+=3){const E=y,T=y+1,L=y+2;s=Er(this,g,t,n,c,h,u,E,T,L),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=m,g=x;p<g;p+=3){const M=p,v=p+1,y=p+2;s=Er(this,o,t,n,c,h,u,M,v,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function yd(i,t,e,n,s,r,o,a){let l;if(t.side===Fe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===qn,a),l===null)return null;Tr.copy(a),Tr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Tr);return c<e.near||c>e.far?null:{distance:c,point:Tr.clone(),object:i}}function Er(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Mr),i.getVertexPosition(l,br),i.getVertexPosition(c,wr);const h=yd(i,t,e,n,Mr,br,wr,pc);if(h){const u=new A;xn.getBarycoord(pc,Mr,br,wr,u),s&&(h.uv=xn.getInterpolatedAttribute(s,a,l,c,u,new K)),r&&(h.uv1=xn.getInterpolatedAttribute(r,a,l,c,u,new K)),o&&(h.normal=xn.getInterpolatedAttribute(o,a,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new A,materialIndex:0};xn.getNormal(Mr,br,wr,f.normal),h.face=f,h.barycoord=u}return h}class Et extends Te{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function m(x,p,g,M,v,y,R,E,T,L,I){const _=y/T,w=R/L,k=y/2,z=R/2,V=E/2,Y=T+1,B=L+1;let tt=0,W=0;const gt=new A;for(let xt=0;xt<B;xt++){const _t=xt*w-z;for(let te=0;te<Y;te++){const se=te*_-k;gt[x]=se*M,gt[p]=_t*v,gt[g]=V,c.push(gt.x,gt.y,gt.z),gt[x]=0,gt[p]=0,gt[g]=E>0?1:-1,h.push(gt.x,gt.y,gt.z),u.push(te/T),u.push(1-xt/L),tt+=1}}for(let xt=0;xt<L;xt++)for(let _t=0;_t<T;_t++){const te=f+_t+Y*xt,se=f+_t+Y*(xt+1),Z=f+(_t+1)+Y*(xt+1),at=f+(_t+1)+Y*xt;l.push(te,se,at),l.push(se,Z,at),W+=6}a.addGroup(d,W,I),d+=W,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Et(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function _s(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ze(i){const t={};for(let e=0;e<i.length;e++){const n=_s(i[e]);for(const s in n)t[s]=n[s]}return t}function Md(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function iu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const Js={clone:_s,merge:Ze};var bd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qe extends Li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bd,this.fragmentShader=wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=Md(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class su extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new A,mc=new K,gc=new K;class rn extends su{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,mc,gc),e.subVectors(gc,mc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Yi=-90,$i=1;class Sd extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(Yi,$i,t,e);s.layers=this.layers,this.add(s);const r=new rn(Yi,$i,t,e);r.layers=this.layers,this.add(r);const o=new rn(Yi,$i,t,e);o.layers=this.layers,this.add(o);const a=new rn(Yi,$i,t,e);a.layers=this.layers,this.add(a);const l=new rn(Yi,$i,t,e);l.layers=this.layers,this.add(l);const c=new rn(Yi,$i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class ru extends Ye{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ps,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Td extends An{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ru(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Et(5,5,5),r=new Qe({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Wn});r.uniforms.tEquirect.value=e;const o=new rt(s,r),a=e.minFilter;return e.minFilter===Ei&&(e.minFilter=Sn),new Sd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Wo=new A,Ed=new A,Ad=new Qt;class Mi{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Wo.subVectors(n,e).cross(Ed.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Wo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ad.getNormalMatrix(t),s=this.coplanarPoint(Wo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new ws,Ar=new A;class bl{constructor(t=new Mi,e=new Mi,n=new Mi,s=new Mi,r=new Mi,o=new Mi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],m=s[9],x=s[10],p=s[11],g=s[12],M=s[13],v=s[14],y=s[15];if(n[0].setComponents(l-r,f-c,p-d,y-g).normalize(),n[1].setComponents(l+r,f+c,p+d,y+g).normalize(),n[2].setComponents(l+o,f+h,p+m,y+M).normalize(),n[3].setComponents(l-o,f-h,p-m,y-M).normalize(),n[4].setComponents(l-a,f-u,p-x,y-v).normalize(),e===Vn)n[5].setComponents(l+a,f+u,p+x,y+v).normalize();else if(e===Qr)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ar.x=s.normal.x>0?t.max.x:t.min.x,Ar.y=s.normal.y>0?t.max.y:t.min.y,Ar.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ou(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Cd(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){const m=u[f],x=u[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){const x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ve extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],m=[],x=[],p=[];for(let g=0;g<h;g++){const M=g*f-o;for(let v=0;v<c;v++){const y=v*u-r;m.push(y,-M,0),x.push(0,0,1),p.push(v/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){const v=M+c*g,y=M+c*(g+1),R=M+1+c*(g+1),E=M+1+c*g;d.push(v,y,E),d.push(y,R,E)}this.setIndex(d),this.setAttribute("position",new Kt(m,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.width,t.height,t.widthSegments,t.heightSegments)}}var Rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pd=`#ifdef USE_ALPHAHASH
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
#endif`,Ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nd=`#ifdef USE_AOMAP
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
#endif`,kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zd=`#ifdef USE_BATCHING
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
#endif`,Fd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gd=`#ifdef USE_IRIDESCENCE
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
#endif`,Vd=`#ifdef USE_BUMPMAP
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
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jd=`#define PI 3.141592653589793
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
} // validated`,Qd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tp=`vec3 transformedNormal = objectNormal;
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
#endif`,ep=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",op=`
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
}`,ap=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gp=`#ifdef USE_GRADIENTMAP
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
}`,xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yp=`uniform bool receiveShadow;
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
#endif`,Mp=`#ifdef USE_ENVMAP
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
#endif`,bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ep=`PhysicalMaterial material;
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
#endif`,Ap=`struct PhysicalMaterial {
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
}`,Cp=`
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
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ip=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fp=`#if defined( USE_POINTS_UV )
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
#endif`,Op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zp=`#ifdef USE_NORMALMAP
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
#endif`,Jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,d0=`float getShadowMask() {
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
}`,p0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,g0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x0=`#ifdef USE_SKINNING
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
#endif`,v0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b0=`#ifdef USE_TRANSMISSION
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
#endif`,w0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R0=`uniform sampler2D t2D;
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`#include <common>
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
}`,N0=`#if DEPTH_PACKING == 3200
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
}`,k0=`#define DISTANCE
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
}`,z0=`#define DISTANCE
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`uniform float scale;
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
}`,H0=`uniform vec3 diffuse;
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
}`,G0=`#include <common>
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
}`,V0=`uniform vec3 diffuse;
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
}`,W0=`#define LAMBERT
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
}`,X0=`#define LAMBERT
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
}`,q0=`#define MATCAP
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
}`,Y0=`#define MATCAP
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
}`,$0=`#define NORMAL
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
}`,j0=`#define NORMAL
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
}`,K0=`#define PHONG
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
}`,Z0=`#define PHONG
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
}`,J0=`#define STANDARD
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
}`,Q0=`#define STANDARD
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
}`,tm=`#define TOON
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
}`,em=`#define TOON
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
}`,nm=`uniform float size;
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
}`,im=`uniform vec3 diffuse;
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
}`,sm=`#include <common>
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
}`,rm=`uniform vec3 color;
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
}`,om=`uniform float rotation;
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
}`,am=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Rd,alphahash_pars_fragment:Pd,alphamap_fragment:Ld,alphamap_pars_fragment:Id,alphatest_fragment:Dd,alphatest_pars_fragment:Ud,aomap_fragment:Nd,aomap_pars_fragment:kd,batching_pars_vertex:zd,batching_vertex:Fd,begin_vertex:Od,beginnormal_vertex:Bd,bsdfs:Hd,iridescence_fragment:Gd,bumpmap_pars_fragment:Vd,clipping_planes_fragment:Wd,clipping_planes_pars_fragment:Xd,clipping_planes_pars_vertex:qd,clipping_planes_vertex:Yd,color_fragment:$d,color_pars_fragment:jd,color_pars_vertex:Kd,color_vertex:Zd,common:Jd,cube_uv_reflection_fragment:Qd,defaultnormal_vertex:tp,displacementmap_pars_vertex:ep,displacementmap_vertex:np,emissivemap_fragment:ip,emissivemap_pars_fragment:sp,colorspace_fragment:rp,colorspace_pars_fragment:op,envmap_fragment:ap,envmap_common_pars_fragment:lp,envmap_pars_fragment:cp,envmap_pars_vertex:hp,envmap_physical_pars_fragment:Mp,envmap_vertex:up,fog_vertex:fp,fog_pars_vertex:dp,fog_fragment:pp,fog_pars_fragment:mp,gradientmap_pars_fragment:gp,lightmap_pars_fragment:xp,lights_lambert_fragment:vp,lights_lambert_pars_fragment:_p,lights_pars_begin:yp,lights_toon_fragment:bp,lights_toon_pars_fragment:wp,lights_phong_fragment:Sp,lights_phong_pars_fragment:Tp,lights_physical_fragment:Ep,lights_physical_pars_fragment:Ap,lights_fragment_begin:Cp,lights_fragment_maps:Rp,lights_fragment_end:Pp,logdepthbuf_fragment:Lp,logdepthbuf_pars_fragment:Ip,logdepthbuf_pars_vertex:Dp,logdepthbuf_vertex:Up,map_fragment:Np,map_pars_fragment:kp,map_particle_fragment:zp,map_particle_pars_fragment:Fp,metalnessmap_fragment:Op,metalnessmap_pars_fragment:Bp,morphinstance_vertex:Hp,morphcolor_vertex:Gp,morphnormal_vertex:Vp,morphtarget_pars_vertex:Wp,morphtarget_vertex:Xp,normal_fragment_begin:qp,normal_fragment_maps:Yp,normal_pars_fragment:$p,normal_pars_vertex:jp,normal_vertex:Kp,normalmap_pars_fragment:Zp,clearcoat_normal_fragment_begin:Jp,clearcoat_normal_fragment_maps:Qp,clearcoat_pars_fragment:t0,iridescence_pars_fragment:e0,opaque_fragment:n0,packing:i0,premultiplied_alpha_fragment:s0,project_vertex:r0,dithering_fragment:o0,dithering_pars_fragment:a0,roughnessmap_fragment:l0,roughnessmap_pars_fragment:c0,shadowmap_pars_fragment:h0,shadowmap_pars_vertex:u0,shadowmap_vertex:f0,shadowmask_pars_fragment:d0,skinbase_vertex:p0,skinning_pars_vertex:m0,skinning_vertex:g0,skinnormal_vertex:x0,specularmap_fragment:v0,specularmap_pars_fragment:_0,tonemapping_fragment:y0,tonemapping_pars_fragment:M0,transmission_fragment:b0,transmission_pars_fragment:w0,uv_pars_fragment:S0,uv_pars_vertex:T0,uv_vertex:E0,worldpos_vertex:A0,background_vert:C0,background_frag:R0,backgroundCube_vert:P0,backgroundCube_frag:L0,cube_vert:I0,cube_frag:D0,depth_vert:U0,depth_frag:N0,distanceRGBA_vert:k0,distanceRGBA_frag:z0,equirect_vert:F0,equirect_frag:O0,linedashed_vert:B0,linedashed_frag:H0,meshbasic_vert:G0,meshbasic_frag:V0,meshlambert_vert:W0,meshlambert_frag:X0,meshmatcap_vert:q0,meshmatcap_frag:Y0,meshnormal_vert:$0,meshnormal_frag:j0,meshphong_vert:K0,meshphong_frag:Z0,meshphysical_vert:J0,meshphysical_frag:Q0,meshtoon_vert:tm,meshtoon_frag:em,points_vert:nm,points_frag:im,shadow_vert:sm,shadow_frag:rm,sprite_vert:om,sprite_frag:am},pt={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Rn={basic:{uniforms:Ze([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Ze([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new st(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Ze([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Ze([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Ze([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new st(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Ze([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Ze([pt.points,pt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Ze([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Ze([pt.common,pt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Ze([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Ze([pt.sprite,pt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Ze([pt.common,pt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Ze([pt.lights,pt.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Rn.physical={uniforms:Ze([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Cr={r:0,b:0,g:0},xi=new $e,lm=new ne;function cm(i,t,e,n,s,r,o){const a=new st(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function x(M){let v=!1;const y=m(M);y===null?g(a,l):y&&y.isColor&&(g(y,1),v=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,v){const y=m(v);y&&(y.isCubeTexture||y.mapping===oo)?(h===void 0&&(h=new rt(new Et(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:_s(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),xi.copy(v.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lm.makeRotationFromEuler(xi)),h.material.toneMapped=pe.getTransfer(y.colorSpace)!==Se,(u!==y||f!==y.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new rt(new ve(2,2),new Qe({name:"BackgroundMaterial",uniforms:_s(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=pe.getTransfer(y.colorSpace)!==Se,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,v){M.getRGB(Cr,iu(i)),n.buffers.color.setClear(Cr.r,Cr.g,Cr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,g(a,l)},render:x,addToRenderList:p}}function hm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(_,w,k,z,V){let Y=!1;const B=u(z,k,w);r!==B&&(r=B,c(r.object)),Y=d(_,z,k,V),Y&&m(_,z,k,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(_,w,k,z),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,w,k){const z=k.wireframe===!0;let V=n[_.id];V===void 0&&(V={},n[_.id]=V);let Y=V[w.id];Y===void 0&&(Y={},V[w.id]=Y);let B=Y[z];return B===void 0&&(B=f(l()),Y[z]=B),B}function f(_){const w=[],k=[],z=[];for(let V=0;V<e;V++)w[V]=0,k[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:k,attributeDivisors:z,object:_,attributes:{},index:null}}function d(_,w,k,z){const V=r.attributes,Y=w.attributes;let B=0;const tt=k.getAttributes();for(const W in tt)if(tt[W].location>=0){const xt=V[W];let _t=Y[W];if(_t===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(_t=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(_t=_.instanceColor)),xt===void 0||xt.attribute!==_t||_t&&xt.data!==_t.data)return!0;B++}return r.attributesNum!==B||r.index!==z}function m(_,w,k,z){const V={},Y=w.attributes;let B=0;const tt=k.getAttributes();for(const W in tt)if(tt[W].location>=0){let xt=Y[W];xt===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(xt=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(xt=_.instanceColor));const _t={};_t.attribute=xt,xt&&xt.data&&(_t.data=xt.data),V[W]=_t,B++}r.attributes=V,r.attributesNum=B,r.index=z}function x(){const _=r.newAttributes;for(let w=0,k=_.length;w<k;w++)_[w]=0}function p(_){g(_,0)}function g(_,w){const k=r.newAttributes,z=r.enabledAttributes,V=r.attributeDivisors;k[_]=1,z[_]===0&&(i.enableVertexAttribArray(_),z[_]=1),V[_]!==w&&(i.vertexAttribDivisor(_,w),V[_]=w)}function M(){const _=r.newAttributes,w=r.enabledAttributes;for(let k=0,z=w.length;k<z;k++)w[k]!==_[k]&&(i.disableVertexAttribArray(k),w[k]=0)}function v(_,w,k,z,V,Y,B){B===!0?i.vertexAttribIPointer(_,w,k,V,Y):i.vertexAttribPointer(_,w,k,z,V,Y)}function y(_,w,k,z){x();const V=z.attributes,Y=k.getAttributes(),B=w.defaultAttributeValues;for(const tt in Y){const W=Y[tt];if(W.location>=0){let gt=V[tt];if(gt===void 0&&(tt==="instanceMatrix"&&_.instanceMatrix&&(gt=_.instanceMatrix),tt==="instanceColor"&&_.instanceColor&&(gt=_.instanceColor)),gt!==void 0){const xt=gt.normalized,_t=gt.itemSize,te=t.get(gt);if(te===void 0)continue;const se=te.buffer,Z=te.type,at=te.bytesPerElement,Pt=Z===i.INT||Z===i.UNSIGNED_INT||gt.gpuType===ul;if(gt.isInterleavedBufferAttribute){const mt=gt.data,Ht=mt.stride,Bt=gt.offset;if(mt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<W.locationSize;Yt++)g(W.location+Yt,mt.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Yt=0;Yt<W.locationSize;Yt++)p(W.location+Yt);i.bindBuffer(i.ARRAY_BUFFER,se);for(let Yt=0;Yt<W.locationSize;Yt++)v(W.location+Yt,_t/W.locationSize,Z,xt,Ht*at,(Bt+_t/W.locationSize*Yt)*at,Pt)}else{if(gt.isInstancedBufferAttribute){for(let mt=0;mt<W.locationSize;mt++)g(W.location+mt,gt.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let mt=0;mt<W.locationSize;mt++)p(W.location+mt);i.bindBuffer(i.ARRAY_BUFFER,se);for(let mt=0;mt<W.locationSize;mt++)v(W.location+mt,_t/W.locationSize,Z,xt,_t*at,_t/W.locationSize*mt*at,Pt)}}else if(B!==void 0){const xt=B[tt];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(W.location,xt);break;case 3:i.vertexAttrib3fv(W.location,xt);break;case 4:i.vertexAttrib4fv(W.location,xt);break;default:i.vertexAttrib1fv(W.location,xt)}}}}M()}function R(){L();for(const _ in n){const w=n[_];for(const k in w){const z=w[k];for(const V in z)h(z[V].object),delete z[V];delete w[k]}delete n[_]}}function E(_){if(n[_.id]===void 0)return;const w=n[_.id];for(const k in w){const z=w[k];for(const V in z)h(z[V].object),delete z[V];delete w[k]}delete n[_.id]}function T(_){for(const w in n){const k=n[w];if(k[_.id]===void 0)continue;const z=k[_.id];for(const V in z)h(z[V].object),delete z[V];delete k[_.id]}}function L(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:I,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:M}}function um(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x];for(let x=0;x<f.length;x++)e.update(m,n,f[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==En&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const L=T===Xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Yn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Pn&&!L)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const T=t.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:R,maxSamples:E}}function dm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Mi,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const m=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,g=i.get(u);if(!s||m===null||m.length===0||r&&!p)r?h(null):c();else{const M=r?0:n,v=M*4;let y=g.clippingState||null;l.value=y,y=h(m,f,v,d);for(let R=0;R!==v;++R)y[R]=e[R];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=l.value,m!==!0||p===null){const g=d+x*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,y=d;v!==x;++v,y+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function pm(i){let t=new WeakMap;function e(o,a){return a===wa?o.mapping=ps:a===Sa&&(o.mapping=ms),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===wa||a===Sa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Td(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class wl extends su{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ns=4,xc=[.125,.215,.35,.446,.526,.582],Si=20,Xo=new wl,vc=new st;let qo=null,Yo=0,$o=0,jo=!1;const bi=(1+Math.sqrt(5))/2,ji=1/bi,_c=[new A(-bi,ji,0),new A(bi,ji,0),new A(-ji,0,bi),new A(ji,0,bi),new A(0,bi,-ji),new A(0,bi,ji),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)];class Qa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){qo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qo,Yo,$o),this._renderer.xr.enabled=jo,t.scissorTest=!1,Rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ps||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Xn,format:En,colorSpace:hi,depthBuffer:!1},s=yc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mm(r)),this._blurMaterial=gm(r,t,e)}return s}_compileMaterial(t){const e=new rt(this._lodPlanes[0],t);this._renderer.compile(e,Xo)}_sceneToCubeUV(t,e,n,s){const a=new rn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(vc),h.toneMapping=si,h.autoClear=!1;const d=new xe({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),m=new rt(new Et,d);let x=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,x=!0):(d.color.copy(vc),x=!0);for(let g=0;g<6;g++){const M=g%3;M===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):M===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const v=this._cubeSize;Rr(s,M*v,g>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ps||t.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new rt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Rr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Xo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_c[(s-r-1)%_c.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new rt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Si-1),x=r/m,p=isFinite(r)?1+Math.floor(h*x):Si;p>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Si}`);const g=[];let M=0;for(let T=0;T<Si;++T){const L=T/x,I=Math.exp(-L*L/2);g.push(I),T===0?M+=I:T<p&&(M+=2*I)}for(let T=0;T<g.length;T++)g[T]=g[T]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=m,f.mipInt.value=v-n;const y=this._sizeLods[s],R=3*y*(s>v-ns?s-v+ns:0),E=4*(this._cubeSize-y);Rr(e,R,E,3*y,2*y),l.setRenderTarget(e),l.render(u,Xo)}}function mm(i){const t=[],e=[],n=[];let s=i;const r=i-ns+1+xc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ns?l=xc[o-i+ns-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,x=3,p=2,g=1,M=new Float32Array(x*m*d),v=new Float32Array(p*m*d),y=new Float32Array(g*m*d);for(let E=0;E<d;E++){const T=E%3*2/3-1,L=E>2?0:-1,I=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];M.set(I,x*m*E),v.set(f,p*m*E);const _=[E,E,E,E,E,E];y.set(_,g*m*E)}const R=new Te;R.setAttribute("position",new Ue(M,x)),R.setAttribute("uv",new Ue(v,p)),R.setAttribute("faceIndex",new Ue(y,g)),t.push(R),s>ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yc(i,t,e){const n=new An(i,t,e);return n.texture.mapping=oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function gm(i,t,e){const n=new Float32Array(Si),s=new A(0,1,0);return new Qe({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Mc(){return new Qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sl(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function bc(){return new Qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Sl(){return`

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
	`}function xm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===wa||l===Sa,h=l===ps||l===ms;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Qa(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Qa(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function vm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Yr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _m(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);for(const m in f.morphAttributes){const x=f.morphAttributes[m];for(let p=0,g=x.length;p<g;p++)t.remove(x[p])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const m in f)t.update(f[m],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const m in d){const x=d[m];for(let p=0,g=x.length;p<g;p++)t.update(x[p],i.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,m=u.attributes.position;let x=0;if(d!==null){const M=d.array;x=d.version;for(let v=0,y=M.length;v<y;v+=3){const R=M[v+0],E=M[v+1],T=M[v+2];f.push(R,E,E,T,T,R)}}else if(m!==void 0){const M=m.array;x=m.version;for(let v=0,y=M.length/3-1;v<y;v+=3){const R=v+0,E=v+1,T=v+2;f.push(R,E,E,T,T,R)}}else return;const p=new(Zh(f)?nu:eu)(f,1);p.version=x;const g=r.get(u);g&&t.remove(g),r.set(u,p)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function ym(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,f*o,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let p=0;for(let g=0;g<m;g++)p+=d[g];e.update(p,n,1)}function u(f,d,m,x){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f.length;g++)c(f[g]/o,d[g],x[g]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,m);let g=0;for(let M=0;M<m;M++)g+=d[M];for(let M=0;M<x.length;M++)e.update(g,n,x[M])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Mm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function bm(i,t,e){const n=new WeakMap,s=new be;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let _=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var d=_;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;m===!0&&(y=1),x===!0&&(y=2),p===!0&&(y=3);let R=a.attributes.position.count*y,E=1;R>t.maxTextureSize&&(E=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const T=new Float32Array(R*E*4*u),L=new Qh(T,R,E,u);L.type=Pn,L.needsUpdate=!0;const I=y*4;for(let w=0;w<u;w++){const k=g[w],z=M[w],V=v[w],Y=R*E*4*w;for(let B=0;B<k.count;B++){const tt=B*I;m===!0&&(s.fromBufferAttribute(k,B),T[Y+tt+0]=s.x,T[Y+tt+1]=s.y,T[Y+tt+2]=s.z,T[Y+tt+3]=0),x===!0&&(s.fromBufferAttribute(z,B),T[Y+tt+4]=s.x,T[Y+tt+5]=s.y,T[Y+tt+6]=s.z,T[Y+tt+7]=0),p===!0&&(s.fromBufferAttribute(V,B),T[Y+tt+8]=s.x,T[Y+tt+9]=s.y,T[Y+tt+10]=s.z,T[Y+tt+11]=V.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new K(R,E)},n.set(a,f),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function wm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class au extends Ye{constructor(t,e,n,s,r,o,a,l,c,h=as){if(h!==as&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===as&&(n=Ai),n===void 0&&h===xs&&(n=gs),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const lu=new Ye,wc=new au(1,1),cu=new Qh,hu=new hd,uu=new ru,Sc=[],Tc=[],Ec=new Float32Array(16),Ac=new Float32Array(9),Cc=new Float32Array(4);function Ss(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Sc[s];if(r===void 0&&(r=new Float32Array(s),Sc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function lo(i,t){let e=Tc[t];e===void 0&&(e=new Int32Array(t),Tc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Sm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function Cm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Cc.set(n),i.uniformMatrix2fv(this.addr,!1,Cc),Be(e,n)}}function Rm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Ac.set(n),i.uniformMatrix3fv(this.addr,!1,Ac),Be(e,n)}}function Pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Ec.set(n),i.uniformMatrix4fv(this.addr,!1,Ec),Be(e,n)}}function Lm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function Nm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function Om(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(wc.compareFunction=Kh,r=wc):r=lu,e.setTexture2D(t||r,s)}function Bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hu,s)}function Hm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||uu,s)}function Gm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||cu,s)}function Vm(i){switch(i){case 5126:return Sm;case 35664:return Tm;case 35665:return Em;case 35666:return Am;case 35674:return Cm;case 35675:return Rm;case 35676:return Pm;case 5124:case 35670:return Lm;case 35667:case 35671:return Im;case 35668:case 35672:return Dm;case 35669:case 35673:return Um;case 5125:return Nm;case 36294:return km;case 36295:return zm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return Hm;case 36289:case 36303:case 36311:case 36292:return Gm}}function Wm(i,t){i.uniform1fv(this.addr,t)}function Xm(i,t){const e=Ss(t,this.size,2);i.uniform2fv(this.addr,e)}function qm(i,t){const e=Ss(t,this.size,3);i.uniform3fv(this.addr,e)}function Ym(i,t){const e=Ss(t,this.size,4);i.uniform4fv(this.addr,e)}function $m(i,t){const e=Ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function jm(i,t){const e=Ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Km(i,t){const e=Ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zm(i,t){i.uniform1iv(this.addr,t)}function Jm(i,t){i.uniform2iv(this.addr,t)}function Qm(i,t){i.uniform3iv(this.addr,t)}function tg(i,t){i.uniform4iv(this.addr,t)}function eg(i,t){i.uniform1uiv(this.addr,t)}function ng(i,t){i.uniform2uiv(this.addr,t)}function ig(i,t){i.uniform3uiv(this.addr,t)}function sg(i,t){i.uniform4uiv(this.addr,t)}function rg(i,t,e){const n=this.cache,s=t.length,r=lo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||lu,r[o])}function og(i,t,e){const n=this.cache,s=t.length,r=lo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||hu,r[o])}function ag(i,t,e){const n=this.cache,s=t.length,r=lo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||uu,r[o])}function lg(i,t,e){const n=this.cache,s=t.length,r=lo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||cu,r[o])}function cg(i){switch(i){case 5126:return Wm;case 35664:return Xm;case 35665:return qm;case 35666:return Ym;case 35674:return $m;case 35675:return jm;case 35676:return Km;case 5124:case 35670:return Zm;case 35667:case 35671:return Jm;case 35668:case 35672:return Qm;case 35669:case 35673:return tg;case 5125:return eg;case 36294:return ng;case 36295:return ig;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return lg}}class hg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vm(e.type)}}class ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cg(e.type)}}class fg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function Rc(i,t){i.seq.push(t),i.map[t.id]=t}function dg(i,t,e){const n=i.name,s=n.length;for(Ko.lastIndex=0;;){const r=Ko.exec(n),o=Ko.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Rc(e,c===void 0?new hg(a,i,t):new ug(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new fg(a),Rc(e,u)),e=u}}}class $r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);dg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Pc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const pg=37297;let mg=0;function gg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function xg(i){const t=pe.getPrimaries(pe.workingColorSpace),e=pe.getPrimaries(i);let n;switch(t===e?n="":t===Jr&&e===Zr?n="LinearDisplayP3ToLinearSRGB":t===Zr&&e===Jr&&(n="LinearSRGBToLinearDisplayP3"),i){case hi:case ao:return[n,"LinearTransferOETF"];case fn:case vl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Lc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+gg(i.getShaderSource(t),o)}else return s}function vg(i,t){const e=xg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function _g(i,t){let e;switch(t){case Uh:e="Linear";break;case Nh:e="Reinhard";break;case kh:e="Cineon";break;case hl:e="ACESFilmic";break;case zh:e="AgX";break;case Fh:e="Neutral";break;case Ef:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Pr=new A;function yg(){pe.getLuminanceCoefficients(Pr);const i=Pr.x.toFixed(4),t=Pr.y.toFixed(4),e=Pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function bg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Vs(i){return i!==""}function Ic(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(i){return i.replace(Sg,Eg)}const Tg=new Map;function Eg(i,t){let e=Jt[t];if(e===void 0){const n=Tg.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return tl(e)}const Ag=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uc(i){return i.replace(Ag,Cg)}function Cg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ih?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function Pg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ps:case ms:t="ENVMAP_TYPE_CUBE";break;case oo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ms:t="ENVMAP_MODE_REFRACTION";break}return t}function Ig(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dh:t="ENVMAP_BLENDING_MULTIPLY";break;case Sf:t="ENVMAP_BLENDING_MIX";break;case Tf:t="ENVMAP_BLENDING_ADD";break}return t}function Dg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ug(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Rg(e),c=Pg(e),h=Lg(e),u=Ig(e),f=Dg(e),d=Mg(e),m=bg(r),x=s.createProgram();let p,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Vs).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Vs).join(`
`),g.length>0&&(g+=`
`)):(p=[Nc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),g=[Nc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?Jt.tonemapping_pars_fragment:"",e.toneMapping!==si?_g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,vg("linearToOutputTexel",e.outputColorSpace),yg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vs).join(`
`)),o=tl(o),o=Ic(o,e),o=Dc(o,e),a=tl(a),a=Ic(a,e),a=Dc(a,e),o=Uc(o),a=Uc(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=M+p+o,y=M+g+a,R=Pc(s,s.VERTEX_SHADER,v),E=Pc(s,s.FRAGMENT_SHADER,y);s.attachShader(x,R),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(w){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(R).trim(),V=s.getShaderInfoLog(E).trim();let Y=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,E);else{const tt=Lc(s,R,"vertex"),W=Lc(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+k+`
`+tt+`
`+W)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(z===""||V==="")&&(B=!1);B&&(w.diagnostics={runnable:Y,programLog:k,vertexShader:{log:z,prefix:p},fragmentShader:{log:V,prefix:g}})}s.deleteShader(R),s.deleteShader(E),L=new $r(s,x),I=wg(s,x)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let I;this.getAttributes=function(){return I===void 0&&T(this),I};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,pg)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=E,this}let Ng=0;class kg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new zg(t),e.set(t,n)),n}}class zg{constructor(t){this.id=Ng++,this.code=t,this.usedTimes=0}}function Fg(i,t,e,n,s,r,o){const a=new Ml,l=new kg,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures;let m=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,w,k,z,V){const Y=z.fog,B=V.geometry,tt=_.isMeshStandardMaterial?z.environment:null,W=(_.isMeshStandardMaterial?e:t).get(_.envMap||tt),gt=W&&W.mapping===oo?W.image.height:null,xt=x[_.type];_.precision!==null&&(m=s.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const _t=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,te=_t!==void 0?_t.length:0;let se=0;B.morphAttributes.position!==void 0&&(se=1),B.morphAttributes.normal!==void 0&&(se=2),B.morphAttributes.color!==void 0&&(se=3);let Z,at,Pt,mt;if(xt){const en=Rn[xt];Z=en.vertexShader,at=en.fragmentShader}else Z=_.vertexShader,at=_.fragmentShader,l.update(_),Pt=l.getVertexShaderID(_),mt=l.getFragmentShaderID(_);const Ht=i.getRenderTarget(),Bt=V.isInstancedMesh===!0,Yt=V.isBatchedMesh===!0,ee=!!_.map,et=!!_.matcap,P=!!W,ut=!!_.aoMap,ht=!!_.lightMap,ot=!!_.bumpMap,ft=!!_.normalMap,kt=!!_.displacementMap,wt=!!_.emissiveMap,C=!!_.metalnessMap,b=!!_.roughnessMap,F=_.anisotropy>0,J=_.clearcoat>0,nt=_.dispersion>0,Q=_.iridescence>0,Dt=_.sheen>0,dt=_.transmission>0,At=F&&!!_.anisotropyMap,he=J&&!!_.clearcoatMap,lt=J&&!!_.clearcoatNormalMap,Ct=J&&!!_.clearcoatRoughnessMap,Wt=Q&&!!_.iridescenceMap,Xt=Q&&!!_.iridescenceThicknessMap,Lt=Dt&&!!_.sheenColorMap,ue=Dt&&!!_.sheenRoughnessMap,Zt=!!_.specularMap,we=!!_.specularColorMap,D=!!_.specularIntensityMap,St=dt&&!!_.transmissionMap,q=dt&&!!_.thicknessMap,it=!!_.gradientMap,yt=!!_.alphaMap,Tt=_.alphaTest>0,fe=!!_.alphaHash,Ne=!!_.extensions;let tn=si;_.toneMapped&&(Ht===null||Ht.isXRRenderTarget===!0)&&(tn=i.toneMapping);const de={shaderID:xt,shaderType:_.type,shaderName:_.name,vertexShader:Z,fragmentShader:at,defines:_.defines,customVertexShaderID:Pt,customFragmentShaderID:mt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,batching:Yt,batchingColor:Yt&&V._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&V.instanceColor!==null,instancingMorph:Bt&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Ht===null?i.outputColorSpace:Ht.isXRRenderTarget===!0?Ht.texture.colorSpace:hi,alphaToCoverage:!!_.alphaToCoverage,map:ee,matcap:et,envMap:P,envMapMode:P&&W.mapping,envMapCubeUVHeight:gt,aoMap:ut,lightMap:ht,bumpMap:ot,normalMap:ft,displacementMap:d&&kt,emissiveMap:wt,normalMapObjectSpace:ft&&_.normalMapType===Pf,normalMapTangentSpace:ft&&_.normalMapType===jh,metalnessMap:C,roughnessMap:b,anisotropy:F,anisotropyMap:At,clearcoat:J,clearcoatMap:he,clearcoatNormalMap:lt,clearcoatRoughnessMap:Ct,dispersion:nt,iridescence:Q,iridescenceMap:Wt,iridescenceThicknessMap:Xt,sheen:Dt,sheenColorMap:Lt,sheenRoughnessMap:ue,specularMap:Zt,specularColorMap:we,specularIntensityMap:D,transmission:dt,transmissionMap:St,thicknessMap:q,gradientMap:it,opaque:_.transparent===!1&&_.blending===os&&_.alphaToCoverage===!1,alphaMap:yt,alphaTest:Tt,alphaHash:fe,combine:_.combine,mapUv:ee&&p(_.map.channel),aoMapUv:ut&&p(_.aoMap.channel),lightMapUv:ht&&p(_.lightMap.channel),bumpMapUv:ot&&p(_.bumpMap.channel),normalMapUv:ft&&p(_.normalMap.channel),displacementMapUv:kt&&p(_.displacementMap.channel),emissiveMapUv:wt&&p(_.emissiveMap.channel),metalnessMapUv:C&&p(_.metalnessMap.channel),roughnessMapUv:b&&p(_.roughnessMap.channel),anisotropyMapUv:At&&p(_.anisotropyMap.channel),clearcoatMapUv:he&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:lt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:ue&&p(_.sheenRoughnessMap.channel),specularMapUv:Zt&&p(_.specularMap.channel),specularColorMapUv:we&&p(_.specularColorMap.channel),specularIntensityMapUv:D&&p(_.specularIntensityMap.channel),transmissionMapUv:St&&p(_.transmissionMap.channel),thicknessMapUv:q&&p(_.thicknessMap.channel),alphaMapUv:yt&&p(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ft||F),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!B.attributes.uv&&(ee||yt),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:se,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:tn,decodeVideoTexture:ee&&_.map.isVideoTexture===!0&&pe.getTransfer(_.map.colorSpace)===Se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===$t,flipSided:_.side===Fe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ne&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&_.extensions.multiDraw===!0||Yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return de.vertexUv1s=c.has(1),de.vertexUv2s=c.has(2),de.vertexUv3s=c.has(3),c.clear(),de}function M(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const k in _.defines)w.push(k),w.push(_.defines[k]);return _.isRawShaderMaterial===!1&&(v(w,_),y(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function v(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function y(_,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),_.push(a.mask)}function R(_){const w=x[_.type];let k;if(w){const z=Rn[w];k=Js.clone(z.uniforms)}else k=_.uniforms;return k}function E(_,w){let k;for(let z=0,V=h.length;z<V;z++){const Y=h[z];if(Y.cacheKey===w){k=Y,++k.usedTimes;break}}return k===void 0&&(k=new Ug(i,w,_,r),h.push(k)),k}function T(_){if(--_.usedTimes===0){const w=h.indexOf(_);h[w]=h[h.length-1],h.pop(),_.destroy()}}function L(_){l.remove(_)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:R,acquireProgram:E,releaseProgram:T,releaseShaderCache:L,programs:h,dispose:I}}function Og(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Bg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function kc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function zc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,m,x,p){let g=i[t];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:x,group:p},i[t]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=x,g.group=p),t++,g}function a(u,f,d,m,x,p){const g=o(u,f,d,m,x,p);d.transmission>0?n.push(g):d.transparent===!0?s.push(g):e.push(g)}function l(u,f,d,m,x,p){const g=o(u,f,d,m,x,p);d.transmission>0?n.unshift(g):d.transparent===!0?s.unshift(g):e.unshift(g)}function c(u,f){e.length>1&&e.sort(u||Bg),n.length>1&&n.sort(f||kc),s.length>1&&s.sort(f||kc)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Hg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new zc,i.set(n,[o])):s>=r.length?(o=new zc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Gg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new st};break;case"SpotLight":e={position:new A,direction:new A,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new st,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new st,groundColor:new st};break;case"RectAreaLight":e={color:new st,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function Vg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Wg=0;function Xg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qg(i){const t=new Gg,e=Vg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);const s=new A,r=new ne,o=new ne;function a(c){let h=0,u=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,m=0,x=0,p=0,g=0,M=0,v=0,y=0,R=0,E=0,T=0;c.sort(Xg);for(let I=0,_=c.length;I<_;I++){const w=c[I],k=w.color,z=w.intensity,V=w.distance,Y=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=k.r*z,u+=k.g*z,f+=k.b*z;else if(w.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(w.sh.coefficients[B],z);T++}else if(w.isDirectionalLight){const B=t.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const tt=w.shadow,W=e.get(w);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=w.shadow.matrix,M++}n.directional[d]=B,d++}else if(w.isSpotLight){const B=t.get(w);B.position.setFromMatrixPosition(w.matrixWorld),B.color.copy(k).multiplyScalar(z),B.distance=V,B.coneCos=Math.cos(w.angle),B.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),B.decay=w.decay,n.spot[x]=B;const tt=w.shadow;if(w.map&&(n.spotLightMap[R]=w.map,R++,tt.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[x]=tt.matrix,w.castShadow){const W=e.get(w);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,n.spotShadow[x]=W,n.spotShadowMap[x]=Y,y++}x++}else if(w.isRectAreaLight){const B=t.get(w);B.color.copy(k).multiplyScalar(z),B.halfWidth.set(w.width*.5,0,0),B.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=B,p++}else if(w.isPointLight){const B=t.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),B.distance=w.distance,B.decay=w.decay,w.castShadow){const tt=w.shadow,W=e.get(w);W.shadowIntensity=tt.intensity,W.shadowBias=tt.bias,W.shadowNormalBias=tt.normalBias,W.shadowRadius=tt.radius,W.shadowMapSize=tt.mapSize,W.shadowCameraNear=tt.camera.near,W.shadowCameraFar=tt.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=w.shadow.matrix,v++}n.point[m]=B,m++}else if(w.isHemisphereLight){const B=t.get(w);B.skyColor.copy(w.color).multiplyScalar(z),B.groundColor.copy(w.groundColor).multiplyScalar(z),n.hemi[g]=B,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==d||L.pointLength!==m||L.spotLength!==x||L.rectAreaLength!==p||L.hemiLength!==g||L.numDirectionalShadows!==M||L.numPointShadows!==v||L.numSpotShadows!==y||L.numSpotMaps!==R||L.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,L.directionalLength=d,L.pointLength=m,L.spotLength=x,L.rectAreaLength=p,L.hemiLength=g,L.numDirectionalShadows=M,L.numPointShadows=v,L.numSpotShadows=y,L.numSpotMaps=R,L.numLightProbes=T,n.version=Wg++)}function l(c,h){let u=0,f=0,d=0,m=0,x=0;const p=h.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){const v=c[g];if(v.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),u++}else if(v.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const y=n.rectArea[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function Fc(i){const t=new qg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Yg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Fc(i),t.set(s,[a])):r>=o.length?(a=new Fc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class $g extends Li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jg extends Li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zg=`uniform sampler2D shadow_pass;
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
}`;function Jg(i,t,e){let n=new bl;const s=new K,r=new K,o=new be,a=new $g({depthPacking:Rf}),l=new jg,c={},h=e.maxTextureSize,u={[qn]:Fe,[Fe]:qn,[$t]:$t},f=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:Kg,fragmentShader:Zg}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Te;m.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new rt(m,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lh;let g=this.type;this.render=function(E,T,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const I=i.getRenderTarget(),_=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Wn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=g!==Hn&&this.type===Hn,V=g===Hn&&this.type!==Hn;for(let Y=0,B=E.length;Y<B;Y++){const tt=E[Y],W=tt.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const gt=W.getFrameExtents();if(s.multiply(gt),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/gt.x),s.x=r.x*gt.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/gt.y),s.y=r.y*gt.y,W.mapSize.y=r.y)),W.map===null||z===!0||V===!0){const _t=this.type!==Hn?{minFilter:on,magFilter:on}:{};W.map!==null&&W.map.dispose(),W.map=new An(s.x,s.y,_t),W.map.texture.name=tt.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const xt=W.getViewportCount();for(let _t=0;_t<xt;_t++){const te=W.getViewport(_t);o.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),k.viewport(o),W.updateMatrices(tt,_t),n=W.getFrustum(),y(T,L,W.camera,tt,this.type)}W.isPointLightShadow!==!0&&this.type===Hn&&M(W,L),W.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(I,_,w)};function M(E,T){const L=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new An(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,L,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,L,d,x,null)}function v(E,T,L,I){let _=null;const w=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)_=w;else if(_=L.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=_.uuid,z=T.uuid;let V=c[k];V===void 0&&(V={},c[k]=V);let Y=V[z];Y===void 0&&(Y=_.clone(),V[z]=Y,T.addEventListener("dispose",R)),_=Y}if(_.visible=T.visible,_.wireframe=T.wireframe,I===Hn?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:u[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const k=i.properties.get(_);k.light=L}return _}function y(E,T,L,I,_){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===Hn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const z=t.update(E),V=E.material;if(Array.isArray(V)){const Y=z.groups;for(let B=0,tt=Y.length;B<tt;B++){const W=Y[B],gt=V[W.materialIndex];if(gt&&gt.visible){const xt=v(E,gt,I,_);E.onBeforeShadow(i,E,T,L,z,xt,W),i.renderBufferDirect(L,null,z,xt,E,W),E.onAfterShadow(i,E,T,L,z,xt,W)}}}else if(V.visible){const Y=v(E,V,I,_);E.onBeforeShadow(i,E,T,L,z,Y,null),i.renderBufferDirect(L,null,z,Y,E,null),E.onAfterShadow(i,E,T,L,z,Y,null)}}const k=E.children;for(let z=0,V=k.length;z<V;z++)y(k[z],T,L,I,_)}function R(E){E.target.removeEventListener("dispose",R);for(const L in c){const I=c[L],_=E.target.uuid;_ in I&&(I[_].dispose(),delete I[_])}}}const Qg={[ga]:xa,[va]:Ma,[_a]:ba,[ds]:ya,[xa]:ga,[Ma]:va,[ba]:_a,[ya]:ds};function tx(i){function t(){let D=!1;const St=new be;let q=null;const it=new be(0,0,0,0);return{setMask:function(yt){q!==yt&&!D&&(i.colorMask(yt,yt,yt,yt),q=yt)},setLocked:function(yt){D=yt},setClear:function(yt,Tt,fe,Ne,tn){tn===!0&&(yt*=Ne,Tt*=Ne,fe*=Ne),St.set(yt,Tt,fe,Ne),it.equals(St)===!1&&(i.clearColor(yt,Tt,fe,Ne),it.copy(St))},reset:function(){D=!1,q=null,it.set(-1,0,0,0)}}}function e(){let D=!1,St=!1,q=null,it=null,yt=null;return{setReversed:function(Tt){St=Tt},setTest:function(Tt){Tt?Pt(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(Tt){q!==Tt&&!D&&(i.depthMask(Tt),q=Tt)},setFunc:function(Tt){if(St&&(Tt=Qg[Tt]),it!==Tt){switch(Tt){case ga:i.depthFunc(i.NEVER);break;case xa:i.depthFunc(i.ALWAYS);break;case va:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case _a:i.depthFunc(i.EQUAL);break;case ya:i.depthFunc(i.GEQUAL);break;case Ma:i.depthFunc(i.GREATER);break;case ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}it=Tt}},setLocked:function(Tt){D=Tt},setClear:function(Tt){yt!==Tt&&(i.clearDepth(Tt),yt=Tt)},reset:function(){D=!1,q=null,it=null,yt=null}}}function n(){let D=!1,St=null,q=null,it=null,yt=null,Tt=null,fe=null,Ne=null,tn=null;return{setTest:function(de){D||(de?Pt(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(de){St!==de&&!D&&(i.stencilMask(de),St=de)},setFunc:function(de,en,Dn){(q!==de||it!==en||yt!==Dn)&&(i.stencilFunc(de,en,Dn),q=de,it=en,yt=Dn)},setOp:function(de,en,Dn){(Tt!==de||fe!==en||Ne!==Dn)&&(i.stencilOp(de,en,Dn),Tt=de,fe=en,Ne=Dn)},setLocked:function(de){D=de},setClear:function(de){tn!==de&&(i.clearStencil(de),tn=de)},reset:function(){D=!1,St=null,q=null,it=null,yt=null,Tt=null,fe=null,Ne=null,tn=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],d=null,m=!1,x=null,p=null,g=null,M=null,v=null,y=null,R=null,E=new st(0,0,0),T=0,L=!1,I=null,_=null,w=null,k=null,z=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,B=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(tt)[1]),Y=B>=1):tt.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),Y=B>=2);let W=null,gt={};const xt=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),te=new be().fromArray(xt),se=new be().fromArray(_t);function Z(D,St,q,it){const yt=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(D,Tt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let fe=0;fe<q;fe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,it,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(St+fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return Tt}const at={};at[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Pt(i.DEPTH_TEST),r.setFunc(ds),ht(!1),ot($l),Pt(i.CULL_FACE),P(Wn);function Pt(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function mt(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function Ht(D,St){return h[D]!==St?(i.bindFramebuffer(D,St),h[D]=St,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=St),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=St),!0):!1}function Bt(D,St){let q=f,it=!1;if(D){q=u.get(St),q===void 0&&(q=[],u.set(St,q));const yt=D.textures;if(q.length!==yt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,fe=yt.length;Tt<fe;Tt++)q[Tt]=i.COLOR_ATTACHMENT0+Tt;q.length=yt.length,it=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,it=!0);it&&i.drawBuffers(q)}function Yt(D){return d!==D?(i.useProgram(D),d=D,!0):!1}const ee={[wi]:i.FUNC_ADD,[af]:i.FUNC_SUBTRACT,[lf]:i.FUNC_REVERSE_SUBTRACT};ee[cf]=i.MIN,ee[hf]=i.MAX;const et={[uf]:i.ZERO,[ff]:i.ONE,[df]:i.SRC_COLOR,[pa]:i.SRC_ALPHA,[_f]:i.SRC_ALPHA_SATURATE,[xf]:i.DST_COLOR,[mf]:i.DST_ALPHA,[pf]:i.ONE_MINUS_SRC_COLOR,[ma]:i.ONE_MINUS_SRC_ALPHA,[vf]:i.ONE_MINUS_DST_COLOR,[gf]:i.ONE_MINUS_DST_ALPHA,[yf]:i.CONSTANT_COLOR,[Mf]:i.ONE_MINUS_CONSTANT_COLOR,[bf]:i.CONSTANT_ALPHA,[wf]:i.ONE_MINUS_CONSTANT_ALPHA};function P(D,St,q,it,yt,Tt,fe,Ne,tn,de){if(D===Wn){m===!0&&(mt(i.BLEND),m=!1);return}if(m===!1&&(Pt(i.BLEND),m=!0),D!==of){if(D!==x||de!==L){if((p!==wi||v!==wi)&&(i.blendEquation(i.FUNC_ADD),p=wi,v=wi),de)switch(D){case os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fs:i.blendFunc(i.ONE,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}g=null,M=null,y=null,R=null,E.set(0,0,0),T=0,x=D,L=de}return}yt=yt||St,Tt=Tt||q,fe=fe||it,(St!==p||yt!==v)&&(i.blendEquationSeparate(ee[St],ee[yt]),p=St,v=yt),(q!==g||it!==M||Tt!==y||fe!==R)&&(i.blendFuncSeparate(et[q],et[it],et[Tt],et[fe]),g=q,M=it,y=Tt,R=fe),(Ne.equals(E)===!1||tn!==T)&&(i.blendColor(Ne.r,Ne.g,Ne.b,tn),E.copy(Ne),T=tn),x=D,L=!1}function ut(D,St){D.side===$t?mt(i.CULL_FACE):Pt(i.CULL_FACE);let q=D.side===Fe;St&&(q=!q),ht(q),D.blending===os&&D.transparent===!1?P(Wn):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const it=D.stencilWrite;o.setTest(it),it&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),kt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Pt(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(D){I!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),I=D)}function ot(D){D!==sf?(Pt(i.CULL_FACE),D!==_&&(D===$l?i.cullFace(i.BACK):D===rf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),_=D}function ft(D){D!==w&&(Y&&i.lineWidth(D),w=D)}function kt(D,St,q){D?(Pt(i.POLYGON_OFFSET_FILL),(k!==St||z!==q)&&(i.polygonOffset(St,q),k=St,z=q)):mt(i.POLYGON_OFFSET_FILL)}function wt(D){D?Pt(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function C(D){D===void 0&&(D=i.TEXTURE0+V-1),W!==D&&(i.activeTexture(D),W=D)}function b(D,St,q){q===void 0&&(W===null?q=i.TEXTURE0+V-1:q=W);let it=gt[q];it===void 0&&(it={type:void 0,texture:void 0},gt[q]=it),(it.type!==D||it.texture!==St)&&(W!==q&&(i.activeTexture(q),W=q),i.bindTexture(D,St||at[D]),it.type=D,it.texture=St)}function F(){const D=gt[W];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Wt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xt(D){te.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),te.copy(D))}function Lt(D){se.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),se.copy(D))}function ue(D,St){let q=l.get(St);q===void 0&&(q=new WeakMap,l.set(St,q));let it=q.get(D);it===void 0&&(it=i.getUniformBlockIndex(St,D.name),q.set(D,it))}function Zt(D,St){const it=l.get(St).get(D);a.get(St)!==it&&(i.uniformBlockBinding(St,it,D.__bindingPointIndex),a.set(St,it))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},W=null,gt={},h={},u=new WeakMap,f=[],d=null,m=!1,x=null,p=null,g=null,M=null,v=null,y=null,R=null,E=new st(0,0,0),T=0,L=!1,I=null,_=null,w=null,k=null,z=null,te.set(0,0,i.canvas.width,i.canvas.height),se.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Pt,disable:mt,bindFramebuffer:Ht,drawBuffers:Bt,useProgram:Yt,setBlending:P,setMaterial:ut,setFlipSided:ht,setCullFace:ot,setLineWidth:ft,setPolygonOffset:kt,setScissorTest:wt,activeTexture:C,bindTexture:b,unbindTexture:F,compressedTexImage2D:J,compressedTexImage3D:nt,texImage2D:Ct,texImage3D:Wt,updateUBOMapping:ue,uniformBlockBinding:Zt,texStorage2D:he,texStorage3D:lt,texSubImage2D:Q,texSubImage3D:Dt,compressedTexSubImage2D:dt,compressedTexSubImage3D:At,scissor:Xt,viewport:Lt,reset:we}}function Oc(i,t,e,n){const s=ex(n);switch(e){case Vh:return i*t;case Xh:return i*t;case qh:return i*t*2;case pl:return i*t/s.components*s.byteLength;case ml:return i*t/s.components*s.byteLength;case Yh:return i*t*2/s.components*s.byteLength;case gl:return i*t*2/s.components*s.byteLength;case Wh:return i*t*3/s.components*s.byteLength;case En:return i*t*4/s.components*s.byteLength;case xl:return i*t*4/s.components*s.byteLength;case Gr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:case Ra:return Math.max(i,16)*Math.max(t,8)/4;case Ea:case Ca:return Math.max(i,8)*Math.max(t,8)/2;case Pa:case La:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ka:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Xa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qr:case Ya:case $a:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $h:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ka:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ex(i){switch(i){case Yn:case Bh:return{byteLength:1,components:1};case Zs:case Hh:case Xn:return{byteLength:2,components:1};case fl:case dl:return{byteLength:2,components:4};case Ai:case ul:case Pn:return{byteLength:4,components:1};case Gh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function nx(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new K,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,b){return d?new OffscreenCanvas(C,b):to("canvas")}function x(C,b,F){let J=1;const nt=wt(C);if((nt.width>F||nt.height>F)&&(J=F/Math.max(nt.width,nt.height)),J<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor(J*nt.width),Dt=Math.floor(J*nt.height);u===void 0&&(u=m(Q,Dt));const dt=b?m(Q,Dt):u;return dt.width=Q,dt.height=Dt,dt.getContext("2d").drawImage(C,0,0,Q,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Q+"x"+Dt+")."),dt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==on&&C.minFilter!==Sn}function g(C){i.generateMipmap(C)}function M(C,b,F,J,nt=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=b;if(b===i.RED&&(F===i.FLOAT&&(Q=i.R32F),F===i.HALF_FLOAT&&(Q=i.R16F),F===i.UNSIGNED_BYTE&&(Q=i.R8)),b===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.R8UI),F===i.UNSIGNED_SHORT&&(Q=i.R16UI),F===i.UNSIGNED_INT&&(Q=i.R32UI),F===i.BYTE&&(Q=i.R8I),F===i.SHORT&&(Q=i.R16I),F===i.INT&&(Q=i.R32I)),b===i.RG&&(F===i.FLOAT&&(Q=i.RG32F),F===i.HALF_FLOAT&&(Q=i.RG16F),F===i.UNSIGNED_BYTE&&(Q=i.RG8)),b===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.RG8UI),F===i.UNSIGNED_SHORT&&(Q=i.RG16UI),F===i.UNSIGNED_INT&&(Q=i.RG32UI),F===i.BYTE&&(Q=i.RG8I),F===i.SHORT&&(Q=i.RG16I),F===i.INT&&(Q=i.RG32I)),b===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),F===i.UNSIGNED_INT&&(Q=i.RGB32UI),F===i.BYTE&&(Q=i.RGB8I),F===i.SHORT&&(Q=i.RGB16I),F===i.INT&&(Q=i.RGB32I)),b===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),F===i.UNSIGNED_INT&&(Q=i.RGBA32UI),F===i.BYTE&&(Q=i.RGBA8I),F===i.SHORT&&(Q=i.RGBA16I),F===i.INT&&(Q=i.RGBA32I)),b===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),b===i.RGBA){const Dt=nt?Kr:pe.getTransfer(J);F===i.FLOAT&&(Q=i.RGBA32F),F===i.HALF_FLOAT&&(Q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Q=Dt===Se?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(C,b){let F;return C?b===null||b===Ai||b===gs?F=i.DEPTH24_STENCIL8:b===Pn?F=i.DEPTH32F_STENCIL8:b===Zs&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ai||b===gs?F=i.DEPTH_COMPONENT24:b===Pn?F=i.DEPTH_COMPONENT32F:b===Zs&&(F=i.DEPTH_COMPONENT16),F}function y(C,b){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==on&&C.minFilter!==Sn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function R(C){const b=C.target;b.removeEventListener("dispose",R),T(b),b.isVideoTexture&&h.delete(b)}function E(C){const b=C.target;b.removeEventListener("dispose",E),I(b)}function T(C){const b=n.get(C);if(b.__webglInit===void 0)return;const F=C.source,J=f.get(F);if(J){const nt=J[b.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&L(C),Object.keys(J).length===0&&f.delete(F)}n.remove(C)}function L(C){const b=n.get(C);i.deleteTexture(b.__webglTexture);const F=C.source,J=f.get(F);delete J[b.__cacheKey],o.memory.textures--}function I(C){const b=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let nt=0;nt<b.__webglFramebuffer[J].length;nt++)i.deleteFramebuffer(b.__webglFramebuffer[J][nt]);else i.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)i.deleteFramebuffer(b.__webglFramebuffer[J]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const F=C.textures;for(let J=0,nt=F.length;J<nt;J++){const Q=n.get(F[J]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(F[J])}n.remove(C)}let _=0;function w(){_=0}function k(){const C=_;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),_+=1,C}function z(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function V(C,b){const F=n.get(C);if(C.isVideoTexture&&ft(C),C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){const J=C.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(F,C,b);return}}e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+b)}function Y(C,b){const F=n.get(C);if(C.version>0&&F.__version!==C.version){se(F,C,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+b)}function B(C,b){const F=n.get(C);if(C.version>0&&F.__version!==C.version){se(F,C,b);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+b)}function tt(C,b){const F=n.get(C);if(C.version>0&&F.__version!==C.version){Z(F,C,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+b)}const W={[oi]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},gt={[on]:i.NEAREST,[Af]:i.NEAREST_MIPMAP_NEAREST,[hr]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[wo]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},xt={[Lf]:i.NEVER,[zf]:i.ALWAYS,[If]:i.LESS,[Kh]:i.LEQUAL,[Df]:i.EQUAL,[kf]:i.GEQUAL,[Uf]:i.GREATER,[Nf]:i.NOTEQUAL};function _t(C,b){if(b.type===Pn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Sn||b.magFilter===wo||b.magFilter===hr||b.magFilter===Ei||b.minFilter===Sn||b.minFilter===wo||b.minFilter===hr||b.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,W[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,W[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,W[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,gt[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,gt[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,xt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===on||b.minFilter!==hr&&b.minFilter!==Ei||b.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function te(C,b){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",R));const J=b.source;let nt=f.get(J);nt===void 0&&(nt={},f.set(J,nt));const Q=z(b);if(Q!==C.__cacheKey){nt[Q]===void 0&&(nt[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),nt[Q].usedTimes++;const Dt=nt[C.__cacheKey];Dt!==void 0&&(nt[C.__cacheKey].usedTimes--,Dt.usedTimes===0&&L(b)),C.__cacheKey=Q,C.__webglTexture=nt[Q].texture}return F}function se(C,b,F){let J=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=i.TEXTURE_3D);const nt=te(C,b),Q=b.source;e.bindTexture(J,C.__webglTexture,i.TEXTURE0+F);const Dt=n.get(Q);if(Q.version!==Dt.__version||nt===!0){e.activeTexture(i.TEXTURE0+F);const dt=pe.getPrimaries(pe.workingColorSpace),At=b.colorSpace===ii?null:pe.getPrimaries(b.colorSpace),he=b.colorSpace===ii||dt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let lt=x(b.image,!1,s.maxTextureSize);lt=kt(b,lt);const Ct=r.convert(b.format,b.colorSpace),Wt=r.convert(b.type);let Xt=M(b.internalFormat,Ct,Wt,b.colorSpace,b.isVideoTexture);_t(J,b);let Lt;const ue=b.mipmaps,Zt=b.isVideoTexture!==!0,we=Dt.__version===void 0||nt===!0,D=Q.dataReady,St=y(b,lt);if(b.isDepthTexture)Xt=v(b.format===xs,b.type),we&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Xt,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Xt,lt.width,lt.height,0,Ct,Wt,null));else if(b.isDataTexture)if(ue.length>0){Zt&&we&&e.texStorage2D(i.TEXTURE_2D,St,Xt,ue[0].width,ue[0].height);for(let q=0,it=ue.length;q<it;q++)Lt=ue[q],Zt?D&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Lt.width,Lt.height,Ct,Wt,Lt.data):e.texImage2D(i.TEXTURE_2D,q,Xt,Lt.width,Lt.height,0,Ct,Wt,Lt.data);b.generateMipmaps=!1}else Zt?(we&&e.texStorage2D(i.TEXTURE_2D,St,Xt,lt.width,lt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt.width,lt.height,Ct,Wt,lt.data)):e.texImage2D(i.TEXTURE_2D,0,Xt,lt.width,lt.height,0,Ct,Wt,lt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Zt&&we&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Xt,ue[0].width,ue[0].height,lt.depth);for(let q=0,it=ue.length;q<it;q++)if(Lt=ue[q],b.format!==En)if(Ct!==null)if(Zt){if(D)if(b.layerUpdates.size>0){const yt=Oc(Lt.width,Lt.height,b.format,b.type);for(const Tt of b.layerUpdates){const fe=Lt.data.subarray(Tt*yt/Lt.data.BYTES_PER_ELEMENT,(Tt+1)*yt/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,Tt,Lt.width,Lt.height,1,Ct,fe,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Lt.width,Lt.height,lt.depth,Ct,Lt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Xt,Lt.width,Lt.height,lt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,Lt.width,Lt.height,lt.depth,Ct,Wt,Lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Xt,Lt.width,Lt.height,lt.depth,0,Ct,Wt,Lt.data)}else{Zt&&we&&e.texStorage2D(i.TEXTURE_2D,St,Xt,ue[0].width,ue[0].height);for(let q=0,it=ue.length;q<it;q++)Lt=ue[q],b.format!==En?Ct!==null?Zt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,Lt.width,Lt.height,Ct,Lt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Xt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?D&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Lt.width,Lt.height,Ct,Wt,Lt.data):e.texImage2D(i.TEXTURE_2D,q,Xt,Lt.width,Lt.height,0,Ct,Wt,Lt.data)}else if(b.isDataArrayTexture)if(Zt){if(we&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Xt,lt.width,lt.height,lt.depth),D)if(b.layerUpdates.size>0){const q=Oc(lt.width,lt.height,b.format,b.type);for(const it of b.layerUpdates){const yt=lt.data.subarray(it*q/lt.data.BYTES_PER_ELEMENT,(it+1)*q/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,it,lt.width,lt.height,1,Ct,Wt,yt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Ct,Wt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Xt,lt.width,lt.height,lt.depth,0,Ct,Wt,lt.data);else if(b.isData3DTexture)Zt?(we&&e.texStorage3D(i.TEXTURE_3D,St,Xt,lt.width,lt.height,lt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Ct,Wt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Xt,lt.width,lt.height,lt.depth,0,Ct,Wt,lt.data);else if(b.isFramebufferTexture){if(we)if(Zt)e.texStorage2D(i.TEXTURE_2D,St,Xt,lt.width,lt.height);else{let q=lt.width,it=lt.height;for(let yt=0;yt<St;yt++)e.texImage2D(i.TEXTURE_2D,yt,Xt,q,it,0,Ct,Wt,null),q>>=1,it>>=1}}else if(ue.length>0){if(Zt&&we){const q=wt(ue[0]);e.texStorage2D(i.TEXTURE_2D,St,Xt,q.width,q.height)}for(let q=0,it=ue.length;q<it;q++)Lt=ue[q],Zt?D&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,Ct,Wt,Lt):e.texImage2D(i.TEXTURE_2D,q,Xt,Ct,Wt,Lt);b.generateMipmaps=!1}else if(Zt){if(we){const q=wt(lt);e.texStorage2D(i.TEXTURE_2D,St,Xt,q.width,q.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Wt,lt)}else e.texImage2D(i.TEXTURE_2D,0,Xt,Ct,Wt,lt);p(b)&&g(J),Dt.__version=Q.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Z(C,b,F){if(b.image.length!==6)return;const J=te(C,b),nt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+F);const Q=n.get(nt);if(nt.version!==Q.__version||J===!0){e.activeTexture(i.TEXTURE0+F);const Dt=pe.getPrimaries(pe.workingColorSpace),dt=b.colorSpace===ii?null:pe.getPrimaries(b.colorSpace),At=b.colorSpace===ii||Dt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const he=b.isCompressedTexture||b.image[0].isCompressedTexture,lt=b.image[0]&&b.image[0].isDataTexture,Ct=[];for(let it=0;it<6;it++)!he&&!lt?Ct[it]=x(b.image[it],!0,s.maxCubemapSize):Ct[it]=lt?b.image[it].image:b.image[it],Ct[it]=kt(b,Ct[it]);const Wt=Ct[0],Xt=r.convert(b.format,b.colorSpace),Lt=r.convert(b.type),ue=M(b.internalFormat,Xt,Lt,b.colorSpace),Zt=b.isVideoTexture!==!0,we=Q.__version===void 0||J===!0,D=nt.dataReady;let St=y(b,Wt);_t(i.TEXTURE_CUBE_MAP,b);let q;if(he){Zt&&we&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,ue,Wt.width,Wt.height);for(let it=0;it<6;it++){q=Ct[it].mipmaps;for(let yt=0;yt<q.length;yt++){const Tt=q[yt];b.format!==En?Xt!==null?Zt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,0,0,Tt.width,Tt.height,Xt,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,ue,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,0,0,Tt.width,Tt.height,Xt,Lt,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt,ue,Tt.width,Tt.height,0,Xt,Lt,Tt.data)}}}else{if(q=b.mipmaps,Zt&&we){q.length>0&&St++;const it=wt(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,ue,it.width,it.height)}for(let it=0;it<6;it++)if(lt){Zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ct[it].width,Ct[it].height,Xt,Lt,Ct[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ue,Ct[it].width,Ct[it].height,0,Xt,Lt,Ct[it].data);for(let yt=0;yt<q.length;yt++){const fe=q[yt].image[it].image;Zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,0,0,fe.width,fe.height,Xt,Lt,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,ue,fe.width,fe.height,0,Xt,Lt,fe.data)}}else{Zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Xt,Lt,Ct[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,ue,Xt,Lt,Ct[it]);for(let yt=0;yt<q.length;yt++){const Tt=q[yt];Zt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,0,0,Xt,Lt,Tt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt+1,ue,Xt,Lt,Tt.image[it])}}}p(b)&&g(i.TEXTURE_CUBE_MAP),Q.__version=nt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function at(C,b,F,J,nt,Q){const Dt=r.convert(F.format,F.colorSpace),dt=r.convert(F.type),At=M(F.internalFormat,Dt,dt,F.colorSpace);if(!n.get(b).__hasExternalTextures){const lt=Math.max(1,b.width>>Q),Ct=Math.max(1,b.height>>Q);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,Q,At,lt,Ct,b.depth,0,Dt,dt,null):e.texImage2D(nt,Q,At,lt,Ct,0,Dt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),ot(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,nt,n.get(F).__webglTexture,0,ht(b)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,nt,n.get(F).__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(C,b,F){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){const J=b.depthTexture,nt=J&&J.isDepthTexture?J.type:null,Q=v(b.stencilBuffer,nt),Dt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=ht(b);ot(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,Q,b.width,b.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,Q,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Q,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,C)}else{const J=b.textures;for(let nt=0;nt<J.length;nt++){const Q=J[nt],Dt=r.convert(Q.format,Q.colorSpace),dt=r.convert(Q.type),At=M(Q.internalFormat,Dt,dt,Q.colorSpace),he=ht(b);F&&ot(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,he,At,b.width,b.height):ot(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he,At,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,At,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);const J=n.get(b.depthTexture).__webglTexture,nt=ht(b);if(b.depthTexture.format===as)ot(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(b.depthTexture.format===xs)ot(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,nt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ht(C){const b=n.get(C),F=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const J=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){const nt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",nt)};J.addEventListener("dispose",nt),b.__depthDisposeCallback=nt}b.__boundDepthTexture=J}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");mt(b.__webglFramebuffer,C)}else if(F){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=i.createRenderbuffer(),Pt(b.__webglDepthbuffer[J],C,!1);else{const nt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Pt(b.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(C,b,F){const J=n.get(C);b!==void 0&&at(J.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ht(C)}function Yt(C){const b=C.texture,F=n.get(C),J=n.get(b);C.addEventListener("dispose",E);const nt=C.textures,Q=C.isWebGLCubeRenderTarget===!0,Dt=nt.length>1;if(Dt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=b.version,o.memory.textures++),Q){F.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer[dt]=[];for(let At=0;At<b.mipmaps.length;At++)F.__webglFramebuffer[dt][At]=i.createFramebuffer()}else F.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)F.__webglFramebuffer[dt]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let dt=0,At=nt.length;dt<At;dt++){const he=n.get(nt[dt]);he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&ot(C)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let dt=0;dt<nt.length;dt++){const At=nt[dt];F.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[dt]);const he=r.convert(At.format,At.colorSpace),lt=r.convert(At.type),Ct=M(At.internalFormat,he,lt,At.colorSpace,C.isXRRenderTarget===!0),Wt=ht(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,Ct,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,F.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Pt(F.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),_t(i.TEXTURE_CUBE_MAP,b);for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)at(F.__webglFramebuffer[dt][At],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,At);else at(F.__webglFramebuffer[dt],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);p(b)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let dt=0,At=nt.length;dt<At;dt++){const he=nt[dt],lt=n.get(he);e.bindTexture(i.TEXTURE_2D,lt.__webglTexture),_t(i.TEXTURE_2D,he),at(F.__webglFramebuffer,C,he,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),p(he)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,J.__webglTexture),_t(dt,b),b.mipmaps&&b.mipmaps.length>0)for(let At=0;At<b.mipmaps.length;At++)at(F.__webglFramebuffer[At],C,b,i.COLOR_ATTACHMENT0,dt,At);else at(F.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,dt,0);p(b)&&g(dt),e.unbindTexture()}C.depthBuffer&&Ht(C)}function ee(C){const b=C.textures;for(let F=0,J=b.length;F<J;F++){const nt=b[F];if(p(nt)){const Q=C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Dt=n.get(nt).__webglTexture;e.bindTexture(Q,Dt),g(Q),e.unbindTexture()}}}const et=[],P=[];function ut(C){if(C.samples>0){if(ot(C)===!1){const b=C.textures,F=C.width,J=C.height;let nt=i.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(C),dt=b.length>1;if(dt)for(let At=0;At<b.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let At=0;At<b.length;At++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[At]);const he=n.get(b[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,F,J,0,0,F,J,nt,i.NEAREST),l===!0&&(et.length=0,P.length=0,et.push(i.COLOR_ATTACHMENT0+At),C.depthBuffer&&C.resolveDepthBuffer===!1&&(et.push(Q),P.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let At=0;At<b.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[At]);const he=n.get(b[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,he,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ht(C){return Math.min(s.maxSamples,C.samples)}function ot(C){const b=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ft(C){const b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function kt(C,b){const F=C.colorSpace,J=C.format,nt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==hi&&F!==ii&&(pe.getTransfer(F)===Se?(J!==En||nt!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),b}function wt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=w,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=B,this.setTextureCube=tt,this.rebindTextures=Bt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=at,this.useMultisampledRTT=ot}function ix(i,t){function e(n,s=ii){let r;const o=pe.getTransfer(s);if(n===Yn)return i.UNSIGNED_BYTE;if(n===fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bh)return i.BYTE;if(n===Hh)return i.SHORT;if(n===Zs)return i.UNSIGNED_SHORT;if(n===ul)return i.INT;if(n===Ai)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Xn)return i.HALF_FLOAT;if(n===Vh)return i.ALPHA;if(n===Wh)return i.RGB;if(n===En)return i.RGBA;if(n===Xh)return i.LUMINANCE;if(n===qh)return i.LUMINANCE_ALPHA;if(n===as)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===pl)return i.RED;if(n===ml)return i.RED_INTEGER;if(n===Yh)return i.RG;if(n===gl)return i.RG_INTEGER;if(n===xl)return i.RGBA_INTEGER;if(n===Gr||n===Vr||n===Wr||n===Xr)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ea||n===Aa||n===Ca||n===Ra)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pa||n===La||n===Ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pa||n===La)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ia)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Da||n===Ua||n===Na||n===ka||n===za||n===Fa||n===Oa||n===Ba||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===qa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Da)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ua)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Na)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ka)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===za)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ba)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ha)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ga)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Va)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qa)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qr||n===Ya||n===$a)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qr)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$h||n===ja||n===Ka||n===Za)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class sx extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class jt extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rx={type:"move"};class Zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),g=this._getHandJoint(c,x);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ax=`
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

}`;class lx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ye,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Qe({vertexShader:ox,fragmentShader:ax,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new rt(new ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cx extends bs{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null;const x=new lx,p=e.getContextAttributes();let g=null,M=null;const v=[],y=[],R=new K;let E=null;const T=new rn;T.layers.enable(1),T.viewport=new be;const L=new rn;L.layers.enable(2),L.viewport=new be;const I=[T,L],_=new sx;_.layers.enable(1),_.layers.enable(2);let w=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let at=v[Z];return at===void 0&&(at=new Zo,v[Z]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Z){let at=v[Z];return at===void 0&&(at=new Zo,v[Z]=at),at.getGripSpace()},this.getHand=function(Z){let at=v[Z];return at===void 0&&(at=new Zo,v[Z]=at),at.getHandSpace()};function z(Z){const at=y.indexOf(Z.inputSource);if(at===-1)return;const Pt=v[at];Pt!==void 0&&(Pt.update(Z.inputSource,Z.frame,c||o),Pt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Y);for(let Z=0;Z<v.length;Z++){const at=y[Z];at!==null&&(y[Z]=null,v[Z].disconnect(at))}w=null,k=null,x.reset(),t.setRenderTarget(g),d=null,f=null,u=null,s=null,M=null,se.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const at={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new An(d.framebufferWidth,d.framebufferHeight,{format:En,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let at=null,Pt=null,mt=null;p.depth&&(mt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=p.stencil?xs:as,Pt=p.stencil?gs:Ai);const Ht={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Ht),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new An(f.textureWidth,f.textureHeight,{format:En,type:Yn,depthTexture:new au(f.textureWidth,f.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(Z){for(let at=0;at<Z.removed.length;at++){const Pt=Z.removed[at],mt=y.indexOf(Pt);mt>=0&&(y[mt]=null,v[mt].disconnect(Pt))}for(let at=0;at<Z.added.length;at++){const Pt=Z.added[at];let mt=y.indexOf(Pt);if(mt===-1){for(let Bt=0;Bt<v.length;Bt++)if(Bt>=y.length){y.push(Pt),mt=Bt;break}else if(y[Bt]===null){y[Bt]=Pt,mt=Bt;break}if(mt===-1)break}const Ht=v[mt];Ht&&Ht.connect(Pt)}}const B=new A,tt=new A;function W(Z,at,Pt){B.setFromMatrixPosition(at.matrixWorld),tt.setFromMatrixPosition(Pt.matrixWorld);const mt=B.distanceTo(tt),Ht=at.projectionMatrix.elements,Bt=Pt.projectionMatrix.elements,Yt=Ht[14]/(Ht[10]-1),ee=Ht[14]/(Ht[10]+1),et=(Ht[9]+1)/Ht[5],P=(Ht[9]-1)/Ht[5],ut=(Ht[8]-1)/Ht[0],ht=(Bt[8]+1)/Bt[0],ot=Yt*ut,ft=Yt*ht,kt=mt/(-ut+ht),wt=kt*-ut;if(at.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(wt),Z.translateZ(kt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ht[10]===-1)Z.projectionMatrix.copy(at.projectionMatrix),Z.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const C=Yt+kt,b=ee+kt,F=ot-wt,J=ft+(mt-wt),nt=et*ee/b*C,Q=P*ee/b*C;Z.projectionMatrix.makePerspective(F,J,nt,Q,C,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function gt(Z,at){at===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(at.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let at=Z.near,Pt=Z.far;x.texture!==null&&(x.depthNear>0&&(at=x.depthNear),x.depthFar>0&&(Pt=x.depthFar)),_.near=L.near=T.near=at,_.far=L.far=T.far=Pt,(w!==_.near||k!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,k=_.far);const mt=Z.parent,Ht=_.cameras;gt(_,mt);for(let Bt=0;Bt<Ht.length;Bt++)gt(Ht[Bt],mt);Ht.length===2?W(_,T,L):_.projectionMatrix.copy(T.projectionMatrix),xt(Z,_,mt)};function xt(Z,at,Pt){Pt===null?Z.matrix.copy(at.matrixWorld):(Z.matrix.copy(Pt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(at.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(at.projectionMatrix),Z.projectionMatrixInverse.copy(at.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=vs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let _t=null;function te(Z,at){if(h=at.getViewerPose(c||o),m=at,h!==null){const Pt=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let mt=!1;Pt.length!==_.cameras.length&&(_.cameras.length=0,mt=!0);for(let Bt=0;Bt<Pt.length;Bt++){const Yt=Pt[Bt];let ee=null;if(d!==null)ee=d.getViewport(Yt);else{const P=u.getViewSubImage(f,Yt);ee=P.viewport,Bt===0&&(t.setRenderTargetTextures(M,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(M))}let et=I[Bt];et===void 0&&(et=new rn,et.layers.enable(Bt),et.viewport=new be,I[Bt]=et),et.matrix.fromArray(Yt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Yt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(ee.x,ee.y,ee.width,ee.height),Bt===0&&(_.matrix.copy(et.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),mt===!0&&_.cameras.push(et)}const Ht=s.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")){const Bt=u.getDepthInformation(Pt[0]);Bt&&Bt.isValid&&Bt.texture&&x.init(t,Bt,s.renderState)}}for(let Pt=0;Pt<v.length;Pt++){const mt=y[Pt],Ht=v[Pt];mt!==null&&Ht!==void 0&&Ht.update(mt,at,c||o)}_t&&_t(Z,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),m=null}const se=new ou;se.setAnimationLoop(te),this.setAnimationLoop=function(Z){_t=Z},this.dispose=function(){}}}const vi=new $e,hx=new ne;function ux(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,iu(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,M,v,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),u(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g)):g.isMeshStandardMaterial?(r(p,g),f(p,g),g.isMeshPhysicalMaterial&&d(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),x(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,M,v):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Fe&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Fe&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const M=t.get(g),v=M.envMap,y=M.envMapRotation;v&&(p.envMap.value=v,vi.copy(y),vi.x*=-1,vi.y*=-1,vi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),p.envMapRotation.value.setFromMatrix4(hx.makeRotationFromEuler(vi)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,M,v){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=v*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function f(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,M){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Fe&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function x(p,g){const M=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fx(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const y=v.program;n.uniformBlockBinding(M,y)}function c(M,v){let y=s[M.id];y===void 0&&(m(M),y=h(M),s[M.id]=y,M.addEventListener("dispose",p));const R=v.program;n.updateUBOMapping(M,R);const E=t.render.frame;r[M.id]!==E&&(f(M),r[M.id]=E)}function h(M){const v=u();M.__bindingPointIndex=v;const y=i.createBuffer(),R=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=s[M.id],y=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,T=y.length;E<T;E++){const L=Array.isArray(y[E])?y[E]:[y[E]];for(let I=0,_=L.length;I<_;I++){const w=L[I];if(d(w,E,I,R)===!0){const k=w.__offset,z=Array.isArray(w.value)?w.value:[w.value];let V=0;for(let Y=0;Y<z.length;Y++){const B=z[Y],tt=x(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,k+V,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):(B.toArray(w.__data,V),V+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(M,v,y,R){const E=M.value,T=v+"_"+y;if(R[T]===void 0)return typeof E=="number"||typeof E=="boolean"?R[T]=E:R[T]=E.clone(),!0;{const L=R[T];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return R[T]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function m(M){const v=M.uniforms;let y=0;const R=16;for(let T=0,L=v.length;T<L;T++){const I=Array.isArray(v[T])?v[T]:[v[T]];for(let _=0,w=I.length;_<w;_++){const k=I[_],z=Array.isArray(k.value)?k.value:[k.value];for(let V=0,Y=z.length;V<Y;V++){const B=z[V],tt=x(B),W=y%R,gt=W%tt.boundary,xt=W+gt;y+=gt,xt!==0&&R-xt<tt.storage&&(y+=R-xt),k.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=tt.storage}}}const E=y%R;return E>0&&(y+=R-E),M.__size=y,M.__cache={},this}function x(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){const v=M.target;v.removeEventListener("dispose",p);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function g(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}class dx{constructor(t={}){const{canvas:e=ed(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),m=new Int32Array(4);let x=null,p=null;const g=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=si,this.toneMappingExposure=1;const v=this;let y=!1,R=0,E=0,T=null,L=-1,I=null;const _=new be,w=new be;let k=null;const z=new st(0);let V=0,Y=e.width,B=e.height,tt=1,W=null,gt=null;const xt=new be(0,0,Y,B),_t=new be(0,0,Y,B);let te=!1;const se=new bl;let Z=!1,at=!1;const Pt=new ne,mt=new ne,Ht=new A,Bt=new be,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function et(){return T===null?tt:1}let P=n;function ut(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cl}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),P===null){const U="webgl2";if(P=ut(U,S),P===null)throw ut(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ht,ot,ft,kt,wt,C,b,F,J,nt,Q,Dt,dt,At,he,lt,Ct,Wt,Xt,Lt,ue,Zt,we,D;function St(){ht=new vm(P),ht.init(),Zt=new ix(P,ht),ot=new fm(P,ht,t,Zt),ft=new tx(P),ot.reverseDepthBuffer&&ft.buffers.depth.setReversed(!0),kt=new Mm(P),wt=new Og,C=new nx(P,ht,ft,wt,ot,Zt,kt),b=new pm(v),F=new xm(v),J=new Cd(P),we=new hm(P,J),nt=new _m(P,J,kt,we),Q=new wm(P,nt,J,kt),Xt=new bm(P,ot,C),lt=new dm(wt),Dt=new Fg(v,b,F,ht,ot,we,lt),dt=new ux(v,wt),At=new Hg,he=new Yg(ht),Wt=new cm(v,b,F,ft,Q,f,l),Ct=new Jg(v,Q,ot),D=new fx(P,kt,ot,ft),Lt=new um(P,ht,kt),ue=new ym(P,ht,kt),kt.programs=Dt.programs,v.capabilities=ot,v.extensions=ht,v.properties=wt,v.renderLists=At,v.shadowMap=Ct,v.state=ft,v.info=kt}St();const q=new cx(v,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=ht.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ht.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(S){S!==void 0&&(tt=S,this.setSize(Y,B,!1))},this.getSize=function(S){return S.set(Y,B)},this.setSize=function(S,U,O=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=S,B=U,e.width=Math.floor(S*tt),e.height=Math.floor(U*tt),O===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(Y*tt,B*tt).floor()},this.setDrawingBufferSize=function(S,U,O){Y=S,B=U,tt=O,e.width=Math.floor(S*O),e.height=Math.floor(U*O),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(_)},this.getViewport=function(S){return S.copy(xt)},this.setViewport=function(S,U,O,H){S.isVector4?xt.set(S.x,S.y,S.z,S.w):xt.set(S,U,O,H),ft.viewport(_.copy(xt).multiplyScalar(tt).round())},this.getScissor=function(S){return S.copy(_t)},this.setScissor=function(S,U,O,H){S.isVector4?_t.set(S.x,S.y,S.z,S.w):_t.set(S,U,O,H),ft.scissor(w.copy(_t).multiplyScalar(tt).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(S){ft.setScissorTest(te=S)},this.setOpaqueSort=function(S){W=S},this.setTransparentSort=function(S){gt=S},this.getClearColor=function(S){return S.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(S=!0,U=!0,O=!0){let H=0;if(S){let N=!1;if(T!==null){const ct=T.texture.format;N=ct===xl||ct===gl||ct===ml}if(N){const ct=T.texture.type,Mt=ct===Yn||ct===Ai||ct===Zs||ct===gs||ct===fl||ct===dl,It=Wt.getClearColor(),Ut=Wt.getClearAlpha(),Gt=It.r,Vt=It.g,Nt=It.b;Mt?(d[0]=Gt,d[1]=Vt,d[2]=Nt,d[3]=Ut,P.clearBufferuiv(P.COLOR,0,d)):(m[0]=Gt,m[1]=Vt,m[2]=Nt,m[3]=Ut,P.clearBufferiv(P.COLOR,0,m))}else H|=P.COLOR_BUFFER_BIT}U&&(H|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),At.dispose(),he.dispose(),wt.dispose(),b.dispose(),F.dispose(),Q.dispose(),we.dispose(),D.dispose(),Dt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Bl),q.removeEventListener("sessionend",Hl),fi.stop()};function it(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const S=kt.autoReset,U=Ct.enabled,O=Ct.autoUpdate,H=Ct.needsUpdate,N=Ct.type;St(),kt.autoReset=S,Ct.enabled=U,Ct.autoUpdate=O,Ct.needsUpdate=H,Ct.type=N}function Tt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function fe(S){const U=S.target;U.removeEventListener("dispose",fe),Ne(U)}function Ne(S){tn(S),wt.remove(S)}function tn(S){const U=wt.get(S).programs;U!==void 0&&(U.forEach(function(O){Dt.releaseProgram(O)}),S.isShaderMaterial&&Dt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,O,H,N,ct){U===null&&(U=Yt);const Mt=N.isMesh&&N.matrixWorld.determinant()<0,It=Qu(S,U,O,H,N);ft.setMaterial(H,Mt);let Ut=O.index,Gt=1;if(H.wireframe===!0){if(Ut=nt.getWireframeAttribute(O),Ut===void 0)return;Gt=2}const Vt=O.drawRange,Nt=O.attributes.position;let ye=Vt.start*Gt,Ee=(Vt.start+Vt.count)*Gt;ct!==null&&(ye=Math.max(ye,ct.start*Gt),Ee=Math.min(Ee,(ct.start+ct.count)*Gt)),Ut!==null?(ye=Math.max(ye,0),Ee=Math.min(Ee,Ut.count)):Nt!=null&&(ye=Math.max(ye,0),Ee=Math.min(Ee,Nt.count));const Pe=Ee-ye;if(Pe<0||Pe===1/0)return;we.setup(N,H,It,O,Ut);let an,me=Lt;if(Ut!==null&&(an=J.get(Ut),me=ue,me.setIndex(an)),N.isMesh)H.wireframe===!0?(ft.setLineWidth(H.wireframeLinewidth*et()),me.setMode(P.LINES)):me.setMode(P.TRIANGLES);else if(N.isLine){let zt=H.linewidth;zt===void 0&&(zt=1),ft.setLineWidth(zt*et()),N.isLineSegments?me.setMode(P.LINES):N.isLineLoop?me.setMode(P.LINE_LOOP):me.setMode(P.LINE_STRIP)}else N.isPoints?me.setMode(P.POINTS):N.isSprite&&me.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)me.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))me.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const zt=N._multiDrawStarts,Ve=N._multiDrawCounts,ge=N._multiDrawCount,_n=Ut?J.get(Ut).bytesPerElement:1,Ni=wt.get(H).currentProgram.getUniforms();for(let ln=0;ln<ge;ln++)Ni.setValue(P,"_gl_DrawID",ln),me.render(zt[ln]/_n,Ve[ln])}else if(N.isInstancedMesh)me.renderInstances(ye,Pe,N.count);else if(O.isInstancedBufferGeometry){const zt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Ve=Math.min(O.instanceCount,zt);me.renderInstances(ye,Pe,Ve)}else me.render(ye,Pe)};function de(S,U,O){S.transparent===!0&&S.side===$t&&S.forceSinglePass===!1?(S.side=Fe,S.needsUpdate=!0,cr(S,U,O),S.side=qn,S.needsUpdate=!0,cr(S,U,O),S.side=$t):cr(S,U,O)}this.compile=function(S,U,O=null){O===null&&(O=S),p=he.get(O),p.init(U),M.push(p),O.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==O&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const H=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ct=N.material;if(ct)if(Array.isArray(ct))for(let Mt=0;Mt<ct.length;Mt++){const It=ct[Mt];de(It,O,N),H.add(It)}else de(ct,O,N),H.add(ct)}),M.pop(),p=null,H},this.compileAsync=function(S,U,O=null){const H=this.compile(S,U,O);return new Promise(N=>{function ct(){if(H.forEach(function(Mt){wt.get(Mt).currentProgram.isReady()&&H.delete(Mt)}),H.size===0){N(S);return}setTimeout(ct,10)}ht.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let en=null;function Dn(S){en&&en(S)}function Bl(){fi.stop()}function Hl(){fi.start()}const fi=new ou;fi.setAnimationLoop(Dn),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(S){en=S,q.setAnimationLoop(S),S===null?fi.stop():fi.start()},q.addEventListener("sessionstart",Bl),q.addEventListener("sessionend",Hl),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,U,T),p=he.get(S,M.length),p.init(U),M.push(p),mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),se.setFromProjectionMatrix(mt),at=this.localClippingEnabled,Z=lt.init(this.clippingPlanes,at),x=At.get(S,g.length),x.init(),g.push(x),q.enabled===!0&&q.isPresenting===!0){const ct=v.xr.getDepthSensingMesh();ct!==null&&_o(ct,U,-1/0,v.sortObjects)}_o(S,U,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(W,gt),ee=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,ee&&Wt.addToRenderList(x,S),this.info.render.frame++,Z===!0&&lt.beginShadows();const O=p.state.shadowsArray;Ct.render(O,S,U),Z===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=x.opaque,N=x.transmissive;if(p.setupLights(),U.isArrayCamera){const ct=U.cameras;if(N.length>0)for(let Mt=0,It=ct.length;Mt<It;Mt++){const Ut=ct[Mt];Vl(H,N,S,Ut)}ee&&Wt.render(S);for(let Mt=0,It=ct.length;Mt<It;Mt++){const Ut=ct[Mt];Gl(x,S,Ut,Ut.viewport)}}else N.length>0&&Vl(H,N,S,U),ee&&Wt.render(S),Gl(x,S,U);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),S.isScene===!0&&S.onAfterRender(v,S,U),we.resetDefaultState(),L=-1,I=null,M.pop(),M.length>0?(p=M[M.length-1],Z===!0&&lt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,g.pop(),g.length>0?x=g[g.length-1]:x=null};function _o(S,U,O,H){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)O=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||se.intersectsSprite(S)){H&&Bt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(mt);const Mt=Q.update(S),It=S.material;It.visible&&x.push(S,Mt,It,O,Bt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||se.intersectsObject(S))){const Mt=Q.update(S),It=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Bt.copy(S.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Bt.copy(Mt.boundingSphere.center)),Bt.applyMatrix4(S.matrixWorld).applyMatrix4(mt)),Array.isArray(It)){const Ut=Mt.groups;for(let Gt=0,Vt=Ut.length;Gt<Vt;Gt++){const Nt=Ut[Gt],ye=It[Nt.materialIndex];ye&&ye.visible&&x.push(S,Mt,ye,O,Bt.z,Nt)}}else It.visible&&x.push(S,Mt,It,O,Bt.z,null)}}const ct=S.children;for(let Mt=0,It=ct.length;Mt<It;Mt++)_o(ct[Mt],U,O,H)}function Gl(S,U,O,H){const N=S.opaque,ct=S.transmissive,Mt=S.transparent;p.setupLightsView(O),Z===!0&&lt.setGlobalState(v.clippingPlanes,O),H&&ft.viewport(_.copy(H)),N.length>0&&lr(N,U,O),ct.length>0&&lr(ct,U,O),Mt.length>0&&lr(Mt,U,O),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Vl(S,U,O,H){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new An(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Xn:Yn,minFilter:Ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));const ct=p.state.transmissionRenderTarget[H.id],Mt=H.viewport||_;ct.setSize(Mt.z,Mt.w);const It=v.getRenderTarget();v.setRenderTarget(ct),v.getClearColor(z),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),ee&&Wt.render(O);const Ut=v.toneMapping;v.toneMapping=si;const Gt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),Z===!0&&lt.setGlobalState(v.clippingPlanes,H),lr(S,O,H),C.updateMultisampleRenderTarget(ct),C.updateRenderTargetMipmap(ct),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let Nt=0,ye=U.length;Nt<ye;Nt++){const Ee=U[Nt],Pe=Ee.object,an=Ee.geometry,me=Ee.material,zt=Ee.group;if(me.side===$t&&Pe.layers.test(H.layers)){const Ve=me.side;me.side=Fe,me.needsUpdate=!0,Wl(Pe,O,H,an,me,zt),me.side=Ve,me.needsUpdate=!0,Vt=!0}}Vt===!0&&(C.updateMultisampleRenderTarget(ct),C.updateRenderTargetMipmap(ct))}v.setRenderTarget(It),v.setClearColor(z,V),Gt!==void 0&&(H.viewport=Gt),v.toneMapping=Ut}function lr(S,U,O){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ct=S.length;N<ct;N++){const Mt=S[N],It=Mt.object,Ut=Mt.geometry,Gt=H===null?Mt.material:H,Vt=Mt.group;It.layers.test(O.layers)&&Wl(It,U,O,Ut,Gt,Vt)}}function Wl(S,U,O,H,N,ct){S.onBeforeRender(v,U,O,H,N,ct),S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(v,U,O,H,S,ct),N.transparent===!0&&N.side===$t&&N.forceSinglePass===!1?(N.side=Fe,N.needsUpdate=!0,v.renderBufferDirect(O,U,H,N,S,ct),N.side=qn,N.needsUpdate=!0,v.renderBufferDirect(O,U,H,N,S,ct),N.side=$t):v.renderBufferDirect(O,U,H,N,S,ct),S.onAfterRender(v,U,O,H,N,ct)}function cr(S,U,O){U.isScene!==!0&&(U=Yt);const H=wt.get(S),N=p.state.lights,ct=p.state.shadowsArray,Mt=N.state.version,It=Dt.getParameters(S,N.state,ct,U,O),Ut=Dt.getProgramCacheKey(It);let Gt=H.programs;H.environment=S.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(S.isMeshStandardMaterial?F:b).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Gt===void 0&&(S.addEventListener("dispose",fe),Gt=new Map,H.programs=Gt);let Vt=Gt.get(Ut);if(Vt!==void 0){if(H.currentProgram===Vt&&H.lightsStateVersion===Mt)return ql(S,It),Vt}else It.uniforms=Dt.getUniforms(S),S.onBeforeCompile(It,v),Vt=Dt.acquireProgram(It,Ut),Gt.set(Ut,Vt),H.uniforms=It.uniforms;const Nt=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Nt.clippingPlanes=lt.uniform),ql(S,It),H.needsLights=ef(S),H.lightsStateVersion=Mt,H.needsLights&&(Nt.ambientLightColor.value=N.state.ambient,Nt.lightProbe.value=N.state.probe,Nt.directionalLights.value=N.state.directional,Nt.directionalLightShadows.value=N.state.directionalShadow,Nt.spotLights.value=N.state.spot,Nt.spotLightShadows.value=N.state.spotShadow,Nt.rectAreaLights.value=N.state.rectArea,Nt.ltc_1.value=N.state.rectAreaLTC1,Nt.ltc_2.value=N.state.rectAreaLTC2,Nt.pointLights.value=N.state.point,Nt.pointLightShadows.value=N.state.pointShadow,Nt.hemisphereLights.value=N.state.hemi,Nt.directionalShadowMap.value=N.state.directionalShadowMap,Nt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Nt.spotShadowMap.value=N.state.spotShadowMap,Nt.spotLightMatrix.value=N.state.spotLightMatrix,Nt.spotLightMap.value=N.state.spotLightMap,Nt.pointShadowMap.value=N.state.pointShadowMap,Nt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Vt,H.uniformsList=null,Vt}function Xl(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=$r.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function ql(S,U){const O=wt.get(S);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Qu(S,U,O,H,N){U.isScene!==!0&&(U=Yt),C.resetTextureUnits();const ct=U.fog,Mt=H.isMeshStandardMaterial?U.environment:null,It=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:hi,Ut=(H.isMeshStandardMaterial?F:b).get(H.envMap||Mt),Gt=H.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Vt=!!O.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Nt=!!O.morphAttributes.position,ye=!!O.morphAttributes.normal,Ee=!!O.morphAttributes.color;let Pe=si;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Pe=v.toneMapping);const an=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,me=an!==void 0?an.length:0,zt=wt.get(H),Ve=p.state.lights;if(Z===!0&&(at===!0||S!==I)){const pn=S===I&&H.id===L;lt.setState(H,S,pn)}let ge=!1;H.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Ve.state.version||zt.outputColorSpace!==It||N.isBatchedMesh&&zt.batching===!1||!N.isBatchedMesh&&zt.batching===!0||N.isBatchedMesh&&zt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&zt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&zt.instancing===!1||!N.isInstancedMesh&&zt.instancing===!0||N.isSkinnedMesh&&zt.skinning===!1||!N.isSkinnedMesh&&zt.skinning===!0||N.isInstancedMesh&&zt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&zt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&zt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&zt.instancingMorph===!1&&N.morphTexture!==null||zt.envMap!==Ut||H.fog===!0&&zt.fog!==ct||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==lt.numPlanes||zt.numIntersection!==lt.numIntersection)||zt.vertexAlphas!==Gt||zt.vertexTangents!==Vt||zt.morphTargets!==Nt||zt.morphNormals!==ye||zt.morphColors!==Ee||zt.toneMapping!==Pe||zt.morphTargetsCount!==me)&&(ge=!0):(ge=!0,zt.__version=H.version);let _n=zt.currentProgram;ge===!0&&(_n=cr(H,U,N));let Ni=!1,ln=!1,yo=!1;const Le=_n.getUniforms(),Kn=zt.uniforms;if(ft.useProgram(_n.program)&&(Ni=!0,ln=!0,yo=!0),H.id!==L&&(L=H.id,ln=!0),Ni||I!==S){ot.reverseDepthBuffer?(Pt.copy(S.projectionMatrix),id(Pt),sd(Pt),Le.setValue(P,"projectionMatrix",Pt)):Le.setValue(P,"projectionMatrix",S.projectionMatrix),Le.setValue(P,"viewMatrix",S.matrixWorldInverse);const pn=Le.map.cameraPosition;pn!==void 0&&pn.setValue(P,Ht.setFromMatrixPosition(S.matrixWorld)),ot.logarithmicDepthBuffer&&Le.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Le.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),I!==S&&(I=S,ln=!0,yo=!0)}if(N.isSkinnedMesh){Le.setOptional(P,N,"bindMatrix"),Le.setOptional(P,N,"bindMatrixInverse");const pn=N.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Le.setValue(P,"boneTexture",pn.boneTexture,C))}N.isBatchedMesh&&(Le.setOptional(P,N,"batchingTexture"),Le.setValue(P,"batchingTexture",N._matricesTexture,C),Le.setOptional(P,N,"batchingIdTexture"),Le.setValue(P,"batchingIdTexture",N._indirectTexture,C),Le.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&Le.setValue(P,"batchingColorTexture",N._colorsTexture,C));const Mo=O.morphAttributes;if((Mo.position!==void 0||Mo.normal!==void 0||Mo.color!==void 0)&&Xt.update(N,O,_n),(ln||zt.receiveShadow!==N.receiveShadow)&&(zt.receiveShadow=N.receiveShadow,Le.setValue(P,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Kn.envMap.value=Ut,Kn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Kn.envMapIntensity.value=U.environmentIntensity),ln&&(Le.setValue(P,"toneMappingExposure",v.toneMappingExposure),zt.needsLights&&tf(Kn,yo),ct&&H.fog===!0&&dt.refreshFogUniforms(Kn,ct),dt.refreshMaterialUniforms(Kn,H,tt,B,p.state.transmissionRenderTarget[S.id]),$r.upload(P,Xl(zt),Kn,C)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&($r.upload(P,Xl(zt),Kn,C),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Le.setValue(P,"center",N.center),Le.setValue(P,"modelViewMatrix",N.modelViewMatrix),Le.setValue(P,"normalMatrix",N.normalMatrix),Le.setValue(P,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const pn=H.uniformsGroups;for(let bo=0,nf=pn.length;bo<nf;bo++){const Yl=pn[bo];D.update(Yl,_n),D.bind(Yl,_n)}}return _n}function tf(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function ef(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(S,U,O){wt.get(S.texture).__webglTexture=U,wt.get(S.depthTexture).__webglTexture=O;const H=wt.get(S);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=O===void 0,H.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const O=wt.get(S);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,O=0){T=S,R=U,E=O;let H=!0,N=null,ct=!1,Mt=!1;if(S){const Ut=wt.get(S);if(Ut.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(Ut.__webglFramebuffer===void 0)C.setupRenderTarget(S);else if(Ut.__hasExternalTextures)C.rebindTextures(S,wt.get(S.texture).__webglTexture,wt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Nt=S.depthTexture;if(Ut.__boundDepthTexture!==Nt){if(Nt!==null&&wt.has(Nt)&&(S.width!==Nt.image.width||S.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(S)}}const Gt=S.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(Mt=!0);const Vt=wt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Vt[U])?N=Vt[U][O]:N=Vt[U],ct=!0):S.samples>0&&C.useMultisampledRTT(S)===!1?N=wt.get(S).__webglMultisampledFramebuffer:Array.isArray(Vt)?N=Vt[O]:N=Vt,_.copy(S.viewport),w.copy(S.scissor),k=S.scissorTest}else _.copy(xt).multiplyScalar(tt).floor(),w.copy(_t).multiplyScalar(tt).floor(),k=te;if(ft.bindFramebuffer(P.FRAMEBUFFER,N)&&H&&ft.drawBuffers(S,N),ft.viewport(_),ft.scissor(w),ft.setScissorTest(k),ct){const Ut=wt.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ut.__webglTexture,O)}else if(Mt){const Ut=wt.get(S.texture),Gt=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ut.__webglTexture,O||0,Gt)}L=-1},this.readRenderTargetPixels=function(S,U,O,H,N,ct,Mt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=wt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Mt!==void 0&&(It=It[Mt]),It){ft.bindFramebuffer(P.FRAMEBUFFER,It);try{const Ut=S.texture,Gt=Ut.format,Vt=Ut.type;if(!ot.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-H&&O>=0&&O<=S.height-N&&P.readPixels(U,O,H,N,Zt.convert(Gt),Zt.convert(Vt),ct)}finally{const Ut=T!==null?wt.get(T).__webglFramebuffer:null;ft.bindFramebuffer(P.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(S,U,O,H,N,ct,Mt){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=wt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Mt!==void 0&&(It=It[Mt]),It){const Ut=S.texture,Gt=Ut.format,Vt=Ut.type;if(!ot.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-H&&O>=0&&O<=S.height-N){ft.bindFramebuffer(P.FRAMEBUFFER,It);const Nt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Nt),P.bufferData(P.PIXEL_PACK_BUFFER,ct.byteLength,P.STREAM_READ),P.readPixels(U,O,H,N,Zt.convert(Gt),Zt.convert(Vt),0);const ye=T!==null?wt.get(T).__webglFramebuffer:null;ft.bindFramebuffer(P.FRAMEBUFFER,ye);const Ee=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await nd(P,Ee,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Nt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ct),P.deleteBuffer(Nt),P.deleteSync(Ee),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,O=0){S.isTexture!==!0&&(Yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const H=Math.pow(2,-O),N=Math.floor(S.image.width*H),ct=Math.floor(S.image.height*H),Mt=U!==null?U.x:0,It=U!==null?U.y:0;C.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,O,0,0,Mt,It,N,ct),ft.unbindTexture()},this.copyTextureToTexture=function(S,U,O=null,H=null,N=0){S.isTexture!==!0&&(Yr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,S=arguments[1],U=arguments[2],N=arguments[3]||0,O=null);let ct,Mt,It,Ut,Gt,Vt;O!==null?(ct=O.max.x-O.min.x,Mt=O.max.y-O.min.y,It=O.min.x,Ut=O.min.y):(ct=S.image.width,Mt=S.image.height,It=0,Ut=0),H!==null?(Gt=H.x,Vt=H.y):(Gt=0,Vt=0);const Nt=Zt.convert(U.format),ye=Zt.convert(U.type);C.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Ee=P.getParameter(P.UNPACK_ROW_LENGTH),Pe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),an=P.getParameter(P.UNPACK_SKIP_PIXELS),me=P.getParameter(P.UNPACK_SKIP_ROWS),zt=P.getParameter(P.UNPACK_SKIP_IMAGES),Ve=S.isCompressedTexture?S.mipmaps[N]:S.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Ve.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ve.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,It),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ut),S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,Gt,Vt,ct,Mt,Nt,ye,Ve.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,Gt,Vt,Ve.width,Ve.height,Nt,Ve.data):P.texSubImage2D(P.TEXTURE_2D,N,Gt,Vt,ct,Mt,Nt,ye,Ve),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ee),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Pe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,an),P.pixelStorei(P.UNPACK_SKIP_ROWS,me),P.pixelStorei(P.UNPACK_SKIP_IMAGES,zt),N===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(S,U,O=null,H=null,N=0){S.isTexture!==!0&&(Yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,H=arguments[1]||null,S=arguments[2],U=arguments[3],N=arguments[4]||0);let ct,Mt,It,Ut,Gt,Vt,Nt,ye,Ee;const Pe=S.isCompressedTexture?S.mipmaps[N]:S.image;O!==null?(ct=O.max.x-O.min.x,Mt=O.max.y-O.min.y,It=O.max.z-O.min.z,Ut=O.min.x,Gt=O.min.y,Vt=O.min.z):(ct=Pe.width,Mt=Pe.height,It=Pe.depth,Ut=0,Gt=0,Vt=0),H!==null?(Nt=H.x,ye=H.y,Ee=H.z):(Nt=0,ye=0,Ee=0);const an=Zt.convert(U.format),me=Zt.convert(U.type);let zt;if(U.isData3DTexture)C.setTexture3D(U,0),zt=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)C.setTexture2DArray(U,0),zt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Ve=P.getParameter(P.UNPACK_ROW_LENGTH),ge=P.getParameter(P.UNPACK_IMAGE_HEIGHT),_n=P.getParameter(P.UNPACK_SKIP_PIXELS),Ni=P.getParameter(P.UNPACK_SKIP_ROWS),ln=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Pe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Pe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ut),P.pixelStorei(P.UNPACK_SKIP_ROWS,Gt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Vt),S.isDataTexture||S.isData3DTexture?P.texSubImage3D(zt,N,Nt,ye,Ee,ct,Mt,It,an,me,Pe.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(zt,N,Nt,ye,Ee,ct,Mt,It,an,Pe.data):P.texSubImage3D(zt,N,Nt,ye,Ee,ct,Mt,It,an,me,Pe),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ve),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ge),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_n),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ni),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ln),N===0&&U.generateMipmaps&&P.generateMipmap(zt),ft.unbindTexture()},this.initRenderTarget=function(S){wt.get(S).__webglFramebuffer===void 0&&C.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?C.setTextureCube(S,0):S.isData3DTexture?C.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?C.setTexture2DArray(S,0):C.setTexture2D(S,0),ft.unbindTexture()},this.resetState=function(){R=0,E=0,T=null,ft.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===vl?"display-p3":"srgb",e.unpackColorSpace=pe.workingColorSpace===ao?"display-p3":"srgb"}}class Tl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new st(t),this.near=e,this.far=n}clone(){return new Tl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fu extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $e,this.environmentIntensity=1,this.environmentRotation=new $e,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class px{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ja,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const je=new A;class eo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Tn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Tn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Tn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Tn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),s=Me(s,this.array),r=Me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new eo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class no extends Li{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ki;const Us=new A,Zi=new A,Ji=new A,Qi=new K,Ns=new K,du=new ne,Lr=new A,ks=new A,Ir=new A,Bc=new K,Jo=new K,Hc=new K;class el extends De{constructor(t=new no){if(super(),this.isSprite=!0,this.type="Sprite",Ki===void 0){Ki=new Te;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new px(e,5);Ki.setIndex([0,1,2,0,2,3]),Ki.setAttribute("position",new eo(n,3,0,!1)),Ki.setAttribute("uv",new eo(n,2,3,!1))}this.geometry=Ki,this.material=t,this.center=new K(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zi.setFromMatrixScale(this.matrixWorld),du.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ji.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zi.multiplyScalar(-Ji.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Dr(Lr.set(-.5,-.5,0),Ji,o,Zi,s,r),Dr(ks.set(.5,-.5,0),Ji,o,Zi,s,r),Dr(Ir.set(.5,.5,0),Ji,o,Zi,s,r),Bc.set(0,0),Jo.set(1,0),Hc.set(1,1);let a=t.ray.intersectTriangle(Lr,ks,Ir,!1,Us);if(a===null&&(Dr(ks.set(-.5,.5,0),Ji,o,Zi,s,r),Jo.set(0,1),a=t.ray.intersectTriangle(Lr,Ir,ks,!1,Us),a===null))return;const l=t.ray.origin.distanceTo(Us);l<t.near||l>t.far||e.push({distance:l,point:Us.clone(),uv:xn.getInterpolation(Us,Lr,ks,Ir,Bc,Jo,Hc,new K),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Dr(i,t,e,n,s,r){Qi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ns.x=r*Qi.x-s*Qi.y,Ns.y=s*Qi.x+r*Qi.y):Ns.copy(Qi),i.copy(t),i.x+=Ns.x,i.y+=Ns.y,i.applyMatrix4(du)}class mx extends Ye{constructor(t=null,e=1,n=1,s,r,o,a,l,c=on,h=on,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gc extends Ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ts=new ne,Vc=new ne,Ur=[],Wc=new Pi,gx=new ne,zs=new rt,Fs=new ws;class ai extends rt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Gc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),Wc.copy(t.boundingBox).applyMatrix4(ts),this.boundingBox.union(Wc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ws),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ts),Fs.copy(t.boundingSphere).applyMatrix4(ts),this.boundingSphere.union(Fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),t.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ts),Vc.multiplyMatrices(n,ts),zs.matrixWorld=Vc,zs.raycast(t,Ur);for(let o=0,a=Ur.length;o<a;o++){const l=Ur[o];l.instanceId=r,l.object=this,e.push(l)}Ur.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Gc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new mx(new Float32Array(s*this.count),s,this.count,pl,Pn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class pu extends Li{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xc=new ne,nl=new yl,Nr=new ws,kr=new A;class xx extends De{constructor(t=new Te,e=new pu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(s),Nr.radius+=r,t.ray.intersectsSphere(Nr)===!1)return;Xc.copy(s).invert(),nl.copy(t.ray).applyMatrix4(Xc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,x=d;m<x;m++){const p=c.getX(m);kr.fromBufferAttribute(u,p),qc(kr,p,l,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,x=d;m<x;m++)kr.fromBufferAttribute(u,m),qc(kr,m,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qc(i,t,e,n,s,r,o){const a=nl.distanceSqToPoint(i);if(a<e){const l=new A;nl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class vx extends Ye{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new K:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new A,s=[],r=[],o=[],a=new A,l=new ne;for(let d=0;d<=t;d++){const m=d/t;s[d]=this.getTangentAt(m,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(ze(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ze(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class El extends In{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new K){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _x extends El{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Al(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const zr=new A,Qo=new Al,ta=new Al,ea=new Al;class sr extends In{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(zr.subVectors(s[0],s[1]).add(s[0]),c=zr);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(zr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=zr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),m<1e-4&&(m=x),p<1e-4&&(p=x),Qo.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,x,p),ta.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,x,p),ea.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,x,p)}else this.curveType==="catmullrom"&&(Qo.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ta.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ea.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Qo.calc(l),ta.calc(l),ea.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Yc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function yx(i,t){const e=1-i;return e*e*t}function Mx(i,t){return 2*(1-i)*i*t}function bx(i,t){return i*i*t}function Ys(i,t,e,n){return yx(i,t)+Mx(i,e)+bx(i,n)}function wx(i,t){const e=1-i;return e*e*e*t}function Sx(i,t){const e=1-i;return 3*e*e*i*t}function Tx(i,t){return 3*(1-i)*i*i*t}function Ex(i,t){return i*i*i*t}function $s(i,t,e,n,s){return wx(i,t)+Sx(i,e)+Tx(i,n)+Ex(i,s)}class mu extends In{constructor(t=new K,e=new K,n=new K,s=new K){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new K){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ax extends In{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y),$s(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gu extends In{constructor(t=new K,e=new K){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new K){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new K){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xu extends In{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vu extends In{constructor(t=new K,e=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new K){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ys(t,s.x,r.x,o.x),Ys(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cl extends In{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ys(t,s.x,r.x,o.x),Ys(t,s.y,r.y,o.y),Ys(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _u extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new K){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Yc(a,l.x,c.x,h.x,u.x),Yc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new K().fromArray(s))}return this}}var io=Object.freeze({__proto__:null,ArcCurve:_x,CatmullRomCurve3:sr,CubicBezierCurve:mu,CubicBezierCurve3:Ax,EllipseCurve:El,LineCurve:gu,LineCurve3:xu,QuadraticBezierCurve:vu,QuadraticBezierCurve3:Cl,SplineCurve:_u});class Cx extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new io[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new io[s.type]().fromJSON(s))}return this}}class so extends Cx{constructor(t){super(),this.type="Path",this.currentPoint=new K,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new gu(this.currentPoint.clone(),new K(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new vu(this.currentPoint.clone(),new K(t,e),new K(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new mu(this.currentPoint.clone(),new K(t,e),new K(n,s),new K(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new _u(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new El(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ui extends Te{constructor(t=[new K(0,-.5),new K(.5,0),new K(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ze(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new A,f=new K,d=new A,m=new A,x=new A;let p=0,g=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:p=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,d.x=g*1,d.y=-p,d.z=g*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,d.x=g*1,d.y=-p,d.z=g*0,m.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(m)}for(let M=0;M<=e;M++){const v=n+M*h*s,y=Math.sin(v),R=Math.cos(v);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*y,u.y=t[E].y,u.z=t[E].x*R,o.push(u.x,u.y,u.z),f.x=M/e,f.y=E/(t.length-1),a.push(f.x,f.y);const T=l[3*E+0]*y,L=l[3*E+1],I=l[3*E+0]*R;c.push(T,L,I)}}for(let M=0;M<e;M++)for(let v=0;v<t.length-1;v++){const y=v+M*t.length,R=y,E=y+t.length,T=y+t.length+1,L=y+1;r.push(R,E,L),r.push(T,L,E)}this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("uv",new Kt(a,2)),this.setAttribute("normal",new Kt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ui(t.points,t.segments,t.phiStart,t.phiLength)}}class Rl extends ui{constructor(t=1,e=1,n=4,s=8){const r=new so;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Rl(t.radius,t.length,t.capSegments,t.radialSegments)}}class Ge extends Te{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new A,h=new K;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ge(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class vt extends Te{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let m=0;const x=[],p=n/2;let g=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(f,3)),this.setAttribute("uv",new Kt(d,2));function M(){const y=new A,R=new A;let E=0;const T=(e-t)/n;for(let L=0;L<=r;L++){const I=[],_=L/r,w=_*(e-t)+t;for(let k=0;k<=s;k++){const z=k/s,V=z*l+a,Y=Math.sin(V),B=Math.cos(V);R.x=w*Y,R.y=-_*n+p,R.z=w*B,u.push(R.x,R.y,R.z),y.set(Y,T,B).normalize(),f.push(y.x,y.y,y.z),d.push(z,1-_),I.push(m++)}x.push(I)}for(let L=0;L<s;L++)for(let I=0;I<r;I++){const _=x[I][L],w=x[I+1][L],k=x[I+1][L+1],z=x[I][L+1];t>0&&(h.push(_,w,z),E+=3),e>0&&(h.push(w,k,z),E+=3)}c.addGroup(g,E,0),g+=E}function v(y){const R=m,E=new K,T=new A;let L=0;const I=y===!0?t:e,_=y===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,p*_,0),f.push(0,_,0),d.push(.5,.5),m++;const w=m;for(let k=0;k<=s;k++){const V=k/s*l+a,Y=Math.cos(V),B=Math.sin(V);T.x=I*B,T.y=p*_,T.z=I*Y,u.push(T.x,T.y,T.z),f.push(0,_,0),E.x=Y*.5+.5,E.y=B*.5*_+.5,d.push(E.x,E.y),m++}for(let k=0;k<s;k++){const z=R+k,V=w+k;y===!0?h.push(V,V+1,z):h.push(V+1,V,z),L+=3}c.addGroup(g,L,y===!0?1:2),g+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rr extends vt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new rr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pl extends Te{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new A,y=new A,R=new A;for(let E=0;E<e.length;E+=3)d(e[E+0],v),d(e[E+1],y),d(e[E+2],R),l(v,y,R,M)}function l(M,v,y,R){const E=R+1,T=[];for(let L=0;L<=E;L++){T[L]=[];const I=M.clone().lerp(y,L/E),_=v.clone().lerp(y,L/E),w=E-L;for(let k=0;k<=w;k++)k===0&&L===E?T[L][k]=I:T[L][k]=I.clone().lerp(_,k/w)}for(let L=0;L<E;L++)for(let I=0;I<2*(E-L)-1;I++){const _=Math.floor(I/2);I%2===0?(f(T[L][_+1]),f(T[L+1][_]),f(T[L][_])):(f(T[L][_+1]),f(T[L+1][_+1]),f(T[L+1][_]))}}function c(M){const v=new A;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(M),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){const M=new A;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];const y=p(M)/2/Math.PI+.5,R=g(M)/Math.PI+.5;o.push(y,1-R)}m(),u()}function u(){for(let M=0;M<o.length;M+=6){const v=o[M+0],y=o[M+2],R=o[M+4],E=Math.max(v,y,R),T=Math.min(v,y,R);E>.9&&T<.1&&(v<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),R<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function d(M,v){const y=M*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function m(){const M=new A,v=new A,y=new A,R=new A,E=new K,T=new K,L=new K;for(let I=0,_=0;I<r.length;I+=9,_+=6){M.set(r[I+0],r[I+1],r[I+2]),v.set(r[I+3],r[I+4],r[I+5]),y.set(r[I+6],r[I+7],r[I+8]),E.set(o[_+0],o[_+1]),T.set(o[_+2],o[_+3]),L.set(o[_+4],o[_+5]),R.copy(M).add(v).add(y).divideScalar(3);const w=p(R);x(E,_+0,M,w),x(T,_+2,v,w),x(L,_+4,y,w)}}function x(M,v,y,R){R<0&&M.x===1&&(o[v]=M.x-1),y.x===0&&y.z===0&&(o[v]=R/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pl(t.vertices,t.indices,t.radius,t.details)}}class Ii extends so{constructor(t){super(t),this.uuid=Ln(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new so().fromJSON(s))}return this}}const Rx={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=yu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=Ux(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let m=e;m<s;m+=e)u=i[m],f=i[m+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Qs(r,o,e,a,l,d,0),o}};function yu(i,t,e,n,s){let r,o;if(s===Xx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=$c(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=$c(r,i[r],i[r+1],o);return o&&co(o,o.next)&&(er(o),o=o.next),o}function Ci(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(co(e,e.next)||Ce(e.prev,e,e.next)===0)){if(er(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Qs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Ox(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Lx(i,n,s,r):Px(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),er(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Ix(Ci(i),t,e),Qs(i,t,e,n,s,r,2)):o===2&&Dx(i,t,e,n,s,r):Qs(Ci(i),t,e,n,s,r,1);break}}}function Px(i){const t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&is(s,a,r,l,o,c,m.x,m.y)&&Ce(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Lx(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ce(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,g=il(d,m,t,e,n),M=il(x,p,t,e,n);let v=i.prevZ,y=i.nextZ;for(;v&&v.z>=g&&y&&y.z<=M;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=p&&v!==s&&v!==o&&is(a,h,l,u,c,f,v.x,v.y)&&Ce(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=x&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&is(a,h,l,u,c,f,y.x,y.y)&&Ce(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=g;){if(v.x>=d&&v.x<=x&&v.y>=m&&v.y<=p&&v!==s&&v!==o&&is(a,h,l,u,c,f,v.x,v.y)&&Ce(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=M;){if(y.x>=d&&y.x<=x&&y.y>=m&&y.y<=p&&y!==s&&y!==o&&is(a,h,l,u,c,f,y.x,y.y)&&Ce(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Ix(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!co(s,r)&&Mu(s,n,n.next,r)&&tr(s,r)&&tr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),er(n),er(n.next),n=i=r),n=n.next}while(n!==i);return Ci(n)}function Dx(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Gx(o,a)){let l=bu(o,a);o=Ci(o,o.next),l=Ci(l,l.next),Qs(o,t,e,n,s,r,0),Qs(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ux(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=yu(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Hx(c));for(s.sort(Nx),r=0;r<s.length;r++)e=kx(s[r],e);return e}function Nx(i,t){return i.x-t.x}function kx(i,t){const e=zx(i,t);if(!e)return t;const n=bu(e,i);return Ci(n,n.next),Ci(e,e.next)}function zx(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&is(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),tr(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Fx(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Fx(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function Ox(i,t,e,n){let s=i;do s.z===0&&(s.z=il(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Bx(s)}function Bx(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function il(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Hx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function is(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Gx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Vx(i,t)&&(tr(i,t)&&tr(t,i)&&Wx(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||co(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function co(i,t){return i.x===t.x&&i.y===t.y}function Mu(i,t,e,n){const s=Or(Ce(i,t,e)),r=Or(Ce(i,t,n)),o=Or(Ce(e,n,i)),a=Or(Ce(e,n,t));return!!(s!==r&&o!==a||s===0&&Fr(i,e,t)||r===0&&Fr(i,n,t)||o===0&&Fr(e,i,n)||a===0&&Fr(e,t,n))}function Fr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Or(i){return i>0?1:i<0?-1:0}function Vx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Mu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function tr(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function Wx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function bu(i,t){const e=new sl(i.i,i.x,i.y),n=new sl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function $c(i,t,e,n){const s=new sl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function sl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Xx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ri{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ri.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];jc(t),Kc(n,t);let o=t.length;e.forEach(jc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Kc(n,e[l]);const a=Rx.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function jc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Kc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ho extends Te{constructor(t=new Ii([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Kt(s,3)),this.setAttribute("uv",new Kt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:qx;let v,y=!1,R,E,T,L;g&&(v=g.getSpacedPoints(h),y=!0,f=!1,R=g.computeFrenetFrames(h,!1),E=new A,T=new A,L=new A),f||(p=0,d=0,m=0,x=0);const I=a.extractPoints(c);let _=I.shape;const w=I.holes;if(!ri.isClockWise(_)){_=_.reverse();for(let et=0,P=w.length;et<P;et++){const ut=w[et];ri.isClockWise(ut)&&(w[et]=ut.reverse())}}const z=ri.triangulateShape(_,w),V=_;for(let et=0,P=w.length;et<P;et++){const ut=w[et];_=_.concat(ut)}function Y(et,P,ut){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(P,ut)}const B=_.length,tt=z.length;function W(et,P,ut){let ht,ot,ft;const kt=et.x-P.x,wt=et.y-P.y,C=ut.x-et.x,b=ut.y-et.y,F=kt*kt+wt*wt,J=kt*b-wt*C;if(Math.abs(J)>Number.EPSILON){const nt=Math.sqrt(F),Q=Math.sqrt(C*C+b*b),Dt=P.x-wt/nt,dt=P.y+kt/nt,At=ut.x-b/Q,he=ut.y+C/Q,lt=((At-Dt)*b-(he-dt)*C)/(kt*b-wt*C);ht=Dt+kt*lt-et.x,ot=dt+wt*lt-et.y;const Ct=ht*ht+ot*ot;if(Ct<=2)return new K(ht,ot);ft=Math.sqrt(Ct/2)}else{let nt=!1;kt>Number.EPSILON?C>Number.EPSILON&&(nt=!0):kt<-Number.EPSILON?C<-Number.EPSILON&&(nt=!0):Math.sign(wt)===Math.sign(b)&&(nt=!0),nt?(ht=-wt,ot=kt,ft=Math.sqrt(F)):(ht=kt,ot=wt,ft=Math.sqrt(F/2))}return new K(ht/ft,ot/ft)}const gt=[];for(let et=0,P=V.length,ut=P-1,ht=et+1;et<P;et++,ut++,ht++)ut===P&&(ut=0),ht===P&&(ht=0),gt[et]=W(V[et],V[ut],V[ht]);const xt=[];let _t,te=gt.concat();for(let et=0,P=w.length;et<P;et++){const ut=w[et];_t=[];for(let ht=0,ot=ut.length,ft=ot-1,kt=ht+1;ht<ot;ht++,ft++,kt++)ft===ot&&(ft=0),kt===ot&&(kt=0),_t[ht]=W(ut[ht],ut[ft],ut[kt]);xt.push(_t),te=te.concat(_t)}for(let et=0;et<p;et++){const P=et/p,ut=d*Math.cos(P*Math.PI/2),ht=m*Math.sin(P*Math.PI/2)+x;for(let ot=0,ft=V.length;ot<ft;ot++){const kt=Y(V[ot],gt[ot],ht);mt(kt.x,kt.y,-ut)}for(let ot=0,ft=w.length;ot<ft;ot++){const kt=w[ot];_t=xt[ot];for(let wt=0,C=kt.length;wt<C;wt++){const b=Y(kt[wt],_t[wt],ht);mt(b.x,b.y,-ut)}}}const se=m+x;for(let et=0;et<B;et++){const P=f?Y(_[et],te[et],se):_[et];y?(T.copy(R.normals[0]).multiplyScalar(P.x),E.copy(R.binormals[0]).multiplyScalar(P.y),L.copy(v[0]).add(T).add(E),mt(L.x,L.y,L.z)):mt(P.x,P.y,0)}for(let et=1;et<=h;et++)for(let P=0;P<B;P++){const ut=f?Y(_[P],te[P],se):_[P];y?(T.copy(R.normals[et]).multiplyScalar(ut.x),E.copy(R.binormals[et]).multiplyScalar(ut.y),L.copy(v[et]).add(T).add(E),mt(L.x,L.y,L.z)):mt(ut.x,ut.y,u/h*et)}for(let et=p-1;et>=0;et--){const P=et/p,ut=d*Math.cos(P*Math.PI/2),ht=m*Math.sin(P*Math.PI/2)+x;for(let ot=0,ft=V.length;ot<ft;ot++){const kt=Y(V[ot],gt[ot],ht);mt(kt.x,kt.y,u+ut)}for(let ot=0,ft=w.length;ot<ft;ot++){const kt=w[ot];_t=xt[ot];for(let wt=0,C=kt.length;wt<C;wt++){const b=Y(kt[wt],_t[wt],ht);y?mt(b.x,b.y+v[h-1].y,v[h-1].x+ut):mt(b.x,b.y,u+ut)}}}Z(),at();function Z(){const et=s.length/3;if(f){let P=0,ut=B*P;for(let ht=0;ht<tt;ht++){const ot=z[ht];Ht(ot[2]+ut,ot[1]+ut,ot[0]+ut)}P=h+p*2,ut=B*P;for(let ht=0;ht<tt;ht++){const ot=z[ht];Ht(ot[0]+ut,ot[1]+ut,ot[2]+ut)}}else{for(let P=0;P<tt;P++){const ut=z[P];Ht(ut[2],ut[1],ut[0])}for(let P=0;P<tt;P++){const ut=z[P];Ht(ut[0]+B*h,ut[1]+B*h,ut[2]+B*h)}}n.addGroup(et,s.length/3-et,0)}function at(){const et=s.length/3;let P=0;Pt(V,P),P+=V.length;for(let ut=0,ht=w.length;ut<ht;ut++){const ot=w[ut];Pt(ot,P),P+=ot.length}n.addGroup(et,s.length/3-et,1)}function Pt(et,P){let ut=et.length;for(;--ut>=0;){const ht=ut;let ot=ut-1;ot<0&&(ot=et.length-1);for(let ft=0,kt=h+p*2;ft<kt;ft++){const wt=B*ft,C=B*(ft+1),b=P+ht+wt,F=P+ot+wt,J=P+ot+C,nt=P+ht+C;Bt(b,F,J,nt)}}}function mt(et,P,ut){l.push(et),l.push(P),l.push(ut)}function Ht(et,P,ut){Yt(et),Yt(P),Yt(ut);const ht=s.length/3,ot=M.generateTopUV(n,s,ht-3,ht-2,ht-1);ee(ot[0]),ee(ot[1]),ee(ot[2])}function Bt(et,P,ut,ht){Yt(et),Yt(P),Yt(ht),Yt(P),Yt(ut),Yt(ht);const ot=s.length/3,ft=M.generateSideWallUV(n,s,ot-6,ot-3,ot-2,ot-1);ee(ft[0]),ee(ft[1]),ee(ft[3]),ee(ft[1]),ee(ft[2]),ee(ft[3])}function Yt(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function ee(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Yx(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new io[s.type]().fromJSON(s)),new ho(n,t.options)}}const qx={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new K(r,o),new K(a,l),new K(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],m=t[s*3+2],x=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new K(o,1-l),new K(c,1-u),new K(f,1-m),new K(x,1-g)]:[new K(a,1-l),new K(h,1-u),new K(d,1-m),new K(p,1-g)]}};function Yx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class vn extends Pl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new vn(t.radius,t.detail)}}class Ll extends Te{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,d=new A,m=new K;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){const g=r+p/n*o;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let x=0;x<s;x++){const p=x*(n+1);for(let g=0;g<n;g++){const M=g+p,v=M,y=M+n+1,R=M+n+2,E=M+1;a.push(v,y,E),a.push(y,R,E)}}this.setIndex(a),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(c,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ll(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class or extends Te{constructor(t=new Ii([new K(0,.5),new K(-.5,-.5),new K(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(r,3)),this.setAttribute("uv",new Kt(o,2));function c(h){const u=s.length/3,f=h.extractPoints(e);let d=f.shape;const m=f.holes;ri.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,g=m.length;p<g;p++){const M=m[p];ri.isClockWise(M)===!0&&(m[p]=M.reverse())}const x=ri.triangulateShape(d,m);for(let p=0,g=m.length;p<g;p++){const M=m[p];d=d.concat(M)}for(let p=0,g=d.length;p<g;p++){const M=d[p];s.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let p=0,g=x.length;p<g;p++){const M=x[p],v=M[0]+u,y=M[1]+u,R=M[2]+u;n.push(v,y,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return $x(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new or(n,t.curveSegments)}}function $x(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class oe extends Te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new A,f=new A,d=[],m=[],x=[],p=[];for(let g=0;g<=n;g++){const M=[],v=g/n;let y=0;g===0&&o===0?y=.5/e:g===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){const E=R/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+v*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(E+y,1-v),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){const v=h[g][M+1],y=h[g][M],R=h[g+1][M],E=h[g+1][M+1];(g!==0||o>0)&&d.push(v,y,E),(g!==n-1||l<Math.PI)&&d.push(y,R,E)}this.setIndex(d),this.setAttribute("position",new Kt(m,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Cn extends Te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new A,u=new A,f=new A;for(let d=0;d<=n;d++)for(let m=0;m<=s;m++){const x=m/s*r,p=d/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=s;m++){const x=(s+1)*d+m-1,p=(s+1)*(d-1)+m-1,g=(s+1)*(d-1)+m,M=(s+1)*d+m;o.push(x,p,M),o.push(p,g,M)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class li extends Te{constructor(t=new Cl(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new A,l=new A,c=new K;let h=new A;const u=[],f=[],d=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(f,3)),this.setAttribute("uv",new Kt(d,2));function x(){for(let v=0;v<e;v++)p(v);p(r===!1?e:0),M(),g()}function p(v){h=t.getPointAt(v/e,h);const y=o.normals[v],R=o.binormals[v];for(let E=0;E<=s;E++){const T=E/s*Math.PI*2,L=Math.sin(T),I=-Math.cos(T);l.x=I*y.x+L*R.x,l.y=I*y.y+L*R.y,l.z=I*y.z+L*R.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let v=1;v<=e;v++)for(let y=1;y<=s;y++){const R=(s+1)*(v-1)+(y-1),E=(s+1)*v+(y-1),T=(s+1)*v+y,L=(s+1)*(v-1)+y;m.push(R,E,L),m.push(E,T,L)}}function M(){for(let v=0;v<=e;v++)for(let y=0;y<=s;y++)c.x=v/e,c.y=y/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new li(new io[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class jx extends Qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bt extends Li{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jh,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ot extends bt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new st(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new st(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new st(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class uo extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new st(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Kx extends uo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const na=new ne,Zc=new A,Jc=new A;class Il{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bl,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Zc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zc),Jc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jc),e.updateMatrixWorld(),na.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Zx extends Il{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=vs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Qc extends uo{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Zx}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const th=new ne,Os=new A,ia=new A;class Jx extends Il{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new K(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Os.setFromMatrixPosition(t.matrixWorld),n.position.copy(Os),ia.copy(n.position),ia.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ia),n.updateMatrixWorld(),s.makeTranslation(-Os.x,-Os.y,-Os.z),th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(th)}}class Ri extends uo{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Qx extends Il{constructor(){super(new wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tv extends uo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Qx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ev{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=eh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=eh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function eh(){return performance.now()}const nh=new ne;class nv{constructor(t,e,n=0,s=1/0){this.ray=new yl(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return nh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nh),this}intersectObject(t,e=!0,n=[]){return rl(t,this,n,e),n.sort(ih),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)rl(t[s],this,n,e);return n.sort(ih),n}}function ih(i,t){return i.distance-t.distance}function rl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)rl(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);const wu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ts{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const iv=new wl(-1,1,1,-1,0,1);class sv extends Te{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}}const rv=new sv;class Dl{constructor(t){this._mesh=new rt(rv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,iv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ov extends Ts{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Qe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Js.clone(t.uniforms),this.material=new Qe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Dl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class sh extends Ts{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class av extends Ts{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class lv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new K);this._width=n.width,this._height=n.height,e=new An(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ov(wu),this.copyPass.material.blending=Wn,this.clock=new ev}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}sh!==void 0&&(o instanceof sh?n=!0:o instanceof av&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new K);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class cv extends Ts{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new st}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const hv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new st(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ys extends Ts{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new K(t.x,t.y):new K(256,256),this.clearColor=new st(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new An(r,o,{type:Xn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new An(r,o,{type:Xn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new An(r,o,{type:Xn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=hv;this.highPassUniforms=Js.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Qe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new K(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=wu;this.copyUniforms=Js.clone(h.uniforms),this.blendMaterial=new Qe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:fs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new st,this.oldClearAlpha=1,this.basic=new xe,this.fsQuad=new Dl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new K(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ys.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ys.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Qe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new K(.5,.5)},direction:{value:new K(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Qe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ys.BlurDirectionX=new K(1,0);ys.BlurDirectionY=new K(0,1);const uv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class fv extends Ts{constructor(){super();const t=uv;this.uniforms=Js.clone(t.uniforms),this.material=new jx({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Dl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},pe.getTransfer(this._outputColorSpace)===Se&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Uh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Nh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===kh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===hl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Fh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function Bs(i,t){return new xe({color:new st(i).multiplyScalar(t),side:$t})}function dv(){const i=new fu;i.background=new st(460555);const t=new oe(10,32,16),e=[],n=t.attributes.position;for(let l=0;l<n.count;l++){const c=n.getY(l)/10,h=Math.max(0,1-Math.abs(c+.05)*3.2);e.push(.035+h*.1,.035+h*.075,.045+h*.05)}t.setAttribute("color",new Kt(e,3)),i.add(new rt(t,new xe({vertexColors:!0,side:Fe})));const s=new rt(new Et(1.6,.08,.14),Bs(15398143,5));s.position.set(0,2.1,-.1),i.add(s);const r=new rt(new ve(3,2.2),Bs(6957604,.22));r.rotation.x=Math.PI/2,r.position.y=2.3,i.add(r);for(let l=0;l<16;l++){const c=new rt(new oe(.05,8,6),Bs(16761978,6)),h=l/16*Math.PI*2;c.position.set(Math.cos(h)*1.6,2.05+Math.sin(l)*.05,Math.sin(h)*1.3),i.add(c)}const o=[[16726688,-2.5,2.2,-4],[3789055,2.8,2.6,-4.5],[16761402,.4,3,-5]];for(const[l,c,h,u]of o){const f=new rt(new ve(1.4,.4),Bs(l,.5));f.position.set(c,h,u),f.lookAt(0,1,0),i.add(f)}const a=new rt(new ve(1,2),Bs(16767392,1.6));return a.position.set(1.8,1.1,3.5),a.lookAt(0,1,0),i.add(a),i}function pv(i){const t=new Qa(i),e=t.fromScene(dv(),.035);return t.dispose(),e.texture}const X={y:.9,x0:-.95,x1:.95,z0:-.52,z1:.4},j={x:0,z:0,R:.24,rimR:.18,bottomY:.975};j.depth=j.R-Math.sqrt(j.R*j.R-j.rimR*j.rimR);j.cy=j.bottomY+j.R;j.rimY=j.bottomY+j.depth;const Rt={x:0,z:0,w:.56,d:.36,topY:X.y+.045},Ft={x:0,z:0,cols:4,rows:3,pitch:.05,wellR:.019,topY:X.y+.06,w:.23,d:.18},Ws={x:-.5,z:-.3,baseY:X.y+.12,h:.34,r:.085},re={x:0,z:0,w:.46,d:.3,grateY:X.y+.1},qt={x:0,z:0,r:.28,topY:X.y+.05},ie={x:-.53,z:.07,r:.158,h:.045};ie.topY=X.y+ie.h;const $={x:.53,z:.07,r:.135,wellR:.095,lip:.018};$.wellY=X.y+.012;const un={z:.265,r:.052,spacing:.118,portrait:{rows:[.235,.345],spacing:.112}},Su={oil:{x:-.29,z:-.265,r:.06},sauce:{x:.29,z:-.265,r:.07}},qe={x:.68,z:-.25},wn={z0:-.51,z1:-.37,y1:1.24},mv={board:{target:[ie.x,ie.topY,ie.z+.01],w:.42,h:.4,pitch:1.05,yaw:.12},wok:{target:[j.x,j.bottomY,.075],w:.98,h:.52,pitch:.98,yaw:0,portrait:{target:[j.x,j.bottomY,.13],w:.52,h:.78,pitch:1.12}},teppan:{target:[Rt.x,Rt.topY,.08],w:.98,h:.52,pitch:.98,yaw:0,portrait:{target:[Rt.x,Rt.topY,.13],w:.62,h:.8,pitch:1.12}},takopan:{target:[Ft.x,Ft.topY,.07],w:.7,h:.42,pitch:1.08,yaw:0,portrait:{target:[Ft.x,Ft.topY,.1],w:.4,h:.62,pitch:1.18}},trompo:{target:[Ws.x,Ws.baseY+Ws.h*.45,Ws.z],w:.5,h:.5,pitch:.35,yaw:.35,portrait:{w:.42,h:.62}},grill:{target:[re.x,re.grateY,.08],w:.8,h:.46,pitch:1,yaw:0,portrait:{target:[re.x,re.grateY,.12],w:.5,h:.7,pitch:1.12}},tawa:{target:[qt.x,qt.topY,.08],w:.98,h:.55,pitch:1,yaw:0,portrait:{target:[qt.x,qt.topY,.13],w:.64,h:.84,pitch:1.12}},plate:{target:[$.x,$.wellY+.02,$.z],w:.36,h:.34,pitch:.95,yaw:-.18},beauty:{target:[$.x+.1,$.wellY+.03,$.z],w:.46,h:.26,pitch:.42,yaw:0,portrait:{target:[$.x,$.wellY-.1,$.z+.1],w:.36,h:.62,pitch:.62}},stall:{target:[0,X.y+.35,0],w:3,h:2.2,pitch:.16,yaw:Math.PI,portrait:{w:2.1,h:3.2,target:[0,X.y+.55,0]}}};function gv(i,{lowPower:t=!1}={}){const e=new dx({canvas:i,antialias:!0,powerPreference:"high-performance"}),n=Math.min(window.devicePixelRatio||1,t?1.25:2);e.setPixelRatio(n),e.outputColorSpace=fn,e.toneMapping=hl,e.toneMappingExposure=1.05,e.shadowMap.enabled=!0,e.shadowMap.type=Ih;const s=new fu;s.background=new st(657936),s.fog=new Tl(1446426,5,14),s.environment=pv(e),s.environmentIntensity=.7;const r=new rn(42,1,.02,40),o=new Kx(9082040,2759186,.35);s.add(o);const a=new tv(15660287,1.5);a.position.set(.15,2.4,.35),a.target.position.set(0,X.y,0),a.castShadow=!0,a.shadow.mapSize.set(t?1024:2048,t?1024:2048);const l=a.shadow.camera;l.left=-1.1,l.right=1.1,l.top=.8,l.bottom=-.8,l.near=.5,l.far=3.5,a.shadow.bias=-4e-4,a.shadow.normalBias=.01,a.shadow.radius=3,s.add(a,a.target);const c=new Qc(16762250,4.5,4,.7,.6,1.6);c.position.set(-.6,1.85,.75),c.target.position.set(.1,X.y,.05),s.add(c,c.target);const h=new Ri(16738970,.18,5,1.6);h.position.set(-1.4,1.5,-1.3);const u=new Ri(5949695,.2,5,1.6);u.position.set(1.5,1.4,-1.2),s.add(h,u);const f=new Qc(16769208,0,1.6,.5,.7,1.5);f.position.set($.x-.35,X.y+.55,$.z+.45),f.target.position.set($.x,$.wellY,$.z),s.add(f,f.target);const d=new lv(e);d.addPass(new cv(s,r));const m=new ys(new K(256,256),.28,.3,1.5);t||d.addPass(m),d.addPass(new fv);const x={renderer:e,scene:s,camera:r,composer:d,bloom:m,lights:{hemi:o,tube:a,key:c,rimA:h,rimB:u,plateKey:f},width:1,height:1,resize(p,g){x.width=p,x.height=g,e.setSize(p,g,!1),d.setSize(p,g),d.setPixelRatio(e.getPixelRatio()),m.setSize(Math.max(1,p/2),Math.max(1,g/2)),r.aspect=p/g,r.updateProjectionMatrix()},render(){d.render()}};return x}function xv(i,t,e,n=1){const s=i.aspect<1,r=s&&t.portrait?{...t,...t.portrait}:t,o=s?54:40;i.fov!==o&&(i.fov=o,i.updateProjectionMatrix());const a=td.degToRad(o),l=2*Math.atan(Math.tan(a/2)*i.aspect),c=Math.max(r.w*n/2/Math.tan(l/2),r.h*n/2/Math.tan(a/2)),[h,u,f]=r.target,d=Math.cos(r.pitch),m=Math.sin(r.pitch);return e.pos.set(h+Math.sin(r.yaw)*d*c,u+m*c,f+Math.cos(r.yaw)*d*c),e.look.set(h,u,f),e}const Hs={khaopad:{id:"khaopad",name:"Khao Pad",local:"ข้าวผัด",cuisine:"thai",blurb:"Thai fried rice: garlic, egg and jasmine rice, seasoned with fish sauce.",weights:{rice:1.5,egg:1,garlic:.7,scallion:.5},garnish:{cucumber:[2,6],lime:[1,2],freshScallion:[2,12]},plate:{leaf:!1,rice:!1,mould:!0},bowls:["garlic","egg","rice","scallion"],steps:[{verb:"chop",item:"scallion",cuts:4,say:"Chop the spring onions",hint:"Swipe down anywhere to chop"},{verb:"heat",liquid:"oil",say:"Fire up the wok",hint:"Push the flame up, then hold to pour the oil"},{verb:"add",items:["garlic"],say:"Garlic in",hint:"Tap to tip it in"},{verb:"cook",focus:["garlic"],minTime:1.5,say:"Fry it golden",hint:"Seconds only. Golden, not brown"},{verb:"crack",item:"egg",say:"Crack in the egg",hint:"Tap three times to crack it"},{verb:"add",items:["rice"],say:"Rice in, straight away",hint:"Tap to tip it in, before the egg sets"},{verb:"pour",liquid:"fishSauce",say:"Season with fish sauce",hint:"Hold to pour round the edge. Let go in the green"},{verb:"cook",focus:["rice","egg"],minTime:3,say:"Toss until every grain is hot",hint:"Keep it moving. Toss for wok hei"},{verb:"add",items:["scallion"],say:"Spring onions",hint:"Tap to tip it in"},{verb:"cook",focus:["scallion"],minTime:1,say:"One quick toss",hint:"Keep them bright green"},{verb:"plate",say:"Plate it up",hint:"Tap anywhere"},{verb:"garnish",items:["cucumber","lime","freshScallion"],say:"Garnish",hint:"Cucumber slices, a lime wedge, spring onion"}]},krapao:{id:"krapao",name:"Pad Kra Pao",local:"ผัดกะเพรา",cuisine:"thai",blurb:"Chicken, holy basil and fiery chilli over rice, with a crisp fried egg.",weights:{mince:1.5,basil:1,garlic:.6,birdChilli:.5},garnish:{friedEgg:[1,1],cucumber:[0,5]},plate:{leaf:!1,rice:!0},bowls:["garlic","birdChilli","mince","basil"],steps:[{verb:"chop",item:"birdChilli",cuts:5,say:"Chop the bird’s eye chillies",hint:"Swipe down anywhere to chop. Careful, they bite"},{verb:"heat",liquid:"oil",say:"Fire up the wok",hint:"Push the flame up, then hold to pour the oil"},{verb:"add",items:["garlic","birdChilli"],say:"Garlic and chillies",hint:"Tap twice to tip both in"},{verb:"cook",focus:["garlic","birdChilli"],minTime:1.5,say:"Fry until fragrant",hint:"A few seconds. The smoke will make you cough"},{verb:"add",items:["mince"],say:"Chicken in",hint:"Tap to tip it in"},{verb:"cook",focus:["mince"],minTime:3,say:"Cook until it is no longer pink",hint:"Break it up. Keep it moving"},{verb:"pour",liquid:"krapao",say:"Pour the sauce",hint:"Oyster, soy and fish sauce. Let go in the green"},{verb:"add",items:["basil"],say:"Now the holy basil",hint:"Tap to tip it in"},{verb:"cook",focus:["basil"],minTime:1,say:"Toss until just wilted",hint:"Flame down. It only needs a moment"},{verb:"plate",say:"Spoon it over the rice",hint:"Tap anywhere"},{verb:"garnish",items:["friedEgg","cucumber"],say:"Top with a fried egg",hint:"Place the khai dao on top. Cucumber on the side"}]},padseeew:{id:"padseeew",name:"Pad See Ew",local:"ผัดซีอิ๊ว",cuisine:"thai",blurb:"Wide rice noodles, chicken and Chinese broccoli, charred in dark soy.",weights:{wideNoodles:1.5,chickenSlice:1.2,gailan:.8,egg:.8,garlic:.5},garnish:{pepper:[4,40],chilli:[0,30]},plate:{leaf:!1,rice:!1},bowls:["garlic","chickenSlice","egg","gailan","wideNoodles"],steps:[{verb:"chop",item:"gailan",cuts:5,say:"Cut the Chinese broccoli",hint:"Swipe down anywhere to chop"},{verb:"heat",liquid:"oil",say:"Fire up the wok",hint:"Push the flame up, then hold to pour the oil"},{verb:"add",items:["garlic","chickenSlice"],say:"Garlic and chicken",hint:"Tap twice to tip both in"},{verb:"cook",focus:["chickenSlice","garlic"],minTime:3,say:"Cook the chicken through",hint:"Keep it moving"},{verb:"crack",item:"egg",say:"Crack in the egg",hint:"Tap three times to crack it"},{verb:"cook",focus:["egg"],minTime:1.5,say:"Let it half set, then scramble",hint:"A moment still, then stir"},{verb:"add",items:["gailan","wideNoodles"],say:"Broccoli and noodles",hint:"Tap twice to tip both in"},{verb:"pour",liquid:"darkSoy",say:"Pour the dark soy",hint:"It stains the noodles. Let go in the green"},{verb:"cook",focus:["wideNoodles","gailan"],minTime:4,char:!0,say:"Spread them out and let them char",hint:"Leave them a moment, then toss. Repeat"},{verb:"plate",say:"Plate it up",hint:"Tap anywhere"},{verb:"garnish",items:["pepper","chilli"],say:"Season",hint:"A dusting of white pepper. Chilli if you dare"}]},yakisoba:{id:"yakisoba",name:"Yakisoba",local:"焼きそば",cuisine:"japan",cooker:"teppan",blurb:"Pork, cabbage and noodles fried on the teppan in a sweet, tangy sauce.",weights:{sobaNoodles:1.5,porkBelly:1.1,cabbage:.9,carrot:.5},garnish:{aonori:[10,60],beniShoga:[2,10],katsuobushi:[3,16]},plate:{style:"glaze"},bowls:["porkBelly","cabbage","carrot","sobaNoodles"],steps:[{verb:"chop",item:"cabbage",cuts:5,say:"Shred the cabbage",hint:"Swipe down anywhere to chop"},{verb:"heat",liquid:"oil",say:"Heat the teppan",hint:"Push the flame up, then hold to pour the oil"},{verb:"add",items:["porkBelly"],say:"Pork belly on the steel",hint:"Tap to lay it on"},{verb:"cook",focus:["porkBelly"],minTime:2,say:"Sear the pork",hint:"Drag anywhere to push it round. Tap FLIP to turn it"},{verb:"add",items:["cabbage","carrot"],say:"Cabbage and carrot",hint:"Tap twice to tip both on"},{verb:"cook",focus:["cabbage","carrot"],minTime:2,say:"Fry until just soft",hint:"Tap FLIP to turn it all over"},{verb:"add",items:["sobaNoodles"],say:"Now the noodles",hint:"Tap to tip them on"},{verb:"pour",liquid:"yakisobaSauce",say:"Yakisoba sauce",hint:"Hold to pour. Let go in the green"},{verb:"cook",focus:["sobaNoodles"],minTime:3,say:"Flip until every noodle is glossy",hint:"Tap FLIP. The hotter the steel, the better the sear"},{verb:"plate",say:"Heap it on the plate",hint:"Tap anywhere"},{verb:"garnish",items:["aonori","beniShoga","katsuobushi"],say:"Toppings",hint:"Aonori, red ginger, and bonito flakes that dance"}]},okonomiyaki:{id:"okonomiyaki",name:"Okonomiyaki",local:"お好み焼き",cuisine:"japan",cooker:"teppan",cake:!0,blurb:"The Osaka pancake: cabbage batter and pork belly, flipped twice, sauced and dancing with bonito.",weights:{okonomiBase:2,porkBelly:1},garnish:{aonori:[10,60],katsuobushi:[4,20],beniShoga:[0,8]},plate:{style:"flat"},bowls:["porkBelly"],steps:[{verb:"chop",item:"cabbage",cuts:5,say:"Shred the cabbage",hint:"Swipe down anywhere to chop"},{verb:"mix",strokes:[8,14],say:"Mix the batter",hint:"Swipe back and forth anywhere. Do not overmix"},{verb:"heat",liquid:"oil",say:"Heat the teppan",hint:"Push the flame up, then hold to pour the oil"},{verb:"pancake",target:[.55,.8],say:"Pour the batter",hint:"Hold to pour a round. Let go in the green"},{verb:"top",items:["porkBelly"],say:"Lay the pork on top",hint:"Tap anywhere"},{verb:"flip",say:"Cook until golden underneath",hint:"When the bar is green, tap FLIP"},{verb:"flip",say:"Crisp the pork side",hint:"Golden again? FLIP it back"},{verb:"plate",say:"Onto the plate",hint:"Tap anywhere"},{verb:"drizzle",what:"sauce",target:[.6,.85],say:"Brush on the sauce",hint:"Hold to brush. Let go in the green"},{verb:"drizzle",what:"mayo",target:[.55,.85],say:"Zigzag the mayo",hint:"Hold to drizzle. Let go in the green"},{verb:"garnish",items:["aonori","katsuobushi","beniShoga"],say:"Aonori and bonito",hint:"Watch the bonito flakes dance in the heat"}]},takoyaki:{id:"takoyaki",name:"Takoyaki",local:"たこ焼き",cuisine:"japan",cooker:"takopan",blurb:"Osaka’s octopus balls: turned a quarter at a time in the iron until round and golden.",weights:{takoBall:2},garnish:{aonori:[10,60],katsuobushi:[4,20]},plate:{style:"fune"},bowls:["octopus","tenkasu","beniShoga","scallion"],steps:[{verb:"chop",item:"scallion",cuts:4,say:"Chop the spring onions",hint:"Swipe down anywhere to chop"},{verb:"heat",liquid:"oil",say:"Heat the takoyaki pan",hint:"Push the flame up, then hold to oil the wells"},{verb:"fill",target:[.85,1.05],say:"Fill the wells",hint:"Hold to pour. A little over the top is right"},{verb:"drop",items:["octopus","tenkasu","beniShoga","scallion"],say:"Octopus in every ball",hint:"Tap anywhere, then again for each topping"},{verb:"turn",say:"Turn them a quarter at a time",hint:"When the bar is green, tap TURN. Keep going till golden all round"},{verb:"plate",say:"Eight into the boat",hint:"Tap anywhere"},{verb:"drizzle",what:"sauce",target:[.6,.85],say:"Takoyaki sauce",hint:"Hold to brush. Let go in the green"},{verb:"drizzle",what:"mayo",target:[.5,.85],say:"Zigzag the mayo",hint:"Hold to drizzle. Let go in the green"},{verb:"garnish",items:["aonori","katsuobushi"],say:"Aonori and bonito",hint:"Watch the bonito flakes dance"}]},quesadilla:{id:"quesadilla",name:"Quesadilla",local:"Quesadilla",cuisine:"mexico",cooker:"teppan",cake:"tortilla",cakeRow:"quesaBase",blurb:"A corn tortilla folded over melting Oaxaca cheese, toasted on the comal.",weights:{quesaBase:2},garnish:{cilantro:[4,20],onionBits:[0,20]},finishColours:{sauce:10101264,mayo:16052454},plate:{style:"fiesta"},bowls:["tortilla","cheese"],steps:[{verb:"heat",say:"Heat the comal",hint:"Push the flame up and wait for it to get hot"},{verb:"top",items:["tortilla"],say:"Tortilla on the comal",hint:"Tap anywhere"},{verb:"top",items:["cheese"],say:"Oaxaca cheese on one half",hint:"Tap anywhere"},{verb:"fold",say:"Fold it when the cheese melts",hint:"When the bar is green, tap FOLD"},{verb:"flip",say:"Toast it golden underneath",hint:"When the bar is green, tap FLIP"},{verb:"flip",say:"Now the other side",hint:"Golden again? FLIP it back"},{verb:"plate",say:"Onto the plate",hint:"Tap anywhere"},{verb:"drizzle",what:"sauce",target:[.55,.85],say:"Salsa roja",hint:"Hold to spoon it on. Let go in the green"},{verb:"drizzle",what:"mayo",target:[.5,.85],say:"A drizzle of crema",hint:"Hold to drizzle. Let go in the green"},{verb:"garnish",items:["cilantro","onionBits"],say:"Coriander and onion",hint:"Tap a garnish to add it"}]},elote:{id:"elote",name:"Elote",local:"Elote asado",cuisine:"mexico",cooker:"grill",blurb:"Corn charred over the coals, rolled in mayo, cotija and chilli, with lime.",weights:{elote:2},garnish:{cotija:[16,80],chilli:[6,40],lime:[1,2]},finishColours:{sauce:10101264,mayo:16183516},plate:{style:"fiesta"},bowls:["corn"],steps:[{verb:"heat",say:"Fan the coals",hint:"Push the flame up until the coals glow"},{verb:"top",items:["corn"],say:"Corn on the grill",hint:"Tap anywhere"},{verb:"turn",say:"Char it all round",hint:"When the bar is green, tap TURN. A little black is good"},{verb:"plate",say:"Off the grill",hint:"Tap anywhere"},{verb:"drizzle",what:"mayo",target:[.55,.85],say:"Brush on the mayo",hint:"Hold to brush. Let go in the green"},{verb:"garnish",items:["cotija","chilli","lime"],say:"Cotija, chilli and lime",hint:"Tap a garnish to add it"}]},pastor:{id:"pastor",name:"Tacos al Pastor",local:"Tacos al pastor",cuisine:"mexico",cooker:"teppan",blurb:"Pork shaved off the trompo, crisped on the plancha, with pineapple and salsa verde.",weights:{pastor:2},garnish:{pineapple:[3,12],onionBits:[8,40],cilantro:[8,40],salsaVerde:[6,40],lime:[1,2]},plate:{style:"tacos"},bowls:[],steps:[{verb:"heat",liquid:"oil",say:"Heat the plancha",hint:"Push the flame up, then hold to pour a little oil"},{verb:"shave",cuts:6,item:"pastor",say:"Shave the pork off the trompo",hint:"Swipe down anywhere, in the green"},{verb:"cook",focus:["pastor"],minTime:2,say:"Crisp it on the plancha",hint:"Let it catch a little, then FLIP"},{verb:"plate",say:"Onto the tortillas",hint:"Tap anywhere"},{verb:"garnish",items:["pineapple","onionBits","cilantro","salsaVerde","lime"],say:"Pineapple, onion, coriander, salsa",hint:"Tap a garnish to add it"}]},vadapav:{id:"vadapav",name:"Vada Pav",local:"वडा पाव",cuisine:"india",cooker:"kadai",blurb:"Mumbai’s burger: a spiced potato vada, fried golden, in a soft pav with chutneys.",weights:{vada:2},garnish:{greenChutney:[6,40],garlicChutney:[6,40],friedChilli:[1,3]},plate:{style:"steel",pav:1},bowls:["vada"],steps:[{verb:"heat",liquid:"fryOil",say:"Heat the oil in the kadai",hint:"Push the flame up, then hold to pour. Deep, for frying"},{verb:"add",items:["vada"],say:"Lower in the vadas",hint:"Tap to slide them in"},{verb:"cook",focus:["vada"],minTime:3,say:"Fry until golden",hint:"TURN them so they colour all round"},{verb:"plate",say:"Out and into the pav",hint:"Tap anywhere"},{verb:"garnish",items:["greenChutney","garlicChutney","friedChilli"],say:"Chutneys and a fried chilli",hint:"Tap a garnish to add it"}]},pavbhaji:{id:"pavbhaji",name:"Pav Bhaji",local:"पाव भाजी",cuisine:"india",cooker:"tawa",blurb:"Vegetables cooked down in butter on the tawa and mashed with masala, with buttered pav.",weights:{potatoCube:1.3,tomato:1,onionPB:.8,capsicum:.6,peas:.4},garnish:{butterCube:[1,2],onionBits:[8,40],cilantro:[8,40],lime:[1,2]},plate:{style:"steel",pav:2,mound:"bhaji"},bowls:["onionPB","capsicum","tomato","potatoCube","peas"],steps:[{verb:"heat",liquid:"butter",say:"Butter on the tawa",hint:"Push the flame up, then hold to pour"},{verb:"add",items:["onionPB","capsicum"],say:"Onion and capsicum",hint:"Tap twice to tip both on"},{verb:"cook",focus:["onionPB","capsicum"],minTime:2,say:"Fry them soft",hint:"Drag anywhere to stir"},{verb:"add",items:["tomato"],say:"Tomatoes",hint:"Tap to tip them on"},{verb:"cook",focus:["tomato"],minTime:2,say:"Cook them down",hint:"Keep it moving"},{verb:"add",items:["potatoCube","peas"],say:"Boiled potato and peas",hint:"Tap twice to tip both on"},{verb:"pour",liquid:"bhajiMasala",say:"Pav bhaji masala",hint:"Hold to pour. Let go in the green"},{verb:"mash",items:["potatoCube","peas","tomato","onionPB","capsicum"],strokes:[6,10],say:"Mash it all together",hint:"Swipe down anywhere, in the green. Smooth, not paste"},{verb:"cook",focus:["potatoCube"],minTime:2,say:"Let it bubble",hint:"Stir it round in the butter"},{verb:"plate",say:"Onto the plate with the pav",hint:"Tap anywhere"},{verb:"garnish",items:["butterCube","onionBits","cilantro","lime"],say:"Butter, onion, coriander, lemon",hint:"Tap a garnish to add it"}]},dosa:{id:"dosa",name:"Masala Dosa",local:"मसाला डोसा",cuisine:"india",cooker:"tawa",cake:"dosa",cakeRow:"dosaBase",blurb:"A crisp, lacy crepe spread thin on the tawa, folded round spiced potato.",weights:{dosaBase:2},garnish:{podi:[4,30],cilantro:[0,20]},plate:{style:"steel",bowls:!0},bowls:["potatoMasala"],steps:[{verb:"heat",say:"Heat the tawa",hint:"Push the flame up and wait for it to get hot"},{verb:"pancake",target:[.55,.8],say:"Pour the batter",hint:"Hold to pour. Let go in the green"},{verb:"spread",strokes:[5,9],say:"Spread it thin",hint:"Swipe anywhere, round and round. Not so thin it tears"},{verb:"top",items:["potatoMasala"],say:"Potato masala in the middle",hint:"Tap anywhere"},{verb:"fold",by:"crisp",say:"Fold it when it is crisp",hint:"When the bar is green, tap FOLD"},{verb:"plate",say:"Onto the plate",hint:"Tap anywhere"},{verb:"garnish",items:["podi","cilantro"],say:"Gunpowder podi",hint:"Tap a garnish to add it"}]},padthai:{id:"padthai",name:"Pad Thai",local:"ผัดไทย",cuisine:"thai",blurb:"Rice noodles, prawns and egg, tossed hard in tamarind over a roaring flame.",weights:{prawn:1.3,noodles:1.4,egg:.9,tofu:.8,garlic:.6,shallot:.5,sprouts:.7,chives:.5},garnish:{peanuts:[12,70],chilli:[4,40],lime:[1,2],freshSprouts:[3,16],freshChives:[2,14]},plate:{leaf:!0,rice:!1},bowls:["garlic","shallot","tofu","prawn","egg","noodles","sprouts","chives"],steps:[{verb:"chop",item:"chives",cuts:6,say:"Chop the garlic chives",hint:"Swipe down anywhere to chop"},{verb:"heat",liquid:"oil",say:"Fire up the wok",hint:"Push the flame up, then hold to pour the oil"},{verb:"add",items:["garlic","shallot","tofu"],say:"Garlic, shallot and tofu",hint:"Tap to tip each bowl in"},{verb:"cook",focus:["garlic","shallot","tofu"],minTime:3,say:"Fry until golden",hint:"Drag anywhere to stir. Tap TOSS. Do not let it sit"},{verb:"add",items:["prawn"],say:"In with the prawns",hint:"Tap to tip it in"},{verb:"cook",focus:["prawn"],minTime:3,say:"Cook the prawns until pink",hint:"Grey means raw. Toss them"},{verb:"crack",item:"egg",say:"Crack in the egg",hint:"Tap three times to crack it"},{verb:"cook",focus:["egg"],minTime:2,say:"Scramble the egg",hint:"Stir it through before it sets flat"},{verb:"add",items:["noodles"],say:"Now the noodles",hint:"Tap to tip it in"},{verb:"pour",liquid:"tamarind",say:"Pour the tamarind sauce",hint:"Hold to pour. Let go in the green"},{verb:"cook",focus:["noodles"],minTime:4,say:"Toss until the noodles drink it up",hint:"Keep them moving. Toss for wok hei"},{verb:"add",items:["sprouts","chives"],say:"Bean sprouts and chives",hint:"Tap twice to tip both in"},{verb:"cook",focus:["sprouts","chives"],minTime:1.5,say:"A quick toss, keep them crunchy",hint:"Seconds, not minutes"},{verb:"plate",say:"Plate it up",hint:"Tap anywhere"},{verb:"garnish",items:["peanuts","chilli","lime","freshSprouts","freshChives"],say:"Garnish",hint:"Pick a garnish, then drag or tap on the plate"}]}},es=[{id:"thai",name:"Thailand",place:"Bangkok night market",stall:"bangkok",judge:"Auntie Noi",hei:"Wok hei",heiGood:"Proper wok hei. Smoky, like Yaowarat at midnight.",heiNone:"Toss it! The flame is what makes it taste of the street.",dishes:["khaopad","krapao","padseeew","padthai"],soon:["Tom Yum Goong","Green Curry","Som Tam","Mango Sticky Rice"]},{id:"japan",name:"Japan",place:"Osaka yatai",stall:"osaka",judge:"Kenji-san",hei:"Teppan sear",heiGood:"That is a proper sear. You can smell it from Dotonbori.",heiNone:"Turn it more on the hot steel. It needs the sear.",dishes:["yakisoba","okonomiyaki","takoyaki"],soon:["Gyoza","Ramen","Karaage"]},{id:"italy",name:"Italy",place:"Naples",soon:["Carbonara","Margherita"]},{id:"mexico",name:"Mexico",place:"Mexico City",stall:"cdmx",judge:"Doña Lupe",hei:"Plancha sear",heiGood:"That char is perfect. Like the stands in Coyoacán.",heiNone:"Hotter! The plancha has to sing.",dishes:["quesadilla","elote","pastor"],soon:["Tamales","Churros","Pozole"]},{id:"india",name:"India",place:"Mumbai",stall:"mumbai",judge:"Shanta Tai",hei:"Tawa heat",heiGood:"Now that is Juhu Beach at midnight. Perfect heat.",heiNone:"More heat! The tawa should be smoking.",dishes:["vadapav","pavbhaji","dosa"],soon:["Pani Puri","Bhel Puri","Masala Chai"]}],nn={garlic:{name:"Garlic",shape:"bit",count:30,r:.0036,mass:.2,raw:15919826,cooked:14724184,over:9720350,cookTime:5.5,band:[.8,1.25],burnAt:1.7,gloss:.55,rough:.45},shallot:{name:"Shallot",shape:"ring",count:16,r:.0075,mass:.25,raw:14197428,cooked:13602124,over:8143390,cookTime:5.5,band:[.8,1.3],burnAt:1.8,gloss:.6,rough:.4},tofu:{name:"Tofu",shape:"cube",count:12,r:.0105,mass:1,raw:15852736,cooked:14457662,over:9325596,cookTime:5.5,band:[.85,1.4],burnAt:2,gloss:.5,rough:.55},prawn:{name:"Prawns",shape:"prawn",count:7,r:.019,mass:2,raw:11778230,cooked:16298636,over:14913892,cookTime:7,band:[.9,1.25],burnAt:1.9,gloss:.8,rough:.32,shrink:.86},egg:{name:"Egg",shape:"curd",count:14,r:.0125,mass:.8,raw:15656644,cooked:16773576,over:13605458,cookTime:5,band:[.85,1.4],burnAt:2,gloss:.5,rough:.5},noodles:{name:"Rice noodles",shape:"strand",strands:30,points:11,spacing:.019,width:.0095,r:.0062,mass:.35,raw:15920352,cooked:14260058,over:9062946,cookTime:9,band:[.85,1.3],burnAt:2.2,needsSauce:!0,gloss:.55,rough:.38},sprouts:{name:"Bean sprouts",shape:"sprout",count:16,r:.0095,mass:.3,raw:16118494,cooked:14470030,over:9072704,cookTime:3.5,band:[.2,.7],burnAt:1.6,gloss:.45,rough:.4},chives:{name:"Garlic chives",shape:"segment",count:14,r:.0085,mass:.2,raw:4164650,cooked:3501856,over:3815960,cookTime:3.5,band:[.2,.8],burnAt:1.6,gloss:.5,rough:.45,sheen:.6,bunch:{style:"blade",colour:4164650}},scallion:{name:"Spring onion",shape:"segment",count:14,r:.0085,mass:.2,raw:6466878,cooked:4950572,over:3815960,cookTime:3.5,band:[.2,.8],burnAt:1.6,gloss:.5,rough:.45,sheen:.5,bunch:{style:"blade",colour:6466878,base:15659740}},rice:{name:"Jasmine rice",shape:"clump",count:100,r:.0075,mass:.4,raw:16184300,cooked:15851442,over:11565626,cookTime:6,band:[.85,1.4],burnAt:2.2,gloss:.35,rough:.5,coatTint:.3},birdChilli:{name:"Bird’s eye chillies",shape:"ring",count:16,r:.0042,mass:.1,raw:14165532,cooked:11803666,over:5903372,cookTime:4,band:[.5,1.3],burnAt:1.9,gloss:.7,rough:.35,bunch:{style:"pods",colour:14165532,base:4160038}},mince:{name:"Chicken mince",shape:"mince",count:40,r:.0078,mass:.6,raw:15511204,cooked:15391938,over:11039804,cookTime:6,band:[.9,1.35],burnAt:2,gloss:.45,rough:.5,coatTint:.7},basil:{name:"Holy basil",shape:"leaf",count:22,r:.0105,mass:.1,raw:4165424,cooked:2842142,over:1979154,cookTime:2.5,band:[.3,.9],burnAt:1.5,gloss:.55,rough:.4,coatTint:.25,sheen:.7},chickenSlice:{name:"Chicken",shape:"slice",count:14,r:.0115,mass:1,raw:15775404,cooked:15851974,over:11565632,cookTime:6,band:[.9,1.35],burnAt:2,gloss:.45,rough:.5,coatTint:.55},gailan:{name:"Chinese broccoli",shape:"gailan",count:12,r:.013,mass:.5,raw:8370266,cooked:5085750,over:3362846,cookTime:3.5,band:[.5,1.15],burnAt:1.8,gloss:.55,rough:.4,coatTint:.25,sheen:.4,bunch:{style:"stalk",colour:8370266,base:3111466}},wideNoodles:{name:"Wide rice noodles",shape:"strand",strands:16,points:8,spacing:.022,width:.021,r:.0095,mass:.5,raw:16117990,cooked:9064488,over:4858898,cookTime:7,band:[.85,1.3],burnAt:2.2,needsSauce:!0,gloss:.6,rough:.35,charWant:[.08,.4]},porkBelly:{name:"Pork belly",shape:"belly",count:10,r:.013,mass:.8,raw:15910076,cooked:15189146,over:10115626,cookTime:5.5,band:[.9,1.45],burnAt:2.1,gloss:.6,rough:.4,coatTint:.45},cabbage:{name:"Cabbage",shape:"cabbage",count:18,r:.012,mass:.3,raw:14478532,cooked:13228442,over:9079370,cookTime:4,band:[.5,1.15],burnAt:1.8,gloss:.5,rough:.4,coatTint:.4,bunch:{style:"head",colour:13953208,base:10273914}},carrot:{name:"Carrot",shape:"baton",count:14,r:.0075,mass:.2,raw:15764010,cooked:15235114,over:9058836,cookTime:4,band:[.5,1.2],burnAt:1.8,gloss:.5,rough:.4,coatTint:.25},sobaNoodles:{name:"Yakisoba noodles",shape:"strand",strands:32,points:11,spacing:.018,width:.0042,r:.0052,mass:.3,raw:15257478,cooked:9062946,over:4858896,cookTime:7,band:[.85,1.35],burnAt:2.2,needsSauce:!0,gloss:.7,rough:.35},okonomiBase:{name:"Okonomiyaki",shape:"none",virtual:!0,r:.08,mass:10,count:0,raw:15919304,cooked:13666876,over:5911064,cookTime:9,band:[.85,1.35],burnAt:1.75},takoBall:{name:"Takoyaki",shape:"none",virtual:!0,r:.02,mass:2,count:0,raw:16050896,cooked:14258750,over:9062942,cookTime:5.5,band:[.8,1.4],burnAt:1.8},quesaBase:{name:"Quesadilla",shape:"none",virtual:!0,r:.08,mass:5,count:0,raw:16048808,cooked:14196816,over:8014364,cookTime:5.5,band:[.8,1.3],burnAt:1.7},elote:{name:"Elote",shape:"none",virtual:!0,r:.03,mass:3,count:0,raw:16179328,cooked:15249472,over:6965786,cookTime:5.5,band:[.8,1.45],burnAt:1.8,charWant:[.06,.4]},pastor:{name:"Al pastor",shape:"slice",count:1,r:.0115,mass:.5,raw:15755830,cooked:13781532,over:5904906,cookTime:5,band:[.9,1.45],burnAt:2.1,gloss:.7,rough:.35,charWant:[.04,.35]},dosaBase:{name:"Dosa",shape:"none",virtual:!0,r:.12,mass:4,count:0,raw:16183516,cooked:14194746,over:6961684,cookTime:7,band:[.85,1.35],burnAt:1.8},vada:{name:"Batata vada",shape:"vada",count:4,r:.021,mass:2,raw:15391896,cooked:14194218,over:6961680,cookTime:8,band:[.9,1.4],burnAt:2,gloss:.6,rough:.45},onionPB:{name:"Onion",shape:"bit",count:24,r:.0055,mass:.2,raw:15786220,cooked:14195290,over:8011808,cookTime:5,band:[.8,1.35],burnAt:1.9,gloss:.5,rough:.45,coatTint:.6},capsicum:{name:"Capsicum",shape:"cabbage",count:14,r:.008,mass:.2,raw:4890666,cooked:3832354,over:2767380,cookTime:4.5,band:[.6,1.3],burnAt:1.9,gloss:.7,rough:.35,coatTint:.5},tomato:{name:"Tomato",shape:"cube",count:16,r:.008,mass:.4,raw:14696490,cooked:13120538,over:6953482,cookTime:5,band:[.8,1.4],burnAt:2,gloss:.8,rough:.3,coatTint:.5},potatoCube:{name:"Boiled potato",shape:"cube",count:16,r:.0095,mass:.8,raw:15916192,cooked:15249504,over:9064480,cookTime:6,band:[.85,1.4],burnAt:2.1,gloss:.4,rough:.5,coatTint:.75},peas:{name:"Peas",shape:"pea",count:20,r:.0045,mass:.1,raw:6996032,cooked:5939250,over:3824154,cookTime:4,band:[.7,1.35],burnAt:2,gloss:.7,rough:.35,coatTint:.5},potatoMasala:{name:"Potato masala",shape:"curd",topping:!0,count:10,r:.011,mass:1,raw:15909952,cooked:15909952,over:15909952,gloss:.4,rough:.5},tortilla:{name:"Tortilla",shape:"tortillaDisc",topping:!0,count:3,r:.035,mass:1,raw:16048808,cooked:16048808,over:16048808,gloss:.1,rough:.75},cheese:{name:"Oaxaca cheese",shape:"baton",topping:!0,count:22,r:.006,mass:.1,raw:16182988,cooked:16182988,over:16182988,gloss:.3,rough:.5},corn:{name:"Corn cobs",shape:"cob",topping:!0,count:2,r:.02,mass:2,raw:16777215,cooked:16777215,over:16777215,gloss:.4,rough:.45},octopus:{name:"Octopus",shape:"octo",topping:!0,count:12,r:.0065,mass:.3,raw:16777215,cooked:16777215,over:16777215,gloss:.8,rough:.35},tenkasu:{name:"Tenkasu",shape:"bit",topping:!0,count:30,r:.004,mass:.05,raw:15782538,cooked:15782538,over:15782538,gloss:.3,rough:.6},peanuts:{name:"Crushed peanuts",shape:"peanut",count:1,r:.0042,mass:.1,garnish:!0,raw:13212252,cooked:13212252,over:13212252,gloss:.25,rough:.6},chilli:{name:"Chilli flakes",shape:"flake",count:1,r:.0026,mass:.05,garnish:!0,raw:11805210,cooked:11805210,over:11805210,gloss:.2,rough:.6},lime:{name:"Lime wedge",shape:"wedge",count:1,r:.017,colR:.008,mass:1.5,garnish:!0,raw:16777215,cooked:16777215,over:16777215,gloss:.7,rough:.35},freshSprouts:{name:"Fresh sprouts",shape:"sprout",count:1,r:.0095,colR:.0045,mass:.3,garnish:!0,raw:16118494,cooked:16118494,over:16118494,gloss:.45,rough:.4},freshChives:{name:"Chive tips",shape:"segment",count:1,r:.0085,colR:.0035,mass:.2,garnish:!0,raw:4889136,cooked:4889136,over:4889136,gloss:.5,rough:.45,sheen:.6},cucumber:{name:"Cucumber",shape:"disc",count:1,r:.014,colR:.0055,mass:.8,garnish:!0,raw:16777215,cooked:16777215,over:16777215,gloss:.6,rough:.35},freshScallion:{name:"Spring onion",shape:"segment",count:1,r:.0085,colR:.0035,mass:.2,garnish:!0,raw:7125062,cooked:7125062,over:7125062,gloss:.5,rough:.45,sheen:.5},friedEgg:{name:"Fried egg",shape:"friedEgg",count:1,r:.03,colR:.007,mass:3,garnish:!0,raw:16777215,cooked:16777215,over:16777215,gloss:.6,rough:.3},pepper:{name:"White pepper",shape:"flake",count:1,r:.0016,mass:.02,garnish:!0,raw:12103072,cooked:12103072,over:12103072,gloss:.1,rough:.8},aonori:{name:"Aonori",shape:"flake",count:1,r:.0018,mass:.02,garnish:!0,raw:4160034,cooked:4160034,over:4160034,gloss:.1,rough:.8},beniShoga:{name:"Red ginger",shape:"baton",count:1,r:.0055,colR:.003,mass:.1,garnish:!0,raw:14688330,cooked:14688330,over:14688330,gloss:.8,rough:.3},katsuobushi:{name:"Bonito flakes",shape:"bonito",count:1,r:.009,colR:.004,mass:.02,garnish:!0,dances:!0,raw:14197882,cooked:14197882,over:14197882,gloss:.2,rough:.6},onionBits:{name:"Onion",shape:"bit",count:1,r:.0035,mass:.05,garnish:!0,raw:16052468,cooked:16052468,over:16052468,gloss:.5,rough:.4},cilantro:{name:"Coriander",shape:"leaf",count:1,r:.0055,colR:.003,mass:.02,garnish:!0,raw:4168238,cooked:4168238,over:4168238,gloss:.4,rough:.45,sheen:.6},pineapple:{name:"Pineapple",shape:"cube",count:1,r:.007,mass:.3,garnish:!0,raw:15912e3,cooked:15912e3,over:15912e3,gloss:.8,rough:.3},salsaVerde:{name:"Salsa verde",shape:"curd",count:1,r:.004,colR:.0025,mass:.05,garnish:!0,raw:5937712,cooked:5937712,over:5937712,gloss:1,rough:.15},cotija:{name:"Cotija",shape:"bit",count:1,r:.003,mass:.03,garnish:!0,raw:16184038,cooked:16184038,over:16184038,gloss:.1,rough:.7},butterCube:{name:"Butter",shape:"cube",count:1,r:.008,mass:.3,garnish:!0,raw:16773296,cooked:16773296,over:16773296,gloss:.8,rough:.3},greenChutney:{name:"Green chutney",shape:"curd",count:1,r:.004,colR:.0025,mass:.05,garnish:!0,raw:3836458,cooked:3836458,over:3836458,gloss:1,rough:.15},garlicChutney:{name:"Garlic chutney",shape:"flake",count:1,r:.0025,mass:.03,garnish:!0,raw:11026458,cooked:11026458,over:11026458,gloss:.1,rough:.8},friedChilli:{name:"Fried chilli",shape:"segment",count:1,r:.011,colR:.004,mass:.2,garnish:!0,raw:5933610,cooked:5933610,over:5933610,gloss:.9,rough:.3},podi:{name:"Gunpowder podi",shape:"flake",count:1,r:.0022,mass:.02,garnish:!0,raw:9058840,cooked:9058840,over:9058840,gloss:.1,rough:.8}},On={oil:{name:"Oil",colour:14266954,target:[.45,.68],rate:.32},tamarind:{name:"Tamarind sauce",colour:6040082,target:[.52,.74],rate:.28},fishSauce:{name:"Fish sauce",colour:11036190,target:[.36,.56],rate:.26},krapao:{name:"Kra Pao sauce",colour:4070412,target:[.46,.66],rate:.27},darkSoy:{name:"Dark soy sauce",colour:2757128,target:[.5,.7],rate:.27},yakisobaSauce:{name:"Yakisoba sauce",colour:3939340,target:[.5,.72],rate:.27},fryOil:{name:"Frying oil",colour:14266954,target:[.62,.86],rate:.3},butter:{name:"Butter",colour:15913056,target:[.5,.75],rate:.3},bhajiMasala:{name:"Pav bhaji masala",colour:12074010,target:[.45,.7],rate:.27}};function Tu(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Te;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let m=0;m<d.count;++m)u.push(d.getX(m)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=rh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);const m=rh(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(m)}}return l}function rh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Ue(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let m=0;m<e;m++){const x=h.getComponent(f,m);a.setComponent(f+u,m,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}let vv=(i,t)=>{const e=document.createElement("canvas");return e.width=i,e.height=t,e};const sa=new Map;function ae(i,t){return vv(i,t)}function le(i,{srgb:t=!0,repeat:e=!1,aniso:n=4}={}){const s=new vx(i);return t&&(s.colorSpace=fn),e&&(s.wrapS=s.wrapT=oi),s.anisotropy=n,s}function ce(i,t){return sa.has(i)||sa.set(i,t()),sa.get(i)}function Ae(i){let t=i>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function nr(){return ce("softDot",()=>{const i=ae(128,128),t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),le(i)})}function _v(){return ce("steam",()=>{const i=ae(128,128),t=i.getContext("2d"),e=Ae(7);for(let n=0;n<14;n++){const s=40+e()*48,r=40+e()*48,o=14+e()*26,a=t.createRadialGradient(s,r,0,s,r,o);a.addColorStop(0,"rgba(255,255,255,0.22)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.beginPath(),t.arc(s,r,o,0,Math.PI*2),t.fill()}return le(i)})}function yv(){return ce("flame",()=>{const i=ae(64,128),t=i.getContext("2d"),e=t.createRadialGradient(32,100,2,32,80,60);return e.addColorStop(0,"rgba(255,250,220,1)"),e.addColorStop(.25,"rgba(255,190,70,0.95)"),e.addColorStop(.6,"rgba(240,90,20,0.55)"),e.addColorStop(1,"rgba(200,40,10,0)"),t.fillStyle=e,t.beginPath(),t.moveTo(32,4),t.bezierCurveTo(58,50,60,110,32,124),t.bezierCurveTo(4,110,6,50,32,4),t.fill(),le(i)})}function Mv(){return ce("blueFlame",()=>{const i=ae(32,64),t=i.getContext("2d"),e=t.createLinearGradient(0,64,0,0);return e.addColorStop(0,"rgba(120,170,255,0.95)"),e.addColorStop(.5,"rgba(60,110,255,0.6)"),e.addColorStop(1,"rgba(40,60,255,0)"),t.fillStyle=e,t.beginPath(),t.moveTo(16,0),t.quadraticCurveTo(32,40,16,64),t.quadraticCurveTo(0,40,16,0),t.fill(),le(i)})}function bv(){return ce("board",()=>{const i=ae(512,512),t=i.getContext("2d"),e=Ae(31);t.fillStyle="#a8723e",t.fillRect(0,0,512,512);const n=180,s=620;for(let o=20;o<900;o+=6+e()*7)t.strokeStyle=`rgba(${90+e()*30},${52+e()*20},24,${.18+e()*.22})`,t.lineWidth=2+e()*3,t.beginPath(),t.arc(n,s,o,0,Math.PI*2),t.stroke();for(let o=0;o<160;o++){const a=e()*512,l=e()*512,c=(e()-.5)*.6+(e()<.5?0:Math.PI/2),h=10+e()*50;t.strokeStyle=`rgba(220,180,130,${.1+e()*.12})`,t.lineWidth=2,t.beginPath(),t.moveTo(a,l),t.lineTo(a+Math.cos(c)*h,l+Math.sin(c)*h),t.stroke()}const r=t.createRadialGradient(256,256,60,256,256,300);return r.addColorStop(0,"rgba(60,30,10,0.18)"),r.addColorStop(1,"rgba(60,30,10,0)"),t.fillStyle=r,t.fillRect(0,0,512,512),le(i)})}function oh(){return ce("brushed",()=>{const i=ae(256,256),t=i.getContext("2d"),e=Ae(11);t.fillStyle="rgb(96,96,96)",t.fillRect(0,0,256,256);for(let n=0;n<900;n++){const s=e()*256,r=70+e()*70;t.fillStyle=`rgba(${r},${r},${r},0.35)`,t.fillRect(0,s,256,1+e()*1.5)}for(let n=0;n<20;n++){const s=e()*256,r=e()*256,o=12+e()*40,a=t.createRadialGradient(s,r,0,s,r,o);a.addColorStop(0,"rgba(150,150,150,0.35)"),a.addColorStop(1,"rgba(150,150,150,0)"),t.fillStyle=a,t.fillRect(s-o,r-o,o*2,o*2)}return le(i,{srgb:!1,repeat:!0})})}function wv(){return ce("wok",()=>{const i=ae(512,512),t=i.getContext("2d"),e=Ae(5),n=t.createLinearGradient(0,0,0,512);n.addColorStop(0,"#15110e"),n.addColorStop(.22,"#201813"),n.addColorStop(.4,"#2c2a31"),n.addColorStop(.49,"#56565a"),n.addColorStop(.52,"#3a3e4c"),n.addColorStop(.7,"#1c1714"),n.addColorStop(1,"#0e0b09"),t.fillStyle=n,t.fillRect(0,0,512,512);for(let s=0;s<400;s++){const r=e()*512,o=e()*512,a=20+e()*90;t.fillStyle=`rgba(${e()<.5?"90,60,30":"10,8,6"},${.05+e()*.08})`,t.fillRect(r,o,a,2+e()*3)}return le(i,{repeat:!0})})}function Sv(){return ce("leaf",()=>{const i=ae(512,512),t=i.getContext("2d"),e=Ae(19);t.fillStyle="#3f7d2a",t.fillRect(0,0,512,512);const n=t.createLinearGradient(0,0,512,0);n.addColorStop(0,"rgba(20,50,10,0.35)"),n.addColorStop(.5,"rgba(120,170,60,0.18)"),n.addColorStop(1,"rgba(20,50,10,0.35)"),t.fillStyle=n,t.fillRect(0,0,512,512);for(let s=-40;s<560;s+=5+e()*4)t.strokeStyle=`rgba(${150+e()*40},${200+e()*30},110,${.16+e()*.16})`,t.lineWidth=2,t.beginPath(),t.moveTo(0,s),t.lineTo(512,s+40),t.stroke();t.fillStyle="rgba(190,215,140,0.55)",t.fillRect(0,250,512,10);for(let s=0;s<30;s++)t.fillStyle=`rgba(110,90,40,${.15+e()*.2})`,t.fillRect(e()*512,e()*512,2+e()*4,2+e()*3);return le(i)})}function Tv(){return ce("plateRim",()=>{const i=ae(512,64),t=i.getContext("2d");t.fillStyle="#f3f1ea",t.fillRect(0,0,512,64),t.fillStyle="#2f5aa0",t.fillRect(0,44,512,5),t.fillRect(0,54,512,3);for(let e=0;e<512;e+=32)t.beginPath(),t.arc(e+16,30,7,0,Math.PI*2),t.fill(),t.fillRect(e+4,28,24,3);return le(i,{repeat:!0})})}function Eu(){return ce("street",()=>{const i=ae(512,512),t=i.getContext("2d"),e=Ae(23);t.fillStyle="#2c2b2a",t.fillRect(0,0,512,512);for(let n=0;n<512;n+=64)for(let s=0;s<512;s+=64){const r=44+e()*18;t.fillStyle=`rgb(${r},${r-2},${r-4})`,t.fillRect(s+2,n+2,60,60)}for(let n=0;n<60;n++)t.fillStyle=`rgba(0,0,0,${.1+e()*.2})`,t.beginPath(),t.arc(e()*512,e()*512,6+e()*30,0,Math.PI*2),t.fill();return le(i,{repeat:!0})})}function Ev(i="#c8322b",t="#efe6d2"){return ce("canopy"+i+t,()=>{const e=ae(256,256),n=e.getContext("2d");for(let r=0;r<256;r+=32)n.fillStyle=r/32%2?t:i,n.fillRect(r,0,32,256);const s=Ae(3);for(let r=0;r<40;r++)n.fillStyle=`rgba(0,0,0,${.03+s()*.05})`,n.fillRect(0,s()*256,256,2+s()*8);return le(e,{repeat:!0})})}function fo(i,{w:t=512,h:e=256,bg:n="#10131a",fg:s="#ffd23c",glow:r="#ff7a1a",box:o=!1}={}){return ce("sign"+i.join("|")+n+s,()=>{const a=ae(t,e),l=a.getContext("2d");if(l.fillStyle=n,l.fillRect(0,0,t,e),o){const h=l.createLinearGradient(0,0,0,e);h.addColorStop(0,"rgba(255,255,255,0.12)"),h.addColorStop(1,"rgba(0,0,0,0.2)"),l.fillStyle=h,l.fillRect(0,0,t,e)}l.textAlign="center",l.textBaseline="middle";const c=i.length;return i.forEach((h,u)=>{const f=Math.floor(u===0?e*(c>1?.42:.6):e*.22);l.font=`700 ${f}px "Thonburi","Leelawadee UI","Noto Sans Thai","Sukhumvit Set",sans-serif`;const d=c>1?u===0?e*.4:e*.8:e*.52;l.shadowColor=r,l.shadowBlur=o?0:18,l.fillStyle=s,l.fillText(h,t/2,d),o||(l.shadowBlur=6,l.fillText(h,t/2,d))}),le(a)})}function Av(){return ce("backdrop",()=>{const e=ae(2048,768),n=e.getContext("2d"),s=Ae(41),r=n.createLinearGradient(0,0,0,768);r.addColorStop(0,"#0b0d1a"),r.addColorStop(.55,"#1b1626"),r.addColorStop(1,"#2a1a18"),n.fillStyle=r,n.fillRect(0,0,2048,768);let o=0;for(;o<2048;){const l=160+s()*200,c=768*(.55+s()*.35);n.fillStyle=`rgb(${18+s()*14},${16+s()*12},${20+s()*14})`,n.fillRect(o,768-c,l,c);for(let h=768-c+30;h<628;h+=58)for(let u=o+16;u<o+l-30;u+=44){if(s()<.45)continue;const f=s()<.7;n.fillStyle=f?`rgba(255,${170+s()*50},${90+s()*40},${.18+s()*.25})`:`rgba(140,200,255,${.12+s()*.18})`,n.fillRect(u,h,16,22)}s()<.6&&(n.fillStyle=`rgba(255,${190+s()*40},120,${.25+s()*.25})`,n.fillRect(o+10,638,l-20,120)),o+=l+4}n.strokeStyle="rgba(0,0,0,0.7)",n.lineWidth=2;for(let l=0;l<7;l++){const c=60+s()*200;n.beginPath(),n.moveTo(0,c),n.quadraticCurveTo(2048/2,c+60+s()*60,2048,c+(s()-.5)*80),n.stroke()}const a=["255,190,90","255,150,80","255,90,170","110,200,255","255,230,170"];for(let l=0;l<90;l++){const c=s()*2048,h=768*(.35+s()*.6),u=5+s()*16,f=a[Math.floor(s()*a.length)],d=n.createRadialGradient(c,h,0,c,h,u),m=.1+s()*.22;d.addColorStop(0,`rgba(${f},${m})`),d.addColorStop(.8,`rgba(${f},${m*.8})`),d.addColorStop(1,`rgba(${f},0)`),n.fillStyle=d,n.beginPath(),n.arc(c,h,u,0,Math.PI*2),n.fill()}return le(e)})}function Cv(i){return ce("cond"+i,()=>{const t=ae(64,64),e=t.getContext("2d"),n=Ae(i.length*13),s={sugar:"#efe9dc",flakes:"#9c2418",fish:"#b0701e",vinegar:"#e8dfc8"}[i];e.fillStyle=s,e.fillRect(0,0,64,64);for(let r=0;r<90;r++){const o=i==="sugar"?"rgba(255,255,255,0.5)":i==="flakes"?"rgba(230,120,40,0.6)":"rgba(200,40,20,0.7)";e.fillStyle=o,e.fillRect(n()*64,n()*64,2+n()*2,2+n()*2)}return le(t)})}const Au='"Hiragino Sans","Hiragino Kaku Gothic ProN","Yu Gothic","Noto Sans JP","Noto Sans CJK JP",sans-serif',Cu='"Hiragino Mincho ProN","Yu Mincho","Noto Serif JP","Noto Serif CJK JP",serif';function ra(i=!0){return ce("planks"+i,()=>{const t=ae(512,512),e=t.getContext("2d"),n=Ae(i?61:67),s=i?[78,48,30]:[214,178,128];for(let r=0;r<512;r+=64){const o=.88+n()*.2;e.fillStyle=`rgb(${s[0]*o|0},${s[1]*o|0},${s[2]*o|0})`,e.fillRect(0,r,512,64);for(let a=0;a<30;a++){const l=r+n()*64;e.strokeStyle=`rgba(${i?"30,16,8":"150,110,60"},${.12+n()*.18})`,e.lineWidth=2,e.beginPath(),e.moveTo(0,l),e.bezierCurveTo(170,l+(n()-.5)*8,340,l+(n()-.5)*8,512,l),e.stroke()}e.fillStyle="rgba(0,0,0,0.35)",e.fillRect(0,r,512,2)}return le(t,{repeat:!0})})}function Ul(){return ce("teppan",()=>{const i=ae(512,512),t=i.getContext("2d"),e=Ae(71);t.fillStyle="#1b1a1a",t.fillRect(0,0,512,512);for(let s=0;s<260;s++){t.strokeStyle=`rgba(${e()<.5?"120,110,100":"40,30,20"},${.05+e()*.08})`,t.lineWidth=2+e()*3;const r=e()*512,o=e()*512,a=e()*Math.PI;t.beginPath(),t.moveTo(r,o),t.lineTo(r+Math.cos(a)*60,o+Math.sin(a)*60),t.stroke()}const n=t.createRadialGradient(256,256,40,256,256,300);return n.addColorStop(0,"rgba(60,40,20,0.25)"),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,512,512),le(i)})}function ah(i){return ce("noren"+i,()=>{const n=ae(1024,384),s=n.getContext("2d");s.fillStyle="#1d2e5c",s.fillRect(0,0,1024,384);const r=Ae(73);for(let a=0;a<400;a++)s.fillStyle=`rgba(255,255,255,${r()*.04})`,s.fillRect(r()*1024,r()*384,2,2+r()*6);const o=i.length;s.fillStyle="rgba(0,0,0,0.5)";for(let a=1;a<o;a++)s.fillRect(1024/o*a-3,384*.25,6,384);return s.fillStyle="#f4f0e6",s.textAlign="center",s.textBaseline="middle",s.font=`700 ${384*.5}px ${Cu}`,[...i].forEach((a,l)=>s.fillText(a,1024/o*(l+.5),384*.58)),le(n)})}function lh(i){return ce("lantern"+i,()=>{const t=ae(256,256),e=t.getContext("2d"),n=e.createRadialGradient(128,128,20,128,128,180);n.addColorStop(0,"#ffb070"),n.addColorStop(.5,"#e8401c"),n.addColorStop(1,"#8a1a0c"),e.fillStyle=n,e.fillRect(0,0,256,256),e.strokeStyle="rgba(80,10,0,0.35)",e.lineWidth=2;for(let s=8;s<256;s+=16)e.beginPath(),e.moveTo(0,s),e.lineTo(256,s),e.stroke();return e.fillStyle="#1a0a06",e.textAlign="center",e.textBaseline="middle",e.font=`700 150px ${Cu}`,e.fillText(i,128,136),le(t,{repeat:!0})})}function Rv(i,t="#d8261c",e="#ffffff"){return ce("nobori"+i+t,()=>{const r=ae(128,512),o=r.getContext("2d");o.fillStyle=t,o.fillRect(0,0,128,512),o.fillStyle="rgba(255,255,255,0.9)",o.fillRect(0,0,128,14);for(let c=30;c<512;c+=40)o.fillRect(0,c,8,6);o.fillStyle=e,o.textAlign="center",o.textBaseline="middle";const a=i.length,l=Math.min(96,452/a);return o.font=`900 ${l}px ${Au}`,[...i].forEach((c,h)=>o.fillText(c,128/2+4,40+l*(h+.5))),le(r)})}function Pv(){return ce("glaze",()=>{const i=ae(256,256),t=i.getContext("2d"),e=t.createLinearGradient(0,0,0,256);e.addColorStop(0,"#2b2a3a"),e.addColorStop(.7,"#3a2e2c"),e.addColorStop(1,"#a58a66"),t.fillStyle=e,t.fillRect(0,0,256,256);const n=Ae(83);for(let s=0;s<500;s++)t.fillStyle=`rgba(${n()<.5?"200,180,150":"10,8,12"},${.2+n()*.3})`,t.fillRect(n()*256,n()*256,2,2);return le(i,{repeat:!0})})}function ro(){return ce("speckle",()=>{const i=ae(256,256),t=i.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,256,256);const e=Ae(89);for(let n=0;n<700;n++)t.fillStyle=`rgba(90,60,40,${.15+e()*.35})`,t.fillRect(e()*256,e()*256,2,2);return le(i,{repeat:!0})})}function Lv(){return ce("pine",()=>{const i=ae(256,256),t=i.getContext("2d");t.fillStyle="#e2c79a",t.fillRect(0,0,256,256);const e=Ae(97);for(let n=0;n<26;n++){t.strokeStyle=`rgba(170,120,60,${.15+e()*.2})`,t.lineWidth=2+e()*2;const s=e()*256;t.beginPath(),t.moveTo(0,s),t.bezierCurveTo(90,s+6,170,s-6,256,s),t.stroke()}return le(i,{repeat:!0})})}function Iv(){return ce("osaka",()=>{const e=ae(2048,768),n=e.getContext("2d"),s=Ae(101),r=n.createLinearGradient(0,0,0,768);r.addColorStop(0,"#070914"),r.addColorStop(.6,"#161226"),r.addColorStop(1,"#241616"),n.fillStyle=r,n.fillRect(0,0,2048,768);const o=["たこ焼","お好み焼","ラーメン","串カツ","居酒屋","寿司","大阪","食堂","焼きそば"],a=["#ff3c6e","#ffd23c","#3ce0ff","#ff8a2a","#8aff5a","#ff5ae0"];let l=0;for(;l<2048;){const c=120+s()*160,h=768*(.6+s()*.38);n.fillStyle=`rgb(${14+s()*12},${12+s()*10},${18+s()*14})`,n.fillRect(l,768-h,c,h);for(let u=768-h+20;u<648;u+=40)for(let f=l+10;f<l+c-20;f+=30)s()<.55||(n.fillStyle=`rgba(255,${200+s()*40},${150+s()*60},${.1+s()*.2})`,n.fillRect(f,u,12,18));if(s()<.8){const u=o[Math.floor(s()*o.length)],f=a[Math.floor(s()*a.length)],d=l+c*(.2+s()*.6),m=768-h+30+s()*60,x=34+s()*16;n.fillStyle="rgba(0,0,0,0.6)",n.fillRect(d-x*.62,m-10,x*1.24,x*u.length+20),n.font=`900 ${x}px ${Au}`,n.textAlign="center",n.textBaseline="top",n.shadowColor=f,n.shadowBlur=18,n.fillStyle=f,[...u].forEach((p,g)=>n.fillText(p,d,m+g*x)),n.shadowBlur=0}n.fillStyle=`rgba(255,${170+s()*50},110,${.18+s()*.2})`,n.fillRect(l+8,658,c-16,100),l+=c+3}for(let c=0;c<3;c++){const h=250+c*90;for(let u=0;u<40;u++){const f=u*51.2+20,d=h+Math.sin(u*.9)*10,m=n.createRadialGradient(f,d,0,f,d,14);m.addColorStop(0,"rgba(255,190,110,0.8)"),m.addColorStop(1,"rgba(255,90,40,0)"),n.fillStyle=m,n.beginPath(),n.arc(f,d,14,0,Math.PI*2),n.fill()}}for(let c=0;c<70;c++){const h=s()*2048,u=768*(.4+s()*.55),f=5+s()*14,d=n.createRadialGradient(h,u,0,h,u,f),m=.1+s()*.2;d.addColorStop(0,`rgba(255,200,140,${m})`),d.addColorStop(1,"rgba(255,200,140,0)"),n.fillStyle=d,n.beginPath(),n.arc(h,u,f,0,Math.PI*2),n.fill()}return le(e)})}function Ru(){return ce("batterCabbage",()=>{const i=ae(512,512),t=i.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,512,512);const e=Ae(107);for(let n=0;n<700;n++){const s=e()*512,r=e()*512,o=e()*Math.PI,a=10+e()*30,l=e();t.strokeStyle=l<.75?`rgba(${200+e()*40},${230+e()*25},${170+e()*40},0.9)`:l<.9?"rgba(90,160,60,0.9)":"rgba(220,60,90,0.9)",t.lineWidth=l<.75?3:2.5,t.beginPath(),t.moveTo(s,r),t.lineTo(s+Math.cos(o)*a,r+Math.sin(o)*a),t.stroke()}for(let n=0;n<500;n++)t.fillStyle=`rgba(160,120,70,${e()*.25})`,t.beginPath(),t.arc(e()*512,e()*512,2+e()*5,0,Math.PI*2),t.fill();return le(i)})}function Dv(i){return ce("papel"+i,()=>{const t=ae(128,160),e=t.getContext("2d");e.fillStyle=i,e.fillRect(0,0,128,160),e.globalCompositeOperation="destination-out";for(let n=10;n<128;n+=18)e.beginPath(),e.moveTo(n,14),e.lineTo(n+5,20),e.lineTo(n,26),e.lineTo(n-5,20),e.fill();for(let n=0;n<8;n++){const s=n/8*Math.PI*2;e.beginPath(),e.ellipse(64+Math.cos(s)*18,78+Math.sin(s)*18,9,5,s,0,Math.PI*2),e.fill()}e.beginPath(),e.arc(64,78,7,0,Math.PI*2),e.fill();for(let n=8;n<128;n+=16)e.beginPath(),e.arc(n,160,7,0,Math.PI*2),e.fill();for(let n=16;n<116;n+=25)e.fillRect(n,118,10,10);return e.globalCompositeOperation="source-over",le(t)})}function Uv(i="#e8307a",t="#f0a8c8"){return ce("lona"+i,()=>{const e=ae(256,256),n=e.getContext("2d");n.fillStyle=i,n.fillRect(0,0,256,256);const s=Ae(113);for(let r=0;r<256;r+=32)n.fillStyle=t,n.globalAlpha=.35,n.fillRect(0,r,256,6),n.globalAlpha=1;for(let r=0;r<60;r++)n.fillStyle=`rgba(255,255,255,${s()*.06})`,n.fillRect(s()*256,s()*256,30+s()*60,2+s()*10);return le(e,{repeat:!0})})}function Nl(){return ce("tortilla",()=>{const i=ae(256,256),t=i.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,256,256);const e=Ae(127);for(let n=0;n<220;n++)t.fillStyle=`rgba(180,130,60,${.08+e()*.22})`,t.beginPath(),t.arc(e()*256,e()*256,2+e()*7,0,Math.PI*2),t.fill();for(let n=0;n<400;n++)t.fillStyle=`rgba(120,90,40,${e()*.2})`,t.fillRect(e()*256,e()*256,2,2);return le(i)})}function Nv(){return ce("corn",()=>{const i=ae(256,256),t=i.getContext("2d");t.fillStyle="#b8902a",t.fillRect(0,0,256,256);for(let e=0;e<256;e+=16)for(let n=e/16%2?8:0;n<256;n+=16){const s=t.createRadialGradient(n+7,e+6,1,n+8,e+8,9);s.addColorStop(0,"#fff2a0"),s.addColorStop(.7,"#f0c840"),s.addColorStop(1,"#b8902a"),t.fillStyle=s,t.beginPath(),t.ellipse(n+8,e+8,7,7.5,0,0,Math.PI*2),t.fill()}return le(i,{repeat:!0})})}function kv(){return ce("pastor",()=>{const i=ae(256,256),t=i.getContext("2d"),e=Ae(131);for(let n=0;n<256;n+=6+e()*6)t.fillStyle=`rgb(${190+e()*40},${60+e()*30},${20+e()*20})`,t.fillRect(0,n,256,12),t.fillStyle=`rgba(60,16,6,${.3+e()*.4})`,t.fillRect(0,n,256,2);for(let n=0;n<90;n++)t.fillStyle=`rgba(40,12,4,${.3+e()*.4})`,t.beginPath(),t.arc(e()*256,e()*256,2+e()*6,0,Math.PI*2),t.fill();return le(i,{repeat:!0})})}function zv(){return ce("cdmx",()=>{const e=ae(2048,768),n=e.getContext("2d"),s=Ae(137),r=n.createLinearGradient(0,0,0,768);r.addColorStop(0,"#0a0c1c"),r.addColorStop(.6,"#1c1830"),r.addColorStop(1,"#2a1c1a"),n.fillStyle=r,n.fillRect(0,0,2048,768);const o=["#b8487a","#c89a3a","#3a6aa8","#3a9a7a","#c86a3a","#8a4ab0"],a=["TACOS","AL PASTOR","ABIERTO","ELOTES","TORTILLERÍA","QUESADILLAS","MERCADO","LA ESQUINA"],l=["#ffd23c","#ff5aa0","#5ae0ff","#8aff6a","#ff8a3a"];let c=0;for(;c<2048;){const h=170+s()*190,u=768*(.42+s()*.25),f=o[Math.floor(s()*o.length)];n.fillStyle=f,n.globalAlpha=.55,n.fillRect(c,768-u,h,u),n.globalAlpha=1,n.fillStyle="rgba(0,0,0,0.45)",n.fillRect(c,768-u,h,u);for(let d=768-u+25;d<618;d+=55)for(let m=c+18;m<c+h-30;m+=48)s()<.5||(n.fillStyle=`rgba(255,${190+s()*50},${120+s()*60},${.15+s()*.3})`,n.fillRect(m,d,20,28));if(n.fillStyle=`rgba(255,${180+s()*50},110,${.2+s()*.25})`,n.fillRect(c+10,648,h-20,110),s()<.85){const d=a[Math.floor(s()*a.length)],m=l[Math.floor(s()*l.length)];n.font=`900 ${26+s()*10}px "Arial Rounded MT Bold","Helvetica Neue",Arial,sans-serif`,n.textAlign="center",n.textBaseline="middle",n.shadowColor=m,n.shadowBlur=16,n.fillStyle=m,n.fillText(d,c+h/2,628),n.shadowBlur=0}c+=h+4}for(let h=0;h<3;h++){const u=200+h*80;for(let f=0;f<44;f++){const d=f*46.54545454545455+10,m=u+Math.sin(f*.8+h)*14,x=n.createRadialGradient(d,m,0,d,m,10);x.addColorStop(0,"rgba(255,230,160,0.9)"),x.addColorStop(1,"rgba(255,200,120,0)"),n.fillStyle=x,n.beginPath(),n.arc(d,m,10,0,Math.PI*2),n.fill()}}return le(e)})}const Pu='"Kohinoor Devanagari","Devanagari Sangam MN","Noto Sans Devanagari","Mangal",sans-serif';function oa(i,t="#f2c230",e="#b01e1e"){return ce("menuBoard"+i.join("|")+t,()=>{const n=ae(512,256),s=n.getContext("2d");return s.fillStyle=t,s.fillRect(0,0,512,256),s.strokeStyle=e,s.lineWidth=8,s.strokeRect(10,10,492,236),s.fillStyle=e,s.textAlign="center",s.textBaseline="middle",s.font=`800 92px ${Pu}`,s.fillText(i[0],256,100),i[1]&&(s.font='900 46px "Arial Black","Helvetica Neue",Arial,sans-serif',s.fillText(i[1],256,196)),le(n)})}function Fv(){return ce("marigold",()=>{const i=ae(64,64),t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,30);e.addColorStop(0,"#ffcc30"),e.addColorStop(.6,"#ff8a10"),e.addColorStop(1,"#c85a08"),t.fillStyle=e,t.fillRect(0,0,64,64);const n=Ae(139);for(let s=0;s<80;s++)t.fillStyle=`rgba(${n()<.5?"255,220,90":"200,90,10"},0.5)`,t.beginPath(),t.arc(n()*64,n()*64,2+n()*3,0,Math.PI*2),t.fill();return le(i)})}function Lu(){return ce("bhaji",()=>{const i=ae(256,256),t=i.getContext("2d");t.fillStyle="#b83c1a",t.fillRect(0,0,256,256);const e=Ae(149);for(let n=0;n<400;n++)t.fillStyle=`rgba(${e()<.5?"230,110,40":"120,30,10"},${.2+e()*.4})`,t.beginPath(),t.arc(e()*256,e()*256,2+e()*6,0,Math.PI*2),t.fill();for(let n=0;n<60;n++)t.fillStyle="rgba(255,220,120,0.4)",t.beginPath(),t.arc(e()*256,e()*256,1+e()*3,0,Math.PI*2),t.fill();return le(i,{repeat:!0})})}function Ov(){return ce("dosa",()=>{const i=ae(512,512),t=i.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,512,512);const e=Ae(151);t.strokeStyle="rgba(150,100,40,0.18)",t.lineWidth=5,t.beginPath();for(let n=0;n<40;n+=.05){const s=n*6,r=256+Math.cos(n)*s,o=256+Math.sin(n)*s;n===0?t.moveTo(r,o):t.lineTo(r,o)}t.stroke();for(let n=0;n<900;n++)t.fillStyle=`rgba(140,90,30,${.05+e()*.2})`,t.beginPath(),t.arc(e()*512,e()*512,1+e()*4,0,Math.PI*2),t.fill();return le(i)})}function Bv(){return ce("mumbai",()=>{const e=ae(2048,768),n=e.getContext("2d"),s=Ae(157),r=n.createLinearGradient(0,0,0,768);r.addColorStop(0,"#0c0a1a"),r.addColorStop(.6,"#20162a"),r.addColorStop(1,"#2c1c16"),n.fillStyle=r,n.fillRect(0,0,2048,768);const o=["CHAAT","PAV BHAJI","VADA PAV","JUICE CENTRE","CHAI","DOSA","चाट","चाय","पाव भाजी"],a=["#f2c230","#e8302a","#2a8ae8","#2ab86a","#f07a1a"];let l=0;for(;l<2048;){const c=140+s()*160,h=768*(.6+s()*.35);n.fillStyle=`rgb(${24+s()*16},${20+s()*12},${22+s()*14})`,n.fillRect(l,768-h,c,h);for(let d=768-h+20;d<618;d+=44){n.fillStyle="rgba(0,0,0,0.5)",n.fillRect(l+4,d+30,c-8,4);for(let m=l+12;m<l+c-22;m+=34)s()<.45||(n.fillStyle=s()<.75?`rgba(255,${200+s()*40},${140+s()*60},${.2+s()*.3})`:`rgba(150,230,255,${.15+s()*.2})`,n.fillRect(m,d,16,22))}const u=a[Math.floor(s()*a.length)];n.fillStyle=u,n.fillRect(l+8,598,c-16,40);const f=o[Math.floor(s()*o.length)];n.fillStyle=u==="#f2c230"?"#b01e1e":"#ffffff",n.font=`900 26px ${/[a-z]/i.test(f)?'"Arial Black",Arial,sans-serif':Pu}`,n.textAlign="center",n.textBaseline="middle",n.fillText(f,l+c/2,618),n.fillStyle=`rgba(255,${190+s()*40},120,${.2+s()*.25})`,n.fillRect(l+8,643,c-16,115),l+=c+3}for(let c=0;c<2;c++){const h=230+c*110;for(let u=0;u<50;u++){const f=u*40.96+12,d=h+Math.sin(u*.7)*12,m=["255,210,120","255,120,200","120,220,255","160,255,140"],x=m[u%m.length],p=n.createRadialGradient(f,d,0,f,d,9);p.addColorStop(0,`rgba(${x},0.9)`),p.addColorStop(1,`rgba(${x},0)`),n.fillStyle=p,n.beginPath(),n.arc(f,d,9,0,Math.PI*2),n.fill()}}return le(e)})}function Di(i){let t=i>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function po(){const i={};i.steel=new bt({color:12567495,metalness:1,roughness:.38,roughnessMap:oh(),side:$t}),i.bowl=new bt({color:10133155,metalness:1,roughness:.58,side:$t}),i.steelDark=new bt({color:9343896,metalness:1,roughness:.42,roughnessMap:oh()}),i.iron=new bt({color:1841946,metalness:.7,roughness:.62}),i.street=new bt({color:10131604,map:Eu(),roughness:.3,metalness:0}),i.street.map.repeat.set(7,7),i.board=new bt({map:bv(),roughness:.78,metalness:0}),i.boardSide=new bt({color:6175262,roughness:.9,metalness:0}),i.glass=new Ot({color:16777215,roughness:.05,metalness:0,transparent:!0,opacity:.16,clearcoat:1,depthWrite:!1}),i.canopy=new bt({map:Ev(),roughness:.85,side:$t,metalness:0}),i.canopy.map.repeat.set(3,1),i.pole=new bt({color:10133670,metalness:1,roughness:.4}),i.bulb=new xe({color:new st(16762999).multiplyScalar(3)}),i.wire=new xe({color:526344}),i.tube=new xe({color:new st(15660799).multiplyScalar(3.2)}),i.stool=new bt({color:13116188,roughness:.45,metalness:0}),i.stoolBlue=new bt({color:2777784,roughness:.45,metalness:0}),i.gas=new bt({color:11676192,roughness:.4,metalness:0}),i.oil=new Ot({color:13146666,roughness:.05,clearcoat:1,metalness:0}),i.sauce=new Ot({color:4857872,roughness:.12,clearcoat:1,metalness:0}),i.lime=new Ot({color:7319086,roughness:.45,clearcoat:.5,metalness:0}),i.egg=new bt({color:15255968,roughness:.6,metalness:0}),i.noodleDry=new bt({color:15524556,roughness:.7,metalness:0}),i.chilli=new Ot({color:12722202,roughness:.3,clearcoat:.8,metalness:0}),i.greens=new bt({color:4033068,roughness:.55,metalness:0}),i.caseLight=new xe({color:new st(16773328).multiplyScalar(2.2)}),i.backdrop=new xe({map:Av(),fog:!1,color:11579568}),i.backdrop.map.wrapS=oi,i.backdrop.map.repeat.set(-2,1),i.farStall=new bt({color:2763312,roughness:.8,metalness:0}),i.farGlow=new xe({color:new st(16756832).multiplyScalar(1.6)});for(const t of["sugar","flakes","fish","vinegar"])i["cond_"+t]=new Ot({map:Cv(t),roughness:.3,clearcoat:.6,metalness:0});return i}function G(i,t,e=0,n=0,s=0,r={}){const o=new rt(i,t);return o.position.set(e,n,s),r.ry&&(o.rotation.y=r.ry),r.rx&&(o.rotation.x=r.rx),r.rz&&(o.rotation.z=r.rz),o.castShadow=r.cast??!0,o.receiveShadow=!0,r.dynamic&&(o.userData.dynamic=!0),o}function ci(i,t=40){return new ui(i.map(([e,n])=>new K(e,n)),t)}function Hv(i,t){const e=X.y,n=X.x1-X.x0,s=X.z1-X.z0,r=(X.z0+X.z1)/2;i.add(G(new Et(n,.03,s),t.steel,0,e-.015,r));const o=new vt(.012,.012,n,10);o.rotateZ(Math.PI/2),i.add(G(o,t.steel,0,e-.012,X.z1)),i.add(G(new Et(n-.02,e-.05,.02),t.steelDark,0,(e-.05)/2+.02,X.z0+.02)),i.add(G(new Et(n-.02,e-.05,.02),t.steelDark,0,(e-.05)/2+.02,X.z1-.03));for(const a of[X.x0+.01,X.x1-.01])i.add(G(new Et(.02,e-.05,s-.04),t.steelDark,a,(e-.05)/2+.02,r));for(const a of[X.x0-.02,X.x1+.02]){const l=new Cn(.26,.018,8,36);l.rotateY(Math.PI/2),i.add(G(l,t.iron,a,.28,r));const c=new vt(.03,.03,.05,10);c.rotateZ(Math.PI/2),i.add(G(c,t.pole,a,.28,r));for(let h=0;h<12;h++){const u=new vt(.002,.002,.5,3);u.rotateX(h/12*Math.PI),i.add(G(u,t.pole,a,.28,r,{cast:!1}))}}i.add(G(new vt(.15,.15,.5,20),t.gas,1.22,.25,.25)),i.add(G(new oe(.15,20,10,0,Math.PI*2,0,Math.PI/2),t.gas,1.22,.5,.25)),i.add(G(new vt(.03,.03,.08,10),t.pole,1.22,.66,.25))}function Gv(i,t){const e=X.x0+.04,n=X.x1-.04,s=X.y,r=wn.y1,o=wn.z0,a=wn.z1,l=(e+n)/2,c=(o+a)/2,h=n-e;for(const g of[e,n,l])for(const M of[o,a])i.add(G(new Et(.018,r-s,.018),t.pole,g,(s+r)/2,M));i.add(G(new Et(h,.02,a-o+.02),t.steel,l,r,c));for(const g of[o,a])i.add(G(new ve(h,r-s),t.glass,l,(s+r)/2,g,{cast:!1}));i.add(G(new Et(h-.1,.008,.02),t.caseLight,l,r-.016,c,{cast:!1}));const u=Di(77),f=new oe(.022,12,8);f.scale(1,.9,1.15);for(let g=0;g<26;g++)i.add(G(f,t.lime,-.78+u()*.26,s+.022+(g>14?.03:0),o+.03+u()*.08,{ry:u()*6}));const d=new oe(.021,12,8);d.scale(1,1.25,1);for(let g=0;g<12;g++)i.add(G(d,t.egg,-.4+g%6*.045,s+.027,o+.04+Math.floor(g/6)*.05));const m=new Et(.16,.035,.08);for(let g=0;g<5;g++)i.add(G(m,t.noodleDry,.02+g%2*.02,s+.018+g*.036,c,{ry:(u()-.5)*.2}));const x=new vt(.004,.001,.05,6);x.rotateZ(Math.PI/2);for(let g=0;g<40;g++)i.add(G(x,t.chilli,.28+u()*.16,s+.006+u()*.02,o+.02+u()*.1,{ry:u()*6,cast:!1}));const p=new vn(.05,1);p.scale(1.4,.5,.9);for(let g=0;g<3;g++)i.add(G(p,t.greens,.6+g*.09,s+.03,c+(u()-.5)*.04,{ry:u()*3}))}function Vv(i,t){const e=new Cn(j.rimR*.78,.011,8,40);e.rotateX(Math.PI/2),i.add(G(e,t.iron,j.x,j.bottomY+.018,j.z));const n=new vt(j.rimR*.82,j.rimR*.9,.06,36,1,!0);i.add(G(n,t.iron,j.x,X.y+.03,j.z));for(let o=0;o<3;o++){const a=o/3*Math.PI*2+.5;i.add(G(new Et(.02,.05,.05),t.iron,j.x+Math.cos(a)*.135,j.bottomY+.005,j.z+Math.sin(a)*.135,{ry:-a}))}const s=new Cn(.06,.012,8,24);s.rotateX(Math.PI/2),i.add(G(s,t.iron,j.x,X.y+.02,j.z));const r=new vt(.018,.02,.02,16);r.rotateX(Math.PI/2),i.add(G(r,t.iron,j.x+.12,X.y-.05,X.z1+.01))}function Wv(i,t){const e=new vt(ie.r,ie.r*1.01,ie.h,48,1),n=G(e,[t.boardSide,t.board,t.boardSide],ie.x,X.y+ie.h/2,ie.z);i.add(n)}function Xv(i,t){for(const[e,n]of[["oil",t.oil],["sauce",t.sauce]]){const s=Su[e],r=e==="oil"?.07:.09;i.add(G(ci([[0,.002],[s.r-.004,.002],[s.r,.01],[s.r,r],[s.r+.004,r+.002],[s.r-.003,r]],32),t.steel,s.x,X.y,s.z));const o=new Ge(s.r-.003,32);o.rotateX(-Math.PI/2),i.add(G(o,n,s.x,X.y+r*.78,s.z,{cast:!1}));const a=new oe(.025,14,8,0,Math.PI*2,Math.PI/2,Math.PI/2);i.add(G(a,t.steel,s.x-.015,X.y+r*.78,s.z+.01));const l=new vt(.004,.004,.2,8);i.add(G(l,t.steel,s.x+.02,X.y+r+.06,s.z+.03,{rz:-.45,rx:.2}))}}function qv(i,t){const e=["sugar","flakes","fish","vinegar"],n=new Et(.2,.006,.2);i.add(G(n,t.steel,qe.x,X.y+.003,qe.z));const s=new Cn(.035,.004,6,20,Math.PI);i.add(G(s,t.steel,qe.x,X.y+.14,qe.z)),i.add(G(new vt(.004,.004,.14,6),t.steel,qe.x-.035,X.y+.07,qe.z)),i.add(G(new vt(.004,.004,.14,6),t.steel,qe.x+.035,X.y+.07,qe.z)),e.forEach((r,o)=>{const a=qe.x+(o%2?.05:-.05),l=qe.z+(o<2?-.05:.05),c=r==="sugar"||r==="flakes"?.045:.055;i.add(G(new vt(.032,.032,c,16),t["cond_"+r],a,X.y+.006+c/2,l)),i.add(G(new vt(.036,.036,.075,16,1,!0),t.glass,a,X.y+.044,l,{cast:!1})),i.add(G(new vt(.038,.038,.008,16),t.steel,a,X.y+.085,l)),i.add(G(new vt(.003,.003,.08,6),t.steel,a+.012,X.y+.1,l,{rz:.25}))})}function Yv(i,t){for(const f of[-1.18,1.18])for(const d of[-.95,.85])i.add(G(new vt(.018,.018,2.2,10),t.pole,f,2.2/2,d));const o=new ve(2.7,2.1,16,12),a=o.attributes.position;for(let f=0;f<a.count;f++){const d=a.getX(f)/1.35,m=a.getY(f)/1.05;a.setZ(f,-(1-d*d)*(1-m*m)*.12)}o.rotateX(Math.PI/2),o.computeVertexNormals(),i.add(G(o,t.canopy,0,2.2+.02,(-.95+.85)/2,{cast:!1}));const l=new vt(.014,.014,1.2,12);l.rotateZ(Math.PI/2),i.add(G(l,t.tube,0,1.92,-.12,{cast:!1}));for(const f of[-.5,.5])i.add(G(new vt(.002,.002,.26,4),t.wire,f,2.05,-.12,{cast:!1}));const c=[];for(let f=0;f<=24;f++){const d=f/24,m=-1.18+d*1.18*2;c.push(new A(m,2.2-.08-Math.sin(d*Math.PI)*.22,-.95-.02))}const h=new li(new sr(c),48,.003,4,!1);i.add(G(h,t.wire,0,0,0,{cast:!1}));const u=new oe(.022,10,8);for(let f=1;f<24;f+=2)i.add(G(u,t.bulb,c[f].x,c[f].y-.03,c[f].z,{cast:!1}))}function $v(i,t){const e=new ve(16,16);e.rotateX(-Math.PI/2),i.add(G(e,t.street,0,0,0,{cast:!1}));const n=new vt(.15,.13,.03,20),s=new vt(.13,.17,.4,20,1,!0),r=Di(4);[[-.7,-1.35],[-.15,-1.55],[.5,-1.3],[1,-1.7],[-1.2,-1.9]].forEach(([l,c],h)=>{const u=h===3?t.stoolBlue:t.stool;i.add(G(s,u,l,.2,c)),i.add(G(n,u,l,.415,c,{ry:r()}))}),i.add(G(new Et(.9,.025,.6),t.steelDark,.1,.72,-2));for(const[l,c]of[[-.3,-1.75],[.5,-1.75],[-.3,-2.25],[.5,-2.25]])i.add(G(new vt(.012,.012,.72,6),t.pole,l,.36,c));const a=[[-2.6,-3.4],[2.4,-3.8],[-3.6,-6],[3.8,-6.5],[.2,-7.5]];for(const[l,c]of a){i.add(G(new Et(1.6,.9,.8),t.farStall,l,.45,c,{cast:!1})),i.add(G(new Et(1.9,.04,1.4),t.farGlow,l,2.1,c,{cast:!1}));for(let h=0;h<5;h++)i.add(G(new oe(.035,8,6),t.bulb,l-.8+h*.4,2,c+.7,{cast:!1}))}}function jv(i){const t=[{lines:["ผัดไทย","PAD THAI"],x:-2,y:2.6,z:-3,w:1.3,h:.65,fg:"#ffd23c",glow:"#ff7a1a"},{lines:["อร่อย"],x:2.3,y:2.9,z:-4.2,w:1.1,h:.45,fg:"#ff5ab4",glow:"#ff1a8c"},{lines:["ก๋วยเตี๋ยว"],x:3.4,y:2.2,z:-2.6,w:1.2,h:.4,fg:"#63e3ff",glow:"#1ab8ff",ry:-.6},{lines:["ชาเย็น","THAI ICED TEA"],x:-3.4,y:2,z:-2.2,w:1,h:.5,fg:"#ffffff",glow:"#ff9a3a",box:!0,bg:"#e2621c",ry:.6}];for(const e of t){const n=fo(e.lines,{fg:e.fg,glow:e.glow,box:e.box,bg:e.bg||"#0c0e14"}),s=new xe({map:n,color:new st(1.5,1.5,1.5),fog:!1}),r=new rt(new ve(e.w,e.h),s);r.position.set(e.x,e.y,e.z),e.ry&&(r.rotation.y=e.ry),i.add(r)}}function Kv(i,t){const e=new vt(8.5,8.5,7,64,1,!0),n=new rt(e,t.backdrop);n.material.side=Fe,n.position.set(0,3.1,0),n.rotation.y=Math.PI*.5,i.add(n)}function mo(i){const t=new Map,e=[];i.updateMatrixWorld(!0);for(const s of[...i.children]){if(!s.isMesh||s.userData.dynamic||Array.isArray(s.material)||s.material.transparent){e.push(s);continue}const r=(s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone()).applyMatrix4(s.matrixWorld),o=Object.keys(r.attributes).sort().join(","),a=s.material.uuid+"|"+o+"|"+s.castShadow;t.has(a)||t.set(a,{mat:s.material,cast:s.castShadow,geos:[]}),t.get(a).geos.push(r)}const n=new jt;for(const s of e)n.add(s);for(const{mat:s,cast:r,geos:o}of t.values()){const a=Tu(o),l=new rt(a,s);l.castShadow=r,l.receiveShadow=!0,n.add(l)}return n}function ch(i=po()){const t=new jt;Hv(t,i),Gv(t,i),Vv(t,i),Wv(t,i),Xv(t,i),qv(t,i),Yv(t,i),$v(t,i),jv(t),Kv(t,i);const e=mo(t);return e.name="stall",{group:e,materials:i}}const js=i=>j.R-Math.sqrt(j.R*j.R-i*i);function Zv(){const i=[];for(let n=0;n<=22;n++){const s=n/22*j.rimR;i.push(new K(s,js(s)))}const e=js(j.rimR);i.push(new K(j.rimR+.003,e+.002)),i.push(new K(j.rimR+.006,e-.001)),i.push(new K(j.rimR+.004,e-.005));for(let n=22;n>=0;n--){const s=n/22*(j.rimR+.002);i.push(new K(s,js(s*.99)-.0025))}return i}function hh(i,t,e){const n=Math.asin(Math.min(.99,i/j.R)),s=new oe(j.R-.0012,40,8,0,Math.PI*2,Math.PI-n,n),r=new Ot({color:t,roughness:.06,metalness:0,clearcoat:1,clearcoatRoughness:.03,transparent:!0,opacity:e,depthWrite:!1}),o=new rt(s,r);return o.position.set(0,j.R,0),o.renderOrder=1,o}class Jv{constructor(){this.group=new jt,this.body=new jt,this.group.position.set(j.x,j.bottomY,j.z),this.group.add(this.body);const t=wv();this.steel=new Ot({map:t,color:16777215,metalness:.55,roughness:.42,clearcoat:.35,clearcoatRoughness:.35,side:$t});const e=new rt(new ui(Zv(),64),this.steel);e.castShadow=!0,e.receiveShadow=!0,e.name="wokBowl",this.bowl=e,this.body.add(e);const n=new bt({color:5911576,roughness:.6,metalness:0}),s=new bt({color:2762790,roughness:.5,metalness:.8}),r=new jt,o=new rt(new vt(.008,.009,.12,10),s);o.rotation.x=Math.PI/2,o.position.z=.06;const a=new rt(new vt(.015,.013,.16,12),n);a.rotation.x=Math.PI/2,a.position.z=.19,r.add(o,a),r.position.set(0,js(j.rimR)-.01,j.rimR+.002),r.rotation.set(-.28,.5,0),r.position.applyAxisAngle(new A(0,1,0),.5);for(const f of r.children)f.castShadow=!0;this.body.add(r);const l=new rt(new Cn(.025,.005,6,16,Math.PI),s);l.position.set(0,js(j.rimR)-.006,-.18-.018),l.rotation.x=-Math.PI/2+.3,this.body.add(l),this.oilPool=hh(.07,14068026,.55),this.saucePool=hh(.08,4857356,.9),this.oilPool.visible=this.saucePool.visible=!1,this.body.add(this.oilPool,this.saucePool),this.tongues=[];const c=new no({map:yv(),color:16777215,blending:fs,depthWrite:!1,transparent:!0}),h=18;for(let f=0;f<h;f++){const d=new el(c.clone()),m=f/h*Math.PI*2;d.userData={a:m,phase:Math.random()*10,r:j.rimR*(.93+f%3*.04)},d.center.set(.5,.05),d.renderOrder=2,this.group.add(d),this.tongues.push(d)}this.blue=[];const u=new no({map:Mv(),blending:fs,depthWrite:!1,transparent:!0});for(let f=0;f<16;f++){const d=new el(u.clone()),m=f/16*Math.PI*2;d.position.set(Math.cos(m)*.065,X.y+.03-j.bottomY,Math.sin(m)*.065),d.center.set(.5,0),d.userData={phase:Math.random()*10},this.group.add(d),this.blue.push(d)}this.light=new Ri(16747066,0,.9,2),this.light.position.set(0,-.045,.02),this.group.add(this.light),this.flareLight=new Ri(16752714,0,.7,2),this.flareLight.position.set(0,j.depth+.12,-.05),this.group.add(this.flareLight),this.tossT=1,this.time=0}toss(){this.tossT=0}update(t,{flame:e,flare:n,oil:s,sauce:r,T:o}){this.time+=t;const a=this.time;if(this.tossT<1){this.tossT=Math.min(1,this.tossT+t/.42);const c=this.tossT,h=Math.sin(c*Math.PI)*.035,u=Math.sin(c*Math.PI*2)*.03;this.body.position.set(0,h,-u),this.body.rotation.x=-Math.sin(c*Math.PI)*.16}else this.body.position.set(0,0,0),this.body.rotation.x=0;if(this.oilPool.visible=s>.02,this.oilPool.visible){const c=.55+Math.min(1.2,s)*.7;this.oilPool.scale.set(c,1,c);const h=o>170?1+Math.sin(a*23)*.012:1;this.oilPool.scale.x*=h}if(this.saucePool.visible=r>.01,this.saucePool.visible){const c=.35+Math.min(1,r)*1.1;this.saucePool.scale.set(c,1,c)}const l=e;for(const c of this.tongues){const h=c.userData,u=.75+Math.sin(a*17+h.phase)*.15+Math.sin(a*31+h.phase*3)*.1,f=n*(.9+Math.sin(a*40+h.phase)*.2),d=Math.max(0,(l-.4)*.09*u)+f*.12,m=h.r+f*.02;c.position.set(Math.cos(h.a)*m,-.03,Math.sin(h.a)*m),c.scale.set(.018+d*.22,d,1),c.visible=d>.01,c.material.opacity=Math.min(.75,.2+d*3+f*.45)}for(const c of this.blue){const h=.8+Math.sin(a*25+c.userData.phase)*.2;c.scale.set(.02,(.012+l*.035)*h,1),c.visible=l>.03}this.light.intensity=l*1.2,this.flareLight.intensity=n*.35}}class Qv{constructor(){const t=new bt({color:12106944,metalness:1,roughness:.28,side:$t}),e=new bt({color:7028510,roughness:.6,metalness:0});this.group=new jt;const n=new Ii,s=.042,r=.075,o=.014;n.moveTo(-s,0),n.lineTo(s,0),n.lineTo(s,r-o),n.quadraticCurveTo(s,r,s-o,r),n.lineTo(-s+o,r),n.quadraticCurveTo(-s,r,-s,r-o),n.lineTo(-s,0);const a=new or(n,6),l=a.attributes.position;for(let d=0;d<l.count;d++){const m=l.getX(d);l.setZ(d,m*m/(2*j.R))}a.computeVertexNormals(),a.rotateX(-Math.PI/2);const c=new rt(a,t);c.position.set(0,.004,.035),c.castShadow=!0;const h=new rt(new Et(s*2,.018,.002),t);h.position.set(0,.012,.035),this.group.add(h);const u=new rt(new vt(.004,.004,.12,8),t);u.position.set(0,.05,.05),u.rotation.x=.95;const f=new rt(new vt(.012,.011,.14,10),e);f.position.set(0,.13,.15),f.rotation.x=.95,u.castShadow=f.castShadow=!0,this.group.add(c,u,f),this.group.visible=!1,this.pos=new A(j.x+.1,j.rimY,j.z+.12),this.yaw=0}update(t,e,n){const s=new A(j.x+.12,j.rimY+.01,j.z+.13),r=e?new A(e.x,e.y,e.z):s,o=this.pos.clone();this.pos.lerp(r,1-Math.exp(-t*(e?28:8)));const a=this.pos.clone().sub(o);a.lengthSq()>1e-8&&n&&(this.yaw+=(Math.atan2(a.x,a.z)-this.yaw)*0),this.group.position.copy(this.pos);const l=(j.x-this.pos.x)/j.R,c=(j.z-this.pos.z)/j.R;this.group.rotation.set(-c*.9,0,l*.9)}}class t_{constructor(){const t=new bt({color:12633288,metalness:1,roughness:.25,side:$t});this.group=new jt;const e=new rt(new oe(.03,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2),t),n=new rt(new vt(.0045,.0045,.26,8),t);n.position.set(0,.1,.1),n.rotation.x=.85,this.liquidMat=new Ot({color:14068026,roughness:.05,clearcoat:1,metalness:0,transparent:!0,opacity:.9}),this.fill=new rt(new Ge(.027,20),this.liquidMat),this.fill.rotation.x=-Math.PI/2,this.fill.position.y=-.006,this.cupGroup=new jt,this.cupGroup.add(e,n,this.fill),this.group.add(this.cupGroup),this.stream=new rt(new vt(.0035,.005,1,10,1,!0),this.liquidMat),this.group.add(this.stream),this.group.visible=!1,this.tilt=0}setLiquid(t){this.liquidMat.color.set(t)}update(t,e,n,s=null){this.tilt+=((e?1.25:.1)-this.tilt)*Math.min(1,t*10);const r=s?s.x:j.x,o=s?s.y:j.rimY,a=s?s.z:j.z;this.group.position.set(r-.05,o+.16,a+.05),this.cupGroup.rotation.z=this.tilt,this.fill.visible=n>.05;const l=-.028*Math.cos(this.tilt),c=-.028*Math.sin(this.tilt),h=s?s.y-(s.y===j.rimY?j.depth:0):j.bottomY,u=this.group.position.y+c-(h+.01);this.stream.visible=e&&this.tilt>.8,this.stream.scale.set(1,u,1),this.stream.position.set(l-.004,c-u/2,0)}}const uh=9.81,Ks=4096,hs=.03;function Iu(){return{type:"bowl",heated:!0,cx:j.x,cy:j.cy,cz:j.z,R:j.R,rimR:j.rimR,rimY:j.rimY}}function e_(){return{type:"teppan",heated:!0,cx:qt.x,cz:qt.z,y:qt.topY,hw:qt.r,hd:qt.r,round:qt.r-.03,rimY:qt.topY+.05}}function n_(i,t,e,n,s,r){if(Math.abs(s)<1e-5)return null;const o=(qt.topY-t)/s;if(!(o>0))return null;let a=i+n*o-qt.x,l=e+r*o-qt.z;const c=Math.hypot(a,l)||1,h=qt.r-.04;return c>h&&(a*=h/c,l*=h/c),{x:qt.x+a,y:qt.topY,z:qt.z+l}}function i_(){return{type:"teppan",heated:!0,cx:Rt.x,cz:Rt.z,y:Rt.topY,hw:Rt.w/2-.02,hd:Rt.d/2-.02,rimY:Rt.topY+.05}}function ol(){return{type:"plate",cx:$.x,cz:$.z,y:$.wellY,wellR:$.wellR,r:$.r-.012,lip:$.lip}}function fh(i=1200){return{n:0,cap:i,x:new Float32Array(i*3),p:new Float32Array(i*3),q:new Float32Array(i*4),w:new Float32Array(i*3),r:new Float32Array(i),inv:new Float32Array(i),kind:new Int16Array(i),strand:new Int32Array(i).fill(-1),d:new Float32Array(i),c:new Float32Array(i),coat:new Float32Array(i),still:new Float32Array(i),contact:new Uint8Array(i),speed:new Float32Array(i),seed:new Float32Array(i),flat:new Uint8Array(i),size:new Float32Array(i).fill(1),links:[],strands:0,container:Iu(),friction:.18,spatula:{on:!1,x:0,y:0,z:0,px:0,py:0,pz:0,r:.05},h:1/180,_hash:new Int32Array(i),_start:new Int32Array(Ks+1),_order:new Int32Array(i),_rng:625341585}}function Ie(i){let t=i._rng;return t^=t<<13,t^=t>>>17,t^=t<<5,i._rng=t>>>0,i._rng/4294967296}function ss(i,t,e,n,s,r,o,a=0,l=0,c=0){if(i.n>=i.cap)return-1;const h=i.n++,u=h*3;i.x[u]=e,i.x[u+1]=n,i.x[u+2]=s,i.p[u]=e-a*i.h,i.p[u+1]=n-l*i.h,i.p[u+2]=s-c*i.h;const f=Ie(i)*Math.PI*2,d=Math.acos(2*Ie(i)-1),m=Ie(i)*Math.PI*2,x=Math.sin(d)*Math.cos(f),p=Math.cos(d),g=Math.sin(d)*Math.sin(f),M=Math.sin(m/2);return i.q[h*4]=x*M,i.q[h*4+1]=p*M,i.q[h*4+2]=g*M,i.q[h*4+3]=Math.cos(m/2),i.w[u]=i.w[u+1]=i.w[u+2]=0,i.r[h]=r,i.inv[h]=1/Math.max(.01,o),i.kind[h]=t,i.strand[h]=-1,i.d[h]=0,i.c[h]=0,i.coat[h]=0,i.still[h]=0,i.contact[h]=0,i.speed[h]=0,i.flat[h]=0,i.size[h]=1,i.seed[h]=Ie(i),h}function s_(i,t,e,n,s,r,o,a,l){const c=i.strands++;let h=Ie(i)*Math.PI*2,u=s,f=o;const d=i.n;for(let m=0;m<e;m++){const x=ss(i,t,u,r+m*.002,f,a,l);if(x<0)break;i.strand[x]=c,h+=(Ie(i)-.5)*.7,u+=Math.cos(h)*n,f+=Math.sin(h)*n,m>0&&i.links.push([x-1,x,n,1]),m>1&&i.links.push([x-2,x,n*1.9,.12])}return d}function r_(i,t=1){const e=i.container;if(e.type==="teppan")return o_(i,t);if(e.type!=="bowl")return 0;let n=0;for(let s=0;s<i.n;s++){const r=s*3;if(i.x[r+1]>e.rimY+.04)continue;const o=i.x[r]-e.cx,a=i.x[r+2]-e.cz,l=(-o*2.4+(Ie(i)-.5)*.35)*t,c=(1.25+Ie(i)*.55)*t,h=(-a*2.4+.18+(Ie(i)-.5)*.35)*t;i.p[r]=i.x[r]-l*i.h,i.p[r+1]=i.x[r+1]-c*i.h,i.p[r+2]=i.x[r+2]-h*i.h,i.w[r]=(Ie(i)-.5)*30,i.w[r+1]=(Ie(i)-.5)*12,i.w[r+2]=(Ie(i)-.5)*30,i.still[s]=0,n++}return n}function o_(i,t){const e=i.container;let n=0;for(let s=0;s<i.n;s++){const r=s*3;if(i.x[r+1]>e.rimY+.04)continue;const o=i.x[r]-e.cx,a=i.x[r+2]-e.cz,l=(-o*1.2+(Ie(i)-.5)*.25)*t,c=(.45+Ie(i)*.3)*t,h=(-a*1.2+(Ie(i)-.5)*.25)*t;i.p[r]=i.x[r]-l*i.h,i.p[r+1]=i.x[r+1]-c*i.h,i.p[r+2]=i.x[r+2]-h*i.h,i.w[r]=(Ie(i)-.5)*24,i.w[r+2]=(Ie(i)-.5)*24,i.still[s]=0,n++}return n}function a_(i,t=null,e=!1,n=.36){if(i.container=ol(),e)return l_(i);if(t){const r=(t.base*t.base+t.h*t.h)/(2*t.h);i.container.dome={x:t.x,z:t.z,R:r,cy:i.container.y+t.h-r}}i.friction=.7;const s=i.container;for(let r=0;r<i.n;r++){const o=r*3,a=(i.x[o]-j.x)*n,l=(i.x[o+2]-j.z)*n,c=s.y+.02+(i.x[o+1]-j.bottomY)*2.2+Ie(i)*.03;i.x[o]=s.cx+a,i.x[o+1]=c,i.x[o+2]=s.cz+l,i.p[o]=i.x[o],i.p[o+1]=c+.002,i.p[o+2]=i.x[o+2],i.still[r]=0}}function l_(i){const t=i.container,e=.078,n=[...Array(i.n).keys()].sort((r,o)=>i.r[o]-i.r[r]),s=[];for(const r of n){let o=null,a=-1;for(let c=0;c<80;c++){let h,u,f;do h=Ie(i)*2-1,u=Ie(i)**1.6,f=Ie(i)*2-1;while(h*h+u*u+f*f>1);const d=e-i.r[r];h=t.cx+h*d,u=t.y+i.r[r]+u*d*.9,f=t.cz+f*d;let m=1/0;for(const x of s){const p=Math.hypot(h-i.x[x*3],u-i.x[x*3+1],f-i.x[x*3+2])-(i.r[r]+i.r[x]);p<m&&(m=p)}if(m>a&&(a=m,o=[h,u,f]),m>=0)break}const l=r*3;i.x[l]=o[0],i.x[l+1]=o[1],i.x[l+2]=o[2],i.p[l]=i.x[l],i.p[l+1]=i.x[l+1],i.p[l+2]=i.x[l+2],i.still[r]=0,s.push(r)}i.friction=.9;for(let r=0;r<i.n;r++)i.inv[r]=0}function Du(i,t,e){return(i*73856093^t*19349663^e*83492791)&Ks-1}function c_(i){const{n:t,x:e,_hash:n,_start:s,_order:r}=i;s.fill(0);for(let a=0;a<t;a++){const l=Du(Math.floor(e[a*3]/hs),Math.floor(e[a*3+1]/hs),Math.floor(e[a*3+2]/hs));n[a]=l,s[l+1]++}for(let a=0;a<Ks;a++)s[a+1]+=s[a];const o=i._fill||(i._fill=new Int32Array(Ks));o.set(s.subarray(0,Ks));for(let a=0;a<t;a++)r[o[n[a]]++]=a}function h_(i){const{n:t,x:e,p:n,r:s,inv:r,strand:o,_start:a,_order:l}=i,c=i.container.type==="plate"?.7:0;for(let h=0;h<t;h++){const u=Math.floor(e[h*3]/hs),f=Math.floor(e[h*3+1]/hs),d=Math.floor(e[h*3+2]/hs);for(let m=-1;m<=1;m++)for(let x=-1;x<=1;x++)for(let p=-1;p<=1;p++){const g=Du(u+m,f+x,d+p);for(let M=a[g];M<a[g+1];M++){const v=l[M];if(v<=h||o[h]>=0&&o[h]===o[v]&&Math.abs(h-v)<=2)continue;const y=h*3,R=v*3,E=e[R]-e[y],T=e[R+1]-e[y+1],L=e[R+2]-e[y+2],I=(s[h]+s[v])*.92,_=E*E+T*T+L*L;if(_>=I*I||_<1e-12)continue;const w=Math.sqrt(_),k=r[h]+r[v];if(k===0)continue;const z=(I-w)/w/k*.8;if(e[y]-=E*z*r[h],e[y+1]-=T*z*r[h],e[y+2]-=L*z*r[h],e[R]+=E*z*r[v],e[R+1]+=T*z*r[v],e[R+2]+=L*z*r[v],c){const V=E/w,Y=T/w,B=L/w,tt=e[y]-n[y]-(e[R]-n[R]),W=e[y+1]-n[y+1]-(e[R+1]-n[R+1]),gt=e[y+2]-n[y+2]-(e[R+2]-n[R+2]),xt=tt*V+W*Y+gt*B,_t=(tt-V*xt)*c/k,te=(W-Y*xt)*c/k,se=(gt-B*xt)*c/k;e[y]-=_t*r[h],e[y+1]-=te*r[h],e[y+2]-=se*r[h],e[R]+=_t*r[v],e[R+1]+=te*r[v],e[R+2]+=se*r[v]}}}}}function u_(i){const{x:t,inv:e,links:n}=i;for(let s=0;s<n.length;s++){const[r,o,a,l]=n[s],c=r*3,h=o*3,u=t[h]-t[c],f=t[h+1]-t[c+1],d=t[h+2]-t[c+2],m=Math.sqrt(u*u+f*f+d*d)||1e-6;if(l<1&&m>a)continue;const x=e[r]+e[o];if(x===0)continue;const p=(m-a)/m/x*l;t[c]+=u*p*e[r],t[c+1]+=f*p*e[r],t[c+2]+=d*p*e[r],t[h]-=u*p*e[o],t[h+1]-=f*p*e[o],t[h+2]-=d*p*e[o]}}function f_(i){const t=i.container,{n:e,x:n,p:s,r,contact:o}=i,a=i.friction;for(let l=0;l<e;l++){if(i.inv[l]===0){o[l]=1;continue}const c=l*3;let h=!1,u=0,f=1,d=0;if(t.type==="teppan"){const m=t.y+r[l]*.7;if(n[c+1]<m&&(n[c+1]=m,h=!0),t.round){const x=n[c]-t.cx,p=n[c+2]-t.cz,g=Math.hypot(x,p)||1e-6,M=t.round-r[l];g>M&&(n[c]=t.cx+x/g*M,n[c+2]=t.cz+p/g*M)}else{const x=t.hw-r[l],p=t.hd-r[l];n[c]<t.cx-x?n[c]=t.cx-x:n[c]>t.cx+x&&(n[c]=t.cx+x),n[c+2]<t.cz-p?n[c+2]=t.cz-p:n[c+2]>t.cz+p&&(n[c+2]=t.cz+p)}}else if(t.type==="bowl"){const m=n[c]-t.cx,x=n[c+1]-t.cy,p=n[c+2]-t.cz,g=Math.sqrt(m*m+x*x+p*p)||1e-6,M=t.R-r[l];n[c+1]<t.rimY+r[l]&&g>M&&(n[c]=t.cx+m/g*M,n[c+1]=t.cy+x/g*M,n[c+2]=t.cz+p/g*M,u=-m/g,f=-x/g,d=-p/g,h=!0);const v=n[c]-t.cx,y=n[c+2]-t.cz,R=Math.sqrt(v*v+y*y),E=t.rimR-r[l]*1.2;n[c+1]>=t.rimY&&R>E&&(n[c]=t.cx+v/R*E,n[c+2]=t.cz+y/R*E)}else{const m=n[c]-t.cx,x=n[c+2]-t.cz,p=Math.sqrt(m*m+x*x)||1e-6,g=Math.min(1,Math.max(0,(p-t.wellR)/(t.r-t.wellR))),M=t.y+t.lip*g*g*(3-2*g)+r[l]*.7;if(n[c+1]<M){n[c+1]=M,h=!0;const y=g>0&&g<1?t.lip*6*g*(1-g)/(t.r-t.wellR):0,R=Math.sqrt(1+y*y);u=-m/p*y/R,f=1/R,d=-x/p*y/R}const v=t.r-r[l];if(p>v&&(n[c]=t.cx+m/p*v,n[c+2]=t.cz+x/p*v),t.spheres)for(const y of t.spheres){const R=n[c]-y.x,E=n[c+1]-y.cy,T=n[c+2]-y.z,L=Math.sqrt(R*R+E*E+T*T)||1e-6,I=y.R+r[l]*.7;L<I&&(n[c]=y.x+R/L*I,n[c+1]=y.cy+E/L*I,n[c+2]=y.z+T/L*I,h=!0,u=R/L,f=E/L,d=T/L)}if(t.puck){const y=t.puck,R=n[c]-y.x,E=n[c+2]-y.z;R*R+E*E<y.r*y.r&&n[c+1]<y.top+r[l]*.7&&(n[c+1]=y.top+r[l]*.7,h=!0,u=0,f=1,d=0)}if(t.dome){const y=t.dome,R=n[c]-y.x,E=n[c+1]-y.cy,T=n[c+2]-y.z,L=Math.sqrt(R*R+E*E+T*T)||1e-6,I=y.R+r[l]*.7;L<I&&n[c+1]>t.y&&(n[c]=y.x+R/L*I,n[c+1]=y.cy+E/L*I,n[c+2]=y.z+T/L*I,h=!0,u=R/L,f=E/L,d=T/L)}}if(o[l]=h?1:0,h){const m=n[c]-s[c],x=n[c+1]-s[c+1],p=n[c+2]-s[c+2],g=m*u+x*f+p*d,M=m-u*g,v=x-f*g,y=p-d*g;n[c]-=M*a,n[c+1]-=v*a,n[c+2]-=y*a}}}function d_(i,t){const e=i.spatula;if(!e.on)return;const{n,x:s,r}=i,o=e.px+(e.x-e.px)*t,a=e.py+(e.y-e.py)*t,l=e.pz+(e.z-e.pz)*t,c=(e.x-e.px)/3;(e.y-e.py)/3;const h=(e.z-e.pz)/3,u=Math.sqrt(c*c+h*h);for(let f=0;f<n;f++){const d=f*3,m=s[d]-o,x=s[d+1]-a,p=s[d+2]-l;if(x>.06||x<-.03)continue;const g=e.r+r[f],M=m*m+p*p;if(M>g*g)continue;const y=1-(Math.sqrt(M)||1e-6)/g;s[d]+=c*(.35+y*.6),s[d+2]+=h*(.35+y*.6),s[d+1]+=u*.5*y,i.still[f]=0}}function p_(i,t){const n=Math.min(t,.03333333333333333)/3;i.h=n;const{x:s,p:r}=i,o=i.container.type==="plate"?.86:.992;for(let c=0;c<3;c++){for(let h=0;h<i.n;h++){if(i.inv[h]===0)continue;const u=h*3;let f=(s[u]-r[u])*o,d=(s[u+1]-r[u+1])*o,m=(s[u+2]-r[u+2])*o;r[u]=s[u],r[u+1]=s[u+1],r[u+2]=s[u+2];let x=uh;const p=i.container.fryY;if(p!=null&&s[u+1]<p){const g=Math.min(1,(p-s[u+1])/(i.r[h]*2));x=uh*(1-1.5*g),f*=.9,d*=.9,m*=.9}s[u]+=f,s[u+1]+=d-x*n*n,s[u+2]+=m}d_(i,(c+1)/3),c_(i);for(let h=0;h<2;h++)u_(i),h_(i),f_(i)}const a=i.spatula;a.px=a.x,a.py=a.y,a.pz=a.z;const l=n*3;for(let c=0;c<i.n;c++){const h=c*3,u=(s[h]-r[h])/n,f=(s[h+1]-r[h+1])/n,d=(s[h+2]-r[h+2])/n,m=Math.sqrt(u*u+f*f+d*d);if(i.speed[c]=m,m<.03?i.still[c]+=l:i.still[c]=Math.max(0,i.still[c]-l*4),i.container.type==="plate"&&i.still[c]>.2&&i.inv[c]!==0&&(i.inv[c]=0),i.contact[c]){const x=i.r[c];i.w[h]+=(d/x-i.w[h])*.3,i.w[h+2]+=(-u/x-i.w[h+2])*.3,i.w[h+1]*=.8}i.w[h]*=.985,i.w[h+1]*=.985,i.w[h+2]*=.985,i.flat[c]||m_(i.q,c*4,i.w[h],i.w[h+1],i.w[h+2],l)}}function m_(i,t,e,n,s,r){const o=i[t],a=i[t+1],l=i[t+2],c=i[t+3],h=e*r*.5,u=n*r*.5,f=s*r*.5;let d=o+(h*c+u*l-f*a),m=a+(u*c+f*o-h*l),x=l+(f*c+h*a-u*o),p=c-(h*o+u*a+f*l);const g=Math.sqrt(d*d+m*m+x*x+p*p)||1;i[t]=d/g,i[t+1]=m/g,i[t+2]=x/g,i[t+3]=p/g}function g_(i,t,e,n,s,r){if(Math.abs(s)<1e-5)return null;const o=(Rt.topY-t)/s;if(!(o>0))return null;let a=i+n*o,l=e+r*o;const c=Rt.w/2-.03,h=Rt.d/2-.03;return Math.abs(a-Rt.x)>c*1.5||Math.abs(l-Rt.z)>h*1.5?null:(a=Math.max(Rt.x-c,Math.min(Rt.x+c,a)),l=Math.max(Rt.z-h,Math.min(Rt.z+h,l)),{x:a,y:Rt.topY,z:l})}function x_(i,t,e,n,s,r){const o=j.x,a=j.cy,l=j.z,c=i-o,h=t-a,u=e-l,f=c*n+h*s+u*r,d=c*c+h*h+u*u-j.R*j.R,m=f*f-d;if(m<0)return null;const x=-f+Math.sqrt(m);let p=i+n*x,g=t+s*x,M=e+r*x;if(g>j.rimY){const v=(j.rimY-t)/s;if(!(v>0))return null;p=i+n*v,M=e+r*v;const y=p-o,R=M-l,E=Math.hypot(y,R);if(E>j.rimR*1.6)return null;const T=Math.min(1,(j.rimR-.02)/E);p=o+y*T,M=l+R*T,g=a-Math.sqrt(Math.max(0,j.R*j.R-(p-o)**2-(M-l)**2))}return{x:p,y:g,z:M}}class Uu{constructor(){this.wok=new Jv,this.spatula=new Qv,this.group=new jt,this.group.add(this.wok.group,this.spatula.group),this.view="wok",this.tossLabel="TOSS",this.kind="wok"}container(){return Iu()}surfaceRay(t){const e=t.origin,n=t.direction,s=x_(e.x,e.y,e.z,n.x,n.y,n.z);if(s)return s;if(Math.abs(n.y)<1e-5)return null;const r=(j.rimY-e.y)/n.y;let o=e.x+n.x*r-j.x,a=e.z+n.z*r-j.z;const l=Math.hypot(o,a)||1,c=j.rimR-.025;l>c&&(o*=c/l,a*=c/l);const h=j.cy-Math.sqrt(Math.max(0,j.R*j.R-o*o-a*a));return{x:j.x+o,y:h,z:j.z+a}}dropPoint(){return new A(j.x,j.rimY,j.z)}spawn(t,e,n=0){return{x:j.x+n*.05+(Math.random()-.5)*.06,y:j.rimY+.03+Math.random()*.04,z:j.z+.03+(Math.random()-.5)*.06}}stirPoint(t){const e=t*4.2,n=j.x+Math.sin(e)*.1,s=j.z+Math.sin(e*2)*.06;return{x:n,y:j.cy-Math.sqrt(j.R*j.R-(n-j.x)**2-(s-j.z)**2),z:s}}toss(){this.wok.toss()}update(t,e,n,s){this.wok.update(t,e),this.spatula.update(t,n,s)}}class Nu{constructor(){this.group=new jt,this.view="teppan",this.tossLabel="FLIP",this.kind="teppan";const{w:t,d:e,topY:n}=Rt,s=new Ot({map:Ul(),metalness:.6,roughness:.4,clearcoat:.4,clearcoatRoughness:.3});this.steel=s;const r=new rt(new Et(t,.012,e),s);r.position.set(Rt.x,n-.006,Rt.z),r.receiveShadow=!0,r.castShadow=!0;const o=new bt({color:11054514,metalness:1,roughness:.4}),a=new rt(new Et(t+.02,n-.012-X.y,e+.02),o);a.position.set(Rt.x,(n-.012+X.y)/2,Rt.z);const l=new bt({color:9343896,metalness:1,roughness:.35,side:$t}),c=new rt(new Et(t+.02,.05,.004),l);c.position.set(Rt.x,n+.025,Rt.z-e/2-.008),this.group.add(r,a,c);for(const u of[-1,1]){const f=new rt(new Et(.004,.035,e+.02),l);f.position.set(Rt.x+u*(t/2+.008),n+.0175,Rt.z),this.group.add(f)}this.oilFilm=new rt(new Ge(.12,32),new Ot({color:5915684,alphaMap:nr(),roughness:.05,clearcoat:1,clearcoatRoughness:.03,transparent:!0,opacity:.12,depthWrite:!1,metalness:0})),this.oilFilm.rotation.x=-Math.PI/2,this.oilFilm.position.set(Rt.x,n+6e-4,Rt.z),this.oilFilm.visible=!1,this.sauceFilm=new rt(new Ge(.1,32),new Ot({color:3807754,alphaMap:nr(),roughness:.1,clearcoat:1,transparent:!0,opacity:.8,depthWrite:!1,metalness:0})),this.sauceFilm.rotation.x=-Math.PI/2,this.sauceFilm.position.set(Rt.x,n+8e-4,Rt.z),this.sauceFilm.visible=!1,this.group.add(this.oilFilm,this.sauceFilm),this.vents=[];const h=new xe({color:new st(.35,.55,1.6),transparent:!0,opacity:0,depthWrite:!1});for(let u=0;u<9;u++){const f=new rt(new ve(.028,.008),h);f.position.set(Rt.x-t/2+.05+u*((t-.1)/8),(n+X.y)/2-.004,Rt.z+e/2+.0112),this.group.add(f),this.vents.push(f)}this.blue=h,this.light=new Ri(16751178,0,.7,2),this.light.position.set(Rt.x,X.y+.02,Rt.z+e/2+.1),this.group.add(this.light),this.spatula=new v_,this.group.add(this.spatula.group),this.jolt=0}container(){return i_()}surfaceRay(t){const e=t.origin,n=t.direction,s=g_(e.x,e.y,e.z,n.x,n.y,n.z);if(s)return s;if(Math.abs(n.y)<1e-5)return null;const r=(Rt.topY-e.y)/n.y,o=Rt.w/2-.03,a=Rt.d/2-.03;return{x:Math.max(Rt.x-o,Math.min(Rt.x+o,e.x+n.x*r)),y:Rt.topY,z:Math.max(Rt.z-a,Math.min(Rt.z+a,e.z+n.z*r))}}dropPoint(){return new A(Rt.x,Rt.topY+.02,Rt.z)}spawn(t,e,n=0){const s=Math.random()*Math.PI*2,r=Math.sqrt(Math.random())*.09;return{x:Rt.x+n*.03+Math.cos(s)*r,y:Rt.topY+.03+Math.random()*.03,z:Rt.z+Math.sin(s)*r*.7}}stirPoint(t){const e=t*3.6;return{x:Rt.x+Math.sin(e)*.12,y:Rt.topY,z:Rt.z+Math.sin(e*2)*.07}}toss(){this.jolt=1}update(t,e,n,s){if(this.oilFilm.visible=e.oil>.02,this.oilFilm.visible){const r=.5+Math.min(1.2,e.oil)*.5;this.oilFilm.scale.set(r*1.3,r,1)}if(this.sauceFilm.visible=e.sauce>.01,this.sauceFilm.visible){const r=.4+Math.min(1,e.sauce)*1.1;this.sauceFilm.scale.set(r*1.3,r,1)}this.blue.opacity=Math.min(.9,e.flame*1.2),this.light.intensity=e.flame*.6,this.jolt=Math.max(0,this.jolt-t*4),this.spatula.update(t,n,s,this.jolt)}}class v_{constructor(){const t=new bt({color:12896460,metalness:1,roughness:.28}),e=new bt({color:7028510,roughness:.6,metalness:0}),n=()=>{const s=new jt,r=new rt(new Et(.075,.0015,.06),t);r.position.set(0,.001,-.01);const o=new rt(new Et(.012,.002,.05),t);o.position.set(0,.012,.035),o.rotation.x=-.45;const a=new rt(new vt(.011,.012,.1,10),e);a.rotation.x=Math.PI/2-.45,a.position.set(0,.04,.1);for(const l of[r,o,a])l.castShadow=!0,s.add(l);return s};this.a=n(),this.b=n(),this.group=new jt,this.group.add(this.a,this.b),this.group.visible=!1,this.pos=new A(Rt.x+.1,Rt.topY,Rt.z+.1)}update(t,e,n,s=0){const r=e?new A(e.x,e.y,e.z):new A(Rt.x+.12,Rt.topY,Rt.z+.12);this.pos.lerp(r,1-Math.exp(-t*(e?26:8))),this.a.position.copy(this.pos),this.a.rotation.set(-s*.9,.25,0),this.b.position.set(this.pos.x-.09,this.pos.y+s*.02,this.pos.z+.02),this.b.rotation.set(-s*.9,-.3,0)}}class __ extends Uu{constructor(){super(),this.kind="kadai",this.tossLabel="TURN",this.oilMat=new Ot({color:13145642,roughness:.05,clearcoat:1,clearcoatRoughness:.02,transparent:!0,opacity:.55,depthWrite:!1,metalness:0}),this.oil=new rt(new Ge(1,48),this.oilMat),this.oil.rotation.x=-Math.PI/2,this.oil.renderOrder=2,this.oil.visible=!1,this.group.add(this.oil),this.bubbles=new ai(new oe(.003,6,4),new Ot({color:16771232,roughness:.05,clearcoat:1,transparent:!0,opacity:.8,metalness:0}),60),this.bubbles.count=0,this.group.add(this.bubbles),this.wok.oilPool.visible=!1,this.fryY=null,this.t=0}level(t){return j.bottomY+.01+Math.min(1.1,t)*.065}container(){const t=super.container();return t.fryY=this.fryY,t}update(t,e,n,s,r){if(super.update(t,{...e,oil:0},n,s),this.t+=t,this.fryY=e.oil>.05?this.level(e.oil):null,r&&r.container.type==="bowl"&&(r.container.fryY=this.fryY),this.oil.visible=this.fryY!=null,this.oil.visible){const a=Math.sqrt(Math.max(0,j.R*j.R-(j.cy-this.fryY)**2));this.oil.position.set(j.x,this.fryY,j.z),this.oil.scale.setScalar(a*.995),this.oilMat.color.setHex(e.T>160?14197298:13145642)}let o=0;if(this.fryY!=null&&e.T>150&&r){const a=new ne;for(let l=0;l<r.n&&o<60;l+=2){if(r.x[l*3+1]>this.fryY+.01)continue;const c=this.t*9+l*1.7,h=r.r[l]*(1.1+l*13%5*.08);a.makeTranslation(r.x[l*3]+Math.cos(c)*h,this.fryY+.001,r.x[l*3+2]+Math.sin(c)*h),this.bubbles.setMatrixAt(o++,a)}this.bubbles.instanceMatrix.needsUpdate=!0}this.bubbles.count=o}}class y_ extends Nu{constructor(){super(),this.kind="tawa",this.view="tawa",this.tossLabel="FLIP";for(const s of[...this.group.children])s!==this.oilFilm&&s!==this.sauceFilm&&s!==this.spatula.group&&s!==this.light&&this.group.remove(s);const t=new Ot({map:Ul(),metalness:.6,roughness:.42,clearcoat:.35,clearcoatRoughness:.3}),e=new rt(new vt(qt.r,qt.r*.97,.012,64),t);e.position.set(qt.x,qt.topY-.006,qt.z),e.castShadow=e.receiveShadow=!0;const n=new rt(new vt(.16,.2,qt.topY-.012-X.y,24,1,!0),new bt({color:2762790,metalness:.7,roughness:.5,side:$t}));n.position.set(qt.x,(qt.topY-.012+X.y)/2,qt.z),this.group.add(e,n);for(const s of[this.oilFilm,this.sauceFilm])s.position.set(qt.x,qt.topY+6e-4,qt.z);this.sauceFilm.material.color.setHex(12074010),this.mashLayer=new rt(new oe(1,32,8,0,Math.PI*2,0,Math.PI/2),new Ot({map:Lu(),roughness:.3,clearcoat:.8,clearcoatRoughness:.2,metalness:0})),this.mashLayer.position.set(qt.x,qt.topY,qt.z),this.mashLayer.visible=!1,this.group.add(this.mashLayer),this.mash=0}update(t,e,n,s){if(super.update(t,e,n,s),this.sauceFilm.scale.multiplyScalar(.6),this.mashLayer.visible=this.mash>0,this.mash>0){const r=.06+Math.min(1,this.mash)*.06;this.mashLayer.scale.set(r*1.2,.012+this.mash*.01,r)}}container(){return e_()}surfaceRay(t){const e=t.origin,n=t.direction;return n_(e.x,e.y,e.z,n.x,n.y,n.z)}dropPoint(){return new A(qt.x,qt.topY+.02,qt.z)}spawn(t,e,n=0){const s=Math.random()*Math.PI*2,r=Math.sqrt(Math.random())*.1;return{x:qt.x+n*.03+Math.cos(s)*r,y:qt.topY+.03+Math.random()*.03,z:qt.z+Math.sin(s)*r}}stirPoint(t){const e=t*3.6;return{x:qt.x+Math.sin(e)*.12,y:qt.topY,z:qt.z+Math.sin(e*2)*.08}}}function M_(i=!1){const t=$.r,e=$.wellR,n=i?$.lip*.55:$.lip,s=.0015;return ci([[0,-.01],[e*.62,-.01],[e*.66,-.006],[e*.7,-.003],[e+.01,-.002],[t-.01,n-.004],[t,n-.002],[t+.001,n],[t-.004,n+.001],[t-.012,n*.85],[e+.012,.004],[e,s],[0,s]],56)}const aa={};function b_(){if(aa.m)return aa.m;const i={};return i.plate=new Ot({color:15921386,roughness:.2,clearcoat:1,clearcoatRoughness:.08,metalness:0,side:$t}),i.plateRim=new Ot({map:Tv(),roughness:.2,clearcoat:1,clearcoatRoughness:.08,metalness:0,side:$t}),i.plateRim.map.repeat.set(10,1),i.leaf=new Ot({map:Sv(),roughness:.35,clearcoat:.6,clearcoatRoughness:.2,metalness:0,side:$t}),i.glaze=new Ot({map:Pv(),roughness:.25,clearcoat:1,clearcoatRoughness:.1,metalness:0,side:$t}),i.flat=new Ot({color:15525594,map:ro(),roughness:.3,clearcoat:.9,clearcoatRoughness:.12,metalness:0,side:$t}),i.fune=new bt({map:Lv(),roughness:.75,metalness:0,side:$t}),i.paper=new bt({color:16052194,roughness:.9,metalness:0}),i.fiesta=new Ot({color:3121072,map:ro(),roughness:.3,clearcoat:.9,clearcoatRoughness:.15,metalness:0,side:$t}),i.tortilla=new bt({map:Nl(),color:15783578,roughness:.75,metalness:0}),i.steel=new bt({color:13159632,metalness:1,roughness:.3,side:$t}),i.pav=new Ot({color:14721104,roughness:.5,clearcoat:.6,metalness:0}),i.sambar=new Ot({color:13132826,roughness:.2,clearcoat:1,metalness:0}),i.chutney=new Ot({color:15920864,roughness:.3,clearcoat:.8,metalness:0}),aa.m=i,i}function w_(i=8){const t=[],e=i/2;for(let n=0;n<i;n++){const s=n%e,r=Math.floor(n/e);t.push([$.x+(s-(e-1)/2)*.039,$.z+(r-.5)*.04])}return t}const jr={w:.19,d:.105,h:.022,floor:.004};function S_(i="thai",{leaf:t=!1,pav:e=0,bowls:n=!1,mound:s=null}={}){const r=b_(),o=new jt;o.name="plateware";const a=$.wellY-.0015;if(i==="fune"){const{w:u,d:f,h:d,floor:m}=jr;o.add(G(new Et(u,m,f),r.fune,$.x,$.wellY-.006+m/2,$.z));const x=(p,g,M,v)=>{const y=G(new Et(p,d,.0025),r.fune,g,$.wellY-.006+d/2,M,{ry:v});y.rotation.x=0,o.add(y)};return x(u,$.x,$.z-f/2,0),x(u,$.x,$.z+f/2,0),x(f,$.x-u/2,$.z,Math.PI/2),x(f,$.x+u/2,$.z,Math.PI/2),o.add(G(new ve(u-.01,f-.01).rotateX(-Math.PI/2),r.paper,$.x,$.wellY-.0015,$.z,{cast:!1})),o}const l=i==="flat"||i==="fiesta"||i==="tacos"||i==="steel",c=i==="glaze"?r.glaze:i==="fiesta"||i==="tacos"?r.fiesta:i==="steel"?r.steel:l?r.flat:r.plate;if(o.add(G(M_(l),c,$.x,a,$.z)),i==="tacos")for(let u=0;u<3;u++){const f=u/3*Math.PI*2+.4;for(let d=0;d<2;d++){const m=G(new vt(.052,.052,.0025,28),r.tortilla,$.x+Math.cos(f)*.04+d*.004,$.wellY+.0015+u*.0026+d*.0025,$.z+Math.sin(f)*.04,{cast:!1});o.add(m)}}if(s==="bhaji"){const u=G(new oe(1,28,10,0,Math.PI*2,0,Math.PI/2),new Ot({map:Lu(),roughness:.3,clearcoat:.8,metalness:0}),$.x-.015,$.wellY,$.z,{cast:!1});u.scale.set(.075,.028,.07),o.add(u)}const h=new oe(.032,14,10);h.scale(1.15,.7,1);for(let u=0;u<e;u++)o.add(G(h,r.pav,$.x+.085,$.wellY+.02+u*.012,$.z-.035+u*.065,{ry:u*.6}));if(n){const u=ci([[0,0],[.026,0],[.032,.022],[.034,.024],[.03,.022],[.024,.004],[0,.004]],24);for(const[f,d]of[[-.05,r.sambar],[.05,r.chutney]])o.add(G(u,r.steel,$.x+.1,$.wellY+.004,$.z+f)),o.add(G(new Ge(.03,20).rotateX(-Math.PI/2),d,$.x+.1,$.wellY+.022,$.z+f,{cast:!1}))}if(i==="thai"){const u=ci([[$.r-.012,$.lip*.85+7e-4],[$.r-.004,$.lip+.0017]],56);o.add(G(u,r.plateRim,$.x,a,$.z,{cast:!1}))}if(t){const u=new Ii,f=Di(12);for(let p=0;p<=40;p++){const g=p/40*Math.PI*2,M=$.wellR*(1.08+(f()-.5)*.05);p===0?u.moveTo(Math.cos(g)*M,Math.sin(g)*M):u.lineTo(Math.cos(g)*M,Math.sin(g)*M)}const d=new or(u,1),m=d.attributes.uv,x=d.attributes.position;for(let p=0;p<m.count;p++)m.setXY(p,x.getX(p)/($.wellR*2.4)+.5,x.getY(p)/($.wellR*2.4)+.5);d.rotateX(-Math.PI/2);for(let p=0;p<x.count;p++)x.setY(p,Math.max(0,Math.hypot(x.getX(p),x.getZ(p))-$.wellR)*.5);d.computeVertexNormals(),o.add(G(d,r.leaf,$.x,$.wellY+.0012,$.z,{ry:.4,cast:!1}))}return o}function T_(){const i=po();return i.woodDark=new bt({map:ra(!0),roughness:.7,metalness:0}),i.woodLight=new bt({map:ra(!1),roughness:.6,metalness:0}),i.woodLight.map.repeat.set(2,1),i.roof=new bt({color:2762276,roughness:.8,metalness:0,side:$t}),i.noren=new bt({map:ah("焼きそば"),roughness:.9,metalness:0,side:$t}),i.noren2=new bt({map:ah("たこ焼"),roughness:.9,metalness:0,side:$t}),i.lanternA=new xe({map:lh("祭"),color:new st(1.5,1.4,1.3)}),i.lanternB=new xe({map:lh("焼"),color:new st(1.5,1.4,1.3)}),i.lanternCap=new bt({color:1380880,roughness:.6,metalness:0}),i.miniLantern=new xe({color:new st(2.2,.8,.35)}),i.backdrop=new xe({map:Iv(),fog:!1,color:12105912}),i.backdrop.map.wrapS=oi,i.backdrop.map.repeat.set(-2,1),i.stone=new bt({color:9210502,map:Eu(),roughness:.32,metalness:0}),i.stone.map.repeat.set(9,9),i.sauceBottle=new Ot({color:3808270,roughness:.25,clearcoat:1,metalness:0}),i.mayoBottle=new Ot({color:15852464,roughness:.3,clearcoat:.8,metalness:0,transmission:0}),i.redCap=new bt({color:13116188,roughness:.4,metalness:0}),i.greenCap=new bt({color:3111466,roughness:.4,metalness:0}),i.aonori=new bt({color:4156190,roughness:.8,metalness:0}),i.ginger=new Ot({color:14165578,roughness:.35,clearcoat:.8,metalness:0}),i.bonitoBox=new bt({color:13214842,roughness:.7,metalness:0}),i.bench=new bt({map:ra(!1),color:11571312,roughness:.7,metalness:0}),i}function E_(i,t){const e=X.y,n=X.x1-X.x0,s=X.z1-X.z0,r=(X.z0+X.z1)/2;i.add(G(new Et(n,.04,s),t.woodLight,0,e-.02,r));for(const o of[X.z0+.02,X.z1-.03])i.add(G(new Et(n-.02,e-.06,.03),t.woodDark,0,(e-.06)/2+.02,o));for(const o of[X.x0+.015,X.x1-.015])i.add(G(new Et(.03,e-.06,s-.04),t.woodDark,o,(e-.06)/2+.02,r));for(const o of[X.x0-.02,X.x1+.02]){const a=new Cn(.24,.03,8,30);a.rotateY(Math.PI/2),i.add(G(a,t.woodDark,o,.25,r));for(let l=0;l<8;l++){const c=new Et(.015,.46,.02);c.rotateX(l/8*Math.PI),i.add(G(c,t.woodDark,o,.25,r,{cast:!1}))}}i.add(G(new Et(n-.08,.025,wn.z1-wn.z0),t.woodLight,0,e+.12,(wn.z0+wn.z1)/2));for(const o of[-n/2+.06,0,n/2-.06])i.add(G(new Et(.03,.12,.03),t.woodDark,o,e+.06,(wn.z0+wn.z1)/2))}function A_(i,t){for(const h of[-1.12,1.12])for(const u of[-.62,.62])i.add(G(new Et(.06,2.45,.06),t.woodDark,h,2.45/2,u));for(const h of[-1,1]){const u=new Et(2.5,.025,.78),f=G(u,t.roof,0,2.45+.16,h*.34,{cast:!1});f.rotation.x=h*.38,i.add(f)}i.add(G(new Et(2.5,.05,.05),t.woodDark,0,2.45+.3,0));const o=new ve(2.1,.42,1,1);i.add(G(o,t.noren,0,2.45-.2,-.62-.02,{ry:Math.PI,cast:!1}));const a=new oe(.16,20,14);a.scale(1,1.3,1);const l=new vt(.1,.1,.05,16);for(const[h,u]of[[-1.12+.05,t.lanternA],[1.12-.05,t.lanternB]])i.add(G(a,u,h,2.45-.42,-.62-.12,{ry:Math.PI,cast:!1})),i.add(G(l,t.lanternCap,h,2.45-.2,-.62-.12,{cast:!1})),i.add(G(l,t.lanternCap,h,2.45-.64,-.62-.12,{cast:!1}));const c=new oe(.035,10,8);c.scale(1,1.3,1);for(let h=0;h<11;h++){const u=h/10,f=-1.12+u*1.12*2;i.add(G(c,t.miniLantern,f,2.45-.06-Math.sin(u*Math.PI)*.1,-.62-.06,{cast:!1}))}}function C_(i,t){i.add(G(new Et(ie.r*2.1,ie.h,ie.r*1.55),t.woodLight,ie.x,X.y+ie.h/2,ie.z));for(const[r,o]of[["oil",t.oil],["sauce",t.sauce]]){const a=Su[r],l=.08;i.add(G(ci([[0,.002],[a.r-.004,.002],[a.r,.01],[a.r,l],[a.r+.004,l+.002],[a.r-.003,l]],32),t.steel,a.x,X.y,a.z));const c=new Ge(a.r-.003,32);c.rotateX(-Math.PI/2),i.add(G(c,o,a.x,X.y+l*.78,a.z,{cast:!1})),i.add(G(new vt(.005,.005,.18,8),t.woodDark,a.x+.02,X.y+l+.05,a.z+.02,{rz:-.4}))}const e=qe.x,n=qe.z,s=ci([[0,0],[.028,0],[.03,.02],[.03,.13],[.018,.16],[.006,.175],[0,.18]],20);i.add(G(s,t.sauceBottle,e-.07,X.y,n-.03)),i.add(G(s,t.mayoBottle,e-.01,X.y,n-.05)),i.add(G(new rr(.008,.03,10),t.redCap,e-.01,X.y+.19,n-.05)),i.add(G(new vt(.028,.028,.09,16),t.aonori,e+.06,X.y+.045,n-.04)),i.add(G(new vt(.03,.03,.015,16),t.greenCap,e+.06,X.y+.097,n-.04)),i.add(G(new vt(.04,.036,.05,18),t.ginger,e+.02,X.y+.025,n+.07)),i.add(G(new Et(.1,.06,.07),t.bonitoBox,e-.07,X.y+.03,n+.07))}function R_(i,t){const e=new ve(16,16);e.rotateX(-Math.PI/2),i.add(G(e,t.stone,0,0,0,{cast:!1})),i.add(G(new Et(1.6,.05,.3),t.bench,0,.44,-1.3));for(const r of[-.7,.7])i.add(G(new Et(.05,.42,.26),t.bench,r,.21,-1.3));const n=[["たこ焼","#d8261c","#ffffff",-1.55,-.9],["お好み焼","#f2c230","#1a1a1a",1.5,-.95],["焼きそば","#1d4fa8","#ffffff",-2.1,-1.6]];for(const[r,o,a,l,c]of n){const h=new bt({map:Rv(r,o,a),roughness:.85,metalness:0,side:$t});i.add(G(new ve(.34,1.3),h,l,1.4,c,{cast:!1,ry:.2})),i.add(G(new vt(.012,.012,2.2,8),t.pole,l-.18,1.1,c))}const s=Di(9);for(const[r,o]of[[-2.8,-3.4],[2.6,-3.8],[-3.8,-6.2],[3.9,-6.6],[.3,-7.8]]){i.add(G(new Et(1.5,.9,.8),t.woodDark,r,.45,o,{cast:!1})),i.add(G(new Et(1.8,.05,1.2),t.roof,r,2,o,{cast:!1}));for(let a=0;a<4;a++)i.add(G(new oe(.06,8,6),t.miniLantern,r-.6+a*.4,1.85-s()*.05,o+.6,{cast:!1}))}}function P_(i){const t=[{lines:["たこ焼き"],x:-2.1,y:2.7,z:-3.2,w:1.3,h:.45,fg:"#ffd23c",glow:"#ff7a1a"},{lines:["お好み焼"],x:2.4,y:3,z:-4,w:1.3,h:.42,fg:"#ff5ab4",glow:"#ff1a8c"},{lines:["大阪"],x:3.5,y:2.3,z:-2.6,w:.8,h:.45,fg:"#63e3ff",glow:"#1ab8ff",ry:-.6},{lines:["ラーメン"],x:-3.5,y:2.1,z:-2.2,w:1,h:.4,fg:"#ffffff",glow:"#ff9a3a",box:!0,bg:"#c21c1c",ry:.6}];for(const e of t){const n=fo(e.lines,{fg:e.fg,glow:e.glow,box:e.box,bg:e.bg||"#0c0e14"}),s=new rt(new ve(e.w,e.h),new xe({map:n,color:new st(1.5,1.5,1.5),fog:!1}));s.position.set(e.x,e.y,e.z),e.ry&&(s.rotation.y=e.ry),i.add(s)}}function L_(i,t){const e=new rt(new vt(8.5,8.5,7,64,1,!0),t.backdrop);e.material.side=Fe,e.position.set(0,3.1,0),e.rotation.y=Math.PI*.5,i.add(e)}function I_(i=T_()){const t=new jt;E_(t,i),A_(t,i),C_(t,i),R_(t,i),P_(t),L_(t,i);const e=mo(t);return e.name="stall:osaka",{group:e,materials:i}}const ir=24,D_=275;function dh(){return{flame:0,T:ir,oil:0,sauce:0,sauceLeft:0,load:0,tosses:0,hei:0,flare:0}}function U_(i,t){const e=ir+i.flame*(D_-ir),n=i.flame>.05?2.6+Math.min(3,i.load*.06):10;i.T+=(e-i.T)*(1-Math.exp(-t/n)),i.flare=Math.max(0,i.flare-t*2.2),i.sauceLeft>0&&(i.sauceLeft=Math.max(0,i.sauceLeft-t*.006*Es(i.T)))}function ph(i,t){i.load+=t,i.T-=(i.T-ir)*Math.min(.45,t*.028)}function N_(i,t){i.T-=(i.T-ir)*Math.min(.5,t*.35)}function Es(i){return Math.max(0,Math.min(1.45,(i-95)/125))}function k_(i,t,e,n){if(!i.container.heated)return;const s=Es(t.T),r=t.T,o=t.oil<.2,a=i.container.rimY;let l=0;for(let c=0;c<i.n;c++){const h=n[i.kind[c]];if(!h||h.garnish)continue;const u=i.x[c*3+1],f=i.container.fryY,d=f!=null?u<f+i.r[c]*.4?1:.2:i.contact[c]?1:u<a?.45:0;let m=s*d/h.cookTime;if(t.sauceLeft>0&&i.coat[c]<1&&u<a){const x=e*(.05+Math.min(1.2,i.speed[c])*.9)*(h.needsSauce?1:Math.min(1,(h.coatTint??.32)*1.4)),p=Math.min(x,1-i.coat[c]);i.coat[c]+=p,l+=p}h.needsSauce&&(m*=Math.min(1,i.coat[c]/.45)),i.d[c]>h.band[1]&&(m*=.12),i.d[c]+=m*e,i.container.fryY==null&&i.contact[c]&&r>180&&i.still[c]>1.5&&(i.c[c]+=e*(r-180)/90*.08*(o?2:1)*(1-.6*Math.min(1,i.coat[c]))),i.d[c]>h.burnAt&&i.contact[c]&&(i.c[c]+=e*(i.d[c]-h.burnAt)*.08*(1-Math.min(1,i.coat[c]*1.5))),i.c[c]>1&&(i.c[c]=1)}l>0&&(t.sauceLeft=Math.max(0,t.sauceLeft-l/360))}function z_(i,t){if(!i.container.heated||i.n===0)return 0;let e=0;for(let s=0;s<i.n;s++)e+=i.contact[s];const n=Es(t.T);return Math.min(1,n*(.25+Math.min(1,e/60)*.75)+(t.sauceLeft>0?n*.25:0))}function mh(i,t,e){const n=i>>16&255,s=i>>8&255,r=i&255,o=t>>16&255,a=t>>8&255,l=t&255;return[n+(o-n)*e,s+(a-s)*e,r+(l-r)*e]}const Br=i=>i<=0?0:i>=1?1:i*i*(3-2*i);function ku(i,t,e,n,s,r){let o;if(i.needsSauce){const l=Br(n*.75+Math.min(1,t)*.25);o=mh(i.raw,i.cooked,l)}else o=mh(i.raw,i.cooked,Br(Math.min(1,t)));const a=i.band?i.band[1]:1;if(t>a&&i.burnAt){const l=Br((t-a)/(i.burnAt-a)),c=[i.over>>16&255,i.over>>8&255,i.over&255];o=[o[0]+(c[0]-o[0])*l,o[1]+(c[1]-o[1])*l,o[2]+(c[2]-o[2])*l]}if(!i.needsSauce&&n>0&&s!=null){const l=[s>>16&255,s>>8&255,s&255],c=i.coatTint??.32,h=Math.min(c,n*c);o=[o[0]+(l[0]-o[0])*h,o[1]+(l[1]-o[1])*h,o[2]+(l[2]-o[2])*h]}if(e>0){const l=[36,21,12],c=Br(e);o=[o[0]+(l[0]-o[0])*c,o[1]+(l[1]-o[1])*c,o[2]+(l[2]-o[2])*c]}return r[0]=o[0],r[1]=o[1],r[2]=o[2],r}function ar(i,t){const[e,n]=t;return i>=e&&i<=n?1:i<e?Math.max(0,1-(e-i)/.55):Math.max(0,1-(i-n)/.7)}function F_(i,t){if(!t.charWant)return 1-Math.min(1,i*1.6);const[e,n]=t.charWant;return i<e?.65+.35*(i/e):i<=n?1:Math.max(0,1-(i-n)*2.2)}function O_(i,t,e){const n=i.length;if(!n)return{score:0,meanD:0,meanC:0,verdict:"missing"};let s=0,r=0,o=0;for(let h=0;h<n;h++)s+=ar(i[h],e.band)*F_(t[h],e),r+=i[h],o+=t[h];const a=r/n,l=o/n;let c="perfect";return(e.charWant?l>e.charWant[1]+.2:l>.35)?c="burnt":a<e.band[0]-.3?c="raw":a<e.band[0]?c="under":a>e.band[1]+.25?c="over":a>e.band[1]?c="bitOver":e.charWant&&l<e.charWant[0]&&(c="pale"),{score:s/n,meanD:a,meanC:l,verdict:c}}function kl(i,t){const[e,n]=t;return i>=e&&i<=n?1:Math.max(0,1-(i<e?e-i:i-n)/.3)}const B_={raw:{prawn:"The prawns are still grey in the middle. Pink, darling. Pink.",noodles:"These noodles are still stiff. They needed the sauce and a bit more time.",wideNoodles:"The noodles are still stiff. Sauce, then heat.",egg:"The egg is still runny. Let it set before you move on.",tofu:"The tofu never saw the heat. It wants a golden crust.",garlic:"Raw garlic. That bite will stay with the customer all night.",rice:"The rice is still cold in the middle. Fry it properly.",porkBelly:"The pork is still pink. Give it the heat.",sobaNoodles:"The noodles never took the sauce. Keep flipping.",mince:"That chicken is still pink. Nobody wants that.",chickenSlice:"That chicken is still pink. Nobody wants that.",basil:"The basil never went in hot. It should be just wilted.",okonomiBase:"Pale and raw in the middle. It needs longer on each side.",takoBall:"Raw batter in the middle. Keep turning them on the heat.",_:"Some of this is still raw."},under:{prawn:"The prawns needed another moment.",noodles:"Noodles a little firm. Almost there.",tofu:"Tofu could have gone a shade more golden.",rice:"The rice wanted a little longer. Crispier, please.",mince:"The chicken needed another moment.",chickenSlice:"The chicken needed another moment.",_:"A touch underdone."},over:{prawn:"Rubbery prawns. They cook in seconds, not minutes.",sprouts:"The sprouts have gone limp. They should snap.",chives:"The chives went dark and sad. In at the very end, quick toss, out.",scallion:"The spring onions went dark. In at the end, one toss.",basil:"The basil has cooked to nothing. Off the heat, just wilt it.",gailan:"The broccoli has gone soft. It should still have a crunch.",cabbage:"The cabbage has gone limp. It should still have a bite.",egg:"The egg is dry.",mince:"Dry chicken. Take it off sooner.",chickenSlice:"Dry chicken. Take it off sooner.",_:"Some of it is overcooked."},burnt:{garlic:"Burnt garlic. I can taste it from over here.",okonomiBase:"Burnt on the bottom. Flip it sooner.",takoBall:"Burnt patches. Turn them sooner.",birdChilli:"Burnt chilli. The whole market is coughing.",noodles:"The noodles stuck and scorched. Keep them moving.",wideNoodles:"Char, yes. Charcoal, no. Toss them sooner.",rice:"The rice caught on the bottom. Keep it moving.",_:"Something caught on the pan. Keep it moving."},pale:{wideNoodles:"No char on the noodles. Spread them out and let the wok kiss them.",_:"It wanted a bit of colour."}};function H_(i,t){const e=B_[i];return e?e[t]||e._:null}const G_={heiGood:"Proper wok hei. Smoky, like Yaowarat at midnight.",heiNone:"Toss it! The flame is what makes it taste of the street."};function V_(i,t,e,n,s=G_){const r=[];let o=0,a=0;const l={};for(const[I,_]of Object.entries(i.weights)){const w=n.pieces[I]||{d:[],c:[]},k=O_(w.d,w.c,t[I]);l[I]=k,a+=k.score*_,o+=_}const c=o?a/o:0,h=Object.entries(l).filter(([,I])=>I.verdict!=="perfect"&&I.verdict!=="bitOver").sort((I,_)=>I[1].score*i.weights[I[0]]-_[1].score*i.weights[_[0]]);for(const[I,_]of h.slice(0,2)){const w=_.verdict==="missing"?`Where did the ${t[I].name.toLowerCase()} go?`:H_(_.verdict,I);w&&r.push(w)}const u=n.chop??0,f=i.steps.some(I=>I.verb==="chop"),m=i.steps.filter(I=>I.liquid).map(I=>I.liquid).map(I=>{const _=n.pours?.[I]??0,w=kl(_,e[I].target);if(w<.6&&I!=="oil"){const k=e[I].name.toLowerCase();_<e[I].target[0]?r.push(`Not enough ${k}. It tastes of nothing.`):r.push(I==="tamarind"?"Swimming in sauce. Pad Thai is fried, not stewed.":`Far too much ${k}. Salty!`)}return w}),x=Object.values(n.skills||{}),p=[...f?[u]:[],...m,...x],g=p.length?p.reduce((I,_)=>I+_,0)/p.length:0;f&&u<.6&&r.push("Your cuts are all different lengths. Follow the lines.");for(const I of n.notes||[])r.unshift(I);const M=n.heiOverride!=null?Math.min(1,n.heiOverride*1.1):Math.min(1,(n.hei||0)/5)*.8+Math.min(1,(n.tosses||0)/8)*.2;M>.85?r.push(s.heiGood):n.heiOverride==null&&(n.tosses||0)<2&&r.push(s.heiNone);const v=n.garnish||{};let y=0,R=0;for(const[I,[_,w]]of Object.entries(i.garnish||{})){const k=v[I]||0;y+=k>=_&&k<=w?1:k>w?.4:k>0?.6:0,R++}for(const I of Object.values(n.finish||{}))y+=I,R++;const E=R?y/R:0;i.garnish?.lime&&!(v.lime>0)?r.push("No lime? The customer needs something to squeeze."):i.garnish?.friedEgg&&!(v.friedEgg>0)?r.push("Where is the fried egg? Kra Pao without khai dao is only half a dish."):E>.9&&r.push("Beautiful plate. I would photograph that.");const T=Math.round(c*55+g*20+M*10+E*15),L=T>=85?3:T>=65?2:T>=40?1:0;return r.length||r.push(L===3?"Perfect. You can have my stall.":"Not bad at all."),{total:T,stars:L,cooking:c,technique:g,hei:M,presentation:E,per:l,notes:r.slice(0,3)}}const zu={cookTime:9,setTime:22,band:[.85,1.35],breakBelow:.55,burnAt:1.75,porkTime:8},W_={cookTime:8,setTime:7,band:[.8,1.3],breakBelow:0,burnAt:1.7,porkTime:8,meltBand:[.55,1.05]},X_={cookTime:7,setTime:10,band:[.85,1.35],breakBelow:0,burnAt:1.75,porkTime:8,faces:1};function q_(i=zu){return{p:i,size:0,d:[0,0],c:[0,0],down:0,set:0,flips:0,broke:0,pork:!1,porkD:0,porkC:0,flipScores:[],folded:!1,foldScore:null}}function Y_(i){return i.folded=!0,i.foldScore=ar(i.set,i.p.meltBand||[.55,1.05]),i.foldScore}function $_(i,t,e){const n=i.p,s=Es(t),r=i.down;if(i.d[r]+=s*e/n.cookTime,i.set=Math.min(1.3,i.set+s*e/n.setTime),i.d[r]>n.burnAt&&(i.c[r]=Math.min(1,i.c[r]+(i.d[r]-n.burnAt)*e*.6)),i.pork){const o=r===1?1/n.porkTime:1/(n.porkTime*6);i.porkD+=s*e*o,i.porkD>2.1&&(i.porkC=Math.min(1,i.porkC+(i.porkD-2.1)*e*.5))}}function j_(i){const t=i.p,e=i.d[i.down],n=e<t.breakBelow,s=n?.15:ar(e,t.band)*(1-Math.min(1,i.c[i.down]*1.5));return n&&i.broke++,i.flipScores.push(s),i.down=1-i.down,i.flips++,{score:s,broke:n,face:e}}function K_(i){const t=i.p.faces===1;return{cakeD:t?[i.d[0],i.d[0],Math.min(1.3,i.set)]:[i.d[0],i.d[1],Math.min(1.3,i.set/1)],cakeC:t?[i.c[0],i.c[0],0]:[i.c[0],i.c[1],0],porkD:i.pork?[i.porkD]:[],porkC:i.pork?[i.porkC]:[],flip:i.flipScores.length?i.flipScores.reduce((e,n)=>e+n,0)/i.flipScores.length:0,broke:i.broke}}const Ms={cookTime:5.5,band:[.8,1.4],burnAt:1.8,turnFloor:.5};function Fu(i,t=1,e=Ms){const n=i.length/3;return{p:e,normals:i,d:new Float32Array(n),c:new Float32Array(n),turns:0,angle:0,rate:t,torn:0,turnScores:[]}}const Z_={cookTime:5,band:[.8,1.45],burnAt:1.05,charRate:.5,turnFloor:.4};function Ou(i,t){const e=i.normals[t*3+1],n=i.normals[t*3+2];return-(e*Math.cos(i.angle)-n*Math.sin(i.angle))}function J_(i,t,e){const n=Es(t)*i.rate,s=i.d.length;for(let r=0;r<s;r++){const o=Ou(i,r);if(o<=.05)continue;const a=Math.min(1,(o-.05)*1.6),l=i.p||Ms;i.d[r]+=n*e*a/l.cookTime,i.d[r]>l.burnAt&&(i.c[r]=Math.min(1,i.c[r]+(i.d[r]-l.burnAt)*e*(l.charRate??.6)))}}function al(i){let t=0,e=0;for(let n=0;n<i.d.length;n++)Ou(i,n)>.6&&(t+=i.d[n],e++);return e?t/e:0}function Q_(i){const t=i.p||Ms,e=al(i),n=e<t.turnFloor;n&&i.turns<2&&i.torn++;const s=n?.3:ar(e,t.band);return i.turnScores.push(s),i.turns++,i.angle+=Math.PI/2,{score:s,early:n}}function gh(i){const t=i.d.length;let e=0,n=0,s=0,r=0,o=0;for(let l=0;l<t;l++){if(Math.abs(i.normals[l*3])>.8)continue;const c=i.d[l];r+=c,o+=i.c[l],i.c[l]>.3?n++:c<Ms.band[0]-.3?s++:c>=Ms.band[0]-.1&&e++}const a=t-[...Array(t).keys()].filter(l=>Math.abs(i.normals[l*3])>.8).length||1;return{mean:r/a,meanC:o/a,golden:e/a,burnt:n/a,raw:s/a,formed:i.turns>=2&&!i.torn,turns:i.turns}}const Bu=new st(16050896),xh=new st(14258750),t1=new st(9062942),e1=new st(2758668),n1=new st(3807756);function i1(){const i=[];for(let t=0;t<Ft.rows;t++)for(let e=0;e<Ft.cols;e++)i.push([Ft.x+(e-(Ft.cols-1)/2)*Ft.pitch,Ft.z+(t-(Ft.rows-1)/2)*Ft.pitch]);return i}class s1{constructor(t){this.r=t;const e=new oe(t,22,16);this.geo=e;const n=e.attributes.position;this.normals=new Float32Array(n.count*3);for(let s=0;s<n.count;s++){const r=n.getX(s),o=n.getY(s),a=n.getZ(s),l=Math.hypot(r,o,a)||1;this.normals.set([r/l,o/l,a/l],s*3)}e.setAttribute("color",new Ue(new Float32Array(n.count*3),3)),n.setUsage(ls),this.mesh=new rt(e,new Ot({vertexColors:!0,roughness:.45,clearcoat:.55,clearcoatRoughness:.3,metalness:0})),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.shown=0,this._c=new st}draw(t,e,n,s){this.shown+=(t.angle-this.shown)*Math.min(1,e*12);const r=this.shown,o=Math.cos(r),a=Math.sin(r),l=this.geo.attributes.position,c=this.geo.attributes.color,h=this.normals,u=this.r;for(let f=0;f<l.count;f++){const d=h[f*3],m=h[f*3+1],x=h[f*3+2],p=m*o-x*a,g=m*a+x*o;let M=p*u;M>n&&(M=n),l.setXYZ(f,d*u,M,g*u);const v=t.d[f],y=t.c[f],R=this._c;v<1?R.copy(Bu).lerp(xh,Math.max(0,v)):R.copy(xh).lerp(t1,Math.min(1,(v-1)/.8)),y>0&&R.lerp(e1,Math.min(1,y)),s>0&&p>-.1&&R.lerp(n1,Math.min(.85,s*(.5+p*.6))),c.setXYZ(f,R.r,R.g,R.b)}l.needsUpdate=!0,c.needsUpdate=!0,this.geo.computeVertexNormals()}}class r1{constructor(){this.kind="takopan",this.view="takopan",this.tossLabel="TURN",this.group=new jt;const{w:t,d:e,topY:n,wellR:s}=Ft,r=new bt({color:1841689,map:Ul(),metalness:.55,roughness:.55,side:$t}),o=new Ii,a=.012;o.moveTo(-t/2+a,-e/2),o.lineTo(t/2-a,-e/2),o.quadraticCurveTo(t/2,-e/2,t/2,-e/2+a),o.lineTo(t/2,e/2-a),o.quadraticCurveTo(t/2,e/2,t/2-a,e/2),o.lineTo(-t/2+a,e/2),o.quadraticCurveTo(-t/2,e/2,-t/2,e/2-a),o.lineTo(-t/2,-e/2+a),o.quadraticCurveTo(-t/2,-e/2,-t/2+a,-e/2),this.centres=i1();for(const[f,d]of this.centres){const m=new so;m.absarc(f-Ft.x,d-Ft.z,s,0,Math.PI*2,!0),o.holes.push(m)}const l=new ho(o,{depth:.012,bevelEnabled:!1,curveSegments:20});l.rotateX(Math.PI/2);const c=new rt(l,r);c.position.set(Ft.x,n,Ft.z),c.castShadow=c.receiveShadow=!0,this.group.add(c);const h=new oe(s,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2);for(const[f,d]of this.centres){const m=new rt(h,r);m.position.set(f,n,d),m.receiveShadow=!0,this.group.add(m)}const u=new rt(new Et(t+.04,n-.03-X.y,e+.04),new bt({color:11054514,metalness:1,roughness:.4}));u.position.set(Ft.x,(n-.03+X.y)/2,Ft.z),this.group.add(u),this.blue=new xe({color:new st(.35,.55,1.6),transparent:!0,opacity:0,depthWrite:!1});for(let f=0;f<5;f++){const d=new rt(new ve(.026,.007),this.blue);d.position.set(Ft.x-t/2+.04+f*((t-.08)/4),(n+X.y)/2-.01,Ft.z+e/2+.0205),this.group.add(d)}this.sheet=new rt(new ve(t-.012,e-.012),new Ot({color:Bu,map:ro(),roughness:.35,clearcoat:.6,transparent:!0,opacity:0,depthWrite:!0,metalness:0})),this.sheet.rotation.x=-Math.PI/2,this.sheet.position.set(Ft.x,n+.0012,Ft.z),this.group.add(this.sheet),this.pools=this.centres.map(([f,d])=>{const m=new rt(new Ge(s*.98,20),this.sheet.material);return m.rotation.x=-Math.PI/2,m.position.set(f,n-s,d),m.visible=!1,this.group.add(m),m}),this.octo=new ai(new vn(.0065,1),new Ot({color:12079194,roughness:.35,clearcoat:.8,metalness:0}),this.centres.length),this.octo.count=0,this.group.add(this.octo),this.bits={},this.views=this.centres.map(()=>new s1(s*.98));for(const f of this.views)f.mesh.visible=!1,this.group.add(f.mesh);this.balls=[],this.fill=0,this.spatula={group:new jt,update(){}},this.light=new Ri(16751178,0,.6,2),this.light.position.set(Ft.x,X.y+.02,Ft.z+e/2+.08),this.group.add(this.light),this.plated=!1,this.finish={sauce:0,mayo:0}}reset(){this.fill=0,this.balls=this.views.map((t,e)=>Fu(t.normals,.9+e*37%11/11*.22)),this.octo.count=0;for(const t of Object.keys(this.bits))this.group.remove(this.bits[t]);this.bits={},this.plated=!1,this.finish={sauce:0,mayo:0};for(const t of this.views)t.mesh.visible=!1;this.mayo?.removeFromParent(),this.mayo=null}sprinkle(t,e,n,s=40){const r=new ai(e,n,s),o=new ne,a=new dn,l=new $e,c=new A,h=new A(1,1,1);for(let u=0;u<s;u++)c.set(Ft.x+(Math.random()-.5)*(Ft.w-.03),Ft.topY+.003,Ft.z+(Math.random()-.5)*(Ft.d-.03)),l.set(Math.random()*.4,Math.random()*6,Math.random()*.4),a.setFromEuler(l),o.compose(c,a,h),r.setMatrixAt(u,o);this.group.add(r),this.bits[t]=r}dropOcto(){const t=new ne;this.centres.forEach(([e,n],s)=>{t.makeTranslation(e+(Math.random()-.5)*.006,Ft.topY-.004,n+(Math.random()-.5)*.006),this.octo.setMatrixAt(s,t)}),this.octo.count=this.centres.length,this.octo.instanceMatrix.needsUpdate=!0}toBoat(){this.plated=!0;const t=w_(8);this.slots=t,this.octo.count=0;for(const e of Object.keys(this.bits))this.bits[e].visible=!1}obstacles(){const t=Ft.wellR*.98;return(this.slots||[]).map(([e,n])=>({x:e,z:n,cy:$.wellY-.006+jr.floor+t,R:t}))}container(){return{type:"teppan",heated:!1,cx:Ft.x,cz:Ft.z,y:Ft.topY,hw:Ft.w/2,hd:Ft.d/2,rimY:Ft.topY+.05}}surfaceRay(){return null}dropPoint(){return new A(Ft.x,Ft.topY+.01,Ft.z)}spawn(){return{x:Ft.x,y:Ft.topY+.05,z:Ft.z}}stirPoint(){return{x:Ft.x,y:Ft.topY,z:Ft.z}}toss(){}update(t,e){this.blue.opacity=Math.min(.9,e.flame*1.2),this.light.intensity=e.flame*.5;const n=this.balls.length?Math.min(...this.balls.map(o=>o.turns)):0,s=this.fill;this.sheet.material.opacity=this.plated?0:s>.75?Math.min(1,(s-.75)*6)*(n>=2?0:n===1?.45:1):0,this.pools.forEach(o=>{o.visible=!this.plated&&s>.02&&s<=.99&&n===0,o.position.y=Ft.topY-Ft.wellR*(1-Math.min(1,s/.75))+8e-4});for(const o of Object.keys(this.bits))this.bits[o].visible=!this.plated&&n===0;const r=Ft.wellR*.98;this.views.forEach((o,a)=>{const l=this.balls[a],c=!!l&&s>.5&&(!this.plated||a<8);if(o.mesh.visible=c,!c)return;if(this.plated){const[u,f]=this.slots[a];o.mesh.position.lerp(new A(u,$.wellY-.006+jr.floor+r,f),Math.min(1,t*6))}else o.mesh.position.set(this.centres[a][0],Ft.topY,this.centres[a][1]);const h=this.plated?r:l.turns===0?.001:l.turns===1?r*.55:r;o.draw(l,t,h,this.finish.sauce)})}drawMayo(t){if(!this.mayo){const n=[];for(let r=0;r<=10;r++)n.push(new A($.x-.08+r*.016,$.wellY-.006+jr.floor+Ft.wellR*2+.002,$.z+(r%2?.04:-.04)));const s=new sr(n);this.mayo=new rt(new li(s,120,.0016,5,!1),new Ot({color:16182468,roughness:.3,clearcoat:.8,metalness:0})),this.group.add(this.mayo)}const e=this.mayo.geometry.index.count;this.mayo.geometry.setDrawRange(0,Math.floor(Math.min(1,t)*e/6)*6)}}const Gs=new A;function gn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Gs.copy(t),Gs[n]=0,Gs.normalize();const c=.5*o/(o+a),h=1-Gs.angleTo(i)/l;return Math.sign(Gs[e])===1?h*c:a/(o+a)+c+c*(1-h)}class Hu extends Et{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new A,l=new A,c=new A(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,m=new A,x=.5/s;for(let p=0,g=0;p<h.length;p+=3,g+=2)switch(a.fromArray(h,p),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[p+0]=c.x*Math.sign(a.x)+l.x*r,h[p+1]=c.y*Math.sign(a.y)+l.y*r,h[p+2]=c.z*Math.sign(a.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/d)){case 0:m.set(1,0,0),f[g+0]=gn(m,l,"z","y",r,n),f[g+1]=1-gn(m,l,"y","z",r,e);break;case 1:m.set(-1,0,0),f[g+0]=1-gn(m,l,"z","y",r,n),f[g+1]=1-gn(m,l,"y","z",r,e);break;case 2:m.set(0,1,0),f[g+0]=1-gn(m,l,"x","z",r,t),f[g+1]=gn(m,l,"z","x",r,n);break;case 3:m.set(0,-1,0),f[g+0]=1-gn(m,l,"x","z",r,t),f[g+1]=1-gn(m,l,"z","x",r,n);break;case 4:m.set(0,0,1),f[g+0]=1-gn(m,l,"x","y",r,t),f[g+1]=1-gn(m,l,"y","x",r,e);break;case 5:m.set(0,0,-1),f[g+0]=gn(m,l,"x","y",r,t),f[g+1]=1-gn(m,l,"y","x",r,e);break}}}function Ui(i){let t=i>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function _e(i,t){const e=i.attributes.position,n=new Float32Array(e.count*3),s=new A,r=[1,1,1];for(let o=0;o<e.count;o++)s.fromBufferAttribute(e,o),r[0]=r[1]=r[2]=1,t(s,r,o),n[o*3]=r[0],n[o*3+1]=r[1],n[o*3+2]=r[2];return i.setAttribute("color",new Ue(n,3)),i}function jn(i,t,e){const n=Ui(e),s=i.attributes.position,r=new Map;for(let o=0;o<s.count;o++){const a=`${s.getX(o).toFixed(5)},${s.getY(o).toFixed(5)},${s.getZ(o).toFixed(5)}`;r.has(a)||r.set(a,[(n()-.5)*t,(n()-.5)*t,(n()-.5)*t]);const l=r.get(a);s.setXYZ(o,s.getX(o)+l[0],s.getY(o)+l[1],s.getZ(o)+l[2])}return i.computeVertexNormals(),i}function Re(i){return i.index?i.toNonIndexed():i}function As(i){const t=i.map(e=>{const n=Re(e);for(const s of Object.keys(n.attributes))s!=="position"&&s!=="normal"&&s!=="color"&&n.deleteAttribute(s);return n.attributes.normal||n.computeVertexNormals(),n});return Tu(t)}function o1(){const n=Math.PI*1.45,s=[],r=[],o=[];for(let m=0;m<=44;m++){const x=m/44,p=-.3+x*n,g=Math.cos(p)*.0115,M=Math.sin(p)*.0115,v=Math.abs(Math.sin(x*Math.PI*6)),y=(.0078*(1-x)+.0026*x)*(.93+.1*v)*(x<.04?.75+x*6:1),R=Math.cos(p),E=Math.sin(p);for(let T=0;T<=12;T++){const L=T/12*Math.PI*2,I=Math.cos(L),_=Math.sin(L)*1.18;s.push(g+R*I*y,M+E*I*y,_*y);const w=Math.max(0,I),k=v<.25?1:0,z=1-w*.22-w*k*.25;r.push(1,z*.92+.08,z*.85+.1)}}for(let m=0;m<44;m++)for(let x=0;x<12;x++){const p=m*13+x,g=p+12+1;o.push(p,g,p+1,g,g+1,p+1)}const a=new Te;a.setAttribute("position",new Kt(s,3)),a.setAttribute("color",new Kt(r,3)),a.setIndex(o),a.computeVertexNormals();const l=-.3+n,c=Math.cos(l)*.0115,h=Math.sin(l)*.0115,u=new A(-Math.sin(l),Math.cos(l),0),f=[Re(a)];for(const m of[-1,1]){const x=new oe(.0052,10,6);x.scale(1.4,.35,.7),x.rotateY(m*.45);const p=new dn().setFromUnitVectors(new A(1,0,0),u);x.applyQuaternion(p),x.translate(c+u.x*.006,h+u.y*.006,m*.0035),_e(x,(g,M)=>{M[0]=1,M[1]=.55,M[2]=.42}),f.push(Re(x))}const d=As(f);return d.center(),d}function a1(i){const t=i*1.55,e=new Hu(t,t,t,2,t*.14);return jn(e,t*.06,3),_e(Re(e),(n,s)=>{const r=Math.max(Math.abs(n.x),Math.abs(n.y),Math.abs(n.z))/(t/2);s[1]=.96+r*.04})}function l1(i,t=1){const e=new vn(i,0);return e.scale(1.1,.62,.85),jn(e,i*.5,t),_e(Re(e),(n,s)=>{const r=.9+n.y/i*.1;s[0]=s[1]=s[2]=r})}function c1(i){const t=new Cn(i*.72,i*.2,5,14,Math.PI*1.6);return t.scale(1,1,.55),t.rotateX(Math.PI/2),_e(Re(t),(e,n)=>{const s=Math.hypot(e.x,e.z)/(i*.72);n[1]=.9+(1-s)*.3,n[2]=.92+(1-s)*.3})}function h1(i,t=5){const e=new vn(i,1);e.scale(1.15,.5,.95),jn(e,i*.55,t);const n=Ui(t*7);return _e(Re(e),(s,r)=>{Math.sin(s.x*400+s.z*260)>.35||n()<.15||(r[1]=.86,r[2]=.45)})}function u1(i){const t=new Cl(new A(-i*2.3,0,0),new A(0,i*.9,i*.4),new A(i*2.3,0,-i*.2)),e=new li(t,10,.0021,6,!1),n=new oe(.0034,8,6);n.scale(1.5,1,1),n.translate(-i*2.4,0,0),_e(e,(r,o)=>{o[0]=1,o[1]=1,o[2]=.97}),_e(n,(r,o)=>{o[0]=.98,o[1]=.9,o[2]=.45});const s=new li(new xu(new A(i*2.3,0,-i*.2),new A(i*3.1,-i*.2,-i*.4)),2,8e-4,4,!1);return _e(s,(r,o)=>{o[0]=.9,o[1]=.85,o[2]=.75}),As([e,n,s])}function f1(i){const t=i*4,e=new vt(.0024,.0024,t,8,3,!1);return e.scale(1,1,.45),e.rotateZ(Math.PI/2),_e(Re(e),(n,s)=>{Math.abs(n.x)/(t/2)>.92&&(s[0]=1.25,s[1]=1.2,s[2]=.9)})}function d1(i,t=9){const e=new vn(i,0);jn(e,i*.7,t);const n=Ui(t);return _e(Re(e),(s,r,o)=>{if((Math.floor(o/3)*2654435761>>>0)%3===0)r[0]=.72,r[1]=.45,r[2]=.32;else{const l=1.05+n()*.1;r[0]=l,r[1]=l,r[2]=l*.95}})}function p1(i){const t=new Ge(i,5);return jn(t,i*.6,13),t.rotateX(-Math.PI/2),_e(Re(t),(e,n)=>{n[1]=1+e.x/i*.2})}function m1(i){const t=i,e=Math.PI/3,n=new oe(t,14,10,-e/2,e,.12,Math.PI-.24);_e(n,(o,a)=>{a[0]=.32,a[1]=.62,a[2]=.12});const s=[];for(const o of[-1,1]){const a=o*e/2,l=[],c=[],h=14;for(let f=0;f<h;f++){const d=.12+f/h*(Math.PI-.24),m=.12+(f+1)/h*(Math.PI-.24),x=[Math.sin(d)*t*.97,Math.cos(d)*t*.97],p=[Math.sin(m)*t*.97,Math.cos(m)*t*.97],g=T=>[T[0]*Math.cos(a),T[1],-T[0]*Math.sin(a)],M=g(x),v=g(p),y=[0,x[1]*.9,0],R=[0,p[1]*.9,0],E=o>0?[y,M,v,y,v,R]:[y,v,M,y,R,v];for(const T of E){l.push(...T);const L=Math.hypot(T[0],T[2])/t,I=f%3===0?.9:1;c.push((.72+(L>.85?.2:0))*I,.9*I,(.3+(L>.85?.45:0))*I)}}const u=new Te;u.setAttribute("position",new Kt(l,3)),u.setAttribute("color",new Kt(c,3)),u.computeVertexNormals(),s.push(u)}const r=As([n,...s]);return r.scale(1,1.45,1),r.rotateZ(Math.PI/2),r}function g1(i,t=21){const e=Ui(t),n=[];for(let r=0;r<7;r++){const o=new oe(.00125,7,5);o.scale(2.8,1,1.05),o.rotateY(e()*Math.PI),o.rotateZ((e()-.5)*.8),o.translate((e()-.5)*i*1.2,(e()-.5)*i*.6,(e()-.5)*i*1.2),n.push(o)}const s=As(n);return _e(s,(r,o)=>{const a=.94+Math.max(0,r.y/i)*.08;o[0]=o[1]=o[2]=a})}function x1(i,t=33){const e=new vn(i*.9,1);e.scale(1.1,.7,.95),jn(e,i*.65,t);const n=Ui(t);return _e(Re(e),(s,r)=>{const o=.86+n()*.18;r[0]=o,r[1]=o*.98,r[2]=o*.95})}function v1(i){const t=new Ii,e=i*2.2,n=i*.85;t.moveTo(0,-e/2),t.quadraticCurveTo(n,-e*.15,0,e/2),t.quadraticCurveTo(-n,-e*.15,0,-e/2);const s=new or(t,8),r=s.attributes.position;for(let o=0;o<r.count;o++){const a=r.getX(o),l=r.getY(o);r.setZ(o,a*a/(n*1.6)*1.2-Math.abs(l)*.08)}return s.rotateX(-Math.PI/2),s.computeVertexNormals(),_e(Re(s),(o,a)=>{const l=Math.abs(o.x)<n*.08?1.25:1;a[0]=l,a[1]=l,a[2]=l*.9})}function _1(i,t=41){const e=new Hu(i*1.9,i*.45,i*1.2,2,i*.18);return jn(e,i*.18,t),_e(Re(e),(n,s)=>{const r=.93+(n.y>0?.07:0);s[0]=s[1]=s[2]=r})}function y1(i){const t=new vt(i*.28,i*.32,i*2.4,9);t.rotateZ(Math.PI/2),_e(t,(n,s)=>{s[0]=1.1,s[1]=1.12,s[2]=.95});const e=new oe(i*.9,10,6);return e.scale(1.2,.18,.9),e.translate(i*.5,i*.25,i*.35),_e(e,(n,s)=>{s[0]=.62,s[1]=.8,s[2]=.62}),As([t,e])}function M1(i){const t=new vt(i,i,i*.3,20,1);return _e(Re(t),(e,n)=>{const s=Math.hypot(e.x,e.z)/i;s>.9||Math.abs(e.y)<i*.14&&s>.85?(n[0]=.22,n[1]=.45,n[2]=.16):s>.35&&s<.6?(n[0]=.86,n[1]=.93,n[2]=.7):(n[0]=.78,n[1]=.9,n[2]=.62)})}function b1(i,t=57){const e=Ui(t),n=new Ii;for(let a=0;a<=28;a++){const l=a/28*Math.PI*2,c=i*(.88+e()*.2);a===0?n.moveTo(Math.cos(l)*c,Math.sin(l)*c):n.lineTo(Math.cos(l)*c,Math.sin(l)*c)}const s=new ho(n,{depth:.003,bevelEnabled:!0,bevelThickness:.0015,bevelSize:.002,bevelSegments:2,curveSegments:6});s.rotateX(-Math.PI/2),_e(s,(a,l)=>{const c=Math.hypot(a.x,a.z)/i;if(c>.78){const h=Math.min(1,(c-.78)/.2);l[0]=1-h*.3,l[1]=1-h*.55,l[2]=1-h*.8}});const r=new oe(i*.32,16,10,0,Math.PI*2,0,Math.PI/2);r.scale(1,.6,1),r.translate(i*.1,.0045,-i*.05),_e(r,(a,l)=>{l[0]=1,l[1]=.62,l[2]=.08});const o=As([s,r]);return o.translate(0,-.002,0),o}function w1(i){const t=new ve(i*2.6,i*1.1,10,3),e=t.attributes.position;for(let n=0;n<e.count;n++)e.setZ(n,Math.sin(e.getX(n)/i*2.2)*i*.18);return t.rotateX(-Math.PI/2),t.computeVertexNormals(),_e(Re(t),(n,s)=>{Math.sin(n.z/i*7)>.2&&(s[0]=1.12,s[1]=1.14,s[2]=1.12)})}function S1(i){const t=new oe(i*1.4,10,6,0,1.3,.6,1.1);return t.scale(1,.35,1),t.center(),_e(Re(t),(e,n)=>{const s=Math.min(1,Math.hypot(e.x,e.z)/(i*1.2));n[0]=1.05-s*.2,n[1]=1.05-s*.05,n[2]=1.05-s*.3})}function T1(i){const t=new Et(i*4.2,i*.45,i*.45);return _e(Re(t),(e,n)=>{const s=.92+(e.y>0?.1:0);n[0]=n[1]=n[2]=s})}function E1(i){const t=new ve(i*1.8,i*1.3,6,4),e=t.attributes.position;for(let n=0;n<e.count;n++){const s=e.getX(n);e.setZ(n,s*s/(i*1.1))}return t.rotateX(-Math.PI/2),t.computeVertexNormals(),_e(Re(t),(n,s)=>{const r=.85+Math.abs(n.x)/i*.2;s[0]=r*1.05,s[1]=r,s[2]=r*.95})}function A1(i,t=111){const e=new vn(i,1);return jn(e,i*.35,t),_e(Re(e),(n,s)=>{n.y>-i*.1?(s[0]=.75,s[1]=.28,s[2]=.36):(s[0]=.98,s[1]=.93,s[2]=.9)})}function C1(i){const t=new vt(i,i,.003,24);return _e(Re(t),(e,n)=>{n[0]=1,n[1]=.95,n[2]=.8})}function R1(i){const t=new vt(i*.5,i*.45,i*3,12);return t.rotateZ(Math.PI/2),_e(Re(t),(e,n)=>{n[0]=1,n[1]=.85,n[2]=.3})}function P1(i,t=163){const e=new vn(i,2);e.scale(1.05,.85,1),jn(e,i*.22,t);const n=Ui(t);return _e(Re(e),(s,r)=>{const o=.9+n()*.16;r[0]=o,r[1]=o*.97,r[2]=o*.9})}function L1(i){return _e(Re(new vn(i,1)),(t,e)=>{e[0]=e[1]=e[2]=.95+t.y/i*.08})}function Gu(){const i=new oe(.022,20,14),t=i.attributes.position;for(let e=0;e<t.count;e++){const n=t.getY(e),s=n>0?1-n/.022*.12:1;t.setXYZ(e,t.getX(e)*s,n*1.28,t.getZ(e)*s)}return i.computeVertexNormals(),i}const Vu={prawn:()=>o1(),cube:i=>a1(i),bit:i=>l1(i),ring:i=>c1(i),curd:i=>h1(i),sprout:i=>u1(i),segment:i=>f1(i),peanut:i=>d1(i),flake:i=>p1(i),wedge:i=>m1(i),clump:i=>g1(i),mince:i=>x1(i),leaf:i=>v1(i),slice:i=>_1(i),gailan:i=>y1(i),disc:i=>M1(i),friedEgg:i=>b1(i),belly:i=>w1(i),cabbage:i=>S1(i),baton:i=>T1(i),bonito:i=>E1(i),octo:i=>A1(i),tortillaDisc:i=>C1(i),cob:i=>R1(i),vada:i=>P1(i),pea:i=>L1(i)};Object.keys(Vu).concat(["strand","none"]);const la=new Map;function Cs(i){const t=i.shape+":"+i.r;if(!la.has(t)){const e=Vu[i.shape];if(!e)throw new Error(`shapes: no builder for '${i.shape}'`);const n=e(i.r);n.computeBoundingSphere(),la.set(t,n)}return la.get(t)}const Wu=new Float32Array(256);for(let i=0;i<256;i++){const t=i/255;Wu[i]=t<=.04045?t/12.92:((t+.055)/1.055)**2.4}const ca=i=>Wu[Math.max(0,Math.min(255,i|0))];function $n(i){return new Ot({vertexColors:!0,roughness:i.rough??.5,metalness:0,clearcoat:i.gloss??.3,clearcoatRoughness:.22,sheen:i.sheen??0,sheenRoughness:.5,sheenColor:new st(14221232),side:["flake","wedge","leaf","belly","cabbage","bonito"].includes(i.shape)?$t:qn})}class Xu{constructor(t,e,n,s){this.points=e,this.sub=2,this.per=(e-1)*this.sub+1,this.width=n,this.maxStrands=t;const r=t*this.per*2,o=new Te;this.pos=new Float32Array(r*3),this.nrm=new Float32Array(r*3),this.col=new Float32Array(r*3),o.setAttribute("position",new Ue(this.pos,3).setUsage(ls)),o.setAttribute("normal",new Ue(this.nrm,3).setUsage(ls)),o.setAttribute("color",new Ue(this.col,3).setUsage(ls));const a=[];for(let l=0;l<t;l++)for(let c=0;c<this.per-1;c++){const h=(l*this.per+c)*2;a.push(h,h+1,h+2,h+1,h+3,h+2)}o.setIndex(a),o.setDrawRange(0,0),this.geo=o,this.mesh=new rt(o,s),this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this._p=new Float32Array(this.per*3),this._c=new Float32Array(this.per*3)}update(t,e,n){let s=0;for(const r of e){if(s>=this.maxStrands)break;this._build(t,r.first,r.n,n,s++)}this.geo.setDrawRange(0,s*(this.per-1)*6);for(const r of["position","normal","color"])this.geo.attributes[r].needsUpdate=!0}_build(t,e,n,s,r){const o=this._p,a=this._c,l=this.sub,c=t.x;let h=0;for(let p=0;p<n-1;p++){const g=Math.max(0,p-1),M=p,v=p+1,y=Math.min(n-1,p+2);for(let R=0;R<l;R++){const E=R/l,T=E*E,L=T*E;for(let I=0;I<3;I++){const _=c[(e+g)*3+I],w=c[(e+M)*3+I],k=c[(e+v)*3+I],z=c[(e+y)*3+I];o[h*3+I]=.5*(2*w+(-_+k)*E+(2*_-5*w+4*k-z)*T+(-_+3*w-3*k+z)*L),a[h*3+I]=s[(e+M)*3+I]*(1-E)+s[(e+v)*3+I]*E}h++}}for(let p=0;p<3;p++)o[h*3+p]=c[(e+n-1)*3+p],a[h*3+p]=s[(e+n-1)*3+p];h++;const u=this.width/2;let f=1,d=0,m=0;const x=r*this.per*2;for(let p=0;p<h;p++){const g=Math.max(0,p-1),M=Math.min(h-1,p+1);let v=o[M*3]-o[g*3],y=o[M*3+1]-o[g*3+1],R=o[M*3+2]-o[g*3+2];const E=Math.hypot(v,y,R)||1;v/=E,y/=E,R/=E;let T=-R,L=v,I=0;const _=Math.hypot(T,L);_>.2&&(T/=_,L/=_,T*f+L*m<0&&(T=-T,L=-L),f=T,d=I,m=L);const w=d*R-m*y,k=m*v-f*R,z=f*y-d*v;for(let V=0;V<2;V++){const Y=(x+p*2+V)*3,B=V?1:-1;this.pos[Y]=o[p*3]+f*u*B,this.pos[Y+1]=o[p*3+1]+d*u*B,this.pos[Y+2]=o[p*3+2]+m*u*B,this.nrm[Y]=w,this.nrm[Y+1]=k,this.nrm[Y+2]=z;const tt=.94;this.col[Y]=a[p*3]*tt,this.col[Y+1]=a[p*3+1]*tt,this.col[Y+2]=a[p*3+2]*tt}}}}class I1{constructor(t,e,n){this.group=new jt,this.ings=t,this.sauceColour=n,this.meshes=[],this.noodles=null,t.forEach((s,r)=>{if(s.shape==="strand"){const a=$n(s);a.side=$t,this.noodles=new Xu(s.strands+2,s.points,s.width,a),this.noodleKind=r,this.group.add(this.noodles.mesh),this.meshes.push(null);return}const o=new ai(Cs(s),$n(s),e[r]);o.count=0,o.castShadow=!0,o.receiveShadow=!0,o.frustumCulled=!1,o.instanceMatrix.setUsage(ls),o.name="food:"+s.id,o.setColorAt(0,new st(1,1,1)),this.group.add(o),this.meshes.push(o)}),this._m=new ne,this._q=new dn,this._p=new A,this._s=new A,this._c=new st,this._rgb=[0,0,0],this.linCol=new Float32Array(4096*3),this._w=new $e,this._dq=new dn,this.time=0}update(t,e=1/60){this.time+=e;const n=new Int32Array(this.meshes.length),s=[];let r=-1;for(let o=0;o<t.n;o++){const a=t.kind[o],l=this.ings[a];ku(l,t.d[o],t.c[o],t.coat[o],this.sauceColour,this._rgb);const c=ca(this._rgb[0]),h=ca(this._rgb[1]),u=ca(this._rgb[2]);if(t.strand[o]>=0){this.linCol[o*3]=c,this.linCol[o*3+1]=h,this.linCol[o*3+2]=u,t.strand[o]!==r&&(r=t.strand[o],s.push({first:o,n:0})),s[s.length-1].n++;continue}const f=this.meshes[a];if(!f)continue;const d=n[a]++;if(d>=f.instanceMatrix.count)continue;if(this._p.set(t.x[o*3],t.x[o*3+1]-(l.colR?l.colR*.5:0),t.x[o*3+2]),this._q.set(t.q[o*4],t.q[o*4+1],t.q[o*4+2],t.q[o*4+3]),l.dances){const p=this.time*(4+t.seed[o]*3)+t.seed[o]*20;this._w.set(Math.sin(p)*.5,Math.sin(p*.7)*.4,Math.cos(p*1.3)*.5),this._dq.setFromEuler(this._w),this._q.multiply(this._dq)}const m=l.shrink?1-(1-l.shrink)*Math.min(1,t.d[o]):1,x=(.85+t.seed[o]*.3)*m*t.size[o];this._s.set(x,x,x),this._m.compose(this._p,this._q,this._s),f.setMatrixAt(d,this._m),this._c.setRGB(c,h,u),f.setColorAt(d,this._c)}this.meshes.forEach((o,a)=>{o&&(o.count=Math.min(n[a],o.instanceMatrix.count),o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0))}),this.noodles&&this.noodles.update(t,s,this.linCol)}}const qu=new st(15919304),vh=new st(13666876),D1=new st(5911064),U1=new st(2364684),rs=.02;function N1(i,t,e){return i<1?e.copy(qu).lerp(vh,Math.max(0,i)):e.copy(vh).lerp(D1,Math.min(1,(i-1)/.9)),t>0&&e.lerp(U1,Math.min(1,t)),e}function _h(i){const t=[];for(let o=0;o<=10;o++){const a=o/10,l=a<.2?1-(.2-a)*.6:1-(a-.2)/.8,c=a<.2?Math.sin(a/.2*Math.PI/2)*rs/2:rs/2+(1-l)*.004;t.push(new K(Math.max(0,l),i?c:-c))}i||t.reverse();const n=new ui(t,48),s=n.attributes.position,r=n.attributes.uv;for(let o=0;o<s.count;o++){const a=s.getX(o),l=s.getZ(o),c=s.getY(o),h=(Math.sin(a*31+l*17)+Math.sin(a*13-l*29)+Math.sin((a+l)*47))*.0012;s.setY(o,c+(i?h:-h*.4)),r.setXY(o,a*.5+.5,l*.5+.5)}return n.computeVertexNormals(),n}class k1{constructor(){this.group=new jt,this.body=new jt,this.group.add(this.body);const t=Ru();this.mat=[0,1].map(()=>new Ot({map:t,color:qu.clone(),roughness:.55,clearcoat:.35,clearcoatRoughness:.4,metalness:0,side:$t})),this.bottom=new rt(_h(!1),this.mat[0]),this.top=new rt(_h(!0),this.mat[1]);for(const n of[this.bottom,this.top])n.castShadow=!0,n.receiveShadow=!0,this.body.add(n);const e={shape:"belly",r:.013};this.porkMat=$n({gloss:.6,rough:.4}),this.pork=new jt;for(let n=0;n<4;n++){const s=new rt(Cs(e),this.porkMat);s.scale.set(1.6,1,1.4),s.position.set(-.04+n*.027,rs/2+.003,n%2?.012:-.01),s.rotation.y=.15*(n%2?1:-1),s.castShadow=!0,this.pork.add(s)}this.pork.visible=!1,this.body.add(this.pork),this.sauce=new rt(new Ge(1,40),new Ot({color:3807756,alphaMap:nr(),roughness:.12,clearcoat:1,clearcoatRoughness:.05,transparent:!0,opacity:0,depthWrite:!1,metalness:0})),this.sauce.rotation.x=-Math.PI/2,this.group.add(this.sauce),this.mayo=this._mayo(),this.group.add(this.mayo.mesh),this.flipT=1,this.flipFrom=0,this.flips=0,this.moveT=1,this.radius=0,this._c=new st,this._rgb=[0,0,0],this.at(Rt.x,Rt.topY,Rt.z),this.group.visible=!1}_mayo(){const t=[];for(let h=0;h<=9;h++){const u=-.8+h/9*1.6;t.push([u,h%2?.8:-.8])}const n=[];for(let h=0;h<t.length-1;h++)for(let u=0;u<8;u++){const f=u/8;n.push([t[h][0]+(t[h+1][0]-t[h][0])*f,t[h][1]+(t[h+1][1]-t[h][1])*f])}const s=n.length,r=.035,o=new Float32Array(s*2*3);for(let h=0;h<s;h++){const u=n[Math.max(0,h-1)],f=n[Math.min(s-1,h+1)];let d=f[0]-u[0],m=f[1]-u[1];const x=Math.hypot(d,m)||1;d/=x,m/=x;const p=Math.hypot(n[h][0],n[h][1]),g=p>.9?.9/p:1,M=n[h][0]*g,v=n[h][1]*g;o.set([M-m*r,0,v+d*r,M+m*r,0,v-d*r],h*6)}const a=[];for(let h=0;h<s-1;h++){const u=h*2;a.push(u,u+2,u+1,u+1,u+2,u+3)}const l=new Te;return l.setAttribute("position",new Ue(o,3)),l.setIndex(a),l.computeVertexNormals(),l.setDrawRange(0,0),{mesh:new rt(l,new Ot({color:16182468,roughness:.3,clearcoat:.8,metalness:0,side:$t})),segs:s-1}}at(t,e,n){this.group.position.set(t,e,n)}flip(){this.flipT=0,this.flipFrom=this.flips*Math.PI,this.flips++}toPlate(t=0){this.moveT=0,this.moveFrom=this.group.position.clone(),this.moveOff=t}topY(){return this.group.position.y+rs/2+.003}update(t,e,n={sauce:0,mayo:0}){this.group.visible=e.size>.01;const s=.05+Math.min(1.1,e.size)*.045;this.radius=s,this.body.scale.set(s,1,s),this.pork.scale.set(1/s,1,1/s),this.pork.visible=e.pork;for(const o of[0,1])N1(e.d[o],e.c[o],this.mat[o].color);if(ku({raw:15910076,cooked:14723184,over:9062940,band:[.9,1.45],burnAt:2.1},e.porkD,e.porkC,0,null,this._rgb),this.porkMat.color.setRGB(this._rgb[0]/255,this._rgb[1]/255,this._rgb[2]/255,fn),this.flipT<1){this.flipT=Math.min(1,this.flipT+t/.55);const o=this.flipT;this.body.position.y=Math.sin(o*Math.PI)*.1,this.body.rotation.x=this.flipFrom+o*Math.PI;const a=o>.85?1-Math.sin((o-.85)/.15*Math.PI)*.25:1;this.body.scale.y=a}else this.body.position.y=0,this.body.rotation.x=this.flips*Math.PI,this.body.scale.y=1;if(this.moveT<1){this.moveT=Math.min(1,this.moveT+t/.7);const o=this.moveT,a=o*o*(3-2*o);this.group.position.set(this.moveFrom.x+($.x+(this.moveOff||0)-this.moveFrom.x)*a,this.moveFrom.y+($.wellY+rs/2+.001-this.moveFrom.y)*a+Math.sin(o*Math.PI)*.08,this.moveFrom.z+($.z-this.moveFrom.z)*a)}const r=rs/2+.0045;this.sauce.position.y=r,this.sauce.scale.setScalar(s*(.5+Math.min(1,n.sauce)*.45)),this.sauce.material.opacity=Math.min(.95,n.sauce*1.6),this.mayo.mesh.position.y=r+.0015,this.mayo.mesh.scale.set(s,1,s),this.mayo.mesh.geometry.setDrawRange(0,Math.floor(Math.min(1,n.mayo)*this.mayo.segs)*6)}}function z1(i=1,t=0){const e=Math.max(.8,1.7-.15*(i-1)-.12*t),n=Math.max(.13,.24-.025*(i-1)-.02*t);return{period:e,width:n}}function F1(i,t){const{period:e,width:n}=z1(i,t);return{t:0,period:e,width:n,zone:[.5-n/2,.5+n/2]}}function Yu(i){return(1-Math.cos(2*Math.PI*i.t/i.period))/2}function O1(i,[t,e]){if(i>=t&&i<=e)return 1;const n=i<t?t-i:i-e;return Math.max(0,1-n/.3)}function B1(i,t=.5){const e=Yu(i),n=O1(e,i.zone),s=.25+t*.5;return i.zone=[s-i.width/2,s+i.width/2],{q:n,p:e}}function yh(i){const t=(i.zone[0]+i.zone[1])/2;i.t=Math.acos(1-2*t)/(2*Math.PI)*i.period}function $u(i,t){return i*(1+t*.9)}const H1=.3;function G1(){const i=new jt,t=new bt({color:11843772,metalness:1,roughness:.35,side:$t}),e=.1,n=[[0,.002],[e*.55,.002],[e*.85,.02],[e,.06],[e+.003,.062],[e-.001,.059],[e*.83,.021],[e*.52,.005],[0,.005]];i.add(new rt(new ui(n.map(([r,o])=>new K(r,o)),40),t));const s=new rt(new Ge(e*.86,40),new Ot({map:Ru(),color:16050896,roughness:.4,clearcoat:.6,metalness:0}));s.rotation.x=-Math.PI/2,s.position.y=.035,i.add(s),i.userData.batter=s,i.position.set(ie.x,ie.topY,ie.z);for(const r of i.children)r.castShadow=!0,r.receiveShadow=!0;return i}const V1={_osakaStart(i){this.cake=i.cake?q_({tortilla:W_,dosa:X_}[i.cake]||zu):null,this.flat={tortilla:this.tortilla,dosa:this.dosa}[i.cake]||this.pancake;for(const t of[this.pancake,this.tortilla,this.dosa])t&&(t.group.visible=!1,t.flips=0,t.flipT=1,t.moveT=1,t.foldT=1,t.folded=!1);i.cake==="dosa"&&this.dosa.at(qt.x,qt.topY+.001,qt.z),i.cake==="tortilla"&&(this.tortilla.at(0,X.y+.045+.00175,0),this.tortilla.sauce.material.color.set(i.finishColours?.sauce??10101264)),this.finish={sauce:0,mayo:0},this.report.skills={},this.report.finish={},this.report.notes=[],this.pancakePlated=!1,this.pancake&&this.pancake.at(0,X.y+.045,0),this.cooker.reset&&this.cooker.reset(),this.mixBowl&&(this.mixBowl.visible=!1)},_holdVerb(i){return i==="pancake"||i==="fill"||i==="drizzle"},_enter_mix(i){this.cam.go("board"),this.mixBowl||(this.mixBowl=G1(),this.scene.add(this.mixBowl)),this.mixBowl.visible=!0,this.board.bunch.visible=!1,this.st.strokes=0,this.st.anchor=null;const[t,e]=i.strokes;this.hud.showMeter("Batter",[1.3*t/e,1.3]),this.hud.setActions([{id:"next",label:"DONE",disabled:!0}])},_mixMove(){const i=this.pointer.hist,t=i[i.length-1];if(!t)return;if(!this.st.anchor){this.st.anchor=t,this.st.dir=0;return}const e=t.x-this.st.anchor.x,n=t.y-this.st.anchor.y,s=Math.abs(e)>=Math.abs(n)?e:n,r=Math.sign(s);if(Math.abs(s)>.07&&r!==this.st.dir){this.st.strokes++,this.st.dir=r,this.audio.play("sprinkle",{gain:1.2,rate:.5});const o=this.mixBowl.userData.batter;o.rotation.z+=.7,o.position.y=.035+(this.st.strokes%2?.003:0)}r===this.st.dir&&Math.abs(s)>.07&&(this.st.anchor=t)},_mixDone(i){const[t,e]=i.strokes,n=this.st.strokes,s=n<t?Math.max(0,n/t):n<=e?1:Math.max(.2,1-(n-e)/e);this.report.skills.mix=s,n>e*1.3?this.report.notes.push("You overmixed the batter. It went heavy and tough."):n<t*.6&&this.report.notes.push("The batter was barely mixed. Lumps of flour in every bite.")},_enter_pancake(i){this._enterHold(i,"HOLD<br>TO POUR",15919304)},_enter_fill(i){this._enterHold(i,"HOLD<br>TO POUR",15919304)},_enter_drizzle(i){this.cam.go("plate"),this._enterHold(i,i.what==="mayo"?"HOLD TO<br>DRIZZLE":"HOLD<br>TO BRUSH",null)},_enterHold(i,t,e){i.verb!=="drizzle"&&this.cam.go(this.cooker.view),i.verb!=="drizzle"&&this.hud.showFlame(!0),this.st.amount=0,this.st.poured=!1,this.hud.setActions([{id:"pour",label:t,cls:"pour",hold:!0}]),this.hud.showPour(i.target),e!=null&&(this.ladle.setLiquid(e),this.ladle.group.visible=!0),i.verb==="pancake"&&this.mixBowl&&(this.mixBowl.visible=!1)},_holdOsaka(i){const t=this.step;this.st.poured||(this.st.pouring=i,i&&this.audio.play(t.verb==="drizzle"?"sprinkle":"plop",{gain:.6}),!i&&this.st.amount>.03&&this._finishHold())},_finishHold(){const i=this.step;this.st.poured=!0,this.st.pouring=!1;const t=this.st.amount,e=kl(t,i.target);this.hud.toast(e>.9?"Spot on!":t<i.target[0]?"A bit light":e>.5?"A bit much":"Way too much",e<.6),this.hud.enable("pour",!1),i.verb==="pancake"&&(this.report.skills.size=e),i.verb==="fill"&&(this.report.skills.fill=e),i.verb==="drizzle"&&(this.report.finish[i.what]=e),this.st.doneT=.6},_holdTick(i){const t=this.step,e=this.st;e.poured||(e.pouring&&(e.held=(e.held||0)+i,e.amount=Math.min(1.2,e.amount+$u(H1,e.held)*i),e.amount>=1.2&&this._finishHold()),this.hud.setPour(e.amount),t.verb==="pancake"&&(this.cake.size=e.amount,this.flat===this.dosa&&this.cake.spread==null&&(this.cake.spread=.2+e.amount*.2)),t.verb==="fill"&&(this.cooker.fill=e.amount),t.verb==="drizzle"&&(this.finish[t.what]=e.amount))},_enter_top(i){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.st.left=[...i.items],this.bowls.highlight(this.st.left)},_enter_drop(i){this._enter_top(i)},_tapTopping(){const i=this.st.left[0];if(!i)return;const t=this._press();t<.45?this.hud.toast("Spilled some!",!0):t>.9&&this.hud.toast("Nice!"),this.st.left.shift(),this.bowls.highlight(this.st.left);const e=nn[i];this.bowls.tip(i,this.cooker.dropPoint(),()=>{if(this.step.verb==="top")i==="tortilla"?this.cake.size=.65:i==="cheese"?this.cake.cheese=1:i==="corn"?this.cooker.placeCobs():i==="potatoMasala"?this.cake.filling=1:this.cake.pork=!0;else if(i==="octopus")this.cooker.dropOcto();else{const n=$n(e);n.color.set(e.raw),this.cooker.sprinkle(i,Cs(e),n,i==="tenkasu"?50:30)}this.audio.play("plop"),this.stove.T>150&&this.audio.play("hiss",{gain:.3}),this.st.left.length||(this.st.doneT=.7)})},_enter_flip(){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.hud.showMeter("Underside",[.9,1.3]),this.hud.setActions([{id:"flip",label:"FLIP",cls:"round"}]),this.st.flipped=!1},_doFlip(){if(this.st.flipped)return;this.st.flipped=!0;const i=j_(this.cake);this.flat.flip(),this.audio.play("whoosh"),this.audio.play("plop",{gain:1.2}),this.stove.T>150&&this.audio.play("hiss",{gain:.6}),i.broke?(this.hud.toast("It broke!",!0),this.report.notes.some(t=>t.startsWith("It broke"))||this.report.notes.push("It broke on the flip. Wait for golden underneath before you turn it.")):this.hud.toast(i.score>.85?"Perfect flip!":i.face>this.cake.p.band[1]?"A bit dark":"A bit pale",i.score<.6),this.hud.enable("flip",!1),this.st.doneT=.8},_enter_turn(){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.hud.showMeter("Undersides",[.9,1.3]),this.hud.setActions([{id:"turn",label:"TURN",cls:"round"},{id:"next",label:"DONE",disabled:!0}]),this.st.lastTurn=-9},_doTurn(){if(this.time-this.st.lastTurn<.35)return;this.st.lastTurn=this.time;let i=0;for(const e of this.cooker.balls)Q_(e).early&&i++;this.audio.play("tick",{gain:1.4}),this.audio.play("crack",{gain:.3,rate:1.4});const t=Math.min(...this.cooker.balls.map(e=>e.turns));this.hud.toast(i>6?"Too soon!":t===1?"Quarter turn":t===2?"Round now!":"Turn"),this.hud.enable("next",t>=2),this.hud.setHint(t<2?"Turn again when the bar is green":"Keep turning until they are golden all round. Then DONE")},_turnDone(){const i=this.cooker.balls.flatMap(e=>e.turnScores.slice(0,4));this.report.skills.turn=i.length?i.reduce((e,n)=>e+n,0)/i.length:0,this.cooker.balls.filter(e=>e.torn).length>3&&this.report.notes.push("Turned too soon: they tore and never rounded. Wait for a golden shell.")},_plateOsaka(){if(this.cake){this.flat.toPlate((1-(this.st.plateQ??1))*.04),this.pancakePlated=!0;const i=ol();return i.puck={x:$.x,z:$.z,r:this.flat.radius*.95,top:this.flat===this.pancake?$.wellY+.024:$.wellY+.01},this.sim.container=i,!0}if(this.cooker.kind==="takopan"||this.cooker.kind==="grill"){this.cooker.toBoat();const i=ol();return i.spheres=this.cooker.obstacles(),this.sim.container=i,!0}return!1},_osakaUpdate(i){const t=this.stove.T,e=this.cooker.kind==="takopan"||this.cooker.kind==="grill";if((this.cake&&this.cake.size>.02&&!this.pancakePlated||e&&this.cooker.fill>.5&&!this.cooker.plated)&&this.mode==="play"&&(this.report.ironTime=(this.report.ironTime||0)+i,t>190&&t<262&&(this.report.hotTime=(this.report.hotTime||0)+i)),this.cooker.kind==="kadai"&&this.sim.n>0&&this.sim.container.fryY!=null&&this.mode==="play"&&this.step?.verb==="cook"&&(this.report.ironTime=(this.report.ironTime||0)+i,t>165&&t<215&&(this.report.hotTime=(this.report.hotTime||0)+i)),this.cake&&this.cake.size>.02&&!this.pancakePlated&&$_(this.cake,t,i),this.flat&&this.cake&&this.flat.update(i,this.cake,this.finish),e){if(this.cooker.fill>.5&&!this.cooker.plated)for(const s of this.cooker.balls)J_(s,t,i);this.cooker.finish.sauce=this.finish.sauce,this.cooker.finish.mayo=this.finish.mayo,this.finish.mayo>0&&this.cooker.drawMayo&&this.cooker.drawMayo(this.finish.mayo)}},_osakaSizzle(){const i=Es(this.stove.T);return this.cake&&this.cake.size>.05&&!this.pancakePlated?i*.75:(this.cooker.kind==="takopan"||this.cooker.kind==="grill")&&this.cooker.fill>.3&&!this.cooker.plated?i*.65:0},_osakaStep(i){const t=this.step;if(this._holdVerb(t.verb)&&this._holdTick(i),t.verb==="mix"){const[,e]=t.strokes,n=1.3*this.st.strokes/e;this.hud.setMeter(n,n<1.3*t.strokes[0]/e?"Lumpy":n<=1.3?"Just right":"Overmixed",n>1.3?"Stop! It is getting tough":""),this.hud.enable("next",this.st.strokes>=3)}if(t.verb==="flip"){const e=this.cake.p,n=this.cake.d[this.cake.down],s=.9+(n-e.band[0])/(e.band[1]-e.band[0])*.4;this.hud.setMeter(s,n<e.breakBelow?"Too soft to flip":n<e.band[0]?"Nearly":n<=e.band[1]?"Golden: flip!":"Burning!",this.stove.T<150?"Too cool. More flame":"")}if(t.verb==="turn"){const e=this.cooker.balls,n=e.reduce((o,a)=>o+al(a),0)/e.length,s=e[0]?.p||Ms,r=.9+(n-s.band[0])/(s.band[1]-s.band[0])*.4;this.hud.setMeter(r,n<s.turnFloor?"Still setting":n<s.band[0]?"Nearly":n<=s.band[1]?this.cooker.kind==="grill"?"Charred: turn!":"Golden: turn!":"Burning!",this.stove.T<150?"Too cool. More heat":"")}},_osakaReport(i){const t=this.cooker.kind==="kadai";if(this.cake||this.cooker.kind==="takopan"||this.cooker.kind==="grill"||t){const e=(this.report.hotTime||0)/Math.max(1,this.report.ironTime||0);this.report.heiOverride=e,e<.5&&this.report.notes.push(t?"Watch the oil: about 180 degrees. Too hot burns the outside, too cool and it goes greasy.":"The iron was too cool. It needs real heat to crisp.")}if(this.cake){const e=K_(this.cake);i[this.dish.cakeRow||"okonomiBase"]={d:e.cakeD,c:e.cakeC},i.porkBelly={d:e.porkD,c:e.porkC},this.report.skills.flip=e.flip,this.dish.cake===!0&&this.cake.flips<2&&this.report.notes.push("It only went over once. The pork side needs its turn on the steel.")}if(this.cooker.kind==="takopan"&&this.cooker.balls.length){const e=this.cooker.balls.slice(0,8).map(n=>gh(n));i.takoBall={d:e.map(n=>n.formed?n.mean:n.mean*.55),c:e.map(n=>n.burnt)}}if(this.cooker.kind==="grill"&&this.cooker.balls.length){const e=this.cooker.balls.map(n=>gh(n));i.elote={d:e.map(n=>n.mean),c:e.map(n=>n.meanC)}}},_osakaAuto(i){const t=e=>{for(let n=0;n<e;n++)this.update(.016666666666666666)};if(i.verb==="mix"){const e=Math.round((i.strokes[0]+i.strokes[1])/2);this.st.strokes=e,this.next()}else if(this._holdVerb(i.verb)){const e=(i.target[0]+i.target[1])/2;this._holdOsaka(!0);for(let n=0;n<600&&this.st.amount<e;n++)this.update(1/60);this._holdOsaka(!1),t(60)}else if(i.verb==="top"||i.verb==="drop"){for(let e=0;e<i.items.length;e++)this._tapTopping(),t(20);t(90)}else if(i.verb==="flip"){for(let e=0;e<1800&&this.cake.d[this.cake.down]<1.08;e++)this.update(1/60);this._doFlip(),t(70)}else if(i.verb==="turn"){for(let e=0;e<4;e++){for(let n=0;n<1800&&this.cooker.balls.reduce((s,r)=>s+al(r),0)/this.cooker.balls.length<1.05;n++)this.update(1/60);this._doTurn(),t(25)}this.next()}}},W1={_enter_fold(i){this.cam.go(this.cooker.view),this.hud.showFlame(!0);const[t,e]=this.cake.p.meltBand||[.55,1.05];this.hud.showMeter(i.by==="crisp"?"Underside":"Cheese",[.9,1.3]),this.st.meltBand=[t,e],this.hud.setActions([{id:"fold",label:"FOLD",cls:"round"}])},_doFold(){if(this.st.folded)return;this.st.folded=!0;const i=this.step.by==="crisp",t=i?ar(this.cake.d[this.cake.down],this.cake.p.band):Y_(this.cake);if(this.flat.fold(),this.report.skills.fold=t,this.audio.play("whoosh",{gain:.6}),i){const e=this.cake.d[this.cake.down]<this.cake.p.band[0];this.hud.toast(t>.85?"Perfect fold!":e?"Still soft":"Too dark",t<.6),t<.6&&this.report.notes.push(e?"Folded while it was still soft. A dosa should crackle.":"Burnt underneath. Fold it sooner.")}else this.hud.toast(t>.85?"Perfect fold!":this.cake.set<this.st.meltBand[0]?"Cheese not melted":"Cheese went oily",t<.6),t<.6&&this.report.notes.push(this.cake.set<this.st.meltBand[0]?"You folded it before the cheese melted. Cold cheese in a quesadilla!":"The cheese split and went oily. Fold it sooner.");this.hud.enable("fold",!1),this.st.doneT=.7},_foldMeter(){const[i,t]=this.st.meltBand,e=this.cake.set,n=.9+(e-i)/(t-i)*.4;this.hud.setMeter(n,e<i?"Still melting":e<=t?"Melted: fold!":"Going oily!",this.stove.T<150?"The comal is too cool. More flame":"")},_enter_shave(i){this.cam.go("trompo"),this.hud.showFlame(!0),this.st.shaves=0,this.st.kind=this.kinds.indexOf(i.item)},_shave(){const i=this.step;if(this.st.shaves>=i.cuts)return;const t=this._press();this.st.shaves++;const e=nn[i.item],n=Math.round(8*(.5+.5*t));for(let s=0;s<n;s++){const r=this.cooker.spawn(s,n,-1);ss(this.sim,this.st.kind,r.x,r.y+.02,r.z,e.r,e.mass,.3,-.2,.1)}this.trompoShaved=(this.trompoShaved||0)+1,this.audio.play("chop",{gain:.7,rate:1.3}),this.stove.T>150&&this.audio.play("hiss",{gain:.4}),this.hud.toast(t>.9?"Clean slice!":t>.5?"Good":"Scraps!",t<=.5),this.st.shaves>=i.cuts&&(this.st.doneT=.6)},_trompoTick(i){const t=this.stall?.getObjectByName?.("trompoMeat");if(!t)return;t.rotation.y+=i*.6;const e=1-Math.min(.15,(this.trompoShaved||0)*.012);t.scale.set(e,1,e)}};function X1(){const i=po();return i.lona=new bt({map:Uv(),roughness:.6,metalness:0,side:$t}),i.lona.map.repeat.set(2,1),i.papel=["#e8307a","#3aa8e8","#f2c230","#6ac83a","#f07a2a","#9a4ae8"].map(t=>new bt({map:Dv(t),alphaTest:.5,side:$t,roughness:.8,metalness:0,emissive:new st(t),emissiveIntensity:.25})),i.backdrop=new xe({map:zv(),fog:!1,color:12105912}),i.backdrop.map.wrapS=oi,i.backdrop.map.repeat.set(-2,1),i.pastor=new Ot({map:kv(),roughness:.45,clearcoat:.6,clearcoatRoughness:.3,metalness:0}),i.pastor.map.repeat.set(3,2),i.pineapple=new Ot({color:15910976,roughness:.4,clearcoat:.6,metalness:0}),i.pineRind=new bt({color:9071146,roughness:.8,metalness:0}),i.heater=new xe({color:new st(2.4,.7,.2)}),i.salsaRoja=new Ot({color:10101264,roughness:.2,clearcoat:1,metalness:0}),i.salsaVerde=new Ot({color:4885034,roughness:.2,clearcoat:1,metalness:0}),i.clay=new bt({color:11031594,roughness:.75,metalness:0}),i.tortillaStack=new bt({map:Nl(),color:15784080,roughness:.8,metalness:0}),i.cloth=new bt({color:15261904,roughness:.9,metalness:0}),i}function q1(i,t){const e=X.y,n=X.x1-X.x0,s=X.z1-X.z0,r=(X.z0+X.z1)/2;i.add(G(new Et(n,.03,s),t.steel,0,e-.015,r));for(const o of[X.z0+.02,X.z1-.03])i.add(G(new Et(n-.02,e-.05,.02),t.steelDark,0,(e-.05)/2+.02,o));for(const o of[X.x0+.01,X.x1-.01])i.add(G(new Et(.02,e-.05,s-.04),t.steelDark,o,(e-.05)/2+.02,r));i.add(G(new Et(ie.r*2.1,ie.h*.8,ie.r*1.5),t.board,ie.x,X.y+ie.h*.4,ie.z,{}))}function Y1(i,t){const{x:e,z:n,baseY:s,h:r,r:o}=Ws;i.add(G(new vt(.1,.12,.02,20),t.steel,e,X.y+.01,n)),i.add(G(new vt(.006,.006,r+.2,8),t.pole,e,s+r/2+.02,n));const a=ci([[.012,0],[o*.55,.01],[o*.8,r*.35],[o,r*.8],[o*.92,r],[.012,r+.005]],28),l=G(a,t.pastor,e,s,n,{dynamic:!0});l.name="trompoMeat",i.add(l);const c=G(new vt(.035,.04,.06,16),t.pineapple,e,s+r+.035,n,{dynamic:!0});c.name="trompoPine",i.add(c),i.add(G(new rr(.03,.06,8),t.greens,e,s+r+.09,n)),i.add(G(new Et(.16,r*1.05,.02),t.steelDark,e,s+r/2,n-.14)),i.add(G(new ve(.12,r*.95),t.heater,e,s+r/2,n-.128,{cast:!1}))}function $1(i,t){const e=qe.x,n=qe.z,s=ci([[0,0],[.035,0],[.05,.03],[.052,.035],[.046,.033],[.03,.006],[0,.006]],20);for(const[a,l]of[[-.07,t.salsaRoja],[.05,t.salsaVerde]]){i.add(G(s,t.clay,e+a,X.y,n));const c=new Ge(.044,20);c.rotateX(-Math.PI/2),i.add(G(c,l,e+a,X.y+.026,n,{cast:!1}))}const r=new oe(.02,12,8);r.scale(1,.9,1.15);const o=Di(21);for(let a=0;a<9;a++)i.add(G(r,t.lime,e-.1+o()*.2,X.y+.02,n+.08+o()*.05,{ry:o()*6}));for(let a=0;a<12;a++)i.add(G(new vt(.075,.075,.003,28),t.tortillaStack,.3,X.y+.004+a*.0035,-.28));i.add(G(new Et(.2,.004,.13),t.cloth,.3,X.y+.05,-.33,{rz:.1}))}function j1(i,t){for(const c of[-1.12,1.12])for(const h of[-.7,.7])i.add(G(new vt(.02,.02,2.4,10),t.pole,c,2.4/2,h));const o=new ve(2.6,1.8,12,8),a=o.attributes.position;for(let c=0;c<a.count;c++){const h=a.getX(c)/1.3,u=a.getY(c)/.9;a.setZ(c,-(1-h*h)*(1-u*u)*.1)}o.rotateX(Math.PI/2),o.computeVertexNormals(),i.add(G(o,t.lona,0,2.4+.02,0,{cast:!1}));const l=Di(5);for(const c of[-.7-.02,-.1,.7-.2]){for(let u=0;u<14;u++){const f=u/13,d=-1.12+f*1.12*2,m=2.4-.12-Math.sin(f*Math.PI)*.16,x=G(new ve(.13,.16),t.papel[u%t.papel.length],d,m-.08,c,{cast:!1,ry:(l()-.5)*.3});i.add(x)}const h=[];for(let u=0;u<=14;u++){const f=u/14;h.push(new A(-1.12+f*1.12*2,2.4-.12-Math.sin(f*Math.PI)*.16+.002,c))}i.add(G(new li(new sr(h),40,.002,4,!1),t.wire,0,0,0,{cast:!1}))}}function K1(i,t){const e=new ve(16,16);e.rotateX(-Math.PI/2),i.add(G(e,t.street,0,0,0,{cast:!1}));const n=new vt(.15,.13,.03,20),s=new vt(.13,.17,.4,20,1,!0);for(const[r,o,a]of[[-.6,-1.3,t.stool],[.1,-1.45,t.stoolBlue],[.8,-1.3,t.stool]])i.add(G(s,a,r,.2,o)),i.add(G(n,a,r,.415,o));for(const[r,o]of[[-2.6,-3.4],[2.5,-3.9],[-3.8,-6.2],[3.8,-6.6]])i.add(G(new Et(1.5,.9,.8),t.farStall,r,.45,o,{cast:!1})),i.add(G(new Et(1.8,.04,1.3),t.farGlow,r,2.1,o,{cast:!1}))}function Z1(i){const t=[{lines:["TACOS","AL PASTOR"],x:-2.1,y:2.6,z:-3.1,w:1.3,h:.6,fg:"#ffd23c",glow:"#ff7a1a"},{lines:["ABIERTO"],x:2.4,y:2.9,z:-4,w:1.1,h:.4,fg:"#ff5aa0",glow:"#ff1a8c"},{lines:["ELOTES"],x:3.4,y:2.2,z:-2.6,w:1,h:.4,fg:"#63e3ff",glow:"#1ab8ff",ry:-.6},{lines:["QUESADILLAS"],x:-3.4,y:2,z:-2.2,w:1.3,h:.4,fg:"#ffffff",glow:"#ff9a3a",box:!0,bg:"#2a8a4a",ry:.6}];for(const e of t){const n=fo(e.lines,{fg:e.fg,glow:e.glow,box:e.box,bg:e.bg||"#0c0e14"}),s=new rt(new ve(e.w,e.h),new xe({map:n,color:new st(1.5,1.5,1.5),fog:!1}));s.position.set(e.x,e.y,e.z),e.ry&&(s.rotation.y=e.ry),i.add(s)}}function J1(i,t){const e=new rt(new vt(8.5,8.5,7,64,1,!0),t.backdrop);e.material.side=Fe,e.position.set(0,3.1,0),e.rotation.y=Math.PI*.5,i.add(e)}function Q1(i=X1()){const t=new jt;q1(t,i),Y1(t,i),$1(t,i),j1(t,i),K1(t,i),Z1(t),J1(t,i);const e=mo(t);return e.name="stall:cdmx",{group:e,materials:i}}const ty=new st(1,1,1),Mh=new st(.95,.72,.4),bh=new st(.2,.13,.08),ey=new st(1.1,1.08,.98);class wh{constructor(){const n=new vt(.023,.02116,.16,24,14,!1);n.rotateZ(Math.PI/2),this.geo=n;const s=n.attributes.position,r=n.attributes.normal;this.normals=new Float32Array(s.count*3);for(let l=0;l<s.count;l++)this.normals.set([r.getX(l),r.getY(l),r.getZ(l)],l*3);n.setAttribute("color",new Ue(new Float32Array(s.count*3).fill(1),3));const o=Nv().clone();o.needsUpdate=!0,o.repeat.set(1,1.8),this.mat=new Ot({map:o,vertexColors:!0,roughness:.45,clearcoat:.5,metalness:0}),this.mesh=new rt(n,this.mat),this.mesh.castShadow=!0;const a=new bt({color:14207120,roughness:.8,metalness:0,side:$t});for(let l=0;l<3;l++){const c=new rt(new rr(.02,.09,6,1,!0),a);c.rotation.z=Math.PI/2+(l-1)*.25,c.position.set(.16/2+.04,(l-1)*.006,(l-1)*.008),this.mesh.add(c)}this.shown=0,this._c=new st}draw(t,e,n){this.shown+=(t.angle-this.shown)*Math.min(1,e*10),this.mesh.rotation.x=this.shown;const s=this.geo.attributes.color,r=this.normals,o=Math.cos(t.angle),a=Math.sin(t.angle);for(let l=0;l<s.count;l++){const c=t.d[l],h=t.c[l],u=this._c;if(c<1?u.copy(ty).lerp(Mh,Math.max(0,c)*.6):u.copy(Mh).lerp(bh,Math.min(.7,(c-1)*.6)),h>0&&u.lerp(bh,Math.min(1,h)),n>0){const f=r[l*3+1]*o-r[l*3+2]*a;f>-.2&&u.lerp(ey,Math.min(.85,n*(.4+f*.5)))}s.setXYZ(l,u.r,u.g,u.b)}s.needsUpdate=!0}}class ny{constructor(){this.kind="grill",this.view="grill",this.tossLabel="TURN",this.group=new jt;const{w:t,d:e,grateY:n}=re,s=new bt({color:2762790,metalness:.7,roughness:.55,side:$t}),r=n-X.y,o=new jt,a=(M,v,y,R)=>{const E=new rt(new Et(M,r,v),s);E.position.set(re.x+y,X.y+r/2,re.z+R),E.castShadow=!0,o.add(E)};a(t,.01,0,-e/2),a(t,.01,0,e/2),a(.01,e,-t/2,0),a(.01,e,t/2,0);const l=new rt(new Et(t,.01,e),s);l.position.set(re.x,X.y+.005,re.z),o.add(l),this.group.add(o),this.coalMat=new bt({color:1314832,roughness:.95,metalness:0,emissive:new st(.9,.16,.02),emissiveIntensity:.4});const c=new ai(new vn(.018,0),this.coalMat,60),h=new ne,u=new dn,f=new $e,d=new A,m=new A;let x=7;const p=()=>(x=x*16807%2147483647,x/2147483647);for(let M=0;M<60;M++){d.set(re.x+(p()-.5)*(t-.04),X.y+.02+p()*.02,re.z+(p()-.5)*(e-.04)),f.set(p()*6,p()*6,p()*6),u.setFromEuler(f);const v=.7+p()*.6;m.set(v,v*.7,v),h.compose(d,u,m),c.setMatrixAt(M,h)}this.group.add(c);const g=new vt(.003,.003,t-.02,6);g.rotateZ(Math.PI/2);for(let M=0;M<11;M++){const v=new rt(g,s);v.position.set(re.x,n,re.z-e/2+.02+M*((e-.04)/10)),this.group.add(v)}this.light=new Ri(16738858,0,.6,2),this.light.position.set(re.x,X.y+.05,re.z),this.group.add(this.light),this.views=[new wh,new wh],this.views.forEach((M,v)=>{M.mesh.position.set(re.x-.02,n+.026,re.z+(v-.5)*.09),M.mesh.visible=!1,this.group.add(M.mesh)}),this.balls=[],this.fill=0,this.plated=!1,this.finish={sauce:0,mayo:0},this.spatula={group:new jt,update(){}},this.time=0}reset(){this.balls=[],this.fill=0,this.plated=!1,this.finish={sauce:0,mayo:0},this.views.forEach((t,e)=>{t.mesh.visible=!1,t.shown=0,t.mesh.position.set(re.x-.02,re.grateY+.026,re.z+(e-.5)*.09)})}placeCobs(){this.balls=this.views.map((t,e)=>Fu(t.normals,e?1.05:.95,Z_)),this.fill=1,this.views.forEach(t=>{t.mesh.visible=!0})}toBoat(){this.plated=!0,this.slots=[[$.x-.01,$.z-.028],[$.x+.01,$.z+.028]]}obstacles(){const t=[];for(const[e,n]of this.slots||[])for(let s=0;s<4;s++)t.push({x:e-.06+s*.04,z:n,cy:$.wellY+.024,R:.023});return t}container(){return{type:"teppan",heated:!1,cx:re.x,cz:re.z,y:re.grateY,hw:re.w/2,hd:re.d/2,rimY:re.grateY+.05}}surfaceRay(){return null}dropPoint(){return new A(re.x,re.grateY+.02,re.z)}spawn(){return{x:re.x,y:re.grateY+.05,z:re.z}}stirPoint(){return{x:re.x,y:re.grateY,z:re.z}}toss(){}update(t,e){this.time+=t,this.coalMat.emissiveIntensity=.15+e.flame*.55*(.85+Math.sin(this.time*3.1)*.1+Math.sin(this.time*7.3)*.05),this.light.intensity=e.flame*.8,this.views.forEach((n,s)=>{const r=this.balls[s];r&&(this.plated&&n.mesh.position.lerp(new A(this.slots[s][0],$.wellY+.024,this.slots[s][1]),Math.min(1,t*6)),n.draw(r,t,this.finish.mayo))})}}const iy={R:.08,TH:.0035,tex:()=>Nl(),raw:16048808,toast:14196816,dark:8014364},sy={R:.13,TH:.002,tex:()=>Ov(),raw:16051932,toast:14194746,dark:6961684},ry=new st(2364684);let sn=.08,_i=.0035;function oy(i,t,e,n){return t<1?n.copy(i.raw).lerp(i.toast,Math.max(0,t)):n.copy(i.toast).lerp(i.dark,Math.min(1,(t-1)/.9)),e>0&&n.lerp(ry,Math.min(1,e)),n}function ha(i,t){const e=new Ge(sn,32,Math.PI/2,Math.PI);e.rotateX(t?-Math.PI/2:Math.PI/2),e.translate(0,i,0);const n=e.attributes.position,s=e.attributes.uv;for(let r=0;r<n.count;r++)s.setXY(r,n.getX(r)/(2*sn)+.5,n.getZ(r)/(2*sn)+.5);return e}class Sh{constructor(t=iy,e={sauce:10101264,mayo:16052454}){sn=t.R,_i=t.TH,this.R=sn,this.TH=_i,this.look={raw:new st(t.raw),toast:new st(t.toast),dark:new st(t.dark)},this.group=new jt,this.body=new jt,this.group.add(this.body);const n=t.tex();this.mat=[0,1].map(()=>new bt({map:n,color:this.look.raw.clone(),roughness:.7,metalness:0}));const s=()=>{const a=new jt,l=new rt(ha(_i/2,!0),this.mat[1]),c=new rt(ha(-_i/2,!1),this.mat[0]);for(const h of[l,c])h.castShadow=!0,h.receiveShadow=!0,a.add(h);return a};this.left=s(),this.hinge=new jt;const r=s();r.rotation.y=Math.PI,this.hinge.add(r),this.body.add(this.left,this.hinge),this.cheeseMat=new Ot({map:ro(),color:16182464,roughness:.6,clearcoat:0,metalness:0,transparent:!0,opacity:0}),this.cheese=new rt(ha(_i/2+.0015,!0),this.cheeseMat),this.cheese.scale.set(.88,1,.88),this.body.add(this.cheese),this.filling=new rt(new Rl(sn*.14,sn*1.1,4,10),new Ot({color:15909952,roughness:.5,clearcoat:.4,metalness:0})),this.filling.rotation.x=Math.PI/2,this.filling.scale.set(1,1,.55),this.filling.position.set(-sn*.25,_i/2+sn*.07,0),this.filling.visible=!1,this.body.add(this.filling),this.sauce=new rt(new Ge(sn*.85,32,Math.PI/2,Math.PI),new Ot({color:e.sauce,alphaMap:nr(),roughness:.15,clearcoat:1,transparent:!0,opacity:0,depthWrite:!1,metalness:0})),this.sauce.rotation.x=-Math.PI/2,this.group.add(this.sauce);const o=[];for(let a=0;a<=7;a++)o.push(new A(-sn*.1-a/7*sn*.75,0,(a%2?1:-1)*sn*.6*Math.sqrt(1-(a/7*.8)**2)));this.crema=new rt(new li(new sr(o),90,.0017,5,!1),new Ot({color:e.mayo,roughness:.3,clearcoat:.8,metalness:0})),this.group.add(this.crema),this.radius=sn*.7,this.flipT=1,this.flips=0,this.flipFrom=0,this.foldT=1,this.folded=!1,this.moveT=1,this.at(Rt.x,Rt.topY+_i/2,Rt.z),this.group.visible=!1}at(t,e,n){this.group.position.set(t,e,n)}flip(){this.flipT=0,this.flipFrom=this.flips*Math.PI,this.flips++}fold(){this.foldT=0,this.folded=!0}toPlate(t=0){this.moveT=0,this.moveFrom=this.group.position.clone(),this.moveOff=t}topY(){return this.group.position.y+this.TH*2+.002}update(t,e,n={sauce:0,mayo:0}){this.R;const s=this.TH;this.group.visible=e.size>.01;for(const c of[0,1])oy(this.look,e.d[c],e.c[c],this.mat[c].color);this.body.scale.setScalar(e.spread!=null?.3+Math.min(1.3,e.spread)*.62:1),this.filling.visible=!!e.filling;const r=Math.min(1,e.set);this.cheeseMat.opacity=e.cheese?1:0,this.cheeseMat.color.setRGB(.97-r*.05,.93-r*.12,.75-r*.35),this.cheeseMat.clearcoat=r,this.foldT<1&&(this.foldT=Math.min(1,this.foldT+t/.45));const o=this.folded?this.foldT:0;if(this.hinge.rotation.z=o*Math.PI,this.hinge.position.y=Math.sin(o*Math.PI)*.03+o*(s+.002),this.flipT<1?(this.flipT=Math.min(1,this.flipT+t/.5),this.body.position.y=Math.sin(this.flipT*Math.PI)*.07,this.body.rotation.x=this.flipFrom+this.flipT*Math.PI):(this.body.position.y=0,this.body.rotation.x=this.flips*Math.PI),this.moveT<1){this.moveT=Math.min(1,this.moveT+t/.7);const c=this.moveT,h=c*c*(3-2*c);this.group.position.set(this.moveFrom.x+($.x+.02+(this.moveOff||0)-this.moveFrom.x)*h,this.moveFrom.y+($.wellY+s-this.moveFrom.y)*h+Math.sin(c*Math.PI)*.08,this.moveFrom.z+($.z-this.moveFrom.z)*h)}const a=s*2+.0035;this.sauce.position.y=a,this.sauce.material.opacity=Math.min(.9,n.sauce*1.5),this.sauce.scale.setScalar(.5+Math.min(1,n.sauce)*.5),this.crema.position.y=a+.0015;const l=this.crema.geometry.index.count;this.crema.geometry.setDrawRange(0,Math.floor(Math.min(1,n.mayo)*l/6)*6)}}const ay={_enter_mash(i){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.st.strokes=0,this.st.mashKinds=i.items.map(n=>this.kinds.indexOf(n));const[t,e]=i.strokes;this.hud.showMeter("Bhaji",[1.3*t/e,1.3]),this.hud.setActions([{id:"next",label:"DONE",disabled:!0}])},_mash(){if(this.step?.verb!=="mash")return;this._press(),this.st.strokes++;const i=this.sim;for(let t=0;t<i.n;t++)this.st.mashKinds.includes(i.kind[t])&&(i.size[t]=Math.max(.42,i.size[t]*.86),i.r[t]=Math.max(.0035,i.r[t]*.93),i.coat[t]=Math.min(1,i.coat[t]+.12));this.cooker.toss(),"mash"in this.cooker&&(this.cooker.mash=Math.min(1,this.st.strokes/this.step.strokes[1])),this.audio.play("plop",{gain:1,rate:.7}),this.stove.T>150&&this.audio.play("hiss",{gain:.25})},_mashDone(i){const[t,e]=i.strokes,n=this.st.strokes;this.report.skills.mash=n<t?Math.max(0,n/t):n<=e?1:Math.max(.2,1-(n-e)/e),n>e*1.3?this.report.notes.push("Mashed to a paste. Pav bhaji should still have some texture."):n<t*.6&&this.report.notes.push("Still in chunks. Mash it properly into the masala.")},_enter_spread(i){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.st.strokes=0,this.st.anchor=null,this.cake.spread=.35;const[t,e]=i.strokes;this.hud.showMeter("Spread",[1.3*t/e,1.3]),this.hud.setActions([{id:"next",label:"DONE",disabled:!0}])},_spreadMove(){const i=this.pointer.hist,t=i[i.length-1];if(t){if(!this.st.anchor){this.st.anchor=t;return}Math.hypot(t.x-this.st.anchor.x,t.y-this.st.anchor.y)>.12&&(this.st.anchor=t,this.st.strokes++,this.cake.spread=Math.min(1.35,this.cake.spread+.1),this.audio.play("sprinkle",{gain:1,rate:.6}))}},_spreadDone(i){const[t,e]=i.strokes,n=this.st.strokes;this.report.skills.spread=n<t?Math.max(0,n/t):n<=e?1:Math.max(.2,1-(n-e)/e),n>e*1.2?(this.report.notes.push("Spread so thin it tore. Stop while it is still whole."),this.hud.toast("It tore!",!0)):n<t*.7&&this.report.notes.push("Thick as a pancake. A dosa is spread paper thin.")},_mumbaiStep(){const i=this.step;if(i.verb==="mash"||i.verb==="spread"){const[t,e]=i.strokes,n=1.3*this.st.strokes/e,s=i.verb==="mash"?["Chunky","Just right","Paste!"]:["Too thick","Paper thin","Tearing!"];this.hud.setMeter(n,n<1.3*t/e?s[0]:n<=1.3?s[1]:s[2],""),this.hud.enable("next",this.st.strokes>=3)}if(i.verb==="fold"&&i.by==="crisp"&&!this.st.folded){const t=this.cake.p,e=this.cake.d[this.cake.down],n=.9+(e-t.band[0])/(t.band[1]-t.band[0])*.4;this.hud.setMeter(n,e<t.band[0]?"Still soft":e<=t.band[1]?"Crisp: fold!":"Burning!",this.stove.T<150?"The tawa is too cool. More flame":"")}}};function ly(){const i=po();return i.cartBlue=new bt({color:2779832,roughness:.45,metalness:.2}),i.cartTrim=new bt({color:15909424,roughness:.4,metalness:.1}),i.sheet=new bt({color:2771610,roughness:.7,metalness:0,side:$t}),i.marigold=new bt({map:Fv(),roughness:.8,metalness:0,emissive:new st(.35,.12,0),emissiveIntensity:.4}),i.boardA=new xe({map:oa(["वडा पाव","VADA PAV"]),color:new st(1.2,1.2,1.2)}),i.boardB=new xe({map:oa(["पाव भाजी","PAV BHAJI"],"#e8302a","#ffffff"),color:new st(1.2,1.2,1.2)}),i.boardC=new xe({map:oa(["डोसा","DOSA"],"#2ab86a","#ffffff"),color:new st(1.2,1.2,1.2)}),i.backdrop=new xe({map:Bv(),fog:!1,color:12105912}),i.backdrop.map.wrapS=oi,i.backdrop.map.repeat.set(-2,1),i.pav=new Ot({color:15249504,roughness:.6,clearcoat:.3,metalness:0}),i.masala=[13124122,15249440,6982186,9062938].map(t=>new bt({color:t,roughness:.8,metalness:0})),i}function cy(i,t){const e=X.y,n=X.x1-X.x0,s=X.z1-X.z0,r=(X.z0+X.z1)/2;i.add(G(new Et(n,.03,s),t.steel,0,e-.015,r));for(const o of[X.z0+.02,X.z1-.03])i.add(G(new Et(n-.02,e-.05,.02),t.cartBlue,0,(e-.05)/2+.02,o));for(const o of[X.x0+.01,X.x1-.01])i.add(G(new Et(.02,e-.05,s-.04),t.cartBlue,o,(e-.05)/2+.02,r));i.add(G(new Et(n,.03,.012),t.cartTrim,0,e-.04,X.z1+.004));for(const o of[X.x0+.1,X.x1-.1]){const a=new Cn(.2,.025,8,28);a.rotateY(Math.PI/2),i.add(G(a,t.iron,o,.2,X.z0-.04))}i.add(G(new Et(ie.r*2.1,ie.h*.8,ie.r*1.5),t.board,ie.x,X.y+ie.h*.4,ie.z))}function hy(i,t){const e=Di(29);for(let o=0;o<8;o++){const a=-.8+o*.2,l=(wn.z0+wn.z1)/2;i.add(G(new vt(.05,.05,.09,18),t.steel,a,X.y+.045,l)),i.add(G(new vt(.046,.046,.004,18),t.masala[o%4],a,X.y+.084,l,{cast:!1}))}const n=qe.x,s=qe.z;i.add(G(new Et(.24,.01,.16),t.steel,n,X.y+.005,s));const r=new oe(.03,12,8);r.scale(1,.75,1);for(let o=0;o<12;o++)i.add(G(r,t.pav,n-.09+o%4*.06,X.y+.028,s-.05+Math.floor(o/4)*.05,{ry:e()}))}function uy(i,t){for(const c of[-1.1,1.1])for(const h of[-.66,.66])i.add(G(new vt(.02,.02,2.35,10),t.pole,c,2.35/2,h));i.add(G(new ve(2.5,1.7).rotateX(Math.PI/2),t.sheet,0,2.35+.02,0,{cast:!1}));const o=new vt(.014,.014,1.2,12);o.rotateZ(Math.PI/2),i.add(G(o,t.tube,0,2.05,-.2,{cast:!1}));const a=new oe(.026,8,6);for(const c of[-.66-.02,.66*.3])for(let h=0;h<26;h++){const u=h/25;i.add(G(a,t.marigold,-1.1+u*1.1*2,2.35-.1-Math.sin(u*Math.PI*2)**2*.12,c,{cast:!1}))}[t.boardA,t.boardB,t.boardC].forEach((c,h)=>i.add(G(new ve(.6,.3),c,-.7+h*.7,2.35-.32,-.66-.03,{cast:!1,ry:Math.PI})))}function fy(i,t){const e=new ve(16,16);e.rotateX(-Math.PI/2),i.add(G(e,t.street,0,0,0,{cast:!1}));const n=new vt(.15,.13,.03,20),s=new vt(.13,.17,.4,20,1,!0);for(const[r,o,a]of[[-.6,-1.3,t.stoolBlue],[.3,-1.45,t.stool]])i.add(G(s,a,r,.2,o)),i.add(G(n,a,r,.415,o));for(const[r,o]of[[-2.6,-3.4],[2.5,-3.9],[-3.8,-6.2],[3.8,-6.6]])i.add(G(new Et(1.5,.9,.8),t.farStall,r,.45,o,{cast:!1})),i.add(G(new Et(1.8,.04,1.3),t.farGlow,r,2.1,o,{cast:!1}))}function dy(i){const t=[{lines:["CHAAT"],x:-2.1,y:2.6,z:-3.1,w:1,h:.4,fg:"#ffd23c",glow:"#ff7a1a"},{lines:["JUICE CENTRE"],x:2.4,y:2.9,z:-4,w:1.3,h:.4,fg:"#63e3ff",glow:"#1ab8ff"},{lines:["CHAI"],x:3.4,y:2.2,z:-2.6,w:.8,h:.4,fg:"#ff5aa0",glow:"#ff1a8c",ry:-.6}];for(const e of t){const n=fo(e.lines,{fg:e.fg,glow:e.glow}),s=new rt(new ve(e.w,e.h),new xe({map:n,color:new st(1.5,1.5,1.5),fog:!1}));s.position.set(e.x,e.y,e.z),e.ry&&(s.rotation.y=e.ry),i.add(s)}}function py(i,t){const e=new rt(new vt(8.5,8.5,7,64,1,!0),t.backdrop);e.material.side=Fe,e.position.set(0,3.1,0),e.rotation.y=Math.PI*.5,i.add(e)}function my(i=ly()){const t=new jt;cy(t,i),hy(t,i),uy(t,i),fy(t,i),dy(t),py(t,i);const e=mo(t);return e.name="stall:mumbai",{group:e,materials:i}}const Je=.24;class gy{constructor(t){this.ing=t,this.group=new jt,this.group.position.set(ie.x,ie.topY,ie.z),this.start=-Je/2,this.end=Je/2;const e=t.bunch||{style:"blade",colour:t.raw},n=(d,m={})=>new Ot({color:d,roughness:.45,sheen:.5,sheenColor:new st(14221232),clearcoat:.35,metalness:0,...m}),s=new jt,r=(d,m,x,p,g,M=0)=>{const v=new rt(d,m);v.position.set(x,p,g),v.rotation.y=M,v.castShadow=!0,v.receiveShadow=!0,s.add(v)};if(e.style==="pods"){const d=n(e.colour,{sheen:0,clearcoat:.9,roughness:.3}),m=n(e.base??4160038),x=new vt(.0038,.0012,.056,10);x.rotateZ(Math.PI/2),x.translate(.028,0,0);const p=new vt(.001,.0016,.012,6);p.rotateZ(Math.PI/2),p.translate(-.004,0,0);for(let g=0;g<3;g++)for(let M=0;M<4;M++){const v=M*.06+g%2*.012,y=(g-1)*.009;r(x,d,v,.004,y,Math.sin(g*3+M)*.05),r(p,m,v,.004,y)}}else if(e.style==="stalk"){const d=n(e.colour),m=n(e.base??3111466,{side:$t}),x=new vt(.0048,.0058,Je*.8,10);x.rotateZ(Math.PI/2),x.translate(Je*.4,0,0);const p=new oe(.03,12,8);p.scale(1.4,.12,.8);for(let g=0;g<3;g++)r(x,d,0,.005+(g===1?.004:0),(g-1)*.012),r(p,m,Je*.86,.007+g*.002,(g-1)*.016,(g-1)*.4)}else if(e.style==="head"){n(e.colour,{sheen:.3});const d=n(e.base??10273914,{sheen:.3}),m=new oe(.075,20,12,0,Math.PI*2,0,Math.PI/2);m.scale(Je/.15*.5,.9,.95),m.translate(Je/2,0,0),r(m,d,0,0,0);const x=new Ge(.074,24);x.rotateX(-Math.PI/2),x.scale(Je/.15*.5,1,.95),x.translate(Je/2,.001,0)}else{const d=n(e.colour),m=e.base!=null?n(e.base,{sheen:.2}):null;for(let x=0;x<12;x++){const p=new Et(Je,.0022,.0055);p.translate(Je/2,0,0),r(p,d,0,.0015+x%3*.0024,(x-5.5)*.0042+Math.sin(x*2.3)*.001,Math.sin(x*1.7)*.012)}if(m){const x=new vt(.009,.01,.045,12);x.rotateZ(Math.PI/2),x.translate(.02,.004,0),r(x,m,0,0,0)}}const o=new rt(new Cn(.03,.0025,6,20),new bt({color:13777450,roughness:.5,metalness:0}));o.rotation.y=Math.PI/2,o.scale.set(1,.3,1),o.position.set(.02,.004,0),e.style!=="pods"&&e.style!=="head"&&s.add(o),s.position.x=this.start,this.bunch=s,this.group.add(s),this.dotGeo=new Ge(.0022,10),this.dotGeo.rotateX(-Math.PI/2),this.dotMat=new xe({color:new st(1.6,1.6,1.5),transparent:!0,opacity:.9,depthWrite:!1}),this.guides=new jt,this.group.add(this.guides),this.pile=new ai(Cs(t),$n(t),40),this.pile.count=0,this.pile.castShadow=!0,this.pile.setColorAt(0,new st(1,1,1)),this.group.add(this.pile);const a=new bt({color:11975357,metalness:1,roughness:.25}),l=new bt({color:4860436,roughness:.6,metalness:0}),c=new jt,h=new rt(new Et(.0025,.07,.17),a);h.position.set(0,.035,0);const u=new rt(new Et(.001,.008,.17),new bt({color:15265007,metalness:1,roughness:.12}));u.position.set(0,.002,0);const f=new rt(new vt(.011,.012,.11,10),l);f.rotation.x=Math.PI/2,f.position.set(0,.058,.14),c.add(h,u,f);for(const d of c.children)d.castShadow=!0;c.rotation.z=.7,this.knife=c,this.knife.position.set(.08,.06,.02),this.group.add(c),this.knifeY=.06,this.knifeDrop=0,this.knifeTarget=new A(.08,.06,.02),this._m=new ne,this._q=new dn,this._e=new $e,this._p=new A,this._s=new A(1,1,1),this.pieces=0}setGuides(t,e){t[e]!=null&&this.knifeTarget.set(t[e],.05,0),this.guides.clear(),t.forEach((n,s)=>{if(!(s<e))for(let r=-4;r<=4;r++){const o=new rt(this.dotGeo,this.dotMat);o.position.set(n,.0095,r*.0065),o.scale.setScalar(s===e?1.3:.8),this.guides.add(o)}})}cutAt(t,e){this.end=t,this.bunch.scale.x=Math.max(.02,(t-this.start)/Je),this.knifeDrop=1;const n=3;for(let s=0;s<n&&this.pile.count<40;s++){const r=this.pile.count++;this._p.set(.06+Math.random()*.05,.004+r%5*.0025,.05+Math.random()*.05),this._e.set(Math.random()*.3,Math.random()*Math.PI,Math.random()*.3),this._q.setFromEuler(this._e);const o=Math.max(.6,Math.min(1.4,e/.034));this._s.set(o,1,1),this._m.compose(this._p,this._q,this._s),this.pile.setMatrixAt(r,this._m),this.pile.setColorAt(r,new st(this.ing.raw))}this.pile.instanceMatrix.needsUpdate=!0,this.pile.instanceColor.needsUpdate=!0}sweep(){this.pile.count=0}reset(){this.end=Je/2,this.bunch.scale.x=1,this.sweep(),this.bunch.visible=!0}local(t){return t?{x:t.x-ie.x,z:t.z-ie.z}:null}follow(t){t&&this.knifeTarget.set(t.x,.05,t.z*.3)}update(t){this.knifeDrop=Math.max(0,this.knifeDrop-t*5);const e=Math.sin(this.knifeDrop*Math.PI)*.05;this.knife.position.x+=(this.knifeTarget.x-this.knife.position.x)*Math.min(1,t*18),this.knife.position.z+=(this.knifeTarget.z-this.knife.position.z)*Math.min(1,t*18),this.knife.position.y=.05-e}}const Th=i=>new st(i);function xy(i){let t=i>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function vy(i=un.r){const t=[[0,.002],[i*.55,.002],[i*.82,.012],[i,.034],[i+.003,.0355],[i-.001,.033],[i*.8,.013],[i*.52,.0045],[0,.0045]];return new ui(t.map(([e,n])=>new K(e,n)),36)}class _y{constructor(t,e,n){this.group=new jt,this.bowls=new Map;const s=vy();this.ids=t,t.forEach((r,o)=>{const a=new jt,l=new rt(s,n);l.castShadow=!0,l.receiveShadow=!0,l.userData.bowlId=r,a.add(l);const c=new rt(new vt(un.r*1.25,un.r*1.25,.07,16),new xe({visible:!1}));c.position.y=.03,c.userData.bowlId=r,a.add(c);const h=new rt(new Ll(un.r*1.08,un.r*1.28,40),new xe({color:new st(1.6,1.25,.5),transparent:!0,opacity:0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=.002,a.add(h);const u=new jt;a.add(u),this.group.add(a);const f={id:r,group:a,bowl:l,hit:c,ring:h,contents:u,full:!1,home:new A,anim:null,lit:!1};this.bowls.set(r,f),this.fill(r,e[r])}),this.layout(!1),this.time=0}layout(t){const e=this.ids.length;this.ids.forEach((n,s)=>{const r=this.bowls.get(n);if(t&&e>4){const o=Math.ceil(e/2),a=Math.floor(s/o),l=s%o;r.home.set((l-(o-1)/2)*un.portrait.spacing,X.y,un.portrait.rows[a])}else{const o=t?un.portrait.rows[1]-.04:un.z;r.home.set((s-(e-1)/2)*(t?un.portrait.spacing:un.spacing),X.y,o)}r.anim||r.group.position.copy(r.home)})}fill(t,e,n){const s=this.bowls.get(t);if(s.contents.clear(),s.full=!!e&&n!==0,!s.full)return;const r=xy(t.length*97+11);if(e.shape==="strand"){const p=e.points,g={x:new Float32Array(9*p*3)},M=new Float32Array(9*p*3),v=Th(e.raw),y=[];for(let T=0;T<9;T++){let L=r()*Math.PI*2;const I=un.r*(.35+r()*.4);for(let _=0;_<p;_++){const w=T*p+_;L+=.55,g.x[w*3]=Math.cos(L)*I*(.8+r()*.3),g.x[w*3+1]=.012+T*.0016+r()*.004,g.x[w*3+2]=Math.sin(L)*I*(.8+r()*.3),M[w*3]=v.r,M[w*3+1]=v.g,M[w*3+2]=v.b}y.push({first:T*p,n:p})}const R=$n(e);R.side=$t;const E=new Xu(9,p,e.width,R);E.update(g,y,M),s.contents.add(E.mesh);return}if(e.shape==="curd"){const x=new rt(Gu(),new bt({color:15323046,roughness:.55,metalness:0}));x.position.set(0,.03,0),x.rotation.z=1.2,x.castShadow=!0,s.contents.add(x);return}const o=n??Math.min(e.count??10,26),a=$n(e),l=new ai(Cs(e),a,o),c=new ne,h=new dn,u=new $e,f=new A,d=new A,m=Th(e.raw);for(let x=0;x<o;x++){const p=r()*Math.PI*2,g=Math.sqrt(r())*un.r*.6;f.set(Math.cos(p)*g,.008+e.r*.6+x/o*.012,Math.sin(p)*g),u.set(r()*6,r()*6,r()*6),h.setFromEuler(u);const M=.85+r()*.3;d.set(M,M,M),c.compose(f,h,d),l.setMatrixAt(x,c),l.setColorAt(x,m)}l.castShadow=!0,s.contents.add(l)}highlight(t){for(const e of this.bowls.values())e.lit=t.includes(e.id)&&e.full}tip(t,e,n){const s=this.bowls.get(t);return!s||s.anim?!1:(s.anim={t:0,from:s.home,to:new A(e.x+(s.home.x>0?.07:-.07),e.y+.13,e.z+.06),fired:!1,onTip:n},!0)}pick(t){const e=t.intersectObjects([...this.bowls.values()].map(n=>n.hit),!1);return e.length?e[0].object.userData.bowlId:null}update(t){this.time+=t;for(const e of this.bowls.values()){const n=e.lit?.55+Math.sin(this.time*5)*.3:0;if(e.ring.material.opacity+=(n-e.ring.material.opacity)*Math.min(1,t*8),!e.anim)continue;const s=e.anim;if(s.t+=t,s.t<.35){const r=s.t/.35,o=r*r*(3-2*r);e.group.position.lerpVectors(s.from,s.to,o),e.group.position.y+=Math.sin(r*Math.PI)*.06,e.group.rotation.z=(e.home.x>0?1:-1)*o*.4}else if(s.t<.75){const r=(s.t-.35)/.4;e.group.position.copy(s.to),e.group.rotation.z=(e.home.x>0?1:-1)*(.4+Math.min(1,r*2)*1.5),!s.fired&&r>.15&&(s.fired=!0,e.contents.clear(),e.full=!1,s.onTip?.())}else if(s.t<1.15){const r=(s.t-.75)/.4,o=r*r*(3-2*r);e.group.position.lerpVectors(s.to,s.from,o),e.group.rotation.z=(e.home.x>0?1:-1)*1.9*(1-o)}else e.group.position.copy(s.from),e.group.rotation.z=0,e.anim=null}}}const yy=.004,My=.03;function by(i,t,e){const n=[],s=(e-t)/(i+1);for(let r=0;r<i;r++)n.push(e-s*(r+1));return{guides:n,next:0,end:e,start:t,acc:[],pieces:[]}}function wy(i){return i.next<i.guides.length?i.guides[i.next]:null}function Sy(i,t){const e=wy(i);if(e===null)return null;const n=Math.max(i.start+.01,Math.min(i.end-.004,t)),s=Math.abs(n-e),r=Math.max(0,1-Math.max(0,s-yy)/My),o={from:n,to:i.end,len:i.end-n};return i.acc.push(r),i.pieces.push(o),i.end=n,i.next++,{acc:r,piece:o,done:i.next>=i.guides.length}}function Ty(i){return i.acc.length?i.acc.reduce((t,e)=>t+e,0)/i.guides.length:0}class Ey{constructor(t=90){this.group=new jt,this.items=[];const e=_v();for(let n=0;n<t;n++){const s=new no({map:e,color:16777215,transparent:!0,depthWrite:!1,opacity:0}),r=new el(s);r.visible=!1,r.renderOrder=3,this.group.add(r),this.items.push({s:r,life:0,max:1,vx:0,vy:0,vz:0,grow:0,a:0})}this.next=0,this.spark=new Ay,this.group.add(this.spark.points)}emit(t,e,n,{colour:s=16777215,size:r=.05,life:o=1.6,rise:a=.12,alpha:l=.35,spread:c=.02}={}){const h=this.items[this.next];this.next=(this.next+1)%this.items.length,h.s.position.set(t+(Math.random()-.5)*c,e,n+(Math.random()-.5)*c),h.s.material.color.set(s),h.s.material.rotation=Math.random()*Math.PI*2,h.s.scale.setScalar(r),h.life=0,h.max=o*(.8+Math.random()*.4),h.vx=(Math.random()-.5)*.03,h.vy=a*(.7+Math.random()*.6),h.vz=(Math.random()-.5)*.03,h.grow=r*1.6,h.a=l,h.s.visible=!0}update(t){for(const e of this.items){if(!e.s.visible)continue;e.life+=t;const n=e.life/e.max;if(n>=1){e.s.visible=!1;continue}e.s.position.x+=e.vx*t,e.s.position.y+=e.vy*t,e.s.position.z+=e.vz*t,e.vx+=Math.sin(e.life*3+e.a*9)*.02*t;const s=e.s.scale.x+e.grow*t;e.s.scale.setScalar(s),e.s.material.rotation+=t*.3,e.s.material.opacity=e.a*Math.sin(Math.PI*Math.min(1,n*1.4))*(1-n)}this.spark.update(t)}}class Ay{constructor(t=160){this.max=t,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.life=new Float32Array(t);const e=new Te;e.setAttribute("position",new Ue(this.pos,3).setUsage(ls)),this.points=new xx(e,new pu({color:new st(1.6,1.3,.8),size:.004,transparent:!0,opacity:.9,blending:fs,depthWrite:!1,map:nr()})),this.points.frustumCulled=!1,this.geo=e,this.next=0}burst(t,e,n,s=20,r=.9){for(let o=0;o<s;o++){const a=this.next;this.next=(this.next+1)%this.max,this.pos[a*3]=t+(Math.random()-.5)*.08,this.pos[a*3+1]=e,this.pos[a*3+2]=n+(Math.random()-.5)*.08;const l=Math.random()*Math.PI*2,c=r*(.3+Math.random());this.vel[a*3]=Math.cos(l)*c*.4,this.vel[a*3+1]=c,this.vel[a*3+2]=Math.sin(l)*c*.4,this.life[a]=.3+Math.random()*.4}}update(t){for(let e=0;e<this.max;e++){if(this.life[e]<=0){this.pos[e*3+1]=-10;continue}this.life[e]-=t,this.vel[e*3+1]-=9.8*t,this.pos[e*3]+=this.vel[e*3]*t,this.pos[e*3+1]+=this.vel[e*3+1]*t,this.pos[e*3+2]+=this.vel[e*3+2]*t}this.geo.attributes.position.needsUpdate=!0}}const ll=1,Eh=3,Cy=["thai"];function Ry(i,t,e=!1){const n=t.best||{},s=new Set([...Cy,...t.opened||[]]),r=c=>(n[c]?.stars??0)>=ll;let o=0;const a=i.map(c=>{const u=(e||c.ready!==!1?c.dishes||[]:[]).map((m,x,p)=>({id:m,level:x+1,best:n[m]||null,passed:r(m),open:e||x===0||r(p[x-1]),needs:x>0?p[x-1]:null})),f=u.filter(m=>m.passed).length,d=f>=Eh;return d&&o++,{id:c.id,passedCount:f,stamp:d,dishes:u,open:e||s.has(c.id),playable:u.length>0,toStamp:Math.max(0,Eh-f)}}),l=Math.max(0,o-(t.spent||0));return{countries:a,stamps:l,earned:o}}function Py(i,t){const e={dishes:[],stamp:!1};return t.countries.forEach((n,s)=>{const r=i.countries[s];n.dishes.forEach((o,a)=>{o.open&&!r.dishes[a].open&&e.dishes.push(o.id)}),n.stamp&&!r.stamp&&(e.stamp=!0)}),e}const ua=(i,t,e)=>{const n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n},Ke=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);class Ly{constructor(t,e){this.root=t,this.h=e,t.innerHTML=`
      <div id="card" class="hide"><div class="dish"><span class="dn"></span><span id="dots"></span></div><div class="say"></div><div class="hint"></div></div>
      <div id="meter" class="hide"><div class="row"><span class="what"></span><b class="state"></b></div><div class="bar"><div class="band"></div><div class="mark"></div></div><div class="warn"></div></div>
      <div id="flame" class="hide"><div class="temp">24°C</div><div class="track"><div class="fill"></div><div class="knob"></div></div><div class="lbl">FLAME</div></div>
      <div id="pour" class="hide"><div class="band"></div><div class="fill"></div></div>
      <div id="garnish" class="hide"></div>
      <div id="actions"></div>
      <div id="timing" class="hide"><div class="lbl"></div><div class="bar"><div class="zone"></div><div class="mark"></div></div></div>
      <div id="gesture" class="hide"><div class="g"></div><div class="t"></div></div>
      <div id="toast"></div>
      <div id="menu" class="hide"></div>
      <div id="result" class="hide"></div>
      <button id="home" class="hide" aria-label="Menu">&#8962;</button>
      <button id="sound" aria-label="Sound">SND</button>`,this.$=n=>t.querySelector(n),this.card=this.$("#card"),this.meter=this.$("#meter"),this.flame=this.$("#flame"),this.pour=this.$("#pour"),this.garnish=this.$("#garnish"),this.actions=this.$("#actions"),this.toastEl=this.$("#toast"),this.timing=this.$("#timing"),this.gesture=this.$("#gesture"),this.menu=this.$("#menu"),this.result=this.$("#result"),this.$("#sound").addEventListener("click",()=>e.onSound?.()),this.$("#home").addEventListener("click",()=>e.onMenu?.()),this._flameDrag(),this._toastT=0}setStep(t,e,n,s,r){this.card.classList.remove("hide"),this.card.querySelector(".dn").textContent=t,this.card.querySelector(".say").textContent=e,this.card.querySelector(".hint").textContent=n||"";const o=this.card.querySelector("#dots");o.innerHTML="";for(let a=0;a<r;a++)o.appendChild(ua("i",a<s?"done":a===s?"now":""));requestAnimationFrame(()=>{this.root.style.setProperty("--card-h",this.card.offsetHeight+"px")}),this.root.style.setProperty("--card-h",(this.card.offsetHeight||96)+"px")}setHint(t){this.card.querySelector(".hint").textContent=t}hideCard(){this.card.classList.add("hide")}showFlame(t){this.flame.classList.toggle("hide",!t)}setFlame(t,e){const n=Math.round(t*100);this.flame.querySelector(".fill").style.height=n+"%",this.flame.querySelector(".knob").style.bottom=`calc(${n}% - 7px)`;const s=this.flame.querySelector(".temp");s.textContent=Math.round(e)+"°C",s.style.color=e>230?"#ff7a4a":e>170?"#ffc55a":"#cdbfae"}_flameDrag(){const t=this.flame.querySelector(".track");let e=!1;const n=r=>{const o=t.getBoundingClientRect(),a=1-(r.clientY-o.top)/o.height;this.h.onFlame?.(Math.max(0,Math.min(1,a)))};this.flame.addEventListener("pointerdown",r=>{e=!0,this.flame.setPointerCapture(r.pointerId),n(r),r.stopPropagation()}),this.flame.addEventListener("pointermove",r=>{e&&n(r)});const s=()=>{e=!1};this.flame.addEventListener("pointerup",s),this.flame.addEventListener("pointercancel",s)}showMeter(t,e){this.meter.classList.remove("hide"),this.meter.querySelector(".what").textContent=t;const n=this.meter.querySelector(".band");n.style.left=e[0]/2*100+"%",n.style.width=(e[1]-e[0])/2*100+"%"}setMeter(t,e,n){this.meter.querySelector(".mark").style.left=Math.min(100,t/2*100)+"%",this.meter.querySelector(".state").textContent=e,this.meter.querySelector(".warn").textContent=n||""}hideMeter(){this.meter.classList.add("hide")}showPour(t){this.pour.classList.remove("hide");const e=this.pour.querySelector(".band");e.style.bottom=t[0]*100+"%",e.style.height=(t[1]-t[0])*100+"%",this.setPour(0)}setPour(t){this.pour.querySelector(".fill").style.height=Math.min(100,t*100)+"%"}hidePour(){this.pour.classList.add("hide")}setActions(t){this.actions.innerHTML="",this._btns={};for(const e of t){const n=ua("button","btn "+(e.cls||""),e.label);if(e.disabled&&(n.disabled=!0),e.hold){const s=o=>{o.preventDefault(),n.classList.add("on"),n.setPointerCapture?.(o.pointerId),this.h.onHold?.(e.id,!0)},r=()=>{n.classList.contains("on")&&(n.classList.remove("on"),this.h.onHold?.(e.id,!1))};n.addEventListener("pointerdown",s),n.addEventListener("pointerup",r),n.addEventListener("pointercancel",r),n.addEventListener("lostpointercapture",r)}else n.addEventListener("click",s=>{s.stopPropagation(),this.h.onAction?.(e.id)});this.actions.appendChild(n),this._btns[e.id]=n}}enable(t,e){this._btns?.[t]&&(this._btns[t].disabled=!e)}label(t,e){this._btns?.[t]&&(this._btns[t].innerHTML=e)}showGarnish(t,e,n){this.garnish.classList.remove("hide"),this.garnish.innerHTML="";for(const s of t){const r=ua("button","chip"+(s.id===n?" sel":""),`<i style="background:${s.css}"></i>${Ke(s.name)} <small>${e[s.id]||0}</small>`);r.dataset.id=s.id,r.addEventListener("click",o=>{o.stopPropagation(),this.h.onGarnish?.(s.id)}),this.garnish.appendChild(r)}}hideGarnish(){this.garnish.classList.add("hide")}cue(t=[]){for(const[e,n]of Object.entries(this._btns||{}))n.classList.toggle("cue",t.includes(e)&&!n.disabled)}cueFlame(t){this.flame.querySelector(".track").classList.toggle("cue",!!t)}cueChips(t=[]){this.garnish.querySelectorAll(".chip").forEach(e=>e.classList.toggle("cue",t.includes(e.dataset.id)))}showTiming(t,e){this.timing.classList.remove("hide"),this.timing.querySelector(".lbl").textContent=t,this.setZone(e)}setZone([t,e]){const n=this.timing.querySelector(".zone");n.style.left=t*100+"%",n.style.width=(e-t)*100+"%"}setTiming(t){this.timing.querySelector(".mark").style.left=t*100+"%"}timingFlash(t){this.timing.classList.remove("hit","miss"),this.timing.offsetWidth,this.timing.classList.add(t?"hit":"miss")}hideTiming(){this.timing.classList.add("hide")}showGesture(t,e){this.gesture.className=t,this.gesture.querySelector(".t").textContent=e}hideGesture(){this.gesture.className="hide"}toast(t,e=!1){this.toastEl.textContent=t,this.toastEl.classList.toggle("bad",e),this.toastEl.classList.add("on"),clearTimeout(this._toastT),this._toastT=setTimeout(()=>this.toastEl.classList.remove("on"),900)}showMenu(t,e,n){this.menu.classList.remove("hide"),this.$("#home").classList.add("hide");const s=a=>[0,1,2].map(l=>`<i class="${l<a?"on":""}">★</i>`).join(""),r=t.map((a,l)=>{const c=n.countries[l],h=c.dishes.map(m=>{const x=e[m.id];if(!c.open||!m.open){const g=c.open?`Score ${ll}★ on ${Ke(e[m.needs].name)} to unlock`:"";return`<div class="dishbtn locked"><span class="lv">${m.level}</span><span class="txt"><span class="n">${Ke(x.name)}</span> <span class="l">${Ke(x.local||"")}</span><br><span class="l">${g}</span></span><span class="b">LOCKED</span></div>`}const p=m.best?`<span class="st">${s(m.best.stars)}</span>${m.best.total}`:"COOK";return`<button class="dishbtn" data-dish="${m.id}"><span class="lv">${m.level}</span><span class="txt"><span class="n">${Ke(x.name)}</span> <span class="l">${Ke(x.local||"")}</span><br><span class="l">${Ke(x.blurb)}</span></span><span class="b">${p}</span></button>`}).join(""),u=a.soon?.length?`<div class="soonrow">Coming: ${a.soon.map(Ke).join(" · ")}</div>`:"";let f="";c.open&&c.playable&&(f=c.stamp?'<span class="stamp">Passport stamp earned</span>':`<span class="tostamp">${c.toStamp} more to earn a passport stamp</span>`);let d="";return c.open||(d=c.playable?n.stamps>0?`<button class="btn openbtn" data-open="${a.id}">Open with a passport stamp</button>`:'<div class="soonrow">Locked. Earn a passport stamp to open it</div>':'<div class="soonrow">Locked. Coming soon</div>'),`<div class="country${c.open?"":" soon"}"><div class="h"><b>${Ke(a.name)}</b><span>${Ke(a.place)}</span></div>${f?`<div class="cstat">${f}</div>`:""}${c.open&&h?`<div class="dishes">${h}</div>`:""}${d}${u}</div>`}).join(""),o=n.earned?`<div class="passport">Passport: ${n.stamps} stamp${n.stamps===1?"":"s"} to spend</div>`:"";this.menu.innerHTML=`<div class="logo"><div class="k">Wiparat’s</div><div class="t">Worldwide<br>Kitchen</div><div class="s">Cook the world’s street food</div></div><div class="list">${o}${r}</div>`,this.menu.querySelectorAll("button.dishbtn").forEach(a=>a.addEventListener("click",()=>this.h.onStart?.(a.dataset.dish))),this.menu.querySelectorAll("[data-open]").forEach(a=>a.addEventListener("click",()=>this.h.onOpen?.(a.dataset.open)))}hideMenu(){this.menu.classList.add("hide"),this.$("#home").classList.remove("hide")}showResult(t,e,n,s,r={},o={}){const a=[0,1,2].map(c=>`<span class="${c<e.stars?"":"off"}">★</span>`).join(""),l=(c,h)=>`<span>${c}</span><div class="b"><i style="width:${Math.round(h*100)}%"></i></div>`;this.result.innerHTML=`
      <div class="top"><div class="stars">${a}</div><div><div class="score">${e.total}<small> / 100</small></div><div class="best">${s?"NEW BEST":n?"Best "+n.total:""}</div></div></div>
      <div class="parts">${l("Cooking",e.cooking)}${l("Technique",e.technique)}${l(Ke(o.hei||"Wok hei"),e.hei)}${l("Plating",e.presentation)}</div>
      <div class="noi"><div class="who">${Ke(o.judge||"Auntie Noi")} tastes it</div>${e.notes.map(c=>`<p>${Ke(c)}</p>`).join("")}</div>
      ${r.dishes?.length?`<div class="news good">Unlocked: <b>${r.dishes.map(Ke).join(", ")}</b></div>`:""}
      ${r.stamp?'<div class="news stamp">Passport stamp earned! Open a new country from the menu</div>':""}
      ${r.need?`<div class="news">Score ${ll}★ to unlock <b>${Ke(r.need)}</b></div>`:""}
      <div class="row"><button class="btn ghost" data-a="menu">Menu</button><button class="btn${r.next?" ghost":""}" data-a="again">Cook again</button>${r.next?`<button class="btn" data-a="go:${r.next}">Next dish</button>`:""}</div>`,this.result.classList.remove("hide"),this.result.querySelectorAll("[data-a]").forEach(c=>c.addEventListener("click",h=>{h.stopPropagation(),this.h.onAction?.(c.dataset.a)}))}hideResult(){this.result.classList.add("hide")}setSound(t){this.$("#sound").textContent=t?"SND":"OFF",this.$("#sound").style.opacity=t?1:.6}clearPlay(){this.hideMeter(),this.hidePour(),this.hideGarnish(),this.hideResult(),this.showFlame(!1),this.setActions([]),this.hideTiming(),this.hideGesture(),this.cueFlame(!1)}}const yi=1e-4;class Iy{constructor(t,e){this.ctx=t,this.rng=e,this.cache=new Map}get(t="white"){if(this.cache.has(t))return this.cache.get(t);const e=Math.floor(this.ctx.sampleRate*2),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=n.getChannelData(0),r=this.rng;if(t==="brown"){let o=0;for(let a=0;a<e;a++){const l=r.float()*2-1;o=(o+.02*l)/1.02,s[a]=o*3.5}}else if(t==="pink"){let o=0,a=0,l=0,c=0,h=0,u=0,f=0;for(let d=0;d<e;d++){const m=r.float()*2-1;o=.99886*o+m*.0555179,a=.99332*a+m*.0750759,l=.969*l+m*.153852,c=.8665*c+m*.3104856,h=.55*h+m*.5329522,u=-.7616*u-m*.016898,s[d]=(o+a+l+c+h+u+f+m*.5362)*.11,f=m*.115926}}else for(let o=0;o<e;o++)s[o]=r.float()*2-1;return this.cache.set(t,n),n}}function Dy(i,t,e,n,s,r){const o=!!r.loop,a=s+(e.at||0),l=o?1/0:Math.max(.02,e.dur??.2),c=(e.peak??1)*(r.gain??1);if(c<=0)return null;const h=Math.max(.001,e.a??.005),u=Math.max(0,e.d??0),f=e.s??1,d=Math.max(.005,e.r??.05),m=i.createGain();m.gain.value=yi,m.connect(n);let x,p=null;const g=r.rate??1;if(e.src==="noise")x=i.createBufferSource(),x.buffer=t.get(e.noise||"white"),x.loop=!0,x.loopStart=0,x.playbackRate.value=g;else{x=i.createOscillator(),x.type=e.wave||"sine";const I=e.jitter||0,_=I?1+(r.jitterRoll??0)*I:1,w=Math.max(8,(e.freq??440)*_*g);if(p=x.frequency,p.setValueAtTime(w,a),e.to!=null&&!o){const k=Math.max(8,e.to*_*g),z=a+l;e.glide==="lin"?p.linearRampToValueAtTime(k,z):p.exponentialRampToValueAtTime(k,z)}}let M=x,v=null;if(e.filter){const I=i.createBiquadFilter();I.type=e.filter.type||"lowpass",I.Q.value=e.filter.q??1;const _=Math.max(20,e.filter.freq??1e3);I.frequency.setValueAtTime(_,a),e.filter.to!=null&&!o&&I.frequency.exponentialRampToValueAtTime(Math.max(20,e.filter.to),a+l),v=I.frequency,M.connect(I),M=I}let y=null,R=null;if(e.lfo&&e.lfo.rate>0){y=i.createOscillator(),y.type="sine",y.frequency.value=e.lfo.rate;const I=i.createGain();if(e.lfo.target==="gain"){const _=Math.min(1,Math.max(0,e.lfo.depth??.5));R=i.createGain(),R.gain.value=1-_*.5,I.gain.value=_*.5,y.connect(I),I.connect(R.gain),M.connect(R),M=R}else e.lfo.target==="filter"&&v?(I.gain.value=e.lfo.depth??200,y.connect(I),I.connect(v)):p&&(I.gain.value=e.lfo.depth??20,y.connect(I),I.connect(p));y.start(a)}M.connect(m);const E=m.gain;E.setValueAtTime(yi,a),E.linearRampToValueAtTime(c,a+h);const T=Math.max(yi,c*f);u>0&&E.linearRampToValueAtTime(T,a+h+u);let L=1/0;if(o)x.start(a,e.src==="noise"?r.noiseOffset??0:void 0);else{const I=Math.max(a+h+u,a+l-d);E.setValueAtTime(Math.max(yi,u>0?T:c),I),E.linearRampToValueAtTime(yi,a+l),L=a+l+.02,x.start(a,e.src==="noise"?r.noiseOffset??0:void 0),x.stop(L),y&&y.stop(L)}return{endsAt:L,stop(I){const _=Math.max(I,i.currentTime);try{E.cancelScheduledValues(_),E.setValueAtTime(Math.max(yi,E.value),_),E.linearRampToValueAtTime(yi,_+d),x.stop(_+d+.02),y&&y.stop(_+d+.02)}catch{}}}}function fa(i,t,e,n,s={}){const r=Math.max(s.when??i.currentTime,i.currentTime),o=!!e.loop,a=[];let l=r;for(const c of e.layers||[]){const h=Dy(i,t,c,n,r,{...s,loop:o});h&&(a.push(h),h.endsAt>l&&h.endsAt!==1/0&&(l=h.endsAt))}return{endsAt:o?1/0:l,stop(c=i.currentTime){for(const h of a)h.stop(c)}}}function Uy(i){let t=1779033703^i.length;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),3432918353),t=t<<13|t>>>19;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),t^=t>>>16,t>>>0)}function Ny(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class zl{constructor(t="lifesim"){this.seed=String(t),this._next=Ny(Uy(this.seed)()),this._children=new Map}child(t){return this._children.has(t)||this._children.set(t,new zl(`${this.seed}:${t}`)),this._children.get(t)}float(){return this._next()}range(t,e){return t+this._next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}chance(t){return this._next()<t}sign(){return this._next()<.5?-1:1}pick(t){return t[Math.floor(this._next()*t.length)]}pickMany(t,e){const n=this.shuffle([...t]);return n.slice(0,Math.min(e,n.length))}shuffle(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(this._next()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}weighted(t){const e=Array.isArray(t)?t:[...t].map(([r,o])=>({value:r,weight:o}));let n=0;for(const r of e)n+=Math.max(0,r.weight??1);if(n<=0)return e[0];let s=this._next()*n;for(const r of e)if(s-=Math.max(0,r.weight??1),s<=0)return r;return e[e.length-1]}gaussian(t=0,e=1){let n=0,s=0;for(;n===0;)n=this._next();for(;s===0;)s=this._next();return t+e*Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*s)}stat(t,e,n=0,s=100){return Math.max(n,Math.min(s,Math.round(this.gaussian(t,e))))}}const ky={chop:{layers:[{src:"noise",noise:"white",dur:.05,a:.001,r:.04,peak:.5,filter:{type:"bandpass",freq:3200,q:.8}},{src:"osc",wave:"sine",freq:190,to:70,dur:.12,a:.002,r:.1,peak:.55}]},clank:{layers:[{src:"osc",wave:"sine",freq:612,dur:.5,a:.002,d:.05,s:.4,r:.45,peak:.16},{src:"osc",wave:"sine",freq:1493,dur:.35,a:.002,r:.33,peak:.1},{src:"osc",wave:"sine",freq:2811,dur:.22,a:.001,r:.2,peak:.06},{src:"noise",noise:"white",dur:.03,a:.001,r:.03,peak:.25,filter:{type:"highpass",freq:2500}}]},whoosh:{layers:[{src:"noise",noise:"white",dur:.45,a:.08,r:.3,peak:.35,filter:{type:"bandpass",freq:500,to:1600,q:.7}}]},flare:{layers:[{src:"noise",noise:"white",dur:.9,a:.02,d:.2,s:.5,r:.6,peak:.55,filter:{type:"lowpass",freq:900,to:300,q:.5}}]},hiss:{layers:[{src:"noise",noise:"white",dur:1.2,a:.005,d:.3,s:.45,r:.8,peak:.5,filter:{type:"highpass",freq:2600,q:.6}}]},crack:{layers:[{src:"noise",noise:"white",dur:.035,a:.001,r:.03,peak:.6,filter:{type:"bandpass",freq:2200,q:1.2}},{src:"osc",wave:"triangle",freq:900,to:400,dur:.04,a:.001,r:.035,peak:.12}]},plop:{layers:[{src:"osc",wave:"sine",freq:320,to:120,dur:.12,a:.004,r:.1,peak:.3},{src:"noise",noise:"white",dur:.08,a:.002,r:.07,peak:.2,filter:{type:"lowpass",freq:1400}}]},tick:{layers:[{src:"osc",wave:"triangle",freq:1200,dur:.05,a:.001,r:.045,peak:.12}]},sprinkle:{layers:[{src:"noise",noise:"white",dur:.04,a:.001,r:.03,peak:.12,filter:{type:"bandpass",freq:5200,q:2}}]},scooter:{layers:[{src:"osc",wave:"sawtooth",freq:70,to:118,glide:"lin",dur:2.8,a:1.1,d:.2,s:.8,r:1.4,peak:.05,filter:{type:"lowpass",freq:420,q:.8}},{src:"noise",noise:"white",dur:2.8,a:1.2,r:1.4,peak:.03,filter:{type:"bandpass",freq:380,q:1}}]}},Ah=[523.3,587.3,659.3,784,880,1046.5];class zy{constructor(){this.ctx=null,this.on=!0,this.beds=null}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.bank=new Iy(this.ctx,new zl("kitchen.audio")),this.master=this.ctx.createGain(),this.master.gain.value=this.on?.9:0,this.master.connect(this.ctx.destination),this._beds())}setOn(t){this.on=t,this.master&&this.master.gain.setTargetAtTime(t?.9:0,this.ctx.currentTime,.05)}_noiseLoop(t,e=0){const n=this.ctx.createBufferSource();n.buffer=this.bank.get("white"),n.loop=!0;let s=n;for(const o of t){const a=this.ctx.createBiquadFilter();a.type=o.type,a.frequency.value=o.freq,a.Q.value=o.q??.7,s.connect(a),s=a}const r=this.ctx.createGain();return r.gain.value=e,s.connect(r),r.connect(this.master),n.start(0,Math.random()*1.5),r}_beds(){this.ctx;const t=this._noiseLoop([{type:"highpass",freq:1800},{type:"lowpass",freq:9e3}]),e=this._noiseLoop([{type:"lowpass",freq:420,q:.6},{type:"highpass",freq:60}]),n=this._noiseLoop([{type:"bandpass",freq:520,q:.5}],.035);this.beds={sizzle:t,roar:e,street:n},this._crackleT=0,this._scooterT=6}play(t,e={}){if(!this.ctx||!this.on)return;const n=ky[t];n&&fa(this.ctx,this.bank,n,this.master,{gain:e.gain??1,rate:e.rate??.94+Math.random()*.12,noiseOffset:Math.random()*1.5})}chime(t){if(!this.ctx)return;const e=this.ctx.currentTime+.05;(t>=3?[0,2,3,5]:t===2?[0,2,3]:t===1?[0,2]:[2,0]).forEach((s,r)=>{fa(this.ctx,this.bank,{layers:[{src:"osc",wave:"triangle",freq:Ah[s],dur:.5,a:.005,d:.1,s:.5,r:.35,peak:.16},{src:"osc",wave:"sine",freq:Ah[s]*2,dur:.3,a:.005,r:.25,peak:.05}]},this.master,{when:e+r*.14})})}update(t,e,n){if(!this.ctx||!this.beds)return;const s=this.ctx.currentTime;this.beds.sizzle.gain.setTargetAtTime(e*.32,s,.08),this.beds.roar.gain.setTargetAtTime(n*.3,s,.12),this._crackleT-=t,e>.1&&this._crackleT<=0&&(this._crackleT=.02+Math.random()*(.18-e*.15),fa(this.ctx,this.bank,{layers:[{src:"noise",noise:"white",dur:.012+Math.random()*.02,a:.001,r:.01,peak:.08+e*.2,filter:{type:"bandpass",freq:2500+Math.random()*4e3,q:1.5}}]},this.master,{noiseOffset:Math.random()*1.5})),this._scooterT-=t,this._scooterT<=0&&(this._scooterT=9+Math.random()*14,this.play("scooter"))}}const ju="kitchen.";function go(i,t){try{const e=localStorage.getItem(ju+i);return e==null?t:JSON.parse(e)}catch{return t}}function Fl(i,t){try{localStorage.setItem(ju+i,JSON.stringify(t))}catch{}}function Ol(){return go("best",{})}function Fy(i,t,e){const n=Ol(),s=n[i];return s&&s.total>=t?!1:(n[i]={total:t,stars:e},Fl("best",n),!0)}function Oy(){const i=go("progress",{});return{best:Ol(),opened:i.opened||[],spent:i.spent||0}}function By(i,t){const e=t.countries.find(s=>s.id===i);if(!e||e.open||!e.playable||t.stamps<1)return!1;const n=go("progress",{});return Fl("progress",{opened:[...n.opened||[],i],spent:(n.spent||0)+1}),!0}function Hy(){return go("prefs",{sound:!0})}function Gy(i){Fl("prefs",i)}const Vy={peanuts:"#c99a5c",chilli:"#c42a1c",lime:"#86c23a",freshSprouts:"#f5f2de",freshChives:"#4a9a30",cucumber:"#7fbf5e",freshScallion:"#6cb846",friedEgg:"#ffd54a",pepper:"#d6ccbe",aonori:"#3f7a22",beniShoga:"#e0204a",katsuobushi:"#d8a47a",onionBits:"#f4eef4",cilantro:"#3f9a2e",pineapple:"#f2cc40",salsaVerde:"#5a9a30",cotija:"#f6f2e6",butterCube:"#fff0b0",greenChutney:"#3a8a2a",garlicChutney:"#a8401a",friedChilli:"#5a8a2a",podi:"#8a3a18"},da={peanuts:160,chilli:110,lime:3,freshSprouts:30,freshChives:30,cucumber:8,freshScallion:30,friedEgg:1,pepper:120,aonori:140,beniShoga:20,katsuobushi:30,onionBits:80,cilantro:60,pineapple:16,salsaVerde:60,cotija:140,butterCube:3,greenChutney:60,garlicChutney:60,friedChilli:4,podi:60},Hr={peanuts:3,chilli:2,pepper:2,aonori:3,katsuobushi:2,onionBits:3,cilantro:2,salsaVerde:2,cotija:3,greenChutney:2,garlicChutney:2,podi:2},Wy={lime:1,cucumber:1,friedEgg:1,freshSprouts:3,freshChives:3,freshScallion:3,beniShoga:3,pineapple:2,butterCube:1,friedChilli:1},Ch={peanuts:14,chilli:8,pepper:10,lime:1,cucumber:2,friedEgg:1,freshSprouts:4,freshChives:4,freshScallion:4,aonori:16,beniShoga:3,katsuobushi:5,onionBits:10,cilantro:8,pineapple:3,salsaVerde:8,cotija:18,butterCube:1,greenChutney:8,garlicChutney:8,friedChilli:1,podi:8},Rh={mash:"SWIPE DOWN IN THE GREEN",shave:"SWIPE DOWN IN THE GREEN",chop:"SWIPE DOWN IN THE GREEN",crack:"TAP IN THE GREEN",add:"TAP IN THE GREEN TO TIP IT",top:"TAP IN THE GREEN",drop:"TAP IN THE GREEN",plate:"TAP IN THE GREEN TO PLATE"},Xy={mash:["swipe","SWIPE DOWN"],spread:["stir","SWIPE ROUND AND ROUND"],shave:["swipe","SWIPE DOWN"],chop:["swipe","SWIPE DOWN"],crack:["tap","TAP"],add:["tap","TAP"],top:["tap","TAP"],drop:["tap","TAP"],plate:["tap","TAP"],mix:["mix","SWIPE BACK AND FORTH"],cook:["stir","DRAG TO STIR"]},Bn={dx:-.028,dz:.018,base:.056,h:.036};class qy{constructor(t){this.camera=t,this.pos=new A(0,1.6,1.4),this.look=new A(0,1,0),this.goal={pos:new A,look:new A},this.view="stall",this.t=0,this.speed=2.6}go(t,e=2.6){this.view=t,this.speed=e}snapTo(t){this.view=t,this._goal(),this.pos.copy(this.goal.pos),this.look.copy(this.goal.look),this._apply()}_goal(){const t=mv[this.view];let e=t;this.view==="stall"&&(e={...t,yaw:t.yaw+Math.sin(this.t*.12)*.5}),this.view==="beauty"&&(e={...t,yaw:Math.sin(this.t*.25)*.6}),xv(this.camera,e,this.goal,1.08)}_apply(){this.camera.position.copy(this.pos),this.camera.lookAt(this.look)}update(t){this.t+=t,this._goal();const e=1-Math.exp(-t*this.speed);this.pos.lerp(this.goal.pos,e),this.look.lerp(this.goal.look,e),this._apply()}}class xo{constructor(t,e,n=new URLSearchParams){this.stage=t,this.scene=t.scene,this.camera=t.camera,this.cam=new qy(this.camera),this.params=n,this.stalls={},this._setStall("bangkok"),this.cookers={wok:new Uu,teppan:new Nu,takopan:new r1,grill:new ny,kadai:new __,tawa:new y_},this.cooker=null,this._setCooker("wok"),this.ladle=new t_,this.puffs=new Ey,this.pancake=new k1,this.tortilla=new Sh,this.dosa=new Sh(sy),this.scene.add(this.ladle.group,this.puffs.group,this.pancake.group,this.tortilla.group,this.dosa.group),this.egg=new rt(Gu(),new bt({color:15323046,roughness:.55,metalness:0})),this.egg.castShadow=!0,this.egg.visible=!1,this.scene.add(this.egg),this.audio=new zy,this.prefs=Hy(),this.audio.setOn(this.prefs.sound),this.hud=new Ly(e,{onStart:r=>{this.audio.unlock(),this.start(r)},onOpen:r=>{this.audio.unlock(),By(r,this._progress())&&(this.audio.chime(3),this.menu())},onAction:r=>this.action(r),onHold:(r,o)=>this.hold(r,o),onFlame:r=>{this.audio.unlock(),this.stove.flame=r},onGarnish:r=>{this.garnishSel=r,this._garnishPortion(r)},onSound:()=>{this.audio.unlock(),this.prefs.sound=!this.prefs.sound,this.audio.setOn(this.prefs.sound),this.hud.setSound(this.prefs.sound),Gy(this.prefs)},onMenu:()=>this.menu()}),this.hud.setSound(this.prefs.sound),this.raycaster=new nv,this.ndc=new K,this._bindPointer(t.renderer.domElement),this.stove=dh(),this.sim=fh(1400),this.mode="menu",this.time=0,this.dish=null;const s=n.get("dish");s&&Hs[s]?this.start(s):this.menu(),this.cam.snapTo(this.cam.view)}menu(){this.mode="menu",this._teardown(),this.hud.clearPlay(),this.hud.hideCard(),this.hud.showMenu(es,Hs,this._progress()),this.cam.go("stall",1.2),this._setCooker({osaka:"teppan",cdmx:"teppan",mumbai:"tawa"}[this.stallId]||"wok"),this.stove.flame=.35}_setStall(t){if(this.stallId===t)return;this.stall&&this.scene.remove(this.stall);const e={bangkok:ch,osaka:I_,cdmx:Q1,mumbai:my};this.stalls[t]||(this.stalls[t]=(e[t]||ch)());const{group:n,materials:s}=this.stalls[t];this.stall=n,this.M=s,this.stallId=t,this.scene.add(n)}_setCooker(t){const e=this.cookers[t];this.cooker!==e&&(this.cooker&&this.scene.remove(this.cooker.group),this.cooker=e,this.scene.add(e.group))}_progress(){return Ry(es,Oy(),this.params.get("unlock")==="all")}_teardown(){this.riceDome&&(this.scene.remove(this.riceDome),this.riceDome=null),this.cookers?.tawa&&(this.cookers.tawa.mash=0),this.plateware&&(this.scene.remove(this.plateware),this.plateware=null);for(const t of["foodView","bowls","board"])this[t]&&(this.scene.remove(this[t].group),this[t]=null);this.sim=fh(1400),this.stove=dh(),this.egg.visible=!1,this.cooker.spatula.group.visible=!1,this.ladle.group.visible=!1}start(t){const e=this._progress(),n=e.countries.flatMap(f=>f.dishes.map(d=>({...d,country:f}))).find(f=>f.id===t);if(!n||!n.open||!n.country.open){this.hud.toast("Locked");return}const s=Hs[t];this._setStall(es.find(f=>f.id===s.cuisine)?.stall||"bangkok"),this._setCooker(s.cooker||"wok"),this._teardown(),this.sim.container=this.cooker.container(),this.dish=s,this.mode="play",this.progressBefore=e;const r=s.steps.find(f=>f.verb==="garnish")?.items||[],o=s.steps.filter(f=>f.verb==="shave").map(f=>f.item);this.kinds=[...new Set([...s.bowls,...o,...r])],this.ings=this.kinds.map(f=>({...nn[f],id:f}));const a=s.steps.filter(f=>f.verb==="shave").reduce((f,d)=>f+d.cuts,0),l=this.ings.map(f=>da[f.id]??(o.includes(f.id)?a*8+8:Math.ceil((f.count||10)*1.6))),c=s.steps.find(f=>f.liquid&&f.liquid!=="oil")?.liquid;this.foodView=new I1(this.ings,l,c?On[c].colour:null),this.scene.add(this.foodView.group),this.bowls=new _y(s.bowls,nn,this.M.bowl),this.bowls.layout(this.camera.aspect<1),this.scene.add(this.bowls.group);const h=s.steps.find(f=>f.verb==="chop");h&&this.bowls.bowls.has(h.item)&&this.bowls.fill(h.item,null),this.board=new gy(nn[h?.item||"chives"]),this.scene.add(this.board.group),this.plateware=S_(s.plate?.style||"thai",s.plate||{}),this.scene.add(this.plateware),s.plate?.rice&&this._riceDome(),this.report={pieces:{},chop:0,pours:{},tosses:0,hei:0,garnish:{}},this.snapD=new Float32Array(this.sim.cap).fill(NaN),this._osakaStart(s);const u=es.findIndex(f=>f.id===s.cuisine);this.level={dish:Math.max(1,(es[u]?.dishes||[]).indexOf(s.id)+1),country:Math.max(0,u)},this.presses={},this.garnishSel=r[0],this.stepIndex=-1,this.hud.hideMenu(),this.hud.hideResult(),this.next()}get step(){return this.dish?.steps[this.stepIndex]}_riceDome(){const t=nn.rice,e=70,n=new ai(Cs(t),$n(t),e),s=new ne,r=new dn,o=new $e,a=new A,l=new A(1,1,1),c=$.x+Bn.dx,h=$.z+Bn.dz,u=new st(16250092);for(let m=0;m<e;m++){const x=(m+.5)/e,p=Math.sqrt(x)*Bn.base,g=m*2.39996,M=Bn.h*(1-(p/Bn.base)**2);a.set(c+Math.cos(g)*p,$.wellY+.004+M,h+Math.sin(g)*p),o.set(m*1.3,m*.7,m*2.1),r.setFromEuler(o),s.compose(a,r,l),n.setMatrixAt(m,s),n.setColorAt(m,u)}const f=new rt(new oe(1,24,12,0,Math.PI*2,0,Math.PI/2),$n(t));f.material.vertexColors=!1,f.material.color.set(15723488),f.scale.set(Bn.base*.94,Bn.h*.95,Bn.base*.94),f.position.set(c,$.wellY+.002,h);const d=new jt;d.add(n,f),n.castShadow=n.receiveShadow=f.receiveShadow=!0,this.riceDome=d,this.scene.add(d)}next(){this.step?.verb==="cook"&&this._snapshot(),this._exitStep(),this.stepIndex++;const t=this.step;if(!t)return this.serve();this.stepT=0,this.st={},this.hud.setStep(this.dish.name,t.say,t.hint,this.stepIndex,this.dish.steps.length),this.hud.clearPlay(),this._cues="",this["_enter_"+t.verb].call(this,t),this.tm=Rh[t.verb]?F1(this.level.dish,this.level.country):null,this.tm&&this.hud.showTiming(Rh[t.verb],this.tm.zone);const n=Xy[t.verb],s=t.verb==="cook"&&this.dish.steps.findIndex(r=>r.verb==="cook")===this.stepIndex;n&&(t.verb!=="cook"||s)?(this.hud.showGesture(n[0],n[1]),this.gestureT=2.6):this.hud.hideGesture()}_exitStep(){this.ladle.group.visible=!1,this.st&&(this.st.pouring=!1),this.cooker.spatula.group.visible=!1,this.sim.spatula.on=!1,this.bowls?.highlight([])}_enter_chop(t){this.cam.go("board");const e=this.board;this.st.chop=by(t.cuts,-Je/2,Je/2),e.setGuides(this.st.chop.guides,0),this.hud.setHint("Swipe down anywhere to chop")}_chopSwipe(){const t=this._press(),e=this.st.chop.guides[this.st.chop.next];if(e==null)return;const n=Sy(this.st.chop,e+(1-t)*.03*(Math.random()<.5?-1:1));n&&(this.board.cutAt(this.st.chop.end,n.piece.len),this.board.setGuides(this.st.chop.guides,this.st.chop.next),this.audio.play("chop"),this.hud.toast(n.acc>.85?"Perfect!":n.acc>.5?"Good":"Uneven!",n.acc<=.5),n.done&&(this.report.chop=Ty(this.st.chop),this.st.doneT=.7))}_enter_heat(t){if(this.cam.go(this.cooker.view),this.hud.showFlame(!0),!t.liquid){this.st.dry=!0,this.st.poured=!0;return}this.st.liquid=t.liquid,this.st.poured=!1,this.hud.setActions([{id:"pour",label:"HOLD<br>TO POUR",cls:"pour",hold:!0,disabled:!0}]),this.hud.showPour(On[t.liquid].target),this.ladle.setLiquid(On[t.liquid].colour),this.ladle.group.visible=!0,this.st.amount=0}_enter_pour(t){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.st.liquid=t.liquid,this.st.poured=!1,this.st.amount=0,this.hud.setActions([{id:"toss",label:this.cooker.tossLabel,cls:"round"},{id:"pour",label:"HOLD<br>TO POUR",cls:"pour",hold:!0}]),this.hud.showPour(On[t.liquid].target),this.ladle.setLiquid(On[t.liquid].colour),this.ladle.group.visible=!0}hold(t,e){if(this.audio.unlock(),this._holdVerb(this.step?.verb))return this._holdOsaka(e);t!=="pour"||this.st.poured||(this.st.pouring=e,e&&this.audio.play("plop",{gain:.6}),!e&&this.st.amount>.03&&this._finishPour())}_finishPour(){const t=this.step;this.st.poured=!0,this.st.pouring=!1;const e=On[t.liquid],n=this.st.amount;this.report.pours[t.liquid]=n;const s=kl(n,e.target);this.hud.toast(s>.9?"Spot on!":n<e.target[0]?"A bit light":s>.5?"A bit heavy":"Way too much",s<.6),t.liquid==="oil"||t.liquid==="fryOil"||t.liquid==="butter"?this.stove.oil+=n:(this.stove.sauce+=n,this.stove.sauceLeft+=n,N_(this.stove,n),this.stove.T>120&&this.audio.play("hiss",{gain:.8})),this.hud.enable("pour",!1),this.st.doneT=t.verb==="pour"?.6:null}_enter_add(t){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.st.left=[...t.items],this.bowls.highlight(this.st.left),this.hud.setActions([{id:"toss",label:this.cooker.tossLabel,cls:"round"}])}_addItem(t,e=1){const n=nn[t],s=this.kinds.indexOf(t),r=this.sim,a=this.bowls.bowls.get(t).home.x>0?1:-1;let l=0;if(n.shape==="strand"){const u=Math.round(n.strands*e);for(let f=0;f<u;f++){const d=this.cooker.spawn(f,u,a);s_(r,s,n.points,n.spacing,d.x,d.y+f*.003,d.z,n.r,n.mass)}l=n.strands*n.points*n.mass*.2}else{const u=Math.round(n.count*e);for(let f=0;f<u;f++){const d=this.cooker.spawn(f,u,a);ss(r,s,d.x,d.y,d.z,n.r,n.mass,-a*1.5*Math.random(),-.3,-.2)}l=u*n.mass}ph(this.stove,l*.4);const c=this.stove.T>140&&this.stove.oil>.1,h=this.cooker.dropPoint();c&&(this.puffs.spark.burst(h.x,h.y+.01,h.z,30),this.audio.play("hiss",{gain:.5})),this.audio.play("plop")}_enter_cook(t){this.cam.go(this.cooker.view),this.hud.showFlame(!0);const e=t.focus;this.st.focus=e.map(s=>this.kinds.indexOf(s));const n=e.map(s=>nn[s].name.split(" ").pop().toLowerCase());this.hud.showMeter(n.length>1?n.slice(0,-1).join(", ")+" and "+n.at(-1):nn[e[0]].name,[.9,1.3]),this.hud.setActions([{id:"toss",label:this.cooker.tossLabel,cls:"round"},{id:"next",label:"DONE",disabled:!0}])}_press(){if(!this.tm)return 1;const{q:t}=B1(this.tm,Math.random());this.hud.setZone(this.tm.zone),this.hud.timingFlash(t>.6);const e=this.step.verb;return(this.presses[e]||(this.presses[e]=[])).push(t),this.hud.hideGesture(),t}_snapshot(){const t=this.sim;for(let e=0;e<t.n;e++)this.st.focus.includes(t.kind[e])&&(this.snapD[e]=t.d[e])}_focusState(){const t=this.sim;let e=0,n=0,s=0,r=0;for(let o=0;o<t.n;o++){const a=t.kind[o];if(!this.st.focus.includes(a))continue;const l=this.ings[a],[c,h]=l.band;e+=.9+(t.d[o]-c)/(h-c)*.4,s+=t.c[o],r=Math.max(r,t.c[o]),n++}return n?{v:e/n,c:s/n,maxC:r}:{v:0,c:0,maxC:0}}_enter_crack(t){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.bowls.fill(t.item,null),this.egg.visible=!0;const e=this.cooker.dropPoint();this.egg.position.set(e.x+.03,e.y+.09,e.z+.03),this.st.eggY=e.y+.09,this.egg.rotation.set(0,0,1.3),this.st.taps=0,this.st.bump=0,this.hud.setActions([{id:"toss",label:this.cooker.tossLabel,cls:"round"}])}_crackTap(){if(this.st.taps>=3)return;const t=this._press();if(this.st.taps++,this.st.bump=1,this.audio.play("crack",{gain:.6+this.st.taps*.2}),t<.45?(this.st.shell=!0,this.hud.toast("Shell in it!",!0)):this.hud.toast(t>.9?"Clean!":"Good"),this.st.taps<3)return;this.st.shell&&!this.report.notes.includes("There is shell in the egg. Crack it cleanly.")&&this.report.notes.push("There is shell in the egg. Crack it cleanly."),this.egg.visible=!1;const e=this.kinds.indexOf(this.step.item),n=nn[this.step.item];for(let s=0;s<n.count;s++){const r=Math.random()*Math.PI*2,o=Math.random()*.03,a=this.cooker.dropPoint();ss(this.sim,e,a.x+.02+Math.cos(r)*o,a.y+.02+Math.random()*.02,a.z+.02+Math.sin(r)*o,n.r,n.mass,0,-.4,0)}ph(this.stove,n.count*n.mass*.3),this.stove.T>140&&this.audio.play("hiss",{gain:.4}),this.st.doneT=.5}_enter_plate(){this.cam.go(this.cooker.view),this.hud.showFlame(!0),this.hud.setActions([{id:"plate",label:"TIP ONTO THE PLATE"}])}_plate(){if(this.st.plated)return;const t=this._press();if(this.report.finish.plate=t,this.st.plateQ=t,t<.5?this.hud.toast("Messy!",!0):t>.9&&this.hud.toast("Neat!"),this.st.plated=!0,this.stove.flame=0,this.hud.showFlame(!1),this.hud.setActions([]),this.cooker.spatula.group.visible=!1,this.sim.spatula.on=!1,!this._plateOsaka()){const e=this.dish.plate?.rice?Bn:null,n=this.st.plateQ??1;a_(this.sim,e?{x:$.x+e.dx,z:$.z+e.dz,base:e.base,h:e.h}:null,!!this.dish.plate?.mould&&n>=.5,.36+(1-n)*.3)}this.cooker.toss(),this.audio.play("whoosh"),this.audio.play("clank",{gain:.6}),this.cam.go("plate",3),this.st.doneT=1.3,this.plateSteam=30}_enter_garnish(t){this.cam.go("plate"),this.st.items=t.items,this.hud.setHint("Tap a garnish to add it. Tap again for more"),this._garnishHud(),this.hud.setActions([{id:"serve",label:"SERVE"}]),this.st.spawnT=0}_garnishHud(){if(this.step?.verb!=="garnish")return;const t=this.step.items.map(e=>({id:e,name:nn[e].name,css:Vy[e]||"#ccc"}));this.hud.showGarnish(t,this.report.garnish,this.garnishSel),this._cues=""}_garnishPortion(t){this.garnishSel=t;const e=Ch[t]||1,n=this._foodCentre();for(let s=0;s<e;s++){const r=Math.random()*Math.PI*2,o=Math.sqrt(Math.random())*(Hr[t]?.05:.035);this.st.spawnT=0,this._garnishAt(new A(n.x+Math.cos(r)*o,$.wellY,n.z+Math.sin(r)*o),!Hr[t],!0)}}_foodCentre(){let t=0,e=0,n=0;for(let s=0;s<this.sim.n;s++)this.ings[this.sim.kind[s]].garnish||(t+=this.sim.x[s*3],e+=this.sim.x[s*3+2],n++);return n?{x:t/n,z:e/n}:{x:$.x,z:$.z}}_garnishAt(t,e,n=!1){const s=this.garnishSel;if(!s||!t)return;const r=t.x-$.x,o=t.z-$.z,a=Math.hypot(r,o);if(a>$.r*1.15)return;const l=a>$.r-.02?($.r-.02)/a:1,c=$.x+r*l,h=$.z+o*l,u=nn[s],f=this.kinds.indexOf(s),d=this.report.garnish[s]||0;if(d>=da[s]){e&&this.hud.toast("That will do!");return}let m=0;const x=$.wellY+(this.dish.plate?.rice?.12:.09);if(Hr[s]){if(!e&&this.st.spawnT>0)return;this.st.spawnT=.035,m=n?1:Hr[s];for(let p=0;p<m;p++)ss(this.sim,f,c+(Math.random()-.5)*.02,x+Math.random()*.02,h+(Math.random()-.5)*.02,u.colR??u.r,u.mass);this.audio.play("sprinkle",{gain:.8})}else if(e){m=Math.min(n?1:Wy[s]||1,da[s]-d);for(let p=0;p<m;p++){const g=ss(this.sim,f,c+(Math.random()-.5)*.015,x-.01+p*.012,h+(Math.random()-.5)*.015,u.colR??u.r,u.mass);if(g>=0&&["friedEgg","disc","wedge"].includes(u.shape)){const M=Math.random()*Math.PI*2;this.sim.q.set([0,Math.sin(M/2),0,Math.cos(M/2)],g*4),this.sim.flat[g]=1}}this.audio.play("plop",{gain:.5})}m&&(this.report.garnish[s]=d+m,this._garnishHud())}serve(){this.mode="served",this.hud.clearPlay(),this.hud.hideCard(),this.cooker.spatula.group.visible=!1,this.ladle.group.visible=!1;const t={};for(let d=0;d<this.sim.n;d++){const m=this.ings[this.sim.kind[d]];if(m.garnish)continue;const x=t[m.id]||(t[m.id]={d:[],c:[]});this.sim.strand[d]>=0&&d>0&&this.sim.strand[d-1]===this.sim.strand[d]||(x.d.push(Number.isNaN(this.snapD[d])?this.sim.d[d]:this.snapD[d]),x.c.push(this.sim.c[d]))}this._osakaReport(t);const e=d=>d.reduce((m,x)=>m+x,0)/d.length;this.presses.crack?.length&&(this.report.skills.crack=e(this.presses.crack));const n=[...this.presses.add||[],...this.presses.top||[],...this.presses.drop||[]];n.length&&(this.report.skills.tip=e(n)),this.report.pieces=t,this.report.tosses=this.stove.tosses,this.report.hei=this.stove.hei;const s=es.find(d=>d.id===this.dish.cuisine),r=V_(this.dish,nn,On,this.report,s);this.grade=r;const o=Ol()[this.dish.id],a=Fy(this.dish.id,r.total,r.stars),l=this._progress(),c=Py(this.progressBefore,l),h=l.countries.find(d=>d.id===this.dish.cuisine),u=h?.dishes[h.dishes.findIndex(d=>d.id===this.dish.id)+1],f={dishes:c.dishes.map(d=>Hs[d].name),stamp:c.stamp,need:u&&!u.open?Hs[u.id].name:null,next:u&&u.open?u.id:null};this.cam.go("beauty",1.4),this.stage.lights.plateKey.intensity=1.8,this.plateSteam=40,this.serveT=1.6,this._pendingResult=()=>{this.hud.showResult(this.dish,r,o,a,f,s),this.audio.chime(r.stars)}}action(t){if(this.audio.unlock(),this.audio.play("tick"),t==="toss")return this.doToss();if(t==="flip")return this._doFlip();if(t==="fold")return this._doFold();if(t==="turn")return this._doTurn();if(t==="next")return this.step?.verb==="mix"&&this._mixDone(this.step),this.step?.verb==="turn"&&this._turnDone(),this.step?.verb==="mash"&&this._mashDone(this.step),this.step?.verb==="spread"&&this._spreadDone(this.step),this.next();if(t==="plate")return this._plate();if(t==="serve")return this.next();if(t==="again")return this.stage.lights.plateKey.intensity=0,this.start(this.dish.id);if(t==="menu")return this.stage.lights.plateKey.intensity=0,this.menu();if(t.startsWith("go:"))return this.stage.lights.plateKey.intensity=0,this.start(t.slice(3))}doToss(){if(!this.sim.container.heated||this.time-(this.lastToss||-9)<.45)return;this.lastToss=this.time;const t=r_(this.sim,this.cooker.kind==="kadai"?.4:1);if(this.cooker.toss(),this.audio.play("clank",{gain:.5}),this.audio.play("whoosh",{gain:.7}),!t)return;this.stove.tosses++;const e=this.cooker.kind==="wok";this.stove.T>200&&this.stove.flame>.55?(this.stove.hei++,e?(this.stove.flare=1,this.audio.play("flare",{gain:.8})):this.audio.play("hiss",{gain:.35}),(this.stove.hei<=3||this.stove.hei%3===0)&&this.hud.toast(e?"Wok hei!":"Nice sear!")):this.stove.T>150&&e&&(this.stove.flare=.35)}_bindPointer(t){this.pointer={down:!1,x:0,y:0,t:0,hist:[]};const e=s=>{const r=t.getBoundingClientRect();return this.ndc.set((s.clientX-r.left)/r.width*2-1,-((s.clientY-r.top)/r.height)*2+1),{x:s.clientX/r.width,y:s.clientY/r.height}};t.addEventListener("pointerdown",s=>{this.audio.unlock();try{t.setPointerCapture?.(s.pointerId)}catch{}const r=e(s);this.pointer.down=!0,this.pointer.hist=[{...r,t:performance.now()}],this._pointer("down")}),t.addEventListener("pointermove",s=>{const r=e(s);if(this.pointer.down){const o=this.pointer.hist;o.push({...r,t:performance.now()}),o.length>6&&o.shift(),this._flick()}this._pointer("move")});const n=()=>{this.pointer.down=!1,this._pointer("up")};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n)}_flick(){const t=this.pointer.hist,e=this.step?.verb;if(t.length<3||!(this._wokStep()||e==="flip"||e==="turn"))return;const n=t[0],s=t[t.length-1],r=(s.t-n.t)/1e3;if(r<=0||r>.25)return;const o=(s.y-n.y)/r,a=(s.x-n.x)/r;o<-2.4&&Math.abs(o)>Math.abs(a)*1.8&&(e==="flip"?this._doFlip():e==="turn"?this._doTurn():this.doToss(),this.pointer.hist=[])}_wokStep(){const t=this.step?.verb;return this.mode==="play"&&(t==="cook"||t==="add"||t==="crack"||t==="pour"||t==="heat")}_planeHit(t){this.raycaster.setFromCamera(this.ndc,this.camera);const e=this.raycaster.ray;if(Math.abs(e.direction.y)<1e-4)return null;const n=(t-e.origin.y)/e.direction.y;return n<=0?null:e.origin.clone().addScaledVector(e.direction,n)}_swipedDown(){const t=this.pointer.hist;if(t.length<2)return!1;const e=t[0],n=t[t.length-1];return n.y-e.y>.06&&Math.abs(n.y-e.y)>Math.abs(n.x-e.x)*1.2}_pointer(t){if(this.mode!=="play")return;const e=this.step?.verb;if(this.raycaster.setFromCamera(this.ndc,this.camera),e==="chop"){t==="down"&&(this.st.swiped=!1),t==="move"&&this.pointer.down&&!this.st.swiped&&this._swipedDown()&&(this.st.swiped=!0,this._chopSwipe());return}if(e==="add"&&t==="down"){const n=this.bowls.pick(this.raycaster),s=n&&this.st.left.includes(n)?n:this.st.left[0];if(s){const r=this._press();this.st.left=this.st.left.filter(o=>o!==s),this.bowls.highlight(this.st.left),r<.45?this.hud.toast("Spilled some!",!0):r>.9&&this.hud.toast("Nice!"),this.bowls.tip(s,this.cooker.dropPoint(),()=>{this._addItem(s,r<.45?.7:1),this.st.left.length||(this.st.doneT=.8)});return}}if(e==="crack"&&t==="down"){this._crackTap();return}if(e==="mix"){t==="down"?this.st.anchor=null:t==="move"&&this.pointer.down&&this._mixMove();return}if((e==="top"||e==="drop")&&t==="down"){this._tapTopping();return}if(e==="turn"&&t==="down"){this._doTurn();return}if(e==="mash"){t==="down"&&(this.st.swiped=!1),t==="move"&&this.pointer.down&&!this.st.swiped&&this._swipedDown()&&(this.st.swiped=!0,this._mash());return}if(e==="spread"){t==="down"?this.st.anchor=null:t==="move"&&this.pointer.down&&this._spreadMove();return}if(e==="shave"){t==="down"&&(this.st.swiped=!1),t==="move"&&this.pointer.down&&!this.st.swiped&&this._swipedDown()&&(this.st.swiped=!0,this._shave());return}if(e==="plate"&&t==="down"){this._plate();return}if(e==="garnish"){t==="down"?this._garnishAt(this._planeHit($.wellY+.035),!0):t==="move"&&this.pointer.down&&this._garnishAt(this._planeHit($.wellY+.035),!1);return}if(!(this.cooker?.pointer&&this.cooker.pointer(t,this))&&this._wokStep()){if(t==="up"||!this.pointer.down){this.st.stir=null,this.sim.spatula.on=!1;return}const n=this.cooker.surfaceRay(this.raycaster.ray);this.st.stir=n;const s=this.sim.spatula;n?(s.on||(s.px=n.x,s.py=n.y,s.pz=n.z),s.x=n.x,s.y=n.y+.004,s.z=n.z,s.on=!0):s.on=!1}}onResize(){this.bowls?.layout(this.camera.aspect<1)}update(t){this.time+=t;const e=this.stove,n=this.sim;U_(e,t),p_(n,t),k_(n,e,t,this.ings||[]),this.dish&&this._osakaUpdate(t),this._trompoTick(t),this.mode==="play"&&this._updateStep(t),this.tm&&this.mode==="play"&&(this.tm.t+=t,this.hud.setTiming(Yu(this.tm))),this.gestureT>0&&(this.gestureT-=t,this.gestureT<=0&&this.hud.hideGesture()),this.mode==="served"&&this.serveT>0&&(this.serveT-=t,this.serveT<=0&&this._pendingResult&&(this._pendingResult(),this._pendingResult=null)),this.cooker.update(t,{flame:e.flame,flare:e.flare,oil:e.oil,sauce:n.container.heated?e.sauceLeft:0,T:e.T},this.sim.spatula.on?this.st?.stir:null,this.pointer.down,n),this.foodView&&this.foodView.update(n,t),this.bowls?.update(t),this.board?.update(t),this.mode==="play"&&this._wokStep()&&(this.cooker.spatula.group.visible=!!this.sim.spatula.on),this.ladle.update(t,!!this.st?.pouring,1-(this.st?.amount||0),this.cooker.dropPoint()),this.egg.visible&&(this.st.bump=Math.max(0,(this.st.bump||0)-t*6),this.egg.position.y=this.st.eggY-Math.sin(this.st.bump*Math.PI)*.05),this._steam(t),this.puffs.update(t),this.cam.update(t),this.hud.setFlame?.(e.flame,e.T),this.audio.update(t,Math.max(z_(n,e),this.dish&&this.mode==="play"?this._osakaSizzle():0),e.flame)}_updateStep(t){this.stepT+=t;const e=this.step,n=this.st;if(this._osakaStep(t),e.verb==="fold"&&!n.folded&&e.by!=="crisp"&&this._foldMeter(),this._mumbaiStep(),this._cueTick(),n.doneT!=null&&(n.doneT-=t,n.doneT<=0)){n.doneT=null,e.verb==="chop"&&(this.bowls.bowls.has(e.item)&&this.bowls.fill(e.item,nn[e.item],14),this.board.sweep()),this.next();return}if((e.verb==="heat"||e.verb==="pour")&&!n.poured){if(n.pouring&&(n.held=(n.held||0)+t,n.amount=Math.min(1.1,n.amount+$u(On[e.liquid].rate,n.held)*t),n.amount>=1.1&&this._finishPour(),e.verb==="pour"&&this.stove.T>120&&Math.random()<t*8)){const s=this.cooker.dropPoint();this.puffs.emit(s.x,s.y,s.z,{size:.05,alpha:.3})}this.hud.setPour(n.amount)}if(e.verb==="heat"&&n.dry?this.stove.T>170&&n.doneT==null?(this.hud.toast("Hot!"),n.doneT=.5):this.stove.T<170&&this.hud.setHint(this.stove.flame>.5?"Nearly there...":e.hint):e.verb==="heat"&&(this.hud.enable("pour",this.stove.flame>.3&&!n.poured),n.poured?this.stove.T<165?this.hud.setHint("Wait for the oil to shimmer. Keep the flame up"):n.doneT==null&&(this.hud.toast("Smoking hot!"),n.doneT=.5):this.hud.setHint(this.stove.flame>.3?"Now hold to pour the oil. Let go in the green":e.hint)),e.verb==="cook"){const s=this._focusState(),r=s.maxC>(e.char?.6:.35)?"Burning!":s.v<.45?"Raw":s.v<.9?"Cooking":s.v<=1.3?"Perfect":s.v<1.6?"Overdone":"Way over";let o="";e.char?o=s.c<.08?"Leave them still to char":s.c<.4?"Nice char. Now toss":"Too far! Toss now":s.maxC>.12?o="It is catching! Keep it moving":this.stove.T<150&&s.v<.9&&(o="The wok is too cool. More flame"),this.hud.setMeter(s.v,r,o),this.hud.enable("next",this.stepT>(e.minTime||0))}}_cueTick(){const t=this.step,e=this.st,n=t.verb,s=[];let r=!1,o=[];const a=()=>{const c=this.hud.meter.querySelector(".mark"),h=parseFloat(c?.style.left||"0");return h>=45&&h<=65};if(n==="heat"&&(this.stove.flame<.3?r=!0:e.poured||s.push("pour")),["pour","pancake","fill","drizzle"].includes(n)&&!e.poured&&s.push("pour"),n==="cook"&&(this.stove.T<150&&(r=!0),this.stepT>(t.minTime||0)&&a()?s.push("next"):this.stove.T>200&&s.push("toss")),n==="flip"&&!e.flipped&&(a()&&s.push("flip"),this.stove.T<150&&(r=!0)),n==="turn"&&(this.cooker.balls?.length&&Math.min(...this.cooker.balls.map(c=>c.turns))>=4?s.push("next"):a()&&s.push("turn"),this.stove.T<150&&(r=!0)),(n==="mix"||n==="mash"||n==="spread")&&a()&&s.push("next"),n==="fold"&&!e.folded&&a()&&s.push("fold"),n==="plate"&&s.push("plate"),n==="garnish"){for(const[c,[h]]of Object.entries(this.dish.garnish||{}))(this.report.garnish[c]||0)<h&&o.push(c);o.length||s.push("serve")}const l=s.join()+"|"+r+"|"+o.join();l!==this._cues&&(this._cues=l,this.hud.cue(s),this.hud.cueFlame(r),this.hud.cueChips(o))}_steam(t){const e=this.stove,n=this.sim;if(this._steamT=(this._steamT||0)-t,!(this._steamT>0)){if(this._steamT=.06,n.container.heated&&n.n>0&&e.T>110){const s=Math.min(1,(e.T-110)/120);if(Math.random()<s*.5){const o=Math.floor(Math.random()*n.n);this.puffs.emit(n.x[o*3],n.x[o*3+1]+.01,n.x[o*3+2],{size:.035,alpha:.08+s*.1,rise:.16})}let r=0;for(let o=0;o<n.n;o+=3)n.c[o]>.1&&n.contact[o]&&r++;if(r>2&&Math.random()<.6){const o=Math.floor(Math.random()*n.n);this.puffs.emit(n.x[o*3],n.x[o*3+1]+.01,n.x[o*3+2],{colour:4867136,size:.05,alpha:.35,rise:.2})}}this.plateSteam>0&&(this.plateSteam-=.06,Math.random()<.5&&this.puffs.emit($.x+(Math.random()-.5)*.08,$.wellY+.04,$.z+(Math.random()-.5)*.08,{size:.03,alpha:Math.min(.16,this.plateSteam/90),rise:.09,life:2}))}}autoStir(t,e=1.2){const n=this.sim;let s=0,r=0;for(;s<t;){const{x:o,y:a,z:l}=this.cooker.stirPoint(s);n.spatula.on||(n.spatula.px=o,n.spatula.py=a,n.spatula.pz=l),n.spatula.on=!0,this.st.stir={x:o,y:a,z:l},n.spatula.x=o,n.spatula.y=a+.004,n.spatula.z=l,this.pointer.down=!0,e&&s-r>e&&(r=s,this.lastToss=-9,this.doToss()),this.update(1/60),s+=1/60}n.spatula.on=!1,this.pointer.down=!1}autoCook(t=99,{ruin:e=!1}={}){const n=o=>(...a)=>(this.tm&&yh(this.tm),o.apply(this,a)),s=this._press;this._press=n(s),this.mode!=="play"&&this.start(this.dish?.id||"padthai");let r=0;for(;this.mode==="play"&&this.stepIndex<t&&r++<60;){const o=this.step;if(["mix","pancake","fill","drizzle","top","drop","flip","turn"].includes(o.verb)){this._osakaAuto(o);continue}if(o.verb==="fold"){const a=this.cake.p,l=o.by==="crisp"?()=>this.cake.d[this.cake.down]>=(a.band[0]+a.band[1])/2:()=>this.cake.set>=(a.meltBand[0]+a.meltBand[1])/2;for(let c=0;c<1800&&!l();c++)this.update(1/60);this._doFold();for(let c=0;c<60;c++)this.update(1/60);continue}if(o.verb==="mash"||o.verb==="spread"){const a=Math.round((o.strokes[0]+o.strokes[1])/2);for(let l=0;l<a;l++){o.verb==="mash"?(this.tm&&yh(this.tm),this._mash()):(this.st.strokes++,this.cake.spread=Math.min(1.35,this.cake.spread+.1));for(let c=0;c<8;c++)this.update(1/60)}this.action("next");continue}if(o.verb==="shave"){for(let a=0;a<o.cuts;a++){this._shave();for(let l=0;l<12;l++)this.update(1/60)}for(let a=0;a<60;a++)this.update(1/60);continue}if(o.verb==="chop"){for(let a=0;a<o.cuts;a++)this._chopSwipe();this.st.doneT=.01,this.update(1/60),this.update(1/60)}else if(o.verb==="heat"&&!o.liquid){this.stove.flame=.9;for(let a=0;a<900&&this.step===o;a++)this.update(1/60)}else if(o.verb==="heat"||o.verb==="pour"){this.stove.flame=.9;const a=On[o.liquid];this.hold("pour",!0);const l=(a.target[0]+a.target[1])/2;for(;this.st.amount<l;)this.update(1/60);this.hold("pour",!1);for(let c=0;c<400&&this.step===o;c++)this.update(1/60)}else if(o.verb==="add"){for(const a of[...this.st.left])this.st.left=this.st.left.filter(l=>l!==a),this.bowls.tip(a,this.cooker.dropPoint(),()=>{this._addItem(a),this.st.left.length||(this.st.doneT=.8)});for(let a=0;a<200&&this.step===o;a++)this.update(1/60)}else if(o.verb==="cook"){let a=0;for(;a<30;){if(o.char){this.sim.spatula.on=!1;for(let c=0;c<100;c++)this.update(1/60);a+=1.6}this.autoStir(.5),a+=.5;const l=this._focusState();if(!e&&l.v>=1&&a>=(o.minTime||0)||e&&a>20)break}this.next()}else if(o.verb==="crack"){this._crackTap(),this._crackTap(),this._crackTap();for(let a=0;a<60&&this.step===o;a++)this.update(1/60)}else if(o.verb==="plate"){this._plate();for(let a=0;a<120&&this.step===o;a++)this.update(1/60)}else if(o.verb==="garnish"){for(const[a,[l,c]]of Object.entries(this.dish.garnish||{})){const h=(l+c)/2,u=Ch[a]||1,f=Math.max(h>0?1:0,Math.round(h/u));for(let d=0;d<f;d++){this._garnishPortion(a);for(let m=0;m<6;m++)this.update(1/60)}}for(let a=0;a<60;a++)this.update(1/60);t>this.stepIndex&&this.next()}}this._press=s}}Object.assign(xo.prototype,V1);Object.assign(xo.prototype,W1);Object.assign(xo.prototype,ay);const Ku=document.getElementById("view"),Zu=new URLSearchParams(location.search),Yy=Zu.has("lo")||(navigator.hardwareConcurrency||8)<=4,Gn=gv(Ku,{lowPower:Yy}),us=new xo(Gn,document.getElementById("ui"),Zu);function vo(){const i=window.innerWidth,t=window.innerHeight;i>0&&t>0&&Gn.resize(i,t),us.onResize()}window.addEventListener("resize",vo);window.addEventListener("orientationchange",()=>setTimeout(vo,120));vo();let Ph=performance.now();function Ju(i){const t=Math.min(.05,(i-Ph)/1e3);Ph=i,us.update(t),Gn.render(),requestAnimationFrame(Ju)}requestAnimationFrame(Ju);const $y="http://localhost:5699/shot";window.shot=async function(t="shot",e={}){const n=e.w??390,s=e.h??844,r=Gn.renderer.getPixelRatio();Gn.renderer.setPixelRatio(e.ratio??2),Gn.resize(n,s),us.onResize(n,s),e.view&&us.cam.snapTo(e.view);const o=Math.max(1,e.settle??30);for(let l=0;l<o;l++)us.update(1/60);Gn.render();const a=Ku.toDataURL("image/png");Gn.renderer.setPixelRatio(r),window.innerWidth>0&&vo();try{return await(await fetch($y,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:t,dataURL:a})})).json()}catch(l){return{ok:!1,error:String(l)}}};window.game=us;window.stage=Gn;
