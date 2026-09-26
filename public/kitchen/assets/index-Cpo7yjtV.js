(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ia="169",eu=0,_l=1,nu=2,Xc=1,qc=2,Ln=3,Fn=0,Ie=1,fe=2,Un=0,ki=1,Xi=2,vl=3,xl=4,iu=5,ai=100,su=101,ru=102,ou=103,au=104,lu=200,cu=201,hu=202,uu=203,Bo=204,ko=205,fu=206,du=207,pu=208,mu=209,gu=210,_u=211,vu=212,xu=213,Mu=214,Go=0,Ho=1,Vo=2,qi=3,Wo=4,Xo=5,qo=6,Yo=7,Yc=0,yu=1,Su=2,$n=0,$c=1,Kc=2,Zc=3,Da=4,bu=5,Jc=6,jc=7,Qc=300,Yi=301,$i=302,$o=303,Ko=304,Or=306,Ls=1e3,ci=1001,Zo=1002,He=1003,wu=1004,Vs=1005,fn=1006,Zr=1007,hi=1008,On=1009,th=1010,eh=1011,Is=1012,Ua=1013,ui=1014,xn=1015,Nn=1016,Na=1017,Fa=1018,Ki=1020,nh=35902,ih=1021,sh=1022,pn=1023,rh=1024,oh=1025,Gi=1026,Zi=1027,Oa=1028,za=1029,ah=1030,Ba=1031,ka=1033,yr=33776,Sr=33777,br=33778,wr=33779,Jo=35840,jo=35841,Qo=35842,ta=35843,ea=36196,na=37492,ia=37496,sa=37808,ra=37809,oa=37810,aa=37811,la=37812,ca=37813,ha=37814,ua=37815,fa=37816,da=37817,pa=37818,ma=37819,ga=37820,_a=37821,Tr=36492,va=36494,xa=36495,lh=36283,Ma=36284,ya=36285,Sa=36286,Tu=3200,Eu=3201,ch=0,Au=1,Yn="",on="srgb",Zn="srgb-linear",Ga="display-p3",zr="display-p3-linear",Cr="linear",le="srgb",Rr="rec709",Pr="p3",xi=7680,Ml=519,Cu=512,Ru=513,Pu=514,hh=515,Lu=516,Iu=517,Du=518,Uu=519,ba=35044,ws=35048,yl="300 es",Dn=2e3,Lr=2001;class ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sl=1234567;const Ts=Math.PI/180,Ji=180/Math.PI;function Mn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Se(i,t,e){return Math.max(t,Math.min(e,i))}function Ha(i,t){return(i%t+t)%t}function Nu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Fu(i,t,e){return i!==t?(e-i)/(t-i):0}function Es(i,t,e){return(1-e)*i+e*t}function Ou(i,t,e,n){return Es(i,t,1-Math.exp(-e*n))}function zu(i,t=1){return t-Math.abs(Ha(i,t*2)-t)}function Bu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ku(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Gu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Hu(i,t){return i+Math.random()*(t-i)}function Vu(i){return i*(.5-Math.random())}function Wu(i){i!==void 0&&(Sl=i);let t=Sl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Xu(i){return i*Ts}function qu(i){return i*Ji}function Yu(i){return(i&i-1)===0&&i!==0}function $u(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ku(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zu(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ju={DEG2RAD:Ts,RAD2DEG:Ji,generateUUID:Mn,clamp:Se,euclideanModulo:Ha,mapLinear:Nu,inverseLerp:Fu,lerp:Es,damp:Ou,pingpong:zu,smoothstep:Bu,smootherstep:ku,randInt:Gu,randFloat:Hu,randFloatSpread:Vu,seededRandom:Wu,degToRad:Xu,radToDeg:qu,isPowerOfTwo:Yu,ceilPowerOfTwo:$u,floorPowerOfTwo:Ku,setQuaternionFromProperEuler:Zu,normalize:se,denormalize:dn};class Z{constructor(t=0,e=0){Z.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,s,r,o,a,l,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],p=s[3],m=s[6],y=s[1],v=s[4],M=s[7],L=s[2],T=s[5],E=s[8];return r[0]=o*_+a*y+l*L,r[3]=o*p+a*v+l*T,r[6]=o*m+a*M+l*E,r[1]=c*_+h*y+u*L,r[4]=c*p+h*v+u*T,r[7]=c*m+h*M+u*E,r[2]=f*_+d*y+g*L,r[5]=f*p+d*v+g*T,r[8]=f*m+d*M+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Jr.makeScale(t,e)),this}rotate(t){return this.premultiply(Jr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jr=new Wt;function uh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ju(){const i=Ir("canvas");return i.style.display="block",i}const bl={};function Er(i){i in bl||(bl[i]=!0,console.warn(i))}function Qu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function tf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ef(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const wl=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Tl=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ls={[Zn]:{transfer:Cr,primaries:Rr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[on]:{transfer:le,primaries:Rr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[zr]:{transfer:Cr,primaries:Pr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Tl),fromReference:i=>i.applyMatrix3(wl)},[Ga]:{transfer:le,primaries:Pr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Tl),fromReference:i=>i.applyMatrix3(wl).convertLinearToSRGB()}},nf=new Set([Zn,zr]),te={enabled:!0,_workingColorSpace:Zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!nf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ls[t].toReference,s=ls[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ls[i].primaries},getTransfer:function(i){return i===Yn?Cr:ls[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(ls[t].luminanceCoefficients)}};function Hi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function jr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mi;class sf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Mi===void 0&&(Mi=Ir("canvas")),Mi.width=t.width,Mi.height=t.height;const n=Mi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Mi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ir("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hi(e[n]/255)*255):e[n]=Hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rf=0;class fh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Mn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qr(s[o].image)):r.push(Qr(s[o]))}else r=Qr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Qr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let of=0;class De extends ts{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=ci,s=ci,r=fn,o=hi,a=pn,l=On,c=De.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Mn(),this.name="",this.source=new fh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Z(0,0),this.repeat=new Z(1,1),this.center=new Z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ls:t.x=t.x-Math.floor(t.x);break;case ci:t.x=t.x<0?0:1;break;case Zo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ls:t.y=t.y-Math.floor(t.y);break;case ci:t.y=t.y<0?0:1;break;case Zo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Qc;De.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,s=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,M=(d+1)/2,L=(m+1)/2,T=(h+f)/4,E=(u+_)/4,P=(g+p)/4;return v>M&&v>L?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=T/n,r=E/n):M>L?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=P/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=E/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-_)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class af extends ts{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new De(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new fh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends af{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class dh extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lf extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let p=1-a;const m=l*f+c*d+h*g+u*_,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const L=Math.sqrt(v),T=Math.atan2(L,m*y);p=Math.sin(p*T)/L,a=Math.sin(a*T)/L}const M=a*y;if(l=l*p+f*M,c=c*p+d*M,h=h*p+g*M,u=u*p+_*M,p===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(t=0,e=0,n=0){R.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(El.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(El.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return to.copy(this).projectOnVector(t),this.sub(to)}reflect(t){return this.sub(to.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const to=new R,El=new yn;class pi{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ws.copy(n.boundingBox)),Ws.applyMatrix4(t.matrixWorld),this.union(Ws)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cs),Xs.subVectors(this.max,cs),yi.subVectors(t.a,cs),Si.subVectors(t.b,cs),bi.subVectors(t.c,cs),Gn.subVectors(Si,yi),Hn.subVectors(bi,Si),jn.subVectors(yi,bi);let e=[0,-Gn.z,Gn.y,0,-Hn.z,Hn.y,0,-jn.z,jn.y,Gn.z,0,-Gn.x,Hn.z,0,-Hn.x,jn.z,0,-jn.x,-Gn.y,Gn.x,0,-Hn.y,Hn.x,0,-jn.y,jn.x,0];return!eo(e,yi,Si,bi,Xs)||(e=[1,0,0,0,1,0,0,0,1],!eo(e,yi,Si,bi,Xs))?!1:(qs.crossVectors(Gn,Hn),e=[qs.x,qs.y,qs.z],eo(e,yi,Si,bi,Xs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wn=[new R,new R,new R,new R,new R,new R,new R,new R],cn=new R,Ws=new pi,yi=new R,Si=new R,bi=new R,Gn=new R,Hn=new R,jn=new R,cs=new R,Xs=new R,qs=new R,Qn=new R;function eo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qn.fromArray(i,r);const a=s.x*Math.abs(Qn.x)+s.y*Math.abs(Qn.y)+s.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),h=n.dot(Qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const cf=new pi,hs=new R,no=new R;class es{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):cf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hs.subVectors(t,this.center);const e=hs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(hs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(no.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hs.copy(t.center).add(no)),this.expandByPoint(hs.copy(t.center).sub(no))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new R,io=new R,Ys=new R,Vn=new R,so=new R,$s=new R,ro=new R;class Va{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){io.copy(t).add(e).multiplyScalar(.5),Ys.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(io);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ys),a=Vn.dot(this.direction),l=-Vn.dot(Ys),c=Vn.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(io).addScaledVector(Ys,f),d}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const n=Tn.dot(this.direction),s=Tn.dot(Tn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,s,r){so.subVectors(e,t),$s.subVectors(n,t),ro.crossVectors(so,$s);let o=this.direction.dot(ro),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,t);const l=a*this.direction.dot($s.crossVectors(Vn,$s));if(l<0)return null;const c=a*this.direction.dot(so.cross(Vn));if(c<0||l+c>o)return null;const h=-a*Vn.dot(ro);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,g,_,p){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,_,p)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/wi.setFromMatrixColumn(t,0).length(),r=1/wi.setFromMatrixColumn(t,1).length(),o=1/wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hf,t,uf)}lookAt(t,e,n){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Wn.crossVectors(n,Ke),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Wn.crossVectors(n,Ke)),Wn.normalize(),Ks.crossVectors(Ke,Wn),s[0]=Wn.x,s[4]=Ks.x,s[8]=Ke.x,s[1]=Wn.y,s[5]=Ks.y,s[9]=Ke.y,s[2]=Wn.z,s[6]=Ks.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],v=n[7],M=n[11],L=n[15],T=s[0],E=s[4],P=s[8],I=s[12],x=s[1],b=s[5],F=s[9],O=s[13],H=s[2],X=s[6],k=s[10],J=s[14],V=s[3],ut=s[7],ft=s[11],dt=s[15];return r[0]=o*T+a*x+l*H+c*V,r[4]=o*E+a*b+l*X+c*ut,r[8]=o*P+a*F+l*k+c*ft,r[12]=o*I+a*O+l*J+c*dt,r[1]=h*T+u*x+f*H+d*V,r[5]=h*E+u*b+f*X+d*ut,r[9]=h*P+u*F+f*k+d*ft,r[13]=h*I+u*O+f*J+d*dt,r[2]=g*T+_*x+p*H+m*V,r[6]=g*E+_*b+p*X+m*ut,r[10]=g*P+_*F+p*k+m*ft,r[14]=g*I+_*O+p*J+m*dt,r[3]=y*T+v*x+M*H+L*V,r[7]=y*E+v*b+M*X+L*ut,r[11]=y*P+v*F+M*k+L*ft,r[15]=y*I+v*O+M*J+L*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+_*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+p*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+m*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],p=t[14],m=t[15],y=u*p*c-_*f*c+_*l*d-a*p*d-u*l*m+a*f*m,v=g*f*c-h*p*c-g*l*d+o*p*d+h*l*m-o*f*m,M=h*_*c-g*u*c+g*a*d-o*_*d-h*a*m+o*u*m,L=g*u*l-h*_*l-g*a*f+o*_*f+h*a*p-o*u*p,T=e*y+n*v+s*M+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=y*E,t[1]=(_*f*r-u*p*r-_*s*d+n*p*d+u*s*m-n*f*m)*E,t[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*m+n*l*m)*E,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*E,t[4]=v*E,t[5]=(h*p*r-g*f*r+g*s*d-e*p*d-h*s*m+e*f*m)*E,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*m-e*l*m)*E,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*E,t[8]=M*E,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*m-e*u*m)*E,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*m+e*a*m)*E,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*E,t[12]=L*E,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*p+e*u*p)*E,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*p-e*a*p)*E,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,_=o*h,p=o*u,m=a*u,y=l*c,v=l*h,M=l*u,L=n.x,T=n.y,E=n.z;return s[0]=(1-(_+m))*L,s[1]=(d+M)*L,s[2]=(g-v)*L,s[3]=0,s[4]=(d-M)*T,s[5]=(1-(f+m))*T,s[6]=(p+y)*T,s[7]=0,s[8]=(g+v)*E,s[9]=(p-y)*E,s[10]=(1-(f+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=wi.set(s[0],s[1],s[2]).length();const o=wi.set(s[4],s[5],s[6]).length(),a=wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],hn.copy(this);const c=1/r,h=1/o,u=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,e.setFromRotationMatrix(hn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Dn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(a===Dn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Lr)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Dn){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,d=(n+s)*h;let g,_;if(a===Dn)g=(o+r)*u,_=-2*u;else if(a===Lr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const wi=new R,hn=new Jt,hf=new R(0,0,0),uf=new R(1,1,1),Wn=new R,Ks=new R,Ke=new R,Al=new Jt,Cl=new yn;class Qe{constructor(t=0,e=0,n=0,s=Qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Al,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qe.DEFAULT_ORDER="XYZ";class Wa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ff=0;const Rl=new R,Ti=new yn,En=new Jt,Zs=new R,us=new R,df=new R,pf=new yn,Pl=new R(1,0,0),Ll=new R(0,1,0),Il=new R(0,0,1),Dl={type:"added"},mf={type:"removed"},Ei={type:"childadded",child:null},oo={type:"childremoved",child:null};class _e extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new R,e=new Qe,n=new yn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Wt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(Pl,t)}rotateY(t){return this.rotateOnAxis(Ll,t)}rotateZ(t){return this.rotateOnAxis(Il,t)}translateOnAxis(t,e){return Rl.copy(t).applyQuaternion(this.quaternion),this.position.add(Rl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pl,t)}translateY(t){return this.translateOnAxis(Ll,t)}translateZ(t){return this.translateOnAxis(Il,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zs.copy(t):Zs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(us,Zs,this.up):En.lookAt(Zs,us,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),Ti.setFromRotationMatrix(En),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(mf),oo.child=t,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,pf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}_e.DEFAULT_UP=new R(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new R,An=new R,ao=new R,Cn=new R,Ai=new R,Ci=new R,Ul=new R,lo=new R,co=new R,ho=new R,uo=new oe,fo=new oe,po=new oe;class an{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),un.subVectors(t,e),s.cross(un);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){un.subVectors(s,e),An.subVectors(n,e),ao.subVectors(t,e);const o=un.dot(un),a=un.dot(An),l=un.dot(ao),c=An.dot(An),h=An.dot(ao),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(o,Cn.y),l.addScaledVector(a,Cn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return uo.setScalar(0),fo.setScalar(0),po.setScalar(0),uo.fromBufferAttribute(t,e),fo.fromBufferAttribute(t,n),po.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(uo,r.x),o.addScaledVector(fo,r.y),o.addScaledVector(po,r.z),o}static isFrontFacing(t,e,n,s){return un.subVectors(n,e),An.subVectors(t,e),un.cross(An).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),An.subVectors(this.a,this.b),un.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return an.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ai.subVectors(s,n),Ci.subVectors(r,n),lo.subVectors(t,n);const l=Ai.dot(lo),c=Ci.dot(lo);if(l<=0&&c<=0)return e.copy(n);co.subVectors(t,s);const h=Ai.dot(co),u=Ci.dot(co);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ai,o);ho.subVectors(t,r);const d=Ai.dot(ho),g=Ci.dot(ho);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ci,a);const p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return Ul.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Ul,a);const m=1/(p+_+f);return o=_*m,a=f*m,e.copy(n).addScaledVector(Ai,o).addScaledVector(Ci,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},Js={h:0,s:0,l:0};function mo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Tt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Ha(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=mo(o,r,t+1/3),this.g=mo(o,r,t),this.b=mo(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=on){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){const n=ph[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}copyLinearToSRGB(t){return this.r=jr(t.r),this.g=jr(t.g),this.b=jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return te.fromWorkingColorSpace(Pe.copy(this),t),Math.round(Se(Pe.r*255,0,255))*65536+Math.round(Se(Pe.g*255,0,255))*256+Math.round(Se(Pe.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Pe.copy(this),e);const n=Pe.r,s=Pe.g,r=Pe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=on){te.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,s=Pe.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(Js);const n=Es(Xn.h,Js.h,e),s=Es(Xn.s,Js.s,e),r=Es(Xn.l,Js.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Tt;Tt.NAMES=ph;let gf=0;class mi extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=ki,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bo,this.blendDst=ko,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bo&&(n.blendSrc=this.blendSrc),this.blendDst!==ko&&(n.blendDst=this.blendDst),this.blendEquation!==ai&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ml&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fe extends mi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=Yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new R,js=new Z;class Ee{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ba,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)js.fromBufferAttribute(this,e),js.applyMatrix3(t),this.setXY(e,js.x,js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=dn(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=dn(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=dn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=dn(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ba&&(t.usage=this.usage),t}}class mh extends Ee{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class gh extends Ee{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Gt extends Ee{constructor(t,e,n){super(new Float32Array(t),e,n)}}let _f=0;const en=new Jt,go=new _e,Ri=new R,Ze=new pi,fs=new pi,Te=new R;class he extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uh(t)?gh:mh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return go.lookAt(t),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Gt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(Ze.min,fs.min),Ze.expandByPoint(Te),Te.addVectors(Ze.max,fs.max),Ze.expandByPoint(Te)):(Ze.expandByPoint(fs.min),Ze.expandByPoint(fs.max))}Ze.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Te.fromBufferAttribute(a,c),l&&(Ri.fromBufferAttribute(t,c),Te.add(Ri)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ee(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new R,l[P]=new R;const c=new R,h=new R,u=new R,f=new Z,d=new Z,g=new Z,_=new R,p=new R;function m(P,I,x){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,I),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const b=1/(d.x*g.y-g.x*d.y);isFinite(b)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(b),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(b),a[P].add(_),a[I].add(_),a[x].add(_),l[P].add(p),l[I].add(p),l[x].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,I=y.length;P<I;++P){const x=y[P],b=x.start,F=x.count;for(let O=b,H=b+F;O<H;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const v=new R,M=new R,L=new R,T=new R;function E(P){L.fromBufferAttribute(s,P),T.copy(L);const I=a[P];v.copy(I),v.sub(L.multiplyScalar(L.dot(I))).normalize(),M.crossVectors(T,I);const b=M.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,b)}for(let P=0,I=y.length;P<I;++P){const x=y[P],b=x.start,F=x.count;for(let O=b,H=b+F;O<H;O+=3)E(t.getX(O+0)),E(t.getX(O+1)),E(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ee(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new Ee(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new he,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nl=new Jt,ti=new Va,Qs=new es,Fl=new R,tr=new R,er=new R,nr=new R,_o=new R,ir=new R,Ol=new R,sr=new R;class Dt extends _e{constructor(t=new he,e=new Fe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(_o.fromBufferAttribute(u,t),o?ir.addScaledVector(_o,h):ir.addScaledVector(_o.sub(e),h))}e.add(ir)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),ti.copy(t.ray).recast(t.near),!(Qs.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Qs,Fl)===null||ti.origin.distanceToSquared(Fl)>(t.far-t.near)**2))&&(Nl.copy(r).invert(),ti.copy(t.ray).applyMatrix4(Nl),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ti)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let M=y,L=v;M<L;M+=3){const T=a.getX(M),E=a.getX(M+1),P=a.getX(M+2);s=rr(this,m,t,n,c,h,u,T,E,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);s=rr(this,o,t,n,c,h,u,y,v,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let M=y,L=v;M<L;M+=3){const T=M,E=M+1,P=M+2;s=rr(this,m,t,n,c,h,u,T,E,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=p,v=p+1,M=p+2;s=rr(this,o,t,n,c,h,u,y,v,M),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function vf(i,t,e,n,s,r,o,a){let l;if(t.side===Ie?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Fn,a),l===null)return null;sr.copy(a),sr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(sr);return c<e.near||c>e.far?null:{distance:c,point:sr.clone(),object:i}}function rr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,tr),i.getVertexPosition(l,er),i.getVertexPosition(c,nr);const h=vf(i,t,e,n,tr,er,nr,Ol);if(h){const u=new R;an.getBarycoord(Ol,tr,er,nr,u),s&&(h.uv=an.getInterpolatedAttribute(s,a,l,c,u,new Z)),r&&(h.uv1=an.getInterpolatedAttribute(r,a,l,c,u,new Z)),o&&(h.normal=an.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new R,materialIndex:0};an.getNormal(tr,er,nr,f.normal),h.face=f,h.barycoord=u}return h}class ue extends he{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(u,2));function g(_,p,m,y,v,M,L,T,E,P,I){const x=M/E,b=L/P,F=M/2,O=L/2,H=T/2,X=E+1,k=P+1;let J=0,V=0;const ut=new R;for(let ft=0;ft<k;ft++){const dt=ft*b-O;for(let qt=0;qt<X;qt++){const $t=qt*x-F;ut[_]=$t*y,ut[p]=dt*v,ut[m]=H,c.push(ut.x,ut.y,ut.z),ut[_]=0,ut[p]=0,ut[m]=T>0?1:-1,h.push(ut.x,ut.y,ut.z),u.push(qt/E),u.push(1-ft/P),J+=1}}for(let ft=0;ft<P;ft++)for(let dt=0;dt<E;dt++){const qt=f+dt+X*ft,$t=f+dt+X*(ft+1),Y=f+(dt+1)+X*(ft+1),nt=f+(dt+1)+X*ft;l.push(qt,$t,nt),l.push($t,Y,nt),V+=6}a.addGroup(d,V,I),d+=V,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ji(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ne(i){const t={};for(let e=0;e<i.length;e++){const n=ji(i[e]);for(const s in n)t[s]=n[s]}return t}function xf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _h(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Ds={clone:ji,merge:Ne};var Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oe extends mi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=yf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=xf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class vh extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qn=new R,zl=new Z,Bl=new Z;class Ge extends vh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ji*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qn.x,qn.y).multiplyScalar(-t/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-t/qn.z)}getViewSize(t,e){return this.getViewBounds(t,zl,Bl),e.subVectors(Bl,zl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ts*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Pi=-90,Li=1;class Sf extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ge(Pi,Li,t,e);s.layers=this.layers,this.add(s);const r=new Ge(Pi,Li,t,e);r.layers=this.layers,this.add(r);const o=new Ge(Pi,Li,t,e);o.layers=this.layers,this.add(o);const a=new Ge(Pi,Li,t,e);a.layers=this.layers,this.add(a);const l=new Ge(Pi,Li,t,e);l.layers=this.layers,this.add(l);const c=new Ge(Pi,Li,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class xh extends De{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Yi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bf extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new xh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ue(5,5,5),r=new Oe({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:Un});r.uniforms.tEquirect.value=e;const o=new Dt(s,r),a=e.minFilter;return e.minFilter===hi&&(e.minFilter=fn),new Sf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const vo=new R,wf=new R,Tf=new Wt;class ri{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=vo.subVectors(n,e).cross(wf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(vo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Tf.getNormalMatrix(t),s=this.coplanarPoint(vo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ei=new es,or=new R;class Xa{constructor(t=new ri,e=new ri,n=new ri,s=new ri,r=new ri,o=new ri){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],p=s[11],m=s[12],y=s[13],v=s[14],M=s[15];if(n[0].setComponents(l-r,f-c,p-d,M-m).normalize(),n[1].setComponents(l+r,f+c,p+d,M+m).normalize(),n[2].setComponents(l+o,f+h,p+g,M+y).normalize(),n[3].setComponents(l-o,f-h,p-g,M-y).normalize(),n[4].setComponents(l-a,f-u,p-_,M-v).normalize(),e===Dn)n[5].setComponents(l+a,f+u,p+_,M+v).normalize();else if(e===Lr)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ei)}intersectsSprite(t){return ei.center.set(0,0,0),ei.radius=.7071067811865476,ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(ei)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(or.x=s.normal.x>0?t.max.x:t.min.x,or.y=s.normal.y>0?t.max.y:t.min.y,or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(or)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ef(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class gn extends he{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const y=m*f-o;for(let v=0;v<c;v++){const M=v*u-r;g.push(M,-y,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const v=y+c*m,M=y+c*(m+1),L=y+1+c*(m+1),T=y+1+c*m;d.push(v,M,T),d.push(M,L,T)}this.setIndex(d),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cf=`#ifdef USE_ALPHAHASH
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
#endif`,Rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,If=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Df=`#ifdef USE_AOMAP
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
#endif`,Uf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nf=`#ifdef USE_BATCHING
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
#endif`,Ff=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Of=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kf=`#ifdef USE_IRIDESCENCE
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
#endif`,Gf=`#ifdef USE_BUMPMAP
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
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zf=`#define PI 3.141592653589793
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
} // validated`,Jf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jf=`vec3 transformedNormal = objectNormal;
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
#endif`,Qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,id="gl_FragColor = linearToOutputTexel( gl_FragColor );",sd=`
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
}`,rd=`#ifdef USE_ENVMAP
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
#endif`,od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ad=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pd=`#ifdef USE_GRADIENTMAP
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
}`,md=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vd=`uniform bool receiveShadow;
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
#endif`,xd=`#ifdef USE_ENVMAP
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
#endif`,Md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wd=`PhysicalMaterial material;
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
#endif`,Td=`struct PhysicalMaterial {
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
}`,Ed=`
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
#endif`,Ad=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Id=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ud=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fd=`#if defined( USE_POINTS_UV )
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
#endif`,Od=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hd=`#ifdef USE_MORPHTARGETS
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
#endif`,Vd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kd=`#ifdef USE_NORMALMAP
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
#endif`,Zd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ep=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,op=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ap=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,up=`float getShadowMask() {
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
}`,fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dp=`#ifdef USE_SKINNING
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
#endif`,pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mp=`#ifdef USE_SKINNING
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
#endif`,gp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mp=`#ifdef USE_TRANSMISSION
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
#endif`,yp=`#ifdef USE_TRANSMISSION
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
#endif`,Sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ap=`uniform sampler2D t2D;
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`#include <common>
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
}`,Dp=`#if DEPTH_PACKING == 3200
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
}`,Up=`#define DISTANCE
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
}`,Np=`#define DISTANCE
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`uniform float scale;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,kp=`#include <common>
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Hp=`#define LAMBERT
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
}`,Vp=`#define LAMBERT
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
}`,Wp=`#define MATCAP
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
}`,Xp=`#define MATCAP
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
}`,qp=`#define NORMAL
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
}`,Yp=`#define NORMAL
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
}`,$p=`#define PHONG
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
}`,Kp=`#define PHONG
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
}`,Zp=`#define STANDARD
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
}`,Jp=`#define STANDARD
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
}`,jp=`#define TOON
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
}`,Qp=`#define TOON
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
}`,t0=`uniform float size;
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
}`,e0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,i0=`uniform vec3 color;
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
}`,s0=`uniform float rotation;
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
}`,r0=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Af,alphahash_pars_fragment:Cf,alphamap_fragment:Rf,alphamap_pars_fragment:Pf,alphatest_fragment:Lf,alphatest_pars_fragment:If,aomap_fragment:Df,aomap_pars_fragment:Uf,batching_pars_vertex:Nf,batching_vertex:Ff,begin_vertex:Of,beginnormal_vertex:zf,bsdfs:Bf,iridescence_fragment:kf,bumpmap_pars_fragment:Gf,clipping_planes_fragment:Hf,clipping_planes_pars_fragment:Vf,clipping_planes_pars_vertex:Wf,clipping_planes_vertex:Xf,color_fragment:qf,color_pars_fragment:Yf,color_pars_vertex:$f,color_vertex:Kf,common:Zf,cube_uv_reflection_fragment:Jf,defaultnormal_vertex:jf,displacementmap_pars_vertex:Qf,displacementmap_vertex:td,emissivemap_fragment:ed,emissivemap_pars_fragment:nd,colorspace_fragment:id,colorspace_pars_fragment:sd,envmap_fragment:rd,envmap_common_pars_fragment:od,envmap_pars_fragment:ad,envmap_pars_vertex:ld,envmap_physical_pars_fragment:xd,envmap_vertex:cd,fog_vertex:hd,fog_pars_vertex:ud,fog_fragment:fd,fog_pars_fragment:dd,gradientmap_pars_fragment:pd,lightmap_pars_fragment:md,lights_lambert_fragment:gd,lights_lambert_pars_fragment:_d,lights_pars_begin:vd,lights_toon_fragment:Md,lights_toon_pars_fragment:yd,lights_phong_fragment:Sd,lights_phong_pars_fragment:bd,lights_physical_fragment:wd,lights_physical_pars_fragment:Td,lights_fragment_begin:Ed,lights_fragment_maps:Ad,lights_fragment_end:Cd,logdepthbuf_fragment:Rd,logdepthbuf_pars_fragment:Pd,logdepthbuf_pars_vertex:Ld,logdepthbuf_vertex:Id,map_fragment:Dd,map_pars_fragment:Ud,map_particle_fragment:Nd,map_particle_pars_fragment:Fd,metalnessmap_fragment:Od,metalnessmap_pars_fragment:zd,morphinstance_vertex:Bd,morphcolor_vertex:kd,morphnormal_vertex:Gd,morphtarget_pars_vertex:Hd,morphtarget_vertex:Vd,normal_fragment_begin:Wd,normal_fragment_maps:Xd,normal_pars_fragment:qd,normal_pars_vertex:Yd,normal_vertex:$d,normalmap_pars_fragment:Kd,clearcoat_normal_fragment_begin:Zd,clearcoat_normal_fragment_maps:Jd,clearcoat_pars_fragment:jd,iridescence_pars_fragment:Qd,opaque_fragment:tp,packing:ep,premultiplied_alpha_fragment:np,project_vertex:ip,dithering_fragment:sp,dithering_pars_fragment:rp,roughnessmap_fragment:op,roughnessmap_pars_fragment:ap,shadowmap_pars_fragment:lp,shadowmap_pars_vertex:cp,shadowmap_vertex:hp,shadowmask_pars_fragment:up,skinbase_vertex:fp,skinning_pars_vertex:dp,skinning_vertex:pp,skinnormal_vertex:mp,specularmap_fragment:gp,specularmap_pars_fragment:_p,tonemapping_fragment:vp,tonemapping_pars_fragment:xp,transmission_fragment:Mp,transmission_pars_fragment:yp,uv_pars_fragment:Sp,uv_pars_vertex:bp,uv_vertex:wp,worldpos_vertex:Tp,background_vert:Ep,background_frag:Ap,backgroundCube_vert:Cp,backgroundCube_frag:Rp,cube_vert:Pp,cube_frag:Lp,depth_vert:Ip,depth_frag:Dp,distanceRGBA_vert:Up,distanceRGBA_frag:Np,equirect_vert:Fp,equirect_frag:Op,linedashed_vert:zp,linedashed_frag:Bp,meshbasic_vert:kp,meshbasic_frag:Gp,meshlambert_vert:Hp,meshlambert_frag:Vp,meshmatcap_vert:Wp,meshmatcap_frag:Xp,meshnormal_vert:qp,meshnormal_frag:Yp,meshphong_vert:$p,meshphong_frag:Kp,meshphysical_vert:Zp,meshphysical_frag:Jp,meshtoon_vert:jp,meshtoon_frag:Qp,points_vert:t0,points_frag:e0,shadow_vert:n0,shadow_frag:i0,sprite_vert:s0,sprite_frag:r0},ct={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new Z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},vn={basic:{uniforms:Ne([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ne([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ne([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ne([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ne([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ne([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ne([ct.points,ct.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ne([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ne([ct.common,ct.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ne([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ne([ct.sprite,ct.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ne([ct.common,ct.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ne([ct.lights,ct.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};vn.physical={uniforms:Ne([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new Z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new Z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new Z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const ar={r:0,b:0,g:0},ni=new Qe,o0=new Jt;function a0(i,t,e,n,s,r,o){const a=new Tt(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const M=g(y);M===null?m(a,l):M&&M.isColor&&(m(M,1),v=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,v){const M=g(v);M&&(M.isCubeTexture||M.mapping===Or)?(h===void 0&&(h=new Dt(new ue(1,1,1),new Oe({name:"BackgroundCubeMaterial",uniforms:ji(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ni.copy(v.backgroundRotation),ni.x*=-1,ni.y*=-1,ni.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ni.y*=-1,ni.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(o0.makeRotationFromEuler(ni)),h.material.toneMapped=te.getTransfer(M.colorSpace)!==le,(u!==M||f!==M.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,d=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Dt(new gn(2,2),new Oe({name:"BackgroundMaterial",uniforms:ji(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=te.getTransfer(M.colorSpace)!==le,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,v){y.getRGB(ar,_h(i)),n.buffers.color.setClear(ar.r,ar.g,ar.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:_,addToRenderList:p}}function l0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(x,b,F,O,H){let X=!1;const k=u(O,F,b);r!==k&&(r=k,c(r.object)),X=d(x,O,F,H),X&&g(x,O,F,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(x,b,F,O),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,b,F){const O=F.wireframe===!0;let H=n[x.id];H===void 0&&(H={},n[x.id]=H);let X=H[b.id];X===void 0&&(X={},H[b.id]=X);let k=X[O];return k===void 0&&(k=f(l()),X[O]=k),k}function f(x){const b=[],F=[],O=[];for(let H=0;H<e;H++)b[H]=0,F[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:F,attributeDivisors:O,object:x,attributes:{},index:null}}function d(x,b,F,O){const H=r.attributes,X=b.attributes;let k=0;const J=F.getAttributes();for(const V in J)if(J[V].location>=0){const ft=H[V];let dt=X[V];if(dt===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(dt=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(dt=x.instanceColor)),ft===void 0||ft.attribute!==dt||dt&&ft.data!==dt.data)return!0;k++}return r.attributesNum!==k||r.index!==O}function g(x,b,F,O){const H={},X=b.attributes;let k=0;const J=F.getAttributes();for(const V in J)if(J[V].location>=0){let ft=X[V];ft===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ft=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ft=x.instanceColor));const dt={};dt.attribute=ft,ft&&ft.data&&(dt.data=ft.data),H[V]=dt,k++}r.attributes=H,r.attributesNum=k,r.index=O}function _(){const x=r.newAttributes;for(let b=0,F=x.length;b<F;b++)x[b]=0}function p(x){m(x,0)}function m(x,b){const F=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;F[x]=1,O[x]===0&&(i.enableVertexAttribArray(x),O[x]=1),H[x]!==b&&(i.vertexAttribDivisor(x,b),H[x]=b)}function y(){const x=r.newAttributes,b=r.enabledAttributes;for(let F=0,O=b.length;F<O;F++)b[F]!==x[F]&&(i.disableVertexAttribArray(F),b[F]=0)}function v(x,b,F,O,H,X,k){k===!0?i.vertexAttribIPointer(x,b,F,H,X):i.vertexAttribPointer(x,b,F,O,H,X)}function M(x,b,F,O){_();const H=O.attributes,X=F.getAttributes(),k=b.defaultAttributeValues;for(const J in X){const V=X[J];if(V.location>=0){let ut=H[J];if(ut===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(ut=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(ut=x.instanceColor)),ut!==void 0){const ft=ut.normalized,dt=ut.itemSize,qt=t.get(ut);if(qt===void 0)continue;const $t=qt.buffer,Y=qt.type,nt=qt.bytesPerElement,St=Y===i.INT||Y===i.UNSIGNED_INT||ut.gpuType===Ua;if(ut.isInterleavedBufferAttribute){const ht=ut.data,Ut=ht.stride,It=ut.offset;if(ht.isInstancedInterleavedBuffer){for(let kt=0;kt<V.locationSize;kt++)m(V.location+kt,ht.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let kt=0;kt<V.locationSize;kt++)p(V.location+kt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let kt=0;kt<V.locationSize;kt++)v(V.location+kt,dt/V.locationSize,Y,ft,Ut*nt,(It+dt/V.locationSize*kt)*nt,St)}else{if(ut.isInstancedBufferAttribute){for(let ht=0;ht<V.locationSize;ht++)m(V.location+ht,ut.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let ht=0;ht<V.locationSize;ht++)p(V.location+ht);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let ht=0;ht<V.locationSize;ht++)v(V.location+ht,dt/V.locationSize,Y,ft,dt*nt,dt/V.locationSize*ht*nt,St)}}else if(k!==void 0){const ft=k[J];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(V.location,ft);break;case 3:i.vertexAttrib3fv(V.location,ft);break;case 4:i.vertexAttrib4fv(V.location,ft);break;default:i.vertexAttrib1fv(V.location,ft)}}}}y()}function L(){P();for(const x in n){const b=n[x];for(const F in b){const O=b[F];for(const H in O)h(O[H].object),delete O[H];delete b[F]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const b=n[x.id];for(const F in b){const O=b[F];for(const H in O)h(O[H].object),delete O[H];delete b[F]}delete n[x.id]}function E(x){for(const b in n){const F=n[b];if(F[x.id]===void 0)continue;const O=F[x.id];for(const H in O)h(O[H].object),delete O[H];delete F[x.id]}}function P(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:I,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function c0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<f.length;_++)e.update(g,n,f[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function h0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==pn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const P=E===Nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==On&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==xn&&!P)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:L,maxSamples:T}}function u0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ri,a=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const y=r?0:n,v=y*4;let M=m.clippingState||null;l.value=M,M=h(g,f,v,d);for(let L=0;L!==v;++L)M[L]=e[L];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,M=d;v!==_;++v,M+=4)o.copy(u[v]).applyMatrix4(y,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function f0(i){let t=new WeakMap;function e(o,a){return a===$o?o.mapping=Yi:a===Ko&&(o.mapping=$i),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$o||a===Ko)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bf(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class qa extends vh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const zi=4,kl=[.125,.215,.35,.446,.526,.582],li=20,xo=new qa,Gl=new Tt;let Mo=null,yo=0,So=0,bo=!1;const oi=(1+Math.sqrt(5))/2,Ii=1/oi,Hl=[new R(-oi,Ii,0),new R(oi,Ii,0),new R(-Ii,0,oi),new R(Ii,0,oi),new R(0,oi,-Ii),new R(0,oi,Ii),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class wa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Mo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mo,yo,So),this._renderer.xr.enabled=bo,t.scissorTest=!1,lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===$i?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mo=this._renderer.getRenderTarget(),yo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Nn,format:pn,colorSpace:Zn,depthBuffer:!1},s=Vl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d0(r)),this._blurMaterial=p0(r,t,e)}return s}_compileMaterial(t){const e=new Dt(this._lodPlanes[0],t);this._renderer.compile(e,xo)}_sceneToCubeUV(t,e,n,s){const a=new Ge(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Gl),h.toneMapping=$n,h.autoClear=!1;const d=new Fe({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new Dt(new ue,d);let _=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,_=!0):(d.color.copy(Gl),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;lr(s,y*v,m>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Yi||t.mapping===$i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;lr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,xo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hl[(s-r-1)%Hl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Dt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*li-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):li;p>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${li}`);const m=[];let y=0;for(let E=0;E<li;++E){const P=E/_,I=Math.exp(-P*P/2);m.push(I),E===0?y+=I:E<p&&(y+=2*I)}for(let E=0;E<m.length;E++)m[E]=m[E]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const M=this._sizeLods[s],L=3*M*(s>v-zi?s-v+zi:0),T=4*(this._cubeSize-M);lr(e,L,T,3*M,2*M),l.setRenderTarget(e),l.render(u,xo)}}function d0(i){const t=[],e=[],n=[];let s=i;const r=i-zi+1+kl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-zi?l=kl[o-i+zi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*d),v=new Float32Array(p*g*d),M=new Float32Array(m*g*d);for(let T=0;T<d;T++){const E=T%3*2/3-1,P=T>2?0:-1,I=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];y.set(I,_*g*T),v.set(f,p*g*T);const x=[T,T,T,T,T,T];M.set(x,m*g*T)}const L=new he;L.setAttribute("position",new Ee(y,_)),L.setAttribute("uv",new Ee(v,p)),L.setAttribute("faceIndex",new Ee(M,m)),t.push(L),s>zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Vl(i,t,e){const n=new mn(i,t,e);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function p0(i,t,e){const n=new Float32Array(li),s=new R(0,1,0);return new Oe({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Wl(){return new Oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Xl(){return new Oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ya(){return`

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
	`}function m0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===$o||l===Ko,h=l===Yi||l===$i;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new wa(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new wa(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function g0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Er("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _0(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let v=0,M=y.length;v<M;v+=3){const L=y[v+0],T=y[v+1],E=y[v+2];f.push(L,T,T,E,E,L)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,M=y.length/3-1;v<M;v+=3){const L=v+0,T=v+1,E=v+2;f.push(L,T,T,E,E,L)}}else return;const p=new(uh(f)?gh:mh)(f,1);p.version=_;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function v0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function u(f,d,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let m=0;for(let y=0;y<g;y++)m+=d[y];for(let y=0;y<_.length;y++)e.update(m,n,_[y])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function x0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function M0(i,t,e){const n=new WeakMap,s=new oe;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let x=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),p===!0&&(M=3);let L=a.attributes.position.count*M,T=1;L>t.maxTextureSize&&(T=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const E=new Float32Array(L*T*4*u),P=new dh(E,L,T,u);P.type=xn,P.needsUpdate=!0;const I=M*4;for(let b=0;b<u;b++){const F=m[b],O=y[b],H=v[b],X=L*T*4*b;for(let k=0;k<F.count;k++){const J=k*I;g===!0&&(s.fromBufferAttribute(F,k),E[X+J+0]=s.x,E[X+J+1]=s.y,E[X+J+2]=s.z,E[X+J+3]=0),_===!0&&(s.fromBufferAttribute(O,k),E[X+J+4]=s.x,E[X+J+5]=s.y,E[X+J+6]=s.z,E[X+J+7]=0),p===!0&&(s.fromBufferAttribute(H,k),E[X+J+8]=s.x,E[X+J+9]=s.y,E[X+J+10]=s.z,E[X+J+11]=H.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new Z(L,T)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function y0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class yh extends De{constructor(t,e,n,s,r,o,a,l,c,h=Gi){if(h!==Gi&&h!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gi&&(n=ui),n===void 0&&h===Zi&&(n=Ki),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:He,this.minFilter=l!==void 0?l:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Sh=new De,ql=new yh(1,1),bh=new dh,wh=new lf,Th=new xh,Yl=[],$l=[],Kl=new Float32Array(16),Zl=new Float32Array(9),Jl=new Float32Array(4);function ns(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Yl[s];if(r===void 0&&(r=new Float32Array(s),Yl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function we(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Br(i,t){let e=$l[t];e===void 0&&(e=new Int32Array(t),$l[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function S0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function b0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),we(e,t)}}function w0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),we(e,t)}}function T0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),we(e,t)}}function E0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;Jl.set(n),i.uniformMatrix2fv(this.addr,!1,Jl),we(e,n)}}function A0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;Zl.set(n),i.uniformMatrix3fv(this.addr,!1,Zl),we(e,n)}}function C0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(be(e,n))return;Kl.set(n),i.uniformMatrix4fv(this.addr,!1,Kl),we(e,n)}}function R0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),we(e,t)}}function L0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),we(e,t)}}function I0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),we(e,t)}}function D0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function U0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),we(e,t)}}function N0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),we(e,t)}}function F0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),we(e,t)}}function O0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ql.compareFunction=hh,r=ql):r=Sh,e.setTexture2D(t||r,s)}function z0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||wh,s)}function B0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Th,s)}function k0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||bh,s)}function G0(i){switch(i){case 5126:return S0;case 35664:return b0;case 35665:return w0;case 35666:return T0;case 35674:return E0;case 35675:return A0;case 35676:return C0;case 5124:case 35670:return R0;case 35667:case 35671:return P0;case 35668:case 35672:return L0;case 35669:case 35673:return I0;case 5125:return D0;case 36294:return U0;case 36295:return N0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return z0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return k0}}function H0(i,t){i.uniform1fv(this.addr,t)}function V0(i,t){const e=ns(t,this.size,2);i.uniform2fv(this.addr,e)}function W0(i,t){const e=ns(t,this.size,3);i.uniform3fv(this.addr,e)}function X0(i,t){const e=ns(t,this.size,4);i.uniform4fv(this.addr,e)}function q0(i,t){const e=ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Y0(i,t){const e=ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $0(i,t){const e=ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function K0(i,t){i.uniform1iv(this.addr,t)}function Z0(i,t){i.uniform2iv(this.addr,t)}function J0(i,t){i.uniform3iv(this.addr,t)}function j0(i,t){i.uniform4iv(this.addr,t)}function Q0(i,t){i.uniform1uiv(this.addr,t)}function tm(i,t){i.uniform2uiv(this.addr,t)}function em(i,t){i.uniform3uiv(this.addr,t)}function nm(i,t){i.uniform4uiv(this.addr,t)}function im(i,t,e){const n=this.cache,s=t.length,r=Br(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Sh,r[o])}function sm(i,t,e){const n=this.cache,s=t.length,r=Br(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||wh,r[o])}function rm(i,t,e){const n=this.cache,s=t.length,r=Br(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Th,r[o])}function om(i,t,e){const n=this.cache,s=t.length,r=Br(e,s);be(n,r)||(i.uniform1iv(this.addr,r),we(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||bh,r[o])}function am(i){switch(i){case 5126:return H0;case 35664:return V0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return $0;case 5124:case 35670:return K0;case 35667:case 35671:return Z0;case 35668:case 35672:return J0;case 35669:case 35673:return j0;case 5125:return Q0;case 36294:return tm;case 36295:return em;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return im;case 35679:case 36299:case 36307:return sm;case 35680:case 36300:case 36308:case 36293:return rm;case 36289:case 36303:case 36311:case 36292:return om}}class lm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=G0(e.type)}}class cm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=am(e.type)}}class hm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const wo=/(\w+)(\])?(\[|\.)?/g;function jl(i,t){i.seq.push(t),i.map[t.id]=t}function um(i,t,e){const n=i.name,s=n.length;for(wo.lastIndex=0;;){const r=wo.exec(n),o=wo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){jl(e,c===void 0?new lm(a,i,t):new cm(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new hm(a),jl(e,u)),e=u}}}class Ar{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);um(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ql(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const fm=37297;let dm=0;function pm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function mm(i){const t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(i);let n;switch(t===e?n="":t===Pr&&e===Rr?n="LinearDisplayP3ToLinearSRGB":t===Rr&&e===Pr&&(n="LinearSRGBToLinearDisplayP3"),i){case Zn:case zr:return[n,"LinearTransferOETF"];case on:case Ga:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function tc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+pm(i.getShaderSource(t),o)}else return s}function gm(i,t){const e=mm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function _m(i,t){let e;switch(t){case $c:e="Linear";break;case Kc:e="Reinhard";break;case Zc:e="Cineon";break;case Da:e="ACESFilmic";break;case Jc:e="AgX";break;case jc:e="Neutral";break;case bu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const cr=new R;function vm(){te.getLuminanceCoefficients(cr);const i=cr.x.toFixed(4),t=cr.y.toFixed(4),e=cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function Mm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ym(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ss(i){return i!==""}function ec(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(i){return i.replace(Sm,wm)}const bm=new Map;function wm(i,t){let e=Vt[t];if(e===void 0){const n=bm.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ta(e)}const Tm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ic(i){return i.replace(Tm,Em)}function Em(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Am(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===qc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function Cm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Yi:case $i:t="ENVMAP_TYPE_CUBE";break;case Or:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $i:t="ENVMAP_MODE_REFRACTION";break}return t}function Pm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yc:t="ENVMAP_BLENDING_MULTIPLY";break;case yu:t="ENVMAP_BLENDING_MIX";break;case Su:t="ENVMAP_BLENDING_ADD";break}return t}function Lm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Im(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Am(e),c=Cm(e),h=Rm(e),u=Pm(e),f=Lm(e),d=xm(e),g=Mm(r),_=s.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ss).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ss).join(`
`),m.length>0&&(m+=`
`)):(p=[sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),m=[sc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$n?"#define TONE_MAPPING":"",e.toneMapping!==$n?Vt.tonemapping_pars_fragment:"",e.toneMapping!==$n?_m("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,gm("linearToOutputTexel",e.outputColorSpace),vm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ss).join(`
`)),o=Ta(o),o=ec(o,e),o=nc(o,e),a=Ta(a),a=ec(a,e),a=nc(a,e),o=ic(o),a=ic(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=y+p+o,M=y+m+a,L=Ql(s,s.VERTEX_SHADER,v),T=Ql(s,s.FRAGMENT_SHADER,M);s.attachShader(_,L),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(b){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_).trim(),O=s.getShaderInfoLog(L).trim(),H=s.getShaderInfoLog(T).trim();let X=!0,k=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,T);else{const J=tc(s,L,"vertex"),V=tc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+F+`
`+J+`
`+V)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||H==="")&&(k=!1);k&&(b.diagnostics={runnable:X,programLog:F,vertexShader:{log:O,prefix:p},fragmentShader:{log:H,prefix:m}})}s.deleteShader(L),s.deleteShader(T),P=new Ar(s,_),I=ym(s,_)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let I;this.getAttributes=function(){return I===void 0&&E(this),I};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,fm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=T,this}let Dm=0;class Um{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Nm(t),e.set(t,n)),n}}class Nm{constructor(t){this.id=Dm++,this.code=t,this.usedTimes=0}}function Fm(i,t,e,n,s,r,o){const a=new Wa,l=new Um,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,b,F,O,H){const X=O.fog,k=H.geometry,J=x.isMeshStandardMaterial?O.environment:null,V=(x.isMeshStandardMaterial?e:t).get(x.envMap||J),ut=V&&V.mapping===Or?V.image.height:null,ft=_[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const dt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,qt=dt!==void 0?dt.length:0;let $t=0;k.morphAttributes.position!==void 0&&($t=1),k.morphAttributes.normal!==void 0&&($t=2),k.morphAttributes.color!==void 0&&($t=3);let Y,nt,St,ht;if(ft){const Be=vn[ft];Y=Be.vertexShader,nt=Be.fragmentShader}else Y=x.vertexShader,nt=x.fragmentShader,l.update(x),St=l.getVertexShaderID(x),ht=l.getFragmentShaderID(x);const Ut=i.getRenderTarget(),It=H.isInstancedMesh===!0,kt=H.isBatchedMesh===!0,Yt=!!x.map,j=!!x.matcap,C=!!V,ot=!!x.aoMap,rt=!!x.lightMap,et=!!x.bumpMap,at=!!x.normalMap,Rt=!!x.displacementMap,gt=!!x.emissiveMap,A=!!x.metalnessMap,S=!!x.roughnessMap,z=x.anisotropy>0,$=x.clearcoat>0,Q=x.dispersion>0,K=x.iridescence>0,Et=x.sheen>0,lt=x.transmission>0,xt=z&&!!x.anisotropyMap,Kt=$&&!!x.clearcoatMap,it=$&&!!x.clearcoatNormalMap,Mt=$&&!!x.clearcoatRoughnessMap,Ot=K&&!!x.iridescenceMap,zt=K&&!!x.iridescenceThicknessMap,bt=Et&&!!x.sheenColorMap,Zt=Et&&!!x.sheenRoughnessMap,Ht=!!x.specularMap,ae=!!x.specularColorMap,D=!!x.specularIntensityMap,_t=lt&&!!x.transmissionMap,W=lt&&!!x.thicknessMap,tt=!!x.gradientMap,pt=!!x.alphaMap,vt=x.alphaTest>0,jt=!!x.alphaHash,Me=!!x.extensions;let ze=$n;x.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(ze=i.toneMapping);const Qt={shaderID:ft,shaderType:x.type,shaderName:x.name,vertexShader:Y,fragmentShader:nt,defines:x.defines,customVertexShaderID:St,customFragmentShaderID:ht,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:kt,batchingColor:kt&&H._colorsTexture!==null,instancing:It,instancingColor:It&&H.instanceColor!==null,instancingMorph:It&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Ut===null?i.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:Zn,alphaToCoverage:!!x.alphaToCoverage,map:Yt,matcap:j,envMap:C,envMapMode:C&&V.mapping,envMapCubeUVHeight:ut,aoMap:ot,lightMap:rt,bumpMap:et,normalMap:at,displacementMap:d&&Rt,emissiveMap:gt,normalMapObjectSpace:at&&x.normalMapType===Au,normalMapTangentSpace:at&&x.normalMapType===ch,metalnessMap:A,roughnessMap:S,anisotropy:z,anisotropyMap:xt,clearcoat:$,clearcoatMap:Kt,clearcoatNormalMap:it,clearcoatRoughnessMap:Mt,dispersion:Q,iridescence:K,iridescenceMap:Ot,iridescenceThicknessMap:zt,sheen:Et,sheenColorMap:bt,sheenRoughnessMap:Zt,specularMap:Ht,specularColorMap:ae,specularIntensityMap:D,transmission:lt,transmissionMap:_t,thicknessMap:W,gradientMap:tt,opaque:x.transparent===!1&&x.blending===ki&&x.alphaToCoverage===!1,alphaMap:pt,alphaTest:vt,alphaHash:jt,combine:x.combine,mapUv:Yt&&p(x.map.channel),aoMapUv:ot&&p(x.aoMap.channel),lightMapUv:rt&&p(x.lightMap.channel),bumpMapUv:et&&p(x.bumpMap.channel),normalMapUv:at&&p(x.normalMap.channel),displacementMapUv:Rt&&p(x.displacementMap.channel),emissiveMapUv:gt&&p(x.emissiveMap.channel),metalnessMapUv:A&&p(x.metalnessMap.channel),roughnessMapUv:S&&p(x.roughnessMap.channel),anisotropyMapUv:xt&&p(x.anisotropyMap.channel),clearcoatMapUv:Kt&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:it&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&p(x.sheenRoughnessMap.channel),specularMapUv:Ht&&p(x.specularMap.channel),specularColorMapUv:ae&&p(x.specularColorMap.channel),specularIntensityMapUv:D&&p(x.specularIntensityMap.channel),transmissionMapUv:_t&&p(x.transmissionMap.channel),thicknessMapUv:W&&p(x.thicknessMap.channel),alphaMapUv:pt&&p(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(at||z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!k.attributes.uv&&(Yt||pt),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:H.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:qt,morphTextureStride:$t,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:Yt&&x.map.isVideoTexture===!0&&te.getTransfer(x.map.colorSpace)===le,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===fe,flipSided:x.side===Ie,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Me&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&x.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function y(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const F in x.defines)b.push(F),b.push(x.defines[F]);return x.isRawShaderMaterial===!1&&(v(b,x),M(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function v(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),x.push(a.mask)}function L(x){const b=_[x.type];let F;if(b){const O=vn[b];F=Ds.clone(O.uniforms)}else F=x.uniforms;return F}function T(x,b){let F;for(let O=0,H=h.length;O<H;O++){const X=h[O];if(X.cacheKey===b){F=X,++F.usedTimes;break}}return F===void 0&&(F=new Im(i,b,x,r),h.push(F)),F}function E(x){if(--x.usedTimes===0){const b=h.indexOf(x);h[b]=h[h.length-1],h.pop(),x.destroy()}}function P(x){l.remove(x)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:L,acquireProgram:T,releaseProgram:E,releaseShaderCache:P,programs:h,dispose:I}}function Om(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function zm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function rc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function oc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,_,p){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},i[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),t++,m}function a(u,f,d,g,_,p){const m=o(u,f,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(u,f,d,g,_,p){const m=o(u,f,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||zm),n.length>1&&n.sort(f||rc),s.length>1&&s.sort(f||rc)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Bm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new oc,i.set(n,[o])):s>=r.length?(o=new oc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function km(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Tt};break;case"SpotLight":e={position:new R,direction:new R,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Gm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Z,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Hm=0;function Vm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Wm(i){const t=new km,e=Gm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const s=new R,r=new Jt,o=new Jt;function a(c){let h=0,u=0,f=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,g=0,_=0,p=0,m=0,y=0,v=0,M=0,L=0,T=0,E=0;c.sort(Vm);for(let I=0,x=c.length;I<x;I++){const b=c[I],F=b.color,O=b.intensity,H=b.distance,X=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=F.r*O,u+=F.g*O,f+=F.b*O;else if(b.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(b.sh.coefficients[k],O);E++}else if(b.isDirectionalLight){const k=t.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const J=b.shadow,V=e.get(b);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=b.shadow.matrix,y++}n.directional[d]=k,d++}else if(b.isSpotLight){const k=t.get(b);k.position.setFromMatrixPosition(b.matrixWorld),k.color.copy(F).multiplyScalar(O),k.distance=H,k.coneCos=Math.cos(b.angle),k.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),k.decay=b.decay,n.spot[_]=k;const J=b.shadow;if(b.map&&(n.spotLightMap[L]=b.map,L++,J.updateMatrices(b),b.castShadow&&T++),n.spotLightMatrix[_]=J.matrix,b.castShadow){const V=e.get(b);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=X,M++}_++}else if(b.isRectAreaLight){const k=t.get(b);k.color.copy(F).multiplyScalar(O),k.halfWidth.set(b.width*.5,0,0),k.halfHeight.set(0,b.height*.5,0),n.rectArea[p]=k,p++}else if(b.isPointLight){const k=t.get(b);if(k.color.copy(b.color).multiplyScalar(b.intensity),k.distance=b.distance,k.decay=b.decay,b.castShadow){const J=b.shadow,V=e.get(b);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=b.shadow.matrix,v++}n.point[g]=k,g++}else if(b.isHemisphereLight){const k=t.get(b);k.skyColor.copy(b.color).multiplyScalar(O),k.groundColor.copy(b.groundColor).multiplyScalar(O),n.hemi[m]=k,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==p||P.hemiLength!==m||P.numDirectionalShadows!==y||P.numPointShadows!==v||P.numSpotShadows!==M||P.numSpotMaps!==L||P.numLightProbes!==E)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=p,P.hemiLength=m,P.numDirectionalShadows=y,P.numPointShadows=v,P.numSpotShadows=M,P.numSpotMaps=L,P.numLightProbes=E,n.version=Hm++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const v=c[m];if(v.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(v.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(v.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function ac(i){const t=new Wm(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Xm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ac(i),t.set(s,[a])):r>=o.length?(a=new ac(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class qm extends mi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ym extends mi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $m=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Km=`uniform sampler2D shadow_pass;
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
}`;function Zm(i,t,e){let n=new Xa;const s=new Z,r=new Z,o=new oe,a=new qm({depthPacking:Eu}),l=new Ym,c={},h=e.maxTextureSize,u={[Fn]:Ie,[Ie]:Fn,[fe]:fe},f=new Oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Z},radius:{value:4}},vertexShader:$m,fragmentShader:Km}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new he;g.setAttribute("position",new Ee(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Dt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xc;let m=this.type;this.render=function(T,E,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const I=i.getRenderTarget(),x=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Un),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=m!==Ln&&this.type===Ln,H=m===Ln&&this.type!==Ln;for(let X=0,k=T.length;X<k;X++){const J=T[X],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ut=V.getFrameExtents();if(s.multiply(ut),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ut.x),s.x=r.x*ut.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ut.y),s.y=r.y*ut.y,V.mapSize.y=r.y)),V.map===null||O===!0||H===!0){const dt=this.type!==Ln?{minFilter:He,magFilter:He}:{};V.map!==null&&V.map.dispose(),V.map=new mn(s.x,s.y,dt),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ft=V.getViewportCount();for(let dt=0;dt<ft;dt++){const qt=V.getViewport(dt);o.set(r.x*qt.x,r.y*qt.y,r.x*qt.z,r.y*qt.w),F.viewport(o),V.updateMatrices(J,dt),n=V.getFrustum(),M(E,P,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===Ln&&y(V,P),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(I,x,b)};function y(T,E){const P=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new mn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(E,null,P,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(E,null,P,d,_,null)}function v(T,E,P,I){let x=null;const b=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)x=b;else if(x=P.isPointLight===!0?l:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const F=x.uuid,O=E.uuid;let H=c[F];H===void 0&&(H={},c[F]=H);let X=H[O];X===void 0&&(X=x.clone(),H[O]=X,E.addEventListener("dispose",L)),x=X}if(x.visible=E.visible,x.wireframe=E.wireframe,I===Ln?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:u[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=i.properties.get(x);F.light=P}return x}function M(T,E,P,I,x){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Ln)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const O=t.update(T),H=T.material;if(Array.isArray(H)){const X=O.groups;for(let k=0,J=X.length;k<J;k++){const V=X[k],ut=H[V.materialIndex];if(ut&&ut.visible){const ft=v(T,ut,I,x);T.onBeforeShadow(i,T,E,P,O,ft,V),i.renderBufferDirect(P,null,O,ft,T,V),T.onAfterShadow(i,T,E,P,O,ft,V)}}}else if(H.visible){const X=v(T,H,I,x);T.onBeforeShadow(i,T,E,P,O,X,null),i.renderBufferDirect(P,null,O,X,T,null),T.onAfterShadow(i,T,E,P,O,X,null)}}const F=T.children;for(let O=0,H=F.length;O<H;O++)M(F[O],E,P,I,x)}function L(T){T.target.removeEventListener("dispose",L);for(const P in c){const I=c[P],x=T.target.uuid;x in I&&(I[x].dispose(),delete I[x])}}}const Jm={[Go]:Ho,[Vo]:qo,[Wo]:Yo,[qi]:Xo,[Ho]:Go,[qo]:Vo,[Yo]:Wo,[Xo]:qi};function jm(i){function t(){let D=!1;const _t=new oe;let W=null;const tt=new oe(0,0,0,0);return{setMask:function(pt){W!==pt&&!D&&(i.colorMask(pt,pt,pt,pt),W=pt)},setLocked:function(pt){D=pt},setClear:function(pt,vt,jt,Me,ze){ze===!0&&(pt*=Me,vt*=Me,jt*=Me),_t.set(pt,vt,jt,Me),tt.equals(_t)===!1&&(i.clearColor(pt,vt,jt,Me),tt.copy(_t))},reset:function(){D=!1,W=null,tt.set(-1,0,0,0)}}}function e(){let D=!1,_t=!1,W=null,tt=null,pt=null;return{setReversed:function(vt){_t=vt},setTest:function(vt){vt?St(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(vt){W!==vt&&!D&&(i.depthMask(vt),W=vt)},setFunc:function(vt){if(_t&&(vt=Jm[vt]),tt!==vt){switch(vt){case Go:i.depthFunc(i.NEVER);break;case Ho:i.depthFunc(i.ALWAYS);break;case Vo:i.depthFunc(i.LESS);break;case qi:i.depthFunc(i.LEQUAL);break;case Wo:i.depthFunc(i.EQUAL);break;case Xo:i.depthFunc(i.GEQUAL);break;case qo:i.depthFunc(i.GREATER);break;case Yo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=vt}},setLocked:function(vt){D=vt},setClear:function(vt){pt!==vt&&(i.clearDepth(vt),pt=vt)},reset:function(){D=!1,W=null,tt=null,pt=null}}}function n(){let D=!1,_t=null,W=null,tt=null,pt=null,vt=null,jt=null,Me=null,ze=null;return{setTest:function(Qt){D||(Qt?St(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(Qt){_t!==Qt&&!D&&(i.stencilMask(Qt),_t=Qt)},setFunc:function(Qt,Be,bn){(W!==Qt||tt!==Be||pt!==bn)&&(i.stencilFunc(Qt,Be,bn),W=Qt,tt=Be,pt=bn)},setOp:function(Qt,Be,bn){(vt!==Qt||jt!==Be||Me!==bn)&&(i.stencilOp(Qt,Be,bn),vt=Qt,jt=Be,Me=bn)},setLocked:function(Qt){D=Qt},setClear:function(Qt){ze!==Qt&&(i.clearStencil(Qt),ze=Qt)},reset:function(){D=!1,_t=null,W=null,tt=null,pt=null,vt=null,jt=null,Me=null,ze=null}}}const s=new t,r=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],d=null,g=!1,_=null,p=null,m=null,y=null,v=null,M=null,L=null,T=new Tt(0,0,0),E=0,P=!1,I=null,x=null,b=null,F=null,O=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,k=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=k>=1):J.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=k>=2);let V=null,ut={};const ft=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),qt=new oe().fromArray(ft),$t=new oe().fromArray(dt);function Y(D,_t,W,tt){const pt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(D,vt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<W;jt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(_t+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return vt}const nt={};nt[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),St(i.DEPTH_TEST),r.setFunc(qi),rt(!1),et(_l),St(i.CULL_FACE),C(Un);function St(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function ht(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function Ut(D,_t){return h[D]!==_t?(i.bindFramebuffer(D,_t),h[D]=_t,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=_t),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function It(D,_t){let W=f,tt=!1;if(D){W=u.get(_t),W===void 0&&(W=[],u.set(_t,W));const pt=D.textures;if(W.length!==pt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,jt=pt.length;vt<jt;vt++)W[vt]=i.COLOR_ATTACHMENT0+vt;W.length=pt.length,tt=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,tt=!0);tt&&i.drawBuffers(W)}function kt(D){return d!==D?(i.useProgram(D),d=D,!0):!1}const Yt={[ai]:i.FUNC_ADD,[su]:i.FUNC_SUBTRACT,[ru]:i.FUNC_REVERSE_SUBTRACT};Yt[ou]=i.MIN,Yt[au]=i.MAX;const j={[lu]:i.ZERO,[cu]:i.ONE,[hu]:i.SRC_COLOR,[Bo]:i.SRC_ALPHA,[gu]:i.SRC_ALPHA_SATURATE,[pu]:i.DST_COLOR,[fu]:i.DST_ALPHA,[uu]:i.ONE_MINUS_SRC_COLOR,[ko]:i.ONE_MINUS_SRC_ALPHA,[mu]:i.ONE_MINUS_DST_COLOR,[du]:i.ONE_MINUS_DST_ALPHA,[_u]:i.CONSTANT_COLOR,[vu]:i.ONE_MINUS_CONSTANT_COLOR,[xu]:i.CONSTANT_ALPHA,[Mu]:i.ONE_MINUS_CONSTANT_ALPHA};function C(D,_t,W,tt,pt,vt,jt,Me,ze,Qt){if(D===Un){g===!0&&(ht(i.BLEND),g=!1);return}if(g===!1&&(St(i.BLEND),g=!0),D!==iu){if(D!==_||Qt!==P){if((p!==ai||v!==ai)&&(i.blendEquation(i.FUNC_ADD),p=ai,v=ai),Qt)switch(D){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xi:i.blendFunc(i.ONE,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}m=null,y=null,M=null,L=null,T.set(0,0,0),E=0,_=D,P=Qt}return}pt=pt||_t,vt=vt||W,jt=jt||tt,(_t!==p||pt!==v)&&(i.blendEquationSeparate(Yt[_t],Yt[pt]),p=_t,v=pt),(W!==m||tt!==y||vt!==M||jt!==L)&&(i.blendFuncSeparate(j[W],j[tt],j[vt],j[jt]),m=W,y=tt,M=vt,L=jt),(Me.equals(T)===!1||ze!==E)&&(i.blendColor(Me.r,Me.g,Me.b,ze),T.copy(Me),E=ze),_=D,P=!1}function ot(D,_t){D.side===fe?ht(i.CULL_FACE):St(i.CULL_FACE);let W=D.side===Ie;_t&&(W=!W),rt(W),D.blending===ki&&D.transparent===!1?C(Un):C(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const tt=D.stencilWrite;o.setTest(tt),tt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?St(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(D){I!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),I=D)}function et(D){D!==eu?(St(i.CULL_FACE),D!==x&&(D===_l?i.cullFace(i.BACK):D===nu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),x=D}function at(D){D!==b&&(X&&i.lineWidth(D),b=D)}function Rt(D,_t,W){D?(St(i.POLYGON_OFFSET_FILL),(F!==_t||O!==W)&&(i.polygonOffset(_t,W),F=_t,O=W)):ht(i.POLYGON_OFFSET_FILL)}function gt(D){D?St(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+H-1),V!==D&&(i.activeTexture(D),V=D)}function S(D,_t,W){W===void 0&&(V===null?W=i.TEXTURE0+H-1:W=V);let tt=ut[W];tt===void 0&&(tt={type:void 0,texture:void 0},ut[W]=tt),(tt.type!==D||tt.texture!==_t)&&(V!==W&&(i.activeTexture(W),V=W),i.bindTexture(D,_t||nt[D]),tt.type=D,tt.texture=_t)}function z(){const D=ut[V];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Kt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Mt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function zt(D){qt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),qt.copy(D))}function bt(D){$t.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),$t.copy(D))}function Zt(D,_t){let W=l.get(_t);W===void 0&&(W=new WeakMap,l.set(_t,W));let tt=W.get(D);tt===void 0&&(tt=i.getUniformBlockIndex(_t,D.name),W.set(D,tt))}function Ht(D,_t){const tt=l.get(_t).get(D);a.get(_t)!==tt&&(i.uniformBlockBinding(_t,tt,D.__bindingPointIndex),a.set(_t,tt))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},V=null,ut={},h={},u=new WeakMap,f=[],d=null,g=!1,_=null,p=null,m=null,y=null,v=null,M=null,L=null,T=new Tt(0,0,0),E=0,P=!1,I=null,x=null,b=null,F=null,O=null,qt.set(0,0,i.canvas.width,i.canvas.height),$t.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:St,disable:ht,bindFramebuffer:Ut,drawBuffers:It,useProgram:kt,setBlending:C,setMaterial:ot,setFlipSided:rt,setCullFace:et,setLineWidth:at,setPolygonOffset:Rt,setScissorTest:gt,activeTexture:A,bindTexture:S,unbindTexture:z,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:Mt,texImage3D:Ot,updateUBOMapping:Zt,uniformBlockBinding:Ht,texStorage2D:Kt,texStorage3D:it,texSubImage2D:K,texSubImage3D:Et,compressedTexSubImage2D:lt,compressedTexSubImage3D:xt,scissor:zt,viewport:bt,reset:ae}}function lc(i,t,e,n){const s=Qm(n);switch(e){case ih:return i*t;case rh:return i*t;case oh:return i*t*2;case Oa:return i*t/s.components*s.byteLength;case za:return i*t/s.components*s.byteLength;case ah:return i*t*2/s.components*s.byteLength;case Ba:return i*t*2/s.components*s.byteLength;case sh:return i*t*3/s.components*s.byteLength;case pn:return i*t*4/s.components*s.byteLength;case ka:return i*t*4/s.components*s.byteLength;case yr:case Sr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case br:case wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jo:case ta:return Math.max(i,16)*Math.max(t,8)/4;case Jo:case Qo:return Math.max(i,8)*Math.max(t,8)/2;case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ra:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ca:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ha:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ua:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case pa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ma:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ga:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _a:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Tr:case va:case xa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case lh:case Ma:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ya:case Sa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qm(i){switch(i){case On:case th:return{byteLength:1,components:1};case Is:case eh:case Nn:return{byteLength:2,components:1};case Na:case Fa:return{byteLength:2,components:4};case ui:case Ua:case xn:return{byteLength:4,components:1};case nh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function tg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Z,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return d?new OffscreenCanvas(A,S):Ir("canvas")}function _(A,S,z){let $=1;const Q=gt(A);if((Q.width>z||Q.height>z)&&($=z/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor($*Q.width),Et=Math.floor($*Q.height);u===void 0&&(u=g(K,Et));const lt=S?g(K,Et):u;return lt.width=K,lt.height=Et,lt.getContext("2d").drawImage(A,0,0,K,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Et+")."),lt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==He&&A.minFilter!==fn}function m(A){i.generateMipmap(A)}function y(A,S,z,$,Q=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=S;if(S===i.RED&&(z===i.FLOAT&&(K=i.R32F),z===i.HALF_FLOAT&&(K=i.R16F),z===i.UNSIGNED_BYTE&&(K=i.R8)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.R8UI),z===i.UNSIGNED_SHORT&&(K=i.R16UI),z===i.UNSIGNED_INT&&(K=i.R32UI),z===i.BYTE&&(K=i.R8I),z===i.SHORT&&(K=i.R16I),z===i.INT&&(K=i.R32I)),S===i.RG&&(z===i.FLOAT&&(K=i.RG32F),z===i.HALF_FLOAT&&(K=i.RG16F),z===i.UNSIGNED_BYTE&&(K=i.RG8)),S===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RG8UI),z===i.UNSIGNED_SHORT&&(K=i.RG16UI),z===i.UNSIGNED_INT&&(K=i.RG32UI),z===i.BYTE&&(K=i.RG8I),z===i.SHORT&&(K=i.RG16I),z===i.INT&&(K=i.RG32I)),S===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGB8UI),z===i.UNSIGNED_SHORT&&(K=i.RGB16UI),z===i.UNSIGNED_INT&&(K=i.RGB32UI),z===i.BYTE&&(K=i.RGB8I),z===i.SHORT&&(K=i.RGB16I),z===i.INT&&(K=i.RGB32I)),S===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),z===i.UNSIGNED_INT&&(K=i.RGBA32UI),z===i.BYTE&&(K=i.RGBA8I),z===i.SHORT&&(K=i.RGBA16I),z===i.INT&&(K=i.RGBA32I)),S===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),S===i.RGBA){const Et=Q?Cr:te.getTransfer($);z===i.FLOAT&&(K=i.RGBA32F),z===i.HALF_FLOAT&&(K=i.RGBA16F),z===i.UNSIGNED_BYTE&&(K=Et===le?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function v(A,S){let z;return A?S===null||S===ui||S===Ki?z=i.DEPTH24_STENCIL8:S===xn?z=i.DEPTH32F_STENCIL8:S===Is&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ui||S===Ki?z=i.DEPTH_COMPONENT24:S===xn?z=i.DEPTH_COMPONENT32F:S===Is&&(z=i.DEPTH_COMPONENT16),z}function M(A,S){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==He&&A.minFilter!==fn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function L(A){const S=A.target;S.removeEventListener("dispose",L),E(S),S.isVideoTexture&&h.delete(S)}function T(A){const S=A.target;S.removeEventListener("dispose",T),I(S)}function E(A){const S=n.get(A);if(S.__webglInit===void 0)return;const z=A.source,$=f.get(z);if($){const Q=$[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(A),Object.keys($).length===0&&f.delete(z)}n.remove(A)}function P(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const z=A.source,$=f.get(z);delete $[S.__cacheKey],o.memory.textures--}function I(A){const S=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let Q=0;Q<S.__webglFramebuffer[$].length;Q++)i.deleteFramebuffer(S.__webglFramebuffer[$][Q]);else i.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)i.deleteFramebuffer(S.__webglFramebuffer[$]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=A.textures;for(let $=0,Q=z.length;$<Q;$++){const K=n.get(z[$]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(z[$])}n.remove(A)}let x=0;function b(){x=0}function F(){const A=x;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),x+=1,A}function O(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function H(A,S){const z=n.get(A);if(A.isVideoTexture&&at(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$t(z,A,S);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}function X(A,S){const z=n.get(A);if(A.version>0&&z.__version!==A.version){$t(z,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)}function k(A,S){const z=n.get(A);if(A.version>0&&z.__version!==A.version){$t(z,A,S);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)}function J(A,S){const z=n.get(A);if(A.version>0&&z.__version!==A.version){Y(z,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)}const V={[Ls]:i.REPEAT,[ci]:i.CLAMP_TO_EDGE,[Zo]:i.MIRRORED_REPEAT},ut={[He]:i.NEAREST,[wu]:i.NEAREST_MIPMAP_NEAREST,[Vs]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[Zr]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},ft={[Cu]:i.NEVER,[Uu]:i.ALWAYS,[Ru]:i.LESS,[hh]:i.LEQUAL,[Pu]:i.EQUAL,[Du]:i.GEQUAL,[Lu]:i.GREATER,[Iu]:i.NOTEQUAL};function dt(A,S){if(S.type===xn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===fn||S.magFilter===Zr||S.magFilter===Vs||S.magFilter===hi||S.minFilter===fn||S.minFilter===Zr||S.minFilter===Vs||S.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,V[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,V[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,V[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ut[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ut[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ft[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===He||S.minFilter!==Vs&&S.minFilter!==hi||S.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function qt(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",L));const $=S.source;let Q=f.get($);Q===void 0&&(Q={},f.set($,Q));const K=O(S);if(K!==A.__cacheKey){Q[K]===void 0&&(Q[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[K].usedTimes++;const Et=Q[A.__cacheKey];Et!==void 0&&(Q[A.__cacheKey].usedTimes--,Et.usedTimes===0&&P(S)),A.__cacheKey=K,A.__webglTexture=Q[K].texture}return z}function $t(A,S,z){let $=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=i.TEXTURE_3D);const Q=qt(A,S),K=S.source;e.bindTexture($,A.__webglTexture,i.TEXTURE0+z);const Et=n.get(K);if(K.version!==Et.__version||Q===!0){e.activeTexture(i.TEXTURE0+z);const lt=te.getPrimaries(te.workingColorSpace),xt=S.colorSpace===Yn?null:te.getPrimaries(S.colorSpace),Kt=S.colorSpace===Yn||lt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let it=_(S.image,!1,s.maxTextureSize);it=Rt(S,it);const Mt=r.convert(S.format,S.colorSpace),Ot=r.convert(S.type);let zt=y(S.internalFormat,Mt,Ot,S.colorSpace,S.isVideoTexture);dt($,S);let bt;const Zt=S.mipmaps,Ht=S.isVideoTexture!==!0,ae=Et.__version===void 0||Q===!0,D=K.dataReady,_t=M(S,it);if(S.isDepthTexture)zt=v(S.format===Zi,S.type),ae&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,zt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,zt,it.width,it.height,0,Mt,Ot,null));else if(S.isDataTexture)if(Zt.length>0){Ht&&ae&&e.texStorage2D(i.TEXTURE_2D,_t,zt,Zt[0].width,Zt[0].height);for(let W=0,tt=Zt.length;W<tt;W++)bt=Zt[W],Ht?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,bt.width,bt.height,Mt,Ot,bt.data):e.texImage2D(i.TEXTURE_2D,W,zt,bt.width,bt.height,0,Mt,Ot,bt.data);S.generateMipmaps=!1}else Ht?(ae&&e.texStorage2D(i.TEXTURE_2D,_t,zt,it.width,it.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,Mt,Ot,it.data)):e.texImage2D(i.TEXTURE_2D,0,zt,it.width,it.height,0,Mt,Ot,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ht&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,zt,Zt[0].width,Zt[0].height,it.depth);for(let W=0,tt=Zt.length;W<tt;W++)if(bt=Zt[W],S.format!==pn)if(Mt!==null)if(Ht){if(D)if(S.layerUpdates.size>0){const pt=lc(bt.width,bt.height,S.format,S.type);for(const vt of S.layerUpdates){const jt=bt.data.subarray(vt*pt/bt.data.BYTES_PER_ELEMENT,(vt+1)*pt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,vt,bt.width,bt.height,1,Mt,jt,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,bt.width,bt.height,it.depth,Mt,bt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,zt,bt.width,bt.height,it.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,bt.width,bt.height,it.depth,Mt,Ot,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,zt,bt.width,bt.height,it.depth,0,Mt,Ot,bt.data)}else{Ht&&ae&&e.texStorage2D(i.TEXTURE_2D,_t,zt,Zt[0].width,Zt[0].height);for(let W=0,tt=Zt.length;W<tt;W++)bt=Zt[W],S.format!==pn?Mt!==null?Ht?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,bt.width,bt.height,Mt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,zt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,bt.width,bt.height,Mt,Ot,bt.data):e.texImage2D(i.TEXTURE_2D,W,zt,bt.width,bt.height,0,Mt,Ot,bt.data)}else if(S.isDataArrayTexture)if(Ht){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,zt,it.width,it.height,it.depth),D)if(S.layerUpdates.size>0){const W=lc(it.width,it.height,S.format,S.type);for(const tt of S.layerUpdates){const pt=it.data.subarray(tt*W/it.data.BYTES_PER_ELEMENT,(tt+1)*W/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,it.width,it.height,1,Mt,Ot,pt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,Mt,Ot,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,it.width,it.height,it.depth,0,Mt,Ot,it.data);else if(S.isData3DTexture)Ht?(ae&&e.texStorage3D(i.TEXTURE_3D,_t,zt,it.width,it.height,it.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,Mt,Ot,it.data)):e.texImage3D(i.TEXTURE_3D,0,zt,it.width,it.height,it.depth,0,Mt,Ot,it.data);else if(S.isFramebufferTexture){if(ae)if(Ht)e.texStorage2D(i.TEXTURE_2D,_t,zt,it.width,it.height);else{let W=it.width,tt=it.height;for(let pt=0;pt<_t;pt++)e.texImage2D(i.TEXTURE_2D,pt,zt,W,tt,0,Mt,Ot,null),W>>=1,tt>>=1}}else if(Zt.length>0){if(Ht&&ae){const W=gt(Zt[0]);e.texStorage2D(i.TEXTURE_2D,_t,zt,W.width,W.height)}for(let W=0,tt=Zt.length;W<tt;W++)bt=Zt[W],Ht?D&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Mt,Ot,bt):e.texImage2D(i.TEXTURE_2D,W,zt,Mt,Ot,bt);S.generateMipmaps=!1}else if(Ht){if(ae){const W=gt(it);e.texStorage2D(i.TEXTURE_2D,_t,zt,W.width,W.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Ot,it)}else e.texImage2D(i.TEXTURE_2D,0,zt,Mt,Ot,it);p(S)&&m($),Et.__version=K.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Y(A,S,z){if(S.image.length!==6)return;const $=qt(A,S),Q=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);const K=n.get(Q);if(Q.version!==K.__version||$===!0){e.activeTexture(i.TEXTURE0+z);const Et=te.getPrimaries(te.workingColorSpace),lt=S.colorSpace===Yn?null:te.getPrimaries(S.colorSpace),xt=S.colorSpace===Yn||Et===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Kt=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,Mt=[];for(let tt=0;tt<6;tt++)!Kt&&!it?Mt[tt]=_(S.image[tt],!0,s.maxCubemapSize):Mt[tt]=it?S.image[tt].image:S.image[tt],Mt[tt]=Rt(S,Mt[tt]);const Ot=Mt[0],zt=r.convert(S.format,S.colorSpace),bt=r.convert(S.type),Zt=y(S.internalFormat,zt,bt,S.colorSpace),Ht=S.isVideoTexture!==!0,ae=K.__version===void 0||$===!0,D=Q.dataReady;let _t=M(S,Ot);dt(i.TEXTURE_CUBE_MAP,S);let W;if(Kt){Ht&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Zt,Ot.width,Ot.height);for(let tt=0;tt<6;tt++){W=Mt[tt].mipmaps;for(let pt=0;pt<W.length;pt++){const vt=W[pt];S.format!==pn?zt!==null?Ht?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,0,0,vt.width,vt.height,zt,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,Zt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,0,0,vt.width,vt.height,zt,bt,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,Zt,vt.width,vt.height,0,zt,bt,vt.data)}}}else{if(W=S.mipmaps,Ht&&ae){W.length>0&&_t++;const tt=gt(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,Zt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(it){Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Mt[tt].width,Mt[tt].height,zt,bt,Mt[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Zt,Mt[tt].width,Mt[tt].height,0,zt,bt,Mt[tt].data);for(let pt=0;pt<W.length;pt++){const jt=W[pt].image[tt].image;Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,0,0,jt.width,jt.height,zt,bt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,Zt,jt.width,jt.height,0,zt,bt,jt.data)}}else{Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,zt,bt,Mt[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Zt,zt,bt,Mt[tt]);for(let pt=0;pt<W.length;pt++){const vt=W[pt];Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,0,0,zt,bt,vt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,Zt,zt,bt,vt.image[tt])}}}p(S)&&m(i.TEXTURE_CUBE_MAP),K.__version=Q.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function nt(A,S,z,$,Q,K){const Et=r.convert(z.format,z.colorSpace),lt=r.convert(z.type),xt=y(z.internalFormat,Et,lt,z.colorSpace);if(!n.get(S).__hasExternalTextures){const it=Math.max(1,S.width>>K),Mt=Math.max(1,S.height>>K);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,K,xt,it,Mt,S.depth,0,Et,lt,null):e.texImage2D(Q,K,xt,it,Mt,0,Et,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),et(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Q,n.get(z).__webglTexture,0,rt(S)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Q,n.get(z).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(A,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){const $=S.depthTexture,Q=$&&$.isDepthTexture?$.type:null,K=v(S.stencilBuffer,Q),Et=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=rt(S);et(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,K,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,K,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,K,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,A)}else{const $=S.textures;for(let Q=0;Q<$.length;Q++){const K=$[Q],Et=r.convert(K.format,K.colorSpace),lt=r.convert(K.type),xt=y(K.internalFormat,Et,lt,K.colorSpace),Kt=rt(S);z&&et(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,xt,S.width,S.height):et(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt,xt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,xt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);const $=n.get(S.depthTexture).__webglTexture,Q=rt(S);if(S.depthTexture.format===Gi)et(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(S.depthTexture.format===Zi)et(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ut(A){const S=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=$}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ht(S.__webglFramebuffer,A)}else if(z){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=i.createRenderbuffer(),St(S.__webglDepthbuffer[$],A,!1);else{const Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),St(S.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(A,S,z){const $=n.get(A);S!==void 0&&nt($.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ut(A)}function kt(A){const S=A.texture,z=n.get(A),$=n.get(S);A.addEventListener("dispose",T);const Q=A.textures,K=A.isWebGLCubeRenderTarget===!0,Et=Q.length>1;if(Et||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,o.memory.textures++),K){z.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[lt]=[];for(let xt=0;xt<S.mipmaps.length;xt++)z.__webglFramebuffer[lt][xt]=i.createFramebuffer()}else z.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let lt=0;lt<S.mipmaps.length;lt++)z.__webglFramebuffer[lt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Et)for(let lt=0,xt=Q.length;lt<xt;lt++){const Kt=n.get(Q[lt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&et(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let lt=0;lt<Q.length;lt++){const xt=Q[lt];z.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[lt]);const Kt=r.convert(xt.format,xt.colorSpace),it=r.convert(xt.type),Mt=y(xt.internalFormat,Kt,it,xt.colorSpace,A.isXRRenderTarget===!0),Ot=rt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,Mt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,z.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),St(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),dt(i.TEXTURE_CUBE_MAP,S);for(let lt=0;lt<6;lt++)if(S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)nt(z.__webglFramebuffer[lt][xt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,xt);else nt(z.__webglFramebuffer[lt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);p(S)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let lt=0,xt=Q.length;lt<xt;lt++){const Kt=Q[lt],it=n.get(Kt);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),dt(i.TEXTURE_2D,Kt),nt(z.__webglFramebuffer,A,Kt,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),p(Kt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(lt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,$.__webglTexture),dt(lt,S),S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)nt(z.__webglFramebuffer[xt],A,S,i.COLOR_ATTACHMENT0,lt,xt);else nt(z.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,lt,0);p(S)&&m(lt),e.unbindTexture()}A.depthBuffer&&Ut(A)}function Yt(A){const S=A.textures;for(let z=0,$=S.length;z<$;z++){const Q=S[z];if(p(Q)){const K=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Et=n.get(Q).__webglTexture;e.bindTexture(K,Et),m(K),e.unbindTexture()}}}const j=[],C=[];function ot(A){if(A.samples>0){if(et(A)===!1){const S=A.textures,z=A.width,$=A.height;let Q=i.COLOR_BUFFER_BIT;const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(A),lt=S.length>1;if(lt)for(let xt=0;xt<S.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let xt=0;xt<S.length;xt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[xt]);const Kt=n.get(S[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Kt,0)}i.blitFramebuffer(0,0,z,$,0,0,z,$,Q,i.NEAREST),l===!0&&(j.length=0,C.length=0,j.push(i.COLOR_ATTACHMENT0+xt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(j.push(K),C.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let xt=0;xt<S.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[xt]);const Kt=n.get(S[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function rt(A){return Math.min(s.maxSamples,A.samples)}function et(A){const S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function at(A){const S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Rt(A,S){const z=A.colorSpace,$=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Zn&&z!==Yn&&(te.getTransfer(z)===le?($!==pn||Q!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function gt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=b,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=k,this.setTextureCube=J,this.rebindTextures=It,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=et}function eg(i,t){function e(n,s=Yn){let r;const o=te.getTransfer(s);if(n===On)return i.UNSIGNED_BYTE;if(n===Na)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===th)return i.BYTE;if(n===eh)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===Ua)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===Nn)return i.HALF_FLOAT;if(n===ih)return i.ALPHA;if(n===sh)return i.RGB;if(n===pn)return i.RGBA;if(n===rh)return i.LUMINANCE;if(n===oh)return i.LUMINANCE_ALPHA;if(n===Gi)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===Oa)return i.RED;if(n===za)return i.RED_INTEGER;if(n===ah)return i.RG;if(n===Ba)return i.RG_INTEGER;if(n===ka)return i.RGBA_INTEGER;if(n===yr||n===Sr||n===br||n===wr)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jo||n===jo||n===Qo||n===ta)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ea||n===na||n===ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ea||n===na)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ia)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===fa||n===da||n===pa||n===ma||n===ga||n===_a)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ra)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===aa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===la)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ca)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ha)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ua)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===da)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ma)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ga)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_a)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tr||n===va||n===xa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Tr)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lh||n===Ma||n===ya||n===Sa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class ng extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class me extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ig={type:"move"};class To{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ig)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const sg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rg=`
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

}`;class og{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new De,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Oe({vertexShader:sg,fragmentShader:rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dt(new gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ag extends ts{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=new og,p=e.getContextAttributes();let m=null,y=null;const v=[],M=[],L=new Z;let T=null;const E=new Ge;E.layers.enable(1),E.viewport=new oe;const P=new Ge;P.layers.enable(2),P.viewport=new oe;const I=[E,P],x=new ng;x.layers.enable(1),x.layers.enable(2);let b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=v[Y];return nt===void 0&&(nt=new To,v[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=v[Y];return nt===void 0&&(nt=new To,v[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=v[Y];return nt===void 0&&(nt=new To,v[Y]=nt),nt.getHandSpace()};function O(Y){const nt=M.indexOf(Y.inputSource);if(nt===-1)return;const St=v[nt];St!==void 0&&(St.update(Y.inputSource,Y.frame,c||o),St.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",X);for(let Y=0;Y<v.length;Y++){const nt=M[Y];nt!==null&&(M[Y]=null,v[Y].disconnect(nt))}b=null,F=null,_.reset(),t.setRenderTarget(m),d=null,f=null,u=null,s=null,y=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const nt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new mn(d.framebufferWidth,d.framebufferHeight,{format:pn,type:On,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let nt=null,St=null,ht=null;p.depth&&(ht=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=p.stencil?Zi:Gi,St=p.stencil?Ki:ui);const Ut={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Ut),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new mn(f.textureWidth,f.textureHeight,{format:pn,type:On,depthTexture:new yh(f.textureWidth,f.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(Y){for(let nt=0;nt<Y.removed.length;nt++){const St=Y.removed[nt],ht=M.indexOf(St);ht>=0&&(M[ht]=null,v[ht].disconnect(St))}for(let nt=0;nt<Y.added.length;nt++){const St=Y.added[nt];let ht=M.indexOf(St);if(ht===-1){for(let It=0;It<v.length;It++)if(It>=M.length){M.push(St),ht=It;break}else if(M[It]===null){M[It]=St,ht=It;break}if(ht===-1)break}const Ut=v[ht];Ut&&Ut.connect(St)}}const k=new R,J=new R;function V(Y,nt,St){k.setFromMatrixPosition(nt.matrixWorld),J.setFromMatrixPosition(St.matrixWorld);const ht=k.distanceTo(J),Ut=nt.projectionMatrix.elements,It=St.projectionMatrix.elements,kt=Ut[14]/(Ut[10]-1),Yt=Ut[14]/(Ut[10]+1),j=(Ut[9]+1)/Ut[5],C=(Ut[9]-1)/Ut[5],ot=(Ut[8]-1)/Ut[0],rt=(It[8]+1)/It[0],et=kt*ot,at=kt*rt,Rt=ht/(-ot+rt),gt=Rt*-ot;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(gt),Y.translateZ(Rt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ut[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const A=kt+Rt,S=Yt+Rt,z=et-gt,$=at+(ht-gt),Q=j*Yt/S*A,K=C*Yt/S*A;Y.projectionMatrix.makePerspective(z,$,Q,K,A,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ut(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let nt=Y.near,St=Y.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(St=_.depthFar)),x.near=P.near=E.near=nt,x.far=P.far=E.far=St,(b!==x.near||F!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,F=x.far);const ht=Y.parent,Ut=x.cameras;ut(x,ht);for(let It=0;It<Ut.length;It++)ut(Ut[It],ht);Ut.length===2?V(x,E,P):x.projectionMatrix.copy(E.projectionMatrix),ft(Y,x,ht)};function ft(Y,nt,St){St===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(St.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ji*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let dt=null;function qt(Y,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){const St=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let ht=!1;St.length!==x.cameras.length&&(x.cameras.length=0,ht=!0);for(let It=0;It<St.length;It++){const kt=St[It];let Yt=null;if(d!==null)Yt=d.getViewport(kt);else{const C=u.getViewSubImage(f,kt);Yt=C.viewport,It===0&&(t.setRenderTargetTextures(y,C.colorTexture,f.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(y))}let j=I[It];j===void 0&&(j=new Ge,j.layers.enable(It),j.viewport=new oe,I[It]=j),j.matrix.fromArray(kt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(kt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),It===0&&(x.matrix.copy(j.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ht===!0&&x.cameras.push(j)}const Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const It=u.getDepthInformation(St[0]);It&&It.isValid&&It.texture&&_.init(t,It,s.renderState)}}for(let St=0;St<v.length;St++){const ht=M[St],Ut=v[St];ht!==null&&Ut!==void 0&&Ut.update(ht,nt,c||o)}dt&&dt(Y,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const $t=new Mh;$t.setAnimationLoop(qt),this.setAnimationLoop=function(Y){dt=Y},this.dispose=function(){}}}const ii=new Qe,lg=new Jt;function cg(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,_h(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,y,v,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ie&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ie&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),v=y.envMap,M=y.envMapRotation;v&&(p.envMap.value=v,ii.copy(M),ii.x*=-1,ii.y*=-1,ii.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),p.envMapRotation.value.setFromMatrix4(lg.makeRotationFromEuler(ii)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ie&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const M=v.program;n.uniformBlockBinding(y,M)}function c(y,v){let M=s[y.id];M===void 0&&(g(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",p));const L=v.program;n.updateUBOMapping(y,L);const T=t.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function h(y){const v=u();y.__bindingPointIndex=v;const M=i.createBuffer(),L=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=s[y.id],M=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let T=0,E=M.length;T<E;T++){const P=Array.isArray(M[T])?M[T]:[M[T]];for(let I=0,x=P.length;I<x;I++){const b=P[I];if(d(b,T,I,L)===!0){const F=b.__offset,O=Array.isArray(b.value)?b.value:[b.value];let H=0;for(let X=0;X<O.length;X++){const k=O[X],J=_(k);typeof k=="number"||typeof k=="boolean"?(b.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,F+H,b.__data)):k.isMatrix3?(b.__data[0]=k.elements[0],b.__data[1]=k.elements[1],b.__data[2]=k.elements[2],b.__data[3]=0,b.__data[4]=k.elements[3],b.__data[5]=k.elements[4],b.__data[6]=k.elements[5],b.__data[7]=0,b.__data[8]=k.elements[6],b.__data[9]=k.elements[7],b.__data[10]=k.elements[8],b.__data[11]=0):(k.toArray(b.__data,H),H+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,v,M,L){const T=y.value,E=v+"_"+M;if(L[E]===void 0)return typeof T=="number"||typeof T=="boolean"?L[E]=T:L[E]=T.clone(),!0;{const P=L[E];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return L[E]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(y){const v=y.uniforms;let M=0;const L=16;for(let E=0,P=v.length;E<P;E++){const I=Array.isArray(v[E])?v[E]:[v[E]];for(let x=0,b=I.length;x<b;x++){const F=I[x],O=Array.isArray(F.value)?F.value:[F.value];for(let H=0,X=O.length;H<X;H++){const k=O[H],J=_(k),V=M%L,ut=V%J.boundary,ft=V+ut;M+=ut,ft!==0&&L-ft<J.storage&&(M+=L-ft),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=J.storage}}}const T=M%L;return T>0&&(M+=L-T),y.__size=M,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}class ug{constructor(t={}){const{canvas:e=ju(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this.toneMapping=$n,this.toneMappingExposure=1;const v=this;let M=!1,L=0,T=0,E=null,P=-1,I=null;const x=new oe,b=new oe;let F=null;const O=new Tt(0);let H=0,X=e.width,k=e.height,J=1,V=null,ut=null;const ft=new oe(0,0,X,k),dt=new oe(0,0,X,k);let qt=!1;const $t=new Xa;let Y=!1,nt=!1;const St=new Jt,ht=new Jt,Ut=new R,It=new oe,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function j(){return E===null?J:1}let C=n;function ot(w,U){return e.getContext(w,U)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ia}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),C===null){const U="webgl2";if(C=ot(U,w),C===null)throw ot(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let rt,et,at,Rt,gt,A,S,z,$,Q,K,Et,lt,xt,Kt,it,Mt,Ot,zt,bt,Zt,Ht,ae,D;function _t(){rt=new g0(C),rt.init(),Ht=new eg(C,rt),et=new h0(C,rt,t,Ht),at=new jm(C),et.reverseDepthBuffer&&at.buffers.depth.setReversed(!0),Rt=new x0(C),gt=new Om,A=new tg(C,rt,at,gt,et,Ht,Rt),S=new f0(v),z=new m0(v),$=new Ef(C),ae=new l0(C,$),Q=new _0(C,$,Rt,ae),K=new y0(C,Q,$,Rt),zt=new M0(C,et,A),it=new u0(gt),Et=new Fm(v,S,z,rt,et,ae,it),lt=new cg(v,gt),xt=new Bm,Kt=new Xm(rt),Ot=new a0(v,S,z,at,K,f,l),Mt=new Zm(v,K,et),D=new hg(C,Rt,et,at),bt=new c0(C,rt,Rt),Zt=new v0(C,rt,Rt),Rt.programs=Et.programs,v.capabilities=et,v.extensions=rt,v.properties=gt,v.renderLists=xt,v.shadowMap=Mt,v.state=at,v.info=Rt}_t();const W=new ag(v,C);this.xr=W,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const w=rt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=rt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(w){w!==void 0&&(J=w,this.setSize(X,k,!1))},this.getSize=function(w){return w.set(X,k)},this.setSize=function(w,U,B=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=w,k=U,e.width=Math.floor(w*J),e.height=Math.floor(U*J),B===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(X*J,k*J).floor()},this.setDrawingBufferSize=function(w,U,B){X=w,k=U,J=B,e.width=Math.floor(w*B),e.height=Math.floor(U*B),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(ft)},this.setViewport=function(w,U,B,G){w.isVector4?ft.set(w.x,w.y,w.z,w.w):ft.set(w,U,B,G),at.viewport(x.copy(ft).multiplyScalar(J).round())},this.getScissor=function(w){return w.copy(dt)},this.setScissor=function(w,U,B,G){w.isVector4?dt.set(w.x,w.y,w.z,w.w):dt.set(w,U,B,G),at.scissor(b.copy(dt).multiplyScalar(J).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(w){at.setScissorTest(qt=w)},this.setOpaqueSort=function(w){V=w},this.setTransparentSort=function(w){ut=w},this.getClearColor=function(w){return w.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(w=!0,U=!0,B=!0){let G=0;if(w){let N=!1;if(E!==null){const st=E.texture.format;N=st===ka||st===Ba||st===za}if(N){const st=E.texture.type,mt=st===On||st===ui||st===Is||st===Ki||st===Na||st===Fa,wt=Ot.getClearColor(),At=Ot.getClearAlpha(),Nt=wt.r,Ft=wt.g,Ct=wt.b;mt?(d[0]=Nt,d[1]=Ft,d[2]=Ct,d[3]=At,C.clearBufferuiv(C.COLOR,0,d)):(g[0]=Nt,g[1]=Ft,g[2]=Ct,g[3]=At,C.clearBufferiv(C.COLOR,0,g))}else G|=C.COLOR_BUFFER_BIT}U&&(G|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(G|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),xt.dispose(),Kt.dispose(),gt.dispose(),S.dispose(),z.dispose(),K.dispose(),ae.dispose(),D.dispose(),Et.dispose(),W.dispose(),W.removeEventListener("sessionstart",cl),W.removeEventListener("sessionend",hl),Jn.stop()};function tt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=Rt.autoReset,U=Mt.enabled,B=Mt.autoUpdate,G=Mt.needsUpdate,N=Mt.type;_t(),Rt.autoReset=w,Mt.enabled=U,Mt.autoUpdate=B,Mt.needsUpdate=G,Mt.type=N}function vt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function jt(w){const U=w.target;U.removeEventListener("dispose",jt),Me(U)}function Me(w){ze(w),gt.remove(w)}function ze(w){const U=gt.get(w).programs;U!==void 0&&(U.forEach(function(B){Et.releaseProgram(B)}),w.isShaderMaterial&&Et.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,B,G,N,st){U===null&&(U=kt);const mt=N.isMesh&&N.matrixWorld.determinant()<0,wt=Jh(w,U,B,G,N);at.setMaterial(G,mt);let At=B.index,Nt=1;if(G.wireframe===!0){if(At=Q.getWireframeAttribute(B),At===void 0)return;Nt=2}const Ft=B.drawRange,Ct=B.attributes.position;let ie=Ft.start*Nt,ce=(Ft.start+Ft.count)*Nt;st!==null&&(ie=Math.max(ie,st.start*Nt),ce=Math.min(ce,(st.start+st.count)*Nt)),At!==null?(ie=Math.max(ie,0),ce=Math.min(ce,At.count)):Ct!=null&&(ie=Math.max(ie,0),ce=Math.min(ce,Ct.count));const pe=ce-ie;if(pe<0||pe===1/0)return;ae.setup(N,G,wt,B,At);let Ye,ee=bt;if(At!==null&&(Ye=$.get(At),ee=Zt,ee.setIndex(Ye)),N.isMesh)G.wireframe===!0?(at.setLineWidth(G.wireframeLinewidth*j()),ee.setMode(C.LINES)):ee.setMode(C.TRIANGLES);else if(N.isLine){let Pt=G.linewidth;Pt===void 0&&(Pt=1),at.setLineWidth(Pt*j()),N.isLineSegments?ee.setMode(C.LINES):N.isLineLoop?ee.setMode(C.LINE_LOOP):ee.setMode(C.LINE_STRIP)}else N.isPoints?ee.setMode(C.POINTS):N.isSprite&&ee.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ee.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))ee.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Pt=N._multiDrawStarts,Ae=N._multiDrawCounts,ne=N._multiDrawCount,ln=At?$.get(At).bytesPerElement:1,vi=gt.get(G).currentProgram.getUniforms();for(let $e=0;$e<ne;$e++)vi.setValue(C,"_gl_DrawID",$e),ee.render(Pt[$e]/ln,Ae[$e])}else if(N.isInstancedMesh)ee.renderInstances(ie,pe,N.count);else if(B.isInstancedBufferGeometry){const Pt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ae=Math.min(B.instanceCount,Pt);ee.renderInstances(ie,pe,Ae)}else ee.render(ie,pe)};function Qt(w,U,B){w.transparent===!0&&w.side===fe&&w.forceSinglePass===!1?(w.side=Ie,w.needsUpdate=!0,Hs(w,U,B),w.side=Fn,w.needsUpdate=!0,Hs(w,U,B),w.side=fe):Hs(w,U,B)}this.compile=function(w,U,B=null){B===null&&(B=w),p=Kt.get(B),p.init(U),y.push(p),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),w!==B&&w.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const G=new Set;return w.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const st=N.material;if(st)if(Array.isArray(st))for(let mt=0;mt<st.length;mt++){const wt=st[mt];Qt(wt,B,N),G.add(wt)}else Qt(st,B,N),G.add(st)}),y.pop(),p=null,G},this.compileAsync=function(w,U,B=null){const G=this.compile(w,U,B);return new Promise(N=>{function st(){if(G.forEach(function(mt){gt.get(mt).currentProgram.isReady()&&G.delete(mt)}),G.size===0){N(w);return}setTimeout(st,10)}rt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Be=null;function bn(w){Be&&Be(w)}function cl(){Jn.stop()}function hl(){Jn.start()}const Jn=new Mh;Jn.setAnimationLoop(bn),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(w){Be=w,W.setAnimationLoop(w),w===null?Jn.stop():Jn.start()},W.addEventListener("sessionstart",cl),W.addEventListener("sessionend",hl),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,U,E),p=Kt.get(w,y.length),p.init(U),y.push(p),ht.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$t.setFromProjectionMatrix(ht),nt=this.localClippingEnabled,Y=it.init(this.clippingPlanes,nt),_=xt.get(w,m.length),_.init(),m.push(_),W.enabled===!0&&W.isPresenting===!0){const st=v.xr.getDepthSensingMesh();st!==null&&qr(st,U,-1/0,v.sortObjects)}qr(w,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(V,ut),Yt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Yt&&Ot.addToRenderList(_,w),this.info.render.frame++,Y===!0&&it.beginShadows();const B=p.state.shadowsArray;Mt.render(B,w,U),Y===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=_.opaque,N=_.transmissive;if(p.setupLights(),U.isArrayCamera){const st=U.cameras;if(N.length>0)for(let mt=0,wt=st.length;mt<wt;mt++){const At=st[mt];fl(G,N,w,At)}Yt&&Ot.render(w);for(let mt=0,wt=st.length;mt<wt;mt++){const At=st[mt];ul(_,w,At,At.viewport)}}else N.length>0&&fl(G,N,w,U),Yt&&Ot.render(w),ul(_,w,U);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(v,w,U),ae.resetDefaultState(),P=-1,I=null,y.pop(),y.length>0?(p=y[y.length-1],Y===!0&&it.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function qr(w,U,B,G){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$t.intersectsSprite(w)){G&&It.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ht);const mt=K.update(w),wt=w.material;wt.visible&&_.push(w,mt,wt,B,It.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$t.intersectsObject(w))){const mt=K.update(w),wt=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),It.copy(w.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),It.copy(mt.boundingSphere.center)),It.applyMatrix4(w.matrixWorld).applyMatrix4(ht)),Array.isArray(wt)){const At=mt.groups;for(let Nt=0,Ft=At.length;Nt<Ft;Nt++){const Ct=At[Nt],ie=wt[Ct.materialIndex];ie&&ie.visible&&_.push(w,mt,ie,B,It.z,Ct)}}else wt.visible&&_.push(w,mt,wt,B,It.z,null)}}const st=w.children;for(let mt=0,wt=st.length;mt<wt;mt++)qr(st[mt],U,B,G)}function ul(w,U,B,G){const N=w.opaque,st=w.transmissive,mt=w.transparent;p.setupLightsView(B),Y===!0&&it.setGlobalState(v.clippingPlanes,B),G&&at.viewport(x.copy(G)),N.length>0&&Gs(N,U,B),st.length>0&&Gs(st,U,B),mt.length>0&&Gs(mt,U,B),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function fl(w,U,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new mn(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?Nn:On,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const st=p.state.transmissionRenderTarget[G.id],mt=G.viewport||x;st.setSize(mt.z,mt.w);const wt=v.getRenderTarget();v.setRenderTarget(st),v.getClearColor(O),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),Yt&&Ot.render(B);const At=v.toneMapping;v.toneMapping=$n;const Nt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),Y===!0&&it.setGlobalState(v.clippingPlanes,G),Gs(w,B,G),A.updateMultisampleRenderTarget(st),A.updateRenderTargetMipmap(st),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Ct=0,ie=U.length;Ct<ie;Ct++){const ce=U[Ct],pe=ce.object,Ye=ce.geometry,ee=ce.material,Pt=ce.group;if(ee.side===fe&&pe.layers.test(G.layers)){const Ae=ee.side;ee.side=Ie,ee.needsUpdate=!0,dl(pe,B,G,Ye,ee,Pt),ee.side=Ae,ee.needsUpdate=!0,Ft=!0}}Ft===!0&&(A.updateMultisampleRenderTarget(st),A.updateRenderTargetMipmap(st))}v.setRenderTarget(wt),v.setClearColor(O,H),Nt!==void 0&&(G.viewport=Nt),v.toneMapping=At}function Gs(w,U,B){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,st=w.length;N<st;N++){const mt=w[N],wt=mt.object,At=mt.geometry,Nt=G===null?mt.material:G,Ft=mt.group;wt.layers.test(B.layers)&&dl(wt,U,B,At,Nt,Ft)}}function dl(w,U,B,G,N,st){w.onBeforeRender(v,U,B,G,N,st),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),N.onBeforeRender(v,U,B,G,w,st),N.transparent===!0&&N.side===fe&&N.forceSinglePass===!1?(N.side=Ie,N.needsUpdate=!0,v.renderBufferDirect(B,U,G,N,w,st),N.side=Fn,N.needsUpdate=!0,v.renderBufferDirect(B,U,G,N,w,st),N.side=fe):v.renderBufferDirect(B,U,G,N,w,st),w.onAfterRender(v,U,B,G,N,st)}function Hs(w,U,B){U.isScene!==!0&&(U=kt);const G=gt.get(w),N=p.state.lights,st=p.state.shadowsArray,mt=N.state.version,wt=Et.getParameters(w,N.state,st,U,B),At=Et.getProgramCacheKey(wt);let Nt=G.programs;G.environment=w.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(w.isMeshStandardMaterial?z:S).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Nt===void 0&&(w.addEventListener("dispose",jt),Nt=new Map,G.programs=Nt);let Ft=Nt.get(At);if(Ft!==void 0){if(G.currentProgram===Ft&&G.lightsStateVersion===mt)return ml(w,wt),Ft}else wt.uniforms=Et.getUniforms(w),w.onBeforeCompile(wt,v),Ft=Et.acquireProgram(wt,At),Nt.set(At,Ft),G.uniforms=wt.uniforms;const Ct=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ct.clippingPlanes=it.uniform),ml(w,wt),G.needsLights=Qh(w),G.lightsStateVersion=mt,G.needsLights&&(Ct.ambientLightColor.value=N.state.ambient,Ct.lightProbe.value=N.state.probe,Ct.directionalLights.value=N.state.directional,Ct.directionalLightShadows.value=N.state.directionalShadow,Ct.spotLights.value=N.state.spot,Ct.spotLightShadows.value=N.state.spotShadow,Ct.rectAreaLights.value=N.state.rectArea,Ct.ltc_1.value=N.state.rectAreaLTC1,Ct.ltc_2.value=N.state.rectAreaLTC2,Ct.pointLights.value=N.state.point,Ct.pointLightShadows.value=N.state.pointShadow,Ct.hemisphereLights.value=N.state.hemi,Ct.directionalShadowMap.value=N.state.directionalShadowMap,Ct.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ct.spotShadowMap.value=N.state.spotShadowMap,Ct.spotLightMatrix.value=N.state.spotLightMatrix,Ct.spotLightMap.value=N.state.spotLightMap,Ct.pointShadowMap.value=N.state.pointShadowMap,Ct.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Ft,G.uniformsList=null,Ft}function pl(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Ar.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function ml(w,U){const B=gt.get(w);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Jh(w,U,B,G,N){U.isScene!==!0&&(U=kt),A.resetTextureUnits();const st=U.fog,mt=G.isMeshStandardMaterial?U.environment:null,wt=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Zn,At=(G.isMeshStandardMaterial?z:S).get(G.envMap||mt),Nt=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ft=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ct=!!B.morphAttributes.position,ie=!!B.morphAttributes.normal,ce=!!B.morphAttributes.color;let pe=$n;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(pe=v.toneMapping);const Ye=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ee=Ye!==void 0?Ye.length:0,Pt=gt.get(G),Ae=p.state.lights;if(Y===!0&&(nt===!0||w!==I)){const tn=w===I&&G.id===P;it.setState(G,w,tn)}let ne=!1;G.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Ae.state.version||Pt.outputColorSpace!==wt||N.isBatchedMesh&&Pt.batching===!1||!N.isBatchedMesh&&Pt.batching===!0||N.isBatchedMesh&&Pt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pt.instancing===!1||!N.isInstancedMesh&&Pt.instancing===!0||N.isSkinnedMesh&&Pt.skinning===!1||!N.isSkinnedMesh&&Pt.skinning===!0||N.isInstancedMesh&&Pt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pt.instancingMorph===!1&&N.morphTexture!==null||Pt.envMap!==At||G.fog===!0&&Pt.fog!==st||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==it.numPlanes||Pt.numIntersection!==it.numIntersection)||Pt.vertexAlphas!==Nt||Pt.vertexTangents!==Ft||Pt.morphTargets!==Ct||Pt.morphNormals!==ie||Pt.morphColors!==ce||Pt.toneMapping!==pe||Pt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,Pt.__version=G.version);let ln=Pt.currentProgram;ne===!0&&(ln=Hs(G,U,N));let vi=!1,$e=!1,Yr=!1;const ge=ln.getUniforms(),kn=Pt.uniforms;if(at.useProgram(ln.program)&&(vi=!0,$e=!0,Yr=!0),G.id!==P&&(P=G.id,$e=!0),vi||I!==w){et.reverseDepthBuffer?(St.copy(w.projectionMatrix),tf(St),ef(St),ge.setValue(C,"projectionMatrix",St)):ge.setValue(C,"projectionMatrix",w.projectionMatrix),ge.setValue(C,"viewMatrix",w.matrixWorldInverse);const tn=ge.map.cameraPosition;tn!==void 0&&tn.setValue(C,Ut.setFromMatrixPosition(w.matrixWorld)),et.logarithmicDepthBuffer&&ge.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ge.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),I!==w&&(I=w,$e=!0,Yr=!0)}if(N.isSkinnedMesh){ge.setOptional(C,N,"bindMatrix"),ge.setOptional(C,N,"bindMatrixInverse");const tn=N.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),ge.setValue(C,"boneTexture",tn.boneTexture,A))}N.isBatchedMesh&&(ge.setOptional(C,N,"batchingTexture"),ge.setValue(C,"batchingTexture",N._matricesTexture,A),ge.setOptional(C,N,"batchingIdTexture"),ge.setValue(C,"batchingIdTexture",N._indirectTexture,A),ge.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&ge.setValue(C,"batchingColorTexture",N._colorsTexture,A));const $r=B.morphAttributes;if(($r.position!==void 0||$r.normal!==void 0||$r.color!==void 0)&&zt.update(N,B,ln),($e||Pt.receiveShadow!==N.receiveShadow)&&(Pt.receiveShadow=N.receiveShadow,ge.setValue(C,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(kn.envMap.value=At,kn.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(kn.envMapIntensity.value=U.environmentIntensity),$e&&(ge.setValue(C,"toneMappingExposure",v.toneMappingExposure),Pt.needsLights&&jh(kn,Yr),st&&G.fog===!0&&lt.refreshFogUniforms(kn,st),lt.refreshMaterialUniforms(kn,G,J,k,p.state.transmissionRenderTarget[w.id]),Ar.upload(C,pl(Pt),kn,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ar.upload(C,pl(Pt),kn,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ge.setValue(C,"center",N.center),ge.setValue(C,"modelViewMatrix",N.modelViewMatrix),ge.setValue(C,"normalMatrix",N.normalMatrix),ge.setValue(C,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const tn=G.uniformsGroups;for(let Kr=0,tu=tn.length;Kr<tu;Kr++){const gl=tn[Kr];D.update(gl,ln),D.bind(gl,ln)}}return ln}function jh(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Qh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,U,B){gt.get(w.texture).__webglTexture=U,gt.get(w.depthTexture).__webglTexture=B;const G=gt.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){const B=gt.get(w);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,B=0){E=w,L=U,T=B;let G=!0,N=null,st=!1,mt=!1;if(w){const At=gt.get(w);if(At.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(C.FRAMEBUFFER,null),G=!1;else if(At.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(At.__hasExternalTextures)A.rebindTextures(w,gt.get(w.texture).__webglTexture,gt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ct=w.depthTexture;if(At.__boundDepthTexture!==Ct){if(Ct!==null&&gt.has(Ct)&&(w.width!==Ct.image.width||w.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const Nt=w.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(mt=!0);const Ft=gt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?N=Ft[U][B]:N=Ft[U],st=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?N=gt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ft)?N=Ft[B]:N=Ft,x.copy(w.viewport),b.copy(w.scissor),F=w.scissorTest}else x.copy(ft).multiplyScalar(J).floor(),b.copy(dt).multiplyScalar(J).floor(),F=qt;if(at.bindFramebuffer(C.FRAMEBUFFER,N)&&G&&at.drawBuffers(w,N),at.viewport(x),at.scissor(b),at.setScissorTest(F),st){const At=gt.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,At.__webglTexture,B)}else if(mt){const At=gt.get(w.texture),Nt=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,At.__webglTexture,B||0,Nt)}P=-1},this.readRenderTargetPixels=function(w,U,B,G,N,st,mt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(wt=wt[mt]),wt){at.bindFramebuffer(C.FRAMEBUFFER,wt);try{const At=w.texture,Nt=At.format,Ft=At.type;if(!et.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-G&&B>=0&&B<=w.height-N&&C.readPixels(U,B,G,N,Ht.convert(Nt),Ht.convert(Ft),st)}finally{const At=E!==null?gt.get(E).__webglFramebuffer:null;at.bindFramebuffer(C.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(w,U,B,G,N,st,mt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&mt!==void 0&&(wt=wt[mt]),wt){const At=w.texture,Nt=At.format,Ft=At.type;if(!et.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-G&&B>=0&&B<=w.height-N){at.bindFramebuffer(C.FRAMEBUFFER,wt);const Ct=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ct),C.bufferData(C.PIXEL_PACK_BUFFER,st.byteLength,C.STREAM_READ),C.readPixels(U,B,G,N,Ht.convert(Nt),Ht.convert(Ft),0);const ie=E!==null?gt.get(E).__webglFramebuffer:null;at.bindFramebuffer(C.FRAMEBUFFER,ie);const ce=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Qu(C,ce,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ct),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,st),C.deleteBuffer(Ct),C.deleteSync(ce),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,B=0){w.isTexture!==!0&&(Er("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-B),N=Math.floor(w.image.width*G),st=Math.floor(w.image.height*G),mt=U!==null?U.x:0,wt=U!==null?U.y:0;A.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,B,0,0,mt,wt,N,st),at.unbindTexture()},this.copyTextureToTexture=function(w,U,B=null,G=null,N=0){w.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],U=arguments[2],N=arguments[3]||0,B=null);let st,mt,wt,At,Nt,Ft;B!==null?(st=B.max.x-B.min.x,mt=B.max.y-B.min.y,wt=B.min.x,At=B.min.y):(st=w.image.width,mt=w.image.height,wt=0,At=0),G!==null?(Nt=G.x,Ft=G.y):(Nt=0,Ft=0);const Ct=Ht.convert(U.format),ie=Ht.convert(U.type);A.setTexture2D(U,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const ce=C.getParameter(C.UNPACK_ROW_LENGTH),pe=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ye=C.getParameter(C.UNPACK_SKIP_PIXELS),ee=C.getParameter(C.UNPACK_SKIP_ROWS),Pt=C.getParameter(C.UNPACK_SKIP_IMAGES),Ae=w.isCompressedTexture?w.mipmaps[N]:w.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Ae.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ae.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,wt),C.pixelStorei(C.UNPACK_SKIP_ROWS,At),w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,Nt,Ft,st,mt,Ct,ie,Ae.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,Nt,Ft,Ae.width,Ae.height,Ct,Ae.data):C.texSubImage2D(C.TEXTURE_2D,N,Nt,Ft,st,mt,Ct,ie,Ae),C.pixelStorei(C.UNPACK_ROW_LENGTH,ce),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pe),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ye),C.pixelStorei(C.UNPACK_SKIP_ROWS,ee),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Pt),N===0&&U.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),at.unbindTexture()},this.copyTextureToTexture3D=function(w,U,B=null,G=null,N=0){w.isTexture!==!0&&(Er("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,G=arguments[1]||null,w=arguments[2],U=arguments[3],N=arguments[4]||0);let st,mt,wt,At,Nt,Ft,Ct,ie,ce;const pe=w.isCompressedTexture?w.mipmaps[N]:w.image;B!==null?(st=B.max.x-B.min.x,mt=B.max.y-B.min.y,wt=B.max.z-B.min.z,At=B.min.x,Nt=B.min.y,Ft=B.min.z):(st=pe.width,mt=pe.height,wt=pe.depth,At=0,Nt=0,Ft=0),G!==null?(Ct=G.x,ie=G.y,ce=G.z):(Ct=0,ie=0,ce=0);const Ye=Ht.convert(U.format),ee=Ht.convert(U.type);let Pt;if(U.isData3DTexture)A.setTexture3D(U,0),Pt=C.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)A.setTexture2DArray(U,0),Pt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Ae=C.getParameter(C.UNPACK_ROW_LENGTH),ne=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ln=C.getParameter(C.UNPACK_SKIP_PIXELS),vi=C.getParameter(C.UNPACK_SKIP_ROWS),$e=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,pe.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,pe.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,At),C.pixelStorei(C.UNPACK_SKIP_ROWS,Nt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ft),w.isDataTexture||w.isData3DTexture?C.texSubImage3D(Pt,N,Ct,ie,ce,st,mt,wt,Ye,ee,pe.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Pt,N,Ct,ie,ce,st,mt,wt,Ye,pe.data):C.texSubImage3D(Pt,N,Ct,ie,ce,st,mt,wt,Ye,ee,pe),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ae),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ne),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ln),C.pixelStorei(C.UNPACK_SKIP_ROWS,vi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,$e),N===0&&U.generateMipmaps&&C.generateMipmap(Pt),at.unbindTexture()},this.initRenderTarget=function(w){gt.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),at.unbindTexture()},this.resetState=function(){L=0,T=0,E=null,at.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Ga?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===zr?"display-p3":"srgb"}}class $a{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Tt(t),this.near=e,this.far=n}clone(){return new $a(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Eh extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class fg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ba,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ue=new R;class Dr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=dn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=dn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=dn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=dn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=dn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ee(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Dr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ur extends mi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Di;const ds=new R,Ui=new R,Ni=new R,Fi=new Z,ps=new Z,Ah=new Jt,hr=new R,ms=new R,ur=new R,cc=new Z,Eo=new Z,hc=new Z;class Ea extends _e{constructor(t=new Ur){if(super(),this.isSprite=!0,this.type="Sprite",Di===void 0){Di=new he;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fg(e,5);Di.setIndex([0,1,2,0,2,3]),Di.setAttribute("position",new Dr(n,3,0,!1)),Di.setAttribute("uv",new Dr(n,2,3,!1))}this.geometry=Di,this.material=t,this.center=new Z(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ui.setFromMatrixScale(this.matrixWorld),Ah.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ni.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ui.multiplyScalar(-Ni.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;fr(hr.set(-.5,-.5,0),Ni,o,Ui,s,r),fr(ms.set(.5,-.5,0),Ni,o,Ui,s,r),fr(ur.set(.5,.5,0),Ni,o,Ui,s,r),cc.set(0,0),Eo.set(1,0),hc.set(1,1);let a=t.ray.intersectTriangle(hr,ms,ur,!1,ds);if(a===null&&(fr(ms.set(-.5,.5,0),Ni,o,Ui,s,r),Eo.set(0,1),a=t.ray.intersectTriangle(hr,ur,ms,!1,ds),a===null))return;const l=t.ray.origin.distanceTo(ds);l<t.near||l>t.far||e.push({distance:l,point:ds.clone(),uv:an.getInterpolation(ds,hr,ms,ur,cc,Eo,hc,new Z),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function fr(i,t,e,n,s,r){Fi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ps.x=r*Fi.x-s*Fi.y,ps.y=s*Fi.x+r*Fi.y):ps.copy(Fi),i.copy(t),i.x+=ps.x,i.y+=ps.y,i.applyMatrix4(Ah)}class dg extends De{constructor(t=null,e=1,n=1,s,r,o,a,l,c=He,h=He,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uc extends Ee{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Oi=new Jt,fc=new Jt,dr=[],dc=new pi,pg=new Jt,gs=new Dt,_s=new es;class kr extends Dt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new uc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,pg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new pi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Oi),dc.copy(t.boundingBox).applyMatrix4(Oi),this.boundingBox.union(dc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new es),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Oi),_s.copy(t.boundingSphere).applyMatrix4(Oi),this.boundingSphere.union(_s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(n),t.ray.intersectsSphere(_s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Oi),fc.multiplyMatrices(n,Oi),gs.matrixWorld=fc,gs.raycast(t,dr);for(let o=0,a=dr.length;o<a;o++){const l=dr[o];l.instanceId=r,l.object=this,e.push(l)}dr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new uc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new dg(new Float32Array(s*this.count),s,this.count,Oa,xn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ch extends mi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const pc=new Jt,Aa=new Va,pr=new es,mr=new R;class mg extends _e{constructor(t=new he,e=new Ch){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(s),pr.radius+=r,t.ray.intersectsSphere(pr)===!1)return;pc.copy(s).invert(),Aa.copy(t.ray).applyMatrix4(pc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const p=c.getX(g);mr.fromBufferAttribute(u,p),mc(mr,p,l,s,t,e,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)mr.fromBufferAttribute(u,g),mc(mr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mc(i,t,e,n,s,r,o){const a=Aa.distanceSqToPoint(i);if(a<e){const l=new R;Aa.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class gg extends De{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Z:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,s=[],r=[],o=[],a=new R,l=new Jt;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Se(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Se(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ka extends Sn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Z){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _g extends Ka{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Za(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const gr=new R,Ao=new Za,Co=new Za,Ro=new Za;class Rh extends Sn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(gr.subVectors(s[0],s[1]).add(s[0]),c=gr);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(gr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=gr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Ao.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,p),Co.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,p),Ro.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Ao.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Co.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ro.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Ao.calc(l),Co.calc(l),Ro.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function gc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function vg(i,t){const e=1-i;return e*e*t}function xg(i,t){return 2*(1-i)*i*t}function Mg(i,t){return i*i*t}function As(i,t,e,n){return vg(i,t)+xg(i,e)+Mg(i,n)}function yg(i,t){const e=1-i;return e*e*e*t}function Sg(i,t){const e=1-i;return 3*e*e*i*t}function bg(i,t){return 3*(1-i)*i*i*t}function wg(i,t){return i*i*i*t}function Cs(i,t,e,n,s){return yg(i,t)+Sg(i,e)+bg(i,n)+wg(i,s)}class Ph extends Sn{constructor(t=new Z,e=new Z,n=new Z,s=new Z){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Z){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cs(t,s.x,r.x,o.x,a.x),Cs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tg extends Sn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cs(t,s.x,r.x,o.x,a.x),Cs(t,s.y,r.y,o.y,a.y),Cs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Lh extends Sn{constructor(t=new Z,e=new Z){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ih extends Sn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dh extends Sn{constructor(t=new Z,e=new Z,n=new Z){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Z){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(As(t,s.x,r.x,o.x),As(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ja extends Sn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(As(t,s.x,r.x,o.x),As(t,s.y,r.y,o.y),As(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uh extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Z){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(gc(a,l.x,c.x,h.x,u.x),gc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Z().fromArray(s))}return this}}var Nr=Object.freeze({__proto__:null,ArcCurve:_g,CatmullRomCurve3:Rh,CubicBezierCurve:Ph,CubicBezierCurve3:Tg,EllipseCurve:Ka,LineCurve:Lh,LineCurve3:Ih,QuadraticBezierCurve:Dh,QuadraticBezierCurve3:Ja,SplineCurve:Uh});class Eg extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Nr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Nr[s.type]().fromJSON(s))}return this}}class _c extends Eg{constructor(t){super(),this.type="Path",this.currentPoint=new Z,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Lh(this.currentPoint.clone(),new Z(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Dh(this.currentPoint.clone(),new Z(t,e),new Z(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Ph(this.currentPoint.clone(),new Z(t,e),new Z(n,s),new Z(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Uh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Ka(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Bs extends he{constructor(t=[new Z(0,-.5),new Z(.5,0),new Z(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Se(s,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new R,f=new Z,d=new R,g=new R,_=new R;let p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-p,d.z=m*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let y=0;y<=e;y++){const v=n+y*h*s,M=Math.sin(v),L=Math.cos(v);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*M,u.y=t[T].y,u.z=t[T].x*L,o.push(u.x,u.y,u.z),f.x=y/e,f.y=T/(t.length-1),a.push(f.x,f.y);const E=l[3*T+0]*M,P=l[3*T+1],I=l[3*T+0]*L;c.push(E,P,I)}}for(let y=0;y<e;y++)for(let v=0;v<t.length-1;v++){const M=v+y*t.length,L=M,T=M+t.length,E=M+t.length+1,P=M+1;r.push(L,T,P),r.push(E,P,T)}this.setIndex(r),this.setAttribute("position",new Gt(o,3)),this.setAttribute("uv",new Gt(a,2)),this.setAttribute("normal",new Gt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bs(t.points,t.segments,t.phiStart,t.phiLength)}}class is extends he{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new R,h=new Z;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(a,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xt extends he{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],p=n/2;let m=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(d,2));function y(){const M=new R,L=new R;let T=0;const E=(e-t)/n;for(let P=0;P<=r;P++){const I=[],x=P/r,b=x*(e-t)+t;for(let F=0;F<=s;F++){const O=F/s,H=O*l+a,X=Math.sin(H),k=Math.cos(H);L.x=b*X,L.y=-x*n+p,L.z=b*k,u.push(L.x,L.y,L.z),M.set(X,E,k).normalize(),f.push(M.x,M.y,M.z),d.push(O,1-x),I.push(g++)}_.push(I)}for(let P=0;P<s;P++)for(let I=0;I<r;I++){const x=_[I][P],b=_[I+1][P],F=_[I+1][P+1],O=_[I][P+1];t>0&&(h.push(x,b,O),T+=3),e>0&&(h.push(b,F,O),T+=3)}c.addGroup(m,T,0),m+=T}function v(M){const L=g,T=new Z,E=new R;let P=0;const I=M===!0?t:e,x=M===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,p*x,0),f.push(0,x,0),d.push(.5,.5),g++;const b=g;for(let F=0;F<=s;F++){const H=F/s*l+a,X=Math.cos(H),k=Math.sin(H);E.x=I*k,E.y=p*x,E.z=I*X,u.push(E.x,E.y,E.z),f.push(0,x,0),T.x=X*.5+.5,T.y=k*.5*x+.5,d.push(T.x,T.y),g++}for(let F=0;F<s;F++){const O=L+F,H=b+F;M===!0?h.push(H,H+1,O):h.push(H+1,H,O),P+=3}c.addGroup(m,P,M===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ja extends he{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(r.slice(),3)),this.setAttribute("uv",new Gt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const v=new R,M=new R,L=new R;for(let T=0;T<e.length;T+=3)d(e[T+0],v),d(e[T+1],M),d(e[T+2],L),l(v,M,L,y)}function l(y,v,M,L){const T=L+1,E=[];for(let P=0;P<=T;P++){E[P]=[];const I=y.clone().lerp(M,P/T),x=v.clone().lerp(M,P/T),b=T-P;for(let F=0;F<=b;F++)F===0&&P===T?E[P][F]=I:E[P][F]=I.clone().lerp(x,F/b)}for(let P=0;P<T;P++)for(let I=0;I<2*(T-P)-1;I++){const x=Math.floor(I/2);I%2===0?(f(E[P][x+1]),f(E[P+1][x]),f(E[P][x])):(f(E[P][x+1]),f(E[P+1][x+1]),f(E[P+1][x]))}}function c(y){const v=new R;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(y),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){const y=new R;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];const M=p(y)/2/Math.PI+.5,L=m(y)/Math.PI+.5;o.push(M,1-L)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const v=o[y+0],M=o[y+2],L=o[y+4],T=Math.max(v,M,L),E=Math.min(v,M,L);T>.9&&E<.1&&(v<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),L<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,v){const M=y*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function g(){const y=new R,v=new R,M=new R,L=new R,T=new Z,E=new Z,P=new Z;for(let I=0,x=0;I<r.length;I+=9,x+=6){y.set(r[I+0],r[I+1],r[I+2]),v.set(r[I+3],r[I+4],r[I+5]),M.set(r[I+6],r[I+7],r[I+8]),T.set(o[x+0],o[x+1]),E.set(o[x+2],o[x+3]),P.set(o[x+4],o[x+5]),L.copy(y).add(v).add(M).divideScalar(3);const b=p(L);_(T,x+0,y,b),_(E,x+2,v,b),_(P,x+4,M,b)}}function _(y,v,M,L){L<0&&y.x===1&&(o[v]=y.x-1),M.x===0&&M.z===0&&(o[v]=L/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ja(t.vertices,t.indices,t.radius,t.details)}}class ss extends _c{constructor(t){super(t),this.uuid=Mn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new _c().fromJSON(s))}return this}}const Ag={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Nh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=Ig(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Us(r,o,e,a,l,d,0),o}};function Nh(i,t,e,n,s){let r,o;if(s===Vg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=vc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=vc(r,i[r],i[r+1],o);return o&&Gr(o,o.next)&&(Fs(o),o=o.next),o}function fi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Gr(e,e.next)||de(e.prev,e,e.next)===0)){if(Fs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Us(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Og(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Rg(i,n,s,r):Cg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Fs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Pg(fi(i),t,e),Us(i,t,e,n,s,r,2)):o===2&&Lg(i,t,e,n,s,r):Us(fi(i),t,e,n,s,r,1);break}}}function Cg(i){const t=i.prev,e=i,n=i.next;if(de(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Bi(s,a,r,l,o,c,g.x,g.y)&&de(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Rg(i,t,e,n){const s=i.prev,r=i,o=i.next;if(de(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=a>l?a>c?a:c:l>c?l:c,p=h>u?h>f?h:f:u>f?u:f,m=Ca(d,g,t,e,n),y=Ca(_,p,t,e,n);let v=i.prevZ,M=i.nextZ;for(;v&&v.z>=m&&M&&M.z<=y;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Bi(a,h,l,u,c,f,v.x,v.y)&&de(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=d&&M.x<=_&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&Bi(a,h,l,u,c,f,M.x,M.y)&&de(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Bi(a,h,l,u,c,f,v.x,v.y)&&de(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=y;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&Bi(a,h,l,u,c,f,M.x,M.y)&&de(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Pg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Gr(s,r)&&Fh(s,n,n.next,r)&&Ns(s,r)&&Ns(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Fs(n),Fs(n.next),n=i=r),n=n.next}while(n!==i);return fi(n)}function Lg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&kg(o,a)){let l=Oh(o,a);o=fi(o,o.next),l=fi(l,l.next),Us(o,t,e,n,s,r,0),Us(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ig(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Nh(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Bg(c));for(s.sort(Dg),r=0;r<s.length;r++)e=Ug(s[r],e);return e}function Dg(i,t){return i.x-t.x}function Ug(i,t){const e=Ng(i,t);if(!e)return t;const n=Oh(e,i);return fi(n,n.next),fi(e,e.next)}function Ng(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&Bi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ns(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Fg(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Fg(i,t){return de(i.prev,i,t.prev)<0&&de(t.next,i,i.next)<0}function Og(i,t,e,n){let s=i;do s.z===0&&(s.z=Ca(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,zg(s)}function zg(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function Ca(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Bg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Bi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function kg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Gg(i,t)&&(Ns(i,t)&&Ns(t,i)&&Hg(i,t)&&(de(i.prev,i,t.prev)||de(i,t.prev,t))||Gr(i,t)&&de(i.prev,i,i.next)>0&&de(t.prev,t,t.next)>0)}function de(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Gr(i,t){return i.x===t.x&&i.y===t.y}function Fh(i,t,e,n){const s=vr(de(i,t,e)),r=vr(de(i,t,n)),o=vr(de(e,n,i)),a=vr(de(e,n,t));return!!(s!==r&&o!==a||s===0&&_r(i,e,t)||r===0&&_r(i,n,t)||o===0&&_r(e,i,n)||a===0&&_r(e,t,n))}function _r(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function vr(i){return i>0?1:i<0?-1:0}function Gg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Fh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ns(i,t){return de(i.prev,i,i.next)<0?de(i,t,i.next)>=0&&de(i,i.prev,t)>=0:de(i,t,i.prev)<0||de(i,i.next,t)<0}function Hg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Oh(i,t){const e=new Ra(i.i,i.x,i.y),n=new Ra(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vc(i,t,e,n){const s=new Ra(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ra(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Vg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Kn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Kn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];xc(t),Mc(n,t);let o=t.length;e.forEach(xc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Mc(n,e[l]);const a=Ag.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function xc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Mc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Qa extends he{constructor(t=new ss([new Z(.5,.5),new Z(-.5,.5),new Z(-.5,-.5),new Z(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Gt(s,3)),this.setAttribute("uv",new Gt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Wg;let v,M=!1,L,T,E,P;m&&(v=m.getSpacedPoints(h),M=!0,f=!1,L=m.computeFrenetFrames(h,!1),T=new R,E=new R,P=new R),f||(p=0,d=0,g=0,_=0);const I=a.extractPoints(c);let x=I.shape;const b=I.holes;if(!Kn.isClockWise(x)){x=x.reverse();for(let j=0,C=b.length;j<C;j++){const ot=b[j];Kn.isClockWise(ot)&&(b[j]=ot.reverse())}}const O=Kn.triangulateShape(x,b),H=x;for(let j=0,C=b.length;j<C;j++){const ot=b[j];x=x.concat(ot)}function X(j,C,ot){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(C,ot)}const k=x.length,J=O.length;function V(j,C,ot){let rt,et,at;const Rt=j.x-C.x,gt=j.y-C.y,A=ot.x-j.x,S=ot.y-j.y,z=Rt*Rt+gt*gt,$=Rt*S-gt*A;if(Math.abs($)>Number.EPSILON){const Q=Math.sqrt(z),K=Math.sqrt(A*A+S*S),Et=C.x-gt/Q,lt=C.y+Rt/Q,xt=ot.x-S/K,Kt=ot.y+A/K,it=((xt-Et)*S-(Kt-lt)*A)/(Rt*S-gt*A);rt=Et+Rt*it-j.x,et=lt+gt*it-j.y;const Mt=rt*rt+et*et;if(Mt<=2)return new Z(rt,et);at=Math.sqrt(Mt/2)}else{let Q=!1;Rt>Number.EPSILON?A>Number.EPSILON&&(Q=!0):Rt<-Number.EPSILON?A<-Number.EPSILON&&(Q=!0):Math.sign(gt)===Math.sign(S)&&(Q=!0),Q?(rt=-gt,et=Rt,at=Math.sqrt(z)):(rt=Rt,et=gt,at=Math.sqrt(z/2))}return new Z(rt/at,et/at)}const ut=[];for(let j=0,C=H.length,ot=C-1,rt=j+1;j<C;j++,ot++,rt++)ot===C&&(ot=0),rt===C&&(rt=0),ut[j]=V(H[j],H[ot],H[rt]);const ft=[];let dt,qt=ut.concat();for(let j=0,C=b.length;j<C;j++){const ot=b[j];dt=[];for(let rt=0,et=ot.length,at=et-1,Rt=rt+1;rt<et;rt++,at++,Rt++)at===et&&(at=0),Rt===et&&(Rt=0),dt[rt]=V(ot[rt],ot[at],ot[Rt]);ft.push(dt),qt=qt.concat(dt)}for(let j=0;j<p;j++){const C=j/p,ot=d*Math.cos(C*Math.PI/2),rt=g*Math.sin(C*Math.PI/2)+_;for(let et=0,at=H.length;et<at;et++){const Rt=X(H[et],ut[et],rt);ht(Rt.x,Rt.y,-ot)}for(let et=0,at=b.length;et<at;et++){const Rt=b[et];dt=ft[et];for(let gt=0,A=Rt.length;gt<A;gt++){const S=X(Rt[gt],dt[gt],rt);ht(S.x,S.y,-ot)}}}const $t=g+_;for(let j=0;j<k;j++){const C=f?X(x[j],qt[j],$t):x[j];M?(E.copy(L.normals[0]).multiplyScalar(C.x),T.copy(L.binormals[0]).multiplyScalar(C.y),P.copy(v[0]).add(E).add(T),ht(P.x,P.y,P.z)):ht(C.x,C.y,0)}for(let j=1;j<=h;j++)for(let C=0;C<k;C++){const ot=f?X(x[C],qt[C],$t):x[C];M?(E.copy(L.normals[j]).multiplyScalar(ot.x),T.copy(L.binormals[j]).multiplyScalar(ot.y),P.copy(v[j]).add(E).add(T),ht(P.x,P.y,P.z)):ht(ot.x,ot.y,u/h*j)}for(let j=p-1;j>=0;j--){const C=j/p,ot=d*Math.cos(C*Math.PI/2),rt=g*Math.sin(C*Math.PI/2)+_;for(let et=0,at=H.length;et<at;et++){const Rt=X(H[et],ut[et],rt);ht(Rt.x,Rt.y,u+ot)}for(let et=0,at=b.length;et<at;et++){const Rt=b[et];dt=ft[et];for(let gt=0,A=Rt.length;gt<A;gt++){const S=X(Rt[gt],dt[gt],rt);M?ht(S.x,S.y+v[h-1].y,v[h-1].x+ot):ht(S.x,S.y,u+ot)}}}Y(),nt();function Y(){const j=s.length/3;if(f){let C=0,ot=k*C;for(let rt=0;rt<J;rt++){const et=O[rt];Ut(et[2]+ot,et[1]+ot,et[0]+ot)}C=h+p*2,ot=k*C;for(let rt=0;rt<J;rt++){const et=O[rt];Ut(et[0]+ot,et[1]+ot,et[2]+ot)}}else{for(let C=0;C<J;C++){const ot=O[C];Ut(ot[2],ot[1],ot[0])}for(let C=0;C<J;C++){const ot=O[C];Ut(ot[0]+k*h,ot[1]+k*h,ot[2]+k*h)}}n.addGroup(j,s.length/3-j,0)}function nt(){const j=s.length/3;let C=0;St(H,C),C+=H.length;for(let ot=0,rt=b.length;ot<rt;ot++){const et=b[ot];St(et,C),C+=et.length}n.addGroup(j,s.length/3-j,1)}function St(j,C){let ot=j.length;for(;--ot>=0;){const rt=ot;let et=ot-1;et<0&&(et=j.length-1);for(let at=0,Rt=h+p*2;at<Rt;at++){const gt=k*at,A=k*(at+1),S=C+rt+gt,z=C+et+gt,$=C+et+A,Q=C+rt+A;It(S,z,$,Q)}}}function ht(j,C,ot){l.push(j),l.push(C),l.push(ot)}function Ut(j,C,ot){kt(j),kt(C),kt(ot);const rt=s.length/3,et=y.generateTopUV(n,s,rt-3,rt-2,rt-1);Yt(et[0]),Yt(et[1]),Yt(et[2])}function It(j,C,ot,rt){kt(j),kt(C),kt(rt),kt(C),kt(ot),kt(rt);const et=s.length/3,at=y.generateSideWallUV(n,s,et-6,et-3,et-2,et-1);Yt(at[0]),Yt(at[1]),Yt(at[3]),Yt(at[1]),Yt(at[2]),Yt(at[3])}function kt(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function Yt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Xg(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Nr[s.type]().fromJSON(s)),new Qa(n,t.options)}}const Wg={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Z(r,o),new Z(a,l),new Z(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],_=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Z(o,1-l),new Z(c,1-u),new Z(f,1-g),new Z(_,1-m)]:[new Z(a,1-l),new Z(h,1-u),new Z(d,1-g),new Z(p,1-m)]}};function Xg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class gi extends ja{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new gi(t.radius,t.detail)}}class tl extends he{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,d=new R,g=new Z;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){const m=r+p/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){const p=_*(n+1);for(let m=0;m<n;m++){const y=m+p,v=y,M=y+n+1,L=y+n+2,T=y+1;a.push(v,M,T),a.push(M,L,T)}}this.setIndex(a),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ks extends he{constructor(t=new ss([new Z(0,.5),new Z(-.5,-.5),new Z(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Gt(s,3)),this.setAttribute("normal",new Gt(r,3)),this.setAttribute("uv",new Gt(o,2));function c(h){const u=s.length/3,f=h.extractPoints(e);let d=f.shape;const g=f.holes;Kn.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const y=g[p];Kn.isClockWise(y)===!0&&(g[p]=y.reverse())}const _=Kn.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const y=g[p];d=d.concat(y)}for(let p=0,m=d.length;p<m;p++){const y=d[p];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let p=0,m=_.length;p<m;p++){const y=_[p],v=y[0]+u,M=y[1]+u,L=y[2]+u;n.push(v,M,L),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return qg(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new ks(n,t.curveSegments)}}function qg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class xe extends he{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new R,f=new R,d=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){const y=[],v=m/n;let M=0;m===0&&o===0?M=.5/e:m===n&&l===Math.PI&&(M=-.5/e);for(let L=0;L<=e;L++){const T=L/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),p.push(T+M,1-v),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const v=h[m][y+1],M=h[m][y],L=h[m+1][y],T=h[m+1][y+1];(m!==0||o>0)&&d.push(v,M,T),(m!==n-1||l<Math.PI)&&d.push(M,L,T)}this.setIndex(d),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(_,3)),this.setAttribute("uv",new Gt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class zn extends he{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new R,u=new R,f=new R;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,p=d/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(_),u.y=(t+e*Math.cos(p))*Math.sin(_),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,p=(s+1)*(d-1)+g-1,m=(s+1)*(d-1)+g,y=(s+1)*d+g;o.push(_,p,y),o.push(p,m,y)}this.setIndex(o),this.setAttribute("position",new Gt(a,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Os extends he{constructor(t=new Ja(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new R,l=new R,c=new Z;let h=new R;const u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(d,2));function _(){for(let v=0;v<e;v++)p(v);p(r===!1?e:0),y(),m()}function p(v){h=t.getPointAt(v/e,h);const M=o.normals[v],L=o.binormals[v];for(let T=0;T<=s;T++){const E=T/s*Math.PI*2,P=Math.sin(E),I=-Math.cos(E);l.x=I*M.x+P*L.x,l.y=I*M.y+P*L.y,l.z=I*M.z+P*L.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=e;v++)for(let M=1;M<=s;M++){const L=(s+1)*(v-1)+(M-1),T=(s+1)*v+(M-1),E=(s+1)*v+M,P=(s+1)*(v-1)+M;g.push(L,T,P),g.push(T,E,P)}}function y(){for(let v=0;v<=e;v++)for(let M=0;M<=s;M++)c.x=v/e,c.y=M/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Os(new Nr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Yg extends Oe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class re extends mi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ch,this.normalScale=new Z(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ke extends re{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Z(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Se(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Hr extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class $g extends Hr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Po=new Jt,yc=new R,Sc=new R;class el{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Z(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xa,this._frameExtents=new Z(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;yc.setFromMatrixPosition(t.matrixWorld),e.position.copy(yc),Sc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Sc),e.updateMatrixWorld(),Po.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Po),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Po)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Kg extends el{constructor(){super(new Ge(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ji*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class bc extends Hr{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Kg}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const wc=new Jt,vs=new R,Lo=new R;class Zg extends el{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Z(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),vs.setFromMatrixPosition(t.matrixWorld),n.position.copy(vs),Lo.copy(n.position),Lo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Lo),n.updateMatrixWorld(),s.makeTranslation(-vs.x,-vs.y,-vs.z),wc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wc)}}class Fr extends Hr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Jg extends el{constructor(){super(new qa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jg extends Hr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new Jg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Qg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Tc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Tc(){return performance.now()}const Ec=new Jt;class t_{constructor(t,e,n=0,s=1/0){this.ray=new Va(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ec.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ec),this}intersectObject(t,e=!0,n=[]){return Pa(t,this,n,e),n.sort(Ac),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Pa(t[s],this,n,e);return n.sort(Ac),n}}function Ac(i,t){return i.distance-t.distance}function Pa(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Pa(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ia}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ia);const zh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class rs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const e_=new qa(-1,1,1,-1,0,1);class n_ extends he{constructor(){super(),this.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Gt([0,2,0,0,2,0],2))}}const i_=new n_;class nl{constructor(t){this._mesh=new Dt(i_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,e_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class s_ extends rs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Oe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ds.clone(t.uniforms),this.material=new Oe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new nl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Cc extends rs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class r_ extends rs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class o_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Z);this._width=n.width,this._height=n.height,e=new mn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Nn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new s_(zh),this.copyPass.material.blending=Un,this.clock=new Qg}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Cc!==void 0&&(o instanceof Cc?n=!0:o instanceof r_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Z);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class a_ extends rs{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Tt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const l_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Tt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Qi extends rs{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Z(t.x,t.y):new Z(256,256),this.clearColor=new Tt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new mn(r,o,{type:Nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new mn(r,o,{type:Nn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new mn(r,o,{type:Nn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=l_;this.highPassUniforms=Ds.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Oe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Z(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=zh;this.copyUniforms=Ds.clone(h.uniforms),this.blendMaterial=new Oe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Xi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Tt,this.oldClearAlpha=1,this.basic=new Fe,this.fsQuad=new nl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Z(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Qi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Qi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Oe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Z(.5,.5)},direction:{value:new Z(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Oe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Qi.BlurDirectionX=new Z(1,0);Qi.BlurDirectionY=new Z(0,1);const c_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class h_ extends rs{constructor(){super();const t=c_;this.uniforms=Ds.clone(t.uniforms),this.material=new Yg({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new nl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===le&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$c?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Kc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Zc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Da?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Jc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function xs(i,t){return new Fe({color:new Tt(i).multiplyScalar(t),side:fe})}function u_(){const i=new Eh;i.background=new Tt(460555);const t=new xe(10,32,16),e=[],n=t.attributes.position;for(let l=0;l<n.count;l++){const c=n.getY(l)/10,h=Math.max(0,1-Math.abs(c+.05)*3.2);e.push(.035+h*.1,.035+h*.075,.045+h*.05)}t.setAttribute("color",new Gt(e,3)),i.add(new Dt(t,new Fe({vertexColors:!0,side:Ie})));const s=new Dt(new ue(1.6,.08,.14),xs(15398143,9));s.position.set(0,2.1,-.1),i.add(s);const r=new Dt(new gn(3,2.2),xs(6957604,.22));r.rotation.x=Math.PI/2,r.position.y=2.3,i.add(r);for(let l=0;l<16;l++){const c=new Dt(new xe(.05,8,6),xs(16761978,6)),h=l/16*Math.PI*2;c.position.set(Math.cos(h)*1.6,2.05+Math.sin(l)*.05,Math.sin(h)*1.3),i.add(c)}const o=[[16726688,-2.5,2.2,-4],[3789055,2.8,2.6,-4.5],[16761402,.4,3,-5]];for(const[l,c,h,u]of o){const f=new Dt(new gn(1.4,.4),xs(l,.5));f.position.set(c,h,u),f.lookAt(0,1,0),i.add(f)}const a=new Dt(new gn(1,2),xs(16767392,1.6));return a.position.set(1.8,1.1,3.5),a.lookAt(0,1,0),i.add(a),i}function f_(i){const t=new wa(i),e=t.fromScene(u_(),.035);return t.dispose(),e.texture}const Bt={y:.9,x0:-.95,x1:.95,z0:-.52,z1:.4},q={x:0,z:0,R:.24,rimR:.18,bottomY:.975};q.depth=q.R-Math.sqrt(q.R*q.R-q.rimR*q.rimR);q.cy=q.bottomY+q.R;q.rimY=q.bottomY+q.depth;const Ce={x:-.53,z:.07,r:.158,h:.045};Ce.topY=Bt.y+Ce.h;const yt={x:.53,z:.07,r:.135,wellR:.095,lip:.018};yt.wellY=Bt.y+.012;const je={z:.265,r:.052,spacing:.118,portrait:{rows:[.235,.345],spacing:.112}},d_={oil:{x:-.29,z:-.265,r:.06},sauce:{x:.29,z:-.265,r:.07}},_n={x:.68,z:-.25},Io={z0:-.51,z1:-.37,y1:1.24},p_={board:{target:[Ce.x,Ce.topY,Ce.z+.01],w:.42,h:.4,pitch:1.05,yaw:.12},wok:{target:[q.x,q.bottomY,.075],w:.98,h:.52,pitch:.98,yaw:0,portrait:{target:[q.x,q.bottomY,.13],w:.52,h:.78,pitch:1.12}},plate:{target:[yt.x,yt.wellY+.02,yt.z],w:.36,h:.34,pitch:.95,yaw:-.18},beauty:{target:[yt.x+.1,yt.wellY+.03,yt.z],w:.46,h:.26,pitch:.42,yaw:0,portrait:{target:[yt.x,yt.wellY-.1,yt.z+.1],w:.36,h:.62,pitch:.62}},stall:{target:[0,Bt.y+.35,0],w:3,h:2.2,pitch:.16,yaw:Math.PI,portrait:{w:2.1,h:3.2,target:[0,Bt.y+.55,0]}}};function m_(i,{lowPower:t=!1}={}){const e=new ug({canvas:i,antialias:!0,powerPreference:"high-performance"}),n=Math.min(window.devicePixelRatio||1,t?1.25:2);e.setPixelRatio(n),e.outputColorSpace=on,e.toneMapping=Da,e.toneMappingExposure=1.05,e.shadowMap.enabled=!0,e.shadowMap.type=qc;const s=new Eh;s.background=new Tt(657936),s.fog=new $a(1446426,5,14),s.environment=f_(e),s.environmentIntensity=.7;const r=new Ge(42,1,.02,40),o=new $g(9082040,2759186,.35);s.add(o);const a=new jg(15660287,1.5);a.position.set(.15,2.4,.35),a.target.position.set(0,Bt.y,0),a.castShadow=!0,a.shadow.mapSize.set(t?1024:2048,t?1024:2048);const l=a.shadow.camera;l.left=-1.1,l.right=1.1,l.top=.8,l.bottom=-.8,l.near=.5,l.far=3.5,a.shadow.bias=-4e-4,a.shadow.normalBias=.01,a.shadow.radius=3,s.add(a,a.target);const c=new bc(16762250,4.5,4,.7,.6,1.6);c.position.set(-.6,1.85,.75),c.target.position.set(.1,Bt.y,.05),s.add(c,c.target);const h=new Fr(16738970,.18,5,1.6);h.position.set(-1.4,1.5,-1.3);const u=new Fr(5949695,.2,5,1.6);u.position.set(1.5,1.4,-1.2),s.add(h,u);const f=new bc(16769208,0,1.6,.5,.7,1.5);f.position.set(yt.x-.35,Bt.y+.55,yt.z+.45),f.target.position.set(yt.x,yt.wellY,yt.z),s.add(f,f.target);const d=new o_(e);d.addPass(new a_(s,r));const g=new Qi(new Z(256,256),.28,.3,1.5);t||d.addPass(g),d.addPass(new h_);const _={renderer:e,scene:s,camera:r,composer:d,bloom:g,lights:{hemi:o,tube:a,key:c,rimA:h,rimB:u,plateKey:f},width:1,height:1,resize(p,m){_.width=p,_.height=m,e.setSize(p,m,!1),d.setSize(p,m),d.setPixelRatio(e.getPixelRatio()),g.setSize(Math.max(1,p/2),Math.max(1,m/2)),r.aspect=p/m,r.updateProjectionMatrix()},render(){d.render()}};return _}function g_(i,t,e,n=1){const s=i.aspect<1,r=s&&t.portrait?{...t,...t.portrait}:t,o=s?54:40;i.fov!==o&&(i.fov=o,i.updateProjectionMatrix());const a=Ju.degToRad(o),l=2*Math.atan(Math.tan(a/2)*i.aspect),c=Math.max(r.w*n/2/Math.tan(l/2),r.h*n/2/Math.tan(a/2)),[h,u,f]=r.target,d=Math.cos(r.pitch),g=Math.sin(r.pitch);return e.pos.set(h+Math.sin(r.yaw)*d*c,u+g*c,f+Math.cos(r.yaw)*d*c),e.look.set(h,u,f),e}const Ms={khaopad:{id:"khaopad",name:"Khao Pad",local:"ข้าวผัด",cuisine:"thai",blurb:"Thai fried rice: garlic, egg and jasmine rice, seasoned with fish sauce.",weights:{rice:1.5,egg:1,garlic:.7,scallion:.5},garnish:{cucumber:[2,6],lime:[1,2],freshScallion:[2,12]},plate:{leaf:!1,rice:!1,mould:!0},bowls:["garlic","egg","rice","scallion"],steps:[{verb:"chop",item:"scallion",cuts:4,say:"Chop the spring onions",hint:"Swipe down through each dotted line"},{verb:"heat",liquid:"oil",say:"Fire up the wok",hint:"Push the flame up, then hold to pour the oil"},{verb:"add",items:["garlic"],say:"Garlic in",hint:"Tap the bowl"},{verb:"cook",focus:["garlic"],minTime:1.5,say:"Fry it golden",hint:"Seconds only. Golden, not brown"},{verb:"crack",item:"egg",say:"Crack in the egg",hint:"Tap the egg on the rim of the wok"},{verb:"add",items:["rice"],say:"Rice in, straight away",hint:"Tap the bowl before the egg sets"},{verb:"pour",liquid:"fishSauce",say:"Season with fish sauce",hint:"Hold to pour round the edge. Let go in the green"},{verb:"cook",focus:["rice","egg"],minTime:3,say:"Toss until every grain is hot",hint:"Keep it moving. Toss for wok hei"},{verb:"add",items:["scallion"],say:"Spring onions",hint:"Tap the bowl"},{verb:"cook",focus:["scallion"],minTime:1,say:"One quick toss",hint:"Keep them bright green"},{verb:"plate",say:"Plate it up",hint:"Tap the plate"},{verb:"garnish",items:["cucumber","lime","freshScallion"],say:"Garnish",hint:"Cucumber slices, a lime wedge, spring onion"}]},krapao:{id:"krapao",name:"Pad Kra Pao",local:"ผัดกะเพรา",cuisine:"thai",blurb:"Chicken, holy basil and fiery chilli over rice, with a crisp fried egg.",weights:{mince:1.5,basil:1,garlic:.6,birdChilli:.5},garnish:{friedEgg:[1,1],cucumber:[0,5]},plate:{leaf:!1,rice:!0},bowls:["garlic","birdChilli","mince","basil"],steps:[{verb:"chop",item:"birdChilli",cuts:5,say:"Chop the bird’s eye chillies",hint:"Swipe down through each dotted line. Careful, they bite"},{verb:"heat",liquid:"oil",say:"Fire up the wok",hint:"Push the flame up, then hold to pour the oil"},{verb:"add",items:["garlic","birdChilli"],say:"Garlic and chillies",hint:"Tap both bowls"},{verb:"cook",focus:["garlic","birdChilli"],minTime:1.5,say:"Fry until fragrant",hint:"A few seconds. The smoke will make you cough"},{verb:"add",items:["mince"],say:"Chicken in",hint:"Tap the bowl"},{verb:"cook",focus:["mince"],minTime:3,say:"Cook until it is no longer pink",hint:"Break it up. Keep it moving"},{verb:"pour",liquid:"krapao",say:"Pour the sauce",hint:"Oyster, soy and fish sauce. Let go in the green"},{verb:"add",items:["basil"],say:"Now the holy basil",hint:"Tap the bowl"},{verb:"cook",focus:["basil"],minTime:1,say:"Toss until just wilted",hint:"Flame down. It only needs a moment"},{verb:"plate",say:"Spoon it over the rice",hint:"Tap the plate"},{verb:"garnish",items:["friedEgg","cucumber"],say:"Top with a fried egg",hint:"Place the khai dao on top. Cucumber on the side"}]},padseeew:{id:"padseeew",name:"Pad See Ew",local:"ผัดซีอิ๊ว",cuisine:"thai",blurb:"Wide rice noodles, chicken and Chinese broccoli, charred in dark soy.",weights:{wideNoodles:1.5,chickenSlice:1.2,gailan:.8,egg:.8,garlic:.5},garnish:{pepper:[4,40],chilli:[0,30]},plate:{leaf:!1,rice:!1},bowls:["garlic","chickenSlice","egg","gailan","wideNoodles"],steps:[{verb:"chop",item:"gailan",cuts:5,say:"Cut the Chinese broccoli",hint:"Swipe down through each dotted line"},{verb:"heat",liquid:"oil",say:"Fire up the wok",hint:"Push the flame up, then hold to pour the oil"},{verb:"add",items:["garlic","chickenSlice"],say:"Garlic and chicken",hint:"Tap both bowls"},{verb:"cook",focus:["chickenSlice","garlic"],minTime:3,say:"Cook the chicken through",hint:"Keep it moving"},{verb:"crack",item:"egg",say:"Crack in the egg",hint:"Tap the egg on the rim of the wok"},{verb:"cook",focus:["egg"],minTime:1.5,say:"Let it half set, then scramble",hint:"A moment still, then stir"},{verb:"add",items:["gailan","wideNoodles"],say:"Broccoli and noodles",hint:"Tap both bowls"},{verb:"pour",liquid:"darkSoy",say:"Pour the dark soy",hint:"It stains the noodles. Let go in the green"},{verb:"cook",focus:["wideNoodles","gailan"],minTime:4,char:!0,say:"Spread them out and let them char",hint:"Leave them a moment, then toss. Repeat"},{verb:"plate",say:"Plate it up",hint:"Tap the plate"},{verb:"garnish",items:["pepper","chilli"],say:"Season",hint:"A dusting of white pepper. Chilli if you dare"}]},padthai:{id:"padthai",name:"Pad Thai",local:"ผัดไทย",cuisine:"thai",blurb:"Rice noodles, prawns and egg, tossed hard in tamarind over a roaring flame.",weights:{prawn:1.3,noodles:1.4,egg:.9,tofu:.8,garlic:.6,shallot:.5,sprouts:.7,chives:.5},garnish:{peanuts:[12,70],chilli:[4,40],lime:[1,2],freshSprouts:[3,16],freshChives:[2,14]},plate:{leaf:!0,rice:!1},bowls:["garlic","shallot","tofu","prawn","egg","noodles","sprouts","chives"],steps:[{verb:"chop",item:"chives",cuts:6,say:"Chop the garlic chives",hint:"Swipe down through each dotted line"},{verb:"heat",liquid:"oil",say:"Fire up the wok",hint:"Push the flame up, then hold to pour the oil"},{verb:"add",items:["garlic","shallot","tofu"],say:"Garlic, shallot and tofu",hint:"Tap each bowl to tip it in"},{verb:"cook",focus:["garlic","shallot","tofu"],minTime:3,say:"Fry until golden",hint:"Drag to stir. Flick up to toss. Do not let it sit"},{verb:"add",items:["prawn"],say:"In with the prawns",hint:"Tap the bowl"},{verb:"cook",focus:["prawn"],minTime:3,say:"Cook the prawns until pink",hint:"Grey means raw. Toss them"},{verb:"crack",item:"egg",say:"Crack in the egg",hint:"Tap the egg on the rim of the wok"},{verb:"cook",focus:["egg"],minTime:2,say:"Scramble the egg",hint:"Stir it through before it sets flat"},{verb:"add",items:["noodles"],say:"Now the noodles",hint:"Tap the bowl"},{verb:"pour",liquid:"tamarind",say:"Pour the tamarind sauce",hint:"Hold to pour. Let go in the green"},{verb:"cook",focus:["noodles"],minTime:4,say:"Toss until the noodles drink it up",hint:"Keep them moving. Toss for wok hei"},{verb:"add",items:["sprouts","chives"],say:"Bean sprouts and chives",hint:"Tap both bowls"},{verb:"cook",focus:["sprouts","chives"],minTime:1.5,say:"A quick toss, keep them crunchy",hint:"Seconds, not minutes"},{verb:"plate",say:"Plate it up",hint:"Tap the plate"},{verb:"garnish",items:["peanuts","chilli","lime","freshSprouts","freshChives"],say:"Garnish",hint:"Pick a garnish, then drag or tap on the plate"}]}},Rc=[{id:"thai",name:"Thailand",place:"Bangkok night market",stall:"bangkok",dishes:["khaopad","krapao","padseeew","padthai"],soon:["Tom Yum Goong","Green Curry","Som Tam","Mango Sticky Rice"]},{id:"japan",name:"Japan",place:"Osaka yatai",soon:["Yakisoba","Okonomiyaki"]},{id:"italy",name:"Italy",place:"Naples",soon:["Carbonara","Margherita"]},{id:"mexico",name:"Mexico",place:"Mexico City",soon:["Tacos al Pastor"]},{id:"india",name:"India",place:"Mumbai",soon:["Pav Bhaji","Butter Chicken"]}],nn={garlic:{name:"Garlic",shape:"bit",count:30,r:.0036,mass:.2,raw:15919826,cooked:14724184,over:9720350,cookTime:5.5,band:[.8,1.25],burnAt:1.7,gloss:.55,rough:.45},shallot:{name:"Shallot",shape:"ring",count:16,r:.0075,mass:.25,raw:14197428,cooked:13602124,over:8143390,cookTime:5.5,band:[.8,1.3],burnAt:1.8,gloss:.6,rough:.4},tofu:{name:"Tofu",shape:"cube",count:12,r:.0105,mass:1,raw:15852736,cooked:14457662,over:9325596,cookTime:5.5,band:[.85,1.4],burnAt:2,gloss:.5,rough:.55},prawn:{name:"Prawns",shape:"prawn",count:7,r:.019,mass:2,raw:11778230,cooked:16298636,over:14913892,cookTime:7,band:[.9,1.25],burnAt:1.9,gloss:.8,rough:.32,shrink:.86},egg:{name:"Egg",shape:"curd",count:14,r:.0125,mass:.8,raw:15656644,cooked:16773576,over:13605458,cookTime:5,band:[.85,1.4],burnAt:2,gloss:.5,rough:.5},noodles:{name:"Rice noodles",shape:"strand",strands:30,points:11,spacing:.019,width:.0095,r:.0062,mass:.35,raw:15920352,cooked:14260058,over:9062946,cookTime:9,band:[.85,1.3],burnAt:2.2,needsSauce:!0,gloss:.55,rough:.38},sprouts:{name:"Bean sprouts",shape:"sprout",count:16,r:.0095,mass:.3,raw:16118494,cooked:14470030,over:9072704,cookTime:3.5,band:[.2,.7],burnAt:1.6,gloss:.45,rough:.4},chives:{name:"Garlic chives",shape:"segment",count:14,r:.0085,mass:.2,raw:4164650,cooked:3501856,over:3815960,cookTime:3.5,band:[.2,.8],burnAt:1.6,gloss:.5,rough:.45,sheen:.6,bunch:{style:"blade",colour:4164650}},scallion:{name:"Spring onion",shape:"segment",count:14,r:.0085,mass:.2,raw:6466878,cooked:4950572,over:3815960,cookTime:3.5,band:[.2,.8],burnAt:1.6,gloss:.5,rough:.45,sheen:.5,bunch:{style:"blade",colour:6466878,base:15659740}},rice:{name:"Jasmine rice",shape:"clump",count:100,r:.0075,mass:.4,raw:16184300,cooked:15851442,over:11565626,cookTime:6,band:[.85,1.4],burnAt:2.2,gloss:.35,rough:.5,coatTint:.3},birdChilli:{name:"Bird’s eye chillies",shape:"ring",count:16,r:.0042,mass:.1,raw:14165532,cooked:11803666,over:5903372,cookTime:4,band:[.5,1.3],burnAt:1.9,gloss:.7,rough:.35,bunch:{style:"pods",colour:14165532,base:4160038}},mince:{name:"Chicken mince",shape:"mince",count:40,r:.0078,mass:.6,raw:15511204,cooked:15391938,over:11039804,cookTime:6,band:[.9,1.35],burnAt:2,gloss:.45,rough:.5,coatTint:.7},basil:{name:"Holy basil",shape:"leaf",count:22,r:.0105,mass:.1,raw:4165424,cooked:2842142,over:1979154,cookTime:2.5,band:[.3,.9],burnAt:1.5,gloss:.55,rough:.4,coatTint:.25,sheen:.7},chickenSlice:{name:"Chicken",shape:"slice",count:14,r:.0115,mass:1,raw:15775404,cooked:15851974,over:11565632,cookTime:6,band:[.9,1.35],burnAt:2,gloss:.45,rough:.5,coatTint:.55},gailan:{name:"Chinese broccoli",shape:"gailan",count:12,r:.013,mass:.5,raw:8370266,cooked:5085750,over:3362846,cookTime:3.5,band:[.5,1.15],burnAt:1.8,gloss:.55,rough:.4,coatTint:.25,sheen:.4,bunch:{style:"stalk",colour:8370266,base:3111466}},wideNoodles:{name:"Wide rice noodles",shape:"strand",strands:16,points:8,spacing:.022,width:.021,r:.0095,mass:.5,raw:16117990,cooked:9064488,over:4858898,cookTime:7,band:[.85,1.3],burnAt:2.2,needsSauce:!0,gloss:.6,rough:.35,charWant:[.08,.4]},peanuts:{name:"Crushed peanuts",shape:"peanut",count:1,r:.0042,mass:.1,garnish:!0,raw:13212252,cooked:13212252,over:13212252,gloss:.25,rough:.6},chilli:{name:"Chilli flakes",shape:"flake",count:1,r:.0026,mass:.05,garnish:!0,raw:11805210,cooked:11805210,over:11805210,gloss:.2,rough:.6},lime:{name:"Lime wedge",shape:"wedge",count:1,r:.017,mass:1.5,garnish:!0,raw:16777215,cooked:16777215,over:16777215,gloss:.7,rough:.35},freshSprouts:{name:"Fresh sprouts",shape:"sprout",count:1,r:.0095,mass:.3,garnish:!0,raw:16118494,cooked:16118494,over:16118494,gloss:.45,rough:.4},freshChives:{name:"Chive tips",shape:"segment",count:1,r:.0085,mass:.2,garnish:!0,raw:4889136,cooked:4889136,over:4889136,gloss:.5,rough:.45,sheen:.6},cucumber:{name:"Cucumber",shape:"disc",count:1,r:.014,mass:.8,garnish:!0,raw:16777215,cooked:16777215,over:16777215,gloss:.6,rough:.35},freshScallion:{name:"Spring onion",shape:"segment",count:1,r:.0085,mass:.2,garnish:!0,raw:7125062,cooked:7125062,over:7125062,gloss:.5,rough:.45,sheen:.5},friedEgg:{name:"Fried egg",shape:"friedEgg",count:1,r:.03,mass:3,garnish:!0,raw:16777215,cooked:16777215,over:16777215,gloss:.6,rough:.3},pepper:{name:"White pepper",shape:"flake",count:1,r:.0016,mass:.02,garnish:!0,raw:12103072,cooked:12103072,over:12103072,gloss:.1,rough:.8}},Rn={oil:{name:"Oil",colour:14266954,target:[.45,.68],rate:.32},tamarind:{name:"Tamarind sauce",colour:6040082,target:[.52,.74],rate:.28},fishSauce:{name:"Fish sauce",colour:11036190,target:[.36,.56],rate:.26},krapao:{name:"Kra Pao sauce",colour:4070412,target:[.46,.66],rate:.27},darkSoy:{name:"Dark soy sauce",colour:2757128,target:[.5,.7],rate:.27}};function Bh(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new he;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=Pc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);const g=Pc(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Pc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Ee(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){const _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}let __=(i,t)=>{const e=document.createElement("canvas");return e.width=i,e.height=t,e};const Do=new Map;function We(i,t){return __(i,t)}function Xe(i,{srgb:t=!0,repeat:e=!1,aniso:n=4}={}){const s=new gg(i);return t&&(s.colorSpace=on),e&&(s.wrapS=s.wrapT=Ls),s.anisotropy=n,s}function qe(i,t){return Do.has(i)||Do.set(i,t()),Do.get(i)}function Bn(i){let t=i>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function v_(){return qe("softDot",()=>{const i=We(128,128),t=i.getContext("2d"),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.55)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),Xe(i)})}function x_(){return qe("steam",()=>{const i=We(128,128),t=i.getContext("2d"),e=Bn(7);for(let n=0;n<14;n++){const s=40+e()*48,r=40+e()*48,o=14+e()*26,a=t.createRadialGradient(s,r,0,s,r,o);a.addColorStop(0,"rgba(255,255,255,0.22)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.beginPath(),t.arc(s,r,o,0,Math.PI*2),t.fill()}return Xe(i)})}function M_(){return qe("flame",()=>{const i=We(64,128),t=i.getContext("2d"),e=t.createRadialGradient(32,100,2,32,80,60);return e.addColorStop(0,"rgba(255,250,220,1)"),e.addColorStop(.25,"rgba(255,190,70,0.95)"),e.addColorStop(.6,"rgba(240,90,20,0.55)"),e.addColorStop(1,"rgba(200,40,10,0)"),t.fillStyle=e,t.beginPath(),t.moveTo(32,4),t.bezierCurveTo(58,50,60,110,32,124),t.bezierCurveTo(4,110,6,50,32,4),t.fill(),Xe(i)})}function y_(){return qe("blueFlame",()=>{const i=We(32,64),t=i.getContext("2d"),e=t.createLinearGradient(0,64,0,0);return e.addColorStop(0,"rgba(120,170,255,0.95)"),e.addColorStop(.5,"rgba(60,110,255,0.6)"),e.addColorStop(1,"rgba(40,60,255,0)"),t.fillStyle=e,t.beginPath(),t.moveTo(16,0),t.quadraticCurveTo(32,40,16,64),t.quadraticCurveTo(0,40,16,0),t.fill(),Xe(i)})}function S_(){return qe("board",()=>{const i=We(512,512),t=i.getContext("2d"),e=Bn(31);t.fillStyle="#a8723e",t.fillRect(0,0,512,512);const n=180,s=620;for(let o=20;o<900;o+=6+e()*7)t.strokeStyle=`rgba(${90+e()*30},${52+e()*20},24,${.18+e()*.22})`,t.lineWidth=2+e()*3,t.beginPath(),t.arc(n,s,o,0,Math.PI*2),t.stroke();for(let o=0;o<160;o++){const a=e()*512,l=e()*512,c=(e()-.5)*.6+(e()<.5?0:Math.PI/2),h=10+e()*50;t.strokeStyle=`rgba(220,180,130,${.1+e()*.12})`,t.lineWidth=2,t.beginPath(),t.moveTo(a,l),t.lineTo(a+Math.cos(c)*h,l+Math.sin(c)*h),t.stroke()}const r=t.createRadialGradient(256,256,60,256,256,300);return r.addColorStop(0,"rgba(60,30,10,0.18)"),r.addColorStop(1,"rgba(60,30,10,0)"),t.fillStyle=r,t.fillRect(0,0,512,512),Xe(i)})}function Lc(){return qe("brushed",()=>{const i=We(256,256),t=i.getContext("2d"),e=Bn(11);t.fillStyle="rgb(96,96,96)",t.fillRect(0,0,256,256);for(let n=0;n<900;n++){const s=e()*256,r=70+e()*70;t.fillStyle=`rgba(${r},${r},${r},0.35)`,t.fillRect(0,s,256,1+e()*1.5)}for(let n=0;n<20;n++){const s=e()*256,r=e()*256,o=12+e()*40,a=t.createRadialGradient(s,r,0,s,r,o);a.addColorStop(0,"rgba(150,150,150,0.35)"),a.addColorStop(1,"rgba(150,150,150,0)"),t.fillStyle=a,t.fillRect(s-o,r-o,o*2,o*2)}return Xe(i,{srgb:!1,repeat:!0})})}function b_(){return qe("wok",()=>{const i=We(512,512),t=i.getContext("2d"),e=Bn(5),n=t.createLinearGradient(0,0,0,512);n.addColorStop(0,"#15110e"),n.addColorStop(.22,"#201813"),n.addColorStop(.4,"#2c2a31"),n.addColorStop(.49,"#56565a"),n.addColorStop(.52,"#3a3e4c"),n.addColorStop(.7,"#1c1714"),n.addColorStop(1,"#0e0b09"),t.fillStyle=n,t.fillRect(0,0,512,512);for(let s=0;s<400;s++){const r=e()*512,o=e()*512,a=20+e()*90;t.fillStyle=`rgba(${e()<.5?"90,60,30":"10,8,6"},${.05+e()*.08})`,t.fillRect(r,o,a,2+e()*3)}return Xe(i,{repeat:!0})})}function w_(){return qe("leaf",()=>{const i=We(512,512),t=i.getContext("2d"),e=Bn(19);t.fillStyle="#3f7d2a",t.fillRect(0,0,512,512);const n=t.createLinearGradient(0,0,512,0);n.addColorStop(0,"rgba(20,50,10,0.35)"),n.addColorStop(.5,"rgba(120,170,60,0.18)"),n.addColorStop(1,"rgba(20,50,10,0.35)"),t.fillStyle=n,t.fillRect(0,0,512,512);for(let s=-40;s<560;s+=5+e()*4)t.strokeStyle=`rgba(${150+e()*40},${200+e()*30},110,${.16+e()*.16})`,t.lineWidth=2,t.beginPath(),t.moveTo(0,s),t.lineTo(512,s+40),t.stroke();t.fillStyle="rgba(190,215,140,0.55)",t.fillRect(0,250,512,10);for(let s=0;s<30;s++)t.fillStyle=`rgba(110,90,40,${.15+e()*.2})`,t.fillRect(e()*512,e()*512,2+e()*4,2+e()*3);return Xe(i)})}function T_(){return qe("plateRim",()=>{const i=We(512,64),t=i.getContext("2d");t.fillStyle="#f3f1ea",t.fillRect(0,0,512,64),t.fillStyle="#2f5aa0",t.fillRect(0,44,512,5),t.fillRect(0,54,512,3);for(let e=0;e<512;e+=32)t.beginPath(),t.arc(e+16,30,7,0,Math.PI*2),t.fill(),t.fillRect(e+4,28,24,3);return Xe(i,{repeat:!0})})}function E_(){return qe("street",()=>{const i=We(512,512),t=i.getContext("2d"),e=Bn(23);t.fillStyle="#2c2b2a",t.fillRect(0,0,512,512);for(let n=0;n<512;n+=64)for(let s=0;s<512;s+=64){const r=44+e()*18;t.fillStyle=`rgb(${r},${r-2},${r-4})`,t.fillRect(s+2,n+2,60,60)}for(let n=0;n<60;n++)t.fillStyle=`rgba(0,0,0,${.1+e()*.2})`,t.beginPath(),t.arc(e()*512,e()*512,6+e()*30,0,Math.PI*2),t.fill();return Xe(i,{repeat:!0})})}function A_(i="#c8322b",t="#efe6d2"){return qe("canopy"+i+t,()=>{const e=We(256,256),n=e.getContext("2d");for(let r=0;r<256;r+=32)n.fillStyle=r/32%2?t:i,n.fillRect(r,0,32,256);const s=Bn(3);for(let r=0;r<40;r++)n.fillStyle=`rgba(0,0,0,${.03+s()*.05})`,n.fillRect(0,s()*256,256,2+s()*8);return Xe(e,{repeat:!0})})}function C_(i,{w:t=512,h:e=256,bg:n="#10131a",fg:s="#ffd23c",glow:r="#ff7a1a",box:o=!1}={}){return qe("sign"+i.join("|")+n+s,()=>{const a=We(t,e),l=a.getContext("2d");if(l.fillStyle=n,l.fillRect(0,0,t,e),o){const h=l.createLinearGradient(0,0,0,e);h.addColorStop(0,"rgba(255,255,255,0.12)"),h.addColorStop(1,"rgba(0,0,0,0.2)"),l.fillStyle=h,l.fillRect(0,0,t,e)}l.textAlign="center",l.textBaseline="middle";const c=i.length;return i.forEach((h,u)=>{const f=Math.floor(u===0?e*(c>1?.42:.6):e*.22);l.font=`700 ${f}px "Thonburi","Leelawadee UI","Noto Sans Thai","Sukhumvit Set",sans-serif`;const d=c>1?u===0?e*.4:e*.8:e*.52;l.shadowColor=r,l.shadowBlur=o?0:18,l.fillStyle=s,l.fillText(h,t/2,d),o||(l.shadowBlur=6,l.fillText(h,t/2,d))}),Xe(a)})}function R_(){return qe("backdrop",()=>{const e=We(2048,768),n=e.getContext("2d"),s=Bn(41),r=n.createLinearGradient(0,0,0,768);r.addColorStop(0,"#0b0d1a"),r.addColorStop(.55,"#1b1626"),r.addColorStop(1,"#2a1a18"),n.fillStyle=r,n.fillRect(0,0,2048,768);let o=0;for(;o<2048;){const l=160+s()*200,c=768*(.55+s()*.35);n.fillStyle=`rgb(${18+s()*14},${16+s()*12},${20+s()*14})`,n.fillRect(o,768-c,l,c);for(let h=768-c+30;h<628;h+=58)for(let u=o+16;u<o+l-30;u+=44){if(s()<.45)continue;const f=s()<.7;n.fillStyle=f?`rgba(255,${170+s()*50},${90+s()*40},${.18+s()*.25})`:`rgba(140,200,255,${.12+s()*.18})`,n.fillRect(u,h,16,22)}s()<.6&&(n.fillStyle=`rgba(255,${190+s()*40},120,${.25+s()*.25})`,n.fillRect(o+10,638,l-20,120)),o+=l+4}n.strokeStyle="rgba(0,0,0,0.7)",n.lineWidth=2;for(let l=0;l<7;l++){const c=60+s()*200;n.beginPath(),n.moveTo(0,c),n.quadraticCurveTo(2048/2,c+60+s()*60,2048,c+(s()-.5)*80),n.stroke()}const a=["255,190,90","255,150,80","255,90,170","110,200,255","255,230,170"];for(let l=0;l<90;l++){const c=s()*2048,h=768*(.35+s()*.6),u=5+s()*16,f=a[Math.floor(s()*a.length)],d=n.createRadialGradient(c,h,0,c,h,u),g=.1+s()*.22;d.addColorStop(0,`rgba(${f},${g})`),d.addColorStop(.8,`rgba(${f},${g*.8})`),d.addColorStop(1,`rgba(${f},0)`),n.fillStyle=d,n.beginPath(),n.arc(c,h,u,0,Math.PI*2),n.fill()}return Xe(e)})}function P_(i){return qe("cond"+i,()=>{const t=We(64,64),e=t.getContext("2d"),n=Bn(i.length*13),s={sugar:"#efe9dc",flakes:"#9c2418",fish:"#b0701e",vinegar:"#e8dfc8"}[i];e.fillStyle=s,e.fillRect(0,0,64,64);for(let r=0;r<90;r++){const o=i==="sugar"?"rgba(255,255,255,0.5)":i==="flakes"?"rgba(230,120,40,0.6)":"rgba(200,40,20,0.7)";e.fillStyle=o,e.fillRect(n()*64,n()*64,2+n()*2,2+n()*2)}return Xe(t)})}function il(i){let t=i>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function L_(){const i={};i.steel=new re({color:12567495,metalness:1,roughness:.38,roughnessMap:Lc(),side:fe}),i.bowl=new re({color:11120050,metalness:1,roughness:.46,side:fe}),i.steelDark=new re({color:9343896,metalness:1,roughness:.42,roughnessMap:Lc()}),i.iron=new re({color:1841946,metalness:.7,roughness:.62}),i.street=new re({color:10131604,map:E_(),roughness:.3,metalness:0}),i.street.map.repeat.set(7,7),i.board=new re({map:S_(),roughness:.78,metalness:0}),i.boardSide=new re({color:6175262,roughness:.9,metalness:0}),i.plate=new ke({color:15921386,roughness:.2,clearcoat:1,clearcoatRoughness:.08,metalness:0,side:fe}),i.plateRim=new ke({map:T_(),roughness:.2,clearcoat:1,clearcoatRoughness:.08,metalness:0,side:fe}),i.plateRim.map.repeat.set(10,1),i.leaf=new ke({map:w_(),roughness:.35,clearcoat:.6,clearcoatRoughness:.2,metalness:0,side:fe}),i.glass=new ke({color:16777215,roughness:.05,metalness:0,transparent:!0,opacity:.16,clearcoat:1,depthWrite:!1}),i.canopy=new re({map:A_(),roughness:.85,side:fe,metalness:0}),i.canopy.map.repeat.set(3,1),i.pole=new re({color:10133670,metalness:1,roughness:.4}),i.bulb=new Fe({color:new Tt(16762999).multiplyScalar(3)}),i.wire=new Fe({color:526344}),i.tube=new Fe({color:new Tt(15660799).multiplyScalar(3.2)}),i.stool=new re({color:13116188,roughness:.45,metalness:0}),i.stoolBlue=new re({color:2777784,roughness:.45,metalness:0}),i.gas=new re({color:11676192,roughness:.4,metalness:0}),i.oil=new ke({color:13146666,roughness:.05,clearcoat:1,metalness:0}),i.sauce=new ke({color:4857872,roughness:.12,clearcoat:1,metalness:0}),i.lime=new ke({color:7319086,roughness:.45,clearcoat:.5,metalness:0}),i.egg=new re({color:15255968,roughness:.6,metalness:0}),i.noodleDry=new re({color:15524556,roughness:.7,metalness:0}),i.chilli=new ke({color:12722202,roughness:.3,clearcoat:.8,metalness:0}),i.greens=new re({color:4033068,roughness:.55,metalness:0}),i.caseLight=new Fe({color:new Tt(16773328).multiplyScalar(2.2)}),i.backdrop=new Fe({map:R_(),fog:!1,color:11579568}),i.backdrop.map.wrapS=Ls,i.backdrop.map.repeat.set(2,1),i.farStall=new re({color:2763312,roughness:.8,metalness:0}),i.farGlow=new Fe({color:new Tt(16756832).multiplyScalar(1.6)});for(const t of["sugar","flakes","fish","vinegar"])i["cond_"+t]=new ke({map:P_(t),roughness:.3,clearcoat:.6,metalness:0});return i}function Lt(i,t,e=0,n=0,s=0,r={}){const o=new Dt(i,t);return o.position.set(e,n,s),r.ry&&(o.rotation.y=r.ry),r.rx&&(o.rotation.x=r.rx),r.rz&&(o.rotation.z=r.rz),o.castShadow=r.cast??!0,o.receiveShadow=!0,r.dynamic&&(o.userData.dynamic=!0),o}function sl(i,t=40){return new Bs(i.map(([e,n])=>new Z(e,n)),t)}function I_(i,t){const e=Bt.y,n=Bt.x1-Bt.x0,s=Bt.z1-Bt.z0,r=(Bt.z0+Bt.z1)/2;i.add(Lt(new ue(n,.03,s),t.steel,0,e-.015,r));const o=new Xt(.012,.012,n,10);o.rotateZ(Math.PI/2),i.add(Lt(o,t.steel,0,e-.012,Bt.z1)),i.add(Lt(new ue(n-.02,e-.05,.02),t.steelDark,0,(e-.05)/2+.02,Bt.z0+.02)),i.add(Lt(new ue(n-.02,e-.05,.02),t.steelDark,0,(e-.05)/2+.02,Bt.z1-.03));for(const a of[Bt.x0+.01,Bt.x1-.01])i.add(Lt(new ue(.02,e-.05,s-.04),t.steelDark,a,(e-.05)/2+.02,r));for(const a of[Bt.x0-.02,Bt.x1+.02]){const l=new zn(.26,.018,8,36);l.rotateY(Math.PI/2),i.add(Lt(l,t.iron,a,.28,r));const c=new Xt(.03,.03,.05,10);c.rotateZ(Math.PI/2),i.add(Lt(c,t.pole,a,.28,r));for(let h=0;h<12;h++){const u=new Xt(.002,.002,.5,3);u.rotateX(h/12*Math.PI),i.add(Lt(u,t.pole,a,.28,r,{cast:!1}))}}i.add(Lt(new Xt(.15,.15,.5,20),t.gas,1.22,.25,.25)),i.add(Lt(new xe(.15,20,10,0,Math.PI*2,0,Math.PI/2),t.gas,1.22,.5,.25)),i.add(Lt(new Xt(.03,.03,.08,10),t.pole,1.22,.66,.25))}function D_(i,t){const e=Bt.x0+.04,n=Bt.x1-.04,s=Bt.y,r=Io.y1,o=Io.z0,a=Io.z1,l=(e+n)/2,c=(o+a)/2,h=n-e;for(const m of[e,n,l])for(const y of[o,a])i.add(Lt(new ue(.018,r-s,.018),t.pole,m,(s+r)/2,y));i.add(Lt(new ue(h,.02,a-o+.02),t.steel,l,r,c));for(const m of[o,a])i.add(Lt(new gn(h,r-s),t.glass,l,(s+r)/2,m,{cast:!1}));i.add(Lt(new ue(h-.1,.008,.02),t.caseLight,l,r-.016,c,{cast:!1}));const u=il(77),f=new xe(.022,12,8);f.scale(1,.9,1.15);for(let m=0;m<26;m++)i.add(Lt(f,t.lime,-.78+u()*.26,s+.022+(m>14?.03:0),o+.03+u()*.08,{ry:u()*6}));const d=new xe(.021,12,8);d.scale(1,1.25,1);for(let m=0;m<12;m++)i.add(Lt(d,t.egg,-.4+m%6*.045,s+.027,o+.04+Math.floor(m/6)*.05));const g=new ue(.16,.035,.08);for(let m=0;m<5;m++)i.add(Lt(g,t.noodleDry,.02+m%2*.02,s+.018+m*.036,c,{ry:(u()-.5)*.2}));const _=new Xt(.004,.001,.05,6);_.rotateZ(Math.PI/2);for(let m=0;m<40;m++)i.add(Lt(_,t.chilli,.28+u()*.16,s+.006+u()*.02,o+.02+u()*.1,{ry:u()*6,cast:!1}));const p=new gi(.05,1);p.scale(1.4,.5,.9);for(let m=0;m<3;m++)i.add(Lt(p,t.greens,.6+m*.09,s+.03,c+(u()-.5)*.04,{ry:u()*3}))}function U_(i,t){const e=new zn(q.rimR*.78,.011,8,40);e.rotateX(Math.PI/2),i.add(Lt(e,t.iron,q.x,q.bottomY+.018,q.z));const n=new Xt(q.rimR*.82,q.rimR*.9,.06,36,1,!0);i.add(Lt(n,t.iron,q.x,Bt.y+.03,q.z));for(let o=0;o<3;o++){const a=o/3*Math.PI*2+.5;i.add(Lt(new ue(.02,.05,.05),t.iron,q.x+Math.cos(a)*.135,q.bottomY+.005,q.z+Math.sin(a)*.135,{ry:-a}))}const s=new zn(.06,.012,8,24);s.rotateX(Math.PI/2),i.add(Lt(s,t.iron,q.x,Bt.y+.02,q.z));const r=new Xt(.018,.02,.02,16);r.rotateX(Math.PI/2),i.add(Lt(r,t.iron,q.x+.12,Bt.y-.05,Bt.z1+.01))}function N_(i,t){const e=new Xt(Ce.r,Ce.r*1.01,Ce.h,48,1),n=Lt(e,[t.boardSide,t.board,t.boardSide],Ce.x,Bt.y+Ce.h/2,Ce.z);i.add(n)}function F_(){const i=yt.r,t=yt.wellR,e=yt.lip,n=.0015;return sl([[0,-.01],[t*.62,-.01],[t*.66,-.006],[t*.7,-.003],[t+.01,-.002],[i-.01,e-.004],[i,e-.002],[i+.001,e],[i-.004,e+.001],[i-.012,e*.85],[t+.012,.004],[t,n],[0,n]],56)}function O_(i,t){const e=yt.wellY-.0015;i.add(Lt(F_(),t.plate,yt.x,e,yt.z));const n=sl([[yt.r-.012,yt.lip*.85+7e-4],[yt.r-.004,yt.lip+.0017]],56);i.add(Lt(n,t.plateRim,yt.x,e,yt.z,{cast:!1}));const s=new ss,r=il(12);for(let h=0;h<=40;h++){const u=h/40*Math.PI*2,f=yt.wellR*(1.08+(r()-.5)*.05);h===0?s.moveTo(Math.cos(u)*f,Math.sin(u)*f):s.lineTo(Math.cos(u)*f,Math.sin(u)*f)}const o=new ks(s,1),a=o.attributes.uv,l=o.attributes.position;for(let h=0;h<a.count;h++)a.setXY(h,l.getX(h)/(yt.wellR*2.4)+.5,l.getY(h)/(yt.wellR*2.4)+.5);o.rotateX(-Math.PI/2);for(let h=0;h<l.count;h++){const u=Math.hypot(l.getX(h),l.getZ(h));l.setY(h,Math.max(0,u-yt.wellR)*.5)}o.computeVertexNormals();const c=Lt(o,t.leaf,yt.x,yt.wellY+.0012,yt.z,{ry:.4,cast:!1,dynamic:!0});c.name="bananaLeaf",i.add(c)}function z_(i,t){for(const[e,n]of[["oil",t.oil],["sauce",t.sauce]]){const s=d_[e],r=e==="oil"?.07:.09;i.add(Lt(sl([[0,.002],[s.r-.004,.002],[s.r,.01],[s.r,r],[s.r+.004,r+.002],[s.r-.003,r]],32),t.steel,s.x,Bt.y,s.z));const o=new is(s.r-.003,32);o.rotateX(-Math.PI/2),i.add(Lt(o,n,s.x,Bt.y+r*.78,s.z,{cast:!1}));const a=new xe(.025,14,8,0,Math.PI*2,Math.PI/2,Math.PI/2);i.add(Lt(a,t.steel,s.x-.015,Bt.y+r*.78,s.z+.01));const l=new Xt(.004,.004,.2,8);i.add(Lt(l,t.steel,s.x+.02,Bt.y+r+.06,s.z+.03,{rz:-.45,rx:.2}))}}function B_(i,t){const e=["sugar","flakes","fish","vinegar"],n=new ue(.2,.006,.2);i.add(Lt(n,t.steel,_n.x,Bt.y+.003,_n.z));const s=new zn(.035,.004,6,20,Math.PI);i.add(Lt(s,t.steel,_n.x,Bt.y+.14,_n.z)),i.add(Lt(new Xt(.004,.004,.14,6),t.steel,_n.x-.035,Bt.y+.07,_n.z)),i.add(Lt(new Xt(.004,.004,.14,6),t.steel,_n.x+.035,Bt.y+.07,_n.z)),e.forEach((r,o)=>{const a=_n.x+(o%2?.05:-.05),l=_n.z+(o<2?-.05:.05),c=r==="sugar"||r==="flakes"?.045:.055;i.add(Lt(new Xt(.032,.032,c,16),t["cond_"+r],a,Bt.y+.006+c/2,l)),i.add(Lt(new Xt(.036,.036,.075,16,1,!0),t.glass,a,Bt.y+.044,l,{cast:!1})),i.add(Lt(new Xt(.038,.038,.008,16),t.steel,a,Bt.y+.085,l)),i.add(Lt(new Xt(.003,.003,.08,6),t.steel,a+.012,Bt.y+.1,l,{rz:.25}))})}function k_(i,t){for(const f of[-1.18,1.18])for(const d of[-.95,.85])i.add(Lt(new Xt(.018,.018,2.2,10),t.pole,f,2.2/2,d));const o=new gn(2.7,2.1,16,12),a=o.attributes.position;for(let f=0;f<a.count;f++){const d=a.getX(f)/1.35,g=a.getY(f)/1.05;a.setZ(f,-(1-d*d)*(1-g*g)*.12)}o.rotateX(Math.PI/2),o.computeVertexNormals(),i.add(Lt(o,t.canopy,0,2.2+.02,(-.95+.85)/2,{cast:!1}));const l=new Xt(.014,.014,1.2,12);l.rotateZ(Math.PI/2),i.add(Lt(l,t.tube,0,1.92,-.12,{cast:!1}));for(const f of[-.5,.5])i.add(Lt(new Xt(.002,.002,.26,4),t.wire,f,2.05,-.12,{cast:!1}));const c=[];for(let f=0;f<=24;f++){const d=f/24,g=-1.18+d*1.18*2;c.push(new R(g,2.2-.08-Math.sin(d*Math.PI)*.22,-.95-.02))}const h=new Os(new Rh(c),48,.003,4,!1);i.add(Lt(h,t.wire,0,0,0,{cast:!1}));const u=new xe(.022,10,8);for(let f=1;f<24;f+=2)i.add(Lt(u,t.bulb,c[f].x,c[f].y-.03,c[f].z,{cast:!1}))}function G_(i,t){const e=new gn(16,16);e.rotateX(-Math.PI/2),i.add(Lt(e,t.street,0,0,0,{cast:!1}));const n=new Xt(.15,.13,.03,20),s=new Xt(.13,.17,.4,20,1,!0),r=il(4);[[-.7,-1.35],[-.15,-1.55],[.5,-1.3],[1,-1.7],[-1.2,-1.9]].forEach(([l,c],h)=>{const u=h===3?t.stoolBlue:t.stool;i.add(Lt(s,u,l,.2,c)),i.add(Lt(n,u,l,.415,c,{ry:r()}))}),i.add(Lt(new ue(.9,.025,.6),t.steelDark,.1,.72,-2));for(const[l,c]of[[-.3,-1.75],[.5,-1.75],[-.3,-2.25],[.5,-2.25]])i.add(Lt(new Xt(.012,.012,.72,6),t.pole,l,.36,c));const a=[[-2.6,-3.4],[2.4,-3.8],[-3.6,-6],[3.8,-6.5],[.2,-7.5]];for(const[l,c]of a){i.add(Lt(new ue(1.6,.9,.8),t.farStall,l,.45,c,{cast:!1})),i.add(Lt(new ue(1.9,.04,1.4),t.farGlow,l,2.1,c,{cast:!1}));for(let h=0;h<5;h++)i.add(Lt(new xe(.035,8,6),t.bulb,l-.8+h*.4,2,c+.7,{cast:!1}))}}function H_(i){const t=[{lines:["ผัดไทย","PAD THAI"],x:-2,y:2.6,z:-3,w:1.3,h:.65,fg:"#ffd23c",glow:"#ff7a1a"},{lines:["อร่อย"],x:2.3,y:2.9,z:-4.2,w:1.1,h:.45,fg:"#ff5ab4",glow:"#ff1a8c"},{lines:["ก๋วยเตี๋ยว"],x:3.4,y:2.2,z:-2.6,w:1.2,h:.4,fg:"#63e3ff",glow:"#1ab8ff",ry:-.6},{lines:["ชาเย็น","THAI ICED TEA"],x:-3.4,y:2,z:-2.2,w:1,h:.5,fg:"#ffffff",glow:"#ff9a3a",box:!0,bg:"#e2621c",ry:.6}];for(const e of t){const n=C_(e.lines,{fg:e.fg,glow:e.glow,box:e.box,bg:e.bg||"#0c0e14"}),s=new Fe({map:n,color:new Tt(1.5,1.5,1.5),fog:!1}),r=new Dt(new gn(e.w,e.h),s);r.position.set(e.x,e.y,e.z),e.ry&&(r.rotation.y=e.ry),i.add(r)}}function V_(i,t){const e=new Xt(8.5,8.5,7,64,1,!0),n=new Dt(e,t.backdrop);n.material.side=Ie,n.position.set(0,3.1,0),n.rotation.y=Math.PI*.5,i.add(n)}function W_(i){const t=new Map,e=[];i.updateMatrixWorld(!0);for(const s of[...i.children]){if(!s.isMesh||s.userData.dynamic||Array.isArray(s.material)||s.material.transparent){e.push(s);continue}const r=(s.geometry.index?s.geometry.toNonIndexed():s.geometry.clone()).applyMatrix4(s.matrixWorld),o=Object.keys(r.attributes).sort().join(","),a=s.material.uuid+"|"+o+"|"+s.castShadow;t.has(a)||t.set(a,{mat:s.material,cast:s.castShadow,geos:[]}),t.get(a).geos.push(r)}const n=new me;for(const s of e)n.add(s);for(const{mat:s,cast:r,geos:o}of t.values()){const a=Bh(o),l=new Dt(a,s);l.castShadow=r,l.receiveShadow=!0,n.add(l)}return n}function X_(i=L_()){const t=new me;I_(t,i),D_(t,i),U_(t,i),N_(t,i),O_(t,i),z_(t,i),B_(t,i),k_(t,i),G_(t,i),H_(t),V_(t,i);const e=W_(t);return e.name="stall",{group:e,materials:i}}const Rs=i=>q.R-Math.sqrt(q.R*q.R-i*i);function q_(){const i=[];for(let n=0;n<=22;n++){const s=n/22*q.rimR;i.push(new Z(s,Rs(s)))}const e=Rs(q.rimR);i.push(new Z(q.rimR+.003,e+.002)),i.push(new Z(q.rimR+.006,e-.001)),i.push(new Z(q.rimR+.004,e-.005));for(let n=22;n>=0;n--){const s=n/22*(q.rimR+.002);i.push(new Z(s,Rs(s*.99)-.0025))}return i}function Ic(i,t,e){const n=Math.asin(Math.min(.99,i/q.R)),s=new xe(q.R-.0012,40,8,0,Math.PI*2,Math.PI-n,n),r=new ke({color:t,roughness:.06,metalness:0,clearcoat:1,clearcoatRoughness:.03,transparent:!0,opacity:e,depthWrite:!1}),o=new Dt(s,r);return o.position.set(0,q.R,0),o.renderOrder=1,o}class Y_{constructor(){this.group=new me,this.body=new me,this.group.position.set(q.x,q.bottomY,q.z),this.group.add(this.body);const t=b_();this.steel=new ke({map:t,color:16777215,metalness:.55,roughness:.42,clearcoat:.35,clearcoatRoughness:.35,side:fe});const e=new Dt(new Bs(q_(),64),this.steel);e.castShadow=!0,e.receiveShadow=!0,e.name="wokBowl",this.bowl=e,this.body.add(e);const n=new re({color:5911576,roughness:.6,metalness:0}),s=new re({color:2762790,roughness:.5,metalness:.8}),r=new me,o=new Dt(new Xt(.008,.009,.12,10),s);o.rotation.x=Math.PI/2,o.position.z=.06;const a=new Dt(new Xt(.015,.013,.16,12),n);a.rotation.x=Math.PI/2,a.position.z=.19,r.add(o,a),r.position.set(0,Rs(q.rimR)-.01,q.rimR+.002),r.rotation.set(-.28,.5,0),r.position.applyAxisAngle(new R(0,1,0),.5);for(const f of r.children)f.castShadow=!0;this.body.add(r);const l=new Dt(new zn(.025,.005,6,16,Math.PI),s);l.position.set(0,Rs(q.rimR)-.006,-.18-.018),l.rotation.x=-Math.PI/2+.3,this.body.add(l),this.oilPool=Ic(.07,14068026,.55),this.saucePool=Ic(.08,4857356,.9),this.oilPool.visible=this.saucePool.visible=!1,this.body.add(this.oilPool,this.saucePool),this.tongues=[];const c=new Ur({map:M_(),color:16777215,blending:Xi,depthWrite:!1,transparent:!0}),h=18;for(let f=0;f<h;f++){const d=new Ea(c.clone()),g=f/h*Math.PI*2;d.userData={a:g,phase:Math.random()*10,r:q.rimR*(.93+f%3*.04)},d.center.set(.5,.05),d.renderOrder=2,this.group.add(d),this.tongues.push(d)}this.blue=[];const u=new Ur({map:y_(),blending:Xi,depthWrite:!1,transparent:!0});for(let f=0;f<16;f++){const d=new Ea(u.clone()),g=f/16*Math.PI*2;d.position.set(Math.cos(g)*.065,Bt.y+.03-q.bottomY,Math.sin(g)*.065),d.center.set(.5,0),d.userData={phase:Math.random()*10},this.group.add(d),this.blue.push(d)}this.light=new Fr(16747066,0,.9,2),this.light.position.set(0,-.045,.02),this.group.add(this.light),this.flareLight=new Fr(16752714,0,.7,2),this.flareLight.position.set(0,q.depth+.12,-.05),this.group.add(this.flareLight),this.tossT=1,this.time=0}toss(){this.tossT=0}update(t,{flame:e,flare:n,oil:s,sauce:r,T:o}){this.time+=t;const a=this.time;if(this.tossT<1){this.tossT=Math.min(1,this.tossT+t/.42);const c=this.tossT,h=Math.sin(c*Math.PI)*.035,u=Math.sin(c*Math.PI*2)*.03;this.body.position.set(0,h,-u),this.body.rotation.x=-Math.sin(c*Math.PI)*.16}else this.body.position.set(0,0,0),this.body.rotation.x=0;if(this.oilPool.visible=s>.02,this.oilPool.visible){const c=.55+Math.min(1.2,s)*.7;this.oilPool.scale.set(c,1,c);const h=o>170?1+Math.sin(a*23)*.012:1;this.oilPool.scale.x*=h}if(this.saucePool.visible=r>.01,this.saucePool.visible){const c=.35+Math.min(1,r)*1.1;this.saucePool.scale.set(c,1,c)}const l=e;for(const c of this.tongues){const h=c.userData,u=.75+Math.sin(a*17+h.phase)*.15+Math.sin(a*31+h.phase*3)*.1,f=n*(.9+Math.sin(a*40+h.phase)*.2),d=Math.max(0,(l-.4)*.09*u)+f*.12,g=h.r+f*.02;c.position.set(Math.cos(h.a)*g,-.03,Math.sin(h.a)*g),c.scale.set(.018+d*.22,d,1),c.visible=d>.01,c.material.opacity=Math.min(.75,.2+d*3+f*.45)}for(const c of this.blue){const h=.8+Math.sin(a*25+c.userData.phase)*.2;c.scale.set(.02,(.012+l*.035)*h,1),c.visible=l>.03}this.light.intensity=l*1.2,this.flareLight.intensity=n*.35}}class $_{constructor(){const t=new re({color:12106944,metalness:1,roughness:.28,side:fe}),e=new re({color:7028510,roughness:.6,metalness:0});this.group=new me;const n=new ss,s=.042,r=.075,o=.014;n.moveTo(-s,0),n.lineTo(s,0),n.lineTo(s,r-o),n.quadraticCurveTo(s,r,s-o,r),n.lineTo(-s+o,r),n.quadraticCurveTo(-s,r,-s,r-o),n.lineTo(-s,0);const a=new ks(n,6),l=a.attributes.position;for(let d=0;d<l.count;d++){const g=l.getX(d);l.setZ(d,g*g/(2*q.R))}a.computeVertexNormals(),a.rotateX(-Math.PI/2);const c=new Dt(a,t);c.position.set(0,.004,.035),c.castShadow=!0;const h=new Dt(new ue(s*2,.018,.002),t);h.position.set(0,.012,.035),this.group.add(h);const u=new Dt(new Xt(.004,.004,.12,8),t);u.position.set(0,.05,.05),u.rotation.x=.95;const f=new Dt(new Xt(.012,.011,.14,10),e);f.position.set(0,.13,.15),f.rotation.x=.95,u.castShadow=f.castShadow=!0,this.group.add(c,u,f),this.group.visible=!1,this.pos=new R(q.x+.1,q.rimY,q.z+.12),this.yaw=0}update(t,e,n){const s=new R(q.x+.12,q.rimY+.01,q.z+.13),r=e?new R(e.x,e.y,e.z):s,o=this.pos.clone();this.pos.lerp(r,1-Math.exp(-t*(e?28:8)));const a=this.pos.clone().sub(o);a.lengthSq()>1e-8&&n&&(this.yaw+=(Math.atan2(a.x,a.z)-this.yaw)*0),this.group.position.copy(this.pos);const l=(q.x-this.pos.x)/q.R,c=(q.z-this.pos.z)/q.R;this.group.rotation.set(-c*.9,0,l*.9)}}class K_{constructor(){const t=new re({color:12633288,metalness:1,roughness:.25,side:fe});this.group=new me;const e=new Dt(new xe(.03,20,10,0,Math.PI*2,Math.PI/2,Math.PI/2),t),n=new Dt(new Xt(.0045,.0045,.26,8),t);n.position.set(0,.1,.1),n.rotation.x=.85,this.liquidMat=new ke({color:14068026,roughness:.05,clearcoat:1,metalness:0,transparent:!0,opacity:.9}),this.fill=new Dt(new is(.027,20),this.liquidMat),this.fill.rotation.x=-Math.PI/2,this.fill.position.y=-.006,this.cupGroup=new me,this.cupGroup.add(e,n,this.fill),this.group.add(this.cupGroup),this.stream=new Dt(new Xt(.0035,.005,1,10,1,!0),this.liquidMat),this.group.add(this.stream),this.group.visible=!1,this.tilt=0}setLiquid(t){this.liquidMat.color.set(t)}update(t,e,n){this.tilt+=((e?1.25:.1)-this.tilt)*Math.min(1,t*10),this.group.position.set(q.x-.05,q.rimY+.16,q.z+.05),this.cupGroup.rotation.z=this.tilt,this.fill.visible=n>.05;const s=-.028*Math.cos(this.tilt),r=-.028*Math.sin(this.tilt),o=this.group.position.y+r-(q.bottomY+.01);this.stream.visible=e&&this.tilt>.8,this.stream.scale.set(1,o,1),this.stream.position.set(s-.004,r-o/2,0)}}const ys=new R;function sn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;ys.copy(t),ys[n]=0,ys.normalize();const c=.5*o/(o+a),h=1-ys.angleTo(i)/l;return Math.sign(ys[e])===1?h*c:a/(o+a)+c+c*(1-h)}class kh extends ue{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new R,l=new R,c=new R(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,g=new R,_=.5/s;for(let p=0,m=0;p<h.length;p+=3,m+=2)switch(a.fromArray(h,p),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[p+0]=c.x*Math.sign(a.x)+l.x*r,h[p+1]=c.y*Math.sign(a.y)+l.y*r,h[p+2]=c.z*Math.sign(a.z)+l.z*r,u[p+0]=l.x,u[p+1]=l.y,u[p+2]=l.z,Math.floor(p/d)){case 0:g.set(1,0,0),f[m+0]=sn(g,l,"z","y",r,n),f[m+1]=1-sn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),f[m+0]=1-sn(g,l,"z","y",r,n),f[m+1]=1-sn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),f[m+0]=1-sn(g,l,"x","z",r,t),f[m+1]=sn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),f[m+0]=1-sn(g,l,"x","z",r,t),f[m+1]=1-sn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),f[m+0]=1-sn(g,l,"x","y",r,t),f[m+1]=1-sn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),f[m+0]=sn(g,l,"x","y",r,t),f[m+1]=1-sn(g,l,"y","x",r,e);break}}}function os(i){let t=i>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function ve(i,t){const e=i.attributes.position,n=new Float32Array(e.count*3),s=new R,r=[1,1,1];for(let o=0;o<e.count;o++)s.fromBufferAttribute(e,o),r[0]=r[1]=r[2]=1,t(s,r,o),n[o*3]=r[0],n[o*3+1]=r[1],n[o*3+2]=r[2];return i.setAttribute("color",new Ee(n,3)),i}function _i(i,t,e){const n=os(e),s=i.attributes.position,r=new Map;for(let o=0;o<s.count;o++){const a=`${s.getX(o).toFixed(5)},${s.getY(o).toFixed(5)},${s.getZ(o).toFixed(5)}`;r.has(a)||r.set(a,[(n()-.5)*t,(n()-.5)*t,(n()-.5)*t]);const l=r.get(a);s.setXYZ(o,s.getX(o)+l[0],s.getY(o)+l[1],s.getZ(o)+l[2])}return i.computeVertexNormals(),i}function Ve(i){return i.index?i.toNonIndexed():i}function as(i){const t=i.map(e=>{const n=Ve(e);for(const s of Object.keys(n.attributes))s!=="position"&&s!=="normal"&&s!=="color"&&n.deleteAttribute(s);return n.attributes.normal||n.computeVertexNormals(),n});return Bh(t)}function Z_(){const n=Math.PI*1.45,s=[],r=[],o=[];for(let g=0;g<=44;g++){const _=g/44,p=-.3+_*n,m=Math.cos(p)*.0115,y=Math.sin(p)*.0115,v=Math.abs(Math.sin(_*Math.PI*6)),M=(.0078*(1-_)+.0026*_)*(.93+.1*v)*(_<.04?.75+_*6:1),L=Math.cos(p),T=Math.sin(p);for(let E=0;E<=12;E++){const P=E/12*Math.PI*2,I=Math.cos(P),x=Math.sin(P)*1.18;s.push(m+L*I*M,y+T*I*M,x*M);const b=Math.max(0,I),F=v<.25?1:0,O=1-b*.22-b*F*.25;r.push(1,O*.92+.08,O*.85+.1)}}for(let g=0;g<44;g++)for(let _=0;_<12;_++){const p=g*13+_,m=p+12+1;o.push(p,m,p+1,m,m+1,p+1)}const a=new he;a.setAttribute("position",new Gt(s,3)),a.setAttribute("color",new Gt(r,3)),a.setIndex(o),a.computeVertexNormals();const l=-.3+n,c=Math.cos(l)*.0115,h=Math.sin(l)*.0115,u=new R(-Math.sin(l),Math.cos(l),0),f=[Ve(a)];for(const g of[-1,1]){const _=new xe(.0052,10,6);_.scale(1.4,.35,.7),_.rotateY(g*.45);const p=new yn().setFromUnitVectors(new R(1,0,0),u);_.applyQuaternion(p),_.translate(c+u.x*.006,h+u.y*.006,g*.0035),ve(_,(m,y)=>{y[0]=1,y[1]=.55,y[2]=.42}),f.push(Ve(_))}const d=as(f);return d.center(),d}function J_(i){const t=i*1.55,e=new kh(t,t,t,2,t*.14);return _i(e,t*.06,3),ve(Ve(e),(n,s)=>{const r=Math.max(Math.abs(n.x),Math.abs(n.y),Math.abs(n.z))/(t/2);s[1]=.96+r*.04})}function j_(i,t=1){const e=new gi(i,0);return e.scale(1.1,.62,.85),_i(e,i*.5,t),ve(Ve(e),(n,s)=>{const r=.9+n.y/i*.1;s[0]=s[1]=s[2]=r})}function Q_(i){const t=new zn(i*.72,i*.2,5,14,Math.PI*1.6);return t.scale(1,1,.55),t.rotateX(Math.PI/2),ve(Ve(t),(e,n)=>{const s=Math.hypot(e.x,e.z)/(i*.72);n[1]=.9+(1-s)*.3,n[2]=.92+(1-s)*.3})}function tv(i,t=5){const e=new gi(i,1);e.scale(1.15,.5,.95),_i(e,i*.55,t);const n=os(t*7);return ve(Ve(e),(s,r)=>{Math.sin(s.x*400+s.z*260)>.35||n()<.15||(r[1]=.86,r[2]=.45)})}function ev(i){const t=new Ja(new R(-i*2.3,0,0),new R(0,i*.9,i*.4),new R(i*2.3,0,-i*.2)),e=new Os(t,10,.0021,6,!1),n=new xe(.0034,8,6);n.scale(1.5,1,1),n.translate(-i*2.4,0,0),ve(e,(r,o)=>{o[0]=1,o[1]=1,o[2]=.97}),ve(n,(r,o)=>{o[0]=.98,o[1]=.9,o[2]=.45});const s=new Os(new Ih(new R(i*2.3,0,-i*.2),new R(i*3.1,-i*.2,-i*.4)),2,8e-4,4,!1);return ve(s,(r,o)=>{o[0]=.9,o[1]=.85,o[2]=.75}),as([e,n,s])}function nv(i){const t=i*4,e=new Xt(.0024,.0024,t,8,3,!1);return e.scale(1,1,.45),e.rotateZ(Math.PI/2),ve(Ve(e),(n,s)=>{Math.abs(n.x)/(t/2)>.92&&(s[0]=1.25,s[1]=1.2,s[2]=.9)})}function iv(i,t=9){const e=new gi(i,0);_i(e,i*.7,t);const n=os(t);return ve(Ve(e),(s,r,o)=>{if((Math.floor(o/3)*2654435761>>>0)%3===0)r[0]=.72,r[1]=.45,r[2]=.32;else{const l=1.05+n()*.1;r[0]=l,r[1]=l,r[2]=l*.95}})}function sv(i){const t=new is(i,5);return _i(t,i*.6,13),t.rotateX(-Math.PI/2),ve(Ve(t),(e,n)=>{n[1]=1+e.x/i*.2})}function rv(i){const t=i,e=Math.PI/3,n=new xe(t,14,10,-e/2,e,.12,Math.PI-.24);ve(n,(o,a)=>{a[0]=.32,a[1]=.62,a[2]=.12});const s=[];for(const o of[-1,1]){const a=o*e/2,l=[],c=[],h=14;for(let f=0;f<h;f++){const d=.12+f/h*(Math.PI-.24),g=.12+(f+1)/h*(Math.PI-.24),_=[Math.sin(d)*t*.97,Math.cos(d)*t*.97],p=[Math.sin(g)*t*.97,Math.cos(g)*t*.97],m=E=>[E[0]*Math.cos(a),E[1],-E[0]*Math.sin(a)],y=m(_),v=m(p),M=[0,_[1]*.9,0],L=[0,p[1]*.9,0],T=o>0?[M,y,v,M,v,L]:[M,v,y,M,L,v];for(const E of T){l.push(...E);const P=Math.hypot(E[0],E[2])/t,I=f%3===0?.9:1;c.push((.72+(P>.85?.2:0))*I,.9*I,(.3+(P>.85?.45:0))*I)}}const u=new he;u.setAttribute("position",new Gt(l,3)),u.setAttribute("color",new Gt(c,3)),u.computeVertexNormals(),s.push(u)}const r=as([n,...s]);return r.scale(1,1.45,1),r.rotateZ(Math.PI/2),r}function ov(i,t=21){const e=os(t),n=[];for(let r=0;r<7;r++){const o=new xe(.00125,7,5);o.scale(2.8,1,1.05),o.rotateY(e()*Math.PI),o.rotateZ((e()-.5)*.8),o.translate((e()-.5)*i*1.2,(e()-.5)*i*.6,(e()-.5)*i*1.2),n.push(o)}const s=as(n);return ve(s,(r,o)=>{const a=.94+Math.max(0,r.y/i)*.08;o[0]=o[1]=o[2]=a})}function av(i,t=33){const e=new gi(i*.9,1);e.scale(1.1,.7,.95),_i(e,i*.65,t);const n=os(t);return ve(Ve(e),(s,r)=>{const o=.86+n()*.18;r[0]=o,r[1]=o*.98,r[2]=o*.95})}function lv(i){const t=new ss,e=i*2.2,n=i*.85;t.moveTo(0,-e/2),t.quadraticCurveTo(n,-e*.15,0,e/2),t.quadraticCurveTo(-n,-e*.15,0,-e/2);const s=new ks(t,8),r=s.attributes.position;for(let o=0;o<r.count;o++){const a=r.getX(o),l=r.getY(o);r.setZ(o,a*a/(n*1.6)*1.2-Math.abs(l)*.08)}return s.rotateX(-Math.PI/2),s.computeVertexNormals(),ve(Ve(s),(o,a)=>{const l=Math.abs(o.x)<n*.08?1.25:1;a[0]=l,a[1]=l,a[2]=l*.9})}function cv(i,t=41){const e=new kh(i*1.9,i*.45,i*1.2,2,i*.18);return _i(e,i*.18,t),ve(Ve(e),(n,s)=>{const r=.93+(n.y>0?.07:0);s[0]=s[1]=s[2]=r})}function hv(i){const t=new Xt(i*.28,i*.32,i*2.4,9);t.rotateZ(Math.PI/2),ve(t,(n,s)=>{s[0]=1.1,s[1]=1.12,s[2]=.95});const e=new xe(i*.9,10,6);return e.scale(1.2,.18,.9),e.translate(i*.5,i*.25,i*.35),ve(e,(n,s)=>{s[0]=.62,s[1]=.8,s[2]=.62}),as([t,e])}function uv(i){const t=new Xt(i,i,i*.3,20,1);return ve(Ve(t),(e,n)=>{const s=Math.hypot(e.x,e.z)/i;s>.9||Math.abs(e.y)<i*.14&&s>.85?(n[0]=.22,n[1]=.45,n[2]=.16):s>.35&&s<.6?(n[0]=.86,n[1]=.93,n[2]=.7):(n[0]=.78,n[1]=.9,n[2]=.62)})}function fv(i,t=57){const e=os(t),n=new ss;for(let a=0;a<=28;a++){const l=a/28*Math.PI*2,c=i*(.88+e()*.2);a===0?n.moveTo(Math.cos(l)*c,Math.sin(l)*c):n.lineTo(Math.cos(l)*c,Math.sin(l)*c)}const s=new Qa(n,{depth:.003,bevelEnabled:!0,bevelThickness:.0015,bevelSize:.002,bevelSegments:2,curveSegments:6});s.rotateX(-Math.PI/2),ve(s,(a,l)=>{const c=Math.hypot(a.x,a.z)/i;if(c>.78){const h=Math.min(1,(c-.78)/.2);l[0]=1-h*.3,l[1]=1-h*.55,l[2]=1-h*.8}});const r=new xe(i*.32,16,10,0,Math.PI*2,0,Math.PI/2);r.scale(1,.6,1),r.translate(i*.1,.0045,-i*.05),ve(r,(a,l)=>{l[0]=1,l[1]=.62,l[2]=.08});const o=as([s,r]);return o.translate(0,-.002,0),o}function Gh(){const i=new xe(.022,20,14),t=i.attributes.position;for(let e=0;e<t.count;e++){const n=t.getY(e),s=n>0?1-n/.022*.12:1;t.setXYZ(e,t.getX(e)*s,n*1.28,t.getZ(e)*s)}return i.computeVertexNormals(),i}const Hh={prawn:()=>Z_(),cube:i=>J_(i),bit:i=>j_(i),ring:i=>Q_(i),curd:i=>tv(i),sprout:i=>ev(i),segment:i=>nv(i),peanut:i=>iv(i),flake:i=>sv(i),wedge:i=>rv(i),clump:i=>ov(i),mince:i=>av(i),leaf:i=>lv(i),slice:i=>cv(i),gailan:i=>hv(i),disc:i=>uv(i),friedEgg:i=>fv(i)};Object.keys(Hh).concat(["strand"]);const Uo=new Map;function Vr(i){const t=i.shape+":"+i.r;if(!Uo.has(t)){const e=Hh[i.shape];if(!e)throw new Error(`shapes: no builder for '${i.shape}'`);const n=e(i.r);n.computeBoundingSphere(),Uo.set(t,n)}return Uo.get(t)}const zs=24,dv=275;function Dc(){return{flame:0,T:zs,oil:0,sauce:0,sauceLeft:0,load:0,tosses:0,hei:0,flare:0}}function pv(i,t){const e=zs+i.flame*(dv-zs),n=i.flame>.05?2.6+Math.min(3,i.load*.06):10;i.T+=(e-i.T)*(1-Math.exp(-t/n)),i.flare=Math.max(0,i.flare-t*2.2),i.sauceLeft>0&&(i.sauceLeft=Math.max(0,i.sauceLeft-t*.006*rl(i.T)))}function Uc(i,t){i.load+=t,i.T-=(i.T-zs)*Math.min(.45,t*.028)}function mv(i,t){i.T-=(i.T-zs)*Math.min(.5,t*.35)}function rl(i){return Math.max(0,Math.min(1.45,(i-95)/125))}function gv(i,t,e,n){if(i.container.type!=="bowl")return;const s=rl(t.T),r=t.T,o=t.oil<.2,a=i.container.rimY;let l=0;for(let c=0;c<i.n;c++){const h=n[i.kind[c]];if(!h||h.garnish)continue;const u=i.x[c*3+1],f=i.contact[c]?1:u<a?.45:0;let d=s*f/h.cookTime;if(t.sauceLeft>0&&i.coat[c]<1&&u<a){const g=e*(.05+Math.min(1.2,i.speed[c])*.9)*(h.needsSauce?1:Math.min(1,(h.coatTint??.32)*1.4)),_=Math.min(g,1-i.coat[c]);i.coat[c]+=_,l+=_}h.needsSauce&&(d*=Math.min(1,i.coat[c]/.45)),i.d[c]>h.band[1]&&(d*=.12),i.d[c]+=d*e,i.contact[c]&&r>180&&i.still[c]>1.5&&(i.c[c]+=e*(r-180)/90*.08*(o?2:1)*(1-.6*Math.min(1,i.coat[c]))),i.d[c]>h.burnAt&&i.contact[c]&&(i.c[c]+=e*(i.d[c]-h.burnAt)*.08*(1-Math.min(1,i.coat[c]*1.5))),i.c[c]>1&&(i.c[c]=1)}l>0&&(t.sauceLeft=Math.max(0,t.sauceLeft-l/360))}function _v(i,t){if(i.container.type!=="bowl"||i.n===0)return 0;let e=0;for(let s=0;s<i.n;s++)e+=i.contact[s];const n=rl(t.T);return Math.min(1,n*(.25+Math.min(1,e/60)*.75)+(t.sauceLeft>0?n*.25:0))}function Nc(i,t,e){const n=i>>16&255,s=i>>8&255,r=i&255,o=t>>16&255,a=t>>8&255,l=t&255;return[n+(o-n)*e,s+(a-s)*e,r+(l-r)*e]}const xr=i=>i<=0?0:i>=1?1:i*i*(3-2*i);function vv(i,t,e,n,s,r){let o;if(i.needsSauce){const l=xr(n*.75+Math.min(1,t)*.25);o=Nc(i.raw,i.cooked,l)}else o=Nc(i.raw,i.cooked,xr(Math.min(1,t)));const a=i.band?i.band[1]:1;if(t>a&&i.burnAt){const l=xr((t-a)/(i.burnAt-a)),c=[i.over>>16&255,i.over>>8&255,i.over&255];o=[o[0]+(c[0]-o[0])*l,o[1]+(c[1]-o[1])*l,o[2]+(c[2]-o[2])*l]}if(!i.needsSauce&&n>0&&s!=null){const l=[s>>16&255,s>>8&255,s&255],c=i.coatTint??.32,h=Math.min(c,n*c);o=[o[0]+(l[0]-o[0])*h,o[1]+(l[1]-o[1])*h,o[2]+(l[2]-o[2])*h]}if(e>0){const l=[36,21,12],c=xr(e);o=[o[0]+(l[0]-o[0])*c,o[1]+(l[1]-o[1])*c,o[2]+(l[2]-o[2])*c]}return r[0]=o[0],r[1]=o[1],r[2]=o[2],r}const Vh=new Float32Array(256);for(let i=0;i<256;i++){const t=i/255;Vh[i]=t<=.04045?t/12.92:((t+.055)/1.055)**2.4}const No=i=>Vh[Math.max(0,Math.min(255,i|0))];function di(i){return new ke({vertexColors:!0,roughness:i.rough??.5,metalness:0,clearcoat:i.gloss??.3,clearcoatRoughness:.22,sheen:i.sheen??0,sheenRoughness:.5,sheenColor:new Tt(14221232),side:["flake","wedge","leaf"].includes(i.shape)?fe:Fn})}class Wh{constructor(t,e,n,s){this.points=e,this.sub=2,this.per=(e-1)*this.sub+1,this.width=n,this.maxStrands=t;const r=t*this.per*2,o=new he;this.pos=new Float32Array(r*3),this.nrm=new Float32Array(r*3),this.col=new Float32Array(r*3),o.setAttribute("position",new Ee(this.pos,3).setUsage(ws)),o.setAttribute("normal",new Ee(this.nrm,3).setUsage(ws)),o.setAttribute("color",new Ee(this.col,3).setUsage(ws));const a=[];for(let l=0;l<t;l++)for(let c=0;c<this.per-1;c++){const h=(l*this.per+c)*2;a.push(h,h+1,h+2,h+1,h+3,h+2)}o.setIndex(a),o.setDrawRange(0,0),this.geo=o,this.mesh=new Dt(o,s),this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this._p=new Float32Array(this.per*3),this._c=new Float32Array(this.per*3)}update(t,e,n){let s=0;for(const r of e){if(s>=this.maxStrands)break;this._build(t,r.first,r.n,n,s++)}this.geo.setDrawRange(0,s*(this.per-1)*6);for(const r of["position","normal","color"])this.geo.attributes[r].needsUpdate=!0}_build(t,e,n,s,r){const o=this._p,a=this._c,l=this.sub,c=t.x;let h=0;for(let p=0;p<n-1;p++){const m=Math.max(0,p-1),y=p,v=p+1,M=Math.min(n-1,p+2);for(let L=0;L<l;L++){const T=L/l,E=T*T,P=E*T;for(let I=0;I<3;I++){const x=c[(e+m)*3+I],b=c[(e+y)*3+I],F=c[(e+v)*3+I],O=c[(e+M)*3+I];o[h*3+I]=.5*(2*b+(-x+F)*T+(2*x-5*b+4*F-O)*E+(-x+3*b-3*F+O)*P),a[h*3+I]=s[(e+y)*3+I]*(1-T)+s[(e+v)*3+I]*T}h++}}for(let p=0;p<3;p++)o[h*3+p]=c[(e+n-1)*3+p],a[h*3+p]=s[(e+n-1)*3+p];h++;const u=this.width/2;let f=1,d=0,g=0;const _=r*this.per*2;for(let p=0;p<h;p++){const m=Math.max(0,p-1),y=Math.min(h-1,p+1);let v=o[y*3]-o[m*3],M=o[y*3+1]-o[m*3+1],L=o[y*3+2]-o[m*3+2];const T=Math.hypot(v,M,L)||1;v/=T,M/=T,L/=T;let E=-L,P=v,I=0;const x=Math.hypot(E,P);x>.2&&(E/=x,P/=x,E*f+P*g<0&&(E=-E,P=-P),f=E,d=I,g=P);const b=d*L-g*M,F=g*v-f*L,O=f*M-d*v;for(let H=0;H<2;H++){const X=(_+p*2+H)*3,k=H?1:-1;this.pos[X]=o[p*3]+f*u*k,this.pos[X+1]=o[p*3+1]+d*u*k,this.pos[X+2]=o[p*3+2]+g*u*k,this.nrm[X]=b,this.nrm[X+1]=F,this.nrm[X+2]=O;const J=.94;this.col[X]=a[p*3]*J,this.col[X+1]=a[p*3+1]*J,this.col[X+2]=a[p*3+2]*J}}}}class xv{constructor(t,e,n){this.group=new me,this.ings=t,this.sauceColour=n,this.meshes=[],this.noodles=null,t.forEach((s,r)=>{if(s.shape==="strand"){const a=di(s);a.side=fe,this.noodles=new Wh(s.strands+2,s.points,s.width,a),this.noodleKind=r,this.group.add(this.noodles.mesh),this.meshes.push(null);return}const o=new kr(Vr(s),di(s),e[r]);o.count=0,o.castShadow=!0,o.receiveShadow=!0,o.frustumCulled=!1,o.instanceMatrix.setUsage(ws),o.name="food:"+s.id,o.setColorAt(0,new Tt(1,1,1)),this.group.add(o),this.meshes.push(o)}),this._m=new Jt,this._q=new yn,this._p=new R,this._s=new R,this._c=new Tt,this._rgb=[0,0,0],this.linCol=new Float32Array(4096*3)}update(t){const e=new Int32Array(this.meshes.length),n=[];let s=-1;for(let r=0;r<t.n;r++){const o=t.kind[r],a=this.ings[o];vv(a,t.d[r],t.c[r],t.coat[r],this.sauceColour,this._rgb);const l=No(this._rgb[0]),c=No(this._rgb[1]),h=No(this._rgb[2]);if(t.strand[r]>=0){this.linCol[r*3]=l,this.linCol[r*3+1]=c,this.linCol[r*3+2]=h,t.strand[r]!==s&&(s=t.strand[r],n.push({first:r,n:0})),n[n.length-1].n++;continue}const u=this.meshes[o];if(!u)continue;const f=e[o]++;if(f>=u.instanceMatrix.count)continue;this._p.set(t.x[r*3],t.x[r*3+1],t.x[r*3+2]),this._q.set(t.q[r*4],t.q[r*4+1],t.q[r*4+2],t.q[r*4+3]);const d=a.shrink?1-(1-a.shrink)*Math.min(1,t.d[r]):1,g=(.85+t.seed[r]*.3)*d;this._s.set(g,g,g),this._m.compose(this._p,this._q,this._s),u.setMatrixAt(f,this._m),this._c.setRGB(l,c,h),u.setColorAt(f,this._c)}this.meshes.forEach((r,o)=>{r&&(r.count=Math.min(e[o],r.instanceMatrix.count),r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0))}),this.noodles&&this.noodles.update(t,n,this.linCol)}}const rn=.24;class Mv{constructor(t){this.ing=t,this.group=new me,this.group.position.set(Ce.x,Ce.topY,Ce.z),this.start=-rn/2,this.end=rn/2;const e=t.bunch||{style:"blade",colour:t.raw},n=(d,g={})=>new ke({color:d,roughness:.45,sheen:.5,sheenColor:new Tt(14221232),clearcoat:.35,metalness:0,...g}),s=new me,r=(d,g,_,p,m,y=0)=>{const v=new Dt(d,g);v.position.set(_,p,m),v.rotation.y=y,v.castShadow=!0,v.receiveShadow=!0,s.add(v)};if(e.style==="pods"){const d=n(e.colour,{sheen:0,clearcoat:.9,roughness:.3}),g=n(e.base??4160038),_=new Xt(.0038,.0012,.056,10);_.rotateZ(Math.PI/2),_.translate(.028,0,0);const p=new Xt(.001,.0016,.012,6);p.rotateZ(Math.PI/2),p.translate(-.004,0,0);for(let m=0;m<3;m++)for(let y=0;y<4;y++){const v=y*.06+m%2*.012,M=(m-1)*.009;r(_,d,v,.004,M,Math.sin(m*3+y)*.05),r(p,g,v,.004,M)}}else if(e.style==="stalk"){const d=n(e.colour),g=n(e.base??3111466,{side:fe}),_=new Xt(.0048,.0058,rn*.8,10);_.rotateZ(Math.PI/2),_.translate(rn*.4,0,0);const p=new xe(.03,12,8);p.scale(1.4,.12,.8);for(let m=0;m<3;m++)r(_,d,0,.005+(m===1?.004:0),(m-1)*.012),r(p,g,rn*.86,.007+m*.002,(m-1)*.016,(m-1)*.4)}else{const d=n(e.colour),g=e.base!=null?n(e.base,{sheen:.2}):null;for(let _=0;_<12;_++){const p=new ue(rn,.0022,.0055);p.translate(rn/2,0,0),r(p,d,0,.0015+_%3*.0024,(_-5.5)*.0042+Math.sin(_*2.3)*.001,Math.sin(_*1.7)*.012)}if(g){const _=new Xt(.009,.01,.045,12);_.rotateZ(Math.PI/2),_.translate(.02,.004,0),r(_,g,0,0,0)}}const o=new Dt(new zn(.03,.0025,6,20),new re({color:13777450,roughness:.5,metalness:0}));o.rotation.y=Math.PI/2,o.scale.set(1,.3,1),o.position.set(.02,.004,0),e.style!=="pods"&&s.add(o),s.position.x=this.start,this.bunch=s,this.group.add(s),this.dotGeo=new is(.0022,10),this.dotGeo.rotateX(-Math.PI/2),this.dotMat=new Fe({color:new Tt(1.6,1.6,1.5),transparent:!0,opacity:.9,depthWrite:!1}),this.guides=new me,this.group.add(this.guides),this.pile=new kr(Vr(t),di(t),40),this.pile.count=0,this.pile.castShadow=!0,this.pile.setColorAt(0,new Tt(1,1,1)),this.group.add(this.pile);const a=new re({color:11975357,metalness:1,roughness:.25}),l=new re({color:4860436,roughness:.6,metalness:0}),c=new me,h=new Dt(new ue(.0025,.07,.17),a);h.position.set(0,.035,0);const u=new Dt(new ue(.001,.008,.17),new re({color:15265007,metalness:1,roughness:.12}));u.position.set(0,.002,0);const f=new Dt(new Xt(.011,.012,.11,10),l);f.rotation.x=Math.PI/2,f.position.set(0,.058,.14),c.add(h,u,f);for(const d of c.children)d.castShadow=!0;c.rotation.z=.7,this.knife=c,this.knife.position.set(.08,.06,.02),this.group.add(c),this.knifeY=.06,this.knifeDrop=0,this.knifeTarget=new R(.08,.06,.02),this._m=new Jt,this._q=new yn,this._e=new Qe,this._p=new R,this._s=new R(1,1,1),this.pieces=0}setGuides(t,e){this.guides.clear(),t.forEach((n,s)=>{if(!(s<e))for(let r=-4;r<=4;r++){const o=new Dt(this.dotGeo,this.dotMat);o.position.set(n,.0095,r*.0065),o.scale.setScalar(s===e?1.3:.8),this.guides.add(o)}})}cutAt(t,e){this.end=t,this.bunch.scale.x=Math.max(.02,(t-this.start)/rn),this.knifeDrop=1;const n=3;for(let s=0;s<n&&this.pile.count<40;s++){const r=this.pile.count++;this._p.set(.06+Math.random()*.05,.004+r%5*.0025,.05+Math.random()*.05),this._e.set(Math.random()*.3,Math.random()*Math.PI,Math.random()*.3),this._q.setFromEuler(this._e);const o=Math.max(.6,Math.min(1.4,e/.034));this._s.set(o,1,1),this._m.compose(this._p,this._q,this._s),this.pile.setMatrixAt(r,this._m),this.pile.setColorAt(r,new Tt(this.ing.raw))}this.pile.instanceMatrix.needsUpdate=!0,this.pile.instanceColor.needsUpdate=!0}sweep(){this.pile.count=0}reset(){this.end=rn/2,this.bunch.scale.x=1,this.sweep(),this.bunch.visible=!0}local(t){return t?{x:t.x-Ce.x,z:t.z-Ce.z}:null}follow(t){t&&this.knifeTarget.set(t.x,.05,t.z*.3)}update(t){this.knifeDrop=Math.max(0,this.knifeDrop-t*5);const e=Math.sin(this.knifeDrop*Math.PI)*.05;this.knife.position.x+=(this.knifeTarget.x-this.knife.position.x)*Math.min(1,t*18),this.knife.position.z+=(this.knifeTarget.z-this.knife.position.z)*Math.min(1,t*18),this.knife.position.y=.05-e}}const Fc=i=>new Tt(i);function yv(i){let t=i>>>0||1;return()=>(t^=t<<13,t^=t>>>17,t^=t<<5,(t>>>0)/4294967296)}function Sv(i=je.r){const t=[[0,.002],[i*.55,.002],[i*.82,.012],[i,.034],[i+.003,.0355],[i-.001,.033],[i*.8,.013],[i*.52,.0045],[0,.0045]];return new Bs(t.map(([e,n])=>new Z(e,n)),36)}class bv{constructor(t,e,n){this.group=new me,this.bowls=new Map;const s=Sv();this.ids=t,t.forEach((r,o)=>{const a=new me,l=new Dt(s,n);l.castShadow=!0,l.receiveShadow=!0,l.userData.bowlId=r,a.add(l);const c=new Dt(new Xt(je.r*1.25,je.r*1.25,.07,16),new Fe({visible:!1}));c.position.y=.03,c.userData.bowlId=r,a.add(c);const h=new Dt(new tl(je.r*1.08,je.r*1.28,40),new Fe({color:new Tt(1.6,1.25,.5),transparent:!0,opacity:0,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.y=.002,a.add(h);const u=new me;a.add(u),this.group.add(a);const f={id:r,group:a,bowl:l,hit:c,ring:h,contents:u,full:!1,home:new R,anim:null,lit:!1};this.bowls.set(r,f),this.fill(r,e[r])}),this.layout(!1),this.time=0}layout(t){const e=this.ids.length;this.ids.forEach((n,s)=>{const r=this.bowls.get(n);if(t&&e>4){const o=Math.ceil(e/2),a=Math.floor(s/o),l=s%o;r.home.set((l-(o-1)/2)*je.portrait.spacing,Bt.y,je.portrait.rows[a])}else{const o=t?je.portrait.rows[1]-.04:je.z;r.home.set((s-(e-1)/2)*(t?je.portrait.spacing:je.spacing),Bt.y,o)}r.anim||r.group.position.copy(r.home)})}fill(t,e,n){const s=this.bowls.get(t);if(s.contents.clear(),s.full=!!e&&n!==0,!s.full)return;const r=yv(t.length*97+11);if(e.shape==="strand"){const p=e.points,m={x:new Float32Array(9*p*3)},y=new Float32Array(9*p*3),v=Fc(e.raw),M=[];for(let E=0;E<9;E++){let P=r()*Math.PI*2;const I=je.r*(.35+r()*.4);for(let x=0;x<p;x++){const b=E*p+x;P+=.55,m.x[b*3]=Math.cos(P)*I*(.8+r()*.3),m.x[b*3+1]=.012+E*.0016+r()*.004,m.x[b*3+2]=Math.sin(P)*I*(.8+r()*.3),y[b*3]=v.r,y[b*3+1]=v.g,y[b*3+2]=v.b}M.push({first:E*p,n:p})}const L=di(e);L.side=fe;const T=new Wh(9,p,e.width,L);T.update(m,M,y),s.contents.add(T.mesh);return}if(e.shape==="curd"){const _=new Dt(Gh(),new re({color:15323046,roughness:.55,metalness:0}));_.position.set(0,.03,0),_.rotation.z=1.2,_.castShadow=!0,s.contents.add(_);return}const o=n??Math.min(e.count??10,26),a=di(e),l=new kr(Vr(e),a,o),c=new Jt,h=new yn,u=new Qe,f=new R,d=new R,g=Fc(e.raw);for(let _=0;_<o;_++){const p=r()*Math.PI*2,m=Math.sqrt(r())*je.r*.6;f.set(Math.cos(p)*m,.008+e.r*.6+_/o*.012,Math.sin(p)*m),u.set(r()*6,r()*6,r()*6),h.setFromEuler(u);const y=.85+r()*.3;d.set(y,y,y),c.compose(f,h,d),l.setMatrixAt(_,c),l.setColorAt(_,g)}l.castShadow=!0,s.contents.add(l)}highlight(t){for(const e of this.bowls.values())e.lit=t.includes(e.id)&&e.full}tip(t,e,n){const s=this.bowls.get(t);return!s||s.anim?!1:(s.anim={t:0,from:s.home,to:new R(e.x+(s.home.x>0?.07:-.07),e.y+.13,e.z+.06),fired:!1,onTip:n},!0)}pick(t){const e=t.intersectObjects([...this.bowls.values()].map(n=>n.hit),!1);return e.length?e[0].object.userData.bowlId:null}update(t){this.time+=t;for(const e of this.bowls.values()){const n=e.lit?.55+Math.sin(this.time*5)*.3:0;if(e.ring.material.opacity+=(n-e.ring.material.opacity)*Math.min(1,t*8),!e.anim)continue;const s=e.anim;if(s.t+=t,s.t<.35){const r=s.t/.35,o=r*r*(3-2*r);e.group.position.lerpVectors(s.from,s.to,o),e.group.position.y+=Math.sin(r*Math.PI)*.06,e.group.rotation.z=(e.home.x>0?1:-1)*o*.4}else if(s.t<.75){const r=(s.t-.35)/.4;e.group.position.copy(s.to),e.group.rotation.z=(e.home.x>0?1:-1)*(.4+Math.min(1,r*2)*1.5),!s.fired&&r>.15&&(s.fired=!0,e.contents.clear(),e.full=!1,s.onTip?.())}else if(s.t<1.15){const r=(s.t-.75)/.4,o=r*r*(3-2*r);e.group.position.lerpVectors(s.to,s.from,o),e.group.rotation.z=(e.home.x>0?1:-1)*1.9*(1-o)}else e.group.position.copy(s.from),e.group.rotation.z=0,e.anim=null}}}const wv=9.81,Ps=4096,Vi=.03;function Tv(){return{type:"bowl",cx:q.x,cy:q.cy,cz:q.z,R:q.R,rimR:q.rimR,rimY:q.rimY}}function Ev(){return{type:"plate",cx:yt.x,cz:yt.z,y:yt.wellY,wellR:yt.wellR,r:yt.r-.012,lip:yt.lip}}function Oc(i=1200){return{n:0,cap:i,x:new Float32Array(i*3),p:new Float32Array(i*3),q:new Float32Array(i*4),w:new Float32Array(i*3),r:new Float32Array(i),inv:new Float32Array(i),kind:new Int16Array(i),strand:new Int32Array(i).fill(-1),d:new Float32Array(i),c:new Float32Array(i),coat:new Float32Array(i),still:new Float32Array(i),contact:new Uint8Array(i),speed:new Float32Array(i),seed:new Float32Array(i),links:[],strands:0,container:Tv(),friction:.18,spatula:{on:!1,x:0,y:0,z:0,px:0,py:0,pz:0,r:.05},h:1/180,_hash:new Int32Array(i),_start:new Int32Array(Ps+1),_order:new Int32Array(i),_rng:625341585}}function Le(i){let t=i._rng;return t^=t<<13,t^=t>>>17,t^=t<<5,i._rng=t>>>0,i._rng/4294967296}function bs(i,t,e,n,s,r,o,a=0,l=0,c=0){if(i.n>=i.cap)return-1;const h=i.n++,u=h*3;i.x[u]=e,i.x[u+1]=n,i.x[u+2]=s,i.p[u]=e-a*i.h,i.p[u+1]=n-l*i.h,i.p[u+2]=s-c*i.h;const f=Le(i)*Math.PI*2,d=Math.acos(2*Le(i)-1),g=Le(i)*Math.PI*2,_=Math.sin(d)*Math.cos(f),p=Math.cos(d),m=Math.sin(d)*Math.sin(f),y=Math.sin(g/2);return i.q[h*4]=_*y,i.q[h*4+1]=p*y,i.q[h*4+2]=m*y,i.q[h*4+3]=Math.cos(g/2),i.w[u]=i.w[u+1]=i.w[u+2]=0,i.r[h]=r,i.inv[h]=1/Math.max(.01,o),i.kind[h]=t,i.strand[h]=-1,i.d[h]=0,i.c[h]=0,i.coat[h]=0,i.still[h]=0,i.contact[h]=0,i.speed[h]=0,i.seed[h]=Le(i),h}function Av(i,t,e,n,s,r,o,a,l){const c=i.strands++;let h=Le(i)*Math.PI*2,u=s,f=o;const d=i.n;for(let g=0;g<e;g++){const _=bs(i,t,u,r+g*.002,f,a,l);if(_<0)break;i.strand[_]=c,h+=(Le(i)-.5)*.7,u+=Math.cos(h)*n,f+=Math.sin(h)*n,g>0&&i.links.push([_-1,_,n,1]),g>1&&i.links.push([_-2,_,n*1.9,.12])}return d}function Cv(i,t=1){const e=i.container;if(e.type!=="bowl")return 0;let n=0;for(let s=0;s<i.n;s++){const r=s*3;if(i.x[r+1]>e.rimY+.04)continue;const o=i.x[r]-e.cx,a=i.x[r+2]-e.cz,l=(-o*2.4+(Le(i)-.5)*.35)*t,c=(1.25+Le(i)*.55)*t,h=(-a*2.4+.18+(Le(i)-.5)*.35)*t;i.p[r]=i.x[r]-l*i.h,i.p[r+1]=i.x[r+1]-c*i.h,i.p[r+2]=i.x[r+2]-h*i.h,i.w[r]=(Le(i)-.5)*30,i.w[r+1]=(Le(i)-.5)*12,i.w[r+2]=(Le(i)-.5)*30,i.still[s]=0,n++}return n}function Rv(i,t=null,e=!1){if(i.container=Ev(),e)return Pv(i);if(t){const s=(t.base*t.base+t.h*t.h)/(2*t.h);i.container.dome={x:t.x,z:t.z,R:s,cy:i.container.y+t.h-s}}i.friction=.7;const n=i.container;for(let s=0;s<i.n;s++){const r=s*3,o=(i.x[r]-q.x)*.36,a=(i.x[r+2]-q.z)*.36,l=n.y+.02+(i.x[r+1]-q.bottomY)*2.2+Le(i)*.03;i.x[r]=n.cx+o,i.x[r+1]=l,i.x[r+2]=n.cz+a,i.p[r]=i.x[r],i.p[r+1]=l+.002,i.p[r+2]=i.x[r+2],i.still[s]=0}}function Pv(i){const t=i.container,e=.078,n=[...Array(i.n).keys()].sort((r,o)=>i.r[o]-i.r[r]),s=[];for(const r of n){let o=null,a=-1;for(let c=0;c<80;c++){let h,u,f;do h=Le(i)*2-1,u=Le(i)**1.6,f=Le(i)*2-1;while(h*h+u*u+f*f>1);const d=e-i.r[r];h=t.cx+h*d,u=t.y+i.r[r]+u*d*.9,f=t.cz+f*d;let g=1/0;for(const _ of s){const p=Math.hypot(h-i.x[_*3],u-i.x[_*3+1],f-i.x[_*3+2])-(i.r[r]+i.r[_]);p<g&&(g=p)}if(g>a&&(a=g,o=[h,u,f]),g>=0)break}const l=r*3;i.x[l]=o[0],i.x[l+1]=o[1],i.x[l+2]=o[2],i.p[l]=i.x[l],i.p[l+1]=i.x[l+1],i.p[l+2]=i.x[l+2],i.still[r]=0,s.push(r)}i.friction=.9;for(let r=0;r<i.n;r++)i.inv[r]=0}function Xh(i,t,e){return(i*73856093^t*19349663^e*83492791)&Ps-1}function Lv(i){const{n:t,x:e,_hash:n,_start:s,_order:r}=i;s.fill(0);for(let a=0;a<t;a++){const l=Xh(Math.floor(e[a*3]/Vi),Math.floor(e[a*3+1]/Vi),Math.floor(e[a*3+2]/Vi));n[a]=l,s[l+1]++}for(let a=0;a<Ps;a++)s[a+1]+=s[a];const o=i._fill||(i._fill=new Int32Array(Ps));o.set(s.subarray(0,Ps));for(let a=0;a<t;a++)r[o[n[a]]++]=a}function Iv(i){const{n:t,x:e,p:n,r:s,inv:r,strand:o,_start:a,_order:l}=i,c=i.container.type==="plate"?.7:0;for(let h=0;h<t;h++){const u=Math.floor(e[h*3]/Vi),f=Math.floor(e[h*3+1]/Vi),d=Math.floor(e[h*3+2]/Vi);for(let g=-1;g<=1;g++)for(let _=-1;_<=1;_++)for(let p=-1;p<=1;p++){const m=Xh(u+g,f+_,d+p);for(let y=a[m];y<a[m+1];y++){const v=l[y];if(v<=h||o[h]>=0&&o[h]===o[v]&&Math.abs(h-v)<=2)continue;const M=h*3,L=v*3,T=e[L]-e[M],E=e[L+1]-e[M+1],P=e[L+2]-e[M+2],I=(s[h]+s[v])*.92,x=T*T+E*E+P*P;if(x>=I*I||x<1e-12)continue;const b=Math.sqrt(x),F=r[h]+r[v];if(F===0)continue;const O=(I-b)/b/F*.8;if(e[M]-=T*O*r[h],e[M+1]-=E*O*r[h],e[M+2]-=P*O*r[h],e[L]+=T*O*r[v],e[L+1]+=E*O*r[v],e[L+2]+=P*O*r[v],c){const H=T/b,X=E/b,k=P/b,J=e[M]-n[M]-(e[L]-n[L]),V=e[M+1]-n[M+1]-(e[L+1]-n[L+1]),ut=e[M+2]-n[M+2]-(e[L+2]-n[L+2]),ft=J*H+V*X+ut*k,dt=(J-H*ft)*c/F,qt=(V-X*ft)*c/F,$t=(ut-k*ft)*c/F;e[M]-=dt*r[h],e[M+1]-=qt*r[h],e[M+2]-=$t*r[h],e[L]+=dt*r[v],e[L+1]+=qt*r[v],e[L+2]+=$t*r[v]}}}}}function Dv(i){const{x:t,inv:e,links:n}=i;for(let s=0;s<n.length;s++){const[r,o,a,l]=n[s],c=r*3,h=o*3,u=t[h]-t[c],f=t[h+1]-t[c+1],d=t[h+2]-t[c+2],g=Math.sqrt(u*u+f*f+d*d)||1e-6;if(l<1&&g>a)continue;const _=e[r]+e[o];if(_===0)continue;const p=(g-a)/g/_*l;t[c]+=u*p*e[r],t[c+1]+=f*p*e[r],t[c+2]+=d*p*e[r],t[h]-=u*p*e[o],t[h+1]-=f*p*e[o],t[h+2]-=d*p*e[o]}}function Uv(i){const t=i.container,{n:e,x:n,p:s,r,contact:o}=i,a=i.friction;for(let l=0;l<e;l++){if(i.inv[l]===0){o[l]=1;continue}const c=l*3;let h=!1,u=0,f=1,d=0;if(t.type==="bowl"){const g=n[c]-t.cx,_=n[c+1]-t.cy,p=n[c+2]-t.cz,m=Math.sqrt(g*g+_*_+p*p)||1e-6,y=t.R-r[l];n[c+1]<t.rimY+r[l]&&m>y&&(n[c]=t.cx+g/m*y,n[c+1]=t.cy+_/m*y,n[c+2]=t.cz+p/m*y,u=-g/m,f=-_/m,d=-p/m,h=!0);const v=n[c]-t.cx,M=n[c+2]-t.cz,L=Math.sqrt(v*v+M*M),T=t.rimR-r[l]*1.2;n[c+1]>=t.rimY&&L>T&&(n[c]=t.cx+v/L*T,n[c+2]=t.cz+M/L*T)}else{const g=n[c]-t.cx,_=n[c+2]-t.cz,p=Math.sqrt(g*g+_*_)||1e-6,m=Math.min(1,Math.max(0,(p-t.wellR)/(t.r-t.wellR))),y=t.y+t.lip*m*m*(3-2*m)+r[l]*.7;if(n[c+1]<y){n[c+1]=y,h=!0;const M=m>0&&m<1?t.lip*6*m*(1-m)/(t.r-t.wellR):0,L=Math.sqrt(1+M*M);u=-g/p*M/L,f=1/L,d=-_/p*M/L}const v=t.r-r[l];if(p>v&&(n[c]=t.cx+g/p*v,n[c+2]=t.cz+_/p*v),t.dome){const M=t.dome,L=n[c]-M.x,T=n[c+1]-M.cy,E=n[c+2]-M.z,P=Math.sqrt(L*L+T*T+E*E)||1e-6,I=M.R+r[l]*.7;P<I&&n[c+1]>t.y&&(n[c]=M.x+L/P*I,n[c+1]=M.cy+T/P*I,n[c+2]=M.z+E/P*I,h=!0,u=L/P,f=T/P,d=E/P)}}if(o[l]=h?1:0,h){const g=n[c]-s[c],_=n[c+1]-s[c+1],p=n[c+2]-s[c+2],m=g*u+_*f+p*d,y=g-u*m,v=_-f*m,M=p-d*m;n[c]-=y*a,n[c+1]-=v*a,n[c+2]-=M*a}}}function Nv(i,t){const e=i.spatula;if(!e.on)return;const{n,x:s,r}=i,o=e.px+(e.x-e.px)*t,a=e.py+(e.y-e.py)*t,l=e.pz+(e.z-e.pz)*t,c=(e.x-e.px)/3;(e.y-e.py)/3;const h=(e.z-e.pz)/3,u=Math.sqrt(c*c+h*h);for(let f=0;f<n;f++){const d=f*3,g=s[d]-o,_=s[d+1]-a,p=s[d+2]-l;if(_>.06||_<-.03)continue;const m=e.r+r[f],y=g*g+p*p;if(y>m*m)continue;const M=1-(Math.sqrt(y)||1e-6)/m;s[d]+=c*(.35+M*.6),s[d+2]+=h*(.35+M*.6),s[d+1]+=u*.5*M,i.still[f]=0}}function Fv(i,t){const n=Math.min(t,.03333333333333333)/3;i.h=n;const{x:s,p:r}=i,o=i.container.type==="plate"?.86:.992;for(let c=0;c<3;c++){for(let h=0;h<i.n;h++){if(i.inv[h]===0)continue;const u=h*3,f=(s[u]-r[u])*o,d=(s[u+1]-r[u+1])*o,g=(s[u+2]-r[u+2])*o;r[u]=s[u],r[u+1]=s[u+1],r[u+2]=s[u+2],s[u]+=f,s[u+1]+=d-wv*n*n,s[u+2]+=g}Nv(i,(c+1)/3),Lv(i);for(let h=0;h<2;h++)Dv(i),Iv(i),Uv(i)}const a=i.spatula;a.px=a.x,a.py=a.y,a.pz=a.z;const l=n*3;for(let c=0;c<i.n;c++){const h=c*3,u=(s[h]-r[h])/n,f=(s[h+1]-r[h+1])/n,d=(s[h+2]-r[h+2])/n,g=Math.sqrt(u*u+f*f+d*d);if(i.speed[c]=g,g<.03?i.still[c]+=l:i.still[c]=Math.max(0,i.still[c]-l*4),i.container.type==="plate"&&i.still[c]>.2&&i.inv[c]!==0&&(i.inv[c]=0),i.contact[c]){const _=i.r[c];i.w[h]+=(d/_-i.w[h])*.3,i.w[h+2]+=(-u/_-i.w[h+2])*.3,i.w[h+1]*=.8}i.w[h]*=.985,i.w[h+1]*=.985,i.w[h+2]*=.985,Ov(i.q,c*4,i.w[h],i.w[h+1],i.w[h+2],l)}}function Ov(i,t,e,n,s,r){const o=i[t],a=i[t+1],l=i[t+2],c=i[t+3],h=e*r*.5,u=n*r*.5,f=s*r*.5;let d=o+(h*c+u*l-f*a),g=a+(u*c+f*o-h*l),_=l+(f*c+h*a-u*o),p=c-(h*o+u*a+f*l);const m=Math.sqrt(d*d+g*g+_*_+p*p)||1;i[t]=d/m,i[t+1]=g/m,i[t+2]=_/m,i[t+3]=p/m}function zc(i,t,e,n,s,r){const o=q.x,a=q.cy,l=q.z,c=i-o,h=t-a,u=e-l,f=c*n+h*s+u*r,d=c*c+h*h+u*u-q.R*q.R,g=f*f-d;if(g<0)return null;const _=-f+Math.sqrt(g);let p=i+n*_,m=t+s*_,y=e+r*_;if(m>q.rimY){const v=(q.rimY-t)/s;if(!(v>0))return null;p=i+n*v,y=e+r*v;const M=p-o,L=y-l,T=Math.hypot(M,L);if(T>q.rimR*1.6)return null;const E=Math.min(1,(q.rimR-.02)/T);p=o+M*E,y=l+L*E,m=a-Math.sqrt(Math.max(0,q.R*q.R-(p-o)**2-(y-l)**2))}return{x:p,y:m,z:y}}function zv(i,t){const[e,n]=t;return i>=e&&i<=n?1:i<e?Math.max(0,1-(e-i)/.55):Math.max(0,1-(i-n)/.7)}function Bv(i,t){if(!t.charWant)return 1-Math.min(1,i*1.6);const[e,n]=t.charWant;return i<e?.65+.35*(i/e):i<=n?1:Math.max(0,1-(i-n)*2.2)}function kv(i,t,e){const n=i.length;if(!n)return{score:0,meanD:0,meanC:0,verdict:"missing"};let s=0,r=0,o=0;for(let h=0;h<n;h++)s+=zv(i[h],e.band)*Bv(t[h],e),r+=i[h],o+=t[h];const a=r/n,l=o/n;let c="perfect";return(e.charWant?l>e.charWant[1]+.2:l>.35)?c="burnt":a<e.band[0]-.3?c="raw":a<e.band[0]?c="under":a>e.band[1]+.25?c="over":a>e.band[1]?c="bitOver":e.charWant&&l<e.charWant[0]&&(c="pale"),{score:s/n,meanD:a,meanC:l,verdict:c}}function qh(i,t){const[e,n]=t;return i>=e&&i<=n?1:Math.max(0,1-(i<e?e-i:i-n)/.3)}const Gv={raw:{prawn:"The prawns are still grey in the middle. Pink, darling. Pink.",noodles:"These noodles are still stiff. They needed the sauce and a bit more time.",wideNoodles:"The noodles are still stiff. Sauce, then heat.",egg:"The egg is still runny. Let it set before you move on.",tofu:"The tofu never saw the heat. It wants a golden crust.",garlic:"Raw garlic. That bite will stay with the customer all night.",rice:"The rice is still cold in the middle. Fry it properly.",mince:"That chicken is still pink. Nobody wants that.",chickenSlice:"That chicken is still pink. Nobody wants that.",basil:"The basil never went in hot. It should be just wilted.",_:"Some of this is still raw."},under:{prawn:"The prawns needed another moment.",noodles:"Noodles a little firm. Almost there.",tofu:"Tofu could have gone a shade more golden.",rice:"The rice wanted a little longer. Crispier, please.",mince:"The chicken needed another moment.",chickenSlice:"The chicken needed another moment.",_:"A touch underdone."},over:{prawn:"Rubbery prawns. They cook in seconds, not minutes.",sprouts:"The sprouts have gone limp. They should snap.",chives:"The chives went dark and sad. In at the very end, quick toss, out.",scallion:"The spring onions went dark. In at the end, one toss.",basil:"The basil has cooked to nothing. Off the heat, just wilt it.",gailan:"The broccoli has gone soft. It should still have a crunch.",egg:"The egg is dry.",mince:"Dry chicken. Take it off sooner.",chickenSlice:"Dry chicken. Take it off sooner.",_:"Some of it is overcooked."},burnt:{garlic:"Burnt garlic. I can taste it from over here.",birdChilli:"Burnt chilli. The whole market is coughing.",noodles:"The noodles stuck and scorched. Keep them moving.",wideNoodles:"Char, yes. Charcoal, no. Toss them sooner.",rice:"The rice caught on the bottom. Keep it moving.",_:"Something caught on the wok. Keep it moving."},pale:{wideNoodles:"No char on the noodles. Spread them out and let the wok kiss them.",_:"It wanted a bit of colour."}};function Hv(i,t){const e=Gv[i];return e?e[t]||e._:null}function Vv(i,t,e,n){const s=[];let r=0,o=0;const a={};for(const[T,E]of Object.entries(i.weights)){const P=n.pieces[T]||{d:[],c:[]},I=kv(P.d,P.c,t[T]);a[T]=I,o+=I.score*E,r+=E}const l=r?o/r:0,c=Object.entries(a).filter(([,T])=>T.verdict!=="perfect"&&T.verdict!=="bitOver").sort((T,E)=>T[1].score*i.weights[T[0]]-E[1].score*i.weights[E[0]]);for(const[T,E]of c.slice(0,2)){const P=E.verdict==="missing"?`Where did the ${t[T].name.toLowerCase()} go?`:Hv(E.verdict,T);P&&s.push(P)}const h=n.chop??0,f=i.steps.filter(T=>T.liquid).map(T=>T.liquid).map(T=>{const E=n.pours?.[T]??0,P=qh(E,e[T].target);if(P<.6&&T!=="oil"){const I=e[T].name.toLowerCase();E<e[T].target[0]?s.push(`Not enough ${I}. It tastes of nothing.`):s.push(T==="tamarind"?"Swimming in sauce. Pad Thai is fried, not stewed.":`Far too much ${I}. Salty!`)}return P}),d=f.length?f.reduce((T,E)=>T+E,0)/f.length:1,g=h*.4+d*.6;h<.6&&s.push("Your cuts are all different lengths. Follow the lines.");const _=Math.min(1,(n.hei||0)/5)*.8+Math.min(1,(n.tosses||0)/8)*.2;_>.85?s.push("Proper wok hei. Smoky, like Yaowarat at midnight."):(n.tosses||0)<2&&s.push("Toss it! The flame is what makes it taste of the street.");const p=n.garnish||{};let m=0,y=0;for(const[T,[E,P]]of Object.entries(i.garnish||{})){const I=p[T]||0;m+=I>=E&&I<=P?1:I>P?.4:I>0?.6:0,y++}const v=y?m/y:0;i.garnish?.lime&&!(p.lime>0)?s.push("No lime? The customer needs something to squeeze."):i.garnish?.friedEgg&&!(p.friedEgg>0)?s.push("Where is the fried egg? Kra Pao without khai dao is only half a dish."):v>.9&&s.push("Beautiful plate. I would photograph that.");const M=Math.round(l*55+g*20+_*10+v*15),L=M>=85?3:M>=65?2:M>=40?1:0;return s.length||s.push(L===3?"Perfect. You can have my stall.":"Not bad at all."),{total:M,stars:L,cooking:l,technique:g,hei:_,presentation:v,per:a,notes:s.slice(0,3)}}const Wv=.004,Xv=.03;function qv(i,t,e){const n=[],s=(e-t)/(i+1);for(let r=0;r<i;r++)n.push(e-s*(r+1));return{guides:n,next:0,end:e,start:t,acc:[],pieces:[]}}function Yv(i){return i.next<i.guides.length?i.guides[i.next]:null}function Bc(i,t){const e=Yv(i);if(e===null)return null;const n=Math.max(i.start+.01,Math.min(i.end-.004,t)),s=Math.abs(n-e),r=Math.max(0,1-Math.max(0,s-Wv)/Xv),o={from:n,to:i.end,len:i.end-n};return i.acc.push(r),i.pieces.push(o),i.end=n,i.next++,{acc:r,piece:o,done:i.next>=i.guides.length}}function kc(i){return i.acc.length?i.acc.reduce((t,e)=>t+e,0)/i.guides.length:0}class $v{constructor(t=90){this.group=new me,this.items=[];const e=x_();for(let n=0;n<t;n++){const s=new Ur({map:e,color:16777215,transparent:!0,depthWrite:!1,opacity:0}),r=new Ea(s);r.visible=!1,r.renderOrder=3,this.group.add(r),this.items.push({s:r,life:0,max:1,vx:0,vy:0,vz:0,grow:0,a:0})}this.next=0,this.spark=new Kv,this.group.add(this.spark.points)}emit(t,e,n,{colour:s=16777215,size:r=.05,life:o=1.6,rise:a=.12,alpha:l=.35,spread:c=.02}={}){const h=this.items[this.next];this.next=(this.next+1)%this.items.length,h.s.position.set(t+(Math.random()-.5)*c,e,n+(Math.random()-.5)*c),h.s.material.color.set(s),h.s.material.rotation=Math.random()*Math.PI*2,h.s.scale.setScalar(r),h.life=0,h.max=o*(.8+Math.random()*.4),h.vx=(Math.random()-.5)*.03,h.vy=a*(.7+Math.random()*.6),h.vz=(Math.random()-.5)*.03,h.grow=r*1.6,h.a=l,h.s.visible=!0}update(t){for(const e of this.items){if(!e.s.visible)continue;e.life+=t;const n=e.life/e.max;if(n>=1){e.s.visible=!1;continue}e.s.position.x+=e.vx*t,e.s.position.y+=e.vy*t,e.s.position.z+=e.vz*t,e.vx+=Math.sin(e.life*3+e.a*9)*.02*t;const s=e.s.scale.x+e.grow*t;e.s.scale.setScalar(s),e.s.material.rotation+=t*.3,e.s.material.opacity=e.a*Math.sin(Math.PI*Math.min(1,n*1.4))*(1-n)}this.spark.update(t)}}class Kv{constructor(t=160){this.max=t,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.life=new Float32Array(t);const e=new he;e.setAttribute("position",new Ee(this.pos,3).setUsage(ws)),this.points=new mg(e,new Ch({color:new Tt(1.6,1.3,.8),size:.004,transparent:!0,opacity:.9,blending:Xi,depthWrite:!1,map:v_()})),this.points.frustumCulled=!1,this.geo=e,this.next=0}burst(t,e,n,s=20,r=.9){for(let o=0;o<s;o++){const a=this.next;this.next=(this.next+1)%this.max,this.pos[a*3]=t+(Math.random()-.5)*.08,this.pos[a*3+1]=e,this.pos[a*3+2]=n+(Math.random()-.5)*.08;const l=Math.random()*Math.PI*2,c=r*(.3+Math.random());this.vel[a*3]=Math.cos(l)*c*.4,this.vel[a*3+1]=c,this.vel[a*3+2]=Math.sin(l)*c*.4,this.life[a]=.3+Math.random()*.4}}update(t){for(let e=0;e<this.max;e++){if(this.life[e]<=0){this.pos[e*3+1]=-10;continue}this.life[e]-=t,this.vel[e*3+1]-=9.8*t,this.pos[e*3]+=this.vel[e*3]*t,this.pos[e*3+1]+=this.vel[e*3+1]*t,this.pos[e*3+2]+=this.vel[e*3+2]*t}this.geo.attributes.position.needsUpdate=!0}}const La=1,Gc=3,Zv=["thai"];function Jv(i,t,e=!1){const n=t.best||{},s=new Set([...Zv,...t.opened||[]]),r=c=>(n[c]?.stars??0)>=La;let o=0;const a=i.map(c=>{const h=(c.dishes||[]).map((d,g,_)=>({id:d,level:g+1,best:n[d]||null,passed:r(d),open:e||g===0||r(_[g-1]),needs:g>0?_[g-1]:null})),u=h.filter(d=>d.passed).length,f=u>=Gc;return f&&o++,{id:c.id,passedCount:u,stamp:f,dishes:h,open:e||s.has(c.id),playable:h.length>0,toStamp:Math.max(0,Gc-u)}}),l=Math.max(0,o-(t.spent||0));return{countries:a,stamps:l,earned:o}}function jv(i,t){const e={dishes:[],stamp:!1};return t.countries.forEach((n,s)=>{const r=i.countries[s];n.dishes.forEach((o,a)=>{o.open&&!r.dishes[a].open&&e.dishes.push(o.id)}),n.stamp&&!r.stamp&&(e.stamp=!0)}),e}const Fo=(i,t,e)=>{const n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n},Je=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);class Qv{constructor(t,e){this.root=t,this.h=e,t.innerHTML=`
      <div id="card" class="hide"><div class="dish"><span class="dn"></span><span id="dots"></span></div><div class="say"></div><div class="hint"></div></div>
      <div id="meter" class="hide"><div class="row"><span class="what"></span><b class="state"></b></div><div class="bar"><div class="band"></div><div class="mark"></div></div><div class="warn"></div></div>
      <div id="flame" class="hide"><div class="temp">24°C</div><div class="track"><div class="fill"></div><div class="knob"></div></div><div class="lbl">FLAME</div></div>
      <div id="pour" class="hide"><div class="band"></div><div class="fill"></div></div>
      <div id="garnish" class="hide"></div>
      <div id="actions"></div>
      <div id="toast"></div>
      <div id="menu" class="hide"></div>
      <div id="result" class="hide"></div>
      <button id="home" class="hide" aria-label="Menu">&#8962;</button>
      <button id="sound" aria-label="Sound">SND</button>`,this.$=n=>t.querySelector(n),this.card=this.$("#card"),this.meter=this.$("#meter"),this.flame=this.$("#flame"),this.pour=this.$("#pour"),this.garnish=this.$("#garnish"),this.actions=this.$("#actions"),this.toastEl=this.$("#toast"),this.menu=this.$("#menu"),this.result=this.$("#result"),this.$("#sound").addEventListener("click",()=>e.onSound?.()),this.$("#home").addEventListener("click",()=>e.onMenu?.()),this._flameDrag(),this._toastT=0}setStep(t,e,n,s,r){this.card.classList.remove("hide"),this.card.querySelector(".dn").textContent=t,this.card.querySelector(".say").textContent=e,this.card.querySelector(".hint").textContent=n||"";const o=this.card.querySelector("#dots");o.innerHTML="";for(let a=0;a<r;a++)o.appendChild(Fo("i",a<s?"done":a===s?"now":""));requestAnimationFrame(()=>{this.root.style.setProperty("--card-h",this.card.offsetHeight+"px")}),this.root.style.setProperty("--card-h",(this.card.offsetHeight||96)+"px")}setHint(t){this.card.querySelector(".hint").textContent=t}hideCard(){this.card.classList.add("hide")}showFlame(t){this.flame.classList.toggle("hide",!t)}setFlame(t,e){const n=Math.round(t*100);this.flame.querySelector(".fill").style.height=n+"%",this.flame.querySelector(".knob").style.bottom=`calc(${n}% - 7px)`;const s=this.flame.querySelector(".temp");s.textContent=Math.round(e)+"°C",s.style.color=e>230?"#ff7a4a":e>170?"#ffc55a":"#cdbfae"}_flameDrag(){const t=this.flame.querySelector(".track");let e=!1;const n=r=>{const o=t.getBoundingClientRect(),a=1-(r.clientY-o.top)/o.height;this.h.onFlame?.(Math.max(0,Math.min(1,a)))};this.flame.addEventListener("pointerdown",r=>{e=!0,this.flame.setPointerCapture(r.pointerId),n(r),r.stopPropagation()}),this.flame.addEventListener("pointermove",r=>{e&&n(r)});const s=()=>{e=!1};this.flame.addEventListener("pointerup",s),this.flame.addEventListener("pointercancel",s)}showMeter(t,e){this.meter.classList.remove("hide"),this.meter.querySelector(".what").textContent=t;const n=this.meter.querySelector(".band");n.style.left=e[0]/2*100+"%",n.style.width=(e[1]-e[0])/2*100+"%"}setMeter(t,e,n){this.meter.querySelector(".mark").style.left=Math.min(100,t/2*100)+"%",this.meter.querySelector(".state").textContent=e,this.meter.querySelector(".warn").textContent=n||""}hideMeter(){this.meter.classList.add("hide")}showPour(t){this.pour.classList.remove("hide");const e=this.pour.querySelector(".band");e.style.bottom=t[0]*100+"%",e.style.height=(t[1]-t[0])*100+"%",this.setPour(0)}setPour(t){this.pour.querySelector(".fill").style.height=Math.min(100,t*100)+"%"}hidePour(){this.pour.classList.add("hide")}setActions(t){this.actions.innerHTML="",this._btns={};for(const e of t){const n=Fo("button","btn "+(e.cls||""),e.label);if(e.disabled&&(n.disabled=!0),e.hold){const s=o=>{o.preventDefault(),n.classList.add("on"),n.setPointerCapture?.(o.pointerId),this.h.onHold?.(e.id,!0)},r=()=>{n.classList.contains("on")&&(n.classList.remove("on"),this.h.onHold?.(e.id,!1))};n.addEventListener("pointerdown",s),n.addEventListener("pointerup",r),n.addEventListener("pointercancel",r),n.addEventListener("lostpointercapture",r)}else n.addEventListener("click",s=>{s.stopPropagation(),this.h.onAction?.(e.id)});this.actions.appendChild(n),this._btns[e.id]=n}}enable(t,e){this._btns?.[t]&&(this._btns[t].disabled=!e)}label(t,e){this._btns?.[t]&&(this._btns[t].innerHTML=e)}showGarnish(t,e,n){this.garnish.classList.remove("hide"),this.garnish.innerHTML="";for(const s of t){const r=Fo("button","chip"+(s.id===n?" sel":""),`<i style="background:${s.css}"></i>${Je(s.name)} <small>${e[s.id]||0}</small>`);r.addEventListener("click",o=>{o.stopPropagation(),this.h.onGarnish?.(s.id)}),this.garnish.appendChild(r)}}hideGarnish(){this.garnish.classList.add("hide")}toast(t,e=!1){this.toastEl.textContent=t,this.toastEl.classList.toggle("bad",e),this.toastEl.classList.add("on"),clearTimeout(this._toastT),this._toastT=setTimeout(()=>this.toastEl.classList.remove("on"),900)}showMenu(t,e,n){this.menu.classList.remove("hide"),this.$("#home").classList.add("hide");const s=a=>[0,1,2].map(l=>`<i class="${l<a?"on":""}">★</i>`).join(""),r=t.map((a,l)=>{const c=n.countries[l],h=c.dishes.map(g=>{const _=e[g.id];if(!c.open||!g.open){const m=c.open?`Score ${La}★ on ${Je(e[g.needs].name)} to unlock`:"";return`<div class="dishbtn locked"><span class="lv">${g.level}</span><span class="txt"><span class="n">${Je(_.name)}</span> <span class="l">${Je(_.local||"")}</span><br><span class="l">${m}</span></span><span class="b">LOCKED</span></div>`}const p=g.best?`<span class="st">${s(g.best.stars)}</span>${g.best.total}`:"COOK";return`<button class="dishbtn" data-dish="${g.id}"><span class="lv">${g.level}</span><span class="txt"><span class="n">${Je(_.name)}</span> <span class="l">${Je(_.local||"")}</span><br><span class="l">${Je(_.blurb)}</span></span><span class="b">${p}</span></button>`}).join(""),u=a.soon?.length?`<div class="soonrow">Coming: ${a.soon.map(Je).join(" · ")}</div>`:"";let f="";c.open&&c.playable&&(f=c.stamp?'<span class="stamp">Passport stamp earned</span>':`<span class="tostamp">${c.toStamp} more to earn a passport stamp</span>`);let d="";return c.open||(d=c.playable?n.stamps>0?`<button class="btn openbtn" data-open="${a.id}">Open with a passport stamp</button>`:'<div class="soonrow">Locked. Earn a passport stamp to open it</div>':'<div class="soonrow">Locked. Coming soon</div>'),`<div class="country${c.open?"":" soon"}"><div class="h"><b>${Je(a.name)}</b><span>${Je(a.place)}</span></div>${f?`<div class="cstat">${f}</div>`:""}${c.open&&h?`<div class="dishes">${h}</div>`:""}${d}${u}</div>`}).join(""),o=n.earned?`<div class="passport">Passport: ${n.stamps} stamp${n.stamps===1?"":"s"} to spend</div>`:"";this.menu.innerHTML=`<div class="logo"><div class="k">Wiparat’s</div><div class="t">Worldwide<br>Kitchen</div><div class="s">Cook the world’s street food</div></div><div class="list">${o}${r}</div>`,this.menu.querySelectorAll("button.dishbtn").forEach(a=>a.addEventListener("click",()=>this.h.onStart?.(a.dataset.dish))),this.menu.querySelectorAll("[data-open]").forEach(a=>a.addEventListener("click",()=>this.h.onOpen?.(a.dataset.open)))}hideMenu(){this.menu.classList.add("hide"),this.$("#home").classList.remove("hide")}showResult(t,e,n,s,r={}){const o=[0,1,2].map(l=>`<span class="${l<e.stars?"":"off"}">★</span>`).join(""),a=(l,c)=>`<span>${l}</span><div class="b"><i style="width:${Math.round(c*100)}%"></i></div>`;this.result.innerHTML=`
      <div class="top"><div class="stars">${o}</div><div><div class="score">${e.total}<small> / 100</small></div><div class="best">${s?"NEW BEST":n?"Best "+n.total:""}</div></div></div>
      <div class="parts">${a("Cooking",e.cooking)}${a("Technique",e.technique)}${a("Wok hei",e.hei)}${a("Plating",e.presentation)}</div>
      <div class="noi"><div class="who">Auntie Noi tastes it</div>${e.notes.map(l=>`<p>${Je(l)}</p>`).join("")}</div>
      ${r.dishes?.length?`<div class="news good">Unlocked: <b>${r.dishes.map(Je).join(", ")}</b></div>`:""}
      ${r.stamp?'<div class="news stamp">Passport stamp earned! Open a new country from the menu</div>':""}
      ${r.need?`<div class="news">Score ${La}★ to unlock <b>${Je(r.need)}</b></div>`:""}
      <div class="row"><button class="btn ghost" data-a="menu">Menu</button><button class="btn${r.next?" ghost":""}" data-a="again">Cook again</button>${r.next?`<button class="btn" data-a="go:${r.next}">Next dish</button>`:""}</div>`,this.result.classList.remove("hide"),this.result.querySelectorAll("[data-a]").forEach(l=>l.addEventListener("click",c=>{c.stopPropagation(),this.h.onAction?.(l.dataset.a)}))}hideResult(){this.result.classList.add("hide")}setSound(t){this.$("#sound").textContent=t?"SND":"OFF",this.$("#sound").style.opacity=t?1:.6}clearPlay(){this.hideMeter(),this.hidePour(),this.hideGarnish(),this.hideResult(),this.showFlame(!1),this.setActions([])}}const si=1e-4;class tx{constructor(t,e){this.ctx=t,this.rng=e,this.cache=new Map}get(t="white"){if(this.cache.has(t))return this.cache.get(t);const e=Math.floor(this.ctx.sampleRate*2),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),s=n.getChannelData(0),r=this.rng;if(t==="brown"){let o=0;for(let a=0;a<e;a++){const l=r.float()*2-1;o=(o+.02*l)/1.02,s[a]=o*3.5}}else if(t==="pink"){let o=0,a=0,l=0,c=0,h=0,u=0,f=0;for(let d=0;d<e;d++){const g=r.float()*2-1;o=.99886*o+g*.0555179,a=.99332*a+g*.0750759,l=.969*l+g*.153852,c=.8665*c+g*.3104856,h=.55*h+g*.5329522,u=-.7616*u-g*.016898,s[d]=(o+a+l+c+h+u+f+g*.5362)*.11,f=g*.115926}}else for(let o=0;o<e;o++)s[o]=r.float()*2-1;return this.cache.set(t,n),n}}function ex(i,t,e,n,s,r){const o=!!r.loop,a=s+(e.at||0),l=o?1/0:Math.max(.02,e.dur??.2),c=(e.peak??1)*(r.gain??1);if(c<=0)return null;const h=Math.max(.001,e.a??.005),u=Math.max(0,e.d??0),f=e.s??1,d=Math.max(.005,e.r??.05),g=i.createGain();g.gain.value=si,g.connect(n);let _,p=null;const m=r.rate??1;if(e.src==="noise")_=i.createBufferSource(),_.buffer=t.get(e.noise||"white"),_.loop=!0,_.loopStart=0,_.playbackRate.value=m;else{_=i.createOscillator(),_.type=e.wave||"sine";const I=e.jitter||0,x=I?1+(r.jitterRoll??0)*I:1,b=Math.max(8,(e.freq??440)*x*m);if(p=_.frequency,p.setValueAtTime(b,a),e.to!=null&&!o){const F=Math.max(8,e.to*x*m),O=a+l;e.glide==="lin"?p.linearRampToValueAtTime(F,O):p.exponentialRampToValueAtTime(F,O)}}let y=_,v=null;if(e.filter){const I=i.createBiquadFilter();I.type=e.filter.type||"lowpass",I.Q.value=e.filter.q??1;const x=Math.max(20,e.filter.freq??1e3);I.frequency.setValueAtTime(x,a),e.filter.to!=null&&!o&&I.frequency.exponentialRampToValueAtTime(Math.max(20,e.filter.to),a+l),v=I.frequency,y.connect(I),y=I}let M=null,L=null;if(e.lfo&&e.lfo.rate>0){M=i.createOscillator(),M.type="sine",M.frequency.value=e.lfo.rate;const I=i.createGain();if(e.lfo.target==="gain"){const x=Math.min(1,Math.max(0,e.lfo.depth??.5));L=i.createGain(),L.gain.value=1-x*.5,I.gain.value=x*.5,M.connect(I),I.connect(L.gain),y.connect(L),y=L}else e.lfo.target==="filter"&&v?(I.gain.value=e.lfo.depth??200,M.connect(I),I.connect(v)):p&&(I.gain.value=e.lfo.depth??20,M.connect(I),I.connect(p));M.start(a)}y.connect(g);const T=g.gain;T.setValueAtTime(si,a),T.linearRampToValueAtTime(c,a+h);const E=Math.max(si,c*f);u>0&&T.linearRampToValueAtTime(E,a+h+u);let P=1/0;if(o)_.start(a,e.src==="noise"?r.noiseOffset??0:void 0);else{const I=Math.max(a+h+u,a+l-d);T.setValueAtTime(Math.max(si,u>0?E:c),I),T.linearRampToValueAtTime(si,a+l),P=a+l+.02,_.start(a,e.src==="noise"?r.noiseOffset??0:void 0),_.stop(P),M&&M.stop(P)}return{endsAt:P,stop(I){const x=Math.max(I,i.currentTime);try{T.cancelScheduledValues(x),T.setValueAtTime(Math.max(si,T.value),x),T.linearRampToValueAtTime(si,x+d),_.stop(x+d+.02),M&&M.stop(x+d+.02)}catch{}}}}function Oo(i,t,e,n,s={}){const r=Math.max(s.when??i.currentTime,i.currentTime),o=!!e.loop,a=[];let l=r;for(const c of e.layers||[]){const h=ex(i,t,c,n,r,{...s,loop:o});h&&(a.push(h),h.endsAt>l&&h.endsAt!==1/0&&(l=h.endsAt))}return{endsAt:o?1/0:l,stop(c=i.currentTime){for(const h of a)h.stop(c)}}}function nx(i){let t=1779033703^i.length;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),3432918353),t=t<<13|t>>>19;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),t^=t>>>16,t>>>0)}function ix(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class ol{constructor(t="lifesim"){this.seed=String(t),this._next=ix(nx(this.seed)()),this._children=new Map}child(t){return this._children.has(t)||this._children.set(t,new ol(`${this.seed}:${t}`)),this._children.get(t)}float(){return this._next()}range(t,e){return t+this._next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}chance(t){return this._next()<t}sign(){return this._next()<.5?-1:1}pick(t){return t[Math.floor(this._next()*t.length)]}pickMany(t,e){const n=this.shuffle([...t]);return n.slice(0,Math.min(e,n.length))}shuffle(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(this._next()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}weighted(t){const e=Array.isArray(t)?t:[...t].map(([r,o])=>({value:r,weight:o}));let n=0;for(const r of e)n+=Math.max(0,r.weight??1);if(n<=0)return e[0];let s=this._next()*n;for(const r of e)if(s-=Math.max(0,r.weight??1),s<=0)return r;return e[e.length-1]}gaussian(t=0,e=1){let n=0,s=0;for(;n===0;)n=this._next();for(;s===0;)s=this._next();return t+e*Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*s)}stat(t,e,n=0,s=100){return Math.max(n,Math.min(s,Math.round(this.gaussian(t,e))))}}const sx={chop:{layers:[{src:"noise",noise:"white",dur:.05,a:.001,r:.04,peak:.5,filter:{type:"bandpass",freq:3200,q:.8}},{src:"osc",wave:"sine",freq:190,to:70,dur:.12,a:.002,r:.1,peak:.55}]},clank:{layers:[{src:"osc",wave:"sine",freq:612,dur:.5,a:.002,d:.05,s:.4,r:.45,peak:.16},{src:"osc",wave:"sine",freq:1493,dur:.35,a:.002,r:.33,peak:.1},{src:"osc",wave:"sine",freq:2811,dur:.22,a:.001,r:.2,peak:.06},{src:"noise",noise:"white",dur:.03,a:.001,r:.03,peak:.25,filter:{type:"highpass",freq:2500}}]},whoosh:{layers:[{src:"noise",noise:"white",dur:.45,a:.08,r:.3,peak:.35,filter:{type:"bandpass",freq:500,to:1600,q:.7}}]},flare:{layers:[{src:"noise",noise:"white",dur:.9,a:.02,d:.2,s:.5,r:.6,peak:.55,filter:{type:"lowpass",freq:900,to:300,q:.5}}]},hiss:{layers:[{src:"noise",noise:"white",dur:1.2,a:.005,d:.3,s:.45,r:.8,peak:.5,filter:{type:"highpass",freq:2600,q:.6}}]},crack:{layers:[{src:"noise",noise:"white",dur:.035,a:.001,r:.03,peak:.6,filter:{type:"bandpass",freq:2200,q:1.2}},{src:"osc",wave:"triangle",freq:900,to:400,dur:.04,a:.001,r:.035,peak:.12}]},plop:{layers:[{src:"osc",wave:"sine",freq:320,to:120,dur:.12,a:.004,r:.1,peak:.3},{src:"noise",noise:"white",dur:.08,a:.002,r:.07,peak:.2,filter:{type:"lowpass",freq:1400}}]},tick:{layers:[{src:"osc",wave:"triangle",freq:1200,dur:.05,a:.001,r:.045,peak:.12}]},sprinkle:{layers:[{src:"noise",noise:"white",dur:.04,a:.001,r:.03,peak:.12,filter:{type:"bandpass",freq:5200,q:2}}]},scooter:{layers:[{src:"osc",wave:"sawtooth",freq:70,to:118,glide:"lin",dur:2.8,a:1.1,d:.2,s:.8,r:1.4,peak:.05,filter:{type:"lowpass",freq:420,q:.8}},{src:"noise",noise:"white",dur:2.8,a:1.2,r:1.4,peak:.03,filter:{type:"bandpass",freq:380,q:1}}]}},Hc=[523.3,587.3,659.3,784,880,1046.5];class rx{constructor(){this.ctx=null,this.on=!0,this.beds=null}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t,this.bank=new tx(this.ctx,new ol("kitchen.audio")),this.master=this.ctx.createGain(),this.master.gain.value=this.on?.9:0,this.master.connect(this.ctx.destination),this._beds())}setOn(t){this.on=t,this.master&&this.master.gain.setTargetAtTime(t?.9:0,this.ctx.currentTime,.05)}_noiseLoop(t,e=0){const n=this.ctx.createBufferSource();n.buffer=this.bank.get("white"),n.loop=!0;let s=n;for(const o of t){const a=this.ctx.createBiquadFilter();a.type=o.type,a.frequency.value=o.freq,a.Q.value=o.q??.7,s.connect(a),s=a}const r=this.ctx.createGain();return r.gain.value=e,s.connect(r),r.connect(this.master),n.start(0,Math.random()*1.5),r}_beds(){this.ctx;const t=this._noiseLoop([{type:"highpass",freq:1800},{type:"lowpass",freq:9e3}]),e=this._noiseLoop([{type:"lowpass",freq:420,q:.6},{type:"highpass",freq:60}]),n=this._noiseLoop([{type:"bandpass",freq:520,q:.5}],.035);this.beds={sizzle:t,roar:e,street:n},this._crackleT=0,this._scooterT=6}play(t,e={}){if(!this.ctx||!this.on)return;const n=sx[t];n&&Oo(this.ctx,this.bank,n,this.master,{gain:e.gain??1,rate:e.rate??.94+Math.random()*.12,noiseOffset:Math.random()*1.5})}chime(t){if(!this.ctx)return;const e=this.ctx.currentTime+.05;(t>=3?[0,2,3,5]:t===2?[0,2,3]:t===1?[0,2]:[2,0]).forEach((s,r)=>{Oo(this.ctx,this.bank,{layers:[{src:"osc",wave:"triangle",freq:Hc[s],dur:.5,a:.005,d:.1,s:.5,r:.35,peak:.16},{src:"osc",wave:"sine",freq:Hc[s]*2,dur:.3,a:.005,r:.25,peak:.05}]},this.master,{when:e+r*.14})})}update(t,e,n){if(!this.ctx||!this.beds)return;const s=this.ctx.currentTime;this.beds.sizzle.gain.setTargetAtTime(e*.32,s,.08),this.beds.roar.gain.setTargetAtTime(n*.3,s,.12),this._crackleT-=t,e>.1&&this._crackleT<=0&&(this._crackleT=.02+Math.random()*(.18-e*.15),Oo(this.ctx,this.bank,{layers:[{src:"noise",noise:"white",dur:.012+Math.random()*.02,a:.001,r:.01,peak:.08+e*.2,filter:{type:"bandpass",freq:2500+Math.random()*4e3,q:1.5}}]},this.master,{noiseOffset:Math.random()*1.5})),this._scooterT-=t,this._scooterT<=0&&(this._scooterT=9+Math.random()*14,this.play("scooter"))}}const Yh="kitchen.";function Wr(i,t){try{const e=localStorage.getItem(Yh+i);return e==null?t:JSON.parse(e)}catch{return t}}function al(i,t){try{localStorage.setItem(Yh+i,JSON.stringify(t))}catch{}}function ll(){return Wr("best",{})}function ox(i,t,e){const n=ll(),s=n[i];return s&&s.total>=t?!1:(n[i]={total:t,stars:e},al("best",n),!0)}function ax(){const i=Wr("progress",{});return{best:ll(),opened:i.opened||[],spent:i.spent||0}}function lx(i,t){const e=t.countries.find(s=>s.id===i);if(!e||e.open||!e.playable||t.stamps<1)return!1;const n=Wr("progress",{});return al("progress",{opened:[...n.opened||[],i],spent:(n.spent||0)+1}),!0}function cx(){return Wr("prefs",{sound:!0})}function hx(i){al("prefs",i)}const ux={peanuts:"#c99a5c",chilli:"#c42a1c",lime:"#86c23a",freshSprouts:"#f5f2de",freshChives:"#4a9a30",cucumber:"#7fbf5e",freshScallion:"#6cb846",friedEgg:"#ffd54a",pepper:"#d6ccbe"},zo={peanuts:160,chilli:110,lime:3,freshSprouts:30,freshChives:30,cucumber:8,freshScallion:30,friedEgg:1,pepper:120},Mr={peanuts:3,chilli:2,pepper:2},Vc={lime:1,cucumber:1,friedEgg:1,freshSprouts:3,freshChives:3,freshScallion:3},Pn={dx:-.028,dz:.018,base:.056,h:.036};class fx{constructor(t){this.camera=t,this.pos=new R(0,1.6,1.4),this.look=new R(0,1,0),this.goal={pos:new R,look:new R},this.view="stall",this.t=0,this.speed=2.6}go(t,e=2.6){this.view=t,this.speed=e}snapTo(t){this.view=t,this._goal(),this.pos.copy(this.goal.pos),this.look.copy(this.goal.look),this._apply()}_goal(){const t=p_[this.view];let e=t;this.view==="stall"&&(e={...t,yaw:t.yaw+Math.sin(this.t*.12)*.5}),this.view==="beauty"&&(e={...t,yaw:Math.sin(this.t*.25)*.6}),g_(this.camera,e,this.goal,1.08)}_apply(){this.camera.position.copy(this.pos),this.camera.lookAt(this.look)}update(t){this.t+=t,this._goal();const e=1-Math.exp(-t*this.speed);this.pos.lerp(this.goal.pos,e),this.look.lerp(this.goal.look,e),this._apply()}}class dx{constructor(t,e,n=new URLSearchParams){this.stage=t,this.scene=t.scene,this.camera=t.camera,this.cam=new fx(this.camera),this.params=n;const{group:s,materials:r}=X_();this.stall=s,this.M=r,this.scene.add(s),this.wok=new Y_,this.spatula=new $_,this.ladle=new K_,this.puffs=new $v,this.scene.add(this.wok.group,this.spatula.group,this.ladle.group,this.puffs.group),this.egg=new Dt(Gh(),new re({color:15323046,roughness:.55,metalness:0})),this.egg.castShadow=!0,this.egg.visible=!1,this.scene.add(this.egg),this.audio=new rx,this.prefs=cx(),this.audio.setOn(this.prefs.sound),this.hud=new Qv(e,{onStart:a=>{this.audio.unlock(),this.start(a)},onOpen:a=>{this.audio.unlock(),lx(a,this._progress())&&(this.audio.chime(3),this.menu())},onAction:a=>this.action(a),onHold:(a,l)=>this.hold(a,l),onFlame:a=>{this.audio.unlock(),this.stove.flame=a},onGarnish:a=>{this.garnishSel=a,this._garnishHud()},onSound:()=>{this.audio.unlock(),this.prefs.sound=!this.prefs.sound,this.audio.setOn(this.prefs.sound),this.hud.setSound(this.prefs.sound),hx(this.prefs)},onMenu:()=>this.menu()}),this.hud.setSound(this.prefs.sound),this.raycaster=new t_,this.ndc=new Z,this._bindPointer(t.renderer.domElement),this.stove=Dc(),this.sim=Oc(1400),this.mode="menu",this.time=0,this.dish=null;const o=n.get("dish");o&&Ms[o]?this.start(o):this.menu(),this.cam.snapTo(this.cam.view)}menu(){this.mode="menu",this._teardown(),this.hud.clearPlay(),this.hud.hideCard(),this.hud.showMenu(Rc,Ms,this._progress()),this.cam.go("stall",1.2),this.stove.flame=.35}_progress(){return Jv(Rc,ax(),this.params.get("unlock")==="all")}_teardown(){this.riceDome&&(this.scene.remove(this.riceDome),this.riceDome=null);for(const t of["foodView","bowls","board"])this[t]&&(this.scene.remove(this[t].group),this[t]=null);this.sim=Oc(1400),this.stove=Dc(),this.egg.visible=!1,this.spatula.group.visible=!1,this.ladle.group.visible=!1}start(t){const e=this._progress(),n=e.countries.flatMap(h=>h.dishes.map(u=>({...u,country:h}))).find(h=>h.id===t);if(!n||!n.open||!n.country.open){this.hud.toast("Locked");return}this._teardown();const s=Ms[t];this.dish=s,this.mode="play",this.progressBefore=e;const r=s.steps.find(h=>h.verb==="garnish")?.items||[];this.kinds=[...s.bowls,...r.filter(h=>!s.bowls.includes(h))],this.ings=this.kinds.map(h=>({...nn[h],id:h}));const o=this.ings.map(h=>zo[h.id]??Math.ceil((h.count||10)*1.6)),a=s.steps.find(h=>h.liquid&&h.liquid!=="oil")?.liquid;this.foodView=new xv(this.ings,o,a?Rn[a].colour:null),this.scene.add(this.foodView.group),this.bowls=new bv(s.bowls,nn,this.M.bowl),this.bowls.layout(this.camera.aspect<1),this.scene.add(this.bowls.group);const l=s.steps.find(h=>h.verb==="chop");l&&this.bowls.fill(l.item,null),this.board=new Mv(nn[l?.item||"chives"]),this.scene.add(this.board.group);const c=this.stall.getObjectByName("bananaLeaf");c&&(c.visible=!!s.plate?.leaf),s.plate?.rice&&this._riceDome(),this.report={pieces:{},chop:0,pours:{},tosses:0,hei:0,garnish:{}},this.snapD=new Float32Array(this.sim.cap).fill(NaN),this.garnishSel=r[0],this.stepIndex=-1,this.hud.hideMenu(),this.hud.hideResult(),this.next()}get step(){return this.dish?.steps[this.stepIndex]}_riceDome(){const t=nn.rice,e=70,n=new kr(Vr(t),di(t),e),s=new Jt,r=new yn,o=new Qe,a=new R,l=new R(1,1,1),c=yt.x+Pn.dx,h=yt.z+Pn.dz,u=new Tt(16250092);for(let g=0;g<e;g++){const _=(g+.5)/e,p=Math.sqrt(_)*Pn.base,m=g*2.39996,y=Pn.h*(1-(p/Pn.base)**2);a.set(c+Math.cos(m)*p,yt.wellY+.004+y,h+Math.sin(m)*p),o.set(g*1.3,g*.7,g*2.1),r.setFromEuler(o),s.compose(a,r,l),n.setMatrixAt(g,s),n.setColorAt(g,u)}const f=new Dt(new xe(1,24,12,0,Math.PI*2,0,Math.PI/2),di(t));f.material.vertexColors=!1,f.material.color.set(15723488),f.scale.set(Pn.base*.94,Pn.h*.95,Pn.base*.94),f.position.set(c,yt.wellY+.002,h);const d=new me;d.add(n,f),n.castShadow=n.receiveShadow=f.receiveShadow=!0,this.riceDome=d,this.scene.add(d)}next(){this.step?.verb==="cook"&&this._snapshot(),this._exitStep(),this.stepIndex++;const t=this.step;if(!t)return this.serve();this.stepT=0,this.st={},this.hud.setStep(this.dish.name,t.say,t.hint,this.stepIndex,this.dish.steps.length),this.hud.clearPlay(),this["_enter_"+t.verb].call(this,t)}_exitStep(){this.ladle.group.visible=!1,this.st&&(this.st.pouring=!1),this.spatula.group.visible=this.stepIndex>=1&&this.step?.verb!=="plate"&&this.step?.verb!=="garnish",this.sim.spatula.on=!1,this.bowls?.highlight([])}_enter_chop(t){this.cam.go("board");const e=this.board;this.st.chop=qv(t.cuts,-rn/2,rn/2),e.setGuides(this.st.chop.guides,0),this.st.last=null}_chopMove(t){const e=this.board,n=e.local(t);if(!n)return;e.follow(n);const s=this.st.last;if(this.st.last=n,!(!s||!this.pointer.down)&&(s.z<-.012&&n.z>=-.012||s.z>.012&&n.z<=.012||s.z<0&&n.z>.012||s.z>0&&n.z<-.012)){const r=Math.abs(s.z)/(Math.abs(s.z)+Math.abs(n.z)||1),o=s.x+(n.x-s.x)*r;if(o<-rn/2-.02||o>this.st.chop.end+.03)return;const a=Bc(this.st.chop,o);if(!a)return;e.cutAt(this.st.chop.end,a.piece.len),e.setGuides(this.st.chop.guides,this.st.chop.next),this.audio.play("chop"),this.hud.toast(a.acc>.85?"Perfect!":a.acc>.5?"Good":"Uneven",a.acc<=.5),a.done&&(this.report.chop=kc(this.st.chop),this.st.doneT=.7)}}_enter_heat(t){this.cam.go("wok"),this.hud.showFlame(!0),this.spatula.group.visible=!0,this.st.liquid=t.liquid,this.st.poured=!1,this.hud.setActions([{id:"pour",label:"HOLD<br>TO POUR",cls:"pour",hold:!0,disabled:!0}]),this.hud.showPour(Rn[t.liquid].target),this.ladle.setLiquid(Rn[t.liquid].colour),this.ladle.group.visible=!0,this.st.amount=0}_enter_pour(t){this.cam.go("wok"),this.hud.showFlame(!0),this.st.liquid=t.liquid,this.st.poured=!1,this.st.amount=0,this.hud.setActions([{id:"toss",label:"TOSS",cls:"round"},{id:"pour",label:"HOLD<br>TO POUR",cls:"pour",hold:!0}]),this.hud.showPour(Rn[t.liquid].target),this.ladle.setLiquid(Rn[t.liquid].colour),this.ladle.group.visible=!0}hold(t,e){this.audio.unlock(),!(t!=="pour"||this.st.poured)&&(this.st.pouring=e,e&&this.audio.play("plop",{gain:.6}),!e&&this.st.amount>.03&&this._finishPour())}_finishPour(){const t=this.step;this.st.poured=!0,this.st.pouring=!1;const e=Rn[t.liquid],n=this.st.amount;this.report.pours[t.liquid]=n;const s=qh(n,e.target);this.hud.toast(s>.9?"Spot on!":n<e.target[0]?"A bit light":s>.5?"A bit heavy":"Way too much",s<.6),t.liquid==="oil"?this.stove.oil+=n:(this.stove.sauce+=n,this.stove.sauceLeft+=n,mv(this.stove,n),this.stove.T>120&&this.audio.play("hiss",{gain:.8})),this.hud.enable("pour",!1),this.st.doneT=t.verb==="pour"?.6:null}_enter_add(t){this.cam.go("wok"),this.hud.showFlame(!0),this.spatula.group.visible=!0,this.st.left=[...t.items],this.bowls.highlight(this.st.left),this.hud.setActions([{id:"toss",label:"TOSS",cls:"round"}])}_addItem(t){const e=nn[t],n=this.kinds.indexOf(t),s=this.sim,o=this.bowls.bowls.get(t).home.x>0?.05:-.05;let a=0;if(e.shape==="strand"){for(let c=0;c<e.strands;c++)Av(s,n,e.points,e.spacing,q.x+o+(Math.random()-.5)*.1,q.rimY+.02+c*.004,q.z+(Math.random()-.5)*.08,e.r,e.mass);a=e.strands*e.points*e.mass*.2}else{const c=(this.st.chopped&&t===this.dish.steps.find(h=>h.verb==="chop")?.item,e.count);for(let h=0;h<c;h++)bs(s,n,q.x+o+(Math.random()-.5)*.06,q.rimY+.03+Math.random()*.04,q.z+.03+(Math.random()-.5)*.06,e.r,e.mass,-o*3*Math.random(),-.3,-.2);a=c*e.mass}Uc(this.stove,a*.4),this.stove.T>140&&this.stove.oil>.1&&(this.puffs.spark.burst(q.x,q.bottomY+.03,q.z,30),this.audio.play("hiss",{gain:.5})),this.audio.play("plop")}_enter_cook(t){this.cam.go("wok"),this.hud.showFlame(!0),this.spatula.group.visible=!0;const e=t.focus;this.st.focus=e.map(s=>this.kinds.indexOf(s));const n=e.map(s=>nn[s].name.split(" ").pop().toLowerCase());this.hud.showMeter(n.length>1?n.slice(0,-1).join(", ")+" and "+n.at(-1):nn[e[0]].name,[.9,1.3]),this.hud.setActions([{id:"toss",label:"TOSS",cls:"round"},{id:"next",label:"DONE",disabled:!0}])}_snapshot(){const t=this.sim;for(let e=0;e<t.n;e++)this.st.focus.includes(t.kind[e])&&(this.snapD[e]=t.d[e])}_focusState(){const t=this.sim;let e=0,n=0,s=0,r=0;for(let o=0;o<t.n;o++){const a=t.kind[o];if(!this.st.focus.includes(a))continue;const l=this.ings[a],[c,h]=l.band;e+=.9+(t.d[o]-c)/(h-c)*.4,s+=t.c[o],r=Math.max(r,t.c[o]),n++}return n?{v:e/n,c:s/n,maxC:r}:{v:0,c:0,maxC:0}}_enter_crack(t){this.cam.go("wok"),this.hud.showFlame(!0),this.spatula.group.visible=!0,this.bowls.fill(t.item,null),this.egg.visible=!0,this.egg.position.set(q.x+.03,q.rimY+.09,q.z+.03),this.egg.rotation.set(0,0,1.3),this.st.taps=0,this.st.bump=0,this.hud.setActions([{id:"toss",label:"TOSS",cls:"round"}])}_crackTap(){if(this.st.taps>=3)return;if(this.st.taps++,this.st.bump=1,this.audio.play("crack",{gain:.6+this.st.taps*.2}),this.st.taps<3){this.hud.toast(this.st.taps===1?"Tap...":"Once more!");return}this.egg.visible=!1;const t=this.kinds.indexOf(this.step.item),e=nn[this.step.item];for(let n=0;n<e.count;n++){const s=Math.random()*Math.PI*2,r=Math.random()*.03;bs(this.sim,t,q.x+.02+Math.cos(s)*r,q.rimY+.02+Math.random()*.02,q.z+.02+Math.sin(s)*r,e.r,e.mass,0,-.4,0)}Uc(this.stove,e.count*e.mass*.3),this.stove.T>140&&this.audio.play("hiss",{gain:.4}),this.st.doneT=.5}_enter_plate(){this.cam.go("wok"),this.hud.showFlame(!0),this.hud.setActions([{id:"plate",label:"TIP ONTO THE PLATE"}])}_plate(){if(this.st.plated)return;this.st.plated=!0,this.stove.flame=0,this.hud.showFlame(!1),this.hud.setActions([]),this.spatula.group.visible=!1,this.sim.spatula.on=!1;const t=this.dish.plate?.rice?Pn:null;Rv(this.sim,t?{x:yt.x+t.dx,z:yt.z+t.dz,base:t.base,h:t.h}:null,!!this.dish.plate?.mould),this.wok.toss(),this.audio.play("whoosh"),this.audio.play("clank",{gain:.6}),this.cam.go("plate",3),this.st.doneT=1.3,this.plateSteam=30}_enter_garnish(t){this.cam.go("plate"),this.st.items=t.items,this._garnishHud(),this.hud.setActions([{id:"serve",label:"SERVE"}]),this.st.spawnT=0}_garnishHud(){if(this.step?.verb!=="garnish")return;const t=this.step.items.map(e=>({id:e,name:nn[e].name,css:ux[e]||"#ccc"}));this.hud.showGarnish(t,this.report.garnish,this.garnishSel)}_garnishAt(t,e){const n=this.garnishSel;if(!n||!t)return;const s=t.x-yt.x,r=t.z-yt.z,o=Math.hypot(s,r);if(o>yt.r*1.15)return;const a=o>yt.r-.02?(yt.r-.02)/o:1,l=yt.x+s*a,c=yt.z+r*a,h=nn[n],u=this.kinds.indexOf(n),f=this.report.garnish[n]||0;if(f>=zo[n]){e&&this.hud.toast("That will do!");return}let d=0;const g=yt.wellY+(this.dish.plate?.rice?.12:.09);if(Mr[n]){if(!e&&this.st.spawnT>0)return;this.st.spawnT=.035,d=Mr[n];for(let _=0;_<d;_++)bs(this.sim,u,l+(Math.random()-.5)*.02,g+Math.random()*.02,c+(Math.random()-.5)*.02,h.r,h.mass);this.audio.play("sprinkle",{gain:.8})}else if(e){d=Math.min(Vc[n]||1,zo[n]-f);for(let _=0;_<d;_++){const p=bs(this.sim,u,l+(Math.random()-.5)*.015,g-.01+_*.012,c+(Math.random()-.5)*.015,h.r,h.mass);if(p>=0&&(h.shape==="friedEgg"||h.shape==="disc")){const m=Math.random()*Math.PI;this.sim.q.set([0,Math.sin(m/2),0,Math.cos(m/2)],p*4)}}this.audio.play("plop",{gain:.5})}d&&(this.report.garnish[n]=f+d,this._garnishHud())}serve(){this.mode="served",this.hud.clearPlay(),this.hud.hideCard(),this.spatula.group.visible=!1,this.ladle.group.visible=!1;const t={};for(let h=0;h<this.sim.n;h++){const u=this.ings[this.sim.kind[h]];if(u.garnish)continue;const f=t[u.id]||(t[u.id]={d:[],c:[]});this.sim.strand[h]>=0&&h>0&&this.sim.strand[h-1]===this.sim.strand[h]||(f.d.push(Number.isNaN(this.snapD[h])?this.sim.d[h]:this.snapD[h]),f.c.push(this.sim.c[h]))}this.report.pieces=t,this.report.tosses=this.stove.tosses,this.report.hei=this.stove.hei;const e=Vv(this.dish,nn,Rn,this.report);this.grade=e;const n=ll()[this.dish.id],s=ox(this.dish.id,e.total,e.stars),r=this._progress(),o=jv(this.progressBefore,r),a=r.countries.find(h=>h.id===this.dish.cuisine),l=a?.dishes[a.dishes.findIndex(h=>h.id===this.dish.id)+1],c={dishes:o.dishes.map(h=>Ms[h].name),stamp:o.stamp,need:l&&!l.open?Ms[l.id].name:null,next:l&&l.open?l.id:null};this.cam.go("beauty",1.4),this.stage.lights.plateKey.intensity=1.8,this.plateSteam=40,this.serveT=1.6,this._pendingResult=()=>{this.hud.showResult(this.dish,e,n,s,c),this.audio.chime(e.stars)}}action(t){if(this.audio.unlock(),this.audio.play("tick"),t==="toss")return this.doToss();if(t==="next")return this.next();if(t==="plate")return this._plate();if(t==="serve")return this.next();if(t==="again")return this.stage.lights.plateKey.intensity=0,this.start(this.dish.id);if(t==="menu")return this.stage.lights.plateKey.intensity=0,this.menu();if(t.startsWith("go:"))return this.stage.lights.plateKey.intensity=0,this.start(t.slice(3))}doToss(){if(this.sim.container.type!=="bowl"||this.time-(this.lastToss||-9)<.45)return;this.lastToss=this.time;const t=Cv(this.sim,1);this.wok.toss(),this.audio.play("clank",{gain:.5}),this.audio.play("whoosh",{gain:.7}),t&&(this.stove.tosses++,this.stove.T>200&&this.stove.flame>.55?(this.stove.hei++,this.stove.flare=1,this.audio.play("flare",{gain:.8}),(this.stove.hei<=3||this.stove.hei%3===0)&&this.hud.toast("Wok hei!")):this.stove.T>150&&(this.stove.flare=.35))}_bindPointer(t){this.pointer={down:!1,x:0,y:0,t:0,hist:[]};const e=s=>{const r=t.getBoundingClientRect();return this.ndc.set((s.clientX-r.left)/r.width*2-1,-((s.clientY-r.top)/r.height)*2+1),{x:s.clientX/r.width,y:s.clientY/r.height}};t.addEventListener("pointerdown",s=>{this.audio.unlock(),t.setPointerCapture?.(s.pointerId);const r=e(s);this.pointer.down=!0,this.pointer.hist=[{...r,t:performance.now()}],this._pointer("down")}),t.addEventListener("pointermove",s=>{const r=e(s);if(this.pointer.down){const o=this.pointer.hist;o.push({...r,t:performance.now()}),o.length>6&&o.shift(),this._flick()}this._pointer("move")});const n=()=>{this.pointer.down=!1,this._pointer("up")};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",n)}_flick(){const t=this.pointer.hist;if(t.length<3||!this._wokStep())return;const e=t[0],n=t[t.length-1],s=(n.t-e.t)/1e3;if(s<=0||s>.25)return;const r=(n.y-e.y)/s,o=(n.x-e.x)/s;r<-2.4&&Math.abs(r)>Math.abs(o)*1.8&&(this.doToss(),this.pointer.hist=[])}_wokStep(){const t=this.step?.verb;return this.mode==="play"&&(t==="cook"||t==="add"||t==="crack"||t==="pour"||t==="heat")}_planeHit(t){this.raycaster.setFromCamera(this.ndc,this.camera);const e=this.raycaster.ray;if(Math.abs(e.direction.y)<1e-4)return null;const n=(t-e.origin.y)/e.direction.y;return n<=0?null:e.origin.clone().addScaledVector(e.direction,n)}_pointer(t){if(this.mode!=="play")return;const e=this.step?.verb;if(this.raycaster.setFromCamera(this.ndc,this.camera),e==="chop"){t==="down"&&(this.st.last=null),this._chopMove(this._planeHit(Ce.topY+.006));return}if(e==="add"&&t==="down"){const n=this.bowls.pick(this.raycaster);if(n&&this.st.left.includes(n)){this.st.left=this.st.left.filter(s=>s!==n),this.bowls.highlight(this.st.left),this.bowls.tip(n,new R(q.x,q.rimY,q.z),()=>{this._addItem(n),this.st.left.length||(this.st.doneT=.8)});return}}if(e==="crack"&&t==="down"){const n=this.raycaster.ray;if(zc(n.origin.x,n.origin.y,n.origin.z,n.direction.x,n.direction.y,n.direction.z)||this.st.taps>0){this._crackTap();return}}if(e==="plate"&&t==="down"){const n=this._planeHit(yt.wellY);if(n&&Math.hypot(n.x-yt.x,n.z-yt.z)<yt.r*1.4){this._plate();return}}if(e==="garnish"){t==="down"?this._garnishAt(this._planeHit(yt.wellY+.035),!0):t==="move"&&this.pointer.down&&this._garnishAt(this._planeHit(yt.wellY+.035),!1);return}if(this._wokStep()){if(t==="up"||!this.pointer.down){this.st.stir=null,this.sim.spatula.on=!1;return}const n=this.raycaster.ray,s=zc(n.origin.x,n.origin.y,n.origin.z,n.direction.x,n.direction.y,n.direction.z);this.st.stir=s;const r=this.sim.spatula;s?(r.on||(r.px=s.x,r.py=s.y,r.pz=s.z),r.x=s.x,r.y=s.y+.004,r.z=s.z,r.on=!0):r.on=!1}}onResize(){this.bowls?.layout(this.camera.aspect<1)}update(t){this.time+=t;const e=this.stove,n=this.sim;pv(e,t),Fv(n,t),gv(n,e,t,this.ings||[]),this.mode==="play"&&this._updateStep(t),this.mode==="served"&&this.serveT>0&&(this.serveT-=t,this.serveT<=0&&this._pendingResult&&(this._pendingResult(),this._pendingResult=null)),this.wok.update(t,{flame:e.flame,flare:e.flare,oil:e.oil,sauce:n.container.type==="bowl"?e.sauceLeft:0,T:e.T}),this.foodView&&this.foodView.update(n),this.bowls?.update(t),this.board?.update(t),this.spatula.update(t,this.sim.spatula.on?this.st?.stir:null,this.pointer.down),this.mode==="play"&&this._wokStep()&&(this.spatula.group.visible=!!this.sim.spatula.on),this.ladle.update(t,!!this.st?.pouring,1-(this.st?.amount||0)),this.egg.visible&&(this.st.bump=Math.max(0,(this.st.bump||0)-t*6),this.egg.position.y=q.rimY+.09-Math.sin(this.st.bump*Math.PI)*.05),this._steam(t),this.puffs.update(t),this.cam.update(t),this.hud.setFlame?.(e.flame,e.T),this.audio.update(t,_v(n,e),e.flame)}_updateStep(t){this.stepT+=t;const e=this.step,n=this.st;if(n.doneT!=null&&(n.doneT-=t,n.doneT<=0)){n.doneT=null,e.verb==="chop"&&(this.bowls.fill(e.item,nn[e.item],14),this.board.sweep(),this.st.chopped=!0),this.next();return}if((e.verb==="heat"||e.verb==="pour")&&!n.poured&&(n.pouring&&(n.amount=Math.min(1.1,n.amount+Rn[e.liquid].rate*t),n.amount>=1.1&&this._finishPour(),e.verb==="pour"&&this.stove.T>120&&Math.random()<t*8&&this.puffs.emit(q.x,q.bottomY+.03,q.z,{size:.05,alpha:.3})),this.hud.setPour(n.amount)),e.verb==="heat"&&(this.hud.enable("pour",this.stove.flame>.3&&!n.poured),n.poured?this.stove.T<165?this.hud.setHint("Wait for the oil to shimmer. Keep the flame up"):n.doneT==null&&(this.hud.toast("Smoking hot!"),n.doneT=.5):this.hud.setHint(this.stove.flame>.3?"Now hold to pour the oil. Let go in the green":e.hint)),e.verb==="cook"){const s=this._focusState(),r=s.maxC>(e.char?.6:.35)?"Burning!":s.v<.45?"Raw":s.v<.9?"Cooking":s.v<=1.3?"Perfect":s.v<1.6?"Overdone":"Way over";let o="";e.char?o=s.c<.08?"Leave them still to char":s.c<.4?"Nice char. Now toss":"Too far! Toss now":s.maxC>.12?o="It is catching! Keep it moving":this.stove.T<150&&s.v<.9&&(o="The wok is too cool. More flame"),this.hud.setMeter(s.v,r,o),this.hud.enable("next",this.stepT>(e.minTime||0))}}_steam(t){const e=this.stove,n=this.sim;if(this._steamT=(this._steamT||0)-t,!(this._steamT>0)){if(this._steamT=.06,n.container.type==="bowl"&&n.n>0&&e.T>110){const s=Math.min(1,(e.T-110)/120);if(Math.random()<s*.5){const o=Math.floor(Math.random()*n.n);this.puffs.emit(n.x[o*3],n.x[o*3+1]+.01,n.x[o*3+2],{size:.035,alpha:.08+s*.1,rise:.16})}let r=0;for(let o=0;o<n.n;o+=3)n.c[o]>.1&&n.contact[o]&&r++;if(r>2&&Math.random()<.6){const o=Math.floor(Math.random()*n.n);this.puffs.emit(n.x[o*3],n.x[o*3+1]+.01,n.x[o*3+2],{colour:4867136,size:.05,alpha:.35,rise:.2})}}this.plateSteam>0&&(this.plateSteam-=.06,Math.random()<.5&&this.puffs.emit(yt.x+(Math.random()-.5)*.08,yt.wellY+.04,yt.z+(Math.random()-.5)*.08,{size:.03,alpha:Math.min(.16,this.plateSteam/90),rise:.09,life:2}))}}autoStir(t,e=1.2){const n=this.sim;let s=0,r=0;for(;s<t;){const o=s*4.2,a=q.x+Math.sin(o)*.1,l=q.z+Math.sin(o*2)*.06,c=q.cy-Math.sqrt(q.R*q.R-(a-q.x)**2-(l-q.z)**2);n.spatula.on||(n.spatula.px=a,n.spatula.py=c,n.spatula.pz=l),n.spatula.on=!0,this.st.stir={x:a,y:c,z:l},n.spatula.x=a,n.spatula.y=c+.004,n.spatula.z=l,this.pointer.down=!0,e&&s-r>e&&(r=s,this.lastToss=-9,this.doToss()),this.update(1/60),s+=1/60}n.spatula.on=!1,this.pointer.down=!1}autoCook(t=99,{ruin:e=!1}={}){this.mode!=="play"&&this.start(this.dish?.id||"padthai");let n=0;for(;this.mode==="play"&&this.stepIndex<t&&n++<60;){const s=this.step;if(s.verb==="chop"){for(const r of[...this.st.chop.guides]){const o=r+(Math.random()-.5)*.004,a=Bc(this.st.chop,o);this.board.cutAt(this.st.chop.end,a.piece.len)}this.board.setGuides(this.st.chop.guides,this.st.chop.next),this.report.chop=kc(this.st.chop),this.st.doneT=.01,this.update(1/60),this.update(1/60)}else if(s.verb==="heat"||s.verb==="pour"){this.stove.flame=.9;const r=Rn[s.liquid];this.hold("pour",!0);const o=(r.target[0]+r.target[1])/2;for(;this.st.amount<o;)this.update(1/60);this.hold("pour",!1);for(let a=0;a<400&&this.step===s;a++)this.update(1/60)}else if(s.verb==="add"){for(const r of[...this.st.left])this.st.left=this.st.left.filter(o=>o!==r),this.bowls.tip(r,new R(q.x,q.rimY,q.z),()=>{this._addItem(r),this.st.left.length||(this.st.doneT=.8)});for(let r=0;r<200&&this.step===s;r++)this.update(1/60)}else if(s.verb==="cook"){let r=0;for(;r<30;){if(s.char){this.sim.spatula.on=!1;for(let a=0;a<100;a++)this.update(1/60);r+=1.6}this.autoStir(.5),r+=.5;const o=this._focusState();if(!e&&o.v>=1&&r>=(s.minTime||0)||e&&r>20)break}this.next()}else if(s.verb==="crack"){this._crackTap(),this._crackTap(),this._crackTap();for(let r=0;r<60&&this.step===s;r++)this.update(1/60)}else if(s.verb==="plate"){this._plate();for(let r=0;r<120&&this.step===s;r++)this.update(1/60)}else if(s.verb==="garnish"){const r=(o,a,l)=>{this.garnishSel=o;for(let c=0;c<a;c++){const h=Math.random()*Math.PI*2,u=Math.random()*.06;this.st.spawnT=0,this._garnishAt(new R(yt.x+Math.cos(h)*u,yt.wellY,yt.z+Math.sin(h)*u),l),this.update(.016666666666666666)}};for(const[o,[a,l]]of Object.entries(this.dish.garnish||{})){const c=Math.round((a+l)/2),h=Mr[o]||Vc[o]||1;c>0&&r(o,Math.max(1,Math.round(c/h)),!Mr[o])}for(let o=0;o<60;o++)this.update(1/60);t>this.stepIndex&&this.next()}}}}const $h=document.getElementById("view"),Kh=new URLSearchParams(location.search),px=Kh.has("lo")||(navigator.hardwareConcurrency||8)<=4,In=m_($h,{lowPower:px}),Wi=new dx(In,document.getElementById("ui"),Kh);function Xr(){const i=window.innerWidth,t=window.innerHeight;i>0&&t>0&&In.resize(i,t),Wi.onResize()}window.addEventListener("resize",Xr);window.addEventListener("orientationchange",()=>setTimeout(Xr,120));Xr();let Wc=performance.now();function Zh(i){const t=Math.min(.05,(i-Wc)/1e3);Wc=i,Wi.update(t),In.render(),requestAnimationFrame(Zh)}requestAnimationFrame(Zh);const mx="http://localhost:5699/shot";window.shot=async function(t="shot",e={}){const n=e.w??390,s=e.h??844,r=In.renderer.getPixelRatio();In.renderer.setPixelRatio(e.ratio??2),In.resize(n,s),Wi.onResize(n,s),e.view&&Wi.cam.snapTo(e.view);const o=Math.max(1,e.settle??30);for(let l=0;l<o;l++)Wi.update(1/60);In.render();const a=$h.toDataURL("image/png");In.renderer.setPixelRatio(r),window.innerWidth>0&&Xr();try{return await(await fetch(mx,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:t,dataURL:a})})).json()}catch(l){return{ok:!1,error:String(l)}}};window.game=Wi;window.stage=In;
