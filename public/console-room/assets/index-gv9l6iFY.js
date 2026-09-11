(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _0="169",zp=0,uh=1,Hp=2,Gf=1,Vf=2,vi=3,Yn=0,hn=1,ei=2,ji=0,Ks=1,fh=2,dh=3,hl=4,Gp=5,hs=100,Vp=101,Wp=102,qp=103,Xp=104,Yp=200,$p=201,jp=202,Kp=203,ul=204,fl=205,Zp=206,Jp=207,Qp=208,tm=209,em=210,nm=211,im=212,sm=213,rm=214,dl=0,pl=1,ml=2,nr=3,_l=4,gl=5,xl=6,vl=7,Wf=0,om=1,am=2,Ki=0,cm=1,lm=2,hm=3,qf=4,um=5,fm=6,dm=7,Xf=300,ir=301,sr=302,Ml=303,yl=304,Aa=306,ms=1e3,Yi=1001,Sl=1002,_n=1003,pm=1004,lo=1005,Ue=1006,Ga=1007,Xn=1008,bi=1009,Yf=1010,$f=1011,Wr=1012,g0=1013,_s=1014,ni=1015,dr=1016,x0=1017,v0=1018,rr=1020,jf=35902,Kf=1021,Zf=1022,Qe=1023,Jf=1024,Qf=1025,Zs=1026,or=1027,M0=1028,y0=1029,td=1030,S0=1031,E0=1033,jo=33776,Ko=33777,Zo=33778,Jo=33779,El=35840,wl=35841,Al=35842,bl=35843,Tl=36196,Rl=37492,Ll=37496,Cl=37808,Il=37809,Pl=37810,Dl=37811,Nl=37812,Ol=37813,Ul=37814,Fl=37815,kl=37816,Bl=37817,zl=37818,Hl=37819,Gl=37820,Vl=37821,Qo=36492,Wl=36494,ql=36495,ed=36283,Xl=36284,Yl=36285,$l=36286,mm=3200,_m=3201,nd=0,gm=1,qi="",Je="srgb",Li="srgb-linear",w0="display-p3",ba="display-p3-linear",la="linear",_e="srgb",ha="rec709",ua="p3",ws=7680,ph=519,xm=512,vm=513,Mm=514,id=515,ym=516,Sm=517,Em=518,wm=519,mh=35044,qr=35048,_h="300 es",Si=2e3,fa=2001;class pr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Va=Math.PI/180,jl=180/Math.PI;function Kr(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]).toLowerCase()}function an(n,t,e){return Math.max(t,Math.min(e,n))}function Am(n,t){return(n%t+t)%t}function Wa(n,t,e){return(1-e)*n+e*t}function vr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(an(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,i,s,r,o,a,c,l){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],_=i[8],x=s[0],m=s[3],p=s[6],v=s[1],M=s[4],S=s[7],R=s[2],A=s[5],E=s[8];return r[0]=o*x+a*v+c*R,r[3]=o*m+a*M+c*A,r[6]=o*p+a*S+c*E,r[1]=l*x+h*v+u*R,r[4]=l*m+h*M+u*A,r[7]=l*p+h*S+u*E,r[2]=f*x+d*v+_*R,r[5]=f*m+d*M+_*A,r[8]=f*p+d*S+_*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,_=e*u+i*f+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=u*x,t[1]=(s*l-h*i)*x,t[2]=(a*i-s*o)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(i*c-l*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(qa.makeScale(t,e)),this}rotate(t){return this.premultiply(qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qa=new Yt;function sd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function da(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bm(){const n=da("canvas");return n.style.display="block",n}const gh={};function ta(n){n in gh||(gh[n]=!0,console.warn(n))}function Tm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Rm(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Lm(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const xh=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vh=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Mr={[Li]:{transfer:la,primaries:ha,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Je]:{transfer:_e,primaries:ha,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ba]:{transfer:la,primaries:ua,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(vh),fromReference:n=>n.applyMatrix3(xh)},[w0]:{transfer:_e,primaries:ua,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(vh),fromReference:n=>n.applyMatrix3(xh).convertLinearToSRGB()}},Cm=new Set([Li,ba]),ae={enabled:!0,_workingColorSpace:Li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Cm.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Mr[t].toReference,s=Mr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Mr[n].primaries},getTransfer:function(n){return n===qi?la:Mr[n].transfer},getLuminanceCoefficients:function(n,t=this._workingColorSpace){return n.fromArray(Mr[t].luminanceCoefficients)}};function Js(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Xa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let As;class Im{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{As===void 0&&(As=da("canvas")),As.width=t.width,As.height=t.height;const i=As.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=As}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=da("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Js(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Js(e[i]/255)*255):e[i]=Js(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pm=0;class rd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Kr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ya(s[o].image)):r.push(Ya(s[o]))}else r=Ya(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ya(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Im.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dm=0;class tn extends pr{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,i=Yi,s=Yi,r=Ue,o=Xn,a=Qe,c=bi,l=tn.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=Kr(),this.name="",this.source=new rd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ms:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case Sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ms:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case Sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Xf;tn.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,i=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],_=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,S=(d+1)/2,R=(p+1)/2,A=(h+f)/4,E=(u+x)/4,P=(_+m)/4;return M>S&&M>R?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=A/i,r=E/i):S>R?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=A/s,r=P/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=E/r,s=P/r),this.set(i,s,r,e),this}let v=Math.sqrt((m-_)*(m-_)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nm extends pr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new rd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends Nm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class od extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Om extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const f=r[o+0],d=r[o+1],_=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=_,t[e+3]=x;return}if(u!==x||c!==f||l!==d||h!==_){let m=1-a;const p=c*f+l*d+h*_+u*x,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const R=Math.sqrt(M),A=Math.atan2(R,p*v);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const S=a*v;if(c=c*m+f*S,l=l*m+d*S,h=h*m+_*S,u=u*m+x*S,m===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return t[e]=a*_+h*u+c*d-l*f,t[e+1]=c*_+h*f+l*u-a*d,t[e+2]=l*_+h*d+a*f-c*u,t[e+3]=h*_-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),f=c(i/2),d=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u+f*d*_;break;case"YZX":this._x=f*h*u+l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u-f*d*_;break;case"XZY":this._x=f*h*u-l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=i+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(an(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,i=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),u=2*(r*i-o*e);return this.x=e+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $a.copy(this).projectOnVector(t),this.sub($a)}reflect(t){return this.sub($a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(an(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $a=new z,Mh=new mr;class Kn{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ho.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ho.copy(i.boundingBox)),ho.applyMatrix4(t.matrixWorld),this.union(ho)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yr),uo.subVectors(this.max,yr),bs.subVectors(t.a,yr),Ts.subVectors(t.b,yr),Rs.subVectors(t.c,yr),Pi.subVectors(Ts,bs),Di.subVectors(Rs,Ts),es.subVectors(bs,Rs);let e=[0,-Pi.z,Pi.y,0,-Di.z,Di.y,0,-es.z,es.y,Pi.z,0,-Pi.x,Di.z,0,-Di.x,es.z,0,-es.x,-Pi.y,Pi.x,0,-Di.y,Di.x,0,-es.y,es.x,0];return!ja(e,bs,Ts,Rs,uo)||(e=[1,0,0,0,1,0,0,0,1],!ja(e,bs,Ts,Rs,uo))?!1:(fo.crossVectors(Pi,Di),e=[fo.x,fo.y,fo.z],ja(e,bs,Ts,Rs,uo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fi=[new z,new z,new z,new z,new z,new z,new z,new z],Fn=new z,ho=new Kn,bs=new z,Ts=new z,Rs=new z,Pi=new z,Di=new z,es=new z,yr=new z,uo=new z,fo=new z,ns=new z;function ja(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ns.fromArray(n,r);const a=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),c=t.dot(ns),l=e.dot(ns),h=i.dot(ns);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Um=new Kn,Sr=new z,Ka=new z;class Zr{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Um.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);const e=Sr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Sr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(Ka)),this.expandByPoint(Sr.copy(t.center).sub(Ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new z,Za=new z,po=new z,Ni=new z,Ja=new z,mo=new z,Qa=new z;class Fm{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=di.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(di.copy(this.origin).addScaledVector(this.direction,e),di.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Za.copy(t).add(e).multiplyScalar(.5),po.copy(e).sub(t).normalize(),Ni.copy(this.origin).sub(Za);const r=t.distanceTo(e)*.5,o=-this.direction.dot(po),a=Ni.dot(this.direction),c=-Ni.dot(po),l=Ni.lengthSq(),h=Math.abs(1-o*o);let u,f,d,_;if(h>0)if(u=o*c-a,f=o*a-c,_=r*h,u>=0)if(f>=-_)if(f<=_){const x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Za).addScaledVector(po,f),d}intersectSphere(t,e){di.subVectors(t.center,this.origin);const i=di.dot(this.direction),s=di.dot(di)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,e,i,s,r){Ja.subVectors(e,t),mo.subVectors(i,t),Qa.crossVectors(Ja,mo);let o=this.direction.dot(Qa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,t);const c=a*this.direction.dot(mo.crossVectors(Ni,mo));if(c<0)return null;const l=a*this.direction.dot(Ja.cross(Ni));if(l<0||c+l>o)return null;const h=-a*Ni.dot(Qa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(t,e,i,s,r,o,a,c,l,h,u,f,d,_,x,m){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,u,f,d,_,x,m)}set(t,e,i,s,r,o,a,c,l,h,u,f,d,_,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ls.setFromMatrixColumn(t,0).length(),r=1/Ls.setFromMatrixColumn(t,1).length(),o=1/Ls.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,_=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+_*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=_+d*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,_=l*h,x=l*u;e[0]=f+x*a,e[4]=_*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-_,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,_=l*h,x=l*u;e[0]=f-x*a,e[4]=-o*u,e[8]=_+d*a,e[1]=d+_*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,_=a*h,x=a*u;e[0]=c*h,e[4]=_*l-d,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=d*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,_=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=_*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+_,e[10]=f-x*u}else if(t.order==="XZY"){const f=o*c,d=o*l,_=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-_,e[2]=_*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(km,t,Bm)}lookAt(t,e,i){const s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Oi.crossVectors(i,yn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Oi.crossVectors(i,yn)),Oi.normalize(),_o.crossVectors(yn,Oi),s[0]=Oi.x,s[4]=_o.x,s[8]=yn.x,s[1]=Oi.y,s[5]=_o.y,s[9]=yn.y,s[2]=Oi.z,s[6]=_o.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],_=i[2],x=i[6],m=i[10],p=i[14],v=i[3],M=i[7],S=i[11],R=i[15],A=s[0],E=s[4],P=s[8],C=s[12],g=s[1],y=s[5],b=s[9],L=s[13],N=s[2],k=s[6],I=s[10],D=s[14],U=s[3],Y=s[7],K=s[11],tt=s[15];return r[0]=o*A+a*g+c*N+l*U,r[4]=o*E+a*y+c*k+l*Y,r[8]=o*P+a*b+c*I+l*K,r[12]=o*C+a*L+c*D+l*tt,r[1]=h*A+u*g+f*N+d*U,r[5]=h*E+u*y+f*k+d*Y,r[9]=h*P+u*b+f*I+d*K,r[13]=h*C+u*L+f*D+d*tt,r[2]=_*A+x*g+m*N+p*U,r[6]=_*E+x*y+m*k+p*Y,r[10]=_*P+x*b+m*I+p*K,r[14]=_*C+x*L+m*D+p*tt,r[3]=v*A+M*g+S*N+R*U,r[7]=v*E+M*y+S*k+R*Y,r[11]=v*P+M*b+S*I+R*K,r[15]=v*C+M*L+S*D+R*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],_=t[3],x=t[7],m=t[11],p=t[15];return _*(+r*c*u-s*l*u-r*a*f+i*l*f+s*a*d-i*c*d)+x*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+i*o*d+r*a*h-i*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-i*o*f+i*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],_=t[12],x=t[13],m=t[14],p=t[15],v=u*m*l-x*f*l+x*c*d-a*m*d-u*c*p+a*f*p,M=_*f*l-h*m*l-_*c*d+o*m*d+h*c*p-o*f*p,S=h*x*l-_*u*l+_*a*d-o*x*d-h*a*p+o*u*p,R=_*u*c-h*x*c-_*a*f+o*x*f+h*a*m-o*u*m,A=e*v+i*M+s*S+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return t[0]=v*E,t[1]=(x*f*r-u*m*r-x*s*d+i*m*d+u*s*p-i*f*p)*E,t[2]=(a*m*r-x*c*r+x*s*l-i*m*l-a*s*p+i*c*p)*E,t[3]=(u*c*r-a*f*r-u*s*l+i*f*l+a*s*d-i*c*d)*E,t[4]=M*E,t[5]=(h*m*r-_*f*r+_*s*d-e*m*d-h*s*p+e*f*p)*E,t[6]=(_*c*r-o*m*r-_*s*l+e*m*l+o*s*p-e*c*p)*E,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*E,t[8]=S*E,t[9]=(_*u*r-h*x*r-_*i*d+e*x*d+h*i*p-e*u*p)*E,t[10]=(o*x*r-_*a*r+_*i*l-e*x*l-o*i*p+e*a*p)*E,t[11]=(h*a*r-o*u*r-h*i*l+e*u*l+o*i*d-e*a*d)*E,t[12]=R*E,t[13]=(h*x*s-_*u*s+_*i*f-e*x*f-h*i*m+e*u*m)*E,t[14]=(_*a*s-o*x*s-_*i*c+e*x*c+o*i*m-e*a*m)*E,t[15]=(o*u*s-h*a*s+h*i*c-e*u*c-o*i*f+e*a*f)*E,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,_=r*u,x=o*h,m=o*u,p=a*u,v=c*l,M=c*h,S=c*u,R=i.x,A=i.y,E=i.z;return s[0]=(1-(x+p))*R,s[1]=(d+S)*R,s[2]=(_-M)*R,s[3]=0,s[4]=(d-S)*A,s[5]=(1-(f+p))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(_+M)*E,s[9]=(m-v)*E,s[10]=(1-(f+x))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ls.set(s[0],s[1],s[2]).length();const o=Ls.set(s[4],s[5],s[6]).length(),a=Ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],kn.copy(this);const l=1/r,h=1/o,u=1/a;return kn.elements[0]*=l,kn.elements[1]*=l,kn.elements[2]*=l,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,e.setFromRotationMatrix(kn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Si){const c=this.elements,l=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s);let d,_;if(a===Si)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===fa)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Si){const c=this.elements,l=1/(e-t),h=1/(i-s),u=1/(o-r),f=(e+t)*l,d=(i+s)*h;let _,x;if(a===Si)_=(o+r)*u,x=-2*u;else if(a===fa)_=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ls=new z,kn=new Vt,km=new z(0,0,0),Bm=new z(1,1,1),Oi=new z,_o=new z,yn=new z,yh=new Vt,Sh=new mr;class $n{constructor(t=0,e=0,i=0,s=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(an(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-an(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(an(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return yh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class ad{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zm=0;const Eh=new z,Cs=new mr,pi=new Vt,go=new z,Er=new z,Hm=new z,Gm=new mr,wh=new z(1,0,0),Ah=new z(0,1,0),bh=new z(0,0,1),Th={type:"added"},Vm={type:"removed"},Is={type:"childadded",child:null},tc={type:"childremoved",child:null};class He extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new z,e=new $n,i=new mr,s=new z(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Vt},normalMatrix:{value:new Yt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ad,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(wh,t)}rotateY(t){return this.rotateOnAxis(Ah,t)}rotateZ(t){return this.rotateOnAxis(bh,t)}translateOnAxis(t,e){return Eh.copy(t).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wh,t)}translateY(t){return this.translateOnAxis(Ah,t)}translateZ(t){return this.translateOnAxis(bh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?go.copy(t):go.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Er,go,this.up):pi.lookAt(go,Er,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(pi),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Th),Is.child=t,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vm),tc.child=t,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Th),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,Hm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Gm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}He.DEFAULT_UP=new z(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new z,mi=new z,ec=new z,_i=new z,Ps=new z,Ds=new z,Rh=new z,nc=new z,ic=new z,sc=new z,rc=new ce,oc=new ce,ac=new ce;class Wn{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Bn.subVectors(t,e),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Bn.subVectors(s,e),mi.subVectors(i,e),ec.subVectors(t,e);const o=Bn.dot(Bn),a=Bn.dot(mi),c=Bn.dot(ec),l=mi.dot(mi),h=mi.dot(ec),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,_=(o*h-a*c)*f;return r.set(1-d-_,_,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,_i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,_i.x),c.addScaledVector(o,_i.y),c.addScaledVector(a,_i.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return rc.setScalar(0),oc.setScalar(0),ac.setScalar(0),rc.fromBufferAttribute(t,e),oc.fromBufferAttribute(t,i),ac.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(rc,r.x),o.addScaledVector(oc,r.y),o.addScaledVector(ac,r.z),o}static isFrontFacing(t,e,i,s){return Bn.subVectors(i,e),mi.subVectors(t,e),Bn.cross(mi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Bn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Wn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ps.subVectors(s,i),Ds.subVectors(r,i),nc.subVectors(t,i);const c=Ps.dot(nc),l=Ds.dot(nc);if(c<=0&&l<=0)return e.copy(i);ic.subVectors(t,s);const h=Ps.dot(ic),u=Ds.dot(ic);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(Ps,o);sc.subVectors(t,r);const d=Ps.dot(sc),_=Ds.dot(sc);if(_>=0&&d<=_)return e.copy(r);const x=d*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(Ds,a);const m=h*_-d*u;if(m<=0&&u-h>=0&&d-_>=0)return Rh.subVectors(r,s),a=(u-h)/(u-h+(d-_)),e.copy(s).addScaledVector(Rh,a);const p=1/(m+x+f);return o=x*p,a=f*p,e.copy(i).addScaledVector(Ps,o).addScaledVector(Ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},xo={h:0,s:0,l:0};function cc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Nt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ae.workingColorSpace){if(t=Am(t,1),e=an(e,0,1),i=an(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=cc(o,r,t+1/3),this.g=cc(o,r,t),this.b=cc(o,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Je){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const i=cd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}copyLinearToSRGB(t){return this.r=Xa(t.r),this.g=Xa(t.g),this.b=Xa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return ae.fromWorkingColorSpace(Ke.copy(this),t),Math.round(an(Ke.r*255,0,255))*65536+Math.round(an(Ke.g*255,0,255))*256+Math.round(an(Ke.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(Ke.copy(this),e);const i=Ke.r,s=Ke.g,r=Ke.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Je){ae.fromWorkingColorSpace(Ke.copy(this),t);const e=Ke.r,i=Ke.g,s=Ke.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(xo);const i=Wa(Ui.h,xo.h,e),s=Wa(Ui.s,xo.s,e),r=Wa(Ui.l,xo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new Nt;Nt.NAMES=cd;let Wm=0;class Jr extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Kr(),this.name="",this.type="Material",this.blending=Ks,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=fl,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==Yn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ul&&(i.blendSrc=this.blendSrc),this.blendDst!==fl&&(i.blendDst=this.blendDst),this.blendEquation!==hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ph&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fs extends Jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Wf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new z,vo=new Ot;class le{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=mh,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)vo.fromBufferAttribute(this,e),vo.applyMatrix3(t),this.setXY(e,vo.x,vo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=vr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=dn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vr(e,this.array)),e}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vr(e,this.array)),e}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vr(e,this.array)),e}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),i=dn(i,this.array),s=dn(s,this.array),r=dn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mh&&(t.usage=this.usage),t}}class ld extends le{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class hd extends le{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ae extends le{constructor(t,e,i){super(new Float32Array(t),e,i)}}let qm=0;const Ln=new Vt,lc=new He,Ns=new z,Sn=new Kn,wr=new Kn,Be=new z;class en extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=Kr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sd(t)?hd:ld)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,i){return Ln.makeTranslation(t,e,i),this.applyMatrix4(Ln),this}scale(t,e,i){return Ln.makeScale(t,e,i),this.applyMatrix4(Ln),this}lookAt(t){return lc.lookAt(t),lc.updateMatrix(),this.applyMatrix4(lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(Sn.min,wr.min),Sn.expandByPoint(Be),Be.addVectors(Sn.max,wr.max),Sn.expandByPoint(Be)):(Sn.expandByPoint(wr.min),Sn.expandByPoint(wr.max))}Sn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Be.fromBufferAttribute(a,l),c&&(Ns.fromBufferAttribute(t,l),Be.add(Ns)),s=Math.max(s,i.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new le(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<i.count;P++)a[P]=new z,c[P]=new z;const l=new z,h=new z,u=new z,f=new Ot,d=new Ot,_=new Ot,x=new z,m=new z;function p(P,C,g){l.fromBufferAttribute(i,P),h.fromBufferAttribute(i,C),u.fromBufferAttribute(i,g),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,C),_.fromBufferAttribute(r,g),h.sub(l),u.sub(l),d.sub(f),_.sub(f);const y=1/(d.x*_.y-_.x*d.y);isFinite(y)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(y),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(y),a[P].add(x),a[C].add(x),a[g].add(x),c[P].add(m),c[C].add(m),c[g].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,C=v.length;P<C;++P){const g=v[P],y=g.start,b=g.count;for(let L=y,N=y+b;L<N;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const M=new z,S=new z,R=new z,A=new z;function E(P){R.fromBufferAttribute(s,P),A.copy(R);const C=a[P];M.copy(C),M.sub(R.multiplyScalar(R.dot(C))).normalize(),S.crossVectors(A,C);const y=S.dot(c[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,y)}for(let P=0,C=v.length;P<C;++P){const g=v[P],y=g.start,b=g.count;for(let L=y,N=y+b;L<N;L+=3)E(t.getX(L+0)),E(t.getX(L+1)),E(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new le(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new z,r=new z,o=new z,a=new z,c=new z,l=new z,h=new z,u=new z;if(t)for(let f=0,d=t.count;f<d;f+=3){const _=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,_=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let p=0;p<h;p++)f[_++]=l[d++]}return new le(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new en,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,i);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new Vt,is=new Fm,Mo=new Zr,Ch=new z,yo=new z,So=new z,Eo=new z,hc=new z,wo=new z,Ih=new z,Ao=new z;class Dt extends He{constructor(t=new en,e=new fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){wo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(hc.fromBufferAttribute(u,t),o?wo.addScaledVector(hc,h):wo.addScaledVector(hc.sub(e),h))}e.add(wo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(r),is.copy(t.ray).recast(t.near),!(Mo.containsPoint(is.origin)===!1&&(is.intersectSphere(Mo,Ch)===null||is.origin.distanceToSquared(Ch)>(t.far-t.near)**2))&&(Lh.copy(r).invert(),is.copy(t.ray).applyMatrix4(Lh),!(i.boundingBox!==null&&is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,is)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],p=o[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=v,R=M;S<R;S+=3){const A=a.getX(S),E=a.getX(S+1),P=a.getX(S+2);s=bo(this,p,t,i,l,h,u,A,E,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const v=a.getX(m),M=a.getX(m+1),S=a.getX(m+2);s=bo(this,o,t,i,l,h,u,v,M,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=f.length;_<x;_++){const m=f[_],p=o[m.materialIndex],v=Math.max(m.start,d.start),M=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let S=v,R=M;S<R;S+=3){const A=S,E=S+1,P=S+2;s=bo(this,p,t,i,l,h,u,A,E,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=_,p=x;m<p;m+=3){const v=m,M=m+1,S=m+2;s=bo(this,o,t,i,l,h,u,v,M,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Xm(n,t,e,i,s,r,o,a){let c;if(t.side===hn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Yn,a),c===null)return null;Ao.copy(a),Ao.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ao);return l<e.near||l>e.far?null:{distance:l,point:Ao.clone(),object:n}}function bo(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,yo),n.getVertexPosition(c,So),n.getVertexPosition(l,Eo);const h=Xm(n,t,e,i,yo,So,Eo,Ih);if(h){const u=new z;Wn.getBarycoord(Ih,yo,So,Eo,u),s&&(h.uv=Wn.getInterpolatedAttribute(s,a,c,l,u,new Ot)),r&&(h.uv1=Wn.getInterpolatedAttribute(r,a,c,l,u,new Ot)),o&&(h.normal=Wn.getInterpolatedAttribute(o,a,c,l,u,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new z,materialIndex:0};Wn.getNormal(yo,So,Eo,f.normal),h.face=f,h.barycoord=u}return h}class $e extends en{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(h,3)),this.setAttribute("uv",new Ae(u,2));function _(x,m,p,v,M,S,R,A,E,P,C){const g=S/E,y=R/P,b=S/2,L=R/2,N=A/2,k=E+1,I=P+1;let D=0,U=0;const Y=new z;for(let K=0;K<I;K++){const tt=K*y-L;for(let J=0;J<k;J++){const q=J*g-b;Y[x]=q*v,Y[m]=tt*M,Y[p]=N,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[p]=A>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(J/E),u.push(1-K/P),D+=1}}for(let K=0;K<P;K++)for(let tt=0;tt<E;tt++){const J=f+tt+k*K,q=f+tt+k*(K+1),H=f+(tt+1)+k*(K+1),F=f+(tt+1)+k*K;c.push(J,q,F),c.push(q,H,F),U+=6}a.addGroup(d,U,C),d+=U,f+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ar(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function sn(n){const t={};for(let e=0;e<n.length;e++){const i=ar(n[e]);for(const s in i)t[s]=i[s]}return t}function Ym(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ud(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const $m={clone:ar,merge:sn};var jm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends Jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jm,this.fragmentShader=Km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=Ym(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class fd extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new z,Ph=new Ot,Dh=new Ot;class cn extends fd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=jl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Va*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jl*2*Math.atan(Math.tan(Va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,Ph,Dh),e.subVectors(Dh,Ph)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Va*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Os=-90,Us=1;class Zm extends He{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(Os,Us,t,e);s.layers=this.layers,this.add(s);const r=new cn(Os,Us,t,e);r.layers=this.layers,this.add(r);const o=new cn(Os,Us,t,e);o.layers=this.layers,this.add(o);const a=new cn(Os,Us,t,e);a.layers=this.layers,this.add(a);const c=new cn(Os,Us,t,e);c.layers=this.layers,this.add(c);const l=new cn(Os,Us,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class dd extends tn{constructor(t,e,i,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ir,super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jm extends Ji{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new dd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ue}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $e(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:ji});r.uniforms.tEquirect.value=e;const o=new Dt(s,r),a=e.minFilter;return e.minFilter===Xn&&(e.minFilter=Ue),new Zm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const uc=new z,Qm=new z,t_=new Yt;class yi{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=uc.subVectors(i,e).cross(Qm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(uc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||t_.getNormalMatrix(t),s=this.coplanarPoint(uc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new Zr,To=new z;class Qr{constructor(t=new yi,e=new yi,i=new yi,s=new yi,r=new yi,o=new yi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Si){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],_=s[9],x=s[10],m=s[11],p=s[12],v=s[13],M=s[14],S=s[15];if(i[0].setComponents(c-r,f-l,m-d,S-p).normalize(),i[1].setComponents(c+r,f+l,m+d,S+p).normalize(),i[2].setComponents(c+o,f+h,m+_,S+v).normalize(),i[3].setComponents(c-o,f-h,m-_,S-v).normalize(),i[4].setComponents(c-a,f-u,m-x,S-M).normalize(),e===Si)i[5].setComponents(c+a,f+u,m+x,S+M).normalize();else if(e===fa)i[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(t){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(To.x=s.normal.x>0?t.max.x:t.min.x,To.y=s.normal.y>0?t.max.y:t.min.y,To.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(To)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pd(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function e_(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=n.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=n.SHORT;else if(l instanceof Uint32Array)d=n.UNSIGNED_INT;else if(l instanceof Int32Array)d=n.INT;else if(l instanceof Int8Array)d=n.BYTE;else if(l instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){const _=u[f],x=u[d];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){const x=u[d];n.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Ci extends en{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],_=[],x=[],m=[];for(let p=0;p<h;p++){const v=p*f-o;for(let M=0;M<l;M++){const S=M*u-r;_.push(S,-v,0),x.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const M=v+l*p,S=v+l*(p+1),R=v+1+l*(p+1),A=v+1+l*p;d.push(M,S,A),d.push(S,R,A)}this.setIndex(d),this.setAttribute("position",new Ae(_,3)),this.setAttribute("normal",new Ae(x,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ci(t.width,t.height,t.widthSegments,t.heightSegments)}}var n_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i_=`#ifdef USE_ALPHAHASH
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
#endif`,s_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c_=`#ifdef USE_AOMAP
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
#endif`,l_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h_=`#ifdef USE_BATCHING
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
#endif`,u_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,f_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,m_=`#ifdef USE_IRIDESCENCE
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
#endif`,__=`#ifdef USE_BUMPMAP
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
#endif`,g_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,x_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,E_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,w_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,A_=`#define PI 3.141592653589793
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
} // validated`,b_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,T_=`vec3 transformedNormal = objectNormal;
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
#endif`,R_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P_="gl_FragColor = linearToOutputTexel( gl_FragColor );",D_=`
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
}`,N_=`#ifdef USE_ENVMAP
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
#endif`,O_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U_=`#ifdef USE_ENVMAP
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
#endif`,F_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
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
#endif`,B_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V_=`#ifdef USE_GRADIENTMAP
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
}`,W_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,q_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y_=`uniform bool receiveShadow;
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
#endif`,$_=`#ifdef USE_ENVMAP
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
#endif`,j_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q_=`PhysicalMaterial material;
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
#endif`,tg=`struct PhysicalMaterial {
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
}`,eg=`
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
#endif`,ng=`#if defined( RE_IndirectDiffuse )
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
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,og=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ug=`#if defined( USE_POINTS_UV )
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
#endif`,fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gg=`#ifdef USE_MORPHTARGETS
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
#endif`,xg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wg=`#ifdef USE_NORMALMAP
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
#endif`,Ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ng=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zg=`float getShadowMask() {
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
}`,Hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gg=`#ifdef USE_SKINNING
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
#endif`,Vg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wg=`#ifdef USE_SKINNING
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
#endif`,qg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$g=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jg=`#ifdef USE_TRANSMISSION
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
#endif`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const e1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n1=`uniform sampler2D t2D;
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
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a1=`#include <common>
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
}`,c1=`#if DEPTH_PACKING == 3200
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
}`,l1=`#define DISTANCE
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
}`,h1=`#define DISTANCE
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
}`,u1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,f1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`uniform float scale;
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
}`,p1=`uniform vec3 diffuse;
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
}`,m1=`#include <common>
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
}`,_1=`uniform vec3 diffuse;
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
}`,g1=`#define LAMBERT
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
}`,x1=`#define LAMBERT
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
}`,v1=`#define MATCAP
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
}`,M1=`#define MATCAP
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
}`,y1=`#define NORMAL
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
}`,S1=`#define NORMAL
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
}`,E1=`#define PHONG
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
}`,w1=`#define PHONG
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
}`,A1=`#define STANDARD
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
}`,b1=`#define STANDARD
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
}`,T1=`#define TOON
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
}`,R1=`#define TOON
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
}`,L1=`uniform float size;
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
}`,C1=`uniform vec3 diffuse;
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
}`,I1=`#include <common>
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
}`,P1=`uniform vec3 color;
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
}`,D1=`uniform float rotation;
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
}`,N1=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:n_,alphahash_pars_fragment:i_,alphamap_fragment:s_,alphamap_pars_fragment:r_,alphatest_fragment:o_,alphatest_pars_fragment:a_,aomap_fragment:c_,aomap_pars_fragment:l_,batching_pars_vertex:h_,batching_vertex:u_,begin_vertex:f_,beginnormal_vertex:d_,bsdfs:p_,iridescence_fragment:m_,bumpmap_pars_fragment:__,clipping_planes_fragment:g_,clipping_planes_pars_fragment:x_,clipping_planes_pars_vertex:v_,clipping_planes_vertex:M_,color_fragment:y_,color_pars_fragment:S_,color_pars_vertex:E_,color_vertex:w_,common:A_,cube_uv_reflection_fragment:b_,defaultnormal_vertex:T_,displacementmap_pars_vertex:R_,displacementmap_vertex:L_,emissivemap_fragment:C_,emissivemap_pars_fragment:I_,colorspace_fragment:P_,colorspace_pars_fragment:D_,envmap_fragment:N_,envmap_common_pars_fragment:O_,envmap_pars_fragment:U_,envmap_pars_vertex:F_,envmap_physical_pars_fragment:$_,envmap_vertex:k_,fog_vertex:B_,fog_pars_vertex:z_,fog_fragment:H_,fog_pars_fragment:G_,gradientmap_pars_fragment:V_,lightmap_pars_fragment:W_,lights_lambert_fragment:q_,lights_lambert_pars_fragment:X_,lights_pars_begin:Y_,lights_toon_fragment:j_,lights_toon_pars_fragment:K_,lights_phong_fragment:Z_,lights_phong_pars_fragment:J_,lights_physical_fragment:Q_,lights_physical_pars_fragment:tg,lights_fragment_begin:eg,lights_fragment_maps:ng,lights_fragment_end:ig,logdepthbuf_fragment:sg,logdepthbuf_pars_fragment:rg,logdepthbuf_pars_vertex:og,logdepthbuf_vertex:ag,map_fragment:cg,map_pars_fragment:lg,map_particle_fragment:hg,map_particle_pars_fragment:ug,metalnessmap_fragment:fg,metalnessmap_pars_fragment:dg,morphinstance_vertex:pg,morphcolor_vertex:mg,morphnormal_vertex:_g,morphtarget_pars_vertex:gg,morphtarget_vertex:xg,normal_fragment_begin:vg,normal_fragment_maps:Mg,normal_pars_fragment:yg,normal_pars_vertex:Sg,normal_vertex:Eg,normalmap_pars_fragment:wg,clearcoat_normal_fragment_begin:Ag,clearcoat_normal_fragment_maps:bg,clearcoat_pars_fragment:Tg,iridescence_pars_fragment:Rg,opaque_fragment:Lg,packing:Cg,premultiplied_alpha_fragment:Ig,project_vertex:Pg,dithering_fragment:Dg,dithering_pars_fragment:Ng,roughnessmap_fragment:Og,roughnessmap_pars_fragment:Ug,shadowmap_pars_fragment:Fg,shadowmap_pars_vertex:kg,shadowmap_vertex:Bg,shadowmask_pars_fragment:zg,skinbase_vertex:Hg,skinning_pars_vertex:Gg,skinning_vertex:Vg,skinnormal_vertex:Wg,specularmap_fragment:qg,specularmap_pars_fragment:Xg,tonemapping_fragment:Yg,tonemapping_pars_fragment:$g,transmission_fragment:jg,transmission_pars_fragment:Kg,uv_pars_fragment:Zg,uv_pars_vertex:Jg,uv_vertex:Qg,worldpos_vertex:t1,background_vert:e1,background_frag:n1,backgroundCube_vert:i1,backgroundCube_frag:s1,cube_vert:r1,cube_frag:o1,depth_vert:a1,depth_frag:c1,distanceRGBA_vert:l1,distanceRGBA_frag:h1,equirect_vert:u1,equirect_frag:f1,linedashed_vert:d1,linedashed_frag:p1,meshbasic_vert:m1,meshbasic_frag:_1,meshlambert_vert:g1,meshlambert_frag:x1,meshmatcap_vert:v1,meshmatcap_frag:M1,meshnormal_vert:y1,meshnormal_frag:S1,meshphong_vert:E1,meshphong_frag:w1,meshphysical_vert:A1,meshphysical_frag:b1,meshtoon_vert:T1,meshtoon_frag:R1,points_vert:L1,points_frag:C1,shadow_vert:I1,shadow_frag:P1,sprite_vert:D1,sprite_frag:N1},dt={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},ti={basic:{uniforms:sn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:sn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:sn([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:sn([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:sn([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Nt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:sn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:sn([dt.points,dt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:sn([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:sn([dt.common,dt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:sn([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:sn([dt.sprite,dt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:sn([dt.common,dt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:sn([dt.lights,dt.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};ti.physical={uniforms:sn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Ro={r:0,b:0,g:0},rs=new $n,O1=new Vt;function U1(n,t,e,i,s,r,o){const a=new Nt(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function _(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function x(v){let M=!1;const S=_(v);S===null?p(a,c):S&&S.isColor&&(p(S,1),M=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,M){const S=_(M);S&&(S.isCubeTexture||S.mapping===Aa)?(h===void 0&&(h=new Dt(new $e(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:ar(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),rs.copy(M.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(O1.makeRotationFromEuler(rs)),h.material.toneMapped=ae.getTransfer(S.colorSpace)!==_e,(u!==S||f!==S.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Dt(new Ci(2,2),new Ti({name:"BackgroundMaterial",uniforms:ar(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ae.getTransfer(S.colorSpace)!==_e,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,M){v.getRGB(Ro,ud(n)),i.buffers.color.setClear(Ro.r,Ro.g,Ro.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:x,addToRenderList:m}}function F1(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(g,y,b,L,N){let k=!1;const I=u(L,b,y);r!==I&&(r=I,l(r.object)),k=d(g,L,b,N),k&&_(g,L,b,N),N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,S(g,y,b,L),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return n.createVertexArray()}function l(g){return n.bindVertexArray(g)}function h(g){return n.deleteVertexArray(g)}function u(g,y,b){const L=b.wireframe===!0;let N=i[g.id];N===void 0&&(N={},i[g.id]=N);let k=N[y.id];k===void 0&&(k={},N[y.id]=k);let I=k[L];return I===void 0&&(I=f(c()),k[L]=I),I}function f(g){const y=[],b=[],L=[];for(let N=0;N<e;N++)y[N]=0,b[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:b,attributeDivisors:L,object:g,attributes:{},index:null}}function d(g,y,b,L){const N=r.attributes,k=y.attributes;let I=0;const D=b.getAttributes();for(const U in D)if(D[U].location>=0){const K=N[U];let tt=k[U];if(tt===void 0&&(U==="instanceMatrix"&&g.instanceMatrix&&(tt=g.instanceMatrix),U==="instanceColor"&&g.instanceColor&&(tt=g.instanceColor)),K===void 0||K.attribute!==tt||tt&&K.data!==tt.data)return!0;I++}return r.attributesNum!==I||r.index!==L}function _(g,y,b,L){const N={},k=y.attributes;let I=0;const D=b.getAttributes();for(const U in D)if(D[U].location>=0){let K=k[U];K===void 0&&(U==="instanceMatrix"&&g.instanceMatrix&&(K=g.instanceMatrix),U==="instanceColor"&&g.instanceColor&&(K=g.instanceColor));const tt={};tt.attribute=K,K&&K.data&&(tt.data=K.data),N[U]=tt,I++}r.attributes=N,r.attributesNum=I,r.index=L}function x(){const g=r.newAttributes;for(let y=0,b=g.length;y<b;y++)g[y]=0}function m(g){p(g,0)}function p(g,y){const b=r.newAttributes,L=r.enabledAttributes,N=r.attributeDivisors;b[g]=1,L[g]===0&&(n.enableVertexAttribArray(g),L[g]=1),N[g]!==y&&(n.vertexAttribDivisor(g,y),N[g]=y)}function v(){const g=r.newAttributes,y=r.enabledAttributes;for(let b=0,L=y.length;b<L;b++)y[b]!==g[b]&&(n.disableVertexAttribArray(b),y[b]=0)}function M(g,y,b,L,N,k,I){I===!0?n.vertexAttribIPointer(g,y,b,N,k):n.vertexAttribPointer(g,y,b,L,N,k)}function S(g,y,b,L){x();const N=L.attributes,k=b.getAttributes(),I=y.defaultAttributeValues;for(const D in k){const U=k[D];if(U.location>=0){let Y=N[D];if(Y===void 0&&(D==="instanceMatrix"&&g.instanceMatrix&&(Y=g.instanceMatrix),D==="instanceColor"&&g.instanceColor&&(Y=g.instanceColor)),Y!==void 0){const K=Y.normalized,tt=Y.itemSize,J=t.get(Y);if(J===void 0)continue;const q=J.buffer,H=J.type,F=J.bytesPerElement,Z=H===n.INT||H===n.UNSIGNED_INT||Y.gpuType===g0;if(Y.isInterleavedBufferAttribute){const nt=Y.data,lt=nt.stride,ct=Y.offset;if(nt.isInstancedInterleavedBuffer){for(let pt=0;pt<U.locationSize;pt++)p(U.location+pt,nt.meshPerAttribute);g.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let pt=0;pt<U.locationSize;pt++)m(U.location+pt);n.bindBuffer(n.ARRAY_BUFFER,q);for(let pt=0;pt<U.locationSize;pt++)M(U.location+pt,tt/U.locationSize,H,K,lt*F,(ct+tt/U.locationSize*pt)*F,Z)}else{if(Y.isInstancedBufferAttribute){for(let nt=0;nt<U.locationSize;nt++)p(U.location+nt,Y.meshPerAttribute);g.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let nt=0;nt<U.locationSize;nt++)m(U.location+nt);n.bindBuffer(n.ARRAY_BUFFER,q);for(let nt=0;nt<U.locationSize;nt++)M(U.location+nt,tt/U.locationSize,H,K,tt*F,tt/U.locationSize*nt*F,Z)}}else if(I!==void 0){const K=I[D];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(U.location,K);break;case 3:n.vertexAttrib3fv(U.location,K);break;case 4:n.vertexAttrib4fv(U.location,K);break;default:n.vertexAttrib1fv(U.location,K)}}}}v()}function R(){P();for(const g in i){const y=i[g];for(const b in y){const L=y[b];for(const N in L)h(L[N].object),delete L[N];delete y[b]}delete i[g]}}function A(g){if(i[g.id]===void 0)return;const y=i[g.id];for(const b in y){const L=y[b];for(const N in L)h(L[N].object),delete L[N];delete y[b]}delete i[g.id]}function E(g){for(const y in i){const b=i[y];if(b[g.id]===void 0)continue;const L=b[g.id];for(const N in L)h(L[N].object),delete L[N];delete b[g.id]}}function P(){C(),o=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:C,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function k1(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];e.update(d,i,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)o(l[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x];for(let x=0;x<f.length;x++)e.update(_,i,f[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function B1(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(E){return!(E!==Qe&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const P=E===dr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==bi&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==ni&&!P)}function c(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const E=t.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}const d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:R,maxSamples:A}}function z1(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new yi,a=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const _=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{const v=r?0:i,M=v*4;let S=p.clippingState||null;c.value=S,S=h(_,f,M,d);for(let R=0;R!==M;++R)S[R]=e[R];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,_){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const p=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,S=d;M!==x;++M,S+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function H1(n){let t=new WeakMap;function e(o,a){return a===Ml?o.mapping=ir:a===yl&&(o.mapping=sr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ml||a===yl)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Jm(c.height);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class md extends fd{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const $s=4,Nh=[.125,.215,.35,.446,.526,.582],us=20,fc=new md,Oh=new Nt;let dc=null,pc=0,mc=0,_c=!1;const ls=(1+Math.sqrt(5))/2,Fs=1/ls,Uh=[new z(-ls,Fs,0),new z(ls,Fs,0),new z(-Fs,0,ls),new z(Fs,0,ls),new z(0,ls,-Fs),new z(0,ls,Fs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Fh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){dc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dc,pc,mc),this._renderer.xr.enabled=_c,t.scissorTest=!1,Lo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ir||t.mapping===sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),_c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:dr,format:Qe,colorSpace:Li,depthBuffer:!1},s=kh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kh(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G1(r)),this._blurMaterial=V1(r,t,e)}return s}_compileMaterial(t){const e=new Dt(this._lodPlanes[0],t);this._renderer.compile(e,fc)}_sceneToCubeUV(t,e,i,s){const a=new cn(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Oh),h.toneMapping=Ki,h.autoClear=!1;const d=new fs({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),_=new Dt(new $e,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(Oh),x=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;Lo(s,v*M,p>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ir||t.mapping===sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Lo(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,fc)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Uh[(s-r-1)%Uh.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Dt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*us-1),x=r/_,m=isFinite(r)?1+Math.floor(h*x):us;m>us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);const p=[];let v=0;for(let E=0;E<us;++E){const P=E/x,C=Math.exp(-P*P/2);p.push(C),E===0?v+=C:E<m&&(v+=2*C)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-i;const S=this._sizeLods[s],R=3*S*(s>M-$s?s-M+$s:0),A=4*(this._cubeSize-S);Lo(e,R,A,3*S,2*S),c.setRenderTarget(e),c.render(u,fc)}}function G1(n){const t=[],e=[],i=[];let s=n;const r=n-$s+1+Nh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-$s?c=Nh[o-n+$s-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,x=3,m=2,p=1,v=new Float32Array(x*_*d),M=new Float32Array(m*_*d),S=new Float32Array(p*_*d);for(let A=0;A<d;A++){const E=A%3*2/3-1,P=A>2?0:-1,C=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];v.set(C,x*_*A),M.set(f,m*_*A);const g=[A,A,A,A,A,A];S.set(g,p*_*A)}const R=new en;R.setAttribute("position",new le(v,x)),R.setAttribute("uv",new le(M,m)),R.setAttribute("faceIndex",new le(S,p)),t.push(R),s>$s&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function kh(n,t,e){const i=new Ji(n,t,e);return i.texture.mapping=Aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function V1(n,t,e){const i=new Float32Array(us),s=new z(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:A0(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Bh(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:A0(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function zh(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:A0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function A0(){return`

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
	`}function W1(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ml||c===yl,h=c===ir||c===sr;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Fh(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Fh(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function q1(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ta("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function X1(n,t,e,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER);const d=u.morphAttributes;for(const _ in d){const x=d[_];for(let m=0,p=x.length;m<p;m++)t.update(x[m],n.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,_=u.attributes.position;let x=0;if(d!==null){const v=d.array;x=d.version;for(let M=0,S=v.length;M<S;M+=3){const R=v[M+0],A=v[M+1],E=v[M+2];f.push(R,A,A,E,E,R)}}else if(_!==void 0){const v=_.array;x=_.version;for(let M=0,S=v.length/3-1;M<S;M+=3){const R=M+0,A=M+1,E=M+2;f.push(R,A,A,E,E,R)}}else return;const m=new(sd(f)?hd:ld)(f,1);m.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Y1(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*o),e.update(d,i,1)}function l(f,d,_){_!==0&&(n.drawElementsInstanced(i,d,r,f*o,_),e.update(d,i,_))}function h(f,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];e.update(m,i,1)}function u(f,d,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,x,0,_);let p=0;for(let v=0;v<_;v++)p+=d[v];for(let v=0;v<x.length;v++)e.update(p,i,x[v])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $1(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function j1(n,t,e){const i=new WeakMap,s=new ce;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let g=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",g)};var d=g;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let R=a.attributes.position.count*S,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const E=new Float32Array(R*A*4*u),P=new od(E,R,A,u);P.type=ni,P.needsUpdate=!0;const C=S*4;for(let y=0;y<u;y++){const b=p[y],L=v[y],N=M[y],k=R*A*4*y;for(let I=0;I<b.count;I++){const D=I*C;_===!0&&(s.fromBufferAttribute(b,I),E[k+D+0]=s.x,E[k+D+1]=s.y,E[k+D+2]=s.z,E[k+D+3]=0),x===!0&&(s.fromBufferAttribute(L,I),E[k+D+4]=s.x,E[k+D+5]=s.y,E[k+D+6]=s.z,E[k+D+7]=0),m===!0&&(s.fromBufferAttribute(N,I),E[k+D+8]=s.x,E[k+D+9]=s.y,E[k+D+10]=s.z,E[k+D+11]=N.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new Ot(R,A)},i.set(a,f),a.addEventListener("dispose",g)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const x=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function K1(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class _d extends tn{constructor(t,e,i,s,r,o,a,c,l,h=Zs){if(h!==Zs&&h!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Zs&&(i=_s),i===void 0&&h===or&&(i=rr),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:_n,this.minFilter=c!==void 0?c:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const gd=new tn,Hh=new _d(1,1),xd=new od,vd=new Om,Md=new dd,Gh=[],Vh=[],Wh=new Float32Array(16),qh=new Float32Array(9),Xh=new Float32Array(4);function _r(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Gh[s];if(r===void 0&&(r=new Float32Array(s),Gh[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ke(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ta(n,t){let e=Vh[t];e===void 0&&(e=new Int32Array(t),Vh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Z1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function J1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2fv(this.addr,t),ke(e,t)}}function Q1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;n.uniform3fv(this.addr,t),ke(e,t)}}function tx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4fv(this.addr,t),ke(e,t)}}function ex(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,i))return;Xh.set(i),n.uniformMatrix2fv(this.addr,!1,Xh),ke(e,i)}}function nx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,i))return;qh.set(i),n.uniformMatrix3fv(this.addr,!1,qh),ke(e,i)}}function ix(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Fe(e,i))return;Wh.set(i),n.uniformMatrix4fv(this.addr,!1,Wh),ke(e,i)}}function sx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function rx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2iv(this.addr,t),ke(e,t)}}function ox(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3iv(this.addr,t),ke(e,t)}}function ax(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4iv(this.addr,t),ke(e,t)}}function cx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function lx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;n.uniform2uiv(this.addr,t),ke(e,t)}}function hx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;n.uniform3uiv(this.addr,t),ke(e,t)}}function ux(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;n.uniform4uiv(this.addr,t),ke(e,t)}}function fx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Hh.compareFunction=id,r=Hh):r=gd,e.setTexture2D(t||r,s)}function dx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||vd,s)}function px(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Md,s)}function mx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||xd,s)}function _x(n){switch(n){case 5126:return Z1;case 35664:return J1;case 35665:return Q1;case 35666:return tx;case 35674:return ex;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return sx;case 35667:case 35671:return rx;case 35668:case 35672:return ox;case 35669:case 35673:return ax;case 5125:return cx;case 36294:return lx;case 36295:return hx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}function gx(n,t){n.uniform1fv(this.addr,t)}function xx(n,t){const e=_r(t,this.size,2);n.uniform2fv(this.addr,e)}function vx(n,t){const e=_r(t,this.size,3);n.uniform3fv(this.addr,e)}function Mx(n,t){const e=_r(t,this.size,4);n.uniform4fv(this.addr,e)}function yx(n,t){const e=_r(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Sx(n,t){const e=_r(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ex(n,t){const e=_r(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function wx(n,t){n.uniform1iv(this.addr,t)}function Ax(n,t){n.uniform2iv(this.addr,t)}function bx(n,t){n.uniform3iv(this.addr,t)}function Tx(n,t){n.uniform4iv(this.addr,t)}function Rx(n,t){n.uniform1uiv(this.addr,t)}function Lx(n,t){n.uniform2uiv(this.addr,t)}function Cx(n,t){n.uniform3uiv(this.addr,t)}function Ix(n,t){n.uniform4uiv(this.addr,t)}function Px(n,t,e){const i=this.cache,s=t.length,r=Ta(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||gd,r[o])}function Dx(n,t,e){const i=this.cache,s=t.length,r=Ta(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||vd,r[o])}function Nx(n,t,e){const i=this.cache,s=t.length,r=Ta(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Md,r[o])}function Ox(n,t,e){const i=this.cache,s=t.length,r=Ta(e,s);Fe(i,r)||(n.uniform1iv(this.addr,r),ke(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||xd,r[o])}function Ux(n){switch(n){case 5126:return gx;case 35664:return xx;case 35665:return vx;case 35666:return Mx;case 35674:return yx;case 35675:return Sx;case 35676:return Ex;case 5124:case 35670:return wx;case 35667:case 35671:return Ax;case 35668:case 35672:return bx;case 35669:case 35673:return Tx;case 5125:return Rx;case 36294:return Lx;case 36295:return Cx;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Px;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Ox}}class Fx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=_x(e.type)}}class kx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ux(e.type)}}class Bx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const gc=/(\w+)(\])?(\[|\.)?/g;function Yh(n,t){n.seq.push(t),n.map[t.id]=t}function zx(n,t,e){const i=n.name,s=i.length;for(gc.lastIndex=0;;){const r=gc.exec(i),o=gc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Yh(e,l===void 0?new Fx(a,n,t):new kx(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Bx(a),Yh(e,u)),e=u}}}class ea{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);zx(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function $h(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Hx=37297;let Gx=0;function Vx(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Wx(n){const t=ae.getPrimaries(ae.workingColorSpace),e=ae.getPrimaries(n);let i;switch(t===e?i="":t===ua&&e===ha?i="LinearDisplayP3ToLinearSRGB":t===ha&&e===ua&&(i="LinearSRGBToLinearDisplayP3"),n){case Li:case ba:return[i,"LinearTransferOETF"];case Je:case w0:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function jh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Vx(n.getShaderSource(t),o)}else return s}function qx(n,t){const e=Wx(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Xx(n,t){let e;switch(t){case cm:e="Linear";break;case lm:e="Reinhard";break;case hm:e="Cineon";break;case qf:e="ACESFilmic";break;case fm:e="AgX";break;case dm:e="Neutral";break;case um:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Co=new z;function Yx(){ae.getLuminanceCoefficients(Co);const n=Co.x.toFixed(4),t=Co.y.toFixed(4),e=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $x(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function jx(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Kx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Fr(n){return n!==""}function Kh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kl(n){return n.replace(Zx,Qx)}const Jx=new Map;function Qx(n,t){let e=$t[t];if(e===void 0){const i=Jx.get(t);if(i!==void 0)e=$t[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Kl(e)}const tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(n){return n.replace(tv,ev)}function ev(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qh(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function nv(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Vf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vi&&(t="SHADOWMAP_TYPE_VSM"),t}function iv(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ir:case sr:t="ENVMAP_TYPE_CUBE";break;case Aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sv(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case sr:t="ENVMAP_MODE_REFRACTION";break}return t}function rv(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Wf:t="ENVMAP_BLENDING_MULTIPLY";break;case om:t="ENVMAP_BLENDING_MIX";break;case am:t="ENVMAP_BLENDING_ADD";break}return t}function ov(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function av(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=nv(e),l=iv(e),h=sv(e),u=rv(e),f=ov(e),d=$x(e),_=jx(r),x=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Fr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Fr).join(`
`),p.length>0&&(p+=`
`)):(m=[Qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),p=[Qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ki?"#define TONE_MAPPING":"",e.toneMapping!==Ki?$t.tonemapping_pars_fragment:"",e.toneMapping!==Ki?Xx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,qx("linearToOutputTexel",e.outputColorSpace),Yx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fr).join(`
`)),o=Kl(o),o=Kh(o,e),o=Zh(o,e),a=Kl(a),a=Kh(a,e),a=Zh(a,e),o=Jh(o),a=Jh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=v+m+o,S=v+p+a,R=$h(s,s.VERTEX_SHADER,M),A=$h(s,s.FRAGMENT_SHADER,S);s.attachShader(x,R),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(y){if(n.debug.checkShaderErrors){const b=s.getProgramInfoLog(x).trim(),L=s.getShaderInfoLog(R).trim(),N=s.getShaderInfoLog(A).trim();let k=!0,I=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,R,A);else{const D=jh(s,R,"vertex"),U=jh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+b+`
`+D+`
`+U)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(L===""||N==="")&&(I=!1);I&&(y.diagnostics={runnable:k,programLog:b,vertexShader:{log:L,prefix:m},fragmentShader:{log:N,prefix:p}})}s.deleteShader(R),s.deleteShader(A),P=new ea(s,x),C=Kx(s,x)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let C;this.getAttributes=function(){return C===void 0&&E(this),C};let g=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g===!1&&(g=s.getProgramParameter(x,Hx)),g},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}let cv=0;class lv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new hv(t),e.set(t,i)),i}}class hv{constructor(t){this.id=cv++,this.code=t,this.usedTimes=0}}function uv(n,t,e,i,s,r,o){const a=new ad,c=new lv,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return l.add(g),g===0?"uv":`uv${g}`}function p(g,y,b,L,N){const k=L.fog,I=N.geometry,D=g.isMeshStandardMaterial?L.environment:null,U=(g.isMeshStandardMaterial?e:t).get(g.envMap||D),Y=U&&U.mapping===Aa?U.image.height:null,K=x[g.type];g.precision!==null&&(_=s.getMaxPrecision(g.precision),_!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",_,"instead."));const tt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,J=tt!==void 0?tt.length:0;let q=0;I.morphAttributes.position!==void 0&&(q=1),I.morphAttributes.normal!==void 0&&(q=2),I.morphAttributes.color!==void 0&&(q=3);let H,F,Z,nt;if(K){const fn=ti[K];H=fn.vertexShader,F=fn.fragmentShader}else H=g.vertexShader,F=g.fragmentShader,c.update(g),Z=c.getVertexShaderID(g),nt=c.getFragmentShaderID(g);const lt=n.getRenderTarget(),ct=N.isInstancedMesh===!0,pt=N.isBatchedMesh===!0,gt=!!g.map,St=!!g.matcap,B=!!U,ue=!!g.aoMap,It=!!g.lightMap,Gt=!!g.bumpMap,Tt=!!g.normalMap,Kt=!!g.displacementMap,xt=!!g.emissiveMap,O=!!g.metalnessMap,w=!!g.roughnessMap,X=g.anisotropy>0,it=g.clearcoat>0,ot=g.dispersion>0,st=g.iridescence>0,At=g.sheen>0,ft=g.transmission>0,yt=X&&!!g.anisotropyMap,Zt=it&&!!g.clearcoatMap,ht=it&&!!g.clearcoatNormalMap,Et=it&&!!g.clearcoatRoughnessMap,Bt=st&&!!g.iridescenceMap,zt=st&&!!g.iridescenceThicknessMap,wt=At&&!!g.sheenColorMap,Jt=At&&!!g.sheenRoughnessMap,qt=!!g.specularMap,fe=!!g.specularColorMap,G=!!g.specularIntensityMap,vt=ft&&!!g.transmissionMap,Q=ft&&!!g.thicknessMap,rt=!!g.gradientMap,mt=!!g.alphaMap,Mt=g.alphaTest>0,Qt=!!g.alphaHash,Le=!!g.extensions;let un=Ki;g.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(un=n.toneMapping);const ne={shaderID:K,shaderType:g.type,shaderName:g.name,vertexShader:H,fragmentShader:F,defines:g.defines,customVertexShaderID:Z,customFragmentShaderID:nt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:_,batching:pt,batchingColor:pt&&N._colorsTexture!==null,instancing:ct,instancingColor:ct&&N.instanceColor!==null,instancingMorph:ct&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?n.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Li,alphaToCoverage:!!g.alphaToCoverage,map:gt,matcap:St,envMap:B,envMapMode:B&&U.mapping,envMapCubeUVHeight:Y,aoMap:ue,lightMap:It,bumpMap:Gt,normalMap:Tt,displacementMap:d&&Kt,emissiveMap:xt,normalMapObjectSpace:Tt&&g.normalMapType===gm,normalMapTangentSpace:Tt&&g.normalMapType===nd,metalnessMap:O,roughnessMap:w,anisotropy:X,anisotropyMap:yt,clearcoat:it,clearcoatMap:Zt,clearcoatNormalMap:ht,clearcoatRoughnessMap:Et,dispersion:ot,iridescence:st,iridescenceMap:Bt,iridescenceThicknessMap:zt,sheen:At,sheenColorMap:wt,sheenRoughnessMap:Jt,specularMap:qt,specularColorMap:fe,specularIntensityMap:G,transmission:ft,transmissionMap:vt,thicknessMap:Q,gradientMap:rt,opaque:g.transparent===!1&&g.blending===Ks&&g.alphaToCoverage===!1,alphaMap:mt,alphaTest:Mt,alphaHash:Qt,combine:g.combine,mapUv:gt&&m(g.map.channel),aoMapUv:ue&&m(g.aoMap.channel),lightMapUv:It&&m(g.lightMap.channel),bumpMapUv:Gt&&m(g.bumpMap.channel),normalMapUv:Tt&&m(g.normalMap.channel),displacementMapUv:Kt&&m(g.displacementMap.channel),emissiveMapUv:xt&&m(g.emissiveMap.channel),metalnessMapUv:O&&m(g.metalnessMap.channel),roughnessMapUv:w&&m(g.roughnessMap.channel),anisotropyMapUv:yt&&m(g.anisotropyMap.channel),clearcoatMapUv:Zt&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:ht&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&m(g.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&m(g.sheenRoughnessMap.channel),specularMapUv:qt&&m(g.specularMap.channel),specularColorMapUv:fe&&m(g.specularColorMap.channel),specularIntensityMapUv:G&&m(g.specularIntensityMap.channel),transmissionMapUv:vt&&m(g.transmissionMap.channel),thicknessMapUv:Q&&m(g.thicknessMap.channel),alphaMapUv:mt&&m(g.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Tt||X),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(gt||mt),fog:!!k,useFog:g.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:N.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:q,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&b.length>0,shadowMapType:n.shadowMap.type,toneMapping:un,decodeVideoTexture:gt&&g.map.isVideoTexture===!0&&ae.getTransfer(g.map.colorSpace)===_e,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ei,flipSided:g.side===hn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Le&&g.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&g.extensions.multiDraw===!0||pt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ne.vertexUv1s=l.has(1),ne.vertexUv2s=l.has(2),ne.vertexUv3s=l.has(3),l.clear(),ne}function v(g){const y=[];if(g.shaderID?y.push(g.shaderID):(y.push(g.customVertexShaderID),y.push(g.customFragmentShaderID)),g.defines!==void 0)for(const b in g.defines)y.push(b),y.push(g.defines[b]);return g.isRawShaderMaterial===!1&&(M(y,g),S(y,g),y.push(n.outputColorSpace)),y.push(g.customProgramCacheKey),y.join()}function M(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapCubeUVHeight),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.morphAttributeCount),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}function S(g,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),g.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),g.push(a.mask)}function R(g){const y=x[g.type];let b;if(y){const L=ti[y];b=$m.clone(L.uniforms)}else b=g.uniforms;return b}function A(g,y){let b;for(let L=0,N=h.length;L<N;L++){const k=h[L];if(k.cacheKey===y){b=k,++b.usedTimes;break}}return b===void 0&&(b=new av(n,y,g,r),h.push(b)),b}function E(g){if(--g.usedTimes===0){const y=h.indexOf(g);h[y]=h[h.length-1],h.pop(),g.destroy()}}function P(g){c.remove(g)}function C(){c.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:R,acquireProgram:A,releaseProgram:E,releaseShaderCache:P,programs:h,dispose:C}}function fv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function dv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function tu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function eu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u,f,d,_,x,m){let p=n[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:x,group:m},n[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,_,x,m){const p=o(u,f,d,_,x,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,_,x,m){const p=o(u,f,d,_,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||dv),i.length>1&&i.sort(f||tu),s.length>1&&s.sort(f||tu)}function h(){for(let u=t,f=n.length;u<f;u++){const d=n[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function pv(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new eu,n.set(i,[o])):s>=r.length?(o=new eu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function mv(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Nt};break;case"SpotLight":e={position:new z,direction:new z,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function _v(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let gv=0;function xv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function vv(n){const t=new mv,e=_v(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new z);const s=new z,r=new Vt,o=new Vt;function a(l){let h=0,u=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let d=0,_=0,x=0,m=0,p=0,v=0,M=0,S=0,R=0,A=0,E=0;l.sort(xv);for(let C=0,g=l.length;C<g;C++){const y=l[C],b=y.color,L=y.intensity,N=y.distance,k=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)h+=b.r*L,u+=b.g*L,f+=b.b*L;else if(y.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(y.sh.coefficients[I],L);E++}else if(y.isDirectionalLight){const I=t.get(y);if(I.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const D=y.shadow,U=e.get(y);U.shadowIntensity=D.intensity,U.shadowBias=D.bias,U.shadowNormalBias=D.normalBias,U.shadowRadius=D.radius,U.shadowMapSize=D.mapSize,i.directionalShadow[d]=U,i.directionalShadowMap[d]=k,i.directionalShadowMatrix[d]=y.shadow.matrix,v++}i.directional[d]=I,d++}else if(y.isSpotLight){const I=t.get(y);I.position.setFromMatrixPosition(y.matrixWorld),I.color.copy(b).multiplyScalar(L),I.distance=N,I.coneCos=Math.cos(y.angle),I.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),I.decay=y.decay,i.spot[x]=I;const D=y.shadow;if(y.map&&(i.spotLightMap[R]=y.map,R++,D.updateMatrices(y),y.castShadow&&A++),i.spotLightMatrix[x]=D.matrix,y.castShadow){const U=e.get(y);U.shadowIntensity=D.intensity,U.shadowBias=D.bias,U.shadowNormalBias=D.normalBias,U.shadowRadius=D.radius,U.shadowMapSize=D.mapSize,i.spotShadow[x]=U,i.spotShadowMap[x]=k,S++}x++}else if(y.isRectAreaLight){const I=t.get(y);I.color.copy(b).multiplyScalar(L),I.halfWidth.set(y.width*.5,0,0),I.halfHeight.set(0,y.height*.5,0),i.rectArea[m]=I,m++}else if(y.isPointLight){const I=t.get(y);if(I.color.copy(y.color).multiplyScalar(y.intensity),I.distance=y.distance,I.decay=y.decay,y.castShadow){const D=y.shadow,U=e.get(y);U.shadowIntensity=D.intensity,U.shadowBias=D.bias,U.shadowNormalBias=D.normalBias,U.shadowRadius=D.radius,U.shadowMapSize=D.mapSize,U.shadowCameraNear=D.camera.near,U.shadowCameraFar=D.camera.far,i.pointShadow[_]=U,i.pointShadowMap[_]=k,i.pointShadowMatrix[_]=y.shadow.matrix,M++}i.point[_]=I,_++}else if(y.isHemisphereLight){const I=t.get(y);I.skyColor.copy(y.color).multiplyScalar(L),I.groundColor.copy(y.groundColor).multiplyScalar(L),i.hemi[p]=I,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==d||P.pointLength!==_||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==M||P.numSpotShadows!==S||P.numSpotMaps!==R||P.numLightProbes!==E)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=E,P.directionalLength=d,P.pointLength=_,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=M,P.numSpotShadows=S,P.numSpotMaps=R,P.numLightProbes=E,i.version=gv++)}function c(l,h){let u=0,f=0,d=0,_=0,x=0;const m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const M=l[p];if(M.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(M.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(M.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function nu(n){const t=new vv(n),e=[],i=[];function s(h){l.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Mv(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new nu(n),t.set(s,[a])):r>=o.length?(a=new nu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class yv extends Jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sv extends Jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wv=`uniform sampler2D shadow_pass;
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
}`;function Av(n,t,e){let i=new Qr;const s=new Ot,r=new Ot,o=new ce,a=new yv({depthPacking:_m}),c=new Sv,l={},h=e.maxTextureSize,u={[Yn]:hn,[hn]:Yn,[ei]:ei},f=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:Ev,fragmentShader:wv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new en;_.setAttribute("position",new le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Dt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gf;let p=this.type;this.render=function(A,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const C=n.getRenderTarget(),g=n.getActiveCubeFace(),y=n.getActiveMipmapLevel(),b=n.state;b.setBlending(ji),b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);const L=p!==vi&&this.type===vi,N=p===vi&&this.type!==vi;for(let k=0,I=A.length;k<I;k++){const D=A[k],U=D.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const Y=U.getFrameExtents();if(s.multiply(Y),r.copy(U.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,U.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,U.mapSize.y=r.y)),U.map===null||L===!0||N===!0){const tt=this.type!==vi?{minFilter:_n,magFilter:_n}:{};U.map!==null&&U.map.dispose(),U.map=new Ji(s.x,s.y,tt),U.map.texture.name=D.name+".shadowMap",U.camera.updateProjectionMatrix()}n.setRenderTarget(U.map),n.clear();const K=U.getViewportCount();for(let tt=0;tt<K;tt++){const J=U.getViewport(tt);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),b.viewport(o),U.updateMatrices(D,tt),i=U.getFrustum(),S(E,P,U.camera,D,this.type)}U.isPointLightShadow!==!0&&this.type===vi&&v(U,P),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(C,g,y)};function v(A,E){const P=t.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ji(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(E,null,P,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(E,null,P,d,x,null)}function M(A,E,P,C){let g=null;const y=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(y!==void 0)g=y;else if(g=P.isPointLight===!0?c:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const b=g.uuid,L=E.uuid;let N=l[b];N===void 0&&(N={},l[b]=N);let k=N[L];k===void 0&&(k=g.clone(),N[L]=k,E.addEventListener("dispose",R)),g=k}if(g.visible=E.visible,g.wireframe=E.wireframe,C===vi?g.side=E.shadowSide!==null?E.shadowSide:E.side:g.side=E.shadowSide!==null?E.shadowSide:u[E.side],g.alphaMap=E.alphaMap,g.alphaTest=E.alphaTest,g.map=E.map,g.clipShadows=E.clipShadows,g.clippingPlanes=E.clippingPlanes,g.clipIntersection=E.clipIntersection,g.displacementMap=E.displacementMap,g.displacementScale=E.displacementScale,g.displacementBias=E.displacementBias,g.wireframeLinewidth=E.wireframeLinewidth,g.linewidth=E.linewidth,P.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const b=n.properties.get(g);b.light=P}return g}function S(A,E,P,C,g){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&g===vi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const L=t.update(A),N=A.material;if(Array.isArray(N)){const k=L.groups;for(let I=0,D=k.length;I<D;I++){const U=k[I],Y=N[U.materialIndex];if(Y&&Y.visible){const K=M(A,Y,C,g);A.onBeforeShadow(n,A,E,P,L,K,U),n.renderBufferDirect(P,null,L,K,A,U),A.onAfterShadow(n,A,E,P,L,K,U)}}}else if(N.visible){const k=M(A,N,C,g);A.onBeforeShadow(n,A,E,P,L,k,null),n.renderBufferDirect(P,null,L,k,A,null),A.onAfterShadow(n,A,E,P,L,k,null)}}const b=A.children;for(let L=0,N=b.length;L<N;L++)S(b[L],E,P,C,g)}function R(A){A.target.removeEventListener("dispose",R);for(const P in l){const C=l[P],g=A.target.uuid;g in C&&(C[g].dispose(),delete C[g])}}}const bv={[dl]:pl,[ml]:xl,[_l]:vl,[nr]:gl,[pl]:dl,[xl]:ml,[vl]:_l,[gl]:nr};function Tv(n){function t(){let G=!1;const vt=new ce;let Q=null;const rt=new ce(0,0,0,0);return{setMask:function(mt){Q!==mt&&!G&&(n.colorMask(mt,mt,mt,mt),Q=mt)},setLocked:function(mt){G=mt},setClear:function(mt,Mt,Qt,Le,un){un===!0&&(mt*=Le,Mt*=Le,Qt*=Le),vt.set(mt,Mt,Qt,Le),rt.equals(vt)===!1&&(n.clearColor(mt,Mt,Qt,Le),rt.copy(vt))},reset:function(){G=!1,Q=null,rt.set(-1,0,0,0)}}}function e(){let G=!1,vt=!1,Q=null,rt=null,mt=null;return{setReversed:function(Mt){vt=Mt},setTest:function(Mt){Mt?Z(n.DEPTH_TEST):nt(n.DEPTH_TEST)},setMask:function(Mt){Q!==Mt&&!G&&(n.depthMask(Mt),Q=Mt)},setFunc:function(Mt){if(vt&&(Mt=bv[Mt]),rt!==Mt){switch(Mt){case dl:n.depthFunc(n.NEVER);break;case pl:n.depthFunc(n.ALWAYS);break;case ml:n.depthFunc(n.LESS);break;case nr:n.depthFunc(n.LEQUAL);break;case _l:n.depthFunc(n.EQUAL);break;case gl:n.depthFunc(n.GEQUAL);break;case xl:n.depthFunc(n.GREATER);break;case vl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}rt=Mt}},setLocked:function(Mt){G=Mt},setClear:function(Mt){mt!==Mt&&(n.clearDepth(Mt),mt=Mt)},reset:function(){G=!1,Q=null,rt=null,mt=null}}}function i(){let G=!1,vt=null,Q=null,rt=null,mt=null,Mt=null,Qt=null,Le=null,un=null;return{setTest:function(ne){G||(ne?Z(n.STENCIL_TEST):nt(n.STENCIL_TEST))},setMask:function(ne){vt!==ne&&!G&&(n.stencilMask(ne),vt=ne)},setFunc:function(ne,fn,ui){(Q!==ne||rt!==fn||mt!==ui)&&(n.stencilFunc(ne,fn,ui),Q=ne,rt=fn,mt=ui)},setOp:function(ne,fn,ui){(Mt!==ne||Qt!==fn||Le!==ui)&&(n.stencilOp(ne,fn,ui),Mt=ne,Qt=fn,Le=ui)},setLocked:function(ne){G=ne},setClear:function(ne){un!==ne&&(n.clearStencil(ne),un=ne)},reset:function(){G=!1,vt=null,Q=null,rt=null,mt=null,Mt=null,Qt=null,Le=null,un=null}}}const s=new t,r=new e,o=new i,a=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,f=[],d=null,_=!1,x=null,m=null,p=null,v=null,M=null,S=null,R=null,A=new Nt(0,0,0),E=0,P=!1,C=null,g=null,y=null,b=null,L=null;const N=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,I=0;const D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(D)[1]),k=I>=1):D.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),k=I>=2);let U=null,Y={};const K=n.getParameter(n.SCISSOR_BOX),tt=n.getParameter(n.VIEWPORT),J=new ce().fromArray(K),q=new ce().fromArray(tt);function H(G,vt,Q,rt){const mt=new Uint8Array(4),Mt=n.createTexture();n.bindTexture(G,Mt),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qt=0;Qt<Q;Qt++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,rt,0,n.RGBA,n.UNSIGNED_BYTE,mt):n.texImage2D(vt+Qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,mt);return Mt}const F={};F[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),F[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),F[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),r.setFunc(nr),It(!1),Gt(uh),Z(n.CULL_FACE),B(ji);function Z(G){l[G]!==!0&&(n.enable(G),l[G]=!0)}function nt(G){l[G]!==!1&&(n.disable(G),l[G]=!1)}function lt(G,vt){return h[G]!==vt?(n.bindFramebuffer(G,vt),h[G]=vt,G===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=vt),G===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function ct(G,vt){let Q=f,rt=!1;if(G){Q=u.get(vt),Q===void 0&&(Q=[],u.set(vt,Q));const mt=G.textures;if(Q.length!==mt.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Mt=0,Qt=mt.length;Mt<Qt;Mt++)Q[Mt]=n.COLOR_ATTACHMENT0+Mt;Q.length=mt.length,rt=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,rt=!0);rt&&n.drawBuffers(Q)}function pt(G){return d!==G?(n.useProgram(G),d=G,!0):!1}const gt={[hs]:n.FUNC_ADD,[Vp]:n.FUNC_SUBTRACT,[Wp]:n.FUNC_REVERSE_SUBTRACT};gt[qp]=n.MIN,gt[Xp]=n.MAX;const St={[Yp]:n.ZERO,[$p]:n.ONE,[jp]:n.SRC_COLOR,[ul]:n.SRC_ALPHA,[em]:n.SRC_ALPHA_SATURATE,[Qp]:n.DST_COLOR,[Zp]:n.DST_ALPHA,[Kp]:n.ONE_MINUS_SRC_COLOR,[fl]:n.ONE_MINUS_SRC_ALPHA,[tm]:n.ONE_MINUS_DST_COLOR,[Jp]:n.ONE_MINUS_DST_ALPHA,[nm]:n.CONSTANT_COLOR,[im]:n.ONE_MINUS_CONSTANT_COLOR,[sm]:n.CONSTANT_ALPHA,[rm]:n.ONE_MINUS_CONSTANT_ALPHA};function B(G,vt,Q,rt,mt,Mt,Qt,Le,un,ne){if(G===ji){_===!0&&(nt(n.BLEND),_=!1);return}if(_===!1&&(Z(n.BLEND),_=!0),G!==Gp){if(G!==x||ne!==P){if((m!==hs||M!==hs)&&(n.blendEquation(n.FUNC_ADD),m=hs,M=hs),ne)switch(G){case Ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fh:n.blendFunc(n.ONE,n.ONE);break;case dh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case dh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}p=null,v=null,S=null,R=null,A.set(0,0,0),E=0,x=G,P=ne}return}mt=mt||vt,Mt=Mt||Q,Qt=Qt||rt,(vt!==m||mt!==M)&&(n.blendEquationSeparate(gt[vt],gt[mt]),m=vt,M=mt),(Q!==p||rt!==v||Mt!==S||Qt!==R)&&(n.blendFuncSeparate(St[Q],St[rt],St[Mt],St[Qt]),p=Q,v=rt,S=Mt,R=Qt),(Le.equals(A)===!1||un!==E)&&(n.blendColor(Le.r,Le.g,Le.b,un),A.copy(Le),E=un),x=G,P=!1}function ue(G,vt){G.side===ei?nt(n.CULL_FACE):Z(n.CULL_FACE);let Q=G.side===hn;vt&&(Q=!Q),It(Q),G.blending===Ks&&G.transparent===!1?B(ji):B(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),r.setFunc(G.depthFunc),r.setTest(G.depthTest),r.setMask(G.depthWrite),s.setMask(G.colorWrite);const rt=G.stencilWrite;o.setTest(rt),rt&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Kt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):nt(n.SAMPLE_ALPHA_TO_COVERAGE)}function It(G){C!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),C=G)}function Gt(G){G!==zp?(Z(n.CULL_FACE),G!==g&&(G===uh?n.cullFace(n.BACK):G===Hp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):nt(n.CULL_FACE),g=G}function Tt(G){G!==y&&(k&&n.lineWidth(G),y=G)}function Kt(G,vt,Q){G?(Z(n.POLYGON_OFFSET_FILL),(b!==vt||L!==Q)&&(n.polygonOffset(vt,Q),b=vt,L=Q)):nt(n.POLYGON_OFFSET_FILL)}function xt(G){G?Z(n.SCISSOR_TEST):nt(n.SCISSOR_TEST)}function O(G){G===void 0&&(G=n.TEXTURE0+N-1),U!==G&&(n.activeTexture(G),U=G)}function w(G,vt,Q){Q===void 0&&(U===null?Q=n.TEXTURE0+N-1:Q=U);let rt=Y[Q];rt===void 0&&(rt={type:void 0,texture:void 0},Y[Q]=rt),(rt.type!==G||rt.texture!==vt)&&(U!==Q&&(n.activeTexture(Q),U=Q),n.bindTexture(G,vt||F[G]),rt.type=G,rt.texture=vt)}function X(){const G=Y[U];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function it(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ot(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function st(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function At(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function yt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Zt(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Et(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Bt(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function zt(G){J.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),J.copy(G))}function wt(G){q.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),q.copy(G))}function Jt(G,vt){let Q=c.get(vt);Q===void 0&&(Q=new WeakMap,c.set(vt,Q));let rt=Q.get(G);rt===void 0&&(rt=n.getUniformBlockIndex(vt,G.name),Q.set(G,rt))}function qt(G,vt){const rt=c.get(vt).get(G);a.get(vt)!==rt&&(n.uniformBlockBinding(vt,rt,G.__bindingPointIndex),a.set(vt,rt))}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},U=null,Y={},h={},u=new WeakMap,f=[],d=null,_=!1,x=null,m=null,p=null,v=null,M=null,S=null,R=null,A=new Nt(0,0,0),E=0,P=!1,C=null,g=null,y=null,b=null,L=null,J.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Z,disable:nt,bindFramebuffer:lt,drawBuffers:ct,useProgram:pt,setBlending:B,setMaterial:ue,setFlipSided:It,setCullFace:Gt,setLineWidth:Tt,setPolygonOffset:Kt,setScissorTest:xt,activeTexture:O,bindTexture:w,unbindTexture:X,compressedTexImage2D:it,compressedTexImage3D:ot,texImage2D:Et,texImage3D:Bt,updateUBOMapping:Jt,uniformBlockBinding:qt,texStorage2D:Zt,texStorage3D:ht,texSubImage2D:st,texSubImage3D:At,compressedTexSubImage2D:ft,compressedTexSubImage3D:yt,scissor:zt,viewport:wt,reset:fe}}function iu(n,t,e,i){const s=Rv(i);switch(e){case Kf:return n*t;case Jf:return n*t;case Qf:return n*t*2;case M0:return n*t/s.components*s.byteLength;case y0:return n*t/s.components*s.byteLength;case td:return n*t*2/s.components*s.byteLength;case S0:return n*t*2/s.components*s.byteLength;case Zf:return n*t*3/s.components*s.byteLength;case Qe:return n*t*4/s.components*s.byteLength;case E0:return n*t*4/s.components*s.byteLength;case jo:case Ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Zo:case Jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case wl:case bl:return Math.max(n,16)*Math.max(t,8)/4;case El:case Al:return Math.max(n,8)*Math.max(t,8)/2;case Tl:case Rl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Cl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Il:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Dl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case kl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case zl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Gl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Qo:case Wl:case ql:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ed:case Xl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Yl:case $l:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rv(n){switch(n){case bi:case Yf:return{byteLength:1,components:1};case Wr:case $f:case dr:return{byteLength:2,components:1};case x0:case v0:return{byteLength:2,components:4};case _s:case g0:case ni:return{byteLength:4,components:1};case jf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Lv(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ot,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(O,w){return d?new OffscreenCanvas(O,w):da("canvas")}function x(O,w,X){let it=1;const ot=xt(O);if((ot.width>X||ot.height>X)&&(it=X/Math.max(ot.width,ot.height)),it<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const st=Math.floor(it*ot.width),At=Math.floor(it*ot.height);u===void 0&&(u=_(st,At));const ft=w?_(st,At):u;return ft.width=st,ft.height=At,ft.getContext("2d").drawImage(O,0,0,st,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+st+"x"+At+")."),ft}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),O;return O}function m(O){return O.generateMipmaps&&O.minFilter!==_n&&O.minFilter!==Ue}function p(O){n.generateMipmap(O)}function v(O,w,X,it,ot=!1){if(O!==null){if(n[O]!==void 0)return n[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let st=w;if(w===n.RED&&(X===n.FLOAT&&(st=n.R32F),X===n.HALF_FLOAT&&(st=n.R16F),X===n.UNSIGNED_BYTE&&(st=n.R8)),w===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(st=n.R8UI),X===n.UNSIGNED_SHORT&&(st=n.R16UI),X===n.UNSIGNED_INT&&(st=n.R32UI),X===n.BYTE&&(st=n.R8I),X===n.SHORT&&(st=n.R16I),X===n.INT&&(st=n.R32I)),w===n.RG&&(X===n.FLOAT&&(st=n.RG32F),X===n.HALF_FLOAT&&(st=n.RG16F),X===n.UNSIGNED_BYTE&&(st=n.RG8)),w===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(st=n.RG8UI),X===n.UNSIGNED_SHORT&&(st=n.RG16UI),X===n.UNSIGNED_INT&&(st=n.RG32UI),X===n.BYTE&&(st=n.RG8I),X===n.SHORT&&(st=n.RG16I),X===n.INT&&(st=n.RG32I)),w===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(st=n.RGB8UI),X===n.UNSIGNED_SHORT&&(st=n.RGB16UI),X===n.UNSIGNED_INT&&(st=n.RGB32UI),X===n.BYTE&&(st=n.RGB8I),X===n.SHORT&&(st=n.RGB16I),X===n.INT&&(st=n.RGB32I)),w===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(st=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(st=n.RGBA16UI),X===n.UNSIGNED_INT&&(st=n.RGBA32UI),X===n.BYTE&&(st=n.RGBA8I),X===n.SHORT&&(st=n.RGBA16I),X===n.INT&&(st=n.RGBA32I)),w===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(st=n.RGB9_E5),w===n.RGBA){const At=ot?la:ae.getTransfer(it);X===n.FLOAT&&(st=n.RGBA32F),X===n.HALF_FLOAT&&(st=n.RGBA16F),X===n.UNSIGNED_BYTE&&(st=At===_e?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(st=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(st=n.RGB5_A1)}return(st===n.R16F||st===n.R32F||st===n.RG16F||st===n.RG32F||st===n.RGBA16F||st===n.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function M(O,w){let X;return O?w===null||w===_s||w===rr?X=n.DEPTH24_STENCIL8:w===ni?X=n.DEPTH32F_STENCIL8:w===Wr&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===_s||w===rr?X=n.DEPTH_COMPONENT24:w===ni?X=n.DEPTH_COMPONENT32F:w===Wr&&(X=n.DEPTH_COMPONENT16),X}function S(O,w){return m(O)===!0||O.isFramebufferTexture&&O.minFilter!==_n&&O.minFilter!==Ue?Math.log2(Math.max(w.width,w.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?w.mipmaps.length:1}function R(O){const w=O.target;w.removeEventListener("dispose",R),E(w),w.isVideoTexture&&h.delete(w)}function A(O){const w=O.target;w.removeEventListener("dispose",A),C(w)}function E(O){const w=i.get(O);if(w.__webglInit===void 0)return;const X=O.source,it=f.get(X);if(it){const ot=it[w.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&P(O),Object.keys(it).length===0&&f.delete(X)}i.remove(O)}function P(O){const w=i.get(O);n.deleteTexture(w.__webglTexture);const X=O.source,it=f.get(X);delete it[w.__cacheKey],o.memory.textures--}function C(O){const w=i.get(O);if(O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(w.__webglFramebuffer[it]))for(let ot=0;ot<w.__webglFramebuffer[it].length;ot++)n.deleteFramebuffer(w.__webglFramebuffer[it][ot]);else n.deleteFramebuffer(w.__webglFramebuffer[it]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[it])}else{if(Array.isArray(w.__webglFramebuffer))for(let it=0;it<w.__webglFramebuffer.length;it++)n.deleteFramebuffer(w.__webglFramebuffer[it]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let it=0;it<w.__webglColorRenderbuffer.length;it++)w.__webglColorRenderbuffer[it]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[it]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const X=O.textures;for(let it=0,ot=X.length;it<ot;it++){const st=i.get(X[it]);st.__webglTexture&&(n.deleteTexture(st.__webglTexture),o.memory.textures--),i.remove(X[it])}i.remove(O)}let g=0;function y(){g=0}function b(){const O=g;return O>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),g+=1,O}function L(O){const w=[];return w.push(O.wrapS),w.push(O.wrapT),w.push(O.wrapR||0),w.push(O.magFilter),w.push(O.minFilter),w.push(O.anisotropy),w.push(O.internalFormat),w.push(O.format),w.push(O.type),w.push(O.generateMipmaps),w.push(O.premultiplyAlpha),w.push(O.flipY),w.push(O.unpackAlignment),w.push(O.colorSpace),w.join()}function N(O,w){const X=i.get(O);if(O.isVideoTexture&&Tt(O),O.isRenderTargetTexture===!1&&O.version>0&&X.__version!==O.version){const it=O.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(X,O,w);return}}e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+w)}function k(O,w){const X=i.get(O);if(O.version>0&&X.__version!==O.version){q(X,O,w);return}e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+w)}function I(O,w){const X=i.get(O);if(O.version>0&&X.__version!==O.version){q(X,O,w);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+w)}function D(O,w){const X=i.get(O);if(O.version>0&&X.__version!==O.version){H(X,O,w);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+w)}const U={[ms]:n.REPEAT,[Yi]:n.CLAMP_TO_EDGE,[Sl]:n.MIRRORED_REPEAT},Y={[_n]:n.NEAREST,[pm]:n.NEAREST_MIPMAP_NEAREST,[lo]:n.NEAREST_MIPMAP_LINEAR,[Ue]:n.LINEAR,[Ga]:n.LINEAR_MIPMAP_NEAREST,[Xn]:n.LINEAR_MIPMAP_LINEAR},K={[xm]:n.NEVER,[wm]:n.ALWAYS,[vm]:n.LESS,[id]:n.LEQUAL,[Mm]:n.EQUAL,[Em]:n.GEQUAL,[ym]:n.GREATER,[Sm]:n.NOTEQUAL};function tt(O,w){if(w.type===ni&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Ue||w.magFilter===Ga||w.magFilter===lo||w.magFilter===Xn||w.minFilter===Ue||w.minFilter===Ga||w.minFilter===lo||w.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(O,n.TEXTURE_WRAP_S,U[w.wrapS]),n.texParameteri(O,n.TEXTURE_WRAP_T,U[w.wrapT]),(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)&&n.texParameteri(O,n.TEXTURE_WRAP_R,U[w.wrapR]),n.texParameteri(O,n.TEXTURE_MAG_FILTER,Y[w.magFilter]),n.texParameteri(O,n.TEXTURE_MIN_FILTER,Y[w.minFilter]),w.compareFunction&&(n.texParameteri(O,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(O,n.TEXTURE_COMPARE_FUNC,K[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===_n||w.minFilter!==lo&&w.minFilter!==Xn||w.type===ni&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");n.texParameterf(O,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function J(O,w){let X=!1;O.__webglInit===void 0&&(O.__webglInit=!0,w.addEventListener("dispose",R));const it=w.source;let ot=f.get(it);ot===void 0&&(ot={},f.set(it,ot));const st=L(w);if(st!==O.__cacheKey){ot[st]===void 0&&(ot[st]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ot[st].usedTimes++;const At=ot[O.__cacheKey];At!==void 0&&(ot[O.__cacheKey].usedTimes--,At.usedTimes===0&&P(w)),O.__cacheKey=st,O.__webglTexture=ot[st].texture}return X}function q(O,w,X){let it=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(it=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(it=n.TEXTURE_3D);const ot=J(O,w),st=w.source;e.bindTexture(it,O.__webglTexture,n.TEXTURE0+X);const At=i.get(st);if(st.version!==At.__version||ot===!0){e.activeTexture(n.TEXTURE0+X);const ft=ae.getPrimaries(ae.workingColorSpace),yt=w.colorSpace===qi?null:ae.getPrimaries(w.colorSpace),Zt=w.colorSpace===qi||ft===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let ht=x(w.image,!1,s.maxTextureSize);ht=Kt(w,ht);const Et=r.convert(w.format,w.colorSpace),Bt=r.convert(w.type);let zt=v(w.internalFormat,Et,Bt,w.colorSpace,w.isVideoTexture);tt(it,w);let wt;const Jt=w.mipmaps,qt=w.isVideoTexture!==!0,fe=At.__version===void 0||ot===!0,G=st.dataReady,vt=S(w,ht);if(w.isDepthTexture)zt=M(w.format===or,w.type),fe&&(qt?e.texStorage2D(n.TEXTURE_2D,1,zt,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,zt,ht.width,ht.height,0,Et,Bt,null));else if(w.isDataTexture)if(Jt.length>0){qt&&fe&&e.texStorage2D(n.TEXTURE_2D,vt,zt,Jt[0].width,Jt[0].height);for(let Q=0,rt=Jt.length;Q<rt;Q++)wt=Jt[Q],qt?G&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,wt.width,wt.height,Et,Bt,wt.data):e.texImage2D(n.TEXTURE_2D,Q,zt,wt.width,wt.height,0,Et,Bt,wt.data);w.generateMipmaps=!1}else qt?(fe&&e.texStorage2D(n.TEXTURE_2D,vt,zt,ht.width,ht.height),G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht.width,ht.height,Et,Bt,ht.data)):e.texImage2D(n.TEXTURE_2D,0,zt,ht.width,ht.height,0,Et,Bt,ht.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){qt&&fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,zt,Jt[0].width,Jt[0].height,ht.depth);for(let Q=0,rt=Jt.length;Q<rt;Q++)if(wt=Jt[Q],w.format!==Qe)if(Et!==null)if(qt){if(G)if(w.layerUpdates.size>0){const mt=iu(wt.width,wt.height,w.format,w.type);for(const Mt of w.layerUpdates){const Qt=wt.data.subarray(Mt*mt/wt.data.BYTES_PER_ELEMENT,(Mt+1)*mt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Mt,wt.width,wt.height,1,Et,Qt,0,0)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,wt.width,wt.height,ht.depth,Et,wt.data,0,0)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,zt,wt.width,wt.height,ht.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,wt.width,wt.height,ht.depth,Et,Bt,wt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,zt,wt.width,wt.height,ht.depth,0,Et,Bt,wt.data)}else{qt&&fe&&e.texStorage2D(n.TEXTURE_2D,vt,zt,Jt[0].width,Jt[0].height);for(let Q=0,rt=Jt.length;Q<rt;Q++)wt=Jt[Q],w.format!==Qe?Et!==null?qt?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,wt.width,wt.height,Et,wt.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,zt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?G&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,wt.width,wt.height,Et,Bt,wt.data):e.texImage2D(n.TEXTURE_2D,Q,zt,wt.width,wt.height,0,Et,Bt,wt.data)}else if(w.isDataArrayTexture)if(qt){if(fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,zt,ht.width,ht.height,ht.depth),G)if(w.layerUpdates.size>0){const Q=iu(ht.width,ht.height,w.format,w.type);for(const rt of w.layerUpdates){const mt=ht.data.subarray(rt*Q/ht.data.BYTES_PER_ELEMENT,(rt+1)*Q/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,rt,ht.width,ht.height,1,Et,Bt,mt)}w.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,Et,Bt,ht.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,zt,ht.width,ht.height,ht.depth,0,Et,Bt,ht.data);else if(w.isData3DTexture)qt?(fe&&e.texStorage3D(n.TEXTURE_3D,vt,zt,ht.width,ht.height,ht.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,Et,Bt,ht.data)):e.texImage3D(n.TEXTURE_3D,0,zt,ht.width,ht.height,ht.depth,0,Et,Bt,ht.data);else if(w.isFramebufferTexture){if(fe)if(qt)e.texStorage2D(n.TEXTURE_2D,vt,zt,ht.width,ht.height);else{let Q=ht.width,rt=ht.height;for(let mt=0;mt<vt;mt++)e.texImage2D(n.TEXTURE_2D,mt,zt,Q,rt,0,Et,Bt,null),Q>>=1,rt>>=1}}else if(Jt.length>0){if(qt&&fe){const Q=xt(Jt[0]);e.texStorage2D(n.TEXTURE_2D,vt,zt,Q.width,Q.height)}for(let Q=0,rt=Jt.length;Q<rt;Q++)wt=Jt[Q],qt?G&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,Et,Bt,wt):e.texImage2D(n.TEXTURE_2D,Q,zt,Et,Bt,wt);w.generateMipmaps=!1}else if(qt){if(fe){const Q=xt(ht);e.texStorage2D(n.TEXTURE_2D,vt,zt,Q.width,Q.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Et,Bt,ht)}else e.texImage2D(n.TEXTURE_2D,0,zt,Et,Bt,ht);m(w)&&p(it),At.__version=st.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function H(O,w,X){if(w.image.length!==6)return;const it=J(O,w),ot=w.source;e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+X);const st=i.get(ot);if(ot.version!==st.__version||it===!0){e.activeTexture(n.TEXTURE0+X);const At=ae.getPrimaries(ae.workingColorSpace),ft=w.colorSpace===qi?null:ae.getPrimaries(w.colorSpace),yt=w.colorSpace===qi||At===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Zt=w.isCompressedTexture||w.image[0].isCompressedTexture,ht=w.image[0]&&w.image[0].isDataTexture,Et=[];for(let rt=0;rt<6;rt++)!Zt&&!ht?Et[rt]=x(w.image[rt],!0,s.maxCubemapSize):Et[rt]=ht?w.image[rt].image:w.image[rt],Et[rt]=Kt(w,Et[rt]);const Bt=Et[0],zt=r.convert(w.format,w.colorSpace),wt=r.convert(w.type),Jt=v(w.internalFormat,zt,wt,w.colorSpace),qt=w.isVideoTexture!==!0,fe=st.__version===void 0||it===!0,G=ot.dataReady;let vt=S(w,Bt);tt(n.TEXTURE_CUBE_MAP,w);let Q;if(Zt){qt&&fe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Jt,Bt.width,Bt.height);for(let rt=0;rt<6;rt++){Q=Et[rt].mipmaps;for(let mt=0;mt<Q.length;mt++){const Mt=Q[mt];w.format!==Qe?zt!==null?qt?G&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt,0,0,Mt.width,Mt.height,zt,Mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt,Jt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt,0,0,Mt.width,Mt.height,zt,wt,Mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt,Jt,Mt.width,Mt.height,0,zt,wt,Mt.data)}}}else{if(Q=w.mipmaps,qt&&fe){Q.length>0&&vt++;const rt=xt(Et[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Jt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(ht){qt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Et[rt].width,Et[rt].height,zt,wt,Et[rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Jt,Et[rt].width,Et[rt].height,0,zt,wt,Et[rt].data);for(let mt=0;mt<Q.length;mt++){const Qt=Q[mt].image[rt].image;qt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt+1,0,0,Qt.width,Qt.height,zt,wt,Qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt+1,Jt,Qt.width,Qt.height,0,zt,wt,Qt.data)}}else{qt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,zt,wt,Et[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Jt,zt,wt,Et[rt]);for(let mt=0;mt<Q.length;mt++){const Mt=Q[mt];qt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt+1,0,0,zt,wt,Mt.image[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt+1,Jt,zt,wt,Mt.image[rt])}}}m(w)&&p(n.TEXTURE_CUBE_MAP),st.__version=ot.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function F(O,w,X,it,ot,st){const At=r.convert(X.format,X.colorSpace),ft=r.convert(X.type),yt=v(X.internalFormat,At,ft,X.colorSpace);if(!i.get(w).__hasExternalTextures){const ht=Math.max(1,w.width>>st),Et=Math.max(1,w.height>>st);ot===n.TEXTURE_3D||ot===n.TEXTURE_2D_ARRAY?e.texImage3D(ot,st,yt,ht,Et,w.depth,0,At,ft,null):e.texImage2D(ot,st,yt,ht,Et,0,At,ft,null)}e.bindFramebuffer(n.FRAMEBUFFER,O),Gt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,ot,i.get(X).__webglTexture,0,It(w)):(ot===n.TEXTURE_2D||ot>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,it,ot,i.get(X).__webglTexture,st),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(O,w,X){if(n.bindRenderbuffer(n.RENDERBUFFER,O),w.depthBuffer){const it=w.depthTexture,ot=it&&it.isDepthTexture?it.type:null,st=M(w.stencilBuffer,ot),At=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=It(w);Gt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft,st,w.width,w.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,st,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,st,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,At,n.RENDERBUFFER,O)}else{const it=w.textures;for(let ot=0;ot<it.length;ot++){const st=it[ot],At=r.convert(st.format,st.colorSpace),ft=r.convert(st.type),yt=v(st.internalFormat,At,ft,st.colorSpace),Zt=It(w);X&&Gt(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Zt,yt,w.width,w.height):Gt(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Zt,yt,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,yt,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function nt(O,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,O),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);const it=i.get(w.depthTexture).__webglTexture,ot=It(w);if(w.depthTexture.format===Zs)Gt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0);else if(w.depthTexture.format===or)Gt(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function lt(O){const w=i.get(O),X=O.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==O.depthTexture){const it=O.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),it){const ot=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,it.removeEventListener("dispose",ot)};it.addEventListener("dispose",ot),w.__depthDisposeCallback=ot}w.__boundDepthTexture=it}if(O.depthTexture&&!w.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");nt(w.__webglFramebuffer,O)}else if(X){w.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[it]),w.__webglDepthbuffer[it]===void 0)w.__webglDepthbuffer[it]=n.createRenderbuffer(),Z(w.__webglDepthbuffer[it],O,!1);else{const ot=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=w.__webglDepthbuffer[it];n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,st)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Z(w.__webglDepthbuffer,O,!1);else{const it=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,ot)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(O,w,X){const it=i.get(O);w!==void 0&&F(it.__webglFramebuffer,O,O.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&lt(O)}function pt(O){const w=O.texture,X=i.get(O),it=i.get(w);O.addEventListener("dispose",A);const ot=O.textures,st=O.isWebGLCubeRenderTarget===!0,At=ot.length>1;if(At||(it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture()),it.__version=w.version,o.memory.textures++),st){X.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[ft]=[];for(let yt=0;yt<w.mipmaps.length;yt++)X.__webglFramebuffer[ft][yt]=n.createFramebuffer()}else X.__webglFramebuffer[ft]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let ft=0;ft<w.mipmaps.length;ft++)X.__webglFramebuffer[ft]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(At)for(let ft=0,yt=ot.length;ft<yt;ft++){const Zt=i.get(ot[ft]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=n.createTexture(),o.memory.textures++)}if(O.samples>0&&Gt(O)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ft=0;ft<ot.length;ft++){const yt=ot[ft];X.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ft]);const Zt=r.convert(yt.format,yt.colorSpace),ht=r.convert(yt.type),Et=v(yt.internalFormat,Zt,ht,yt.colorSpace,O.isXRRenderTarget===!0),Bt=It(O);n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,Et,O.width,O.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,X.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),O.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),Z(X.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(st){e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),tt(n.TEXTURE_CUBE_MAP,w);for(let ft=0;ft<6;ft++)if(w.mipmaps&&w.mipmaps.length>0)for(let yt=0;yt<w.mipmaps.length;yt++)F(X.__webglFramebuffer[ft][yt],O,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,yt);else F(X.__webglFramebuffer[ft],O,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(w)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ft=0,yt=ot.length;ft<yt;ft++){const Zt=ot[ft],ht=i.get(Zt);e.bindTexture(n.TEXTURE_2D,ht.__webglTexture),tt(n.TEXTURE_2D,Zt),F(X.__webglFramebuffer,O,Zt,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,0),m(Zt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ft=n.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ft=O.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,it.__webglTexture),tt(ft,w),w.mipmaps&&w.mipmaps.length>0)for(let yt=0;yt<w.mipmaps.length;yt++)F(X.__webglFramebuffer[yt],O,w,n.COLOR_ATTACHMENT0,ft,yt);else F(X.__webglFramebuffer,O,w,n.COLOR_ATTACHMENT0,ft,0);m(w)&&p(ft),e.unbindTexture()}O.depthBuffer&&lt(O)}function gt(O){const w=O.textures;for(let X=0,it=w.length;X<it;X++){const ot=w[X];if(m(ot)){const st=O.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,At=i.get(ot).__webglTexture;e.bindTexture(st,At),p(st),e.unbindTexture()}}}const St=[],B=[];function ue(O){if(O.samples>0){if(Gt(O)===!1){const w=O.textures,X=O.width,it=O.height;let ot=n.COLOR_BUFFER_BIT;const st=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=i.get(O),ft=w.length>1;if(ft)for(let yt=0;yt<w.length;yt++)e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let yt=0;yt<w.length;yt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ot|=n.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ot|=n.STENCIL_BUFFER_BIT)),ft){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,At.__webglColorRenderbuffer[yt]);const Zt=i.get(w[yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Zt,0)}n.blitFramebuffer(0,0,X,it,0,0,X,it,ot,n.NEAREST),c===!0&&(St.length=0,B.length=0,St.push(n.COLOR_ATTACHMENT0+yt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(St.push(st),B.push(st),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,B)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,St))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let yt=0;yt<w.length;yt++){e.bindFramebuffer(n.FRAMEBUFFER,At.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,At.__webglColorRenderbuffer[yt]);const Zt=i.get(w[yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,At.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,Zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&c){const w=O.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function It(O){return Math.min(s.maxSamples,O.samples)}function Gt(O){const w=i.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Tt(O){const w=o.render.frame;h.get(O)!==w&&(h.set(O,w),O.update())}function Kt(O,w){const X=O.colorSpace,it=O.format,ot=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||X!==Li&&X!==qi&&(ae.getTransfer(X)===_e?(it!==Qe||ot!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),w}function xt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=b,this.resetTextureUnits=y,this.setTexture2D=N,this.setTexture2DArray=k,this.setTexture3D=I,this.setTextureCube=D,this.rebindTextures=ct,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=F,this.useMultisampledRTT=Gt}function Cv(n,t){function e(i,s=qi){let r;const o=ae.getTransfer(s);if(i===bi)return n.UNSIGNED_BYTE;if(i===x0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===v0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yf)return n.BYTE;if(i===$f)return n.SHORT;if(i===Wr)return n.UNSIGNED_SHORT;if(i===g0)return n.INT;if(i===_s)return n.UNSIGNED_INT;if(i===ni)return n.FLOAT;if(i===dr)return n.HALF_FLOAT;if(i===Kf)return n.ALPHA;if(i===Zf)return n.RGB;if(i===Qe)return n.RGBA;if(i===Jf)return n.LUMINANCE;if(i===Qf)return n.LUMINANCE_ALPHA;if(i===Zs)return n.DEPTH_COMPONENT;if(i===or)return n.DEPTH_STENCIL;if(i===M0)return n.RED;if(i===y0)return n.RED_INTEGER;if(i===td)return n.RG;if(i===S0)return n.RG_INTEGER;if(i===E0)return n.RGBA_INTEGER;if(i===jo||i===Ko||i===Zo||i===Jo)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===El||i===wl||i===Al||i===bl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===El)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tl||i===Rl||i===Ll)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Tl||i===Rl)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ll)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Cl||i===Il||i===Pl||i===Dl||i===Nl||i===Ol||i===Ul||i===Fl||i===kl||i===Bl||i===zl||i===Hl||i===Gl||i===Vl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Cl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Il)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Pl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ol)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ul)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qo||i===Wl||i===ql)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Qo)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ed||i===Xl||i===Yl||i===$l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Iv extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ve extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pv={type:"move"};class xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ve;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Dv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nv=`
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

}`;class Ov{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new tn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ti({vertexShader:Dv,fragmentShader:Nv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dt(new Ci(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Uv extends pr{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,_=null;const x=new Ov,m=e.getContextAttributes();let p=null,v=null;const M=[],S=[],R=new Ot;let A=null;const E=new cn;E.layers.enable(1),E.viewport=new ce;const P=new cn;P.layers.enable(2),P.viewport=new ce;const C=[E,P],g=new Iv;g.layers.enable(1),g.layers.enable(2);let y=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let F=M[H];return F===void 0&&(F=new xc,M[H]=F),F.getTargetRaySpace()},this.getControllerGrip=function(H){let F=M[H];return F===void 0&&(F=new xc,M[H]=F),F.getGripSpace()},this.getHand=function(H){let F=M[H];return F===void 0&&(F=new xc,M[H]=F),F.getHandSpace()};function L(H){const F=S.indexOf(H.inputSource);if(F===-1)return;const Z=M[F];Z!==void 0&&(Z.update(H.inputSource,H.frame,l||o),Z.dispatchEvent({type:H.type,data:H.inputSource}))}function N(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",k);for(let H=0;H<M.length;H++){const F=S[H];F!==null&&(S[H]=null,M[H].disconnect(F))}y=null,b=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,v=null,q.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",N),s.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const F={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,F),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ji(d.framebufferWidth,d.framebufferHeight,{format:Qe,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let F=null,Z=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,F=m.stencil?or:Zs,Z=m.stencil?rr:_s);const lt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(lt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Ji(f.textureWidth,f.textureHeight,{format:Qe,type:bi,depthTexture:new _d(f.textureWidth,f.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),q.setContext(s),q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function k(H){for(let F=0;F<H.removed.length;F++){const Z=H.removed[F],nt=S.indexOf(Z);nt>=0&&(S[nt]=null,M[nt].disconnect(Z))}for(let F=0;F<H.added.length;F++){const Z=H.added[F];let nt=S.indexOf(Z);if(nt===-1){for(let ct=0;ct<M.length;ct++)if(ct>=S.length){S.push(Z),nt=ct;break}else if(S[ct]===null){S[ct]=Z,nt=ct;break}if(nt===-1)break}const lt=M[nt];lt&&lt.connect(Z)}}const I=new z,D=new z;function U(H,F,Z){I.setFromMatrixPosition(F.matrixWorld),D.setFromMatrixPosition(Z.matrixWorld);const nt=I.distanceTo(D),lt=F.projectionMatrix.elements,ct=Z.projectionMatrix.elements,pt=lt[14]/(lt[10]-1),gt=lt[14]/(lt[10]+1),St=(lt[9]+1)/lt[5],B=(lt[9]-1)/lt[5],ue=(lt[8]-1)/lt[0],It=(ct[8]+1)/ct[0],Gt=pt*ue,Tt=pt*It,Kt=nt/(-ue+It),xt=Kt*-ue;if(F.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(xt),H.translateZ(Kt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),lt[10]===-1)H.projectionMatrix.copy(F.projectionMatrix),H.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{const O=pt+Kt,w=gt+Kt,X=Gt-xt,it=Tt+(nt-xt),ot=St*gt/w*O,st=B*gt/w*O;H.projectionMatrix.makePerspective(X,it,ot,st,O,w),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Y(H,F){F===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(F.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let F=H.near,Z=H.far;x.texture!==null&&(x.depthNear>0&&(F=x.depthNear),x.depthFar>0&&(Z=x.depthFar)),g.near=P.near=E.near=F,g.far=P.far=E.far=Z,(y!==g.near||b!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),y=g.near,b=g.far);const nt=H.parent,lt=g.cameras;Y(g,nt);for(let ct=0;ct<lt.length;ct++)Y(lt[ct],nt);lt.length===2?U(g,E,P):g.projectionMatrix.copy(E.projectionMatrix),K(H,g,nt)};function K(H,F,Z){Z===null?H.matrix.copy(F.matrixWorld):(H.matrix.copy(Z.matrixWorld),H.matrix.invert(),H.matrix.multiply(F.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(F.projectionMatrix),H.projectionMatrixInverse.copy(F.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=jl*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(H){c=H,f!==null&&(f.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(g)};let tt=null;function J(H,F){if(h=F.getViewerPose(l||o),_=F,h!==null){const Z=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let nt=!1;Z.length!==g.cameras.length&&(g.cameras.length=0,nt=!0);for(let ct=0;ct<Z.length;ct++){const pt=Z[ct];let gt=null;if(d!==null)gt=d.getViewport(pt);else{const B=u.getViewSubImage(f,pt);gt=B.viewport,ct===0&&(t.setRenderTargetTextures(v,B.colorTexture,f.ignoreDepthValues?void 0:B.depthStencilTexture),t.setRenderTarget(v))}let St=C[ct];St===void 0&&(St=new cn,St.layers.enable(ct),St.viewport=new ce,C[ct]=St),St.matrix.fromArray(pt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(pt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(gt.x,gt.y,gt.width,gt.height),ct===0&&(g.matrix.copy(St.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),nt===!0&&g.cameras.push(St)}const lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")){const ct=u.getDepthInformation(Z[0]);ct&&ct.isValid&&ct.texture&&x.init(t,ct,s.renderState)}}for(let Z=0;Z<M.length;Z++){const nt=S[Z],lt=M[Z];nt!==null&&lt!==void 0&&lt.update(nt,F,l||o)}tt&&tt(H,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),_=null}const q=new pd;q.setAnimationLoop(J),this.setAnimationLoop=function(H){tt=H},this.dispose=function(){}}}const os=new $n,Fv=new Vt;function kv(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ud(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,M,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),M=v.envMap,S=v.envMapRotation;M&&(m.envMap.value=M,os.copy(S),os.x*=-1,os.y*=-1,os.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),m.envMapRotation.value.setFromMatrix4(Fv.makeRotationFromEuler(os)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Bv(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const S=M.program;i.uniformBlockBinding(v,S)}function l(v,M){let S=s[v.id];S===void 0&&(_(v),S=h(v),s[v.id]=S,v.addEventListener("dispose",m));const R=M.program;i.updateUBOMapping(v,R);const A=t.render.frame;r[v.id]!==A&&(f(v),r[v.id]=A)}function h(v){const M=u();v.__bindingPointIndex=M;const S=n.createBuffer(),R=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const M=s[v.id],S=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let A=0,E=S.length;A<E;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let C=0,g=P.length;C<g;C++){const y=P[C];if(d(y,A,C,R)===!0){const b=y.__offset,L=Array.isArray(y.value)?y.value:[y.value];let N=0;for(let k=0;k<L.length;k++){const I=L[k],D=x(I);typeof I=="number"||typeof I=="boolean"?(y.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,b+N,y.__data)):I.isMatrix3?(y.__data[0]=I.elements[0],y.__data[1]=I.elements[1],y.__data[2]=I.elements[2],y.__data[3]=0,y.__data[4]=I.elements[3],y.__data[5]=I.elements[4],y.__data[6]=I.elements[5],y.__data[7]=0,y.__data[8]=I.elements[6],y.__data[9]=I.elements[7],y.__data[10]=I.elements[8],y.__data[11]=0):(I.toArray(y.__data,N),N+=D.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,b,y.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(v,M,S,R){const A=v.value,E=M+"_"+S;if(R[E]===void 0)return typeof A=="number"||typeof A=="boolean"?R[E]=A:R[E]=A.clone(),!0;{const P=R[E];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[E]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(v){const M=v.uniforms;let S=0;const R=16;for(let E=0,P=M.length;E<P;E++){const C=Array.isArray(M[E])?M[E]:[M[E]];for(let g=0,y=C.length;g<y;g++){const b=C[g],L=Array.isArray(b.value)?b.value:[b.value];for(let N=0,k=L.length;N<k;N++){const I=L[N],D=x(I),U=S%R,Y=U%D.boundary,K=U+Y;S+=Y,K!==0&&R-K<D.storage&&(S+=R-K),b.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=S,S+=D.storage}}}const A=S%R;return A>0&&(S+=R-A),v.__size=S,v.__cache={},this}function x(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class zv{constructor(t={}){const{canvas:e=bm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),_=new Int32Array(4);let x=null,m=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=Ki,this.toneMappingExposure=1;const M=this;let S=!1,R=0,A=0,E=null,P=-1,C=null;const g=new ce,y=new ce;let b=null;const L=new Nt(0);let N=0,k=e.width,I=e.height,D=1,U=null,Y=null;const K=new ce(0,0,k,I),tt=new ce(0,0,k,I);let J=!1;const q=new Qr;let H=!1,F=!1;const Z=new Vt,nt=new Vt,lt=new z,ct=new ce,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function St(){return E===null?D:1}let B=i;function ue(T,V){return e.getContext(T,V)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_0}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),B===null){const V="webgl2";if(B=ue(V,T),B===null)throw ue(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let It,Gt,Tt,Kt,xt,O,w,X,it,ot,st,At,ft,yt,Zt,ht,Et,Bt,zt,wt,Jt,qt,fe,G;function vt(){It=new q1(B),It.init(),qt=new Cv(B,It),Gt=new B1(B,It,t,qt),Tt=new Tv(B),Gt.reverseDepthBuffer&&Tt.buffers.depth.setReversed(!0),Kt=new $1(B),xt=new fv,O=new Lv(B,It,Tt,xt,Gt,qt,Kt),w=new H1(M),X=new W1(M),it=new e_(B),fe=new F1(B,it),ot=new X1(B,it,Kt,fe),st=new K1(B,ot,it,Kt),zt=new j1(B,Gt,O),ht=new z1(xt),At=new uv(M,w,X,It,Gt,fe,ht),ft=new kv(M,xt),yt=new pv,Zt=new Mv(It),Bt=new U1(M,w,X,Tt,st,f,c),Et=new Av(M,st,Gt),G=new Bv(B,Kt,Gt,Tt),wt=new k1(B,It,Kt),Jt=new Y1(B,It,Kt),Kt.programs=At.programs,M.capabilities=Gt,M.extensions=It,M.properties=xt,M.renderLists=yt,M.shadowMap=Et,M.state=Tt,M.info=Kt}vt();const Q=new Uv(M,B);this.xr=Q,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=It.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=It.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(T){T!==void 0&&(D=T,this.setSize(k,I,!1))},this.getSize=function(T){return T.set(k,I)},this.setSize=function(T,V,$=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=T,I=V,e.width=Math.floor(T*D),e.height=Math.floor(V*D),$===!0&&(e.style.width=T+"px",e.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(k*D,I*D).floor()},this.setDrawingBufferSize=function(T,V,$){k=T,I=V,D=$,e.width=Math.floor(T*$),e.height=Math.floor(V*$),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(g)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,V,$,j){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,V,$,j),Tt.viewport(g.copy(K).multiplyScalar(D).round())},this.getScissor=function(T){return T.copy(tt)},this.setScissor=function(T,V,$,j){T.isVector4?tt.set(T.x,T.y,T.z,T.w):tt.set(T,V,$,j),Tt.scissor(y.copy(tt).multiplyScalar(D).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(T){Tt.setScissorTest(J=T)},this.setOpaqueSort=function(T){U=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(T=!0,V=!0,$=!0){let j=0;if(T){let W=!1;if(E!==null){const ut=E.texture.format;W=ut===E0||ut===S0||ut===y0}if(W){const ut=E.texture.type,_t=ut===bi||ut===_s||ut===Wr||ut===rr||ut===x0||ut===v0,bt=Bt.getClearColor(),Rt=Bt.getClearAlpha(),Ut=bt.r,Ft=bt.g,Lt=bt.b;_t?(d[0]=Ut,d[1]=Ft,d[2]=Lt,d[3]=Rt,B.clearBufferuiv(B.COLOR,0,d)):(_[0]=Ut,_[1]=Ft,_[2]=Lt,_[3]=Rt,B.clearBufferiv(B.COLOR,0,_))}else j|=B.COLOR_BUFFER_BIT}V&&(j|=B.DEPTH_BUFFER_BIT,B.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),$&&(j|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),yt.dispose(),Zt.dispose(),xt.dispose(),w.dispose(),X.dispose(),st.dispose(),fe.dispose(),G.dispose(),At.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",ih),Q.removeEventListener("sessionend",sh),ts.stop()};function rt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=Kt.autoReset,V=Et.enabled,$=Et.autoUpdate,j=Et.needsUpdate,W=Et.type;vt(),Kt.autoReset=T,Et.enabled=V,Et.autoUpdate=$,Et.needsUpdate=j,Et.type=W}function Mt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Qt(T){const V=T.target;V.removeEventListener("dispose",Qt),Le(V)}function Le(T){un(T),xt.remove(T)}function un(T){const V=xt.get(T).programs;V!==void 0&&(V.forEach(function($){At.releaseProgram($)}),T.isShaderMaterial&&At.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,$,j,W,ut){V===null&&(V=pt);const _t=W.isMesh&&W.matrixWorld.determinant()<0,bt=Up(T,V,$,j,W);Tt.setMaterial(j,_t);let Rt=$.index,Ut=1;if(j.wireframe===!0){if(Rt=ot.getWireframeAttribute($),Rt===void 0)return;Ut=2}const Ft=$.drawRange,Lt=$.attributes.position;let he=Ft.start*Ut,me=(Ft.start+Ft.count)*Ut;ut!==null&&(he=Math.max(he,ut.start*Ut),me=Math.min(me,(ut.start+ut.count)*Ut)),Rt!==null?(he=Math.max(he,0),me=Math.min(me,Rt.count)):Lt!=null&&(he=Math.max(he,0),me=Math.min(me,Lt.count));const Ee=me-he;if(Ee<0||Ee===1/0)return;fe.setup(W,j,bt,$,Rt);let vn,re=wt;if(Rt!==null&&(vn=it.get(Rt),re=Jt,re.setIndex(vn)),W.isMesh)j.wireframe===!0?(Tt.setLineWidth(j.wireframeLinewidth*St()),re.setMode(B.LINES)):re.setMode(B.TRIANGLES);else if(W.isLine){let Ct=j.linewidth;Ct===void 0&&(Ct=1),Tt.setLineWidth(Ct*St()),W.isLineSegments?re.setMode(B.LINES):W.isLineLoop?re.setMode(B.LINE_LOOP):re.setMode(B.LINE_STRIP)}else W.isPoints?re.setMode(B.POINTS):W.isSprite&&re.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)re.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))re.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ct=W._multiDrawStarts,Ve=W._multiDrawCounts,oe=W._multiDrawCount,Un=Rt?it.get(Rt).bytesPerElement:1,Es=xt.get(j).currentProgram.getUniforms();for(let Mn=0;Mn<oe;Mn++)Es.setValue(B,"_gl_DrawID",Mn),re.render(Ct[Mn]/Un,Ve[Mn])}else if(W.isInstancedMesh)re.renderInstances(he,Ee,W.count);else if($.isInstancedBufferGeometry){const Ct=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ve=Math.min($.instanceCount,Ct);re.renderInstances(he,Ee,Ve)}else re.render(he,Ee)};function ne(T,V,$){T.transparent===!0&&T.side===ei&&T.forceSinglePass===!1?(T.side=hn,T.needsUpdate=!0,co(T,V,$),T.side=Yn,T.needsUpdate=!0,co(T,V,$),T.side=ei):co(T,V,$)}this.compile=function(T,V,$=null){$===null&&($=T),m=Zt.get($),m.init(V),v.push(m),$.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),T!==$&&T.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();const j=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ut=W.material;if(ut)if(Array.isArray(ut))for(let _t=0;_t<ut.length;_t++){const bt=ut[_t];ne(bt,$,W),j.add(bt)}else ne(ut,$,W),j.add(ut)}),v.pop(),m=null,j},this.compileAsync=function(T,V,$=null){const j=this.compile(T,V,$);return new Promise(W=>{function ut(){if(j.forEach(function(_t){xt.get(_t).currentProgram.isReady()&&j.delete(_t)}),j.size===0){W(T);return}setTimeout(ut,10)}It.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let fn=null;function ui(T){fn&&fn(T)}function ih(){ts.stop()}function sh(){ts.start()}const ts=new pd;ts.setAnimationLoop(ui),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(T){fn=T,Q.setAnimationLoop(T),T===null?ts.stop():ts.start()},Q.addEventListener("sessionstart",ih),Q.addEventListener("sessionend",sh),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(V),V=Q.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,V,E),m=Zt.get(T,v.length),m.init(V),v.push(m),nt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),q.setFromProjectionMatrix(nt),F=this.localClippingEnabled,H=ht.init(this.clippingPlanes,F),x=yt.get(T,p.length),x.init(),p.push(x),Q.enabled===!0&&Q.isPresenting===!0){const ut=M.xr.getDepthSensingMesh();ut!==null&&ka(ut,V,-1/0,M.sortObjects)}ka(T,V,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(U,Y),gt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,gt&&Bt.addToRenderList(x,T),this.info.render.frame++,H===!0&&ht.beginShadows();const $=m.state.shadowsArray;Et.render($,T,V),H===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=x.opaque,W=x.transmissive;if(m.setupLights(),V.isArrayCamera){const ut=V.cameras;if(W.length>0)for(let _t=0,bt=ut.length;_t<bt;_t++){const Rt=ut[_t];oh(j,W,T,Rt)}gt&&Bt.render(T);for(let _t=0,bt=ut.length;_t<bt;_t++){const Rt=ut[_t];rh(x,T,Rt,Rt.viewport)}}else W.length>0&&oh(j,W,T,V),gt&&Bt.render(T),rh(x,T,V);E!==null&&(O.updateMultisampleRenderTarget(E),O.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(M,T,V),fe.resetDefaultState(),P=-1,C=null,v.pop(),v.length>0?(m=v[v.length-1],H===!0&&ht.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function ka(T,V,$,j){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){j&&ct.setFromMatrixPosition(T.matrixWorld).applyMatrix4(nt);const _t=st.update(T),bt=T.material;bt.visible&&x.push(T,_t,bt,$,ct.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){const _t=st.update(T),bt=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ct.copy(T.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),ct.copy(_t.boundingSphere.center)),ct.applyMatrix4(T.matrixWorld).applyMatrix4(nt)),Array.isArray(bt)){const Rt=_t.groups;for(let Ut=0,Ft=Rt.length;Ut<Ft;Ut++){const Lt=Rt[Ut],he=bt[Lt.materialIndex];he&&he.visible&&x.push(T,_t,he,$,ct.z,Lt)}}else bt.visible&&x.push(T,_t,bt,$,ct.z,null)}}const ut=T.children;for(let _t=0,bt=ut.length;_t<bt;_t++)ka(ut[_t],V,$,j)}function rh(T,V,$,j){const W=T.opaque,ut=T.transmissive,_t=T.transparent;m.setupLightsView($),H===!0&&ht.setGlobalState(M.clippingPlanes,$),j&&Tt.viewport(g.copy(j)),W.length>0&&ao(W,V,$),ut.length>0&&ao(ut,V,$),_t.length>0&&ao(_t,V,$),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function oh(T,V,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new Ji(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?dr:bi,minFilter:Xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const ut=m.state.transmissionRenderTarget[j.id],_t=j.viewport||g;ut.setSize(_t.z,_t.w);const bt=M.getRenderTarget();M.setRenderTarget(ut),M.getClearColor(L),N=M.getClearAlpha(),N<1&&M.setClearColor(16777215,.5),M.clear(),gt&&Bt.render($);const Rt=M.toneMapping;M.toneMapping=Ki;const Ut=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),H===!0&&ht.setGlobalState(M.clippingPlanes,j),ao(T,$,j),O.updateMultisampleRenderTarget(ut),O.updateRenderTargetMipmap(ut),It.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Lt=0,he=V.length;Lt<he;Lt++){const me=V[Lt],Ee=me.object,vn=me.geometry,re=me.material,Ct=me.group;if(re.side===ei&&Ee.layers.test(j.layers)){const Ve=re.side;re.side=hn,re.needsUpdate=!0,ah(Ee,$,j,vn,re,Ct),re.side=Ve,re.needsUpdate=!0,Ft=!0}}Ft===!0&&(O.updateMultisampleRenderTarget(ut),O.updateRenderTargetMipmap(ut))}M.setRenderTarget(bt),M.setClearColor(L,N),Ut!==void 0&&(j.viewport=Ut),M.toneMapping=Rt}function ao(T,V,$){const j=V.isScene===!0?V.overrideMaterial:null;for(let W=0,ut=T.length;W<ut;W++){const _t=T[W],bt=_t.object,Rt=_t.geometry,Ut=j===null?_t.material:j,Ft=_t.group;bt.layers.test($.layers)&&ah(bt,V,$,Rt,Ut,Ft)}}function ah(T,V,$,j,W,ut){T.onBeforeRender(M,V,$,j,W,ut),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(M,V,$,j,T,ut),W.transparent===!0&&W.side===ei&&W.forceSinglePass===!1?(W.side=hn,W.needsUpdate=!0,M.renderBufferDirect($,V,j,W,T,ut),W.side=Yn,W.needsUpdate=!0,M.renderBufferDirect($,V,j,W,T,ut),W.side=ei):M.renderBufferDirect($,V,j,W,T,ut),T.onAfterRender(M,V,$,j,W,ut)}function co(T,V,$){V.isScene!==!0&&(V=pt);const j=xt.get(T),W=m.state.lights,ut=m.state.shadowsArray,_t=W.state.version,bt=At.getParameters(T,W.state,ut,V,$),Rt=At.getProgramCacheKey(bt);let Ut=j.programs;j.environment=T.isMeshStandardMaterial?V.environment:null,j.fog=V.fog,j.envMap=(T.isMeshStandardMaterial?X:w).get(T.envMap||j.environment),j.envMapRotation=j.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Ut===void 0&&(T.addEventListener("dispose",Qt),Ut=new Map,j.programs=Ut);let Ft=Ut.get(Rt);if(Ft!==void 0){if(j.currentProgram===Ft&&j.lightsStateVersion===_t)return lh(T,bt),Ft}else bt.uniforms=At.getUniforms(T),T.onBeforeCompile(bt,M),Ft=At.acquireProgram(bt,Rt),Ut.set(Rt,Ft),j.uniforms=bt.uniforms;const Lt=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Lt.clippingPlanes=ht.uniform),lh(T,bt),j.needsLights=kp(T),j.lightsStateVersion=_t,j.needsLights&&(Lt.ambientLightColor.value=W.state.ambient,Lt.lightProbe.value=W.state.probe,Lt.directionalLights.value=W.state.directional,Lt.directionalLightShadows.value=W.state.directionalShadow,Lt.spotLights.value=W.state.spot,Lt.spotLightShadows.value=W.state.spotShadow,Lt.rectAreaLights.value=W.state.rectArea,Lt.ltc_1.value=W.state.rectAreaLTC1,Lt.ltc_2.value=W.state.rectAreaLTC2,Lt.pointLights.value=W.state.point,Lt.pointLightShadows.value=W.state.pointShadow,Lt.hemisphereLights.value=W.state.hemi,Lt.directionalShadowMap.value=W.state.directionalShadowMap,Lt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Lt.spotShadowMap.value=W.state.spotShadowMap,Lt.spotLightMatrix.value=W.state.spotLightMatrix,Lt.spotLightMap.value=W.state.spotLightMap,Lt.pointShadowMap.value=W.state.pointShadowMap,Lt.pointShadowMatrix.value=W.state.pointShadowMatrix),j.currentProgram=Ft,j.uniformsList=null,Ft}function ch(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=ea.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function lh(T,V){const $=xt.get(T);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function Up(T,V,$,j,W){V.isScene!==!0&&(V=pt),O.resetTextureUnits();const ut=V.fog,_t=j.isMeshStandardMaterial?V.environment:null,bt=E===null?M.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Li,Rt=(j.isMeshStandardMaterial?X:w).get(j.envMap||_t),Ut=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ft=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Lt=!!$.morphAttributes.position,he=!!$.morphAttributes.normal,me=!!$.morphAttributes.color;let Ee=Ki;j.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ee=M.toneMapping);const vn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,re=vn!==void 0?vn.length:0,Ct=xt.get(j),Ve=m.state.lights;if(H===!0&&(F===!0||T!==C)){const Rn=T===C&&j.id===P;ht.setState(j,T,Rn)}let oe=!1;j.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Ve.state.version||Ct.outputColorSpace!==bt||W.isBatchedMesh&&Ct.batching===!1||!W.isBatchedMesh&&Ct.batching===!0||W.isBatchedMesh&&Ct.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ct.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ct.instancing===!1||!W.isInstancedMesh&&Ct.instancing===!0||W.isSkinnedMesh&&Ct.skinning===!1||!W.isSkinnedMesh&&Ct.skinning===!0||W.isInstancedMesh&&Ct.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ct.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ct.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ct.instancingMorph===!1&&W.morphTexture!==null||Ct.envMap!==Rt||j.fog===!0&&Ct.fog!==ut||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==ht.numPlanes||Ct.numIntersection!==ht.numIntersection)||Ct.vertexAlphas!==Ut||Ct.vertexTangents!==Ft||Ct.morphTargets!==Lt||Ct.morphNormals!==he||Ct.morphColors!==me||Ct.toneMapping!==Ee||Ct.morphTargetsCount!==re)&&(oe=!0):(oe=!0,Ct.__version=j.version);let Un=Ct.currentProgram;oe===!0&&(Un=co(j,V,W));let Es=!1,Mn=!1,Ba=!1;const be=Un.getUniforms(),Ii=Ct.uniforms;if(Tt.useProgram(Un.program)&&(Es=!0,Mn=!0,Ba=!0),j.id!==P&&(P=j.id,Mn=!0),Es||C!==T){Gt.reverseDepthBuffer?(Z.copy(T.projectionMatrix),Rm(Z),Lm(Z),be.setValue(B,"projectionMatrix",Z)):be.setValue(B,"projectionMatrix",T.projectionMatrix),be.setValue(B,"viewMatrix",T.matrixWorldInverse);const Rn=be.map.cameraPosition;Rn!==void 0&&Rn.setValue(B,lt.setFromMatrixPosition(T.matrixWorld)),Gt.logarithmicDepthBuffer&&be.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&be.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),C!==T&&(C=T,Mn=!0,Ba=!0)}if(W.isSkinnedMesh){be.setOptional(B,W,"bindMatrix"),be.setOptional(B,W,"bindMatrixInverse");const Rn=W.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),be.setValue(B,"boneTexture",Rn.boneTexture,O))}W.isBatchedMesh&&(be.setOptional(B,W,"batchingTexture"),be.setValue(B,"batchingTexture",W._matricesTexture,O),be.setOptional(B,W,"batchingIdTexture"),be.setValue(B,"batchingIdTexture",W._indirectTexture,O),be.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&be.setValue(B,"batchingColorTexture",W._colorsTexture,O));const za=$.morphAttributes;if((za.position!==void 0||za.normal!==void 0||za.color!==void 0)&&zt.update(W,$,Un),(Mn||Ct.receiveShadow!==W.receiveShadow)&&(Ct.receiveShadow=W.receiveShadow,be.setValue(B,"receiveShadow",W.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Ii.envMap.value=Rt,Ii.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&V.environment!==null&&(Ii.envMapIntensity.value=V.environmentIntensity),Mn&&(be.setValue(B,"toneMappingExposure",M.toneMappingExposure),Ct.needsLights&&Fp(Ii,Ba),ut&&j.fog===!0&&ft.refreshFogUniforms(Ii,ut),ft.refreshMaterialUniforms(Ii,j,D,I,m.state.transmissionRenderTarget[T.id]),ea.upload(B,ch(Ct),Ii,O)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ea.upload(B,ch(Ct),Ii,O),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&be.setValue(B,"center",W.center),be.setValue(B,"modelViewMatrix",W.modelViewMatrix),be.setValue(B,"normalMatrix",W.normalMatrix),be.setValue(B,"modelMatrix",W.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Rn=j.uniformsGroups;for(let Ha=0,Bp=Rn.length;Ha<Bp;Ha++){const hh=Rn[Ha];G.update(hh,Un),G.bind(hh,Un)}}return Un}function Fp(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function kp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,V,$){xt.get(T.texture).__webglTexture=V,xt.get(T.depthTexture).__webglTexture=$;const j=xt.get(T);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=$===void 0,j.__autoAllocateDepthBuffer||It.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,V){const $=xt.get(T);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,$=0){E=T,R=V,A=$;let j=!0,W=null,ut=!1,_t=!1;if(T){const Rt=xt.get(T);if(Rt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(B.FRAMEBUFFER,null),j=!1;else if(Rt.__webglFramebuffer===void 0)O.setupRenderTarget(T);else if(Rt.__hasExternalTextures)O.rebindTextures(T,xt.get(T.texture).__webglTexture,xt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Lt=T.depthTexture;if(Rt.__boundDepthTexture!==Lt){if(Lt!==null&&xt.has(Lt)&&(T.width!==Lt.image.width||T.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(T)}}const Ut=T.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(_t=!0);const Ft=xt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ft[V])?W=Ft[V][$]:W=Ft[V],ut=!0):T.samples>0&&O.useMultisampledRTT(T)===!1?W=xt.get(T).__webglMultisampledFramebuffer:Array.isArray(Ft)?W=Ft[$]:W=Ft,g.copy(T.viewport),y.copy(T.scissor),b=T.scissorTest}else g.copy(K).multiplyScalar(D).floor(),y.copy(tt).multiplyScalar(D).floor(),b=J;if(Tt.bindFramebuffer(B.FRAMEBUFFER,W)&&j&&Tt.drawBuffers(T,W),Tt.viewport(g),Tt.scissor(y),Tt.setScissorTest(b),ut){const Rt=xt.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,Rt.__webglTexture,$)}else if(_t){const Rt=xt.get(T.texture),Ut=V||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rt.__webglTexture,$||0,Ut)}P=-1},this.readRenderTargetPixels=function(T,V,$,j,W,ut,_t){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=xt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_t!==void 0&&(bt=bt[_t]),bt){Tt.bindFramebuffer(B.FRAMEBUFFER,bt);try{const Rt=T.texture,Ut=Rt.format,Ft=Rt.type;if(!Gt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-j&&$>=0&&$<=T.height-W&&B.readPixels(V,$,j,W,qt.convert(Ut),qt.convert(Ft),ut)}finally{const Rt=E!==null?xt.get(E).__webglFramebuffer:null;Tt.bindFramebuffer(B.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(T,V,$,j,W,ut,_t){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=xt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_t!==void 0&&(bt=bt[_t]),bt){const Rt=T.texture,Ut=Rt.format,Ft=Rt.type;if(!Gt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=T.width-j&&$>=0&&$<=T.height-W){Tt.bindFramebuffer(B.FRAMEBUFFER,bt);const Lt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Lt),B.bufferData(B.PIXEL_PACK_BUFFER,ut.byteLength,B.STREAM_READ),B.readPixels(V,$,j,W,qt.convert(Ut),qt.convert(Ft),0);const he=E!==null?xt.get(E).__webglFramebuffer:null;Tt.bindFramebuffer(B.FRAMEBUFFER,he);const me=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Tm(B,me,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Lt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ut),B.deleteBuffer(Lt),B.deleteSync(me),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,V=null,$=0){T.isTexture!==!0&&(ta("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1]);const j=Math.pow(2,-$),W=Math.floor(T.image.width*j),ut=Math.floor(T.image.height*j),_t=V!==null?V.x:0,bt=V!==null?V.y:0;O.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,_t,bt,W,ut),Tt.unbindTexture()},this.copyTextureToTexture=function(T,V,$=null,j=null,W=0){T.isTexture!==!0&&(ta("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,T=arguments[1],V=arguments[2],W=arguments[3]||0,$=null);let ut,_t,bt,Rt,Ut,Ft;$!==null?(ut=$.max.x-$.min.x,_t=$.max.y-$.min.y,bt=$.min.x,Rt=$.min.y):(ut=T.image.width,_t=T.image.height,bt=0,Rt=0),j!==null?(Ut=j.x,Ft=j.y):(Ut=0,Ft=0);const Lt=qt.convert(V.format),he=qt.convert(V.type);O.setTexture2D(V,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const me=B.getParameter(B.UNPACK_ROW_LENGTH),Ee=B.getParameter(B.UNPACK_IMAGE_HEIGHT),vn=B.getParameter(B.UNPACK_SKIP_PIXELS),re=B.getParameter(B.UNPACK_SKIP_ROWS),Ct=B.getParameter(B.UNPACK_SKIP_IMAGES),Ve=T.isCompressedTexture?T.mipmaps[W]:T.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Ve.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ve.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,bt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Rt),T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,Ut,Ft,ut,_t,Lt,he,Ve.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,Ut,Ft,Ve.width,Ve.height,Lt,Ve.data):B.texSubImage2D(B.TEXTURE_2D,W,Ut,Ft,ut,_t,Lt,he,Ve),B.pixelStorei(B.UNPACK_ROW_LENGTH,me),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ee),B.pixelStorei(B.UNPACK_SKIP_PIXELS,vn),B.pixelStorei(B.UNPACK_SKIP_ROWS,re),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ct),W===0&&V.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(T,V,$=null,j=null,W=0){T.isTexture!==!0&&(ta("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,j=arguments[1]||null,T=arguments[2],V=arguments[3],W=arguments[4]||0);let ut,_t,bt,Rt,Ut,Ft,Lt,he,me;const Ee=T.isCompressedTexture?T.mipmaps[W]:T.image;$!==null?(ut=$.max.x-$.min.x,_t=$.max.y-$.min.y,bt=$.max.z-$.min.z,Rt=$.min.x,Ut=$.min.y,Ft=$.min.z):(ut=Ee.width,_t=Ee.height,bt=Ee.depth,Rt=0,Ut=0,Ft=0),j!==null?(Lt=j.x,he=j.y,me=j.z):(Lt=0,he=0,me=0);const vn=qt.convert(V.format),re=qt.convert(V.type);let Ct;if(V.isData3DTexture)O.setTexture3D(V,0),Ct=B.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)O.setTexture2DArray(V,0),Ct=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const Ve=B.getParameter(B.UNPACK_ROW_LENGTH),oe=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Un=B.getParameter(B.UNPACK_SKIP_PIXELS),Es=B.getParameter(B.UNPACK_SKIP_ROWS),Mn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ee.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ee.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Rt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ut),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ft),T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Ct,W,Lt,he,me,ut,_t,bt,vn,re,Ee.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(Ct,W,Lt,he,me,ut,_t,bt,vn,Ee.data):B.texSubImage3D(Ct,W,Lt,he,me,ut,_t,bt,vn,re,Ee),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ve),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,oe),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Un),B.pixelStorei(B.UNPACK_SKIP_ROWS,Es),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Mn),W===0&&V.generateMipmaps&&B.generateMipmap(Ct),Tt.unbindTexture()},this.initRenderTarget=function(T){xt.get(T).__webglFramebuffer===void 0&&O.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?O.setTextureCube(T,0):T.isData3DTexture?O.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?O.setTexture2DArray(T,0):O.setTexture2D(T,0),Tt.unbindTexture()},this.resetState=function(){R=0,A=0,E=null,Tt.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===w0?"display-p3":"srgb",e.unpackColorSpace=ae.workingColorSpace===ba?"display-p3":"srgb"}}class b0{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Nt(t),this.near=e,this.far=i}clone(){return new b0(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class yd extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class to extends tn{constructor(t=null,e=1,i=1,s,r,o,a,c,l=_n,h=_n,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class su extends le{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ks=new Vt,ru=new Vt,Io=[],ou=new Kn,Hv=new Vt,Ar=new Dt,br=new Zr;class pa extends Dt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new su(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Hv)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ks),ou.copy(t.boundingBox).applyMatrix4(ks),this.boundingBox.union(ou)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ks),br.copy(t.boundingSphere).applyMatrix4(ks),this.boundingSphere.union(br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(i),t.ray.intersectsSphere(br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ks),ru.multiplyMatrices(i,ks),Ar.matrixWorld=ru,Ar.raycast(t,Io);for(let o=0,a=Io.length;o<a;o++){const c=Io[o];c.instanceId=r,c.object=this,e.push(c)}Io.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new su(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new to(new Float32Array(s*this.count),s,this.count,M0,ni));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Ra extends tn{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gs extends en{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new z,h=new Ot;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=i+u/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(a,3)),this.setAttribute("uv",new Ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ee extends en{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let _=0;const x=[],m=i/2;let p=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ae(u,3)),this.setAttribute("normal",new Ae(f,3)),this.setAttribute("uv",new Ae(d,2));function v(){const S=new z,R=new z;let A=0;const E=(e-t)/i;for(let P=0;P<=r;P++){const C=[],g=P/r,y=g*(e-t)+t;for(let b=0;b<=s;b++){const L=b/s,N=L*c+a,k=Math.sin(N),I=Math.cos(N);R.x=y*k,R.y=-g*i+m,R.z=y*I,u.push(R.x,R.y,R.z),S.set(k,E,I).normalize(),f.push(S.x,S.y,S.z),d.push(L,1-g),C.push(_++)}x.push(C)}for(let P=0;P<s;P++)for(let C=0;C<r;C++){const g=x[C][P],y=x[C+1][P],b=x[C+1][P+1],L=x[C][P+1];t>0&&(h.push(g,y,L),A+=3),e>0&&(h.push(y,b,L),A+=3)}l.addGroup(p,A,0),p+=A}function M(S){const R=_,A=new Ot,E=new z;let P=0;const C=S===!0?t:e,g=S===!0?1:-1;for(let b=1;b<=s;b++)u.push(0,m*g,0),f.push(0,g,0),d.push(.5,.5),_++;const y=_;for(let b=0;b<=s;b++){const N=b/s*c+a,k=Math.cos(N),I=Math.sin(N);E.x=C*I,E.y=m*g,E.z=C*k,u.push(E.x,E.y,E.z),f.push(0,g,0),A.x=k*.5+.5,A.y=I*.5*g+.5,d.push(A.x,A.y),_++}for(let b=0;b<s;b++){const L=R+b,N=y+b;S===!0?h.push(N,N+1,L):h.push(N+1,N,L),P+=3}l.addGroup(p,P,S===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class T0 extends ee{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new T0(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class R0 extends en{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new Ae(r,3)),this.setAttribute("normal",new Ae(r.slice(),3)),this.setAttribute("uv",new Ae(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const M=new z,S=new z,R=new z;for(let A=0;A<e.length;A+=3)d(e[A+0],M),d(e[A+1],S),d(e[A+2],R),c(M,S,R,v)}function c(v,M,S,R){const A=R+1,E=[];for(let P=0;P<=A;P++){E[P]=[];const C=v.clone().lerp(S,P/A),g=M.clone().lerp(S,P/A),y=A-P;for(let b=0;b<=y;b++)b===0&&P===A?E[P][b]=C:E[P][b]=C.clone().lerp(g,b/y)}for(let P=0;P<A;P++)for(let C=0;C<2*(A-P)-1;C++){const g=Math.floor(C/2);C%2===0?(f(E[P][g+1]),f(E[P+1][g]),f(E[P][g])):(f(E[P][g+1]),f(E[P+1][g+1]),f(E[P+1][g]))}}function l(v){const M=new z;for(let S=0;S<r.length;S+=3)M.x=r[S+0],M.y=r[S+1],M.z=r[S+2],M.normalize().multiplyScalar(v),r[S+0]=M.x,r[S+1]=M.y,r[S+2]=M.z}function h(){const v=new z;for(let M=0;M<r.length;M+=3){v.x=r[M+0],v.y=r[M+1],v.z=r[M+2];const S=m(v)/2/Math.PI+.5,R=p(v)/Math.PI+.5;o.push(S,1-R)}_(),u()}function u(){for(let v=0;v<o.length;v+=6){const M=o[v+0],S=o[v+2],R=o[v+4],A=Math.max(M,S,R),E=Math.min(M,S,R);A>.9&&E<.1&&(M<.2&&(o[v+0]+=1),S<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,M){const S=v*3;M.x=t[S+0],M.y=t[S+1],M.z=t[S+2]}function _(){const v=new z,M=new z,S=new z,R=new z,A=new Ot,E=new Ot,P=new Ot;for(let C=0,g=0;C<r.length;C+=9,g+=6){v.set(r[C+0],r[C+1],r[C+2]),M.set(r[C+3],r[C+4],r[C+5]),S.set(r[C+6],r[C+7],r[C+8]),A.set(o[g+0],o[g+1]),E.set(o[g+2],o[g+3]),P.set(o[g+4],o[g+5]),R.copy(v).add(M).add(S).divideScalar(3);const y=m(R);x(A,g+0,v,y),x(E,g+2,M,y),x(P,g+4,S,y)}}function x(v,M,S,R){R<0&&v.x===1&&(o[M]=v.x-1),S.x===0&&S.z===0&&(o[M]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new R0(t.vertices,t.indices,t.radius,t.details)}}class L0 extends R0{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new L0(t.radius,t.detail)}}class La extends en{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const f=(e-t)/s,d=new z,_=new Ot;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){const p=r+m/i*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),_.x=(d.x/e+1)/2,_.y=(d.y/e+1)/2,h.push(_.x,_.y)}u+=f}for(let x=0;x<s;x++){const m=x*(i+1);for(let p=0;p<i;p++){const v=p+m,M=v,S=v+i+1,R=v+i+2,A=v+1;a.push(M,S,A),a.push(S,R,A)}}this.setIndex(a),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new La(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class xs extends en{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new z,f=new z,d=[],_=[],x=[],m=[];for(let p=0;p<=i;p++){const v=[],M=p/i;let S=0;p===0&&o===0?S=.5/e:p===i&&c===Math.PI&&(S=-.5/e);for(let R=0;R<=e;R++){const A=R/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+M*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(A+S,1-M),v.push(l++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){const M=h[p][v+1],S=h[p][v],R=h[p+1][v],A=h[p+1][v+1];(p!==0||o>0)&&d.push(M,S,A),(p!==i-1||c<Math.PI)&&d.push(S,R,A)}this.setIndex(d),this.setAttribute("position",new Ae(_,3)),this.setAttribute("normal",new Ae(x,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class mn extends Jr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nd,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ca extends mn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return an(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ia extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Sd extends Ia{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Nt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const vc=new Vt,au=new z,cu=new z;class Ed{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;au.setFromMatrixPosition(t.matrixWorld),e.position.copy(au),cu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cu),e.updateMatrixWorld(),vc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const lu=new Vt,Tr=new z,Mc=new z;class Gv extends Ed{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ot(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Tr.setFromMatrixPosition(t.matrixWorld),i.position.copy(Tr),Mc.copy(i.position),Mc.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Mc),i.updateMatrixWorld(),s.makeTranslation(-Tr.x,-Tr.y,-Tr.z),lu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lu)}}class Pa extends Ia{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Gv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Vv extends Ed{constructor(){super(new md(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hu extends Ia{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Vv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class wd extends Ia{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_0}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_0);const cr={glass:6453644,metal:9146777,metalDark:4870231},bn={ceiling:15525851,wall:13814974,trim:16249834,floorTimber:9072722,benchtop:12168342,tile:13622754,tileFloor:12104358,metalDull:9146777};function Wv(n){const t=o=>o<=.04045?o/12.92:((o+.055)/1.055)**2.4,e=t((n>>16&255)/255),i=t((n>>8&255)/255),s=t((n&255)/255),r=.2126*e+.7152*i+.0722*s;return r>.008856?116*Math.cbrt(r)-16:903.3*r}const uu=86,qv=new Set([bn.ceiling,bn.tile]);function Da(n,t){if(t<=2||qv.has(n))return n;const e=Wv(n);if(e>uu)throw new Error(`value plan: ${t.toFixed(1)} m2 of #${n.toString(16).padStart(6,"0")} is L* ${e.toFixed(0)}, above the ${uu} cap for large areas`);return n}const Qs=new Map,Xv=["roughness","metalness","flat","transparent","opacity","side","emissive","emissiveIntensity","vertexColors"];function Yv(n,t={}){let e=String(n);for(const s of Xv)t[s]!==void 0&&(e+="|"+s+"="+JSON.stringify(t[s]));if(Qs.has(e))return Qs.get(e);const i=new mn({color:n,roughness:t.roughness??.85,metalness:t.metalness??0,flatShading:t.flat??!1,transparent:t.transparent??!1,opacity:t.opacity??1,side:t.side??Yn,emissive:t.emissive??0,emissiveIntensity:t.emissiveIntensity??1,vertexColors:t.vertexColors??!1});return Qs.set(e,i),i}function C0(n,t){if(Qs.has(n))return Qs.get(n);const e=t();return Qs.set(n,e),e}const $v=n=>{n.fragmentShader=n.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
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
    gl_FragColor.a = max( ghA, 0.80 * ghLit );`)};function eo(n){return n.onBeforeCompile=$v,n}function jv(){return C0("window",()=>eo(new mn({color:cr.glass,roughness:.1,metalness:0,transparent:!0,opacity:.28,depthWrite:!1,emissive:new Nt(16767392),emissiveIntensity:0})))}function Kv(){return C0("windowinner",()=>eo(new mn({color:cr.glass,roughness:.1,metalness:0,transparent:!0,opacity:.1,depthWrite:!1})))}function Ad(){return C0("contactshadow",()=>{const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),i=e.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);i.addColorStop(0,"rgb(140,140,140)"),i.addColorStop(.55,"rgb(196,196,196)"),i.addColorStop(1,"rgb(255,255,255)"),e.fillStyle=i,e.fillRect(0,0,128,128);const s=new Ra(t);s.colorSpace=Je;const r=new fs({map:s,blending:hl,transparent:!0,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return r.userData.decal=!0,r})}new $e(1,1,1),new Ci(1,1),new ee(.5,.5,1,10),new T0(.5,1,8),new xs(.5,12,10);const Zv=new Set;function I0(n){Zv.add(n)}function Jv(n){let t=1779033703^n.length;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),3432918353),t=t<<13|t>>>19;return()=>(t=Math.imul(t^t>>>16,2246822507),t=Math.imul(t^t>>>13,3266489909),t^=t>>>16,t>>>0)}function Qv(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}class no{constructor(t="lifesim"){this.seed=String(t),this._next=Qv(Jv(this.seed)()),this._children=new Map}child(t){return this._children.has(t)||this._children.set(t,new no(`${this.seed}:${t}`)),this._children.get(t)}float(){return this._next()}range(t,e){return t+this._next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}chance(t){return this._next()<t}sign(){return this._next()<.5?-1:1}pick(t){return t[Math.floor(this._next()*t.length)]}pickMany(t,e){const i=this.shuffle([...t]);return i.slice(0,Math.min(e,i.length))}shuffle(t){for(let e=t.length-1;e>0;e--){const i=Math.floor(this._next()*(e+1));[t[e],t[i]]=[t[i],t[e]]}return t}weighted(t){const e=Array.isArray(t)?t:[...t].map(([r,o])=>({value:r,weight:o}));let i=0;for(const r of e)i+=Math.max(0,r.weight??1);if(i<=0)return e[0];let s=this._next()*i;for(const r of e)if(s-=Math.max(0,r.weight??1),s<=0)return r;return e[e.length-1]}gaussian(t=0,e=1){let i=0,s=0;for(;i===0;)i=this._next();for(;s===0;)s=this._next();return t+e*Math.sqrt(-2*Math.log(i))*Math.cos(2*Math.PI*s)}stat(t,e,i=0,s=100){return Math.max(i,Math.min(s,Math.round(this.gaussian(t,e))))}}let bd=8,Zl=null;function tM(n){Zl=n,bd=Math.min(8,n.capabilities.getMaxAnisotropy())}let eM=n=>{const t=document.createElement("canvas");return t.width=t.height=n,t};const Td=(n,t=n)=>{const e=eM(n);return e.width=n,e.height=t,e};let Rd=0;function P0(n,t){return t&&(n.colorSpace=Je),n.wrapS=n.wrapT=ms,n.anisotropy=bd,n.generateMipmaps=!0,n.minFilter=Xn,n.magFilter=Ue,Rd+=n.image.width*n.image.height*4*4/3,Zl&&Zl.initTexture(n),n}function li(n){return P0(new Ra(nM(n)),!0)}function Jl(n){return n.wrapS=n.wrapT=Yi,n}function nM(n){const t=Td(n.w,n.h),e=t.getContext("2d"),i=e.createImageData(n.w,n.h),s=i.data,r=n.d,o=n.w*n.h;for(let a=0,c=0,l=0;a<o;a++,c+=3,l+=4){const h=r[c],u=r[c+1],f=r[c+2];s[l]=(h<0?0:h>1?1:h)*255+.5,s[l+1]=(u<0?0:u>1?1:u)*255+.5,s[l+2]=(f<0?0:f>1?1:f)*255+.5,s[l+3]=255}return e.putImageData(i,0,0),t}const Te=n=>n<0?0:n>1?1:n,oi=n=>[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255];function iM(n){const[t,e,i]=n,s=Math.max(t,e,i),r=Math.min(t,e,i),o=(s+r)/2;if(s===r)return[0,0,o];const a=s-r,c=o>.5?a/(2-s-r):a/(s+r);let l;return s===t?l=((e-i)/a+(e<i?6:0))/6:s===e?l=((i-t)/a+2)/6:l=((t-e)/a+4)/6,[l,c,o]}function sM(n,t,e){if(t===0)return[e,e,e];const i=e<.5?e*(1+t):e+t-e*t,s=2*e-i,r=o=>(o=(o%1+1)%1,o<1/6?s+(i-s)*6*o:o<1/2?i:o<2/3?s+(i-s)*(2/3-o)*6:s);return[r(n+1/3),r(n),r(n-1/3)]}function ii(n,t=1,e=0,i=1){const[s,r,o]=iM(Array.isArray(n)?n:oi(n));return sM(s+e/360,Te(r*i),Te(o*t))}function hi(n,t){return{w:n,h:t,d:new Float32Array(n*t*3)}}function vs(n,t){const e=Array.isArray(t)?t:oi(t),i=n.d;for(let s=0;s<i.length;s+=3)i[s]=e[0],i[s+1]=e[1],i[s+2]=e[2]}function D0(n,t,e,i,s){if(s<=0)return;const r=n.w,o=n.h;let a=t,c=e;(a<0||a>=r)&&(a=(a%r+r)%r),(c<0||c>=o)&&(c=(c%o+o)%o);const l=(c*r+a)*3,h=n.d,u=1-s;h[l]=h[l]*u+i[0]*s,h[l+1]=h[l+1]*u+i[1]*s,h[l+2]=h[l+2]*u+i[2]*s}function Cn(n,t,e,i,s,r,o=1){const a=Array.isArray(r)?r:oi(r),c=Math.round(t),l=Math.round(i),h=Math.round(e),u=Math.round(s);if(o<1){for(let x=h;x<u;x++)for(let m=c;m<l;m++)D0(n,m,x,a,o);return}const f=n.w,d=n.h,_=n.d;for(let x=h;x<u;x++){let m=x;(m<0||m>=d)&&(m=(m%d+d)%d);const p=m*f;for(let v=c;v<l;v++){let M=v;(M<0||M>=f)&&(M=(M%f+f)%f);const S=(p+M)*3;_[S]=a[0],_[S+1]=a[1],_[S+2]=a[2]}}}function io(n,t,e,i,s,r=1){const o=i+1;for(let a=Math.floor(e-o);a<=Math.ceil(e+o);a++)for(let c=Math.floor(t-o);c<=Math.ceil(t+o);c++){const l=c+.5-t,h=a+.5-e,u=Te(i-Math.sqrt(l*l+h*h)+.5);u>0&&D0(n,c,a,s,r*u)}}function Ql(n,t,e,i,s=1){const r=Math.max(1,e)/2;for(let o=1;o<t.length;o++){const[a,c]=t[o-1],[l,h]=t[o],u=Math.hypot(l-a,h-c),f=Math.max(1,Math.ceil(u));for(let d=0;d<=f;d++){const _=d/f;io(n,a+(l-a)*_,c+(h-c)*_,r,i,s)}}}function Ld(n,t,e,i,s,r,o,a){const c=n.w,l=n.h,h=n.d,u=r/2,f=o[0],d=o[1],_=o[2],x=Math.PI*2/i;for(let m=0;m<l;m++){const p=m*c,v=t+e*Math.sin(m*x+s),M=v-u,S=v+u,R=Math.floor(M),A=Math.ceil(S);for(let E=R;E<=A;E++){const P=Te(Math.min(E+1,S)-Math.max(E,M));if(P<=0)continue;const C=a*P,g=1-C;let y=E;(y<0||y>=c)&&(y=(y%c+c)%c);const b=(p+y)*3;h[b]=h[b]*g+f*C,h[b+1]=h[b+1]*g+d*C,h[b+2]=h[b+2]*g+_*C}}}const fu=n=>n*n*(3-2*n);function rM(n,t,e){const i=new Float32Array(t*e);for(let s=0;s<i.length;s++)i[s]=n.float();return i}const du=256;function xe(n,t,e={}){const{p0:i=32,octaves:s=4,gain:r=.5,lacunarity:o=2,h:a=t}=e,c=e.p0x??i,l=e.p0y??i,h=new Float32Array(t*a),u=[];let f=1,d=0;for(let R=0;R<s;R++){const A=Math.min(du,Math.max(1,Math.round(c*o**R))),E=Math.min(du,Math.max(1,Math.round(l*o**R)));u.push({lat:rM(n,A,E),px:A,py:E,amp:f}),d+=f,f*=r}const _=new Float64Array(t*a),x=new Int32Array(t),m=new Int32Array(t),p=new Float64Array(t);for(let R=0;R<u.length;R++){const A=u[R],E=A.lat,P=A.px,C=A.py,g=A.amp,y=P/t,b=C/a;for(let L=0;L<t;L++){const N=L*y,k=N|0,I=k>=P?k%P:k;x[L]=I,m[L]=I+1>=P?0:I+1,p[L]=fu(N-k)}for(let L=0;L<a;L++){const N=L*b,k=N|0,I=fu(N-k),D=1-I,U=k>=C?k%C:k,Y=U*P,K=(U+1>=C?0:U+1)*P,tt=L*t;for(let J=0;J<t;J++){const q=x[J],H=m[J],F=p[J],Z=E[Y+q],nt=E[Y+H],lt=E[K+q],ct=E[K+H];_[tt+J]+=g*((Z+(nt-Z)*F)*D+(lt+(ct-lt)*F)*I)}}}let v=1/0,M=-1/0;for(let R=0;R<h.length;R++){h[R]=_[R]/d;const A=h[R];A<v&&(v=A),A>M&&(M=A)}const S=M-v||1;for(let R=0;R<h.length;R++)h[R]=(h[R]-v)/S;return h}function Cd(n,t,e,i){const s=new Float32Array(t*e),r=new Float32Array(t*e),o=2*i+1,a=new Int32Array(t),c=new Int32Array(t);for(let u=0;u<t;u++)a[u]=((u-i)%t+t)%t,c[u]=(u+i+1)%t;for(let u=0;u<e;u++){const f=u*t;let d=0;for(let _=-i;_<=i;_++)d+=n[f+(_%t+t)%t];for(let _=0;_<t;_++)s[f+_]=d/o,d-=n[f+a[_]],d+=n[f+c[_]]}const l=new Int32Array(e),h=new Int32Array(e);for(let u=0;u<e;u++)l[u]=((u-i)%e+e)%e*t,h[u]=(u+i+1)%e*t;for(let u=0;u<t;u++){let f=0;for(let d=-i;d<=i;d++)f+=s[(d%e+e)%e*t+u];for(let d=0;d<e;d++)r[d*t+u]=f/o,f-=s[l[d]+u],f+=s[h[d]+u]}return r}function oM(n,t,e=1.5,i=null){const s=i??n.length/t,r=new Uint8Array(t*s*4),o=e/8,a=new Int32Array(t),c=new Int32Array(t);for(let l=0;l<t;l++)a[l]=(l-1+t)%t,c[l]=(l+1)%t;for(let l=0;l<s;l++){const h=(l-1+s)%s*t,u=l*t,f=(l+1)%s*t;let d=u*4;for(let _=0;_<t;_++,d+=4){const x=a[_],m=c[_],p=n[h+x],v=n[h+_],M=n[h+m],S=n[u+x],R=n[u+m],A=n[f+x],E=n[f+_],P=n[f+m],C=M+2*R+P-(p+2*S+A),g=A+2*E+P-(p+2*v+M),y=-C*o,b=g*o,L=1/Math.sqrt(y*y+b*b+1);r[d]=(y*L*.5+.5)*255+.5,r[d+1]=(b*L*.5+.5)*255+.5,r[d+2]=(L*.5+.5)*255+.5,r[d+3]=255}}return r}function ri(n,t,e=1.5,i=null){const s=i??n.length/t;return P0(new Ra(Id(oM(n,t,e,s),t,s)),!1)}function Id(n,t,e){const i=Td(t,e),s=i.getContext("2d"),r=s.createImageData(t,e);return r.data.set(n),s.putImageData(r,0,0),i}function aM(n,t,e,i,s=null){const o=n*(s??n),a=new Uint8Array(o*4);for(let c=0,l=0;c<o;c++,l+=4){const h=t?t[c]:1,u=e?e[c]:.85,f=i?i[c]:0;a[l]=(h<0?0:h>1?1:h)*255+.5,a[l+1]=(u<0?0:u>1?1:u)*255+.5,a[l+2]=(f<0?0:f>1?1:f)*255+.5,a[l+3]=255}return a}function Ge(n,t,e,i,s=null){const r=s??n;return P0(new Ra(Id(aM(n,t,e,i,r),n,r)),!1)}const N0={},Gr=new Map;let Pd=null;function Re(n,t){N0[n]=t}const cM=n=>{const t=Object.keys(n).sort();return t.length?t.map(e=>e+"="+JSON.stringify(n[e])).join(","):""};function lr(n,t=null,e={}){const i=N0[n];if(!i)throw new Error(`Textures: no recipe named '${n}'`);const s=cM(e),r=s?n+"#"+s:n;if(Gr.has(r))return Gr.get(r);const o=t||(Pd||new no("textures")).child("tex."+r),a=i(o,e);return a.name=n,Gr.set(r,a),a}function lM(){var n,t;for(const e of Gr.values()){for(const i of["map","normalMap","ormMap"])(t=(n=e[i])==null?void 0:n.dispose)==null||t.call(n);if(e.maps)for(const i of e.maps)i.dispose()}Gr.clear(),Rd=0,Pd=null}I0(lM);const yc={blackbutt:{base:13214581,dark:10122054,rough:.4},spottedGum:{base:11040332,dark:8015662,rough:.38},jarrah:{base:9061685,dark:6040352,rough:.44},tasOak:{base:14072722,dark:11111779,rough:.42},pine:{base:14467213,dark:11571294,rough:.5}};Re("timberFloor",(n,t={})=>{const o=1.9500000000000002,a=1024/o,c=1024/15,l=Math.max(2,Math.round(.004*a)),h=t.species||n.pick(Object.keys(yc)),u=yc[h]||yc.blackbutt,f=hi(1024,1024);vs(f,ii(u.dark,.72));const d=oi(u.dark),_=ii(u.base,1.25),x=[];for(let A=0;A<15;A++){const E=A*c+l/2,P=(A+1)*c-l/2,C=ii(u.base,1+n.range(-.06,.06),n.range(-3,3));Cn(f,E,0,P,1024,C);const g=Math.round(n.range(.15,.85)*1024);x.push(g),Cn(f,E,g,P,g+2,ii(u.dark,.8),.85),Cn(f,E,g-2,P,g,_,.25);const y=n.int(28,60);for(let b=0;b<y;b++){const L=n.range(E+1,P-1),N=n.range(1.5,4),k=1024/n.int(2,5),I=n.range(0,Math.PI*2),D=n.range(2,3),U=n.range(.04,.12),Y=n.chance(.25)?_:d;Ld(f,L,N,k,I,D,Y,U)}if(n.chance(.2)){const b=n.range(204.8,819.2),L=n.range(60,160),N=n.range(E+4,P-4);for(let k=0;k<n.int(2,4);k++){const I=(k+1)*n.range(3,7),D=[];for(let U=0;U<=16;U++){const Y=U/16;D.push([N+(Y-.5)*2*I,b-L*(1-(Y-.5)**2*4)])}Ql(f,D,2,d,.06)}}}const m=xe(n,512,{p0:64,octaves:3}),p=new Float32Array(512*512),v=new Float32Array(512*512),M=new Float32Array(512*512),S=512/15,R=l*512/1024;for(let A=0;A<512;A++)for(let E=0;E<512;E++){const P=A*512+E,C=Math.floor(E/S),g=E-C*S,y=g<R/2||g>S-R/2,b=A*1024/512,L=x[C],N=b>=L-1&&b<=L+2,k=y||N;v[P]=k?.15:.75,p[P]=Te(u.rough+(k?.1:0)+(m[P]-.5)*.1),M[P]=k?.72:1}return{map:li(f),normalMap:ri(Cd(v,512,512,1),512,1.2),ormMap:Ge(512,M,p,null),uvScale:[o,o],normalScale:.5,species:h,tinted:!1}});Re("plasterWall",(n,t={})=>{const s=t.rough??.88,r=xe(n,256,{p0:64,octaves:3,gain:.45}),o=new Float32Array(256*256),a=.4*256/2;for(let c=0;c<256;c++)for(let l=0;l<256;l++){const h=c*256+l;let u=s+(r[h]**1.5-.5)*.1;t.ceiling||(u+=Math.cos(l/a*Math.PI*2)*.02),o[h]=Te(u)}return{ormMap:Ge(256,null,o,null),uvScale:[2,2],normalScale:0,tinted:!0}});Re("plasterCeiling",n=>N0.plasterWall(n,{rough:.93,ceiling:!0}));Re("paintedJoinery",n=>{const i=xe(n,256,{p0:64,octaves:3}),s=new Float32Array(256*256);for(let r=0;r<256;r++)for(let o=0;o<256;o++){const a=r*256+o;s[a]=Te(.42+(i[a]-.5)*.06+Math.sin(o/256*Math.PI*2*12)*.015)}return{ormMap:Ge(256,null,s,null),uvScale:[1,1],normalScale:0,tinted:!0}});Re("carpetPile",n=>{const i=hi(512,512);vs(i,[1,1,1]);const s=xe(n,512,{p0x:64,p0y:192,octaves:3,gain:.5}),r=i.d;for(let c=0;c<512;c++)for(let l=0;l<512;l++){const h=c*512+l,u=Math.cos(c/256*Math.PI*2)*.03,f=Te(.9+(s[h]-.5)*.16+u);r[h*3]=f,r[h*3+1]=f,r[h*3+2]=f}for(let c=0;c<1200;c++){const l=n.pick([[1.1,0],[.78,8],[.92,-10]]),h=ii(16777215,l[0],l[1],1);if(l[1]!==0){const u=n.range(0,1);h[0]=h[0]*(.94+u*.12),h[2]=h[2]*(1.06-u*.12)}io(i,n.range(0,512),n.range(0,512),n.range(1,2),h,.25)}const o=xe(n,512,{p0x:43,p0y:128,octaves:3}),a=new Float32Array(512*512);for(let c=0;c<a.length;c++)a[c]=Te(.92+(o[c]-.5)*.06);return{map:li(i),normalMap:ri(o,512,.6),ormMap:Ge(512,null,a,null),uvScale:[1,1],normalScale:.7,tinted:!0}});Re("ceramicTile",(n,t={})=>{const i=t.tile??.3,s=2,r=i*s,o=Math.max(2,Math.round(.003*512/r)),a=3,c=512/s,l=oi(12104358),h=[];for(let m=0;m<s*s;m++)h.push({c:ii(14473423,1+n.range(-.03,.03),n.range(-2,2)),g:n.range(-1,1)});const u=hi(512,512),f=new Float32Array(512*512),d=new Float32Array(512*512),_=new Float32Array(512*512),x=o/2;for(let m=0;m<512;m++)for(let p=0;p<512;p++){const v=m*512+p,M=Math.floor(p/c),S=Math.floor(m/c),R=p-M*c,A=m-S*c,E=Math.min(R,c-R,A,c-A);if(E<x){u.d[v*3]=l[0],u.d[v*3+1]=l[1],u.d[v*3+2]=l[2],f[v]=.85,d[v]=.25,_[v]=.62;continue}const P=h[S*s+M],C=(R/c+A/c)/2,g=1.03-.06*(P.g>0?C:1-C);u.d[v*3]=Te(P.c[0]*g),u.d[v*3+1]=Te(P.c[1]*g),u.d[v*3+2]=Te(P.c[2]*g),f[v]=.08;const y=Te((E-x)/a);d[v]=.25+.75*y,_[v]=.62+.38*y}return{map:li(u),normalMap:ri(d,512,2),ormMap:Ge(512,_,f,null),uvScale:[r,r],normalScale:.8,tinted:!1}});Re("fabricWeave",n=>{const i=hi(256,256),s=new Float32Array(256*256),r=new Float32Array(256*256),o=128,a=new Float32Array(o*8),c=new Float32Array(o*8);for(let h=0;h<a.length;h++)a[h]=n.range(-.035,.035);for(let h=0;h<c.length;h++)c[h]=n.range(-.035,.035);const l=xe(n,256,{p0:64,octaves:2});for(let h=0;h<256;h++)for(let u=0;u<256;u++){const f=h*256+u,d=(u>>1&1^h>>1&1)===0,_=u>>1,x=h>>1,m=d?a[(_*8+(h>>5&7))%a.length]:c[(x*8+(u>>5&7))%c.length],p=Te((d?1.06:.94)+m+(l[f]-.5)*.06);i.d[f*3]=p,i.d[f*3+1]=p,i.d[f*3+2]=p,s[f]=d?.66:.8,r[f]=d?1:.3}return{map:li(i),normalMap:ri(Cd(r,256,256,1),256,.8),ormMap:Ge(256,null,s,null),uvScale:[.25,.25],normalScale:.6,tinted:!0}});Re("joineryTimber",n=>{const i=hi(512,512);vs(i,[1,1,1]);const s=xe(n,512,{p0x:48,p0y:8,octaves:4}),r=i.d;for(let c=0;c<512*512;c++){const l=Te(.94+(s[c]-.5)*.22);r[c*3]=l,r[c*3+1]=l,r[c*3+2]=l}const o=ii(16777215,.72);for(let c=0;c<220;c++){const l=n.range(0,512),h=n.range(2,6),u=512/n.int(1,2),f=n.range(0,Math.PI*2);Ld(i,l,h,u,f,n.range(2,3.5),o,n.range(.03,.09))}const a=new Float32Array(512*512);for(let c=0;c<a.length;c++)a[c]=Te(.55+(s[c]-.5)*.08);return{map:li(i),ormMap:Ge(512,null,a,null),uvScale:[1,1],normalScale:0,tinted:!0}});Re("vinylSheet",n=>{const i=hi(512,512);vs(i,14209732);const s=[13222578,15131093,11906460,14472902].map(oi);for(let c=0;c<3e3;c++)io(i,n.range(0,512),n.range(0,512),n.range(1,3),n.pick(s),.35);const r=xe(n,512,{p0:32,octaves:3}),o=new Float32Array(512*512);for(let c=0;c<o.length;c++)o[c]=Te(.28+(r[c]-.5)*.12);const a={w:512,h:512,d:new Float32Array(512*512*3)};for(let c=0;c<12;c++){const l=n.range(0,512),h=n.range(0,512),u=n.range(40,120),f=n.range(0,Math.PI*2),d=n.range(.6,2.2),_=[];for(let x=0;x<=24;x++){const m=f+d*(x/24);_.push([l+Math.cos(m)*u,h+Math.sin(m)*u])}Ql(i,_,n.range(2,4),ii(14209732,.88),.3),Ql(a,_,n.range(2,4),[1,1,1],1)}for(let c=0;c<o.length;c++)o[c]=Te(o[c]+a.d[c*3]*.15);return{map:li(i),ormMap:Ge(512,null,o,null),uvScale:[1,1],normalScale:0,tinted:!1}});Re("laminateBench",n=>{const s=hi(512,512);vs(s,bn.benchtop);const r=[9274743,14077886,7235417].map(oi);for(let l=0;l<2e3;l++)io(s,n.range(0,512),n.range(0,512),n.range(1,2.5),n.pick(r),.3);const o=new Float32Array(512*512);for(let l=0;l<o.length;l++)o[l]=.28;const a=Math.max(2,Math.round(.006*512/.6)),c=ii(bn.benchtop,.82);for(let l=0;l<512;l++)if(Math.min(l,512-l)<a)for(let u=0;u<512;u++)D0(s,u,l,c,.85),o[l*512+u]=.45;return{map:li(s),ormMap:Ge(512,null,o,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});Re("ceilingGrid",n=>{const s=hi(512,512);vs(s,15526370);const r=Math.max(2,Math.round(.015*512/1.2)),o=Math.max(2,Math.round(.015*512/.6)),a=oi(14210509),c=oi(12434098),l=xe(n,512,{p0:64,octaves:2}),h=new Float32Array(512*512);for(let u=0;u<512;u++)for(let f=0;f<512;f++){const d=u*512+f,_=Math.min(f,512-f),x=Math.min(u,512-u);if(_<r/2||x<o/2){const v=_>=r/2-2&&_<r/2||x>=o/2-2&&x<o/2?c:a;s.d[d*3]=v[0],s.d[d*3+1]=v[1],s.d[d*3+2]=v[2],h[d]=.55}else{const p=1+(l[d]-.5)*.04;s.d[d*3]*=p,s.d[d*3+1]*=p,s.d[d*3+2]*=p,h[d]=.9}}return{map:li(s),ormMap:Ge(512,null,h,null),uvScale:[1.2,.6],normalScale:0,tinted:!1}});Re("applianceEnamel",n=>{const i=xe(n,256,{p0:64,octaves:3}),s=new Float32Array(256*256);for(let r=0;r<s.length;r++)s[r]=Te(.3+(i[r]-.5)*.04);return{ormMap:Ge(256,null,s,null),uvScale:[1,1],normalScale:0,tinted:!0}});Re("metalBrushed",n=>{const i=new Float32Array(65536),s=new Float32Array(256*256),r=xe(n,256,{p0x:8,p0y:256,octaves:2});for(let o=0;o<256;o++){const a=n.range(-.1,.1);for(let c=0;c<256;c++){const l=o*256+c;i[l]=Te(.35+a*.6+(r[l]-.5)*.1)}}return{ormMap:Ge(256,null,i,s),uvScale:[.4,.4],normalScale:0,tinted:!0}});Re("quiltFolds",n=>{const i=[],s=n.int(5,9);for(let f=0;f<s;f++)i.push({a:n.range(.4,1),c:n.range(.05,.95),w:n.range(.06,.14)});const r=f=>{let d=0;for(const _ of i)d+=_.a*Math.exp(-(((f-_.c)/_.w)**2));return d+=.5*Math.exp(-((f/.04)**2))+.5*Math.exp(-(((1-f)/.04)**2)),d};let o=1/0,a=-1/0;for(let f=0;f<=256;f++){const d=r(f/256);d<o&&(o=d),d>a&&(a=d)}const c=a-o||1,l=f=>(r(Te(f))-o)/c,h=hi(512,256),u=new Float32Array(512*256);for(let f=0;f<512;f++){const d=l(f/511),_=.9+.1*d;for(let x=0;x<256;x++){const m=x*512+f;h.d[m*3]=_,h.d[m*3+1]=_,h.d[m*3+2]=_,u[m]=d}}return{map:Jl(li(h)),normalMap:Jl(ri(u,512,3,256)),uvScale:null,normalScale:1,field:l,folds:i,tinted:!0}});Re("pictureArt",n=>{const i=[[14272936,10251087,4148050,15130057],[8361635,14213090,3095106,12820586],[11056266,15196880,6056775,9067068],[13609376,8015698,15722204,3814198],[9415096,15788760,4479587,12153919]],s=[];for(let r=0;r<5;r++){const o=i[r].map(oi),a=hi(256,256);vs(a,o[n.int(0,3)]);const c=n.int(0,2);if(c===0){let h=0;for(;h<256;){const u=n.int(12,48);Cn(a,0,h,256,Math.min(256,h+u),o[n.int(0,3)],n.range(.5,1)),h+=u}}else if(c===1)for(let h=0;h<n.int(5,11);h++){const u=n.range(0,179.2),f=n.range(0,256*.7);Cn(a,u,f,u+n.range(30,110),f+n.range(30,110),o[n.int(0,3)],n.range(.55,.95))}else{const h=n.range(115.2,174.08);Cn(a,0,0,256,h,o[0],1),Cn(a,0,h,256,256,o[2],1);for(let u=0;u<n.int(3,7);u++){const f=n.range(h-40,h+40);Cn(a,0,f,256,f+n.range(3,10),o[n.int(0,3)],n.range(.3,.7))}io(a,n.range(256*.2,256*.8),n.range(20,h-20),n.range(12,26),o[3],.9)}const l=ii(16777215,.97);Cn(a,0,0,256,6,l),Cn(a,0,250,256,256,l),Cn(a,0,0,6,256,l),Cn(a,250,0,256,256,l),s.push(Jl(li(a)))}return{maps:s,map:s[0],uvScale:null,normalScale:0,prints:5,tinted:!1}});const hM={wall:{recipe:"plasterWall",r:1,m:0,cast:!0,tint:!0},wallWet:{recipe:"ceramicTile",r:1,m:0,cast:!0,tint:!1},ceiling:{recipe:"plasterCeiling",r:1,m:0,cast:!1,tint:!0},trim:{recipe:"paintedJoinery",r:1,m:0,cast:!0,tint:!0},doorLeaf:{recipe:"paintedJoinery",r:1,m:0,cast:!0,tint:!0},floorTimber:{recipe:"timberFloor",r:1,m:0,cast:!1,tint:!1},carpet:{recipe:"carpetPile",r:1,m:0,cast:!1,tint:!0},vinyl:{recipe:"vinylSheet",r:1,m:0,cast:!1,tint:!1},tile:{recipe:"ceramicTile",r:1,m:0,cast:!1,tint:!1},joinery:{recipe:"joineryTimber",r:1,m:0,cast:!0,tint:!0},fabric:{recipe:"fabricWeave",r:1,m:0,cast:!0,tint:!0},bedding:{recipe:"fabricWeave",r:1,m:0,cast:!0,tint:!0},bench:{recipe:"laminateBench",r:1,m:0,cast:!0,tint:!1},appliance:{recipe:"applianceEnamel",r:1,m:0,cast:!0,tint:!0},metal:{recipe:"metalBrushed",r:1,m:1,cast:!0,tint:!0},chrome:{recipe:null,r:.18,m:0,cast:!0,tint:!1},ceramic:{recipe:null,r:.12,m:0,cast:!0,tint:!1},screen:{recipe:null,r:.08,m:0,cast:!1,tint:!1},glass:{recipe:null,r:.1,m:0,cast:!1,tint:!1,alpha:.28},ceilingGrid:{recipe:"ceilingGrid",r:1,m:0,cast:!1,tint:!1},quilt:{recipe:"quiltFolds",r:.8,m:0,cast:!0,tint:!0},artwork:{recipe:"pictureArt",r:.55,m:0,cast:!1,tint:!1}},js=new Map;function Mi(n,t=16777215,e=null,i={}){const s=hM[n];if(!s)throw new Error(`Surfaces: no surface named '${n}'`);const r=Object.keys(i).sort().map(h=>h+"="+JSON.stringify(i[h])).join(","),o=n+"|"+t+"|"+r;if(js.has(o))return js.get(o);const a={color:t,roughness:s.r,metalness:s.m,vertexColors:!0};s.alpha!==void 0&&(a.transparent=!0,a.opacity=s.alpha,a.depthWrite=!1);const c=h=>s.alpha!==void 0?eo(h):h;if(s.recipe){const{print:h,...u}=i,f=Object.keys(u).sort().map(p=>p+"="+JSON.stringify(u[p])).join(","),d=e?e.child("tex."+s.recipe+(f?"#"+f:"")):null,_=lr(s.recipe,d,u),x=_.maps?_.maps[Math.min(_.maps.length-1,h??0)]:_.map;if(x&&(a.map=x),_.normalMap){a.normalMap=_.normalMap;const p=_.normalScale??1;a.normalScale=new Ot(p,p)}_.ormMap?(a.aoMap=_.ormMap,a.roughnessMap=_.ormMap,a.aoMapIntensity=1,a.roughness=1,s.m===1&&(a.metalnessMap=_.ormMap,a.metalness=1)):a.roughness=s.r===1?.85:s.r;const m=c(new mn(a));return _.uvScale&&(m.userData.uvScale=_.uvScale),m.userData.cast=s.cast,m.userData.surface=n,js.set(o,m),m}const l=c(new mn(a));return l.userData.cast=s.cast,l.userData.surface=n,js.set(o,l),l}function uM(){for(const n of js.values())n.dispose();js.clear()}I0(uM);const Ht={wallThick:.17,storey:2.65,cornice:.09,doorH:2.05,winSill:.95,winHead:2.15,skirtProud:.018,archW:.09,archProud:.018,archQuirk:.006,corniceGirth:.075,reveal:.019,skirtCommercial:.1,leafT:.035,switchH:1.05,gpoH:.3},Hn={thin:.002,furniture:.003,joinery:.005},pu=new Set;function t0(n,t,e={}){if(e.material)return e.material;try{return Mi(n,t,null,e.recipe||{})}catch(i){pu.has(n)||(pu.add(n),console.error(`RoomKit: surface '${n}' unavailable, falling back to flat colour`,i))}return Yv(t,e)}function se(n,t,e,i,s,r={}){var l;const o=t0(n,s,r),a=r.chamfer?so(t,e,i,r.chamfer):r.graded?fM(t,e,i,r.gradeEdge):new $e(Math.max(t,.001),Math.max(e,.001),Math.max(i,.001)),c=new Dt(a,o);return c.castShadow=r.cast??((l=o.userData)==null?void 0:l.cast)??!1,c.receiveShadow=!0,c}const hr=new Map,$i=n=>Math.round(n*1e3);function Dd(n,t,e){const i=new Float32Array(e*2);for(let s=0;s<e;s++){const r=s*3,o=Math.abs(t[r]),a=Math.abs(t[r+1]),c=Math.abs(t[r+2]);a>=o&&a>=c?(i[s*2]=n[r],i[s*2+1]=n[r+2]):o>=c?(i[s*2]=n[r+2],i[s*2+1]=n[r+1]):(i[s*2]=n[r],i[s*2+1]=n[r+1])}return i}function Nd(n){const t=n.length*3,e=new Float32Array(t*3),i=new Float32Array(t*3);let s=0;for(const o of n){const[a,c,l]=o;let h=c[0]-a[0],u=c[1]-a[1],f=c[2]-a[2],d=l[0]-a[0],_=l[1]-a[1],x=l[2]-a[2],m=u*x-f*_,p=f*d-h*x,v=h*_-u*d;const M=(a[0]+c[0]+l[0])/3,S=(a[1]+c[1]+l[1])/3,R=(a[2]+c[2]+l[2])/3;let A=c,E=l;m*M+p*S+v*R<0&&(A=l,E=c,m=-m,p=-p,v=-v);const P=Math.hypot(m,p,v)||1;m/=P,p/=P,v/=P;for(const C of[a,A,E])e[s*3]=C[0],e[s*3+1]=C[1],e[s*3+2]=C[2],i[s*3]=m,i[s*3+1]=p,i[s*3+2]=v,s++}const r=new en;return r.setAttribute("position",new le(e,3)),r.setAttribute("normal",new le(i,3)),r.setAttribute("uv",new le(Dd(e,i,t),2)),r.setAttribute("color",new le(new Float32Array(t*3).fill(1),3)),r}function so(n,t,e,i=Hn.furniture){n=Math.max(n,.001),t=Math.max(t,.001),e=Math.max(e,.001);const s=Math.min(i,Math.min(n,t,e)/2-5e-4);if(!(s>2e-4))return new $e(n,t,e);const r=`c${$i(n)},${$i(t)},${$i(e)},${$i(s)}`,o=hr.get(r);if(o)return o;const a=n/2,c=t/2,l=e/2,h=[a-s,c-s,l-s],u=[a,c,l],f=(p,v)=>[(v===0?u[0]:h[0])*p[0],(v===1?u[1]:h[1])*p[1],(v===2?u[2]:h[2])*p[2]],d=[];for(const p of[-1,1])for(const v of[-1,1])for(const M of[-1,1])d.push([p,v,M]);const _=[],x=(p,v,M,S)=>{_.push([p,v,M]),_.push([p,M,S])};for(let p=0;p<3;p++){const v=(p+1)%3,M=(p+2)%3;for(const S of[-1,1]){const R=(A,E)=>{const P=[0,0,0];return P[p]=S,P[v]=A,P[M]=E,f(P,p)};x(R(-1,-1),R(1,-1),R(1,1),R(-1,1))}}for(let p=0;p<3;p++)for(let v=p+1;v<3;v++){const M=3-p-v;for(const S of[-1,1])for(const R of[-1,1]){const A=[0,0,0];A[p]=S,A[v]=R,A[M]=-1;const E=[0,0,0];E[p]=S,E[v]=R,E[M]=1,x(f(A,p),f(A,v),f(E,v),f(E,p))}}for(const p of d)_.push([f(p,0),f(p,1),f(p,2)]);const m=Nd(_);return hr.set(r,m),m}const Po=[0,.05,.18,.55];function mu(n,t=.12){const e=t/.12,i=[0];for(let s=1;s<Po.length;s++){const r=Po[s]*e;r<n/2-1e-4&&i.push(r)}i.push(n/2);for(let s=Po.length-1;s>=1;s--){const r=n-Po[s]*e;r>n/2+1e-4&&i.push(r)}return i.push(n),i}function _u(n,t,e,i,s,r){const o=(a,c)=>[t[0]+e[0]*a+i[0]*c,t[1]+e[1]*a+i[1]*c,t[2]+e[2]*a+i[2]*c];for(let a=0;a<s.length-1;a++)for(let c=0;c<r.length-1;c++){const l=o(s[a],r[c]),h=o(s[a+1],r[c]),u=o(s[a+1],r[c+1]),f=o(s[a],r[c+1]);n.push([l,h,u]),n.push([l,u,f])}}function fM(n,t,e,i=.12){const s=`g${$i(n)},${$i(t)},${$i(e)},${$i(i)}`,r=hr.get(s);if(r)return r;const o=e<=n&&e<=t?2:t<=n?1:0,[a,c,l]=o===2?[n,t,e]:o===1?[n,e,t]:[e,t,n],h=a/2,u=c/2,f=l/2,d=mu(a,i),_=mu(c,i),x=[];_u(x,[-h,-u,f],[1,0,0],[0,1,0],d,_),_u(x,[-h,-u,-f],[1,0,0],[0,1,0],d,_);const m=(v,M,S,R)=>{x.push([v,M,S]),x.push([v,S,R])};m([h,-u,-f],[h,u,-f],[h,u,f],[h,-u,f]),m([-h,-u,-f],[-h,u,-f],[-h,u,f],[-h,-u,f]),m([-h,u,-f],[h,u,-f],[h,u,f],[-h,u,f]),m([-h,-u,-f],[h,-u,-f],[h,-u,f],[-h,-u,f]);const p=Nd(x);if(o===1?p.rotateX(-Math.PI/2):o===0&&p.rotateY(Math.PI/2),o!==2){const v=p.attributes.position.array,M=p.attributes.normal.array;p.setAttribute("uv",new le(Dd(v,M,p.attributes.position.count),2))}return hr.set(s,p),p}I0(()=>{for(const n of hr.values())n.dispose();hr.clear()});class O0{constructor(){this.group=new ve,this.colliders=[],this.doors=[],this.interactables=[],this.spots={},this.lights=[],this.faces={},this.decals=[]}add(t){return this.group.add(t),t}solid(t,e,i,s,r,o,a=!1){this.colliders.push({min:new z(t-s/2,e,i-o/2),max:new z(t+s/2,e+r,i+o/2),walkable:a})}spot(t,e,i,s){return this.spots[t]=new z(e,i,s),this.spots[t]}interact(t,e,i,s,r,o,a={},c=1.8){this.interactables.push({id:t,label:e,pos:new z(i,s,r),action:o,data:a,radius:c})}light(t,e,i,s=16770756,r=9,o=13){const a=new Pa(s,r,o,2);return a.position.set(t,e,i),this.group.add(a),this.lights.push(a),a}}function dM(n,t,e,i,s,r,o=bn.floorTimber,a={}){const c=a.thickness??.16,l=se(a.surface??"floorTimber",i,c,s,o,{graded:!0,gradeEdge:a.gradeEdge??.12,cast:!1});return l.position.set(t,r-c/2,e),n.add(l),n.solid(t,r-c,e,i,c,s,!0),l}function pM(n,t,e,i,s,r,o=bn.ceiling,a={}){const c=a.thickness??Ht.cornice,l=se(a.surface??"ceiling",i,c,s,o,{graded:!0,gradeEdge:a.gradeEdge??.12,cast:!1});return l.position.set(t,r+c/2,e),n.add(l),l}function mM(n,t,e,i,s=0,r={}){const o=se("trim",.075,.115,.01,r.colour??bn.trim,{});o.position.set(t,e,i),o.rotation.y=s,n.add(o);const a=se("trim",.03,.055,.004,r.colour??bn.trim,{});return a.rotation.y=s,a.position.set(t,e,i),a.translateZ(.007),n.add(a),o}function _M(n,t,e,i,s=0,r={}){const o=se("trim",.115,.075,.01,r.colour??bn.trim,{});return o.position.set(t,e,i),o.rotation.y=s,n.add(o),o}function Bs(n,t,e,i,s,r,o={}){const a=o.margin??Math.min(Math.max(Math.min(s,r)*.3,.05),.3);let c=t-s/2-a,l=t+s/2+a,h=e-r/2-a,u=e+r/2+a;const f=t-s/2,d=t+s/2,_=e-r/2,x=e+r/2;for(const M of n.decals){if(l<=M.x0||c>=M.x1||u<=M.z0||h>=M.z1)continue;const S=Math.min(l-M.x0,M.x1-c),R=Math.min(u-M.z0,M.z1-h);if(S<=R?t<(M.x0+M.x1)/2?l=Math.max(d,Math.min(l,M.x0)):c=Math.min(f,Math.max(c,M.x1)):e<(M.z0+M.z1)/2?u=Math.max(x,Math.min(u,M.z0)):h=Math.min(_,Math.max(h,M.z1)),l>M.x0+1e-4&&c<M.x1-1e-4&&u>M.z0+1e-4&&h<M.z1-1e-4)return null}const m=l-c,p=u-h;if(m<.05||p<.05)return null;const v=new Dt(new Ci(m,p),Ad());return v.rotation.x=-Math.PI/2,v.position.set((c+l)/2,i+.006,(h+u)/2),n.add(v),n.decals.push({x0:c,x1:l,z0:h,z1:u}),v}new Kn;function gM(n,t,e,i){if(n.door===!1||n.leaf===!1||n.door===void 0&&n.leaf===void 0&&t<=1.005)return null;const s=n.door||{},r=t>=1.25,o=s.style??(n.leaf?"panel":r?"glazed":"panel");return{label:s.label??"door",style:o,pair:s.pair??r,auto:s.auto??!1,startsShut:s.startsShut??!0,face:s.swing??i,colour:s.colour??n.leaf??(o==="glazed"?cr.metal:e),surfaceName:s.surface??n.leafSurface??"doorLeaf",triggerR:s.triggerR,dwell:s.dwell,leaves:[]}}function Qn(n,t,e,i,s,r={}){const{y0:o=0,height:a=Ht.storey,thickness:c=Ht.wallThick,colour:l=bn.wall,innerColour:h=null,outerColour:u=null,openings:f=[],skirting:d=!0,skirtStyle:_="timber",cornice:x=!0,corniceStyle:m="cove",autoServices:p=!0,inner:v=null,surface:M="wall",trimColour:S=bn.trim,graded:R=!0,name:A=null}=r,E=h??u,P=i-t,C=s-e,g=Math.hypot(P,C);if(g<.01)return;const y=P/g,b=C/g,L=Math.atan2(-b,y),N=-b,k=y,I=c/2,D=(F,Z,nt,lt=0,ct=0)=>(F.position.set(t+y*Z+N*lt,nt,e+b*Z+k*lt),F.rotation.y=L+ct,n.add(F),F),U=(F,Z,nt,lt={})=>se("trim",F,Z,nt,lt.colour??S,lt),Y=v===null?[-1,1]:[v],K=(F,Z,nt,lt)=>{const ct=Z-F,pt=lt-nt;if(ct<=.005||pt<=.005)return;const gt=(F+Z)/2,St=x&&m==="shadowline"&&Math.abs(lt-(o+a))<.02,B=St?pt-.01:pt,ue=ct>=1.2&&B>=1.2,It=se(M,ct,B,c,l,{graded:R&&ue,cast:!0});if(D(It,gt,nt+B/2),St){const O=se(M,ct,.01,c-.02,l,{});D(O,gt,lt-.005)}const Gt=Math.abs(y)*ct+Math.abs(b)*c,Tt=Math.abs(b)*ct+Math.abs(y)*c,Kt=t+y*gt,xt=e+b*gt;if(n.solid(Kt,nt,xt,Gt,pt,Tt),E)for(const O of Y){const w=se(M,ct,B,.02,E,{graded:R&&ue});D(w,gt,nt+B/2,O*(I+.01))}if(d&&_&&nt-o<.02)if(_==="commercial"){const O=U(ct,Ht.skirtCommercial,c+.04,{colour:bn.tileFloor,chamfer:Hn.thin});D(O,gt,nt+Ht.skirtCommercial/2)}else{const O=[[.112,Ht.skirtProud,0,Hn.thin],[.018,.014,.112,0],[.008,.008,.13,0]];for(const[w,X,it,ot]of O){const st=U(ct,w,c+X*2,{chamfer:ot});D(st,gt,nt+it+w/2)}}if(x&&m==="cove"&&Math.abs(lt-(o+a))<.02){const O=Ht.corniceGirth/Math.SQRT2;for(const w of Y){const X=U(ct,Ht.corniceGirth,.008,{chamfer:0});D(X,gt,lt-O/2,w*(I+O/2)),X.rotation.order="YXZ",X.rotation.set(-w*Math.PI/4,L,0)}}},tt=(F,Z,nt,lt)=>{const ct=lt-nt;for(const gt of[-1,1]){const St=U(Ht.reveal,ct,c,{});D(St,F+gt*(Z/2-Ht.reveal/2),nt+ct/2)}const pt=U(Z,Ht.reveal,c,{});D(pt,F,lt-Ht.reveal/2)},J=(F,Z,nt,lt)=>{const ct=Z-2*Ht.reveal,pt=ct/2+Ht.archQuirk,gt=lt+Ht.archQuirk;for(const St of[-1,1])for(const B of[-1,1]){const ue=U(Ht.archW,gt-nt+.002,Ht.archProud,{chamfer:Hn.joinery});if(D(ue,F+St*(pt+Ht.archW/2),nt+(gt-nt)/2,B*(I+Ht.archProud/2)),nt-o<.02){const It=U(Ht.archW+.02,.15,.032,{});D(It,F+St*(pt+Ht.archW/2),nt+.075,B*(I+.016))}}for(const St of[-1,1]){const B=U(ct+2*(Ht.archW+Ht.archQuirk),Ht.archW,Ht.archProud,{chamfer:Hn.joinery});D(B,F,gt+Ht.archW/2,St*(I+Ht.archProud/2))}},q=[...f].sort((F,Z)=>F.at-Z.at);let H=0;for(const F of q){const Z=F.width/2,nt=Math.max(0,F.at-Z),lt=Math.min(g,F.at+Z),ct=F.kind==="window"?F.sill??Ht.winSill:0,pt=F.kind==="window"?F.head??Ht.winHead:F.head??(F.kind==="arch"?2.25:Ht.doorH);if(K(H,nt,o,o+a),ct>0&&K(nt,lt,o,o+ct),K(nt,lt,o+pt,o+a),H=lt,F.kind==="window"){const gt=pt-ct,St=o+(ct+pt)/2,B=v===null?1:-v,ue=new Dt(new $e(F.width-2*Ht.reveal-.002,gt-.002,.006),jv());ue.castShadow=!1,ue.receiveShadow=!0,D(ue,F.at,St,B*.015);const It=new Dt(new $e(F.width-2*Ht.reveal-.002,gt-.002,.006),Kv());It.castShadow=!1,It.receiveShadow=!0,D(It,F.at,St,-B*.015),tt(F.at,F.width,o+ct,o+pt),J(F.at,F.width,o+ct,o+pt);const Gt=Math.max(1,Math.round((F.width-2*Ht.reveal)/.9)),Tt=F.width-2*Ht.reveal;for(let xt=1;xt<Gt;xt++){const O=U(.04,gt,.05,{chamfer:Hn.joinery});D(O,F.at-Tt/2+Tt/Gt*xt,St)}const Kt=F.restrictor?Math.min(o+1.7,o+pt-.1):o+ct+gt/3;if(gt>.55){const xt=U(Tt,.04,.05,{chamfer:Hn.joinery});D(xt,F.at,Kt)}if(F.restrictor){const xt=U(.06,.02,.03,{colour:bn.metalDull,chamfer:Hn.thin});D(xt,F.at+Tt/4,o+ct+.02,0)}for(const xt of Y){const O=U(F.width+.09,.025,c/2+.03,{chamfer:Hn.joinery});D(O,F.at,o+ct-.0125,xt*(c/4+.015))}if(v!==null){const xt=U(F.width+.12,.04,.09,{chamfer:Hn.joinery});D(xt,F.at,o+ct-.02,-v*(I+.045)),xt.rotation.order="YXZ",xt.rotation.set(v*.1,L,0)}if(F.curtains){xM(n,t+y*F.at,o+pt+.15,e+b*F.at,L,F.width+.4,{offset:(v??1)*(I+.09)});const xt=[.3,.22],O=v??1;for(const X of[-1,1]){const it=xt[X<0?0:1],ot=F.width*it,st=6;for(let At=0;At<st;At++){const ft=ot/st,yt=se("fabric",ft*1.35,gt+.35,.045,F.curtains,{cast:!0}),Zt=F.at+X*(F.width/2-ot+(At+.5)*ft);D(yt,Zt,St+.1,O*(I+.075),At%2?.175:-.175)}}const w=U(F.width+.44,.12,.09,{chamfer:Hn.joinery});D(w,F.at,o+pt+.21,O*(I+.055))}}else if((F.kind==="door"||F.kind==="arch")&&(tt(F.at,F.width,o,o+pt),J(F.at,F.width,o,o+pt),F.kind==="door")){const gt=F.swing??1,St=F.width/2-Ht.reveal,B=I-.045;for(const Gt of[-1,1]){const Tt=U(.013,pt-.02,.03,{});D(Tt,F.at+Gt*(St-.0055),o+(pt-.02)/2,gt*B)}const ue=U(F.width-2*Ht.reveal,.014,.03,{});D(ue,F.at,o+pt-.025,gt*B);const It=gM(F,F.width,S,gt);if(It){const Gt=B+.015+Ht.leafT,Tt=pt-Ht.reveal-.02,Kt=It.pair?St-.006:2*St-.006,xt=It.face,O=It.pair?[1,-1]:[xt];for(const w of O){const X=F.at+w*(St-.003),it=xt*Gt;It.leaves.push({hx:t+y*X+N*it,hz:e+b*X+k*it,y:o,baseRot:L,phiOpen:w*xt*Math.PI/2,leafRot:w>0?0:Math.PI,dx:-w*Kt/2,dz:-xt*Ht.leafT/2,lw:Kt,lh:Tt});for(const ot of[.15,1.02,1.89]){if(ot>Tt-.1)continue;const st=se("chrome",.016,.1,.016,cr.metal,{chamfer:.001,cast:!1});D(st,X,o+.015+ot,it)}}It.centre={x:t+y*F.at,z:e+b*F.at},It.y0=o,n.doors.push(It)}}if(p&&F.kind==="door"){const gt=-(F.swing??1);for(const St of[-1,1])mM(n,t+y*(F.at+gt*(F.width/2+Ht.archW+.15))+N*St*(I+.006),o+Ht.switchH,e+b*(F.at+gt*(F.width/2+Ht.archW+.15))+k*St*(I+.006),L+(St<0?Math.PI:0))}}if(K(H,g,o,o+a),p&&v!==null&&o+Ht.gpoH<o+a){const F=Math.max(1,Math.floor(g/3.5));for(let Z=0;Z<F;Z++){const nt=(Z+.5)*(g/F);q.some(lt=>Math.abs(lt.at-nt)<lt.width/2+.25)||_M(n,t+y*nt+N*v*(I+.006),o+Ht.gpoH,e+b*nt+k*v*(I+.006),L+(v<0?Math.PI:0))}}A&&(n.faces[A]={a:{x:t,z:e},b:{x:i,z:s},u:{x:y,z:b},n:{x:N,z:k},angle:L,thickness:c,y0:o,height:a,length:g,face:F=>({x:(t+i)/2+N*F*(c/2),z:(e+s)/2+k*F*(c/2),nx:N*F,nz:k*F,rotY:L+(F<0?Math.PI:0)})})}function xM(n,t,e,i,s=0,r=1.6,o={}){const a=new ve,c=new Dt(new ee(.0125,.0125,r,8),t0("chrome",o.colour??cr.metalDark));c.rotation.z=Math.PI/2,a.add(c);for(const l of[-1,1]){const h=new Dt(new xs(.0175,8,6),t0("chrome",o.colour??cr.metalDark));h.position.x=l*r/2,a.add(h)}return a.rotation.y=s,a.position.set(t,e,i),a.translateZ(o.offset??0),n.add(a),a}function Od(n,t=!1){const e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,c=new en;let l=0;for(let h=0;h<n.length;++h){const u=n[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0;const u=[];for(let f=0;f<n.length;++f){const d=n[f].index;for(let _=0;_<d.count;++_)u.push(d.getX(_)+h);h+=n[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=gu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);const _=gu(d);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(_)}}return c}function gu(n){let t,e,i,s=-1,r=0;for(let l=0;l<n.length;++l){const h=n[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new le(o,e,i);let c=0;for(let l=0;l<n.length;++l){const h=n[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let f=0,d=h.count;f<d;f++)for(let _=0;_<e;_++){const x=h.getComponent(f,_);a.setComponent(f+u,_,x)}}else o.set(h.array,c);c+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const vM=new Set(["position","normal","uv","color"]);function Na(n,t={}){var a,c;n.updateMatrixWorld(!0);const e=new Map,i=[],s=new Set;n.traverse(l=>{var _,x;if(l===n)return;for(let m=l.parent;m&&m!==n;m=m.parent)if(s.has(m))return;if(l.isInstancedMesh||l.userData.isSign||l.isLight){i.push(l),s.add(l);return}if(!l.isMesh||!((x=(_=l.geometry)==null?void 0:_.attributes)!=null&&x.position))return;const h=l.material.uuid;e.has(h)||e.set(h,{material:l.material,geos:[],cast:!1});const u=l.geometry.clone();u.applyMatrix4(l.matrixWorld);for(const m of Object.keys(u.attributes))vM.has(m)||u.deleteAttribute(m);const f=u.attributes.position.count;u.attributes.uv||u.setAttribute("uv",new le(new Float32Array(f*2),2)),u.attributes.color||u.setAttribute("color",new le(new Float32Array(f*3).fill(1),3));const d=e.get(h);d.geos.push(u.index?u.toNonIndexed():u),d.cast=d.cast||l.castShadow});const r=t.colliders?new ma(t.colliders,1):null,o=new ve;for(const{material:l,geos:h,cast:u}of e.values()){if(!h.length)continue;const f=h.length===1?h[0]:Od(h,!1);if(!f){console.error("bakeGroup: merge returned null (mismatched attributes)",l);continue}const d=((a=l.userData)==null?void 0:a.decal)===!0,_=(c=l.userData)==null?void 0:c.uvScale;_&&!d&&Oa(f,_[0],_[1]),r&&!d&&Ud(f,r);const x=new Dt(f,l);x.castShadow=d?!1:u,x.receiveShadow=!d,d&&(x.renderOrder=2),o.add(x)}for(const l of i)o.add(l);return o}function Oa(n,t,e=t){const i=n.attributes.position.count,s=n.attributes.position.array,r=n.attributes.normal.array,o=new Float32Array(i*2);for(let a=0;a<i;a++){const c=a*3,l=Math.abs(r[c]),h=Math.abs(r[c+1]),u=Math.abs(r[c+2]);let f,d;h>=l&&h>=u?(f=s[c],d=s[c+2]):l>=u?(f=s[c+2],d=s[c+1]):(f=s[c],d=s[c+1]),o[a*2]=f/t,o[a*2+1]=d/e}n.setAttribute("uv",new le(o,2))}const Sc=512,xu=1024;function vu(n,t,e){return((n+Sc)*xu+(t+Sc))*xu+(e+Sc)}class ma{constructor(t,e=1){this.cell=e,this.boxes=t,this.bins=new Map;for(let i=0;i<t.length;i++){const s=t[i],r=Math.floor(s.min.x/e),o=Math.floor(s.max.x/e),a=Math.floor(s.min.y/e),c=Math.floor(s.max.y/e),l=Math.floor(s.min.z/e),h=Math.floor(s.max.z/e);for(let u=r;u<=o;u++)for(let f=a;f<=c;f++)for(let d=l;d<=h;d++){const _=vu(u,f,d);let x=this.bins.get(_);x||(x=[],this.bins.set(_,x)),x.push(i)}}this._stamp=new Int32Array(t.length),this._epoch=0,this._out=[]}near(t,e,i,s){const r=this.cell,o=this._out;o.length=0;const a=++this._epoch,c=Math.floor((t-s)/r),l=Math.floor((t+s)/r),h=Math.floor((e-s)/r),u=Math.floor((e+s)/r),f=Math.floor((i-s)/r),d=Math.floor((i+s)/r);for(let _=c;_<=l;_++)for(let x=h;x<=u;x++)for(let m=f;m<=d;m++){const p=this.bins.get(vu(_,x,m));if(p)for(let v=0;v<p.length;v++){const M=p[v];this._stamp[M]!==a&&(this._stamp[M]=a,o.push(this.boxes[M]))}}return o}}const MM=.18,yM=.55,Mu=.75,SM=.3,yu=.55,EM=1.2;function Ud(n,t){const e=t instanceof ma?t:new ma(t,1),i=Array.isArray(n)?n:[n];for(const s of i)wM(s,e)}function wM(n,t){const e=n.attributes.color;if(!e||e.itemSize!==3||e.normalized||!n.attributes.normal)return;const i=n.attributes.position.array,s=n.attributes.normal.array,r=e.array,o=n.attributes.position.count;for(let a=0;a<o;a++){const c=a*3,l=s[c],h=s[c+1],u=s[c+2],f=i[c]+l*.01,d=i[c+1]+h*.01,_=i[c+2]+u*.01;let x=0;const m=t.near(f,d,_,EM);for(let v=0;v<m.length;v++){const M=m[v],S=Math.max(M.min.x-f,0,f-M.max.x),R=Math.max(M.min.y-d,0,d-M.max.y),A=Math.max(M.min.z-_,0,_-M.max.z),E=Math.sqrt(S*S+R*R+A*A);if(E>Mu*3)continue;const P=(M.min.x+M.max.x)/2-f,C=(M.min.y+M.max.y)/2-d,g=(M.min.z+M.max.z)/2-_;l*P+h*C+u*g<=0||(x+=yM*Math.exp(-E/MM)+SM*Math.exp(-E/Mu))}const p=Math.max(yu,1-Math.min(1-yu,x));r[c]*=p,r[c+1]*=p,r[c+2]*=p}e.needsUpdate=!0}const et=Object.freeze({CEIL_H:3.3,FLAT_FACE:3.15,STRUCT_FACE:3.166,CANT_FACE:3.511346,CANT_LEN:1.932113,CORNER_X:1.799792,VERTEX:Object.freeze([1.835,3.251]),BAND_TOP:2.7,TILE:.9,BAY_CENTRE:2.362686,BAY_FRONT:3.171346,BAY_W:1.4,BAY_D:.34,BAY_H:2.2,RIM:1.13,PANEL_OUT:1.1,PANEL_IN:.56,PANEL_Y0:.9,PANEL_Y1:1.16,RIM_TOP:.96,DAIS_A:1.75,COFFER_IN:1.6,COFFER_OUT:2.3,SPAWN:Object.freeze([0,0,2.3]),SPAWN_YAW:Math.PI,HEX_THETA:Math.PI/6}),ai=Object.freeze({TILE:.9,PER_TILE:1,DIA:.72,LIP_DIA:.69,COVE_DIA:.6,DISH_DIA:.51,RECESS:.055,PROUD:.006,DISC_R:.25,DISC_PROUD:.001,COLUMNS:Object.freeze([-1.35,-.45,.45,1.35]),ROWS:Object.freeze([.45,1.35,2.25]),LIT_ROW:1.35}),Xt=Object.freeze({ROUNDEL:12303029,BAND:9474188,CEIL:11118498,DECK:5198935,DAIS:7765124,CONSOLE:13947592,PANEL:6973799,DARK:2764339,CHROME:13225682,JOINERY:7034951,GLOW_W:12960958,GLOW_C:12371148,GLASS:13227742}),Su=Object.freeze({ROUNDEL:38.718,BAND:26.288,CEIL:40.657,DECK:25.752,DAIS:10.227,CONSOLE:13.965,PANEL:9.566,DARK:9.034,CHROME:4.338,JOINERY:2.8,GLOW_W:6.463,GLOW_C:2.8,GLASS:2.239}),AM=16772301,bM=1.05,TM=12376319,RM=1.25,na=n=>n<0?0:n>1?1:n,Fd=n=>n*n*(3-2*n);function U0(n){if(!n.getAttribute("color")){const t=n.getAttribute("position").count;n.setAttribute("color",new le(new Float32Array(t*3).fill(1),3))}return n}const nn=512,ro=nn/ai.TILE,Do=ai.DISH_DIA/2*ro,Eu=ai.COVE_DIA/2*ro,Ec=ai.LIP_DIA/2*ro,wu=ai.DIA/2*ro,Au=1,wc=1+ai.PROUD/ai.RECESS,bu=1.5,LM=ai.RECESS*ro,CM=(n,t)=>1-Fd(na((n-t+bu*.5)/bu));let Tu=!1;function kd(){Tu||(Tu=!0,Re("roundel",n=>{const t=new Float32Array(nn*nn),e=new Float32Array(nn*nn),i=new Float32Array(nn*nn),s=xe(n,nn,{p0:32,octaves:3});for(let r=0;r<nn;r++)for(let o=0;o<nn;o++){const a=r*nn+o,c=o+.5-nn/2,l=r+.5-nn/2,h=Math.hypot(c,l);let u,f,d;if(h<=Do){const v=h/Do;u=0,f=.62-.2*v,d=.52}else{const v=Fd(na((h-Do)/(Eu-Do)));u=v,f=.42+.36*v,d=.52+.22*v}let _,x,m;if(h<=Ec)_=wc,x=1,m=.74;else if(h<=wu){const v=(h-Ec)/(wu-Ec);_=wc-(wc-Au)*v,x=1,m=.74+.08*v}else _=Au,x=1,m=.82;const p=1-CM(h,Eu);t[a]=u+(_-u)*p,e[a]=f+(x-f)*p,i[a]=na(d+(m-d)*p+(s[a]-.5)*.06)}return{normalMap:ri(t,nn,LM),ormMap:Ge(nn,e,i,null),uvScale:[ai.TILE,ai.TILE],normalScale:1,tinted:!0}}),Re("consolePanel",n=>{const i=new Float32Array(65536),s=new Float32Array(256*256),r=xe(n,256,{p0x:10,p0y:256,octaves:2}),o=xe(n,256,{p0:48,octaves:3});for(let a=0;a<256;a++){const c=n.range(-.06,.06);for(let l=0;l<256;l++){const h=a*256+l;i[h]=na(.42+c+(r[h]-.5)*.09+(o[h]-.5)*.06)}}return{ormMap:Ge(256,null,i,s),uvScale:[.32,.32],normalScale:0,tinted:!0}}))}let Ac=null;function Bd(n=null){if(Ac)return Ac;kd();for(const s of Object.keys(Su))Da(Xt[s],Su[s]);const t={},e=lr("roundel",n?n.child("tex.roundel"):null);t.ROUNDEL=new mn({color:Xt.ROUNDEL,roughness:1,metalness:0,normalMap:e.normalMap,normalScale:new Ot(e.normalScale,e.normalScale),aoMap:e.ormMap,roughnessMap:e.ormMap,aoMapIntensity:1,vertexColors:!0}),t.ROUNDEL.userData.uvScale=e.uvScale,t.ROUNDEL.userData.cast=!0,t.ROUNDEL.userData.surface="roundel",t.BAND=Mi("trim",Xt.BAND,n),t.CEIL=Mi("ceiling",Xt.CEIL,n),t.DECK=Mi("vinyl",Xt.DECK,n),t.DAIS=Mi("metal",Xt.DAIS,n),t.CONSOLE=Mi("appliance",Xt.CONSOLE,n),t.DARK=Mi("metal",Xt.DARK,n),t.CHROME=Mi("chrome",Xt.CHROME,n),t.JOINERY=Mi("joinery",Xt.JOINERY,n);const i=lr("consolePanel",n?n.child("tex.consolePanel"):null);return t.PANEL=new mn({color:Xt.PANEL,roughness:1,metalness:0,aoMap:i.ormMap,roughnessMap:i.ormMap,aoMapIntensity:1,vertexColors:!0}),t.PANEL.userData.uvScale=i.uvScale,t.PANEL.userData.cast=!0,t.PANEL.userData.surface="consolePanel",t.GLOW_W=new mn({color:Xt.GLOW_W,roughness:.55,metalness:0,emissive:AM,emissiveIntensity:bM,vertexColors:!0}),t.GLOW_W.userData.cast=!0,t.GLOW_C=new mn({color:Xt.GLOW_C,roughness:.2,metalness:0,emissive:TM,emissiveIntensity:RM,vertexColors:!0}),t.GLOW_C.userData.cast=!0,t.GLASS=eo(new mn({color:Xt.GLASS,roughness:.1,metalness:0,transparent:!0,opacity:.3,depthWrite:!1,side:ei,vertexColors:!0})),t.GLASS.userData.cast=!1,t.SHADOW=Ad(),Ac=t,t}const ki=Math.SQRT1_2,bc=n=>2*n*Math.tan(Math.PI/6),Rr=n=>2*Math.sqrt(3)*n*n,Ru=n=>n/Math.cos(Math.PI/6),No=7.2,IM=.02,Oo=et.BAND_TOP,Lr=3.16,Uo=et.BAND_TOP,Tc=.03,Rc=.06,PM=.026,Lc=.1,DM=.02,Gn=1.8,Ie=2.61,e0=.9,_a=.045,Vr=et.FLAT_FACE+_a/2,Lu=.05,Cu=3.311,zs=.09,n0=.05,Iu=3.14+n0/2,Cc=.25,NM=.001,Pu=1.35,OM=3.1,Ic=.2,Pc=.1,UM=.006;function F0(n){if(!n.getAttribute("color")){const t=n.getAttribute("position").count;n.setAttribute("color",new le(new Float32Array(t*3).fill(1),3))}return n}function FM(n,t,e){const i=new ee(Ru(n),Ru(n),t,6,1,!1,e).toNonIndexed();return i.computeVertexNormals(),F0(i)}const kM=["CEIL_H","FLAT_FACE","STRUCT_FACE","CANT_FACE","CORNER_X","BAND_TOP","DAIS_A","COFFER_IN","COFFER_OUT","HEX_THETA"],BM=["ROUNDEL","BAND","CEIL","DAIS","DARK","CHROME","GLOW_W","GLOW_C"];function zM(n){for(const t of kM)if(!Number.isFinite(et[t]))throw new Error(`Shell: ROOM.${t} is not a number (got ${et[t]})`);if(!Array.isArray(et.SPAWN)||et.SPAWN.length!==3)throw new Error("Shell: ROOM.SPAWN must be [x, y, z]");if(!n)throw new Error("Shell: shell(b, P) needs the palette from roundels.js");for(const t of BM)if(!n[t]||!n[t].isMaterial)throw new Error(`Shell: palette is missing ${t}`)}function HM(n,t){var s;const e=F0(new $e(e0,Ie,_a).toNonIndexed());e.applyMatrix4(new Vt().makeTranslation(n*.45,Ie/2,Vr));const i=(s=t.ROUNDEL.userData)==null?void 0:s.uvScale;if(!i)throw new Error("Shell: P.ROUNDEL carries no uvScale — the leaf UVs cannot be projected");return Oa(e,i[0],i[1]),e.applyMatrix4(new Vt().makeTranslation(n*(Gn/2),0,Vr).invert()),e.computeVertexNormals(),e}function GM(n,t,e={}){zM(t);const i=e.liveDoors!==!1,s=Object.create(null),r=(J,q,H)=>(s[J]=(s[J]??0)+H,Da(q,s[J]),q),o=6.332*6.332-4*(1.366208*1.366208/2);r("DECK",Xt.DECK,o-Rr(et.DAIS_A)),dM(n,0,0,No,No,0,Xt.DECK,{surface:"vinyl",thickness:.16});const a=n.colliders.length;r("CEIL",Xt.CEIL,o),pM(n,0,0,No,No,et.CEIL_H,Xt.CEIL,{surface:"ceiling",thickness:.09});const c={height:et.CEIL_H,thickness:Ht.wallThick,colour:Xt.BAND,surface:"trim",skirting:!1,cornice:!1,autoServices:!1,graded:!1,inner:1},l=1.835,h=3.251;Qn(n,-l,-h,l,-h,{...c,name:"flatS"}),Qn(n,l,-h,h,-l,{...c,name:"baySE"}),Qn(n,h,-l,h,l,{...c,name:"flatE"}),Qn(n,h,l,l,h,{...c,name:"bayNE"}),Qn(n,l,h,.9,h,{...c,name:"pierR"}),Qn(n,.9,h,-.9,h,{...c,y0:Ie,height:et.CEIL_H-Ie,name:"lintel"}),Qn(n,-.9,h,-l,h,{...c,name:"pierL"}),Qn(n,-l,h,-h,l,{...c,name:"bayNW"}),Qn(n,-h,l,-h,-l,{...c,name:"flatW"}),Qn(n,-h,-l,-l,-h,{...c,name:"baySW"}),n.colliders.length=a;const u=(et.STRUCT_FACE-et.CORNER_X)*Math.SQRT2,f=2*et.CORNER_X,d=4*f+4*u;r("BAND",Xt.BAND,4*u*et.CEIL_H+4*f*(et.CEIL_H-2.8)-Gn*(et.CEIL_H-2.8));const _={material:t.ROUNDEL,cast:!0},x=(J,q,H,F)=>{const Z=se("wall",J,Oo,IM,Xt.ROUNDEL,_);return Z.position.set(q,Oo/2,H),Z.rotation.y=F,n.add(Z)};r("ROUNDEL",Xt.ROUNDEL,3*3.6*Oo+2*.9*Oo),x(3.6,0,-Lr,0),x(3.6,Lr,0,-Math.PI/2),x(3.6,-Lr,0,Math.PI/2),x(.9,1.35,Lr,Math.PI),x(.9,-1.35,Lr,Math.PI),r("ROUNDEL",Xt.ROUNDEL,2*e0*Ie);const m=new ve;m.name="doorPivots";const p=[];if(i)for(const J of[1,-1]){const q=new He;q.position.set(J*(Gn/2),0,Vr),q.userData.side=J;const H=new Dt(HM(J,t),t.ROUNDEL);H.name="doorLeaf",H.castShadow=!0,H.receiveShadow=!0,H.frustumCulled=!1,q.add(H),m.add(q),p.push(q)}else for(const J of[-1,1]){const q=se("doorLeaf",e0,Ie,_a,Xt.ROUNDEL,_);q.position.set(J*.45,Ie/2,Vr),n.add(q)}r("DARK",Xt.DARK,Gn*Ie);const v={material:t.DARK,cast:!1},M=.575,S=2.11,R=.14,A=3.266;if(i){for(const H of[-1,1]){const F=se("metal",Gn/2-M,Ie,R,Xt.DARK,v);F.position.set(H*(M+(Gn/2-M)/2),Ie/2,A),n.add(F)}const J=se("metal",2*M,Ie-S,R,Xt.DARK,v);J.position.set(0,(S+Ie)/2,A),n.add(J);const q=se("metal",2*M,S,Lu,Xt.DARK,v);q.position.set(0,S/2,Cu),n.add(q)}else{const J=se("metal",Gn,Ie,Lu,Xt.DARK,v);J.position.set(0,Ie/2,Cu),n.add(J)}const E={material:t.BAND,cast:!0};r("BAND",Xt.BAND,2*zs*(Ie+.045)+(Gn+2*zs)*zs);for(const J of[-1,1]){const q=se("trim",zs,Ie+.045,n0,Xt.BAND,E);q.position.set(J*(Gn/2+zs/2),(Ie+.045)/2,Iu),n.add(q)}const P=se("trim",Gn+2*zs,Uo-Ie,n0,Xt.BAND,E);P.position.set(0,(Ie+Uo)/2,Iu),n.add(P),r("GLOW_W",Xt.GLOW_W,16*Math.PI*Cc*Cc);const C=F0(new gs(Cc,40)),g=[],y=(J,q,H)=>{const F=new Dt(C,t.GLOW_W);return F.position.set(J,Pu,q),F.rotation.y=H,F.castShadow=!1,F.receiveShadow=!1,g.push(F),n.add(F)},b=et.FLAT_FACE-NM;for(const J of[-1.35,-.45,.45,1.35])y(J,-b,0),y(b,J,-Math.PI/2),y(-b,J,Math.PI/2);let L=null;for(const J of[-1.35,1.35])y(J,b,Math.PI);if(i){L=new pa(C,t.GLOW_W,2),L.name="doorDiscs",L.castShadow=!1,L.receiveShadow=!1,L.frustumCulled=!1,L.instanceMatrix.setUsage(qr);const J=new Vt;[.45,-.45].forEach((q,H)=>{J.makeRotationY(Math.PI).setPosition(q,Pu,b),L.setMatrixAt(H,J)}),L.instanceMatrix.needsUpdate=!0,n.add(L)}else for(const J of[-.45,.45])y(J,b,Math.PI);const N=et.CORNER_X,k=et.STRUCT_FACE,I=[[-N,-k,N,-k],[N,-k,k,-N],[k,-N,k,N],[k,N,N,k],[N,k,-N,k],[-N,k,-k,N],[-k,N,-k,-N],[-k,-N,-N,-k]].map(([J,q,H,F])=>{const Z=H-J,nt=F-q,lt=Math.hypot(Z,nt),ct=Z/lt,pt=nt/lt;return{len:lt,nx:-pt,nz:ct,mx:(J+H)/2,mz:(q+F)/2,angle:Math.atan2(-pt,ct)}}),D=(J,q,H,F)=>(J.position.set(q.mx+q.nx*F,H,q.mz+q.nz*F),J.rotation.y=q.angle,n.add(J));r("CHROME",Xt.CHROME,d*(Tc+Rc)),r("GLOW_W",Xt.GLOW_W,d*Lc);for(const J of I)D(se("chrome",J.len,Tc,Rc,Xt.CHROME,{material:t.CHROME,cast:!1}),J,Uo+Tc/2,PM-Rc/2),D(se("trim",J.len,Lc,DM,Xt.GLOW_W,{material:t.GLOW_W,cast:!1}),J,Uo+Lc/2,0);const U=(et.COFFER_IN+et.COFFER_OUT)/2,Y=bc(et.COFFER_OUT),K=et.COFFER_OUT-et.COFFER_IN;r("CEIL",Xt.CEIL,Rr(et.COFFER_OUT)-Rr(et.COFFER_IN)+6*Y*Ic),r("GLOW_C",Xt.GLOW_C,6*bc(et.COFFER_IN)*Pc);for(let J=0;J<6;J++){const q=J*Math.PI/3,H=Math.sin(q),F=Math.cos(q),Z=se("ceiling",Y,Ic,K,Xt.CEIL,{material:t.CEIL,cast:!1});Z.position.set(U*H,OM+Ic/2,U*F),Z.rotation.y=q,n.add(Z);const nt=se("trim",bc(et.COFFER_IN),Pc,.02,Xt.GLOW_C,{material:t.GLOW_C,cast:!1});nt.position.set(et.COFFER_IN*H,et.CEIL_H-Pc/2,et.COFFER_IN*F),nt.rotation.y=q,n.add(nt)}r("DAIS",Xt.DAIS,Rr(et.DAIS_A)-Rr(.62));const tt=new Dt(FM(et.DAIS_A,UM*2,et.HEX_THETA),t.DAIS);return tt.position.set(0,0,0),tt.castShadow=!1,tt.receiveShadow=!0,n.add(tt),n.userData??(n.userData={}),n.userData.collision={planes:[{nx:0,nz:1,d:et.FLAT_FACE},{nx:1,nz:0,d:et.FLAT_FACE},{nx:0,nz:-1,d:et.FLAT_FACE},{nx:-1,nz:0,d:et.FLAT_FACE},{nx:ki,nz:ki,d:et.CANT_FACE},{nx:ki,nz:-ki,d:et.CANT_FACE},{nx:-ki,nz:-ki,d:et.CANT_FACE},{nx:-ki,nz:ki,d:et.CANT_FACE}],hulls:[],boxes:[{x:0,z:Vr,hw:Gn/2,hd:_a/2,rotY:0,y0:0,y1:Ie}]},n.spot("spawn",et.SPAWN[0],et.SPAWN[1],et.SPAWN[2]),n.spot("doors",0,0,2.25),n.interact("doors","Doors",0,1.2,et.FLAT_FACE,"doors",{},1.4),{litDiscs:g,areas:s,doorGroup:m,leaves:p,discs:L}}for(const n of["HEX_THETA","RIM","PANEL_OUT","PANEL_IN","PANEL_Y0","PANEL_Y1","RIM_TOP"])if(typeof et[n]!="number")throw new Error(`Console.js: ROOM.${n} is missing or not a number`);const k0=Math.PI/3,zd=Math.tan(Math.PI/6),i0=1/Math.cos(Math.PI/6),Du=.62,Dc=.7,Fo=et.PANEL_IN,VM=0,Nu=.1,Ou=.72,gi=1.32,Hd=et.PANEL_Y1-et.PANEL_Y0,Gd=et.PANEL_OUT-et.PANEL_IN,WM=Math.atan2(Hd,Gd),Ei=Math.hypot(Hd,Gd),Uu=(et.PANEL_OUT+et.PANEL_IN)/2,Fu=(et.PANEL_Y0+et.PANEL_Y1)/2,Xr=et.PANEL_OUT*zd,ga=et.PANEL_IN*zd,ku=WM-Math.PI/2,Vd=n=>Xr+(n+Ei/2)/Ei*(ga-Xr),Bu=-Ei/2+.1246,Qi=-.17,ur=Qi+.34,qM=.05,XM=Math.hypot(Xr-ga,Ei),Wd=qM/(Ei/XM),Yr=Vd(Qi)-Wd,xa=Vd(ur)-Wd,de=-.012,qd=Math.hypot(xa-Yr,ur-Qi),YM=-.34/qd,$M=(xa-Yr)/qd,ko=(n,t)=>(Math.abs(n)-Yr)*YM+(t-Qi)*$M,ie=-.086,we=.05,Ze=.14,Bi=.006,zi=.084,s0=new $e(1,1,1);s0.setAttribute("color",new le(new Float32Array(s0.attributes.position.count*3).fill(1),3));const B0=.008,kr=.005,Xd=de+kr+B0/2,jM=de-.006-B0/2,rn=new $e(1,1,1),Nc=new ee(.5,.5,1,16),KM=new ee(.5,.5,1,8),zu=new xs(.5,10,8);function z0(n,t,e,i,s,r,o){let a=(i[1]-e[1])*(s[2]-e[2])-(i[2]-e[2])*(s[1]-e[1]),c=(i[2]-e[2])*(s[0]-e[0])-(i[0]-e[0])*(s[2]-e[2]),l=(i[0]-e[0])*(s[1]-e[1])-(i[1]-e[1])*(s[0]-e[0]),h=e,u=i,f=s,d=r;a*o[0]+c*o[1]+l*o[2]<0&&(h=r,u=s,f=i,d=e,a=-a,c=-c,l=-l);const _=Math.hypot(a,c,l)||1;a/=_,c/=_,l/=_;for(const x of[h,u,f,h,f,d])n.push(x[0],x[1],x[2]),t.push(a,c,l)}function H0(n,t){const e=new en;return e.setAttribute("position",new le(new Float32Array(n),3)),e.setAttribute("normal",new le(new Float32Array(t),3)),e}function Hu(n,t){const e=n*i0,i=[];for(let s=0;s<6;s++){const r=et.HEX_THETA+s*k0;i.push([e*Math.sin(r),t,e*Math.cos(r)])}return i}function zn(n,t,e,i,s){const r=Hu(n,t),o=Hu(e,i),a=[],c=[];for(let l=0;l<6;l++){const h=(l+1)%6,u=et.HEX_THETA+(l+.5)*k0,f=s==="up"?[0,1,0]:s==="down"?[0,-1,0]:s==="out"?[Math.sin(u),0,Math.cos(u)]:[-Math.sin(u),0,-Math.cos(u)];z0(a,c,r[l],r[h],o[h],o[l],f)}return H0(a,c)}function Bo(n,t,e,i){const s=new ee(t*i0,n*i0,i-e,6,1,!1,et.HEX_THETA).toNonIndexed();return s.computeVertexNormals(),s.translate(0,(e+i)/2,0),s}function Yd(n,t,e){const i=[],s=[];for(const[r,o,a,c]of n)z0(i,s,[r[0],r[1],t],[o[0],o[1],t],[a[0],a[1],t],[c[0],c[1],t],e);return H0(i,s)}const Hi=[[-Xr,-Ei/2],[Xr,-Ei/2],[ga,Ei/2],[-ga,Ei/2]],pn=[[-Yr,Qi],[Yr,Qi],[xa,ur],[-xa,ur]],ZM=Yd([[Hi[0],Hi[1],pn[1],pn[0]],[Hi[1],Hi[2],pn[2],pn[1]],[Hi[2],Hi[3],pn[3],pn[2]],[Hi[3],Hi[0],pn[0],pn[3]]],0,[0,0,1]),JM=(()=>{const n=[],t=[];for(let e=0;e<4;e++){const i=pn[e],s=pn[(e+1)%4],r=(i[0]+s[0])/2,o=(i[1]+s[1])/2;z0(n,t,[i[0],i[1],0],[s[0],s[1],0],[s[0],s[1],de],[i[0],i[1],de],[-r,-o,0])}return H0(n,t)})(),QM=Yd([[pn[0],pn[1],pn[2],pn[3]]],de,[0,0,1]),ty=[{n:1,lamp:"doors",name:"DOOR CONTROL",ctl:[["lever",-.3,ie,{len:.13,lean:.35,slot:.13}],["dial",-.13,ie,{r:.07,needle:.1,rate:.2}],["dial",.045,ie,{r:.046}],["toggle",.18,ie,{tilt:.55}],["toggle",.25,ie,{tilt:-.55}],["toggle",.32,ie,{tilt:.55}],["button",-.32,we,{r:.02}],["button",-.255,we,{r:.02}],["toggle",-.16,we,{tilt:.55}],["toggle",-.1,we,{tilt:-.55}],["toggle",-.04,we,{tilt:.55}],["bar",.21,Bi,{w:.13,h:zi}],["lamps",-.2,Ze,{n:3,pitch:.075}],["readout",.17,Ze,{w:.17,h:.042,seg:3}]]},{n:2,lamp:"scanner",name:"SCANNER",ctl:[["lever",-.32,ie,{len:.115,lean:-.35,slot:.12}],["lever",-.235,ie,{len:.115,lean:.35,slot:.12}],["dial",-.08,ie,{r:.07,needle:.1,rate:.28}],["dial",.09,ie,{r:.052,needle:.066,rate:-.44}],["button",.23,ie,{r:.022}],["button",.3,ie,{r:.022}],["toggle",-.33,we,{tilt:.55}],["toggle",-.27,we,{tilt:.55}],["toggle",-.21,we,{tilt:-.55}],["bar",-.06,Bi,{w:.12,h:zi}],["bar",.1,Bi,{w:.12,h:zi}],["lamps",-.23,Ze,{n:4,pitch:.07}],["readout",.19,Ze,{w:.14,h:.042,seg:2}]]},{n:3,lamp:"life",name:"LIFE SUPPORT",ctl:[["dial",-.31,ie,{r:.058,needle:.078,rate:.16}],["dial",-.16,ie,{r:.058,needle:.078,rate:-.13}],["dial",-.01,ie,{r:.058,needle:.078,rate:.11}],["lever",.16,ie,{len:.13,lean:.35,slot:.13}],["button",.29,ie,{r:.024}],["button",.36,ie,{r:.018}],["toggle",-.33,we,{tilt:.55}],["toggle",-.27,we,{tilt:-.55}],["toggle",-.21,we,{tilt:.55}],["toggle",-.15,we,{tilt:-.55}],["bar",0,Bi,{w:.11,h:zi}],["bar",.15,Bi,{w:.11,h:zi}],["lamps",-.23,Ze,{n:4,pitch:.07}],["readout",.19,Ze,{w:.14,h:.042,seg:3}]]},{n:4,lamp:"nav",name:"NAVIGATION",ctl:[["dial",-.3,ie,{r:.058,needle:.078,rate:.24}],["dial",-.16,ie,{r:.058,needle:.078,rate:-.19}],["dial",-.02,ie,{r:.058,needle:.078,rate:.31}],["dial",.14,ie,{r:.07,needle:.1,rate:.09}],["guarded",.31,ie,{tilt:-.6}],["lamps",-.25,we,{n:6,pitch:.078}],["toggle",.26,we,{tilt:.55}],["toggle",.32,we,{tilt:-.55}],["readout",-.28,Ze,{w:.085,h:.042,seg:2}],["readout",-.168,Ze,{w:.085,h:.042,seg:2}],["readout",-.056,Ze,{w:.085,h:.042,seg:2}],["readout",.056,Ze,{w:.085,h:.042,seg:2}],["readout",.168,Ze,{w:.085,h:.042,seg:2}],["readout",.28,Ze,{w:.085,h:.042,seg:2}]]},{n:5,lamp:"flight",name:"FLIGHT",ctl:[["lever",-.3,ie,{len:.15,lean:.3,slot:.15,big:!0}],["lever",-.17,ie,{len:.13,lean:-.35,slot:.13}],["dial",0,ie,{r:.07,needle:.1,rate:.36}],["dial",.17,ie,{r:.052,needle:.066,rate:-.22}],["button",.3,ie,{r:.022}],["bar",-.3,Bi,{w:.11,h:zi}],["bar",-.165,Bi,{w:.11,h:zi}],["toggle",.03,we,{tilt:.55}],["toggle",.09,we,{tilt:-.55}],["toggle",.15,we,{tilt:.55}],["lamps",-.22,Ze,{n:4,pitch:.074}],["readout",.19,Ze,{w:.14,h:.042,seg:2}]]},{n:6,lamp:"diag",name:"DIAGNOSTIC",ctl:[["button",-.31,ie,{r:.038,lamp:!0}],["dial",-.17,ie,{r:.062,needle:.084,rate:.26}],["dial",-.01,ie,{r:.062,needle:.084,rate:-.17}],["column",.29,-.1,{n:8,pitch:.03}],["toggle",-.33,we,{tilt:.55}],["toggle",-.27,we,{tilt:-.55}],["button",-.18,we,{r:.02}],["button",-.115,we,{r:.02}],["bar",.02,Bi,{w:.11,h:zi}],["lamps",-.23,Ze,{n:3,pitch:.074}],["readout",.07,Ze,{w:.11,h:.042,seg:2}]]}];function ey(n,t,e={}){if(!t||!t.CONSOLE||!t.PANEL||!t.DARK||!t.CHROME||!t.GLOW_C)throw new Error("Console.js: consoleUnit(b, P) needs the palette from roundels.js");const i=new ve;i.name="console",n.add(i);const s=(L,N,k,I,D,U,Y,K)=>{const tt=new Dt(N,k);return tt.position.set(I,D,U),Y&&tt.scale.set(Y[0],Y[1],Y[2]),K&&tt.rotation.set(K[0],K[1],K[2]),tt.castShadow=!1,tt.receiveShadow=!0,L.add(tt),tt};s(i,Bo(Du,Du,VM,Nu),t.CONSOLE,0,0,0),s(i,Bo(Dc,Dc,Nu,Ou),t.CONSOLE,0,0,0),s(i,Bo(Dc,et.PANEL_OUT,Ou,et.PANEL_Y0),t.CONSOLE,0,0,0),e.collar!==!1&&s(i,Bo(Fo,Fo,et.PANEL_Y1,gi),t.CONSOLE,0,0,0),s(i,zn(et.PANEL_OUT,et.PANEL_Y0,et.PANEL_OUT,et.RIM_TOP,"in"),t.CONSOLE,0,0,0),s(i,zn(et.PANEL_OUT,et.PANEL_Y0,et.RIM,et.RIM_TOP,"out"),t.CONSOLE,0,0,0),s(i,zn(et.PANEL_OUT,et.RIM_TOP,et.RIM,et.RIM_TOP,"up"),t.CONSOLE,0,0,0);const r=et.PANEL_OUT-.008,o=et.RIM,a=et.RIM_TOP-.002,c=et.RIM_TOP+.014;s(i,zn(o,a,o,c,"out"),t.CHROME,0,0,0),s(i,zn(r,a,r,c,"in"),t.CHROME,0,0,0),s(i,zn(r,c,o,c,"up"),t.CHROME,0,0,0),s(i,zn(r,a,o,a,"down"),t.CHROME,0,0,0);const l=Fo-.006,h=Fo+.01;s(i,zn(h,gi-.01,h,gi+.004,"out"),t.CHROME,0,0,0),s(i,zn(l,gi-.01,l,gi+.004,"in"),t.CHROME,0,0,0),s(i,zn(l,gi+.004,h,gi+.004,"up"),t.CHROME,0,0,0),s(i,zn(l,gi-.01,h,gi-.01,"down"),t.CHROME,0,0,0);const u=[],f=[],d=[];let _=1/0;for(let L=0;L<6;L++){const N=L*k0,k=ty[L],I=new ve;I.rotation.y=N,i.add(I);const D=new ve;D.position.set(0,Fu,Uu),D.rotation.x=ku,I.add(D),d.push(new Vt().makeRotationY(N).multiply(new Vt().makeTranslation(0,Fu,Uu)).multiply(new Vt().makeRotationX(ku))),s(D,ZM,t.PANEL,0,0,0),s(D,JM,t.PANEL,0,0,0),s(D,QM,t.DARK,0,0,0),_=Math.min(_,ny(D,L,k,t,s,u));const U=et.RIM*Math.sin(N),Y=et.RIM*Math.cos(N),K=(N+Math.PI)%(Math.PI*2),tt=(et.RIM+.9)*Math.sin(N),J=(et.RIM+.9)*Math.cos(N);n.spot(`panel${k.n}`,tt,0,J),n.interact(`panel${k.n}`,k.name,U,et.RIM_TOP,Y,"panel",{panel:k.n},1.2),f.push({id:`panel${k.n}`,panel:k.n,lamp:k.lamp,name:k.name,azimuth:N,azimuthDeg:L*60,anchor:[U,et.RIM_TOP,Y],stand:[tt,J],yaw:K})}_<Bu&&console.error(`Console.js: a control reaches v ${_.toFixed(4)}, outboard of the sightline limit ${Bu.toFixed(4)} — the rim upstand hides it from a standing player (§6.3)`);const x=new pa(s0,t.GLOW_C,Math.max(u.length,1));x.name="consoleLamps",x.instanceMatrix.setUsage(qr),x.castShadow=!1,x.receiveShadow=!1,x.frustumCulled=!1,n.add(x);const m=f.map(()=>({active:!1,blinkLeft:0,blinkT:0})),p=new Map;f.forEach((L,N)=>{p.set(L.id,N),p.set(L.lamp,N),p.set(L.panel,N),p.set(String(L.panel),N)});let v=0;const M=new Vt,S=new mr,R=new $n,A=new z,E=new z;function P(L,N){return N.blinkLeft>0?(N.blinkLeft&1)===1:N.active?!0:(Math.floor(v/.55)+L.slot)%3===0}function C(L,N){const k=m[N.pi];let I=N.x,D=N.v,U=N.z,Y=N.sy,K=N.rz;if(N.kind==="lamp")U=P(N,k)?Xd:jM;else if(N.kind==="needle")K=N.rz+N.spin;else if(N.kind==="bar"){const tt=.18+.82*(.5+.5*Math.sin(v*N.rate+N.phase));Y=N.sy*tt,D=N.v+Y/2}R.set(0,0,K),S.setFromEuler(R),A.set(I,D,U),E.set(N.sx,Y,N.sz),M.compose(A,S,E).premultiply(d[N.pi]),x.setMatrixAt(L,M)}function g(){for(let L=0;L<u.length;L++)C(L,u[L]);x.instanceMatrix.needsUpdate=!0}g(),n.userData=n.userData||{};const y=n.userData.collision=n.userData.collision||{planes:[],hulls:[],boxes:[]};y.hulls=y.hulls||[];const b={apothem:et.RIM,y1:1.2};return y.hulls.push(b),{panels:f,setLamp(L,N){const k=p.get(L);k!==void 0&&(m[k].active=!!N)},blink(L,N=1){const k=p.get(L);k!==void 0&&(m[k].blinkLeft=Math.max(1,Math.round(N)*2),m[k].blinkT=0)},update(L){if(L>0){v+=L;for(let N=0;N<m.length;N++){const k=m[N];if(k.blinkLeft>0)for(k.blinkT+=L;k.blinkT>=.085&&k.blinkLeft>0;)k.blinkT-=.085,k.blinkLeft--}for(const N of u)N.kind==="needle"&&(N.spin+=N.rate*L*(m[N.pi].active?3.2:1));g()}},hull:b}}function Gu(n,t,e,i){const s=n+Math.cos(Math.PI/2+t)*e;return[Math.min(n,s-i),Math.max(n,s+i)]}const Oc=.03,Uc=.036,zo=.013;function ny(n,t,e,i,s,r){let o=1/0;const a=(u,f,d,_)=>console.error(`Console.js: panel ${e.n} ${u} at x ${f.toFixed(3)} v ${d.toFixed(3)} ${_}`),c=(u,f,d,_,x)=>{o=Math.min(o,_),_<Qi-1e-9&&a(u,f,d,`overhangs the recess lip (v0 ${_.toFixed(4)} < ${Qi})`),x>ur+1e-9&&a(u,f,d,`overhangs the inner lip (v1 ${x.toFixed(4)} > ${ur.toFixed(3)})`)},l=(u,f,d,_,x,m)=>{c(u,f,d,x,m);const p=Math.abs(f)+_;Math.min(ko(p,x),ko(p,m))<-1e-9&&a(u,f,d,"runs off the field")},h=(u,f,d,_)=>{c(u,f,d,d-_,d+_),ko(f,d)<_-1e-9&&a(u,f,d,`runs off the field (clear ${ko(f,d).toFixed(4)} < r ${_})`)};for(const[u,f,d,_={}]of e.ctl)switch(u){case"toggle":case"guarded":{const x=u==="guarded",[m,p]=Gu(d,_.tilt,Uc,zo),v=x?.0225:.017;l(u,f,d,x?.0265:.017,Math.min(m,d-v),Math.max(p,d+v)),s(n,rn,i.CHROME,f,d,de+.0025,[.032,.03,.005]);const M=Math.PI/2+_.tilt,S=Math.cos(M),R=Math.sin(M);s(n,rn,i.CHROME,f,d+S*(Oc/2+.004),de+.005+R*(Oc/2+.004),[.008,Oc,.008],[M-Math.PI/2,0,0]),s(n,zu,i.CHROME,f,d+S*Uc,de+.005+R*Uc,[zo*2,zo*2,zo*2]),x&&(s(n,rn,i.CHROME,f-.024,d,de+.02,[.005,.044,.04]),s(n,rn,i.CHROME,f+.024,d,de+.02,[.005,.044,.04]),s(n,rn,i.CHROME,f,d-.02,de+.02,[.053,.005,.04]));break}case"button":{h("button",f,d,_.r+.004),s(n,Nc,i.CHROME,f,d,de+.004,[_.r*2+.008,.008,_.r*2+.008],[Math.PI/2,0,0]),_.lamp?r.push(Fc(t,f,d,_.r*1.55,_.r*1.55,r.length)):s(n,Nc,i.CHROME,f,d,de+.012,[_.r*2,.016,_.r*2],[Math.PI/2,0,0]);break}case"dial":{h("dial",f,d,Math.max(_.r+.012,(_.needle||0)/2)),s(n,Nc,i.CHROME,f,d,de+.006,[_.r*2,.012,_.r*2],[Math.PI/2,0,0]);const x=_.r+.008;for(let m=0;m<8;m++){const p=m*Math.PI/4;s(n,rn,i.CHROME,f+x*Math.cos(p),d+x*Math.sin(p),de+.003,[.004,.011,.006],[0,0,p-Math.PI/2])}s(n,KM,i.CHROME,f,d,de+.016,[_.r*.42,.018,_.r*.42],[Math.PI/2,0,0]),_.needle&&r.push({pi:t,kind:"needle",x:f,v:d,z:de+.016,sx:.006,sy:_.needle,sz:.005,rz:0,spin:(t*1.7+_.needle*37)%(Math.PI*2),rate:_.rate??.2});break}case"lever":{const x=Math.PI/2+_.lean,m=Math.cos(x),p=Math.sin(x),v=_.big?.038:.03,M=_.big?.03:.022,S=d-Math.sign(m)*(_.slot/2-.012),[R,A]=Gu(S,_.lean,_.len+.01,M);l("lever",f,d,v/2+.007,Math.min(R,d-_.slot/2),Math.max(A,d+_.slot/2)),s(n,rn,i.DARK,f,d,de+.0015,[v,_.slot,.003]),s(n,rn,i.CHROME,f,S,de+.008,[v+.014,.026,.016]),s(n,rn,i.CHROME,f,S+m*(_.len/2),de+.01+p*(_.len/2),[_.big?.016:.012,_.len,_.big?.016:.012],[x-Math.PI/2,0,0]),s(n,zu,i.CHROME,f,S+m*(_.len+.01),de+.01+p*(_.len+.01),[M*2,M*2,M*2]);break}case"bar":{l("bar",f,d,_.w/2+.005,d-.005,d+_.h+.005),Vu(n,i,s,f,d+_.h/2,_.w,_.h);const x=Math.max(1,Math.round(_.w/.052)),m=(_.w-.012)/x;for(let p=0;p<x;p++)r.push({pi:t,kind:"bar",x:f-_.w/2+.006+m*(p+.5),v:d+.004,z:de+.005,sx:m*.72,sy:_.h-.01,sz:.006,rz:0,rate:.7+p*.23,phase:p*1.7+t});break}case"readout":{l("readout",f,d,_.w/2+.005,d-_.h/2-.005,d+_.h/2+.005),Vu(n,i,s,f,d,_.w,_.h);const x=_.seg??2,m=(_.w-.012)/x;for(let p=0;p<x;p++)r.push({pi:t,kind:"bar",x:f-_.w/2+.006+m*(p+.5),v:d-_.h/2+.005,z:de+.005,sx:m*.66,sy:_.h-.012,sz:.006,rz:0,rate:1.4+p*.6+t*.11,phase:p*2.3+t*.8});break}case"lamps":{for(let x=0;x<_.n;x++){const m=f+x*_.pitch;l("lamp",m,d,.02,d-.016,d+.016),s(n,rn,i.CHROME,m,d,de+kr/2,[.04,.032,kr]),r.push(Fc(t,m,d,.03,.022,r.length))}break}case"column":{for(let x=0;x<_.n;x++){const m=d+x*_.pitch;l("column lamp",f,m,.017,m-.012,m+.012),s(n,rn,i.CHROME,f,m,de+kr/2,[.034,.024,kr]),r.push(Fc(t,f,m,.024,.015,r.length))}break}default:console.error(`Console.js: panel ${e.n} has an unknown control kind '${u}'`)}return o}function Vu(n,t,e,i,s,r,o){const c=de+.003;e(n,rn,t.CHROME,i,s+o/2,c,[r+.005*2,.005,.007]),e(n,rn,t.CHROME,i,s-o/2,c,[r+.005*2,.005,.007]),e(n,rn,t.CHROME,i-r/2-.005/2,s,c,[.005,o,.007]),e(n,rn,t.CHROME,i+r/2+.005/2,s,c,[.005,o,.007])}function Fc(n,t,e,i,s,r){return{pi:n,kind:"lamp",x:t,v:e,z:Xd,sx:i,sy:s,sz:B0,rz:0,slot:r}}const iy=1/Math.cos(Math.PI/6),Cr={y0:1.16,y1:1.32,apothem:.56},Ir={y0:2.36,y1:2.48,apothem:.3},wn={y0:1.32,y1:2.36,r:.26,segments:24},sy=.008,Pe={y0:1.4,y1:2.32,h:.62,r:.2,ringR:.214,ringH:.03,pistonR:.038,pistonH:.42},ry=Pe.y1-Pe.y0-Pe.h,kc=Pe.y0+Pe.h/2,oy=Pe.y1-Pe.h/2,Pr={count:6,radius:.31,section:.028},ay=3.2,cy=1.6,ly=2.4;function Wu(n,t){const e=n*iy,i=new ee(e,e,t,6,1,!1,et.HEX_THETA).toNonIndexed();return i.computeVertexNormals(),i}function hy(n){const t=n.getIndex();for(let i=0;i<t.count;i+=3){const s=t.getX(i+1);t.setX(i+1,t.getX(i+2)),t.setX(i+2,s)}t.needsUpdate=!0;const e=n.getAttribute("normal");for(let i=0;i<e.count;i++)e.setXYZ(i,-e.getX(i),-e.getY(i),-e.getZ(i));return e.needsUpdate=!0,n}function uy(n,t){eo(t.GLASS);const e=wn.y1-wn.y0,i=(wn.y0+wn.y1)/2,s=new Dt(new ee(wn.r,wn.r,e,wn.segments,1,!0),t.GLASS);if(s.position.y=i,n.add(s),t.GLASS.side===Yn){const r=wn.r-sy,o=new Dt(hy(new ee(r,r,e,wn.segments,1,!0)),t.GLASS);o.position.y=i,n.add(o)}}function fy(n){const t=new ve,e=Pe.h/3,i=e-Pe.ringH,s=new ee(Pe.ringR,Pe.ringR,Pe.ringH,20,1,!1),r=new ee(Pe.r,Pe.r,i,20,1,!1);for(let c=0;c<3;c++){const l=-.31+c*e,h=new Dt(s,n.CHROME);h.position.y=l+Pe.ringH/2,t.add(h);const u=new Dt(r,n.GLOW_C);u.position.y=l+Pe.ringH+i/2,t.add(u)}const o=new Dt(new ee(Pe.pistonR,Pe.pistonR,Pe.pistonH,12,1,!1),n.CHROME);o.position.y=-.62/2-Pe.pistonH/2,t.add(o);const a=Na(t);return a.name="rotorCarriage",a}function dy(n,t,e={}){const i=e.period??ay,s=e.stroke??ry,r=Math.PI*2/i;if(e.collar!==!1){const x=new Dt(Wu(Cr.apothem,Cr.y1-Cr.y0),t.CONSOLE);x.position.y=(Cr.y0+Cr.y1)/2,n.add(x)}uy(n,t);const o=new $e(Pr.section,wn.y1-wn.y0,Pr.section);for(let x=0;x<Pr.count;x++){const m=et.HEX_THETA+x*Math.PI/3,p=new Dt(o,t.DAIS);p.position.set(Math.sin(m)*Pr.radius,(wn.y0+wn.y1)/2,Math.cos(m)*Pr.radius),p.rotation.y=m,n.add(p)}if(e.cap!==!1){const x=new Dt(Wu(Ir.apothem,Ir.y1-Ir.y0),t.CONSOLE);x.position.y=(Ir.y0+Ir.y1)/2,n.add(x)}n.interactables.some(x=>x.id==="rotor")||n.interact("rotor","Time Rotor",0,1.84,0,"rotor",{},2.4);const a=new ve;a.name="timeRotor";const c=fy(t);a.add(c);let l=e.running?1:0,h=l,u=l,f=0,d=kc+s*u*.5*(1-Math.cos(f));c.position.y=d;function _(x){x>0&&(x>.1&&(x=.1),h>l?l=Math.min(1,l+x/cy):h<l&&(l=Math.max(0,l-x/ly)),u=l*l*(3-2*l),l===0?f=0:f=(f+r*(.45+.55*u)*x)%(Math.PI*2),d=kc+s*u*.5*(1-Math.cos(f)),c.position.y=d)}return{group:a,setRunning(x){h=x?1:0},update:_,get height(){return d},get drive(){return u},get running(){return h===1},parked:kc,apex:oy}}const ze=(et==null?void 0:et.BAY_CENTRE)??2.362686,Br=(et==null?void 0:et.BAY_W)??1.4,ds=(et==null?void 0:et.BAY_D)??.34,In=(et==null?void 0:et.BAY_H)??2.2;et==null||et.CANT_LEN;const tr=Br/2,er=ds/2,qu={scanner:{x:ze,z:ze,rotY:-2.356194},fault:{x:-ze,z:ze,rotY:2.356194},food:{x:ze,z:-ze,rotY:-.785398}},Zi=er,qn=.05,$d=.052,py=.076,r0=.095,Bc=.6,o0=.78,Xu=.018,my=.35,_y=1.2,a0=1.785,ps=8,va=6,jd=.1375,Kd=.15,gy=.02,Zd=1.55,$r=ps*va,xy=4,vy=2,My=0,yy=1,Sy=2,Ey=3,wy=$r,Ay=$r+1,by=$r+2,Ty=n=>n*n*(3-2*n),Ne={unitBox:Yu(new $e(1,1,1)),unitDisc:Yu(new gs(1,20)),rotary:new ee(.034,.038,.03,12),rotaryCap:new ee(.012,.012,.014,8),pilot:new ee(.014,.014,.01,10),hook:new ee(.009,.009,.1,8),hookBall:new xs(.016,8,6),finial:new xs(.044,10,8),standBase:new ee(.12,.28,.045,16),standTaper:new ee(.046,.12,.16,12),standPole:new ee(.028,.034,1.42,12),standCollar:new ee(.056,.056,.052,12),hatCrown:new ee(.088,.094,.105,12),hatBrim:new ee(.15,.15,.012,16),dial:new ee(.128,.128,.022,20),clockFinial:new ee(.024,.034,.052,10),packet:new ee(.028,.028,.11,8)};function Yu(n){const t=n.attributes.position.count;return n.setAttribute("color",new le(new Float32Array(t*3).fill(1),3)),n}function Pt(n,t,e,i,s,r,o,a,c={}){const l=new Dt(c.chamfer===0?new $e(Math.max(e,.001),Math.max(i,.001),Math.max(s,.001)):so(e,i,s,c.chamfer??.003),t);return l.position.set(r,o,a),c.rotX&&(l.rotation.x=c.rotX),c.rotY&&(l.rotation.y=c.rotY),c.rotZ&&(l.rotation.z=c.rotZ),l.receiveShadow=!0,n.add(l),l}function We(n,t,e,i,s,r,o={}){const a=new Dt(t,e);return a.position.set(i,s,r),o.rotX&&(a.rotation.x=o.rotX),o.rotY&&(a.rotation.y=o.rotY),o.rotZ&&(a.rotation.z=o.rotZ),o.scale&&a.scale.set(o.scale[0],o.scale[1],o.scale[2]),a.receiveShadow=!0,n.add(a),a}function G0(n,t,e,i,s,r,o,a,c){const l=c-a/2;Pt(n,t,e,o,a,s,r+i/2-o/2,l,{chamfer:.002}),Pt(n,t,e,o,a,s,r-i/2+o/2,l,{chamfer:.002});const h=i-o*2;Pt(n,t,o,h,a,s-e/2+o/2,r,l,{chamfer:.002}),Pt(n,t,o,h,a,s+e/2-o/2,r,l,{chamfer:.002})}function V0(n,t,e){Pt(n,t.DAIS,Br-.06,.1,ds-.06,0,.05,0,{chamfer:.004}),Pt(n,t.CONSOLE,Br,In-.1,.06,0,1.15,-er+.03);for(const a of[-1,1])Pt(n,t.CONSOLE,.11,In-.1,ds,a*(tr-.055),1.15,0,{chamfer:.005});Pt(n,t.CONSOLE,Br,.03,ds,0,In-.015,0,{chamfer:.005});const i=Br-.22,s=(Zi+qn)/2,r=Zi-qn;let o=.1;for(const a of e){a[0]>o+.001&&Pt(n,t.CONSOLE,i,a[0]-o,r,0,(o+a[0])/2,s,{chamfer:.004});const c=a[2]??qn;if(Pt(n,t.DARK,i,a[1]-a[0],.014,0,(a[0]+a[1])/2,c-.007,{chamfer:0}),c<qn-.001){const l=qn-c;for(const h of[-1,1])Pt(n,t.DARK,.014,a[1]-a[0],l,h*(i/2-.007),(a[0]+a[1])/2,c+l/2,{chamfer:0});for(const h of[-1,1])Pt(n,t.DARK,i,.014,l,0,a[h>0?1:0]-h*.007,c+l/2,{chamfer:0})}o=a[1]}return o<In-.031&&Pt(n,t.CONSOLE,i,In-.03-o,r,0,(o+In-.03)/2,s,{chamfer:.004}),{innerW:i,zA:s,dA:r}}function Jd(n,t,e,i,s){return Pt(n,t.PANEL,e,i,.016,0,s,Zi-.028,{chamfer:.003})}function Ry(n,t){V0(n,t,[[1.4,2.17]]),Pt(n,t.GLOW_C,1.1,.72,.01,0,1.8,$d-.005,{chamfer:0});const e=.0535,i=1.495;Pt(n,t.DARK,1.1,i-1.442,.003,0,(i+1.442)/2,e,{chamfer:0});for(const[l,h,u]of[[-.34,.42,.018],[.05,.32,.031],[.38,.34,.012]])Pt(n,t.DARK,h,u,.003,l,i+u/2,e,{chamfer:0});G0(n,t.CHROME,1.16,.75,0,1.795,.03,.024,py);const s=.962,r=s-tr,o=.245,a=1.34;for(const l of[-1,1]){const h=l*(tr+r/2);Pt(n,t.DAIS,r-.03,.1,ds-.06,h,.05,0,{chamfer:.004}),Pt(n,t.CONSOLE,r,a-.1,ds,h,(.1+a)/2,0,{chamfer:.005}),Pt(n,t.CONSOLE,r,In-a,o,h,(a+In)/2,-er+o/2,{chamfer:.005})}Pt(n,t.CONSOLE,s*2,.03,ds,0,In+.015,0,{chamfer:.005});for(const l of[-1,1])Pt(n,t.CHROME,s*2-.012,.016,.022,0,a0+l*(o0/2+.012),r0,{chamfer:.002});const c=new ve;c.position.set(0,1.07,.118),c.rotation.x=-.436,n.add(c),Pt(c,t.PANEL,1.18,.2,.02,0,0,0,{chamfer:.004});for(let l=0;l<3;l++){const h=-.36+l*.36;We(c,Ne.rotary,t.CHROME,h,.03,.025,{rotX:Math.PI/2}),We(c,Ne.rotaryCap,t.CHROME,h,.03,.046,{rotX:Math.PI/2})}for(let l=0;l<2;l++){const h=-.18+l*.36;Pt(c,t.DARK,.07,.034,.014,h,-.052,.014,{chamfer:.002}),Pt(c,t.CHROME,.018,.04,.014,h,-.046,.016,{rotZ:.35,chamfer:.002})}for(const l of[-1,1])We(c,Ne.pilot,t.GLOW_C,l*.52,.03,.014,{rotX:Math.PI/2})}function Ly(n,t){V0(n,t,[[1.1,2.06]]);const e=Zd,i=qn+.008;for(let s=0;s<=ps-2;s++)Pt(n,t.CHROME,.006,.9,.016,(s-3)*jd,e,i,{chamfer:0});for(let s=0;s<=va-2;s++)Pt(n,t.CHROME,1.1,.006,.016,0,e+(s-2)*Kd,i,{chamfer:0});G0(n,t.CHROME,1.16,.96,0,e,.028,.02,qn+.02),Jd(n,t,1.18,.14,1.03),Pt(n,t.DARK,.9,.05,.02,0,1.05,Zi-.04,{chamfer:0}),Pt(n,t.CHROME,.94,.014,.024,0,1.016,Zi-.018,{chamfer:.002});for(let s=0;s<6;s++)Pt(n,t.DAIS,.15,.036,.014,-.475+s*.19,2.115,Zi-.02,{chamfer:.002})}function Cy(n,t){V0(n,t,[[.74,.98,0],[1.27,1.93,-.1]]),Pt(n,t.DAIS,.47,.014,.17,0,.793,.082,{chamfer:.002}),Pt(n,t.DAIS,.47,.03,.014,0,.812,.15,{chamfer:.002}),Pt(n,t.DARK,.44,.04,.016,0,.95,qn-.03,{chamfer:0}),Pt(n,t.CHROME,.48,.014,.02,0,.926,qn-.014,{chamfer:.002}),Jd(n,t,1.18,.2,1.2);for(let i=0;i<4;i++)for(let s=0;s<3;s++)Pt(n,t.CHROME,.09,.028,.014,-.4125+i*.275,1.14+s*.05,Zi-.013,{chamfer:.002});const e=new Dt(new Ci(.9,.6),t.GLASS);e.position.set(0,1.6,.1),e.receiveShadow=!0,n.add(e),G0(n,t.CHROME,.96,.66,0,1.6,.03,.026,.126);for(const i of[1.42,1.68]){Pt(n,t.DAIS,.86,.014,.18,0,i,0,{chamfer:0});for(let s=0;s<3;s++)We(n,Ne.packet,t.DAIS,-.26+s*.26,i+.062,.01)}for(let i=0;i<5;i++)Pt(n,t.DAIS,.6,.014,.02,0,2.01+i*.03,Zi-.016,{rotX:-.35,chamfer:0})}function Iy(n,t){We(n,Ne.standBase,t.JOINERY,0,.0225,0),We(n,Ne.standTaper,t.JOINERY,0,.125,0),We(n,Ne.standPole,t.JOINERY,0,.915,0),We(n,Ne.standCollar,t.JOINERY,0,1.62,0),We(n,Ne.finial,t.JOINERY,0,1.676,0);for(let i=0;i<4;i++){const s=new ve;s.rotation.y=Math.PI/4+i*Math.PI/2,n.add(s),We(s,Ne.hook,t.CHROME,0,1.64,.075,{rotX:1.05}),We(s,Ne.hookBall,t.CHROME,0,1.665,.118)}const e=new ve;e.position.set(.098,1.612,.098),e.rotation.set(.3,Math.PI/4,.1),n.add(e),We(e,Ne.hatCrown,t.JOINERY,0,.052,0),We(e,Ne.hatBrim,t.JOINERY,0,.006,0)}function Py(n,t){Pt(n,t.JOINERY,.56,.055,.52,0,.44-.028,.02,{chamfer:.008});for(const i of[-1,1])Pt(n,t.JOINERY,.05,.44-.055,.05,i*.255,(.44-.055)/2,.23,{chamfer:.005}),Pt(n,t.JOINERY,.052,1.15,.052,i*.255,.575,-.222,{rotX:-.06,chamfer:.005});Pt(n,t.JOINERY,.46,.52,.038,0,.81,-.202,{rotX:-.06,chamfer:.006}),Pt(n,t.JOINERY,.59,.105,.062,0,1.098,-.24,{rotX:-.06,chamfer:.008});for(let i=0;i<3;i++)for(let s=0;s<2;s++)We(n,Ne.rotaryCap,t.CHROME,-.14+i*.14,.72+s*.18,-.18+(.72+s*.18-.81)*.06,{rotX:Math.PI/2-.06});Pt(n,t.JOINERY,.56,.07,.04,0,.377,.255,{chamfer:.004}),Pt(n,t.JOINERY,.5,.028,.028,0,.15,.03,{chamfer:.003})}function Dy(n,t){Pt(n,t.JOINERY,.52,.06,.42,0,.03,0,{chamfer:.006}),Pt(n,t.JOINERY,.44,.63,.34,0,.375,0,{chamfer:.005}),Pt(n,t.JOINERY,.52,.06,.42,0,.72,0,{chamfer:.006}),Pt(n,t.JOINERY,.36,.48,.24,0,.99,0,{chamfer:.006}),Pt(n,t.JOINERY,.4,.07,.28,0,1.265,0,{chamfer:.006}),We(n,Ne.clockFinial,t.JOINERY,0,1.326,0),We(n,Ne.dial,t.CHROME,0,1.01,.125,{rotX:Math.PI/2}),Pt(n,t.DARK,.014,.088,.01,0,1.048,.14,{chamfer:0}),Pt(n,t.DARK,.062,.012,.01,.025,1.01,.14,{rotZ:.35,chamfer:0});for(const e of[-1,1])We(n,Ne.rotaryCap,t.CHROME,e*.19,1.265,.1)}const Dr=new Vt,Ny=new Vt,Oy=new z;function Hs(n,t,e,i,s,r,o,a,c,l=0){l?(Dr.makeRotationX(l),Dr.scale(Oy.set(o,a,c))):Dr.makeScale(o,a,c),Dr.setPosition(i,s,r),n.setMatrixAt(t,Ny.multiplyMatrices(e,Dr))}const Qd=[];for(let n=0;n<va;n++)for(let t=0;t<ps;t++)Qd.push({x:(t-(ps-1)/2)*jd,y:Zd+(n-(va-1)/2)*Kd});const Gs=.001,Uy=n=>Math.imul(n+1,2654435761)>>>0;function Fy(n,t,e){const i=Uy(n);if(e){const s=n%ps,r=Math.floor(t*9)%ps;return s===r||s===(r+4)%ps?!0:(i>>>(Math.floor(t*6)&15)&1)===1}return((i>>>3)+Math.floor(t/.9))%11<2}function ky(n,t){const e=t||Bd(),i={};for(const C of Object.keys(qu)){const g=qu[C],y=new ve;y.name=`bay.${C}`,y.position.set(g.x,0,g.z),y.rotation.y=g.rotY,n.add(y),i[C]=new Vt().makeRotationY(g.rotY).setPosition(g.x,0,g.z),C==="scanner"?Ry(y,e):C==="fault"?Ly(y,e):Cy(y,e)}const s=[{name:"hatStand",x:-1.525,z:-2.6413,rotY:0,build:Iy},{name:"chair",x:-2.5115,z:-1.45,rotY:1.047198,build:Py},{name:"clock",x:-2.192,z:-2.192,rotY:.785398,build:Dy}];for(const C of s){const g=new ve;g.name=C.name,g.position.set(C.x,0,C.z),g.rotation.y=C.rotY,n.add(g),C.build(g,e)}const r=new ve;r.name="fittings.live";const o=new pa(Ne.unitBox,e.DARK,Ey),a=new pa(Ne.unitDisc,e.GLOW_C,by);for(const C of[o,a])C.instanceMatrix.setUsage(qr),C.frustumCulled=!1,C.castShadow=!1,C.receiveShadow=!0,r.add(C);let c=0,l=0,h=!0,u=-1,f=-1,d=0;const _=new Uint8Array($r).fill(255);function x(){const C=Ty(c)*my;Hs(o,My,i.scanner,-.3-C,a0,r0,Bc,o0,Xu),Hs(o,yy,i.scanner,Bc/2+C,a0,r0,Bc,o0,Xu);const g=h?Gs:1;Hs(o,Sy,i.scanner,0,1.8,$d+.006,1.1*g,.72*g,.006),o.instanceMatrix.needsUpdate=!0}function m(){const C=f>=0&&f<.9&&(Math.floor(f*14)&1)===0;Hs(a,wy,i.food,0,.95,qn-.018,C?.22:Gs,C?.014:Gs,1);const g=f;let y=-1;if(g>=.15&&g<1.75){const L=Math.min((g-.15)/.4,1);y=.945+(.805-.945)*(L*L)}const b=y>0;Hs(a,Ay,i.food,0,b?y:.805,.07,b?.05:Gs,b?.013:Gs,1,-Math.PI/2)}function p(C){const g=u>=0;let y=C;for(let b=0;b<$r;b++){const L=Fy(b,d,g)?1:0;if(L===_[b]&&!C)continue;_[b]=L;const N=Qd[b],k=L?gy:Gs;Hs(a,b,i.fault,N.x,N.y,qn+.006,k,k,1),y=!0}return y}x(),m(),p(!0),a.instanceMatrix.needsUpdate=!0;const v=n.userData.collision||(n.userData.collision={planes:[],hulls:[],boxes:[]});v.boxes||(v.boxes=[]),v.boxes.push({x:ze,z:ze,hw:tr,hd:er,rotY:-2.356194,y0:0,y1:In},{x:-ze,z:ze,hw:tr,hd:er,rotY:2.356194,y0:0,y1:In},{x:ze,z:-ze,hw:tr,hd:er,rotY:-.785398,y0:0,y1:In},{x:-1.525,z:-2.6413,hw:.28,hd:.28,rotY:3.665191,y0:0,y1:1.72},{x:-2.5115,z:-1.45,hw:.31,hd:.34,rotY:1.047198,y0:0,y1:1.15},{x:-2.192,z:-2.192,hw:.25,hd:.2,rotY:.785398,y0:0,y1:1.35}),Bs(n,ze,ze,0,1.1,1.1,{margin:.06}),Bs(n,-ze,ze,0,1.1,1.1,{margin:.06}),Bs(n,ze,-ze,0,1.1,1.1,{margin:.06}),Bs(n,-2.192,-2.192,0,.58,.58,{margin:.05}),Bs(n,-1.525,-2.6413,0,.56,.56,{margin:.08}),Bs(n,-2.5115,-1.45,0,.66,.66,{margin:.05});const M=[["scanner","Scanner",2.242455,1.8,2.242455,1.535348,1.535348,1.2],["faultLocator","Fault Locator",-2.242455,1.55,2.242455,-1.535348,1.535348,1.2],["foodMachine","Food Machine",2.242455,1.2,-2.242455,1.535348,-1.535348,1.2],["hatStand","Hat Stand",-1.385,1.55,-2.3988,-.935,-1.619,1.05],["chair","Chair",-2.2171,.45,-1.28,-1.438,-.83,1.05],["clock","Ormolu Clock",-2.050579,1.1,-2.050579,-1.414182,-1.414183,1.05]];for(const[C,g,y,b,L,N,k,I]of M)n.spot(C,N,0,k),n.interact(C,g,y,b,L,C,{},I);function S(C){l=C?1:0}function R(C){h=!!C,x()}function A(){u=0}function E(){f=0}function P(C){const g=Math.min(Math.max(C||0,0),.1);if(d+=g,c!==l){const y=g/_y;c=l>c?Math.min(l,c+y):Math.max(l,c-y),x()}u>=0&&(u+=g,u>=xy&&(u=-1)),p(!1)&&(a.instanceMatrix.needsUpdate=!0),f>=0&&(f+=g,f>=vy&&(f=-1),m(),a.instanceMatrix.needsUpdate=!0)}return{group:r,setShutters:S,setScanner:R,pulseFault:A,dispense:E,update:P,get shuttersOpen(){return l===1},get scannerOn(){return h},get faultRunning(){return u>=0}}}const By=n=>.6*Math.pow(n/100,.6),tp={candle1900:16764860,cool5000:16774121},ep={fov:-6,rate:2.6},$u=16,np=600,W0=By(np),ip=.9,q0=et.CEIL_H-.15,Ua=2*Math.hypot(et.CORNER_X,et.STRUCT_FACE),ju=W0*(q0-ip)**2/.88,sp=.22*W0*(Ua/2),rp=2.2*(Ua/2),op=Ua,Ma=2.8469,c0=sp/2,ia=1.2,ap=2.6,cp=2.2,zy=1.84,zc=[0,1.1,2.7],Hy=3.4,Gy=2.1,Vy=15265525,Ku=2.8,Zu=3.2,l0=16776681,h0=tp.cool5000,Wy=13625599,qy=Object.freeze({lux:np,E:W0,planeY:ip,keyY:q0,diagonal:Ua,keyRef:ju,key:Ma,keyShare:Ma/ju,fillTotal:sp,fill:c0,keyDist:rp,fillDist:op,keyColour:h0,fillColour:l0,rotorIdle:ia,rotorFlight:ap,rotorDist:cp}),Nn=Object.freeze({hemisphere:Object.freeze({sky:16773344,ground:8092794,intensity:.5955}),ambient:Object.freeze({colour:16774116,intensity:.3767}),bounce:null,fog:null,shadows:!1,background:1316634,toneMapping:"ACESFilmicToneMapping",toneMappingExposure:1.4,outputColorSpace:"SRGBColorSpace",camera:Object.freeze({fov:64+ep.fov,near:.2,far:60})}),jr=.21,X0=.06,Y0=24,u0=et.CEIL_H-X0,Xy=u0+.0015,Yy=new ee(jr,jr,X0,Y0,1,!0),$y=new La(jr-.025,jr,Y0),jy=new gs(jr-.025,Y0),Ju=Math.PI/2,ya=n=>Math.abs(n)<1e-9?0:Math.round(n*1e9)/1e9,Sa=[];for(let n=0;n<4;n++){const t=n*Math.PI/2;Sa.push([ya(Math.sin(t)*Ku),ya(Math.cos(t)*Ku)])}for(let n=0;n<4;n++){const t=Math.PI/4+n*Math.PI/2;Sa.push([ya(Math.sin(t)*Zu),ya(Math.cos(t)*Zu)])}const Qu=.02,tf=4,lp=ep.rate,Ky=3.2,Zy=.05,Jy=1.4,Qy=.4,ef=.55,tS=.25,eS=.6;function nS(n,t,e){const i=Math.min(1,e*lp);return n<=1e-6?t*i:n*Math.pow(t/n,i)}function iS(n,t,e={}){if(!t||!t.CHROME||!t.GLOW_W)throw new Error("lighting(): needs the palette from src/engine/roundels.js (P.CHROME and P.GLOW_W). Call palette() first, or use buildLighting(b).");const i=[];for(const[C,g]of Sa){const y=new Dt(Yy,t.CHROME);y.position.set(C,u0+X0/2,g),y.name="panTube",i.push(n.add(y));const b=new Dt($y,t.CHROME);b.position.set(C,u0,g),b.rotation.x=Ju,b.name="panBezel",i.push(n.add(b));const L=new Dt(jy,t.GLOW_W);L.position.set(C,Xy,g),L.rotation.x=Ju,L.name="panFace",i.push(n.add(L))}const s=Sa.map(([C,g],y)=>{const b=n.light(C,q0,g,h0,Ma,rp);return b.name=`key${y}`,b}),r=new Pa(l0,c0,op,1);r.position.set(0,1.1,0),r.name="fill",n.group.add(r),n.lights.push(r);const o=n.light(0,zy,0,Wy,ia,cp);o.name="rotorPractical";const a=n.light(zc[0],zc[1],zc[2],Vy,0,Hy);a.name="doorSpill",n.lights.length>$u&&console.warn(`lighting(): ${n.lights.length} fixtures against POOL_SIZE ${$u}; the room is planned for 10 and the count is meant to be frozen.`);const c=t.GLOW_W.emissiveIntensity??1;let l=Ho(e.level??1,Qu,tf),h=l,u=Ho(e.rotorDrive??0,0,1),f=u,d=0,_=0,x=0,m=0,p=6,v=0,M=0;const S=new Nt(h0),R=new Nt(l0),A=new Nt(tp.candle1900),E=new Nt;function P(){const C=d>0?1-Qy*d*(.5-.5*Math.cos(2*Math.PI*M/Jy)):1,g=l*C;for(const b of s)b.intensity=Ma*g,d>0?b.color.copy(E.copy(S).lerp(A,ef*d)):b.color.copy(S);r.intensity=c0*g,d>0?r.color.copy(E.copy(R).lerp(A,ef*d)):r.color.copy(R);const y=u>0?1+Zy*u*Math.sin(2*Math.PI*M/Ky):1;o.intensity=(ia+(ap-ia)*u)*l*y,a.intensity=Gy*v,m>0&&(t.GLOW_W.emissiveIntensity=c*(1+m*Math.sin(2*Math.PI*M/p)))}return P(),{keys:s,fill:r,rotor:o,spill:a,pans:i,plan:qy,scene:Nn,get level(){return l},setLevel(C){h=Ho(C,Qu,tf)},setRotorDrive(C){f=Ho(C,0,1)},setDoorSpill(C){v=C>0?C<1?C:1:0},setDoorSpillColour(C){return C!=null&&a.color.set(C),this},setAlert(C){_=C?1:0,x=C?1/0:0},pulseAlert(C=4){_=1,x=C},setGlowBreath(C,g=6){m=Math.max(0,Math.min(.6,C||0)),p=Math.max(.5,g),m===0&&(t.GLOW_W.emissiveIntensity=c)},update(C){const g=Math.min(Math.max(C||0,0),.25);M+=g,x!==1/0&&x>0&&(x-=g,x<=0&&(x=0,_=0)),l=nS(l,h,g),Math.abs(l-h)<1e-4&&(l=h),u+=(f-u)*Math.min(1,g*lp),Math.abs(u-f)<1e-4&&(u=f);const y=_>d?g/tS:g/eS;d+=Math.sign(_-d)*Math.min(Math.abs(_-d),y),P()},dispose(){t.GLOW_W.emissiveIntensity=c}}}function Ho(n,t,e){return n<t?t:n>e?e:n}const Se={RADIUS:.34,HEIGHT:1.75,EYE:1.62,STEP:.42,GRAVITY:22,SPEED:2.6,RUN:4.2},sS=14,rS=3,nf=.0022,sf=Math.PI/2-.05,oS=.72,aS=6,cS=.06,lS=.1,hS=1500,sa=[];for(let n=0;n<6;n++){const t=n*Math.PI/3;sa.push({nx:Math.sin(t),nz:Math.cos(t)})}const Xi=[],f0={forward:["KeyW","ArrowUp"],back:["KeyS","ArrowDown"],left:["KeyA","ArrowLeft"],right:["KeyD","ArrowRight"],run:["ShiftLeft","ShiftRight"],interact:["KeyE"]},uS=new Set(Object.values(f0).flat());function $0(n,t,e,i={}){const s=i.radius??Se.RADIUS,r=i.y??0,o=i.height??Se.HEIGHT,a=i.onPush||null;let c=0;const l=(n==null?void 0:n.planes)||Xi;for(let f=0;f<l.length;f++){const d=l[f],_=t*d.nx+e*d.nz,x=d.d-s;if(_<=x)continue;const m=_-x;t-=d.nx*m,e-=d.nz*m,c++,a&&a(-d.nx,-d.nz)}const h=(n==null?void 0:n.hulls)||Xi;for(let f=0;f<h.length;f++){const d=h[f],_=d.y0??0;if(r+o<=_||r>=d.y1)continue;let x=0,m=-1/0;for(let S=0;S<6;S++){const R=t*sa[S].nx+e*sa[S].nz;R>m&&(m=R,x=S)}const p=d.apothem+s;if(m>=p)continue;const v=sa[x],M=p-m;t+=v.nx*M,e+=v.nz*M,c++,a&&a(v.nx,v.nz)}const u=(n==null?void 0:n.boxes)||Xi;for(let f=0;f<u.length;f++){const d=u[f],_=d.y0??0;if(r+o<=_||r>=d.y1)continue;const x=Math.cos(d.rotY),m=Math.sin(d.rotY),p=t-d.x,v=e-d.z,M=p*x-v*m,S=p*m+v*x,R=d.hw+s,A=d.hd+s,E=R-Math.abs(M),P=A-Math.abs(S);if(E<=0||P<=0)continue;let C=0,g=0,y;E<P?(C=M>=0?1:-1,y=E):(g=S>=0?1:-1,y=P);const b=C*x+g*m,L=-C*m+g*x;t+=b*y,e+=L*y,c++,a&&a(b,L)}return{x:t,z:e,contacts:c}}function fS(n,t,e,i={}){const s=(i.radius??Se.RADIUS)-(i.tolerance??cS);return $0(n,t,e,{radius:s,y:i.y,height:i.height}).contacts>0}class dS{constructor(t,e,i={}){var c,l;this.camera=t,this.build=e,this.dom=i.dom||(typeof document<"u"?document.body:null),this.collision=((c=e==null?void 0:e.userData)==null?void 0:c.collision)||null,this.collision||(console.warn("[walker] build.userData.collision is missing — the player will walk through the walls. Shell.js publishes it (CONSOLEROOM.md §8.7)."),this.collision={planes:Xi,hulls:Xi,boxes:Xi}),this.position=new z,this.velocity=new z,this.yaw=0,this.pitch=0,this.onGround=!0,this.horizontalSpeed=0,this.prompt=null,this.driveCamera=!0,this._locked=!1,this._lockPending=!1,this._lockTimer=0,this._down=new Set,this._pressed=new Set,this._mouseDX=0,this._mouseDY=0,this._target=null,this._targetLabel=null,this._interactFns=[],this._pauseFns=[],this._bob=0,this._lastSafe=new z,this._warnedFloor=!1,this._fwd=new z,this._dir=new z,this._killInto=(h,u)=>{const f=this.velocity.x*h+this.velocity.z*u;f<0&&(this.velocity.x-=h*f,this.velocity.z-=u*f)};const s=i.spawn||((l=e==null?void 0:e.spots)==null?void 0:l.spawn)||et.SPAWN,r=s.x??s[0]??0,o=s.y??s[1]??0,a=s.z??s[2]??0;this.teleport(r,o,a,i.yaw??et.SPAWN_YAW),this._attach()}_attach(){var t;typeof window>"u"||(this._h={keydown:e=>{e.repeat||(this._locked&&uS.has(e.code)&&e.preventDefault(),this._down.add(e.code),this._pressed.add(e.code))},keyup:e=>this._down.delete(e.code),blur:()=>this._clearHeld(),focus:()=>this._clearHeld(),visibility:()=>{document.hidden&&this._clearHeld()},mousemove:e=>{this._locked&&(this._mouseDX+=e.movementX,this._mouseDY+=e.movementY)},mousedown:e=>{this._pressed.add("Mouse"+e.button),this._down.add("Mouse"+e.button)},mouseup:e=>this._down.delete("Mouse"+e.button),domdown:()=>{this._locked||this.requestLock()},lockchange:()=>{this._settleLock(),this._setLocked(document.pointerLockElement===this.dom)},lockerror:e=>this._failLock(e)},window.addEventListener("keydown",this._h.keydown),window.addEventListener("keyup",this._h.keyup),window.addEventListener("blur",this._h.blur),window.addEventListener("focus",this._h.focus),document.addEventListener("visibilitychange",this._h.visibility),window.addEventListener("mousemove",this._h.mousemove),window.addEventListener("mousedown",this._h.mousedown),window.addEventListener("mouseup",this._h.mouseup),(t=this.dom)==null||t.addEventListener("mousedown",this._h.domdown),document.addEventListener("pointerlockchange",this._h.lockchange),document.addEventListener("pointerlockerror",this._h.lockerror))}dispose(){var t;this._settleLock(),!(typeof window>"u"||!this._h)&&(window.removeEventListener("keydown",this._h.keydown),window.removeEventListener("keyup",this._h.keyup),window.removeEventListener("blur",this._h.blur),window.removeEventListener("focus",this._h.focus),document.removeEventListener("visibilitychange",this._h.visibility),window.removeEventListener("mousemove",this._h.mousemove),window.removeEventListener("mousedown",this._h.mousedown),window.removeEventListener("mouseup",this._h.mouseup),(t=this.dom)==null||t.removeEventListener("mousedown",this._h.domdown),document.removeEventListener("pointerlockchange",this._h.lockchange),document.removeEventListener("pointerlockerror",this._h.lockerror),this._h=null,this._interactFns.length=0,this._pauseFns.length=0,this._locked&&this.releaseLock())}get locked(){return this._locked}get paused(){return!this._locked}get stepPhase(){return this._bob}onPause(t){return t&&this._pauseFns.push(t),this}requestLock(){var e,i;if(this._locked||this._lockPending||!((e=this.dom)!=null&&e.requestPointerLock))return;this._lockPending=!0,clearTimeout(this._lockTimer),this._lockTimer=setTimeout(()=>{this._lockPending=!1},hS);let t;try{t=this.dom.requestPointerLock()}catch(s){this._failLock(s);return}(i=t==null?void 0:t.catch)==null||i.call(t,s=>this._failLock(s))}releaseLock(){var t;this._settleLock(),this._setLocked(!1),typeof document<"u"&&((t=document.exitPointerLock)==null||t.call(document))}_settleLock(){this._lockPending=!1,clearTimeout(this._lockTimer),this._lockTimer=0}_failLock(t){const e=this._lockPending;this._settleLock(),e&&(this._setLocked(!1),console.warn("[walker] pointer lock refused; staying paused",t||""))}_setLocked(t){if(this._locked!==t){this._locked=t,this._clearHeld(),t||this._setTarget(null);for(const e of this._pauseFns)e(!t)}}_clearHeld(){this._down.clear(),this._pressed.clear(),this._mouseDX=0,this._mouseDY=0}_isDown(t){return f0[t].some(e=>this._down.has(e))}_wasPressed(t){return f0[t].some(e=>this._pressed.has(e))}update(t){if(t=Math.min(t,lS),!(t>0)){this._pressed.clear();return}if(this._locked&&(this.yaw-=this._mouseDX*nf,this.pitch-=this._mouseDY*nf,this.pitch=Math.max(-sf,Math.min(sf,this.pitch))),this._mouseDX=0,this._mouseDY=0,this._locked?this._move(t):(this.velocity.x=0,this.velocity.z=0,this.horizontalSpeed=0,this._applyGravity(t)),this.driveCamera&&this._commitCamera(t),this._updateTarget(),this._target&&(this._wasPressed("interact")||this._pressed.has("Mouse0"))){const e=this._target;for(const i of this._interactFns)i(e)}this._pressed.clear()}_move(t){let e=0,i=0;this._isDown("forward")&&(i+=1),this._isDown("back")&&(i-=1),this._isDown("right")&&(e+=1),this._isDown("left")&&(e-=1);const s=Math.hypot(e,i);s>1&&(e/=s,i/=s);const r=Math.sin(this.yaw),o=Math.cos(this.yaw),a=this._dir.set(r*i+-o*e,0,o*i+r*e);a.lengthSq()>0&&a.normalize();const c=this._isDown("run")?Se.RUN:Se.SPEED,l=this.onGround?sS:rS,h=Math.min(1,l*t);this.velocity.x+=(a.x*c-this.velocity.x)*h,this.velocity.z+=(a.z*c-this.velocity.z)*h,this._applyGravity(t),this._collide(t);const u=this._floorUnder(this.position.x,this.position.z,this.position.y);this.position.y<u&&(this.position.y=u,this.velocity.y=0,this.onGround=!0),this.horizontalSpeed=Math.hypot(this.velocity.x,this.velocity.z)}_applyGravity(t){this.velocity.y-=Se.GRAVITY*t,this.position.y+=this.velocity.y*t;const e=this._floorUnder(this.position.x,this.position.z,this.position.y);this.position.y<=e?(this.position.y=e,this.velocity.y=0,this.onGround=!0):this.onGround=!1}_floorUnder(t,e,i){var a;const s=Se.RADIUS;let r=-1/0;const o=((a=this.build)==null?void 0:a.colliders)||Xi;for(let c=0;c<o.length;c++){const l=o[c];l.walkable&&(t<l.min.x-s||t>l.max.x+s||e<l.min.z-s||e>l.max.z+s||l.max.y<=i+Se.STEP&&l.max.y>r&&(r=l.max.y))}return r===-1/0?(this._warnedFloor||(this._warnedFloor=!0,console.warn("[walker] no walkable collider under the player — holding at y = 0. floor() is the only thing that makes one.")),0):r}_collide(t){this.position.x+=this.velocity.x*t,this.position.z+=this.velocity.z*t;for(let e=0;e<aS;e++){const i=$0(this.collision,this.position.x,this.position.z,{y:this.position.y,onPush:this._killInto});if(this.position.x=i.x,this.position.z=i.z,!i.contacts)break}fS(this.collision,this.position.x,this.position.z,{y:this.position.y})?(this.position.x=this._lastSafe.x,this.position.z=this._lastSafe.z,this.velocity.x=0,this.velocity.z=0):this._lastSafe.copy(this.position)}_commitCamera(t){const e=this.position.y+Se.EYE;let i=0,s=0;this.horizontalSpeed>.3?(this._bob+=t*this.horizontalSpeed*1.9,s=Math.sin(this._bob*2)*.035,i=Math.cos(this._bob)*.014):this._bob=0,this.camera.position.set(this.position.x+i,e+s,this.position.z),this.camera.rotation.set(this.pitch,this.yaw+Math.PI,0,"YXZ")}get target(){return this._target}onInteract(t){return t&&this._interactFns.push(t),this}_updateTarget(){var a;if(!this._locked){this._setTarget(null);return}const t=((a=this.build)==null?void 0:a.interactables)||Xi;if(!t.length){this._setTarget(null);return}this.camera.getWorldDirection(this._fwd);const e=this.camera.position,i=this.position.x,s=this.position.z;let r=null,o=1/0;for(let c=0;c<t.length;c++){const l=t[c],h=l.pos.x-i,u=l.pos.z-s,f=Math.hypot(h,u);if(f>=(l.radius||1.8))continue;const d=l.pos.x-e.x,_=l.pos.y-e.y,x=l.pos.z-e.z,m=Math.hypot(d,_,x)||1,p=(d*this._fwd.x+_*this._fwd.y+x*this._fwd.z)/m,v=Math.acos(Math.min(1,Math.max(-1,p)));if(v>oS)continue;const M=v+f*.1;M>=o||(o=M,r=l)}this._setTarget(r)}_setTarget(t){const e=t?t.label:null;this._target===t&&this._targetLabel===e||(this._target=t,this._targetLabel=e,this.prompt=t?{id:t.id,label:t.label}:null)}teleport(t,e=0,i=0,s){if(t&&typeof t=="object"){const r=t;s=typeof e=="number"?e:void 0,t=r.x??r[0]??0,i=r.z??r[2]??0,e=r.y??r[1]??0}return this.position.set(t,e,i),this.position.y=Math.max(e,this._floorUnder(t,i,e)),this.velocity.set(0,0,0),this.horizontalSpeed=0,this.onGround=!0,this._bob=0,typeof s=="number"&&(this.yaw=s),this._lastSafe.copy(this.position),this.driveCamera&&this._commitCamera(0),this.position}setWorld(t){var e,i;if(!t)throw new Error("Walker.setWorld: no world");return this.world=t,this.build=t.build??this.build,this.collision=t.collision??((i=(e=t.build)==null?void 0:e.userData)==null?void 0:i.collision)??this.collision,this.surface=t.surface??null,this._warnedFloor=!1,this._lastSafe.copy(this.position),this._setTarget(null),this}crossTo(t,e=0){return this.position.applyMatrix4(t),rf.setFromMatrix4(t),this.velocity.applyMatrix3(rf),this.yaw+=e,this.yaw>Math.PI?this.yaw-=2*Math.PI:this.yaw<=-Math.PI&&(this.yaw+=2*Math.PI),this._lastSafe.copy(this.position),this.position}}const rf=new Yt,as=1e-4;function pS(n,t,e,i,s,r){const o=!!r.loop,a=s+(e.at||0),c=o?1/0:Math.max(.02,e.dur??.2),l=(e.peak??1)*(r.gain??1);if(l<=0)return null;const h=Math.max(.001,e.a??.005),u=Math.max(0,e.d??0),f=e.s??1,d=Math.max(.005,e.r??.05),_=n.createGain();_.gain.value=as,_.connect(i);let x,m=null;const p=r.rate??1;if(e.src==="noise")x=n.createBufferSource(),x.buffer=t.get(e.noise||"white"),x.loop=!0,x.loopStart=0,x.playbackRate.value=p;else{x=n.createOscillator(),x.type=e.wave||"sine";const C=e.jitter||0,g=C?1+(r.jitterRoll??0)*C:1,y=Math.max(8,(e.freq??440)*g*p);if(m=x.frequency,m.setValueAtTime(y,a),e.to!=null&&!o){const b=Math.max(8,e.to*g*p),L=a+c;e.glide==="lin"?m.linearRampToValueAtTime(b,L):m.exponentialRampToValueAtTime(b,L)}}let v=x,M=null;if(e.filter){const C=n.createBiquadFilter();C.type=e.filter.type||"lowpass",C.Q.value=e.filter.q??1;const g=Math.max(20,e.filter.freq??1e3);C.frequency.setValueAtTime(g,a),e.filter.to!=null&&!o&&C.frequency.exponentialRampToValueAtTime(Math.max(20,e.filter.to),a+c),M=C.frequency,v.connect(C),v=C}let S=null,R=null;if(e.lfo&&e.lfo.rate>0){S=n.createOscillator(),S.type="sine",S.frequency.value=e.lfo.rate;const C=n.createGain();if(e.lfo.target==="gain"){const g=Math.min(1,Math.max(0,e.lfo.depth??.5));R=n.createGain(),R.gain.value=1-g*.5,C.gain.value=g*.5,S.connect(C),C.connect(R.gain),v.connect(R),v=R}else e.lfo.target==="filter"&&M?(C.gain.value=e.lfo.depth??200,S.connect(C),C.connect(M)):m&&(C.gain.value=e.lfo.depth??20,S.connect(C),C.connect(m));S.start(a)}v.connect(_);const A=_.gain;A.setValueAtTime(as,a),A.linearRampToValueAtTime(l,a+h);const E=Math.max(as,l*f);u>0&&A.linearRampToValueAtTime(E,a+h+u);let P=1/0;if(o)x.start(a,e.src==="noise"?r.noiseOffset??0:void 0);else{const C=Math.max(a+h+u,a+c-d);A.setValueAtTime(Math.max(as,u>0?E:l),C),A.linearRampToValueAtTime(as,a+c),P=a+c+.02,x.start(a,e.src==="noise"?r.noiseOffset??0:void 0),x.stop(P),S&&S.stop(P)}return{endsAt:P,stop(C){const g=Math.max(C,n.currentTime);try{A.cancelScheduledValues(g),A.setValueAtTime(Math.max(as,A.value),g),A.linearRampToValueAtTime(as,g+d),x.stop(g+d+.02),S&&S.stop(g+d+.02)}catch{}}}}function of(n,t,e,i,s={}){const r=Math.max(s.when??n.currentTime,n.currentTime),o=!!e.loop,a=[];let c=r;for(const l of e.layers||[]){const h=pS(n,t,l,i,r,{...s,loop:o});h&&(a.push(h),h.endsAt>c&&h.endsAt!==1/0&&(c=h.endsAt))}return{endsAt:o?1/0:c,stop(l=n.currentTime){for(const h of a)h.stop(l)}}}const af="dw.audio",mS=16,_S="KeyN",gS={ref:.95,max:9,fade:1.5,panWidth:.8,panNear:.7},xS=["step_a","step_b"];function vS(n,t){const e=t.elements,i=n.x,s=n.y??0,r=n.z,o=e[3]*i+e[7]*s+e[11]*r+e[15]||1;return{x:(e[0]*i+e[4]*s+e[8]*r+e[12])/o,y:(e[1]*i+e[5]*s+e[9]*r+e[13])/o,z:(e[2]*i+e[6]*s+e[10]*r+e[14])/o}}const MS={volume:.55,muted:!1},yS={hatStand:1.14,chair:.86,clock:.72},SS={scanner:.92,faultLocator:.84,foodMachine:1.12},hp=8,ES=.4,wS=18;function cf(n,t,e){const i=t.length;if(n==="brown"){let s=0;for(let r=0;r<i;r++){const o=e.float()*2-1;s=(s+.02*o)/1.02,t[r]=s*3.5}}else if(n==="pink"){let s=0,r=0,o=0,a=0,c=0,l=0,h=0;for(let u=0;u<i;u++){const f=e.float()*2-1;s=.99886*s+f*.0555179,r=.99332*r+f*.0750759,o=.969*o+f*.153852,a=.8665*a+f*.3104856,c=.55*c+f*.5329522,l=-.7616*l-f*.016898,t[u]=(s+r+o+a+c+l+h+f*.5362)*.11,h=f*.115926}}else for(let s=0;s<i;s++)t[s]=e.float()*2-1;return t}function AS(n,t){const e=Math.exp(-2*Math.PI*wS/t);let i=0,s=0;for(let r=0;r<n.length;r++){const o=n[r];i=o-s+e*i,s=o,n[r]=i}return n}class bS{constructor(t,e,i={}){this.ctx=t,this.rng=e,this.len=i.len??hp,this.xfade=i.xfade??ES,this.cache=new Map}get(t="white"){if(this.cache.has(t))return this.cache.get(t);const e=this.ctx.sampleRate,i=Math.floor(e*this.len),s=this.ctx.createBuffer(1,i,e),r=s.getChannelData(0);if(t==="white")cf("white",r,this.rng);else{const o=Math.max(1,Math.floor(e*this.xfade)),a=AS(cf(t,new Float32Array(i+o),this.rng),e);r.set(a.subarray(0,i));for(let c=0;c<o;c++){const l=(c+.5)/o;r[c]=a[c]*Math.sin(l*Math.PI/2)+a[i+c]*Math.cos(l*Math.PI/2)}}return this.cache.set(t,s),s}}const TS=Math.PI/2,RS=3.4,LS=.15,Go=1,lf=6.5;class CS{constructor(t={}){var r;this.sounds=t.sounds||{},this.busDefs=t.buses||{},this.dist={...gS,...t.distance||{}},this.roomBeds=t.roomBeds||[],this.propRate={...yS,...t.propRate||{}},this.ctlRate={...SS,...t.ctlRate||{}};const e={...MS,...t.defaults||{}};this.anchors=t.anchors||{},this.surface=t.surface||null,this.surfaceSteps=t.surfaceSteps||{vinyl:["step_a","step_b"]},this._interiorAnchors=null,this.siteBeds=t.siteBeds||[],this._bedMix=0,this._doorT=0,this._roomBedOff=null,this._siteBedOff=null,this.listener=t.listener||null,this.say=typeof t.say=="function"?t.say:null;const i=t.rng;this.rng=i!=null&&i.child?i.child("audio"):i||null,this._stepRng=(r=this.rng)!=null&&r.child?this.rng.child("step"):this.rng,this._Ctx=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext)||null,this.ctx=null,this.master=null,this.buses={},this.bank=null,this._bankFactory=t.bankFactory||((o,a)=>new bS(o,a)),this._defaultBus=null,this._voices=[],this._loops=new Map,this._handled=new Map,this._duckDepth=1,this._duckUntil=0,this._ducking=!1,this._paused=!1,this._replaceAccum=0,this._told=!1;const s=this._loadPrefs(e);this.volume=s.volume,this.muted=s.muted,this.room=null,this._flying=!1,this._s=0,this._ds=1,this._shutters=null,this._scanner=null,this._stepIx=0,this._air=0,this._wasGround=!0,this._nextTick=0,this._tock=!1,this._Ctx&&(this._wireUnlock(),this._wireKey())}get available(){return!!this.ctx}_loadPrefs(t){const e={...t};try{const i=localStorage.getItem(af);if(i){const s=JSON.parse(i);typeof s.volume=="number"&&(e.volume=Math.min(1,Math.max(0,s.volume))),typeof s.muted=="boolean"&&(e.muted=s.muted)}}catch{}return e}_savePrefs(){try{localStorage.setItem(af,JSON.stringify({volume:this.volume,muted:this.muted}))}catch{}}_wireUnlock(){const t=()=>{if(this.unlock(),this.ctx&&this.ctx.state!=="suspended")for(const e of["pointerdown","keydown","touchstart"])window.removeEventListener(e,t)};for(const e of["pointerdown","keydown","touchstart"])window.addEventListener(e,t,{passive:!0});typeof document<"u"&&document.addEventListener("visibilitychange",()=>{var e,i;document.hidden||(i=(e=this.ctx)==null?void 0:e.resume)==null||i.call(e).catch(()=>{})})}unlock(){var e,i,s;if(this.ctx){(i=(e=this.ctx).resume)==null||i.call(e).catch(()=>{});return}if(!this._Ctx)return;let t;try{t=new this._Ctx}catch{this._Ctx=null;return}this.ctx=t,this.bank=this._bankFactory(t,this.rng||{float:()=>Math.random()}),this.master=t.createGain(),this.master.gain.value=this._masterTarget(),this.master.connect(t.destination);for(const[r,o]of Object.entries(this.busDefs)){const a=t.createGain();a.gain.value=o.gain,a.connect(this.master),this.buses[r]={node:a,base:o.gain,duckable:o.duckable!==!1},this._defaultBus||(this._defaultBus=this.buses[r])}this._defaultBus=this.buses.machine||this._defaultBus,(s=t.resume)==null||s.call(t).catch(()=>{}),this._nextTick=t.currentTime+Go,this._resumeBeds(),this.announce()}_resumeBeds(){var t,e;return!this.ctx||this.muted?this:(this.startBeds(this.roomBeds),(e=(t=this.room)==null?void 0:t.fittings)!=null&&e.scannerOn&&this.startLoop("scanner_bed"),this._flying&&(this.startLoop("flight_bed"),this.startLoop("flight_grind")),this)}announce(){this._told||!this.ctx||!this.say||(this._told=!0,this.say(this.muted?"Sound is muted. Press N to unmute.":"Sound is on. Press N to mute."))}_wireKey(){window.addEventListener("keydown",t=>{if(t.code!==_S||t.repeat||t.ctrlKey||t.altKey||t.metaKey)return;const e=t.target;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)||this.toggleMute()})}setMuted(t){var e;return this.muted=!!t,this._savePrefs(),this.muted&&this.stopAllLoops(),this._applyMaster(),(e=this.say)==null||e.call(this,this.muted?"Sound muted.":"Sound on."),this.muted||(this.play("mute_off"),this._resumeBeds()),this}toggleMute(){return this.setMuted(!this.muted)}setVolume(t){return this.volume=Math.min(1,Math.max(0,Number(t)||0)),this._savePrefs(),this._applyMaster(),this}setPaused(t){return this._paused=!!t,this._applyMaster(.08),this}_masterTarget(){return this.muted?1e-4:Math.max(1e-4,this.volume*(this._paused?.2:1))}_applyMaster(t=.08){if(!this.ctx||!this.master)return;const e=this.ctx.currentTime,i=this._masterTarget();this.master.gain.cancelScheduledValues(e),this.master.gain.setValueAtTime(Math.max(1e-4,this.master.gain.value),e),this.master.gain.linearRampToValueAtTime(i,e+t)}play(t,e={}){const i=this.sounds[t];if(!i||!this.ctx||this.muted)return null;if(i.loop)return this.startLoop(t,e.handle||t,e);if(e.handle&&this._stopHandled(e.handle),this._voices.length>=mS)return null;const s=this._chainFor(i,e,!1);if(!s)return null;const r=of(this.ctx,this.bank,i,s.node,{gain:(i.gain??1)*(e.gain??1),rate:(i.rate??1)*(e.rate??1),when:e.when,jitterRoll:this._roll(),noiseOffset:this._noiseOffset()}),o={v:r,endsAt:r.endsAt,handle:e.handle||null};return this._voices.push(o),e.handle&&this._handled.set(e.handle,o),i.ducks&&this.duck(i.ducks.depth??.45,i.ducks.hold??1),r}_stopHandled(t){const e=this._handled.get(t);if(!e)return;this._handled.delete(t);try{e.v.stop(this.ctx.currentTime)}catch{}const i=this._voices.indexOf(e);i>=0&&this._voices.splice(i,1)}startLoop(t,e=t,i={}){const s=this.sounds[t];if(!s||!this.ctx||this.muted)return null;if(this._loops.has(e))return this._loops.get(e);const r=this._chainFor(s,i,!0);if(!r)return null;const a={v:of(this.ctx,this.bank,s,r.node,{gain:(s.gain??1)*(i.gain??1),rate:(s.rate??1)*(i.rate??1),when:i.when,jitterRoll:this._roll(),noiseOffset:this._noiseOffset()}),recipe:s,chain:r.chain,spot:i.spot??s.spot??null,at:i.at??null,level:1};return this._loops.set(e,a),a}stopLoop(t){const e=this._loops.get(t);if(!e||!this.ctx)return this;this._loops.delete(t);try{e.v.stop(this.ctx.currentTime)}catch{}return this}stopAllLoops(){for(const t of[...this._loops.keys()])this.stopLoop(t);return this}setLoopLevel(t,e,i=.12){var a;const s=this._loops.get(t);if(!s||!this.ctx||!((a=s.chain)!=null&&a.level))return this;const r=Math.max(0,Number(e)||0);if(Math.abs(r-s.level)<.002)return this;s.level=r;const o=this.ctx.currentTime;return i>0?s.chain.level.gain.setTargetAtTime(r,o,i):s.chain.level.gain.setValueAtTime(r,o),this}startBeds(t=this.roomBeds){for(const e of t||[])this.startLoop(e);return this}stopBeds(t=this.roomBeds){for(const e of t||[])this.stopLoop(e);return this}duck(t=.45,e=1){if(!this.ctx)return this;const i=this.ctx.currentTime,s=Math.min(1,Math.max(0,t));this._duckDepth=this._ducking?Math.min(this._duckDepth,s):s,this._duckUntil=Math.max(this._duckUntil,i+e),this._ducking=!0;for(const r of Object.values(this.buses))r.duckable&&(r.node.gain.cancelScheduledValues(i),r.node.gain.setTargetAtTime(r.base*this._duckDepth,i,.04));return this}_unduck(){const t=this.ctx.currentTime;this._ducking=!1,this._duckDepth=1;for(const e of Object.values(this.buses))e.duckable&&(e.node.gain.cancelScheduledValues(t),e.node.gain.setTargetAtTime(e.base,t,.25))}_chainFor(t,e,i){const s=this.buses[t.bus]||this._defaultBus;if(!s)return null;let r=s.node,o=null,a=null,c=null;const l=this._resolve(e.at??null,e.spot??t.spot??null);if(l){const h=this._place(l,t.minGain??0);if(h.gain<=.004&&!t.loop)return null;this.ctx.createStereoPanner&&(o=this.ctx.createStereoPanner(),o.pan.value=h.pan,o.connect(r),r=o),a=this.ctx.createGain(),a.gain.value=h.gain,a.connect(r),r=a}return i&&(c=this.ctx.createGain(),c.gain.value=1,c.connect(r),r=c),{node:r,chain:{pan:o,dist:a,level:c},pos:l}}_resolve(t,e){if(t&&typeof t.x=="number")return t;if(!e)return null;const i=this.anchors[e];return i&&typeof i.x=="number"?i:null}_listener(){var r;const t=this.listener;if(!t)return null;const e=typeof t=="function"?t():t;if(!e)return null;const i=((r=e.camera)==null?void 0:r.position)||e.position||(typeof e.x=="number"?e:null);if(!i||typeof i.x!="number")return null;const s=e.yaw??0;return{x:i.x,y:i.y,z:i.z,rx:-Math.cos(s),rz:Math.sin(s)}}_place(t,e){const i=this._listener();if(!i)return{gain:1,pan:0};const s=t.x-i.x,r=t.z-i.z,o=(t.y??i.y)-i.y,a=Math.sqrt(s*s+o*o+r*r),{ref:c,max:l,fade:h,panWidth:u,panNear:f}=this.dist;if(a>=l)return{gain:e,pan:0};let d=a<=c?1:c/(c+(a-c));h>0&&a>l-h&&(d*=(l-a)/h),d=Math.max(d,e);const _=Math.sqrt(s*s+r*r)||1,x=Math.min(1,_/f),m=(s*i.rx+r*i.rz)/_*u*x;return{gain:d,pan:Math.max(-1,Math.min(1,m))}}update(t){var s;let e=Number(t)||0;if(e<0&&(e=0),e>.1&&(e=.1),this._followRotor(),this._followFittings(),this._footsteps(e),!this.ctx)return this;const i=this.ctx.currentTime;for(let r=this._voices.length-1;r>=0;r--){const o=this._voices[r];o.endsAt>i||(o.handle&&this._handled.get(o.handle)===o&&this._handled.delete(o.handle),this._voices.splice(r,1))}if(this._ducking&&i>=this._duckUntil&&this._unduck(),this._clock(i),this._replaceAccum+=e,this._replaceAccum<.1)return this;this._replaceAccum=0;for(const r of this._loops.values()){const o=this._resolve(r.at,r.spot);if(!o||!((s=r.chain)!=null&&s.dist))continue;const a=this._place(o,r.recipe.minGain??0);r.chain.dist.gain.setTargetAtTime(a.gain,i,.06),r.chain.pan&&r.chain.pan.pan.setTargetAtTime(a.pan,i,.08)}return this}setWorld(t,e=null){var r;if(!t)return this;if(t.dist&&(this.dist={...this.dist,...t.dist}),this.surface=t.surface??null,!this._interiorAnchors){this._interiorAnchors=Object.create(null);for(const[o,a]of Object.entries(this.anchors))this._interiorAnchors[o]=a}const i=t.id==="interior"||!e?null:e.M_IE||null,s=Object.create(null);if((r=t.build)!=null&&r.interactables)for(const o of t.build.interactables)o!=null&&o.id&&o.pos&&(s[o.id]=o.pos);for(const[o,a]of Object.entries(this._interiorAnchors))s[o]||(s[o]=i?vS(a,i):a);return this.anchors=s,this}setLoopSpot(t,e){const i=this._loops.get(t);return i&&(i.spot=e??null,i.at=null),this}setBedMix(t,e){const i=t<=0?0:t>=1?1:t,s=e===void 0?this._doorT??1:e,r=s<=0?0:s>=1?1:s;this._bedMix=i;const o=1-i+i*.06*r,a=i*(.3+.7*(1-.6*(1-r)));return this._driveBedSet(this.roomBeds,o,"_roomBedOff"),this._driveBedSet(this.siteBeds,a,"_siteBedOff"),this}_driveBedSet(t,e,i){if(!t||!t.length)return;const s=t.map(r=>Array.isArray(r)?r[0]:r);if(e<=0){const r=this.ctx?this.ctx.currentTime:0;(this[i]===void 0||this[i]===null)&&(this[i]=r);for(const o of s)this.setLoopLevel(o,0);if(r-this[i]>2)for(const o of s)this.stopLoop(o);return}this[i]=null;for(const r of t){const o=Array.isArray(r)?r[0]:r;if(!this._loops.has(o)){const a=Array.isArray(r)&&r[1]?{...r[1]}:{};this.startLoop(o,o,a)&&this.setLoopLevel(o,0,0)}this.setLoopLevel(o,e)}}setDoorFraction(t){return this._doorT=t<=0?0:t>=1?1:t,this}setSiteBeds(t){return this.siteBeds=t||[],this}get bedMix(){return this._bedMix??0}bindRoom({build:t,rotor:e,fittings:i,walker:s,room:r}={}){var o,a;if(this.room={build:t||null,rotor:e||null,fittings:i||null,walker:s||null},t!=null&&t.interactables)for(const c of t.interactables)c!=null&&c.id&&c.pos&&(this.anchors[c.id]=c.pos);return this.anchors.console=this.anchors.console||{x:0,y:(r==null?void 0:r.PANEL_Y0)??.9,z:0},s&&(this.listener||(this.listener=s),(o=s.onPause)==null||o.call(s,c=>this.setPaused(c)),(a=s.onInteract)==null||a.call(s,c=>this._onInteract(c)),this.setPaused(!!s.paused)),i&&(this._shutters=!!i.shuttersOpen,this._scanner=!!i.scannerOn),e&&(this._flying=!!e.running),this.startBeds(this.roomBeds),i!=null&&i.scannerOn&&this.startLoop("scanner_bed"),this}_onInteract(t){var e;if(t)switch(t.action){case"panel":{const i=(e=t.data)==null?void 0:e.panel,s=`panel${i}`;this.play("panel_wake",{spot:s});const r={1:"ctl_lever",2:"ctl_lever",3:"ctl_dial",4:"ctl_guard",5:"ctl_lever_big",6:"ctl_button"};r[i]&&this.play(r[i],{spot:s}),i===1&&this.play("ctl_refuse",{spot:s}),i===3&&this.play("food_dispense",{handle:"food"}),i===6&&this.play("fault_query",{handle:"fault"});break}case"doors":this.play("door_locked"),this.play("panel_wake",{spot:"panel1",gain:.5});break;case"scanner":this.play("ctl_toggle",{spot:"scanner",rate:this.ctlRate.scanner});break;case"faultLocator":this.play("ctl_button",{spot:"faultLocator",rate:this.ctlRate.faultLocator}),this.play("fault_query",{handle:"fault"});break;case"foodMachine":this.play("ctl_button",{spot:"foodMachine",rate:this.ctlRate.foodMachine}),this.play("food_dispense",{handle:"food"});break;case"hatStand":this.play("prop_wood",{spot:"hatStand",rate:this.propRate.hatStand});break;case"chair":this.play("prop_wood",{spot:"chair",rate:this.propRate.chair});break;case"clock":this.play("prop_wood",{spot:"clock",rate:this.propRate.clock}),this.ctx&&this.play("clock_tick",{when:this.ctx.currentTime+.3});break;case"rotor":this.play("ctl_lever_big",{spot:"panel5"});break}}_followRotor(){var s;const t=(s=this.room)==null?void 0:s.rotor;if(!t)return;const e=!!t.running;e&&!this._flying?(this.play("demat_launch"),this.startLoop("flight_bed"),this.startLoop("flight_grind"),this.setLoopLevel("flight_bed",0,0),this.setLoopLevel("flight_grind",0,0),this._flying=!0,this._s=0,this._ds=1):!e&&this._flying&&(this.stopLoop("flight_bed"),this.stopLoop("flight_grind"),this.play("remat_land"),this._flying=!1);const i=t.drive??0;if(this.setLoopLevel("flight_bed",i),this.setLoopLevel("flight_grind",i),i>.05){const r=(t.apex??0)-(t.parked??0);if(r>0){const o=((t.height??0)-t.parked)/(r*i),a=o-this._s;this._ds<0&&a>=0?this.play("demat_rise"):this._ds>0&&a<=0&&this.play("demat_fall"),a!==0&&(this._ds=a),this._s=o}}else this._s=0,this._ds=1}_followFittings(){var s;const t=(s=this.room)==null?void 0:s.fittings;if(!t)return;const e=!!t.shuttersOpen;this._shutters!==null&&e!==this._shutters&&this.play(e?"shutter_open":"shutter_close",{handle:"shutter"}),this._shutters=e;const i=!!t.scannerOn;this._scanner!==null&&i!==this._scanner&&(i?this.startLoop("scanner_bed"):this.stopLoop("scanner_bed")),this._scanner=i}_footsteps(t){var l;const e=(l=this.room)==null?void 0:l.walker;if(!e)return;const i=e.onGround!==!1;i?(this._wasGround===!1&&this._air>LS&&this.play("step_land",{rate:this._stepRate(1)}),this._air=0):this._air+=t,this._wasGround=i;const s=e.horizontalSpeed??0;if(s<=.3){this._stepIx=0;return}const r=(e.stepPhase!==void 0?e.stepPhase:e._bob)??0,o=Math.floor(r/TS);if(o===this._stepIx||(this._stepIx=o,o<=0))return;const a=s>RS?1.06:1,c=this.surface&&this.surfaceSteps[this.surface]||xS;this.play(c[o&1],{rate:this._stepRate(a)})}_stepRate(t){const e=this._stepRng;return t*(1+.055*(e?e.range(-1,1):0))}_clock(t){if(!this.sounds.clock_tick)return;const e=this.anchors.clock;if(e){const i=this._listener();if(i){const s=e.x-i.x,r=e.z-i.z,o=(e.y??i.y)-i.y;if(s*s+o*o+r*r>lf*lf){this._nextTick=t+Go;return}}}for(this._nextTick<t&&(this._nextTick=t+Go);this._nextTick<t+.5;)this.play(this._tock?"clock_tock":"clock_tick",{when:this._nextTick}),this._tock=!this._tock,this._nextTick+=Go}_roll(){return this.rng?this.rng.range(-1,1):0}_noiseOffset(){return this.rng?this.rng.range(0,hp):0}}const IS={room:{gain:.34,duckable:!1},machine:{gain:.85,duckable:!0},control:{gain:.95,duckable:!1},body:{gain:.6,duckable:!0},flight:{gain:.95,duckable:!1}},up={ref:.95,max:9,fade:1.5,panWidth:.8,panNear:.7},PS={volume:.55,muted:!1},ra={room_tone:{bus:"room",gain:.55,loop:!0,layers:[{src:"noise",noise:"brown",at:0,a:2.6,s:1,r:2,peak:.85,filter:{type:"lowpass",freq:110,q:.7},lfo:{rate:.043478,depth:40,target:"filter"}},{src:"tone",wave:"sine",freq:49.5,at:0,a:3,s:1,r:2.4,peak:.26},{src:"tone",wave:"sine",freq:99,at:0,a:3.2,s:1,r:2.4,peak:.3},{src:"tone",wave:"sine",freq:99.4,at:0,a:3.6,s:1,r:2.4,peak:.24,lfo:{rate:.027027,depth:.6,target:"freq"}},{src:"noise",noise:"white",at:2.41,a:5,s:1,r:3,peak:.1,filter:{type:"bandpass",freq:6400,q:2.4},lfo:{rate:.018868,depth:900,target:"filter"}}]},room_air:{bus:"room",gain:.7,loop:!0,rate:.618,layers:[{src:"noise",noise:"pink",at:0,a:3.4,s:1,r:2.2,peak:.52,filter:{type:"bandpass",freq:300,q:.9},lfo:{rate:.034483,depth:130,target:"filter"}},{src:"noise",noise:"brown",at:1.13,a:4,s:1,r:2.4,peak:.4,filter:{type:"lowpass",freq:210,q:1.1},lfo:{rate:.02439,depth:55,target:"filter"}}]},console_hum:{bus:"room",gain:.6,loop:!0,spot:"console",minGain:.14,layers:[{src:"tone",wave:"sine",freq:148.5,at:0,a:2,s:1,r:1.6,peak:.22},{src:"tone",wave:"sine",freq:297,at:0,a:2.2,s:1,r:1.6,peak:.09,lfo:{rate:.071,depth:.24,target:"gain"}},{src:"tone",wave:"sawtooth",freq:220,at:0,a:2.8,s:1,r:2,peak:.1,filter:{type:"lowpass",freq:640,q:1.4}},{src:"noise",noise:"white",at:.53,a:2.6,s:1,r:2,peak:.26,filter:{type:"bandpass",freq:6200,q:2.6},lfo:{rate:.1129,depth:.36,target:"gain"}}]},scanner_bed:{bus:"room",gain:.62,loop:!0,spot:"scanner",minGain:0,layers:[{src:"tone",wave:"sawtooth",freq:50,at:0,a:1.35,s:1,r:.28,peak:.28,filter:{type:"lowpass",freq:320,q:1.4}},{src:"tone",wave:"sine",freq:150,at:0,a:1.4,s:1,r:.28,peak:.1},{src:"tone",wave:"sine",freq:10125,at:0,a:1.4,s:1,r:.28,peak:.028,lfo:{rate:.37,depth:.3,target:"gain"}},{src:"noise",noise:"white",at:.77,a:1.5,s:1,r:.28,peak:.14,filter:{type:"highpass",freq:4800,q:.7}}]},fault_idle:{bus:"machine",gain:.34,loop:!0,rate:.618,spot:"faultLocator",minGain:0,layers:[{src:"noise",noise:"white",at:0,a:1.2,s:1,r:.8,peak:.34,filter:{type:"bandpass",freq:2900,q:6},lfo:{rate:1.1111,depth:.92,target:"gain"}}]},flight_bed:{bus:"flight",gain:.19,loop:!0,spot:"rotor",minGain:.55,layers:[{src:"tone",wave:"sine",freq:41,at:0,a:.9,s:1,r:2.4,peak:.3,lfo:{rate:.173,depth:6,target:"freq"}},{src:"noise",noise:"brown",at:0,a:1.1,s:1,r:2.4,peak:.8,filter:{type:"lowpass",freq:230,q:1.1},lfo:{rate:.173,depth:110,target:"filter"}},{src:"tone",wave:"sawtooth",freq:32.7,at:0,a:1.2,s:1,r:2.4,peak:.34,filter:{type:"lowpass",freq:260,q:3},lfo:{rate:.29,depth:90,target:"filter"}},{src:"tone",wave:"sawtooth",freq:33.6,at:0,a:1.4,s:1,r:2.4,peak:.28,filter:{type:"lowpass",freq:300,q:2.6},lfo:{rate:.23,depth:70,target:"filter"}},{src:"tone",wave:"sine",freq:99,at:0,a:1.5,s:1,r:2.4,peak:.1,filter:{type:"lowpass",freq:700,q:.9},lfo:{rate:7.9,depth:22,target:"freq"}}]},flight_grind:{bus:"flight",gain:.2,loop:!0,rate:.618,spot:"rotor",minGain:.55,layers:[{src:"noise",noise:"pink",at:0,a:1.4,s:1,r:2.4,peak:.58,filter:{type:"bandpass",freq:470,q:1.3},lfo:{rate:.2311,depth:200,target:"filter"}},{src:"noise",noise:"white",at:.61,a:1,s:1,r:2.4,peak:.52,filter:{type:"bandpass",freq:1750,q:3},lfo:{rate:6.1,depth:.45,target:"gain"}},{src:"noise",noise:"brown",at:1.13,a:1.2,s:1,r:2.4,peak:.46,filter:{type:"lowpass",freq:400,q:1.4},lfo:{rate:.1274,depth:130,target:"filter"}}]},demat_launch:{bus:"flight",gain:.54,ducks:{depth:.45,hold:2.6},layers:[{src:"noise",noise:"brown",at:0,dur:.16,a:.002,d:.06,s:.14,r:.08,peak:.72,filter:{type:"lowpass",freq:1400,to:240,q:1.5}},{src:"tone",wave:"square",freq:128,to:47,at:0,dur:.22,a:.002,d:.06,s:.2,r:.1,peak:.24,filter:{type:"lowpass",freq:700,to:300,q:1}},{src:"tone",wave:"sawtooth",freq:38,to:96,at:.08,dur:1.9,a:.4,d:.3,s:.8,r:.55,peak:.36,jitter:.012,filter:{type:"lowpass",freq:300,to:1500,q:1.2}},{src:"tone",wave:"sawtooth",freq:39.1,to:99.1,at:.11,dur:1.88,a:.44,d:.3,s:.78,r:.55,peak:.3,jitter:-.012,filter:{type:"lowpass",freq:340,to:1650,q:1.1}},{src:"noise",noise:"white",at:.3,dur:2,a:.55,d:.35,s:.62,r:.6,peak:.7,filter:{type:"bandpass",freq:220,to:1750,q:.75}},{src:"tone",wave:"triangle",freq:210,to:690,at:.2,dur:2.1,a:.5,d:.4,s:.55,r:.75,peak:.2,filter:{type:"bandpass",freq:900,q:8},lfo:{rate:.8,depth:400,target:"filter"}},{src:"tone",wave:"sine",freq:148,at:.15,dur:2.1,a:.3,d:.5,s:.5,r:.8,peak:.16,filter:{type:"lowpass",freq:700,q:.9},lfo:{rate:6.7,depth:34,target:"freq"}},{src:"tone",wave:"sine",freq:41,to:31,at:0,dur:2.4,a:.03,d:.9,s:.35,r:1.1,peak:.28},{src:"noise",noise:"pink",at:1.13,dur:1.45,a:.3,d:.3,s:.55,r:.55,peak:.42,filter:{type:"bandpass",freq:900,to:2600,q:1.6}},{src:"noise",noise:"brown",at:2.033,dur:.34,a:.004,d:.12,s:.2,r:.18,peak:.4,filter:{type:"lowpass",freq:560,to:170,q:1.3}},{src:"tone",wave:"sine",freq:62,to:41,at:2.033,dur:.38,a:.004,d:.14,s:.24,r:.2,peak:.3}]},demat_rise:{bus:"flight",gain:.5,spot:"rotor",minGain:.6,layers:[{src:"tone",wave:"sawtooth",freq:58,to:96,at:0,dur:1.58,a:.1,d:.3,s:.62,r:.55,peak:.42,jitter:.015,filter:{type:"lowpass",freq:900,to:320,q:2.6},lfo:{rate:5.4,depth:.55,target:"gain"}},{src:"tone",wave:"sawtooth",freq:60.3,to:99.6,at:0,dur:1.58,a:.13,d:.3,s:.6,r:.58,peak:.34,jitter:-.015,filter:{type:"lowpass",freq:1200,to:400,q:2.2},lfo:{rate:5.15,depth:.55,target:"gain"}},{src:"noise",noise:"white",at:0,dur:1.55,a:.08,d:.35,s:.45,r:.6,peak:.85,filter:{type:"bandpass",freq:700,to:2400,q:8}},{src:"noise",noise:"white",at:.06,dur:1.48,a:.1,d:.35,s:.45,r:.58,peak:.8,filter:{type:"bandpass",freq:420,to:1300,q:6}},{src:"noise",noise:"brown",at:0,dur:1.58,a:.35,d:.35,s:.7,r:.7,peak:.78,filter:{type:"lowpass",freq:130,to:260,q:.9}},{src:"tone",wave:"square",freq:232,to:384,at:0,dur:1.5,a:.25,d:.4,s:.5,r:.6,peak:.1,filter:{type:"bandpass",freq:1400,q:6},lfo:{rate:.9,depth:320,target:"filter"}},{src:"tone",wave:"sine",freq:92,at:0,dur:1.5,a:.2,d:.4,s:.55,r:.6,peak:.14,filter:{type:"lowpass",freq:400,q:.9},lfo:{rate:7.3,depth:24,target:"freq"}},{src:"noise",noise:"brown",at:1.44,dur:.3,a:.004,d:.11,s:.2,r:.16,peak:.34,filter:{type:"lowpass",freq:520,to:170,q:1.2}}]},demat_fall:{bus:"flight",gain:.51,spot:"rotor",minGain:.6,layers:[{src:"tone",wave:"sawtooth",freq:96,to:54,at:0,dur:1.58,a:.09,d:.3,s:.6,r:.55,peak:.4,jitter:.015,filter:{type:"lowpass",freq:1e3,to:300,q:2.6},lfo:{rate:5.05,depth:.55,target:"gain"}},{src:"tone",wave:"sawtooth",freq:99.4,to:56.2,at:0,dur:1.58,a:.12,d:.3,s:.58,r:.58,peak:.33,jitter:-.015,filter:{type:"lowpass",freq:1300,to:380,q:2.2},lfo:{rate:4.85,depth:.55,target:"gain"}},{src:"noise",noise:"white",at:0,dur:1.55,a:.06,d:.35,s:.45,r:.6,peak:.85,filter:{type:"bandpass",freq:2300,to:560,q:8}},{src:"noise",noise:"white",at:.06,dur:1.48,a:.08,d:.35,s:.45,r:.58,peak:.8,filter:{type:"bandpass",freq:1240,to:300,q:6}},{src:"noise",noise:"brown",at:0,dur:1.58,a:.3,d:.35,s:.7,r:.7,peak:.8,filter:{type:"lowpass",freq:250,to:110,q:.9}},{src:"tone",wave:"square",freq:216,to:168,at:0,dur:1.5,a:.25,d:.4,s:.5,r:.6,peak:.1,filter:{type:"bandpass",freq:1300,q:6},lfo:{rate:.9,depth:300,target:"filter"}},{src:"tone",wave:"sine",freq:84,at:0,dur:1.5,a:.2,d:.4,s:.55,r:.6,peak:.14,filter:{type:"lowpass",freq:380,q:.9},lfo:{rate:6.9,depth:22,target:"freq"}},{src:"noise",noise:"brown",at:1.36,dur:.34,a:.003,d:.12,s:.2,r:.18,peak:.42,filter:{type:"lowpass",freq:400,to:130,q:1.4}},{src:"tone",wave:"sine",freq:58,to:38,at:1.36,dur:.36,a:.004,d:.13,s:.22,r:.19,peak:.24}]},remat_land:{bus:"flight",gain:.56,ducks:{depth:.45,hold:3.2},layers:[{src:"tone",wave:"sawtooth",freq:92,to:70,at:0,dur:.95,a:.05,d:.3,s:.8,r:.45,peak:.32,filter:{type:"lowpass",freq:880,to:560,q:1.3},lfo:{rate:9,depth:.62,target:"gain"}},{src:"tone",wave:"sawtooth",freq:71,to:50,at:.85,dur:.95,a:.2,d:.3,s:.8,r:.5,peak:.36,filter:{type:"lowpass",freq:570,to:330,q:1.3},lfo:{rate:6,depth:.64,target:"gain"}},{src:"tone",wave:"sawtooth",freq:50,to:31,at:1.7,dur:.8,a:.24,d:.28,s:.75,r:.52,peak:.34,filter:{type:"lowpass",freq:340,to:170,q:1.4},lfo:{rate:3.4,depth:.66,target:"gain"}},{src:"noise",noise:"white",at:0,dur:2.4,a:.1,d:.6,s:.5,r:1,peak:.26,filter:{type:"bandpass",freq:1800,to:300,q:.7}},{src:"noise",noise:"pink",at:.6,dur:1.7,a:1.35,d:.18,s:.92,r:.3,peak:.55,filter:{type:"bandpass",freq:300,to:2100,q:5}},{src:"noise",noise:"brown",at:2.4,dur:.55,a:.003,d:.18,s:.18,r:.3,peak:.9,filter:{type:"lowpass",freq:1600,to:110,q:1.5}},{src:"tone",wave:"sine",freq:74,to:34,at:2.4,dur:.62,a:.004,d:.22,s:.22,r:.32,peak:.42},{src:"tone",wave:"triangle",freq:131,at:2.418,dur:.95,a:.008,d:.3,s:.2,r:.55,peak:.14,filter:{type:"bandpass",freq:300,q:5}},{src:"tone",wave:"triangle",freq:133.4,at:2.433,dur:.92,a:.008,d:.3,s:.2,r:.55,peak:.12,filter:{type:"bandpass",freq:300,q:5}},{src:"noise",noise:"pink",at:2.44,dur:.9,a:.02,d:.35,s:.15,r:.42,peak:.36,filter:{type:"lowpass",freq:2200,to:400,q:.8}},{src:"tone",wave:"triangle",freq:196,to:99,at:2.46,dur:1.75,a:.02,d:.45,s:.28,r:1.1,peak:.18,filter:{type:"lowpass",freq:800,to:340,q:1}}]},ctl_toggle:{bus:"control",gain:.74,minGain:.1,layers:[{src:"noise",noise:"white",at:0,dur:.026,a:.001,d:.008,s:0,r:.01,peak:.44,filter:{type:"bandpass",freq:2600,to:1900,q:4}},{src:"tone",wave:"square",freq:1860,at:0,dur:.024,a:.001,d:.008,s:0,r:.01,peak:.18,jitter:.05,filter:{type:"lowpass",freq:5200,q:.7}},{src:"noise",noise:"pink",at:.042,dur:.045,a:.001,d:.016,s:0,r:.02,peak:.3,filter:{type:"bandpass",freq:1750,to:1150,q:3.2}},{src:"tone",wave:"triangle",freq:430,to:300,at:.042,dur:.06,a:.002,d:.02,s:.1,r:.03,peak:.22,jitter:.05},{src:"noise",noise:"brown",at:.056,dur:.055,a:.003,d:.02,s:.1,r:.028,peak:.18,filter:{type:"lowpass",freq:480,q:.9}}]},ctl_button:{bus:"control",gain:.52,minGain:.1,layers:[{src:"noise",noise:"brown",at:0,dur:.04,a:.0015,d:.015,s:.1,r:.018,peak:.62,filter:{type:"lowpass",freq:1400,to:520,q:1.1}},{src:"tone",wave:"sine",freq:1244,to:900,at:0,dur:.055,a:.002,d:.018,s:.14,r:.028,peak:.22,jitter:.05},{src:"noise",noise:"white",at:0,dur:.022,a:.001,d:.008,s:0,r:.01,peak:.24,filter:{type:"bandpass",freq:1150,q:2.4}},{src:"noise",noise:"brown",at:.078,dur:.028,a:.001,d:.011,s:.06,r:.013,peak:.34,filter:{type:"lowpass",freq:900,to:400,q:1}}]},ctl_dial:{bus:"control",gain:.85,minGain:.1,layers:[{src:"noise",noise:"pink",at:0,dur:.19,a:.01,d:.05,s:.6,r:.06,peak:.3,filter:{type:"bandpass",freq:2200,q:1.1}},{src:"noise",noise:"white",at:0,dur:.024,a:.001,d:.008,s:0,r:.011,peak:.5,filter:{type:"bandpass",freq:3400,q:2.2}},{src:"noise",noise:"white",at:.068,dur:.024,a:.001,d:.008,s:0,r:.011,peak:.52,filter:{type:"bandpass",freq:3150,q:2.2}},{src:"noise",noise:"white",at:.136,dur:.024,a:.001,d:.008,s:0,r:.011,peak:.48,filter:{type:"bandpass",freq:3550,q:2.2}},{src:"noise",noise:"brown",at:0,dur:.2,a:.012,d:.06,s:.5,r:.07,peak:.26,filter:{type:"lowpass",freq:620,to:380,q:1}}]},ctl_lever:{bus:"control",gain:.62,minGain:.12,layers:[{src:"noise",noise:"brown",at:0,dur:.05,a:.002,d:.018,s:.1,r:.024,peak:.36,filter:{type:"lowpass",freq:1100,to:420,q:1.2}},{src:"noise",noise:"white",at:.02,dur:.28,a:.028,d:.07,s:.55,r:.13,peak:.4,filter:{type:"bandpass",freq:2400,to:900,q:1.3},lfo:{rate:17,depth:.9,target:"gain"}},{src:"tone",wave:"triangle",freq:196,to:124,at:.02,dur:.28,a:.02,d:.07,s:.5,r:.12,peak:.16},{src:"noise",noise:"brown",at:.28,dur:.19,a:.002,d:.065,s:.18,r:.095,peak:.44,filter:{type:"lowpass",freq:720,to:190,q:1.5}},{src:"tone",wave:"sine",freq:96,to:58,at:.28,dur:.23,a:.003,d:.085,s:.2,r:.11,peak:.28,jitter:.04},{src:"noise",noise:"white",at:.28,dur:.03,a:.001,d:.01,s:0,r:.014,peak:.2,filter:{type:"highpass",freq:2200,q:.9}},{src:"tone",wave:"sawtooth",freq:74,to:148,at:.3,dur:.34,a:.05,d:.1,s:.68,r:.19,peak:.18,filter:{type:"lowpass",freq:420,to:1050,q:1.1}}]},ctl_lever_big:{bus:"control",gain:.72,minGain:.14,layers:[{src:"noise",noise:"brown",at:0,dur:.06,a:.002,d:.022,s:.1,r:.028,peak:.42,filter:{type:"lowpass",freq:820,to:300,q:1.2}},{src:"noise",noise:"white",at:.024,dur:.43,a:.04,d:.1,s:.6,r:.18,peak:.44,filter:{type:"bandpass",freq:1900,to:640,q:1.2},lfo:{rate:13,depth:.9,target:"gain"}},{src:"tone",wave:"triangle",freq:140,to:78,at:.024,dur:.43,a:.036,d:.1,s:.58,r:.175,peak:.22},{src:"noise",noise:"brown",at:.44,dur:.23,a:.002,d:.085,s:.18,r:.115,peak:.52,filter:{type:"lowpass",freq:640,to:150,q:1.6}},{src:"tone",wave:"sine",freq:128,to:62,at:.44,dur:.28,a:.003,d:.1,s:.2,r:.135,peak:.32},{src:"noise",noise:"white",at:.44,dur:.034,a:.001,d:.012,s:0,r:.016,peak:.22,filter:{type:"highpass",freq:2e3,q:.9}},{src:"tone",wave:"sawtooth",freq:62,to:132,at:.47,dur:.4,a:.06,d:.11,s:.7,r:.21,peak:.22,filter:{type:"lowpass",freq:380,to:980,q:1.1}}]},ctl_guard:{bus:"control",gain:.66,minGain:.1,layers:[{src:"noise",noise:"pink",at:0,dur:.13,a:.02,d:.04,s:.55,r:.06,peak:.46,filter:{type:"bandpass",freq:1100,q:12},lfo:{rate:13,depth:380,target:"filter"}},{src:"noise",noise:"brown",at:.13,dur:.05,a:.001,d:.018,s:.1,r:.024,peak:.4,filter:{type:"lowpass",freq:700,to:300,q:1.2}},{src:"noise",noise:"white",at:.148,dur:.026,a:.001,d:.009,s:0,r:.012,peak:.44,filter:{type:"bandpass",freq:3400,to:2400,q:3.4}},{src:"noise",noise:"pink",at:.19,dur:.044,a:.001,d:.016,s:0,r:.02,peak:.48,filter:{type:"bandpass",freq:2100,to:1400,q:3.6}},{src:"tone",wave:"square",freq:1180,at:.19,dur:.034,a:.001,d:.012,s:0,r:.016,peak:.22,filter:{type:"lowpass",freq:4400,q:.7}},{src:"tone",wave:"triangle",freq:330,to:210,at:.225,dur:.16,a:.002,d:.05,s:.14,r:.08,peak:.24,jitter:.05}]},ctl_refuse:{bus:"control",gain:.62,minGain:.4,layers:[{src:"tone",wave:"sawtooth",freq:233.08,at:0,dur:.23,a:.005,d:.03,s:.85,r:.1,peak:.3,filter:{type:"bandpass",freq:480,q:2.2},lfo:{rate:19,depth:.85,target:"gain"}},{src:"tone",wave:"sawtooth",freq:164.81,at:0,dur:.23,a:.005,d:.03,s:.85,r:.1,peak:.26,filter:{type:"bandpass",freq:360,q:2.2},lfo:{rate:19,depth:.85,target:"gain"}},{src:"tone",wave:"sawtooth",freq:233.08,at:.29,dur:.24,a:.005,d:.03,s:.85,r:.11,peak:.28,filter:{type:"bandpass",freq:460,q:2.2},lfo:{rate:17,depth:.85,target:"gain"}},{src:"tone",wave:"sawtooth",freq:164.81,at:.29,dur:.24,a:.005,d:.03,s:.85,r:.11,peak:.24,filter:{type:"bandpass",freq:340,q:2.2},lfo:{rate:17,depth:.85,target:"gain"}},{src:"noise",noise:"brown",at:0,dur:.52,a:.006,d:.12,s:.3,r:.24,peak:.26,filter:{type:"lowpass",freq:700,to:300,q:1.2}}]},panel_wake:{bus:"machine",gain:.76,minGain:.08,layers:[{src:"noise",noise:"white",at:0,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.56,filter:{type:"bandpass",freq:1600,to:1100,q:3}},{src:"noise",noise:"pink",at:.052,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.72,filter:{type:"bandpass",freq:1850,to:1250,q:3}},{src:"noise",noise:"white",at:.118,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.52,filter:{type:"bandpass",freq:1420,to:980,q:3}},{src:"noise",noise:"pink",at:.166,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.62,filter:{type:"bandpass",freq:2050,to:1400,q:3}},{src:"tone",wave:"sine",freq:660,at:.2,dur:.22,a:.004,d:.07,s:.16,r:.12,peak:.2}]},shutter_open:{bus:"machine",gain:.66,spot:"scanner",minGain:.16,layers:[{src:"tone",wave:"sawtooth",freq:118,to:132,at:0,dur:1.19,a:.1,d:.18,s:.72,r:.34,peak:.26,filter:{type:"bandpass",freq:700,q:5},lfo:{rate:47,depth:.35,target:"gain"}},{src:"tone",wave:"sawtooth",freq:120.4,to:134.7,at:.01,dur:1.18,a:.12,d:.18,s:.72,r:.34,peak:.21,filter:{type:"bandpass",freq:840,q:4.2},lfo:{rate:44,depth:.35,target:"gain"}},{src:"noise",noise:"pink",at:.01,dur:1.18,a:.42,d:.3,s:.55,r:.42,peak:.64,filter:{type:"bandpass",freq:620,to:1350,q:1.4}},{src:"noise",noise:"brown",at:.02,dur:1.17,a:.4,d:.28,s:.52,r:.4,peak:.44,filter:{type:"lowpass",freq:340,to:520,q:1}},{src:"noise",noise:"white",at:1.2,dur:.055,a:.002,d:.02,s:.06,r:.026,peak:.34,filter:{type:"highpass",freq:1500,q:.8}},{src:"noise",noise:"white",at:1.25,dur:.055,a:.002,d:.02,s:.06,r:.026,peak:.3,filter:{type:"highpass",freq:1700,q:.8}},{src:"tone",wave:"sine",freq:1180,to:3140,at:1.21,dur:.34,a:.006,d:.1,s:.24,r:.18,peak:.16},{src:"noise",noise:"white",at:1.21,dur:.2,a:.004,d:.06,s:.2,r:.1,peak:.12,filter:{type:"highpass",freq:5e3,q:.8}}]},shutter_close:{bus:"machine",gain:.66,spot:"scanner",minGain:.16,layers:[{src:"tone",wave:"sine",freq:3140,to:1180,at:0,dur:.3,a:.006,d:.09,s:.24,r:.15,peak:.16},{src:"noise",noise:"white",at:0,dur:.18,a:.004,d:.055,s:.18,r:.09,peak:.12,filter:{type:"highpass",freq:5e3,q:.8}},{src:"tone",wave:"sawtooth",freq:132,to:118,at:0,dur:1.19,a:.1,d:.18,s:.72,r:.34,peak:.26,filter:{type:"bandpass",freq:700,q:5},lfo:{rate:47,depth:.35,target:"gain"}},{src:"tone",wave:"sawtooth",freq:134.7,to:120.4,at:.01,dur:1.18,a:.12,d:.18,s:.72,r:.34,peak:.21,filter:{type:"bandpass",freq:840,q:4.2},lfo:{rate:44,depth:.35,target:"gain"}},{src:"noise",noise:"pink",at:.01,dur:1.18,a:.42,d:.3,s:.55,r:.42,peak:.64,filter:{type:"bandpass",freq:1350,to:620,q:1.4}},{src:"noise",noise:"brown",at:.02,dur:1.17,a:.4,d:.28,s:.52,r:.4,peak:.46,filter:{type:"lowpass",freq:520,to:340,q:1}},{src:"noise",noise:"brown",at:1.2,dur:.15,a:.002,d:.055,s:.08,r:.075,peak:.52,filter:{type:"lowpass",freq:800,to:150,q:1.4}},{src:"tone",wave:"sine",freq:196,to:104,at:1.2,dur:.17,a:.002,d:.062,s:.09,r:.085,peak:.38},{src:"noise",noise:"white",at:1.214,dur:.05,a:.002,d:.018,s:.05,r:.024,peak:.26,filter:{type:"bandpass",freq:2600,q:7}}]},fault_query:{bus:"machine",gain:.54,spot:"faultLocator",minGain:.18,layers:[{src:"noise",noise:"white",at:0,dur:3.96,a:.03,d:.12,s:.88,r:.24,peak:.5,filter:{type:"bandpass",freq:1550,q:6},lfo:{rate:9,depth:.95,target:"gain"}},{src:"noise",noise:"pink",at:.01,dur:3.96,a:.04,d:.14,s:.84,r:.26,peak:.46,filter:{type:"bandpass",freq:3100,q:4.5},lfo:{rate:6,depth:.9,target:"gain"}},{src:"tone",wave:"triangle",freq:112,at:0,dur:3.98,a:.05,d:.15,s:.8,r:.3,peak:.16,filter:{type:"lowpass",freq:380,q:1}},{src:"tone",wave:"sine",freq:98.5,at:0,dur:3.98,a:.06,d:.15,s:.82,r:.3,peak:.14},{src:"tone",wave:"sine",freq:100,at:.02,dur:3.96,a:.07,d:.15,s:.82,r:.3,peak:.12},{src:"noise",noise:"brown",at:.03,dur:3.95,a:.2,d:.4,s:.6,r:.6,peak:.4,filter:{type:"lowpass",freq:420,q:1}},{src:"noise",noise:"white",at:3.96,dur:.07,a:.002,d:.026,s:.05,r:.036,peak:.26,filter:{type:"bandpass",freq:1200,to:640,q:2.6}}]},food_dispense:{bus:"machine",gain:.66,spot:"foodMachine",minGain:.16,layers:[{src:"noise",noise:"pink",at:0,dur:.9,a:.03,d:.1,s:.75,r:.16,peak:.44,filter:{type:"bandpass",freq:1250,q:2.2},lfo:{rate:7,depth:.9,target:"gain"}},{src:"tone",wave:"sawtooth",freq:154,to:196,at:0,dur:.7,a:.06,d:.12,s:.68,r:.2,peak:.24,filter:{type:"lowpass",freq:420,to:600,q:1.3},lfo:{rate:11,depth:.4,target:"gain"}},{src:"noise",noise:"white",at:.15,dur:.07,a:.002,d:.026,s:.06,r:.036,peak:.32,filter:{type:"bandpass",freq:2400,to:1500,q:3}},{src:"noise",noise:"white",at:.55,dur:.075,a:.001,d:.028,s:.05,r:.038,peak:.42,filter:{type:"bandpass",freq:1750,to:820,q:2}},{src:"noise",noise:"brown",at:.552,dur:.095,a:.002,d:.035,s:.08,r:.048,peak:.36,filter:{type:"lowpass",freq:600,to:180,q:1.2}},{src:"tone",wave:"triangle",freq:213,at:.552,dur:.3,a:.002,d:.09,s:.18,r:.18,peak:.28,jitter:.04,filter:{type:"bandpass",freq:640,q:9}},{src:"tone",wave:"triangle",freq:341,at:.552,dur:.22,a:.002,d:.07,s:.16,r:.14,peak:.15,jitter:-.04,filter:{type:"bandpass",freq:900,q:8}},{src:"tone",wave:"sawtooth",freq:196,to:120,at:.7,dur:.6,a:.02,d:.16,s:.4,r:.34,peak:.18,filter:{type:"lowpass",freq:600,to:260,q:1.2}}]},door_locked:{bus:"control",gain:.56,spot:"doors",minGain:.28,layers:[{src:"noise",noise:"brown",at:0,dur:.11,a:.002,d:.04,s:.1,r:.055,peak:.72,filter:{type:"lowpass",freq:1e3,to:180,q:1.6}},{src:"tone",wave:"sine",freq:118,to:64,at:0,dur:.13,a:.002,d:.048,s:.08,r:.062,peak:.42},{src:"noise",noise:"brown",at:.13,dur:.11,a:.002,d:.04,s:.1,r:.055,peak:.66,filter:{type:"lowpass",freq:900,to:170,q:1.6}},{src:"tone",wave:"sine",freq:112,to:60,at:.13,dur:.13,a:.002,d:.048,s:.08,r:.062,peak:.38},{src:"tone",wave:"sawtooth",freq:96,at:.14,dur:.42,a:.01,d:.06,s:.7,r:.19,peak:.2,filter:{type:"bandpass",freq:480,q:7},lfo:{rate:50,depth:.9,target:"gain"}},{src:"noise",noise:"pink",at:.01,dur:.48,a:.004,d:.14,s:.22,r:.28,peak:.28,filter:{type:"bandpass",freq:520,to:230,q:1.6}}]},clock_tick:{bus:"machine",gain:.56,spot:"clock",minGain:.04,layers:[{src:"noise",noise:"white",at:0,dur:.022,a:.001,d:.008,s:0,r:.011,peak:.95,filter:{type:"bandpass",freq:3400,to:2300,q:5}},{src:"noise",noise:"brown",at:0,dur:.045,a:.001,d:.018,s:.1,r:.024,peak:.42,filter:{type:"lowpass",freq:700,to:300,q:1.4}},{src:"tone",wave:"triangle",freq:386,at:.002,dur:.12,a:.002,d:.04,s:.1,r:.07,peak:.2,jitter:.012,filter:{type:"bandpass",freq:430,q:8}}]},clock_tock:{bus:"machine",gain:.88,spot:"clock",minGain:.04,layers:[{src:"noise",noise:"pink",at:0,dur:.024,a:.001,d:.009,s:0,r:.012,peak:1,filter:{type:"bandpass",freq:2600,to:1750,q:2.4}},{src:"noise",noise:"brown",at:0,dur:.048,a:.001,d:.019,s:.1,r:.026,peak:.42,filter:{type:"lowpass",freq:640,to:280,q:1.4}},{src:"tone",wave:"triangle",freq:368,at:.002,dur:.126,a:.002,d:.042,s:.1,r:.074,peak:.2,jitter:.012,filter:{type:"bandpass",freq:410,q:8}}]},prop_wood:{bus:"machine",gain:.62,minGain:.06,layers:[{src:"noise",noise:"brown",at:0,dur:.07,a:.002,d:.026,s:.1,r:.034,peak:.56,filter:{type:"lowpass",freq:1200,to:420,q:1.3}},{src:"tone",wave:"triangle",freq:196,at:0,dur:.18,a:.002,d:.06,s:.12,r:.11,peak:.22,jitter:.06,filter:{type:"bandpass",freq:196,q:8}},{src:"tone",wave:"triangle",freq:311,at:.004,dur:.14,a:.002,d:.048,s:.1,r:.086,peak:.14,jitter:-.06,filter:{type:"bandpass",freq:311,q:9}},{src:"noise",noise:"white",at:0,dur:.026,a:.001,d:.009,s:0,r:.013,peak:.2,filter:{type:"bandpass",freq:2200,q:2.2}}]},step_a:{bus:"body",gain:.6,layers:[{src:"noise",noise:"brown",at:0,dur:.09,a:.002,d:.034,s:.1,r:.046,peak:.62,filter:{type:"lowpass",freq:820,to:190,q:1.3}},{src:"tone",wave:"sine",freq:148,to:76,at:0,dur:.1,a:.002,d:.036,s:.08,r:.05,peak:.34,jitter:.09},{src:"tone",wave:"triangle",freq:268,at:0,dur:.13,a:.002,d:.045,s:.14,r:.08,peak:.16,jitter:-.09,filter:{type:"bandpass",freq:300,q:7}},{src:"noise",noise:"white",at:0,dur:.04,a:.001,d:.015,s:0,r:.019,peak:.22,filter:{type:"bandpass",freq:2300,to:1400,q:2.2}},{src:"noise",noise:"pink",at:.021,dur:.17,a:.004,d:.052,s:.16,r:.095,peak:.22,filter:{type:"bandpass",freq:520,to:300,q:1.4}}]},step_b:{bus:"body",gain:.58,layers:[{src:"noise",noise:"brown",at:0,dur:.086,a:.002,d:.032,s:.1,r:.044,peak:.58,filter:{type:"lowpass",freq:900,to:210,q:1.3}},{src:"tone",wave:"sine",freq:162,to:84,at:0,dur:.096,a:.002,d:.034,s:.08,r:.048,peak:.31,jitter:.09},{src:"tone",wave:"triangle",freq:279,at:0,dur:.126,a:.002,d:.043,s:.14,r:.078,peak:.15,jitter:-.09,filter:{type:"bandpass",freq:312,q:7}},{src:"noise",noise:"white",at:0,dur:.038,a:.001,d:.014,s:0,r:.018,peak:.2,filter:{type:"bandpass",freq:2650,to:1600,q:2.2}},{src:"noise",noise:"pink",at:.021,dur:.17,a:.004,d:.052,s:.16,r:.095,peak:.2,filter:{type:"bandpass",freq:580,to:330,q:1.4}}]},step_land:{bus:"body",gain:.58,layers:[{src:"noise",noise:"brown",at:0,dur:.16,a:.002,d:.06,s:.12,r:.08,peak:.82,filter:{type:"lowpass",freq:980,to:150,q:1.5}},{src:"tone",wave:"sine",freq:128,to:58,at:0,dur:.18,a:.002,d:.066,s:.1,r:.09,peak:.46},{src:"noise",noise:"white",at:0,dur:.048,a:.001,d:.018,s:0,r:.024,peak:.28,filter:{type:"bandpass",freq:2e3,to:1100,q:2}},{src:"noise",noise:"pink",at:.021,dur:.3,a:.006,d:.09,s:.18,r:.17,peak:.28,filter:{type:"bandpass",freq:470,to:260,q:1.3}}]},door_bolt:{bus:"control",gain:.6,spot:"doors",minGain:.26,layers:[{src:"tone",wave:"sawtooth",freq:96,at:0,dur:.23,a:.006,d:.07,s:.55,r:.11,peak:.22,filter:{type:"bandpass",freq:480,to:620,q:7},lfo:{rate:50,depth:.9,to:.1,target:"gain"}},{src:"noise",noise:"brown",at:.19,dur:.14,a:.002,d:.05,s:.1,r:.07,peak:.8,filter:{type:"lowpass",freq:1100,to:160,q:1.6}},{src:"tone",wave:"sine",freq:104,to:52,at:.19,dur:.15,a:.002,d:.054,s:.08,r:.076,peak:.44},{src:"noise",noise:"pink",at:.211,dur:.2,a:.004,d:.06,s:.16,r:.11,peak:.24,filter:{type:"bandpass",freq:500,to:290,q:1.4}}]},door_swing:{bus:"room",gain:.5,loop:!0,spot:"doors",minGain:.1,layers:[{src:"noise",noise:"brown",at:0,a:.18,s:1,r:.3,peak:.72,filter:{type:"lowpass",freq:220,q:1.1},lfo:{rate:.6,depth:40,target:"filter"}},{src:"noise",noise:"pink",at:0,a:.24,s:1,r:.34,peak:.3,filter:{type:"bandpass",freq:1300,q:1.3},lfo:{rate:.45,depth:600,target:"filter"}}]},door_stop:{bus:"machine",gain:.54,spot:"doors",minGain:.14,layers:[{src:"noise",noise:"brown",at:0,dur:.15,a:.002,d:.056,s:.08,r:.072,peak:.86,filter:{type:"lowpass",freq:700,to:240,q:1.4}},{src:"tone",wave:"sine",freq:92,to:46,at:0,dur:.16,a:.002,d:.058,s:.06,r:.074,peak:.4},{src:"tone",wave:"triangle",freq:4800,at:.002,dur:.3,a:.001,d:.11,s:.1,r:.17,peak:.14,filter:{type:"bandpass",freq:4800,q:9}},{src:"noise",noise:"pink",at:.021,dur:.19,a:.004,d:.058,s:.14,r:.1,peak:.2,filter:{type:"bandpass",freq:480,to:280,q:1.4}}]},door_shut:{bus:"machine",gain:.56,spot:"doors",minGain:.16,layers:[{src:"noise",noise:"brown",at:0,dur:.13,a:.002,d:.048,s:.1,r:.066,peak:.76,filter:{type:"lowpass",freq:860,to:200,q:1.4}},{src:"tone",wave:"sine",freq:134,to:68,at:0,dur:.14,a:.002,d:.05,s:.08,r:.07,peak:.38},{src:"noise",noise:"brown",at:.14,dur:.12,a:.002,d:.044,s:.08,r:.06,peak:.88,filter:{type:"lowpass",freq:620,to:150,q:1.7}},{src:"tone",wave:"sine",freq:86,to:42,at:.14,dur:.13,a:.002,d:.046,s:.06,r:.064,peak:.46},{src:"noise",noise:"pink",at:.161,dur:.21,a:.004,d:.064,s:.15,r:.115,peak:.22,filter:{type:"bandpass",freq:460,to:270,q:1.4}}]},ext_wind:{bus:"room",gain:.62,loop:!0,rate:.809,layers:[{src:"noise",noise:"brown",at:0,a:3,s:1,r:2.4,peak:.9,filter:{type:"lowpass",freq:120,q:.7},lfo:{rate:.037037,depth:45,target:"filter"}},{src:"noise",noise:"pink",at:0,a:3.6,s:1,r:2.6,peak:.44,filter:{type:"bandpass",freq:900,q:.8},lfo:{rate:.052632,depth:450,target:"filter"}},{src:"noise",noise:"white",at:1.7,a:4.4,s:1,r:3,peak:.09,filter:{type:"bandpass",freq:5200,q:1.8},lfo:{rate:.021277,depth:800,target:"filter"}}]},ext_grit:{bus:"room",gain:.46,loop:!0,rate:.5236,layers:[{src:"noise",noise:"pink",at:0,a:2.8,s:1,r:2.2,peak:.34,filter:{type:"bandpass",freq:1800,q:1.1},lfo:{rate:.043478,depth:500,target:"filter"}},{src:"noise",noise:"white",at:.9,a:3.2,s:1,r:2.4,peak:.16,filter:{type:"highpass",freq:3400,q:.9},lfo:{rate:.028571,depth:700,target:"filter"}}]},step_grit_a:{bus:"body",gain:.52,layers:[{src:"noise",noise:"brown",at:0,dur:.11,a:.003,d:.042,s:.12,r:.058,peak:.54,filter:{type:"lowpass",freq:560,to:150,q:1.1}},{src:"tone",wave:"sine",freq:124,to:62,at:0,dur:.11,a:.003,d:.04,s:.08,r:.054,peak:.26,jitter:.09},{src:"noise",noise:"white",at:0,dur:.09,a:.002,d:.034,s:.06,r:.046,peak:.26,filter:{type:"bandpass",freq:1500,to:780,q:1.2}},{src:"noise",noise:"pink",at:.012,dur:.15,a:.006,d:.05,s:.1,r:.09,peak:.13,filter:{type:"lowpass",freq:420,to:240,q:.8}}]},step_grit_b:{bus:"body",gain:.5,layers:[{src:"noise",noise:"brown",at:0,dur:.104,a:.003,d:.04,s:.12,r:.056,peak:.5,filter:{type:"lowpass",freq:620,to:168,q:1.1}},{src:"tone",wave:"sine",freq:138,to:70,at:0,dur:.104,a:.003,d:.038,s:.08,r:.052,peak:.24,jitter:.09},{src:"noise",noise:"white",at:0,dur:.086,a:.002,d:.032,s:.06,r:.044,peak:.24,filter:{type:"bandpass",freq:1700,to:880,q:1.2}},{src:"noise",noise:"pink",at:.012,dur:.15,a:.006,d:.05,s:.1,r:.09,peak:.12,filter:{type:"lowpass",freq:460,to:260,q:.8}}]},mute_off:{bus:"control",gain:.55,layers:[{src:"tone",wave:"sine",freq:660,at:0,dur:.13,a:.004,d:.04,s:.2,r:.07,peak:.28},{src:"tone",wave:"sine",freq:990,at:.07,dur:.16,a:.004,d:.05,s:.22,r:.09,peak:.22},{src:"noise",noise:"white",at:0,dur:.03,a:.001,d:.011,s:0,r:.015,peak:.2,filter:{type:"bandpass",freq:2400,q:3}}]}},fp=["room_tone","room_air","console_hum","fault_idle"],DS={hatStand:1.14,chair:.86,clock:.72},NS={scanner:.92,faultLocator:.84,foodMachine:1.12},OS={vinyl:["step_a","step_b"],grit:["step_grit_a","step_grit_b"]},US=2.4,FS=Math.PI/2,dp=1.8,pp=2.61,kS=.9,mp=.045,Ea=et.FLAT_FACE+mp/2,d0=dp/2,_p=kS/2,BS=3.284,gp=3.674;if(Math.abs(gp-(BS+Se.RADIUS+.05))>1e-12)throw new Error(`doors: the backstop plane no longer derives — WALK.RADIUS is ${Se.RADIUS}`);const zS=[1,-1].map(n=>Object.freeze({x:n*2.4,z:4.15,hw:1.5,hd:1,rotY:0,y0:0,y1:et.CEIL_H})),HS=[1,-1].map(n=>Object.freeze({x:n*.7375,z:3.2655,hw:.1625,hd:.0705,rotY:0,y0:0,y1:pp})),hf=Object.freeze({nx:0,nz:1,d:gp}),GS=Object.freeze({opening:"The bolts draw back, and the doors swing inward.",closing:"The doors swing shut, and the bolts drive home.",alreadyOpen:"The doors are already open.",alreadyShut:"The doors are already shut.",busyOpening:"The doors are already opening.",busyClosing:"The doors are already closing.",shutters:"Door control: interlock — the scanner shutters are shut.",flight:"Door control: interlock — the ship is in flight.",remote:"Door control: no answer from the shell.",onYou:"Door control: the doors will not close on you.",locked:"The doors are locked.",lockOnOpen:"Door control: the doors must be shut before they can be locked.",didLock:"Door control: the doors are locked.",didUnlock:"Door control: the doors are unlocked.",unlockInFlight:"Door control: the ship is in flight."}),VS=et.FLAT_FACE-Se.RADIUS;function xp(n){const t=n<=0?0:n>=1?1:n;return t*t*(3-2*t)}function uf(n){return FS*xp(n)}function oa(n,t){const e=n>=0?1:-1,i=-e*t,s=-e*_p;return{side:e,rotY:i,hingeX:e*d0,hingeZ:Ea,x:e*d0+s*Math.cos(i),z:Ea-s*Math.sin(i)}}function WS(n,t){const e=oa(n,t);return{x:e.x,z:e.z,hw:_p,hd:mp/2,rotY:e.rotY,y0:0,y1:pp}}function qS(n){const t=n<=0?0:n>=1?1:n;return 4*t*(1-t)}const Hc=new Vt,ff=new Vt,df=new Vt;function Gc(n,t){const e=Array.isArray(n)?n:Array.isArray(n==null?void 0:n.leaves)?n.leaves:Array.isArray(n==null?void 0:n.pivots)?n.pivots:null;if(!e||e.length!==2)throw new Error(`doors: ${t} must hand over exactly two leaf pivots (got ${e?e.length:typeof n})`);const i=e.map((s,r)=>{var a,c;if(!s||!s.isObject3D)throw new Error(`doors: ${t} leaf ${r} is not an Object3D`);let o=((a=s.userData)==null?void 0:a.side)??((c=s.userData)==null?void 0:c.hingeSign)??0;return o||(o=Math.sign(s.position.x)),o||(o=r===0?1:-1,console.warn(`doors: ${t} leaf ${r} publishes no side and sits at x = 0 — assuming ${o>0?"right":"left"} from index order.`)),{obj:s,side:o}});if(i[0].side===i[1].side)throw new Error(`doors: ${t} hands over two leaves on the same side`);return i[0].side>0?i:[i[1],i[0]]}const pf=.015,mf=new Kn,Nr=new Kn;function _f(n,t){for(const{obj:e,side:i}of n){Nr.makeEmpty();for(const s of e.children){const r=s.isMesh?s.geometry:null;r&&(r.boundingBox||r.computeBoundingBox(),r.boundingBox&&(s.updateMatrix(),mf.copy(r.boundingBox).applyMatrix4(s.matrix),Nr.union(mf)))}Nr.isEmpty()||Nr.min.z<-pf&&console.warn(`[doors] ${t} ${i>0?"right":"left"} leaf reaches ${Nr.min.z.toFixed(4)} m BEHIND its hinge, past the ${pf} m inner-face budget. The hinge looks to be on the leaf's OUTER face, and this module now drives it INWARD (-side * theta) — the leaf will sweep through its own jamb. Box.js must hang it at DOOR_Z - LEAF_T = 0.646 (docs/BOX.md §1.1).`)}}function XS(n,t,e={}){var J;const i=e.shellDoors;if(!i)throw new Error("doors: needs shellDoors from shell(b, P, { liveDoors: true })");const s=(J=n==null?void 0:n.userData)==null?void 0:J.collision;if(!s||!Array.isArray(s.planes)||!Array.isArray(s.boxes))throw new Error("doors: b.userData.collision is missing — shell() must run first (Shell.js:457)");let r=e.audio||null,o=e.console||e.consoleUnit||null;const a=i.group||i.doorGroup||new ve;a.name=a.name||"doors";const c=Gc(i,"shellDoors");for(const{obj:q}of c)q.parent||a.add(q);let l=e.boxDoors?Gc(e.boxDoors,"boxDoors"):null;l&&_f(l,"boxDoors");const h=i.discs||null,u=[];if(h){if(!h.isInstancedMesh||h.count!==2)throw new Error(`doors: shellDoors.discs must be an InstancedMesh of 2 (got ${h.isInstancedMesh?h.count:typeof h})`);h.instanceMatrix.usage!==qr&&h.instanceMatrix.setUsage(qr);for(let q=0;q<2;q++){h.getMatrixAt(q,Hc);const F=(Math.sign(Hc.elements[12])||(q===0?1:-1))>0?c[0]:c[1];df.makeTranslation(F.side*d0,0,Ea).invert(),u.push({index:q,leaf:F,m:df.multiply(Hc).clone()})}}const f=s.planes.findIndex(q=>q.nx===0&&q.nz===1&&q.d===et.FLAT_FACE);if(f<0)throw new Error("doors: the +Z half-plane is not in b.userData.collision.planes");const d=s.planes[f],_=s.boxes.findIndex(q=>q.rotY===0&&q.z===Ea&&q.hw===dp/2);if(_<0)throw new Error("doors: Shell's shut leaf box is not in b.userData.collision.boxes");const x=s.boxes[_],m=c.map(({side:q})=>({...WS(q,0)})),p=[...zS,...HS,...m];let v=!1;function M(q){if(q!==v)if(v=!!q,v)s.planes.splice(f,1),s.planes.push(hf),s.boxes.splice(_,1),s.boxes.push(...p),S();else{const H=s.planes.indexOf(hf);H>=0&&s.planes.splice(H,1),s.planes.splice(f,0,d);for(const F of p){const Z=s.boxes.indexOf(F);Z>=0&&s.boxes.splice(Z,1)}s.boxes.splice(_,0,x)}}function S(){for(let q=0;q<2;q++){const H=oa(c[q].side,P),F=m[q];F.x=H.x,F.z=H.z,F.rotY=H.rotY}}let R=0,A=!1,E=0,P=0,C="noop",g=!1,y=!0;function b(){for(let q=0;q<2;q++){const H=oa(c[q].side,P);c[q].obj.rotation.y=H.rotY}if(l)for(const{obj:q,side:H}of l)q.rotation.y=-H*P;if(h){for(const q of u){const H=oa(q.leaf.side,P);ff.makeRotationY(H.rotY).setPosition(H.hingeX,0,H.hingeZ),h.setMatrixAt(q.index,ff.multiply(q.m))}h.instanceMatrix.needsUpdate=!0}}function L(q){var H;(H=o==null?void 0:o.setLamp)==null||H.call(o,"doors",q)}function N(q){return GS[q]}function k(q,H){var F;(F=r==null?void 0:r.play)==null||F.call(r,q,{handle:"door",spot:"doors",...H})}function I(q){q!==g&&(g=q,D())}function D(){var q,H,F,Z;r&&(g?((q=r.startLoop)==null||q.call(r,"door_swing","doorSwing",{spot:"doors"}),(H=r.setLoopLevel)==null||H.call(r,"doorSwing",0,0)):((F=r.setLoopLevel)==null||F.call(r,"doorSwing",0,.06),(Z=r.stopLoop)==null||Z.call(r,"doorSwing")))}let U=!1;function Y(q,H={}){var nt,lt,ct;const F=!!q,Z=H.running??((nt=H.rotor)==null?void 0:nt.running);return!F&&Z===!0?((lt=o==null?void 0:o.blink)==null||lt.call(o,"doors",1),N("unlockInFlight")):F&&R!==0?((ct=o==null?void 0:o.blink)==null||ct.call(o,"doors",1),N("lockOnOpen")):(F===A||(A=F,L(!0),k(A?"door_bolt":"door_stop")),N(A?"didLock":"didUnlock"))}function K(q,H={}){var pt,gt,St,B,ue,It,Gt,Tt,Kt;H.audio&&!r&&(r=H.audio),H.console&&!o&&(o=H.console);const F=q?1:0,Z=H.shuttersOpen??((pt=H.fittings)==null?void 0:pt.shuttersOpen),nt=H.running??((gt=H.rotor)==null?void 0:gt.running),lt=H.worldId??((B=(St=H.walker)==null?void 0:St.world)==null?void 0:B.id),ct=H.playerZ??((It=(ue=H.walker)==null?void 0:ue.position)==null?void 0:It.z);if(!H.force&&Z===void 0&&nt===void 0&&lt===void 0&&ct===void 0&&!U&&(U=!0,console.warn("[doors] request() was given no interlock context — every interlock is off. Pass { fittings, rotor, walker } (THRESHOLD §3.5).")),F===E)return C="noop",N(R===E?E?"alreadyOpen":"alreadyShut":E?"busyOpening":"busyClosing");if(!H.force){if(F===1&&A)return C="refused",(Gt=o==null?void 0:o.blink)==null||Gt.call(o,"doors",1),N("locked");if(F===0&&!H.atShell&&lt!==void 0&&lt!=="interior")return C="refused",(Tt=o==null?void 0:o.blink)==null||Tt.call(o,"doors",1),N("remote");if(F===0&&ct!==void 0&&ct>VS)return C="refused",(Kt=o==null?void 0:o.blink)==null||Kt.call(o,"doors",1),N("onYou")}return F===1&&R===0&&k("door_bolt"),E=F,C=F?"open":"close",L(!0),R!==E&&I(!0),N(F?"opening":"closing")}function tt(q){var F;const H=Number.isFinite(q)?q:0;if(H>0&&R!==E){const Z=H/US;R=E>R?Math.min(E,R+Z):Math.max(E,R-Z),Math.abs(E-R)<1e-9&&(R=E),P=uf(R),y=!0,R>0&&M(!0),v&&S(),R===E?(I(!1),R===1&&k("door_stop"),R===0&&(k("door_shut"),M(!1),L(!1))):(F=r==null?void 0:r.setLoopLevel)==null||F.call(r,"doorSwing",qS(R))}y&&(b(),y=!1)}return b(),{group:a,leaves:c.map(q=>q.obj),discs:h,get t(){return R},get eased(){return xp(R)},get angle(){return P},get open(){return R>0},get moving(){return R!==E},get state(){return R===0?"shut":R===1?"open":E?"opening":"closing"},get lastAction(){return C},get boxes(){return m},request:K,setLocked:Y,get locked(){return A},get flightReady(){return R===0&&A},update:tt,collisionFor:M,setBoxDoors(q){return l=q?Gc(q,"boxDoors"):null,l&&_f(l,"boxDoors"),b(),y=!1,this},setAudio(q){return r=q||null,D(),this},setConsole(q){return o=q||null,this},force(q){return this.forceT(q?1:0)},forceT(q){return R=Math.min(1,Math.max(0,+q||0)),E=R,P=uf(R),I(!1),M(R>0),v&&S(),L(R>0),y=!0,b(),this},dispose(){I(!1)}}}const ln=3.284,oo=.071,gn=Object.freeze({w:1.15,h:2.11}),YS=gn.w/2,Ai=Object.freeze({footprint:1.372,half:.686,height:2.9,plinth:1.452,post:.111,bodyTop:2.28,planeZ:oo}),$S=Object.freeze([Object.freeze({x:.6305,z:0,hw:.0555,hd:.686,rotY:0,y0:0,y1:Ai.bodyTop}),Object.freeze({x:-.6305,z:0,hw:.0555,hd:.686,rotY:0,y0:0,y1:Ai.bodyTop}),Object.freeze({x:0,z:-.5025,hw:.686,hd:.1835,rotY:0,y0:0,y1:Ai.bodyTop})]),gf=1.4,Me="interior",aa="exterior";function jS(n,t){const e=typeof n=="string"?n:n==null?void 0:n.id;if(e===Me)return Me;if(e===aa||t&&e===t)return aa;throw new Error(`link: unknown world id ${JSON.stringify(e)} — expected '${Me}', '${aa}' or '${t}'`)}function KS(n,t){var c;if(!t||typeof t!="object")throw new Error("link: landing must be a record { site, x, z, yaw }");for(const l of["x","z","yaw"])if(!Number.isFinite(t[l]))throw new Error(`link: landing.${l} must be a finite number, got ${t[l]}`);if(!n||typeof n!="object")throw new Error(`link: no site record for landing.site ${JSON.stringify(t.site)}`);if(n.id&&t.site&&n.id!==t.site)throw new Error(`link: landing names site '${t.site}' but was handed site '${n.id}'`);const e=typeof n.groundY=="function"?n.groundY.bind(n):null,i=Ai.plinth/2,s=Math.cos(t.yaw),r=Math.sin(t.yaw),o=[[0,0],[+i,+i],[+i,-i],[-i,+i],[-i,-i]];for(const[l,h]of o){const u=t.x+l*s+h*r,f=t.z-l*r+h*s,d=e?e(u,f):((c=n.ground)==null?void 0:c.padY)??0;if(!Number.isFinite(d)||Math.abs(d)>.001)throw new Error(`link: landing '${t.site}' (${t.x}, ${t.z}) is not a level pad — ground is ${d} at (${u.toFixed(3)}, ${f.toFixed(3)}), and the link has no y offset to spend`)}const a=n.bounds;if(!a)throw new Error(`link: site '${n.id}' publishes no bounds`);if(Number.isFinite(a.apothem)){const l=Math.hypot(t.x,t.z),h=a.apothem-Se.RADIUS-gf;if(l>h)throw new Error(`link: landing '${t.site}' sits ${l.toFixed(3)} m from the site centre; the box cannot be walked round past ${h.toFixed(3)} m (apothem ${a.apothem} - WALK.RADIUS ${Se.RADIUS} - walk-round ${gf})`)}}function vp(n,t){const e=typeof n=="string"?Ri[n]:n;if(!e)throw new Error(`link: unknown landing ${JSON.stringify(n)} — known: ${Object.keys(Ri).join(", ")}`);const i=t&&typeof t=="object"&&t[e.site]?t[e.site]:t&&t.id===e.site?t:null;KS(i,e);const s=e.yaw,r=new Vt().makeTranslation(e.x,0,e.z).multiply(new Vt().makeRotationY(s)).multiply(new Vt().makeTranslation(0,0,oo-ln)),o=r.clone().invert(),a=new z(0,0,1),c=new z(0,0,ln),l=new z(Math.sin(s),0,Math.cos(s)),h=c.clone().applyMatrix4(r),u=new yi(new z(0,0,-1),ln),f=new yi(l.clone(),-l.dot(h)),d=new cn;d.name="portalCam",d.matrixAutoUpdate=!1,d.matrixWorldAutoUpdate=!1;const _=i.id||e.site,x=v=>jS(v,_),m=v=>x(v)===Me?1:-1,p=(v,M,S,R=new z)=>R.set(e.x+v*Or(s)+S*Ur(s),M,e.z-v*Ur(s)+S*Or(s));return{site:i,landing:Object.freeze({...e}),siteId:_,M_IE:r,M_EI:o,yaw:s,nI:a,pI:c,nE:l,pE:h,keepI:u,keepE:f,portalCam:d,M(v){return x(v)===Me?r:o},keepFor(v){return x(v)===Me?u:f},planeFor(v){return x(v)===Me?{point:c,normal:a}:{point:h,normal:l}},distanceTo(v,M){return x(v)===Me?M.z-ln:(M.x-h.x)*l.x+(M.z-h.z)*l.z},signFor:m,crossed(v,M,S){const R=m(v);return R*M<0&&R*S>=0},dYaw(v){return x(v)===Me?s:-s},other(v){return x(v)===Me?aa:Me},boxCollision(){return $S.map(v=>({x:e.x+v.x*Or(s)+v.z*Ur(s),z:e.z-v.x*Ur(s)+v.z*Or(s),hw:v.hw,hd:v.hd,rotY:v.rotY+s,y0:v.y0,y1:v.y1}))},capPose(v){const M=gn.h/2;return x(v)===Me?{position:new z(0,M,ln),rotY:Math.PI,normal:a.clone().negate()}:{position:new z(h.x,M,h.z),rotY:s,normal:l.clone()}},apertureCorners(v){const M=x(v)===Me,S=[];for(const[R,A]of[[1,0],[-1,0],[-1,1],[1,1]]){const E=R*YS,P=A*gn.h;S.push(M?new z(E,P,ln):new z(h.x+E*Or(s),P,h.z-E*Ur(s)))}return S},toSite:p,toExterior(v,M=new z){return M.copy(v).applyMatrix4(r)},toInterior(v,M=new z){return M.copy(v).applyMatrix4(o)},doorSpillPoint(v=new z){return p(0,1.5,Ai.half,v)}}}function Or(n){return Math.cos(n)}function Ur(n){return Math.sin(n)}const Ri=Object.freeze({ashfall_pan:Object.freeze({site:"ashfall",x:0,z:-4.2,yaw:0}),ashfall_rim:Object.freeze({site:"ashfall",x:6.4,z:-4.9,yaw:2.356194}),verge_shelf:Object.freeze({site:"verge",x:-3.1,z:5.8,yaw:-1.047198})}),ZS="ashfall_pan";function JS(n,{landings:t=Ri,fallback:e=ZS}={}){const i=o=>n?typeof n=="string"?new URLSearchParams(n).get(o):typeof n.get=="function"?n.get(o):Object.prototype.hasOwnProperty.call(n,o)?String(n[o]):null:null,s=i("landing");if(s){const o=t[s];if(!o)throw new Error(`link: ?landing=${s} is not a known landing — known: ${Object.keys(t).join(", ")}`);return o}const r=i("site");if(r){const o=a=>{const c=i(a);if(c===null||c==="")return 0;const l=Number(c);if(!Number.isFinite(l))throw new Error(`link: ?${a}=${c} is not a number`);return l};return Object.freeze({site:r,x:o("x"),z:o("z"),yaw:o("yaw")})}return t[e]}const ge=Math.PI*2,wa=Math.PI/180,si=n=>n<0?0:n>1?1:n,j0=n=>n*n*(3-2*n),Gi=(n,t,e)=>n+(t-n)*e;function Vc(n,t=0){const e=n*wa,i=t*wa,s=Math.cos(i);return new z(Math.sin(e)*s,Math.sin(i),Math.cos(e)*s)}function QS(n){let t=2166136261;for(let e=0;e<n.length;e++)t^=n.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function t2(n){let t=QS(n)||1;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function Mp(n){for(const t of Object.values(n))t&&typeof t=="object"&&Mp(t);return Object.freeze(n)}const Wc=Object.freeze(["id","name","sky","suns","sun","bounce","hemi","ambient","fog","ground","grit","rock","horizon","bounds","beds","ambience","props"]),e2=Object.freeze(["distance","camera","area"]),n2=1.4,i2=.8,s2=1.1,r2=.2968,o2=.796;function qc(n){const t=n/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4}function a2(n){return .2126*qc(n>>16&255)+.7152*qc(n>>8&255)+.0722*qc(n&255)}function c2(n){if(Number.isFinite(n.sun.gain))return n.sun.gain;const t=Math.max(.05,Math.sin(n.sun.elevationDeg*Math.PI/180)),e=Math.max(1e-4,a2(n.ground.colour)*n.sun.intensity*t);return r2/e**o2}function yp(n){if(n==null||typeof n!="object")throw new Error("SITE_SHAPE: not a record");if("exposure"in n)throw new Error(`SITE_SHAPE '${n.id}': there is no 'exposure' key in a site record. toneMappingExposure is renderer-global (main.js:83) and both render passes happen inside one frame, so an exterior exposure would change the console room's look through the portal in the same frame. Brightness comes from light intensities and albedo. THRESHOLD.md §4.2.`);for(const c of Wc)if(!(c in n))throw new Error(`SITE_SHAPE '${n.id}': missing key '${c}'`);for(const c of Object.keys(n))if(!Wc.includes(c))throw e2.includes(c)?new Error(`SITE_SHAPE '${n.id}': '${c}' is DERIVED here, not typed in the record`):new Error(`SITE_SHAPE '${n.id}': unknown key '${c}' (keys: ${Wc.join(", ")})`);const t=Object.keys(p0);if(!t.includes(n.horizon.silhouette))throw new Error(`SITE_SHAPE '${n.id}': horizon.silhouette '${n.horizon.silhouette}' is not a shipped kind (${t.join(" | ")}). A new shape is ~25 lines in SITE_KIND_BUILDERS and is then shared by every site from then on.`);for(const c of n.props)if(!t.includes(c.kind))throw new Error(`SITE_SHAPE '${n.id}': prop kind '${c.kind}' is not a shipped kind (${t.join(" | ")})`);if(n.bounds.kind!=="polygon")throw new Error(`SITE_SHAPE '${n.id}': bounds.kind must be 'polygon'`);if(!(n.bounds.sides>=5))throw new Error(`SITE_SHAPE '${n.id}': bounds.sides must be >= 5`);if(!(n.bounds.apothem>0))throw new Error(`SITE_SHAPE '${n.id}': bounds.apothem must be > 0`);const e=n.bounds.sides,i=n.bounds.apothem,s=e*i*i*Math.tan(Math.PI/e),r=1.25*2*i/Math.cos(Math.PI/e),o={ref:n2,max:r,fade:.25*r,panWidth:i2,panNear:s2},a={far:Math.ceil(n.sky.radius*1.1/10)*10};return Mp({...n,area:s,distance:o,camera:a})}const Wt=512,Xc=n=>n*Wt,l2=.06,h2=.055,u2=.035;let xf=!1;function Sp(){xf||(xf=!0,Re("ashField",(n,t={})=>{const e=t.p0??48,i=t.amp??.28,s=t.ripple??2.2,r=xe(n,Wt,{p0:e,octaves:4}),o=xe(n,Wt,{p0:Math.max(4,Math.round(e/6)),octaves:2}),a=.38,c=Math.max(1,Math.round(s*Math.cos(a))),l=Math.round(s*Math.sin(a)),h=new Float32Array(Wt*Wt),u=new Float32Array(Wt*Wt),f=new Float32Array(Wt*Wt);for(let d=0;d<Wt;d++){const _=d/Wt;for(let x=0;x<Wt;x++){const m=d*Wt+x,p=x/Wt,v=ge*(c*p+l*_)+(o[m]-.5)*2.4,M=.5-.5*Math.cos(v),S=si(.58*M*(.55+.45*r[m])+.42*r[m]);h[m]=S,u[m]=.7+.3*S,f[m]=.94-.13*S}}return{normalMap:ri(h,Wt,Xc(i*l2)),ormMap:Ge(Wt,u,f,null),normalScale:1,uvScale:[1,1]}}),Re("siteRock",(n,t={})=>{const e=t.p0??24,i=t.amp??1,s=xe(n,Wt,{p0:e,octaves:5}),r=xe(n,Wt,{p0:e*2,octaves:3}),o=new Float32Array(Wt*Wt),a=new Float32Array(Wt*Wt),c=new Float32Array(Wt*Wt);for(let l=0;l<Wt*Wt;l++){const h=1-Math.abs(2*r[l]-1),u=si(.58*s[l]+.42*h);o[l]=u,a[l]=.62+.38*u,c[l]=.92-.2*h}return{normalMap:ri(o,Wt,Xc(i*h2)),ormMap:Ge(Wt,a,c,null),normalScale:1,uvScale:[1,1]}}),Re("policePanel",(n,t={})=>{const e=t.inset??.15,i=t.bead??.045,s=t.depth??1,r=t.plain===!0,o=xe(n,Wt,{p0:96,octaves:3}),a=xe(n,Wt,{p0x:6,p0y:200,octaves:2}),c=new Float32Array(Wt*Wt),l=new Float32Array(Wt*Wt),h=new Float32Array(Wt*Wt),u=e-i,f=e;for(let d=0;d<Wt;d++){const _=d/Wt;for(let x=0;x<Wt;x++){const m=d*Wt+x,p=x/Wt,v=Math.min(p,1-p,_,1-_),M=r?1:j0(si((v-u)/(f-u))),S=.015*(o[m]-.5)+.008*(a[m]-.5);c[m]=si(M+S),l[m]=.72+.28*M,h[m]=.34+.14*(1-M)+.05*o[m]}}return{normalMap:ri(c,Wt,Xc(s*u2)),ormMap:Ge(Wt,l,h,null),normalScale:1,uvScale:[1,1]}}))}const Yc=new Map;function f2(n,t=null){if(Yc.has(n.id))return Yc.get(n.id);Sp();const e={},i=lr(n.ground.recipe,t?t.child("tex."+n.ground.recipe+"."+n.id):null,{p0:n.ground.relief.p0,amp:n.ground.relief.amp,ripple:n.ground.relief.ripple});e.GROUND=new Ca({color:n.ground.colour,roughness:1,metalness:0,specularIntensity:n.ground.specular??.15,normalMap:i.normalMap,normalScale:new Ot(i.normalScale,i.normalScale),aoMap:i.ormMap,roughnessMap:i.ormMap,aoMapIntensity:1,vertexColors:!0}),e.GROUND.userData.uvScale=[n.ground.uvScale,n.ground.uvScale],e.GROUND.userData.cast=!1,e.GROUND.userData.surface=n.ground.recipe;const s=lr("siteRock",t?t.child("tex.siteRock."+n.id):null,{}),r=n.ground.uvScale*.8,o=n.ground.uvScale*.25,a=(c,l)=>{const h=new mn({color:c,roughness:1,metalness:0,normalMap:s.normalMap,normalScale:new Ot(s.normalScale,s.normalScale),aoMap:s.ormMap,roughnessMap:s.ormMap,aoMapIntensity:1,vertexColors:!0});return h.userData.uvScale=[l,l],h.userData.cast=!0,h.userData.surface="siteRock",h};e.ROCK=a(n.rock.colour,r),e.GRIT=a(n.grit.colour,o),e.SKY=new fs({color:16777215,vertexColors:!0,side:hn,depthWrite:!1,fog:!1}),e.SUNS=new Map;for(const c of n.suns)e.SUNS.has(c.colour)||e.SUNS.set(c.colour,new fs({color:c.colour,fog:!1}));return e.HORIZON=new fs({color:16777215,vertexColors:!0,fog:!1}),e.DECAL=new fs({map:d2(),color:new Nt(n.ground.colour).multiplyScalar(.42),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),e.DECAL.userData.decal=!0,Yc.set(n.id,e),e}let $c=null;function d2(){if($c)return $c;const n=64,t=(n-1)/2,e=new Uint8Array(n*n*4);for(let s=0;s<n;s++)for(let r=0;r<n;r++){const o=(s*n+r)*4,a=Math.hypot(r-t,s-t)/t,c=1-j0(si((a-.35)/.65));e[o]=255,e[o+1]=255,e[o+2]=255,e[o+3]=c*255+.5|0}const i=new to(e,n,n,Qe);return i.minFilter=Ue,i.magFilter=Ue,i.generateMipmaps=!1,i.needsUpdate=!0,$c=i,i}function Vi(n,t,e,i,s,r,o,a,c=0,l=.035){const h=se("siteRock",t,e,i,0,{material:n.ROCK,chamfer:l,cast:!0});return h.position.set(s,r,o),h.rotation.set(c,a,c*.6),h}const En=(n,t,e)=>2*(n*t+n*e+t*e),xi=180;function jc(n,t,e){const{M:i,distance:s,height:r,base:o,tint:a,haze:c}=t;let l=0;for(let E=0;E<xi;E++)l=Math.max(l,e(E/xi));const h=E=>e(E)/(l||1),u=new Float32Array(xi*6*3),f=new Float32Array(xi*6*3),d=new Float32Array(xi*6*3);let _=0;const x=new Nt(c),m=new Nt(a),p=new Nt,v=(E,P,C,g)=>{u[_*3]=E,u[_*3+1]=P,u[_*3+2]=C;const y=Math.pow(si(P/Math.max(g,1e-6)),.6);p.copy(x).lerp(m,y),f[_*3]=p.r,f[_*3+1]=p.g,f[_*3+2]=p.b;const b=1/Math.max(Math.hypot(E,C),1e-6);d[_*3]=-E*b,d[_*3+1]=0,d[_*3+2]=-C*b,_++},M=(E,P,C,g)=>{const y=P[0]-E[0],b=P[1]-E[1],L=P[2]-E[2],N=C[0]-E[0],k=C[1]-E[1],I=C[2]-E[2],D=b*I-L*k,U=y*k-b*N,Y=(E[0]+P[0]+C[0])/3,K=(E[2]+P[2]+C[2])/3,tt=D*Y+U*K>0?C:P,J=D*Y+U*K>0?P:C;v(E[0],E[1],E[2],g),v(tt[0],tt[1],tt[2],g),v(J[0],J[1],J[2],g)};let S=0;const R=o+r;for(let E=0;E<xi;E++){const P=E/xi,C=(E+1)/xi,g=P*ge,y=C*ge,b=Math.sin(g)*s,L=Math.cos(g)*s,N=Math.sin(y)*s,k=Math.cos(y)*s,I=o+r*h(P),D=o+r*h(C),U=-14;M([b,U,L],[N,U,k],[N,D,k],R),M([b,U,L],[N,D,k],[b,I,L],R),S+=s*ge/xi*((I+D)/2)}const A=new en;return A.setAttribute("position",new le(u,3)),A.setAttribute("normal",new le(d,3)),A.setAttribute("color",new le(f,3)),n.add(new Dt(A,i.HORIZON)),{w:s*2,d:s*2,h:R,area:S}}function Kc(n,t,e){const i=t.map(()=>n()*ge),s=e.reduce((r,o)=>r+o,0);return r=>{let o=0;for(let a=0;a<t.length;a++)o+=e[a]*Math.sin(t[a]*ge*r+i[a]);return .5+.5*(o/s)}}const p0=Object.freeze({ridge(n,t){const e=Kc(t.rand,[1,2,3,5,8],[1,.62,.38,.22,.11]);return jc(n,t,i=>.24+.76*e(i))},spires(n,t){const e=Kc(t.rand,[2,3,5],[1,.5,.3]),i=t.rand()*ge,s=t.rand()*ge,r=t.rand()*ge,o=a=>Math.max(Math.pow(.5+.5*Math.sin(13*ge*a+i),14),Math.max(Math.pow(.5+.5*Math.sin(17*ge*a+s),14),Math.pow(.5+.5*Math.sin(23*ge*a+r),14)));return jc(n,t,a=>si(.16+.34*e(a)+.62*o(a)))},dunes(n,t){const e=Kc(t.rand,[1,2,3],[1,.45,.2]);return jc(n,t,i=>.3+.7*Math.min(1,j0(e(i))*1.35))},outcrop(n,t){const{M:e,rand:i}=t,s=()=>i()-.5;return n.add(Vi(e,1.3,.46,1.05,0,.21,0,0+.2*s(),.03)),n.add(Vi(e,.96,1.04,.82,.06*s(),.7,.05*s(),.34+.3*s(),.04)),n.add(Vi(e,.64,.72,.58,.1+.1*s(),1.32,-.08+.1*s(),-.48+.3*s(),.05)),n.add(Vi(e,.4,.34,.36,.16,1.62,-.04,.9+.4*s(),.08)),n.add(Vi(e,.52,.19,.44,.74,.08,-.38,1.2+.5*s(),.06)),{w:1.3,d:1.05,h:1.72,area:En(1.3,.46,1.05)+En(.96,1.04,.82)+En(.64,.72,.58)+En(.4,.34,.36)+En(.52,.19,.44)}},shard(n,t){const{M:e,rand:i}=t,s=2.6,r=new Dt(new ee(.07,.4,s,5,1),e.ROCK);r.position.set(0,s/2-.1,0),r.rotation.set(.17+.06*i(),i()*ge,.06*(i()-.5)),r.castShadow=!0,n.add(r),n.add(Vi(e,.86,.3,.78,.04,.13,.02,i()*ge,.02)),n.add(Vi(e,.4,.22,.34,-.58,.09,.26,i()*ge,.05));const o=Math.hypot(s,.33);return{w:.9,d:.82,h:s,area:Math.PI*(.07+.4)*o+En(.86,.3,.78)+En(.4,.22,.34)}},marker(n,t){const{M:e,rand:i}=t,s=.34,r=1.86,o=new ve;o.position.set(0,-s,0),o.rotation.set(-.2,.04*(i()-.5),0),n.add(o);const a=se("siteRock",.62,r,.22,0,{material:e.ROCK,chamfer:.03,cast:!0});a.position.y=r/2,o.add(a);let c=En(.62,r,.22);for(let l=0;l<6;l++){const h=.66-l*.02,u=.058-l*.004,f=se("siteRock",h,u,.26,0,{material:e.ROCK,chamfer:.012,cast:!0});f.position.set(0,.3+l*.26,0),o.add(f),c+=En(h,u,.26)}return n.add(Vi(e,.46,.2,.4,.34,.07,-.22,i()*ge,.04)),c+=En(.46,.2,.4),{w:.8,d:.62,h:(r-s)*Math.cos(.2),area:c}}}),vf=2.2,Mf=.02;function p2(n,t,e={}){if(!Object.isFrozen(t))throw new Error("buildSite: pass a record that has been through SITE_SHAPE()");if(e.camera&&e.camera.far<t.sky.radius*1.02)throw new Error(`buildSite '${t.id}': camera.far is ${e.camera.far} but the sky dome is at ${t.sky.radius} m and the horizon at ${t.horizon.distance} m. Set the exterior camera.far to SITE.camera.far (${t.camera.far}) — see SITE_SHAPE's derivation.`);const i=(e.keepOut||[]).map((D,U)=>{if(!Number.isFinite(D.x)||!Number.isFinite(D.z)||!Number.isFinite(D.r)||D.r<=0)throw new Error(`buildSite '${t.id}': keepOut[${U}] is { x: ${D.x}, z: ${D.z}, r: ${D.r} } — every field must be a finite number and r must be positive. A NaN radius disables the keep-out silently, because NaN fails every comparison.`);return{x:D.x,z:D.z,r:D.r}}),s=t.grit.scale[1]*.7,r=Math.hypot(4.2/2,2.1/2),o=(D,U,Y,K)=>{for(const tt of Y)if(Math.hypot(D-tt.x,U-tt.z)<tt.r+K)return!1;return!0};let a=0;const c=f2(t,e.rng??null),l=t2("site."+t.id),h=new ve;h.name="siteLive";const u=Object.create(null),f=Object.create(null),d=(D,U,Y)=>(u[D]=(u[D]??0)+Y,f[U]=(f[U]??0)+Y,Da(U,f[U]),U),_=t.bounds.sides,x=t.bounds.apothem,m=x/Math.cos(Math.PI/_),p=2*x*Math.tan(Math.PI/_);{const D=t.sky.radius,U=new L0(D,12),Y=U.getAttribute("position"),K=new Float32Array(Y.count*3),tt=new Nt(t.sky.zenith),J=new Nt(t.sky.horizon),q=new Nt;for(let F=0;F<Y.count;F++){const Z=Math.pow(si(Y.getY(F)/D),t.sky.gradPower);q.copy(J).lerp(tt,Z),K[F*3]=q.r,K[F*3+1]=q.g,K[F*3+2]=q.b}U.setAttribute("color",new le(K,3)),n.add(new Dt(U,c.SKY));const H=ge*D*D;d("SKY_ZENITH",t.sky.zenith,H),d("SKY_HORIZON",t.sky.horizon,H)}for(const D of t.suns){const U=t.sky.radius*Math.tan(D.angularDeg*.5*wa),Y=new gs(U,28),K=new Dt(Y,c.SUNS.get(D.colour));K.position.copy(Vc(D.azimuthDeg,D.elevationDeg)).multiplyScalar(t.sky.radius-.5),K.lookAt(0,0,0),n.add(K),d("SUN",D.colour,Math.PI*U*U)}{const D=t.horizon.distance*Math.tan(t.horizon.heightDeg*wa),U=p0[t.horizon.silhouette](n.group,{M:c,rand:l,distance:t.horizon.distance,height:D,base:0,tint:t.horizon.colour,haze:t.fog.colour});d("HORIZON",t.horizon.colour,U.area)}const v=t.ground.discR,M=Math.max(1.8,t.bounds.rimH*1.8),S=Math.max(v+20,t.fog.far*1.25);{const D=new Dt(new gs(v,96),c.GROUND);D.rotation.x=-Math.PI/2,D.receiveShadow=!0,n.add(D);const U=new Dt(new ee(v,v,M,96,1,!0),c.GROUND);U.position.y=-M/2,n.add(U);const Y=new Dt(new La(v,S,96,1),c.GROUND);Y.rotation.x=-Math.PI/2,Y.position.y=-M,n.add(Y),d("GROUND",t.ground.colour,Math.PI*v*v),d("GROUND",t.ground.colour,ge*v*M),d("GROUND",t.ground.colour,Math.PI*(S*S-v*v))}const R=1;n.solid(0,-.3,0,2*(m+R),.3,2*(m+R),!0);const A=[];{const Y=Math.min(.55,t.bounds.rimH*.48),K=t.bounds.rimH-Y,tt=2*.58*Math.tan(Math.PI/_)+.06;let J=0;for(let q=0;q<_;q++){const H=q*ge/_,F=Math.sin(H),Z=Math.cos(H),nt=se("siteRock",p+tt,Y,.58,0,{material:c.ROCK,chamfer:.05,cast:!0});nt.position.set(F*(x+.58/2),Y/2,Z*(x+.58/2)),nt.rotation.y=H,n.add(nt);const lt=se("siteRock",p+tt*.6,K,.34,0,{material:c.ROCK,chamfer:.07,cast:!0});lt.position.set(F*(x+.58+.34/2-.08),Y+K/2,Z*(x+.58+.34/2-.08)),lt.rotation.y=H,n.add(lt),J+=En(p+tt,Y,.58)+En(p+tt*.6,K,.34),A.push({nx:F,nz:Z,d:x})}d("ROCK",t.rock.colour,J)}const E=[],P=e.propCollision!==!1,C=Vc(t.sun.azimuthDeg,t.sun.elevationDeg),g=new Ot(-C.x,-C.z).normalize().multiplyScalar(.28);let y=0;for(const D of t.props){const U=new ve;U.position.set(D.x,0,D.z),U.rotation.y=D.yaw,U.scale.setScalar(D.scale),n.add(U);const Y=p0[D.kind](U,{M:c,rand:l,scale:D.scale});y+=Y.area*D.scale*D.scale;const K=Y.w*D.scale,tt=Y.d*D.scale,J=Y.h*D.scale;P&&E.push({x:D.x,z:D.z,hw:K/2,hd:tt/2,rotY:D.yaw,y0:0,y1:J}),yf(n,c,D.x+g.x,D.z+g.y,K,tt),D.kind==="marker"&&n.spot("marker",D.x+Math.sin(D.yaw)*1.3,0,D.z+Math.cos(D.yaw)*1.3)}d("ROCK",t.rock.colour,y);{const[D,U]=t.grit.scale;let Y=0,K=0;for(let J=0;J<t.grit.count;J++){let q,H,F,Z;for(let St=0;q=Math.sqrt(l())*x*.97,H=l()*ge,F=Math.sin(H)*q,Z=Math.cos(H)*q,!o(F,Z,i,s);St++)if(St>=24){K+=1,q=NaN;break}if(Number.isNaN(q))continue;const nt=Gi(D,U,l()),lt=nt*Gi(.8,1.4,l()),ct=nt*Gi(.8,1.4,l()),pt=nt*Gi(.4,.9,l()),gt=se("siteRock",lt,pt,ct,0,{material:c.GRIT,chamfer:.012,cast:!1});gt.position.set(F,pt*.05,Z),gt.rotation.set(.1*(l()-.5),l()*ge,.1*(l()-.5)),n.add(gt),Y+=En(lt,pt,ct)}d("GRIT",t.grit.colour,Y),a=K;let tt=0;for(let J=0;J<3;J++){let q,H,F,Z;for(let gt=0;q=Gi(4.5,x*.82,l()),H=l()*ge,F=Math.sin(H)*q,Z=Math.cos(H)*q,!o(F,Z,i,r);gt++)if(gt>=24){q=NaN;break}if(Number.isNaN(q))continue;const nt=Gi(2.4,4.2,l()),lt=Gi(1.2,2.1,l()),ct=Gi(.09,.14,l()),pt=se("ashField",nt,ct,lt,0,{material:c.GROUND,chamfer:.055,cast:!1});pt.position.set(F,ct/2-.02,Z),pt.rotation.y=l()*ge,n.add(pt),tt+=nt*lt+2*(nt+lt)*ct}d("GROUND",t.ground.colour,tt)}const b={};{const D=c2(t),U=new hu(t.sun.colour,t.sun.intensity*D);U.position.copy(C).multiplyScalar(120),b.key=U;const Y=new hu(t.bounce.colour,t.bounce.intensity*D);Y.position.copy(Vc(t.bounce.azimuthDeg,23.962)).multiplyScalar(98.4),b.bounce=Y,b.hemi=new Sd(t.hemi.sky,t.hemi.ground,t.hemi.intensity*D),b.ambient=new wd(t.ambient.colour,t.ambient.intensity*D);const K=new Pa(16774121,vf*Mf,9,2);K.position.set(0,1.1,0),b.doorSpill=K;for(const tt of[b.key,b.bounce,b.hemi,b.ambient,b.doorSpill])n.group.add(tt),n.lights.push(tt)}n.userData??(n.userData={}),n.userData.collision={planes:A,hulls:[],boxes:E},n.spot("centre",0,0,0);let L=l()*ge,N=0;const k=D=>{L+=D*t.ambience.gustRate*ge;const U=Math.sin(L),Y=Math.sin(L*.3716+1.7);N=si(.5+.36*U+.2*Y)};k(0);const I=t.beds.map(([D])=>D);return{group:n.group,live:h,areas:u,update:k,SITE:t,keepOut:i,gritRejected:a,fog:new b0(t.fog.colour,t.fog.near,t.fog.far),distance:t.distance,surface:t.ground.surface,beds:t.beds,bedIds:I,collision:n.userData.collision,lights:b,doorSpill:b.doorSpill,sunDir:C,setDoorSpill(D){b.doorSpill.intensity=vf*Math.max(Mf,si(D))},contact(D,U,Y,K){yf(n,c,D+g.x,U+g.y,Y,K)},get gust(){return N},get windLevel(){return t.ambience.windGain*(.62+.38*N)},buckets:7}}function yf(n,t,e,i,s,r){const o=Math.min(Math.max(Math.min(s,r)*.3,.05),.3),a=new Dt(new Ci(s+2*o,r+2*o),t.DECAL);return a.rotation.x=-Math.PI/2,a.position.set(e,.006,i),n.add(a),n.decals.push({x0:e-s/2-o,x1:e+s/2+o,z0:i-r/2-o,z1:i+r/2+o}),a}const m2=yp({id:"ashfall",name:"the Ashfall",sky:{zenith:3095895,horizon:11567189,gradPower:2.2,radius:180},suns:[{colour:16771528,angularDeg:.5,azimuthDeg:214,elevationDeg:13}],sun:{colour:16771528,intensity:1.65,azimuthDeg:214,elevationDeg:13,gain:9.667},bounce:{colour:10463428,intensity:.263,azimuthDeg:34},hemi:{sky:11567189,ground:4866104,intensity:.675},ambient:{colour:14734528,intensity:.263},fog:{colour:11567189,near:11,far:84},ground:{colour:4866104,recipe:"ashField",surface:"grit",uvScale:1.1,discR:14,relief:{p0:48,amp:.28,ripple:2.2}},grit:{colour:4143674,count:160,scale:[.08,.3]},rock:{colour:6179644},horizon:{silhouette:"ridge",colour:4143674,heightDeg:3.4,distance:150},bounds:{kind:"polygon",sides:12,apothem:12,rimH:1.15},beds:[["ext_wind",{rate:1}],["ext_grit",{rate:1}]],ambience:{windGain:.34,gustRate:.14},props:[{kind:"outcrop",x:2.9,z:1.6,yaw:.9,scale:1},{kind:"outcrop",x:-5.1,z:-3.4,yaw:2.6,scale:1.45},{kind:"marker",x:4.8,z:-5.9,yaw:4.1,scale:1},{kind:"shard",x:-1.2,z:6.3,yaw:.3,scale:1.2}]}),_2=yp({id:"verge",name:"the Verge",sky:{zenith:3820126,horizon:11057348,gradPower:1.6,radius:180},suns:[{colour:15398655,angularDeg:.4,azimuthDeg:96,elevationDeg:41}],sun:{colour:15398655,intensity:2.18,azimuthDeg:96,elevationDeg:41,gain:.56},bounce:{colour:10465469,intensity:.31,azimuthDeg:276},hemi:{sky:11057348,ground:7174788,intensity:.94},ambient:{colour:15134975,intensity:.34},fog:{colour:11057348,near:9,far:64},ground:{colour:9345699,recipe:"ashField",surface:"grit",uvScale:1.6,discR:14,relief:{p0:62,amp:.14,ripple:4}},grit:{colour:5596014,count:210,scale:[.06,.22]},rock:{colour:7174788},horizon:{silhouette:"spires",colour:5596014,heightDeg:5.1,distance:150},bounds:{kind:"polygon",sides:12,apothem:12,rimH:.9},beds:[["ext_wind",{rate:1.34}],["ext_grit",{rate:.78}]],ambience:{windGain:.22,gustRate:.09},props:[{kind:"shard",x:3.6,z:-1.1,yaw:.6,scale:1.3},{kind:"shard",x:-4.8,z:2.4,yaw:2.1,scale:.85},{kind:"outcrop",x:1.9,z:4.1,yaw:1.05,scale:1},{kind:"marker",x:-2.2,z:-5.6,yaw:3.9,scale:1.45}]}),K0=Object.freeze({ashfall:m2,verge:_2}),g2=n=>n<0?0:n>1?1:n,Vn=Object.freeze({S:512,TILE:.45,SKIN:15e-5,ROUGH:.44,ROUGH_PEEL:.06,ROUGH_BRUSH:.05,SPECULAR:.02,NORMAL_SCALE:1}),x2=1,v2=.6,M2=2.4,y2=400,S2=6,E2=512,w2=3;let Sf=!1;function A2(){Sf||(Sf=!0,Re("policePaint",n=>{const t=Vn.S,e=t*t,i=xe(n,t,{p0:96,octaves:3}),s=xe(n,t,{p0x:y2,p0y:S2,octaves:2}),r=xe(n,t,{p0x:E2,p0y:w2,octaves:2}),o=new Float32Array(e),a=new Float32Array(e);for(let c=0;c<e;c++)o[c]=x2*(i[c]-.5)+v2*(s[c]-.5)+M2*(r[c]-.5),a[c]=g2(Vn.ROUGH+Vn.ROUGH_PEEL*(i[c]-.5)*2-Vn.ROUGH_BRUSH*(s[c]-.5)*2);return{normalMap:ri(o,t,Vn.SKIN*(Vn.S/Vn.TILE)),ormMap:Ge(t,null,a,null),uvScale:[Vn.TILE,Vn.TILE],normalScale:Vn.NORMAL_SCALE,tinted:!0}}))}function b2(n=null){return A2(),lr("policePaint",n)}function Z0(n,t){if(!n.defines||!("PHYSICAL"in n.defines)||!("STANDARD"in n.defines))throw new Error(`boxpaint: ${t} lost its PHYSICAL define, so specularIntensity is dead - something copied a Standard material over it (docs/BOX.md 4.1)`);return n}function Ef(n,t,e={}){const i=new Ca({color:n,roughness:1,metalness:0,specularIntensity:e.specularIntensity??Vn.SPECULAR,normalMap:t.normalMap,normalScale:new Ot(t.normalScale,t.normalScale),aoMap:t.ormMap,roughnessMap:t.ormMap,aoMapIntensity:1,vertexColors:!0});return i.userData.uvScale=t.uvScale,i.userData.cast=!0,i.userData.surface="policePaint",Z0(i,"paintMaterial")}const cs=Object.freeze({S:256,ETCH_P0:32,DRAW_FINE_X:200,DRAW_LONG_Y:4,A_ETCH:.085,A_DRAW:.045,SEED:"tex.frostedGlass"}),T2=n=>n<=.0031308?n*12.92:1.055*Math.pow(n,1/2.4)-.055;let Vo=null;function R2(){if(Vo)return Vo;const n=cs.S,t=n*n,e=new no(cs.SEED),i=xe(e,n,{p0:cs.ETCH_P0,octaves:3}),s=xe(e,n,{p0x:cs.DRAW_FINE_X,p0y:cs.DRAW_LONG_Y,octaves:2}),r=new Uint8Array(t*4);let o=0,a=2,c=-1;for(let h=0;h<t;h++){const u=1-cs.A_ETCH*(1-i[h])-cs.A_DRAW*(1-s[h]),f=Math.round(T2(u)*255);r[h*4]=f,r[h*4+1]=f,r[h*4+2]=f,r[h*4+3]=255,o+=u,u<a&&(a=u),u>c&&(c=u)}const l=new to(r,n,n,Qe);return l.colorSpace=Je,l.wrapS=l.wrapT=ms,l.magFilter=Ue,l.minFilter=Xn,l.generateMipmaps=!0,l.anisotropy=8,l.needsUpdate=!0,Vo={map:l,data:r,width:n,height:n,mulMin:a,mulMax:c,mulMean:o/t},Vo}const Wi=Object.freeze({TILE:.22,NORMAL_SCALE:.35,ROUGHNESS:.9,SPECULAR:.1,GLOW:16773850,GLOW_I:.09});function L2(n,t,e={}){const i=R2(),s=new Ca({color:n,map:i.map,emissiveMap:i.map,roughness:e.roughness??Wi.ROUGHNESS,metalness:0,specularIntensity:e.specularIntensity??Wi.SPECULAR,emissive:e.emissive??Wi.GLOW,emissiveIntensity:e.emissiveIntensity??Wi.GLOW_I,normalMap:t.normalMap,normalScale:new Ot(Wi.NORMAL_SCALE,Wi.NORMAL_SCALE),vertexColors:!0});return s.userData.uvScale=[Wi.TILE,Wi.TILE],s.userData.cast=!1,s.userData.surface="policePaint",Z0(s,"glazingMaterial")}function C2(n,t={}){const e=O2(),i=new mn({color:n,roughness:t.roughness??.62,metalness:0,map:e.map,emissive:t.emissive??16772301,emissiveMap:e.map,emissiveIntensity:t.emissiveIntensity??.55,vertexColors:!0});return i.userData.cast=!0,i}function I2(n,t={}){const e=new Ca({color:n,roughness:t.roughness??.45,metalness:0,specularIntensity:t.specularIntensity??.2,emissive:t.emissive??16773850,emissiveIntensity:t.emissiveIntensity??.95,vertexColors:!0});return e.userData.cast=!1,Z0(e,"lensMaterial")}const jt=Object.freeze({W:1024,H:128,BOARD_W:1.15,BOARD_H:.13,FIELD:Object.freeze([228,224,210]),INK:Object.freeze([26,29,36]),L1_TEXT:"POLICE",L1_CAP:60,L1_TOP:34,L1_X0:62,L1_X1:402,L1_WEIGHT:.13,L3_TEXT:"BOX",L3_CAP:60,L3_TOP:34,L3_X0:660,L3_X1:960,L3_WEIGHT:.13,L2_TEXT:"PUBLIC",L2_CAP:24,L2_TOP:28,L2_X0:452,L2_X1:622,L2_WEIGHT:.165,L4_TEXT:"CALL",L4_CAP:24,L4_TOP:68,L4_X0:452,L4_X1:622,L4_WEIGHT:.165}),P2=jt.W/jt.BOARD_W/(jt.H/jt.BOARD_H),D2={A:[[[0,10],[3,0],[6,10]],[[1.4,5.4],[4.6,5.4]]],B:[[[0,0],[0,10]],[[0,0],[3.4,0],[4.7,.5],[5.4,1.6],[5.4,3.4],[4.7,4.5],[3.4,5],[0,5]],[[0,5],[3.8,5],[5.2,5.6],[6,6.8],[6,8.2],[5.2,9.4],[3.8,10],[0,10]]],C:[[[5.12,1.75],[4.15,.75],[3,.4],[1.85,.75],[.88,1.75],[.23,3.24],[0,5],[.23,6.76],[.88,8.25],[1.85,9.25],[3,9.6],[4.15,9.25],[5.12,8.25]]],D:[[[0,0],[0,10]],[[0,0],[3,0],[4.6,.55],[5.6,1.9],[6,3.6],[6,6.4],[5.6,8.1],[4.6,9.45],[3,10],[0,10]]],E:[[[0,0],[0,10]],[[0,0],[5.8,0]],[[0,5],[4.6,5]],[[0,10],[5.8,10]]],F:[[[0,0],[0,10]],[[0,0],[5.8,0]],[[0,5],[4.6,5]]],G:[[[5.12,1.75],[4.15,.75],[3,.4],[1.85,.75],[.88,1.75],[.23,3.24],[0,5],[.23,6.76],[.88,8.25],[1.85,9.25],[3,9.6],[4.5,9.1],[5.6,7.9],[6,6.2]],[[3.3,5.7],[6,5.7]]],H:[[[0,0],[0,10]],[[6,0],[6,10]],[[0,5],[6,5]]],I:[[[2,0],[2,10]]],J:[[[5,0],[5,7.3],[4.6,8.7],[3.6,9.45],[2.3,9.6],[1.1,9.3],[.25,8.5],[0,7.6]]],K:[[[0,0],[0,10]],[[5.8,0],[.4,5.4]],[[2.3,3.6],[6,10]]],L:[[[0,0],[0,10]],[[0,10],[5.6,10]]],M:[[[0,10],[0,0],[3,6],[6,0],[6,10]]],N:[[[0,10],[0,0],[6,10],[6,0]]],O:[[[3,.4],[4.15,.75],[5.12,1.75],[5.77,3.24],[6,5],[5.77,6.76],[5.12,8.25],[4.15,9.25],[3,9.6],[1.85,9.25],[.88,8.25],[.23,6.76],[0,5],[.23,3.24],[.88,1.75],[1.85,.75],[3,.4]]],P:[[[0,10],[0,0]],[[0,0],[3.7,0],[5.1,.6],[6,1.9],[6,3.7],[5.1,5],[3.7,5.6],[0,5.6]]],Q:[[[3,.4],[4.15,.75],[5.12,1.75],[5.77,3.24],[6,5],[5.77,6.76],[5.12,8.25],[4.15,9.25],[3,9.6],[1.85,9.25],[.88,8.25],[.23,6.76],[0,5],[.23,3.24],[.88,1.75],[1.85,.75],[3,.4]],[[3.7,7.4],[6,10]]],R:[[[0,10],[0,0]],[[0,0],[3.7,0],[5.1,.6],[6,1.9],[6,3.7],[5.1,5],[3.7,5.6],[0,5.6]],[[2.6,5.6],[6,10]]],S:[[[5.9,2.1],[5.2,.95],[3.9,.35],[2.3,.4],[1,1],[.25,2.1],[.35,3.3],[1.1,4.15],[2.4,4.7],[3.9,5.3],[5.1,5.9],[5.85,6.9],[5.9,8.1],[5.1,9.2],[3.7,9.65],[2.1,9.6],[.8,9.1],[.1,8]]],T:[[[0,0],[6,0]],[[3,0],[3,10]]],U:[[[0,0],[0,6.8],[.4,8.2],[1.5,9.23],[3,9.6],[4.5,9.23],[5.6,8.2],[6,6.8],[6,0]]],V:[[[0,0],[3,10],[6,0]]],W:[[[0,0],[1.5,10],[3,3.4],[4.5,10],[6,0]]],X:[[[0,0],[6,10]],[[6,0],[0,10]]],Y:[[[0,0],[3,5.2],[6,0]],[[3,5.2],[3,10]]],Z:[[[0,0],[6,0]],[[6,0],[0,10]],[[0,10],[6,10]]],"&":[[[6,8.6],[4.4,6.4],[3,4.6],[2,3.2],[1.7,1.9],[2.5,.6],[3.7,.5],[4.5,1.4],[4.3,2.7],[3.2,4],[1.9,5.3],[.8,6.7],[.5,8.2],[1.2,9.3],[2.6,9.7],[4.1,9.2],[5.2,8],[6,6.6]]]," ":[]},N2={I:4," ":3.4},Wo=n=>N2[n]??6,wf=2.2;let qo=null;function O2(){if(qo)return qo;const n=jt.W,t=jt.H,e=new Float32Array(n*t),i=v=>t-1-v,s=zr(e,n,t,jt.L1_TEXT,jt.L1_CAP,jt.L1_TOP,jt.L1_X0,jt.L1_X1,jt.L1_WEIGHT),r=zr(e,n,t,jt.L2_TEXT,jt.L2_CAP,jt.L2_TOP,jt.L2_X0,jt.L2_X1,jt.L2_WEIGHT),o=zr(e,n,t,jt.L3_TEXT,jt.L3_CAP,jt.L3_TOP,jt.L3_X0,jt.L3_X1,jt.L3_WEIGHT),a=zr(e,n,t,jt.L4_TEXT,jt.L4_CAP,jt.L4_TOP,jt.L4_X0,jt.L4_X1,jt.L4_WEIGHT),c=new Uint8Array(n*t*4),[l,h,u]=jt.FIELD,[f,d,_]=jt.INK;let x=0,m=0;for(let v=0;v<t;v++){const M=v*n,S=i(v)*n,R=1-(v+.5)/t;for(let A=0;A<n;A++){const E=e[M+A],P=(S+A)*4;c[P]=l+(f-l)*E+.5,c[P+1]=h+(d-h)*E+.5,c[P+2]=u+(_-u)*E+.5,c[P+3]=255,x+=E,m+=E*R}}const p=new to(c,n,t,Qe);return p.colorSpace=Je,p.wrapS=p.wrapT=ms,p.magFilter=Ue,p.minFilter=Xn,p.generateMipmaps=!0,p.anisotropy=8,p.needsUpdate=!0,qo={map:p,data:c,width:n,height:t,lines:[s,r,o,a],headlineBand:[jt.L1_TOP,jt.L1_TOP+jt.L1_CAP],inkCentroidV:x>0?m/x:.5},qo}function zr(n,t,e,i,s,r,o,a,c,l=P2){const h=i.split(" ").filter(C=>C.length),u=h.reduce((C,g)=>C+g.length,0),f=h.length-1,d=u-h.length,_=s/10,x=_*l;let m=0;for(const C of h)for(const g of C)m+=Wo(g);const p=.5*c*s,v=(a-o-2*p)/x,M=d+f*wf,S=M>0?(v-m-f*Wo(" "))/M:0,R=Wo(" ")+wf*S;let A=(o+p)/x,E=1/0,P=-1/0;for(let C=0;C<h.length;C++){const g=h[C];for(let y=0;y<g.length;y++){const b=g[y],L=D2[b];if(L===void 0)throw new Error(`boxpaint: no glyph for '${b}'`);for(const N of L){for(const k of N){const I=(A+k[0])*x;I-p<E&&(E=I-p),I+p>P&&(P=I+p)}U2(n,t,e,N,x,_,A,r,p)}A+=Wo(b),y<g.length-1&&(A+=S)}C<h.length-1&&(A+=R)}return{text:i,cap:s,topY:r,x0:o,x1:a,track:S,wordGap:R,stem:2*p,left:E,right:P}}function U2(n,t,e,i,s,r,o,a,c){for(let l=0;l<i.length-1;l++){const h=(o+i[l][0])*s,u=a+i[l][1]*r,f=(o+i[l+1][0])*s,d=a+i[l+1][1]*r,_=f-h,x=d-u,m=_*_+x*x,p=c+1,v=Math.max(0,Math.floor(Math.min(h,f)-p)),M=Math.min(t-1,Math.ceil(Math.max(h,f)+p)),S=Math.max(0,Math.floor(Math.min(u,d)-p)),R=Math.min(e-1,Math.ceil(Math.max(u,d)+p));for(let A=S;A<=R;A++){const E=A+.5,P=A*t;for(let C=v;C<=M;C++){const g=C+.5;let y=m>0?((g-h)*_+(E-u)*x)/m:0;y=y<0?0:y>1?1:y;const b=g-(h+y*_),L=E-(u+y*x),N=c+.5-Math.sqrt(b*b+L*L);if(N<=0)continue;const k=N>1?1:N;k>n[P+C]&&(n[P+C]=k)}}}}const Hr=Object.freeze({W:192,H:256,PLATE_W:.288,PLATE_H:.384,FIELD:jt.FIELD,INK:jt.INK,BORDER_IN:4,BORDER_T:8,L1_TEXT:"POLICE TELEPHONE",L1_CAP:15,L1_TOP:22,L1_X0:18,L1_X1:174,L1_WEIGHT:.15,L2_TEXT:"FREE",L2_CAP:28,L2_TOP:44,L2_X0:52,L2_X1:140,L2_WEIGHT:.13,L3_TEXT:"FOR USE OF",L3_CAP:14,L3_TOP:78,L3_X0:36,L3_X1:156,L3_WEIGHT:.17,L4_TEXT:"PUBLIC",L4_CAP:28,L4_TOP:96,L4_X0:44,L4_X1:148,L4_WEIGHT:.13,L5_TEXT:"ADVICE & ASSISTANCE",L5_CAP:12,L5_TOP:140,L5_X0:16,L5_X1:176,L5_WEIGHT:.175,L6_TEXT:"OBTAINABLE IMMEDIATELY",L6_CAP:12,L6_TOP:156,L6_X0:12,L6_X1:180,L6_WEIGHT:.175,L7_TEXT:"OFFICERS & CARS",L7_CAP:12,L7_TOP:180,L7_X0:30,L7_X1:162,L7_WEIGHT:.175,L8_TEXT:"RESPOND TO ALL CALLS",L8_CAP:12,L8_TOP:196,L8_X0:18,L8_X1:174,L8_WEIGHT:.175,L9_TEXT:"PULL TO OPEN",L9_CAP:20,L9_TOP:218,L9_X0:22,L9_X1:170,L9_WEIGHT:.13}),F2=Hr.W/Hr.PLATE_W/(Hr.H/Hr.PLATE_H);let Xo=null;function k2(){if(Xo)return Xo;const n=Hr,t=n.W,e=n.H,i=new Float32Array(t*e),s=M=>e-1-M;{const M=n.BORDER_IN,S=n.BORDER_IN+n.BORDER_T;for(let R=M;R<e-M;R++){const A=R>=S&&R<e-S;for(let E=M;E<t-M;E++)A&&E>=S&&E<t-S||(i[R*t+E]=1)}}const r=[];for(let M=1;M<=9;M++)r.push(zr(i,t,e,n["L"+M+"_TEXT"],n["L"+M+"_CAP"],n["L"+M+"_TOP"],n["L"+M+"_X0"],n["L"+M+"_X1"],n["L"+M+"_WEIGHT"],F2));const[o,a,c]=r,l=new Uint8Array(t*e*4),[h,u,f]=n.FIELD,[d,_,x]=n.INK;let m=0,p=0;for(let M=0;M<e;M++){const S=M*t,R=s(M)*t,A=1-(M+.5)/e;for(let E=0;E<t;E++){const P=i[S+E],C=(R+E)*4;l[C]=h+(d-h)*P+.5,l[C+1]=u+(_-u)*P+.5,l[C+2]=f+(x-f)*P+.5,l[C+3]=255,m+=P,p+=P*A}}const v=new to(l,t,e,Qe);return v.colorSpace=Je,v.wrapS=v.wrapT=ms,v.magFilter=Ue,v.minFilter=Xn,v.generateMipmaps=!0,v.anisotropy=8,v.needsUpdate=!0,Xo={map:v,data:l,width:t,height:e,lines:r,inkCentroidV:m>0?p/m:.5,inkFraction:m/(t*e)},Xo}function B2(n,t={}){const e=k2(),i=new mn({color:n,roughness:t.roughness??.62,metalness:0,map:e.map,vertexColors:!0});return i.userData.cast=!1,i}const Oe=Object.freeze({FOOT:1.372,HALF:.686,WALL_T:.07,FRONT_T:.1,P_E:.071,DOOR_Z:.686,HINGE_Z:.646,FRONT_BACK:.586,APER_W:1.15,APER_HW:.575,APER_H:2.11,POST:.111,PROUD:.02,BODY_H:2.28,PLINTH_W:1.452,PLINTH_H:.12,PLINTH_PROUD:.04,SIGN_W:1.452,SIGN_Y0:2.28,SIGN_Y1:2.5,SIGN_BOARD_H:.13,SIGN_BOARD_T:.014,ROOF:Object.freeze([Object.freeze({w:1.412,y0:2.5,y1:2.57}),Object.freeze({w:1.312,y0:2.57,y1:2.63}),Object.freeze({w:1.212,y0:2.63,y1:2.68})]),HEAD_D:.615,REVEAL_D:.515,REVEAL_CLEAR:.02,FRAME_T:.02,FRAME_H:2.153,STILE_W:.075,MUNTIN_W:.07,STILE_AT:.5575,BAY_AT:.2775,PANEL_W:.52,PANEL_T:.01,PANEL_LO_H:.52,PANEL_LO_Y:.49,PANEL_HI_H:.58,PANEL_HI_Y:1.11,LEAF_W:.575,LEAF_H:2.11,LEAF_T:.04,OPEN_ANGLE:Math.PI/2,LEAF_PROUD_OUT:.025,LEAF_PROUD_IN:.015,INNER_SETBACK:.06,TOP:3.07,CHAMFER:.004}),Af=Object.freeze([Object.freeze({id:"postR",x:.6305,z:0,hw:.0555,hd:.686,rotY:0,y0:0,y1:2.28}),Object.freeze({id:"postL",x:-.6305,z:0,hw:.0555,hd:.686,rotY:0,y0:0,y1:2.28}),Object.freeze({id:"block",x:0,z:-.5025,hw:.686,hd:.1835,rotY:0,y0:0,y1:2.28})]),Vs=(n,t,e,i,s,r)=>({min:new z(n,t,e),max:new z(i,s,r)}),Ep=Object.freeze([Vs(-.686,0,-.686,.686,2.28,-.616),Vs(.616,0,-.686,.686,2.28,.686),Vs(-.686,0,-.686,-.616,2.28,.686),Vs(-.726,2.28,-.726,.726,2.5,.726),Vs(.575,0,.586,.686,2.28,.686),Vs(-.686,0,.586,-.575,2.28,.686)]);let Zc=null;function z2(){return Zc||(Zc=new ma(Ep,1)),Zc}const Ws=Object.freeze({BLUE:1519185,TRIM:991545,SIGN:13223090,LENS:15985366,GLASS:10196622,NOTICE:13223090}),Yo=Object.freeze({colour:16773332,intensity:.55,distance:2.6,decay:2});let Jc=null;function wp(n=null){if(Jc)return Jc;const t=b2(n),e={BLUE:Ef(Ws.BLUE,t),TRIM:Ef(Ws.TRIM,t),GLASS:L2(Ws.GLASS,t),SIGN:C2(Ws.SIGN),LENS:I2(Ws.LENS),NOTICE:B2(Ws.NOTICE)};for(const i of Ys){const s=e[i];if(s.metalness!==0)throw new Error(`boxPalette: ${i}.metalness is ${s.metalness}; there is no envMap in either scene, so metalness above 0 only scales diffuse down (THRESHOLD 10 I)`);if(s.metalnessMap)throw new Error(`boxPalette: ${i} carries a metalnessMap; see the metalness rule above`)}return Jc=e,e}let Qc=null,tl=null;function H2(){if(Qc)return Qc;const n=so(Oe.APER_W,Oe.SIGN_BOARD_H,Oe.SIGN_BOARD_T,Oe.CHAMFER).clone(),t=n.attributes.position,e=n.attributes.uv;n.computeBoundingBox();const i=n.boundingBox,s=i.max.x-i.min.x||1,r=i.max.y-i.min.y||1;for(let o=0;o<e.count;o++)e.setXY(o,(t.getX(o)-i.min.x)/s,(t.getY(o)-i.min.y)/r);return e.needsUpdate=!0,Qc=n,n}const An=Object.freeze({W:.288,H:.384,T:.004,CX:.305,CY:1.145,CZ:.696,SIDE:-1}),G2=2*(An.W*An.H+An.W*An.T+An.H*An.T);function V2(){if(tl)return tl;const n=U0(so(An.W,An.H,An.T,Oe.CHAMFER).clone()),t=n.attributes.position,e=n.attributes.uv;n.computeBoundingBox();const i=n.boundingBox,s=i.max.x-i.min.x||1,r=i.max.y-i.min.y||1;for(let o=0;o<e.count;o++)e.setXY(o,(t.getX(o)-i.min.x)/s,(t.getY(o)-i.min.y)/r);return e.needsUpdate=!0,tl=n,n}const qe=Object.freeze((()=>{const s=.17066666666666666;return{BAR:.024,H:.56,Y:1.76,ROWS:3,LIGHT_H:s,DY:(s+.024)/2}})()),Xe=Object.freeze({W:.395,H:qe.H,T:.004,X:.2875,Y:qe.Y,Z:.688}),W2=2*(Xe.W*Xe.H+Xe.W*Xe.T+Xe.H*Xe.T),Ys=["BLUE","TRIM","GLASS","SIGN","LENS","NOTICE"];function q2(n,t=wp()){var k;for(const I of Ys)if(!(t!=null&&t[I]))throw new Error(`policeBox: palette is missing '${I}' (needs ${Ys.join(", ")})`);const e=Oe,i=new Set,s={};let r=0;const o=I=>Ys.find(D=>t[D]===I)||"UNKNOWN",a=(I,D)=>{const U=o(I);s[U]=(s[U]||0)+D},c=(I,D,U,Y,K,tt,J,q,H=0,F=null)=>{var nt;let Z;return F?(Z=new Dt(F,I),Z.castShadow=((nt=I.userData)==null?void 0:nt.cast)??!1,Z.receiveShadow=!0):Z=se("appliance",U,Y,K,0,{material:I,chamfer:e.CHAMFER}),Z.position.set(tt,J,q),H&&(Z.rotation.y=H),Z.name=D,n.add(Z),i.add(Z.geometry.uuid),r++,a(I,2*(U*Y+U*K+Y*K)),Z},l=Math.PI/2,h=Object.freeze([{r:0,ax:0,az:-1},{r:l,ax:1,az:0},{r:l,ax:-1,az:0}]),u=(I,D,U)=>I.ax?[I.ax*U,D]:[D,I.az*U];for(const[I,D,U]of[[0,-.706,0],[.706,0,l],[-.706,0,l]])c(t.TRIM,"plinth",e.PLINTH_W,e.PLINTH_H,e.PLINTH_PROUD,I,e.PLINTH_H/2,D,U);for(const[I,D,U]of[[0,-.651,0],[.651,0,l],[-.651,0,l]])c(t.BLUE,"bodyWall",e.FOOT,e.BODY_H,e.WALL_T,I,e.BODY_H/2,D,U);for(const I of[-1,1])for(const D of[-1,1])c(t.TRIM,"cornerPost",e.POST,e.BODY_H,e.POST,I*.6505,e.BODY_H/2,D*.6505);for(const I of[-1,1])c(t.BLUE,"doorJamb",e.POST,e.BODY_H,e.FRONT_T,I*.6305,e.BODY_H/2,e.DOOR_Z-e.FRONT_T/2);c(t.BLUE,"headLining",e.APER_W,e.BODY_H-e.APER_H,e.HEAD_D,0,(e.APER_H+e.BODY_H)/2,e.P_E+e.HEAD_D/2);const f=e.HALF-e.WALL_T-e.APER_HW-e.REVEAL_CLEAR;for(const I of[-1,1])c(t.BLUE,"revealSide",f,e.APER_H,e.REVEAL_D,I*(e.APER_HW+e.REVEAL_CLEAR+f/2),e.APER_H/2,e.P_E+e.REVEAL_D/2);c(t.TRIM,"sillPlate",2*(e.HALF-e.WALL_T),.004,e.REVEAL_D,0,.002,e.P_E+e.REVEAL_D/2);const d=[{y:.185,h:.07},{y:.785,h:.05},{y:1.445,h:.07},{y:2.075,h:.07}],_=e.HALF+e.FRAME_T/2;for(const I of h){for(const K of d){const[tt,J]=u(I,0,_);c(t.TRIM,"rail",e.FOOT,K.h,e.FRAME_T,tt,K.y,J,I.r)}for(const K of[-1,1]){const[tt,J]=u(I,K*e.STILE_AT,_);c(t.TRIM,"faceStile",e.STILE_W,e.FRAME_H,e.FRAME_T,tt,e.BODY_H-e.FRAME_H/2,J,I.r)}const[D,U]=u(I,0,_);c(t.TRIM,"faceMuntin",e.MUNTIN_W,e.FRAME_H,e.FRAME_T,D,e.BODY_H-e.FRAME_H/2,U,I.r);const Y=e.HALF+e.PANEL_T/2;for(const K of[-1,1])for(const tt of[{h:e.PANEL_LO_H,y:e.PANEL_LO_Y},{h:e.PANEL_HI_H,y:e.PANEL_HI_Y}]){const[J,q]=u(I,K*e.BAY_AT,Y);c(t.BLUE,"panelField",e.PANEL_W,tt.h,e.PANEL_T,J,tt.y,q,I.r)}}const x=e.HALF+e.PROUD-e.APER_HW;for(const I of[-1,1])c(t.TRIM,"archSide",x,e.FRAME_H,e.FRAME_T,I*(e.APER_HW+x/2),e.BODY_H-e.FRAME_H/2,e.DOOR_Z+e.FRAME_T/2);c(t.TRIM,"archHead",2*(e.HALF+e.PROUD),.17,e.FRAME_T,0,e.BODY_H-.085,e.DOOR_Z+e.FRAME_T/2);const m=.79,p=qe.H,v=qe.BAR,M=e.HALF+.006;for(const I of h){const[D,U]=u(I,0,M);c(t.GLASS,"window",m,p,.012,D,qe.Y,U,I.r);const[Y,K]=u(I,0,_);for(const tt of[-1,1]){const[J,q]=u(I,tt*.1975,_);c(t.TRIM,"glazingBar",v,p,v,J,qe.Y,q,I.r)}for(const tt of[-1,1])c(t.TRIM,"glazingBar",m,v,v,Y,qe.Y+tt*qe.DY,K,I.r)}c(t.TRIM,"entablature",e.SIGN_W,e.SIGN_Y1-e.SIGN_Y0,e.SIGN_W,0,(e.SIGN_Y0+e.SIGN_Y1)/2,0);const S=(e.SIGN_Y0+e.SIGN_Y1)/2,R=H2();for(const[I,D,U]of[[0,1,0],[0,-1,Math.PI],[1,0,l],[-1,0,-l]])c(t.TRIM,"signCase",1.21,.15,.01,I*.728,S,D*.728,U),c(t.SIGN,"signBoard",e.APER_W,e.SIGN_BOARD_H,e.SIGN_BOARD_T,I*.733,S,D*.733,U,R);for(const I of e.ROOF)c(t.TRIM,"roofTier",I.w,I.y1-I.y0,I.w,0,(I.y0+I.y1)/2,0);const A=[["lampPlinth",.2,2.68,2.72],["lampStalk",.09,2.72,2.87],["lampGallery",.15,2.87,2.9],["lampCowl",.15,3.01,3.034],["lampFinial",.045,3.034,3.07]];for(const[I,D,U,Y]of A)c(t.TRIM,I,D,Y-U,D,0,(U+Y)/2,0);const E=.072,P=2.9,C=3.01;for(const[I,D]of[[1,0],[-1,0],[0,1],[0,-1]])c(t.TRIM,"lampRib",.016,C-P,.016,I*.068,(P+C)/2,D*.068);{const I=C-P,D=new ee(E,E,I,12),U=new Dt(D,t.LENS);U.position.set(0,(P+C)/2,0),U.name="lampLens",U.castShadow=!1,U.receiveShadow=!0,n.add(U),i.add(D.uuid),r++,a(t.LENS,2*Math.PI*E*I+2*Math.PI*E*E)}const g=new ve;g.name="boxLeaves";const y=[],b=z2();for(const I of[1,-1]){const D=new ve;D.name=I>0?"boxDoor.R":"boxDoor.L",D.position.set(I*e.APER_HW,0,e.HINGE_Z),D.userData.side=I,D.userData.hinge=new z(I*e.APER_HW,0,e.HINGE_Z),D.userData.openSign=I;const U=X2(I,t,b);i.add(U.uuid);const Y=new Dt(U,t.BLUE);Y.name=I>0?"boxLeaf.R":"boxLeaf.L",Y.castShadow=!0,Y.receiveShadow=!0,D.add(Y),r++,a(t.BLUE,2*(e.LEAF_W*e.LEAF_H+e.LEAF_W*e.LEAF_T+e.LEAF_H*e.LEAF_T));const K=Y2(t,I);i.add(K.uuid);const tt=new Dt(K,t.GLASS);if(tt.position.set(-I*Xe.X,Xe.Y,Xe.Z-e.HINGE_Z),tt.name=I>0?"boxPane.R":"boxPane.L",tt.castShadow=!1,tt.receiveShadow=!0,D.add(tt),r++,a(t.GLASS,W2),I===An.SIDE){const J=new Dt(V2(),t.NOTICE);J.position.set(-I*(e.APER_HW-An.CX),An.CY,An.CZ-e.HINGE_Z),J.name="boxNotice",J.castShadow=((k=t.NOTICE.userData)==null?void 0:k.cast)??!1,J.receiveShadow=!0,D.add(J),i.add(J.geometry.uuid),r++,a(t.NOTICE,G2)}g.add(D),y.push(D)}for(const I of Af)n.solid(I.x,I.y0,I.z,I.hw*2,I.y1-I.y0,I.hd*2,!1);const L=new Pa(Yo.colour,Yo.intensity,Yo.distance,Yo.decay);L.position.set(0,(P+C)/2,0),L.name="boxLamp",L.userData.boxLocal=L.position.clone();for(const I of Ys)s[I]&&Da(t[I].color.getHex(),s[I]);const N=I=>{const D=Math.max(0,Math.min(1,I))*e.OPEN_ANGLE;for(const U of y)U.rotation.y=-U.userData.side*D};return N(0),g.userData.setOpen=N,{group:n.group,leaves:g,lamp:L,areas:s,collision:Af,aoVolumes:Ep,setOpen:N,pivots:y,materials:t,counts:{meshes:r,geometries:i.size,materials:Ys.length}}}function X2(n,t,e){var m;const i=Oe,s=i.DOOR_Z-i.LEAF_T/2,r=i.DOOR_Z+.006,o=i.DOOR_Z+.005,a=i.DOOR_Z+.0055,c=i.HINGE_Z-.005,l=i.HINGE_Z-.007,h=i.LEAF_H/2,u=[["blank",i.LEAF_W,i.LEAF_H,i.LEAF_T,.2875,h,s],["stile",.06,i.LEAF_H,.012,.545,h,r],["stile",.06,i.LEAF_H,.012,.03,h,r],["rail",.455,.1,.012,.2875,.05,r],["rail",.455,.07,.012,.2875,.845,r],["rail",.455,.07,.012,.2875,1.445,r],["rail",.455,.07,.012,.2875,2.075,r],["panel",.395,.69,.01,.2875,.455,o],["panel",.395,.51,.01,.2875,1.145,o],["escutcheon",.03,.15,.011,.1,1.01,a],["glazingBar",qe.BAR,qe.H,.012,.2875,qe.Y,r],["glazingBar",Xe.W,qe.BAR,.012,.2875,qe.Y-qe.DY,r],["glazingBar",Xe.W,qe.BAR,.012,.2875,qe.Y+qe.DY,r],["backStile",.06,i.LEAF_H,.01,.48,h,c],["backStile",.06,i.LEAF_H,.01,.03,h,c],["backLedge",.39,.07,.01,.255,.845,c],["backLedge",.39,.07,.01,.255,2.075,c],["pull",.03,.22,.014,.1,1.01,l]];for(const[p,v,,M,S,,R]of u){const A=R+M/2,E=R-M/2;if(A>i.DOOR_Z+i.LEAF_PROUD_OUT)throw new Error(`policeBox: leaf '${p}' stands ${((A-i.DOOR_Z)*1e3).toFixed(0)} mm proud of the outer face, over the ${i.LEAF_PROUD_OUT*1e3} mm budget`);if(E<i.HINGE_Z-i.LEAF_PROUD_IN)throw new Error(`policeBox: leaf '${p}' stands ${((i.HINGE_Z-E)*1e3).toFixed(0)} mm proud of the inner face, over the ${i.LEAF_PROUD_IN*1e3} mm budget`);if(E<i.HINGE_Z&&S+v/2>i.APER_HW-i.INNER_SETBACK)throw new Error(`policeBox: leaf '${p}' reaches x ${(S+v/2).toFixed(3)} behind the inner face; anything there must stay inboard of ${(i.APER_HW-i.INNER_SETBACK).toFixed(3)} or it sweeps into the jamb`)}const f=p=>n*p,d=u.map(([,p,v,M,S,R,A])=>{const E=so(p,v,M,i.CHAMFER).clone();return E.translate(f(S),R,A),U0(E)}),_=d.length===1?d[0]:Od(d,!1);if(!_)throw new Error("policeBox: leaf merge returned null (mismatched attributes)");const x=(m=t.BLUE.userData)==null?void 0:m.uvScale;return x&&Oa(_,x[0],x[1]),e&&Ud(_,e),_.translate(-f(i.APER_HW),0,-i.HINGE_Z),_}function Y2(n,t){var s;const e=U0(new $e(Xe.W,Xe.H,Xe.T).toNonIndexed()),i=(s=n.GLASS.userData)==null?void 0:s.uvScale;if(i){const r=e.clone();r.translate(t*Xe.X,Xe.Y,Xe.Z),Oa(r,i[0],i[1]),e.setAttribute("uv",r.attributes.uv)}return e}const $2=.02,j2=new z;function bf(n,t){if(!n)throw new Error(`worlds(): no ${t} world`);if(!n.id)throw new Error(`worlds(): the ${t} world has no id — link.js keys every accessor on it`);if(!n.scene||!n.scene.isScene)throw new Error(`worlds(): the ${t} world '${n.id}' has no THREE.Scene`);return{id:n.id,scene:n.scene,build:n.build??null,surface:n.surface??null,beds:n.beds??null,dist:n.dist??null,cap:n.cap??null,update:typeof n.update=="function"?n.update:()=>{},get collision(){var i,s;return n.collision??((s=(i=n.build)==null?void 0:i.userData)==null?void 0:s.collision)??null}}}function K2({interior:n,exterior:t,link:e,startWorld:i=null}={}){const s=bf(n,"interior"),r=bf(t,"exterior");if(!e)throw new Error("worlds(): no link — makeLink(landing, SITES) builds one");let o=e;const a=[s,r];let c=0;if(i&&i!==s.id){if(i!==r.id&&i!=="exterior")throw new Error(`worlds(): startWorld '${i}' is neither '${s.id}' nor '${r.id}'`);c=1}let l=!1;const h=new Qr,u=new Vt;function f(_){return u.multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse),h.setFromProjectionMatrix(u)}const d={get near(){return a[c]},get far(){return a[1-c]},get link(){return o},get interior(){return s},get exterior(){return r},swap(){return c=1-c,d.near},setLink(_){if(!_)throw new Error("worlds.setLink: no link");if(_.siteId&&r.id!=="exterior"&&_.siteId!==r.id)throw new Error(`worlds.setLink: the new link is at site '${_.siteId}' but the exterior world is '${r.id}'. A different site needs a different scene — reload.`);return o=_,o},liveLink(_,x,m=null){if(!x||!(x.t>$2))return null;const p=a[c].cap;return p?!_||p.normalWorld.dot(j2.copy(_.position).sub(p.centreWorld))<=0||!(m||f(_)).intersectsBox(p.aabbInflated)?null:o:(l||(l=!0,console.warn(`[worlds] the '${a[c].id}' world has no portal cap, so the doors open onto its own background. portal.makeCap() mints one (THRESHOLD.md §4.4).`)),null)},frustumOf:f};return d}const qs="interior",Tf=gn.w/2,Z2=.02,J2=3*(Se.RUN/60+.014),Q2=Se.RADIUS,tE=1e-6,eE=.001,nE=6,el=ln-(et.FLAT_FACE-Se.RADIUS),iE=1.2,sE=.6,rE=.002,Rf=new z(0,1,0),nl=new z,$o=new z,Lf=new z,Xs=new z;function oE({worlds:n,walker:t,audio:e,portal:i,camera:s,doors:r=null}){let o=0,a=0,c=-1,l=!1,h=!1,u=!1,f=!1,d=!1,_=!1;function x(){return!n||!n.near||!n.far||!n.link?(d||(d=!0,console.warn("[threshold] no live link — the crossing is disabled. makeLink() builds one (THRESHOLD.md §1.3); a build with no exterior is expected to land here.")),!1):!0}function m(){return s&&t.driveCamera!==!1?nl.copy(s.position):nl.set(t.position.x,t.position.y+Se.EYE,t.position.z)}function p(g,y){const b=n.link,L=g.id===qs,N=L?b.pI:b.pE,k=L?b.nI:b.nE;$o.copy(y).sub(N);const I=$o.dot(k);Lf.copy(Rf).cross(k);const D=$o.dot(Lf),U=$o.dot(Rf),Y=Math.abs(D)-Tf,K=U>gn.h?U-gn.h:U<0?-U:0;return{d:I,lat:D,h:U,s:L?1:-1,inRect:Y<=0&&K===0,r:Math.hypot(I,Y>0?Y:0,K)}}function v(g){return g.inRect}function M(g){return r?r.t>Z2:(f||(f=!0,console.warn("[threshold] no `doors` passed to threshold(): crossing without checking that they are open. The exterior collision set has no shut-door blocker (THRESHOLD.md §1.1, §7.1), so the box is enterable through shut leaves.")),!0)}function S(g,y){const b=g&&g.collision;if(!b)return!0;Xs.copy(t.position).applyMatrix4(y);let L=Xs.x,N=Xs.z;for(let k=0;k<nE;k++){const I=$0(b,L,N,{y:Xs.y});if(L=I.x,N=I.z,!I.contacts)break}return Math.hypot(L-Xs.x,N-Xs.z)<=eE}function R(g){const y=n.link,b=n.near,L=n.far,k=b.id===qs?y.M_IE:y.M_EI;if(typeof t.crossTo!="function"||typeof t.setWorld!="function")return _||(_=!0,console.warn("[threshold] walker.crossTo / walker.setWorld are missing — refusing to cross. §2 adds both to Walker.js; without them a swap would leave the player in one world holding the other one's colliders.")),!1;if(!S(L,k))return l=!0,u||(u=!0,console.warn(`[threshold] holding the crossing into '${L.id}': M puts the player inside something there. Expected while a door leaf is still swinging — MEASURED, the way in clears at t = 0.68 on the door axis and t = 0.83 at the edge of the band (see CROSS_CLEAR). The crossing retries every sub-step and fires the moment that line is clear.`)),!1;l=!1;const I=k.elements,D=Math.atan2(I[8],I[10]);return t.crossTo(k,D),n.swap(),t.setWorld(n.near),e&&typeof e.setWorld=="function"&&e.setWorld(n.near,y),t.driveCamera!==!1&&typeof t._commitCamera=="function"&&t._commitCamera(0),o=g.d,a++,!0}function A(g,y){const b=g.s*g.d;if(!(g.inRect&&b>tE&&b<=Q2)||!M())return l=!1,!1;const L=l,N=n.near.id;return R(g)?(!y&&!L&&!h&&(h=!0,console.warn(`[threshold] the player was ${b.toFixed(3)} m past the '${N}' aperture plane and still in it — the crossing edge missed, or the doors opened around someone already standing in the doorway. Reconciled. §5.4: the backstops park a misfire at 0.050 m, so this is recoverable, but a sub-step running without step() would look exactly like this.`)),!0):!1}function E(g,y){let L=((g.id===qs?-1:1)*y.r+sE)/iE;L=L<0?0:L>1?1:L;const N=L===0||L===1;c>=0&&L!==c&&Math.abs(L-c)<rE&&!N||L!==c&&(c=L,e&&typeof e.setBedMix=="function"&&e.setBedMix(L))}function P(g){const y=p(g,m());return o=y.d,y}const C={step(){if(!x())return;let g=n.near;const y=p(g,m());if(Math.abs(y.d-o)>J2){o=y.d,A(y,!0)&&(g=n.near),E(g,y);return}const b=y.s;b*o<0&&b*y.d>=0&&v(y)&&M()?R(y)?g=n.near:o=y.d:(o=y.d,A(y,!1)&&(g=n.near)),E(g,y)},seed(g={}){if(!x())return;let y=n.near;const b=P(y);g.reconcile!==!1&&A(b,!0)&&(y=n.near),E(y,b)},force(g){if(!x())return!1;const y=b=>b.id===g||g==="interior"&&b.id===qs||g==="exterior"&&b.id!==qs;return y(n.near)?(C.seed({reconcile:!1}),!1):y(n.far)?(n.swap(),typeof t.setWorld=="function"&&t.setWorld(n.near),e&&typeof e.setWorld=="function"&&e.setWorld(n.near,n.link),C.seed({reconcile:!1}),!0):(console.warn(`[threshold] force('${g}'): no such world. near is '${n.near.id}', far is '${n.far&&n.far.id}'.`),!1)},get inAperture(){if(!x())return!1;const g=n.near,y=p(g,nl.copy(t.position)),b=y.s*y.d;return g.id===qs?b>-el:Math.abs(y.lat)<=Tf+Se.RADIUS&&b>-el&&b<el&&y.h>=0&&y.h<=gn.h},get crossings(){return a},get held(){return l},get bedMix(){return c}};return C}const Ap=Object.freeze({w:1.15,h:2.11}),aE=.014,Cf=.035,If=16,il=1920*1080,cE=.75,sl=4,lE=2,Pf=1.5,Df=45,hE=.2,uE=.95,fE=.002,Nf="interior",dE=Math.PI/180,rl=new Ot,pE=new Ot,mE=new z,Of=new Vt;function Uf(n,t={}){const e=t.fov??58,i=t.apertureH??Ap.h,s=Number.isFinite(n)&&n>0?n:16/9,r=Math.tan(e*dE/2),o=r*s,a=Math.sqrt(1+o*o+r*r),c=Se.RADIUS-aE,l=i-Se.EYE-Cf,h=Se.EYE-Cf,u=Math.min(c/o,l/r,h/r)/a,f=Math.min(hE,uE*u),d=f*a;return{aspect:s,fov:e,tx:o,ty:r,K:a,limit:u,near:f,skin:d,gapLat:c,gapUp:l,gapDown:h,marginLat:c-d*o,marginUp:l-d*r,marginDown:h-d*r}}function _E(n,t){n.updateMatrixWorld(!0);const e=t.clone().applyMatrix4(n.matrixWorldInverse);if(e.constant>0)return!1;const i=new ce(e.normal.x,e.normal.y,e.normal.z,e.constant),s=n.projectionMatrix.elements,r=new ce((Math.sign(i.x)+s[8])/s[0],(Math.sign(i.y)+s[9])/s[5],-1,(1+s[10])/s[14]),o=i.multiplyScalar(2/i.dot(r));return s[2]=o.x,s[6]=o.y,s[10]=o.z+1,s[14]=o.w,n.projectionMatrixInverse.copy(n.projectionMatrix).invert(),!0}const gE=`
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
  float pull = uNear * ${(1+fE).toFixed(6)};
  float vz = -mv.z;
  if (vz > 0.0 && vz < pull) mv.xyz *= pull / vz;

  gl_Position = projectionMatrix * mv;
}`,xE=`
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
}`;function vE({renderer:n,camera:t,aperture:e=Ap,pixelRatioCap:i=!0,driveCameraNear:s=!0}={}){if(!n)throw new Error("portal(): no renderer");if(!t)throw new Error("portal(): no camera");n.info&&(n.info.autoReset=!1);const r=new Ji(1,1,{type:dr,format:Qe,depthBuffer:!0,stencilBuffer:!1,samples:sl});r.texture.name="portalTarget",r.texture.colorSpace=Li,r.texture.minFilter=Ue,r.texture.magFilter=Ue,r.texture.generateMipmaps=!1;const o=new cn;o.name="portalCamera",o.matrixAutoUpdate=!1,o.matrixWorldAutoUpdate=!1;const a=[];let c=Uf(t.aspect,{fov:t.fov,apertureH:e.h}),l=1,h=sl,u=null,f=Df,d=!1;const _={passes:0,skipped:0,rebuilds:0,ratioChanges:0};let x=!1;function m(){n.getDrawingBufferSize(rl);const b=Math.max(1,Math.floor(rl.x)),L=Math.max(1,Math.floor(rl.y)),N=b*L,k=N>il?cE:1,I=N>il?lE:sl;I!==h&&(h=I,r.samples=I,r.dispose(),_.rebuilds++),l=k,r.setSize(Math.max(1,Math.round(b*l)),Math.max(1,Math.round(L*l))),c=Uf(t.aspect,{fov:t.fov,apertureH:e.h});for(const D of a){const U=D.material.uniforms;U.uRes.value.set(b,L),U.uNear.value=c.near}s&&Math.abs(t.near-c.near)>1e-12&&(t.near=c.near,t.updateProjectionMatrix())}function p(){return Math.min((typeof devicePixelRatio=="number"?devicePixelRatio:1)||1,2)}function v(){if(!i)return;const b=p(),L=n.getSize(pE),N=L.x*b*L.y*b,k=d&&b>Pf&&N>il?Pf:b,I=n.getPixelRatio();if(!(u!==null&&Math.abs(I-u)<1e-9||Math.abs(I-b)<1e-9)){u=null;return}if(Math.abs(I-k)<1e-9){u=k;return}n.setPixelRatio(k),u=k,_.ratioChanges++,m()}function M(b){if(b){d=!0,f=0,v();return}++f>=Df&&d&&(d=!1,v())}function S(b,L,N={}){const k=new Ci(b,L,If,If);k.computeBoundingBox();const I=new Ti({name:"portalCap",side:Yn,fog:!1,toneMapped:!0,uniforms:{tPortal:{value:r.texture},uRes:{value:new Ot(1,1)},uNear:{value:c.near}},vertexShader:gE,fragmentShader:xE}),D=new Dt(k,I);D.name=N.name||"portalCap",D.isPortalCap=!0,D.frustumCulled=!1,N.faceMinusZ&&(D.rotation.y=Math.PI);const U=new z,Y=new z,K=new Kn;return Object.defineProperties(D,{normalWorld:{get(){return this.updateWorldMatrix(!0,!1),U.set(0,0,1).transformDirection(this.matrixWorld)}},centreWorld:{get(){return this.updateWorldMatrix(!0,!1),Y.setFromMatrixPosition(this.matrixWorld)}},aabbInflated:{get(){return this.updateWorldMatrix(!0,!1),K.copy(this.geometry.boundingBox).applyMatrix4(this.matrixWorld).expandByScalar(c.skin)}}}),a.push(D),m(),D}function R(b,L,N=t){return!(!b||!b.isPortalCap||b.normalWorld.dot(mE.copy(N.position).sub(b.centreWorld))<=0||L&&!L.intersectsBox(b.aabbInflated))}const A=new Qr;function E(b=t){return b.updateMatrixWorld(),Of.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),A.setFromProjectionMatrix(Of)}function P(b,L){if(typeof b.M=="function")return b.M(L.id);const N=L.id===Nf?b.M_IE:b.M_EI;if(!N)throw new Error(`portal.pass(): link exposes no transform for "${L.id}"`);return N}function C(b,L){if(typeof b.keepFor=="function")return b.keepFor(L.id);const N=L.id===Nf?b.keepI:b.keepE;if(!N)throw new Error(`portal.pass(): link exposes no clip plane for "${L.id}"`);return N}function g(b,L,N){if(!b||!L||!N||!N.scene){_.skipped++;return}M(!0);const k=b.portalCam||o;k.projectionMatrix.copy(t.projectionMatrix),k.projectionMatrixInverse.copy(t.projectionMatrixInverse),k.fov=t.fov,k.aspect=t.aspect,k.near=t.near,k.far=t.far,k.layers.mask=t.layers.mask,k.matrixAutoUpdate=!1,k.matrixWorldAutoUpdate=!1,k.matrixWorld.multiplyMatrices(P(b,L),t.matrixWorld),k.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),!x&&(Math.abs(k.scale.x-1)>1e-6||Math.abs(k.scale.y-1)>1e-6||Math.abs(k.scale.z-1)>1e-6)&&(x=!0,console.warn("[portal] the link is not rigid: portal camera scale",k.scale.x,k.scale.y,k.scale.z,"- the far world will be the wrong size.")),_E(k,C(b,N));const I=N.cap,D=I?I.visible:!1;I&&(I.visible=!1);const U=n.getRenderTarget();n.setRenderTarget(r),n.clear(),n.render(N.scene,k),n.setRenderTarget(U),I&&(I.visible=D),_.passes++}function y(){r.dispose();for(const b of a)b.geometry.dispose(),b.material.dispose();a.length=0,u!==null&&Math.abs(n.getPixelRatio()-u)<1e-9&&Math.abs(u-p())>1e-9&&n.setPixelRatio(p()),u=null}return m(),{rt:r,portalCam:o,makeCap:S,resize:m,pass:g,setLive:M,capOnScreen:R,frustum:E,dispose:y,stats:_,get near(){return c.near},get skin(){return c.skin},get plan(){return c},get scale(){return l},get samples(){return h},get live(){return d},get caps(){return a.slice()}}}const bp=document.getElementById("scene"),fr=new URLSearchParams(location.search),ME=fr.get("seed")||"tardis",jn=JS(fr),On=K0[jn.site],pe=new zv({canvas:bp,antialias:!0,powerPreference:"high-performance"});pe.setPixelRatio(Math.min(devicePixelRatio||1,2));pe.setSize(innerWidth||1280,innerHeight||720,!1);pe.outputColorSpace=Je;pe.toneMapping=qf;const yE=Nn.toneMappingExposure;pe.toneMappingExposure=yE;pe.shadowMap.type=Vf;pe.shadowMap.enabled=!!Nn.shadows;tM(pe);const Zn=new yd;Zn.background=new Nt(Nn.background);Nn.fog&&(Zn.fog=Nn.fog);const SE=new Sd(Nn.hemisphere.sky,Nn.hemisphere.ground,Nn.hemisphere.intensity);Zn.add(SE);const EE=new wd(Nn.ambient.colour,Nn.ambient.intensity);Zn.add(EE);const ol=Nn.camera,De=new cn(ol.fov,(innerWidth||1280)/(innerHeight||720),ol.near,Math.max(ol.far,On.camera.far)),Fa=new no(ME);kd();const Ms=Bd(Fa.child("tex.roundel")),xn=new O0,at={};at.shell=GM(xn,Ms,{liveDoors:!0});at.console=ey(xn,Ms);at.rotor=dy(xn,Ms,{collar:!1});at.fittings=ky(xn,Ms);at.lighting=iS(xn,Ms);at.doors=XS(xn,Ms,{shellDoors:at.shell,console:at.console});at.fittings.setScanner(at.fittings.shuttersOpen);const Tp=Na(xn.group);Zn.add(Tp);Zn.add(at.rotor.group);Zn.add(at.fittings.group);Zn.add(at.doors.group);const ys=new yd;ys.name="site";Sp();const Ss=new O0,wE=Object.values(Ri).filter(n=>n.site===On.id).map(n=>({x:n.x,z:n.z,r:Ai.plinth/2*Math.SQRT2+.06})),Pn=p2(Ss,On,{camera:De,rng:Fa.child("site"),keepOut:wE});ys.fog=Pn.fog;const J0=new O0,Tn=q2(J0,wp(Fa.child("tex.box")));Pn.contact(jn.x,jn.z,1.9,1.9);const AE=Na(Ss.group);ys.add(AE);ys.add(Pn.live);const wi=Na(J0.group,{colliders:Tn.aoVolumes});wi.position.set(jn.x,0,jn.z);wi.rotation.y=jn.yaw;Tn.leaves.position.copy(wi.position);Tn.leaves.rotation.y=jn.yaw;Tn.lamp.position.set(jn.x,Tn.lamp.position.y,jn.z);ys.add(wi,Tn.leaves,Tn.lamp);at.doors.setBoxDoors(Tn.pivots);at.lighting.setDoorSpillColour(On.sun.colour);const gr=vp(jn,K0);{const n=Ss.userData.collision;n.boxes=[...n.boxes||[],...gr.boxCollision()]}Dp(gr);const ci=vE({renderer:pe,camera:De,aperture:gn}),Q0=ci.makeCap(gn.w,gn.h,{name:"capInterior",faceMinusZ:!0});Q0.position.set(0,gn.h/2,ln);Zn.add(Q0);const th=ci.makeCap(gn.w,gn.h,{name:"capExterior"});th.position.set(0,gn.h/2,oo);wi.add(th);const te=K2({interior:{id:Me,scene:Zn,build:xn,surface:"vinyl",dist:up,beds:fp,cap:Q0},exterior:{id:On.id,scene:ys,build:Ss,surface:Pn.surface,dist:Pn.distance,beds:Pn.bedIds,cap:th,update:Pn.update},link:gr,startWorld:fr.get("world")==="exterior"?On.id:fr.get("world")||null}),kt=new dS(De,xn,{spawn:et.SPAWN,yaw:et.SPAWN_YAW});kt.setWorld(te.near);if(te.near.id!==Me){const n=gr.toExterior(new z(0,0,ln-2.2));kt.teleport(n.x,0,n.z,jn.yaw+Math.PI)}const Dn=new CS({sounds:ra,buses:IS,distance:up,defaults:PS,roomBeds:fp,propRate:DS,ctlRate:NS,siteBeds:Pn.beds,surfaceSteps:OS,rng:Fa,say:n=>on(n)});Dn.bindRoom({build:xn,rotor:at.rotor,fittings:at.fittings,walker:kt,room:et});at.doors.setAudio(Dn);Dn.setWorld(te.near,gr);const ye=oE({worlds:te,walker:kt,audio:Dn,portal:ci,camera:De,doors:at.doors}),al={1:()=>{on(bE())},2:()=>{on(Rp())},3:()=>{on(Lp())},4:()=>{on("Navigation: the coordinates read as gibberish.")},5:()=>{on(Cp())},6:()=>{on(Ip())}};function Rp(){const n=!at.fittings.shuttersOpen;return at.fittings.setShutters(n),at.fittings.setScanner(n),n?"The scanner shutters grind open. The screen lights, and shows nothing.":"The scanner shutters close over the screen."}function Lp(){return at.fittings.dispense(),"The food machine delivers a bar. It is, allegedly, bacon and eggs."}function Cp(){return!at.rotor.running&&!at.doors.flightReady?at.doors.state!=="shut"?"Flight: the doors are open.":"Flight: the doors must be locked before the ship will move.":(at.rotor.setRunning(!at.rotor.running),at.rotor.running?"The time rotor begins to rise and fall.":"The rotor settles, and the room goes quiet.")}function Ip(){return at.fittings.pulseFault(),at.lighting.pulseAlert(4),"The fault locator runs a query. Forty-eight lamps have opinions."}function Ff(n=!1){return at.doors.request(!at.doors.open,{fittings:at.fittings,rotor:at.rotor,walker:kt,atShell:n})}function bE(){return at.doors.setLocked(!at.doors.locked,{rotor:at.rotor})}const kf={hatStand:"A hat stand. There is a hat on it.",chair:"A high-backed hall chair, out of a house that is nowhere near here.",clock:"An ormolu clock. It keeps perfect time, which proves nothing."};kt.onInteract(n=>{var t;switch(n.action){case"panel":{const e=n.data.panel;at.console.setLamp(e,!0),on(n.label),(t=al[e])==null||t.call(al);break}case"doors":on(Ff());break;case"shellDoors":on(Ff(!0));break;case"scanner":on(Rp());break;case"faultLocator":on(Ip());break;case"foodMachine":on(Lp());break;case"rotor":on(Cp());break;default:kf[n.action]&&on(kf[n.action])}});const xr=document.createElement("div");xr.style.cssText="position:fixed;inset:0;pointer-events:none;font:14px/1.4 system-ui,-apple-system,Segoe UI,sans-serif;color:#e8e6df;text-shadow:0 1px 3px rgba(0,0,0,.9)";xr.innerHTML=`
<div id="x" style="position:absolute;left:50%;top:50%;width:5px;height:5px;margin:-2.5px 0 0 -2.5px;
     border-radius:50%;background:rgba(232,230,223,.55);box-shadow:0 0 2px #000"></div>
<div id="prompt" style="position:absolute;left:50%;top:calc(50% + 26px);transform:translateX(-50%);
     white-space:nowrap;opacity:0"></div>
<div id="say" style="position:absolute;left:50%;bottom:11%;transform:translateX(-50%);
     white-space:nowrap;opacity:0;transition:opacity .25s"></div>
<div id="lock" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
     background:rgba(6,8,10,.55);letter-spacing:.06em;text-align:center">
  <div>CLICK TO LOOK AROUND &nbsp;·&nbsp; WASD, E, ESC</div></div>`;document.body.appendChild(xr);const Bf=xr.querySelector("#prompt"),m0=xr.querySelector("#say"),eh=xr.querySelector("#lock");let ca=0;function on(n){m0.textContent=n,m0.style.opacity="1",ca=4}kt.onPause(n=>{eh.style.display=n?"flex":"none"});eh.style.display=kt.paused?"flex":"none";document.addEventListener("pointerlockerror",()=>{kt.paused&&(eh.innerHTML='<div>POINTER LOCK REFUSED BY THIS FRAME<div style="opacity:.7;font-size:12px;letter-spacing:0;margin-top:8px">Open http://localhost:5290 in a real browser tab, or drive it from the console:<br>game.update(dt) &nbsp;·&nbsp; shot(name, pose)</div></div>')},{once:!0});let zf=null;function TE(n){const t=kt.prompt,e=t?t.id:null;e!==zf&&(zf=e,Bf.textContent=t?`[E]  ${t.label}`:"",Bf.style.opacity=t?"1":"0"),ca>0&&(ca-=n,ca<=0&&(m0.style.opacity="0"))}const cl=1/60,RE=.25;let ll=0;function Ye(n){const t=Math.min(Math.max(n||0,0),RE);ll+=t;let e=0;for(;ll+1e-9>=cl&&e<8;)kt.update(cl),ye.step(),ll-=cl,e++;at.doors.update(t),at.rotor.update(t),at.fittings.update(t),at.console.update(t),at.lighting.setRotorDrive(at.rotor.drive),at.lighting.setDoorSpill(at.doors.t),at.lighting.update(t),CE(),Pn.update(t),Pn.setDoorSpill(at.doors.t),Dn.setDoorFraction(at.doors.t),Dn.update(t),TE(t)}function Jn(){pe.info.reset(),De.updateMatrixWorld(!0);const n=te.liveLink(De,at.doors);n&&ci.pass(n,te.near,te.far),te.near.cap.visible=!!n,ci.setLive(!!n),pe.render(te.near.scene,De)}let Hf=performance.now();function Pp(n){requestAnimationFrame(Pp);const t=(n-Hf)/1e3;Hf=n,Ye(t),Jn()}requestAnimationFrame(Pp);addEventListener("resize",()=>{const n=innerWidth,t=innerHeight;!n||!t||(pe.setPixelRatio(Math.min(devicePixelRatio||1,2)),pe.setSize(n,t,!1),De.aspect=n/t,De.updateProjectionMatrix(),ci.resize())});const LE={renderer:pe,scene:Zn,camera:De,build:xn,palette:Ms,walker:kt,api:at,audio:Dn,siteScene:ys,site:Pn,box:Tn,worlds:te,portal:ci,threshold:ye,SITE:On,buildSite:Ss,buildBox:J0,get link(){return te.link},get landing(){return te.link.landing},update:Ye,render:Jn,get drawCalls(){return pe.info.render.calls},get world(){return te.near.id}};window.game=LE;window.audio=Dn;window.doors=function(t,e={}){const i=t===void 0?!at.doors.open:!!t;if(e.now)return at.doors.force(i),`doors ${at.doors.state} (forced)`;const s=at.doors.request(i,{fittings:at.fittings,rotor:at.rotor,walker:kt,force:!!e.force});return`${at.doors.lastAction}: ${s}`};window.step=function(t=1){const e=Math.max(1,Math.round(t*60));for(let i=0;i<e;i++)Ye(1/60);return Jn(),{world:te.near.id,doors:at.doors.state,t:+at.doors.t.toFixed(3),drawCalls:pe.info.render.calls,crossings:ye.crossings}};window.walk=function(t=1,e={}){const i=t>=0?"KeyW":"KeyS",s=Math.abs(t),r=ye.crossings,o=kt._locked;kt._locked=!0,kt._down.add(i),e.run&&kt._down.add("ShiftLeft");let a=0;const c=kt.position.clone();let l=0;for(;a<s&&l++<1800;){const h=te.near;Ye(1/60),te.near===h&&(a+=c.distanceTo(kt.position)),c.copy(kt.position)}kt._down.delete(i),kt._down.delete("ShiftLeft"),kt._locked=o;for(let h=0;h<20;h++)Ye(1/60);return Jn(),{world:te.near.id,pos:[+kt.position.x.toFixed(3),+kt.position.y.toFixed(3),+kt.position.z.toFixed(3)],moved:+a.toFixed(3),crossed:ye.crossings-r,drawCalls:pe.info.render.calls}};window.look=function(t,e){return t!==void 0&&(kt.yaw=t),e!==void 0&&(kt.pitch=e),Ye(1/60),Jn(),{yaw:+kt.yaw.toFixed(4),pitch:+kt.pitch.toFixed(4)}};window.go=function(t,e,i){return kt.teleport(t,0,e,i),ye.seed(),Ye(1/60),Jn(),window.where()};window.cross=function(){const t=te.near.id;return ye.force(te.far.id),Ye(1/60),Jn(),`${t} -> ${te.near.id}`};window.atDoor=function(t=2.2){const e=te.link,i=t>=0;i!==(te.near.id!==Me)&&ye.force(i?On.id:Me);const s=new z(0,0,ln+t),r=i?e.toExterior(s):s,o=i?e.landing.yaw+Math.PI:0;return kt.teleport(r.x,0,r.z,o),kt.pitch=.02,ye.seed(),Ye(1/60),Jn(),window.where()};window.atDoorOff=function(t=1.6,e=1.1,i=1.2){const s=te.link;te.near.id===Me&&ye.force(On.id);const r=s.toExterior(new z(e,0,ln+t)),o=s.toExterior(new z(0,0,ln-i)),a=Math.atan2(o.x-r.x,o.z-r.z);return kt.teleport(r.x,0,r.z,a),kt.pitch=.04,ye.seed(),Ye(1/60),Jn(),window.where()};window.where=function(){const t=kt.position;return{world:te.near.id,pos:[+t.x.toFixed(3),+t.y.toFixed(3),+t.z.toFixed(3)],yaw:+kt.yaw.toFixed(4),doors:at.doors.state,portalLive:!!te.liveLink(De,at.doors),drawCalls:pe.info.render.calls,near:+ci.near.toFixed(4),bedMix:+ye.bedMix.toFixed(3),crossings:ye.crossings}};function Dp(n=te.link){const t=n.toExterior(new z(0,0,ln-.25));Pn.doorSpill.position.set(t.x,1.1,t.z)}const nh={id:"shellDoors",label:"Doors",pos:new z,action:"shellDoors",data:{},radius:1.6};Ss.interactables.push(nh);function Np(n=te.link){n.toSite(0,1.2,.95,nh.pos)}function CE(){nh.label=at.doors.locked?"Doors — locked":at.doors.moving?"Doors":at.doors.open?"Close the doors":"Open the doors"}Np(gr);window.place=function(t){const e=typeof t=="string"?Ri[t]:t;if(!e)return`unknown landing: ${t} (${Object.keys(Ri).join(", ")})`;if(e.site!==On.id){const r=typeof t=="string"?t:"";return location.search=r?`?landing=${r}`+(fr.get("seed")?`&seed=${fr.get("seed")}`:""):`?site=${e.site}&x=${e.x}&z=${e.z}&yaw=${e.yaw}`,`reloading into ${e.site}…`}wi.position.set(e.x,0,e.z),wi.rotation.y=e.yaw,Tn.leaves.position.copy(wi.position),Tn.leaves.rotation.y=e.yaw,Tn.lamp.position.set(e.x,Tn.lamp.position.y,e.z),wi.updateMatrixWorld(!0);const i=vp(e,K0),s=Ss.userData.collision;return s.boxes=s.boxes.slice(0,s.boxes.length-3).concat(i.boxCollision()),te.setLink(i),Dp(i),Np(i),ye.seed(),Ye(1/60),Jn(),`box at ${e.x}, ${e.z} yaw ${e.yaw} — ${window.where().world}`};window.help=function(){return["doors(open?, {now})  open/shut the doors (now: instant, no interlock)","step(seconds)        advance the clock; rAF is frozen in this pane","walk(metres, {run})  walk through the real solver AND the real threshold","look(yaw, pitch)     yaw 0 = +Z = the doors from inside","go(x, z, yaw)        teleport within the current world","cross()              step through the threshold without walking","place(landing)       move the TARDIS. "+Object.keys(Ri).join(" / "),"atDoor(m)            stand m metres out on the door axis, facing the doors","                     (+ outside on the plain, - inside the room)","where()              world, pose, doors, portal state, draw calls","shot(name, pose)     pose takes {world, landing, doors, pos, yaw, pitch, free}","shotAll()            the interior suite; shotThreshold() the new one","sfx(id)              fire one sound. sfx() lists all 41."].join(`
`)};window.sfx=function(t,e){if(t===void 0)return Object.keys(ra);if(!ra[t])return`no such sound: ${t} (${Object.keys(ra).length} in the catalogue)`;if(Dn.unlock(),!Dn.available)return"no AudioContext — click the page once, then try again";if(Dn.muted)return"muted — press N, or audio.setMuted(false)";const i=Dn.play(t,e||{});return i?i.endsAt??i:`dropped: ${t} (voice limit, or no anchor for its spot)`};window.shot=async function(t="shot",e=null){e&&(e.world&&e.world!==te.near.id&&ye.force(e.world),e.doors!==void 0&&at.doors.force(e.doors>0),e.pos&&kt.teleport(e.pos[0],e.pos[1]??0,e.pos[2],e.yaw),e.yaw!==void 0&&(kt.yaw=e.yaw),e.pitch!==void 0&&(kt.pitch=e.pitch),ye.seed());const i=1280,s=720,r=pe.getPixelRatio(),o=pe.getSize(new Ot),a=De.aspect;r!==1&&pe.setPixelRatio(1),pe.setSize(i,s,!1),De.aspect=i/s,De.updateProjectionMatrix(),ci.resize();const c=Math.max(1,(e==null?void 0:e.settle)??90);for(let u=0;u<c;u++)Ye(1/60);e!=null&&e.free&&(kt.driveCamera=!1,De.position.set(...e.free.pos),De.lookAt(...e.free.look),De.updateMatrixWorld(!0)),Jn(),e!=null&&e.free&&(kt.driveCamera=!0);const l=bp.toDataURL("image/png");return r!==1&&pe.setPixelRatio(r),o.x>0&&o.y>0&&(pe.setSize(o.x,o.y,!1),De.aspect=a,De.updateProjectionMatrix()),ci.resize(),(await fetch("http://localhost:5299/shot",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:t,dataURL:l})})).json()};window.shotAll=async function(){const t=[["entry",{pos:[0,0,2.3],yaw:Math.PI,pitch:-.04}],["console-axis",{pos:[0,0,-2.03],yaw:0,pitch:-.16}],["rotor",{pos:[0,0,2.03],yaw:Math.PI,pitch:.34}],["roundels",{pos:[0,0,-1.7],yaw:Math.PI,pitch:.06}],["doors",{pos:[0,0,.6],yaw:0,pitch:.1}],["scanner",{pos:[1.535,0,1.535],yaw:.785398,pitch:.1}],["fault",{pos:[-1.535,0,1.535],yaw:-.785398,pitch:.02}],["victorian",{pos:[-.75,0,-.75],yaw:3.926991,pitch:-.18}],["aerial",{pos:[0,0,2.3],yaw:Math.PI,settle:90,free:{pos:[2.3,2.95,2.3],look:[0,.95,0]}}]],e=[];for(const[r,o]of t)e.push(r+":"+((await shot(r,o)).ok?"ok":"FAIL"));const i=at.fittings,s=at.rotor;i.setShutters(!0),i.setScanner(!0),e.push("scanner-open:"+((await shot("scanner-open",{pos:[1.05,0,1.05],yaw:.785398,pitch:.1})).ok?"ok":"FAIL")),i.setShutters(!1),i.setScanner(!1);for(let r=0;r<120;r++)Ye(1/60);s.setRunning(!0);for(let r=0;r<600&&(Ye(1/60),!(s.height>s.parked+.12));r++);e.push("rotor-flight:"+((await shot("rotor-flight",{pos:[0,0,2.03],yaw:Math.PI,pitch:.34,settle:1})).ok?"ok":"FAIL")),s.setRunning(!1);for(let r=0;r<400;r++)Ye(1/60);return e};function Op(){const n=Ai.half-oo,t=c=>atDoor(c+n),e=(c,l,h)=>{const u=Math.hypot(c,l),f=(u+n)/u;return atDoorOff(c*f,l*f,h)},i=(c,l,h,u)=>{const f=Math.hypot(c,l),d=(u+n)/f;return atDoorOff(c*d,l*d,h)},s=Math.tan(De.fov*Math.PI/180/2),r=.3,o=(Oe.TOP/2+r)/s;return{FACE_D:n,atFace:t,atFaceOff:e,atFaceR:i,HALF_V:s,FIT_MARGIN:r,FIT_D:o,aimAt:(c,l)=>Math.atan((c-Se.EYE)/l)}}window.shotThreshold=async function(){const t=[],e=async(u,f)=>{const d=await shot(u,f);t.push(`${u}:${d.ok?"ok":"FAIL"}:${pe.info.render.calls}`)};te.near.id!==Me&&ye.force(Me);const{FACE_D:i,atFace:s,atFaceR:r,FIT_D:o,aimAt:a}=Op();at.fittings.setShutters(!0),at.fittings.setScanner(!0),await e("doors",{doors:0,pos:[0,0,.6],yaw:0,pitch:.1}),await e("doors-open",{doors:1,pos:[0,0,.6],yaw:0,pitch:.1}),at.doors.forceT(.45),await e("doors-swing",{pos:[0,0,.6],yaw:0,pitch:.1,settle:1}),await e("doors-funnel",{doors:1,pos:[.5,0,2.2],yaw:0,pitch:.02}),await e("portal-out",{doors:1,pos:[0,0,1.4],yaw:0,pitch:.02}),await e("portal-near",{doors:1,pos:[0,0,3.18],yaw:0,pitch:0}),await e("threshold-a",{doors:1,pos:[0,0,3.283],yaw:0,pitch:0}),await e("threshold-b",{doors:1,pos:[0,0,3.285],yaw:0,pitch:0});const c=On.id,l=()=>te.link;await e("site-sky",{world:c,doors:0,pos:[4,0,4],yaw:2.356194,pitch:.42}),await e("site-wide",{world:c,doors:0,pos:[0,0,5],yaw:Math.PI,pitch:-.06,free:{pos:[l().landing.x,6,l().landing.z+6],look:[l().landing.x,1.4,l().landing.z]}}),atDoor(10.8),await e("site-eye",{pitch:.02}),at.doors.force(!1),s(o),await e("box-front",{pitch:a(Oe.TOP/2,o)}),at.doors.force(!1),r(1.6,1.9,.085,o),await e("box-corner",{pitch:a(Oe.TOP/2,o)}),at.doors.force(!1),r(1.6,1.9,.085,1.6),await e("box-band",{pitch:a(1.76,1.6)}),at.doors.force(!1),atDoorOff(.9+i,-.305,0),await e("box-notice",{pitch:a(1.145,.9)});{const u=(Oe.SIGN_Y0+Oe.SIGN_Y1)/2;at.doors.force(!1),s(1.3),await e("box-sign",{pitch:a(u,1.3)})}{const u=(Oe.TOP+2.9)/2;at.doors.force(!1),s(2.1),await e("box-lamp",{pitch:a(u,2.1+Ai.half)})}at.doors.force(!0),atDoor(2.715),await e("portal-in",{}),at.doors.force(!0),s(o),await e("box-open",{pitch:a(Oe.TOP/2,o)}),at.doors.force(!0),atDoorOff(1.6,1.1,1.2),await e("portal-in-offaxis",{}),at.doors.force(!0),r(1.697,1.697,.085,o),await e("box-grazing",{pitch:a(Oe.TOP/2,o)}),at.doors.force(!0),r(1.24,2.66,.085,o),await e("box-raking",{pitch:a(Oe.TOP/2,o)}),at.doors.force(!1),atDoor(.7),await e("box-vestibule",{}),at.doors.force(!0),atDoorOff(1.1,.62,.085),await e("box-reveal",{}),at.doors.forceT(.45),atDoor(2.715),await e("box-swing",{settle:1});{const u=l().landing;at.doors.force(!1),await e("box-plan",{free:{pos:[u.x,7.2,u.z-.001],look:[u.x,1,u.z]}})}{const u=l();at.doors.force(!0);const f=oo+Ai.half+o,d=u.toExterior(new z(0,0,ln-f)),_=u.toExterior(new z(0,0,ln));kt.teleport(d.x,0,d.z,Math.atan2(_.x-d.x,_.z-d.z)),kt.pitch=a(Oe.TOP/2,o),ye.seed()}await e("box-behind",{}),at.doors.force(!0),atDoor(5.8),await e("box-behind-ish",{});const h=l().landing;Ri.ashfall_rim&&Ri.ashfall_rim.site===c&&(place("ashfall_rim"),at.doors.force(!0),atDoor(2.715),await e("box-placed",{}),place({...h})),ye.force(Me),at.doors.force(!1),at.fittings.setShutters(!1),at.fittings.setScanner(!1),kt.teleport(et.SPAWN[0],0,et.SPAWN[2],et.SPAWN_YAW),ye.seed();for(let u=0;u<90;u++)Ye(1/60);return t};window.shotLanding=async function(t="landing"){const{atFace:e,FIT_D:i,aimAt:s}=Op(),r=[],o=async(a,c)=>{const l=await shot(a,c);r.push(`${a}:${l.ok?"ok":"FAIL"}:${pe.info.render.calls}`)};te.near.id!==Me&&ye.force(Me),at.fittings.setShutters(!0),at.fittings.setScanner(!0),ye.force(On.id),at.doors.force(!0),atDoor(2.715),await o(`${t}-portal-in`,{}),at.doors.force(!1),e(i),await o(`${t}-box-front`,{pitch:s(Oe.TOP/2,i)}),at.doors.force(!0),e(i),await o(`${t}-box-open`,{pitch:s(Oe.TOP/2,i)}),ye.force(Me),at.doors.force(!1),at.fittings.setShutters(!1),at.fittings.setScanner(!1),kt.teleport(et.SPAWN[0],0,et.SPAWN[2],et.SPAWN_YAW),ye.seed();for(let a=0;a<90;a++)Ye(1/60);return r};console.info(`[room] built. ${Tp.children.length} baked meshes, ${xn.lights.length} lights, ${xn.interactables.length} interactables, ${xn.colliders.length} collider(s).`);
